(this.webpackJsonpext=this.webpackJsonpext||[]).push([[0],{64:function(t,n,e){},78:function(t,n,e){"use strict";e.r(n);var r,o,a=e(1),c=e.n(a),i=e(18),s=e.n(i),u=(e(64),e(27)),d=e(14),f=e(5),b=e(38),l=e(57),j=e(93),g=e(52),v=e.n(g),h=e(7),x=["onClick","styles"],O=function(t){var n=t.onClick,e=t.styles,r=Object(l.a)(t,x);return Object(h.jsx)(j.a,Object(u.a)(Object(u.a)({onClick:n,style:Object(u.a)({},e)},r),{},{children:Object(h.jsx)(v.a,{fontSize:"large"})}))},p=e(43),w=e(56),m=e(42),y=m.a.div(r||(r=Object(b.a)(["\n  & > div {\n    position: absolute;\n    width: 30vw;\n    height: 30vw;\n    background: grey;\n    border-radius: 5px;\n    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);\n    transition: box-shadow 0.5s, opacity 0.5s;\n    will-change: transform;\n    border: 10px solid white;\n    cursor: grab;\n    overflow: hidden;\n    touch-action: none;\n  }\n"]))),k=function(t,n){return-(t-n-window.innerHeight/2)/20},S=function(t,n){return(t-n-window.innerWidth/2)/20};function C(t){var n=t.x,e=void 0===n?0:n,r=t.y,o=void 0===r?0:r,a=c.a.useRef(null),i=Object(p.useSpring)((function(){return{rotateX:0,rotateY:0,rotateZ:0,scale:1,zoom:0,x:e,y:o,config:{mass:5,tension:350,friction:40}}})),s=Object(f.a)(i,2),u=s[0],d=u.x,b=u.y,l=u.rotateX,j=u.rotateY,g=u.rotateZ,v=u.zoom,x=u.scale,O=s[1],m=c.a.useState(!1),C=Object(f.a)(m,2),D=C[0],F=C[1];return Object(w.a)({onDragStart:function(){return F(!0)},onDrag:function(t){var n=Object(f.a)(t.offset,2),e=n[0],r=n[1];return O({x:e,y:r,rotateX:0,rotateY:0,scale:1})},onDragEnd:function(){return F(!1)},onPinch:function(t){var n=Object(f.a)(t.offset,2),e=n[0],r=n[1];return O({zoom:e/200,rotateZ:r})},onMove:function(t){var n=Object(f.a)(t.xy,2),e=n[0],r=n[1];return!t.dragging&&O({rotateX:k(r,b.get()),rotateY:S(e,d.get()),scale:1.1})},onHover:function(t){return!t.hovering&&O({rotateX:0,rotateY:0,scale:1})}},{domTarget:a,eventOptions:{passive:!1}}),Object(h.jsx)(y,{children:Object(h.jsx)(p.animated.div,{ref:a,className:"".concat(D?"dragging":""),style:{transform:"perspective(600px)",x:d,y:b,scale:Object(p.to)([x,v],(function(t,n){return t+n})),rotateX:l,rotateY:j,rotateZ:g}})})}document.addEventListener("gesturestart",(function(t){return t.preventDefault()})),document.addEventListener("gesturechange",(function(t){return t.preventDefault()}));var D=m.a.div(o||(o=Object(b.a)(["\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir;\n  background: #f0f0f0;\n  height: 100vh;\n  width: 100vw;\n"]))),F=function(){var t=Object(a.useState)([]),n=Object(f.a)(t,2),e=n[0],r=n[1];return Object(h.jsxs)(D,{children:[Object(h.jsx)(O,{onClick:function(){var t={x:window.innerWidth/2,y:window.innerHeight/2};r([].concat(Object(d.a)(e),[t]))},styles:{position:"absolute",top:"10%",left:"15%"}}),e.map((function(t){return Object(h.jsx)(C,Object(u.a)({},t))}))]})};function X(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(F,{})})}var Y=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,94)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;e(t),r(t),o(t),a(t),c(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root")),Y(console.log)}},[[78,1,2]]]);