"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[496],{53:function(n,e,t){t.d(e,{E$:function(){return u},Hg:function(){return s},Ry:function(){return p},Zv:function(){return l},pe:function(){return f}});var r=t(861),a=t(687),i=t.n(a),o=t(912),c="f896ccabafb5d2939071b9f1aa9e42c1";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},496:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,c,s,u,p,f,l,d,x=t(439),v=t(791),h=t(689),m=t(53),g=t(168),Z=t(934),w=t(87),b=(0,Z.Z)(w.OL)(r||(r=(0,g.Z)(["\n  color: #030303;\n  text-decoration: none;\n  font-size: 16px;\n  background-color: none;\n  border-bottom: 1px solid #030303;\n"]))),j=Z.Z.div(a||(a=(0,g.Z)(["\n  display: flex;\n  gap: 25px;\n  margin-top: 30px;\n"]))),k=Z.Z.h2(i||(i=(0,g.Z)(["\n  font-size: 18px;\n  margin: 0;\n"]))),y=Z.Z.div(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n"]))),_=Z.Z.h3(c||(c=(0,g.Z)(["\n  margin: 0;\n  margin-top: 10px;\n  font-size: 18px;\n"]))),z=Z.Z.p(s||(s=(0,g.Z)(["\n  margin: 0;\n  font-weight: 400;\n  margin-top: 10px;\n  font-size: 13px;\n"]))),O=Z.Z.div(u||(u=(0,g.Z)(["\n  margin-top: 30px;\n"]))),R=(0,Z.Z)(w.OL)(p||(p=(0,g.Z)(["\n  text-decoration: none;\n  color: #030303;\n  margin-right: 15px;\n  font-size: 16px;\n\n  :last-of-type {\n    margin-right: 0;\n  }\n\n  &.active {\n    color: orange;\n    border-bottom: 1px solid orange;\n  }\n"]))),U=Z.Z.div(f||(f=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),C=Z.Z.h3(l||(l=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 18px;\n"]))),E=Z.Z.p(d||(d=(0,g.Z)(["\n  margin: 0;\n"]))),L=t(184),H=function(n){var e,t,r=n.film,a=(0,h.TH)(),i=(0,v.useRef)(null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(b,{to:i.current,children:"\u041d\u0430\u0437\u0430\u0434"}),r&&(0,L.jsxs)(j,{children:[(0,L.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:r.original_title,width:"300"}),(0,L.jsxs)(y,{children:[(0,L.jsx)(k,{children:r.title}),(0,L.jsxs)("p",{children:["User score: ",Math.ceil(10*r.vote_average),"%"]}),(0,L.jsx)(_,{children:"Overview"}),(0,L.jsx)(z,{children:r.overview}),(0,L.jsx)(C,{children:"Genres"}),(0,L.jsx)(U,{children:r.genres.map((function(n){return(0,L.jsx)(E,{children:n.name},n.id)}))})]})]}),(0,L.jsxs)(O,{children:[(0,L.jsx)(R,{to:"cast",children:"Cast"}),(0,L.jsx)(R,{to:"reviews",children:"Reviews"})]}),(0,L.jsx)(h.j3,{})]})},S=function(){var n=(0,v.useState)(null),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,h.UO)().movieId;return(0,v.useEffect)((function(){m.E$(a).then((function(n){return r(n.data)}))}),[a]),console.log(t),(0,L.jsx)(H,{film:t})}}}]);
//# sourceMappingURL=496.daa5b42d.chunk.js.map