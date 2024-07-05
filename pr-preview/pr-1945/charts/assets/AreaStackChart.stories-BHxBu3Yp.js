import{j as A}from"./jsx-runtime-Nms4Y4qS.js";import{f as je,h as Le,d as $e,i as Fe,a as _e,A as Be,c as Me,g as Ve,b as Ke,M as Ie,e as Re}from"./getAreaFillColors-D9a2Z-2s.js";import{c as Se,a as Ge,L as ne,e as Ye}from"./Legend-h4Ve_84I.js";import{W as z,D as J,J as We,K as Xe,N as oe,j as $,i as G,Y as Ue,u as ze,X as He,Z as Ze,x as Je,y as Qe,l as et,P as se,_ as tt,c as rt,d as at,e as nt,T as ot}from"./useMargin-CcgACegC.js";import{c as st}from"./createTheme-VsXb9Uo8.js";import{R as b,r as w}from"./index-BwDkhjyp.js";import{P as F}from"./index-Dk74W0Oi.js";import{g as it}from"./getChildrenAndGrandchildrenWithProps-BY2YMfeR.js";import{l as ut}from"./D3ShapeFactories-Ch-vNTVa.js";import{G as ct}from"./Group-DHtWlXy9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./pie-DtVSWFrF.js";import"./memoize-CFjlRRht.js";import"./isSymbol-HUVLY1Pv.js";import"./debounce-DS0kIjVh.js";import"./TooltipContent-DdnBYn9k.js";import"./index-B8XB3FuZ.js";import"./consts-CFYc4ZEs.js";var lt=["children","data","x","y","fill","className","curve","innerRef","defined"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},H.apply(this,arguments)}function dt(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function mt(e){var t=e.children,r=e.data,a=r===void 0?[]:r,o=e.x,n=e.y,i=e.fill,s=i===void 0?"transparent":i,l=e.className,u=e.curve,d=e.innerRef,y=e.defined,S=y===void 0?function(){return!0}:y,f=dt(e,lt),h=ut({x:o,y:n,defined:S,curve:u});return t?b.createElement(b.Fragment,null,t({path:h})):b.createElement("path",H({ref:d,className:Se("visx-linepath",l),d:h(a)||"",fill:s,strokeLinecap:"round"},f))}var R=ft,_=pt;function ft(e){return e==null?void 0:e[0]}function pt(e){return e==null?void 0:e[1]}function Y(e){return function(){return e}}function yt(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ie(e,t){if((i=e.length)>1)for(var r=1,a,o,n=e[t[0]],i,s=n.length;r<i;++r)for(o=n,n=e[t[r]],a=0;a<s;++a)n[a][1]+=n[a][0]=isNaN(o[a][1])?o[a][0]:o[a][1]}function ue(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function ht(e,t){return e[t]}function vt(e){const t=[];return t.key=e,t}function gt(){var e=Y([]),t=ue,r=ie,a=ht;function o(n){var i=Array.from(e.apply(this,arguments),vt),s,l=i.length,u=-1,d;for(const y of n)for(s=0,++u;s<l;++s)(i[s][u]=[0,+a(y,i[s].key,u,n)]).data=y;for(s=0,d=yt(t(i));s<l;++s)i[d[s]].index=s;return r(i,d),i}return o.keys=function(n){return arguments.length?(e=typeof n=="function"?n:Y(Array.from(n)),o):e},o.value=function(n){return arguments.length?(a=typeof n=="function"?n:Y(+n),o):a},o.order=function(n){return arguments.length?(t=n==null?ue:typeof n=="function"?n:Y(Array.from(n)),o):t},o.offset=function(n){return arguments.length?(r=n??ie,o):r},o}var ce=function(t){var r;return t==null||(r=t.data)==null?void 0:r.stack},le=function(t){return(R(t)+_(t))/2};function kt(e,t,r){var a=r?[le,ce]:[ce,le],o=a[0],n=a[1];return e.map(function(i,s){var l={key:i.key,data:i,xAccessor:o,yAccessor:n};return t.length>0&&s===0&&(r?l.xScale=function(u){return u.domain(z(u.domain().concat(t)))}:l.yScale=function(u){return u.domain(z(u.domain().concat(t)))}),l}).filter(function(i){return i})}var W=function(t){return t.stack};function St(e,t){var r={};return e.forEach(function(a){var o=a.props,n=o.dataKey,i=o.data,s=o.xAccessor,l=o.yAccessor;if(!(!s||!l)){var u=t?[l,s]:[s,l],d=u[0],y=u[1];i.forEach(function(S){var f=d(S),h=y(S),g=String(f);r[g]||(r[g]={stack:f,positiveSum:0,negativeSum:0}),r[g][n]=h,r[g][h>=0?"positiveSum":"negativeSum"]+=h})}}),Object.values(r)}function xt(e){var t=e.children,r=e.order,a=e.offset,o=w.useContext(J),n=o.horizontal,i=o.registerData,s=o.unregisterData,l=w.useMemo(function(){return it(t)},[t]),u=w.useMemo(function(){return l.filter(function(f){return f.props.dataKey}).map(function(f){return f.props.dataKey})},[l]),d=w.useMemo(function(){return St(l,n)},[n,l]),y=w.useMemo(function(){var f=a?null:d.some(function(g){return g.negativeSum<0}),h=gt();return h.keys(u),r&&h.order(je(r)),(a||f)&&h.offset(Le(a||"diverging")),h(d)},[d,u,r,a]),S=w.useMemo(function(){return z(y.reduce(function(f,h){return h.forEach(function(g){var C=g[0],x=g[1];f.push(C),f.push(x)}),f},[]))},[y]);return w.useEffect(function(){var f=kt(y,S,n);return i(f),function(){return s(u)}},[u,S,n,y,i,s,l]),{seriesChildren:l,dataKeys:u,stackedData:y}}function bt(e,t,r){var a,o,n,i,s=e.xScale,l=e.yScale,u=e.point,d=(r?We:Xe)(e),y=(d==null?void 0:d.index)==null?null:t[d.index];return d&&y&&u?{index:d.index,datum:y,distanceX:r&&u.x>=((a=s(R(d.datum)))!=null?a:1/0)&&u.x<=((o=s(_(d.datum)))!=null?o:-1/0)?0:d.distanceX,distanceY:r?d.distanceY:u.y<=((n=l(R(d.datum)))!=null?n:-1/0)&&u.y>=((i=l(_(d.datum)))!=null?i:1/0)?0:d.distanceY}:null}var Pt=["data","dataKey","xAccessor","yAccessor","curve","PathComponent","lineProps","renderLine"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},j.apply(this,arguments)}function At(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var de=function(t){return t};function xe(e){var t=e.PathComponent,r=t===void 0?"path":t,a=e.children,o=e.curve,n=e.enableEvents,i=n===void 0?!0:n,s=e.offset,l=e.onBlur,u=e.onFocus,d=e.onPointerMove,y=e.onPointerOut,S=e.onPointerUp,f=e.onPointerDown,h=e.order,g=e.renderLine,C=g===void 0?!0:g,x=w.useContext(J),P=x.colorScale,X=x.dataRegistry,B=x.horizontal,N=x.xScale,T=x.yScale,E=x.theme,L=xt({children:a,order:h,offset:s}),q=L.dataKeys,D=L.seriesChildren,ee=L.stackedData,te=w.useMemo(function(){var c=oe(N)/2,k=oe(T)/2;return B?{y:function(p){var v;return((v=$(T(W(p.data))))!=null?v:0)+k},x0:function(p){var v;return((v=$(N(R(p))))!=null?v:0)+c},x1:function(p){var v;return((v=$(N(_(p))))!=null?v:0)+c},defined:function(p){return G(T(W(p.data)))&&G(N(_(p)))}}:{x:function(p){var v;return((v=$(N(W(p.data))))!=null?v:0)+c},y0:function(p){var v;return((v=$(T(R(p))))!=null?v:0)+k},y1:function(p){var v;return((v=$(T(_(p))))!=null?v:0)+k},defined:function(p){return G(N(W(p.data)))&&G(T(_(p)))}}},[N,T,B]),M=w.useMemo(function(){return ee.map(function(c,k){var m,p,v,ae=D.find(function(qe){return qe.props.dataKey===c.key}),O=(ae==null?void 0:ae.props)||{};O.data,O.dataKey,O.xAccessor,O.yAccessor,O.curve,O.PathComponent;var Ee=O.lineProps;O.renderLine;var De=At(O,Pt),Oe=j({fill:(m=(p=P==null?void 0:P(c.key))!=null?p:E==null||(v=E.colors)==null?void 0:v[0])!=null?m:"#222"},De);return{key:k+"-"+c.key,accessors:te,data:c,areaProps:Oe,lineProps:Ee}})},[ee,te,P,D,E]),Ne=w.useCallback(function(c){var k,m,p=(k=D.find(function(v){return v.props.dataKey===c.dataKey}))==null||(m=k.props)==null?void 0:m.data;return p?bt(c,p,B):null},[D,B]),re=Ue+"-"+q.join("-"),V=ze({dataKey:q,enableEvents:i,findNearestDatum:Ne,onBlur:l,onFocus:u,onPointerMove:d,onPointerOut:y,onPointerUp:S,onPointerDown:f,source:re,allowedSources:[He,re]}),U=!!(u||l),Ce=w.useCallback(function(c){var k=c.glyphs;return U?k.map(function(m){return b.createElement(b.Fragment,{key:m.key},$e(j({},m,{color:"transparent",onFocus:V.onFocus,onBlur:V.onBlur})))}):null},[U,V.onFocus,V.onBlur]);return q.some(function(c){return X.get(c)==null})||!N||!T||!P?null:b.createElement("g",{className:"visx-area-stack"},M.map(function(c){return b.createElement(Fe,j({key:c.key,curve:o},c.accessors),function(k){var m=k.path;return b.createElement(r,j({className:"visx-area",stroke:"transparent",d:m(c.data)||""},c.areaProps,V))})}),C&&M.map(function(c){return b.createElement(mt,j({key:"line-"+c.key,x:c.accessors.x||c.accessors.x1,y:c.accessors.y||c.accessors.y1,defined:c.accessors.defined,curve:o},c.lineProps),function(k){var m=k.path;return b.createElement(r,j({className:"visx-line",fill:"transparent",stroke:c.areaProps.fill,strokeWidth:2,pointerEvents:"none"},c.lineProps,{d:m(c.data)||""}))})}),U&&M.map(function(c,k){var m=M[M.length-k-1];return b.createElement(_e,{key:"glyphs-"+m.key,dataKey:m.key,data:m.data,xAccessor:m.accessors.x||m.accessors.x1,yAccessor:m.accessors.y||m.accessors.y1,xScale:de,yScale:de,renderGlyphs:Ce})}))}xe.propTypes={children:F.oneOfType([F.element,F.arrayOf(F.element)]).isRequired,renderLine:F.bool};function wt(e){return b.createElement(xe,e)}const Tt=e=>{if(!e[0])return 0;let t=0;const r=e[0].dataPoints.length;for(let a=0;a<r;a++){const o=e.reduce((n,i)=>{var s;return n+(((s=i==null?void 0:i.dataPoints[a])==null?void 0:s.value)||0)},0);t=Math.max(t,o)}return t},Nt=(e,t)=>{const r=Tt(e),a=Ze(Math.max(r,t??0)),o=Math.ceil(Math.max(r,t||0)/a)*a;return o===0?[0,1]:[0,o]},Ct=(e,t)=>{const[r,a]=e,o=(a-r)/(t-1);return Array.from({length:t}).map((i,s)=>Math.ceil(s*o))},me=e=>e<1e3?e:e>1e5?Math.ceil(e/(1024*100))*(1024*100):Math.ceil(e/1024)*1024,Et=e=>[me(e[0]),me(e[1])],be=({series:e})=>{const t=[...e].reverse();return A.jsx(wt,{children:t.map((r,a)=>A.jsx(Be,{dataKey:r.name,data:r.dataPoints,xAccessor:Je,yAccessor:Qe,fillOpacity:.2,lineProps:{strokeWidth:2},fill:Ge(t.length-1-a)},r.name))})};be.__docgenInfo={description:"",methods:[],displayName:"AreaStack",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: LineChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}}]}}],raw:"LineChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"LineChartSeries[]"},description:""}}};function Dt(e){return"bandwidth"in e?e.bandwidth():0}var Ot=["top","left","scale","width","stroke","strokeWidth","strokeDasharray","className","children","numTicks","lineStyle","offset","tickValues"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Z.apply(this,arguments)}function qt(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Pe(e){var t=e.top,r=t===void 0?0:t,a=e.left,o=a===void 0?0:a,n=e.scale,i=e.width,s=e.stroke,l=s===void 0?"#eaf0f6":s,u=e.strokeWidth,d=u===void 0?1:u,y=e.strokeDasharray,S=e.className,f=e.children,h=e.numTicks,g=h===void 0?10:h,C=e.lineStyle,x=e.offset,P=e.tickValues,X=qt(e,Ot),B=P??et(n,g),N=(x??0)+Dt(n)/2,T=B.map(function(E,L){var q,D=((q=$(n(E)))!=null?q:0)+N;return{index:L,from:new se({x:0,y:D}),to:new se({x:i,y:D})}});return b.createElement(ct,{className:Se("visx-rows",S),top:r,left:o},f?f({lines:T}):T.map(function(E){var L=E.from,q=E.to,D=E.index;return b.createElement(tt,Z({key:"row-line-"+D,from:L,to:q,stroke:l,strokeWidth:d,strokeDasharray:y,style:C},X))}))}Pe.propTypes={tickValues:F.array,width:F.number.isRequired};const Ae=({tickValues:e})=>{const{yScale:t,innerWidth:r,margin:a}=w.useContext(J);return t?A.jsx(Pe,{left:(a==null?void 0:a.left)||0,width:r||0,scale:t,numTicks:5,tickValues:e}):null};Ae.__docgenInfo={description:"",methods:[],displayName:"GridRows",props:{tickValues:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""}}};const jt=5,Lt="storage",$t="storage",fe="top",Q=({width:e,height:t,series:r,missingValueLabel:a,locale:o,hideLegend:n=!1,legendPosition:i=fe,markLine:s,valueFormatter:l,childSumLabel:u,domain:d=$t})=>{const y=Me(r),S=st(Ve(r.length,y.length)),f=Nt(r,(s==null?void 0:s.value)??0),h=d===Lt?Et(f):f,g=rt(h,jt),C=Ct(h,g.length),x=at({ticks:C,tickLabelStyle:S.axisStyles.y.left.tickLabel,valueFormatter:l,tickLength:S.axisStyles.y.left.tickLength});return A.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-6",children:[!n&&i===fe&&A.jsx(ne,{names:r.map(P=>P.name),style:"line"}),x&&A.jsxs(nt,{theme:S,xScale:{type:"time"},yScale:{type:"linear",domain:h},height:t,width:e,margin:x,children:[A.jsx(Ae,{tickValues:C}),A.jsx(be,{series:r}),A.jsx(Ke,{linearScaleTicks:C,valueFormatter:l,locale:o,series:r}),s&&A.jsx(Ie,{...s}),A.jsx(ot,{crossHairStyle:"line",hideGlyphs:!1,colorAccessor:P=>Ye(P,r),missingValueLabel:a,childSumLabel:u,valueFormatter:l,locale:o,stackingGlyphs:!0})]}),!n&&i==="bottom"&&A.jsx(ne,{names:r.map(P=>P.name),style:"line"})]})};Q.__docgenInfo={description:"",methods:[],displayName:"AreaStackChart",props:{series:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    dataPoints: AreaStackChartDataPoint[];
    name: string;
}`,signature:{properties:[{key:"dataPoints",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    timestamp: Date;
    value: number | null;
    description?: string;
}`,signature:{properties:[{key:"timestamp",value:{name:"Date",required:!0}},{key:"value",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"description",value:{name:"string",required:!1}}]}}],raw:"AreaStackChartDataPoint[]",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"AreaStackChartSeries[]"},description:""},height:{required:!0,tsType:{name:"number"},description:""},width:{required:!1,tsType:{name:"number"},description:""},missingValueLabel:{required:!1,tsType:{name:"string"},description:""},childSumLabel:{required:!1,tsType:{name:"string"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},hideLegend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},markLine:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    name: string;
    value: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}}]}},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""},domain:{required:!1,tsType:{name:"union",raw:"'storage' | 'count'",elements:[{name:"literal",value:"'storage'"},{name:"literal",value:"'count'"}]},description:"",defaultValue:{value:"'storage'",computed:!1}}}};const or={title:"Charts/Area Stack Chart",component:Q,parameters:{status:{type:"released"}},argTypes:{series:{name:"series",type:{name:"other",value:"AreaStackChartSeries[]",required:!0},description:"An array of up to three series to be displayed in the chart."},height:{name:"height",type:{name:"number",required:!0},description:"The height of the chart in pixels."},width:{name:"width",type:{name:"number",required:!1},description:"The width of the chart in pixels. If not provided, the chart will adjust its width to the container"},missingValueLabel:{name:"missingValueLabel",type:{name:"string",required:!1},description:'The label to be displayed for missing values. E.g. "No data".',defaultValue:"-",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},locale:{name:"locale",type:{name:"string",required:!1},description:"The locale to be used for formatting the date axis labels.",table:{type:{summary:"string"},defaultValue:{summary:"Browser locale"}}},hideLegend:{name:"hideLegend",type:{name:"boolean",required:!1},description:"Hides the legend if set to true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},legendPosition:{name:"legendPosition",type:{name:"other",value:"top | bottom",required:!1},description:"Controls whether the legend is placed above or below the chart.",table:{type:{summary:"top | bottom"},defaultValue:{summary:"top"}}},markLine:{name:"markLine",type:{name:"other",value:"MarkLineProps",required:!1},description:"Creates a horizontal line on the chart, marking a specific value."},valueFormatter:{name:"valueFormatter",type:{name:"other",value:"(value: number) => string",required:!1},description:"An optional function to format the displayed values (for example for adding units)."}}},Ft=1024,_t=(e,t=0)=>{const r=parseInt((e==null?void 0:e.toString())||"0",10),a=Math.floor((r.toString().length-1)/3),o=["B","KB","MB","GB","TB","PB","EB"][a];return t===0?`${Math.ceil(parseFloat((r/1024**a).toFixed()))} ${o}`:`${(r/Ft**a).toFixed(t)} ${o}`},Bt=1024*1024,Mt=e=>_t(e*Bt,1),we=e=>A.jsx(Q,{...e}),Vt=e=>`${e.toFixed(2)}°F`,Te=(()=>{const e=[],t=[],r=[];for(const a of Re)e.push({value:parseInt(a.Austin,10),timestamp:new Date(a.date)}),t.push({value:parseInt(a["New York"],10),timestamp:new Date(a.date)}),r.push({value:parseInt(a["San Francisco"],10),timestamp:new Date(a.date)});return[{name:"Austin",dataPoints:e},{name:"New York",dataPoints:t},{name:"San Francisco",dataPoints:r}]})(),K=we.bind({});K.args={series:Te,width:1e3,height:500,valueFormatter:Mt,childSumLabel:"Total",markLine:{name:"Freezing",value:1500},domain:"storage"};const I=we.bind({});I.args={series:Te,width:1e3,height:500,valueFormatter:Vt,childSumLabel:"Total"};var pe,ye,he;K.parameters={...K.parameters,docs:{...(pe=K.parameters)==null?void 0:pe.docs,source:{originalSource:"args => <AreaStackChart {...args} />",...(he=(ye=K.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ve,ge,ke;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:"args => <AreaStackChart {...args} />",...(ke=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};const sr=["AreaStackedChartStorage","AreaStackedChart"];export{I as AreaStackedChart,K as AreaStackedChartStorage,sr as __namedExportsOrder,or as default};
