import{g as T}from"./_commonjsHelpers-Cpj98o6Y.js";function V(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in e)){const c=Object.getOwnPropertyDescriptor(o,u);c&&Object.defineProperty(e,u,c.get?c:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var g={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),R=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,C={};function p(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||$}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=p.prototype;function v(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||$}var S=v.prototype=new O;S.constructor=v;j(S,p.prototype);S.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,E={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var o,u={},c=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(c=""+t.key),t)x.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){for(var f=Array(i),a=0;a<i;a++)f[a]=arguments[a+2];u.children=f}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)u[o]===void 0&&(u[o]=i[o]);return{$$typeof:y,type:e,key:c,ref:s,props:u,_owner:E.current}}function J(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function K(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var w=/\/+/g;function m(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K(""+e.key):t.toString(36)}function _(e,t,n,o,u){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case y:case F:s=!0}}if(s)return s=e,u=u(s),e=o===""?"."+m(s,0):o,k(u)?(n="",e!=null&&(n=e.replace(w,"$&/")+"/"),_(u,t,n,"",function(a){return a})):u!=null&&(b(u)&&(u=J(u,n+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),t.push(u)),1;if(s=0,o=o===""?".":o+":",k(e))for(var i=0;i<e.length;i++){c=e[i];var f=o+m(c,i);s+=_(c,t,n,f,u)}else if(f=G(e),typeof f=="function")for(e=f.call(e),i=0;!(c=e.next()).done;)c=c.value,f=o+m(c,i++),s+=_(c,t,n,f,u);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function d(e,t,n){if(e==null)return e;var o=[],u=0;return _(e,o,"","",function(c){return t.call(n,c,u++)}),o}function Q(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},h={transition:null},X={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:h,ReactCurrentOwner:E};function A(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=p;r.Fragment=U;r.Profiler=L;r.PureComponent=v;r.StrictMode=q;r.Suspense=B;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X;r.act=A;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=j({},e.props),u=e.key,c=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,s=E.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in t)x.call(t,f)&&!P.hasOwnProperty(f)&&(o[f]=t[f]===void 0&&i!==void 0?i[f]:t[f])}var f=arguments.length-2;if(f===1)o.children=n;else if(1<f){i=Array(f);for(var a=0;a<f;a++)i[a]=arguments[a+2];o.children=i}return{$$typeof:y,type:e.type,key:u,ref:c,props:o,_owner:s}};r.createContext=function(e){return e={$$typeof:N,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M,_context:e},e.Consumer=e};r.createElement=I;r.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:z,render:e}};r.isValidElement=b;r.lazy=function(e){return{$$typeof:W,_payload:{_status:-1,_result:e},_init:Q}};r.memo=function(e,t){return{$$typeof:H,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}};r.unstable_act=A;r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return l.current.useTransition()};r.version="18.3.1";g.exports=r;var D=g.exports;const Y=T(D),ee=V({__proto__:null,default:Y},[D]);export{Y as R,ee as a,D as r};
