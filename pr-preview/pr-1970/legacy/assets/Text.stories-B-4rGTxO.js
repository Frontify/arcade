import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{C as h}from"./Container-BqnZs29C.js";import{S as y}from"./Box-hT4xwuW0.js";import{s as u,a as v}from"./Shared-ZwgqxlpJ.js";import{T as p}from"./Text-BU2xdpZ1.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./merge-DI-veSMP.js";import"./borderStyle-D9jrV09G.js";import"./focusStyle-CBFElZiz.js";import"./input-RhARRT5w.js";import"./Button-CYWlMQhW.js";import"./useButton-DofEV6SJ.js";import"./useFocusable-CAGu0lKI.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./IconSize-BcCrF_mi.js";import"./Divider-DCi-HcbY.js";import"./FormControl-WXfw_ez_.js";import"./InputLabel-CPjnR_AG.js";import"./TooltipIcon-CeymCZzr.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Portal-0C9N3MSP.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./validation-C9S5KgfE.js";import"./LoadingCircle-CZrma5le.js";import"./SegmentedControls-D3WaRgzO.js";import"./useFormValidationState-Vs0Uifwm.js";import"./FocusScope-DYM0gkGr.js";import"./useField-BhCfq6jD.js";import"./useLabels-DH9bA-v0.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-YFPGrsWM.js";import"./useControlledState-C0C-dzuH.js";import"./motion-C48bHxkn.js";import"./Switch-C7Am4UHY.js";import"./TabItem-DYJEWVSF.js";import"./elements-BOYmskOL.js";import"./TextInput-Bn1Cza0a.js";import"./IconEyeOff-BaqRyiPL.js";import"./IconCross-BUeQrH0h.js";import"./Tooltip-CP_K22RC.js";import"./useClickOutside-CKV3CrvD.js";import"./EnablePortalWrapper-DvpkRq0I.js";import"./dialog-Dre1eVQK.js";import"./Tree-CHGGPXgG.js";import"./immer-DBm1MMjE.js";import"./IconGrabHandle12-EPEmE8ra.js";import"./Trigger-Dr0pG8ZW.js";import"./IconCaretDown-C-LXN2Z7.js";import"./IconCaretDown16-Bqoo7UzD.js";import"./IconTrashBin-ruSc1bNE.js";import"./IconTrashBin16-D8pYIjKc.js";import"./IconTrashBin24-DrDNK9RT.js";import"./records-DFIz8BfL.js";const Ee={title:"Typography/Text",component:p,argTypes:{size:{options:["x-small","small","medium","large"],control:{type:"select"}},weight:{options:["default","strong","x-strong"],control:{type:"select"}},as:{options:["a","abbr","address","em","label","li","span","strong","time","p"],control:{type:"select"}},color:{options:["default","weak","x-weak","disabled","negative","positive","warning","interactive"],control:{type:"select"}},boxColor:{options:["","neutral","selected","disabled","positive","negative","warning"],control:{type:"select"},defaultValue:""},...u},args:{children:"The fox jumps over the lazy dog",size:"medium",weight:"default",as:"span",color:"default",...v}},o=t=>i.jsx(p,{...t}),r=t=>i.jsx("div",{className:"tw-w-[200px] tw-p-2 tw-rounded tw-border",children:i.jsx(p,{...t,children:`Text with veryveryveryveryveryextremelyhugelymassivelysuperlengthygiganticwords and limited width.
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
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const Ie=["DefaultText","LongTextWithNewLines","TextChildOfBoxToken"];export{o as DefaultText,r as LongTextWithNewLines,e as TextChildOfBoxToken,Ie as __namedExportsOrder,Ee as default};
