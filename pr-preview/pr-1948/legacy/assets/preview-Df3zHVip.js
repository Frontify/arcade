const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocsRenderer-PKQXORMH-D-pnnxCY.js","assets/iframe-D5vRipnh.js","assets/index-BwDkhjyp.js","assets/_commonjsHelpers-BosuxZz1.js","assets/react-18-4gMM97tQ.js","assets/index-BxibOwXx.js","assets/index-D-8MO0q_.js","assets/extends-CF3RwP-h.js","assets/cloneDeep-Jr_ykHKc.js","assets/_getPrototype-ZJwJlCcn.js","assets/index-CgFxOaCH.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-D5vRipnh.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-D-pnnxCY.js").then(r=>r.ah),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
