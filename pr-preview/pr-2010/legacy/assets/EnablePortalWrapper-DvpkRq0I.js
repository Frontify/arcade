import{r as i}from"./index-BwDkhjyp.js";import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{P as u}from"./Portal-0C9N3MSP.js";const d="auto",l=t=>{let e="auto";if(t.current){const{innerHeight:r}=window,{bottom:a}=t.current.getBoundingClientRect();e=`${Math.max(r-(a+33+8),130)}px`}return e},f=(t,{isOpen:e,autoResize:r})=>{const[a,n]=i.useState(d);return i.useLayoutEffect(()=>{const o=()=>n(l(t));return r&&e?(o(),window.addEventListener("resize",o)):r&&!e&&n(d),()=>{e&&r&&window.removeEventListener("resize",o)}},[e,r,t]),{maxHeight:a}},p=({enablePortal:t=!0,children:e})=>t?s.jsx(u,{children:e}):s.jsx(s.Fragment,{children:e});p.displayName="FondueEnablePortalWrapper";p.__docgenInfo={description:"",methods:[],displayName:"FondueEnablePortalWrapper",props:{enablePortal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{d as D,p as E,f as u};
