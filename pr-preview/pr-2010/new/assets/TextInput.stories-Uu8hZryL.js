import{j as e}from"./jsx-runtime-DBEcOq3S.js";import"./index-DtJulBIN.js";import{c as n,a as r}from"./fondue-icons324-Bw2AQYl8.js";import{a as S}from"./chunk-454WOBUV-CM0pFb8Z.js";import{B as h}from"./Button-CeW1VRZi.js";import{L as ne}from"./Label-CVvaVZ2g.js";import{a as re,b as oe,T as t}from"./TextInput-DfszU8Fz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./styleUtilities-T76WvCte.js";import"./focusStyle-IgMhxCMT.js";import"./index-Dhc4yksV.js";import"./index-BqTDQIm7.js";const Te={title:"Components/Text Input",component:re,subcomponents:{"TextInput.Slot":oe},tags:["autodocs"],parameters:{status:{type:"released"}},args:{placeholder:"Placeholder",defaultValue:"Hello from Frontify",onChange:S("onChange"),onBlur:S("onBlur"),onFocus:S("onFocus")},render:s=>{const T=se=>e.jsx(t,{...se});return T.displayName="TextInput",e.jsx(T,{...s})}},o={},a={args:{type:"password"}},l={args:{disabled:!0},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...s}),e.jsxs(t.Root,{...s,children:[e.jsx(t.Slot,{children:e.jsx(n,{size:16})}),e.jsx(t.Slot,{name:"right",children:e.jsx(h,{aspect:"square",rounding:"full",emphasis:"weak",size:"small",disabled:!0,children:e.jsx(n,{size:16})})})]})]}),decorators:[s=>e.jsx("div",{className:"tw-flex tw-flex-col tw-gap-4",children:e.jsx(s,{})})]},i={args:{readOnly:!0},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...s}),e.jsxs(t.Root,{...s,children:[e.jsx(t.Slot,{children:e.jsx(n,{size:16})}),e.jsx(t.Slot,{name:"right",children:s.readOnly?null:e.jsx(h,{aspect:"square",rounding:"full",emphasis:"weak",size:"small",disabled:!0,children:e.jsx(n,{size:16})})})]})]}),decorators:[s=>e.jsx("div",{className:"tw-flex tw-flex-col tw-gap-4",children:e.jsx(s,{})})]},c={render:s=>e.jsx(t.Root,{...s,children:e.jsx(t.Slot,{name:"left",children:e.jsx(n,{size:16})})})},u={render:s=>e.jsx(t.Root,{...s,children:e.jsx(t.Slot,{name:"right",children:e.jsx(n,{size:16})})})},p={render:s=>e.jsxs(t.Root,{...s,children:[e.jsx(t.Slot,{name:"left",children:e.jsx(r,{size:16})}),e.jsx(t.Slot,{name:"right",children:e.jsx(n,{size:16})})]})},d={render:s=>e.jsx(t.Root,{...s,children:e.jsxs(t.Slot,{name:"right",children:[e.jsx(h,{aspect:"square",rounding:"full",emphasis:"weak",size:"small",children:e.jsx(n,{size:16})}),e.jsx(h,{aspect:"square",rounding:"full",emphasis:"weak",size:"small",children:e.jsx(n,{size:16})})]})})},x={render:s=>e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(ne,{htmlFor:"text-input",children:"Label"}),e.jsxs(t.Root,{...s,id:"text-input",children:[e.jsx(t.Slot,{name:"left",children:e.jsx(r,{size:16})}),e.jsx(t.Slot,{name:"right",children:e.jsx(n,{size:16})})]})]})},m={args:{status:"success"},render:s=>e.jsxs(t.Root,{...s,children:[e.jsx(t.Slot,{name:"left",children:e.jsx(r,{size:16})}),e.jsx(t.Slot,{name:"right",children:e.jsx(n,{size:16})})]})},I={args:{status:"error"},render:s=>e.jsxs(t.Root,{...s,children:[e.jsx(t.Slot,{name:"left",children:e.jsx(r,{size:16})}),e.jsx(t.Slot,{name:"right",children:e.jsx(n,{size:16})})]})},g={args:{status:"loading"},render:s=>e.jsxs(t.Root,{...s,children:[e.jsx(t.Slot,{name:"left",children:e.jsx(r,{size:16})}),e.jsx(t.Slot,{name:"right",children:e.jsx(n,{size:16})})]})};var j,f,z;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(z=(f=o.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var R,w,b;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'password'
  }
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,B,L;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <>
            <TextInput {...args} />
            <TextInput.Root {...args}>
                <TextInput.Slot>
                    <IconIcon size={16} />
                </TextInput.Slot>
                <TextInput.Slot name="right">
                    <Button aspect="square" rounding="full" emphasis="weak" size="small" disabled>
                        <IconIcon size={16} />
                    </Button>
                </TextInput.Slot>
            </TextInput.Root>
        </>,
  decorators: [Story => <div className="tw-flex tw-flex-col tw-gap-4">
                <Story />
            </div>]
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var W,v,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  render: args => <>
            <TextInput {...args} />

            <TextInput.Root {...args}>
                <TextInput.Slot>
                    <IconIcon size={16} />
                </TextInput.Slot>
                <TextInput.Slot name="right">
                    {!args.readOnly ? <Button aspect="square" rounding="full" emphasis="weak" size="small" disabled>
                            <IconIcon size={16} />
                        </Button> : null}
                </TextInput.Slot>
            </TextInput.Root>
        </>,
  decorators: [Story => <div className="tw-flex tw-flex-col tw-gap-4">
                <Story />
            </div>]
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var k,q,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <TextInput.Root {...args}>
            <TextInput.Slot name="left">
                <IconIcon size={16} />
            </TextInput.Slot>
        </TextInput.Root>
}`,...(P=(q=c.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var N,O,C;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <TextInput.Root {...args}>
            <TextInput.Slot name="right">
                <IconIcon size={16} />
            </TextInput.Slot>
        </TextInput.Root>
}`,...(C=(O=u.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var E,A,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <TextInput.Root {...args}>
            <TextInput.Slot name="left">
                <IconPen size={16} />
            </TextInput.Slot>
            <TextInput.Slot name="right">
                <IconIcon size={16} />
            </TextInput.Slot>
        </TextInput.Root>
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var _,H,V;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <TextInput.Root {...args}>
            <TextInput.Slot name="right">
                <Button aspect="square" rounding="full" emphasis="weak" size="small">
                    <IconIcon size={16} />
                </Button>
                <Button aspect="square" rounding="full" emphasis="weak" size="small">
                    <IconIcon size={16} />
                </Button>
            </TextInput.Slot>
        </TextInput.Root>
}`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div className="tw-flex tw-flex-col tw-gap-2">
            <Label htmlFor="text-input">Label</Label>

            <TextInput.Root {...args} id="text-input">
                <TextInput.Slot name="left">
                    <IconPen size={16} />
                </TextInput.Slot>
                <TextInput.Slot name="right">
                    <IconIcon size={16} />
                </TextInput.Slot>
            </TextInput.Root>
        </div>
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: 'success'
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Slot name="left">
                <IconPen size={16} />
            </TextInput.Slot>
            <TextInput.Slot name="right">
                <IconIcon size={16} />
            </TextInput.Slot>
        </TextInput.Root>
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    status: 'error'
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Slot name="left">
                <IconPen size={16} />
            </TextInput.Slot>
            <TextInput.Slot name="right">
                <IconIcon size={16} />
            </TextInput.Slot>
        </TextInput.Root>
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    status: 'loading'
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Slot name="left">
                <IconPen size={16} />
            </TextInput.Slot>
            <TextInput.Slot name="right">
                <IconIcon size={16} />
            </TextInput.Slot>
        </TextInput.Root>
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const je=["Text","Password","Disabled","Readonly","WithLeftItem","WithRightItem","WithLeftAndRightItem","WithButtons","WithLabel","Success","Errored","Loading"];export{l as Disabled,I as Errored,g as Loading,a as Password,i as Readonly,m as Success,o as Text,d as WithButtons,x as WithLabel,p as WithLeftAndRightItem,c as WithLeftItem,u as WithRightItem,je as __namedExportsOrder,Te as default};
