(this["webpackJsonpgamble-game"]=this["webpackJsonpgamble-game"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(8),s=c.n(a),o=(c(14),c(15),c(3)),i=c(2),u=c(4);function j(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var n=[e[t],e[c]];e[c]=n[0],e[t]=n[1]}return e}var b=[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],l=[2e4,14e3,12e3,9e3,5e3,4500,3e3,2e3,1e3,500,1,0,-500,-2e3,-6e3,-8e3,-1e4,-12e3,-15e3],O=c(0),d=Object(n.createContext)(),h=function(e){var t=Object(n.useState)(Array.from({length:9},(function(){return!1}))),c=Object(i.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)({guesses:3,currency:1e4}),o=Object(i.a)(s,2),u=o[0],l=o[1],h=Object(n.useState)([]),f=Object(i.a)(h,2),m=f[0],x=f[1],g=Object(n.useState)([]),v=Object(i.a)(g,2),p=v[0],y=v[1],C=Object(n.useState)(j([1,2,3,4,5,6,7,8,9])),N=Object(i.a)(C,2),S=N[0],F=N[1],w=Object(n.useState)(b),B=Object(i.a)(w,2),I=B[0],T=B[1];return Object(O.jsx)(d.Provider,{value:{numberGrid:[S,F],cellsDisplayed:[r,a],playerInfo:[u,l],Scoreboard:[m,x],playerButtonChoice:[p,y],scoreBoardValues:[I,T]},children:e.children})},f=function(e){var t=e.ClassText,c=e.Text,r=Object(n.useContext)(d),a=r.cellsDisplayed,s=r.playerInfo,j=r.playerButtonChoice,b=Object(i.a)(a,2),l=b[0],h=b[1],f=Object(i.a)(s,2),m=f[0],x=f[1],g=Object(i.a)(j,2),v=g[0];g[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{backgroundColor:t===v[0]||t===v[1]||t===v[2]?"#2C8921":"#541764"},className:"button grid-number number".concat(t),onClick:function(){return function(e){var t=Object(o.a)(l);m.guesses>0&&!t[e]&&(t[e]=!0,h(t),x((function(e){return Object(u.a)(Object(u.a)({},e),{},{guesses:m.guesses-1})})))}(t)},children:Object(O.jsx)("h1",{children:l[t]?c:""})})})},m=c(9),x=function(e){var t=e.ClassText,c=Object(n.useContext)(d).playerButtonChoice,r=Object(i.a)(c,2),a=(r[0],r[1]);var s=[[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"button button".concat(t),children:Object(O.jsx)("button",{className:"player-choice-button",style:{transform:"rotate(".concat(function(e){switch(e){case 0:return 135;case 1:case 2:case 3:return 180;case 4:return 225;case 5:case 6:case 7:return 90;default:return 0}}(t),"deg)")},onClick:function(){a(s[t])},children:Object(O.jsx)(m.a,{size:"45px"})})})})},g=function(){var e=Object(n.useContext)(d),t=e.cellsDisplayed,c=e.numberGrid,r=Object(i.a)(t,2),a=r[0],s=r[1],u=Object(i.a)(c,2),j=u[0];u[1];return Object(n.useEffect)((function(){var e=Object(o.a)(a);e[Math.floor(9*Math.random())]=!0,s(e)}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"parent",children:[Array(8).fill(1).map((function(e,t){return Object(O.jsx)(x,{ClassText:t})})),j.map((function(e,t){return Object(O.jsx)(f,{ClassText:t,Text:e})}))]})})},v=function(){var e=Object(n.useContext)(d),t=e.Scoreboard,c=e.playerInfo,r=e.scoreBoardValues,a=Object(i.a)(t,2),s=a[0],u=a[1],b=Object(i.a)(c,2),h=b[0],f=(b[1],Object(i.a)(r,2)),m=f[0];f[1];return Object(n.useEffect)((function(){u([]),j(m).map((function(e,t){u((function(c){return[].concat(Object(o.a)(c),[{value:e,worth:l[t]}])}))}))}),[m]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"right-side-upper",children:[Object(O.jsx)("h1",{children:"Payout"}),Object(O.jsx)("div",{className:"payout-container",children:s.map((function(e,t){return Object(O.jsxs)("div",{className:"score",children:[Object(O.jsxs)("p",{className:"value",children:[e.value,":"]}),Object(O.jsx)("p",{className:"worth",style:{color:e.worth<0?"red":"#41AF1E"},children:" \xa3".concat(new Intl.NumberFormat("en-EU",{maximumSignificantDigits:3}).format(e.worth))})]})}))})]}),Object(O.jsxs)("div",{className:"player-currency",children:[Object(O.jsx)("h3",{children:"Your Currency:"}),Object(O.jsx)("h1",{children:" \xa3".concat(new Intl.NumberFormat("en-EU",{maximumSignificantDigits:3}).format(h.currency))})]})]})},p=function(){var e=Object(n.useContext)(d),t=e.playerInfo,c=e.playerButtonChoice,r=e.numberGrid,a=e.Scoreboard,s=e.cellsDisplayed,l=e.scoreBoardValues,h=Object(i.a)(t,2),f=h[0],m=h[1],x=Object(i.a)(c,2),g=x[0],v=x[1],p=Object(i.a)(r,2),y=p[0],C=p[1],N=Object(i.a)(a,2),S=N[0],F=(N[1],Object(i.a)(s,2)),w=F[0],B=F[1],I=Object(i.a)(l,2),T=(I[0],I[1]),k=Object(n.useState)(!1),D=Object(i.a)(k,2),E=D[0],M=D[1];function G(e){w.forEach((function(t,c){w[c]=e}))}return Object(O.jsxs)("div",{className:"left-side-lower",children:[Object(O.jsx)("h3",{children:" Remaining Guesses: ".concat(f.guesses)}),g.length>0&&!E&&Object(O.jsx)("button",{onClick:function(){G(!0),M(!0);var e=S.find((function(e){return e.value===function(){var e=0;return g.map((function(t){e+=y[t]})),e}()}));m((function(t){return Object(u.a)(Object(u.a)({},t),{},{currency:f.currency+e.worth})}))},children:"Confirm"}),E&&Object(O.jsx)("button",{onClick:function(){M(!1),C(j([1,2,3,4,5,6,7,8,9])),v([]),function(){G(!1);var e=Object(o.a)(w);e[Math.floor(9*Math.random())]=!0,B(e)}(),m((function(e){return Object(u.a)(Object(u.a)({},e),{},{guesses:f.guesses=3})}));var e=Object(o.a)(b);T(j(e))},children:"Next Round"})]})};var y=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h,{children:Object(O.jsxs)("div",{className:"game-container",children:[Object(O.jsxs)("div",{className:"left-side-container",children:[Object(O.jsx)(g,{}),Object(O.jsx)(p,{})]}),Object(O.jsx)("div",{className:"right-side-container",children:Object(O.jsx)(v,{})})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.3486530f.chunk.js.map