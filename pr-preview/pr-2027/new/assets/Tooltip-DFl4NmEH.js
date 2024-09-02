import{j as u}from"./jsx-runtime-DBEcOq3S.js";import{r as a}from"./index-DtJulBIN.js";import{c as w,u as ee}from"./index-BHYJtXto.js";import{P as V,u as G,a as te}from"./index-Dhc4yksV.js";import{c as oe}from"./index-P-l_ls5c.js";import{D as re,P as ne}from"./index-COuo08O9.js";import{u as ae}from"./index-Bw4vj2Av.js";import{c as F,A as se,C as ie,a as le,R as ce}from"./index-CvF5QBWm.js";import{P as W}from"./index-D21DJKX5.js";import{c as ue}from"./styleUtilities-BnElyh0X.js";var pe="VisuallyHidden",B=a.forwardRef((e,o)=>u.jsx(V.span,{...e,ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));B.displayName=pe;var de=B,[_,$e]=oe("Tooltip",[F]),N=F(),$="TooltipProvider",fe=700,D="tooltip.open",[me,A]=_($),U=e=>{const{__scopeTooltip:o,delayDuration:t=fe,skipDelayDuration:r=300,disableHoverableContent:n=!1,children:s}=e,[l,f]=a.useState(!0),i=a.useRef(!1),p=a.useRef(0);return a.useEffect(()=>{const c=p.current;return()=>window.clearTimeout(c)},[]),u.jsx(me,{scope:o,isOpenDelayed:l,delayDuration:t,onOpen:a.useCallback(()=>{window.clearTimeout(p.current),f(!1)},[]),onClose:a.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>f(!0),r)},[r]),isPointerInTransitRef:i,onPointerInTransitChange:a.useCallback(c=>{i.current=c},[]),disableHoverableContent:n,children:s})};U.displayName=$;var k="Tooltip",[he,E]=_(k),Y=e=>{const{__scopeTooltip:o,children:t,open:r,defaultOpen:n=!1,onOpenChange:s,disableHoverableContent:l,delayDuration:f}=e,i=A(k,e.__scopeTooltip),p=N(o),[c,d]=a.useState(null),v=ae(),m=a.useRef(0),h=l??i.disableHoverableContent,y=f??i.delayDuration,T=a.useRef(!1),[x=!1,g]=ee({prop:r,defaultProp:n,onChange:H=>{H?(i.onOpen(),document.dispatchEvent(new CustomEvent(D))):i.onClose(),s==null||s(H)}}),b=a.useMemo(()=>x?T.current?"delayed-open":"instant-open":"closed",[x]),P=a.useCallback(()=>{window.clearTimeout(m.current),T.current=!1,g(!0)},[g]),R=a.useCallback(()=>{window.clearTimeout(m.current),g(!1)},[g]),M=a.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{T.current=!0,g(!0)},y)},[y,g]);return a.useEffect(()=>()=>window.clearTimeout(m.current),[]),u.jsx(ce,{...p,children:u.jsx(he,{scope:o,contentId:v,open:x,stateAttribute:b,trigger:c,onTriggerChange:d,onTriggerEnter:a.useCallback(()=>{i.isOpenDelayed?M():P()},[i.isOpenDelayed,M,P]),onTriggerLeave:a.useCallback(()=>{h?R():window.clearTimeout(m.current)},[R,h]),onOpen:P,onClose:R,disableHoverableContent:h,children:t})})};Y.displayName=k;var j="TooltipTrigger",X=a.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,n=E(j,t),s=A(j,t),l=N(t),f=a.useRef(null),i=G(o,f,n.onTriggerChange),p=a.useRef(!1),c=a.useRef(!1),d=a.useCallback(()=>p.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),u.jsx(se,{asChild:!0,...l,children:u.jsx(V.button,{"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute,...r,ref:i,onPointerMove:w(e.onPointerMove,v=>{v.pointerType!=="touch"&&!c.current&&!s.isPointerInTransitRef.current&&(n.onTriggerEnter(),c.current=!0)}),onPointerLeave:w(e.onPointerLeave,()=>{n.onTriggerLeave(),c.current=!1}),onPointerDown:w(e.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:w(e.onFocus,()=>{p.current||n.onOpen()}),onBlur:w(e.onBlur,n.onClose),onClick:w(e.onClick,n.onClose)})})});X.displayName=j;var O="TooltipPortal",[ve,Te]=_(O,{forceMount:void 0}),K=e=>{const{__scopeTooltip:o,forceMount:t,children:r,container:n}=e,s=E(O,o);return u.jsx(ve,{scope:o,forceMount:t,children:u.jsx(W,{present:t||s.open,children:u.jsx(ne,{asChild:!0,container:n,children:r})})})};K.displayName=O;var C="TooltipContent",z=a.forwardRef((e,o)=>{const t=Te(C,e.__scopeTooltip),{forceMount:r=t.forceMount,side:n="top",...s}=e,l=E(C,e.__scopeTooltip);return u.jsx(W,{present:r||l.open,children:l.disableHoverableContent?u.jsx(J,{side:n,...s,ref:o}):u.jsx(ye,{side:n,...s,ref:o})})}),ye=a.forwardRef((e,o)=>{const t=E(C,e.__scopeTooltip),r=A(C,e.__scopeTooltip),n=a.useRef(null),s=G(o,n),[l,f]=a.useState(null),{trigger:i,onClose:p}=t,c=n.current,{onPointerInTransitChange:d}=r,v=a.useCallback(()=>{f(null),d(!1)},[d]),m=a.useCallback((h,y)=>{const T=h.currentTarget,x={x:h.clientX,y:h.clientY},g=we(x,T.getBoundingClientRect()),b=Ce(x,g),P=be(y.getBoundingClientRect()),R=Re([...b,...P]);f(R),d(!0)},[d]);return a.useEffect(()=>()=>v(),[v]),a.useEffect(()=>{if(i&&c){const h=T=>m(T,c),y=T=>m(T,i);return i.addEventListener("pointerleave",h),c.addEventListener("pointerleave",y),()=>{i.removeEventListener("pointerleave",h),c.removeEventListener("pointerleave",y)}}},[i,c,m,v]),a.useEffect(()=>{if(l){const h=y=>{const T=y.target,x={x:y.clientX,y:y.clientY},g=(i==null?void 0:i.contains(T))||(c==null?void 0:c.contains(T)),b=!Pe(x,l);g?v():b&&(v(),p())};return document.addEventListener("pointermove",h),()=>document.removeEventListener("pointermove",h)}},[i,c,l,p,v]),u.jsx(J,{...e,ref:s})}),[ge,xe]=_(k,{isInside:!1}),J=a.forwardRef((e,o)=>{const{__scopeTooltip:t,children:r,"aria-label":n,onEscapeKeyDown:s,onPointerDownOutside:l,...f}=e,i=E(C,t),p=N(t),{onClose:c}=i;return a.useEffect(()=>(document.addEventListener(D,c),()=>document.removeEventListener(D,c)),[c]),a.useEffect(()=>{if(i.trigger){const d=v=>{const m=v.target;m!=null&&m.contains(i.trigger)&&c()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[i.trigger,c]),u.jsx(re,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:d=>d.preventDefault(),onDismiss:c,children:u.jsxs(ie,{"data-state":i.stateAttribute,...p,...f,ref:o,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[u.jsx(te,{children:r}),u.jsx(ge,{scope:t,isInside:!0,children:u.jsx(de,{id:i.contentId,role:"tooltip",children:n||r})})]})})});z.displayName=C;var Q="TooltipArrow",Z=a.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,n=N(t);return xe(Q,t).isInside?null:u.jsx(le,{...n,...r,ref:o})});Z.displayName=Q;function we(e,o){const t=Math.abs(o.top-e.y),r=Math.abs(o.bottom-e.y),n=Math.abs(o.right-e.x),s=Math.abs(o.left-e.x);switch(Math.min(t,r,n,s)){case s:return"left";case n:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Ce(e,o,t=5){const r=[];switch(o){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function be(e){const{top:o,right:t,bottom:r,left:n}=e;return[{x:n,y:o},{x:t,y:o},{x:t,y:r},{x:n,y:r}]}function Pe(e,o){const{x:t,y:r}=e;let n=!1;for(let s=0,l=o.length-1;s<o.length;l=s++){const f=o[s].x,i=o[s].y,p=o[l].x,c=o[l].y;i>r!=c>r&&t<(p-f)*(r-i)/(c-i)+f&&(n=!n)}return n}function Re(e){const o=e.slice();return o.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),Ee(o)}function Ee(e){if(e.length<=1)return e.slice();const o=[];for(let r=0;r<e.length;r++){const n=e[r];for(;o.length>=2;){const s=o[o.length-1],l=o[o.length-2];if((s.x-l.x)*(n.y-l.y)>=(s.y-l.y)*(n.x-l.x))o.pop();else break}o.push(n)}o.pop();const t=[];for(let r=e.length-1;r>=0;r--){const n=e[r];for(;t.length>=2;){const s=t[t.length-1],l=t[t.length-2];if((s.x-l.x)*(n.y-l.y)>=(s.y-l.y)*(n.x-l.x))t.pop();else break}t.push(n)}return t.pop(),o.length===1&&t.length===1&&o[0].x===t[0].x&&o[0].y===t[0].y?o:o.concat(t)}var _e=U,Ne=Y,ke=X,De=K,je=z,Ae=Z;const Oe="_root_3kc21_4",Ie="_arrow_3kc21_20",S={root:Oe,arrow:Ie},I=({children:e,enterDelay:o=700,open:t,onOpenChange:r})=>u.jsx(_e,{children:u.jsx(Ne,{delayDuration:o,open:t,onOpenChange:r,children:e})});I.displayName="Tooltip.Root";const L=({children:e,"data-test-id":o="fondue-tooltip-content"},t)=>u.jsx(ke,{"data-test-id":o,asChild:!0,ref:t,children:e});L.displayName="Tooltip.Trigger";const q=({children:e,className:o,maxWidth:t,"data-test-id":r="fondue-tooltip-content",padding:n="spacious",...s},l)=>u.jsx(De,{children:u.jsxs(je,{"data-test-id":r,"data-tooltip-spacing":n,className:ue(S.root,o),style:{maxWidth:t},collisionPadding:16,sideOffset:8,ref:l,...s,children:[e,u.jsx(Ae,{"aria-hidden":"true",className:S.arrow})]})});q.displayName="Tooltip.Content";const Ue={Root:I,Trigger:a.forwardRef(L),Content:a.forwardRef(q)};I.__docgenInfo={description:"",methods:[],displayName:"Tooltip.Root",props:{open:{required:!1,tsType:{name:"boolean"},description:"Sets the open state of the tooltip."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback that is called when the open state of the tooltip changes."},enterDelay:{required:!1,tsType:{name:"number"},description:`The delay in milliseconds before the tooltip appears.
@default 700`,defaultValue:{value:"700",computed:!1}},children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"union",raw:"TooltipTriggerProps | TooltipContentProps",elements:[{name:"signature",type:"object",raw:"{ children: ReactNode; 'data-test-id'?: string }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"data-test-id",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
    /**
     * @default "spacious"
     */
    padding?: 'spacious' | 'compact';
    /**
     * Defines the preferred side of the tooltip. It will not be respected if there are collisions with the viewport.
     */
    side?: 'top' | 'right' | 'bottom' | 'left';
    maxWidth?: string;
    className?: string;
    children: ReactNode;
    'data-test-id'?: string;
}`,signature:{properties:[{key:"padding",value:{name:"union",raw:"'spacious' | 'compact'",elements:[{name:"literal",value:"'spacious'"},{name:"literal",value:"'compact'"}],required:!1},description:'@default "spacious"'},{key:"side",value:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}],required:!1},description:"Defines the preferred side of the tooltip. It will not be respected if there are collisions with the viewport."},{key:"maxWidth",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}},{key:"data-test-id",value:{name:"string",required:!1}}]}}]}],raw:"ReactElement<TooltipTriggerProps | TooltipContentProps>"}],raw:"Array<ReactElement<TooltipTriggerProps | TooltipContentProps>>"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Tooltip.Trigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-tooltip-content'",computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"Tooltip.Content",props:{padding:{required:!1,tsType:{name:"union",raw:"'spacious' | 'compact'",elements:[{name:"literal",value:"'spacious'"},{name:"literal",value:"'compact'"}]},description:'@default "spacious"',defaultValue:{value:"'spacious'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Defines the preferred side of the tooltip. It will not be respected if there are collisions with the viewport."},maxWidth:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-tooltip-content'",computed:!1}}}};export{Ue as T,I as a,q as b,L as c};
