(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[54],{615:function(e,a,t){"use strict";var s=t(7),n=t(12),r=t(0),l=t.n(r),c=t(3),i=t.n(c),o=t(77),m=t.n(o),u=t(55),d=["className","cssModule","widths","tag"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),b={tag:u.c,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,i=Object(n.a)(e,d),o=[];r.forEach((function(a,s){var n=e[a];if(delete i[a],n||""===n){var r=!s;if(Object(u.a)(n)){var l,c=r?"-":"-"+a+"-",d=h(r,a,n.size);o.push(Object(u.b)(m()(((l={})[d]=n.size||""===n.size,l["order"+c+n.order]=n.order||0===n.order,l["offset"+c+n.offset]=n.offset||0===n.offset,l)),t))}else{var p=h(r,a,n);o.push(p)}}})),o.length||o.push("col");var p=Object(u.b)(m()(a,o),t);return l.a.createElement(c,Object(s.a)({},i,{className:p}))};E.propTypes=b,E.defaultProps=g,a.a=E},618:function(e,a,t){"use strict";var s=t(7),n=t(12),r=t(186),l=t(16),c=t(0),i=t.n(c),o=t(3),m=t.n(o),u=t(77),d=t.n(u),p=t(55),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,o=Object(n.a)(e,f),m=Object(p.b)(d()(a,!!r&&"form-inline"),t);return i.a.createElement(l,Object(s.a)({},o,{ref:c,className:m}))},a}(c.Component);g.propTypes=b,g.defaultProps={tag:"form"},a.a=g},644:function(e,a,t){"use strict";var s=t(7),n=t(12),r=t(186),l=t(16),c=t(0),i=t.n(c),o=t(3),m=t.n(o),u=t(77),d=t.n(u),p=t(55),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,g=e.innerRef,h=Object(n.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,N=new RegExp("\\D","g"),v=m||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",v=m||"input"):"file"===r?O+="-file":"range"===r?O+="-range":E&&(O=u?null:"form-check-input"),h.size&&N.test(h.size)&&(Object(p.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(p.b)(d()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===v||m&&"function"===typeof m)&&(h.type=r),h.children&&!b&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.d)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(v,Object(s.a)({},h,{ref:g,className:j,"aria-invalid":o}))},a}(i.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g},685:function(e,a,t){"use strict";var s=t(7),n=t(12),r=t(0),l=t.n(r),c=t(3),i=t.n(c),o=t(77),m=t.n(o),u=t(55),d=["className","cssModule","tag","size"],p={tag:u.c,size:i.a.string,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.size,i=Object(n.a)(e,d),o=Object(u.b)(m()(a,"input-group",c?"input-group-"+c:null),t);return l.a.createElement(r,Object(s.a)({},i,{className:o}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},839:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(185),l=t(187),c=t.n(l),i=t(550),o=t(551),m=t(615),u=t(618),d=t(644),p=t(685);t(194);a.default=function(e){e.data,e.spaceBottomClass;return n.a.createElement(r.a,null,n.a.createElement(i.a,{fluid:!0,className:"mb-4"},n.a.createElement(o.a,{className:"mb-5"},n.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(c.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},n.a.createElement("div",{className:""},n.a.createElement("h1",{className:"text-light text-center"},"Internet Recharge"))))),n.a.createElement("section",{style:{margin:"70px 0px"}},n.a.createElement(i.a,null,n.a.createElement(o.a,null,n.a.createElement(m.a,{md:"6"},n.a.createElement(o.a,null,n.a.createElement("h4",{className:"sr-h4"},"Pay Internet Recharge"),n.a.createElement("div",{className:"sr-1"},n.a.createElement(u.a,null,n.a.createElement(m.a,{md:"12"},n.a.createElement(d.a,{type:"text",className:"form-control",placeholder:"Select Operator"})),n.a.createElement("br",null),n.a.createElement(m.a,{md:"12"},n.a.createElement(d.a,{type:"text",className:"form-control",placeholder:"Registered Mobile No./Subscriber ID/Customer Id"})),n.a.createElement("small",{style:{color:"red"}},"(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(m.a,{md:"12"},n.a.createElement(p.a,null,n.a.createElement("span",{className:"sr-2"},"Rs."),n.a.createElement(d.a,{className:"form-control",placeholder:"Amount"}))),n.a.createElement("br",null),n.a.createElement("button",{className:"sr-btn"},"Proceed to Recharge"))))),n.a.createElement(m.a,{md:"6"},n.a.createElement("div",{className:"sr-3"},n.a.createElement("h4",{className:"sr-h"},"Consumer Details"),n.a.createElement("ul",{className:"sr-ul"},n.a.createElement("li",{className:"sr-li"},"ID: ",n.a.createElement("span",{className:"sr-span"},"44545")),n.a.createElement("li",{className:"sr-li"},"Operator: ",n.a.createElement("span",{className:"sr-span"},"Vodafone")),n.a.createElement("li",{className:"sr-li"},"Amount: ",n.a.createElement("span",{className:"sr-span"},"100rs")),n.a.createElement("li",{className:"sr-li dr"},"Amount: ",n.a.createElement("span",{className:"sr-span"},"Rs:100"))),n.a.createElement("div",{className:"sr-div"},n.a.createElement("button",{className:"sr-btn1"},"Make Payment"))))))))}}}]);
//# sourceMappingURL=54.81b5a490.chunk.js.map