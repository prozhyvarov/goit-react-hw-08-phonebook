"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[119],{5119:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,o,a,i,c,s,u,l,d,p,f,x=t(9439),b=t(2791),m=t(9101),h=t(8951),g=t(168),Z=t(6444),y=Z.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* margin: 0 auto; */\n  width: 400px;\n  padding: 12px;\n  font-weight: 500;\n  background-color: black;\n  border: 3px solid #fba003;\n  border-radius: 8px;\n"]))),v=Z.ZP.input(o||(o=(0,g.Z)(["\n  margin-top: 10px;\n  padding: 6px 10px;\n  border: 3px solid #fba003;\n  border-radius: 5px;\n  font: inherit;\n  cursor: pointer;\n"]))),j=(Z.ZP.label(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  color: #fba003;\n  font-size: 20px;\n"]))),Z.ZP.button(i||(i=(0,g.Z)(["\n  padding: 6px 10px;\n  margin-top: 10px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 3px solid #fba003;\n  color: #fba003;\n  font-size: 20px;\n \n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background-color: #fba003;\n    cursor: pointer;\n  }\n"])))),k=t(1686),C=t.n(k),w=t(184),P=function(){var n=(0,m.useDispatch)(),e=(0,b.useState)(""),t=(0,x.Z)(e,2),r=t[0],o=t[1],a=(0,b.useState)(""),i=(0,x.Z)(a,2),c=i[0],s=i[1];(0,b.useEffect)((function(){n((0,h.getContactsThunk)())}),[n]);var u=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?o(r):s(r)},l=(0,m.useSelector)((function(n){return n.contacts.items}));return(0,w.jsxs)(y,{onSubmit:function(e){var t={name:r,number:c};e.preventDefault(),l.some((function(n){return n.name.toLocaleLowerCase()===r.toLocaleLowerCase()}))?C().Notify.warning("".concat(r," is alredy in contacts")):(n((0,h.addContactsThunk)(t)),o(""),s(""))},children:[(0,w.jsx)(v,{value:r,onChange:u,type:"text",name:"name",placeholder:"Name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})," ",(0,w.jsx)(v,{value:c,onChange:u,type:"tel",name:"number",placeholder:"Number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,w.jsx)(j,{type:"submit",children:"Add"})]})},L=t(6364),S=Z.ZP.div(c||(c=(0,g.Z)(["\ndisplay:flex;\njustify-content:center;\nalign-items: center;\n  margin-bottom: 15px;\n"]))),_=Z.ZP.label(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #000;\n  font-size: 20px;\n"]))),z=Z.ZP.input(u||(u=(0,g.Z)(["\n  width: 400px;\n  margin-top: 10px;\n  padding: 8px;\n  margin: 0 auto;\n  border-radius: 8px;\n  border: 3px solid #fba003;\n"]))),D=function(){var n=(0,m.useSelector)((function(n){return n.filter})),e=(0,m.useDispatch)();return(0,w.jsx)(S,{children:(0,w.jsxs)(_,{children:["Find contacts by name",(0,w.jsx)(z,{value:n,onChange:function(n){return e((0,L.W1)(n.currentTarget.value))},type:"text",name:"filter",placeholder:"Search contacts by name"})]})})},T=Z.ZP.ul(l||(l=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  border-radius: 8px;\n  background-color: black;\n  border: 3px solid #fba003;\n  list-style: none;\n"]))),N=Z.ZP.li(d||(d=(0,g.Z)(["\n  background-color: #ffffff;\n  border: 3px solid #fba003;\n  padding: 6px;\n  border-radius: 8px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n"]))),A=Z.ZP.button(p||(p=(0,g.Z)(["\n  padding: 2px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 8px 8px;\n  border: 3px solid #fba003;\n  color: #fba003;\n  background-color: #e8e8e8;\n  &:hover,\n  &:focus {\n    color: #fff;\n    background-color: #fba003;\n    cursor: pointer;\n  }\n"]))),q=(0,t(6916).P1)([function(n){return n.contacts.items},function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),E=function(){var n=(0,m.useDispatch)(),e=(0,m.useSelector)(q);return(0,w.jsx)(T,{children:e.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,w.jsxs)(N,{children:[r+" : "+o,(0,w.jsx)(A,{type:"button",name:"delete",onClick:function(){n((0,h.delContactsThunk)(t))},children:"delete"})]},t)}))})},F=Z.ZP.div(f||(f=(0,g.Z)(["\n  width: 1380px;\n  padding: 10px;\n  margin: 0 auto;\n  display:flex;\n  gap: 20px;\n  justify-content:center;\n  align-items:center;\n"]))),B=t(2791).useEffect,J=t(9101),M=J.useDispatch,W=J.useSelector,G=t(8951).getContactsThunk,H=function(){var n=M(),e=W((function(n){return n.contacts.items})),t=W((function(n){return n.filter}));return B((function(){n(G)}),[n]),(0,w.jsxs)(F,{children:[(0,w.jsx)(P,{}),(0,w.jsxs)("div",{children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{listContact:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})]})]})}}}]);
//# sourceMappingURL=119.4c5db07c.chunk.js.map