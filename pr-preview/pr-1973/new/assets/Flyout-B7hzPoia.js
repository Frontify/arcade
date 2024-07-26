import{j as o}from"./jsx-runtime-DBEcOq3S.js";import{r}from"./index-DtJulBIN.js";import{e as y}from"./fondue-icons311-BZCDKIoV.js";import{R as w,T as g,P as h,C as b,a as x}from"./index-fOb33GKb.js";import{s as v}from"./styleUtilities-T76WvCte.js";const T=v({base:'tw-block tw-bg-base tw-shadow-mid tw-border tw-border-line tw-w-full sm:tw-w-fit sm:tw-max-w-[--flyout-max-width] tw-group tw-mt-4 sm:tw-mt-0 [body>[data-radix-popper-content-wrapper]:has(&)]:max-sm:tw-p-2 [body>[data-radix-popper-content-wrapper]:has(&)]:max-sm:tw-w-screen [body>[data-radix-popper-content-wrapper]:has(&)]:max-sm:!tw-translate-x-0 [body>[data-radix-popper-content-wrapper]:has(&)]:max-sm:!tw-translate-y-0 before:tw-fixed tw-content-[""] before:tw-top-0 before:tw-left-0 before:tw-h-screen before:tw-w-screen before:tw-bg-black before:tw-opacity-30 before:tw-z-[-1] before:tw-pointer-events-none sm:before:tw-hidden',variants:{rounded:{true:"tw-rounded",false:""}},defaultVariants:{rounded:!0}}),F="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-line tw-font-medium group-data-[flyout-spacing=compact]:tw-p-4 group-data-[flyout-spacing=comfortable]:tw-p-6 group-data-[flyout-spacing=spacious]:tw-p-10 ",N="tw-flex tw-justify-end tw-gap-2 tw-border-t tw-border-line tw-font-medium group-data-[flyout-spacing=compact]:tw-p-4 group-data-[flyout-spacing=comfortable]:tw-p-6 group-data-[flyout-spacing=spacious]:tw-p-10 ",q="tw-flex tw-flex-col tw-gap-4 group-data-[flyout-spacing=compact]:tw-px-4 group-data-[flyout-spacing=compact]:tw-py-2 group-data-[flyout-spacing=comfortable]:tw-px-6 group-data-[flyout-spacing=comfortable]:tw-py-4 group-data-[flyout-spacing=spacious]:tw-px-10 group-data-[flyout-spacing=spacious]:tw-py-6 ",d=({children:e,...t})=>o.jsx(w,{...t,children:e});d.displayName="Flyout.Root";const n=({children:e,"data-test-id":t="fondue-flyout-trigger"},a)=>o.jsx(g,{"data-test-id":t,asChild:!0,ref:a,children:e});n.displayName="Flyout.Trigger";const l=({align:e="start",maxWidth:t="360px",padding:a="compact","data-test-id":s="fondue-flyout-content",children:c,...f},m)=>o.jsx(h,{children:o.jsx(b,{style:{"--flyout-max-width":t},ref:m,align:e,collisionPadding:8,sideOffset:8,className:T({...f}),"data-flyout-spacing":a,"data-test-id":s,...f,children:c})});l.displayName="Flyout.Content";const i=({showCloseButton:e,children:t,"data-test-id":a="fondue-flyout-header"},s)=>o.jsxs("div",{"data-test-id":a,ref:s,className:F,children:[o.jsx("div",{children:t}),e&&o.jsx(x,{role:"button","data-test-id":`${a}-close`,className:"tw-cursor-pointer",children:o.jsx(y,{size:20})})]});i.displayName="Flyout.Header";const u=({children:e,"data-test-id":t="fondue-flyout-footer"},a)=>o.jsx("div",{"data-test-id":t,ref:a,className:N,children:e});u.displayName="Flyout.Footer";const p=({children:e,"data-test-id":t="fondue-flyout-body"},a)=>o.jsx("div",{"data-test-id":t,ref:a,"data-flyout-spacing":"compact",className:q,children:e});p.displayName="Flyout.Body";const B={Root:d,Trigger:r.forwardRef(n),Content:r.forwardRef(l),Header:r.forwardRef(i),Footer:r.forwardRef(u),Body:r.forwardRef(p)};d.__docgenInfo={description:"",methods:[],displayName:"Flyout.Root",props:{modal:{required:!1,tsType:{name:"boolean"},description:`Disable interaction with the rest of the page
@default false`},open:{required:!1,tsType:{name:"boolean"},description:"The controlled `open` state of the flyout\n@default false"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Event handler called when the `open` state changes"},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"Flyout.Trigger",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-trigger'",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"Flyout.Content",props:{rounded:{required:!1,tsType:{name:"boolean"},description:`Add rounded corners to the flyout
@default true`},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Define the prefered side of the flyout. Can be overriden by viewport collisions viewport.
@default "bottom"`},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Define the prefered alignment of the flyout. Can be overriden by viewport collisions viewport.
@default "start"`,defaultValue:{value:"'start'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'compact' | 'comfortable' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"},{name:"literal",value:"'spacious'"}]},description:`Define the padding of the flyout
@default "compact"`,defaultValue:{value:"'compact'",computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:`Define the maximum width of the flyout
@default "360px"`,defaultValue:{value:"'360px'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-content'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"Flyout.Header",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show a close button in the header
@default false`},children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-header'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"Flyout.Footer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-footer'",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"Flyout.Body",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-flyout-body'",computed:!1}}}};export{B as F,l as a,d as b,n as c,i as d,p as e,u as f};
