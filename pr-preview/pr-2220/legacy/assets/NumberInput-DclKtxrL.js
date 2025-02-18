import{j as u}from"./jsx-runtime-DH9XN8A8.js";import{r as i}from"./index-v7USjxUg.js";import{a as te}from"./IconMinus-DtF84-GK.js";import{I as ne}from"./IconPlus16-C4i4a16H.js";import{u as re}from"./useMemoizedId-Cl5PI4eu.js";import{I as ae,G as se,a}from"./input-BRa3N8jW.js";import{m as E}from"./merge-DI-veSMP.js";import{V as ue,a as oe}from"./validation-CJXPAjNB.js";var o=(c=>(c[c.DECREMENT=0]="DECREMENT",c[c.INCREMENT=1]="INCREMENT",c))(o||{});const ie=["ArrowUp","ArrowRight"],le=["ArrowDown","ArrowLeft"],ce=["Backspace","Tab"],F=({id:c,size:P,disabled:d=!1,required:_,readOnly:m,status:w=ue.Default,decorator:D,suffix:r="",controls:G,clearable:W,placeholder:L,stepInterval:T=10,title:Y,defaultValue:x,hugWidth:z,value:B,valueSelect:f,onChange:N,onKeyDown:S,onBlur:j,onFocus:K,"aria-label":H="Number Input","data-test-id":l="fondue-number-input",...O})=>{const R=i.useRef(0),C=i.useRef(!1),M=i.useRef(!1),n=i.useRef(null),g=d||m,b=i.useCallback(()=>{if(n.current){const{value:e}=n.current;return r?e.replace(`${r}`,"").trim():e}return""},[n,r]),y=()=>{clearInterval(R.current),M.current=!1},v=e=>{n.current&&!d&&(M.current=!0,J(e))},J=e=>{(()=>{let p=0,s=0;R.current=window.setInterval(()=>{switch(!0){case p>2e3:s+=5;break;case p>5e3:s+=10;break;default:s=1}h(e,s),p+=250},250)})()},Q=e=>{const{key:t,shiftKey:p}=e;if(ce.includes(t)){const s=b(),q=s.length===2&&s.includes("-");((s==null?void 0:s.length)===0||q)&&U();return}else if(!isNaN(Number(t)))return;e.preventDefault(),C.current=p,le.includes(t)?h(o.DECREMENT):ie.includes(t)&&h(o.INCREMENT),S&&S(e)},X=e=>{e.preventDefault(),C.current=e.shiftKey,n.current&&k()},h=(e,t=1)=>{const s=(()=>{const q=b(),V=Number(q)||0;switch(t=C.current?T:t,e){case o.DECREMENT:return V-t;case o.INCREMENT:return V+t;default:return V}})();A(s)},A=e=>{if(n.current){const t=e.toString();if(n.current.value=r?`${t} ${r}`:t,M.current)return;k()}},$=i.useCallback(()=>{if(f&&n.current){const e=n.current.value.length,t=r?e-r.length-1:e;n.current.setSelectionRange(0,t)}},[r,f]),I=i.useCallback(()=>{if(r&&n.current){const e=n.current.value.length-r.length-1;n.current.setSelectionRange(e,e)}},[r,n]),k=i.useCallback(()=>{const e=b();N==null||N(e?Number(e):void 0),r&&I(),f&&$()},[r,f,N,b,I,$]),U=()=>{n.current&&(n.current.value=x?x.toString():""),k()},Z=e=>{K&&K(e)},ee=e=>{j&&j(e)};return i.useEffect(()=>{clearInterval(R.current)},[]),u.jsxs("div",{className:E([a.base,a.height,a.hover,a.focusWithin,z?"tw-w-auto":a.width,d||m?a.readOnly:"",w?oe[w]:""]),"data-test-id":l,children:[D?u.jsx("div",{className:E(["tw-flex tw-items-center tw-justify-center tw-pl-1",g?"tw-text-text-disabled":"tw-text-text"]),"data-test-id":`${l}-decorator`,children:D}):null,u.jsx("input",{...O,defaultValue:x,value:B,id:re(c),ref:n,name:l,type:r||f?"text":"number",placeholder:L,className:E(["tw-hide-input-arrows",a.width,a.element,d?a.disabled:"",m?a.readOnly:""]),onClick:r?I:void 0,onChange:()=>A(Number(b())),onKeyDown:Q,onKeyUp:X,onFocus:Z,onBlur:ee,size:P,title:Y,"aria-label":H,required:_,readOnly:m,disabled:d,"data-test-id":`${l}-input`}),u.jsxs("span",{className:"tw-flex tw-items-center",children:[G?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:E(["tw-text-text-weak tw-p-1 hover:tw-rounded-sm hover:tw-bg-box-neutral hover:tw-text-box-neutral-inverse focus:tw-ring-line-xx-strong focus:tw-bg-box-neutral",d?a.disabled:"",m?a.readOnly:""]),type:"button",onClick:e=>{if(e.button===0){const t=e.shiftKey?T:1;h(o.DECREMENT,t)}},onMouseDown:e=>e.shiftKey||e.button>0?null:v(o.DECREMENT),onMouseUp:y,onTouchStart:e=>e.shiftKey?null:v(o.DECREMENT),onTouchEnd:y,disabled:g,"aria-label":"Decrement value",title:"Decrement value","data-test-id":`${l}-decrement`,children:u.jsx(te,{})}),u.jsx("button",{className:E(["tw-text-text-weak tw-p-1 hover:tw-rounded-sm hover:tw-bg-box-neutral hover:tw-text-box-neutral-inverse focus:tw-ring-line-xx-strong focus:tw-bg-box-neutral",d?a.disabled:"",m?a.readOnly:""]),type:"button",onClick:e=>{if(e.button===0){const t=e.shiftKey?T:1;h(o.INCREMENT,t)}},onMouseDown:e=>e.shiftKey||e.button>0?null:v(o.INCREMENT),onMouseUp:y,onTouchStart:e=>e.shiftKey?null:v(o.INCREMENT),onTouchEnd:y,disabled:g,"aria-label":"Increment value",title:"Increment value","data-test-id":`${l}-increment`,children:u.jsx(ne,{})})]}):null,u.jsx(ae,{disabled:g,clearable:W,callbacks:{clearable:U},dataTestId:l}),w?se(w,l):null]})]})};F.displayName="FondueNumberInput";F.__docgenInfo={description:'@deprecated Use `TextInput` from `@frontify/fondue/components` with `type="number"` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#text-input the migration guide}.',methods:[],displayName:"FondueNumberInput",props:{controls:{required:!1,tsType:{name:"boolean"},description:""},stepInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},size:{required:!1,tsType:{name:"number"},description:""},suffix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"TValue"},description:""},valueSelect:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: TValue) => void",signature:{arguments:[{type:{name:"TValue"},name:"value"}],return:{name:"void"}}},description:""},autocomplete:{required:!1,tsType:{name:"boolean"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},decorator:{required:!1,tsType:{name:"ReactElement"},description:""},extraActions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    icon: ReactElement;
    title: string;
    callback: () => void;
}`,signature:{properties:[{key:"icon",value:{name:"ReactElement",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"callback",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"ExtraAction[]"},description:""},hugWidth:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"Validation"},description:"",defaultValue:{value:"Validation.Default",computed:!0}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-number-input'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},"aria-label":{defaultValue:{value:"'Number Input'",computed:!1},required:!1}}};export{F as N};
