var t,e,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o=function(t){return t&&t.Math==Math&&t};n=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof r&&r)||function(){return this}()||Function("return this")();var i,a;i=!(a=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var c,u={};c=!a((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var f,s=Function.prototype.call;u=c?s.bind(s):function(){return s.apply(s,arguments)};var l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h=p&&!l.call({1:2},1);f=h?function(t){var e=p(this,t);return!!e&&e.enumerable}:l;var v;v=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var y,d,g={},m={},b=Function.prototype,w=b.bind,O=b.call,j=c&&w.bind(O,O),E=(m=c?function(t){return t&&j(t)}:function(t){return t&&function(){return O.apply(t,arguments)}})({}.toString),S=m("".slice);d=function(t){return S(E(t),8,-1)};var L=n.Object,x=m("".split);g=a((function(){return!L("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?x(t,""):L(t)}:L;var _,P=n.TypeError;_=function(t){if(null==t)throw P("Can't call method on "+t);return t},y=function(t){return g(_(t))};var T,F,I,k;k=function(t){return"function"==typeof t},I=function(t){return"object"==typeof t?null!==t:k(t)};var M,N={},C=function(t){return k(t)?t:void 0};M=function(t,e){return arguments.length<2?C(n[t]):n[t]&&n[t][e]};var G={};G=m({}.isPrototypeOf);var D,R,A,$={};$=M("navigator","userAgent")||"";var z,q,Y=n.process,B=n.Deno,J=Y&&Y.versions||B&&B.version,U=J&&J.v8;U&&(q=(z=U.split("."))[0]>0&&z[0]<4?1:+(z[0]+z[1])),!q&&$&&(!(z=$.match(/Edge\/(\d+)/))||z[1]>=74)&&(z=$.match(/Chrome\/(\d+)/))&&(q=+z[1]),A=q,R=!!Object.getOwnPropertySymbols&&!a((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&A&&A<41})),D=R&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var W=n.Object;N=D?function(t){return"symbol"==typeof t}:function(t){var e=M("Symbol");return k(e)&&G(e.prototype,W(t))};var H,K,V,X=n.String;V=function(t){try{return X(t)}catch(t){return"Object"}};var Q=n.TypeError;K=function(t){if(k(t))return t;throw Q(V(t)+" is not a function")},H=function(t,e){var r=t[e];return null==r?void 0:K(r)};var Z,tt=n.TypeError;Z=function(t,e){var r,n;if("string"===e&&k(r=t.toString)&&!I(n=u(r,t)))return n;if(k(r=t.valueOf)&&!I(n=u(r,t)))return n;if("string"!==e&&k(r=t.toString)&&!I(n=u(r,t)))return n;throw tt("Can't convert object to primitive value")};var et,rt;var nt,ot={},it=Object.defineProperty;nt=function(t,e){try{it(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e};var at=n["__core-js_shared__"]||nt("__core-js_shared__",{});ot=at,(rt=function(t,e){return ot[t]||(ot[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"});var ct,ut={},ft=n.Object;ct=function(t){return ft(_(t))};var st=m({}.hasOwnProperty);ut=Object.hasOwn||function(t,e){return st(ct(t),e)};var lt,pt=0,ht=Math.random(),vt=m(1..toString);lt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+vt(++pt+ht,36)};var yt=rt("wks"),dt=n.Symbol,gt=dt&&dt.for,mt=D?dt:dt&&dt.withoutSetter||lt;et=function(t){if(!ut(yt,t)||!R&&"string"!=typeof yt[t]){var e="Symbol."+t;R&&ut(dt,t)?yt[t]=dt[t]:yt[t]=D&&gt?gt(e):mt(e)}return yt[t]};var bt=n.TypeError,wt=et("toPrimitive");F=function(t,e){if(!I(t)||N(t))return t;var r,n=H(t,wt);if(n){if(void 0===e&&(e="default"),r=u(n,t,e),!I(r)||N(r))return r;throw bt("Can't convert object to primitive value")}return void 0===e&&(e="number"),Z(t,e)},T=function(t){var e=F(t,"string");return N(e)?e:e+""};var Ot,jt,Et=n.document,St=I(Et)&&I(Et.createElement);jt=function(t){return St?Et.createElement(t):{}},Ot=!i&&!a((function(){return 7!=Object.defineProperty(jt("div"),"a",{get:function(){return 7}}).a}));var Lt,xt,_t=Object.getOwnPropertyDescriptor,Pt=e=i?_t:function(t,e){if(t=y(t),e=T(e),Ot)try{return _t(t,e)}catch(t){}if(ut(t,e))return v(!u(f,t,e),t[e])},Tt={};xt=i&&a((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ft,It=n.String,kt=n.TypeError;Ft=function(t){if(I(t))return t;throw kt(It(t)+" is not an object")};var Mt=n.TypeError,Nt=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor;Lt=i?xt?function(t,e,r){if(Ft(t),e=T(e),Ft(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=Ct(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Nt(t,e,r)}:Nt:function(t,e,r){if(Ft(t),e=T(e),Ft(r),Ot)try{return Nt(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Mt("Accessors not supported");return"value"in r&&(t[e]=r.value),t},Tt=i?function(t,e,r){return Lt(t,e,v(1,r))}:function(t,e,r){return t[e]=r,t};var Gt,Dt={},Rt=m(Function.toString);k(ot.inspectSource)||(ot.inspectSource=function(t){return Rt(t)}),Dt=ot.inspectSource;var At,$t,zt=n.WeakMap;$t=k(zt)&&/native code/.test(Dt(zt));var qt,Yt=rt("keys");qt=function(t){return Yt[t]||(Yt[t]=lt(t))};var Bt={};Bt={};var Jt,Ut,Wt,Ht=n.TypeError,Kt=n.WeakMap;if($t||ot.state){var Vt=ot.state||(ot.state=new Kt),Xt=m(Vt.get),Qt=m(Vt.has),Zt=m(Vt.set);Jt=function(t,e){if(Qt(Vt,t))throw new Ht("Object already initialized");return e.facade=t,Zt(Vt,t,e),e},Ut=function(t){return Xt(Vt,t)||{}},Wt=function(t){return Qt(Vt,t)}}else{var te=qt("state");Bt[te]=!0,Jt=function(t,e){if(ut(t,te))throw new Ht("Object already initialized");return e.facade=t,Tt(t,te,e),e},Ut=function(t){return ut(t,te)?t[te]:{}},Wt=function(t){return ut(t,te)}}At={set:Jt,get:Ut,has:Wt,enforce:function(t){return Wt(t)?Ut(t):Jt(t,{})},getterFor:function(t){return function(e){var r;if(!I(e)||(r=Ut(e)).type!==t)throw Ht("Incompatible receiver, "+t+" required");return r}}};var ee=Function.prototype,re=i&&Object.getOwnPropertyDescriptor,ne=ut(ee,"name"),oe={EXISTS:ne,PROPER:ne&&"something"===function(){}.name,CONFIGURABLE:ne&&(!i||i&&re(ee,"name").configurable)}.CONFIGURABLE,ie=At.get,ae=At.enforce,ce=String(String).split("String");(Gt=function(t,e,r,o){var i,a=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet,f=o&&void 0!==o.name?o.name:e;k(r)&&("Symbol("===String(f).slice(0,7)&&(f="["+String(f).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ut(r,"name")||oe&&r.name!==f)&&Tt(r,"name",f),(i=ae(r)).source||(i.source=ce.join("string"==typeof f?f:""))),t!==n?(a?!u&&t[e]&&(c=!0):delete t[e],c?t[e]=r:Tt(t,e,r)):c?t[e]=r:nt(e,r)})(Function.prototype,"toString",(function(){return k(this)&&ie(this).source||Dt(this)}));var ue,fe,se,le,pe,he={},ve=Math.ceil,ye=Math.floor;pe=function(t){var e=+t;return e!=e||0===e?0:(e>0?ye:ve)(e)};var de=Math.max,ge=Math.min;le=function(t,e){var r=pe(t);return r<0?de(r+e,0):ge(r,e)};var me,be,we=Math.min;be=function(t){return t>0?we(pe(t),9007199254740991):0},me=function(t){return be(t.length)};var Oe=function(t){return function(e,r,n){var o,i=y(e),a=me(i),c=le(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},je={includes:Oe(!0),indexOf:Oe(!1)}.indexOf,Ee=m([].push);se=function(t,e){var r,n=y(t),o=0,i=[];for(r in n)!ut(Bt,r)&&ut(n,r)&&Ee(i,r);for(;e.length>o;)ut(n,r=e[o++])&&(~je(i,r)||Ee(i,r));return i};var Se,Le=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");fe=Object.getOwnPropertyNames||function(t){return se(t,Le)},Se=Object.getOwnPropertySymbols;var xe=m([].concat);he=M("Reflect","ownKeys")||function(t){var e=fe(Ft(t));return Se?xe(e,Se(t)):e},ue=function(t,r,n){for(var o=he(r),i=Lt,a=e,c=0;c<o.length;c++){var u=o[c];ut(t,u)||n&&ut(n,u)||i(t,u,a(r,u))}};var _e={},Pe=/#|\.prototype\./,Te=function(t,e){var r=Ie[Fe(t)];return r==Me||r!=ke&&(k(e)?a(e):!!e)},Fe=Te.normalize=function(t){return String(t).replace(Pe,".").toLowerCase()},Ie=Te.data={},ke=Te.NATIVE="N",Me=Te.POLYFILL="P";_e=Te,t=function(t,e){var r,o,i,a,c,u=t.target,f=t.global,s=t.stat;if(r=f?n:s?n[u]||nt(u,{}):(n[u]||{}).prototype)for(o in e){if(a=e[o],i=t.noTargetGet?(c=Pt(r,o))&&c.value:r[o],!_e(f?o:u+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;ue(a,i)}(t.sham||i&&i.sham)&&Tt(a,"sham",!0),Gt(r,o,a,t)}};var Ne,Ce={},Ge=Function.prototype,De=Ge.apply,Re=Ge.call;Ce="object"==typeof Reflect&&Reflect.apply||(c?Re.bind(De):function(){return Re.apply(De,arguments)});var Ae,$e=m(m.bind);Ae=function(t,e){return K(t),void 0===e?t:c?$e(t,e):function(){return t.apply(e,arguments)}};var ze={};ze=M("document","documentElement");var qe={};qe=m([].slice);var Ye;Ye=/(?:ipad|iphone|ipod).*applewebkit/i.test($);var Be;Be="process"==d(n.process);var Je,Ue,We,He,Ke=n.setImmediate,Ve=n.clearImmediate,Xe=n.process,Qe=n.Dispatch,Ze=n.Function,tr=n.MessageChannel,er=n.String,rr=0,nr={};try{Je=n.location}catch(t){}var or=function(t){if(ut(nr,t)){var e=nr[t];delete nr[t],e()}},ir=function(t){return function(){or(t)}},ar=function(t){or(t.data)},cr=function(t){n.postMessage(er(t),Je.protocol+"//"+Je.host)};Ke&&Ve||(Ke=function(t){var e=qe(arguments,1);return nr[++rr]=function(){Ce(k(t)?t:Ze(t),void 0,e)},Ue(rr),rr},Ve=function(t){delete nr[t]},Be?Ue=function(t){Xe.nextTick(ir(t))}:Qe&&Qe.now?Ue=function(t){Qe.now(ir(t))}:tr&&!Ye?(He=(We=new tr).port2,We.port1.onmessage=ar,Ue=Ae(He.postMessage,He)):n.addEventListener&&k(n.postMessage)&&!n.importScripts&&Je&&"file:"!==Je.protocol&&!a(cr)?(Ue=cr,n.addEventListener("message",ar,!1)):Ue="onreadystatechange"in jt("script")?function(t){ze.appendChild(jt("script")).onreadystatechange=function(){ze.removeChild(this),or(t)}}:function(t){setTimeout(ir(t),0)}),Ne={set:Ke,clear:Ve},t({global:!0,bind:!0,enumerable:!0,forced:!n.setImmediate||!n.clearImmediate},{setImmediate:Ne.set,clearImmediate:Ne.clear});var ur=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?v:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",y={};function d(){}function g(){}function m(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(T([])));O&&O!==r&&n.call(O,i)&&(b=O);var j=m.prototype=d.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=m,u(j,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),u(j,c,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}({});try{regeneratorRuntime=ur}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=ur:Function("r","regeneratorRuntime = r")(ur)}var fr=t=>{let e=new Date(t);return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()};const sr=document.getElementsByClassName("row quote-list");(async function(){let t=await fetch("https://wordpress.altos.dev/wp-json/wp/v2/posts?_embed");return await t.json()})().then((t=>{let e=[];return t.forEach((t=>{let r={id:t.id,title:t.title.rendered,content:t.content.rendered,excerpt:t.excerpt.rendered,date:fr(t.date),category:t._embedded["wp:term"][0][0].name,img_attachment:t._embedded["wp:featuredmedia"][0].source_url};console.log(r),e.push(r)})),e})).then((t=>{t.forEach((t=>{var e;e=t,sr[0].innerHTML+=`\n  <article id="q-${e.id}" class="quote quote-${e.id} box-1-1 box-md-1-2">\n    <div class="inner">\n      <header class="img-container">\n        <img src="${e.img_attachment}">\n      </header>\n      <div class="post-content">\n        <h2 class="blog-post-title">${e.title}</h2>\n        <div class="blog-post-meta">\n          <span class="meta-date">${e.date} | </span>\n          <span class="meta-category">${e.category}</span>\n        </div>\n        <p class="blog-post-excerpt">${e.excerpt}</p>\n      </div>\n    </div>\n  </article>\n  `}))}));
//# sourceMappingURL=index.abbc513e.js.map