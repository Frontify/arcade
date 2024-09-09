import{$ as E}from"./FocusScope-DegwnO3I.js";import{r as b}from"./index-BwDkhjyp.js";import{c as D,a as O}from"./useFocusRing-Vzyl7-Lk.js";import{a as v}from"./SSRProvider-CYXx33DY.js";import{$ as P}from"./useControlledState-C0C-dzuH.js";function w(o){let{ref:t,onInteractOutside:n,isDisabled:p,onInteractOutsideStart:l}=o,m=b.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),a=v(r=>{n&&$(r,t)&&(l&&l(r),m.current.isPointerDown=!0)}),i=v(r=>{n&&n(r)});b.useEffect(()=>{let r=m.current;if(p)return;const g=t.current,s=D(g);if(typeof PointerEvent<"u"){let f=c=>{r.isPointerDown&&$(c,t)&&i(c),r.isPointerDown=!1};return s.addEventListener("pointerdown",a,!0),s.addEventListener("pointerup",f,!0),()=>{s.removeEventListener("pointerdown",a,!0),s.removeEventListener("pointerup",f,!0)}}else{let f=d=>{r.ignoreEmulatedMouseEvents?r.ignoreEmulatedMouseEvents=!1:r.isPointerDown&&$(d,t)&&i(d),r.isPointerDown=!1},c=d=>{r.ignoreEmulatedMouseEvents=!0,r.isPointerDown&&$(d,t)&&i(d),r.isPointerDown=!1};return s.addEventListener("mousedown",a,!0),s.addEventListener("mouseup",f,!0),s.addEventListener("touchstart",a,!0),s.addEventListener("touchend",c,!0),()=>{s.removeEventListener("mousedown",a,!0),s.removeEventListener("mouseup",f,!0),s.removeEventListener("touchstart",a,!0),s.removeEventListener("touchend",c,!0)}}},[t,p,a,i])}function $(o,t){if(o.button>0)return!1;if(o.target){const n=o.target.ownerDocument;if(!n||!n.documentElement.contains(o.target)||o.target.closest("[data-react-aria-top-layer]"))return!1}return t.current&&!t.current.contains(o.target)}const u=[];function I(o,t){let{onClose:n,shouldCloseOnBlur:p,isOpen:l,isDismissable:m=!1,isKeyboardDismissDisabled:a=!1,shouldCloseOnInteractOutside:i}=o;b.useEffect(()=>(l&&u.push(t),()=>{let e=u.indexOf(t);e>=0&&u.splice(e,1)}),[l,t]);let r=()=>{u[u.length-1]===t&&n&&n()},g=e=>{(!i||i(e.target))&&u[u.length-1]===t&&(e.stopPropagation(),e.preventDefault())},s=e=>{(!i||i(e.target))&&(u[u.length-1]===t&&(e.stopPropagation(),e.preventDefault()),r())},f=e=>{e.key==="Escape"&&!a&&!e.nativeEvent.isComposing&&(e.stopPropagation(),e.preventDefault(),r())};w({ref:t,onInteractOutside:m&&l?s:null,onInteractOutsideStart:g});let{focusWithinProps:c}=O({isDisabled:!p,onBlurWithin:e=>{!e.relatedTarget||E(e.relatedTarget)||(!i||i(e.relatedTarget))&&n()}}),d=e=>{e.target===e.currentTarget&&e.preventDefault()};return{overlayProps:{onKeyDown:f,...c},underlayProps:{onPointerDown:d}}}function M(o){let[t,n]=P(o.isOpen,o.defaultOpen||!1,o.onOpenChange);const p=b.useCallback(()=>{n(!0)},[n]),l=b.useCallback(()=>{n(!1)},[n]),m=b.useCallback(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:p,close:l,toggle:m}}export{M as $,I as a};
