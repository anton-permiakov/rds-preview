(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"10Bd":function(e,a,l){var t=l("q1tI");function n(e){return t.createElement("svg",e,t.createElement("path",{fillRule:"evenodd",d:"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"}))}n.defaultProps={width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrows-angle-expand",fill:"currentColor"},e.exports=n,n.default=n},OYZA:function(e,a,l){"use strict";l.r(a),l.d(a,"default",(function(){return w}));var t=l("dI71"),n=l("q1tI"),s=l.n(n),c=l("+ryr"),r=l("ZyRx"),i=l("Bl7J"),o=function(e){return console.log(e),s.a.createElement("span",{className:e.className},s.a.createElement("input",{type:"checkbox",className:"check-box",id:e.id,checked:e.checked,disabled:e.disabled}),s.a.createElement("label",{htmlFor:e.id}))};o.defaultProps={id:"cb0"};var m=o,d=function(e){return s.a.createElement("span",{className:e.className},s.a.createElement("input",{type:"radio",className:"radio-box",id:e.id,name:e.name,defaultChecked:e.defaultChecked,disabled:e.disabled}),s.a.createElement("label",{htmlFor:e.id}))};d.defaultProps={id:"rad0"};var u=d,p=function(e){return s.a.createElement(s.a.Fragment,null,e.label?s.a.createElement("label",null,e.label):null,s.a.createElement("input",{type:"text",disabled:e.disabled,className:"form-control"+(e.size?" form-control-"+e.size:"")+(e.invalid?" is-invalid":""),placeholder:e.placeholder}),e.invalid?s.a.createElement("div",{className:"invalid-feedback"},e.validationMessage):null)};p.defaultProps={validationMessage:"Error message here"};var v=p,b=function(e){return s.a.createElement(s.a.Fragment,null,e.label?s.a.createElement("label",null,e.label):null,s.a.createElement("select",{type:"text",disabled:e.disabled,className:"form-control"+(e.size?" form-control-"+e.size:"")+(e.invalid?" is-invalid":"")},s.a.createElement("option",null,"Please select"),e.options.map((function(e,a){return s.a.createElement("option",{key:a,value:e.value},e.name)}))),e.invalid?s.a.createElement("div",{className:"invalid-feedback"},e.validationMessage):null)};b.defaultProps={options:[{name:"Option 1",value:"1"},{name:"Option 2",value:"2"},{name:"Option 3",value:"3"},{name:"Option 4",value:"4"},{name:"Option 5",value:"5"}],validationMessage:"Error message here"};var E=b,h=l("v6wv"),f=l.n(h),N=l("10Bd"),g=l.n(N),y=l("y53C"),k=l.n(y),x=l("vrFN"),w=function(e){function a(a){var l;return(l=e.call(this,a)||this).handleDisableAllClick=function(){l.setState({disabled:!l.state.disabled})},l.state={disabled:!1},l}return Object(t.a)(a,e),a.prototype.render=function(){return s.a.createElement(i.a,null,s.a.createElement(x.a,{title:"Forms"}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"island px-4 py-3 mb-3"},s.a.createElement("h2",null,s.a.createElement(f.a,{className:"mr-2"}),"Basic Form Elements",s.a.createElement("button",{className:"btn btn-link mt-2 mt-sm-0 ml-auto",onClick:this.handleDisableAllClick},this.state.disabled?"Enable":"Disable"," all")),s.a.createElement("div",{className:"mt-3 row"},s.a.createElement("div",{className:"col-md"},s.a.createElement("div",{className:"form-group"},s.a.createElement(v,{placeholder:"Placeholder",label:"Regular Input",disabled:this.state.disabled}))),s.a.createElement("div",{className:"col-md"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Select"),s.a.createElement("select",{className:"form-control",disabled:this.state.disabled},s.a.createElement("option",null,"Please select"),s.a.createElement("option",{value:"1"},"Option 1"),s.a.createElement("option",{value:"2"},"Option 2"),s.a.createElement("option",{value:"3"},"Option 3"),s.a.createElement("option",{value:"4"},"Option 4"),s.a.createElement("option",{value:"5"},"Option 5")))),s.a.createElement("div",{className:"col-md"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"d-block"},"Checkbox"),s.a.createElement(m,{id:"cb1",disabled:this.state.disabled}),s.a.createElement(m,{className:"ml-3",id:"cb-2",checked:!0,disabled:this.state.disabled}))),s.a.createElement("div",{className:"col-md"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"d-block"},"Radio"),s.a.createElement(u,{name:"radio",id:"rad1",defaultChecked:!0,disabled:this.state.disabled}),s.a.createElement(u,{name:"radio",id:"rad2",className:"ml-3",disabled:this.state.disabled})))),s.a.createElement("div",{className:"mt-3"},s.a.createElement(c.a,{language:"html",style:r.a,className:"rounded",showLineNumbers:"true"},'<div class="form-group">\n  <label>Regular Input</label>\n  <input class="form-control" type="text" placeholder="Placeholder" />\n</div>\n<div class="form-group">\n  <label>Select</label>\n  <select class="form-control">\n    <option>Please select</option>\n  </select>\n</div>\n<div class="form-group">\n  <span>\n    <input type="checkbox" class="check-box" id="cb1" />\n    <label for="cb1"></label>\n  </span>\n</div>\n<div class="form-group">\n  <span>\n    <input type="radio" class="radio-box" id="rad1" />\n    <label for="rad1"></label>\n  </span>\n</div>'))),s.a.createElement("div",{className:"island px-4 py-2 mb-3"},s.a.createElement("h2",null,s.a.createElement(g.a,{className:"mr-2"}),"Sizing"),s.a.createElement("div",{className:"mt-3 row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"form-group"},s.a.createElement(v,{size:"lg",placeholder:"Large input",label:"Large input"})),s.a.createElement("div",{className:"form-group"},s.a.createElement(v,{size:"sm",placeholder:"Small input",label:"Small input"}))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"form-group"},s.a.createElement(E,{size:"lg",label:"Large select"})),s.a.createElement("div",{className:"form-group"},s.a.createElement(E,{size:"sm",label:"Small select"})))),s.a.createElement("div",{className:"mt-3"},s.a.createElement(c.a,{language:"html",style:r.a,className:"rounded",showLineNumbers:"true"},'<input type="text" class="form-control form-control-lg" placeholder="Large input">\n<input type="text" class="form-control form-control-lg" placeholder="Large input">\n\n<select type="text" class="form-control form-control-lg">\n  <option>Please select</option>\n</select>\n<select type="text" class="form-control form-control-lg">\n  <option>Please select</option>\n</select>'))),s.a.createElement("div",{className:"island px-4 py-3 mb-3"},s.a.createElement("h2",null,s.a.createElement(k.a,{className:"mr-2"}),"Validation"),s.a.createElement("div",{className:"mt-3 row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"form-group"},s.a.createElement(v,{placeholder:"Invalid input",label:"Invalid input",invalid:!0}))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"form-group"},s.a.createElement(E,{label:"Invalid select",invalid:!0})))),s.a.createElement("div",{className:"mt-3"},s.a.createElement(c.a,{language:"html",style:r.a,className:"rounded",showLineNumbers:"true"},'<input type="text" class="form-control is-invalid" placeholder="Invalid input">\n<select type="text" class="form-control is-invalid">\n  <option>Please select</option>\n</select>')))))},a}(s.a.Component)},y53C:function(e,a,l){var t=l("q1tI");function n(e){return t.createElement("svg",e,[t.createElement("path",{fillRule:"evenodd",d:"M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z",key:0}),t.createElement("path",{fillRule:"evenodd",d:"M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z",key:1})])}n.defaultProps={width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-card-checklist",fill:"currentColor"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-forms-js-e10e6c39cbeb7481b304.js.map