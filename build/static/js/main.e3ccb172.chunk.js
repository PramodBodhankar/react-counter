(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),i=a.n(r),o=a(7),l="FETCH_FRIENDS",c="ADD_TO_LIST",d="REMOVE_FROM_LIST",m=a(8),u={friendsList:[]},p=[{name:"Santosh Jangle",isFavorite:!1},{name:"Kaustub Dhanudiyal",isFavorite:!1},{name:"Shubham Mhaskar",isFavorite:!1},{name:"Vijay Bisht",isFavorite:!1},{name:"Ankit Agarwal",isFavorite:!1}];var h=Object(o.a)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=Object(m.cloneDeep)(e.friendsList);switch(t.type){case l:return Object.assign({},e,{friendsList:p});case c:var n={name:t.payload.name,isFavorite:!1};return a.push(n),Object.assign({},e,{friendsList:a});case d:var s=a.findIndex((function(e){return e.name===t.payload.frnd.name}));return s>-1&&a.splice(s,1),Object.assign({},e,{friendsList:a});default:return e}}}),f={instance:null,get storeInstance(){return this.instance||(this.instance={store:null,persist:null,storeAndPersistance:function(){null==this.store&&(this.store=Object(o.b)(h))},getStorePersistInstance:function(){return{store:this.store}}}),this.instance}}.storeInstance;f.storeAndPersistance();var v=f.getStorePersistInstance(),g=a(6),b=a(1),w=a(2),E=a(4),y=a(3),L=a(12),x=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={open:!1},n}return Object(w.a)(a,[{key:"closeModal",value:function(){this.props.onClose()}},{key:"render",value:function(){return s.a.createElement(L.a,{modal:!0,open:this.props.open,closeOnDocumentClick:!1,position:"top center",className:"confirm-popup"},s.a.createElement("div",{className:"popup-body"},s.a.createElement("div",{className:"justify-content-end m-0 pop-up-close-wrapper row"},s.a.createElement("div",{className:"pop-up-close",onClick:this.closeModal.bind(this)},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-circle",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),s.a.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})))),s.a.createElement("div",{className:"row popup-title d-flex justify-content-center mb-4"},this.props.message),s.a.createElement("div",{className:"d-flex justify-content-center popup-footer-btns row m-0 mb-4"},s.a.createElement("div",{className:"d-flex footer-btn-wrapper"},s.a.createElement("div",{className:"custom-btn mr-3 px-3 py-1 rounded",onClick:this.props.onClose},s.a.createElement("span",null,"Cancel")),s.a.createElement("div",{className:"custom-btn px-3 py-1 rounded",onClick:this.props.onConfirm},s.a.createElement("span",null,"Confirm"))))))}}]),a}(n.Component),C=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={searchText:"",list:[],currentPageRecords:[],showConfirmation:!1,confirmationMsg:"",duplicateError:!1,deleteFrndObj:null,pages:[],currentpage:1},console.log(e.friendsList),n}return Object(w.a)(a,[{key:"componentDidUpdate",value:function(e){e.friendsList.length!=this.props.friendsList.length&&this.setListData(this.state.searchText)}},{key:"setListData",value:function(e){var t=this.props.friendsList;e&&(t=this.props.friendsList.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})));var a=t=t.sort((function(e,t){return e.isFavorite&&!t.isFavorite?-1:!e.isFavorite&&t.isFavorite?1:void 0})),n=[];if(t.length>4){for(var s=Math.ceil(t.length/4),r=0;r<s;r++)n.push(r+1);var i=4*(this.state.currentpage-1),o=i+4;a=t.slice(i,o)}this.setState({list:t,currentPageRecords:a,pages:n})}},{key:"searchTextChange",value:function(e){var t=e.target.value;this.setListData(t),this.setState({searchText:t})}},{key:"setFavorite",value:function(e){var t=this,a=4*(this.state.currentpage-1)+e,n=this.state.list;n[a].isFavorite=!n[a].isFavorite,this.setState({list:n},(function(){t.setListData(t.state.searchText)}))}},{key:"checkAndAdd",value:function(e){var t=e.target.value;"Enter"!==e.key&&13!==e.keyCode||!t.trim()?this.state.duplicateError&&this.setState({duplicateError:!1}):this.props.friendsList.findIndex((function(e){return e.name.toLowerCase()===t.toLowerCase()}))>-1?this.setState({duplicateError:!0}):this.props.onAddFriend()}},{key:"onPageChange",value:function(e){var t=this;this.setState({currentpage:e},(function(){t.setListData()}))}},{key:"onDeleteFrnd",value:function(){this.state.deleteFrndObj&&this.props.onDelete(this.state.deleteFrndObj),this.hideConfirmation()}},{key:"showDeleteConfirmation",value:function(e){var t="Are you sure? Do you want to delete "+e.name+" from list?";this.setState({showConfirmation:!0,deleteFrndObj:e,confirmationMsg:t})}},{key:"hideConfirmation",value:function(){this.setState({showConfirmation:!1,confirmationMsg:"",deleteFrndObj:null})}},{key:"render",value:function(){var e=this;console.log(this.props);return s.a.createElement("div",{className:"list-container"},s.a.createElement("div",{className:"justify-content-between list-header m-0 px-3 py-3 row"},s.a.createElement("span",{className:"list-label"},"Friends List"),s.a.createElement("div",{className:"search-wrapper"},s.a.createElement("input",{type:"text",placeholder:"Search Friend",value:this.state.searchText,onChange:function(t){return e.searchTextChange(t)}}))),s.a.createElement("div",{className:"list-add-row row m-0 p-2"},s.a.createElement("div",{className:"add-input-wrapper w-100"},s.a.createElement("input",{className:"w-100",type:"text",placeholder:"Enter your friends name",onKeyUp:function(t){return e.checkAndAdd(t)}})),this.state.duplicateError?s.a.createElement("div",{className:"error-label"},"Friend with same name already exist"):null),this.state.currentPageRecords.map((function(t,a){return s.a.createElement("div",{key:t.name+a,className:"list-item-row row m-0 px-3 py-2 justify-content-between"},s.a.createElement("div",{className:"name-details"},s.a.createElement("span",{className:"frnd-name"},t.name),s.a.createElement("p",{className:"frnd-label m-0"},"is your friend")),s.a.createElement("div",{className:"align-items-center btns-wrapper d-flex"},s.a.createElement("div",{className:"align-items-center border d-flex favorite-btn rounded px-3 py-2 mr-3",onClick:e.setFavorite.bind(e,a)},t.isFavorite?s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-star-fill",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})):s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-star",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}))),s.a.createElement("div",{className:"align-items-center border d-flex rounded px-3 py-2 delete-btn",onClick:e.showDeleteConfirmation.bind(e,t)},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16"},s.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),s.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})))))})),this.state.pages.length?s.a.createElement("div",{className:"justify-content-end m-0 pagination-row px-3 py-2 row"},s.a.createElement("div",{className:"pagination-btns-wrapper d-flex"},this.state.pages.map((function(t){return s.a.createElement("div",{key:"page-"+t,className:e.state.currentpage===t?"page-btn px-3 active":"page-btn px-3",onClick:e.onPageChange.bind(e,t)},s.a.createElement("span",null,t))})))," "):null,s.a.createElement(x,{open:this.state.showConfirmation,message:this.state.confirmationMsg,onClose:this.hideConfirmation.bind(this),onConfirm:this.onDeleteFrnd.bind(this)}))}}]),a}(n.Component),F=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(e){return Object(b.a)(this,a),t.call(this,e)}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchFriends()}},{key:"addToList",value:function(e){this.props.addToList(e)}},{key:"onDelete",value:function(e){this.props.removeFromList(e)}},{key:"render",value:function(){return console.log(this.props),s.a.createElement("div",{className:"align-items-center d-flex home-page-container justify-content-center"},s.a.createElement(C,{friendsList:this.props.friendsList,onAddFriend:this.addToList.bind(this),onDelete:this.onDelete.bind(this)}))}}]),a}(n.Component),N=Object(g.b)((function(e){return{friendsList:e.home&&e.home.friendsList?e.home.friendsList:[]}}),(function(e){return{fetchFriends:function(){return e({type:l})},addToList:function(t){return e(function(e){return{type:c,payload:{name:e}}}(t))},removeFromList:function(t){return e(function(e){return{type:d,payload:{frnd:e}}}(t))}}}))(F);var k=function(){return s.a.createElement(g.a,{store:v.store},s.a.createElement("div",{className:"row m-0 main-app-container"},s.a.createElement(N,null)))};a(24);i.a.render(s.a.createElement(k,null," "),document.getElementById("index"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e3ccb172.chunk.js.map