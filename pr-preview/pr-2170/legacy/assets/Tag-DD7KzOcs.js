import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{$ as w}from"./useButton-B0CVDvll.js";import{$ as m}from"./useFocusRing-Vzyl7-Lk.js";import{b}from"./useFocusable-ClqOF1PM.js";import{r as x}from"./index-BwDkhjyp.js";import{I as p}from"./IconCross-rmHxPLkJ.js";import{I as f}from"./IconSize-BcCrF_mi.js";import{F as g}from"./focusStyle-CBFElZiz.js";import{m as v}from"./merge-DI-veSMP.js";var S=(e=>(e.Suggested="Suggested",e.Selected="Selected",e.SelectedWithFocus="SelectedWithFocus",e.PreviouslySelected="PreviouslySelected",e))(S||{}),h=(e=>(e.Small="Small",e.Medium="Medium",e))(h||{});const $={Suggested:"tw-border tw-bg-base tw-text-text-weak tw-border-line hover:tw-text-text hover:tw-border-line-strong",Selected:"tw-bg-box-neutral hover:tw-bg-box-neutral-hover tw-text-text-weak hover:tw-text-box-neutral-inverse-hover",SelectedWithFocus:"tw-bg-box-selected-strong hover:tw-bg-box-selected-strong-hover tw-text-box-selected-strong-inverse",PreviouslySelected:"tw-bg-base tw-border tw-text-box-selected-strong tw-border-box-selected-strong hover:tw-bg-box-neutral hover:tw-text-box-selected-inverse hover:tw-border-box-selected-inverse"},a=({type:e,label:d,onClick:r,size:i="Medium","data-test-id":s="tag"})=>{const l=x.useRef(null),{isFocusVisible:c,focusProps:n}=m(),t=(e==="Selected"||e==="SelectedWithFocus")&&r,{buttonProps:u}=w({onPress:()=>t&&r()},l);return o.jsxs("button",{"data-test-id":s,className:v(["tw-inline-flex tw-items-center tw-rounded-full tw-text-xs tw-transition-colors tw-group tw-outline-none tw-break-word",i==="Small"?"tw-px-1.5 tw-py-0.5":"tw-px-2.5 tw-py-1",$[e],t?"tw-cursor-pointer":"tw-cursor-default",c&&g]),...b(u,n),children:[d,t&&o.jsx("span",{"data-test-id":`${s}-reject-icon`,className:"tw-opacity-80 group-hover:tw-opacity-100 tw-transition-opacity tw-ml-1 tw-leading-[0]",children:o.jsx(p,{size:f.Size12})})]})};a.displayName="FondueTag";a.__docgenInfo={description:"",methods:[],displayName:"FondueTag",props:{"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'tag'",computed:!1}},size:{defaultValue:{value:"TagSize.Medium",computed:!0},required:!1}}};export{a as T,h as a,S as b};
