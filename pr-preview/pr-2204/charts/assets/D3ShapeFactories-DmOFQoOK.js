import{d as o,a as A,b as g}from"./pie-DtVSWFrF.js";function r(a,e){a(e)}function c(a){var e=a===void 0?{}:a,i=e.innerRadius,u=e.outerRadius,d=e.cornerRadius,s=e.startAngle,n=e.endAngle,t=e.padAngle,l=e.padRadius,f=o();return i!=null&&r(f.innerRadius,i),u!=null&&r(f.outerRadius,u),d!=null&&r(f.cornerRadius,d),s!=null&&r(f.startAngle,s),n!=null&&r(f.endAngle,n),t!=null&&r(f.padAngle,t),l!=null&&r(f.padRadius,l),f}function R(a){var e=a===void 0?{}:a,i=e.x,u=e.y,d=e.defined,s=e.curve,n=g();return i&&r(n.x,i),u&&r(n.y,u),d&&n.defined(d),s&&n.curve(s),n}function v(a){var e=a===void 0?{}:a,i=e.startAngle,u=e.endAngle,d=e.padAngle,s=e.value,n=e.sort,t=e.sortValues,l=A();return(n===null||n!=null)&&l.sort(n),(t===null||t!=null)&&l.sortValues(t),s!=null&&l.value(s),d!=null&&r(l.padAngle,d),i!=null&&r(l.startAngle,i),u!=null&&r(l.endAngle,u),l}export{c as a,R as l,v as p};
