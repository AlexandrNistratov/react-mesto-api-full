(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(21),i=n.n(r),o=n(25),u=n(3),l=(n(19),n.p+"static/media/logo.a307e1c4.svg"),d=n(2),p=n(8);var j=function(e){var t=e.onClick,n=e.email;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsxs)("nav",{className:"header__nav",children:[Object(a.jsx)("p",{className:"header__nav-email",children:n.email}),Object(a.jsx)(p.b,{className:"header__nav-link",onClick:t,to:"/sign-up",children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(a.jsx)(d.b,{exact:!0,path:"/sign-up",children:Object(a.jsx)("nav",{className:"header__nav",children:Object(a.jsx)(p.b,{className:"header__nav-link",to:"/sign-in",children:"\u0412\u0445\u043e\u0434"})})}),Object(a.jsx)(d.b,{exact:!0,path:"/sign-in",children:Object(a.jsx)("nav",{className:"header__nav",children:Object(a.jsx)(p.b,{className:"header__nav-link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})]})},m=s.a.createContext();var h=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,r=e.onCardDelete,i=s.a.useContext(m),o=t.owner._id===i._id,u="card__del ".concat(o?"card__del-active":"card__del"),l=t.likes.some((function(e){return e._id===i._id})),d="card__button ".concat(l?"card__button-like":"card__button");return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsx)("button",{className:u,onClick:function(){r(t)}}),Object(a.jsxs)("div",{className:"card__items",children:[Object(a.jsx)("h2",{className:"card__title",children:t.name}),Object(a.jsxs)("div",{className:"card__item",children:[Object(a.jsx)("button",{className:d,onClick:function(){c(t)}}),Object(a.jsx)("p",{className:"card__number-likes",children:t.likes.length})]})]})]})};var _=function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,r=e.handleCardClick,i=e.cards,o=e.onCardDelete,u=e.onCardLike,l=s.a.useContext(m);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__avatar-image",src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),Object(a.jsx)("div",{className:"profile__overlay",onClick:t,children:Object(a.jsx)("button",{className:"profile__edit-avatar"})})]}),Object(a.jsxs)("div",{className:"profile__text",children:[Object(a.jsxs)("div",{className:"profile__block",children:[Object(a.jsx)("h1",{className:"profile__info-name",children:l.name}),Object(a.jsx)("button",{className:"profile__edit-button",onClick:n})]}),Object(a.jsx)("p",{className:"profile__info-text",children:l.about})]})]}),Object(a.jsx)("button",{className:"profile__add-button",onClick:c})]}),Object(a.jsx)("section",{className:"elements",children:i.map((function(e){return Object(a.jsx)(h,{card:e,onCardClick:r,onCardLike:u,onCardDelete:o},e._id)}))})]})};var b=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9\xa02020 Mesto Russia"})})};var f=function(e){var t=e.isOpen,n=e.name,c=e.container,s=e.onClose,r=e.title,i=e.children,o=e.type,u=e.submit,l=e.textSubmitButton,d=e.onSubmit;return Object(a.jsx)("div",{className:t?"popup popup__".concat(n," popup_is-opened"):"popup popup__".concat(n),children:Object(a.jsx)("div",{className:"popup__container popup__container-".concat(c),children:Object(a.jsxs)("form",{onSubmit:d,className:"popup__form popup__form-".concat(n),name:"information",noValidate:!0,children:[Object(a.jsx)("button",{className:"popup__close",type:"button",onClick:s}),Object(a.jsx)("h2",{className:"popup__title popup__title-".concat(o),children:r}),i,Object(a.jsx)("button",{className:"popup__submit popup__submit-".concat(u),type:"submit",children:l})]})})})};var O=function(e){var t=e.card,n=e.onClose;return Object(a.jsx)("div",{className:t?"popup popup__open-card popup_is-opened":"popup popup__open-card",children:Object(a.jsxs)("div",{className:"popup__card",children:[Object(a.jsx)("button",{className:"popup__close popup__close-card",type:"button",onClick:n}),Object(a.jsx)("img",{className:"popup__image",src:t?t.link:"",alt:t?t.name:""}),Object(a.jsx)("h2",{className:"popup__text",children:t?t.name:""})]})})};var x=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,r=s.a.useState(""),i=Object(u.a)(r,2),o=i[0],l=i[1],d=s.a.useState(""),p=Object(u.a)(d,2),j=p[0],h=p[1],_=s.a.useContext(m);return s.a.useEffect((function(){l(_.name),h(_.about)}),[_]),Object(a.jsxs)(f,{name:"info",container:"min",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"min",textSubmitButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:o,about:j})},children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_firstname",id:"user-name",required:!0,minLength:"2",maxLength:"40",type:"text",placeholder:"\u0418\u043c\u044f",name:"firstname",value:o||"",onChange:function(e){l(e.target.value)}}),Object(a.jsx)("span",{className:"error",id:"user-name-error"}),Object(a.jsx)("input",{className:"popup__input popup__input_type_career",id:"user-career",required:!0,minLength:"2",maxLength:"200",type:"text",placeholder:"\u0420\u0430\u0431\u043e\u0442\u0430",name:"career",value:j||"",onChange:function(e){h(e.target.value)}}),Object(a.jsx)("span",{className:"error",id:"user-career-error"})]})};var v=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,r=s.a.useRef();return s.a.useEffect((function(){t&&(r.current.value="")}),[t]),Object(a.jsxs)(f,{name:"avatar-edit",container:"avatar-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"avatar-edit",textSubmitButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:r.current.value})},children:[Object(a.jsx)("input",{type:"url",className:"popup__input popup__input_avatar-edit",id:"link-avatar",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",ref:r}),Object(a.jsx)("span",{className:"error",id:"link-avatar-error"})]})},g=n(11),N=n(9);var k=function(e){var t=e.handleLogin,n=s.a.useState({logEmail:"",logPassword:""}),c=Object(u.a)(n,2),r=c[0],i=c[1],o=s.a.useState(""),l=Object(u.a)(o,2),d=l[0];function p(e){var t=e.target,n=t.name,a=t.value;i(Object(N.a)(Object(N.a)({},r),{},Object(g.a)({},n,a)))}return l[1],Object(a.jsx)("div",{className:"auth",children:Object(a.jsx)("div",{className:"auth__container",children:Object(a.jsxs)("form",{className:"auth__form",name:"logForm",onSubmit:function(e){e.preventDefault(),r.logEmail&&r.logPassword&&t(r.logEmail,r.logPassword)},children:[Object(a.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)("input",{className:"auth__input",id:"user-email",required:!0,minLength:"2",maxLength:"40",type:"email",placeholder:"email",name:"logEmail",value:r.email,onChange:p}),Object(a.jsx)("span",{className:"error",id:"user-email-error",children:d}),Object(a.jsx)("input",{className:"auth__input",id:"user-password",required:!0,minLength:"2",maxLength:"40",type:"password",suggested:"current-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"logPassword",value:r.password,onChange:p}),Object(a.jsx)("span",{className:"error",id:"user-password-error",children:d}),Object(a.jsx)("button",{className:"auth__submit",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})})};var C=function(e){var t=e.handleRegister,n=s.a.useState({regEmail:"",regPassword:""}),c=Object(u.a)(n,2),r=c[0],i=c[1];function o(e){var t=e.target,n=t.name,a=t.value;i(Object(N.a)(Object(N.a)({},r),{},Object(g.a)({},n,a)))}return Object(a.jsx)("div",{className:"auth",children:Object(a.jsx)("div",{className:"auth__container",children:Object(a.jsxs)("form",{className:"auth__form",name:"logForm",onSubmit:function(e){e.preventDefault();var n=r.regEmail,a=r.regPassword;t(n,a)},children:[Object(a.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)("input",{className:"auth__input",id:"user-email",required:!0,minLength:"2",maxLength:"40",type:"email",placeholder:"email",name:"regEmail",value:r.email,onChange:o}),Object(a.jsx)("span",{className:"error",id:"user-email-error"}),Object(a.jsx)("input",{className:"auth__input",id:"user-password",required:!0,minLength:"2",maxLength:"40",type:"password",suggested:"current-password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"regPassword",value:r.password,onChange:o}),Object(a.jsx)("span",{className:"error",id:"user-password-error"}),Object(a.jsx)("button",{className:"auth__submit",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)(d.d,{children:Object(a.jsx)(d.b,{exact:!0,path:"/sign-up",children:Object(a.jsx)(p.b,{className:"auth__subtitle",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})})]})})})},y=n.p+"static/media/Union.1b6082f8.svg",S=n.p+"static/media/UnionError.df8eddf6.svg";var w=function(e){var t=e.status,n=e.onClose,c=e.isInfoTooltipOpen;return Object(a.jsx)("div",{className:c?"popup popup__result popup_is-opened":"popup popup__result",children:Object(a.jsxs)("div",{className:"popup__container popup__container-result",children:[Object(a.jsx)("button",{className:"popup__close popup__close-result",type:"button",onClick:n}),Object(a.jsx)("img",{className:"popup__result_image",alt:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",src:"error"===t?S:y}),Object(a.jsx)("div",{className:"popup__result_container_text",children:Object(a.jsxs)("h2",{className:"popup__result_text",children:["error"===t?"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!","."]})})]})})},P="".concat(window.location.protocol).concat("//api.domainname.students.nomoredomains.club"),E=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435")},L=n(23),A=n(24),T=new(function(){function e(t){Object(L.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(A.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers,credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getAllCards",value:function(){return fetch(this._url,{method:"GET",headers:this._headers,credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCards",value:function(e){return fetch(this._url,{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCards",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers,credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers,credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers,credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:P,headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"content-type":"application/json"}});console.log(P);var I=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,r=s.a.useRef(),i=s.a.useRef();return s.a.useEffect((function(){t&&(r.current.value="",i.current.value="")}),[t]),Object(a.jsxs)(f,{name:"add-image",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",type:"min",submit:"image-button",textSubmitButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r.current.value,link:i.current.value})},children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_name",id:"name-card",required:!0,minLength:"2",maxLength:"30",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",ref:r}),Object(a.jsx)("span",{className:"error",id:"name-card-error"}),Object(a.jsx)("input",{type:"url",className:"popup__input popup__input_type_link",id:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",ref:i}),Object(a.jsx)("span",{className:"error",id:"link-error"})]})},U=n(26),D=function(e){var t=e.component,n=Object(U.a)(e,["component"]);return Object(a.jsx)(d.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(N.a)({},n)):Object(a.jsx)(d.a,{to:"./sign-in"})}})};var q=function(){var e=s.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=s.a.useState(!1),i=Object(u.a)(r,2),l=i[0],p=i[1],h=s.a.useState(!1),g=Object(u.a)(h,2),N=g[0],y=g[1],S=s.a.useState(null),L=Object(u.a)(S,2),A=L[0],U=L[1],q=s.a.useState(!1),B=Object(u.a)(q,2),J=B[0],F=B[1],R=s.a.useState("success"),G=Object(u.a)(R,2),M=G[0],z=G[1],H=s.a.useState(""),V=Object(u.a)(H,2),K=V[0],Q=V[1],W=Object(d.g)(),X=s.a.useState(!1),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=s.a.useState({email:"",password:""}),te=Object(u.a)(ee,2),ne=te[0],ae=te[1];function ce(e){F(!0),z(e)}function se(){c(!1),p(!1),y(!1),F(!1),U(null)}s.a.useEffect((function(){!function(){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(P,"/users/me"),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(E)).then((function(e){var t={email:e.data.email,password:e.data.password};ae(t),$(!0),W.push("/")})).catch((function(e){console.log(e)}));var t}()}),[]),s.a.useEffect((function(){T.getUserInfo().then((function(e){Q(e)})).catch((function(e){return alert(e)}))}),[]);var re=s.a.useState([]),ie=Object(u.a)(re,2),oe=ie[0],ue=ie[1];function le(e,t){(function(e,t){return fetch("".concat(P,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t}),credentials:"include"}).then(E).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(e){e.token&&(localStorage.setItem("jwt",e.token),$(!0),W.push("/"))})).catch((function(e){return console.log(e)}))}return s.a.useEffect((function(){T.getAllCards().then((function(e){ue(e)})).catch((function(e){return alert(e)}))}),[]),Object(a.jsx)(m.Provider,{value:K,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{loggedIn:Z,onClick:function(){localStorage.removeItem("jwt"),$(!1),W.push("/sign-in")},email:ne}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(D,{exact:!0,path:"/",loggedIn:Z,component:_,onEditAvatar:function(){c(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){y(!0)},handleCardClick:function(e){U(e)},cards:oe,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===K._id}));console.log(e.likes),t?T.dislikeCard(e._id).then((function(t){var n=oe.map((function(n){return n._id===e._id?t:n}));ue(n)})).catch((function(e){return alert(e)})):T.likeCard(e._id,!t).then((function(t){var n=oe.map((function(n){return n._id===e._id?t:n}));ue(n)})).catch((function(e){return alert(e)}))},onCardDelete:function(e){e.owner._id===K._id&&T.deleteCards(e._id).then((function(){var t=oe.filter((function(t){return t._id!==e._id}));ue(t)})).catch((function(e){return alert(e)}))}}),Object(a.jsx)(d.b,{path:"/sign-in",children:Object(a.jsx)(k,{handleLogin:le})}),Object(a.jsx)(d.b,{path:"/sign-up",children:Object(a.jsx)(C,{handleRegister:function(e,t){(function(e,t){return fetch("".concat(P,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then((function(e){if(e.ok)return e.json()}))})(e,t).then((function(n){void 0!==n&&n.data._id?(ae({email:n.data.email}),ce(),setTimeout((function(){le(e,t)}),300)):ce("error")}))}})}),Object(a.jsx)(d.b,{children:Z?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(d.a,{to:"/sign-in"})})]}),Object(a.jsx)(b,{}),Object(a.jsx)(v,{isOpen:n,onClose:se,onUpdateAvatar:function(e){T.addUserAvatar(e).then((function(e){Q(e),se()})).catch((function(e){return alert(e)}))}}),Object(a.jsx)(x,{isOpen:l,onClose:se,onUpdateUser:function(e){T.addUserInfo(e).then((function(e){Q(e),se()})).catch((function(e){return alert(e)}))}}),Object(a.jsx)(I,{isOpen:N,onClose:se,onAddPlace:function(e){T.addNewCards(e).then((function(e){ue([e].concat(Object(o.a)(oe))),se()})).catch((function(e){return alert(e)}))}}),Object(a.jsx)(f,{name:"popup__with-submit",container:"popup__container-with-submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"popup__submit-with-submit",type:"popup__title-with-submit"}),Object(a.jsx)(O,{card:A,onClose:se}),Object(a.jsx)(w,{onClose:se,isInfoTooltipOpen:J,status:M})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(q,{})})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.9c766e20.chunk.js.map