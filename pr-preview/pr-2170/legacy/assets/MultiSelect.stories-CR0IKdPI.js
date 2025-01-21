import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{F as Ke}from"./FormControl-BQeGKqv3.js";import{a as Me,T as j}from"./Trigger-DIiMo1j3.js";import{V as ue}from"./validation-CJXPAjNB.js";import{$ as Ae}from"./useButton-B0CVDvll.js";import{a as je}from"./FocusScope-CryrrNNO.js";import{$ as qe}from"./useFocusRing-Vzyl7-Lk.js";import{u as De}from"./usePopper-C28Vz6Qz.js";import{C as Ee}from"./Checkbox-BUIQ0igJ.js";import{C as We,a as ze}from"./Checklist-BWI-YG2d.js";import{T as N,a as C,b as P}from"./Tag-DD7KzOcs.js";import{u as Ve,E as Le,D as Oe}from"./EnablePortalWrapper-B_d3Ldct.js";import{T as R}from"./Text-BU2xdpZ1.js";import{m as me}from"./merge-DI-veSMP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputLabel-XVdppRg-.js";import"./TooltipIcon-Ki09kA5t.js";import"./LegacyTooltip-DmnzjIEq.js";import"./useLink-BrkukSAv.js";import"./useFocusable-ClqOF1PM.js";import"./chain-CSFqNvhK.js";import"./SSRProvider-CYXx33DY.js";import"./Button-wjaYzy_L.js";import"./IconSize-BcCrF_mi.js";import"./focusStyle-CBFElZiz.js";import"./Portal-BBACcjoK.js";import"./index-CS4BWtGh.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-CuwFbSck.js";import"./IconExclamationMarkCircle24-Vs83y98-.js";import"./IconExclamationMarkTriangle-DSMv5KKP.js";import"./IconExclamationMarkTriangle24-NdDZZD89.js";import"./IconQuestionMarkCircle-Buo6J1lY.js";import"./IconCaretDown-DH0KSiPA.js";import"./IconCaretDown16-mzuMIk3a.js";import"./IconCross-rmHxPLkJ.js";import"./IconTrashBin16-g_sB0yBJ.js";import"./IconTrashBin24-DyoUj1kc.js";import"./index-CfyPTyT-.js";import"./useFormValidationState-Bo5Bz1o-.js";import"./useControlledState-C0C-dzuH.js";import"./IconMinus-Yzz9MQwg.js";import"./IconMinus16-D_g1WimF.js";import"./useField-CqwgNQmU.js";import"./useLabels-Bp6d37Qr.js";import"./records-DFIz8BfL.js";const Fe=t=>{const s=["tw-pr-9"];switch(t){case w.Small:s.push("tw-pl-3 tw-py-1");break;case w.Medium:s.push("tw-pl-[19px] tw-py-[11px]");break;default:return}return me(s)},Ne=(t,s,i)=>{r.useEffect(()=>{function o(g){i!=null&&i.find(u=>u&&(g.target===u||u.contains(g.target)))||s()}return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[s,t,i])};var S=(t=>(t.Default="Default",t.Summarized="Summarized",t))(S||{}),w=(t=>(t.Small="Small",t.Medium="Medium",t))(w||{});const d=({items:t,activeItemKeys:s,onSelectionChange:i,ariaLabel:o="Select list",disabled:g=!1,placeholder:u,label:q,type:D="Default",size:M="Medium",validation:pe=ue.Default,summarizedLabel:E,indeterminateItemKeys:l,flip:de=!1,emphasis:ge=j.Default,enablePortal:ye=!0})=>{const[m,I]=r.useState(!1),[fe,ve]=r.useState([]),c=r.useRef(null),[W,z]=r.useState(null),[p,he]=r.useState(null),be=r.useRef(null),{isFocusVisible:Se,focusProps:we}=qe(),{maxHeight:V}=Ve({current:p},{isOpen:m,autoResize:!0}),L=s.length>0,xe=E??[s.length,"selected"].join(" ");Ne(null,()=>I(!1),[c==null?void 0:c.current,W]);const Ie=V!==Oe,O=r.useId(),A=()=>I(e=>!e),{buttonProps:ke}=Ae({onPress:A,onKeyDown:e=>{e.key==="Escape"&&I(!1)},elementType:"div"},{current:p}),Ce=e=>{const n=new Set(s);n.has(e)?n.delete(e):n.add(e),i(Array.from(n))},Te=e=>{(e.code==="Space"||e.code==="Enter")&&A()},F=()=>m?P.SelectedWithFocus:P.Selected;r.useEffect(()=>{z(c==null?void 0:c.current)},[]),r.useEffect(()=>{ve(t.map(e=>{const n={...e,label:e.value};return l!=null&&l.includes(e.value)?{...n,state:Ee.Mixed}:n}))},[t,l]);const k=De(p,W,{placement:"bottom-start",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"flip",enabled:de}]});return r.useEffect(()=>{(async()=>{k.update&&await k.update()})().catch(console.error)},[s]),r.useLayoutEffect(()=>{const e=n=>{n.key==="Escape"&&I(!1)};return window.addEventListener("keyup",e),()=>{window.removeEventListener("keyup",e)}},[]),a.jsxs("div",{className:"tw-relative",ref:c,children:[a.jsx(Me,{disabled:g,buttonProps:ke,isFocusVisible:Se,isOpen:m,validation:pe,emphasis:ge,children:a.jsx("div",{className:me(["tw-flex tw-flex-1 tw-gap-2",Fe(M)]),ref:he,children:a.jsx("div",{className:"tw-flex tw-flex-1 tw-gap-2 focus:tw-outline-0",onClick:e=>{e.target===be.current&&m||A()},role:"combobox","aria-expanded":m,"aria-controls":O,"aria-label":o,...we,tabIndex:0,onKeyDown:Te,children:a.jsxs("div",{className:"tw-flex tw-flex-wrap tw-gap-2 tw-outline-none tw-items-center tw-min-h-[28px]",children:[q&&L&&a.jsx(R,{weight:"strong",children:q}),D==="Default"&&s.map(e=>a.jsx(N,{type:F(),label:e.toString(),size:M==="Small"?C.Small:C.Medium,onClick:g?void 0:()=>Ce(e)},e)),D==="Summarized"&&(L||E)&&a.jsx(N,{type:F(),label:xe,size:M==="Small"?C.Small:C.Medium,onClick:(l==null?void 0:l.length)===0?()=>i([]):void 0}),s.length===0&&u&&a.jsx(R,{color:"weak",children:u})]})})})}),m&&Ie&&a.jsx(Le,{enablePortal:ye,children:a.jsx("div",{id:O,ref:z,className:"tw-absolute tw-left-0 tw-w-full tw-overflow-hidden tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-mt-2 tw-z-[120000] tw-bg-base tw-min-w-[18rem]",style:{...k.styles.popper,width:p==null?void 0:p.getBoundingClientRect().width},...k.attributes.popper,children:a.jsx(je,{restoreFocus:!0,children:a.jsx("div",{className:"tw-p-4 tw-overflow-y-auto tw-overflow-x-hidden tw-w-full tw-relative",style:{maxHeight:V},children:a.jsx(We,{activeValues:s.map(e=>e.toString()),setActiveValues:i,checkboxes:fe.filter(e=>!e.isDivider&&!e.isCategory),direction:ze.Vertical,ariaLabel:o})})})},"content")})]})};d.displayName="FondueMultiSelect";d.__docgenInfo={description:"",methods:[],displayName:"FondueMultiSelect",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"isCategory",value:{name:"boolean",required:!1}},{key:"isDivider",value:{name:"boolean",required:!1}},{key:"avatar",value:{name:"ReactNode",required:!1}},{key:"imgSrc",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}}],raw:"MultiSelectItem[]"},description:""},activeItemKeys:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelectionChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(keys: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"keys"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select list'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"MultiSelectType"},description:"",defaultValue:{value:"MultiSelectType.Default",computed:!0}},size:{required:!1,tsType:{name:"MultiSelectSize"},description:"",defaultValue:{value:"MultiSelectSize.Medium",computed:!0}},validation:{required:!1,tsType:{name:"Validation"},description:"",defaultValue:{value:"Validation.Default",computed:!0}},summarizedLabel:{required:!1,tsType:{name:"string"},description:""},indeterminateItemKeys:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},flip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emphasis:{required:!1,tsType:{name:"TriggerEmphasis"},description:"",defaultValue:{value:"TriggerEmphasis.Default",computed:!0}},enablePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Lt={title:"Components/Multi Select",component:d,tags:["autodocs"],args:{type:S.Default,size:w.Medium,placeholder:"Labels",label:"Labels",activeItemKeys:["Short tag","Tag 74"],items:[{value:"Checkbox label 1"},{value:"Short tag"},{value:"Checkbox label 2"},{value:"Checkbox label 3"},{value:"Tag 74"},{value:"This is a long tag"}]},argTypes:{type:{options:Object.keys(S),control:{type:"select"}},emphasis:{options:Object.keys(j),control:{type:"select"}},size:{options:Object.keys(w),control:{type:"select"}},validation:{options:Object.values(ue),control:{type:"select"}},disabled:{type:"boolean"},flip:{type:"boolean"},ariaLabel:{type:"string"},summarizedLabel:{type:"string"},activeItemKeys:{table:{disable:!0}},indeterminateItemKeys:{table:{disable:!0}}}},x=t=>{const[s,i]=r.useState(t.activeItemKeys);return a.jsx(d,{...t,activeItemKeys:s,onSelectionChange:o=>i(o)})},Pe=t=>{const[s,i]=r.useState(t.activeItemKeys);return a.jsx(Ke,{helper:{text:"Helper Text"},label:{children:"Multi-Select",htmlFor:""},children:a.jsx(d,{...t,activeItemKeys:s,onSelectionChange:o=>i(o)})})},Re=t=>{const[s,i]=r.useState(t.activeItemKeys);return a.jsx("div",{className:"tw-absolute tw-right-0 tw-p-6 tw-w-96",children:a.jsx(d,{...t,activeItemKeys:s,onSelectionChange:o=>i(o)})})},T=x.bind({}),y=x.bind({});y.args={activeItemKeys:[],placeholder:"Placeholder text"};const f=x.bind({});f.args={type:S.Summarized};const K=Pe.bind({}),v=x.bind({});v.args={type:S.Summarized,summarizedLabel:"Mixed values",indeterminateItemKeys:["This is a long tag"]};const h=Re.bind({});h.args={items:[{value:"Bacon ipsum dolor amet beef tri-tip rump, porchetta meatball andouille bacon shankle pancetta"},{value:"Short tag"},{value:"Checkbox label 2"},{value:"Checkbox label 3"},{value:"Tag 74"},{value:"This is a long tag"}],flip:!0};const b=x.bind({});b.args={activeItemKeys:[],placeholder:"Weak emphasis placeholder text",emphasis:j.Weak};var $,_,H;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(H=(_=T.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var B,G,U;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(U=(G=y.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var X,J,Q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;K.parameters={...K.parameters,docs:{...(Y=K.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FormControl helper={{
    text: 'Helper Text'
  }} label={{
    children: 'Multi-Select',
    htmlFor: ''
  }}>
            <MultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />
        </FormControl>;
}`,...(ee=(Z=K.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ae;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
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
}`,...(ce=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Ot=["MultiSelect","WithPlaceholder","WithOptionsSummarized","WithFormControl","WithMixedValues","WithRightAlignedContainer","WithWeakTriggerEmphasis"];export{T as MultiSelect,K as WithFormControl,v as WithMixedValues,f as WithOptionsSummarized,y as WithPlaceholder,h as WithRightAlignedContainer,b as WithWeakTriggerEmphasis,Ot as __namedExportsOrder,Lt as default};
