import{r as y}from"./index-i66itsuO.js";import{u as he,c as ve,a as Ee}from"./index-BNYVQE02.js";import{u as ge,P as ee,d as Tt}from"./index-C7Xses_O.js";import{j as _}from"./jsx-runtime-BSxFkHFN.js";import{r as Mt,M as kt}from"./index-BQPO3JLn.js";import{c as Nt}from"./index-BwxsjnLo.js";import{u as Ft}from"./index-BVL3yOfb.js";function Wt(e,t=globalThis==null?void 0:globalThis.document){const n=he(e);y.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o,{capture:!0}),()=>t.removeEventListener("keydown",o,{capture:!0})},[n,t])}var $t="DismissableLayer",Pe="dismissableLayer.update",Bt="dismissableLayer.pointerDownOutside",_t="dismissableLayer.focusOutside",Ve,et=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ht=y.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:i,onInteractOutside:s,onDismiss:c,...f}=e,l=y.useContext(et),[a,u]=y.useState(null),p=(a==null?void 0:a.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,d]=y.useState({}),m=ge(t,x=>u(x)),h=Array.from(l.layers),[w]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),g=h.indexOf(w),v=a?h.indexOf(a):-1,E=l.layersWithOutsidePointerEventsDisabled.size>0,b=v>=g,A=zt(x=>{const C=x.target,M=[...l.branches].some(O=>O.contains(C));!b||M||(r==null||r(x),s==null||s(x),x.defaultPrevented||c==null||c())},p),P=Vt(x=>{const C=x.target;[...l.branches].some(O=>O.contains(C))||(i==null||i(x),s==null||s(x),x.defaultPrevented||c==null||c())},p);return Wt(x=>{v===l.layers.size-1&&(o==null||o(x),!x.defaultPrevented&&c&&(x.preventDefault(),c()))},p),y.useEffect(()=>{if(a)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(Ve=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(a)),l.layers.add(a),Ye(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Ve)}},[a,p,n,l]),y.useEffect(()=>()=>{a&&(l.layers.delete(a),l.layersWithOutsidePointerEventsDisabled.delete(a),Ye())},[a,l]),y.useEffect(()=>{const x=()=>d({});return document.addEventListener(Pe,x),()=>document.removeEventListener(Pe,x)},[]),_.jsx(ee.div,{...f,ref:m,style:{pointerEvents:E?b?"auto":"none":void 0,...e.style},onFocusCapture:ve(e.onFocusCapture,P.onFocusCapture),onBlurCapture:ve(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:ve(e.onPointerDownCapture,A.onPointerDownCapture)})});Ht.displayName=$t;var jt="DismissableLayerBranch",It=y.forwardRef((e,t)=>{const n=y.useContext(et),o=y.useRef(null),r=ge(t,o);return y.useEffect(()=>{const i=o.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),_.jsx(ee.div,{...e,ref:r})});It.displayName=jt;function zt(e,t=globalThis==null?void 0:globalThis.document){const n=he(e),o=y.useRef(!1),r=y.useRef(()=>{});return y.useEffect(()=>{const i=c=>{if(c.target&&!o.current){let f=function(){tt(Bt,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=f,t.addEventListener("click",r.current,{once:!0})):f()}else t.removeEventListener("click",r.current);o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function Vt(e,t=globalThis==null?void 0:globalThis.document){const n=he(e),o=y.useRef(!1);return y.useEffect(()=>{const r=i=>{i.target&&!o.current&&tt(_t,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Ye(){const e=new CustomEvent(Pe);document.dispatchEvent(e)}function tt(e,t,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?Tt(r,i):r.dispatchEvent(i)}const Yt=["top","right","bottom","left"],q=Math.min,W=Math.max,ue=Math.round,ae=Math.floor,z=e=>({x:e,y:e}),Xt={left:"right",right:"left",bottom:"top",top:"bottom"},Ut={start:"end",end:"start"};function Re(e,t,n){return W(e,q(t,n))}function X(e,t){return typeof e=="function"?e(t):e}function U(e){return e.split("-")[0]}function te(e){return e.split("-")[1]}function Se(e){return e==="x"?"y":"x"}function De(e){return e==="y"?"height":"width"}function K(e){return["top","bottom"].includes(U(e))?"y":"x"}function Le(e){return Se(K(e))}function qt(e,t,n){n===void 0&&(n=!1);const o=te(e),r=Le(e),i=De(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=de(s)),[s,de(s)]}function Kt(e){const t=de(e);return[Ce(e),t,Ce(t)]}function Ce(e){return e.replace(/start|end/g,t=>Ut[t])}function Zt(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function Gt(e,t,n,o){const r=te(e);let i=Zt(U(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Ce)))),i}function de(e){return e.replace(/left|right|bottom|top/g,t=>Xt[t])}function Jt(e){return{top:0,right:0,bottom:0,left:0,...e}}function nt(e){return typeof e!="number"?Jt(e):{top:e,right:e,bottom:e,left:e}}function pe(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Xe(e,t,n){let{reference:o,floating:r}=e;const i=K(t),s=Le(t),c=De(s),f=U(t),l=i==="y",a=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let d;switch(f){case"top":d={x:a,y:o.y-r.height};break;case"bottom":d={x:a,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(te(t)){case"start":d[s]-=p*(n&&l?-1:1);break;case"end":d[s]+=p*(n&&l?-1:1);break}return d}const Qt=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),f=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:a,y:u}=Xe(l,o,f),p=o,d={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:g}=c[h],{x:v,y:E,data:b,reset:A}=await g({x:a,y:u,initialPlacement:o,placement:p,strategy:r,middlewareData:d,rects:l,platform:s,elements:{reference:e,floating:t}});a=v??a,u=E??u,d={...d,[w]:{...d[w],...b}},A&&m<=50&&(m++,typeof A=="object"&&(A.placement&&(p=A.placement),A.rects&&(l=A.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):A.rects),{x:a,y:u}=Xe(l,p,f)),h=-1)}return{x:a,y:u,placement:p,strategy:r,middlewareData:d}};async function re(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:f}=e,{boundary:l="clippingAncestors",rootBoundary:a="viewport",elementContext:u="floating",altBoundary:p=!1,padding:d=0}=X(t,e),m=nt(d),w=c[p?u==="floating"?"reference":"floating":u],g=pe(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:l,rootBoundary:a,strategy:f})),v=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,E=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),b=await(i.isElement==null?void 0:i.isElement(E))?await(i.getScale==null?void 0:i.getScale(E))||{x:1,y:1}:{x:1,y:1},A=pe(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:E,strategy:f}):v);return{top:(g.top-A.top+m.top)/b.y,bottom:(A.bottom-g.bottom+m.bottom)/b.y,left:(g.left-A.left+m.left)/b.x,right:(A.right-g.right+m.right)/b.x}}const en=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:f}=t,{element:l,padding:a=0}=X(e,t)||{};if(l==null)return{};const u=nt(a),p={x:n,y:o},d=Le(r),m=De(d),h=await s.getDimensions(l),w=d==="y",g=w?"top":"left",v=w?"bottom":"right",E=w?"clientHeight":"clientWidth",b=i.reference[m]+i.reference[d]-p[d]-i.floating[m],A=p[d]-i.reference[d],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let x=P?P[E]:0;(!x||!await(s.isElement==null?void 0:s.isElement(P)))&&(x=c.floating[E]||i.floating[m]);const C=b/2-A/2,M=x/2-h[m]/2-1,O=q(u[g],M),N=q(u[v],M),F=O,D=x-h[m]-N,S=x/2-h[m]/2+C,B=Re(F,S,D),L=!f.arrow&&te(r)!=null&&S!==B&&i.reference[m]/2-(S<F?O:N)-h[m]/2<0,T=L?S<F?S-F:S-D:0;return{[d]:p[d]+T,data:{[d]:B,centerOffset:S-B-T,...L&&{alignmentOffset:T}},reset:L}}}),tn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:f,elements:l}=t,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...w}=X(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const g=U(r),v=K(c),E=U(c)===c,b=await(f.isRTL==null?void 0:f.isRTL(l.floating)),A=p||(E||!h?[de(c)]:Kt(c)),P=m!=="none";!p&&P&&A.push(...Gt(c,h,m,b));const x=[c,...A],C=await re(t,w),M=[];let O=((o=i.flip)==null?void 0:o.overflows)||[];if(a&&M.push(C[g]),u){const S=qt(r,s,b);M.push(C[S[0]],C[S[1]])}if(O=[...O,{placement:r,overflows:M}],!M.every(S=>S<=0)){var N,F;const S=(((N=i.flip)==null?void 0:N.index)||0)+1,B=x[S];if(B)return{data:{index:S,overflows:O},reset:{placement:B}};let L=(F=O.filter(T=>T.overflows[0]<=0).sort((T,R)=>T.overflows[1]-R.overflows[1])[0])==null?void 0:F.placement;if(!L)switch(d){case"bestFit":{var D;const T=(D=O.filter(R=>{if(P){const k=K(R.placement);return k===v||k==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(k=>k>0).reduce((k,I)=>k+I,0)]).sort((R,k)=>R[1]-k[1])[0])==null?void 0:D[0];T&&(L=T);break}case"initialPlacement":L=c;break}if(r!==L)return{reset:{placement:L}}}return{}}}};function Ue(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function qe(e){return Yt.some(t=>e[t]>=0)}const nn=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=X(e,t);switch(o){case"referenceHidden":{const i=await re(t,{...r,elementContext:"reference"}),s=Ue(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:qe(s)}}}case"escaped":{const i=await re(t,{...r,altBoundary:!0}),s=Ue(i,n.floating);return{data:{escapedOffsets:s,escaped:qe(s)}}}default:return{}}}}};async function on(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=U(n),c=te(n),f=K(n)==="y",l=["left","top"].includes(s)?-1:1,a=i&&f?-1:1,u=X(t,e);let{mainAxis:p,crossAxis:d,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof m=="number"&&(d=c==="end"?m*-1:m),f?{x:d*a,y:p*l}:{x:p*l,y:d*a}}const rn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=t,f=await on(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+f.x,y:i+f.y,data:{...f,placement:s}}}}},sn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:g,y:v}=w;return{x:g,y:v}}},...f}=X(e,t),l={x:n,y:o},a=await re(t,f),u=K(U(r)),p=Se(u);let d=l[p],m=l[u];if(i){const w=p==="y"?"top":"left",g=p==="y"?"bottom":"right",v=d+a[w],E=d-a[g];d=Re(v,d,E)}if(s){const w=u==="y"?"top":"left",g=u==="y"?"bottom":"right",v=m+a[w],E=m-a[g];m=Re(v,m,E)}const h=c.fn({...t,[p]:d,[u]:m});return{...h,data:{x:h.x-n,y:h.y-o,enabled:{[p]:i,[u]:s}}}}}},cn=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:c=0,mainAxis:f=!0,crossAxis:l=!0}=X(e,t),a={x:n,y:o},u=K(r),p=Se(u);let d=a[p],m=a[u];const h=X(c,t),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(f){const E=p==="y"?"height":"width",b=i.reference[p]-i.floating[E]+w.mainAxis,A=i.reference[p]+i.reference[E]-w.mainAxis;d<b?d=b:d>A&&(d=A)}if(l){var g,v;const E=p==="y"?"width":"height",b=["top","left"].includes(U(r)),A=i.reference[u]-i.floating[E]+(b&&((g=s.offset)==null?void 0:g[u])||0)+(b?0:w.crossAxis),P=i.reference[u]+i.reference[E]+(b?0:((v=s.offset)==null?void 0:v[u])||0)-(b?w.crossAxis:0);m<A?m=A:m>P&&(m=P)}return{[p]:d,[u]:m}}}},ln=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:i,platform:s,elements:c}=t,{apply:f=()=>{},...l}=X(e,t),a=await re(t,l),u=U(r),p=te(r),d=K(r)==="y",{width:m,height:h}=i.floating;let w,g;u==="top"||u==="bottom"?(w=u,g=p===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(g=u,w=p==="end"?"top":"bottom");const v=h-a.top-a.bottom,E=m-a.left-a.right,b=q(h-a[w],v),A=q(m-a[g],E),P=!t.middlewareData.shift;let x=b,C=A;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(C=E),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(x=v),P&&!p){const O=W(a.left,0),N=W(a.right,0),F=W(a.top,0),D=W(a.bottom,0);d?C=m-2*(O!==0||N!==0?O+N:W(a.left,a.right)):x=h-2*(F!==0||D!==0?F+D:W(a.top,a.bottom))}await f({...t,availableWidth:C,availableHeight:x});const M=await s.getDimensions(c.floating);return m!==M.width||h!==M.height?{reset:{rects:!0}}:{}}}};function we(){return typeof window<"u"}function ne(e){return ot(e)?(e.nodeName||"").toLowerCase():"#document"}function $(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(ot(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ot(e){return we()?e instanceof Node||e instanceof $(e).Node:!1}function H(e){return we()?e instanceof Element||e instanceof $(e).Element:!1}function V(e){return we()?e instanceof HTMLElement||e instanceof $(e).HTMLElement:!1}function Ke(e){return!we()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $(e).ShadowRoot}function se(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=j(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function an(e){return["table","td","th"].includes(ne(e))}function ye(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Te(e){const t=Me(),n=H(e)?j(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function fn(e){let t=Z(e);for(;V(t)&&!Q(t);){if(Te(t))return t;if(ye(t))return null;t=Z(t)}return null}function Me(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Q(e){return["html","body","#document"].includes(ne(e))}function j(e){return $(e).getComputedStyle(e)}function xe(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Z(e){if(ne(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ke(e)&&e.host||Y(e);return Ke(t)?t.host:t}function rt(e){const t=Z(e);return Q(t)?e.ownerDocument?e.ownerDocument.body:e.body:V(t)&&se(t)?t:rt(t)}function ie(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=rt(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=$(r);if(i){const c=Oe(s);return t.concat(s,s.visualViewport||[],se(r)?r:[],c&&n?ie(c):[])}return t.concat(r,ie(r,[],n))}function Oe(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function it(e){const t=j(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=V(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,c=ue(n)!==i||ue(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function ke(e){return H(e)?e:e.contextElement}function J(e){const t=ke(e);if(!V(t))return z(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=it(t);let s=(i?ue(n.width):n.width)/o,c=(i?ue(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const un=z(0);function st(e){const t=$(e);return!Me()||!t.visualViewport?un:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function dn(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$(e)?!1:t}function G(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=ke(e);let s=z(1);t&&(o?H(o)&&(s=J(o)):s=J(e));const c=dn(i,n,o)?st(i):z(0);let f=(r.left+c.x)/s.x,l=(r.top+c.y)/s.y,a=r.width/s.x,u=r.height/s.y;if(i){const p=$(i),d=o&&H(o)?$(o):o;let m=p,h=Oe(m);for(;h&&o&&d!==m;){const w=J(h),g=h.getBoundingClientRect(),v=j(h),E=g.left+(h.clientLeft+parseFloat(v.paddingLeft))*w.x,b=g.top+(h.clientTop+parseFloat(v.paddingTop))*w.y;f*=w.x,l*=w.y,a*=w.x,u*=w.y,f+=E,l+=b,m=$(h),h=Oe(m)}}return pe({width:a,height:u,x:f,y:l})}function Ne(e,t){const n=xe(e).scrollLeft;return t?t.left+n:G(Y(e)).left+n}function ct(e,t,n){n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(n?0:Ne(e,o)),i=o.top+t.scrollTop;return{x:r,y:i}}function pn(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=Y(o),c=t?ye(t.floating):!1;if(o===s||c&&i)return n;let f={scrollLeft:0,scrollTop:0},l=z(1);const a=z(0),u=V(o);if((u||!u&&!i)&&((ne(o)!=="body"||se(s))&&(f=xe(o)),V(o))){const d=G(o);l=J(o),a.x=d.x+o.clientLeft,a.y=d.y+o.clientTop}const p=s&&!u&&!i?ct(s,f,!0):z(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-f.scrollLeft*l.x+a.x+p.x,y:n.y*l.y-f.scrollTop*l.y+a.y+p.y}}function mn(e){return Array.from(e.getClientRects())}function hn(e){const t=Y(e),n=xe(e),o=e.ownerDocument.body,r=W(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=W(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ne(e);const c=-n.scrollTop;return j(o).direction==="rtl"&&(s+=W(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function gn(e,t){const n=$(e),o=Y(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,f=0;if(r){i=r.width,s=r.height;const l=Me();(!l||l&&t==="fixed")&&(c=r.offsetLeft,f=r.offsetTop)}return{width:i,height:s,x:c,y:f}}function wn(e,t){const n=G(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=V(e)?J(e):z(1),s=e.clientWidth*i.x,c=e.clientHeight*i.y,f=r*i.x,l=o*i.y;return{width:s,height:c,x:f,y:l}}function Ze(e,t,n){let o;if(t==="viewport")o=gn(e,n);else if(t==="document")o=hn(Y(e));else if(H(t))o=wn(t,n);else{const r=st(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return pe(o)}function lt(e,t){const n=Z(e);return n===t||!H(n)||Q(n)?!1:j(n).position==="fixed"||lt(n,t)}function yn(e,t){const n=t.get(e);if(n)return n;let o=ie(e,[],!1).filter(c=>H(c)&&ne(c)!=="body"),r=null;const i=j(e).position==="fixed";let s=i?Z(e):e;for(;H(s)&&!Q(s);){const c=j(s),f=Te(s);!f&&c.position==="fixed"&&(r=null),(i?!f&&!r:!f&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||se(s)&&!f&&lt(e,s))?o=o.filter(a=>a!==s):r=c,s=Z(s)}return t.set(e,o),o}function xn(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?ye(t)?[]:yn(t,this._c):[].concat(n),o],c=s[0],f=s.reduce((l,a)=>{const u=Ze(t,a,r);return l.top=W(u.top,l.top),l.right=q(u.right,l.right),l.bottom=q(u.bottom,l.bottom),l.left=W(u.left,l.left),l},Ze(t,c,r));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function vn(e){const{width:t,height:n}=it(e);return{width:t,height:n}}function bn(e,t,n){const o=V(t),r=Y(t),i=n==="fixed",s=G(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const f=z(0);if(o||!o&&!i)if((ne(t)!=="body"||se(r))&&(c=xe(t)),o){const p=G(t,!0,i,t);f.x=p.x+t.clientLeft,f.y=p.y+t.clientTop}else r&&(f.x=Ne(r));const l=r&&!o&&!i?ct(r,c):z(0),a=s.left+c.scrollLeft-f.x-l.x,u=s.top+c.scrollTop-f.y-l.y;return{x:a,y:u,width:s.width,height:s.height}}function be(e){return j(e).position==="static"}function Ge(e,t){if(!V(e)||j(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Y(e)===n&&(n=n.ownerDocument.body),n}function at(e,t){const n=$(e);if(ye(e))return n;if(!V(e)){let r=Z(e);for(;r&&!Q(r);){if(H(r)&&!be(r))return r;r=Z(r)}return n}let o=Ge(e,t);for(;o&&an(o)&&be(o);)o=Ge(o,t);return o&&Q(o)&&be(o)&&!Te(o)?n:o||fn(e)||n}const An=async function(e){const t=this.getOffsetParent||at,n=this.getDimensions,o=await n(e.floating);return{reference:bn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function En(e){return j(e).direction==="rtl"}const Pn={convertOffsetParentRelativeRectToViewportRelativeRect:pn,getDocumentElement:Y,getClippingRect:xn,getOffsetParent:at,getElementRects:An,getClientRects:mn,getDimensions:vn,getScale:J,isElement:H,isRTL:En};function ft(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Rn(e,t){let n=null,o;const r=Y(e);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,f){c===void 0&&(c=!1),f===void 0&&(f=1),i();const l=e.getBoundingClientRect(),{left:a,top:u,width:p,height:d}=l;if(c||t(),!p||!d)return;const m=ae(u),h=ae(r.clientWidth-(a+p)),w=ae(r.clientHeight-(u+d)),g=ae(a),E={rootMargin:-m+"px "+-h+"px "+-w+"px "+-g+"px",threshold:W(0,q(1,f))||1};let b=!0;function A(P){const x=P[0].intersectionRatio;if(x!==f){if(!b)return s();x?s(!1,x):o=setTimeout(()=>{s(!1,1e-7)},1e3)}x===1&&!ft(l,e.getBoundingClientRect())&&s(),b=!1}try{n=new IntersectionObserver(A,{...E,root:r.ownerDocument})}catch{n=new IntersectionObserver(A,E)}n.observe(e)}return s(!0),i}function Cn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:f=!1}=o,l=ke(e),a=r||i?[...l?ie(l):[],...ie(t)]:[];a.forEach(g=>{r&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const u=l&&c?Rn(l,n):null;let p=-1,d=null;s&&(d=new ResizeObserver(g=>{let[v]=g;v&&v.target===l&&d&&(d.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var E;(E=d)==null||E.observe(t)})),n()}),l&&!f&&d.observe(l),d.observe(t));let m,h=f?G(e):null;f&&w();function w(){const g=G(e);h&&!ft(h,g)&&n(),h=g,m=requestAnimationFrame(w)}return n(),()=>{var g;a.forEach(v=>{r&&v.removeEventListener("scroll",n),i&&v.removeEventListener("resize",n)}),u==null||u(),(g=d)==null||g.disconnect(),d=null,f&&cancelAnimationFrame(m)}}const On=rn,Sn=sn,Dn=tn,Ln=ln,Tn=nn,Je=en,Mn=cn,kn=(e,t,n)=>{const o=new Map,r={platform:Pn,...n},i={...r.platform,_c:o};return Qt(e,t,{...r,platform:i})};var fe=typeof document<"u"?y.useLayoutEffect:y.useEffect;function me(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!me(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!me(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function ut(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Qe(e,t){const n=ut(e);return Math.round(t*n)/n}function Ae(e){const t=y.useRef(e);return fe(()=>{t.current=e}),t}function Nn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:f,open:l}=e,[a,u]=y.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,d]=y.useState(o);me(p,o)||d(o);const[m,h]=y.useState(null),[w,g]=y.useState(null),v=y.useCallback(R=>{R!==P.current&&(P.current=R,h(R))},[]),E=y.useCallback(R=>{R!==x.current&&(x.current=R,g(R))},[]),b=i||m,A=s||w,P=y.useRef(null),x=y.useRef(null),C=y.useRef(a),M=f!=null,O=Ae(f),N=Ae(r),F=Ae(l),D=y.useCallback(()=>{if(!P.current||!x.current)return;const R={placement:t,strategy:n,middleware:p};N.current&&(R.platform=N.current),kn(P.current,x.current,R).then(k=>{const I={...k,isPositioned:F.current!==!1};S.current&&!me(C.current,I)&&(C.current=I,Mt.flushSync(()=>{u(I)}))})},[p,t,n,N,F]);fe(()=>{l===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[l]);const S=y.useRef(!1);fe(()=>(S.current=!0,()=>{S.current=!1}),[]),fe(()=>{if(b&&(P.current=b),A&&(x.current=A),b&&A){if(O.current)return O.current(b,A,D);D()}},[b,A,D,O,M]);const B=y.useMemo(()=>({reference:P,floating:x,setReference:v,setFloating:E}),[v,E]),L=y.useMemo(()=>({reference:b,floating:A}),[b,A]),T=y.useMemo(()=>{const R={position:n,left:0,top:0};if(!L.floating)return R;const k=Qe(L.floating,a.x),I=Qe(L.floating,a.y);return c?{...R,transform:"translate("+k+"px, "+I+"px)",...ut(L.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:k,top:I}},[n,c,L.floating,a.x,a.y]);return y.useMemo(()=>({...a,update:D,refs:B,elements:L,floatingStyles:T}),[a,D,B,L,T])}const Fn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Je({element:o.current,padding:r}).fn(n):{}:o?Je({element:o,padding:r}).fn(n):{}}}},Wn=(e,t)=>({...On(e),options:[e,t]}),$n=(e,t)=>({...Sn(e),options:[e,t]}),Bn=(e,t)=>({...Mn(e),options:[e,t]}),_n=(e,t)=>({...Dn(e),options:[e,t]}),Hn=(e,t)=>({...Ln(e),options:[e,t]}),jn=(e,t)=>({...Tn(e),options:[e,t]}),In=(e,t)=>({...Fn(e),options:[e,t]});var zn="Arrow",dt=y.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return _.jsx(ee.svg,{...i,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:_.jsx("polygon",{points:"0,0 30,0 15,10"})})});dt.displayName=zn;var Vn=dt,Fe="Popper",[pt,so]=Nt(Fe),[Yn,mt]=pt(Fe),ht=e=>{const{__scopePopper:t,children:n}=e,[o,r]=y.useState(null);return _.jsx(Yn,{scope:t,anchor:o,onAnchorChange:r,children:n})};ht.displayName=Fe;var gt="PopperAnchor",wt=y.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=mt(gt,n),s=y.useRef(null),c=ge(t,s);return y.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:_.jsx(ee.div,{...r,ref:c})});wt.displayName=gt;var We="PopperContent",[Xn,Un]=pt(We),yt=y.forwardRef((e,t)=>{var $e,Be,_e,He,je,Ie;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:f=!0,collisionBoundary:l=[],collisionPadding:a=0,sticky:u="partial",hideWhenDetached:p=!1,updatePositionStrategy:d="optimized",onPlaced:m,...h}=e,w=mt(We,n),[g,v]=y.useState(null),E=ge(t,oe=>v(oe)),[b,A]=y.useState(null),P=Ft(b),x=(P==null?void 0:P.width)??0,C=(P==null?void 0:P.height)??0,M=o+(i!=="center"?"-"+i:""),O=typeof a=="number"?a:{top:0,right:0,bottom:0,left:0,...a},N=Array.isArray(l)?l:[l],F=N.length>0,D={padding:O,boundary:N.filter(Kn),altBoundary:F},{refs:S,floatingStyles:B,placement:L,isPositioned:T,middlewareData:R}=Nn({strategy:"fixed",placement:M,whileElementsMounted:(...oe)=>Cn(...oe,{animationFrame:d==="always"}),elements:{reference:w.anchor},middleware:[Wn({mainAxis:r+C,alignmentAxis:s}),f&&$n({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?Bn():void 0,...D}),f&&_n({...D}),Hn({...D,apply:({elements:oe,rects:ze,availableWidth:Ot,availableHeight:St})=>{const{width:Dt,height:Lt}=ze.reference,le=oe.floating.style;le.setProperty("--radix-popper-available-width",`${Ot}px`),le.setProperty("--radix-popper-available-height",`${St}px`),le.setProperty("--radix-popper-anchor-width",`${Dt}px`),le.setProperty("--radix-popper-anchor-height",`${Lt}px`)}}),b&&In({element:b,padding:c}),Zn({arrowWidth:x,arrowHeight:C}),p&&jn({strategy:"referenceHidden",...D})]}),[k,I]=bt(L),ce=he(m);Ee(()=>{T&&(ce==null||ce())},[T,ce]);const At=($e=R.arrow)==null?void 0:$e.x,Et=(Be=R.arrow)==null?void 0:Be.y,Pt=((_e=R.arrow)==null?void 0:_e.centerOffset)!==0,[Rt,Ct]=y.useState();return Ee(()=>{g&&Ct(window.getComputedStyle(g).zIndex)},[g]),_.jsx("div",{ref:S.setFloating,"data-radix-popper-content-wrapper":"",style:{...B,transform:T?B.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Rt,"--radix-popper-transform-origin":[(He=R.transformOrigin)==null?void 0:He.x,(je=R.transformOrigin)==null?void 0:je.y].join(" "),...((Ie=R.hide)==null?void 0:Ie.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:_.jsx(Xn,{scope:n,placedSide:k,onArrowChange:A,arrowX:At,arrowY:Et,shouldHideArrow:Pt,children:_.jsx(ee.div,{"data-side":k,"data-align":I,...h,ref:E,style:{...h.style,animation:T?void 0:"none"}})})})});yt.displayName=We;var xt="PopperArrow",qn={top:"bottom",right:"left",bottom:"top",left:"right"},vt=y.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=Un(xt,o),s=qn[i.placedSide];return _.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:_.jsx(Vn,{...r,ref:n,style:{...r.style,display:"block"}})})});vt.displayName=xt;function Kn(e){return e!==null}var Zn=e=>({name:"transformOrigin",options:e,fn(t){var w,g,v;const{placement:n,rects:o,middlewareData:r}=t,s=((w=r.arrow)==null?void 0:w.centerOffset)!==0,c=s?0:e.arrowWidth,f=s?0:e.arrowHeight,[l,a]=bt(n),u={start:"0%",center:"50%",end:"100%"}[a],p=(((g=r.arrow)==null?void 0:g.x)??0)+c/2,d=(((v=r.arrow)==null?void 0:v.y)??0)+f/2;let m="",h="";return l==="bottom"?(m=s?u:`${p}px`,h=`${-f}px`):l==="top"?(m=s?u:`${p}px`,h=`${o.floating.height+f}px`):l==="right"?(m=`${-f}px`,h=s?u:`${d}px`):l==="left"&&(m=`${o.floating.width+f}px`,h=s?u:`${d}px`),{data:{x:m,y:h}}}});function bt(e){const[t,n="center"]=e.split("-");return[t,n]}var co=ht,lo=wt,ao=yt,fo=vt,Gn="Portal",Jn=y.forwardRef((e,t)=>{var c;const{container:n,...o}=e,[r,i]=y.useState(!1);Ee(()=>i(!0),[]);const s=n||r&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return s?kt.createPortal(_.jsx(ee.div,{...o,ref:t}),s):null});Jn.displayName=Gn;export{lo as A,ao as C,Ht as D,Jn as P,co as R,fo as a,so as c};
