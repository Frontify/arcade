import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{T as fe,a as me}from"./TextInput-Bn1Cza0a.js";import{u as we}from"./useMemoizedId-EtHZ7Sxa.js";import{d as be}from"./debounce-BfOZbKMa.js";import{m as g}from"./merge-DI-veSMP.js";import{V as W}from"./validation-C9S5KgfE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./LoadingCircle-CZrma5le.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconSize-BcCrF_mi.js";import"./IconEyeOff-BaqRyiPL.js";import"./IconCross-BUeQrH0h.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./focusStyle-CBFElZiz.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./useFocusable-CAGu0lKI.js";import"./chain-D5h1pgIF.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Button-CYWlMQhW.js";import"./useButton-DofEV6SJ.js";import"./Portal-0C9N3MSP.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";const A=(y,m,S)=>Math.max(m,Math.min(y,S)),ge=0,ye=100,he=1,ve=5,xe="Slider text input",Ee=3,X=["ArrowUp","ArrowRight"],B=["ArrowDown","ArrowLeft"],K=["Home","End"],D=({id:y,label:m,value:S,min:r=ge,max:i=ye,showMinMax:$=!1,step:p=he,stepMultiplier:ee=ve,valueSuffix:a="",onError:k,onChange:j,"aria-label":q=xe,"aria-labelledby":U,disabled:t=!1,"data-test-id":T="fondue-slider"})=>{const[u,h]=s.useState(),[c,V]=s.useState(""),[w,N]=s.useState(),[P,I]=s.useState(),[l,te]=s.useState(null),[re,C]=s.useState(!1),[R,M]=s.useState(!1),b=we(y),ae=e=>{V(`${e.replace(a,"")}${a}`)},f=s.useCallback(({clientX:e,rawValue:o})=>{if(!l)return;const d=i-r,ue=l.getBoundingClientRect().x,ce=l.clientWidth;let _;if(e!==void 0)_=(e-ue)/ce;else{_=((o??r)-r)/d,I(A(_,0,1)*100);return}const de=A(_,0,1),pe=d/p,O=A(Math.round(de*pe)*p+r,r,i);I((O-r)/d*100),V(`${O}${a}`)},[l,i,r,p,a]),v=s.useMemo(()=>l?be(e=>{t||f({clientX:e.clientX??e.touches[0].clientX})},Ee):()=>{},[f,l,t]),L=s.useCallback(()=>{l&&(M(!1),window.removeEventListener("mousemove",v),window.removeEventListener("touchmove",v),window.removeEventListener("mouseup",L))},[l,v]),F=e=>{!l||t||(M(!0),f({clientX:e.clientX??e.touches[0].clientX}),window.addEventListener("mousemove",v),window.addEventListener("touchmove",v),window.addEventListener("mouseup",L))},oe=e=>{if(![...X,...B,...K].includes(e.key)||u===void 0||t)return;e.preventDefault();let o=0,d=0;B.includes(e.key)?o=-p:X.includes(e.key)&&(o=p),K.includes(e.key)?d=e.key==="Home"?r:i:(o*=e.shiftKey?ee:1,d=A(Math.floor(u/p)*p+o,r,i)),h(d),V(`${d}${a}`)},se=()=>{t||C(!0)},ne=()=>{t||C(!1)},ie=()=>{t||M(!0)},le=()=>{t||M(!1)};return s.useEffect(()=>{if(!l)return;if(r>i){N("MinMax");return}const e=S??r;h(e),V(`${e}${a}`),f({rawValue:e})},[l,f,r,i,S,a]),s.useEffect(()=>{if(!c)return;const e=c.replace(a,""),o=+e;if(Number.isNaN(o)||!e){h(void 0),N("ValueNaN");return}if(o<r||o>i){h(void 0),N("ValueOutOfRange");return}N(void 0),h(o)},[c,a,r,i]),s.useEffect(()=>{if(w||u===void 0||!c)return;const o=+c.replace(a,"");Number.isNaN(o)||u!==o||(f({rawValue:u}),t||j({raw:u,withSuffix:c.replace(a,"")+a}))},[u,c,a,w,j,f,t]),s.useEffect(()=>{w&&k&&k(w)},[w,k]),n.jsxs("div",{className:"tw-flex tw-flex-col","data-test-id":T,id:b,children:[n.jsx("label",{id:`${b}-label`,htmlFor:b,className:g([!m&&"tw-hidden",t&&"tw-text-text-disabled"]),"data-test-id":`${T}-label`,children:m}),n.jsx("div",{className:"tw-flex",children:n.jsxs("div",{className:g(["tw-flex-1 tw-flex tw-items-center"]),children:[$&&n.jsxs("div",{className:g(["tw-mr-3",t&&"tw-text-text-disabled"]),children:[r,a]}),n.jsxs("button",{ref:te,"data-test-id":`${T}-interactive`,className:"tw-flex-1 tw-relative tw-h-full tw-cursor-pointer disabled:tw-cursor-default tw-outline-none",onMouseOver:se,onMouseOut:ne,onFocus:ie,onBlur:le,onMouseDown:F,onMouseUp:L,onTouchStart:F,onTouchEnd:L,onKeyDown:oe,disabled:t,children:[n.jsx("span",{className:"tw-absolute tw-block tw-top-1/2 tw--translate-y-1/2 tw-w-full tw-h-1 tw-rounded-sm tw-bg-box-neutral tw-flex-1"}),P!==void 0&&n.jsx("span",{role:"slider","aria-valuenow":u,"aria-valuemin":r,"aria-valuemax":i,"aria-label":q,"aria-labelledby":m?`${b}-label`:U,"data-test-id":`${T}-track`,className:g(["tw-absolute tw-block tw-top-1/2 tw--translate-y-1/2 tw-origin-left tw-w-full tw-h-1  tw-rounded-sm tw-bg-box-neutral-strong tw-flex-1",t&&"tw-bg-box-neutral"]),style:{width:`${P}%`}}),n.jsx("span",{className:g(["tw-absolute tw-block tw-top-1/2 tw--translate-y-1/2 tw--translate-x-1/2 tw-w-5 tw-h-5","after:tw-absolute after:tw-block after:tw-top-1/2 after:tw-left-1/2 after:tw--translate-y-1/2 after:tw--translate-x-1/2 after:tw-w-5 after:tw-h-5 after:tw-bg-base after:tw-rounded-full after:tw-border after:tw-border-line-strong",re&&!R&&"after:tw-shadow",R&&"after:tw-border-line-xx-strong before:tw-content-[''] before:tw-opacity-25 before:tw-top-1/2 before:tw--translate-y-1/2 before:tw--translate-x-1/2 before:tw-left-1/2 before:tw-block before:tw-rounded-full before:tw-absolute before:tw-z-0 before:tw-w-9 before:tw-h-9 before:tw-bg-box-neutral-strong",t&&"after:tw-bg-box-neutral after:tw-border-line-weak"]),style:{left:`${P}%`}})]}),$&&n.jsxs("div",{className:g(["tw-ml-3",t&&"tw-text-text-disabled"]),children:[i,a]}),n.jsx("div",{className:"tw-w-16 tw-ml-3",children:n.jsx(fe,{id:`${b}-text-input`,value:c,placeholder:q,"aria-labelledby":m?`${b}-label`:U,type:me.Text,validation:w?W.Error:W.Default,onChange:ae,disabled:t})})]})})]})};D.displayName="FondueSlider";D.__docgenInfo={description:"",methods:[],displayName:"FondueSlider",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},showMinMax:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},stepMultiplier:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(errorCode: SliderError) => void",signature:{arguments:[{type:{name:"SliderError"},name:"errorCode"}],return:{name:"void"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: SliderValue) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    raw: number;
    withSuffix: string;
}`,signature:{properties:[{key:"raw",value:{name:"number",required:!0}},{key:"withSuffix",value:{name:"string",required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""},valueSuffix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-slider'",computed:!1}},"aria-label":{defaultValue:{value:"'Slider text input'",computed:!1},required:!1}}};const tt={title:"Components/Slider",component:D,tags:["autodocs"],argTypes:{id:{type:"string"},value:{type:"number"},min:{type:"number"},max:{type:"number"},step:{type:"number"},stepMultiplier:{type:"number"},label:{type:"string"},"aria-label":{type:"string"},valueSuffix:{type:"string"},showMinMax:{type:"boolean"},disabled:{type:"boolean"},onChange:{action:"Value change"},onError:{action:"Slider error"}},args:{min:0,max:100,stepMultiplier:5}},Z=y=>n.jsx(D,{...y}),x=Z.bind({});x.args={min:0,max:100,value:30,step:1,valueSuffix:"%","aria-label":"Percentage slider"};const E=Z.bind({});E.args={value:20,"aria-label":"Percentage slider",disabled:!0};var z,Y,H;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`(args: SliderProps) => {
  return <Slider {...args} />;
}`,...(H=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var G,J,Q;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`(args: SliderProps) => {
  return <Slider {...args} />;
}`,...(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const rt=["BasicUsage","DisabledState"];export{x as BasicUsage,E as DisabledState,rt as __namedExportsOrder,tt as default};
