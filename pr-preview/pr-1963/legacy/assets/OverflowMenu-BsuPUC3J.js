import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{$ as v}from"./useLink-DorAuuFQ.js";import{$ as c}from"./useFocusRing-4Vnvtzpc.js";import{b as y}from"./useFocusable-CAGu0lKI.js";import{r as p}from"./index-BwDkhjyp.js";import{g as $}from"./elements-BOYmskOL.js";import{c as I,a as T}from"./focusStyle-CBFElZiz.js";import{m as u}from"./merge-DI-veSMP.js";import{M as O}from"./Menu-jIYAWUEk.js";import{b as j}from"./MenuItem-C9PA6k_H.js";import{I as P}from"./IconDotsHorizontal-CwVIpaos.js";function F(a,i){let{isCurrent:t,isDisabled:s,"aria-current":n,elementType:l="a",...m}=a,{linkProps:d}=v({isDisabled:s||t,elementType:l,...m},i),e=/^h[1-6]$/.test(l),o={};return e||(o=d),t&&(o["aria-current"]=n||"page",o.tabIndex=a.autoFocus?-1:void 0),{itemProps:{"aria-disabled":s,...o}}}const N=()=>r.jsx("svg",{"aria-hidden":"true",width:"13",height:"17",viewBox:"0 0 13 17",fill:"none",className:"tw-stroke-current tw-text-black-20",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("line",{x1:"3.52447",y1:"16.0623",x2:"8.46874",y2:"0.845385"})}),f=({decorator:a,label:i,link:t,onClick:s,showSeparator:n,children:l,"data-test-id":m="breadcrumb"})=>{const d=p.useRef(null),e=$(t,s),{itemProps:o}=F({isCurrent:!1,children:i,elementType:e},d),{isFocusVisible:x,focusProps:b}=c(),h=y(o,b,{a:{href:t},button:{onClick:s,type:"button"},span:{}}[e]),g=u(["tw-flex tw-gap-x-1 tw-items-center tw-leading-4 tw-h-6 tw-whitespace-pre-wrap tw-rounded",x&&I]);return r.jsxs("li",{className:"tw-flex tw-items-center tw-text-text-weak hover:tw-text-text tw-text-xs tw-transition-colors","data-test-id":`${m}-item`,children:[l??r.jsxs(e,{ref:d,...h,className:g,children:[a,i]}),n&&r.jsx(N,{})]})};f.displayName="FondueBreadcrumbItem";f.__docgenInfo={description:"",methods:[],displayName:"FondueBreadcrumbItem",props:{showSeparator:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactElement"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'breadcrumb'",computed:!1}}}};const w=({items:a,"data-test-id":i="overflow-menu"})=>{const[t,s]=p.useState(!1),n=p.useRef(null),{isFocusVisible:l,focusProps:m}=c(),d=()=>{var e;(e=n.current)==null||e.focus(),s(!1)};return r.jsxs("div",{"data-test-id":i,className:"tw-relative tw-bottom-0 tw-top-0 tw-flex",children:[r.jsx("button",{"aria-haspopup":"true","aria-expanded":t,"aria-label":"Open overflow menu",ref:n,className:u(["tw-w-6 tw-h-6 hover:tw-bg-box-neutral-strong-inverse-hover tw-rounded tw-flex tw-justify-center tw-items-center",t?"tw-bg-box-neutral-strong-inverse-pressed":"tw-bg-box-neutral-strong-inverse",l&&T]),type:"button",onClick:()=>{s(!t)},...m,children:r.jsx(P,{})}),r.jsx(O,{triggerRef:n,onClose:d,open:t,children:a.map((e,o)=>r.jsx(j,{link:e.link,onClick:e.onClick,children:e.label},`overflow-menu-item-${o}`))})]})};w.displayName="FondueOverflowMenu";w.__docgenInfo={description:"",methods:[],displayName:"FondueOverflowMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"OverflowMenuItemProps"}],raw:"OverflowMenuItemProps[]"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'overflow-menu'",computed:!1}}}};export{F as $,f as B,w as O};
