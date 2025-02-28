import{g as B}from"./useFocusable-BRFkliNn.js";import{b as j,c as h,d as z,e as U,f as q}from"./useFocusRing-CP9UJNUw.js";import{$ as N}from"./useEffectEvent-BaECT7_f.js";import{r as E,R}from"./index-v7USjxUg.js";function H(e){const t=j(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:o}=e.style,r=n!=="none"&&o!=="hidden"&&o!=="collapse";if(r){const{getComputedStyle:a}=e.ownerDocument.defaultView;let{display:l,visibility:i}=a(e);r=l!=="none"&&i!=="hidden"&&i!=="collapse"}return r}function W(e,t){return!e.hasAttribute("hidden")&&!e.hasAttribute("data-react-aria-prevent-focus")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function O(e,t){return e.nodeName!=="#comment"&&H(e)&&W(e,t)&&(!e.parentElement||O(e.parentElement,e))}const K=R.createContext(null),_="react-aria-focus-scope-restore";let c=null;function ae(e){let{children:t,contain:n,restoreFocus:o,autoFocus:r}=e,a=E.useRef(null),l=E.useRef(null),i=E.useRef([]),{parentNode:p}=E.useContext(K)||{},u=E.useMemo(()=>new M({scopeRef:i}),[i]);N(()=>{let s=p||v.root;if(v.getTreeNode(s.scopeRef)&&c&&!L(c,s.scopeRef)){let b=v.getTreeNode(c);b&&(s=b)}s.addChild(u),v.addNode(u)},[u,p]),N(()=>{let s=v.getTreeNode(i);s&&(s.contain=!!n)},[n]),N(()=>{var s;let b=(s=a.current)===null||s===void 0?void 0:s.nextSibling,$=[],x=F=>F.stopPropagation();for(;b&&b!==l.current;)$.push(b),b.addEventListener(_,x),b=b.nextSibling;return i.current=$,()=>{for(let F of $)F.removeEventListener(_,x)}},[t]),Z(i,o,n),Q(i,n),ee(i,o,n),X(i,r),E.useEffect(()=>{const s=h(i.current?i.current[0]:void 0).activeElement;let b=null;if(m(s,i.current)){for(let $ of v.traverse())$.scopeRef&&m(s,$.scopeRef.current)&&(b=$);b===v.getTreeNode(i)&&(c=b.scopeRef)}},[i]),N(()=>()=>{var s,b,$;let x=($=(b=v.getTreeNode(i))===null||b===void 0||(s=b.parent)===null||s===void 0?void 0:s.scopeRef)!==null&&$!==void 0?$:null;(i===c||L(i,c))&&(!x||v.getTreeNode(x))&&(c=x),v.removeTreeNode(i)},[i]);let d=E.useMemo(()=>G(i),[]),f=E.useMemo(()=>({focusManager:d,parentNode:u}),[u,d]);return R.createElement(K.Provider,{value:f},R.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:a}),t,R.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:l}))}function G(e){return{focusNext(t={}){let n=e.current,{from:o,tabbable:r,wrap:a,accept:l}=t,i=o||h(n[0]).activeElement,p=n[0].previousElementSibling,u=w(n),d=y(u,{tabbable:r,accept:l},n);d.currentNode=m(i,n)?i:p;let f=d.nextNode();return!f&&a&&(d.currentNode=p,f=d.nextNode()),f&&T(f,!0),f},focusPrevious(t={}){let n=e.current,{from:o,tabbable:r,wrap:a,accept:l}=t,i=o||h(n[0]).activeElement,p=n[n.length-1].nextElementSibling,u=w(n),d=y(u,{tabbable:r,accept:l},n);d.currentNode=m(i,n)?i:p;let f=d.previousNode();return!f&&a&&(d.currentNode=p,f=d.previousNode()),f&&T(f,!0),f},focusFirst(t={}){let n=e.current,{tabbable:o,accept:r}=t,a=w(n),l=y(a,{tabbable:o,accept:r},n);l.currentNode=n[0].previousElementSibling;let i=l.nextNode();return i&&T(i,!0),i},focusLast(t={}){let n=e.current,{tabbable:o,accept:r}=t,a=w(n),l=y(a,{tabbable:o,accept:r},n);l.currentNode=n[n.length-1].nextElementSibling;let i=l.previousNode();return i&&T(i,!0),i}}}const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],J=A.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const Y=A.join(':not([hidden]):not([tabindex="-1"]),');function w(e){return e[0].parentElement}function S(e){let t=v.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function Q(e,t){let n=E.useRef(void 0),o=E.useRef(void 0);N(()=>{let r=e.current;if(!t){o.current&&(cancelAnimationFrame(o.current),o.current=void 0);return}const a=h(r?r[0]:void 0);let l=u=>{if(u.key!=="Tab"||u.altKey||u.ctrlKey||u.metaKey||!S(e)||u.isComposing)return;let d=a.activeElement,f=e.current;if(!f||!m(d,f))return;let s=w(f),b=y(s,{tabbable:!0},f);if(!d)return;b.currentNode=d;let $=u.shiftKey?b.previousNode():b.nextNode();$||(b.currentNode=u.shiftKey?f[f.length-1].nextElementSibling:f[0].previousElementSibling,$=u.shiftKey?b.previousNode():b.nextNode()),u.preventDefault(),$&&T($,!0)},i=u=>{(!c||L(c,e))&&m(u.target,e.current)?(c=e,n.current=u.target):S(e)&&!g(u.target,e)?n.current?n.current.focus():c&&c.current&&C(c.current):S(e)&&(n.current=u.target)},p=u=>{o.current&&cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>{let d=q();if(!((d==="virtual"||d===null)&&z()&&U())&&a.activeElement&&S(e)&&!g(a.activeElement,e))if(c=e,a.body.contains(u.target)){var s;n.current=u.target,(s=n.current)===null||s===void 0||s.focus()}else c.current&&C(c.current)})};return a.addEventListener("keydown",l,!1),a.addEventListener("focusin",i,!1),r==null||r.forEach(u=>u.addEventListener("focusin",i,!1)),r==null||r.forEach(u=>u.addEventListener("focusout",p,!1)),()=>{a.removeEventListener("keydown",l,!1),a.removeEventListener("focusin",i,!1),r==null||r.forEach(u=>u.removeEventListener("focusin",i,!1)),r==null||r.forEach(u=>u.removeEventListener("focusout",p,!1))}},[e,t]),N(()=>()=>{o.current&&cancelAnimationFrame(o.current)},[o])}function P(e){return g(e)}function m(e,t){return!e||!t?!1:t.some(n=>n.contains(e))}function g(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of v.traverse(v.getTreeNode(t)))if(n&&m(e,n.current))return!0;return!1}function ie(e){return g(e,c)}function L(e,t){var n;let o=(n=v.getTreeNode(t))===null||n===void 0?void 0:n.parent;for(;o;){if(o.scopeRef===e)return!0;o=o.parent}return!1}function T(e,t=!1){if(e!=null&&!t)try{B(e)}catch{}else if(e!=null)try{e.focus()}catch{}}function V(e,t=!0){let n=e[0].previousElementSibling,o=w(e),r=y(o,{tabbable:t},e);r.currentNode=n;let a=r.nextNode();return t&&!a&&(o=w(e),r=y(o,{tabbable:!1},e),r.currentNode=n,a=r.nextNode()),a}function C(e,t=!0){T(V(e,t))}function X(e,t){const n=R.useRef(t);E.useEffect(()=>{if(n.current){c=e;const o=h(e.current?e.current[0]:void 0);!m(o.activeElement,c.current)&&e.current&&C(e.current)}n.current=!1},[e])}function Z(e,t,n){N(()=>{if(t||n)return;let o=e.current;const r=h(o?o[0]:void 0);let a=l=>{let i=l.target;m(i,e.current)?c=e:P(i)||(c=null)};return r.addEventListener("focusin",a,!1),o==null||o.forEach(l=>l.addEventListener("focusin",a,!1)),()=>{r.removeEventListener("focusin",a,!1),o==null||o.forEach(l=>l.removeEventListener("focusin",a,!1))}},[e,t,n])}function D(e){let t=v.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(t==null?void 0:t.scopeRef)===e}function ee(e,t,n){const o=E.useRef(typeof document<"u"?h(e.current?e.current[0]:void 0).activeElement:null);N(()=>{let r=e.current;const a=h(r?r[0]:void 0);if(!t||n)return;let l=()=>{(!c||L(c,e))&&m(a.activeElement,e.current)&&(c=e)};return a.addEventListener("focusin",l,!1),r==null||r.forEach(i=>i.addEventListener("focusin",l,!1)),()=>{a.removeEventListener("focusin",l,!1),r==null||r.forEach(i=>i.removeEventListener("focusin",l,!1))}},[e,n]),N(()=>{const r=h(e.current?e.current[0]:void 0);if(!t)return;let a=l=>{if(l.key!=="Tab"||l.altKey||l.ctrlKey||l.metaKey||!S(e)||l.isComposing)return;let i=r.activeElement;if(!g(i,e)||!D(e))return;let p=v.getTreeNode(e);if(!p)return;let u=p.nodeToRestore,d=y(r.body,{tabbable:!0});d.currentNode=i;let f=l.shiftKey?d.previousNode():d.nextNode();if((!u||!r.body.contains(u)||u===r.body)&&(u=void 0,p.nodeToRestore=void 0),(!f||!g(f,e))&&u){d.currentNode=u;do f=l.shiftKey?d.previousNode():d.nextNode();while(g(f,e));l.preventDefault(),l.stopPropagation(),f?T(f,!0):P(u)?T(u,!0):i.blur()}};return n||r.addEventListener("keydown",a,!0),()=>{n||r.removeEventListener("keydown",a,!0)}},[e,t,n]),N(()=>{const r=h(e.current?e.current[0]:void 0);if(!t)return;let a=v.getTreeNode(e);if(a){var l;return a.nodeToRestore=(l=o.current)!==null&&l!==void 0?l:void 0,()=>{let i=v.getTreeNode(e);if(!i)return;let p=i.nodeToRestore;if(t&&p&&(r.activeElement&&g(r.activeElement,e)||r.activeElement===r.body&&D(e))){let u=v.clone();requestAnimationFrame(()=>{if(r.activeElement===r.body){let d=u.getTreeNode(e);for(;d;){if(d.nodeToRestore&&d.nodeToRestore.isConnected){I(d.nodeToRestore);return}d=d.parent}for(d=u.getTreeNode(e);d;){if(d.scopeRef&&d.scopeRef.current&&v.getTreeNode(d.scopeRef)){let f=V(d.scopeRef.current,!0);I(f);return}d=d.parent}}})}}}},[e,t])}function I(e){e.dispatchEvent(new CustomEvent(_,{bubbles:!0,cancelable:!0}))&&T(e)}function y(e,t,n){let o=t!=null&&t.tabbable?Y:J,r=h(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(a){var l;return!(t==null||(l=t.from)===null||l===void 0)&&l.contains(a)?NodeFilter.FILTER_REJECT:a.matches(o)&&O(a)&&(!n||m(a,n))&&(!(t!=null&&t.accept)||t.accept(a))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t!=null&&t.from&&(r.currentNode=t.from),r}class k{get size(){return this.fastMap.size}getTreeNode(t){return this.fastMap.get(t)}addTreeNode(t,n,o){let r=this.fastMap.get(n??null);if(!r)return;let a=new M({scopeRef:t});r.addChild(a),a.parent=r,this.fastMap.set(t,a),o&&(a.nodeToRestore=o)}addNode(t){this.fastMap.set(t.scopeRef,t)}removeTreeNode(t){if(t===null)return;let n=this.fastMap.get(t);if(!n)return;let o=n.parent;for(let a of this.traverse())a!==n&&n.nodeToRestore&&a.nodeToRestore&&n.scopeRef&&n.scopeRef.current&&m(a.nodeToRestore,n.scopeRef.current)&&(a.nodeToRestore=n.nodeToRestore);let r=n.children;o&&(o.removeChild(n),r.size>0&&r.forEach(a=>o&&o.addChild(a))),this.fastMap.delete(n.scopeRef)}*traverse(t=this.root){if(t.scopeRef!=null&&(yield t),t.children.size>0)for(let n of t.children)yield*this.traverse(n)}clone(){var t;let n=new k;var o;for(let r of this.traverse())n.addTreeNode(r.scopeRef,(o=(t=r.parent)===null||t===void 0?void 0:t.scopeRef)!==null&&o!==void 0?o:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new M({scopeRef:null}),this.fastMap.set(null,this.root)}}class M{addChild(t){this.children.add(t),t.parent=this}removeChild(t){this.children.delete(t),t.parent=void 0}constructor(t){this.children=new Set,this.contain=!1,this.scopeRef=t.scopeRef}}let v=new k;export{ie as $,ae as a,y as b};
