import{r as c}from"./index-BwDkhjyp.js";const u=[{id:"1-1-1",label:"Home",type:"document-page"},{id:"1-1-2",label:"Members",type:"document-page"},{id:"1-1-3",label:"About us",type:"document-page"}],i=[{id:"1-2-3-1",label:"SubItem 1",type:"document-page"},{id:"1-2-3-2",label:"SubItem 2",type:"document-page",isDisabled:!0},{id:"1-2-3-3",label:"SubItem 3",type:"document-page"}],g=[{id:"1-2-1",label:"Home Category Test Category",type:"document-page"},{id:"1-2-2",label:"Members Category",type:"document-page"},{id:"1-2-3",label:"About us Category",type:"document-category-category",nodes:i}],d=[{id:"1-1",label:"Document Category 1",nodes:u,type:"document-category",accepts:["document-page","document-page-within","document-category"].join(", ")},{id:"1-2",label:"Document Category 2",nodes:g,type:"document-category",accepts:["document-page","document-page-within","document-category"].join(", ")},{id:"1-3",label:"Document Page 1",type:"document-page",accepts:"document-page"},{id:"1-4",label:"Document Page 2",type:"document-page",accepts:"document-page"},{id:"1-5",label:"Document Page 3",type:"document-page",accepts:"document-page"}],m=[{id:"1",label:"Design System Testing - Deep Nested Items",type:"document",accepts:"document",nodes:d},{id:"2",label:"Design System Testing - Root Childless",type:"document",accepts:"document"},{id:"3",label:"Design System Testing - Not draggable",type:"document",accepts:"document",draggable:!1},{id:"4",label:"Design System Testing - level 0 constraint",type:"document",accepts:"document",levelConstraint:0}],y=[{id:"1",label:"Design System Testing - Deep Nested Items",nodes:d},{id:"2",label:"Design System Testing - Root Childless"},{id:"3",label:"Design System Testing - Not Selectable",isDisabled:!0},{id:"4",label:"Design System Testing - level 0 constraint",levelConstraint:0}],a=(e,s=[])=>[...e].map(o=>{var l;const t=((l=o.nodes)==null?void 0:l.length)??0,r=s.includes(o.id)?a((o==null?void 0:o.nodes)??[],s):void 0;return{...o,numChildNodes:t,nodes:r}}),b=e=>{const[s,n]=c.useState([]);return c.useEffect(()=>{setTimeout(()=>{n(a(m,e))},500)},[e]),[s,n]},D=(e,s=!1,n=!1)=>{const[o,t]=c.useState([]);return c.useEffect(()=>{setTimeout(()=>{if(!s)return t([]);if(n)return t(a(m));if(e==="1-lazyloaded")return t(a(d));if(e==="1-1-lazyloaded")return t(a(u));if(e==="1-2-lazyloaded")return t(a(g));if(e==="1-2-3-lazyloaded")return t(a(i))},500)},[e,s,n]),{nodes:o,setNodes:t}};export{b as a,y as b,m as t,D as u};
