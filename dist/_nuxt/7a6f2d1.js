(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("7030a3cd",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r(350)},354:function(t,e,r){var n=r(16)(!1);n.push([t.i,'#app[data-v-72636565]{background:var(--bg)}h1[data-v-72636565],h2[data-v-72636565],h3[data-v-72636565],h4[data-v-72636565],h5[data-v-72636565],h6[data-v-72636565],p[data-v-72636565]{color:var(--color)}a[data-v-72636565],h1[data-v-72636565],h2[data-v-72636565],h3[data-v-72636565],h4[data-v-72636565],h5[data-v-72636565],h6[data-v-72636565],p[data-v-72636565]{font-family:"Oldenburg",sans-serif}.page-header[data-v-72636565]{color:var(--color-primary);font-size:3.5rem;font-family:"Fascinate"}.profile-picture[data-v-72636565]{height:auto;width:100%}a[data-v-72636565]{background:linear-gradient(180deg,rgba(var(--color-primary-v),.3) 0,rgba(var(--color-primary-v),.3));background-position:0 100%;background-repeat:repeat-x;background-size:4px 2px;color:var(--color-primary);text-decoration:none;transition:background-size .2s}a[data-v-72636565]:hover{background-size:4px 1.3rem}',""]),t.exports=n},368:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(81),{layout:"subpage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("about").fetch();case 3:return n=e.sent,e.abrupt("return",{aboutMe:n});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=localStorage.getItem("nuxt-color-mode"),e=null===t?this.$store.getters.theme:t;this.$store.dispatch("setTheme",e)}}),c=(r(353),r(28)),l=r(52),d=r.n(l),v=r(346),h=r(349),f=r(344),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"skinny",attrs:{fluid:"",align:"center"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",align:"center"}},[r("h1",{staticClass:"page-header"},[t._v(t._s(t.aboutMe.header))])])],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"4",align:"center"}},[r("img",{staticClass:"profile-picture pr-3",attrs:{src:t.aboutMe.imgSrc}})]),t._v(" "),r("v-col",{staticClass:"mb-5",attrs:{cols:"12",md:"8",align:"left"}},[r("NuxtContent",{attrs:{document:t.aboutMe}})],1)],1)],1)}),[],!1,null,"72636565",null);e.default=component.exports;d()(component,{VCol:v.a,VContainer:h.a,VRow:f.a})}}]);