import{j as o}from"./jsx-runtime-BSxFkHFN.js";import{S as le}from"./index-C7Xses_O.js";import{e as m,r as c}from"./index-i66itsuO.js";import{q as ie,j as se,s as ce}from"./fondue-icons348-DbatLcWa.js";import{e as N}from"./Select-BkXQt587.js";import{T as b}from"./TextInput-DVb6zBct.js";function T(){return(T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function U(e,r){if(e==null)return{};var n,a,t={},u=Object.keys(e);for(a=0;a<u.length;a++)r.indexOf(n=u[a])>=0||(t[n]=e[n]);return t}function V(e){var r=c.useRef(e),n=c.useRef(function(a){r.current&&r.current(a)});return r.current=e,n.current}var _=function(e,r,n){return r===void 0&&(r=0),n===void 0&&(n=1),e>n?n:e<r?r:e},w=function(e){return"touches"in e},H=function(e){return e&&e.ownerDocument.defaultView||self},z=function(e,r,n){var a=e.getBoundingClientRect(),t=w(r)?function(u,i){for(var l=0;l<u.length;l++)if(u[l].identifier===i)return u[l];return u[0]}(r.touches,n):r;return{left:_((t.pageX-(a.left+H(e).pageXOffset))/a.width),top:_((t.pageY-(a.top+H(e).pageYOffset))/a.height)}},O=function(e){!w(e)&&e.preventDefault()},A=m.memo(function(e){var r=e.onMove,n=e.onKey,a=U(e,["onMove","onKey"]),t=c.useRef(null),u=V(r),i=V(n),l=c.useRef(null),s=c.useRef(!1),d=c.useMemo(function(){var ae=function(v){O(v),(w(v)?v.touches.length>0:v.buttons>0)&&t.current?u(z(t.current,v,l.current)):x(!1)},te=function(){return x(!1)};function x(v){var f=s.current,k=H(t.current),q=v?k.addEventListener:k.removeEventListener;q(f?"touchmove":"mousemove",ae),q(f?"touchend":"mouseup",te)}return[function(v){var f=v.nativeEvent,k=t.current;if(k&&(O(f),!function(oe,ue){return ue&&!w(oe)}(f,s.current)&&k)){if(w(f)){s.current=!0;var q=f.changedTouches||[];q.length&&(l.current=q[0].identifier)}k.focus(),u(z(k,f,l.current)),x(!0)}},function(v){var f=v.which||v.keyCode;f<37||f>40||(v.preventDefault(),i({left:f===39?.05:f===37?-.05:0,top:f===40?.05:f===38?-.05:0}))},x]},[i,u]),g=d[0],E=d[1],D=d[2];return c.useEffect(function(){return D},[D]),m.createElement("div",T({},a,{onTouchStart:g,onMouseDown:g,className:"react-colorful__interactive",ref:t,onKeyDown:E,tabIndex:0,role:"slider"}))}),j=function(e){return e.filter(Boolean).join(" ")},S=function(e){var r=e.color,n=e.left,a=e.top,t=a===void 0?.5:a,u=j(["react-colorful__pointer",e.className]);return m.createElement("div",{className:u,style:{top:100*t+"%",left:100*n+"%"}},m.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},h=function(e,r,n){return r===void 0&&(r=0),n===void 0&&(n=Math.pow(10,r)),Math.round(n*e)/n},J=function(e){var r=e.s,n=e.v,a=e.a,t=(200-r)*n/100;return{h:h(e.h),s:h(t>0&&t<200?r*n/100/(t<=100?t:200-t)*100:0),l:h(t/2),a:h(a,2)}},G=function(e){var r=J(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},R=function(e){var r=J(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},de=function(e){var r=e.h,n=e.s,a=e.v,t=e.a;r=r/360*6,n/=100,a/=100;var u=Math.floor(r),i=a*(1-n),l=a*(1-(r-u)*n),s=a*(1-(1-r+u)*n),d=u%6;return{r:h(255*[a,l,i,i,s,a][d]),g:h(255*[s,a,a,l,i,i][d]),b:h(255*[i,i,s,a,a,l][d]),a:h(t,2)}},me=function(e){var r=e.r,n=e.g,a=e.b,t=e.a,u=Math.max(r,n,a),i=u-Math.min(r,n,a),l=i?u===r?(n-a)/i:u===n?2+(a-r)/i:4+(r-n)/i:0;return{h:h(60*(l<0?l+6:l)),s:h(u?i/u*100:0),v:h(u/255*100),a:t}},pe=m.memo(function(e){var r=e.hue,n=e.onChange,a=j(["react-colorful__hue",e.className]);return m.createElement("div",{className:a},m.createElement(A,{onMove:function(t){n({h:360*t.left})},onKey:function(t){n({h:_(r+360*t.left,0,360)})},"aria-label":"Hue","aria-valuenow":h(r),"aria-valuemax":"360","aria-valuemin":"0"},m.createElement(S,{className:"react-colorful__hue-pointer",left:r/360,color:G({h:r,s:100,v:100,a:1})})))}),fe=m.memo(function(e){var r=e.hsva,n=e.onChange,a={backgroundColor:G({h:r.h,s:100,v:100,a:1})};return m.createElement("div",{className:"react-colorful__saturation",style:a},m.createElement(A,{onMove:function(t){n({s:100*t.left,v:100-100*t.top})},onKey:function(t){n({s:_(r.s+100*t.left,0,100),v:_(r.v-100*t.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+h(r.s)+"%, Brightness "+h(r.v)+"%"},m.createElement(S,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:G(r)})))}),Q=function(e,r){if(e===r)return!0;for(var n in e)if(e[n]!==r[n])return!1;return!0};function he(e,r,n){var a=V(n),t=c.useState(function(){return e.toHsva(r)}),u=t[0],i=t[1],l=c.useRef({color:r,hsva:u});c.useEffect(function(){if(!e.equal(r,l.current.color)){var d=e.toHsva(r);l.current={hsva:d,color:r},i(d)}},[r,e]),c.useEffect(function(){var d;Q(u,l.current.hsva)||e.equal(d=e.fromHsva(u),l.current.color)||(l.current={hsva:u,color:d},a(d))},[u,e,a]);var s=c.useCallback(function(d){i(function(g){return Object.assign({},g,d)})},[]);return[u,s]}var ge=typeof window<"u"?c.useLayoutEffect:c.useEffect,ve=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},L=new Map,be=function(e){ge(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!L.has(r)){var n=r.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,L.set(r,n);var a=ve();a&&n.setAttribute("nonce",a),r.head.appendChild(n)}},[])},ye=function(e){var r=e.className,n=e.hsva,a=e.onChange,t={backgroundImage:"linear-gradient(90deg, "+R(Object.assign({},n,{a:0}))+", "+R(Object.assign({},n,{a:1}))+")"},u=j(["react-colorful__alpha",r]),i=h(100*n.a);return m.createElement("div",{className:u},m.createElement("div",{className:"react-colorful__alpha-gradient",style:t}),m.createElement(A,{onMove:function(l){a({a:l.left})},onKey:function(l){a({a:_(n.a+l.left)})},"aria-label":"Alpha","aria-valuetext":i+"%","aria-valuenow":i,"aria-valuemin":"0","aria-valuemax":"100"},m.createElement(S,{className:"react-colorful__alpha-pointer",left:n.a,color:R(n)})))},ke=function(e){var r=e.className,n=e.colorModel,a=e.color,t=a===void 0?n.defaultColor:a,u=e.onChange,i=U(e,["className","colorModel","color","onChange"]),l=c.useRef(null);be(l);var s=he(n,t,u),d=s[0],g=s[1],E=j(["react-colorful",r]);return m.createElement("div",T({},i,{ref:l,className:E}),m.createElement(fe,{hsva:d,onChange:g}),m.createElement(pe,{hue:d.h,onChange:g}),m.createElement(ye,{hsva:d,onChange:g,className:"react-colorful__last-control"}))},_e={defaultColor:{r:0,g:0,b:0,a:1},toHsva:me,fromHsva:de,equal:Q},qe=function(e){return m.createElement(ke,T({},e,{colorModel:_e}))};const we="_root_riubn_4",xe="_inputs_riubn_12",Ce="_colorFormatInput_riubn_23",Te="_colorAlphaInput_riubn_24",je="_colorChannelInputGroup_riubn_28",Ie="_inputDecorator_riubn_39",Ee="_gradientInput_riubn_43",Ne="_reactColorful_riubn_46",Re="_valueInput_riubn_50",p={root:we,inputs:xe,colorFormatInput:Ce,colorAlphaInput:Te,colorChannelInputGroup:je,inputDecorator:Ie,gradientInput:Ee,reactColorful:Ne,valueInput:Re},P={red:255,green:255,blue:255,alpha:1,name:""},W="HEX",Ve=e=>{if(e)return`rgba(${e.red}, ${e.green}, ${e.blue}, ${e.alpha||1})`},K=e=>{const r=/^([\dA-Fa-f]{3}){1,2}$/;return e.length>2&&r.test(e)},He=e=>{const r=/^([\dA-Fa-f]{3}){1,2}$/,n=e.match(r);if(!n)return{red:0,green:0,blue:0,alpha:0};const a=n[0];return a.length===3?{red:parseInt(`${a[0]}${a[0]}`,16),green:parseInt(`${a[1]}${a[1]}`,16),blue:parseInt(`${a[2]}${a[2]}`,16),alpha:1}:{red:parseInt(a.slice(0,2),16),green:parseInt(a.slice(2,4),16),blue:parseInt(a.slice(4,6),16),alpha:1}},F=e=>{const{red:r,green:n,blue:a}=e;return`${r.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`},Y=(e,r)=>r==="HEX"?{...e,name:`#${F(e)}`}:{...e,name:`rgba(${e.red}, ${e.green}, ${e.blue}, ${e.alpha||1})`},C=(e,r=0,n=255)=>e.length===0||parseInt(e)<r?r:parseInt(e)>n?n:parseInt(e),X=({currentColor:e=P,onColorChange:r=()=>{},"data-test-id":n="color-picker-input"},a)=>o.jsx("div",{className:p.gradientInput,"data-test-id":n,ref:a,children:o.jsx(qe,{className:p.reactColorful,color:{r:e.red,g:e.green,b:e.blue,a:e.alpha===void 0?1:e.alpha},onChange:t=>r({red:t.r,green:t.g,blue:t.b,alpha:t.a})})});X.displayName="ColorPicker.Gradient";const Z=c.forwardRef(X);X.__docgenInfo={description:"",methods:[],displayName:"ColorPicker.Gradient",props:{currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:`@ignore
The active color in the color picker, passed down from the root component`,defaultValue:{value:"{ red: 255, green: 255, blue: 255, alpha: 1, name: '' }",computed:!1}},onColorChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: RgbaColor) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},name:"color"}],return:{name:"void"}}},description:`@ignore
Event handler called when the color changes, passed down from the root component`,defaultValue:{value:"() => {}",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker gradient input",defaultValue:{value:"'color-picker-input'",computed:!1}}}};Z.__docgenInfo={description:"",methods:[],displayName:"ForwardedRefColorGradientInput",props:{currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:`@ignore
The active color in the color picker, passed down from the root component`,defaultValue:{value:"{ red: 255, green: 255, blue: 255, alpha: 1, name: '' }",computed:!1}},onColorChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: RgbaColor) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},name:"color"}],return:{name:"void"}}},description:`@ignore
Event handler called when the color changes, passed down from the root component`,defaultValue:{value:"() => {}",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker gradient input",defaultValue:{value:"'color-picker-input'",computed:!1}}}};const Ge="_root_1a6zb_5",Fe="_button_1a6zb_56",Ae="_colorIndicator_1a6zb_69",Se="_actions_1a6zb_76",Pe="_clear_1a6zb_86",Xe="_caret_1a6zb_99",y={root:Ge,button:Fe,colorIndicator:Ae,actions:Se,clear:Pe,caret:Xe},$=({id:e,currentColor:r,isOpen:n,onClear:a,onClick:t,"data-test-id":u="color-picker-input",...i},l)=>o.jsxs("div",{id:e,className:y.root,...i,ref:l,"data-test-id":u,children:[o.jsxs("button",{className:y.button,onClick:t,type:"button","data-color-input-select":!0,children:[(r==null?void 0:r.red)!==void 0?o.jsx("div",{"aria-hidden":!0,className:y.colorIndicator,style:{backgroundColor:Ve(r)}}):o.jsxs(o.Fragment,{children:[o.jsx(ie,{size:16}),o.jsx("span",{children:"Select Color"})]}),o.jsx("span",{className:y.colorName,children:r==null?void 0:r.name})]}),o.jsxs("div",{className:y.actions,children:[a&&o.jsx("button",{type:"button","aria-label":"Clear color",onClick:a,className:y.clear,children:o.jsx(se,{size:16})}),o.jsx("div",{className:y.caret,"data-state":n?"open":"closed",children:o.jsx(ce,{size:16,className:y.caret})})]})]});$.displayName="ColorPicker.Input";const ee=c.forwardRef($);$.__docgenInfo={description:"",methods:[],displayName:"ColorPicker.Input",props:{id:{required:!1,tsType:{name:"string"},description:""},currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:"The active color in the color picker"},isOpen:{required:!1,tsType:{name:"boolean"},description:"The open state of the color picker used to dermine arrow state"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"callback for clearing the color"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Event handler called when the color picker input is clicked"},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker input",defaultValue:{value:"'color-picker-input'",computed:!1}}}};ee.__docgenInfo={description:"",methods:[],displayName:"ForwardedRefColorPickerInput",props:{id:{required:!1,tsType:{name:"string"},description:""},currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:"The active color in the color picker"},isOpen:{required:!1,tsType:{name:"boolean"},description:"The open state of the color picker used to dermine arrow state"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"callback for clearing the color"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Event handler called when the color picker input is clicked"},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker input",defaultValue:{value:"'color-picker-input'",computed:!1}}}};const M=({currentColor:e=P,onColorChange:r=()=>{},currentFormat:n=W,setCurrentFormat:a=()=>{},"data-test-id":t="color-picker-value-input"},u)=>{const[i,l]=c.useState(F(e));return c.useEffect(()=>{l(F(e))},[e]),o.jsxs("div",{className:p.inputs,"data-test-id":t,ref:u,children:[o.jsx("div",{className:p.colorFormatInput,children:o.jsxs(N,{"data-test-id":"color-picker-select-format","aria-label":"Select a color format",onSelect:s=>{a(s)},value:n,children:[o.jsx(N.Item,{value:"HEX",children:"HEX"}),o.jsx(N.Item,{value:"RGBA",children:"RGBA"})]})}),n==="HEX"?o.jsx(b.Root,{"data-test-id":"color-picker-value-input-hex",className:p.valueInput,type:"text",value:i,status:K(i)?"neutral":"error",onBlur:s=>{K(s.target.value)&&r(He(s.target.value))},onChange:s=>{l(s.target.value)},"aria-label":"Hex color value",children:o.jsx(b.Slot,{name:"left",children:o.jsx("span",{className:p.inputDecorator,children:"#"})})}):o.jsxs("div",{className:p.colorChannelInputGroup,children:[o.jsx(b.Root,{"data-test-id":"color-picker-value-input-red",className:p.valueInput,value:e.red,type:"number",onChange:s=>{r({...e,red:C(s.target.value)})},"aria-label":"Red Color Channel",children:o.jsx(b.Slot,{name:"left",children:o.jsx("span",{className:p.inputDecorator,children:"R"})})}),o.jsx(b.Root,{"data-test-id":"color-picker-value-input-green",className:p.valueInput,value:e.green,type:"number",onChange:s=>{r({...e,green:C(s.target.value)})},"aria-label":"Green Color Channel",children:o.jsx(b.Slot,{name:"left",children:o.jsx("span",{className:p.inputDecorator,children:"G"})})}),o.jsx(b.Root,{"data-test-id":"color-picker-value-input-blue",className:p.valueInput,value:e.blue,type:"number",onChange:s=>{r({...e,blue:C(s.target.value)})},"aria-label":"Blue Color Channel",children:o.jsx(b.Slot,{name:"left",children:o.jsx("span",{className:p.inputDecorator,children:"B"})})})]}),o.jsx("div",{className:p.colorAlphaInput,children:o.jsxs(b.Root,{"data-test-id":"color-picker-value-input-alpha",className:p.valueInput,value:e.alpha===void 0?100:Math.trunc(e.alpha*100).toString(),type:"number",onChange:s=>{r({...e,alpha:C(s.target.value,0,100)/100})},"aria-label":"Color Opacity",children:[o.jsx(b.Slot,{name:"left",children:o.jsx("span",{className:p.inputDecorator,children:"A"})}),o.jsx(b.Slot,{name:"right",children:o.jsx("span",{className:p.inputDecorator,children:"%"})})]})})]})};M.displayName="ColorPicker.Values";const re=c.forwardRef(M);M.__docgenInfo={description:"",methods:[],displayName:"ColorPicker.Values",props:{currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:`@ignore
The active color in the color picker, passed down from the root component`,defaultValue:{value:"{ red: 255, green: 255, blue: 255, alpha: 1, name: '' }",computed:!1}},onColorChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: RgbaColor) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},name:"color"}],return:{name:"void"}}},description:`@ignore
Event handler called when the color changes, passed down from the root component`,defaultValue:{value:"() => {}",computed:!1}},currentFormat:{required:!1,tsType:{name:"union",raw:"'HEX' | 'RGBA'",elements:[{name:"literal",value:"'HEX'"},{name:"literal",value:"'RGBA'"}]},description:`@ignore
The format to use for the color input, passed down from the root component`,defaultValue:{value:"'HEX'",computed:!1}},setCurrentFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(format: ColorFormat) => void",signature:{arguments:[{type:{name:"union",raw:"'HEX' | 'RGBA'",elements:[{name:"literal",value:"'HEX'"},{name:"literal",value:"'RGBA'"}]},name:"format"}],return:{name:"void"}}},description:`@ignore
The format to use for the color input, passed down from the root component`,defaultValue:{value:"() => {}",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker value input",defaultValue:{value:"'color-picker-value-input'",computed:!1}}}};re.__docgenInfo={description:"",methods:[],displayName:"ForwardedRefColorValueInput",props:{currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:`@ignore
The active color in the color picker, passed down from the root component`,defaultValue:{value:"{ red: 255, green: 255, blue: 255, alpha: 1, name: '' }",computed:!1}},onColorChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: RgbaColor) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},name:"color"}],return:{name:"void"}}},description:`@ignore
Event handler called when the color changes, passed down from the root component`,defaultValue:{value:"() => {}",computed:!1}},currentFormat:{required:!1,tsType:{name:"union",raw:"'HEX' | 'RGBA'",elements:[{name:"literal",value:"'HEX'"},{name:"literal",value:"'RGBA'"}]},description:`@ignore
The format to use for the color input, passed down from the root component`,defaultValue:{value:"'HEX'",computed:!1}},setCurrentFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(format: ColorFormat) => void",signature:{arguments:[{type:{name:"union",raw:"'HEX' | 'RGBA'",elements:[{name:"literal",value:"'HEX'"},{name:"literal",value:"'RGBA'"}]},name:"format"}],return:{name:"void"}}},description:`@ignore
The format to use for the color input, passed down from the root component`,defaultValue:{value:"() => {}",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker value input",defaultValue:{value:"'color-picker-value-input'",computed:!1}}}};const B=({children:e,currentColor:r=P,onColorChange:n=()=>{},defaultFormat:a=W,"data-test-id":t="color-picker-input",...u},i)=>{const[l,s]=c.useState(a);return o.jsx("div",{className:p.root,"data-picker-type":"custom-color","data-test-id":t,ref:i,children:c.Children.map(e,d=>o.jsx($e,{...u,onColorChange:g=>{n(Y(g,l))},currentColor:r,currentFormat:l,setCurrentFormat:g=>{s(g),n(Y(r,g))},children:d}))})};B.displayName="ColorPicker";const $e=({children:e,...r})=>o.jsx(le,{...r,children:e}),ne=c.forwardRef(B),I={Root:ne,Values:re,Gradient:Z,Input:ee};I.Root.displayName="ColorPicker.Root";I.Values.displayName="ColorPicker.Values";I.Gradient.displayName="ColorPicker.Gradient";I.Input.displayName="ColorPicker.Input";B.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The children of the color picker component. This can contain multiple `ColorPicker.Values` or `ColorPicker.Gradient` components."},currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:"The active color in the color picker",defaultValue:{value:"{ red: 255, green: 255, blue: 255, alpha: 1, name: '' }",computed:!1}},onColorChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: RgbaColor) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},name:"color"}],return:{name:"void"}}},description:"Event handler called when the color changes",defaultValue:{value:"() => {}",computed:!1}},defaultFormat:{required:!1,tsType:{name:"union",raw:"'HEX' | 'RGBA'",elements:[{name:"literal",value:"'HEX'"},{name:"literal",value:"'RGBA'"}]},description:`The default format to use for the color input
@default "HEX"`,defaultValue:{value:"'HEX'",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker",defaultValue:{value:"'color-picker-input'",computed:!1}}}};ne.__docgenInfo={description:"",methods:[],displayName:"ForwardedRefColorPicker",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The children of the color picker component. This can contain multiple `ColorPicker.Values` or `ColorPicker.Gradient` components."},currentColor:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},description:"The active color in the color picker",defaultValue:{value:"{ red: 255, green: 255, blue: 255, alpha: 1, name: '' }",computed:!1}},onColorChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(color: RgbaColor) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    red: number;
    green: number;
    blue: number;
    alpha?: number;
    name?: string;
}`,signature:{properties:[{key:"red",value:{name:"number",required:!0}},{key:"green",value:{name:"number",required:!0}},{key:"blue",value:{name:"number",required:!0}},{key:"alpha",value:{name:"number",required:!1}},{key:"name",value:{name:"string",required:!1}}]}},name:"color"}],return:{name:"void"}}},description:"Event handler called when the color changes",defaultValue:{value:"() => {}",computed:!1}},defaultFormat:{required:!1,tsType:{name:"union",raw:"'HEX' | 'RGBA'",elements:[{name:"literal",value:"'HEX'"},{name:"literal",value:"'RGBA'"}]},description:`The default format to use for the color input
@default "HEX"`,defaultValue:{value:"'HEX'",computed:!1}},"data-test-id":{required:!1,tsType:{name:"string"},description:"The test id of the color picker",defaultValue:{value:"'color-picker-input'",computed:!1}}}};export{B as C,M as a,X as b,I as c,$ as d};
