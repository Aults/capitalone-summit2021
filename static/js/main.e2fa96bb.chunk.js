(this["webpackJsonpcapital-one-app"]=this["webpackJsonpcapital-one-app"]||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),l=(a(127),a(128),a(25)),o=a(112),s=a.n(o),d=a(218),j=a(28),b=a(220),h=a(224),p=a(223),u=a(219),x=a(225),f=a(227),O=a(222),g=a(99),y=a(97),m=a(114),S=a.n(m),w=a(90),v=a.n(w),C=a(89),D=a.n(C),P=a(113),k=a.n(P),I=a(221),R=a(226),T=a(76),W=a.n(T),B=a(228),Y=a(115),M=a(6),A=Object(d.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function J(e){var t=A(),a=Object(j.a)(),n=e.page,c=e.onChangePage;return Object(M.jsxs)("div",{className:t.root,children:[Object(M.jsx)(y.a,{onClick:function(e){c(e,0)},disabled:0===n,"aria-label":"first page",children:"rtl"===a.direction?Object(M.jsx)(k.a,{}):Object(M.jsx)(S.a,{})}),Object(M.jsx)(y.a,{onClick:function(e){c(e,n-1)},disabled:0===n,"aria-label":"previous page",children:"rtl"===a.direction?Object(M.jsx)(D.a,{}):Object(M.jsx)(v.a,{})}),Object(M.jsx)(y.a,{onClick:function(e){c(e,n+1)},disabled:n>100,"aria-label":"next page",children:"rtl"===a.direction?Object(M.jsx)(v.a,{}):Object(M.jsx)(D.a,{})})]})}function N(e,t,a,n,c){return{title:e,year:t,poster:a,imdb:n,page:c}}var q=function(){var e="73f61f10",t=n.useState(0),a=Object(l.a)(t,2),c=a[0],i=a[1],r=n.useState(10),o=Object(l.a)(r,2),d=o[0],j=o[1],y=n.useState([]),m=Object(l.a)(y,2),S=m[0],w=m[1],v=n.useState(""),C=Object(l.a)(v,2),D=C[0],P=C[1],k=n.useState({}),T=Object(l.a)(k,2),A=T[0],q=T[1],E=n.useState({}),F=Object(l.a)(E,2),L=F[0],z=F[1],G=n.useState(!0),H=Object(l.a)(G,2),K=H[0],Q=H[1],U=n.useState(null),V=Object(l.a)(U,2),X=V[0],Z=V[1],$=d-Math.min(d,S.length-c*d);return Object(M.jsxs)("div",{children:[Object(M.jsx)(B.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:Object(M.jsx)(s.a,{value:D,onChange:function(e){P(e)},onRequestSearch:function(){return t=1,void W.a.get("http://www.omdbapi.com/?s=".concat(D,"&type=movie&page=").concat(t,"&apikey=").concat(e)).then((function(e){q({}),i(0),z({});var t=[];if(null!=e&&null!=e.data&&null!=e.data.Search)for(var a=0;a<e.data.Search.length;a++)!0!==L[e.data.Search[a].imdbID]&&(t.push(N(e.data.Search[a].Title,e.data.Search[a].Year,e.data.Search[a].Poster,e.data.Search[a].imdbID,a+1e4+c)),L[e.data.Search[a].imdbID]=!0);Q(!0),Z(null),w(t)}));var t},style:{width:"90%",marginTop:"5px",marginBottom:"5px",borderWidth:2,borderColor:"orange",borderStyle:"solid"}})}),(K||null==X)&&Object(M.jsx)(B.a,{style:{paddingTop:"20px",paddingBottom:"10px"},display:"flex",flexDirection:"row",justifyContent:"center",children:Object(M.jsx)(u.a,{style:{width:"95%",borderWidth:2,borderColor:"orange",borderStyle:"solid"},component:g.a,children:Object(M.jsxs)(b.a,{"aria-label":"custom pagination table",children:[Object(M.jsx)(I.a,{children:Object(M.jsxs)(O.a,{children:[Object(M.jsx)(p.a,{component:"th",scope:"row",children:"Title"}),Object(M.jsx)(p.a,{style:{width:80},align:"left",children:"Year"}),Object(M.jsx)(p.a,{style:{width:80},align:"left",children:"IMDB ID"})]})}),Object(M.jsxs)(h.a,{children:[(d>0?S.slice(c*d,c*d+d):S).map((function(t){return Object(M.jsxs)(O.a,{hover:!0,onClick:function(a){return function(t,a){W.a.get("http://www.omdbapi.com/?i=".concat(a.imdb,"&apikey=").concat(e)).then((function(e){console.log(e.data),Z(e.data),Q(!1)}))}(0,t)},children:[Object(M.jsx)(p.a,{component:"th",scope:"row",children:t.title}),Object(M.jsx)(p.a,{style:{width:80},align:"left",children:t.year}),Object(M.jsx)(p.a,{style:{width:80},align:"left",children:t.imdb})]},t.imdb+t.page)})),$>0&&Object(M.jsx)(O.a,{style:{height:53*$},children:Object(M.jsx)(p.a,{colSpan:6})})]}),Object(M.jsx)(x.a,{children:Object(M.jsxs)(O.a,{children:[Object(M.jsx)("td",{children:Object(M.jsx)("p",{style:{color:"#4b51b5",cursor:"pointer"},onClick:function(){var e=S.slice();e.sort((function(e,t){return e.year>t.year?1:-1})),w(e),i(0)},children:"Sort seen results by year"})}),Object(M.jsx)(f.a,{rowsPerPageOptions:[5,10],colSpan:3,count:-1,rowsPerPage:d,page:c,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(t,a){!0!==A[a+""]?W.a.get("http://www.omdbapi.com/?s=".concat(D,"&page=").concat(a+1,"&type=movie&apikey=").concat(e)).then((function(e){if(console.log(e),null==e||"False"!==e.data.Response){A[a+""]=!0;var t=[];if(null!=e&&null!=e.data&&null!=e.data.Search)for(var n=0;n<e.data.Search.length;n++)!0!==L[e.data.Search[n].imdbID]&&(t.push(N(e.data.Search[n].Title,e.data.Search[n].Year,e.data.Search[n].Poster,e.data.Search[n].imdbID,3*n+a)),L[e.data.Search[n].imdbID]=!0);w(S.concat(t)),null!=e&&null!=e.data&&null!=e.data.Search&&i(a)}})):(console.log("here"),i(a))},onChangeRowsPerPage:function(e){j(parseInt(e.target.value,10)),i(0)},ActionsComponent:J})]})})]})})}),!K&&null!=X&&Object(M.jsxs)(B.a,{style:{paddingTop:"20px",paddingBottom:"10px"},display:"flex",flexDirection:"column",justifyContent:"center",children:[Object(M.jsx)(R.a,{component:"button",variant:"body2",onClick:function(){Q(!0),Z(null)},children:"Return to search results"}),Object(M.jsx)("figure",{children:Object(M.jsx)(Y.a,{src:X.Poster,fluid:!0})}),Object(M.jsxs)(B.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(M.jsx)("p",{style:{fontWeight:"bold"},children:"Title:\xa0"}),Object(M.jsx)("p",{children:X.Title})]}),Object(M.jsxs)(B.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(M.jsx)("p",{style:{fontWeight:"bold"},children:"Year:\xa0"}),Object(M.jsx)("p",{children:X.Year})]}),Object(M.jsxs)(B.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(M.jsx)("p",{style:{fontWeight:"bold"},children:"Director:\xa0"}),Object(M.jsx)("p",{children:X.Director})]}),Object(M.jsxs)(B.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(M.jsx)("p",{style:{fontWeight:"bold"},children:"Rated:\xa0"}),Object(M.jsx)("p",{children:X.Rated})]}),Object(M.jsxs)(B.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(M.jsx)("p",{style:{fontWeight:"bold"},children:"Rating:\xa0"}),Object(M.jsx)("p",{children:X.imdbRating})]})]})]})};var E=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(q,{})})};r.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(E,{})}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.e2fa96bb.chunk.js.map