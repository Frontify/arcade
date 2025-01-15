import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as p}from"./index-BwDkhjyp.js";import{I as _}from"./IconNook16-CIo9FfVu.js";import{V as n}from"./validation-CJXPAjNB.js";import{B as w}from"./Box-H-Tw-fv0.js";import{N as i}from"./NumberInput-BJXH0CXa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./borderStyle-D9jrV09G.js";import"./merge-DI-veSMP.js";import"./focusStyle-CBFElZiz.js";import"./input-DDhogwVX.js";import"./Button-wjaYzy_L.js";import"./useButton-B0CVDvll.js";import"./useFocusable-ClqOF1PM.js";import"./useFocusRing-Vzyl7-Lk.js";import"./SSRProvider-CYXx33DY.js";import"./chain-CSFqNvhK.js";import"./IconSize-BcCrF_mi.js";import"./Divider-DCi-HcbY.js";import"./FormControl-BQeGKqv3.js";import"./InputLabel-XVdppRg-.js";import"./TooltipIcon-Ki09kA5t.js";import"./LegacyTooltip-DmnzjIEq.js";import"./useLink-BrkukSAv.js";import"./usePopper-C28Vz6Qz.js";import"./index-CS4BWtGh.js";import"./index-CfyPTyT-.js";import"./Portal-BBACcjoK.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-CuwFbSck.js";import"./IconExclamationMarkCircle24-Vs83y98-.js";import"./IconExclamationMarkTriangle-DSMv5KKP.js";import"./IconExclamationMarkTriangle24-NdDZZD89.js";import"./IconQuestionMarkCircle-Buo6J1lY.js";import"./LoadingCircle-CZrma5le.js";import"./SegmentedControls-BSWtFswn.js";import"./useFormValidationState-Bo5Bz1o-.js";import"./FocusScope-CryrrNNO.js";import"./useField-CqwgNQmU.js";import"./useLabels-Bp6d37Qr.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-BDm5AEDr.js";import"./useControlledState-C0C-dzuH.js";import"./motion-C48bHxkn.js";import"./Switch-atUUSKtW.js";import"./TabItem-DYJEWVSF.js";import"./elements-BOYmskOL.js";import"./TextInput-DxIcqcvy.js";import"./IconCross-rmHxPLkJ.js";import"./Tooltip-BlJs8OXG.js";import"./useClickOutside-CKV3CrvD.js";import"./EnablePortalWrapper-B_d3Ldct.js";import"./dialog-Dre1eVQK.js";import"./Tree-BhvdmAx4.js";import"./immer-DBm1MMjE.js";import"./Trigger-DIiMo1j3.js";import"./IconCaretDown-DH0KSiPA.js";import"./IconCaretDown16-mzuMIk3a.js";import"./IconTrashBin16-g_sB0yBJ.js";import"./IconTrashBin24-DyoUj1kc.js";import"./IconMinus16-D_g1WimF.js";import"./IconPlus16-BeDPBK1Q.js";const Le={title:"Components/Number Input",component:i,tags:["autodocs"],args:{clearable:!1},argTypes:{decorator:{description:"Add decorator element to start of the input",name:"decorator",defaultValue:void 0},suffix:{description:"String to append to the input value.",name:"suffix",defaultValue:void 0,control:{type:"text"}},disabled:{type:"boolean",table:{type:{summary:"boolean | undefined"},defaultValue:{summary:!1}}},readOnly:{type:"boolean",table:{type:{summary:"boolean | undefined"},defaultValue:{summary:!1}}},controls:{description:"Enable increment buttons",name:"controls",defaultValue:!1,control:{type:"boolean"}},clearable:{description:"Enable clear button",name:"clearable",defaultValue:!1,control:{type:"boolean"}},hugWidth:{description:"If `true` element will have a `auto` width, else `full` width",defaultValue:!1,control:{type:"boolean"}},status:{description:"Set the current status of the input",name:"status",options:Object.values(n),control:{type:"select"},defaultValue:n.Default},stepInterval:{description:"Set the incremental value",name:"stepInterval",defaultValue:10,control:{type:"number"}},valueSelect:{description:"Highlight current input value.",name:"valueSelect",defaultValue:!1,control:{type:"boolean"}},onChange:{description:"onChange callback",name:"onChange",defaultValue:void 0,action:"onChange"},"data-test-id":{table:{disable:!0}}},parameters:{status:{type:"deprecated"},docs:{description:{component:'### This component is deprecated, please use the [new Text Input component](/docs/current_components-text-input--documentation) with `type="number"` instead.'}}}},t=e=>o.jsx(i,{...e,placeholder:"Enter a number..."});t.args={clearable:!0};const r=e=>o.jsx(i,{...e,controls:!0,decorator:o.jsx(_,{})}),a=e=>{const[x,v]=p.useState(n.Success),[N,W]=p.useState(!1),E=(l=0)=>{v(l<0?n.Error:n.Success),W(l<0)};return o.jsx(i,{...e,onChange:E,controls:!0,status:x,valueSelect:N,defaultValue:3})},s=e=>o.jsx(w,{className:"tw-w-[400px]",children:o.jsx(i,{...e,controls:!0,hugWidth:!0,placeholder:"Input has a width of `auto`"})});t.__docgenInfo={description:"",methods:[],displayName:"BaseUsage"};r.__docgenInfo={description:"",methods:[],displayName:"WithDecoratorAndIncrementable"};a.__docgenInfo={description:"",methods:[],displayName:"WithErrorLessThanZero"};s.__docgenInfo={description:"",methods:[],displayName:"WithHugWidth"};var u,m,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <NumberInput {...args} placeholder="Enter a number..." />;
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,h,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <NumberInput {...args} controls decorator={<IconNook16 />} />;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,g,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [status, setStatus] = useState<Validation>(Validation.Success);
  const [valueSelect, setValueSelect] = useState<boolean>(false);
  const handleValidation = (value: number = 0) => {
    setStatus(value < 0 ? Validation.Error : Validation.Success);
    setValueSelect(value < 0);
  };
  return <NumberInput {...args} onChange={handleValidation} controls status={status} valueSelect={valueSelect} defaultValue={3} />;
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var V,y,I;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <Box className="tw-w-[400px]">
            <NumberInput {...args} controls hugWidth placeholder="Input has a width of \`auto\`" />
        </Box>;
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const Oe=["BaseUsage","WithDecoratorAndIncrementable","WithErrorLessThanZero","WithHugWidth"];export{t as BaseUsage,r as WithDecoratorAndIncrementable,a as WithErrorLessThanZero,s as WithHugWidth,Oe as __namedExportsOrder,Le as default};
