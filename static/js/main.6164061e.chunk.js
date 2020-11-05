(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),l=n(3),o=n(4),u=n(5),i=n(8),d=n(7),m=(n(18),n(19),n(6)),p=n.n(m),h=n(1),f=n.n(h),v=(f.a.bool,f.a.string.isRequired,f.a.number,f.a.func.isRequired,function(e){var t=e.completed,n=e.title,a=e.userId,c=e.changeUserId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:t}),r.a.createElement("p",null,n)),r.a.createElement("button",{className:p()("TodoList__user-button","button",{"TodoList__user-button--selected":t}),type:"button",onClick:function(){return c(a)}},"User\xa0#",a))});v.defaultProps={userId:0,completed:!1};var b={selectValue:f.a.string.isRequired,filterQuery:f.a.string.isRequired,handleChange:f.a.func.isRequired},_=(n(22),function(e){var t=e.filterQuery,n=e.handleChange,a=e.selectValue;return r.a.createElement("div",{className:"Controllers"},r.a.createElement("input",{className:"Controllers__input",placeholder:"Enter todo",name:"filterQuery",value:t,onChange:n}),r.a.createElement("select",{className:"Controllers__select",name:"selectValue",value:a,onChange:n},r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"active"},"active"),r.a.createElement("option",{value:"completed"},"completed")))}),E=(n(23),n(12)),g=(Object(E.a)({todos:f.a.arrayOf(f.a.shape({id:f.a.number.isRequired,completed:f.a.bool,title:f.a.string.isRequired,userId:f.a.number}))},b),function(e){var t=e.todos,n=e.filterQuery,a=e.handleChange,c=e.selectValue,s=e.changeUserId;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement(_,{className:"TodoList__controllers",filterQuery:n,handleChange:a,selectValue:c}),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){var t=e.completed,n=e.id,c=e.title,l=e.userId;return r.a.createElement("li",{key:n,className:p()("TodoList__item",{"TodoList__item--checked":t,"TodoList__item--unchecked":!t})},r.a.createElement(v,{completed:t,title:c,userId:l,handleChange:a,changeUserId:s}))})))))}),y=n(2),C=n.n(y),U=n(9),I=(f.a.number.isRequired,f.a.func.isRequired,"https://mate-api.herokuapp.com");function k(e){return fetch("".concat(I,"/users/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))}n(25);var N=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e.changeUser=Object(U.a)(C.a.mark((function t(){var n,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.userId,t.prev=1,t.next=4,k(n);case 4:a=t.sent,e.setState({user:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.warn(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(U.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.changeUser();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(U.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.userId,t.userId!==n){e.next=3;break}return e.abrupt("return");case 3:this.changeUser();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.userId,n=e.resetUserId,a=this.state.user;return a?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:"," ",t)),r.a.createElement("h3",{className:"CurrentUser__name"},a.name),r.a.createElement("p",{className:"CurrentUser__email"},a.email),r.a.createElement("p",{className:"CurrentUser__phone"},a.phone),r.a.createElement("button",{type:"button",className:"CurrentUser__button button",onClick:n},"Clear")):r.a.createElement("p",null,"User not found")}}]),n}(r.a.PureComponent),j=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,filterQuery:"",selectValue:"all"},e.callbacksForCompletedFilter={all:function(){return!0},active:function(e){return!e},completed:function(e){return e}},e.changeUserId=function(t){e.setState({selectedUserId:t})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.resetUserId=function(){e.setState({selectedUserId:0})},e.getFiltredTodos=function(){var t=e.state,n=t.todos,a=t.filterQuery,r=t.selectValue;return n.filter((function(t){var n=t.title,c=t.completed,s=n.toLowerCase(),l=a.toLowerCase();return s.includes(l)&&e.callbacksForCompletedFilter[r](c)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(I,"/todos")).then((function(e){return e.json()})).then((function(e){return e.data})).then((function(e){return e.filter((function(e){var t=e.id,n=e.title;return t&&n}))})).then((function(t){e.setState({todos:t})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.filterQuery,a=e.selectValue;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(g,{todos:this.getFiltredTodos(),selectUserId:this.selectUserId,filterQuery:n,handleChange:this.handleChange,changeUserId:this.changeUserId,selectValue:a})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},t?r.a.createElement(N,{userId:t,resetUserId:this.resetUserId}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.6164061e.chunk.js.map