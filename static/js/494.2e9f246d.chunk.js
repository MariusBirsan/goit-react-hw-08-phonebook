"use strict";(self.webpackChunkGoIT_React_homework_8=self.webpackChunkGoIT_React_homework_8||[]).push([[494],{5494:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(3226),r=n(5861),c=n(9439),s=n(7757),o=n.n(s),i=n(2791),u=n(4420),l=n(1538),m=n(6052),d=function(){var e=(0,u.I0)();return{filter:(0,u.v9)((function(e){return e.contacts.filter})),contacts:(0,u.v9)((function(e){return e.contacts.items})),isLoaging:(0,u.v9)((function(e){return e.contacts.loader})),error:(0,u.v9)((function(e){return e.contacts.error})),setFilter:function(t){e((0,l.M)(t))},getContacts:function(){e(m.m.getContacts())},addContact:function(t){e(m.m.addContact(t))},deleteContact:function(t){e(m.m.deleteContact(t))}}},f=n(3166),h=n(3329),p=function(){var e=d(),t=e.contacts,n=e.addContact,s=(0,i.useState)(""),u=(0,c.Z)(s,2),l=u[0],m=u[1],p=(0,i.useState)(""),v=(0,c.Z)(p,2),_=v[0],b=v[1],x=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":m(a);break;case"number":b(a)}console.log(n,a)},j=function(){var e=(0,r.Z)(o().mark((function e(a){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),(r=t.some((function(e){return e.name===l.toLowerCase()&&e.number===_||e.number===_})))?(0,f.Rr)("".concat(l," or ").concat(_," is already in contacts")):n({name:l,number:_}),!r&&(0,f.Qm)("the contact is in the list  \ud83d\ude03"),m(""),b("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:a.Z.cont__container,children:(0,h.jsxs)("form",{className:a.Z.form__container,onSubmit:j,children:[(0,h.jsx)("input",{type:"text",name:"name",value:l,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x}),(0,h.jsx)("input",{type:"tel",name:"number",value:_,placeholder:"phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"number number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x}),(0,h.jsx)("button",{type:"submit ",className:a.Z.form__btn,children:"Add contact"})]})})},v=function(){var e=d(),t=e.filter,n=e.setFilter;return(0,h.jsxs)("div",{className:a.Z.cont__container,children:[(0,h.jsx)("h2",{className:a.Z.home__title,children:"Filter contacts by name"}),(0,h.jsx)("input",{type:"text",name:"filter",value:t,placeholder:"Find contact by name",onChange:function(e){return n(e.target.value)}})]})},_=n(7784),b=n(9869),x=function(){var e=(0,u.v9)(b.Z.getIsLoggedIn),t=(0,u.I0)(),n=d(),r=n.contacts,c=n.isLoaging,s=n.filter,o=n.deleteContact,l=n.setFilter;(0,i.useEffect)((function(){t(m.m.getContacts())}),[t]);var p=function(){var e=s.toLowerCase();if(r)return r.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return(0,h.jsxs)("div",{children:[c&&(0,h.jsx)(_.a,{}),e&&(0,h.jsx)("ul",{className:a.Z.items__container,children:r&&p.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,h.jsxs)("li",{className:a.Z.item,children:[(0,h.jsxs)("h3",{className:a.Z.item__name,children:[n,":"]}),(0,h.jsx)("p",{className:a.Z.item__name,children:r}),(0,h.jsx)("button",{className:a.Z.user__btn,type:"button",onClick:function(){o(t),(0,f.v7)("".concat(n," tel:").concat(r," is deleted")),l("")},children:"Delete"})]},t)}))})]})},j=function(){return(0,h.jsxs)("div",{className:a.Z.view__container,children:[(0,h.jsx)("h2",{className:a.Z.home__title,children:"Enter a name and phone number to add a contact"}),(0,h.jsx)(p,{}),(0,h.jsx)(v,{}),(0,h.jsx)(x,{})]})}}}]);
//# sourceMappingURL=494.2e9f246d.chunk.js.map