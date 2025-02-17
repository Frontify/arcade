import{j as o}from"./jsx-runtime-BSxFkHFN.js";import{r as h,e as u}from"./index-i66itsuO.js";import{c as A}from"./index-BwxsjnLo.js";import{P as _}from"./index-C7Xses_O.js";import{c as I,R as w,I as E}from"./index--HnUjAPS.js";import{c as q}from"./index-BNYVQE02.js";import{u as x}from"./index-P4w4wmP2.js";import{u as M}from"./index-DLXHbKnz.js";import{u as k}from"./useControllableState-BeU1Rl3I.js";var D="Toggle",y=h.forwardRef((e,t)=>{const{pressed:r,defaultPressed:n=!1,onPressedChange:a,...i}=e,[l=!1,s]=x({prop:r,onChange:a,defaultProp:n});return o.jsx(_.button,{type:"button","aria-pressed":l,"data-state":l?"on":"off","data-disabled":e.disabled?"":void 0,...i,ref:t,onClick:q(e.onClick,()=>{e.disabled||s(!l)})})});y.displayName=D;var g="ToggleGroup",[P,ie]=A(g,[I]),j=I(),C=u.forwardRef((e,t)=>{const{type:r,...n}=e;if(r==="single"){const a=n;return o.jsx(F,{...a,ref:t})}if(r==="multiple"){const a=n;return o.jsx(B,{...a,ref:t})}throw new Error(`Missing prop \`type\` expected on \`${g}\``)});C.displayName=g;var[N,R]=P(g),F=u.forwardRef((e,t)=>{const{value:r,defaultValue:n,onValueChange:a=()=>{},...i}=e,[l,s]=x({prop:r,defaultProp:n,onChange:a});return o.jsx(N,{scope:e.__scopeToggleGroup,type:"single",value:l?[l]:[],onItemActivate:s,onItemDeactivate:u.useCallback(()=>s(""),[s]),children:o.jsx(S,{...i,ref:t})})}),B=u.forwardRef((e,t)=>{const{value:r,defaultValue:n,onValueChange:a=()=>{},...i}=e,[l=[],s]=x({prop:r,defaultProp:n,onChange:a}),c=u.useCallback(p=>s((m=[])=>[...m,p]),[s]),f=u.useCallback(p=>s((m=[])=>m.filter(V=>V!==p)),[s]);return o.jsx(N,{scope:e.__scopeToggleGroup,type:"multiple",value:l,onItemActivate:c,onItemDeactivate:f,children:o.jsx(S,{...i,ref:t})})});C.displayName=g;var[O,U]=P(g),S=u.forwardRef((e,t)=>{const{__scopeToggleGroup:r,disabled:n=!1,rovingFocus:a=!0,orientation:i,dir:l,loop:s=!0,...c}=e,f=j(r),p=M(l),m={role:"group",dir:p,...c};return o.jsx(O,{scope:r,rovingFocus:a,disabled:n,children:a?o.jsx(w,{asChild:!0,...f,orientation:i,dir:p,loop:s,children:o.jsx(_.div,{...m,ref:t})}):o.jsx(_.div,{...m,ref:t})})}),v="ToggleGroupItem",L=u.forwardRef((e,t)=>{const r=R(v,e.__scopeToggleGroup),n=U(v,e.__scopeToggleGroup),a=j(e.__scopeToggleGroup),i=r.value.includes(e.value),l=n.disabled||e.disabled,s={...e,pressed:i,disabled:l},c=u.useRef(null);return n.rovingFocus?o.jsx(E,{asChild:!0,...a,focusable:!l,active:i,ref:c,children:o.jsx(G,{...s,ref:t})}):o.jsx(G,{...s,ref:t})});L.displayName=v;var G=u.forwardRef((e,t)=>{const{__scopeToggleGroup:r,value:n,...a}=e,i=R(v,r),l={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},s=i.type==="single"?l:void 0;return o.jsx(y,{...s,...a,ref:t,onPressedChange:c=>{c?i.onItemActivate(n):i.onItemDeactivate(n)}})}),$=C,H=L;const z="_root_1hloi_5",J="_item_1hloi_26",K="_itemLabel_1hloi_46",Q="_itemLabelActive_1hloi_66",W="_itemLabelInactive_1hloi_96",X="_activeIndicator_1hloi_126",Y="_separator_1hloi_223",d={root:z,item:J,itemLabel:K,itemLabelActive:Q,itemLabelInactive:W,activeIndicator:X,separator:Y},T=({children:e,value:t,defaultValue:r,onValueChange:n,...a},i)=>{const[l,s]=k({prop:t,defaultProp:r,onChange:n});return o.jsxs($,{ref:i,...a,className:d.root,onValueChange:c=>{c&&s(c)},value:l,type:"single",asChild:!1,"aria-disabled":a.disabled,children:[e,o.jsx("div",{className:d.activeIndicator})]})};T.displayName="SegmentedControl.Root";const b=({children:e,...t},r)=>o.jsxs(H,{ref:r,...t,className:d.item,asChild:!1,children:[o.jsx("span",{className:d.separator}),o.jsxs("span",{className:d.itemLabel,children:[o.jsx("span",{className:d.itemLabelActive,children:e}),o.jsx("span",{className:d.itemLabelInactive,children:e})]})]});b.displayName="SegmentedControl.Item";const ce={Root:h.forwardRef(T),Item:h.forwardRef(b)};T.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl.Root",props:{id:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},defaultValue:{required:!0,tsType:{name:"string"},description:`The default value of the segmented control
Used for uncontrolled components`},value:{required:!1,tsType:{name:"string"},description:"The controlled value of the segmented control"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Event handler called when the value changes"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the segmented control
@default false`}}};b.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl.Item",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};export{T as S,b as a,ce as b};
