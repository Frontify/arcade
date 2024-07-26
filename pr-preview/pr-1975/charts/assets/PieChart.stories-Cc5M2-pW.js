import{j as h}from"./jsx-runtime-BlAj40OV.js";import{R as D,r as v}from"./index-Cs7sjTYM.js";import{c as Me,B as W,G as Q,H as ee,a as G,h as qe,T as Ae,L as Ie}from"./Legend-fP9SAh3e.js";import{G as ce}from"./Group-BLPPNPol.js";import{a as Ee,p as De}from"./D3ShapeFactories-Ch-vNTVa.js";import{e as Ce,g as $,T as je}from"./createTheme-D6eamMcV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./pie-DtVSWFrF.js";var Re=["className","top","left","data","centroid","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","pieSort","pieSortValues","pieValue","children","fill"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(e[u]=s[u])}return e},F.apply(this,arguments)}function ke(e,t){if(e==null)return{};var s={},u=Object.keys(e),n,a;for(a=0;a<u.length;a++)n=u[a],!(t.indexOf(n)>=0)&&(s[n]=e[n]);return s}function Oe(e){var t=e.className,s=e.top,u=e.left,n=e.data,a=n===void 0?[]:n,r=e.centroid,i=e.innerRadius,o=i===void 0?0:i,c=e.outerRadius,l=e.cornerRadius,d=e.startAngle,m=e.endAngle,b=e.padAngle,T=e.padRadius,S=e.pieSort,f=e.pieSortValues,y=e.pieValue,x=e.children,w=e.fill,p=w===void 0?"":w,P=ke(e,Re),g=Ee({innerRadius:o,outerRadius:c,cornerRadius:l,padRadius:T}),M=De({startAngle:d,endAngle:m,padAngle:b,value:y,sort:S,sortValues:f}),E=M(a);return x?D.createElement(D.Fragment,null,x({arcs:E,path:g,pie:M})):D.createElement(ce,{className:"visx-pie-arcs-group",top:s,left:u},E.map(function(q,A){return D.createElement("g",{key:"pie-arc-"+A},D.createElement("path",F({className:Me("visx-pie-arc",t),d:g(q)||"",fill:p==null||typeof p=="string"?p:p(q)},P)),r==null?void 0:r(g.centroid(q),q))}))}const z={top:0,right:0,bottom:0,left:0},Ve=4,Ne=30,V=15,_e=(e,t,s,u)=>{const[n,a]=t,r=s/2+Ve,i=r+Ne;let o,c,l,d,m;return e<=Math.PI/2||u?(o=n+Math.sin(e)*r,c=a-Math.cos(e)*r,l=n+Math.sin(e)*i,d=a-Math.cos(e)*i,m=l+V):e>Math.PI/2&&e<=Math.PI?(o=n+Math.cos(e-Math.PI/2)*r,c=a+Math.sin(e-Math.PI/2)*r,l=n+Math.cos(e-Math.PI/2)*i,d=a+Math.sin(e-Math.PI/2)*i,m=l+V):e>Math.PI&&e<Math.PI*1.5?(o=n-Math.sin(e-Math.PI)*r,c=a+Math.cos(e-Math.PI)*r,l=n-Math.sin(e-Math.PI)*i,d=a+Math.cos(e-Math.PI)*i,m=l-V):(o=n-Math.cos(e-Math.PI*1.5)*r,c=a-Math.sin(e-Math.PI*1.5)*r,l=n-Math.cos(e-Math.PI*1.5)*i,d=a-Math.sin(e-Math.PI*1.5)*i,m=l-V),{x1:o,y1:c,x2:l,y2:d,x3:m}},B="--body-size-large",de={fontSize:`var(${B})`,fontWeight:"var(--body-weight-x-strong-number)",fontFamily:`var(${W})`,fill:"var(--fc-font-color-default)"},H={fontSize:`var(${B})`,fontWeight:"var(--body-weight-number)",fontFamily:`var(${W})`,fill:"var(--fc-font-color-default)"},me={...H,fill:"var(--fc-font-color-x-weak)"},L=5,$e=(e,t,s,u,n,a)=>{const[r,i]=u;let o=0,c=0,l=0,d=0;return e<Math.PI/2?(c=r+s+L-t,o=Math.abs(i)-t+n):e===Math.PI/2?c=Math.abs(r)+s+L-t:e>Math.PI/2&&e<Math.PI?(d=i-t+a,c=r+s+L-t):e===Math.PI?d=i-t+a:e>Math.PI&&e<Math.PI*1.5?(d=Math.abs(i)-t+a,l=Math.abs(r)-t+L):(e===Math.PI*1.5||(o=Math.abs(i)-t+n),l=Math.abs(r)-t+L),{paddingTop:o,paddingRight:c,paddingLeft:l,paddingBottom:d}},Fe=(e,t,s,u)=>{const[n,a]=s;let r;return e<=Math.PI||u?r=n+L:r=n-t-L,{textAnchorX:r,textAnchorY:a}},We=(e,t,s)=>{const u=getComputedStyle(document.body).getPropertyValue("font-size"),n=getComputedStyle(document.documentElement).getPropertyValue(B)??"0",a=parseFloat(n)*parseFloat(u);return{textTopOffset:a,textBottomOffset:e&&(t||s)?a:0}},Y=e=>Q[e%Q.length],Ge=e=>ee[e%ee.length],ze=(e,t,s)=>{const[u,n]=v.useState("label"),[a,r]=v.useState(e),i=a/2,o=u==="label"?s:z,c=[o.left+i,o.top+i],l=a+o.left+o.right,d=a+o.top+o.bottom;return v.useEffect(()=>{const m=()=>{const b=e+s.left+s.right;t.current&&(t.current.clientWidth<b?(n("legend"),r(Math.min(t.current.clientWidth,e))):(r(e),n("label")))};return m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}},[e,s,t]),{radius:i,center:c,width:l,height:d,labelStyle:u}},Be="var(--fc-base-color)",He="2px",pe=({arcDatum:e,path:t,colorScale:s,onMouseEnter:u,onMouseLeave:n})=>{const a=s==="continuous",r=a?Y(e.index):G(e.index),i=a?Ge(e.index):qe(e.index),[o,c]=v.useState(r),l=()=>{c(i),u()},d=()=>{c(r),n()};return h.jsx("path",{d:t(e)||"",fill:o,stroke:Be,strokeWidth:He,onMouseEnter:l,onMouseLeave:d,tabIndex:0,"aria-label":`${e.data.label} ${e.data.value}`})};pe.__docgenInfo={description:"",methods:[],displayName:"ArcPath",props:{arcDatum:{required:!0,tsType:{name:"PieArcDatum",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    label: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"PieArcDatum<PieChartDatum>"},description:""},path:{required:!0,tsType:{name:"Arc",elements:[{name:"void"},{name:"PieArcDatum",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    label: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"PieArcDatum<PieChartDatum>"}],raw:"Arc<void, PieArcDatum<PieChartDatum>>"},description:""},colorScale:{required:!0,tsType:{name:"union",raw:"'discrete' | 'continuous'",elements:[{name:"literal",value:"'discrete'"},{name:"literal",value:"'continuous'"}]},description:""},onMouseEnter:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMouseLeave:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ye=(e,t,s)=>{const[u,n]=v.useState({labelWidth:0,valueWidth:0,percentageWidth:0}),a=Ce([{family:getComputedStyle(document.documentElement).getPropertyValue(W).trim(),weight:Ae}]);return v.useEffect(()=>{if(a){const r=$(e,de).width??0,i=$(t,H).width??0,o=$(s,me).width??0;n({labelWidth:r,valueWidth:i,percentageWidth:o})}},[e,t,s,a]),u},he=({centroid:e,centroidAngle:t,prevCentroidAngle:s,arcDatum:u,radius:n,showLabelTitle:a,showLabelValue:r,showLabelPercentage:i,setPadding:o,labelsShownOnHover:c,hideLabel:l,colorScale:d,valueFormatter:m})=>{const{data:b,startAngle:T,endAngle:S,index:f}=u,y=a||r||i,x=((S-T)/(Math.PI*2)*100).toFixed(1),w=(m==null?void 0:m(b.value))??b.value,p=a?b.label:"",P=`${r?w:""}`,g=i?`${r?" ":""}(${x}%)`:"",{labelWidth:M,valueWidth:E,percentageWidth:q}=Ye(p,P,g),A=Math.max(M,E+q),Z=!c&&t-s<Math.PI*.15,{x1:ge,y1:ve,x2:ye,y2:U,x3:N}=_e(t,e,n,Z),{textAnchorX:I,textAnchorY:_}=Fe(t,A,[N,U],Z),{textTopOffset:J,textBottomOffset:k}=We(a,r,i),Te=I<N?A-M:0;v.useEffect(()=>{if(y){const{paddingTop:we,paddingRight:Pe,paddingBottom:Le,paddingLeft:Se}=$e(t,n,A,[I,_],J,k*1.5);o(O=>({top:Math.max(O.top,we),right:Math.max(O.right,Pe),bottom:Math.max(O.bottom,Le),left:Math.max(O.left,Se)}))}else o(z)},[t,A,n,I,_,J,k,y,o]);const xe=d==="continuous"?Y:G;return y&&!l?h.jsxs("g",{children:[h.jsx("path",{d:`M ${ge} ${ve} L ${ye} ${U} H ${N}`,stroke:xe(f),strokeWidth:"2px",fill:"none"}),h.jsxs("text",{x:I,y:_,...je,children:[a&&h.jsx("tspan",{dx:Te,...de,children:p}),h.jsx("tspan",{x:I,dy:k*1.25,...H,children:P}),h.jsx("tspan",{x:I+E,dy:r?0:k*1.25,...me,children:g})]})]}):null};he.__docgenInfo={description:"",methods:[],displayName:"Label",props:{centroid:{required:!0,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:""},centroidAngle:{required:!0,tsType:{name:"number"},description:""},prevCentroidAngle:{required:!0,tsType:{name:"number"},description:""},arcDatum:{required:!0,tsType:{name:"PieArcDatum",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    label: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"PieArcDatum<PieChartDatum>"},description:""},radius:{required:!0,tsType:{name:"number"},description:""},showLabelTitle:{required:!0,tsType:{name:"boolean"},description:""},showLabelValue:{required:!0,tsType:{name:"boolean"},description:""},showLabelPercentage:{required:!0,tsType:{name:"boolean"},description:""},setPadding:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"signature",type:"object",raw:`{
    top: number;
    right: number;
    bottom: number;
    left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}}],raw:"SetStateAction<Padding>"}],raw:"Dispatch<SetStateAction<Padding>>"},description:""},labelsShownOnHover:{required:!0,tsType:{name:"boolean"},description:""},hideLabel:{required:!0,tsType:{name:"boolean"},description:""},colorScale:{required:!0,tsType:{name:"union",raw:"'discrete' | 'continuous'",elements:[{name:"literal",value:"'discrete'"},{name:"literal",value:"'continuous'"}]},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""}}};const Xe=(e,t)=>({...e,startAngle:e.startAngle===e.endAngle?e.index*(2*Math.PI/t):e.startAngle,endAngle:e.startAngle===e.endAngle?(e.index+1)*(2*Math.PI/t):e.endAngle}),be=({arc:e,previousArc:t,numberOfArcs:s,radius:u,isLabelHidden:n,showLabelValue:a,showLabelPercentage:r,showLabelTitle:i,path:o,setPaddingForLabels:c,colorScale:l,valueFormatter:d})=>{const m=s>3,[b,T]=v.useState(!1),S=n||m&&!b,f=Xe(e,s),y=(f.startAngle+f.endAngle)/2,x=t?(t.startAngle+t.endAngle)/2:0,w=o.centroid(f);return h.jsxs(v.Fragment,{children:[h.jsx(pe,{arcDatum:f,path:o,colorScale:l,onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1)}),h.jsx(he,{centroid:w,centroidAngle:y,prevCentroidAngle:x,arcDatum:f,radius:u,showLabelTitle:i,showLabelValue:a,showLabelPercentage:r,setPadding:c,valueFormatter:d,labelsShownOnHover:m,hideLabel:S,colorScale:l})]},`fondue-charts-pie-arc-${e.index}`)};be.__docgenInfo={description:"",methods:[],displayName:"Arc",props:{arc:{required:!0,tsType:{name:"PieArcDatum",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    label: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"PieArcDatum<PieChartDatum>"},description:""},previousArc:{required:!1,tsType:{name:"PieArcDatum",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    label: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"PieArcDatum<PieChartDatum>"},description:""},path:{required:!0,tsType:{name:"ArcType",elements:[{name:"void"},{name:"PieArcDatum",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    label: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"PieArcDatum<PieChartDatum>"}],raw:"ArcType<void, PieArcDatum<PieChartDatum>>"},description:""},numberOfArcs:{required:!0,tsType:{name:"number"},description:""},radius:{required:!0,tsType:{name:"number"},description:""},isLabelHidden:{required:!0,tsType:{name:"boolean"},description:""},showLabelTitle:{required:!0,tsType:{name:"boolean"},description:""},showLabelValue:{required:!0,tsType:{name:"boolean"},description:""},showLabelPercentage:{required:!0,tsType:{name:"boolean"},description:""},setPaddingForLabels:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"signature",type:"object",raw:`{
    top: number;
    right: number;
    bottom: number;
    left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}}],raw:"SetStateAction<Padding>"}],raw:"Dispatch<SetStateAction<Padding>>"},description:""},colorScale:{required:!0,tsType:{name:"union",raw:"'discrete' | 'continuous'",elements:[{name:"literal",value:"'discrete'"},{name:"literal",value:"'continuous'"}]},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""}}};const X=({size:e,data:t,valueFormatter:s,showLabelTitle:u=!1,showLabelValue:n=!1,showLabelPercentage:a=!1,shouldSortData:r=!1,colorScale:i="discrete"})=>{const[o,c]=v.useState(z),l=v.useRef(null),{radius:d,labelStyle:m,center:b,width:T,height:S}=ze(e,l,o),f=t.filter(p=>p.value>0),y=f.length>0?f:t,x=r?y.sort((p,P)=>P.value-p.value):y,w=i==="continuous"?Y:G;return h.jsxs("div",{ref:l,className:"tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-gap-8 md:tw-gap-6",children:[h.jsx("svg",{width:T,height:S,children:h.jsx(ce,{top:b[1],left:b[0],children:h.jsx(Oe,{data:x,pieValue:p=>p.value,outerRadius:d,pieSort:null,pieSortValues:null,children:({arcs:p,path:P})=>h.jsx("g",{children:p.map((g,M)=>h.jsx(be,{arc:g,previousArc:p[M-1],numberOfArcs:p.length,radius:d,isLabelHidden:m==="legend",showLabelValue:n,showLabelPercentage:a,showLabelTitle:u,path:P,setPaddingForLabels:c,colorScale:i,valueFormatter:s},`${g.startAngle}-${g.index}-${g.value}-${g.data.label}`))})})})}),m==="legend"&&h.jsx(Ie,{names:t.map(p=>p.label),style:"circle",colorAccessor:w})]})};X.__docgenInfo={description:"",methods:[],displayName:"PieChart",props:{size:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    value: number;
    label: string;
}`,signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"PieChartDatum[]"},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""},showLabelTitle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLabelValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLabelPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},shouldSortData:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},colorScale:{required:!1,tsType:{name:"union",raw:"'discrete' | 'continuous'",elements:[{name:"literal",value:"'discrete'"},{name:"literal",value:"'continuous'"}]},description:"",defaultValue:{value:"'discrete'",computed:!1}}}};const st={title:"Charts/Pie Chart",component:X,parameters:{status:{type:"released"}},argTypes:{data:{name:"data",type:{name:"other",value:"PieChartDatum[]",required:!0},description:"An array of data points to be displayed in the chart."},size:{name:"size",type:{name:"number",required:!0},description:"The diameter of the pie in pixels."},valueFormatter:{name:"valueFormatter",type:{name:"other",value:"(value: number) => string",required:!1},description:"An optional function to format the displayed values (for example for adding units).",table:{type:{summary:"ValueFormatter"},defaultValue:{summary:"value => String(value)"}}},showLabelTitle:{name:"showLabelTitle",type:{name:"boolean",value:!1,required:!1},description:"Shows the slice's title in label if set to true."},showLabelValue:{name:"showLabelValue",type:{name:"boolean",value:!1,required:!1},description:"Shows the slice's value in label if set to true."},showLabelPercentage:{name:"showLabelPercentage",type:{name:"boolean",value:!1,required:!1},description:"Shows the slice's percentage in label if set to true."},shouldSortData:{name:"shouldSortData",type:{name:"boolean",value:!1,required:!1},description:"Sorts the data by value if set to true."},colorScale:{name:"colorScale",description:"The color scale to be used for the chart.",control:{type:"select"},options:["discrete","continuous"],type:{name:"other",value:"discrete | continuous",required:!1},table:{type:{summary:"discrete | continuous"},defaultValue:{summary:"discrete"}}}}},Ke=[{label:"Google Chrome",value:88},{label:"Firefox",value:12},{label:"Safari",value:3}],fe=[{label:"Japan",value:5},{label:"Switzerland",value:3},{label:"China",value:1},{label:"Germany",value:35},{label:"France",value:15},{label:"Italy",value:15},{label:"Spain",value:10},{label:"UK",value:5},{label:"Sweden",value:23},{label:"Norway",value:5},{label:"Denmark",value:12},{label:"Finland",value:19},{label:"Austria",value:8}],K=e=>h.jsx(X,{...e}),C=K.bind({});C.args={data:Ke,size:400,valueFormatter:e=>`${e} users`,showLabelTitle:!0,showLabelValue:!0,showLabelPercentage:!0};const j=K.bind({});j.args={data:fe.slice(0,10),size:400,valueFormatter:e=>`${e} users`,showLabelTitle:!0,showLabelValue:!0,showLabelPercentage:!0,colorScale:"continuous"};const R=K.bind({});R.args={data:fe,size:400,valueFormatter:e=>`${e} users`,showLabelTitle:!0,showLabelValue:!0,showLabelPercentage:!0,colorScale:"continuous"};var te,ae,re;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:"args => <PieChart {...args} />",...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,se,ie;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <PieChart {...args} />",...(ie=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,ue,le;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <PieChart {...args} />",...(le=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};const it=["ThreeDataPoints","TenDataPoints","MoreThanTenDataPoints"];export{R as MoreThanTenDataPoints,j as TenDataPoints,C as ThreeDataPoints,it as __namedExportsOrder,st as default};
