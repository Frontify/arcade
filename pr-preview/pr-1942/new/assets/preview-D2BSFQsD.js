const __vite__fileDeps=["assets/DocsRenderer-K4EAMTCU-D4Nnxeno.js","assets/iframe-BUBrSzZZ.js","assets/index-BwDkhjyp.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-C80jiYne.js","assets/index-B8XB3FuZ.js","assets/index-bZb2lCIu.js","assets/index-bQ6N_mn_.js","assets/jsx-runtime-Nms4Y4qS.js","assets/index-DCiFP9nt.js","assets/index-CtQTvCEI.js","assets/index-BWD2N0gV.js","assets/index-KKNPlsPu.js","assets/index-DqZMU0In.js","assets/index-Dmzo-8pR.js","assets/index-CXfIVGy4.js","assets/index-DXimoRZY.js","assets/_getPrototype-j1lepLtg.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as s}from"./iframe-BUBrSzZZ.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-D4Nnxeno.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
