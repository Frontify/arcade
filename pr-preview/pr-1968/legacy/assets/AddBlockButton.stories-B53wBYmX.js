import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{$ as w}from"./useButton-DFNFXdnN.js";import{$ as b}from"./useFocusRing-Vzyl7-Lk.js";import{b as x}from"./useFocusable-wKuCPQI4.js";import{r as k}from"./index-BwDkhjyp.js";import{I as h}from"./IconPlus-Dy9edG7f.js";import{I as v}from"./IconSize-BcCrF_mi.js";import{F as y}from"./focusStyle-CBFElZiz.js";import{m as T}from"./merge-DI-veSMP.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconPlus16-DMEnDMzI.js";var n=(t=>(t.Left="Left",t.Top="Top",t.Bottom="Bottom",t.Right="Right",t))(n||{});const A={Horizontal:"tw-rotate-0",Vertical:"tw-rotate-90"},d={Left:"tw-rotate-180",Top:"tw-rotate-[270deg]",Bottom:"tw-rotate-90",Right:"tw-rotate-0"},s=({onClick:t,title:u,direction:o,orientation:i,"data-test-id":l="add-block-button"})=>{const{isFocusVisible:m,focusProps:f}=b(),g=k.useRef(null),{buttonProps:B}=w({onPress:()=>t()},g);return r.jsx("button",{...x(B,f),title:u,"data-test-id":l,className:T(["tw-group tw-leading-none tw-rounded-sm tw-outline-none",m&&y,i&&!o&&A[i],o&&d[o],!o&&!i&&d.Right]),children:r.jsx("span",{className:"tw-text-box-selected-strong-inverse tw-bg-box-selected-strong tw-rounded tw-inline-flex tw-items-center tw-w-7 tw-h-6 tw-relative tw-p-1 tw-transition-colors hover:tw-bg-box-selected-strong-hover hover:tw-text-box-selected-strong-inverse-hover group-active:tw-bg-box-selected-strong-pressed group-active:tw-text-bg-box-selected-strong-inverse-pressed",style:{clipPath:`path(
                        "M27.3333 10.9369L21.7246 2C20.5 0.5 19.5 0 18 0H4C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H18C19.5 24 20.5 23.5 21.7246 22L27.3333 13.0631C27.7412 12.4131 27.7412 11.5869 27.3333 10.9369Z"
                    )`},children:r.jsx(h,{size:v.Size16})})})};s.displayName="FondueAddBlockButton";s.__docgenInfo={description:"",methods:[],displayName:"FondueAddBlockButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"AddBlockButtonDirection"},description:"@deprecated use direction with ButtonDirection"},direction:{required:!1,tsType:{name:"ButtonDirection"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'add-block-button'",computed:!1}}}};const E={title:"Components/Add Block Button",component:s,tags:["autodocs"],args:{title:"Add Block Button",direction:n.Right},argTypes:{onClick:{action:"Click"},direction:{options:Object.values(n),control:"select"}}},e=t=>r.jsx(s,{...t});e.__docgenInfo={description:"",methods:[],displayName:"AddBlockButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"AddBlockButtonDirection"},description:"@deprecated use direction with ButtonDirection"},direction:{required:!1,tsType:{name:"ButtonDirection"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""}}};var a,c,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"(args: AddBlockButtonProps) => <AddBlockButtonComponent {...args} />",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const V=["AddBlockButton"];export{e as AddBlockButton,V as __namedExportsOrder,E as default};
