import{j as t}from"./jsx-runtime-DH9XN8A8.js";import{c as o,B as l,a as d,b as u}from"./Button-BfBJpGQT.js";import"./Divider-BI8G7m_S.js";import"./FormControl-DeLflFlr.js";import{L as x,a as b}from"./LoadingCircle-CnEko-RI.js";import"./Switch-CibQ61jG.js";import"./TabItem-BOEZCaC7.js";import{I as y,a as g}from"./TextInput-NLH6WSWe.js";import"./Tooltip-PCAYiURV.js";import"./Tree-CzP7ikJo.js";import{a as v}from"./IconCheckMark-CMS57PRn.js";import{a as h}from"./IconCross-LL1GOU_p.js";import{I as k}from"./IconExclamationMarkTriangle-CTTfs2nR.js";import{g as I}from"./useMemoizedId-Cl5PI4eu.js";import{m as j}from"./merge-DI-veSMP.js";import{V as s,v as c}from"./validation-CJXPAjNB.js";const L={base:"tw-flex tw-items-center tw-justify-between tw-gap-2 tw-px-3 tw-transition tw-text-sm tw-font-sans tw-relative tw-bg-base tw-border tw-rounded tw-line-strong",width:"tw-w-full",height:"tw-h-9 tw-min-h-[2.35rem]",element:"tw-bg-transparent tw-border-line-strong tw-text-text tw-placeholder-text-x-weak tw-outline-none tw-p-2",focus:"focus:tw-border-line-xx-strong",focusWithin:"focus-within:tw-border-line-xx-strong focus-within:hover:tw-border-line-xx-strong",hover:"hover:tw-border-line-x-strong",disabled:"disabled:tw-bg-box-disabled disabled:tw-border-line-weak disabled:tw-text-text-disabled disabled:hover:tw-cursor-not-allowed disabled:hover:tw-border-line-weak",readOnly:"read-only:tw-bg-box-disabled read-only:tw-border-none read-only:tw-text-text-weak read-only:hover:tw-cursor-not-allowed read-only:hover:tw-border-line-weak"},m=({text:r,disabled:n=!1,validationStyle:e=s.Default,"data-test-id":a="fondue-helper-text"})=>t.jsx("span",{"data-test-id":a,className:j(["tw-text-s tw-font-sans",n?"tw-text-black-40":c[e]]),children:r});m.displayName="FondueHelperText";const w=(r,n)=>{let e;switch(r){case s.Success:e=t.jsx(v,{});break;case s.Error:case s.Warning:e=t.jsx(k,{});break;case s.Loading:e=t.jsx(x,{size:b.Small});break;default:e=null}return e?t.jsx("span",{className:c[r],"data-test-id":`${n}-status-icon`,children:e}):null};w.displayName="FondueGetStatusIcon";const f=({clearable:r,disabled:n,obfuscated:e,isObfuscated:a,callbacks:i,dataTestId:p="fondue-input-actions"})=>t.jsxs("span",{className:"tw-flex tw-items-center tw-justify-between tw-w-auto",children:[e&&t.jsx(o,{size:l.Small,style:d.Default,disabled:n,emphasis:u.Weak,onClick:i.password,title:`${a?"show":"hide"} text input`,"aria-label":`${a?"show":"hide"} text input`,icon:a?t.jsx(y,{}):t.jsx(g,{}),"data-test-id":`${p}-visibility-icon`}),r&&t.jsx(o,{style:d.Default,onClick:i.clearable,disabled:n,emphasis:u.Weak,icon:t.jsx(h,{}),title:"Clear Input",size:l.Small,"aria-label":"Clear value","data-test-id":`${p}-clear`})]});f.displayName="FondueInputActionButtons";const q=({actions:r,disabled:n,dataTestId:e})=>r.map(a=>{const i=I();return t.jsx(o,{style:d.Default,onClick:a.callback,disabled:n,emphasis:u.Weak,icon:a.icon,size:l.Small,"aria-describedby":"Clear Input Value","aria-label":"Clear value",title:a.title,"data-test-id":`${e}-extra-action`},`extra-action-${i}`)});q.displayName="FondueInputExtraActions";m.__docgenInfo={description:"",methods:[],displayName:"FondueHelperText",props:{text:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-helper-text'",computed:!1}},validationStyle:{required:!1,tsType:{name:"Validation"},description:"",defaultValue:{value:"Validation.Default",computed:!0}}}};w.__docgenInfo={description:"",methods:[],displayName:"FondueGetStatusIcon"};f.__docgenInfo={description:"",methods:[],displayName:"FondueInputActionButtons",props:{clearable:{required:!1,tsType:{name:"boolean"},description:""},obfuscated:{required:!1,tsType:{name:"boolean"},description:""},isObfuscated:{required:!1,tsType:{name:"boolean"},description:""},increment:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},callbacks:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    text?: () => void;
    textarea?: () => void;
    password?: () => void;
    increment?: () => void;
    clearable?: () => void;
}`,signature:{properties:[{key:"text",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"textarea",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"password",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"increment",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"clearable",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-input-actions'",computed:!1}}}};export{w as G,m as H,f as I,L as a,q as b};
