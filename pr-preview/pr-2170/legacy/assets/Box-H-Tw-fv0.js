import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import"./borderStyle-D9jrV09G.js";import"./focusStyle-CBFElZiz.js";import{m as A}from"./merge-DI-veSMP.js";import"./index-BwDkhjyp.js";import"./input-DDhogwVX.js";const c=[0,4,8,12,16,20,24,28,32,36,40],G={0:"tw-p-0",4:"tw-p-1",8:"tw-p-2",12:"tw-p-3",16:"tw-p-4",20:"tw-p-5",24:"tw-p-6",28:"tw-p-7",32:"tw-p-8",36:"tw-p-9",40:"tw-p-10"},_={0:"tw-px-0",4:"tw-px-1",8:"tw-px-2",12:"tw-px-3",16:"tw-px-4",20:"tw-px-5",24:"tw-px-6",28:"tw-px-7",32:"tw-px-8",36:"tw-px-9",40:"tw-px-10"},N={0:"tw-py-0",4:"tw-py-1",8:"tw-py-2",12:"tw-py-3",16:"tw-py-4",20:"tw-py-5",24:"tw-py-6",28:"tw-py-7",32:"tw-py-8",36:"tw-py-9",40:"tw-py-10"},l={PADDING:"padding",PADDING_X:"padding-x",PADDING_Y:"padding-y"},I={0:"tw-m-0",4:"tw-m-1",8:"tw-m-2",12:"tw-m-3",16:"tw-m-4",20:"tw-m-5",24:"tw-m-6",28:"tw-m-7",32:"tw-m-8",36:"tw-m-9",40:"tw-m-10"},P={0:"tw-mx-0",4:"tw-mx-1",8:"tw-mx-2",12:"tw-mx-3",16:"tw-mx-4",20:"tw-mx-5",24:"tw-mx-6",28:"tw-mx-7",32:"tw-mx-8",36:"tw-mx-9",40:"tw-mx-10"},D={0:"tw-my-0",4:"tw-my-1",8:"tw-my-2",12:"tw-my-3",16:"tw-my-4",20:"tw-my-5",24:"tw-my-6",28:"tw-my-7",32:"tw-my-8",36:"tw-my-9",40:"tw-my-10"},n={MARGIN:"margin",MARGIN_X:"margin-x",MARGIN_Y:"margin-y"},f={0:"tw-gap-0",1:"tw-gap-px",4:"tw-gap-1",8:"tw-gap-2",12:"tw-gap-3",16:"tw-gap-4",20:"tw-gap-5",24:"tw-gap-6",28:"tw-gap-7",32:"tw-gap-8",36:"tw-gap-9",40:"tw-gap-10",44:"tw-gap-11",48:"tw-gap-12",52:"tw-gap-13",56:"tw-gap-14",60:"tw-gap-15",64:"tw-gap-16",68:"tw-gap-17",72:"tw-gap-18",76:"tw-gap-19",80:"tw-gap-20",84:"tw-gap-21"},M={0:"tw-gap-x-0",1:"tw-gap-x-px",4:"tw-gap-x-1",8:"tw-gap-x-2",12:"tw-gap-x-3",16:"tw-gap-x-4",20:"tw-gap-x-5",24:"tw-gap-x-6",28:"tw-gap-x-7",32:"tw-gap-x-8",36:"tw-gap-x-9",40:"tw-gap-x-10",44:"tw-gap-x-11",48:"tw-gap-x-12",52:"tw-gap-x-13",56:"tw-gap-x-14",60:"tw-gap-x-15",64:"tw-gap-x-16",68:"tw-gap-x-17",72:"tw-gap-x-18",76:"tw-gap-x-19",80:"tw-gap-x-20",84:"tw-gap-x-21"},R={0:"tw-gap-y-0",1:"tw-gap-y-px",4:"tw-gap-y-1",8:"tw-gap-y-2",12:"tw-gap-y-3",16:"tw-gap-y-4",20:"tw-gap-y-5",24:"tw-gap-y-6",28:"tw-gap-y-7",32:"tw-gap-y-8",36:"tw-gap-y-9",40:"tw-gap-y-10",44:"tw-gap-y-11",48:"tw-gap-y-12",52:"tw-gap-y-13",56:"tw-gap-y-14",60:"tw-gap-y-15",64:"tw-gap-y-16",68:"tw-gap-y-17",72:"tw-gap-y-18",76:"tw-gap-y-19",80:"tw-gap-y-20",84:"tw-gap-y-21"},r={GAP:"gap",GAP_X:"gap-x",GAP_Y:"gap-y"},t=(e,a)=>c.includes(a)?e[a]:"",m=(e,a)=>{if(a)switch(e){case l.PADDING_X:return t(_,a);case l.PADDING_Y:return t(N,a);case l.PADDING:return t(G,a);default:return""}return""},p=(e,a)=>{if(a)switch(e){case n.MARGIN_X:return t(P,a);case n.MARGIN_Y:return t(D,a);case n.MARGIN:return t(I,a);default:return""}return""},q=(e,a)=>{if(a)switch(e){case r.GAP_X:return t(M,a);case r.GAP_Y:return t(R,a);case r.GAP:return t(f,a);default:return""}return""},S="fondue-box",i=({padding:e,paddingX:a,paddingY:u,margin:s,marginX:g,marginY:o,children:v,"data-test-id":x=S,as:y="div",...w})=>d.jsx(y,{...w,className:A([w.className,m(l.PADDING_X,a),m(l.PADDING_Y,u),m(l.PADDING,e),p(n.MARGIN_X,g),p(n.MARGIN_Y,o),p(n.MARGIN,s)]),"data-test-id":x,children:v});i.displayName="FondueBox";i.__docgenInfo={description:"@deprecated Use `Box` from `@frontify/fondue/components` instead. Also check {@link https://github.com/Frontify/fondue/blob/main/packages/components/MIGRATING.md#layout-components the migration guide}.",methods:[],displayName:"FondueBox",props:{"data-test-id":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fondue-box'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},paddingX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},paddingY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},margin:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},marginX:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},marginY:{required:!1,tsType:{name:"union",raw:"0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40",elements:[{name:"literal",value:"0"},{name:"literal",value:"4"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"28"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"}]},description:""},as:{required:!1,tsType:{name:"union",raw:"'div' | 'span'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'span'"}]},description:"",defaultValue:{value:"'div'",computed:!1}}}};export{i as B,q as G,c as S,S as a,r as b};
