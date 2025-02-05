import{j as t}from"./jsx-runtime-BSxFkHFN.js";import"./index-i66itsuO.js";import{c as v}from"./fondue-icons348-COpsOkcC.js";import{a as C}from"./Checkbox-DH_bpLdu.js";import{T as d}from"./TextInput-DbqIn8ri.js";import{T as u}from"./Tooltip-C0gqcVzY.js";import{a as L,L as o}from"./Label-CuL99xi1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C7Xses_O.js";import"./index-BQPO3JLn.js";import"./index-BwxsjnLo.js";import"./index-BNYVQE02.js";import"./index-P4w4wmP2.js";import"./index-Dh_oXSn4.js";import"./index-BVL3yOfb.js";import"./index-cPkRJAzz.js";import"./styleUtilities-rhQWLmVU.js";import"./focusStyle-IgMhxCMT.js";import"./index-C9TK974O.js";import"./index-CIFYclHn.js";import"./ThemeProvider-Dxt3MuZn.js";const Y={title:"Components/Label",component:L,tags:["autodocs"],parameters:{status:{type:"released"}},args:{children:"Label"}},p={args:{required:!0},render:n=>{const e=r=>t.jsx(d,{...r});return e.displayName="TextInput",t.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[t.jsx(o,{...n,htmlFor:"input"}),t.jsx(e,{id:"input",placeholder:"Enter your name"})]})}},s={args:{children:"Hello World"},render:n=>{const e=r=>t.jsx(d,{...r});return e.displayName="TextInput",t.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[t.jsx(o,{...n,htmlFor:"input"}),t.jsx(e,{id:"input",placeholder:"Enter your name"})]})}},a={args:{children:"Hello World"},render:n=>{const e=r=>t.jsx(d,{...r});return e.displayName="TextInput",t.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[t.jsx(o,{...n,htmlFor:"input"}),t.jsx(e,{id:"input",placeholder:"Enter your name",disabled:!0})]})}},l={args:{children:"Hello World"},render:n=>t.jsxs("div",{className:"tw-flex tw-gap-1.5",children:[t.jsx(C,{id:"input","aria-labelledby":"label"}),t.jsx(o,{...n,id:"label",htmlFor:"input"})]})},i={args:{required:!0},render:n=>{const e=r=>t.jsx(d,{...r});return e.displayName="TextInput",t.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-1.5",children:[t.jsxs(o,{...n,htmlFor:"input",children:["Hello World",t.jsxs(u.Root,{children:[t.jsx(u.Trigger,{children:t.jsx(v,{size:16})}),t.jsx(u.Content,{children:"Tooltip"})]})]}),t.jsx(e,{id:"input",placeholder:"Enter your name"})]})}};var c,m,x;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input" />
                <STextInput id="input" placeholder="Enter your name" />
            </div>;
  }
}`,...(x=(m=p.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var T,h,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input" />
                <STextInput id="input" placeholder="Enter your name" />
            </div>;
  }
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input" />
                <STextInput id="input" placeholder="Enter your name" disabled />
            </div>;
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,w,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-gap-1.5">
                <Checkbox id="input" aria-labelledby="label" />
                <Label {...args} id="label" htmlFor="input" />
            </div>;
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,N,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-1.5">
                <Label {...args} htmlFor="input">
                    Hello World
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <IconIcon size={16} />
                        </Tooltip.Trigger>
                        <Tooltip.Content>Tooltip</Tooltip.Content>
                    </Tooltip.Root>
                </Label>
                <STextInput id="input" placeholder="Enter your name" />
            </div>;
  }
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const Z=["Mandatory","WithTextInput","WithDisabledInput","WithCheckbox","WithTooltip"];export{p as Mandatory,l as WithCheckbox,a as WithDisabledInput,s as WithTextInput,i as WithTooltip,Z as __namedExportsOrder,Y as default};
