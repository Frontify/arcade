import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{a as Ie}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as w,R as A}from"./index-BwDkhjyp.js";import{B as g}from"./Badge-DCccyOuc.js";import{B as je,b as Ke,c as Te,a as $e}from"./Button-DqlvyMV-.js";import{T as Ae}from"./TextInput-Bg0oUMhx.js";import{I as De}from"./IconDotsVertical-KOWBblCt.js";import{I as J,a as Be,b as Me,c as Ee}from"./IconFaceHappy-SqDx6HCw.js";import{I as we}from"./IconSize-BcCrF_mi.js";import{$ as qe,c as Q,d as ge,e as fe,b as _e,a as Ve}from"./SelectionManager-C_gdLktp.js";import{c as be,C as _}from"./Checkbox-BIPK0YKt.js";import{m as $}from"./merge-DI-veSMP.js";import{a as Fe}from"./focusStyle-CBFElZiz.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconCross-BUeQrH0h.js";import"./colors-cqDZVL9s.js";import"./useButton-DFNFXdnN.js";import"./useFocusable-wKuCPQI4.js";import"./useFocusRing-Vzyl7-Lk.js";import"./SSRProvider-CYXx33DY.js";import"./chain-D5h1pgIF.js";import"./LoadingCircle-CZrma5le.js";import"./IconCheckMark-BVQYjlwc.js";import"./IconEyeOff-BaqRyiPL.js";import"./IconExclamationMarkTriangle-BucVSAOs.js";import"./IconExclamationMarkTriangle24-C3Ss9MHq.js";import"./useMemoizedId-EtHZ7Sxa.js";import"./validation-C9S5KgfE.js";import"./LegacyTooltip-D2Oc8Nam.js";import"./useLink-Bd1Qu62S.js";import"./usePopper-DPXU-o95.js";import"./index-DxjWwZXO.js";import"./index-CfyPTyT-.js";import"./Portal-0C9N3MSP.js";import"./IconExclamationMarkCircle-BkFYjnTO.js";import"./IconExclamationMarkCircle24-ChDY1Cve.js";import"./IconDotsVertical16-nx6NRgIG.js";import"./IconFaceHappy16-Cf-O_fX6.js";import"./useControlledState-C0C-dzuH.js";import"./useFormValidationState-Bo5Bz1o-.js";import"./InputLabel-DrkD0R8a.js";import"./TooltipIcon-C8fsnENL.js";import"./IconQuestionMarkCircle-CMNESB9s.js";import"./IconMinus-BhxphMyC.js";import"./IconMinus16-ChDakrvn.js";function Oe(o){let{collection:e,focusMode:n}=o,s=o.UNSAFE_selectionState||qe(o),d=w.useMemo(()=>o.disabledKeys?new Set(o.disabledKeys):new Set,[o.disabledKeys]),i=s.setFocusedKey;s.setFocusedKey=(l,c)=>{if(n==="cell"&&l!=null){let h=e.getItem(l);if((h==null?void 0:h.type)==="item"){var u,t;let y=Q(h,e);c==="last"?l=(u=ge(y))===null||u===void 0?void 0:u.key:l=(t=fe(y))===null||t===void 0?void 0:t.key}}i(l,c)};let a=w.useMemo(()=>new _e(e,s),[e,s]);const m=w.useRef(null);return w.useEffect(()=>{if(s.focusedKey!=null&&!e.getItem(s.focusedKey)){const l=m.current.getItem(s.focusedKey),c=l.parentKey!=null&&(l.type==="cell"||l.type==="rowheader"||l.type==="column")?m.current.getItem(l.parentKey):l,u=m.current.rows,t=e.rows,h=u.length-t.length;let y=Math.min(h>1?Math.max(c.index-h+1,0):c.index,t.length-1),p;for(;y>=0;){if(!a.isDisabled(t[y].key)&&t[y].type!=="headerrow"){p=t[y];break}y<t.length-1?y++:(y>c.index&&(y=c.index),y--)}if(p){const k=p.hasChildNodes?[...Q(p,e)]:[],S=p.hasChildNodes&&c!==l&&l.index<k.length?k[l.index].key:p.key;s.setFocusedKey(S)}else s.setFocusedKey(null)}m.current=e},[e,a,s,s.focusedKey]),{collection:e,disabledKeys:d,isKeyboardNavigationDisabled:!1,selectionManager:a}}class ze{*[Symbol.iterator](){yield*[...this.rows]}get size(){return[...this.rows].length}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let n=this.keyMap.get(e);return n?n.prevKey:null}getKeyAfter(e){let n=this.keyMap.get(e);return n?n.nextKey:null}getFirstKey(){var e;return(e=[...this.rows][0])===null||e===void 0?void 0:e.key}getLastKey(){var e;let n=[...this.rows];return(e=n[n.length-1])===null||e===void 0?void 0:e.key}getItem(e){return this.keyMap.get(e)}at(e){const n=[...this.getKeys()];return this.getItem(n[e])}getChildren(e){let n=this.keyMap.get(e);return(n==null?void 0:n.childNodes)||[]}constructor(e){this.keyMap=new Map,this.keyMap=new Map,this.columnCount=e==null?void 0:e.columnCount,this.rows=[];let n=i=>{let a=this.keyMap.get(i.key);e.visitNode&&(i=e.visitNode(i)),this.keyMap.set(i.key,i);let m=new Set,l;for(let c of i.childNodes)c.type==="cell"&&c.parentKey==null&&(c.parentKey=i.key),m.add(c.key),l?(l.nextKey=c.key,c.prevKey=l.key):c.prevKey=null,n(c),l=c;if(l&&(l.nextKey=null),a)for(let c of a.childNodes)m.has(c.key)||s(c)},s=i=>{this.keyMap.delete(i.key);for(let a of i.childNodes)this.keyMap.get(a.key)===a&&s(a)},d;e.items.forEach((i,a)=>{let m={level:0,key:"row-"+a,type:"row",value:void 0,hasChildNodes:!0,childNodes:[...i.childNodes],rendered:void 0,textValue:void 0,...i};d?(d.nextKey=m.key,m.prevKey=d.key):m.prevKey=null,this.rows.push(m),n(m),d=m}),d&&(d.nextKey=null)}}const ke="row-header-column-"+Math.random().toString(36).slice(2);let z="row-header-column-"+Math.random().toString(36).slice(2);for(;ke===z;)z="row-header-column-"+Math.random().toString(36).slice(2);function He(o,e){if(e.length===0)return[];let n=[],s=new Map;for(let l of e){let c=l.parentKey,u=[l];for(;c;){let t=o.get(c);if(!t)break;if(s.has(t)){t.colspan++;let{column:h,index:y}=s.get(t);if(y>u.length)break;for(let p=y;p<u.length;p++)h.splice(p,0,null);for(let p=u.length;p<h.length;p++)h[p]&&s.has(h[p])&&(s.get(h[p]).index=p)}else t.colspan=1,u.push(t),s.set(t,{column:u,index:u.length-1});c=t.parentKey}n.push(u),l.index=n.length-1}let d=Math.max(...n.map(l=>l.length)),i=Array(d).fill(0).map(()=>[]),a=0;for(let l of n){let c=d-1;for(let u of l){if(u){let t=i[c],h=t.reduce((y,p)=>y+p.colspan,0);if(h<a){let y={type:"placeholder",key:"placeholder-"+u.key,colspan:a-h,index:h,value:null,rendered:null,level:c,hasChildNodes:!1,childNodes:[],textValue:null};t.length>0&&(t[t.length-1].nextKey=y.key,y.prevKey=t[t.length-1].key),t.push(y)}t.length>0&&(t[t.length-1].nextKey=u.key,u.prevKey=t[t.length-1].key),u.level=c,u.colIndex=a,t.push(u)}c--}a++}let m=0;for(let l of i){let c=l.reduce((u,t)=>u+t.colspan,0);if(c<e.length){let u={type:"placeholder",key:"placeholder-"+l[l.length-1].key,colspan:e.length-c,index:c,value:null,rendered:null,level:m,hasChildNodes:!1,childNodes:[],textValue:null,prevKey:l[l.length-1].key};l.push(u)}m++}return i.map((l,c)=>({type:"headerrow",key:"headerrow-"+c,index:c,value:null,rendered:null,level:0,hasChildNodes:!0,childNodes:l,textValue:null}))}class Le extends ze{*[Symbol.iterator](){yield*this.body.childNodes}get size(){return this._size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let n=this.keyMap.get(e);return n?n.prevKey:null}getKeyAfter(e){let n=this.keyMap.get(e);return n?n.nextKey:null}getFirstKey(){var e;return(e=fe(this.body.childNodes))===null||e===void 0?void 0:e.key}getLastKey(){var e;return(e=ge(this.body.childNodes))===null||e===void 0?void 0:e.key}getItem(e){return this.keyMap.get(e)}at(e){const n=[...this.getKeys()];return this.getItem(n[e])}getChildren(e){return e===this.body.key?this.body.childNodes:super.getChildren(e)}getTextValue(e){let n=this.getItem(e);if(!n)return"";if(n.textValue)return n.textValue;let s=this.rowHeaderColumnKeys;if(s){let d=[];for(let i of n.childNodes){let a=this.columns[i.index];if(s.has(a.key)&&i.textValue&&d.push(i.textValue),d.length===s.size)break}return d.join(" ")}return""}constructor(e,n,s){let d=new Set,i,a=[];if(s!=null&&s.showSelectionCheckboxes){let t={type:"column",key:ke,value:null,textValue:"",level:0,index:s!=null&&s.showDragButtons?1:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isSelectionCell:!0}};a.unshift(t)}if(s!=null&&s.showDragButtons){let t={type:"column",key:z,value:null,textValue:"",level:0,index:0,hasChildNodes:!1,rendered:null,childNodes:[],props:{isDragButtonCell:!0}};a.unshift(t)}let m=[],l=new Map,c=t=>{switch(t.type){case"body":i=t;break;case"column":l.set(t.key,t),t.hasChildNodes||(a.push(t),t.props.isRowHeader&&d.add(t.key));break;case"item":m.push(t);return}for(let h of t.childNodes)c(h)};for(let t of e)c(t);let u=He(l,a);u.forEach((t,h)=>m.splice(h,0,t)),super({columnCount:a.length,items:m,visitNode:t=>(t.column=a[t.index],t)}),this._size=0,this.columns=a,this.rowHeaderColumnKeys=d,this.body=i,this.headerRows=u,this._size=[...i.childNodes].length,this.rowHeaderColumnKeys.size===0&&this.rowHeaderColumnKeys.add(this.columns.find(t=>{var h,y;return!(!((h=t.props)===null||h===void 0)&&h.isDragButtonCell)&&!(!((y=t.props)===null||y===void 0)&&y.isSelectionCell)}).key)}}const Ue={ascending:"descending",descending:"ascending"};function Pe(o){let[e,n]=w.useState(!1),{selectionMode:s="none",showSelectionCheckboxes:d,showDragButtons:i}=o,a=w.useMemo(()=>({showSelectionCheckboxes:d&&s!=="none",showDragButtons:i,selectionMode:s,columns:[]}),[o.children,d,s,i]),m=Ve(o,w.useCallback(u=>new Le(u,null,a),[a]),a),{disabledKeys:l,selectionManager:c}=Oe({...o,collection:m,disabledBehavior:o.disabledBehavior||"selection"});return{collection:m,disabledKeys:l,selectionManager:c,showSelectionCheckboxes:o.showSelectionCheckboxes||!1,sortDescriptor:o.sortDescriptor,isKeyboardNavigationDisabled:m.size===0||e,setKeyboardNavigationDisabled:n,sort(u,t){var h;o.onSortChange({column:u,direction:t??(((h=o.sortDescriptor)===null||h===void 0?void 0:h.column)===u?Ue[o.sortDescriptor.direction]:"ascending")})}}}function ve(o){return null}ve.getCollectionNode=function*(e,n){let{children:s,columns:d}=e;if(n.columns=[],typeof s=="function"){if(!d)throw new Error("props.children was a function but props.columns is missing");for(let i of d)yield{type:"column",value:i,renderer:s}}else{let i=[];A.Children.forEach(s,a=>{i.push({type:"column",element:a})}),yield*i}};let We=ve;function xe(o){return null}xe.getCollectionNode=function*(e){let{children:n,items:s}=e;yield{type:"body",hasChildNodes:!0,props:e,*childNodes(){if(typeof n=="function"){if(!s)throw new Error("props.children was a function but props.items is missing");for(let d of s)yield{type:"item",value:d,renderer:n}}else{let d=[];A.Children.forEach(n,i=>{d.push({type:"item",element:i})}),yield*d}}}};let Ye=xe;function Se(o){return null}Se.getCollectionNode=function*(e,n){let{title:s,children:d,childColumns:i}=e,a=s||d,m=e.textValue||(typeof a=="string"?a:"")||e["aria-label"],l=yield{type:"column",hasChildNodes:!!i||s&&A.Children.count(d)>0,rendered:a,textValue:m,props:e,*childNodes(){if(i)for(let u of i)yield{type:"column",value:u};else if(s){let u=[];A.Children.forEach(d,t=>{u.push({type:"column",element:t})}),yield*u}},shouldInvalidate(u){return c(u),!1}},c=u=>{for(let t of l)t.hasChildNodes||u.columns.push(t)};c(n)};let Ge=Se;function H(o){return null}H.getCollectionNode=function*(e,n){let{children:s,textValue:d,UNSTABLE_childItems:i}=e;yield{type:"item",props:e,textValue:d,"aria-label":e["aria-label"],hasChildNodes:!0,*childNodes(){if(n.showDragButtons&&(yield{type:"cell",key:"header-drag",props:{isDragButtonCell:!0}}),n.showSelectionCheckboxes&&n.selectionMode!=="none"&&(yield{type:"cell",key:"header",props:{isSelectionCell:!0}}),typeof s=="function"){for(let a of n.columns)yield{type:"cell",element:s(a.key),key:a.key};if(i)for(let a of i)yield{type:"item",value:a}}else{let a=[],m=[];if(A.Children.forEach(s,l=>{if(l.type===H){if(a.length<n.columns.length)throw new Error("All of a Row's child Cells must be positioned before any child Rows.");m.push({type:"item",element:l})}else a.push({type:"cell",element:l})}),a.length!==n.columns.length)throw new Error(`Cell count must match column count. Found ${a.length} cells and ${n.columns.length} columns.`);yield*a,yield*m}},shouldInvalidate(a){return a.columns.length!==n.columns.length||a.columns.some((m,l)=>m.key!==n.columns[l].key)||a.showSelectionCheckboxes!==n.showSelectionCheckboxes||a.showDragButtons!==n.showDragButtons||a.selectionMode!==n.selectionMode}}};let Je=H;function Re(o){return null}Re.getCollectionNode=function*(e){let{children:n}=e,s=e.textValue||(typeof n=="string"?n:"")||e["aria-label"]||"";yield{type:"cell",props:e,rendered:n,textValue:s,"aria-label":e["aria-label"],hasChildNodes:!1}};let Qe=Re;var L=(o=>(o.Default="Default",o.Checkbox="Checkbox",o))(L||{});const P=({cell:o,selectionMode:e,type:n="Default",isChecked:s=!1,selectedRows:d,setSelectedRows:i,align:a="left"})=>{const m=w.useRef(null);if(n==="Checkbox"){const{key:l}=o,c=()=>{if(!i)return;if(s){const t=d.filter(h=>h!==o.parentKey);i(t);return}const u=e===R.SingleSelect?[o.parentKey]:[...d,o.parentKey];i(u)};return r.jsx("td",{role:"cell",ref:m,className:$(["tw-pl-8 tw-py-4 tw-pr-4 tw-relative after:tw-absolute after:tw-left-0 after:tw-top-[-1px] after:tw-bottom-[-1px] after:tw-w-1",s?"after:tw-bg-box-selected-strong":"after:tw-bg-transparent"]),"data-test-id":"table-select-cell",children:r.jsx(be,{value:l,"aria-label":o["aria-label"]||l,state:s?_.Checked:_.Unchecked,onChange:c})})}return r.jsx("td",{role:"cell",ref:m,className:$(["tw-p-4 tw-font-normal tw-text-xs focus:tw-outline-none",s?"tw-text-black-100 dark:tw-text-white":"tw-text-black-80 dark:tw-text-black-20"]),children:r.jsx("div",{className:$(["tw-flex",a==="right"&&"tw-w-full tw-justify-end"]),children:o.rendered})})};P.displayName="FondueTableCell";P.__docgenInfo={description:"",methods:[],displayName:"FondueTableCell",props:{cell:{required:!0,tsType:{name:"any"},description:""},selectionMode:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"TableCellType"},description:"",defaultValue:{value:"TableCellType.Default",computed:!0}},isChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedRows:{required:!0,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:""},setSelectedRows:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};var U=(o=>(o.Default="Default",o.SelectAll="SelectAll",o))(U||{});const W=({column:o,type:e="Default",rowIds:n,sortDirection:s,selectionMode:d,isColumnSorted:i=!1,handleSortChange:a,setSelectedRows:m,align:l="left"})=>{const{key:c,rendered:u,props:{allowsSorting:t}}=o,[h,y]=w.useState(r.jsx(J,{})),[p,k]=w.useState(!1),S=w.useRef(null),f=t?"button":"span",b=t?"tw-cursor-pointer":"tw-cursor-default",v=l==="right"?"tw-w-full tw-justify-end":"";if(w.useEffect(()=>{y(i?s===V.Descending?r.jsx(Be,{}):r.jsx(Me,{}):r.jsx(J,{}))},[i,s]),e==="SelectAll"){const x={"aria-label":"Select all",scope:"col"},F=p?_.Checked:_.Unchecked,O=()=>{m&&(m(p?[]:n),k(Ne=>!Ne))};return r.jsx("th",{...x,ref:S,className:"tw-pl-8 tw-py-3 tw-pr-4 tw-w-16 tw-border-l-4 tw-border-transparent tw-group tw-outline-none","data-test-id":"table-select-cell",children:d===R.SingleSelect?r.jsx("span",{className:"tw-sr-only",children:x["aria-label"]}):r.jsx(be,{value:c,"aria-label":c,state:F,onChange:O})})}return r.jsx("th",{ref:S,className:$(["tw-text-xs tw-font-medium tw-text-black-100 dark:tw-text-white tw-px-4 tw-py-3 tw-outline-none tw-group focus-visible:bg-violet-90",t?"tw-cursor-pointer":""]),"data-test-id":"table-column",scope:"col",onClick:t?()=>a(o.key,s):()=>null,children:r.jsxs(f,{className:$(["tw-flex tw-gap-x-1 tw-items-center",Fe,b,v]),children:[u,t&&r.jsx("span",{"aria-hidden":"true",className:i?"tw-text-violet-50":"tw-text-black-40 dark:tw-text-black-60 group-hover:tw-text-black-100 dark:group-hover:tw-text-white",children:w.cloneElement(h,{size:we.Size12})})]})})};W.displayName="FondueTableColumnHeader";W.__docgenInfo={description:"",methods:[],displayName:"FondueTableColumnHeader",props:{column:{required:!0,tsType:{name:"any"},description:""},type:{required:!1,tsType:{name:"TableColumnHeaderType"},description:"",defaultValue:{value:"TableColumnHeaderType.Default",computed:!0}},rowIds:{required:!0,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:""},sortDirection:{required:!1,tsType:{name:"SortDirection"},description:""},selectionMode:{required:!0,tsType:{name:"string"},description:""},isColumnSorted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handleSortChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(column: string, direction?: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"SortDirection"},name:"direction"}],return:{name:"void"}}},description:""},setSelectedRows:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const Y=({children:o})=>{const e=w.useRef(null);return r.jsx("tr",{role:"row",ref:e,className:"tw-py-4 tw-px-8 tw-sticky tw-top-0 tw-bg-base",children:o})};Y.displayName="FondueTableHeaderRow";Y.__docgenInfo={description:"",methods:[],displayName:"FondueTableHeaderRow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const G=({isSelected:o=!1,children:e})=>{const n=w.useRef(null),s={"aria-selected":o,role:"row"};return r.jsx("tr",{...s,ref:n,className:"tw-relative tw-border-t tw-border-black-10 hover:tw-bg-black-0 dark:tw-border-black-95 dark:hover:tw-bg-black-95","data-test-id":"table-row",children:e})};G.displayName="FondueTableRow";G.__docgenInfo={description:"",methods:[],displayName:"FondueTableRow",props:{isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var R=(o=>(o.NoSelect="none",o.SingleSelect="single",o.MultiSelect="multiple",o))(R||{}),V=(o=>(o.Ascending="ascending",o.Descending="descending",o))(V||{});const Xe="descending",Ze=(o,e,n=!1)=>({children:[r.jsx(We,{columns:o,children:s=>{const d=!!(s.sortable&&n);return r.jsx(Ge,{allowsSorting:d,align:s.align,children:s.titleNode??s.name})}},"table-header"),r.jsx(Ye,{items:e,children:s=>r.jsx(Je,{children:d=>r.jsx(Qe,{"aria-label":s.cells[d].ariaLabel,children:s.cells[d].value},`${s.key}-${d}`)})},"table-body")]}),et=(o,e)=>o.find(({key:n})=>n===e)||null,tt=o=>o.map(({key:e})=>e),D=({columns:o,rows:e,onSelectionChange:n,selectionMode:s="none",onSortChange:d,selectedRowIds:i=[],ariaLabel:a="Table"})=>{const m=s==="single"||s==="multiple",[{sortedColumnKey:l,sortOrder:c},u]=w.useState({sortedColumnKey:void 0,sortOrder:void 0}),t=(f,b)=>{u({sortedColumnKey:f,sortOrder:l!==f?Xe:b==="ascending"?"descending":"ascending"}),d==null||d(f,b)},h=tt(e),y=w.useRef(null),p=Ze(o,e,!!d),k=Pe({...p,selectionMode:s,showSelectionCheckboxes:m}),{collection:S}=k;return r.jsx("div",{className:"tw-w-full tw-max-h-96 sm:tw-max-h-full",children:r.jsxs("table",{"aria-label":a,ref:y,className:"tw-border-collapse tw-table-auto tw-w-full tw-min-w-max tw-text-left dark:tw-bg-black-100 dark:tw-text-black-20",children:[r.jsx("thead",{children:S.headerRows.map(f=>r.jsxs(Y,{children:[[...f.childNodes].map(b=>{var x;const v=b.props.isSelectionCell?U.SelectAll:U.Default;return r.jsx(W,{column:b,type:v,rowIds:h,sortDirection:c,selectionMode:s,isColumnSorted:l===b.key,handleSortChange:t,setSelectedRows:n,align:(x=b.props)==null?void 0:x.align},b.key)}),r.jsx("td",{})]},f.key))}),r.jsx("tbody",{className:"tw-relative tw-z-[-1] sm:tw-z-auto",children:[...S.body.childNodes].map(f=>{const b=et(e,f.key);return r.jsxs(G,{isSelected:i.includes(f.key),children:[[...f.childNodes].map(v=>{const x=o.find(({key:O})=>O===String(v.key).split(`${f.key}-`)[1]),F=v.props.isSelectionCell?L.Checkbox:L.Default;return r.jsx(P,{cell:v,selectionMode:s,type:F,isChecked:i.includes(f.key),selectedRows:i,setSelectedRows:n,align:x==null?void 0:x.align},v.key)}),(b==null?void 0:b.actionElements)&&r.jsx("td",{className:"tw-sticky tw-right-0 tw-z-10","data-test-id":"table-actions",children:r.jsx("div",{className:"tw-float-right hover:tw-bg-gradient-to-r hover:tw-from-transparent hover:tw-to-black-0 dark:hover:tw-to-black-95 tw-py-4 tw-pr-8 tw-pl-4",children:b.actionElements})})]},f.key)})})]})})};D.displayName="FondueTable";D.__docgenInfo={description:"",methods:[],displayName:"FondueTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sortId",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"value",value:{name:"ReactNode",required:!0}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"align",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}}]}}],raw:"Record<string, Cell>",required:!0}},{key:"actionElements",value:{name:"ReactNode",required:!1}}]}}],raw:"Row[]"},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(ids?: Key[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},name:"ids"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(column: string, direction?: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"column"},{type:{name:"SortDirection"},name:"direction"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"SelectionMode"},description:"",defaultValue:{value:"SelectionMode.NoSelect",computed:!0}},selectedRowIds:{required:!1,tsType:{name:"Array",elements:[{name:"Key"}],raw:"Key[]"},description:"",defaultValue:{value:"[]",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Table'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Qt={title:"Components/Table",component:D,tags:["autodocs"],args:{selectionMode:R.NoSelect},argTypes:{type:{options:Object.keys(R),control:{type:"select"}}}},C=({name:o})=>r.jsxs("div",{className:"tw-flex tw-gap-x-2 tw-items-center",children:[r.jsx(Ee,{size:we.Size32}),r.jsxs("div",{children:[r.jsx("p",{children:o}),r.jsx("p",{children:"mb@gmail.com"})]})]}),N=()=>r.jsx(je,{style:Ke.Default,emphasis:Te.Default,"aria-label":"action menu",onClick:Ie("click"),size:$e.Small,icon:r.jsx(De,{})}),Ce=[{name:"User",key:"user"},{name:"Active Sessions",key:"activeSessions",sortable:!0},{name:"Last Active",key:"lastActive"},{name:"Regions",key:"regions"},{name:"Countries",key:"countries"}],st=[{name:"User",key:"user"},{name:"Active Sessions",key:"activeSessions",sortable:!0,align:"right"},{name:"Last Active",key:"lastActive",align:"right"},{name:"Regions",key:"regions",align:"right"},{name:"Countries",key:"countries"}],nt=[{name:"User",key:"user",titleNode:r.jsx("span",{className:"tw-bg-green-20",children:"user"})},{name:"Active Sessions",key:"activeSessions",sortable:!0},{name:"Last Active",key:"lastActive",titleNode:r.jsx("span",{className:"tw-bg-red-20",children:"number - in %"})},{name:"Regions",key:"regions"},{name:"Countries",key:"countries"}],q=[{key:"row-1",actionElements:r.jsx(N,{}),cells:{user:{sortId:"anna",value:r.jsx(C,{name:"Anna"})},activeSessions:{sortId:108,value:r.jsx(g,{children:"108"})},lastActive:{sortId:12,value:"12 days ago"},regions:{sortId:"europe",value:r.jsx(g,{children:"Europe"})},countries:{sortId:"france-spain",value:r.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[r.jsx(g,{children:"France"}),r.jsx(g,{children:"Spain"})]})}}},{key:"row-2",actionElements:r.jsx(N,{}),cells:{user:{sortId:"bobby",value:r.jsx(C,{name:"Bobby"})},activeSessions:{sortId:125,value:r.jsx(g,{children:"125"})},lastActive:{sortId:14,value:"14 days ago"},regions:{sortId:"south-america",value:r.jsx(g,{children:"South America"})},countries:{sortId:"brazil-chile",value:r.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[r.jsx(g,{children:"Brazil"}),r.jsx(g,{children:"Chile"})]})}}},{key:"row-3",actionElements:r.jsx(N,{}),cells:{user:{sortId:"chris",value:r.jsx(C,{name:"Chris"})},activeSessions:{sortId:112,value:r.jsx(g,{children:"112"})},lastActive:{sortId:8,value:"8 days ago"},regions:{sortId:"africa",value:r.jsx(g,{children:"Africa"})},countries:{sortId:"marocco-egypt",value:r.jsxs("div",{className:"tw-flex tw-gap-x-2",children:[r.jsx(g,{children:"Marocco"}),r.jsx(g,{children:"Egypt"})]})}}},{key:"row-4",actionElements:r.jsx(N,{}),cells:{user:{sortId:"david",value:r.jsx(C,{name:"David"})},activeSessions:{sortId:42,value:r.jsx(g,{children:"42"})},lastActive:{sortId:6,value:"6 days ago"},regions:{sortId:"europe",value:r.jsx(g,{children:"Europe"})},countries:{sortId:"germany",value:r.jsx("div",{className:"tw-flex tw-gap-x-2",children:r.jsx(g,{children:"Germany"})})}}},{key:"row-5",actionElements:r.jsx(N,{}),cells:{user:{sortId:"emily",value:r.jsx(C,{name:"Emily"})},activeSessions:{sortId:67,value:r.jsx(g,{children:"67"})},lastActive:{sortId:10,value:"10 days ago"},regions:{sortId:"asia",value:r.jsx(g,{children:"Asia"})},countries:{sortId:"thailand",value:r.jsx("div",{className:"tw-flex tw-gap-x-2",children:r.jsx(g,{children:"Thailand"})})}}}],B=o=>{const[e,n]=w.useState([]),[s,d]=w.useState(o.rows||q),i=(a,m)=>{(()=>{const c=[...s];c.sort((u,t)=>{const h=u.cells[a].sortId,y=t.cells[a].sortId;return m===V.Descending?h<y?-1:1:h<y?1:-1}),d(c)})()};return r.jsx(D,{...o,columns:o.columns??Ce,rows:s,selectedRowIds:e,onSelectionChange:a=>n(a||[]),onSortChange:i})},ot=o=>{const[e,n]=w.useState(q),[s,d]=w.useState([]),[i,a]=w.useState("");w.useEffect(()=>{i===""&&n(q);const l=q.filter(c=>Object.values(c.cells).some(t=>String(t.sortId).includes(i)));n(l)},[i]);const m=(l,c)=>{(()=>{const t=[...e];t.sort((h,y)=>{const p=h.cells[l].sortId,k=y.cells[l].sortId;return c===V.Descending?p<k?-1:1:p<k?1:-1}),n(t)})()};return r.jsxs(r.Fragment,{children:[r.jsx(Ae,{value:i,onChange:l=>a(l),placeholder:'Filter rows by "sortId" value'}),r.jsx(D,{...o,columns:Ce,rows:e,selectedRowIds:s,onSelectionChange:l=>d(l||[]),onSortChange:m})]})},M=B.bind({}),I=B.bind({});I.args={selectionMode:R.SingleSelect};const j=B.bind({});j.args={selectionMode:R.MultiSelect};const E=ot.bind({}),K=B.bind({});K.args={columns:st};const T=B.bind({});T.args={columns:nt};var X,Z,ee;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
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
}`,...(ne=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,re,le;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
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
}`,...(le=(re=j.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,ie,ce;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;K.parameters={...K.parameters,docs:{...(de=K.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
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
}`,...(me=(ue=K.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,ye,pe;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
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
}`,...(pe=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:pe.source}}};const Xt=["ReadOnly","SingleSelect","MultiSelect","FilterRows","ColumnAlignment","ColumnTitleNodes"];export{K as ColumnAlignment,T as ColumnTitleNodes,E as FilterRows,j as MultiSelect,M as ReadOnly,I as SingleSelect,Xt as __namedExportsOrder,Qt as default};
