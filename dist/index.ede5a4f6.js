var t,r,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o=function(t){return t&&t.Math==Math&&t};n=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof e&&e)||function(){return this}()||Function("return this")();var i,a;i=!(a=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var c,u={};c=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var f,l=Function.prototype.call;u=c?l.bind(l):function(){return l.apply(l,arguments)};var s={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h=p&&!s.call({1:2},1);f=h?function(t){var r=p(this,t);return!!r&&r.enumerable}:s;var v;v=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var y,d,g={},m={},b=Function.prototype,w=b.bind,O=b.call,j=c&&w.bind(O,O),E=(m=c?function(t){return t&&j(t)}:function(t){return t&&function(){return O.apply(t,arguments)}})({}.toString),S=m("".slice);d=function(t){return S(E(t),8,-1)};var L=n.Object,x=m("".split);g=a((function(){return!L("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?x(t,""):L(t)}:L;var P,_=n.TypeError;P=function(t){if(null==t)throw _("Can't call method on "+t);return t},y=function(t){return g(P(t))};var T,k,I,F;F=function(t){return"function"==typeof t},I=function(t){return"object"==typeof t?null!==t:F(t)};var M,N={},G=function(t){return F(t)?t:void 0};M=function(t,r){return arguments.length<2?G(n[t]):n[t]&&n[t][r]};var C={};C=m({}.isPrototypeOf);var R,z,A,D={};D=M("navigator","userAgent")||"";var Y,$,B=n.process,U=n.Deno,W=B&&B.versions||U&&U.version,q=W&&W.v8;q&&($=(Y=q.split("."))[0]>0&&Y[0]<4?1:+(Y[0]+Y[1])),!$&&D&&(!(Y=D.match(/Edge\/(\d+)/))||Y[1]>=74)&&(Y=D.match(/Chrome\/(\d+)/))&&($=+Y[1]),A=$,z=!!Object.getOwnPropertySymbols&&!a((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&A&&A<41})),R=z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var K=n.Object;N=R?function(t){return"symbol"==typeof t}:function(t){var r=M("Symbol");return F(r)&&C(r.prototype,K(t))};var V,X,H,J=n.String;H=function(t){try{return J(t)}catch(t){return"Object"}};var Q=n.TypeError;X=function(t){if(F(t))return t;throw Q(H(t)+" is not a function")},V=function(t,r){var e=t[r];return null==e?void 0:X(e)};var Z,tt=n.TypeError;Z=function(t,r){var e,n;if("string"===r&&F(e=t.toString)&&!I(n=u(e,t)))return n;if(F(e=t.valueOf)&&!I(n=u(e,t)))return n;if("string"!==r&&F(e=t.toString)&&!I(n=u(e,t)))return n;throw tt("Can't convert object to primitive value")};var rt,et;var nt,ot={},it=Object.defineProperty;nt=function(t,r){try{it(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r};var at=n["__core-js_shared__"]||nt("__core-js_shared__",{});ot=at,(et=function(t,r){return ot[t]||(ot[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.20.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"});var ct,ut={},ft=n.Object;ct=function(t){return ft(P(t))};var lt=m({}.hasOwnProperty);ut=Object.hasOwn||function(t,r){return lt(ct(t),r)};var st,pt=0,ht=Math.random(),vt=m(1..toString);st=function(t){return"Symbol("+(void 0===t?"":t)+")_"+vt(++pt+ht,36)};var yt=et("wks"),dt=n.Symbol,gt=dt&&dt.for,mt=R?dt:dt&&dt.withoutSetter||st;rt=function(t){if(!ut(yt,t)||!z&&"string"!=typeof yt[t]){var r="Symbol."+t;z&&ut(dt,t)?yt[t]=dt[t]:yt[t]=R&&gt?gt(r):mt(r)}return yt[t]};var bt=n.TypeError,wt=rt("toPrimitive");k=function(t,r){if(!I(t)||N(t))return t;var e,n=V(t,wt);if(n){if(void 0===r&&(r="default"),e=u(n,t,r),!I(e)||N(e))return e;throw bt("Can't convert object to primitive value")}return void 0===r&&(r="number"),Z(t,r)},T=function(t){var r=k(t,"string");return N(r)?r:r+""};var Ot,jt,Et=n.document,St=I(Et)&&I(Et.createElement);jt=function(t){return St?Et.createElement(t):{}},Ot=!i&&!a((function(){return 7!=Object.defineProperty(jt("div"),"a",{get:function(){return 7}}).a}));var Lt,xt,Pt=Object.getOwnPropertyDescriptor,_t=r=i?Pt:function(t,r){if(t=y(t),r=T(r),Ot)try{return Pt(t,r)}catch(t){}if(ut(t,r))return v(!u(f,t,r),t[r])},Tt={};xt=i&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var kt,It=n.String,Ft=n.TypeError;kt=function(t){if(I(t))return t;throw Ft(It(t)+" is not an object")};var Mt=n.TypeError,Nt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor;Lt=i?xt?function(t,r,e){if(kt(t),r=T(r),kt(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=Gt(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return Nt(t,r,e)}:Nt:function(t,r,e){if(kt(t),r=T(r),kt(e),Ot)try{return Nt(t,r,e)}catch(t){}if("get"in e||"set"in e)throw Mt("Accessors not supported");return"value"in e&&(t[r]=e.value),t},Tt=i?function(t,r,e){return Lt(t,r,v(1,e))}:function(t,r,e){return t[r]=e,t};var Ct,Rt={},zt=m(Function.toString);F(ot.inspectSource)||(ot.inspectSource=function(t){return zt(t)}),Rt=ot.inspectSource;var At,Dt,Yt=n.WeakMap;Dt=F(Yt)&&/native code/.test(Rt(Yt));var $t,Bt=et("keys");$t=function(t){return Bt[t]||(Bt[t]=st(t))};var Ut={};Ut={};var Wt,qt,Kt,Vt=n.TypeError,Xt=n.WeakMap;if(Dt||ot.state){var Ht=ot.state||(ot.state=new Xt),Jt=m(Ht.get),Qt=m(Ht.has),Zt=m(Ht.set);Wt=function(t,r){if(Qt(Ht,t))throw new Vt("Object already initialized");return r.facade=t,Zt(Ht,t,r),r},qt=function(t){return Jt(Ht,t)||{}},Kt=function(t){return Qt(Ht,t)}}else{var tr=$t("state");Ut[tr]=!0,Wt=function(t,r){if(ut(t,tr))throw new Vt("Object already initialized");return r.facade=t,Tt(t,tr,r),r},qt=function(t){return ut(t,tr)?t[tr]:{}},Kt=function(t){return ut(t,tr)}}At={set:Wt,get:qt,has:Kt,enforce:function(t){return Kt(t)?qt(t):Wt(t,{})},getterFor:function(t){return function(r){var e;if(!I(r)||(e=qt(r)).type!==t)throw Vt("Incompatible receiver, "+t+" required");return e}}};var rr=Function.prototype,er=i&&Object.getOwnPropertyDescriptor,nr=ut(rr,"name"),or={EXISTS:nr,PROPER:nr&&"something"===function(){}.name,CONFIGURABLE:nr&&(!i||i&&er(rr,"name").configurable)}.CONFIGURABLE,ir=At.get,ar=At.enforce,cr=String(String).split("String");(Ct=function(t,r,e,o){var i,a=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet,f=o&&void 0!==o.name?o.name:r;F(e)&&("Symbol("===String(f).slice(0,7)&&(f="["+String(f).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ut(e,"name")||or&&e.name!==f)&&Tt(e,"name",f),(i=ar(e)).source||(i.source=cr.join("string"==typeof f?f:""))),t!==n?(a?!u&&t[r]&&(c=!0):delete t[r],c?t[r]=e:Tt(t,r,e)):c?t[r]=e:nt(r,e)})(Function.prototype,"toString",(function(){return F(this)&&ir(this).source||Rt(this)}));var ur,fr,lr,sr,pr,hr={},vr=Math.ceil,yr=Math.floor;pr=function(t){var r=+t;return r!=r||0===r?0:(r>0?yr:vr)(r)};var dr=Math.max,gr=Math.min;sr=function(t,r){var e=pr(t);return e<0?dr(e+r,0):gr(e,r)};var mr,br,wr=Math.min;br=function(t){return t>0?wr(pr(t),9007199254740991):0},mr=function(t){return br(t.length)};var Or=function(t){return function(r,e,n){var o,i=y(r),a=mr(i),c=sr(n,a);if(t&&e!=e){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},jr={includes:Or(!0),indexOf:Or(!1)}.indexOf,Er=m([].push);lr=function(t,r){var e,n=y(t),o=0,i=[];for(e in n)!ut(Ut,e)&&ut(n,e)&&Er(i,e);for(;r.length>o;)ut(n,e=r[o++])&&(~jr(i,e)||Er(i,e));return i};var Sr,Lr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");fr=Object.getOwnPropertyNames||function(t){return lr(t,Lr)},Sr=Object.getOwnPropertySymbols;var xr=m([].concat);hr=M("Reflect","ownKeys")||function(t){var r=fr(kt(t));return Sr?xr(r,Sr(t)):r},ur=function(t,e,n){for(var o=hr(e),i=Lt,a=r,c=0;c<o.length;c++){var u=o[c];ut(t,u)||n&&ut(n,u)||i(t,u,a(e,u))}};var Pr={},_r=/#|\.prototype\./,Tr=function(t,r){var e=Ir[kr(t)];return e==Mr||e!=Fr&&(F(r)?a(r):!!r)},kr=Tr.normalize=function(t){return String(t).replace(_r,".").toLowerCase()},Ir=Tr.data={},Fr=Tr.NATIVE="N",Mr=Tr.POLYFILL="P";Pr=Tr,t=function(t,r){var e,o,i,a,c,u=t.target,f=t.global,l=t.stat;if(e=f?n:l?n[u]||nt(u,{}):(n[u]||{}).prototype)for(o in r){if(a=r[o],i=t.noTargetGet?(c=_t(e,o))&&c.value:e[o],!Pr(f?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ur(a,i)}(t.sham||i&&i.sham)&&Tt(a,"sham",!0),Ct(e,o,a,t)}};var Nr,Gr={},Cr=Function.prototype,Rr=Cr.apply,zr=Cr.call;Gr="object"==typeof Reflect&&Reflect.apply||(c?zr.bind(Rr):function(){return zr.apply(Rr,arguments)});var Ar,Dr=m(m.bind);Ar=function(t,r){return X(t),void 0===r?t:c?Dr(t,r):function(){return t.apply(r,arguments)}};var Yr={};Yr=M("document","documentElement");var $r={};$r=m([].slice);var Br;Br=/(?:ipad|iphone|ipod).*applewebkit/i.test(D);var Ur;Ur="process"==d(n.process);var Wr,qr,Kr,Vr,Xr=n.setImmediate,Hr=n.clearImmediate,Jr=n.process,Qr=n.Dispatch,Zr=n.Function,te=n.MessageChannel,re=n.String,ee=0,ne={};try{Wr=n.location}catch(t){}var oe=function(t){if(ut(ne,t)){var r=ne[t];delete ne[t],r()}},ie=function(t){return function(){oe(t)}},ae=function(t){oe(t.data)},ce=function(t){n.postMessage(re(t),Wr.protocol+"//"+Wr.host)};Xr&&Hr||(Xr=function(t){var r=$r(arguments,1);return ne[++ee]=function(){Gr(F(t)?t:Zr(t),void 0,r)},qr(ee),ee},Hr=function(t){delete ne[t]},Ur?qr=function(t){Jr.nextTick(ie(t))}:Qr&&Qr.now?qr=function(t){Qr.now(ie(t))}:te&&!Br?(Vr=(Kr=new te).port2,Kr.port1.onmessage=ae,qr=Ar(Vr.postMessage,Vr)):n.addEventListener&&F(n.postMessage)&&!n.importScripts&&Wr&&"file:"!==Wr.protocol&&!a(ce)?(qr=ce,n.addEventListener("message",ae,!1)):qr="onreadystatechange"in jt("script")?function(t){Yr.appendChild(jt("script")).onreadystatechange=function(){Yr.removeChild(this),oe(t)}}:function(t){setTimeout(ie(t),0)}),Nr={set:Xr,clear:Hr},t({global:!0,bind:!0,enumerable:!0,forced:!n.setImmediate||!n.clearImmediate},{setImmediate:Nr.set,clearImmediate:Nr.clear});var ue=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n=s;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===s)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?v:p,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s="suspendedStart",p="suspendedYield",h="executing",v="completed",y={};function d(){}function g(){}function m(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(T([])));O&&O!==e&&n.call(O,i)&&(b=O);var j=m.prototype=d.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function x(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:r,done:!0}}return g.prototype=m,u(j,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new S(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),u(j,c,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}({});try{regeneratorRuntime=ue}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=ue:Function("r","regeneratorRuntime = r")(ue)}!async function(){try{const t=await fetch("https://wordpress.altos.dev/wp-json/wp/v2/posts"),r=await t.json();if(!t.ok)throw new Error(`${r.message} (${t.status})`);console.log(t,r)}catch(t){alert(t)}}();
//# sourceMappingURL=index.ede5a4f6.js.map