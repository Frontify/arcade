import{r as o}from"./index-DtJulBIN.js";const s=16;function u(e){if(!window)throw new Error("Window object not found, this method should be used in a browser environment");const{top:t,bottom:n}=e.getBoundingClientRect();t<0?e.style.maxHeight=`${n-s}px`:n>window.innerHeight&&(e.style.maxHeight=`${window.innerHeight-t-s}px`)}function h(e){const t=e.getBoundingClientRect(),n=t.width>0&&t.height>0,i=window.getComputedStyle(e),r=i.display!=="none"&&i.visibility!=="hidden"&&parseFloat(i.opacity)!==0,c=t.top<window.innerHeight&&t.left<window.innerWidth&&t.bottom>0&&t.right>0;return n&&r&&c}function w(e,t){t&&(typeof t=="function"?t(e.current):t&&"current"in t&&(t.current=e.current))}function a(e){const t=o.useCallback(()=>{requestAnimationFrame(()=>{e.current&&h(e.current)&&u(e.current)})},[e]);return o.useLayoutEffect(()=>(t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[t]),{setMaxHeight:t}}export{w as s,a as u};
