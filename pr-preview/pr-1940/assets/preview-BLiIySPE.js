const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-JG5ydvJW.js","./iframe-DSRCCsYK.js","./index-Cs7sjTYM.js","./_commonjsHelpers-BosuxZz1.js","./react-18-BQl_2nuR.js","./index-D-8MO0q_.js","./isArray-FcF4KTdz.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-DSRCCsYK.js";import"../sb-preview/runtime.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__;var s=Object.entries(i.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-JG5ydvJW.js").then(r=>r.ai),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
