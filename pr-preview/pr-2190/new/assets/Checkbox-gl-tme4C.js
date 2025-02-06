import{j as o}from"./jsx-runtime-BSxFkHFN.js";import{r}from"./index-i66itsuO.js";import{d as R,r as j}from"./fondue-icons348-BX42UtgK.js";import{u as I,P as q}from"./index-C7Xses_O.js";import{c as S}from"./index-BwxsjnLo.js";import{c as C}from"./index-BNYVQE02.js";import{u as z}from"./index-P4w4wmP2.js";import{u as _}from"./index-Dh_oXSn4.js";import{u as O}from"./index-BVL3yOfb.js";import{P as D}from"./index-cPkRJAzz.js";import{s as V,c as U}from"./styleUtilities-rhQWLmVU.js";import{F as A}from"./focusStyle-IgMhxCMT.js";var T="Checkbox",[K,ue]=S(T),[X,$]=K(T),M=r.forwardRef((e,l)=>{const{__scopeCheckbox:t,name:s,checked:c,defaultChecked:a,required:u,disabled:m,value:b="on",onCheckedChange:w,form:p,...k}=e,[i,v]=r.useState(null),g=I(l,n=>v(n)),x=r.useRef(!1),E=i?p||!!i.closest("form"):!0,[f=!1,y]=z({prop:c,defaultProp:a,onChange:w}),N=r.useRef(f);return r.useEffect(()=>{const n=i==null?void 0:i.form;if(n){const h=()=>y(N.current);return n.addEventListener("reset",h),()=>n.removeEventListener("reset",h)}},[i,y]),o.jsxs(X,{scope:t,state:f,disabled:m,children:[o.jsx(q.button,{type:"button",role:"checkbox","aria-checked":d(f)?"mixed":f,"aria-required":u,"data-state":L(f),"data-disabled":m?"":void 0,disabled:m,value:b,...k,ref:g,onKeyDown:C(e.onKeyDown,n=>{n.key==="Enter"&&n.preventDefault()}),onClick:C(e.onClick,n=>{y(h=>d(h)?!0:!h),E&&(x.current=n.isPropagationStopped(),x.current||n.stopPropagation())})}),E&&o.jsx(G,{control:i,bubbles:!x.current,name:s,value:b,checked:f,required:u,disabled:m,form:p,style:{transform:"translateX(-100%)"},defaultChecked:d(a)?!1:a})]})});M.displayName=T;var B="CheckboxIndicator",F=r.forwardRef((e,l)=>{const{__scopeCheckbox:t,forceMount:s,...c}=e,a=$(B,t);return o.jsx(D,{present:s||d(a.state)||a.state===!0,children:o.jsx(q.span,{"data-state":L(a.state),"data-disabled":a.disabled?"":void 0,...c,ref:l,style:{pointerEvents:"none",...e.style}})})});F.displayName=B;var G=e=>{const{control:l,checked:t,bubbles:s=!0,defaultChecked:c,...a}=e,u=r.useRef(null),m=_(t),b=O(l);r.useEffect(()=>{const p=u.current,k=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(k,"checked").set;if(m!==t&&v){const g=new Event("click",{bubbles:s});p.indeterminate=d(t),v.call(p,d(t)?!1:t),p.dispatchEvent(g)}},[m,t,s]);const w=r.useRef(d(t)?!1:t);return o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:c??w.current,...a,tabIndex:-1,ref:u,style:{...e.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function d(e){return e==="indeterminate"}function L(e){return d(e)?"indeterminate":e?"checked":"unchecked"}var J=M,Q=F;const W=V({base:`tw-peer tw-relative tw-inline-flex tw-bg-base tw-text-white tw-shrink-0 tw-rounded tw-border tw-border-line-x-strong group-hover:tw-border-line-xx-strong hover:tw-border-line-xx-strong tw-transition-colors data-[state="checked"]:tw-border-transparent data-[state="indeterminate"]:tw-border-transparent disabled:tw-border-line-strong disabled:tw-bg-base disabled:tw-cursor-not-allowed data-[state="checked"]:disabled:tw-bg-box-disabled-strong ${A}`,variants:{size:{default:"tw-size-4",large:"tw-size-5"},emphasis:{default:'data-[state="checked"]:tw-bg-box-selected-strong data-[state="checked"]:hover:tw-bg-box-selected-strong-hover data-[state="checked"]:active:tw-bg-box-selected-strong-pressed data-[state="indeterminate"]:tw-bg-box-selected-strong data-[state="indeterminate"]:hover:tw-bg-box-selected-strong-hover data-[state="indeterminate"]:active:tw-bg-box-selected-strong-pressed ',weak:'data-[state="checked"]:tw-bg-box-neutral-strong data-[state="checked"]:hover:tw-bg-box-neutral-strong-hover data-[state="checked"]:active:tw-bg-box-neutral-strong-pressed data-[state="indeterminate"]:tw-bg-box-neutral-strong data-[state="indeterminate"]:hover:tw-bg-box-neutral-strong-hover data-[state="indeterminate"]:active:tw-bg-box-neutral-strong-pressed '}},defaultVariants:{size:"default",emphasis:"default"}}),Y='tw-group tw-absolute tw-inset-0 tw-inline-flex tw-items-center tw-justify-center tw-text-current tw-opacity-0 data-[state="checked"]:tw-opacity-100 data-[state="indeterminate"]:tw-opacity-100 tw-transition-opacity ',H=({className:e,value:l,onChange:t,defaultValue:s,"data-test-id":c="fondue-checkbox",...a},u)=>o.jsx(J,{ref:u,checked:l,defaultChecked:s,className:U(W(a),e),onClick:t,"data-test-id":c,...a,children:o.jsxs(Q,{className:Y,children:[o.jsx(R,{size:16,className:'tw-hidden tw-opacity-0 group-data-[state="indeterminate"]:tw-block group-data-[state="indeterminate"]:tw-opacity-100 tw-transition-opacity',"data-test-id":"icon-indeterminate"}),o.jsx(j,{size:16,className:'tw-hidden tw-opacity-0 group-data-[state="checked"]:tw-block group-data-[state="checked"]:tw-opacity-100 tw-transition-opacity',"data-test-id":"icon-checked"})]})}),P=r.forwardRef(H);P.displayName="Checkbox";H.__docgenInfo={description:"",methods:[],displayName:"CheckboxComponent",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The default value of the checkbox
Used for uncontrolled components
@default false`},value:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The controlled value of the checkbox
@default false`},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`The size of the checkbox
@default "default"`},emphasis:{required:!1,tsType:{name:"union",raw:"'default' | 'weak'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'weak'"}]},description:`The emphasis of the checkbox
@default "default"`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the checkbox
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox required in form
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox read-only
@default false`},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox value changes"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is blurred"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is focused"},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-checkbox'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};P.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The default value of the checkbox
Used for uncontrolled components
@default false`},value:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The controlled value of the checkbox
@default false`},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`The size of the checkbox
@default "default"`},emphasis:{required:!1,tsType:{name:"union",raw:"'default' | 'weak'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'weak'"}]},description:`The emphasis of the checkbox
@default "default"`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the checkbox
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox required in form
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox read-only
@default false`},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox value changes"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is blurred"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is focused"},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-checkbox'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};export{H as C,P as a};
