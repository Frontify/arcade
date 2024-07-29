import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{I as u}from"./IconIcon-BwqYlkW2.js";import{B as t,a as w,b as T,c as r}from"./Badge-DCccyOuc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconSize-BcCrF_mi.js";import"./IconIcon16-TK9s3MAx.js";import"./IconIcon24-DxzSV-8K.js";import"./IconCross-BUeQrH0h.js";import"./focusStyle-CBFElZiz.js";import"./merge-DI-veSMP.js";import"./colors-cqDZVL9s.js";const ve={title:"Components/Badge",component:t,tags:["autodocs"],argTypes:{style:{options:Object.values(w),control:{type:"select"}},emphasis:{options:Object.values(T),control:{type:"select"}},size:{options:["small","medium"],control:{type:"select"}},withTitleAttribute:{control:{type:"boolean"}},onClick:{table:{disable:!1}},onDismiss:{table:{disable:!1}}},args:{style:w.Primary,children:"Text",size:"medium",emphasis:T.Strong,disabled:!1,withTitleAttribute:!0}},s=a=>e.jsx(t,{...a}),h=s.bind({}),g=s.bind({});g.argTypes={onClick:{action:"Click"}};const y=s.bind({});y.argTypes={onDismiss:{action:"Dismiss"}};const b=s.bind({});b.argTypes={onDismiss:{action:"Dismiss"},onClick:{action:"Click"}};const o=s.bind({});o.argTypes={status:{options:Object.values(r),control:{type:"select"}}};o.args={status:r.Positive};const f=s.bind({});f.args={status:{red:40,green:200,blue:100,alpha:1}};const B=s.bind({});B.args={status:"#f14394"};const n=s.bind({});n.argTypes={icon:{table:{disable:!0}}};n.args={icon:e.jsx(u,{})};const c=s.bind({});c.argTypes={onClick:{action:"Click"},icon:{table:{disable:!0}}};c.args={icon:e.jsx(u,{})};const d=s.bind({});d.argTypes={status:{options:Object.values(r),control:{type:"select"}},icon:{table:{disable:!0}}};d.args={status:r.Positive,icon:e.jsx(u,{})};const l=s.bind({});l.argTypes={status:{options:Object.values(r),control:{type:"select"}},children:{table:{disable:!0}}};l.args={status:r.Positive,children:""};const p=s.bind({});p.argTypes={icon:{table:{disable:!0}},children:{table:{disable:!0}}};p.args={icon:e.jsx(u,{}),children:""};const i=a=>e.jsxs("div",{className:"tw-flex tw-items-center tw-gap-1",children:[e.jsx("span",{children:"before "}),e.jsx(t,{...a}),e.jsx("span",{children:" after"})]});i.argTypes={status:{options:Object.values(r),control:{type:"select"}},icon:{table:{disable:!0}}};i.args={status:r.Positive,icon:e.jsx(u,{})};const m=a=>e.jsxs("div",{className:"tw-flex tw-flex-nowrap tw-border tw-border-line tw-rounded tw-p-2 tw-gap-2",children:[e.jsx(t,{...a}),e.jsx(t,{...a}),e.jsx(t,{...a}),e.jsx(t,{...a}),e.jsx(t,{...a})]});m.args={status:r.Positive,icon:e.jsx(u,{}),children:"A long string of text"};i.__docgenInfo={description:"",methods:[],displayName:"BetweenElements",props:{style:{required:!1,tsType:{name:"BadgeStyle"},description:""},icon:{required:!1,tsType:{name:"ReactElement",elements:[{name:"intersection",raw:`GeneratedIconProps & {
    icon: IconEnum;
}`,elements:[{name:"signature",type:"object",raw:`{
    size?: IconSize;
    filled?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"IconSize",required:!1}},{key:"filled",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
    icon: IconEnum;
}`,signature:{properties:[{key:"icon",value:{name:"IconEnum",required:!0}}]}}]}],raw:"ReactElement<IconProps>"},description:""},status:{required:!1,tsType:{name:"union",raw:"BadgeStatusIconProps['status']"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},emphasis:{required:!1,tsType:{name:"BadgeEmphasis"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},withTitleAttribute:{required:!1,tsType:{name:"boolean"},description:"@description withTitle could be disabled only in the case another overlay is present, ex Tooltip"}}};m.__docgenInfo={description:"",methods:[],displayName:"MultipleBadgesInRow",props:{style:{required:!1,tsType:{name:"BadgeStyle"},description:""},icon:{required:!1,tsType:{name:"ReactElement",elements:[{name:"intersection",raw:`GeneratedIconProps & {
    icon: IconEnum;
}`,elements:[{name:"signature",type:"object",raw:`{
    size?: IconSize;
    filled?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"IconSize",required:!1}},{key:"filled",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
    icon: IconEnum;
}`,signature:{properties:[{key:"icon",value:{name:"IconEnum",required:!0}}]}}]}],raw:"ReactElement<IconProps>"},description:""},status:{required:!1,tsType:{name:"union",raw:"BadgeStatusIconProps['status']"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},emphasis:{required:!1,tsType:{name:"BadgeEmphasis"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},withTitleAttribute:{required:!1,tsType:{name:"boolean"},description:"@description withTitle could be disabled only in the case another overlay is present, ex Tooltip"}}};var v,S,I;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(I=(S=h.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var x,j,q;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var P,C,k;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(k=(C=y.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var O,E,W;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(W=(E=b.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var z,A,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var R,N,_;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(_=(N=f.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var M,G,L;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(L=(G=B.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var F,H,J;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(J=(H=n.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,ae,re;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:"(args: BadgeProps) => <Badge {...args} />",...(re=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ie,oe;i.parameters={...i.parameters,docs:{...(te=i.parameters)==null?void 0:te.docs,source:{originalSource:`(args: BadgeProps) => <div className="tw-flex tw-items-center tw-gap-1">
        <span>before </span>
        <Badge {...args} />
        <span> after</span>
    </div>`,...(oe=(ie=i.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,ce,de;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: BadgeProps) => <div className="tw-flex tw-flex-nowrap tw-border tw-border-line tw-rounded tw-p-2 tw-gap-2">
        <Badge {...args} />
        <Badge {...args} />
        <Badge {...args} />
        <Badge {...args} />
        <Badge {...args} />
    </div>`,...(de=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Se=["LabelOnly","WithOnClick","WithDismiss","WithOnClickAndDismiss","WithStatus","WithCustomStatusColor","WithCustomStatusString","WithIcon","WithOnClickAndIcon","WithStatusAndIcon","StatusOnly","IconOnly","BetweenElements","MultipleBadgesInRow"];export{i as BetweenElements,p as IconOnly,h as LabelOnly,m as MultipleBadgesInRow,l as StatusOnly,f as WithCustomStatusColor,B as WithCustomStatusString,y as WithDismiss,n as WithIcon,g as WithOnClick,b as WithOnClickAndDismiss,c as WithOnClickAndIcon,o as WithStatus,d as WithStatusAndIcon,Se as __namedExportsOrder,ve as default};
