import{$ as F,a as k,b as i,c as m}from"./useFocusable-ClqOF1PM.js";function v(s,d){let{elementType:a="button",isDisabled:e,onPress:l,onPressStart:c,onPressEnd:p,onPressUp:b,onPressChange:u,preventFocusOnPress:P,allowFocusWhenDisabled:f,onClick:t,href:$,target:x,rel:h,type:o="button"}=s,n;a==="button"?n={type:o,disabled:e}:n={role:"button",tabIndex:e?void 0:0,href:a==="a"&&e?void 0:$,target:a==="a"?x:void 0,type:a==="input"?o:void 0,disabled:a==="input"?e:void 0,"aria-disabled":!e||a==="input"?void 0:e,rel:a==="a"?h:void 0};let{pressProps:C,isPressed:g}=F({onPressStart:c,onPressEnd:p,onPressChange:u,onPress:l,onPressUp:b,isDisabled:e,preventFocusOnPress:P,ref:d}),{focusableProps:r}=k(s,d);f&&(r.tabIndex=e?-1:r.tabIndex);let y=i(r,C,m(s,{labelable:!0}));return{isPressed:g,buttonProps:i(n,y,{"aria-haspopup":s["aria-haspopup"],"aria-expanded":s["aria-expanded"],"aria-controls":s["aria-controls"],"aria-pressed":s["aria-pressed"],onClick:D=>{t&&(t(D),console.warn("onClick is deprecated, please use onPress"))}})}}export{v as $};
