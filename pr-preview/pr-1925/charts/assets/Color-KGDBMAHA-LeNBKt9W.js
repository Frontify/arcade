import{ap as E,a2 as te,a0 as be,b as me,aq as pe,ar as ve}from"./index-Ddc2eo9n.js";import{R as f,r as b}from"./index-Cs7sjTYM.js";import{g as ye}from"./_commonjsHelpers-BosuxZz1.js";import{d as xe}from"./debounce-CK5sgrDj.js";import"./iframe-4Q3ygY5H.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./memoize-xwUMZnXC.js";import"./isFunction-Dr0gukSo.js";import"./isObjectLike-D3B22v-T.js";import"./isArray-BFL8N_M6.js";import"./isSymbol-BfdzyOCe.js";function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function X(e){var t=b.useRef(e),n=b.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var N=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},S=function(e){return"touches"in e},D=function(e){return e&&e.ownerDocument.defaultView||self},Y=function(e,t,n){var r=e.getBoundingClientRect(),o=S(t)?function(a,l){for(var s=0;s<a.length;s++)if(a[s].identifier===l)return a[s];return a[0]}(t.touches,n):t;return{left:N((o.pageX-(r.left+D(e).pageXOffset))/r.width),top:N((o.pageY-(r.top+D(e).pageYOffset))/r.height)}},J=function(e){!S(e)&&e.preventDefault()},A=f.memo(function(e){var t=e.onMove,n=e.onKey,r=W(e,["onMove","onKey"]),o=b.useRef(null),a=X(t),l=X(n),s=b.useRef(null),c=b.useRef(!1),u=b.useMemo(function(){var k=function(v){J(v),(S(v)?v.touches.length>0:v.buttons>0)&&o.current?a(Y(o.current,v,s.current)):M(!1)},L=function(){return M(!1)};function M(v){var p=c.current,w=D(o.current),_=v?w.addEventListener:w.removeEventListener;_(p?"touchmove":"mousemove",k),_(p?"touchend":"mouseup",L)}return[function(v){var p=v.nativeEvent,w=o.current;if(w&&(J(p),!function(y,B){return B&&!S(y)}(p,c.current)&&w)){if(S(p)){c.current=!0;var _=p.changedTouches||[];_.length&&(s.current=_[0].identifier)}w.focus(),a(Y(w,p,s.current)),M(!0)}},function(v){var p=v.which||v.keyCode;p<37||p>40||(v.preventDefault(),l({left:p===39?.05:p===37?-.05:0,top:p===40?.05:p===38?-.05:0}))},M]},[l,a]),d=u[0],h=u[1],g=u[2];return b.useEffect(function(){return g},[g]),f.createElement("div",C({},r,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:o,onKeyDown:h,tabIndex:0,role:"slider"}))}),j=function(e){return e.filter(Boolean).join(" ")},U=function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=j(["react-colorful__pointer",e.className]);return f.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},f.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},m=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},we={grad:.9,turn:360,rad:360/(2*Math.PI)},ke=function(e){return oe(K(e))},K=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?m(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?m(parseInt(e.substring(6,8),16)/255,2):1}},_e=function(e,t){return t===void 0&&(t="deg"),Number(e)*(we[t]||1)},Ee=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Me({h:_e(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},Me=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},Ce=function(e){return Oe(re(e))},ne=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:m(e.h),s:m(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:m(o/2),a:m(r,2)}},V=function(e){var t=ne(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},F=function(e){var t=ne(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},re=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),l=r*(1-n),s=r*(1-(t-a)*n),c=r*(1-(1-t+a)*n),u=a%6;return{r:m(255*[r,s,l,l,c,r][u]),g:m(255*[c,r,r,s,l,l][u]),b:m(255*[l,l,c,r,r,s][u]),a:m(o,2)}},$e=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?oe({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},z=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Oe=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=o<1?z(m(255*o)):"";return"#"+z(t)+z(n)+z(r)+a},oe=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),l=a-Math.min(t,n,r),s=l?a===t?(n-r)/l:a===n?2+(r-t)/l:4+(t-n)/l:0;return{h:m(60*(s<0?s+6:s)),s:m(a?l/a*100:0),v:m(a/255*100),a:o}},ae=f.memo(function(e){var t=e.hue,n=e.onChange,r=j(["react-colorful__hue",e.className]);return f.createElement("div",{className:r},f.createElement(A,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:N(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":m(t),"aria-valuemax":"360","aria-valuemin":"0"},f.createElement(U,{className:"react-colorful__hue-pointer",left:t/360,color:V({h:t,s:100,v:100,a:1})})))}),le=f.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:V({h:t.h,s:100,v:100,a:1})};return f.createElement("div",{className:"react-colorful__saturation",style:r},f.createElement(A,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:N(t.s+100*o.left,0,100),v:N(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+m(t.s)+"%, Brightness "+m(t.v)+"%"},f.createElement(U,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:V(t)})))}),se=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},ce=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Ne=function(e,t){return e.toLowerCase()===t.toLowerCase()||se(K(e),K(t))};function ie(e,t,n){var r=X(n),o=b.useState(function(){return e.toHsva(t)}),a=o[0],l=o[1],s=b.useRef({color:t,hsva:a});b.useEffect(function(){if(!e.equal(t,s.current.color)){var u=e.toHsva(t);s.current={hsva:u,color:t},l(u)}},[t,e]),b.useEffect(function(){var u;se(a,s.current.hsva)||e.equal(u=e.fromHsva(a),s.current.color)||(s.current={hsva:a,color:u},r(u))},[a,e,r]);var c=b.useCallback(function(u){l(function(d){return Object.assign({},d,u)})},[]);return[a,c]}var Se=typeof window<"u"?b.useLayoutEffect:b.useEffect,Re=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Q=new Map,ue=function(e){Se(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Q.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Q.set(t,n);var r=Re();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},je=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,l=W(e,["className","colorModel","color","onChange"]),s=b.useRef(null);ue(s);var c=ie(n,o,a),u=c[0],d=c[1],h=j(["react-colorful",t]);return f.createElement("div",C({},l,{ref:s,className:h}),f.createElement(le,{hsva:u,onChange:d}),f.createElement(ae,{hue:u.h,onChange:d,className:"react-colorful__last-control"}))},ze={defaultColor:"000",toHsva:ke,fromHsva:function(e){return Ce({h:e.h,s:e.s,v:e.v,a:1})},equal:Ne},Ie=function(e){return f.createElement(je,C({},e,{colorModel:ze}))},He=function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+F(Object.assign({},n,{a:0}))+", "+F(Object.assign({},n,{a:1}))+")"},a=j(["react-colorful__alpha",t]),l=m(100*n.a);return f.createElement("div",{className:a},f.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),f.createElement(A,{onMove:function(s){r({a:s.left})},onKey:function(s){r({a:N(n.a+s.left)})},"aria-label":"Alpha","aria-valuetext":l+"%","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"},f.createElement(U,{className:"react-colorful__alpha-pointer",left:n.a,color:F(n)})))},fe=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,l=W(e,["className","colorModel","color","onChange"]),s=b.useRef(null);ue(s);var c=ie(n,o,a),u=c[0],d=c[1],h=j(["react-colorful",t]);return f.createElement("div",C({},l,{ref:s,className:h}),f.createElement(le,{hsva:u,onChange:d}),f.createElement(ae,{hue:u.h,onChange:d}),f.createElement(He,{hsva:u,onChange:d,className:"react-colorful__last-control"}))},Fe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Ee,fromHsva:F,equal:ce},Pe=function(e){return f.createElement(fe,C({},e,{colorModel:Fe}))},qe={defaultColor:"rgba(0, 0, 0, 1)",toHsva:$e,fromHsva:function(e){var t=re(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ce},Le=function(e){return f.createElement(fe,C({},e,{colorModel:qe}))},Be={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const R=Be,he={};for(const e of Object.keys(R))he[R[e]]=e;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var de=i;for(const e of Object.keys(i)){if(!("channels"in i[e]))throw new Error("missing channels property: "+e);if(!("labels"in i[e]))throw new Error("missing channel labels property: "+e);if(i[e].labels.length!==i[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=i[e];delete i[e].channels,delete i[e].labels,Object.defineProperty(i[e],"channels",{value:t}),Object.defineProperty(i[e],"labels",{value:n})}i.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),l=a-o;let s,c;a===o?s=0:t===a?s=(n-r)/l:n===a?s=2+(r-t)/l:r===a&&(s=4+(t-n)/l),s=Math.min(s*60,360),s<0&&(s+=360);const u=(o+a)/2;return a===o?c=0:u<=.5?c=l/(a+o):c=l/(2-a-o),[s,c*100,u*100]};i.rgb.hsv=function(e){let t,n,r,o,a;const l=e[0]/255,s=e[1]/255,c=e[2]/255,u=Math.max(l,s,c),d=u-Math.min(l,s,c),h=function(g){return(u-g)/6/d+1/2};return d===0?(o=0,a=0):(a=d/u,t=h(l),n=h(s),r=h(c),l===u?o=r-n:s===u?o=1/3+t-r:c===u&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,u*100]};i.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=i.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};i.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,l=(1-n-o)/(1-o)||0,s=(1-r-o)/(1-o)||0;return[a*100,l*100,s*100,o*100]};function Xe(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}i.rgb.keyword=function(e){const t=he[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(R)){const a=R[o],l=Xe(e,a);l<n&&(n=l,r=o)}return r};i.keyword.rgb=function(e){return R[e]};i.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,l=t*.0193+n*.1192+r*.9505;return[o*100,a*100,l*100]};i.rgb.lab=function(e){const t=i.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,l=500*(n-r),s=200*(r-o);return[a,l,s]};i.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,l;if(n===0)return l=r*255,[l,l,l];r<.5?o=r*(1+n):o=r+n-r*n;const s=2*r-o,c=[0,0,0];for(let u=0;u<3;u++)a=t+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?l=s+(o-s)*6*a:2*a<1?l=o:3*a<2?l=s+(o-s)*(2/3-a)*6:l=s,c[u]=l*255;return c};i.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const l=(r+n)/2,s=r===0?2*o/(a+o):2*n/(r+n);return[t,s*100,l*100]};i.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),l=255*r*(1-n),s=255*r*(1-n*a),c=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,c,l];case 1:return[s,r,l];case 2:return[l,r,c];case 3:return[l,s,r];case 4:return[c,l,r];case 5:return[r,l,s]}};i.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,l;l=(2-n)*r;const s=(2-n)*o;return a=n*o,a/=s<=1?s:2-s,a=a||0,l/=2,[t,a*100,l*100]};i.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const l=Math.floor(6*t),s=1-r;a=6*t-l,l&1&&(a=1-a);const c=n+a*(s-n);let u,d,h;switch(l){default:case 6:case 0:u=s,d=c,h=n;break;case 1:u=c,d=s,h=n;break;case 2:u=n,d=s,h=c;break;case 3:u=n,d=c,h=s;break;case 4:u=c,d=n,h=s;break;case 5:u=s,d=n,h=c;break}return[u*255,d*255,h*255]};i.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),l=1-Math.min(1,n*(1-o)+o),s=1-Math.min(1,r*(1-o)+o);return[a*255,l*255,s*255]};i.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,l;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,l=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,l=l>.0031308?1.055*l**(1/2.4)-.055:l*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),l=Math.min(Math.max(0,l),1),[o*255,a*255,l*255]};i.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),l=200*(n-r);return[o,a,l]};i.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,l;a=(t+16)/116,o=n/500+a,l=a-r/200;const s=a**3,c=o**3,u=l**3;return a=s>.008856?s:(a-16/116)/7.787,o=c>.008856?c:(o-16/116)/7.787,l=u>.008856?u:(l-16/116)/7.787,o*=95.047,a*=100,l*=108.883,[o,a,l]};i.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const l=Math.sqrt(n*n+r*r);return[t,l,o]};i.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),l=n*Math.sin(o);return[t,a,l]};i.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?i.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let l=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(l+=60),l};i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])};i.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};i.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};i.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};i.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};i.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(s=>s+s).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,l=r&255;return[o,a,l]};i.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),l=o-a;let s,c;return l<1?s=a/(1-l):s=0,l<=0?c=0:o===t?c=(n-r)/l%6:o===n?c=2+(r-t)/l:c=4+(t-n)/l,c/=6,c%=1,[c*360,l*100,s*100]};i.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};i.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};i.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,l=a%1,s=1-l;let c=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=s,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=s,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=s}return c=(1-n)*r,[(n*o[0]+c)*255,(n*o[1]+c)*255,(n*o[2]+c)*255]};i.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};i.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};i.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};i.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};i.gray.hsl=function(e){return[0,0,e[0]]};i.gray.hsv=i.gray.hsl;i.gray.hwb=function(e){return[0,100,e[0]]};i.gray.cmyk=function(e){return[0,0,0,e[0]]};i.gray.lab=function(e){return[e[0],0,0]};i.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const P=de;function De(){const e={},t=Object.keys(P);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function Ke(e){const t=De(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(P[r]);for(let a=o.length,l=0;l<a;l++){const s=o[l],c=t[s];c.distance===-1&&(c.distance=t[r].distance+1,c.parent=r,n.unshift(s))}}return t}function Ve(e,t){return function(n){return t(e(n))}}function Ge(e,t){const n=[t[e].parent,e];let r=P[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=Ve(P[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}var Te=function(e){const t=Ke(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const l=r[a];t[l].parent!==null&&(n[l]=Ge(l,t))}return n};const G=de,We=Te,$={},Ae=Object.keys(G);function Ue(e){const t=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function Ye(e){const t=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,l=0;l<a;l++)o[l]=Math.round(o[l]);return o};return"conversion"in e&&(t.conversion=e.conversion),t}Ae.forEach(e=>{$[e]={},Object.defineProperty($[e],"channels",{value:G[e].channels}),Object.defineProperty($[e],"labels",{value:G[e].labels});const t=We(e);Object.keys(t).forEach(r=>{const o=t[r];$[e][r]=Ye(o),$[e][r].raw=Ue(o)})});var Je=$;const x=ye(Je);var Qe=E.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Ze=E(te)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),et=E.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),tt=E(be)(({theme:e})=>({fontFamily:e.typography.fonts.base})),nt=E.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),rt=E.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),ot=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,Z=({value:e,style:t,...n})=>{let r=`linear-gradient(${e}, ${e}), ${ot}, linear-gradient(#fff, #fff)`;return f.createElement(rt,{...n,style:{...t,backgroundImage:r}})},at=E(me.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),lt=E(pe)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),ge=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(ge||{}),I=Object.values(ge),st=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ct=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,it=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,T=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ut=/^\s*#?([0-9a-f]{3})\s*$/i,ft={hex:Ie,rgb:Le,hsl:Pe},H={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ee=e=>{let t=e==null?void 0:e.match(st);if(!t)return[0,0,0,1];let[,n,r,o,a=1]=t;return[n,r,o,a].map(Number)},O=e=>{if(!e)return;let t=!0;if(ct.test(e)){let[l,s,c,u]=ee(e),[d,h,g]=x.rgb.hsl([l,s,c])||[0,0,0];return{valid:t,value:e,keyword:x.rgb.keyword([l,s,c]),colorSpace:"rgb",rgb:e,hsl:`hsla(${d}, ${h}%, ${g}%, ${u})`,hex:`#${x.rgb.hex([l,s,c]).toLowerCase()}`}}if(it.test(e)){let[l,s,c,u]=ee(e),[d,h,g]=x.hsl.rgb([l,s,c])||[0,0,0];return{valid:t,value:e,keyword:x.hsl.keyword([l,s,c]),colorSpace:"hsl",rgb:`rgba(${d}, ${h}, ${g}, ${u})`,hsl:e,hex:`#${x.hsl.hex([l,s,c]).toLowerCase()}`}}let n=e.replace("#",""),r=x.keyword.rgb(n)||x.hex.rgb(n),o=x.rgb.hsl(r),a=e;if(/[^#a-f0-9]/i.test(e)?a=n:T.test(e)&&(a=`#${n}`),a.startsWith("#"))t=T.test(a);else try{x.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:x.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},ht=(e,t,n)=>{if(!e||!(t!=null&&t.valid))return H[n];if(n!=="hex")return(t==null?void 0:t[n])||H[n];if(!t.hex.startsWith("#"))try{return`#${x.keyword.hex(t.hex)}`}catch{return H.hex}let r=t.hex.match(ut);if(!r)return T.test(t.hex)?t.hex:H.hex;let[o,a,l]=r[1].split("");return`#${o}${o}${a}${a}${l}${l}`},dt=(e,t)=>{let[n,r]=b.useState(e||""),[o,a]=b.useState(()=>O(n)),[l,s]=b.useState((o==null?void 0:o.colorSpace)||"hex");b.useEffect(()=>{let h=e||"",g=O(h);r(h),a(g),s((g==null?void 0:g.colorSpace)||"hex")},[e]);let c=b.useMemo(()=>ht(n,o,l).toLowerCase(),[n,o,l]),u=b.useCallback(h=>{let g=O(h),k=(g==null?void 0:g.value)||h||"";r(k),k===""&&(a(void 0),t(void 0)),g&&(a(g),s(g.colorSpace),t(g.value))},[t]),d=b.useCallback(()=>{let h=I.indexOf(l)+1;h>=I.length&&(h=0),s(I[h]);let g=(o==null?void 0:o[I[h]])||"";r(g),t(g)},[o,l,t]);return{value:n,realValue:c,updateValue:u,color:o,colorSpace:l,cycleColorSpace:d}},q=e=>e.replace(/\s*/,"").toLowerCase(),gt=(e,t,n)=>{let[r,o]=b.useState(t!=null&&t.valid?[t]:[]);b.useEffect(()=>{t===void 0&&o([])},[t]);let a=b.useMemo(()=>(e||[]).map(s=>typeof s=="string"?O(s):s.title?{...O(s.color),keyword:s.title}:O(s.color)).concat(r).filter(Boolean).slice(-27),[e,r]),l=b.useCallback(s=>{s!=null&&s.valid&&(a.some(c=>q(c[n])===q(s[n]))||o(c=>c.concat(s)))},[n,a]);return{presets:a,addPreset:l}},bt=({name:e,value:t,onChange:n,onFocus:r,onBlur:o,presetColors:a,startOpen:l=!1,argType:s})=>{var _;let c=b.useCallback(xe(n,200),[n]),{value:u,realValue:d,updateValue:h,color:g,colorSpace:k,cycleColorSpace:L}=dt(t,c),{presets:M,addPreset:v}=gt(a,g,k),p=ft[k],w=!!((_=s==null?void 0:s.table)!=null&&_.readonly);return f.createElement(Qe,{"aria-readonly":w},f.createElement(Ze,{startOpen:l,trigger:w?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>v(g),tooltip:f.createElement(et,null,f.createElement(p,{color:d==="transparent"?"#000000":d,onChange:h,onFocus:r,onBlur:o}),M.length>0&&f.createElement(nt,null,M.map((y,B)=>f.createElement(te,{key:`${y.value}-${B}`,hasChrome:!1,tooltip:f.createElement(tt,{note:y.keyword||y.value})},f.createElement(Z,{value:y[k],active:g&&q(y[k])===q(g[k]),onClick:()=>h(y.value)})))))},f.createElement(Z,{value:d,style:{margin:4}})),f.createElement(at,{id:ve(e),value:u,onChange:y=>h(y.target.value),onFocus:y=>y.target.select(),readOnly:w,placeholder:"Choose color..."}),u?f.createElement(lt,{onClick:L}):null)},Nt=bt;export{bt as ColorControl,Nt as default};
