import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{r as w}from"./index-BwDkhjyp.js";import{a as j,C as F}from"./example-palettes-EQezg1kK.js";import{F as I}from"./Flyout-DhyHRZI_.js";import{T as x,t as h,g as N,C as q}from"./colors-cqDZVL9s.js";import{$ as V}from"./useFocusRing-4Vnvtzpc.js";import{c as P}from"./MenuItem-BEWw9_Ux.js";import{a as S}from"./Trigger-Dr0pG8ZW.js";import{I as _}from"./IconDroplet-CO3iIcGm.js";import{I as O}from"./IconSize-BcCrF_mi.js";import{u as $}from"./useMemoizedId-EtHZ7Sxa.js";import{m as v}from"./merge-DI-veSMP.js";const f=({currentColor:a,format:e})=>{const{name:n,alpha:s}=a,t=new x(h(a)),o=N(a,e,!1);return r.jsxs("div",{className:"tw-text-black-100",children:[n||o,e===q.Hex&&s&&s<1&&r.jsx("span",{className:"tw-text-black-60",children:` ${Math.trunc(t.getAlpha()*100)} %`})]})};f.displayName="FondueColorInputTitle";f.__docgenInfo={description:"",methods:[],displayName:"FondueColorInputTitle",props:{currentColor:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:""},format:{required:!0,tsType:{name:"ColorFormat"},description:""}}};const c=({id:a,currentColor:e,format:n,isOpen:s=!1,disabled:t=!1,clearable:o=!1,onClear:u,onDelete:p})=>{const{isFocusVisible:l,focusProps:i}=V(),m=e?new x(h(e)).toRgbString():"";return r.jsx(S,{isOpen:s,disabled:t,isFocusVisible:l,showClear:!!e&&o,onClear:u,onDelete:p,children:r.jsx("button",{...i,type:"button",id:$(a),disabled:t,className:v(["tw-overflow-hidden tw-flex-auto tw-h-full tw-rounded tw-text-left tw-outline-none tw-py-2 tw-pl-3 tw-min-h-[34px] tw-pr-8",!e&&"tw-text-black-60",t&&"tw-text-black-40"]),children:r.jsx(P,{title:e?r.jsx(f,{format:n,currentColor:e}):"Select color",decorator:e?r.jsx("span",{className:v(["tw-h-4 tw-w-4 tw-rounded tw-flex tw-items-center tw-justify-center tw-ring-1 tw-ring-black-10 tw-ring-offset-1",t&&"tw-opacity-50"]),style:{backgroundColor:m}}):r.jsx("span",{className:"tw-text-black-70",children:r.jsx(_,{size:O.Size12})})})})})};c.displayName="FondueColorInputTrigger";c.__docgenInfo={description:"",methods:[],displayName:"FondueColorInputTrigger",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},format:{required:!0,tsType:{name:"ColorFormat"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const T=({id:a,onClick:e,onClose:n,onSelect:s,currentColor:t,palettes:o,disabled:u=!1,clearable:p=!1,onClear:l,onDelete:i})=>{const[m,d]=w.useState(!1),[g,k]=w.useState(q.Hex),y=b=>{b||n==null||n(),d(b)},C=()=>{d(!1),e==null||e()};return r.jsx(I,{hug:!1,onConfirm:C,isOpen:m,onCancel:()=>y(!1),contentMinHeight:150,fixedHeader:r.jsx(j,{color:t||{red:255,green:255,blue:255}}),onOpenChange:y,isTriggerDisabled:u,trigger:r.jsx(c,{isOpen:m,currentColor:t,format:g,disabled:u,id:a,clearable:p,onClear:()=>{d(!1),l&&l()},onDelete:i?()=>{d(!1),i&&i()}:void 0}),children:r.jsx(F,{currentFormat:g,setFormat:k,palettes:o,showPreview:!1,currentColor:t||{red:255,green:255,blue:255},onSelect:s})})};T.displayName="FondueColorPickerFlyout";T.__docgenInfo={description:"",methods:[],displayName:"FondueColorPickerFlyout",props:{id:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},currentColor:{required:!0,tsType:{name:"union",raw:"Color | null",elements:[{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},{name:"null"}]},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{T as C};
