import{r as i}from"./index-DtJulBIN.js";import{c as P,u as G}from"./index-BHYJtXto.js";import{u as A,P as O,S as H}from"./index-Dhc4yksV.js";import{c as K}from"./index-P-l_ls5c.js";import{D as $,P as U}from"./index-COuo08O9.js";import{h as V,R as W,u as Z,F as q}from"./Combination-Y-TUGr9y.js";import{u as z}from"./index-Bw4vj2Av.js";import{c as _,A as E,C as B,a as J,R as Q}from"./index-CTHx29zj.js";import{P as w}from"./index-D21DJKX5.js";import{j as p}from"./jsx-runtime-DBEcOq3S.js";var x="Popover",[j,Pe]=K(x,[_]),g=_(),[X,d]=j(x),F=e=>{const{__scopePopover:n,children:t,open:s,defaultOpen:o,onOpenChange:r,modal:a=!1}=e,c=g(n),u=i.useRef(null),[l,h]=i.useState(!1),[C=!1,f]=G({prop:s,defaultProp:o,onChange:r});return p.jsx(Q,{...c,children:p.jsx(X,{scope:n,contentId:z(),triggerRef:u,open:C,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(m=>!m),[f]),hasCustomAnchor:l,onCustomAnchorAdd:i.useCallback(()=>h(!0),[]),onCustomAnchorRemove:i.useCallback(()=>h(!1),[]),modal:a,children:t})})};F.displayName=x;var b="PopoverAnchor",N=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(b,t),r=g(t),{onCustomAnchorAdd:a,onCustomAnchorRemove:c}=o;return i.useEffect(()=>(a(),()=>c()),[a,c]),p.jsx(E,{...r,...s,ref:n})});N.displayName=b;var S="PopoverTrigger",y=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(S,t),r=g(t),a=A(n,o.triggerRef),c=p.jsx(O.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":L(o.open),...s,ref:a,onClick:P(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?c:p.jsx(E,{asChild:!0,...r,children:c})});y.displayName=S;var R="PopoverPortal",[Y,ee]=j(R,{forceMount:void 0}),D=e=>{const{__scopePopover:n,forceMount:t,children:s,container:o}=e,r=d(R,n);return p.jsx(Y,{scope:n,forceMount:t,children:p.jsx(w,{present:t||r.open,children:p.jsx(U,{asChild:!0,container:o,children:s})})})};D.displayName=R;var v="PopoverContent",M=i.forwardRef((e,n)=>{const t=ee(v,e.__scopePopover),{forceMount:s=t.forceMount,...o}=e,r=d(v,e.__scopePopover);return p.jsx(w,{present:s||r.open,children:r.modal?p.jsx(oe,{...o,ref:n}):p.jsx(re,{...o,ref:n})})});M.displayName=v;var oe=i.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),s=i.useRef(null),o=A(n,s),r=i.useRef(!1);return i.useEffect(()=>{const a=s.current;if(a)return V(a)},[]),p.jsx(W,{as:H,allowPinchZoom:!0,children:p.jsx(T,{...e,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,a=>{var c;a.preventDefault(),r.current||(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,u=c.button===0&&c.ctrlKey===!0,l=c.button===2||u;r.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:P(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})})}),re=i.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),s=i.useRef(!1),o=i.useRef(!1);return p.jsx(T,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var a,c;(a=e.onCloseAutoFocus)==null||a.call(e,r),r.defaultPrevented||(s.current||(c=t.triggerRef.current)==null||c.focus(),r.preventDefault()),s.current=!1,o.current=!1},onInteractOutside:r=>{var u,l;(u=e.onInteractOutside)==null||u.call(e,r),r.defaultPrevented||(s.current=!0,r.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const a=r.target;((l=t.triggerRef.current)==null?void 0:l.contains(a))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&o.current&&r.preventDefault()}})}),T=i.forwardRef((e,n)=>{const{__scopePopover:t,trapFocus:s,onOpenAutoFocus:o,onCloseAutoFocus:r,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:l,onInteractOutside:h,...C}=e,f=d(v,t),m=g(t);return Z(),p.jsx(q,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:o,onUnmountAutoFocus:r,children:p.jsx($,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:h,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),children:p.jsx(B,{"data-state":L(f.open),role:"dialog",id:f.contentId,...m,...C,ref:n,style:{...C.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),k="PopoverClose",I=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(k,t);return p.jsx(O.button,{type:"button",...s,ref:n,onClick:P(e.onClick,()=>o.onOpenChange(!1))})});I.displayName=k;var te="PopoverArrow",ne=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=g(t);return p.jsx(J,{...o,...s,ref:n})});ne.displayName=te;function L(e){return e?"open":"closed"}var ge=F,he=N,Ce=y,me=D,xe=M,Re=I;export{he as A,xe as C,me as P,ge as R,Ce as T,Re as a};
