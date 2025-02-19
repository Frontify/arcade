import{j as e}from"./jsx-runtime-BSxFkHFN.js";import"./index-i66itsuO.js";import{c as P}from"./fondue-icons348-DbatLcWa.js";import{a as U}from"./Checkbox-CmqTlVXy.js";import{S as a}from"./Select-t2pANGQc.js";import{T as u}from"./TextInput-DVb6zBct.js";import{T as x}from"./Tooltip-DJM_t4lA.js";import{a as q,L as n}from"./Label-B_4H5djr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C7Xses_O.js";import"./index-BQPO3JLn.js";import"./index-BwxsjnLo.js";import"./index-BNYVQE02.js";import"./index-P4w4wmP2.js";import"./index-Dh_oXSn4.js";import"./index-BVL3yOfb.js";import"./index-cPkRJAzz.js";import"./styleUtilities-rhQWLmVU.js";import"./focusStyle-IgMhxCMT.js";import"./index-Nz8TJpHF.js";import"./index-C9TK974O.js";import"./Combination-BQ0A-8sA.js";import"./index-CIFYclHn.js";import"./ThemeProvider-nZnSZuXa.js";const ie={title:"Components/Label",component:q,tags:["autodocs"],parameters:{status:{type:"released"}},args:{children:"Label"}},s={args:{required:!0},render:t=>{const o=r=>e.jsx(u,{...r});return o.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(n,{...t,htmlFor:"input-mandatory"}),e.jsx(o,{id:"input-mandatory",placeholder:"Enter your name"})]})}},l={args:{children:"Hello World"},render:t=>{const o=r=>e.jsx(u,{...r});return o.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(n,{...t,htmlFor:"input-text"}),e.jsx(o,{id:"input-text",placeholder:"Enter your name"})]})}},p={args:{children:"Hello World"},render:t=>{const o=r=>e.jsx(u,{...r});return o.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(n,{...t,htmlFor:"input-disabled"}),e.jsx(o,{id:"input-disabled",placeholder:"Enter your name",disabled:!0})]})}},i={args:{children:"Hello World"},render:t=>e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(n,{...t,htmlFor:"select"}),e.jsxs(a,{id:"select",placeholder:"Select...",children:[e.jsx(a.Item,{value:"1",children:"Option 1"}),e.jsx(a.Item,{value:"2",children:"Option 2"})]})]})},c={args:{children:"Hello World"},render:t=>e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-2",children:[e.jsx(n,{...t,htmlFor:"combobox"}),e.jsxs(a.Combobox,{id:"combobox",placeholder:"Select...",children:[e.jsx(a.Item,{value:"1",children:"Option 1"}),e.jsx(a.Item,{value:"2",children:"Option 2"})]})]})},d={args:{children:"Hello World"},render:t=>e.jsxs("div",{className:"tw-flex tw-gap-1.5",children:[e.jsx(U,{id:"input-checkbox","aria-labelledby":"label"}),e.jsx(n,{...t,id:"label",htmlFor:"input-checkbox"})]})},m={args:{required:!0},render:t=>{const o=r=>e.jsx(u,{...r});return o.displayName="TextInput",e.jsxs("div",{className:"tw-flex tw-flex-col tw-gap-1.5",children:[e.jsxs(n,{...t,htmlFor:"input-tooltip",children:["Hello World",e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{children:e.jsx(P,{size:16})}),e.jsx(x.Content,{children:"Tooltip"})]})]}),e.jsx(o,{id:"input-tooltip",placeholder:"Enter your name"})]})}};var h,g,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input-mandatory" />
                <STextInput id="input-mandatory" placeholder="Enter your name" />
            </div>;
  }
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var I,b,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input-text" />
                <STextInput id="input-text" placeholder="Enter your name" />
            </div>;
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,w,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input-disabled" />
                <STextInput id="input-disabled" placeholder="Enter your name" disabled />
            </div>;
  }
}`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,v,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    return <div className="tw-flex tw-flex-col tw-gap-2">
                {/* The select is using a 'div' as a trigger, this means we have to trigger it manually. */}
                <Label {...args} htmlFor="select" />
                <Select id="select" placeholder="Select...">
                    <Select.Item value="1">Option 1</Select.Item>
                    <Select.Item value="2">Option 2</Select.Item>
                </Select>
            </div>;
  }
}`,...(W=(v=i.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var N,C,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    return <div className="tw-flex tw-flex-col tw-gap-2">
                {/* The select is using a 'div' as a trigger, this means we have to trigger it manually. */}
                <Label {...args} htmlFor="combobox" />
                <Select.Combobox id="combobox" placeholder="Select...">
                    <Select.Item value="1">Option 1</Select.Item>
                    <Select.Item value="2">Option 2</Select.Item>
                </Select.Combobox>
            </div>;
  }
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var k,L,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Hello World'
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-gap-1.5">
                <Checkbox id="input-checkbox" aria-labelledby="label" />
                <Label {...args} id="label" htmlFor="input-checkbox" />
            </div>;
  }
}`,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var E,O,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => {
    // Used to get the correct component name in the Storybook of the \`TextInput\` (instead of \`TextInput.Root\`)
    const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
    STextInput.displayName = 'TextInput';
    return <div className="tw-flex tw-flex-col tw-gap-1.5">
                <Label {...args} htmlFor="input-tooltip">
                    Hello World
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <IconIcon size={16} />
                        </Tooltip.Trigger>
                        <Tooltip.Content>Tooltip</Tooltip.Content>
                    </Tooltip.Root>
                </Label>
                <STextInput id="input-tooltip" placeholder="Enter your name" />
            </div>;
  }
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const ce=["Mandatory","WithTextInput","WithDisabledInput","WithSelect","WithCombobox","WithCheckbox","WithTooltip"];export{s as Mandatory,d as WithCheckbox,c as WithCombobox,p as WithDisabledInput,i as WithSelect,l as WithTextInput,m as WithTooltip,ce as __namedExportsOrder,ie as default};
