(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[56],{596:function(e,t,a){"use strict";var n=a(7),s=a(12),r=a(0),i=a.n(r),o=a(3),c=a.n(o),l=a(78),u=a.n(l),f=a(54),d=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),m={tag:f.c,xs:g,sm:g,md:g,lg:g,xl:g,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},A=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,c=Object(s.a)(e,d),l=[];r.forEach((function(t,n){var s=e[t];if(delete c[t],s||""===s){var r=!n;if(Object(f.a)(s)){var i,o=r?"-":"-"+t+"-",d=b(r,t,s.size);l.push(Object(f.b)(u()(((i={})[d]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i)),a))}else{var p=b(r,t,s);l.push(p)}}})),l.length||l.push("col");var p=Object(f.b)(u()(t,l),a);return i.a.createElement(o,Object(n.a)({},c,{className:p}))};A.propTypes=m,A.defaultProps=h,t.a=A},610:function(e,t,a){"use strict";var n=a(7),s=a(12),r=a(187),i=a(16),o=a(0),c=a.n(o),l=a(3),u=a.n(l),f=a(78),d=a.n(f),p=a(54),g=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,i=e.tag,o=e.innerRef,l=Object(s.a)(e,g),u=Object(p.b)(d()(t,!!r&&"form-inline"),a);return c.a.createElement(i,Object(n.a)({},l,{ref:o,className:u}))},t}(o.Component);h.propTypes=m,h.defaultProps={tag:"form"},t.a=h},630:function(e,t,a){"use strict";var n=a(7),s=a(12),r=a(187),i=a(16),o=a(0),c=a.n(o),l=a(3),u=a.n(l),f=a(78),d=a.n(f),p=a(54),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,i=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,h=e.innerRef,b=Object(s.a)(e,g),A=["radio","checkbox"].indexOf(r)>-1,w=new RegExp("\\D","g"),v=u||("select"===r||"textarea"===r?r:"input"),I="form-control";m?(I+="-plaintext",v=u||"input"):"file"===r?I+="-file":"range"===r?I+="-range":A&&(I=f?null:"form-check-input"),b.size&&w.test(b.size)&&(Object(p.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var O=Object(p.b)(d()(t,l&&"is-invalid",o&&"is-valid",!!i&&"form-control-"+i,I),a);return("input"===v||u&&"function"===typeof u)&&(b.type=r),b.children&&!m&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.d)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(v,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":l}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},663:function(e,t){e.exports="data:image/png;base64,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"},777:function(e,t,a){e.exports=a.p+"static/media/passfor.9d9d65e2.png"},829:function(e,t,a){"use strict";a.r(t);var n=a(104),s=a(105),r=a(106),i=a(107),o=a(108),c=a(0),l=a.n(c),u=a(550),f=a(551),d=a(596),p=a(610),g=a(630),m=a(110),h=a.n(m),b=a(617),A=a.n(b),w=a(663),v=a.n(w),I=a(777),O=a.n(I),y=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).submitHandler=function(e){e.preventDefault(),h.a.post("http://35.154.134.118:/api/user/forgetpass_user",r.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){localStorage.removeItem("auth-token"),console.log(e.data.STATUSMSG),"success"==e.data.msg&&"success"===e.data.msg?(A()("Success!"," Password Change Successfully ","success"),r.props.history.push("/login-register")):A()("Error!","Try Again","error")})).catch((function(e){console.log("error"==e.response.msg&&"error"===e.response.msg),A()("Error!","Password not matched","error")}))},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.handlechange=function(e){e.preventDefault(),r.setState(Object(n.a)({},e.target.name,e.target.value))},r.state={password:"",cnfrmPassword:""},r}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{style:{margin:"70px 0px"}},l.a.createElement(u.a,null,l.a.createElement(f.a,null,l.a.createElement(d.a,{md:"12"},l.a.createElement("div",{className:"resetpass"},l.a.createElement("div",{className:"headbox"},l.a.createElement("img",{src:v.a,style:{width:200}})),l.a.createElement("img",{src:O.a,style:{width:200}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Forgot Password"),l.a.createElement("br",null),l.a.createElement(p.a,{onSubmit:this.submitHandler},l.a.createElement(g.a,{type:"Password",placeholder:"New Password",name:"password",required:!0,value:this.state.password,onChange:this.changeHandler}),l.a.createElement("br",null),l.a.createElement(g.a,{type:"Password",placeholder:"Confirm Password",required:!0,name:"cnfrmPassword",value:this.state.cnfrmPassword,onChange:this.changeHandler}),l.a.createElement("br",null),l.a.createElement("div",{className:"login-toggle-btn "},l.a.createElement("button",{type:"submit",className:"sr-btn1 "},"Submit"))))))))}}]),a}(l.a.Component);t.default=y}}]);
//# sourceMappingURL=56.a92b519c.chunk.js.map