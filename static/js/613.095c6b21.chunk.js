"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[613],{53:function(n,t,e){e.d(t,{E$:function(){return s},Hg:function(){return o},Ry:function(){return p},Zv:function(){return d},pe:function(){return f}});var r=e(861),a=e(687),c=e.n(a),u=e(912),i="f896ccabafb5d2939071b9f1aa9e42c1";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},613:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u,i=e(439),o=e(53),s=e(791),p=e(689),f=e(168),d=e(934),l=e(87),v=d.Z.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n  margin: 0;\n  margin-top: 30px;\n  padding: 0;\n"]))),h=d.Z.li(a||(a=(0,f.Z)(["\n  margin-bottom: 20px;\n"]))),m=(0,d.Z)(l.OL)(c||(c=(0,f.Z)(["\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  color: #030303;\n  text-decoration: underline;\n"]))),x=d.Z.h2(u||(u=(0,f.Z)(["\n  margin: 0;\n"]))),g=e(184),Z=function(n){var t=n.movies,e=(0,p.TH)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{children:"Trending today"}),(0,g.jsx)(v,{children:t.map((function(n){var t=n.id,r=n.original_title,a=n.poster_path;return(0,g.jsx)(h,{children:(0,g.jsxs)(m,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:r,width:"300",height:"400"}),r]})},t)}))})]})},w=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){o.Hg().then((function(n){return r(n)}))}),[]),(0,g.jsx)(Z,{movies:e})}}}]);
//# sourceMappingURL=613.095c6b21.chunk.js.map