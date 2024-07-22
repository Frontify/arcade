import{j as t}from"./jsx-runtime-Nms4Y4qS.js";import{r as T}from"./index-BwDkhjyp.js";import{C as x}from"./Checkbox-D9asks5b.js";import{C as u,a as s}from"./Checklist-DXgz_YUe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFormValidationState-Vs0Uifwm.js";import"./SSRProvider-CYXx33DY.js";import"./useFocusRing-4Vnvtzpc.js";import"./useFocusable-CAGu0lKI.js";import"./chain-D5h1pgIF.js";import"./useControlledState-C0C-dzuH.js";import"./InputLabel-Cb39M_3M.js";import"./TooltipIcon-DgUrnRFN.js";import"./LegacyTooltip-BoEBGEhI.js";import"./useLink-DorAuuFQ.js";import"./usePopper-ByXn8U-3.js";import"./index-BxibOwXx.js";import"./index-CfyPTyT-.js";import"./Button-CYWlMQhW.js";import"./useButton-DofEV6SJ.js";import"./IconSize-BcCrF_mi.js";import"./focusStyle-CBFElZiz.js";import"./merge-DI-veSMP.js";import"./Portal-By7XnO0v.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-CLvJH1sB.js";import"./IconExclamationMarkCircle-Cob4vb5T.js";import"./IconExclamationMarkCircle24-DpwtNT9z.js";import"./IconExclamationMarkTriangle-CRTWkDyu.js";import"./IconExclamationMarkTriangle24-GqPjgFpk.js";import"./IconQuestionMarkCircle-C_agVHg1.js";import"./IconMinus-kXP7QfAW.js";import"./IconMinus16-homLHf6Z.js";import"./useField-BhCfq6jD.js";import"./useLabels-DH9bA-v0.js";const le={title:"Components/Checklist",component:u,tags:["autodocs"],argTypes:{columns:{options:[1,2,3,4],control:{type:"select"},if:{arg:"direction",eq:s.Vertical}},direction:{options:[s.Horizontal,s.Vertical],control:{type:"radio"}}},args:{ariaLabel:"checklist"}},P=[{value:"box-1",label:"Checkbox label",tooltip:{content:"Random Tooltip"}},{value:"box-2",label:"Checkbox label",note:"Note about this input",disabled:!0},{value:"box-3",label:"Checkbox label",state:x.Mixed}],p=Array.from({length:8}).fill({}).map((e,r)=>({value:`box-${r}`,label:`Checkbox Nr. ${r}`,tooltip:{content:`Random Tooltip ${r}`}})),o=e=>{const[r,l]=T.useState([]);return t.jsx(u,{...e,direction:e.direction,checkboxes:P,activeValues:r,setActiveValues:l})},m=e=>{const[r,l]=T.useState([]);return t.jsx(u,{...e,activeValues:r,setActiveValues:l})},i=e=>t.jsx(m,{...e,checkboxes:p});i.args={direction:s.Vertical,columns:2};const a=e=>t.jsx("div",{className:"tw-w-[300px] tw-p-2 tw-border- tw-border tw-rounded tw-border-line",children:t.jsx(m,{...e,checkboxes:p})});a.args={direction:s.Vertical,columns:2};a.argTypes={direction:{table:{disable:!0}},ariaLabel:{type:"string"}};const n=e=>t.jsx("div",{className:"tw-w-[300px] tw-p-2 tw-border- tw-border tw-rounded tw-border-line",children:t.jsx(m,{...e,checkboxes:p.slice(0,-1)})});n.args={direction:s.Vertical,columns:3};n.argTypes={direction:{table:{disable:!0}}};o.__docgenInfo={description:"",methods:[],displayName:"Checklist",props:{checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'> & { value: string }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    id?: string;
    state?: CheckboxState;
    emphasis?: CheckboxEmphasis;
    size?: CheckboxSize;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    hideLabel?: boolean;
    tooltip?: InputLabelTooltipProps;
    helperText?: string;
    'aria-label'?: string;
    groupInputProps?: HTMLAttributes<HTMLElement>;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"state",value:{name:"CheckboxState",required:!1}},{key:"emphasis",value:{name:"CheckboxEmphasis",required:!1}},{key:"size",value:{name:"CheckboxSize",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}},required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}],required:!1}},{key:"helperText",value:{name:"string",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"groupInputProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"union",raw:"'onChange' | 'groupInputProps' | 'value'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'groupInputProps'"},{name:"literal",value:"'value'"}]}],raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'>"},{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"CheckboxValue[]"},description:""},setActiveValues:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},activeValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},direction:{required:!0,tsType:{name:"union",raw:"ChecklistDirection.Vertical | ChecklistDirection.Horizontal",elements:[{name:"ChecklistDirection.Vertical"},{name:"ChecklistDirection.Horizontal"}]},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"MultipleColumns",props:{checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'> & { value: string }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    id?: string;
    state?: CheckboxState;
    emphasis?: CheckboxEmphasis;
    size?: CheckboxSize;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    hideLabel?: boolean;
    tooltip?: InputLabelTooltipProps;
    helperText?: string;
    'aria-label'?: string;
    groupInputProps?: HTMLAttributes<HTMLElement>;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"state",value:{name:"CheckboxState",required:!1}},{key:"emphasis",value:{name:"CheckboxEmphasis",required:!1}},{key:"size",value:{name:"CheckboxSize",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}},required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}],required:!1}},{key:"helperText",value:{name:"string",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"groupInputProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"union",raw:"'onChange' | 'groupInputProps' | 'value'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'groupInputProps'"},{name:"literal",value:"'value'"}]}],raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'>"},{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"CheckboxValue[]"},description:""},setActiveValues:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},activeValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},direction:{required:!0,tsType:{name:"union",raw:"ChecklistDirection.Vertical | ChecklistDirection.Horizontal",elements:[{name:"ChecklistDirection.Vertical"},{name:"ChecklistDirection.Horizontal"}]},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"MultipleColumnsInContainedSpace",props:{checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'> & { value: string }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    id?: string;
    state?: CheckboxState;
    emphasis?: CheckboxEmphasis;
    size?: CheckboxSize;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    hideLabel?: boolean;
    tooltip?: InputLabelTooltipProps;
    helperText?: string;
    'aria-label'?: string;
    groupInputProps?: HTMLAttributes<HTMLElement>;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"state",value:{name:"CheckboxState",required:!1}},{key:"emphasis",value:{name:"CheckboxEmphasis",required:!1}},{key:"size",value:{name:"CheckboxSize",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}},required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}],required:!1}},{key:"helperText",value:{name:"string",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"groupInputProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"union",raw:"'onChange' | 'groupInputProps' | 'value'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'groupInputProps'"},{name:"literal",value:"'value'"}]}],raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'>"},{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"CheckboxValue[]"},description:""},setActiveValues:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},activeValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},direction:{required:!0,tsType:{name:"union",raw:"ChecklistDirection.Vertical | ChecklistDirection.Horizontal",elements:[{name:"ChecklistDirection.Vertical"},{name:"ChecklistDirection.Horizontal"}]},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"MultipleColumnsInContainedSpaceAndSpannedColumn",props:{checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'> & { value: string }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    id?: string;
    state?: CheckboxState;
    emphasis?: CheckboxEmphasis;
    size?: CheckboxSize;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    hideLabel?: boolean;
    tooltip?: InputLabelTooltipProps;
    helperText?: string;
    'aria-label'?: string;
    groupInputProps?: HTMLAttributes<HTMLElement>;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"state",value:{name:"CheckboxState",required:!1}},{key:"emphasis",value:{name:"CheckboxEmphasis",required:!1}},{key:"size",value:{name:"CheckboxSize",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"value",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}},required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"hideLabel",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}],required:!1}},{key:"helperText",value:{name:"string",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"groupInputProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"union",raw:"'onChange' | 'groupInputProps' | 'value'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'groupInputProps'"},{name:"literal",value:"'value'"}]}],raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'>"},{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"CheckboxValue[]"},description:""},setActiveValues:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},activeValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},direction:{required:!0,tsType:{name:"union",raw:"ChecklistDirection.Vertical | ChecklistDirection.Horizontal",elements:[{name:"ChecklistDirection.Vertical"},{name:"ChecklistDirection.Horizontal"}]},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""}}};var c,d,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ChecklistProps) => {
  const [activeBoxes, setActiveBoxes] = useState<string[]>([]);
  return <ChecklistComponent {...args} direction={args.direction} checkboxes={CHECKBOXES} activeValues={activeBoxes} setActiveValues={setActiveBoxes} />;
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,b,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`(args: ChecklistProps) => {
  return <MultipleColumnsComponent {...args} checkboxes={COLUMN_CHECKBOXES} />;
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,h,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`(args: ChecklistProps) => {
  return <div className="tw-w-[300px] tw-p-2 tw-border- tw-border tw-rounded tw-border-line">
            <MultipleColumnsComponent {...args} checkboxes={COLUMN_CHECKBOXES} />
        </div>;
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var q,f,w;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`(args: ChecklistProps) => {
  return <div className="tw-w-[300px] tw-p-2 tw-border- tw-border tw-rounded tw-border-line">
            <MultipleColumnsComponent {...args} checkboxes={COLUMN_CHECKBOXES.slice(0, -1)} />
        </div>;
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const ue=["Checklist","MultipleColumns","MultipleColumnsInContainedSpace","MultipleColumnsInContainedSpaceAndSpannedColumn"];export{o as Checklist,i as MultipleColumns,a as MultipleColumnsInContainedSpace,n as MultipleColumnsInContainedSpaceAndSpannedColumn,ue as __namedExportsOrder,le as default};
