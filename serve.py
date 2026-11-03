#!/usr/bin/env python3
"""Serve the downloaded Mondragon site with Framer's clean URLs.

Framer navigates to /studio, /works, and /works/<slug>. Those paths have to
map onto the saved .html files, and ../_external has to resolve at /_external.
"""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse
import mimetypes

ROOT = Path(__file__).resolve().parent
SITE = ROOT / "mondragon6.framer.website"
EXTERNAL = ROOT / "_external"

PAGES = {
    "/": "index.html",
    "/studio": "studio.html",
    "/works": "works.html",
    "/contact": "contact.html",
}


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        self._serve()

    def do_HEAD(self):
        self._serve(head=True)

    def _serve(self, head=False):
        path = unquote(urlparse(self.path).path)
        file = self._resolve(path)
        if file is None or not file.is_file():
            self.send_error(404, "File not found")
            return
        data = file.read_bytes()
        query = parse_qs(urlparse(self.path).query)
        if "range" in query:
            sliced = _slice_ranges(data, query["range"][0])
            if sliced is None:
                self.send_error(416, "Invalid range")
                return
            data = sliced
        mime, _ = mimetypes.guess_type(str(file))
        if mime is None:
            mime = "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        if not head:
            self.wfile.write(data)

    def _resolve(self, path):
        if path.startswith("/_external/"):
            return EXTERNAL / path[len("/_external/") :]
        key = path if path == "/" else path.rstrip("/")
        if key in PAGES:
            return SITE / PAGES[key]
        rel = path.lstrip("/")
        if path.startswith("/works/") and not rel.endswith(".html"):
            html = SITE / (rel + ".html")
            if html.is_file():
                return html
        candidate = SITE / rel
        if candidate.is_file():
            return candidate
        return None


def _slice_ranges(data, spec):
    """Framer CMS asks for inclusive byte ranges: ?range=0-168 or 0-168,169-336."""
    parts = []
    for piece in spec.split(","):
        piece = piece.strip()
        if "-" not in piece:
            return None
        start_s, end_s = piece.split("-", 1)
        try:
            start = int(start_s)
            end = int(end_s)
        except ValueError:
            return None
        if start < 0 or end < start or end >= len(data):
            return None
        parts.append(data[start : end + 1])
    return b"".join(parts) if parts else None


def main():
    server = ThreadingHTTPServer(("0.0.0.0", 8765), Handler)
    print("Serving on port 8765 (this computer and other devices on the same Wi-Fi)")
    server.serve_forever()


if __name__ == "__main__":
    main()
