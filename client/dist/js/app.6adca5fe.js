(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"12f2":function(t,e,n){"use strict";var r=n("b941"),i=n.n(r);i.a},"14d8":function(t,e,n){},"474e":function(t,e,n){},"4eca":function(t,e,n){},"52c0":function(t,e,n){"use strict";var r=n("b440"),i=n.n(r);i.a},7954:function(t,e,n){"use strict";var r=n("14d8"),i=n.n(r);i.a},"85ec":function(t,e,n){},a0ac:function(t,e,n){},a474:function(t,e,n){"use strict";var r=n("4eca"),i=n.n(r);i.a},b440:function(t,e,n){},b941:function(t,e,n){},ca64:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ImageBackground",[n("ColorOverlay",[n("div",{staticClass:"wrapper"},[n("Branding",{attrs:{name:"pbid.io",subtitle:"Link Shortener"}}),n("URLInput"),t.newTuple?n("Bubble",{attrs:{short:t.newTuple.slug,original:t.newTuple.url}}):t._e(),0!=t.recentLinks.length?n("RecentLinksBox",t._l(t.recentLinks,(function(t){return n("RecentLink",{key:t.slug,attrs:{short:t.slug,original:t.url}})})),1):t._e()],1)])],1)],1)},o=[],a=n("9ab4"),c=n("60a3"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[t._t("default")],2)},u=[],l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["c"])(e,t),e=Object(a["b"])([c["a"]],e),e}(c["c"]),p=l,d=p,f=(n("fe99"),n("2877")),h=Object(f["a"])(d,s,u,!1,null,"2cddeea8",null),b=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay",attrs:{id:"overlay"}},[t._t("default")],2)},m=[],y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["c"])(e,t),e=Object(a["b"])([c["a"]],e),e}(c["c"]),O=y,j=O,g=(n("12f2"),Object(f["a"])(j,v,m,!1,null,"895d2ca0",null)),w=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand slide-in-top"},[n("h1",{staticClass:"masthead"},[t._v(" "+t._s(t.name)+" ")])])},k=[],C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["c"])(e,t),Object(a["b"])([Object(c["b"])()],e.prototype,"name",void 0),e=Object(a["b"])([c["a"]],e),e}(c["c"]),x=C,L=x,T=(n("a474"),Object(f["a"])(L,_,k,!1,null,"1dc1e653",null)),z=T.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"url-input",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.standardizeURL(t.url)}}},[n("input",{attrs:{type:"submit","aria-label":"Shrink the pasted link",value:"Shrink"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:t.err,attrs:{type:"url",name:"url",spellcheck:"false",placeholder:"Paste a link to shorten it",required:"","aria-label":"Paste a link here"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})])},$=[],S=n("2f62");r["a"].use(S["a"]);var E=new S["a"].Store({state:{server:window.location.href,recentLinks:new Array,newTuple:null,connectionError:!1},mutations:{updateRecentLinks:function(t,e){t.recentLinks=e},addToRecentLinkStack:function(t,e){t.recentLinks.unshift(e)},updateNewLink:function(t,e){t.newTuple=e},updateConnectionError:function(t,e){t.connectionError=e}},actions:{},modules:{}}),P=E.state.server;function B(){return Object(a["a"])(this,void 0,void 0,(function(){return Object(a["d"])(this,(function(t){switch(t.label){case 0:return[4,fetch(P+"slugs/all",{method:"POST"}).then((function(t){return t.json()}))];case 1:return[2,t.sent()]}}))}))}function H(t){return Object(a["a"])(this,void 0,void 0,(function(){return Object(a["d"])(this,(function(e){switch(e.label){case 0:return[4,fetch(P+"slugs/create",{headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({url:t}),method:"POST"}).then((function(t){return t.json()}))];case 1:return[2,e.sent()]}}))}))}var M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.url="",e.err="",e}return Object(a["c"])(e,t),e.prototype.updateTuple=function(){return Object(a["a"])(this,void 0,void 0,(function(){var t;return Object(a["d"])(this,(function(e){switch(e.label){case 0:return this.url||""!=this.url?[4,H(this.url)]:[3,2];case 1:t=e.sent(),this.$store.commit("updateNewLink",t),this.$store.commit("addToRecentLinkStack",t),e.label=2;case 2:return[2]}}))}))},e.prototype.standardizeURL=function(){var t=this;"http://"!=this.url.slice(0,7)&&"https://"!=this.url.slice(0,8)&&(this.url="http://"+this.url),this.validURL(this.url)?this.updateTuple():(this.err="error",setTimeout((function(){t.err=""}),700))},e.prototype.validURL=function(t){var e=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return!!e.test(t)},e=Object(a["b"])([c["a"]],e),e}(c["c"]),U=M,V=U,A=(n("f7bf"),Object(f["a"])(V,R,$,!1,null,"6bc0885d",null)),I=A.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recent scale-in-ver-center"},[n("h3",[t._v("Recent Links")]),n("div",{staticClass:"box"},[t._t("default")],2)])},J=[],q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a["c"])(e,t),e=Object(a["b"])([c["a"]],e),e}(c["c"]),D=q,F=D,G=(n("52c0"),Object(f["a"])(F,N,J,!1,null,"06848a94",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recent-link"},[n("div",[n("a",{staticClass:"short",attrs:{href:t.short}},[t._v(t._s("pbid.io/"+t.short))]),n("p",{staticClass:"original",attrs:{title:t.original}},[t._v(" "+t._s(t.originalCaption)+" ")])]),n("i",{staticClass:"copy-icon",attrs:{title:"Copy"},on:{click:t.copyToClipboard}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30px",height:"30px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}})])])])},W=[],X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.originalCaption=e.original.slice(0,20)+(e.original.length>20?"...":""),e}return Object(a["c"])(e,t),e.prototype.copyToClipboard=function(){var t=document.createElement("textarea");t.value="pbid.io/"+this.short,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("Copied!")},Object(a["b"])([Object(c["b"])()],e.prototype,"short",void 0),Object(a["b"])([Object(c["b"])()],e.prototype,"original",void 0),e=Object(a["b"])([c["a"]],e),e}(c["c"]),Y=X,Z=Y,tt=(n("d59e"),Object(f["a"])(Z,Q,W,!1,null,"a3e21b4a",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.anim,attrs:{id:"bubble"}},[n("div",[n("a",{staticClass:"short",attrs:{href:t.short}},[t._v(t._s("pbid.io/"+t.short))]),n("a",{staticClass:"original",attrs:{href:t.original}},[t._v(t._s(t.original.slice(0,20)+"..."))])]),n("i",{staticClass:"copy-icon",attrs:{title:"Copy"},on:{click:t.copyToClipboard}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30px",height:"30px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}})])])])},rt=[],it=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim="jello-horizontal",e}return Object(a["c"])(e,t),e.prototype.onShortChange=function(){var t=this;this.anim="",setTimeout((function(){t.anim="jello-horizontal",B().then((function(e){t.$store.commit("updateRecentLinks",e)}))}),0)},e.prototype.copyToClipboard=function(){var t=document.createElement("textarea");t.value="pbid.io/"+this.short,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("Copied!")},Object(a["b"])([Object(c["b"])()],e.prototype,"short",void 0),Object(a["b"])([Object(c["b"])()],e.prototype,"original",void 0),Object(a["b"])([Object(c["d"])("short")],e.prototype,"onShortChange",null),e=Object(a["b"])([c["a"]],e),e}(c["c"]),ot=it,at=ot,ct=(n("7954"),Object(f["a"])(at,nt,rt,!1,null,"381a859a",null)),st=ct.exports,ut=function(t){function e(){var e=t.call(this)||this;return e.fetchAndUpdateRecentLinks(),e}return Object(a["c"])(e,t),e.prototype.fetchAndUpdateRecentLinks=function(){var t=this;B().then((function(e){t.$store.commit("updateRecentLinks",e)})).catch((function(){t.$store.commit("updateConnectionError",!0)}))},Object.defineProperty(e.prototype,"recentLinks",{get:function(){return this.$store.state.recentLinks},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newTuple",{get:function(){return this.$store.state.newTuple},enumerable:!1,configurable:!0}),e=Object(a["b"])([Object(c["a"])({components:{ImageBackground:b,ColorOverlay:w,Branding:z,URLInput:I,RecentLinksBox:K,RecentLink:et,Bubble:st}})],e),e}(c["c"]),lt=ut,pt=lt,dt=(n("034f"),Object(f["a"])(pt,i,o,!1,null,null,null)),ft=dt.exports;r["a"].config.productionTip=!1,new r["a"]({store:E,render:function(t){return t(ft)}}).$mount("#app")},d59e:function(t,e,n){"use strict";var r=n("474e"),i=n.n(r);i.a},f7bf:function(t,e,n){"use strict";var r=n("a0ac"),i=n.n(r);i.a},fe99:function(t,e,n){"use strict";var r=n("ca64"),i=n.n(r);i.a}});
//# sourceMappingURL=app.6adca5fe.js.map