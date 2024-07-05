import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{$ as m}from"./useFocusRing-4Vnvtzpc.js";import{I as y}from"./IconCaretDown-Cxrx1sF_.js";import{I as k}from"./IconCross-Bt-I3opn.js";import{I as V}from"./IconExclamationMarkTriangle-CRTWkDyu.js";import{I as j}from"./IconTrashBin-Bl46mt1V.js";import{I as d}from"./IconSize-BcCrF_mi.js";import{F as c,a as I}from"./focusStyle-CBFElZiz.js";import{m as a}from"./merge-DI-veSMP.js";import{V as o,v as S}from"./validation-C9S5KgfE.js";var F=(e=>(e.Small="Small",e.Large="Large",e))(F||{}),q=(e=>(e.Default="Default",e.Weak="Weak",e))(q||{});const C=(e,i,n,l,r)=>a(["tw-group tw-relative tw-flex tw-w-full tw-items-center tw-justify-between tw-border tw-rounded tw-transition-colors tw-min-h-[36px]",e&&c,i?"tw-border-black-5 tw-bg-black-5 tw-pointer-events-none":a(["hover:tw-border-line-xx-strong",l==="Weak"?"":"tw-bg-base",n?"tw-border-line-xx-strong":"tw-border-line",l==="Weak"?"tw-border-0 hover:tw-outline hover:tw-outline-1":S[r]])]),p=({buttonProps:e,onClear:i,onDelete:n,children:l,disabled:r=!1,isOpen:u=!1,isFocusVisible:f=!1,size:w="Small",showClear:b=!1,validation:s=o.Default,emphasis:g="Default"})=>{const{focusProps:x,isFocusVisible:T}=m(),{focusProps:v,isFocusVisible:h}=m();return t.jsxs("div",{"data-test-id":"trigger",className:C(f,r,u,g,s),children:[l,t.jsxs("div",{className:a(["tw-flex-none tw-flex tw-items-center tw-absolute",w==="Large"?"tw-right-5 tw-gap-1.5":"tw-right-3 tw-gap-1"]),children:[b&&t.jsx("button",{...x,"data-test-id":"dropdown-clear-button","aria-label":"Clear selection",type:"button",className:a([T&&c,r?"tw-pointer-events-none tw-text-black-40":"tw-text-black-80"]),onClick:()=>!!i&&i(),children:t.jsx(k,{size:d.Size12})}),!!n&&t.jsx("button",{...v,"data-test-id":"dropdown-delete-button","aria-label":"Delete selection",type:"button",className:a(["tw-rounded",h&&c,r?"tw-pointer-events-none tw-text-black-40":"tw-text-black-80"]),onClick:n,children:t.jsx(j,{size:d.Size12})}),t.jsx("button",{...e,type:"button",tabIndex:-1,disabled:r,"aria-hidden":!0,className:a(["tw-rounded",r?"tw-pointer-events-none tw-text-black-40":a(["group-hover:tw-text-black ",u?"tw-text-black-100":"tw-text-black-80",I])]),children:t.jsx("div",{className:a(["tw-transition-transform",u&&"tw-rotate-180"]),children:t.jsx(y,{size:d.Size16})})}),(s===o.Error||s===o.Warning)&&t.jsx("span",{className:a(["tw-flex tw-items-center tw-justify-center",s===o.Error&&"tw-text-text-negative",s===o.Warning&&"tw-text-text-warning"]),"data-test-id":"error-state-exclamation-mark-icon",children:t.jsx(V,{})})]})]})};p.displayName="FondueTrigger";p.__docgenInfo={description:"",methods:[],displayName:"FondueTrigger",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},buttonProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>"},description:""},isFocusVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"TriggerSize"},description:"",defaultValue:{value:"TriggerSize.Small",computed:!0}},showClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validation:{required:!1,tsType:{name:"Validation"},description:"",defaultValue:{value:"Validation.Default",computed:!0}},emphasis:{required:!1,tsType:{name:"TriggerEmphasis"},description:"",defaultValue:{value:"TriggerEmphasis.Default",computed:!0}}}};export{q as T,p as a,F as b};
