import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as p}from"./index-BwDkhjyp.js";import{I as g}from"./InputLabel-DrkD0R8a.js";import{m as f}from"./merge-DI-veSMP.js";import{V as u}from"./validation-C9S5KgfE.js";var x=(e=>(e.Primary="Primary",e.Positive="Positive",e.Danger="Danger",e))(x||{});const v={Primary:u.Default,Positive:u.Success,Danger:u.Error},m=({text:e,disabled:i,style:o,fullWidth:l=!1,"data-test-id":t="form-control"})=>{let r;switch(!0){case i:r="tw-text-black-40";break;case o==="Danger":r="tw-text-red-60";break;case o==="Positive":r="tw-text-green-60";break;default:r="tw-text-black-80";break}return a.jsx("span",{"data-test-id":`${t}-helper-text`,className:`tw-text-s tw-font-sans ${l?"tw-w-full":""} ${r}`,children:e})};m.displayName="FondueHelperText";var k=(e=>(e.Before="Before",e.After="After",e))(k||{}),b=(e=>(e.Horizontal="Horizontal",e.Vertical="Vertical",e))(b||{});const y=({label:e,children:i,extra:o,name:l,helper:t,disabled:r,clickable:w,direction:n="Vertical",style:d="Primary","data-test-id":s="form-control"})=>{const c=(t==null?void 0:t.position)==="Before";return a.jsxs("div",{"data-test-id":s,"data-name":l,className:f(["tw-flex tw-items-center tw-gap-2",n==="Horizontal"?"tw-flex-row":"tw-w-full tw-flex-col"]),children:[((e==null?void 0:e.children)||o)&&a.jsxs("div",{className:f(["tw-flex tw-flew-row tw-items-center tw-justify-between",n==="Vertical"&&"tw-w-full"]),children:[(e==null?void 0:e.children)&&a.jsx(g,{...e,disabled:r,clickable:w}),o&&a.jsx("span",{"data-test-id":`${s}-extra`,className:"tw-pl-2 tw-text-black-80 tw-font-sans tw-text-s tw-whitespace-nowrap",children:o})]}),(t==null?void 0:t.text)&&c&&a.jsx(m,{style:d,fullWidth:n==="Vertical",text:t.text,disabled:r,"data-test-id":s}),i&&a.jsx("div",{className:n==="Vertical"?"tw-w-full tw-grid tw-grid-cols-1 tw-gap-5":"",children:p.isValidElement(i)?p.cloneElement(i,{id:(e==null?void 0:e.htmlFor)??i.props.id,disabled:r,validation:v[d]}):i}),(t==null?void 0:t.text)&&!c&&a.jsx(m,{fullWidth:n==="Vertical",text:t.text,disabled:r,style:d,"data-test-id":s})]})};y.displayName="FondueFormControl";y.__docgenInfo={description:"",methods:[],displayName:"FondueFormControl",props:{direction:{required:!1,tsType:{name:"FormControlDirection"},description:"",defaultValue:{value:"FormControlDirection.Vertical",computed:!0}},disabled:{required:!1,tsType:{name:"boolean"},description:""},clickable:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    id?: string;
    htmlFor: string;
    required?: boolean;
    disabled?: boolean;
    clickable?: boolean;
    tooltip?: InputLabelTooltipProps;
    bold?: boolean;
    children?: ReactNode;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"htmlFor",value:{name:"string",required:!0}},{key:"required",value:{name:"boolean",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"clickable",value:{name:"boolean",required:!1}},{key:"tooltip",value:{name:"union",raw:`| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
| (LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]`,elements:[{name:"unknown"},{name:"Array",elements:[{name:"unknown"}],raw:"(LegacyTooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[]"}],required:!1}},{key:"bold",value:{name:"boolean",required:!1}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"literal",value:"'disabled'"}],raw:"Omit<InputLabelProps, 'disabled'>"},description:""},extra:{required:!1,tsType:{name:"ReactNode"},description:""},helper:{required:!1,tsType:{name:"intersection",raw:"Omit<HelperTextProps, 'disabled' | 'style'> & { position?: HelperPosition }",elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
    text: string;
    style: FormControlStyle;
    disabled?: boolean;
    fullWidth?: boolean;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"style",value:{name:"FormControlStyle",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"fullWidth",value:{name:"boolean",required:!1}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"union",raw:"'disabled' | 'style'",elements:[{name:"literal",value:"'disabled'"},{name:"literal",value:"'style'"}]}],raw:"Omit<HelperTextProps, 'disabled' | 'style'>"},{name:"signature",type:"object",raw:"{ position?: HelperPosition }",signature:{properties:[{key:"position",value:{name:"HelperPosition",required:!1}}]}}]},description:""},style:{required:!1,tsType:{name:"FormControlStyle"},description:"",defaultValue:{value:"FormControlStyle.Primary",computed:!0}},name:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'form-control'",computed:!1}}}};export{y as F,k as H,x as a,b};
