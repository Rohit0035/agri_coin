(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[74],{556:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(6),c=t(185);a.a=function(){return l.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"breadcrumb-content text-center"},l.a.createElement(c.Breadcrumbs,{separator:l.a.createElement("span",null,"/"),item:s.c,finalItem:"span"}))))}},827:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(104),l=t(105),s=t(106),c=t(107),r=t(108),o=t(0),m=t.n(o),i=t(559),d=t.n(i),u=t(185),p=t(789),g=t(186),h=t(556),E=t(610),b=t(55),f=t(617),v=t.n(f),N=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).submitHandler=function(e){e.preventDefault(),b.a.post("/user/editcustomer",s.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data),console.log(e.data.STATUSMSG),"Failed"!==e.data.STATUSMSG&&"Failed"!==e.data.STATUSMSG?v()("Success!","Account  Updated ","success"):v()("Error!","Account Not Updated","error")})).catch((function(e){console.log(e.response)}))},s.addAddress=function(e){e.preventDefault(),console.log(s.state),b.a.post("/user/addcus_address",s.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},s.editPassword=function(e){e.preventDefault(),console.log(s.state),b.a.post("/user/updatePassword",s.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.STATUSMSG),"success"==e.data.msg&&"success"===e.data.msg?(v()("Success!","Password Updated Successfully.. ","success"),s.props.history.push("/")):v()("Error!","Password Not Updated","error")})).catch((function(e){console.log("error"==e.response.msg&&"error"===e.response.msg),v()("Error!","Password Not Updated","error")}))},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.state={firstname:"",lastname:"",address:"",locality:"",pincode:"",city:"",state:"",password:"",cnfrmPassword:"",oldPassword:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/user/getonecustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({firstname:a.data.data.firstname,lastname:a.data.data.lastname,email:a.data.data.email,mobile:a.data.data.mobile}),console.log(e.state)})).catch((function(e){console.log(e.response)})),b.a.get("/user/viewoneuseraddress",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({address:a.data.data.address,locality:a.data.data.locality,pincode:a.data.data.pincode,city:a.data.data.city,state:a.data.data.state}),console.log(e.state)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null,m.a.createElement(d.a,null,m.a.createElement("title",null,"NEXUS PAY"),m.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),m.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home/ My Account"),m.a.createElement(g.a,{headerTop:"visible"},m.a.createElement(h.a,null),m.a.createElement("div",{className:"myaccount-area pb-80 pt-100"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},m.a.createElement("div",{className:"ml-auto mr-auto col-lg-9"},m.a.createElement("div",{className:"myaccount-wrapper"},m.a.createElement(p.a,{className:"single-my-account mb-20"},m.a.createElement(p.a.Header,{className:"panel-heading"}),m.a.createElement(p.a.Body,null,m.a.createElement(E.a,{onSubmit:this.submitHandler},m.a.createElement("div",{className:"myaccount-info-wrapper"},m.a.createElement("div",{className:"account-info-wrapper"},m.a.createElement("h3",null,"My Account Information")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"First Name"),m.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstname",value:this.state.firstname,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Last Name"),m.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastname",value:this.state.lastname,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Email Address"),m.a.createElement("input",{readOnly:!0,type:"email",placeholder:"Customer Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Mobile Number"),m.a.createElement("input",{type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler})))),m.a.createElement("div",{className:"billing-back-btn"},m.a.createElement("div",{className:"billing-btn"},m.a.createElement("button",{type:"submit"},"Submit"))))))),m.a.createElement(p.a,{className:"single-my-account mb-20"},m.a.createElement(p.a.Body,null,m.a.createElement(E.a,{onSubmit:this.editPassword},m.a.createElement("div",{className:"myaccount-info-wrapper"},m.a.createElement("div",{className:"account-info-wrapper"},m.a.createElement("h3",null,"Change Password")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Old Password"),m.a.createElement("input",{type:"password",required:!0,name:"oldPassword",value:this.state.oldPassword,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"New Password"),m.a.createElement("input",{type:"password",required:!0,name:"password",value:this.state.password,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Confirm Password"),m.a.createElement("input",{type:"password",required:!0,name:"cnfrmPassword",value:this.state.cnfrmPassword,onChange:this.changeHandler})))),m.a.createElement("div",{className:"billing-back-btn"},m.a.createElement("div",{className:"billing-btn"},m.a.createElement("button",{type:"submit"},"Submit"))))))))))))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=74.9c8271be.chunk.js.map