import{j as s}from"./jsx-runtime-BSxFkHFN.js";import{r as a}from"./index-i66itsuO.js";import{p as In}from"./fondue-icons348-g6CPHV6m.js";import{c as w,u as oe}from"./index-BNYVQE02.js";import{u as G,c as Pe,S as Pn}from"./index-CdcT0Fdx.js";import{c as Ee}from"./index-BwxsjnLo.js";import{u as Ne}from"./index-P4w4wmP2.js";import{P as N,d as En}from"./index-kGoNTBW-.js";import{c as Nn}from"./index-BFKpAWVr.js";import{u as An}from"./index-DLXHbKnz.js";import{c as Ae,A as jn,D as On,C as kn,a as Fn,R as je,P as Gn}from"./index-CunL6ReG.js";import{h as Ln,u as Kn,F as qn,R as Vn}from"./Combination-BF38urBZ.js";import{u as X}from"./index-BJaWHrbV.js";import{P as z}from"./index-BEh1LdRJ.js";import{c as Oe,R as Un,I as Bn}from"./index-BoR4MukD.js";import{u as ke,T as Fe}from"./ThemeProvider-Bg3D_IMF.js";var te=["Enter"," "],$n=["ArrowDown","PageUp","Home"],Ge=["ArrowUp","PageDown","End"],Hn=[...$n,...Ge],Xn={ltr:[...te,"ArrowRight"],rtl:[...te,"ArrowLeft"]},Yn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},L="Menu",[k,Wn,zn]=Nn(L),[T,Le]=Ee(L,[zn,Ae,Oe]),K=Ae(),Ke=Oe(),[qe,D]=T(L),[Zn,q]=T(L),Ve=e=>{const{__scopeMenu:n,open:t=!1,children:o,dir:r,onOpenChange:i,modal:d=!0}=e,c=K(n),[p,g]=a.useState(null),f=a.useRef(!1),u=oe(i),m=An(r);return a.useEffect(()=>{const v=()=>{f.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},h=()=>f.current=!1;return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),s.jsx(je,{...c,children:s.jsx(qe,{scope:n,open:t,onOpenChange:u,content:p,onContentChange:g,children:s.jsx(Zn,{scope:n,onClose:a.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:f,dir:m,modal:d,children:o})})})};Ve.displayName=L;var Jn="MenuAnchor",re=a.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e,r=K(t);return s.jsx(jn,{...r,...o,ref:n})});re.displayName=Jn;var ae="MenuPortal",[Qn,Ue]=T(ae,{forceMount:void 0}),Be=e=>{const{__scopeMenu:n,forceMount:t,children:o,container:r}=e,i=D(ae,n);return s.jsx(Qn,{scope:n,forceMount:t,children:s.jsx(z,{present:t||i.open,children:s.jsx(Gn,{asChild:!0,container:r,children:o})})})};Be.displayName=ae;var C="MenuContent",[et,se]=T(C),$e=a.forwardRef((e,n)=>{const t=Ue(C,e.__scopeMenu),{forceMount:o=t.forceMount,...r}=e,i=D(C,e.__scopeMenu),d=q(C,e.__scopeMenu);return s.jsx(k.Provider,{scope:e.__scopeMenu,children:s.jsx(z,{present:o||i.open,children:s.jsx(k.Slot,{scope:e.__scopeMenu,children:d.modal?s.jsx(nt,{...r,ref:n}):s.jsx(tt,{...r,ref:n})})})})}),nt=a.forwardRef((e,n)=>{const t=D(C,e.__scopeMenu),o=a.useRef(null),r=G(n,o);return a.useEffect(()=>{const i=o.current;if(i)return Ln(i)},[]),s.jsx(ie,{...e,ref:r,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:w(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),tt=a.forwardRef((e,n)=>{const t=D(C,e.__scopeMenu);return s.jsx(ie,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),ie=a.forwardRef((e,n)=>{const{__scopeMenu:t,loop:o=!1,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:c,onEntryFocus:p,onEscapeKeyDown:g,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:m,onDismiss:v,disableOutsideScroll:h,...S}=e,I=D(C,t),A=q(C,t),V=K(t),U=Ke(t),xe=Wn(t),[bn,be]=a.useState(null),B=a.useRef(null),Rn=G(n,B,I.onContentChange),$=a.useRef(0),H=a.useRef(""),yn=a.useRef(0),J=a.useRef(null),Re=a.useRef("right"),Q=a.useRef(0),Dn=h?Vn:a.Fragment,Sn=h?{as:Pn,allowPinchZoom:!0}:void 0,Tn=l=>{var E,De;const _=H.current+l,x=xe().filter(b=>!b.disabled),R=document.activeElement,ee=(E=x.find(b=>b.ref.current===R))==null?void 0:E.textValue,ne=x.map(b=>b.textValue),ye=mt(ne,_,ee),j=(De=x.find(b=>b.textValue===ye))==null?void 0:De.ref.current;(function b(Se){H.current=Se,window.clearTimeout($.current),Se!==""&&($.current=window.setTimeout(()=>b(""),1e3))})(_),j&&setTimeout(()=>j.focus())};a.useEffect(()=>()=>window.clearTimeout($.current),[]),Kn();const P=a.useCallback(l=>{var x,R;return Re.current===((x=J.current)==null?void 0:x.side)&&wt(l,(R=J.current)==null?void 0:R.area)},[]);return s.jsx(et,{scope:t,searchRef:H,onItemEnter:a.useCallback(l=>{P(l)&&l.preventDefault()},[P]),onItemLeave:a.useCallback(l=>{var _;P(l)||((_=B.current)==null||_.focus(),be(null))},[P]),onTriggerLeave:a.useCallback(l=>{P(l)&&l.preventDefault()},[P]),pointerGraceTimerRef:yn,onPointerGraceIntentChange:a.useCallback(l=>{J.current=l},[]),children:s.jsx(Dn,{...Sn,children:s.jsx(qn,{asChild:!0,trapped:r,onMountAutoFocus:w(i,l=>{var _;l.preventDefault(),(_=B.current)==null||_.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:s.jsx(On,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:g,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:m,onDismiss:v,children:s.jsx(Un,{asChild:!0,...U,dir:A.dir,orientation:"vertical",loop:o,currentTabStopId:bn,onCurrentTabStopIdChange:be,onEntryFocus:w(p,l=>{A.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx(kn,{role:"menu","aria-orientation":"vertical","data-state":dn(I.open),"data-radix-menu-content":"",dir:A.dir,...V,...S,ref:Rn,style:{outline:"none",...S.style},onKeyDown:w(S.onKeyDown,l=>{const x=l.target.closest("[data-radix-menu-content]")===l.currentTarget,R=l.ctrlKey||l.altKey||l.metaKey,ee=l.key.length===1;x&&(l.key==="Tab"&&l.preventDefault(),!R&&ee&&Tn(l.key));const ne=B.current;if(l.target!==ne||!Hn.includes(l.key))return;l.preventDefault();const j=xe().filter(E=>!E.disabled).map(E=>E.ref.current);Ge.includes(l.key)&&j.reverse(),pt(j)}),onBlur:w(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout($.current),H.current="")}),onPointerMove:w(e.onPointerMove,F(l=>{const _=l.target,x=Q.current!==l.clientX;if(l.currentTarget.contains(_)&&x){const R=l.clientX>Q.current?"right":"left";Re.current=R,Q.current=l.clientX}}))})})})})})})});$e.displayName=C;var ot="MenuGroup",ue=a.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return s.jsx(N.div,{role:"group",...o,ref:n})});ue.displayName=ot;var rt="MenuLabel",He=a.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return s.jsx(N.div,{...o,ref:n})});He.displayName=rt;var Y="MenuItem",Te="menu.itemSelect",Z=a.forwardRef((e,n)=>{const{disabled:t=!1,onSelect:o,...r}=e,i=a.useRef(null),d=q(Y,e.__scopeMenu),c=se(Y,e.__scopeMenu),p=G(n,i),g=a.useRef(!1),f=()=>{const u=i.current;if(!t&&u){const m=new CustomEvent(Te,{bubbles:!0,cancelable:!0});u.addEventListener(Te,v=>o==null?void 0:o(v),{once:!0}),En(u,m),m.defaultPrevented?g.current=!1:d.onClose()}};return s.jsx(Xe,{...r,ref:p,disabled:t,onClick:w(e.onClick,f),onPointerDown:u=>{var m;(m=e.onPointerDown)==null||m.call(e,u),g.current=!0},onPointerUp:w(e.onPointerUp,u=>{var m;g.current||(m=u.currentTarget)==null||m.click()}),onKeyDown:w(e.onKeyDown,u=>{const m=c.searchRef.current!=="";t||m&&u.key===" "||te.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})})});Z.displayName=Y;var Xe=a.forwardRef((e,n)=>{const{__scopeMenu:t,disabled:o=!1,textValue:r,...i}=e,d=se(Y,t),c=Ke(t),p=a.useRef(null),g=G(n,p),[f,u]=a.useState(!1),[m,v]=a.useState("");return a.useEffect(()=>{const h=p.current;h&&v((h.textContent??"").trim())},[i.children]),s.jsx(k.ItemSlot,{scope:t,disabled:o,textValue:r??m,children:s.jsx(Bn,{asChild:!0,...c,focusable:!o,children:s.jsx(N.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...i,ref:g,onPointerMove:w(e.onPointerMove,F(h=>{o?d.onItemLeave(h):(d.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:w(e.onPointerLeave,F(h=>d.onItemLeave(h))),onFocus:w(e.onFocus,()=>u(!0)),onBlur:w(e.onBlur,()=>u(!1))})})})}),at="MenuCheckboxItem",Ye=a.forwardRef((e,n)=>{const{checked:t=!1,onCheckedChange:o,...r}=e;return s.jsx(Qe,{scope:e.__scopeMenu,checked:t,children:s.jsx(Z,{role:"menuitemcheckbox","aria-checked":W(t)?"mixed":t,...r,ref:n,"data-state":le(t),onSelect:w(r.onSelect,()=>o==null?void 0:o(W(t)?!0:!t),{checkForDefaultPrevented:!1})})})});Ye.displayName=at;var We="MenuRadioGroup",[st,it]=T(We,{value:void 0,onValueChange:()=>{}}),ze=a.forwardRef((e,n)=>{const{value:t,onValueChange:o,...r}=e,i=oe(o);return s.jsx(st,{scope:e.__scopeMenu,value:t,onValueChange:i,children:s.jsx(ue,{...r,ref:n})})});ze.displayName=We;var Ze="MenuRadioItem",Je=a.forwardRef((e,n)=>{const{value:t,...o}=e,r=it(Ze,e.__scopeMenu),i=t===r.value;return s.jsx(Qe,{scope:e.__scopeMenu,checked:i,children:s.jsx(Z,{role:"menuitemradio","aria-checked":i,...o,ref:n,"data-state":le(i),onSelect:w(o.onSelect,()=>{var d;return(d=r.onValueChange)==null?void 0:d.call(r,t)},{checkForDefaultPrevented:!1})})})});Je.displayName=Ze;var de="MenuItemIndicator",[Qe,ut]=T(de,{checked:!1}),en=a.forwardRef((e,n)=>{const{__scopeMenu:t,forceMount:o,...r}=e,i=ut(de,t);return s.jsx(z,{present:o||W(i.checked)||i.checked===!0,children:s.jsx(N.span,{...r,ref:n,"data-state":le(i.checked)})})});en.displayName=de;var dt="MenuSeparator",nn=a.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e;return s.jsx(N.div,{role:"separator","aria-orientation":"horizontal",...o,ref:n})});nn.displayName=dt;var ct="MenuArrow",tn=a.forwardRef((e,n)=>{const{__scopeMenu:t,...o}=e,r=K(t);return s.jsx(Fn,{...r,...o,ref:n})});tn.displayName=ct;var ce="MenuSub",[lt,on]=T(ce),rn=e=>{const{__scopeMenu:n,children:t,open:o=!1,onOpenChange:r}=e,i=D(ce,n),d=K(n),[c,p]=a.useState(null),[g,f]=a.useState(null),u=oe(r);return a.useEffect(()=>(i.open===!1&&u(!1),()=>u(!1)),[i.open,u]),s.jsx(je,{...d,children:s.jsx(qe,{scope:n,open:o,onOpenChange:u,content:g,onContentChange:f,children:s.jsx(lt,{scope:n,contentId:X(),triggerId:X(),trigger:c,onTriggerChange:p,children:t})})})};rn.displayName=ce;var O="MenuSubTrigger",an=a.forwardRef((e,n)=>{const t=D(O,e.__scopeMenu),o=q(O,e.__scopeMenu),r=on(O,e.__scopeMenu),i=se(O,e.__scopeMenu),d=a.useRef(null),{pointerGraceTimerRef:c,onPointerGraceIntentChange:p}=i,g={__scopeMenu:e.__scopeMenu},f=a.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return a.useEffect(()=>f,[f]),a.useEffect(()=>{const u=c.current;return()=>{window.clearTimeout(u),p(null)}},[c,p]),s.jsx(re,{asChild:!0,...g,children:s.jsx(Xe,{id:r.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":r.contentId,"data-state":dn(t.open),...e,ref:Pe(n,r.onTriggerChange),onClick:u=>{var m;(m=e.onClick)==null||m.call(e,u),!(e.disabled||u.defaultPrevented)&&(u.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:w(e.onPointerMove,F(u=>{i.onItemEnter(u),!u.defaultPrevented&&!e.disabled&&!t.open&&!d.current&&(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),f()},100))})),onPointerLeave:w(e.onPointerLeave,F(u=>{var v,h;f();const m=(v=t.content)==null?void 0:v.getBoundingClientRect();if(m){const S=(h=t.content)==null?void 0:h.dataset.side,I=S==="right",A=I?-5:5,V=m[I?"left":"right"],U=m[I?"right":"left"];i.onPointerGraceIntentChange({area:[{x:u.clientX+A,y:u.clientY},{x:V,y:m.top},{x:U,y:m.top},{x:U,y:m.bottom},{x:V,y:m.bottom}],side:S}),window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(u),u.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:w(e.onKeyDown,u=>{var v;const m=i.searchRef.current!=="";e.disabled||m&&u.key===" "||Xn[o.dir].includes(u.key)&&(t.onOpenChange(!0),(v=t.content)==null||v.focus(),u.preventDefault())})})})});an.displayName=O;var sn="MenuSubContent",un=a.forwardRef((e,n)=>{const t=Ue(C,e.__scopeMenu),{forceMount:o=t.forceMount,...r}=e,i=D(C,e.__scopeMenu),d=q(C,e.__scopeMenu),c=on(sn,e.__scopeMenu),p=a.useRef(null),g=G(n,p);return s.jsx(k.Provider,{scope:e.__scopeMenu,children:s.jsx(z,{present:o||i.open,children:s.jsx(k.Slot,{scope:e.__scopeMenu,children:s.jsx(ie,{id:c.contentId,"aria-labelledby":c.triggerId,...r,ref:g,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var u;d.isUsingKeyboardRef.current&&((u=p.current)==null||u.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:w(e.onFocusOutside,f=>{f.target!==c.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:w(e.onEscapeKeyDown,f=>{d.onClose(),f.preventDefault()}),onKeyDown:w(e.onKeyDown,f=>{var v;const u=f.currentTarget.contains(f.target),m=Yn[d.dir].includes(f.key);u&&m&&(i.onOpenChange(!1),(v=c.trigger)==null||v.focus(),f.preventDefault())})})})})})});un.displayName=sn;function dn(e){return e?"open":"closed"}function W(e){return e==="indeterminate"}function le(e){return W(e)?"indeterminate":e?"checked":"unchecked"}function pt(e){const n=document.activeElement;for(const t of e)if(t===n||(t.focus(),document.activeElement!==n))return}function ft(e,n){return e.map((t,o)=>e[(n+o)%e.length])}function mt(e,n,t){const r=n.length>1&&Array.from(n).every(g=>g===n[0])?n[0]:n,i=t?e.indexOf(t):-1;let d=ft(e,Math.max(i,0));r.length===1&&(d=d.filter(g=>g!==t));const p=d.find(g=>g.toLowerCase().startsWith(r.toLowerCase()));return p!==t?p:void 0}function gt(e,n){const{x:t,y:o}=e;let r=!1;for(let i=0,d=n.length-1;i<n.length;d=i++){const c=n[i].x,p=n[i].y,g=n[d].x,f=n[d].y;p>o!=f>o&&t<(g-c)*(o-p)/(f-p)+c&&(r=!r)}return r}function wt(e,n){if(!n)return!1;const t={x:e.clientX,y:e.clientY};return gt(t,n)}function F(e){return n=>n.pointerType==="mouse"?e(n):void 0}var ht=Ve,vt=re,Mt=Be,_t=$e,Ct=ue,xt=He,bt=Z,Rt=Ye,yt=ze,Dt=Je,St=en,Tt=nn,It=tn,Pt=rn,Et=an,Nt=un,pe="DropdownMenu",[At,Vo]=Ee(pe,[Le]),M=Le(),[jt,cn]=At(pe),ln=e=>{const{__scopeDropdownMenu:n,children:t,dir:o,open:r,defaultOpen:i,onOpenChange:d,modal:c=!0}=e,p=M(n),g=a.useRef(null),[f=!1,u]=Ne({prop:r,defaultProp:i,onChange:d});return s.jsx(jt,{scope:n,triggerId:X(),triggerRef:g,contentId:X(),open:f,onOpenChange:u,onOpenToggle:a.useCallback(()=>u(m=>!m),[u]),modal:c,children:s.jsx(ht,{...p,open:f,onOpenChange:u,dir:o,modal:c,children:t})})};ln.displayName=pe;var pn="DropdownMenuTrigger",fn=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,disabled:o=!1,...r}=e,i=cn(pn,t),d=M(t);return s.jsx(vt,{asChild:!0,...d,children:s.jsx(N.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...r,ref:Pe(n,i.triggerRef),onPointerDown:w(e.onPointerDown,c=>{!o&&c.button===0&&c.ctrlKey===!1&&(i.onOpenToggle(),i.open||c.preventDefault())}),onKeyDown:w(e.onKeyDown,c=>{o||(["Enter"," "].includes(c.key)&&i.onOpenToggle(),c.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(c.key)&&c.preventDefault())})})})});fn.displayName=pn;var Ot="DropdownMenuPortal",mn=e=>{const{__scopeDropdownMenu:n,...t}=e,o=M(n);return s.jsx(Mt,{...o,...t})};mn.displayName=Ot;var gn="DropdownMenuContent",wn=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=cn(gn,t),i=M(t),d=a.useRef(!1);return s.jsx(_t,{id:r.contentId,"aria-labelledby":r.triggerId,...i,...o,ref:n,onCloseAutoFocus:w(e.onCloseAutoFocus,c=>{var p;d.current||(p=r.triggerRef.current)==null||p.focus(),d.current=!1,c.preventDefault()}),onInteractOutside:w(e.onInteractOutside,c=>{const p=c.detail.originalEvent,g=p.button===0&&p.ctrlKey===!0,f=p.button===2||g;(!r.modal||f)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});wn.displayName=gn;var kt="DropdownMenuGroup",hn=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(Ct,{...r,...o,ref:n})});hn.displayName=kt;var Ft="DropdownMenuLabel",Gt=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(xt,{...r,...o,ref:n})});Gt.displayName=Ft;var Lt="DropdownMenuItem",vn=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(bt,{...r,...o,ref:n})});vn.displayName=Lt;var Kt="DropdownMenuCheckboxItem",qt=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(Rt,{...r,...o,ref:n})});qt.displayName=Kt;var Vt="DropdownMenuRadioGroup",Ut=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(yt,{...r,...o,ref:n})});Ut.displayName=Vt;var Bt="DropdownMenuRadioItem",$t=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(Dt,{...r,...o,ref:n})});$t.displayName=Bt;var Ht="DropdownMenuItemIndicator",Xt=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(St,{...r,...o,ref:n})});Xt.displayName=Ht;var Yt="DropdownMenuSeparator",Wt=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(Tt,{...r,...o,ref:n})});Wt.displayName=Yt;var zt="DropdownMenuArrow",Zt=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(It,{...r,...o,ref:n})});Zt.displayName=zt;var Jt=e=>{const{__scopeDropdownMenu:n,children:t,open:o,onOpenChange:r,defaultOpen:i}=e,d=M(n),[c=!1,p]=Ne({prop:o,defaultProp:i,onChange:r});return s.jsx(Pt,{...d,open:c,onOpenChange:p,children:t})},Qt="DropdownMenuSubTrigger",Mn=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(Et,{...r,...o,ref:n})});Mn.displayName=Qt;var eo="DropdownMenuSubContent",_n=a.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...o}=e,r=M(t);return s.jsx(Nt,{...r,...o,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});_n.displayName=eo;var no=ln,to=fn,Cn=mn,oo=wn,ro=hn,ao=vn,so=Jt,io=Mn,uo=_n;const Ie=e=>{const n=[];for(const t of a.Children.toArray(e))a.isValidElement(t)?n.push(t):n.push(s.jsx("span",{children:t}));return n.length===1?n[0]:n},xn=e=>a.useMemo(()=>{const n=a.isValidElement(e)&&e.type==="a";if(n){const t=a.cloneElement(e,{children:Ie(e.props.children)});return{isLink:n,content:t}}return{isLink:n,content:Ie(e)}},[e]),co="_content_8bl6l_6",lo="_subContent_8bl6l_7",po="_item_8bl6l_20",fo="_subTrigger_8bl6l_21",mo="_subMenuIndicator_8bl6l_119",go="_group_8bl6l_125",wo="_groupHeading_8bl6l_132",ho="_slot_8bl6l_143",y={content:co,subContent:lo,item:po,subTrigger:fo,subMenuIndicator:mo,group:go,groupHeading:wo,slot:ho},fe=({children:e,open:n,modal:t=!1,onOpenChange:o,"data-test-id":r="fondue-dropdown"})=>s.jsx(no,{open:n,modal:t,onOpenChange:o,"data-test-id":r,children:e});fe.displayName="Dropdown.Root";const me=({asChild:e=!0,children:n,"data-test-id":t="fondue-dropdown-trigger",...o},r)=>s.jsx(to,{asChild:e,"data-test-id":t,ref:r,...o,children:n});me.displayName="Dropdown.Trigger";const vo={compact:8,comfortable:12,spacious:16},ge=({side:e="bottom",align:n="start",triggerOffset:t="compact",children:o,preventTriggerFocusOnClose:r,"data-test-id":i="fondue-dropdown-content"},d)=>{const c=ke();return s.jsx(Cn,{children:s.jsx(Fe,{theme:c,children:s.jsx(oo,{align:n,collisionPadding:8,sideOffset:vo[t],side:e,className:y.content,"data-test-id":i,ref:d,onCloseAutoFocus:p=>{r&&p.preventDefault()},children:o})})})};ge.displayName="Dropdown.Content";const we=({children:e,heading:n,"data-test-id":t="fondue-dropdown-group"},o)=>s.jsxs(ro,{className:y.group,"data-test-id":t,ref:o,children:[n?s.jsx("div",{className:y.groupHeading,children:s.jsx("span",{"aria-label":n,children:n})}):null,e]});we.displayName="Dropdown.Group";const he=({children:e,"data-test-id":n="fondue-dropdown-submenu"})=>s.jsx(so,{"data-test-id":n,children:e});he.displayName="Dropdown.SubMenu";const ve=({children:e,"data-test-id":n="fondue-dropdown-subtrigger"},t)=>{const{content:o}=xn(e);return s.jsxs(io,{className:y.subTrigger,"data-test-id":n,ref:t,children:[o,s.jsx(In,{className:y.subMenuIndicator,size:16})]})};ve.displayName="Dropdown.SubTrigger";const Me=({children:e,"data-test-id":n="fondue-dropdown-subcontent"},t)=>{const o=ke();return s.jsx(Cn,{children:s.jsx(Fe,{theme:o,children:s.jsx(uo,{className:y.subContent,"data-test-id":n,ref:t,children:e})})})};Me.displayName="Dropdown.SubContent";const _e=({children:e,disabled:n,textValue:t,onSelect:o,emphasis:r="default",asChild:i=!1,"data-test-id":d="fondue-dropdown-subtrigger",...c},p)=>{const{content:g}=xn(e);return s.jsx(ao,{onSelect:o,className:y.item,textValue:t,"data-test-id":d,"data-emphasis":r,ref:p,disabled:n,asChild:i,...c,children:g})};_e.displayName="Dropdown.Item";const Ce=({children:e,name:n,"data-test-id":t="fondue-dropdown-slot"},o)=>s.jsx("div",{"data-name":n,className:y.slot,"data-test-id":t,ref:o,children:e});Ce.displayName="Dropdown.Slot";const Mo=a.forwardRef(me),_o=a.forwardRef(ge),Co=a.forwardRef(we),xo=a.forwardRef(ve),bo=a.forwardRef(Me),Ro=a.forwardRef(_e),yo=a.forwardRef(Ce),Uo={Root:fe,Trigger:Mo,Content:_o,Group:Co,SubMenu:he,SubTrigger:xo,SubContent:bo,Item:Ro,Slot:yo};fe.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Root",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},modal:{required:!1,tsType:{name:"boolean"},description:`When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controls the open state of the dropdown."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback that is called when the open state of the dropdown changes."},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown'",computed:!1}}}};me.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Trigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-trigger'",computed:!1}}}};ge.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Content",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-content'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Defines the alignment of the dropdown.
@default "start"`,defaultValue:{value:"'start'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Defines the preferred side of the dropdown. It will not be respected if there are collisions with the viewport.
@default "bottom"`,defaultValue:{value:"'bottom'",computed:!1}},triggerOffset:{required:!1,tsType:{name:"union",raw:"'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:`Defines the spacing between the dropdown and its trigger.
@default 'compact'`,defaultValue:{value:"'compact'",computed:!1}},preventTriggerFocusOnClose:{required:!1,tsType:{name:"boolean"},description:"Prevents the focus from being set on the trigger when the dropdown is closed."}}};we.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Group",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},heading:{required:!1,tsType:{name:"string"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-group'",computed:!1}}}};he.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-submenu'",computed:!1}}}};ve.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};Me.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subcontent'",computed:!1}}}};_e.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Item",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the item."},textValue:{required:!1,tsType:{name:"string"},description:"The text value of the item that is passed to the onSelect callback."},emphasis:{required:!1,tsType:{name:"union",raw:"'default' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:`The style of the item.
@default "default"`,defaultValue:{value:"'default'",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"Callback that is called when the item is selected."},asChild:{required:!1,tsType:{name:"boolean"},description:`If true, the item props will be passed to the child element.
@default false`,defaultValue:{value:"false",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};Ce.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Slot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-slot'",computed:!1}}}};export{fe as D,me as a,ge as b,_e as c,we as d,he as e,ve as f,Me as g,Uo as h};
