(this["webpackJsonpspa-app"]=this["webpackJsonpspa-app"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(16),r=c.n(n),i=(c(40),c(28)),l=(c(41),c(54)),j=c(55),o=(c(19),c(10)),b=c(5),d=c.p+"static/media/aboutimg.5131a74c.jpeg",x=(c(42),c(56)),O=c(35),m=c(23),h=c(1);var u=function(e){var t=Object(a.useState)(""),c=Object(m.a)(t,2),s=c[0],n=c[1];return Object(h.jsxs)("form",{className:"comment-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:s}),n("")},children:[Object(h.jsx)("input",{type:"text",placeholder:"Add a comment about your experience",value:s,name:"text",className:"comment-form",onChange:function(e){n(e.target.value)}}),Object(h.jsx)("button",{className:"btn btn-light",children:"Submit"})]})};var p=function(e){return e.comments.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{children:e.text})},t)}))};var v=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],s=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"card-title",children:"TESTIMONIALS"}),Object(h.jsx)(u,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(O.a)(c));s(t)}}}),Object(h.jsx)(p,{comments:c})]})};var N=function(){return Object(h.jsxs)("div",{className:"about-container",children:[Object(h.jsx)(x.a,{className:"text-center",children:Object(h.jsxs)(x.a.Body,{className:"card-body",style:{width:"70%",margin:"auto"},children:[Object(h.jsx)(x.a.Title,{className:"card-title",children:"ABOUT US"}),Object(h.jsx)(x.a.Img,{variant:"top",src:d}),Object(h.jsx)(x.a.Text,{className:"text",children:"Located in Denver, Colorado since 2016. Visit us for a day of serene relaxation."}),Object(h.jsx)(o.b,{to:"/contact",className:"btn btn-light",size:"lg",children:"CONTACT US"})]})}),Object(h.jsx)(v,{})]})},f=c.p+"static/media/spa.9c208702.jpeg";var g=function(){return Object(h.jsx)("div",{className:"contact-container",children:Object(h.jsx)(x.a,{className:"text-center",children:Object(h.jsxs)(x.a.Body,{className:"card-body",style:{width:"70%",margin:"auto",height:"100vh"},children:[Object(h.jsx)(x.a.Title,{className:"card-title",children:"CONTACT US"}),Object(h.jsxs)(x.a.Text,{className:"text",children:[Object(h.jsx)("ul",{children:"EMAIL: contactus@spamed.com"}),Object(h.jsx)("ul",{children:"PHONE: 303-415-1234"}),Object(h.jsx)("ul",{children:"ADDRESS: 4321 1st Ave Denver, CO"})]}),Object(h.jsx)(x.a.Img,{variant:"top",src:f})]})})})},y=c.p+"static/media/laser.5680b8e4.jpeg",S=c.p+"static/media/facial.778a995d.jpeg",T=c.p+"static/media/massage.fae179ba.jpeg";var A=function(){var e={height:"100vh",textAlign:"center"},t={fontSize:"25px"};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(x.a,{className:"text-center col-sm-12",children:Object(h.jsx)(x.a.Title,{className:"card-title",children:"SERVICES"})})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(x.a,{className:"text-center col-sm-4",children:Object(h.jsxs)(x.a.Body,{className:"card-body",style:e,children:[Object(h.jsx)(x.a.Title,{className:"card-title",style:t,children:"MASSAGE"}),Object(h.jsx)(x.a.Img,{variant:"top",src:T}),Object(h.jsxs)(x.a.Text,{className:"text",children:[Object(h.jsx)("ul",{children:"60 or 90 Minute Massage"}),Object(h.jsx)("ul",{children:"Hot Stone or Deep Tissue"})]}),Object(h.jsx)(o.b,{to:"/contact",className:"btn btn-light",size:"lg",children:"BOOK NOW"})]})}),Object(h.jsx)(x.a,{className:"text-center col-sm-4",children:Object(h.jsxs)(x.a.Body,{className:"card-body",style:e,children:[Object(h.jsx)(x.a.Title,{className:"card-title",style:t,children:"FACIALS"}),Object(h.jsx)(x.a.Img,{variant:"top",src:S}),Object(h.jsxs)(x.a.Text,{className:"text",children:[Object(h.jsx)("ul",{children:"Detox Facial"}),Object(h.jsx)("ul",{children:"European Facial"})]}),Object(h.jsx)(o.b,{to:"/contact",className:"btn btn-light",size:"lg",children:"BOOK NOW"})]})}),Object(h.jsx)(x.a,{className:"text-center col-sm-4",children:Object(h.jsxs)(x.a.Body,{className:"card-body",style:e,children:[Object(h.jsx)(x.a.Title,{className:"card-title",style:t,children:"MED"}),Object(h.jsx)(x.a.Img,{variant:"top",src:y}),Object(h.jsx)(x.a.Text,{className:"text",children:"Laser Treatments"}),Object(h.jsx)(o.b,{to:"/contact",className:"btn btn-light",size:"lg",children:"BOOK NOW"})]})})]})]})};var C=function(){var e;return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)(l.a,{className:"nav",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(h.jsxs)(l.a.Brand,{href:"home",style:{marginLeft:"15px",fontFamily:"'Roboto Condensed', sans-serif;"},children:["SPA MED ",Object(h.jsx)("i",{class:"fas fa-spa"})]}),Object(h.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(j.a,{className:"mr-auto",children:[Object(h.jsx)(j.a.Link,{as:o.b,to:"/about-us",href:"about-us",children:"About Us"}),Object(h.jsx)(j.a.Link,{as:o.b,to:"/contact",href:"contact",children:"Contact"}),Object(h.jsx)(j.a.Link,(e={as:o.b,to:"/services",href:"services"},Object(i.a)(e,"href","services"),Object(i.a)(e,"children","Services"),e))]})})]}),Object(h.jsx)(b.a,{path:"/contact",exact:!0,component:g}),Object(h.jsx)(b.a,{path:"/services",exact:!0,component:A}),Object(h.jsx)(b.a,{path:"/",exact:!0,component:N}),Object(h.jsx)(b.a,{path:"/home",exact:!0,component:N}),Object(h.jsx)(b.a,{path:"/about-us",exact:!0,component:N})]})})})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.395856f0.chunk.js.map