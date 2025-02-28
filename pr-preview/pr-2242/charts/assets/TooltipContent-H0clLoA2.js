import{r as y,e as x}from"./index-C3UhPIpD.js";import{g as A}from"./_commonjsHelpers-BosuxZz1.js";import{_ as p,c as J}from"./Legend-BB8plRNr.js";import{M as G}from"./index-I7YMOKkn.js";import{j as v}from"./jsx-runtime-Cs3xynsW.js";function S(e,t,r){var n,s,o,i,a;t==null&&(t=100);function l(){var d=Date.now()-i;d<t&&d>=0?n=setTimeout(l,t-d):(n=null,r||(a=e.apply(o,s),o=s=null))}var u=function(){o=this,s=arguments,i=Date.now();var d=r&&!n;return n||(n=setTimeout(l,t)),d&&(a=e.apply(o,s),o=s=null),a};return u.clear=function(){n&&(clearTimeout(n),n=null)},u.flush=function(){n&&(a=e.apply(o,s),o=s=null,clearTimeout(n),n=null)},u}S.debounce=S;var Q=S;const D=A(Q);function Z(e){let{debounce:t,scroll:r,polyfill:n,offsetSize:s}=e===void 0?{debounce:0,scroll:!1,offsetSize:!1}:e;const o=n||(typeof window>"u"?class{}:window.ResizeObserver);if(!o)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[i,a]=y.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),l=y.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:i}),u=t?typeof t=="number"?t:t.scroll:null,d=t?typeof t=="number"?t:t.resize:null,g=y.useRef(!1);y.useEffect(()=>(g.current=!0,()=>void(g.current=!1)));const[O,j,f]=y.useMemo(()=>{const c=()=>{if(!l.current.element)return;const{left:R,top:T,width:h,height:m,bottom:B,right:P,x:L,y:$}=l.current.element.getBoundingClientRect(),w={left:R,top:T,width:h,height:m,bottom:B,right:P,x:L,y:$};l.current.element instanceof HTMLElement&&s&&(w.height=l.current.element.offsetHeight,w.width=l.current.element.offsetWidth),Object.freeze(w),g.current&&!re(l.current.lastBounds,w)&&a(l.current.lastBounds=w)};return[c,d?D(c,d):c,u?D(c,u):c]},[a,s,u,d]);function b(){l.current.scrollContainers&&(l.current.scrollContainers.forEach(c=>c.removeEventListener("scroll",f,!0)),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function z(){l.current.element&&(l.current.resizeObserver=new o(f),l.current.resizeObserver.observe(l.current.element),r&&l.current.scrollContainers&&l.current.scrollContainers.forEach(c=>c.addEventListener("scroll",f,{capture:!0,passive:!0})))}const E=c=>{!c||c===l.current.element||(b(),l.current.element=c,l.current.scrollContainers=K(c),z())};return te(f,!!r),ee(j),y.useEffect(()=>{b(),z()},[r,f,j]),y.useEffect(()=>b,[]),[E,i,O]}function ee(e){y.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function te(e,t){y.useEffect(()=>{if(t){const r=e;return window.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",r,!0)}},[e,t])}function K(e){const t=[];if(!e||e===document.body)return t;const{overflow:r,overflowX:n,overflowY:s}=window.getComputedStyle(e);return[r,n,s].some(o=>o==="auto"||o==="scroll")&&t.push(e),[...t,...K(e.parentElement)]}const ne=["x","y","top","bottom","left","right","width","height"],re=(e,t)=>ne.every(r=>e[r]===t[r]);function oe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,M(e,t)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},M(e,t)}var U=function(e){oe(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.componentWillUnmount=function(){this.node&&document.body&&(document.body.removeChild(this.node),delete this.node)},r.render=function(){return!this.node&&typeof document<"u"&&(this.node=document.createElement("div"),this.props.zIndex!=null&&(this.node.style.zIndex=""+this.props.zIndex),document.body.append(this.node)),this.node?G.createPortal(this.props.children,this.node):null},t}(x.PureComponent);U.propTypes={zIndex:p.oneOfType([p.number,p.string])};var se=["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function ie(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var X={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"},C=x.forwardRef(function(e,t){var r=e.className,n=e.top,s=e.left,o=e.offsetLeft,i=o===void 0?10:o,a=e.offsetTop,l=a===void 0?10:a,u=e.style,d=u===void 0?X:u,g=e.children,O=e.unstyled,j=O===void 0?!1:O,f=e.applyPositionStyle,b=f===void 0?!1:f,z=ie(e,se);return x.createElement("div",_({ref:t,className:J("visx-tooltip",r),style:_({top:n==null||l==null?n:n+l,left:s==null||i==null?s:s+i},b&&{position:"absolute"},!j&&d)},z),g)});C.propTypes={children:p.node,className:p.string,left:p.number,offsetLeft:p.number,offsetTop:p.number,top:p.number,applyPositionStyle:p.bool,unstyled:p.bool};C.displayName="Tooltip";function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(this,arguments)}function le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,W(e,t)}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},W(e,t)}var H={top:0,right:0,bottom:0,left:0,width:0,height:0};function ae(e){var t;return t=function(r){ue(n,r);function n(o){var i;return i=r.call(this,o)||this,i.state={rect:void 0,parentRect:void 0},i.nodeRef=x.createRef(),i.getRects=i.getRects.bind(le(i)),i}var s=n.prototype;return s.componentDidMount=function(){var i,a=this;this.node=(i=this.nodeRef)!=null&&i.current?this.nodeRef.current:G.findDOMNode(this),this.setState(function(){return a.getRects()})},s.getRects=function(){if(!this.node)return this.state;var i=this.node,a=i.parentNode,l=i.getBoundingClientRect?i.getBoundingClientRect():H,u=a!=null&&a.getBoundingClientRect?a.getBoundingClientRect():H;return{rect:l,parentRect:u}},s.render=function(){return x.createElement(e,q({nodeRef:this.nodeRef,getRects:this.getRects},this.state,this.props))},n}(x.PureComponent),t.displayName="withBoundingRects("+(e.displayName||"")+")",t}var Y=y.createContext({isFlippedVertically:!1,isFlippedHorizontally:!1}),ce=Y.Provider;Y.Consumer;var de=["children","getRects","left","offsetLeft","offsetTop","parentRect","rect","style","top","unstyled","nodeRef"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function fe(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function V(e){var t=e.children;e.getRects;var r=e.left,n=r===void 0?0:r,s=e.offsetLeft,o=s===void 0?10:s,i=e.offsetTop,a=i===void 0?10:i,l=e.parentRect,u=e.rect,d=e.style,g=d===void 0?X:d,O=e.top,j=O===void 0?0:O,f=e.unstyled,b=f===void 0?!1:f,z=e.nodeRef,E=fe(e,de),c,R=!1,T=!1;if(u&&l){var h=n,m=j;if(l.width){var B=h+o+u.width-l.width,P=u.width-h-o;R=B>0&&B>P}else{var L=h+o+u.width-window.innerWidth,$=u.width-h-o;R=L>0&&L>$}if(l.height){var w=m+a+u.height-l.height,I=u.height-m-a;T=w>0&&w>I}else T=m+a+u.height>window.innerHeight;h=R?h-u.width-o:h+o,m=T?m-u.height-a:m+a,h=Math.round(h),m=Math.round(m),c="translate("+h+"px, "+m+"px)"}return x.createElement(C,N({ref:z,style:N({left:0,top:0,transform:c},!b&&g)},E),x.createElement(ce,{value:{isFlippedVertically:!T,isFlippedHorizontally:!R}},t))}V.propTypes={nodeRef:p.oneOfType([p.string,p.func,p.object])};const pe=ae(V);var he=["detectBounds","zIndex"],me=["left","top","detectBounds","zIndex"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function F(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function Te(e){var t=e===void 0?{}:e,r=t.detectBounds,n=r===void 0?!0:r,s=t.zIndex,o=F(t,he),i=Z(o),a=i[0],l=i[1],u=i[2],d=y.useState(!1),g=d[0],O=d[1];y.useEffect(function(){O(!1)},[]);var j=y.useMemo(function(){return function(f){var b=f.left,z=b===void 0?0:b,E=f.top,c=E===void 0?0:E,R=f.detectBounds,T=f.zIndex,h=F(f,me),m=R??n,B=T??s,P=m?pe:C,L=g?0:window.scrollX,$=g?0:window.scrollY,w=z+(l.left||0)+L,I=c+(l.top||0)+$;return x.createElement(U,{zIndex:B},x.createElement(P,k({left:w,top:I},h)))}},[n,s,l.left,l.top,g]);return{containerRef:a,containerBounds:l,forceRefreshBounds:u,TooltipInPortal:j}}const ve=({title:e,description:t,imageUrl:r,entries:n})=>{const s=(t==null?void 0:t.split(`
`))??[],o=n[1];return v.jsxs("div",{className:"tw-bg-[var(--text-color)] tw-p-3 tw-rounded tw-border tw-border-button-border tw-max-w-[260px] tw-break-all",children:[r&&v.jsx("div",{className:"tw--m-1",children:v.jsx("img",{src:r,alt:t,className:"tw-h-28 tw-object-cover tw-mb-5 tw-w-full"})}),v.jsxs("div",{className:e?"tw-pb-3":"",children:[v.jsx("div",{className:"tw-text-body-small tw-text-base tw-font-bold",children:e}),(o==null?void 0:o.type)&&v.jsxs("div",{className:"tw-text-body-small tw-text-base tw-pb-2",children:[o.type,": ",o.title]}),s.length>0&&v.jsx("div",{className:"tw-text-base tw-text-xs",children:s.map(i=>v.jsx("div",{className:"tw-truncate",children:i},i))})]}),n.map(i=>v.jsx(ye,{title:i.title,color:i.color,value:i.value,type:i==null?void 0:i.typeByGrouping,valueContext:i==null?void 0:i.valueContext},i.title))]})},ye=({title:e,value:t,color:r,type:n,valueContext:s})=>v.jsxs("div",{className:"tw-text-body-small tw-text-base",children:[r&&v.jsx("span",{className:"tw-inline-block tw-w-2 tw-h-2 tw-rounded-full tw-mr-1",style:{backgroundColor:r}}),v.jsx("span",{children:`${n||e}: `}),v.jsx("span",{className:"tw-text-body-small tw-font-bold",children:`${t} ${s||""}`})]},`${e}-value`);ve.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{entries:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    title: string;
    color?: string;
    value: string | number;
    valueContext?: string;
    type?: string;
    typeByGrouping?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"valueContext",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!1}},{key:"typeByGrouping",value:{name:"string",required:!1}}]}}],raw:"TooltipEntry[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""}}};export{ve as T,Te as u};
