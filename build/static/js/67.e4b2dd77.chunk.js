(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[67,76],{606:function(e,t,a){"use strict";var l=a(7),n=a(12),s=a(0),c=a.n(s),r=a(3),o=a.n(r),m=a(77),u=a.n(m),i=a(55),d=["className","cssModule","widths","tag"],p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),b={tag:i.c,xs:h,sm:h,md:h,lg:h,xl:h,className:o.a.string,cssModule:o.a.object,widths:o.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,s=e.widths,r=e.tag,o=Object(n.a)(e,d),m=[];s.forEach((function(t,l){var n=e[t];if(delete o[t],n||""===n){var s=!l;if(Object(i.a)(n)){var c,r=s?"-":"-"+t+"-",d=E(s,t,n.size);m.push(Object(i.b)(u()(((c={})[d]=n.size||""===n.size,c["order"+r+n.order]=n.order||0===n.order,c["offset"+r+n.offset]=n.offset||0===n.offset,c)),a))}else{var p=E(s,t,n);m.push(p)}}})),m.length||m.push("col");var p=Object(i.b)(u()(t,m),a);return c.a.createElement(r,Object(l.a)({},o,{className:p}))};g.propTypes=b,g.defaultProps=f,t.a=g},733:function(e,t,a){"use strict";a.r(t);var l=a(105),n=a(106),s=a(107),c=a(108),r=a(0),o=a.n(r),m=a(549),u=a(550),i=a(710),d=a.n(i),p=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){this.props.table;return o.a.createElement("section",{style:{margin:"30px 0px"}},o.a.createElement(m.a,null,o.a.createElement(u.a,null,o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"table-content table-responsive cart-table-content usert-list"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Wallet ID"),o.a.createElement("th",null,"Credited Amount "),o.a.createElement("th",null,"Received Crypto"),o.a.createElement("th",null,"Date"))),this.props.table.length>0?this.props.table.map((function(e){var t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{className:"product-thumbnail"},e._id),o.a.createElement("td",{className:"product-thumbnail"},e.add_amount),o.a.createElement("td",{className:"product-thumbnail"},null===(t=e.walletId)||void 0===t?void 0:t.reqamount),o.a.createElement("td",{className:"product-thumbnail"},d()(e.createdAt).format("ll"))))})):null))))))}}]),a}(o.a.Component);t.default=p},837:function(e,t,a){"use strict";a.r(t);var l=a(104),n=a(105),s=a(106),c=a(107),r=a(108),o=a(0),m=a.n(o),u=a(185),i=a(187),d=a.n(i),p=a(549),h=a(550),b=a(606),f=a(733),E=a(6),g=a(48),v=a.n(g),N=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.state={walletAmount:0,responseData:{},table:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;e=JSON.parse(localStorage.getItem("userInfo")),console.log("@@@@@",e),null===e||(v.a.get("http://35.154.134.118/api/admin/getone/",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log("wallet@2getone2@@@@@@@",e.data),t.setState({responseData:e.data.data}),t.setState({walletAmount:e.data.data.amount}),t.setState({walletId:e.data.data.walletId})})).catch((function(e){console.log(e)})),v.a.get("http://35.154.134.118/api/admin/usersuccess_depositelist/"+e.walletId).then((function(e){console.log("@@@@transaction API",e.data.data),t.setState({table:e.data.data})})).catch((function(e){console.log(e.response)})))}},{key:"render",value:function(){var e=this.state.table;return console.log("222@@",this.state.table),m.a.createElement(u.a,null,m.a.createElement(p.a,{fluid:!0,className:"mb-4"},m.a.createElement(h.a,{className:"mb-5"},m.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(d.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},m.a.createElement("div",{className:""},m.a.createElement("h1",{className:"text-light text-center"},"Wallet"))))),m.a.createElement("section",{style:{margin:"70px 0px"}},m.a.createElement(p.a,null,m.a.createElement(h.a,null,m.a.createElement(b.a,{md:"6"},m.a.createElement("div",{className:"sr-3"},m.a.createElement("h4",{className:"sr-h"},"Wallet Details "),m.a.createElement("ul",{className:"sr-ul"},m.a.createElement("li",{className:"sr-li dr"},"Available Wallet Balance : ",m.a.createElement("span",{className:"sr-span"},"INR:",this.state.walletAmount))),m.a.createElement("div",{className:"sr-div"},m.a.createElement(E.b,{to:"/depositform"},m.a.createElement("button",{className:"sr-btn1"},"Deposit to Wallet"))))),m.a.createElement(b.a,{md:"6"},m.a.createElement("div",{className:"sr-3"},m.a.createElement("h4",{className:"sr-h"},"Deposit Transaction "),m.a.createElement(f.default,{table:e.length>0?e:[]})))))))}}]),a}(m.a.Component);t.default=N}}]);
//# sourceMappingURL=67.e4b2dd77.chunk.js.map