import{j as i}from"./jsx-runtime-Cs3xynsW.js";import{C as Oa,I as Ba}from"./IconRocket-CZUkDL5i.js";import{_ as Ka,W as Ra,a as fe,b as Ua,d as Ha,L as be,e as Ya}from"./Legend-BB8plRNr.js";import{w as Xa,D as Da,g as Se,i as we,u as za,X as Za,L as Ja,x as P,y as b,M as re,a as Qa,b as er,c as ar,d as rr,e as tr,T as nr}from"./useMargin-mcJOkiv7.js";import{c as sr}from"./createTheme-DCsEVv8u.js";import{B as ir,d as Aa,_ as or,a as ur,A as oe,c as lr,g as mr,b as cr,M as dr,e as pr}from"./getAreaFillColors-D9eDKkd3.js";import{G as hr}from"./Grid-C0HbeUFb.js";import{r as v,e as h}from"./index-C3UhPIpD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Group-Dg6-OZ10.js";import"./consts-BJsd9Pp1.js";import"./TooltipContent-H0clLoA2.js";import"./index-I7YMOKkn.js";import"./pie-DtVSWFrF.js";var gr=["renderGlyph"];function te(){return te=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},te.apply(this,arguments)}function yr(e,s){if(e==null)return{};var r={},a=Object.keys(e),t,n;for(n=0;n<a.length;n++)t=a[n],!(s.indexOf(t)>=0)&&(r[t]=e[t]);return r}function vr(e){var s=e.renderGlyph,r=s===void 0?Aa:s,a=yr(e,gr),t=v.useCallback(function(n){var o=n.glyphs,c=n.onPointerMove,g=n.onPointerOut,L=n.onPointerUp,y=n.onFocus,w=n.onBlur;return o.map(function(C){return h.createElement(h.Fragment,{key:C.key},r(te({},C,{onPointerMove:c,onPointerOut:g,onPointerUp:L,onFocus:y,onBlur:w})))})},[r]);return h.createElement(ir,te({},a,{renderGlyphs:t}))}var fr=["colorAccessor","curve","data","dataKey","onBlur","onFocus","onPointerMove","onPointerOut","onPointerUp","onPointerDown","enableEvents","xAccessor","xScale","yAccessor","yScale","PathComponent"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Z.apply(this,arguments)}function br(e,s){if(e==null)return{};var r={},a=Object.keys(e),t,n;for(n=0;n<a.length;n++)t=a[n],!(s.indexOf(t)>=0)&&(r[t]=e[t]);return r}function ja(e){var s,r,a,t=e.colorAccessor,n=e.curve,o=e.data,c=e.dataKey,g=e.onBlur,L=e.onFocus,y=e.onPointerMove,w=e.onPointerOut,C=e.onPointerUp,x=e.onPointerDown,q=e.enableEvents,Q=q===void 0?!0:q,f=e.xAccessor,p=e.xScale,T=e.yAccessor,D=e.yScale,de=e.PathComponent,Wa=de===void 0?"path":de,pe=br(e,fr),he=v.useContext(Da),ge=he.colorScale,ye=he.theme,Fa=v.useMemo(function(){return Se(p,f)},[p,f]),Ia=v.useMemo(function(){return Se(D,T)},[D,T]),Ga=v.useCallback(function(k){return we(p(f(k)))&&we(D(T(k)))},[p,f,D,T]),_a=(s=(r=ge==null?void 0:ge(c))!=null?r:ye==null||(a=ye.colors)==null?void 0:a[0])!=null?s:"#222",ve=Ja+"-"+c,A=za({dataKey:c,enableEvents:Q,onBlur:g,onFocus:L,onPointerMove:y,onPointerOut:w,onPointerUp:C,onPointerDown:x,source:ve,allowedSources:[Za,ve]}),ie=!!(L||g),$a=v.useCallback(function(k){var ee=k.glyphs;return ie?ee.map(function(ae){return h.createElement(h.Fragment,{key:ae.key},Aa(Z({},ae,{color:"transparent",onFocus:A.onFocus,onBlur:A.onBlur})))}):null},[ie,A.onFocus,A.onBlur]);return h.createElement(h.Fragment,null,h.createElement(or,Z({x:Fa,y:Ia,defined:Ga,curve:n},pe),function(k){var ee,ae=k.path;return h.createElement(Wa,Z({stroke:(ee=t==null?void 0:t(c))!=null?ee:_a,strokeWidth:2,fill:"transparent",strokeLinecap:"round"},pe,{d:ae(o)||""},A))}),ie&&h.createElement(ur,{dataKey:c,data:o,xAccessor:f,yAccessor:T,xScale:p,yScale:D,renderGlyphs:$a}))}ja.propTypes={colorAccessor:Ka.func};const Sr=Xa(ja);function ue(e){return h.createElement(Sr,e)}const me="positive",ce="negative",Va=({highlightNegativeValues:e})=>{const s=v.useContext(Da),{xScale:r,yScale:a}=s,t=[Number((r==null?void 0:r.range()[0])??0),Number((r==null?void 0:r.range()[1])??0)],n=[Number((a==null?void 0:a.range()[0])??0),Number((a==null?void 0:a.range()[1])??0)],o=Number((a==null?void 0:a(0))??0),c=t[1]-t[0],g=n[0]-n[1];return i.jsxs("defs",{children:[i.jsx("clipPath",{id:me,children:i.jsx("rect",{x:t[0],y:n[1],width:c,height:e?o-n[1]:g})}),i.jsx("clipPath",{id:ce,children:i.jsx("rect",{x:t[0],y:o,width:c,height:e?n[0]-o:0})})]})};Va.__docgenInfo={description:"",methods:[],displayName:"SeriesClipPath",props:{highlightNegativeValues:{required:!0,tsType:{name:"boolean"},description:""}}};const Ma=({series:e,backfilledSeries:s,hideArea:r})=>{const a=r?0:1;return i.jsxs(i.Fragment,{children:[e.map(t=>i.jsxs(v.Fragment,{children:[i.jsx(oe,{dataKey:t.name,data:t.dataPoints,xAccessor:P,yAccessor:b,renderLine:!1,clipPath:`url(#${me})`,fillOpacity:a},`${t.name}-area-positive`),i.jsx(oe,{dataKey:t.name,data:t.dataPoints,xAccessor:P,yAccessor:b,renderLine:!1,clipPath:`url(#${ce})`,fillOpacity:a,fill:Ra},`${t.name}-area-negative`)]},`${t.name}-area`)),s.map((t,n)=>i.jsx(oe,{dataKey:`${t.name}${re}-${n}`,data:t.dataPoints,xAccessor:P,yAccessor:b,renderLine:!1,fillOpacity:a},`${t.name}${re}-${n}-area`))]})};Ma.__docgenInfo={description:"",methods:[],displayName:"Area",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"valueContext",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""},backfilledSeries:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"valueContext",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""},hideArea:{required:!0,tsType:{name:"boolean"},description:""}}};const le=1.5,wr=({color:e,x:s,y:r},a)=>a?null:i.jsx("circle",{className:"visx-circle-glyph",fill:"var(--fc-base-color)",stroke:e,strokeWidth:"1.5",r:3,cx:s,cy:r}),Ea=({series:e,backfilledSeries:s,hideGlyphs:r,highlightNegativeValues:a})=>i.jsxs(i.Fragment,{children:[e.map((t,n)=>i.jsxs(v.Fragment,{children:[i.jsx(ue,{dataKey:t.name,data:t.dataPoints,xAccessor:P,yAccessor:b,stroke:fe(n),strokeWidth:le,clipPath:`url(#${me})`}),i.jsx(ue,{dataKey:t.name,data:t.dataPoints,xAccessor:P,yAccessor:b,stroke:Ua,strokeWidth:le,clipPath:`url(#${ce})`}),i.jsx(vr,{dataKey:t.name,data:t.dataPoints,xAccessor:P,yAccessor:b,colorAccessor:o=>Qa(b(o),a,fe(n)),renderGlyph:o=>wr(o,r)})]},`${t.name}-line`)),s.map((t,n)=>i.jsx(ue,{dataKey:`${t.name}${re}-${n}`,data:t.dataPoints,xAccessor:P,yAccessor:b,stroke:Ha,opacity:.3,strokeDasharray:"4 4",strokeWidth:le},`${t.name}${re}-${n}-line`))]});Ea.__docgenInfo={description:"",methods:[],displayName:"Line",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"valueContext",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""},backfilledSeries:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"valueContext",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""},hideGlyphs:{required:!0,tsType:{name:"boolean"},description:""},highlightNegativeValues:{required:!0,tsType:{name:"boolean"},description:""}}};const Na=({series:e,backfilledSeries:s,hideGlyphs:r,hideArea:a,highlightNegativeValues:t})=>i.jsxs(i.Fragment,{children:[i.jsx(Va,{highlightNegativeValues:t}),i.jsx(Ma,{series:e,backfilledSeries:s,hideArea:a}),i.jsx(Ea,{series:e,backfilledSeries:s,hideGlyphs:r,highlightNegativeValues:t})]});Na.__docgenInfo={description:"",methods:[],displayName:"Series",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"valueContext",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""},backfilledSeries:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"valueContext",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""},hideGlyphs:{required:!0,tsType:{name:"boolean"},description:""},hideArea:{required:!0,tsType:{name:"boolean"},description:""},highlightNegativeValues:{required:!0,tsType:{name:"boolean"},description:""}}};const Ce=5,ne=({width:e,height:s,series:r,missingValueLabel:a,locale:t,hideGlyphs:n=!1,hideArea:o=!1,hideLegend:c=!1,legendPosition:g="top",highlightNegativeValues:L=!1,markLine:y,valueFormatter:w})=>{const C=lr(r),x=sr(mr(r.length,C.length)),q=er(r,(y==null?void 0:y.value)??0),Q=ar(q,Ce),f=rr({ticks:Q,tickLabelStyle:x.axisStyles.y.left.tickLabel,valueFormatter:w,tickLength:x.axisStyles.y.left.tickLength});return i.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-6",children:[!c&&g==="top"&&i.jsx(be,{names:r.map(p=>p.name),style:"line"}),f&&i.jsxs(tr,{theme:x,xScale:{type:"time"},yScale:{type:"linear",domain:q},height:s,width:e,margin:f,children:[i.jsx(hr,{rows:!0,columns:!1,numTicks:Ce,stroke:"var(--fc-grid-stroke-color)"},"grid"),i.jsx(cr,{linearScaleTicks:Q,valueFormatter:w,locale:t,series:r}),i.jsx(Na,{series:r,backfilledSeries:C,hideGlyphs:n,hideArea:o,highlightNegativeValues:L}),y&&i.jsx(dr,{...y}),i.jsx(nr,{crossHairStyle:"line",hideGlyphs:!1,colorAccessor:p=>Ya(p,r),missingValueLabel:a,valueFormatter:w,locale:t})]}),!c&&g==="bottom"&&i.jsx(be,{names:r.map(p=>p.name),style:"line"})]})};ne.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
    valueContext?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"valueContext",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""},height:{required:!0,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"number"},description:""},missingValueLabel:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},hideGlyphs:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideArea:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},highlightNegativeValues:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},markLine:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    name: string;
    value: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""}}};const Fr={title:"Charts/Line Chart",component:ne,parameters:{status:{type:"released"}},argTypes:{series:{name:"series",type:{name:"other",value:"LineChartSeries[]",required:!0},description:"An array of up to three series to be displayed in the chart."},height:{name:"height",type:{name:"number",required:!0},description:"The height of the chart in pixels."},width:{name:"width",type:{name:"number",required:!1},description:"The width of the chart in pixels. If not provided, the chart will adjust its width to the container"},missingValueLabel:{name:"missingValueLabel",type:{name:"string",required:!1},description:'The label to be displayed for missing values. E.g. "No data".',defaultValue:"-",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},locale:{name:"locale",type:{name:"string",required:!1},description:"The locale to be used for formatting the date axis labels.",table:{type:{summary:"string"},defaultValue:{summary:"Browser locale"}}},hideGlyphs:{name:"hideGlyphs",type:{name:"boolean",required:!1},description:"Whether to hide the glyphs on the line chart. Useful for small charts with dense data.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hideArea:{name:"hideArea",type:{name:"boolean",required:!1},description:"Hides the area under the lines if set to true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hideLegend:{name:"hideLegend",type:{name:"boolean",required:!1},description:"Hides the legend if set to true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},legendPosition:{name:"legendPosition",type:{name:"other",value:"top | bottom",required:!1},description:"Controls whether the legend is placed above or below the chart.",table:{type:{summary:"top | bottom"},defaultValue:{summary:"top"}}},highlightNegativeValues:{name:"highlightNegativeValues",type:{name:"boolean",required:!1},description:"Renders all negative values in red if set to true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},markLine:{name:"markLine",type:{name:"other",value:"MarkLineProps",required:!1},description:"Creates a horizontal line on the chart, marking a specific value."},valueFormatter:{name:"valueFormatter",type:{name:"other",value:"(value: number) => string",required:!1},description:"An optional function to format the displayed values (for example for adding units)."},areaStack:{name:"areaStack",type:{name:"boolean",required:!1},description:"Toggle to control if the chart should be rendered as a stacked area chart.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},m=e=>i.jsx(ne,{...e}),Cr=e=>i.jsxs(i.Fragment,{children:[i.jsx(Oa,{title:"US City Temperature",description:"The temperature of US cities over time",icon:i.jsx(Ba,{})}),i.jsx(ne,{...e})]}),u=e=>`${e.toFixed(2)}°F`,l=(()=>{const e=[],s=[],r=[];for(const a of pr)e.push({value:parseInt(a.Austin,10),timestamp:new Date(a.date)}),s.push({value:parseInt(a["New York"],10),timestamp:new Date(a.date),valueContext:`Difference with Austin is ${Math.round(parseInt(a["New York"],10)-parseInt(a.Austin,10))}ºF`}),r.push({value:parseInt(a["San Francisco"],10),timestamp:new Date(a.date),valueContext:`(Sum with NY is ${parseInt(a["San Francisco"],10)+parseInt(a["New York"],10)}ºF)`});return[{name:"Austin",dataPoints:e},{name:"New York",dataPoints:s},{name:"San Francisco",dataPoints:r}]})(),d=e=>{const s=[];for(const r of e){const a=r.dataPoints.filter((t,n)=>n%7===0);s.push({name:r.name,dataPoints:a})}return s},S=(e,s)=>{const r=[];for(const a of e){const t=a.dataPoints.map((n,o)=>o>10&&o<20||s&&o<5||o>a.dataPoints.length-10||a.name==="New York"&&o>25&&o<30?{value:null,timestamp:n.timestamp}:n);r.push({name:a.name,dataPoints:t})}return r},J=e=>{const s=[],r=a=>(a-32)*.5555555555555556;for(const a of e){const t=a.dataPoints.map(n=>({value:n.value?r(n.value)-10:n.value,timestamp:n.timestamp}));s.push({name:`${a.name} minus 10 degrees`,dataPoints:t})}return s},se=e=>{const s=[...e];return s.push({name:"SF minus 10 degrees",dataPoints:e[2].dataPoints.map(r=>({...r,value:r.value?r.value-10:null}))}),s},j=m.bind({});j.args={series:[l[0]],width:1e3,height:500,hideGlyphs:!0,markLine:{value:32,name:"Freezing"},valueFormatter:u};const V=m.bind({});V.args={series:d([l[0]]),width:1e3,height:500,valueFormatter:u};const M=m.bind({});M.args={series:S([l[1]]),width:1e3,height:500,missingValueLabel:"Missing data",hideGlyphs:!0,valueFormatter:u};const E=m.bind({});E.args={series:S(d([l[1]])),width:1e3,height:500,missingValueLabel:"Missing data",valueFormatter:u};const N=m.bind({});N.args={series:l,width:1e3,height:500,hideGlyphs:!0,valueFormatter:u};const W=m.bind({});W.args={series:d(l),width:1e3,height:500,valueFormatter:u};const F=m.bind({});F.args={series:S(l),width:1e3,height:500,missingValueLabel:"Missing data",hideGlyphs:!0,valueFormatter:u};const I=m.bind({});I.args={series:S(d(l)),width:1e3,height:500,missingValueLabel:"Missing data",valueFormatter:u};const G=m.bind({});G.args={series:S(d(l),!0),width:1e3,height:500,missingValueLabel:"Missing data",valueFormatter:u};const _=m.bind({});_.args={series:se(l),width:1e3,height:500,missingValueLabel:"Missing data",hideGlyphs:!0,valueFormatter:u};const $=m.bind({});$.args={series:d(se(l)),width:1e3,height:500,missingValueLabel:"Missing data",valueFormatter:u};const O=m.bind({});O.args={series:S(d(se(l))),width:1e3,height:500,missingValueLabel:"Missing data",valueFormatter:u};const B=Cr.bind({});B.args={series:S(d(se(l))),width:1e3,height:500,missingValueLabel:"Missing data",valueFormatter:u};const K=m.bind({});K.args={series:d([l[0]]),width:1e3,height:500,hideLegend:!0,valueFormatter:u};const R=m.bind({});R.args={series:J([l[1]]),width:1e3,height:500,hideGlyphs:!0,valueFormatter:u};const U=m.bind({});U.args={series:J(d([l[1]])),width:1e3,height:500,valueFormatter:u};const H=m.bind({});H.args={series:J(l),width:1e3,height:500,hideGlyphs:!0,valueFormatter:u};const Y=m.bind({});Y.args={series:J(d(l)),width:1e3,height:500,valueFormatter:u};const X=m.bind({});X.args={series:S(J(d(l))),width:1e3,height:500,missingValueLabel:"Missing data",valueFormatter:u};const z=m.bind({});z.args={series:d([l[0]]),width:1e3,height:500,legendPosition:"bottom",valueFormatter:u};var Pe,Le,ke;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:"args => <LineChart {...args} />",...(ke=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var xe,qe,Te;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:"args => <LineChart {...args} />",...(Te=(qe=V.parameters)==null?void 0:qe.docs)==null?void 0:Te.source}}};var De,Ae,je;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:"args => <LineChart {...args} />",...(je=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Ve,Me,Ee;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:"args => <LineChart {...args} />",...(Ee=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var Ne,We,Fe;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:"args => <LineChart {...args} />",...(Fe=(We=N.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Ie,Ge,_e;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:"args => <LineChart {...args} />",...(_e=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};var $e,Oe,Be;F.parameters={...F.parameters,docs:{...($e=F.parameters)==null?void 0:$e.docs,source:{originalSource:"args => <LineChart {...args} />",...(Be=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var Ke,Re,Ue;I.parameters={...I.parameters,docs:{...(Ke=I.parameters)==null?void 0:Ke.docs,source:{originalSource:"args => <LineChart {...args} />",...(Ue=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Ue.source}}};var He,Ye,Xe;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:"args => <LineChart {...args} />",...(Xe=(Ye=G.parameters)==null?void 0:Ye.docs)==null?void 0:Xe.source}}};var ze,Ze,Je;_.parameters={..._.parameters,docs:{...(ze=_.parameters)==null?void 0:ze.docs,source:{originalSource:"args => <LineChart {...args} />",...(Je=(Ze=_.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Qe,ea,aa;$.parameters={...$.parameters,docs:{...(Qe=$.parameters)==null?void 0:Qe.docs,source:{originalSource:"args => <LineChart {...args} />",...(aa=(ea=$.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ra,ta,na;O.parameters={...O.parameters,docs:{...(ra=O.parameters)==null?void 0:ra.docs,source:{originalSource:"args => <LineChart {...args} />",...(na=(ta=O.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,ia,oa;B.parameters={...B.parameters,docs:{...(sa=B.parameters)==null?void 0:sa.docs,source:{originalSource:`args => <>
        <ChartHeading title="US City Temperature" description="The temperature of US cities over time" icon={<IconRocket />} />
        <LineChart {...args} />
    </>`,...(oa=(ia=B.parameters)==null?void 0:ia.docs)==null?void 0:oa.source}}};var ua,la,ma;K.parameters={...K.parameters,docs:{...(ua=K.parameters)==null?void 0:ua.docs,source:{originalSource:"args => <LineChart {...args} />",...(ma=(la=K.parameters)==null?void 0:la.docs)==null?void 0:ma.source}}};var ca,da,pa;R.parameters={...R.parameters,docs:{...(ca=R.parameters)==null?void 0:ca.docs,source:{originalSource:"args => <LineChart {...args} />",...(pa=(da=R.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ha,ga,ya;U.parameters={...U.parameters,docs:{...(ha=U.parameters)==null?void 0:ha.docs,source:{originalSource:"args => <LineChart {...args} />",...(ya=(ga=U.parameters)==null?void 0:ga.docs)==null?void 0:ya.source}}};var va,fa,ba;H.parameters={...H.parameters,docs:{...(va=H.parameters)==null?void 0:va.docs,source:{originalSource:"args => <LineChart {...args} />",...(ba=(fa=H.parameters)==null?void 0:fa.docs)==null?void 0:ba.source}}};var Sa,wa,Ca;Y.parameters={...Y.parameters,docs:{...(Sa=Y.parameters)==null?void 0:Sa.docs,source:{originalSource:"args => <LineChart {...args} />",...(Ca=(wa=Y.parameters)==null?void 0:wa.docs)==null?void 0:Ca.source}}};var Pa,La,ka;X.parameters={...X.parameters,docs:{...(Pa=X.parameters)==null?void 0:Pa.docs,source:{originalSource:"args => <LineChart {...args} />",...(ka=(La=X.parameters)==null?void 0:La.docs)==null?void 0:ka.source}}};var xa,qa,Ta;z.parameters={...z.parameters,docs:{...(xa=z.parameters)==null?void 0:xa.docs,source:{originalSource:"args => <LineChart {...args} />",...(Ta=(qa=z.parameters)==null?void 0:qa.docs)==null?void 0:Ta.source}}};const Ir=["SingleDataSet","SingleDataSetShort","SingleWithMissingData","SingleWithMissingDataShort","ThreeDataSets","ThreeDataSetsShort","ThreeWithMissingData","ThreeWithMissingDataShort","ThreeWithMissingDataAtBeginning","TooManySeries","TooManySeriesShort","TooManySeriesWithMissingDataShort","WithHeading","WithoutLegend","WithNegativeValues","WithNegativeValuesShort","ThreeWithNegativeValues","ThreeWithNegativeValuesShort","ThreeWithNegativeValuesWithMissingDataShort","LegendBelowChart"];export{z as LegendBelowChart,j as SingleDataSet,V as SingleDataSetShort,M as SingleWithMissingData,E as SingleWithMissingDataShort,N as ThreeDataSets,W as ThreeDataSetsShort,F as ThreeWithMissingData,G as ThreeWithMissingDataAtBeginning,I as ThreeWithMissingDataShort,H as ThreeWithNegativeValues,Y as ThreeWithNegativeValuesShort,X as ThreeWithNegativeValuesWithMissingDataShort,_ as TooManySeries,$ as TooManySeriesShort,O as TooManySeriesWithMissingDataShort,B as WithHeading,R as WithNegativeValues,U as WithNegativeValuesShort,K as WithoutLegend,Ir as __namedExportsOrder,Fr as default};
