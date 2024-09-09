import{g as v}from"./_commonjsHelpers-BosuxZz1.js";import{j as o}from"./jsx-runtime-BlAj40OV.js";var w={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function s(){for(var r=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if(l==="string"||l==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var f=s.apply(null,a);f&&r.push(f)}}else if(l==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var i in a)n.call(a,i)&&a[i]&&r.push(i)}}}return r.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s})()})(w);var p=w.exports;const h=v(p),c=["var(--fc-primary-base-color)","var(--fc-secondary-base-color)","var(--fc-tertiary-base-color)"],A=["var(--fc-primary-weak-color)","var(--fc-secondary-weak-color)","var(--fc-tertiary-weak-color)"],d=["var(--fc-primary-hover-color)","var(--fc-secondary-hover-color)","var(--fc-tertiary-hover-color)"],u=["var(--fc-primary-hover-color-weak)","var(--fc-secondary-hover-color-weak)","var(--fc-tertiary-hover-color-weak)"],m=["var(--fc-primary-fill-color-weak)","var(--fc-secondary-fill-color-weak)","var(--fc-tertiary-fill-color-weak)"],C=["#0A2D94","#394599","#57629E","#006DA3","#0084A8","#009CAD","#00B5B5","#00CCB8","#00EBC0","#9CDBC9"],E=["rgba(10, 45, 148, 0.8)","rgba(57, 69, 153, 0.8)","rgba(87, 98, 158, 0.8)","rgba(0, 109, 163, 0.8)","rgba(0, 132, 168, 0.8)","rgba(0, 156, 173, 0.8)","rgba(0, 181, 181, 0.8)","rgba(0, 204, 184, 0.8)","rgba(0, 235, 192, 0.8)","rgba(156, 219, 201, 0.8)"],_="var(--fc-backfilled-base-color)",L="var(--fc-negative-base-color)",k="var(--fc-backfilled-weak-color)",B="var(--fc-negative-weak-color)",R="--fc-font-family",S="400",I=(e,n)=>{const s=n.findIndex(r=>r.name===e);return c[s%c.length]},g=e=>c[e%c.length],N=e=>d[e%d.length],j=e=>u[e%u.length],D=e=>m[e%m.length],O=({names:e,style:n,colorAccessor:s=g})=>o.jsx("div",{className:"tw-flex tw-flex-wrap tw-gap-6 tw-self-start",children:e.map((r,t)=>o.jsxs("span",{className:"tw-flex",children:[o.jsx(y,{color:s(t),style:n}),o.jsx("span",{className:"tw-font-body tw-text-body-small tw-text-text",children:r})]},`${r}-legend-${t}`))}),y=({color:e,style:n})=>{const s=n==="circle"?"tw-rounded-full":"tw-rounded-none";let r;switch(n){case"line":r="tw-w-12 tw-h-[2px]";break;case"rectangle":r="tw-w-12 tw-h-3";break;case"circle":r="tw-w-3 tw-h-3";break;case"square":r="tw-w-3 tw-h-3 tw-rounded-[1px]";break}return o.jsx("span",{className:`tw-self-center tw-mr-2 tw-inline-block ${r} ${s}`,style:{backgroundColor:e}})};O.__docgenInfo={description:"",methods:[],displayName:"Legend",props:{names:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},style:{required:!0,tsType:{name:"union",raw:"'line' | 'rectangle' | 'circle' | 'square'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'rectangle'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:""},colorAccessor:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => string | undefined",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:"",defaultValue:{value:"(index: number): string | undefined => BASE_COLORS[index % BASE_COLORS.length]",computed:!1}}}};export{R as B,C as G,E as H,O as L,S as T,B as W,g as a,L as b,h as c,_ as d,I as e,p as f,j as g,N as h,c as i,k as j,A as k,D as l};
