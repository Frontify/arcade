import{j as s}from"./jsx-runtime-DH9XN8A8.js";import{B as g,G as m,b as u,S as w}from"./Box-BtqgtP3Z.js";import{m as f}from"./merge-DI-veSMP.js";import{r as C}from"./index-v7USjxUg.js";import"./borderStyle-D9jrV09G.js";import"./focusStyle-CBFElZiz.js";import"./input-Cqwpjz1f.js";import"./Button-BfBJpGQT.js";import"./useButton-B6orroTH.js";import"./useFocusable-BRFkliNn.js";import"./useFocusRing-CP9UJNUw.js";import"./useEffectEvent-BaECT7_f.js";import"./chain-C8AhrK0W.js";import"./IconSize-BcCrF_mi.js";import"./Divider-BI8G7m_S.js";import"./Dropdown-Dao21ydm.js";import"./FocusScope-Drcq722v.js";import"./useOverlayTriggerState-C3ap9Qkt.js";import"./useControlledState-BSgwHaZM.js";import"./useMenuTrigger-dROe67R1.js";import"./useLabels-v-oj2KeZ.js";import"./useLocalizedStringFormatter-BEKlpfz7.js";import"./context-BFA77VTM.js";import"./VisuallyHidden-CBFC6H_6.js";import"./helper-B_Vetl89.js";import"./isScrollable-BSEN4xi5.js";import"./index-voQlCD4e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./SelectionManager-BD4p7d3N.js";import"./useField-Cf7VimOC.js";import"./useFormValidationState-BKAFCnHb.js";import"./usePopper-BO8FF5JQ.js";import"./index-DlnOb27V.js";import"./MenuItem-n3bavbk_.js";import"./IconCaretRight-bL6MdAvD.js";import"./IconCheckMark-CMS57PRn.js";import"./elements-BOYmskOL.js";import"./LoadingCircle-BSQayp2F.js";import"./Trigger-BvTVBjbf.js";import"./IconCaretDown-BxzyP7sS.js";import"./IconCaretDown16-DV8CvCws.js";import"./IconCross-LL1GOU_p.js";import"./IconExclamationMarkTriangle-CTTfs2nR.js";import"./IconExclamationMarkTriangle24-ZUoV6XtQ.js";import"./IconTrashBin16-Db8fv2tm.js";import"./IconTrashBin24-Dz-kV-1n.js";import"./validation-CJXPAjNB.js";import"./EnablePortalWrapper-DzTSSIqA.js";import"./Portal-BMcVKwlx.js";import"./useMemoizedId-Cl5PI4eu.js";import"./FormControl-DeLflFlr.js";import"./InputLabel-CAkTbk9Q.js";import"./TooltipIcon-DWdr_hgc.js";import"./LegacyTooltip-BReeJmjq.js";import"./useLink-C2PgwcjG.js";import"./IconExclamationMarkCircle24-CS86ZjBV.js";import"./IconQuestionMarkCircle-DT_LrHkX.js";import"./Switch-CibQ61jG.js";import"./TabItem-BOEZCaC7.js";import"./TextInput-DncHZpfW.js";import"./Tooltip-PCAYiURV.js";import"./useClickOutside-nHRsWOx2.js";import"./dialog-Dre1eVQK.js";import"./Tree-BW9Y7KE4.js";import"./isArray-U5_eLxni.js";const A="fondue-grid",r=({column:l=2,spacing:t=4,spacingX:i,spacingY:n,children:o,"data-test-id":b=A,width:x="100%",rowHeight:y="auto",bg:T,color:q,margin:h,marginX:G,marginY:$,padding:N,paddingX:_,paddingY:D,as:E="div"})=>{let v=0;return C.Children.map(o,X=>(v++,X)),s.jsx(g,{"data-test-id":b,className:f(["tw-grid",T,q,m(u.GAP,t),m(u.GAP_X,i),m(u.GAP_Y,n)]),style:{width:x,gridTemplateColumns:`repeat(${l}, 1fr)`,gridTemplateRows:`repeat(${Math.ceil(v/l)}, ${y})`},margin:h,marginX:G,marginY:$,padding:N,paddingX:_,paddingY:D,as:E,children:o})};r.displayName="FondueGrid";r.__docgenInfo={description:"@deprecated Use `Grid` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#grid the migration guide}.",methods:[],displayName:"FondueGrid",props:{column:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:"",defaultValue:{value:"4",computed:!1}},spacingX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},spacingY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"literal",value:"`${number}${DimensionUnity}`"},description:"",defaultValue:{value:"'100%'",computed:!1}},rowHeight:{required:!1,tsType:{name:"union",raw:"`${number}${DimensionUnity}` | 'auto'",elements:[{name:"literal",value:"`${number}${DimensionUnity}`"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},paddingX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},paddingY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},margin:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},marginX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},marginY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},bg:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-grid'",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'div' | 'span'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'span'"}]},description:"",defaultValue:{value:"'div'",computed:!1}}}};const Y="Lorem ipsum dolor sit amet",e={options:Object.values(w),control:{type:"select"},defaultValue:""},Me={title:"Layout/Grid",component:r,tags:["autodocs"],argTypes:{paddingX:e,paddingY:e,padding:e,marginX:e,marginY:e,margin:e,spacingX:e,spacingY:e,spacing:{options:Object.values(w),control:{type:"select"},defaultValue:4},as:{options:["div","span"],control:{type:"select"}},maxHeight:{type:"string"}},args:{spacing:4,column:4,"data-test-id":"custom-test-id",padding:4,margin:4,width:"100%",rowHeight:"100px",maxHeight:void 0,bg:"tw-bg-box-positive-strong",color:"tw-text-box-positive-strong-inverse",as:"div"},parameters:{status:{type:"deprecated"},docs:{description:{component:"### This component is deprecated, please use the [new Grid layout component](/docs/current_layout-grid--documentation) instead."}}}},k=["tw-bg-box-selected-strong tw-text-box-selected-strong-inverse","tw-bg-box-positive-strong tw-text-box-positive-strong-inverse","tw-bg-box-negative-strong tw-text-box-negative-strong-inverse","tw-bg-box-warning-strong tw-text-box-warning-strong-inverse","tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse","tw-bg-box-selected-strong tw-text-box-selected-strong-inverse","tw-bg-box-positive-strong tw-text-box-positive-strong-inverse","tw-bg-box-negative-strong tw-text-box-negative-strong-inverse","tw-bg-box-warning-strong tw-text-box-warning-strong-inverse","tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse","tw-bg-box-selected-strong tw-text-box-selected-strong-inverse","tw-bg-box-positive-strong tw-text-box-positive-strong-inverse","tw-bg-box-negative-strong tw-text-box-negative-strong-inverse","tw-bg-box-warning-strong tw-text-box-warning-strong-inverse","tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse"],a=l=>s.jsx(r,{...l,children:k.map((t,i)=>{const n=`content-key-${t}-${i}`;return s.jsx(g,{className:f(["tw-w-full tw-h-full",t]),children:Y},n)})});a.__docgenInfo={description:"",methods:[],displayName:"Default",props:{column:{required:!1,tsType:{name:"number"},description:""},spacing:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},spacingX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},spacingY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"literal",value:"`${number}${DimensionUnity}`"},description:""},rowHeight:{required:!1,tsType:{name:"union",raw:"`${number}${DimensionUnity}` | 'auto'",elements:[{name:"literal",value:"`${number}${DimensionUnity}`"},{name:"literal",value:"'auto'"}]},description:""},padding:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},paddingX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},paddingY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},margin:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},marginX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},marginY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},bg:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"union",raw:"'div' | 'span'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'span'"}]},description:""}}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: GridProps) => {
  return <Grid {...args}>
            {contentClasses.map((contentClass, i) => {
      const key = \`content-key-\${contentClass}-\${i}\`;
      return <Box key={key} className={merge(['tw-w-full tw-h-full', contentClass])}>
                        {EXAMPLE_CONTENT}
                    </Box>;
    })}
        </Grid>;
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Fe=["Default"];export{a as Default,Fe as __namedExportsOrder,Me as default};
