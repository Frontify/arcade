import{j as i}from"./jsx-runtime-DH9XN8A8.js";import{C as h}from"./Container-D3388nYv.js";import{S as y}from"./Box-VnElX1Lv.js";import{s as u,a as v}from"./Shared-ZwgqxlpJ.js";import{T as p}from"./Text-D3R2FYSj.js";import"./index-v7USjxUg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./merge-DI-veSMP.js";import"./borderStyle-D9jrV09G.js";import"./focusStyle-CBFElZiz.js";import"./input-DoXshtlp.js";import"./Button-BfBJpGQT.js";import"./useButton-B6orroTH.js";import"./useFocusable-BRFkliNn.js";import"./useFocusRing-CP9UJNUw.js";import"./useEffectEvent-BaECT7_f.js";import"./chain-C8AhrK0W.js";import"./IconSize-BcCrF_mi.js";import"./Checkbox-C8fDjqts.js";import"./useFormValidationState-BKAFCnHb.js";import"./useControlledState-BSgwHaZM.js";import"./InputLabel-CAkTbk9Q.js";import"./TooltipIcon-DWdr_hgc.js";import"./LegacyTooltip-BReeJmjq.js";import"./useLink-C2PgwcjG.js";import"./usePopper-BO8FF5JQ.js";import"./index-voQlCD4e.js";import"./index-DlnOb27V.js";import"./Portal-BMcVKwlx.js";import"./useMemoizedId-Cl5PI4eu.js";import"./IconCheckMark-CMS57PRn.js";import"./IconExclamationMarkCircle24-CS86ZjBV.js";import"./IconExclamationMarkTriangle-CTTfs2nR.js";import"./IconExclamationMarkTriangle24-ZUoV6XtQ.js";import"./IconQuestionMarkCircle-DT_LrHkX.js";import"./IconMinus-DtF84-GK.js";import"./DialogBody-DEPe4cXP.js";import"./dialog-Dre1eVQK.js";import"./Divider-BI8G7m_S.js";import"./FormControl-DeLflFlr.js";import"./validation-CJXPAjNB.js";import"./LoadingCircle-BSQayp2F.js";import"./Switch-CibQ61jG.js";import"./TabItem-BOEZCaC7.js";import"./elements-BOYmskOL.js";import"./TextInput-DncHZpfW.js";import"./IconCross-LL1GOU_p.js";import"./Tooltip-PCAYiURV.js";import"./useClickOutside-nHRsWOx2.js";import"./EnablePortalWrapper-DzTSSIqA.js";import"./Tree-CzP7ikJo.js";import"./immer-DpFkcGey.js";import"./Trigger-BvTVBjbf.js";import"./IconCaretDown-BxzyP7sS.js";import"./IconCaretDown16-DV8CvCws.js";import"./IconTrashBin16-Db8fv2tm.js";import"./IconTrashBin24-Dz-kV-1n.js";import"./records-DFIz8BfL.js";const Ce={title:"Typography/Text",component:p,argTypes:{size:{options:["x-small","small","medium","large"],control:{type:"select"}},weight:{options:["default","strong","x-strong"],control:{type:"select"}},as:{options:["a","abbr","address","em","label","li","span","strong","time","p"],control:{type:"select"}},color:{options:["default","weak","x-weak","disabled","negative","positive","warning","interactive"],control:{type:"select"}},boxColor:{options:["","neutral","selected","disabled","positive","negative","warning"],control:{type:"select"},defaultValue:""},...u},args:{children:"The fox jumps over the lazy dog",size:"medium",weight:"default",as:"span",color:"default",...v}},o=t=>i.jsx(p,{...t}),r=t=>i.jsx("div",{className:"tw-w-[200px] tw-p-2 tw-rounded tw-border",children:i.jsx(p,{...t,children:`Text with veryveryveryveryveryextremelyhugelymassivelysuperlengthygiganticwords and limited width.
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
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const _e=["DefaultText","LongTextWithNewLines","TextChildOfBoxToken"];export{o as DefaultText,r as LongTextWithNewLines,e as TextChildOfBoxToken,_e as __namedExportsOrder,Ce as default};
