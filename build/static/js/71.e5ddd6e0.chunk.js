(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[71],{562:function(e,t,a){"use strict";function l(e){var t,a,c="";if("string"===typeof e||"number"===typeof e)c+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=l(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=l(e))&&(c&&(c+=" "),c+=t);return c}},690:function(e,t,a){"use strict";a.r(t);var l=a(104),c=a(105),n=a(106),r=a(107),s=a(108),i=a(0),o=a.n(i),m=a(6),E=a(3),u=a(550),g=a(551),p=a(596),b=a(55),S=(a(712),a(713),a(617)),f=a.n(S),d=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault(),b.a.post("/admin/moRecharge/",n.state).then((function(e){console.log(e.data),console.log(e.data.STATUSMSG),"Failed"!==e.data.STATUSMSG&&"Failed"!=e.data.STATUSMSG?f()("Success!","Recharge SuccessFull!","success"):f()("Error!","Recharge UnsuccssFull!","error")})).catch((function(e){console.log(e.response)}))},n.state={code:"",re_type:"",allService:[],MobileNo:8121787777,APIKey:"vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",REQTYPE:"RECH",SERCODE:"",CUSTNO:"",REFMOBILENO:"",AMT:"",STV:"",RESPTYPE:"",serviceR:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/admin/getOperators").then((function(t){console.log(t.data.data),e.setState({serviceR:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},o.a.createElement("div",{className:"category-home"},o.a.createElement("section",{className:"st-p"},o.a.createElement(u.a,null,o.a.createElement("div",{className:"bx1"},o.a.createElement(g.a,null,o.a.createElement(p.a,{md:"12"},o.a.createElement("ul",{className:"st-2"},o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/electricity"},E.string.electricity,o.a.createElement("i",{className:"pe-7s-light circle-1"}),o.a.createElement("p",null,"Electricity"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-safe circle-1"}),o.a.createElement("p",null,"Gas"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-paint-bucket circle-1"}),o.a.createElement("p",null,"Water"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-global circle-1"}),o.a.createElement("p",null,"Broadband Bill"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/mobilerecharge"},E.string.mobilerecharge,o.a.createElement("i",{className:"pe-7s-phone circle-1 "}),o.a.createElement("p",null,"Mobile Recharge"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/dthbill"},E.string.dthbill,o.a.createElement("i",{className:"pe-7s-airplay circle-1"}),o.a.createElement("p",null,"DTH"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-clock circle-1"}),o.a.createElement("p",null,"Airtime"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-ticket circle-1"}),o.a.createElement("p",null,"Train Ticket"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/ComingSoon"},E.string.ComingSoon,o.a.createElement("i",{className:"pe-7s-ticket circle-1"}),o.a.createElement("p",null,"Bus Ticket"))),o.a.createElement("li",{className:"st-1"},o.a.createElement(m.b,{to:"/soxiservice"},E.string.soxiservice,o.a.createElement("i",{className:"pe-7s-more circle-1"}),o.a.createElement("p",null," More")))))))))))}}]),a}(o.a.Component);t.default=d}}]);
//# sourceMappingURL=71.e5ddd6e0.chunk.js.map