import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as x}from"./TooltipIcon-DJnGWxbA.js";import{I as y}from"./IconSize-BcCrF_mi.js";import{m as n}from"./merge-DI-veSMP.js";const r=({children:t,htmlFor:p,required:d=!1,disabled:l=!1,clickable:c=!1,tooltip:a=[],bold:m,"data-test-id":o="input-label"})=>{const u=(Array.isArray(a)?a:[a]).map((i,s)=>({key:s,...i}));return e.jsxs("div",{className:n(["tw-inline-flex tw-leading-4 tw-items-center tw-gap-1 tw-font-sans tw-text-s tw-max-w-full tw-min-w-0 tw-flex-initial",l?"tw-text-text-disabled":"tw-text-text-weak"]),"data-test-id":`${o}-container`,children:[e.jsx("div",{className:"tw-flex-1 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap",children:e.jsx("label",{htmlFor:p,className:n(["tw-select-none tw-max-w-full",m&&"tw-font-medium",l||!c?"hover:tw-cursor-not-allowed tw-pointer-events-none":"hover:tw-cursor-pointer hover:tw-text-text group-hover:tw-text-text"]),"data-test-id":o,title:typeof t=="string"?t:"",children:t})}),d&&e.jsx("span",{"data-test-id":`${o}-required`,className:"tw-h-4 tw-text-m tw-text-text-negative",children:"*"}),u.map(({key:i,triggerIcon:s,triggerStyle:f,hoverDelay:w=100,...g})=>e.jsx("div",{className:"tw-leading-3",children:e.jsx(x,{tooltip:{...g,hoverDelay:w},iconSize:y.Size16,triggerIcon:s,triggerStyle:f})},i))]})};r.displayName="FondueInputLabel";r.__docgenInfo={description:"@deprecated Use `Label` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#label-old-inputlabel the migration guide}.",methods:[],displayName:"FondueInputLabel",props:{htmlFor:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}]},description:"",defaultValue:{value:"[]",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'input-label'",computed:!1}}}};export{r as I};
