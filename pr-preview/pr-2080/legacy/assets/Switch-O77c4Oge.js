import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{$ as V}from"./useFocusRing-Vzyl7-Lk.js";import{r as o}from"./index-BwDkhjyp.js";import{I}from"./InputLabel-DrkD0R8a.js";import{u as P}from"./useMemoizedId-EtHZ7Sxa.js";import{F as M}from"./focusStyle-CBFElZiz.js";import{m as n}from"./merge-DI-veSMP.js";const N={small:"tw-w-[22px] tw-h-3",medium:"tw-w-[30px] tw-h-4"},u={small:{dimensions:"tw-w-3 tw-h-3",activeWidth:"group-active:tw-w-[14px]",activeTranslation:"tw-translate-x-[9px]"},medium:{dimensions:"tw-w-4 tw-h-4",activeWidth:"group-active:tw-w-[18px]",activeTranslation:"tw-translate-x-[13px]"}},b="tw-w-2 tw-h-[1px]",g=({id:x,name:v,label:c,disabled:t,onChange:h,size:s="medium",mode:e="off",labelStyle:y="default",ariaLabel:C,hug:p=!1,tooltip:T,"data-test-id":d="switch"})=>{const r=P(x),{isFocusVisible:f,focusProps:k}=V(),F=o.useMemo(()=>n(["tw-group tw-border tw-inline-flex tw-rounded-full tw-shrink-0 tw-p-0 tw-transition-colors",t&&e==="indeterminate"?"tw-flex tw-items-center tw-justify-center tw-bg-box-disabled tw-border-line tw-pointer-events-none":t?"tw-bg-box-disabled tw-border-line tw-pointer-events-none":e==="indeterminate"?"tw-bg-text-weak tw-flex tw-items-center tw-justify-center hover:tw-bg-text":e==="on"?"tw-bg-text-weak tw-border-line-xx-strong hover:tw-bg-text":"tw-bg-box-neutral tw-border-line-x-strong hover:tw-bg-box-neutral-hover",N[s],f&&M]),[e,t,s,f]),S=o.useMemo(()=>{const i="tw-relative tw-self-center tw-transition-transform",w=e==="on"?u[s].activeTranslation:"",l=t&&e==="indeterminate"?"tw-bg-text-disabled":e==="indeterminate"?"tw-bg-base":w;return n([i,e==="indeterminate"?b:u[s].dimensions,l])},[t,e,s]),q=o.useMemo(()=>{const i="tw-border tw-bg-base tw-rounded-full tw-absolute tw-block tw-self-center tw-transition-width tw-duration-75",m=e==="indeterminate"?"tw-hidden":e==="on"?"tw-right-0  tw-translate-x-px":"tw-left-0",l=t?"tw-border-line-strong":n(["tw-bg-base tw-border-line-xx-strong",u[s].activeWidth]);return n([i,e==="indeterminate"?b:u[s].dimensions,m,l])},[e,t,s]),j=o.useMemo(()=>n(["tw-gap-2 tw-items-center tw-justify-between",p?"tw-inline-flex":"tw-flex"]),[p]);return a.jsxs("div",{className:j,"data-test-id":`${d}-container`,children:[c&&a.jsx(I,{clickable:!0,id:`${r}-label`,htmlFor:r,disabled:t,tooltip:T,children:a.jsx("span",{"data-test-id":`${d}-label-wrapper`,className:y==="default"?"tw-font-medium tw-text-text-weak":"tw-font-bold tw-text-text",children:c})}),a.jsx("button",{...k,id:r,disabled:t,name:v,"data-test-id":d,className:F,value:e,onClick:h,type:"button",role:"switch","aria-checked":e==="on","aria-label":C,"aria-labelledby":c?`${r}-label`:void 0,children:a.jsx("div",{className:S,children:a.jsx("div",{className:q})})})]})};g.displayName="FondueSwitch";g.__docgenInfo={description:"@deprecated Use `Switch` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#switch the migration guide}.",methods:[],displayName:"FondueSwitch",props:{id:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'on' | 'off' | 'indeterminate'",elements:[{name:"literal",value:"'on'"},{name:"literal",value:"'off'"},{name:"literal",value:"'indeterminate'"}]},description:"",defaultValue:{value:"'off'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelStyle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'default'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},hug:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'switch'",computed:!1}}}};export{g as S};
