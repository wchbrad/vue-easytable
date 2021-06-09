(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217cc9"],{c7ed:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Pagination")]),n("Usage"),n("BaseUsage"),n("PageIndex"),n("PageSize"),n("PagingButtons"),n("PagingConfiguration"),n("CallbackEvents"),n("LayoutSettings"),n("Api")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Usage",fileName:"usage.md"}}),e._m(0),e._m(1),n("p",[e._v("use")]),e._m(2)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("import "),n("code",[e._v("VePagination")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VePagination } from "vue-easytable";\n\nVue.use(VePagination);\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('<template>\n  <ve-pagination :total="600" />\n</template>\n')])])}],c=n("2877"),l={},s=Object(c["a"])(l,o,i,!1,null,null,null),p=s.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Base Usage",fileName:"base-usage.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-pagination :total="600" />\n</template>\n')])])])],2)],1)},d=[];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600}})]],2)},t=[],n={};return g({render:e,staticRenderFns:t},n)}()}},f=b,_=Object(c["a"])(f,u,d,!1,null,null,null),h=_.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Page Index",fileName:"page-index.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("page-index")]),e._v(" sets the current page number")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-pagination :total="600" :page-index="2" />\n</template>\n')])])])],2)],1)},y=[];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-index":2}})]],2)},t=[],n={};return P({render:e,staticRenderFns:t},n)}()}},E=x,z=Object(c["a"])(E,O,y,!1,null,null,null),C=z.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Page Size",fileName:"page-size.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("page-size")]),e._v(" set the size of each page")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-pagination :total="600" :page-size="30" />\n</template>\n')])])])],2)],1)},S=[];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-size":30}})]],2)},t=[],n={};return $({render:e,staticRenderFns:t},n)}()}},F=A,I=Object(c["a"])(F,D,S,!1,null,null,null),R=I.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Paging Buttons",fileName:"paging-buttons.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("pagingCount")]),e._v(" set the number of middle buttons and paging buttons for the forward 5 pages and backward 5 pages")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-pagination :total="600" :paging-count="6" />\n</template>\n')])])])],2)],1)},U=[];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"paging-count":6}})]],2)},t=[],n={};return L({render:e,staticRenderFns:t},n)}()}},q=J,G=Object(c["a"])(q,B,U,!1,null,null,null),H=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Paging Configuration",fileName:"paging-configuration.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("pageSizeOption")]),e._v(" set paging size drop-down configuration")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-pagination :total="600" :page-size-option="[5,10,15]" :page-size="5" />\n</template>\n')])])])],2)],1)},M=[];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-size-option":[5,10,15],"page-size":5}})]],2)},t=[],n={};return W({render:e,staticRenderFns:t},n)}()}},Z=Y,ee=Object(c["a"])(Z,K,M,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Callback Events",fileName:"callback-events.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、"),n("code",[e._v("on-page-number-change")]),e._v("Page number change callback event"),n("br"),e._v("2、"),n("code",[e._v("on-page-size-change")]),e._v("Change callback events under each page")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-pagination\n    :total="600"\n    @on-page-number-change="pageNumberChange"\n    @on-page-size-change="pageSizeChange"\n  />\n</template>\n<script>\n  export default {\n    methods: {\n      pageNumberChange(pageIndex) {\n        console.log(pageIndex);\n      },\n\n      pageSizeChange(pageSize) {\n        console.log(pageSize);\n      },\n    },\n  };\n<\/script>\n')])])])],2)],1)},re=[];function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ce={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600},on:{"on-page-number-change":e.pageNumberChange,"on-page-size-change":e.pageSizeChange}})]],2)},t=[],n={methods:{pageNumberChange:function(e){console.log(e)},pageSizeChange:function(e){console.log(e)}}};return oe({render:e,staticRenderFns:t},n)}()}},le=ce,se=Object(c["a"])(le,ne,re,!1,null,null,null),pe=se.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Layout Settings",fileName:"layout-settings.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、Change the layout by setting the "),n("code",[e._v("layout")]),e._v(" property."),n("br"),e._v("2、The "),n("code",[e._v("layout")]),e._v(" property supports the following configuration items:"),n("br"),n("code",[e._v("total")]),e._v(":Display total number、"),n("code",[e._v("prev")]),e._v(":Show previous button、"),n("code",[e._v("pager")]),e._v(":Show page number button、"),n("code",[e._v("next")]),e._v(":Show next page button、"),n("code",[e._v("sizer")]),e._v(":Show per page size settings、"),n("code",[e._v("jumper")]),e._v(":Show goto input")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n  <div>\n    <div>\n      <div class=\"mb20 bold\">Don't display page number button</div>\n      <ve-pagination :total=\"600\" :layout=\"['total', 'prev', 'next', 'sizer', 'jumper']\" />\n    </div>\n    <div>\n      <div class=\"mt30 mb20 bold\">Adjust display order</div>\n      <ve-pagination :total=\"600\" :layout=\"['total', 'sizer', 'prev', 'pager', 'next', 'jumper']\" />\n    </div>\n\n    <div>\n      <div class=\"mt30 mb20 bold\">All layout</div>\n      <ve-pagination :total=\"600\" :layout=\"['total', 'prev', 'pager', 'next', 'sizer', 'jumper']\" />\n    </div>\n  </div>\n</template>\n")])])])],2)],1)},de=[];function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",[n("div",{staticClass:"mb20 bold"},[e._v("Don't display page number button")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","prev","next","sizer","jumper"]}})],1),e._v(" "),n("div",[n("div",{staticClass:"mt30 mb20 bold"},[e._v("Adjust display order")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","sizer","prev","pager","next","jumper"]}})],1),e._v(" "),n("div",[n("div",{staticClass:"mt30 mb20 bold"},[e._v("All layout")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","prev","pager","next","sizer","jumper"]}})],1)])]],2)},t=[],n={};return ge({render:e,staticRenderFns:t},n)}()}},fe=be,_e=Object(c["a"])(fe,ue,de,!1,null,null,null),he=_e.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"API",fileName:"api.md"}}),n("h3",[e._v("props")]),e._m(0),n("h3",[e._v("Event")]),e._m(1)],1)},ye=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("Property")]),n("th",[e._v("Description")]),n("th",[e._v("Type")]),n("th",[e._v("Optional value")]),n("th",[e._v("Default")])])]),n("tbody",[n("tr",[n("td",[e._v("layout")]),n("td",[e._v("Layout settings can be matched according to your own business scenarios")]),n("td",[n("code",[e._v("Array")])]),n("td",[e._v("['total', 'prev', 'pager', 'next', 'sizer', 'jumper']")]),n("td",[e._v("['total', 'prev', 'pager', 'next', 'sizer', 'jumper']")])]),n("tr",[n("td",[e._v("total")]),n("td",[e._v("Total Count")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("-")])]),n("tr",[n("td",[e._v("pageIndex")]),n("td",[e._v("Current page number")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("1")])]),n("tr",[n("td",[e._v("pagingCount")]),n("td",[e._v("The number of buttons in the middle of forward 5 pages and backward 5 pages")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("5")])]),n("tr",[n("td",[e._v("pageSize")]),n("td",[e._v("Page size")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("10")])]),n("tr",[n("td",[e._v("pageSizeOption")]),n("td",[e._v("Per page size drop-down configuration")]),n("td",[n("code",[e._v("Array")])]),n("td",[e._v("-")]),n("td",[e._v("[10, 20, 30]")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("Event Name")]),n("th",[e._v("Description")]),n("th",[e._v("Parameters")])])]),n("tbody",[n("tr",[n("td",[e._v("on-page-number-change")]),n("td",[e._v("Page change callback event")]),n("td",[e._v("Current page number")])]),n("tr",[n("td",[e._v("on-page-size-change")]),n("td",[e._v("Page size dropdown change callback")]),n("td",[e._v("Current page size")])])])])}],je={},Pe=Object(c["a"])(je,Oe,ye,!1,null,null,null),we=Pe.exports,xe={components:{Usage:p,BaseUsage:h,PageIndex:C,PageSize:R,PagingButtons:H,PagingConfiguration:te,CallbackEvents:pe,LayoutSettings:he,Api:we}},Ee=xe,ze=Object(c["a"])(Ee,r,a,!1,null,null,null);t["default"]=ze.exports}}]);
//# sourceMappingURL=chunk-2d217cc9.90c41cc1.js.map