(this.webpackJsonpcypresse2e=this.webpackJsonpcypresse2e||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),r=n(15),c=n.n(r),i=(n(23),n(16)),l=n(18),o=n(6),d=n.n(o),u=(n(25),n(17)),p=n.n(u).a.create({baseURL:"https://reqres.in/api",headers:{"Content-type":"application/json"}}),j=n(0);var b=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),n=Object(s.useState)(null),a=Object(l.a)(n,2),r=a[0],c=a[1],o=function(e){return JSON.stringify(e,null,2)};function u(){return(u=Object(i.a)(d.a.mark((function n(){var s,a,r,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s={email:e.current.value,password:t.current.value},n.prev=1,n.next=4,p.post("https://reqres.in/api/login",s,{headers:{"x-access-token":"token-value"}});case 4:a=n.sent,r={status:a.status+" "+a.statusText,headers:a.headers,data:a.data},c(o(r)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),c(o((null===(i=n.t0.response)||void 0===i?void 0:i.data)||n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(j.jsxs)("div",{id:"app",className:"container my-3",children:[Object(j.jsx)("h3",{children:"Mega Login Plus triMax power"}),Object(j.jsxs)("div",{className:"card mt-3",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("code",{children:"eve.holt@reqres.in // cityslicka"})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control",ref:e,placeholder:"example@email.com","data-testid":"email"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"password",className:"form-control",ref:t,placeholder:"password","data-testid":"password"})}),Object(j.jsx)("button",{className:"btn btn-sm btn-primary",onClick:function(){return u.apply(this,arguments)},"data-testid":"button-send",children:"Secure Login"}),Object(j.jsx)("button",{className:"btn btn-sm btn-warning ml-2",onClick:function(){c(null)},children:"Clear"}),r&&Object(j.jsx)("div",{className:"alert alert-secondary mt-2",role:"alert","data-testid":"resume",children:Object(j.jsx)("pre",{children:r})})]})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}},[[45,1,2]]]);
//# sourceMappingURL=main.01eccfe2.chunk.js.map