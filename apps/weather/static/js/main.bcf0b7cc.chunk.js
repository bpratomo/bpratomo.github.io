(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{19:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n.n(r),a=n(13),c=n.n(a),o=(n(19),n(2)),s=n(6),l=n(8),d=n(14),u=n.n(d),b=(n(20),Object({NODE_ENV:"production",PUBLIC_URL:"/apps/weather",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_KEY||"0df29c4a45b12f078f72df287f2a1ec6"),x="https://api.openweathermap.org/data/2.5/weather?";function j(e){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(Object(o.a)().mark((function e(t){var n,r,i,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="q=".concat(t,"&units=metric&appid=").concat(b),r=x.concat(n),e.next=4,u()(r);case 4:return i=e.sent,e.next=7,i.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return"".concat("https://openweathermap.org/img/wn/","/").concat(e,"@4x.png")}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(Object(o.a)().mark((function e(t){var n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return j(e)})),e.next=3,Promise.all(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(Object(o.a)().mark((function e(t,n){var r,i,a,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.map((function(e){return e.name})),i=r.filter((function(e,t,n){return n.indexOf(e)===t})),a=t.name,c=i.filter((function(e){return e!==a})),e.next=6,localStorage.setItem("savedLocations",JSON.stringify(c));case 6:return e.abrupt("return",w(c));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(Object(o.a)().mark((function e(t){var n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.name})),r=n.filter((function(e,t,n){return n.indexOf(e)===t})),e.next=4,localStorage.setItem("savedLocations",JSON.stringify(r));case 4:return e.abrupt("return",w(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(Object(o.a)().mark((function e(t){var n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return j(e)})),e.next=3,Promise.all(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(s.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("savedLocations");case 2:if(!(t=e.sent)){e.next=9;break}return e.next=6,w(JSON.parse(t));case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,f(["Amsterdam"]);case 11:e.t0=e.sent;case 12:return n=e.t0,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=n(7),T=n(0),F=function(e){var t=e.cardTitle,n=e.mainReadings,r=e.secondaryReadings,i={display:"flex",flexDirection:"column",justifyContent:"center",fontSize:"large",textAlign:"center",verticalAlign:"middle",width:"100%",height:"100%",borderRight:"solid 1px black"},a={display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#f9ed69",border:"solid 3px black",width:"100%",height:"100%",borderRadius:"30px",boxSizing:"border-box",color:"black",overflow:"hidden",marginTop:"10px"};return Object(T.jsxs)("section",{id:"weatherCard__pressure",className:"minicard",style:{backgroundColor:"#b83b5e",border:"solid 1px black",width:"100%",minWidth:"300px",maxWidth:"400px",height:"200px",borderRadius:"30px",padding:"0.6em",boxShadow:"5px 5px black",marginRight:"8px",marginBottom:"8px",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"xx-large"},children:[Object(T.jsx)("header",{children:t||Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("i",{className:"fas fa-tachometer-alt"})," Pressure"]})}),n?Object(T.jsx)("div",{className:"hero",style:a,children:n.map((function(e,t){return Object(T.jsxs)("div",{id:e.readingTitle,style:t===n.length-1?Object(k.a)(Object(k.a)(Object(k.a)({},i),e.readingStyle),{},{borderRight:"none"}):Object(k.a)(Object(k.a)({},i),e.readingStyle),children:[Object(T.jsx)("div",{children:e.readingTitle}),Object(T.jsxs)("div",{children:[e.readingValue," ",e.readingUnit]})]})}))}):Object(T.jsx)(T.Fragment,{}),r?Object(T.jsx)("div",{className:"hero",style:a,children:r.map((function(e,t){return Object(T.jsxs)("div",{id:e.readingTitle,style:t===r.length-1?Object(k.a)(Object(k.a)(Object(k.a)({},i),e.readingStyle),{},{borderRight:"none"}):Object(k.a)(Object(k.a)({},i),e.readingStyle),children:[Object(T.jsx)("div",{children:e.readingTitle}),Object(T.jsxs)("div",{children:[e.readingValue," ",e.readingUnit]})]})}))}):Object(T.jsx)(T.Fragment,{})]})},R=n(3),_=n(4),W=function(e){var t=e.weather,n={readingTitle:"Speed",readingValue:(null===t||void 0===t?void 0:t.wind.speed.toString())||"0",readingUnit:"m/s"},r={readingTitle:"Direction",readingValue:(null===t||void 0===t?void 0:t.wind.deg.toString())||"0",readingUnit:"\xb0"},i=Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(R.a,{icon:_.h})," Wind"]}),a=[n,r];return Object(T.jsx)(F,{cardTitle:i,mainReadings:a})},z=function(e){var t=e.weather,n=[{readingTitle:"Current",readingValue:(null===t||void 0===t?void 0:t.main.pressure.toString())||"0",readingUnit:"hPa"}],r=Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(R.a,{icon:_.d})," Pressure"]});return Object(T.jsx)(F,{cardTitle:r,mainReadings:n})},D=function(e){var t=e.weather,n={readingTitle:"Current",readingValue:(null===t||void 0===t?void 0:t.main.humidity.toString())||"0",readingUnit:"%"},r=Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(R.a,{icon:_.g})," Humidity"]}),i=[n];return Object(T.jsx)(F,{cardTitle:r,mainReadings:i})},I=function(e){var t=e.weather,n={readingTitle:"Current",readingValue:(null===t||void 0===t?void 0:t.main.temp.toString())||"0",readingUnit:"\xb0C"},r={readingTitle:"Min",readingValue:(null===t||void 0===t?void 0:t.main.temp_min.toString())||"0",readingUnit:"\xb0C",readingStyle:{backgroundColor:"lightsteelblue"}},i={readingTitle:"Max",readingValue:(null===t||void 0===t?void 0:t.main.temp_max.toString())||"0",readingUnit:"\xb0C",readingStyle:{backgroundColor:"lightpink"}},a=[n],c=[r,{readingTitle:"Feels Like",readingValue:(null===t||void 0===t?void 0:t.main.feels_like.toString())||"0",readingUnit:"\xb0C"},i],o=Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(R.a,{icon:_.e})," Temperature"]});return Object(T.jsx)(F,{cardTitle:o,mainReadings:a,secondaryReadings:c})},V=function(e){var t=e.weather,n=e.saveWeather;return Object(T.jsxs)("div",{className:"weatherCard__container",children:[Object(T.jsxs)("button",{style:B,onClick:n,children:[Object(T.jsx)(R.a,{icon:_.b})," Save"]}),Object(T.jsx)(L,{weather:t}),Object(T.jsx)(N,{weather:t})]})},L=function(e){var t=e.weather,n=null===t||void 0===t?void 0:t.weather[0].icon,r=n?h(n):"";return Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{id:"weatherCard__icon",style:A,children:[Object(T.jsx)("img",{src:r,alt:""}),Object(T.jsx)("div",{id:"weatherCard__description",style:P,children:Object(T.jsx)("div",{children:null===t||void 0===t?void 0:t.weather[0].main})})]}),Object(T.jsxs)("div",{id:"weatherCard__city",style:U,children:[null===t||void 0===t?void 0:t.name,", ",null===t||void 0===t?void 0:t.sys.country]})]})},N=function(e){var t=e.weather;return Object(T.jsx)("div",{className:"weatherCard__info__container",style:E,children:["temperature","wind","pressure","humidity"].map((function(e){switch(e){case"temperature":return Object(T.jsx)(I,{weather:t});case"wind":default:return Object(T.jsx)(W,{weather:t});case"pressure":return Object(T.jsx)(z,{weather:t});case"humidity":return Object(T.jsx)(D,{weather:t})}}))})},A={display:"flex",height:"180px"},P={fontSize:"xx-large",display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:"-10px"},U={fontSize:"xxx-large",marginBottom:"1em",marginTop:"-1em",textAlign:"center"},E={display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},B={backgroundColor:"#6A2C70",color:"white",borderRadius:"10px",height:"40px",width:"100%",maxWidth:"300px",border:"none",fontFamily:"Itim",cursor:"pointer",margin:"auto",fontSize:"large"},H=(n(31),{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100px"}),J={display:"flex",flexDirection:"column",justifyContent:"space-between"},K={backgroundColor:"white",color:"black",borderRadius:"10px",height:"40px",paddingLeft:"5px",fontSize:"x-large",fontFamily:"Itim"},M={backgroundColor:"#6A2C70",color:"white",borderRadius:"10px",height:"40px",border:"none",fontSize:"x-large",fontFamily:"Itim"},G={fontSize:"xx-large",marginBottom:"20px"},Y={display:"flex",justifyContent:"space-between",height:"100px",boxSizing:"border-box"},q={backgroundColor:"white",color:"black",borderRadius:"10px",height:"40px",paddingLeft:"5px",fontFamily:"Itim",marginRight:"5px",marginLeft:"5px",boxSizing:"border-box"},X={backgroundColor:"#6A2C70",color:"white",borderRadius:"10px",height:"40px",border:"none",fontFamily:"Itim"},Q=function(e){var t=e.updateWeather,n=e.toggleVisibility,i=Object(r.useState)("Search for more cities..."),a=Object(l.a)(i,2),c=a[0],o=a[1];function s(e){e.preventDefault(),c&&t(c),n&&n()}return Object(T.jsx)("div",{className:"WeatherForm",style:J,children:Object(T.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:s,style:Y,children:[Object(T.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.currentTarget.value)},onFocus:function(){o("")},style:q}),Object(T.jsx)("button",{onClick:s,style:X,children:"Go"})]})})},Z=function(e){var t=e.updateWeather,n=Object(r.useState)("Where do you live?"),i=Object(l.a)(n,2),a=i[0],c=i[1];function o(e){e.preventDefault(),a&&t(a)}return Object(T.jsxs)("div",{className:"WeatherForm",style:J,children:[Object(T.jsx)("header",{style:G,children:"Welcome to Sunrise!"}),Object(T.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:o,style:H,children:[Object(T.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.currentTarget.value)},onFocus:function(){c("")},style:K}),Object(T.jsx)("button",{onClick:o,style:M,children:"Go"})]})]})},$=function(e){var t=e.weather,n=e.setWeather,r=e.toggleVisibility,i=e.deleteLocation;var a=null===t||void 0===t?void 0:t.weather[0].icon,c=a?h(a):"";return Object(T.jsxs)("article",{style:ee,onClick:function(){n(t),r()},children:[Object(T.jsx)("div",{style:te,children:Object(T.jsx)("img",{src:c,alt:""})}),Object(T.jsx)("button",{style:re,onClick:function(e){i(t),e.stopPropagation()},children:Object(T.jsx)(R.a,{icon:_.f})}),Object(T.jsxs)("div",{style:ne,children:[Object(T.jsxs)("div",{children:[null===t||void 0===t?void 0:t.name,", ",null===t||void 0===t?void 0:t.sys.country]}),Object(T.jsxs)("div",{children:[null===t||void 0===t?void 0:t.main.temp.toString(),"\xb0C"]}),Object(T.jsx)("div",{children:null===t||void 0===t?void 0:t.weather[0].main})]})]})},ee={backgroundColor:"#b83b5e",border:"solid 1px black",width:"100%",minHeight:"130px",height:"200px",borderRadius:"30px",padding:"1em",boxShadow:"5px 5px black",marginRight:"8px",marginBottom:"8px",boxSizing:"border-box",display:"flex",alignItems:"center",cursor:"pointer",position:"relative"},te={maxWidth:"35%",display:"flex",flexDirection:"column"},ne={display:"flex",flexDirection:"column",fontSize:"x-large"},re={position:"absolute",top:"10px",right:"10px",cursor:"pointer",background:"none",border:"none",color:"white",fontSize:"x-large"},ie=function(e){var t=e.weatherList,n=e.toggleVisibility,r=e.setWeather,i=e.deleteLocation;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{style:ae,onClick:n}),Object(T.jsxs)("div",{style:ce,children:[Object(T.jsxs)("div",{style:oe,children:[Object(T.jsx)("h2",{children:"Saved Cities"}),Object(T.jsx)("h2",{children:Object(T.jsx)(R.a,{icon:_.f,onClick:n,style:{cursor:"pointer"}})})]}),t?t.map((function(e){return Object(T.jsx)($,{weather:e,setWeather:r,toggleVisibility:n,deleteLocation:i},e.name)})):Object(T.jsx)("h2",{children:"No saved cities!"})]})]})},ae={top:"0",left:"0",minHeight:"100vh",width:"100vw",zIndex:2,position:"fixed",backgroundColor:"rgba(0, 0, 0, 0.5)"},ce={minHeight:"100vh",height:"100%",width:"100vw",minWidth:"300px",maxWidth:"400px",overflowX:"hidden",overflowY:"scroll",position:"fixed",zIndex:3,backgroundColor:"#F08A5D",left:"0",top:"0",display:"flex",flexDirection:"column",padding:"20px",boxSizing:"border-box"},oe={display:"flex",justifyContent:"space-between"},se={position:"absolute",left:"10px",top:"10px",backgroundColor:"#6A2C70",color:"white",borderRadius:"10px",height:"40px",width:"auto",border:"none",fontSize:"x-large",fontFamily:"Itim",cursor:"pointer"},le={backgroundColor:"#6A2C70",color:"white",borderRadius:"10px",height:"40px",width:"auto",border:"none",fontSize:"x-large",fontFamily:"Itim",cursor:"pointer"},de={position:"absolute",right:"10px",top:"10px",display:"flex",justifyContent:"space-around"},ue={marginTop:"80px",display:"flex",flexDirection:"column",justifyContent:"center"};var be=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(),c=Object(l.a)(a,2),d=c[0],u=c[1],b=Object(r.useState)(!1),x=Object(l.a)(b,2),p=x[0],h=x[1],f=Object(r.useState)(!1),g=Object(l.a)(f,2),O=g[0],y=g[1];function w(e){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:(n=e.sent)&&(i(n),console.log(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(s.a)(Object(o.a)().mark((function e(){var t,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return t=d?d.concat(n):[n],e.next=4,v(t);case 4:r=e.sent,u(r),alert("Weather saved!");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return F=Object(s.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=5;break}return e.next=3,m(t,d);case 3:n=e.sent,u(n);case 5:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function W(){h(!1),y(!1)}return Object(r.useEffect)((function(){console.log("called"),function(){return C.apply(this,arguments)}().then((function(e){u(e)}))}),[]),Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("button",{style:se,onClick:function(){h(!0),y(!1)},children:[Object(T.jsx)(R.a,{icon:_.a})," ",O?Object(T.jsx)(T.Fragment,{}):Object(T.jsx)("span",{children:"Saved Cities"})]}),Object(T.jsxs)("div",{className:"searchBar",style:de,children:[Object(T.jsx)("button",{style:le,onClick:function(){y(!O)},children:O?Object(T.jsx)(R.a,{icon:_.f}):Object(T.jsx)(R.a,{icon:_.c})}),O&&Object(T.jsx)(Q,{updateWeather:w,toggleVisibility:W})]}),p&&Object(T.jsx)(ie,{weatherList:d,toggleVisibility:W,setWeather:function(e){i(e)},deleteLocation:function(e){return F.apply(this,arguments)}}),n?Object(T.jsx)(V,{weather:n,saveWeather:function(){return k.apply(this,arguments)}}):Object(T.jsx)("div",{style:ue,children:Object(T.jsx)(Z,{updateWeather:w})})]})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(be,{})}),document.getElementById("root")),xe()}},[[32,1,2]]]);
//# sourceMappingURL=main.bcf0b7cc.chunk.js.map