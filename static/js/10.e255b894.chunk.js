(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{53:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),l=a(4),r=a(3),o=a(5),i=a(0),c=a.n(i),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={days:0,hours:0,minutes:0,seconds:0},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.countDown=new Date("May 06, 2019 00:00:00"),this.interval=setInterval(function(){var t=(new Date).getTime(),a=e.countDown-t;e.setState({days:Math.floor(a/864e5),hours:Math.floor(a%864e5/36e5),minutes:Math.floor(a%36e5/6e4),seconds:Math.floor(a%6e4/1e3)})},1e3)}},{key:"render",value:function(){return c.a.createElement("div",{class:"targetgoal",id:"mygoal"},c.a.createElement("h3",{class:"heading-secondary"},"Target Saya Selanjutnya"),c.a.createElement("p",{class:"targetgoal--currentgoal"},"-- Lulus Sertifikasi Azure Cloud Developer --"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("span",{id:"days"},this.state.days),"hari"),c.a.createElement("li",null,c.a.createElement("span",{id:"hours"},this.state.hours),"jam"),c.a.createElement("li",null,c.a.createElement("span",{id:"minutes"},this.state.minutes),"menit"),c.a.createElement("li",null,c.a.createElement("span",{id:"seconds"},this.state.seconds),"detik")))}}]),t}(i.PureComponent);t.default=u}}]);
//# sourceMappingURL=10.e255b894.chunk.js.map