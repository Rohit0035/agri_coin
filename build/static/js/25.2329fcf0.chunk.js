(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[25],{298:function(e,a,t){},314:function(e){e.exports=JSON.parse('[{"id":1,"title":"Apparel Stores Online mobile </br>recharge And bill payment","image":"/assets/img/slider/slider-31.jpg"},{"id":2,"title":"Apparel Stores Online Shoping </br> And bill payment","image":"/assets/img/slider/slider-34.jpg"}]')},315:function(e,a,t){},316:function(e,a,t){e.exports=t.p+"static/media/swiper.cd72c110.less"},317:function(e,a,t){"use strict";var l=t(59),n=t(60),r=t(61),c=t(62),s=t(0),i=t.n(s),m=t(19),o=t.n(m),u=t(214),p=t(161),d=t(368),E=t(162),g=t(244),b=(t(318),t(319)),h=t.n(b),N=t(320),v=t.n(N),f=t(321),y=t.n(f),w=t(2),x=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={ByCategoryList:[]},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.get("http://35.154.86.59/api/admin/getproductCategory/").then((function(a){console.log(a),e.setState({ByCategoryList:a.data.data})}))}},{key:"render",value:function(){var e;null===(e=this.state.ByCategoryList)||void 0===e||e.map((function(e){var a;return i.a.createElement("div",null,i.a.createElement(u.a,{lg:"4"},i.a.createElement(w.b,{to:"/shop-list-standard/".concat(null===(a=e.data)||void 0===a?void 0:a._id)},i.a.createElement("img",{src:null===e||void 0===e?void 0:e.product_img,alt:"store",height:"320vh",width:"250px"}))),i.a.createElement(u.a,{lg:"4"}))}));return i.a.createElement(p.a,{className:"main mb-2"},i.a.createElement(d.a,{className:"mb-5"},i.a.createElement(E.a,{className:"m-2"},i.a.createElement(u.a,{lg:"12"},i.a.createElement("h1",{style:{fontWeight:"bold"}},"Browse By Category"),i.a.createElement("span",{className:"ex-btn"},i.a.createElement(g.a,{color:"",className:"btn-expand",onClick:function(e){window.location.href="/shop-grid-two-column",console.log("ok")}},"Explore All"))))),i.a.createElement(d.a,{className:"d-flex align-items-center justify-content-center"},i.a.createElement(E.a,null,i.a.createElement(u.a,{lg:"4"},i.a.createElement(w.b,{to:"/shop-grid-men-column"},i.a.createElement("img",{src:h.a,alt:"img",height:"300vh",width:"300px"}))),i.a.createElement(u.a,{lg:"4"},i.a.createElement(w.b,{to:"/shop-grid-women-column"},i.a.createElement("img",{src:v.a,alt:"img",height:"300vh",width:"300px"}))),i.a.createElement(u.a,{lg:"4"},i.a.createElement(w.b,{to:"/shop-grid-kids-column"},i.a.createElement("img",{src:y.a,alt:"img",height:"300vh",width:"300px"}))))))}}]),t}(i.a.Component);a.a=x},318:function(e,a,t){},319:function(e,a,t){e.exports=t.p+"static/media/men.d3712790.jpg"},320:function(e,a,t){e.exports=t.p+"static/media/women.a056abed.jpg"},321:function(e,a,t){e.exports=t.p+"static/media/kid.1255d88f.jpg"},322:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-43.jpg","title":"Wooden Chair (06)","url":"/shop-grid-standard"}]')},336:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(183),c=t.n(r),s=t(314),i=function(e){var a=e.data,t=e.sliderClass;return n.a.createElement("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img ".concat(t||""),style:{backgroundImage:"url(".concat(""+a.image,")")}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12"},n.a.createElement("div",{className:"slider-content-brown slider-content-2 slider-content-2--white slider-animated-1 text-center"},n.a.createElement("h3",{className:"animated no-style",dangerouslySetInnerHTML:{__html:a.title}}),n.a.createElement("h1",{className:"animated",dangerouslySetInnerHTML:{__html:a.subtitle}}))))))};a.a=function(){var e={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},watchSlidesVisibility:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return n.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return n.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},n.a.createElement("i",{className:"pe-7s-angle-right"}))}};return n.a.createElement("div",{className:"slider-area"},n.a.createElement("div",{className:"slider-active nav-style-1"},n.a.createElement(c.a,e,s&&s.map((function(e,a){return n.a.createElement(i,{data:e,key:a,sliderClass:"swiper-slide"})})))))}},337:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(322),c=t(2),s=t(161),i=t(162),m=t(214),o=t(218),u=t(240),p=t(501),d=t(498),E=t(1),g=function(e){e.spaceBottomClass;return n.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30"},n.a.createElement("div",{className:"category-grid"},n.a.createElement("section",{className:"st-p"},n.a.createElement(s.a,null,n.a.createElement("div",{className:"bx1"},n.a.createElement(i.a,null,n.a.createElement(m.a,{md:"12"},n.a.createElement("ul",{className:"st-2"},n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,{to:"/electricity"},E.string.electricity,n.a.createElement("i",{className:"pe-7s-light circle-1"}),n.a.createElement("p",null,"Electricity"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,{to:"/gass"},E.string.gass,n.a.createElement("i",{className:"pe-7s-safe circle-1"}),n.a.createElement("p",null,"Gass"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,{to:"/water"},E.string.water,n.a.createElement("i",{className:"pe-7s-paint-bucket circle-1"}),n.a.createElement("p",null,"Water"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,{to:"/internet"},E.string.internet,n.a.createElement("i",{className:"pe-7s-global circle-1"}),n.a.createElement("p",null,"Broadband Bill"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,null,n.a.createElement("i",{className:"pe-7s-cash circle-1"}),n.a.createElement("p",null,"Fastag"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,{to:"/mobilerecharge"},E.string.mobilerecharge,n.a.createElement("i",{className:"pe-7s-phone circle-1 active"}),n.a.createElement("p",null,"Mobile Balance"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,{to:"/internetbill"},E.string.internetbill,n.a.createElement("i",{className:"pe-7s-airplay circle-1"}),n.a.createElement("p",null,"DTH"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,{to:"/shoppingbill"},E.string.shoppingbill,n.a.createElement("i",{className:"pe-7s-home circle-1"}),n.a.createElement("p",null,"Hospital Bill"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,null,n.a.createElement("i",{className:"pe-7s-clock circle-1"}),n.a.createElement("p",null,"Municipality"))),n.a.createElement("li",{className:"st-1"},n.a.createElement(c.b,null,n.a.createElement("i",{className:"pe-7s-more circle-1"}),n.a.createElement("p",null," More"))))),n.a.createElement("div",{className:"bx-2"},n.a.createElement("h3",{className:"mb-3 bold"},"Quick Recharge"),n.a.createElement(o.a,null,n.a.createElement("div",{className:"int-box"},n.a.createElement(p.a,{control:n.a.createElement(d.a,{defaultChecked:!0}),label:"Prepaid"})),n.a.createElement("div",{className:"int-box"},n.a.createElement(p.a,{control:n.a.createElement(d.a,null),label:"Postpaid"})),n.a.createElement(i.a,null,n.a.createElement(m.a,{md:"3",className:"mb-2"},n.a.createElement(u.a,{type:"text",className:"form-control mb-st",placeholder:"Enter Mobile Number "})),n.a.createElement(m.a,{md:"3",className:"mb-2"},n.a.createElement(u.a,{type:"text",className:"form-control",placeholder:"Select Operator"},n.a.createElement("option",null,"Idea"),n.a.createElement("option",null,"Jio"))),n.a.createElement(m.a,{md:"3",className:"mb-2"},n.a.createElement(u.a,{type:"text",className:"form-control mb-st",placeholder:"Amount"})),n.a.createElement(m.a,{md:"3"},n.a.createElement("button",{type:"button",class:"btn-s mb-st"},"Continue")))))))))))};a.a=function(e){var a=e.spaceBottomClass;return n.a.createElement("div",{className:"category-grid-area ".concat(a||"")},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},r&&r.map((function(e,a){return n.a.createElement(g,{data:e,key:a})})))))}},373:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Free shipping on all order"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Free shipping on all order"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Free shipping on all order"},{"id":4,"image":"/assets/img/icon-img/support-4.png","title":"Order Discount","subtitle":"Free shipping on all order"}]')},500:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(336),c=t(59),s=t(60),i=t(61),m=t(62),o=t(161),u=t(162),p=t(214),d=t(367),E=(t(298),t(315),t(316),t(2)),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"srevicegrid"},n.a.createElement(o.a,null,n.a.createElement("h1",null,"OUR POPULAR SERVICES"),n.a.createElement("p",{style:{color:"#008000"}},"What We Do "),n.a.createElement(u.a,null,n.a.createElement(p.a,{md:"6"},n.a.createElement(E.b,null,n.a.createElement(d.a,{className:"st-card"},n.a.createElement(u.a,null,n.a.createElement(p.a,{md:"2"},n.a.createElement("i",{className:"pe-7s-credit card_icon"})),n.a.createElement(p.a,{md:"10"},n.a.createElement("h3",null,"Digital Service"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..")))))),n.a.createElement(p.a,{md:"6"},n.a.createElement(E.b,null,n.a.createElement(d.a,{className:"st-card"},n.a.createElement(u.a,null,n.a.createElement(p.a,{md:"2"},n.a.createElement("i",{className:"pe-7s-plane card_icon"})),n.a.createElement(p.a,{md:"10"},n.a.createElement("h3",null,"Travelling Ticket"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..")))))),n.a.createElement(p.a,{md:"6"},n.a.createElement(E.b,null,n.a.createElement(d.a,{className:"st-card"},n.a.createElement(u.a,null,n.a.createElement(p.a,{md:"2"},n.a.createElement("i",{className:"pe-7s-cash card_icon"})),n.a.createElement(p.a,{md:"10"},n.a.createElement("h3",null,"Bill Payments"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..")))))),n.a.createElement(p.a,{md:"6"},n.a.createElement(E.b,null,n.a.createElement(d.a,{className:"st-card"},n.a.createElement(u.a,null,n.a.createElement(p.a,{md:"2"},n.a.createElement("i",{className:"pe-7s-phone card_icon"})),n.a.createElement(p.a,{md:"10"},n.a.createElement("h3",null,"Phone Recharge And DTH"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..")))))))))}}]),t}(n.a.Component),b=t(317),h=t(337),N=t(373),v=function(e){var a=e.singleFeature;return n.a.createElement("div",{className:"col-lg-3 col-sm-6"},n.a.createElement("div",{className:"support-wrap mb-30"},n.a.createElement("div",{className:"support-icon"},n.a.createElement("img",{className:"animated",src:""+a.image,alt:""})),n.a.createElement("div",{className:"support-content"},n.a.createElement("h5",null,a.title),n.a.createElement("p",null,a.subtitle))))},f=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass;return n.a.createElement("div",{className:"support-area ".concat(a||""," ").concat(t||"")},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},N.map((function(e){return n.a.createElement(v,{singleFeature:e,key:e.id})})))))},y=t(55);a.default=function(){return n.a.createElement(y.a,null,n.a.createElement(r.a,null),n.a.createElement(h.a,{spaceBottomClass:"pb-70"}),n.a.createElement(g,null),n.a.createElement(f,{spaceTopClass:"pt-100",spaceBottomClass:"pb-60"}),n.a.createElement(b.a,null))}}}]);
//# sourceMappingURL=25.2329fcf0.chunk.js.map