(this.webpackJsonpjundrummachine=this.webpackJsonpjundrummachine||[]).push([[0],{13:function(e,d,s){},15:function(e,d,s){"use strict";s.r(d);var t=s(2),c=s(3),i=s(5),a=s(4),n=s(1),r=s.n(n),o=s(8),l=s.n(o),m=(s(13),s(6)),u=s(0),h=function(e){Object(i.a)(s,e);var d=Object(a.a)(s);function s(e){return Object(t.a)(this,s),d.call(this,e)}return Object(c.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("audio",{id:this.props.Audioid,className:"clip",src:this.props.Audiosrc,type:"audio/mp3",children:["Your browser does not support the ",Object(u.jsx)("code",{children:"audio"})," element."]})}}]),s}(r.a.Component),j=function(e){Object(i.a)(s,e);var d=Object(a.a)(s);function s(e){var c;return Object(t.a)(this,s),(c=d.call(this,e)).state={display:""},c.handleClick=c.handleClick.bind(Object(m.a)(c)),c.handleKeyPress=c.handleKeyPress.bind(Object(m.a)(c)),c}return Object(c.a)(s,[{key:"handleClick",value:function(e){var d=e.target.innerText;this.setState({display:e.target.innerText}),document.getElementById(d).play()}},{key:"handleKeyPress",value:function(e){81===e.keyCode|87===e.keyCode|69===e.keyCode|65===e.keyCode|83===e.keyCode|68===e.keyCode|90===e.keyCode|88===e.keyCode|67===e.keyCode&&(this.setState({display:String.fromCharCode(e.keyCode)}),document.getElementById(String.fromCharCode(e.keyCode)).play())}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"drum-machine",children:[Object(u.jsx)("div",{id:"displaydiv",children:Object(u.jsx)("h1",{id:"display",children:this.state.display})}),Object(u.jsxs)("div",{id:"pads",children:[Object(u.jsxs)("div",{id:"1",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"Q",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}),"Q"]}),Object(u.jsxs)("div",{id:"2",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"W",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}),"W"]}),Object(u.jsxs)("div",{id:"3",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"E",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}),"E"]}),Object(u.jsxs)("div",{id:"4",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"A",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}),"A"]}),Object(u.jsxs)("div",{id:"5",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"S",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}),"S"]}),Object(u.jsxs)("div",{id:"6",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"D",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}),"D"]}),Object(u.jsxs)("div",{id:"7",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"Z",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}),"Z"]}),Object(u.jsxs)("div",{id:"8",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"X",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}),"X"]}),Object(u.jsxs)("div",{id:"9",onClick:this.handleClick,className:"drum-pad",children:[Object(u.jsx)(h,{Audioid:"C",Audiosrc:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}),"C"]})]})]})}}]),s}(r.a.Component),p=function(e){Object(i.a)(s,e);var d=Object(a.a)(s);function s(e){return Object(t.a)(this,s),d.call(this,e)}return Object(c.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"afterRoot",children:[Object(u.jsx)("h1",{id:"title1",children:"Jun's Drum machine"}),Object(u.jsx)(j,{})]})}}]),s}(r.a.Component);l.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.42862d51.chunk.js.map