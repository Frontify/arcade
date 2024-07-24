import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{$ as fe}from"./useLink-Bd1Qu62S.js";import{r}from"./index-BwDkhjyp.js";import{u as me}from"./usePopper-DPXU-o95.js";import{B as _,b as $,c as W,a as D}from"./Button-DqlvyMV-.js";import{P as we}from"./Portal-0C9N3MSP.js";import{I as S}from"./IconSize-BcCrF_mi.js";import{u as be}from"./useMemoizedId-EtHZ7Sxa.js";import{a as ge}from"./focusStyle-CBFElZiz.js";import{m as l}from"./merge-DI-veSMP.js";import{I as he}from"./IconCheckMark-CLvJH1sB.js";import{I as xe,c as ye}from"./IconExclamationMarkCircle-Cob4vb5T.js";import{I as ve}from"./IconExclamationMarkTriangle-CRTWkDyu.js";var Te=(e=>(e.Information="Information",e.Warning="Warning",e.Tip="Tip",e.Note="Note",e))(Te||{});const ke={Information:"tw-bg-box-selected-strong",Warning:"tw-bg-box-negative-strong-pressed",Tip:"tw-bg-box-positive-strong-pressed",Note:"tw-bg-box-warning-strong"},E={Information:"before:tw-bg-box-selected-strong",Warning:"before:tw-bg-box-negative-strong-pressed",Tip:"before:tw-bg-box-positive-strong-pressed",Note:"before:tw-bg-box-warning-strong"},Ee={Information:t.jsx(xe,{}),Warning:t.jsx(ve,{}),Tip:t.jsx(he,{}),Note:t.jsx(ye,{})},j=({headerStyle:e})=>t.jsx("div",{"data-test-id":"bright-header",className:l(["tw-h-9 tw-relative tw-z-[120000] tw-flex tw-justify-center tw-items-center tw-rounded-t-md tw-dark tw-text-text",ke[e]]),children:r.cloneElement(Ee[e],{size:S.Size20})});j.displayName="FondueBrightHeader";j.__docgenInfo={description:"",methods:[],displayName:"FondueBrightHeader",props:{headerStyle:{required:!0,tsType:{name:"BrightHeaderStyle"},description:""}}};const P={small:"tw-pt-2",large:"tw-pt-3"},H={small:"tw-pb-2",large:"tw-pb-3"};var Se=(e=>(e.Top="Top",e.Right="Right",e.Bottom="Bottom",e.Left="Left",e))(Se||{}),je=(e=>(e.Start="Start",e.Middle="Middle",e.End="End",e))(je||{});const qe={"Top-Start":"top-start","Top-End":"top-end","Bottom-Start":"bottom-start","Bottom-End":"bottom-end","Left-Start":"left-start","Left-End":"left-end","Right-Start":"right-start","Right-End":"right-end","Top-Middle":"top","Right-Middle":"right","Bottom-Middle":"bottom","Left-Middle":"left"},Be=(e,o,d)=>{switch(!0){case e.toString().includes("Top".toLowerCase()):return"before:tw-border-t-0 before:tw-border-l-0 tw-bottom-[-6px] before:tw-dark before:tw-bg-base";case e.toString().includes("Right".toLowerCase()):return l(["before:tw-border-t-0 before:tw-border-r-0 tw-left-[-5px]",o&&d==="Start"&&e.toString().includes("Start".toLowerCase())?E[o]:"before:tw-dark before:tw-bg-base"]);case e.toString().includes("Bottom".toLowerCase()):return l(["before:tw-border-b-0 before:tw-border-r-0 tw-top-[-6px]",o?E[o]:"before:tw-dark before:tw-bg-base"]);case e.toString().includes("Left".toLowerCase()):return l(["before:tw-border-b-0 before:tw-border-l-0 tw-right-[-5px]",o&&d==="Start"&&e.toString().includes("Start".toLowerCase())?E[o]:"before:tw-dark before:tw-bg-base"]);default:return"before:tw-border-b-0 before:tw-border-r-0 tw-top-[-6px] before:tw-dark before:tw-bg-base"}},Le=({enablePortal:e=!1,children:o})=>e?t.jsx(we,{children:o}):o,A=({content:e,tooltipIcon:o,heading:d,headingIcon:h,linkUrl:m,linkLabel:G,brightHeader:v,buttons:a,children:Y,position:q="Bottom",alignment:B="Middle",withStrongBorder:L=!1,withArrow:w,flip:J=!0,triggerElement:K,hoverDelay:C=200,enterDelay:T=0,open:N=!1,disabled:Q=!1,enablePortal:X=!1,hidden:Z=!1,"data-test-id":R="tooltip"})=>{var O;const[k,U]=r.useState(null),[s,u]=r.useState(!1),I=r.useRef(null),p=Z||Q,{linkProps:ee}=fe({isDisabled:p},I),te=r.useMemo(()=>m||a||d||h,[m,a,d,h]),re=qe[`${q}-${B}`],[b,oe]=r.useState(null),[x,ae]=r.useState(null),[se,ne]=r.useState(null),M=be(),c=me(k,b,{placement:re,strategy:"fixed",modifiers:[{name:"arrow",options:{element:se}},{name:"eventListeners",options:{scroll:s,resize:s}},{name:"offset",options:{offset:[0,w?10:5]}},{name:"flip",enabled:J}]}),ie=((O=c.state)==null?void 0:O.placement)??q,le=Be(ie,v,B),i=r.useRef(null),de=r.useCallback(()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>u(!1),C)},[C]),z=r.useCallback(()=>{if(i.current&&clearTimeout(i.current),T){i.current=setTimeout(()=>u(!0),T);return}u(!0)},[T]),ue=r.useCallback(n=>{var f;const g=(f=n.composedPath)==null?void 0:f.call(n);g&&[k,x,b].some(F=>F&&g.includes(F))&&z()},[z,b,x,k]),pe=r.useCallback(n=>{const{relatedTarget:g}=n;(!g||![b,x].some(f=>f==null?void 0:f.contains(g)))&&u(!1)},[b,x]),V=p?{}:{onMouseOver:n=>ue(n.nativeEvent),onMouseLeave:de,onFocus:()=>u(!0),onBlur:pe};r.useEffect(()=>{i.current&&clearTimeout(i.current),u(p?!1:N)},[N,p]);const y=r.useCallback(n=>{s&&n.key==="Escape"&&u(!1)},[s]);return r.useLayoutEffect(()=>{typeof c.update=="function"&&s&&c.update()},[s]),r.useEffect(()=>(s?window.addEventListener("keydown",y):window.removeEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),[y,s]),t.jsxs(t.Fragment,{children:[t.jsx("div",{...V,ref:ae,children:t.jsx("div",{ref:U,"aria-describedby":M,role:"tooltip",children:K})}),t.jsx(Le,{enablePortal:X,children:t.jsxs("div",{ref:oe,"aria-hidden":p,className:l(["tw-popper-container tw-inline-block tw-max-w-[200px] tw-dark tw-bg-base tw-rounded-md tw-shadow-mid tw-text-text tw-z-[120000]",!s&&"tw-opacity-0 tw-h-0 tw-w-0 tw-overflow-hidden",L&&"tw-border tw-border-line-strong"]),"data-test-id":R,role:"tooltip",id:M,style:c.styles.popper,...c.attributes.popper,...V,children:[v&&t.jsx(j,{headerStyle:v}),t.jsxs("div",{className:l(["tw-px-3 tw-dark tw-bg-base tw-rounded-md tw-relative tw-z-[120000]",te?P.large:P.small,m?H.large:H.small]),children:[d&&t.jsxs("h4",{className:"tw-flex tw-text-m tw-font-bold tw-mb-1",children:[h&&t.jsx("span",{className:"tw-mr-1.5",children:r.cloneElement(h,{size:S.Size20})}),d]}),t.jsxs("div",{className:"tw-flex",children:[o&&t.jsx("span",{className:"tw-shrink-0 tw-mr-1 tw-leading-4",children:r.cloneElement(o,{size:S.Size16})}),t.jsx("span",{className:"tw-text-s tw-min-w-0 tw-break-words",children:e})]}),m&&t.jsx("a",{...ee,"data-test-id":`${R}-link`,ref:I,href:m,target:"_blank",rel:"noopener noreferrer",className:l(["tw-text-xs tw-text-black-40 tw-underline tw-mt-1",ge]),children:G??"Click here to learn more."}),a&&t.jsxs("div",{className:"tw-flex tw-flex-row-reverse tw-gap-x-1 tw-mt-4",children:[a.length>0&&t.jsx(_,{style:$.Default,emphasis:W.Strong,size:D.Small,onClick:a[0].action,disabled:p,children:a[0].label}),a.length===2&&t.jsx(_,{style:$.Default,emphasis:W.Default,size:D.Small,onClick:a[1].action,disabled:p,children:a[1].label})]})]}),t.jsx("div",{"aria-hidden":"true",children:t.jsx("div",{"data-test-id":"popover-arrow","data-popper-arrow":w,ref:ne,style:c.styles.arrow,className:l([w&&"tw-popper-arrow tw-z-[110000] tw-absolute tw-w-3 tw-h-3 tw-pointer-events-none before:tw-absolute before:tw-w-3 before:tw-h-3 before:tw-rotate-45 before:tw-border",w&&le,L?"before:tw-border-line-strong":w&&"before:tw-border-line"])})}),Y]})})]})};A.displayName="FondueLegacyTooltip";A.__docgenInfo={description:"@deprecated Please use updated `Tooltip` component from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#tooltip the migration guide}.",methods:[],displayName:"FondueLegacyTooltip",props:{triggerElement:{required:!1,tsType:{name:"ReactElement"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},tooltipIcon:{required:!1,tsType:{name:"ReactElement"},description:""},heading:{required:!1,tsType:{name:"ReactNode"},description:""},headingIcon:{required:!1,tsType:{name:"ReactElement"},description:""},linkUrl:{required:!1,tsType:{name:"string"},description:""},linkLabel:{required:!1,tsType:{name:"string"},description:""},brightHeader:{required:!1,tsType:{name:"BrightHeaderStyle"},description:""},buttons:{required:!1,tsType:{name:"union",raw:"[TooltipButton, TooltipButton] | [TooltipButton]",elements:[{name:"tuple",raw:"[TooltipButton, TooltipButton]",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    action: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},{name:"signature",type:"object",raw:`{
    label: string;
    action: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}]},{name:"tuple",raw:"[TooltipButton]",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    action: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}]}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"TooltipPosition"},description:"",defaultValue:{value:"TooltipPosition.Bottom",computed:!0}},alignment:{required:!1,tsType:{name:"TooltipAlignment"},description:"",defaultValue:{value:"TooltipAlignment.Middle",computed:!0}},flip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:""},withStrongBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},enterDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hidden:{required:!1,tsType:{name:"boolean"},description:"@deprecated use disabled since the tooltip is always present in the DOM now so hidden has no effect anymore",defaultValue:{value:"false",computed:!1}},enablePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'tooltip'",computed:!1}}}};export{Te as B,A as L,Se as T,je as a};
