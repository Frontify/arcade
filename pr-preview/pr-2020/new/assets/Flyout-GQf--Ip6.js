import{j as a}from"./jsx-runtime-DBEcOq3S.js";import{r as s}from"./index-DtJulBIN.js";import{e as F}from"./fondue-icons324-Bw2AQYl8.js";import{R as T,T as b,P as N,C as w,a as x}from"./index-CNnLFFmR.js";import{u as R,s as y}from"./usePreventDropdownOverflow-DVWF_q5K.js";const q="_root_u4ins_5",C="_header_u4ins_48",j="_body_u4ins_65",V="_footer_u4ins_80",D="_close_u4ins_97",r={root:q,header:C,body:j,footer:V,close:D},l=({children:e,...t})=>a.jsx(T,{...t,children:e});l.displayName="Flyout.Root";const i=({children:e,"data-test-id":t="fondue-flyout-trigger"},o)=>a.jsx(b,{"data-test-id":t,asChild:!0,ref:o,children:e});i.displayName="Flyout.Trigger";const u=({align:e="start",maxWidth:t="360px",padding:o="compact","data-test-id":d="fondue-flyout-content",children:h,rounded:g,...v},m)=>{const n=s.useRef(null),{setMaxHeight:_}=R(n);return a.jsx(N,{children:a.jsx(w,{style:{"--flyout-max-width":t},ref:n,align:e,collisionPadding:8,sideOffset:8,onOpenAutoFocus:()=>{_(),y(n,m)},onCloseAutoFocus:()=>{y(n,m)},className:r.root,"data-flyout-spacing":o,"data-rounded":g,"data-test-id":d,...v,children:h})})};u.displayName="Flyout.Content";const f=({showCloseButton:e,children:t,"data-test-id":o="fondue-flyout-header"},d)=>a.jsxs("div",{"data-test-id":o,ref:d,className:r.header,children:[a.jsx("div",{children:t}),e&&a.jsx(x,{role:"button","data-test-id":`${o}-close`,className:r.close,children:a.jsx(F,{size:20})})]});f.displayName="Flyout.Header";const p=({children:e,"data-test-id":t="fondue-flyout-footer"},o)=>a.jsx("div",{"data-test-id":t,ref:o,className:r.footer,children:e});p.displayName="Flyout.Footer";const c=({children:e,"data-test-id":t="fondue-flyout-body"},o)=>a.jsx("div",{"data-test-id":t,ref:o,"data-flyout-spacing":"compact",className:r.body,children:e});c.displayName="Flyout.Body";const A={Root:l,Trigger:s.forwardRef(i),Content:s.forwardRef(u),Header:s.forwardRef(f),Footer:s.forwardRef(p),Body:s.forwardRef(c)};l.__docgenInfo={description:"",methods:[],displayName:"Flyout.Root",props:{modal:{required:!1,tsType:{name:"boolean"},description:`Disable interaction with the rest of the page
@default false`},open:{required:!1,tsType:{name:"boolean"},description:"The controlled `open` state of the flyout\n@default false"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Event handler called when the `open` state changes"},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"Flyout.Trigger",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-trigger'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"Flyout.Content",props:{rounded:{required:!1,tsType:{name:"boolean"},description:`Add rounded corners to the flyout
@default true`},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Define the prefered side of the flyout. Can be overriden by viewport collisions viewport.
@default "bottom"`},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Define the prefered alignment of the flyout. Can be overriden by viewport collisions viewport.
@default "start"`,defaultValue:{value:"'start'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:`Define the padding of the flyout
@default "compact"`,defaultValue:{value:"'compact'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:`Define the maximum width of the flyout
@default "360px"`,defaultValue:{value:"'360px'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-content'",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"Flyout.Header",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show a close button in the header
@default false`},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-header'",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"Flyout.Footer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-footer'",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"Flyout.Body",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-body'",computed:!1}}}};export{A as F,u as a,l as b,i as c,f as d,c as e,p as f};
