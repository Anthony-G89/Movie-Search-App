(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(2),a=s.n(r),o=s(12),c=s.n(o),i=(s(24),s(13)),l=s(14),h=s(15),d=s(18),u=s(17);s(25);var j=function(){return Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid logo-header",children:Object(n.jsx)("h1",{className:"title",children:"Movie Search "})})};s(26);var m=function(e){return Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"search-Form text-center",children:[Object(n.jsx)("label",{className:"movieSearchLabel",htmlFor:"search",children:"Search for a Movie:"}),Object(n.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",placeholder:"Enter a Movie....",className:"form-control userInput"}),Object(n.jsx)("button",{className:"movieBtn",onClick:e.handleSubmitForm,children:"Search"})]})})};s(27);var b=function(e){return Object(n.jsxs)("div",{className:"text-center movieContainer",children:[Object(n.jsx)("img",{className:"noPoster",src:"N/A"===e.src?"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png":e.src,alt:e.title}),Object(n.jsxs)("h1",{children:[Object(n.jsx)("span",{className:"movieTitle",children:"Title:"})," ","N/A"===e.title?"No information to provide...sorry":e.title]}),Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("span",{className:"movieInfo",children:"Actors:"})," ","N/A"===e.actors?"No information to provide...sorry":e.actors]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"movieInfo",children:"Directors:"})," ","N/A"===e.director?"No information to provide...sorry":e.director]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"movieInfo",children:"Plot:"})," ","N/A"===e.plot?"No information to provide...sorry":e.plot]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"movieInfo",children:"Rated:"})," ","N/A"===e.rated?"No information to provide...sorry":e.rated]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"movieInfo",children:"Genre:"})," ","N/A"===e.genre?"No information to provide...sorry":e.genre]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"movieInfo",children:"Released:"})," ","N/A"===e.released?"No information to provide...sorry":e.released]})]})},p=s(16),v=s.n(p),f=function(e){return v.a.get("http://www.omdbapi.com/?t="+e+"&apikey=3e8adfe4")},O=(s(46),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:{}},e.searchMovies=function(t){f(t).then((function(t){return e.setState({results:t.data})+console.log(t)})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var s=t.target.value,n=t.target.name;e.setState(Object(i.a)({},n,s))},e.handleSubmitForm=function(t){t.preventDefault(),e.searchMovies(e.state.search)},e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.searchMovies("The Godfather")}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{}),Object(n.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange,handleSubmitForm:this.handleSubmitForm}),this.state.results.Title?Object(n.jsx)(b,{title:this.state.results.Title,src:this.state.results.Poster,actors:this.state.results.Actors,director:this.state.results.Director,plot:this.state.results.Plot,rated:this.state.results.Rated,genre:this.state.results.Genre,released:this.state.results.Released}):Object(n.jsx)("h3",{className:"noDisplay",children:"No results to display! \ud83d\ude1e"})]})}}]),s}(r.Component)),x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),a(e),o(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),x()}},[[47,1,2]]]);
//# sourceMappingURL=main.e9f9230b.chunk.js.map