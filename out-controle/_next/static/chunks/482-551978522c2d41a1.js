"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{7501:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(4051),o=r.n(n);function a(e,t,r,n,o,a,u){try{var s=e[a](u),c=s.value}catch(i){return void r(i)}s.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function s(e){a(u,n,o,s,c,"next",e)}function c(e){a(u,n,o,s,c,"throw",e)}s(void 0)}))}}var s=r(9669),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t=e.prototype;return t.criarControle=function(e){return u(o().mark((function t(){var r,n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={setor:e.setor,subsetor:e.subsetor,ilha:e.ilha,baia:e.baia,cputombo:e.cputombo,cpunumeroserie:e.cpunumeroserie,monitor1tombo:e.monitor1tombo,monitor1numeroserie:e.monitor1numeroserie,monitor2tombo:e.monitor2tombo,monitor2numeroserie:e.monitor2numeroserie,impressora:e.impressora,observacao:e.observacao},console.log(r),t.next=5,s.post("".concat("http://10.26.0.51:3030/","criarControle/"),r,{headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}});case 5:return n=t.sent,a=n.data,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},t.atualizarControle=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,r={method:"put",url:"".concat("http://10.26.0.51:3030/","atualizarControle/")+e.id,data:{ilha:e.ilha,baia:e.baia,cputombo:e.cputombo,cpunumeroserie:e.cpunumeroserie,monitor1tombo:e.monitor1tombo,monitor1numeroserie:e.monitor1numeroserie,monitor2tombo:e.monitor2tombo,monitor2numeroserie:e.monitor2numeroserie,impressora:e.impressora,observacao:e.observacao},headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},t.next=5,s(r);case 5:t.sent,console.log("controle atualizado com sucesso"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(0),console.log(t.t1);case 17:case"end":return t.stop()}}),t,null,[[0,14],[1,9]])})))()},t.deletarControle=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.id){t.next=6;break}return r={method:"delete",url:"".concat("http://10.26.0.51:3030/","deletarControle/")+e.id,headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},t.next=5,s(r);case 5:console.log("deletado com sucesso");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Erro ao deletar controle ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.obterTodosControles=function(){return u(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"get",url:"".concat("http://10.26.0.51:3030/","listarControles"),headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},e.next=4,s(t);case 4:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},t.obterControleControlePorId=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("".concat("http://10.26.0.51:3030/","listarControle/")+e.id);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},t.filtrarPorSetor=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorSetor/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.filtrarPorSubSetor=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,console.log(e),!e){t.next=7;break}return t.next=5,s.get("".concat("http://10.26.0.51:3030/","filtrarPorSubSetor/")+e);case 5:return r=t.sent,t.abrupt("return",r.data);case 7:t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},t.filtrarPorCpuTombo=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=8;break}return console.log("entrei do cpu tombo"),console.log(e),t.next=6,s.get("".concat("http://10.26.0.51:3030/","filtrarPorCpuTombo/")+e);case 6:return r=t.sent,t.abrupt("return",r.data);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},t.filtrarPorCpuNumeroSerie=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorCpuNumeroSerie/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.filtrarPorMonitor1Tombo=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorMonitor1Tombo/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.filtrarPorMonitor1NumeroSerie=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorMonitor1NumeroSerie/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.filtrarPorMonitor2Tombo=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorMonitor2Tombo/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.filtrarPorMonitor2NumeroSerie=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorMonitor2NumeroSerie/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.filtrarPorImpressora=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorImpressora/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.filtrarPorObservacao=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=6;break}return t.next=4,s.get("".concat("http://10.26.0.51:3030/","filtrarPorObservacao/")+e);case 4:return r=t.sent,t.abrupt("return",r.data);case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},e}()},4680:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(4051),o=r.n(n);function a(e,t,r,n,o,a,u){try{var s=e[a](u),c=s.value}catch(i){return void r(i)}s.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function s(e){a(u,n,o,s,c,"next",e)}function c(e){a(u,n,o,s,c,"throw",e)}s(void 0)}))}}var s=r(9669),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t=e.prototype;return t.criarSetor=function(e){return u(o().mark((function t(){var r,n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={ativo:!0,nome:e.nome,telefone:e.telefone},t.next=4,s.post("".concat("http://10.26.0.51:3030/","setor/criarSetor/"),r,{headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}});case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},t.finalizarSetor=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.id){t.next=6;break}return r={method:"put",url:"".concat("http://10.26.0.51:3030/","setor/updateCampoAtivoSetor/")+e.id,headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},t.next=5,s(r);case 5:console.log("finalizado com sucesso");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Erro ao finalizar setor ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.atualizarTelefoneSetor=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,r={method:"put",url:"".concat("http://10.26.0.51:3030/","setor/updateTelefoneSetor/")+e.id,data:{telefone:e.telefone},headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},t.next=5,s(r);case 5:t.sent,console.log("telefone atualizado com sucesso"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(0),console.log(t.t1);case 17:case"end":return t.stop()}}),t,null,[[0,14],[1,9]])})))()},t.obterSetoresAtivos=function(){return u(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"get",url:"".concat("http://10.26.0.51:3030/","setor/listarSetoresAtivos"),headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},e.next=4,s(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},t.obterTodosSetores=function(){return u(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"get",url:"".concat("http://10.26.0.51:3030/","setor/listarTodosSetores"),headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},e.next=4,s(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},e}()},3389:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(4051),o=r.n(n);function a(e,t,r,n,o,a,u){try{var s=e[a](u),c=s.value}catch(i){return void r(i)}s.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function s(e){a(u,n,o,s,c,"next",e)}function c(e){a(u,n,o,s,c,"throw",e)}s(void 0)}))}}var s=r(9669),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t=e.prototype;return t.criarSubSetor=function(e){return u(o().mark((function t(){var r,n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={ativo:!0,nome:e.nome,nomesetor:e.nomesetor,telefone:e.telefone},t.next=4,s.post("".concat("http://10.26.0.51:3030/","subSetor/criarSubSetor/"),r,{headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}});case 4:return n=t.sent,console.log(n),a=n.data,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},t.finalizarSubSetor=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.id){t.next=6;break}return r={method:"put",url:"".concat("http://10.26.0.51:3030/","subSetor/updateCampoAtivoSubSetor/")+e.id,headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},t.next=5,s(r);case 5:console.log("finalizado com sucesso");case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Erro ao finalizar subSetor ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},t.atualizarTelefoneSubSetor=function(e){return u(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.prev=1,r={method:"put",url:"".concat("http://10.26.0.51:3030/","subSetor/updateTelefoneSubSetor/")+e.id,data:{telefone:e.telefone},headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},t.next=5,s(r);case 5:t.sent,console.log("telefone atualizado com sucesso"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:t.next=17;break;case 14:t.prev=14,t.t1=t.catch(0),console.log(t.t1);case 17:case"end":return t.stop()}}),t,null,[[0,14],[1,9]])})))()},t.obterSubSetoresAtivos=function(){return u(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"get",url:"".concat("http://10.26.0.51:3030/","subSetor/listarSubSetoresAtivos"),headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},e.next=4,s(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},t.obterTodosSubSetores=function(){return u(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"get",url:"".concat("http://10.26.0.51:3030/","subSetor/listarTodosSubSetores"),headers:{autorizacao:"Bearer "+sessionStorage.getItem("token")}},e.next=4,s(t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},e}()},5663:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(5893);function o(e){e.cor;return(0,n.jsx)("button",{onClick:e.onClick,className:"bg-blue-900\n         text-white px-2 py-2 rounded-md  hover:bg-blue-600\n         ".concat(e.className," \n        "),children:e.children})}},2197:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(5893);function o(e){var t;return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{className:"mb-1 mt-3 flex justify-start",children:e.texto}),(0,n.jsx)("input",{type:null!==(t=e.tipo)&&void 0!==t?t:"text",value:e.valor,readOnly:e.somenteLeitura,onChange:function(t){var r;return null===(r=e.valorMudou)||void 0===r?void 0:r.call(e,t.target.value)},className:"\n                border border-purple-500 rounded-lg \n                focus:outline-none bg-gray-200 px-4 py-2\n                ".concat(e.somenteLeitura?"bg-gray":"bg-white","\n            ")})]})}},218:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(5893),o=r(7294),a=r(2316),u=r(5663),s=r(2197),c=r(4680);function i(e){var t=function(){var e=new c.Z,t=(0,o.useState)([]),r=t[0],n=t[1];return(0,o.useEffect)((function(){e.obterSetoresAtivos().then((function(e){return n(e)}))}),[]),r}();return console.log(t),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"mb-1 mt-3",children:e.texto}),(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsxs)("select",{onChange:function(t){return e.valorMudou(t.target.value)},className:"border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3",children:[(0,n.jsx)("option",{value:"",children:"SELECIONE"}),!!t&&(null===t||void 0===t?void 0:t.map((function(e,t){return(0,n.jsx)("option",{value:e.nome,children:e.nome})})))]})})]})}var l=r(3389);function p(e){var t=function(){var e=new l.Z,t=(0,o.useState)([]),r=t[0],n=t[1];return(0,o.useEffect)((function(){e.obterSubSetoresAtivos().then((function(e){return n(e)}))}),[]),r}();console.log(t);var r=[];return Object.keys(t).forEach((function(n){t[n].nomesetor===e.setor&&r.push(t[n])})),console.log(r),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"mb-1 mt-3",children:e.texto}),(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsxs)("select",{onChange:function(t){return e.valorMudou(t.target.value)},className:"border border-purple-500 rounded-lg focus:outline-none bg-white px-4 py-3",children:[(0,n.jsx)("option",{value:"",children:"SELECIONE"}),null===r||void 0===r?void 0:r.map((function(e){return(0,n.jsx)("option",{value:e.nome,children:e.nome})}))]})})]})}function v(e){var t,r,c,l,v,f,d,h,m,b,x,g,w,k,S,C,y,M,j,z,P,U,N,T,Z,E,I,W=null===(t=e.controle)||void 0===t?void 0:t.id,B=null===(r=e.controle)||void 0===r?void 0:r.createAt,A=null===(c=e.controle)||void 0===c?void 0:c.updateAt,O=(0,o.useState)(null!==(C=null===(l=e.controle)||void 0===l?void 0:l.setor)&&void 0!==C?C:""),L=O[0],_=O[1],q=(0,o.useState)(null!==(y=null===(v=e.controle)||void 0===v?void 0:v.subsetor)&&void 0!==y?y:""),D=q[0],F=q[1],G=(0,o.useState)(null!==(M=null===(f=e.controle)||void 0===f?void 0:f.ilha)&&void 0!==M?M:""),H=G[0],J=G[1],K=(0,o.useState)(null!==(j=null===(d=e.controle)||void 0===d?void 0:d.baia)&&void 0!==j?j:""),Q=K[0],R=K[1],V=(0,o.useState)(null!==(z=null===(h=e.controle)||void 0===h?void 0:h.cputombo)&&void 0!==z?z:""),X=V[0],Y=V[1],$=(0,o.useState)(null!==(P=null===(m=e.controle)||void 0===m?void 0:m.cpunumeroserie)&&void 0!==P?P:""),ee=$[0],te=$[1],re=(0,o.useState)(null!==(U=null===(b=e.controle)||void 0===b?void 0:b.monitor1tombo)&&void 0!==U?U:""),ne=re[0],oe=re[1],ae=(0,o.useState)(null!==(N=null===(x=e.controle)||void 0===x?void 0:x.monitor1numeroserie)&&void 0!==N?N:""),ue=ae[0],se=ae[1],ce=(0,o.useState)(null!==(T=null===(g=e.controle)||void 0===g?void 0:g.monitor2tombo)&&void 0!==T?T:""),ie=ce[0],le=ce[1],pe=(0,o.useState)(null!==(Z=null===(w=e.controle)||void 0===w?void 0:w.monitor2numeroserie)&&void 0!==Z?Z:""),ve=pe[0],fe=pe[1],de=(0,o.useState)(null!==(E=null===(k=e.controle)||void 0===k?void 0:k.impressora)&&void 0!==E?E:""),he=de[0],me=de[1],be=(0,o.useState)(null!==(I=null===(S=e.controle)||void 0===S?void 0:S.observacao)&&void 0!==I?I:null),xe=be[0],ge=be[1];return(0,n.jsxs)("div",{children:[!!W&&(0,n.jsx)(s.Z,{somenteLeitura:!0,texto:"C\xf3digo",valor:W}),W?(0,n.jsx)(s.Z,{texto:"Setor",valor:L.toUpperCase(),somenteLeitura:!0}):(0,n.jsx)(i,{texto:"Setor",valor:L.toUpperCase(),valorMudou:_}),W?(0,n.jsx)(s.Z,{texto:"subSetor",valor:D.toUpperCase(),somenteLeitura:!0}):(0,n.jsx)(p,{texto:"SubSetor",setor:L,valor:D.toUpperCase(),valorMudou:F}),(0,n.jsx)(s.Z,{texto:"Ilha",valor:H.toUpperCase(),valorMudou:J}),(0,n.jsx)(s.Z,{texto:"Est. Trabalho",valor:Q.toUpperCase(),valorMudou:R}),(0,n.jsx)(s.Z,{texto:"Cpu-T",valor:X.toUpperCase(),valorMudou:Y}),(0,n.jsx)(s.Z,{texto:"CPU-NS",valor:ee.toUpperCase(),valorMudou:te}),(0,n.jsx)(s.Z,{texto:"Monitor1-T",valor:ne.toUpperCase(),valorMudou:oe}),(0,n.jsx)(s.Z,{texto:"Monitor1-NS",valor:ue.toUpperCase(),valorMudou:se}),(0,n.jsx)(s.Z,{texto:"Monitor2-T",valor:ie.toUpperCase(),valorMudou:le}),(0,n.jsx)(s.Z,{texto:"Monitor2-NS",valor:ve.toUpperCase(),valorMudou:fe}),(0,n.jsx)(s.Z,{texto:"Impressora",valor:he.toUpperCase(),valorMudou:me}),(0,n.jsx)(s.Z,{texto:"Observacao",valor:xe.toUpperCase(),valorMudou:ge}),(0,n.jsxs)("div",{className:"mt-5 flex justify-end",children:[(0,n.jsx)(u.Z,{cor:"blue",className:"mr-2",onClick:function(){var t;return null===(t=e.controleMudou)||void 0===t?void 0:t.call(e,new a.Z(L.toUpperCase(),D.toUpperCase(),H.toUpperCase(),Q.toUpperCase(),X.toUpperCase(),ee.toUpperCase(),ne.toUpperCase(),ue.toUpperCase(),ie.toUpperCase(),ve.toUpperCase(),he.toUpperCase(),xe.toUpperCase(),W,B,A))},children:W?"Alterar":"Criar"}),(0,n.jsx)(u.Z,{cor:"blue",onClick:e.cancelado,children:"Cancelar"})]})]})}},2316:function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function a(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,o(e,t,"get"))}function u(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function s(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,o(e,t,"set"),r),r}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,{Z:function(){return y}});var i=new WeakMap,l=new WeakMap,p=new WeakMap,v=new WeakMap,f=new WeakMap,d=new WeakMap,h=new WeakMap,m=new WeakMap,b=new WeakMap,x=new WeakMap,g=new WeakMap,w=new WeakMap,k=new WeakMap,S=new WeakMap,C=new WeakMap,y=function(){function e(t,r,o,a,c,y,M,j,z,P,U,N){var T=arguments.length>12&&void 0!==arguments[12]?arguments[12]:null,Z=arguments.length>13?arguments[13]:void 0,E=arguments.length>14?arguments[14]:void 0;n(this,e),u(this,i,{writable:!0,value:void 0}),u(this,l,{writable:!0,value:void 0}),u(this,p,{writable:!0,value:void 0}),u(this,v,{writable:!0,value:void 0}),u(this,f,{writable:!0,value:void 0}),u(this,d,{writable:!0,value:void 0}),u(this,h,{writable:!0,value:void 0}),u(this,m,{writable:!0,value:void 0}),u(this,b,{writable:!0,value:void 0}),u(this,x,{writable:!0,value:void 0}),u(this,g,{writable:!0,value:void 0}),u(this,w,{writable:!0,value:void 0}),u(this,k,{writable:!0,value:void 0}),u(this,S,{writable:!0,value:void 0}),u(this,C,{writable:!0,value:void 0}),s(this,l,t),s(this,p,r),s(this,v,o),s(this,f,a),s(this,d,c),s(this,h,y),s(this,m,M),s(this,b,j),s(this,x,z),s(this,g,P),s(this,w,U),s(this,k,N),s(this,S,Z),s(this,C,E),s(this,i,T)}var t,r,o;return e.vazio=function(){return new e("","","","","","","","","","","","",null,null,null)},t=e,(r=[{key:"id",get:function(){return a(this,i)}},{key:"setor",get:function(){return a(this,l)}},{key:"subsetor",get:function(){return a(this,p)}},{key:"ilha",get:function(){return a(this,v)}},{key:"baia",get:function(){return a(this,f)}},{key:"cputombo",get:function(){return a(this,d)}},{key:"cpunumeroserie",get:function(){return a(this,h)}},{key:"monitor1tombo",get:function(){return a(this,m)}},{key:"monitor1numeroserie",get:function(){return a(this,b)}},{key:"monitor2tombo",get:function(){return a(this,x)}},{key:"monitor2numeroserie",get:function(){return a(this,g)}},{key:"impressora",get:function(){return a(this,w)}},{key:"observacao",get:function(){return a(this,k)}},{key:"createAt",get:function(){return a(this,S)}},{key:"updateAt",get:function(){return a(this,C)}}])&&c(t.prototype,r),o&&c(t,o),e}()}}]);