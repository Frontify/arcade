import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{I as l}from"./IconIcon-BwqYlkW2.js";import{F as c,a as r,b as p}from"./FieldsetHeader-BSsYHN5l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconSize-BcCrF_mi.js";import"./IconIcon16-TK9s3MAx.js";import"./IconIcon24-DxzSV-8K.js";import"./Switch-C7Am4UHY.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./InputLabel-CPjnR_AG.js";import"./TooltipIcon-CeymCZzr.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./useFocusable-CAGu0lKI.js";import"./chain-D5h1pgIF.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Button-CYWlMQhW.js";import"./useButton-DofEV6SJ.js";import"./focusStyle-CBFElZiz.js";import"./merge-DI-veSMP.js";import"./Portal-0C9N3MSP.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./IconCaretDown-C-LXN2Z7.js";import"./IconCaretDown16-Bqoo7UzD.js";import"./IconMinus-BhxphMyC.js";import"./IconMinus16-ChDakrvn.js";import"./IconPlus-_dPCTyDn.js";import"./IconPlus16-xrjAMgl7.js";const W={title:"Deprecated/Fieldset Header",component:c,tags:["autodocs"],argTypes:{size:{options:[r.Small,r.Medium,r.Large],control:{type:"radio"}},type:{options:Object.values(p),control:{type:"radio"}}},args:{size:r.Large,active:!0,type:p.Default,disabled:!1,bold:!0,children:"Heading",decorator:!0}},t=e=>{const[i,o]=a.useState(e.active);return a.useEffect(()=>{o(e.active)},[e.active]),s.jsx(c,{...e,decorator:e.decorator&&s.jsx(l,{}),active:i,onClick:()=>o(!i)})};t.__docgenInfo={description:"",methods:[],displayName:"FieldsetHeader",props:{size:{required:!1,tsType:{name:"FieldsetHeaderSize"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},decorator:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"FieldsetHeaderType"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},bold:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""}}};var d,n,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args: FieldsetHeaderProps) => {
  const [active, setActive] = useState(args.active);
  useEffect(() => {
    setActive(args.active);
  }, [args.active]);
  return <FieldsetHeaderComponent {...args} decorator={args.decorator && <IconIcon />} active={active} onClick={() => setActive(!active)} />;
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const Y=["FieldsetHeader"];export{t as FieldsetHeader,Y as __namedExportsOrder,W as default};
