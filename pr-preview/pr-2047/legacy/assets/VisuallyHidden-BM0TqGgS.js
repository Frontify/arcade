import{b as d}from"./useFocusable-wKuCPQI4.js";import{R as p,r as a}from"./index-BwDkhjyp.js";import{a as u}from"./useFocusRing-Vzyl7-Lk.js";const c={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function f(t={}){let{style:e,isFocusable:s}=t,[i,l]=a.useState(!1),{focusWithinProps:o}=u({isDisabled:!s,onFocusWithinChange:n=>l(n)}),r=a.useMemo(()=>i?e:e?{...c,...e}:c,[i]);return{visuallyHiddenProps:{...o,style:r}}}function m(t){let{children:e,elementType:s="div",isFocusable:i,style:l,...o}=t,{visuallyHiddenProps:r}=f(t);return p.createElement(s,d(o,r),e)}export{m as $,f as a};
