import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{C as h}from"./Container-oPNtawOO.js";import{S as y}from"./Box-CgnZ-11w.js";import{s as u,a as v}from"./Shared-ZwgqxlpJ.js";import{T as p}from"./Text-BU2xdpZ1.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./merge-DI-veSMP.js";import"./borderStyle-D9jrV09G.js";import"./focusStyle-CBFElZiz.js";import"./input-CSNx4rRz.js";import"./Button-BBdFcQ_2.js";import"./useButton-B0CVDvll.js";import"./useFocusable-ClqOF1PM.js";import"./useFocusRing-Vzyl7-Lk.js";import"./SSRProvider-CYXx33DY.js";import"./chain-CSFqNvhK.js";import"./IconSize-BcCrF_mi.js";import"./Divider-DCi-HcbY.js";import"./FormControl-DbVvWZHc.js";import"./InputLabel-DuXda3bY.js";import"./TooltipIcon-CI6qleYl.js";import"./LegacyTooltip-NmtBsAB1.js";import"./useLink-BrkukSAv.js";import"./usePopper-C28Vz6Qz.js";import"./index-CS4BWtGh.js";import"./index-CfyPTyT-.js";import"./Portal-BBACcjoK.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-ByVuQE55.js";import"./IconExclamationMarkCircle-DIK3qNWl.js";import"./IconExclamationMarkCircle24-Vs83y98-.js";import"./IconExclamationMarkTriangle-DvvXw1YP.js";import"./IconExclamationMarkTriangle24-NdDZZD89.js";import"./IconQuestionMarkCircle-DpV6l-09.js";import"./validation-C9S5KgfE.js";import"./LoadingCircle-CZrma5le.js";import"./SegmentedControls-BSWtFswn.js";import"./useFormValidationState-Bo5Bz1o-.js";import"./FocusScope-CryrrNNO.js";import"./useField-CqwgNQmU.js";import"./useLabels-Bp6d37Qr.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-BDm5AEDr.js";import"./useControlledState-C0C-dzuH.js";import"./motion-C48bHxkn.js";import"./Switch-DDE7l5VE.js";import"./TabItem-DYJEWVSF.js";import"./elements-BOYmskOL.js";import"./TextInput-3-VhK_fn.js";import"./IconEyeOff-BAmb6qT8.js";import"./IconCross-CxP4FPDR.js";import"./Tooltip-BlJs8OXG.js";import"./useClickOutside-CKV3CrvD.js";import"./EnablePortalWrapper-B_d3Ldct.js";import"./dialog-Dre1eVQK.js";import"./Tree-BmY49tx_.js";import"./immer-DBm1MMjE.js";import"./IconGrabHandle12-OyP2wwdJ.js";import"./records-DFIz8BfL.js";const Ne={title:"Typography/Text",component:p,argTypes:{size:{options:["x-small","small","medium","large"],control:{type:"select"}},weight:{options:["default","strong","x-strong"],control:{type:"select"}},as:{options:["a","abbr","address","em","label","li","span","strong","time","p"],control:{type:"select"}},color:{options:["default","weak","x-weak","disabled","negative","positive","warning","interactive"],control:{type:"select"}},boxColor:{options:["","neutral","selected","disabled","positive","negative","warning"],control:{type:"select"},defaultValue:""},...u},args:{children:"The fox jumps over the lazy dog",size:"medium",weight:"default",as:"span",color:"default",...v}},o=t=>i.jsx(p,{...t}),r=t=>i.jsx("div",{className:"tw-w-[200px] tw-p-2 tw-rounded tw-border",children:i.jsx(p,{...t,children:`Text with veryveryveryveryveryextremelyhugelymassivelysuperlengthygiganticwords and limited width.
This is to display
            the different types of overflow control available.`})}),e=t=>i.jsx(h,{color:"tw-bg-box-negative",padding:y[2],children:i.jsx(p,{...t,children:"Example of the negative box alias token applied on the parent and the corresponding inverse token applied to the text content."})});e.args={boxColor:"negative"};o.__docgenInfo={description:"",methods:[],displayName:"DefaultText"};r.__docgenInfo={description:"",methods:[],displayName:"LongTextWithNewLines"};e.__docgenInfo={description:"",methods:[],displayName:"TextChildOfBoxToken"};var a,s,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"args => <TextComponent {...args} />",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div className="tw-w-[200px] tw-p-2 tw-rounded tw-border">
        <TextComponent {...args}>
            {\`Text with veryveryveryveryveryextremelyhugelymassivelysuperlengthygiganticwords and limited width.\\nThis is to display
            the different types of overflow control available.\`}
        </TextComponent>
    </div>`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,g,x;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <Container color="tw-bg-box-negative" padding={SPACING_VALUES[2]}>
            <TextComponent {...args}>
                {'Example of the negative box alias token applied on the parent and the corresponding inverse token applied to the text content.'}
            </TextComponent>
        </Container>;
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const ke=["DefaultText","LongTextWithNewLines","TextChildOfBoxToken"];export{o as DefaultText,r as LongTextWithNewLines,e as TextChildOfBoxToken,ke as __namedExportsOrder,Ne as default};
