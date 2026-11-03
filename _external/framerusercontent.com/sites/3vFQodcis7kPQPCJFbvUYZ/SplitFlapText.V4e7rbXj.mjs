import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{L as t,O as n,b as r,o as i,s as a,w as o,y as s,z as c}from"./react.DnMx5Dlp.mjs";import{J as l,S as u,k as d,o as f}from"./framer.CPv1cwGo.mjs";import{A as p,C as m,D as h,E as g,F as _,S as v,T as y,_ as b,b as x,d as S,g as C,h as w,j as T,l as E,u as D,v as O,w as k,x as A}from"./shared-lib.DfCnIDnC.mjs";function j(e){return Math.min(Math.max(e,0),1)}function M(e){let t=j(e);return t*t*t*(t*(t*6-15)+10)}function N(e,t,n){return e+(t-e)*n}function P(e,t){let n=e.fontFamily||`JetBrains Mono, monospace`;return`${e.fontStyle||`normal`} ${e.fontWeight??700} ${t}px ${n}`}function F(e,t){let n=e.trim()||`PORTFOLIO`,r=P(t,820),i=Number.parseFloat(String(t.letterSpacing??0))||0,a=document.createElement(`canvas`).getContext(`2d`);if(!a)throw Error(`Canvas 2D context is unavailable.`);a.font=r;let o=0;for(let e of n)o+=a.measureText(e).width;o+=Math.max(0,n.length-1)*i;let s=document.createElement(`canvas`);s.width=Math.min(8192,Math.max(4,Math.ceil(o+108))),s.height=919;let c=s.getContext(`2d`);if(!c)throw Error(`Canvas 2D context is unavailable.`);c.clearRect(0,0,s.width,s.height),c.font=r,c.textAlign=`left`,c.textBaseline=`middle`,c.fillStyle=`#ffffff`;let l=(s.width-o)*.5,u=s.height*.515;for(let e of n)c.fillText(e,l,u),l+=c.measureText(e).width+i;return s}function I(e){let t=r(null),a=r(null),o=r(null),l=r(e);l.current=e;let d=u.current()===u.canvas,f=n(()=>{let e=o.current,n=t.current;if(!e||!n)return;let r=Math.max(n.clientWidth,1),i=Math.max(n.clientHeight,1),a=r*L,s=i*L;e.camera.aspect=a/s,e.camera.fov=l.current.camera.fov,e.camera.position.z=l.current.camera.distance,e.camera.updateProjectionMatrix(),e.renderer.setSize(a,s,!1);let c=2*Math.tan(S.degToRad(e.camera.fov*.5))*e.camera.position.z,u=c*e.camera.aspect,d=c/L,f=u/L,p=l.current.layout,m=l.current.text.size,h=p.manualScale*m;if(p.scaleMode){let t=f*p.fitWidth/Math.max(e.wordWidth,.001),n=d*p.fitHeight/Math.max(e.wordHeight,.001);h=Math.min(t,n)*m}e.group.scale.setScalar(h),e.group.position.set(0,p.offsetY,0)},[]),D=n(()=>{let e=o.current;if(!e)return;let t=l.current.animation,n=e.pages,r=(e,t,n,r)=>{e.mesh.rotation.x=t,e.material.uniforms.uAngle.value=t,e.material.uniforms.uOpacity.value=n,e.material.uniforms.uCurlStrength.value=r,e.material.uniforms.uLengthSmoothing.value=l.current.geometry.lengthSmoothing*r};if(!t.assembleLoop){let i=Math.max(e.animationTime-t.startDelay,0)*t.rotationSpeed*Math.PI*2;for(let e of n)r(e,e.baseAngle+i,1,1);return}let i=Math.max(t.startDelay,0),a=Math.max(t.sequenceDuration,.1),s=i+a,c=e.animationTime%s,u=Math.floor(n.length*.5);if(c<i){for(let e of n)e.index===0?r(e,0,1,0):e.index===u?r(e,Math.PI,1,0):r(e,e.baseAngle,0,0);return}let d=c-i,f=j(d/a),p=Math.min(t.transitionDuration/a,.45),m=M(f/Math.max(p,1e-4)),h=M((1-f)/Math.max(p,1e-4)),g=Math.min(m,h),_=d*t.rotationSpeed*Math.PI*2;for(let e of n){let t=e.index===0,n=e.index===u;r(e,N(n?Math.PI:0,e.baseAngle+_,g),t||n?1:g,g)}},[]),P=n(()=>{let e=o.current;if(!e)return;let t=l.current,n=t.material.useTexture&&e.fillTexture?1:0;e.renderer.setClearColor(0,0);for(let r of e.pages){let i=r.material.uniforms;i.uFillTexture.value=e.fillTexture||e.fallbackTexture,i.uUseFillTexture.value=n,i.uFillAspect.value=e.fillTextureAspect,i.uTextAspect.value=e.textAspect,i.uTextureSize.value=t.material.textureSize,i.uTextColor.value.set(t.colors.text),i.uSideColor.value.set(t.material.sideColor),i.uSideBrightness.value=t.material.sideBrightness,i.uEdgeSoftness.value=t.material.edgeSoftness,i.uPageCurl.value=t.geometry.pageCurl,i.uCurlTiming.value=t.geometry.curlTiming,i.uLengthSmoothing.value=t.geometry.lengthSmoothing,i.uSplitGap.value=t.geometry.splitGap,i.uPageDepth.value=t.geometry.pageDepth,i.uHalfHeight.value=e.wordHeight*.5}},[]),I=n(async()=>{let e=o.current;if(!e||typeof document>`u`)return;let t=l.current,n=t.text.font.fontFamily||`JetBrains Mono`,r=t.text.font.fontWeight??700,i=t.text.font.fontStyle||`normal`;try{await document.fonts?.load(`${i} ${r} 120px ${n}`)}catch{}for(let t of e.pages)e.group.remove(t.mesh),t.material.dispose();e.pages.length=0,e.pageGeometry?.dispose(),e.pageGeometry=null,e.textTexture?.dispose(),e.textTexture=null;let a=F(t.text.content,t.text.font),s=new w(a);s.colorSpace=m,s.minFilter=x,s.magFilter=T,s.generateMipmaps=!0,s.anisotropy=Math.min(e.maxAnisotropy,8),s.needsUpdate=!0,e.textTexture=s,e.wordHeight=t.text.worldHeight,e.textAspect=a.width/a.height,e.wordWidth=e.wordHeight*e.textAspect;let c=e.wordHeight*.5,u=new y(e.wordWidth,c,8,72);u.translate(0,c*.5,0),e.pageGeometry=u;let d=Math.max(4,Math.round(t.geometry.pageCount/2)*2),p=Math.PI*2/d;for(let n=0;n<d;n++){let r=new h({transparent:!0,depthTest:!0,depthWrite:!1,side:2,uniforms:{uTexture:{value:s},uFillTexture:{value:e.fillTexture||e.fallbackTexture},uUseFillTexture:{value:0},uFillAspect:{value:e.fillTextureAspect},uTextAspect:{value:e.textAspect},uTextureSize:{value:t.material.textureSize},uTextColor:{value:new C(t.colors.text)},uSideColor:{value:new C(t.material.sideColor)},uAngle:{value:0},uOpacity:{value:1},uHalfHeight:{value:e.wordHeight*.5},uPageCurl:{value:t.geometry.pageCurl},uCurlTiming:{value:t.geometry.curlTiming},uLengthSmoothing:{value:t.geometry.lengthSmoothing},uSplitGap:{value:t.geometry.splitGap},uPageDepth:{value:t.geometry.pageDepth},uCurlStrength:{value:1},uSideBrightness:{value:t.material.sideBrightness},uEdgeSoftness:{value:t.material.edgeSoftness}},vertexShader:R,fragmentShader:z}),i=new v(u,r),a=n*p;i.rotation.x=a,i.renderOrder=n,e.group.add(i),e.pages.push({index:n,mesh:i,material:r,baseAngle:a})}e.animationTime=0,e.lastTime=performance.now(),P(),f(),D()},[D,f,P]);return s(()=>{if(c===void 0||!a.current)return;let e=a.current,n=new E({antialias:!0,alpha:!0,powerPreference:`high-performance`});n.setPixelRatio(2),n.setClearColor(0,0),n.outputColorSpace=m,n.domElement.style.width=`100%`,n.domElement.style.height=`100%`,n.domElement.style.display=`block`,n.domElement.style.pointerEvents=`none`,e.appendChild(n.domElement);let r=new g,i=new k(70,1,.1,100);i.position.set(0,0,10),i.lookAt(0,0,0);let s=new O;r.add(s);let u=new b(new Uint8Array([255,255,255,255]),1,1,_);u.colorSpace=m,u.needsUpdate=!0;let p={renderer:n,scene:r,camera:i,group:s,pages:[],fallbackTexture:u,textTexture:null,fillTexture:null,pageGeometry:null,fillTextureAspect:1,textAspect:1,wordWidth:1,wordHeight:l.current.text.worldHeight,animationTime:0,lastTime:performance.now(),rafId:0,loopRunning:!1,visible:!document.hidden,pageVisible:d,disposed:!1,maxAnisotropy:n.capabilities.getMaxAnisotropy(),textureToken:0,syncLoopState:null};o.current=p;let h=new ResizeObserver(f);t.current&&h.observe(t.current);let v=()=>{let e=l.current.animation,t=d&&e.stopAnimation;return p.visible&&p.pageVisible&&!e.paused&&!t&&!p.disposed},y=()=>{p.disposed||(D(),n.render(r,i))},x=e=>{if(!v()){p.loopRunning=!1,p.rafId=0;return}let t=Math.min(Math.max((e-p.lastTime)/1e3,0),.05);p.lastTime=e,p.animationTime+=t,D(),n.render(r,i),p.rafId=requestAnimationFrame(x)},S=()=>{p.loopRunning||!v()||(p.lastTime=performance.now(),p.loopRunning=!0,p.rafId=requestAnimationFrame(x))},C=()=>{p.rafId&&cancelAnimationFrame(p.rafId),p.rafId=0,p.loopRunning=!1,p.lastTime=performance.now()},w=()=>{v()?S():(C(),y())};p.syncLoopState=w;let T=new IntersectionObserver(e=>{p.pageVisible=e[0]?.isIntersecting??!1,w()},{threshold:.01});t.current&&T.observe(t.current);let A=()=>{p.visible=!document.hidden,w()};return document.addEventListener(`visibilitychange`,A),I().then(()=>{y(),w()}),()=>{p.disposed=!0,p.rafId&&cancelAnimationFrame(p.rafId),p.loopRunning=!1,p.syncLoopState=null,h.disconnect(),T.disconnect(),document.removeEventListener(`visibilitychange`,A);for(let e of p.pages)e.material.dispose();p.pages.length=0,p.pageGeometry?.dispose(),p.textTexture?.dispose(),p.fillTexture?.dispose(),p.fallbackTexture.dispose(),n.dispose(),n.forceContextLoss(),n.domElement.parentElement===e&&e.removeChild(n.domElement),o.current=null}},[d,I,D,f]),s(()=>{I()},[e.text.content,e.text.font.fontFamily,e.text.font.fontWeight,e.text.font.fontStyle,e.text.font.letterSpacing,e.text.font.fontVariationSettings,e.text.worldHeight,e.geometry.pageCount,I]),s(()=>{let t=o.current;if(!t)return;let n=++t.textureToken;t.fillTexture?.dispose(),t.fillTexture=null,t.fillTextureAspect=1;let r=e.material.texture;if(!r){P();return}new p().load(r,e=>{if(!o.current||n!==t.textureToken){e.dispose();return}e.colorSpace=m,e.minFilter=x,e.magFilter=T,e.wrapS=A,e.wrapT=A,e.generateMipmaps=!0,e.anisotropy=Math.min(t.maxAnisotropy,8),e.needsUpdate=!0,t.fillTexture=e;let r=e.image;t.fillTextureAspect=r?.width&&r?.height?r.width/r.height:1,P()},void 0,()=>P())},[e.material.texture,P]),s(()=>{P(),f(),D(),o.current?.syncLoopState?.()},[e,D,f,P]),i(`div`,{ref:t,style:{...e.style,position:`relative`,width:`100%`,height:`100%`,overflow:`visible`,background:`transparent`},children:i(`div`,{ref:a,style:{position:`absolute`,left:`-100%`,top:`-100%`,width:`300%`,height:`300%`,overflow:`visible`,pointerEvents:`none`}})})}var L,R,z,B=e((()=>{t(),a(),o(),l(),D(),L=3,R=`
    uniform float uAngle;
    uniform float uHalfHeight;
    uniform float uPageCurl;
    uniform float uCurlTiming;
    uniform float uLengthSmoothing;
    uniform float uSplitGap;
    uniform float uPageDepth;
    uniform float uCurlStrength;

    varying vec2 vUv;
    varying float vFacing;
    varying float vCurve;

    float smootherstep01(float value) {
        value = clamp(value, 0.0, 1.0);
        return value * value * value * (value * (value * 6.0 - 15.0) + 10.0);
    }

    void main() {
        vUv = uv;

        float linearProgress = clamp(uv.y, 0.0, 1.0);
        float smoothProgress = smootherstep01(linearProgress);
        float bendProgress = mix(linearProgress, smoothProgress, uLengthSmoothing);

        float periodicPhase = sin(uAngle);
        periodicPhase *= periodicPhase;

        float smoothPhase = smootherstep01(periodicPhase);
        float rotationEnvelope = pow(
            max(smoothPhase, 0.000001),
            max(uCurlTiming, 0.5)
        );

        float bendAmount = uPageCurl * rotationEnvelope * uCurlStrength;
        float bendAngle = bendProgress * bendAmount;

        vec3 transformed = position;

        if (bendAmount > 0.0001) {
            float radialDistance = uHalfHeight / bendAmount;
            transformed.y = uSplitGap * 0.5 + sin(bendAngle) * radialDistance;
            transformed.z = (1.0 - cos(bendAngle)) * radialDistance * uPageDepth;
        } else {
            transformed.y = uSplitGap * 0.5 + bendProgress * uHalfHeight;
            transformed.z = 0.0;
        }

        vec3 localNormal = vec3(0.0, -sin(bendAngle), cos(bendAngle));
        vec3 viewNormal = normalize(normalMatrix * localNormal);

        vFacing = abs(viewNormal.z);
        vCurve = rotationEnvelope * bendProgress;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
`,z=`
    uniform sampler2D uTexture;
    uniform sampler2D uFillTexture;

    uniform float uUseFillTexture;
    uniform float uFillAspect;
    uniform float uTextAspect;
    uniform float uTextureSize;
    uniform float uOpacity;

    uniform vec3 uTextColor;
    uniform vec3 uSideColor;

    uniform float uSideBrightness;
    uniform float uEdgeSoftness;

    varying vec2 vUv;
    varying float vFacing;
    varying float vCurve;

    vec2 coverUv(vec2 uv, float imageAspect, float frameAspect) {
        vec2 result = uv;

        if (imageAspect > frameAspect) {
            float scale = frameAspect / imageAspect;
            result.x = (result.x - 0.5) * scale + 0.5;
        } else {
            float scale = imageAspect / frameAspect;
            result.y = (result.y - 0.5) * scale + 0.5;
        }

        return result;
    }

    vec2 scaleTextureUv(vec2 uv, float scale) {
        return (uv - 0.5) / max(scale, 0.001) + 0.5;
    }

    void main() {
        float textureY = gl_FrontFacing
            ? mix(0.5, 1.0, vUv.y)
            : mix(0.5, 0.0, vUv.y);

        vec2 wordUv = vec2(vUv.x, textureY);
        vec4 glyph = texture2D(uTexture, wordUv);

        if (glyph.a < 0.02 || uOpacity < 0.001) discard;

        vec3 frontColor = uTextColor;

        if (uUseFillTexture > 0.5) {
            vec2 fillUv = coverUv(wordUv, uFillAspect, uTextAspect);
            fillUv = scaleTextureUv(fillUv, uTextureSize);
            fillUv = clamp(fillUv, vec2(0.001), vec2(0.999));
            frontColor = texture2D(uFillTexture, fillUv).rgb;
        }

        float facingFactor = pow(clamp(vFacing, 0.0, 1.0), uEdgeSoftness);
        vec3 shadedSideColor = uSideColor * uSideBrightness;
        vec3 surfaceColor = mix(shadedSideColor, frontColor, facingFactor);
        float curveShade = mix(1.0, 0.84, clamp(vCurve, 0.0, 1.0));

        gl_FragColor = vec4(surfaceColor * curveShade, glyph.a * uOpacity);

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
`,I.defaultProps={text:{content:`PORTFOLIO`,font:{fontFamily:`JetBrains Mono`,fontSize:16,fontWeight:700,fontStyle:`normal`,lineHeight:`1em`,letterSpacing:`0em`},size:1,worldHeight:2.2},animation:{assembleLoop:!0,startDelay:1,sequenceDuration:10,transitionDuration:2,rotationSpeed:.055,paused:!1,stopAnimation:!0},geometry:{pageCount:12,pageCurl:1.05,curlTiming:1,lengthSmoothing:.38,splitGap:0,pageDepth:1},material:{useTexture:!1,texture:void 0,textureSize:1,sideColor:`#A8A8A8`,sideBrightness:.48,edgeSoftness:.55},camera:{fov:70,distance:10},colors:{text:`#FFFFFF`},layout:{scaleMode:!0,fitWidth:.86,fitHeight:.46,manualScale:1,offsetY:0}},d(I,{text:{type:f.Object,title:`Text`,controls:{content:{type:f.String,title:`Content`,defaultValue:`PORTFOLIO`},font:{type:f.Font,title:`Font`,controls:`extended`,defaultValue:{fontFamily:`JetBrains Mono`,fontSize:16,fontWeight:700,fontStyle:`normal`,lineHeight:`1em`,letterSpacing:`0em`}},size:{type:f.Number,title:`Text Size`,defaultValue:1,min:.4,max:1.6,step:.01},worldHeight:{type:f.Number,title:`Height`,defaultValue:2.2,min:.5,max:6,step:.05}}},animation:{type:f.Object,title:`Animation`,controls:{assembleLoop:{type:f.Boolean,title:`Assemble Loop`,defaultValue:!0},startDelay:{type:f.Number,title:`Start Delay`,defaultValue:1,min:0,max:4,step:.05,unit:`s`},sequenceDuration:{type:f.Number,title:`Sequence`,defaultValue:10,min:1,max:15,step:.1,unit:`s`},transitionDuration:{type:f.Number,title:`Assemble`,defaultValue:2,min:.1,max:3,step:.05,unit:`s`},rotationSpeed:{type:f.Number,title:`Rotation`,defaultValue:.055,min:0,max:.5,step:.005},paused:{type:f.Boolean,title:`Paused`,defaultValue:!1},stopAnimation:{type:f.Boolean,title:`Stop Animation`,defaultValue:!0,description:`Pauses animation only in the Framer editor.`}}},geometry:{type:f.Object,title:`Geometry`,controls:{pageCount:{type:f.Number,title:`Page Count`,defaultValue:12,min:4,max:24,step:2,displayStepper:!0},pageCurl:{type:f.Number,title:`Page Curl`,defaultValue:1.05,min:0,max:2.4,step:.01},curlTiming:{type:f.Number,title:`Curl Timing`,defaultValue:1,min:.5,max:2.5,step:.01},lengthSmoothing:{type:f.Number,title:`Smoothing`,defaultValue:.38,min:0,max:1,step:.01},splitGap:{type:f.Number,title:`Split Gap`,defaultValue:0,min:0,max:1,step:.01},pageDepth:{type:f.Number,title:`Curl Depth`,defaultValue:1,min:0,max:1.8,step:.01}}},material:{type:f.Object,title:`Material`,controls:{useTexture:{type:f.Boolean,title:`Use Texture`,defaultValue:!1},texture:{type:f.File,title:`Texture`,allowedFileTypes:[`png`,`jpg`,`jpeg`,`webp`,`avif`],hidden:e=>!e.useTexture},textureSize:{type:f.Number,title:`Texture Size`,defaultValue:1,min:.25,max:4,step:.01,hidden:e=>!e.useTexture},sideColor:{type:f.Color,title:`Side Color`,defaultValue:`#A8A8A8`},sideBrightness:{type:f.Number,title:`Brightness`,defaultValue:.48,min:0,max:1.5,step:.01},edgeSoftness:{type:f.Number,title:`Edge Softness`,defaultValue:.55,min:.15,max:2,step:.01}}},camera:{type:f.Object,title:`Camera`,controls:{fov:{type:f.Number,title:`FOV`,defaultValue:70,min:20,max:100,step:1,unit:`°`},distance:{type:f.Number,title:`Distance`,defaultValue:10,min:4,max:20,step:.1}}},colors:{type:f.Object,title:`Colors`,controls:{text:{type:f.Color,title:`Text`,defaultValue:`#FFFFFF`}}},layout:{type:f.Object,title:`Layout`,controls:{scaleMode:{type:f.Boolean,title:`Scale Mode`,defaultValue:!0},fitWidth:{type:f.Number,title:`Fit Width`,defaultValue:.86,min:.1,max:1,step:.01,hidden:e=>!e.scaleMode},fitHeight:{type:f.Number,title:`Fit Height`,defaultValue:.46,min:.1,max:1,step:.01,hidden:e=>!e.scaleMode},manualScale:{type:f.Number,title:`Manual Scale`,defaultValue:1,min:.1,max:5,step:.01,hidden:e=>e.scaleMode},offsetY:{type:f.Number,title:`Offset Y`,defaultValue:0,min:-10,max:10,step:.05}}}})}));export{B as n,I as t};
//# sourceMappingURL=SplitFlapText.V4e7rbXj.mjs.map