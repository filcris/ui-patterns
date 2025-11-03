import{j as e}from"./jsx-runtime-CDt2p4po.js";import{c as m}from"./clsx-B-dksMZM.js";import"./index-GiUgBvb1.js";function T({columns:n,data:N,caption:d,zebra:w=!0,density:j="comfortable",onRowClick:c,className:C,...q}){return e.jsx("div",{className:"overflow-x-auto rounded border border-gray-200 dark:border-gray-700",children:e.jsxs("table",{...q,className:m("min-w-full text-left align-middle bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",C),children:[d&&e.jsx("caption",{className:"sr-only",children:d}),e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-800",children:e.jsx("tr",{children:n.map((a,s)=>e.jsx("th",{scope:"col",className:m("px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200",a.className),children:a.header},String(a.key)+s))})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-gray-800",children:N.map((a,s)=>{const o=!!c;return e.jsx("tr",{tabIndex:o?0:-1,className:m(j==="compact"?"text-sm":"text-base",w&&s%2===1?"bg-gray-50/70 dark:bg-gray-800/60":void 0,o&&"cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-white dark:focus:ring-offset-gray-900 hover:bg-blue-50/60 dark:hover:bg-blue-900/20"),onClick:o?()=>c(a):void 0,onKeyDown:o?r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),c(a))}:void 0,"aria-label":o?"Linha selecionável":void 0,children:n.map((r,R)=>{const u=a[r.key];return e.jsx("td",{className:"px-4 py-3",children:r.cell?r.cell(u,a):String(u)},String(r.key)+R)})},s)})})]})})}T.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: keyof T;
  header: ReactNode;
  className?: string;
  cell?: (value: any, row: T) => ReactNode;
}`,signature:{properties:[{key:"key",value:{name:"T",required:!0}},{key:"header",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"cell",value:{name:"signature",type:"function",raw:"(value: any, row: T) => ReactNode",signature:{arguments:[{type:{name:"any"},name:"value"},{type:{name:"T"},name:"row"}],return:{name:"ReactNode"}},required:!1}}]}}],raw:"Column<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},zebra:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"comfortable"',computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => void",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"void"}}},description:""}}};const S=[{key:"name",header:"Nome"},{key:"email",header:"Email"},{key:"role",header:"Função"}],z=[{name:"Ana Silva",email:"ana@example.com",role:"Admin"},{name:"Bruno Reis",email:"bruno@example.com",role:"User"},{name:"Carla Araújo",email:"carla@example.com",role:"User"}],_={title:"Components/Table",component:T,tags:["autodocs"],argTypes:{zebra:{control:"boolean"},density:{control:"radio",options:["comfortable","compact"]}}},t={args:{columns:S,data:z,caption:"Tabela de utilizadores",zebra:!0,density:"comfortable"}},l={args:{...t.args,density:"compact"}},i={args:{...t.args,onRowClick:n=>alert(`Clicou: ${n.name}`)}};var p,y,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    columns: columns as any,
    data,
    caption: "Tabela de utilizadores",
    zebra: true,
    density: "comfortable"
  }
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,b,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    density: "compact"
  }
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,v,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onRowClick: (row: Person) => alert(\`Clicou: \${row.name}\`)
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const I=["Default","Compact","Clickable"];export{i as Clickable,l as Compact,t as Default,I as __namedExportsOrder,_ as default};
