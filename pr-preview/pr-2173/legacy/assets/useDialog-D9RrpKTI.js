import{R as l,r as o}from"./index-BwDkhjyp.js";import{E as f}from"./index-CS4BWtGh.js";import{b as s,$}from"./SSRProvider-CYXx33DY.js";import{b as m}from"./chain-CSFqNvhK.js";import{g as u,c as p}from"./useFocusable-ClqOF1PM.js";const i=l.createContext(null);function b(t){let{children:e}=t,a=o.useContext(i),[r,n]=o.useState(0),d=o.useMemo(()=>({parent:a,modalCount:r,addModal(){n(c=>c+1),a&&a.addModal()},removeModal(){n(c=>c-1),a&&a.removeModal()}}),[a,r]);return l.createElement(i.Provider,{value:d},e)}function x(){let t=o.useContext(i);return{modalProviderProps:{"aria-hidden":t&&t.modalCount>0?!0:null}}}function v(t){let{modalProviderProps:e}=x();return l.createElement("div",{"data-overlay-container":!0,...t,...e})}function C(t){return l.createElement(b,null,l.createElement(v,t))}function R(t){let e=s(),{portalContainer:a=e?null:document.body,...r}=t;if(l.useEffect(()=>{if(a!=null&&a.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[a]),!a)return null;let n=l.createElement(C,r);return f.createPortal(n,a)}function O(t){let e=o.useContext(i);if(!e)throw new Error("Modal is not contained within a provider");return o.useEffect(()=>{if(!(!e||!e.parent))return e.parent.addModal(),()=>{e&&e.parent&&e.parent.removeModal()}},[e,e.parent,void 0]),{modalProps:{"data-ismodal":!0}}}const E=l.createContext(null);function P(){let t=o.useContext(E),e=t==null?void 0:t.setContain;$(()=>{e==null||e(!0)},[e])}function S(t,e){let{role:a="dialog"}=t,r=m();r=t["aria-label"]?void 0:r;let n=o.useRef(!1);return o.useEffect(()=>{if(e.current&&!e.current.contains(document.activeElement)){u(e.current);let d=setTimeout(()=>{document.activeElement===e.current&&(n.current=!0,e.current&&(e.current.blur(),u(e.current)),n.current=!1)},500);return()=>{clearTimeout(d)}}},[e]),P(),{dialogProps:{...p(t,{labelable:!0}),role:a,tabIndex:-1,"aria-labelledby":t["aria-labelledby"]||r,onBlur:d=>{n.current&&d.stopPropagation()}},titleProps:{id:r}}}export{C as $,R as a,O as b,S as c};
