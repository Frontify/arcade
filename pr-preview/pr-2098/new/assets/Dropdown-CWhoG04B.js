import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{f as Dn}from"./fondue-icons331-DLB-AwW3.js";import{c as w,u as oe}from"./index-DOnKqARA.js";import{u as G,P as E,c as Ne,S as Sn,d as Tn}from"./index-BtCsUTRM.js";import{c as Pe}from"./index-BSNoMcJN.js";import{u as Ee}from"./index-DGaPG0k3.js";import{c as In}from"./index-B0lKOUy8.js";import{u as Nn}from"./index-C8IlRUt1.js";import{c as Oe,A as Pn,D as En,C as On,a as An,R as Ae,P as jn}from"./index-CAR1Fn1S.js";import{h as kn,u as Fn,F as Gn,R as Ln,b as Kn,s as Te}from"./usePreventDropdownOverflow-DisCSAPV.js";import{u as Y}from"./index-DduqEaLY.js";import{P as z}from"./index-C1SWbrhG.js";import{c as je,R as qn,I as Vn}from"./index-BudAUfSk.js";var te=["Enter"," "],Un=["ArrowDown","PageUp","Home"],ke=["ArrowUp","PageDown","End"],Bn=[...Un,...ke],$n={ltr:[...te,"ArrowRight"],rtl:[...te,"ArrowLeft"]},Xn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},L="Menu",[k,Yn,Hn]=In(L),[T,Fe]=Pe(L,[Hn,Oe,je]),K=Oe(),Ge=je(),[Le,D]=T(L),[Wn,q]=T(L),Ke=e=>{const{__scopeMenu:t,open:n=!1,children:o,dir:r,onOpenChange:i,modal:u=!0}=e,c=K(t),[p,g]=a.useState(null),f=a.useRef(!1),d=oe(i),m=Nn(r);return a.useEffect(()=>{const h=()=>{f.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>f.current=!1;return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),s.jsx(Ae,{...c,children:s.jsx(Le,{scope:t,open:n,onOpenChange:d,content:p,onContentChange:g,children:s.jsx(Wn,{scope:t,onClose:a.useCallback(()=>d(!1),[d]),isUsingKeyboardRef:f,dir:m,modal:u,children:o})})})};Ke.displayName=L;var zn="MenuAnchor",re=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=K(n);return s.jsx(Pn,{...r,...o,ref:t})});re.displayName=zn;var ae="MenuPortal",[Zn,qe]=T(ae,{forceMount:void 0}),Ve=e=>{const{__scopeMenu:t,forceMount:n,children:o,container:r}=e,i=D(ae,t);return s.jsx(Zn,{scope:t,forceMount:n,children:s.jsx(z,{present:n||i.open,children:s.jsx(jn,{asChild:!0,container:r,children:o})})})};Ve.displayName=ae;var C="MenuContent",[Jn,se]=T(C),Ue=a.forwardRef((e,t)=>{const n=qe(C,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,i=D(C,e.__scopeMenu),u=q(C,e.__scopeMenu);return s.jsx(k.Provider,{scope:e.__scopeMenu,children:s.jsx(z,{present:o||i.open,children:s.jsx(k.Slot,{scope:e.__scopeMenu,children:u.modal?s.jsx(Qn,{...r,ref:t}):s.jsx(et,{...r,ref:t})})})})}),Qn=a.forwardRef((e,t)=>{const n=D(C,e.__scopeMenu),o=a.useRef(null),r=G(t,o);return a.useEffect(()=>{const i=o.current;if(i)return kn(i)},[]),s.jsx(ie,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:w(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),et=a.forwardRef((e,t)=>{const n=D(C,e.__scopeMenu);return s.jsx(ie,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),ie=a.forwardRef((e,t)=>{const{__scopeMenu:n,loop:o=!1,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:u,disableOutsidePointerEvents:c,onEntryFocus:p,onEscapeKeyDown:g,onPointerDownOutside:f,onFocusOutside:d,onInteractOutside:m,onDismiss:h,disableOutsideScroll:v,...S}=e,I=D(C,n),O=q(C,n),V=K(n),U=Ge(n),xe=Yn(n),[_n,Re]=a.useState(null),B=a.useRef(null),Cn=G(t,B,I.onContentChange),$=a.useRef(0),X=a.useRef(""),xn=a.useRef(0),J=a.useRef(null),be=a.useRef("right"),Q=a.useRef(0),Rn=v?Ln:a.Fragment,bn=v?{as:Sn,allowPinchZoom:!0}:void 0,yn=l=>{var P,De;const _=X.current+l,x=xe().filter(R=>!R.disabled),y=document.activeElement,ee=(P=x.find(R=>R.ref.current===y))==null?void 0:P.textValue,ne=x.map(R=>R.textValue),ye=pt(ne,_,ee),A=(De=x.find(R=>R.textValue===ye))==null?void 0:De.ref.current;(function R(Se){X.current=Se,window.clearTimeout($.current),Se!==""&&($.current=window.setTimeout(()=>R(""),1e3))})(_),A&&setTimeout(()=>A.focus())};a.useEffect(()=>()=>window.clearTimeout($.current),[]),Fn();const N=a.useCallback(l=>{var x,y;return be.current===((x=J.current)==null?void 0:x.side)&&mt(l,(y=J.current)==null?void 0:y.area)},[]);return s.jsx(Jn,{scope:n,searchRef:X,onItemEnter:a.useCallback(l=>{N(l)&&l.preventDefault()},[N]),onItemLeave:a.useCallback(l=>{var _;N(l)||((_=B.current)==null||_.focus(),Re(null))},[N]),onTriggerLeave:a.useCallback(l=>{N(l)&&l.preventDefault()},[N]),pointerGraceTimerRef:xn,onPointerGraceIntentChange:a.useCallback(l=>{J.current=l},[]),children:s.jsx(Rn,{...bn,children:s.jsx(Gn,{asChild:!0,trapped:r,onMountAutoFocus:w(i,l=>{var _;l.preventDefault(),(_=B.current)==null||_.focus({preventScroll:!0})}),onUnmountAutoFocus:u,children:s.jsx(En,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:g,onPointerDownOutside:f,onFocusOutside:d,onInteractOutside:m,onDismiss:h,children:s.jsx(qn,{asChild:!0,...U,dir:O.dir,orientation:"vertical",loop:o,currentTabStopId:_n,onCurrentTabStopIdChange:Re,onEntryFocus:w(p,l=>{O.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx(On,{role:"menu","aria-orientation":"vertical","data-state":sn(I.open),"data-radix-menu-content":"",dir:O.dir,...V,...S,ref:Cn,style:{outline:"none",...S.style},onKeyDown:w(S.onKeyDown,l=>{const x=l.target.closest("[data-radix-menu-content]")===l.currentTarget,y=l.ctrlKey||l.altKey||l.metaKey,ee=l.key.length===1;x&&(l.key==="Tab"&&l.preventDefault(),!y&&ee&&yn(l.key));const ne=B.current;if(l.target!==ne||!Bn.includes(l.key))return;l.preventDefault();const A=xe().filter(P=>!P.disabled).map(P=>P.ref.current);ke.includes(l.key)&&A.reverse(),ct(A)}),onBlur:w(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout($.current),X.current="")}),onPointerMove:w(e.onPointerMove,F(l=>{const _=l.target,x=Q.current!==l.clientX;if(l.currentTarget.contains(_)&&x){const y=l.clientX>Q.current?"right":"left";be.current=y,Q.current=l.clientX}}))})})})})})})});Ue.displayName=C;var nt="MenuGroup",de=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(E.div,{role:"group",...o,ref:t})});de.displayName=nt;var tt="MenuLabel",Be=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(E.div,{...o,ref:t})});Be.displayName=tt;var H="MenuItem",Ie="menu.itemSelect",Z=a.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:o,...r}=e,i=a.useRef(null),u=q(H,e.__scopeMenu),c=se(H,e.__scopeMenu),p=G(t,i),g=a.useRef(!1),f=()=>{const d=i.current;if(!n&&d){const m=new CustomEvent(Ie,{bubbles:!0,cancelable:!0});d.addEventListener(Ie,h=>o==null?void 0:o(h),{once:!0}),Tn(d,m),m.defaultPrevented?g.current=!1:u.onClose()}};return s.jsx($e,{...r,ref:p,disabled:n,onClick:w(e.onClick,f),onPointerDown:d=>{var m;(m=e.onPointerDown)==null||m.call(e,d),g.current=!0},onPointerUp:w(e.onPointerUp,d=>{var m;g.current||(m=d.currentTarget)==null||m.click()}),onKeyDown:w(e.onKeyDown,d=>{const m=c.searchRef.current!=="";n||m&&d.key===" "||te.includes(d.key)&&(d.currentTarget.click(),d.preventDefault())})})});Z.displayName=H;var $e=a.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:o=!1,textValue:r,...i}=e,u=se(H,n),c=Ge(n),p=a.useRef(null),g=G(t,p),[f,d]=a.useState(!1),[m,h]=a.useState("");return a.useEffect(()=>{const v=p.current;v&&h((v.textContent??"").trim())},[i.children]),s.jsx(k.ItemSlot,{scope:n,disabled:o,textValue:r??m,children:s.jsx(Vn,{asChild:!0,...c,focusable:!o,children:s.jsx(E.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...i,ref:g,onPointerMove:w(e.onPointerMove,F(v=>{o?u.onItemLeave(v):(u.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:w(e.onPointerLeave,F(v=>u.onItemLeave(v))),onFocus:w(e.onFocus,()=>d(!0)),onBlur:w(e.onBlur,()=>d(!1))})})})}),ot="MenuCheckboxItem",Xe=a.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:o,...r}=e;return s.jsx(Ze,{scope:e.__scopeMenu,checked:n,children:s.jsx(Z,{role:"menuitemcheckbox","aria-checked":W(n)?"mixed":n,...r,ref:t,"data-state":le(n),onSelect:w(r.onSelect,()=>o==null?void 0:o(W(n)?!0:!n),{checkForDefaultPrevented:!1})})})});Xe.displayName=ot;var Ye="MenuRadioGroup",[rt,at]=T(Ye,{value:void 0,onValueChange:()=>{}}),He=a.forwardRef((e,t)=>{const{value:n,onValueChange:o,...r}=e,i=oe(o);return s.jsx(rt,{scope:e.__scopeMenu,value:n,onValueChange:i,children:s.jsx(de,{...r,ref:t})})});He.displayName=Ye;var We="MenuRadioItem",ze=a.forwardRef((e,t)=>{const{value:n,...o}=e,r=at(We,e.__scopeMenu),i=n===r.value;return s.jsx(Ze,{scope:e.__scopeMenu,checked:i,children:s.jsx(Z,{role:"menuitemradio","aria-checked":i,...o,ref:t,"data-state":le(i),onSelect:w(o.onSelect,()=>{var u;return(u=r.onValueChange)==null?void 0:u.call(r,n)},{checkForDefaultPrevented:!1})})})});ze.displayName=We;var ue="MenuItemIndicator",[Ze,st]=T(ue,{checked:!1}),Je=a.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:o,...r}=e,i=st(ue,n);return s.jsx(z,{present:o||W(i.checked)||i.checked===!0,children:s.jsx(E.span,{...r,ref:t,"data-state":le(i.checked)})})});Je.displayName=ue;var it="MenuSeparator",Qe=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e;return s.jsx(E.div,{role:"separator","aria-orientation":"horizontal",...o,ref:t})});Qe.displayName=it;var dt="MenuArrow",en=a.forwardRef((e,t)=>{const{__scopeMenu:n,...o}=e,r=K(n);return s.jsx(An,{...r,...o,ref:t})});en.displayName=dt;var ce="MenuSub",[ut,nn]=T(ce),tn=e=>{const{__scopeMenu:t,children:n,open:o=!1,onOpenChange:r}=e,i=D(ce,t),u=K(t),[c,p]=a.useState(null),[g,f]=a.useState(null),d=oe(r);return a.useEffect(()=>(i.open===!1&&d(!1),()=>d(!1)),[i.open,d]),s.jsx(Ae,{...u,children:s.jsx(Le,{scope:t,open:o,onOpenChange:d,content:g,onContentChange:f,children:s.jsx(ut,{scope:t,contentId:Y(),triggerId:Y(),trigger:c,onTriggerChange:p,children:n})})})};tn.displayName=ce;var j="MenuSubTrigger",on=a.forwardRef((e,t)=>{const n=D(j,e.__scopeMenu),o=q(j,e.__scopeMenu),r=nn(j,e.__scopeMenu),i=se(j,e.__scopeMenu),u=a.useRef(null),{pointerGraceTimerRef:c,onPointerGraceIntentChange:p}=i,g={__scopeMenu:e.__scopeMenu},f=a.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return a.useEffect(()=>f,[f]),a.useEffect(()=>{const d=c.current;return()=>{window.clearTimeout(d),p(null)}},[c,p]),s.jsx(re,{asChild:!0,...g,children:s.jsx($e,{id:r.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":r.contentId,"data-state":sn(n.open),...e,ref:Ne(t,r.onTriggerChange),onClick:d=>{var m;(m=e.onClick)==null||m.call(e,d),!(e.disabled||d.defaultPrevented)&&(d.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:w(e.onPointerMove,F(d=>{i.onItemEnter(d),!d.defaultPrevented&&!e.disabled&&!n.open&&!u.current&&(i.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:w(e.onPointerLeave,F(d=>{var h,v;f();const m=(h=n.content)==null?void 0:h.getBoundingClientRect();if(m){const S=(v=n.content)==null?void 0:v.dataset.side,I=S==="right",O=I?-5:5,V=m[I?"left":"right"],U=m[I?"right":"left"];i.onPointerGraceIntentChange({area:[{x:d.clientX+O,y:d.clientY},{x:V,y:m.top},{x:U,y:m.top},{x:U,y:m.bottom},{x:V,y:m.bottom}],side:S}),window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(d),d.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:w(e.onKeyDown,d=>{var h;const m=i.searchRef.current!=="";e.disabled||m&&d.key===" "||$n[o.dir].includes(d.key)&&(n.onOpenChange(!0),(h=n.content)==null||h.focus(),d.preventDefault())})})})});on.displayName=j;var rn="MenuSubContent",an=a.forwardRef((e,t)=>{const n=qe(C,e.__scopeMenu),{forceMount:o=n.forceMount,...r}=e,i=D(C,e.__scopeMenu),u=q(C,e.__scopeMenu),c=nn(rn,e.__scopeMenu),p=a.useRef(null),g=G(t,p);return s.jsx(k.Provider,{scope:e.__scopeMenu,children:s.jsx(z,{present:o||i.open,children:s.jsx(k.Slot,{scope:e.__scopeMenu,children:s.jsx(ie,{id:c.contentId,"aria-labelledby":c.triggerId,...r,ref:g,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var d;u.isUsingKeyboardRef.current&&((d=p.current)==null||d.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:w(e.onFocusOutside,f=>{f.target!==c.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:w(e.onEscapeKeyDown,f=>{u.onClose(),f.preventDefault()}),onKeyDown:w(e.onKeyDown,f=>{var h;const d=f.currentTarget.contains(f.target),m=Xn[u.dir].includes(f.key);d&&m&&(i.onOpenChange(!1),(h=c.trigger)==null||h.focus(),f.preventDefault())})})})})})});an.displayName=rn;function sn(e){return e?"open":"closed"}function W(e){return e==="indeterminate"}function le(e){return W(e)?"indeterminate":e?"checked":"unchecked"}function ct(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function lt(e,t){return e.map((n,o)=>e[(t+o)%e.length])}function pt(e,t,n){const r=t.length>1&&Array.from(t).every(g=>g===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let u=lt(e,Math.max(i,0));r.length===1&&(u=u.filter(g=>g!==n));const p=u.find(g=>g.toLowerCase().startsWith(r.toLowerCase()));return p!==n?p:void 0}function ft(e,t){const{x:n,y:o}=e;let r=!1;for(let i=0,u=t.length-1;i<t.length;u=i++){const c=t[i].x,p=t[i].y,g=t[u].x,f=t[u].y;p>o!=f>o&&n<(g-c)*(o-p)/(f-p)+c&&(r=!r)}return r}function mt(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return ft(n,t)}function F(e){return t=>t.pointerType==="mouse"?e(t):void 0}var gt=Ke,wt=re,vt=Ve,ht=Ue,Mt=de,_t=Be,Ct=Z,xt=Xe,Rt=He,bt=ze,yt=Je,Dt=Qe,St=en,Tt=tn,It=on,Nt=an,pe="DropdownMenu",[Pt,Fo]=Pe(pe,[Fe]),M=Fe(),[Et,dn]=Pt(pe),un=e=>{const{__scopeDropdownMenu:t,children:n,dir:o,open:r,defaultOpen:i,onOpenChange:u,modal:c=!0}=e,p=M(t),g=a.useRef(null),[f=!1,d]=Ee({prop:r,defaultProp:i,onChange:u});return s.jsx(Et,{scope:t,triggerId:Y(),triggerRef:g,contentId:Y(),open:f,onOpenChange:d,onOpenToggle:a.useCallback(()=>d(m=>!m),[d]),modal:c,children:s.jsx(gt,{...p,open:f,onOpenChange:d,dir:o,modal:c,children:n})})};un.displayName=pe;var cn="DropdownMenuTrigger",ln=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:o=!1,...r}=e,i=dn(cn,n),u=M(n);return s.jsx(wt,{asChild:!0,...u,children:s.jsx(E.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...r,ref:Ne(t,i.triggerRef),onPointerDown:w(e.onPointerDown,c=>{!o&&c.button===0&&c.ctrlKey===!1&&(i.onOpenToggle(),i.open||c.preventDefault())}),onKeyDown:w(e.onKeyDown,c=>{o||(["Enter"," "].includes(c.key)&&i.onOpenToggle(),c.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(c.key)&&c.preventDefault())})})})});ln.displayName=cn;var Ot="DropdownMenuPortal",pn=e=>{const{__scopeDropdownMenu:t,...n}=e,o=M(t);return s.jsx(vt,{...o,...n})};pn.displayName=Ot;var fn="DropdownMenuContent",mn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=dn(fn,n),i=M(n),u=a.useRef(!1);return s.jsx(ht,{id:r.contentId,"aria-labelledby":r.triggerId,...i,...o,ref:t,onCloseAutoFocus:w(e.onCloseAutoFocus,c=>{var p;u.current||(p=r.triggerRef.current)==null||p.focus(),u.current=!1,c.preventDefault()}),onInteractOutside:w(e.onInteractOutside,c=>{const p=c.detail.originalEvent,g=p.button===0&&p.ctrlKey===!0,f=p.button===2||g;(!r.modal||f)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});mn.displayName=fn;var At="DropdownMenuGroup",gn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Mt,{...r,...o,ref:t})});gn.displayName=At;var jt="DropdownMenuLabel",kt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(_t,{...r,...o,ref:t})});kt.displayName=jt;var Ft="DropdownMenuItem",wn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Ct,{...r,...o,ref:t})});wn.displayName=Ft;var Gt="DropdownMenuCheckboxItem",Lt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(xt,{...r,...o,ref:t})});Lt.displayName=Gt;var Kt="DropdownMenuRadioGroup",qt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Rt,{...r,...o,ref:t})});qt.displayName=Kt;var Vt="DropdownMenuRadioItem",Ut=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(bt,{...r,...o,ref:t})});Ut.displayName=Vt;var Bt="DropdownMenuItemIndicator",$t=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(yt,{...r,...o,ref:t})});$t.displayName=Bt;var Xt="DropdownMenuSeparator",Yt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Dt,{...r,...o,ref:t})});Yt.displayName=Xt;var Ht="DropdownMenuArrow",Wt=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(St,{...r,...o,ref:t})});Wt.displayName=Ht;var zt=e=>{const{__scopeDropdownMenu:t,children:n,open:o,onOpenChange:r,defaultOpen:i}=e,u=M(t),[c=!1,p]=Ee({prop:o,defaultProp:i,onChange:r});return s.jsx(Tt,{...u,open:c,onOpenChange:p,children:n})},Zt="DropdownMenuSubTrigger",vn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(It,{...r,...o,ref:t})});vn.displayName=Zt;var Jt="DropdownMenuSubContent",hn=a.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...o}=e,r=M(n);return s.jsx(Nt,{...r,...o,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});hn.displayName=Jt;var Qt=un,eo=ln,Mn=pn,no=mn,to=gn,oo=wn,ro=zt,ao=vn,so=hn;const io="_content_gavk2_5",uo="_subContent_gavk2_6",co="_item_gavk2_19",lo="_subTrigger_gavk2_19",po="_itemContent_gavk2_96",fo="_subMenuIndicator_gavk2_107",mo="_group_gavk2_113",go="_slot_gavk2_120",b={content:io,subContent:uo,item:co,subTrigger:lo,itemContent:po,subMenuIndicator:fo,group:mo,slot:go},fe=({children:e,open:t,onOpenChange:n,"data-test-id":o="fondue-dropdown"})=>s.jsx(Qt,{open:t,onOpenChange:n,"data-test-id":o,children:e});fe.displayName="Dropdown.Root";const me=({asChild:e=!0,children:t,"data-test-id":n="fondue-dropdown-trigger"},o)=>s.jsx(eo,{asChild:e,"data-test-id":n,ref:o,children:t});me.displayName="Dropdown.Trigger";const ge=({onOpen:e,onClose:t,side:n="bottom",padding:o="comfortable",align:r="start",children:i,"data-test-id":u="fondue-dropdown-content"},c)=>{const p=a.useRef(null),g=a.useRef(!1),{setMaxHeight:f}=Kn(p);return s.jsx(Mn,{children:s.jsx(no,{align:r,collisionPadding:8,sideOffset:8,side:n,className:b.content,"data-padding":o,"data-test-id":u,ref:p,onCloseAutoFocus:()=>{Te(p,c),t&&t(),g.current=!1},onFocus:()=>{g.current||(f(),Te(p,c),e&&e(),g.current=!0)},children:i})})};ge.displayName="Dropdown.Content";const we=({children:e,"data-test-id":t="fondue-dropdown-group"},n)=>s.jsx(to,{className:b.group,"data-test-id":t,ref:n,children:e});we.displayName="Dropdown.Group";const ve=({children:e,"data-test-id":t="fondue-dropdown-submenu"})=>s.jsx(ro,{"data-test-id":t,children:e});ve.displayName="Dropdown.SubMenu";const he=({children:e,"data-test-id":t="fondue-dropdown-subtrigger"},n)=>s.jsxs(ao,{className:b.subTrigger,"data-test-id":t,ref:n,children:[s.jsx("div",{className:b.itemContent,children:e}),s.jsx(Dn,{className:b.subMenuIndicator,size:16})]});he.displayName="Dropdown.SubTrigger";const Me=({padding:e="comfortable",children:t,"data-test-id":n="fondue-dropdown-subcontent"},o)=>s.jsx(Mn,{children:s.jsx(so,{className:b.subContent,"data-padding":e,"data-test-id":n,ref:o,children:t})});Me.displayName="Dropdown.SubContent";const _e=({children:e,disabled:t,textValue:n,onSelect:o,emphasis:r="default","data-test-id":i="fondue-dropdown-subtrigger",...u},c)=>s.jsx(oo,{onSelect:o,className:b.item,textValue:n,"data-test-id":i,"data-emphasis":r,ref:c,disabled:t,...u,children:s.jsx("div",{className:b.itemContent,children:e})});_e.displayName="Dropdown.Item";const Ce=({children:e,name:t,"data-test-id":n="fondue-dropdown-slot"},o)=>s.jsx("div",{"data-name":t,className:b.slot,"data-test-id":n,ref:o,children:e});Ce.displayName="Dropdown.Slot";const wo=a.forwardRef(me),vo=a.forwardRef(ge),ho=a.forwardRef(we),Mo=a.forwardRef(he),_o=a.forwardRef(Me),Co=a.forwardRef(_e),xo=a.forwardRef(Ce),Go={Root:fe,Trigger:wo,Content:vo,Group:ho,SubMenu:ve,SubTrigger:Mo,SubContent:_o,Item:Co,Slot:xo};fe.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Root",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"Controls the open state of the dropdown."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback that is called when the open state of the dropdown changes."},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown'",computed:!1}}}};me.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Trigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-trigger'",computed:!1}}}};ge.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Content",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-content'",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},padding:{required:!1,tsType:{name:"union",raw:"'comfortable' | 'compact'",elements:[{name:"literal",value:"'comfortable'"},{name:"literal",value:"'compact'"}]},description:`The vertical padding around each dropdown item.
@default "comfortable"`,defaultValue:{value:"'comfortable'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Defines the alignment of the dropdown.
@default "start"`,defaultValue:{value:"'start'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Defines the preferred side of the dropdown. It will not be respected if there are collisions with the viewport.
@default "bottom"`,defaultValue:{value:"'bottom'",computed:!1}}}};we.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Group",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-group'",computed:!1}}}};ve.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubMenu",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-submenu'",computed:!1}}}};he.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};Me.__docgenInfo={description:"",methods:[],displayName:"Dropdown.SubContent",props:{padding:{required:!1,tsType:{name:"union",raw:"'comfortable' | 'compact'",elements:[{name:"literal",value:"'comfortable'"},{name:"literal",value:"'compact'"}]},description:`The vertical padding around each dropdown item.
@default "comfortable"`,defaultValue:{value:"'comfortable'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subcontent'",computed:!1}}}};_e.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Item",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the item."},textValue:{required:!1,tsType:{name:"string"},description:"The text value of the item that is passed to the onSelect callback."},emphasis:{required:!1,tsType:{name:"union",raw:"'default' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:`The style of the item.
@default "default"`,defaultValue:{value:"'default'",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:"Callback that is called when the item is selected."},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-subtrigger'",computed:!1}}}};Ce.__docgenInfo={description:"",methods:[],displayName:"Dropdown.Slot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dropdown-slot'",computed:!1}}}};export{fe as D,me as a,ge as b,_e as c,we as d,ve as e,he as f,Me as g,Go as h};
