import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as l}from"./index-BwDkhjyp.js";import{F as M}from"./FormControl-mFNqy0mf.js";import{M as e,a}from"./MenuItem-BEWw9_Ux.js";import{T as V}from"./Trigger-Dr0pG8ZW.js";import{I as s}from"./IconMusicNote-qGOLTNH6.js";import{u as _}from"./useMemoizedId-EtHZ7Sxa.js";import{V as I}from"./validation-C9S5KgfE.js";import{D as c,a as n,b as w,c as S}from"./Dropdown-CqnuDm8l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./InputLabel-DTQphj_R.js";import"./TooltipIcon-CeymCZzr.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./useFocusable-CAGu0lKI.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Button-CYWlMQhW.js";import"./useButton-DofEV6SJ.js";import"./IconSize-BcCrF_mi.js";import"./focusStyle-CBFElZiz.js";import"./merge-DI-veSMP.js";import"./Portal-0C9N3MSP.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./IconCaretRight-BUEYSaCS.js";import"./elements-BOYmskOL.js";import"./IconCaretDown-C-LXN2Z7.js";import"./IconCaretDown16-Bqoo7UzD.js";import"./IconCross-BUeQrH0h.js";import"./IconTrashBin-ruSc1bNE.js";import"./IconTrashBin16-D8pYIjKc.js";import"./IconTrashBin24-DrDNK9RT.js";import"./FocusScope-DYM0gkGr.js";import"./useOverlayTriggerState-Bq4IkdK0.js";import"./useControlledState-C0C-dzuH.js";import"./useMenuTrigger-tJGR04eL.js";import"./useLabels-DH9bA-v0.js";import"./useLocalizedStringFormatter-D7Kogc_3.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-YFPGrsWM.js";import"./helper-Cw1sh7G0.js";import"./isScrollable-Bts8_1NI.js";import"./SelectionManager-BuW52QpN.js";import"./useField-BhCfq6jD.js";import"./useFormValidationState-Vs0Uifwm.js";import"./LoadingCircle-CZrma5le.js";import"./EnablePortalWrapper-DvpkRq0I.js";const Qe={title:"Components/Dropdown",component:c,tags:["autodocs"],args:{placeholder:"select item",disabled:!1,clearable:!1,validation:I.Default},argTypes:{size:{options:Object.values(n),control:{type:"select"},defaultValue:n.Small},activeItemId:{type:"string"},validation:{options:Object.values(I),control:{type:"select"}},alignment:{options:Object.values(w),control:{type:"select"},defaultValue:w.Start},position:{options:Object.values(S),control:{type:"select"},defaultValue:S.Bottom},flip:{control:{type:"boolean"},defaultValue:!1}},parameters:{docs:{description:{component:"### This component is deprecated, please use the [new Dropdown component](/docs/current_components-dropdown--documentation) instead."}}}},O=i=>{const[d,r]=l.useState(i.activeItemId);return l.useEffect(()=>r(i.activeItemId),[i.activeItemId]),t.jsx(c,{...i,activeItemId:d,onChange:o=>r(o)})},U=i=>{const[d,r]=l.useState(i.activeItemId);return l.useEffect(()=>r(i.activeItemId),[i.activeItemId]),t.jsx("div",{className:"tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center",children:t.jsx("div",{className:"tw-max-w-[150px]",children:t.jsx(c,{...i,activeItemId:d,onChange:o=>r(o)})})})},R=i=>{const[d,r]=l.useState(i.activeItemId);return l.useEffect(()=>r(i.activeItemId),[i.activeItemId]),t.jsxs("div",{className:"tw-overflow-y-auto tw-h-[100px] tw-my-6",children:[t.jsx("p",{className:"tw-p2",children:"Title"}),t.jsx("p",{className:"tw-p2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis iaculis eros. Curabitur quis tortor vestibulum lacus gravida ultrices eget sed velit. Donec id interdum nibh."}),t.jsx(c,{...i,activeItemId:d,onChange:o=>r(o)}),t.jsx("p",{className:"tw-p2",children:"Duis orci sapien, gravida pellentesque cursus non, cursus vitae dolor. Etiam luctus aliquam sem, non maximus risus efficitur sit amet. Nulla diam urna"})]})},G=i=>{const[d,r]=l.useState(i.activeItemId);return l.useEffect(()=>r(i.activeItemId),[i.activeItemId]),t.jsx("div",{className:"tw-p-4 tw-bg-black-5 tw-w-[400px]",children:t.jsx(c,{...i,activeItemId:d,onChange:o=>r(o)})})},H=i=>{const[d,r]=l.useState(i.activeItemId);l.useEffect(()=>r(i.activeItemId),[i.activeItemId]);const o=_();return t.jsx(M,{disabled:i.disabled,label:{children:"Dropdown Label",required:!1,htmlFor:o},children:t.jsx(c,{...i,id:o,activeItemId:d,onChange:P=>r(P)})})},m=O.bind({});m.args={size:n.Small,menuBlocks:[{id:"block1",ariaLabel:"First section",menuItems:[{id:1,title:"Small icon",size:e.Small,decorator:t.jsx(s,{})},{id:2,title:"Small icon warning",size:e.Small,decorator:t.jsx(s,{}),style:a.Danger},{id:3,title:"Small icon disabled",size:e.Small,decorator:t.jsx(s,{}),disabled:!0},{id:4,title:"Small icon warning disabled",size:e.Small,decorator:t.jsx(s,{}),style:a.Danger,disabled:!0}]},{id:"block2",ariaLabel:"Second section",menuItems:[{id:"9",title:"Small",size:e.Small},{id:"10",title:"Small warning",size:e.Small,style:a.Danger},{id:"11",title:"Small disabled",size:e.Small,disabled:!0},{id:"12",title:"Small warning disabled",style:a.Danger,size:e.Small,disabled:!0}]}]};const u=U.bind({});u.args={size:n.Small,menuBlocks:[{id:"block1",ariaLabel:"First section",menuItems:[{id:1,title:"Limited width icon",size:e.Small,decorator:t.jsx(s,{})},{id:2,title:"Limited width warning",style:a.Danger,size:e.Small,decorator:t.jsx(s,{})},{id:3,title:"Limited width disabled",size:e.Small,decorator:t.jsx(s,{}),disabled:!0},{id:4,title:"Limited width warning disabled",style:a.Danger,size:e.Small,decorator:t.jsx(s,{}),disabled:!0},{id:5,title:"Limited width warning with long title",style:a.Danger,size:e.Small,decorator:t.jsx(s,{})}]},{id:"block2",ariaLabel:"Second section",menuItems:[{id:"9",title:"Limited width",size:e.Small},{id:"10",title:"Limited width warning",style:a.Danger,size:e.Small},{id:"11",title:"Limited width disabled",size:e.Small,disabled:!0},{id:"12",title:"Limited width warning disabled",style:a.Danger,size:e.Small,disabled:!0}]}]};const p=O.bind({});p.args={size:n.Large,menuBlocks:[{id:"block1",ariaLabel:"First section",menuItems:[{id:"5",title:"Large icon",subtitle:"Subtitle",decorator:t.jsx(s,{}),size:e.Large},{id:"6",title:"Large icon warning",subtitle:"Subtitle",decorator:t.jsx(s,{}),size:e.Large,style:a.Danger},{id:"7",title:"Large icon disabled",subtitle:"Subtitle",decorator:t.jsx(s,{}),size:e.Large,disabled:!0},{id:"8",title:"Large icon warning disabled",subtitle:"Subtitle",decorator:t.jsx(s,{}),size:e.Large,style:a.Danger,disabled:!0}]},{id:"block2",ariaLabel:"Second section",menuItems:[{id:"13",title:"Large",subtitle:"Subtitle",size:e.Large},{id:"14",title:"Large warning",subtitle:"Subtitle",size:e.Large,style:a.Danger},{id:"15",title:"Large disabled",subtitle:"Subtitle",size:e.Large,disabled:!0},{id:"16",title:"Large warning disabled",subtitle:"Subtitle",size:e.Large,style:a.Danger,disabled:!0}]}]};const v=R.bind({});v.args={size:n.Small,menuBlocks:[{id:"block1",ariaLabel:"First section",menuItems:[{id:"9",title:"With Icon",subtitle:"Subtitle",decorator:t.jsx(s,{}),size:e.Large},{id:"10",title:"Warning icon",subtitle:"Subtitle",decorator:t.jsx(s,{}),size:e.Large,style:a.Danger},{id:"11",title:"This is disabled",subtitle:"Subtitle",decorator:t.jsx(s,{}),size:e.Large,disabled:!0},{id:"12",title:"Icon warning disabled",subtitle:"Subtitle",size:e.Small,style:a.Danger,disabled:!0}]},{id:"block2",ariaLabel:"Second section",menuItems:[{id:"17",title:"Small",subtitle:"Subtitle",size:e.Small},{id:"18",title:"Small warning",subtitle:"Subtitle",size:e.Small,style:a.Danger},{id:"19",title:"Small disabled",subtitle:"Subtitle",size:e.Small,disabled:!0},{id:"20",title:"Warning disabled",subtitle:"Subtitle",size:e.Small,style:a.Danger,disabled:!0}]}]};const b=G.bind({});b.args={size:n.Small,emphasis:V.Weak,menuBlocks:[{id:"block1",ariaLabel:"First section",menuItems:[{id:1,title:"Example item A"},{id:2,title:"Example item B"},{id:3,title:"Example item C"}]}]};const g=H.bind({});g.args={menuBlocks:[{id:"block1",ariaLabel:"First section",menuItems:[{id:1,title:"Example item A"},{id:2,title:"Example item B"},{id:3,title:"Example item C"}]}]};var f,h,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`(args: DropdownProps) => {
  const [active, setActive] = useState(args.activeItemId);
  useEffect(() => setActive(args.activeItemId), [args.activeItemId]);
  return <Dropdown {...args} activeItemId={active} onChange={id => setActive(id)} />;
}`,...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var D,L,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`(args: DropdownProps) => {
  const [active, setActive] = useState(args.activeItemId);
  useEffect(() => setActive(args.activeItemId), [args.activeItemId]);
  return <div className="tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center">
            <div className="tw-max-w-[150px]">
                <Dropdown {...args} activeItemId={active} onChange={id => setActive(id)} />
            </div>
        </div>;
}`,...(z=(L=u.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var j,y,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`(args: DropdownProps) => {
  const [active, setActive] = useState(args.activeItemId);
  useEffect(() => setActive(args.activeItemId), [args.activeItemId]);
  return <Dropdown {...args} activeItemId={active} onChange={id => setActive(id)} />;
}`,...(A=(y=p.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var C,E,k;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`(args: DropdownProps) => {
  const [active, setActive] = useState(args.activeItemId);
  useEffect(() => setActive(args.activeItemId), [args.activeItemId]);
  return <div className="tw-overflow-y-auto tw-h-[100px] tw-my-6">
            <p className="tw-p2">Title</p>
            <p className="tw-p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis iaculis eros. Curabitur quis tortor
                vestibulum lacus gravida ultrices eget sed velit. Donec id interdum nibh.
            </p>
            <Dropdown {...args} activeItemId={active} onChange={id => setActive(id)} />
            <p className="tw-p2">
                Duis orci sapien, gravida pellentesque cursus non, cursus vitae dolor. Etiam luctus aliquam sem, non
                maximus risus efficitur sit amet. Nulla diam urna
            </p>
        </div>;
}`,...(k=(E=v.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var N,W,F;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`(args: DropdownProps) => {
  const [active, setActive] = useState(args.activeItemId);
  useEffect(() => setActive(args.activeItemId), [args.activeItemId]);
  return <div className="tw-p-4 tw-bg-black-5 tw-w-[400px]">
            <Dropdown {...args} activeItemId={active} onChange={id => setActive(id)} />
        </div>;
}`,...(F=(W=b.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var T,B,q;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`(args: DropdownProps) => {
  const [active, setActive] = useState(args.activeItemId);
  useEffect(() => setActive(args.activeItemId), [args.activeItemId]);
  const id = useMemoizedId();
  return <FormControl disabled={args.disabled} label={{
    children: 'Dropdown Label',
    required: false,
    htmlFor: id
  }}>
            <Dropdown {...args} id={id} activeItemId={active} onChange={id => setActive(id)} />
        </FormControl>;
}`,...(q=(B=g.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const Xe=["SmallSelect","DropdownWithLimitedWidth","LargeSelect","WithinOverflow","WeakSelect","InsideFormControl"];export{u as DropdownWithLimitedWidth,g as InsideFormControl,p as LargeSelect,m as SmallSelect,b as WeakSelect,v as WithinOverflow,Xe as __namedExportsOrder,Qe as default};
