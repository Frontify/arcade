import{ao as Q,ap as A,aq as Y,ar as k,a2 as D,a0 as ee,H as te,as as ne,at as re}from"./index-CiLKj0sG.js";import{r as v,R as p}from"./index-BwDkhjyp.js";import{g as U}from"./_commonjsHelpers-BosuxZz1.js";import{Z as se,H as ae,u as oe}from"./index-YYnwjzoa.js";import"./iframe-DKDlmJng.js";import"../sb-preview/runtime.js";import"./jsx-runtime-Nms4Y4qS.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./index-BLrIWWQf.js";var ie={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const O=ie,K={};for(const e of Object.keys(O))K[O[e]]=e;const c={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Z=c;for(const e of Object.keys(c)){if(!("channels"in c[e]))throw new Error("missing channels property: "+e);if(!("labels"in c[e]))throw new Error("missing channel labels property: "+e);if(c[e].labels.length!==c[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:s}=c[e];delete c[e].channels,delete c[e].labels,Object.defineProperty(c[e],"channels",{value:t}),Object.defineProperty(c[e],"labels",{value:s})}c.rgb.hsl=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.min(t,s,n),a=Math.max(t,s,n),o=a-r;let i,l;a===r?i=0:t===a?i=(s-n)/o:s===a?i=2+(n-t)/o:n===a&&(i=4+(t-s)/o),i=Math.min(i*60,360),i<0&&(i+=360);const u=(r+a)/2;return a===r?l=0:u<=.5?l=o/(a+r):l=o/(2-a-r),[i,l*100,u*100]};c.rgb.hsv=function(e){let t,s,n,r,a;const o=e[0]/255,i=e[1]/255,l=e[2]/255,u=Math.max(o,i,l),f=u-Math.min(o,i,l),h=function(d){return(u-d)/6/f+1/2};return f===0?(r=0,a=0):(a=f/u,t=h(o),s=h(i),n=h(l),o===u?r=n-s:i===u?r=1/3+t-n:l===u&&(r=2/3+s-t),r<0?r+=1:r>1&&(r-=1)),[r*360,a*100,u*100]};c.rgb.hwb=function(e){const t=e[0],s=e[1];let n=e[2];const r=c.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(s,n));return n=1-1/255*Math.max(t,Math.max(s,n)),[r,a*100,n*100]};c.rgb.cmyk=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.min(1-t,1-s,1-n),a=(1-t-r)/(1-r)||0,o=(1-s-r)/(1-r)||0,i=(1-n-r)/(1-r)||0;return[a*100,o*100,i*100,r*100]};function le(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}c.rgb.keyword=function(e){const t=K[e];if(t)return t;let s=1/0,n;for(const r of Object.keys(O)){const a=O[r],o=le(e,a);o<s&&(s=o,n=r)}return n};c.keyword.rgb=function(e){return O[e]};c.rgb.xyz=function(e){let t=e[0]/255,s=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;const r=t*.4124+s*.3576+n*.1805,a=t*.2126+s*.7152+n*.0722,o=t*.0193+s*.1192+n*.9505;return[r*100,a*100,o*100]};c.rgb.lab=function(e){const t=c.rgb.xyz(e);let s=t[0],n=t[1],r=t[2];s/=95.047,n/=100,r/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const a=116*n-16,o=500*(s-n),i=200*(n-r);return[a,o,i]};c.hsl.rgb=function(e){const t=e[0]/360,s=e[1]/100,n=e[2]/100;let r,a,o;if(s===0)return o=n*255,[o,o,o];n<.5?r=n*(1+s):r=n+s-n*s;const i=2*n-r,l=[0,0,0];for(let u=0;u<3;u++)a=t+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?o=i+(r-i)*6*a:2*a<1?o=r:3*a<2?o=i+(r-i)*(2/3-a)*6:o=i,l[u]=o*255;return l};c.hsl.hsv=function(e){const t=e[0];let s=e[1]/100,n=e[2]/100,r=s;const a=Math.max(n,.01);n*=2,s*=n<=1?n:2-n,r*=a<=1?a:2-a;const o=(n+s)/2,i=n===0?2*r/(a+r):2*s/(n+s);return[t,i*100,o*100]};c.hsv.rgb=function(e){const t=e[0]/60,s=e[1]/100;let n=e[2]/100;const r=Math.floor(t)%6,a=t-Math.floor(t),o=255*n*(1-s),i=255*n*(1-s*a),l=255*n*(1-s*(1-a));switch(n*=255,r){case 0:return[n,l,o];case 1:return[i,n,o];case 2:return[o,n,l];case 3:return[o,i,n];case 4:return[l,o,n];case 5:return[n,o,i]}};c.hsv.hsl=function(e){const t=e[0],s=e[1]/100,n=e[2]/100,r=Math.max(n,.01);let a,o;o=(2-s)*n;const i=(2-s)*r;return a=s*r,a/=i<=1?i:2-i,a=a||0,o/=2,[t,a*100,o*100]};c.hwb.rgb=function(e){const t=e[0]/360;let s=e[1]/100,n=e[2]/100;const r=s+n;let a;r>1&&(s/=r,n/=r);const o=Math.floor(6*t),i=1-n;a=6*t-o,o&1&&(a=1-a);const l=s+a*(i-s);let u,f,h;switch(o){default:case 6:case 0:u=i,f=l,h=s;break;case 1:u=l,f=i,h=s;break;case 2:u=s,f=i,h=l;break;case 3:u=s,f=l,h=i;break;case 4:u=l,f=s,h=i;break;case 5:u=i,f=s,h=l;break}return[u*255,f*255,h*255]};c.cmyk.rgb=function(e){const t=e[0]/100,s=e[1]/100,n=e[2]/100,r=e[3]/100,a=1-Math.min(1,t*(1-r)+r),o=1-Math.min(1,s*(1-r)+r),i=1-Math.min(1,n*(1-r)+r);return[a*255,o*255,i*255]};c.xyz.rgb=function(e){const t=e[0]/100,s=e[1]/100,n=e[2]/100;let r,a,o;return r=t*3.2406+s*-1.5372+n*-.4986,a=t*-.9689+s*1.8758+n*.0415,o=t*.0557+s*-.204+n*1.057,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,r=Math.min(Math.max(0,r),1),a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),[r*255,a*255,o*255]};c.xyz.lab=function(e){let t=e[0],s=e[1],n=e[2];t/=95.047,s/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;const r=116*s-16,a=500*(t-s),o=200*(s-n);return[r,a,o]};c.lab.xyz=function(e){const t=e[0],s=e[1],n=e[2];let r,a,o;a=(t+16)/116,r=s/500+a,o=a-n/200;const i=a**3,l=r**3,u=o**3;return a=i>.008856?i:(a-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,o=u>.008856?u:(o-16/116)/7.787,r*=95.047,a*=100,o*=108.883,[r,a,o]};c.lab.lch=function(e){const t=e[0],s=e[1],n=e[2];let r;r=Math.atan2(n,s)*360/2/Math.PI,r<0&&(r+=360);const o=Math.sqrt(s*s+n*n);return[t,o,r]};c.lch.lab=function(e){const t=e[0],s=e[1],r=e[2]/360*2*Math.PI,a=s*Math.cos(r),o=s*Math.sin(r);return[t,a,o]};c.rgb.ansi16=function(e,t=null){const[s,n,r]=e;let a=t===null?c.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let o=30+(Math.round(r/255)<<2|Math.round(n/255)<<1|Math.round(s/255));return a===2&&(o+=60),o};c.hsv.ansi16=function(e){return c.rgb.ansi16(c.hsv.rgb(e),e[2])};c.rgb.ansi256=function(e){const t=e[0],s=e[1],n=e[2];return t===s&&s===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(s/255*5)+Math.round(n/255*5)};c.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const s=(~~(e>50)+1)*.5,n=(t&1)*s*255,r=(t>>1&1)*s*255,a=(t>>2&1)*s*255;return[n,r,a]};c.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const s=Math.floor(e/36)/5*255,n=Math.floor((t=e%36)/6)/5*255,r=t%6/5*255;return[s,n,r]};c.rgb.hex=function(e){const s=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(s.length)+s};c.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let s=t[0];t[0].length===3&&(s=s.split("").map(i=>i+i).join(""));const n=parseInt(s,16),r=n>>16&255,a=n>>8&255,o=n&255;return[r,a,o]};c.rgb.hcg=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.max(Math.max(t,s),n),a=Math.min(Math.min(t,s),n),o=r-a;let i,l;return o<1?i=a/(1-o):i=0,o<=0?l=0:r===t?l=(s-n)/o%6:r===s?l=2+(n-t)/o:l=4+(t-s)/o,l/=6,l%=1,[l*360,o*100,i*100]};c.hsl.hcg=function(e){const t=e[1]/100,s=e[2]/100,n=s<.5?2*t*s:2*t*(1-s);let r=0;return n<1&&(r=(s-.5*n)/(1-n)),[e[0],n*100,r*100]};c.hsv.hcg=function(e){const t=e[1]/100,s=e[2]/100,n=t*s;let r=0;return n<1&&(r=(s-n)/(1-n)),[e[0],n*100,r*100]};c.hcg.rgb=function(e){const t=e[0]/360,s=e[1]/100,n=e[2]/100;if(s===0)return[n*255,n*255,n*255];const r=[0,0,0],a=t%1*6,o=a%1,i=1-o;let l=0;switch(Math.floor(a)){case 0:r[0]=1,r[1]=o,r[2]=0;break;case 1:r[0]=i,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=o;break;case 3:r[0]=0,r[1]=i,r[2]=1;break;case 4:r[0]=o,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=i}return l=(1-s)*n,[(s*r[0]+l)*255,(s*r[1]+l)*255,(s*r[2]+l)*255]};c.hcg.hsv=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);let r=0;return n>0&&(r=t/n),[e[0],r*100,n*100]};c.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],r*100,n*100]};c.hcg.hwb=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);return[e[0],(n-t)*100,(1-n)*100]};c.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let a=0;return r<1&&(a=(n-r)/(1-r)),[e[0],r*100,a*100]};c.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};c.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};c.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};c.gray.hsl=function(e){return[0,0,e[0]]};c.gray.hsv=c.gray.hsl;c.gray.hwb=function(e){return[0,100,e[0]]};c.gray.cmyk=function(e){return[0,0,0,e[0]]};c.gray.lab=function(e){return[e[0],0,0]};c.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n};c.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const T=Z;function ce(){const e={},t=Object.keys(T);for(let s=t.length,n=0;n<s;n++)e[t[n]]={distance:-1,parent:null};return e}function ue(e){const t=ce(),s=[e];for(t[e].distance=0;s.length;){const n=s.pop(),r=Object.keys(T[n]);for(let a=r.length,o=0;o<a;o++){const i=r[o],l=t[i];l.distance===-1&&(l.distance=t[n].distance+1,l.parent=n,s.unshift(i))}}return t}function he(e,t){return function(s){return t(e(s))}}function de(e,t){const s=[t[e].parent,e];let n=T[t[e].parent][e],r=t[e].parent;for(;t[r].parent;)s.unshift(t[r].parent),n=he(T[t[r].parent][r],n),r=t[r].parent;return n.conversion=s,n}var fe=function(e){const t=ue(e),s={},n=Object.keys(t);for(let r=n.length,a=0;a<r;a++){const o=n[a];t[o].parent!==null&&(s[o]=de(o,t))}return s};const B=Z,ge=fe,$={},be=Object.keys(B);function me(e){const t=function(...s){const n=s[0];return n==null?n:(n.length>1&&(s=n),e(s))};return"conversion"in e&&(t.conversion=e.conversion),t}function pe(e){const t=function(...s){const n=s[0];if(n==null)return n;n.length>1&&(s=n);const r=e(s);if(typeof r=="object")for(let a=r.length,o=0;o<a;o++)r[o]=Math.round(r[o]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}be.forEach(e=>{$[e]={},Object.defineProperty($[e],"channels",{value:B[e].channels}),Object.defineProperty($[e],"labels",{value:B[e].labels});const t=ge(e);Object.keys(t).forEach(n=>{const r=t[n];$[e][n]=pe(r),$[e][n].raw=me(r)})});var ye=$;const y=U(ye);var ve=Q,xe=function(){return ve.Date.now()},ke=xe,we=/\s/;function Me(e){for(var t=e.length;t--&&we.test(e.charAt(t)););return t}var $e=Me,Ee=$e,Ce=/^\s+/;function Se(e){return e&&e.slice(0,Ee(e)+1).replace(Ce,"")}var Oe=Se,Ie=Oe,W=A,Fe=Y,N=NaN,Re=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,je=/^0o[0-7]+$/i,Te=parseInt;function Pe(e){if(typeof e=="number")return e;if(Fe(e))return N;if(W(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=W(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ie(e);var s=_e.test(e);return s||je.test(e)?Te(e.slice(2),s?2:8):Re.test(e)?N:+e}var ze=Pe,qe=A,q=ke,X=ze,Be="Expected a function",He=Math.max,Le=Math.min;function We(e,t,s){var n,r,a,o,i,l,u=0,f=!1,h=!1,d=!0;if(typeof e!="function")throw new TypeError(Be);t=X(t)||0,qe(s)&&(f=!!s.leading,h="maxWait"in s,a=h?He(X(s.maxWait)||0,t):a,d="trailing"in s?!!s.trailing:d);function b(g){var x=n,S=r;return n=r=void 0,u=g,o=e.apply(S,x),o}function z(g){return u=g,i=setTimeout(w,t),f?b(g):o}function I(g){var x=g-l,S=g-u,L=t-x;return h?Le(L,a-S):L}function F(g){var x=g-l,S=g-u;return l===void 0||x>=t||x<0||h&&S>=a}function w(){var g=q();if(F(g))return M(g);i=setTimeout(w,I(g))}function M(g){return i=void 0,d&&n?b(g):(n=r=void 0,o)}function R(){i!==void 0&&clearTimeout(i),u=0,n=l=r=i=void 0}function m(){return i===void 0?o:M(q())}function C(){var g=q(),x=F(g);if(n=arguments,r=this,l=g,x){if(i===void 0)return z(l);if(h)return clearTimeout(i),i=setTimeout(w,t),b(l)}return i===void 0&&(i=setTimeout(w,t)),o}return C.cancel=R,C.flush=m,C}var Ne=We;const Xe=U(Ne);var Ge=k.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Ve=k(D)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Ae=k.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),De=k(ee)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Ue=k.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Ke=k.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Ze=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,G=({value:e,style:t,...s})=>{let n=`linear-gradient(${e}, ${e}), ${Ze}, linear-gradient(#fff, #fff)`;return p.createElement(Ke,{...s,style:{...t,backgroundImage:n}})},Je=k(te.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Qe=k(ne)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),J=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(J||{}),_=Object.values(J),Ye=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,et=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,tt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,H=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,nt=/^\s*#?([0-9a-f]{3})\s*$/i,rt={hex:se,rgb:ae,hsl:oe},j={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},V=e=>{let t=e==null?void 0:e.match(Ye);if(!t)return[0,0,0,1];let[,s,n,r,a=1]=t;return[s,n,r,a].map(Number)},E=e=>{if(!e)return;let t=!0;if(et.test(e)){let[o,i,l,u]=V(e),[f,h,d]=y.rgb.hsl([o,i,l])||[0,0,0];return{valid:t,value:e,keyword:y.rgb.keyword([o,i,l]),colorSpace:"rgb",rgb:e,hsl:`hsla(${f}, ${h}%, ${d}%, ${u})`,hex:`#${y.rgb.hex([o,i,l]).toLowerCase()}`}}if(tt.test(e)){let[o,i,l,u]=V(e),[f,h,d]=y.hsl.rgb([o,i,l])||[0,0,0];return{valid:t,value:e,keyword:y.hsl.keyword([o,i,l]),colorSpace:"hsl",rgb:`rgba(${f}, ${h}, ${d}, ${u})`,hsl:e,hex:`#${y.hsl.hex([o,i,l]).toLowerCase()}`}}let s=e.replace("#",""),n=y.keyword.rgb(s)||y.hex.rgb(s),r=y.rgb.hsl(n),a=e;if(/[^#a-f0-9]/i.test(e)?a=s:H.test(e)&&(a=`#${s}`),a.startsWith("#"))t=H.test(a);else try{y.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:y.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${r[0]}, ${r[1]}%, ${r[2]}%, 1)`,hex:a}},st=(e,t,s)=>{if(!e||!(t!=null&&t.valid))return j[s];if(s!=="hex")return(t==null?void 0:t[s])||j[s];if(!t.hex.startsWith("#"))try{return`#${y.keyword.hex(t.hex)}`}catch{return j.hex}let n=t.hex.match(nt);if(!n)return H.test(t.hex)?t.hex:j.hex;let[r,a,o]=n[1].split("");return`#${r}${r}${a}${a}${o}${o}`},at=(e,t)=>{let[s,n]=v.useState(e||""),[r,a]=v.useState(()=>E(s)),[o,i]=v.useState((r==null?void 0:r.colorSpace)||"hex");v.useEffect(()=>{let h=e||"",d=E(h);n(h),a(d),i((d==null?void 0:d.colorSpace)||"hex")},[e]);let l=v.useMemo(()=>st(s,r,o).toLowerCase(),[s,r,o]),u=v.useCallback(h=>{let d=E(h),b=(d==null?void 0:d.value)||h||"";n(b),b===""&&(a(void 0),t(void 0)),d&&(a(d),i(d.colorSpace),t(d.value))},[t]),f=v.useCallback(()=>{let h=_.indexOf(o)+1;h>=_.length&&(h=0),i(_[h]);let d=(r==null?void 0:r[_[h]])||"";n(d),t(d)},[r,o,t]);return{value:s,realValue:l,updateValue:u,color:r,colorSpace:o,cycleColorSpace:f}},P=e=>e.replace(/\s*/,"").toLowerCase(),ot=(e,t,s)=>{let[n,r]=v.useState(t!=null&&t.valid?[t]:[]);v.useEffect(()=>{t===void 0&&r([])},[t]);let a=v.useMemo(()=>(e||[]).map(i=>typeof i=="string"?E(i):i.title?{...E(i.color),keyword:i.title}:E(i.color)).concat(n).filter(Boolean).slice(-27),[e,n]),o=v.useCallback(i=>{i!=null&&i.valid&&(a.some(l=>P(l[s])===P(i[s]))||r(l=>l.concat(i)))},[s,a]);return{presets:a,addPreset:o}},it=({name:e,value:t,onChange:s,onFocus:n,onBlur:r,presetColors:a,startOpen:o=!1,argType:i})=>{var R;let l=v.useCallback(Xe(s,200),[s]),{value:u,realValue:f,updateValue:h,color:d,colorSpace:b,cycleColorSpace:z}=at(t,l),{presets:I,addPreset:F}=ot(a,d,b),w=rt[b],M=!!((R=i==null?void 0:i.table)!=null&&R.readonly);return p.createElement(Ge,{"aria-readonly":M},p.createElement(Ve,{startOpen:o,trigger:M?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>F(d),tooltip:p.createElement(Ae,null,p.createElement(w,{color:f==="transparent"?"#000000":f,onChange:h,onFocus:n,onBlur:r}),I.length>0&&p.createElement(Ue,null,I.map((m,C)=>p.createElement(D,{key:`${m.value}-${C}`,hasChrome:!1,tooltip:p.createElement(De,{note:m.keyword||m.value})},p.createElement(G,{value:m[b],active:d&&P(m[b])===P(d[b]),onClick:()=>h(m.value)})))))},p.createElement(G,{value:f,style:{margin:4}})),p.createElement(Je,{id:re(e),value:u,onChange:m=>h(m.target.value),onFocus:m=>m.target.select(),readOnly:M,placeholder:"Choose color..."}),u?p.createElement(Qe,{onClick:z}):null)},vt=it;export{it as ColorControl,vt as default};
