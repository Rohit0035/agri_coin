(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[42,54,55],{552:function(e,t,n){"use strict";e.exports=n(581)},556:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(6),u=n(179);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(u.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},581:function(e,t,n){"use strict";n(134);var a=n(0),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;r=o("react.element"),t.Fragment=o("react.fragment")}var u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var a,o={},i=null,s=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)l.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:i,ref:s,props:o,_owner:u.current}}t.jsx=i,t.jsxs=i},613:function(e,t,n){"use strict";var a=n(7),r=n(12),o=n(182),u=n(16),l=n(0),c=n.n(l),i=n(3),s=n.n(i),p=n(77),f=n.n(p),m=n(54),d=["className","cssModule","inline","tag","innerRef"],h={children:s.a.node,inline:s.a.bool,tag:m.c,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),className:s.a.string,cssModule:s.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(u.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,u=e.tag,l=e.innerRef,i=Object(r.a)(e,d),s=Object(m.b)(f()(t,!!o&&"form-inline"),n);return c.a.createElement(u,Object(a.a)({},i,{ref:l,className:s}))},t}(l.Component);v.propTypes=h,v.defaultProps={tag:"form"},t.a=v},706:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==y(e)&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=r?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(a,u,l):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(0)),r=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g=function(e){return"object"===y(e)},O=function(e){p(n,e);var t=m(n);function n(e){var r;return c(this,n),b(h(r=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!g(e)&&!1!==e})).join(" ")})),b(h(r),"getType",(function(){var e=r.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),r.input=a.default.createRef(),r}return s(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,a=this.input.current;a&&t&&n&&a.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,o=e.isLastChild,c=e.inputStyle,i=e.focus,s=e.isDisabled,p=e.hasErrored,f=e.errorStyle,m=e.focusStyle,d=e.disabledStyle,h=(e.shouldAutoFocus,e.isInputNum),v=e.index,b=e.value,y=e.className,O=(e.isInputSecure,l(e,r));return a.default.createElement("div",{className:y,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",u({"aria-label":"".concat(0===v?"Please enter verification code. ":"").concat(h?"Digit":"Character"," ").concat(v+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},g(c)&&c,i&&g(m)&&m,s&&g(d)&&d,p&&g(f)&&f),placeholder:t,className:this.getClasses(c,i&&m,s&&d,p&&f),type:this.getType(),maxLength:"1",ref:this.input,disabled:s,value:b||""},O)),!o&&n)}}]),n}(a.PureComponent),E=function(e){p(n,e);var t=m(n);function n(){var e;c(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return b(h(e=t.call.apply(t,[this].concat(o))),"state",{activeInput:0}),b(h(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),b(h(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,a=t.numInputs;if("string"===typeof n){if(n.length===a)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),b(h(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),b(h(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),b(h(e),"focusInput",(function(t){var n=e.props.numInputs,a=Math.max(Math.min(n-1,t),0);e.setState({activeInput:a})})),b(h(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),b(h(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),b(h(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,a=e.getOtpValue();a[n]=t[0],e.handleOtpChange(a)})),b(h(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,a=e.props,r=a.numInputs;if(!a.isDisabled){for(var o=e.getOtpValue(),u=n,l=t.clipboardData.getData("text/plain").slice(0,r-n).split(""),c=0;c<r;++c)c>=n&&l.length>0&&(o[c]=l.shift(),u++);e.setState({activeInput:u},(function(){e.focusInput(u),e.handleOtpChange(o)}))}})),b(h(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),b(h(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),b(h(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),b(h(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,r=n.numInputs,o=n.inputStyle,u=n.focusStyle,l=n.separator,c=n.isDisabled,i=n.disabledStyle,s=n.hasErrored,p=n.errorStyle,f=n.shouldAutoFocus,m=n.isInputNum,d=n.isInputSecure,h=n.className,v=[],b=e.getOtpValue(),y=e.getPlaceholderValue(),g=e.props["data-cy"],E=e.props["data-testid"],S=function(n){v.push(a.default.createElement(O,{placeholder:y&&y[n],key:n,index:n,focus:t===n,value:b&&b[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:l,inputStyle:o,focusStyle:u,isLastChild:n===r-1,isDisabled:c,disabledStyle:i,hasErrored:s,errorStyle:p,shouldAutoFocus:f,isInputNum:m,isInputSecure:d,className:h,"data-cy":g&&"".concat(g,"-").concat(n),"data-testid":E&&"".concat(E,"-").concat(n)}))},j=0;j<r;j++)S(j);return v})),e}return s(n,[{key:"render",value:function(){var e=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},g(e)&&e),className:g(e)?"":e},this.renderInputs())}}]),n}(a.Component);b(E,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var S=E;t.default=S},717:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(180),r=n(183),o=n(184),u=n(185),l=n(186),c=n(0),i=n.n(c),s=n(559),p=n.n(s),f=n(588),m=n(181),d=n(556),h=n(58),v=n.n(h),b=n(613),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.changeHandler=function(e){o.setState(Object(a.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),v.a.post("http://35.154.134.118/api/user/sendotp",o.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},o.state={mobile_no:"12345678",customer_email:"guptapratima98710@gmail.com",selectedFile:null},o}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement(c.Fragment,null,i.a.createElement(p.a,null,i.a.createElement("title",null,"Buynaa | Login"),i.a.createElement("meta",{content:"Compare page of flone react minimalist eCommerce template."})),i.a.createElement(m.a,{headerTop:"visible"},i.a.createElement(d.a,null),i.a.createElement("div",{className:"login-register-area pt-100 pb-100"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},i.a.createElement("div",{className:"login-register-wrapper"},i.a.createElement(f.a.Container,{defaultActiveKey:"login"},i.a.createElement(f.a.Content,null,i.a.createElement(f.a.Pane,{eventKey:"login"},i.a.createElement("div",{className:"login-form-container"},i.a.createElement("div",{className:"login-register-form"},i.a.createElement(b.a,{onSubmit:this.submitHandler},i.a.createElement("input",{onChange:this.changeHandler,type:"number",value:this.state.mobile_no,name:"mobile_no ",placeholder:"Enter your mobile number"}),i.a.createElement("input",{value:this.state.customer_email,type:"email",name:"customer_email",placeholder:"Enter Email"}),i.a.createElement("div",{className:"button-box"},i.a.createElement("button",{type:"submit",color:"primary"},"SendOTP")))))))))))))))}}]),n}(c.Component)},718:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(180),r=n(183),o=n(184),u=n(193),l=n(185),c=n(186),i=n(0),s=n.n(i),p=n(559),f=n.n(p),m=n(706),d=n.n(m),h=n(58),v=n.n(h),b=n(588),y=n(181),g=n(556),O=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"12345678",otp:"1234",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(a.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),v.a.post("http://35.154.134.118/api/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(f.a,null,s.a.createElement("title",null,"Buynaa | Login"),s.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),s.a.createElement(y.a,{headerTop:"visible"},s.a.createElement(g.a,null),s.a.createElement("div",{className:"login-register-area pt-100 pb-100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},s.a.createElement("div",{className:"login-register-wrapper"},s.a.createElement(b.a.Container,{defaultActiveKey:"login"},s.a.createElement(b.a.Content,null,s.a.createElement(b.a.Pane,{eventKey:"login"},s.a.createElement("div",{className:"login-form-container"},s.a.createElement("div",{className:"login-register-form"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:s.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),s.a.createElement("div",{className:"button-box"},s.a.createElement("button",{type:"back"},"Back"),s.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),n}(s.a.Component)},843:function(e,t,n){"use strict";n.r(t);var a=n(180),r=n(15),o=n(40),u=n(0),l=n.n(u),c=n(717),i=n(718);t.default=function(){var e=Object(u.useState)({status:"",msg:"",mobile:"",otp:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],p=Object(u.useState)(1),f=Object(o.a)(p,2),m=f[0],d=f[1],h=function(e){return function(t){s(Object(r.a)(Object(r.a)({},n),{},Object(a.a)({},e,t.target.value)))}},v=function(e){s(Object(r.a)(Object(r.a)({},n),{},{msg:e}))},b=function(){s((function(e){return d+1}))},y={status:n.status,msg:n.msg,mobile:n.mobile,otp:n.otp};switch(m){case 1:return l.a.createElement(c.default,{nextStep:b,msgHandleChange:v,handleChange:h,value:y});case 2:return l.a.createElement(i.default,{nextStep:b,prevStep:function(){s((function(e){return e-1}))},handleChange:h,value:y});default:return l.a.createElement(c.default,{nextStep:b,msgHandleChange:v,handleChange:h,value:y})}}}}]);
//# sourceMappingURL=42.465d86ed.chunk.js.map