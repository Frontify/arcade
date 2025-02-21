import{j as e}from"./jsx-runtime-BSxFkHFN.js";import{r as d,e as p}from"./index-i66itsuO.js";import{q as Re,c as _e}from"./fondue-icons348-g6CPHV6m.js";import{a as Ne}from"./chunk-D5ZWXAHU-DlerbUHg.js";/* empty css               */import{c as U}from"./index-BwxsjnLo.js";import{c as Se,u as k}from"./index-C7Xses_O.js";import{c as se,a as Ee}from"./index-BNYVQE02.js";import{u as K}from"./index-P4w4wmP2.js";import"./index-BQPO3JLn.js";import{P as Pe}from"./index-cPkRJAzz.js";import{u as de}from"./index-BJaWHrbV.js";import{u as He}from"./index-DLXHbKnz.js";import"./Box-DVv5YIW_.js";import{B as S}from"./Button-B_5YezNO.js";import"./Checkbox-CzBTIath.js";import{c as P}from"./ColorPicker-CEE0dBIF.js";import"./Dialog-tTGsmewG.js";import"./Divider-DRz3jNOA.js";import{h as R}from"./Dropdown-CgxBxdiW.js";import"./Flex-qurznK3Z.js";import{F as y}from"./Flyout-CG2cI6o0.js";import"./Grid-v4ePEr-t.js";import"./Heading-Dxlzvdof.js";import"./Label-B_4H5djr.js";import"./LoadingBar-CeG04zm5.js";import"./LoadingCircle-C1R00fQU.js";import"./ScrollArea-CAHWO9nS.js";import"./Section-DUy1JF06.js";import"./SegmentedControl-Cf9ZMFZ9.js";import"./Select-Bsh0dt1o.js";import"./Slider-DWGa2XPH.js";import"./Switch-BnWwtHaG.js";import"./Table-D2QYwWS5.js";import"./Tabs-RHBj-4Iq.js";import"./Text-D5d4NpEW.js";import"./TextInput-BlU4KsbK.js";import"./ThemeProvider-nZnSZuXa.js";import"./Tooltip-D1Q45Ec-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./propsToCssVariables-DVyyXmoh.js";import"./styleUtilities-rhQWLmVU.js";import"./focusStyle-IgMhxCMT.js";import"./index-Dh_oXSn4.js";import"./index-BVL3yOfb.js";import"./index-C9TK974O.js";import"./Combination-BQ0A-8sA.js";import"./useSyncRefs-DKJtHqhc.js";import"./domUtilities-DGDVwu3_.js";import"./index-Cao5XaZ_.js";import"./index-s6TWcLJA.js";import"./index-TIDoIrmf.js";import"./index-BdQq_4o_.js";import"./useControllableState-BeU1Rl3I.js";var D=d.forwardRef((o,r)=>{const{children:t,...n}=o,c=d.Children.toArray(t),i=c.find(De);if(i){const a=i.props.children,u=c.map(m=>m===i?d.Children.count(a)>1?d.Children.only(null):d.isValidElement(a)?a.props.children:null:m);return e.jsx(G,{...n,ref:r,children:d.isValidElement(a)?d.cloneElement(a,void 0,u):null})}return e.jsx(G,{...n,ref:r,children:t})});D.displayName="Slot";var G=d.forwardRef((o,r)=>{const{children:t,...n}=o;if(d.isValidElement(t)){const c=Me(t),i=Oe(n,t.props);return t.type!==d.Fragment&&(i.ref=r?Se(r,c):c),d.cloneElement(t,i)}return d.Children.count(t)>1?d.Children.only(null):null});G.displayName="SlotClone";var ke=({children:o})=>e.jsx(e.Fragment,{children:o});function De(o){return d.isValidElement(o)&&o.type===ke}function Oe(o,r){const t={...r};for(const n in r){const c=o[n],i=r[n];/^on[A-Z]/.test(n)?c&&i?t[n]=(...u)=>{i(...u),c(...u)}:c&&(t[n]=c):n==="style"?t[n]={...c,...i}:n==="className"&&(t[n]=[c,i].filter(Boolean).join(" "))}return{...o,...t}}function Me(o){var n,c;let r=(n=Object.getOwnPropertyDescriptor(o.props,"ref"))==null?void 0:n.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?o.ref:(r=(c=Object.getOwnPropertyDescriptor(o,"ref"))==null?void 0:c.get,t=r&&"isReactWarning"in r&&r.isReactWarning,t?o.props.ref:o.props.ref||o.ref)}function qe(o){const r=o+"CollectionProvider",[t,n]=U(r),[c,i]=t(r,{collectionRef:{current:null},itemMap:new Map}),a=C=>{const{scope:A,children:I}=C,g=p.useRef(null),h=p.useRef(new Map).current;return e.jsx(c,{scope:A,itemMap:h,collectionRef:g,children:I})};a.displayName=r;const u=o+"CollectionSlot",m=p.forwardRef((C,A)=>{const{scope:I,children:g}=C,h=i(u,I),l=k(A,h.collectionRef);return e.jsx(D,{ref:l,children:g})});m.displayName=u;const f=o+"CollectionItemSlot",x="data-radix-collection-item",v=p.forwardRef((C,A)=>{const{scope:I,children:g,...h}=C,l=p.useRef(null),b=k(A,l),T=i(f,I);return p.useEffect(()=>(T.itemMap.set(l,{ref:l,...h}),()=>void T.itemMap.delete(l))),e.jsx(D,{[x]:"",ref:b,children:g})});v.displayName=f;function w(C){const A=i(o+"CollectionConsumer",C);return p.useCallback(()=>{const g=A.collectionRef.current;if(!g)return[];const h=Array.from(g.querySelectorAll(`[${x}]`));return Array.from(A.itemMap.values()).sort((T,N)=>h.indexOf(T.ref.current)-h.indexOf(N.ref.current))},[A.collectionRef,A.itemMap])}return[{Provider:a,Slot:m,ItemSlot:v},w,n]}var Le=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],E=Le.reduce((o,r)=>{const t=d.forwardRef((n,c)=>{const{asChild:i,...a}=n,u=i?D:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(u,{...a,ref:c})});return t.displayName=`Primitive.${r}`,{...o,[r]:t}},{}),Y="Collapsible",[Ve,le]=U(Y),[Fe,Z]=Ve(Y),ue=d.forwardRef((o,r)=>{const{__scopeCollapsible:t,open:n,defaultOpen:c,disabled:i,onOpenChange:a,...u}=o,[m=!1,f]=K({prop:n,defaultProp:c,onChange:a});return e.jsx(Fe,{scope:t,disabled:i,contentId:de(),open:m,onOpenToggle:d.useCallback(()=>f(x=>!x),[f]),children:e.jsx(E.div,{"data-state":X(m),"data-disabled":i?"":void 0,...u,ref:r})})});ue.displayName=Y;var me="CollapsibleTrigger",pe=d.forwardRef((o,r)=>{const{__scopeCollapsible:t,...n}=o,c=Z(me,t);return e.jsx(E.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":X(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...n,ref:r,onClick:se(o.onClick,c.onOpenToggle)})});pe.displayName=me;var Q="CollapsibleContent",fe=d.forwardRef((o,r)=>{const{forceMount:t,...n}=o,c=Z(Q,o.__scopeCollapsible);return e.jsx(Pe,{present:t||c.open,children:({present:i})=>e.jsx(Be,{...n,ref:r,present:i})})});fe.displayName=Q;var Be=d.forwardRef((o,r)=>{const{__scopeCollapsible:t,present:n,children:c,...i}=o,a=Z(Q,t),[u,m]=d.useState(n),f=d.useRef(null),x=k(r,f),v=d.useRef(0),w=v.current,C=d.useRef(0),A=C.current,I=a.open||u,g=d.useRef(I),h=d.useRef(void 0);return d.useEffect(()=>{const l=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(l)},[]),Ee(()=>{const l=f.current;if(l){h.current=h.current||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const b=l.getBoundingClientRect();v.current=b.height,C.current=b.width,g.current||(l.style.transitionDuration=h.current.transitionDuration,l.style.animationName=h.current.animationName),m(n)}},[a.open,n]),e.jsx(E.div,{"data-state":X(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!I,...i,ref:x,style:{"--radix-collapsible-content-height":w?`${w}px`:void 0,"--radix-collapsible-content-width":A?`${A}px`:void 0,...o.style},children:I&&c})});function X(o){return o?"open":"closed"}var $e=ue,We=pe,ze=fe,j="Accordion",Ge=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[ee,Je,Ue]=qe(j),[M,At]=U(j,[Ue,le]),oe=le(),ge=p.forwardRef((o,r)=>{const{type:t,...n}=o,c=n,i=n;return e.jsx(ee.Provider,{scope:o.__scopeAccordion,children:t==="multiple"?e.jsx(Qe,{...i,ref:r}):e.jsx(Ze,{...c,ref:r})})});ge.displayName=j;var[he,Ke]=M(j),[Ce,Ye]=M(j,{collapsible:!1}),Ze=p.forwardRef((o,r)=>{const{value:t,defaultValue:n,onValueChange:c=()=>{},collapsible:i=!1,...a}=o,[u,m]=K({prop:t,defaultProp:n,onChange:c});return e.jsx(he,{scope:o.__scopeAccordion,value:u?[u]:[],onItemOpen:m,onItemClose:p.useCallback(()=>i&&m(""),[i,m]),children:e.jsx(Ce,{scope:o.__scopeAccordion,collapsible:i,children:e.jsx(Ae,{...a,ref:r})})})}),Qe=p.forwardRef((o,r)=>{const{value:t,defaultValue:n,onValueChange:c=()=>{},...i}=o,[a=[],u]=K({prop:t,defaultProp:n,onChange:c}),m=p.useCallback(x=>u((v=[])=>[...v,x]),[u]),f=p.useCallback(x=>u((v=[])=>v.filter(w=>w!==x)),[u]);return e.jsx(he,{scope:o.__scopeAccordion,value:a,onItemOpen:m,onItemClose:f,children:e.jsx(Ce,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(Ae,{...i,ref:r})})})}),[Xe,q]=M(j),Ae=p.forwardRef((o,r)=>{const{__scopeAccordion:t,disabled:n,dir:c,orientation:i="vertical",...a}=o,u=p.useRef(null),m=k(u,r),f=Je(t),v=He(c)==="ltr",w=se(o.onKeyDown,C=>{var re;if(!Ge.includes(C.key))return;const A=C.target,I=f().filter(z=>{var ne;return!((ne=z.ref.current)!=null&&ne.disabled)}),g=I.findIndex(z=>z.ref.current===A),h=I.length;if(g===-1)return;C.preventDefault();let l=g;const b=0,T=h-1,N=()=>{l=g+1,l>T&&(l=b)},W=()=>{l=g-1,l<b&&(l=T)};switch(C.key){case"Home":l=b;break;case"End":l=T;break;case"ArrowRight":i==="horizontal"&&(v?N():W());break;case"ArrowDown":i==="vertical"&&N();break;case"ArrowLeft":i==="horizontal"&&(v?W():N());break;case"ArrowUp":i==="vertical"&&W();break}const Te=l%h;(re=I[Te].ref.current)==null||re.focus()});return e.jsx(Xe,{scope:t,disabled:n,direction:c,orientation:i,children:e.jsx(ee.Slot,{scope:t,children:e.jsx(E.div,{...a,"data-orientation":i,ref:m,onKeyDown:n?void 0:w})})})}),O="AccordionItem",[eo,te]=M(O),xe=p.forwardRef((o,r)=>{const{__scopeAccordion:t,value:n,...c}=o,i=q(O,t),a=Ke(O,t),u=oe(t),m=de(),f=n&&a.value.includes(n)||!1,x=i.disabled||o.disabled;return e.jsx(eo,{scope:t,open:f,disabled:x,triggerId:m,children:e.jsx($e,{"data-orientation":i.orientation,"data-state":we(f),...u,...c,ref:r,disabled:x,open:f,onOpenChange:v=>{v?a.onItemOpen(n):a.onItemClose(n)}})})});xe.displayName=O;var ve="AccordionHeader",Ie=p.forwardRef((o,r)=>{const{__scopeAccordion:t,...n}=o,c=q(j,t),i=te(ve,t);return e.jsx(E.h3,{"data-orientation":c.orientation,"data-state":we(i.open),"data-disabled":i.disabled?"":void 0,...n,ref:r})});Ie.displayName=ve;var J="AccordionTrigger",be=p.forwardRef((o,r)=>{const{__scopeAccordion:t,...n}=o,c=q(j,t),i=te(J,t),a=Ye(J,t),u=oe(t);return e.jsx(ee.ItemSlot,{scope:t,children:e.jsx(We,{"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":c.orientation,id:i.triggerId,...u,...n,ref:r})})});be.displayName=J;var ye="AccordionContent",je=p.forwardRef((o,r)=>{const{__scopeAccordion:t,...n}=o,c=q(j,t),i=te(ye,t),a=oe(t);return e.jsx(ze,{role:"region","aria-labelledby":i.triggerId,"data-orientation":c.orientation,...a,...n,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});je.displayName=ye;function we(o){return o?"open":"closed"}var oo=ge,to=xe,ro=Ie,no=be,io=je;const co="_root_16fsu_2",ao="_accordionItem_16fsu_7",so="_accordionTrigger_16fsu_13",lo="_accordionCaret_16fsu_30",uo="_accordionContent_16fsu_34",mo="_accordionContentText_16fsu_61",po="_slideDown_16fsu_1",fo="_slideUp_16fsu_1",_={root:co,accordionItem:ao,accordionTrigger:so,accordionCaret:lo,accordionContent:uo,accordionContentText:mo,slideDown:po,slideUp:fo},L=({"data-test-id":o="fondue-accordion",border:r=!0,children:t,defaultValue:n,disabled:c,value:i})=>e.jsx(oo,{className:_.root,"data-test-id":o,defaultValue:n,disabled:c,type:"multiple",value:i,"data-border":r,children:t});L.displayName="Accordion.Root";const V=({"data-test-id":o="fondue-accordion-item",children:r,disabled:t,onClick:n,value:c})=>e.jsx(to,{className:_.accordionItem,value:c,onPointerDown:i=>{i.currentTarget.dataset.showFocusRing="false"},onBlur:i=>{i.currentTarget.dataset.showFocusRing="true"},onClick:n,disabled:t,"data-test-id":o,children:r});V.displayName="Accordion.Item";const F=({children:o})=>e.jsx(ro,{children:o});F.displayName="Accordion.Header";const B=({"data-test-id":o="fondue-accordion-trigger",children:r})=>e.jsxs(no,{className:_.accordionTrigger,"data-test-id":o,children:[r,e.jsx(Re,{className:_.accordionCaret,size:"16"})]});B.displayName="Accordion.Trigger";const $=({"data-test-id":o="collapsible-wrap",children:r,divider:t=!1,onClick:n,padding:c="large"})=>e.jsx(io,{className:_.accordionContent,onClick:n,"data-test-id":o,"data-item-padding":c,"data-item-divider":t,children:e.jsx("div",{className:_.accordionContentText,"data-test-id":`inner-${o}`,children:r})});$.displayName="Accordion.Content";const s={Root:L,Item:V,Header:F,Trigger:B,Content:$};L.__docgenInfo={description:"",methods:[],displayName:"Accordion.Root",props:{"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-accordion'",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:`Show or hide the top and bottom border
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Children of the Accordion component. This should contain the `Accordion.Item` components"},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The value of the items whose contents are expanded when the accordion is initially rendered.\nUse `defaultValue` if you do not need to control the state of an accordion."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether or not an accordion is disabled from user interaction."},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The controlled stateful value of the accordion items whose contents are expanded."}}};V.__docgenInfo={description:"",methods:[],displayName:"Accordion.Item",props:{"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-accordion-item'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Children of the Accordion item. This should contain the `Accordion.Header` and `Accordion.Content` components"},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether or not an accordion item is disabled from user interaction.

@default false`},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:"Click callback for this item."},value:{required:!0,tsType:{name:"string"},description:"A string value for the accordion item. All items within an accordion should use a unique value."}}};F.__docgenInfo={description:"",methods:[],displayName:"Accordion.Header",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Children of the Accordion header. This should contain `Accordion.Trigger`"}}};B.__docgenInfo={description:"",methods:[],displayName:"Accordion.Trigger",props:{"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-accordion-trigger'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Children of the Accordion trigger. This contains the actually clickable and visible header content"}}};$.__docgenInfo={description:"",methods:[],displayName:"Accordion.Content",props:{"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'collapsible-wrap'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Children of the Accordion content. This contains the main content."},divider:{required:!1,tsType:{name:"boolean"},description:"Adds a divider line between the header and the content.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLDivElement"}],raw:"MouseEventHandler<HTMLDivElement>"},description:"Click callback for the content."},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Controls if we show paddings around the content.
@default 'large'`,defaultValue:{value:"'large'",computed:!1}}}};const xt={component:L,tags:["autodocs"],subcomponents:{"Accordion.Item":V,"Accordion.Header":F,"Accordion.Trigger":B,"Accordion.Content":$},parameters:{status:{type:"beta"}},args:{}},go=()=>{const[o,r]=d.useState(!0);return e.jsxs(y.Root,{open:o,onOpenChange:r,children:[e.jsx(y.Trigger,{children:e.jsx(P.Input,{"aria-label":"Color Picker",currentColor:{alpha:.8,blue:50,green:100,red:230},onClear:function(){}})}),e.jsxs(y.Content,{maxWidth:"600px",children:[e.jsx(y.Body,{children:e.jsx("div",{className:"tw-p-2 md:tw-w-[450px]",children:e.jsxs(P.Root,{defaultFormat:"RGBA",currentColor:{alpha:.8,blue:50,green:100,red:230},onColorChange:function(){},children:[e.jsx(P.Values,{}),e.jsx(P.Gradient,{})]})})}),e.jsxs(y.Footer,{children:[e.jsx(S,{emphasis:"default",onPress:function(){},children:"Cancel"}),e.jsx(S,{onPress:function(){},children:"Save"})]})]})]})},ho=()=>{const[o,r]=d.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o?"":"tw-hidden",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx(S,{onPress:()=>r(!o),children:"Toggle Content"})]})},H={args:{},render:o=>e.jsxs(s.Root,{...o,children:[e.jsxs(s.Item,{value:"accordion-test-0",children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:e.jsxs("div",{className:"tw-flex tw-gap-2",children:[e.jsx(_e,{}),"Item with icon"]})})}),e.jsx(s.Content,{divider:!0,children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]}),e.jsxs(s.Item,{value:"accordion-test-1",children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:"Item with plain text child"})}),e.jsx(s.Content,{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]}),e.jsxs(s.Item,{value:"accordion-test-2",children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:"Item with dropdown child"})}),e.jsx(s.Content,{children:e.jsxs(R.Root,{children:[e.jsx(R.Trigger,{children:e.jsx(S,{children:"Trigger"})}),e.jsxs(R.Content,{children:[e.jsx(R.Item,{onSelect:function(){},children:"Item 1"}),e.jsx(R.Item,{onSelect:function(){},children:"Item 2"}),e.jsx(R.Item,{onSelect:function(){},children:"Item 3"})]})]})})]}),e.jsxs(s.Item,{value:"accordion-test-3",children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:"Item with flyout child"})}),e.jsx(s.Content,{children:e.jsxs(y.Root,{children:[e.jsx(y.Trigger,{children:e.jsx(S,{children:"Trigger"})}),e.jsx(y.Content,{children:e.jsx(y.Body,{children:"Hello!"})})]})})]}),e.jsxs(s.Item,{value:"accordion-test-4",children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:"Item with color picker flyout"})}),e.jsx(s.Content,{children:e.jsx(go,{})})]}),e.jsxs(s.Item,{value:"accordion-test-5",onClick:()=>Ne("click"),children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:"Empty item with an onClick callback"})}),e.jsx(s.Content,{})]}),e.jsxs(s.Item,{value:"accordion-test-6",children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:"Item with resizable content"})}),e.jsx(s.Content,{children:e.jsx(ho,{})})]}),e.jsxs(s.Item,{value:"accordion-test-7",children:[e.jsx(s.Header,{children:e.jsx(s.Trigger,{children:"Item without padding"})}),e.jsx(s.Content,{padding:"none",children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."})]})]})};var ie,ce,ae;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <Accordion.Root {...args}>
                <Accordion.Item value="accordion-test-0">
                    <Accordion.Header>
                        <Accordion.Trigger>
                            <div className="tw-flex tw-gap-2">
                                <IconIcon />
                                Item with icon
                            </div>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content divider>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="accordion-test-1">
                    <Accordion.Header>
                        <Accordion.Trigger>Item with plain text child</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="accordion-test-2">
                    <Accordion.Header>
                        <Accordion.Trigger>Item with dropdown child</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <Dropdown.Root>
                            <Dropdown.Trigger>
                                <Button>Trigger</Button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Item onSelect={function Js() {}}>Item 1</Dropdown.Item>
                                <Dropdown.Item onSelect={function Js() {}}>Item 2</Dropdown.Item>
                                <Dropdown.Item onSelect={function Js() {}}>Item 3</Dropdown.Item>
                            </Dropdown.Content>
                        </Dropdown.Root>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="accordion-test-3">
                    <Accordion.Header>
                        <Accordion.Trigger>Item with flyout child</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <Flyout.Root>
                            <Flyout.Trigger>
                                <Button>Trigger</Button>
                            </Flyout.Trigger>
                            <Flyout.Content>
                                <Flyout.Body>Hello!</Flyout.Body>
                            </Flyout.Content>
                        </Flyout.Root>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="accordion-test-4">
                    <Accordion.Header>
                        <Accordion.Trigger>Item with color picker flyout</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <ColorFlyOut />
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="accordion-test-5" onClick={() => action('click')}>
                    <Accordion.Header>
                        <Accordion.Trigger>Empty item with an onClick callback</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content />
                </Accordion.Item>

                <Accordion.Item value="accordion-test-6">
                    <Accordion.Header>
                        <Accordion.Trigger>Item with resizable content</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <ResizableContent />
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="accordion-test-7">
                    <Accordion.Header>
                        <Accordion.Trigger>Item without padding</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content padding="none">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>;
  }
}`,...(ae=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};const vt=["Default"];export{H as Default,vt as __namedExportsOrder,xt as default};
