import{j as o}from"./jsx-runtime-BSxFkHFN.js";import{r as s}from"./index-i66itsuO.js";import{f as se}from"./fondue-icons348-g6CPHV6m.js";import{c as h}from"./index-BNYVQE02.js";import{u as C,S as le}from"./index-CdcT0Fdx.js";import{c as de,a as ce}from"./index-BwxsjnLo.js";import{u as b}from"./index-BJaWHrbV.js";import{u as ue}from"./index-P4w4wmP2.js";import{D as fe,P as pe}from"./index-CunL6ReG.js";import{R as me,h as ge,u as he,F as ye}from"./Combination-BF38urBZ.js";import{P as T}from"./index-BEh1LdRJ.js";import{P as y}from"./index-kGoNTBW-.js";import{u as ve}from"./useSyncRefs-DKJtHqhc.js";import{a as De,b as xe}from"./domUtilities-DGDVwu3_.js";import{u as _e,T as be}from"./ThemeProvider-Bg3D_IMF.js";var N="Dialog",[k,it]=de(N),[Ce,c]=k(N),B=e=>{const{__scopeDialog:t,children:a,open:i,defaultOpen:n,onOpenChange:r,modal:l=!0}=e,d=s.useRef(null),u=s.useRef(null),[f=!1,g]=ue({prop:i,defaultProp:n,onChange:r});return o.jsx(Ce,{scope:t,triggerRef:d,contentRef:u,contentId:b(),titleId:b(),descriptionId:b(),open:f,onOpenChange:g,onOpenToggle:s.useCallback(()=>g(D=>!D),[g]),modal:l,children:a})};B.displayName=N;var L="DialogTrigger",G=s.forwardRef((e,t)=>{const{__scopeDialog:a,...i}=e,n=c(L,a),r=C(t,n.triggerRef);return o.jsx(y.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":j(n.open),...i,ref:r,onClick:h(e.onClick,n.onOpenToggle)})});G.displayName=L;var R="DialogPortal",[Te,H]=k(R,{forceMount:void 0}),U=e=>{const{__scopeDialog:t,forceMount:a,children:i,container:n}=e,r=c(R,t);return o.jsx(Te,{scope:t,forceMount:a,children:s.Children.map(i,l=>o.jsx(T,{present:a||r.open,children:o.jsx(pe,{asChild:!0,container:n,children:l})}))})};U.displayName=R;var v="DialogOverlay",z=s.forwardRef((e,t)=>{const a=H(v,e.__scopeDialog),{forceMount:i=a.forceMount,...n}=e,r=c(v,e.__scopeDialog);return r.modal?o.jsx(T,{present:i||r.open,children:o.jsx(Ne,{...n,ref:t})}):null});z.displayName=v;var Ne=s.forwardRef((e,t)=>{const{__scopeDialog:a,...i}=e,n=c(v,a);return o.jsx(me,{as:le,allowPinchZoom:!0,shards:[n.contentRef],children:o.jsx(y.div,{"data-state":j(n.open),...i,ref:t,style:{pointerEvents:"auto",...i.style}})})}),p="DialogContent",K=s.forwardRef((e,t)=>{const a=H(p,e.__scopeDialog),{forceMount:i=a.forceMount,...n}=e,r=c(p,e.__scopeDialog);return o.jsx(T,{present:i||r.open,children:r.modal?o.jsx(Re,{...n,ref:t}):o.jsx(we,{...n,ref:t})})});K.displayName=p;var Re=s.forwardRef((e,t)=>{const a=c(p,e.__scopeDialog),i=s.useRef(null),n=C(t,a.contentRef,i);return s.useEffect(()=>{const r=i.current;if(r)return ge(r)},[]),o.jsx(Y,{...e,ref:n,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(e.onCloseAutoFocus,r=>{var l;r.preventDefault(),(l=a.triggerRef.current)==null||l.focus()}),onPointerDownOutside:h(e.onPointerDownOutside,r=>{const l=r.detail.originalEvent,d=l.button===0&&l.ctrlKey===!0;(l.button===2||d)&&r.preventDefault()}),onFocusOutside:h(e.onFocusOutside,r=>r.preventDefault())})}),we=s.forwardRef((e,t)=>{const a=c(p,e.__scopeDialog),i=s.useRef(!1),n=s.useRef(!1);return o.jsx(Y,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var l,d;(l=e.onCloseAutoFocus)==null||l.call(e,r),r.defaultPrevented||(i.current||(d=a.triggerRef.current)==null||d.focus(),r.preventDefault()),i.current=!1,n.current=!1},onInteractOutside:r=>{var u,f;(u=e.onInteractOutside)==null||u.call(e,r),r.defaultPrevented||(i.current=!0,r.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const l=r.target;((f=a.triggerRef.current)==null?void 0:f.contains(l))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&n.current&&r.preventDefault()}})}),Y=s.forwardRef((e,t)=>{const{__scopeDialog:a,trapFocus:i,onOpenAutoFocus:n,onCloseAutoFocus:r,...l}=e,d=c(p,a),u=s.useRef(null),f=C(t,u);return he(),o.jsxs(o.Fragment,{children:[o.jsx(ye,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:n,onUnmountAutoFocus:r,children:o.jsx(fe,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":j(d.open),...l,ref:f,onDismiss:()=>d.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(je,{titleId:d.titleId}),o.jsx(Ee,{contentRef:u,descriptionId:d.descriptionId})]})]})}),w="DialogTitle",Z=s.forwardRef((e,t)=>{const{__scopeDialog:a,...i}=e,n=c(w,a);return o.jsx(y.h2,{id:n.titleId,...i,ref:t})});Z.displayName=w;var J="DialogDescription",Q=s.forwardRef((e,t)=>{const{__scopeDialog:a,...i}=e,n=c(J,a);return o.jsx(y.p,{id:n.descriptionId,...i,ref:t})});Q.displayName=J;var X="DialogClose",ee=s.forwardRef((e,t)=>{const{__scopeDialog:a,...i}=e,n=c(X,a);return o.jsx(y.button,{type:"button",...i,ref:t,onClick:h(e.onClick,()=>n.onOpenChange(!1))})});ee.displayName=X;function j(e){return e?"open":"closed"}var te="DialogTitleWarning",[st,ae]=ce(te,{contentName:p,titleName:w,docsSlug:"dialog"}),je=({titleId:e})=>{const t=ae(te),a=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(a))},[a,e]),null},Ie="DialogDescriptionWarning",Ee=({contentRef:e,descriptionId:t})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ae(Ie).contentName}}.`;return s.useEffect(()=>{var r;const n=(r=e.current)==null?void 0:r.getAttribute("aria-describedby");t&&n&&(document.getElementById(t)||console.warn(i))},[i,e,t]),null},qe=B,Pe=G,Oe=U,Ae=z,Fe=K,Se=Z,Me=Q,oe=ee;const Ve="_content_2dhca_6",We="_header_2dhca_51",$e="_footer_2dhca_52",ke="_body_2dhca_53",Be="_underlay_2dhca_177",Le="_sideContent_2dhca_190",m={content:Ve,header:We,footer:$e,body:ke,underlay:Be,sideContent:Le},ne=s.createContext({isModal:!1}),I=({children:e,...t})=>o.jsx(ne.Provider,{value:{isModal:t.modal??!1},children:o.jsx(qe,{...t,children:e})});I.displayName="Dialog.Root";const E=({asChild:e=!0,children:t,"data-test-id":a="fondue-dialog-trigger",...i},n)=>o.jsx(Pe,{onMouseDown:De,"data-auto-focus-visible":"true","data-auto-focus-trigger":!0,"data-test-id":a,asChild:e,ref:n,...i,children:t});E.displayName="Dialog.Trigger";const Ge=({children:e,showUnderlay:t})=>{const{isModal:a}=s.useContext(ne);return a?o.jsx(Ae,{"data-visible":t,className:m.underlay,children:e}):o.jsx("div",{className:m.underlay,"data-visible":t,children:e})},q=({maxWidth:e="800px",minWidth:t="400px",minHeight:a="200px",padding:i="compact",verticalAlign:n="center","data-test-id":r="fondue-dialog-content",showUnderlay:l=!1,rounded:d=!0,children:u,...f},g)=>{const D=_e(),x=s.useRef(null);ve(x,g);const re=ie=>{var $;ie.preventDefault();const _=($=x.current)==null?void 0:$.querySelector('[data-dialog-layout-component="body"]'),W=_==null?void 0:_.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');W instanceof HTMLElement&&W.focus()};return o.jsx(Oe,{children:o.jsx(be,{theme:D,children:o.jsx(Ge,{showUnderlay:l,children:o.jsx(Fe,{style:{"--dialog-max-width":e,"--dialog-min-width":t,"--dialog-min-height":a},ref:x,className:m.content,onFocus:xe,onOpenAutoFocus:re,"data-dialog-padding":i,"data-dialog-rounded":d,"data-test-id":r,"data-dialog-vertical-align":n,...f,children:u})})})})};q.displayName="Dialog.Content";const P=({padding:e,showBorder:t=!0,showCloseButton:a=!0,children:i,"data-test-id":n="fondue-dialog-header"},r)=>o.jsxs("div",{"data-test-id":n,ref:r,className:m.header,"data-dialog-header-padding":e,"data-show-border":t,"data-dialog-layout-component":"header",children:[o.jsx("div",{children:i}),a&&o.jsx(oe,{role:"button","data-test-id":`${n}-close`,className:"tw-cursor-pointer",children:o.jsx(se,{size:20})})]});P.displayName="Dialog.Header";const O=({padding:e,showBorder:t=!0,children:a,"data-test-id":i="fondue-dialog-footer"},n)=>o.jsx("div",{"data-test-id":i,ref:n,className:m.footer,"data-dialog-footer-padding":e,"data-show-border":t,"data-dialog-layout-component":"footer",children:a});O.displayName="Dialog.Footer";const A=({padding:e,children:t,"data-test-id":a="fondue-dialog-body"},i)=>o.jsx("div",{"data-test-id":a,ref:i,className:m.body,"data-dialog-body-padding":e,"data-dialog-layout-component":"body",children:t});A.displayName="Dialog.Body";const F=({children:e,"data-test-id":t="fondue-dialog-side-content"},a)=>o.jsx("div",{"data-test-id":t,ref:a,className:m.sideContent,"data-dialog-layout-component":!0,children:e});F.displayName="Dialog.SideContent";const S=({children:e})=>o.jsx(oe,{asChild:!0,children:e});S.displayName="Dialog.Close";const M=({children:e,asChild:t})=>o.jsx(Se,{asChild:t,children:e});M.displayName="Dialog.Title";const V=({children:e,asChild:t})=>o.jsx(Me,{asChild:t,children:e});V.displayName="Dialog.Description";const lt={Root:I,Title:M,Description:V,Close:S,Trigger:s.forwardRef(E),Content:s.forwardRef(q),Header:s.forwardRef(P),Footer:s.forwardRef(O),Body:s.forwardRef(A),SideContent:s.forwardRef(F)};I.__docgenInfo={description:"",methods:[],displayName:"Dialog.Root",props:{modal:{required:!1,tsType:{name:"boolean"},description:`Disable interaction with the rest of the page
@default false`},open:{required:!1,tsType:{name:"boolean"},description:"The controlled `open` state of the dialog\n@default false"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Event handler called when the `open` state changes"},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"Dialog.Trigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dialog-trigger'",computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"Dialog.Content",props:{rounded:{required:!1,tsType:{name:"boolean"},description:`Add rounded corners to the dialog
@default true`,defaultValue:{value:"true",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'tight' | 'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:`Define the padding of the dialog
@default "compact"`,defaultValue:{value:"'compact'",computed:!1}},verticalAlign:{required:!1,tsType:{name:"union",raw:"'top' | 'center'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'center'"}]},description:`The vertical alignment of the divider
@default "center"`,defaultValue:{value:"'center'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:`Define a maximum width for the dialog
@default "800px"`,defaultValue:{value:"'800px'",computed:!1}},minWidth:{required:!1,tsType:{name:"string"},description:`Define a minimum width for the dialog
@default "400px"`,defaultValue:{value:"'400px'",computed:!1}},minHeight:{required:!1,tsType:{name:"string"},description:`Define a minimum height for the dialog
@default "200px"`,defaultValue:{value:"'200px'",computed:!1}},showUnderlay:{required:!1,tsType:{name:"boolean"},description:`Show a dark underlay behind the dialog
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dialog-content'",computed:!1}}}};P.__docgenInfo={description:"",methods:[],displayName:"Dialog.Header",props:{padding:{required:!1,tsType:{name:"union",raw:"'none' | 'tight' | 'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:"Define the padding for the dialog header"},showBorder:{required:!1,tsType:{name:"boolean"},description:`Show a border at the bottom of the header
@default true`,defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show a close button in the header
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dialog-header'",computed:!1}}}};O.__docgenInfo={description:"",methods:[],displayName:"Dialog.Footer",props:{padding:{required:!1,tsType:{name:"union",raw:"'none' | 'tight' | 'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:"Define the padding for the dialog footer"},showBorder:{required:!1,tsType:{name:"boolean"},description:`Show a border at the top of the footer
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dialog-footer'",computed:!1}}}};A.__docgenInfo={description:"",methods:[],displayName:"Dialog.Body",props:{padding:{required:!1,tsType:{name:"union",raw:"'none' | 'tight' | 'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:"Define the padding for the dialog body"},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dialog-body'",computed:!1}}}};F.__docgenInfo={description:"",methods:[],displayName:"Dialog.SideContent",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-dialog-side-content'",computed:!1}}}};S.__docgenInfo={description:"",methods:[],displayName:"Dialog.Close",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};M.__docgenInfo={description:"",methods:[],displayName:"Dialog.Title",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};V.__docgenInfo={description:"",methods:[],displayName:"Dialog.Description",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},asChild:{required:!1,tsType:{name:"boolean"},description:""}}};export{q as D,I as a,E as b,F as c,P as d,A as e,M as f,V as g,S as h,lt as i};
