(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),o=t(15),a=t.n(o),r=(t(20),t(6)),u=t(3),s=t(0),d=function(e){return Object(s.jsxs)("div",{children:["filter: ",Object(s.jsx)("input",{onChange:e.handleFilter,value:e.filter})]})},j=function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{onChange:e.handleNameChange,value:e.newName})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{onChange:e.handlePhoneChange,value:e.phone})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){return Object(s.jsx)("div",{children:e.filter?e.persons.filter((function(n){return n.name.includes(e.filter)})).map((function(e){return Object(s.jsxs)("p",{children:[e.name," ",e.phone]},e.id)})):e.persons.map((function(n){return Object(s.jsxs)("p",{children:[n.name," ",n.phone," ",Object(s.jsx)("button",{onClick:function(){return e.deletePerson(n.id,n.name)},children:"Delete"})]},n.id)}))})},b=t(4),f=t.n(b),l="/api/persons/",m=function(){return f.a.get(l).then((function(e){return e.data}))},O=function(e){return f.a.post(l,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(l).concat(e)).then((function(e){return e.data}))},x=function(e,n){return f.a.put("/api/persons/".concat(e),n).then((function(e){return e.data}))},v=function(e){return Object(s.jsxs)("div",{className:e.style,children:[e.text," ",e.name]})},g=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],i=n[1],o=Object(c.useState)(""),a=Object(u.a)(o,2),b=a[0],f=a[1],l=Object(c.useState)(""),g=Object(u.a)(l,2),w=g[0],S=g[1],k=Object(c.useState)(""),y=Object(u.a)(k,2),C=y[0],N=y[1],T=Object(c.useState)(!1),P=Object(u.a)(T,2),D=P[0],A=P[1],E=Object(c.useState)(""),F=Object(u.a)(E,2),J=F[0],B=F[1],I=Object(c.useState)(),M=Object(u.a)(I,2),U=M[0],q=M[1],z=Object(c.useState)("notification"),G=Object(u.a)(z,2),H=G[0],K=G[1];Object(c.useEffect)((function(){m().then((function(e){i(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),D&&Object(s.jsx)(v,{text:J,name:U,style:H}),Object(s.jsx)(d,{handleFilter:function(e){N(e.target.value)},filter:C}),Object(s.jsx)("h2",{children:"Add a new number"}),Object(s.jsx)(j,{handleSubmit:function(e){e.preventDefault();var n={name:b,phone:w};if(t.some((function(e){return e.name===b}))){var c=t.find((function(e){return e.name===b})),o=Object(r.a)(Object(r.a)({},c),{},{phone:w});window.confirm("".concat(b," ia already added to phonebook, replace the old number with a new one?"))&&x(c.id,o).then((function(e){i(t.map((function(n){return n.id!==c.id?n:e}))),K("notification"),B("Updated "),q(c.name),A(!D),setTimeout((function(){A(!1)}),5e3)})).catch((function(){K("warning"),B("This number was already deleted from the phonebook: "),q(c.name),A(!D),setTimeout((function(){A(!1)}),5e3)}))}else O(n).then((function(e){i(t.concat(e)),K("notification"),B("Added "),q(e.name),A(!D),setTimeout((function(){A(!1)}),5e3)}));f(""),S("")},handleNameChange:function(e){f(e.target.value)},handlePhoneChange:function(e){S(e.target.value)},newName:b,phone:w}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(h,{filter:C,persons:t,deletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&p(e).then((function(){var c=t.filter((function(n){return n.id!==e}));i(c),K("notification"),B("Succesfully deleted "),q(n),A(!D),setTimeout((function(){A(!1)}),5e3)})).catch((function(){K("warning"),B("Number is already deleted from the phonebook: "),q(n),A(!D),setTimeout((function(){A(!1)}),5e3)}))}})]})};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6d7be948.chunk.js.map