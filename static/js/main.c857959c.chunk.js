(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),o=c(6),l=c(2);var i=c(0),d=n.a.createContext();function j(e){var t=function(e,t){var c=n.a.useState(!0),a=Object(l.a)(c,2),s=a[0],r=a[1],o=n.a.useState(!1),i=Object(l.a)(o,2),d=i[0],j=i[1],u=n.a.useState(t),b=Object(l.a)(u,2),m=b[0],h=b[1];return n.a.useEffect((function(){setTimeout((function(){try{var c,a=localStorage.getItem(e);a?c=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),c=t),h(c),r(!1)}catch(d){j(d)}}),1500)}),[e,t]),{items:m,saveChangeItem:function(t){try{var c=JSON.stringify(t);localStorage.setItem(e,c),h(t)}catch(d){j(d)}},loading:s,error:d}}("Task_v1",[]),c=t.items,a=t.saveChangeItem,s=t.loading,r=t.error,j=n.a.useState(""),u=Object(l.a)(j,2),b=u[0],m=u[1],h=n.a.useState(!1),x=Object(l.a)(h,2),O=x[0],p=x[1],f=c.filter((function(e){return!!e.completed})).length,g=c.length,v=[];v=!b.length>0?c:c.filter((function(e){var t=e.text.toLowerCase(),c=b.toLowerCase();return t.includes(c)}));return Object(i.jsx)(d.Provider,{value:{loading:s,error:r,totalTasks:g,completedTask:f,searchValue:b,setSearchValue:m,searchedTasks:v,addTask:function(e){var t=Object(o.a)(c);t.push({completed:!1,text:e}),a(t)},completeTask:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(o.a)(c);n[t].completed=!0,a(n)},deleteTask:function(e){var t=c.findIndex((function(t){return t.text===e})),n=Object(o.a)(c);n.splice(t,1),a(n)},openModal:O,setOpenModal:p},children:e.children})}function u(){var e=n.a.useContext(d),t=e.totalTasks,c=e.completedTask;return Object(i.jsx)(a.Fragment,{children:Object(i.jsxs)("h2",{className:"task-counter text-center",children:["Has completado ",c," de ",t," tareas"]})})}function b(){var e=n.a.useContext(d),t=e.searchValue,c=e.setSearchValue;return Object(i.jsx)(a.Fragment,{children:Object(i.jsx)("input",{className:"form-control form-control-lg",type:"search",placeholder:"Buscar una tarea...",value:t,onChange:function(e){console.log("Buscando: "+e.target.value),c(e.target.value)}})})}function m(e){return Object(i.jsx)(a.Fragment,{children:Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})})}function h(e){return Object(i.jsx)(a.Fragment,{children:Object(i.jsxs)("li",{className:"task-item bg-light text-dark",children:[Object(i.jsx)("span",{className:"icon icon-check ".concat(e.completed&&"icon-check-active"),onClick:e.onComplete,children:Object(i.jsx)("i",{className:"fas fa-check-circle"})}),Object(i.jsx)("p",{className:"".concat(e.completed&&"task-item-completed"),children:e.text}),Object(i.jsx)("span",{className:"icon icon-delete",onClick:e.onDelete,children:Object(i.jsx)("i",{className:"fas fa-trash"})})]})})}function x(){var e=n.a.useState(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=n.a.useContext(d),r=s.addTask,o=s.setOpenModal;return Object(i.jsx)("div",{className:"row w-100",children:Object(i.jsx)("div",{className:"col-md-4 offset-md-4",children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),r(c),o(!1)},children:Object(i.jsx)("div",{class:"card bg-light text-dark",children:Object(i.jsxs)("div",{class:"card-body",children:[Object(i.jsxs)("div",{class:"form-group",children:[Object(i.jsx)("label",{className:"font-weight-bold",children:"Ingresa una nueva tarea"}),Object(i.jsx)("textarea",{value:c,onChange:function(e){a(e.target.value)},class:"form-control",rows:"3"})]}),Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsx)("div",{className:"col-6 pr-1",children:Object(i.jsx)("button",{className:"btn btn-white btn-block btn-sm pr-0",type:"button",onClick:function(){o(!1)},children:"Cancelar"})}),Object(i.jsx)("div",{className:"col-6 pl-1",children:Object(i.jsx)("button",{className:"btn btn-success btn-block btn-sm pl-0",type:"submit",children:"Crear"})})]})]})})})})})}function O(e){var t=n.a.useContext(d).openModal;return Object(i.jsx)(a.Fragment,{children:Object(i.jsx)("button",{className:"create-task-button bg-primary",onClick:function(){e.setOpenModal(!t)},children:Object(i.jsx)("i",{className:"fas fa-plus"})})})}function p(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"modal",children:t}),document.getElementById("modal"))}function f(){var e=n.a.useContext(d),t=e.error,c=e.loading,s=e.searchedTasks,r=e.completeTask,o=e.deleteTask,l=e.openModal,j=e.setOpenModal;return Object(i.jsx)(a.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(u,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(m,{children:[t&&Object(i.jsx)("p",{children:"Hubo un error..."}),c&&Object(i.jsx)("p",{children:"Estamos cargando..."}),!c&&!s.length&&Object(i.jsx)("p",{children:"Crear primer tarea..."}),s.map((function(e){return Object(i.jsx)(h,{text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return o(e.text)}},e.text)}))]}),!!l&&Object(i.jsx)(p,{children:Object(i.jsx)(x,{})}),Object(i.jsx)(O,{setOpenModal:j})]})})}c(13);var g=function(){return Object(i.jsx)(j,{children:Object(i.jsx)(f,{})})};r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c857959c.chunk.js.map