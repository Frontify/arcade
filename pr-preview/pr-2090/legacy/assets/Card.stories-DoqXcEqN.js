import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as D}from"./index-BwDkhjyp.js";import{B as n,b as E,c as T}from"./Button-BBdFcQ_2.js";import{D as M}from"./Divider-DCi-HcbY.js";import{S as _}from"./SegmentedControls-BSWtFswn.js";import{L as l}from"./LegacyStack-LQsEIeS6.js";import{T as d}from"./Text-BU2xdpZ1.js";import{C as m}from"./Card-DkLUlfwg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useButton-B0CVDvll.js";import"./useFocusable-ClqOF1PM.js";import"./useFocusRing-Vzyl7-Lk.js";import"./SSRProvider-CYXx33DY.js";import"./chain-CSFqNvhK.js";import"./IconSize-BcCrF_mi.js";import"./focusStyle-CBFElZiz.js";import"./merge-DI-veSMP.js";import"./useFormValidationState-Bo5Bz1o-.js";import"./FocusScope-CryrrNNO.js";import"./useField-CqwgNQmU.js";import"./useLabels-Bp6d37Qr.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-BDm5AEDr.js";import"./useControlledState-C0C-dzuH.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./motion-C48bHxkn.js";import"./records-DFIz8BfL.js";const le={title:"Components/Card",component:m,tags:["autodocs"],args:{hoverable:!1}},p=[{id:"1",title:"First",content:"Macaroon liquorice pie pastry topping muffin carrot cake donut. Cotton candy jujubes candy chocolate pie marshmallow toffee marzipan. Gingerbread tiramisu gingerbread danish jujubes. Tiramisu cupcake chocolate cake biscuit pastry candy canes. Bonbon biscuit liquorice danish pastry lollipop."},{id:"2",title:"Second",content:"Danish bonbon cookie sweet lemon drops candy canes pastry. Cake ice cream soufflé ice cream gummi bears. Jelly shortbread cake croissant sweet roll tart biscuit wafer dessert. Jujubes tart gummi bears apple pie marshmallow candy. Pie tootsie roll pudding lollipop cake oat cake apple pie."},{id:"3",title:"Third",content:"Sugar plum chocolate cake danish donut jelly beans pastry chocolate cake cookie chupa chups. Sweet roll sugar plum danish cake cotton candy sweet roll tootsie roll. Sweet roll cake chocolate cake muffin jujubes. Macaroon carrot cake marshmallow apple pie oat cake icing. Dragée candy canes biscuit pastry muffin."}],u=t=>e.jsx(m,{...t}),r=u.bind({});r.args={children:e.jsxs(l,{direction:"row",padding:"m",spacing:"l",align:"center",justify:"between",children:[e.jsx(d,{children:"I am a card component with some content"}),e.jsxs(l,{spacing:"m",padding:"none",children:[e.jsx(n,{children:"Button 1"}),e.jsx(n,{style:E.Default,emphasis:T.Default,children:"Button 2"}),e.jsx(n,{children:"Button 3"})]})]})};const W=()=>{const t=p.map(i=>({id:i.id,value:i.title})),c=p.reduce((i,g)=>({...i,[g.id]:g.content}),{}),[h,N]=D.useState(t[0].id);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tw-px-4 tw-pt-4",children:e.jsx("div",{className:"tw-w-64",children:e.jsx(_,{activeItemId:h,items:t,onChange:N})})}),e.jsx(M,{color:"#EAEBEB"}),e.jsx("div",{className:"tw-px-4 tw-pb-4 tw-text-s tw-text-black-80",children:c[h]})]})},s=u.bind({});s.args={children:e.jsx(W,{})};const O=p.map(t=>({children:e.jsxs("div",{className:"tw-p-4",children:[e.jsx("div",{className:"tw-text-l tw-pb-2",children:t.title}),e.jsx("div",{className:"tw-text-s tw-text-black-80",children:t.content})]})})),o=()=>e.jsx("div",{className:"tw-grid tw-grid-cols-3 tw-gap-4",children:O.map((t,c)=>e.jsx(m,{...t},c))}),a=u.bind({});a.args={children:e.jsx(l,{direction:"row",padding:"m",spacing:"l",align:"center",justify:"between",children:e.jsxs("div",{children:[e.jsx(d,{as:"p",children:"I am a card component with a clickable container"}),e.jsx(d,{as:"p",children:"Click anywhere to see the click action"})]})})};a.argTypes={onClick:{action:"onClick"}};o.__docgenInfo={description:"",methods:[],displayName:"MultipleCards"};var x,j,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"args => <Card {...args} />",...(w=(j=r.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,f,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Card {...args} />",...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,C,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div className="tw-grid tw-grid-cols-3 tw-gap-4">
        {childItems.map((item, id) => <Card key={id} {...item} />)}
    </div>`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,B,I;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"args => <Card {...args} />",...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const de=["Default","WithSeparator","MultipleCards","WithOnClick"];export{r as Default,o as MultipleCards,a as WithOnClick,s as WithSeparator,de as __namedExportsOrder,le as default};
