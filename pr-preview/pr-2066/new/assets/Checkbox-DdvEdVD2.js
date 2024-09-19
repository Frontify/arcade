import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{n as N,r as j}from"./fondue-icons326-xfcb5yXJ.js";import{u as I,P as E}from"./index-Brw_kfkv.js";import{c as R}from"./index-BWD2N0gV.js";import{c as T}from"./index-DOnKqARA.js";import{u as S}from"./index-DGaPG0k3.js";import{u as z}from"./index-BgCrdp81.js";import{u as _}from"./index-kUwV4muI.js";import{P as O}from"./index-BwIM2_zL.js";import{s as D,c as V}from"./styleUtilities-BnElyh0X.js";import{F as U}from"./focusStyle-IgMhxCMT.js";var k="Checkbox",[A,ce]=R(k),[K,X]=A(k),C=s.forwardRef((e,d)=>{const{__scopeCheckbox:t,name:i,checked:l,defaultChecked:a,required:c,disabled:m,value:p="on",onCheckedChange:b,...x}=e,[r,v]=s.useState(null),H=I(d,n=>v(n)),w=s.useRef(!1),y=r?!!r.closest("form"):!0,[f=!1,g]=S({prop:l,defaultProp:a,onChange:b}),P=s.useRef(f);return s.useEffect(()=>{const n=r==null?void 0:r.form;if(n){const h=()=>g(P.current);return n.addEventListener("reset",h),()=>n.removeEventListener("reset",h)}},[r,g]),o.jsxs(K,{scope:t,state:f,disabled:m,children:[o.jsx(E.button,{type:"button",role:"checkbox","aria-checked":u(f)?"mixed":f,"aria-required":c,"data-state":B(f),"data-disabled":m?"":void 0,disabled:m,value:p,...x,ref:H,onKeyDown:T(e.onKeyDown,n=>{n.key==="Enter"&&n.preventDefault()}),onClick:T(e.onClick,n=>{g(h=>u(h)?!0:!h),y&&(w.current=n.isPropagationStopped(),w.current||n.stopPropagation())})}),y&&o.jsx($,{control:r,bubbles:!w.current,name:i,value:p,checked:f,required:c,disabled:m,style:{transform:"translateX(-100%)"}})]})});C.displayName=k;var q="CheckboxIndicator",M=s.forwardRef((e,d)=>{const{__scopeCheckbox:t,forceMount:i,...l}=e,a=X(q,t);return o.jsx(O,{present:i||u(a.state)||a.state===!0,children:o.jsx(E.span,{"data-state":B(a.state),"data-disabled":a.disabled?"":void 0,...l,ref:d,style:{pointerEvents:"none",...e.style}})})});M.displayName=q;var $=e=>{const{control:d,checked:t,bubbles:i=!0,...l}=e,a=s.useRef(null),c=z(t),m=_(d);return s.useEffect(()=>{const p=a.current,b=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(b,"checked").set;if(c!==t&&r){const v=new Event("click",{bubbles:i});p.indeterminate=u(t),r.call(p,u(t)?!1:t),p.dispatchEvent(v)}},[c,t,i]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:u(t)?!1:t,...l,tabIndex:-1,ref:a,style:{...e.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function u(e){return e==="indeterminate"}function B(e){return u(e)?"indeterminate":e?"checked":"unchecked"}var G=C,J=M;const Q=D({base:`tw-peer tw-relative tw-inline-flex tw-bg-base tw-text-white tw-shrink-0 tw-rounded tw-border tw-border-line-x-strong group-hover:tw-border-line-xx-strong hover:tw-border-line-xx-strong tw-transition-colors data-[state="checked"]:tw-border-transparent data-[state="indeterminate"]:tw-border-transparent disabled:tw-border-line-strong disabled:tw-bg-base disabled:tw-cursor-not-allowed data-[state="checked"]:disabled:tw-bg-box-disabled-strong ${U}`,variants:{size:{default:"tw-size-4",large:"tw-size-5"},emphasis:{default:'data-[state="checked"]:tw-bg-box-selected-strong data-[state="checked"]:hover:tw-bg-box-selected-strong-hover data-[state="checked"]:active:tw-bg-box-selected-strong-pressed data-[state="indeterminate"]:tw-bg-box-selected-strong data-[state="indeterminate"]:hover:tw-bg-box-selected-strong-hover data-[state="indeterminate"]:active:tw-bg-box-selected-strong-pressed ',weak:'data-[state="checked"]:tw-bg-box-neutral-strong data-[state="checked"]:hover:tw-bg-box-neutral-strong-hover data-[state="checked"]:active:tw-bg-box-neutral-strong-pressed data-[state="indeterminate"]:tw-bg-box-neutral-strong data-[state="indeterminate"]:hover:tw-bg-box-neutral-strong-hover data-[state="indeterminate"]:active:tw-bg-box-neutral-strong-pressed '}},defaultVariants:{size:"default",emphasis:"default"}}),W='tw-group tw-absolute tw-inset-0 tw-inline-flex tw-items-center tw-justify-center tw-text-current tw-opacity-0 data-[state="checked"]:tw-opacity-100 data-[state="indeterminate"]:tw-opacity-100 tw-transition-opacity ',F=({className:e,value:d,onChange:t,defaultValue:i,"data-test-id":l="fondue-checkbox",...a},c)=>o.jsx(G,{ref:c,checked:d,defaultChecked:i,className:V(Q(a),e),onClick:t,"data-test-id":l,...a,children:o.jsxs(J,{className:W,children:[o.jsx(N,{size:16,className:'tw-hidden tw-opacity-0 group-data-[state="indeterminate"]:tw-block group-data-[state="indeterminate"]:tw-opacity-100 tw-transition-opacity',"data-test-id":"icon-indeterminate"}),o.jsx(j,{size:16,className:'tw-hidden tw-opacity-0 group-data-[state="checked"]:tw-block group-data-[state="checked"]:tw-opacity-100 tw-transition-opacity',"data-test-id":"icon-checked"})]})}),L=s.forwardRef(F);L.displayName="Checkbox";F.__docgenInfo={description:"",methods:[],displayName:"CheckboxComponent",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The default value of the checkbox
Used for uncontrolled components
@default false`},value:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The controlled value of the checkbox
@default false`},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`The size of the checkbox
@default "default"`},emphasis:{required:!1,tsType:{name:"union",raw:"'default' | 'weak'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'weak'"}]},description:`The emphasis of the checkbox
@default "default"`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the checkbox
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox required in form
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox read-only
@default false`},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox value changes"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is blurred"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is focused"},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-checkbox'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The default value of the checkbox
Used for uncontrolled components
@default false`},value:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`The controlled value of the checkbox
@default false`},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`The size of the checkbox
@default "default"`},emphasis:{required:!1,tsType:{name:"union",raw:"'default' | 'weak'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'weak'"}]},description:`The emphasis of the checkbox
@default "default"`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the checkbox
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox required in form
@default false`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Make the checkbox read-only
@default false`},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox value changes"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is blurred"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the checkbox is focused"},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-checkbox'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};export{F as C,L as a};
