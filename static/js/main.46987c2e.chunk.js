(this.webpackJsonpelections=this.webpackJsonpelections||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(50),r=a.n(o),l=(a(67),a(7)),s=a(51),c=a(1),u=a.n(c);function m(e){var t=e.component,a=e.isPrivate,n=Object(s.a)(e,["component","isPrivate"]);return a?i.a.createElement(l.a,{to:"/"}):i.a.createElement(l.b,Object.assign({},n,{component:t}))}m.proprTypes={isPrivate:u.a.bool,component:u.a.oneOfType([u.a.element,u.a.func]).isRequired},m.defaultProps={isPrivate:!1};a(72);var d=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){var t=setTimeout((function(){e.history.push("/initialmenu")}),3e3);return function(){clearTimeout(t)}})),i.a.createElement("div",null,i.a.createElement("div",{id:"welcome"},"Bem-vindo ao Centro de Sondagens de Santo Afonso."),i.a.createElement("p",null,"Se n\xe3o for redirecionado automaticamente, clique",i.a.createElement("button",{id:"autom-redirect",onClick:function(){clearTimeout(t.current),e.history.push("/initialmenu")}},i.a.createElement("div",{id:"p1"},"aqui"),".")))},p=a(33),f=a(2),v=a(3),h=a(5),b=a(4),E=a(13),g=a(6),y=(a(73),a(17)),N=a.n(y),j=a(34),q=a.n(j),x={submitMyVote:function(e,t){console.log("entrei aqui");var a="https://simulador.glitch.me/api/database/add";q()(N.a,{retries:5}),N.a.post(a,e).then((function(e){console.log(e.data," response.data"),t&&t(e.data)})).catch((function(n){console.log(n),N.a.post(a,e).then((function(e){console.log(e.data," response.data"),t&&t(e.data)}))}))},teste:function(){alert("estou acess\xedvel")},getResults:function(e){console.log("ola");var t="https://simulador.glitch.me/api/database/get-results?";q()(N.a,{retries:5}),N.a.get(t).then((function(t){e&&e(t.data)})).catch((function(a){console.log(a),N.a.get(t).then((function(t){e&&e(t.data)}))}))}},k=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).callback=function(e){a.setState({username:a.state.username,password:a.state.password,candidate:a.state.candidate,msg:e,attemptToSubmit:!0,serverHasResponded:!0})},a.state={username:"",password:"",candidate:"",date:new Date,attemptToSubmit:!1,outputMessage:"",msg:"",serverHasResponded:!1},a.handleChange=a.handleChange.bind(Object(E.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(E.a)(a)),a.backInitial=a.backInitial.bind(Object(E.a)(a)),a.handleReset=a.handleReset.bind(Object(E.a)(a)),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){var t,a=document.getElementById("select1").value;this.setState((t={},Object(p.a)(t,e.target.name,e.target.value),Object(p.a)(t,"candidate",a),t))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state;this.setState({attemptToSubmit:!0}),x.submitMyVote(t,this.callback),this.state.username&&this.state.password&&this.state.candidate||this.setState({attemptToSubmit:!0,serverHasResponded:!1})}},{key:"handleReset",value:function(e){e.preventDefault(),this.setState({username:"",password:"",candidate:"",msg:""})}},{key:"backInitial",value:function(e){console.log(JSON.stringify(this.props.history)),this.props.history.push("/initialmenu")}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.candidate;return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex justify-content-center col-12",id:"ecra1"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group "},i.a.createElement("label",{className:"col text-center",htmlFor:"username",name:"username"},"Nome"),i.a.createElement("input",{type:"text",className:" col-12",id:"username1",name:"username",placeholder:"Nome",onChange:this.handleChange,value:t}),i.a.createElement("small",{id:"user-small",className:"form-text text-muted"},"Campo obrigat\xf3rio"),i.a.createElement("label",{className:"col text-center",htmlFor:"password",name:"password"},"C\xf3digo secreto"),i.a.createElement("input",{type:"password",className:" col-12",id:"password1",name:"password",placeholder:"C\xf3digo",onChange:this.handleChange,value:a}),i.a.createElement("small",{id:"user-small2",className:"form-text text-muted"},"Campo obrigat\xf3rio"),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"col text-center",htmlFor:"candidate"},"Candidato"),i.a.createElement("br",null),i.a.createElement("select",{id:"select1",className:" col-12",onChange:this.handleChange,value:n},i.a.createElement("option",{value:"Candidato"},"Candidato"),i.a.createElement("option",{value:"Mar\xedlia"},"Mar\xedlia"),i.a.createElement("option",{value:"Manel"},"Manel"),i.a.createElement("option",{value:"Genoveva"},"Genoveva"),i.a.createElement("option",{value:"Joaquim"},"Joaquim"),i.a.createElement("option",{value:"Fonseca"},"Fonseca"),i.a.createElement("option",{value:"Serafim"},"Serafim"),i.a.createElement("option",{value:"Fernando"},"Fernando"),i.a.createElement("option",{value:"Joaquina"},"Joaquina"),i.a.createElement("option",{value:"Godofredo"},"Godofredo"),i.a.createElement("option",{value:"Chico"},"Chico")),i.a.createElement("small",{id:"user-small2",className:"form-text text-muted"},"Campo obrigat\xf3rio")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col text-center"},i.a.createElement("button",{className:"btn btn-primary",id:"go-button",type:"submit",onClick:this.handleSubmit},"Submeter"),i.a.createElement("button",{className:"btn btn-default",id:"back-button",type:"button",onClick:this.backInitial},"Voltar"),i.a.createElement("button",{className:"btn btn-warning",id:"reset-button",type:"submit",onClick:this.handleReset},"Limpar")))))),i.a.createElement("div",{id:"display-message-bottom"},this.state.attemptToSubmit?this.state.serverHasResponded?i.a.createElement("div",{id:"success"},this.state.msg," "):i.a.createElement("div",null,"Por favor aguarde..."):i.a.createElement("div",{id:"niente"},null," ")))}}]),t}(i.a.Component),O=(a(92),a(21)),C=(a(93),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).getData=function(){console.log("d3json");O.b("https://simulador.glitch.me/api/database/get-results?").then((function(t){return e.setState({data:t})})).then((function(){e.draw()})).then(e.setState({graphIsVisible:!0})).catch((function(e){console.log(e)}))},e.draw=function(){var t=e.state,a=[],n=O.d("#graph").append("svg").attr("width",300).attr("height",300);n.selectAll("rect").data(t.data).enter().append("rect").attr("x",(function(e,t){return 30*t})).attr("y",(function(e,t){return 300-3*e.Vota\u00e7\u00e3o-150})).attr("width",30).attr("height",(function(e,t){return 3*e.Vota\u00e7\u00e3o})).attr("fill","navy").attr("stroke","#000000").style("fill",(function(e){return e.Vota\u00e7\u00e3o<5?"#ff3333":e.Vota\u00e7\u00e3o>=5&&e.Vota\u00e7\u00e3o<8?"#ff8080":e.Vota\u00e7\u00e3o>=8&&e.Vota\u00e7\u00e3o<10?"#ffe6e6":e.Vota\u00e7\u00e3o>=10&&e.Vota\u00e7\u00e3o<12?"#ffc299":e.Vota\u00e7\u00e3o>=12&&e.Vota\u00e7\u00e3o<14?"#ccff66":e.Vota\u00e7\u00e3o>=14&&e.Vota\u00e7\u00e3o<16?"#85e085":e.Vota\u00e7\u00e3o>=16&&e.Vota\u00e7\u00e3o<20?"#80d4ff":e.Vota\u00e7\u00e3o>=20&&e.Vota\u00e7\u00e3o<22?"#ffb3ff":e.Vota\u00e7\u00e3o>=22&&e.Vota\u00e7\u00e3o<25?"#ff99cc":e.Vota\u00e7\u00e3o>=25&&e.Vota\u00e7\u00e3o<28?"#00cccc":e.Vota\u00e7\u00e3o>=28&&e.Vota\u00e7\u00e3o<32?"#cceeff":"#e600e6"})),n.selectAll("text").data(t.data).enter().append("text").attr("x",(function(e,t){return 30*t})).attr("y",(function(e,t){return 300-3*e.Vota\u00e7\u00e3o-153})).text((function(e){return e.Vota\u00e7\u00e3o})),t.data.map((function(e){return a.push(e.Candidato),"ok"}));var i=O.c().domain(a).rangeRound([0,300]).padding(0);n.append("g").attr("transform","translate(0,150)").attr("color","black").call(O.a(i)).selectAll("text").attr("y",0).attr("x",9).attr("dy",".35em").attr("transform","rotate(90)").style("font-family","Calibri Light").style("font-size","18px").style("text-anchor","start")},e.state={data:[],graphIsVisible:!1},e}return Object(g.a)(t,e),Object(v.a)(t,[{key:"refresh",value:function(){setInterval((function(){window.location.reload(!1)}),3e5)}},{key:"componentDidMount",value:function(){this.getData(),this.refresh()}},{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-center col-12",id:"ecra-graf"},i.a.createElement("div",{className:"row"},this.state.graphIsVisible?i.a.createElement("div",{id:"graph"}):i.a.createElement("div",{id:"notloaded"}," Por favor aguarde.")))}}]),t}(i.a.Component)),w=(a(94),function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=window.location.href.substr(0,21);return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark",id:"bar"},i.a.createElement("a",{className:"navbar-brand",href:e},"Bem-vindos/as!"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"nav-item active"},i.a.createElement("a",{className:"nav-link",href:"/initialmenu"},"In\xedcio",i.a.createElement("span",{className:"sr-only"},"(current)"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#info-graph"},"Gr\xe1fico")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#metodologia"},"Metodologia de an\xe1lise")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#recolha"},"Recolha e Registo")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#trat"},"Tratamento de dados")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#obs"},"Observa\xe7\xf5es")),i.a.createElement("li",{className:"nav-item dropdown"},i.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Outras informa\xe7\xf5es"),i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},i.a.createElement("a",{className:"dropdown-item",href:"/centro"},"Centro de Sondagens de Santo Afonso"),i.a.createElement("a",{className:"dropdown-item",href:"/currentgeneralresults"},"Informa\xe7\xf5es \xfateis"),i.a.createElement("div",{className:"dropdown-divider"}),i.a.createElement("a",{className:"dropdown-item",href:"/contactus"},"Contactos")))))))}}]),t}(i.a.Component)),T=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).refreshPageToCheckVotes=function(){window.location.reload(!1)},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container",id:"container"},i.a.createElement(w,null),i.a.createElement("div",{id:"outer-div"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md",id:"graph-and-text"},i.a.createElement("div",{className:"info-graph"},i.a.createElement(C,null),i.a.createElement("div",{className:"ty"}," ",i.a.createElement("p",null,"A informa\xe7\xe3o patente no gr\xe1fico \xe9 atualizada automaticamente de 5 em 5 minutos. Caso pretenda atualizar a informa\xe7\xe3o dispon\xedvel no site a qualquer momento, clique em Atualizar.")),i.a.createElement("div",{className:"row align-items-center justify-content-center",id:"refr-button"},i.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.refreshPageToCheckVotes},"Atualizar")))),i.a.createElement("div",{className:"col-md"},i.a.createElement("div",{className:"dummytext"},i.a.createElement("div",{id:"metodologia"},i.a.createElement("h3",null,"Metodologia de an\xe1lise"),i.a.createElement("p",null," A an\xe1lise estat\xedstica foi efetuada atendendo aos mais altos padr\xf5es de qualidade referenciados a n\xedvel internacional."),i.a.createElement("p",null," Den statistiske analysen ble utf\xf8rt i samsvar med de h\xf8yeste kvalitetsstandarder internasjonalt referert. A an\xe1lise estat\xedstica realizouse cumprindo os m\xe1is altos est\xe1ndares de calidade referenciado internacionalmente."),i.a.createElement("p",null," Den statistiske analysen ble utf\xf8rt i samsvar med de h\xf8yeste kvalitetsstandarder internasjonalt referert. A an\xe1lise estat\xedstica realizouse cumprindo os m\xe1is altos est\xe1ndares de calidade referenciado internacionalmente.")),i.a.createElement("div",{id:"recolha"},i.a.createElement("h3",null," Recolha e Registo"),i.a.createElement("p",null," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md"},i.a.createElement("div",{className:"dummytext"},i.a.createElement("div",{id:"trat"},i.a.createElement("h3",null," Tratamento de dados"),i.a.createElement("p",null," A an\xe1lise estat\xedstica foi efetuada atendendo aos mais altos padr\xf5es de qualidade referenciados a n\xedvel internacional."),i.a.createElement("p",null," Den statistiske analysen ble utf\xf8rt i samsvar med de h\xf8yeste kvalitetsstandarder internasjonalt referert. A an\xe1lise estat\xedstica realizouse cumprindo os m\xe1is altos est\xe1ndares de calidade referenciado internacionalmente."),i.a.createElement("p",null," Den statistiske analysen ble utf\xf8rt i samsvar med de h\xf8yeste kvalitetsstandarder internasjonalt referert. A an\xe1lise estat\xedstica realizouse cumprindo os m\xe1is altos est\xe1ndares de calidade referenciado internacionalmente.")),i.a.createElement("div",{id:"obs"},i.a.createElement("h3",null," Observa\xe7\xf5es"),i.a.createElement("p",null," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.")))),i.a.createElement("div",{className:"col-md"},i.a.createElement("div",{className:"dummytext"},i.a.createElement("div",{id:"conc"},i.a.createElement("h3",null," Conclus\xf5es"),i.a.createElement("p",null," A an\xe1lise estat\xedstica foi efetuada atendendo aos mais altos padr\xf5es de qualidade referenciados a n\xedvel internacional."),i.a.createElement("p",null," Den statistiske analysen ble utf\xf8rt i samsvar med de h\xf8yeste kvalitetsstandarder internasjonalt referert. A an\xe1lise estat\xedstica realizouse cumprindo os m\xe1is altos est\xe1ndares de calidade referenciado internacionalmente."),i.a.createElement("p",null," Den statistiske analysen ble utf\xf8rt i samsvar med de h\xf8yeste kvalitetsstandarder internasjonalt referert. A an\xe1lise estat\xedstica realizouse cumprindo os m\xe1is altos est\xe1ndares de calidade referenciado internacionalmente.")),i.a.createElement("div",{id:"hipo"},i.a.createElement("h3",null,"Hip\xf3teses futuras"),i.a.createElement("p",null," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.")))))))}}]),t}(i.a.Component),V=(a(95),function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-center col-12"},i.a.createElement("div",{className:"ecra",id:"msg"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("h3",null,"Mensagem do Presidente"),i.a.createElement("div",{className:"data-content",id:"frame-mensagem"},i.a.createElement("div",{id:"txt"},i.a.createElement("p",null," Sejam bem-vindos/as ao site do Centro de Sondagens de Santo Afonso."),i.a.createElement("p",null,"   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))))}}]),t}(i.a.Component)),D=(a(96),a(18)),S=a(19),I=i.a.createElement(D.a,{icon:S.b,size:"2x"}),A=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"envelope"},I)}}]),t}(i.a.Component),L=i.a.createElement(D.a,{icon:S.a,size:"2x"}),R=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,L)}}]),t}(i.a.Component),z=i.a.createElement(D.a,{icon:S.c,size:"2x"}),M=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,z)}}]),t}(i.a.Component),U=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-center col-12"},i.a.createElement("div",{className:"container",id:"contact-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm",id:"telephone-mail-address"},i.a.createElement("div",{id:"frame"},i.a.createElement("div",{className:"col-sm",id:"env"},i.a.createElement(A,null)," "),i.a.createElement("div",{className:"col-sm"},"Morada : Rua 3945, 1.\xba Esq., 9000-000  "),i.a.createElement("div",{className:"col-sm",id:"at"},i.a.createElement(R,null)),i.a.createElement("div",{className:"col-sm"},"E-mail : geral@cssa.com.pt.net.org"),i.a.createElement("div",{className:"col-sm",id:"phone"},i.a.createElement(M,null)),i.a.createElement("div",{className:"col-sm"},"Telefone : +351 000 000 000 "))),i.a.createElement("div",{className:"col-sm",id:"conversa"},i.a.createElement("div",{id:"text-contact",className:"col-sm"},i.a.createElement("h3",null,"Contacte-nos!"),i.a.createElement("p",null,i.a.createElement("strong",null,"D\xea sugest\xf5es.")),i.a.createElement("p",null,i.a.createElement("strong",null,"Queremos saber a sua opini\xe3o.")),"O Centro de Sondagens est\xe1 ao dispor para o esclarecimento de qualquer quest\xe3o relacionada com a metodologia utilizada, as amostras, a recolha e tratamento de dados, entre outros.")))))}}]),t}(i.a.Component),P=(a(99),function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-center col-6"},i.a.createElement("div",{className:"ecra"},i.a.createElement("div",{className:"data-content",id:"info"},i.a.createElement("div",{id:"txt"},i.a.createElement("label",{className:"ttl"},"Outras informa\xe7\xf5es"),i.a.createElement("br",null),"O Centro de Sondagens de Santo Afonso foi criado em 1978. Desde ent\xe3o, tem desempenhado um papel fundamental na investiga\xe7\xe3o de tend\xeancias eleitorais nos mais diversos campos.",i.a.createElement("br",null),"  ",i.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",i.a.createElement("br",null),"  ",i.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",i.a.createElement("br",null),"  ",i.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))}}]),t}(i.a.Component)),F=(a(100),function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-center col-12"},i.a.createElement("div",{className:"ecra",id:"msg"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("h3",null,"O Centro"),i.a.createElement("div",{className:"data-content",id:"frame-mensagem"},i.a.createElement("div",{id:"txt"},i.a.createElement("p",null,"   O Centro de Sondagens de Santo Afonso foi criado em 1978. Desde ent\xe3o, tem desempenhado um papel fundamental na investiga\xe7\xe3o de tend\xeancias eleitorais nos mais diversos campos."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))))}}]),t}(i.a.Component)),G=(a(101),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).callbackGet=function(e){a.setState({currentVotation:e,apiRequestWasDone:!0,resultsAreRendered:!0})},a.state={currentVotation:[],apiRequestWasDone:!1,pleaseWait:"Por favor aguarde..."},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){x.getResults(this.callbackGet),this.refresh()}},{key:"refresh",value:function(){setInterval((function(){console.log("Hello"),window.location.reload(!1)}),3e5)}},{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex justify-content-center"},this.state.apiRequestWasDone?i.a.createElement("div",{id:"flatlist"},this.state.currentVotation.map((function(e){return i.a.createElement("div",{id:"text-results",key:e.Candidato},i.a.createElement("ul",null,i.a.createElement("strong",null,"Candidato: "),"  ",e.Candidato,"  ",i.a.createElement("br",null),i.a.createElement("strong",null,"N\xfamero de votos: "),"  ",e["Vota\xe7\xe3o"]," ",i.a.createElement("br",null)))}))):i.a.createElement("div",{id:"wait"},this.state.pleaseWait))}}]),t}(i.a.Component)),H=(a(102),a(14)),J=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).goToMessage=function(){a.props.history.push("/presidentmessage")},a.goToCentro=function(){a.props.history.push("/centro")},a.state={},a.goToTheForm=a.goToTheForm.bind(Object(E.a)(a)),a.goToTheGraph=a.goToTheGraph.bind(Object(E.a)(a)),a.goToTheInfo=a.goToTheInfo.bind(Object(E.a)(a)),a.goToContacts=a.goToContacts.bind(Object(E.a)(a)),a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"goToTheForm",value:function(){this.props.history.push("/questionform")}},{key:"goToTheGraph",value:function(){this.props.history.push("/renderserviceresponse")}},{key:"goToTheInfo",value:function(){this.props.history.push("/currentgeneralresults")}},{key:"goToContacts",value:function(){this.props.history.push("/contactus")}},{key:"render",value:function(){return i.a.createElement("div",{className:"container",id:"cont"},i.a.createElement("h1",null,"O que pretende fazer?"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm",id:"vote"},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("p",null," ",i.a.createElement(H.a,{to:"/questionform",activeclassname:"active"}," Submeter ")," o meu voto. ")),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("button",{className:"btn btn-dark",onClick:this.goToTheForm},"Formul\xe1rio"))),i.a.createElement("div",{className:"col-sm",id:"gr"},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("p",null," ",i.a.createElement(H.a,{to:"/renderserviceresponse",activeclassname:"active"}," Visualizar ")," o gr\xe1fico atual.")),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("button",{className:"btn btn-dark",onClick:this.goToTheGraph},"Gr\xe1fico"))),i.a.createElement("div",{className:"col-sm",id:"info"},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("p",null,"  ",i.a.createElement(H.a,{to:"/currentgeneralresults",activeclassname:"active"}," Visualizar ")," informa\xe7\xe3o da vota\xe7\xe3o.")),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("button",{className:"btn btn-dark",onClick:this.goToTheInfo},"Dados")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm",id:"contact"},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("p",null," ",i.a.createElement(H.a,{to:"/contactus",activeclassname:"active"}," Encontrar ")," os contactos do Centro. ")),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("button",{className:"btn btn-dark",onClick:this.goToContacts},"Contactos"))),i.a.createElement("div",{className:"col-sm",id:"president-msg"},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("p",null," ",i.a.createElement(H.a,{to:"/presidentmessage",activeclassname:"active"}," Mensagem ")," do Presidente. ")),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("button",{className:"btn btn-dark",onClick:this.goToMessage},"Mensagem"))),i.a.createElement("div",{className:"col-sm",id:"centro"},i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("p",null,"A nossa ",i.a.createElement(H.a,{to:"/centro",activeclassname:"active"},"Hist\xf3ria"),". ")),i.a.createElement("div",{className:"row align-items-center justify-content-center"},i.a.createElement("button",{className:"btn btn-dark",onClick:this.goToCentro},"O Centro")))))}}]),t}(i.a.Component),W=function(){return i.a.createElement("div",null,"You will only see me if you are loggedIn! :P :D")},B=function(){return i.a.createElement(l.d,null,i.a.createElement(m,{path:"/",exact:!0,component:d}),i.a.createElement(m,{path:"/initialmenu",component:J}),i.a.createElement(m,{path:"/questionform",component:k}),i.a.createElement(m,{path:"/renderserviceresponse",component:T}),i.a.createElement(m,{path:"/presidentmessage",component:V}),i.a.createElement(m,{path:"/contactus",component:U}),i.a.createElement(m,{path:"/info",component:P}),i.a.createElement(m,{path:"/centro",component:F}),i.a.createElement(m,{path:"/currentgeneralresults",component:G}),i.a.createElement(m,{path:"/login",component:W,isPrivate:!0}),i.a.createElement(m,{component:d}),i.a.createElement(m,{path:"/graph",component:C}))},Q=(a(103),a(9)),Y=Object(Q.a)();a(104);var K=function(){return i.a.createElement(l.c,{history:Y},i.a.createElement(B,null))};r.a.render(i.a.createElement(K,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a(105)},67:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.46987c2e.chunk.js.map