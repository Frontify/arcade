import{j as h}from"./jsx-runtime-Nms4Y4qS.js";import{$ as j}from"./useButton-DofEV6SJ.js";import{$ as E}from"./useFocusRing-4Vnvtzpc.js";import{r as v}from"./index-BwDkhjyp.js";import{I as f}from"./IconSize-BcCrF_mi.js";import{a as W}from"./focusStyle-CBFElZiz.js";import{m as d}from"./merge-DI-veSMP.js";var c=(t=>(t.Medium="Medium",t.Full="Full",t))(c||{}),e=(t=>(t.Default="Default",t.Positive="Positive",t.Negative="Negative",t.Danger="Danger",t.Loud="Loud",t.Primary="Primary",t.Secondary="Secondary",t))(e||{}),o=(t=>(t.Small="Small",t.Medium="Medium",t.Large="Large",t))(o||{}),i=(t=>(t.Button="Button",t.Submit="Submit",t.Reset="Reset",t))(i||{}),n=(t=>(t.Default="Default",t.Weak="Weak",t.Strong="Strong",t))(n||{});const O={[o.Small]:f.Size16,[o.Medium]:f.Size20,[o.Large]:f.Size24},z={[i.Button]:"button",[i.Submit]:"submit",[i.Reset]:"reset"};function _(t){const r=v.useRef(null);return v.useEffect(()=>{t&&(typeof t=="function"?t(r.current):t.current=r.current)}),r}const A="tw-group tw-border tw-box-box tw-relative tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-outline-none tw-font-body tw-font-medium ",G="tw-not-allowed tw-pointer-events-none tw-border-transparent tw-text-box-disabled-inverse tw-bg-box-disabled ",U={[c.Medium]:"tw-rounded",[c.Full]:"tw-rounded-full"},S={[o.Small]:{default:"tw-px-2 tw-h-6 tw-text-body-small ",iconOnly:"tw-h-6 tw-w-6 "},[o.Medium]:{default:"tw-px-4 tw-h-9 tw-text-body-medium ",iconOnly:"tw-h-9 tw-w-9 "},[o.Large]:{default:"tw-px-6 tw-h-12 tw-text-body-large ",iconOnly:"tw-h-12 tw-w-12 "}},Y={[o.Small]:"tw--ml-0.5 tw-mr-1 ",[o.Medium]:"tw--ml-1 tw-mr-1.5 ",[o.Large]:"tw--ml-1 tw-mr-2 "},H={[e.Default]:{button:"tw-border-transparent hover:tw-bg-button-background-hover hover:tw-border-button-border active:tw-bg-button-background-pressed ",icon:"tw-text-button-icon group-hover:tw-text-button-icon-hover group-active:tw-text-button-icon-pressed tw-leading-none ",text:"tw-text-button-text group-hover:tw-text-button-text-hover group-active:tw-text-button-text-pressed "},[e.Positive]:{button:"tw-border-transparent hover:tw-bg-button-positive-background-hover hover:tw-border-button-positive-border active:tw-bg-button-positive-background-pressed ",icon:"tw-text-button-strong-positive-icon group-hover:tw-text-button-strong-positive-icon-hovergroup-active:tw-text-button-strong-positive-icon-pressed tw-leading-none ",text:"tw-text-button-positive-text group-hover:tw-text-button-positive-text-hover group-active:tw-text-button-positive-text-pressed "},[e.Negative]:{button:"tw-border-transparent hover:tw-bg-button-negative-background-hover hover:tw-border-button-negative-border active:tw-bg-button-negative-background-pressed ",icon:"tw-text-button-negative-icon group-hover:tw-text-button-negative-icon-hovergroup-active:tw-text-button-negative-icon-pressed tw-leading-none ",text:"tw-text-button-negative-text group-hover:tw-text-button-negative-text-hovergroup-active:tw-text-button-negative-text-pressed "},[e.Danger]:{button:"tw-border-transparent hover:tw-bg-button-background-hover active:tw-bg-button-background-pressed ",icon:"tw-text-button-negative-icon group-hover:tw-text-button-negative-icon-hovergroup-active:tw-text-button-negative-icon-pressed tw-leading-none ",text:"tw-text-button-negative-icon group-hover:tw-text-button-negative-icon-hovergroup-active:tw-text-button-negative-icon-pressed "},[e.Loud]:{button:"tw-border-transparent hover:tw-bg-box-selected-hover active:tw-bg-box-selected-pressed ",icon:"tw-text-box-selected-inverse group-hover:tw-text-box-selected-inverse-hovergroup-active:tw-text-box-selected-inverse-pressed tw-leading-none ",text:"tw-text-box-selected-inverse group-hover:tw-text-box-selected-inverse-hovergroup-active:tw-text-box-selected-inverse-pressed "}},J={[n.Default]:{[e.Default]:{button:"tw-bg-button-background tw-border-button-border hover:tw-bg-button-background-hover active:tw-bg-button-background-pressed ",icon:"tw-text-button-icon group-hover:tw-text-button-icon-hover group-active:tw-text-button-icon-pressed tw-leading-none ",text:"tw-text-button-text group-hover:tw-text-button-text-hover group-active:tw-text-button-text-pressed "},[e.Positive]:{button:"tw-bg-button-positive-background tw-border-button-positive-border hover:tw-bg-button-positive-background-hover active:tw-bg-button-positive-background-pressed ",icon:"tw-text-button-positive-icon group-hover:tw-text-button-positive-icon-hover group-active:tw-text-button-positive-icon-pressed tw-leading-none ",text:"tw-text-button-positive-text group-hover:tw-text-button-positive-text-hover group-active:tw-text-button-positive-text-pressed "},[e.Negative]:{button:"tw-bg-button-negative-background tw-border-button-negative-border hover:tw-bg-button-negative-background-hover active:tw-bg-button-negative-background-pressed ",icon:"tw-text-button-negative-icon group-hover:tw-text-button-negative-icon-hovergroup-active:tw-text-button-negative-icon-pressed tw-leading-none ",text:"tw-text-button-negative-text group-hover:tw-text-button-negative-text-hovergroup-active:tw-text-button-negative-text-pressed "},[e.Danger]:{button:"tw-bg-button-background tw-border-button-border hover:tw-bg-button-background-hover active:tw-bg-button-background-pressed ",icon:"tw-text-button-negative-icon group-hover:tw-text-button-negative-icon-hovergroup-active:tw-text-button-negative-icon-pressed tw-leading-none ",text:"tw-text-button-negative-icon group-hover:tw-text-button-negative-icon-hovergroup-active:tw-text-button-negative-icon-pressed "},[e.Loud]:{button:"tw-bg-box-selected tw-border-button-border hover:tw-bg-box-selected-hover active:tw-bg-box-selected-pressed ",icon:"tw-text-box-selected-inverse group-hover:tw-text-box-selected-inverse-hovergroup-active:tw-text-box-selected-inverse-pressed tw-leading-none ",text:"tw-text-box-selected-inverse group-hover:tw-text-box-selected-inverse-hovergroup-active:tw-text-box-selected-inverse-pressed "}},[n.Strong]:{[e.Default]:{button:"tw-bg-button-strong-background tw-border-button-strong-border hover:tw-bg-button-strong-background-hover active:tw-bg-button-strong-background-pressed ",icon:"tw-text-button-strong-icon group-hover:tw-text-button-strong-icon-hover group-active:tw-text-button-strong-icon-pressed tw-leading-none ",text:"tw-text-button-strong-icon group-hover:tw-text-button-strong-icon-hover group-active:tw-text-button-strong-text-pressed "},[e.Positive]:{button:"tw-bg-button-strong-positive-background tw-border-button-strong-positive-border hover:tw-bg-button-strong-positive-background-hover active:tw-bg-button-strong-positive-background-pressed ",icon:"tw-text-button-strong-positive-icon group-hover:tw-text-button-strong-positive-icon-hover group-active:tw-text-button-strong-positive-icon-pressed tw-leading-none ",text:"tw-text-button-strong-positive-text group-hover:tw-text-button-strong-positive-text-hover group-active:tw-text-button-strong-positive-text-pressed "},[e.Negative]:{button:"tw-bg-button-strong-negative-background tw-border-button-strong-negative-border hover:tw-bg-button-strong-negative-background-hover active:tw-bg-button-strong-negative-background-pressed ",icon:"tw-text-button-strong-negative-icon group-hover:tw-text-button-strong-negative-icon-hovergroup-active:tw-text-button-strong-negative-icon-pressed tw-leading-none ",text:"tw-text-button-strong-negative-text group-hover:tw-text-button-strong-negative-text-hovergroup-active:tw-text-button-strong-negative-text-pressed "},[e.Danger]:{button:"tw-bg-button-danger-background tw-border-button-danger-border hover:tw-bg-button-danger-background-hover active:tw-bg-button-danger-background-pressed ",icon:"tw-text-button-danger-icon group-hover:tw-text-button-danger-icon-hovergroup-active:tw-text-button-danger-icon-pressed tw-leading-none ",text:"tw-text-button-danger-text group-hover:tw-text-button-danger-text-hovergroup-active:tw-text-button-danger-text-pressed "},[e.Loud]:{button:"tw-bg-box-selected-strong tw-border-box-selected-strong hover:tw-bg-box-selected-strong-hover active:tw-bg-box-selected-strong-pressed ",icon:"tw-text-box-selected-strong-inverse group-hover:tw-text-box-selected-strong-inversegroup-active:tw-text-box-selected-strong-inverse tw-leading-none ",text:"tw-text-box-selected-strong-inverse group-hover:tw-text-box-selected-strong-inversegroup-active:tw-text-box-selected-strong-inverse "}},[n.Weak]:H},K=({type:t=i.Button,title:r="",style:u=e.Default,size:s=o.Medium,rounding:y=c.Medium,emphasis:a=n.Strong,hideLabel:w=!1,disabled:b=!1,icon:p,children:g,onClick:m,hugWidth:M=!0,"aria-label":N,"aria-describedby":P,formId:V,solid:L,inverted:$,"data-test-id":x="button"},q)=>{u===e.Primary?(u=e.Default,a=n.Strong):u===e.Secondary&&(u=e.Default,a=n.Default),L===!1&&(a=n.Weak);const k=_(q),{buttonProps:R}=j({onPress:()=>m&&m(),isDisabled:b,type:z[t]},k),{isFocusVisible:B,focusProps:C}=E(),l=I=>b?G:`${J[a][u][I]}`,F=d([l("button"),A,U[y],p&&!g||w?S[s].iconOnly:S[s].default,!M&&"tw-w-full"]);return h.jsxs("button",{"data-test-id":x,"aria-label":N,"aria-disabled":b,"aria-describedby":P,ref:k,className:d([F,$&&"tw-dark",B&&W]),disabled:b,form:V,title:r,...R,...C,children:[p&&h.jsx("span",{"data-test-id":`${x}-icon`,className:d([g&&!w?Y[s]:"",l("icon")]),children:v.cloneElement(p,{size:O[s]})}),g&&h.jsx("span",{"data-test-id":`${x}-text`,className:d([l("text"),w&&"tw-sr-only"]),children:g})]})},D=v.forwardRef(K);D.displayName="FondueButton";D.__docgenInfo={description:"@deprecated Please use updated button component from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#button the migration guide}.",methods:[],displayName:"FondueButton",props:{type:{defaultValue:{value:"ButtonType.Button",computed:!0},required:!1},title:{defaultValue:{value:"''",computed:!1},required:!1},style:{defaultValue:{value:"ButtonStyle.Default",computed:!0},required:!1},size:{defaultValue:{value:"ButtonSize.Medium",computed:!0},required:!1},rounding:{defaultValue:{value:"ButtonRounding.Medium",computed:!0},required:!1},emphasis:{defaultValue:{value:"ButtonEmphasis.Strong",computed:!0},required:!1},hideLabel:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},hugWidth:{defaultValue:{value:"true",computed:!1},required:!1},"data-test-id":{defaultValue:{value:"'button'",computed:!1},required:!1}}};export{D as B,o as a,e as b,n as c,c as d,i as e,_ as u};
