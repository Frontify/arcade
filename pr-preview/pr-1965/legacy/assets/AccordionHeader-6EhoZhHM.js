import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as o}from"./index-BwDkhjyp.js";import{I as m}from"./IconSize-BcCrF_mi.js";import{m as p}from"./merge-DI-veSMP.js";import{A as f}from"./AccordionHeaderIcon-19v82U_E.js";const u="fondue-accordion-header",d=({isOpen:a=!1,decorator:n,disabled:s=!1,children:l,"data-test-id":t=u})=>{const[r,c]=o.useState(null),i=e.jsx(f,{isOpen:a});return e.jsx("span",{"data-test-id":t,className:"tw-block tw-px-8 tw-py-6",children:e.jsxs("span",{"data-test-id":`${t}-container`,role:"navigation","aria-label":`${(r==null?void 0:r.innerText)||""}`,className:p(["tw-flex tw-items-center tw-gap-x-1.5 tw-w-full tw-flex-row",!s&&a&&"tw-text-text",!s&&!a&&"tw-text-text-weak hover:tw-text-text",s&&"tw-text-text-disabled"]),children:[o.isValidElement(n)&&e.jsx("span",{"data-test-id":`${t}-decorator`,className:"tw-shrink-0 tw-leading-4",children:o.cloneElement(n,{size:m.Size16})}),e.jsx("span",{ref:c,"data-test-id":`${t}-text`,className:"tw-text-left tw-text-m tw-font-normal",children:l}),i&&e.jsx("span",{"data-test-id":`${t}-icon-container`,className:"tw-ml-auto tw-shrink-0",children:i})]})})};d.displayName="FondueAccordionHeader";d.__docgenInfo={description:"",methods:[],displayName:"FondueAccordionHeader",props:{decorator:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-accordion-header'",computed:!1}}}};export{d as A};
