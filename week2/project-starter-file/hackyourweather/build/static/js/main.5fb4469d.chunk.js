(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),i=c(5),a=c.n(i),s=(c(11),c(2)),j=function(e){var t=e.city,c=e.error,r=e.loading,i=t.name,a=t.sys,s=t.weather,j=t.main,o=t.coord;return Object(n.jsxs)("div",{className:"Card",children:[r&&Object(n.jsx)("p",{children:"is loading..."}),c?Object(n.jsx)("p",{children:c}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{children:[i,", ",a.country]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:s[0].main}),Object(n.jsx)("h5",{children:s[0].description})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"min temp:"}),Object(n.jsx)("span",{children:j.temp_min})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"max temp:"}),Object(n.jsx)("label",{children:j.temp_max})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"location:"}),Object(n.jsxs)("span",{children:[o.lat,",",o.lon]})]})]})]})},o=function(e){var t=e.fetchApi;return Object(n.jsxs)("form",{className:"forminput",onSubmit:t,children:[Object(n.jsx)("input",{placeholder:"Serach city",autoComplete:"off",name:"location",type:"text"}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Search"})})]})};c(12).config();var l=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)(),l=Object(s.a)(a,2),h=l[0],d=l[1],b=Object(r.useState)(),p=Object(s.a)(b,2),O=p[0],u=p[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{fetchApi:function(e){d(!1),e.preventDefault();var t=e.target.elements.location.value;return t?(i(!0),fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("f09fc994c6dc1ae771cbe6b178c9b7c7","&units=metric")).then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){return d(e)})).finally(i(!1))):d("Please Enter the name of city.")}}),O&&Object(n.jsx)(j,{city:O,error:h,loading:c})]})};var h=function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Weather"}),Object(n.jsx)(l,{})]})};a.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5fb4469d.chunk.js.map