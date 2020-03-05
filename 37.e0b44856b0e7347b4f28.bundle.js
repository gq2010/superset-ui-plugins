(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1565:function(e,t,a){var n=a(234),r=a(1566);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},s=(n(r,i),r.locals?r.locals:{});e.exports=s},1566:function(e,t,a){(t=a(235)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-table {\n  margin: 0px auto;\n}\n.superset-legacy-chart-table table {\n  width: 100%;\n}\n.superset-legacy-chart-table .dt-metric {\n  text-align: right;\n}\n.superset-legacy-chart-table div.dataTables_wrapper div.dataTables_paginate {\n  line-height: 0;\n}\n.superset-legacy-chart-table div.dataTables_wrapper div.dataTables_paginate ul.pagination {\n  margin-top: 0.5em;\n}\n\n.superset-legacy-chart-table thead th.sorting:after,\ntable.table thead th.sorting_asc:after,\ntable.table thead th.sorting_desc:after {\n  top: 0px;\n}\n.superset-legacy-chart-table td {\n  white-space: pre-wrap;\n}\n',""]),e.exports=t},2179:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(978),r=a(1),i=a.n(r),s=a(94),l=a(216),c=a(527),o=a(1561),h=a(1173),d=a.n(h),b=a(1233),g=a.n(b);a(1234),a(1565);g.a.$||g()(window,d.a);const{PERCENT_3_POINT:p}=s.a;function u(e){const{data:t,height:a,alignPositiveNegative:s=!1,colorPositiveNegative:h=!1,columns:b,includeSearch:g=!1,metrics:u,pageLength:m,percentMetrics:f,tableTimestampFormat:y}=e,w=Object(c.c)(y),v=(u||[]).concat(f||[]).filter(e=>"number"==typeof t[0][e]),M=new Set(u),S=new Set(f),T={},O={};b.forEach(({key:e})=>{const a=t.map(t=>t[e]);if(v.includes(e)){const t=a;s?T[e]=Math.max(...t.map(Math.abs)):(T[e]=Math.max(...t),O[e]=Math.min(...t))}});const _=Math.min(a,window.innerHeight),x=[10,25,40,50,75,100,150,200],E=m>0,N=Object(r.createRef)();function I(e,t){const a=h&&t<0?150:0;if(s){const n=Math.abs(Math.round(t/T[e]*100));return"linear-gradient(to right, rgba("+a+",0,0,0.2), rgba("+a+",0,0,0.2) "+n+"%, rgba(0,0,0,0.01) "+n+"%, rgba(0,0,0,0.001) 100%)"}const n=Math.abs(Math.max(T[e],0)),r=Math.abs(Math.min(O[e],0)),i=n+r,l=Math.round(Math.min(r+t,r)/i*100),c=Math.round(Math.abs(t)/i*100);return"linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) "+l+"%, rgba("+a+",0,0,0.2) "+l+"%, rgba("+a+",0,0,0.2) "+(l+c)+"%, rgba(0,0,0,0.01) "+(l+c)+"%, rgba(0,0,0,0.001) 100%)"}const L={aaSorting:[],autoWidth:!1,paging:E,pagingType:"first_last_numbers",pageLength:m,lengthMenu:[[...x,-1],[...x,Object(n.b)("All")]],searching:g,language:{paginate:{first:Object(n.b)("First"),last:Object(n.b)("Last"),previous:Object(n.b)("Previous"),next:Object(n.b)("Next")}},bInfo:!1,scrollY:_+"px",scrollCollapse:!0,scrollX:!0,drawCallback:function(){const e=N.current;d()(".pagination",e).addClass("pagination-sm"),d()("tr",e).css("display","")}};return Object(r.useEffect)(()=>{const e=d()(N.current),t=e.find("table").DataTable(L),a=_-34-(E?35:0)-(E||g?35:0);return e.find(".dataTables_scrollBody").css("max-height",a),()=>{try{t.destroy(),e.find(".dataTables_scrollBody").css("max-height","")}catch(e){}}}),i.a.createElement("div",{ref:N,className:"superset-legacy-chart-table"},i.a.createElement("table",{className:"table table-striped table-condensed table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,b.map(e=>i.a.createElement("th",{key:e.key,className:"sorting",title:e.label},e.label)))),i.a.createElement("tbody",null,t.map((e,t)=>i.a.createElement("tr",{key:t,style:{display:m>0&&t>=m?"none":void 0}},b.map(({key:t,format:a})=>{const n=e[t],r=M.has(t),s=function(e,t,a){return"__timestamp"===e?w(a):"string"==typeof a?Object(o.filterXSS)(a,{stripIgnoreTag:!0}):S.has(e)?Object(l.b)(t||p,a):M.has(e)?Object(l.b)(t,a):a}(t,a,n),c=!r&&(e=>/<[^>]+>/.test(e))(s);return i.a.createElement("td",{key:t,dangerouslySetInnerHTML:c?{__html:s}:void 0,"data-sort":n,className:r?"text-right":"",style:{backgroundImage:r?I(t,n):void 0},title:r||S.has(t)?n:""},c?null:s)}))))))}}}]);