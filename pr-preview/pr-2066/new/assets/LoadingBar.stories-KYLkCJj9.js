import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as f}from"./index-BwDkhjyp.js";import{c as R}from"./index-BWD2N0gV.js";import{P as V}from"./index-Brw_kfkv.js";import{s as I}from"./styleUtilities-BnElyh0X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DxjWwZXO.js";var g="Progress",c=100,[j,K]=R(g),[q,B]=j(g),S=f.forwardRef((e,a)=>{const{__scopeProgress:l,value:t=null,max:r,getValueLabel:m=A,...p}=e;(r||r===0)&&!b(r)&&console.error(C(`${r}`,"Progress"));const n=b(r)?r:c;t!==null&&!x(t,n)&&console.error(D(`${t}`,"Progress"));const o=x(t,n)?t:null,$=d(o)?m(o,n):void 0;return i.jsx(q,{scope:l,value:o,max:n,children:i.jsx(V.div,{"aria-valuemax":n,"aria-valuemin":0,"aria-valuenow":d(o)?o:void 0,"aria-valuetext":$,role:"progressbar","data-state":E(o,n),"data-value":o??void 0,"data-max":n,...p,ref:a})})});S.displayName=g;var _="ProgressIndicator",L=f.forwardRef((e,a)=>{const{__scopeProgress:l,...t}=e,r=B(_,l);return i.jsx(V.div,{"data-state":E(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...t,ref:a})});L.displayName=_;function A(e,a){return`${Math.round(e/a*100)}%`}function E(e,a){return e==null?"indeterminate":e===a?"complete":"loading"}function d(e){return typeof e=="number"}function b(e){return d(e)&&!isNaN(e)&&e>0}function x(e,a){return d(e)&&!isNaN(e)&&e<=a&&e>=0}function C(e,a){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${c}\`.`}function D(e,a){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${c} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var M=S,O=L;const z=I({base:"tw-relative tw-w-full tw-overflow-hidden",variants:{rounded:{true:"tw-rounded"},size:{small:"tw-h-1",medium:"tw-h-2",large:"tw-h-3","x-large":"tw-h-4"},variant:{default:"tw-bg-box-selected",positive:"tw-bg-box-positive",negative:"tw-bg-box-negative"}}}),F=I({base:"tw-h-full tw-w-full",variants:{variant:{default:"tw-bg-text-interactive",positive:"tw-bg-text-positive",negative:"tw-bg-text-negative"},indeterminateState:{true:"tw-animate-loading-bar-infinite tw-origin-left-right",false:"tw-transition-all tw-origin-left tw-scale-x-[--loading-bar-proportion]"}}}),v=f.forwardRef(({value:e,max:a=100,rounded:l=!0,variant:t="default",size:r="medium","data-test-id":m="fondue-loading-bar",...p},n)=>i.jsx(M,{ref:n,"data-test-id":m,className:z({rounded:l,size:r,variant:t}),"aria-busy":e!==a,value:e,max:a,style:{"--loading-bar-value":e,"--loading-bar-max":a,"--loading-bar-proportion":"calc(var(--loading-bar-value) / var(--loading-bar-max))"},...p,children:i.jsx(O,{className:F({variant:t,indeterminateState:e===null})})}));v.displayName="LoadingBar";v.__docgenInfo={description:"",methods:[],displayName:"LoadingBar",props:{value:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"The current value of the loading bar. If `null`, the loading bar will be in an indeterminate state.\n@default null"},max:{required:!1,tsType:{name:"number"},description:`The maximum value of the loading bar
@default 100`,defaultValue:{value:"100",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"@default 'fondue-loading-bar'",defaultValue:{value:"'fondue-loading-bar'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:`Add rounded corners to the loading bar
@default true`,defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'positive' | 'negative'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:`The style of the loading bar
@default "default"`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}]},description:`The size of the loading bar
@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},getValueLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, max: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"number"},name:"max"}],return:{name:"string"}}},description:"The label of the loading bar for accessibility purposes"}}};const Q={title:"Components/Loading Bar",component:v,tags:["autodocs"],parameters:{status:{type:"released"}},args:{value:42,max:100,rounded:!0,"aria-label":"Fondue Loading Bar"}},s={},u={args:{value:null}};var w,h,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var P,N,T;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: null
  }
}`,...(T=(N=u.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const Y=["WithDefinedValue","Indeterminate"];export{u as Indeterminate,s as WithDefinedValue,Y as __namedExportsOrder,Q as default};
