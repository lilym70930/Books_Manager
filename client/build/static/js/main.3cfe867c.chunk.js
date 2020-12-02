(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(20),r=a.n(c),l=(a(69),a(15)),i=a(2),s=a.n(i),u=a(5),m=a(3),d=a(46),p=a(6),f=a(23),b=(a(71),function(e){return o.a.createElement("table",{className:"tableHederRow"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Collection Name"),o.a.createElement("th",null," Books # "))),o.a.createElement("tbody",null,e.collections.length>0?e.collections.map((function(t){return o.a.createElement("tr",{key:"collectionItem ".concat(t._id)},o.a.createElement("td",{onClick:function(){return e.showBooks(t)},className:"collectionName"},t.collectionName),o.a.createElement("td",null,t.books.length),o.a.createElement("td",{className:"actionBtn"},!t.readonly&&o.a.createElement("button",{onClick:function(){e.editRow(t)}},"Edit"),!t.readonly&&o.a.createElement("button",{onClick:function(){return e.deleteCollection(t._id)}},"Delete")))})):o.a.createElement("tr",null,o.a.createElement("td",{colSpan:3},"No collections..."))))}),g=(a(72),function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1];return o.a.createElement("div",{className:"form"},o.a.createElement("label",null," Collection Name"),o.a.createElement("input",{type:"text",name:"collectionName",placeholder:"collection name...",value:c,onChange:function(e){var t=e.target.value;r(t)}}),o.a.createElement("button",{onClick:function(){c&&0!==c.length&&(e.AddToCollection(c),r(""))}},"Add new collection"))}),k=a(26),E=function(e){var t=Object(n.useState)(e.currentCollection),a=Object(m.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){r(e.currentCollection)}),[e]),o.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.updateCollection(c._id,c)}},o.a.createElement("label",null," Collection Name"),o.a.createElement("input",{type:"text",name:"collectionName",value:c.collectionName,onChange:function(e){var t=e.target,a=t.name,n=t.value;r(Object(f.a)(Object(f.a)({},c),{},Object(k.a)({},a,n)))}}),o.a.createElement("button",{onClick:function(){return e.onUpdate(c)}},"Update collection"),o.a.createElement("button",{onClick:e.onCancel},"Cancel"))},h=(a(73),a(27)),v=a.n(h),A=a(62),y=a(28),C=a.n(y),O=function(e){var t=e.book,a=e.likeHandler,c=e.collections,r=e.addToCollection,l=e.removeFromCollection,i=e.addRateBook,s=e.updateBookRate,u=Object(n.useState)(!1),d=Object(m.a)(u,2),p=d[0],f=d[1],b=Object(n.useState)(!1),g=Object(m.a)(b,2),k=g[0],E=g[1],h=Object(n.useState)(!1),y=Object(m.a)(h,2),O=(y[0],y[1],c.find((function(e){return"likes"===e._id})).books.some((function(e){return e.key===t.key}))),j=c.filter((function(e){return!e.books.some((function(e){return e.key===t.key}))})),N=c.filter((function(e){return e.books.some((function(e){return e.key===t.key}))}));return o.a.createElement("div",{className:"bookCard"},t.imageUrl?o.a.createElement("img",{className:"bookImage",src:t.imageUrl,alt:""}):o.a.createElement("img",{className:"bookImage",src:"https://www.gollancz.co.uk/wp-content/uploads/2018/07/missingbook.png",alt:""}),o.a.createElement("div",{className:"detailContainer"},o.a.createElement("div",{className:"bookNameDiv"},t.title),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Book by: "),t.author_name),t.first_publish_year&&o.a.createElement("li",null," ",o.a.createElement("strong",null,"Publish year: "),t.first_publish_year))),o.a.createElement("div",{className:"mainBtnsContainer"},o.a.createElement("div",{className:"btnsContainer"},!k&&o.a.createElement("button",{disabled:0===j.length,className:"btns sideBySide",onClick:function(){return f(!p)}},p?"Cancel":"Add to..."),p&&o.a.createElement("div",{className:"clear"},j.map((function(e){return o.a.createElement("div",{onClick:function(){r(e._id,t),f(!1)},className:"collectionsMenuItem "},e.collectionName)}))),!p&&o.a.createElement("button",{disabled:0===N.length,className:"btns sideBySide",onClick:function(){return E(!k)}},k?"Cancel":"Remove From..."),k&&o.a.createElement("div",{className:"clear"},N.map((function(e){return o.a.createElement("div",{onClick:function(){l(e._id,t),E(!1)},className:"collectionsMenuItem "},e.collectionName)}))),!k&&!p&&o.a.createElement(A.a,{isClick:O,onClick:function(){return a(O)},className:"btns sideBySide"}),t.readURL&&!k&&!p&&o.a.createElement("a",{className:"btnReadingOnLInk  ",href:t.readURL,rel:"noopener noreferrer",target:"_blank"}," ",o.a.createElement("img",{src:v.a,alt:""})),o.a.createElement("div",{className:"btnRate"},!k&&!p&&o.a.createElement(C.a,{count:5,value:t.rate,onChange:function(e){t.rate?t.rate!==e&&(t.rate=e,s(t)):(t.rate=e,i(t))},size:29,activeColor:"#ffd700"})))))},j=a(51),N=a.n(j),w=(a(79),a(10)),x=a(110),B=a(111),S=(a(80),function(e){console.log("navBar.props.collections",e.collections);var t=e.collections.find((function(e){return"likes"===e._id}));console.log("likesCollection",t);var a=t.books.length,n=e.user;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(x.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},o.a.createElement(x.a.Brand,{as:w.b,to:"/"},"PRIVATE LIBRARY"),o.a.createElement(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(x.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(B.a,{className:"mr-auto"},o.a.createElement("span",null,n?o.a.createElement(B.a.Link,{as:w.b,to:"/search"},"Search"):""),o.a.createElement("span",null,n?o.a.createElement(B.a.Link,{as:w.b,to:"/collections"},"Collections"):""),o.a.createElement("span",null,n?o.a.createElement(B.a.Link,{as:w.b,to:"/booksILiked"},"Likes ",0===a?"":o.a.createElement("span",{className:"btnCount"},a)):""),o.a.createElement("span",null,n?o.a.createElement(B.a.Link,{as:w.b,to:"/myRatings"},"Ratings"):""),o.a.createElement("span",null,n?o.a.createElement(B.a.Link,{onClick:function(){localStorage.removeItem("user"),window.location.href="/"},as:w.b,to:"/"},"Logout"):"")),o.a.createElement(B.a,null,o.a.createElement("span",null,n?"":o.a.createElement(B.a.Link,{as:w.b,to:"/signIn"},"Login")))))))}),R=function(e){return o.a.createElement("header",null,o.a.createElement(S,{collections:e.collections,user:e.user,userName:e.userName}))},I=function(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(!1),i=Object(m.a)(l,2),d=i[0],p=i[1],k=Object(n.useState)(null),h=Object(m.a)(k,2),v=h[0],A=h[1],y=Object(n.useState)(!1),C=Object(m.a)(y,2),j=C[0],w=C[1],x=Object(n.useState)(!1),B=Object(m.a)(x,2),S=(B[0],B[1],function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,e.addNewCollection(a);case 3:w(!1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),R=function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,e.deleteCollection(a);case 3:w(!1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),p(!1),t.next=4,e.updateCollection(a);case 4:w(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){r(c+1)};return o.a.createElement("div",null,o.a.createElement("div",{className:"topContainer"},o.a.createElement("h3",null," Your Book Collections"),o.a.createElement("img",{src:N.a,alt:""})),o.a.createElement("section",{className:"my-4 mx-5"},o.a.createElement("div",{className:"row1"},o.a.createElement("div",{className:"col-lg-5"},d?o.a.createElement("div",null,o.a.createElement("h4",null,"Edit collection"),o.a.createElement(E,{onCancel:function(){return p(!1)},currentCollection:v,onUpdate:I})):o.a.createElement("div",null,o.a.createElement("h4",null,"Add Collection"),j?"loading":o.a.createElement(g,{AddToCollection:S}),o.a.createElement("h4",null,"Your Collections"),o.a.createElement("div",{className:"collectionTable"},o.a.createElement(b,{collections:e.collections,deleteCollection:R,editRow:function(e){p(!0),A(Object(f.a)({},e))},showBooks:function(e){console.log("collection",e),A(e)}})))),o.a.createElement("div",null),o.a.createElement("div",{className:"bookItemContainer col-lg-7 px-5 pt-5 py-5"},o.a.createElement("h4",null,v?v.collectionName:"Your Books"),o.a.createElement("h6",null,"Here you can see all the books from your chosen collection"),v&&v.books.map((function(t){return o.a.createElement(O,{key:t.key,book:t,likeHandler:function(a){return function(t,a){a?e.removeFromCollection("likes",t):e.addToCollection("likes",t)}(t,a)},setVersion:L,collections:e.collections,addToCollection:e.addToCollection,removeFromCollection:e.removeFromCollection,addRateBook:e.addRateBook,updateBookRate:e.updateBookRate})}))))))},L=20,U=L,F=function(e,t){return"https://openlibrary.org/search.json?q=".concat(e,"&page=").concat(t,"&limit=").concat(U)},T=function(e){return"https://covers.openlibrary.org/b/olid/".concat(e,"-M.jpg")},P=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,o,c,r,l=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",a=l.length>1&&void 0!==l[1]?l[1]:1,e.next=4,fetch(F(t,a)).then((function(e){return e.json()}));case 4:return n=e.sent,o=n.docs,c=n.numFound,r=o.map((function(e){return{key:e.key,imageUrl:e.cover_edition_key?T(e.cover_edition_key):null,readURL:e.ebook_count_i&&e.ia?Y(e.ia[0]):null,rate:e.rate,title:e.title,first_publish_year:e.first_publish_year,author_name:e.author_name}})),e.abrupt("return",{docs:r,numFound:c});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){return"https://archive.org/stream/".concat(e)},D=(a(86),function(e){for(var t=e.bookPerPage,a=e.totalBooks,n=e.paginate,c=e.currentPage,r=[],l=1;l<=Math.ceil(a/t);l++)r.push(l);return o.a.createElement("nav",null,o.a.createElement("ul",{className:"pagination"},r.map((function(e){return o.a.createElement("li",{key:e,className:"page-item ".concat(e===c?"currentPageStyle":"")},o.a.createElement("span",{onClick:function(){return n(e)},className:"page-link pageLink ".concat(e===c?"currentPageStyle":"")},e))}))))}),V=a(54),H=a.n(V),K=(a(87),L),J=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),d=Object(m.a)(i,2),p=d[0],f=d[1],b=Object(n.useState)(!1),g=Object(m.a)(b,2),k=g[0],E=g[1],h=Object(n.useState)(""),A=Object(m.a)(h,2),y=A[0],C=A[1],j=Object(n.useState)(0),N=Object(m.a)(j,2),w=N[0],x=N[1],B=Object(n.useState)(1),S=Object(m.a)(B,2),R=S[0],I=S[1],L=Object(n.useState)(0),U=Object(m.a)(L,2),F=U[0],T=U[1],Y=Object(n.useState)(!0),V=Object(m.a)(Y,2),J=V[0],M=V[1],z=Object(n.useState)(!1),_=Object(m.a)(z,2),W=_[0],q=_[1],X=Object(n.useState)(!1),G=Object(m.a)(X,2),Q=G[0],Z=G[1],$=Object(n.useState)(!1),ee=Object(m.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!1),oe=Object(m.a)(ne,2),ce=oe[0],re=oe[1],le=function(e,t){return(e.author_name?e.author_name[0]:"")>(t.author_name?t.author_name[0]:"")?1:-1},ie=function(e,t){return e.first_publish_year>t.first_publish_year?-1:1},se=function(e,t){return e.title>t.title?1:-1},ue=function(){var t=Object(u.a)(s.a.mark((function t(a){var n,o,c,l,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,P(y,a);case 3:n=t.sent,o=n.docs,c=n.numFound,o.forEach((function(t){e.tryRateBook(e.ratedBooks,t)})),console.log("docs@@",o),T(c>(l=10*K)?l:c),i=le,W?i=ie:Q&&(i=se),o.sort(i),console.log("books-DOCS",o),r(o),f(!1),I(a),E(!0);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),me=function(t,a){a?(e.removeFromCollection("likes",t),re(!ce)):(e.addToCollection("likes",t),re(!ce)),x(w+1)},de=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ue(1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(e){var t=Object(l.a)(c);t.sort(e),r(t)};return o.a.createElement("div",{className:"bookSearchMainContainer"},o.a.createElement("div",{className:"pageImgContainer"},o.a.createElement("img",{src:H.a,alt:""})),o.a.createElement("div",{className:"searchHeader"},o.a.createElement("h3",null,"Search for your favorite books"),o.a.createElement("input",{placeholder:"Search book name",value:y,onChange:function(e){return C(e.target.value)},onKeyDown:function(e){13===e.keyCode&&de()}}),o.a.createElement("button",{onClick:de},"Search"),!p&&k&&0!==c.length&&o.a.createElement("div",null,o.a.createElement("h5",{style:{display:"block",margin:"15px"}},"You can also sort the results by"),o.a.createElement("span",null,o.a.createElement("input",{onClick:function(){J||(M(!0),q(!1),Z(!1),pe(le))},checked:J,type:"radio",id:"authorName",name:"filterBooks",value:"authorName"})," ",o.a.createElement("label",{style:{display:"inline",marginRight:"10px"},for:"authorName"},"Author Name")),o.a.createElement("span",null,o.a.createElement("input",{onClick:function(){W||(q(!0),Z(!1),M(!1),pe(ie))},checked:W,type:"radio",id:"publicationYear",name:"filterBooks",value:"publicationYear"})," ",o.a.createElement("label",{style:{display:"inline",marginRight:"10px"},for:"publicationYear"},"Publication Year")),o.a.createElement("span",null,o.a.createElement("input",{onClick:function(){Q||(q(!1),Z(!0),M(!1),pe(se))},checked:Q,type:"radio",id:"bookTitle",name:"filterBooks",value:"bookTitle"})," ",o.a.createElement("label",{style:{display:"inline",marginRight:"10px"},for:"bookTitle"},"Book Title"))),!p&&k&&0!==c.length&&o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("input",{onClick:function(){ae(!te)},checked:te,style:{marginRight:"3px"},type:"checkbox"}),"Read Online"),o.a.createElement("img",{style:{marginLeft:"7px"},src:v.a,alt:""}))),!p&&k&&0===c.length&&o.a.createElement("h1",null,"Sorry, NO book was found"),p?o.a.createElement("div",null,o.a.createElement("div",{className:"spinner-border text-info",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))):o.a.createElement("div",{className:"booksCardConrainer"},c.filter((function(e){return!te||e.readURL})).map((function(t){return o.a.createElement(O,{key:t.key,book:t,likeHandler:function(e){me(t,e)},collections:e.collections,addToCollection:e.addToCollection,removeFromCollection:e.removeFromCollection,addRateBook:e.addRateBook,updateBookRate:e.updateBookRate})}))),o.a.createElement("div",{className:"pagination"},!p&&k&&0!==c.length&&o.a.createElement(D,{bookPerPage:K,totalBooks:F,paginate:function(e){ue(e)},currentPage:R})))},M=a(11),z=a.n(M),_=window.location.origin.includes("localhost")?"https://localhost:4000":window.location.origin;function W(){return(W=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("inside collection name",t),e.prev=1,e.next=4,z.a.post(_+"/collections",{collectionName:t,books:[],readonly:!1});case 4:if(201!==(a=e.sent).status){e.next=8;break}return console.log("created collection",a.data),e.abrupt("return",a.data);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0,"err post new collection");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function q(){return(q=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("AddToCollection",t,a),e.next=4,z.a.post(_+"/collections/".concat(t,"/books"),a);case 4:if(200!==(n=e.sent).status){e.next=9;break}return e.abrupt("return",n.data);case 9:console.log("add book to collection return:",n.status);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("!!!! err add book to collection",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function X(){return(X=Object(u.a)(s.a.mark((function e(t,a){var n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("removeFromCollection",t,a),n=encodeURIComponent(a.key),e.next=5,z.a.delete(_+"/collections/".concat(t,"/books/").concat(n));case 5:if(200!==(o=e.sent).status){e.next=10;break}return e.abrupt("return",o.data);case 10:console.log("add book to collection return:",o.status);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("!!!! err add book to collection",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function G(){return(G=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get(_+"/collections");case 3:if(200!==(t=e.sent).status){e.next=8;break}return console.log("res.data",t.data.collections),console.log("isArray data",Array.isArray(t.data.collections)),e.abrupt("return",t.data.collections);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0,"err geting collection");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function Q(){return(Q=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("updatedCollection",t),e.next=4,z.a.patch(_+"/collections/".concat(t._id),{collectionName:t.collectionName});case 4:if(200!==(a=e.sent).status){e.next=9;break}return e.abrupt("return",a.data);case 9:console.log("update return:",a.status);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("!!!! err update collection",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function Z(){return(Z=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.delete(_+"/collections/".concat(t));case 3:if(204!==(a=e.sent).status){e.next=9;break}return console.log("res.data",a.data),e.abrupt("return",t);case 9:console.log("delete return:",a.status);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0,"err deleting collection");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function $(){return($=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get(_+"/rated-books");case 3:if(200!==(t=e.sent).status){e.next=7;break}return console.log("res.data",t.data.books),e.abrupt("return",t.data.books);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0,"err geting books");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function ee(){return(ee=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post(_+"/rated-books",t);case 3:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.data);case 8:console.log("add rate book  return:",a.status);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("!!!! err add rate book ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function te(){return(te=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.patch(_+"/rated-books/".concat(encodeURIComponent(t.key)),t);case 3:if(200!==(a=e.sent).status){e.next=9;break}return console.log("UPDATED BOOK RATE"),e.abrupt("return",a.data);case 9:console.log("update rate book  return:",a.status);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("!!!! err udate rate book ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var ae=function(e){return W.apply(this,arguments)},ne=function(e){return Z.apply(this,arguments)},oe=function(e,t){return q.apply(this,arguments)},ce=function(e,t){return X.apply(this,arguments)},re=function(){return G.apply(this,arguments)},le=function(e){return Q.apply(this,arguments)},ie=function(){return $.apply(this,arguments)},se=function(e){return ee.apply(this,arguments)},ue=function(e){return te.apply(this,arguments)},me=a(55),de=a.n(me),pe=a(56),fe=a.n(pe),be=a(57),ge=a.n(be),ke=(a(104),function(){return o.a.createElement("div",{className:"homeContainer"},o.a.createElement("h1",null,"Manage your book collections in an easy way "),o.a.createElement("img",{id:"imgCover",src:de.a,alt:""}),o.a.createElement("div",{className:"infoContainer"},o.a.createElement("h6",null,"Created by Lily Mulugeta 2020"),o.a.createElement("a",{href:"https://github.com/lilym70930"},o.a.createElement("img",{src:fe.a,alt:""})),o.a.createElement("a",{href:"https://www.linkedin.com/in/lilymulugeta/"},o.a.createElement("img",{src:ge.a,alt:""}))))}),Ee=a(58),he=a.n(Ee),ve=(a(105),function(e){return o.a.createElement("div",{className:"booksILikeMainContainer"},o.a.createElement("img",{id:"mainPic",src:he.a,alt:""}),o.a.createElement("h3",null,"Here you can see all of your favorite books"),o.a.createElement("div",null,e.collection.books.map((function(t){return o.a.createElement(O,{key:t.key,book:t,likeHandler:function(a){return function(t,a){a?e.removeFromCollection("likes",t):e.addToCollection("likes",t)}(t,a)},collections:e.collections,addToCollection:e.addToCollection,removeFromCollection:e.removeFromCollection,addRateBook:e.addRateBook,updateBookRate:e.updateBookRate})}))))}),Ae=a(59),ye=a.n(Ae),Ce=(a(106),function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=(a[0],a[1],Object(n.useState)(!1)),r=Object(m.a)(c,2),l=r[0],i=(r[1],Object(n.useState)(0)),s=Object(m.a)(i,2),u=s[0],d=s[1],p=e.ratedBooks.filter((function(e){return!u||e.rate===u}));return o.a.createElement("div",null,o.a.createElement("img",{id:"mainPic",src:ye.a,alt:""}),o.a.createElement("h3",null,"Here are all the books you have rated"),o.a.createElement("h4",null,"You can filter your books by rating! Click on the stars."),0!==e.ratedBooks.length&&o.a.createElement("div",null,0===u?o.a.createElement("div",{className:"starsContainer"},o.a.createElement(C.a,{count:5,value:0,onChange:function(e){d(e)},size:29,activeColor:"#ffd700"})):o.a.createElement("div",null,o.a.createElement("h5",{style:{color:"red"}},"Results for ",u," star(s) "),o.a.createElement("button",{className:"clearButton",onClick:function(){return d(0)}},"Clear filter"))),l?o.a.createElement("div",null,o.a.createElement("div",{className:"spinner-border text-info",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))):o.a.createElement("div",{className:"booksCardConrainer"},p.map((function(t){return o.a.createElement(O,{key:t.key,book:t,likeHandler:function(a){return function(t,a){a?e.removeFromCollection("likes",t):e.addToCollection("likes",t)}(t,a)},collections:e.collections,addToCollection:e.addToCollection,removeFromCollection:e.removeFromCollection,addRateBook:e.addRateBook,updateBookRate:e.updateBookRate})}))))}),Oe=a(60),je=a.n(Oe),Ne=(a(107),a(61)),we=a.n(Ne),xe=window.location.origin.includes("localhost")?"https://localhost:4000":window.location.origin,Be=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),s=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(m.a)(d,2),f=(p[0],p[1],Object(n.useState)(!1)),b=Object(m.a)(f,2),g=b[0],k=(b[1],function(){console.log("INSIDE SIGNUP REGISTER"),z.a.post(xe+"/signUp",{email:c,password:s}).then((function(t){if(console.log("INSIDE SIGNUP CALLBACK,res.status= ",t.status),201===t.status)return console.log("@@@res.data",t.data),e.onLogin(t.data);console.log("error code : ".concat(t.status))})).catch((function(e){console.log(e)}))}),E=!c||!s;return o.a.createElement("div",null,o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Welcome to Private Library"),o.a.createElement("h2",null,"In order to login, please create an account")),o.a.createElement("section",{className:"Form my-4 mx-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("img",{src:we.a,className:"img-fluid",alt:""})),o.a.createElement("div",{className:"form col-lg-7 px-5 pt-5 py-5"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-lg-7 "},o.a.createElement("p",null,"Email"),o.a.createElement("input",{type:"email",placeholder:"email@domainname.com",className:"form-control my-3 p-4 ",onChange:function(e){return r(e.target.value)}}))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("p",null,"Password"),o.a.createElement("input",{type:"password",placeholder:"Enter your password",className:"form-control my-3 p-4",onChange:function(e){return u(e.target.value)},onKeyDown:function(e){13===e.keyCode&&k()}}))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-lg-7"},g?o.a.createElement("p",{style:{color:"red"}},"Register error"):""," ",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"btn1 mt-3 mb-5",disabled:E,onClick:k},"Register")))))))))},Se=window.location.origin.includes("localhost")?"https://localhost:4000":window.location.origin,Re=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),s=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(m.a)(d,2),f=(p[0],p[1],function(){z.a.post(Se+"/signIn",{email:c,password:s}).then((function(t){if(200===t.status)return console.log("res.data",t.data),e.onLogin(t.data);console.log("Error login")})).catch((function(e){console.log(e)}))});return o.a.createElement("div",null,o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Welcome Back")),o.a.createElement("section",{className:"Form my-4 mx-5"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row no-gutters"},o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("img",{src:je.a,className:"img-fluid",alt:""})),o.a.createElement("div",{className:"form col-lg-7 px-5 pt-5 py-5"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-lg-7 "},o.a.createElement("p",null,"Email"),o.a.createElement("input",{type:"email",placeholder:"email@domainname.com",className:"form-control my-3 p-4 ",onChange:function(e){return r(e.target.value)}}))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("p",null,"Password"),o.a.createElement("input",{type:"password",placeholder:"Enter your password",className:"form-control my-3 p-4",onChange:function(e){return u(e.target.value)},onKeyDown:function(e){13===e.keyCode&&f()}}))),o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("button",{type:"button",className:"btn1 mt-3 mb-5",onClick:f},"Login")," ",o.a.createElement("br",null),o.a.createElement(B.a.Link,{as:w.b,to:"/signUp"},"Don't have an account?")))))))))},Ie=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(m.a)(r,2),f=i[0],b=i[1],g=localStorage.getItem("user"),k=Object(n.useState)(g?JSON.parse(g):null),E=Object(m.a)(k,2),h=E[0],v=E[1],A=JSON.parse(g),y=oe,C=ne,O=ae,j=ce,N=re,w=le,x=ie,B=se,S=ue;function L(e){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:n=e.sent,c([].concat(Object(l.a)(a),[n]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(s.a.mark((function e(t){var n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,console.log("collectionId##",n),o=Object(l.a)(a).filter((function(e){return e._id!==n})),c(o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(s.a.mark((function e(t){var n,o,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("about to call updateCollection",t),e.next=3,w(t);case 3:n=e.sent,o=Object(l.a)(a),r=o.find((function(e){return e._id===t._id})),Object.assign(r,n),c(o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return V.apply(this,arguments)}function V(){return(V=Object(u.a)(s.a.mark((function e(t,n){var o,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("app.add to collection",t,n),e.next=3,y(t,n);case 3:o=e.sent,r=Object(l.a)(a),i=r.find((function(e){return e._id===t})),console.log("collectionToUpdate",i),console.log("newCollections",r),console.log("collectionId",t),Object.assign(i,o),c(r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(s.a.mark((function e(t,n){var o,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("app.remove from collection",t,n),e.next=3,j(t,n);case 3:o=e.sent,r=Object(l.a)(a),i=r.find((function(e){return e._id===t})),Object.assign(i,o),c(r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:a=e.sent,n=[].concat(Object(l.a)(f),[a]),b(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(s.a.mark((function e(t){var a,n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:a=e.sent,n=Object(l.a)(f),o=n.find((function(e){return e.key===t.key})),Object.assign(o,a),b(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(e,t){var a=e.find((function(e){return e.key===t.key}));a?(console.log("!ratedBook found",a),t.rate=a.rate):(console.log("!serverRateBooks",e),console.log("!book",t))},X=function(e,t){console.log("!!serverCollections",e),e.forEach((function(e){console.log("!about to try add rating to collection,",e.collectionName,e.books),e.books.forEach((function(e){return q(t,e)}))}))};if(Object(n.useEffect)((function(){Object(u.a)(s.a.mark((function e(){var t,a,n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([N(),x()]);case 2:t=e.sent,a=Object(m.a)(t,2),n=a[0],o=a[1],X(n,o),b(o),c(n);case 9:case"end":return e.stop()}}),e)})))()}),[]),!a||!f)return"Loading";var G=function(e){console.log("ONLOGIN,",e),v(e),localStorage.setItem("user",JSON.stringify(e))},Q=window.location.href,Z=a.find((function(e){return"likes"===e._id}));return console.log("window.location.href,",Q),o.a.createElement("div",{className:d.app},o.a.createElement(R,{collections:a,user:h,userName:A}),o.a.createElement("main",null,o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/search",render:function(e){return o.a.createElement(J,Object.assign({},e,{collections:a,removeFromCollection:H,addToCollection:D,addRateBook:M,updateBookRate:_,ratedBooks:f,tryRateBook:q}))}}),o.a.createElement(p.a,{exact:!0,path:"/collections",render:function(e){return o.a.createElement(I,Object.assign({},e,{collections:a,addNewCollection:L,deleteCollection:F,removeFromCollection:H,addToCollection:D,updateCollection:P,addRateBook:M,updateBookRate:_,ratedBooks:f}))}}),o.a.createElement(p.a,{exact:!0,path:"/booksILiked",render:function(e){return o.a.createElement(ve,Object.assign({},e,{collection:Z,collections:a,removeFromCollection:H,addToCollection:D,addRateBook:M,updateBookRate:_,ratedBooks:f}))}}),o.a.createElement(p.a,{exact:!0,path:"/myRatings",render:function(e){return o.a.createElement(Ce,Object.assign({},e,{ratedBooks:f,addRateBook:M,updateBookRate:_,collection:Z,collections:a,removeFromCollection:H,addToCollection:D}))}}),o.a.createElement(p.a,{exact:!0,path:"/signIn",render:function(){return o.a.createElement(Re,{user:h,onLogin:G})}}),o.a.createElement(p.a,{path:"/signUp",render:function(){return o.a.createElement(Be,{user:h,onLogin:G})}}),o.a.createElement(p.a,{path:"/",render:function(){return o.a.createElement(ke,null)}}))))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w.a,null,o.a.createElement(Ie,null))),document.getElementById("root"))},27:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAP2SURBVFiFxZddTBxVFMd/984MH8uXLRSQdLcUiqF1u6WpBaKhsTaCCdU0pI1pTGxaE+NHjKbxRaNvVeOTD0aN8cWYaKJNY2JLbGtDk9pu/UobEBOxbcAiSEAoWyiwy+69Piw7Ap1hdkHrP5nZPff+zzn/uffMvXcEDoiOj3+JEHuc+uYwBpxIWNart27pchVVn8fiokprhJtDlqmHy/0FZYvbHR2ikcgN4K4lBKTQPzIuK5QShhdRCvTayny5uN1MI8lS8Cvl+tBpwVPAwMBNvj3Xh1IaIQQNjX6qqlY5cvt6Bwlf6EIDUgiamupYG7ht1DMT0HG2l/bjv9p2JDLDM8/WO3JPnbxIx5kfbTsWm+XAwd1LC3h624fWSKl4RWu9R0ARwNT0bKEv1wKgrW0TtfcUk1AaQwruDbo/0f4nHqFuay1aK0xDEgzV2H1aIx6473AMQAgRt0xfOD9mPGaOrBFvonlZzKtHrf8JmuezqKouJpFQSCnw+SxXAYWFeVRXV6CUQpoGOTlZC/qViqWcrUQiuovswg4TeFKaBjteayW/rDDZmztrOx079gtHv+i27eaWDRw6tM1RwCcfn6D9+Hnbbtv7EI/vb04aAtreejf5V8ZpP/I6scmp7SZQmlOUaydfjJqaYjaHytA6WVh1W+52HYHajZVc/30IACklwc0bHHlamRSUrWFkold6FmEoVE4oVO5FA6C+IUh9QzAtbgqeAnp6/uLUyStzryHs3FlFaIuzoO6uq5z55ge01khD0tzSyMZN61cm4PKlQcLh67ZdkJ/tKuD777q5GO6y7dLS1SsXsG9fkMb7A6iERhqCgL/IlXvg4G52PVyPUhrDlAQC3lPnKcAwJZXr0tkWwLRMKtdXpMVN4bbNAUBpp9b/Bo4jcHnaoMR0V2ECFVmK7Lm1S0iYUWLBArYYQ5POG6ajgGtRybWoezCAohnJo0VxAM4PZvPHzeVtrI5TkA4iCcFoXKAFy04OKzwPnJ4wGfstdyUhlj8CAAmdvP43Af8GJIBKqDueWMWTBWwCzIxP0fNVJzmr8zIOZPqKM/aZGhtltK/fFjALWFe+/jnjQABDw13eJBcIBFJoLi07wgphWDkTEsELwMidTi6kqXxW/vMCoLX1/VVZcWuHlix9hgYmbg68p9H2+jEc/9Pukxi6xCj51DO5Fv2GpT46fe5Ib0ZfFQ1bn9srhTw6v+0n1bmAs077D1/t/OyddGNmtA4IKV704kyLqZcyiZmRAKnldi9OhEl/JjFdp6Dlwbc/yLbynkp9L2i0mD/3KYzd6HXw1vZNCLAs34Wz4TeanPK4bkZCi4CUWZbwqBKlYq4hUj+mqVzPcX8Dm18w4+RTfKsAAAAASUVORK5CYII="},46:function(e,t,a){e.exports={app:"App_app__1qrZr"}},51:function(e,t,a){e.exports=a.p+"static/media/collection_img.fce7f878.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/searchImgPage.37e6d006.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/homePageImage.77d9c1b1.jpg"},56:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHWSURBVEiJpdUxSNVRFMfxz/+FDsqLQmwIHKJFQhp6iYGDi0trolAQTdnqGDhFUJtgo0hb6OgoNLlXNJSDtAQNomMYLXkbvA/vu93/X19eOMM793e+v3sv539eFULQtKqqauMOOrgb0x/wEZ9CCD8bASGEYmAGn3GMUBPHUTNTyymAh7B6BrhktIqhRgNMYq8PcB57mCwaYAT7F4B3Yx8jJYONRLSNeeycA7gTtdtJbqPHAHNZ0XJiPI1FzOJGjNmYm050yxljrtuhwzjINp/VdUVD1z3NGAcYbjnp71G966r+Vzv7PRrZljLn7xj+jxsMxdqUtdS9Qbq2QghH/R4/hPALW1m6UzL40i+8obbTwliWvHYBg7x2rOXk60vXrQsY5LV7Lexmyamqqgb6JceaqSy9WzK4iRf9GuBVrO0xgAn/Ts4/eIn2OdrzMl4XGMeY6Io2Y/INnjj9sg/xDgsF8IO4d5iBu7GZzqLxeOqAh7iHo0S8WDC4XwPuvsB4Pk1XnM6QUdzGcyeDcLBgcKXBYKU0riusRcF7XD/j7asa+Bqqun+0CutR+Bvf8CMtSLSXCvD1XFt3snl8TQoHCrrBZH8XC8WDNDxBC4/wtuYGVdx7jFYd5y/Uu3LRCdNumwAAAABJRU5ErkJggg=="},57:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVEiJ7ZaxTgJBEIa/Ac6gndY2VIaCntbE4mJB6SMYKxPfwIL38BVMLGkIFR0JBbUvYKPVifJbMCQXcguB2+2cZJJ/5y7/t3tze3tIAsiBKVAAqpmFe+XuTR7BNJQ5TksFmJov6YQ08W1O2o4VsHTdAprHEhqB+puktqQ2MDzWfBcgWrQC9XMz67u+rAMI9SBahFYwBp5cPwAD4NbHV0APmAAXwD1wvQtS9f6+SsJ34jPwvhlvJ+s+vgR8VLvJklbAI/BZdf1ggJllZjYys4WZdRzyBcyjAFg/7xugC9yV6h+xAGclfbrv5uQb7R+wNw75XBelSWWuf4Ef1xkVE05+4DSAWSJzNt5pD/3Uvy1/lczHMk5bNegAAAAASUVORK5CYII="},58:function(e,t,a){e.exports=a.p+"static/media/liked.037658bb.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/ratings.17362aaa.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/signIn_img.2f8118ed.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/signUp.33bbc164.jpg"},64:function(e,t,a){e.exports=a(108)},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.3cfe867c.chunk.js.map