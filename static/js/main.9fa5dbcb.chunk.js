(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=(n(16),n(6)),i=n(8),u=n(2),l=n(4),b=n(11),m=n.n(b),j=(n(25),n(0));var d=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],b=i[1],m=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":b(a);break;default:return}};return Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),s(""),b("")},children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:"title",children:"Name:"}),Object(j.jsx)("input",{className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:m})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{className:"title",children:"Number:"}),Object(j.jsx)("input",{className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:m})]}),Object(j.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})};n(27);var O=function(e){var t=e.value,n=e.onChange;return Object(j.jsx)("input",{className:"input",type:"text",name:"filter",onChange:n,value:t,placeholder:"search contact"})};n(28);var f=function(e){var t=e.contacts,n=e.onRemove;return Object(j.jsx)("ul",{className:"list",children:t.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{className:"title",children:["Name: ",e.name]}),Object(j.jsxs)("p",{className:"title",children:["Number: ",e.number]}),Object(j.jsx)("button",{className:"button",onClick:function(){return n(e.id)},type:"button",children:"Delete"})]},e.id)}))})};var p=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.trim().toLowerCase())}))},h=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var v=function(){var e=Object(a.useState)({contacts:h,filter:""}),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&c((function(t){return Object(u.a)(Object(u.a)({},t),{},{contacts:e})}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{onSubmit:function(e){n.contacts.some((function(t){return t.name===e.name}))?alert("Contact alredy exists"):function(e){var t=JSON.parse(localStorage.getItem("contacts")),a=Object(u.a)({id:m.a.generate()},e);t?localStorage.setItem("contacts",JSON.stringify([].concat(Object(i.a)(t),[a]))):localStorage.setItem("contacts",JSON.stringify([].concat(Object(i.a)(n.contacts),[a]))),c((function(e){return Object(u.a)(Object(u.a)({},e),{},{contacts:[].concat(Object(i.a)(e.contacts),[a])})}))}(e)}}),Object(j.jsx)(O,{value:n.filter,onChange:function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},n,a))}))}}),Object(j.jsx)(f,{onRemove:function(e){var t=n.contacts.filter((function(t){return t.id!==e}));c((function(e){return Object(u.a)(Object(u.a)({},e),{},{contacts:t})})),localStorage.setItem("contacts",JSON.stringify(t))},contacts:p(n.contacts,n.filter)})]})};n(29);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9fa5dbcb.chunk.js.map