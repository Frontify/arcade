import{j as a}from"./jsx-runtime-DH9XN8A8.js";import{A as n}from"./index-BYX5Ewl3.js";import{m as p}from"./motion-EixWmitH.js";const i=({children:e,isOpen:t=!1,preventInitialAnimation:l=!1,animateOpacity:o=!0,"data-test-id":s="collapsible-wrap"})=>a.jsx(n,{initial:l?!1:void 0,children:t&&e&&a.jsx(p.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{height:"auto",overflow:"hidden",opacity:1,transitionEnd:{overflow:"visible"}},collapsed:{height:0,overflow:"hidden",opacity:o?0:1}},transition:{type:"tween"},"data-test-id":s,children:e})});i.displayName="FondueCollapsibleWrap";i.__docgenInfo={description:"",methods:[],displayName:"FondueCollapsibleWrap",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preventInitialAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},animateOpacity:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'collapsible-wrap'",computed:!1}}}};export{i as C};
