(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3qIcl",BreadTop:"BurgerIngredient_BreadTop__3F2P5",Seeds1:"BurgerIngredient_Seeds1__2aCYQ",Seeds2:"BurgerIngredient_Seeds2__lWeVF",Meat:"BurgerIngredient_Meat__3MHYB",Cheese:"BurgerIngredient_Cheese__2wAeE",Salad:"BurgerIngredient_Salad__2Agkq",Bacon:"BurgerIngredient_Bacon__AjoKu"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__OdQFT",Open:"SideDrawer_Open__37THv",Close:"SideDrawer_Close__3QI6t",Logo:"SideDrawer_Logo__2hHLw"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__GlbF2",Label:"BuildControl_Label__qefm0",Less:"BuildControl_Less__30S4b",More:"BuildControl_More__2uAit"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3d46w",Logo:"Toolbar_Logo__1zifk",DesktopOnly:"Toolbar_DesktopOnly__3HHxu"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__Z0cn0",active:"NavigationItem_active__2ll9l"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2IB3K",OrderButton:"BuildControls_OrderButton__2lL5l",enable:"BuildControls_enable__2em9k"}},function(e,t,n){e.exports={Button:"Button_Button__14ZAi",Success:"Button_Success__3-An7",Danger:"Button_Danger__2qqpB"}},,function(e,t,n){e.exports={Logo:"Logo_Logo__1lGhA"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__BRPOl"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3R2lx"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__LHAjL"}},function(e,t,n){e.exports={Content:"Layout_Content__Fc2vG"}},function(e,t,n){e.exports={Burger:"Burger_Burger__daYcY"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1MFI6"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(15),s=n.n(c),i=(n(28),n(3)),o=n(4),l=n(6),d=n(5),u=function(e){return e.children},j=n.p+"static/media/BurgerLogo.ec69c7f6.png",b=n(16),h=n.n(b),O=n(0),p=function(e){return Object(O.jsx)("div",{className:h.a.Logo,children:Object(O.jsx)("img",{src:j,alt:"MyBurger"})})},g=n(17),_=n.n(g),x=function(e){return e.show?Object(O.jsx)("div",{className:_.a.Backdrop,onClick:e.clicked}):null},f=n(18),v=n.n(f),m=n(12),B=n.n(m),C=function(e){return Object(O.jsx)("li",{className:B.a.NavigationItem,children:Object(O.jsx)("a",{href:e.link,className:e.active?B.a.active:null,children:e.children})})},k=function(){return Object(O.jsxs)("ul",{className:v.a.NavigationItems,children:[Object(O.jsx)(C,{link:"/",active:!0,children:"Burger Builder"}),Object(O.jsx)(C,{link:"/",children:"Checkout"})]})},w=n(7),S=n.n(w),N=function(e){var t=[S.a.SideDrawer,S.a.Close];return e.open&&(t=[S.a.SideDrawer,S.a.Open]),Object(O.jsxs)(u,{children:[Object(O.jsx)(x,{show:e.open,clicked:e.closed}),Object(O.jsxs)("div",{className:t.join(" "),children:[Object(O.jsx)("div",{className:S.a.Logo,children:Object(O.jsx)(p,{})}),Object(O.jsx)("nav",{children:Object(O.jsx)(k,{})})]})]})},y=n(19),D=n.n(y),I=function(e){return Object(O.jsxs)("div",{className:D.a.DrawerToggle,onClick:e.clicked,children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},L=n(9),T=n.n(L),H=function(e){return Object(O.jsxs)("header",{className:T.a.Toolbar,children:[Object(O.jsx)(I,{clicked:e.clicked}),Object(O.jsx)("div",{className:T.a.Logo,children:Object(O.jsx)(p,{})}),Object(O.jsx)("nav",{className:T.a.DesktopOnly,children:Object(O.jsx)(k,{})})]})},M=n(20),P=n.n(M),A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!0},e.showSideDrawerHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerTogglerHandler=function(){e.setState((function(t){return{showSideDrawer:!e.state.showSideDrawer}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(u,{children:[Object(O.jsx)(H,{clicked:this.sideDrawerTogglerHandler}),Object(O.jsx)(N,{closed:this.showSideDrawerHandler,open:this.state.showSideDrawer}),Object(O.jsx)("main",{className:P.a.Content,children:this.props.children})]})}}]),n}(r.Component),F=n(10),Y=n(13),R=n.n(Y),q=n(8),E=n.n(q),G=function(e){return Object(O.jsxs)("div",{className:E.a.BuildControl,children:[Object(O.jsx)("div",{className:E.a.Label,children:e.label}),Object(O.jsx)("button",{className:E.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(O.jsx)("button",{className:E.a.More,onClick:e.added,children:"More"})]})},Q=[{label:"Salad",type:"salad"},{label:"Meat",type:"meat"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"}],z=function(e){return Object(O.jsxs)("div",{className:R.a.BuildControls,children:[Object(O.jsxs)("p",{children:["Total Price: ",Object(O.jsx)("strong",{children:e.price.toFixed(2)})]}),Q.map((function(t){return Object(O.jsx)(G,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(O.jsx)("button",{className:R.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered,children:"ORDER NOW!"})]})},J=n(23),K=n(21),W=n.n(K),Z=n(2),V=n.n(Z),U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(O.jsx)("div",{className:V.a.BreadBottom});break;case"bread-top":e=Object(O.jsxs)("div",{className:V.a.BreadTop,children:[Object(O.jsx)("div",{className:V.a.Seeds1}),Object(O.jsx)("div",{className:V.a.Seeds2})]});break;case"meat":e=Object(O.jsx)("div",{className:V.a.Meat});break;case"cheese":e=Object(O.jsx)("div",{className:V.a.Cheese});break;case"salad":e=Object(O.jsx)("div",{className:V.a.Salad});break;case"bacon":e=Object(O.jsx)("div",{className:V.a.Bacon});break;default:e=null}return e}}]),n}(r.Component),X=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(J.a)(Array(e.ingredients[t])).map((function(e,n){return Object(O.jsx)(U,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(O.jsx)("p",{children:"Start Adding Ingredients"})),Object(O.jsxs)("div",{className:W.a.Burger,children:[Object(O.jsx)(U,{type:"bread-top"}),t,Object(O.jsx)(U,{type:"bread-bottom"})]})},$=n(22),ee=n.n($),te=function(e){return Object(O.jsxs)(u,{children:[Object(O.jsx)(x,{show:e.show,clicked:e.modalClosed}),Object(O.jsx)("div",{className:ee.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})},ne=n(14),re=n.n(ne),ae=function(e){return Object(O.jsx)("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},ce=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.ingredients[t]]},t)}));return Object(O.jsxs)(u,{children:[Object(O.jsx)("h3",{children:"Your Order"}),Object(O.jsx)("p",{children:"A delicious burger with the following ingredients "}),Object(O.jsxs)("ul",{children:[" ",t," "]}),Object(O.jsx)("p",{children:Object(O.jsxs)("strong",{children:["Total Price: ",e.price]})}),Object(O.jsx)("p",{children:"Continue to Checkout?"}),Object(O.jsx)(ae,{btnType:"Danger",clicked:e.purchaseCancelled,children:"Cancel"}),Object(O.jsx)(ae,{btnType:"Success",clicked:e.purchaseContinue,children:"Continue"})]})},se={salad:.5,meat:1.3,cheese:.4,bacon:.7},ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,meat:0,cheese:0,bacon:0},totalPrice:4,purchaseable:!1,purchasing:!1},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("You Continue")},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(F.a)({},e.state.ingredients);r[t]=n;var a=se[t],c=e.state.totalPrice+a;e.setState({totalPrice:c,ingredients:r}),e.updatePurchaseState(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(n<=0)return 0;var r=n-1,a=Object(F.a)({},e.state.ingredients);a[t]=r;var c=se[t],s=e.state.totalPrice-c;e.setState({totalPrice:s,ingredients:a}),e.updatePurchaseState(a)},e}return Object(o.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(F.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(O.jsxs)(u,{children:[Object(O.jsx)(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(O.jsx)(ce,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.state.totalPrice.toFixed(2)})}),Object(O.jsx)(X,{ingredients:this.state.ingredients}),Object(O.jsx)(z,{ingredientAdded:this.addIngredientHandler,ingredientRemove:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler})]})}}]),n}(r.Component),oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(A,{children:Object(O.jsx)(ie,{})})})}}]),n}(r.Component),le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(oe,{})}),document.getElementById("root")),le()}],[[30,1,2]]]);
//# sourceMappingURL=main.acfb1764.chunk.js.map