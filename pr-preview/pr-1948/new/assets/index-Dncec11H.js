import{r as y}from"./index-DtJulBIN.js";import{a as mt,c as xt,b as bt}from"./index-BHYJtXto.js";import{u as ht,P as Q,d as Se}from"./index-Dhc4yksV.js";import{j as H}from"./jsx-runtime-DBEcOq3S.js";import{r as De,w as Le}from"./index-BqTDQIm7.js";import{c as Te}from"./index-P-l_ls5c.js";import{u as Me}from"./index-CvTA8V3i.js";function ke(t,e=globalThis==null?void 0:globalThis.document){const n=mt(t);y.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",o,{capture:!0}),()=>e.removeEventListener("keydown",o,{capture:!0})},[n,e])}var Ne="DismissableLayer",At="dismissableLayer.update",Fe="dismissableLayer.pointerDownOutside",We="dismissableLayer.focusOutside",jt,Jt=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$e=y.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:i,onInteractOutside:s,onDismiss:c,...a}=t,l=y.useContext(Jt),[f,d]=y.useState(null),p=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,u]=y.useState({}),m=ht(e,E=>d(E)),h=Array.from(l.layers),[w]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),g=h.indexOf(w),x=f?h.indexOf(f):-1,A=l.layersWithOutsidePointerEventsDisabled.size>0,v=x>=g,b=_e(E=>{const R=E.target,T=[...l.branches].some(O=>O.contains(R));!v||T||(r==null||r(E),s==null||s(E),E.defaultPrevented||c==null||c())},p),P=je(E=>{const R=E.target;[...l.branches].some(O=>O.contains(R))||(i==null||i(E),s==null||s(E),E.defaultPrevented||c==null||c())},p);return ke(E=>{x===l.layers.size-1&&(o==null||o(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},p),y.useEffect(()=>{if(f)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(jt=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(f)),l.layers.add(f),It(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=jt)}},[f,p,n,l]),y.useEffect(()=>()=>{f&&(l.layers.delete(f),l.layersWithOutsidePointerEventsDisabled.delete(f),It())},[f,l]),y.useEffect(()=>{const E=()=>u({});return document.addEventListener(At,E),()=>document.removeEventListener(At,E)},[]),H.jsx(Q.div,{...a,ref:m,style:{pointerEvents:A?v?"auto":"none":void 0,...t.style},onFocusCapture:xt(t.onFocusCapture,P.onFocusCapture),onBlurCapture:xt(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:xt(t.onPointerDownCapture,b.onPointerDownCapture)})});$e.displayName=Ne;var Be="DismissableLayerBranch",He=y.forwardRef((t,e)=>{const n=y.useContext(Jt),o=y.useRef(null),r=ht(e,o);return y.useEffect(()=>{const i=o.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),H.jsx(Q.div,{...t,ref:r})});He.displayName=Be;function _e(t,e=globalThis==null?void 0:globalThis.document){const n=mt(t),o=y.useRef(!1),r=y.useRef(()=>{});return y.useEffect(()=>{const i=c=>{if(c.target&&!o.current){let a=function(){Qt(Fe,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=a,e.addEventListener("click",r.current,{once:!0})):a()}else e.removeEventListener("click",r.current);o.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",i),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>o.current=!0}}function je(t,e=globalThis==null?void 0:globalThis.document){const n=mt(t),o=y.useRef(!1);return y.useEffect(()=>{const r=i=>{i.target&&!o.current&&Qt(We,n,{originalEvent:i},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function It(){const t=new CustomEvent(At);document.dispatchEvent(t)}function Qt(t,e,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),o?Se(r,i):r.dispatchEvent(i)}const Ie=["top","right","bottom","left"],I=Math.min,$=Math.max,ft=Math.round,lt=Math.floor,U=t=>({x:t,y:t}),ze={left:"right",right:"left",bottom:"top",top:"bottom"},Ve={start:"end",end:"start"};function Et(t,e,n){return $(t,I(e,n))}function V(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function Rt(t){return t==="x"?"y":"x"}function Ot(t){return t==="y"?"height":"width"}function q(t){return["top","bottom"].includes(Y(t))?"y":"x"}function St(t){return Rt(q(t))}function Ye(t,e,n){n===void 0&&(n=!1);const o=tt(t),r=St(t),i=Ot(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=ut(s)),[s,ut(s)]}function Xe(t){const e=ut(t);return[Pt(t),e,Pt(e)]}function Pt(t){return t.replace(/start|end/g,e=>Ve[e])}function Ue(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}function qe(t,e,n,o){const r=tt(t);let i=Ue(Y(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(Pt)))),i}function ut(t){return t.replace(/left|right|bottom|top/g,e=>ze[e])}function Ke(t){return{top:0,right:0,bottom:0,left:0,...t}}function te(t){return typeof t!="number"?Ke(t):{top:t,right:t,bottom:t,left:t}}function dt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function zt(t,e,n){let{reference:o,floating:r}=t;const i=q(e),s=St(e),c=Ot(s),a=Y(e),l=i==="y",f=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let u;switch(a){case"top":u={x:f,y:o.y-r.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-r.width,y:d};break;default:u={x:o.x,y:o.y}}switch(tt(e)){case"start":u[s]-=p*(n&&l?-1:1);break;case"end":u[s]+=p*(n&&l?-1:1);break}return u}const Ze=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:d}=zt(l,o,a),p=o,u={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:g}=c[h],{x,y:A,data:v,reset:b}=await g({x:f,y:d,initialPlacement:o,placement:p,strategy:r,middlewareData:u,rects:l,platform:s,elements:{reference:t,floating:e}});f=x??f,d=A??d,u={...u,[w]:{...u[w],...v}},b&&m<=50&&(m++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(l=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:f,y:d}=zt(l,p,a)),h=-1)}return{x:f,y:d,placement:p,strategy:r,middlewareData:u}};async function ot(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:u=0}=V(e,t),m=te(u),w=c[p?d==="floating"?"reference":"floating":d],g=dt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a})),x=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,A=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),v=await(i.isElement==null?void 0:i.isElement(A))?await(i.getScale==null?void 0:i.getScale(A))||{x:1,y:1}:{x:1,y:1},b=dt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:A,strategy:a}):x);return{top:(g.top-b.top+m.top)/v.y,bottom:(b.bottom-g.bottom+m.bottom)/v.y,left:(g.left-b.left+m.left)/v.x,right:(b.right-g.right+m.right)/v.x}}const Ge=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:f=0}=V(t,e)||{};if(l==null)return{};const d=te(f),p={x:n,y:o},u=St(r),m=Ot(u),h=await s.getDimensions(l),w=u==="y",g=w?"top":"left",x=w?"bottom":"right",A=w?"clientHeight":"clientWidth",v=i.reference[m]+i.reference[u]-p[u]-i.floating[m],b=p[u]-i.reference[u],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let E=P?P[A]:0;(!E||!await(s.isElement==null?void 0:s.isElement(P)))&&(E=c.floating[A]||i.floating[m]);const R=v/2-b/2,T=E/2-h[m]/2-1,O=I(d[g],T),k=I(d[x],T),N=O,F=E-h[m]-k,S=E/2-h[m]/2+R,M=Et(N,S,F),W=!a.arrow&&tt(r)!=null&&S!==M&&i.reference[m]/2-(S<N?O:k)-h[m]/2<0,C=W?S<N?S-N:S-F:0;return{[u]:p[u]+C,data:{[u]:M,centerOffset:S-M-C,...W&&{alignmentOffset:C}},reset:W}}}),Je=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=V(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const g=Y(r),x=q(c),A=Y(c)===c,v=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=p||(A||!h?[ut(c)]:Xe(c)),P=m!=="none";!p&&P&&b.push(...qe(c,h,m,v));const E=[c,...b],R=await ot(e,w),T=[];let O=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&T.push(R[g]),d){const S=Ye(r,s,v);T.push(R[S[0]],R[S[1]])}if(O=[...O,{placement:r,overflows:T}],!T.every(S=>S<=0)){var k,N;const S=(((k=i.flip)==null?void 0:k.index)||0)+1,M=E[S];if(M)return{data:{index:S,overflows:O},reset:{placement:M}};let W=(N=O.filter(C=>C.overflows[0]<=0).sort((C,D)=>C.overflows[1]-D.overflows[1])[0])==null?void 0:N.placement;if(!W)switch(u){case"bestFit":{var F;const C=(F=O.filter(D=>{if(P){const L=q(D.placement);return L===x||L==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(L=>L>0).reduce((L,yt)=>L+yt,0)]).sort((D,L)=>D[1]-L[1])[0])==null?void 0:F[0];C&&(W=C);break}case"initialPlacement":W=c;break}if(r!==W)return{reset:{placement:W}}}return{}}}};function Vt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Yt(t){return Ie.some(e=>t[e]>=0)}const Qe=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=V(t,e);switch(o){case"referenceHidden":{const i=await ot(e,{...r,elementContext:"reference"}),s=Vt(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Yt(s)}}}case"escaped":{const i=await ot(e,{...r,altBoundary:!0}),s=Vt(i,n.floating);return{data:{escapedOffsets:s,escaped:Yt(s)}}}default:return{}}}}};async function tn(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Y(n),c=tt(n),a=q(n)==="y",l=["left","top"].includes(s)?-1:1,f=i&&a?-1:1,d=V(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof m=="number"&&(u=c==="end"?m*-1:m),a?{x:u*f,y:p*l}:{x:p*l,y:u*f}}const en=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=e,a=await tn(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:s}}}}},nn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:g,y:x}=w;return{x:g,y:x}}},...a}=V(t,e),l={x:n,y:o},f=await ot(e,a),d=q(Y(r)),p=Rt(d);let u=l[p],m=l[d];if(i){const w=p==="y"?"top":"left",g=p==="y"?"bottom":"right",x=u+f[w],A=u-f[g];u=Et(x,u,A)}if(s){const w=d==="y"?"top":"left",g=d==="y"?"bottom":"right",x=m+f[w],A=m-f[g];m=Et(x,m,A)}const h=c.fn({...e,[p]:u,[d]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}},on=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:c=0,mainAxis:a=!0,crossAxis:l=!0}=V(t,e),f={x:n,y:o},d=q(r),p=Rt(d);let u=f[p],m=f[d];const h=V(c,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(a){const A=p==="y"?"height":"width",v=i.reference[p]-i.floating[A]+w.mainAxis,b=i.reference[p]+i.reference[A]-w.mainAxis;u<v?u=v:u>b&&(u=b)}if(l){var g,x;const A=p==="y"?"width":"height",v=["top","left"].includes(Y(r)),b=i.reference[d]-i.floating[A]+(v&&((g=s.offset)==null?void 0:g[d])||0)+(v?0:w.crossAxis),P=i.reference[d]+i.reference[A]+(v?0:((x=s.offset)==null?void 0:x[d])||0)-(v?w.crossAxis:0);m<b?m=b:m>P&&(m=P)}return{[p]:u,[d]:m}}}},rn=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:r,elements:i}=e,{apply:s=()=>{},...c}=V(t,e),a=await ot(e,c),l=Y(n),f=tt(n),d=q(n)==="y",{width:p,height:u}=o.floating;let m,h;l==="top"||l==="bottom"?(m=l,h=f===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(h=l,m=f==="end"?"top":"bottom");const w=u-a.top-a.bottom,g=p-a.left-a.right,x=I(u-a[m],w),A=I(p-a[h],g),v=!e.middlewareData.shift;let b=x,P=A;if(d?P=f||v?I(A,g):g:b=f||v?I(x,w):w,v&&!f){const R=$(a.left,0),T=$(a.right,0),O=$(a.top,0),k=$(a.bottom,0);d?P=p-2*(R!==0||T!==0?R+T:$(a.left,a.right)):b=u-2*(O!==0||k!==0?O+k:$(a.top,a.bottom))}await s({...e,availableWidth:P,availableHeight:b});const E=await r.getDimensions(i.floating);return p!==E.width||u!==E.height?{reset:{rects:!0}}:{}}}};function et(t){return ee(t)?(t.nodeName||"").toLowerCase():"#document"}function B(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function X(t){var e;return(e=(ee(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ee(t){return t instanceof Node||t instanceof B(t).Node}function _(t){return t instanceof Element||t instanceof B(t).Element}function z(t){return t instanceof HTMLElement||t instanceof B(t).HTMLElement}function Xt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof B(t).ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=j(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function sn(t){return["table","td","th"].includes(et(t))}function gt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Dt(t){const e=Lt(),n=_(t)?j(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function cn(t){let e=K(t);for(;z(e)&&!J(e);){if(Dt(e))return e;if(gt(e))return null;e=K(e)}return null}function Lt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(et(t))}function j(t){return B(t).getComputedStyle(t)}function wt(t){return _(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(et(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||X(t);return Xt(e)?e.host:e}function ne(t){const e=K(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:z(e)&&it(e)?e:ne(e)}function rt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=ne(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=B(r);if(i){const c=Ct(s);return e.concat(s,s.visualViewport||[],it(r)?r:[],c&&n?rt(c):[])}return e.concat(r,rt(r,[],n))}function Ct(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function oe(t){const e=j(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=z(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,c=ft(n)!==i||ft(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function Tt(t){return _(t)?t:t.contextElement}function G(t){const e=Tt(t);if(!z(e))return U(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=oe(e);let s=(i?ft(n.width):n.width)/o,c=(i?ft(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const ln=U(0);function re(t){const e=B(t);return!Lt()||!e.visualViewport?ln:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function an(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==B(t)?!1:e}function Z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=Tt(t);let s=U(1);e&&(o?_(o)&&(s=G(o)):s=G(t));const c=an(i,n,o)?re(i):U(0);let a=(r.left+c.x)/s.x,l=(r.top+c.y)/s.y,f=r.width/s.x,d=r.height/s.y;if(i){const p=B(i),u=o&&_(o)?B(o):o;let m=p,h=Ct(m);for(;h&&o&&u!==m;){const w=G(h),g=h.getBoundingClientRect(),x=j(h),A=g.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,v=g.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;a*=w.x,l*=w.y,f*=w.x,d*=w.y,a+=A,l+=v,m=B(h),h=Ct(m)}}return dt({width:f,height:d,x:a,y:l})}function fn(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=X(o),c=e?gt(e.floating):!1;if(o===s||c&&i)return n;let a={scrollLeft:0,scrollTop:0},l=U(1);const f=U(0),d=z(o);if((d||!d&&!i)&&((et(o)!=="body"||it(s))&&(a=wt(o)),z(o))){const p=Z(o);l=G(o),f.x=p.x+o.clientLeft,f.y=p.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+f.x,y:n.y*l.y-a.scrollTop*l.y+f.y}}function un(t){return Array.from(t.getClientRects())}function ie(t){return Z(X(t)).left+wt(t).scrollLeft}function dn(t){const e=X(t),n=wt(t),o=t.ownerDocument.body,r=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+ie(t);const c=-n.scrollTop;return j(o).direction==="rtl"&&(s+=$(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function pn(t,e){const n=B(t),o=X(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,a=0;if(r){i=r.width,s=r.height;const l=Lt();(!l||l&&e==="fixed")&&(c=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:c,y:a}}function mn(t,e){const n=Z(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=z(t)?G(t):U(1),s=t.clientWidth*i.x,c=t.clientHeight*i.y,a=r*i.x,l=o*i.y;return{width:s,height:c,x:a,y:l}}function Ut(t,e,n){let o;if(e==="viewport")o=pn(t,n);else if(e==="document")o=dn(X(t));else if(_(e))o=mn(e,n);else{const r=re(t);o={...e,x:e.x-r.x,y:e.y-r.y}}return dt(o)}function se(t,e){const n=K(t);return n===e||!_(n)||J(n)?!1:j(n).position==="fixed"||se(n,e)}function hn(t,e){const n=e.get(t);if(n)return n;let o=rt(t,[],!1).filter(c=>_(c)&&et(c)!=="body"),r=null;const i=j(t).position==="fixed";let s=i?K(t):t;for(;_(s)&&!J(s);){const c=j(s),a=Dt(s);!a&&c.position==="fixed"&&(r=null),(i?!a&&!r:!a&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||it(s)&&!a&&se(t,s))?o=o.filter(f=>f!==s):r=c,s=K(s)}return e.set(t,o),o}function gn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?gt(e)?[]:hn(e,this._c):[].concat(n),o],c=s[0],a=s.reduce((l,f)=>{const d=Ut(e,f,r);return l.top=$(d.top,l.top),l.right=I(d.right,l.right),l.bottom=I(d.bottom,l.bottom),l.left=$(d.left,l.left),l},Ut(e,c,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function wn(t){const{width:e,height:n}=oe(t);return{width:e,height:n}}function yn(t,e,n){const o=z(e),r=X(e),i=n==="fixed",s=Z(t,!0,i,e);let c={scrollLeft:0,scrollTop:0};const a=U(0);if(o||!o&&!i)if((et(e)!=="body"||it(r))&&(c=wt(e)),o){const d=Z(e,!0,i,e);a.x=d.x+e.clientLeft,a.y=d.y+e.clientTop}else r&&(a.x=ie(r));const l=s.left+c.scrollLeft-a.x,f=s.top+c.scrollTop-a.y;return{x:l,y:f,width:s.width,height:s.height}}function vt(t){return j(t).position==="static"}function qt(t,e){return!z(t)||j(t).position==="fixed"?null:e?e(t):t.offsetParent}function ce(t,e){const n=B(t);if(gt(t))return n;if(!z(t)){let r=K(t);for(;r&&!J(r);){if(_(r)&&!vt(r))return r;r=K(r)}return n}let o=qt(t,e);for(;o&&sn(o)&&vt(o);)o=qt(o,e);return o&&J(o)&&vt(o)&&!Dt(o)?n:o||cn(t)||n}const xn=async function(t){const e=this.getOffsetParent||ce,n=this.getDimensions,o=await n(t.floating);return{reference:yn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function vn(t){return j(t).direction==="rtl"}const bn={convertOffsetParentRelativeRectToViewportRelativeRect:fn,getDocumentElement:X,getClippingRect:gn,getOffsetParent:ce,getElementRects:xn,getClientRects:un,getDimensions:wn,getScale:G,isElement:_,isRTL:vn};function An(t,e){let n=null,o;const r=X(t);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),i();const{left:l,top:f,width:d,height:p}=t.getBoundingClientRect();if(c||e(),!d||!p)return;const u=lt(f),m=lt(r.clientWidth-(l+d)),h=lt(r.clientHeight-(f+p)),w=lt(l),x={rootMargin:-u+"px "+-m+"px "+-h+"px "+-w+"px",threshold:$(0,I(1,a))||1};let A=!0;function v(b){const P=b[0].intersectionRatio;if(P!==a){if(!A)return s();P?s(!1,P):o=setTimeout(()=>{s(!1,1e-7)},1e3)}A=!1}try{n=new IntersectionObserver(v,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(v,x)}n.observe(t)}return s(!0),i}function En(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=Tt(t),f=r||i?[...l?rt(l):[],...rt(e)]:[];f.forEach(g=>{r&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const d=l&&c?An(l,n):null;let p=-1,u=null;s&&(u=new ResizeObserver(g=>{let[x]=g;x&&x.target===l&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var A;(A=u)==null||A.observe(e)})),n()}),l&&!a&&u.observe(l),u.observe(e));let m,h=a?Z(t):null;a&&w();function w(){const g=Z(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&n(),h=g,m=requestAnimationFrame(w)}return n(),()=>{var g;f.forEach(x=>{r&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),d==null||d(),(g=u)==null||g.disconnect(),u=null,a&&cancelAnimationFrame(m)}}const Pn=en,Cn=nn,Rn=Je,On=rn,Sn=Qe,Kt=Ge,Dn=on,Ln=(t,e,n)=>{const o=new Map,r={platform:bn,...n},i={...r.platform,_c:o};return Ze(t,e,{...r,platform:i})};var at=typeof document<"u"?y.useLayoutEffect:y.useEffect;function pt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!pt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!pt(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function le(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Zt(t,e){const n=le(t);return Math.round(e*n)/n}function Gt(t){const e=y.useRef(t);return at(()=>{e.current=t}),e}function Tn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:a,open:l}=t,[f,d]=y.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,u]=y.useState(o);pt(p,o)||u(o);const[m,h]=y.useState(null),[w,g]=y.useState(null),x=y.useCallback(C=>{C!==P.current&&(P.current=C,h(C))},[]),A=y.useCallback(C=>{C!==E.current&&(E.current=C,g(C))},[]),v=i||m,b=s||w,P=y.useRef(null),E=y.useRef(null),R=y.useRef(f),T=a!=null,O=Gt(a),k=Gt(r),N=y.useCallback(()=>{if(!P.current||!E.current)return;const C={placement:e,strategy:n,middleware:p};k.current&&(C.platform=k.current),Ln(P.current,E.current,C).then(D=>{const L={...D,isPositioned:!0};F.current&&!pt(R.current,L)&&(R.current=L,De.flushSync(()=>{d(L)}))})},[p,e,n,k]);at(()=>{l===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(C=>({...C,isPositioned:!1})))},[l]);const F=y.useRef(!1);at(()=>(F.current=!0,()=>{F.current=!1}),[]),at(()=>{if(v&&(P.current=v),b&&(E.current=b),v&&b){if(O.current)return O.current(v,b,N);N()}},[v,b,N,O,T]);const S=y.useMemo(()=>({reference:P,floating:E,setReference:x,setFloating:A}),[x,A]),M=y.useMemo(()=>({reference:v,floating:b}),[v,b]),W=y.useMemo(()=>{const C={position:n,left:0,top:0};if(!M.floating)return C;const D=Zt(M.floating,f.x),L=Zt(M.floating,f.y);return c?{...C,transform:"translate("+D+"px, "+L+"px)",...le(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:D,top:L}},[n,c,M.floating,f.x,f.y]);return y.useMemo(()=>({...f,update:N,refs:S,elements:M,floatingStyles:W}),[f,N,S,M,W])}const Mn=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Kt({element:o.current,padding:r}).fn(n):{}:o?Kt({element:o,padding:r}).fn(n):{}}}},kn=(t,e)=>({...Pn(t),options:[t,e]}),Nn=(t,e)=>({...Cn(t),options:[t,e]}),Fn=(t,e)=>({...Dn(t),options:[t,e]}),Wn=(t,e)=>({...Rn(t),options:[t,e]}),$n=(t,e)=>({...On(t),options:[t,e]}),Bn=(t,e)=>({...Sn(t),options:[t,e]}),Hn=(t,e)=>({...Mn(t),options:[t,e]});var _n="Arrow",ae=y.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return H.jsx(Q.svg,{...i,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:H.jsx("polygon",{points:"0,0 30,0 15,10"})})});ae.displayName=_n;var jn=ae,Mt="Popper",[fe,oo]=Te(Mt),[In,ue]=fe(Mt),de=t=>{const{__scopePopper:e,children:n}=t,[o,r]=y.useState(null);return H.jsx(In,{scope:e,anchor:o,onAnchorChange:r,children:n})};de.displayName=Mt;var pe="PopperAnchor",me=y.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=ue(pe,n),s=y.useRef(null),c=ht(e,s);return y.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:H.jsx(Q.div,{...r,ref:c})});me.displayName=pe;var kt="PopperContent",[zn,Vn]=fe(kt),he=y.forwardRef((t,e)=>{var Nt,Ft,Wt,$t,Bt,Ht;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:a=!0,collisionBoundary:l=[],collisionPadding:f=0,sticky:d="partial",hideWhenDetached:p=!1,updatePositionStrategy:u="optimized",onPlaced:m,...h}=t,w=ue(kt,n),[g,x]=y.useState(null),A=ht(e,nt=>x(nt)),[v,b]=y.useState(null),P=Me(v),E=(P==null?void 0:P.width)??0,R=(P==null?void 0:P.height)??0,T=o+(i!=="center"?"-"+i:""),O=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},k=Array.isArray(l)?l:[l],N=k.length>0,F={padding:O,boundary:k.filter(Xn),altBoundary:N},{refs:S,floatingStyles:M,placement:W,isPositioned:C,middlewareData:D}=Tn({strategy:"fixed",placement:T,whileElementsMounted:(...nt)=>En(...nt,{animationFrame:u==="always"}),elements:{reference:w.anchor},middleware:[kn({mainAxis:r+R,alignmentAxis:s}),a&&Nn({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?Fn():void 0,...F}),a&&Wn({...F}),$n({...F,apply:({elements:nt,rects:_t,availableWidth:Pe,availableHeight:Ce})=>{const{width:Re,height:Oe}=_t.reference,ct=nt.floating.style;ct.setProperty("--radix-popper-available-width",`${Pe}px`),ct.setProperty("--radix-popper-available-height",`${Ce}px`),ct.setProperty("--radix-popper-anchor-width",`${Re}px`),ct.setProperty("--radix-popper-anchor-height",`${Oe}px`)}}),v&&Hn({element:v,padding:c}),Un({arrowWidth:E,arrowHeight:R}),p&&Bn({strategy:"referenceHidden",...F})]}),[L,yt]=ye(W),st=mt(m);bt(()=>{C&&(st==null||st())},[C,st]);const xe=(Nt=D.arrow)==null?void 0:Nt.x,ve=(Ft=D.arrow)==null?void 0:Ft.y,be=((Wt=D.arrow)==null?void 0:Wt.centerOffset)!==0,[Ae,Ee]=y.useState();return bt(()=>{g&&Ee(window.getComputedStyle(g).zIndex)},[g]),H.jsx("div",{ref:S.setFloating,"data-radix-popper-content-wrapper":"",style:{...M,transform:C?M.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ae,"--radix-popper-transform-origin":[($t=D.transformOrigin)==null?void 0:$t.x,(Bt=D.transformOrigin)==null?void 0:Bt.y].join(" "),...((Ht=D.hide)==null?void 0:Ht.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:H.jsx(zn,{scope:n,placedSide:L,onArrowChange:b,arrowX:xe,arrowY:ve,shouldHideArrow:be,children:H.jsx(Q.div,{"data-side":L,"data-align":yt,...h,ref:A,style:{...h.style,animation:C?void 0:"none"}})})})});he.displayName=kt;var ge="PopperArrow",Yn={top:"bottom",right:"left",bottom:"top",left:"right"},we=y.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=Vn(ge,o),s=Yn[i.placedSide];return H.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:H.jsx(jn,{...r,ref:n,style:{...r.style,display:"block"}})})});we.displayName=ge;function Xn(t){return t!==null}var Un=t=>({name:"transformOrigin",options:t,fn(e){var w,g,x;const{placement:n,rects:o,middlewareData:r}=e,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,c=s?0:t.arrowWidth,a=s?0:t.arrowHeight,[l,f]=ye(n),d={start:"0%",center:"50%",end:"100%"}[f],p=(((g=r.arrow)==null?void 0:g.x)??0)+c/2,u=(((x=r.arrow)==null?void 0:x.y)??0)+a/2;let m="",h="";return l==="bottom"?(m=s?d:`${p}px`,h=`${-a}px`):l==="top"?(m=s?d:`${p}px`,h=`${o.floating.height+a}px`):l==="right"?(m=`${-a}px`,h=s?d:`${u}px`):l==="left"&&(m=`${o.floating.width+a}px`,h=s?d:`${u}px`),{data:{x:m,y:h}}}});function ye(t){const[e,n="center"]=t.split("-");return[e,n]}var ro=de,io=me,so=he,co=we,qn="Portal",Kn=y.forwardRef((t,e)=>{var c;const{container:n,...o}=t,[r,i]=y.useState(!1);bt(()=>i(!0),[]);const s=n||r&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return s?Le.createPortal(H.jsx(Q.div,{...o,ref:e}),s):null});Kn.displayName=qn;export{io as A,so as C,$e as D,Kn as P,ro as R,co as a,oo as c};
