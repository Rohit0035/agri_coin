(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[60],{595:function(e,t,a){"use strict";var n=a(7),s=a(12),r=a(0),o=a.n(r),i=a(3),c=a.n(i),l=a(78),u=a.n(l),f=a(55),d=["className","cssModule","widths","tag"],b=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),h={tag:f.c,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.widths,i=e.tag,c=Object(s.a)(e,d),l=[];r.forEach((function(t,n){var s=e[t];if(delete c[t],s||""===s){var r=!n;if(Object(f.a)(s)){var o,i=r?"-":"-"+t+"-",d=g(r,t,s.size);l.push(Object(f.b)(u()(((o={})[d]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o)),a))}else{var b=g(r,t,s);l.push(b)}}})),l.length||l.push("col");var b=Object(f.b)(u()(t,l),a);return o.a.createElement(i,Object(n.a)({},c,{className:b}))};v.propTypes=h,v.defaultProps=m,t.a=v},609:function(e,t,a){"use strict";var n=a(7),s=a(12),r=a(186),o=a(16),i=a(0),c=a.n(i),l=a(3),u=a.n(l),f=a(78),d=a.n(f),b=a(55),p=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:b.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,o=e.tag,i=e.innerRef,l=Object(s.a)(e,p),u=Object(b.b)(d()(t,!!r&&"form-inline"),a);return c.a.createElement(o,Object(n.a)({},l,{ref:i,className:u}))},t}(i.Component);m.propTypes=h,m.defaultProps={tag:"form"},t.a=m},619:function(e,t,a){"use strict";var n=a(7),s=a(12),r=a(186),o=a(16),i=a(0),c=a.n(i),l=a(3),u=a.n(l),f=a(78),d=a.n(f),b=a(55),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,o=e.className,i=e.close,l=e.cssModule,u=e.color,f=e.outline,h=e.size,m=e.tag,g=e.innerRef,v=Object(s.a)(e,p);i&&"undefined"===typeof v.children&&(v.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(f?"-outline":"")+"-"+u,j=Object(b.b)(d()(o,{close:i},i||"btn",i||O,!!h&&"btn-"+h,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);v.href&&"button"===m&&(m="a");var y=i?"Close":null;return c.a.createElement(m,Object(n.a)({type:"button"===m&&v.onClick?"button":void 0},v,{className:j,ref:g,onClick:this.onClick,"aria-label":a||y}))},t}(c.a.Component);m.propTypes=h,m.defaultProps={color:"secondary",tag:"button"},t.a=m},629:function(e,t,a){"use strict";var n=a(7),s=a(12),r=a(186),o=a(16),i=a(0),c=a.n(i),l=a(3),u=a.n(l),f=a(78),d=a.n(f),b=a(55),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:b.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,o=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,f=e.addon,h=e.plaintext,m=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),j=u||("select"===r||"textarea"===r?r:"input"),y="form-control";h?(y+="-plaintext",j=u||"input"):"file"===r?y+="-file":"range"===r?y+="-range":v&&(y=f?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(b.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var E=Object(b.b)(d()(t,l&&"is-invalid",i&&"is-valid",!!o&&"form-control-"+o,y),a);return("input"===j||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof j&&"select"!==j&&(Object(b.d)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(j,Object(n.a)({},g,{ref:m,className:E,"aria-invalid":l}))},t}(c.a.Component);m.propTypes=h,m.defaultProps={type:"text"},t.a=m},825:function(e,t,a){"use strict";a.r(t);var n=a(104),s=a(105),r=a(106),o=a(107),i=a(108),c=a(0),l=a.n(c),u=a(185),f=a(549),d=a(550),b=a(595),p=a(609),h=a(629),m=a(619),g=a(45),v=a.n(g),O=a(616),j=a.n(O),y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).handlechange=function(e){e.preventDefault(),r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),v.a.post("http://35.154.134.118:/api/user/verifycode",r.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.STATUSMSG),"Failed"!==e.data.STATUSMSG&&"Failed"!==e.data.STATUSMSG?(j()("Success!"," Pin Submitted ","success"),r.props.history.push("/ForgotPassword")):j()("Error!","Try Again","error")})).catch((function(e){console.log(e.response)}))},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.state={customerId:""},r}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("section",{style:{margin:"70px 0px"}},l.a.createElement(f.a,null,l.a.createElement(d.a,null,l.a.createElement(b.a,{md:"12"},l.a.createElement("div",{className:"resetpass"},l.a.createElement("h3",null,"Forgot Password Pin"),l.a.createElement("br",null),l.a.createElement(p.a,{onSubmit:this.submitHandler},l.a.createElement(h.a,{type:"number",required:!0,placeholder:"Enter Your Pin",name:"customerId",value:this.state.customerId,onChange:this.handlechange}),l.a.createElement("br",null),l.a.createElement("div",{className:"login-toggle-btn "},l.a.createElement(m.a,{type:"submit",className:"sr-btn1 "},"Submit")))))))))}}]),a}(l.a.Component);t.default=y}}]);
//# sourceMappingURL=60.e67f0a75.chunk.js.map