import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{F as Ve}from"./FormControl-mFNqy0mf.js";import{a as Oe,T as F}from"./Trigger-Dr0pG8ZW.js";import{V as Se}from"./validation-C9S5KgfE.js";import{$ as Ee}from"./useButton-DofEV6SJ.js";import{a as Ne}from"./FocusScope-DYM0gkGr.js";import{$ as Pe}from"./useFocusRing-4Vnvtzpc.js";import{u as Re}from"./usePopper-DPXU-o95.js";import{C as G}from"./Checkbox-CpdwBh1n.js";import{C as $e,a as _e}from"./Checklist-DABlPqEC.js";import{T as U,a as I,b as X}from"./Tag-BkVGqV3y.js";import{T as He}from"./TextInput-Bn1Cza0a.js";import{u as Be,E as Ge,D as Ue}from"./EnablePortalWrapper-DvpkRq0I.js";import{T as L}from"./Text-BU2xdpZ1.js";import{m as we}from"./merge-DI-veSMP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputLabel-DTQphj_R.js";import"./TooltipIcon-CeymCZzr.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./useFocusable-CAGu0lKI.js";import"./chain-D5h1pgIF.js";import"./SSRProvider-CYXx33DY.js";import"./Button-CYWlMQhW.js";import"./IconSize-BcCrF_mi.js";import"./focusStyle-CBFElZiz.js";import"./Portal-0C9N3MSP.js";import"./index-DxjWwZXO.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./IconCaretDown-C-LXN2Z7.js";import"./IconCaretDown16-Bqoo7UzD.js";import"./IconCross-BUeQrH0h.js";import"./IconTrashBin-ruSc1bNE.js";import"./IconTrashBin16-D8pYIjKc.js";import"./IconTrashBin24-DrDNK9RT.js";import"./index-CfyPTyT-.js";import"./useFormValidationState-Vs0Uifwm.js";import"./useControlledState-C0C-dzuH.js";import"./IconMinus-BhxphMyC.js";import"./IconMinus16-ChDakrvn.js";import"./useField-BhCfq6jD.js";import"./useLabels-DH9bA-v0.js";import"./LoadingCircle-CZrma5le.js";import"./IconEyeOff-BaqRyiPL.js";import"./records-DFIz8BfL.js";const Xe=t=>{const s=["tw-pr-9"];switch(t){case k.Small:s.push("tw-pl-3 tw-py-1");break;case k.Medium:s.push("tw-pl-[19px] tw-py-[11px]");break;default:return}return we(s)},Je=(t,s,i)=>{r.useEffect(()=>{function l(v){i!=null&&i.find(p=>p&&(v.target===p||p.contains(v.target)))||s()}return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[s,t,i])};var C=(t=>(t.Default="Default",t.Summarized="Summarized",t))(C||{}),k=(t=>(t.Small="Small",t.Medium="Medium",t))(k||{});const g=({items:t,activeItemKeys:s,onSelectionChange:i,ariaLabel:l="Select list",disabled:v=!1,placeholder:p,label:z,type:V="Default",size:A="Medium",validation:xe=Se.Default,summarizedLabel:O,indeterminateItemKeys:o,flip:Ce=!1,emphasis:ke=F.Default,enablePortal:Te=!0,filterLabel:Ie,emptyFilteredResultsLabel:Ke})=>{const[u,j]=r.useState(!1),[D,E]=r.useState([]),[N,Me]=r.useState(""),m=r.useRef(null),[P,R]=r.useState(null),[d,Fe]=r.useState(null),{isFocusVisible:Ae,focusProps:je}=Pe(),{maxHeight:$}=Be({current:d},{isOpen:u,autoResize:!0}),_=s.length>0,De=O??[s.length,"selected"].join(" ");Je(null,()=>j(!1),[m==null?void 0:m.current,P]);const qe=$!==Ue,H=r.useId(),q=()=>j(e=>!e),{buttonProps:We}=Ee({onPress:q,onKeyDown:e=>{e.key==="Escape"&&j(!1)},elementType:"div"},{current:d}),Le=e=>{const n=new Set(s);n.has(e)?n.delete(e):n.add(e),i(Array.from(n))},ze=e=>{e.code==="Space"&&q()},B=()=>u?X.SelectedWithFocus:X.Selected;r.useEffect(()=>{R(m==null?void 0:m.current)},[]),r.useEffect(()=>{E(t.map(e=>o!=null&&o.includes(e.value)?{...e,label:e.value,state:G.Mixed}:{...e,label:e.value}))},[t,o]);const W=r.useCallback(e=>{Me(e),E(t.reduce((n,c)=>c.isCategory||c.isDivider||c.value.toLowerCase().includes(e.toLowerCase())?o!=null&&o.includes(c.value)?[...n,{...c,label:c.value,state:G.Mixed}]:[...n,{...c,label:c.value}]:n,[]))},[o,t]);r.useEffect(()=>{!u&&W("")},[u,W]);const T=Re(d,P,{placement:"bottom-start",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"flip",enabled:Ce}]});return r.useEffect(()=>{(async()=>{T.update&&await T.update()})().catch(console.error)},[s]),a.jsxs("div",{className:"tw-relative",ref:m,children:[a.jsx(Oe,{disabled:v,buttonProps:We,isFocusVisible:Ae,isOpen:u,validation:xe,emphasis:ke,children:a.jsx("div",{className:we(["tw-flex tw-flex-1 tw-gap-2",Xe(A)]),ref:Fe,children:a.jsx("div",{className:"tw-flex tw-flex-1 tw-gap-2 focus:tw-outline-0",onClick:q,role:"combobox","aria-expanded":u,"aria-controls":H,"aria-label":l,...je,tabIndex:0,onKeyDown:ze,children:a.jsxs("div",{className:"tw-flex tw-flex-wrap tw-gap-2 tw-outline-none tw-items-center tw-min-h-[28px]",children:[z&&_&&a.jsx(L,{weight:"strong",children:z}),V==="Default"&&s.map(e=>a.jsx(U,{type:B(),label:e.toString(),size:A==="Small"?I.Small:I.Medium,onClick:v?void 0:()=>Le(e)},e)),V==="Summarized"&&(_||O)&&a.jsx(U,{type:B(),label:De,size:A==="Small"?I.Small:I.Medium,onClick:(o==null?void 0:o.length)===0?()=>i([]):void 0}),s.length===0&&p&&a.jsx(L,{color:"weak",children:p})]})})})}),u&&qe&&a.jsx(Ge,{enablePortal:Te,children:a.jsx("div",{id:H,ref:R,className:"tw-absolute tw-left-0 tw-w-full tw-overflow-hidden tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-mt-2 tw-z-[120000] tw-bg-base tw-min-w-[18rem]",style:{...T.styles.popper,width:d==null?void 0:d.getBoundingClientRect().width},...T.attributes.popper,children:a.jsxs(Ne,{restoreFocus:!0,children:[a.jsx("div",{className:"tw-p-4 tw-pb-0",children:a.jsx(He,{value:N,placeholder:Ie,clearable:!0,onChange:W,focusOnMount:!0})}),a.jsxs("div",{className:"tw-p-4 tw-overflow-y-auto tw-overflow-x-hidden tw-w-full tw-relative",style:{maxHeight:$},children:[D.length>0&&a.jsx($e,{activeValues:s.map(e=>e.toString()),setActiveValues:i,checkboxes:D.filter(e=>!e.isDivider&&!e.isCategory),direction:_e.Vertical,ariaLabel:l}),D.length===0&&N!==""&&a.jsx(L,{size:"small",color:"weak",children:Ke})]})]})},"content")})]})};g.displayName="FondueFilterableMultiSelect";g.__docgenInfo={description:"",methods:[],displayName:"FondueFilterableMultiSelect",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"isCategory",value:{name:"boolean",required:!1}},{key:"isDivider",value:{name:"boolean",required:!1}},{key:"avatar",value:{name:"ReactNode",required:!1}},{key:"imgSrc",value:{name:"string",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}}]}}],raw:"FilterableMultiSelectItem[]"},description:""},activeItemKeys:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelectionChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(keys: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"keys"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select list'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"FilterableMultiSelectType"},description:"",defaultValue:{value:"FilterableMultiSelectType.Default",computed:!0}},size:{required:!1,tsType:{name:"FilterableMultiSelectSize"},description:"",defaultValue:{value:"FilterableMultiSelectSize.Medium",computed:!0}},validation:{required:!1,tsType:{name:"Validation"},description:"",defaultValue:{value:"Validation.Default",computed:!0}},summarizedLabel:{required:!1,tsType:{name:"string"},description:""},indeterminateItemKeys:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:""},flip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emphasis:{required:!1,tsType:{name:"TriggerEmphasis"},description:"",defaultValue:{value:"TriggerEmphasis.Default",computed:!0}},enablePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},filterLabel:{required:!1,tsType:{name:"string"},description:""},emptyFilteredResultsLabel:{required:!1,tsType:{name:"string"},description:""}}};const Yt={title:"Components/Filterable Multi Select",component:g,tags:["autodocs"],args:{type:C.Default,size:k.Medium,placeholder:"Labels",label:"Labels",activeItemKeys:["Short tag","Tag 74"],items:[{value:"Checkbox label 1"},{value:"Short tag"},{value:"Checkbox label 2"},{value:"Checkbox label 3"},{value:"Tag 74"},{value:"This is a long tag"}]},argTypes:{type:{options:Object.keys(C),control:{type:"select"}},emphasis:{options:Object.keys(F),control:{type:"select"}},size:{options:Object.keys(k),control:{type:"select"}},validation:{options:Object.values(Se),control:{type:"select"}},disabled:{type:"boolean"},flip:{type:"boolean"},ariaLabel:{type:"string"},summarizedLabel:{type:"string"},activeItemKeys:{table:{disable:!0}},indeterminateItemKeys:{table:{disable:!0}}}},f=t=>{const[s,i]=r.useState(t.activeItemKeys);return a.jsx(g,{...t,activeItemKeys:s,onSelectionChange:l=>i(l)})},Qe=t=>{const[s,i]=r.useState(t.activeItemKeys);return a.jsx(Ve,{helper:{text:"Helper Text"},label:{children:"Multi-Select",htmlFor:""},children:a.jsx(g,{...t,activeItemKeys:s,onSelectionChange:l=>i(l)})})},Ye=t=>{const[s,i]=r.useState(t.activeItemKeys);return a.jsx("div",{className:"tw-absolute tw-right-0 tw-p-6 tw-w-96",children:a.jsx(g,{...t,activeItemKeys:s,onSelectionChange:l=>i(l)})})},K=f.bind({}),y=f.bind({});y.args={activeItemKeys:[],placeholder:"Placeholder text"};const b=f.bind({});b.args={type:C.Summarized};const M=Qe.bind({}),h=f.bind({});h.args={type:C.Summarized,summarizedLabel:"Mixed values",indeterminateItemKeys:["This is a long tag"]};const S=Ye.bind({});S.args={items:[{value:"Bacon ipsum dolor amet beef tri-tip rump, porchetta meatball andouille bacon shankle pancetta"},{value:"Short tag"},{value:"Checkbox label 2"},{value:"Checkbox label 3"},{value:"Tag 74"},{value:"This is a long tag"}],flip:!0};const w=f.bind({});w.args={activeItemKeys:[],placeholder:"Weak emphasis placeholder text",emphasis:F.Weak};const x=f.bind({});x.args={activeItemKeys:[],items:[{value:"Short tag"},{value:"Checkbox label 2"},{value:"Checkbox label 3"}],emphasis:F.Default,filterLabel:"Filter items",emptyFilteredResultsLabel:"No items found"};var J,Q,Y;K.parameters={...K.parameters,docs:{...(J=K.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(Y=(Q=K.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,se,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,oe;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FormControl helper={{
    text: 'Helper Text'
  }} label={{
    children: 'Multi-Select',
    htmlFor: ''
  }}>
            <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />
        </FormControl>;
}`,...(oe=(le=M.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ne,ce,ue;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(ue=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,pe,de;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <div className="tw-absolute tw-right-0 tw-p-6 tw-w-96">
            <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />
        </div>;
}`,...(de=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ge,fe,ve;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(ve=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ye,be,he;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  const [activeItemKeys, setActiveItemKeys] = useState<(string | number)[]>(args.activeItemKeys);
  return <FilterableMultiSelectComponent {...args} activeItemKeys={activeItemKeys} onSelectionChange={keys => setActiveItemKeys(keys)} />;
}`,...(he=(be=x.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const Zt=["FilterableMultiSelect","WithPlaceholder","WithOptionsSummarized","WithFormControl","WithMixedValues","WithRightAlignedContainer","WithWeakTriggerEmphasis","WithFilterLabelDefined"];export{K as FilterableMultiSelect,x as WithFilterLabelDefined,M as WithFormControl,h as WithMixedValues,b as WithOptionsSummarized,y as WithPlaceholder,S as WithRightAlignedContainer,w as WithWeakTriggerEmphasis,Zt as __namedExportsOrder,Yt as default};
