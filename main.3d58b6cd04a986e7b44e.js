"use strict";(self.webpackChunktest_cms=self.webpackChunktest_cms||[]).push([[179],{707:(e,t,r)=>{var n=r(294),a=r(745),l=r(655),u=r(250),c=[{id:"dummyTable",title:"Dummy Table",order:1,path:"tabs/dummyTable.js"},{id:"dummyChart",title:"Dummy Chart",order:2,path:"tabs/dummyChart.js"},{id:"dummyList",title:"Dummy List",order:0,path:"tabs/dummyList.js"}];function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const o=function(){var e,t,a=(e=(0,n.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,u,c=[],i=!0,o=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(c.push(n.value),c.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(o)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],m=a[1];return(0,n.useEffect)((function(){var e=c.sort((function(e,t){return e.order-t.order}));e.length>0&&m(e[0].id)}),[]),n.createElement(l.VK,{basename:"/cms-test"},n.createElement("div",null,n.createElement("nav",null,c.map((function(e){return n.createElement(l.OL,{key:e.id,to:"/".concat(e.id),style:{marginRight:"10px"}},e.title)}))),n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading...")},n.createElement(u.Z5,null,n.createElement(u.AW,{path:"/",element:o?n.createElement(u.Fg,{to:"/".concat(o),replace:!0}):null}),c.map((function(e){var t=(0,n.lazy)((function(){return function(e){switch(e){case"dummyTable":return r.e(4).then(r.bind(r,4));case"dummyChart":return r.e(473).then(r.bind(r,473));case"dummyList":return r.e(294).then(r.bind(r,93));default:throw new Error("Unknown tab ID: ".concat(e))}}(e.id)}));return n.createElement(u.AW,{key:e.id,path:"/".concat(e.id),element:n.createElement(t,null)})}))))))};var m=document.getElementById("root");(0,a.s)(m).render(n.createElement(o,null))}},e=>{e.O(0,[343],(()=>(707,e(e.s=707)))),e.O()}]);