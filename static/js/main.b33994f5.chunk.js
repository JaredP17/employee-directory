(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(24),a(25),function(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"text-center"},"Employee Directory"),r.a.createElement("p",{className:"text-center"},"Click on column headers to filter by heading or use the search box to narrow your results."))}),s=a(2),i=a(3),m=a(14),u=a(15),h=a(18),d=a(17),p=(a(26),function(e){return r.a.createElement("nav",{className:"navbar navbar-light bg-light justify-content-center"},r.a.createElement("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit},r.a.createElement("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search"})))}),f=(a(27),function(e){return r.a.createElement("table",{className:"table table-striped table-sortable text-center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col","data-field":"name","data-sortable":"true"},r.a.createElement("span",{onClick:function(){return e.sortBy("name","last","first")}},"Name")),r.a.createElement("th",{scope:"col"},r.a.createElement("span",{onClick:function(){return e.sortBy("phone")}},"Phone")),r.a.createElement("th",{scope:"col"},r.a.createElement("span",{onClick:function(){return e.sortBy("email")}},"Email")),r.a.createElement("th",{scope:"col"},r.a.createElement("span",{onClick:function(){return e.sortBy("dob","date")}},"DOB")))),r.a.createElement("tbody",null,e.state.filteredEmployees.map((function(t){var a=t.name,n=a.first,l=a.last,o="".concat(n," ").concat(l),c=e.formatDate(t.dob.date);return r.a.createElement("tr",{key:t.login.uuid},r.a.createElement("td",null,r.a.createElement("img",{src:t.picture.thumbnail,alt:o})),r.a.createElement("td",{className:"align-middle"},o),r.a.createElement("td",{className:"align-middle"},r.a.createElement("a",{href:"tel:+1".concat(t.phone)},t.phone)),r.a.createElement("td",{className:"align-middle email"},r.a.createElement("a",{href:"mailto:".concat(t.email)},t.email)),r.a.createElement("td",{className:"align-middle"},c))}))))}),E=a(16),y=a.n(E),b=function(){return y.a.get("https://randomuser.me/api/?results=50&nat=us")},g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.handleInputChange=function(t){var a=t.target.value;e.setState({search:a}),e.filterEmployees(a.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortBy=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:r.reverse(),sortDirections:Object(i.a)(Object(i.a)({},e.initialSortDirections),{},Object(s.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(r=e.state.filteredEmployees.sort((function(e,r){return e=e[t],r=r[t],a?n&&e[a]===r[a]?e[n].localeCompare(r[n]):e[a].localeCompare(r[a]):e.localeCompare(r)})),e.setState({filteredEmployees:r,sortDirections:Object(i.a)(Object(i.a)({},e.initialSortDirections),{},Object(s.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(a){return a.name.first.toLowerCase().concat(" ",a.name.last.toLowerCase()).includes(t)||a.phone.includes(t)||a.phone.replace(/[^\w\s]/gi,"").includes(t)||a.email.includes(t)||e.formatDate(a.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(("0"+e.getDate()).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),r.a.createElement("div",{className:"container mt-4"},r.a.createElement(f,{state:this.state,sortBy:this.sortBy,filterEmployees:this.filterEmployees,formatDate:this.formatDate})))}},{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:""}}}]),a}(n.Component),v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b33994f5.chunk.js.map