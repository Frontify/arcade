import{r as d}from"./index-BwDkhjyp.js";function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)}function j(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}var k=d.useLayoutEffect,A=function(e){var t=d.useRef(e);return k(function(){t.current=e}),t},R=function(e,t){if(typeof e=="function"){e(t);return}e.current=t},I=function(e,t){var r=d.useRef();return d.useCallback(function(i){e.current=i,r.current&&R(r.current,null),r.current=t,t&&R(t,i)},[t])},H={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},B=function(e){Object.keys(H).forEach(function(t){e.style.setProperty(t,H[t],"important")})},w=B,o=null,C=function(e,t){var r=e.scrollHeight;return t.sizingStyle.boxSizing==="border-box"?r+t.borderSize:r-t.paddingSize};function M(n,e,t,r){t===void 0&&(t=1),r===void 0&&(r=1/0),o||(o=document.createElement("textarea"),o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"),w(o)),o.parentNode===null&&document.body.appendChild(o);var i=n.paddingSize,a=n.borderSize,u=n.sizingStyle,g=u.boxSizing;Object.keys(u).forEach(function(v){var p=v;o.style[p]=u[p]}),w(o),o.value=e;var s=C(o,n);o.value=e,s=C(o,n),o.value="x";var c=o.scrollHeight-i,f=c*t;g==="border-box"&&(f=f+i+a),s=Math.max(f,s);var l=c*r;return g==="border-box"&&(l=l+i+a),s=Math.min(l,s),[s,c]}var E=function(){},N=function(e,t){return e.reduce(function(r,i){return r[i]=t[i],r},{})},$=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],P=!!document.documentElement.currentStyle,_=function(e){var t=window.getComputedStyle(e);if(t===null)return null;var r=N($,t),i=r.boxSizing;if(i==="")return null;P&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var a=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),u=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:a,borderSize:u}},Y=_;function T(n,e,t){var r=A(t);d.useLayoutEffect(function(){var i=function(u){return r.current(u)};if(n)return n.addEventListener(e,i),function(){return n.removeEventListener(e,i)}},[])}var G=function(e){T(window,"resize",e)},K=function(e){T(document.fonts,"loadingdone",e)},U=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],X=function(e,t){var r=e.cacheMeasurements,i=e.maxRows,a=e.minRows,u=e.onChange,g=u===void 0?E:u,s=e.onHeightChange,c=s===void 0?E:s,f=j(e,U),l=f.value!==void 0,v=d.useRef(null),p=I(v,t),z=d.useRef(0),x=d.useRef(),b=function(){var h=v.current,S=r&&x.current?x.current:Y(h);if(S){x.current=S;var L=M(S,h.value||h.placeholder||"x",a,i),m=L[0],O=L[1];z.current!==m&&(z.current=m,h.style.setProperty("height",m+"px","important"),c(m,{rowHeight:O}))}},F=function(h){l||b(),g(h)};return d.useLayoutEffect(b),G(b),K(b),d.createElement("textarea",y({},f,{onChange:F,ref:p}))},q=d.forwardRef(X);export{q as i};
