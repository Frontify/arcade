import{r as y,R as x}from"./index-Cs7sjTYM.js";import{g as A}from"./_commonjsHelpers-BosuxZz1.js";import{P as p}from"./index-Dk74W0Oi.js";import{E as G}from"./index-DJFdew98.js";import{c as J}from"./Legend-fP9SAh3e.js";import{j as m}from"./jsx-runtime-BlAj40OV.js";function S(e,t,r){var n,s,o,i,u;t==null&&(t=100);function l(){var d=Date.now()-i;d<t&&d>=0?n=setTimeout(l,t-d):(n=null,r||(u=e.apply(o,s),o=s=null))}var a=function(){o=this,s=arguments,i=Date.now();var d=r&&!n;return n||(n=setTimeout(l,t)),d&&(u=e.apply(o,s),o=s=null),u};return a.clear=function(){n&&(clearTimeout(n),n=null)},a.flush=function(){n&&(u=e.apply(o,s),o=s=null,clearTimeout(n),n=null)},a}S.debounce=S;var Q=S;const D=A(Q);function Z(e){let{debounce:t,scroll:r,polyfill:n,offsetSize:s}=e===void 0?{debounce:0,scroll:!1,offsetSize:!1}:e;const o=n||(typeof window>"u"?class{}:window.ResizeObserver);if(!o)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[i,u]=y.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),l=y.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:i}),a=t?typeof t=="number"?t:t.scroll:null,d=t?typeof t=="number"?t:t.resize:null,g=y.useRef(!1);y.useEffect(()=>(g.current=!0,()=>void(g.current=!1)));const[O,j,f]=y.useMemo(()=>{const c=()=>{if(!l.current.element)return;const{left:R,top:T,width:v,height:h,bottom:B,right:L,x:P,y:$}=l.current.element.getBoundingClientRect(),w={left:R,top:T,width:v,height:h,bottom:B,right:L,x:P,y:$};l.current.element instanceof HTMLElement&&s&&(w.height=l.current.element.offsetHeight,w.width=l.current.element.offsetWidth),Object.freeze(w),g.current&&!re(l.current.lastBounds,w)&&u(l.current.lastBounds=w)};return[c,d?D(c,d):c,a?D(c,a):c]},[u,s,a,d]);function b(){l.current.scrollContainers&&(l.current.scrollContainers.forEach(c=>c.removeEventListener("scroll",f,!0)),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function z(){l.current.element&&(l.current.resizeObserver=new o(f),l.current.resizeObserver.observe(l.current.element),r&&l.current.scrollContainers&&l.current.scrollContainers.forEach(c=>c.addEventListener("scroll",f,{capture:!0,passive:!0})))}const E=c=>{!c||c===l.current.element||(b(),l.current.element=c,l.current.scrollContainers=K(c),z())};return te(f,!!r),ee(j),y.useEffect(()=>{b(),z()},[r,f,j]),y.useEffect(()=>b,[]),[E,i,O]}function ee(e){y.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function te(e,t){y.useEffect(()=>{if(t){const r=e;return window.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",r,!0)}},[e,t])}function K(e){const t=[];if(!e||e===document.body)return t;const{overflow:r,overflowX:n,overflowY:s}=window.getComputedStyle(e);return[r,n,s].some(o=>o==="auto"||o==="scroll")&&t.push(e),[...t,...K(e.parentElement)]}const ne=["x","y","top","bottom","left","right","width","height"],re=(e,t)=>ne.every(r=>e[r]===t[r]);function oe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,q(e,t)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},q(e,t)}var U=function(e){oe(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.componentWillUnmount=function(){this.node&&document.body&&(document.body.removeChild(this.node),delete this.node)},r.render=function(){return!this.node&&typeof document<"u"&&(this.node=document.createElement("div"),this.props.zIndex!=null&&(this.node.style.zIndex=""+this.props.zIndex),document.body.append(this.node)),this.node?G.createPortal(this.props.children,this.node):null},t}(x.PureComponent);U.propTypes={zIndex:p.oneOfType([p.number,p.string])};var se=["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function ie(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var X={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"},C=x.forwardRef(function(e,t){var r=e.className,n=e.top,s=e.left,o=e.offsetLeft,i=o===void 0?10:o,u=e.offsetTop,l=u===void 0?10:u,a=e.style,d=a===void 0?X:a,g=e.children,O=e.unstyled,j=O===void 0?!1:O,f=e.applyPositionStyle,b=f===void 0?!1:f,z=ie(e,se);return x.createElement("div",N({ref:t,className:J("visx-tooltip",r),style:N({top:n==null||l==null?n:n+l,left:s==null||i==null?s:s+i},b&&{position:"absolute"},!j&&d)},z),g)});C.propTypes={children:p.node,className:p.string,left:p.number,offsetLeft:p.number,offsetTop:p.number,top:p.number,applyPositionStyle:p.bool,unstyled:p.bool};C.displayName="Tooltip";function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(this,arguments)}function le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,W(e,t)}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},W(e,t)}var H={top:0,right:0,bottom:0,left:0,width:0,height:0};function ue(e){var t;return t=function(r){ae(n,r);function n(o){var i;return i=r.call(this,o)||this,i.state={rect:void 0,parentRect:void 0},i.nodeRef=x.createRef(),i.getRects=i.getRects.bind(le(i)),i}var s=n.prototype;return s.componentDidMount=function(){var i,u=this;this.node=(i=this.nodeRef)!=null&&i.current?this.nodeRef.current:G.findDOMNode(this),this.setState(function(){return u.getRects()})},s.getRects=function(){if(!this.node)return this.state;var i=this.node,u=i.parentNode,l=i.getBoundingClientRect?i.getBoundingClientRect():H,a=u!=null&&u.getBoundingClientRect?u.getBoundingClientRect():H;return{rect:l,parentRect:a}},s.render=function(){return x.createElement(e,M({nodeRef:this.nodeRef,getRects:this.getRects},this.state,this.props))},n}(x.PureComponent),t.displayName="withBoundingRects("+(e.displayName||"")+")",t}var Y=y.createContext({isFlippedVertically:!1,isFlippedHorizontally:!1}),ce=Y.Provider;Y.Consumer;var de=["children","getRects","left","offsetLeft","offsetTop","parentRect","rect","style","top","unstyled","nodeRef"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function fe(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function V(e){var t=e.children;e.getRects;var r=e.left,n=r===void 0?0:r,s=e.offsetLeft,o=s===void 0?10:s,i=e.offsetTop,u=i===void 0?10:i,l=e.parentRect,a=e.rect,d=e.style,g=d===void 0?X:d,O=e.top,j=O===void 0?0:O,f=e.unstyled,b=f===void 0?!1:f,z=e.nodeRef,E=fe(e,de),c,R=!1,T=!1;if(a&&l){var v=n,h=j;if(l.width){var B=v+o+a.width-l.width,L=a.width-v-o;R=B>0&&B>L}else{var P=v+o+a.width-window.innerWidth,$=a.width-v-o;R=P>0&&P>$}if(l.height){var w=h+u+a.height-l.height,I=a.height-h-u;T=w>0&&w>I}else T=h+u+a.height>window.innerHeight;v=R?v-a.width-o:v+o,h=T?h-a.height-u:h+u,v=Math.round(v),h=Math.round(h),c="translate("+v+"px, "+h+"px)"}return x.createElement(C,_({ref:z,style:_({left:0,top:0,transform:c},!b&&g)},E),x.createElement(ce,{value:{isFlippedVertically:!T,isFlippedHorizontally:!R}},t))}V.propTypes={nodeRef:p.oneOfType([p.string,p.func,p.object])};const pe=ue(V);var ve=["detectBounds","zIndex"],he=["left","top","detectBounds","zIndex"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function F(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function je(e){var t=e===void 0?{}:e,r=t.detectBounds,n=r===void 0?!0:r,s=t.zIndex,o=F(t,ve),i=Z(o),u=i[0],l=i[1],a=i[2],d=y.useState(!1),g=d[0],O=d[1];y.useEffect(function(){O(!1)},[]);var j=y.useMemo(function(){return function(f){var b=f.left,z=b===void 0?0:b,E=f.top,c=E===void 0?0:E,R=f.detectBounds,T=f.zIndex,v=F(f,he),h=R??n,B=T??s,L=h?pe:C,P=g?0:window.scrollX,$=g?0:window.scrollY,w=z+(l.left||0)+P,I=c+(l.top||0)+$;return x.createElement(U,{zIndex:B},x.createElement(L,k({left:w,top:I},v)))}},[n,s,l.left,l.top,g]);return{containerRef:u,containerBounds:l,forceRefreshBounds:a,TooltipInPortal:j}}const me=({title:e,description:t,imageUrl:r,entries:n})=>{const s=(t==null?void 0:t.split(`
`))??[],o=n[1];return m.jsxs("div",{className:"tw-bg-[var(--text-color)] tw-p-3 tw-rounded tw-border tw-border-button-border tw-max-w-[260px] tw-break-all",children:[r&&m.jsx("div",{className:"tw--m-1",children:m.jsx("img",{src:r,alt:t,className:"tw-h-28 tw-object-cover tw-mb-5 tw-w-full"})}),m.jsxs("div",{className:e?"tw-pb-3":"",children:[m.jsx("div",{className:"tw-text-body-small tw-text-base tw-font-bold",children:e}),(o==null?void 0:o.type)&&m.jsxs("div",{className:"tw-text-body-small tw-text-base tw-pb-2",children:[o.type,": ",o.title]}),s.length>0&&m.jsx("div",{className:"tw-text-base tw-text-xs",children:s.map(i=>m.jsx("div",{className:"tw-truncate",children:i},i))})]}),n.map(i=>m.jsx(ye,{title:i.title,color:i.color,value:i.value,type:i==null?void 0:i.typeByGrouping,valueContext:i==null?void 0:i.valueContext},i.title))]})},ye=({title:e,value:t,color:r,type:n,valueContext:s})=>m.jsxs("div",{className:"tw-text-body-small tw-text-base",children:[r&&m.jsx("span",{className:"tw-inline-block tw-w-2 tw-h-2 tw-rounded-full tw-mr-1",style:{backgroundColor:r}}),m.jsx("span",{children:`${n||e}: `}),m.jsx("span",{className:"tw-text-body-small tw-font-bold",children:`${t} ${s||""}`})]},`${e}-value`);me.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{entries:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    title: string;
    color?: string;
    value: string | number;
    valueContext?: string;
    type?: string;
    typeByGrouping?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"valueContext",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"typeByGrouping",value:{name:"string",required:!1}}]}}],raw:"TooltipEntry[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""}}};export{me as T,je as u};
