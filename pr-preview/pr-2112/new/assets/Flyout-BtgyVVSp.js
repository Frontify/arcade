import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{e as T}from"./fondue-icons332-DEoTVFGI.js";import{R as _,T as q,P as N,C as x,a as R}from"./index-DqFy5qNO.js";import{a as C,b as j,s as h,c as V}from"./usePreventDropdownOverflow-DisCSAPV.js";const D="_root_1elpk_5",A="_header_1elpk_56",k="_body_1elpk_76",B="_footer_1elpk_94",H="_close_1elpk_114",d={root:D,header:A,body:k,footer:B,close:H},i=({children:e,...t})=>o.jsx(_,{...t,children:e});i.displayName="Flyout.Root";const u=({asChild:e=!0,children:t,"data-test-id":a="fondue-flyout-trigger",...n},r)=>o.jsx(q,{onMouseDown:C,"data-auto-focus-visible":"true","data-auto-focus-trigger":!0,"data-test-id":a,asChild:e,ref:r,...n,children:t});u.displayName="Flyout.Trigger";const f=({align:e="start",maxWidth:t="360px",padding:a="compact",rounded:n="medium",width:r="fit-content",shadow:g="medium","data-test-id":v="fondue-flyout-content",children:w,...b},y)=>{const s=l.useRef(null),{setMaxHeight:F}=j(s);return o.jsx(N,{children:o.jsx(x,{style:{"--flyout-max-width":t,"--flyout-width":r},ref:s,align:e,collisionPadding:8,sideOffset:8,onOpenAutoFocus:()=>{F(),h(s,y)},onCloseAutoFocus:()=>{h(s,y)},className:d.root,"data-flyout-spacing":a,"data-rounded":n,"data-shadow":g,"data-test-id":v,onFocus:V,...b,children:w})})};f.displayName="Flyout.Content";const p=({showCloseButton:e,children:t,"data-test-id":a="fondue-flyout-header"},n)=>o.jsxs("div",{"data-test-id":a,ref:n,className:d.header,children:[o.jsx("div",{children:t}),e&&o.jsx(R,{role:"button","data-test-id":`${a}-close`,className:d.close,children:o.jsx(T,{size:20})})]});p.displayName="Flyout.Header";const m=({children:e,"data-test-id":t="fondue-flyout-footer"},a)=>o.jsx("div",{"data-test-id":t,ref:a,className:d.footer,children:e});m.displayName="Flyout.Footer";const c=({children:e,"data-test-id":t="fondue-flyout-body"},a)=>o.jsx("div",{"data-test-id":t,ref:a,"data-flyout-spacing":"compact",className:d.body,children:e});c.displayName="Flyout.Body";const S={Root:i,Trigger:l.forwardRef(u),Content:l.forwardRef(f),Header:l.forwardRef(p),Footer:l.forwardRef(m),Body:l.forwardRef(c)};i.__docgenInfo={description:"",methods:[],displayName:"Flyout.Root",props:{modal:{required:!1,tsType:{name:"boolean"},description:`Disable interaction with the rest of the page
@default false`},open:{required:!1,tsType:{name:"boolean"},description:"The controlled `open` state of the flyout\n@default false"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Event handler called when the `open` state changes"},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"Flyout.Trigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-trigger'",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"Flyout.Content",props:{shadow:{required:!1,tsType:{name:"union",raw:"'none' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Add a shadow to the flyout
@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"'none' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Add rounded corners to the flyout
@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Define the prefered side of the flyout. Can be overriden by viewport collisions viewport.
@default "bottom"`},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Define the prefered alignment of the flyout. Can be overriden by viewport collisions viewport.
@default "start"`,defaultValue:{value:"'start'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'tight' | 'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:`Define the padding of the flyout
@default "compact"`,defaultValue:{value:"'compact'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`Define the fixed width of the flyout
@default "fit-content"`,defaultValue:{value:"'fit-content'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:`Define the maximum width of the flyout
@default "360px"`,defaultValue:{value:"'360px'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-content'",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"Flyout.Header",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show a close button in the header
@default false`},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-header'",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"Flyout.Footer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-footer'",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"Flyout.Body",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-body'",computed:!1}}}};export{S as F,f as a,i as b,u as c,p as d,c as e,m as f};
