import{ae as k,a2 as I,a0 as V,c as W,af as D,ag as K}from"./DocsRenderer-PKQXORMH-GGwmdVJY.js";import{r as m,R as g}from"./index-BwDkhjyp.js";import{Z as N,H as T,u as A}from"./index-YYnwjzoa.js";import{g as U}from"./_commonjsHelpers-BosuxZz1.js";import{d as Z}from"./debounce-9TG1-aAV.js";import"./iframe-CJ462L0L.js";import"../sb-preview/runtime.js";import"./react-18-4gMM97tQ.js";import"./index-BxibOwXx.js";import"./index-D-8MO0q_.js";import"./cloneDeep-Jr_ykHKc.js";import"./_getPrototype-ZJwJlCcn.js";import"./index-CgFxOaCH.js";var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const x=J,_={};for(const e of Object.keys(x))_[x[e]]=e;const c={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var q=c;for(const e of Object.keys(c)){if(!("channels"in c[e]))throw new Error("missing channels property: "+e);if(!("labels"in c[e]))throw new Error("missing channel labels property: "+e);if(c[e].labels.length!==c[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:s}=c[e];delete c[e].channels,delete c[e].labels,Object.defineProperty(c[e],"channels",{value:t}),Object.defineProperty(c[e],"labels",{value:s})}c.rgb.hsl=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.min(t,s,n),o=Math.max(t,s,n),a=o-r;let l,i;o===r?l=0:t===o?l=(s-n)/a:s===o?l=2+(n-t)/a:n===o&&(l=4+(t-s)/a),l=Math.min(l*60,360),l<0&&(l+=360);const u=(r+o)/2;return o===r?i=0:u<=.5?i=a/(o+r):i=a/(2-o-r),[l,i*100,u*100]};c.rgb.hsv=function(e){let t,s,n,r,o;const a=e[0]/255,l=e[1]/255,i=e[2]/255,u=Math.max(a,l,i),f=u-Math.min(a,l,i),h=function(d){return(u-d)/6/f+1/2};return f===0?(r=0,o=0):(o=f/u,t=h(a),s=h(l),n=h(i),a===u?r=n-s:l===u?r=1/3+t-n:i===u&&(r=2/3+s-t),r<0?r+=1:r>1&&(r-=1)),[r*360,o*100,u*100]};c.rgb.hwb=function(e){const t=e[0],s=e[1];let n=e[2];const r=c.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(s,n));return n=1-1/255*Math.max(t,Math.max(s,n)),[r,o*100,n*100]};c.rgb.cmyk=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.min(1-t,1-s,1-n),o=(1-t-r)/(1-r)||0,a=(1-s-r)/(1-r)||0,l=(1-n-r)/(1-r)||0;return[o*100,a*100,l*100,r*100]};function Q(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}c.rgb.keyword=function(e){const t=_[e];if(t)return t;let s=1/0,n;for(const r of Object.keys(x)){const o=x[r],a=Q(e,o);a<s&&(s=a,n=r)}return n};c.keyword.rgb=function(e){return x[e]};c.rgb.xyz=function(e){let t=e[0]/255,s=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;const r=t*.4124+s*.3576+n*.1805,o=t*.2126+s*.7152+n*.0722,a=t*.0193+s*.1192+n*.9505;return[r*100,o*100,a*100]};c.rgb.lab=function(e){const t=c.rgb.xyz(e);let s=t[0],n=t[1],r=t[2];s/=95.047,n/=100,r/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(s-n),l=200*(n-r);return[o,a,l]};c.hsl.rgb=function(e){const t=e[0]/360,s=e[1]/100,n=e[2]/100;let r,o,a;if(s===0)return a=n*255,[a,a,a];n<.5?r=n*(1+s):r=n+s-n*s;const l=2*n-r,i=[0,0,0];for(let u=0;u<3;u++)o=t+1/3*-(u-1),o<0&&o++,o>1&&o--,6*o<1?a=l+(r-l)*6*o:2*o<1?a=r:3*o<2?a=l+(r-l)*(2/3-o)*6:a=l,i[u]=a*255;return i};c.hsl.hsv=function(e){const t=e[0];let s=e[1]/100,n=e[2]/100,r=s;const o=Math.max(n,.01);n*=2,s*=n<=1?n:2-n,r*=o<=1?o:2-o;const a=(n+s)/2,l=n===0?2*r/(o+r):2*s/(n+s);return[t,l*100,a*100]};c.hsv.rgb=function(e){const t=e[0]/60,s=e[1]/100;let n=e[2]/100;const r=Math.floor(t)%6,o=t-Math.floor(t),a=255*n*(1-s),l=255*n*(1-s*o),i=255*n*(1-s*(1-o));switch(n*=255,r){case 0:return[n,i,a];case 1:return[l,n,a];case 2:return[a,n,i];case 3:return[a,l,n];case 4:return[i,a,n];case 5:return[n,a,l]}};c.hsv.hsl=function(e){const t=e[0],s=e[1]/100,n=e[2]/100,r=Math.max(n,.01);let o,a;a=(2-s)*n;const l=(2-s)*r;return o=s*r,o/=l<=1?l:2-l,o=o||0,a/=2,[t,o*100,a*100]};c.hwb.rgb=function(e){const t=e[0]/360;let s=e[1]/100,n=e[2]/100;const r=s+n;let o;r>1&&(s/=r,n/=r);const a=Math.floor(6*t),l=1-n;o=6*t-a,a&1&&(o=1-o);const i=s+o*(l-s);let u,f,h;switch(a){default:case 6:case 0:u=l,f=i,h=s;break;case 1:u=i,f=l,h=s;break;case 2:u=s,f=l,h=i;break;case 3:u=s,f=i,h=l;break;case 4:u=i,f=s,h=l;break;case 5:u=l,f=s,h=i;break}return[u*255,f*255,h*255]};c.cmyk.rgb=function(e){const t=e[0]/100,s=e[1]/100,n=e[2]/100,r=e[3]/100,o=1-Math.min(1,t*(1-r)+r),a=1-Math.min(1,s*(1-r)+r),l=1-Math.min(1,n*(1-r)+r);return[o*255,a*255,l*255]};c.xyz.rgb=function(e){const t=e[0]/100,s=e[1]/100,n=e[2]/100;let r,o,a;return r=t*3.2406+s*-1.5372+n*-.4986,o=t*-.9689+s*1.8758+n*.0415,a=t*.0557+s*-.204+n*1.057,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,r=Math.min(Math.max(0,r),1),o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),[r*255,o*255,a*255]};c.xyz.lab=function(e){let t=e[0],s=e[1],n=e[2];t/=95.047,s/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;const r=116*s-16,o=500*(t-s),a=200*(s-n);return[r,o,a]};c.lab.xyz=function(e){const t=e[0],s=e[1],n=e[2];let r,o,a;o=(t+16)/116,r=s/500+o,a=o-n/200;const l=o**3,i=r**3,u=a**3;return o=l>.008856?l:(o-16/116)/7.787,r=i>.008856?i:(r-16/116)/7.787,a=u>.008856?u:(a-16/116)/7.787,r*=95.047,o*=100,a*=108.883,[r,o,a]};c.lab.lch=function(e){const t=e[0],s=e[1],n=e[2];let r;r=Math.atan2(n,s)*360/2/Math.PI,r<0&&(r+=360);const a=Math.sqrt(s*s+n*n);return[t,a,r]};c.lch.lab=function(e){const t=e[0],s=e[1],r=e[2]/360*2*Math.PI,o=s*Math.cos(r),a=s*Math.sin(r);return[t,o,a]};c.rgb.ansi16=function(e,t=null){const[s,n,r]=e;let o=t===null?c.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),o===0)return 30;let a=30+(Math.round(r/255)<<2|Math.round(n/255)<<1|Math.round(s/255));return o===2&&(a+=60),a};c.hsv.ansi16=function(e){return c.rgb.ansi16(c.hsv.rgb(e),e[2])};c.rgb.ansi256=function(e){const t=e[0],s=e[1],n=e[2];return t===s&&s===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(s/255*5)+Math.round(n/255*5)};c.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const s=(~~(e>50)+1)*.5,n=(t&1)*s*255,r=(t>>1&1)*s*255,o=(t>>2&1)*s*255;return[n,r,o]};c.ansi256.rgb=function(e){if(e>=232){const o=(e-232)*10+8;return[o,o,o]}e-=16;let t;const s=Math.floor(e/36)/5*255,n=Math.floor((t=e%36)/6)/5*255,r=t%6/5*255;return[s,n,r]};c.rgb.hex=function(e){const s=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(s.length)+s};c.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let s=t[0];t[0].length===3&&(s=s.split("").map(l=>l+l).join(""));const n=parseInt(s,16),r=n>>16&255,o=n>>8&255,a=n&255;return[r,o,a]};c.rgb.hcg=function(e){const t=e[0]/255,s=e[1]/255,n=e[2]/255,r=Math.max(Math.max(t,s),n),o=Math.min(Math.min(t,s),n),a=r-o;let l,i;return a<1?l=o/(1-a):l=0,a<=0?i=0:r===t?i=(s-n)/a%6:r===s?i=2+(n-t)/a:i=4+(t-s)/a,i/=6,i%=1,[i*360,a*100,l*100]};c.hsl.hcg=function(e){const t=e[1]/100,s=e[2]/100,n=s<.5?2*t*s:2*t*(1-s);let r=0;return n<1&&(r=(s-.5*n)/(1-n)),[e[0],n*100,r*100]};c.hsv.hcg=function(e){const t=e[1]/100,s=e[2]/100,n=t*s;let r=0;return n<1&&(r=(s-n)/(1-n)),[e[0],n*100,r*100]};c.hcg.rgb=function(e){const t=e[0]/360,s=e[1]/100,n=e[2]/100;if(s===0)return[n*255,n*255,n*255];const r=[0,0,0],o=t%1*6,a=o%1,l=1-a;let i=0;switch(Math.floor(o)){case 0:r[0]=1,r[1]=a,r[2]=0;break;case 1:r[0]=l,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=a;break;case 3:r[0]=0,r[1]=l,r[2]=1;break;case 4:r[0]=a,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=l}return i=(1-s)*n,[(s*r[0]+i)*255,(s*r[1]+i)*255,(s*r[2]+i)*255]};c.hcg.hsv=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);let r=0;return n>0&&(r=t/n),[e[0],r*100,n*100]};c.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],r*100,n*100]};c.hcg.hwb=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);return[e[0],(n-t)*100,(1-n)*100]};c.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};c.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};c.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};c.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};c.gray.hsl=function(e){return[0,0,e[0]]};c.gray.hsv=c.gray.hsl;c.gray.hwb=function(e){return[0,100,e[0]]};c.gray.cmyk=function(e){return[0,0,0,e[0]]};c.gray.lab=function(e){return[e[0],0,0]};c.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n};c.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const E=q;function Y(){const e={},t=Object.keys(E);for(let s=t.length,n=0;n<s;n++)e[t[n]]={distance:-1,parent:null};return e}function ee(e){const t=Y(),s=[e];for(t[e].distance=0;s.length;){const n=s.pop(),r=Object.keys(E[n]);for(let o=r.length,a=0;a<o;a++){const l=r[a],i=t[l];i.distance===-1&&(i.distance=t[n].distance+1,i.parent=n,s.unshift(l))}}return t}function te(e,t){return function(s){return t(e(s))}}function ne(e,t){const s=[t[e].parent,e];let n=E[t[e].parent][e],r=t[e].parent;for(;t[r].parent;)s.unshift(t[r].parent),n=te(E[t[r].parent][r],n),r=t[r].parent;return n.conversion=s,n}var re=function(e){const t=ee(e),s={},n=Object.keys(t);for(let r=n.length,o=0;o<r;o++){const a=n[o];t[a].parent!==null&&(s[a]=ne(a,t))}return s};const O=q,se=re,w={},oe=Object.keys(O);function ae(e){const t=function(...s){const n=s[0];return n==null?n:(n.length>1&&(s=n),e(s))};return"conversion"in e&&(t.conversion=e.conversion),t}function le(e){const t=function(...s){const n=s[0];if(n==null)return n;n.length>1&&(s=n);const r=e(s);if(typeof r=="object")for(let o=r.length,a=0;a<o;a++)r[a]=Math.round(r[a]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}oe.forEach(e=>{w[e]={},Object.defineProperty(w[e],"channels",{value:O[e].channels}),Object.defineProperty(w[e],"labels",{value:O[e].labels});const t=se(e);Object.keys(t).forEach(n=>{const r=t[n];w[e][n]=le(r),w[e][n].raw=ae(r)})});var ce=w;const b=U(ce);var ie=k.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),ue=k(I)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),he=k.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),de=k(V)(({theme:e})=>({fontFamily:e.typography.fonts.base})),fe=k.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),ge=k.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),be=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,z=({value:e,style:t,...s})=>{let n=`linear-gradient(${e}, ${e}), ${be}, linear-gradient(#fff, #fff)`;return g.createElement(ge,{...s,style:{...t,backgroundImage:n}})},me=k(W.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),pe=k(D)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),B=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(B||{}),M=Object.values(B),ye=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ke=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,we=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,F=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ve=/^\s*#?([0-9a-f]{3})\s*$/i,xe={hex:N,rgb:T,hsl:A},$={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},P=e=>{let t=e==null?void 0:e.match(ye);if(!t)return[0,0,0,1];let[,s,n,r,o=1]=t;return[s,n,r,o].map(Number)},v=e=>{if(!e)return;let t=!0;if(ke.test(e)){let[a,l,i,u]=P(e),[f,h,d]=b.rgb.hsl([a,l,i])||[0,0,0];return{valid:t,value:e,keyword:b.rgb.keyword([a,l,i]),colorSpace:"rgb",rgb:e,hsl:`hsla(${f}, ${h}%, ${d}%, ${u})`,hex:`#${b.rgb.hex([a,l,i]).toLowerCase()}`}}if(we.test(e)){let[a,l,i,u]=P(e),[f,h,d]=b.hsl.rgb([a,l,i])||[0,0,0];return{valid:t,value:e,keyword:b.hsl.keyword([a,l,i]),colorSpace:"hsl",rgb:`rgba(${f}, ${h}, ${d}, ${u})`,hsl:e,hex:`#${b.hsl.hex([a,l,i]).toLowerCase()}`}}let s=e.replace("#",""),n=b.keyword.rgb(s)||b.hex.rgb(s),r=b.rgb.hsl(n),o=e;if(/[^#a-f0-9]/i.test(e)?o=s:F.test(e)&&(o=`#${s}`),o.startsWith("#"))t=F.test(o);else try{b.keyword.hex(o)}catch{t=!1}return{valid:t,value:o,keyword:b.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${r[0]}, ${r[1]}%, ${r[2]}%, 1)`,hex:o}},Me=(e,t,s)=>{if(!e||!(t!=null&&t.valid))return $[s];if(s!=="hex")return(t==null?void 0:t[s])||$[s];if(!t.hex.startsWith("#"))try{return`#${b.keyword.hex(t.hex)}`}catch{return $.hex}let n=t.hex.match(ve);if(!n)return F.test(t.hex)?t.hex:$.hex;let[r,o,a]=n[1].split("");return`#${r}${r}${o}${o}${a}${a}`},$e=(e,t)=>{let[s,n]=m.useState(e||""),[r,o]=m.useState(()=>v(s)),[a,l]=m.useState((r==null?void 0:r.colorSpace)||"hex");m.useEffect(()=>{let h=e||"",d=v(h);n(h),o(d),l((d==null?void 0:d.colorSpace)||"hex")},[e]);let i=m.useMemo(()=>Me(s,r,a).toLowerCase(),[s,r,a]),u=m.useCallback(h=>{let d=v(h),y=(d==null?void 0:d.value)||h||"";n(y),y===""&&(o(void 0),t(void 0)),d&&(o(d),l(d.colorSpace),t(d.value))},[t]),f=m.useCallback(()=>{let h=M.indexOf(a)+1;h>=M.length&&(h=0),l(M[h]);let d=(r==null?void 0:r[M[h]])||"";n(d),t(d)},[r,a,t]);return{value:s,realValue:i,updateValue:u,color:r,colorSpace:a,cycleColorSpace:f}},C=e=>e.replace(/\s*/,"").toLowerCase(),Ee=(e,t,s)=>{let[n,r]=m.useState(t!=null&&t.valid?[t]:[]);m.useEffect(()=>{t===void 0&&r([])},[t]);let o=m.useMemo(()=>(e||[]).map(l=>typeof l=="string"?v(l):l.title?{...v(l.color),keyword:l.title}:v(l.color)).concat(n).filter(Boolean).slice(-27),[e,n]),a=m.useCallback(l=>{l!=null&&l.valid&&(o.some(i=>C(i[s])===C(l[s]))||r(i=>i.concat(l)))},[s,o]);return{presets:o,addPreset:a}},Ce=({name:e,value:t,onChange:s,onFocus:n,onBlur:r,presetColors:o,startOpen:a=!1,argType:l})=>{var j;let i=m.useCallback(Z(s,200),[s]),{value:u,realValue:f,updateValue:h,color:d,colorSpace:y,cycleColorSpace:H}=$e(t,i),{presets:R,addPreset:L}=Ee(o,d,y),G=xe[y],S=!!((j=l==null?void 0:l.table)!=null&&j.readonly);return g.createElement(ie,{"aria-readonly":S},g.createElement(ue,{startOpen:a,trigger:S?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>L(d),tooltip:g.createElement(he,null,g.createElement(G,{color:f==="transparent"?"#000000":f,onChange:h,onFocus:n,onBlur:r}),R.length>0&&g.createElement(fe,null,R.map((p,X)=>g.createElement(I,{key:`${p.value}-${X}`,hasChrome:!1,tooltip:g.createElement(de,{note:p.keyword||p.value})},g.createElement(z,{value:p[y],active:d&&C(p[y])===C(d[y]),onClick:()=>h(p.value)})))))},g.createElement(z,{value:f,style:{margin:4}})),g.createElement(me,{id:K(e),value:u,onChange:p=>h(p.target.value),onFocus:p=>p.target.select(),readOnly:S,placeholder:"Choose color..."}),u?g.createElement(pe,{onClick:H}):null)},Ge=Ce;export{Ce as ColorControl,Ge as default};
