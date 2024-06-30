import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as x}from"./index-BwDkhjyp.js";import{T as d}from"./constants-CFVlPM9r.js";import{T as S,u as j}from"./TooltipContent-DdnBYn9k.js";import{h as G,a as T,L as I}from"./Legend-h4Ve_84I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-B8XB3FuZ.js";const v=({TooltipInPortal:t,x:a,y:s,entries:o})=>n.jsx(t,{left:a,top:s,offsetLeft:d,offsetTop:d,applyPositionStyle:!0,unstyled:!0,children:n.jsx(S,{entries:o})});v.__docgenInfo={description:"",methods:[],displayName:"LinearGaugeTooltip",props:{TooltipInPortal:{required:!0,tsType:{name:"FC",elements:[{name:"TooltipInPortalProps"}],raw:"FC<TooltipInPortalProps>"},description:""},x:{required:!0,tsType:{name:"number"},description:""},y:{required:!0,tsType:{name:"number"},description:""},entries:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ color: string; title: string; value: string }",signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ color: string; title: string; value: string }[]"},description:""}}};const b=({index:t,percentage:a})=>{const[s,o]=x.useState(!1),l=s?G(t):T(t);return n.jsx("div",{onPointerEnter:()=>o(!0),onPointerLeave:()=>o(!1),style:{flexBasis:`${a}%`,backgroundColor:l}})};b.__docgenInfo={description:"",methods:[],displayName:"Section",props:{index:{required:!0,tsType:{name:"number"},description:""},percentage:{required:!0,tsType:{name:"number"},description:""}}};const p=({sections:t,totalLabel:a,totalValue:s})=>{const{containerRef:o,TooltipInPortal:l}=j({scroll:!0}),[u,c]=x.useState(null),h=t.map(({name:e})=>e),m=t.map((e,r)=>({color:T(r)??"var(--fc-primary-base-color)",title:e.name,value:e.label}));a&&m.unshift({color:"",title:a,value:s});const w=e=>{const r=e.currentTarget.parentElement,P=(r==null?void 0:r.getBoundingClientRect().left)??0,q=(r==null?void 0:r.getBoundingClientRect().top)??0;c({x:e.clientX-P,y:e.clientY-q})},L=()=>{c(null)};return n.jsxs("div",{ref:o,children:[n.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-6",children:[n.jsx(I,{names:h,style:"square"}),n.jsx("div",{onPointerMove:e=>w(e),onPointerLeave:L,className:"tw-overflow-hidden tw-rounded-[6px] tw-w-full tw-relative tw-flex tw-h-3 tw-bg-box-neutral-hover",children:t.map((e,r)=>n.jsx(b,{index:r,percentage:e.percentage},e.name))})]}),u!==null&&n.jsx(v,{TooltipInPortal:l,x:u.x,y:u.y,entries:m})]})};p.__docgenInfo={description:"",methods:[],displayName:"LinearGauge",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    name: string;
    label: string;
    percentage: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"percentage",value:{name:"number",required:!0}}]}}],raw:"LinearGaugeSection[]"},description:""}}};const R={title:"Charts/Linear Gauge Chart",component:p,parameters:{status:{type:"released"}},argTypes:{sections:{name:"sections",type:{name:"other",value:"Section[]",required:!0},description:"An array of sections to be displayed in the linear gauge."}}},C=t=>n.jsx(p,{...t}),i=C.bind({});i.args={totalValue:"6 GB",totalLabel:"Total",sections:[{name:"A",label:"1 GB",percentage:15},{name:"B",label:"2 GB",percentage:30},{name:"C",label:"3 GB",percentage:40}]};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"(args: LinearGaugeProps) => <LinearGauge {...args} />",...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const H=["SingleDataSet"];export{i as SingleDataSet,H as __namedExportsOrder,R as default};
