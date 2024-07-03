import{j as $}from"./jsx-runtime-Nms4Y4qS.js";import{h as te}from"./index-Cs2EGVrg.js";import{$ as ge}from"./useButton-DofEV6SJ.js";import{a as ve}from"./FocusScope-DYM0gkGr.js";import{h as he,$ as be}from"./useFocusRing-4Vnvtzpc.js";import{b as ye,a as we,c as $e}from"./useMenuTrigger-BhJE1x_4.js";import{b as Ee,c as ke,a as Te}from"./useDialog-CN--Sfvy.js";import{b as ce}from"./useFocusable-CAGu0lKI.js";import{a as xe,$ as qe}from"./useOverlayTriggerState-Bq4IkdK0.js";import{r as x}from"./index-BwDkhjyp.js";import{F as Le}from"./focusStyle-CBFElZiz.js";import{m as F}from"./merge-DI-veSMP.js";import{B as Be,a as Pe,b as D,c as U}from"./Button-CYWlMQhW.js";import{I as He}from"./IconCheckMark-CLvJH1sB.js";import{B as Re}from"./Badge-D-eWKloI.js";import{F as Se}from"./FieldsetHeader-BuJ3auxl.js";import{$ as X}from"./SSRProvider-CYXx33DY.js";import{$ as Me}from"./context-C2PaECDE.js";import{g as Ie}from"./getVerticalPositioning-Cog3xIxH.js";function Ne(){return typeof window.ResizeObserver<"u"}function Fe(e){const{ref:t,onResize:o}=e;x.useEffect(()=>{let a=t==null?void 0:t.current;if(a)if(Ne()){const n=new window.ResizeObserver(i=>{i.length&&o()});return n.observe(a),()=>{a&&n.unobserve(a)}}else return window.addEventListener("resize",o,!1),()=>{window.removeEventListener("resize",o,!1)}},[o,t])}function Z(e,t=-1/0,o=1/0){return Math.min(Math.max(e,t),o)}const M={top:"top",bottom:"top",left:"left",right:"left"},j={top:"bottom",bottom:"top",left:"right",right:"left"},Ce={top:"left",left:"top"},J={top:"height",left:"width"},pe={width:"totalWidth",height:"totalHeight"},z={};let q=typeof document<"u"&&window.visualViewport;function oe(e){let t=0,o=0,a=0,n=0,i=0,l=0,r={},p=(q==null?void 0:q.scale)>1;if(e.tagName==="BODY"){let u=document.documentElement;a=u.clientWidth,n=u.clientHeight;var s;t=(s=q==null?void 0:q.width)!==null&&s!==void 0?s:a;var c;o=(c=q==null?void 0:q.height)!==null&&c!==void 0?c:n,r.top=u.scrollTop||e.scrollTop,r.left=u.scrollLeft||e.scrollLeft,q&&(i=q.offsetTop,l=q.offsetLeft)}else({width:t,height:o,top:i,left:l}=I(e)),r.top=e.scrollTop,r.left=e.scrollLeft,a=t,n=o;return he()&&(e.tagName==="BODY"||e.tagName==="HTML")&&p&&(r.top=0,r.left=0,i=q.pageTop,l=q.pageLeft),{width:t,height:o,totalWidth:a,totalHeight:n,scroll:r,top:i,left:l}}function ze(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function ne(e,t,o,a,n,i,l){let r=n.scroll[e],p=a[J[e]],s=a.scroll[M[e]]+i,c=p+a.scroll[M[e]]-i,u=t-r+l[e]-a[M[e]],m=t-r+o+l[e]-a[M[e]];return u<s?s-u:m>c?Math.max(c-m,s-u):0}function je(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function ae(e){if(z[e])return z[e];let[t,o]=e.split(" "),a=M[t]||"right",n=Ce[a];M[o]||(o="center");let i=J[a],l=J[n];return z[e]={placement:t,crossPlacement:o,axis:a,crossAxis:n,size:i,crossSize:l},z[e]}function G(e,t,o,a,n,i,l,r,p,s){let{placement:c,crossPlacement:u,axis:m,crossAxis:d,size:g,crossSize:b}=a,f={};f[d]=e[d],u==="center"?f[d]+=(e[b]-o[b])/2:u!==d&&(f[d]+=e[b]-o[b]),f[d]+=i;const T=e[d]-o[b]+p+s,v=e[d]+e[b]-p-s;if(f[d]=Z(f[d],T,v),c===m){const y=r?l[g]:t[pe[g]];f[j[m]]=Math.floor(y-e[m]+n)}else f[m]=Math.floor(e[m]+e[g]+n);return f}function Ae(e,t,o,a,n,i,l,r){const p=a?o.height:t[pe.height];let s=e.top!=null?o.top+e.top:o.top+(p-e.bottom-l),c=r!=="top"?Math.max(0,t.height+t.top+t.scroll.top-s-(n.top+n.bottom+i)):Math.max(0,s+l-(t.top+t.scroll.top)-(n.top+n.bottom+i));return Math.min(t.height-i*2,c)}function re(e,t,o,a,n,i){let{placement:l,axis:r,size:p}=i;return l===r?Math.max(0,o[r]-e[r]-e.scroll[r]+t[r]-a[r]-a[j[r]]-n):Math.max(0,e[p]+e[r]+e.scroll[r]-t[r]-o[r]-o[p]-a[r]-a[j[r]]-n)}function Oe(e,t,o,a,n,i,l,r,p,s,c,u,m,d,g,b){let f=ae(e),{size:T,crossAxis:v,crossSize:y,placement:R,crossPlacement:L}=f,h=G(t,r,o,f,c,u,s,m,g,b),H=c,E=re(r,s,t,n,i+c,f);if(l&&a[T]>E){let _=ae(`${j[R]} ${L}`),fe=G(t,r,o,_,c,u,s,m,g,b);re(r,s,t,n,i+c,_)>E&&(f=_,h=fe,H=c)}let k="bottom";f.axis==="top"?f.placement==="top"?k="top":f.placement==="bottom"&&(k="bottom"):f.crossAxis==="top"&&(f.crossPlacement==="top"?k="bottom":f.crossPlacement==="bottom"&&(k="top"));let B=ne(v,h[v],o[y],r,p,i,s);h[v]+=B;let P=Ae(h,r,s,m,n,i,o.height,k);d&&d<P&&(P=d),o.height=Math.min(o.height,P),h=G(t,r,o,f,H,u,s,m,g,b),B=ne(v,h[v],o[y],r,p,i,s),h[v]+=B;let S={},A=t[v]+.5*t[y]-h[v];const O=g/2+b,V=o[y]-g/2-b,C=t[v]-h[v]+g/2,Y=t[v]+t[y]-h[v]-g/2,W=Z(A,C,Y);return S[v]=Z(W,O,V),{position:h,maxHeight:P,arrowOffsetLeft:S.left,arrowOffsetTop:S.top,placement:f.placement}}function Ve(e){let{placement:t,targetNode:o,overlayNode:a,scrollNode:n,padding:i,shouldFlip:l,boundaryElement:r,offset:p,crossOffset:s,maxHeight:c,arrowSize:u=0,arrowBoundaryOffset:m=0}=e,d=a instanceof HTMLElement?Ye(a):document.documentElement,g=d===document.documentElement;const b=window.getComputedStyle(d).position;let f=!!b&&b!=="static",T=g?I(o):ie(o,d);if(!g){let{marginTop:E,marginLeft:k}=window.getComputedStyle(o);T.top+=parseInt(E,10)||0,T.left+=parseInt(k,10)||0}let v=I(a),y=je(a);v.width+=y.left+y.right,v.height+=y.top+y.bottom;let R=ze(n),L=oe(r),h=oe(d),H=r.tagName==="BODY"?I(d):ie(d,r);return d.tagName==="HTML"&&r.tagName==="BODY"&&(h.scroll.top=0,h.scroll.left=0),Oe(t,T,v,R,y,i,l,L,h,H,p,s,f,c,u,m)}function I(e){let{top:t,left:o,width:a,height:n}=e.getBoundingClientRect(),{scrollTop:i,scrollLeft:l,clientTop:r,clientLeft:p}=document.documentElement;return{top:t+i-r,left:o+l-p,width:a,height:n}}function ie(e,t){let o=window.getComputedStyle(e),a;if(o.position==="fixed"){let{top:n,left:i,width:l,height:r}=e.getBoundingClientRect();a={top:n,left:i,width:l,height:r}}else{a=I(e);let n=I(t),i=window.getComputedStyle(t);n.top+=(parseInt(i.borderTopWidth,10)||0)-t.scrollTop,n.left+=(parseInt(i.borderLeftWidth,10)||0)-t.scrollLeft,a.top-=n.top,a.left-=n.left}return a.top-=parseInt(o.marginTop,10)||0,a.left-=parseInt(o.marginLeft,10)||0,a}function Ye(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position==="static"&&!le(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!le(t);)t=t.parentElement;return t||document.documentElement}function le(e){let t=window.getComputedStyle(e);return t.transform!=="none"||/transform|perspective/.test(t.willChange)||t.filter!=="none"||t.contain==="paint"||"backdropFilter"in t&&t.backdropFilter!=="none"||"WebkitBackdropFilter"in t&&t.WebkitBackdropFilter!=="none"}let w=typeof document<"u"&&window.visualViewport;function We(e){let{direction:t}=Me(),{arrowSize:o=0,targetRef:a,overlayRef:n,scrollRef:i=n,placement:l="bottom",containerPadding:r=12,shouldFlip:p=!0,boundaryElement:s=typeof document<"u"?document.body:null,offset:c=0,crossOffset:u=0,shouldUpdatePosition:m=!0,isOpen:d=!0,onClose:g,maxHeight:b,arrowBoundaryOffset:f=0}=e,[T,v]=x.useState({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),y=[m,l,n.current,a.current,i.current,r,p,s,c,u,d,t,b,f,o],R=x.useRef(w==null?void 0:w.scale);x.useEffect(()=>{d&&(R.current=w==null?void 0:w.scale)},[d]);let L=x.useCallback(()=>{if(m===!1||!d||!n.current||!a.current||!i.current||!s||(w==null?void 0:w.scale)!==R.current)return;let E=n.current;if(!b&&n.current){var k;E.style.top="0px",E.style.bottom="";var B;E.style.maxHeight=((B=(k=window.visualViewport)===null||k===void 0?void 0:k.height)!==null&&B!==void 0?B:window.innerHeight)+"px"}let P=Ve({placement:De(l,t),overlayNode:n.current,targetNode:a.current,scrollNode:i.current,padding:r,shouldFlip:p,boundaryElement:s,offset:c,crossOffset:u,maxHeight:b,arrowSize:o,arrowBoundaryOffset:f});E.style.top="",E.style.bottom="",Object.keys(P.position).forEach(S=>E.style[S]=P.position[S]+"px"),E.style.maxHeight=P.maxHeight!=null?P.maxHeight+"px":void 0,v(P)},y);X(L,y),_e(L),Fe({ref:n,onResize:L});let h=x.useRef(!1);X(()=>{let E,k=()=>{h.current=!0,clearTimeout(E),E=setTimeout(()=>{h.current=!1},500),L()},B=()=>{h.current&&k()};return w==null||w.addEventListener("resize",k),w==null||w.addEventListener("scroll",B),()=>{w==null||w.removeEventListener("resize",k),w==null||w.removeEventListener("scroll",B)}},[L]);let H=x.useCallback(()=>{h.current||g()},[g,h]);return ye({triggerRef:a,isOpen:d,onClose:g&&H}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...T.position,maxHeight:T.maxHeight}},placement:T.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:T.arrowOffsetLeft,top:T.arrowOffsetTop}},updatePosition:L}}function _e(e){X(()=>(window.addEventListener("resize",e,!1),()=>{window.removeEventListener("resize",e,!1)}),[e])}function De(e,t){return t==="rtl"?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}const Ue=typeof document<"u"?document:void 0;function Ge(e="body",{document:t=Ue}={}){if(!t)return()=>{};let o=t.querySelector(e);if(!o)return()=>{};let a={childList:!0},n=[],i,l=new MutationObserver(r=>{const p=t.querySelector('[data-live-announcer="true"]');for(let s of r)if(s.type==="childList"&&s.addedNodes.length>0){let c=Array.from(s.addedNodes).find(u=>{var m;return(m=u.querySelector)===null||m===void 0?void 0:m.call(u,'[aria-modal="true"], [data-ismodal="true"]')});if(c){n.push(c);let u=c.querySelector('[aria-modal="true"], [data-ismodal="true"]');i==null||i();let m=[u,...p?[p]:[]];i=te(m)}}else if(s.type==="childList"&&s.removedNodes.length>0){let c=Array.from(s.removedNodes),u=n.findIndex(m=>c.includes(m));if(u>=0)if(i==null||i(),n=n.filter((m,d)=>d!==u),n.length>0){let d=[n[n.length-1].querySelector('[aria-modal="true"], [data-ismodal="true"]'),...p?[p]:[]];i=te(d)}else i=void 0}});return l.observe(o,a),()=>{i==null||i(),l.disconnect()}}const K=({buttons:e,border:t=!0})=>$.jsx("div",{className:F(["tw-flex tw-gap-x-3 tw-rounded-b tw-justify-end tw-py-5 tw-px-8 tw-bg-base",t&&"tw-border-t tw-border-line","tw-min-h-[4.75rem]"]),children:e.map((o,a)=>$.jsx(Be,{...o,size:Pe.Medium},`flyout-footer-button-${a}`))});K.displayName="FondueFlyoutFooter";const Q=({onConfirm:e,onCancel:t})=>$.jsx(K,{buttons:e?[{style:D.Default,emphasis:U.Default,children:"Cancel",onClick:t},{style:D.Default,emphasis:U.Strong,children:"Confirm",onClick:e,icon:$.jsx(He,{})}]:[{style:D.Default,emphasis:U.Default,children:"Close",onClick:t}]});Q.displayName="FondueLegacyFlyoutFooter";K.__docgenInfo={description:"",methods:[],displayName:"FondueFlyoutFooter",props:{buttons:{required:!0,tsType:{name:"union",raw:"[ButtonProps, ButtonProps] | [ButtonProps]",elements:[{name:"tuple",raw:"[ButtonProps, ButtonProps]",elements:[{name:"signature",type:"object",raw:`{
    type?: ButtonType;
    title?: string;
    style?: ButtonStyle;
    emphasis?: ButtonEmphasis;
    hideLabel?: boolean;
    size?: ButtonSize;
    rounding?: ButtonRounding;
    disabled?: boolean;
    icon?: ReactElement;
    children?: ReactNode;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    hugWidth?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    formId?: string;
    /** @deprecated use emphasis with ButtonEmphasis.Weak */
    solid?: boolean;
    /** @deprecated inverted can be done by wrapping the component in a className="tw-dark" */
    inverted?: boolean;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"type",value:{name:"ButtonType",required:!1}},{key:"title",value:{name:"string",required:!1}},{key:"style",value:{name:"ButtonStyle",required:!1}},{key:"emphasis",value:{name:"ButtonEmphasis",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"size",value:{name:"ButtonSize",required:!1}},{key:"rounding",value:{name:"ButtonRounding",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event?: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"hugWidth",value:{name:"boolean",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}},{key:"formId",value:{name:"string",required:!1}},{key:"solid",value:{name:"boolean",required:!1},description:"@deprecated use emphasis with ButtonEmphasis.Weak"},{key:"inverted",value:{name:"boolean",required:!1},description:'@deprecated inverted can be done by wrapping the component in a className="tw-dark"'},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
    type?: ButtonType;
    title?: string;
    style?: ButtonStyle;
    emphasis?: ButtonEmphasis;
    hideLabel?: boolean;
    size?: ButtonSize;
    rounding?: ButtonRounding;
    disabled?: boolean;
    icon?: ReactElement;
    children?: ReactNode;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    hugWidth?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    formId?: string;
    /** @deprecated use emphasis with ButtonEmphasis.Weak */
    solid?: boolean;
    /** @deprecated inverted can be done by wrapping the component in a className="tw-dark" */
    inverted?: boolean;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"type",value:{name:"ButtonType",required:!1}},{key:"title",value:{name:"string",required:!1}},{key:"style",value:{name:"ButtonStyle",required:!1}},{key:"emphasis",value:{name:"ButtonEmphasis",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"size",value:{name:"ButtonSize",required:!1}},{key:"rounding",value:{name:"ButtonRounding",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event?: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"hugWidth",value:{name:"boolean",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}},{key:"formId",value:{name:"string",required:!1}},{key:"solid",value:{name:"boolean",required:!1},description:"@deprecated use emphasis with ButtonEmphasis.Weak"},{key:"inverted",value:{name:"boolean",required:!1},description:'@deprecated inverted can be done by wrapping the component in a className="tw-dark"'},{key:"data-test-id",value:{name:"string",required:!1}}]}}]},{name:"tuple",raw:"[ButtonProps]",elements:[{name:"signature",type:"object",raw:`{
    type?: ButtonType;
    title?: string;
    style?: ButtonStyle;
    emphasis?: ButtonEmphasis;
    hideLabel?: boolean;
    size?: ButtonSize;
    rounding?: ButtonRounding;
    disabled?: boolean;
    icon?: ReactElement;
    children?: ReactNode;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    hugWidth?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
    formId?: string;
    /** @deprecated use emphasis with ButtonEmphasis.Weak */
    solid?: boolean;
    /** @deprecated inverted can be done by wrapping the component in a className="tw-dark" */
    inverted?: boolean;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"type",value:{name:"ButtonType",required:!1}},{key:"title",value:{name:"string",required:!1}},{key:"style",value:{name:"ButtonStyle",required:!1}},{key:"emphasis",value:{name:"ButtonEmphasis",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"size",value:{name:"ButtonSize",required:!1}},{key:"rounding",value:{name:"ButtonRounding",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event?: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"hugWidth",value:{name:"boolean",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}},{key:"formId",value:{name:"string",required:!1}},{key:"solid",value:{name:"boolean",required:!1},description:"@deprecated use emphasis with ButtonEmphasis.Weak"},{key:"inverted",value:{name:"boolean",required:!1},description:'@deprecated inverted can be done by wrapping the component in a className="tw-dark"'},{key:"data-test-id",value:{name:"string",required:!1}}]}}]}]},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};Q.__docgenInfo={description:"",methods:[],displayName:"FondueLegacyFlyoutFooter",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Xe=({title:e,decorator:t,badges:o=[],onClose:a,children:n,isOpen:i,positionProps:l,overlayTriggerProps:r,scrollRef:p,fixedHeader:s,fixedFooter:c,fitContent:u,contentMinHeight:m},d)=>{const{overlayProps:g}=xe({onClose:a,isOpen:i,isDismissable:!0},d),{modalProps:b}=Ee(),{dialogProps:f,titleProps:T}=ke({},d);return $.jsx("div",{...ce(g,f,b,l,r),ref:d,className:F(["tw-rounded tw-flex tw-outline-none tw-relative",u?"tw-min-w-0":"tw-min-w-[400px]"]),children:$.jsxs("div",{className:F(["tw-flex tw-flex-col tw-flex-auto tw-min-h-0 tw-rounded tw-shadow-mid tw-border tw-border-line-x-strong"]),children:[s,$.jsxs("div",{ref:p,className:F(["tw-flex tw-overflow-y-auto tw-overflow-x-hidden tw-flex-col tw-divide-y tw-divide tw-divide-black-10 tw-bg-white tw-text-black dark:tw-text-white dark:tw-bg-black-95",!s&&"tw-rounded-t",!c&&"tw-rounded-b"]),style:{minHeight:`${m}px`},children:[e&&$.jsxs("div",{className:"tw-flex tw-justify-between tw-flex-wrap tw-gap-3 tw-p-8",children:[$.jsx("div",{...T,className:"tw-inline-flex",children:$.jsx(Se,{decorator:t,children:e})}),$.jsx("div",{className:"tw-inline-flex tw-gap-2 tw-flex-wrap",children:o.map((v,y)=>x.createElement(Re,{...v,key:`flyout-badge-${y}`}))})]}),x.Children.map(n,(v,y)=>$.jsx("div",{children:v},y)),$.jsx(we,{onDismiss:a})]}),c]})})},ee=x.forwardRef(Xe);ee.displayName="FondueOverlay";ee.__docgenInfo={description:"",methods:[],displayName:"FondueOverlay",props:{badges:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Ze=(e,{isDisabled:t=!1})=>{x.useEffect(()=>{const o=e.current,a=l=>{const r=["auto","scroll"];if(!l||l===o)return null;const p=r.includes(window.getComputedStyle(l).overflowY);return l.scrollHeight>l.clientHeight&&p?l:a(l.parentElement)},n=l=>{const r=()=>{l.stopPropagation(),l.preventDefault()};if(o!==null){const p=l.deltaY,s=p<0,c=a(l.target)??o,{scrollTop:u,scrollHeight:m,clientHeight:d}=c;if(!s&&p>m-d-u)return c.scrollTop=m,r(),!1;if(s&&-p>u)return c.scrollTop=0,r(),!1}},i={passive:!1,capture:!1};return!t&&o!==null&&o.addEventListener("wheel",n,i),()=>{!t&&o!==null&&o.removeEventListener("wheel",n,i)}},[t,e])},Je=(e,t)=>{let o=0;if(t.current&&e.current){const a=e.current.scrollHeight,{scrollHeight:n,clientHeight:i}=t.current;o=a+(n-i)}return o},se=5,de=12,ue=70,Ke={top:"bottom",bottom:"top",left:"right",right:"left","top left":"bottom left","top right":"bottom right","bottom left":"top left","bottom right":"top right"},Qe=({triggerRef:e,overlayRef:t,scrollRef:o,isOpen:a,placement:n,offset:i,updatePositionOnContentChange:l})=>{var d;const[r,p]=x.useState(!1),s=n&&Ke[n],c=r?s:n,{overlayProps:u,updatePosition:m}=We({targetRef:e,overlayRef:t,shouldFlip:n===N.Left||n===N.Right,placement:n&&(n===N.Left||n===N.Right)?n:c,containerPadding:de,offset:i??se,scrollRef:o,isOpen:a});if(x.useLayoutEffect(()=>{const g=new ResizeObserver(m);if(a){const b=Je(t,o),f=Ie(e.current,b,se,ue).position==="top";p(f),o.current&&l&&g.observe(o.current),t.current&&l&&g.observe(t.current)}return()=>{g.disconnect()}},[a,l,m,o,t,e]),typeof((d=u==null?void 0:u.style)==null?void 0:d.maxHeight)=="number"&&!r){const g=ue-de;u.style.maxHeight-=g}return{positionProps:u}},wt="#eaebeb",$t="10px";var N=(e=>(e.Top="top",e.Bottom="bottom",e.TopLeft="top left",e.BottomLeft="bottom left",e.TopRight="top right",e.BottomRight="bottom right",e.Right="right",e.Left="left",e))(N||{});const me=({trigger:e,isTriggerDisabled:t=!1,decorator:o,onConfirm:a,onCancel:n,children:i,onOpenChange:l,isOpen:r=!1,title:p="",badges:s=[],hug:c=!0,fitContent:u=!1,fixedHeader:m,fixedFooter:d,contentMinHeight:g,legacyFooter:b=!0,placement:f="bottom left",offset:T,updatePositionOnContentChange:v=!1})=>{const y=qe({isOpen:r,onOpenChange:l}),{toggle:R,close:L}=y,h=x.useRef(null),H=x.useRef(null),E=x.useRef(null),{isFocusVisible:k,focusProps:B}=be(),{triggerProps:P,overlayProps:S}=$e({type:"dialog"},y,h),{positionProps:A}=Qe({triggerRef:h,overlayRef:H,scrollRef:E,isOpen:r,placement:f,offset:T,updatePositionOnContentChange:v}),{buttonProps:O,isPressed:V}=ge({onPress:()=>R(),elementType:"div",isDisabled:t,preventFocusOnPress:!0},h);x.useEffect(()=>{const W=Ge();return()=>W()},[]),Ze(H,{isDisabled:!r});const C=ce(O,P,B,{"aria-label":"Toggle Flyout Menu"}),Y=typeof e=="function"?e(C,h,{isFocusVisible:k,isPressed:V}):$.jsx("div",{...C,ref:h,className:F(["tw-outline-none tw-rounded",c?"tw-mx-3":"tw-w-full",k&&Le]),"data-test-id":"flyout-trigger",children:e});return $.jsxs($.Fragment,{children:[Y,r&&$.jsx(Te,{children:$.jsx(ve,{restoreFocus:!0,contain:!0,children:$.jsx(ee,{title:p,badges:s,decorator:o,isOpen:r,onClose:L,overlayTriggerProps:S,positionProps:A,fixedHeader:m,fixedFooter:b?$.jsx(Q,{onConfirm:a,onCancel:n}):d,ref:H,scrollRef:E,fitContent:u,contentMinHeight:g,children:i})})})]})};me.displayName="FondueFlyout";me.__docgenInfo={description:"@deprecated Use `Flyout` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#flyout-old-inlinedialog the migration guide}.",methods:[],displayName:"FondueFlyout",props:{trigger:{required:!0,tsType:{name:"union",raw:`| ReactNode
| ((
      triggerProps: HTMLAttributes<HTMLElement>,
      ref: MutableRefObject<HTMLElement | null>,
      triggerState: { isFocusVisible: boolean; isPressed: boolean },
  ) => JSX.Element)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(event?: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},decorator:{required:!1,tsType:{name:"ReactNode"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    style?: BadgeStyle;
    icon?: ReactElement<IconProps>;
    status?: BadgeStatusIconProps['status'];
    onClick?: () => void;
    onDismiss?: () => void;
    disabled?: boolean;
    emphasis?: BadgeEmphasis;
    size?: BadgeSize;
    children?: ReactNode;
    'data-test-id'?: string;
    /** @description withTitle could be disabled only in the case another overlay is present, ex Tooltip */
    withTitleAttribute?: boolean;
}`,signature:{properties:[{key:"style",value:{name:"BadgeStyle",required:!1}},{key:"icon",value:{name:"ReactElement",elements:[{name:"intersection",raw:`GeneratedIconProps & {
    icon: IconEnum;
}`,elements:[{name:"signature",type:"object",raw:`{
    size?: IconSize;
    filled?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"IconSize",required:!1}},{key:"filled",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
    icon: IconEnum;
}`,signature:{properties:[{key:"icon",value:{name:"IconEnum",required:!0}}]}}]}],raw:"ReactElement<IconProps>",required:!1}},{key:"status",value:{name:"union",raw:"BadgeStatusIconProps['status']",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"onDismiss",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"emphasis",value:{name:"BadgeEmphasis",required:!1}},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}},{key:"withTitleAttribute",value:{name:"boolean",required:!1},description:"@description withTitle could be disabled only in the case another overlay is present, ex Tooltip"}]}}],raw:"BadgeProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},hug:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},fitContent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},fixedHeader:{required:!1,tsType:{name:"ReactNode"},description:""},fixedFooter:{required:!1,tsType:{name:"ReactNode"},description:""},contentMinHeight:{required:!1,tsType:{name:"number"},description:""},legacyFooter:{required:!1,tsType:{name:"boolean"},description:`The legacy footer buttons section inside of the flyout will be deleted in the future.
@deprecated Pass the FlyoutFooter component with buttons to the Flyout component.`,defaultValue:{value:"true",computed:!1}},placement:{required:!1,tsType:{name:"FlyoutPlacement"},description:"",defaultValue:{value:"FlyoutPlacement.BottomLeft",computed:!0}},offset:{required:!1,tsType:{name:"number"},description:""},updatePositionOnContentChange:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isTriggerDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{me as F,N as a,K as b,wt as c,$t as d};
