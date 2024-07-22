import{r as m,R as w}from"./index-Cs7sjTYM.js";import{g as A}from"./_commonjsHelpers-BosuxZz1.js";import{P as p}from"./index-Dk74W0Oi.js";import{b as G}from"./index-BMdlDBjA.js";import{c as J}from"./Legend-fP9SAh3e.js";import{j as T}from"./jsx-runtime-BlAj40OV.js";function C(e,t,r){var n,s,o,l,a;t==null&&(t=100);function i(){var d=Date.now()-l;d<t&&d>=0?n=setTimeout(i,t-d):(n=null,r||(a=e.apply(o,s),o=s=null))}var u=function(){o=this,s=arguments,l=Date.now();var d=r&&!n;return n||(n=setTimeout(i,t)),d&&(a=e.apply(o,s),o=s=null),a};return u.clear=function(){n&&(clearTimeout(n),n=null)},u.flush=function(){n&&(a=e.apply(o,s),o=s=null,clearTimeout(n),n=null)},u}C.debounce=C;var Q=C;const k=A(Q);function Z(e){let{debounce:t,scroll:r,polyfill:n,offsetSize:s}=e===void 0?{debounce:0,scroll:!1,offsetSize:!1}:e;const o=n||(typeof window>"u"?class{}:window.ResizeObserver);if(!o)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[l,a]=m.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),i=m.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:l}),u=t?typeof t=="number"?t:t.scroll:null,d=t?typeof t=="number"?t:t.resize:null,y=m.useRef(!1);m.useEffect(()=>(y.current=!0,()=>void(y.current=!1)));const[x,j,f]=m.useMemo(()=>{const c=()=>{if(!i.current.element)return;const{left:O,top:R,width:v,height:h,bottom:B,right:L,x:P,y:$}=i.current.element.getBoundingClientRect(),b={left:O,top:R,width:v,height:h,bottom:B,right:L,x:P,y:$};i.current.element instanceof HTMLElement&&s&&(b.height=i.current.element.offsetHeight,b.width=i.current.element.offsetWidth),Object.freeze(b),y.current&&!re(i.current.lastBounds,b)&&a(i.current.lastBounds=b)};return[c,d?k(c,d):c,u?k(c,u):c]},[a,s,u,d]);function g(){i.current.scrollContainers&&(i.current.scrollContainers.forEach(c=>c.removeEventListener("scroll",f,!0)),i.current.scrollContainers=null),i.current.resizeObserver&&(i.current.resizeObserver.disconnect(),i.current.resizeObserver=null)}function z(){i.current.element&&(i.current.resizeObserver=new o(f),i.current.resizeObserver.observe(i.current.element),r&&i.current.scrollContainers&&i.current.scrollContainers.forEach(c=>c.addEventListener("scroll",f,{capture:!0,passive:!0})))}const E=c=>{!c||c===i.current.element||(g(),i.current.element=c,i.current.scrollContainers=K(c),z())};return te(f,!!r),ee(j),m.useEffect(()=>{g(),z()},[r,f,j]),m.useEffect(()=>g,[]),[E,l,x]}function ee(e){m.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function te(e,t){m.useEffect(()=>{if(t){const r=e;return window.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",r,!0)}},[e,t])}function K(e){const t=[];if(!e||e===document.body)return t;const{overflow:r,overflowX:n,overflowY:s}=window.getComputedStyle(e);return[r,n,s].some(o=>o==="auto"||o==="scroll")&&t.push(e),[...t,...K(e.parentElement)]}const ne=["x","y","top","bottom","left","right","width","height"],re=(e,t)=>ne.every(r=>e[r]===t[r]);function oe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,M(e,t)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},M(e,t)}var U=function(e){oe(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.componentWillUnmount=function(){this.node&&document.body&&(document.body.removeChild(this.node),delete this.node)},r.render=function(){return!this.node&&typeof document<"u"&&(this.node=document.createElement("div"),this.props.zIndex!=null&&(this.node.style.zIndex=""+this.props.zIndex),document.body.append(this.node)),this.node?G.createPortal(this.props.children,this.node):null},t}(w.PureComponent);U.propTypes={zIndex:p.oneOfType([p.number,p.string])};var se=["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function ie(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}var X={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"},I=w.forwardRef(function(e,t){var r=e.className,n=e.top,s=e.left,o=e.offsetLeft,l=o===void 0?10:o,a=e.offsetTop,i=a===void 0?10:a,u=e.style,d=u===void 0?X:u,y=e.children,x=e.unstyled,j=x===void 0?!1:x,f=e.applyPositionStyle,g=f===void 0?!1:f,z=ie(e,se);return w.createElement("div",_({ref:t,className:J("visx-tooltip",r),style:_({top:n==null||i==null?n:n+i,left:s==null||l==null?s:s+l},g&&{position:"absolute"},!j&&d)},z),y)});I.propTypes={children:p.node,className:p.string,left:p.number,offsetLeft:p.number,offsetTop:p.number,top:p.number,applyPositionStyle:p.bool,unstyled:p.bool};I.displayName="Tooltip";function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W.apply(this,arguments)}function le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,q(e,t)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},q(e,t)}var H={top:0,right:0,bottom:0,left:0,width:0,height:0};function ae(e){var t;return t=function(r){ue(n,r);function n(o){var l;return l=r.call(this,o)||this,l.state={rect:void 0,parentRect:void 0},l.nodeRef=w.createRef(),l.getRects=l.getRects.bind(le(l)),l}var s=n.prototype;return s.componentDidMount=function(){var l,a=this;this.node=(l=this.nodeRef)!=null&&l.current?this.nodeRef.current:G.findDOMNode(this),this.setState(function(){return a.getRects()})},s.getRects=function(){if(!this.node)return this.state;var l=this.node,a=l.parentNode,i=l.getBoundingClientRect?l.getBoundingClientRect():H,u=a!=null&&a.getBoundingClientRect?a.getBoundingClientRect():H;return{rect:i,parentRect:u}},s.render=function(){return w.createElement(e,W({nodeRef:this.nodeRef,getRects:this.getRects},this.state,this.props))},n}(w.PureComponent),t.displayName="withBoundingRects("+(e.displayName||"")+")",t}var Y=m.createContext({isFlippedVertically:!1,isFlippedHorizontally:!1}),ce=Y.Provider;Y.Consumer;var de=["children","getRects","left","offsetLeft","offsetTop","parentRect","rect","style","top","unstyled","nodeRef"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function fe(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function V(e){var t=e.children;e.getRects;var r=e.left,n=r===void 0?0:r,s=e.offsetLeft,o=s===void 0?10:s,l=e.offsetTop,a=l===void 0?10:l,i=e.parentRect,u=e.rect,d=e.style,y=d===void 0?X:d,x=e.top,j=x===void 0?0:x,f=e.unstyled,g=f===void 0?!1:f,z=e.nodeRef,E=fe(e,de),c,O=!1,R=!1;if(u&&i){var v=n,h=j;if(i.width){var B=v+o+u.width-i.width,L=u.width-v-o;O=B>0&&B>L}else{var P=v+o+u.width-window.innerWidth,$=u.width-v-o;O=P>0&&P>$}if(i.height){var b=h+a+u.height-i.height,S=u.height-h-a;R=b>0&&b>S}else R=h+a+u.height>window.innerHeight;v=O?v-u.width-o:v+o,h=R?h-u.height-a:h+a,v=Math.round(v),h=Math.round(h),c="translate("+v+"px, "+h+"px)"}return w.createElement(I,N({ref:z,style:N({left:0,top:0,transform:c},!g&&y)},E),w.createElement(ce,{value:{isFlippedVertically:!R,isFlippedHorizontally:!O}},t))}V.propTypes={nodeRef:p.oneOfType([p.string,p.func,p.object])};const pe=ae(V);var ve=["detectBounds","zIndex"],he=["left","top","detectBounds","zIndex"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D.apply(this,arguments)}function F(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function je(e){var t=e===void 0?{}:e,r=t.detectBounds,n=r===void 0?!0:r,s=t.zIndex,o=F(t,ve),l=Z(o),a=l[0],i=l[1],u=l[2],d=m.useState(!1),y=d[0],x=d[1];m.useEffect(function(){x(!1)},[]);var j=m.useMemo(function(){return function(f){var g=f.left,z=g===void 0?0:g,E=f.top,c=E===void 0?0:E,O=f.detectBounds,R=f.zIndex,v=F(f,he),h=O??n,B=R??s,L=h?pe:I,P=y?0:window.scrollX,$=y?0:window.scrollY,b=z+(i.left||0)+P,S=c+(i.top||0)+$;return w.createElement(U,{zIndex:B},w.createElement(L,D({left:b,top:S},v)))}},[n,s,i.left,i.top,y]);return{containerRef:a,containerBounds:i,forceRefreshBounds:u,TooltipInPortal:j}}const me=({title:e,description:t,entries:r})=>{const n=(t==null?void 0:t.split(`
`))??[],s=r[1];return T.jsxs("div",{className:"tw-bg-[var(--text-color)] tw-p-3 tw-rounded tw-border tw-border-button-border",children:[T.jsxs("div",{className:e?"tw-pb-3":"",children:[T.jsx("div",{className:"tw-text-sm tw-leading-5 tw-text-base-alt tw-font-bold",children:e}),(s==null?void 0:s.type)&&T.jsxs("div",{className:"tw-text-sm tw-text-base-alt tw-pb-2",children:[s.type,": ",s.title]}),n.length>0&&T.jsx("div",{className:"tw-text-base tw-text-xs",children:n.map(o=>T.jsx("div",{children:o},o))})]}),r.map(o=>T.jsx(ye,{title:o.title,color:o.color,value:o.value,type:o==null?void 0:o.typeByGrouping},o.title))]})},ye=({title:e,value:t,color:r,type:n})=>T.jsxs("div",{className:"tw-text-[var(--fc-base-color)] tw-text-sm tw-font-normal",children:[r&&T.jsx("span",{className:"tw-inline-block tw-w-2 tw-h-2 tw-rounded-full tw-mr-1",style:{backgroundColor:r}}),`${n||e}: ${t}`]},`${e}-value`);me.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{entries:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    title: string;
    color?: string;
    value: string | number;
    type?: string;
    typeByGrouping?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"type",value:{name:"string",required:!1}},{key:"typeByGrouping",value:{name:"string",required:!1}}]}}],raw:"TooltipEntry[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};export{me as T,je as u};
