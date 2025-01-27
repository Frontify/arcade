import{j as T}from"./jsx-runtime-DH9XN8A8.js";import{h as oe,g as $e}from"./getVerticalPositioning-g5jPDJsn.js";import{$ as Ee}from"./useButton-B6orroTH.js";import{a as Te}from"./FocusScope-Drcq722v.js";import{k as xe,$ as ke}from"./useFocusRing-CP9UJNUw.js";import{$ as qe,a as Le,b as Be}from"./useMenuTrigger-dROe67R1.js";import{b as Pe,c as Re,a as He}from"./useDialog-CD34IraE.js";import{b as pe}from"./useFocusable-BRFkliNn.js";import{a as Se,$ as Me}from"./useOverlayTriggerState-C3ap9Qkt.js";import{r as L}from"./index-v7USjxUg.js";import{F as Ie}from"./focusStyle-CBFElZiz.js";import{m as V}from"./merge-DI-veSMP.js";import{c as Ce,B as Ne,a as G,b as X}from"./Button-BfBJpGQT.js";import{I as Fe}from"./IconCheckMark-CMS57PRn.js";import{B as ze}from"./Badge-BnAKN3ul.js";import{F as _e}from"./FieldsetHeader-DCLUVo2e.js";import{$ as J}from"./useEffectEvent-BaECT7_f.js";import{$ as Ae}from"./context-BFA77VTM.js";function je(){return typeof window.ResizeObserver<"u"}function re(e){const{ref:t,box:o,onResize:r}=e;L.useEffect(()=>{let n=t==null?void 0:t.current;if(n)if(je()){const a=new window.ResizeObserver(s=>{s.length&&r()});return a.observe(n,{box:o}),()=>{n&&a.unobserve(n)}}else return window.addEventListener("resize",r,!1),()=>{window.removeEventListener("resize",r,!1)}},[r,t,o])}function K(e,t=-1/0,o=1/0){return Math.min(Math.max(e,t),o)}const F={top:"top",bottom:"top",left:"left",right:"left"},Y={top:"bottom",bottom:"top",left:"right",right:"left"},Oe={top:"left",left:"top"},Q={top:"height",left:"width"},ge={width:"totalWidth",height:"totalHeight"},D={};let k=typeof document<"u"?window.visualViewport:null;function ae(e){let t=0,o=0,r=0,n=0,a=0,s=0,l={};var m;let c=((m=k==null?void 0:k.scale)!==null&&m!==void 0?m:1)>1;if(e.tagName==="BODY"){let p=document.documentElement;r=p.clientWidth,n=p.clientHeight;var f;t=(f=k==null?void 0:k.width)!==null&&f!==void 0?f:r;var d;o=(d=k==null?void 0:k.height)!==null&&d!==void 0?d:n,l.top=p.scrollTop||e.scrollTop,l.left=p.scrollLeft||e.scrollLeft,k&&(a=k.offsetTop,s=k.offsetLeft)}else({width:t,height:o,top:a,left:s}=j(e)),l.top=e.scrollTop,l.left=e.scrollLeft,r=t,n=o;if(xe()&&(e.tagName==="BODY"||e.tagName==="HTML")&&c){l.top=0,l.left=0;var u;a=(u=k==null?void 0:k.pageTop)!==null&&u!==void 0?u:0;var i;s=(i=k==null?void 0:k.pageLeft)!==null&&i!==void 0?i:0}return{width:t,height:o,totalWidth:r,totalHeight:n,scroll:l,top:a,left:s}}function Ve(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function le(e,t,o,r,n,a,s){var l;let m=(l=n.scroll[e])!==null&&l!==void 0?l:0,c=r[Q[e]],f=r.scroll[F[e]]+a,d=c+r.scroll[F[e]]-a,u=t-m+s[e]-r[F[e]],i=t-m+o+s[e]-r[F[e]];return u<f?f-u:i>d?Math.max(d-i,f-u):0}function De(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function ie(e){if(D[e])return D[e];let[t,o]=e.split(" "),r=F[t]||"right",n=Oe[r];F[o]||(o="center");let a=Q[r],s=Q[n];return D[e]={placement:t,crossPlacement:o,axis:r,crossAxis:n,size:a,crossSize:s},D[e]}function Z(e,t,o,r,n,a,s,l,m,c){let{placement:f,crossPlacement:d,axis:u,crossAxis:i,size:p,crossSize:b}=r,g={};var v;g[i]=(v=e[i])!==null&&v!==void 0?v:0;var h,w,P,x;d==="center"?g[i]+=(((h=e[b])!==null&&h!==void 0?h:0)-((w=o[b])!==null&&w!==void 0?w:0))/2:d!==i&&(g[i]+=((P=e[b])!==null&&P!==void 0?P:0)-((x=o[b])!==null&&x!==void 0?x:0)),g[i]+=a;const y=e[i]-o[b]+m+c,R=e[i]+e[b]-m-c;if(g[i]=K(g[i],y,R),f===u){const M=l?s[p]:t[ge[p]];g[Y[u]]=Math.floor(M-e[u]+n)}else g[u]=Math.floor(e[u]+e[p]+n);return g}function Ye(e,t,o,r,n,a,s,l){const m=r?o.height:t[ge.height];var c;let f=e.top!=null?o.top+e.top:o.top+(m-((c=e.bottom)!==null&&c!==void 0?c:0)-s);var d,u,i,p,b,g;let v=l!=="top"?Math.max(0,t.height+t.top+((d=t.scroll.top)!==null&&d!==void 0?d:0)-f-(((u=n.top)!==null&&u!==void 0?u:0)+((i=n.bottom)!==null&&i!==void 0?i:0)+a)):Math.max(0,f+s-(t.top+((p=t.scroll.top)!==null&&p!==void 0?p:0))-(((b=n.top)!==null&&b!==void 0?b:0)+((g=n.bottom)!==null&&g!==void 0?g:0)+a));return Math.min(t.height-a*2,v)}function se(e,t,o,r,n,a){let{placement:s,axis:l,size:m}=a;var c,f;if(s===l)return Math.max(0,o[l]-e[l]-((c=e.scroll[l])!==null&&c!==void 0?c:0)+t[l]-((f=r[l])!==null&&f!==void 0?f:0)-r[Y[l]]-n);var d;return Math.max(0,e[m]+e[l]+e.scroll[l]-t[l]-o[l]-o[m]-((d=r[l])!==null&&d!==void 0?d:0)-r[Y[l]]-n)}function We(e,t,o,r,n,a,s,l,m,c,f,d,u,i,p,b){let g=ie(e),{size:v,crossAxis:h,crossSize:w,placement:P,crossPlacement:x}=g,y=Z(t,l,o,g,f,d,c,u,p,b),R=f,M=se(l,c,t,n,a+f,g);if(s&&r[v]>M){let U=ie(`${Y[P]} ${x}`),we=Z(t,l,o,U,f,d,c,u,p,b);se(l,c,t,n,a+f,U)>M&&(g=U,y=we,R=f)}let H="bottom";g.axis==="top"?g.placement==="top"?H="top":g.placement==="bottom"&&(H="bottom"):g.crossAxis==="top"&&(g.crossPlacement==="top"?H="bottom":g.crossPlacement==="bottom"&&(H="top"));let $=le(h,y[h],o[w],l,m,a,c);y[h]+=$;let B=Ye(y,l,c,u,n,a,o.height,H);i&&i<B&&(B=i),o.height=Math.min(o.height,B),y=Z(t,l,o,g,R,d,c,u,p,b),$=le(h,y[h],o[w],l,m,a,c),y[h]+=$;let S={},z=t[h]+.5*t[w]-y[h]-n[F[h]];const I=p/2+b;var _,N,C,q;const A=F[h]==="left"?((_=n.left)!==null&&_!==void 0?_:0)+((N=n.right)!==null&&N!==void 0?N:0):((C=n.top)!==null&&C!==void 0?C:0)+((q=n.bottom)!==null&&q!==void 0?q:0),W=o[w]-A-p/2-b,ve=t[h]+p/2-(y[h]+n[F[h]]),be=t[h]+t[w]-p/2-(y[h]+n[F[h]]),ye=K(z,ve,be);return S[h]=K(ye,I,W),{position:y,maxHeight:B,arrowOffsetLeft:S.left,arrowOffsetTop:S.top,placement:g.placement}}function Ue(e){let{placement:t,targetNode:o,overlayNode:r,scrollNode:n,padding:a,shouldFlip:s,boundaryElement:l,offset:m,crossOffset:c,maxHeight:f,arrowSize:d=0,arrowBoundaryOffset:u=0}=e,i=r instanceof HTMLElement?Ge(r):document.documentElement,p=i===document.documentElement;const b=window.getComputedStyle(i).position;let g=!!b&&b!=="static",v=p?j(o):de(o,i);if(!p){let{marginTop:S,marginLeft:z}=window.getComputedStyle(o);v.top+=parseInt(S,10)||0,v.left+=parseInt(z,10)||0}let h=j(r),w=De(r);var P,x;h.width+=((P=w.left)!==null&&P!==void 0?P:0)+((x=w.right)!==null&&x!==void 0?x:0);var y,R;h.height+=((y=w.top)!==null&&y!==void 0?y:0)+((R=w.bottom)!==null&&R!==void 0?R:0);let M=Ve(n),H=ae(l),$=ae(i),B=l.tagName==="BODY"?j(i):de(i,l);return i.tagName==="HTML"&&l.tagName==="BODY"&&($.scroll.top=0,$.scroll.left=0),We(t,v,h,M,w,a,s,H,$,B,m,c,g,f,d,u)}function j(e){let{top:t,left:o,width:r,height:n}=e.getBoundingClientRect(),{scrollTop:a,scrollLeft:s,clientTop:l,clientLeft:m}=document.documentElement;return{top:t+a-l,left:o+s-m,width:r,height:n}}function de(e,t){let o=window.getComputedStyle(e),r;if(o.position==="fixed"){let{top:n,left:a,width:s,height:l}=e.getBoundingClientRect();r={top:n,left:a,width:s,height:l}}else{r=j(e);let n=j(t),a=window.getComputedStyle(t);n.top+=(parseInt(a.borderTopWidth,10)||0)-t.scrollTop,n.left+=(parseInt(a.borderLeftWidth,10)||0)-t.scrollLeft,r.top-=n.top,r.left-=n.left}return r.top-=parseInt(o.marginTop,10)||0,r.left-=parseInt(o.marginLeft,10)||0,r}function Ge(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position==="static"&&!ue(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!ue(t);)t=t.parentElement;return t||document.documentElement}function ue(e){let t=window.getComputedStyle(e);return t.transform!=="none"||/transform|perspective/.test(t.willChange)||t.filter!=="none"||t.contain==="paint"||"backdropFilter"in t&&t.backdropFilter!=="none"||"WebkitBackdropFilter"in t&&t.WebkitBackdropFilter!=="none"}let E=typeof document<"u"?window.visualViewport:null;function Xe(e){let{direction:t}=Ae(),{arrowSize:o=0,targetRef:r,overlayRef:n,scrollRef:a=n,placement:s="bottom",containerPadding:l=12,shouldFlip:m=!0,boundaryElement:c=typeof document<"u"?document.body:null,offset:f=0,crossOffset:d=0,shouldUpdatePosition:u=!0,isOpen:i=!0,onClose:p,maxHeight:b,arrowBoundaryOffset:g=0}=e,[v,h]=L.useState(null),w=[u,s,n.current,r.current,a.current,l,m,c,f,d,i,t,b,g,o],P=L.useRef(E==null?void 0:E.scale);L.useEffect(()=>{i&&(P.current=E==null?void 0:E.scale)},[i]);let x=L.useCallback(()=>{if(u===!1||!i||!n.current||!r.current||!c||(E==null?void 0:E.scale)!==P.current)return;let $=null;if(a.current&&a.current.contains(document.activeElement)){var B;let q=(B=document.activeElement)===null||B===void 0?void 0:B.getBoundingClientRect(),A=a.current.getBoundingClientRect();var S;if($={type:"top",offset:((S=q==null?void 0:q.top)!==null&&S!==void 0?S:0)-A.top},$.offset>A.height/2){$.type="bottom";var z;$.offset=((z=q==null?void 0:q.bottom)!==null&&z!==void 0?z:0)-A.bottom}}let I=n.current;if(!b&&n.current){var _;I.style.top="0px",I.style.bottom="";var N;I.style.maxHeight=((N=(_=window.visualViewport)===null||_===void 0?void 0:_.height)!==null&&N!==void 0?N:window.innerHeight)+"px"}let C=Ue({placement:Je(s,t),overlayNode:n.current,targetNode:r.current,scrollNode:a.current||n.current,padding:l,shouldFlip:m,boundaryElement:c,offset:f,crossOffset:d,maxHeight:b,arrowSize:o,arrowBoundaryOffset:g});if(C.position){if(I.style.top="",I.style.bottom="",I.style.left="",I.style.right="",Object.keys(C.position).forEach(q=>I.style[q]=C.position[q]+"px"),I.style.maxHeight=C.maxHeight!=null?C.maxHeight+"px":"",$&&document.activeElement&&a.current){let q=document.activeElement.getBoundingClientRect(),A=a.current.getBoundingClientRect(),W=q[$.type]-A[$.type];a.current.scrollTop+=W-$.offset}h(C)}},w);J(x,w),Ze(x),re({ref:n,onResize:x}),re({ref:r,onResize:x});let y=L.useRef(!1);J(()=>{let $,B=()=>{y.current=!0,clearTimeout($),$=setTimeout(()=>{y.current=!1},500),x()},S=()=>{y.current&&B()};return E==null||E.addEventListener("resize",B),E==null||E.addEventListener("scroll",S),()=>{E==null||E.removeEventListener("resize",B),E==null||E.removeEventListener("scroll",S)}},[x]);let R=L.useCallback(()=>{y.current||p==null||p()},[p,y]);qe({triggerRef:r,isOpen:i,onClose:p&&R});var M,H;return{overlayProps:{style:{position:"absolute",zIndex:1e5,...v==null?void 0:v.position,maxHeight:(M=v==null?void 0:v.maxHeight)!==null&&M!==void 0?M:"100vh"}},placement:(H=v==null?void 0:v.placement)!==null&&H!==void 0?H:null,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:v==null?void 0:v.arrowOffsetLeft,top:v==null?void 0:v.arrowOffsetTop}},updatePosition:x}}function Ze(e){J(()=>(window.addEventListener("resize",e,!1),()=>{window.removeEventListener("resize",e,!1)}),[e])}function Je(e,t){return t==="rtl"?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}const Ke=typeof document<"u"?document:void 0;function Qe(e="body",{document:t=Ke}={}){if(!t)return()=>{};let o=t.querySelector(e);if(!o)return()=>{};let r={childList:!0},n=[],a,s=new MutationObserver(l=>{const m=t.querySelector('[data-live-announcer="true"]');for(let c of l)if(c.type==="childList"&&c.addedNodes.length>0){let f=Array.from(c.addedNodes).find(d=>{var u;return(u=d.querySelector)===null||u===void 0?void 0:u.call(d,'[aria-modal="true"], [data-ismodal="true"]')});if(f){n.push(f);let d=f.querySelector('[aria-modal="true"], [data-ismodal="true"]');a==null||a();let u=[d,...m?[m]:[]];a=oe(u)}}else if(c.type==="childList"&&c.removedNodes.length>0){let f=Array.from(c.removedNodes),d=n.findIndex(u=>f.includes(u));if(d>=0)if(a==null||a(),n=n.filter((u,i)=>i!==d),n.length>0){let i=[n[n.length-1].querySelector('[aria-modal="true"], [data-ismodal="true"]'),...m?[m]:[]];a=oe(i)}else a=void 0}});return s.observe(o,r),()=>{a==null||a(),s.disconnect()}}const ee=({buttons:e,border:t=!0})=>T.jsx("div",{className:V(["tw-flex tw-gap-x-3 tw-rounded-b tw-justify-end tw-py-5 tw-px-8 tw-bg-base",t&&"tw-border-t tw-border-line","tw-min-h-[4.75rem]"]),children:e.map((o,r)=>T.jsx(Ce,{...o,size:Ne.Medium},`flyout-footer-button-${r}`))});ee.displayName="FondueFlyoutFooter";const te=({onConfirm:e,onCancel:t})=>T.jsx(ee,{buttons:e?[{style:G.Default,emphasis:X.Default,children:"Cancel",onClick:t},{style:G.Default,emphasis:X.Strong,children:"Confirm",onClick:e,icon:T.jsx(Fe,{})}]:[{style:G.Default,emphasis:X.Default,children:"Close",onClick:t}]});te.displayName="FondueLegacyFlyoutFooter";ee.__docgenInfo={description:"",methods:[],displayName:"FondueFlyoutFooter",props:{buttons:{required:!0,tsType:{name:"union",raw:"[ButtonProps, ButtonProps] | [ButtonProps]",elements:[{name:"tuple",raw:"[ButtonProps, ButtonProps]",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"type",value:{name:"ButtonType",required:!1}},{key:"title",value:{name:"string",required:!1}},{key:"style",value:{name:"ButtonStyle",required:!1}},{key:"emphasis",value:{name:"ButtonEmphasis",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"size",value:{name:"ButtonSize",required:!1}},{key:"rounding",value:{name:"ButtonRounding",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactElement",required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event?: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1}},{key:"hugWidth",value:{name:"boolean",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"aria-describedby",value:{name:"string",required:!1}},{key:"formId",value:{name:"string",required:!1}},{key:"solid",value:{name:"boolean",required:!1},description:"@deprecated use emphasis with ButtonEmphasis.Weak"},{key:"inverted",value:{name:"boolean",required:!1},description:'@deprecated inverted can be done by wrapping the component in a className="tw-dark"'},{key:"data-test-id",value:{name:"string",required:!1}}]}}]}]},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};te.__docgenInfo={description:"",methods:[],displayName:"FondueLegacyFlyoutFooter",props:{onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const et=({title:e,decorator:t,badges:o=[],onClose:r,children:n,isOpen:a,positionProps:s,overlayTriggerProps:l,scrollRef:m,fixedHeader:c,fixedFooter:f,fitContent:d,contentMinHeight:u},i)=>{const{overlayProps:p}=Se({onClose:r,isOpen:a,isDismissable:!0},i),{modalProps:b}=Pe(),{dialogProps:g,titleProps:v}=Re({},i);return T.jsx("div",{...pe(p,g,b,s,l),ref:i,className:V(["tw-rounded tw-flex tw-outline-none tw-relative",d?"tw-min-w-0":"tw-min-w-[400px]"]),children:T.jsxs("div",{className:V(["tw-flex tw-flex-col tw-flex-auto tw-min-h-0 tw-rounded tw-shadow-mid tw-border tw-border-line-x-strong"]),children:[c,T.jsxs("div",{ref:m,className:V(["tw-flex tw-overflow-y-auto tw-overflow-x-hidden tw-flex-col tw-divide-y tw-divide tw-divide-black-10 tw-bg-white tw-text-black dark:tw-text-white dark:tw-bg-black-95",!c&&"tw-rounded-t",!f&&"tw-rounded-b"]),style:{minHeight:`${u}px`},children:[e&&T.jsxs("div",{className:"tw-flex tw-justify-between tw-flex-wrap tw-gap-3 tw-p-8",children:[T.jsx("div",{...v,className:"tw-inline-flex",children:T.jsx(_e,{decorator:t,children:e})}),T.jsx("div",{className:"tw-inline-flex tw-gap-2 tw-flex-wrap",children:o.map((h,w)=>L.createElement(ze,{...h,key:`flyout-badge-${w}`}))})]}),L.Children.map(n,(h,w)=>T.jsx("div",{children:h},w)),T.jsx(Le,{onDismiss:r})]}),f]})})},ne=L.forwardRef(et);ne.displayName="FondueOverlay";ne.__docgenInfo={description:"",methods:[],displayName:"FondueOverlay",props:{positionProps:{required:!0,tsType:{name:"HTMLAttributes",elements:[{name:"Element"}],raw:"HTMLAttributes<Element>"},description:""},overlayTriggerProps:{required:!0,tsType:{name:"HTMLAttributes",elements:[{name:"Element"}],raw:"HTMLAttributes<Element>"},description:""},scrollRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"HTMLDivElement"}],raw:"RefObject<HTMLDivElement>"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},badges:{defaultValue:{value:"[]",computed:!1},required:!1}}};const tt=(e,{isDisabled:t=!1})=>{L.useEffect(()=>{const o=e.current,r=s=>{const l=["auto","scroll"];if(!s||s===o)return null;const m=l.includes(window.getComputedStyle(s).overflowY);return s.scrollHeight>s.clientHeight&&m?s:r(s.parentElement)},n=s=>{const l=()=>{s.stopPropagation(),s.preventDefault()};if(o!==null){const m=s.deltaY,c=m<0,f=r(s.target)??o,{scrollTop:d,scrollHeight:u,clientHeight:i}=f;if(!c&&m>u-i-d)return f.scrollTop=u,l(),!1;if(c&&-m>d)return f.scrollTop=0,l(),!1}},a={passive:!1,capture:!1};return!t&&o!==null&&o.addEventListener("wheel",n,a),()=>{!t&&o!==null&&o.removeEventListener("wheel",n,a)}},[t,e])},nt=(e,t)=>{let o=0;if(t.current&&e.current){const r=e.current.scrollHeight,{scrollHeight:n,clientHeight:a}=t.current;o=r+(n-a)}return o},ce=5,fe=12,me=70,ot={top:"bottom",bottom:"top",left:"right",right:"left","top left":"bottom left","top right":"bottom right","bottom left":"top left","bottom right":"top right"},rt=({triggerRef:e,overlayRef:t,scrollRef:o,isOpen:r,placement:n,offset:a,updatePositionOnContentChange:s})=>{var i;const[l,m]=L.useState(!1),c=n&&ot[n],f=l?c:n,{overlayProps:d,updatePosition:u}=Xe({targetRef:e,overlayRef:t,shouldFlip:n===O.Left||n===O.Right,placement:n&&(n===O.Left||n===O.Right)?n:f,containerPadding:fe,offset:a??ce,scrollRef:o,isOpen:r});if(L.useLayoutEffect(()=>{const p=new ResizeObserver(u);if(r){const b=nt(t,o),g=$e(e.current,b,ce,me).position==="top";m(g),o.current&&s&&p.observe(o.current),t.current&&s&&p.observe(t.current)}return()=>{p.disconnect()}},[r,s,u,o,t,e]),typeof((i=d==null?void 0:d.style)==null?void 0:i.maxHeight)=="number"&&!l){const p=me-fe;d.style.maxHeight-=p}return{positionProps:d}},xt="#eaebeb",kt="10px";var O=(e=>(e.Top="top",e.Bottom="bottom",e.TopLeft="top left",e.BottomLeft="bottom left",e.TopRight="top right",e.BottomRight="bottom right",e.Right="right",e.Left="left",e))(O||{});const he=({trigger:e,isTriggerDisabled:t=!1,decorator:o,onConfirm:r,onCancel:n,children:a,onOpenChange:s,isOpen:l=!1,title:m="",badges:c=[],hug:f=!0,fitContent:d=!1,fixedHeader:u,fixedFooter:i,contentMinHeight:p,legacyFooter:b=!0,placement:g="bottom left",offset:v,updatePositionOnContentChange:h=!1})=>{const w=Me({isOpen:l,onOpenChange:s}),{toggle:P,close:x}=w,y=L.useRef(null),R=L.useRef(null),M=L.useRef(null),{isFocusVisible:H,focusProps:$}=ke(),{triggerProps:B,overlayProps:S}=Be({type:"dialog"},w,y),{positionProps:z}=rt({triggerRef:y,overlayRef:R,scrollRef:M,isOpen:l,placement:g,offset:v,updatePositionOnContentChange:h}),{buttonProps:I,isPressed:_}=Ee({onPress:()=>P(),elementType:"div",isDisabled:t,preventFocusOnPress:!0},y);L.useEffect(()=>{const q=Qe();return()=>q()},[]),tt(R,{isDisabled:!l});const N=pe(I,B,$,{"aria-label":"Toggle Flyout Menu"}),C=typeof e=="function"?e(N,y,{isFocusVisible:H,isPressed:_}):T.jsx("div",{...N,ref:y,className:V(["tw-outline-none tw-rounded",f?"tw-mx-3":"tw-w-full",H&&Ie]),"data-test-id":"flyout-trigger",children:e});return T.jsxs(T.Fragment,{children:[C,l&&T.jsx(He,{children:T.jsx(Te,{restoreFocus:!0,contain:!0,children:T.jsx(ne,{title:m,badges:c,decorator:o,isOpen:l,onClose:x,overlayTriggerProps:S,positionProps:z,fixedHeader:u,fixedFooter:b?T.jsx(te,{onConfirm:r,onCancel:n}):i,ref:R,scrollRef:M,fitContent:d,contentMinHeight:p,children:a})})})]})};he.displayName="FondueFlyout";he.__docgenInfo={description:"@deprecated Use `Flyout` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#flyout-old-inlinedialog the migration guide}.",methods:[],displayName:"FondueFlyout",props:{trigger:{required:!0,tsType:{name:"union",raw:`| ReactNode
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
@deprecated Pass the FlyoutFooter component with buttons to the Flyout component.`,defaultValue:{value:"true",computed:!1}},placement:{required:!1,tsType:{name:"FlyoutPlacement"},description:"",defaultValue:{value:"FlyoutPlacement.BottomLeft",computed:!0}},offset:{required:!1,tsType:{name:"number"},description:""},updatePositionOnContentChange:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isTriggerDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{he as F,O as a,ee as b,xt as c,kt as d};
