import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{a as fe}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as f,R as K}from"./index-BwDkhjyp.js";import{B as w}from"./Badge-D-eWKloI.js";import{B as we,b as ge,c as be,a as ve}from"./Button-CYWlMQhW.js";import{T as ke}from"./TextInput-BJ6WSDaF.js";import{I as xe}from"./IconDotsVertical-CHqXF1Hr.js";import{I as P,a as Se,b as Re,c as Ce}from"./IconFaceHappy-DTNGuoNN.js";import{I as ne}from"./IconSize-BcCrF_mi.js";import{$ as Ne,c as W,d as ae,e as ie,b as Ie,a as Ke}from"./SelectionManager-BuW52QpN.js";import{c as ce,C as A}from"./Checkbox-DwYPwAWP.js";import{m as M}from"./merge-DI-veSMP.js";import{a as je}from"./focusStyle-CBFElZiz.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconCross-Bt-I3opn.js";import"./colors-cqDZVL9s.js";import"./useButton-DofEV6SJ.js";import"./useFocusable-CAGu0lKI.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./LoadingCircle-CZrma5le.js";import"./IconCheckMark-CLvJH1sB.js";import"./IconEyeOff-Dzh4tjis.js";import"./IconExclamationMarkTriangle-CRTWkDyu.js";import"./IconExclamationMarkTriangle24-GqPjgFpk.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./validation-C9S5KgfE.js";import"./LegacyTooltip-BoEBGEhI.js";import"./useLink-DorAuuFQ.js";import"./usePopper-ByXn8U-3.js";import"./index-BxibOwXx.js";import"./index-CfyPTyT-.js";import"./Portal-By7XnO0v.js";import"./IconExclamationMarkCircle-Cob4vb5T.js";import"./IconExclamationMarkCircle24-DpwtNT9z.js";import"./IconDotsVertical16-BxwAscAb.js";import"./IconFaceHappy16-DoPLH7St.js";import"./useControlledState-C0C-dzuH.js";import"./useFormValidationState-Vs0Uifwm.js";import"./InputLabel-Cb39M_3M.js";import"./TooltipIcon-DgUrnRFN.js";import"./IconQuestionMarkCircle-C_agVHg1.js";import"./IconMinus-Bw7tNJhm.js";function Te(r){let{collection:e,focusMode:t}=r,s=Ne(r),u=f.useMemo(()=>r.disabledKeys?new Set(r.disabledKeys):new Set,[r.disabledKeys]),i=s.setFocusedKey;s.setFocusedKey=(n,c)=>{if(t==="cell"&&n!=null){let h=e.getItem(n);if((h==null?void 0:h.type)==="item"){var d,l;let y=W(h,e);c==="last"?n=(d=ae(y))===null||d===void 0?void 0:d.key:n=(l=ie(y))===null||l===void 0?void 0:l.key}}i(n,c)};let a=f.useMemo(()=>new Ie(e,s),[e,s]);const m=f.useRef(null);return f.useEffect(()=>{if(s.focusedKey!=null&&!e.getItem(s.focusedKey)){const n=m.current.getItem(s.focusedKey),c=n.parentKey!=null&&(n.type==="cell"||n.type==="rowheader"||n.type==="column")?m.current.getItem(n.parentKey):n,d=m.current.rows,l=e.rows,h=d.length-l.length;let y=Math.min(h>1?Math.max(c.index-h+1,0):c.index,l.length-1),p;for(;y>=0;){if(!a.isDisabled(l[y].key)&&l[y].type!=="headerrow"){p=l[y];break}y<l.length-1?y++:(y>c.index&&(y=c.index),y--)}if(p){const v=p.hasChildNodes?[...W(p,e)]:[],S=p.hasChildNodes&&c!==n&&n.index<v.length?v[n.index].key:p.key;s.setFocusedKey(S)}else s.setFocusedKey(null)}m.current=e},[e,a,s,s.focusedKey]),{collection:e,disabledKeys:u,isKeyboardNavigationDisabled:!1,selectionManager:a}}class $e{*[Symbol.iterator](){yield*[...this.rows]}get size(){return[...this.rows].length}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){var e;return(e=[...this.rows][0])===null||e===void 0?void 0:e.key}getLastKey(){var e;let t=[...this.rows];return(e=t[t.length-1])===null||e===void 0?void 0:e.key}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(t==null?void 0:t.childNodes)||[]}constructor(e){this.keyMap=new Map,this.keyMap=new Map,this.columnCount=e==null?void 0:e.columnCount,this.rows=[];let t=i=>{let a=this.keyMap.get(i.key);e.visitNode&&(i=e.visitNode(i)),this.keyMap.set(i.key,i);let m=new Set,n;for(let c of i.childNodes)c.type==="cell"&&c.parentKey==null&&(c.parentKey=i.key),m.add(c.key),n?(n.nextKey=c.key,c.prevKey=n.key):c.prevKey=null,t(c),n=c;if(n&&(n.nextKey=null),a)for(let c of a.childNodes)m.has(c.key)||s(c)},s=i=>{this.keyMap.delete(i.key);for(let a of i.childNodes)this.keyMap.get(a.key)===a&&s(a)},u;e.items.forEach((i,a)=>{let m={level:0,key:"row-"+a,type:"row",value:void 0,hasChildNodes:!0,childNodes:[...i.childNodes],rendered:void 0,textValue:void 0,...i};u?(u.nextKey=m.key,m.prevKey=u.key):m.prevKey=null,this.rows.push(m),t(m),u=m}),u&&(u.nextKey=null)}}const de="row-header-column-"+Math.random().toString(36).slice(2);let _="row-header-column-"+Math.random().toString(36).slice(2);for(;de===_;)_="row-header-column-"+Math.random().toString(36).slice(2);function De(r,e){if(e.length===0)return[];let t=[],s=new Map;for(let n of e){let c=n.parentKey,d=[n];for(;c;){let l=r.get(c);if(!l)break;if(s.has(l)){l.colspan++;let{column:h,index:y}=s.get(l);if(y>d.length)break;for(let p=y;p<d.length;p++)h.splice(p,0,null);for(let p=d.length;p<h.length;p++)h[p]&&s.has(h[p])&&(s.get(h[p]).index=p)}else l.colspan=1,d.push(l),s.set(l,{column:d,index:d.length-1});c=l.parentKey}t.push(d),n.index=t.length-1}let u=Math.max(...t.map(n=>n.length)),i=Array(u).fill(0).map(()=>[]),a=0;for(let n of t){let c=u-1;for(let d of n){if(d){let l=i[c],h=l.reduce((y,p)=>y+p.colspan,0);if(h<a){let y={type:"placeholder",key:"placeholder-"+d.key,colspan:a-h,index:h,value:null,rendered:null,level:c,hasChildNodes:!1,childNodes:[],textValue:null};l.length>0&&(l[l.length-1].nextKey=y.key,y.prevKey=l[l.length-1].key),l.push(y)}l.length>0&&(l[l.length-1].nextKey=d.key,d.prevKey=l[l.length-1].key),d.level=c,d.colIndex=a,l.push(d)}c--}a++}let m=0;for(let n of i){let c=n.reduce((d,l)=>d+l.colspan,0);if(c<e.length){let d={type:"placeholder",key:"placeholder-"+n[n.length-1].key,colspan:e.length-c,index:c,value:null,rendered:null,level:m,hasChildNodes:!1,childNodes:[],textValue:null,prevKey:n[n.length-1].key};n.push(d)}m++}return i.map((n,c)=>({type:"headerrow",key:"headerrow-"+c,index:c,value:null,rendered:null,level:0,hasChildNodes:!0,childNodes:n,textValue:null}))}class Ae extends $e{*[Symbol.iterator](){yield*this.body.childNodes}get size(){return this._size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){var e;return(e=ie(this.body.childNodes))===null||e===void 0?void 0:e.key}getLastKey(){var e;return(e=ae(this.body.childNodes))===null||e===void 0?void 0:e.key}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}getTextValue(e){let t=this.getItem(e);if(!t)return"";if(t.textValue)return t.textValue;let s=this.rowHeaderColumnKeys;if(s){let u=[];for(let i of t.childNodes){let a=this.columns[i.index];if(s.has(a.key)&&i.textValue&&u.push(i.textValue),u.length===s.size)break}return u.join(" ")}return""}constructor(e,t,s){let u=new Set,i,a=[];if(s!=null&&s.showSelectionCheckboxes){let l={type:"column",key:de,value:null,textValue:"",level:0,index:s!=null&&s.showDragButtons?1:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isSelectionCell:!0}};a.unshift(l)}if(s!=null&&s.showDragButtons){let l={type:"column",key:_,value:null,textValue:"",level:0,index:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isDragButtonCell:!0}};a.unshift(l)}let m=[],n=new Map,c=l=>{switch(l.type){case"body":i=l;break;case"column":n.set(l.key,l),l.hasChildNodes||(a.push(l),l.props.isRowHeader&&u.add(l.key));break;case"item":m.push(l);return}for(let h of l.childNodes)c(h)};for(let l of e)c(l);let d=De(n,a);d.forEach((l,h)=>m.splice(h,0,l)),super({columnCount:a.length,items:m,visitNode:l=>(l.column=a[l.index],l)}),this._size=0,this.columns=a,this.rowHeaderColumnKeys=u,this.body=i,this.headerRows=d,this._size=[...i.childNodes].length,this.rowHeaderColumnKeys.size===0&&this.rowHeaderColumnKeys.add(this.columns.find(l=>{var h,y;return!(!((h=l.props)===null||h===void 0)&&h.isDragButtonCell)&&!(!((y=l.props)===null||y===void 0)&&y.isSelectionCell)}).key)}}const Me={ascending:"descending",descending:"ascending"};function Ee(r){let[e,t]=f.useState(!1),{selectionMode:s="none",showSelectionCheckboxes:u,showDragButtons:i}=r,a=f.useMemo(()=>({showSelectionCheckboxes:u&&s!=="none",showDragButtons:i,selectionMode:s,columns:[]}),[r.children,u,s,i]),m=Ke(r,f.useCallback(d=>new Ae(d,null,a),[a]),a),{disabledKeys:n,selectionManager:c}=Te({...r,collection:m,disabledBehavior:r.disabledBehavior||"selection"});return{collection:m,disabledKeys:n,selectionManager:c,showSelectionCheckboxes:r.showSelectionCheckboxes||!1,sortDescriptor:r.sortDescriptor,isKeyboardNavigationDisabled:m.size===0||e,setKeyboardNavigationDisabled:t,sort(d,l){var h;r.onSortChange({column:d,direction:l??(((h=r.sortDescriptor)===null||h===void 0?void 0:h.column)===d?Me[r.sortDescriptor.direction]:"ascending")})}}}function ue(r){return null}ue.getCollectionNode=function*(e,t){let{children:s,columns:u}=e;if(t.columns=[],typeof s=="function"){if(!u)throw new Error("props.children was a function but props.columns is missing");for(let i of u)yield{type:"column",value:i,renderer:s}}else{let i=[];K.Children.forEach(s,a=>{i.push({type:"column",element:a})}),yield*i}};let Be=ue;function me(r){return null}me.getCollectionNode=function*(e){let{children:t,items:s}=e;yield{type:"body",hasChildNodes:!0,props:e,*childNodes(){if(typeof t=="function"){if(!s)throw new Error("props.children was a function but props.items is missing");for(let u of s)yield{type:"item",value:u,renderer:t}}else{let u=[];K.Children.forEach(t,i=>{u.push({type:"item",element:i})}),yield*u}}}};let _e=me;function he(r){return null}he.getCollectionNode=function*(e,t){let{title:s,children:u,childColumns:i}=e,a=s||u,m=e.textValue||(typeof a=="string"?a:"")||e["aria-label"],n=yield{type:"column",hasChildNodes:!!i||s&&K.Children.count(u)>0,rendered:a,textValue:m,props:e,*childNodes(){if(i)for(let d of i)yield{type:"column",value:d};else if(s){let d=[];K.Children.forEach(u,l=>{d.push({type:"column",element:l})}),yield*d}},shouldInvalidate(d){return c(d),!1}},c=d=>{for(let l of n)l.hasChildNodes||d.columns.push(l)};c(t)};let qe=he;function q(r){return null}q.getCollectionNode=function*(e,t){let{children:s,textValue:u,UNSTABLE_childItems:i}=e;yield{type:"item",props:e,textValue:u,"aria-label":e["aria-label"],hasChildNodes:!0,*childNodes(){if(t.showDragButtons&&(yield{type:"cell",key:"header-drag",props:{isDragButtonCell:!0}}),t.showSelectionCheckboxes&&t.selectionMode!=="none"&&(yield{type:"cell",key:"header",props:{isSelectionCell:!0}}),typeof s=="function"){for(let a of t.columns)yield{type:"cell",element:s(a.key),key:a.key};if(i)for(let a of i)yield{type:"item",value:a}}else{let a=[],m=[];if(K.Children.forEach(s,n=>{if(n.type===q){if(a.length<t.columns.length)throw new Error("All of a Row's child Cells must be positioned before any child Rows.");m.push({type:"item",element:n})}else a.push({type:"cell",element:n})}),a.length!==t.columns.length)throw new Error(`Cell count must match column count. Found ${a.length} cells and ${t.columns.length} columns.`);yield*a,yield*m}},shouldInvalidate(a){return a.columns.length!==t.columns.length||a.columns.some((m,n)=>m.key!==t.columns[n].key)||a.showSelectionCheckboxes!==t.showSelectionCheckboxes||a.showDragButtons!==t.showDragButtons||a.selectionMode!==t.selectionMode}}};let Ve=q;function ye(r){return null}ye.getCollectionNode=function*(e){let{children:t}=e,s=e.textValue||(typeof t=="string"?t:"")||e["aria-label"]||"";yield{type:"cell",props:e,rendered:t,textValue:s,"aria-label":e["aria-label"],hasChildNodes:!1}};let Fe=ye;var V=(r=>(r.Default="Default",r.Checkbox="Checkbox",r))(V||{});const O=({cell:r,selectionMode:e,type:t="Default",isChecked:s=!1,selectedRows:u,setSelectedRows:i})=>{const a=f.useRef(null);if(t==="Checkbox"){const{key:m}=r,n=()=>{if(!i)return;if(s){const d=u.filter(l=>l!==r.parentKey);i(d);return}const c=e===x.SingleSelect?[r.parentKey]:[...u,r.parentKey];i(c)};return o.jsx("td",{role:"cell",ref:a,className:M(["tw-pl-8 tw-py-4 tw-pr-4 tw-relative after:tw-absolute after:tw-left-0 after:tw-top-[-1px] after:tw-bottom-[-1px] after:tw-w-1",s?"after:tw-bg-box-selected-strong":"after:tw-bg-transparent"]),"data-test-id":"table-select-cell",children:o.jsx(ce,{value:m,"aria-label":r["aria-label"]||m,state:s?A.Checked:A.Unchecked,onChange:n})})}return o.jsx("td",{role:"cell",ref:a,className:M(["tw-p-4 tw-font-normal tw-text-xs focus:tw-outline-none",s?"tw-text-black-100 dark:tw-text-white":"tw-text-black-80 dark:tw-text-black-20"]),children:r.rendered})};O.displayName="FondueTableCell";O.__docgenInfo={description:"",methods:[],displayName:"FondueTableCell",props:{cell:{required:!0,tsType:{name:"any"},description:""},selectionMode:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"TableCellType"},description:"",defaultValue:{value:"TableCellType.Default",computed:!0}},isChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedRows:{required:!0,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:""},setSelectedRows:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""}}};var F=(r=>(r.Default="Default",r.SelectAll="SelectAll",r))(F||{});const z=({column:r,type:e="Default",rowIds:t,sortDirection:s,selectionMode:u,isColumnSorted:i=!1,handleSortChange:a,setSelectedRows:m})=>{const{key:n,rendered:c,props:{allowsSorting:d}}=r,[l,h]=f.useState(o.jsx(P,{})),[y,p]=f.useState(!1),v=f.useRef(null),S=d?"button":"span";if(f.useEffect(()=>{h(i?s===E.Descending?o.jsx(Se,{}):o.jsx(Re,{}):o.jsx(P,{}))},[i,s]),e==="SelectAll"){const g={"aria-label":"Select all",scope:"col"},b=y?A.Checked:A.Unchecked,k=()=>{m&&(m(y?[]:t),p(B=>!B))};return o.jsx("th",{...g,ref:v,className:"tw-pl-8 tw-py-3 tw-pr-4 tw-w-16 tw-border-l-4 tw-border-transparent tw-group tw-outline-none","data-test-id":"table-select-cell",children:u===x.SingleSelect?o.jsx("span",{className:"tw-sr-only",children:g["aria-label"]}):o.jsx(ce,{value:n,"aria-label":n,state:b,onChange:k})})}return o.jsx("th",{ref:v,className:M(["tw-text-xs tw-font-medium tw-text-black-100 dark:tw-text-white tw-px-4 tw-py-3 tw-outline-none tw-group focus-visible:bg-violet-90",d?"tw-cursor-pointer":""]),"data-test-id":"table-column",scope:"col",onClick:d?()=>a(r.key,s):()=>null,children:o.jsxs(S,{className:M(["tw-flex tw-gap-x-1 tw-items-center",je,d?"tw-cursor-pointer":"tw-cursor-default"]),children:[c,d&&o.jsx("span",{"aria-hidden":"true",className:i?"tw-text-violet-50":"tw-text-black-40 dark:tw-text-black-60 group-hover:tw-text-black-100 dark:group-hover:tw-text-white",children:f.cloneElement(l,{size:ne.Size12})})]})})};z.displayName="FondueTableColumnHeader";z.__docgenInfo={description:"",methods:[],displayName:"FondueTableColumnHeader",props:{column:{required:!0,tsType:{name:"any"},description:""},type:{required:!1,tsType:{name:"TableColumnHeaderType"},description:"",defaultValue:{value:"TableColumnHeaderType.Default",computed:!0}},rowIds:{required:!0,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:""},sortDirection:{required:!1,tsType:{name:"SortDirection"},description:""},selectionMode:{required:!0,tsType:{name:"string"},description:""},isColumnSorted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handleSortChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(column: string, direction?: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"SortDirection"},name:"direction"}],return:{name:"void"}}},description:""},setSelectedRows:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""}}};const H=({children:r})=>{const e=f.useRef(null);return o.jsx("tr",{role:"row",ref:e,className:"tw-py-4 tw-px-8 tw-sticky tw-top-0 tw-bg-base",children:r})};H.displayName="FondueTableHeaderRow";H.__docgenInfo={description:"",methods:[],displayName:"FondueTableHeaderRow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const L=({isSelected:r=!1,children:e})=>{const t=f.useRef(null),s={"aria-selected":r,role:"row"};return o.jsx("tr",{...s,ref:t,className:"tw-relative tw-border-t tw-border-black-10 hover:tw-bg-black-0 dark:tw-border-black-95 dark:hover:tw-bg-black-95","data-test-id":"table-row",children:e})};L.displayName="FondueTableRow";L.__docgenInfo={description:"",methods:[],displayName:"FondueTableRow",props:{isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var x=(r=>(r.NoSelect="none",r.SingleSelect="single",r.MultiSelect="multiple",r))(x||{}),E=(r=>(r.Ascending="ascending",r.Descending="descending",r))(E||{});const Oe="descending",ze=(r,e,t=!1)=>({children:[o.jsx(Be,{columns:r,children:s=>{const u=!!(s.sortable&&t);return o.jsx(qe,{allowsSorting:u,children:s.name})}},"table-header"),o.jsx(_e,{items:e,children:s=>o.jsx(Ve,{children:u=>o.jsx(Fe,{"aria-label":s.cells[u].ariaLabel,children:s.cells[u].value},`${s.key}-${u}`)})},"table-body")]}),He=(r,e)=>r.find(({key:t})=>t===e)||null,Le=r=>r.map(({key:e})=>e),j=({columns:r,rows:e,onSelectionChange:t,selectionMode:s="none",onSortChange:u,selectedRowIds:i=[],ariaLabel:a="Table"})=>{const m=s==="single"||s==="multiple",[{sortedColumnKey:n,sortOrder:c},d]=f.useState({sortedColumnKey:void 0,sortOrder:void 0}),l=(g,b)=>{d({sortedColumnKey:g,sortOrder:n!==g?Oe:b==="ascending"?"descending":"ascending"}),u==null||u(g,b)},h=Le(e),y=f.useRef(null),p=ze(r,e,!!u),v=Ee({...p,selectionMode:s,showSelectionCheckboxes:m}),{collection:S}=v;return o.jsx("div",{className:"tw-w-full tw-max-h-96 sm:tw-max-h-full",children:o.jsxs("table",{"aria-label":a,ref:y,className:"tw-border-collapse tw-table-auto tw-w-full tw-min-w-max tw-text-left dark:tw-bg-black-100 dark:tw-text-black-20",children:[o.jsx("thead",{children:S.headerRows.map(g=>o.jsxs(H,{children:[[...g.childNodes].map(b=>{const k=b.props.isSelectionCell?F.SelectAll:F.Default;return o.jsx(z,{column:b,type:k,rowIds:h,sortDirection:c,selectionMode:s,isColumnSorted:n===b.key,handleSortChange:l,setSelectedRows:t},b.key)}),o.jsx("td",{})]},g.key))}),o.jsx("tbody",{className:"tw-relative tw-z-[-1] sm:tw-z-auto",children:[...S.body.childNodes].map(g=>{const b=He(e,g.key);return o.jsxs(L,{isSelected:i.includes(g.key),children:[[...g.childNodes].map(k=>{const B=k.props.isSelectionCell?V.Checkbox:V.Default;return o.jsx(O,{cell:k,selectionMode:s,type:B,isChecked:i.includes(g.key),selectedRows:i,setSelectedRows:t},k.key)}),(b==null?void 0:b.actionElements)&&o.jsx("td",{className:"tw-sticky tw-right-0 tw-z-10","data-test-id":"table-actions",children:o.jsx("div",{className:"tw-float-right hover:tw-bg-gradient-to-r hover:tw-from-transparent hover:tw-to-black-0 dark:hover:tw-to-black-95 tw-py-4 tw-pr-8 tw-pl-4",children:b.actionElements})})]},g.key)})})]})})};j.displayName="FondueTable";j.__docgenInfo={description:"",methods:[],displayName:"FondueTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    name: string;
    key: string;
    sortable?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"key",value:{name:"string",required:!0}},{key:"sortable",value:{name:"boolean",required:!1}}]}}],raw:"Column[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    key: Key;
    // cell keys have to correspond to column key values
    // e.g. Column { name: 'User', key: 'user' } ==> Row Cell { user: { id: 'anna', value: 'Anna' } }
    cells: Record<string, Cell>;
    actionElements?: ReactNode;
}`,signature:{properties:[{key:"key",value:{name:"Key",required:!0}},{key:"cells",value:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    sortId: string | number;
    value: ReactNode;
    ariaLabel?: string;
}`,signature:{properties:[{key:"sortId",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"value",value:{name:"ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}}]}}],raw:"Record<string, Cell>",required:!0}},{key:"actionElements",value:{name:"ReactNode",required:!1}}]}}],raw:"Row[]"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: string, direction?: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"SortDirection"},name:"direction"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"SelectionMode"},description:"",defaultValue:{value:"SelectionMode.NoSelect",computed:!0}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:"",defaultValue:{value:"[]",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Table'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const _t={title:"Components/Table",component:j,tags:["autodocs"],args:{selectionMode:x.NoSelect},argTypes:{type:{options:Object.keys(x),control:{type:"select"}}}},R=({name:r})=>o.jsxs("div",{className:"tw-flex tw-gap-x-2 tw-items-center",children:[o.jsx(Ce,{size:ne.Size32}),o.jsxs("div",{children:[o.jsx("p",{children:r}),o.jsx("p",{children:"mb@gmail.com"})]})]}),C=()=>o.jsx(we,{style:ge.Default,emphasis:be.Default,"aria-label":"action menu",onClick:fe("click"),size:ve.Small,icon:o.jsx(xe,{})}),pe=[{name:"User",key:"user"},{name:"Active Sessions",key:"activeSessions",sortable:!0},{name:"Last Active",key:"lastActive"},{name:"Regions",key:"regions"},{name:"Countries",key:"countries"}],D=[{key:"row-1",actionElements:o.jsx(C,{}),cells:{user:{sortId:"anna",value:o.jsx(R,{name:"Anna"})},activeSessions:{sortId:108,value:o.jsx(w,{children:"108"})},lastActive:{sortId:12,value:"12 days ago"},regions:{sortId:"europe",value:o.jsx(w,{children:"Europe"})},countries:{sortId:"france-spain",value:o.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[o.jsx(w,{children:"France"}),o.jsx(w,{children:"Spain"})]})}}},{key:"row-2",actionElements:o.jsx(C,{}),cells:{user:{sortId:"bobby",value:o.jsx(R,{name:"Bobby"})},activeSessions:{sortId:125,value:o.jsx(w,{children:"125"})},lastActive:{sortId:14,value:"14 days ago"},regions:{sortId:"south-america",value:o.jsx(w,{children:"South America"})},countries:{sortId:"brazil-chile",value:o.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[o.jsx(w,{children:"Brazil"}),o.jsx(w,{children:"Chile"})]})}}},{key:"row-3",actionElements:o.jsx(C,{}),cells:{user:{sortId:"chris",value:o.jsx(R,{name:"Chris"})},activeSessions:{sortId:112,value:o.jsx(w,{children:"112"})},lastActive:{sortId:8,value:"8 days ago"},regions:{sortId:"africa",value:o.jsx(w,{children:"Africa"})},countries:{sortId:"marocco-egypt",value:o.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[o.jsx(w,{children:"Marocco"}),o.jsx(w,{children:"Egypt"})]})}}},{key:"row-4",actionElements:o.jsx(C,{}),cells:{user:{sortId:"david",value:o.jsx(R,{name:"David"})},activeSessions:{sortId:42,value:o.jsx(w,{children:"42"})},lastActive:{sortId:6,value:"6 days ago"},regions:{sortId:"europe",value:o.jsx(w,{children:"Europe"})},countries:{sortId:"germany",value:o.jsx("div",{className:"tw-flex tw-gap-x-2",children:o.jsx(w,{children:"Germany"})})}}},{key:"row-5",actionElements:o.jsx(C,{}),cells:{user:{sortId:"emily",value:o.jsx(R,{name:"Emily"})},activeSessions:{sortId:67,value:o.jsx(w,{children:"67"})},lastActive:{sortId:10,value:"10 days ago"},regions:{sortId:"asia",value:o.jsx(w,{children:"Asia"})},countries:{sortId:"thailand",value:o.jsx("div",{className:"tw-flex tw-gap-x-2",children:o.jsx(w,{children:"Thailand"})})}}}],U=r=>{const[e,t]=f.useState([]),[s,u]=f.useState(D),i=(a,m)=>{(()=>{const c=[...s];c.sort((d,l)=>{const h=d.cells[a].sortId,y=l.cells[a].sortId;return m===E.Descending?h<y?-1:1:h<y?1:-1}),u(c)})()};return o.jsx(j,{...r,columns:pe,rows:s,selectedRowIds:e,onSelectionChange:a=>t(a||[]),onSortChange:i})},Ue=r=>{const[e,t]=f.useState(D),[s,u]=f.useState([]),[i,a]=f.useState("");f.useEffect(()=>{i===""&&t(D);const n=D.filter(c=>Object.values(c.cells).some(l=>String(l.sortId).includes(i)));t(n)},[i]);const m=(n,c)=>{(()=>{const l=[...e];l.sort((h,y)=>{const p=h.cells[n].sortId,v=y.cells[n].sortId;return c===E.Descending?p<v?-1:1:p<v?1:-1}),t(l)})()};return o.jsxs(o.Fragment,{children:[o.jsx(ke,{value:i,onChange:n=>a(n),placeholder:'Filter rows by "sortId" value'}),o.jsx(j,{...r,columns:pe,rows:e,selectedRowIds:s,onSelectionChange:n=>u(n||[]),onSortChange:m})]})},T=U.bind({}),N=U.bind({});N.args={selectionMode:x.SingleSelect};const I=U.bind({});I.args={selectionMode:x.MultiSelect};const $=Ue.bind({});var Y,G,J;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(rows);
  const onSortChange = (key: string, direction?: SortDirection) => {
    const sortRows = () => {
      const clonedRows = [...sortedRows];
      clonedRows.sort((a, b) => {
        const keyA = a.cells[key].sortId;
        const keyB = b.cells[key].sortId;
        if (direction === SortDirection.Descending) {
          return keyA < keyB ? -1 : 1;
        } else {
          return keyA < keyB ? 1 : -1;
        }
      });
      setSortedRows(clonedRows);
    };
    sortRows();
  };
  return <Table {...args} columns={columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(J=(G=T.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(rows);
  const onSortChange = (key: string, direction?: SortDirection) => {
    const sortRows = () => {
      const clonedRows = [...sortedRows];
      clonedRows.sort((a, b) => {
        const keyA = a.cells[key].sortId;
        const keyB = b.cells[key].sortId;
        if (direction === SortDirection.Descending) {
          return keyA < keyB ? -1 : 1;
        } else {
          return keyA < keyB ? 1 : -1;
        }
      });
      setSortedRows(clonedRows);
    };
    sortRows();
  };
  return <Table {...args} columns={columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(Z=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,se;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(rows);
  const onSortChange = (key: string, direction?: SortDirection) => {
    const sortRows = () => {
      const clonedRows = [...sortedRows];
      clonedRows.sort((a, b) => {
        const keyA = a.cells[key].sortId;
        const keyB = b.cells[key].sortId;
        if (direction === SortDirection.Descending) {
          return keyA < keyB ? -1 : 1;
        } else {
          return keyA < keyB ? 1 : -1;
        }
      });
      setSortedRows(clonedRows);
    };
    sortRows();
  };
  return <Table {...args} columns={columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(se=(te=I.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,re;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [filteredRows, setfilteredRows] = useState<Row[]>(rows);
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [filter, setfilter] = useState('');
  useEffect(() => {
    if (filter === '') {
      setfilteredRows(rows);
    }
    const newFilteredRowsValue = rows.filter(row => {
      const cells = Object.values(row.cells);
      return cells.some(cell => String(cell.sortId).includes(filter));
    });
    setfilteredRows(newFilteredRowsValue);
  }, [filter]);
  const onSortChange = (key: string, direction?: SortDirection) => {
    const sortRows = () => {
      const clonedRows = [...filteredRows];
      clonedRows.sort((a, b) => {
        const keyA = a.cells[key].sortId;
        const keyB = b.cells[key].sortId;
        if (direction === SortDirection.Descending) {
          return keyA < keyB ? -1 : 1;
        } else {
          return keyA < keyB ? 1 : -1;
        }
      });
      setfilteredRows(clonedRows);
    };
    sortRows();
  };
  return <>
            <TextInput value={filter} onChange={val => setfilter(val)} placeholder={'Filter rows by "sortId" value'} />
            <Table {...args} columns={columns} rows={filteredRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />
        </>;
}`,...(re=(oe=$.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const qt=["ReadOnly","SingleSelect","MultiSelect","FilterRows"];export{$ as FilterRows,I as MultiSelect,T as ReadOnly,N as SingleSelect,qt as __namedExportsOrder,_t as default};
