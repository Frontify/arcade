import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as f}from"./index-BwDkhjyp.js";import{S as N}from"./Switch-DDE7l5VE.js";import{I as g}from"./IconCaretDown-BFa2RsTm.js";import{I as j}from"./IconMinus-C2D-9VKa.js";import{I as b}from"./IconPlus-DAQvlGZW.js";import{I as u}from"./IconSize-BcCrF_mi.js";import{u as T}from"./useMemoizedId-EtHZ7Sxa.js";import{m as d}from"./merge-DI-veSMP.js";const S="accordion-icon-container",D="addremove-icon-container";var k=(e=>(e.Small="Small",e.Medium="Medium",e.Large="Large",e))(k||{});const l={Small:{icon:u.Size12,text:"tw-text-s",switch:"small"},Medium:{icon:u.Size16,text:"tw-text-m",switch:"medium"},Large:{icon:u.Size20,text:"tw-text-l",switch:"medium"}};var q=(e=>(e.Default="Default",e.Switch="Switch",e.Accordion="Accordion",e.AddRemove="AddRemove",e))(q||{});const w=(e,n,i,r,t)=>{const s={"aria-labelledby":n,size:l[i].icon};switch(e){case"Switch":return a.jsx("div",{"data-test-id":"fieldset-icon-wrapper",children:a.jsx(N,{...s,size:l[i].switch,mode:r?"on":"off",disabled:t})});case"Accordion":return a.jsx("div",{"data-test-id":"fieldset-icon-wrapper",children:a.jsx("div",{"data-test-id":S,className:d(["tw-transition-transform",r&&"tw-rotate-180 tw-duration-300",!t&&r&&"tw-text-black",!t&&!r&&"tw-text-black-80",t&&"tw-text-black-40"]),children:a.jsx(g,{...s})})});case"AddRemove":return a.jsx("div",{"data-test-id":"fieldset-icon-wrapper",children:a.jsx("div",{"data-test-id":D,className:d([r&&!t&&"tw-text-black",!r&&!t&&"tw-text-black-80",t&&"tw-text-black-40"]),children:r?a.jsx(j,{...s}):a.jsx(b,{...s})})})}return null},x=({size:e="Large",active:n=!0,decorator:i,type:r="Default",disabled:t=!1,bold:s=!0,children:h,onClick:o,as:I="label",tabIndex:v=-1,"data-test-id":y="fieldset-header"})=>{const m=T(),p=()=>!t&&o&&o();let c="tw-font-normal";return s?c="tw-font-bold":e==="Medium"&&(c="tw-font-medium"),a.jsxs("header",{"data-test-id":y,role:o?"button":void 0,onClick:p,onKeyPress:p,className:d(["tw-flex tw-items-center tw-gap-x-1.5 tw-w-full tw-flex-row",t?"tw-text-black-40":"dark:tw-text-white",!t&&n?"tw-text-black":"tw-text-black-80",!t&&o?"hover:tw-cursor-pointer":"tw-pointer-events-none"]),tabIndex:v,children:[f.isValidElement(i)&&a.jsx("span",{className:"tw-shrink-0",children:f.cloneElement(i,{size:l[e].icon})}),a.jsx(I,{id:m,className:d(["tw-text-left",l[e].text,c,o&&"hover:tw-cursor-pointer"]),children:h}),r!=="Default"&&a.jsx("span",{"data-test-id":"fieldset-icon-container",className:"tw-ml-auto tw-shrink-0",children:w(r,m,e,n,t)})]})};x.displayName="FondueFieldsetHeader";w.__docgenInfo={description:"",methods:[],displayName:"renderFieldsetHeaderIconType"};x.__docgenInfo={description:"",methods:[],displayName:"FondueFieldsetHeader",props:{size:{required:!1,tsType:{name:"FieldsetHeaderSize"},description:"",defaultValue:{value:"FieldsetHeaderSize.Large",computed:!0}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},decorator:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"FieldsetHeaderType"},description:"",defaultValue:{value:"FieldsetHeaderType.Default",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"",defaultValue:{value:"'label'",computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-1",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fieldset-header'",computed:!1}}}};export{x as F,k as a,q as b};
