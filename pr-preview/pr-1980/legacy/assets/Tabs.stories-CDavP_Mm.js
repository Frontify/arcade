import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as G}from"./index-BwDkhjyp.js";import{a as $}from"./Badge-DCccyOuc.js";import{B as T}from"./Button-CYWlMQhW.js";import{C as h,c as ee}from"./Checkbox-ym3RzNcL.js";import{D as ae}from"./Divider-DCi-HcbY.js";import{T as k}from"./TabItem-DYJEWVSF.js";import{I as J}from"./IconIcon-BwqYlkW2.js";import{I as K}from"./IconSize-BcCrF_mi.js";import{T as u}from"./Text-BU2xdpZ1.js";import{T as Q,a as S,b as g}from"./Tabs-DzRY1zkK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconCross-BUeQrH0h.js";import"./focusStyle-CBFElZiz.js";import"./merge-DI-veSMP.js";import"./colors-cqDZVL9s.js";import"./useButton-DofEV6SJ.js";import"./useFocusable-CAGu0lKI.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./useFormValidationState-Vs0Uifwm.js";import"./useControlledState-C0C-dzuH.js";import"./InputLabel-CPjnR_AG.js";import"./TooltipIcon-CeymCZzr.js";import"./LegacyTooltip-C061YhHi.js";import"./useLink-DorAuuFQ.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Portal-0C9N3MSP.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./IconMinus-BhxphMyC.js";import"./IconMinus16-ChDakrvn.js";import"./elements-BOYmskOL.js";import"./IconIcon16-TK9s3MAx.js";import"./IconIcon24-DxzSV-8K.js";import"./records-DFIz8BfL.js";import"./IconDotsHorizontal-CPSyvqAX.js";import"./motion-C48bHxkn.js";const re={state:h.Unchecked,disabled:!1,required:!1,value:"whatever-you'd-like",label:"Checkbox label",note:"Note about this input",tooltip:{content:"Lorem ipsum dolor sit amet."}},te=()=>{const[r,a]=G.useState(h.Unchecked);return e.jsx(ee,{...re,state:r,onChange:f=>{a(f?h.Checked:h.Unchecked)}})},p=()=>e.jsx(u,{children:e.jsx("p",{children:"Bacon ipsum dolor amet spare ribs swine meatloaf, pastrami cupim tail leberkas frankfurter jowl chislic shoulder. Frankfurter drumstick t-bone bacon ground round. Cupim pork loin shank kielbasa. Short loin shank meatloaf tongue. Chicken sirloin swine ball tip. Turkey pork kevin burgdoggen meatball t-bone."})}),x=[{id:"tab-1",label:"A tab",children:e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx("br",{}),e.jsx(p,{}),e.jsx("br",{}),e.jsx(p,{}),e.jsx("br",{}),e.jsx(p,{}),e.jsx("br",{}),e.jsx(p,{})]})},{id:"tab-2",label:"Disabled",disabled:!0,children:"Rib-eye"},{id:"tab-3",label:"A long tab name",children:e.jsx(u,{children:"Sirloin prosciutto cow short loin, andouille bresaola doner fatback pork loin. Tongue ribeye kielbasa pastrami. Meatball tail hamburger beef ribs beef ball tip pork chop buffalo short loin boudin chicken pastrami ribeye picanha flank. Shoulder chicken pancetta shankle biltong rump hamburger kielbasa tri-tip ham hock frankfurter."})},{id:"tab-4",label:"An even longer tab name",children:e.jsx("div",{children:e.jsxs(u,{children:["Porchetta burgdoggen kielbasa tenderloin boudin, ham cow pork loin salami. Pork chop swine meatloaf, sausage ground round tenderloin beef pork chislic chicken short loin landjaeger. Pig pork chop meatball picanha short ribs. Meatloaf buffalo shoulder, tail beef ribs corned beef short ribs ground round andouille pork belly landjaeger swine hamburger meatball. Ham hock turducken tri-tip picanha, buffalo leberkas pork loin chuck ground round.",e.jsx(ae,{}),e.jsx(T,{children:"Some button"})]})})},{id:"tab-5",label:"Disabled",disabled:!0,children:e.jsx(T,{children:"Sirloin"})},{id:"tab-6",label:"Last tab",children:e.jsx(u,{children:"Meat."})}],ta={title:"Components/Tabs",component:Q,tags:["autodocs"],argTypes:{paddingX:{options:Object.values(S),control:{type:"select"},defaultValue:S.Small},size:{options:Object.values(g),control:{type:"select"},defaultValue:g.Small},minHeight:{type:"string",defaultValue:"50px"}}},o=r=>{const[a,f]=G.useState(x[0].id),Z=x.map(t=>e.jsx(k,{id:t.id,label:t.label,disabled:t.disabled??!1,decorator:t.decorator,children:e.jsx("div",{className:"tw-p-3",children:t.children})},t.id));return e.jsx(Q,{...r,activeItemId:a,onChange:t=>f(t),children:r.children?r.children:Z})},j=r=>e.jsx(o,{...r}),s=j.bind({});s.storyName="Label Only";const oe=r=>e.jsx(o,{...r}),i=oe.bind({});i.args={maxHeight:"100px"};const se=r=>e.jsx(o,{...r}),n=se.bind({});n.args={minHeight:"50px"};const d=j.bind({});d.args={size:g.Small};const l=j.bind({});l.args={size:g.Large};const ie=x.map(r=>Object.assign({},r,{decorator:e.jsx(J,{size:K.Size16})})),ne=r=>e.jsx(o,{...r,children:ie.map(a=>e.jsx(k,{id:a.id,label:a.label,disabled:a.disabled??!1,decorator:a.decorator,children:e.jsx("div",{className:"tw-p-3",children:a.children})},a.id))}),c=ne.bind({});c.storyName="Icon and Label";const Y=x.map(r=>Object.assign({},r,{badge:{style:$.Positive,children:"Badge"}})),de=r=>e.jsx(o,{...r,children:Y.map(a=>e.jsx(k,{id:a.id,label:a.label,disabled:a.disabled??!1,badge:a.badge,children:e.jsx("div",{className:"tw-p-3",children:a.children})},a.id))}),m=de.bind({});m.storyName="Label and Badge";const le=Y.map(r=>Object.assign({},r,{decorator:e.jsx(J,{size:K.Size16})})),ce=r=>e.jsx(o,{...r,children:le.map(a=>e.jsx(k,{id:a.id,label:a.label,disabled:a.disabled??!1,badge:a.badge,decorator:a.decorator,children:e.jsx("div",{className:"tw-p-3",children:a.children})},a.id))}),b=ce.bind({});b.storyName="Label, Badge and Icon";var I,C,W;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <TabsComponent {...args} />;
}`,...(W=(C=s.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var v,y,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <TabsComponent {...args} />;
}`,...(B=(y=i.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var w,z,N;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <TabsComponent {...args} />;
}`,...(N=(z=n.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var A,H,L;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <TabsComponent {...args} />;
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var M,O,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <TabsComponent {...args} />;
}`,...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var P,E,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <TabsComponent {...args}>
            {dataWithIcon.map(item => <TabItem id={item.id} key={item.id} label={item.label} disabled={item.disabled ?? false} decorator={item.decorator}>
                    <div className="tw-p-3">{item.children}</div>
                </TabItem>)}
        </TabsComponent>;
}`,...(U=(E=c.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var V,_,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <TabsComponent {...args}>
            {dataWithBadge.map(item => <TabItem id={item.id} key={item.id} label={item.label} disabled={item.disabled ?? false} badge={item.badge}>
                    <div className="tw-p-3">{item.children}</div>
                </TabItem>)}
        </TabsComponent>;
}`,...(F=(_=m.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var R,X,q;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <TabsComponent {...args}>
            {dataWithBadgeAndIcon.map(item => <TabItem id={item.id} key={item.id} label={item.label} disabled={item.disabled ?? false} badge={item.badge} decorator={item.decorator}>
                    <div className="tw-p-3">{item.children}</div>
                </TabItem>)}
        </TabsComponent>;
}`,...(q=(X=b.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const oa=["Default","WithMaxHeight","WithMinHeight","WithSmallSize","WithLargeSize","WithIcon","WithBadge","WithBadgeAndIcon"];export{s as Default,m as WithBadge,b as WithBadgeAndIcon,c as WithIcon,l as WithLargeSize,i as WithMaxHeight,n as WithMinHeight,d as WithSmallSize,oa as __namedExportsOrder,ta as default};
