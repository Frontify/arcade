import{j as o}from"./jsx-runtime-BSxFkHFN.js";import{r as m}from"./index-i66itsuO.js";import{c as T}from"./index-BwxsjnLo.js";import{P as c}from"./index-kGoNTBW-.js";import{s as b}from"./styleUtilities-rhQWLmVU.js";var f="Progress",p=100,[V,z]=T(f),[I,L]=V(f),x=m.forwardRef((e,a)=>{const{__scopeProgress:i,value:r=null,max:t,getValueLabel:u=S,...d}=e;(t||t===0)&&!g(t)&&console.error(_(`${t}`,"Progress"));const n=g(t)?t:p;r!==null&&!v(r,n)&&console.error($(`${r}`,"Progress"));const l=v(r,n)?r:null,N=s(l)?u(l,n):void 0;return o.jsx(I,{scope:i,value:l,max:n,children:o.jsx(c.div,{"aria-valuemax":n,"aria-valuemin":0,"aria-valuenow":s(l)?l:void 0,"aria-valuetext":N,role:"progressbar","data-state":y(l,n),"data-value":l??void 0,"data-max":n,...d,ref:a})})});x.displayName=f;var w="ProgressIndicator",h=m.forwardRef((e,a)=>{const{__scopeProgress:i,...r}=e,t=L(w,i);return o.jsx(c.div,{"data-state":y(t.value,t.max),"data-value":t.value??void 0,"data-max":t.max,...r,ref:a})});h.displayName=w;function S(e,a){return`${Math.round(e/a*100)}%`}function y(e,a){return e==null?"indeterminate":e===a?"complete":"loading"}function s(e){return typeof e=="number"}function g(e){return s(e)&&!isNaN(e)&&e>0}function v(e,a){return s(e)&&!isNaN(e)&&e<=a&&e>=0}function _(e,a){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${p}\`.`}function $(e,a){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${p} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var E=x,R=h;const j=b({base:"tw-relative tw-w-full tw-overflow-hidden",variants:{rounded:{true:"tw-rounded"},size:{small:"tw-h-1",medium:"tw-h-2",large:"tw-h-3","x-large":"tw-h-4"},variant:{default:"tw-bg-box-selected",positive:"tw-bg-box-positive",negative:"tw-bg-box-negative"}}}),q=b({base:"tw-h-full tw-w-full",variants:{variant:{default:"tw-bg-text-interactive",positive:"tw-bg-text-positive",negative:"tw-bg-text-negative"},indeterminateState:{true:"tw-animate-loading-bar-infinite tw-origin-left-right",false:"tw-transition-all tw-origin-left tw-scale-x-[--loading-bar-proportion]"}}}),P=m.forwardRef(({value:e,max:a=100,rounded:i=!0,variant:r="default",size:t="medium","data-test-id":u="fondue-loading-bar",...d},n)=>o.jsx(E,{ref:n,"data-test-id":u,className:j({rounded:i,size:t,variant:r}),"aria-busy":e!==a,value:e,max:a,style:{"--loading-bar-value":e,"--loading-bar-max":a,"--loading-bar-proportion":"calc(var(--loading-bar-value) / var(--loading-bar-max))"},...d,children:o.jsx(R,{className:q({variant:r,indeterminateState:e===null})})}));P.displayName="LoadingBar";P.__docgenInfo={description:"",methods:[],displayName:"LoadingBar",props:{value:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"The current value of the loading bar. If `null`, the loading bar will be in an indeterminate state.\n@default null"},max:{required:!1,tsType:{name:"number"},description:`The maximum value of the loading bar
@default 100`,defaultValue:{value:"100",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"@default 'fondue-loading-bar'",defaultValue:{value:"'fondue-loading-bar'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:`Add rounded corners to the loading bar
@default true`,defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'positive' | 'negative'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:`The style of the loading bar
@default "default"`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}]},description:`The size of the loading bar
@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},getValueLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, max: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"number"},name:"max"}],return:{name:"string"}}},description:"The label of the loading bar for accessibility purposes"}}};export{P as L};
