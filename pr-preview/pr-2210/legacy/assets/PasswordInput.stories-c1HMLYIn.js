import{j as t}from"./jsx-runtime-DH9XN8A8.js";import{a as R}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{V as m,a as q}from"./validation-CJXPAjNB.js";import{$ as z}from"./useFocusRing-CP9UJNUw.js";import{r as u}from"./index-v7USjxUg.js";import{c as b,B as x,a as h,b as g}from"./Button-BfBJpGQT.js";import{a as G}from"./IconCross-LL1GOU_p.js";import{I as M,a as A}from"./TextInput-DncHZpfW.js";import{u as U}from"./useMemoizedId-Cl5PI4eu.js";import{F as W}from"./focusStyle-CBFElZiz.js";import{G as L}from"./input-BcxdIn50.js";import{m as k}from"./merge-DI-veSMP.js";import"./v4-CtRu48qb.js";import"./useEffectEvent-BaECT7_f.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useButton-B6orroTH.js";import"./useFocusable-BRFkliNn.js";import"./chain-C8AhrK0W.js";import"./IconSize-BcCrF_mi.js";import"./LoadingCircle-BSQayp2F.js";import"./IconCheckMark-CMS57PRn.js";import"./IconExclamationMarkTriangle-CTTfs2nR.js";import"./IconExclamationMarkTriangle24-ZUoV6XtQ.js";import"./LegacyTooltip-BReeJmjq.js";import"./useLink-C2PgwcjG.js";import"./usePopper-BO8FF5JQ.js";import"./index-voQlCD4e.js";import"./index-DlnOb27V.js";import"./Portal-BMcVKwlx.js";import"./IconExclamationMarkCircle24-CS86ZjBV.js";import"./Checkbox-C8fDjqts.js";import"./useFormValidationState-BKAFCnHb.js";import"./useControlledState-BSgwHaZM.js";import"./InputLabel-CAkTbk9Q.js";import"./TooltipIcon-DWdr_hgc.js";import"./IconQuestionMarkCircle-DT_LrHkX.js";import"./IconMinus-DtF84-GK.js";import"./Divider-BI8G7m_S.js";import"./Dropdown-Dao21ydm.js";import"./FocusScope-Drcq722v.js";import"./useOverlayTriggerState-C3ap9Qkt.js";import"./useMenuTrigger-dROe67R1.js";import"./useLabels-v-oj2KeZ.js";import"./useLocalizedStringFormatter-BEKlpfz7.js";import"./context-BFA77VTM.js";import"./VisuallyHidden-CBFC6H_6.js";import"./helper-B_Vetl89.js";import"./isScrollable-BSEN4xi5.js";import"./SelectionManager-BD4p7d3N.js";import"./useField-Cf7VimOC.js";import"./MenuItem-n3bavbk_.js";import"./IconCaretRight-bL6MdAvD.js";import"./elements-BOYmskOL.js";import"./Trigger-BvTVBjbf.js";import"./IconCaretDown-BxzyP7sS.js";import"./IconCaretDown16-DV8CvCws.js";import"./IconTrashBin16-Db8fv2tm.js";import"./IconTrashBin24-Dz-kV-1n.js";import"./EnablePortalWrapper-DzTSSIqA.js";import"./FormControl-DeLflFlr.js";import"./Switch-CibQ61jG.js";import"./TabItem-BOEZCaC7.js";import"./Tooltip-PCAYiURV.js";import"./useClickOutside-nHRsWOx2.js";import"./dialog-Dre1eVQK.js";import"./Tree-CzP7ikJo.js";import"./immer-DpFkcGey.js";const y={Text:"text",Textarea:"textarea",Password:"password",Number:"number"},p=({autocomplete:d=!1,clearable:j,disabled:o,id:C,obfuscated:P=!0,placeholder:T,readOnly:c,required:E,status:i=m.Default,size:f,value:S,onChange:n,onFocus:F,onBlur:$,onKeyDown:D,"data-test-id":r="fondue-password-input"})=>{const e=u.useRef(null),[l,N]=u.useState(P),{isFocusVisible:_,focusProps:O}=z({isTextInput:!0}),w=u.useCallback(()=>{var a;n==null||n((a=e.current)==null?void 0:a.value)},[e,n]),B=()=>{e.current&&(e.current.value="",w())};return t.jsxs("div",{className:k(["tw-flex tw-items-center tw-justify-between tw-h-9 tw-gap-2 tw-px-3 tw-py-3 tw-transition tw-text-s tw-font-sans tw-relative tw-border tw-rounded",f?"":"tw-w-full",o?"tw-bg-box-disabled dark:tw-bg-box-disabled hover:tw-cursor-not-allowed tw-border-line-weak dark:tw-border-line-weak":"tw-bg-base dark:tw-bg-base tw-border-line-strong dark:tw-border-line-strong hover:tw-border-line-x-strong dark:hover:tw-border-line-x-strong focus-within:tw-border-line-xx-strong dark:focus-within:tw-border-line-xx-strong focus-within:hover:tw-border-line-xx-strong dark:focus-within:hover:tw-border-line-xx-strong",_&&W,i?q[i]:""]),"data-test-id":r,children:[t.jsx("input",{size:f,value:S,onBlur:$,onFocus:F,disabled:o,readOnly:c,required:E,ref:e,onKeyDown:D,onChange:w,placeholder:T,id:U(C),"aria-label":"Password Input",autoComplete:d?"on":"off",onClick:()=>{var a;return(a=e.current)==null?void 0:a.focus()},type:l?y.Password:y.Text,className:k(["tw-w-full tw-border-none tw-outline-none tw-bg-transparent tw-hide-input-arrows tw-text-sm",o||c?"tw-text-text-disabled tw-placeholder-text-disabled dark:tw-text-black-30 dark:tw-placeholder-black-40 hover:tw-cursor-not-allowed":"tw-text-text dark:tw-text-weak tw-placeholder-text-x-weak dark:tw-placeholder-text-x-weak "]),"data-test-id":`${r}-input`,...O}),t.jsxs("span",{className:"tw-flex tw-justify-between tw-items-center t-max-w-sm",children:[t.jsx(b,{disabled:o,size:x.Small,style:h.Default,emphasis:g.Weak,onClick:()=>N(!l),"aria-label":`${l?"show":"hide"} text input`,icon:l?t.jsx(M,{}):t.jsx(A,{}),"data-test-id":`${r}-visibility-icon`}),j?t.jsx(b,{disabled:o,onClick:B,icon:t.jsx(G,{}),size:x.Small,"aria-label":"Clear value",style:h.Default,emphasis:g.Weak,"data-test-id":`${r}-clear`}):null,i?L(i,r):null]})]})};p.displayName="FonduePasswordInput";p.__docgenInfo={description:'@deprecated Use `TextInput` from `@frontify/fondue/components` with `type="password"` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#text-input the migration guide}.',methods:[],displayName:"FonduePasswordInput",props:{obfuscated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},autocomplete:{defaultValue:{value:"false",computed:!1},required:!1},status:{defaultValue:{value:"Validation.Default",computed:!0},required:!1},"data-test-id":{defaultValue:{value:"'fondue-password-input'",computed:!1},required:!1}}};const ne={title:"Components/Password Input",component:p,tags:["autodocs"],argTypes:{autocomplete:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},description:"Flag to disable input",defaultValue:!1},clearable:{control:{type:"boolean"},description:"Render clear button at the end of the input to allow for clearing of the value.",defaultValue:!1},obfuscated:{control:{type:"boolean"},description:"Flag to show or obfuscate input value on initial render.",defaultValue:!0},placeholder:{control:{type:"text"},description:"Text for placeholder",defaultValue:void 0},status:{control:{type:"select"},options:Object.values(m),defaultValue:m.Default},id:{table:{disable:!0}},size:{table:{disable:!0}},onChange:{description:"onChange callback",action:"onchange",defaultValue:void 0},"data-test-id":{table:{disable:!0}}},parameters:{status:{type:"deprecated"},docs:{description:{component:'### This component is deprecated, please use the [new Text Input component](/docs/current_components-text-input--documentation) with `type="password"` instead.'}}},args:{}},Y=d=>t.jsx(p,{...d,onChange:R("onchange")}),s=Y.bind({});s.args={placeholder:"Enter password"};var v,I,V;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <PasswordInput {...args} onChange={action('onchange')} />;
}`,...(V=(I=s.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const le=["Default"];export{s as Default,le as __namedExportsOrder,ne as default};
