(this.webpackJsonpflashcards=this.webpackJsonpflashcards||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},44:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),s=c(30),r=c.n(s),l=(c(37),c(27)),i=c(11),j=c(8),d=(c(38),c(2)),o=function(e){var t=e.card,c=e.handleFlipCard;return Object(d.jsx)("section",{children:t&&Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card__front",children:Object(d.jsx)("p",{children:t.question})}),Object(d.jsx)("div",{className:"card__back",children:Object(d.jsx)("p",{className:"answer",children:t.answer})})]}),Object(d.jsx)("button",{className:"card__flip-btn",onClick:c,children:"FLIP"})]})})},u=(c(40),function(){return Object(d.jsx)("div",{className:"loader"})}),b=c(26);b.a.initializeApp({apiKey:"AIzaSyCQTlVD1iuJMKU5zUQjpIu8oB7J86SlN5Q",authDomain:"flashcards-3afb5.firebaseapp.com",projectId:"flashcards-3afb5",storageBucket:"flashcards-3afb5.appspot.com",messagingSenderId:"550626058461",appId:"1:550626058461:web:1e7b748f277bd83cc13b34"});var h=b.a,O=(c(44),function(){var e=Object(j.g)().deckName,t=Object(a.useState)(0),c=Object(i.a)(t,2),n=c[0],s=(c[1],Object(a.useState)(0)),r=Object(i.a)(s,2),b=r[0],O=r[1],f=Object(a.useState)(null),m=Object(i.a)(f,2),x=m[0],p=m[1],v=Object(a.useState)(null),N=Object(i.a)(v,2),_=N[0],S=N[1];Object(a.useEffect)((function(){h.database().ref("decks/"+e).once("value",(function(e){var t=[],c=e.val();for(var a in c)t.push(c[a]);p(t),S(t.length)}))}),[]);var k=function(){document.querySelector(".answer").classList.add("hide"),document.querySelector(".card").classList.remove("card__flip"),document.querySelectorAll(".btn").forEach((function(e){return e.disabled=!0}));var e=Object(l.a)(x);e.splice(n,1),O(b+1),p(e)},g=function(){document.querySelector(".answer").classList.add("hide"),document.querySelector(".card").classList.remove("card__flip"),document.querySelectorAll(".btn").forEach((function(e){return e.disabled=!0}));var e=Object(l.a)(x);e.push(x[n]),e.splice(n,1),p(e)};return Object(d.jsxs)("div",{className:"content",children:[b===_&&Object(d.jsx)("h3",{className:"congratulations",children:"CONGRATULATIONS"}),_&&Object(d.jsxs)("p",{className:"completed",children:["completed ",b,"/",_]}),x?Object(d.jsx)(o,{card:x[n],handleFlipCard:function(){document.querySelector(".answer").classList.remove("hide"),document.querySelector(".card").classList.toggle("card__flip"),document.querySelectorAll(".btn").forEach((function(e){return e.disabled=!1}))},handleSkipClick:g,handleGoodClick:k}):Object(d.jsx)(u,{}),x&&b<_&&Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{className:"btn btn--skip",onClick:g,children:"\ud83d\udc4e"}),Object(d.jsx)("button",{className:"btn btn--good",onClick:k,children:"\ud83d\udc4d"})]})]})}),f=c(12),m=(c(49),function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){h.database().ref("decks").once("value",(function(e){var t=[],c=e.val();for(var a in c)t.push(a);n(t)}))}),[]),Object(d.jsx)("main",{className:"content",children:c?Object(d.jsx)("div",{className:"decks__container",children:c.map((function(e){return Object(d.jsxs)("section",{className:"select",children:[Object(d.jsx)("h2",{className:"select__name",children:e}),Object(d.jsx)(f.b,{to:"/practice/".concat(e),children:Object(d.jsx)("button",{className:"select__btn",children:"start"})})]},e+Math.random())}))}):Object(d.jsx)(u,{})})}),x=(c(50),function(){return Object(d.jsxs)("div",{className:"wrapper-nav",children:[Object(d.jsx)(f.b,{to:"/",children:Object(d.jsx)("h1",{className:"logo",children:"Flashcards"})}),Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)(f.c,{exact:!0,to:"/",children:"Home"}),Object(d.jsx)(f.c,{to:"/create",children:"Create"}),Object(d.jsx)(f.c,{to:"/add",children:"Add"})]})]})}),p=(c(51),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),O=b[0],f=b[1],m=Object(j.f)(),x=function(){n(""),o(""),f("")};return Object(d.jsxs)("section",{className:"content",children:[Object(d.jsx)("h2",{className:"create__header",children:"Create deck"}),Object(d.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),c&&l&&O){var t=h.database().ref("decks/"+c),a={question:l,answer:O};t.push(a)}x(),m.push("/")},children:[Object(d.jsx)("input",{className:"form__input form__input--name",type:"text",placeholder:"deck name...",value:c,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("input",{className:"form__input",type:"text",placeholder:"question...",value:l,onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("input",{className:"form__input",type:"text",placeholder:"answer...",value:O,onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("button",{className:"form__btn",children:"Create"})]})]})}),v=(c(52),function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),l=r[0],j=r[1],o=Object(a.useState)(""),b=Object(i.a)(o,2),O=b[0],f=b[1];Object(a.useEffect)((function(){h.database().ref("decks").once("value",(function(e){var t=[],c=e.val();for(var a in c)t.push(a);n(t)}))}),[]);var m=function(){j(""),f("")};return Object(d.jsxs)("section",{className:"content",children:[Object(d.jsx)("h2",{className:"add__header",children:"Add card"}),c?Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=document.getElementById("select-deck");if(l&&O){var c=h.database().ref("decks/"+t.value),a={question:l,answer:O};c.push(a),c.off(),m()}},children:[Object(d.jsxs)("div",{className:"form__selection",children:[Object(d.jsx)("label",{for:"select-deck",children:"Deck:"}),c&&Object(d.jsx)("select",{className:"form__deck-select",id:"select-deck",children:c.map((function(e){return Object(d.jsx)("option",{children:e},e)}))})]}),Object(d.jsx)("input",{className:"form__input",type:"text",placeholder:"question...",value:l,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("input",{className:"form__input",type:"text",placeholder:"answer...",value:O,onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("button",{className:"form__btn",children:"Add"})]}):Object(d.jsx)(u,{})]})}),N=(c(53),function(){return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Sorry"}),Object(d.jsx)("p",{children:"That page cannot be found"}),Object(d.jsx)(f.b,{to:"/",children:Object(d.jsx)("button",{className:"not-found__btn",children:"Back to home page"})})]})});var _=function(){return Object(d.jsx)(f.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/flashcards",children:Object(d.jsx)(m,{})}),Object(d.jsx)(j.a,{path:"/practice/:deckName",children:Object(d.jsx)(O,{})}),Object(d.jsx)(j.a,{path:"/create",children:Object(d.jsx)(p,{})}),Object(d.jsx)(j.a,{path:"/add",children:Object(d.jsx)(v,{})}),Object(d.jsx)(j.a,{exact:!0,path:"*",children:Object(d.jsx)(N,{})})]}),Object(d.jsx)(x,{})]})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.a17933f1.chunk.js.map