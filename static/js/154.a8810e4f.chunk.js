"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[154],{488:function(e,t,n){n.d(t,{Hq:function(){return v},XT:function(){return h},fU:function(){return g},l2:function(){return d},sv:function(){return m}});var r=n(861),a=n(757),c=n.n(a),u=n(912),o="e744dd987f832ad945563dbad49387aa";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",s="/search/movie",l="/movie",f="/credits",p="/reviews",h=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("".concat(i,"?api_key=").concat(o,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("".concat(s,"?api_key=").concat(o,"&page=").concat(n,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(l,"/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t).concat(f,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("/movie/".concat(t).concat(p,"?api_key=").concat(o,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},968:function(e,t,n){n.d(t,{Z:function(){return c}});var r="PageHeading_title__whdE-",a=n(184);function c(e){var t=e.text;return(0,a.jsx)("h1",{className:r,children:t})}},493:function(e,t,n){var r=n(87),a=n(184);t.Z=function(e){var t=e.movies,n=e.prevLocation;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:(0,a.jsx)("h3",{children:c})})},t)}))})})}},154:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),a=n(689),c=n(791),u=n(87),o="MoviesPage_Searchbar__IcV0j",i="MoviesPage_SearchForm__kpN7l",s="MoviesPage_SearchFormButton__pBDYN",l="MoviesPage_SearchFormButtonLabel__q049z",f="MoviesPage_SearchForInput__tIM3i",p=n(184),h=function(e){var t=e.onSearch,n=(0,c.useState)(""),a=(0,r.Z)(n,2),u=a[0],h=a[1];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("form",{onSubmit:function(e){e.preventDefault(),""===u.trim()&&alert("Enter the film title"),t(u),h("")},className:o,children:(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("button",{type:"submit",className:s,children:(0,p.jsx)("div",{className:l,children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,p.jsx)("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"})})})}),(0,p.jsx)("input",{type:"text",name:"searchQuery",value:u,autoComplete:"off",autoFocus:!0,placeholder:"Search ...",onChange:function(e){h(e.target.value.toLowerCase())},className:f})]})})})},v=n(488),d=n(493),g=n(968),m=function(){var e=(0,u.lr)(),t=(0,r.Z)(e,2),n=t[0],o=t[1],i=(0,c.useState)([]),s=(0,r.Z)(i,2),l=s[0],f=s[1],m=(0,c.useState)(""),x=(0,r.Z)(m,2),_=x[0],w=x[1],S=(0,c.useState)(!1),j=(0,r.Z)(S,2),Z=j[0],k=j[1],y=(0,a.TH)(),b=n.get("query");return(0,c.useEffect)((function(){if(b){k(!0),(0,v.Hq)(b).then((function(e){e.length||alert("No movies found!"),f(e)})).catch((function(e){w("Ooops. Something went wrong..."),console.log(e)})).finally(k(!1))}}),[b]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(g.Z,{text:"Movie Search"}),Z&&"Loading ...",_&&(0,p.jsx)("div",{children:_}),(0,p.jsx)(h,{onSearch:function(e){o({query:"".concat(e)})}}),l&&(0,p.jsx)(d.Z,{movies:l,prevLocation:y})]})})}}}]);
//# sourceMappingURL=154.a8810e4f.chunk.js.map