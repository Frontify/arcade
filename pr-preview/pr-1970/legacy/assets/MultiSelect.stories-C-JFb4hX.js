import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import{F as Ke}from"./FormControl-WXfw_ez_.js";import{a as Me,T as j}from"./Trigger-Dr0pG8ZW.js";import{V as ue}from"./validation-C9S5KgfE.js";import{$ as Ae}from"./useButton-DofEV6SJ.js";import{a as je}from"./FocusScope-DYM0gkGr.js";import{$ as qe}from"./useFocusRing-4Vnvtzpc.js";import{u as De}from"./usePopper-DPXU-o95.js";import{C as We}from"./Checkbox-ym3RzNcL.js";import{C as ze,a as Ve}from"./Checklist-BswIiqlo.js";import{T as L,a as k,b as P}from"./Tag-BkVGqV3y.js";import{u as Oe,E as Ee,D as Fe}from"./EnablePortalWrapper-DvpkRq0I.js";import{T as R}from"./Text-BU2xdpZ1.js";import{m as me}from"./merge-DI-veSMP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputLabel-CPjnR_AG.js";import"./TooltipIcon-CeymCZzr.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./useFocusable-CAGu0lKI.js";import"./chain-D5h1pgIF.js";import"./SSRProvider-CYXx33DY.js";import"./Button-CYWlMQhW.js";import"./IconSize-BcCrF_mi.js";import"./focusStyle-CBFElZiz.js";import"./Portal-0C9N3MSP.js";import"./index-DxjWwZXO.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./IconCaretDown-C-LXN2Z7.js";import"./IconCaretDown16-Bqoo7UzD.js";import"./IconCross-BUeQrH0h.js";import"./IconTrashBin-ruSc1bNE.js";import"./IconTrashBin16-D8pYIjKc.js";import"./IconTrashBin24-DrDNK9RT.js";import"./index-CfyPTyT-.js";import"./useFormValidationState-Vs0Uifwm.js";import"./useControlledState-C0C-dzuH.js";import"./IconMinus-BhxphMyC.js";import"./IconMinus16-ChDakrvn.js";import"./useField-BhCfq6jD.js";import"./useLabels-DH9bA-v0.js";import"./records-DFIz8BfL.js";const Ne=t=>{const s=["tw-pr-9"];switch(t){case w.Small:s.push("tw-pl-3 tw-py-1");break;case w.Medium:s.push("tw-pl-[19px] tw-py-[11px]");break;default:return}return me(s)},Le=(t,s,r)=>{i.useEffect(()=>{function o(g){r!=null&&r.find(u=>u&&(g.target===u||u.contains(g.target)))||s()}return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[s,t,r])};var S=(t=>(t.Default="Default",t.Summarized="Summarized",t))(S||{}),w=(t=>(t.Small="Small",t.Medium="Medium",t))(w||{});const d=({items:t,activeItemKeys:s,onSelectionChange:r,ariaLabel:o="Select list",disabled:g=!1,placeholder:u,label:q,type:D="Default",size:K="Medium",validation:pe=ue.Default,summarizedLabel:W,indeterminateItemKeys:n,flip:de=!1,emphasis:ge=j.Default,enablePortal:ye=!0})=>{const[m,M]=i.useState(!1),[fe,ve]=i.useState([]),l=i.useRef(null),[z,V]=i.useState(null),[p,he]=i.useState(null),be=i.useRef(null),{isFocusVisible:Se,focusProps:we}=qe(),{maxHeight:O}=Oe({current:p},{isOpen:m,autoResize:!0}),E=s.length>0,xe=W??[s.length,"selected"].join(" ");Le(null,()=>M(!1),[l==null?void 0:l.current,z]);const Ie=O!==Fe,F=i.useId(),A=()=>M(e=>!e),{buttonProps:ke}=Ae({onPress:A,onKeyDown:e=>{e.key==="Escape"&&M(!1)},elementType:"div"},{current:p}),Ce=e=>{const c=new Set(s);c.has(e)?c.delete(e):c.add(e),r(Array.from(c))},Te=e=>{e.code==="Space"&&A()},N=()=>m?P.SelectedWithFocus:P.Selected;i.useEffect(()=>{V(l==null?void 0:l.current)},[]),i.useEffect(()=>{ve(t.map(e=>{const c={...e,label:e.value};return n!=null&&n.includes(e.value)?{...c,state:We.Mixed}:c}))},[t,n]);const I=De(p,z,{placement:"bottom-start",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"flip",enabled:de}]});return i.useEffect(()=>{(async()=>{I.update&&await I.update()})().catch(console.error)},[s]),a.jsxs("div",{className:"tw-relative",ref:l,children:[a.jsx(Me,{disabled:g,buttonProps:ke,isFocusVisible:Se,isOpen:m,validation:pe,emphasis:ge,children:a.jsx("div",{className:me(["tw-flex tw-flex-1 tw-gap-2",Ne(K)]),ref:he,children:a.jsx("div",{className:"tw-flex tw-flex-1 tw-gap-2 focus:tw-outline-0",onClick:e=>{e.target===be.current&&m||A()},role:"combobox","aria-expanded":m,"aria-controls":F,"aria-label":o,...we,tabIndex:0,onKeyDown:Te,children:a.jsxs("div",{className:"tw-flex tw-flex-wrap tw-gap-2 tw-outline-none tw-items-center tw-min-h-[28px]",children:[q&&E&&a.jsx(R,{weight:"strong",children:q}),D==="Default"&&s.map(e=>a.jsx(L,{type:N(),label:e.toString(),size:K==="Small"?k.Small:k.Medium,onClick:g?void 0:()=>Ce(e)},e)),D==="Summarized"&&(E||W)&&a.jsx(L,{type:N(),label:xe,size:K==="Small"?k.Small:k.Medium,onClick:(n==null?void 0:n.length)===0?()=>r([]):void 0}),s.length===0&&u&&a.jsx(R,{color:"weak",children:u})]})})})}),m&&Ie&&a.jsx(Ee,{enablePortal:ye,children:a.jsx("div",{id:F,ref:V,className:"tw-absolute tw-left-0 tw-w-full tw-overflow-hidden tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-mt-2 tw-z-[120000] tw-bg-base tw-min-w-[18rem]",style:{...I.styles.popper,width:p==null?void 0:p.getBoundingClientRect().width},...I.attributes.popper,children:a.jsx(je,{restoreFocus:!0,children:a.jsx("div",{className:"tw-p-4 tw-overflow-y-auto tw-overflow-x-hidden tw-w-full tw-relative",style:{maxHeight:O},children:a.jsx(ze,{activeValues:s.map(e=>e.toString()),setActiveValues:r,checkboxes:fe.filter(e=>!e.isDivider&&!e.isCategory),direction:Ve.Vertical,ariaLabel:o})})})},"content")})]})};d.displayName="FondueMultiSelect";d.__docgenInfo={description:"",methods:[],displayName:"FondueMultiSelect",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"isCategory",value:{name:"boolean",required:!1}},{key:"isDivider",value:{name:"boolean",required:!1}},{key:"avatar",value:{name:"ReactNode",required:!1}},{key:"imgSrc",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}}],raw:"MultiSelectItem[]"},description:""},activeItemKeys:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelectionChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(keys: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"keys"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select list'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"MultiSelectType"},description:"",defaultValue:{value:"MultiSelectType.Default",computed:!0}},size:{required:!1,tsType:{name:"MultiSelectSize"},description:"",defaultValue:{value:"MultiSelectSize.Medium",computed:!0}},validation:{required:!1,tsType:{name:"Validation"},description:"",defaultValue:{value:"Validation.Default",computed:!0}},summarizedLabel:{required:!1,tsType:{name:"string"},description:""},indeterminateItemKeys:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},flip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emphasis:{required:!1,tsType:{name:"TriggerEmphasis"},description:"",defaultValue:{value:"TriggerEmphasis.Default",computed:!0}},enablePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Nt={title:"Components/Multi Select",component:d,tags:["autodocs"],args:{type:S.Default,size:w.Medium,placeholder:"Labels",label:"Labels",activeItemKeys:["Short tag","Tag 74"],items:[{value:"Checkbox label 1"},{value:"Short tag"},{value:"Checkbox label 2"},{value:"Checkbox label 3"},{value:"Tag 74"},{value:"This is a long tag"}]},argTypes:{type:{options:Object.keys(S),control:{type:"select"}},emphasis:{options:Object.keys(j),control:{type:"select"}},size:{options:Object.keys(w),control:{type:"select"}},validation:{options:Object.values(ue),control:{type:"select"}},disabled:{type:"boolean"},flip:{type:"boolean"},ariaLabel:{type:"string"},summarizedLabel:{type:"string"},activeItemKeys:{table:{disable:!0}},indeterminateItemKeys:{table:{disable:!0}}}},x=t=>{const[s,r]=i.useState(t.activeItemKeys);return a.jsx(d,{...t,activeItemKeys:s,onSelectionChange:o=>r(o)})},Pe=t=>{const[s,r]=i.useState(t.activeItemKeys);return a.jsx(Ke,{helper:{text:"Helper Text"},label:{children:"Multi-Select",htmlFor:""},children:a.jsx(d,{...t,activeItemKeys:s,onSelectionChange:o=>r(o)})})},Re=t=>{const[s,r]=i.useState(t.activeItemKeys);return a.jsx("div",{className:"tw-absolute tw-right-0 tw-p-6 tw-w-96",children:a.jsx(d,{...t,activeItemKeys:s,onSelectionChange:o=>r(o)})})},C=x.bind({}),y=x.bind({});y.args={activeItemKeys:[],placeholder:"Placeholder text"};const f=x.bind({});f.args={type:S.Summarized};const T=Pe.bind({}),v=x.bind({});v.args={type:S.Summarized,summarizedLabel:"Mixed values",indeterminateItemKeys:["This is a long tag"]};const h=Re.bind({});h.args={items:[{value:"Bacon ipsum dolor amet beef tri-tip rump, porchetta meatball andouille bacon shankle pancetta"},{value:"Short tag"},{value:"Checkbox label 2"},{value:"Checkbox label 3"},{value:"Tag 74"},{value:"This is a long tag"}],flip:!0};const b=x.bind({});b.args={activeItemKeys:[],placeholder:"Weak emphasis placeholder text",emphasis:j.Weak};var $,_,H;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(H=(_=C.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var B,G,U;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(U=(G=y.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var X,J,Q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FormControl helper={{
    text: 'Helper Text'
  }} label={{
    children: 'Multi-Select',
    htmlFor: ''
  }}>
            <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />
        </FormControl>;
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ae;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(ae=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,ie,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <div className="tw-absolute tw-right-0 tw-p-6 tw-w-96">
            <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />
        </div>;
}`,...(oe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,le,ce;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Lt=["MultiSelect","WithPlaceholder","WithOptionsSummarized","WithFormControl","WithMixedValues","WithRightAlignedContainer","WithWeakTriggerEmphasis"];export{C as MultiSelect,T as WithFormControl,v as WithMixedValues,f as WithOptionsSummarized,y as WithPlaceholder,h as WithRightAlignedContainer,b as WithWeakTriggerEmphasis,Lt as __namedExportsOrder,Nt as default};
