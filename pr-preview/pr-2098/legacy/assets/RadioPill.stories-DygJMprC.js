import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{a as u}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{I as f}from"./IconIcon-CDmwB2Qj.js";import{$ as x}from"./useFocusRing-Vzyl7-Lk.js";import{r as w}from"./index-BwDkhjyp.js";import{I as g}from"./IconSize-BcCrF_mi.js";import{F as b}from"./focusStyle-CBFElZiz.js";import{m as y}from"./merge-DI-veSMP.js";import"./v4-CQkTLCs1.js";import"./IconIcon16-DWj0uaJO.js";import"./IconIcon24-B3RK_NZS.js";import"./SSRProvider-CYXx33DY.js";import"./_commonjsHelpers-BosuxZz1.js";const o=({label:r,active:c,icon:a,onClick:i,"data-test-id":d="radio-pill"})=>{const{isFocusVisible:m,focusProps:p}=x();return t.jsxs("button",{"data-test-id":d,type:"button",className:y(["tw-inline-flex tw-items-center tw-rounded-full tw-text-xs tw-px-2 tw-py-1",c?"dark:tw-bg-black-5 dark:tw-text-black-100 tw-bg-black-100 tw-text-white":"tw-text-black-80 dark:tw-text-black-40",m&&b,i?"tw-cursor-pointer":"tw-cursor-auto"]),onClick:i,...p,children:[a&&t.jsx("span",{className:"tw-mr-1",children:w.cloneElement(a,{size:g.Size16})}),t.jsx("span",{children:r})]})};o.displayName="FondueRadioPill";o.__docgenInfo={description:"",methods:[],displayName:"FondueRadioPill",props:{label:{required:!0,tsType:{name:"string"},description:""},active:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event?: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'radio-pill'",computed:!1}}}};const F={title:"Components/Radio Pill",component:o,tags:["autodocs"],args:{label:"Label",active:!0,onClick:u("click")},argTypes:{icon:{options:["None","Icon"],mapping:{None:null,Icon:t.jsx(f,{})},control:{type:"select"}}}},e=r=>t.jsx(o,{...r});e.__docgenInfo={description:"",methods:[],displayName:"RadioPill"};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"args => <RadioPillComponent {...args} />",...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const L=["RadioPill"];export{e as RadioPill,L as __namedExportsOrder,F as default};
