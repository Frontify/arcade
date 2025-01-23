import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as s}from"./index-BwDkhjyp.js";import{a as j}from"./focusStyle-CBFElZiz.js";import{m as d}from"./merge-DI-veSMP.js";import{I as o}from"./IconSize-BcCrF_mi.js";import{I as ie}from"./IconPen16-uQGM0vE0.js";import"./_commonjsHelpers-BosuxZz1.js";const L={getLabel:e=>{let n="";const i=r=>{s.Children.map(r,t=>{typeof t=="string"?n+=t:t!=null&&t.props&&i(t==null?void 0:t.props.children)})};return i(e),n},copyStyles:e=>({fontSize:window.getComputedStyle(e).getPropertyValue("font-size"),lineHeight:window.getComputedStyle(e).getPropertyValue("line-height"),letterSpacing:window.getComputedStyle(e).getPropertyValue("letter-spacing"),minWidth:window.getComputedStyle(e).getPropertyValue("width"),fontWeight:window.getComputedStyle(e).getPropertyValue("font-weight")})};var g=(e=>(e.INPUT="INPUT",e.LABEL="LABEL",e))(g||{});const u=({onEditableSave:e,onModeChange:n,onAdditionalValueSave:i,children:r,options:t,isOverflowing:x=!1,"data-test-id":Z="editable-node-container"})=>{const h=L.getLabel(r),[T,P]=s.useState(h),[b,I]=s.useState("LABEL"),[z,ee]=s.useState(),y=s.useRef(null),te=l=>P(l.target.value),N=l=>{I("LABEL"),n&&n("LABEL"),t!=null&&t.additionalValues&&i&&i(t.additionalValues,l.target.value),e&&e(l.target.value)},S=l=>()=>{P(l),I("INPUT"),n&&n("INPUT")},ae=l=>{l.key==="Enter"&&N(l)},ne=l=>N(l);s.useEffect(()=>I((t==null?void 0:t.mode)??"LABEL"),[t==null?void 0:t.mode]);const le=t!=null&&t.enableDoubleClick?{onDoubleClick:S(h),onKeyPress:l=>l.key==="Enter"&&S(h)()}:{onClick:S(h)};s.useEffect(()=>{var l;v.current&&ee(L.copyStyles(v.current)),b==="INPUT"&&((l=y.current)==null||l.select())},[b,y,r]);const v=s.useRef(),se=r&&s.cloneElement(r,{ref:v});return a.jsxs("div",{"data-test-id":Z,className:d(["tw-relative tw-h-full",(t==null?void 0:t.removeBoxPadding)===!0?"":"tw-p-2"]),children:[b==="INPUT"?a.jsx("div",{className:d(["tw-flex tw-items-center",(t==null?void 0:t.isSlimInputField)===!0?"-tw-translate-x-[0.315rem] -tw-translate-y-[0.07rem]":"-tw-translate-x-[0.81rem] -tw-translate-y-[0.56rem]"]),children:a.jsxs("div",{"data-test-id":"editable-input",className:d(["tw-relative",x&&"tw-w-full tw-flex tw-items-center"]),children:[a.jsx("input",{ref:y,type:"text",className:d([(t==null?void 0:t.isSlimInputField)===!0?"focus-visible:tw-outline-none":j,"tw-absolute tw-w-full tw-text-text tw-border tw-rounded tw-bg-base tw-border-solid",(t==null?void 0:t.isSlimInputField)===!0?"tw-py-0 tw-px-1":"tw-px-3 tw-py-2"]),style:z,value:T,onChange:te,onKeyDown:ae,onBlur:ne}),a.jsx("span",{"aria-hidden":"true",className:d(["tw-rounded tw-px-4 tw-py-2 tw-bg-base tw-truncate",(t==null?void 0:t.isSlimInputField)===!0&&"tw-py-0 tw-px-2",x&&"tw-w-0"]),style:z,children:T})]})}):null,a.jsx("button",{style:{display:b==="INPUT"?"none":"flex"},className:d([x&&"tw-w-full","tw-h-full tw-items-center",j]),...le,"data-test-id":"node-link-name","aria-pressed":"false",children:se})]})};u.displayName="FondueEditableText";u.__docgenInfo={description:`Component to switch between Label and Input state. Wraps the Children
with a Button, to allow for accessibility and copies styles to input field

Events:
- onEditableSave         // When changing from input to label state
- onModeChange           // Indicates which state is active
- onAdditionalValueSave  // Similar to editable Save with additional Values provided

Options properties:
- mode:                   enum EditableMode  // {INPUT = 'INPUT',LABEL = 'LABEL'}
- enableDoubleClick:      boolean            // should the input be triggered by a double click or single click
- isSlimInputField:       boolean            // removes y padding
- additionalValues?:      string             // additional Values like ID`,methods:[],displayName:"FondueEditableText",props:{children:{required:!1,tsType:{name:"ReactElement"},description:""},onAdditionalValueSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(additionalValue: string, value: string) => void",signature:{arguments:[{type:{name:"string"},name:"additionalValue"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onEditableSave:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onModeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(editableState?: EditableMode) => void",signature:{arguments:[{type:{name:"EditableMode"},name:"editableState"}],return:{name:"void"}}},description:""},options:{required:!1,tsType:{name:"EditableOptionProps"},description:""},isOverflowing:{required:!1,tsType:{name:"boolean"},description:"@deprecated Temporary solution for text with ellipisis in Tree Component",defaultValue:{value:"false",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'editable-node-container'",computed:!1}}}};function H(e){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,className:"tw-flex tw-items-center tw-justify-center tw-fill-current",name:"IconPen12","aria-hidden":"true",...e,children:a.jsxs("g",{fill:"none",children:[a.jsx("g",{clipPath:"url(#Pen12)",children:a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.703 2.708 9.409 1.414l-.955.955 1.294 1.293zM2.288 8.536l5.46-5.46L9.04 4.37 3.58 9.83l-1.658.364zm1.793 2.207 7.329-7.328a1 1 0 0 0 0-1.415L10.116.707a1 1 0 0 0-1.414 0L1.374 8.035.946 9.98a1 1 0 0 0 1.192 1.192zm3.573-.664a.5.5 0 0 0 0 1h2.965a.5.5 0 1 0 0-1z",clipRule:"evenodd"})}),a.jsx("defs",{children:a.jsx("clipPath",{id:"Pen12",children:a.jsx("path",{fill:"#fff",d:"M0 0h12v12H0z"})})})]})})}const re=s.memo(H);H.__docgenInfo={description:"@deprecated Import Icons from `@frontify/fondue/components` instead.",methods:[],displayName:"IconPen12",props:{size:{required:!1,tsType:{name:"IconSize"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:""}}};function K(e){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,className:"tw-flex tw-items-center tw-justify-center tw-fill-current",name:"IconPen20","aria-hidden":"true",...e,children:a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"m16.89 5.89-1.769-1.769-1.283 1.283 1.77 1.77zM4.946 14.296l7.832-7.831 1.769 1.769-7.832 7.832-2.268.499zm2.52 3.14L17.95 6.951a1.5 1.5 0 0 0 0-2.121l-1.77-1.77a1.5 1.5 0 0 0-2.12 0L3.574 13.547l-.761 3.46a1 1 0 0 0 1.191 1.192zm5.284-.936a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}const oe=s.memo(K);K.__docgenInfo={description:"@deprecated Import Icons from `@frontify/fondue/components` instead.",methods:[],displayName:"IconPen20",props:{size:{required:!1,tsType:{name:"IconSize"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:""}}};function Y(e){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,className:"tw-flex tw-items-center tw-justify-center tw-fill-current",name:"IconPen24","aria-hidden":"true",...e,children:a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"m20.107 6.107-1.632-1.632a.5.5 0 0 0-.708 0L16.34 5.903l2.34 2.34 1.428-1.429a.5.5 0 0 0 0-.707M6.254 15.988l9.025-9.024 2.339 2.339-9.025 9.025-3 .66zm3.09 3.71L21.167 7.875a2 2 0 0 0 0-2.829l-1.632-1.632a2 2 0 0 0-2.828 0L4.883 15.238l-.922 4.192a1 1 0 0 0 1.191 1.191zm5.406-.198a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})})}const de=s.memo(Y);Y.__docgenInfo={description:"@deprecated Import Icons from `@frontify/fondue/components` instead.",methods:[],displayName:"IconPen24",props:{size:{required:!1,tsType:{name:"IconSize"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:""}}};function G(e){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,className:"tw-flex tw-items-center tw-justify-center tw-fill-current",name:"IconPen32","aria-hidden":"true",...e,children:a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"m24.182 11.218 2.122-2.122-2.829-2.828-2.121 2.121zM8.515 21.228 19.94 9.804l2.828 2.829-11.425 11.425-3.627.798zm3.83 4.656 15.373-15.373a2 2 0 0 0 0-2.829L24.89 4.854a2 2 0 0 0-2.829 0L6.687 20.228l-1.26 5.725a1 1 0 0 0 1.192 1.192zM18 26a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z",clipRule:"evenodd"})})}const ce=s.memo(G);G.__docgenInfo={description:"@deprecated Import Icons from `@frontify/fondue/components` instead.",methods:[],displayName:"IconPen32",props:{size:{required:!1,tsType:{name:"IconSize"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:""}}};const E=e=>{const n=e.size||o.Size16;return a.jsxs("span",{children:[n===o.Size12&&!e.filled&&a.jsx(re,{...e}),n===o.Size16&&!e.filled&&a.jsx(ie,{...e}),n===o.Size20&&!e.filled&&a.jsx(oe,{...e}),n===o.Size24&&!e.filled&&a.jsx(de,{...e}),n===o.Size32&&!e.filled&&a.jsx(ce,{...e})]})};E.displayName="FondueIconPen";const J=s.memo(E);E.__docgenInfo={description:"@deprecated Import Icons from `@frontify/fondue/components` instead.",methods:[],displayName:"FondueIconPen",props:{size:{required:!1,tsType:{name:"IconSize"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:""}}};const ge={title:"Components/Editable Text",component:u,tags:["autodocs"],parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:{children:{table:{disable:!0}},isOverflowing:{table:{disable:!0}},options:{table:{category:"Custom"}},onAdditionalValueSave:{table:{category:"Event"}},onEditableSave:{table:{category:"Event"}},onModeChange:{table:{category:"Event"}}}},Q=e=>a.jsx(u,{...e,children:e.children}),X=e=>{const[n,i]=s.useState("Im set from the outside");return a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(u,{...e,onEditableSave:r=>i(r),children:a.jsx("h1",{children:n})})," ",a.jsx(J,{size:o.Size24})]})},m=Q.bind({});m.args={children:a.jsx("p",{children:"Change me"}),options:{}};const c=Q.bind({});c.args={children:a.jsx("div",{className:"tw-flex tw-flex-row tw-items-center",children:a.jsx("h1",{className:"tw-text-text",children:"hey Styled"})}),options:{mode:g.LABEL,enableDoubleClick:!1,additionalValues:"Values only for the Event"}};c.storyName="Editable Text h1 styling";const p=()=>{const[e,n]=s.useState("Im set from the outside");return a.jsxs("div",{className:"tw-flex tw-items-center",children:[a.jsx(u,{onEditableSave:i=>n(i),options:{additionalValues:"ID",enableDoubleClick:!0},children:a.jsx("h1",{className:"tw-text-xl",children:e})}),a.jsx(J,{size:o.Size24})]})},f=X.bind({});f.args={options:{mode:g.INPUT}};const w=X.bind({});w.args={options:{mode:g.INPUT,isSlimInputField:!0}};p.__docgenInfo={description:"",methods:[],displayName:"ControlledExample"};var C,V,_;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"(args: EditableTextProps) => <EditableText {...args}>{args.children}</EditableText>",...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,R,B;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:"(args: EditableTextProps) => <EditableText {...args}>{args.children}</EditableText>",...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var D,k,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [label, setLabel] = useState('Im set from the outside');
  return <div className="tw-flex tw-items-center">
            <EditableText onEditableSave={value => setLabel(value)} options={{
      additionalValues: 'ID',
      enableDoubleClick: true
    }}>
                <h1 className={'tw-text-xl'}>{label}</h1>
            </EditableText>
            <IconPen size={IconSize.Size24} />
        </div>;
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var U,A,M;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`(args: EditableTextProps) => {
  const [label, setLabel] = useState('Im set from the outside');
  return <div className="tw-flex tw-items-center">
            <EditableText {...args} onEditableSave={value => setLabel(value)}>
                <h1>{label}</h1>
            </EditableText>{' '}
            <IconPen size={IconSize.Size24} />
        </div>;
}`,...(M=(A=f.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var W,$,O;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`(args: EditableTextProps) => {
  const [label, setLabel] = useState('Im set from the outside');
  return <div className="tw-flex tw-items-center">
            <EditableText {...args} onEditableSave={value => setLabel(value)}>
                <h1>{label}</h1>
            </EditableText>{' '}
            <IconPen size={IconSize.Size24} />
        </div>;
}`,...(O=($=w.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const xe=["EditableTextDefault","Default","ControlledExample","ControllelInitialInput","ControllelSlimInputField"];export{p as ControlledExample,f as ControllelInitialInput,w as ControllelSlimInputField,c as Default,m as EditableTextDefault,xe as __namedExportsOrder,ge as default};
