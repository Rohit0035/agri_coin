(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[36],{608:function(e,t,a){"use strict";var n=a(7),o=a(12),r=a(0),l=a.n(r),c=a(3),i=a.n(c),s=a(77),u=a.n(s),p=a(55),f=["className","cssModule","widths","tag"],d=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:d,offset:d})]),b={tag:p.c,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.widths,c=e.tag,i=Object(o.a)(e,f),s=[];r.forEach((function(t,n){var o=e[t];if(delete i[t],o||""===o){var r=!n;if(Object(p.a)(o)){var l,c=r?"-":"-"+t+"-",f=y(r,t,o.size);s.push(Object(p.b)(u()(((l={})[f]=o.size||""===o.size,l["order"+c+o.order]=o.order||0===o.order,l["offset"+c+o.offset]=o.offset||0===o.offset,l)),a))}else{var d=y(r,t,o);s.push(d)}}})),s.length||s.push("col");var d=Object(p.b)(u()(t,s),a);return l.a.createElement(c,Object(n.a)({},i,{className:d}))};h.propTypes=b,h.defaultProps=g,t.a=h},617:function(e,t,a){"use strict";var n=a(7),o=a(12),r=a(186),l=a(16),c=a(0),i=a.n(c),s=a(3),u=a.n(s),p=a(77),f=a.n(p),d=a(55),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:d.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,s=Object(o.a)(e,m),u=Object(d.b)(f()(t,!!r&&"form-inline"),a);return i.a.createElement(l,Object(n.a)({},s,{ref:c,className:u}))},t}(c.Component);g.propTypes=b,g.defaultProps={tag:"form"},t.a=g},627:function(e,t,a){"use strict";var n=a(7),o=a(12),r=a(186),l=a(16),c=a(0),i=a.n(c),s=a(3),u=a.n(s),p=a(77),f=a.n(p),d=a(55),m=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,l=e.className,c=e.close,s=e.cssModule,u=e.color,p=e.outline,b=e.size,g=e.tag,y=e.innerRef,h=Object(o.a)(e,m);c&&"undefined"===typeof h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+u,O=Object(d.b)(f()(l,{close:c},c||"btn",c||v,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),s);h.href&&"button"===g&&(g="a");var w=c?"Close":null;return i.a.createElement(g,Object(n.a)({type:"button"===g&&h.onClick?"button":void 0},h,{className:O,ref:y,onClick:this.onClick,"aria-label":a||w}))},t}(i.a.Component);g.propTypes=b,g.defaultProps={color:"secondary",tag:"button"},t.a=g},717:function(e,t,a){e.exports=a.p+"static/media/dpositbanner.2db6c815.jpg"},718:function(e,t,a){"use strict";var n=a(719).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},719:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=r(a(0)),o=r(a(720));function r(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g=function(e){function t(){var e,a;s(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return b(d(a=p(this,(e=f(t)).call.apply(e,[this].concat(l)))),"onClick",(function(e){var t=a.props,r=t.text,l=t.onCopy,c=t.children,i=t.options,s=n.default.Children.only(c),u=(0,o.default)(r,i);l&&l(r,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),a}var a,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=i(e,["text","onCopy","options","children"]),o=n.default.Children.only(t);return n.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{onClick:this.onClick}))}}])&&u(a.prototype,r),l&&u(a,l),t}(n.default.PureComponent);t.CopyToClipboard=g,b(g,"defaultProps",{onCopy:void 0,options:void 0})},720:function(e,t,a){"use strict";var n=a(721),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,r,l,c,i,s,u=!1;t||(t={}),a=t.debug||!1;try{if(l=n(),c=document.createRange(),i=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),i.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){a&&console.error("unable to copy using execCommand: ",p),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){a&&console.error("unable to copy using clipboardData: ",p),a&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(c):i.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},721:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},722:function(e,t,a){e.exports=a.p+"static/media/qr-code.eb982b2b.jpeg"},723:function(e,t){e.exports="data:image/png;base64,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"},786:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(136);function o(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,l=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw r}}}}},848:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(49),o=a.n(n),r=a(78),l=a(786),c=a(104),i=a(105),s=a(106),u=a(107),p=a(108),f=a(0),d=a.n(f),m=a(185),b=a(717),g=a.n(b),y=a(549),h=a(550),v=a(617),O=a(608),w=a(627),C=a(718),E=a(722),j=a.n(E),A=a(723),D=a.n(A),S=a(48),P=a.n(S),z=(a(639),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]}),n.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},n.onChangeHandler=function(e){n.setState({selectedFile:e.target.files}),n.setState({selectedName:e.target.files.name}),console.log(e.target.files)},n.changeHandler=function(e){n.setState(Object(c.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("firstname",n.state.firstname),t.append("pay_method",n.state.pay_method),t.append("mobile",n.state.mobile),t.append("amount",n.state.amount),t.append("customer",n.state.wData._id);var a,o=Object(l.a)(n.state.selectedFile);try{for(o.s();!(a=o.n()).done;){var r=a.value;null!==n.state.selectedFile&&t.append("depsite_file",r,r.name)}}catch(d){o.e(d)}finally{o.f()}var c,i=Object(l.a)(t.values());try{for(i.s();!(c=i.n()).done;){var s=c.value;console.log(s)}}catch(d){i.e(d)}finally{i.f()}var u,p=Object(l.a)(t.keys());try{for(p.s();!(u=p.n()).done;){var f=u.value;console.log(f)}}catch(d){p.e(d)}finally{p.f()}P.a.post("http://35.154.134.118/api/admin/deposite_wallet",t).then((function(e){console.log(e),n.props.history.push("/DepositPending")})).catch((function(e){console.log(e.response)}))},n.state={wData:{},amount:"",depsite_file:"",pay_method:"",customer:"",firstname:"",email:"",mobile:"",selectedFile:void 0,selectedName:"",user:{}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse(localStorage.getItem("userInfo")),console.log(t),P.a.get("http://35.154.134.118/api/user/getonecustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.data),a.setState({wData:e.data.data,customer:e.data.data.customer,firstname:e.data.data.firstname,email:e.data.data.email,mobile:e.data.data.mobile,amount:e.data.data.amount}),console.log(a.state.wData._id)})).catch((function(e){console.log(e.response)})),P.a.get("http://35.154.134.118/api/admin/getone/"+t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e.response)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return d.a.createElement(m.a,null,d.a.createElement(y.a,{fluid:!0,className:""},d.a.createElement(h.a,{className:""},d.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(g.a,")"),width:"100%",padding:"35px 0px",backgroundSize:"cover"}},d.a.createElement("div",{className:"deposit-form"},d.a.createElement("div",{className:"dpositlogo mb-4"},d.a.createElement("img",{src:D.a,style:{width:150}})),d.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement("div",{className:"col-lg-12 mb-3"},d.a.createElement("input",{name:"firstname",placeholder:"USERNAME*",type:"text",required:!0,value:this.state.firstname,onChange:this.changeHandler})),d.a.createElement("div",{className:"col-lg-12 mb-3"},d.a.createElement("input",{name:"email",placeholder:"EMAIL ID*",type:"email",required:!0,value:this.state.email,onChange:this.changeHandler})),d.a.createElement("div",{className:"col-lg-12 mb-3"},d.a.createElement("input",{name:"mobile",placeholder:"PHONE NUMBER*",type:"number",required:!0,value:this.state.mobile,onChange:this.changeHandler})),d.a.createElement("div",{className:"col-lg-12 mb-3"},d.a.createElement("input",{name:"amount",placeholder:"HASHTAG*",type:"taxt",required:!0,value:this.state.amount,onChange:this.changeHandler})),d.a.createElement("div",{className:"col-lg-12 mb-3"},d.a.createElement("select",{className:"form-control select-st",name:"pay_method",required:!0,value:this.state.pay_method,onChange:this.changeHandler},d.a.createElement("option",null,"SELECT PAYMENT METHOD"),d.a.createElement("option",null,"USDT"),d.a.createElement("option",null,"TRX"),d.a.createElement("option",null,"soxypay"))),d.a.createElement("div",{className:"qr-box"},d.a.createElement(h.a,null,d.a.createElement(O.a,{lg:"4"},d.a.createElement("div",{className:"cod-2"},d.a.createElement("img",{src:j.a,style:{width:100},name:"depsite_file"}))),d.a.createElement(O.a,{lg:"8"},d.a.createElement("div",{className:"cod-1"},d.a.createElement("p",null,"TVZAQK6STYPYK8GNG6RMMPKWDBDPIWBZBO"),d.a.createElement(C.CopyToClipboard,{text:"TVZAQK6STYPYK8GNG6RMMPKWDBDPIWBZBO"},d.a.createElement("button",null,"Click to Copy")),d.a.createElement("ol",null,d.a.createElement("li",null,"Deposit Only USDT(TRC-20) or TRX to this address"),d.a.createElement("li",null,"Only add TRC20 compliant address."),d.a.createElement("li",null,"Please copy the wallet address carefully"),d.a.createElement("li",null,"Store the generated reference number for your record purpose"),d.a.createElement("li",null,"Gynysys is not responsible for Any currency sent to an incorrect wallet address.")))))),d.a.createElement("div",{className:"col-lg-12 mb-3"},d.a.createElement("label",null,"DEPOSIT SCREEN SHOT*"),d.a.createElement("input",{type:"file",onChange:this.onChangeHandler})),d.a.createElement(w.a,{className:"dp-submit mt-3"},"Submit Details")))))))}}]),a}(f.Component))}}]);
//# sourceMappingURL=36.a606c320.chunk.js.map