import{j as p}from"./jsx-runtime-Nms4Y4qS.js";import{c as V,b as x}from"./useFocusable-wKuCPQI4.js";import{$ as P}from"./useField-DuYpSm4Z.js";import{a as I}from"./useFocusRing-Vzyl7-Lk.js";import{$ as q,d as w,C as b,c as R}from"./Checkbox-DP8eCIEb.js";import{a as k,c as S,d as T,e as D}from"./useFormValidationState-Bo5Bz1o-.js";import{r as m}from"./index-BwDkhjyp.js";import{$ as M}from"./useControlledState-C0C-dzuH.js";import{m as L}from"./merge-DI-veSMP.js";const $=new WeakMap;function O(e,a){let{isDisabled:l,name:s,validationBehavior:c="aria"}=e,{isInvalid:d,validationErrors:u,validationDetails:n}=a.displayValidation,{labelProps:o,fieldProps:i,descriptionProps:t,errorMessageProps:r}=P({...e,labelElementType:"span",isInvalid:d,errorMessage:e.errorMessage||u});$.set(a,{name:s,descriptionId:t.id,errorMessageId:r.id,validationBehavior:c});let f=V(e,{labelable:!0}),{focusWithinProps:v}=I({onBlurWithin:e.onBlur,onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});return{groupProps:x(f,{role:"group","aria-disabled":l||void 0,...i,...v}),labelProps:o,descriptionProps:t,errorMessageProps:r,isInvalid:d,validationErrors:u,validationDetails:n}}function B(e,a,l){const s=q({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(g){g?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(g)}});let{name:c,descriptionId:d,errorMessageId:u,validationBehavior:n}=$.get(a);var o;n=(o=e.validationBehavior)!==null&&o!==void 0?o:n;let{realtimeValidation:i}=k({...e,value:s.isSelected,name:void 0,validationBehavior:"aria"}),t=m.useRef(S),r=()=>{a.setInvalid(e.value,i.isInvalid?i:t.current)};m.useEffect(r);let f=a.realtimeValidation.isInvalid?a.realtimeValidation:i,v=n==="native"?a.displayValidation:f;var h;let y=w({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||c,isRequired:(h=e.isRequired)!==null&&h!==void 0?h:a.isRequired,validationBehavior:n,[T]:{realtimeValidation:f,displayValidation:v,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(g){t.current=g,r()}}},s,l);return{...y,inputProps:{...y.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?u:null,d].filter(Boolean).join(" ")||void 0}}}function E(e={}){let[a,l]=M(e.value,e.defaultValue||[],e.onChange),s=!!e.isRequired&&a.length===0,c=m.useRef(new Map),d=k({...e,value:a}),u=d.displayValidation.isInvalid;var n;return{...d,value:a,setValue(i){e.isReadOnly||e.isDisabled||l(i)},isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isSelected(i){return a.includes(i)},addValue(i){e.isReadOnly||e.isDisabled||a.includes(i)||l(a.concat(i))},removeValue(i){e.isReadOnly||e.isDisabled||a.includes(i)&&l(a.filter(t=>t!==i))},toggleValue(i){e.isReadOnly||e.isDisabled||(a.includes(i)?l(a.filter(t=>t!==i)):l(a.concat(i)))},setInvalid(i,t){let r=new Map(c.current);t.isInvalid?r.set(i,t):r.delete(i),c.current=r,d.updateValidation(D(...r.values()))},validationState:(n=e.validationState)!==null&&n!==void 0?n:u?"invalid":null,isInvalid:u,isRequired:s}}var H=(e=>(e.Horizontal="Horizontal",e.Vertical="Vertical",e))(H||{});const z={1:"tw-grid-cols-1",2:"tw-grid-cols-2",3:"tw-grid-cols-3",4:"tw-grid-cols-4"},j=({checkbox:e,state:a})=>{const l=m.useRef(null),{value:s,disabled:c,label:d,"aria-label":u,state:n}=e,[o,i]=m.useState(n),t=a.isSelected(s),{inputProps:r}=B({value:s,isDisabled:c,"aria-label":u||d},a,l);return m.useEffect(()=>{o===b.Mixed&&!t?i(b.Mixed):i(t?b.Checked:b.Unchecked)},[o,t]),p.jsx(R,{...e,state:o,groupInputProps:r,ref:l})},A=(e,a)=>{if(!a||a<=1)return"";const l="auto / span",s=e.length%a;return s===0?"":`${l} ${a-s+1}`},C=({checkboxes:e,setActiveValues:a,ariaLabel:l="Checklist",activeValues:s=[],direction:c="Horizontal","data-test-id":d="checklist",...u})=>{const n=m.useRef(null),o=E({value:s,onChange:a}),{groupProps:i}=O({"aria-label":l},o),t="columns"in u&&u.columns||1;return p.jsx("div",{...i,"data-test-id":d,className:L([c==="Horizontal"?"tw-flex tw-flex-row tw-gap-12":`tw-grid tw-gap-4 ${z[t]}`]),ref:n,children:e.map((r,f)=>{var v;return p.jsx("div",{style:{maxWidth:(v=n==null?void 0:n.current)==null?void 0:v.getBoundingClientRect().width,gridColumn:f===e.length-1&&c==="Vertical"?A(e,t):void 0},children:p.jsx(j,{checkbox:r,state:o})},r.value)})})};C.displayName="FondueChecklist";C.__docgenInfo={description:"",methods:[],displayName:"FondueChecklist",props:{checkboxes:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'> & { value: string }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
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
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}],required:!1}},{key:"helperText",value:{name:"string",required:!1}},{key:"aria-label",value:{name:"string",required:!1}},{key:"groupInputProps",value:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"union",raw:"'onChange' | 'groupInputProps' | 'value'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'groupInputProps'"},{name:"literal",value:"'value'"}]}],raw:"Omit<CheckboxProps, 'onChange' | 'groupInputProps' | 'value'>"},{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}}]}],raw:"CheckboxValue[]"},description:""},setActiveValues:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},activeValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Checklist'",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'checklist'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"ChecklistDirection.Vertical | ChecklistDirection.Horizontal",elements:[{name:"ChecklistDirection.Vertical"},{name:"ChecklistDirection.Horizontal"}]},description:"",defaultValue:{value:"ChecklistDirection.Horizontal",computed:!0}},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:""}}};export{C,H as a};
