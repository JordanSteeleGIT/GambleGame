(this["webpackJsonpgamble-game"]=this["webpackJsonpgamble-game"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(8),s=c.n(a),i=(c(14),c(15),c(3)),o=c(2),u=c(4);function j(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var n=[e[t],e[c]];e[c]=n[0],e[t]=n[1]}return e}var l=j([6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),b=[2e4,17e3,15e3,12e3,1e4,9e3,6e3,4e3,2e3,1e3,500,1,0,-500,-2e3,-4e3,-5e3,-7e3,-1e4],O=c(0),d=Object(n.createContext)(),h=function(e){var t=Object(n.useState)(Array.from({length:9},(function(){return!1}))),c=Object(o.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)({guesses:3,currency:1e4}),i=Object(o.a)(s,2),u=i[0],l=i[1],b=Object(n.useState)([]),h=Object(o.a)(b,2),f=h[0],m=h[1],x=Object(n.useState)([]),g=Object(o.a)(x,2),v=g[0],p=g[1],y=Object(n.useState)(j([1,2,3,4,5,6,7,8,9])),C=Object(o.a)(y,2),N=C[0],S=C[1];return Object(O.jsx)(d.Provider,{value:{numberGrid:[N,S],cellsDisplayed:[r,a],playerInfo:[u,l],Scoreboard:[f,m],playerButtonChoice:[v,p]},children:e.children})},f=function(e){var t=e.ClassText,c=e.Text,r=Object(n.useContext)(d),a=r.cellsDisplayed,s=r.playerInfo,j=r.playerButtonChoice,l=Object(o.a)(a,2),b=l[0],h=l[1],f=Object(o.a)(s,2),m=f[0],x=f[1],g=Object(o.a)(j,2),v=g[0];g[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{backgroundColor:t===v[0]||t===v[1]||t===v[2]?"#2C8921":"#541764"},className:"button grid-number number".concat(t),onClick:function(){return function(e){var t=Object(i.a)(b);m.guesses>0&&!t[e]&&(t[e]=!0,h(t),x((function(e){return Object(u.a)(Object(u.a)({},e),{},{guesses:m.guesses-1})})))}(t)},children:Object(O.jsx)("h1",{children:b[t]?c:""})})})},m=c(9),x=function(e){var t=e.ClassText,c=Object(n.useContext)(d).playerButtonChoice,r=Object(o.a)(c,2),a=(r[0],r[1]);var s=[[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"button button".concat(t),children:Object(O.jsx)("button",{className:"player-choice-button",style:{transform:"rotate(".concat(function(e){switch(e){case 0:return 135;case 1:case 2:case 3:return 180;case 4:return 225;case 5:case 6:case 7:return 90;default:return 0}}(t),"deg)")},onClick:function(){a(s[t])},children:Object(O.jsx)(m.a,{size:"45px"})})})})},g=function(){var e=Object(n.useContext)(d),t=e.cellsDisplayed,c=e.numberGrid,r=Object(o.a)(t,2),a=r[0],s=r[1],u=Object(o.a)(c,2),j=u[0];u[1];return Object(n.useEffect)((function(){var e=Object(i.a)(a);e[Math.floor(9*Math.random())]=!0,s(e)}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"parent",children:[Array(8).fill(1).map((function(e,t){return Object(O.jsx)(x,{ClassText:t})})),j.map((function(e,t){return Object(O.jsx)(f,{ClassText:t,Text:e})}))]})})},v=function(){var e=Object(n.useContext)(d),t=e.Scoreboard,c=e.playerInfo,r=Object(o.a)(t,2),a=r[0],s=r[1],u=Object(o.a)(c,2),j=u[0];u[1];return Object(n.useEffect)((function(){l.map((function(e,t){s((function(c){return[].concat(Object(i.a)(c),[{value:e,worth:b[t]}])}))}))}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"right-side-upper",children:[Object(O.jsx)("h1",{children:"Payout"}),Object(O.jsx)("div",{className:"payout-container",children:a.map((function(e,t){return Object(O.jsxs)("div",{className:"score",children:[Object(O.jsxs)("p",{className:"value",children:[e.value,":"]}),Object(O.jsx)("p",{className:"worth",style:{color:e.worth<0?"red":"#41AF1E"},children:" \xa3".concat(new Intl.NumberFormat("en-EU",{maximumSignificantDigits:3}).format(e.worth))})]})}))})]}),Object(O.jsxs)("div",{className:"player-currency",children:[Object(O.jsx)("h3",{children:"Your Currency:"}),Object(O.jsx)("h1",{children:" \xa3".concat(new Intl.NumberFormat("en-EU",{maximumSignificantDigits:3}).format(j.currency))})]})]})},p=function(){var e=Object(n.useContext)(d),t=e.playerInfo,c=e.playerButtonChoice,r=e.numberGrid,a=e.Scoreboard,s=e.cellsDisplayed,l=Object(o.a)(t,2),b=l[0],h=l[1],f=Object(o.a)(c,2),m=f[0],x=f[1],g=Object(o.a)(r,2),v=g[0],p=g[1],y=Object(o.a)(a,2),C=y[0],N=(y[1],Object(o.a)(s,2)),S=N[0],F=N[1],w=Object(n.useState)(!1),E=Object(o.a)(w,2),I=E[0],T=E[1];return Object(O.jsxs)("div",{className:"left-side-lower",children:[Object(O.jsx)("h3",{children:" Remaining Guesses: ".concat(b.guesses)}),m.length>0&&!I&&Object(O.jsx)("button",{onClick:function(){S.forEach((function(e,t){S[t]=!0})),T(!0);var e=C.find((function(e){return e.value===function(){var e=0;return m.map((function(t){e+=v[t]})),e}()}));h((function(t){return Object(u.a)(Object(u.a)({},t),{},{currency:b.currency+e.worth})}))},children:"Confirm"}),I&&Object(O.jsx)("button",{onClick:function(){T(!1),p(j([1,2,3,4,5,6,7,8,9])),x([]),function(){S.forEach((function(e,t){S[t]=!1}));var e=Object(i.a)(S);e[Math.floor(9*Math.random())]=!0,F(e)}(),h((function(e){return Object(u.a)(Object(u.a)({},e),{},{guesses:b.guesses=3})}))},children:"Next Round"})]})};var y=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h,{children:Object(O.jsxs)("div",{className:"game-container",children:[Object(O.jsxs)("div",{className:"left-side-container",children:[Object(O.jsx)(g,{}),Object(O.jsx)(p,{})]}),Object(O.jsx)("div",{className:"right-side-container",children:Object(O.jsx)(v,{})})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.ca8cf823.chunk.js.map