import{j as s}from"./jsx-runtime-BSxFkHFN.js";import{r as a}from"./index-i66itsuO.js";import{g as Tn}from"./fondue-icons348-COpsOkcC.js";import{c as w,u as oe}from"./index-BNYVQE02.js";import{u as G,P as N,c as Ee,S as Pe,d as In}from"./index-C7Xses_O.js";import{c as Ne}from"./index-BwxsjnLo.js";import{u as je}from"./index-P4w4wmP2.js";import{c as En}from"./index-Cao5XaZ_.js";import{u as Pn}from"./index-DLXHbKnz.js";import{c as Ae,A as Nn,D as jn,C as An,a as On,R as Oe,P as kn}from"./index-C9TK974O.js";import{h as Fn,u as Gn,F as Ln,R as Kn}from"./Combination-BQ0A-8sA.js";import{u as Y}from"./index-CIFYclHn.js";import{P as z}from"./index-cPkRJAzz.js";import{c as ke,R as qn,I as Vn}from"./index--HnUjAPS.js";import{u as Un,T as Bn}from"./ThemeProvider-Dxt3MuZn.js";var te=["Enter"," "],$n=["ArrowDown","PageUp","Home"],Fe=["ArrowUp","PageDown","End"],Xn=[...$n,...Fe],Yn={ltr:[...te,"ArrowRight"],rtl:[...te,"ArrowLeft"]},Wn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},L="Menu",[k,Hn,zn]=En(L),[T,Ge]=Ne(L,[zn,Ae,ke]),K=Ae(),Le=ke(),[Ke,y]=T(L),[Zn,q]=T(L),qe=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:r,onOpenChange:d,modal:u=!0}=e,c=K(t),[f,g]=a.useState(null),p=a.useRef(!1),i=oe(d),m=Pn(r);return a.useEffect(()=>{const v=()=>{p.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},h=()=>p.current=!1;return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),s.jsx(Oe,{...c,children:s.jsx(Ke,{scope:t,open:n,onOpenChange:i,content:f,onContentChange:g,children:s.jsx(Zn,{scope:t,onClose:a.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:p,dir:m,modal:u,children:o})})})};qe.displayName=L;var Jn="MenuAnchor",re=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=K(n);return s.jsx(Nn,{...r,...o,ref:t})});re.displayName=Jn;var ae="MenuPortal",[Qn,Ve]=T(ae,{forceMount:void 0}),Ue=e=>{const{__scopeMenu:t,forceMount:n,children:o,container:r}=e,d=y(ae,t);return s.jsx(Qn,{scope:t,forceMount:n,children:s.jsx(z,{present:n||d.open,children:s.jsx(kn,{asChild:!0,container:r,children:o})})})};Ue.displayName=ae;var C="MenuContent",[et,se]=T(C),Be=a.forwardRef((e,t)=>{const n=Ve(C,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,d=y(C,e.__scopeMenu),u=q(C,e.__scopeMenu);return s.jsx(k.Provider,{scope:e.__scopeMenu,children:s.jsx(z,{present:o||d.open,children:s.jsx(k.Slot,{scope:e.__scopeMenu,children:u.modal?s.jsx(nt,{...r,ref:t}):s.jsx(tt,{...r,ref:t})})})})}),nt=a.forwardRef((e,t)=>{const n=y(C,e.__scopeMenu),o=a.useRef(null),r=G(t,o);return a.useEffect(()=>{const d=o.current;if(d)return Fn(d)},[]),s.jsx(de,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:w(e.onFocusOutside,d=>d.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),tt=a.forwardRef((e,t)=>{const n=y(C,e.__scopeMenu);return s.jsx(de,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),de=a.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:r,onOpenAutoFocus:d,onCloseAutoFocus:u,disableOutsidePointerEvents:c,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:m,onDismiss:v,disableOutsideScroll:h,...D}=e,I=y(C,n),j=q(C,n),V=K(n),U=Le(n),xe=Hn(n),[xn,Re]=a.useState(null),B=a.useRef(null),Rn=G(t,B,I.onContentChange),$=a.useRef(0),X=a.useRef(""),bn=a.useRef(0),J=a.useRef(null),be=a.useRef("right"),Q=a.useRef(0),yn=h?Kn:a.Fragment,Dn=h?{as:Pe,allowPinchZoom:!0}:void 0,Sn=l=>{var P,De;const _=X.current+l,x=xe().filter(R=>!R.disabled),b=document.activeElement,ee=(P=x.find(R=>R.ref.current===b))==null?void 0:P.textValue,ne=x.map(R=>R.textValue),ye=mt(ne,_,ee),A=(De=x.find(R=>R.textValue===ye))==null?void 0:De.ref.current;(function R(Se){X.current=Se,window.clearTimeout($.current),Se!==""&&($.current=window.setTimeout(()=>R(""),1e3))})(_),A&&setTimeout(()=>A.focus())};a.useEffect(()=>()=>window.clearTimeout($.current),[]),Gn();const E=a.useCallback(l=>{var x,b;return be.current===((x=J.current)==null?void 0:x.side)&&wt(l,(b=J.current)==null?void 0:b.area)},[]);return s.jsx(et,{scope:n,searchRef:X,onItemEnter:a.useCallback(l=>{E(l)&&l.preventDefault()},[E]),onItemLeave:a.useCallback(l=>{var _;E(l)||((_=B.current)==null||_.focus(),Re(null))},[E]),onTriggerLeave:a.useCallback(l=>{E(l)&&l.preventDefault()},[E]),pointerGraceTimerRef:bn,onPointerGraceIntentChange:a.useCallback(l=>{J.current=l},[]),children:s.jsx(yn,{...Dn,children:s.jsx(Ln,{asChild:!0,trapped:r,onMountAutoFocus:w(d,l=>{var _;l.preventDefault(),(_=B.current)==null||_.focus({preventScroll:!0})}),onUnmountAutoFocus:u,children:s.jsx(jn,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:g,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:m,onDismiss:v,children:s.jsx(qn,{asChild:!0,...U,dir:j.dir,orientation:"vertical",loop:o,currentTabStopId:xn,onCurrentTabStopIdChange:Re,onEntryFocus:w(f,l=>{j.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx(An,{role:"menu","aria-orientation":"vertical","data-state":dn(I.open),"data-radix-menu-content":"",dir:j.dir,...V,...D,ref:Rn,style:{outline:"none",...D.style},onKeyDown:w(D.onKeyDown,l=>{const x=l.target.closest("[data-radix-menu-content]")===l.currentTarget,b=l.ctrlKey||l.altKey||l.metaKey,ee=l.key.length===1;x&&(l.key==="Tab"&&l.preventDefault(),!b&&ee&&Sn(l.key));const ne=B.current;if(l.target!==ne||!Xn.includes(l.key))return;l.preventDefault();const A=xe().filter(P=>!P.disabled).map(P=>P.ref.current);Fe.includes(l.key)&&A.reverse(),pt(A)}),onBlur:w(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout($.current),X.current="")}),onPointerMove:w(e.onPointerMove,F(l=>{const _=l.target,x=Q.current!==l.clientX;if(l.currentTarget.contains(_)&&x){const b=l.clientX>Q.current?"right":"left";be.current=b,Q.current=l.clientX}}))})})})})})})});Be.displayName=C;var ot="MenuGroup",ie=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(N.div,{role:"group",...o,ref:t})});ie.displayName=ot;var rt="MenuLabel",$e=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(N.div,{...o,ref:t})});$e.displayName=rt;var W="MenuItem",Te="menu.itemSelect",Z=a.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...r}=e,d=a.useRef(null),u=q(W,e.__scopeMenu),c=se(W,e.__scopeMenu),f=G(t,d),g=a.useRef(!1),p=()=>{const i=d.current;if(!n&&i){const m=new CustomEvent(Te,{bubbles:!0,cancelable:!0});i.addEventListener(Te,v=>o==null?void 0:o(v),{once:!0}),In(i,m),m.defaultPrevented?g.current=!1:u.onClose()}};return s.jsx(Xe,{...r,ref:f,disabled:n,onClick:w(e.onClick,p),onPointerDown:i=>{var m;(m=e.onPointerDown)==null||m.call(e,i),g.current=!0},onPointerUp:w(e.onPointerUp,i=>{var m;g.current||(m=i.currentTarget)==null||m.click()}),onKeyDown:w(e.onKeyDown,i=>{const m=c.searchRef.current!=="";n||m&&i.key===" "||te.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});Z.displayName=W;var Xe=a.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:r,...d}=e,u=se(W,n),c=Le(n),f=a.useRef(null),g=G(t,f),[p,i]=a.useState(!1),[m,v]=a.useState("");return a.useEffect(()=>{const h=f.current;h&&v((h.textContent??"").trim())},[d.children]),s.jsx(k.ItemSlot,{scope:n,disabled:o,textValue:r??m,children:s.jsx(Vn,{asChild:!0,...c,focusable:!o,children:s.jsx(N.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...d,ref:g,onPointerMove:w(e.onPointerMove,F(h=>{o?u.onItemLeave(h):(u.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:w(e.onPointerLeave,F(h=>u.onItemLeave(h))),onFocus:w(e.onFocus,()=>i(!0)),onBlur:w(e.onBlur,()=>i(!1))})})})}),at="MenuCheckboxItem",Ye=a.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:o,...r}=e;return s.jsx(Je,{scope:e.__scopeMenu,checked:n,children:s.jsx(Z,{role:"menuitemcheckbox","aria-checked":H(n)?"mixed":n,...r,ref:t,"data-state":le(n),onSelect:w(r.onSelect,()=>o==null?void 0:o(H(n)?!0:!n),{checkForDefaultPrevented:!1})})})});Ye.displayName=at;var We="MenuRadioGroup",[st,dt]=T(We,{value:void 0,onValueChange:()=>{}}),He=a.forwardRef((e,t)=>{const{value:n,onValueChange:o,...r}=e,d=oe(o);return s.jsx(st,{scope:e.__scopeMenu,value:n,onValueChange:d,children:s.jsx(ie,{...r,ref:t})})});He.displayName=We;var ze="MenuRadioItem",Ze=a.forwardRef((e,t)=>{const{value:n,...o}=e,r=dt(ze,e.__scopeMenu),d=n===r.value;return s.jsx(Je,{scope:e.__scopeMenu,checked:d,children:s.jsx(Z,{role:"menuitemradio","aria-checked":d,...o,ref:t,"data-state":le(d),onSelect:w(o.onSelect,()=>{var u;return(u=r.onValueChange)==null?void 0:u.call(r,n)},{checkForDefaultPrevented:!1})})})});Ze.displayName=ze;var ue="MenuItemIndicator",[Je,it]=T(ue,{checked:!1}),Qe=a.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:o,...r}=e,d=it(ue,n);return s.jsx(z,{present:o||H(d.checked)||d.checked===!0,children:s.jsx(N.span,{...r,ref:t,"data-state":le(d.checked)})})});Qe.displayName=ue;var ut="MenuSeparator",en=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(N.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});en.displayName=ut;var ct="MenuArrow",nn=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=K(n);return s.jsx(On,{...r,...o,ref:t})});nn.displayName=ct;var ce="MenuSub",[lt,tn]=T(ce),on=e=>{const{__scopeMenu:t,children:n,open:o=!1,onOpenChange:r}=e,d=y(ce,t),u=K(t),[c,f]=a.useState(null),[g,p]=a.useState(null),i=oe(r);return a.useEffect(()=>(d.open===!1&&i(!1),()=>i(!1)),[d.open,i]),s.jsx(Oe,{...u,children:s.jsx(Ke,{scope:t,open:o,onOpenChange:i,content:g,onContentChange:p,children:s.jsx(lt,{scope:t,contentId:Y(),triggerId:Y(),trigger:c,onTriggerChange:f,children:n})})})};on.displayName=ce;var O="MenuSubTrigger",rn=a.forwardRef((e,t)=>{const n=y(O,e.__scopeMenu),o=q(O,e.__scopeMenu),r=tn(O,e.__scopeMenu),d=se(O,e.__scopeMenu),u=a.useRef(null),{pointerGraceTimerRef:c,onPointerGraceIntentChange:f}=d,g={__scopeMenu:e.__scopeMenu},p=a.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return a.useEffect(()=>p,[p]),a.useEffect(()=>{const i=c.current;return()=>{window.clearTimeout(i),f(null)}},[c,f]),s.jsx(re,{asChild:!0,...g,children:s.jsx(Xe,{id:r.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":r.contentId,"data-state":dn(n.open),...e,ref:Ee(t,r.onTriggerChange),onClick:i=>{var m;(m=e.onClick)==null||m.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:w(e.onPointerMove,F(i=>{d.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!n.open&&!u.current&&(d.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{n.onOpenChange(!0),p()},100))})),onPointerLeave:w(e.onPointerLeave,F(i=>{var v,h;p();const m=(v=n.content)==null?void 0:v.getBoundingClientRect();if(m){const D=(h=n.content)==null?void 0:h.dataset.side,I=D==="right",j=I?-5:5,V=m[I?"left":"right"],U=m[I?"right":"left"];d.onPointerGraceIntentChange({area:[{x:i.clientX+j,y:i.clientY},{x:V,y:m.top},{x:U,y:m.top},{x:U,y:m.bottom},{x:V,y:m.bottom}],side:D}),window.clearTimeout(c.current),c.current=window.setTimeout(()=>d.onPointerGraceIntentChange(null),300)}else{if(d.onTriggerLeave(i),i.defaultPrevented)return;d.onPointerGraceIntentChange(null)}})),onKeyDown:w(e.onKeyDown,i=>{var v;const m=d.searchRef.current!=="";e.disabled||m&&i.key===" "||Yn[o.dir].includes(i.key)&&(n.onOpenChange(!0),(v=n.content)==null||v.focus(),i.preventDefault())})})})});rn.displayName=O;var an="MenuSubContent",sn=a.forwardRef((e,t)=>{const n=Ve(C,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,d=y(C,e.__scopeMenu),u=q(C,e.__scopeMenu),c=tn(an,e.__scopeMenu),f=a.useRef(null),g=G(t,f);return s.jsx(k.Provider,{scope:e.__scopeMenu,children:s.jsx(z,{present:o||d.open,children:s.jsx(k.Slot,{scope:e.__scopeMenu,children:s.jsx(de,{id:c.contentId,"aria-labelledby":c.triggerId,...r,ref:g,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var i;u.isUsingKeyboardRef.current&&((i=f.current)==null||i.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:w(e.onFocusOutside,p=>{p.target!==c.trigger&&d.onOpenChange(!1)}),onEscapeKeyDown:w(e.onEscapeKeyDown,p=>{u.onClose(),p.preventDefault()}),onKeyDown:w(e.onKeyDown,p=>{var v;const i=p.currentTarget.contains(p.target),m=Wn[u.dir].includes(p.key);i&&m&&(d.onOpenChange(!1),(v=c.trigger)==null||v.focus(),p.preventDefault())})})})})})});sn.displayName=an;function dn(e){return e?"open":"closed"}function H(e){return e==="indeterminate"}function le(e){return H(e)?"indeterminate":e?"checked":"unchecked"}function pt(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function ft(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function mt(e,t,n){const r=t.length>1&&Array.from(t).every(g=>g===t[0])?t[0]:t,d=n?e.indexOf(n):-1;let u=ft(e,Math.max(d,0));r.length===1&&(u=u.filter(g=>g!==n));const f=u.find(g=>g.toLowerCase().startsWith(r.toLowerCase()));return f!==n?f:void 0}function gt(e,t){const{x:n,y:o}=e;let r=!1;for(let d=0,u=t.length-1;d<t.length;u=d++){const c=t[d].x,f=t[d].y,g=t[u].x,p=t[u].y;f>o!=p>o&&n<(g-c)*(o-f)/(p-f)+c&&(r=!r)}return r}function wt(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return gt(n,t)}function F(e){return t=>t.pointerType==="mouse"?e(t):void 0}var ht=qe,vt=re,Mt=Ue,_t=Be,Ct=ie,xt=$e,Rt=Z,bt=Ye,yt=He,Dt=Ze,St=Qe,Tt=en,It=nn,Et=on,Pt=rn,Nt=sn,pe="DropdownMenu",[jt,Lo]=Ne(pe,[Ge]),M=Ge(),[At,un]=jt(pe),cn=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:r,defaultOpen:d,onOpenChange:u,modal:c=!0}=e,f=M(t),g=a.useRef(null),[p=!1,i]=je({prop:r,defaultProp:d,onChange:u});return s.jsx(At,{scope:t,triggerId:Y(),triggerRef:g,contentId:Y(),open:p,onOpenChange:i,onOpenToggle:a.useCallback(()=>i(m=>!m),[i]),modal:c,children:s.jsx(ht,{...f,open:p,onOpenChange:i,dir:o,modal:c,children:n})})};cn.displayName=pe;var ln="DropdownMenuTrigger",pn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...r}=e,d=un(ln,n),u=M(n);return s.jsx(vt,{asChild:!0,...u,children:s.jsx(N.button,{type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...r,ref:Ee(t,d.triggerRef),onPointerDown:w(e.onPointerDown,c=>{!o&&c.button===0&&c.ctrlKey===!1&&(d.onOpenToggle(),d.open||c.preventDefault())}),onKeyDown:w(e.onKeyDown,c=>{o||(["Enter"," "].includes(c.key)&&d.onOpenToggle(),c.key==="ArrowDown"&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(c.key)&&c.preventDefault())})})})});pn.displayName=ln;var Ot="DropdownMenuPortal",fn=e=>{const{__scopeDropdownMenu:t,...n}=e,o=M(t);return s.jsx(Mt,{...o,...n})};fn.displayName=Ot;var mn="DropdownMenuContent",gn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=un(mn,n),d=M(n),u=a.useRef(!1);return s.jsx(_t,{id:r.contentId,"aria-labelledby":r.triggerId,...d,...o,ref:t,onCloseAutoFocus:w(e.onCloseAutoFocus,c=>{var f;u.current||(f=r.triggerRef.current)==null||f.focus(),u.current=!1,c.preventDefault()}),onInteractOutside:w(e.onInteractOutside,c=>{const f=c.detail.originalEvent,g=f.button===0&&f.ctrlKey===!0,p=f.button===2||g;(!r.modal||p)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});gn.displayName=mn;var kt="DropdownMenuGroup",wn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Ct,{...r,...o,ref:t})});wn.displayName=kt;var Ft="DropdownMenuLabel",Gt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(xt,{...r,...o,ref:t})});Gt.displayName=Ft;var Lt="DropdownMenuItem",hn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Rt,{...r,...o,ref:t})});hn.displayName=Lt;var Kt="DropdownMenuCheckboxItem",qt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(bt,{...r,...o,ref:t})});qt.displayName=Kt;var Vt="DropdownMenuRadioGroup",Ut=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(yt,{...r,...o,ref:t})});Ut.displayName=Vt;var Bt="DropdownMenuRadioItem",$t=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Dt,{...r,...o,ref:t})});$t.displayName=Bt;var Xt="DropdownMenuItemIndicator",Yt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(St,{...r,...o,ref:t})});Yt.displayName=Xt;var Wt="DropdownMenuSeparator",Ht=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Tt,{...r,...o,ref:t})});Ht.displayName=Wt;var zt="DropdownMenuArrow",Zt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(It,{...r,...o,ref:t})});Zt.displayName=zt;var Jt=e=>{const{__scopeDropdownMenu:t,children:n,open:o,onOpenChange:r,defaultOpen:d}=e,u=M(t),[c=!1,f]=je({prop:o,defaultProp:d,onChange:r});return s.jsx(Et,{...u,open:c,onOpenChange:f,children:n})},Qt="DropdownMenuSubTrigger",vn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Pt,{...r,...o,ref:t})});vn.displayName=Qt;var eo="DropdownMenuSubContent",Mn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Nt,{...r,...o,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Mn.displayName=eo;var no=cn,to=pn,_n=fn,oo=gn,ro=wn,ao=hn,so=Jt,io=vn,uo=Mn;const Ie=e=>{const t=[];for(const n of a.Children.toArray(e))a.isValidElement(n)?t.push(n):t.push(s.jsx("span",{children:n}));return t.length===1?t[0]:t},Cn=e=>a.useMemo(()=>{const t=a.isValidElement(e)&&e.type==="a";if(t){const n=a.cloneElement(e,{children:Ie(e.props.children)});return{isLink:t,content:n}}return{isLink:t,content:Ie(e)}},[e]),co="_content_r37cj_6",lo="_subContent_r37cj_7",po="_item_r37cj_24",fo="_subTrigger_r37cj_25",mo="_subMenuIndicator_r37cj_110",go="_group_r37cj_116",wo="_slot_r37cj_123",S={content:co,subContent:lo,item:po,subTrigger:fo,subMenuIndicator:mo,group:go,slot:wo},fe=({children:e,open:t,modal:n=!1,onOpenChange:o,"data-test-id":r="fondue-dropdown"})=>s.jsx(no,{open:t,modal:n,onOpenChange:o,"data-test-id":r,children:e});fe.displayName="Dropdown.Root";const me=({asChild:e=!0,children:t,"data-test-id":n="fondue-dropdown-trigger",...o},r)=>s.jsx(to,{asChild:e,"data-test-id":n,ref:r,...o,children:t});me.displayName="Dropdown.Trigger";const ge=({side:e="bottom",align:t="start",children:n,preventTriggerFocusOnClose:o,"data-test-id":r="fondue-dropdown-content"},d)=>{const u=Un();return s.jsx(_n,{children:s.jsx(Bn,{theme:u,children:s.jsx(oo,{align:t,collisionPadding:8,sideOffset:8,side:e,className:S.content,"data-test-id":r,ref:d,onCloseAutoFocus:c=>{o&&c.preventDefault()},children:n})})})};ge.displayName="Dropdown.Content";const we=({children:e,"data-test-id":t="fondue-dropdown-group"},n)=>s.jsx(ro,{className:S.group,"data-test-id":t,ref:n,children:e});we.displayName="Dropdown.Group";const he=({children:e,"data-test-id":t="fondue-dropdown-submenu"})=>s.jsx(so,{"data-test-id":t,children:e});he.displayName="Dropdown.SubMenu";const ve=({children:e,"data-test-id":t="fondue-dropdown-subtrigger"},n)=>{const{content:o}=Cn(e);return s.jsxs(io,{className:S.subTrigger,"data-test-id":t,ref:n,children:[o,s.jsx(Tn,{className:S.subMenuIndicator,size:16})]})};ve.displayName="Dropdown.SubTrigger";const Me=({children:e,"data-test-id":t="fondue-dropdown-subcontent"},n)=>s.jsx(_n,{children:s.jsx(uo,{className:S.subContent,"data-test-id":t,ref:n,children:e})});Me.displayName="Dropdown.SubContent";const _e=({children:e,disabled:t,textValue:n,onSelect:o,emphasis:r="default","data-test-id":d="fondue-dropdown-subtrigger",...u},c)=>{const{content:f,isLink:g}=Cn(e),p=g?Pe:"div";return s.jsx(ao,{onSelect:o,className:S.item,textValue:n,"data-test-id":d,"data-emphasis":r,ref:c,disabled:t,asChild:!0,...u,children:s.jsx(p,{children:f})})};_e.displayName="Dropdown.Item";const Ce=({children:e,name:t,"data-test-id":n="fondue-dropdown-slot"},o)=>s.jsx("div",{"data-name":t,className:S.slot,"data-test-id":n,ref:o,children:e});Ce.displayName="Dropdown.Slot";const ho=a.forwardRef(me),vo=a.forwardRef(ge),Mo=a.forwardRef(we),_o=a.forwardRef(ve),Co=a.forwardRef(Me),xo=a.forwardRef(_e),Ro=a.forwardRef(Ce),Ko={Root:fe,Trigger:ho,Content:vo,Group:Mo,SubMenu:he,SubTrigger:_o,SubContent:Co,Item:xo,Slot:Ro};fe.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Root",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},modal:{required:!1,tsType:{name:"boolean"},description:`When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controls the open state of the dropdown."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback that is called when the open state of the dropdown changes."},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown'",computed:!1}}}};me.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Trigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-trigger'",computed:!1}}}};ge.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Content",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-content'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Defines the alignment of the dropdown.
@default "start"`,defaultValue:{value:"'start'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Defines the preferred side of the dropdown. It will not be respected if there are collisions with the viewport.
@default "bottom"`,defaultValue:{value:"'bottom'",computed:!1}},preventTriggerFocusOnClose:{required:!1,tsType:{name:"boolean"},description:"Prevents the focus from being set on the trigger when the dropdown is closed."}}};we.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Group",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-group'",computed:!1}}}};he.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-submenu'",computed:!1}}}};ve.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};Me.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subcontent'",computed:!1}}}};_e.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Item",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the item."},textValue:{required:!1,tsType:{name:"string"},description:"The text value of the item that is passed to the onSelect callback."},emphasis:{required:!1,tsType:{name:"union",raw:"'default' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:`The style of the item.
@default "default"`,defaultValue:{value:"'default'",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"Callback that is called when the item is selected."},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};Ce.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Slot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-slot'",computed:!1}}}};export{fe as D,me as a,ge as b,_e as c,we as d,he as e,ve as f,Me as g,Ko as h};
