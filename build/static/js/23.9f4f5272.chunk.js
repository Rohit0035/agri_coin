(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[23],{557:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=c(a(566)),r=c(a(559)),l=c(a(568));function c(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},559:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(3)),l=o(a(34)),c=a(567);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,b,E,g=function(e){function t(){return s(this,t),m(this,p(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,l=r.innerHTML;(n=(n=n.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(r,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(r,l)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,r),o&&u(a,o),t}(n.Component);f=g,b="contextTypes",E={extract:r.default.func},b in f?Object.defineProperty(f,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):f[b]=E;var y=g;t.default=y,e.exports=t.default},566:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),l=(n=a(3))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),l&&i(a,l),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(p,"childContextTypes",{extract:l.default.func});var d=p;t.default=d,e.exports=t.default},567:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?a=e:"meta"===r?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],o=c.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),l.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,l=e.getAttribute(n);return l?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),l=r.concat(["id"])},568:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(3)),l=c(a(559));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,f,b,E=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(l.default,null,n.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,r),c&&s(a,c),t}(n.Component);d=E,f="propTypes",b={title:r.default.string},f in d?Object.defineProperty(d,f,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[f]=b;var g=E;t.default=g,e.exports=t.default},701:function(e){e.exports=JSON.parse('[{"id":1,"title":"Apparel Stores Online mobile </br>recharge And bill payment","image":"/assets/img/slider/slider-31.jpg"},{"id":2,"title":"Apparel Stores Online Shoping </br> And bill payment","image":"/assets/img/slider/slider-34.jpg"}]')},704:function(e,t,a){"use strict";var n=a(183),r=a(184),l=a(185),c=a(186),o=a(0),i=a.n(o),s=a(58),u=a.n(s),m=a(612),p=a(548),d=a(747),f=a(549),b=a(672),E=(a(705),a(706)),g=a.n(E),y=a(707),h=a.n(y),v=a(708),N=a.n(v),O=a(6),w=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={ByCategoryList:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("http://35.154.86.59/api/admin/getproductCategory/").then((function(t){console.log(t),e.setState({ByCategoryList:t.data.data})}))}},{key:"render",value:function(){var e;null===(e=this.state.ByCategoryList)||void 0===e||e.map((function(e){var t;return i.a.createElement("div",null,i.a.createElement(m.a,{lg:"4"},i.a.createElement(O.b,{to:"/shop-list-standard/".concat(null===(t=e.data)||void 0===t?void 0:t._id)},i.a.createElement("img",{src:null===e||void 0===e?void 0:e.product_img,alt:"store",height:"320vh",width:"250px"}))),i.a.createElement(m.a,{lg:"4"}))}));return i.a.createElement(p.a,{className:"main mb-2"},i.a.createElement(d.a,{className:"mb-5"},i.a.createElement(f.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{style:{fontWeight:"bold"}},"Browse By Category")),i.a.createElement(m.a,{className:"d-flex justify-content-end"},i.a.createElement(b.a,{color:"primary",className:"",onClick:function(e){window.location.href="/shop-grid-two-column",console.log("ok")}},"Explore All")))),i.a.createElement(d.a,{className:"d-flex align-items-center justify-content-center"},i.a.createElement(f.a,null,i.a.createElement(m.a,{lg:"4"},i.a.createElement(O.b,{to:"/shop-grid-men-column"},i.a.createElement("img",{src:g.a,alt:"img",height:"300vh",width:"300px"}))),i.a.createElement(m.a,{lg:"4"},i.a.createElement(O.b,{to:"/shop-grid-women-column"},i.a.createElement("img",{src:h.a,alt:"img",height:"300vh",width:"300px"}))),i.a.createElement(m.a,{lg:"4"},i.a.createElement(O.b,{to:"/shop-grid-kids-column"},i.a.createElement("img",{src:N.a,alt:"img",height:"300vh",width:"300px"}))))))}}]),a}(i.a.Component);t.a=w},705:function(e,t,a){},706:function(e,t,a){e.exports=a.p+"static/media/men.d3712790.jpg"},707:function(e,t,a){e.exports=a.p+"static/media/women.a056abed.jpg"},708:function(e,t,a){e.exports=a.p+"static/media/kid.1255d88f.jpg"},709:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-43.jpg","title":"Wooden Chair (06)","url":"/shop-grid-standard"}]')},710:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')},716:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(570),c=a.n(l),o=a(701),i=function(e){var t=e.data,a=e.sliderClass;return r.a.createElement("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img ".concat(a||""),style:{backgroundImage:"url(".concat(""+t.image,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12"},r.a.createElement("div",{className:"slider-content-brown slider-content-2 slider-content-2--white slider-animated-1 text-center"},r.a.createElement("h3",{className:"animated no-style",dangerouslySetInnerHTML:{__html:t.title}}),r.a.createElement("h1",{className:"animated",dangerouslySetInnerHTML:{__html:t.subtitle}}))))))};t.a=function(){var e={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},watchSlidesVisibility:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return r.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return r.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},r.a.createElement("i",{className:"pe-7s-angle-right"}))}};return r.a.createElement("div",{className:"slider-area"},r.a.createElement("div",{className:"slider-active nav-style-1"},r.a.createElement(c.a,e,o&&o.map((function(e,t){return r.a.createElement(i,{data:e,key:t,sliderClass:"swiper-slide"})})))))}},717:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(709),c=a(6),o=a(548),i=a(549),s=a(612),u=a(613),m=a(631),p=a(874),d=a(871),f=a(3),b=function(e){e.spaceBottomClass;return r.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},r.a.createElement("div",{className:"category-grid"},r.a.createElement("section",{className:"st-p"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"bx1"},r.a.createElement(i.a,null,r.a.createElement(s.a,{md:"12"},r.a.createElement("ul",{className:"st-2"},r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,{to:"/electricity"},f.string.electricity,r.a.createElement("i",{className:"pe-7s-light circle-1"}),r.a.createElement("p",null,"Electricity"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,{to:"/gass"},f.string.gass,r.a.createElement("i",{className:"pe-7s-safe circle-1"}),r.a.createElement("p",null,"Gass"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,{to:"/water"},f.string.water,r.a.createElement("i",{className:"pe-7s-paint-bucket circle-1"}),r.a.createElement("p",null,"Water"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,{to:"/internet"},f.string.internet,r.a.createElement("i",{className:"pe-7s-global circle-1"}),r.a.createElement("p",null,"Broadband Bill"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,null,r.a.createElement("i",{className:"pe-7s-cash circle-1"}),r.a.createElement("p",null,"Fastag"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,null,r.a.createElement("i",{className:"pe-7s-phone circle-1 active"}),r.a.createElement("p",null,"Mobile Balance"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,{to:"/internetbill"},f.string.internetbill,r.a.createElement("i",{className:"pe-7s-airplay circle-1"}),r.a.createElement("p",null,"DTH"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,{to:"/shoppingbill"},f.string.shoppingbill,r.a.createElement("i",{className:"pe-7s-home circle-1"}),r.a.createElement("p",null,"Hospital Bill"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,null,r.a.createElement("i",{className:"pe-7s-clock circle-1"}),r.a.createElement("p",null,"Municipality"))),r.a.createElement("li",{className:"st-1"},r.a.createElement(c.b,null,r.a.createElement("i",{className:"pe-7s-more circle-1"}),r.a.createElement("p",null," More"))))),r.a.createElement("div",{className:"bx-2"},r.a.createElement("h3",{className:"mb-3 bold"},"Quick Recharge"),r.a.createElement(u.a,null,r.a.createElement("div",{className:"int-box"},r.a.createElement(p.a,{control:r.a.createElement(d.a,{defaultChecked:!0}),label:"Prepaid"})),r.a.createElement("div",{className:"int-box"},r.a.createElement(p.a,{control:r.a.createElement(d.a,null),label:"Postpaid"})),r.a.createElement(i.a,null,r.a.createElement(s.a,{md:"3"},r.a.createElement(m.a,{type:"text",className:"form-control mb-st",placeholder:"Enter Mobile Number "})),r.a.createElement(s.a,{md:"3"},r.a.createElement(m.a,{type:"text",className:"form-control",placeholder:"Select Operator"},r.a.createElement("option",null,"Idea"),r.a.createElement("option",null,"Jio"))),r.a.createElement(s.a,{md:"3"},r.a.createElement(m.a,{type:"text",className:"form-control mb-st",placeholder:"Amount"})),r.a.createElement(s.a,{md:"3"},r.a.createElement("button",{type:"button",class:"btn-s mb-st"},"Continue")))))))))))};t.a=function(e){var t=e.spaceBottomClass;return r.a.createElement("div",{className:"category-grid-area ".concat(t||"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},l&&l.map((function(e,t){return r.a.createElement(b,{data:e,key:t})})))))}},718:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(570),c=a.n(l),o=function(e){var t=e.data,a=e.sliderClassName,n=e.spaceBottomClass;return r.a.createElement("div",{className:"single-brand-logo ".concat(a||""," ").concat(n||"")},r.a.createElement("img",{src:""+t.image,alt:""}))},i=a(710);t.a=function(e){var t=e.spaceBottomClass,a=e.spaceTopClass,n={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:4},640:{slidesPerView:3},320:{slidesPerView:2}}};return r.a.createElement("div",{className:"brand-logo-area ".concat(t||"","  ").concat(a||"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"brand-logo-active"},r.a.createElement(c.a,n,i&&i.map((function(e,t){return r.a.createElement(o,{data:e,key:t,sliderClassName:"swiper-slide",spaceBottomClass:"mb-30"})}))))))}},724:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(181),a(548)),c=a(549),o=a(612),i=a(746),s=a(6);t.default=function(e){e.data,e.spaceBottomClass;return r.a.createElement(l.a,{fluid:!0,className:"mb-4"},r.a.createElement("section",{className:"srevicegrid"},r.a.createElement(l.a,null,r.a.createElement("h1",null,"OUR POPULAR SERVICES"),r.a.createElement("p",{style:{color:"#008000"}},"What We Do "),r.a.createElement(c.a,null,r.a.createElement(o.a,{md:"6"},r.a.createElement(s.b,null,r.a.createElement(i.a,{className:"st-card"},r.a.createElement(c.a,null,r.a.createElement(o.a,{md:"2"},r.a.createElement("i",{className:"pe-7s-credit card_icon"})),r.a.createElement(o.a,{md:"10"},r.a.createElement("h3",null,"Digital Service"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..")))))),r.a.createElement(o.a,{md:"6"},r.a.createElement(s.b,null,r.a.createElement(i.a,{className:"st-card"},r.a.createElement(c.a,null,r.a.createElement(o.a,{md:"2"},r.a.createElement("i",{className:"pe-7s-credit card_icon"})),r.a.createElement(o.a,{md:"10"},r.a.createElement("h3",null,"EMI Payments"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..")))))),r.a.createElement(o.a,{md:"6"},r.a.createElement(s.b,null,r.a.createElement(i.a,{className:"st-card"},r.a.createElement(c.a,null,r.a.createElement(o.a,{md:"2"},r.a.createElement("i",{className:"pe-7s-cash card_icon"})),r.a.createElement(o.a,{md:"10"},r.a.createElement("h3",null,"Bill Payments"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..")))))),r.a.createElement(o.a,{md:"6"},r.a.createElement(s.b,null,r.a.createElement(i.a,{className:"st-card"},r.a.createElement(c.a,null,r.a.createElement(o.a,{md:"2"},r.a.createElement("i",{className:"pe-7s-phone card_icon"})),r.a.createElement(o.a,{md:"10"},r.a.createElement("h3",null,"Phone Recharge And DTH"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora.."))))))))))}},753:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm."},{"id":2,"image":"/assets/img/icon-img/support-11.png","title":"Support 24/7","subtitle":"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm."},{"id":3,"image":"/assets/img/icon-img/support-12.png","title":"Money Return","subtitle":"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm."}]')},876:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(557),c=a.n(l),o=a(181),i=a(718),s=a(753),u=function(e){var t=e.data,a=e.spaceBottomClass,n=e.textAlignClass;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"icon-features"},r.a.createElement("div",{className:"support-wrap-6 support-shape ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"support-content-6"},r.a.createElement("img",{src:""+t.image,alt:""}),r.a.createElement("h5",null,t.title),r.a.createElement("p",null,t.subtitle)))))},m=function(e){var t=e.spaceTopClass,a=e.spaceBottomClass;return r.a.createElement("div",{className:"support-area ".concat(t||""," ").concat(a||"")},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row feature-icon-two-wrap"},s&&s.map((function(e,t){return r.a.createElement(u,{data:e,spaceBottomClass:"mb-30",textAlignClass:"text-center",key:t})})))))},p=a(717),d=a(716),f=a(704),b=a(724);t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,"Agricoin"),r.a.createElement("meta",{name:"description",content:"Furniture home of flone react minimalist eCommerce template."})),r.a.createElement(o.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-1",headerPositionClass:"header-absolute"},r.a.createElement(d.a,null),r.a.createElement(p.a,{spaceBottomClass:"pb-70"}),r.a.createElement(m,{spaceBottomClass:"pb-70"}),r.a.createElement(b.default,null),r.a.createElement(f.a,null),r.a.createElement(i.a,{spaceBottomClass:"pb-95",spaceTopClass:"pt-100"})))}}}]);
//# sourceMappingURL=23.9f4f5272.chunk.js.map