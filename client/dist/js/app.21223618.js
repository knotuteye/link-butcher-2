(function(t){function e(e){for(var r,c,a=e[0],u=e[1],s=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"12f2":function(t,e,n){"use strict";var r=n("b941"),i=n.n(r);i.a},"1ec3":function(t,e,n){"use strict";var r=n("e587"),i=n.n(r);i.a},"30d5":function(t,e,n){"use strict";var r=n("fc67"),i=n.n(r);i.a},3418:function(t,e,n){},"52c0":function(t,e,n){"use strict";var r=n("b440"),i=n.n(r);i.a},"85ec":function(t,e,n){},b440:function(t,e,n){},b941:function(t,e,n){},ca64:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ImageBackground",[n("ColorOverlay",[n("div",{staticClass:"wrapper"},[n("Branding",{attrs:{name:"pbid.io",subtitle:"Link Shortener"}}),n("URLInput"),t.newTuple?n("RecentLink",{attrs:{id:"bubble",bubble:!0,short:t.newTuple.slug,original:t.newTuple.url}}):t._e(),t.recentLinks.length?n("RecentLinksBox",t._l(t.recentLinks,(function(t){return n("RecentLink",{key:t.slug,attrs:{short:t.slug,original:t.url}})})),1):t._e()],1)])],1)],1)},o=[],c=n("9ab4"),a=n("60a3"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[t._t("default")],2)},s=[],l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),e=Object(c["b"])([a["a"]],e),e}(a["c"]),p=l,f=p,d=(n("fe99"),n("2877")),h=Object(d["a"])(f,u,s,!1,null,"2cddeea8",null),b=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overlay",attrs:{id:"overlay"}},[t._t("default")],2)},m=[],y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),e=Object(c["b"])([a["a"]],e),e}(a["c"]),O=y,j=O,g=(n("12f2"),Object(d["a"])(j,v,m,!1,null,"895d2ca0",null)),k=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brand slide-in-top"},[n("h1",{staticClass:"masthead"},[t._v(" "+t._s(t.name)+" ")])])},_=[],L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),Object(c["b"])([Object(a["b"])()],e.prototype,"name",void 0),e=Object(c["b"])([a["a"]],e),e}(a["c"]),C=L,x=C,T=(n("30d5"),Object(d["a"])(x,w,_,!1,null,"78587b2a",null)),R=T.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"url-input",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.standardizeURL(t.url)}}},[n("input",{attrs:{type:"submit","aria-label":"Shrink the pasted link",value:"Shrink"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:t.err,attrs:{type:"url",name:"url",spellcheck:"false",placeholder:"Paste a link to shorten it",required:"","aria-label":"Paste a link here"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})])},$=[],z=n("2f62");r["a"].use(z["a"]);var E=new z["a"].Store({state:{server:window.location.href,recentLinks:new Array,newTuple:null,connectionError:!1},mutations:{updateRecentLinks:function(t,e){t.recentLinks=e},addToRecentLinkStack:function(t,e){var n=JSON.parse(JSON.stringify(t.recentLinks))[0];n.slug!=e.slug&&t.recentLinks.unshift(e)},updateNewLink:function(t,e){t.newTuple=e},updateConnectionError:function(t,e){t.connectionError=e}},actions:{},modules:{}}),P=E.state.server;function U(){return Object(c["a"])(this,void 0,void 0,(function(){return Object(c["d"])(this,(function(t){switch(t.label){case 0:return[4,fetch(P+"slugs/all",{method:"GET"}).then((function(t){return t.json()}))];case 1:return[2,t.sent()]}}))}))}function B(t){return Object(c["a"])(this,void 0,void 0,(function(){return Object(c["d"])(this,(function(e){switch(e.label){case 0:return[4,fetch(P+"slugs/create",{headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({url:t}),method:"POST"}).then((function(t){return t.json()}))];case 1:return[2,e.sent()]}}))}))}var M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.url="",e.err="",e}return Object(c["c"])(e,t),e.prototype.updateTuple=function(){return Object(c["a"])(this,void 0,void 0,(function(){var t;return Object(c["d"])(this,(function(e){switch(e.label){case 0:return this.url?[4,B(this.url)]:[3,2];case 1:t=e.sent(),this.$store.commit("updateNewLink",t),this.$store.commit("addToRecentLinkStack",t),e.label=2;case 2:return[2]}}))}))},e.prototype.standardizeURL=function(){var t=this;"http://"!=this.url.slice(0,7)&&"https://"!=this.url.slice(0,8)&&(this.url="http://"+this.url),this.validURL(this.url)?this.updateTuple():(this.err="error",setTimeout((function(){t.err=""}),700))},e.prototype.validURL=function(t){var e=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return e.test(t)},e=Object(c["b"])([a["a"]],e),e}(a["c"]),N=M,J=N,A=(n("1ec3"),Object(d["a"])(J,S,$,!1,null,"c9d53278",null)),H=A.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recent scale-in-ver-center"},[n("h3",[t._v("Recent Links")]),n("div",{staticClass:"box"},[t._t("default")],2)])},V=[],q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(c["c"])(e,t),e=Object(c["b"])([a["a"]],e),e}(a["c"]),D=q,G=D,F=(n("52c0"),Object(d["a"])(G,I,V,!1,null,"06848a94",null)),K=F.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recent-link",class:t.bubble?t.anim:""},[n("div",[n("a",{staticClass:"short",attrs:{href:t.short}},[t._v(t._s("pbid.io/"+t.short))]),n("p",{staticClass:"original",attrs:{title:t.original}},[t._v(" "+t._s(t.originalCaption)+" ")])]),n("i",{staticClass:"copy-icon",attrs:{title:"Copy"},on:{click:t.copyToClipboard}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30px",height:"30px"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}})])])])},W=[],X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim="jello-horizontal",e}return Object(c["c"])(e,t),e.prototype.onShortChange=function(){var t=this;this.bubble&&(this.anim="",setTimeout((function(){t.anim="jello-horizontal",U().then((function(e){t.$store.commit("updateRecentLinks",e)}))}),0))},Object.defineProperty(e.prototype,"originalCaption",{get:function(){return this.original.slice(0,20)+(this.original.length>20?"...":"")},enumerable:!1,configurable:!0}),e.prototype.copyToClipboard=function(){var t=document.createElement("textarea");t.value="pbid.io/"+this.short,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("Copied!")},Object(c["b"])([Object(a["b"])()],e.prototype,"short",void 0),Object(c["b"])([Object(a["b"])()],e.prototype,"original",void 0),Object(c["b"])([Object(a["b"])()],e.prototype,"bubble",void 0),Object(c["b"])([Object(a["d"])("short")],e.prototype,"onShortChange",null),e=Object(c["b"])([a["a"]],e),e}(a["c"]),Y=X,Z=Y,tt=(n("d0e0"),Object(d["a"])(Z,Q,W,!1,null,"d8effdd2",null)),et=tt.exports,nt=function(t){function e(){var e=t.call(this)||this;return e.fetchAndUpdateRecentLinks(),e}return Object(c["c"])(e,t),e.prototype.fetchAndUpdateRecentLinks=function(){var t=this;U().then((function(e){t.$store.commit("updateRecentLinks",e)})).catch((function(){t.$store.commit("updateConnectionError",!0)}))},Object.defineProperty(e.prototype,"recentLinks",{get:function(){return this.$store.state.recentLinks},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newTuple",{get:function(){return this.$store.state.newTuple},enumerable:!1,configurable:!0}),e=Object(c["b"])([Object(a["a"])({components:{ImageBackground:b,ColorOverlay:k,Branding:R,URLInput:H,RecentLinksBox:K,RecentLink:et}})],e),e}(a["c"]),rt=nt,it=rt,ot=(n("034f"),Object(d["a"])(it,i,o,!1,null,null,null)),ct=ot.exports;r["a"].config.productionTip=!1,new r["a"]({store:E,render:function(t){return t(ct)}}).$mount("#app")},d0e0:function(t,e,n){"use strict";var r=n("3418"),i=n.n(r);i.a},e587:function(t,e,n){},fc67:function(t,e,n){},fe99:function(t,e,n){"use strict";var r=n("ca64"),i=n.n(r);i.a}});
//# sourceMappingURL=app.21223618.js.map