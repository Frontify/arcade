import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{a as q}from"./chunk-454WOBUV-CM0pFb8Z.js";import{V as m,v as z}from"./validation-C9S5KgfE.js";import{$ as R}from"./useFocusRing-4Vnvtzpc.js";import{r as d}from"./index-BwDkhjyp.js";import{B as b,a as x,b as h,c as g}from"./Button-CYWlMQhW.js";import{a as G}from"./IconCross-BUeQrH0h.js";import{I as M,a as W}from"./IconEyeOff-BaqRyiPL.js";import{u as L}from"./useMemoizedId-EtHZ7Sxa.js";import{F as U}from"./focusStyle-CBFElZiz.js";import{G as Y}from"./input-NR_Qaxkl.js";import{m as k}from"./merge-DI-veSMP.js";import"./v4-CQkTLCs1.js";import"./SSRProvider-CYXx33DY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useButton-DofEV6SJ.js";import"./useFocusable-CAGu0lKI.js";import"./chain-D5h1pgIF.js";import"./IconSize-BcCrF_mi.js";import"./Divider-DCi-HcbY.js";import"./FormControl-WXfw_ez_.js";import"./InputLabel-CPjnR_AG.js";import"./TooltipIcon-CeymCZzr.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Portal-0C9N3MSP.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./LoadingCircle-CZrma5le.js";import"./SegmentedControls-D3WaRgzO.js";import"./useFormValidationState-Vs0Uifwm.js";import"./FocusScope-DYM0gkGr.js";import"./useField-BhCfq6jD.js";import"./useLabels-DH9bA-v0.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-YFPGrsWM.js";import"./useControlledState-C0C-dzuH.js";import"./motion-C48bHxkn.js";import"./Switch-DBat6Y6T.js";import"./TabItem-DYJEWVSF.js";import"./elements-BOYmskOL.js";import"./TextInput-Bn1Cza0a.js";import"./Tooltip-CP_K22RC.js";import"./useClickOutside-CKV3CrvD.js";import"./EnablePortalWrapper-DvpkRq0I.js";import"./dialog-Dre1eVQK.js";import"./Tree-CHGGPXgG.js";import"./immer-DBm1MMjE.js";import"./IconGrabHandle12-EPEmE8ra.js";import"./Trigger-Dr0pG8ZW.js";import"./IconCaretDown-C-LXN2Z7.js";import"./IconCaretDown16-Bqoo7UzD.js";import"./IconTrashBin-ruSc1bNE.js";import"./IconTrashBin16-D8pYIjKc.js";import"./IconTrashBin24-DrDNK9RT.js";const v={Text:"text",Textarea:"textarea",Password:"password",Number:"number"},p=({autocomplete:u=!1,clearable:I,disabled:o,id:C,obfuscated:P=!0,placeholder:E,readOnly:c,required:S,status:i=m.Default,size:f,value:$,onChange:l,onFocus:D,onBlur:F,onKeyDown:N,"data-test-id":r="fondue-password-input"})=>{const e=d.useRef(null),[n,O]=d.useState(P),{isFocusVisible:T,focusProps:_}=R({isTextInput:!0}),w=d.useCallback(()=>{var a;l==null||l((a=e.current)==null?void 0:a.value)},[e,l]),B=()=>{e.current&&(e.current.value="",w())};return t.jsxs("div",{className:k(["tw-flex tw-items-center tw-justify-between tw-h-9 tw-gap-2 tw-px-3 tw-py-3 tw-transition tw-text-s tw-font-sans tw-relative tw-border tw-rounded",f?"":"tw-w-full",o?"tw-bg-box-disabled dark:tw-bg-box-disabled hover:tw-cursor-not-allowed tw-border-line-weak dark:tw-border-line-weak":"tw-bg-base dark:tw-bg-base tw-border-line-strong dark:tw-border-line-strong hover:tw-border-line-x-strong dark:hover:tw-border-line-x-strong focus-within:tw-border-line-xx-strong dark:focus-within:tw-border-line-xx-strong focus-within:hover:tw-border-line-xx-strong dark:focus-within:hover:tw-border-line-xx-strong",T&&U,i?z[i]:""]),"data-test-id":r,children:[t.jsx("input",{size:f,value:$,onBlur:F,onFocus:D,disabled:o,readOnly:c,required:S,ref:e,onKeyDown:N,onChange:w,placeholder:E,id:L(C),"aria-label":"Password Input",autoComplete:u?"on":"off",onClick:()=>{var a;return(a=e.current)==null?void 0:a.focus()},type:n?v.Password:v.Text,className:k(["tw-w-full tw-border-none tw-outline-none tw-bg-transparent tw-hide-input-arrows tw-text-sm",o||c?"tw-text-text-disabled tw-placeholder-text-disabled dark:tw-text-black-30 dark:tw-placeholder-black-40 hover:tw-cursor-not-allowed":"tw-text-text dark:tw-text-weak tw-placeholder-text-x-weak dark:tw-placeholder-text-x-weak "]),"data-test-id":`${r}-input`,..._}),t.jsxs("span",{className:"tw-flex tw-justify-between tw-items-center t-max-w-sm",children:[t.jsx(b,{disabled:o,size:x.Small,style:h.Default,emphasis:g.Weak,onClick:()=>O(!n),"aria-label":`${n?"show":"hide"} text input`,icon:n?t.jsx(M,{}):t.jsx(W,{}),"data-test-id":`${r}-visibility-icon`}),I?t.jsx(b,{disabled:o,onClick:B,icon:t.jsx(G,{}),size:x.Small,"aria-label":"Clear value",style:h.Default,emphasis:g.Weak,"data-test-id":`${r}-clear`}):null,i?Y(i,r):null]})]})};p.displayName="FonduePasswordInput";p.__docgenInfo={description:"",methods:[],displayName:"FonduePasswordInput",props:{obfuscated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},autocomplete:{defaultValue:{value:"false",computed:!1},required:!1},status:{defaultValue:{value:"Validation.Default",computed:!0},required:!1},"data-test-id":{defaultValue:{value:"'fondue-password-input'",computed:!1},required:!1}}};const oe={title:"Components/Password Input",component:p,tags:["autodocs"],argTypes:{autocomplete:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},description:"Flag to disable input",defaultValue:!1},clearable:{control:{type:"boolean"},description:"Render clear button at the end of the input to allow for clearing of the value.",defaultValue:!1},obfuscated:{control:{type:"boolean"},description:"Flag to show or obfuscate input value on initial render.",defaultValue:!0},placeholder:{control:{type:"text"},description:"Text for placeholder",defaultValue:void 0},status:{control:{type:"select"},options:Object.values(m),defaultValue:m.Default},id:{table:{disable:!0}},size:{table:{disable:!0}},onChange:{description:"onChange callback",action:"onchange",defaultValue:void 0},"data-test-id":{table:{disable:!0}}},args:{}},A=u=>t.jsx(p,{...u,onChange:q("onchange")}),s=A.bind({});s.args={placeholder:"Enter password"};var y,V,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <PasswordInput {...args} onChange={action('onchange')} />;
}`,...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const re=["Default"];export{s as Default,re as __namedExportsOrder,oe as default};
