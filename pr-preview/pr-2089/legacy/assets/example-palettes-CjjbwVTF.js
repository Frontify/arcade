import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as f}from"./index-BwDkhjyp.js";import{S as L}from"./SegmentedControls-BSWtFswn.js";import{i as R,T as y,t as j,C,a as E}from"./colors-cqDZVL9s.js";import{T as _,a as h}from"./TextInput-JMgZnDJ6.js";import{I as z}from"./IconCheckMark-BVQYjlwc.js";import{I as B,a as H}from"./IconStackVertical-pY154R4N.js";import{I as A}from"./IconMagnifier-B168s2sQ.js";import{I as M}from"./IconSize-BcCrF_mi.js";import{m as v}from"./merge-DI-veSMP.js";import{C as D}from"./index-YYnwjzoa.js";import{D as $}from"./Dropdown-CG24Nx12.js";import{$ as G}from"./useFocusRing-Vzyl7-Lk.js";import{u as K}from"./useMemoizedId-EtHZ7Sxa.js";import{F as O}from"./focusStyle-CBFElZiz.js";const k=(r,a="")=>r==null?void 0:r.toLocaleLowerCase().includes(a.toLocaleLowerCase().trim()),N=({palettes:r=[],currentColor:a,onSelect:l})=>{const s=[{id:"Grid",icon:e.jsx(B,{}),ariaLabel:"Grid"},{id:"List",icon:e.jsx(H,{}),ariaLabel:"List"}],[o,c]=f.useState(s[0].id),[n,w]=f.useState(""),[d,x]=f.useState(r);f.useEffect(()=>{const u=setTimeout(()=>{x(r.filter(({title:p,colors:m})=>k(p,n)||m.some(({name:t})=>k(t,n))).map(({id:p,title:m,colors:t})=>({id:p,title:m,colors:t.some(({name:i})=>k(i,n))?t.filter(({name:i})=>k(i,n)):t})))},200);return()=>clearTimeout(u)},[r,n]);const g=d.filter(u=>u.colors.length>0);return e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-4","data-test-id":"brand-color-picker",children:[e.jsxs("div",{className:"tw-flex tw-gap-2",children:[e.jsx("div",{className:"tw-flex-1",children:e.jsx(_,{value:n,decorator:e.jsx(A,{}),placeholder:"Search",onChange:u=>w(u),clearable:!0})}),e.jsx("div",{className:"tw-w-[72px]",children:e.jsx(L,{size:"small",items:s,activeItemId:o,onChange:u=>c(u)})})]}),e.jsx("ul",{className:"tw-flex tw-flex-col tw-gap-4",children:g.length>0?g.map(({id:u,title:p,colors:m})=>e.jsxs("li",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx("p",{className:"tw-text-black tw-text-xs tw-font-medium dark:tw-text-white",children:p}),e.jsx("ul",{className:v(["tw-flex tw-gap-y-2 tw-flex-wrap",o==="List"&&"tw-flex-col"]),children:m.map(t=>e.jsx("li",{"data-test-id":"brand-color",children:e.jsxs("button",{className:"tw-flex tw-w-full",onClick:()=>l(t),type:"button","aria-label":`color value: ${t.name}`,children:[e.jsx("span",{className:v(["tw-h-6 tw-w-6 tw-mr-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-ring-1 tw-ring-black-10 tw-ring-offset-1",R(t)?"tw-text-black":"tw-text-white"]),style:{background:new y(j(t)).toRgbString()},children:t.red===a.red&&t.green===a.green&&t.blue===a.blue&&t.alpha===a.alpha&&e.jsx(z,{size:M.Size20})}),o==="List"&&e.jsx("span",{className:"tw-h-6 tw-grow tw-flex tw-items-center tw-text-sm tw-text-left",children:t.name})]})},t.name))})]},u)):"No colors found"})]})};N.displayName="FondueBrandColorPicker";N.__docgenInfo={description:"",methods:[],displayName:"FondueBrandColorPicker",props:{palettes:{defaultValue:{value:"[]",computed:!1},required:!1}}};var F=(r=>(r.Left="Left",r.Right="Right",r))(F||{});const b=({min:r,max:a,decorator:l,onChange:s,onEnterPressed:o,size:c,onBlur:n,value:w="",decoratorPosition:d="Left",type:x=h.Text,"aria-label":g="Color Input"})=>{const{isFocusVisible:u,focusProps:p}=G({within:!0,isTextInput:!0}),m=f.useRef(null),t=i=>{const{key:S,shiftKey:V}=i;S==="Enter"&&!V&&o&&o(i)};return e.jsx("div",{...p,className:v(["tw-flex tw-items-center tw-h-9 tw-px-2 tw-border tw-rounded tw-text-s tw-font-sans tw-relative tw-bg-white dark:tw-bg-transparent focus-within:tw-border-black-90 tw-border-black-20",u&&O]),"data-test-id":"color-input",children:e.jsxs("div",{className:v(["tw-flex tw-gap-1",d==="Right"&&"tw-flex-row-reverse"]),children:[l&&e.jsx("div",{className:"tw-flex tw-items-center tw-justify-center tw-text-black-80",children:l}),e.jsx("input",{id:K(),ref:m,className:v(["tw-grow tw-border-none tw-outline-none tw-bg-transparent tw-hide-input-arrows tw-text-black tw-placeholder-black-60 dark:tw-text-white",d==="Right"&&"tw-text-right"]),onClick:()=>{var i;return(i=m.current)==null?void 0:i.focus()},onKeyDown:t,onChange:i=>s&&s(i.currentTarget.value),onBlur:n,value:w,type:x,min:r,max:a,size:c,"aria-label":g})]})})};b.displayName="FondueColorInput";b.__docgenInfo={description:"",methods:[],displayName:"FondueColorInput",props:{min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},decoratorPosition:{required:!1,tsType:{name:"DecoratorPosition"},description:"",defaultValue:{value:"DecoratorPosition.Left",computed:!0}},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Color Input'",computed:!1}},value:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"TextInputType.Text",computed:!0},required:!1}}};const q=({color:r})=>{const l=new y(j(r)).toRgbString();return e.jsx("div",{className:"tw-sticky tw-ml-[-1px] tw-mt-[-1px] tw-border tw-border-transparent tw-w-full tw-box-content tw-shrink-0 tw-h-2 tw-top-0 tw-rounded-t tw-overflow-hidden",children:e.jsx("div",{className:"tw-h-full tw-w-full tw-bg-white tw-z-20 dark:tw-bg-black-95",style:{backgroundColor:l},"data-test-id":"color-preview"})})};q.displayName="FondueColorPreview";q.__docgenInfo={description:"",methods:[],displayName:"FondueColorPreview",props:{color:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:""}}};const T=r=>new y(j(r)).toHex(),I=({currentColor:r,currentFormat:a,setFormat:l,onSelect:s})=>{const o=[{id:"color-picker-format-dropdown-block",menuItems:Object.values(C).map(t=>({id:t,title:t.toLocaleUpperCase()}))}],{red:c,green:n,blue:w,alpha:d=1}=r,[x,g]=f.useState(T(r)),[u,p]=f.useState(d),m=()=>{const t=new y(x);t.isValid&&s(E(t.toRgb()))};return f.useEffect(()=>{p(d),g(T(r))},[d,r]),e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-4","data-test-id":"custom-color-picker",id:"custom-color-picker",children:[e.jsxs("div",{className:"tw-flex tw-flex-col md:tw-flex-row tw-gap-2 tw-max-w-full",children:[e.jsx("div",{className:"tw-min-w-[84px]",children:e.jsx($,{menuBlocks:o,activeItemId:a,onChange:t=>t&&l&&l(t)})}),a===C.Hex?e.jsx("div",{className:"tw-flex-1",children:e.jsx(b,{value:x,decorator:"#",size:6,onChange:g,onEnterPressed:m,onBlur:m,"aria-label":"Color HEX Value"})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tw-flex-1",children:e.jsx(b,{min:0,max:255,size:3,type:h.Number,value:c.toString(),onChange:t=>s({...r,red:parseInt(t||"0")}),"aria-label":"Color Code Type"})}),e.jsx("div",{className:"tw-flex-1",children:e.jsx(b,{min:0,max:255,size:3,type:h.Number,value:n.toString(),onChange:t=>s({...r,green:parseInt(t||"0")}),"aria-label":"Color Value"})}),e.jsx("div",{className:"tw-flex-1",children:e.jsx(b,{min:0,max:255,size:3,type:h.Number,value:w.toString(),onChange:t=>s({...r,blue:parseInt(t||"0")}),"aria-label":"Color Opacity"})})]}),e.jsx(b,{min:0,max:100,size:3,type:h.Number,value:Math.trunc(u*100).toString(),decorator:"%",decoratorPosition:F.Right,onChange:t=>{const i=parseInt(t||"0")/100;p(i),s({...r,alpha:i})}})]}),e.jsx("div",{className:"tw-flex tw-gap-2 tw-w-full tw-h-[200px]",children:e.jsx("div",{className:"tw-relative tw-grow tw-rounded",children:e.jsx(D,{color:{r:c,g:n,b:w,a:d},onChange:t=>s({red:t.r,green:t.g,blue:t.b,alpha:t.a}),style:{width:"100%"}})})})]})};I.displayName="FondueCustomColorPicker";I.__docgenInfo={description:"",methods:[],displayName:"FondueCustomColorPicker"};const U=[{id:"Brand",value:"Brand"},{id:"Custom",value:"Custom"}],P=({currentColor:r,palettes:a,onSelect:l,setFormat:s,showPreview:o=!0,currentFormat:c=C.Hex,allowCustomColor:n=!0})=>{const[w,d]=f.useState("Brand");return e.jsxs("div",{className:"tw-w-[400px] tw-relative",children:[o&&e.jsx(q,{color:r}),e.jsxs("div",{className:"tw-p-5 tw-flex tw-flex-col tw-gap-2",children:[a&&n&&e.jsx(L,{items:U,activeItemId:w,onChange:x=>d(x)}),a&&w==="Brand"?e.jsx(N,{currentColor:r,palettes:a,onSelect:l}):e.jsx(I,{currentColor:r,currentFormat:c,setFormat:s,onSelect:l})]})]})};P.displayName="FondueColorPicker";P.__docgenInfo={description:"",methods:[],displayName:"FondueColorPicker",props:{palettes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    id: number | string;
    title: string;
    colors: Color[];
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"colors",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}}],raw:"Color[]",required:!0}}]}}],raw:"Palette[]"},description:""},currentColor:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:""},currentFormat:{required:!1,tsType:{name:"ColorFormat"},description:"",defaultValue:{value:"ColorFormat.Hex",computed:!0}},setFormat:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: ColorFormat) => void",signature:{arguments:[{type:{name:"ColorFormat"},name:"id"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(color: Color) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},name:"color"}],return:{name:"void"}}},description:""},showPreview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},allowCustomColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const X=(r,a)=>{const l=new y(r);return[...Array(a)].map((s,o)=>{const c=(90-o*10).toString(),n=l.lighten(o*3).toRgb();return{red:n.r,green:n.g,blue:n.b,alpha:n.a,name:c}})},de=[{id:"red",title:"Red",source:"#992136"},{id:"green",title:"Green",source:"#006452"},{id:"yellow",title:"Yellow",source:"#cc9000"}].map(r=>({...r,colors:X(r.source,6)}));export{P as C,de as E,q as a};
