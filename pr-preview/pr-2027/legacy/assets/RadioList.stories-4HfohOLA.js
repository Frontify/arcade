import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{a as C}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r}from"./index-BwDkhjyp.js";import{u as _,g as P}from"./useMemoizedId-EtHZ7Sxa.js";import{c as $}from"./elements-BOYmskOL.js";import{L as M,a as O,T as A}from"./LegacyTooltip-C061YhHi.js";import{I as F}from"./IconQuestionMarkCircle-CMNESB9s.js";import{I as G}from"./IconSize-BcCrF_mi.js";import{m as v}from"./merge-DI-veSMP.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useLink-DorAuuFQ.js";import"./useFocusable-CAGu0lKI.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Button-CYWlMQhW.js";import"./useButton-DofEV6SJ.js";import"./focusStyle-CBFElZiz.js";import"./Portal-0C9N3MSP.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";var c=(i=>(i.Default="Default",i.Weak="Weak",i))(c||{});const a=({...i})=>{const n=_(),m=r.useRef(null),f=$(m.current);return e.jsx("div",{role:"tabpanel",ref:m,id:`${n}-content`,"aria-labelledby":n,tabIndex:f?-1:0,...i})};a.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},emphasis:{required:!1,tsType:{name:"RadioButtonEmphasis"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""}}};var x=(i=>(i.Horizontal="Horizontal",i.Vertical="Vertical",i))(x||{});const s=({children:i,defaultValue:n,direction:m="Horizontal",onChange:f,name:Y="default-radio",ariaLabel:z})=>{const h=r.useRef(null),[R,y]=r.useState(n),H=r.Children.map(i,t=>r.isValidElement(t)?t==null?void 0:t.props:null)??[];return r.useEffect(()=>{y(n)},[n]),r.useEffect(()=>{if(h.current){const t=h.current.querySelector(`input[value="${R}"]`);t&&t.focus()}},[R]),e.jsx("div",{"data-test-id":"radio-list-wrapper",role:"radiogroup","aria-label":z??"Choose an option",ref:h,className:v(["tw-flex",m==="Horizontal"?"tw-gap-4":"tw-flex-col"]),children:H.map(t=>{const o=P();return e.jsxs("div",{className:"tw-flex tw-items-center tw-mb-2",children:[e.jsx("input",{"data-test-id":"radio-input",disabled:t.disabled,id:o,type:"radio",name:Y,value:t.value,"aria-label":t.hideLabel?t.value:void 0,"aria-labelledby":t.hideLabel?void 0:`${o}-label`,"aria-describedby":!t.hideLabel&&t.helperText?`${o}-description`:void 0,"aria-checked":t.value===R,defaultChecked:t.value===R,className:v(["tw-peer tw-form-radio w-w-4 tw-h-4 tw-border-black-60 disabled:tw-border-black-10 focus:tw-ring-0 focus:tw-ring-offset-0 focus-visible:tw-ring-2 focus-visible:tw-ring-offset-2",t.emphasis===c.Weak?"tw-text-black-80":"tw-text-box-selected-strong"]),onChange:()=>{y(t.value),f&&f(t.value)}}),!t.hideLabel&&e.jsxs("label",{id:`${o}-label`,htmlFor:o,className:v(["tw-flex tw-flex-col tw-pl-2 tw-text-sm tw-font-normal peer-checked:tw-font-medium tw-text-black-80 peer-disabled:tw-text-black-40"]),"data-test-id":"radio-label",children:[t.value,t.helperText&&e.jsx("span",{id:`${o}-description`,className:"tw-text-black-80 tw-font-normal",children:t.helperText})]}),t.tooltip&&e.jsx(M,{alignment:O.Middle,content:t.tooltip,hoverDelay:75,position:A.Top,triggerElement:e.jsx("button",{className:"tw-flex tw-text-black-80 tw-mx-2 tw-self-center",children:e.jsx(F,{size:G.Size16})}),withArrow:!0})]},o)})})};s.__docgenInfo={description:"",methods:[],displayName:"RadioList",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"RadioListDirection"},description:"",defaultValue:{value:"RadioListDirection.Horizontal",computed:!0}},defaultValue:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'default-radio'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const Le={title:"Components/RadioList",component:s,tags:["autodocs"],argTypes:{direction:{options:[x.Horizontal,x.Vertical],control:{type:"radio"}},defaultValue:{options:["Rib Eye","T-Bone","NY Strip"],control:{type:"select"},defaultValue:"Rib Eye"},ariaLabel:{control:{type:"text"}},name:{control:{type:"text"}},onChange:C("change")}},Q=i=>e.jsxs(s,{name:i.name,direction:i.direction,defaultValue:i.defaultValue,children:[e.jsx(a,{value:"Rib Eye"}),e.jsx(a,{value:"T-Bone"}),e.jsx(a,{value:"NY Strip"})]}),b=Q.bind({}),J=i=>e.jsxs(s,{name:"radio-list-1",direction:i.direction,defaultValue:"Rib Eye",children:[e.jsx(a,{value:"Rib Eye",emphasis:c.Weak}),e.jsx(a,{value:"T-Bone",emphasis:c.Weak}),e.jsx(a,{value:"NY Strip",emphasis:c.Weak})]}),l=J.bind({});l.storyName="Weak emphasis radio buttons";const K=i=>e.jsxs(s,{name:"radio-list-2",direction:i.direction,defaultValue:"T-Bone",children:[e.jsx(a,{value:"Rib Eye",disabled:!0}),e.jsx(a,{value:"T-Bone"}),e.jsx(a,{value:"NY Strip"})]}),d=K.bind({});d.storyName="Disabled radio button";const U=i=>e.jsxs(s,{name:"radio-list-3",direction:i.direction,defaultValue:"Rib Eye",children:[e.jsx(a,{value:"Rib Eye",helperText:"Best steak ever"}),e.jsx(a,{value:"T-Bone"}),e.jsx(a,{value:"NY Strip"})]}),u=U.bind({});u.storyName="With helper text";const X=i=>e.jsxs(s,{name:"radio-list-4",direction:i.direction,defaultValue:"Rib Eye",children:[e.jsx(a,{value:"Rib Eye",tooltip:"Might choose this one"}),e.jsx(a,{value:"T-Bone",tooltip:"Or this one"}),e.jsx(a,{value:"NY Strip",tooltip:"Or maybe this one"})]}),p=X.bind({});p.storyName="With tooltips";var g,B,T;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`(args: RadioListProps) => {
  return <RadioList name={args.name} direction={args.direction} defaultValue={args.defaultValue}>
            <RadioButton value="Rib Eye" />
            <RadioButton value="T-Bone" />
            <RadioButton value="NY Strip" />
        </RadioList>;
}`,...(T=(B=b.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var w,E,j;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(args: RadioListProps) => {
  return <RadioList name="radio-list-1" direction={args.direction} defaultValue="Rib Eye">
            <RadioButton value="Rib Eye" emphasis={RadioButtonEmphasis.Weak} />
            <RadioButton value="T-Bone" emphasis={RadioButtonEmphasis.Weak} />
            <RadioButton value="NY Strip" emphasis={RadioButtonEmphasis.Weak} />
        </RadioList>;
}`,...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var L,k,N;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`(args: RadioListProps) => {
  return <RadioList name="radio-list-2" direction={args.direction} defaultValue="T-Bone">
            <RadioButton value="Rib Eye" disabled />
            <RadioButton value="T-Bone" />
            <RadioButton value="NY Strip" />
        </RadioList>;
}`,...(N=(k=d.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var W,V,S;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`(args: RadioListProps) => {
  return <RadioList name="radio-list-3" direction={args.direction} defaultValue="Rib Eye">
            <RadioButton value="Rib Eye" helperText="Best steak ever" />
            <RadioButton value="T-Bone" />
            <RadioButton value="NY Strip" />
        </RadioList>;
}`,...(S=(V=u.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var q,I,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`(args: RadioListProps) => {
  return <RadioList name="radio-list-4" direction={args.direction} defaultValue="Rib Eye">
            <RadioButton value="Rib Eye" tooltip="Might choose this one" />
            <RadioButton value="T-Bone" tooltip="Or this one" />
            <RadioButton value="NY Strip" tooltip="Or maybe this one" />
        </RadioList>;
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const ke=["Default","WithWeakEmphasisRadioButtons","WithDisabledRadioButton","WithHelperTextRadioButton","WithTooltipRadioButton"];export{b as Default,d as WithDisabledRadioButton,u as WithHelperTextRadioButton,p as WithTooltipRadioButton,l as WithWeakEmphasisRadioButtons,ke as __namedExportsOrder,Le as default};
