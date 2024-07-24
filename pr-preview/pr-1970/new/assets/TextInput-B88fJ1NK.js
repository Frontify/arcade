import{j as r}from"./jsx-runtime-DBEcOq3S.js";import{r as o}from"./index-DtJulBIN.js";import{r as y,l as T}from"./fondue-icons311-Cyz8yLVl.js";import{c as f}from"./styleUtilities-T76WvCte.js";const g="_root_1nsu5_5",E="_input_1nsu5_55",w="_slot_1nsu5_74",x="_iconSuccess_1nsu5_124",q="_iconError_1nsu5_132",b="_loadingStatus_1nsu5_140",M="_spin_1nsu5_1",l={root:g,input:E,slot:w,iconSuccess:x,iconError:q,loadingStatus:b,spin:M,"tw-dark":"_tw-dark_1nsu5_172"},m=({children:s,className:u,status:e="neutral","data-test-id":a="fondue-text-input",...t},h)=>{const d=o.useRef(!1);return r.jsxs("div",{className:f(l.root,u),"data-status":e,"data-test-id":a,children:[e==="loading"?r.jsx("div",{className:l.loadingStatus,"data-test-id":`${a}-loader`}):null,r.jsx("input",{onMouseDown:n=>{d.current=!0,n.currentTarget.dataset.showFocusRing="false"},type:"text",...t,onFocus:n=>{var i;d.current||(n.target.dataset.showFocusRing="true"),(i=t.onFocus)==null||i.call(t,n)},onBlur:n=>{var i;n.target.dataset.showFocusRing="false",d.current=!1,(i=t.onBlur)==null||i.call(t,n)},ref:h,className:l.input,"aria-invalid":e==="error"}),e==="success"?r.jsx(y,{size:16,className:l.iconSuccess,"data-test-id":`${a}-success-icon`}):null,e==="error"?r.jsx(T,{size:16,className:l.iconError,"data-test-id":`${a}-error-icon`}):null,s]})};m.displayName="TextField.Root";const p=({name:s,className:u,...e},a)=>r.jsx("div",{"data-slot":!0,"data-name":s,...e,ref:a,className:f(l.slot,u)});p.displayName="TextField.Slot";const c=o.forwardRef(m),L=o.forwardRef(p),v=c;v.Root=c;v.Slot=L;m.__docgenInfo={description:"",methods:[],displayName:"TextField.Root",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:"The place where the input slots are placed"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`The default value of the text input
Used for uncontrolled components`},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"The controlled value of the text input"},type:{required:!1,tsType:{name:"union",raw:"'date' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'",elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'email'"},{name:"literal",value:"'hidden'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'time'"},{name:"literal",value:"'url'"}]},description:`Type of the text input
@default "text"`},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder in the text input"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the text input
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`Make the text input required in form
@default false`},spellCheck:{required:!1,tsType:{name:"boolean"},description:`Make the text input spell-checkable
@default true`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Make the text input read-only
@default false`},autoComplete:{required:!1,tsType:{name:"string"},description:`Set the type of input so autocomplete can help the user
@default "on"`},maxLength:{required:!1,tsType:{name:"number"},description:"The maximum length of the text input"},status:{required:!1,tsType:{name:"union",raw:"'neutral' | 'success' | 'error' | 'loading'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'loading'"}]},description:`Status of the text input
@default "neutral"`,defaultValue:{value:"'neutral'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text input value changes"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text input is blurred"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text input is focused"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLInputElement"}],raw:"KeyboardEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when a key is pressed"},onKeyUp:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLInputElement"}],raw:"KeyboardEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when a key is released"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text inside of text input is selected"},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-text-input'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"TextField.Slot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"ForwardedRefTextFieldRoot",props:{id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:"The place where the input slots are placed"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`The default value of the text input
Used for uncontrolled components`},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"The controlled value of the text input"},type:{required:!1,tsType:{name:"union",raw:"'date' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'",elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'email'"},{name:"literal",value:"'hidden'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'text'"},{name:"literal",value:"'time'"},{name:"literal",value:"'url'"}]},description:`Type of the text input
@default "text"`},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder in the text input"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the text input
@default false`},required:{required:!1,tsType:{name:"boolean"},description:`Make the text input required in form
@default false`},spellCheck:{required:!1,tsType:{name:"boolean"},description:`Make the text input spell-checkable
@default true`},readOnly:{required:!1,tsType:{name:"boolean"},description:`Make the text input read-only
@default false`},autoComplete:{required:!1,tsType:{name:"string"},description:`Set the type of input so autocomplete can help the user
@default "on"`},maxLength:{required:!1,tsType:{name:"number"},description:"The maximum length of the text input"},status:{required:!1,tsType:{name:"union",raw:"'neutral' | 'success' | 'error' | 'loading'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'loading'"}]},description:`Status of the text input
@default "neutral"`,defaultValue:{value:"'neutral'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text input value changes"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text input is blurred"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text input is focused"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLInputElement"}],raw:"KeyboardEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when a key is pressed"},onKeyUp:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLInputElement"}],raw:"KeyboardEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when a key is released"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SyntheticEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"SyntheticEvent",elements:[{name:"HTMLInputElement"}],raw:"SyntheticEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"Event handler called when the text inside of text input is selected"},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-text-input'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};export{v as T,m as a,p as b};
