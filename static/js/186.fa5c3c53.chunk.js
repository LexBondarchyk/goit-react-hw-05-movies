"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{323:function(e,n,t){t.d(n,{Hq:function(){return d},XT:function(){return v},fU:function(){return g},l2:function(){return h},sv:function(){return m}});var r=t(861),a=t(757),c=t.n(a),u=t(912),o="e744dd987f832ad945563dbad49387aa";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",i="/search/movie",p="/movie",f="/credits",l="/reviews",v=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("".concat(s,"?api_key=").concat(o,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("".concat(i,"?api_key=").concat(o,"&page=").concat(t,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n).concat(f,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/movie/".concat(n).concat(l,"?api_key=").concat(o,"&language=en-US&page=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},186:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(689),i=t(323),p=t(686),f=t.n(p),l=t(184);n.default=function(){var e=(0,o.useState)(null),n=(0,a.Z)(e,2),t=n[0],c=n[1],p=(0,o.useState)(!1),v=(0,a.Z)(p,2),d=v[0],h=v[1],g=(0,o.useState)(null),m=(0,a.Z)(g,2),w=m[0],k=m[1],x=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,i.sv)(x);case 4:0===(t=e.sent).length&&f().Notify.failure("No found reviews!"),c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k("Ooops. Something went wrong...");case 12:return e.prev=12,h(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(n){return e.apply(this,arguments)}}();e(x)}),[x]),(0,l.jsxs)(l.Fragment,{children:[d?f().Loading.pulse():f().Loading.remove(),w&&f().Notify.failure("".concat(w)),t&&(0,l.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,l.jsx)("li",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:t}),(0,l.jsx)("p",{children:r})]})},n)}))})]})}}}]);
//# sourceMappingURL=186.fa5c3c53.chunk.js.map