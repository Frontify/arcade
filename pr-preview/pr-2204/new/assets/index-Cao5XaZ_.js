import{e as n}from"./index-i66itsuO.js";import{c as _}from"./index-BwxsjnLo.js";import{u as S,S as I}from"./index-C7Xses_O.js";import{j as a}from"./jsx-runtime-BSxFkHFN.js";function w(s){const f=s+"CollectionProvider",[A,E]=_(f),[N,m]=A(f,{collectionRef:{current:null},itemMap:new Map}),u=c=>{const{scope:e,children:l}=c,o=n.useRef(null),t=n.useRef(new Map).current;return a.jsx(N,{scope:e,itemMap:t,collectionRef:o,children:l})};u.displayName=f;const d=s+"CollectionSlot",p=n.forwardRef((c,e)=>{const{scope:l,children:o}=c,t=m(d,l),r=S(e,t.collectionRef);return a.jsx(I,{ref:r,children:o})});p.displayName=d;const C=s+"CollectionItemSlot",R="data-radix-collection-item",x=n.forwardRef((c,e)=>{const{scope:l,children:o,...t}=c,r=n.useRef(null),M=S(e,r),i=m(C,l);return n.useEffect(()=>(i.itemMap.set(r,{ref:r,...t}),()=>void i.itemMap.delete(r))),a.jsx(I,{[R]:"",ref:M,children:o})});x.displayName=C;function T(c){const e=m(s+"CollectionConsumer",c);return n.useCallback(()=>{const o=e.collectionRef.current;if(!o)return[];const t=Array.from(o.querySelectorAll(`[${R}]`));return Array.from(e.itemMap.values()).sort((i,O)=>t.indexOf(i.ref.current)-t.indexOf(O.ref.current))},[e.collectionRef,e.itemMap])}return[{Provider:u,Slot:p,ItemSlot:x},T,E]}export{w as c};
