import{ao as Q,ap as k,a2 as A,a0 as Y,w as ee,aq as te,ar as ne}from"./index-Ch7ZSkUP.js";import{r as v,R as p}from"./index-BwDkhjyp.js";import{Z as re,H as se,u as oe}from"./index-YYnwjzoa.js";import{g as D}from"./_commonjsHelpers-BosuxZz1.js";import{_ as ae,i as K}from"./isArray-FcF4KTdz.js";import"./iframe-B3BWWy9H.js";import"../sb-preview/runtime.js";import"./index-DxjWwZXO.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";var ie={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const O=ie,U={};for(const e of Object.keys(O))U[O[e]]=e;const c={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Z=c;for(const e of Object.keys(c)){if(!("channels"in c[e]))throw new Error("missing channels property: "+e);if(!("labels"in c[e]))throw new Error("missing channel labels property: "+e);if(c[e].labels.length!==c[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:s}=c[e];delete c[e].channels,delete c[e].labels,Object.defineProperty(c[e],"channels",{value:t}),Object.defineProperty(c[e],"labels",{value:s})}c.rgb.hsl=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.min(t,s,n),o=Math.max(t,s,n),a=o-r;let i,l;o===r?i=0:t===o?i=(s-n)/a:s===o?i=2+(n-t)/a:n===o&&(i=4+(t-s)/a),i=Math.min(i*60,360),i<0&&(i+=360);const u=(r+o)/2;return o===r?l=0:u<=.5?l=a/(o+r):l=a/(2-o-r),[i,l*100,u*100]};c.rgb.hsv=function(e){let t,s,n,r,o;const a=e[0]/255,i=e[1]/255,l=e[2]/255,u=Math.max(a,i,l),d=u-Math.min(a,i,l),h=function(f){return(u-f)/6/d+1/2};return d===0?(r=0,o=0):(o=d/u,t=h(a),s=h(i),n=h(l),a===u?r=n-s:i===u?r=1/3+t-n:l===u&&(r=2/3+s-t),r<0?r+=1:r>1&&(r-=1)),[r*360,o*100,u*100]};c.rgb.hwb=function(e){const t=e[0],s=e[1];let n=e[2];const r=c.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(s,n));return n=1-1/255*Math.max(t,Math.max(s,n)),[r,o*100,n*100]};c.rgb.cmyk=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.min(1-t,1-s,1-n),o=(1-t-r)/(1-r)||0,a=(1-s-r)/(1-r)||0,i=(1-n-r)/(1-r)||0;return[o*100,a*100,i*100,r*100]};function le(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}c.rgb.keyword=function(e){const t=U[e];if(t)return t;let s=1/0,n;for(const r of Object.keys(O)){const o=O[r],a=le(e,o);a<s&&(s=a,n=r)}return n};c.keyword.rgb=function(e){return O[e]};c.rgb.xyz=function(e){let t=e[0]/255,s=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;const r=t*.4124+s*.3576+n*.1805,o=t*.2126+s*.7152+n*.0722,a=t*.0193+s*.1192+n*.9505;return[r*100,o*100,a*100]};c.rgb.lab=function(e){const t=c.rgb.xyz(e);let s=t[0],n=t[1],r=t[2];s/=95.047,n/=100,r/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(s-n),i=200*(n-r);return[o,a,i]};c.hsl.rgb=function(e){const t=e[0]/360,s=e[1]/100,n=e[2]/100;let r,o,a;if(s===0)return a=n*255,[a,a,a];n<.5?r=n*(1+s):r=n+s-n*s;const i=2*n-r,l=[0,0,0];for(let u=0;u<3;u++)o=t+1/3*-(u-1),o<0&&o++,o>1&&o--,6*o<1?a=i+(r-i)*6*o:2*o<1?a=r:3*o<2?a=i+(r-i)*(2/3-o)*6:a=i,l[u]=a*255;return l};c.hsl.hsv=function(e){const t=e[0];let s=e[1]/100,n=e[2]/100,r=s;const o=Math.max(n,.01);n*=2,s*=n<=1?n:2-n,r*=o<=1?o:2-o;const a=(n+s)/2,i=n===0?2*r/(o+r):2*s/(n+s);return[t,i*100,a*100]};c.hsv.rgb=function(e){const t=e[0]/60,s=e[1]/100;let n=e[2]/100;const r=Math.floor(t)%6,o=t-Math.floor(t),a=255*n*(1-s),i=255*n*(1-s*o),l=255*n*(1-s*(1-o));switch(n*=255,r){case 0:return[n,l,a];case 1:return[i,n,a];case 2:return[a,n,l];case 3:return[a,i,n];case 4:return[l,a,n];case 5:return[n,a,i]}};c.hsv.hsl=function(e){const t=e[0],s=e[1]/100,n=e[2]/100,r=Math.max(n,.01);let o,a;a=(2-s)*n;const i=(2-s)*r;return o=s*r,o/=i<=1?i:2-i,o=o||0,a/=2,[t,o*100,a*100]};c.hwb.rgb=function(e){const t=e[0]/360;let s=e[1]/100,n=e[2]/100;const r=s+n;let o;r>1&&(s/=r,n/=r);const a=Math.floor(6*t),i=1-n;o=6*t-a,a&1&&(o=1-o);const l=s+o*(i-s);let u,d,h;switch(a){default:case 6:case 0:u=i,d=l,h=s;break;case 1:u=l,d=i,h=s;break;case 2:u=s,d=i,h=l;break;case 3:u=s,d=l,h=i;break;case 4:u=l,d=s,h=i;break;case 5:u=i,d=s,h=l;break}return[u*255,d*255,h*255]};c.cmyk.rgb=function(e){const t=e[0]/100,s=e[1]/100,n=e[2]/100,r=e[3]/100,o=1-Math.min(1,t*(1-r)+r),a=1-Math.min(1,s*(1-r)+r),i=1-Math.min(1,n*(1-r)+r);return[o*255,a*255,i*255]};c.xyz.rgb=function(e){const t=e[0]/100,s=e[1]/100,n=e[2]/100;let r,o,a;return r=t*3.2406+s*-1.5372+n*-.4986,o=t*-.9689+s*1.8758+n*.0415,a=t*.0557+s*-.204+n*1.057,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,r=Math.min(Math.max(0,r),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[r*255,o*255,a*255]};c.xyz.lab=function(e){let t=e[0],s=e[1],n=e[2];t/=95.047,s/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;const r=116*s-16,o=500*(t-s),a=200*(s-n);return[r,o,a]};c.lab.xyz=function(e){const t=e[0],s=e[1],n=e[2];let r,o,a;o=(t+16)/116,r=s/500+o,a=o-n/200;const i=o**3,l=r**3,u=a**3;return o=i>.008856?i:(o-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,a=u>.008856?u:(a-16/116)/7.787,r*=95.047,o*=100,a*=108.883,[r,o,a]};c.lab.lch=function(e){const t=e[0],s=e[1],n=e[2];let r;r=Math.atan2(n,s)*360/2/Math.PI,r<0&&(r+=360);const a=Math.sqrt(s*s+n*n);return[t,a,r]};c.lch.lab=function(e){const t=e[0],s=e[1],r=e[2]/360*2*Math.PI,o=s*Math.cos(r),a=s*Math.sin(r);return[t,o,a]};c.rgb.ansi16=function(e,t=null){const[s,n,r]=e;let o=t===null?c.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),o===0)return 30;let a=30+(Math.round(r/255)<<2|Math.round(n/255)<<1|Math.round(s/255));return o===2&&(a+=60),a};c.hsv.ansi16=function(e){return c.rgb.ansi16(c.hsv.rgb(e),e[2])};c.rgb.ansi256=function(e){const t=e[0],s=e[1],n=e[2];return t===s&&s===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(s/255*5)+Math.round(n/255*5)};c.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const s=(~~(e>50)+1)*.5,n=(t&1)*s*255,r=(t>>1&1)*s*255,o=(t>>2&1)*s*255;return[n,r,o]};c.ansi256.rgb=function(e){if(e>=232){const o=(e-232)*10+8;return[o,o,o]}e-=16;let t;const s=Math.floor(e/36)/5*255,n=Math.floor((t=e%36)/6)/5*255,r=t%6/5*255;return[s,n,r]};c.rgb.hex=function(e){const s=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(s.length)+s};c.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let s=t[0];t[0].length===3&&(s=s.split("").map(i=>i+i).join(""));const n=parseInt(s,16),r=n>>16&255,o=n>>8&255,a=n&255;return[r,o,a]};c.rgb.hcg=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.max(Math.max(t,s),n),o=Math.min(Math.min(t,s),n),a=r-o;let i,l;return a<1?i=o/(1-a):i=0,a<=0?l=0:r===t?l=(s-n)/a%6:r===s?l=2+(n-t)/a:l=4+(t-s)/a,l/=6,l%=1,[l*360,a*100,i*100]};c.hsl.hcg=function(e){const t=e[1]/100,s=e[2]/100,n=s<.5?2*t*s:2*t*(1-s);let r=0;return n<1&&(r=(s-.5*n)/(1-n)),[e[0],n*100,r*100]};c.hsv.hcg=function(e){const t=e[1]/100,s=e[2]/100,n=t*s;let r=0;return n<1&&(r=(s-n)/(1-n)),[e[0],n*100,r*100]};c.hcg.rgb=function(e){const t=e[0]/360,s=e[1]/100,n=e[2]/100;if(s===0)return[n*255,n*255,n*255];const r=[0,0,0],o=t%1*6,a=o%1,i=1-a;let l=0;switch(Math.floor(o)){case 0:r[0]=1,r[1]=a,r[2]=0;break;case 1:r[0]=i,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=a;break;case 3:r[0]=0,r[1]=i,r[2]=1;break;case 4:r[0]=a,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=i}return l=(1-s)*n,[(s*r[0]+l)*255,(s*r[1]+l)*255,(s*r[2]+l)*255]};c.hcg.hsv=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);let r=0;return n>0&&(r=t/n),[e[0],r*100,n*100]};c.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],r*100,n*100]};c.hcg.hwb=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);return[e[0],(n-t)*100,(1-n)*100]};c.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};c.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};c.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};c.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};c.gray.hsl=function(e){return[0,0,e[0]]};c.gray.hsv=c.gray.hsl;c.gray.hwb=function(e){return[0,100,e[0]]};c.gray.cmyk=function(e){return[0,0,0,e[0]]};c.gray.lab=function(e){return[e[0],0,0]};c.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n};c.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const T=Z;function ce(){const e={},t=Object.keys(T);for(let s=t.length,n=0;n<s;n++)e[t[n]]={distance:-1,parent:null};return e}function ue(e){const t=ce(),s=[e];for(t[e].distance=0;s.length;){const n=s.pop(),r=Object.keys(T[n]);for(let o=r.length,a=0;a<o;a++){const i=r[a],l=t[i];l.distance===-1&&(l.distance=t[n].distance+1,l.parent=n,s.unshift(i))}}return t}function he(e,t){return function(s){return t(e(s))}}function fe(e,t){const s=[t[e].parent,e];let n=T[t[e].parent][e],r=t[e].parent;for(;t[r].parent;)s.unshift(t[r].parent),n=he(T[t[r].parent][r],n),r=t[r].parent;return n.conversion=s,n}var de=function(e){const t=ue(e),s={},n=Object.keys(t);for(let r=n.length,o=0;o<r;o++){const a=n[o];t[a].parent!==null&&(s[a]=fe(a,t))}return s};const q=Z,ge=de,M={},be=Object.keys(q);function me(e){const t=function(...s){const n=s[0];return n==null?n:(n.length>1&&(s=n),e(s))};return"conversion"in e&&(t.conversion=e.conversion),t}function pe(e){const t=function(...s){const n=s[0];if(n==null)return n;n.length>1&&(s=n);const r=e(s);if(typeof r=="object")for(let o=r.length,a=0;a<o;a++)r[a]=Math.round(r[a]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}be.forEach(e=>{M[e]={},Object.defineProperty(M[e],"channels",{value:q[e].channels}),Object.defineProperty(M[e],"labels",{value:q[e].labels});const t=ge(e);Object.keys(t).forEach(n=>{const r=t[n];M[e][n]=pe(r),M[e][n].raw=me(r)})});var ye=M;const y=D(ye);var ve=ae,xe=function(){return ve.Date.now()},ke=xe,we=/\s/;function $e(e){for(var t=e.length;t--&&we.test(e.charAt(t)););return t}var Me=$e,Ee=Me,Ce=/^\s+/;function Se(e){return e&&e.slice(0,Ee(e)+1).replace(Ce,"")}var Oe=Se,Ie=Oe,W=K,Fe=Q,N=NaN,_e=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,je=/^0o[0-7]+$/i,Te=parseInt;function Pe(e){if(typeof e=="number")return e;if(Fe(e))return N;if(W(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=W(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ie(e);var s=Re.test(e);return s||je.test(e)?Te(e.slice(2),s?2:8):_e.test(e)?N:+e}var ze=Pe,Le=K,L=ke,X=ze,qe="Expected a function",Be=Math.max,He=Math.min;function We(e,t,s){var n,r,o,a,i,l,u=0,d=!1,h=!1,f=!0;if(typeof e!="function")throw new TypeError(qe);t=X(t)||0,Le(s)&&(d=!!s.leading,h="maxWait"in s,o=h?Be(X(s.maxWait)||0,t):o,f="trailing"in s?!!s.trailing:f);function b(g){var x=n,S=r;return n=r=void 0,u=g,a=e.apply(S,x),a}function z(g){return u=g,i=setTimeout(w,t),d?b(g):a}function I(g){var x=g-l,S=g-u,H=t-x;return h?He(H,o-S):H}function F(g){var x=g-l,S=g-u;return l===void 0||x>=t||x<0||h&&S>=o}function w(){var g=L();if(F(g))return $(g);i=setTimeout(w,I(g))}function $(g){return i=void 0,f&&n?b(g):(n=r=void 0,a)}function _(){i!==void 0&&clearTimeout(i),u=0,n=l=r=i=void 0}function m(){return i===void 0?a:$(L())}function C(){var g=L(),x=F(g);if(n=arguments,r=this,l=g,x){if(i===void 0)return z(l);if(h)return clearTimeout(i),i=setTimeout(w,t),b(l)}return i===void 0&&(i=setTimeout(w,t)),a}return C.cancel=_,C.flush=m,C}var Ne=We;const Xe=D(Ne);var Ge=k.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Ve=k(A)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Ae=k.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),De=k(Y)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Ke=k.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Ue=k.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Ze=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,G=({value:e,style:t,...s})=>{let n=`linear-gradient(${e}, ${e}), ${Ze}, linear-gradient(#fff, #fff)`;return p.createElement(Ue,{...s,style:{...t,backgroundImage:n}})},Je=k(ee.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Qe=k(te)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),J=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(J||{}),R=Object.values(J),Ye=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,et=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,tt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,B=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,nt=/^\s*#?([0-9a-f]{3})\s*$/i,rt={hex:re,rgb:se,hsl:oe},j={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},V=e=>{let t=e==null?void 0:e.match(Ye);if(!t)return[0,0,0,1];let[,s,n,r,o=1]=t;return[s,n,r,o].map(Number)},E=e=>{if(!e)return;let t=!0;if(et.test(e)){let[a,i,l,u]=V(e),[d,h,f]=y.rgb.hsl([a,i,l])||[0,0,0];return{valid:t,value:e,keyword:y.rgb.keyword([a,i,l]),colorSpace:"rgb",rgb:e,hsl:`hsla(${d}, ${h}%, ${f}%, ${u})`,hex:`#${y.rgb.hex([a,i,l]).toLowerCase()}`}}if(tt.test(e)){let[a,i,l,u]=V(e),[d,h,f]=y.hsl.rgb([a,i,l])||[0,0,0];return{valid:t,value:e,keyword:y.hsl.keyword([a,i,l]),colorSpace:"hsl",rgb:`rgba(${d}, ${h}, ${f}, ${u})`,hsl:e,hex:`#${y.hsl.hex([a,i,l]).toLowerCase()}`}}let s=e.replace("#",""),n=y.keyword.rgb(s)||y.hex.rgb(s),r=y.rgb.hsl(n),o=e;if(/[^#a-f0-9]/i.test(e)?o=s:B.test(e)&&(o=`#${s}`),o.startsWith("#"))t=B.test(o);else try{y.keyword.hex(o)}catch{t=!1}return{valid:t,value:o,keyword:y.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${r[0]}, ${r[1]}%, ${r[2]}%, 1)`,hex:o}},st=(e,t,s)=>{if(!e||!(t!=null&&t.valid))return j[s];if(s!=="hex")return(t==null?void 0:t[s])||j[s];if(!t.hex.startsWith("#"))try{return`#${y.keyword.hex(t.hex)}`}catch{return j.hex}let n=t.hex.match(nt);if(!n)return B.test(t.hex)?t.hex:j.hex;let[r,o,a]=n[1].split("");return`#${r}${r}${o}${o}${a}${a}`},ot=(e,t)=>{let[s,n]=v.useState(e||""),[r,o]=v.useState(()=>E(s)),[a,i]=v.useState((r==null?void 0:r.colorSpace)||"hex");v.useEffect(()=>{let h=e||"",f=E(h);n(h),o(f),i((f==null?void 0:f.colorSpace)||"hex")},[e]);let l=v.useMemo(()=>st(s,r,a).toLowerCase(),[s,r,a]),u=v.useCallback(h=>{let f=E(h),b=(f==null?void 0:f.value)||h||"";n(b),b===""&&(o(void 0),t(void 0)),f&&(o(f),i(f.colorSpace),t(f.value))},[t]),d=v.useCallback(()=>{let h=R.indexOf(a)+1;h>=R.length&&(h=0),i(R[h]);let f=(r==null?void 0:r[R[h]])||"";n(f),t(f)},[r,a,t]);return{value:s,realValue:l,updateValue:u,color:r,colorSpace:a,cycleColorSpace:d}},P=e=>e.replace(/\s*/,"").toLowerCase(),at=(e,t,s)=>{let[n,r]=v.useState(t!=null&&t.valid?[t]:[]);v.useEffect(()=>{t===void 0&&r([])},[t]);let o=v.useMemo(()=>(e||[]).map(i=>typeof i=="string"?E(i):i.title?{...E(i.color),keyword:i.title}:E(i.color)).concat(n).filter(Boolean).slice(-27),[e,n]),a=v.useCallback(i=>{i!=null&&i.valid&&(o.some(l=>P(l[s])===P(i[s]))||r(l=>l.concat(i)))},[s,o]);return{presets:o,addPreset:a}},it=({name:e,value:t,onChange:s,onFocus:n,onBlur:r,presetColors:o,startOpen:a=!1,argType:i})=>{var _;let l=v.useCallback(Xe(s,200),[s]),{value:u,realValue:d,updateValue:h,color:f,colorSpace:b,cycleColorSpace:z}=ot(t,l),{presets:I,addPreset:F}=at(o,f,b),w=rt[b],$=!!((_=i==null?void 0:i.table)!=null&&_.readonly);return p.createElement(Ge,{"aria-readonly":$},p.createElement(Ve,{startOpen:a,trigger:$?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>F(f),tooltip:p.createElement(Ae,null,p.createElement(w,{color:d==="transparent"?"#000000":d,onChange:h,onFocus:n,onBlur:r}),I.length>0&&p.createElement(Ke,null,I.map((m,C)=>p.createElement(A,{key:`${m.value}-${C}`,hasChrome:!1,tooltip:p.createElement(De,{note:m.keyword||m.value})},p.createElement(G,{value:m[b],active:f&&P(m[b])===P(f[b]),onClick:()=>h(m.value)})))))},p.createElement(G,{value:d,style:{margin:4}})),p.createElement(Je,{id:ne(e),value:u,onChange:m=>h(m.target.value),onFocus:m=>m.target.select(),readOnly:$,placeholder:"Choose color..."}),u?p.createElement(Qe,{onClick:z}):null)},yt=it;export{it as ColorControl,yt as default};
