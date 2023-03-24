(()=>{var e,t={1132:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n="./building_04_nopack.babylon"},856:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SampleMaterial=void 0;const n=r(4730),o=r(7947),i=r(4392),a=r(3477);o.Effect.ShadersStore.sampleVertexShader=i,o.Effect.ShadersStore.sampleFragmentShader=a;class s extends n.ShaderMaterial{constructor(e,t){super(e,t,{vertex:"sample",fragment:"sample"},{uniforms:["worldViewProjection","time"],attributes:["position","normal","uv"]});const r=Date.now();t.registerBeforeRender((()=>{const e=Date.now()-r;this.time=e/1e3}))}set time(e){this.setFloat("time",e)}}t.SampleMaterial=s},3607:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),r(7792);const o=r(661),i=r(6182),a=r(559),s=r(2973),c=r(856),l=r(8096),d=r(1132);(new class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.id="gameCanvas",document.body.appendChild(this.canvas)}init(){return n(this,void 0,void 0,(function*(){const e=document.getElementById("gameCanvas"),t=new o.Engine(e,!0);let r=yield l.SceneLoader.LoadAsync(d.default),n=new l.UniversalCamera("UniversalCamera",new s.Vector3(0,15,-10),r);n.target=new s.Vector3(-15,0,21),n.attachControl(!0),n.applyGravity=!0,n.ellipsoid=new s.Vector3(1,1,1),r.gravity=new s.Vector3(0,-.1635,0),r.collisionsEnabled=!0,r.createDefaultXRExperienceAsync({floorMeshes:[r.getNodeByID("ground_grass"),r.getNodeByID("Stairs 1"),r.getNodeByID("Stairs 2"),r.getNodeByID("Stairs 3"),r.getNodeByID("Floor 1"),r.getNodeByID("Floor 2"),r.getNodeByID("Floor 3")]}),n.checkCollisions=!0,window.addEventListener("keydown",(e=>{e.shiftKey&&e.ctrlKey&&e.altKey&&73===e.keyCode&&(r.debugLayer.isVisible()?r.debugLayer.hide():r.debugLayer.show())})),new i.HemisphericLight("light",new s.Vector3(0,1,0),r);const u=a.MeshBuilder.CreateGround("mesh",{},r),v=new c.SampleMaterial("material",r);u.material=v,t.runRenderLoop((()=>{r.render()}))}))}}).init()},3477:e=>{e.exports="precision highp float;\r\n\r\n// Uniforms\r\nuniform float time;\r\n\r\n// Varying\r\nvarying vec2 uvV;\r\n\r\nvoid main(void) {\r\n    vec3 color = 0.5 + 0.5*cos(time + uvV.xyx +vec3(0,2,4));\r\n\r\n    gl_FragColor = vec4(color, 1.);\r\n}\r\n"},4392:e=>{e.exports="precision highp float;\r\n\r\n// Attributes\r\nattribute vec3 position;\r\nattribute vec3 normal;\r\nattribute vec2 uv;\r\n\r\n// Uniforms\r\nuniform mat4 worldViewProjection;\r\n\r\n// Varying\r\nvarying vec2 uvV;\r\n\r\nvoid main(void) {\r\n    gl_Position = worldViewProjection * vec4(position, 1.0);\r\n\r\n    uvV = uv;\r\n}\r\n"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(l=0;l<e.length;l++){for(var[r,o,i]=e[l],s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,i<a&&(a=i));s&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,s,c]=r,l=0;for(o in s)n.o(s,o)&&(n.m[o]=s[o]);for(c&&c(n),t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;n.O()},r=self.webpackChunkbabylonjs_typescript_starter=self.webpackChunkbabylonjs_typescript_starter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[96],(()=>n(3607)));o=n.O(o)})();