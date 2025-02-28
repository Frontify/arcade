import{j as a}from"./jsx-runtime-DH9XN8A8.js";import{r as N}from"./index-v7USjxUg.js";import{I as T}from"./IconCross-LL1GOU_p.js";import{I as f}from"./IconSize-BcCrF_mi.js";import{a as h}from"./focusStyle-CBFElZiz.js";import{m as r}from"./merge-DI-veSMP.js";import{g as I,C}from"./colors-cqDZVL9s.js";var u=(e=>(e.Positive="Positive",e.Progress="Progress",e.Warning="Warning",e.Danger="Danger",e))(u||{}),n=(e=>(e.Primary="Primary",e.Positive="Positive",e.Progress="Progress",e.Warning="Warning",e.Danger="Danger",e))(n||{}),v=(e=>(e.Strong="Strong",e.None="None",e))(v||{});const E=(e,t,o)=>(o?{[n.Primary]:r(["tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse",t&&"hover:tw-bg-box-neutral-strong-hover hover:tw-text-box-neutral-strong-inverse-hover"]),[n.Positive]:r(["tw-bg-box-positive-strong tw-text-box-positive-strong-inverse",t&&"hover:tw-bg-box-positive-strong-hover hover:tw-text-box-positive-strong-inverse-hover"]),[n.Danger]:r(["tw-bg-box-negative-strong tw-text-box-negative-strong-inverse",t&&"hover:tw-bg-box-negative-strong-hover hover:tw-text-box-negative-strong-inverse-hover"]),[n.Progress]:r(["tw-bg-box-selected-strong tw-text-box-selected-strong-inverse",t&&"hover:tw-bg-box-selected-strong-hover hover:tw-text-box-selected-strong-inverse-hover"]),[n.Warning]:r(["tw-bg-box-warning-strong tw-text-box-warning-strong-inverse",t&&"hover:tw-bg-box-warning-strong-hover hover:tw-text-box-warning-strong-inverse-hover"])}:{[n.Primary]:r(["tw-bg-box-neutral tw-text-box-neutral-inverse",t&&"hover:tw-bg-box-neutral-hover hover:tw-text-box-neutral-inverse-hover"]),[n.Positive]:r(["tw-bg-box-positive tw-text-box-positive-inverse",t&&"hover:tw-bg-box-positive-hover hover:tw-text-box-positive-inverse-hover"]),[n.Progress]:r(["tw-bg-box-selected tw-text-box-selected-inverse",t&&"hover:tw-bg-box-selected-hover hover:tw-text-box-selected-inverse-hover"]),[n.Warning]:r(["tw-bg-box-warning tw-text-box-warning-inverse",t&&"hover:tw-bg-box-warning-hover hover:tw-text-box-warning-inverse-hover"]),[n.Danger]:r(["tw-bg-box-negative tw-text-box-negative-inverse",t&&"hover:tw-bg-box-negative-hover hover:tw-text-box-negative-inverse-hover"])})[e]??"",y=e=>Object.values(u).includes(e),z=e=>({small:"tw-h-5 tw-w-5",medium:"tw-h-6 tw-w-6"})[e],B=(e,t,o,w,l)=>{const p=w==="small",s=!(e&&t&&o);return p?r(["tw-h-5 tw-px-2 tw-gap-x-1",s&&"tw-gap-x-1.5",l&&"tw-pr-5"]):r(["tw-h-6","tw-px-2.5 tw-gap-x-1",s&&"tw-gap-x-2",l&&"tw-pr-6"])},V={[u.Positive]:"tw-bg-green-60",[u.Progress]:"tw-bg-violet-60",[u.Warning]:"tw-bg-yellow-60",[u.Danger]:"tw-bg-red-60"},c=({status:e,disabled:t,"data-test-id":o="badge"})=>a.jsx("div",{className:"tw-flex-none tw-inline-flex tw-justify-center tw-items-center ",children:a.jsx("span",{"data-test-id":`${o}-status`,className:r(["tw-w-2 tw-h-2 tw-rounded-full tw-flex-none",t&&"tw-opacity-30",y(e)&&V[e]]),style:y(e)?{}:{backgroundColor:typeof e=="string"?e:I(e,C.Rgba,!0)}})});c.displayName="FondueBadgeStatusIcon";c.__docgenInfo={description:"",methods:[],displayName:"FondueBadgeStatusIcon",props:{status:{required:!0,tsType:{name:"union",raw:"BadgeStatus | Color | string",elements:[{name:"BadgeStatus"},{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},{name:"string"}]},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'badge'",computed:!1}}}};const P=({children:e,status:t,icon:o,style:w=n.Primary,size:l="medium",emphasis:p=v.None,disabled:s=!1,onClick:g,onDismiss:m,"data-test-id":d="badge",withTitleAttribute:q=!0})=>{if(!e&&!o&&!t)return null;const j=g?"button":"span",b=i=>["string","number"].includes(typeof i)?i:Array.isArray(i)?i.map(b).join(""):i&&typeof i=="object"&&"props"in i?b(i.props.children):"",x=b(e),S=!e&&!m&&!!(t||o);return a.jsxs("div",{className:r(["tw-relative tw-rounded-full tw-inline-flex tw-items-center tw-align-top tw-min-w-0 tw-flex-initial tw-transition-color",s?"tw-bg-box-disabled tw-text-box-disabled-inverse":E(w,!!g,p===v.Strong)]),"data-test-id":d,children:[a.jsxs(j,{onClick:()=>g&&g(),className:r(["tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-select-none tw-flex-initial tw-min-w-0",g&&!s?"hover:tw-cursor-pointer":"tw-cursor-default",S?z(l):B(e,t,o,l,!!m),h]),"data-test-id":`${d}-button`,title:q?x:void 0,children:[t&&a.jsx(c,{status:t,disabled:s,"data-test-id":d}),o&&a.jsx("span",{"data-test-id":`${d}-icon`,className:r(["tw-flex-none tw-leading-none",s&&"tw-opacity-30"]),children:N.cloneElement(o,{size:f.Size16})}),e&&a.jsx("span",{className:"tw-text-center tw-text-xxs tw-font-sans tw-font-normal tw-truncate",children:e})]}),m&&a.jsx("button",{type:"button","data-test-id":`${d}-dismiss`,className:r(["tw-absolute tw-rounded tw-leading-4",h,l==="medium"?"tw-right-1.5":"tw-right-1"]),onClick:()=>m(),"aria-label":`Dismiss ${x}`,children:a.jsx(T,{size:f.Size16})})]})};P.displayName="FondueBadge";P.__docgenInfo={description:"",methods:[],displayName:"FondueBadge",props:{style:{required:!1,tsType:{name:"BadgeStyle"},description:"",defaultValue:{value:"BadgeStyle.Primary",computed:!0}},icon:{required:!1,tsType:{name:"ReactElement",elements:[{name:"intersection",raw:`GeneratedIconProps & {
    icon: IconEnum;
}`,elements:[{name:"signature",type:"object",raw:`{
    size?: IconSize;
    filled?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"IconSize",required:!1}},{key:"filled",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
    icon: IconEnum;
}`,signature:{properties:[{key:"icon",value:{name:"IconEnum",required:!0}}]}}]}],raw:"ReactElement<IconProps>"},description:""},status:{required:!1,tsType:{name:"union",raw:"BadgeStatusIconProps['status']"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emphasis:{required:!1,tsType:{name:"BadgeEmphasis"},description:"",defaultValue:{value:"BadgeEmphasis.None",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'badge'",computed:!1}},withTitleAttribute:{required:!1,tsType:{name:"boolean"},description:"@description withTitle could be disabled only in the case another overlay is present, ex Tooltip",defaultValue:{value:"true",computed:!1}}}};export{P as B,n as a,v as b,u as c};
