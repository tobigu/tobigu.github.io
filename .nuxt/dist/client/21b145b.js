(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{261:function(t,e,r){"use strict";r.r(e);var n=r(7),c=(r(40),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=r(47),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"m-12"},[r("div",[r("a",{attrs:{href:""}},[t._v("↵ Back")]),t._v(" "),r("p",{staticClass:"font-thin float-right"},[t._v("Published "+t._s(t.formatDate(t.article.createdAt))+", last updated "+t._s(t.formatDate(t.article.updatedAt)))])]),t._v(" "),r("header",{staticClass:"p-12 py-40 text-center text-white my-3 space-y-20",class:t.article.bg},[r("h1",{staticClass:"text-5xl font-thin"},[t._v(t._s(t.article.title))])]),t._v(" "),t.article.archived?r("div",{staticClass:"border-t-4 rounded-b px-4 py-3 shadow-md my-3",attrs:{role:"alert"}},[r("div",{staticClass:"flex"},[r("div",{staticClass:"py-1"},[r("svg",{staticClass:"fill-current h-6 w-6 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._v(" "),t._m(0)])]):t._e(),t._v(" "),r("nuxt-content",{staticClass:"container mx-auto space-y-6",attrs:{document:t.article}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"font-bold"},[t._v("This article was published a really long time ago.")]),t._v(" "),r("p",{staticClass:"text-sm"},[t._v("Its value then was likely questionable. Its value now is certainly pure nostalgia.")])])}],!1,null,null,null);e.default=component.exports}}]);