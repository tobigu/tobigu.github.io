(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{260:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(40),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","slug","bg"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(47),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-12 space-y-8"},[t._m(0),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"p-12 text-5xl text-white font-thin my-3",class:article.bg},[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("div",[n("h2",[t._v(t._s(article.title))])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-y-2"},[n("h1",{staticClass:"text-3xl font-thin"},[t._v("Toby's general software development blog")]),t._v(" "),n("p",[t._v("Here things are written. The value of the things is questionable.")])])}],!1,null,null,null);e.default=component.exports}}]);