(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{37:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(28),a=n.n(r),o=(n(37),n(32)),s=n(14),l=n(10),i=n(29),j=n.n(i),d=n(8),u=n(2),b=n(1),h=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(b.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};h.defaultProps={color:"steelblue"};var O=h,x=function(e){var t=e.title,n=e.onAdd,c=e.showAdd,r=Object(u.e)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),"/"===r.pathname&&Object(b.jsx)(O,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracker"};var f=x,m=function(){return Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("h4",{children:"Version 1.0.0"}),Object(b.jsx)(d.b,{className:"about-link",to:"/",children:"Go Back"})]})},k=n(31),p=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text,Object(b.jsx)(k.a,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})]}),Object(b.jsx)("p",{children:t.day})]})},v=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsx)(p,{task:e,onDelete:n,onToggle:c},t)}))})},g=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],d=i[1],u=Object(c.useState)(!1),h=Object(l.a)(u,2),O=h[0],x=h[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:j,reminder:O}),o(""),d(""),x(!1)):alert("Please add a task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day & Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},T=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)("p",{children:"Copyrigh \xa9 2021"}),Object(b.jsx)(d.b,{className:"footer-link",to:"/about",children:"About"})]})};var N=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(l.a)(a,2),h=i[0],O=i[1];Object(c.useEffect)((function(){j.a.get("http://localhost:5000/tasks").then((function(e){return O(e.data)}))}),[]);var x=function(e){var t=Math.floor(1e4*Math.random()+1),n=Object(s.a)({id:t},e);O([].concat(Object(o.a)(h),[n]))},k=function(e){O(h.filter((function(t){return t.id!==e})))},p=function(e){O(h.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t})))};return Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f,{onAdd:function(){return r(!n)},showAdd:n}),Object(b.jsx)(u.a,{path:"/",exact:!0,render:function(e){return Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(g,{onAdd:x}),h.length>0?Object(b.jsx)(v,{tasks:h,onDelete:k,onToggle:p}):"No Tasks To Show"]})}}),Object(b.jsx)(u.a,{path:"/about",exact:!0,component:m}),Object(b.jsx)(T,{})]})})};a.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.9dd57598.chunk.js.map