import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as N}from"./index-BwDkhjyp.js";import{a as O}from"./fondue-icons326-xfcb5yXJ.js";import{L as A}from"./Label-DGO3QOB6.js";import{T as m}from"./Tooltip-DvWejVSX.js";import{S as a}from"./Switch-BkmYdC2_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Brw_kfkv.js";import"./index-DxjWwZXO.js";import"./styleUtilities-BnElyh0X.js";import"./index-DOnKqARA.js";import"./index-BWD2N0gV.js";import"./index-9q6yCIGA.js";import"./index-kUwV4muI.js";import"./index-DduqEaLY.js";import"./index-BwIM2_zL.js";import"./index-DGaPG0k3.js";import"./index-BgCrdp81.js";const le={component:a,tags:["autodocs"],parameters:{status:{type:"in_progress"}},argTypes:{size:{control:{type:"select",options:["small","medium","large"]}}},args:{id:"airplane-mode","aria-label":"Toggle airplane mode"},decorators:[r=>e.jsx("div",{className:"tw-flex tw-gap-1.5 tw-items-center",children:e.jsx(r,{})})]},s={args:{defaultValue:!0}},t={args:{defaultValue:!1}},o={args:{defaultValue:!1,disabled:!0}},n={args:{defaultValue:!1,required:!0}},l={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(A,{id:"label",htmlFor:"switch",children:"Switch"}),e.jsx(a,{...r,id:"switch","aria-labelledby":"label"})]})},i={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs(A,{id:"label",htmlFor:"switch",children:["Switch",e.jsxs(m.Root,{children:[e.jsx(m.Trigger,{children:e.jsx(O,{size:"16"})}),e.jsx(m.Content,{children:"Tooltip"})]})]}),e.jsx(a,{...r,id:"switch","aria-labelledby":"label"})]})},c={render:r=>{const[D,U]=N.useState(!1),I=M=>{U(M)};return e.jsx(a,{value:D,onChange:I,...r})}},d={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(a,{...r,size:"small"}),e.jsx(a,{...r,size:"medium"}),e.jsx(a,{...r,size:"large"})]})};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: true
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultValue: false
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,S,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    defaultValue: false,
    disabled: true
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,T,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultValue: false,
    required: true
  }
}`,...(C=(T=n.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var k,z,L;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <>
            <Label id="label" htmlFor="switch">
                Switch
            </Label>
            <Switch {...args} id="switch" aria-labelledby="label" />
        </>
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var y,V,F;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <>
            <Label id="label" htmlFor="switch">
                Switch
                <Tooltip.Root>
                    <Tooltip.Trigger>
                        <IconQuestionMarkCircle size="16" />
                    </Tooltip.Trigger>
                    <Tooltip.Content>Tooltip</Tooltip.Content>
                </Tooltip.Root>
            </Label>
            <Switch {...args} id="switch" aria-labelledby="label" />
        </>
}`,...(F=(V=i.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var R,E,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    const onChange = (checked: boolean) => {
      setChecked(checked);
    };
    return <Switch value={checked} onChange={onChange} {...args} />;
  }
}`,...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var W,v,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <>
            <Switch {...args} size="small" />
            <Switch {...args} size="medium" />
            <Switch {...args} size="large" />
        </>
}`,...(_=(v=d.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const ie=["Checked","Unchecked","Disabled","Required","WithLabel","WithLabelAndTooltip","ExternallyControlled","Size"];export{s as Checked,o as Disabled,c as ExternallyControlled,n as Required,d as Size,t as Unchecked,l as WithLabel,i as WithLabelAndTooltip,ie as __namedExportsOrder,le as default};
