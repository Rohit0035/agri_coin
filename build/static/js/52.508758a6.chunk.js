(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[52],{214:function(e,a,t){"use strict";var n=t(3),s=t(4),r=t(0),l=t.n(r),c=t(1),i=t.n(c),o=t(22),m=t.n(o),u=t(18),p=["className","cssModule","widths","tag"],f=i.a.oneOfType([i.a.number,i.a.string]),d=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),b={tag:u.c,xs:d,sm:d,md:d,lg:d,xl:d,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,i=Object(s.a)(e,p),o=[];r.forEach((function(a,n){var s=e[a];if(delete i[a],s||""===s){var r=!n;if(Object(u.a)(s)){var l,c=r?"-":"-"+a+"-",p=E(r,a,s.size);o.push(Object(u.b)(m()(((l={})[p]=s.size||""===s.size,l["order"+c+s.order]=s.order||0===s.order,l["offset"+c+s.offset]=s.offset||0===s.offset,l)),t))}else{var f=E(r,a,s);o.push(f)}}})),o.length||o.push("col");var f=Object(u.b)(m()(a,o),t);return l.a.createElement(c,Object(n.a)({},i,{className:f}))};h.propTypes=b,h.defaultProps=g,a.a=h},218:function(e,a,t){"use strict";var n=t(3),s=t(4),r=t(57),l=t(6),c=t(0),i=t.n(c),o=t(1),m=t.n(o),u=t(22),p=t.n(u),f=t(18),d=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:f.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,o=Object(s.a)(e,d),m=Object(f.b)(p()(a,!!r&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},o,{ref:c,className:m}))},a}(c.Component);g.propTypes=b,g.defaultProps={tag:"form"},a.a=g},240:function(e,a,t){"use strict";var n=t(3),s=t(4),r=t(57),l=t(6),c=t(0),i=t.n(c),o=t(1),m=t.n(o),u=t(22),p=t.n(u),f=t(18),d=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,g=e.innerRef,E=Object(s.a)(e,d),h=["radio","checkbox"].indexOf(r)>-1,N=new RegExp("\\D","g"),v=m||("select"===r||"textarea"===r?r:"input"),y="form-control";b?(y+="-plaintext",v=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":h&&(y=u?null:"form-check-input"),E.size&&N.test(E.size)&&(Object(f.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=E.size,delete E.size);var j=Object(f.b)(p()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===v||m&&"function"===typeof m)&&(E.type=r),E.children&&!b&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(f.d)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),i.a.createElement(v,Object(n.a)({},E,{ref:g,className:j,"aria-invalid":o}))},a}(i.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g},280:function(e,a,t){"use strict";var n=t(3),s=t(4),r=t(0),l=t.n(r),c=t(1),i=t.n(c),o=t(22),m=t.n(o),u=t(18),p=["className","cssModule","tag","size"],f={tag:u.c,size:i.a.string,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.size,i=Object(s.a)(e,p),o=Object(u.b)(m()(a,"input-group",c?"input-group-"+c:null),t);return l.a.createElement(r,Object(n.a)({},i,{className:o}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},481:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(55),l=t(63),c=t.n(l),i=t(161),o=t(162),m=t(214),u=t(218),p=t(240),f=t(280);a.default=function(e){e.data,e.spaceBottomClass;return s.a.createElement(r.a,null,s.a.createElement(i.a,{fluid:!0,className:"mb-4"},s.a.createElement(o.a,{className:"mb-5"},s.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(c.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},s.a.createElement("div",{className:""},s.a.createElement("h1",{className:"text-light text-center"},"Electricity Bills"))))),s.a.createElement("section",{style:{margin:"70px 0px"}},s.a.createElement(i.a,null,s.a.createElement(o.a,null,s.a.createElement(m.a,{md:"6"},s.a.createElement(o.a,null,s.a.createElement("h4",{className:"sr-h4"},"Pay For Electricity"),s.a.createElement("div",{className:"sr-1"},s.a.createElement(u.a,null,s.a.createElement(m.a,{md:"12"},s.a.createElement("select",{className:"form-control"},s.a.createElement("option",null,"Select State"),s.a.createElement("option",null,"MP"),s.a.createElement("option",null,"UP"))),s.a.createElement("br",null),s.a.createElement(m.a,{md:"12"},s.a.createElement(p.a,{type:"text",className:"form-control",placeholder:"Consumer Number"})),s.a.createElement("small",{style:{color:"red"}},"(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(m.a,{md:"12"},s.a.createElement(f.a,null,s.a.createElement("span",{className:"sr-2"},"Rs."),s.a.createElement(p.a,{className:"form-control",placeholder:"Amount"})))),s.a.createElement("br",null),s.a.createElement("button",{className:"sr-btn"},"Proceed")))),s.a.createElement(m.a,{md:"6"},s.a.createElement("div",{className:"sr-3"},s.a.createElement("h4",{className:"sr-h"},"Consumer Details"),s.a.createElement("ul",{className:"sr-ul"},s.a.createElement("li",{className:"sr-li"},"Consumer Number: ",s.a.createElement("span",{className:"sr-span"},"44545")),s.a.createElement("li",{className:"sr-li"},"State: ",s.a.createElement("span",{className:"sr-span"},"MP")),s.a.createElement("li",{className:"sr-li"},"Amount: ",s.a.createElement("span",{className:"sr-span"},"100rs")),s.a.createElement("li",{className:"sr-li dr"},"Amount: ",s.a.createElement("span",{className:"sr-span"},"Rs:100"))),s.a.createElement("div",{className:"sr-div"},s.a.createElement("button",{className:"sr-btn1"},"Make Payment"))))))))}}}]);
//# sourceMappingURL=52.508758a6.chunk.js.map