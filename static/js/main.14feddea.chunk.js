(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/logo.ded87843.svg"},19:function(e,t,n){e.exports=n.p+"static/media/logo.1e66b124.svg"},20:function(e,t,n){e.exports=n.p+"static/media/logo.07475bfe.svg"},21:function(e,t,n){e.exports=n.p+"static/media/logo.26307f0e.svg"},22:function(e,t,n){e.exports=n.p+"static/media/logo.0f92ed63.svg"},23:function(e,t,n){e.exports=n.p+"static/media/settings.04e848f8.svg"},26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),l=(n(31),n(1)),u=n(2),i=n(4),s=n(3),m=n(5),d=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,"Header")}}]),t}(a.Component),f=n(6),h=function(e){return{type:"TOGGLE_ITEM",id:e}},p=function(){return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(e){return e.json()}).then(function(e){return e.Valute.USD.Value}).catch(function(e){return console.error("Error",e)})},E=function(){return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(e){return e.json()}).then(function(e){return e.Valute.EUR.Value}).catch(function(e){return console.error("Error",e)})},g=function(){return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(e){return e.json()}).then(function(e){return e.Valute.GBP.Value}).catch(function(e){return console.error("Error",e)})},v=function(){return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(e){return e.json()}).then(function(e){return e.Valute.CHF.Value}).catch(function(e){return console.error("Error",e)})},y=function(){return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(e){return e.json()}).then(function(e){return e.Valute.JPY.Value}).catch(function(e){return console.error("Error",e)})},b=function(){return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then(function(e){return e.json()}).then(function(e){return e.Valute.AUD.Value}).catch(function(e){return console.error("Error",e)})},j=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/bitcoin/").then(function(e){return e.json()}).then(function(e){return e[0].price_usd}).catch(function(e){return console.error("Error",e)})},O=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/").then(function(e){return e.json()}).then(function(e){return e[0].price_usd}).catch(function(e){return console.error("Error",e)})},_=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/ripple/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},C=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/litecoin/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},w=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/stellar/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},S=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},k=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/eos/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},T=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/tether/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},N=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/tron/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},D=function(){return fetch("https://api.coinmarketcap.com/v1/ticker/monero/").then(function(e){return e.json()}).then(function(e){return console.log(e[0]),e[0].price_usd}).catch(function(e){return console.error("Error",e)})},I=function(e){return function(t){t({type:"START_DISPATCH"}),function(e){switch(e){case 0:return p;case 1:return E;case 2:return g;case 3:return v;case 4:return y;case 5:return b;case 6:return j;case 7:return O;case 8:return _;case 9:return C;case 10:return w;case 11:return S;case 12:return k;case 13:return T;case 14:return N;case 15:return D}}(e)().then(function(n){t(n?function(e,t){return{type:"CHANGE_ITEM",id:e,value:t}}(e,Math.round(100*n)/100):{type:"ERROR"})})}},A=n(18),V=n.n(A),x=function(e){return r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"flex-center-center-row rate__item"},r.a.createElement("div",null,r.a.createElement("img",{src:V.a,alt:"",className:"rate-logo"})),r.a.createElement("div",null,e.value))))},L=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onChangeValue(0)}},{key:"render",value:function(){return this.props.localState.status?r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{value:this.props.localState.value})):r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),M=Object(f.b)(function(e){return{localState:e.item[0]}},function(e){return{onChangeValue:function(t){e(I(t))}}})(L),F=n(19),R=n.n(F),G=function(e){return r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"flex-center-center-row rate__item"},r.a.createElement("div",null,r.a.createElement("img",{src:R.a,alt:"",className:"rate-logo"})),r.a.createElement("div",null,e.value))))},W=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onChangeValue(1)}},{key:"render",value:function(){return this.props.localState.status?r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{value:this.props.localState.value})):r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),B=Object(f.b)(function(e){return{localState:e.item[1]}},function(e){return{onChangeValue:function(t){e(I(t))}}})(W),H=n(20),P=n.n(H),J=function(e){return r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"flex-center-center-row rate__item"},r.a.createElement("div",null,r.a.createElement("img",{src:P.a,alt:"",className:"rate-logo"})),r.a.createElement("div",null,e.value))))},Y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onChangeValue(6)}},{key:"render",value:function(){return this.props.localState.status?r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{value:this.props.localState.value})):r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),U=Object(f.b)(function(e){return{localState:e.item[6]}},function(e){return{onChangeValue:function(t){e(I(t))}}})(Y),$=n(21),q=n.n($),z=function(e){return r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"flex-center-center-row rate__item"},r.a.createElement("div",null,r.a.createElement("img",{src:q.a,alt:"",className:"rate-logo"})),r.a.createElement("div",null,e.value))))},X=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onChangeValue(7)}},{key:"render",value:function(){return this.props.localState.status?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{value:this.props.localState.value})):r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),Z=Object(f.b)(function(e){return{localState:e.item[7]}},function(e){return{onChangeValue:function(t){e(I(t))}}})(X),K=n(22),Q=n.n(K),ee=function(e){return r.a.createElement("div",{className:"col-4 col-md-3 col-lg-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"flex-center-center-row rate__item"},r.a.createElement("div",null,r.a.createElement("img",{src:Q.a,alt:"",className:"rate-logo"})),r.a.createElement("div",null,e.value))))},te=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onChangeValue(8)}},{key:"render",value:function(){return this.props.localState.status?r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{value:this.props.localState.value})):r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),ne=Object(f.b)(function(e){return{localState:e.item[8]}},function(e){return{onChangeValue:function(t){e(I(t))}}})(te),ae=function(e,t){return function(n){n({type:"START_DISPATCH_WHEATHER"});!function(t){var a="&type=like&APPID=".concat("8c6b34946a9936a4f503e2797bfc6840");fetch("".concat("https://api.openweathermap.org/data/2.5/find?q=").concat(t).concat(a)).then(function(e){return e.json()}).then(function(t){return n(function(e,t){return{type:"SET_WEATHER",id:e,value:Math.round(10*t)/10+" \xb0C"}}(e,t.list[0].main.temp-273.15))}).catch(function(e){return console.log(e)})}(t)}},re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",id:"addCity__input",className:"input",autoFocus:!0}),r.a.createElement("button",{id:"addCity__button"},"Add"))},ce=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).addCity=function(){var e=document.getElementById("addCity__input");if(/^[a-zA-Z]+$/.test(e.value)){var t=Date.now().toString();n.props.onAddCity(t,e.value),n.props.onSetWeather(t,e.value),e.value=""}else e.value="Please write only english letters"},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("addCity__input");t.addEventListener("click",function(e){t.value="",e.preventDefault()}),document.getElementById("addCity__button").addEventListener("click",function(t){e.addCity(),t.preventDefault()})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null))}}]),t}(a.Component),oe=Object(f.b)(function(e){return{localState:e}},function(e){return{onAddCity:function(t,n){e(function(e,t){return{type:"ADD_CITY",id:e,idCategory:3,city:t,temprature:""}}(t,n))},onSetWeather:function(t,n){e(ae(t,n))}}})(ce),le=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{id:"showWeather__ul"},this.props.localState.length?this.props.localState.map(function(e,t){return r.a.createElement("li",{key:t,"data-key":e.id,style:{textDecoration:e.shouldDelete?"line-through":"none"}},e.temprature?e.city+" "+e.temprature:"Sorry, cannot find weather for "+e.city)}):r.a.createElement("p",{className:"description"},"Add your first city!",r.a.createElement("br",null),'For example: "London", "Rome", "Moscow"')))}}]),t}(a.Component),ue=Object(f.b)(function(e){return{localState:e.weather}})(le),ie=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).toggleWeather=function(){document.getElementById("showWeather__ul").addEventListener("click",function(e){var t=e.target;"LI"===t.tagName&&(t=t.getAttribute("data-key"),n.props.onToggleWeather(t))})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.toggleWeather()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.props.onRemove},"Save changes"))}}]),t}(a.Component),se=Object(f.b)(null,function(e){return{onToggleWeather:function(t){e(function(e){return{type:"TOGGLE_DELETE",id:e}}(t))},onRemove:function(){e({type:"REMOVE_CITY"})}}})(ie),me=n(23),de=n.n(me),fe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).changeState=function(){document.getElementById("settings__ul").addEventListener("click",function(e){var t=e.target;"LI"===t.tagName&&(t=t.getAttribute("data-key"),n.props.onChangeState(t),localStorage.setItem("store",JSON.stringify(n.props.localState)))})},n.toggleSettings=function(){var e=document.getElementById("settings__ul"),t=document.getElementById("main-content");document.getElementById("settings__img").addEventListener("click",function(n){e.classList.toggle("hidden"),t.classList.toggle("hidden"),n.preventDefault()})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.changeState(),this.toggleSettings()}},{key:"render",value:function(){return r.a.createElement("section",{id:"settings"},r.a.createElement("div",{className:"flex-center-center"},r.a.createElement("ul",{id:"settings__ul",className:"hidden"},this.props.localState.item.map(function(e,t){return r.a.createElement("li",{key:t,"data-key":e.id,style:{textDecoration:e.status?"none":"line-through"}},e.name)}))),r.a.createElement("img",{src:de.a,alt:"",id:"settings__img"}))}}]),t}(a.Component);var he=Object(f.b)(function(e){return{localState:e}},function(e){return{onChangeState:function(t){e(h(t))}}})(fe),pe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{id:"main-content"},r.a.createElement("section",{id:"rate"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"\u041a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442"),r.a.createElement("div",{className:"row"},r.a.createElement(M,null),r.a.createElement(B,null),r.a.createElement(M,null),r.a.createElement(B,null),r.a.createElement(M,null),r.a.createElement(B,null)))),r.a.createElement("section",{id:"crypto"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"\u041a\u0443\u0440\u0441 \u043a\u0440\u0438\u043f\u0442\u044b"),r.a.createElement("div",{className:"row"},r.a.createElement(U,null),r.a.createElement(Z,null),r.a.createElement(ne,null),r.a.createElement(U,null),r.a.createElement(Z,null),r.a.createElement(ne,null),r.a.createElement(U,null),r.a.createElement(Z,null),r.a.createElement(ne,null),r.a.createElement(U,null)))),r.a.createElement("section",{id:"weather"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b"),r.a.createElement("div",{className:"row"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"row"},r.a.createElement(ue,null)),r.a.createElement("div",{className:"row"},r.a.createElement(se,null))))),r.a.createElement(he,null))}}]),t}(a.Component),Ee=function(){return r.a.createElement("section",{id:"welcome"},"Welcome",r.a.createElement("button",{id:"welcome__reload"},"\u041e\u041a"))},ge=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={firstVisit:localStorage.getItem("firstVisit")},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("firstVisit")||document.getElementById("welcome__reload").addEventListener("click",function(){localStorage.setItem("firstVisit",!0),e.setState({firstVisit:!0})})}},{key:"render",value:function(){return this.state.firstVisit?r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null))}}]),t}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=n(9),ye=n(24),be=n(25),je=n(8),Oe=n(10),_e=[{id:0,name:"\u041a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442"},{id:1,name:"\u041a\u0443\u0440\u0441\u044b \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442"}],Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;return"ADD_TOPIC"===t.type?Object(Oe.a)(e).concat([{id:t.id,name:t.name,status:t.status}]):"TOGGLE_TOPIC"===t.type?(console.log("TOGGLE_STATE",t.id),e.map(function(e){return e.id==t.id?Object(je.a)({},e,{status:!e.status}):e})):"CHANGE_TOPIC"===t.type?e.map(function(e){return e.id==t.id?Object(je.a)({},e,{value:t.value}):e}):e},we=[{id:0,idCategory:0,name:"\u041a\u0443\u0440\u0441 \u0434\u043e\u043b\u043b\u0430\u0440\u0430",value:"",status:!0},{id:1,idCategory:0,name:"\u041a\u0443\u0440\u0441 \u0435\u0432\u0440\u043e",value:"",status:!0},{id:2,idCategory:0,name:"\u041a\u0443\u0440\u0441 \u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u0424\u0443\u043d\u0442\u0430",value:"",status:!0},{id:3,idCategory:0,name:"\u041a\u0443\u0440\u0441 \u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u043e\u0433\u043e \u0444\u0440\u0430\u043d\u043a\u0430",value:"",status:!0},{id:4,idCategory:0,name:"\u041a\u0443\u0440\u0441 \u042f\u043f\u043e\u043d\u0441\u043a\u043e\u0439 \u0438\u0435\u043d\u044b",value:"",status:!0},{id:5,idCategory:0,name:"\u041a\u0443\u0440\u0441 \u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0434\u043e\u043b\u043b\u0430\u0440\u0430",value:"",status:!0},{id:6,idCategory:1,name:"\u041a\u0443\u0440\u0441 BTC",value:"",status:!0},{id:7,idCategory:1,name:"\u041a\u0443\u0440\u0441 ETHEREUM",value:"",status:!0},{id:8,idCategory:1,name:"\u041a\u0443\u0440\u0441 XRP",value:"",status:!0},{id:9,idCategory:1,name:"\u041a\u0443\u0440\u0441 LTC",value:"",status:!0},{id:10,idCategory:1,name:"\u041a\u0443\u0440\u0441 STELLAR",value:"",status:!0},{id:11,idCategory:1,name:"\u041a\u0443\u0440\u0441 BTCCSH",value:"",status:!0},{id:12,idCategory:1,name:"\u041a\u0443\u0440\u0441 EOS",value:"",status:!0},{id:13,idCategory:1,name:"\u041a\u0443\u0440\u0441 TETHER",value:"",status:!0},{id:14,idCategory:1,name:"\u041a\u0443\u0440\u0441 TRON",value:"",status:!0},{id:15,idCategory:1,name:"\u041a\u0443\u0440\u0441 MONERO",value:"",status:!0}];if(localStorage.getItem("store")){var Se=JSON.parse(localStorage.getItem("store"));Se.item&&(we=Se.item)}var ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,n=t.id,a=t.idCategory,r=t.name;return"ADD_ITEM"===t.type?Object(Oe.a)(e).concat([{id:n,idCategory:a,name:r,value:"",status:!0}]):"TOGGLE_ITEM"===t.type?(console.log("TOGGLE_STATE",t.id),e.map(function(e){return e.id==t.id?Object(je.a)({},e,{status:!e.status}):e})):"CHANGE_ITEM"===t.type?e.map(function(e){return e.id==t.id?Object(je.a)({},e,{value:t.value}):e}):e},Te=[];if(localStorage.getItem("store")){var Ne=JSON.parse(localStorage.getItem("store"));Ne.weather&&(Te=Ne.weather)}var De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;if("ADD_CITY"===t.type){var n=t.id,a=t.idCategory,r=t.city,c=t.temprature;return Object(Oe.a)(e).concat([{id:n,idCategory:a,city:r,temprature:c,shouldDelete:!1}])}return"SET_WEATHER"===t.type?e.map(function(e){return e.id==t.id?Object(je.a)({},e,{temprature:t.value}):e}):"TOGGLE_DELETE"===t.type?e.map(function(e){return e.id==t.id?Object(je.a)({},e,{shouldDelete:!e.shouldDelete}):e}):"REMOVE_CITY"===t.type?e.filter(function(e){return!1===e.shouldDelete}):e},Ie=Object(ve.combineReducers)({topic:Ce,item:ke,weather:De}),Ae=Object(ve.createStore)(Ie,Object(ye.composeWithDevTools)(Object(ve.applyMiddleware)(be.a)));Ae.subscribe(function(){localStorage.setItem("store",JSON.stringify(Ae.getState()))}),Ae.dispatch(ae("1543913042376",1703)),o.a.render(r.a.createElement(f.a,{store:Ae},r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.14feddea.chunk.js.map