import{r as c}from"./index-DtJulBIN.js";function S(t,e,{checkForDefaultPrevented:u=!0}={}){return function(o){if(t==null||t(o),u===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function l(t){const e=c.useRef(t);return c.useEffect(()=>{e.current=t}),c.useMemo(()=>(...u)=>{var s;return(s=e.current)==null?void 0:s.call(e,...u)},[])}function b({prop:t,defaultProp:e,onChange:u=()=>{}}){const[s,o]=h({defaultProp:e,onChange:u}),n=t!==void 0,i=n?t:s,r=l(u),d=c.useCallback(f=>{if(n){const a=typeof f=="function"?f(t):f;a!==t&&r(a)}else o(f)},[n,t,o,r]);return[i,d]}function h({defaultProp:t,onChange:e}){const u=c.useState(t),[s]=u,o=c.useRef(s),n=l(e);return c.useEffect(()=>{o.current!==s&&(n(s),o.current=s)},[s,o,n]),u}var y=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};export{y as a,l as b,S as c,b as u};
