(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[56,62],{615:function(e,a,t){"use strict";var n=t(7),s=t(12),l=t(0),r=t.n(l),c=t(3),i=t.n(c),o=t(77),m=t.n(o),u=t(54),d=["className","cssModule","widths","tag"],f=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),g={tag:u.c,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},p=function(e){var a=e.className,t=e.cssModule,l=e.widths,c=e.tag,i=Object(s.a)(e,d),o=[];l.forEach((function(a,n){var s=e[a];if(delete i[a],s||""===s){var l=!n;if(Object(u.a)(s)){var r,c=l?"-":"-"+a+"-",d=E(l,a,s.size);o.push(Object(u.b)(m()(((r={})[d]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),t))}else{var f=E(l,a,s);o.push(f)}}})),o.length||o.push("col");var f=Object(u.b)(m()(a,o),t);return r.a.createElement(c,Object(n.a)({},i,{className:f}))};p.propTypes=g,p.defaultProps=h,a.a=p},719:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t(40),s=t(0),l=t(872),r=t(874),c=t(878),i=t(877),o=t(873),m=t(875),u=t(859),d=t(876),f=[{id:"id",label:"ID",minWidth:120},{id:"date",label:"Date",minWidth:120},{id:"amount",label:"Amount",minWidth:120,align:"right"},{id:"status",label:"Status",minWidth:120,align:"right"}];function b(e,a,t,n){return{id:e,date:a,amount:t,status:n}}var g=[b("4545","23/03/2022","200","success"),b("4545","24/03/2022","200","success"),b("6766","25/03/2022","200","success"),b("7676","26/03/2022","200","success"),b("8989","27/03/2022","200","success")];function h(){var e=s.useState(0),a=Object(n.a)(e,2),t=a[0],b=a[1],h=s.useState(10),E=Object(n.a)(h,2),p=E[0],v=E[1];return s.createElement(l.a,{sx:{width:"100%",overflow:"hidden"}},s.createElement(o.a,{sx:{maxHeight:440}},s.createElement(r.a,{stickyHeader:!0,"aria-label":"sticky table"},s.createElement(m.a,null,s.createElement(d.a,null,f.map((function(e){return s.createElement(i.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),s.createElement(c.a,null,g.slice(t*p,t*p+p).map((function(e){return s.createElement(d.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},f.map((function(a){var t=e[a.id];return s.createElement(i.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),s.createElement(u.a,{rowsPerPageOptions:[10,25,100],component:"div",count:g.length,rowsPerPage:p,page:t,onPageChange:function(e,a){b(a)},onRowsPerPageChange:function(e){v(+e.target.value),b(0)}}))}},856:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(181),r=t(188),c=t.n(r),i=t(549),o=t(550),m=t(615),u=t(719);a.default=function(e){e.data,e.spaceBottomClass;return s.a.createElement(l.a,null,s.a.createElement(i.a,{fluid:!0,className:"mb-4"},s.a.createElement(o.a,{className:"mb-5"},s.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(c.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},s.a.createElement("div",{className:""},s.a.createElement("h1",{className:"text-light text-center"},"Wallet"))))),s.a.createElement("section",{style:{margin:"70px 0px"}},s.a.createElement(i.a,null,s.a.createElement(o.a,null,s.a.createElement(m.a,{md:"6"},s.a.createElement("div",{className:"sr-3"},s.a.createElement("h4",{className:"sr-h"},"Wallet Details "),s.a.createElement("ul",{className:"sr-ul"},s.a.createElement("li",{className:"sr-li dr"},"Available Balance : ",s.a.createElement("span",{className:"sr-span"},"INR:100"))),s.a.createElement("div",{className:"sr-div"},s.a.createElement("button",{className:"sr-btn1"},"Deposit to Wallet")),s.a.createElement("div",{className:"sr-div"},s.a.createElement("button",{className:"sr-btn1"},"Send Money to Bank")))),s.a.createElement(m.a,{md:"6"},s.a.createElement("div",{className:"sr-3"},s.a.createElement("h4",{className:"sr-h"},"Transaction History "),s.a.createElement(u.default,null)))))))}}}]);
//# sourceMappingURL=56.faa83a9d.chunk.js.map