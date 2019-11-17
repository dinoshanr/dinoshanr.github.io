(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),i=a.n(r),c=(a(72),a(6)),s=a(11),o=a(8),m=a(7),u=a(9),d=a(27),h=a(21),b=a(15),p=a(28),f=a(66),E=(a(73),a(19)),g=a(17);var v=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(b.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3"},l.a.createElement(g.a,{className:"p-0",md:3,sm:12},"Dinoshan Romeltar"),l.a.createElement(g.a,{className:"p-0 d-flex justify-content-end",md:3},"2019 \xa9"))))},k=a(56);var w=function(e){return l.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(b.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center py-5"},l.a.createElement(g.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},y=a(25),C=a(38);var N=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return l.a.createElement(C.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var S=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(N,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=a(57),T=a.n(j),x=a(58),O=a.n(x),I=a(59),A=a.n(I),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(y.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return l.a.createElement(S,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Reddit-Clone",subTitle:"Created a full-stack reddit clone",imgSrc:T.a,link:"https://github.com/dinoshanr/Back-end-Reddit/tree/master",selected:!1},{id:1,title:"ToDoApp",subTitle:"Created a to do-app using React",imgSrc:O.a,link:"https://github.com/dinoshanr/ToDoApp",selected:!1},{id:2,title:"YouTube Clone",subTitle:"Created YouTube clone specifially for simple learning",imgSrc:A.a,link:"https://github.com/dinoshanr/YouTube-Clone",selected:!1}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component);var R=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(B,null))};var D=function(e){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(E.a,{className:"justify-content-center"},l.a.createElement(g.a,{md:8},e.children)))};var L=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title}),l.a.createElement(D,null,l.a.createElement("p",null,"Hi! My name is Dinoshan Romeltar, I am a software engineer in NYC. I come from a non-traditional coding background. I studied International Trade at University at Buffalo and worked at Bank of America as a Credit Specialist II where I have experience in Credit, Marketing and Business."),l.a.createElement("p",null,"My interest in software development sparked when I was using programs at Bank of America and would constantly view the source code to understand how they were written. My interest led me to learn more about programming to understand better about software and web development. After realizing my passion for coding I self taught myself JavaScript, Python, HTML, CSS and React."),l.a.createElement("p",null,"Currently, I am part of the American Express Software Engineering Academy. ")))},M=a(24),F=a(14),H=a(61),Y=a(60),G=a.n(Y),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(M.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault(),console.log(e.target),a.setState({disabled:!0}),G.a.post("http://localhost:3030/api/email",a.state).then(function(e){e.data.success?a.setState({disabled:!1,emailSent:!0}):a.setState({disabled:!1,emailSent:!1})}).catch(function(e){console.log(e),a.setState({disabled:!1,emailSent:!1})})},a.state={name:"",email:"",message:"",disabled:!1,emailSent:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{title:this.props.title}),l.a.createElement(D,null,l.a.createElement(F.a,{onSubmit:this.handleSubmit},l.a.createElement(F.a.Group,null,l.a.createElement(F.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(F.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(F.a.Group,null,l.a.createElement(F.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(F.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(F.a.Group,null,l.a.createElement(F.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(F.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(H.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={title:"Dinoshan Romeltar",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Dinoshan Romeltar",subTitle:"Software Engineer",text:"Click the images below to view my projects"},about:{title:"About Me"},contact:{title:"Let's Talk"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(b.a,{className:"p-0",fluid:!0},l.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(p.a.Brand,null),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar-toggle"},l.a.createElement(f.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact"),l.a.createElement("a",{className:"nav-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/dinoshan"},"LinkedIn")))),l.a.createElement(h.a,{path:"/",exact:!0,render:function(){return l.a.createElement(R,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(h.a,{path:"/about",render:function(){return l.a.createElement(L,{title:e.state.about.title})}}),l.a.createElement(h.a,{path:"/contact",render:function(){return l.a.createElement(J,{title:e.state.contact.title})}}),l.a.createElement(v,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103);i.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a.p+"static/media/devgrub.afab80e8.png"},58:function(e,t,a){e.exports=a.p+"static/media/youtube.ce30560c.png"},59:function(e,t,a){e.exports=a.p+"static/media/evverest.a88dcd6f.png"},67:function(e,t,a){e.exports=a(104)},72:function(e,t,a){},73:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.5f10c461.chunk.js.map