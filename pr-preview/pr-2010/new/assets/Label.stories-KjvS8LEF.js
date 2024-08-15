import{j as e}from"./jsx-runtime-DBEcOq3S.js";import"./index-DtJulBIN.js";import{c as v}from"./fondue-icons324-Bw2AQYl8.js";import{a as C}from"./Checkbox-CMQyBqO4.js";import{T as d}from"./TextInput-DfszU8Fz.js";import{T as u}from"./Tooltip-Bmut4D8v.js";import{a as L,L as o}from"./Label-CVvaVZ2g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dhc4yksV.js";import"./index-BqTDQIm7.js";import"./index-P-l_ls5c.js";import"./index-BHYJtXto.js";import"./index-BRCTM6zp.js";import"./index-CvTA8V3i.js";import"./index-D21DJKX5.js";import"./styleUtilities-T76WvCte.js";import"./focusStyle-IgMhxCMT.js";import"./index-COuo08O9.js";import"./index-Bw4vj2Av.js";import"./index-CTHx29zj.js";const X={title:"Components/Label",component:L,tags:["autodocs"],parameters:{status:{type:"released"}},args:{children:"Label"}},p={args:{required:!0},render:n=>{const t=r=>e.jsx(d,{...r});return t.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(o,{...n,htmlFor:"input"}),e.jsx(t,{id:"input",placeholder:"Enter your name"})]})}},s={args:{children:"Hello World"},render:n=>{const t=r=>e.jsx(d,{...r});return t.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(o,{...n,htmlFor:"input"}),e.jsx(t,{id:"input",placeholder:"Enter your name"})]})}},a={args:{children:"Hello World"},render:n=>{const t=r=>e.jsx(d,{...r});return t.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(o,{...n,htmlFor:"input"}),e.jsx(t,{id:"input",placeholder:"Enter your name",disabled:!0})]})}},l={args:{children:"Hello World"},render:n=>e.jsxs("div",{className:"tw-flex tw-gap-1.5",children:[e.jsx(C,{id:"input","aria-labelledby":"label"}),e.jsx(o,{...n,id:"label",htmlFor:"input"})]})},i={args:{required:!0},render:n=>{const t=r=>e.jsx(d,{...r});return t.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-1.5",children:[e.jsxs(o,{...n,htmlFor:"input",children:["Hello World",e.jsxs(u.Root,{children:[e.jsx(u.Trigger,{children:e.jsx(v,{size:16})}),e.jsx(u.Content,{children:"Tooltip"})]})]}),e.jsx(t,{id:"input",placeholder:"Enter your name"})]})}};var c,m,x;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const Y=["Mandatory","WithTextInput","WithDisabledInput","WithCheckbox","WithTooltip"];export{p as Mandatory,l as WithCheckbox,a as WithDisabledInput,s as WithTextInput,i as WithTooltip,Y as __namedExportsOrder,X as default};
