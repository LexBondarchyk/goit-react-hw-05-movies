"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{323:function(t,e,n){n.d(e,{Hq:function(){return v},XT:function(){return d},fU:function(){return g},l2:function(){return h},sv:function(){return m}});var r=n(861),a=n(757),c=n.n(a),u=n(912),s="e744dd987f832ad945563dbad49387aa";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/week",i="/search/movie",p="/movie",f="/credits",l="/reviews",d=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,u.Z.get("".concat(o,"?api_key=").concat(s,"&page=").concat(e,"&language=en-US&include_adult=false"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("".concat(i,"?api_key=").concat(s,"&page=").concat(n,"&query=").concat(e,"&language=en-US&include_adult=false"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e).concat(f,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,u.Z.get("/movie/".concat(e).concat(l,"?api_key=").concat(s,"&language=en-US&page=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),i=n(323),p="Cast_castList__ARoWn",f="Cast_castItem__-Jcfe",l=n(184),d=function(){var t=(0,o.UO)().movieId,e=(0,s.useState)([]),n=(0,a.Z)(e,2),c=n[0],d=n[1],v=(0,s.useState)(null),h=(0,a.Z)(v,2),g=h[0],m=h[1],w=(0,s.useState)(!1),x=(0,a.Z)(w,2),k=x[0],_=x[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,i.fU)(t);case 4:n=e.sent,d(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m("Ooops. Something went wrong...");case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,l.jsxs)(l.Fragment,{children:[k&&"Loading...",g&&(0,l.jsx)("div",{children:g}),(0,l.jsx)("ul",{className:p,children:c.map((function(t){return(0,l.jsxs)("li",{className:f,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:"".concat(t.name," portrait")}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Name: ",t.name]}),(0,l.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)}))})]})}}}]);
//# sourceMappingURL=76.a7ec26c0.chunk.js.map