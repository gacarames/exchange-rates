(this["webpackJsonpmy-app-temp"]=this["webpackJsonpmy-app-temp"]||[]).push([[0],{79:function(e,c,a){},87:function(e,c,a){},88:function(e,c,a){"use strict";a.r(c);var n,t,r=a(2),s=a.n(r),j=a(64),h=a.n(j),i=(a(79),a(56)),x=a(7),l=a(48),d=a(113),b=a(115),o=a(117),g=a(118),p=a(5),O=Object(d.a)(n||(n=Object(l.a)(["\n  query GetExchangeRates($exchangeName: String!) {\n    exchange(exchangeName: $exchangeName) {\n      compra\n      venta\n    }\n  }\n"]))),m=function(e){var c=e.exchangeName,a=Object(b.a)(O,{variables:{exchangeName:c}}),n=a.loading,t=a.error,r=a.data;return n?Object(p.jsx)("p",{children:"Loading..."}):t?Object(p.jsx)("p",{children:"Error :("}):Object(p.jsx)(o.a,{children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)("h4",{children:c}),Object(p.jsxs)("span",{children:["$",r.exchange.compra," / "]}),Object(p.jsxs)("span",{children:["$",r.exchange.venta]}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:r.exchange.fecha})})]})})},u=Object(d.a)(t||(t=Object(l.a)(["\n  query GetExchangeRates($exchangeName: String!) {\n    exchange(exchangeName: $exchangeName) {\n      compra\n      venta\n    }\n  }\n"]))),N=function(){var e=Object(x.g)().id,c=Object(b.a)(u,{variables:{exchangeName:e}}),a=c.loading,n=c.error,t=c.data;return a?Object(p.jsx)("p",{children:"Loading..."}):n?Object(p.jsx)("p",{children:"Error :("}):Object(p.jsxs)("div",{className:"widget-currency-col",children:[Object(p.jsx)("h4",{children:e}),Object(p.jsxs)("span",{children:["$",t.exchange.compra," / "]}),Object(p.jsxs)("span",{children:["$",t.exchange.venta]}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:t.exchange.fecha})})]})},v=a.p+"static/media/logo.6ce24c58.svg";a(87);var f=function(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{path:"/",element:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:v,className:"App-logo",alt:"logo"}),Object(p.jsxs)("p",{children:["Edit ",Object(p.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(p.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})}),Object(p.jsx)(x.a,{exact:!0,path:"/exchanges",element:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{exchangeName:"dolarbolsa"}),Object(p.jsx)(m,{exchangeName:"dolarblue"}),Object(p.jsx)(m,{exchangeName:"dolarpromedio"}),Object(p.jsx)(m,{exchangeName:"contadoliqui"})]})}),Object(p.jsx)(x.a,{exact:!0,path:"/exchanges/:id",element:Object(p.jsx)(N,{})})]})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(c){var a=c.getCLS,n=c.getFID,t=c.getFCP,r=c.getLCP,s=c.getTTFB;a(e),n(e),t(e),r(e),s(e)}))},y=a(112),E=a(114),w=a(111),A=new y.a({uri:"http://localhost:4000/",cache:new E.a});h.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(w.a,{client:A,children:Object(p.jsx)(f,{})})}),document.getElementById("root")),$()}},[[88,1,2]]]);
//# sourceMappingURL=main.2189bf77.chunk.js.map