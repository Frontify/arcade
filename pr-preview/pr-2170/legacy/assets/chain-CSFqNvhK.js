import{a as d,$ as o,c as s}from"./SSRProvider-CYXx33DY.js";import{r as l}from"./index-BwDkhjyp.js";function $(n){let[e,c]=l.useState(n),r=l.useRef(null),t=d(()=>{if(!r.current)return;let f=r.current.next();if(f.done){r.current=null;return}e===f.value?t():c(f.value)});o(()=>{r.current&&t()});let a=d(f=>{r.current=f(e),t()});return[e,a]}let b=!!(typeof window<"u"&&window.document&&window.document.createElement),u=new Map;function i(n){let[e,c]=l.useState(n),r=l.useRef(null),t=s(e),a=l.useCallback(f=>{r.current=f},[]);return b&&(u.has(t)&&!u.get(t).includes(a)?u.set(t,[...u.get(t),a]):u.set(t,[a])),o(()=>{let f=t;return()=>{u.delete(f)}},[t]),l.useEffect(()=>{let f=r.current;f&&(r.current=null,c(f))}),t}function m(n,e){if(n===e)return n;let c=u.get(n);if(c)return c.forEach(t=>t(e)),e;let r=u.get(e);return r?(r.forEach(t=>t(n)),n):e}function w(n=[]){let e=i(),[c,r]=$(e),t=l.useCallback(()=>{r(function*(){yield e,yield document.getElementById(e)?e:void 0})},[e,r]);return o(t,[e,t,...n]),c}function v(...n){return(...e)=>{for(let c of n)typeof c=="function"&&c(...e)}}export{i as $,v as a,w as b,m as c};
