!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){t.exports=n(57)},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(22)("wks"),o=n(23),i=n(3).Symbol;t.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)("Symbol."+t))}},function(t,e,n){var r=n(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(3),o=n(2),i=n(8),u="prototype",a=function(t,e,n){var s,c,l,f=t&a.F,p=t&a.G,d=t&a.S,h=t&a.P,m=t&a.B,v=t&a.W,y=p?o:o[e]||(o[e]={}),g=p?r:d?r[e]:(r[e]||{})[u];p&&(n=e);for(s in n)c=!f&&g&&s in g,c&&s in y||(l=c?g[s]:n[s],y[s]=p&&"function"!=typeof g[s]?n[s]:m&&c?i(l,r):v&&g[s]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((y[u]||(y[u]={}))[s]=l))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(43),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1).setDesc,o=n(14),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(1),o=n(15);t.exports=n(10)?function(t,e,n){return r.setDesc(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(18)},function(t,e,n){var r=n(3),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(29),i=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){var r=n(1).getDesc,o=n(12),i=n(5),u=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(8)(Function.call,r(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:u}},function(t,e){},function(t,e,n){t.exports={"default":n(36),__esModule:!0}},function(t,e,n){t.exports={"default":n(37),__esModule:!0}},function(t,e,n){t.exports={"default":n(38),__esModule:!0}},function(t,e,n){t.exports={"default":n(39),__esModule:!0}},function(t,e,n){t.exports={"default":n(40),__esModule:!0}},function(t,e,n){"use strict";var r=n(28)["default"],o=n(31)["default"];e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=r(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o?o(t,e):t.__proto__=e)},e.__esModule=!0},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(35),i=r(o);e["default"]=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,i["default"])(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";var r=n(32)["default"];e["default"]=function(t){return t&&t.constructor===r?"symbol":typeof t},e.__esModule=!0},function(t,e,n){var r=n(1);t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(1);t.exports=function(t,e,n){return r.setDesc(t,e,n)}},function(t,e,n){n(48),t.exports=n(2).Object.getPrototypeOf},function(t,e,n){n(49),t.exports=n(2).Object.setPrototypeOf},function(t,e,n){n(50),n(27),t.exports=n(2).Symbol},function(t,e,n){var r=n(1);t.exports=function(t){var e=r.getKeys(t),n=r.getSymbols;if(n)for(var o,i=n(t),u=r.isEnum,a=0;i.length>a;)u.call(t,o=i[a++])&&e.push(o);return e}},function(t,e,n){var r=n(9),o=n(1).getNames,i={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.get=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(7);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1),o=n(9);t.exports=function(t,e){for(var n,i=o(t),u=r.getKeys(i),a=u.length,s=0;a>s;)if(i[n=u[s++]]===e)return n}},function(t,e,n){var r=n(6),o=n(2),i=n(11);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(47);n(46)("getPrototypeOf",function(t){return function(e){return t(r(e))}})},function(t,e,n){var r=n(6);r(r.S,"Object",{setPrototypeOf:n(26).set})},function(t,e,n){"use strict";var r=n(1),o=n(3),i=n(14),u=n(10),a=n(6),s=n(21),c=n(11),l=n(22),f=n(16),p=n(23),d=n(4),h=n(45),m=n(42),v=n(41),y=n(44),g=n(5),b=n(9),x=n(15),w=r.getDesc,_=r.setDesc,S=r.create,P=m.get,E=o.Symbol,j=o.JSON,O=j&&j.stringify,k=!1,N=d("_hidden"),M=r.isEnum,R=l("symbol-registry"),T=l("symbols"),F="function"==typeof E,C=Object.prototype,D=u&&c(function(){return 7!=S(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=w(C,e);r&&delete C[e],_(t,e,n),r&&t!==C&&_(C,e,r)}:_,A=function(t){var e=T[t]=S(E.prototype);return e._k=t,u&&k&&D(C,t,{configurable:!0,set:function(e){i(this,N)&&i(this[N],t)&&(this[N][t]=!1),D(this,t,x(1,e))}}),e},B=function(t){return"symbol"==typeof t},q=function(t,e,n){return n&&i(T,e)?(n.enumerable?(i(t,N)&&t[N][e]&&(t[N][e]=!1),n=S(n,{enumerable:x(0,!1)})):(i(t,N)||_(t,N,x(1,{})),t[N][e]=!0),D(t,e,n)):_(t,e,n)},I=function(t,e){g(t);for(var n,r=v(e=b(e)),o=0,i=r.length;i>o;)q(t,n=r[o++],e[n]);return t},W=function(t,e){return void 0===e?S(t):I(S(t),e)},J=function(t){var e=M.call(this,t);return!(e||!i(this,t)||!i(T,t)||i(this,N)&&this[N][t])||e},U=function(t,e){var n=w(t=b(t),e);return!n||!i(T,e)||i(t,N)&&t[N][e]||(n.enumerable=!0),n},K=function(t){for(var e,n=P(b(t)),r=[],o=0;n.length>o;)i(T,e=n[o++])||e==N||r.push(e);return r},G=function(t){for(var e,n=P(b(t)),r=[],o=0;n.length>o;)i(T,e=n[o++])&&r.push(T[e]);return r},L=function(t){if(void 0!==t&&!B(t)){for(var e,n,r=[t],o=1,i=arguments;i.length>o;)r.push(i[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&y(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,O.apply(j,r)}},H=c(function(){var t=E();return"[null]"!=O([t])||"{}"!=O({a:t})||"{}"!=O(Object(t))});F||(E=function(){if(B(this))throw TypeError("Symbol is not a constructor");return A(p(arguments.length>0?arguments[0]:void 0))},s(E.prototype,"toString",function(){return this._k}),B=function(t){return t instanceof E},r.create=W,r.isEnum=J,r.getDesc=U,r.setDesc=q,r.setDescs=I,r.getNames=m.get=K,r.getSymbols=G,u&&!n(20)&&s(C,"propertyIsEnumerable",J,!0));var z={"for":function(t){return i(R,t+="")?R[t]:R[t]=E(t)},keyFor:function(t){return h(R,t)},useSetter:function(){k=!0},useSimple:function(){k=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=d(t);z[t]=F?e:A(e)}),k=!0,a(a.G+a.W,{Symbol:E}),a(a.S,"Symbol",z),a(a.S+a.F*!F,"Object",{create:W,defineProperty:q,defineProperties:I,getOwnPropertyDescriptor:U,getOwnPropertyNames:K,getOwnPropertySymbols:G}),j&&a(a.S+a.F*(!F||H),"JSON",{stringify:L}),f(E,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){t.exports={"default":n(60),__esModule:!0}},function(t,e,n){var r=n(7),o=n(4)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=(e=Object(t))[o])?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){"use strict";var r=n(20),o=n(6),i=n(21),u=n(18),a=n(14),s=n(19),c=n(68),l=n(16),f=n(1).getProto,p=n(4)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",m="keys",v="values",y=function(){return this};t.exports=function(t,e,n,g,b,x,w){c(n,e,g);var _,S,P=function(t){if(!d&&t in k)return k[t];switch(t){case m:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",j=b==v,O=!1,k=t.prototype,N=k[p]||k[h]||b&&k[b],M=N||P(b);if(N){var R=f(M.call(new t));l(R,E,!0),!r&&a(k,h)&&u(R,p,y),j&&N.name!==v&&(O=!0,M=function(){return N.call(this)})}if(r&&!w||!d&&!O&&k[p]||u(k,p,M),s[e]=M,s[E]=y,b)if(_={values:j?M:P(v),keys:x?M:P(m),entries:j?P("entries"):M},w)for(S in _)S in k||i(k,S,_[S]);else o(o.P+o.F*(d||O),e,_);return _}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(58),o=t(r),i=n(51),u=t(i),a=n(24),s=t(a),c=n(25),l=t(c),f=function(){function t(){(0,s["default"])(this,t),this.domain=""}return(0,l["default"])(t,[{key:"compareCommits",value:function(t){var e=this,n=t.owner||null,r=t.repo||null,i=t.base||"live",a=t.head||"master";return new u["default"](function(t,u){var s=e.domain+"/github/repos/"+n+"/"+r+"/compare/"+i+"/"+a,c={user:window.userStore.getUser()};return fetch(s,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"post",body:(0,o["default"])(c)}).then(function(t){return t.json()}).then(function(e){return t(e)})["catch"](function(t){return{}})})}},{key:"merge",value:function(t){var e=this,n=t.owner||null,r=t.repo||null;return new u["default"](function(i,u){var a=e.domain+"/github/repos/"+n+"/"+r+"/merges",s={user:window.userStore.getUser(),options:{head:t.head||"master",base:t.base||"live"}};return fetch(a,{headers:{accept:"application/json","content-type":"application/json"},method:"post",body:(0,o["default"])(s)}).then(function(t){return t.json()}).then(function(t){return i(t)})["catch"](function(t){return{}})})}},{key:"getPullRequest",value:function(t){var e=this,n=t.owner||null,r=t.repo||null;return new u["default"](function(i,u){var a=e.domain+"/github/repos/"+n+"/"+r+"/pulls/get",s={user:window.userStore.getUser(),options:{head:t.head||"master",base:t.base||"live"}};return fetch(a,{headers:{accept:"application/json","content-type":"application/json"},method:"post",body:(0,o["default"])(s)}).then(function(t){return t.json()}).then(function(t){return i(t)})["catch"](function(t){return{}})})}},{key:"createPullRequest",value:function(t){var e=this,n=t.owner||null,r=t.repo||null;return new u["default"](function(i,u){var a=e.domain+"/github/repos/"+n+"/"+r+"/pulls/create",s={user:window.userStore.getUser(),options:{title:t.title?"OPS protal: "+t.title:"OPS portal",head:t.head||"master",base:t.base||"live"}};return fetch(a,{headers:{accept:"application/json","content-type":"application/json"},method:"post",body:(0,o["default"])(s)}).then(function(t){return t.json()}).then(function(t){return i(t)})["catch"](function(t){return{}})})}},{key:"updatePullRequest",value:function(t){var e=this,n=t.owner||null,r=t.repo||null,i=t.number||0;return new u["default"](function(u,a){var s=e.domain+"/github/repos/"+n+"/"+r+"/pulls/"+i+"/update",c={user:window.userStore.getUser(),options:{title:t.title?"OPS protal: "+t.title:"OPS portal"}};return fetch(s,{headers:{accept:"application/json","content-type":"application/json"},method:"post",body:(0,o["default"])(c)}).then(function(t){return t.json()}).then(function(t){return u(t)})["catch"](function(t){return{}})})}}]),t}();e["default"]=new f}).call(this)}finally{}},,function(t,e,n){try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(51),o=t(r),i=n(30),u=t(i),a=n(24),s=t(a),c=n(25),l=t(c),f=n(34),p=t(f),d=n(33),h=t(d),m=n(85),v=t(m),y=n(55),g=t(y),b=function(t){function e(t){(0,s["default"])(this,e);var n=(0,p["default"])(this,(e.__proto__||(0,u["default"])(e)).call(this,t));return n.state={details:[],push:!1,processing:!0},n.rows=[],n.selectedIndexes=[],n.message={button:{withPush:"Release with pushing directly",withouthPush:"Release with pull request"}},n.notificationSystem=null,n.selectRowProp={mode:"checkbox",clickToSelect:!0,bgColor:"rgba(37, 139, 212, 0.26)"},n}return(0,h["default"])(e,t),(0,l["default"])(e,[{key:"componentWillMount",value:function(){this.refresh(this.props.context.repos)}},{key:"componentDidMount",value:function(){this.notificationSystem=this.refs.notificationSystem}},{key:"componentWillReceiveProps",value:function(t){if(t.context.docset===this.props.context.docset&&t.context.repos.length===this.props.context.repos.length){for(var e=!0,n=0;n<t.context.repos.length;++n)if(this.props.context.repos.findIndex(function(e){return e.name===t.context.repos[n].name})<0){e=!1;break}if(e)return}this.refresh(t.context.repos)}},{key:"componentWillUpdate",value:function(t,e){var n=this;e.details.findIndex(function(t){return t.refresh})>=0&&(this.rows=[],this.selectedIndexes=[],e.details.forEach(function(t){n.rows.push({locale:t.repo.locale,repository:{name:t.repo.name,url:t.repo.git_repo_url,detail:t.repo},account:t.repo.account,diff:{status:t.diff.status,url:t.diff.html_url,files:t.diff.files},pullRequest:t.pull})}))}},{key:"compareCommits",value:function(t){return g["default"].compareCommits({owner:t.account,repo:t.name,head:this.props.fromBranch,base:this.props.toBranch}).then(function(t){return t})}},{key:"getPullRequest",value:function(t){return g["default"].getPullRequest({owner:t.account,repo:t.name,head:this.props.fromBranch,base:this.props.toBranch}).then(function(t){return t})}},{key:"refresh",value:function(t){var e=this,n=!(arguments.length<=1||void 0===arguments[1])&&arguments[1];this.setState({processing:!0});var r=[];o["default"].all(t.map(function(t){var o={},i=e.state.details.findIndex(function(e){return e.name===t.name});return i>=0&&(o=e.state.details[i],o.refresh=!1),n||!o.name?(o.refresh=!0,o.name=t.name,o.repo=t,e.compareCommits(t).then(function(n){return o.diff=n,e.getPullRequest(t).then(function(t){t.length>0?o.pull=t[0]:o.pull=null,r.push(o)})})):void r.push(o)})).then(function(){this.setState({details:r,processing:!1})}.bind(this))}},{key:"merge",value:function(){var t=this;this.setState({processing:!0}),o["default"].all(this.state.details.map(function(e){var n=(e.name,e.repo),r=(e.diff,e.pull);if(t.refs.table.state.selectedRowKeys.includes(n.locale))return t.state.push?g["default"].merge({owner:n.account,repo:n.name,head:t.props.fromBranch,base:t.props.toBranch}):t.getPullRequest(n).then(function(){return r?g["default"].updatePullRequest({owner:n.account,repo:n.name,number:r.number,title:"Release from "+t.props.fromBranch+" to "+t.props.toBranch}):g["default"].createPullRequest({owner:n.account,repo:n.name,title:"Release from "+t.props.fromBranch+" to "+t.props.toBranch,head:t.props.fromBranch,base:t.props.toBranch})})})).then(function(){this.refresh(this.props.context.repos,!0),this.addNotification({title:"Release action is completed",message:"Please wait for updates in the table",level:"success",position:"br",autoDismiss:10})}.bind(this))}},{key:"addNotification",value:function(t){this.notificationSystem.addNotification({title:t.title,message:t.message,level:t.level,position:t.position,autoDismiss:t.autoDismiss})}},{key:"repositoryCellFormat",value:function(t,e){return v["default"].createElement("a",{href:t.url,target:"_blank"},t.name)}},{key:"statusCellFormat",value:function(t,e){return v["default"].createElement("a",{href:t.url,target:"_blank"},t.name)}},{key:"diffCellFormat",value:function(t,e){return v["default"].createElement("a",{href:t.url,target:"_blank"},t.files.length," ",1===t.files.length?"file":"files")}},{key:"pullRequestCellFormat",value:function(t,e){return t?v["default"].createElement("a",{href:t.html_url,target:"_blank"},t.title):v["default"].createElement("div",null,"not created")}},{key:"render",value:function(){var t=this,e=n(86),r=e.TableHeaderColumn,o=e.BootstrapTable;return v["default"].createElement("section",{className:"content"},v["default"].createElement("div",{className:"box box-default"},v["default"].createElement("div",{className:"box-header with-border"},v["default"].createElement("h3",{className:"box-title"},"Release from master to live"),v["default"].createElement("div",{className:"box-tools pull-right"},v["default"].createElement("button",{className:"btn btn-box-tool","data-widget":"collapse"},v["default"].createElement("i",{className:"fa fa-minus"})))),v["default"].createElement("div",{className:"box-body"},v["default"].createElement(o,{data:this.rows,selectRow:this.selectRowProp,search:!0,searchPlaceholder:"Search locale",hover:!0,striped:!0,condensed:!0,ref:"table"},v["default"].createElement(r,{dataField:"locale",isKey:!0,dataSort:!0},"Locale"),v["default"].createElement(r,{dataField:"repository",dataFormat:this.repositoryCellFormat},"Repository"),v["default"].createElement(r,{dataField:"account"},"Account"),v["default"].createElement(r,{dataField:"diff",dataFormat:this.diffCellFormat},"Different files"),v["default"].createElement(r,{dataField:"pullRequest",dataFormat:this.pullRequestCellFormat},"Merge pull request")),v["default"].createElement("div",{className:"btn-group",style:{margin:"5px 5px","float":"right"}},v["default"].createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return t.merge()}},this.state.push?this.message.button.withPush:this.message.button.withouthPush),v["default"].createElement("button",{type:"button",className:"btn btn-default dropdown-toggle","data-toggle":"dropdown"},v["default"].createElement("span",{className:"caret"})),v["default"].createElement("ul",{className:"dropdown-menu",role:"menu"},v["default"].createElement("li",null,v["default"].createElement("a",{onClick:function(){return t.setState({push:!1})}},this.message.button.withouthPush)),v["default"].createElement("li",null,v["default"].createElement("a",{onClick:function(){return t.setState({push:!0})}},this.message.button.withPush)))),v["default"].createElement("div",{className:"btn-group",style:{margin:"5px 5px","float":"right"}},v["default"].createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return t.refresh(t.props.context.repos,!0)}},"Refresh table"))),v["default"].createElement("div",{className:"box-footer"},v["default"].createElement("div",null,v["default"].createElement(NotificationSystem,{ref:"notificationSystem"}))),this.state.processing?v["default"].createElement("div",{className:"overlay"},v["default"].createElement("i",{className:"fa fa-refresh fa-spin"})):null))}}]),e}(v["default"].Component);e["default"]=b,b.propTypes={context:v["default"].PropTypes.object.isRequired,fromBranch:v["default"].PropTypes.string,toBranch:v["default"].PropTypes.string},b.defaultProps={fromBranch:"master",toBranch:"live"},window.pluginActions.register("DOCSET_PAGE","Release",b)}).call(this)}finally{}},function(t,e,n){t.exports={"default":n(59),__esModule:!0}},function(t,e,n){var r=n(2);t.exports=function(t){return(r.JSON&&r.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},function(t,e,n){n(27),n(83),n(84),n(82),t.exports=n(2).Promise},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(12),o=n(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(8),o=n(67),i=n(66),u=n(5),a=n(79),s=n(80);t.exports=function(t,e,n,c){var l,f,p,d=s(t),h=r(n,c,e?2:1),m=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(i(d))for(l=a(t.length);l>m;m++)e?h(u(f=t[m])[0],f[1]):h(t[m]);else for(p=d.call(t);!(f=p.next()).done;)o(p,h,f.value,e)}},function(t,e,n){t.exports=n(3).document&&document.documentElement},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(19),o=n(4)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(i){var u=t["return"];throw void 0!==u&&r(u.call(t)),i}}},function(t,e,n){"use strict";var r=n(1),o=n(15),i=n(16),u={};n(18)(u,n(4)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r.create(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(u){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(a){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r,o,i,u=n(3),a=n(78).set,s=u.MutationObserver||u.WebKitMutationObserver,c=u.process,l=u.Promise,f="process"==n(7)(c),p=function(){var t,e,n;for(f&&(t=c.domain)&&(c.domain=null,t.exit());r;)e=r.domain,n=r.fn,e&&e.enter(),n(),e&&e.exit(),r=r.next;o=void 0,t&&t.enter()};if(f)i=function(){c.nextTick(p)};else if(s){var d=1,h=document.createTextNode("");new s(p).observe(h,{characterData:!0}),i=function(){h.data=d=-d}}else i=l&&l.resolve?function(){l.resolve().then(p)}:function(){a.call(u,p)};t.exports=function(t){var e={fn:t,next:void 0,domain:f&&c.domain};o&&(o.next=e),r||(r=e,i()),o=e}},function(t,e,n){var r=n(21);t.exports=function(t,e){for(var n in e)r(t,n,e[n]);return t}},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var r=n(2),o=n(1),i=n(10),u=n(4)("species");t.exports=function(t){var e=r[t];i&&e&&!e[u]&&o.setDesc(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(5),o=n(17),i=n(4)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError(n+": use the 'new' operator!");return t}},function(t,e,n){var r=n(54),o=n(13);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),s=r(n),c=a.length;return s<0||s>=c?t?"":void 0:(i=a.charCodeAt(s),i<55296||i>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):i:t?a.slice(s,s+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r,o,i,u=n(8),a=n(65),s=n(64),c=n(62),l=n(3),f=l.process,p=l.setImmediate,d=l.clearImmediate,h=l.MessageChannel,m=0,v={},y="onreadystatechange",g=function(){var t=+this;if(v.hasOwnProperty(t)){var e=v[t];delete v[t],e()}},b=function(t){g.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return v[++m]=function(){a("function"==typeof t?t:Function(t),e)},r(m),m},d=function(t){delete v[t]},"process"==n(7)(f)?r=function(t){f.nextTick(u(g,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=b,r=u(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",b,!1)):r=y in c("script")?function(t){s.appendChild(c("script"))[y]=function(){s.removeChild(this),g.call(t)}}:function(t){setTimeout(u(g,t,1),0)}),t.exports={set:p,clear:d}},function(t,e,n){var r=n(54),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(52),o=n(4)("iterator"),i=n(19);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(61),o=n(70),i=n(19),u=n(9);t.exports=n(53)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){"use strict";var r,o=n(1),i=n(20),u=n(3),a=n(8),s=n(52),c=n(6),l=n(12),f=n(5),p=n(17),d=n(76),h=n(63),m=n(26).set,v=n(73),y=n(4)("species"),g=n(75),b=n(71),x="Promise",w=u.process,_="process"==s(w),S=u[x],P=function(){},E=function(t){var e,n=new S(P);return t&&(n.constructor=function(t){t(P,P)}),(e=S.resolve(n))["catch"](P),e===n},j=function(){function t(e){var n=new S(e);return m(n,t.prototype),n}var e=!1;try{if(e=S&&S.resolve&&E(),m(t,S),t.prototype=o.create(S.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(e=!1),e&&n(10)){var r=!1;S.resolve(o.setDesc({},"then",{get:function(){r=!0}})),e=r}}catch(i){e=!1}return e}(),O=function(t,e){return!(!i||t!==S||e!==r)||v(t,e)},k=function(t){var e=f(t)[y];return void 0!=e?e:t},N=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},M=function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=p(e),this.reject=p(n)},R=function(t){try{t()}catch(e){return{error:e}}},T=function(t,e){if(!t.n){t.n=!0;var n=t.c;b(function(){for(var r=t.v,o=1==t.s,i=0,a=function(e){var n,i,u=o?e.ok:e.fail,a=e.resolve,s=e.reject;try{u?(o||(t.h=!0),n=u===!0?r:u(r),n===e.promise?s(TypeError("Promise-chain cycle")):(i=N(n))?i.call(n,a,s):a(n)):s(r)}catch(c){s(c)}};n.length>i;)a(n[i++]);n.length=0,t.n=!1,e&&setTimeout(function(){var e,n,o=t.p;F(o)&&(_?w.emit("unhandledRejection",r,o):(e=u.onunhandledrejection)?e({promise:o,reason:r}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",r)),t.a=void 0},1)})}},F=function(t){var e,n=t._d,r=n.a||n.c,o=0;if(n.h)return!1;for(;r.length>o;)if(e=r[o++],e.fail||!F(e.promise))return!1;return!0},C=function(t){var e=this;e.d||(e.d=!0,e=e.r||e,e.v=t,e.s=2,e.a=e.c.slice(),T(e,!0))},D=function(t){var e,n=this;if(!n.d){n.d=!0,n=n.r||n;try{if(n.p===t)throw TypeError("Promise can't be resolved itself");(e=N(t))?b(function(){var r={r:n,d:!1};try{e.call(t,a(D,r,1),a(C,r,1))}catch(o){C.call(r,o)}}):(n.v=t,n.s=1,T(n,!1))}catch(r){C.call({r:n,d:!1},r)}}};j||(S=function(t){p(t);var e=this._d={p:d(this,S,x),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{t(a(D,e,1),a(C,e,1))}catch(n){C.call(e,n)}},n(72)(S.prototype,{then:function(t,e){var n=new M(g(this,S)),r=n.promise,o=this._d;return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,o.c.push(n),o.a&&o.a.push(n),o.s&&T(o,!1),r},"catch":function(t){return this.then(void 0,t)}})),c(c.G+c.W+c.F*!j,{Promise:S}),n(16)(S,x),n(74)(x),r=n(2)[x],c(c.S+c.F*!j,x,{reject:function(t){var e=new M(this),n=e.reject;return n(t),e.promise}}),c(c.S+c.F*(!j||E(!0)),x,{resolve:function(t){if(t instanceof S&&O(t.constructor,this))return t;var e=new M(this),n=e.resolve;return n(t),e.promise}}),c(c.S+c.F*!(j&&n(69)(function(t){S.all(t)["catch"](function(){})})),x,{all:function(t){var e=k(this),n=new M(e),r=n.resolve,i=n.reject,u=[],a=R(function(){h(t,!1,u.push,u);var n=u.length,a=Array(n);n?o.each.call(u,function(t,o){var u=!1;e.resolve(t).then(function(t){u||(u=!0,a[o]=t,--n||r(a))},i)}):r(a)});return a&&i(a.error),n.promise},race:function(t){var e=k(this),n=new M(e),r=n.reject,o=R(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o&&r(o.error),n.promise}})},function(t,e,n){"use strict";var r=n(77)(!0);n(53)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(81);var r=n(19);r.NodeList=r.HTMLCollection=r.Array},function(t,e){t.exports=React},function(t,e){t.exports=ReactBsTable}]);