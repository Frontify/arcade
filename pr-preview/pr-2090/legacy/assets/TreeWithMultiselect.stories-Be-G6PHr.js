import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{r as u}from"./index-BwDkhjyp.js";import{C as J}from"./Container-DXS7VdVx.js";import{R as F,a as ye,r as he,d as ve,I as be,T as Q}from"./Tree-BmY49tx_.js";import{e as T,T as R,b as w,c as M,d as O,a as _,E as xe}from"./ExpandButton-DbY3d-Fg.js";import{b as Ie}from"./mocks-Doj95wfD.js";import{c as Te}from"./IconExclamationMarkCircle-DIK3qNWl.js";import{C as q,c as we,a as Ce,b as Se}from"./Checkbox-BWCdojtM.js";import{a as qe}from"./focusStyle-CBFElZiz.js";import{m as N}from"./merge-DI-veSMP.js";import{n as Ne}from"./noop-DX6rZLP_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Box-DjhFuVT2.js";import"./borderStyle-D9jrV09G.js";import"./input-IqyEthB7.js";import"./Button-BBdFcQ_2.js";import"./useButton-B0CVDvll.js";import"./useFocusable-ClqOF1PM.js";import"./useFocusRing-Vzyl7-Lk.js";import"./SSRProvider-CYXx33DY.js";import"./chain-CSFqNvhK.js";import"./IconSize-BcCrF_mi.js";import"./Divider-DCi-HcbY.js";import"./FormControl-DbVvWZHc.js";import"./InputLabel-DuXda3bY.js";import"./TooltipIcon-CI6qleYl.js";import"./LegacyTooltip-NmtBsAB1.js";import"./useLink-BrkukSAv.js";import"./usePopper-C28Vz6Qz.js";import"./index-CS4BWtGh.js";import"./index-CfyPTyT-.js";import"./Portal-BBACcjoK.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./IconCheckMark-ByVuQE55.js";import"./IconExclamationMarkTriangle-DvvXw1YP.js";import"./IconExclamationMarkTriangle24-NdDZZD89.js";import"./IconQuestionMarkCircle-DpV6l-09.js";import"./validation-C9S5KgfE.js";import"./LoadingCircle-CZrma5le.js";import"./SegmentedControls-BSWtFswn.js";import"./useFormValidationState-Bo5Bz1o-.js";import"./FocusScope-CryrrNNO.js";import"./useField-CqwgNQmU.js";import"./useLabels-Bp6d37Qr.js";import"./context-C2PaECDE.js";import"./VisuallyHidden-BDm5AEDr.js";import"./useControlledState-C0C-dzuH.js";import"./motion-C48bHxkn.js";import"./Switch-DDE7l5VE.js";import"./TabItem-DYJEWVSF.js";import"./elements-BOYmskOL.js";import"./TextInput-3-VhK_fn.js";import"./IconEyeOff-BAmb6qT8.js";import"./IconCross-CxP4FPDR.js";import"./Tooltip-BlJs8OXG.js";import"./useClickOutside-CKV3CrvD.js";import"./EnablePortalWrapper-B_d3Ldct.js";import"./dialog-Dre1eVQK.js";import"./Trigger-gz8WCINE.js";import"./IconCaretDown-BFa2RsTm.js";import"./IconCaretDown16-mzuMIk3a.js";import"./IconTrashBin-BqqROPt7.js";import"./IconTrashBin16-g_sB0yBJ.js";import"./IconTrashBin24-DyoUj1kc.js";import"./immer-DBm1MMjE.js";import"./IconGrabHandle12-OyP2wwdJ.js";import"./IconExclamationMarkCircle24-Vs83y98-.js";import"./IconMinus-C2D-9VKa.js";import"./IconMinus16-D_g1WimF.js";const ke=(e,t)=>{let n=q.Unchecked;return e?n=q.Checked:t&&(n=q.Mixed),n},H=(e,t,n=!1)=>e.filter(a=>(n?!1:t.includes(b(a)))||t.includes(C([b(a)])[0])).map(a=>a.id),P=(e,t)=>{var n;for(const a of e){if(a.id===t)return a;if(a.nodes&&((n=a.nodes)==null?void 0:n.length)>0){const r=P(a.nodes,t);if(r)return r}}return null},B=(e,t,n)=>{var a;for(const r of e){if(n!==null&&r.id===t)return n;if(r.nodes&&((a=r.nodes)==null?void 0:a.length)>0){const l=B(r.nodes,t,r);if(l)return l}}return null},X=(e,t,n)=>{var f,p;const a=B(e,t,null);n=a!=null&&a.id?A(a,n):n;const r=P(e,t);if(!r)return n;const l=b(r),i=H((r==null?void 0:r.nodes)??[],n);if(((f=r==null?void 0:r.nodes)==null?void 0:f.length)??0){const m=((p=r==null?void 0:r.nodes)==null?void 0:p.map(S=>b(S)))??[];n=n.includes(l)?k(n,m,!1):g(n,m,!1),i.length===0&&(n=g(n,[l],!0))}for(const m of(r==null?void 0:r.nodes)??[])n=X(e,m.id,n);let s=a;const c=[];for(;s!==null;)c.push(s),s=B(e,s.id,null);for(const m of c)n=A(m,n);return n},A=(e,t)=>{var o;const n=b(e),a=t.includes(n),r=H((e==null?void 0:e.nodes)??[],t),l=H((e==null?void 0:e.nodes)??[],t,!0),i=((o=e==null?void 0:e.nodes)==null?void 0:o.length)??0;return r.length===0?(t=a?g(t,[n],!1):t,t=g(t,[n],!0)):r.length===i&&l.length===0?(t=a?t:k(t,[n],!1),t=g(t,[n],!0)):e!=null&&e.id&&(t=k(t,[n],!0),t=g(t,[n],!1)),t},Z=e=>{const t=[];let n=e;const a=e.map(r=>r.split("/").pop());for(const r of e){const l=r.split("/").shift();l===F||l===C([F])[0]||!a.includes(l)&&!a.includes(Ee([l??""])[0]??"")&&t.push(r)}return t.length>0&&(n=g(e,t,!1),n=Z(n)),n},C=e=>e.map(t=>`*${t}`),Ee=e=>e.map(t=>t.replace(/^\*/,"")),b=e=>e.extendedId??`${e.parentId}/${e.id}`,g=(e,t,n)=>(t=n?C(t):t,[...new Set(t.length>0?e.filter(a=>!t.includes(a)):e)]),k=(e,t,n)=>(t=(n?C(t):t).filter(a=>a!==""),[...new Set(t.length>0?[...e,...t]:e)]),je=(e,t,n,a=!1)=>{let r=[];const l=P(n,e);if(!l)return t;const i=b(l);return t.includes(i)&&!a?r=g(t,[i],!1):(r=k(t,[i],!1),r=g(r,[i],!0)),r=X(n,e,r),Z(r)},We=(e,t)=>{const n=T[e.activeColorStyle??"neutral"];return N([qe,"tw-box-content tw-relative tw-cursor-default tw-transition-colors tw-outline-none tw-ring-inset tw-group tw-no-underline tw-leading-5",R[e.spacingY??"none"],t?"tw-text-text-disabled":n.textColor])},Re=(e,t,n)=>{const a=T[e.activeColorStyle??"neutral"];return N(["tw-block tw-absolute tw-inset-0 tw-transition-colors -tw-z-10",e.borderWidth!=="none"?w[e.borderRadius??"small"]:"",(!t||e.activeColorStyle!=="neutral")&&a.pressedBackgroundColor,n?T.none.backgroundColor:a.backgroundColor])},Me=e=>{const t=e.borderWidth!=="none"?N([M[e.borderWidth??"none"],w[e.borderRadius??"small"],O[e.borderStyle??"none"]]):"";return N(["tw-relative tw-z-0 tw-transition-colors tw-flex tw-items-center tw-content-center tw-leading-5 tw-width-fit tw-justify-start tw-pl-2",_[e.shadow??"none"],t,w[e.borderRadius??"small"],e.contentHight==="single-line"?"tw-h-10":"tw-h-fit"])},Oe=e=>{const{treeState:t}=u.useContext(ye),n=t.nodes.find(p=>p.props.id===e),a=n?n.props.parentId:"",r=t.nodes.find(p=>p.props.id===a),l=n?`${a}/${n.props.id}`:null,i=r?`${r.props.parentId}/${r.props.id}`:null,o=l?t.selectedIds.has(l):!1,s=i?t.selectedIds.has(i):!1,c=l?t.selectedIds.has(C([l])[0]):!1,f=t.expandedIds.has(e);return{isSelected:o,isParentSelected:s,isPartialSelected:c,isExpanded:f}},Y=u.memo(({id:e,label:t,showCaret:n,children:a,level:r=0,contentComponent:l,parentId:i,onSelect:o,onExpand:s,onShrink:c,registerNodeChildren:f,unregisterNodeChildren:p,isDisabled:m=!1,expandable:S=!0,checkBoxPosition:E="left",itemStyle:D,"data-test-id":te="fondue-tree-item"})=>{const ne=u.useRef(null),{isSelected:y,isExpanded:h,isPartialSelected:re,isParentSelected:L}=Oe(e),ae=u.useCallback(v=>{v==null||v.stopPropagation(),h?c==null||c(e):s==null||s(e)},[e,h,s,c]);u.useEffect(()=>{L&&!y&&o&&o(e,!0)},[e,o,L,y,i]);const z=u.Children.count(a)>0,{enrichedChildren:j,childrenIds:le}=u.useMemo(()=>{const v=he(a,{parentId:e,level:r+1});return{enrichedChildren:v,childrenIds:v.map(fe=>fe.props.id)}},[a,e,r]);ve(()=>{if(u.Children.count(j)===0||!h){p==null||p(e);return}f==null||f({id:e,children:j})},[h,j,e]);const x=u.useMemo(()=>({spacingY:"none",contentHight:"single-line",shadow:"none",borderRadius:"small",borderWidth:"none",borderStyle:"none",activeColorStyle:"neutral",...D}),[D]),{liClassName:ie,backgroundClassName:oe}=u.useMemo(()=>({liClassName:We(x,m),backgroundClassName:Re(x,y,m)}),[x,m,y]),se="tw-max-w-full	tw-grow",de=h,ue=t!==void 0,W=S&&(n??z),me=Me(x),V=r*be,ce={paddingLeft:V},pe=x.borderWidth!=="none"?{}:{marginLeft:-1*V},ge=m?()=>{}:()=>o==null?void 0:o(e,!1),$=E!=="none"?d.jsx(J,{maxWidth:"16px",maxHeight:"16px",children:d.jsx(we,{id:`checkbox-${e}`,ref:ne,disabled:m,"aria-label":t??"",emphasis:Ce.Weak,helperText:"",hideLabel:!0,label:"",onChange:ge,size:Se.Default,state:m?q.Unchecked:ke(y,re),tooltip:[],value:e})}):null;return d.jsx("li",{id:e,tabIndex:0,role:"treeitem",style:ce,onKeyDown:Ne,"aria-label":t,"aria-level":r+1,className:ie,"data-test-id":te,"aria-selected":y,"aria-expanded":h,"data-has-children":z,"aria-owns":le.join(" "),children:d.jsxs("div",{className:me,children:[d.jsx("span",{className:oe,style:pe,"aria-hidden":!0}),E==="left"&&$,S&&d.jsx(xe,{onClick:ae,expanded:de,disabled:!W,"aria-hidden":!W,className:W?"tw-visible":"tw-invisible tw-pointer-events-none"}),ue&&d.jsx("span",{className:"first:tw-ml-3.5 tw-h-full tw-flex tw-items-center",children:t}),d.jsx("div",{className:se,children:l}),E==="right"&&$]})},e)});Y.displayName="FondueTreeItemMultiselect";Y.__docgenInfo={description:"",methods:[],displayName:"FondueTreeItemMultiselect",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checkBoxPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},onBeforeUnregisterChildren:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, nodes: TreeNodeWithoutElements[]) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    id: string;
    level: number;
    parentId: string;
    extendedId: string;
    nodes: TreeNodeWithoutElements[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"level",value:{name:"number",required:!0}},{key:"parentId",value:{name:"string",required:!0}},{key:"extendedId",value:{name:"string",required:!0}},{key:"nodes",value:{name:"Array",elements:[{name:"TreeNodeWithoutElements"}],raw:"TreeNodeWithoutElements[]",required:!0}}]}}],raw:"TreeNodeWithoutElements[]"},name:"nodes"}],return:{name:"void"}}},description:""},parentId:{required:!1,tsType:{name:"string"},description:""},level:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, ignoreRemoveSelected: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"ignoreRemoveSelected"}],return:{name:"void"}}},description:"onSelect is passed by the Tree component when cloning the TreeItem"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onShrink:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},unregisterNodeChildren:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: string) => void",signature:{arguments:[{type:{name:"string"},name:"payload"}],return:{name:"void"}}},description:""},registerNodeChildren:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: RegisterNodeChildrenPayload) => void",signature:{arguments:[{type:{name:"Extract['payload']",raw:"Extract<TreeStateAction, { type: 'REGISTER_NODE_CHILDREN' }>['payload']"},name:"payload"}],return:{name:"void"}}},description:""},expandable:{defaultValue:{value:"true",computed:!1},required:!1},"data-test-id":{defaultValue:{value:"'fondue-tree-item'",computed:!1},required:!1}}};const Xt={title:"Components/Tree/Multiselect",component:Q,tags:["autodocs"],parameters:{controls:{expanded:!0}},args:{id:"storybook-tree",multiselect:!0,draggable:!0,selectedIds:["__ROOT__/2"],dragHandlerPosition:"left",spacingY:"none",contentHight:"single-line",shadow:"none",borderRadius:"small",borderWidth:"none",borderStyle:"none",activeColorStyle:"neutral"},argTypes:{multiselect:{control:{type:"boolean"}},draggable:{control:{type:"boolean"}},dragHandlerPosition:{table:{category:"Item Options"},options:["left","right","none"],control:{type:"inline-radio"}},spacingY:{table:{category:"Item Style"},name:"itemStyle.spacingY",options:[...Object.keys(R)],mapping:[...Object.values(R)],control:{type:"inline-radio"}},contentHight:{table:{category:"Item Style"},name:"itemStyle.contentHight",options:["content-fit","single-line"],control:{type:"inline-radio"}},shadow:{table:{category:"Item Style"},name:"itemStyle.shadow",options:[...Object.keys(_)],mapping:[...Object.values(_)],control:{type:"select"}},borderRadius:{table:{category:"Item Style"},name:"itemStyle.borderRadius",options:[...Object.keys(w)],mapping:[...Object.values(w)],control:{type:"select"}},borderWidth:{table:{category:"Item Style"},name:"itemStyle.borderWidth",options:[...Object.keys(M)],mapping:[...Object.values(M)],control:{type:"select"}},borderStyle:{table:{category:"Item Style"},name:"itemStyle.borderStyle",options:[...Object.keys(O)],mapping:[...Object.values(O)],control:{type:"select"}},activeColorStyle:{table:{category:"Item Style"},name:"itemStyle.activeColorStyle",options:[...Object.keys(T)],mapping:[...Object.values(T)],control:{type:"inline-radio"}},selectedIds:{control:{type:"object"},description:"Pre-selected Ids must be in the format `<parent_id>/<selected_id>` (`__ROOT__` is the root id)"},expandedIds:{control:{type:"object"}}}},_e=({title:e})=>d.jsxs("div",{className:"tw-flex tw-space-x-1.5 tw-w-full",children:[d.jsx("span",{className:"tw-flex tw-justify-center tw-items-center tw-w-5",children:d.jsx(Te,{})}),d.jsx("span",{children:e})]}),ee=({nodes:e,label:t,numChildNodes:n,onSelect:a,...r},l)=>{const i=(e==null?void 0:e.length)??0,o=n!==void 0?!!n:i>0;return u.createElement(Y,{...r,key:r.id,contentComponent:d.jsx(_e,{title:t||"NO TITLE"}),onSelect:a,showCaret:o},e==null?void 0:e.map(s=>ee(s)))},I=({...e})=>{const[t,n]=u.useState(e.selectedIds??[]),[a,r]=u.useState([]);u.useEffect(()=>{r(Ie)},[]);const l=(i,o=!1,s=[])=>{s.length!==0&&n(c=>je(i,c,s,o))};return d.jsx(J,{maxWidth:"400px",children:d.jsx(Q,{id:e.id,...He(e),selectedIds:t,onSelect:l,children:a.map(i=>ee(i))})})},He=({...e})=>{const t={spacingY:e.spacingY,contentHight:e.contentHight,shadow:e.shadow,borderRadius:e.borderRadius,borderWidth:e.borderWidth,borderStyle:e.borderStyle,activeColorStyle:e.activeColorStyle,...e.itemStyle};return delete e.spacingY,delete e.contentHight,delete e.shadow,delete e.borderRadius,delete e.borderWidth,delete e.borderStyle,delete e.activeColorStyle,{...e,itemStyle:t}};I.__docgenInfo={description:"",methods:[],displayName:"MultiselectWithBasicItem",props:{id:{required:!0,tsType:{name:"string"},description:""},draggable:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},multiselect:{required:!1,tsType:{name:"boolean"},description:""},selectedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},expandedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},dragHandlerPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:""},enableDragDelay:{required:!1,tsType:{name:"boolean"},description:""},showDragHandlerOnHoverOnly:{required:!1,tsType:{name:"boolean"},description:""},showContentWhileDragging:{required:!1,tsType:{name:"boolean"},description:""},itemStyle:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    spacingY?: TreeItemPropsSizing;
    contentHight?: TreeItemContentFit;
    shadow?: TreeItemPropsSizing;
    borderRadius?: TreeItemPropsSizing;
    borderWidth?: Exclude<TreeItemPropsSizing, 'x-large'>;
    borderStyle?: TreeItemBorderStyle;
    activeColorStyle?: TreeItemColors;
}`,signature:{properties:[{key:"spacingY",value:{name:"union",raw:"'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}],required:!1}},{key:"contentHight",value:{name:"union",raw:"'content-fit' | 'single-line'",elements:[{name:"literal",value:"'content-fit'"},{name:"literal",value:"'single-line'"}],required:!1}},{key:"shadow",value:{name:"union",raw:"'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}],required:!1}},{key:"borderRadius",value:{name:"union",raw:"'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}],required:!1}},{key:"borderWidth",value:{name:"Exclude",elements:[{name:"union",raw:"'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}],required:!1},{name:"literal",value:"'x-large'"}],raw:"Exclude<TreeItemPropsSizing, 'x-large'>",required:!1}},{key:"borderStyle",value:{name:"union",raw:"'solid' | 'dashed' | 'dotted' | 'none'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"},{name:"literal",value:"'none'"}],required:!1}},{key:"activeColorStyle",value:{name:"union",raw:"'neutral' | 'soft' | 'none'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'none'"}],required:!1}}]}},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, ignoreRemoveSelected?: boolean, nodes?: TreeNodeWithoutElements[]) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"ignoreRemoveSelected"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    id: string;
    level: number;
    parentId: string;
    extendedId: string;
    nodes: TreeNodeWithoutElements[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"level",value:{name:"number",required:!0}},{key:"parentId",value:{name:"string",required:!0}},{key:"extendedId",value:{name:"string",required:!0}},{key:"nodes",value:{name:"Array",elements:[{name:"TreeNodeWithoutElements"}],raw:"TreeNodeWithoutElements[]",required:!0}}]}}],raw:"TreeNodeWithoutElements[]"},name:"nodes"}],return:{name:"void"}}},description:""},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onShrink:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:`(args: {
    id: string;
    parentId: Nullable<string>;
    sort: number;
    contentComponent: Nullable<ReactNode>;
    parentType?: string;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    id: string;
    parentId: Nullable<string>;
    sort: number;
    contentComponent: Nullable<ReactNode>;
    parentType?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"parentId",value:{name:"Nullable",elements:[{name:"string"}],raw:"Nullable<string>",required:!0}},{key:"sort",value:{name:"number",required:!0}},{key:"contentComponent",value:{name:"Nullable",elements:[{name:"ReactNode"}],raw:"Nullable<ReactNode>",required:!0}},{key:"parentType",value:{name:"string",required:!1}}]}},name:"args"}],return:{name:"void"}}},description:""}}};var U,G,K;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`({
  ...args
}: TreeProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(args.selectedIds ?? []);
  const [treeItems, setTreeItems] = useState<TreeItemMockMultiselect[]>([]);
  useEffect(() => {
    setTreeItems(treeItemsMockMultiseclect);
  }, []);
  const handleItemSelected = (id: string, ignoreRemoveSelected = false, nodes: TreeNodeWithoutElements[] = []) => {
    if (nodes.length === 0) {
      return;
    }
    setSelectedIds(currentSelectedIds => getNewSelectedItems(id, currentSelectedIds, nodes, ignoreRemoveSelected));
  };
  return <Container maxWidth="400px">
            <TreeView id={args.id} {...cleanProps(args)} selectedIds={selectedIds} onSelect={handleItemSelected}>
                {treeItems.map(treeItem => renderTreeItemComponent(treeItem, selectedIds))}
            </TreeView>
        </Container>;
}`,...(K=(G=I.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const Zt=["MultiselectWithBasicItem"];export{I as MultiselectWithBasicItem,Zt as __namedExportsOrder,Xt as default};
