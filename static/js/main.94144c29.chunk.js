(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,_,t){e.exports=t(20)},15:function(e,_,t){},17:function(e,_,t){},20:function(e,_,t){"use strict";t.r(_);var a=t(0),s=t.n(a),l=t(3),r=t.n(l),i=(t(15),t(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_App_scss__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17),_App_scss__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_7__),Button=function(e){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"btn",id:e.id,onClick:function(_){var t=document.getElementById(_.target.id),a=t.style.backgroundColor,s=_.target.innerHTML;/\d|\./.test(s)?t.style.backgroundColor="#726e6e":/x|\-|\+|\/|\=/.test(s)?t.style.backgroundColor="#0d4887":t.style.backgroundColor="#8e1515",setTimeout(function(){return t.style.backgroundColor=a},100),e.onClick(_)}},e.value)},App=function(_React$Component){function App(e){var _;return Object(C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(_=Object(C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,e))).state={display:"0",formula:"",isOperatorClicked:!1},_.handleClick=_.handleClick.bind(Object(C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(Object(C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.a)(_))),_}return Object(C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component),Object(C_Users_memlol_myRepository_JS_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleClick",value:function handleClick(e){var input=e.target.innerHTML;switch(input){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":"0"===this.state.display||this.state.isOperatorClicked?this.setState({display:input,isOperatorClicked:!1}):this.setState(function(e){return{display:e.display+input}});break;case".":this.setState(function(e){return{display:/\./.test(e.display)?e.display:"0"===e.display?"0.":e.display+input}});break;case"+":case"-":case"/":case"x":this.setState(function(e){return{formula:e.isOperatorClicked?"".concat(e.formula.slice(0,e.formula.length-1)," ").concat(input):"".concat(e.formula," ").concat(e.display," ").concat(input),isOperatorClicked:!0}});break;case"C":this.setState({display:"0",formula:""});break;case"DEL":this.state.isOperatorClicked||this.setState(function(e){return{display:e.display.length>1?e.display.slice(0,e.display.length-1):"0"}});break;case"=":var expression=this.state.formula.replace(/x/g,"*")+this.state.display;expression=Math.round(1e9*eval(expression))/1e9,this.setState({display:expression.toString(),formula:""})}}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"formula"},this.state.formula),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:"display"},this.state.display),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"grid"},btns.map(function(_){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{value:_.value,id:_.id,onClick:e.handleClick})})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),btns=[{value:"C",id:"clear"},{value:"DEL",id:"delete"},{value:"/",id:"divide"},{value:"7",id:"seven"},{value:"8",id:"eight"},{value:"9",id:"nine"},{value:"x",id:"multiply"},{value:"4",id:"four"},{value:"5",id:"five"},{value:"6",id:"six"},{value:"-",id:"subtract"},{value:"1",id:"one"},{value:"2",id:"two"},{value:"3",id:"three"},{value:"+",id:"add"},{value:"0",id:"zero"},{value:".",id:"decimal"},{value:"=",id:"equals"}];__webpack_exports__.a=App}},[[10,2,1]]]);
//# sourceMappingURL=main.94144c29.chunk.js.map