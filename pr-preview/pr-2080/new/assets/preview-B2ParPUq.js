const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-PKQXORMH-BM-hPKJf.js","assets/iframe-CI3d3fXw.js","assets/index-BwDkhjyp.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-Cdl9xEkg.js","assets/index-DxjWwZXO.js","assets/index-CppBZfU7.js","assets/index-D-8MO0q_.js","assets/extends-CF3RwP-h.js","assets/isArray-FcF4KTdz.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./iframe-CI3d3fXw.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-PKQXORMH-BM-hPKJf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
