import{r as G}from"./index-BwDkhjyp.js";import{r as de}from"./index-B8XB3FuZ.js";import{i as me}from"./index-CfyPTyT-.js";var It=function(e){return e.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},Ut=typeof window<"u"&&window.document&&window.document.createElement?G.useLayoutEffect:G.useEffect,$="top",M="bottom",T="right",S="left",Dt="auto",ut=[$,M,T,S],Z="start",st="end",he="clippingParents",_t="viewport",at="popper",ge="reference",qt=ut.reduce(function(t,e){return t.concat([e+"-"+Z,e+"-"+st])},[]),te=[].concat(ut,[Dt]).reduce(function(t,e){return t.concat([e,e+"-"+Z,e+"-"+st])},[]),ye="beforeRead",be="read",we="afterRead",xe="beforeMain",Oe="main",Ee="afterMain",Ae="beforeWrite",Pe="write",De="afterWrite",Re=[ye,be,we,xe,Oe,Ee,Ae,Pe,De];function F(t){return t?(t.nodeName||"").toLowerCase():null}function C(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){var e=C(t).Element;return t instanceof e||t instanceof Element}function k(t){var e=C(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Rt(t){if(typeof ShadowRoot>"u")return!1;var e=C(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function je(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!k(o)||!F(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(u){var i=a[u];i===!1?o.removeAttribute(u):o.setAttribute(u,i===!0?"":i)}))})}function $e(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},u=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),i=u.reduce(function(s,p){return s[p]="",s},{});!k(a)||!F(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const Se={name:"applyStyles",enabled:!0,phase:"write",fn:je,effect:$e,requires:["computeStyles"]};function H(t){return t.split("-")[0]}var J=Math.max,yt=Math.min,_=Math.round;function At(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ee(){return!/^((?!chrome|android).)*safari/i.test(At())}function tt(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&k(t)&&(a=t.offsetWidth>0&&_(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&_(n.height)/t.offsetHeight||1);var u=K(t)?C(t):window,i=u.visualViewport,s=!ee()&&r,p=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,l=n.width/a,m=n.height/o;return{width:l,height:m,top:f,right:p+l,bottom:f+m,left:p,x:p,y:f}}function jt(t){var e=tt(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function re(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Rt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(t){return C(t).getComputedStyle(t)}function Be(t){return["table","td","th"].indexOf(F(t))>=0}function I(t){return((K(t)?t.ownerDocument:t.document)||window.document).documentElement}function bt(t){return F(t)==="html"?t:t.assignedSlot||t.parentNode||(Rt(t)?t.host:null)||I(t)}function Xt(t){return!k(t)||V(t).position==="fixed"?null:t.offsetParent}function Ce(t){var e=/firefox/i.test(At()),r=/Trident/i.test(At());if(r&&k(t)){var n=V(t);if(n.position==="fixed")return null}var a=bt(t);for(Rt(a)&&(a=a.host);k(a)&&["html","body"].indexOf(F(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function pt(t){for(var e=C(t),r=Xt(t);r&&Be(r)&&V(r).position==="static";)r=Xt(r);return r&&(F(r)==="html"||F(r)==="body"&&V(r).position==="static")?e:r||Ce(t)||e}function $t(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ot(t,e,r){return J(t,yt(e,r))}function ke(t,e,r){var n=ot(t,e,r);return n>r?r:n}function ne(){return{top:0,right:0,bottom:0,left:0}}function ae(t){return Object.assign({},ne(),t)}function oe(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Me=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ae(typeof e!="number"?e:oe(e,ut))};function Te(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,u=r.modifiersData.popperOffsets,i=H(r.placement),s=$t(i),p=[S,T].indexOf(i)>=0,f=p?"height":"width";if(!(!o||!u)){var l=Me(a.padding,r),m=jt(o),c=s==="y"?$:S,g=s==="y"?M:T,h=r.rects.reference[f]+r.rects.reference[s]-u[s]-r.rects.popper[f],v=u[s]-r.rects.reference[s],w=pt(o),O=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,E=h/2-v/2,d=l[c],y=O-m[f]-l[g],b=O/2-m[f]/2+E,x=ot(d,b,y),D=s;r.modifiersData[n]=(e={},e[D]=x,e.centerOffset=x-b,e)}}function Le(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||re(e.elements.popper,a)&&(e.elements.arrow=a))}const We={name:"arrow",enabled:!0,phase:"main",fn:Te,effect:Le,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function et(t){return t.split("-")[1]}var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fe(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:_(r*a)/a||0,y:_(n*a)/a||0}}function Yt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,u=t.offsets,i=t.position,s=t.gpuAcceleration,p=t.adaptive,f=t.roundOffsets,l=t.isFixed,m=u.x,c=m===void 0?0:m,g=u.y,h=g===void 0?0:g,v=typeof f=="function"?f({x:c,y:h}):{x:c,y:h};c=v.x,h=v.y;var w=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),E=S,d=$,y=window;if(p){var b=pt(r),x="clientHeight",D="clientWidth";if(b===C(r)&&(b=I(r),V(b).position!=="static"&&i==="absolute"&&(x="scrollHeight",D="scrollWidth")),b=b,a===$||(a===S||a===T)&&o===st){d=M;var P=l&&b===y&&y.visualViewport?y.visualViewport.height:b[x];h-=P-n.height,h*=s?1:-1}if(a===S||(a===$||a===M)&&o===st){E=T;var A=l&&b===y&&y.visualViewport?y.visualViewport.width:b[D];c-=A-n.width,c*=s?1:-1}}var R=Object.assign({position:i},p&&He),L=f===!0?Fe({x:c,y:h},C(r)):{x:c,y:h};if(c=L.x,h=L.y,s){var j;return Object.assign({},R,(j={},j[d]=O?"0":"",j[E]=w?"0":"",j.transform=(y.devicePixelRatio||1)<=1?"translate("+c+"px, "+h+"px)":"translate3d("+c+"px, "+h+"px, 0)",j))}return Object.assign({},R,(e={},e[d]=O?h+"px":"",e[E]=w?c+"px":"",e.transform="",e))}function Ve(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,u=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,p={placement:H(e.placement),variation:et(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Yt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:u,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Yt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ve,data:{}};var ht={passive:!0};function Ie(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,u=n.resize,i=u===void 0?!0:u,s=C(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&p.forEach(function(f){f.addEventListener("scroll",r.update,ht)}),i&&s.addEventListener("resize",r.update,ht),function(){o&&p.forEach(function(f){f.removeEventListener("scroll",r.update,ht)}),i&&s.removeEventListener("resize",r.update,ht)}}const Ue={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ie,data:{}};var qe={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,function(e){return qe[e]})}var Xe={start:"end",end:"start"};function zt(t){return t.replace(/start|end/g,function(e){return Xe[e]})}function St(t){var e=C(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Bt(t){return tt(I(t)).left+St(t).scrollLeft}function Ye(t,e){var r=C(t),n=I(t),a=r.visualViewport,o=n.clientWidth,u=n.clientHeight,i=0,s=0;if(a){o=a.width,u=a.height;var p=ee();(p||!p&&e==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:u,x:i+Bt(t),y:s}}function ze(t){var e,r=I(t),n=St(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=J(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),u=J(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+Bt(t),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=J(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:u,x:i,y:s}}function Ct(t){var e=V(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function ie(t){return["html","body","#document"].indexOf(F(t))>=0?t.ownerDocument.body:k(t)&&Ct(t)?t:ie(bt(t))}function it(t,e){var r;e===void 0&&(e=[]);var n=ie(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=C(n),u=a?[o].concat(o.visualViewport||[],Ct(n)?n:[]):n,i=e.concat(u);return a?i:i.concat(it(bt(u)))}function Pt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ge(t,e){var r=tt(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Gt(t,e,r){return e===_t?Pt(Ye(t,r)):K(e)?Ge(e,r):Pt(ze(I(t)))}function Je(t){var e=it(bt(t)),r=["absolute","fixed"].indexOf(V(t).position)>=0,n=r&&k(t)?pt(t):t;return K(n)?e.filter(function(a){return K(a)&&re(a,n)&&F(a)!=="body"}):[]}function Ke(t,e,r,n){var a=e==="clippingParents"?Je(t):[].concat(e),o=[].concat(a,[r]),u=o[0],i=o.reduce(function(s,p){var f=Gt(t,p,n);return s.top=J(f.top,s.top),s.right=yt(f.right,s.right),s.bottom=yt(f.bottom,s.bottom),s.left=J(f.left,s.left),s},Gt(t,u,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function se(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?et(n):null,u=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(a){case $:s={x:u,y:e.y-r.height};break;case M:s={x:u,y:e.y+e.height};break;case T:s={x:e.x+e.width,y:i};break;case S:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var p=a?$t(a):null;if(p!=null){var f=p==="y"?"height":"width";switch(o){case Z:s[p]=s[p]-(e[f]/2-r[f]/2);break;case st:s[p]=s[p]+(e[f]/2-r[f]/2);break}}return s}function ft(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,u=o===void 0?t.strategy:o,i=r.boundary,s=i===void 0?he:i,p=r.rootBoundary,f=p===void 0?_t:p,l=r.elementContext,m=l===void 0?at:l,c=r.altBoundary,g=c===void 0?!1:c,h=r.padding,v=h===void 0?0:h,w=ae(typeof v!="number"?v:oe(v,ut)),O=m===at?ge:at,E=t.rects.popper,d=t.elements[g?O:m],y=Ke(K(d)?d:d.contextElement||I(t.elements.popper),s,f,u),b=tt(t.elements.reference),x=se({reference:b,element:E,strategy:"absolute",placement:a}),D=Pt(Object.assign({},E,x)),P=m===at?D:b,A={top:y.top-P.top+w.top,bottom:P.bottom-y.bottom+w.bottom,left:y.left-P.left+w.left,right:P.right-y.right+w.right},R=t.modifiersData.offset;if(m===at&&R){var L=R[a];Object.keys(A).forEach(function(j){var U=[T,M].indexOf(j)>=0?1:-1,q=[$,M].indexOf(j)>=0?"y":"x";A[j]+=L[q]*U})}return A}function Qe(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,u=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,p=s===void 0?te:s,f=et(n),l=f?i?qt:qt.filter(function(g){return et(g)===f}):ut,m=l.filter(function(g){return p.indexOf(g)>=0});m.length===0&&(m=l);var c=m.reduce(function(g,h){return g[h]=ft(t,{placement:h,boundary:a,rootBoundary:o,padding:u})[H(h)],g},{});return Object.keys(c).sort(function(g,h){return c[g]-c[h]})}function Ze(t){if(H(t)===Dt)return[];var e=gt(t);return[zt(t),e,zt(e)]}function _e(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,i=u===void 0?!0:u,s=r.fallbackPlacements,p=r.padding,f=r.boundary,l=r.rootBoundary,m=r.altBoundary,c=r.flipVariations,g=c===void 0?!0:c,h=r.allowedAutoPlacements,v=e.options.placement,w=H(v),O=w===v,E=s||(O||!g?[gt(v)]:Ze(v)),d=[v].concat(E).reduce(function(Q,N){return Q.concat(H(N)===Dt?Qe(e,{placement:N,boundary:f,rootBoundary:l,padding:p,flipVariations:g,allowedAutoPlacements:h}):N)},[]),y=e.rects.reference,b=e.rects.popper,x=new Map,D=!0,P=d[0],A=0;A<d.length;A++){var R=d[A],L=H(R),j=et(R)===Z,U=[$,M].indexOf(L)>=0,q=U?"width":"height",B=ft(e,{placement:R,boundary:f,rootBoundary:l,altBoundary:m,padding:p}),W=U?j?T:S:j?M:$;y[q]>b[q]&&(W=gt(W));var ct=gt(W),X=[];if(o&&X.push(B[L]<=0),i&&X.push(B[W]<=0,B[ct]<=0),X.every(function(Q){return Q})){P=R,D=!1;break}x.set(R,X)}if(D)for(var lt=g?3:1,wt=function(N){var nt=d.find(function(dt){var Y=x.get(dt);if(Y)return Y.slice(0,N).every(function(xt){return xt})});if(nt)return P=nt,"break"},rt=lt;rt>0;rt--){var vt=wt(rt);if(vt==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const tr={name:"flip",enabled:!0,phase:"main",fn:_e,requiresIfExists:["offset"],data:{_skip:!1}};function Jt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function Kt(t){return[$,T,M,S].some(function(e){return t[e]>=0})}function er(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,u=ft(e,{elementContext:"reference"}),i=ft(e,{altBoundary:!0}),s=Jt(u,n),p=Jt(i,a,o),f=Kt(s),l=Kt(p);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}const rr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:er};function nr(t,e,r){var n=H(t),a=[S,$].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,u=o[0],i=o[1];return u=u||0,i=(i||0)*a,[S,T].indexOf(n)>=0?{x:i,y:u}:{x:u,y:i}}function ar(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,u=te.reduce(function(f,l){return f[l]=nr(l,e.rects,o),f},{}),i=u[e.placement],s=i.x,p=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[n]=u}const or={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ar};function ir(t){var e=t.state,r=t.name;e.modifiersData[r]=se({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const sr={name:"popperOffsets",enabled:!0,phase:"read",fn:ir,data:{}};function fr(t){return t==="x"?"y":"x"}function ur(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,i=u===void 0?!1:u,s=r.boundary,p=r.rootBoundary,f=r.altBoundary,l=r.padding,m=r.tether,c=m===void 0?!0:m,g=r.tetherOffset,h=g===void 0?0:g,v=ft(e,{boundary:s,rootBoundary:p,padding:l,altBoundary:f}),w=H(e.placement),O=et(e.placement),E=!O,d=$t(w),y=fr(d),b=e.modifiersData.popperOffsets,x=e.rects.reference,D=e.rects.popper,P=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),R=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(b){if(o){var j,U=d==="y"?$:S,q=d==="y"?M:T,B=d==="y"?"height":"width",W=b[d],ct=W+v[U],X=W-v[q],lt=c?-D[B]/2:0,wt=O===Z?x[B]:D[B],rt=O===Z?-D[B]:-x[B],vt=e.elements.arrow,Q=c&&vt?jt(vt):{width:0,height:0},N=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ne(),nt=N[U],dt=N[q],Y=ot(0,x[B],Q[B]),xt=E?x[B]/2-lt-Y-nt-A.mainAxis:wt-Y-nt-A.mainAxis,fe=E?-x[B]/2+lt+Y+dt+A.mainAxis:rt+Y+dt+A.mainAxis,Ot=e.elements.arrow&&pt(e.elements.arrow),ue=Ot?d==="y"?Ot.clientTop||0:Ot.clientLeft||0:0,kt=(j=R==null?void 0:R[d])!=null?j:0,pe=W+xt-kt-ue,ce=W+fe-kt,Mt=ot(c?yt(ct,pe):ct,W,c?J(X,ce):X);b[d]=Mt,L[d]=Mt-W}if(i){var Tt,le=d==="x"?$:S,ve=d==="x"?M:T,z=b[y],mt=y==="y"?"height":"width",Lt=z+v[le],Wt=z-v[ve],Et=[$,S].indexOf(w)!==-1,Ht=(Tt=R==null?void 0:R[y])!=null?Tt:0,Ft=Et?Lt:z-x[mt]-D[mt]-Ht+A.altAxis,Vt=Et?z+x[mt]+D[mt]-Ht-A.altAxis:Wt,Nt=c&&Et?ke(Ft,z,Vt):ot(c?Ft:Lt,z,c?Vt:Wt);b[y]=Nt,L[y]=Nt-z}e.modifiersData[n]=L}}const pr={name:"preventOverflow",enabled:!0,phase:"main",fn:ur,requiresIfExists:["offset"]};function cr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function lr(t){return t===C(t)||!k(t)?St(t):cr(t)}function vr(t){var e=t.getBoundingClientRect(),r=_(e.width)/t.offsetWidth||1,n=_(e.height)/t.offsetHeight||1;return r!==1||n!==1}function dr(t,e,r){r===void 0&&(r=!1);var n=k(e),a=k(e)&&vr(e),o=I(e),u=tt(t,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((F(e)!=="body"||Ct(o))&&(i=lr(e)),k(e)?(s=tt(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):o&&(s.x=Bt(o))),{x:u.left+i.scrollLeft-s.x,y:u.top+i.scrollTop-s.y,width:u.width,height:u.height}}function mr(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var u=[].concat(o.requires||[],o.requiresIfExists||[]);u.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&a(s)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function hr(t){var e=mr(t);return Re.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function gr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function yr(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var Qt={placement:"bottom",modifiers:[],strategy:"absolute"};function Zt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function br(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?Qt:a;return function(i,s,p){p===void 0&&(p=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qt,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},l=[],m=!1,c={state:f,setOptions:function(w){var O=typeof w=="function"?w(f.options):w;h(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:K(i)?it(i):i.contextElement?it(i.contextElement):[],popper:it(s)};var E=hr(yr([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(d){return d.enabled}),g(),c.update()},forceUpdate:function(){if(!m){var w=f.elements,O=w.reference,E=w.popper;if(Zt(O,E)){f.rects={reference:dr(O,pt(E),f.options.strategy==="fixed"),popper:jt(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<f.orderedModifiers.length;d++){if(f.reset===!0){f.reset=!1,d=-1;continue}var y=f.orderedModifiers[d],b=y.fn,x=y.options,D=x===void 0?{}:x,P=y.name;typeof b=="function"&&(f=b({state:f,options:D,name:P,instance:c})||f)}}}},update:gr(function(){return new Promise(function(v){c.forceUpdate(),v(f)})}),destroy:function(){h(),m=!0}};if(!Zt(i,s))return c;c.setOptions(p).then(function(v){!m&&p.onFirstUpdate&&p.onFirstUpdate(v)});function g(){f.orderedModifiers.forEach(function(v){var w=v.name,O=v.options,E=O===void 0?{}:O,d=v.effect;if(typeof d=="function"){var y=d({state:f,name:w,instance:c,options:E}),b=function(){};l.push(y||b)}})}function h(){l.forEach(function(v){return v()}),l=[]}return c}}var wr=[Ue,sr,Ne,Se,or,tr,pr,We,rr],xr=br({defaultModifiers:wr}),Or=[],Dr=function(e,r,n){n===void 0&&(n={});var a=G.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Or},u=G.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=u[0],s=u[1],p=G.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(c){var g=c.state,h=Object.keys(g.elements);de.flushSync(function(){s({styles:It(h.map(function(v){return[v,g.styles[v]||{}]})),attributes:It(h.map(function(v){return[v,g.attributes[v]]}))})})},requires:["computeStyles"]}},[]),f=G.useMemo(function(){var m={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[p,{name:"applyStyles",enabled:!1}])};return me(a.current,m)?a.current||m:(a.current=m,m)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,p]),l=G.useRef();return Ut(function(){l.current&&l.current.setOptions(f)},[f]),Ut(function(){if(!(e==null||r==null)){var m=n.createPopper||xr,c=m(e,r,f);return l.current=c,function(){c.destroy(),l.current=null}}},[e,r,n.createPopper]),{state:l.current?l.current.state:null,styles:i.styles,attributes:i.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}};export{Dr as u};
