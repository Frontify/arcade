import{j as n}from"./jsx-runtime-DBEcOq3S.js";import{r as a}from"./index-DtJulBIN.js";import{d as co,c as F}from"./fondue-icons324-Bw2AQYl8.js";import{B as _}from"./Button-CeW1VRZi.js";import{c as I,a as ve,u as pn}from"./index-BHYJtXto.js";import{u as K,P as O,c as mn,S as io,d as uo}from"./index-Dhc4yksV.js";import{c as fn}from"./index-P-l_ls5c.js";import{c as lo,u as po}from"./index-6kD61ZNA.js";import{D as mo,P as fo}from"./index-COuo08O9.js";import{h as wo,u as go,F as Io,R as ho}from"./Combination-CBds3eJs.js";import{u as re}from"./index-Bw4vj2Av.js";import{c as wn,A as Do,C as xo,a as So,R as gn}from"./index-CTHx29zj.js";import{P as de}from"./index-D21DJKX5.js";import{c as In,R as vo,I as Mo}from"./index-CyrAKxev.js";import{u as Co,s as Le}from"./usePreventDropdownOverflow-BbhSVJTt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./styleUtilities-T76WvCte.js";import"./focusStyle-IgMhxCMT.js";import"./index-BqTDQIm7.js";import"./index-CvTA8V3i.js";var Se=["Enter"," "],_o=["ArrowDown","PageUp","Home"],hn=["ArrowUp","PageDown","End"],Ro=[..._o,...hn],jo={ltr:[...Se,"ArrowRight"],rtl:[...Se,"ArrowLeft"]},bo={ltr:["ArrowLeft"],rtl:["ArrowRight"]},q="Menu",[L,To,yo]=lo(q),[y,Dn]=fn(q,[yo,wn,In]),V=wn(),xn=In(),[Sn,j]=y(q),[Eo,U]=y(q),vn=e=>{const{__scopeMenu:t,open:o=!1,children:r,dir:s,onOpenChange:c,modal:u=!0}=e,l=V(t),[f,g]=a.useState(null),m=a.useRef(!1),i=ve(c),w=po(s);return a.useEffect(()=>{const D=()=>{m.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},h=()=>m.current=!1;return document.addEventListener("keydown",D,{capture:!0}),()=>{document.removeEventListener("keydown",D,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),n.jsx(gn,{...l,children:n.jsx(Sn,{scope:t,open:o,onOpenChange:i,content:f,onContentChange:g,children:n.jsx(Eo,{scope:t,onClose:a.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:m,dir:w,modal:u,children:r})})})};vn.displayName=q;var No="MenuAnchor",Me=a.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e,s=V(o);return n.jsx(Do,{...s,...r,ref:t})});Me.displayName=No;var Ce="MenuPortal",[Po,Mn]=y(Ce,{forceMount:void 0}),Cn=e=>{const{__scopeMenu:t,forceMount:o,children:r,container:s}=e,c=j(Ce,t);return n.jsx(Po,{scope:t,forceMount:o,children:n.jsx(de,{present:o||c.open,children:n.jsx(fo,{asChild:!0,container:s,children:r})})})};Cn.displayName=Ce;var v="MenuContent",[Oo,_e]=y(v),_n=a.forwardRef((e,t)=>{const o=Mn(v,e.__scopeMenu),{forceMount:r=o.forceMount,...s}=e,c=j(v,e.__scopeMenu),u=U(v,e.__scopeMenu);return n.jsx(L.Provider,{scope:e.__scopeMenu,children:n.jsx(de,{present:r||c.open,children:n.jsx(L.Slot,{scope:e.__scopeMenu,children:u.modal?n.jsx(Ao,{...s,ref:t}):n.jsx(ko,{...s,ref:t})})})})}),Ao=a.forwardRef((e,t)=>{const o=j(v,e.__scopeMenu),r=a.useRef(null),s=K(t,r);return a.useEffect(()=>{const c=r.current;if(c)return wo(c)},[]),n.jsx(Re,{...e,ref:s,trapFocus:o.open,disableOutsidePointerEvents:o.open,disableOutsideScroll:!0,onFocusOutside:I(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>o.onOpenChange(!1)})}),ko=a.forwardRef((e,t)=>{const o=j(v,e.__scopeMenu);return n.jsx(Re,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>o.onOpenChange(!1)})}),Re=a.forwardRef((e,t)=>{const{__scopeMenu:o,loop:r=!1,trapFocus:s,onOpenAutoFocus:c,onCloseAutoFocus:u,disableOutsidePointerEvents:l,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:m,onFocusOutside:i,onInteractOutside:w,onDismiss:D,disableOutsideScroll:h,...b}=e,E=j(v,o),A=U(v,o),$=V(o),z=xn(o),Pe=To(o),[no,Oe]=a.useState(null),X=a.useRef(null),oo=K(t,X,E.onContentChange),Y=a.useRef(0),H=a.useRef(""),to=a.useRef(0),Ie=a.useRef(null),Ae=a.useRef("right"),he=a.useRef(0),ro=h?ho:a.Fragment,so=h?{as:io,allowPinchZoom:!0}:void 0,ao=p=>{var P,Fe;const S=H.current+p,M=Pe().filter(C=>!C.disabled),R=document.activeElement,De=(P=M.find(C=>C.ref.current===R))==null?void 0:P.textValue,xe=M.map(C=>C.textValue),ke=Yo(xe,S,De),k=(Fe=M.find(C=>C.textValue===ke))==null?void 0:Fe.ref.current;(function C(Ge){H.current=Ge,window.clearTimeout(Y.current),Ge!==""&&(Y.current=window.setTimeout(()=>C(""),1e3))})(S),k&&setTimeout(()=>k.focus())};a.useEffect(()=>()=>window.clearTimeout(Y.current),[]),go();const N=a.useCallback(p=>{var M,R;return Ae.current===((M=Ie.current)==null?void 0:M.side)&&Wo(p,(R=Ie.current)==null?void 0:R.area)},[]);return n.jsx(Oo,{scope:o,searchRef:H,onItemEnter:a.useCallback(p=>{N(p)&&p.preventDefault()},[N]),onItemLeave:a.useCallback(p=>{var S;N(p)||((S=X.current)==null||S.focus(),Oe(null))},[N]),onTriggerLeave:a.useCallback(p=>{N(p)&&p.preventDefault()},[N]),pointerGraceTimerRef:to,onPointerGraceIntentChange:a.useCallback(p=>{Ie.current=p},[]),children:n.jsx(ro,{...so,children:n.jsx(Io,{asChild:!0,trapped:s,onMountAutoFocus:I(c,p=>{var S;p.preventDefault(),(S=X.current)==null||S.focus({preventScroll:!0})}),onUnmountAutoFocus:u,children:n.jsx(mo,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:g,onPointerDownOutside:m,onFocusOutside:i,onInteractOutside:w,onDismiss:D,children:n.jsx(vo,{asChild:!0,...z,dir:A.dir,orientation:"vertical",loop:r,currentTabStopId:no,onCurrentTabStopIdChange:Oe,onEntryFocus:I(f,p=>{A.isUsingKeyboardRef.current||p.preventDefault()}),preventScrollOnEntryFocus:!0,children:n.jsx(xo,{role:"menu","aria-orientation":"vertical","data-state":qn(E.open),"data-radix-menu-content":"",dir:A.dir,...$,...b,ref:oo,style:{outline:"none",...b.style},onKeyDown:I(b.onKeyDown,p=>{const M=p.target.closest("[data-radix-menu-content]")===p.currentTarget,R=p.ctrlKey||p.altKey||p.metaKey,De=p.key.length===1;M&&(p.key==="Tab"&&p.preventDefault(),!R&&De&&ao(p.key));const xe=X.current;if(p.target!==xe||!Ro.includes(p.key))return;p.preventDefault();const k=Pe().filter(P=>!P.disabled).map(P=>P.ref.current);hn.includes(p.key)&&k.reverse(),zo(k)}),onBlur:I(e.onBlur,p=>{p.currentTarget.contains(p.target)||(window.clearTimeout(Y.current),H.current="")}),onPointerMove:I(e.onPointerMove,B(p=>{const S=p.target,M=he.current!==p.clientX;if(p.currentTarget.contains(S)&&M){const R=p.clientX>he.current?"right":"left";Ae.current=R,he.current=p.clientX}}))})})})})})})});_n.displayName=v;var Fo="MenuGroup",je=a.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e;return n.jsx(O.div,{role:"group",...r,ref:t})});je.displayName=Fo;var Go="MenuLabel",Rn=a.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e;return n.jsx(O.div,{...r,ref:t})});Rn.displayName=Go;var se="MenuItem",Be="menu.itemSelect",ce=a.forwardRef((e,t)=>{const{disabled:o=!1,onSelect:r,...s}=e,c=a.useRef(null),u=U(se,e.__scopeMenu),l=_e(se,e.__scopeMenu),f=K(t,c),g=a.useRef(!1),m=()=>{const i=c.current;if(!o&&i){const w=new CustomEvent(Be,{bubbles:!0,cancelable:!0});i.addEventListener(Be,D=>r==null?void 0:r(D),{once:!0}),uo(i,w),w.defaultPrevented?g.current=!1:u.onClose()}};return n.jsx(jn,{...s,ref:f,disabled:o,onClick:I(e.onClick,m),onPointerDown:i=>{var w;(w=e.onPointerDown)==null||w.call(e,i),g.current=!0},onPointerUp:I(e.onPointerUp,i=>{var w;g.current||(w=i.currentTarget)==null||w.click()}),onKeyDown:I(e.onKeyDown,i=>{const w=l.searchRef.current!=="";o||w&&i.key===" "||Se.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});ce.displayName=se;var jn=a.forwardRef((e,t)=>{const{__scopeMenu:o,disabled:r=!1,textValue:s,...c}=e,u=_e(se,o),l=xn(o),f=a.useRef(null),g=K(t,f),[m,i]=a.useState(!1),[w,D]=a.useState("");return a.useEffect(()=>{const h=f.current;h&&D((h.textContent??"").trim())},[c.children]),n.jsx(L.ItemSlot,{scope:o,disabled:r,textValue:s??w,children:n.jsx(Mo,{asChild:!0,...l,focusable:!r,children:n.jsx(O.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...c,ref:g,onPointerMove:I(e.onPointerMove,B(h=>{r?u.onItemLeave(h):(u.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:I(e.onPointerLeave,B(h=>u.onItemLeave(h))),onFocus:I(e.onFocus,()=>i(!0)),onBlur:I(e.onBlur,()=>i(!1))})})})}),Lo="MenuCheckboxItem",bn=a.forwardRef((e,t)=>{const{checked:o=!1,onCheckedChange:r,...s}=e;return n.jsx(Pn,{scope:e.__scopeMenu,checked:o,children:n.jsx(ce,{role:"menuitemcheckbox","aria-checked":ae(o)?"mixed":o,...s,ref:t,"data-state":ye(o),onSelect:I(s.onSelect,()=>r==null?void 0:r(ae(o)?!0:!o),{checkForDefaultPrevented:!1})})})});bn.displayName=Lo;var Tn="MenuRadioGroup",[Bo,Ko]=y(Tn,{value:void 0,onValueChange:()=>{}}),yn=a.forwardRef((e,t)=>{const{value:o,onValueChange:r,...s}=e,c=ve(r);return n.jsx(Bo,{scope:e.__scopeMenu,value:o,onValueChange:c,children:n.jsx(je,{...s,ref:t})})});yn.displayName=Tn;var En="MenuRadioItem",Nn=a.forwardRef((e,t)=>{const{value:o,...r}=e,s=Ko(En,e.__scopeMenu),c=o===s.value;return n.jsx(Pn,{scope:e.__scopeMenu,checked:c,children:n.jsx(ce,{role:"menuitemradio","aria-checked":c,...r,ref:t,"data-state":ye(c),onSelect:I(r.onSelect,()=>{var u;return(u=s.onValueChange)==null?void 0:u.call(s,o)},{checkForDefaultPrevented:!1})})})});Nn.displayName=En;var be="MenuItemIndicator",[Pn,qo]=y(be,{checked:!1}),On=a.forwardRef((e,t)=>{const{__scopeMenu:o,forceMount:r,...s}=e,c=qo(be,o);return n.jsx(de,{present:r||ae(c.checked)||c.checked===!0,children:n.jsx(O.span,{...s,ref:t,"data-state":ye(c.checked)})})});On.displayName=be;var Vo="MenuSeparator",An=a.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e;return n.jsx(O.div,{role:"separator","aria-orientation":"horizontal",...r,ref:t})});An.displayName=Vo;var Uo="MenuArrow",kn=a.forwardRef((e,t)=>{const{__scopeMenu:o,...r}=e,s=V(o);return n.jsx(So,{...s,...r,ref:t})});kn.displayName=Uo;var Te="MenuSub",[$o,Fn]=y(Te),Gn=e=>{const{__scopeMenu:t,children:o,open:r=!1,onOpenChange:s}=e,c=j(Te,t),u=V(t),[l,f]=a.useState(null),[g,m]=a.useState(null),i=ve(s);return a.useEffect(()=>(c.open===!1&&i(!1),()=>i(!1)),[c.open,i]),n.jsx(gn,{...u,children:n.jsx(Sn,{scope:t,open:r,onOpenChange:i,content:g,onContentChange:m,children:n.jsx($o,{scope:t,contentId:re(),triggerId:re(),trigger:l,onTriggerChange:f,children:o})})})};Gn.displayName=Te;var G="MenuSubTrigger",Ln=a.forwardRef((e,t)=>{const o=j(G,e.__scopeMenu),r=U(G,e.__scopeMenu),s=Fn(G,e.__scopeMenu),c=_e(G,e.__scopeMenu),u=a.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:f}=c,g={__scopeMenu:e.__scopeMenu},m=a.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return a.useEffect(()=>m,[m]),a.useEffect(()=>{const i=l.current;return()=>{window.clearTimeout(i),f(null)}},[l,f]),n.jsx(Me,{asChild:!0,...g,children:n.jsx(jn,{id:s.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":s.contentId,"data-state":qn(o.open),...e,ref:mn(t,s.onTriggerChange),onClick:i=>{var w;(w=e.onClick)==null||w.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),o.open||o.onOpenChange(!0))},onPointerMove:I(e.onPointerMove,B(i=>{c.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!o.open&&!u.current&&(c.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{o.onOpenChange(!0),m()},100))})),onPointerLeave:I(e.onPointerLeave,B(i=>{var D,h;m();const w=(D=o.content)==null?void 0:D.getBoundingClientRect();if(w){const b=(h=o.content)==null?void 0:h.dataset.side,E=b==="right",A=E?-5:5,$=w[E?"left":"right"],z=w[E?"right":"left"];c.onPointerGraceIntentChange({area:[{x:i.clientX+A,y:i.clientY},{x:$,y:w.top},{x:z,y:w.top},{x:z,y:w.bottom},{x:$,y:w.bottom}],side:b}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(i),i.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:I(e.onKeyDown,i=>{var D;const w=c.searchRef.current!=="";e.disabled||w&&i.key===" "||jo[r.dir].includes(i.key)&&(o.onOpenChange(!0),(D=o.content)==null||D.focus(),i.preventDefault())})})})});Ln.displayName=G;var Bn="MenuSubContent",Kn=a.forwardRef((e,t)=>{const o=Mn(v,e.__scopeMenu),{forceMount:r=o.forceMount,...s}=e,c=j(v,e.__scopeMenu),u=U(v,e.__scopeMenu),l=Fn(Bn,e.__scopeMenu),f=a.useRef(null),g=K(t,f);return n.jsx(L.Provider,{scope:e.__scopeMenu,children:n.jsx(de,{present:r||c.open,children:n.jsx(L.Slot,{scope:e.__scopeMenu,children:n.jsx(Re,{id:l.contentId,"aria-labelledby":l.triggerId,...s,ref:g,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:m=>{var i;u.isUsingKeyboardRef.current&&((i=f.current)==null||i.focus()),m.preventDefault()},onCloseAutoFocus:m=>m.preventDefault(),onFocusOutside:I(e.onFocusOutside,m=>{m.target!==l.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:I(e.onEscapeKeyDown,m=>{u.onClose(),m.preventDefault()}),onKeyDown:I(e.onKeyDown,m=>{var D;const i=m.currentTarget.contains(m.target),w=bo[u.dir].includes(m.key);i&&w&&(c.onOpenChange(!1),(D=l.trigger)==null||D.focus(),m.preventDefault())})})})})})});Kn.displayName=Bn;function qn(e){return e?"open":"closed"}function ae(e){return e==="indeterminate"}function ye(e){return ae(e)?"indeterminate":e?"checked":"unchecked"}function zo(e){const t=document.activeElement;for(const o of e)if(o===t||(o.focus(),document.activeElement!==t))return}function Xo(e,t){return e.map((o,r)=>e[(t+r)%e.length])}function Yo(e,t,o){const s=t.length>1&&Array.from(t).every(g=>g===t[0])?t[0]:t,c=o?e.indexOf(o):-1;let u=Xo(e,Math.max(c,0));s.length===1&&(u=u.filter(g=>g!==o));const f=u.find(g=>g.toLowerCase().startsWith(s.toLowerCase()));return f!==o?f:void 0}function Ho(e,t){const{x:o,y:r}=e;let s=!1;for(let c=0,u=t.length-1;c<t.length;u=c++){const l=t[c].x,f=t[c].y,g=t[u].x,m=t[u].y;f>r!=m>r&&o<(g-l)*(r-f)/(m-f)+l&&(s=!s)}return s}function Wo(e,t){if(!t)return!1;const o={x:e.clientX,y:e.clientY};return Ho(o,t)}function B(e){return t=>t.pointerType==="mouse"?e(t):void 0}var Zo=vn,Jo=Me,Qo=Cn,et=_n,nt=je,ot=Rn,tt=ce,rt=bn,st=yn,at=Nn,dt=On,ct=An,it=kn,ut=Gn,lt=Ln,pt=Kn,Ee="DropdownMenu",[mt,Mr]=fn(Ee,[Dn]),x=Dn(),[ft,Vn]=mt(Ee),Un=e=>{const{__scopeDropdownMenu:t,children:o,dir:r,open:s,defaultOpen:c,onOpenChange:u,modal:l=!0}=e,f=x(t),g=a.useRef(null),[m=!1,i]=pn({prop:s,defaultProp:c,onChange:u});return n.jsx(ft,{scope:t,triggerId:re(),triggerRef:g,contentId:re(),open:m,onOpenChange:i,onOpenToggle:a.useCallback(()=>i(w=>!w),[i]),modal:l,children:n.jsx(Zo,{...f,open:m,onOpenChange:i,dir:r,modal:l,children:o})})};Un.displayName=Ee;var $n="DropdownMenuTrigger",zn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,disabled:r=!1,...s}=e,c=Vn($n,o),u=x(o);return n.jsx(Jo,{asChild:!0,...u,children:n.jsx(O.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...s,ref:mn(t,c.triggerRef),onPointerDown:I(e.onPointerDown,l=>{!r&&l.button===0&&l.ctrlKey===!1&&(c.onOpenToggle(),c.open||l.preventDefault())}),onKeyDown:I(e.onKeyDown,l=>{r||(["Enter"," "].includes(l.key)&&c.onOpenToggle(),l.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});zn.displayName=$n;var wt="DropdownMenuPortal",Xn=e=>{const{__scopeDropdownMenu:t,...o}=e,r=x(t);return n.jsx(Qo,{...r,...o})};Xn.displayName=wt;var Yn="DropdownMenuContent",Hn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=Vn(Yn,o),c=x(o),u=a.useRef(!1);return n.jsx(et,{id:s.contentId,"aria-labelledby":s.triggerId,...c,...r,ref:t,onCloseAutoFocus:I(e.onCloseAutoFocus,l=>{var f;u.current||(f=s.triggerRef.current)==null||f.focus(),u.current=!1,l.preventDefault()}),onInteractOutside:I(e.onInteractOutside,l=>{const f=l.detail.originalEvent,g=f.button===0&&f.ctrlKey===!0,m=f.button===2||g;(!s.modal||m)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Hn.displayName=Yn;var gt="DropdownMenuGroup",Wn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(nt,{...s,...r,ref:t})});Wn.displayName=gt;var It="DropdownMenuLabel",ht=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(ot,{...s,...r,ref:t})});ht.displayName=It;var Dt="DropdownMenuItem",Zn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(tt,{...s,...r,ref:t})});Zn.displayName=Dt;var xt="DropdownMenuCheckboxItem",St=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(rt,{...s,...r,ref:t})});St.displayName=xt;var vt="DropdownMenuRadioGroup",Mt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(st,{...s,...r,ref:t})});Mt.displayName=vt;var Ct="DropdownMenuRadioItem",_t=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(at,{...s,...r,ref:t})});_t.displayName=Ct;var Rt="DropdownMenuItemIndicator",jt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(dt,{...s,...r,ref:t})});jt.displayName=Rt;var bt="DropdownMenuSeparator",Tt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(ct,{...s,...r,ref:t})});Tt.displayName=bt;var yt="DropdownMenuArrow",Et=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(it,{...s,...r,ref:t})});Et.displayName=yt;var Nt=e=>{const{__scopeDropdownMenu:t,children:o,open:r,onOpenChange:s,defaultOpen:c}=e,u=x(t),[l=!1,f]=pn({prop:r,defaultProp:c,onChange:s});return n.jsx(ut,{...u,open:l,onOpenChange:f,children:o})},Pt="DropdownMenuSubTrigger",Jn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(lt,{...s,...r,ref:t})});Jn.displayName=Pt;var Ot="DropdownMenuSubContent",Qn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:o,...r}=e,s=x(o);return n.jsx(pt,{...s,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Qn.displayName=Ot;var At=Un,kt=zn,eo=Xn,Ft=Hn,Gt=Wn,Lt=Zn,Bt=Nt,Kt=Jn,qt=Qn;const Vt="_content_t329w_4",Ut="_subContent_t329w_5",$t="_item_t329w_16",zt="_subTrigger_t329w_17",Xt="_subMenuIndicator_t329w_53",Yt="_group_t329w_59",Ht="_slot_t329w_66",T={content:Vt,subContent:Ut,item:$t,subTrigger:zt,subMenuIndicator:Xt,group:Yt,slot:Ht},ie=({children:e,open:t,onOpenChange:o,"data-test-id":r="fondue-dropdown"})=>n.jsx(At,{open:t,onOpenChange:o,"data-test-id":r,children:e});ie.displayName="Dropdown.Root";const ue=({children:e,"data-test-id":t="fondue-dropdown-trigger"},o)=>n.jsx(kt,{asChild:!0,"data-test-id":t,ref:o,children:e});ue.displayName="Dropdown.Trigger";const le=({onOpen:e,onClose:t,children:o,"data-test-id":r="fondue-dropdown-content"},s)=>{const c=a.useRef(null),u=a.useRef(!1),{setMaxHeight:l}=Co(c);return n.jsx(eo,{children:n.jsx(Ft,{align:"start",collisionPadding:8,sideOffset:8,className:T.content,"data-test-id":r,ref:c,onCloseAutoFocus:()=>{Le(c,s),t&&t(),u.current=!1},onFocus:()=>{u.current||(l(),Le(c,s),e&&e(),u.current=!0)},children:o})})};le.displayName="Dropdown.Content";const pe=({children:e,"data-test-id":t="fondue-dropdown-group"},o)=>n.jsx(Gt,{className:T.group,"data-test-id":t,ref:o,children:e});pe.displayName="Dropdown.Group";const me=({children:e,"data-test-id":t="fondue-dropdown-submenu"})=>n.jsx(Bt,{"data-test-id":t,children:e});me.displayName="Dropdown.SubMenu";const fe=({children:e,"data-test-id":t="fondue-dropdown-subtrigger"},o)=>n.jsxs(Kt,{className:T.subTrigger,"data-test-id":t,ref:o,children:[e,n.jsx(co,{className:T.subMenuIndicator,size:16})]});fe.displayName="Dropdown.SubTrigger";const we=({children:e,"data-test-id":t="fondue-dropdown-subcontent"},o)=>n.jsx(eo,{children:n.jsx(qt,{className:T.subContent,"data-test-id":t,ref:o,children:e})});we.displayName="Dropdown.SubContent";const ge=({children:e,disabled:t,textValue:o,onSelect:r,"data-test-id":s="fondue-dropdown-subtrigger",...c},u)=>n.jsx(Lt,{onSelect:r,className:T.item,textValue:o,"data-test-id":s,ref:u,disabled:t,...c,children:e});ge.displayName="Dropdown.Item";const Ne=({children:e,name:t,"data-test-id":o="fondue-dropdown-slot"},r)=>n.jsx("div",{"data-name":t,className:T.slot,"data-test-id":o,ref:r,children:e});Ne.displayName="Dropdown.Slot";const Wt=a.forwardRef(ue),Zt=a.forwardRef(le),Jt=a.forwardRef(pe),Qt=a.forwardRef(fe),er=a.forwardRef(we),nr=a.forwardRef(ge),or=a.forwardRef(Ne),d={Root:ie,Trigger:Wt,Content:Zt,Group:Jt,SubMenu:me,SubTrigger:Qt,SubContent:er,Item:nr,Slot:or};ie.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Root",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"Controls the open state of the dropdown."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback that is called when the open state of the dropdown changes."},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown'",computed:!1}}}};ue.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Trigger",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-trigger'",computed:!1}}}};le.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Content",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-content'",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};pe.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Group",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-group'",computed:!1}}}};me.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-submenu'",computed:!1}}}};fe.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};we.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subcontent'",computed:!1}}}};ge.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Item",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the item."},textValue:{required:!1,tsType:{name:"string"},description:"The text value of the item that is passed to the onSelect callback."},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"Callback that is called when the item is selected."},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};Ne.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Slot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-slot'",computed:!1}}}};const Cr={component:ie,subcomponents:{"Dropdown.Trigger":ue,"Dropdown.Content":le,"Dropdown.Item":ge,"Dropdown.Group":pe,"Dropdown.SubMenu":me,"Dropdown.SubTrigger":fe,"Dropdown.SubContent":we},tags:["autodocs"],parameters:{status:{type:"in_progress"}},args:{}},W={render:({...e})=>n.jsxs(d.Root,{...e,children:[n.jsx(d.Trigger,{children:n.jsx(_,{children:"Trigger"})}),n.jsxs(d.Content,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 1"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 3"})]})]})},Z={render:({...e})=>n.jsxs(d.Root,{...e,children:[n.jsx(d.Trigger,{children:n.jsx(_,{children:"Trigger"})}),n.jsxs(d.Content,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 1"}),n.jsx(d.Item,{onSelect:()=>{},disabled:!0,children:"Item 2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 3"})]})]})},J={render:({...e})=>n.jsxs(d.Root,{...e,children:[n.jsx(d.Trigger,{children:n.jsx(_,{children:"Trigger"})}),n.jsxs(d.Content,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 1"}),n.jsxs(d.Group,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 3"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 4"})]}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 5"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 6"})]})]})},Q={render:({...e})=>n.jsxs(d.Root,{...e,children:[n.jsx(d.Trigger,{children:n.jsx(_,{children:"Trigger"})}),n.jsxs(d.Content,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 1"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 3"}),n.jsxs(d.SubMenu,{children:[n.jsx(d.SubTrigger,{children:"Item 4"}),n.jsxs(d.SubContent,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 4.1"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 4.2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 4.3"})]})]}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 5"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 6"})]})]})},ee={render:({...e})=>n.jsxs(d.Root,{...e,children:[n.jsx(d.Trigger,{children:n.jsx(_,{children:"Trigger"})}),n.jsxs(d.Content,{children:[n.jsxs(d.Item,{onSelect:()=>{},children:[n.jsx(d.Slot,{name:"left",children:n.jsx(F,{size:16})}),"Left decorator"]}),n.jsxs(d.Item,{onSelect:()=>{},children:[n.jsx(d.Slot,{name:"right",children:n.jsx(F,{size:16})}),"Right decorator"]}),n.jsxs(d.Item,{onSelect:()=>{},children:[n.jsx(d.Slot,{children:n.jsx(F,{size:16})}),"Implicit placement left"]}),n.jsxs(d.Item,{onSelect:()=>{},children:[n.jsx(d.Slot,{children:n.jsx(F,{size:16})}),n.jsx(d.Slot,{children:n.jsx(F,{size:16})}),"Implicit placement both"]}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 5"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 6"})]})]})},ne={render:({...e})=>n.jsxs(d.Root,{...e,children:[n.jsx(d.Trigger,{children:n.jsx(_,{children:"Trigger"})}),n.jsxs(d.Content,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 1"}),n.jsx(d.Item,{onSelect:()=>{},children:n.jsx("div",{className:"tw-bg-red-50",children:"test bla"})}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 3"})]})]})},oe={decorators:[e=>n.jsx("div",{className:"tw-flex tw-flex-col tw-gap-2 tw-w-fit",children:n.jsx(e,{})})],render:({...e})=>{const[t,o]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(_,{onPress:()=>o(!t),children:"External Toggle Dropdown"}),n.jsxs(d.Root,{...e,open:t,onOpenChange:o,children:[n.jsx(d.Trigger,{children:n.jsx(_,{variant:"loud",children:"Trigger"})}),n.jsxs(d.Content,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 1"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 3"})]})]})]})}},te={decorators:[e=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:n.jsx(e,{})})],parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"300px",height:"272px"}}},defaultViewport:"mobile"}},render:({...e})=>n.jsx(n.Fragment,{children:Array.from({length:4}).map((t,o)=>a.createElement(d.Root,{...e,key:o},n.jsx(d.Trigger,{children:n.jsx(_,{variant:"loud",children:"Trigger 1"})}),n.jsxs(d.Content,{children:[n.jsx(d.Item,{onSelect:()=>{},children:"Item 1"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 2"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 3"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 4"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 5"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 6"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 7"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 8"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 9"}),n.jsx(d.Item,{onSelect:()=>{},children:"Item 10"})]})))})};var Ke,qe,Ve;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Dropdown.Root {...args}>
            <Dropdown.Trigger>
                <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
            </Dropdown.Content>
        </Dropdown.Root>
}`,...(Ve=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var Ue,$e,ze;Z.parameters={...Z.parameters,docs:{...(Ue=Z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Dropdown.Root {...args}>
            <Dropdown.Trigger>
                <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}} disabled>
                    Item 2
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
            </Dropdown.Content>
        </Dropdown.Root>
}`,...(ze=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Xe,Ye,He;J.parameters={...J.parameters,docs:{...(Xe=J.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Dropdown.Root {...args}>
            <Dropdown.Trigger>
                <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
                <Dropdown.Group>
                    <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
                    <Dropdown.Item onSelect={() => {}}>Item 4</Dropdown.Item>
                </Dropdown.Group>
                <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
            </Dropdown.Content>
        </Dropdown.Root>
}`,...(He=(Ye=J.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var We,Ze,Je;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Dropdown.Root {...args}>
            <Dropdown.Trigger>
                <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
                <Dropdown.SubMenu>
                    <Dropdown.SubTrigger>Item 4</Dropdown.SubTrigger>
                    <Dropdown.SubContent>
                        <Dropdown.Item onSelect={() => {}}>Item 4.1</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 4.2</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 4.3</Dropdown.Item>
                    </Dropdown.SubContent>
                </Dropdown.SubMenu>
                <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
            </Dropdown.Content>
        </Dropdown.Root>
}`,...(Je=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Qe,en,nn;ee.parameters={...ee.parameters,docs:{...(Qe=ee.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Dropdown.Root {...args}>
            <Dropdown.Trigger>
                <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Item onSelect={() => {}}>
                    <Dropdown.Slot name="left">
                        <IconIcon size={16} />
                    </Dropdown.Slot>
                    Left decorator
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>
                    <Dropdown.Slot name="right">
                        <IconIcon size={16} />
                    </Dropdown.Slot>
                    Right decorator
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>
                    <Dropdown.Slot>
                        <IconIcon size={16} />
                    </Dropdown.Slot>
                    Implicit placement left
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>
                    <Dropdown.Slot>
                        <IconIcon size={16} />
                    </Dropdown.Slot>
                    <Dropdown.Slot>
                        <IconIcon size={16} />
                    </Dropdown.Slot>
                    Implicit placement both
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
            </Dropdown.Content>
        </Dropdown.Root>
}`,...(nn=(en=ee.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var on,tn,rn;ne.parameters={...ne.parameters,docs:{...(on=ne.parameters)==null?void 0:on.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <Dropdown.Root {...args}>
            <Dropdown.Trigger>
                <Button>Trigger</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>
                    <div className="tw-bg-red-50">test bla</div>
                </Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
                <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
            </Dropdown.Content>
        </Dropdown.Root>
}`,...(rn=(tn=ne.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var sn,an,dn;oe.parameters={...oe.parameters,docs:{...(sn=oe.parameters)==null?void 0:sn.docs,source:{originalSource:`{
  decorators: [Story => <div className="tw-flex tw-flex-col tw-gap-2 tw-w-fit">
                <Story />
            </div>],
  render: ({
    ...args
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
                <Button onPress={() => setIsOpen(!isOpen)}>External Toggle Dropdown</Button>
                <Dropdown.Root {...args} open={isOpen} onOpenChange={setIsOpen}>
                    <Dropdown.Trigger>
                        <Button variant="loud">Trigger</Button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown.Root>
            </>;
  }
}`,...(dn=(an=oe.parameters)==null?void 0:an.docs)==null?void 0:dn.source}}};var cn,un,ln;te.parameters={...te.parameters,docs:{...(cn=te.parameters)==null?void 0:cn.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
                <Story />
            </div>],
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '300px',
            height: '272px'
          }
        }
      },
      defaultViewport: 'mobile'
    }
  },
  render: ({
    ...args
  }) => <>
            {Array.from({
      length: 4
    }).map((_, index) => <Dropdown.Root {...args} key={index}>
                    <Dropdown.Trigger>
                        <Button variant="loud">Trigger 1</Button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 3</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 4</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 5</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 6</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 7</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 8</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 9</Dropdown.Item>
                        <Dropdown.Item onSelect={() => {}}>Item 10</Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown.Root>)}
        </>
}`,...(ln=(un=te.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};const _r=["Default","DisabledItems","ItemGroups","SubMenus","Decorator","CustomItem","ControlledComponent","Overflow"];export{oe as ControlledComponent,ne as CustomItem,ee as Decorator,W as Default,Z as DisabledItems,J as ItemGroups,te as Overflow,Q as SubMenus,_r as __namedExportsOrder,Cr as default};
