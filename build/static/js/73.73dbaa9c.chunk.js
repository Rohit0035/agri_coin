(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[73],{556:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(6),l=a(185);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(l.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:r.d,finalItem:"span"}))))}},832:function(e,t,a){"use strict";a.r(t);var n=a(41),c=a.n(n),r=a(68),l=a(34),o=a(0),s=a.n(o),u=a(779),i=a.n(u),m=a(22),d=a(6),p=a(109),v=a(559),E=a.n(v),g=a(185),h=a(44),f=a(610),b=a(630),N=a(620),y=a(184),O=a(613),j=a.n(O),k=a(69),w=a(186),_=a(556),C=a(55);t.default=Object(h.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(k.e)(t,a,n))},decreaseQuantity:function(t,a){e(Object(k.f)(t,a))},deleteFromCart:function(t,a){e(Object(k.h)(t,a))},deleteAllFromCart:function(t){e(Object(k.g)(t))}}}))((function(e){e.props;var t,a,n=e.location,u=(e.cartItems,e.currency),v=(e.decreaseQuantity,e.addToCart,e.deleteFromCart,e.deleteAllFromCart,Object(o.useState)(1)),h=(Object(l.a)(v,1)[0],Object(p.useToasts)().addToast,Object(m.g)()),O=n.pathname,k=0,S=0,x=Object(o.useState)([]),I=Object(l.a)(x,2),T=I[0],F=I[1],P=Object(o.useState)([]),q=Object(l.a)(P,2),z=q[0],R=q[1],A=Object(o.useState)(0),D=Object(l.a)(A,2),B=D[0],G=D[1],Q=Object(o.useState)({}),J=Object(l.a)(Q,2),U=(J[0],J[1]),X=Object(o.useState)([]),Y=Object(l.a)(X,2),H=Y[0],M=Y[1],K=Object(o.useState)([]),L=Object(l.a)(K,2),V=L[0],W=L[1],Z=Object(o.useState)([]),$=Object(l.a)(Z,2),ee=($[0],$[1],Object(o.useState)([])),te=Object(l.a)(ee,2),ae=te[0],ne=te[1],ce=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/admin/cartbycustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:for(t=e.sent,a=t.data,n=a.data,console.log(n),r=[],l=0;l<n.length;l++)r.push(n[l]._id);W(r),console.log(r),M(n),console.log(n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/user/viewoneuseraddress",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:t=e.sent,a=t.data,n=a.data,console.log(n),ne(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,C.a.get("/admin/remove_cart/".concat(t),{headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(a=e.sent)&&(console.log(a),ce()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request remove all"),e.prev=1,e.next=4,C.a.get("/admin/clearCart",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 4:(t=e.sent)&&(window.location.reload(),console.log(t),ce()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),se=Object(o.useState)("rzp_live_dX052iXb0Is1yu"),ue=Object(l.a)(se,2),ie=ue[0],me=(ue[1],i()()),de=Object(o.useState)(""),pe=Object(l.a)(de,2),ve=(pe[0],pe[1]),Ee=Object(o.useState)(""),ge=Object(l.a)(Ee,2),he=ge[0],fe=ge[1];Object(o.useEffect)((function(){console.log(V),localStorage.getItem("auth-token")&&(ce(),re()),console.log("useEffect"),C.a.get("/user/getonecustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.data),fe(e.data.data)})).catch((function(e){console.log(e.response)})),C.a.get("/admin/rapay/".concat(k)).then((function(e){var t;console.log(e.data),ve(null===(t=e.data)||void 0===t?void 0:t.order.id)})).catch((function(e){console.log(e.response)}))}),[]);var be=Object(o.useCallback)(function(){var e=Object(r.a)(c.a.mark((function e(t,a,n,r,l,o,s){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("COD"!=o){e.next=4;break}return{cart:s,payment_type:o,status:"Pending",shipping_address:ae._id},console.log(s),e.abrupt("return");case 4:(u=new me({key:ie,amount:t,currency:"INR",name:"YOUR ORDER",description:a,handler:function(e){var t={cart:s,payment_type:o,status:"Pending",shipping_address:ae._id,razorpay_payment_id:e.razorpay_payment_id};console.log(e),C.a.post("admin/addordersample",t,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e),"Product added to Order"==e.data.msg&&"Product added to Order"===e.data.msg&&j()("Success!","Payment Success... Product Added To My Order","success"),h.push("/myOrder")})).catch((function(e){console.log(e.response)}))},prefill:{name:n,email:r,contact:l},notes:{address:"BuyNaa Corporate Office"},theme:{color:"#3399cc"}})).on("payment.failure",(function(e){alert("Remains on same page")})),u.open();case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,c,r,l,o){return e.apply(this,arguments)}}(),[me]);return Object(o.useEffect)((function(){console.log(V)}),[V]),s.a.createElement(o.Fragment,null,s.a.createElement(E.a,null,s.a.createElement("title",null,"Flone | Cart"),s.a.createElement("meta",{name:"description",content:"Cart page of flone react minimalist eCommerce template."})),s.a.createElement(g.BreadcrumbsItem,{to:"/"},"Home"),s.a.createElement(g.BreadcrumbsItem,{to:""+O},"Cart"),s.a.createElement(w.a,{headerTop:"visible"},s.a.createElement(_.a,null),s.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},s.a.createElement("div",{className:"container"},H&&H.length>=1?s.a.createElement(o.Fragment,null,s.a.createElement("h3",{className:"cart-page-title"},"Your cart items"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"table-content table-responsive cart-table-content"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Image"),s.a.createElement("th",null,"Product Name"),s.a.createElement("th",null,"Unit Price"),s.a.createElement("th",null,"Qty"),s.a.createElement("th",null,"GST"),s.a.createElement("th",null,"Coupon"),s.a.createElement("th",null,"Subtotal(Incl Tax)"),s.a.createElement("th",null,"action"))),s.a.createElement("tbody",null,null===H||void 0===H?void 0:H.map((function(e,t){var a,n,c,r,l,o,i,m,p,v;k+=parseInt(e.product_price);var E=Object(y.a)(e.price,e.discount);(e.price*u.currencyRate).toFixed(2),(E*u.currencyRate).toFixed(2);return S+=null!=E?(null===(a=e.product)||void 0===a||null===(n=a.gstrate)||void 0===n?void 0:n.value)*e.product_qty:(null===(c=e.product)||void 0===c||null===(r=c.gstrate)||void 0===r?void 0:r.value)*e.product_qty,s.a.createElement("tr",{key:t},s.a.createElement("td",{className:"product-thumbnail"},s.a.createElement(d.c,{to:"/product-sticky/"+(null===(l=e.product)||void 0===l?void 0:l._id)},s.a.createElement("img",{className:"img-fluid",src:""+(null===(o=e.product)||void 0===o?void 0:o.product_img[0]),alt:""}))),s.a.createElement("td",{className:"product-name"},s.a.createElement(d.c,{to:"/product-sticky/"+(null===(i=e.product)||void 0===i?void 0:i._id)},null===(m=e.product)||void 0===m?void 0:m.product_name),e.size||e.color?s.a.createElement("div",{className:"cart-item-variation"},s.a.createElement("span",null,"Color: ",null===e||void 0===e?void 0:e.color),s.a.createElement("span",null,"Size: ",null===e||void 0===e?void 0:e.size)):""),s.a.createElement("td",{className:"product-price-cart"},s.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.product_price)),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("div",{className:"cart-plus-minus"},s.a.createElement("span",null,e.product_qty))),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("div",{className:"cart-plus-minus"},s.a.createElement("span",null,null===(p=e.product)||void 0===p||null===(v=p.gstrate)||void 0===v?void 0:v.value))),s.a.createElement("td",{className:"product-quantity"},s.a.createElement("div",{className:"cart-plus-minus"},s.a.createElement(f.a,null,s.a.createElement("span",null,s.a.createElement(b.a,{type:"text",value:T[t],placeholder:"Enter Code",onChange:function(e){var a=T;a[t]=e.target.value,F(a)}}),s.a.createElement(N.a,{color:"primary",className:"",onClick:function(){C.a.post("/admin/verifyvalidategetdiscount/".concat(T[t]),{offer_code:T[t]}).then((function(e){var a=e.data,n=z;n[t]=a.discount_amount,R(n);for(var c=0,r=0;r<n.length;r++)n[r]&&(c+=n[r]);G(c),U(a),console.log(a)})).catch((function(e){console.log(e)}))}},"Apply"))))),s.a.createElement("td",{className:"product-subtotal"},z[t]?(null===e||void 0===e?void 0:e.product_price)-z[t]:e.product_price),s.a.createElement("td",{className:"product-remove"},s.a.createElement("button",{onClick:function(){var t;return le(null===(t=e.product)||void 0===t?void 0:t._id)(window.location.reload())}},s.a.createElement("i",{className:"fa fa-times"}))))}))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"cart-shiping-update-wrapper"},s.a.createElement("div",{className:"cart-shiping-update"},s.a.createElement(d.c,{to:"/shop-grid-two-column"},"Continue Shopping")),s.a.createElement("div",{className:"cart-clear"},s.a.createElement("button",{onClick:function(){return oe()(window.location.reload())}},"Clear Shopping Cart"))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-6"},s.a.createElement("div",{className:"cart-tax"},s.a.createElement("div",{className:"title-wrap"},s.a.createElement("h4",{className:"cart-bottom-title section-bg-gray"},"Shipping Address")),s.a.createElement("div",{className:"tax-wrapper"},s.a.createElement("div",{className:"tax-select-wrapper"},s.a.createElement("h4",null,s.a.createElement("span",{style:{textTransform:"capitalize mb-2"}},null===ae||void 0===ae||null===(t=ae.customer)||void 0===t?void 0:t.firstname," ",null===ae||void 0===ae||null===(a=ae.customer)||void 0===a?void 0:a.lastname,","),s.a.createElement("br",null),null===ae||void 0===ae?void 0:ae.address,",",null===ae||void 0===ae?void 0:ae.locality,",",null===ae||void 0===ae?void 0:ae.state,",",null===ae||void 0===ae?void 0:ae.pincode),s.a.createElement("button",{className:"cart-btn-2",type:"button",onClick:function(){return h.push("/my-account")}},"Change"))))),s.a.createElement("div",{className:"col-lg-4 col-md-12"},s.a.createElement("div",{className:"grand-totall"},s.a.createElement("div",{className:"title-wrap"},s.a.createElement("h4",{className:"cart-bottom-title section-bg-gary-cart m-2"},"Cart Total")),s.a.createElement("div",null,s.a.createElement("h4",{className:"grand-totall-title"},"Total GST",s.a.createElement("span",null,"\u20b9",S)),s.a.createElement("h4",{className:"grand-totall-title"},"Total Discount",s.a.createElement("span",null,"\u20b9",B)),s.a.createElement("h4",{className:"grand-totall-title"},"Grand Total"," ",s.a.createElement("span",null,"\u20b9",k-B))),s.a.createElement(d.c,{onClick:function(){return be(100*parseInt(k-B),"checkout",he.firstname+" "+he.lastname,he.email,he.mobile,"Online",V)}},"Proceed to Checkout"))))):s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"item-empty-area text-center"},s.a.createElement("div",{className:"item-empty-area__icon mb-30"},s.a.createElement("i",{className:"pe-7s-cart"})),s.a.createElement("div",{className:"item-empty-area__text"},"No items found in cart ",s.a.createElement("br",null)," ",s.a.createElement(d.c,{to:"/shop-grid-two-column"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=73.73dbaa9c.chunk.js.map