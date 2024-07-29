import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as p}from"./index-BwDkhjyp.js";import{B as V,b as _,c as M}from"./Button-CYWlMQhW.js";import{I as N,a as F,b as Y,c as H}from"./IconCrop-DmnjnoSH.js";import{u as A}from"./useMemoizedId-EtHZ7Sxa.js";import{m as d}from"./merge-DI-veSMP.js";import{$ as R}from"./useButton-DofEV6SJ.js";import{a as Q}from"./FocusScope-DYM0gkGr.js";import{$ as O}from"./useFocusRing-4Vnvtzpc.js";import{$ as Z,a as C}from"./useMenuTrigger-tJGR04eL.js";import{$ as ee,a as te}from"./useOverlayTriggerState-Bq4IkdK0.js";import{b as B}from"./useFocusable-CAGu0lKI.js";import{A as se}from"./ActionMenu-D7YdPmx3.js";import{I as ae}from"./IconCaretDown-C-LXN2Z7.js";import{I as g}from"./IconSize-BcCrF_mi.js";import{F as U}from"./focusStyle-CBFElZiz.js";import{I as ne}from"./IconCaretRight-BUEYSaCS.js";import{I as re}from"./IconMusicNote-qGOLTNH6.js";import{A as ie}from"./index-hyK68Dd8.js";import{m as oe}from"./motion-C48bHxkn.js";import{a as le}from"./MenuItem-BEWw9_Ux.js";import{I as ce}from"./IconCross-BUeQrH0h.js";import{I as de}from"./IconIcon-BwqYlkW2.js";const ue=(t,s)=>{switch(!0){case t===f.Large:return"tw-w-full tw-h-32";case s:return"tw-w-11 tw-h-11";default:return"tw-w-14 tw-h-full"}},j=({asset:t,size:s,isActive:i=!1,isMultiAsset:a=!1})=>{const n=t.type==="icon"||t.type==="audio"?t.type:"default";return e.jsxs("div",{className:d(["tw-flex tw-flex-none tw-items-center tw-justify-center tw-bg-black-5 dark:tw-bg-black-95",ue(s,a),i?"tw-text-black-100 dark:tw-text-white":"tw-text-black-80 dark:tw-text-black-20"]),"data-test-id":"asset-input-thumbnail",children:[n==="icon"&&e.jsx("span",{"data-test-id":"asset-input-thumbnail-icon",children:t.icon&&p.cloneElement(t.icon,{size:g.Size24})}),n==="audio"&&e.jsx(re,{size:g.Size24,"data-test-id":"asset-input-thumbnail-audio"}),n==="default"&&e.jsx("img",{src:t.src,alt:t.alt||"",className:"tw-max-h-full","data-test-id":"asset-input-thumbnail-image"})]})};j.displayName="FondueAssetThumbnail";j.__docgenInfo={description:"",methods:[],displayName:"FondueAssetThumbnail",props:{asset:{required:!0,tsType:{name:"intersection['asset']",raw:"SelectedAssetProps['asset']"},description:""},size:{required:!0,tsType:{name:"AssetInputSize",raw:"AssetInputProps['size']"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isMultiAsset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me=t=>t.type==="image"||t.type==="logo",$=({assets:t})=>{const s=t.length,i=t.slice(0,4);if(s<4)for(const[a]of[...Array(4-s)].entries())i.push({name:`empty picture ${a+1}`,size:20,type:"image",extension:"",src:"",source:"upload"});return e.jsx("div",{className:"tw-border-black-20 tw-grid tw-grid-cols-2 tw-gap-0.5",children:i.map((a,n)=>me(a)?e.jsx("div",{"data-test-id":"assets-image",style:a.src?{backgroundImage:`url(${a.src})`}:{},className:d([n===0?"tw-rounded-tl":n===2&&"tw-rounded-bl","tw-h-11 tw-w-11 tw-bg-black-5"])},a.name):e.jsx("div",{className:"tw-h-11 tw-w-11",children:e.jsx(j,{asset:a,size:f.Small,isMultiAsset:!0})},a.src))})};$.displayName="FondueSelectedAssetsThumbnail";$.__docgenInfo={description:"",methods:[],displayName:"FondueSelectedAssetsThumbnail"};const D=({numberOfLocations:t,assets:s,onClick:i})=>{const a=p.useRef(null),{buttonProps:n}=R({onPress:i},a),{isFocusVisible:m,focusProps:w}=O(),u=s.length;return e.jsx("div",{"data-test-id":"multi-asset-preview",children:e.jsxs("button",{title:"multi-asset-preview",...B(n,w),ref:a,className:d(["tw-flex tw-border tw-rounded hover:tw-border-black-90 dark:hover:tw-border-black-40 focus-visible:tw-outline-none dark:tw-text-white tw-mb-4 tw-w-full",m?`${U} tw-border-black-90 dark:tw-border-black-10`:"tw-border-black-20 dark:tw-border-black-80"]),children:[e.jsx($,{assets:s}),e.jsxs("div",{className:"tw-py-6 tw-px-4 tw-flex",children:[e.jsxs("div",{className:"tw-text-left",children:[e.jsxs("div",{className:"tw-font-bold tw-text-m","data-test-id":"assets-amount",children:[u," ",u===1?"Asset":"Assets"]}),e.jsxs("div",{className:"tw-text-black-60 tw-text-s tw-mt-1","data-test-id":"number-of-locations",children:[t," ",t===1?"location":"locations"]})]}),e.jsx("div",{className:"tw-flex tw-items-center tw-text-black-70 tw-pl-4",children:e.jsx("div",{className:"tw-absolute tw-right-12",children:e.jsx(ne,{size:g.Size24})})})]})]})})};D.__docgenInfo={description:"",methods:[],displayName:"MultiAssetPreview",props:{numberOfLocations:{required:!0,tsType:{name:"number"},description:""},assets:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| (ImageAsset & UploadSource)
| (ImageAsset & LibrarySource)
| (IconAsset & UploadSource)
| (IconAsset & LibrarySource)
| (OtherAsset & UploadSource)
| (OtherAsset & LibrarySource)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"AssetType[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function pe(t){let s=ee(t),[i,a]=p.useState(null),[n,m]=p.useState([]),w=()=>{m([]),s.close()};return{focusStrategy:i,...s,open(r=null){a(r),s.open()},toggle(r=null){a(r),s.toggle()},close(){w()},expandedKeysStack:n,openSubmenu:(r,o)=>{m(c=>o>c.length?c:[...c.slice(0,o),r])},closeSubmenu:(r,o)=>{m(c=>c[o]===r?c.slice(0,o):c)}}}const T=({asset:t,isLoading:s=!1,hideSize:i=!1,hideExtension:a=!1})=>{let n=s?"Uploading":"Uploaded";return(t==null?void 0:t.source)==="library"&&(n=t.sourceName),e.jsxs("span",{className:"tw-max-w-full tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-black-80 tw-text-xxs tw-overflow-hidden",children:[e.jsx("div",{className:"tw-flex-none tw-inline-flex tw-items-center tw-justify-center",children:(t==null?void 0:t.source)==="library"?e.jsx(N,{}):e.jsx(F,{})}),n&&e.jsx("span",{className:"tw-whitespace-nowrap",children:n}),t&&!s&&e.jsxs(e.Fragment,{children:[e.jsx(I,{label:t.extension,hide:a}),e.jsx(I,{label:t.size,hide:i})]})]})};T.displayName="FondueAssetSubline";const I=({label:t,hide:s})=>s||!t?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"tw-text-m tw-text-black-20 tw-h-4 tw-flex tw-items-center",children:"•"}),e.jsx("span",{className:"tw-whitespace-nowrap",children:t})]});I.displayName="FondueFileInfo";T.__docgenInfo={description:"",methods:[],displayName:"FondueAssetSubline",props:{isLoading:{defaultValue:{value:"false",computed:!1},required:!1},hideSize:{defaultValue:{value:"false",computed:!1},required:!1},hideExtension:{defaultValue:{value:"false",computed:!1},required:!1}}};const z=({size:t})=>e.jsxs("svg",{className:d(["tw-animate-spin",t===f.Large?"tw-w-16 tw-h-16":"tw-w-5 tw-h-5"]),width:"100%",height:"100%",viewBox:"0 0 44 44","data-test-id":"spinning-circle",children:[e.jsx("path",{fill:"none",stroke:"#f1f3f9",strokeWidth:"2",d:"M2,22 a20,20 0 0,1 20,-20"}),e.jsx("path",{fill:"none",stroke:"#7159d7",strokeWidth:"2",d:"M2,22 a20,20 0 1,0 20,-20"})]});z.displayName="FondueSpinningCircle";z.__docgenInfo={description:"",methods:[],displayName:"FondueSpinningCircle"};const q=({asset:t,size:s,actions:i,isLoading:a,hideSize:n=!1,hideExtension:m=!1})=>{const w=A(),u=A(),l=p.useRef(null),r=pe({}),{isOpen:o,focusStrategy:c}=r,{menuTriggerProps:b}=Z({},r,l),{buttonProps:v}=R(b,l),{isFocusVisible:h,focusProps:k}=O(),x=p.useRef(null),{overlayProps:y}=te({onClose:()=>r.close(),shouldCloseOnBlur:!0,isOpen:o,isDismissable:!0},x),P=(t==null?void 0:t.name)||"Your Asset",[G,J]=p.useState(0);return p.useEffect(()=>{let S=null;const K=()=>{var E;const X=((E=l.current)==null?void 0:E.getBoundingClientRect().width)??0;S=window.setTimeout(()=>J(X),0)},L=new ResizeObserver(K);return l.current&&L.observe(l.current),()=>{S&&clearTimeout(S),L.disconnect()}},[]),e.jsxs("div",{className:"tw-font-sans tw-w-full tw-text-s tw-bg-transparent tw-font-normal tw-min-w-0",title:P,"data-test-id":"asset-single-input",children:[e.jsxs("button",{...B(v,k),ref:l,"aria-labelledby":u,className:d(["tw-w-full tw-flex tw-border tw-rounded tw-overflow-hidden hover:tw-border-black-90 dark:hover:tw-border-black-40 focus-visible:tw-outline-none",h&&U,s===f.Large?"tw-h-[11.5rem] tw-flex-col":"tw-h-14",o||h?"tw-border-black-90 dark:tw-border-black-10":"tw-border-black-20 dark:tw-border-black-80"]),children:[a&&!t&&e.jsx("div",{className:d(["tw-flex tw-justify-center tw-items-center",s===f.Large?"tw-w-full tw-h-32":"tw-w-14 tw-h-full"]),children:e.jsx(z,{size:s})}),t&&e.jsx(j,{asset:t,size:s,isActive:o||h}),e.jsxs("div",{className:d(["tw-min-w-0 tw-max-w-full tw-flex tw-flex-auto tw-self-stretch tw-border-black-100 tw-border-opacity-25",s===f.Large?"tw-h-14 tw-border-t":"tw-h-full tw-border-l"]),children:[e.jsxs("div",{className:"tw-min-w-0 tw-pr-3 tw-pl-4 tw-flex tw-flex-auto tw-flex-col tw-items-start tw-justify-center tw-h-full",children:[e.jsx("span",{id:u,className:d(["tw-max-w-full tw-text-black-100 tw-text-s tw-truncate dark:tw-text-white",(o||h)&&"tw-font-medium"]),children:P}),e.jsx(T,{asset:t,isLoading:a,hideSize:n,hideExtension:m})]}),e.jsx("div",{className:"tw-p-4 tw-flex tw-flex-none tw-items-center tw-justify-center",children:e.jsx("span",{className:d(["tw-transition-transform",o?"tw-rotate-180 tw-text-black-90":"tw-text-black-60"]),children:e.jsx(ae,{size:g.Size16})})})]})]}),e.jsx(ie,{children:o&&e.jsx(oe.div,{style:{width:G},className:"tw-absolute tw-left-auto tw-w-full tw-overflow-hidden tw-box-border tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-mt-2 tw-z-20","data-test-id":"asset-single-input-flyout",initial:{height:0},animate:{height:"auto"},exit:{height:0},transition:{ease:[.04,.62,.23,.98],duration:.5},children:e.jsx(Q,{restoreFocus:!0,children:e.jsxs("div",{...y,ref:x,children:[e.jsx(C,{onDismiss:()=>r.close()}),e.jsx(se,{menuBlocks:i,focus:c,onClick:()=>r.close()}),e.jsx(C,{onDismiss:()=>r.close()})]})})},`asset-input-menu-${w}`)})]})};q.displayName="FondueSelectedAsset";q.__docgenInfo={description:"",methods:[],displayName:"FondueSelectedAsset",props:{hideSize:{defaultValue:{value:"false",computed:!1},required:!1},hideExtension:{defaultValue:{value:"false",computed:!1},required:!1}}};var f=(t=>(t.Small="Small",t.Large="Large",t))(f||{});const W=({assets:t=[],numberOfLocations:s=1,actions:i=[],size:a="Small",isLoading:n=!1,hideSize:m=!1,hideExtension:w=!1,onLibraryClick:u,onUploadClick:l,onMultiAssetClick:r,acceptFileType:o})=>{const c=t.length,b=p.useRef(null),v=A(),h=x=>{const y=x.target.files;y&&l&&l(y)},k=()=>{b.current&&b.current.click()};return(n||c===1)&&i?e.jsx(q,{asset:t[0],size:a,actions:i,isLoading:n,hideExtension:w,hideSize:m}):c>1&&r?e.jsx(D,{assets:t,onClick:r,numberOfLocations:s}):e.jsxs("div",{"data-test-id":"asset-input-placeholder",className:d(["tw-grid tw-p-3 tw-border tw-border-dashed tw-border-black-10 tw-rounded",l&&u?"tw-grid-cols-2 tw-divide-x tw-divide-black-10":"tw-grid-cols-1"]),children:[l&&e.jsxs("div",{className:d(["tw-flex tw-flex-col tw-h-8",u&&"tw-pr-3"]),"data-test-id":"asset-input-upload",children:[e.jsx(V,{style:_.Default,onClick:k,emphasis:M.Weak,icon:e.jsx(F,{}),children:"Upload"}),e.jsx("input",{id:v,ref:b,className:"tw-hidden",type:"file",accept:o,multiple:!!r,onChange:h})]}),u&&e.jsx("div",{className:d(["tw-flex tw-flex-col tw-h-8",l&&"tw-pl-3"]),"data-test-id":"asset-input-library",children:e.jsx(V,{style:_.Default,onClick:u,emphasis:M.Weak,icon:e.jsx(N,{}),children:"Browse"})})]})};W.displayName="FondueAssetInput";W.__docgenInfo={description:"",methods:[],displayName:"FondueAssetInput",props:{assets:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| (ImageAsset & UploadSource)
| (ImageAsset & LibrarySource)
| (IconAsset & UploadSource)
| (IconAsset & LibrarySource)
| (OtherAsset & UploadSource)
| (OtherAsset & LibrarySource)`,elements:[{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"},{name:"unknown"}]}],raw:"AssetType[]"},description:"",defaultValue:{value:"[]",computed:!1}},size:{required:!1,tsType:{name:"AssetInputSize"},description:"",defaultValue:{value:"AssetInputSize.Small",computed:!0}},numberOfLocations:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},actions:{required:!1,tsType:{name:"Array",raw:"ActionMenuProps['menuBlocks']"},description:"",defaultValue:{value:"[]",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideSize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideExtension:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onUploadClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""},onLibraryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMultiAssetClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},acceptFileType:{required:!1,tsType:{name:"string"},description:""}}};const Me=[{id:"block1",ariaLabel:"First section",menuItems:[{id:"1",title:"Replace with Asset",decorator:e.jsx(N,{})},{id:"2",title:"Replace with Upload",decorator:e.jsx(F,{})}]},{id:"block2",ariaLabel:"Second section",menuItems:[{id:"10",title:"Crop / Resize",decorator:e.jsx(Y,{})},{id:"11",title:"Small warning",decorator:e.jsx(H,{})}]},{id:"block3",ariaLabel:"Third section",menuItems:[{id:"20",title:"Remove",style:le.Danger,decorator:e.jsx(ce,{})}]}],we=[{name:"foo1",size:2e3,type:"image",extension:"JPG",src:"https://picsum.photos/100/150",source:"upload"},{name:"foo2",size:2e3,type:"image",extension:"JPG",src:"https://picsum.photos/200/200",source:"library",sourceName:""},{name:"foo3",size:2e3,type:"image",extension:"JPG",src:"https://picsum.photos/100/100",source:"library",sourceName:""},{name:"foo4",size:1e3,type:"image",extension:"JPG",src:"https://picsum.photos/400/200",source:"library",sourceName:""},{name:"foo5",size:1e3,type:"image",extension:"JPG",src:"https://picsum.photos/400/200",source:"library",sourceName:""}],Ce=[...we.slice(0,2),{source:"library",sourceName:"Foobar",name:"foo",type:"icon",icon:e.jsx(de,{})},{source:"library",sourceName:"Foobar",name:"foo",extension:"MP3",size:2e3,type:"audio"},{source:"library",sourceName:"Foobar",name:"foo",extension:"MP3",size:2e3,type:"audio"}];export{W as A,we as E,Ce as M,f as a,Me as b};
