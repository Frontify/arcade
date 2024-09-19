import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{r as c}from"./index-BwDkhjyp.js";import{c as j}from"./index-DOnKqARA.js";import{u as B,P as T}from"./index-Brw_kfkv.js";import{c as H}from"./index-BWD2N0gV.js";import{u as M}from"./index-DGaPG0k3.js";import{u as R}from"./index-BgCrdp81.js";import{u as F}from"./index-kUwV4muI.js";import{c as N}from"./styleUtilities-BnElyh0X.js";var w="Switch",[L,oe]=H(w),[I,z]=L(w),k=c.forwardRef((e,s)=>{const{__scopeSwitch:t,name:n,checked:a,defaultChecked:l,required:r,disabled:o,value:u="on",onCheckedChange:h,...g}=e,[d,f]=c.useState(null),x=B(s,p=>f(p)),v=c.useRef(!1),y=d?!!d.closest("form"):!0,[m=!1,q]=M({prop:a,defaultProp:l,onChange:h});return i.jsxs(I,{scope:t,checked:m,disabled:o,children:[i.jsx(T.button,{type:"button",role:"switch","aria-checked":m,"aria-required":r,"data-state":E(m),"data-disabled":o?"":void 0,disabled:o,value:u,...g,ref:x,onClick:j(e.onClick,p=>{q(P=>!P),y&&(v.current=p.isPropagationStopped(),v.current||p.stopPropagation())})}),y&&i.jsx(V,{control:d,bubbles:!v.current,name:n,value:u,checked:m,required:r,disabled:o,style:{transform:"translateX(-100%)"}})]})});k.displayName=w;var S="SwitchThumb",C=c.forwardRef((e,s)=>{const{__scopeSwitch:t,...n}=e,a=z(S,t);return i.jsx(T.span,{"data-state":E(a.checked),"data-disabled":a.disabled?"":void 0,...n,ref:s})});C.displayName=S;var V=e=>{const{control:s,checked:t,bubbles:n=!0,...a}=e,l=c.useRef(null),r=R(t),o=F(s);return c.useEffect(()=>{const u=l.current,h=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(h,"checked").set;if(r!==t&&d){const f=new Event("click",{bubbles:n});d.call(u,t),u.dispatchEvent(f)}},[r,t,n]),i.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...a,tabIndex:-1,ref:l,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function E(e){return e?"checked":"unchecked"}var A=k,D=C;const O="_root_b6n55_5",U="_small_b6n55_27",W="_medium_b6n55_31",X="_large_b6n55_35",$="_thumb_b6n55_49",b={root:O,small:U,medium:W,large:X,thumb:$},G=({value:e,defaultValue:s,size:t="medium",onChange:n,"data-test-id":a="fondue-switch","aria-label":l="Switch",...r},o)=>i.jsx(A,{ref:o,checked:e,defaultChecked:s,className:N([b.root,b[t]]),onCheckedChange:n,"aria-label":l,"data-test-id":a,...r,children:i.jsx(D,{className:b.thumb})}),_=c.forwardRef(G);_.displayName="Switch";_.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The size of the switch component.
@default medium`,defaultValue:{value:"'medium'",computed:!1}},value:{required:!1,tsType:{name:"boolean"},description:`The active value in the select component. This is used to control the select externally.
@default false`},defaultValue:{required:!1,tsType:{name:"boolean"},description:`The default value of the select component. Used for uncontrolled usages.
@default false`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disables the select component.
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`Whether the switch is required.
@default false`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:`Callback function that is called when the switch is toggled.
@param checked - The new checked state of the switch`},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:`Event handler called when the checkbox is blurred
@param event - The event object`},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLButtonElement"}],raw:"FormEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:`Event handler called when the checkbox is focused
@param event - The event object`},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-switch'",computed:!1}},"aria-label":{defaultValue:{value:"'Switch'",computed:!1},required:!1}}};export{_ as S};
