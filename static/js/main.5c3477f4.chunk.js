(this["webpackJsonpreact-pie-chart"]=this["webpackJsonpreact-pie-chart"]||[]).push([[0],{28:function(n,t,e){n.exports=e(39)},39:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),c=e(24),o=e.n(c),i=e(10),l=e(2),u=e(3),m=e(17),d=e(1),f=e(9);function b(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return b=function(){return n},n}function s(){var n=Object(l.a)(["\n  text, polyline {\n    transition: 0.3s;\n    opacity: 0;\n    pointer-events: none;\n  }\n  &:hover {\n     text, polyline {\n      opacity: 1;\n     }\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(l.a)(["\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.2);\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(l.a)(["\n  width: 100%;\n"]);return x=function(){return n},n}var v=u.b.svg(x()),g=u.b.path(p()),h=u.b.g(s()),E=u.b.div(b()),j=function(n){var t=n.data.map((function(n){return Object(f.a)(Object(f.a)({},n),{},{qt:parseFloat(n.qt)})})),e=t.reduce((function(n,t){return n+t.qt}),0),a=function(n){return[Math.cos(2*Math.PI*n),Math.sin(2*Math.PI*n)]},c=0;return r.a.createElement(E,null,r.a.createElement(v,{viewBox:"-4.5 -1.8 9 3.6"},t.map((function(n,t){var o=a(c),l=Object(i.a)(o,2),u=l[0],m=l[1],d=c+n.qt/e/2,f=a(d),b=Object(i.a)(f,2),s=b[0],p=b[1];c+=n.qt/e;var x=a(c),v=Object(i.a)(x,2),E=v[0],j=v[1],O=n.qt/e>.5?1:0,y=["M ".concat(u," ").concat(m),"A 1 1 0 ".concat(O," 1 ").concat(E," ").concat(j),"L 0 0"].join(" "),w=!(d<.25||d>.75),k=w?"end":"start";return r.a.createElement(h,{key:t,className:""},r.a.createElement("polyline",{strokeOpacity:"1",strokeLinecap:"round",points:w?"0,0 ".concat(1.5*s,",").concat(1.5*p," ").concat(1.5*s-.15,",").concat(1.5*p," ").concat(1.5*s,",").concat(1.5*p):"0,0 ".concat(1.5*s,",").concat(1.5*p," ").concat(1.5*s+.15,",").concat(1.5*p," ").concat(1.5*s,",").concat(1.5*p),strokeWidth:.01,stroke:n.color}),r.a.createElement(g,{d:y,fill:n.color}),r.a.createElement("text",{fill:n.color,textAnchor:k,dominantBaseline:"middle",x:w?1.5*s-.2:1.5*s+.2,y:1.5*p,style:{fontSize:"0.7%"}},n.title,": ",n.qt," (",(n.qt/e*100).toFixed(2),"%)"))}))))};function O(){var n=Object(l.a)(["\n  margin-bottom: 20px;\n  text-align: center;\n"]);return O=function(){return n},n}var y=u.b.h1(O()),w=function(n){var t=n.items;return r.a.createElement("div",null,r.a.createElement(y,null,"Chart"),r.a.createElement(j,{data:t}))},k=e(21),M=e(16);function q(){var n=Object(l.a)(["\n  flex: none;\n  background-color: ",";;\n  border: none;\n  outline: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  padding: 13px 20px;\n  cursor: pointer;\n"]);return q=function(){return n},n}var I=u.b.button(q(),(function(n){return n.danger?"#be0000":"dodgerblue"}));function F(){var n=Object(l.a)(["\n    display: flex;\n    align-items: flex-end;\n    padding: 15px 0;\n    margin-right: 20px;\n    white-space: nowrap;\n"]);return F=function(){return n},n}function C(){var n=Object(l.a)(["\n    width: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: end;\n    margin-right: 20px;\n    p {\n      margin-bottom: 8px;\n    }\n"]);return C=function(){return n},n}function z(){var n=Object(l.a)(["\n    display: flex;\n    margin-bottom: 20px;\n"]);return z=function(){return n},n}function A(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  box-sizing: border-box;\n"]);return A=function(){return n},n}var B=u.b.input(A()),S=u.b.form(z()),D=u.b.div(C(),(function(n){return n.w})),J=u.b.p(F()),L=function(n){var t=n.item,e=n.i,a=n.editItem,c=n.deleteItem,o=t.id,i=t.title,l=t.qt,u=function(n){a(Object(f.a)(Object(f.a)({},t),{},Object(M.a)({},n.target.name,n.target.value)))},m=function(n){return n.target.select()};return r.a.createElement(S,null,r.a.createElement(J,null,"\u2116 ",e+1),r.a.createElement(D,{w:"100%"},r.a.createElement("p",null,"Title"),r.a.createElement(B,{onFocus:m,onChange:u,name:"title",type:"text",value:i})),r.a.createElement(D,{w:"100%"},r.a.createElement("p",null,"Quantity"),r.a.createElement(B,{onFocus:m,onChange:u,name:"qt",type:"number",step:"any",value:l})),r.a.createElement(D,null,r.a.createElement(I,{danger:!0,onClick:function(){c(o)}},"Delete")))},N=function(){var n={r:Math.floor(0),g:Math.floor(130+100*Math.random()),b:Math.floor(155+100*Math.random())};return n.rgb="rgb("+n.r+","+n.g+","+n.b+")",n.rgb},P=function(n){var t=n.items,e=n.setItems,a=function(n){var a=t.findIndex((function(t){return t.id===n.id})),r=Object(k.a)(t);r[a]=n,e(r)},c=function(n){e(t.filter((function(t){return t.id!==n})))};return r.a.createElement("div",null,r.a.createElement(y,null,"Form"),t.map((function(n,t){return r.a.createElement(L,{i:t,item:n,key:n.id,deleteItem:c,editItem:a})})),r.a.createElement(I,{onClick:function(){e([].concat(Object(k.a)(t),[{id:(new Date).getTime(),title:"New item",qt:0,color:N()}]))}},"+ Add item"))};function R(){var n=Object(l.a)(["\n  display: block;\n  background-color: #f8f9fa;\n  color: black;\n  padding: 10px 20px;\n  min-width: 200px;\n  text-align: center;\n  text-decoration: none;\n  font-weight: bold;\n  transition: 0.2s;\n  \n  &:hover {\n    background-color: rgba(0,123,255,0.2);\n  }\n  \n  &.active {\n   background-color: dodgerblue;\n   color: white;\n  }\n"]);return R=function(){return n},n}var T=Object(u.b)(m.b)(R()),Q=function(){return r.a.createElement("nav",null,r.a.createElement(T,{exact:!0,to:"/"},"Form"),r.a.createElement(T,{exact:!0,to:"/chart"},"Chart"))};function W(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 20px 20px;\n"]);return W=function(){return n},n}function G(){var n=Object(l.a)(["\n  display: flex;\n"]);return G=function(){return n},n}function H(){var n=Object(l.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n  }\n"]);return H=function(){return n},n}for(var K=Object(u.a)(H()),U=u.b.div(G()),V=u.b.div(W()),X=[],Y=0;Y<3;Y++)X.push({id:Y,qt:(5*Math.random()).toFixed(2),title:Y+1+" Item",color:N()});var Z=function(){var n=Object(a.useState)(X),t=Object(i.a)(n,2),e=t[0],c=t[1];return r.a.createElement(m.a,{basename:"/"},r.a.createElement(K,null),r.a.createElement(U,null,r.a.createElement(Q,null),r.a.createElement(V,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/chart"},r.a.createElement(w,{items:e})),r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(P,{items:e,setItems:c}))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5c3477f4.chunk.js.map