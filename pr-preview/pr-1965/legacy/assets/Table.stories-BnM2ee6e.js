import{j as o}from"./jsx-runtime-Nms4Y4qS.js";import{a as Ne}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as w,R as A}from"./index-BwDkhjyp.js";import{B as g}from"./Badge-D-eWKloI.js";import{B as Ie,b as je,c as Ke,a as Te}from"./Button-CYWlMQhW.js";import{T as $e}from"./TextInput-BJ6WSDaF.js";import{I as Ae}from"./IconDotsVertical-CHqXF1Hr.js";import{I as G,a as De,b as Be,c as Me}from"./IconFaceHappy-DTNGuoNN.js";import{I as pe}from"./IconSize-BcCrF_mi.js";import{$ as Ee,c as J,d as we,e as ge,b as qe,a as _e}from"./SelectionManager-BuW52QpN.js";import{c as fe,C as _}from"./Checkbox-D9asks5b.js";import{m as $}from"./merge-DI-veSMP.js";import{a as Ve}from"./focusStyle-CBFElZiz.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconCross-Bt-I3opn.js";import"./colors-cqDZVL9s.js";import"./useButton-DofEV6SJ.js";import"./useFocusable-CAGu0lKI.js";import"./useFocusRing-4Vnvtzpc.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./LoadingCircle-CZrma5le.js";import"./IconCheckMark-CLvJH1sB.js";import"./IconEyeOff-Dzh4tjis.js";import"./IconExclamationMarkTriangle-CRTWkDyu.js";import"./IconExclamationMarkTriangle24-GqPjgFpk.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./validation-C9S5KgfE.js";import"./LegacyTooltip-BoEBGEhI.js";import"./useLink-DorAuuFQ.js";import"./usePopper-ByXn8U-3.js";import"./index-BxibOwXx.js";import"./index-CfyPTyT-.js";import"./Portal-By7XnO0v.js";import"./IconExclamationMarkCircle-Cob4vb5T.js";import"./IconExclamationMarkCircle24-DpwtNT9z.js";import"./IconDotsVertical16-BxwAscAb.js";import"./IconFaceHappy16-DoPLH7St.js";import"./useControlledState-C0C-dzuH.js";import"./useFormValidationState-Vs0Uifwm.js";import"./InputLabel-Cb39M_3M.js";import"./TooltipIcon-DgUrnRFN.js";import"./IconQuestionMarkCircle-C_agVHg1.js";import"./IconMinus-kXP7QfAW.js";import"./IconMinus16-homLHf6Z.js";function Fe(r){let{collection:e,focusMode:n}=r,s=Ee(r),d=w.useMemo(()=>r.disabledKeys?new Set(r.disabledKeys):new Set,[r.disabledKeys]),i=s.setFocusedKey;s.setFocusedKey=(l,c)=>{if(n==="cell"&&l!=null){let h=e.getItem(l);if((h==null?void 0:h.type)==="item"){var u,t;let y=J(h,e);c==="last"?l=(u=we(y))===null||u===void 0?void 0:u.key:l=(t=ge(y))===null||t===void 0?void 0:t.key}}i(l,c)};let a=w.useMemo(()=>new qe(e,s),[e,s]);const m=w.useRef(null);return w.useEffect(()=>{if(s.focusedKey!=null&&!e.getItem(s.focusedKey)){const l=m.current.getItem(s.focusedKey),c=l.parentKey!=null&&(l.type==="cell"||l.type==="rowheader"||l.type==="column")?m.current.getItem(l.parentKey):l,u=m.current.rows,t=e.rows,h=u.length-t.length;let y=Math.min(h>1?Math.max(c.index-h+1,0):c.index,t.length-1),p;for(;y>=0;){if(!a.isDisabled(t[y].key)&&t[y].type!=="headerrow"){p=t[y];break}y<t.length-1?y++:(y>c.index&&(y=c.index),y--)}if(p){const k=p.hasChildNodes?[...J(p,e)]:[],S=p.hasChildNodes&&c!==l&&l.index<k.length?k[l.index].key:p.key;s.setFocusedKey(S)}else s.setFocusedKey(null)}m.current=e},[e,a,s,s.focusedKey]),{collection:e,disabledKeys:d,isKeyboardNavigationDisabled:!1,selectionManager:a}}class Oe{*[Symbol.iterator](){yield*[...this.rows]}get size(){return[...this.rows].length}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let n=this.keyMap.get(e);return n?n.prevKey:null}getKeyAfter(e){let n=this.keyMap.get(e);return n?n.nextKey:null}getFirstKey(){var e;return(e=[...this.rows][0])===null||e===void 0?void 0:e.key}getLastKey(){var e;let n=[...this.rows];return(e=n[n.length-1])===null||e===void 0?void 0:e.key}getItem(e){return this.keyMap.get(e)}at(e){const n=[...this.getKeys()];return this.getItem(n[e])}getChildren(e){let n=this.keyMap.get(e);return(n==null?void 0:n.childNodes)||[]}constructor(e){this.keyMap=new Map,this.keyMap=new Map,this.columnCount=e==null?void 0:e.columnCount,this.rows=[];let n=i=>{let a=this.keyMap.get(i.key);e.visitNode&&(i=e.visitNode(i)),this.keyMap.set(i.key,i);let m=new Set,l;for(let c of i.childNodes)c.type==="cell"&&c.parentKey==null&&(c.parentKey=i.key),m.add(c.key),l?(l.nextKey=c.key,c.prevKey=l.key):c.prevKey=null,n(c),l=c;if(l&&(l.nextKey=null),a)for(let c of a.childNodes)m.has(c.key)||s(c)},s=i=>{this.keyMap.delete(i.key);for(let a of i.childNodes)this.keyMap.get(a.key)===a&&s(a)},d;e.items.forEach((i,a)=>{let m={level:0,key:"row-"+a,type:"row",value:void 0,hasChildNodes:!0,childNodes:[...i.childNodes],rendered:void 0,textValue:void 0,...i};d?(d.nextKey=m.key,m.prevKey=d.key):m.prevKey=null,this.rows.push(m),n(m),d=m}),d&&(d.nextKey=null)}}const be="row-header-column-"+Math.random().toString(36).slice(2);let O="row-header-column-"+Math.random().toString(36).slice(2);for(;be===O;)O="row-header-column-"+Math.random().toString(36).slice(2);function ze(r,e){if(e.length===0)return[];let n=[],s=new Map;for(let l of e){let c=l.parentKey,u=[l];for(;c;){let t=r.get(c);if(!t)break;if(s.has(t)){t.colspan++;let{column:h,index:y}=s.get(t);if(y>u.length)break;for(let p=y;p<u.length;p++)h.splice(p,0,null);for(let p=u.length;p<h.length;p++)h[p]&&s.has(h[p])&&(s.get(h[p]).index=p)}else t.colspan=1,u.push(t),s.set(t,{column:u,index:u.length-1});c=t.parentKey}n.push(u),l.index=n.length-1}let d=Math.max(...n.map(l=>l.length)),i=Array(d).fill(0).map(()=>[]),a=0;for(let l of n){let c=d-1;for(let u of l){if(u){let t=i[c],h=t.reduce((y,p)=>y+p.colspan,0);if(h<a){let y={type:"placeholder",key:"placeholder-"+u.key,colspan:a-h,index:h,value:null,rendered:null,level:c,hasChildNodes:!1,childNodes:[],textValue:null};t.length>0&&(t[t.length-1].nextKey=y.key,y.prevKey=t[t.length-1].key),t.push(y)}t.length>0&&(t[t.length-1].nextKey=u.key,u.prevKey=t[t.length-1].key),u.level=c,u.colIndex=a,t.push(u)}c--}a++}let m=0;for(let l of i){let c=l.reduce((u,t)=>u+t.colspan,0);if(c<e.length){let u={type:"placeholder",key:"placeholder-"+l[l.length-1].key,colspan:e.length-c,index:c,value:null,rendered:null,level:m,hasChildNodes:!1,childNodes:[],textValue:null,prevKey:l[l.length-1].key};l.push(u)}m++}return i.map((l,c)=>({type:"headerrow",key:"headerrow-"+c,index:c,value:null,rendered:null,level:0,hasChildNodes:!0,childNodes:l,textValue:null}))}class He extends Oe{*[Symbol.iterator](){yield*this.body.childNodes}get size(){return this._size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let n=this.keyMap.get(e);return n?n.prevKey:null}getKeyAfter(e){let n=this.keyMap.get(e);return n?n.nextKey:null}getFirstKey(){var e;return(e=ge(this.body.childNodes))===null||e===void 0?void 0:e.key}getLastKey(){var e;return(e=we(this.body.childNodes))===null||e===void 0?void 0:e.key}getItem(e){return this.keyMap.get(e)}at(e){const n=[...this.getKeys()];return this.getItem(n[e])}getTextValue(e){let n=this.getItem(e);if(!n)return"";if(n.textValue)return n.textValue;let s=this.rowHeaderColumnKeys;if(s){let d=[];for(let i of n.childNodes){let a=this.columns[i.index];if(s.has(a.key)&&i.textValue&&d.push(i.textValue),d.length===s.size)break}return d.join(" ")}return""}constructor(e,n,s){let d=new Set,i,a=[];if(s!=null&&s.showSelectionCheckboxes){let t={type:"column",key:be,value:null,textValue:"",level:0,index:s!=null&&s.showDragButtons?1:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isSelectionCell:!0}};a.unshift(t)}if(s!=null&&s.showDragButtons){let t={type:"column",key:O,value:null,textValue:"",level:0,index:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isDragButtonCell:!0}};a.unshift(t)}let m=[],l=new Map,c=t=>{switch(t.type){case"body":i=t;break;case"column":l.set(t.key,t),t.hasChildNodes||(a.push(t),t.props.isRowHeader&&d.add(t.key));break;case"item":m.push(t);return}for(let h of t.childNodes)c(h)};for(let t of e)c(t);let u=ze(l,a);u.forEach((t,h)=>m.splice(h,0,t)),super({columnCount:a.length,items:m,visitNode:t=>(t.column=a[t.index],t)}),this._size=0,this.columns=a,this.rowHeaderColumnKeys=d,this.body=i,this.headerRows=u,this._size=[...i.childNodes].length,this.rowHeaderColumnKeys.size===0&&this.rowHeaderColumnKeys.add(this.columns.find(t=>{var h,y;return!(!((h=t.props)===null||h===void 0)&&h.isDragButtonCell)&&!(!((y=t.props)===null||y===void 0)&&y.isSelectionCell)}).key)}}const Le={ascending:"descending",descending:"ascending"};function Ue(r){let[e,n]=w.useState(!1),{selectionMode:s="none",showSelectionCheckboxes:d,showDragButtons:i}=r,a=w.useMemo(()=>({showSelectionCheckboxes:d&&s!=="none",showDragButtons:i,selectionMode:s,columns:[]}),[r.children,d,s,i]),m=_e(r,w.useCallback(u=>new He(u,null,a),[a]),a),{disabledKeys:l,selectionManager:c}=Fe({...r,collection:m,disabledBehavior:r.disabledBehavior||"selection"});return{collection:m,disabledKeys:l,selectionManager:c,showSelectionCheckboxes:r.showSelectionCheckboxes||!1,sortDescriptor:r.sortDescriptor,isKeyboardNavigationDisabled:m.size===0||e,setKeyboardNavigationDisabled:n,sort(u,t){var h;r.onSortChange({column:u,direction:t??(((h=r.sortDescriptor)===null||h===void 0?void 0:h.column)===u?Le[r.sortDescriptor.direction]:"ascending")})}}}function ke(r){return null}ke.getCollectionNode=function*(e,n){let{children:s,columns:d}=e;if(n.columns=[],typeof s=="function"){if(!d)throw new Error("props.children was a function but props.columns is missing");for(let i of d)yield{type:"column",value:i,renderer:s}}else{let i=[];A.Children.forEach(s,a=>{i.push({type:"column",element:a})}),yield*i}};let Pe=ke;function ve(r){return null}ve.getCollectionNode=function*(e){let{children:n,items:s}=e;yield{type:"body",hasChildNodes:!0,props:e,*childNodes(){if(typeof n=="function"){if(!s)throw new Error("props.children was a function but props.items is missing");for(let d of s)yield{type:"item",value:d,renderer:n}}else{let d=[];A.Children.forEach(n,i=>{d.push({type:"item",element:i})}),yield*d}}}};let We=ve;function xe(r){return null}xe.getCollectionNode=function*(e,n){let{title:s,children:d,childColumns:i}=e,a=s||d,m=e.textValue||(typeof a=="string"?a:"")||e["aria-label"],l=yield{type:"column",hasChildNodes:!!i||s&&A.Children.count(d)>0,rendered:a,textValue:m,props:e,*childNodes(){if(i)for(let u of i)yield{type:"column",value:u};else if(s){let u=[];A.Children.forEach(d,t=>{u.push({type:"column",element:t})}),yield*u}},shouldInvalidate(u){return c(u),!1}},c=u=>{for(let t of l)t.hasChildNodes||u.columns.push(t)};c(n)};let Ye=xe;function z(r){return null}z.getCollectionNode=function*(e,n){let{children:s,textValue:d,UNSTABLE_childItems:i}=e;yield{type:"item",props:e,textValue:d,"aria-label":e["aria-label"],hasChildNodes:!0,*childNodes(){if(n.showDragButtons&&(yield{type:"cell",key:"header-drag",props:{isDragButtonCell:!0}}),n.showSelectionCheckboxes&&n.selectionMode!=="none"&&(yield{type:"cell",key:"header",props:{isSelectionCell:!0}}),typeof s=="function"){for(let a of n.columns)yield{type:"cell",element:s(a.key),key:a.key};if(i)for(let a of i)yield{type:"item",value:a}}else{let a=[],m=[];if(A.Children.forEach(s,l=>{if(l.type===z){if(a.length<n.columns.length)throw new Error("All of a Row's child Cells must be positioned before any child Rows.");m.push({type:"item",element:l})}else a.push({type:"cell",element:l})}),a.length!==n.columns.length)throw new Error(`Cell count must match column count. Found ${a.length} cells and ${n.columns.length} columns.`);yield*a,yield*m}},shouldInvalidate(a){return a.columns.length!==n.columns.length||a.columns.some((m,l)=>m.key!==n.columns[l].key)||a.showSelectionCheckboxes!==n.showSelectionCheckboxes||a.showDragButtons!==n.showDragButtons||a.selectionMode!==n.selectionMode}}};let Ge=z;function Se(r){return null}Se.getCollectionNode=function*(e){let{children:n}=e,s=e.textValue||(typeof n=="string"?n:"")||e["aria-label"]||"";yield{type:"cell",props:e,rendered:n,textValue:s,"aria-label":e["aria-label"],hasChildNodes:!1}};let Je=Se;var H=(r=>(r.Default="Default",r.Checkbox="Checkbox",r))(H||{});const U=({cell:r,selectionMode:e,type:n="Default",isChecked:s=!1,selectedRows:d,setSelectedRows:i,align:a="left"})=>{const m=w.useRef(null);if(n==="Checkbox"){const{key:l}=r,c=()=>{if(!i)return;if(s){const t=d.filter(h=>h!==r.parentKey);i(t);return}const u=e===R.SingleSelect?[r.parentKey]:[...d,r.parentKey];i(u)};return o.jsx("td",{role:"cell",ref:m,className:$(["tw-pl-8 tw-py-4 tw-pr-4 tw-relative after:tw-absolute after:tw-left-0 after:tw-top-[-1px] after:tw-bottom-[-1px] after:tw-w-1",s?"after:tw-bg-box-selected-strong":"after:tw-bg-transparent"]),"data-test-id":"table-select-cell",children:o.jsx(fe,{value:l,"aria-label":r["aria-label"]||l,state:s?_.Checked:_.Unchecked,onChange:c})})}return o.jsx("td",{role:"cell",ref:m,className:$(["tw-p-4 tw-font-normal tw-text-xs focus:tw-outline-none",s?"tw-text-black-100 dark:tw-text-white":"tw-text-black-80 dark:tw-text-black-20"]),children:o.jsx("div",{className:$(["tw-flex",a==="right"&&"tw-w-full tw-justify-end"]),children:r.rendered})})};U.displayName="FondueTableCell";U.__docgenInfo={description:"",methods:[],displayName:"FondueTableCell",props:{cell:{required:!0,tsType:{name:"any"},description:""},selectionMode:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"TableCellType"},description:"",defaultValue:{value:"TableCellType.Default",computed:!0}},isChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedRows:{required:!0,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:""},setSelectedRows:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};var L=(r=>(r.Default="Default",r.SelectAll="SelectAll",r))(L||{});const P=({column:r,type:e="Default",rowIds:n,sortDirection:s,selectionMode:d,isColumnSorted:i=!1,handleSortChange:a,setSelectedRows:m,align:l="left"})=>{const{key:c,rendered:u,props:{allowsSorting:t}}=r,[h,y]=w.useState(o.jsx(G,{})),[p,k]=w.useState(!1),S=w.useRef(null),b=t?"button":"span";if(w.useEffect(()=>{y(i?s===V.Descending?o.jsx(De,{}):o.jsx(Be,{}):o.jsx(G,{}))},[i,s]),e==="SelectAll"){const f={"aria-label":"Select all",scope:"col"},v=p?_.Checked:_.Unchecked,x=()=>{m&&(m(p?[]:n),k(F=>!F))};return o.jsx("th",{...f,ref:S,className:"tw-pl-8 tw-py-3 tw-pr-4 tw-w-16 tw-border-l-4 tw-border-transparent tw-group tw-outline-none","data-test-id":"table-select-cell",children:d===R.SingleSelect?o.jsx("span",{className:"tw-sr-only",children:f["aria-label"]}):o.jsx(fe,{value:c,"aria-label":c,state:v,onChange:x})})}return o.jsx("th",{ref:S,className:$(["tw-text-xs tw-font-medium tw-text-black-100 dark:tw-text-white tw-px-4 tw-py-3 tw-outline-none tw-group focus-visible:bg-violet-90",t?"tw-cursor-pointer":""]),"data-test-id":"table-column",scope:"col",onClick:t?()=>a(r.key,s):()=>null,children:o.jsxs(b,{className:$(["tw-flex tw-gap-x-1 tw-items-center",Ve,t?"tw-cursor-pointer":"tw-cursor-default",l==="right"?"tw-w-full tw-justify-end":""]),children:[u,t&&o.jsx("span",{"aria-hidden":"true",className:i?"tw-text-violet-50":"tw-text-black-40 dark:tw-text-black-60 group-hover:tw-text-black-100 dark:group-hover:tw-text-white",children:w.cloneElement(h,{size:pe.Size12})})]})})};P.displayName="FondueTableColumnHeader";P.__docgenInfo={description:"",methods:[],displayName:"FondueTableColumnHeader",props:{column:{required:!0,tsType:{name:"any"},description:""},type:{required:!1,tsType:{name:"TableColumnHeaderType"},description:"",defaultValue:{value:"TableColumnHeaderType.Default",computed:!0}},rowIds:{required:!0,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:""},sortDirection:{required:!1,tsType:{name:"SortDirection"},description:""},selectionMode:{required:!0,tsType:{name:"string"},description:""},isColumnSorted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handleSortChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(column: string, direction?: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"SortDirection"},name:"direction"}],return:{name:"void"}}},description:""},setSelectedRows:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const W=({children:r})=>{const e=w.useRef(null);return o.jsx("tr",{role:"row",ref:e,className:"tw-py-4 tw-px-8 tw-sticky tw-top-0 tw-bg-base",children:r})};W.displayName="FondueTableHeaderRow";W.__docgenInfo={description:"",methods:[],displayName:"FondueTableHeaderRow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Y=({isSelected:r=!1,children:e})=>{const n=w.useRef(null),s={"aria-selected":r,role:"row"};return o.jsx("tr",{...s,ref:n,className:"tw-relative tw-border-t tw-border-black-10 hover:tw-bg-black-0 dark:tw-border-black-95 dark:hover:tw-bg-black-95","data-test-id":"table-row",children:e})};Y.displayName="FondueTableRow";Y.__docgenInfo={description:"",methods:[],displayName:"FondueTableRow",props:{isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var R=(r=>(r.NoSelect="none",r.SingleSelect="single",r.MultiSelect="multiple",r))(R||{}),V=(r=>(r.Ascending="ascending",r.Descending="descending",r))(V||{});const Qe="descending",Xe=(r,e,n=!1)=>({children:[o.jsx(Pe,{columns:r,children:s=>{const d=!!(s.sortable&&n);return o.jsx(Ye,{allowsSorting:d,align:s.align,children:s.titleNode??s.name})}},"table-header"),o.jsx(We,{items:e,children:s=>o.jsx(Ge,{children:d=>o.jsx(Je,{"aria-label":s.cells[d].ariaLabel,children:s.cells[d].value},`${s.key}-${d}`)})},"table-body")]}),Ze=(r,e)=>r.find(({key:n})=>n===e)||null,et=r=>r.map(({key:e})=>e),D=({columns:r,rows:e,onSelectionChange:n,selectionMode:s="none",onSortChange:d,selectedRowIds:i=[],ariaLabel:a="Table"})=>{const m=s==="single"||s==="multiple",[{sortedColumnKey:l,sortOrder:c},u]=w.useState({sortedColumnKey:void 0,sortOrder:void 0}),t=(b,f)=>{u({sortedColumnKey:b,sortOrder:l!==b?Qe:f==="ascending"?"descending":"ascending"}),d==null||d(b,f)},h=et(e),y=w.useRef(null),p=Xe(r,e,!!d),k=Ue({...p,selectionMode:s,showSelectionCheckboxes:m}),{collection:S}=k;return o.jsx("div",{className:"tw-w-full tw-max-h-96 sm:tw-max-h-full",children:o.jsxs("table",{"aria-label":a,ref:y,className:"tw-border-collapse tw-table-auto tw-w-full tw-min-w-max tw-text-left dark:tw-bg-black-100 dark:tw-text-black-20",children:[o.jsx("thead",{children:S.headerRows.map(b=>o.jsxs(W,{children:[[...b.childNodes].map(f=>{var x;const v=f.props.isSelectionCell?L.SelectAll:L.Default;return o.jsx(P,{column:f,type:v,rowIds:h,sortDirection:c,selectionMode:s,isColumnSorted:l===f.key,handleSortChange:t,setSelectedRows:n,align:(x=f.props)==null?void 0:x.align},f.key)}),o.jsx("td",{})]},b.key))}),o.jsx("tbody",{className:"tw-relative tw-z-[-1] sm:tw-z-auto",children:[...S.body.childNodes].map(b=>{const f=Ze(e,b.key);return o.jsxs(Y,{isSelected:i.includes(b.key),children:[[...b.childNodes].map(v=>{const x=r.find(({key:Ce})=>Ce===String(v.key).split(`${b.key}-`)[1]),F=v.props.isSelectionCell?H.Checkbox:H.Default;return o.jsx(U,{cell:v,selectionMode:s,type:F,isChecked:i.includes(b.key),selectedRows:i,setSelectedRows:n,align:x==null?void 0:x.align},v.key)}),(f==null?void 0:f.actionElements)&&o.jsx("td",{className:"tw-sticky tw-right-0 tw-z-10","data-test-id":"table-actions",children:o.jsx("div",{className:"tw-float-right hover:tw-bg-gradient-to-r hover:tw-from-transparent hover:tw-to-black-0 dark:hover:tw-to-black-95 tw-py-4 tw-pr-8 tw-pl-4",children:f.actionElements})})]},b.key)})})]})})};D.displayName="FondueTable";D.__docgenInfo={description:"",methods:[],displayName:"FondueTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    name: string;
    titleNode?: ReactNode;
    key: string;
    sortable?: boolean;
    align?: ColumnAlign;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"titleNode",value:{name:"ReactNode",required:!1}},{key:"key",value:{name:"string",required:!0}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"align",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}}]}}],raw:"Column[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    key: Key;
    // cell keys have to correspond to column key values
    // e.g. Column { name: 'User', key: 'user' } ==> Row Cell { user: { id: 'anna', value: 'Anna' } }
    cells: Record<string, Cell>;
    actionElements?: ReactNode;
}`,signature:{properties:[{key:"key",value:{name:"Key",required:!0}},{key:"cells",value:{name:"Record",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
    sortId: string | number;
    value: ReactNode;
    ariaLabel?: string;
    align?: ColumnAlign;
}`,signature:{properties:[{key:"sortId",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"value",value:{name:"ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"align",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}}]}}],raw:"Record<string, Cell>",required:!0}},{key:"actionElements",value:{name:"ReactNode",required:!1}}]}}],raw:"Row[]"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: string, direction?: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"SortDirection"},name:"direction"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"SelectionMode"},description:"",defaultValue:{value:"SelectionMode.NoSelect",computed:!0}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:"",defaultValue:{value:"[]",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Table'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Jt={title:"Components/Table",component:D,tags:["autodocs"],args:{selectionMode:R.NoSelect},argTypes:{type:{options:Object.keys(R),control:{type:"select"}}}},C=({name:r})=>o.jsxs("div",{className:"tw-flex tw-gap-x-2 tw-items-center",children:[o.jsx(Me,{size:pe.Size32}),o.jsxs("div",{children:[o.jsx("p",{children:r}),o.jsx("p",{children:"mb@gmail.com"})]})]}),N=()=>o.jsx(Ie,{style:je.Default,emphasis:Ke.Default,"aria-label":"action menu",onClick:Ne("click"),size:Te.Small,icon:o.jsx(Ae,{})}),Re=[{name:"User",key:"user"},{name:"Active Sessions",key:"activeSessions",sortable:!0},{name:"Last Active",key:"lastActive"},{name:"Regions",key:"regions"},{name:"Countries",key:"countries"}],tt=[{name:"User",key:"user"},{name:"Active Sessions",key:"activeSessions",sortable:!0,align:"right"},{name:"Last Active",key:"lastActive",align:"right"},{name:"Regions",key:"regions",align:"right"},{name:"Countries",key:"countries"}],st=[{name:"User",key:"user",titleNode:o.jsx("span",{className:"tw-bg-green-20",children:"user"})},{name:"Active Sessions",key:"activeSessions",sortable:!0},{name:"Last Active",key:"lastActive",titleNode:o.jsxs("span",{className:"tw-bg-green-20",children:["last active",o.jsx("span",{className:"tw-w-[1px] tw-h-4 tw-border-[1px] tw-border-line tw-mx-2"}),"in %"]})},{name:"Regions",key:"regions"},{name:"Countries",key:"countries"}],q=[{key:"row-1",actionElements:o.jsx(N,{}),cells:{user:{sortId:"anna",value:o.jsx(C,{name:"Anna"})},activeSessions:{sortId:108,value:o.jsx(g,{children:"108"})},lastActive:{sortId:12,value:"12 days ago"},regions:{sortId:"europe",value:o.jsx(g,{children:"Europe"})},countries:{sortId:"france-spain",value:o.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[o.jsx(g,{children:"France"}),o.jsx(g,{children:"Spain"})]})}}},{key:"row-2",actionElements:o.jsx(N,{}),cells:{user:{sortId:"bobby",value:o.jsx(C,{name:"Bobby"})},activeSessions:{sortId:125,value:o.jsx(g,{children:"125"})},lastActive:{sortId:14,value:"14 days ago"},regions:{sortId:"south-america",value:o.jsx(g,{children:"South America"})},countries:{sortId:"brazil-chile",value:o.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[o.jsx(g,{children:"Brazil"}),o.jsx(g,{children:"Chile"})]})}}},{key:"row-3",actionElements:o.jsx(N,{}),cells:{user:{sortId:"chris",value:o.jsx(C,{name:"Chris"})},activeSessions:{sortId:112,value:o.jsx(g,{children:"112"})},lastActive:{sortId:8,value:"8 days ago"},regions:{sortId:"africa",value:o.jsx(g,{children:"Africa"})},countries:{sortId:"marocco-egypt",value:o.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[o.jsx(g,{children:"Marocco"}),o.jsx(g,{children:"Egypt"})]})}}},{key:"row-4",actionElements:o.jsx(N,{}),cells:{user:{sortId:"david",value:o.jsx(C,{name:"David"})},activeSessions:{sortId:42,value:o.jsx(g,{children:"42"})},lastActive:{sortId:6,value:"6 days ago"},regions:{sortId:"europe",value:o.jsx(g,{children:"Europe"})},countries:{sortId:"germany",value:o.jsx("div",{className:"tw-flex tw-gap-x-2",children:o.jsx(g,{children:"Germany"})})}}},{key:"row-5",actionElements:o.jsx(N,{}),cells:{user:{sortId:"emily",value:o.jsx(C,{name:"Emily"})},activeSessions:{sortId:67,value:o.jsx(g,{children:"67"})},lastActive:{sortId:10,value:"10 days ago"},regions:{sortId:"asia",value:o.jsx(g,{children:"Asia"})},countries:{sortId:"thailand",value:o.jsx("div",{className:"tw-flex tw-gap-x-2",children:o.jsx(g,{children:"Thailand"})})}}}],B=r=>{const[e,n]=w.useState([]),[s,d]=w.useState(r.rows||q),i=(a,m)=>{(()=>{const c=[...s];c.sort((u,t)=>{const h=u.cells[a].sortId,y=t.cells[a].sortId;return m===V.Descending?h<y?-1:1:h<y?1:-1}),d(c)})()};return o.jsx(D,{...r,columns:r.columns??Re,rows:s,selectedRowIds:e,onSelectionChange:a=>n(a||[]),onSortChange:i})},nt=r=>{const[e,n]=w.useState(q),[s,d]=w.useState([]),[i,a]=w.useState("");w.useEffect(()=>{i===""&&n(q);const l=q.filter(c=>Object.values(c.cells).some(t=>String(t.sortId).includes(i)));n(l)},[i]);const m=(l,c)=>{(()=>{const t=[...e];t.sort((h,y)=>{const p=h.cells[l].sortId,k=y.cells[l].sortId;return c===V.Descending?p<k?-1:1:p<k?1:-1}),n(t)})()};return o.jsxs(o.Fragment,{children:[o.jsx($e,{value:i,onChange:l=>a(l),placeholder:'Filter rows by "sortId" value'}),o.jsx(D,{...r,columns:Re,rows:e,selectedRowIds:s,onSelectionChange:l=>d(l||[]),onSortChange:m})]})},M=B.bind({}),I=B.bind({});I.args={selectionMode:R.SingleSelect};const j=B.bind({});j.args={selectionMode:R.MultiSelect};const E=nt.bind({}),K=B.bind({});K.args={columns:tt};const T=B.bind({});T.args={columns:st};var Q,X,Z;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(args.rows || rows);
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
  return <Table {...args} columns={args.columns ?? columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(Z=(X=M.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,se;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(args.rows || rows);
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
  return <Table {...args} columns={args.columns ?? columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(se=(te=I.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,re;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(args.rows || rows);
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
  return <Table {...args} columns={args.columns ?? columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(re=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,ae,ie;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
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
}`,...(ie=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,de,ue;K.parameters={...K.parameters,docs:{...(ce=K.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(args.rows || rows);
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
  return <Table {...args} columns={args.columns ?? columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(ue=(de=K.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,he,ye;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  const [sortedRows, setSortedRows] = useState<Row[]>(args.rows || rows);
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
  return <Table {...args} columns={args.columns ?? columns} rows={sortedRows} selectedRowIds={selectedRows} onSelectionChange={ids => setSelectedRows((ids as (string | number)[]) || [])} onSortChange={onSortChange} />;
}`,...(ye=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const Qt=["ReadOnly","SingleSelect","MultiSelect","FilterRows","ColumnAlignment","ColumnTitleNodes"];export{K as ColumnAlignment,T as ColumnTitleNodes,E as FilterRows,j as MultiSelect,M as ReadOnly,I as SingleSelect,Qt as __namedExportsOrder,Jt as default};
