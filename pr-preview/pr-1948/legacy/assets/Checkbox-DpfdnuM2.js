import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{$ as G,a as Y,b as J}from"./useFormValidationState-Bo5Bz1o-.js";import{$ as N,a as K,b as T,c as Q}from"./useFocusable-ClqOF1PM.js";import{$ as Z}from"./useFocusRing-Vzyl7-Lk.js";import{$ as ee}from"./useControlledState-C0C-dzuH.js";import{I as te}from"./InputLabel-C0S8npOu.js";import{I as re}from"./IconCheckMark-BVQYjlwc.js";import{I as se}from"./IconMinus-BhxphMyC.js";import{I as F}from"./IconSize-BcCrF_mi.js";import{u as ae}from"./useMemoizedId-EtHZ7Sxa.js";import{F as ie}from"./focusStyle-CBFElZiz.js";import{m as v}from"./merge-DI-veSMP.js";import{u as ne}from"./Button-BBdFcQ_2.js";function oe(e,s,a){let{isDisabled:t=!1,isReadOnly:n=!1,value:i,name:u,children:k,"aria-label":f,"aria-labelledby":b,validationState:w="valid",isInvalid:g}=e,y=d=>{d.stopPropagation(),s.setSelected(d.target.checked)},p=k!=null,l=f!=null||b!=null;!p&&!l&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:x,isPressed:h}=N({isDisabled:t}),{pressProps:r,isPressed:q}=N({isDisabled:t||n,onPress(){s.toggle()}}),{focusableProps:E}=K(e,a),M=T(x,E),I=Q(e,{labelable:!0});return G(a,s.isSelected,s.setSelected),{labelProps:T(r,{onClick:d=>d.preventDefault()}),inputProps:T(I,{"aria-invalid":g||w==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":n||void 0,onChange:y,disabled:t,...i==null?{}:{value:i},name:u,type:"checkbox",...M}),isSelected:s.isSelected,isPressed:h||q,isDisabled:t,isReadOnly:n,isInvalid:g||w==="invalid"}}function le(e,s,a){let t=Y({...e,value:s.isSelected}),{isInvalid:n,validationErrors:i,validationDetails:u}=t.displayValidation,{labelProps:k,inputProps:f,isSelected:b,isPressed:w,isDisabled:g,isReadOnly:y}=oe({...e,isInvalid:n},s,a);J(e,t,a);let{isIndeterminate:p,isRequired:l,validationBehavior:x="aria"}=e;return c.useEffect(()=>{a.current&&(a.current.indeterminate=!!p)}),{labelProps:k,inputProps:{...f,checked:b,"aria-required":l&&x==="aria"||void 0,required:l&&x==="native"},isSelected:b,isPressed:w,isDisabled:g,isReadOnly:y,isInvalid:n,validationErrors:i,validationDetails:u}}function de(e={}){let{isReadOnly:s}=e,[a,t]=ee(e.isSelected,e.defaultSelected||!1,e.onChange);function n(u){s||t(u)}function i(){s||t(!a)}return{isSelected:a,setSelected:n,toggle:i}}var ce=(e=>(e.Checked="Checked",e.Unchecked="Unchecked",e.Mixed="Mixed",e))(ce||{}),ue=(e=>(e.Default="Default",e.Weak="Weak",e.Strong="Strong",e))(ue||{}),fe=(e=>(e.Default="Default",e.Large="Large",e.XLarge="XLarge",e))(fe||{});const pe=e=>e==="Checked"||e==="Mixed",z="tw-bg-box-selected-strong tw-text-box-selected-strong-inverse hover:tw-bg-box-selected-strong-hover",be={Weak:"tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse hover:tw-bg-box-neutral-strong-hover",Default:z,Strong:z},me={Default:"tw-h-4 tw-w-4",Large:"tw-h-5 tw-w-5",XLarge:"tw-h-8 tw-w-8"},we=({id:e,emphasis:s="Default",size:a="Default",disabled:t,required:n,label:i,hideLabel:u,tooltip:k,helperText:f,"aria-label":b,value:w,groupInputProps:g,onChange:y,state:p="Unchecked","data-test-id":l="checkbox"},x)=>{const h=ae(e),r=ne(x),{focusProps:q}=Z(),E=de({onChange:t?void 0:y,isSelected:p==="Checked"}),[M,I]=c.useState(),d=c.useRef(null),$=c.useRef(null),[U,W]=c.useState(!1),[A,H]=c.useState(!1),O=m=>{m.key==="Tab"&&I(!0)},j=()=>{I(!1)};c.useEffect(()=>{var m,P;return(m=r==null?void 0:r.current)==null||m.addEventListener("keyup",O),(P=r==null?void 0:r.current)==null||P.addEventListener("blur",j),()=>{var C,L;(C=r==null?void 0:r.current)==null||C.removeEventListener("keyup",O),(L=r==null?void 0:r.current)==null||L.removeEventListener("blur",j)}},[]);const{inputProps:V}=le({isDisabled:t,isRequired:n,isIndeterminate:p==="Mixed","aria-label":b,value:w},E,r),X={Checked:o.jsx(re,{size:a==="XLarge"?F.Size24:F.Size16}),Mixed:o.jsx(se,{}),Unchecked:null},D=pe(p),_=v(["tw-bg-box-disabled tw-pointer-events-none tw-text-box-disabled-inverse tw-border-line-strong",D&&"tw-text-box-disabled-inverse tw-border-line-strong"]),B=D?be[s]:v(["tw-bg-base hover:tw-bg-box-neutral",s==="Strong"?"tw-border-2 tw-border-box-selected-strong":"tw-border tw-border-line-xx-strong"]),S=c.useCallback(()=>{var m,P,C,L;d.current&&W(((m=d.current)==null?void 0:m.scrollWidth)>((P=d.current)==null?void 0:P.clientWidth)),$.current&&H(((C=$.current)==null?void 0:C.scrollWidth)>((L=$.current)==null?void 0:L.clientWidth))},[d,$]);return c.useEffect(()=>{if(!(!i&&!f||u))return S(),window.removeEventListener("resize",S),window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S)}},[i,f,u,S]),o.jsx("div",{className:"tw-gap-1 tw-transition-colors tw-w-full","data-test-id":l,children:o.jsx("div",{className:v(["tw-inline-flex tw-flex-row tw-rounded tw-w-full",M?ie:""]),children:o.jsx(te,{id:`${h}-label`,disabled:t,clickable:!0,htmlFor:h,tooltip:k,required:n,bold:D,children:o.jsxs("span",{className:"tw-flex tw-items-center tw-whitespace-nowrap",children:[o.jsxs("span",{className:"tw-inline-flex",children:[o.jsx("input",{...T(g||V,q),id:h,ref:r,className:"tw-sr-only","data-test-id":`${l}-input`,role:"checkbox","aria-checked":p==="Checked",required:n,"aria-label":b,"aria-labelledby":i?`${h}-label`:void 0}),o.jsx("span",{"data-test-id":`${l}-icon-box`,"aria-hidden":"true",className:v(["tw-leading-3 tw-relative tw-flex tw-items-center tw-justify-center tw-rounded tw-shrink-0 tw-flex-none",me[a],t?_:B]),children:X[p]})]}),!u&&o.jsxs("span",{className:"tw-inline-flex tw-flex-col tw-min-w-0 tw-ml-1.5",children:[i&&o.jsx("span",{ref:d,"data-test-id":`${l}-label`,className:v(["tw-text-ellipsis tw-overflow-hidden","tw-text-xs tw-select-none hover:tw-cursor-pointer hover:tw-text-black dark:hover:tw-text-white group-hover:tw-text-black dark:group-hover:tw-text-white",D&&"tw-font-medium"]),title:U?i:void 0,children:i}),f&&o.jsx("span",{ref:$,"data-test-id":`${l}-helper-text`,className:v(["tw-text-ellipsis tw-overflow-hidden","tw-font-sans tw-text-xs tw-font-normal",t?"text-disabled":"tw-text-text-weak"]),title:A?f:void 0,children:f})]})]})})})})},R=c.forwardRef(we);R.displayName="FondueCheckbox";R.__docgenInfo={description:"@deprecated Use `Checkbox` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#checkbox the migration guide}.",methods:[],displayName:"FondueCheckbox",props:{id:{required:!1,tsType:{name:"string"},description:""},state:{required:!1,tsType:{name:"CheckboxState"},description:"",defaultValue:{value:"CheckboxState.Unchecked",computed:!0}},emphasis:{required:!1,tsType:{name:"CheckboxEmphasis"},description:"",defaultValue:{value:"CheckboxEmphasis.Default",computed:!0}},size:{required:!1,tsType:{name:"CheckboxSize"},description:"",defaultValue:{value:"CheckboxSize.Default",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},tooltip:{required:!1,tsType:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}]},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},groupInputProps:{required:!1,tsType:{name:"HTMLAttributes",elements:[{name:"HTMLElement"}],raw:"HTMLAttributes<HTMLElement>"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'checkbox'",computed:!1}}}};export{de as $,ce as C,ue as a,fe as b,R as c,le as d};
