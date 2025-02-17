import{j as c}from"./jsx-runtime-BSxFkHFN.js";import{r as s}from"./index-i66itsuO.js";import{m as G}from"./fondue-icons348-g6CPHV6m.js";import{c as g}from"./index-BNYVQE02.js";import{c as z}from"./index-BwxsjnLo.js";import{c as A,R as K,I as U}from"./index--HnUjAPS.js";import{P as J}from"./index-cPkRJAzz.js";import{P as x}from"./index-C7Xses_O.js";import{u as Q}from"./index-DLXHbKnz.js";import{u as X}from"./index-P4w4wmP2.js";import{u as Y}from"./index-CIFYclHn.js";import{u as Z}from"./useControllableState-BeU1Rl3I.js";import{B as E}from"./Button-B_5YezNO.js";import{h as T}from"./Dropdown-Xr0XmF1B.js";var y="Tabs",[ee,Ne]=z(y,[A]),M=A(),[te,_]=ee(y),W=s.forwardRef((t,o)=>{const{__scopeTabs:a,value:e,onValueChange:r,defaultValue:d,orientation:i="horizontal",dir:n,activationMode:u="automatic",...v}=t,l=Q(n),[f,m]=X({prop:e,onChange:r,defaultProp:d});return c.jsx(te,{scope:a,baseId:Y(),value:f,onValueChange:m,orientation:i,dir:l,activationMode:u,children:c.jsx(x.div,{dir:l,"data-orientation":i,...v,ref:o})})});W.displayName=y;var q="TabsList",P=s.forwardRef((t,o)=>{const{__scopeTabs:a,loop:e=!0,...r}=t,d=_(q,a),i=M(a);return c.jsx(K,{asChild:!0,...i,orientation:d.orientation,dir:d.dir,loop:e,children:c.jsx(x.div,{role:"tablist","aria-orientation":d.orientation,...r,ref:o})})});P.displayName=q;var V="TabsTrigger",$=s.forwardRef((t,o)=>{const{__scopeTabs:a,value:e,disabled:r=!1,...d}=t,i=_(V,a),n=M(a),u=F(i.baseId,e),v=L(i.baseId,e),l=e===i.value;return c.jsx(U,{asChild:!0,...n,focusable:!r,active:l,children:c.jsx(x.button,{type:"button",role:"tab","aria-selected":l,"aria-controls":v,"data-state":l?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:u,...d,ref:o,onMouseDown:g(t.onMouseDown,f=>{!r&&f.button===0&&f.ctrlKey===!1?i.onValueChange(e):f.preventDefault()}),onKeyDown:g(t.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&i.onValueChange(e)}),onFocus:g(t.onFocus,()=>{const f=i.activationMode!=="manual";!l&&!r&&f&&i.onValueChange(e)})})})});$.displayName=V;var O="TabsContent",D=s.forwardRef((t,o)=>{const{__scopeTabs:a,value:e,forceMount:r,children:d,...i}=t,n=_(O,a),u=F(n.baseId,e),v=L(n.baseId,e),l=e===n.value,f=s.useRef(l);return s.useEffect(()=>{const m=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(m)},[]),c.jsx(J,{present:r||l,children:({present:m})=>c.jsx(x.div,{"data-state":l?"active":"inactive","data-orientation":n.orientation,role:"tabpanel","aria-labelledby":u,hidden:!m,id:v,tabIndex:0,...i,ref:o,style:{...t.style,animationDuration:f.current?"0s":void 0},children:m&&d})})});D.displayName=O;function F(t,o){return`${t}-trigger-${o}`}function L(t,o){return`${t}-content-${o}`}var ae=W,oe=P,ne=$,se=D;const re=(t,o)=>t.filter(a=>{var r;const e=(r=a.ref)==null?void 0:r.current;return e?e.offsetLeft+e.offsetWidth>(o==null?void 0:o.scrollLeft)+o.offsetWidth||e.offsetLeft-o.scrollLeft<0:!1}),h=(t,o)=>{const a=o.current,e=t==null?void 0:t.querySelector('[data-state="active"]');if(!t||!(e instanceof HTMLButtonElement)||!(a instanceof HTMLSpanElement))return;const r=(t==null?void 0:t.scrollLeft)>(e==null?void 0:e.offsetLeft),d=(e==null?void 0:e.offsetLeft)+(e==null?void 0:e.offsetWidth)>(t==null?void 0:t.offsetWidth);r?(t.offsetWidth>e.offsetWidth+e.offsetLeft?a.style.left=`${e.offsetLeft}px`:a.style.left=`${t.offsetWidth-e.offsetWidth}px`,a.style.width=`${e==null?void 0:e.offsetWidth}px`):d?(a.style.left=`${t.clientWidth-e.offsetWidth}px`,a.style.width=`${e.offsetWidth}px`):(a.style.left=`${e.offsetLeft}px`,a.style.width=`${e.offsetWidth}px`)},ie=({activeTab:t})=>{const o=s.useRef(null),a=s.useRef(null),[e,r]=s.useState([]),[d,i]=s.useState([]);return s.useEffect(()=>{const n=o.current,u=n==null?void 0:n.querySelector('[data-state="active"]');u instanceof HTMLButtonElement&&n instanceof HTMLDivElement&&(h(n,a),u.scrollIntoView({behavior:"smooth",block:"nearest",inline:"end"}))},[t,a]),s.useLayoutEffect(()=>{var v;const n=o.current,u=n==null?void 0:n.querySelector('[data-state="active"]');if(n instanceof HTMLDivElement&&u instanceof HTMLButtonElement){h(n,a);const l=new MutationObserver(()=>{u.scrollIntoView({behavior:"instant",block:"nearest",inline:"end"}),h(n,a)});n.parentNode&&l.observe(n.parentNode,{childList:!0});const f=new IntersectionObserver(()=>{i(re(e,n)),h(n,a)},{root:n,threshold:1});for(const m of e)(v=m.ref)!=null&&v.current&&f.observe(m.ref.current);return()=>{f.disconnect(),l.disconnect()}}},[e,o,a]),{triggerListRef:o,activeIndicatorRef:a,triggersOutOfView:d,triggers:e,addTrigger:n=>{r(u=>[...u,n])}}},ce="_root_13jbx_5",de="_triggerList_13jbx_14",le="_triggerListWrapper_13jbx_28",fe="_trigger_13jbx_14",ue="_content_13jbx_78",pe="_activeIndicator_13jbx_94",b={root:ce,triggerList:de,triggerListWrapper:le,trigger:fe,content:ue,activeIndicator:pe},w=s.createContext({value:"",disabled:!1}),k=s.createContext({addTrigger:()=>{}}),C=({padding:t="compact",activeTab:o,defaultActiveTab:a,size:e="medium",onActiveTabChange:r,children:d,...i},n)=>{var S;const[u,v]=Z({prop:o,defaultProp:a,onChange:r}),l=s.useCallback(p=>{v(p)},[v]),{triggerListRef:f,activeIndicatorRef:m,triggers:j,triggersOutOfView:N,addTrigger:H}=ie({activeTab:u});return c.jsx(k.Provider,{value:{addTrigger:H},children:c.jsxs(ae,{ref:n,className:b.root,onValueChange:l,value:u??((S=j[0])==null?void 0:S.value),"data-tabs-content-padding":t,...i,children:[c.jsxs("div",{className:b.triggerListWrapper,children:[c.jsx(oe,{ref:f,"data-size":e,className:b.triggerList,children:j.map(p=>s.createElement(ne,{...p.props,key:p.value,value:p.value,disabled:p.disabled,className:b.trigger,ref:p.ref},p.element))}),c.jsxs(T.Root,{children:[N.length>0&&c.jsx(T.Trigger,{"data-test-id":"overflow-items-dropdown-trigger",children:c.jsx(E,{emphasis:"default",aspect:"square",size:"small",children:c.jsx(G,{size:16})})}),c.jsx(T.Content,{align:"end","data-test-id":"overflow-items-dropdown-content",children:N.map(p=>s.createElement(T.Item,{...p.props,disabled:p.disabled,onSelect:()=>l(p.value),key:p.value},p.element))})]}),c.jsx("span",{"data-test-id":"active-tab-indicator",ref:m,className:b.activeIndicator})]}),d]})})};C.displayName="Tabs.Root";const R=({children:t,value:o,disabled:a})=>c.jsx(w.Provider,{value:{value:o,disabled:a},children:t});R.displayName="Tabs.Tab";const B=({children:t,...o},a)=>{const{value:e,disabled:r}=s.useContext(w),{addTrigger:d}=s.useContext(k),i=s.useRef(null);return s.useEffect(()=>{d({ref:i||a,value:e??"",disabled:r,props:o,element:t})},[]),null};B.displayName="Tabs.Trigger";const I=({children:t,...o},a)=>{const{value:e}=s.useContext(w);return c.jsx(se,{ref:a,...o,className:b.content,value:e??"",children:t})};I.displayName="Tabs.Content";const Se={Root:s.forwardRef(C),Tab:s.forwardRef(R),Trigger:s.forwardRef(B),Content:s.forwardRef(I)};C.__docgenInfo={description:"",methods:[],displayName:"Tabs.Root",props:{id:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'tight' | 'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'tight'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:`Define the padding of the dialog
@default "compact"`,defaultValue:{value:"'compact'",computed:!1}},defaultActiveTab:{required:!1,tsType:{name:"string"},description:`The default active tab
Used for uncontrolled components`},activeTab:{required:!1,tsType:{name:"string"},description:"The controlled value of the active tab"},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`The height of the tabs
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},onActiveTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Event handler called when the active tab changes"}}};R.__docgenInfo={description:"",methods:[],displayName:"Tabs.Tab",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},value:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};I.__docgenInfo={description:"",methods:[],displayName:"Tabs.Content",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{C as T,R as a,B as b,I as c,Se as d};
