const __vite__fileDeps=["assets/DocsRenderer-K4EAMTCU-BwtYoW5G.js","assets/iframe-BUWIQ88R.js","assets/index-BwDkhjyp.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-C80jiYne.js","assets/index-B8XB3FuZ.js","assets/chunk-QN4WKJDJ-Bf_F3oir.js","assets/Combination-DGkZSw7J.js","assets/_getPrototype-BKhpJVf-.js","assets/jsx-runtime-Nms4Y4qS.js","assets/index-Cs2EGVrg.js","assets/index-DXimoRZY.js","assets/index-CbKUEs_p.js","assets/index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as s}from"./iframe-BUWIQ88R.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-BwtYoW5G.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
