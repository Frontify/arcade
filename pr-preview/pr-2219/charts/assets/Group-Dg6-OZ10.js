import{c as m,_ as r}from"./Legend-BB8plRNr.js";import{e as u}from"./index-C3UhPIpD.js";var d=["top","left","transform","className","children","innerRef"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function g(e,t){if(e==null)return{};var a={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(a[s]=e[s]);return a}function b(e){var t=e.top,a=t===void 0?0:t,n=e.left,s=n===void 0?0:n,o=e.transform,f=e.className,l=e.children,c=e.innerRef,p=g(e,d);return u.createElement("g",i({ref:c,className:m("visx-group",f),transform:o||"translate("+s+", "+a+")"},p),l)}b.propTypes={top:r.number,left:r.number,transform:r.string,className:r.string,children:r.node,innerRef:r.oneOfType([r.string,r.func,r.object])};export{b as G};
