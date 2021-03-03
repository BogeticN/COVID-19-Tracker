(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var r,a,c=n(1),s=n.n(c),o=n(70),i=n.n(o),d=n(3),l=n(13),b=n.n(l),j=function(){return b.a.get("https://covid-19-tracker-server.herokuapp.com/users")},x=n(12),h=n(0),p=function(e){var t=e.balkanCountries,n=t.map((function(e){return e.cases})),r={labels:t.map((function(e){return e.country})),datasets:[{label:"Total cases ",data:n,backgroundColor:["rgb(209, 153, 10)","rgb(209, 153, 10)","rgb(209, 153, 10)","rgb(209, 153, 10)","rgb(209, 153, 10)","rgb(209, 153, 10)","rgb(209, 153, 10)","rgb(209, 153, 10)","rgb(209, 153, 10)"]},{label:"Deaths",data:t.map((function(e){return e.deaths})),backgroundColor:["rgb(148, 11, 11)","rgb(148, 11, 11)","rgb(148, 11, 11)","rgb(148, 11, 11)","rgb(148, 11, 11)","rgb(148, 11, 11)","rgb(148, 11, 11)","rgb(148, 11, 11)","rgb(148, 11, 11)"]},{label:"Recovered",data:t.map((function(e){return e.recovered})),backgroundColor:["rgb(11, 114, 20)","rgb(11, 114, 20)","rgb(11, 114, 20)","rgb(11, 114, 20)","rgb(11, 114, 20)","rgb(11, 114, 20)","rgb(11, 114, 20)","rgb(11, 114, 20)","rgb(11, 114, 20)"]}]};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.Bar,{data:r,options:{title:{display:!0,text:"Balkan peninsula statistics",fontColor:"white",fontSize:20},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{gridLines:{display:!0},ticks:{fontColor:"white"}}]},legend:{labels:{fontSize:13,fontColor:"white"}}}})})},g=n(11),u=function(e){var t=e.country;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("img",{src:t.countryInfo.flag,style:{width:"30px",height:"20px"}}),Object(h.jsx)(g.b,{to:"/".concat(t.country),children:t.country})]}),Object(h.jsx)("td",{children:t.cases.toLocaleString()}),Object(h.jsx)("td",{children:t.deaths.toLocaleString()}),Object(h.jsx)("td",{children:t.recovered.toLocaleString()}),Object(h.jsx)("td",{children:t.population.toLocaleString()})]})},O=function(e){var t=e.setSelectNumber;return Object(h.jsxs)("select",{onChange:function(e){return t(e.target.value)},children:[Object(h.jsx)("option",{value:20,children:"20"}),Object(h.jsx)("option",{value:50,children:"50"}),Object(h.jsx)("option",{value:100,children:"100"}),Object(h.jsx)("option",{value:1/0,children:"All"})]})},v=n(5),m=n(6),f=m.a.table(r||(r=Object(v.a)(['\n\n    font-family: "Arial Black", Gadget, sans-serif;\n    border: 2px solid #415172;\n    background-color: #4A4A4A;\n    width: 60%;\n    height: 200px;\n    text-align: center;\n    border-collapse: collapse;\n    margin:auto;\n    line-height:2.5;\n    \n    \n   td, table th {\n    border: 1px solid #4A4A4A;\n    padding: 3px 2px;\n  }\n   tbody td {\n    font-size: 13px;\n    color: #E6E6E6;\n  }\n   tr:nth-child(even) {\n    background: #888888;\n  }\n   thead {\n    background: #000000;\n    border-bottom: 3px solid #000000;\n  }\n   thead th {\n    font-size: 15px;\n    font-weight: bold;\n    color: #E6E6E6;\n    text-align: center;\n    border-left: 2px solid #4A4A4A;\n  }\n   thead th:first-child {\n    border-left: none;\n  }\n']))),y=m.a.div(a||(a=Object(v.a)(["\n    margin-top:1rem;\n    display: flex;\n    flex-direction: row!important;\n    text-align: center; \n    width:60%;\n\n\ninput { \n    margin-top:1rem;\n    margin-bottom: 1rem;\n    width: 200px;\n    height: 25px;\n}\n.select {\n    display: inline-block;\n    height: 30px;\n    line-height: 1.8;\n    margin-left: 0px;\n    \n}\n"])));var C,k,w,N,S,L,z,A,B,D=function(e){var t=e.allCountries,n=Object(c.useState)(20),r=Object(d.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(1),i=Object(d.a)(o,2),l=i[0],b=i[1],j=Object(c.useState)(""),x=Object(d.a)(j,2),p=x[0],g=x[1],v=t.filter((function(e){return e.country.toLowerCase().includes(p.toLocaleLowerCase())})),m=function(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n}(1,Math.ceil(v.length/a)+1);return Object(h.jsxs)("div",{children:[Object(h.jsxs)(y,{children:[Object(h.jsxs)("div",{className:"select",children:[Object(h.jsx)("span",{children:"Show"}),Object(h.jsx)(O,{setSelectNumber:s}),Object(h.jsx)("span",{children:"countries"})]}),Object(h.jsx)("input",{type:"search",placeholder:"Search countries...",onChange:function(e){return g(e.target.value)}})]}),Object(h.jsx)(f,{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Country"}),Object(h.jsx)("th",{children:"Total cases"}),Object(h.jsx)("th",{children:"Deaths"}),Object(h.jsx)("th",{children:"Recovered"}),Object(h.jsx)("th",{children:"Population"})]}),v.slice(a*(l-1),a*l).map((function(e){return Object(h.jsx)(u,{country:e},e.country)}))]})}),m.map((function(e){return Object(h.jsx)("button",{className:"btn btn-secondary",onClick:function(){return b(e)},children:e},e)}))]})},T=function(e){var t=e.continents,n={labels:t.map((function(e){return e.continent})),datasets:[{label:"Total cases by continents",fontColor:"white",data:t.map((function(e){return e.cases})),borderColor:"grey",backgroundColor:["rgb(209, 153, 10)","rgb(148, 11, 11)","rgb(11, 114, 20)","rgb(96, 11, 129)","rgb(10, 54, 173)","rgb(5, 158, 158)"]}]};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.Pie,{data:n,options:{title:{display:!0,text:"Total cases by continent",fontColor:"white",fontSize:20},legend:{labels:{fontColor:"white"}}}})})},E=function(e){var t={labels:e.days,datasets:[{label:"Total cases",data:e.cases,borderColor:["rgb(209, 153, 10, 0.2)"],backgroundColor:["rgb(209, 153, 10, 0.2)"],pointBackgroundColor:"rgb(209, 153, 10, 0.2)",pointBorderColor:" rgb(209, 153, 10, 0.2)"},{label:"Deaths",data:e.deaths,borderColor:["rgb(148, 11, 11, 0.2)"],backgroundColor:["rgb(148, 11, 11, 0.2)"],pointBackgroundColor:"rgb(148, 11, 11, 0.2)",pointBorderColor:"rgb(148, 11, 11, 0.2)"},{label:"Recovered",data:e.recovered,borderColor:["rgb(11, 114, 20, 0.4)"],backgroundColor:["rgb(11, 114, 20, 0.4)"],pointBackgroundColor:"rgb(11, 114, 20, 0.4)",pointBorderColor:"rgb(11, 114, 20, 0.4)"}]};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.Line,{data:t,options:{title:{display:!0,text:"Total cases over time",fontColor:"white",fontSize:20},scales:{yAxes:[{ticks:{min:0,max:12e7,stepSize:2e7,fontColor:"white"}}],xAxes:[{gridLines:{display:!0},ticks:{fontColor:"white"}}]},legend:{labels:{fontSize:13,fontColor:"white"}}}})})},U=m.a.div(C||(C=Object(v.a)(["\n\n    display: flex;\n\tmargin: 20px auto;\n\twidth: 85%;\n\theight: 350px;\n\n.text-card {\n\twidth: 250px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tdisplay:inline-block;\n\ttext-align: center;\n\tbackground-color: #39455f;\n\t-webkit-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n\t-moz-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n\tbox-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n  }\n.text-card p{\n\tfont-size: 33px!important;\n\tbackground-color: #39455f;\n}\n\n.heading {\n\t  padding: 40px 10px;\n\t  background-color: #39455f;\n  }\n.text-box {\n\t  padding:10px;\n\t  background-color: #39455f;\n\t}\n.total-cases {\n\tborder:1px solid rgb(133, 131, 131);\n}\n.total-cases p{\n\tcolor:rgb(133, 131, 131)\n}\n\t\t \n.deaths {\n\tborder:1px solid rgb(194, 88, 88);\n\n\t\n}\n.deaths p{\n\tcolor: rgb(194, 88, 88)\n}\n\n.active{\n\tborder:1px solid rgb(102, 117, 187);\n\n}\n.active p{\n\tcolor:rgb(102, 117, 187)\n}\n.recovered{\n\tborder:1px solid rgb(102, 187, 106);\n\n}\n.recovered p{\n\tcolor:rgb(102, 187, 106)\n}\n  \n"]))),P=m.a.div(k||(k=Object(v.a)(["\n\n    height: 50%!important;\n    width: 100%;\n\n.chart{\n    width: 80%!important;\n    margin-top:240px!important;\n    margin-bottom:240px!important;\n    padding: 40px;\n    background-color: #39455f;\n    color: white;\n    display: block;\n    border-radius: 30px;\n    -webkit-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n\t-moz-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n\tbox-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n}\ncanvas{\n    background-color: #39455f\n}\n"]))),R=m.a.div(w||(w=Object(v.a)(["\n    \n\tfont-size: 10px!important;\n     p {\n\tfont-size: 11px!important;\n}\n"]))),F=function(e){var t,n,r,a,s=e.balkanCountries,o=e.continents,i=e.allCountries,l=e.historyStats,j=e.days,x=e.cases,g=e.deaths,u=e.recovered,O=Object(c.useState)([]),v=Object(d.a)(O,2),m=v[0],f=v[1];return Object(c.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/all").then((function(e){f(e.data)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"World statistics"}),Object(h.jsxs)(R,{className:"date",children:["Last updated:",Object(h.jsx)("p",{children:String(new Date(m.updated).toLocaleString())})]}),Object(h.jsxs)(U,{children:[Object(h.jsxs)("div",{className:"text-card total-cases",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsx)("p",{children:null===(t=m.cases)||void 0===t?void 0:t.toLocaleString()})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Total cases"})})]}),Object(h.jsxs)("div",{className:"text-card deaths",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsx)("p",{children:null===(n=m.deaths)||void 0===n?void 0:n.toLocaleString()})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Deaths"})})]}),Object(h.jsxs)("div",{className:"text-card recovered",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsx)("p",{children:null===(r=m.recovered)||void 0===r?void 0:r.toLocaleString()})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Recovered"})})]}),Object(h.jsxs)("div",{className:"text-card active",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsx)("p",{children:null===(a=m.active)||void 0===a?void 0:a.toLocaleString()})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Active"})})]})]}),Object(h.jsx)(D,{allCountries:i}),Object(h.jsxs)(P,{children:[Object(h.jsx)("div",{className:"chart",children:Object(h.jsx)(E,{historyStats:l,days:j,deaths:g,cases:x,recovered:u})}),Object(h.jsx)("div",{className:"chart",children:Object(h.jsx)(T,{continents:o})}),Object(h.jsx)("div",{className:"chart",children:Object(h.jsx)(p,{balkanCountries:s})})]})]})},M=n(2),I=m.a.div(N||(N=Object(v.a)(["\n\n\twidth: 750px;\n\theight: 500px; \n\tborder: 1px solid black;\n\tbackground-color:#242c3d;\n\tpadding-top:150px;\n    border-radius:100px;\n\n\n    div {\n\tbackground-color:#242c3d;\n    \n}\n    p {\n\n    background-color:#242c3d;    \n\tfont-size:15px!important;\n    border-radius:100px\n}   \n    a {\n\tfont-size:15px!important;\n    border-radius:100px\n}\n    .text-login {\n    padding-top:20px;\n    border-bottom-left-radius: 100px;\n    border-bottom-right-radius: 100px;\n    padding-left:100px;\n    padding-right:100px;\n}\ninput[type=text]{\n    margin-right:7px;\n}\n.div-submit{\n    padding:15px;\n    margin:40px;\n}\n"]))),V=function(e){var t=e.setUser,n=e.user,r=e.loginUsername,a=e.setLoginUsername,s=Object(c.useState)(""),o=Object(d.a)(s,2),i=o[0],l=o[1],b=Object(c.useState)(""),x=Object(d.a)(b,2),p=x[0],u=x[1],O=Object(M.g)();return Object(h.jsxs)(I,{children:[Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),j().then((function(e){var n=e.data.find((function(e){return(e.username===r||e.email===r)&&e.password===i}));n?(t(n),O.push("/")):u("You have entered an invalid username or password")}))},children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:["Username: ",Object(h.jsx)("input",{type:"text",placeholder:"Username...",onChange:function(e){return a(e.target.value)}})]}),Object(h.jsxs)("div",{children:["Password: ",Object(h.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(e){return l(e.target.value)}})]}),Object(h.jsx)("div",{className:"div-submit",children:Object(h.jsx)("input",{type:"submit",className:"btn btn-secondary",style:{paddingLeft:"50px",paddingRight:"50px"},value:"Login"})})]})}),p,n?null:Object(h.jsxs)("div",{className:"text-login",children:[Object(h.jsx)("p",{children:"You have to log in to see detailed statistics for each country"}),Object(h.jsxs)("p",{children:["No account?",Object(h.jsx)(g.b,{to:"/register",children:"Create one"})]})]})]})},Z=m.a.div(S||(S=Object(v.a)(["\n    \n\twidth: 750px;\n\theight: 500px; \n\tborder: 1px solid black;\n\tbackground-color:#242c3d;\n\tpadding-top:155px;\n\tpadding-bottom:75px;\n    border-radius:100px;\n\n.register-input{\n\tbackground-color: #242c3d;\n\t\n}\n.email{\n\tmargin-left:24px;\n\tbackground-color: #242c3d;\n\tmargin-right:24px;\n}\n.password{\n\t\n\tmargin-right:38px;\n\tbackground-color: #242c3d;\n}\n.submit{\n\tbackground-color: #242c3d;\n\tpadding: 15px;\n\t margin: 40px ;\n\t padding-left:40px;\n\t padding-right: 50px;\n\t \n\n}\n.submit input {\n\tpadding-left:50px;\n\tpadding-right:50px;\n}\n.username{\n\tbackground-color: #242c3d;\n\tmargin-right:44px;\n}\n.error{\n    background-color: #242c3d;\n    margin-left:75px;\n    margin-right:75px;\n    \n}\n"]))),G=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),o=s[0],i=s[1],l=Object(c.useState)(),x=Object(d.a)(l,2),p=x[0],g=x[1],u=Object(c.useState)(""),O=Object(d.a)(u,2),v=O[0],m=O[1],f=Object(M.g)(),y=/(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,C=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return Object(h.jsxs)(Z,{children:[Object(h.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),!function(e,t,n){return(null===t||void 0===t?void 0:t.length)>=4&&(null===e||void 0===e?void 0:e.length)>=6&&y.test(e)&&C.test(n)}(p,n,o))return y.test(p)||m("Password must contain at least one upper case,one lower case,and one number"),(null===p||void 0===p?void 0:p.length)<6&&m("Password must have at least 6 characters"),(null===n||void 0===n?void 0:n.length)<4&&m("Username must have at least 4 characters"),void(C.test(o)||m("Invalid email adress"));j().then((function(e){e.data.some((function(e){return e.username===n||e.email===o}))?window.alert("User already exists"):function(e,t,n){return b.a.post("https://covid-19-tracker-server.herokuapp.com/users",{username:e,email:t,password:n})}(n,o,p).then((function(){f.push("/login")})),console.log(e.data)}))},children:Object(h.jsxs)("div",{className:"register-input",children:[Object(h.jsxs)("div",{className:"username",children:["Username: ",Object(h.jsx)("input",{type:"text",placeholder:"Username...",onChange:function(e){return r(e.target.value)}})]}),Object(h.jsxs)("div",{className:"email",children:["Email: ",Object(h.jsx)("input",{type:"email",placeholder:"Email...",onChange:function(e){return i(e.target.value)}})]}),Object(h.jsxs)("div",{className:"password",children:["Password: ",Object(h.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(e){return g(e.target.value)}})]}),Object(h.jsx)("div",{className:"submit",children:Object(h.jsx)("input",{className:"btn btn-secondary",type:"submit",value:"Register"})})]})}),Object(h.jsx)("div",{className:"error",children:v})]})},J=m.a.nav(L||(L=Object(v.a)(["\n   overflow: hidden;\n   text-align: right;\n   background-color:  #242c3d;\n   border-bottom:2px solid #39455f ;\n   width:100%;\n   span{\n     margin-left:30px;\n     margin-right:30px;\n     background-color:#242c3d;\n   }\n"]))),Y=Object(m.a)(g.b)(z||(z=Object(v.a)(["\n  padding:10px\n"]))),H=function(e){var t=e.user,n=e.setUser,r=e.loginUsername;return Object(h.jsxs)("header",{children:[Object(h.jsxs)(J,{children:[Object(h.jsx)(Y,{to:"/",children:"Home"}),t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:r}),Object(h.jsx)("button",{className:"btn btn-secondary",onClick:function(){return n(null)},children:"Log out"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Y,{to:"/login",children:"Login"}),Object(h.jsx)(Y,{to:"/register",children:"Register"})]})]}),Object(h.jsx)("h1",{style:{textAlign:"left"},children:"Covid-19 Tracker"})]})},W=n(74),$=function(e){var t=e.days,n=e.cases,r=e.recovered,a={labels:t,datasets:[{label:"Total cases",data:n,borderColor:["rgb(209, 153, 10, 0.2)"],backgroundColor:["rgb(209, 153, 10, 0.2)"],pointBackgroundColor:"rgb(209, 153, 10, 0.2)",pointBorderColor:" rgb(209, 153, 10, 0.2)"},{label:"Deaths",data:e.deaths,borderColor:["rgb(148, 11, 11, 0.2)"],backgroundColor:["rgb(148, 11, 11, 0.2)"],pointBackgroundColor:"rgb(148, 11, 11, 0.2)",pointBorderColor:"rgb(148, 11, 11, 0.2)"},{label:"Recovered",data:r,borderColor:["rgb(11, 114, 20, 0.4)"],backgroundColor:["rgb(11, 114, 20, 0.4)"],pointBackgroundColor:"rgb(11, 114, 20, 0.4)",pointBorderColor:"rgb(11, 114, 20, 0.4)"}]},c={title:{display:!0,text:"Total cases over last 30 days",fontColor:"white",fontSize:20},scales:{yAxes:[{ticks:{min:0,max:Math.max.apply(Math,Object(W.a)(n)),stepSize:n/5,fontColor:"white"}}],xAxes:[{gridLines:{display:!0},ticks:{fontColor:"white"}}]},legend:{labels:{fontSize:13,fontColor:"white"}}};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.Line,{data:a,options:c})})},_=function(e){var t=e.countryDetail,n={labels:["Total cases","Active","Deaths","Recovered"],datasets:[{label:"Statistics per 1 million people",data:[null===t||void 0===t?void 0:t.casesPerOneMillion,null===t||void 0===t?void 0:t.activePerOneMillion,null===t||void 0===t?void 0:t.deathsPerOneMillion,null===t||void 0===t?void 0:t.recoveredPerOneMillion],borderColor:"grey",backgroundColor:["rgb(209, 153, 10)","rgb(10, 54, 173)","rgb(148, 11, 11)","rgb(11, 114, 20)"]}]};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.Doughnut,{data:n,options:{title:{display:!0,text:"Statistics per 1 million people",fontColor:"white",fontSize:20},legend:{labels:{fontColor:"white"}}}})})},q=m.a.div(A||(A=Object(v.a)(["\n    display: grid;\n\tmargin-bottom: 170px;\n    margin-top:100px;\n\twidth: 100%;\n\theight: 350px;\n\n.single-text-cards {\n\twidth: 250px;\n\tbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n\tdisplay:inline-block;\n\ttext-align: center;\n\tbackground-color: #39455f;\n    margin-left:20px;\n    margin-right:20px;\n\t-webkit-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n\t-moz-box-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n\tbox-shadow: 24px 21px 62px -4px rgba(12,13,38,1);\n  }\n.single-text-cards p{\n\tfont-size: 25px!important;\n}\np {\n    background-color:#39455f\n}\n.heading {\n\t  padding: 40px 10px;\n\t  background-color: #39455f;\n  }\n.text-box {\n\t  padding:10px;\n\t  background-color: #39455f;\n\t}\n.total-cases {\n\tborder:1px solid rgb(133, 131, 131);\n}\n.total-cases p{\n\tcolor:rgb(133, 131, 131);\n}\t \n.deaths {\n\tborder:1px solid rgb(194, 88, 88);\n}\n.deaths p{\n\tcolor: rgb(194, 88, 88)\n}\n.active{\n\tborder:1px solid rgb(102, 117, 187);\n}\n.active p{\n\tcolor:rgb(102, 117, 187)\n}\n.recovered{\n\tborder:1px solid rgb(102, 187, 106);\n}\n.recovered p{\n\tcolor:rgb(102, 187, 106)\n}\n.population {\n    border:1px solid rgb(209, 153, 10)\n}\n.population p {\n    color:rgb(209, 153, 10)\n}\n.tests{\n    border:1px solid #b8a9c9\n}\n.tests p{\n    color:#b8a9c9\n}\n.today-cases{\n    border:1px solid #c0ded9\n}\n.today-cases p{\n    color:#c0ded9\n}\n.today-deaths{\n    border:1px solid #a96e5b\n}\n.today-deaths p{\n    color:#a96e5b\n}\n.critical{\n    border:1px solid #f76b6b\n}\n.critical p{\n    color:#f7786b\n}\n"]))),K=function(e){var t=e.allCountries,n=e.user,r=Object(c.useState)(null),a=Object(d.a)(r,2),s=a[0],o=a[1],i=s?Object.values(s.timeline.cases):[],l=s?Object.values(s.timeline.deaths):[],j=s?Object.values(s.timeline.recovered):[],x=s?Object.keys(s.timeline.cases):[],p=Object(M.h)().country,g=t.find((function(e){return e.country==p}));return Object(c.useEffect)((function(){var e=!0;return function(e){return b.a.get("https://disease.sh/v3/covid-19/historical/".concat(e,"?lastdays=30"))}(p).then((function(t){e&&o(t.data)})),function(){return e=!1}}),[]),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:null===g||void 0===g?void 0:g.country}),Object(h.jsxs)(q,{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"single-text-cards total-cases",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.cases.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Total cases"})})]}),Object(h.jsxs)("div",{className:"single-text-cards recovered",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.recovered.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Recovered"})})]}),Object(h.jsxs)("div",{className:"single-text-cards deaths",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.deaths.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Deaths"})})]}),Object(h.jsxs)("div",{className:"single-text-cards critical",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.critical.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Critical"})})]})]}),Object(h.jsxs)("div",{style:{marginTop:"50px",marginBottom:"50px"},children:[Object(h.jsxs)("div",{className:"single-text-cards population",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.population.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Population"})})]}),Object(h.jsxs)("div",{className:"single-text-cards tests",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.tests.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Tests"})})]}),Object(h.jsxs)("div",{className:"single-text-cards today-cases",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.todayCases.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Today cases"})})]}),Object(h.jsxs)("div",{className:"single-text-cards today-deaths",children:[Object(h.jsx)("div",{className:"heading",children:Object(h.jsxs)("p",{children:[" ",null===g||void 0===g?void 0:g.todayDeaths.toLocaleString()]})}),Object(h.jsx)("div",{className:"text-box",children:Object(h.jsx)("p",{children:"Today deaths"})})]})]})]}),Object(h.jsxs)(P,{children:[Object(h.jsx)("div",{className:"chart",style:{marginBottom:"3110px"},children:Object(h.jsx)(_,{countryDetail:g})}),s?Object(h.jsx)("div",{className:"chart",children:Object(h.jsx)($,{days:x,cases:i,deaths:l,recovered:j})}):null]})]}):Object(h.jsx)(M.a,{to:"/login"})},Q=m.a.footer(B||(B=Object(v.a)(["\n     \n    background-color: #242c3d;\n\tborder-top:2px solid #39455f ;\n\twidth: 100%;\n\tposition: fixed;\n  \tleft: 0;\n  \tbottom: 0;\n \ttext-align: center;\n\n p {\n\tbackground-color: #242c3d;\n\tfont-size: 12px!important;\n\tmargin:0;\n}\n a {\n\tbackground-color: #242c3d;\n\tfont-size: 12px!important;\n\tmargin:0;\n}\n"]))),X=function(){return Object(h.jsxs)(Q,{children:[Object(h.jsx)("p",{children:"Author: Nemanja Bogetic"}),Object(h.jsxs)("p",{children:["Data from ",Object(h.jsx)("a",{href:"https://disease.sh/docs/",children:"NOVELCoVID19 API"})]})]})},ee=(n(195),function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),o=s[0],i=s[1],l=Object(c.useState)([]),j=Object(d.a)(l,2),x=j[0],p=j[1],u=Object(c.useState)([]),O=Object(d.a)(u,2),v=O[0],m=O[1],f=Object(c.useState)([]),y=Object(d.a)(f,2),C=y[0],k=y[1],w=Object(c.useState)(""),N=Object(d.a)(w,2),S=N[0],L=N[1];Object(c.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((function(e){p(e.data)}))}),[]),Object(c.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/continents").then((function(e){m(e.data)}))}),[]),Object(c.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){i(e.data)}))}),[]),Object(c.useEffect)((function(){b.a.get("https://disease.sh/v3/covid-19/countries/Serbia%2CGreece%2CBosnia%2CCroatia%2CMacedonia%2CAlbania%2CBulgaria%2CRomania%2CMontenegro").then((function(e){k(e.data)}))}),[]);var z=Object.keys(x.cases?x.cases:x),A=Object.values(x.cases?x.cases:x),B=Object.values(x.deaths?x.deaths:x),D=Object.values(x.recovered?x.recovered:x);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(g.a,{basename:"/COVID-19-Tracker",children:[Object(h.jsx)(H,{user:n,loginUsername:S,setUser:r}),Object(h.jsxs)(M.d,{children:[Object(h.jsx)(M.b,{exact:!0,path:"/",children:Object(h.jsx)(F,{continents:v,allCountries:o,historyStats:x,days:z,deaths:B,cases:A,recovered:D,balkanCountries:C})}),Object(h.jsx)(M.b,{path:"/login",children:Object(h.jsx)(V,{loginUsername:S,setLoginUsername:L,setUser:r,user:n})}),Object(h.jsx)(M.b,{path:"/register",children:Object(h.jsx)(G,{})}),Object(h.jsx)(M.b,{path:"/:country",children:Object(h.jsx)(K,{allCountries:o,user:n})})]})]}),Object(h.jsx)(X,{})]})});i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(ee,{})}),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.ee56173d.chunk.js.map