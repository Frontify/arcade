import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{$ as Y,a as J,b as K}from"./useFormValidationState-Vs0Uifwm.js";import{$ as z,a as Q,b as O,c as Z}from"./useFocusable-CAGu0lKI.js";import{$ as T}from"./useFocusRing-4Vnvtzpc.js";import{$ as ee}from"./useControlledState-C0C-dzuH.js";import{I as te}from"./InputLabel-DTQphj_R.js";import{I as se}from"./IconCheckMark-BVQYjlwc.js";import{I as ae}from"./IconMinus-BhxphMyC.js";import{I as q}from"./IconSize-BcCrF_mi.js";import{u as re}from"./useMemoizedId-EtHZ7Sxa.js";import{F as ie}from"./focusStyle-CBFElZiz.js";import{m as g}from"./merge-DI-veSMP.js";import{u as le}from"./Button-CYWlMQhW.js";function ne(e,a,r){let{isDisabled:t=!1,isReadOnly:l=!1,value:i,name:u,children:$,"aria-label":f,"aria-labelledby":w,validationState:m="valid",isInvalid:v}=e,k=d=>{d.stopPropagation(),a.setSelected(d.target.checked)},b=$!=null,o=f!=null||w!=null;!b&&!o&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:h,isPressed:p}=z({isDisabled:t}),{pressProps:s,isPressed:j}=z({isDisabled:t||l,onPress(){a.toggle()}}),{focusableProps:E}=Q(e,r),M=O(h,E),I=Z(e,{labelable:!0});return Y(r,a.isSelected,a.setSelected),{labelProps:O(s,{onClick:d=>d.preventDefault()}),inputProps:O(I,{"aria-invalid":v||m==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":l||void 0,onChange:k,disabled:t,...i==null?{}:{value:i},name:u,type:"checkbox",...M}),isSelected:a.isSelected,isPressed:p||j,isDisabled:t,isReadOnly:l,isInvalid:v||m==="invalid"}}function oe(e,a,r){let t=J({...e,value:a.isSelected}),{isInvalid:l,validationErrors:i,validationDetails:u}=t.displayValidation,{labelProps:$,inputProps:f,isSelected:w,isPressed:m,isDisabled:v,isReadOnly:k}=ne({...e,isInvalid:l},a,r);K(e,t,r);let{isIndeterminate:b,isRequired:o,validationBehavior:h="aria"}=e;return c.useEffect(()=>{r.current&&(r.current.indeterminate=!!b)}),{labelProps:$,inputProps:{...f,checked:w,"aria-required":o&&h==="aria"||void 0,required:o&&h==="native"},isSelected:w,isPressed:m,isDisabled:v,isReadOnly:k,isInvalid:l,validationErrors:i,validationDetails:u}}function de(e={}){let{isReadOnly:a}=e,[r,t]=ee(e.isSelected,e.defaultSelected||!1,e.onChange);function l(u){a||t(u)}function i(){a||t(!r)}return{isSelected:r,setSelected:l,toggle:i}}var ce=(e=>(e.Checked="Checked",e.Unchecked="Unchecked",e.Mixed="Mixed",e))(ce||{}),ue=(e=>(e.Default="Default",e.Weak="Weak",e.Strong="Strong",e))(ue||{}),fe=(e=>(e.Default="Default",e.Large="Large",e.XLarge="XLarge",e))(fe||{});const be=e=>e==="Checked"||e==="Mixed",R="tw-bg-box-selected-strong tw-text-box-selected-strong-inverse hover:tw-bg-box-selected-strong-hover",we={Weak:"tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse hover:tw-bg-box-neutral-strong-hover",Default:R,Strong:R},xe={Default:"tw-h-4 tw-w-4",Large:"tw-h-5 tw-w-5",XLarge:"tw-h-8 tw-w-8"},me=({id:e,emphasis:a="Default",size:r="Default",disabled:t,required:l,label:i,hideLabel:u,tooltip:$,helperText:f,"aria-label":w,value:m,groupInputProps:v,onChange:k,state:b="Unchecked","data-test-id":o="checkbox"},h)=>{const p=re(e),s=le(h),{focusProps:j}=T(),E=de({onChange:t?void 0:k,isSelected:b==="Checked"}),[M,I]=c.useState(),d=c.useRef(null),S=c.useRef(null),[W,V]=c.useState(!1),[X,A]=c.useState(!1),N=x=>{x.key==="Tab"&&I(!0)},F=()=>{I(!1)};c.useEffect(()=>{var x,y;return(x=s==null?void 0:s.current)==null||x.addEventListener("keyup",N),(y=s==null?void 0:s.current)==null||y.addEventListener("blur",F),()=>{var P,D;(P=s==null?void 0:s.current)==null||P.removeEventListener("keyup",N),(D=s==null?void 0:s.current)==null||D.removeEventListener("blur",F)}},[]);const{inputProps:_}=oe({isDisabled:t,isRequired:l,isIndeterminate:b==="Mixed","aria-label":w,value:m},E,s),B={Checked:n.jsx(se,{size:r==="XLarge"?q.Size24:q.Size16}),Mixed:n.jsx(ae,{}),Unchecked:null},L=be(b),G=g(["tw-bg-box-disabled tw-pointer-events-none tw-text-box-disabled-inverse tw-border-line-strong",L&&"tw-text-box-disabled-inverse tw-border-line-strong"]),H=L?we[a]:g(["tw-bg-base hover:tw-bg-box-neutral",a==="Strong"?"tw-border-2 tw-border-box-selected-strong":"tw-border tw-border-line-xx-strong"]),C=c.useCallback(()=>{var x,y,P,D;d.current&&V(((x=d.current)==null?void 0:x.scrollWidth)>((y=d.current)==null?void 0:y.clientWidth)),S.current&&A(((P=S.current)==null?void 0:P.scrollWidth)>((D=S.current)==null?void 0:D.clientWidth))},[d,S]);return c.useEffect(()=>{if(!(!i&&!f||u))return C(),window.removeEventListener("resize",C),window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}},[i,f,u,C]),n.jsx("div",{className:"tw-gap-1 tw-transition-colors tw-w-full","data-test-id":o,children:n.jsx("div",{className:g(["tw-inline-flex tw-flex-row tw-rounded tw-w-full",M?ie:""]),children:n.jsx(te,{id:`${p}-label`,disabled:t,clickable:!0,htmlFor:p,tooltip:$,required:l,bold:L,children:n.jsxs("span",{className:"tw-flex tw-items-center tw-whitespace-nowrap",children:[n.jsxs("span",{className:"tw-inline-flex",children:[n.jsx("input",{...O(v||_,j),id:p,ref:s,className:"tw-sr-only","data-test-id":`${o}-input`,role:"checkbox","aria-checked":b==="Checked",required:l,"aria-label":w,"aria-labelledby":i?`${p}-label`:void 0}),n.jsx("span",{"data-test-id":`${o}-icon-box`,"aria-hidden":"true",className:g(["tw-leading-3 tw-relative tw-flex tw-items-center tw-justify-center tw-rounded tw-shrink-0 tw-flex-none",xe[r],t?G:H]),children:B[b]})]}),!u&&n.jsxs("span",{className:"tw-inline-flex tw-flex-col tw-min-w-0 tw-ml-1.5",children:[i&&n.jsx("span",{ref:d,"data-test-id":`${o}-label`,className:g(["tw-text-ellipsis tw-overflow-hidden","tw-text-xs tw-select-none hover:tw-cursor-pointer hover:tw-text-black dark:hover:tw-text-white group-hover:tw-text-black dark:group-hover:tw-text-white",L&&"tw-font-medium"]),title:W?i:void 0,children:i}),f&&n.jsx("span",{ref:S,"data-test-id":`${o}-helper-text`,className:g(["tw-text-ellipsis tw-overflow-hidden","tw-font-sans tw-text-xs tw-font-normal",t?"text-disabled":"tw-text-text-weak"]),title:X?f:void 0,children:f})]})]})})})})},U=c.forwardRef(me);U.displayName="FondueCheckbox";U.__docgenInfo={description:"@deprecated Use `Checkbox` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#checkbox the migration guide}.",methods:[],displayName:"FondueCheckbox",props:{emphasis:{defaultValue:{value:"CheckboxEmphasis.Default",computed:!0},required:!1},size:{defaultValue:{value:"CheckboxSize.Default",computed:!0},required:!1},state:{defaultValue:{value:"CheckboxState.Unchecked",computed:!0},required:!1},"data-test-id":{defaultValue:{value:"'checkbox'",computed:!1},required:!1}}};export{de as $,ce as C,ue as a,fe as b,U as c,oe as d};
