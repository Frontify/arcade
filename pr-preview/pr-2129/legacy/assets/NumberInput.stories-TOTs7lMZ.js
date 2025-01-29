import{j as o}from"./jsx-runtime-DH9XN8A8.js";import{r as u}from"./index-v7USjxUg.js";import{I as _}from"./IconNook16-DPIHA1dy.js";import{V as s}from"./validation-CJXPAjNB.js";import{B as w}from"./Box-gNPIIi63.js";import{N as i}from"./NumberInput-D78xFTnZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./borderStyle-D9jrV09G.js";import"./merge-DI-veSMP.js";import"./focusStyle-CBFElZiz.js";import"./input-BYBzJZeD.js";import"./Button-BfBJpGQT.js";import"./useButton-B6orroTH.js";import"./useFocusable-BRFkliNn.js";import"./useFocusRing-CP9UJNUw.js";import"./useEffectEvent-BaECT7_f.js";import"./chain-C8AhrK0W.js";import"./IconSize-BcCrF_mi.js";import"./Checkbox-C8fDjqts.js";import"./useFormValidationState-BKAFCnHb.js";import"./useControlledState-BSgwHaZM.js";import"./InputLabel-CAkTbk9Q.js";import"./TooltipIcon-DWdr_hgc.js";import"./LegacyTooltip-BReeJmjq.js";import"./useLink-C2PgwcjG.js";import"./usePopper-BO8FF5JQ.js";import"./index-voQlCD4e.js";import"./index-DlnOb27V.js";import"./Portal-BMcVKwlx.js";import"./useMemoizedId-Cl5PI4eu.js";import"./IconCheckMark-CMS57PRn.js";import"./IconExclamationMarkCircle24-CS86ZjBV.js";import"./IconExclamationMarkTriangle-CTTfs2nR.js";import"./IconExclamationMarkTriangle24-ZUoV6XtQ.js";import"./IconQuestionMarkCircle-DT_LrHkX.js";import"./IconMinus-DtF84-GK.js";import"./Divider-BI8G7m_S.js";import"./FormControl-DeLflFlr.js";import"./LoadingCircle-CnEko-RI.js";import"./Switch-CibQ61jG.js";import"./TabItem-BOEZCaC7.js";import"./elements-BOYmskOL.js";import"./TextInput-NLH6WSWe.js";import"./IconCross-LL1GOU_p.js";import"./Tooltip-PCAYiURV.js";import"./useClickOutside-nHRsWOx2.js";import"./EnablePortalWrapper-DzTSSIqA.js";import"./dialog-Dre1eVQK.js";import"./Tree-CzP7ikJo.js";import"./immer-DpFkcGey.js";import"./Trigger-BvTVBjbf.js";import"./IconCaretDown-BxzyP7sS.js";import"./IconCaretDown16-DV8CvCws.js";import"./IconTrashBin16-Db8fv2tm.js";import"./IconTrashBin24-Dz-kV-1n.js";import"./IconPlus16-C4i4a16H.js";const Ce={title:"Components/Number Input",component:i,tags:["autodocs"],args:{clearable:!1},argTypes:{decorator:{description:"Add decorator element to start of the input",name:"decorator",defaultValue:void 0},suffix:{description:"String to append to the input value.",name:"suffix",defaultValue:void 0,control:{type:"text"}},disabled:{type:"boolean",table:{type:{summary:"boolean | undefined"},defaultValue:{summary:!1}}},readOnly:{type:"boolean",table:{type:{summary:"boolean | undefined"},defaultValue:{summary:!1}}},controls:{description:"Enable increment buttons",name:"controls",defaultValue:!1,control:{type:"boolean"}},clearable:{description:"Enable clear button",name:"clearable",defaultValue:!1,control:{type:"boolean"}},hugWidth:{description:"If `true` element will have a `auto` width, else `full` width",defaultValue:!1,control:{type:"boolean"}},status:{description:"Set the current status of the input",name:"status",options:Object.values(s),control:{type:"select"},defaultValue:s.Default},stepInterval:{description:"Set the incremental value",name:"stepInterval",defaultValue:10,control:{type:"number"}},valueSelect:{description:"Highlight current input value.",name:"valueSelect",defaultValue:!1,control:{type:"boolean"}},onChange:{description:"onChange callback",name:"onChange",defaultValue:void 0,action:"onChange"},"data-test-id":{table:{disable:!0}}},parameters:{status:{type:"deprecated"},docs:{description:{component:'### This component is deprecated, please use the [new Text Input component](/docs/current_components-text-input--documentation) with `type="number"` instead.'}}}},t=e=>o.jsx(i,{...e,placeholder:"Enter a number..."});t.args={clearable:!0};const r=e=>o.jsx(i,{...e,controls:!0,decorator:o.jsx(_,{})}),a=e=>{const[x,N]=u.useState(s.Success),[v,W]=u.useState(!1),E=(l=0)=>{N(l<0?s.Error:s.Success),W(l<0)};return o.jsx(i,{...e,onChange:E,controls:!0,status:x,valueSelect:v,defaultValue:3})},n=e=>o.jsx(w,{className:"tw-w-[400px]",children:o.jsx(i,{...e,controls:!0,hugWidth:!0,placeholder:"Input has a width of `auto`"})});t.__docgenInfo={description:"",methods:[],displayName:"BaseUsage"};r.__docgenInfo={description:"",methods:[],displayName:"WithDecoratorAndIncrementable"};a.__docgenInfo={description:"",methods:[],displayName:"WithErrorLessThanZero"};n.__docgenInfo={description:"",methods:[],displayName:"WithHugWidth"};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <NumberInput {...args} placeholder="Enter a number..." />;
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,h,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <NumberInput {...args} controls decorator={<IconNook16 />} />;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,g,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [status, setStatus] = useState<Validation>(Validation.Success);
  const [valueSelect, setValueSelect] = useState<boolean>(false);
  const handleValidation = (value: number = 0) => {
    setStatus(value < 0 ? Validation.Error : Validation.Success);
    setValueSelect(value < 0);
  };
  return <NumberInput {...args} onChange={handleValidation} controls status={status} valueSelect={valueSelect} defaultValue={3} />;
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var V,y,I;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <Box className="tw-w-[400px]">
            <NumberInput {...args} controls hugWidth placeholder="Input has a width of \`auto\`" />
        </Box>;
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const Te=["BaseUsage","WithDecoratorAndIncrementable","WithErrorLessThanZero","WithHugWidth"];export{t as BaseUsage,r as WithDecoratorAndIncrementable,a as WithErrorLessThanZero,n as WithHugWidth,Te as __namedExportsOrder,Ce as default};
