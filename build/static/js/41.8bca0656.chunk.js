(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[41],{620:function(e,t,n){"use strict";var o=n(7),a=n(12),r=n(187),c=n(16),i=n(0),l=n.n(i),s=n(3),u=n.n(s),p=n(78),f=n.n(p),d=n(54),m=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,c=e.className,i=e.close,s=e.cssModule,u=e.color,p=e.outline,b=e.size,y=e.tag,g=e.innerRef,v=Object(a.a)(e,m);i&&"undefined"===typeof v.children&&(v.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(p?"-outline":"")+"-"+u,w=Object(d.b)(f()(c,{close:i},i||"btn",i||h,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),s);v.href&&"button"===y&&(y="a");var A=i?"Close":null;return l.a.createElement(y,Object(o.a)({type:"button"===y&&v.onClick?"button":void 0},v,{className:w,ref:g,onClick:this.onClick,"aria-label":n||A}))},t}(l.a.Component);y.propTypes=b,y.defaultProps={color:"secondary",tag:"button"},t.a=y},663:function(e,t){e.exports="data:image/png;base64,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"},718:function(e,t,n){e.exports=n.p+"static/media/dpositbanner.2db6c815.jpg"},719:function(e,t,n){"use strict";var o=n(720).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=r(n(0)),a=r(n(721));function r(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return b(d(n=p(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,r=t.text,c=t.onCopy,i=t.children,l=t.options,s=o.default.Children.only(i),u=(0,a.default)(r,l);c&&c(r,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),a=o.default.Children.only(t);return o.default.cloneElement(a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,r),c&&u(n,c),t}(o.default.PureComponent);t.CopyToClipboard=y,b(y,"defaultProps",{onCopy:void 0,options:void 0})},721:function(e,t,n){"use strict";var o=n(722),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,c,i,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},722:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},723:function(e,t,n){e.exports=n.p+"static/media/qr-code.eb982b2b.jpeg"},850:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(186),c=n(718),i=n.n(c),l=n(550),s=n(551),u=n(620),p=(n(719),n(723),n(663)),f=n.n(p);t.default=function(e){e.data,e.spaceBottomClass;return a.a.createElement(r.a,null,a.a.createElement(l.a,{fluid:!0,className:""},a.a.createElement(s.a,{className:""},a.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(i.a,")"),width:"100%",padding:"35px 0px",backgroundSize:"cover"}},a.a.createElement("div",{className:"deposit-form"},a.a.createElement("div",{className:"dpositlogo mb-4"},a.a.createElement("img",{src:f.a,width:"150px"}),a.a.createElement("h5",null,"Withdraw Form")),a.a.createElement("form",null,a.a.createElement("div",{className:"col-lg-12 mb-3"},a.a.createElement("input",{name:"user_id",placeholder:"USER ID*",type:"number"})),a.a.createElement("div",{className:"col-lg-12 mb-3"},a.a.createElement("input",{name:"user_name",placeholder:"USERNAME*",type:"text"})),a.a.createElement("div",{className:"col-lg-12 mb-3"},a.a.createElement("input",{name:"email",placeholder:"EMAIL ID*",type:"email"})),a.a.createElement("div",{className:"col-lg-12 mb-3"},a.a.createElement("input",{name:"phonenumber",placeholder:"PHONE NUMBER*",type:"number"})),a.a.createElement("div",{className:"col-lg-12 mb-3"},a.a.createElement("input",{name:"date",placeholder:"",type:"date"})),a.a.createElement("div",{className:"col-lg-12 mb-3"},a.a.createElement("input",{name:"amount",placeholder:"Enter Amount*",type:"text"}))),a.a.createElement(u.a,{className:"dp-submit mt-3"},"Submit Details"))))))}}}]);
//# sourceMappingURL=41.8bca0656.chunk.js.map