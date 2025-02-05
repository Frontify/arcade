import{j as e}from"./jsx-runtime-BSxFkHFN.js";import{r as l}from"./index-i66itsuO.js";import{e as _}from"./fondue-icons348-COpsOkcC.js";import{R as b,T as w,P as F,C as N,a as q}from"./index-Nz8TJpHF.js";import{a as x,b as R}from"./domUtilities-DGDVwu3_.js";import{u as j,T as C}from"./ThemeProvider-Dxt3MuZn.js";const V="_root_4duv3_6",D="_overlay_4duv3_50",B="_header_4duv3_67",I="_body_4duv3_87",A="_footer_4duv3_105",H="_close_4duv3_125",d={root:V,overlay:D,header:B,body:I,footer:A,close:H},s=({children:t,...a})=>e.jsx(b,{...a,children:t});s.displayName="Flyout.Root";const i=({asChild:t=!0,children:a,"data-test-id":o="fondue-flyout-trigger",...r},n)=>e.jsx(w,{onMouseDown:x,"data-auto-focus-visible":"true","data-auto-focus-trigger":!0,"data-test-id":o,asChild:t,ref:n,...r,children:a});i.displayName="Flyout.Trigger";const u=({align:t="start",maxWidth:a="360px",padding:o="compact",rounded:r="medium",width:n="fit-content",shadow:p="medium","data-test-id":y="fondue-flyout-content",children:h,...v},g)=>{const T=j();return e.jsx(F,{children:e.jsxs(C,{theme:T,children:[e.jsx("div",{className:d.overlay}),e.jsx(N,{style:{"--flyout-max-width":a,"--flyout-width":n},ref:g,align:t,collisionPadding:8,sideOffset:8,className:d.root,"data-flyout-spacing":o,"data-rounded":r,"data-shadow":p,"data-test-id":y,onFocus:R,...v,children:h})]})})};u.displayName="Flyout.Content";const f=({showCloseButton:t,children:a,"data-test-id":o="fondue-flyout-header"},r)=>e.jsxs("div",{"data-test-id":o,ref:r,className:d.header,children:[e.jsx("div",{children:a}),t&&e.jsx(q,{role:"button","data-test-id":`${o}-close`,className:d.close,children:e.jsx(_,{size:20})})]});f.displayName="Flyout.Header";const m=({children:t,"data-test-id":a="fondue-flyout-footer"},o)=>e.jsx("div",{"data-test-id":a,ref:o,className:d.footer,children:t});m.displayName="Flyout.Footer";const c=({children:t,"data-test-id":a="fondue-flyout-body"},o)=>e.jsx("div",{"data-test-id":a,ref:o,"data-flyout-spacing":"compact",className:d.body,children:t});c.displayName="Flyout.Body";const W={Root:s,Trigger:l.forwardRef(i),Content:l.forwardRef(u),Header:l.forwardRef(f),Footer:l.forwardRef(m),Body:l.forwardRef(c)};s.__docgenInfo={description:"",methods:[],displayName:"Flyout.Root",props:{modal:{required:!1,tsType:{name:"boolean"},description:`Disable interaction with the rest of the page
@default false`},open:{required:!1,tsType:{name:"boolean"},description:"The controlled `open` state of the flyout\n@default false"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Event handler called when the `open` state changes"},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"Flyout.Trigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-trigger'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"Flyout.Content",props:{shadow:{required:!1,tsType:{name:"union",raw:"'none' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Add a shadow to the flyout
@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"'none' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Add rounded corners to the flyout
@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Define the prefered side of the flyout. Can be overriden by viewport collisions viewport.
@default "bottom"`},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Define the prefered alignment of the flyout. Can be overriden by viewport collisions viewport.
@default "start"`,defaultValue:{value:"'start'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'tight' | 'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:`Define the padding of the flyout
@default "compact"`,defaultValue:{value:"'compact'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`Define the fixed width of the flyout
@default "fit-content"`,defaultValue:{value:"'fit-content'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:`Define the maximum width of the flyout
@default "360px"`,defaultValue:{value:"'360px'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-content'",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"Flyout.Header",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show a close button in the header
@default false`},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-header'",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"Flyout.Footer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-footer'",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"Flyout.Body",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-body'",computed:!1}}}};export{W as F,u as a,s as b,i as c,f as d,c as e,m as f};
