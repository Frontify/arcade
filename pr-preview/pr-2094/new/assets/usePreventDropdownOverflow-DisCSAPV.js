import{r as i}from"./index-BwDkhjyp.js";import{u as ve,P as he}from"./index-BtCsUTRM.js";import{u as $}from"./index-DOnKqARA.js";import{j as me}from"./jsx-runtime-Nms4Y4qS.js";var D=0;function yt(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Z()),document.body.insertAdjacentElement("beforeend",e[1]??Z()),D++,()=>{D===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),D--}},[])}function Z(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var V="focusScope.autoFocusOnMount",U="focusScope.autoFocusOnUnmount",q={bubbles:!1,cancelable:!0},pe="FocusScope",ge=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...l}=e,[c,E]=i.useState(null),y=$(o),p=$(u),f=i.useRef(null),v=ve(t,a=>E(a)),h=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let a=function(m){if(h.paused||!c)return;const g=m.target;c.contains(g)?f.current=g:C(f.current,{select:!0})},s=function(m){if(h.paused||!c)return;const g=m.relatedTarget;g!==null&&(c.contains(g)||C(f.current,{select:!0}))},d=function(m){if(document.activeElement===document.body)for(const b of m)b.removedNodes.length>0&&C(c)};document.addEventListener("focusin",a),document.addEventListener("focusout",s);const w=new MutationObserver(d);return c&&w.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",s),w.disconnect()}}},[r,c,h.paused]),i.useEffect(()=>{if(c){J.add(h);const a=document.activeElement;if(!c.contains(a)){const d=new CustomEvent(V,q);c.addEventListener(V,y),c.dispatchEvent(d),d.defaultPrevented||(ye(Ce(oe(c)),{select:!0}),document.activeElement===a&&C(c))}return()=>{c.removeEventListener(V,y),setTimeout(()=>{const d=new CustomEvent(U,q);c.addEventListener(U,p),c.dispatchEvent(d),d.defaultPrevented||C(a??document.body,{select:!0}),c.removeEventListener(U,p),J.remove(h)},0)}}},[c,y,p,h]);const S=i.useCallback(a=>{if(!n&&!r||h.paused)return;const s=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,d=document.activeElement;if(s&&d){const w=a.currentTarget,[m,g]=be(w);m&&g?!a.shiftKey&&d===g?(a.preventDefault(),n&&C(m,{select:!0})):a.shiftKey&&d===m&&(a.preventDefault(),n&&C(g,{select:!0})):d===w&&a.preventDefault()}},[n,r,h.paused]);return me.jsx(he.div,{tabIndex:-1,...l,ref:v,onKeyDown:S})});ge.displayName=pe;function ye(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(C(r,{select:t}),document.activeElement!==n)return}function be(e){const t=oe(e),n=Q(t,e),r=Q(t.reverse(),e);return[n,r]}function oe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Q(e,t){for(const n of e)if(!we(n,{upTo:t}))return n}function we(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ee(e){return e instanceof HTMLInputElement&&"select"in e}function C(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ee(e)&&t&&e.select()}}var J=Se();function Se(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ee(e,t),e.unshift(t)},remove(t){var n;e=ee(e,t),(n=e[0])==null||n.resume()}}}function ee(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ce(e){return e.filter(t=>t.tagName!=="A")}var Ae=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},R=new WeakMap,M=new WeakMap,N={},K=0,ce=function(e){return e&&(e.host||ce(e.parentNode))},Oe=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ce(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Re=function(e,t,n,r){var o=Oe(t,Array.isArray(e)?e:[e]);N[n]||(N[n]=new WeakMap);var u=N[n],l=[],c=new Set,E=new Set(o),y=function(f){!f||c.has(f)||(c.add(f),y(f.parentNode))};o.forEach(y);var p=function(f){!f||E.has(f)||Array.prototype.forEach.call(f.children,function(v){if(c.has(v))p(v);else try{var h=v.getAttribute(r),S=h!==null&&h!=="false",a=(R.get(v)||0)+1,s=(u.get(v)||0)+1;R.set(v,a),u.set(v,s),l.push(v),a===1&&S&&M.set(v,!0),s===1&&v.setAttribute(n,"true"),S||v.setAttribute(r,"true")}catch(d){console.error("aria-hidden: cannot operate on ",v,d)}})};return p(t),c.clear(),K++,function(){l.forEach(function(f){var v=R.get(f)-1,h=u.get(f)-1;R.set(f,v),u.set(f,h),v||(M.has(f)||f.removeAttribute(r),M.delete(f)),h||f.removeAttribute(n)}),K--,K||(R=new WeakMap,R=new WeakMap,M=new WeakMap,N={})}},bt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Ae(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Re(r,o,n,"aria-hidden")):function(){return null}},A=function(){return A=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},A.apply(this,arguments)};function Te(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Fe(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,u;r<o;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return e.concat(u||Array.prototype.slice.call(t))}var W="right-scroll-bar-position",B="width-before-scroll-bar",ke="with-scroll-bars-hidden",Pe="--removed-body-scroll-bar-size";function xe(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Me(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function Ne(e,t){return Me(null,function(n){return e.forEach(function(r){return xe(r,n)})})}var j=function(){return j=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},j.apply(this,arguments)};function Le(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Ie(e){return e}function _e(e,t){t===void 0&&(t=Ie);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(u){var l=t(u,r);return n.push(l),function(){n=n.filter(function(c){return c!==l})}},assignSyncMedium:function(u){for(r=!0;n.length;){var l=n;n=[],l.forEach(u)}n={push:function(c){return u(c)},filter:function(){return n}}},assignMedium:function(u){r=!0;var l=[];if(n.length){var c=n;n=[],c.forEach(u),l=n}var E=function(){var p=l;l=[],p.forEach(u)},y=function(){return Promise.resolve().then(E)};y(),n={push:function(p){l.push(p),y()},filter:function(p){return l=l.filter(p),n}}}};return o}function We(e){e===void 0&&(e={});var t=_e(null);return t.options=j({async:!0,ssr:!1},e),t}var ue=function(e){var t=e.sideCar,n=Le(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,j({},n))};ue.isSideCarExport=!0;function Be(e,t){return e.useMedium(t),ue}var ie=We(),X=function(){},H=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:X,onWheelCapture:X,onTouchMoveCapture:X}),o=r[0],u=r[1],l=e.forwardProps,c=e.children,E=e.className,y=e.removeScrollBar,p=e.enabled,f=e.shards,v=e.sideCar,h=e.noIsolation,S=e.inert,a=e.allowPinchZoom,s=e.as,d=s===void 0?"div":s,w=e.gapMode,m=Te(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),g=v,b=Ne([n,t]),O=A(A({},m),o);return i.createElement(i.Fragment,null,p&&i.createElement(g,{sideCar:ie,removeScrollBar:y,shards:f,noIsolation:h,inert:S,setCallbacks:u,allowPinchZoom:!!a,lockRef:n,gapMode:w}),l?i.cloneElement(i.Children.only(c),A(A({},O),{ref:b})):i.createElement(d,A({},O,{className:E,ref:b}),c))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};H.classNames={fullWidth:B,zeroRight:W};var je=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function He(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=je();return t&&e.setAttribute("nonce",t),e}function De(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ve(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Ue=function(){var e=0,t=null;return{add:function(n){e==0&&(t=He())&&(De(t,n),Ve(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Ke=function(){var e=Ue();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},se=function(){var e=Ke(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Xe={left:0,top:0,right:0,gap:0},Y=function(e){return parseInt(e||"",10)||0},Ye=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Y(n),Y(r),Y(o)]},ze=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Xe;var t=Ye(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ge=se(),k="data-scroll-locked",$e=function(e,t,n,r){var o=e.left,u=e.top,l=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ke,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(k,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(W,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(B,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(W," .").concat(W,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(B," .").concat(B,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(k,`] {
    `).concat(Pe,": ").concat(c,`px;
  }
`)},te=function(){var e=parseInt(document.body.getAttribute(k)||"0",10);return isFinite(e)?e:0},Ze=function(){i.useEffect(function(){return document.body.setAttribute(k,(te()+1).toString()),function(){var e=te()-1;e<=0?document.body.removeAttribute(k):document.body.setAttribute(k,e.toString())}},[])},qe=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Ze();var u=i.useMemo(function(){return ze(o)},[o]);return i.createElement(Ge,{styles:$e(u,!t,o,n?"":"!important")})},z=!1;if(typeof window<"u")try{var L=Object.defineProperty({},"passive",{get:function(){return z=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch{z=!1}var T=z?{passive:!1}:!1,Qe=function(e){return e.tagName==="TEXTAREA"},le=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Qe(e)&&n[t]==="visible")},Je=function(e){return le(e,"overflowY")},et=function(e){return le(e,"overflowX")},ne=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=fe(e,r);if(o){var u=de(e,r),l=u[1],c=u[2];if(l>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},tt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},nt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},fe=function(e,t){return e==="v"?Je(t):et(t)},de=function(e,t){return e==="v"?tt(t):nt(t)},rt=function(e,t){return e==="h"&&t==="rtl"?-1:1},at=function(e,t,n,r,o){var u=rt(e,window.getComputedStyle(t).direction),l=u*r,c=n.target,E=t.contains(c),y=!1,p=l>0,f=0,v=0;do{var h=de(e,c),S=h[0],a=h[1],s=h[2],d=a-s-u*S;(S||d)&&fe(e,c)&&(f+=d,v+=S),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!E&&c!==document.body||E&&(t.contains(c)||t===c));return(p&&(Math.abs(f)<1||!o)||!p&&(Math.abs(v)<1||!o))&&(y=!0),y},I=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},re=function(e){return[e.deltaX,e.deltaY]},ae=function(e){return e&&"current"in e?e.current:e},ot=function(e,t){return e[0]===t[0]&&e[1]===t[1]},ct=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ut=0,F=[];function it(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(ut++)[0],u=i.useState(se)[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var a=Fe([e.lockRef.current],(e.shards||[]).map(ae),!0).filter(Boolean);return a.forEach(function(s){return s.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),a.forEach(function(s){return s.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(a,s){if("touches"in a&&a.touches.length===2||a.type==="wheel"&&a.ctrlKey)return!l.current.allowPinchZoom;var d=I(a),w=n.current,m="deltaX"in a?a.deltaX:w[0]-d[0],g="deltaY"in a?a.deltaY:w[1]-d[1],b,O=a.target,P=Math.abs(m)>Math.abs(g)?"h":"v";if("touches"in a&&P==="h"&&O.type==="range")return!1;var x=ne(P,O);if(!x)return!0;if(x?b=P:(b=P==="v"?"h":"v",x=ne(P,O)),!x)return!1;if(!r.current&&"changedTouches"in a&&(m||g)&&(r.current=b),!b)return!0;var G=r.current||b;return at(G,s,a,G==="h"?m:g,!0)},[]),E=i.useCallback(function(a){var s=a;if(!(!F.length||F[F.length-1]!==u)){var d="deltaY"in s?re(s):I(s),w=t.current.filter(function(b){return b.name===s.type&&(b.target===s.target||s.target===b.shadowParent)&&ot(b.delta,d)})[0];if(w&&w.should){s.cancelable&&s.preventDefault();return}if(!w){var m=(l.current.shards||[]).map(ae).filter(Boolean).filter(function(b){return b.contains(s.target)}),g=m.length>0?c(s,m[0]):!l.current.noIsolation;g&&s.cancelable&&s.preventDefault()}}},[]),y=i.useCallback(function(a,s,d,w){var m={name:a,delta:s,target:d,should:w,shadowParent:st(d)};t.current.push(m),setTimeout(function(){t.current=t.current.filter(function(g){return g!==m})},1)},[]),p=i.useCallback(function(a){n.current=I(a),r.current=void 0},[]),f=i.useCallback(function(a){y(a.type,re(a),a.target,c(a,e.lockRef.current))},[]),v=i.useCallback(function(a){y(a.type,I(a),a.target,c(a,e.lockRef.current))},[]);i.useEffect(function(){return F.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",E,T),document.addEventListener("touchmove",E,T),document.addEventListener("touchstart",p,T),function(){F=F.filter(function(a){return a!==u}),document.removeEventListener("wheel",E,T),document.removeEventListener("touchmove",E,T),document.removeEventListener("touchstart",p,T)}},[]);var h=e.removeScrollBar,S=e.inert;return i.createElement(i.Fragment,null,S?i.createElement(u,{styles:ct(o)}):null,h?i.createElement(qe,{gapMode:e.gapMode}):null)}function st(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const lt=Be(ie,it);var ft=i.forwardRef(function(e,t){return i.createElement(H,A({},e,{ref:t,sideCar:lt}))});ft.classNames=H.classNames;const _=8;function dt(e){if(!window)throw new Error("Window object not found, this method should be used in a browser environment");e.style.maxHeight="";const{top:t,bottom:n}=e.getBoundingClientRect();t-_<0?e.style.maxHeight=`${n-_}px`:n+_>window.innerHeight&&(e.style.maxHeight=`${window.innerHeight-t-_}px`)}function vt(e){const t=e.getBoundingClientRect(),n=t.width>0&&t.height>0,r=window.getComputedStyle(e),o=r.display!=="none"&&r.visibility!=="hidden"&&parseFloat(r.opacity)!==0,u=t.top<window.innerHeight&&t.left<window.innerWidth&&t.bottom>0&&t.right>0;return n&&o&&u}function wt(e,t){t&&(typeof t=="function"?t(e.current):t&&"current"in t&&(t.current=e.current))}function Et(e){e.currentTarget.dataset.autoFocusVisible="false"}function St(e){const t=e.relatedTarget;t!=null&&t.dataset.autoFocusTrigger&&(t.dataset.autoFocusVisible==="true"?e.target.dataset.showFocusRing="true":e.target.dataset.showFocusRing="false",t.dataset.autoFocusVisible="true")}function Ct(e){const t=i.useCallback(()=>{requestAnimationFrame(()=>{e.current&&vt(e.current)&&dt(e.current)})},[e]);return i.useLayoutEffect(()=>(t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[t]),{setMaxHeight:t}}export{ge as F,ft as R,Et as a,Ct as b,St as c,bt as h,wt as s,yt as u};
