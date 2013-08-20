/*! tulip - v0.1.1 - 2013-08-20
 * https://github.com/MinnPost/tulip
 * Copyright (c) 2013 Alan Palazzolo; Licensed MIT
 */

//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);
//# sourceMappingURL=underscore-min.map;

/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
;

(function(){var root=this;var previousBackbone=root.Backbone;var array=[];var push=array.push;var slice=array.slice;var splice=array.splice;var Backbone;if(typeof exports!=="undefined"){Backbone=exports}else{Backbone=root.Backbone={}}Backbone.VERSION="1.0.0";var _=root._;if(!_&&typeof require!=="undefined")_=require("underscore");Backbone.$=root.jQuery||root.Zepto||root.ender||root.$;Backbone.noConflict=function(){root.Backbone=previousBackbone;return this};Backbone.emulateHTTP=false;Backbone.emulateJSON=false;var Events=Backbone.Events={on:function(name,callback,context){if(!eventsApi(this,"on",name,[callback,context])||!callback)return this;this._events||(this._events={});var events=this._events[name]||(this._events[name]=[]);events.push({callback:callback,context:context,ctx:context||this});return this},once:function(name,callback,context){if(!eventsApi(this,"once",name,[callback,context])||!callback)return this;var self=this;var once=_.once(function(){self.off(name,once);callback.apply(this,arguments)});once._callback=callback;return this.on(name,once,context)},off:function(name,callback,context){var retain,ev,events,names,i,l,j,k;if(!this._events||!eventsApi(this,"off",name,[callback,context]))return this;if(!name&&!callback&&!context){this._events={};return this}names=name?[name]:_.keys(this._events);for(i=0,l=names.length;i<l;i++){name=names[i];if(events=this._events[name]){this._events[name]=retain=[];if(callback||context){for(j=0,k=events.length;j<k;j++){ev=events[j];if(callback&&callback!==ev.callback&&callback!==ev.callback._callback||context&&context!==ev.context){retain.push(ev)}}}if(!retain.length)delete this._events[name]}}return this},trigger:function(name){if(!this._events)return this;var args=slice.call(arguments,1);if(!eventsApi(this,"trigger",name,args))return this;var events=this._events[name];var allEvents=this._events.all;if(events)triggerEvents(events,args);if(allEvents)triggerEvents(allEvents,arguments);return this},stopListening:function(obj,name,callback){var listeners=this._listeners;if(!listeners)return this;var deleteListener=!name&&!callback;if(typeof name==="object")callback=this;if(obj)(listeners={})[obj._listenerId]=obj;for(var id in listeners){listeners[id].off(name,callback,this);if(deleteListener)delete this._listeners[id]}return this}};var eventSplitter=/\s+/;var eventsApi=function(obj,action,name,rest){if(!name)return true;if(typeof name==="object"){for(var key in name){obj[action].apply(obj,[key,name[key]].concat(rest))}return false}if(eventSplitter.test(name)){var names=name.split(eventSplitter);for(var i=0,l=names.length;i<l;i++){obj[action].apply(obj,[names[i]].concat(rest))}return false}return true};var triggerEvents=function(events,args){var ev,i=-1,l=events.length,a1=args[0],a2=args[1],a3=args[2];switch(args.length){case 0:while(++i<l)(ev=events[i]).callback.call(ev.ctx);return;case 1:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1);return;case 2:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2);return;case 3:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2,a3);return;default:while(++i<l)(ev=events[i]).callback.apply(ev.ctx,args)}};var listenMethods={listenTo:"on",listenToOnce:"once"};_.each(listenMethods,function(implementation,method){Events[method]=function(obj,name,callback){var listeners=this._listeners||(this._listeners={});var id=obj._listenerId||(obj._listenerId=_.uniqueId("l"));listeners[id]=obj;if(typeof name==="object")callback=this;obj[implementation](name,callback,this);return this}});Events.bind=Events.on;Events.unbind=Events.off;_.extend(Backbone,Events);var Model=Backbone.Model=function(attributes,options){var defaults;var attrs=attributes||{};options||(options={});this.cid=_.uniqueId("c");this.attributes={};_.extend(this,_.pick(options,modelOptions));if(options.parse)attrs=this.parse(attrs,options)||{};if(defaults=_.result(this,"defaults")){attrs=_.defaults({},attrs,defaults)}this.set(attrs,options);this.changed={};this.initialize.apply(this,arguments)};var modelOptions=["url","urlRoot","collection"];_.extend(Model.prototype,Events,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(options){return _.clone(this.attributes)},sync:function(){return Backbone.sync.apply(this,arguments)},get:function(attr){return this.attributes[attr]},escape:function(attr){return _.escape(this.get(attr))},has:function(attr){return this.get(attr)!=null},set:function(key,val,options){var attr,attrs,unset,changes,silent,changing,prev,current;if(key==null)return this;if(typeof key==="object"){attrs=key;options=val}else{(attrs={})[key]=val}options||(options={});if(!this._validate(attrs,options))return false;unset=options.unset;silent=options.silent;changes=[];changing=this._changing;this._changing=true;if(!changing){this._previousAttributes=_.clone(this.attributes);this.changed={}}current=this.attributes,prev=this._previousAttributes;if(this.idAttribute in attrs)this.id=attrs[this.idAttribute];for(attr in attrs){val=attrs[attr];if(!_.isEqual(current[attr],val))changes.push(attr);if(!_.isEqual(prev[attr],val)){this.changed[attr]=val}else{delete this.changed[attr]}unset?delete current[attr]:current[attr]=val}if(!silent){if(changes.length)this._pending=true;for(var i=0,l=changes.length;i<l;i++){this.trigger("change:"+changes[i],this,current[changes[i]],options)}}if(changing)return this;if(!silent){while(this._pending){this._pending=false;this.trigger("change",this,options)}}this._pending=false;this._changing=false;return this},unset:function(attr,options){return this.set(attr,void 0,_.extend({},options,{unset:true}))},clear:function(options){var attrs={};for(var key in this.attributes)attrs[key]=void 0;return this.set(attrs,_.extend({},options,{unset:true}))},hasChanged:function(attr){if(attr==null)return!_.isEmpty(this.changed);return _.has(this.changed,attr)},changedAttributes:function(diff){if(!diff)return this.hasChanged()?_.clone(this.changed):false;var val,changed=false;var old=this._changing?this._previousAttributes:this.attributes;for(var attr in diff){if(_.isEqual(old[attr],val=diff[attr]))continue;(changed||(changed={}))[attr]=val}return changed},previous:function(attr){if(attr==null||!this._previousAttributes)return null;return this._previousAttributes[attr]},previousAttributes:function(){return _.clone(this._previousAttributes)},fetch:function(options){options=options?_.clone(options):{};if(options.parse===void 0)options.parse=true;var model=this;var success=options.success;options.success=function(resp){if(!model.set(model.parse(resp,options),options))return false;if(success)success(model,resp,options);model.trigger("sync",model,resp,options)};wrapError(this,options);return this.sync("read",this,options)},save:function(key,val,options){var attrs,method,xhr,attributes=this.attributes;if(key==null||typeof key==="object"){attrs=key;options=val}else{(attrs={})[key]=val}if(attrs&&(!options||!options.wait)&&!this.set(attrs,options))return false;options=_.extend({validate:true},options);if(!this._validate(attrs,options))return false;if(attrs&&options.wait){this.attributes=_.extend({},attributes,attrs)}if(options.parse===void 0)options.parse=true;var model=this;var success=options.success;options.success=function(resp){model.attributes=attributes;var serverAttrs=model.parse(resp,options);if(options.wait)serverAttrs=_.extend(attrs||{},serverAttrs);if(_.isObject(serverAttrs)&&!model.set(serverAttrs,options)){return false}if(success)success(model,resp,options);model.trigger("sync",model,resp,options)};wrapError(this,options);method=this.isNew()?"create":options.patch?"patch":"update";if(method==="patch")options.attrs=attrs;xhr=this.sync(method,this,options);if(attrs&&options.wait)this.attributes=attributes;return xhr},destroy:function(options){options=options?_.clone(options):{};var model=this;var success=options.success;var destroy=function(){model.trigger("destroy",model,model.collection,options)};options.success=function(resp){if(options.wait||model.isNew())destroy();if(success)success(model,resp,options);if(!model.isNew())model.trigger("sync",model,resp,options)};if(this.isNew()){options.success();return false}wrapError(this,options);var xhr=this.sync("delete",this,options);if(!options.wait)destroy();return xhr},url:function(){var base=_.result(this,"urlRoot")||_.result(this.collection,"url")||urlError();if(this.isNew())return base;return base+(base.charAt(base.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(resp,options){return resp},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(options){return this._validate({},_.extend(options||{},{validate:true}))},_validate:function(attrs,options){if(!options.validate||!this.validate)return true;attrs=_.extend({},this.attributes,attrs);var error=this.validationError=this.validate(attrs,options)||null;if(!error)return true;this.trigger("invalid",this,error,_.extend(options||{},{validationError:error}));return false}});var modelMethods=["keys","values","pairs","invert","pick","omit"];_.each(modelMethods,function(method){Model.prototype[method]=function(){var args=slice.call(arguments);args.unshift(this.attributes);return _[method].apply(_,args)}});var Collection=Backbone.Collection=function(models,options){options||(options={});if(options.url)this.url=options.url;if(options.model)this.model=options.model;if(options.comparator!==void 0)this.comparator=options.comparator;this._reset();this.initialize.apply(this,arguments);if(models)this.reset(models,_.extend({silent:true},options))};var setOptions={add:true,remove:true,merge:true};var addOptions={add:true,merge:false,remove:false};_.extend(Collection.prototype,Events,{model:Model,initialize:function(){},toJSON:function(options){return this.map(function(model){return model.toJSON(options)})},sync:function(){return Backbone.sync.apply(this,arguments)},add:function(models,options){return this.set(models,_.defaults(options||{},addOptions))},remove:function(models,options){models=_.isArray(models)?models.slice():[models];options||(options={});var i,l,index,model;for(i=0,l=models.length;i<l;i++){model=this.get(models[i]);if(!model)continue;delete this._byId[model.id];delete this._byId[model.cid];index=this.indexOf(model);this.models.splice(index,1);this.length--;if(!options.silent){options.index=index;model.trigger("remove",model,this,options)}this._removeReference(model)}return this},set:function(models,options){options=_.defaults(options||{},setOptions);if(options.parse)models=this.parse(models,options);if(!_.isArray(models))models=models?[models]:[];var i,l,model,attrs,existing,sort;var at=options.at;var sortable=this.comparator&&at==null&&options.sort!==false;var sortAttr=_.isString(this.comparator)?this.comparator:null;var toAdd=[],toRemove=[],modelMap={};for(i=0,l=models.length;i<l;i++){if(!(model=this._prepareModel(models[i],options)))continue;if(existing=this.get(model)){if(options.remove)modelMap[existing.cid]=true;if(options.merge){existing.set(model.attributes,options);if(sortable&&!sort&&existing.hasChanged(sortAttr))sort=true}}else if(options.add){toAdd.push(model);model.on("all",this._onModelEvent,this);this._byId[model.cid]=model;if(model.id!=null)this._byId[model.id]=model}}if(options.remove){for(i=0,l=this.length;i<l;++i){if(!modelMap[(model=this.models[i]).cid])toRemove.push(model)}if(toRemove.length)this.remove(toRemove,options)}if(toAdd.length){if(sortable)sort=true;this.length+=toAdd.length;if(at!=null){splice.apply(this.models,[at,0].concat(toAdd))}else{push.apply(this.models,toAdd)}}if(sort)this.sort({silent:true});if(options.silent)return this;for(i=0,l=toAdd.length;i<l;i++){(model=toAdd[i]).trigger("add",model,this,options)}if(sort)this.trigger("sort",this,options);return this},reset:function(models,options){options||(options={});for(var i=0,l=this.models.length;i<l;i++){this._removeReference(this.models[i])}options.previousModels=this.models;this._reset();this.add(models,_.extend({silent:true},options));if(!options.silent)this.trigger("reset",this,options);return this},push:function(model,options){model=this._prepareModel(model,options);this.add(model,_.extend({at:this.length},options));return model},pop:function(options){var model=this.at(this.length-1);this.remove(model,options);return model},unshift:function(model,options){model=this._prepareModel(model,options);this.add(model,_.extend({at:0},options));return model},shift:function(options){var model=this.at(0);this.remove(model,options);return model},slice:function(begin,end){return this.models.slice(begin,end)},get:function(obj){if(obj==null)return void 0;return this._byId[obj.id!=null?obj.id:obj.cid||obj]},at:function(index){return this.models[index]},where:function(attrs,first){if(_.isEmpty(attrs))return first?void 0:[];return this[first?"find":"filter"](function(model){for(var key in attrs){if(attrs[key]!==model.get(key))return false}return true})},findWhere:function(attrs){return this.where(attrs,true)},sort:function(options){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");options||(options={});if(_.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(_.bind(this.comparator,this))}if(!options.silent)this.trigger("sort",this,options);return this},sortedIndex:function(model,value,context){value||(value=this.comparator);var iterator=_.isFunction(value)?value:function(model){return model.get(value)};return _.sortedIndex(this.models,model,iterator,context)},pluck:function(attr){return _.invoke(this.models,"get",attr)},fetch:function(options){options=options?_.clone(options):{};if(options.parse===void 0)options.parse=true;var success=options.success;var collection=this;options.success=function(resp){var method=options.reset?"reset":"set";collection[method](resp,options);if(success)success(collection,resp,options);collection.trigger("sync",collection,resp,options)};wrapError(this,options);return this.sync("read",this,options)},create:function(model,options){options=options?_.clone(options):{};if(!(model=this._prepareModel(model,options)))return false;if(!options.wait)this.add(model,options);var collection=this;var success=options.success;options.success=function(resp){if(options.wait)collection.add(model,options);if(success)success(model,resp,options)};model.save(null,options);return model},parse:function(resp,options){return resp},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(attrs,options){if(attrs instanceof Model){if(!attrs.collection)attrs.collection=this;return attrs}options||(options={});options.collection=this;var model=new this.model(attrs,options);if(!model._validate(attrs,options)){this.trigger("invalid",this,attrs,options);return false}return model},_removeReference:function(model){if(this===model.collection)delete model.collection;model.off("all",this._onModelEvent,this)},_onModelEvent:function(event,model,collection,options){if((event==="add"||event==="remove")&&collection!==this)return;if(event==="destroy")this.remove(model,options);if(model&&event==="change:"+model.idAttribute){delete this._byId[model.previous(model.idAttribute)];if(model.id!=null)this._byId[model.id]=model}this.trigger.apply(this,arguments)}});var methods=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];_.each(methods,function(method){Collection.prototype[method]=function(){var args=slice.call(arguments);args.unshift(this.models);return _[method].apply(_,args)}});var attributeMethods=["groupBy","countBy","sortBy"];_.each(attributeMethods,function(method){Collection.prototype[method]=function(value,context){var iterator=_.isFunction(value)?value:function(model){return model.get(value)};return _[method](this.models,iterator,context)}});var View=Backbone.View=function(options){this.cid=_.uniqueId("view");this._configure(options||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var delegateEventSplitter=/^(\S+)\s*(.*)$/;var viewOptions=["model","collection","el","id","attributes","className","tagName","events"];_.extend(View.prototype,Events,{tagName:"div",$:function(selector){return this.$el.find(selector)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(element,delegate){if(this.$el)this.undelegateEvents();this.$el=element instanceof Backbone.$?element:Backbone.$(element);this.el=this.$el[0];if(delegate!==false)this.delegateEvents();return this},delegateEvents:function(events){if(!(events||(events=_.result(this,"events"))))return this;this.undelegateEvents();for(var key in events){var method=events[key];if(!_.isFunction(method))method=this[events[key]];if(!method)continue;var match=key.match(delegateEventSplitter);var eventName=match[1],selector=match[2];method=_.bind(method,this);eventName+=".delegateEvents"+this.cid;if(selector===""){this.$el.on(eventName,method)}else{this.$el.on(eventName,selector,method)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(options){if(this.options)options=_.extend({},_.result(this,"options"),options);_.extend(this,_.pick(options,viewOptions));this.options=options},_ensureElement:function(){if(!this.el){var attrs=_.extend({},_.result(this,"attributes"));if(this.id)attrs.id=_.result(this,"id");if(this.className)attrs["class"]=_.result(this,"className");var $el=Backbone.$("<"+_.result(this,"tagName")+">").attr(attrs);this.setElement($el,false)}else{this.setElement(_.result(this,"el"),false)}}});Backbone.sync=function(method,model,options){var type=methodMap[method];_.defaults(options||(options={}),{emulateHTTP:Backbone.emulateHTTP,emulateJSON:Backbone.emulateJSON});var params={type:type,dataType:"json"};if(!options.url){params.url=_.result(model,"url")||urlError()}if(options.data==null&&model&&(method==="create"||method==="update"||method==="patch")){params.contentType="application/json";params.data=JSON.stringify(options.attrs||model.toJSON(options))}if(options.emulateJSON){params.contentType="application/x-www-form-urlencoded";params.data=params.data?{model:params.data}:{}}if(options.emulateHTTP&&(type==="PUT"||type==="DELETE"||type==="PATCH")){params.type="POST";if(options.emulateJSON)params.data._method=type;var beforeSend=options.beforeSend;options.beforeSend=function(xhr){xhr.setRequestHeader("X-HTTP-Method-Override",type);if(beforeSend)return beforeSend.apply(this,arguments)}}if(params.type!=="GET"&&!options.emulateJSON){params.processData=false}if(params.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){params.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var xhr=options.xhr=Backbone.ajax(_.extend(params,options));model.trigger("request",model,xhr,options);return xhr};var methodMap={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};Backbone.ajax=function(){return Backbone.$.ajax.apply(Backbone.$,arguments)};var Router=Backbone.Router=function(options){options||(options={});if(options.routes)this.routes=options.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var optionalParam=/\((.*?)\)/g;var namedParam=/(\(\?)?:\w+/g;var splatParam=/\*\w+/g;var escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g;_.extend(Router.prototype,Events,{initialize:function(){},route:function(route,name,callback){if(!_.isRegExp(route))route=this._routeToRegExp(route);if(_.isFunction(name)){callback=name;name=""}if(!callback)callback=this[name];var router=this;Backbone.history.route(route,function(fragment){var args=router._extractParameters(route,fragment);callback&&callback.apply(router,args);router.trigger.apply(router,["route:"+name].concat(args));router.trigger("route",name,args);Backbone.history.trigger("route",router,name,args)});return this},navigate:function(fragment,options){Backbone.history.navigate(fragment,options);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=_.result(this,"routes");var route,routes=_.keys(this.routes);while((route=routes.pop())!=null){this.route(route,this.routes[route])}},_routeToRegExp:function(route){route=route.replace(escapeRegExp,"\\$&").replace(optionalParam,"(?:$1)?").replace(namedParam,function(match,optional){return optional?match:"([^/]+)"}).replace(splatParam,"(.*?)");return new RegExp("^"+route+"$")},_extractParameters:function(route,fragment){var params=route.exec(fragment).slice(1);return _.map(params,function(param){return param?decodeURIComponent(param):null})}});var History=Backbone.History=function(){this.handlers=[];_.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var routeStripper=/^[#\/]|\s+$/g;var rootStripper=/^\/+|\/+$/g;var isExplorer=/msie [\w.]+/;var trailingSlash=/\/$/;History.started=false;_.extend(History.prototype,Events,{interval:50,getHash:function(window){var match=(window||this).location.href.match(/#(.*)$/);return match?match[1]:""},getFragment:function(fragment,forcePushState){if(fragment==null){if(this._hasPushState||!this._wantsHashChange||forcePushState){fragment=this.location.pathname;var root=this.root.replace(trailingSlash,"");if(!fragment.indexOf(root))fragment=fragment.substr(root.length)}else{fragment=this.getHash()}}return fragment.replace(routeStripper,"")},start:function(options){if(History.started)throw new Error("Backbone.history has already been started");History.started=true;this.options=_.extend({},{root:"/"},this.options,options);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var fragment=this.getFragment();var docMode=document.documentMode;var oldIE=isExplorer.exec(navigator.userAgent.toLowerCase())&&(!docMode||docMode<=7);this.root=("/"+this.root+"/").replace(rootStripper,"/");if(oldIE&&this._wantsHashChange){this.iframe=Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(fragment)}if(this._hasPushState){Backbone.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!oldIE){Backbone.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=fragment;var loc=this.location;var atRoot=loc.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!atRoot){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&atRoot&&loc.hash){this.fragment=this.getHash().replace(routeStripper,"");this.history.replaceState({},document.title,this.root+this.fragment+loc.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){Backbone.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);History.started=false},route:function(route,callback){this.handlers.unshift({route:route,callback:callback})},checkUrl:function(e){var current=this.getFragment();if(current===this.fragment&&this.iframe){current=this.getFragment(this.getHash(this.iframe))}if(current===this.fragment)return false;if(this.iframe)this.navigate(current);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(fragmentOverride){var fragment=this.fragment=this.getFragment(fragmentOverride);var matched=_.any(this.handlers,function(handler){if(handler.route.test(fragment)){handler.callback(fragment);return true}});return matched},navigate:function(fragment,options){if(!History.started)return false;if(!options||options===true)options={trigger:options};fragment=this.getFragment(fragment||"");if(this.fragment===fragment)return;this.fragment=fragment;var url=this.root+fragment;if(this._hasPushState){this.history[options.replace?"replaceState":"pushState"]({},document.title,url)}else if(this._wantsHashChange){this._updateHash(this.location,fragment,options.replace);if(this.iframe&&fragment!==this.getFragment(this.getHash(this.iframe))){if(!options.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,fragment,options.replace)}}else{return this.location.assign(url)}if(options.trigger)this.loadUrl(fragment)},_updateHash:function(location,fragment,replace){if(replace){var href=location.href.replace(/(javascript:|#).*$/,"");location.replace(href+"#"+fragment)}else{location.hash="#"+fragment}}});Backbone.history=new History;var extend=function(protoProps,staticProps){var parent=this;var child;if(protoProps&&_.has(protoProps,"constructor")){child=protoProps.constructor}else{child=function(){return parent.apply(this,arguments)}}_.extend(child,parent,staticProps);var Surrogate=function(){this.constructor=child};Surrogate.prototype=parent.prototype;child.prototype=new Surrogate;if(protoProps)_.extend(child.prototype,protoProps);child.__super__=parent.prototype;return child};Model.extend=Collection.extend=Router.extend=View.extend=History.extend=extend;var urlError=function(){throw new Error('A "url" property or function must be specified')};var wrapError=function(model,options){var error=options.error;options.error=function(resp){if(error)error(model,resp,options);model.trigger("error",model,resp,options)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/;

(function($) {

  // Backbone.Stickit Namespace
  // --------------------------

  Backbone.Stickit = {

    _handlers: [],

    addHandler: function(handlers) {
      // Fill-in default values.
      handlers = _.map(_.flatten([handlers]), function(handler) {
        return _.extend({
          updateModel: true,
          updateView: true,
          updateMethod: 'text'
        }, handler);
      });
      this._handlers = this._handlers.concat(handlers);
    }
  };

  // Backbone.View Mixins
  // --------------------

  _.extend(Backbone.View.prototype, {

    // Collection of model event bindings.
    //   [{model,event,fn}, ...]
    _modelBindings: null,

    // Unbind the model and event bindings from `this._modelBindings` and
    // `this.$el`. If the optional `model` parameter is defined, then only
    // delete bindings for the given `model` and its corresponding view events.
    unstickit: function(model) {
      _.each(this._modelBindings, _.bind(function(binding, i) {
        if (model && binding.model !== model) return false;
        binding.model.off(binding.event, binding.fn);
        delete this._modelBindings[i];
      }, this));
      this._modelBindings = _.compact(this._modelBindings);

      this.$el.off('.stickit' + (model ? '.' + model.cid : ''));
    },

    // Using `this.bindings` configuration or the `optionalBindingsConfig`, binds `this.model`
    // or the `optionalModel` to elements in the view.
    stickit: function(optionalModel, optionalBindingsConfig) {
      var self = this,
        model = optionalModel || this.model,
        namespace = '.stickit.' + model.cid,
        bindings = optionalBindingsConfig || this.bindings || {};

      this._modelBindings || (this._modelBindings = []);
      this.unstickit(model);

      // Iterate through the selectors in the bindings configuration and configure
      // the various options for each field.
      _.each(_.keys(bindings), function(selector) {
        var $el, options, modelAttr, config,
          binding = bindings[selector] || {},
          bindKey = _.uniqueId();

        // Support ':el' selector - special case selector for the view managed delegate.
        if (selector != ':el') $el = self.$(selector);
        else {
          $el = self.$el;
          selector = '';
        }

        // Fail fast if the selector didn't match an element.
        if (!$el.length) return;

        // Allow shorthand setting of model attributes - `'selector':'observe'`.
        if (_.isString(binding)) binding = {observe:binding};

        config = getConfiguration($el, binding);

        modelAttr = config.observe;

        // Create the model set options with a unique `bindKey` so that we
        // can avoid double-binding in the `change:attribute` event handler.
        options = _.extend({bindKey:bindKey}, config.setOptions || {});

        initializeAttributes(self, $el, config, model, modelAttr);

        initializeVisible(self, $el, config, model, modelAttr);

        if (modelAttr) {
          // Setup one-way, form element to model, bindings.
          _.each(config.events || [], function(type) {
            var event = type + namespace;
            var method = function(event) {
              var val = config.getVal.call(self, $el, event, config);
              // Don't update the model if false is returned from the `updateModel` configuration.
              if (evaluateBoolean(self, config.updateModel, val, config))
                setAttr(model, modelAttr, val, options, self, config);
            };
            if (selector === '') self.$el.on(event, method);
            else self.$el.on(event, selector, method);
          });

          // Setup a `change:modelAttr` observer to keep the view element in sync.
          // `modelAttr` may be an array of attributes or a single string value.
          _.each(_.flatten([modelAttr]), function(attr) {
            observeModelEvent(model, self, 'change:'+attr, function(model, val, options) {
              if (options == null || options.bindKey != bindKey)
                updateViewBindEl(self, $el, config, getAttr(model, modelAttr, config, self), model);
            });
          });

          updateViewBindEl(self, $el, config, getAttr(model, modelAttr, config, self), model, true);
        }

        // After each binding is setup, call the `initialize` callback.
        applyViewFn(self, config.initialize, $el, model, config);
      });

      // Wrap `view.remove` to unbind stickit model and dom events.
      this.remove = _.wrap(this.remove, function(oldRemove) {
        self.unstickit();
        if (oldRemove) oldRemove.call(self);
      });
    }
  });

  // Helpers
  // -------

  // Evaluates the given `path` (in object/dot-notation) relative to the given
  // `obj`. If the path is null/undefined, then the given `obj` is returned.
  var evaluatePath = function(obj, path) {
    var parts = (path || '').split('.');
    var result = _.reduce(parts, function(memo, i) { return memo[i]; }, obj);
    return result == null ? obj : result;
  };

  // If the given `fn` is a string, then view[fn] is called, otherwise it is
  // a function that should be executed.
  var applyViewFn = function(view, fn) {
    if (fn) return (_.isString(fn) ? view[fn] : fn).apply(view, _.toArray(arguments).slice(2));
  };

  var getSelectedOption = function($select) { return $select.find('option').not(function(){ return !this.selected; }); };

  // Given a function, string (view function reference), or a boolean
  // value, returns the truthy result. Any other types evaluate as false.
  var evaluateBoolean = function(view, reference) {
    if (_.isBoolean(reference)) return reference;
    else if (_.isFunction(reference) || _.isString(reference))
      return applyViewFn.apply(this, _.toArray(arguments));
    return false;
  };

  // Setup a model event binding with the given function, and track the event
  // in the view's _modelBindings.
  var observeModelEvent = function(model, view, event, fn) {
    model.on(event, fn, view);
    view._modelBindings.push({model:model, event:event, fn:fn});
  };

  // Prepares the given `val`ue and sets it into the `model`.
  var setAttr = function(model, attr, val, options, context, config) {
    if (config.onSet) val = applyViewFn(context, config.onSet, val, config);
    model.set(attr, val, options);
  };

  // Returns the given `attr`'s value from the `model`, escaping and
  // formatting if necessary. If `attr` is an array, then an array of
  // respective values will be returned.
  var getAttr = function(model, attr, config, context) {
    var val, retrieveVal = function(field) {
      var retrieved = config.escape ? model.escape(field) : model.get(field);
      return _.isUndefined(retrieved) ? '' : retrieved;
    };
    val = _.isArray(attr) ? _.map(attr, retrieveVal) : retrieveVal(attr);
    return config.onGet ? applyViewFn(context, config.onGet, val, config) : val;
  };

  // Find handlers in `Backbone.Stickit._handlers` with selectors that match
  // `$el` and generate a configuration by mixing them in the order that they
  // were found with the with the givne `binding`.
  var getConfiguration = function($el, binding) {
    var handlers = [{
      updateModel: false,
      updateView: true,
      updateMethod: 'text',
      update: function($el, val, m, opts) { $el[opts.updateMethod](val); },
      getVal: function($el, e, opts) { return $el[opts.updateMethod](); }
    }];
    _.each(Backbone.Stickit._handlers, function(handler) {
      if ($el.is(handler.selector)) handlers.push(handler);
    });
    handlers.push(binding);
    var config = _.extend.apply(_, handlers);
    delete config.selector;
    return config;
  };

  // Setup the attributes configuration - a list that maps an attribute or
  // property `name`, to an `observe`d model attribute, using an optional
  // `onGet` formatter.
  //
  //     attributes: [{
  //       name: 'attributeOrPropertyName',
  //       observe: 'modelAttrName'
  //       onGet: function(modelAttrVal, modelAttrName) { ... }
  //     }, ...]
  //
  var initializeAttributes = function(view, $el, config, model, modelAttr) {
    var props = ['autofocus', 'autoplay', 'async', 'checked', 'controls', 'defer', 'disabled', 'hidden', 'loop', 'multiple', 'open', 'readonly', 'required', 'scoped', 'selected'];

    _.each(config.attributes || [], function(attrConfig) {
      var lastClass = '',
        observed = attrConfig.observe || (attrConfig.observe = modelAttr),
        updateAttr = function() {
          var updateType = _.indexOf(props, attrConfig.name, true) > -1 ? 'prop' : 'attr',
            val = getAttr(model, observed, attrConfig, view);
          // If it is a class then we need to remove the last value and add the new.
          if (attrConfig.name == 'class') {
            $el.removeClass(lastClass).addClass(val);
            lastClass = val;
          }
          else $el[updateType](attrConfig.name, val);
        };
      _.each(_.flatten([observed]), function(attr) {
        observeModelEvent(model, view, 'change:' + attr, updateAttr);
      });
      updateAttr();
    });
  };

  // If `visible` is configured, then the view element will be shown/hidden
  // based on the truthiness of the modelattr's value or the result of the
  // given callback. If a `visibleFn` is also supplied, then that callback
  // will be executed to manually handle showing/hiding the view element.
  //
  //     observe: 'isRight',
  //     visible: true, // or function(val, options) {}
  //     visibleFn: function($el, isVisible, options) {} // optional handler
  //
  var initializeVisible = function(view, $el, config, model, modelAttr) {
    if (config.visible == null) return;
    var visibleCb = function() {
      var visible = config.visible,
          visibleFn = config.visibleFn,
          val = getAttr(model, modelAttr, config, view),
          isVisible = !!val;
      // If `visible` is a function then it should return a boolean result to show/hide.
      if (_.isFunction(visible) || _.isString(visible)) isVisible = applyViewFn(view, visible, val, config);
      // Either use the custom `visibleFn`, if provided, or execute the standard show/hide.
      if (visibleFn) applyViewFn(view, visibleFn, $el, isVisible, config);
      else {
        if (isVisible) $el.show();
        else $el.hide();
      }
    };
    _.each(_.flatten([modelAttr]), function(attr) {
      observeModelEvent(model, view, 'change:' + attr, visibleCb);
    });
    visibleCb();
  };

  // Update the value of `$el` using the given configuration and trigger the
  // `afterUpdate` callback. This action may be blocked by `config.updateView`.
  //
  //     update: function($el, val, model, options) {},  // handler for updating
  //     updateView: true, // defaults to true
  //     afterUpdate: function($el, val, options) {} // optional callback
  //
  var updateViewBindEl = function(view, $el, config, val, model, isInitializing) {
    if (!evaluateBoolean(view, config.updateView, val, config)) return;
    config.update.call(view, $el, val, model, config);
    if (!isInitializing) applyViewFn(view, config.afterUpdate, $el, val, config);
  };

  // Default Handlers
  // ----------------

  Backbone.Stickit.addHandler([{
    selector: '[contenteditable="true"]',
    updateMethod: 'html',
    events: ['keyup', 'change', 'paste', 'cut']
  }, {
    selector: 'input',
    events: ['keyup', 'change', 'paste', 'cut'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) {
      var val = $el.val();
      if ($el.is('[type="number"]')) return val == null ? val : Number(val);
      else return val;
    }
  }, {
    selector: 'textarea',
    events: ['keyup', 'change', 'paste', 'cut'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) { return $el.val(); }
  }, {
    selector: 'input[type="radio"]',
    events: ['change'],
    update: function($el, val) {
      $el.filter('[value="'+val+'"]').prop('checked', true);
    },
    getVal: function($el) {
      return $el.filter(':checked').val();
    }
  }, {
    selector: 'input[type="checkbox"]',
    events: ['change'],
    update: function($el, val, model, options) {
      if ($el.length > 1) {
        // There are multiple checkboxes so we need to go through them and check
        // any that have value attributes that match what's in the array of `val`s.
        val || (val = []);
        _.each($el, function(el) {
          if (_.indexOf(val, $(el).val()) > -1) $(el).prop('checked', true);
          else $(el).prop('checked', false);
        });
      } else {
        if (_.isBoolean(val)) $el.prop('checked', val);
        else $el.prop('checked', val == $el.val());
      }
    },
    getVal: function($el) {
      var val;
      if ($el.length > 1) {
        val = _.reduce($el, function(memo, el) {
          if ($(el).prop('checked')) memo.push($(el).val());
          return memo;
        }, []);
      } else {
        val = $el.prop('checked');
        // If the checkbox has a value attribute defined, then
        // use that value. Most browsers use "on" as a default.
        var boxval = $el.val();
        if (boxval != 'on' && boxval != null) {
          if (val) val = $el.val();
          else val = null;
        }
      }
      return val;
    }
  }, {
    selector: 'select',
    events: ['change'],
    update: function($el, val, model, options) {
      var optList,
        selectConfig = options.selectOptions,
        list = selectConfig && selectConfig.collection || undefined,
        isMultiple = $el.prop('multiple');

      // If there are no `selectOptions` then we assume that the `<select>`
      // is pre-rendered and that we need to generate the collection.
      if (!selectConfig) {
        selectConfig = {};
        var getList = function($el) {
          return $el.find('option').map(function() {
            return {value:this.value, label:this.text};
          }).get();
        };
        if ($el.find('optgroup').length) {
          list = {opt_labels:[]};
          _.each($el.find('optgroup'), function(el) {
            var label = $(el).attr('label');
            list.opt_labels.push(label);
            list[label] = getList($(el));
          });
        } else {
          list = getList($el);
        }
      }

      // Fill in default label and path values.
      selectConfig.valuePath = selectConfig.valuePath || 'value';
      selectConfig.labelPath = selectConfig.labelPath || 'label';

      var addSelectOptions = function(optList, $el, fieldVal) {
        // Add a flag for default option at the beginning of the list.
        if (selectConfig.defaultOption) {
          optList = _.clone(optList);
          optList.unshift('__default__');
        }
        _.each(optList, function(obj) {
          var option = $('<option/>'), optionVal = obj;

          var fillOption = function(text, val) {
            option.text(text);
            optionVal = val;
            // Save the option value as data so that we can reference it later.
            option.data('stickit_bind_val', optionVal);
            if (!_.isArray(optionVal) && !_.isObject(optionVal)) option.val(optionVal);
          };

          if (obj === '__default__')
            fillOption(selectConfig.defaultOption.label, selectConfig.defaultOption.value);
          else
            fillOption(evaluatePath(obj, selectConfig.labelPath), evaluatePath(obj, selectConfig.valuePath));

          // Determine if this option is selected.
          if (!isMultiple && optionVal != null && fieldVal != null && optionVal == fieldVal || (_.isObject(fieldVal) && _.isEqual(optionVal, fieldVal)))
            option.prop('selected', true);
          else if (isMultiple && _.isArray(fieldVal)) {
            _.each(fieldVal, function(val) {
              if (_.isObject(val)) val = evaluatePath(val, selectConfig.valuePath);
              if (val == optionVal || (_.isObject(val) && _.isEqual(optionVal, val)))
                option.prop('selected', true);
            });
          }

          $el.append(option);
        });
      };

      $el.html('');

      // The `list` configuration is a function that returns the options list or a string
      // which represents the path to the list relative to `window` or the view/`this`.
      var evaluate = function(view, list) {
        var context = window;
        if (list.indexOf('this.') === 0) context = view;
        list = list.replace(/^[a-z]*\.(.+)$/, '$1');
        return evaluatePath(context, list);
      };
      if (_.isString(list)) optList = evaluate(this, list);
      else if (_.isFunction(list)) optList = applyViewFn(this, list, $el, options);
      else optList = list;

      // Support Backbone.Collection and deserialize.
      if (optList instanceof Backbone.Collection) optList = optList.toJSON();

      if (_.isArray(optList)) {
        addSelectOptions(optList, $el, val);
      } else {
        // If the optList is an object, then it should be used to define an optgroup. An
        // optgroup object configuration looks like the following:
        //
        //     {
        //       'opt_labels': ['Looney Tunes', 'Three Stooges'],
        //       'Looney Tunes': [{id: 1, name: 'Bugs Bunny'}, {id: 2, name: 'Donald Duck'}],
        //       'Three Stooges': [{id: 3, name : 'moe'}, {id: 4, name : 'larry'}, {id: 5, name : 'curly'}]
        //     }
        //
        _.each(optList.opt_labels, function(label) {
          var $group = $('<optgroup/>').attr('label', label);
          addSelectOptions(optList[label], $group, val);
          $el.append($group);
        });
      }
    },
    getVal: function($el) {
      var val;
      if ($el.prop('multiple')) {
        val = $(getSelectedOption($el).map(function() {
          return $(this).data('stickit_bind_val');
        })).get();
      } else {
        val = getSelectedOption($el).data('stickit_bind_val');
      }
      return val;
    }
  }]);

})(window.jQuery || window.Zepto);
;

d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function i(){}function u(){}function a(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function o(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=Ca.length;r>e;++e){var i=Ca[e]+t;if(i in n)return i}}function c(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}function l(n){return Array.prototype.slice.call(n)}function s(){}function f(){}function h(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new i;return t.on=function(t,i){var u,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,u=e.indexOf(a)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function g(){ya.event.preventDefault()}function p(){for(var n,t=ya.event;n=t.sourceEvent;)t=n;return t}function m(n){for(var t=new f,e=0,r=arguments.length;++e<r;)t[arguments[e]]=h(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ya.event;i.target=n,ya.event=i,t[i.type].apply(e,r)}finally{ya.event=u}}},t}function d(n){return La(n,Ya),n}function v(n){return"function"==typeof n?n:function(){return Ha(n,this)}}function y(n){return"function"==typeof n?n:function(){return Fa(n,this)}}function M(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ya.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?u:i}function x(n){return n.trim().replace(/\s+/g," ")}function b(n){return new RegExp("(?:^|\\s+)"+ya.requote(n)+"(?:\\s+|$)","g")}function _(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=n.trim().split(/\s+/).map(w);var i=n.length;return"function"==typeof t?r:e}function w(n){var t=b(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",x(i+" "+n))):e.setAttribute("class",x(i.replace(t," ")))}}function S(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function E(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function k(n){return"function"==typeof n?n:(n=ya.ns.qualify(n)).local?function(){return Ma.createElementNS(n.space,n.local)}:function(){return Ma.createElementNS(this.namespaceURI,n)}}function A(n){return{__data__:n}}function N(n){return function(){return Oa(this,n)}}function q(n){return arguments.length||(n=ya.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function T(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],a=0,o=u.length;o>a;a++)(i=u[a])&&t(i,a,e);return n}function C(n){return La(n,Ua),n}function z(n){var t,e;return function(r,i,u){var a,o=n[u].update,c=o.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(a=o[t])&&++t<c;);return a}}function D(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function i(){var i=c(t,za(arguments));r.call(this),this.addEventListener(n,this[a]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ya.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),c=j;o>0&&(n=n.substring(0,o));var l=Va.get(n);return l&&(n=l,c=L),o?t?i:r:t?s:u}function j(n,t){return function(e){var r=ya.event;ya.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ya.event=r}}}function L(n,t){var e=j(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function H(){var n=".dragsuppress-"+ ++Za,t="touchmove"+n,e="selectstart"+n,r="dragstart"+n,i="click"+n,u=ya.select(ba).on(t,g).on(e,g).on(r,g),a=xa.style,o=a[Xa];return a[Xa]="none",function(t){function e(){u.on(i,null)}u.on(n,null),a[Xa]=o,t&&(u.on(i,function(){g(),e()},!0),setTimeout(e,0))}}function F(n,t){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>Ba&&(ba.scrollX||ba.scrollY)){e=ya.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var i=e[0][0].getScreenCTM();Ba=!(i.f||i.e),e.remove()}return Ba?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function P(){}function O(n,t,e){return new Y(n,t,e)}function Y(n,t,e){this.h=n,this.s=t,this.l=e}function R(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(a-u)*n/60:180>n?a:240>n?u+(a-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,u=2*e-a,at(i(n+120),i(n),i(n-120))}function U(n){return n>0?1:0>n?-1:0}function I(n){return n>1?0:-1>n?Ka:Math.acos(n)}function V(n){return n>1?Ka/2:-1>n?-Ka/2:Math.asin(n)}function X(n){return(Math.exp(n)-Math.exp(-n))/2}function Z(n){return(Math.exp(n)+Math.exp(-n))/2}function B(n){return(n=Math.sin(n/2))*n}function $(n,t,e){return new W(n,t,e)}function W(n,t,e){this.h=n,this.c=t,this.l=e}function J(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),G(e,Math.cos(n*=to)*t,Math.sin(n)*t)}function G(n,t,e){return new K(n,t,e)}function K(n,t,e){this.l=n,this.a=t,this.b=e}function Q(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=tt(i)*uo,r=tt(r)*ao,u=tt(u)*oo,at(rt(3.2404542*i-1.5371385*r-.4985314*u),rt(-.969266*i+1.8760108*r+.041556*u),rt(.0556434*i-.2040259*r+1.0572252*u))}function nt(n,t,e){return n>0?$(Math.atan2(e,t)*eo,Math.sqrt(t*t+e*e),n):$(0/0,0/0,n)}function tt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function et(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function rt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function it(n){return at(n>>16,255&n>>8,255&n)}function ut(n){return it(n)+""}function at(n,t,e){return new ot(n,t,e)}function ot(n,t,e){this.r=n,this.g=t,this.b=e}function ct(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function lt(n,t,e){var r,i,u,a=0,o=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(gt(i[0]),gt(i[1]),gt(i[2]))}return(u=so.get(n))?t(u.r,u.g,u.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(a=n.charAt(1),a+=a,o=n.charAt(2),o+=o,c=n.charAt(3),c+=c):7===n.length&&(a=n.substring(1,3),o=n.substring(3,5),c=n.substring(5,7)),a=parseInt(a,16),o=parseInt(o,16),c=parseInt(c,16)),t(a,o,c))}function st(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-u,c=(a+u)/2;return o?(i=.5>c?o/(a+u):o/(2-a-u),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=0/0,i=c>0&&1>c?0:r),O(r,i,c)}function ft(n,t,e){n=ht(n),t=ht(t),e=ht(e);var r=et((.4124564*n+.3575761*t+.1804375*e)/uo),i=et((.2126729*n+.7151522*t+.072175*e)/ao),u=et((.0193339*n+.119192*t+.9503041*e)/oo);return G(116*i-16,500*(r-i),200*(i-u))}function ht(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function gt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function pt(n){return"function"==typeof n?n:function(){return n}}function mt(n){return n}function dt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),vt(t,e,n,r)}}function vt(n,t,e,r){function i(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(u,c)}catch(r){return a.error.call(u,r),void 0}a.load.call(u,n)}else a.error.call(u,c)}var u={},a=ya.dispatch("progress","load","error"),o={},c=new XMLHttpRequest,l=null;return!ba.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=i:c.onreadystatechange=function(){c.readyState>3&&i()},c.onprogress=function(n){var t=ya.event;ya.event=n;try{a.progress.call(u,c)}finally{ya.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(l=n,u):l},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(za(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),c.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),c.setRequestHeader)for(var a in o)c.setRequestHeader(a,o[a]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),c.send(null==r?null:r),u},u.abort=function(){return c.abort(),u},ya.rebind(u,a,"on"),null==r?u:u.get(yt(r))}function yt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Mt(){var n=bt(),t=_t()-n;t>24?(isFinite(t)&&(clearTimeout(po),po=setTimeout(Mt,t)),go=0):(go=1,vo(Mt))}function xt(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now()),mo.callback=n,mo.time=e+t}function bt(){var n=Date.now();for(mo=fo;mo;)n>=mo.time&&(mo.flush=mo.callback(n-mo.time)),mo=mo.next;return n}function _t(){for(var n,t=fo,e=1/0;t;)t.flush?t=n?n.next=t.next:fo=t.next:(t.time<e&&(e=t.time),t=(n=t).next);return ho=n,e}function wt(n,t){var e=Math.pow(10,3*Math.abs(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function St(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Et(n){return n+""}function kt(){}function At(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function Nt(n,t){n&&qo.hasOwnProperty(n.type)&&qo[n.type](n,t)}function qt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1]);t.lineEnd()}function Tt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)qt(n[e],t,1);t.polygonEnd()}function Ct(){function n(n,t){n*=to,t=t*to/2+Ka/4;var e=n-r,a=Math.cos(t),o=Math.sin(t),c=u*o,l=i*a+c*Math.cos(e),s=c*Math.sin(e);Co.add(Math.atan2(s,l)),r=n,i=a,u=o}var t,e,r,i,u;zo.point=function(a,o){zo.point=n,r=(t=a)*to,i=Math.cos(o=(e=o)*to/2+Ka/4),u=Math.sin(o)},zo.lineEnd=function(){n(t,e)}}function zt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function Dt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function jt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Lt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Ht(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Ft(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Pt(n){return[Math.atan2(n[1],n[0]),V(n[2])]}function Ot(n,t){return Math.abs(n[0]-t[0])<Qa&&Math.abs(n[1]-t[1])<Qa}function Yt(n,t){n*=to;var e=Math.cos(t*=to);Rt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Rt(n,t,e){++Do,Lo+=(n-Lo)/Do,Ho+=(t-Ho)/Do,Fo+=(e-Fo)/Do}function Ut(){function n(n,i){n*=to;var u=Math.cos(i*=to),a=u*Math.cos(n),o=u*Math.sin(n),c=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*c-r*o)*l+(l=r*a-t*c)*l+(l=t*o-e*a)*l),t*a+e*o+r*c);jo+=l,Po+=l*(t+(t=a)),Oo+=l*(e+(e=o)),Yo+=l*(r+(r=c)),Rt(t,e,r)}var t,e,r;Vo.point=function(i,u){i*=to;var a=Math.cos(u*=to);t=a*Math.cos(i),e=a*Math.sin(i),r=Math.sin(u),Vo.point=n,Rt(t,e,r)}}function It(){Vo.point=Yt}function Vt(){function n(n,t){n*=to;var e=Math.cos(t*=to),a=e*Math.cos(n),o=e*Math.sin(n),c=Math.sin(t),l=i*c-u*o,s=u*a-r*c,f=r*o-i*a,h=Math.sqrt(l*l+s*s+f*f),g=r*a+i*o+u*c,p=h&&-I(g)/h,m=Math.atan2(h,g);Ro+=p*l,Uo+=p*s,Io+=p*f,jo+=m,Po+=m*(r+(r=a)),Oo+=m*(i+(i=o)),Yo+=m*(u+(u=c)),Rt(r,i,u)}var t,e,r,i,u;Vo.point=function(a,o){t=a,e=o,Vo.point=n,a*=to;var c=Math.cos(o*=to);r=c*Math.cos(a),i=c*Math.sin(a),u=Math.sin(o),Rt(r,i,u)},Vo.lineEnd=function(){n(t,e),Vo.lineEnd=It,Vo.point=Yt}}function Xt(){return!0}function Zt(n,t,e,r,i){var u=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(Ot(e,r)){i.lineStart();for(var o=0;t>o;++o)i.point((e=n[o])[0],e[1]);return i.lineEnd(),void 0}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1};c.other=l,u.push(c),a.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,u.push(c),a.push(l)}}),a.sort(t),Bt(u),Bt(a),u.length){if(e)for(var o=1,c=!e(a[0].point),l=a.length;l>o;++o)a[o].entry=c=!c;for(var s,f,h,g=u[0];;){for(s=g;s.visited;)if((s=s.next)===g)return;f=s.points,i.lineStart();do{if(s.visited=s.other.visited=!0,s.entry){if(s.subject)for(var o=0;o<f.length;o++)i.point((h=f[o])[0],h[1]);else r(s.point,s.next.point,1,i);s=s.next}else{if(s.subject){f=s.prev.points;for(var o=f.length;--o>=0;)i.point((h=f[o])[0],h[1])}else r(s.point,s.prev.point,-1,i);s=s.prev}s=s.other,f=s.points}while(!s.visited);i.lineEnd()}}}function Bt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.next=e=n[r],e.prev=i,i=e;i.next=e=n[0],e.prev=i}}function $t(n,t,e,r){return function(i){function u(t,e){n(t,e)&&i.point(t,e)}function a(n,t){m.point(n,t)}function o(){d.point=a,m.lineStart()}function c(){d.point=u,m.lineEnd()}function l(n,t){y.point(n,t),p.push([n,t])}function s(){y.lineStart(),p=[]}function f(){l(p[0][0],p[0][1]),y.lineEnd();var n,t=y.clean(),e=v.buffer(),r=e.length;if(p.pop(),g.push(p),p=null,r){if(1&t){n=e[0];var u,r=n.length-1,a=-1;for(i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),h.push(e.filter(Wt))}}var h,g,p,m=t(i),d={point:u,lineStart:o,lineEnd:c,polygonStart:function(){d.point=l,d.lineStart=s,d.lineEnd=f,h=[],g=[],i.polygonStart()},polygonEnd:function(){d.point=u,d.lineStart=o,d.lineEnd=c,h=ya.merge(h),h.length?Zt(h,Gt,null,e,i):r(g)&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),h=g=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},v=Jt(),y=t(v);return d}}function Wt(n){return n.length>1}function Jt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:s,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Gt(n,t){return((n=n.point)[0]<0?n[1]-Ka/2-Qa:Ka/2-n[1])-((t=t.point)[0]<0?t[1]-Ka/2-Qa:Ka/2-t[1])}function Kt(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,a=!1,o=!1,c=0;Co.reset();for(var l=0,s=t.length;s>l;++l){var f=t[l],h=f.length;if(h){for(var g=f[0],p=g[0],m=g[1]/2+Ka/4,d=Math.sin(m),v=Math.cos(m),y=1;;){y===h&&(y=0),n=f[y];var M=n[0],x=n[1]/2+Ka/4,b=Math.sin(x),_=Math.cos(x),w=M-p,S=Math.abs(w)>Ka,E=d*b;if(Co.add(Math.atan2(E*Math.sin(w),v*_+E*Math.cos(w))),Math.abs(x)<Qa&&(o=!0),u+=S?w+(w>=0?2:-2)*Ka:w,S^p>=e^M>=e){var k=jt(zt(g),zt(n));Ft(k);var A=jt(i,k);Ft(A);var N=(S^w>=0?-1:1)*V(A[2]);r>N&&(c+=S^w>=0?1:-1)}if(!y++)break;p=M,d=b,v=_,g=n}Math.abs(u)>Qa&&(a=!0)}}return(!o&&!a&&0>Co||-Qa>u)^1&c}function Qt(n){var t,e=0/0,r=0/0,i=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(u,a){var o=u>0?Ka:-Ka,c=Math.abs(u-e);Math.abs(c-Ka)<Qa?(n.point(e,r=(r+a)/2>0?Ka/2:-Ka/2),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(u,r),t=0):i!==o&&c>=Ka&&(Math.abs(e-i)<Qa&&(e-=i*Qa),Math.abs(u-o)<Qa&&(u-=o*Qa),r=ne(e,r,u,a),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=u,r=a),i=o},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function ne(n,t,e,r){var i,u,a=Math.sin(n-e);return Math.abs(a)>Qa?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*a)):(t+r)/2}function te(n,t,e,r){var i;if(null==n)i=e*Ka/2,r.point(-Ka,i),r.point(0,i),r.point(Ka,i),r.point(Ka,0),r.point(Ka,-i),r.point(0,-i),r.point(-Ka,-i),r.point(-Ka,0),r.point(-Ka,i);else if(Math.abs(n[0]-t[0])>Qa){var u=(n[0]<t[0]?1:-1)*Ka;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function ee(n){return Kt(Zo,n)}function re(n){function t(n,t){return Math.cos(n)*Math.cos(t)>a}function e(n){var e,u,a,c,s;return{lineStart:function(){c=a=!1,s=1},point:function(f,h){var g,p=[f,h],m=t(f,h),d=o?m?0:i(f,h):m?i(f+(0>f?Ka:-Ka),h):0;if(!e&&(c=a=m)&&n.lineStart(),m!==a&&(g=r(e,p),(Ot(e,g)||Ot(p,g))&&(p[0]+=Qa,p[1]+=Qa,m=t(p[0],p[1]))),m!==a)s=0,m?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(l&&e&&o^m){var v;d&u||!(v=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(v[0][0],v[0][1]),n.point(v[1][0],v[1][1]),n.lineEnd()):(n.point(v[1][0],v[1][1]),n.lineEnd(),n.lineStart(),n.point(v[0][0],v[0][1])))}!m||e&&Ot(e,p)||n.point(p[0],p[1]),e=p,a=m,u=d},lineEnd:function(){a&&n.lineEnd(),e=null},clean:function(){return s|(c&&a)<<1}}}function r(n,t,e){var r=zt(n),i=zt(t),u=[1,0,0],o=jt(r,i),c=Dt(o,o),l=o[0],s=c-l*l;if(!s)return!e&&n;var f=a*c/s,h=-a*l/s,g=jt(u,o),p=Ht(u,f),m=Ht(o,h);Lt(p,m);var d=g,v=Dt(p,d),y=Dt(d,d),M=v*v-y*(Dt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=Ht(d,(-v-x)/y);if(Lt(b,p),b=Pt(b),!e)return b;var _,w=n[0],S=t[0],E=n[1],k=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=Math.abs(A-Ka)<Qa,q=N||Qa>A;if(!N&&E>k&&(_=E,E=k,k=_),q?N?E+k>0^b[1]<(Math.abs(b[0]-w)<Qa?E:k):E<=b[1]&&b[1]<=k:A>Ka^(w<=b[0]&&b[0]<=S)){var T=Ht(d,(-v+x)/y);return Lt(T,p),[b,Pt(T)]}}}function i(t,e){var r=o?n:Ka-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}function u(n){return Kt(c,n)}var a=Math.cos(n),o=a>0,c=[n,0],l=Math.abs(a)>Qa,s=Ne(n,6*to);return $t(t,e,s,u)}function ie(n,t,e,r){function i(r,i){return Math.abs(r[0]-n)<Qa?i>0?0:3:Math.abs(r[0]-e)<Qa?i>0?2:1:Math.abs(r[1]-t)<Qa?i>0?1:0:i>0?3:2}function u(n,t){return a(n.point,t.point)}function a(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function o(i,u){var a=u[0]-i[0],o=u[1]-i[1],c=[0,1];return Math.abs(a)<Qa&&Math.abs(o)<Qa?n<=i[0]&&i[0]<=e&&t<=i[1]&&i[1]<=r:ue(n-i[0],a,c)&&ue(i[0]-e,-a,c)&&ue(t-i[1],o,c)&&ue(i[1]-r,-o,c)?(c[1]<1&&(u[0]=i[0]+c[1]*a,u[1]=i[1]+c[1]*o),c[0]>0&&(i[0]+=c[0]*a,i[1]+=c[0]*o),!0):!1}return function(c){function l(u){var a=i(u,-1),o=s([0===a||3===a?n:e,a>1?r:t]);return o}function s(n){for(var t=0,e=M.length,r=n[1],i=0;e>i;++i)for(var u,a=1,o=M[i],c=o.length,l=o[0];c>a;++a)u=o[a],l[1]<=r?u[1]>r&&f(l,u,n)>0&&++t:u[1]<=r&&f(l,u,n)<0&&--t,l=u;return 0!==t}function f(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function h(u,o,c,l){var s=0,f=0;if(null==u||(s=i(u,c))!==(f=i(o,c))||a(u,o)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(o[0],o[1])}function g(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function p(n,t){g(n,t)&&c.point(n,t)}function m(){T.point=v,M&&M.push(x=[]),A=!0,k=!1,S=E=0/0}function d(){y&&(v(b,_),w&&k&&q.rejoin(),y.push(q.buffer())),T.point=p,k&&c.lineEnd()}function v(n,t){n=Math.max(-Bo,Math.min(Bo,n)),t=Math.max(-Bo,Math.min(Bo,t));var e=g(n,t);if(M&&x.push([n,t]),A)b=n,_=t,w=e,A=!1,e&&(c.lineStart(),c.point(n,t));else if(e&&k)c.point(n,t);else{var r=[S,E],i=[n,t];o(r,i)?(k||(c.lineStart(),c.point(r[0],r[1])),c.point(i[0],i[1]),e||c.lineEnd()):e&&(c.lineStart(),c.point(n,t))}S=n,E=t,k=e}var y,M,x,b,_,w,S,E,k,A,N=c,q=Jt(),T={point:p,lineStart:m,lineEnd:d,polygonStart:function(){c=q,y=[],M=[]},polygonEnd:function(){c=N,(y=ya.merge(y)).length?(c.polygonStart(),Zt(y,u,l,h,c),c.polygonEnd()):s([n,t])&&(c.polygonStart(),c.lineStart(),h(null,null,1,c),c.lineEnd(),c.polygonEnd()),y=M=x=null}};return T}}function ue(n,t,e){if(Math.abs(t)<Qa)return 0>=n;var r=n/t;if(t>0){if(r>e[1])return!1;r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1;r<e[1]&&(e[1]=r)}return!0}function ae(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function oe(n){var t=0,e=Ka/3,r=be(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Ka/180,e=n[1]*Ka/180):[180*(t/Ka),180*(e/Ka)]},i}function ce(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),a-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),a=Math.sqrt(u)/i;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/i,V((u-(n*n+e*e)*i*i)/(2*i))]},e}function le(){function n(n,t){Wo+=i*n-r*t,r=n,i=t}var t,e,r,i;nc.point=function(u,a){nc.point=n,t=r=u,e=i=a},nc.lineEnd=function(){n(t,e)}}function se(n,t){Jo>n&&(Jo=n),n>Ko&&(Ko=n),Go>t&&(Go=t),t>Qo&&(Qo=t)}function fe(){function n(n,t){a.push("M",n,",",t,u)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function i(){a.push("Z")}var u=he(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return u=he(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function he(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function ge(n,t){Lo+=n,Ho+=t,++Fo}function pe(){function n(n,r){var i=n-t,u=r-e,a=Math.sqrt(i*i+u*u);Po+=a*(t+n)/2,Oo+=a*(e+r)/2,Yo+=a,ge(t=n,e=r)}var t,e;ec.point=function(r,i){ec.point=n,ge(t=r,e=i)}}function me(){ec.point=ge}function de(){function n(n,t){var e=n-r,u=t-i,a=Math.sqrt(e*e+u*u);Po+=a*(r+n)/2,Oo+=a*(i+t)/2,Yo+=a,a=i*n-r*t,Ro+=a*(r+n),Uo+=a*(i+t),Io+=3*a,ge(r=n,i=t)}var t,e,r,i;ec.point=function(u,a){ec.point=n,ge(t=r=u,e=i=a)},ec.lineEnd=function(){n(t,e)}}function ve(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,a,0,2*Ka)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function i(){o.point=t}function u(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:i,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=i,o.point=t},pointRadius:function(n){return a=n,o},result:s};return o}function ye(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function i(){M=0/0,S.point=a,t.lineStart()}function a(r,i){var a=zt([r,i]),o=n(r,i);e(M,x,y,b,_,w,M=o[0],x=o[1],y=r,b=a[0],_=a[1],w=a[2],u,t),t.point(M,x)}function o(){S.point=r,t.lineEnd()}function c(){i(),S.point=l,S.lineEnd=s}function l(n,t){a(f=n,h=t),g=M,p=x,m=b,d=_,v=w,S.point=a}function s(){e(M,x,y,b,_,w,g,p,f,m,d,v,u,t),S.lineEnd=o,o()}var f,h,g,p,m,d,v,y,M,x,b,_,w,S={point:r,lineStart:i,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=i}};return S}function e(t,u,a,o,c,l,s,f,h,g,p,m,d,v){var y=s-t,M=f-u,x=y*y+M*M;if(x>4*r&&d--){var b=o+g,_=c+p,w=l+m,S=Math.sqrt(b*b+_*_+w*w),E=Math.asin(w/=S),k=Math.abs(Math.abs(w)-1)<Qa?(a+h)/2:Math.atan2(_,b),A=n(k,E),N=A[0],q=A[1],T=N-t,C=q-u,z=M*T-y*C;(z*z/x>r||Math.abs((y*T+M*C)/x-.5)>.3||i>o*g+c*p+l*m)&&(e(t,u,a,o,c,l,N,q,k,b/=S,_/=S,w,d,v),v.point(N,q),e(N,q,k,b,_,w,s,f,h,g,p,m,d,v))}}var r=.5,i=Math.cos(30*to),u=16;return t.precision=function(n){return arguments.length?(u=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function Me(n){var t=ye(function(t,e){return n([t*eo,e*eo])});return function(n){return n=t(n),{point:function(t,e){n.point(t*to,e*to)},sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}}function xe(n){return be(function(){return n})()}function be(n){function t(n){return n=o(n[0]*to,n[1]*to),[n[0]*h+c,l-n[1]*h]}function e(n){return n=o.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*eo,n[1]*eo]}function r(){o=ae(a=Se(v,y,M),u);var n=u(m,d);return c=g-n[0]*h,l=p+n[1]*h,i()}function i(){return s&&(s.valid=!1,s=null),t}var u,a,o,c,l,s,f=ye(function(n,t){return n=u(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,m=0,d=0,v=0,y=0,M=0,x=Xo,b=mt,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=_e(a,x(f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Xo):re((_=+n)*to),i()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=null==n?mt:ie(n[0][0],n[0][1],n[1][0],n[1][1]),i()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(m=n[0]%360*to,d=n[1]%360*to,r()):[m*eo,d*eo]},t.rotate=function(n){return arguments.length?(v=n[0]%360*to,y=n[1]%360*to,M=n.length>2?n[2]%360*to:0,r()):[v*eo,y*eo,M*eo]},ya.rebind(t,f,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function _e(n,t){return{point:function(e,r){r=n(e*to,r*to),e=r[0],t.point(e>Ka?e-2*Ka:-Ka>e?e+2*Ka:e,r[1])},sphere:function(){t.sphere()},lineStart:function(){t.lineStart()},lineEnd:function(){t.lineEnd()},polygonStart:function(){t.polygonStart()},polygonEnd:function(){t.polygonEnd()}}}function we(n,t){return[n,t]}function Se(n,t,e){return n?t||e?ae(ke(n),Ae(t,e)):ke(n):t||e?Ae(t,e):we}function Ee(n){return function(t,e){return t+=n,[t>Ka?t-2*Ka:-Ka>t?t+2*Ka:t,e]}}function ke(n){var t=Ee(n);return t.invert=Ee(-n),t}function Ae(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+o*i;return[Math.atan2(c*u-s*a,o*r-l*i),V(s*u+c*a)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*u-c*a;return[Math.atan2(c*u+l*a,o*r+s*i),V(s*r-o*i)]},e}function Ne(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,a,o){null!=i?(i=qe(e,i),u=qe(e,u),(a>0?u>i:i>u)&&(i+=2*a*Ka)):(i=n+2*a*Ka,u=n);for(var c,l=a*t,s=i;a>0?s>u:u>s;s-=l)o.point((c=Pt([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function qe(n,t){var e=zt(t);e[0]-=n,Ft(e);var r=I(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Qa)%(2*Math.PI)}function Te(n,t,e){var r=ya.range(n,t-Qa,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function Ce(n,t,e){var r=ya.range(n,t-Qa,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function ze(n){return n.source}function De(n){return n.target}function je(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),a=Math.cos(r),o=Math.sin(r),c=i*Math.cos(n),l=i*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(B(r-t)+i*a*B(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,i=e*l+t*f,a=e*u+t*o;return[Math.atan2(i,r)*eo,Math.atan2(a,Math.sqrt(r*r+i*i))*eo]}:function(){return[n*eo,t*eo]};return p.distance=h,p}function Le(){function n(n,i){var u=Math.sin(i*=to),a=Math.cos(i),o=Math.abs((n*=to)-t),c=Math.cos(o);rc+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*u-e*a*c)*o),e*u+r*a*c),t=n,e=u,r=a}var t,e,r;ic.point=function(i,u){t=i*to,e=Math.sin(u*=to),r=Math.cos(u),ic.point=n},ic.lineEnd=function(){ic.point=ic.lineEnd=s}}function He(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),a=Math.cos(i);return[Math.atan2(n*u,r*a),Math.asin(r&&e*u/r)]},e}function Fe(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Ka/2)<Qa?0:a/Math.pow(i(t),u);return[e*Math.sin(u*n),a-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Ka/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),a=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=a-t,r=U(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(a/r,1/u))-Ka/2]},e):Oe}function Pe(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return Math.abs(i)<Qa?we:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-U(i)*Math.sqrt(n*n+e*e)]},e)}function Oe(n,t){return[n,Math.log(Math.tan(Ka/4+t/2))]}function Ye(n){var t,e=xe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=u.apply(e,arguments);if(a===e){if(t=null==n){var o=Ka*r(),c=i();u([[c[0]-o,c[1]-o],[c[0]+o,c[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Re(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function Ue(n){function t(t){function a(){l.push("M",u(n(s),o))}for(var c,l=[],s=[],f=-1,h=t.length,g=pt(e),p=pt(r);++f<h;)i.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(a(),s=[]);return s.length&&a(),l.length?l.join(""):null}var e=Ie,r=Ve,i=Xt,u=Xe,a=u.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?u=n:(u=sc.get(n)||Xe).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function Ie(n){return n[0]}function Ve(n){return n[1]}function Xe(n){return n.join("L")}function Ze(n){return Xe(n)+"Z"}function Be(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function $e(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function We(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function Je(n,t){return n.length<4?Xe(n):n[1]+Qe(n.slice(1,n.length-1),nr(n,t))}function Ge(n,t){return n.length<3?Xe(n):n[0]+Qe((n.push(n[0]),n),nr([n[n.length-2]].concat(n,[n[1]]),t))}function Ke(n,t){return n.length<3?Xe(n):n[0]+Qe(n,nr(n,t))}function Qe(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Xe(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],a=t[0],o=a,c=1;if(e&&(r+="Q"+(u[0]-2*a[0]/3)+","+(u[1]-2*a[1]/3)+","+u[0]+","+u[1],i=n[1],c=2),t.length>1){o=t[1],u=n[c],c++,r+="C"+(i[0]+a[0])+","+(i[1]+a[1])+","+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1];for(var l=2;l<t.length;l++,c++)u=n[c],o=t[l],r+="S"+(u[0]-o[0])+","+(u[1]-o[1])+","+u[0]+","+u[1]}if(e){var s=n[c];r+="Q"+(u[0]+2*o[0]/3)+","+(u[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function nr(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],a=n[1],o=1,c=n.length;++o<c;)e=u,u=a,a=n[o],r.push([i*(a[0]-e[0]),i*(a[1]-e[1])]);return r}function tr(n){if(n.length<3)return Xe(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],a=[i,i,i,(r=n[1])[0]],o=[u,u,u,r[1]],c=[i,",",u,"L",ur(gc,a),",",ur(gc,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),ar(c,a,o);return n.pop(),c.push("L",r),c.join("")}function er(n){if(n.length<4)return Xe(n);for(var t,e=[],r=-1,i=n.length,u=[0],a=[0];++r<3;)t=n[r],u.push(t[0]),a.push(t[1]);for(e.push(ur(gc,u)+","+ur(gc,a)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),a.shift(),a.push(t[1]),ar(e,u,a);return e.join("")}function rr(n){for(var t,e,r=-1,i=n.length,u=i+4,a=[],o=[];++r<4;)e=n[r%i],a.push(e[0]),o.push(e[1]);for(t=[ur(gc,a),",",ur(gc,o)],--r;++r<u;)e=n[r%i],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),ar(t,a,o);return t.join("")}function ir(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],a=n[0][1],o=n[e][0]-u,c=n[e][1]-a,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(u+i*o),r[1]=t*r[1]+(1-t)*(a+i*c);return tr(n)}function ur(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]
}function ar(n,t,e){n.push("C",ur(fc,t),",",ur(fc,e),",",ur(hc,t),",",ur(hc,e),",",ur(gc,t),",",ur(gc,e))}function or(n,t){return(t[1]-n[1])/(t[0]-n[0])}function cr(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],a=r[0]=or(i,u);++t<e;)r[t]=(a+(a=or(i=u,u=n[t+1])))/2;return r[t]=a,r}function lr(n){for(var t,e,r,i,u=[],a=cr(n),o=-1,c=n.length-1;++o<c;)t=or(n[o],n[o+1]),Math.abs(t)<1e-6?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),a[o]=i*e,a[o+1]=i*r));for(o=-1;++o<=c;)i=(n[Math.min(c,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),u.push([i||0,a[o]*i||0]);return u}function sr(n){return n.length<3?Xe(n):n[0]+Qe(n,lr(n))}function fr(n,t,e,r){var i,u,a,o,c,l,s;return i=r[n],u=i[0],a=i[1],i=r[t],o=i[0],c=i[1],i=r[e],l=i[0],s=i[1],(s-a)*(o-u)-(c-a)*(l-u)>0}function hr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function gr(n,t,e,r){var i=n[0],u=e[0],a=t[0]-i,o=r[0]-u,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(o*(c-l)-f*(i-u))/(f*a-o*s);return[i+h*a,c+h*s]}function pr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function mr(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&i.rightOf(t,n));return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[mc[n.side]]}},i={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,i=t.y-n.y,u=r>0?r:-r,a=i>0?i:-i;return e.c=n.x*r+n.y*i+.5*(r*r+i*i),u>a?(e.a=1,e.b=i/r,e.c/=r):(e.b=1,e.a=r/i,e.c/=i),e},intersect:function(n,t){var e=n.edge,r=t.edge;if(!e||!r||e.region.r==r.region.r)return null;var i=e.a*r.b-e.b*r.a;if(Math.abs(i)<1e-10)return null;var u,a,o=(e.c*r.b-r.c*e.b)/i,c=(r.c*e.a-e.c*r.a)/i,l=e.region.r,s=r.region.r;l.y<s.y||l.y==s.y&&l.x<s.x?(u=n,a=e):(u=t,a=r);var f=o>=a.region.r.x;return f&&"l"===u.side||!f&&"r"===u.side?null:{x:o,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,i=t.x>r.x;if(i&&"l"===n.side)return 1;if(!i&&"r"===n.side)return 0;if(1===e.a){var u=t.y-r.y,a=t.x-r.x,o=0,c=0;if(!i&&e.b<0||i&&e.b>=0?c=o=u>=e.b*a:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(o=1)),!o){var l=r.x-e.region.l.x;c=e.b*(a*a-u*u)<l*u*(1+2*a/l+e.b*e.b),e.b<0&&(c=!c)}}else{var s=e.c-e.a*t.x,f=t.y-s,h=t.x-r.x,g=s-r.y;c=f*f>h*h+g*g}return"l"===n.side?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[mc[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)}},u={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e;for(var r=0,i=u.list,a=i.length;a>r;r++){var o=i[r];if(!(n.ystar>o.ystar||n.ystar==o.ystar&&t.x>o.vertex.x))break}i.splice(r,0,n)},del:function(n){for(var t=0,e=u.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return 0===u.list.length},nextEvent:function(n){for(var t=0,e=u.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1];return null},min:function(){var n=u.list[0];return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return u.list.shift()}};r.init(),e.bottomSite=e.list.shift();for(var a,o,c,l,s,f,h,g,p,m,d,v,y,M=e.list.shift();;)if(u.empty()||(a=u.min()),M&&(u.empty()||M.y<a.y||M.y==a.y&&M.x<a.x))o=r.leftBound(M),c=r.right(o),h=r.rightRegion(o),v=i.bisect(h,M),f=r.createHalfEdge(v,"l"),r.insert(o,f),m=i.intersect(o,f),m&&(u.del(o),u.insert(o,m,i.distance(m,M))),o=f,f=r.createHalfEdge(v,"r"),r.insert(o,f),m=i.intersect(f,c),m&&u.insert(f,m,i.distance(m,M)),M=e.list.shift();else{if(u.empty())break;o=u.extractMin(),l=r.left(o),c=r.right(o),s=r.right(c),h=r.leftRegion(o),g=r.rightRegion(c),d=o.vertex,i.endPoint(o.edge,o.side,d),i.endPoint(c.edge,c.side,d),r.del(o),u.del(c),r.del(c),y="l",h.y>g.y&&(p=h,h=g,g=p,y="r"),v=i.bisect(h,g),f=r.createHalfEdge(v,y),r.insert(l,f),i.endPoint(v,mc[y],d),m=i.intersect(l,f),m&&(u.del(l),u.insert(l,m,i.distance(m,h))),m=i.intersect(f,s),m&&u.insert(f,m,i.distance(m,h))}for(o=r.right(r.leftEnd);o!=r.rightEnd;o=r.right(o))t(o.edge)}function dr(n){return n.x}function vr(n){return n.y}function yr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function Mr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var a=.5*(e+i),o=.5*(r+u),c=t.nodes;c[0]&&Mr(n,c[0],e,r,a,o),c[1]&&Mr(n,c[1],a,r,i,o),c[2]&&Mr(n,c[2],e,o,a,u),c[3]&&Mr(n,c[3],a,o,i,u)}}function xr(n,t){n=ya.rgb(n),t=ya.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,a=t.g-r,o=t.b-i;return function(n){return"#"+ct(Math.round(e+u*n))+ct(Math.round(r+a*n))+ct(Math.round(i+o*n))}}function br(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Sr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function _r(n,t){return t-=n=+n,function(e){return n+t*e}}function wr(n,t){var e,r,i,u,a,o=0,c=0,l=[],s=[];for(n+="",t+="",dc.lastIndex=0,r=0;e=dc.exec(t);++r)e.index&&l.push(t.substring(o,c=e.index)),s.push({i:l.length,x:e[0]}),l.push(null),o=dc.lastIndex;for(o<t.length&&l.push(t.substring(o)),r=0,u=s.length;(e=dc.exec(n))&&u>r;++r)if(a=s[r],a.x==e[0]){if(a.i)if(null==l[a.i+1])for(l[a.i-1]+=a.x,l.splice(a.i,1),i=r+1;u>i;++i)s[i].i--;else for(l[a.i-1]+=a.x+l[a.i+1],l.splice(a.i,2),i=r+1;u>i;++i)s[i].i-=2;else if(null==l[a.i+1])l[a.i]=a.x;else for(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1),i=r+1;u>i;++i)s[i].i--;s.splice(r,1),u--,r--}else a.x=_r(parseFloat(e[0]),parseFloat(a.x));for(;u>r;)a=s.pop(),null==l[a.i+1]?l[a.i]=a.x:(l[a.i]=a.x+l[a.i+1],l.splice(a.i+1,1)),u--;return 1===l.length?null==l[0]?(a=s[0].x,function(n){return a(n)+""}):function(){return t}:function(n){for(r=0;u>r;++r)l[(a=s[r]).i]=a.x(n);return l.join("")}}function Sr(n,t){for(var e,r=ya.interpolators.length;--r>=0&&!(e=ya.interpolators[r](n,t)););return e}function Er(n,t){var e,r=[],i=[],u=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(Sr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;a>e;++e)i[e]=t[e];return function(n){for(e=0;o>e;++e)i[e]=r[e](n);return i}}function kr(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Ar(n){return function(t){return 1-n(1-t)}}function Nr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function qr(n){return n*n}function Tr(n){return n*n*n}function Cr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function zr(n){return function(t){return Math.pow(t,n)}}function Dr(n){return 1-Math.cos(n*Ka/2)}function jr(n){return Math.pow(2,10*(n-1))}function Lr(n){return 1-Math.sqrt(1-n*n)}function Hr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/(2*Ka)*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,10*-r)*Math.sin(2*(r-e)*Ka/t)}}function Fr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Pr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Or(n,t){n=ya.hcl(n),t=ya.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,a=t.c-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return J(e+u*n,r+a*n,i+o*n)+""}}function Yr(n,t){n=ya.hsl(n),t=ya.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,a=t.s-r,o=t.l-i;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return R(e+u*n,r+a*n,i+o*n)+""}}function Rr(n,t){n=ya.lab(n),t=ya.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,a=t.a-r,o=t.b-i;return function(n){return Q(e+u*n,r+a*n,i+o*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Ir(n){var t=[n.a,n.b],e=[n.c,n.d],r=Xr(t),i=Vr(t,e),u=Xr(Zr(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*eo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*eo:0}function Vr(n,t){return n[0]*t[0]+n[1]*t[1]}function Xr(n){var t=Math.sqrt(Vr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Zr(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Br(n,t){var e,r=[],i=[],u=ya.transform(n),a=ya.transform(t),o=u.translate,c=a.translate,l=u.rotate,s=a.rotate,f=u.skew,h=a.skew,g=u.scale,p=a.scale;return o[0]!=c[0]||o[1]!=c[1]?(r.push("translate(",null,",",null,")"),i.push({i:1,x:_r(o[0],c[0])},{i:3,x:_r(o[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),i.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:_r(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?i.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:_r(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),i.push({i:e-4,x:_r(g[0],p[0])},{i:e-2,x:_r(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=i.length,function(n){for(var t,u=-1;++u<e;)r[(t=i[u]).i]=t.x(n);return r.join("")}}function $r(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Wr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),a=null;i===u;)a=i,i=e.pop(),u=r.pop();return a}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,a=n.nodes,o=a.length,c=-1;++c<o;)u=a[c],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ya.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ci,n}function ui(n){return n.children}function ai(n){return n.value}function oi(n,t){return t.value-n.value}function ci(n){return ya.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function li(n){return n.x}function si(n){return n.y}function fi(n,t,e){n.y0=t,n.y=e}function hi(n){return ya.range(n.length)}function gi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function pi(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function mi(n){return n.reduce(di,0)}function di(n,t){return n+t[1]}function vi(n,t){return yi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function yi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function Mi(n){return[ya.min(n),ya.max(n)]}function xi(n,t){return n.parent==t.parent?1:2}function bi(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function _i(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function wi(n,t){var e=n.children;if(e&&(i=e.length))for(var r,i,u=-1;++u<i;)t(r=wi(e[u],t),n)>0&&(n=r);return n}function Si(n,t){return n.x-t.x}function Ei(n,t){return t.x-n.x}function ki(n,t){return n.depth-t.depth}function Ai(n,t){function e(n,r){var i=n.children;if(i&&(a=i.length))for(var u,a,o=null,c=-1;++c<a;)u=i[c],e(u,o),o=u;t(n,r)}e(n,null)}function Ni(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function qi(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function Ti(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function Ci(n,t){return n.value-t.value}function zi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Di(n,t){n._pack_next=t,t._pack_prev=n}function ji(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Li(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,i,u,a,o,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Hi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(u=e[2],Oi(r,i,u),t(u),zi(r,u),r._pack_prev=u,zi(u,i),i=r._pack_next,a=3;l>a;a++){Oi(r,i,u=e[a]);var p=0,m=1,d=1;for(o=i._pack_next;o!==i;o=o._pack_next,m++)if(ji(o,u)){p=1;break}if(1==p)for(c=r._pack_prev;c!==o._pack_prev&&!ji(c,u);c=c._pack_prev,d++);p?(d>m||m==d&&i.r<r.r?Di(r,i=o):Di(r=c,i),a--):(zi(r,u),i=u,t(u))}var v=(s+f)/2,y=(h+g)/2,M=0;for(a=0;l>a;a++)u=e[a],u.x-=v,u.y-=y,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Fi)}}function Hi(n){n._pack_next=n._pack_prev=n}function Fi(n){delete n._pack_next,delete n._pack_prev}function Pi(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,a=i.length;++u<a;)Pi(i[u],t,e,r)}function Oi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var a=t.r+e.r,o=i*i+u*u;a*=a,r*=r;var c=.5+(r-a)/(2*o),l=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+c*i+l*u,e.y=n.y+c*u-l*i}else e.x=n.x+r,e.y=n.y}function Yi(n){return 1+ya.max(n,function(n){return n.y})}function Ri(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ui(n){var t=n.children;return t&&t.length?Ui(t[0]):n}function Ii(n){var t,e=n.children;return e&&(t=e.length)?Ii(e[t-1]):n}function Vi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Xi(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Zi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Bi(n){return n.rangeExtent?n.rangeExtent():Zi(n.range())}function $i(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Wi(n,t){var e,r=0,i=n.length-1,u=n[r],a=n[i];return u>a&&(e=r,r=i,i=e,e=u,u=a,a=e),n[r]=t.floor(u),n[i]=t.ceil(a),n}function Ji(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:kc}function Gi(n,t,e,r){var i=[],u=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)i.push(e(n[a-1],n[a])),u.push(r(t[a-1],t[a]));return function(t){var e=ya.bisect(n,t,1,o)-1;return u[e](i[e](t))}}function Ki(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Gi:$i,c=r?Wr:$r;return a=i(n,t,c,e),o=i(t,n,c,Sr),u}function u(n){return a(n)}var a,o;return u.invert=function(n){return o(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return ru(n,t)},u.tickFormat=function(t,e){return iu(n,t,e)},u.nice=function(t){return nu(n,t),i()},u.copy=function(){return Ki(n,t,e,r)},i()}function Qi(n,t){return ya.rebind(n,t,"range","rangeRound","interpolate","clamp")}function nu(n,t){return Wi(n,Ji(t?eu(n,t)[2]:tu(n)))}function tu(n){var t=Zi(n),e=t[1]-t[0];return Math.pow(10,Math.round(Math.log(e)/Math.LN10)-1)}function eu(n,t){var e=Zi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function ru(n,t){return ya.range.apply(ya,eu(n,t))}function iu(n,t,e){var r=-Math.floor(Math.log(eu(n,t)[2])/Math.LN10+.01);return ya.format(e?e.replace(wo,function(n,t,e,i,u,a,o,c,l,s){return[t,e,i,u,a,o,c,l||"."+(r-2*("%"===s)),s].join("")}):",."+r+"f")}function uu(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(i(t))}return a.invert=function(t){return u(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),a):t},a.nice=function(){var t=Wi(r.map(i),e?Math:Nc);return n.domain(t),r=t.map(u),a},a.ticks=function(){var n=Zi(r),a=[],o=n[0],c=n[1],l=Math.floor(i(o)),s=Math.ceil(i(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)a.push(u(l)*h);a.push(u(l))}else for(a.push(u(l));l++<s;)for(var h=f-1;h>0;h--)a.push(u(l)*h);for(l=0;a[l]<o;l++);for(s=a.length;a[s-1]>c;s--);a=a.slice(l,s)}return a},a.tickFormat=function(n,t){if(!arguments.length)return Ac;arguments.length<2?t=Ac:"function"!=typeof t&&(t=ya.format(t));var r,o=Math.max(.1,n/a.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/u(c(i(n)+r))<=o?t(n):""}},a.copy=function(){return uu(n.copy(),t,e,r)},Qi(a,n)}function au(n,t,e){function r(t){return n(i(t))}var i=ou(t),u=ou(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return ru(e,n)},r.tickFormat=function(n,t){return iu(e,n,t)},r.nice=function(n){return r.domain(nu(e,n))},r.exponent=function(a){return arguments.length?(i=ou(t=a),u=ou(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return au(n.copy(),t,e)},Qi(r,n)}function ou(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function cu(n,t){function e(t){return a[((u.get(t)||u.set(t,n.push(t)))-1)%a.length]}function r(t,e){return ya.range(n.length).map(function(n){return t+e*n})}var u,a,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new i;for(var a,o=-1,c=r.length;++o<c;)u.has(a=r[o])||u.set(a,n.push(a));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(a=n,o=0,t={t:"range",a:arguments},e):a},e.rangePoints=function(i,u){arguments.length<2&&(u=0);var c=i[0],l=i[1],s=(l-c)/(Math.max(1,n.length-1)+u);return a=r(n.length<2?(c+l)/2:c+s*u/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],s=i[l-0],f=i[1-l],h=(f-s)/(n.length-u+2*c);return a=r(s+h*c,h),l&&a.reverse(),o=h*(1-u),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,u,c){arguments.length<2&&(u=0),arguments.length<3&&(c=u);var l=i[1]<i[0],s=i[l-0],f=i[1-l],h=Math.floor((f-s)/(n.length-u+2*c)),g=f-s-(n.length-u)*h;return a=r(s+Math.round(g/2),h),l&&a.reverse(),o=Math.round(h*(1-u)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Zi(t.a[0])},e.copy=function(){return cu(n,t)},e.domain(n)}function lu(n,t){function e(){var e=0,u=t.length;for(i=[];++e<u;)i[e-1]=ya.quantile(n,e/u);return r}function r(n){return isNaN(n=+n)?void 0:t[ya.bisect(i,n)]}var i;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(ya.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?i[e-1]:n[0],e<i.length?i[e]:n[n.length-1]]},r.copy=function(){return lu(n,t)},e()}function su(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),a=e.length-1,r}var u,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/u+n,[t,t+1/u]},r.copy=function(){return su(n,t,e)},i()}function fu(n,t){function e(e){return e>=e?t[ya.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return fu(n,t)},e}function hu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return ru(n,t)},t.tickFormat=function(t,e){return iu(n,t,e)},t.copy=function(){return hu(n)},t}function gu(n){return n.innerRadius}function pu(n){return n.outerRadius}function mu(n){return n.startAngle}function du(n){return n.endAngle}function vu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]+Dc,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function yu(n){function t(t){function c(){m.push("M",o(n(v),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,m=[],d=[],v=[],y=-1,M=t.length,x=pt(e),b=pt(i),_=e===r?function(){return g}:pt(r),w=i===u?function(){return p}:pt(u);++y<M;)a.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),v.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],v=[]);return d.length&&c(),m.length?m.join(""):null}var e=Ie,r=Ie,i=0,u=Ve,a=Xt,o=Xe,c=o.key,l=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?o=n:(o=sc.get(n)||Xe).key,l=o.reverse||o,s=o.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Mu(n){return n.radius}function xu(n){return[n.x,n.y]}function bu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+Dc;return[e*Math.cos(r),e*Math.sin(r)]}}function _u(){return 64}function wu(){return"circle"}function Su(n){var t=Math.sqrt(n/Ka);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Eu(n,t){return La(n,Yc),n.id=t,n}function ku(n,t,e,r){var i=n.id;return T(n,"function"==typeof e?function(n,u,a){n.__transition__[i].tween.set(t,r(e.call(n,n.__data__,u,a)))}:(e=r(e),function(n){n.__transition__[i].tween.set(t,e)}))}function Au(n){return null==n&&(n=""),function(){this.textContent=n}}function Nu(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),a=u[e];if(!a){var o=r.time;a=u[e]={tween:new i,time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,ya.timer(function(r){function i(r){return u.active>e?l():(u.active=e,a.event&&a.event.start.call(n,s,t),a.tween.forEach(function(e,r){(r=r.call(n,s,t))&&p.push(r)}),c(r)?1:(xt(c,0,o),void 0))}function c(r){if(u.active!==e)return l();for(var i=(r-h)/g,o=f(i),c=p.length;c>0;)p[--c].call(n,o);return i>=1?(l(),a.event&&a.event.end.call(n,s,t),1):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var s=n.__data__,f=a.ease,h=a.delay,g=a.duration,p=[];return r>=h?i(r):(xt(i,h,o),void 0)},0,o)}}function qu(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Tu(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Cu(n,t,e){if(r=[],e&&t.length>1){for(var r,i,u,a=Zi(n.domain()),o=-1,c=t.length,l=(t[1]-t[0])/++e;++o<c;)for(i=e;--i>0;)(u=+t[o]-i*l)>=a[0]&&r.push(u);for(--o,i=0;++i<e&&(u=+t[o]+i*l)<a[1];)r.push(u)}return r}function zu(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Du(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new Zc(e-1)),1),e}function u(n,e){return t(n=new Zc(+n),e),n}function a(n,r,u){var a=i(n),o=[];if(u>1)for(;r>a;)e(a)%u||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{Zc=zu;var r=new zu;return r._=n,a(r,t,e)}finally{Zc=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=a;var c=n.utc=ju(n);return c.floor=c,c.round=ju(r),c.ceil=ju(i),c.offset=ju(u),c.range=o,n}function ju(n){return function(t,e){try{Zc=zu;var r=new zu;return r._=t,n(r,e)._}finally{Zc=Date}}}function Lu(n,t,e,r){for(var i,u,a=0,o=t.length,c=e.length;o>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(u=gl[t.charAt(a++)],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function Hu(n){return new RegExp("^(?:"+n.map(ya.requote).join("|")+")","i")}function Fu(n){for(var t=new i,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Pu(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Ou(n,t,e){il.lastIndex=0;var r=il.exec(t.substring(e));return r?(n.w=ul.get(r[0].toLowerCase()),e+r[0].length):-1}function Yu(n,t,e){el.lastIndex=0;var r=el.exec(t.substring(e));return r?(n.w=rl.get(r[0].toLowerCase()),e+r[0].length):-1}function Ru(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Uu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Iu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Vu(n,t,e){cl.lastIndex=0;var r=cl.exec(t.substring(e));return r?(n.m=ll.get(r[0].toLowerCase()),e+r[0].length):-1}function Xu(n,t,e){al.lastIndex=0;var r=al.exec(t.substring(e));return r?(n.m=ol.get(r[0].toLowerCase()),e+r[0].length):-1}function Zu(n,t,e){return Lu(n,hl.c.toString(),t,e)}function Bu(n,t,e){return Lu(n,hl.x.toString(),t,e)}function $u(n,t,e){return Lu(n,hl.X.toString(),t,e)}function Wu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Ju(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.y=Gu(+r[0]),e+r[0].length):-1}function Gu(n){return n+(n>68?1900:2e3)}function Ku(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qu(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function na(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function ta(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ea(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ra(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ia(n,t,e){pl.lastIndex=0;var r=pl.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ua(n,t,e){var r=ml.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function aa(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),i=Math.abs(t)%60;return e+Pu(r,"0",2)+Pu(i,"0",2)}function oa(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ca(n){return n.toISOString()}function la(n,t,e){function r(t){return n(t)}return r.invert=function(t){return sa(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(sa)},r.nice=function(n){return r.domain(Wi(r.domain(),n))},r.ticks=function(e,i){var u=Zi(r.domain());if("function"!=typeof e){var a=u[1]-u[0],o=a/e,c=ya.bisect(vl,o);if(c==vl.length)return t.year(u,e);if(!c)return n.ticks(e).map(sa);o/vl[c-1]<vl[c]/o&&--c,e=t[c],i=e[1],e=e[0].range}return e(u[0],new Date(+u[1]+1),i)},r.tickFormat=function(){return e},r.copy=function(){return la(n.copy(),t,e)},Qi(r,n)}function sa(n){return new Date(n)}function fa(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function ha(n){var t=new Date(n,0,1);return t.setFullYear(n),t}function ga(n){var t=n.getFullYear(),e=ha(t),r=ha(t+1);return t+(n-e)/(r-e)}function pa(n){var t=new Date(Date.UTC(n,0,1));return t.setUTCFullYear(n),t}function ma(n){var t=n.getUTCFullYear(),e=pa(t),r=pa(t+1);return t+(n-e)/(r-e)}function da(n){return JSON.parse(n.responseText)}function va(n){var t=Ma.createRange();return t.selectNode(Ma.body),t.createContextualFragment(n.responseText)}var ya={version:"3.2.8"};Date.now||(Date.now=function(){return+new Date});var Ma=document,xa=Ma.documentElement,ba=window;try{Ma.createElement("div").style.setProperty("opacity",0,"")}catch(_a){var wa=ba.Element.prototype,Sa=wa.setAttribute,Ea=wa.setAttributeNS,ka=ba.CSSStyleDeclaration.prototype,Aa=ka.setProperty;wa.setAttribute=function(n,t){Sa.call(this,n,t+"")},wa.setAttributeNS=function(n,t,e){Ea.call(this,n,t,e+"")},ka.setProperty=function(n,t,e){Aa.call(this,n,t+"",e)}}ya.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},ya.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ya.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u&&!(null!=(e=n[i])&&e>=e);)e=void 0;for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ya.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u&&!(null!=(e=n[i])&&e>=e);)e=void 0;for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u&&!(null!=(e=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ya.extent=function(n,t){var e,r,i,u=-1,a=n.length;if(1===arguments.length){for(;++u<a&&!(null!=(e=i=n[u])&&e>=e);)e=i=void 0;for(;++u<a;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<a&&!(null!=(e=i=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<a;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ya.sum=function(n,t){var e,r=0,i=n.length,u=-1;if(1===arguments.length)for(;++u<i;)isNaN(e=+n[u])||(r+=e);else for(;++u<i;)isNaN(e=+t.call(n,n[u],u))||(r+=e);return r},ya.mean=function(t,e){var r,i=t.length,u=0,a=-1,o=0;if(1===arguments.length)for(;++a<i;)n(r=t[a])&&(u+=(r-u)/++o);else for(;++a<i;)n(r=e.call(t,t[a],a))&&(u+=(r-u)/++o);return o?u:void 0},ya.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ya.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?ya.quantile(t.sort(ya.ascending),.5):void 0},ya.bisector=function(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n.call(t,t[u],u)<e?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;e<n.call(t,t[u],u)?i=u:r=u+1}return r}}};var Na=ya.bisector(function(n){return n});ya.bisectLeft=Na.left,ya.bisect=ya.bisectRight=Na.right,ya.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},ya.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ya.zip=function(){if(!(i=arguments.length))return[];for(var n=-1,e=ya.min(arguments,t),r=new Array(e);++n<e;)for(var i,u=-1,a=r[n]=new Array(i);++u<i;)a[u]=arguments[u][n];return r},ya.transpose=function(n){return ya.zip.apply(ya,n)},ya.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ya.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ya.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ya.merge=function(n){return Array.prototype.concat.apply([],n)},ya.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var i,u=[],a=e(Math.abs(r)),o=-1;if(n*=a,t*=a,r*=a,0>r)for(;(i=n+r*++o)>t;)u.push(i/a);else for(;(i=n+r*++o)<t;)u.push(i/a);return u},ya.map=function(n){var t=new i;if(n instanceof i)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(i,{has:function(n){return qa+n in this},get:function(n){return this[qa+n]},set:function(n,t){return this[qa+n]=t},remove:function(n){return n=qa+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];
return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===Ta&&n.call(this,t.substring(1),this[t])}});var qa="\0",Ta=qa.charCodeAt(0);ya.nest=function(){function n(t,o,c){if(c>=a.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,m=a[c++],d=new i;++g<p;)(h=d.get(l=m(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=a.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,u={},a=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ya.map,e,0),0)},u.key=function(n){return a.push(n),u},u.sortKeys=function(n){return o[a.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ya.set=function(n){var t=new u;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(u,{has:function(n){return qa+n in this},add:function(n){return this[qa+n]=!0,n},remove:function(n){return n=qa+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===Ta&&n.call(this,t.substring(1))}}),ya.behavior={},ya.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=a(n,t,t[e]);return n};var Ca=["webkit","ms","moz","Moz","o","O"],za=l;try{za(xa.childNodes)[0].nodeType}catch(Da){za=c}ya.dispatch=function(){for(var n=new f,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=h(n);return n},f.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ya.event=null,ya.requote=function(n){return n.replace(ja,"\\$&")};var ja=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,La={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Ha=function(n,t){return t.querySelector(n)},Fa=function(n,t){return t.querySelectorAll(n)},Pa=xa[o(xa,"matchesSelector")],Oa=function(n,t){return Pa.call(n,t)};"function"==typeof Sizzle&&(Ha=function(n,t){return Sizzle(n,t)[0]||null},Fa=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},Oa=Sizzle.matchesSelector),ya.selection=function(){return Ia};var Ya=ya.selection.prototype=[];Ya.select=function(n){var t,e,r,i,u=[];n=v(n);for(var a=-1,o=this.length;++a<o;){u.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var c=-1,l=r.length;++c<l;)(i=r[c])?(t.push(e=n.call(i,i.__data__,c,a)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return d(u)},Ya.selectAll=function(n){var t,e,r=[];n=y(n);for(var i=-1,u=this.length;++i<u;)for(var a=this[i],o=-1,c=a.length;++o<c;)(e=a[o])&&(r.push(t=za(n.call(e,e.__data__,o,i))),t.parentNode=e);return d(r)};var Ra={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ya.ns={prefix:Ra,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Ra.hasOwnProperty(e)?{space:Ra[e],local:n}:n}},Ya.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ya.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},Ya.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!b(n[i]).test(t))return!1;return!0}for(t in n)this.each(_(t,n[t]));return this}return this.each(_(n,t))},Ya.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(S(e,n[e],t));return this}if(2>r)return ba.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(S(n,t,e))},Ya.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},Ya.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Ya.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Ya.append=function(n){return n=k(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Ya.insert=function(n,t){return n=k(n),t=v(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments))})},Ya.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},Ya.data=function(n,t){function e(n,e){var r,u,a,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),m=new Array(o);if(t){var d,v=new i,y=new i,M=[];for(r=-1;++r<o;)d=t.call(u=n[r],u.__data__,r),v.has(d)?m[r]=u:v.set(d,u),M.push(d);for(r=-1;++r<f;)d=t.call(e,a=e[r],r),(u=v.get(d))?(g[r]=u,u.__data__=a):y.has(d)||(p[r]=A(a)),y.set(d,a),v.remove(d);for(r=-1;++r<o;)v.has(M[r])&&(m[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],a=e[r],u?(u.__data__=a,g[r]=u):p[r]=A(a);for(;f>r;++r)p[r]=A(e[r]);for(;o>r;++r)m[r]=n[r]}p.update=g,p.parentNode=g.parentNode=m.parentNode=n.parentNode,c.push(p),l.push(g),s.push(m)}var r,u,a=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++a<o;)(u=r[a])&&(n[a]=u.__data__);return n}var c=C([]),l=d([]),s=d([]);if("function"==typeof n)for(;++a<o;)e(r=this[a],n.call(r,r.parentNode.__data__,a));else for(;++a<o;)e(r=this[a],n);return l.enter=function(){return c},l.exit=function(){return s},l},Ya.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Ya.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=N(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return d(i)},Ya.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Ya.sort=function(n){n=q.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Ya.each=function(n){return T(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Ya.call=function(n){var t=za(arguments);return n.apply(t[0]=this,t),this},Ya.empty=function(){return!this.node()},Ya.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Ya.size=function(){var n=0;return this.each(function(){++n}),n};var Ua=[];ya.selection.enter=C,ya.selection.enter.prototype=Ua,Ua.append=Ya.append,Ua.empty=Ya.empty,Ua.node=Ya.node,Ua.call=Ya.call,Ua.size=Ya.size,Ua.select=function(n){for(var t,e,r,i,u,a=[],o=-1,c=this.length;++o<c;){r=(i=this[o]).update,a.push(t=[]),t.parentNode=i.parentNode;for(var l=-1,s=i.length;++l<s;)(u=i[l])?(t.push(r[l]=e=n.call(i.parentNode,u.__data__,l,o)),e.__data__=u.__data__):t.push(null)}return d(a)},Ua.insert=function(n,t){return arguments.length<2&&(t=z(this)),Ya.insert.call(this,n,t)},Ya.transition=function(){for(var n,t,e=Hc||++Rc,r=[],i=Fc||{time:Date.now(),ease:Cr,delay:0,duration:250},u=-1,a=this.length;++u<a;){r.push(n=[]);for(var o=this[u],c=-1,l=o.length;++c<l;)(t=o[c])&&Nu(t,c,e,i),n.push(t)}return Eu(r,e)},ya.select=function(n){var t=["string"==typeof n?Ha(n,Ma):n];return t.parentNode=xa,d([t])},ya.selectAll=function(n){var t=za("string"==typeof n?Fa(n,Ma):n);return t.parentNode=xa,d([t])};var Ia=ya.select(xa);Ya.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(D(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(D(n,t,e))};var Va=ya.map({mouseenter:"mouseover",mouseleave:"mouseout"});Va.forEach(function(n){"on"+n in Ma&&Va.remove(n)});var Xa=o(xa.style,"userSelect"),Za=0;ya.mouse=function(n){return F(n,p())};var Ba=/WebKit/.test(ba.navigator.userAgent)?-1:0;ya.touches=function(n,t){return arguments.length<2&&(t=p().touches),t?za(t).map(function(t){var e=F(n,t);return e.identifier=t.identifier,e}):[]},ya.behavior.drag=function(){function n(){this.on("mousedown.drag",a).on("touchstart.drag",o)}function t(){return ya.event.changedTouches[0].identifier}function e(n,t){return ya.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function a(){if(!s)return o();var n=t(s,g),e=n[0]-m[0],r=n[1]-m[1];d|=e|r,m=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function o(){v.on(e+"."+p,null).on(r+"."+p,null),y(d&&ya.event.target===h),f({type:"dragend"})}var c,l=this,s=l.parentNode,f=i.of(l,arguments),h=ya.event.target,g=n(),p=null==g?"drag":"drag-"+g,m=t(s,g),d=0,v=ya.select(ba).on(e+"."+p,a).on(r+"."+p,o),y=H();u?(c=u.apply(l,arguments),c=[c.x-m[0],c.y-m[1]]):c=[0,0],f({type:"dragstart"})}}var i=m(n,"drag","dragstart","dragend"),u=null,a=r(s,ya.mouse,"mousemove","mouseup"),o=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},ya.rebind(n,i,"on")},ya.behavior.zoom=function(){function n(){this.on(w,o).on(Ja+".zoom",l).on(S,s).on("dblclick.zoom",f).on(k,c)}function t(n){return[(n[0]-x[0])/b,(n[1]-x[1])/b]}function e(n){return[n[0]*b+x[0],n[1]*b+x[1]]}function r(n){b=Math.max(_[0],Math.min(_[1],n))}function i(n,t){t=e(t),x[0]+=n[0]-t[0],x[1]+=n[1]-t[1]}function u(){v&&v.domain(d.range().map(function(n){return(n-x[0])/b}).map(d.invert)),M&&M.domain(y.range().map(function(n){return(n-x[1])/b}).map(y.invert))}function a(n){u(),n({type:"zoom",scale:b,translate:x})}function o(){function n(){c=1,i(ya.mouse(r),f),a(u)}function e(){l.on(S,ba===r?s:null).on(E,null),h(c&&ya.event.target===o)}var r=this,u=q.of(r,arguments),o=ya.event.target,c=0,l=ya.select(ba).on(S,n).on(E,e),f=t(ya.mouse(r)),h=H()}function c(){function n(){var n=ya.touches(h);return f=b,s={},n.forEach(function(n){s[n.identifier]=t(n)}),n}function e(){var t=Date.now(),e=n();if(1===e.length){if(500>t-p){var u=e[0],o=s[u.identifier];r(2*b),i(u,o),g(),a(m)}p=t}else if(e.length>1){var u=e[0],c=e[1],l=u[0]-c[0],f=u[1]-c[1];d=l*l+f*f}}function u(){var n=ya.touches(h),t=n[0],e=s[t.identifier];if(u=n[1]){var u,o=s[u.identifier],c=ya.event.scale;if(null==c){var l=(l=u[0]-t[0])*l+(l=u[1]-t[1])*l;c=d&&Math.sqrt(l/d)}t=[(t[0]+u[0])/2,(t[1]+u[1])/2],e=[(e[0]+o[0])/2,(e[1]+o[1])/2],r(c*f)}p=null,i(t,e),a(m)}function l(){ya.event.touches.length?n():(v.on(A,null).on(N,null),y.on(w,o).on(k,c),M())}var s,f,h=this,m=q.of(h,arguments),d=0,v=ya.select(ba).on(A,u).on(N,l),y=ya.select(h).on(w,null).on(k,e),M=H();e()}function l(){g(),h||(h=t(ya.mouse(this))),r(Math.pow(2,.002*$a())*b),i(ya.mouse(this),h),a(q.of(this,arguments))}function s(){h=null}function f(){var n=ya.mouse(this),e=t(n),u=Math.log(b)/Math.LN2;r(Math.pow(2,ya.event.shiftKey?Math.ceil(u)-1:Math.floor(u)+1)),i(n,e),a(q.of(this,arguments))}var h,p,d,v,y,M,x=[0,0],b=1,_=Wa,w="mousedown.zoom",S="mousemove.zoom",E="mouseup.zoom",k="touchstart.zoom",A="touchmove.zoom",N="touchend.zoom",q=m(n,"zoom");return n.translate=function(t){return arguments.length?(x=t.map(Number),u(),n):x},n.scale=function(t){return arguments.length?(b=+t,u(),n):b},n.scaleExtent=function(t){return arguments.length?(_=null==t?Wa:t.map(Number),n):_},n.x=function(t){return arguments.length?(v=t,d=t.copy(),x=[0,0],b=1,n):v},n.y=function(t){return arguments.length?(M=t,y=t.copy(),x=[0,0],b=1,n):M},ya.rebind(n,q,"on")};var $a,Wa=[0,1/0],Ja="onwheel"in Ma?($a=function(){return-ya.event.deltaY*(ya.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Ma?($a=function(){return ya.event.wheelDelta},"mousewheel"):($a=function(){return-ya.event.detail},"MozMousePixelScroll");P.prototype.toString=function(){return this.rgb()+""},ya.hsl=function(n,t,e){return 1===arguments.length?n instanceof Y?O(n.h,n.s,n.l):lt(""+n,st,O):O(+n,+t,+e)};var Ga=Y.prototype=new P;Ga.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),O(this.h,this.s,this.l/n)},Ga.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),O(this.h,this.s,n*this.l)},Ga.rgb=function(){return R(this.h,this.s,this.l)};var Ka=Math.PI,Qa=1e-6,no=Qa*Qa,to=Ka/180,eo=180/Ka;ya.hcl=function(n,t,e){return 1===arguments.length?n instanceof W?$(n.h,n.c,n.l):n instanceof K?nt(n.l,n.a,n.b):nt((n=ft((n=ya.rgb(n)).r,n.g,n.b)).l,n.a,n.b):$(+n,+t,+e)};var ro=W.prototype=new P;ro.brighter=function(n){return $(this.h,this.c,Math.min(100,this.l+io*(arguments.length?n:1)))},ro.darker=function(n){return $(this.h,this.c,Math.max(0,this.l-io*(arguments.length?n:1)))},ro.rgb=function(){return J(this.h,this.c,this.l).rgb()},ya.lab=function(n,t,e){return 1===arguments.length?n instanceof K?G(n.l,n.a,n.b):n instanceof W?J(n.l,n.c,n.h):ft((n=ya.rgb(n)).r,n.g,n.b):G(+n,+t,+e)};var io=18,uo=.95047,ao=1,oo=1.08883,co=K.prototype=new P;co.brighter=function(n){return G(Math.min(100,this.l+io*(arguments.length?n:1)),this.a,this.b)},co.darker=function(n){return G(Math.max(0,this.l-io*(arguments.length?n:1)),this.a,this.b)},co.rgb=function(){return Q(this.l,this.a,this.b)},ya.rgb=function(n,t,e){return 1===arguments.length?n instanceof ot?at(n.r,n.g,n.b):lt(""+n,at,R):at(~~n,~~t,~~e)};var lo=ot.prototype=new P;lo.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),at(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):at(i,i,i)},lo.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),at(~~(n*this.r),~~(n*this.g),~~(n*this.b))},lo.hsl=function(){return st(this.r,this.g,this.b)},lo.toString=function(){return"#"+ct(this.r)+ct(this.g)+ct(this.b)};var so=ya.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});so.forEach(function(n,t){so.set(n,it(t))}),ya.functor=pt,ya.xhr=dt(mt),ya.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var a=ya.xhr(n,t,u);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:i(n)):e},a.row(e)}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function a(t){return t.map(o).join(n)}function o(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(s>=c)return a;if(i)return i=!1,u;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(i=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),o=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==l)continue;return n.substring(t,s-o)}return n.substring(t)}for(var r,i,u={},a={},o=[],c=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==u&&r!==a;)h.push(r),r=e();(!t||(h=t(h,f++)))&&o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new u,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(a).join("\n")},e},ya.csv=ya.dsv(",","text/csv"),ya.tsv=ya.dsv("	","text/tab-separated-values");var fo,ho,go,po,mo,vo=ba[o(ba,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ya.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={callback:n,time:i,next:null};ho?ho.next=u:fo=u,ho=u,go||(po=clearTimeout(po),go=1,vo(Mt))},ya.timer.flush=function(){bt(),_t()};var yo=".",Mo=",",xo=[3,3],bo="$",_o=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(wt);ya.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ya.round(n,St(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),_o[8+e/3]},ya.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},ya.format=function(n){var t=wo.exec(n),e=t[1]||" ",r=t[2]||">",i=t[3]||"",u=t[4]||"",a=t[5],o=+t[6],c=t[7],l=t[8],s=t[9],f=1,h="",g=!1;switch(l&&(l=+l.substring(1)),(a||"0"===e&&"="===r)&&(a=e="0",r="=",c&&(o-=Math.floor((o-1)/4))),s){case"n":c=!0,s="g";break;case"%":f=100,h="%",s="f";break;case"p":f=100,h="%",s="r";break;case"b":case"o":case"x":case"X":"#"===u&&(u="0"+s.toLowerCase());case"c":case"d":g=!0,l=0;break;case"s":f=-1,s="r"}"#"===u?u="":"$"===u&&(u=bo),"r"!=s||l||(s="g"),null!=l&&("g"==s?l=Math.max(1,Math.min(21,l)):("e"==s||"f"==s)&&(l=Math.max(0,Math.min(20,l)))),s=So.get(s)||Et;var p=a&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):i;if(0>f){var m=ya.formatPrefix(n,l);n=m.scale(n),h=m.symbol}else n*=f;n=s(n,l);var d=n.lastIndexOf("."),v=0>d?n:n.substring(0,d),y=0>d?"":yo+n.substring(d+1);!a&&c&&(v=Eo(v));var M=u.length+v.length+y.length+(p?0:t.length),x=o>M?new Array(M=o-M+1).join(e):"";return p&&(v=Eo(x+v)),t+=u,n=v+y,("<"===r?t+n+x:">"===r?x+t+n:"^"===r?x.substring(0,M>>=1)+t+n+x.substring(M):t+(p?n:x+n))+h}};var wo=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,So=ya.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ya.round(n,St(n,t))).toFixed(Math.max(0,Math.min(20,St(n*(1+1e-15),t))))}}),Eo=mt;if(xo){var ko=xo.length;Eo=function(n){for(var t=n.length,e=[],r=0,i=xo[0];t>0&&i>0;)e.push(n.substring(t-=i,t+i)),i=xo[r=(r+1)%ko];return e.reverse().join(Mo)}}ya.geo={},kt.prototype={s:0,t:0,add:function(n){At(n,this.t,Ao),At(Ao.s,this.s,this),this.s?this.t+=Ao.t:this.s=Ao.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var Ao=new kt;ya.geo.stream=function(n,t){n&&No.hasOwnProperty(n.type)?No[n.type](n,t):Nt(n,t)};var No={Feature:function(n,t){Nt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)Nt(e[r].geometry,t)}},qo={Sphere:function(n,t){t.sphere()},Point:function(n,t){var e=n.coordinates;t.point(e[0],e[1])},MultiPoint:function(n,t){for(var e,r=n.coordinates,i=-1,u=r.length;++i<u;)e=r[i],t.point(e[0],e[1])},LineString:function(n,t){qt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)qt(e[r],t,0)},Polygon:function(n,t){Tt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)Tt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)Nt(e[r],t)}};ya.geo.area=function(n){return To=0,ya.geo.stream(n,zo),To};var To,Co=new kt,zo={sphere:function(){To+=4*Ka},point:s,lineStart:s,lineEnd:s,polygonStart:function(){Co.reset(),zo.lineStart=Ct},polygonEnd:function(){var n=2*Co;To+=0>n?4*Ka+n:n,zo.lineStart=zo.lineEnd=zo.point=s}};ya.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=zt([t*to,e*to]);if(v){var i=jt(v,r),u=[i[1],-i[0],0],a=jt(u,i);Ft(a),a=Pt(a);var c=t-p,l=c>0?1:-1,m=a[0]*eo*l,d=Math.abs(c)>180;if(d^(m>l*p&&l*t>m)){var y=a[1]*eo;y>g&&(g=y)}else if(m=(m+360)%360-180,d^(m>l*p&&l*t>m)){var y=-a[1]*eo;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);v=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,v=null}function i(n,e){if(v){var r=n-p;y+=Math.abs(r)>180?r+(r>0?360:-360):r}else m=n,d=e;zo.point(n,e),t(n,e)}function u(){zo.lineStart()}function a(){i(m,d),zo.lineEnd(),Math.abs(y)>Qa&&(s=-(h=180)),x[0]=s,x[1]=h,v=null}function o(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,m,d,v,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=a,y=0,zo.polygonStart()},polygonEnd:function(){zo.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>Co?(s=-(h=180),f=-(g=90)):y>Qa?g=90:-Qa>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ya.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],l(e[0],i)||l(e[1],i)?(o(i[0],e[1])>o(i[0],i[1])&&(i[1]=e[1]),o(e[0],i[1])>o(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var a,e,p=-1/0,t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(a=o(i[1],e[0]))>p&&(p=a,s=e[0],h=i[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ya.geo.centroid=function(n){Do=jo=Lo=Ho=Fo=Po=Oo=Yo=Ro=Uo=Io=0,ya.geo.stream(n,Vo);var t=Ro,e=Uo,r=Io,i=t*t+e*e+r*r;return no>i&&(t=Po,e=Oo,r=Yo,Qa>jo&&(t=Lo,e=Ho,r=Fo),i=t*t+e*e+r*r,no>i)?[0/0,0/0]:[Math.atan2(e,t)*eo,V(r/Math.sqrt(i))*eo]};var Do,jo,Lo,Ho,Fo,Po,Oo,Yo,Ro,Uo,Io,Vo={sphere:s,point:Yt,lineStart:Ut,lineEnd:It,polygonStart:function(){Vo.lineStart=Vt},polygonEnd:function(){Vo.lineStart=Ut}},Xo=$t(Xt,Qt,te,ee),Zo=[-Ka,0],Bo=1e9;(ya.geo.conicEqualArea=function(){return oe(ce)}).raw=ce,ya.geo.albers=function(){return ya.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ya.geo.albersUsa=function(){function n(n){var u=n[0],a=n[1];return t=null,e(u,a),t||(r(u,a),t)||i(u,a),t}var t,e,r,i,u=ya.geo.albers(),a=ya.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=ya.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?a:i>=.166&&.234>i&&r>=-.214&&-.115>r?o:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),a.precision(t),o.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),a.scale(.35*t),o.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var l=u.scale(),s=+t[0],f=+t[1];return e=u.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=a.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Qa,f+.12*l+Qa],[s-.214*l-Qa,f+.234*l-Qa]]).stream(c).point,i=o.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Qa,f+.166*l+Qa],[s-.115*l-Qa,f+.234*l-Qa]]).stream(c).point,n},n.scale(1070)};var $o,Wo,Jo,Go,Ko,Qo,nc={point:s,lineStart:s,lineEnd:s,polygonStart:function(){Wo=0,nc.lineStart=le},polygonEnd:function(){nc.lineStart=nc.lineEnd=nc.point=s,$o+=Math.abs(Wo/2)}},tc={point:se,lineStart:s,lineEnd:s,polygonStart:s,polygonEnd:s},ec={point:ge,lineStart:pe,lineEnd:me,polygonStart:function(){ec.lineStart=de},polygonEnd:function(){ec.point=ge,ec.lineStart=pe,ec.lineEnd=me}};ya.geo.path=function(){function n(n){return n&&("function"==typeof o&&u.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=i(u)),ya.geo.stream(n,a)),u.result()}function t(){return a=null,n}var e,r,i,u,a,o=4.5;return n.area=function(n){return $o=0,ya.geo.stream(n,i(nc)),$o},n.centroid=function(n){return Lo=Ho=Fo=Po=Oo=Yo=Ro=Uo=Io=0,ya.geo.stream(n,i(ec)),Io?[Ro/Io,Uo/Io]:Yo?[Po/Yo,Oo/Yo]:Fo?[Lo/Fo,Ho/Fo]:[0/0,0/0]},n.bounds=function(n){return Ko=Qo=-(Jo=Go=1/0),ya.geo.stream(n,i(tc)),[[Jo,Go],[Ko,Qo]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||Me(n):mt,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new fe:new ve(n),"function"!=typeof o&&u.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(u.pointRadius(+t),+t),n):o},n.projection(ya.geo.albersUsa()).context(null)},ya.geo.projection=xe,ya.geo.projectionMutator=be,(ya.geo.equirectangular=function(){return xe(we)}).raw=we.invert=we,ya.geo.rotation=function(n){function t(t){return t=n(t[0]*to,t[1]*to),t[0]*=eo,t[1]*=eo,t}return n=Se(n[0]%360*to,n[1]*to,n.length>2?n[2]*to:0),t.invert=function(t){return t=n.invert(t[0]*to,t[1]*to),t[0]*=eo,t[1]*=eo,t},t},ya.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=Se(-n[0]*to,-n[1]*to,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=eo,n[1]*=eo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=Ne((t=+r)*to,i*to),n):t},n.precision=function(r){return arguments.length?(e=Ne(t*to,(i=+r)*to),n):i},n.angle(90)},ya.geo.distance=function(n,t){var e,r=(t[0]-n[0])*to,i=n[1]*to,u=t[1]*to,a=Math.sin(r),o=Math.cos(r),c=Math.sin(i),l=Math.cos(i),s=Math.sin(u),f=Math.cos(u);return Math.atan2(Math.sqrt((e=f*a)*e+(e=l*s-c*f*o)*e),c*s+l*f*o)},ya.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ya.range(Math.ceil(u/d)*d,i,d).map(h).concat(ya.range(Math.ceil(l/v)*v,c,v).map(g)).concat(ya.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%d)>Qa}).map(s)).concat(ya.range(Math.ceil(o/m)*m,a,m).filter(function(n){return Math.abs(n%v)>Qa}).map(f))}var e,r,i,u,a,o,c,l,s,f,h,g,p=10,m=p,d=90,v=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(g(c).slice(1),h(i).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],l=+t[0][1],c=+t[1][1],u>i&&(t=u,u=i,i=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[u,l],[i,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],v=+t[1],n):[d,v]},n.minorStep=function(t){return arguments.length?(p=+t[0],m=+t[1],n):[p,m]},n.precision=function(t){return arguments.length?(y=+t,s=Te(o,a,90),f=Ce(r,e,y),h=Te(l,c,90),g=Ce(u,i,y),n):y},n.majorExtent([[-180,-90+Qa],[180,90-Qa]]).minorExtent([[-180,-80-Qa],[180,80+Qa]])},ya.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=ze,i=De;return n.distance=function(){return ya.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ya.geo.interpolate=function(n,t){return je(n[0]*to,n[1]*to,t[0]*to,t[1]*to)},ya.geo.length=function(n){return rc=0,ya.geo.stream(n,ic),rc};var rc,ic={sphere:s,point:s,lineStart:Le,lineEnd:s,polygonStart:s,polygonEnd:s},uc=He(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ya.geo.azimuthalEqualArea=function(){return xe(uc)}).raw=uc;var ac=He(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},mt);(ya.geo.azimuthalEquidistant=function(){return xe(ac)}).raw=ac,(ya.geo.conicConformal=function(){return oe(Fe)}).raw=Fe,(ya.geo.conicEquidistant=function(){return oe(Pe)}).raw=Pe;var oc=He(function(n){return 1/n},Math.atan);(ya.geo.gnomonic=function(){return xe(oc)}).raw=oc,Oe.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ka/2]},(ya.geo.mercator=function(){return Ye(Oe)}).raw=Oe;var cc=He(function(){return 1},Math.asin);(ya.geo.orthographic=function(){return xe(cc)}).raw=cc;var lc=He(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ya.geo.stereographic=function(){return xe(lc)}).raw=lc,Re.invert=function(n,t){return[Math.atan2(X(n),Math.cos(t)),V(Math.sin(t)/Z(n))]},(ya.geo.transverseMercator=function(){return Ye(Re)}).raw=Re,ya.geom={},ya.svg={},ya.svg.line=function(){return Ue(mt)};var sc=ya.map({linear:Xe,"linear-closed":Ze,step:Be,"step-before":$e,"step-after":We,basis:tr,"basis-open":er,"basis-closed":rr,bundle:ir,cardinal:Ke,"cardinal-open":Je,"cardinal-closed":Ge,monotone:sr});
sc.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var fc=[0,2/3,1/3,0],hc=[0,1/3,2/3,0],gc=[0,1/6,2/3,1/6];ya.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i,u,a,o,c,l,s,f,h,g,p,m=pt(e),d=pt(r),v=n.length,y=v-1,M=[],x=[],b=0;if(m===Ie&&r===Ve)t=n;else for(u=0,t=[];v>u;++u)t.push([+m.call(this,i=n[u],u),+d.call(this,i,u)]);for(u=1;v>u;++u)(t[u][1]<t[b][1]||t[u][1]==t[b][1]&&t[u][0]<t[b][0])&&(b=u);for(u=0;v>u;++u)u!==b&&(c=t[u][1]-t[b][1],o=t[u][0]-t[b][0],M.push({angle:Math.atan2(c,o),index:u}));for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,f=0,u=1;y>u;++u){if(a=M[u].index,g==M[u].angle){if(o=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[a][0]-t[b][0],s=t[a][1]-t[b][1],o*o+c*c>=l*l+s*s){M[u].index=-1;continue}M[f].index=-1}g=M[u].angle,f=u,h=a}for(x.push(b),u=0,a=0;2>u;++a)M[a].index>-1&&(x.push(M[a].index),u++);for(p=x.length;y>a;++a)if(!(M[a].index<0)){for(;!fr(x[p-2],x[p-1],M[a].index,t);)--p;x[p++]=M[a].index}var _=[];for(u=p-1;u>=0;--u)_.push(n[x[u]]);return _}var e=Ie,r=Ve;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ya.geom.polygon=function(n){return La(n,pc),n};var pc=ya.geom.polygon.prototype=[];pc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},pc.centroid=function(n){var t,e,r=-1,i=this.length,u=0,a=0,o=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],u+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[u*n,a*n]},pc.clip=function(n){for(var t,e,r,i,u,a,o=pr(n),c=-1,l=this.length-pr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,i=this[c],u=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],hr(a,s,i)?(hr(u,s,i)||n.push(gr(u,a,s,i)),n.push(a)):hr(u,s,i)&&n.push(gr(u,a,s,i)),u=a;o&&n.push(n[0]),s=i}return n},ya.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[];return mr(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var i=n[r],u=i[0],a=i[1];t.forEach(function(n){n.angle=Math.atan2(n[0]-u,n[1]-a)}),t.sort(function(n,t){return n.angle-t.angle});for(var o=0,c=t.length-1;c>o;o++)e.push([i,t[o],t[o+1]])}),e},ya.geom.voronoi=function(n){function t(n){var t,u,a,o=n.map(function(){return[]}),c=pt(e),l=pt(r),s=n.length,f=1e6;if(c===Ie&&l===Ve)t=n;else for(t=new Array(s),a=0;s>a;++a)t[a]=[+c.call(this,u=n[a],a),+l.call(this,u,a)];if(mr(t,function(n){var t,e,r,i,u,a;1===n.a&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),1===n.a?(u=t?t.y:-f,r=n.c-n.b*u,a=e?e.y:f,i=n.c-n.b*a):(r=t?t.x:-f,u=n.c-n.a*r,i=e?e.x:f,a=n.c-n.a*i);var c=[r,u],l=[i,a];o[n.region.l.index].push(c,l),o[n.region.r.index].push(c,l)}),o=o.map(function(n,e){var r=t[e][0],i=t[e][1],u=n.map(function(n){return Math.atan2(n[0]-r,n[1]-i)}),a=ya.range(n.length).sort(function(n,t){return u[n]-u[t]});return a.filter(function(n,t){return!t||u[n]-u[a[t-1]]>Qa}).map(function(t){return n[t]})}),o.forEach(function(n,e){var r=n.length;if(!r)return n.push([-f,-f],[-f,f],[f,f],[f,-f]);if(!(r>2)){var i=t[e],u=n[0],a=n[1],o=i[0],c=i[1],l=u[0],s=u[1],h=a[0],g=a[1],p=Math.abs(h-l),m=g-s;if(Math.abs(m)<Qa){var d=s>c?-f:f;n.push([-f,d],[f,d])}else if(Qa>p){var v=l>o?-f:f;n.push([v,-f],[v,f])}else{var d=(l-o)*(g-s)>(h-l)*(s-c)?f:-f,y=Math.abs(m)-p;Math.abs(y)<Qa?n.push([0>m?d:-d,d]):(y>0&&(d*=-1),n.push([-f,d],[f,d]))}}}),i)for(a=0;s>a;++a)i.clip(o[a]);for(a=0;s>a;++a)o[a].point=n[a];return o}var e=Ie,r=Ve,i=null;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.clipExtent=function(n){if(!arguments.length)return i&&[i[0],i[2]];if(null==n)i=null;else{var e=+n[0][0],r=+n[0][1],u=+n[1][0],a=+n[1][1];i=ya.geom.polygon([[e,r],[e,a],[u,a],[u,r]])}return t},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):i&&i[2]},t.links=function(n){var t,i,u,a=n.map(function(){return[]}),o=[],c=pt(e),l=pt(r),s=n.length;if(c===Ie&&l===Ve)t=n;else for(t=new Array(s),u=0;s>u;++u)t[u]=[+c.call(this,i=n[u],u),+l.call(this,i,u)];return mr(t,function(t){var e=t.region.l.index,r=t.region.r.index;a[e][r]||(a[e][r]=a[r][e]=!0,o.push({source:n[e],target:n[r]}))}),o},t.triangles=function(n){if(e===Ie&&r===Ve)return ya.geom.delaunay(n);for(var t,i=new Array(c),u=pt(e),a=pt(r),o=-1,c=n.length;++o<c;)(i[o]=[+u.call(this,t=n[o],o),+a.call(this,t,o)]).data=t;return ya.geom.delaunay(i).map(function(n){return n.map(function(n){return n.data})})},t)};var mc={l:"r",r:"l"};ya.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(Math.abs(c-e)+Math.abs(s-r)<.01)l(n,t,e,r,i,u,a,o);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,i,u,a,o),l(n,t,e,r,i,u,a,o)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,u,a,o)}function l(n,t,e,r,i,a,o,c){var l=.5*(i+o),s=.5*(a+c),f=e>=l,h=r>=s,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=yr()),f?i=l:o=l,h?a=s:c=s,u(n,t,e,r,i,a,o,c)}var s,f,h,g,p,m,d,v,y,M=pt(o),x=pt(c);if(null!=t)m=t,d=e,v=r,y=i;else if(v=y=-(m=d=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<m&&(m=s.x),s.y<d&&(d=s.y),s.x>v&&(v=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);m>b&&(m=b),d>_&&(d=_),b>v&&(v=b),_>y&&(y=_),f.push(b),h.push(_)}var w=v-m,S=y-d;w>S?y=d+w:v=m+S;var E=yr();if(E.add=function(n){u(E,n,+M(n,++g),+x(n,g),m,d,v,y)},E.visit=function(n){Mr(n,E,m,d,v,y)},g=-1,null==t){for(;++g<p;)u(E,n[g],f[g],h[g],m,d,v,y);--g}else n.forEach(E.add);return f=h=n=s=null,E}var a,o=Ie,c=Ve;return(a=arguments.length)?(o=dr,c=vr,3===a&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(o=n,u):o},u.y=function(n){return arguments.length?(c=n,u):c},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ya.interpolateRgb=xr,ya.interpolateObject=br,ya.interpolateNumber=_r,ya.interpolateString=wr;var dc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;ya.interpolate=Sr,ya.interpolators=[function(n,t){var e=typeof t;return("string"===e?so.has(t)||/^(#|rgb\(|hsl\()/.test(t)?xr:wr:t instanceof P?xr:"object"===e?Array.isArray(t)?Er:br:_r)(n,t)}],ya.interpolateArray=Er;var vc=function(){return mt},yc=ya.map({linear:vc,poly:zr,quad:function(){return qr},cubic:function(){return Tr},sin:function(){return Dr},exp:function(){return jr},circle:function(){return Lr},elastic:Hr,back:Fr,bounce:function(){return Pr}}),Mc=ya.map({"in":mt,out:Ar,"in-out":Nr,"out-in":function(n){return Nr(Ar(n))}});ya.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=yc.get(e)||vc,r=Mc.get(r)||mt,kr(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},ya.interpolateHcl=Or,ya.interpolateHsl=Yr,ya.interpolateLab=Rr,ya.interpolateRound=Ur,ya.transform=function(n){var t=Ma.createElementNS(ya.ns.prefix.svg,"g");return(ya.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Ir(e?e.matrix:xc)})(n)},Ir.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var xc={a:1,b:0,c:0,d:1,e:0,f:0};ya.interpolateTransform=Br,ya.layout={},ya.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ya.layout.chord=function(){function n(){var n,l,f,h,g,p={},m=[],d=ya.range(u),v=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(l=0,g=-1;++g<u;)l+=i[h][g];m.push(l),v.push(ya.range(u)),n+=l}for(a&&d.sort(function(n,t){return a(m[n],m[t])}),o&&v.forEach(function(n,t){n.sort(function(n,e){return o(i[t][n],i[t][e])})}),n=(2*Ka-s*u)/n,l=0,h=-1;++h<u;){for(f=l,g=-1;++g<u;){var y=d[h],M=v[y][g],x=i[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<u;)for(g=h-1;++g<u;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,a,o,c,l={},s=0;return l.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(a=n,e=r=null,l):a},l.sortSubgroups=function(n){return arguments.length?(o=n,e=null,l):o},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ya.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,a=t.cy-n.y,o=1/Math.sqrt(u*u+a*a);if(m>(i-e)*o){var c=t.charge*o*o;return n.px-=u*c,n.py-=a*c,!0}if(t.point&&isFinite(o)){var c=t.pointCharge*o*o;n.px-=u*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=ya.event.x,n.py=ya.event.y,o.resume()}var e,r,i,u,a,o={},c=ya.dispatch("start","tick","end"),l=[1,1],s=.9,f=bc,h=_c,g=-30,p=.1,m=.8,d=[],v=[];return o.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,o,f,h,m,y,M,x,b=d.length,_=v.length;for(e=0;_>e;++e)o=v[e],f=o.source,h=o.target,M=h.x-f.x,x=h.y-f.y,(m=M*M+x*x)&&(m=r*u[e]*((m=Math.sqrt(m))-i[e])/m,M*=m,x*=m,h.x-=M*(y=f.weight/(h.weight+f.weight)),h.y-=x*y,f.x+=M*(y=1-y),f.y+=x*y);if((y=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,y))for(;++e<b;)o=d[e],o.x+=(M-o.x)*y,o.y+=(x-o.y)*y;if(g)for(ri(t=ya.geom.quadtree(d),r,a),e=-1;++e<b;)(o=d[e]).fixed||t.visit(n(o));for(e=-1;++e<b;)o=d[e],o.fixed?(o.x=o.px,o.y=o.py):(o.x-=(o.px-(o.px=o.x))*s,o.y-=(o.py-(o.py=o.y))*s);c.tick({type:"tick",alpha:r})},o.nodes=function(n){return arguments.length?(d=n,o):d},o.links=function(n){return arguments.length?(v=n,o):v},o.size=function(n){return arguments.length?(l=n,o):l},o.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,o):f},o.distance=o.linkDistance,o.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,o):h},o.friction=function(n){return arguments.length?(s=+n,o):s},o.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,o):g},o.gravity=function(n){return arguments.length?(p=+n,o):p},o.theta=function(n){return arguments.length?(m=+n,o):m},o.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ya.timer(o.tick)),o):r},o.start=function(){function n(n,r){for(var i,u=t(e),a=-1,o=u.length;++a<o;)if(!isNaN(i=u[a][n]))return i;return Math.random()*r}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[];for(r=0;m>r;++r){var n=v[r];c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,s,p=d.length,m=v.length,y=l[0],M=l[1];for(e=0;p>e;++e)(s=d[e]).index=e,s.weight=0;for(e=0;m>e;++e)s=v[e],"number"==typeof s.source&&(s.source=d[s.source]),"number"==typeof s.target&&(s.target=d[s.target]),++s.source.weight,++s.target.weight;for(e=0;p>e;++e)s=d[e],isNaN(s.x)&&(s.x=n("x",y)),isNaN(s.y)&&(s.y=n("y",M)),isNaN(s.px)&&(s.px=s.x),isNaN(s.py)&&(s.py=s.y);if(i=[],"function"==typeof f)for(e=0;m>e;++e)i[e]=+f.call(this,v[e],e);else for(e=0;m>e;++e)i[e]=f;if(u=[],"function"==typeof h)for(e=0;m>e;++e)u[e]=+h.call(this,v[e],e);else for(e=0;m>e;++e)u[e]=h;if(a=[],"function"==typeof g)for(e=0;p>e;++e)a[e]=+g.call(this,d[e],e);else for(e=0;p>e;++e)a[e]=g;return o.resume()},o.resume=function(){return o.alpha(.1)},o.stop=function(){return o.alpha(0)},o.drag=function(){return e||(e=ya.behavior.drag().origin(mt).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?(this.on("mouseover.force",ti).on("mouseout.force",ei).call(e),void 0):e},ya.rebind(o,c,"on")};var bc=20,_c=1;ya.layout.hierarchy=function(){function n(t,a,o){var c=i.call(e,t,a);if(t.depth=a,o.push(t),c&&(l=c.length)){for(var l,s,f=-1,h=t.children=[],g=0,p=a+1;++f<l;)s=n(c[f],p,o),s.parent=t,h.push(s),g+=s.value;r&&h.sort(r),u&&(t.value=g)}else u&&(t.value=+u.call(e,t,a)||0);return t}function t(n,r){var i=n.children,a=0;if(i&&(o=i.length))for(var o,c=-1,l=r+1;++c<o;)a+=t(i[c],l);else u&&(a=+u.call(e,n,r)||0);return u&&(n.value=a),a}function e(t){var e=[];return n(t,0,e),e}var r=oi,i=ui,u=ai;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(i=n,e):i},e.value=function(n){return arguments.length?(u=n,e):u},e.revalue=function(n){return t(n,0),n},e},ya.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(a=u.length)){var a,o,c,l=-1;for(r=t.value?r/t.value:0;++l<a;)n(o=u[l],e,c=o.value*r,i),e+=c}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var a=r.call(this,e,u);return n(a[0],0,i[0],i[1]/t(a[0])),a}var r=ya.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ya.layout.pie=function(){function n(u){var a=u.map(function(e,r){return+t.call(n,e,r)}),o=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof i?i.apply(this,arguments):i)-o)/ya.sum(a),l=ya.range(u.length);null!=e&&l.sort(e===wc?function(n,t){return a[t]-a[n]}:function(n,t){return e(u[n],u[t])});var s=[];return l.forEach(function(n){var t;s[n]={data:u[n],value:t=a[n],startAngle:o,endAngle:o+=t*c}}),s}var t=Number,e=wc,r=0,i=2*Ka;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n};var wc={};ya.layout.stack=function(){function n(o,c){var l=o.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,c);l=ya.permute(l,f),s=ya.permute(s,f);var h,g,p,m=r.call(n,s,c),d=l.length,v=l[0].length;for(g=0;v>g;++g)for(i.call(n,l[0][g],p=m[g],s[0][g][1]),h=1;d>h;++h)i.call(n,l[h][g],p+=s[h-1][g][1],s[h][g][1]);return o}var t=mt,e=hi,r=gi,i=fi,u=li,a=si;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Sc.get(t)||hi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:Ec.get(t)||gi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(i=t,n):i},n};var Sc=ya.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(pi),u=n.map(mi),a=ya.range(r).sort(function(n,t){return i[n]-i[t]}),o=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=a[t],c>o?(o+=u[e],l.push(e)):(c+=u[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ya.range(n.length).reverse()},"default":hi}),Ec=ya.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,a=[],o=0,c=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;u>e;++e)c[e]=(o-a[e])/2;return c},wiggle:function(n){var t,e,r,i,u,a,o,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,i=0;s>t;++t)i+=n[t][e][1];for(t=0,u=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;u+=a*n[t][e][1]}g[e]=c-=i?u/i*o:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,i=n.length,u=n[0].length,a=1/i,o=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=a}for(e=0;u>e;++e)o[e]=0;return o},zero:gi});ya.layout.histogram=function(){function n(n,u){for(var a,o,c=[],l=n.map(e,this),s=r.call(this,l,u),f=i.call(this,s,l,u),u=-1,h=l.length,g=f.length-1,p=t?1:1/h;++u<g;)a=c[u]=[],a.dx=f[u+1]-(a.x=f[u]),a.y=0;if(g>0)for(u=-1;++u<h;)o=l[u],o>=s[0]&&o<=s[1]&&(a=c[ya.bisect(f,o,1,g)-1],a.y+=p,a.push(n[u]));return c}var t=!0,e=Number,r=Mi,i=vi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=pt(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return yi(n,t)}:pt(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ya.layout.tree=function(){function n(n,u){function a(n,t){var r=n.children,i=n._tree;if(r&&(u=r.length)){for(var u,o,l,s=r[0],f=s,h=-1;++h<u;)l=r[h],a(l,o),f=c(l,o,f),o=l;Ni(n);var g=.5*(s._tree.prelim+l._tree.prelim);t?(i.prelim=t._tree.prelim+e(n,t),i.mod=i.prelim-g):i.prelim=g}else t&&(i.prelim=t._tree.prelim+e(n,t))}function o(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,i=-1;for(t+=n._tree.mod;++i<r;)o(e[i],t)}}function c(n,t,r){if(t){for(var i,u=n,a=n,o=t,c=n.parent.children[0],l=u._tree.mod,s=a._tree.mod,f=o._tree.mod,h=c._tree.mod;o=_i(o),u=bi(u),o&&u;)c=bi(c),a=_i(a),a._tree.ancestor=n,i=o._tree.prelim+f-u._tree.prelim-l+e(o,u),i>0&&(qi(Ti(o,n,r),n,i),l+=i,s+=i),f+=o._tree.mod,l+=u._tree.mod,h+=c._tree.mod,s+=a._tree.mod;o&&!_i(a)&&(a._tree.thread=o,a._tree.mod+=f-s),u&&!bi(c)&&(c._tree.thread=u,c._tree.mod+=l-h,r=n)}return r}var l=t.call(this,n,u),s=l[0];Ai(s,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),a(s),o(s,-s._tree.prelim);var f=wi(s,Ei),h=wi(s,Si),g=wi(s,ki),p=f.x-e(f,h)/2,m=h.x+e(h,f)/2,d=g.depth||1;return Ai(s,i?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(m-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),l}var t=ya.layout.hierarchy().sort(null).value(null),e=xi,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ya.layout.pack=function(){function n(n,u){var a=e.call(this,n,u),o=a[0],c=i[0],l=i[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,Ai(o,function(n){n.r=+s(n.value)}),Ai(o,Li),r){var f=r*(t?1:Math.max(2*o.r/c,2*o.r/l))/2;Ai(o,function(n){n.r+=f}),Ai(o,Li),Ai(o,function(n){n.r-=f})}return Pi(o,c/2,l/2,t?1:1/Math.max(2*o.r/c,2*o.r/l)),a}var t,e=ya.layout.hierarchy().sort(Ci),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ya.layout.cluster=function(){function n(n,u){var a,o=t.call(this,n,u),c=o[0],l=0;Ai(c,function(n){var t=n.children;t&&t.length?(n.x=Ri(t),n.y=Yi(t)):(n.x=a?l+=e(n,a):0,n.y=0,a=n)});var s=Ui(c),f=Ii(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Ai(c,i?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),o}var t=ya.layout.hierarchy().sort(null).value(null),e=xi,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ya.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var a,o,c,l=f(e),s=[],h=u.slice(),p=1/0,m="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(a=h[c-1]),s.area+=a.area,"squarify"!==g||(o=r(s,m))<=p?(h.pop(),p=o):(s.area-=s.pop().area,i(s,m,l,!1),m=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(i(s,m,l,!0),s.length=s.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,a=f(t),o=r.slice(),c=[];for(n(o,a.dx*a.dy/t.value),c.area=0;u=o.pop();)c.push(u),c.area+=u.area,null!=u.z&&(i(c,u.z?a.dx:a.dy,a,!o.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*p/r,r/(t*u*p)):1/0}function i(n,t,e,r){var i,u=-1,a=n.length,o=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++u<a;)i=n[u],i.x=o,i.y=l,i.dy=s,o+=i.dx=Math.min(e.x+e.dx-o,s?c(i.area/s):0);i.z=!0,i.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++u<a;)i=n[u],i.x=o,i.y=l,i.dx=s,l+=i.dy=Math.min(e.y+e.dy-l,s?c(i.area/s):0);i.z=!1,i.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function u(r){var i=a||o(r),u=i[0];return u.x=0,u.y=0,u.dx=l[0],u.dy=l[1],a&&o.revalue(u),n([u],u.dx*u.dy/u.value),(a?e:t)(u),h&&(a=i),i}var a,o=ya.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Vi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(l=n,u):l},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Vi(t):Xi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Xi(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Vi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(c=n?Math.round:Number,u):c!=Number},u.sticky=function(n){return arguments.length?(h=n,a=null,u):h},u.ratio=function(n){return arguments.length?(p=n,u):p},u.mode=function(n){return arguments.length?(g=n+"",u):g},ii(u,o)},ya.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ya.random.normal.apply(ya,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},ya.scale={};var kc={floor:mt,ceil:mt};ya.scale.linear=function(){return Ki([0,1],[0,1],Sr,!1)},ya.scale.log=function(){return uu(ya.scale.linear().domain([0,1]),10,!0,[1,10])};var Ac=ya.format(".0e"),Nc={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ya.scale.pow=function(){return au(ya.scale.linear(),1,[0,1])},ya.scale.sqrt=function(){return ya.scale.pow().exponent(.5)},ya.scale.ordinal=function(){return cu([],{t:"range",a:[[]]})},ya.scale.category10=function(){return ya.scale.ordinal().range(qc)},ya.scale.category20=function(){return ya.scale.ordinal().range(Tc)},ya.scale.category20b=function(){return ya.scale.ordinal().range(Cc)},ya.scale.category20c=function(){return ya.scale.ordinal().range(zc)};var qc=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(ut),Tc=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(ut),Cc=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(ut),zc=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(ut);ya.scale.quantile=function(){return lu([],[])},ya.scale.quantize=function(){return su(0,1,[0,1])},ya.scale.threshold=function(){return fu([.5],[0,1])},ya.scale.identity=function(){return hu([0,1])},ya.svg.arc=function(){function n(){var n=t.apply(this,arguments),u=e.apply(this,arguments),a=r.apply(this,arguments)+Dc,o=i.apply(this,arguments)+Dc,c=(a>o&&(c=a,a=o,o=c),o-a),l=Ka>c?"0":"1",s=Math.cos(a),f=Math.sin(a),h=Math.cos(o),g=Math.sin(o);return c>=jc?n?"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+u+"A"+u+","+u+" 0 1,1 0,"+-u+"A"+u+","+u+" 0 1,1 0,"+u+"Z":n?"M"+u*s+","+u*f+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*s+","+n*f+"Z":"M"+u*s+","+u*f+"A"+u+","+u+" 0 "+l+",1 "+u*h+","+u*g+"L0,0"+"Z"}var t=gu,e=pu,r=mu,i=du;return n.innerRadius=function(e){return arguments.length?(t=pt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=pt(t),n):e},n.startAngle=function(t){return arguments.length?(r=pt(t),n):r},n.endAngle=function(t){return arguments.length?(i=pt(t),n):i},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,u=(r.apply(this,arguments)+i.apply(this,arguments))/2+Dc;return[Math.cos(u)*n,Math.sin(u)*n]},n};var Dc=-Ka/2,jc=2*Ka-1e-6;ya.svg.line.radial=function(){var n=Ue(vu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},$e.reverse=We,We.reverse=$e,ya.svg.area=function(){return yu(mt)},ya.svg.area.radial=function(){var n=yu(vu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ya.svg.chord=function(){function n(n,o){var c=t(this,u,n,o),l=t(this,a,n,o);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?i(c.r,c.p1,c.r,c.p0):i(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=o.call(n,i,r),a=c.call(n,i,r)+Dc,s=l.call(n,i,r)+Dc;return{r:u,a0:a,a1:s,p0:[u*Math.cos(a),u*Math.sin(a)],p1:[u*Math.cos(s),u*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ka)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=ze,a=De,o=Mu,c=mu,l=du;return n.radius=function(t){return arguments.length?(o=pt(t),n):o},n.source=function(t){return arguments.length?(u=pt(t),n):u},n.target=function(t){return arguments.length?(a=pt(t),n):a},n.startAngle=function(t){return arguments.length?(c=pt(t),n):c},n.endAngle=function(t){return arguments.length?(l=pt(t),n):l},n},ya.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),a=e.call(this,n,i),o=(u.y+a.y)/2,c=[u,{x:u.x,y:o},{x:a.x,y:o},a];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=ze,e=De,r=xu;return n.source=function(e){return arguments.length?(t=pt(e),n):t},n.target=function(t){return arguments.length?(e=pt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ya.svg.diagonal.radial=function(){var n=ya.svg.diagonal(),t=xu,e=n.projection;return n.projection=function(n){return arguments.length?e(bu(t=n)):t},n},ya.svg.symbol=function(){function n(n,r){return(Lc.get(t.call(this,n,r))||Su)(e.call(this,n,r))}var t=wu,e=_u;return n.type=function(e){return arguments.length?(t=pt(e),n):t},n.size=function(t){return arguments.length?(e=pt(t),n):e},n};var Lc=ya.map({circle:Su,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Oc)),e=t*Oc;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Pc),e=t*Pc/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Pc),e=t*Pc/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ya.svg.symbolTypes=Lc.keys();var Hc,Fc,Pc=Math.sqrt(3),Oc=Math.tan(30*to),Yc=[],Rc=0;Yc.call=Ya.call,Yc.empty=Ya.empty,Yc.node=Ya.node,Yc.size=Ya.size,ya.transition=function(n){return arguments.length?Hc?n.transition():n:Ia.transition()},ya.transition.prototype=Yc,Yc.select=function(n){var t,e,r,i=this.id,u=[];n=v(n);for(var a=-1,o=this.length;++a<o;){u.push(t=[]);for(var c=this[a],l=-1,s=c.length;++l<s;)(r=c[l])&&(e=n.call(r,r.__data__,l,a))?("__data__"in r&&(e.__data__=r.__data__),Nu(e,l,i,r.__transition__[i]),t.push(e)):t.push(null)}return Eu(u,i)},Yc.selectAll=function(n){var t,e,r,i,u,a=this.id,o=[];n=y(n);for(var c=-1,l=this.length;++c<l;)for(var s=this[c],f=-1,h=s.length;++f<h;)if(r=s[f]){u=r.__transition__[a],e=n.call(r,r.__data__,f,c),o.push(t=[]);for(var g=-1,p=e.length;++g<p;)(i=e[g])&&Nu(i,g,a,u),t.push(i)}return Eu(o,a)},Yc.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=N(n));for(var u=0,a=this.length;a>u;u++){i.push(t=[]);for(var e=this[u],o=0,c=e.length;c>o;o++)(r=e[o])&&n.call(r,r.__data__,o)&&t.push(r)}return Eu(i,this.id)},Yc.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):T(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Yc.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?Br:Sr,o=ya.ns.qualify(n);return ku(this,"attr."+n,t,o.local?u:i)},Yc.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ya.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yc.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=ba.getComputedStyle(this,null).getPropertyValue(n);return i!==t&&(r=Sr(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return ku(this,"style."+n,t,i)},Yc.styleTween=function(n,t,e){function r(r,i){var u=t.call(this,r,i,ba.getComputedStyle(this,null).getPropertyValue(n));return u&&function(t){this.style.setProperty(n,u(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Yc.text=function(n){return ku(this,"text",n,Au)},Yc.remove=function(){return this.each("end.transition",function(){var n;!this.__transition__&&(n=this.parentNode)&&n.removeChild(this)})},Yc.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=ya.ease.apply(ya,arguments)),T(this,function(e){e.__transition__[t].ease=n}))},Yc.delay=function(n){var t=this.id;return T(this,"function"==typeof n?function(e,r,i){e.__transition__[t].delay=0|n.call(e,e.__data__,r,i)}:(n|=0,function(e){e.__transition__[t].delay=n}))},Yc.duration=function(n){var t=this.id;return T(this,"function"==typeof n?function(e,r,i){e.__transition__[t].duration=Math.max(1,0|n.call(e,e.__data__,r,i))}:(n=Math.max(1,0|n),function(e){e.__transition__[t].duration=n}))},Yc.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Fc,i=Hc;Hc=e,T(this,function(t,r,i){Fc=t.__transition__[e],n.call(t,t.__data__,r,i)}),Fc=r,Hc=i}else T(this,function(r){var i=r.__transition__[e];(i.event||(i.event=ya.dispatch("start","end"))).on(n,t)});return this},Yc.transition=function(){for(var n,t,e,r,i=this.id,u=++Rc,a=[],o=0,c=this.length;c>o;o++){a.push(n=[]);for(var t=this[o],l=0,s=t.length;s>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[i]),r.delay+=r.duration,Nu(e,l,u,r)),n.push(e)}return Eu(a,u)},ya.svg.axis=function(){function n(n){n.each(function(){var n,f=ya.select(this),h=null==l?e.ticks?e.ticks.apply(e,c):e.domain():l,g=null==t?e.tickFormat?e.tickFormat.apply(e,c):String:t,p=Cu(e,h,s),m=f.selectAll(".tick.minor").data(p,String),d=m.enter().insert("line",".tick").attr("class","tick minor").style("opacity",1e-6),v=ya.transition(m.exit()).style("opacity",1e-6).remove(),y=ya.transition(m).style("opacity",1),M=f.selectAll(".tick.major").data(h,String),x=M.enter().insert("g",".domain").attr("class","tick major").style("opacity",1e-6),b=ya.transition(M.exit()).style("opacity",1e-6).remove(),_=ya.transition(M).style("opacity",1),w=Bi(e),S=f.selectAll(".domain").data([0]),E=(S.enter().append("path").attr("class","domain"),ya.transition(S)),k=e.copy(),A=this.__chart__||k;
this.__chart__=k,x.append("line"),x.append("text");var N=x.select("line"),q=_.select("line"),T=M.select("text").text(g),C=x.select("text"),z=_.select("text");switch(r){case"bottom":n=qu,d.attr("y2",u),y.attr("x2",0).attr("y2",u),N.attr("y2",i),C.attr("y",Math.max(i,0)+o),q.attr("x2",0).attr("y2",i),z.attr("x",0).attr("y",Math.max(i,0)+o),T.attr("dy",".71em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+a+"V0H"+w[1]+"V"+a);break;case"top":n=qu,d.attr("y2",-u),y.attr("x2",0).attr("y2",-u),N.attr("y2",-i),C.attr("y",-(Math.max(i,0)+o)),q.attr("x2",0).attr("y2",-i),z.attr("x",0).attr("y",-(Math.max(i,0)+o)),T.attr("dy","0em").style("text-anchor","middle"),E.attr("d","M"+w[0]+","+-a+"V0H"+w[1]+"V"+-a);break;case"left":n=Tu,d.attr("x2",-u),y.attr("x2",-u).attr("y2",0),N.attr("x2",-i),C.attr("x",-(Math.max(i,0)+o)),q.attr("x2",-i).attr("y2",0),z.attr("x",-(Math.max(i,0)+o)).attr("y",0),T.attr("dy",".32em").style("text-anchor","end"),E.attr("d","M"+-a+","+w[0]+"H0V"+w[1]+"H"+-a);break;case"right":n=Tu,d.attr("x2",u),y.attr("x2",u).attr("y2",0),N.attr("x2",i),C.attr("x",Math.max(i,0)+o),q.attr("x2",i).attr("y2",0),z.attr("x",Math.max(i,0)+o).attr("y",0),T.attr("dy",".32em").style("text-anchor","start"),E.attr("d","M"+a+","+w[0]+"H0V"+w[1]+"H"+a)}if(e.rangeBand){var D=k.rangeBand()/2,j=function(n){return k(n)+D};x.call(n,j),_.call(n,j)}else x.call(n,A),_.call(n,k),b.call(n,k),d.call(n,A),y.call(n,k),v.call(n,k)})}var t,e=ya.scale.linear(),r=Uc,i=6,u=6,a=6,o=3,c=[10],l=null,s=0;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ic?t+"":Uc,n):r},n.ticks=function(){return arguments.length?(c=arguments,n):c},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t,e){if(!arguments.length)return i;var r=arguments.length-1;return i=+t,u=r>1?+e:i,a=r>0?+arguments[r]:i,n},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(t){return arguments.length?(s=+t,n):s},n};var Uc="bottom",Ic={top:1,right:1,bottom:1,left:1};ya.svg.brush=function(){function n(u){u.each(function(){var u,a=ya.select(this),s=a.selectAll(".background").data([0]),f=a.selectAll(".extent").data([0]),h=a.selectAll(".resize").data(l,String);a.style("pointer-events","all").on("mousedown.brush",i).on("touchstart.brush",i),s.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),f.enter().append("rect").attr("class","extent").style("cursor","move"),h.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Vc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),h.style("display",n.empty()?"none":null),h.exit().remove(),o&&(u=Bi(o),s.attr("x",u[0]).attr("width",u[1]-u[0]),e(a)),c&&(u=Bi(c),s.attr("y",u[0]).attr("height",u[1]-u[0]),r(a)),t(a)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)][0]+","+s[+/^s/.test(n)][1]+")"})}function e(n){n.select(".extent").attr("x",s[0][0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1][0]-s[0][0])}function r(n){n.select(".extent").attr("y",s[0][1]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",s[1][1]-s[0][1])}function i(){function i(){var n=ya.event.changedTouches;return n?ya.touches(M,n)[0]:ya.mouse(M)}function l(){32==ya.event.keyCode&&(k||(v=null,N[0]-=s[1][0],N[1]-=s[1][1],k=2),g())}function h(){32==ya.event.keyCode&&2==k&&(N[0]+=s[1][0],N[1]+=s[1][1],k=0,g())}function p(){var n=i(),u=!1;y&&(n[0]+=y[0],n[1]+=y[1]),k||(ya.event.altKey?(v||(v=[(s[0][0]+s[1][0])/2,(s[0][1]+s[1][1])/2]),N[0]=s[+(n[0]<v[0])][0],N[1]=s[+(n[1]<v[1])][1]):v=null),S&&m(n,o,0)&&(e(_),u=!0),E&&m(n,c,1)&&(r(_),u=!0),u&&(t(_),b({type:"brush",mode:k?"move":"resize"}))}function m(n,t,e){var r,i,a=Bi(t),o=a[0],c=a[1],l=N[e],h=s[1][e]-s[0][e];return k&&(o-=l,c-=h+l),r=f[e]?Math.max(o,Math.min(c,n[e])):n[e],k?i=(r+=l)+h:(v&&(l=Math.max(o,Math.min(c,2*v[e]-r))),r>l?(i=r,r=l):i=l),s[0][e]!==r||s[1][e]!==i?(u=null,s[0][e]=r,s[1][e]=i,!0):void 0}function d(){p(),_.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ya.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),A(),b({type:"brushend"})}var v,y,M=this,x=ya.select(ya.event.target),b=a.of(M,arguments),_=ya.select(M),w=x.datum(),S=!/^(n|s)$/.test(w)&&o,E=!/^(e|w)$/.test(w)&&c,k=x.classed("extent"),A=H(),N=i(),q=ya.select(ba).on("keydown.brush",l).on("keyup.brush",h);if(ya.event.changedTouches?q.on("touchmove.brush",p).on("touchend.brush",d):q.on("mousemove.brush",p).on("mouseup.brush",d),k)N[0]=s[0][0]-N[0],N[1]=s[0][1]-N[1];else if(w){var T=+/w$/.test(w),C=+/^n/.test(w);y=[s[1-T][0]-N[0],s[1-C][1]-N[1]],N[0]=s[T][0],N[1]=s[C][1]}else ya.event.altKey&&(v=N.slice());_.style("pointer-events","none").selectAll(".resize").style("display",null),ya.select("body").style("cursor",x.style("cursor")),b({type:"brushstart"}),p()}var u,a=m(n,"brushstart","brush","brushend"),o=null,c=null,l=Xc[0],s=[[0,0],[0,0]],f=[!0,!0];return n.x=function(t){return arguments.length?(o=t,l=Xc[!o<<1|!c],n):o},n.y=function(t){return arguments.length?(c=t,l=Xc[!o<<1|!c],n):c},n.clamp=function(t){return arguments.length?(o&&c?f=[!!t[0],!!t[1]]:(o||c)&&(f[+!o]=!!t),n):o&&c?f:o||c?f[+!o]:null},n.extent=function(t){var e,r,i,a,l;return arguments.length?(u=[[0,0],[0,0]],o&&(e=t[0],r=t[1],c&&(e=e[0],r=r[0]),u[0][0]=e,u[1][0]=r,o.invert&&(e=o(e),r=o(r)),e>r&&(l=e,e=r,r=l),s[0][0]=0|e,s[1][0]=0|r),c&&(i=t[0],a=t[1],o&&(i=i[1],a=a[1]),u[0][1]=i,u[1][1]=a,c.invert&&(i=c(i),a=c(a)),i>a&&(l=i,i=a,a=l),s[0][1]=0|i,s[1][1]=0|a),n):(t=u||s,o&&(e=t[0][0],r=t[1][0],u||(e=s[0][0],r=s[1][0],o.invert&&(e=o.invert(e),r=o.invert(r)),e>r&&(l=e,e=r,r=l))),c&&(i=t[0][1],a=t[1][1],u||(i=s[0][1],a=s[1][1],c.invert&&(i=c.invert(i),a=c.invert(a)),i>a&&(l=i,i=a,a=l))),o&&c?[[e,i],[r,a]]:o?[e,r]:c&&[i,a])},n.clear=function(){return u=null,s[0][0]=s[0][1]=s[1][0]=s[1][1]=0,n},n.empty=function(){return o&&s[0][0]===s[1][0]||c&&s[0][1]===s[1][1]},ya.rebind(n,a,"on")};var Vc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Xc=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]];ya.time={};var Zc=Date,Bc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];zu.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){$c.setUTCDate.apply(this._,arguments)},setDay:function(){$c.setUTCDay.apply(this._,arguments)},setFullYear:function(){$c.setUTCFullYear.apply(this._,arguments)},setHours:function(){$c.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){$c.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){$c.setUTCMinutes.apply(this._,arguments)},setMonth:function(){$c.setUTCMonth.apply(this._,arguments)},setSeconds:function(){$c.setUTCSeconds.apply(this._,arguments)},setTime:function(){$c.setTime.apply(this._,arguments)}};var $c=Date.prototype,Wc="%a %b %e %X %Y",Jc="%m/%d/%Y",Gc="%H:%M:%S",Kc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Qc=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],nl=["January","February","March","April","May","June","July","August","September","October","November","December"],tl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];ya.time.year=Du(function(n){return n=ya.time.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ya.time.years=ya.time.year.range,ya.time.years.utc=ya.time.year.utc.range,ya.time.day=Du(function(n){var t=new Zc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ya.time.days=ya.time.day.range,ya.time.days.utc=ya.time.day.utc.range,ya.time.dayOfYear=function(n){var t=ya.time.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},Bc.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=ya.time[n]=Du(function(n){return(n=ya.time.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ya.time.year(n).getDay();return Math.floor((ya.time.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ya.time[n+"s"]=e.range,ya.time[n+"s"].utc=e.utc.range,ya.time[n+"OfYear"]=function(n){var e=ya.time.year(n).getDay();return Math.floor((ya.time.dayOfYear(n)+(e+t)%7)/7)}}),ya.time.week=ya.time.sunday,ya.time.weeks=ya.time.sunday.range,ya.time.weeks.utc=ya.time.sunday.utc.range,ya.time.weekOfYear=ya.time.sundayOfYear,ya.time.format=function(n){function t(t){for(var r,i,u,a=[],o=-1,c=0;++o<e;)37===n.charCodeAt(o)&&(a.push(n.substring(c,o)),null!=(i=fl[r=n.charAt(++o)])&&(r=n.charAt(++o)),(u=hl[r])&&(r=u(t,null==i?"e"===r?" ":"0":i)),a.push(r),c=o+1);return a.push(n.substring(c,o)),a.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=Lu(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var i=new Zc;return"j"in e?i.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(i.setFullYear(e.y,0,1),i.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(i.getDay()+5)%7:e.w+7*e.U-(i.getDay()+6)%7)):i.setFullYear(e.y,e.m,e.d),i.setHours(e.H,e.M,e.S,e.L),i},t.toString=function(){return n},t};var el=Hu(Kc),rl=Fu(Kc),il=Hu(Qc),ul=Fu(Qc),al=Hu(nl),ol=Fu(nl),cl=Hu(tl),ll=Fu(tl),sl=/^%/,fl={"-":"",_:" ",0:"0"},hl={a:function(n){return Qc[n.getDay()]},A:function(n){return Kc[n.getDay()]},b:function(n){return tl[n.getMonth()]},B:function(n){return nl[n.getMonth()]},c:ya.time.format(Wc),d:function(n,t){return Pu(n.getDate(),t,2)},e:function(n,t){return Pu(n.getDate(),t,2)},H:function(n,t){return Pu(n.getHours(),t,2)},I:function(n,t){return Pu(n.getHours()%12||12,t,2)},j:function(n,t){return Pu(1+ya.time.dayOfYear(n),t,3)},L:function(n,t){return Pu(n.getMilliseconds(),t,3)},m:function(n,t){return Pu(n.getMonth()+1,t,2)},M:function(n,t){return Pu(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Pu(n.getSeconds(),t,2)},U:function(n,t){return Pu(ya.time.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Pu(ya.time.mondayOfYear(n),t,2)},x:ya.time.format(Jc),X:ya.time.format(Gc),y:function(n,t){return Pu(n.getFullYear()%100,t,2)},Y:function(n,t){return Pu(n.getFullYear()%1e4,t,4)},Z:aa,"%":function(){return"%"}},gl={a:Ou,A:Yu,b:Vu,B:Xu,c:Zu,d:Qu,e:Qu,H:ta,I:ta,j:na,L:ia,m:Ku,M:ea,p:ua,S:ra,U:Uu,w:Ru,W:Iu,x:Bu,X:$u,y:Ju,Y:Wu,"%":oa},pl=/^\s*\d+/,ml=ya.map({am:0,pm:1});ya.time.format.utc=function(n){function t(n){try{Zc=zu;var t=new Zc;return t._=n,e(t)}finally{Zc=Date}}var e=ya.time.format(n);return t.parse=function(n){try{Zc=zu;var t=e.parse(n);return t&&t._}finally{Zc=Date}},t.toString=e.toString,t};var dl=ya.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");ya.time.format.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ca:dl,ca.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},ca.toString=dl.toString,ya.time.second=Du(function(n){return new Zc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ya.time.seconds=ya.time.second.range,ya.time.seconds.utc=ya.time.second.utc.range,ya.time.minute=Du(function(n){return new Zc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ya.time.minutes=ya.time.minute.range,ya.time.minutes.utc=ya.time.minute.utc.range,ya.time.hour=Du(function(n){var t=n.getTimezoneOffset()/60;return new Zc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ya.time.hours=ya.time.hour.range,ya.time.hours.utc=ya.time.hour.utc.range,ya.time.month=Du(function(n){return n=ya.time.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ya.time.months=ya.time.month.range,ya.time.months.utc=ya.time.month.utc.range;var vl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],yl=[[ya.time.second,1],[ya.time.second,5],[ya.time.second,15],[ya.time.second,30],[ya.time.minute,1],[ya.time.minute,5],[ya.time.minute,15],[ya.time.minute,30],[ya.time.hour,1],[ya.time.hour,3],[ya.time.hour,6],[ya.time.hour,12],[ya.time.day,1],[ya.time.day,2],[ya.time.week,1],[ya.time.month,1],[ya.time.month,3],[ya.time.year,1]],Ml=[[ya.time.format("%Y"),Xt],[ya.time.format("%B"),function(n){return n.getMonth()}],[ya.time.format("%b %d"),function(n){return 1!=n.getDate()}],[ya.time.format("%a %d"),function(n){return n.getDay()&&1!=n.getDate()}],[ya.time.format("%I %p"),function(n){return n.getHours()}],[ya.time.format("%I:%M"),function(n){return n.getMinutes()}],[ya.time.format(":%S"),function(n){return n.getSeconds()}],[ya.time.format(".%L"),function(n){return n.getMilliseconds()}]],xl=ya.scale.linear(),bl=fa(Ml);yl.year=function(n,t){return xl.domain(n.map(ga)).ticks(t).map(ha)},ya.time.scale=function(){return la(ya.scale.linear(),yl,bl)};var _l=yl.map(function(n){return[n[0].utc,n[1]]}),wl=[[ya.time.format.utc("%Y"),Xt],[ya.time.format.utc("%B"),function(n){return n.getUTCMonth()}],[ya.time.format.utc("%b %d"),function(n){return 1!=n.getUTCDate()}],[ya.time.format.utc("%a %d"),function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[ya.time.format.utc("%I %p"),function(n){return n.getUTCHours()}],[ya.time.format.utc("%I:%M"),function(n){return n.getUTCMinutes()}],[ya.time.format.utc(":%S"),function(n){return n.getUTCSeconds()}],[ya.time.format.utc(".%L"),function(n){return n.getUTCMilliseconds()}]],Sl=fa(wl);return _l.year=function(n,t){return xl.domain(n.map(ma)).ticks(t).map(pa)},ya.time.scale.utc=function(){return la(ya.scale.linear(),_l,Sl)},ya.text=dt(function(n){return n.responseText}),ya.json=function(n,t){return vt(n,"application/json",da,t)},ya.html=function(n,t){return vt(n,"text/html",va,t)},ya.xml=dt(function(n){return n.responseXML}),ya}();;

!function(){function t(t,a){return{type:"Feature",id:t.id,properties:t.properties,geometry:n(t.geometry,a)}}function n(t,a){if(!t)return null;if("GeometryCollection"===t.type)return{type:"GeometryCollection",geometries:object.geometries.map(function(t){return n(t,a)})};if(!ua.hasOwnProperty(t.type))return null;var r=ua[t.type];return d3.geo.stream(t,a(r)),r.result()}function a(){}function r(t){return t?t/Math.sin(t):1}function e(t){return t>0?1:0>t?-1:0}function o(t){return t>1?ca/2:-1>t?-ca/2:Math.asin(t)}function i(t){return t>1?0:-1>t?ca:Math.acos(t)}function h(t){return t>0?Math.sqrt(t):0}function u(t){function n(t,n){var a=Math.cos(t),e=Math.cos(n),o=Math.sin(n),i=e*a,h=-((1-i?Math.log(.5*(1+i))/(1-i):-.5)+r/(1+i));return[h*e*Math.sin(t),h*o]}var a=Math.tan(.5*t),r=2*Math.log(Math.cos(.5*t))/(a*a);return n.invert=function(n,a){var e,i=Math.sqrt(n*n+a*a),h=t*-.5,u=50;if(!i)return[0,0];do{var M=.5*h,s=Math.cos(M),c=Math.sin(M),f=Math.tan(M),v=Math.log(1/s);h-=e=(2/f*v-r*f-i)/(-v/(c*c)+1-r/(2*s*s))}while(Math.abs(e)>Ma&&--u>0);var l=Math.sin(h);return[Math.atan2(n*l,i*Math.cos(h)),o(a*l/i)]},n}function M(){var t=ca/2,n=da(u),a=n(t);return a.radius=function(a){return arguments.length?n(t=a*ca/180):180*(t/ca)},a}function s(t,n){var a=Math.cos(n),e=r(i(a*Math.cos(t/=2)));return[2*a*Math.sin(t)*e,Math.sin(n)*e]}function c(t){function n(t,n){var h=Math.cos(n),u=Math.cos(t/=2);return[(1+h)*Math.sin(t),(e*n>-Math.atan2(u,o)-.001?0:10*-e)+i+Math.sin(n)*r-(1+h)*a*u]}var a=Math.sin(t),r=Math.cos(t),e=t>0?1:-1,o=Math.tan(e*t),i=(1+a-r)/2;return n.invert=function(t,n){var h=0,u=0,M=50;do{var s=Math.cos(h),c=Math.sin(h),f=Math.cos(u),v=Math.sin(u),l=1+f,g=l*c-t,d=i+v*r-l*a*s-n,b=.5*l*s,p=-c*v,w=.5*a*l*c,q=r*f+a*s*v,m=p*w-q*b,y=.5*(d*p-g*q)/m,S=(g*w-d*b)/m;h-=y,u-=S}while((Math.abs(y)>Ma||Math.abs(S)>Ma)&&--M>0);return e*u>-Math.atan2(Math.cos(h),o)-.001?[2*h,u]:null},n}function f(){var t=ca/9,n=t>0?1:-1,a=Math.tan(n*t),r=da(c),e=r(t),o=e.stream;return e.parallel=function(e){return arguments.length?(a=Math.tan((n=(t=e*ca/180)>0?1:-1)*t),r(t)):180*(t/ca)},e.stream=function(r){var i=e.rotate(),h=o(r),u=(e.rotate([0,0]),o(r));return e.rotate(i),h.sphere=function(){u.polygonStart(),u.lineStart();for(var r=-180*n;180>n*r;r+=90*n)u.point(r,90*n);for(;n*(r-=t)>=-180;)u.point(r,n*-Math.atan2(Math.cos(r*va/2),a)*la);u.lineEnd(),u.polygonEnd()},h},e}function v(t){return t=Math.exp(2*t),(t-1)/(t+1)}function l(t){return.5*(Math.exp(t)-Math.exp(-t))}function g(t){return.5*(Math.exp(t)+Math.exp(-t))}function d(t){return Math.log(t+h(t*t+1))}function b(t){return Math.log(t+h(t*t-1))}function p(t,n){var a=Math.tan(n/2),r=h(1-a*a),e=1+r*Math.cos(t/=2),o=Math.sin(t)*r/e,i=a/e,u=o*o,M=i*i;return[4/3*o*(3+u-3*M),4/3*i*(3+3*u-M)]}function w(t,n){var a=Math.abs(n);return ca/4>a?[t,Math.log(Math.tan(ca/4+n/2))]:[t*Math.cos(a)*(2*Math.SQRT2-1/Math.sin(a)),e(n)*(2*Math.SQRT2*(a-ca/4)-Math.log(Math.tan(a/2)))]}function q(t){function n(t,n){var r=pa(t,n);if(Math.abs(t)>ca/2){var e=Math.atan2(r[1],r[0]),i=Math.sqrt(r[0]*r[0]+r[1]*r[1]),h=a*Math.round((e-ca/2)/a)+ca/2,u=Math.atan2(Math.sin(e-=h),2-Math.cos(e));e=h+o(ca/i*Math.sin(u))-u,r[0]=i*Math.cos(e),r[1]=i*Math.sin(e)}return r}var a=2*ca/t;return n.invert=function(t,n){var r=Math.sqrt(t*t+n*n);if(r>ca/2){var e=Math.atan2(n,t),o=a*Math.round((e-ca/2)/a)+ca/2,i=e>o?-1:1,h=r*Math.cos(o-e),u=1/Math.tan(i*Math.acos((h-ca)/Math.sqrt(ca*(ca-2*h)+r*r)));e=o+2*Math.atan((u+i*Math.sqrt(u*u-3))/3),t=r*Math.cos(e),n=r*Math.sin(e)}return pa.invert(t,n)},n}function m(){var t=5,n=da(q),a=n(t),r=a.stream;return a.lobes=function(a){return arguments.length?n(t=+a):t},a.stream=function(n){var e=a.rotate(),o=r(n),i=(a.rotate([0,0]),r(n));return a.rotate(e),o.sphere=function(){i.polygonStart(),i.lineStart();for(var n=.01,a=0,r=360/t,e=90-180/t;t>a;++a,e-=r)i.point(180,0),-90>e?(i.point(-90,180-e-n),i.point(-90,180-e+n)):(i.point(90,e+n),i.point(90,e-n));i.lineEnd(),i.polygonEnd()},o},a}function y(t){return function(n){var a,r=t*Math.sin(n),e=30;do n-=a=(n+Math.sin(n)-r)/(1+Math.cos(n));while(Math.abs(a)>Ma&&--e>0);return n/2}}function S(t,n,a){function r(a,r){return[t*a*Math.cos(r=e(r)),n*Math.sin(r)]}var e=y(a);return r.invert=function(r,e){var i=o(e/n);return[r/(t*Math.cos(i)),o((2*i+Math.sin(2*i))/a)]},r}function Q(t,n){var a=2.00276,r=wa(n);return[a*t/(1/Math.cos(n)+1.11072/Math.cos(r)),(n+Math.SQRT2*Math.sin(r))/a]}function R(t){var n=0,a=da(t),r=a(n);return r.parallel=function(t){return arguments.length?a(n=t*ca/180):180*(n/ca)},r}function T(t,n){return[t*Math.cos(n),n]}function x(t){function n(n,r){var e=a+t-r,o=e?n*Math.cos(r)/e:e;return[e*Math.sin(o),a-e*Math.cos(o)]}if(!t)return T;var a=1/Math.tan(t);return n.invert=function(n,r){var e=Math.sqrt(n*n+(r=a-r)*r),o=a+t-e;return[e/Math.cos(o)*Math.atan2(n,r),o]},n}function E(t){function n(n,a){for(var r=Math.sin(a),e=Math.cos(a),o=new Array(3),M=0;3>M;++M){var s=t[M];if(o[M]=k(a-s[1],s[3],s[2],e,r,n-s[0]),!o[M][0])return s.point;o[M][1]=z(o[M][1]-s.v[1])}for(var c=u.slice(),M=0;3>M;++M){var f=2==M?0:M+1,v=_(t[M].v[0],o[M][0],o[f][0]);o[M][1]<0&&(v=-v),M?1==M?(v=i-v,c[0]-=o[M][0]*Math.cos(v),c[1]-=o[M][0]*Math.sin(v)):(v=h-v,c[0]+=o[M][0]*Math.cos(v),c[1]+=o[M][0]*Math.sin(v)):(c[0]+=o[M][0]*Math.cos(v),c[1]-=o[M][0]*Math.sin(v))}return c[0]/=3,c[1]/=3,c}t=t.map(function(t){return[t[0],t[1],Math.sin(t[1]),Math.cos(t[1])]});for(var a,r=t[2],e=0;3>e;++e,r=a)a=t[e],r.v=k(a[1]-r[1],r[3],r[2],a[3],a[2],a[0]-r[0]),r.point=[0,0];var o=_(t[0].v[0],t[2].v[0],t[1].v[0]),i=_(t[0].v[0],t[1].v[0],t[2].v[0]),h=ca-o;t[2].point[1]=0,t[0].point[0]=-(t[1].point[0]=.5*t[0].v[0]);var u=[t[2].point[0]=t[0].point[0]+t[2].v[0]*Math.cos(o),2*(t[0].point[1]=t[1].point[1]=t[2].v[0]*Math.sin(o))];return n}function P(){var t=[[0,0],[0,0],[0,0]],n=da(E),a=n(t),r=a.rotate;return delete a.rotate,a.points=function(e){if(!arguments.length)return t;t=e;var o=d3.geo.centroid({type:"MultiPoint",coordinates:t}),i=[-o[0],-o[1]];return r.call(a,i),n(t.map(d3.geo.rotation(i)).map(B))},a.points([[-150,55],[-35,55],[-92.5,10]])}function k(t,n,a,r,e,h){var u,M=Math.cos(h);if(Math.abs(t)>1||Math.abs(h)>1)u=i(a*e+n*r*M);else{var s=Math.sin(.5*t),c=Math.sin(.5*h);u=2*o(Math.sqrt(s*s+n*r*c*c))}return Math.abs(u)>Ma?[u,Math.atan2(r*Math.sin(h),n*e-a*r*M)]:[0,0]}function _(t,n,a){return i(.5*(t*t+n*n-a*a)/(t*n))}function z(t){return t-2*ca*Math.floor((t+ca)/(2*ca))}function B(t){return[t[0]*va,t[1]*va]}function F(t,n){var a=h(1-Math.sin(n));return[2/fa*t*a,fa*(1-a)]}function A(t){function n(t,n){return[t,(t?t/Math.sin(t):1)*(Math.sin(n)*Math.cos(t)-a*Math.cos(n))]}var a=Math.tan(t);return n.invert=a?function(t,n){t&&(n*=Math.sin(t)/t);var r=Math.cos(t);return[t,2*Math.atan2(Math.sqrt(r*r+a*a-n*n)-r,a-n)]}:function(t,n){return[t,o(t?n*Math.tan(t)/t:n)]},n}function G(t,n){var a=Math.sqrt(3);return[a*t*(2*Math.cos(2*n/3)-1)/fa,a*fa*Math.sin(n/3)]}function j(t){function n(t,n){return[t*a,Math.sin(n)/a]}var a=Math.cos(t);return n.invert=function(t,n){return[t/a,o(n*a)]},n}function C(t){function n(t,n){return[t*a,(1+a)*Math.tan(.5*n)]}var a=Math.cos(t);return n.invert=function(t,n){return[t/a,2*Math.atan(n/(1+a))]},n}function D(t,n){var a=Math.sqrt(8/(3*ca));return[a*t*(1-Math.abs(n)/ca),a*n]}function L(t,n){var a=Math.sqrt(4-3*Math.sin(Math.abs(n)));return[2/Math.sqrt(6*ca)*t*a,e(n)*Math.sqrt(2*ca/3)*(2-a)]}function O(t,n){var a=Math.sqrt(ca*(4+ca));return[2/a*t*(1+Math.sqrt(1-4*n*n/(ca*ca))),4/a*n]}function H(t,n){var a=(2+ca/2)*Math.sin(n);n/=2;for(var r=0,e=1/0;10>r&&Math.abs(e)>Ma;r++){var o=Math.cos(n);n-=e=(n+Math.sin(n)*(o+2)-a)/(2*o*(1+o))}return[2/Math.sqrt(ca*(4+ca))*t*(1+Math.cos(n)),2*Math.sqrt(ca/(4+ca))*Math.sin(n)]}function I(t,n){return[t*(1+Math.cos(n))/Math.sqrt(2+ca),2*n/Math.sqrt(2+ca)]}function J(t,n){for(var a=(1+ca/2)*Math.sin(n),r=0,e=1/0;10>r&&Math.abs(e)>Ma;r++)n-=e=(n+Math.sin(n)-a)/(1+Math.cos(n));return a=Math.sqrt(2+ca),[t*(1+Math.cos(n))/a,2*n/a]}function K(t,n){var a=Math.sin(t/=2),r=Math.cos(t),e=Math.sqrt(Math.cos(n)),o=Math.cos(n/=2),i=Math.sin(n)/(o+Math.SQRT2*r*e),h=Math.sqrt(2/(1+i*i)),u=Math.sqrt((Math.SQRT2*o+(r+a)*e)/(Math.SQRT2*o+(r-a)*e));return[ya*(h*(u-1/u)-2*Math.log(u)),ya*(h*i*(u+1/u)-2*Math.atan(i))]}function N(t,n){var a=Math.tan(n/2);return[t*Sa*h(1-a*a),(1+Sa)*a]}function U(t,n){var a=n/2,r=Math.cos(a);return[2*t/fa*Math.cos(n)*r*r,fa*Math.tan(a)]}function V(t,n,a,r,e,o,i,u){function M(h,M){if(!M)return[t*h/ca,0];var s=M*M,c=t+s*(n+s*(a+s*r)),f=M*(e-1+s*(o-u+s*i)),v=(c*c+f*f)/(2*f),l=h*Math.asin(c/v)/ca;return[v*Math.sin(l),M*(1+s*u)+v*(1-Math.cos(l))]}return arguments.length<8&&(u=0),M.invert=function(M,s){var c,f,v=ca*M/t,l=s,g=50;do{var d=l*l,b=t+d*(n+d*(a+d*r)),p=l*(e-1+d*(o-u+d*i)),w=b*b+p*p,q=2*p,m=w/q,y=m*m,S=Math.asin(b/m)/ca,Q=v*S;if(xB2=b*b,dxBdφ=(2*n+d*(4*a+6*d*r))*l,dyBdφ=e+d*(3*o+5*d*i),dpdφ=2*(b*dxBdφ+p*(dyBdφ-1)),dqdφ=2*(dyBdφ-1),dmdφ=(dpdφ*q-w*dqdφ)/(q*q),cosα=Math.cos(Q),sinα=Math.sin(Q),mcosα=m*cosα,msinα=m*sinα,dαdφ=v/ca*(1/h(1-xB2/y))*(dxBdφ*m-b*dmdφ)/y,fx=msinα-M,fy=l*(1+d*u)+m-mcosα-s,δxδφ=dmdφ*sinα+mcosα*dαdφ,δxδλ=mcosα*S,δyδφ=1+dmdφ-(dmdφ*cosα-msinα*dαdφ),δyδλ=msinα*S,denominator=δxδφ*δyδλ-δyδφ*δxδλ,!denominator)break;v-=c=(fy*δxδφ-fx*δyδφ)/denominator,l-=f=(fx*δyδλ-fy*δxδλ)/denominator}while((Math.abs(c)>Ma||Math.abs(f)>Ma)&&--g>0);return[v,l]},M}function W(t,n){var a=t*t,r=n*n;return[t*(1-.162388*r)*(.87-952426e-9*a*a),n*(1+r/12)]}function X(t){function n(){var t=!1,n=da(a),r=n(t);return r.quincuncial=function(a){return arguments.length?n(t=!!a):t},r}function a(n){var a=n?function(n,a){var o=Math.abs(n)<ca/2,i=t(o?n:n>0?n-ca:n+ca,a),h=(i[0]-i[1])*Math.SQRT1_2,u=(i[0]+i[1])*Math.SQRT1_2;if(o)return[h,u];var M=r*Math.SQRT1_2,s=h>0^u>0?-1:1;return[s*h-e(u)*M,s*u-e(h)*M]}:function(n,a){var e=n>0?-.5:.5,o=t(n+e*ca,a);return o[0]-=e*r,o};return t.invert&&(a.invert=n?function(n,a){var e=(n+a)*Math.SQRT1_2,o=(a-n)*Math.SQRT1_2,i=Math.abs(e)<.5*r&&Math.abs(o)<.5*r;if(!i){var h=r*Math.SQRT1_2,u=e>0^o>0?-1:1,M=-u*(n+(o>0?1:-1)*h),s=-u*(a+(e>0?1:-1)*h);e=(-M-s)*Math.SQRT1_2,o=(M-s)*Math.SQRT1_2}var c=t.invert(e,o);return i||(c[0]+=e>0?ca:-ca),c}:function(n,a){var e=n>0?-.5:.5,o=t.invert(n+e*r,a),i=o[0]-e*ca;return-ca>i?i+=2*ca:i>ca&&(i-=2*ca),o[0]=i,o}),a}var r=t(ca/2,0)[0]-t(-ca/2,0)[0];return n.raw=a,n}function Y(t,n){var a=e(t),r=e(n),i=Math.cos(n),h=Math.cos(t)*i,u=Math.sin(t)*i,M=Math.sin(r*n);t=Math.abs(Math.atan2(u,M)),n=o(h),Math.abs(t-ca/2)>Ma&&(t%=ca/2);var s=Z(t>ca/4?ca/2-t:t,n);return t>ca/4&&(M=s[0],s[0]=-s[1],s[1]=-M),s[0]*=a,s[1]*=-r,s}function Z(t,n){if(n===ca/2)return[0,0];var a=Math.sin(n),r=a*a,e=r*r,i=1+e,u=1+3*e,M=1-e,s=o(1/Math.sqrt(i)),c=M+r*i*s,f=(1-a)/c,v=Math.sqrt(f),l=f*i,g=Math.sqrt(l),d=v*M;if(0===t)return[0,-(d+r*g)];var b=Math.cos(n),p=1/b,w=2*a*b,q=(-3*r+s*u)*w,m=(-c*b-(1-a)*q)/(c*c),y=.5*m/v,S=M*y-2*r*v*w,Q=r*i*m+f*u*w,R=-p*w,T=-p*Q,x=-2*p*S,E=4*t/ca;if(t>.222*ca||ca/4>n&&t>.175*ca){var P=(d+r*h(l*(1+e)-d*d))/(1+e);if(t>ca/4)return[P,P];var k=P,_=.5*P,z=50;P=.5*(_+k);do{var B=Math.sqrt(l-P*P),F=P*(x+R*B)+T*o(P/g)-E;if(!F)break;0>F?_=P:k=P,P=.5*(_+k)}while(Math.abs(k-_)>Ma&&--z>0)}else{var A,P=Ma,z=25;do{var G=P*P,B=h(l-G),j=x+R*B,F=P*j+T*o(P/g)-E,C=j+(T-R*G)/B;P-=A=B?F/C:0}while(Math.abs(A)>Ma&&--z>0)}return[P,-d-r*h(l-P*P)]}function $(t,n){for(var a=0,r=1,e=.5,o=50;;){var i=e*e,h=Math.sqrt(e),u=Math.asin(1/Math.sqrt(1+i)),M=1-i+e*(1+i)*u,s=(1-h)/M,c=Math.sqrt(s),f=s*(1+i),v=c*(1-i),l=f-t*t,g=Math.sqrt(l),d=n+v+e*g;if(Math.abs(r-a)<sa||0===--o||0===d)break;d>0?a=e:r=e,e=.5*(a+r)}if(!o)return null;var b=Math.asin(h),p=Math.cos(b),w=1/p,q=2*h*p,m=(-3*e+u*(1+3*i))*q,y=(-M*p-(1-h)*m)/(M*M),S=.5*y/c,Q=(1-i)*S-2*e*c*q,R=-2*w*Q,T=-w*q,x=-w*(e*(1+i)*y+s*(1+3*i)*q);return[ca/4*(t*(R+T*g)+x*Math.asin(t/Math.sqrt(f))),b]}function tn(t,n,a){if(!t){var r=nn(n,1-a);return[[0,r[0]/r[1]],[1/r[1],0],[r[2]/r[1],0]]}var e=nn(t,a);if(!n)return[[e[0],0],[e[1],0],[e[2],0]];var r=nn(n,1-a),o=r[1]*r[1]+a*e[0]*e[0]*r[0]*r[0];return[[e[0]*r[2]/o,e[1]*e[2]*r[0]*r[1]/o],[e[1]*r[1]/o,-e[0]*e[2]*r[0]*r[2]/o],[e[2]*r[1]*r[2]/o,-a*e[0]*e[1]*r[0]/o]]}function nn(t,n){var a,r,e,i,u;if(Ma>n)return i=Math.sin(t),r=Math.cos(t),a=.25*n*(t-i*r),[i-a*r,r+a*i,1-.5*n*i*i,t-a];if(n>=1-Ma)return a=.25*(1-n),r=g(t),i=v(t),e=1/r,u=r*l(t),[i+a*(u-t)/(r*r),e-a*i*e*(u-t),e+a*i*e*(u+t),2*Math.atan(Math.exp(t))-ca/2+a*(u-t)/r];var M=[1,0,0,0,0,0,0,0,0],s=[Math.sqrt(n),0,0,0,0,0,0,0,0],c=0;for(r=Math.sqrt(1-n),u=1;Math.abs(s[c]/M[c])>Ma&&8>c;)a=M[c++],s[c]=.5*(a-r),M[c]=.5*(a+r),r=h(a*r),u*=2;e=u*M[c]*t;do i=s[c]*Math.sin(r=e)/M[c],e=.5*(o(i)+e);while(--c);return[Math.sin(e),i=Math.cos(e),i/Math.cos(e-r),e]}function an(t,n,a){var r=Math.abs(t),o=Math.abs(n),i=l(o);if(r){var u=1/Math.sin(r),M=1/(Math.tan(r)*Math.tan(r)),s=-(M+a*i*i*u*u-1+a),c=(a-1)*M,f=.5*(-s+Math.sqrt(s*s-4*c));return[rn(Math.atan(1/Math.sqrt(f)),a)*e(t),rn(Math.atan(h((f/M-1)/a)),1-a)*e(n)]}return[0,rn(Math.atan(i),1-a)*e(n)]}function rn(t,n){if(!n)return t;if(1===n)return Math.log(Math.tan(t/2+ca/4));for(var a=1,r=Math.sqrt(1-n),e=Math.sqrt(n),o=0;Math.abs(e)>Ma;o++){if(t%ca){var i=Math.atan(r*Math.tan(t)/a);0>i&&(i+=ca),t+=i+~~(t/ca)*ca}else t+=t;e=(a+r)/2,r=Math.sqrt(a*r),e=((a=e)-r)/2}return t/(Math.pow(2,o)*a)}function en(t,n){var a=(Math.SQRT2-1)/(Math.SQRT2+1),r=Math.sqrt(1-a*a),o=rn(ca/2,r*r),i=-1,h=Math.log(Math.tan(ca/4+Math.abs(n)/2)),u=Math.exp(i*h)/Math.sqrt(a),M=on(u*Math.cos(i*t),u*Math.sin(i*t)),s=an(M[0],M[1],r*r);return[-s[1],e(n)*(.5*o-s[0])]}function on(t,n){var a=t*t,r=n+1,o=1-a-n*n;return[e(t)*ca/4-.5*Math.atan2(o,2*t),-.25*Math.log(o*o+4*a)+.5*Math.log(r*r+a)]}function hn(t,n){var a=n[0]*n[0]+n[1]*n[1];return[(t[0]*n[0]+t[1]*n[1])/a,(t[1]*n[0]-t[0]*n[1])/a]}function un(t){function n(t,n){var o=e(t,n);t=o[0],n=o[1];var h=Math.sin(n),u=Math.cos(n),M=Math.cos(t),s=i(a*h+r*u*M),c=Math.sin(s),f=Math.abs(c)>Ma?s/c:1;return[f*r*Math.sin(t),(Math.abs(t)>ca/2?f:-f)*(a*u-r*h*M)]}var a=Math.sin(t),r=Math.cos(t),e=Mn(t);return e.invert=Mn(-t),n.invert=function(t,n){var r=Math.sqrt(t*t+n*n),o=-Math.sin(r),i=Math.cos(r),u=r*i,M=-n*o,s=r*a,c=h(u*u+M*M-s*s),f=Math.atan2(u*s+M*c,M*s-u*c),v=(r>ca/2?-1:1)*Math.atan2(t*o,r*Math.cos(f)*i+n*Math.sin(f)*o);return e.invert(v,f)},n}function Mn(t){var n=Math.sin(t),a=Math.cos(t);return function(t,r){var e=Math.cos(r),i=Math.cos(t)*e,h=Math.sin(t)*e,u=Math.sin(r);return[Math.atan2(h,i*a-u*n),o(u*a+i*n)]}}function sn(){var t=0,n=da(un),a=n(t),r=a.rotate,e=a.stream,o=d3.geo.circle();return a.parallel=function(r){if(!arguments.length)return 180*(t/ca);var e=a.rotate();return n(t=r*ca/180).rotate(e)},a.rotate=function(n){return arguments.length?(r.call(a,[n[0],n[1]-180*(t/ca)]),o.origin([-n[0],-n[1]]),a):(n=r.call(a),n[1]+=180*(t/ca),n)},a.stream=function(t){return t=e(t),t.sphere=function(){t.polygonStart();var n,a=.01,r=o.angle(90-a)().coordinates[0],e=r.length-1,i=-1;for(t.lineStart();++i<e;)t.point((n=r[i])[0],n[1]);for(t.lineEnd(),r=o.angle(90+a)().coordinates[0],e=r.length-1,t.lineStart();--i>=0;)t.point((n=r[i])[0],n[1]);t.lineEnd(),t.polygonEnd()},t},a}function cn(t,n){function a(a,r){var e=Ea(a/n,r);return e[0]*=t,e}return arguments.length<2&&(n=t),1===n?Ea:1/0===n?vn:(a.invert=function(a,r){var e=Ea.invert(a/t,r);return e[0]*=n,e},a)}function fn(){var t=2,n=da(cn),a=n(t);return a.coefficient=function(a){return arguments.length?n(t=+a):t},a}function vn(t,n){return[t*Math.cos(n)/Math.cos(n/=2),2*Math.sin(n)]}function ln(t,n){for(var a,r=Math.sin(n)*(0>n?2.43763:2.67595),e=0;20>e&&(n-=a=(n+Math.sin(n)-r)/(1+Math.cos(n)),!(Math.abs(a)<Ma));e++);return[.85*t*Math.cos(n*=.5),Math.sin(n)*(0>n?1.93052:1.75859)]}function gn(t){function n(n,s){var c,f=Math.abs(s);if(f>r){var v=Math.min(t-1,Math.max(0,Math.floor((n+ca)/M)));n+=ca*(t-1)/t-v*M,c=d3.geo.collignon.raw(n,f),c[0]=c[0]*e/o-e*(t-1)/(2*t)+v*e/t,c[1]=i+4*(c[1]-h)*u/e,0>s&&(c[1]=-c[1])}else c=a(n,s);return c[0]/=2,c}var a=d3.geo.cylindricalEqualArea.raw(0),r=Pa*ca/180,e=2*ca,o=d3.geo.collignon.raw(ca,r)[0]-d3.geo.collignon.raw(-ca,r)[0],i=a(0,r)[1],h=d3.geo.collignon.raw(0,r)[1],u=d3.geo.collignon.raw(0,ca/2)[1]-h,M=2*ca/t;return n.invert=function(n,r){n*=2;var s=Math.abs(r);if(s>i){var c=Math.min(t-1,Math.max(0,Math.floor((n+ca)/M)));n=(n+ca*(t-1)/t-c*M)*o/e;var f=d3.geo.collignon.raw.invert(n,.25*(s-i)*e/u+h);return f[0]-=ca*(t-1)/t-c*M,0>r&&(f[1]=-f[1]),f}return a.invert(n,r)},n}function dn(){function t(){var t=180/n;return{type:"Polygon",coordinates:[d3.range(-180,180+t/2,t).map(function(t,n){return[t,1&n?90-1e-6:Pa]}).concat(d3.range(180,-180-t/2,-t).map(function(t,n){return[t,1&n?-90+1e-6:-Pa]}))]}}var n=2,a=da(gn),r=a(n),e=r.stream;return r.lobes=function(t){return arguments.length?a(n=+t):n},r.stream=function(n){var a=r.rotate(),o=e(n),i=(r.rotate([0,0]),e(n));return r.rotate(a),o.sphere=function(){d3.geo.stream(t(),i)},o},r}function bn(t){function n(n,e){var o,i,f=1-Math.sin(e);if(f&&2>f){var v,l=ca/2-e,g=25;do{var d=Math.sin(l),b=Math.cos(l),p=h+Math.atan2(d,r-b),w=1+c-2*r*b;l-=v=(l-s*h-r*d+w*p-.5*f*a)/(2*r*d*p)}while(Math.abs(v)>sa&&--g>0);o=u*Math.sqrt(w),i=n*p/ca}else o=u*(t+f),i=n*h/ca;return[o*Math.sin(i),M-o*Math.cos(i)]}var a,r=1+t,e=Math.sin(1/r),h=o(e),u=2*Math.sqrt(ca/(a=ca+4*h*r)),M=.5*u*(r+Math.sqrt(t*(2+t))),s=t*t,c=r*r;return n.invert=function(t,n){var e=t*t+(n-=M)*n,f=(1+c-e/(u*u))/(2*r),v=i(f),l=Math.sin(v),g=h+Math.atan2(l,r-f);return[o(t/Math.sqrt(e))*ca/g,o(1-2*(v-s*h-r*l+(1+c-2*r*f)*g)/a)]},n}function pn(){var t=1,n=da(bn),a=n(t);return a.ratio=function(a){return arguments.length?n(t=+a):t},a}function wn(t,n){return n>-ka?(t=qa(t,n),t[1]+=_a,t):T(t,n)}function qn(t,n){return Math.abs(n)>ka?(t=qa(t,n),t[1]-=n>0?_a:-_a,t):T(t,n)}function mn(t,n){return[3*t/(2*ca)*Math.sqrt(ca*ca/3-n*n),n]}function yn(t){function n(n,a){if(Math.abs(Math.abs(a)-ca/2)<Ma)return[0,0>a?-2:2];var r=Math.sin(a),e=Math.pow((1+r)/(1-r),t/2),o=.5*(e+1/e)+Math.cos(n*=t);return[2*Math.sin(n)/o,(e-1/e)/o]}return n.invert=function(n,a){var r=Math.abs(a);if(Math.abs(r-2)<Ma)return n?null:[0,e(a)*ca/2];if(r>2)return null;n/=2,a/=2;var i=n*n,h=a*a,u=2*a/(1+i+h);return u=Math.pow((1+u)/(1-u),1/t),[Math.atan2(2*n,1-i-h)/t,o((u-1)/(u+1))]},n}function Sn(){var t=.5,n=da(yn),a=n(t);return a.spacing=function(a){return arguments.length?n(t=+a):t},a}function Qn(t,n){return[t*(1+Math.sqrt(Math.cos(n)))/2,n/(Math.cos(n/2)*Math.cos(t/6))]}function Rn(t,n){var a=t*t,r=n*n;return[t*(.975534+r*(-.119161+a*-.0143059+r*-.0547009)),n*(1.00384+a*(.0802894+r*-.02855+199025e-9*a)+r*(.0998909+r*-.0491032))]}function Tn(t,n){return[Math.sin(t)/Math.cos(n),Math.tan(n)*Math.cos(t)]}function xn(t){function n(n,e){var o=e-t,i=Math.abs(o)<Ma?n*a:Math.abs(i=ca/4+e/2)<Ma||Math.abs(Math.abs(i)-ca/2)<Ma?0:n*o/Math.log(Math.tan(i)/r);return[i,o]}var a=Math.cos(t),r=Math.tan(ca/4+t/2);return n.invert=function(n,e){var o,i=e+t;return[Math.abs(e)<Ma?n/a:Math.abs(o=ca/4+i/2)<Ma||Math.abs(Math.abs(o)-ca/2)<Ma?0:n*Math.log(Math.tan(o)/r)/e,i]},n}function En(t,n){return[t,1.25*Math.log(Math.tan(ca/4+.4*n))]}function Pn(t){function n(n,r){for(var e,o=Math.cos(r),i=2/(1+o*Math.cos(n)),h=i*o*Math.sin(n),u=i*Math.sin(r),M=a,s=t[M],c=s[0],f=s[1];--M>=0;)s=t[M],c=s[0]+h*(e=c)-u*f,f=s[1]+h*f+u*e;return c=h*(e=c)-u*f,f=h*f+u*e,[c,f]}var a=t.length-1;return n.invert=function(n,r){var e=20,i=n,h=r;do{for(var u,M=a,s=t[M],c=s[0],f=s[1],v=0,l=0;--M>=0;)s=t[M],v=c+i*(u=v)-h*l,l=f+i*l+h*u,c=s[0]+i*(u=c)-h*f,f=s[1]+i*f+h*u;v=c+i*(u=v)-h*l,l=f+i*l+h*u,c=i*(u=c)-h*f-n,f=i*f+h*u-r;var g,d,b=v*v+l*l;i-=g=(c*v+f*l)/b,h-=d=(f*v-c*l)/b}while(Math.abs(g)+Math.abs(d)>Ma*Ma&&--e>0);if(e){var p=Math.sqrt(i*i+h*h),w=2*Math.atan(.5*p),q=Math.sin(w);return[Math.atan2(i*q,p*Math.cos(w)),p?o(h*q/p):0]}},n}function kn(){var t=za.miller,n=da(Pn),a=n(t);return a.coefficients=function(a){return arguments.length?n(t="string"==typeof a?za[a]:a):t},a}function _n(t,n){var a=Math.sqrt(6),r=Math.sqrt(7),e=Math.asin(7*Math.sin(n)/(3*a));return[a*t*(2*Math.cos(2*e/3)-1)/r,9*Math.sin(e/3)/r]}function zn(t,n){for(var a,r=(1+Math.SQRT1_2)*Math.sin(n),e=n,o=0;25>o&&(e-=a=(Math.sin(e/2)+Math.sin(e)-r)/(.5*Math.cos(e/2)+Math.cos(e)),!(Math.abs(a)<Ma));o++);return[t*(1+2*Math.cos(e)/Math.cos(e/2))/(3*Math.SQRT2),2*Math.sqrt(3)*Math.sin(e/2)/Math.sqrt(2+Math.SQRT2)]}function Bn(t,n){for(var a,r=Math.sqrt(6/(4+ca)),e=(1+ca/4)*Math.sin(n),o=n/2,i=0;25>i&&(o-=a=(o/2+Math.sin(o)-e)/(.5+Math.cos(o)),!(Math.abs(a)<Ma));i++);return[r*(.5+Math.cos(o))*t/1.5,r*o]}function Fn(t,n){var a=n*n,r=a*a;return[t*(.8707-.131979*a+r*(-.013791+r*(.003971*a-.001529*r))),n*(1.007226+a*(.015085+r*(-.044475+.028874*a-.005916*r)))]}function An(t,n){return[t*(1+Math.cos(n))/2,2*(n-Math.tan(n/2))]}function Gn(t,n){if(Math.abs(n)<Ma)return[t,0];var a=Math.tan(n),r=t*Math.sin(n);return[Math.sin(r)/a,n+(1-Math.cos(r))/a]}function jn(t){function n(n,r){var e=a?Math.tan(n*a/2)/a:n/2;if(!r)return[2*e,-t];var o=2*Math.atan(e*Math.sin(r)),i=1/Math.tan(r);return[Math.sin(o)*i,r+(1-Math.cos(o))*i-t]}var a=Math.sin(t);return n.invert=function(n,r){if(Math.abs(r+=t)<Ma)return[a?2*Math.atan(a*n/2)/a:n,0];var e,h=n*n+r*r,u=0,M=10;do{var s=Math.tan(u),c=1/Math.cos(u),f=h-2*r*u+u*u;u-=e=(s*f+2*(u-r))/(2+f*c*c+2*(u-r)*s)}while(Math.abs(e)>Ma&&--M>0);var v=n*(s=Math.tan(u)),l=Math.tan(Math.abs(r)<Math.abs(u+1/s)?.5*o(v):.5*i(v)+ca/4)/Math.sin(u);return[a?2*Math.atan(a*l)/a:2*l,u]},n}function Cn(t,n){var a,r=Math.min(18,36*Math.abs(n)/ca),e=Math.floor(r),o=r-e,i=(a=Fa[e])[0],h=a[1],u=(a=Fa[++e])[0],M=a[1],s=(a=Fa[Math.min(19,++e)])[0],c=a[1];return[t*(u+o*(s-i)/2+o*o*(s-2*u+i)/2),(n>0?ca:-ca)/2*(M+o*(c-h)/2+o*o*(c-2*M+h)/2)]}function Dn(t){function n(n,a){var r=Math.cos(a),e=(t-1)/(t-r*Math.cos(n));return[e*r*Math.sin(n),e*Math.sin(a)]}return n.invert=function(n,a){var r=n*n+a*a,e=Math.sqrt(r),i=(t-Math.sqrt(1-r*(t+1)/(t-1)))/((t-1)/e+e/(t-1));return[Math.atan2(n*i,e*Math.sqrt(1-i*i)),e?o(a*i/e):0]},n}function Ln(t,n){function a(n,a){var i=r(n,a),h=i[1],u=h*o/(t-1)+e;return[i[0]*e/u,h/u]}var r=Dn(t);if(!n)return r;var e=Math.cos(n),o=Math.sin(n);return a.invert=function(n,a){var i=(t-1)/(t-1-a*o);return r.invert(i*n,i*a*e)},a}function On(){var t=1.4,n=0,a=da(Ln),r=a(t,n);return r.distance=function(r){return arguments.length?a(t=+r,n):t},r.tilt=function(r){return arguments.length?a(t,n=r*ca/180):180*n/ca},r}function Hn(t,n){var a=Math.tan(n/2),r=Math.sin(ca/4*a);return[t*(.74482-.34588*r*r),1.70711*a]}function In(t){function n(n,o){var u=i(Math.cos(o)*Math.cos(n-a)),M=i(Math.cos(o)*Math.cos(n-r)),s=0>o?-1:1;return u*=u,M*=M,[(u-M)/(2*t),s*h(4*e*M-(e-u+M)*(e-u+M))/(2*t)]}if(!t)return d3.geo.azimuthalEquidistant.raw;var a=-t/2,r=-a,e=t*t,o=Math.tan(r),u=.5/Math.sin(r);return n.invert=function(t,n){var e,h,M=n*n,s=Math.cos(Math.sqrt(M+(e=t+a)*e)),c=Math.cos(Math.sqrt(M+(e=t+r)*e));return[Math.atan2(h=s-c,e=(s+c)*o),(0>n?-1:1)*i(Math.sqrt(e*e+h*h)*u)]},n}function Jn(){var t=[[0,0],[0,0]],n=da(In),a=n(0),r=a.rotate;return delete a.rotate,a.points=function(a){if(!arguments.length)return t;t=a;var e=d3.geo.interpolate(a[0],a[1]),i=e(.5),h=d3.geo.rotation([-i[0],-i[1]])(a[0]),u=.5*e.distance,M=(h[0]<0?-1:1)*h[1]*va,s=o(Math.sin(M)/Math.sin(u));return r.call(h,[-i[0],-i[1],-s*la]),n(2*u)},a}function Kn(t){function n(t,n){var r=d3.geo.gnomonic.raw(t,n);return r[0]*=a,r}var a=Math.cos(t);return n.invert=function(t,n){return d3.geo.gnomonic.raw.invert(t/a,n)},n}function Nn(){var t=[[0,0],[0,0]],n=da(Kn),a=n(0),r=a.rotate;return delete a.rotate,a.points=function(a){if(!arguments.length)return t;t=a;var e=d3.geo.interpolate(a[0],a[1]),i=e(.5),h=twoPointEquidistant_rotate(-i[0]*va,-i[1]*va,a[0][0]*va,a[0][1]*va),u=.5*e.distance,M=(h[0]<0?-1:1)*h[1],s=o(Math.sin(M)/Math.sin(u));return r.call(h,[-i[0],-i[1],-s*la]),n(u)},a}function Un(t,n){if(Math.abs(n)<Ma)return[t,0];var a=Math.abs(2*n/ca),r=o(a);if(Math.abs(t)<Ma||Math.abs(Math.abs(n)-ca/2)<Ma)return[0,e(n)*ca*Math.tan(r/2)];var i=Math.cos(r),h=Math.abs(ca/t-t/ca)/2,u=h*h,M=i/(a+i-1),s=M*(2/a-1),c=s*s,f=c+u,v=M-c,l=u+M;return[e(t)*ca*(h*v+Math.sqrt(u*v*v-f*(M*M-c)))/f,e(n)*ca*(s*l-h*Math.sqrt((u+1)*f-l*l))/f]}function Vn(t,n){if(Math.abs(n)<Ma)return[t,0];var a=Math.abs(2*n/ca),r=o(a);if(Math.abs(t)<Ma||Math.abs(Math.abs(n)-ca/2)<Ma)return[0,e(n)*ca*Math.tan(r/2)];var i=Math.cos(r),u=Math.abs(ca/t-t/ca)/2,M=u*u,s=i*(Math.sqrt(1+M)-u*i)/(1+M*a*a);return[e(t)*ca*s,e(n)*ca*h(1-s*(2*u+s))]}function Wn(t,n){if(Math.abs(n)<Ma)return[t,0];var a=2*n/ca,r=o(a);if(Math.abs(t)<Ma||Math.abs(Math.abs(n)-ca/2)<Ma)return[0,ca*Math.tan(r/2)];var i=(ca/t-t/ca)/2,u=a/(1+Math.cos(r));return[ca*(e(t)*h(i*i+1-u*u)-i),ca*u]}function Xn(t,n){if(!n)return[t,0];var a=Math.abs(n);if(!t||a===ca/2)return[0,n];var r=2*a/ca,o=r*r,i=(8*r-o*(o+2)-5)/(2*o*(r-1)),u=i*i,M=r*i,s=o+u+2*M,c=r+3*i,f=2*t/ca,v=f+1/f,l=e(Math.abs(t)-ca/2)*Math.sqrt(v*v-4),g=l*l,d=s*(o+u*g-1)+(1-o)*(o*(c*c+4*u)+12*M*u+4*u*u),b=(l*(s+u-1)+2*h(d))/(4*s+g);return[e(t)*ca*b/2,e(n)*ca/2*h(1+l*Math.abs(b)-b*b)]}function Yn(t,n){return[t*Math.sqrt(1-3*n*n/(ca*ca)),n]}function Zn(t,n){var a=.90631*Math.sin(n),r=Math.sqrt(1-a*a),e=Math.sqrt(2/(1+r*Math.cos(t/=3)));return[2.66723*r*e*Math.sin(t),1.24104*a*e]}function $n(t,n){var a=Math.cos(n),r=Math.cos(t)*a,e=1-r,o=Math.cos(t=Math.atan2(Math.sin(t)*a,-Math.sin(n))),i=Math.sin(t);return a=h(1-r*r),[i*a-o*e,-o*a-i*e]}function ta(t,n){var a=s(t,n);return[(a[0]+2*t/ca)/2,(a[1]+n)/2]}d3.geo.project=function(t,a){var r=a.stream;if(!r)throw new Error("not yet supported");return(t&&na.hasOwnProperty(t.type)?na[t.type]:n)(t,r)};var na={Feature:t,FeatureCollection:function(n,a){return{type:"FeatureCollection",features:n.features.map(function(n){return t(n,a)})}}},aa=[],ra=[],ea=[],oa={point:function(t,n){aa.push([t,n])},result:function(){var t=aa.length?aa.length<2?{type:"Point",coordinates:aa[0]}:{type:"MultiPoint",coordinates:aa}:null;return aa=[],t}},ia={lineStart:a,point:function(t,n){aa.push([t,n])},lineEnd:function(){aa.length&&(ra.push(aa),aa=[])},result:function(){var t=ra.length?ra.length<2?{type:"LineString",coordinates:ra[0]}:{type:"MultiLineString",coordinates:ra}:null;return ra=[],t}},ha={polygonStart:a,lineStart:a,point:function(t,n){aa.push([t,n])},lineEnd:function(){var t=aa.length;if(t){do aa.push(aa[0].slice());while(++t<4);ra.push(aa),aa=[]}},polygonEnd:function(){ra.length&&(ea.push(ra),ra=[])},result:function(){var t=ea.length?ea.length<2?{type:"Polygon",coordinates:ea[0]}:{type:"MultiPolygon",coordinates:ea}:null;return ea=[],t}},ua={Point:oa,MultiPoint:oa,LineString:ia,MultiLineString:ia,Polygon:ha,MultiPolygon:ha},Ma=1e-6,sa=Ma*Ma,ca=Math.PI,fa=Math.sqrt(ca),va=ca/180,la=180/ca,ga=d3.geo.projection,da=d3.geo.projectionMutator;d3.geo.interrupt=function(t){function n(n,a){for(var r=0>a?-1:1,e=h[+(0>a)],o=0,i=e.length-1;i>o&&n>e[o][2][0];++o);var u=t(n-e[o][1][0],a);return u[0]+=t(e[o][1][0],r*a>r*e[o][0][1]?e[o][0][1]:a)[0],u}function a(){i=h.map(function(n){return n.map(function(n){var a,r=t(n[0][0],n[0][1])[0],e=t(n[2][0],n[2][1])[0],o=t(n[1][0],n[0][1])[1],i=t(n[1][0],n[1][1])[1];return o>i&&(a=o,o=i,i=a),[[r,o],[e,i]]})})}function r(){for(var t=1e-6,n=[],a=0,r=h[0].length;r>a;++a){var o=h[0][a],i=180*o[0][0]/ca,u=180*o[0][1]/ca,M=180*o[1][1]/ca,s=180*o[2][0]/ca,c=180*o[2][1]/ca;n.push(e([[i+t,u+t],[i+t,M-t],[s-t,M-t],[s-t,c+t]],30))}for(var a=h[1].length-1;a>=0;--a){var o=h[1][a],i=180*o[0][0]/ca,u=180*o[0][1]/ca,M=180*o[1][1]/ca,s=180*o[2][0]/ca,c=180*o[2][1]/ca;n.push(e([[s-t,c-t],[s-t,M+t],[i+t,M+t],[i+t,u-t]],30))}return{type:"Polygon",coordinates:[d3.merge(n)]}}function e(t,n){for(var a,r,e,o=-1,i=t.length,h=t[0],u=[];++o<i;){a=t[o],r=(a[0]-h[0])/n,e=(a[1]-h[1])/n;for(var M=0;n>M;++M)u.push([h[0]+M*r,h[1]+M*e]);h=a}return u.push(a),u}function o(t,n){return Math.abs(t[0]-n[0])<Ma&&Math.abs(t[1]-n[1])<Ma}var i,h=[[[[-ca,0],[0,ca/2],[ca,0]]],[[[-ca,0],[0,-ca/2],[ca,0]]]];t.invert&&(n.invert=function(a,r){for(var e=i[+(0>r)],u=h[+(0>r)],M=0,s=e.length;s>M;++M){var c=e[M];if(c[0][0]<=a&&a<c[1][0]&&c[0][1]<=r&&r<c[1][1]){var f=t.invert(a-t(u[M][1][0],0)[0],r);return f[0]+=u[M][1][0],o(n(f[0],f[1]),[a,r])?f:null}}});var u=d3.geo.projection(n),M=u.stream;return u.stream=function(t){var n=u.rotate(),a=M(t),e=(u.rotate([0,0]),M(t));return u.rotate(n),a.sphere=function(){d3.geo.stream(r(),e)},a},u.lobes=function(t){return arguments.length?(h=t.map(function(t){return t.map(function(t){return[[t[0][0]*ca/180,t[0][1]*ca/180],[t[1][0]*ca/180,t[1][1]*ca/180],[t[2][0]*ca/180,t[2][1]*ca/180]]})}),a(),u):h.map(function(t){return t.map(function(t){return[[180*t[0][0]/ca,180*t[0][1]/ca],[180*t[1][0]/ca,180*t[1][1]/ca],[180*t[2][0]/ca,180*t[2][1]/ca]]})})},u},(d3.geo.airy=M).raw=u,s.invert=function(t,n){var a=t,r=n,e=25;do{var o,h=Math.sin(a),u=Math.sin(a/2),M=Math.cos(a/2),s=Math.sin(r),c=Math.cos(r),f=Math.sin(2*r),v=s*s,l=c*c,g=u*u,d=1-l*M*M,b=d?i(c*M)*Math.sqrt(o=1/d):o=0,p=2*b*c*u-t,w=b*s-n,q=o*(l*g+b*c*M*v),m=o*(.5*h*f-2*b*s*u),y=.25*o*(f*u-b*s*l*h),S=o*(v*M+b*g*c),Q=m*y-S*q;if(!Q)break;var R=(w*m-p*S)/Q,T=(p*y-w*q)/Q;a-=R,r-=T}while((Math.abs(R)>Ma||Math.abs(T)>Ma)&&--e>0);return[a,r]},(d3.geo.aitoff=function(){return ga(s)}).raw=s,(d3.geo.armadillo=f).raw=c,p.invert=function(t,n){if(t*=3/8,n*=3/8,!t&&Math.abs(n)>1)return null;var a=t*t,r=n*n,i=1+a+r,h=Math.sqrt(.5*(i-Math.sqrt(i*i-4*n*n))),u=o(h)/3,M=h?b(Math.abs(n/h))/3:d(Math.abs(t))/3,s=Math.cos(u),c=g(M),f=c*c-s*s;return[2*e(t)*Math.atan2(l(M)*s,.25-f),2*e(n)*Math.atan2(c*Math.sin(u),.25+f)]},(d3.geo.august=function(){return ga(p)}).raw=p;var ba=Math.log(1+Math.SQRT2);w.invert=function(t,n){if((r=Math.abs(n))<ba)return[t,2*Math.atan(Math.exp(n))-ca/2];var a,r,o=Math.sqrt(8),i=ca/4,h=25;do{var u=Math.cos(i/2),M=Math.tan(i/2);i-=a=(o*(i-ca/4)-Math.log(M)-r)/(o-.5*u*u/M)}while(Math.abs(a)>sa&&--h>0);return[t/(Math.cos(i)*(o-1/Math.sin(i))),e(n)*i]},(d3.geo.baker=function(){return ga(w)}).raw=w;var pa=d3.geo.azimuthalEquidistant.raw;(d3.geo.berghaus=m).raw=q;var wa=y(ca),qa=S(2*Math.SQRT2/ca,Math.SQRT2,ca);(d3.geo.mollweide=function(){return ga(qa)}).raw=qa,Q.invert=function(t,n){var a,r,e=2.00276,o=e*n,i=0>n?-ca/4:ca/4,h=25;do r=o-Math.SQRT2*Math.sin(i),i-=a=(Math.sin(2*i)+2*i-ca*Math.sin(r))/(2*Math.cos(2*i)+2+ca*Math.cos(r)*Math.SQRT2*Math.cos(i));while(Math.abs(a)>Ma&&--h>0);return r=o-Math.SQRT2*Math.sin(i),[t*(1/Math.cos(r)+1.11072/Math.cos(i))/e,r]},(d3.geo.boggs=function(){return ga(Q)}).raw=Q,T.invert=function(t,n){return[t/Math.cos(n),n]},(d3.geo.sinusoidal=function(){return ga(T)}).raw=T,(d3.geo.bonne=function(){return R(x).parallel(45)}).raw=x;var ma=S(1,4/ca,ca);(d3.geo.bromley=function(){return ga(ma)}).raw=ma,(d3.geo.chamberlin=P).raw=E,F.invert=function(t,n){var a=(a=n/fa-1)*a;return[a>0?t*Math.sqrt(ca/a)/2:0,o(1-a)]},(d3.geo.collignon=function(){return ga(F)}).raw=F,(d3.geo.craig=function(){return R(A)}).raw=A,G.invert=function(t,n){var a=Math.sqrt(3),r=3*o(n/(a*fa));return[fa*t/(a*(2*Math.cos(2*r/3)-1)),r]},(d3.geo.craster=function(){return ga(G)}).raw=G,(d3.geo.cylindricalEqualArea=function(){return R(j)}).raw=j,(d3.geo.cylindricalStereographic=function(){return R(C)}).raw=C,D.invert=function(t,n){var a=Math.sqrt(8/(3*ca)),r=n/a;return[t/(a*(1-Math.abs(r)/ca)),r]},(d3.geo.eckert1=function(){return ga(D)}).raw=D,L.invert=function(t,n){var a=2-Math.abs(n)/Math.sqrt(2*ca/3);return[t*Math.sqrt(6*ca)/(2*a),e(n)*o((4-a*a)/3)]},(d3.geo.eckert2=function(){return ga(L)}).raw=L,O.invert=function(t,n){var a=Math.sqrt(ca*(4+ca))/2;return[t*a/(1+h(1-n*n*(4+ca)/(4*ca))),n*a/2]},(d3.geo.eckert3=function(){return ga(O)}).raw=O,H.invert=function(t,n){var a=.5*n*Math.sqrt((4+ca)/ca),r=o(a),e=Math.cos(r);return[t/(2/Math.sqrt(ca*(4+ca))*(1+e)),o((r+a*(e+2))/(2+ca/2))]},(d3.geo.eckert4=function(){return ga(H)}).raw=H,I.invert=function(t,n){var a=Math.sqrt(2+ca),r=n*a/2;return[a*t/(1+Math.cos(r)),r]},(d3.geo.eckert5=function(){return ga(I)}).raw=I,J.invert=function(t,n){var a=1+ca/2,r=Math.sqrt(a/2);return[2*t*r/(1+Math.cos(n*=r)),o((n+Math.sin(n))/a)]},(d3.geo.eckert6=function(){return ga(J)}).raw=J,K.invert=function(t,n){var a=d3.geo.august.raw.invert(t/1.2,1.065*n);if(!a)return null;var r=a[0],e=a[1],o=20;t/=ya,n/=ya;do{var i=r/2,h=e/2,u=Math.sin(i),M=Math.cos(i),s=Math.sin(h),c=Math.cos(h),f=Math.cos(e),v=Math.sqrt(f),l=s/(c+Math.SQRT2*M*v),g=l*l,d=Math.sqrt(2/(1+g)),b=Math.SQRT2*c+(M+u)*v,p=Math.SQRT2*c+(M-u)*v,w=b/p,q=Math.sqrt(w),m=q-1/q,y=q+1/q,S=d*m-2*Math.log(q)-t,Q=d*l*y-2*Math.atan(l)-n,R=s&&Math.SQRT1_2*v*u*g/s,T=(Math.SQRT2*M*c+v)/(2*(c+Math.SQRT2*M*v)*(c+Math.SQRT2*M*v)*v),x=-.5*l*d*d*d,E=x*R,P=x*T,k=(k=2*c+Math.SQRT2*v*(M-u))*k*q,_=(Math.SQRT2*M*c*v+f)/k,z=-(Math.SQRT2*u*s)/(v*k),B=m*E-2*_/q+d*(_+_/w),F=m*P-2*z/q+d*(z+z/w),A=l*y*E-2*R/(1+g)+d*y*R+d*l*(_-_/w),G=l*y*P-2*T/(1+g)+d*y*T+d*l*(z-z/w),j=F*A-G*B;
if(!j)break;var C=(Q*F-S*G)/j,D=(S*A-Q*B)/j;r-=C,e=Math.max(-ca/2,Math.min(ca/2,e-D))}while((Math.abs(C)>Ma||Math.abs(D)>Ma)&&--o>0);return Math.abs(Math.abs(e)-ca/2)<Ma?[0,e]:o&&[r,e]};var ya=3+2*Math.SQRT2;(d3.geo.eisenlohr=function(){return ga(K)}).raw=K,N.invert=function(t,n){var a=n/(1+Sa);return[t?t/(Sa*h(1-a*a)):0,2*Math.atan(a)]};var Sa=Math.cos(35*va);(d3.geo.fahey=function(){return ga(N)}).raw=N,U.invert=function(t,n){var a=Math.atan(n/fa),r=Math.cos(a),e=2*a;return[.5*t*fa/(Math.cos(e)*r*r),e]},(d3.geo.foucaut=function(){return ga(U)}).raw=U,d3.geo.gilbert=function(t){function n(n){return t([.5*n[0],o(Math.tan(.5*n[1]*va))*la])}var a=d3.geo.equirectangular().scale(la).translate([0,0]);return t.invert&&(n.invert=function(n){return n=t.invert(n),n[0]*=2,n[1]=2*Math.atan(Math.sin(n[1]*va))*la,n}),n.stream=function(n){n=t.stream(n);var r=a.stream({point:function(t,a){n.point(.5*t,o(Math.tan(.5*-a*va))*la)},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}});return r.sphere=function(){n.sphere()},r.valid=!1,r},n};var Qa=V(2.8284,-1.6988,.75432,-.18071,1.76003,-.38914,.042555);(d3.geo.ginzburg4=function(){return ga(Qa)}).raw=Qa;var Ra=V(2.583819,-.835827,.170354,-.038094,1.543313,-.411435,.082742);(d3.geo.ginzburg5=function(){return ga(Ra)}).raw=Ra;var Ta=V(5/6*ca,-.62636,-.0344,0,1.3493,-.05524,0,.045);(d3.geo.ginzburg6=function(){return ga(Ta)}).raw=Ta,W.invert=function(t,n){var a,r=t,e=n,o=50;do{var i=e*e;e-=a=(e*(1+i/12)-n)/(1+i/4)}while(Math.abs(a)>Ma&&--o>0);o=50,t/=1-.162388*i;do{var h=(h=r*r)*h;r-=a=(r*(.87-952426e-9*h)-t)/(.87-.00476213*h)}while(Math.abs(a)>Ma&&--o>0);return[r,e]},(d3.geo.ginzburg8=function(){return ga(W)}).raw=W;var xa=V(2.6516,-.76534,.19123,-.047094,1.36289,-.13965,.031762);(d3.geo.ginzburg9=function(){return ga(xa)}).raw=xa,Y.invert=function(t,n){var a=e(t),r=e(n),i=-a*t,h=-r*n,u=1>h/i,M=$(u?h:i,u?i:h),s=M[0],c=M[1];u&&(s=-ca/2-s);var f=Math.cos(c),t=Math.cos(s)*f,n=Math.sin(s)*f,v=Math.sin(c);return[a*(Math.atan2(n,-v)+ca),r*o(t)]},d3.geo.gringorten=X(Y),en.invert=function(t,n){var a=(Math.SQRT2-1)/(Math.SQRT2+1),r=Math.sqrt(1-a*a),e=rn(ca/2,r*r),o=-1,i=tn(.5*e-n,-t,r*r),h=hn(i[0],i[1]),u=Math.atan2(h[1],h[0])/o;return[u,2*Math.atan(Math.exp(.5/o*Math.log(a*h[0]*h[0]+a*h[1]*h[1])))-ca/2]},d3.geo.guyou=X(en),(d3.geo.hammerRetroazimuthal=sn).raw=un;var Ea=d3.geo.azimuthalEqualArea.raw;vn.invert=function(t,n){var a=2*o(n/2);return[t*Math.cos(a/2)/Math.cos(a),a]},(d3.geo.hammer=fn).raw=cn,ln.invert=function(t,n){var a=Math.abs(a=n*(0>n?.5179951515653813:.5686373742600607))>1-Ma?a>0?ca/2:-ca/2:o(a);return[1.1764705882352942*t/Math.cos(a),Math.abs(a=((a+=a)+Math.sin(a))*(0>n?.4102345310814193:.3736990601468637))>1-Ma?a>0?ca/2:-ca/2:o(a)]},(d3.geo.hatano=function(){return ga(ln)}).raw=ln;var Pa=41+48/36+37/3600;(d3.geo.healpix=dn).raw=gn,(d3.geo.hill=pn).raw=bn;var ka=.7109889596207567,_a=.0528035274542;wn.invert=function(t,n){return n>-ka?qa.invert(t,n-_a):T.invert(t,n)},(d3.geo.sinuMollweide=function(){return ga(wn).rotate([-20,-55])}).raw=wn,qn.invert=function(t,n){return Math.abs(n)>ka?qa.invert(t,n+(n>0?_a:-_a)):T.invert(t,n)},(d3.geo.homolosine=function(){return ga(qn)}).raw=qn,mn.invert=function(t,n){return[2/3*ca*t/Math.sqrt(ca*ca/3-n*n),n]},(d3.geo.kavrayskiy7=function(){return ga(mn)}).raw=mn,(d3.geo.lagrange=Sn).raw=yn,Qn.invert=function(t,n){var a=Math.abs(t),r=Math.abs(n),e=ca/Math.SQRT2,o=Ma,u=ca/2;e>r?u*=r/e:o+=6*i(e/r);for(var M=0;25>M;M++){var s=Math.sin(u),c=h(Math.cos(u)),f=Math.sin(u/2),v=Math.cos(u/2),l=Math.sin(o/6),g=Math.cos(o/6),d=.5*o*(1+c)-a,b=u/(v*g)-r,p=c?-.25*o*s/c:0,w=.5*(1+c),q=(1+.5*u*f/v)/(v*g),m=u/v*(l/6)/(g*g),y=p*m-q*w,S=(d*m-b*w)/y,Q=(b*p-d*q)/y;if(u-=S,o-=Q,Math.abs(S)<Ma&&Math.abs(Q)<Ma)break}return[0>t?-o:o,0>n?-u:u]},(d3.geo.larrivee=function(){return ga(Qn)}).raw=Qn,Rn.invert=function(t,n){var a=e(t)*ca,r=n/2,o=50;do{var i=a*a,h=r*r,u=a*r,M=a*(.975534+h*(-.119161+i*-.0143059+h*-.0547009))-t,s=r*(1.00384+i*(.0802894+h*-.02855+199025e-9*i)+h*(.0998909+h*-.0491032))-n,c=.975534-h*(.119161+.0143059*3*i+.0547009*h),f=-u*(.238322+.2188036*h+.0286118*i),v=u*(.1605788+7961e-7*i+-0.0571*h),l=1.00384+i*(.0802894+199025e-9*i)+h*(3*(.0998909-.02855*i)-.245516*h),g=f*v-l*c,d=(s*f-M*l)/g,b=(M*v-s*c)/g;a-=d,r-=b}while((Math.abs(d)>Ma||Math.abs(b)>Ma)&&--o>0);return o&&[a,r]},(d3.geo.laskowski=function(){return ga(Rn)}).raw=Rn,Tn.invert=function(t,n){var a=t*t,r=n*n,h=r+1,u=t?Math.SQRT1_2*Math.sqrt((h-Math.sqrt(a*a+2*a*(r-1)+h*h))/a+1):1/Math.sqrt(h);return[o(t*u),e(n)*i(u)]},(d3.geo.littrow=function(){return ga(Tn)}).raw=Tn,(d3.geo.loximuthal=function(){return R(xn).parallel(40)}).raw=xn,En.invert=function(t,n){return[t,2.5*Math.atan(Math.exp(.8*n))-.625*ca]},(d3.geo.miller=function(){return ga(En)}).raw=En;var za={alaska:[[.9972523,0],[.0052513,-.0041175],[.0074606,.0048125],[-.0153783,-.1968253],[.0636871,-.1408027],[.3660976,-.2937382]],gs48:[[.98879,0],[0,0],[-.050909,0],[0,0],[.075528,0]],gs50:[[.984299,0],[.0211642,.0037608],[-.1036018,-.0575102],[-.0329095,-.0320119],[.0499471,.1223335],[.026046,.0899805],[7388e-7,-.1435792],[.0075848,-.1334108],[-.0216473,.0776645],[-.0225161,.0853673]],miller:[[.9245,0],[0,0],[.01943,0]],lee:[[.721316,0],[0,0],[-.00881625,-.00617325]]};(d3.geo.modifiedStereographic=kn).raw=Pn,_n.invert=function(t,n){var a=Math.sqrt(6),r=Math.sqrt(7),e=3*o(n*r/9);return[t*r/(a*(2*Math.cos(2*e/3)-1)),o(3*Math.sin(e)*a/7)]},(d3.geo.mtFlatPolarParabolic=function(){return ga(_n)}).raw=_n,zn.invert=function(t,n){var a=n*Math.sqrt(2+Math.SQRT2)/(2*Math.sqrt(3)),r=2*o(a);return[3*Math.SQRT2*t/(1+2*Math.cos(r)/Math.cos(r/2)),o((a+Math.sin(r))/(1+Math.SQRT1_2))]},(d3.geo.mtFlatPolarQuartic=function(){return ga(zn)}).raw=zn,Bn.invert=function(t,n){var a=Math.sqrt(6/(4+ca)),r=n/a;return Math.abs(Math.abs(r)-ca/2)<Ma&&(r=0>r?-ca/2:ca/2),[1.5*t/(a*(.5+Math.cos(r))),o((r/2+Math.sin(r))/(1+ca/4))]},(d3.geo.mtFlatPolarSinusoidal=function(){return ga(Bn)}).raw=Bn,Fn.invert=function(t,n){var a,r=n,e=25;do{var o=r*r,i=o*o;r-=a=(r*(1.007226+o*(.015085+i*(-.044475+.028874*o-.005916*i)))-n)/(1.007226+o*(.045255+i*(-0.311325+.259866*o-.005916*11*i)))}while(Math.abs(a)>Ma&&--e>0);return[t/(.8707+(o=r*r)*(-.131979+o*(-.013791+o*o*o*(.003971-.001529*o)))),r]},(d3.geo.naturalEarth=function(){return ga(Fn)}).raw=Fn,An.invert=function(t,n){for(var a=n/2,r=0,e=1/0;10>r&&Math.abs(e)>Ma;r++){var o=Math.cos(n/2);n-=e=(n-Math.tan(n/2)-a)/(1-.5/(o*o))}return[2*t/(1+Math.cos(n)),n]},(d3.geo.nellHammer=function(){return ga(An)}).raw=An;var Ba=X(en);(d3.geo.peirceQuincuncial=function(){return Ba().quincuncial(!0).rotate([-90,-90,45]).clipAngle(180-1e-6)}).raw=Ba.raw,Gn.invert=function(t,n){if(Math.abs(n)<Ma)return[t,0];var a,r=t*t+n*n,h=.5*n,u=10;do{var M=Math.tan(h),s=1/Math.cos(h),c=r-2*n*h+h*h;h-=a=(M*c+2*(h-n))/(2+c*s*s+2*(h-n)*M)}while(Math.abs(a)>Ma&&--u>0);return M=Math.tan(h),[(Math.abs(n)<Math.abs(h+1/M)?o(t*M):e(t)*(i(Math.abs(t*M))+ca/2))/Math.sin(h),h]},(d3.geo.polyconic=function(){return ga(Gn)}).raw=Gn,(d3.geo.rectangularPolyconic=function(){return R(jn)}).raw=jn;var Fa=[[.9986,-.062],[1,0],[.9986,.062],[.9954,.124],[.99,.186],[.9822,.248],[.973,.31],[.96,.372],[.9427,.434],[.9216,.4958],[.8962,.5571],[.8679,.6176],[.835,.6769],[.7986,.7346],[.7597,.7903],[.7186,.8435],[.6732,.8936],[.6213,.9394],[.5722,.9761],[.5322,1]];Fa.forEach(function(t){t[1]*=1.0144}),Cn.invert=function(t,n){var a=2*n/ca,r=90*a,e=Math.min(18,Math.abs(r/5)),o=Math.max(0,Math.floor(e));do{var i=Fa[o][1],h=Fa[o+1][1],u=Fa[Math.min(19,o+2)][1],M=u-i,s=u-2*h+i,c=2*(Math.abs(a)-h)/M,f=s/M,v=c*(1-f*c*(1-2*f*c));if(v>=0||1===o){r=(n>=0?5:-5)*(v+e);var l,g=50;do e=Math.min(18,Math.abs(r)/5),o=Math.floor(e),v=e-o,i=Fa[o][1],h=Fa[o+1][1],u=Fa[Math.min(19,o+2)][1],r-=(l=(n>=0?ca:-ca)/2*(h+v*(u-i)/2+v*v*(u-2*h+i)/2)-n)*la;while(Math.abs(l)>sa&&--g>0);break}}while(--o>=0);var d=Fa[o][0],b=Fa[o+1][0],p=Fa[Math.min(19,o+2)][0];return[t/(b+v*(p-d)/2+v*v*(p-2*b+d)/2),r*va]},(d3.geo.robinson=function(){return ga(Cn)}).raw=Cn,(d3.geo.satellite=On).raw=Ln,Hn.invert=function(t,n){var a=n/1.70711,r=Math.sin(ca/4*a);return[t/(.74482-.34588*r*r),2*Math.atan(a)]},(d3.geo.times=function(){return ga(Hn)}).raw=Hn,(d3.geo.twoPointEquidistant=Jn).raw=In,(d3.geo.twoPointAzimuthal=Nn).raw=Kn,Un.invert=function(t,n){if(Math.abs(n)<Ma)return[t,0];if(Math.abs(t)<Ma)return[0,ca/2*Math.sin(2*Math.atan(n/ca))];var a=(t/=ca)*t,r=(n/=ca)*n,o=a+r,h=o*o,u=-Math.abs(n)*(1+o),M=u-2*r+a,s=-2*u+1+2*r+h,c=r/s+(2*M*M*M/(s*s*s)-9*u*M/(s*s))/27,f=(u-M*M/(3*s))/s,v=2*Math.sqrt(-f/3),l=i(3*c/(f*v))/3;return[ca*(o-1+Math.sqrt(1+2*(a-r)+h))/(2*t),e(n)*ca*(-v*Math.cos(l+ca/3)-M/(3*s))]},(d3.geo.vanDerGrinten=function(){return ga(Un)}).raw=Un,Vn.invert=function(t,n){if(!t)return[0,ca/2*Math.sin(2*Math.atan(n/ca))];var a=Math.abs(t/ca),r=(1-a*a-(n/=ca)*n)/(2*a),o=r*r,i=Math.sqrt(o+1);return[e(t)*ca*(i-r),e(n)*ca/2*Math.sin(2*Math.atan2(Math.sqrt((1-2*r*a)*(r+i)-a),Math.sqrt(i+r+a)))]},(d3.geo.vanDerGrinten2=function(){return ga(Vn)}).raw=Vn,Wn.invert=function(t,n){if(!n)return[t,0];var a=n/ca,r=(ca*ca*(1-a*a)-t*t)/(2*ca*t);return[t?ca*(e(t)*Math.sqrt(r*r+1)-r):0,ca/2*Math.sin(2*Math.atan(a))]},(d3.geo.vanDerGrinten3=function(){return ga(Wn)}).raw=Wn,Xn.invert=function(t,n){if(!t||!n)return[t,n];n/=ca;var a=2*e(t)*t/ca,r=(a*a-1+4*n*n)/Math.abs(a),o=r*r,i=2*n,h=50;do{var u=i*i,M=(8*i-u*(u+2)-5)/(2*u*(i-1)),s=(3*i-u*i-10)/(2*u*i),c=M*M,f=i*M,v=i+M,l=v*v,g=i+3*M,d=l*(u+c*o-1)+(1-u)*(u*(g*g+4*c)+c*(12*f+4*c)),b=-2*v*(4*f*c+(1-4*u+3*u*u)*(1+s)+c*(-6+14*u-o+(-8+8*u-2*o)*s)+f*(-8+12*u+(-10+10*u-o)*s)),p=Math.sqrt(d),w=r*(l+c-1)+2*p-a*(4*l+o),q=r*(2*M*s+2*v*(1+s))+b/p-8*v*(r*(-1+c+l)+2*p)*(1+s)/(o+4*l);i-=δ=w/q}while(δ>Ma&&--h>0);return[e(t)*(Math.sqrt(r*r+4)+r)*ca/4,ca/2*i]},(d3.geo.vanDerGrinten4=function(){return ga(Xn)}).raw=Xn;var Aa=function(){var t=4*ca+3*Math.sqrt(3),n=2*Math.sqrt(2*ca*Math.sqrt(3)/t);return S(n*Math.sqrt(3)/ca,n,t/6)}();(d3.geo.wagner4=function(){return ga(Aa)}).raw=Aa,Yn.invert=function(t,n){return[t/Math.sqrt(1-3*n*n/(ca*ca)),n]},(d3.geo.wagner6=function(){return ga(Yn)}).raw=Yn,Zn.invert=function(t,n){var a=t/2.66723,r=n/1.24104,e=Math.sqrt(a*a+r*r),i=2*o(e/2);return[3*Math.atan2(t*Math.tan(i),2.66723*e),e&&o(n*Math.sin(i)/(1.24104*.90631*e))]},(d3.geo.wagner7=function(){return ga(Zn)}).raw=Zn,$n.invert=function(t,n){var a=-.5*(t*t+n*n),r=Math.sqrt(-a*(2+a)),e=n*a+t*r,i=t*a-n*r,h=Math.sqrt(i*i+e*e);return[Math.atan2(r*e,h*(1+a)),h?-o(r*i/h):0]},(d3.geo.wiechel=function(){return ga($n)}).raw=$n,ta.invert=function(t,n){var a=t,r=n,e=25;do{var o,h=Math.cos(r),u=Math.sin(r),M=Math.sin(2*r),s=u*u,c=h*h,f=Math.sin(a),v=Math.cos(a/2),l=Math.sin(a/2),g=l*l,d=1-c*v*v,b=d?i(h*v)*Math.sqrt(o=1/d):o=0,p=.5*(2*b*h*l+2*a/ca)-t,w=.5*(b*u+r)-n,q=.5*o*(c*g+b*h*v*s)+1/ca,m=o*(f*M/4-b*u*l),y=.125*o*(M*l-b*u*c*f),S=.5*o*(s*v+b*g*h)+.5,Q=m*y-S*q,R=(w*m-p*S)/Q,T=(p*y-w*q)/Q;a-=R,r-=T}while((Math.abs(R)>Ma||Math.abs(T)>Ma)&&--e>0);return[a,r]},(d3.geo.winkel3=function(){return ga(ta)}).raw=ta}();;

topojson = (function() {

  function merge(topology, arcs) {
    var fragmentByStart = {},
        fragmentByEnd = {};

    arcs.forEach(function(i) {
      var e = ends(i),
          start = e[0],
          end = e[1],
          f, g;

      if (f = fragmentByEnd[start]) {
        delete fragmentByEnd[f.end];
        f.push(i);
        f.end = end;
        if (g = fragmentByStart[end]) {
          delete fragmentByStart[g.start];
          var fg = g === f ? f : f.concat(g);
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
        } else if (g = fragmentByEnd[end]) {
          delete fragmentByStart[g.start];
          delete fragmentByEnd[g.end];
          var fg = f.concat(g.map(function(i) { return ~i; }).reverse());
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.start] = fg;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else if (f = fragmentByStart[end]) {
        delete fragmentByStart[f.start];
        f.unshift(i);
        f.start = start;
        if (g = fragmentByEnd[start]) {
          delete fragmentByEnd[g.end];
          var gf = g === f ? f : g.concat(f);
          fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
        } else if (g = fragmentByStart[start]) {
          delete fragmentByStart[g.start];
          delete fragmentByEnd[g.end];
          var gf = g.map(function(i) { return ~i; }).reverse().concat(f);
          fragmentByStart[gf.start = g.end] = fragmentByEnd[gf.end = f.end] = gf;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else if (f = fragmentByStart[start]) {
        delete fragmentByStart[f.start];
        f.unshift(~i);
        f.start = end;
        if (g = fragmentByEnd[end]) {
          delete fragmentByEnd[g.end];
          var gf = g === f ? f : g.concat(f);
          fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
        } else if (g = fragmentByStart[end]) {
          delete fragmentByStart[g.start];
          delete fragmentByEnd[g.end];
          var gf = g.map(function(i) { return ~i; }).reverse().concat(f);
          fragmentByStart[gf.start = g.end] = fragmentByEnd[gf.end = f.end] = gf;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else if (f = fragmentByEnd[end]) {
        delete fragmentByEnd[f.end];
        f.push(~i);
        f.end = start;
        if (g = fragmentByEnd[start]) {
          delete fragmentByStart[g.start];
          var fg = g === f ? f : f.concat(g);
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
        } else if (g = fragmentByStart[start]) {
          delete fragmentByStart[g.start];
          delete fragmentByEnd[g.end];
          var fg = f.concat(g.map(function(i) { return ~i; }).reverse());
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.start] = fg;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else {
        f = [i];
        fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
      }
    });

    function ends(i) {
      var arc = topology.arcs[i], p0 = arc[0], p1 = [0, 0];
      arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
      return [p0, p1];
    }

    var fragments = [];
    for (var k in fragmentByEnd) fragments.push(fragmentByEnd[k]);
    return fragments;
  }

  function mesh(topology, o, filter) {
    var arcs = [];

    if (arguments.length > 1) {
      var geomsByArc = [],
          geom;

      function arc(i) {
        if (i < 0) i = ~i;
        (geomsByArc[i] || (geomsByArc[i] = [])).push(geom);
      }

      function line(arcs) {
        arcs.forEach(arc);
      }

      function polygon(arcs) {
        arcs.forEach(line);
      }

      function geometry(o) {
        if (o.type === "GeometryCollection") o.geometries.forEach(geometry);
        else if (o.type in geometryType) {
          geom = o;
          geometryType[o.type](o.arcs);
        }
      }

      var geometryType = {
        LineString: line,
        MultiLineString: polygon,
        Polygon: polygon,
        MultiPolygon: function(arcs) { arcs.forEach(polygon); }
      };

      geometry(o);

      geomsByArc.forEach(arguments.length < 3
          ? function(geoms, i) { arcs.push(i); }
          : function(geoms, i) { if (filter(geoms[0], geoms[geoms.length - 1])) arcs.push(i); });
    } else {
      for (var i = 0, n = topology.arcs.length; i < n; ++i) arcs.push(i);
    }

    return object(topology, {type: "MultiLineString", arcs: merge(topology, arcs)});
  }

  function featureOrCollection(topology, o) {
    return o.type === "GeometryCollection" ? {
      type: "FeatureCollection",
      features: o.geometries.map(function(o) { return feature(topology, o); })
    } : feature(topology, o);
  }

  function feature(topology, o) {
    var f = {
      type: "Feature",
      id: o.id,
      properties: o.properties || {},
      geometry: object(topology, o)
    };
    if (o.id == null) delete f.id;
    return f;
  }

  function object(topology, o) {
    var tf = topology.transform,
        kx = tf.scale[0],
        ky = tf.scale[1],
        dx = tf.translate[0],
        dy = tf.translate[1],
        arcs = topology.arcs;

    function arc(i, points) {
      if (points.length) points.pop();
      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length, x = 0, y = 0, p; k < n; ++k) points.push([
        (x += (p = a[k])[0]) * kx + dx,
        (y += p[1]) * ky + dy
      ]);
      if (i < 0) reverse(points, n);
    }

    function point(coordinates) {
      return [coordinates[0] * kx + dx, coordinates[1] * ky + dy];
    }

    function line(arcs) {
      var points = [];
      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
      if (points.length < 2) points.push(points[0].slice());
      return points;
    }

    function ring(arcs) {
      var points = line(arcs);
      while (points.length < 4) points.push(points[0].slice());
      return points;
    }

    function polygon(arcs) {
      return arcs.map(ring);
    }

    function geometry(o) {
      var t = o.type;
      return t === "GeometryCollection" ? {type: t, geometries: o.geometries.map(geometry)}
          : t in geometryType ? {type: t, coordinates: geometryType[t](o)}
          : null;
    }

    var geometryType = {
      Point: function(o) { return point(o.coordinates); },
      MultiPoint: function(o) { return o.coordinates.map(point); },
      LineString: function(o) { return line(o.arcs); },
      MultiLineString: function(o) { return o.arcs.map(line); },
      Polygon: function(o) { return polygon(o.arcs); },
      MultiPolygon: function(o) { return o.arcs.map(polygon); }
    };

    return geometry(o);
  }

  function reverse(array, n) {
    var t, j = array.length, i = j - n; while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
  }

  function bisect(a, x) {
    var lo = 0, hi = a.length;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (a[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function neighbors(objects) {
    var indexesByArc = {}, // arc index -> array of object indexes
        neighbors = objects.map(function() { return []; });

    function line(arcs, i) {
      arcs.forEach(function(a) {
        if (a < 0) a = ~a;
        var o = indexesByArc[a];
        if (o) o.push(i);
        else indexesByArc[a] = [i];
      });
    }

    function polygon(arcs, i) {
      arcs.forEach(function(arc) { line(arc, i); });
    }

    function geometry(o, i) {
      if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
      else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
    }

    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
    };

    objects.forEach(geometry);

    for (var i in indexesByArc) {
      for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
        for (var k = j + 1; k < m; ++k) {
          var ij = indexes[j], ik = indexes[k], n;
          if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
          if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
        }
      }
    }

    return neighbors;
  }

  return {
    version: "1.2.3",
    mesh: mesh,
    feature: featureOrCollection,
    neighbors: neighbors
  };
})();
;

function RGBColor(e){this.ok=!1,e.charAt(0)=="#"&&(e=e.substr(1,6)),e=e.replace(/ /g,""),e=e.toLowerCase();var t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var n in t)e==n&&(e=t[n]);var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(e){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}}];for(var i=0;i<r.length;i++){var s=r[i].re,o=r[i].process,u=s.exec(e);u&&(channels=o(u),this.r=channels[0],this.g=channels[1],this.b=channels[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var e=this.r.toString(16),t=this.g.toString(16),n=this.b.toString(16);return e.length==1&&(e="0"+e),t.length==1&&(t="0"+t),n.length==1&&(n="0"+n),"#"+e+t+n},this.getHelpXML=function(){var e=new Array;for(var n=0;n<r.length;n++){var i=r[n].example;for(var s=0;s<i.length;s++)e[e.length]=i[s]}for(var o in t)e[e.length]=o;var u=document.createElement("ul");u.setAttribute("id","rgbcolor-examples");for(var n=0;n<e.length;n++)try{var a=document.createElement("li"),f=new RGBColor(e[n]),l=document.createElement("div");l.style.cssText="margin: 3px; border: 1px solid black; background:"+f.toHex()+"; "+"color:"+f.toHex(),l.appendChild(document.createTextNode("test"));var c=document.createTextNode(" "+e[n]+" -> "+f.toRGB()+" -> "+f.toHex());a.appendChild(l),a.appendChild(c),u.appendChild(a)}catch(h){}return u}}function stackBlurImage(e,t,n,r){var i=document.getElementById(e),s=i.naturalWidth,o=i.naturalHeight,u=document.getElementById(t);u.style.width=s+"px",u.style.height=o+"px",u.width=s,u.height=o;var a=u.getContext("2d");a.clearRect(0,0,s,o),a.drawImage(i,0,0);if(isNaN(n)||n<1)return;r?stackBlurCanvasRGBA(t,0,0,s,o,n):stackBlurCanvasRGB(t,0,0,s,o,n)}function stackBlurCanvasRGBA(e,t,n,r,i,s){if(isNaN(s)||s<1)return;s|=0;var o=document.getElementById(e),u=o.getContext("2d"),a;try{try{a=u.getImageData(t,n,r,i)}catch(f){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),a=u.getImageData(t,n,r,i)}catch(f){throw alert("Cannot access local image"),new Error("unable to access local image data: "+f)}}}catch(f){throw alert("Cannot access image"),new Error("unable to access image data: "+f)}var l=a.data,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H=s+s+1,B=r<<2,j=r-1,F=i-1,I=s+1,q=I*(I+1)/2,R=new BlurStack,U=R;for(p=1;p<H;p++){U=U.next=new BlurStack;if(p==I)var z=U}U.next=R;var W=null,X=null;g=m=0;var V=mul_table[s],$=shg_table[s];for(h=0;h<i;h++){C=k=L=A=y=b=w=E=0,S=I*(O=l[m]),x=I*(M=l[m+1]),T=I*(_=l[m+2]),N=I*(D=l[m+3]),y+=q*O,b+=q*M,w+=q*_,E+=q*D,U=R;for(p=0;p<I;p++)U.r=O,U.g=M,U.b=_,U.a=D,U=U.next;for(p=1;p<I;p++)d=m+((j<p?j:p)<<2),y+=(U.r=O=l[d])*(P=I-p),b+=(U.g=M=l[d+1])*P,w+=(U.b=_=l[d+2])*P,E+=(U.a=D=l[d+3])*P,C+=O,k+=M,L+=_,A+=D,U=U.next;W=R,X=z;for(c=0;c<r;c++)l[m+3]=D=E*V>>$,D!=0?(D=255/D,l[m]=(y*V>>$)*D,l[m+1]=(b*V>>$)*D,l[m+2]=(w*V>>$)*D):l[m]=l[m+1]=l[m+2]=0,y-=S,b-=x,w-=T,E-=N,S-=W.r,x-=W.g,T-=W.b,N-=W.a,d=g+((d=c+s+1)<j?d:j)<<2,C+=W.r=l[d],k+=W.g=l[d+1],L+=W.b=l[d+2],A+=W.a=l[d+3],y+=C,b+=k,w+=L,E+=A,W=W.next,S+=O=X.r,x+=M=X.g,T+=_=X.b,N+=D=X.a,C-=O,k-=M,L-=_,A-=D,X=X.next,m+=4;g+=r}for(c=0;c<r;c++){k=L=A=C=b=w=E=y=0,m=c<<2,S=I*(O=l[m]),x=I*(M=l[m+1]),T=I*(_=l[m+2]),N=I*(D=l[m+3]),y+=q*O,b+=q*M,w+=q*_,E+=q*D,U=R;for(p=0;p<I;p++)U.r=O,U.g=M,U.b=_,U.a=D,U=U.next;v=r;for(p=1;p<=s;p++)m=v+c<<2,y+=(U.r=O=l[m])*(P=I-p),b+=(U.g=M=l[m+1])*P,w+=(U.b=_=l[m+2])*P,E+=(U.a=D=l[m+3])*P,C+=O,k+=M,L+=_,A+=D,U=U.next,p<F&&(v+=r);m=c,W=R,X=z;for(h=0;h<i;h++)d=m<<2,l[d+3]=D=E*V>>$,D>0?(D=255/D,l[d]=(y*V>>$)*D,l[d+1]=(b*V>>$)*D,l[d+2]=(w*V>>$)*D):l[d]=l[d+1]=l[d+2]=0,y-=S,b-=x,w-=T,E-=N,S-=W.r,x-=W.g,T-=W.b,N-=W.a,d=c+((d=h+I)<F?d:F)*r<<2,y+=C+=W.r=l[d],b+=k+=W.g=l[d+1],w+=L+=W.b=l[d+2],E+=A+=W.a=l[d+3],W=W.next,S+=O=X.r,x+=M=X.g,T+=_=X.b,N+=D=X.a,C-=O,k-=M,L-=_,A-=D,X=X.next,m+=r}u.putImageData(a,t,n)}function stackBlurCanvasRGB(e,t,n,r,i,s){if(isNaN(s)||s<1)return;s|=0;var o=document.getElementById(e),u=o.getContext("2d"),a;try{try{a=u.getImageData(t,n,r,i)}catch(f){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),a=u.getImageData(t,n,r,i)}catch(f){throw alert("Cannot access local image"),new Error("unable to access local image data: "+f)}}}catch(f){throw alert("Cannot access image"),new Error("unable to access image data: "+f)}var l=a.data,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M=s+s+1,_=r<<2,D=r-1,P=i-1,H=s+1,B=H*(H+1)/2,j=new BlurStack,F=j;for(p=1;p<M;p++){F=F.next=new BlurStack;if(p==H)var I=F}F.next=j;var q=null,R=null;g=m=0;var U=mul_table[s],z=shg_table[s];for(h=0;h<i;h++){T=N=C=y=b=w=0,E=H*(k=l[m]),S=H*(L=l[m+1]),x=H*(A=l[m+2]),y+=B*k,b+=B*L,w+=B*A,F=j;for(p=0;p<H;p++)F.r=k,F.g=L,F.b=A,F=F.next;for(p=1;p<H;p++)d=m+((D<p?D:p)<<2),y+=(F.r=k=l[d])*(O=H-p),b+=(F.g=L=l[d+1])*O,w+=(F.b=A=l[d+2])*O,T+=k,N+=L,C+=A,F=F.next;q=j,R=I;for(c=0;c<r;c++)l[m]=y*U>>z,l[m+1]=b*U>>z,l[m+2]=w*U>>z,y-=E,b-=S,w-=x,E-=q.r,S-=q.g,x-=q.b,d=g+((d=c+s+1)<D?d:D)<<2,T+=q.r=l[d],N+=q.g=l[d+1],C+=q.b=l[d+2],y+=T,b+=N,w+=C,q=q.next,E+=k=R.r,S+=L=R.g,x+=A=R.b,T-=k,N-=L,C-=A,R=R.next,m+=4;g+=r}for(c=0;c<r;c++){N=C=T=b=w=y=0,m=c<<2,E=H*(k=l[m]),S=H*(L=l[m+1]),x=H*(A=l[m+2]),y+=B*k,b+=B*L,w+=B*A,F=j;for(p=0;p<H;p++)F.r=k,F.g=L,F.b=A,F=F.next;v=r;for(p=1;p<=s;p++)m=v+c<<2,y+=(F.r=k=l[m])*(O=H-p),b+=(F.g=L=l[m+1])*O,w+=(F.b=A=l[m+2])*O,T+=k,N+=L,C+=A,F=F.next,p<P&&(v+=r);m=c,q=j,R=I;for(h=0;h<i;h++)d=m<<2,l[d]=y*U>>z,l[d+1]=b*U>>z,l[d+2]=w*U>>z,y-=E,b-=S,w-=x,E-=q.r,S-=q.g,x-=q.b,d=c+((d=h+H)<P?d:P)*r<<2,y+=T+=q.r=l[d],b+=N+=q.g=l[d+1],w+=C+=q.b=l[d+2],q=q.next,E+=k=R.r,S+=L=R.g,x+=A=R.b,T-=k,N-=L,C-=A,R=R.next,m+=r}u.putImageData(a,t,n)}function BlurStack(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function Pancake(e,t,n){if(e){if(window===this)return new Pancake(e,t,n);typeof t=="object"&&(n=t,t=""),typeof n!="object"&&(n={}),n.format&&(t=n.format,delete n.format),typeof e=="string"&&(this.id=e,e=document.getElementById(e));if(e){!this.id&&typeof e.id=="string"&&e.id.length&&(this.id=e.id);if(e.tagName.toLowerCase()==="svg"){this.canvas=document.createElement("canvas"),this.canvas.width=this.width=e.scrollWidth,this.canvas.height=this.height=e.scrollHeight;var r=document.createElement("div");r.appendChild(e.cloneNode(!0)),canvg(this.canvas,r.innerHTML,{ignoreMouse:!0,ignoreAnimation:!0})}e.tagName.toLowerCase()==="canvas"&&(this.canvas=e.cloneNode(!0),this.width=this.canvas.width,this.height=this.canvas.height);if(!this.canvas)throw"Supplied element must be a <canvas> or <svg> element.";this.format=typeof t=="string"&&t.match(/^(image\/)?(png|webp|jpe?g)$/i)?t.toLowerCase().replace(/^image\//,"").replace("jpeg","jpg"):"png",this.src=this.canvas.toDataURL("image/"+this.format.replace("jpg","jpeg")),this.element=document.createElement("img"),this.element.src=this.src,this.height&&(this.element.height=this.height),this.width&&(this.element.width=this.width);for(var i in n)i.toLowerCase()!="src"&&this.element.setAttribute(i,String(n[i]));delete this.canvas}return this}throw"No valid element or element ID supplied."}var mul_table=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],shg_table=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];(function(){function e(){var e={};return e.FRAMERATE=30,e.MAX_VIRTUAL_PIXELS=3e4,e.init=function(t){var n=0;e.UniqueId=function(){return n++,"canvg"+n},e.Definitions={},e.Styles={},e.Animations=[],e.Images=[],e.ctx=t,e.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(e,t){this.viewPorts.push({width:e,height:t})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(e){return e!=null&&typeof e=="number"?e:e=="x"?this.width():e=="y"?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},e.init(),e.ImagesLoaded=function(){for(var t=0;t<e.Images.length;t++)if(!e.Images[t].loaded)return!1;return!0},e.trim=function(e){return e.replace(/^\s+|\s+$/g,"")},e.compressSpaces=function(e){return e.replace(/[\s\r\t\n]+/gm," ")},e.ajax=function(e){var t;return window.XMLHttpRequest?t=new XMLHttpRequest:t=new ActiveXObject("Microsoft.XMLHTTP"),t?(t.open("GET",e,!1),t.send(null),t.responseText):null},e.parseXml=function(e){if(window.DOMParser){var t=new DOMParser;return t.parseFromString(e,"text/xml")}e=e.replace(/<!DOCTYPE svg[^>]*>/,"");var n=new ActiveXObject("Microsoft.XMLDOM");return n.async="false",n.loadXML(e),n},e.Property=function(e,t){this.name=e,this.value=t},e.Property.prototype.getValue=function(){return this.value},e.Property.prototype.hasValue=function(){return this.value!=null&&this.value!==""},e.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var e=parseFloat(this.value);return(this.value+"").match(/%$/)&&(e/=100),e},e.Property.prototype.valueOrDefault=function(e){return this.hasValue()?this.value:e},e.Property.prototype.numValueOrDefault=function(e){return this.hasValue()?this.numValue():e},e.Property.prototype.addOpacity=function(t){var n=this.value;if(t!=null&&t!=""&&typeof this.value=="string"){var r=new RGBColor(this.value);r.ok&&(n="rgba("+r.r+", "+r.g+", "+r.b+", "+t+")")}return new e.Property(this.name,n)},e.Property.prototype.getDefinition=function(){var t=this.value.match(/#([^\)'"]+)/);return t&&(t=t[1]),t||(t=this.value),e.Definitions[t]},e.Property.prototype.isUrlDefinition=function(){return this.value.indexOf("url(")==0},e.Property.prototype.getFillStyleDefinition=function(t,n){var r=this.getDefinition();if(r!=null&&r.createGradient)return r.createGradient(e.ctx,t,n);if(r!=null&&r.createPattern){if(r.getHrefAttribute().hasValue()){var i=r.attribute("patternTransform");r=r.getHrefAttribute().getDefinition(),i.hasValue()&&(r.attribute("patternTransform",!0).value=i.value)}return r.createPattern(e.ctx,t)}return null},e.Property.prototype.getDPI=function(e){return 96},e.Property.prototype.getEM=function(t){var n=12,r=new e.Property("fontSize",e.Font.Parse(e.ctx.font).fontSize);return r.hasValue()&&(n=r.toPixels(t)),n},e.Property.prototype.getUnits=function(){var e=this.value+"";return e.replace(/[0-9\.\-]/g,"")},e.Property.prototype.toPixels=function(t,n){if(!this.hasValue())return 0;var r=this.value+"";if(r.match(/em$/))return this.numValue()*this.getEM(t);if(r.match(/ex$/))return this.numValue()*this.getEM(t)/2;if(r.match(/px$/))return this.numValue();if(r.match(/pt$/))return this.numValue()*this.getDPI(t)*(1/72);if(r.match(/pc$/))return this.numValue()*15;if(r.match(/cm$/))return this.numValue()*this.getDPI(t)/2.54;if(r.match(/mm$/))return this.numValue()*this.getDPI(t)/25.4;if(r.match(/in$/))return this.numValue()*this.getDPI(t);if(r.match(/%$/))return this.numValue()*e.ViewPort.ComputeSize(t);var i=this.numValue();return n&&i<1?i*e.ViewPort.ComputeSize(t):i},e.Property.prototype.toMilliseconds=function(){if(!this.hasValue())return 0;var e=this.value+"";return e.match(/s$/)?this.numValue()*1e3:e.match(/ms$/)?this.numValue():this.numValue()},e.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var e=this.value+"";return e.match(/deg$/)?this.numValue()*(Math.PI/180):e.match(/grad$/)?this.numValue()*(Math.PI/200):e.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)},e.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(t,n,r,i,s,o){var u=o!=null?this.Parse(o):this.CreateFont("","","","","",e.ctx.font);return{fontFamily:s||u.fontFamily,fontSize:i||u.fontSize,fontStyle:t||u.fontStyle,fontWeight:r||u.fontWeight,fontVariant:n||u.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var t=this;this.Parse=function(n){var r={},i=e.trim(e.compressSpaces(n||"")).split(" "),s={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},o="";for(var u=0;u<i.length;u++)!s.fontStyle&&t.Styles.indexOf(i[u])!=-1?(i[u]!="inherit"&&(r.fontStyle=i[u]),s.fontStyle=!0):!s.fontVariant&&t.Variants.indexOf(i[u])!=-1?(i[u]!="inherit"&&(r.fontVariant=i[u]),s.fontStyle=s.fontVariant=!0):!s.fontWeight&&t.Weights.indexOf(i[u])!=-1?(i[u]!="inherit"&&(r.fontWeight=i[u]),s.fontStyle=s.fontVariant=s.fontWeight=!0):s.fontSize?i[u]!="inherit"&&(o+=i[u]):(i[u]!="inherit"&&(r.fontSize=i[u].split("/")[0]),s.fontStyle=s.fontVariant=s.fontWeight=s.fontSize=!0);return o!=""&&(r.fontFamily=o),r}},e.ToNumberArray=function(t){var n=e.trim(e.compressSpaces((t||"").replace(/,/g," "))).split(" ");for(var r=0;r<n.length;r++)n[r]=parseFloat(n[r]);return n},e.Point=function(e,t){this.x=e,this.y=t},e.Point.prototype.angleTo=function(e){return Math.atan2(e.y-this.y,e.x-this.x)},e.Point.prototype.applyTransform=function(e){var t=this.x*e[0]+this.y*e[2]+e[4],n=this.x*e[1]+this.y*e[3]+e[5];this.x=t,this.y=n},e.CreatePoint=function(t){var n=e.ToNumberArray(t);return new e.Point(n[0],n[1])},e.CreatePath=function(t){var n=e.ToNumberArray(t),r=[];for(var i=0;i<n.length;i+=2)r.push(new e.Point(n[i],n[i+1]));return r},e.BoundingBox=function(e,t,n,r){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(e,t){if(e!=null){if(isNaN(this.x1)||isNaN(this.x2))this.x1=e,this.x2=e;e<this.x1&&(this.x1=e),e>this.x2&&(this.x2=e)}if(t!=null){if(isNaN(this.y1)||isNaN(this.y2))this.y1=t,this.y2=t;t<this.y1&&(this.y1=t),t>this.y2&&(this.y2=t)}},this.addX=function(e){this.addPoint(e,null)},this.addY=function(e){this.addPoint(null,e)},this.addBoundingBox=function(e){this.addPoint(e.x1,e.y1),this.addPoint(e.x2,e.y2)},this.addQuadraticCurve=function(e,t,n,r,i,s){var o=e+2/3*(n-e),u=t+2/3*(r-t),a=o+1/3*(i-e),f=u+1/3*(s-t);this.addBezierCurve(e,t,o,a,u,f,i,s)},this.addBezierCurve=function(e,t,n,r,s,o,u,a){var f=[e,t],l=[n,r],c=[s,o],h=[u,a];this.addPoint(f[0],f[1]),this.addPoint(h[0],h[1]);for(i=0;i<=1;i++){var p=function(e){return Math.pow(1-e,3)*f[i]+3*Math.pow(1-e,2)*e*l[i]+3*(1-e)*Math.pow(e,2)*c[i]+Math.pow(e,3)*h[i]},d=6*f[i]-12*l[i]+6*c[i],v=-3*f[i]+9*l[i]-9*c[i]+3*h[i],m=3*l[i]-3*f[i];if(v==0){if(d==0)continue;var g=-m/d;0<g&&g<1&&(i==0&&this.addX(p(g)),i==1&&this.addY(p(g)));continue}var y=Math.pow(d,2)-4*m*v;if(y<0)continue;var b=(-d+Math.sqrt(y))/(2*v);0<b&&b<1&&(i==0&&this.addX(p(b)),i==1&&this.addY(p(b)));var w=(-d-Math.sqrt(y))/(2*v);0<w&&w<1&&(i==0&&this.addX(p(w)),i==1&&this.addY(p(w)))}},this.isPointInBox=function(e,t){return this.x1<=e&&e<=this.x2&&this.y1<=t&&t<=this.y2},this.addPoint(e,t),this.addPoint(n,r)},e.Transform=function(t){var n=this;this.Type={},this.Type.translate=function(t){this.p=e.CreatePoint(t),this.apply=function(e){e.translate(this.p.x||0,this.p.y||0)},this.unapply=function(e){e.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(e){e.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(t){var n=e.ToNumberArray(t);this.angle=new e.Property("angle",n[0]),this.cx=n[1]||0,this.cy=n[2]||0,this.apply=function(e){e.translate(this.cx,this.cy),e.rotate(this.angle.toRadians()),e.translate(-this.cx,-this.cy)},this.unapply=function(e){e.translate(this.cx,this.cy),e.rotate(-1*this.angle.toRadians()),e.translate(-this.cx,-this.cy)},this.applyToPoint=function(e){var t=this.angle.toRadians();e.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),e.applyTransform([Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0]),e.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(t){this.p=e.CreatePoint(t),this.apply=function(e){e.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(e){e.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(e){e.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(t){this.m=e.ToNumberArray(t),this.apply=function(e){e.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.applyToPoint=function(e){e.applyTransform(this.m)}},this.Type.SkewBase=function(t){this.base=n.Type.matrix,this.base(t),this.angle=new e.Property("angle",t)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(e){this.base=n.Type.SkewBase,this.base(e),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(e){this.base=n.Type.SkewBase,this.base(e),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(e){for(var t=0;t<this.transforms.length;t++)this.transforms[t].apply(e)},this.unapply=function(e){for(var t=this.transforms.length-1;t>=0;t--)this.transforms[t].unapply(e)},this.applyToPoint=function(e){for(var t=0;t<this.transforms.length;t++)this.transforms[t].applyToPoint(e)};var r=e.trim(e.compressSpaces(t)).replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/);for(var i=0;i<r.length;i++){var s=e.trim(r[i].split("(")[0]),o=r[i].split("(")[1].replace(")",""),u=new this.Type[s](o);u.type=s,this.transforms.push(u)}},e.AspectRatio=function(t,n,r,i,s,o,u,a,f,l){n=e.compressSpaces(n),n=n.replace(/^defer\s/,"");var c=n.split(" ")[0]||"xMidYMid",h=n.split(" ")[1]||"meet",p=r/i,d=s/o,v=Math.min(p,d),m=Math.max(p,d);h=="meet"&&(i*=v,o*=v),h=="slice"&&(i*=m,o*=m),f=new e.Property("refX",f),l=new e.Property("refY",l),f.hasValue()&&l.hasValue()?t.translate(-v*f.toPixels("x"),-v*l.toPixels("y")):(c.match(/^xMid/)&&(h=="meet"&&v==d||h=="slice"&&m==d)&&t.translate(r/2-i/2,0),c.match(/YMid$/)&&(h=="meet"&&v==p||h=="slice"&&m==p)&&t.translate(0,s/2-o/2),c.match(/^xMax/)&&(h=="meet"&&v==d||h=="slice"&&m==d)&&t.translate(r-i,0),c.match(/YMax$/)&&(h=="meet"&&v==p||h=="slice"&&m==p)&&t.translate(0,s-o)),c=="none"?t.scale(p,d):h=="meet"?t.scale(v,v):h=="slice"&&t.scale(m,m),t.translate(u==null?0:-u,a==null?0:-a)},e.Element={},e.EmptyProperty=new e.Property("EMPTY",""),e.Element.ElementBase=function(t){this.attributes={},this.styles={},this.children=[],this.attribute=function(t,n){var r=this.attributes[t];return r!=null?r:(n==1&&(r=new e.Property(t,""),this.attributes[t]=r),r||e.EmptyProperty)},this.getHrefAttribute=function(){for(var t in this.attributes)if(t.match(/:href$/))return this.attributes[t];return e.EmptyProperty},this.style=function(t,n){var r=this.styles[t];if(r!=null)return r;var i=this.attribute(t);if(i!=null&&i.hasValue())return this.styles[t]=i,i;var s=this.parent;if(s!=null){var o=s.style(t);if(o!=null&&o.hasValue())return o}return n==1&&(r=new e.Property(t,""),this.styles[t]=r),r||e.EmptyProperty},this.render=function(e){if(this.style("display").value=="none")return;if(this.attribute("visibility").value=="hidden")return;e.save();if(this.attribute("mask").hasValue()){var t=this.attribute("mask").getDefinition();t!=null&&t.apply(e,this)}else if(this.style("filter").hasValue()){var n=this.style("filter").getDefinition();n!=null&&n.apply(e,this)}else this.setContext(e),this.renderChildren(e),this.clearContext(e);e.restore()},this.setContext=function(e){},this.clearContext=function(e){},this.renderChildren=function(e){for(var t=0;t<this.children.length;t++)this.children[t].render(e)},this.addChild=function(t,n){var r=t;n&&(r=e.CreateElement(t)),r.parent=this,this.children.push(r)};if(t!=null&&t.nodeType==1){for(var n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];r.nodeType==1&&this.addChild(r,!0);if(this.captureTextNodes&&r.nodeType==3){var i=r.nodeValue||r.text||"";e.trim(e.compressSpaces(i))!=""&&this.addChild(new e.Element.tspan(r),!1)}}for(var n=0;n<t.attributes.length;n++){var s=t.attributes[n];this.attributes[s.nodeName]=new e.Property(s.nodeName,s.nodeValue)}var o=e.Styles[t.nodeName];if(o!=null)for(var u in o)this.styles[u]=o[u];if(this.attribute("class").hasValue()){var a=e.compressSpaces(this.attribute("class").value).split(" ");for(var f=0;f<a.length;f++){o=e.Styles["."+a[f]];if(o!=null)for(var u in o)this.styles[u]=o[u];o=e.Styles[t.nodeName+"."+a[f]];if(o!=null)for(var u in o)this.styles[u]=o[u]}}if(this.attribute("id").hasValue()){var o=e.Styles["#"+this.attribute("id").value];if(o!=null)for(var u in o)this.styles[u]=o[u]}if(this.attribute("style").hasValue()){var o=this.attribute("style").value.split(";");for(var n=0;n<o.length;n++)if(e.trim(o[n])!=""){var l=o[n].split(":"),u=e.trim(l[0]),c=e.trim(l[1]);this.styles[u]=new e.Property(u,c)}}this.attribute("id").hasValue()&&e.Definitions[this.attribute("id").value]==null&&(e.Definitions[this.attribute("id").value]=this)}},e.Element.RenderedElementBase=function(t){this.base=e.Element.ElementBase,this.base(t),this.setContext=function(t){if(this.style("fill").isUrlDefinition()){var n=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity"));n!=null&&(t.fillStyle=n)}else if(this.style("fill").hasValue()){var r=this.style("fill");r.value=="currentColor"&&(r.value=this.style("color").value),t.fillStyle=r.value=="none"?"rgba(0,0,0,0)":r.value}if(this.style("fill-opacity").hasValue()){var r=new e.Property("fill",t.fillStyle);r=r.addOpacity(this.style("fill-opacity").value),t.fillStyle=r.value}if(this.style("stroke").isUrlDefinition()){var n=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity"));n!=null&&(t.strokeStyle=n)}else if(this.style("stroke").hasValue()){var i=this.style("stroke");i.value=="currentColor"&&(i.value=this.style("color").value),t.strokeStyle=i.value=="none"?"rgba(0,0,0,0)":i.value}if(this.style("stroke-opacity").hasValue()){var i=new e.Property("stroke",t.strokeStyle);i=i.addOpacity(this.style("stroke-opacity").value),t.strokeStyle=i.value}if(this.style("stroke-width").hasValue()){var s=this.style("stroke-width").toPixels();t.lineWidth=s==0?.001:s}this.style("stroke-linecap").hasValue()&&(t.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(t.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(t.miterLimit=this.style("stroke-miterlimit").value);if(this.style("stroke-dasharray").hasValue()&&this.style("stroke-dasharray").value!="none"){var o=e.ToNumberArray(this.style("stroke-dasharray").value);typeof t.setLineDash!="undefined"?t.setLineDash(o):typeof t.webkitLineDash!="undefined"?t.webkitLineDash=o:typeof t.mozDash!="undefined"&&(t.mozDash=o);var u=this.style("stroke-dashoffset").numValueOrDefault(1);typeof t.lineDashOffset!="undefined"?t.lineDashOffset=u:typeof t.webkitLineDashOffset!="undefined"?t.webkitLineDashOffset=u:typeof t.mozDashOffset!="undefined"&&(t.mozDashOffset=u)}typeof t.font!="undefined"&&(t.font=e.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString());if(this.attribute("transform").hasValue()){var a=new e.Transform(this.attribute("transform").value);a.apply(t)}if(this.style("clip-path").hasValue()){var f=this.style("clip-path").getDefinition();f!=null&&f.apply(t)}this.style("opacity").hasValue()&&(t.globalAlpha=this.style("opacity").numValue())}},e.Element.RenderedElementBase.prototype=new e.Element.ElementBase,e.Element.PathElementBase=function(t){this.base=e.Element.RenderedElementBase,this.base(t),this.path=function(t){return t!=null&&t.beginPath(),new e.BoundingBox},this.renderChildren=function(t){this.path(t),e.Mouse.checkPath(this,t),t.fillStyle!=""&&(this.attribute("fill-rule").hasValue()?t.fill(this.attribute("fill-rule").value):t.fill()),t.strokeStyle!=""&&t.stroke();var n=this.getMarkers();if(n!=null){if(this.style("marker-start").isUrlDefinition()){var r=this.style("marker-start").getDefinition();r.render(t,n[0][0],n[0][1])}if(this.style("marker-mid").isUrlDefinition()){var r=this.style("marker-mid").getDefinition();for(var i=1;i<n.length-1;i++)r.render(t,n[i][0],n[i][1])}if(this.style("marker-end").isUrlDefinition()){var r=this.style("marker-end").getDefinition();r.render(t,n[n.length-1][0],n[n.length-1][1])}}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},e.Element.PathElementBase.prototype=new e.Element.RenderedElementBase,e.Element.svg=function(t){this.base=e.Element.RenderedElementBase,this.base(t),this.baseClearContext=this.clearContext,this.clearContext=function(t){this.baseClearContext(t),e.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(t){t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4,this.baseSetContext(t),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),t.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var n=e.ViewPort.width(),r=e.ViewPort.height();this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%");if(typeof this.root=="undefined"){n=this.attribute("width").toPixels("x"),r=this.attribute("height").toPixels("y");var i=0,s=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(i=-this.attribute("refX").toPixels("x"),s=-this.attribute("refY").toPixels("y")),t.beginPath(),t.moveTo(i,s),t.lineTo(n,s),t.lineTo(n,r),t.lineTo(i,r),t.closePath(),t.clip()}e.ViewPort.SetCurrent(n,r);if(this.attribute("viewBox").hasValue()){var o=e.ToNumberArray(this.attribute("viewBox").value),u=o[0],a=o[1];n=o[2],r=o[3],e.AspectRatio(t,this.attribute("preserveAspectRatio").value,e.ViewPort.width(),n,e.ViewPort.height(),r,u,a,this.attribute("refX").value,this.attribute("refY").value),e.ViewPort.RemoveCurrent(),e.ViewPort.SetCurrent(o[2],o[3])}}},e.Element.svg.prototype=new e.Element.RenderedElementBase,e.Element.rect=function(t){this.base=e.Element.PathElementBase,this.base(t),this.path=function(t){var n=this.attribute("x").toPixels("x"),r=this.attribute("y").toPixels("y"),i=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y"),o=this.attribute("rx").toPixels("x"),u=this.attribute("ry").toPixels("y");return this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(u=o),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(o=u),o=Math.min(o,i/2),u=Math.min(u,s/2),t!=null&&(t.beginPath(),t.moveTo(n+o,r),t.lineTo(n+i-o,r),t.quadraticCurveTo(n+i,r,n+i,r+u),t.lineTo(n+i,r+s-u),t.quadraticCurveTo(n+i,r+s,n+i-o,r+s),t.lineTo(n+o,r+s),t.quadraticCurveTo(n,r+s,n,r+s-u),t.lineTo(n,r+u),t.quadraticCurveTo(n,r,n+o,r),t.closePath()),new e.BoundingBox(n,r,n+i,r+s)}},e.Element.rect.prototype=new e.Element.PathElementBase,e.Element.circle=function(t){this.base=e.Element.PathElementBase,this.base(t),this.path=function(t){var n=this.attribute("cx").toPixels("x"),r=this.attribute("cy").toPixels("y"),i=this.attribute("r").toPixels();return t!=null&&(t.beginPath(),t.arc(n,r,i,0,Math.PI*2,!0),t.closePath()),new e.BoundingBox(n-i,r-i,n+i,r+i)}},e.Element.circle.prototype=new e.Element.PathElementBase,e.Element.ellipse=function(t){this.base=e.Element.PathElementBase,this.base(t),this.path=function(t){var n=4*((Math.sqrt(2)-1)/3),r=this.attribute("rx").toPixels("x"),i=this.attribute("ry").toPixels("y"),s=this.attribute("cx").toPixels("x"),o=this.attribute("cy").toPixels("y");return t!=null&&(t.beginPath(),t.moveTo(s,o-i),t.bezierCurveTo(s+n*r,o-i,s+r,o-n*i,s+r,o),t.bezierCurveTo(s+r,o+n*i,s+n*r,o+i,s,o+i),t.bezierCurveTo(s-n*r,o+i,s-r,o+n*i,s-r,o),t.bezierCurveTo(s-r,o-n*i,s-n*r,o-i,s,o-i),t.closePath()),new e.BoundingBox(s-r,o-i,s+r,o+i)}},e.Element.ellipse.prototype=new e.Element.PathElementBase,e.Element.line=function(t){this.base=e.Element.PathElementBase,this.base(t),this.getPoints=function(){return[new e.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new e.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(t){var n=this.getPoints();return t!=null&&(t.beginPath(),t.moveTo(n[0].x,n[0].y),t.lineTo(n[1].x,n[1].y)),new e.BoundingBox(n[0].x,n[0].y,n[1].x,n[1].y)},this.getMarkers=function(){var e=this.getPoints(),t=e[0].angleTo(e[1]);return[[e[0],t],[e[1],t]]}},e.Element.line.prototype=new e.Element.PathElementBase,e.Element.polyline=function(t){this.base=e.Element.PathElementBase,this.base(t),this.points=e.CreatePath(this.attribute("points").value),this.path=function(t){var n=new e.BoundingBox(this.points[0].x,this.points[0].y);t!=null&&(t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y));for(var r=1;r<this.points.length;r++)n.addPoint(this.points[r].x,this.points[r].y),t!=null&&t.lineTo(this.points[r].x,this.points[r].y);return n},this.getMarkers=function(){var e=[];for(var t=0;t<this.points.length-1;t++)e.push([this.points[t],this.points[t].angleTo(this.points[t+1])]);return e.push([this.points[this.points.length-1],e[e.length-1][1]]),e}},e.Element.polyline.prototype=new e.Element.PathElementBase,e.Element.polygon=function(t){this.base=e.Element.polyline,this.base(t),this.basePath=this.path,this.path=function(e){var t=this.basePath(e);return e!=null&&(e.lineTo(this.points[0].x,this.points[0].y),e.closePath()),t}},e.Element.polygon.prototype=new e.Element.polyline,e.Element.path=function(t){this.base=e.Element.PathElementBase,this.base(t);var n=this.attribute("d").value;n=n.replace(/,/gm," "),n=n.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),n=n.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),n=n.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2"),n=n.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),n=n.replace(/([0-9])([+\-])/gm,"$1 $2"),n=n.replace(/(\.[0-9]*)(\.)/gm,"$1 $2"),n=n.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),n=e.compressSpaces(n),n=e.trim(n),this.PathParser=new function(t){this.tokens=t.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new e.Point(0,0),this.control=new e.Point(0,0),this.current=new e.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return this.isEnd()?!0:this.tokens[this.i+1].match(/^[A-Za-z]$/)!=null},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var t=new e.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(t)},this.getAsControlPoint=function(){var e=this.getPoint();return this.control=e,e},this.getAsCurrentPoint=function(){var e=this.getPoint();return this.current=e,e},this.getReflectedControlPoint=function(){if(this.previousCommand.toLowerCase()!="c"&&this.previousCommand.toLowerCase()!="s"&&this.previousCommand.toLowerCase()!="q"&&this.previousCommand.toLowerCase()!="t")return this.current;var t=new e.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y);return t},this.makeAbsolute=function(e){return this.isRelativeCommand()&&(e.x+=this.current.x,e.y+=this.current.y),e},this.addMarker=function(e,t,n){n!=null&&this.angles.length>0&&this.angles[this.angles.length-1]==null&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(n)),this.addMarkerAngle(e,t==null?null:t.angleTo(e))},this.addMarkerAngle=function(e,t){this.points.push(e),this.angles.push(t)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var e=0;e<this.angles.length;e++)if(this.angles[e]==null)for(var t=e+1;t<this.angles.length;t++)if(this.angles[t]!=null){this.angles[e]=this.angles[t];break}return this.angles}}(n),this.path=function(t){var n=this.PathParser;n.reset();var r=new e.BoundingBox;t!=null&&t.beginPath();while(!n.isEnd()){n.nextCommand();switch(n.command){case"M":case"m":var i=n.getAsCurrentPoint();n.addMarker(i),r.addPoint(i.x,i.y),t!=null&&t.moveTo(i.x,i.y),n.start=n.current;while(!n.isCommandOrEnd()){var i=n.getAsCurrentPoint();n.addMarker(i,n.start),r.addPoint(i.x,i.y),t!=null&&t.lineTo(i.x,i.y)}break;case"L":case"l":while(!n.isCommandOrEnd()){var s=n.current,i=n.getAsCurrentPoint();n.addMarker(i,s),r.addPoint(i.x,i.y),t!=null&&t.lineTo(i.x,i.y)}break;case"H":case"h":while(!n.isCommandOrEnd()){var o=new e.Point((n.isRelativeCommand()?n.current.x:0)+n.getScalar(),n.current.y);n.addMarker(o,n.current),n.current=o,r.addPoint(n.current.x,n.current.y),t!=null&&t.lineTo(n.current.x,n.current.y)}break;case"V":case"v":while(!n.isCommandOrEnd()){var o=new e.Point(n.current.x,(n.isRelativeCommand()?n.current.y:0)+n.getScalar());n.addMarker(o,n.current),n.current=o,r.addPoint(n.current.x,n.current.y),t!=null&&t.lineTo(n.current.x,n.current.y)}break;case"C":case"c":while(!n.isCommandOrEnd()){var u=n.current,a=n.getPoint(),f=n.getAsControlPoint(),l=n.getAsCurrentPoint();n.addMarker(l,f,a),r.addBezierCurve(u.x,u.y,a.x,a.y,f.x,f.y,l.x,l.y),t!=null&&t.bezierCurveTo(a.x,a.y,f.x,f.y,l.x,l.y)}break;case"S":case"s":while(!n.isCommandOrEnd()){var u=n.current,a=n.getReflectedControlPoint(),f=n.getAsControlPoint(),l=n.getAsCurrentPoint();n.addMarker(l,f,a),r.addBezierCurve(u.x,u.y,a.x,a.y,f.x,f.y,l.x,l.y),t!=null&&t.bezierCurveTo(a.x,a.y,f.x,f.y,l.x,l.y)}break;case"Q":case"q":while(!n.isCommandOrEnd()){var u=n.current,f=n.getAsControlPoint(),l=n.getAsCurrentPoint();n.addMarker(l,f,f),r.addQuadraticCurve(u.x,u.y,f.x,f.y,l.x,l.y),t!=null&&t.quadraticCurveTo(f.x,f.y,l.x,l.y)}break;case"T":case"t":while(!n.isCommandOrEnd()){var u=n.current,f=n.getReflectedControlPoint();n.control=f;var l=n.getAsCurrentPoint();n.addMarker(l,f,f),r.addQuadraticCurve(u.x,u.y,f.x,f.y,l.x,l.y),t!=null&&t.quadraticCurveTo(f.x,f.y,l.x,l.y)}break;case"A":case"a":while(!n.isCommandOrEnd()){var u=n.current,c=n.getScalar(),h=n.getScalar(),p=n.getScalar()*(Math.PI/180),d=n.getScalar(),v=n.getScalar(),l=n.getAsCurrentPoint(),m=new e.Point(Math.cos(p)*(u.x-l.x)/2+Math.sin(p)*(u.y-l.y)/2,-Math.sin(p)*(u.x-l.x)/2+Math.cos(p)*(u.y-l.y)/2),g=Math.pow(m.x,2)/Math.pow(c,2)+Math.pow(m.y,2)/Math.pow(h,2);g>1&&(c*=Math.sqrt(g),h*=Math.sqrt(g));var y=(d==v?-1:1)*Math.sqrt((Math.pow(c,2)*Math.pow(h,2)-Math.pow(c,2)*Math.pow(m.y,2)-Math.pow(h,2)*Math.pow(m.x,2))/(Math.pow(c,2)*Math.pow(m.y,2)+Math.pow(h,2)*Math.pow(m.x,2)));isNaN(y)&&(y=0);var b=new e.Point(y*c*m.y/h,y*-h*m.x/c),w=new e.Point((u.x+l.x)/2+Math.cos(p)*b.x-Math.sin(p)*b.y,(u.y+l.y)/2+Math.sin(p)*b.x+Math.cos(p)*b.y),E=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2))},S=function(e,t){return(e[0]*t[0]+e[1]*t[1])/(E(e)*E(t))},x=function(e,t){return(e[0]*t[1]<e[1]*t[0]?-1:1)*Math.acos(S(e,t))},T=x([1,0],[(m.x-b.x)/c,(m.y-b.y)/h]),N=[(m.x-b.x)/c,(m.y-b.y)/h],C=[(-m.x-b.x)/c,(-m.y-b.y)/h],k=x(N,C);S(N,C)<=-1&&(k=Math.PI),S(N,C)>=1&&(k=0);var L=1-v?1:-1,A=T+L*(k/2),O=new e.Point(w.x+c*Math.cos(A),w.y+h*Math.sin(A));n.addMarkerAngle(O,A-L*Math.PI/2),n.addMarkerAngle(l,A-L*Math.PI),r.addPoint(l.x,l.y);if(t!=null){var S=c>h?c:h,M=c>h?1:c/h,_=c>h?h/c:1;t.translate(w.x,w.y),t.rotate(p),t.scale(M,_),t.arc(0,0,S,T,T+k,1-v),t.scale(1/M,1/_),t.rotate(-p),t.translate(-w.x,-w.y)}}break;case"Z":case"z":t!=null&&t.closePath(),n.current=n.start}}return r},this.getMarkers=function(){var e=this.PathParser.getMarkerPoints(),t=this.PathParser.getMarkerAngles(),n=[];for(var r=0;r<e.length;r++)n.push([e[r],t[r]]);return n}},e.Element.path.prototype=new e.Element.PathElementBase,e.Element.pattern=function(t){this.base=e.Element.ElementBase,this.base(t),this.createPattern=function(t,n){var r=this.attribute("width").toPixels("x",!0),i=this.attribute("height").toPixels("y",!0),s=new e.Element.svg;s.attributes.viewBox=new e.Property("viewBox",this.attribute("viewBox").value),s.attributes.width=new e.Property("width",r+"px"),s.attributes.height=new e.Property("height",i+"px"),s.attributes.transform=new e.Property("transform",this.attribute("patternTransform").value),s.children=this.children;var o=document.createElement("canvas");o.width=r,o.height=i;var u=o.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&u.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0));for(var a=-1;a<=1;a++)for(var f=-1;f<=1;f++)u.save(),u.translate(a*o.width,f*o.height),s.render(u),u.restore();var l=t.createPattern(o,"repeat");return l}},e.Element.pattern.prototype=new e.Element.ElementBase,e.Element.marker=function(t){this.base=e.Element.ElementBase,this.base(t),this.baseRender=this.render,this.render=function(t,n,r){t.translate(n.x,n.y),this.attribute("orient").valueOrDefault("auto")=="auto"&&t.rotate(r),this.attribute("markerUnits").valueOrDefault("strokeWidth")=="strokeWidth"&&t.scale(t.lineWidth,t.lineWidth),t.save();var i=new e.Element.svg;i.attributes.viewBox=new e.Property("viewBox",this.attribute("viewBox").value),i.attributes.refX=new e.Property("refX",this.attribute("refX").value),i.attributes.refY=new e.Property("refY",this.attribute("refY").value),i.attributes.width=new e.Property("width",this.attribute("markerWidth").value),i.attributes.height=new e.Property("height",this.attribute("markerHeight").value),i.attributes.fill=new e.Property("fill",this.attribute("fill").valueOrDefault("black")),i.attributes.stroke=new e.Property("stroke",this.attribute("stroke").valueOrDefault("none")),i.children=this.children,i.render(t),t.restore(),this.attribute("markerUnits").valueOrDefault("strokeWidth")=="strokeWidth"&&t.scale(1/t.lineWidth,1/t.lineWidth),this.attribute("orient").valueOrDefault("auto")=="auto"&&t.rotate(-r),t.translate(-n.x,-n.y)}},e.Element.marker.prototype=new e.Element.ElementBase,e.Element.defs=function(t){this.base=e.Element.ElementBase,this.base(t),this.render=function(e){}},e.Element.defs.prototype=new e.Element.ElementBase,e.Element.GradientBase=function(t){this.base=e.Element.ElementBase,this.base(t),this.gradientUnits=this.attribute("gradientUnits").valueOrDefault("objectBoundingBox"),this.stops=[];for(var n=0;n<this.children.length;n++){var r=this.children[n];r.type=="stop"&&this.stops.push(r)}this.getGradient=function(){},this.createGradient=function(t,n,r){var i=this;this.getHrefAttribute().hasValue()&&(i=this.getHrefAttribute().getDefinition());var s=function(t){if(r.hasValue()){var n=new e.Property("color",t);return n.addOpacity(r.value).value}return t},o=this.getGradient(t,n);if(o==null)return s(i.stops[i.stops.length-1].color);for(var u=0;u<i.stops.length;u++)o.addColorStop(i.stops[u].offset,s(i.stops[u].color));if(this.attribute("gradientTransform").hasValue()){var a=e.ViewPort.viewPorts[0],f=new e.Element.rect;f.attributes.x=new e.Property("x",-e.MAX_VIRTUAL_PIXELS/3),f.attributes.y=new e.Property("y",-e.MAX_VIRTUAL_PIXELS/3),f.attributes.width=new e.Property("width",e.MAX_VIRTUAL_PIXELS),f.attributes.height=new e.Property("height",e.MAX_VIRTUAL_PIXELS);var l=new e.Element.g;l.attributes.transform=new e.Property("transform",this.attribute("gradientTransform").value),l.children=[f];var c=new e.Element.svg;c.attributes.x=new e.Property("x",0),c.attributes.y=new e.Property("y",0),c.attributes.width=new e.Property("width",a.width),c.attributes.height=new e.Property("height",a.height),c.children=[l];var h=document.createElement("canvas");h.width=a.width,h.height=a.height;var p=h.getContext("2d");return p.fillStyle=o,c.render(p),p.createPattern(h,"no-repeat")}return o}},e.Element.GradientBase.prototype=new e.Element.ElementBase,e.Element.linearGradient=function(t){this.base=e.Element.GradientBase,this.base(t),this.getGradient=function(e,t){var n=t.getBoundingBox();!this.attribute("x1").hasValue()&&!this.attribute("y1").hasValue()&&!this.attribute("x2").hasValue()&&!this.attribute("y2").hasValue()&&(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var r=this.gradientUnits=="objectBoundingBox"?n.x()+n.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),i=this.gradientUnits=="objectBoundingBox"?n.y()+n.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),s=this.gradientUnits=="objectBoundingBox"?n.x()+n.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),o=this.gradientUnits=="objectBoundingBox"?n.y()+n.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return r==s&&i==o?null:e.createLinearGradient(r,i,s,o)}},e.Element.linearGradient.prototype=new e.Element.GradientBase,e.Element.radialGradient=function(t){this.base=e.Element.GradientBase,this.base(t),this.getGradient=function(e,t){var n=t.getBoundingBox();this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var r=this.gradientUnits=="objectBoundingBox"?n.x()+n.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),i=this.gradientUnits=="objectBoundingBox"?n.y()+n.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),s=r,o=i;this.attribute("fx").hasValue()&&(s=this.gradientUnits=="objectBoundingBox"?n.x()+n.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(o=this.gradientUnits=="objectBoundingBox"?n.y()+n.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var u=this.gradientUnits=="objectBoundingBox"?(n.width()+n.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels();return e.createRadialGradient(s,o,0,r,i,u)}},e.Element.radialGradient.prototype=new e.Element.GradientBase,e.Element.stop=function(t){this.base=e.Element.ElementBase,this.base(t),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),this.offset>1&&(this.offset=1);var n=this.style("stop-color");this.style("stop-opacity").hasValue()&&(n=n.addOpacity(this.style("stop-opacity").value)),this.color=n.value},e.Element.stop.prototype=new e.Element.ElementBase,e.Element.AnimateBase=function(t){this.base=e.Element.ElementBase,this.base(t),e.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var e=this.attribute("attributeType").value,t=this.attribute("attributeName").value;return e=="CSS"?this.parent.style(t,!0):this.parent.attribute(t,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(e){this.initialValue==null&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits());if(this.duration>this.maxDuration){if(this.attribute("repeatCount").value!="indefinite"&&this.attribute("repeatDur").value!="indefinite")return this.attribute("fill").valueOrDefault("remove")=="remove"&&!this.removed?(this.removed=!0,this.getProperty().value=this.initialValue,!0):!1;this.duration=0}this.duration=this.duration+e;var t=!1;if(this.begin<this.duration){var n=this.calcValue();if(this.attribute("type").hasValue()){var r=this.attribute("type").value;n=r+"("+n+")"}this.getProperty().value=n,t=!0}return t},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var t={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var n=t.progress*(this.values.value.length-1),r=Math.floor(n),i=Math.ceil(n);t.from=new e.Property("from",parseFloat(this.values.value[r])),t.to=new e.Property("to",parseFloat(this.values.value[i])),t.progress=(n-r)/(i-r)}else t.from=this.from,t.to=this.to;return t}},e.Element.AnimateBase.prototype=new e.Element.ElementBase,e.Element.animate=function(t){this.base=e.Element.AnimateBase,this.base(t),this.calcValue=function(){var e=this.progress(),t=e.from.numValue()+(e.to.numValue()-e.from.numValue())*e.progress;return t+this.initialUnits}},e.Element.animate.prototype=new e.Element.AnimateBase,e.Element.animateColor=function(t){this.base=e.Element.AnimateBase,this.base(t),this.calcValue=function(){var e=this.progress(),t=new RGBColor(e.from.value),n=new RGBColor(e.to.value);if(t.ok&&n.ok){var r=t.r+(n.r-t.r)*e.progress,i=t.g+(n.g-t.g)*e.progress,s=t.b+(n.b-t.b)*e.progress;return"rgb("+parseInt(r,10)+","+parseInt(i,10)+","+parseInt(s,10)+")"}return this.attribute("from").value}},e.Element.animateColor.prototype=new e.Element.AnimateBase,e.Element.animateTransform=function(t){this.base=e.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress(),n=e.ToNumberArray(t.from.value),r=e.ToNumberArray(t.to.value),i="";for(var s=0;s<n.length;s++)i+=n[s]+(r[s]-n[s])*t.progress+" ";return i}},e.Element.animateTransform.prototype=new e.Element.animate,e.Element.font=function(t){this.base=e.Element.ElementBase,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var n=0;n<this.children.length;n++){var r=this.children[n];r.type=="font-face"?(this.fontFace=r,r.style("font-family").hasValue()&&(e.Definitions[r.style("font-family").value]=this)):r.type=="missing-glyph"?this.missingGlyph=r:r.type=="glyph"&&(r.arabicForm!=""?(this.isRTL=!0,this.isArabic=!0,typeof this.glyphs[r.unicode]=="undefined"&&(this.glyphs[r.unicode]=[]),this.glyphs[r.unicode][r.arabicForm]=r):this.glyphs[r.unicode]=r)}},e.Element.font.prototype=new e.Element.ElementBase,e.Element.fontface=function(t){this.base=e.Element.ElementBase,this.base(t),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},e.Element.fontface.prototype=new e.Element.ElementBase,e.Element.missingglyph=function(t){this.base=e.Element.path,this.base(t),this.horizAdvX=0},e.Element.missingglyph.prototype=new e.Element.path,e.Element.glyph=function(t){this.base=e.Element.path,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},e.Element.glyph.prototype=new e.Element.path,e.Element.text=function(t){this.captureTextNodes=!0,this.base=e.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(e){this.baseSetContext(e),this.style("dominant-baseline").hasValue()&&(e.textBaseline=this.style("dominant-baseline").value),this.style("alignment-baseline").hasValue()&&(e.textBaseline=this.style("alignment-baseline").value)},this.getBoundingBox=function(){return new e.BoundingBox(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"),0,0)},this.renderChildren=function(e){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.x+=this.getAnchorDelta(e,this,0);for(var t=0;t<this.children.length;t++)this.renderChild(e,this,t)},this.getAnchorDelta=function(e,t,n){var r=this.style("text-anchor").valueOrDefault("start");if(r!="start"){var i=0;for(var s=n;s<t.children.length;s++){var o=t.children[s];if(s>n&&o.attribute("x").hasValue())break;i+=o.measureTextRecursive(e)}return-1*(r=="end"?i:i/2)}return 0},this.renderChild=function(e,t,n){var r=t.children[n];r.attribute("x").hasValue()?r.x=r.attribute("x").toPixels("x")+this.getAnchorDelta(e,t,n):(this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),r.attribute("dx").hasValue()&&(this.x+=r.attribute("dx").toPixels("x")),r.x=this.x),this.x=r.x+r.measureText(e),r.attribute("y").hasValue()?r.y=r.attribute("y").toPixels("y"):(this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),r.attribute("dy").hasValue()&&(this.y+=r.attribute("dy").toPixels("y")),r.y=this.y),this.y=r.y,r.render(e);for(var n=0;n<r.children.length;n++)this.renderChild(e,r,n)}},e.Element.text.prototype=new e.Element.RenderedElementBase,e.Element.TextElementBase=function(t){this.base=e.Element.RenderedElementBase,this.base(t),this.getGlyph=function(e,t,n){var r=t[n],i=null;if(e.isArabic){var s="isolated";(n==0||t[n-1]==" ")&&n<t.length-2&&t[n+1]!=" "&&(s="terminal"),n>0&&t[n-1]!=" "&&n<t.length-2&&t[n+1]!=" "&&(s="medial"),n>0&&t[n-1]!=" "&&(n==t.length-1||t[n+1]==" ")&&(s="initial"),typeof e.glyphs[r]!="undefined"&&(i=e.glyphs[r][s],i==null&&e.glyphs[r].type=="glyph"&&(i=e.glyphs[r]))}else i=e.glyphs[r];return i==null&&(i=e.missingGlyph),i},this.renderChildren=function(t){var n=this.parent.style("font-family").getDefinition();if(n!=null){var r=this.parent.style("font-size").numValueOrDefault(e.Font.Parse(e.ctx.font).fontSize),i=this.parent.style("font-style").valueOrDefault(e.Font.Parse(e.ctx.font).fontStyle),s=this.getText();n.isRTL&&(s=s.split("").reverse().join(""));var o=e.ToNumberArray(this.parent.attribute("dx").value);for(var u=0;u<s.length;u++){var a=this.getGlyph(n,s,u),f=r/n.fontFace.unitsPerEm;t.translate(this.x,this.y),t.scale(f,-f);var l=t.lineWidth;t.lineWidth=t.lineWidth*n.fontFace.unitsPerEm/r,i=="italic"&&t.transform(1,0,.4,1,0,0),a.render(t),i=="italic"&&t.transform(1,0,-0.4,1,0,0),t.lineWidth=l,t.scale(1/f,-1/f),t.translate(-this.x,-this.y),this.x+=r*(a.horizAdvX||n.horizAdvX)/n.fontFace.unitsPerEm,typeof o[u]!="undefined"&&!isNaN(o[u])&&(this.x+=o[u])}return}t.fillStyle!=""&&t.fillText(e.compressSpaces(this.getText()),this.x,this.y),t.strokeStyle!=""&&t.strokeText(e.compressSpaces(this.getText()),this.x,this.y)},this.getText=function(){},this.measureTextRecursive=function(e){var t=this.measureText(e);for(var n=0;n<this.children.length;n++)t+=this.children[n].measureTextRecursive(e);return t},this.measureText=function(t){var n=this.parent.style("font-family").getDefinition();if(n!=null){var r=this.parent.style("font-size").numValueOrDefault(e.Font.Parse(e.ctx.font).fontSize),i=0,s=this.getText();n.isRTL&&(s=s.split("").reverse().join(""));var o=e.ToNumberArray(this.parent.attribute("dx").value);for(var u=0;u<s.length;u++){var a=this.getGlyph(n,s,u);i+=(a.horizAdvX||n.horizAdvX)*r/n.fontFace.unitsPerEm,typeof o[u]!="undefined"&&!isNaN(o[u])&&(i+=o[u])}return i}var f=e.compressSpaces(this.getText());if(!t.measureText)return f.length*10;t.save(),this.setContext(t);var l=t.measureText(f).width;return t.restore(),l}},e.Element.TextElementBase.prototype=new e.Element.RenderedElementBase,e.Element.tspan=function(t){this.captureTextNodes=!0,this.base=e.Element.TextElementBase,this.base(t),this.text=t.nodeValue||t.text||"",this.getText=function(){return this.text}},e.Element.tspan.prototype=new e.Element.TextElementBase,e.Element.tref=function(t){this.base=e.Element.TextElementBase,this.base(t),this.getText=function(){var e=this.getHrefAttribute().getDefinition();if(e!=null)return e.children[0].getText()}},e.Element.tref.prototype=new e.Element.TextElementBase,e.Element.a=function(t){this.base=e.Element.TextElementBase,this.base(t),this.hasText=!0;for(var n=0;n<t.childNodes.length;n++)t.childNodes[n].nodeType!=3&&(this.hasText=!1);this.text=this.hasText?t.childNodes[0].nodeValue:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(t){if(this.hasText){this.baseRenderChildren(t);var n=new e.Property("fontSize",e.Font.Parse(e.ctx.font).fontSize);e.Mouse.checkBoundingBox(this,new e.BoundingBox(this.x,this.y-n.toPixels("y"),this.x+this.measureText(t),this.y))}else{var r=new e.Element.g;r.children=this.children,r.parent=this,r.render(t)}},this.onclick=function(){window.open(this.getHrefAttribute().value)},this.onmousemove=function(){e.ctx.canvas.style.cursor="pointer"}},e.Element.a.prototype=new e.Element.TextElementBase,e.Element.image=function(t){this.base=e.Element.RenderedElementBase,this.base(t);var n=this.getHrefAttribute().value,r=n.match(/\.svg$/);e.Images.push(this),this.loaded=!1;if(!r){this.img=document.createElement("img");var i=this;this.img.onload=function(){i.loaded=!0},this.img.onerror=function(){typeof console!="undefined"&&(console.log('ERROR: image "'+n+'" not found'),i.loaded=!0)},this.img.src=n}else this.img=e.ajax(n),this.loaded=!0;this.renderChildren=function(t){var n=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),o=this.attribute("height").toPixels("y");if(s==0||o==0)return;t.save(),r?t.drawSvg(this.img,n,i,s,o):(t.translate(n,i),e.AspectRatio(t,this.attribute("preserveAspectRatio").value,s,this.img.width,o,this.img.height,0,0),t.drawImage(this.img,0,0)),t.restore()},this.getBoundingBox=function(){var t=this.attribute("x").toPixels("x"),n=this.attribute("y").toPixels("y"),r=this.attribute("width").toPixels("x"),i=this.attribute("height").toPixels("y");return new e.BoundingBox(t,n,t+r,n+i)}},e.Element.image.prototype=new e.Element.RenderedElementBase,e.Element.g=function(t){this.base=e.Element.RenderedElementBase,this.base(t),this.getBoundingBox=function(){var t=new e.BoundingBox;for(var n=0;n<this.children.length;n++)t.addBoundingBox(this.children[n].getBoundingBox());return t}},e.Element.g.prototype=new e.Element.RenderedElementBase,e.Element.symbol=function(t){this.base=e.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t);if(this.attribute("viewBox").hasValue()){var n=e.ToNumberArray(this.attribute("viewBox").value),r=n[0],i=n[1];width=n[2],height=n[3],e.AspectRatio(t,this.attribute("preserveAspectRatio").value,this.attribute("width").toPixels("x"),width,this.attribute("height").toPixels("y"),height,r,i),e.ViewPort.SetCurrent(n[2],n[3])}}},e.Element.symbol.prototype=new e.Element.RenderedElementBase,e.Element.style=function(t){this.base=e.Element.ElementBase,this.base(t);var n="";for(var r=0;r<t.childNodes.length;r++)n+=t.childNodes[r].nodeValue;n=n.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,""),n=e.compressSpaces(n);var i=n.split("}");for(var r=0;r<i.length;r++)if(e.trim(i[r])!=""){var s=i[r].split("{"),o=s[0].split(","),u=s[1].split(";");for(var a=0;a<o.length;a++){var f=e.trim(o[a]);if(f!=""){var l={};for(var c=0;c<u.length;c++){var h=u[c].indexOf(":"),p=u[c].substr(0,h),d=u[c].substr(h+1,u[c].length-h);p!=null&&d!=null&&(l[e.trim(p)]=new e.Property(e.trim(p),e.trim(d)))}e.Styles[f]=l;if(f=="@font-face"){var v=l["font-family"].value.replace(/"/g,""),m=l.src.value.split(",");for(var g=0;g<m.length;g++)if(m[g].indexOf('format("svg")')>0){var y=m[g].indexOf("url"),b=m[g].indexOf(")",y),w=m[g].substr(y+5,b-y-6),E=e.parseXml(e.ajax(w)),S=E.getElementsByTagName("font");for(var x=0;x<S.length;x++){var T=e.CreateElement(S[x]);e.Definitions[v]=T}}}}}}},e.Element.style.prototype=new e.Element.ElementBase,e.Element.use=function(t){this.base=e.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(e){this.baseSetContext(e),this.attribute("x").hasValue()&&e.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&e.translate(0,this.attribute("y").toPixels("y"))},this.getDefinition=function(){var e=this.getHrefAttribute().getDefinition();return this.attribute("width").hasValue()&&(e.attribute("width",!0).value=this.attribute("width").value),this.attribute("height").hasValue()&&(e.attribute("height",!0).value=this.attribute("height").value),e},this.path=function(e){var t=this.getDefinition();t!=null&&t.path(e)},this.getBoundingBox=function(){var e=this.getDefinition();if(e!=null)return e.getBoundingBox()},this.renderChildren=function(e){var t=this.getDefinition();if(t!=null){var n=t.parent;t.parent=null,t.render(e),t.parent=n}}},e.Element.use.prototype=new e.Element.RenderedElementBase,e.Element.mask=function(t){this.base=e.Element.ElementBase,this.base(t),this.apply=function(t,n){var r=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),o=this.attribute("height").toPixels("y");if(s==0&&o==0){var u=new e.BoundingBox;for(var a=0;a<this.children.length;a++)u.addBoundingBox(this.children[a].getBoundingBox());var r=Math.floor(u.x1),i=Math.floor(u.y1),s=Math.floor(u.width()),o=Math.floor(u.height())}var f=n.attribute("mask").value;n.attribute("mask").value="";var l=document.createElement("canvas");l.width=r+s,l.height=i+o;var c=l.getContext("2d");this.renderChildren(c);var h=document.createElement("canvas");h.width=r+s,h.height=i+o;var p=h.getContext("2d");n.render(p),p.globalCompositeOperation="destination-in",p.fillStyle=c.createPattern(l,"no-repeat"),p.fillRect(0,0,r+s,i+o),t.fillStyle=p.createPattern(h,"no-repeat"),t.fillRect(0,0,r+s,i+o),n.attribute("mask").value=f},this.render=function(e){}},e.Element.mask.prototype=new e.Element.ElementBase,e.Element.clipPath=function(t){this.base=e.Element.ElementBase,this.base(t),this.apply=function(t){for(var n=0;n<this.children.length;n++){var r=this.children[n];if(typeof r.path!="undefined"){var i=null;r.attribute("transform").hasValue()&&(i=new e.Transform(r.attribute("transform").value),i.apply(t)),r.path(t),t.clip(),i&&i.unapply(t)}}},this.render=function(e){}},e.Element.clipPath.prototype=new e.Element.ElementBase,e.Element.filter=function(t){this.base=e.Element.ElementBase,this.base(t),this.apply=function(e,t){var n=t.getBoundingBox(),r=Math.floor(n.x1),i=Math.floor(n.y1),s=Math.floor(n.width()),o=Math.floor(n.height()),u=t.style("filter").value;t.style("filter").value="";var a=0,f=0;for(var l=0;l<this.children.length;l++){var c=this.children[l].extraFilterDistance||0;a=Math.max(a,c),f=Math.max(f,c)}var h=document.createElement("canvas");h.width=s+2*a,h.height=o+2*f;var p=h.getContext("2d");p.translate(-r+a,-i+f),t.render(p);for(var l=0;l<this.children.length;l++)this.children[l].apply(p,0,0,s+2*a,o+2*f);e.drawImage(h,0,0,s+2*a,o+2*f,r-a,i-f,s+2*a,o+2*f),t.style("filter",!0).value=u},this.render=function(e){}},e.Element.filter.prototype=new e.Element.ElementBase,e.Element.feMorphology=function(t){this.base=e.Element.ElementBase,this.base(t),this.apply=function(e,t,n,r,i){}},e.Element.feMorphology.prototype=new e.Element.ElementBase,e.Element.feColorMatrix=function(t){function n(e,t,n,r,i,s){return e[n*r*4+t*4+s]}function r(e,t,n,r,i,s,o){e[n*r*4+t*4+s]=o}this.base=e.Element.ElementBase,this.base(t),this.apply=function(e,t,i,s,o){var u=e.getImageData(0,0,s,o);for(var i=0;i<o;i++)for(var t=0;t<s;t++){var a=n(u.data,t,i,s,o,0),f=n(u.data,t,i,s,o,1),l=n(u.data,t,i,s,o,2),c=(a+f+l)/3;r(u.data,t,i,s,o,0,c),r(u.data,t,i,s,o,1,c),r(u.data,t,i,s,o,2,c)}e.clearRect(0,0,s,o),e.putImageData(u,0,0)}},e.Element.feColorMatrix.prototype=new e.Element.ElementBase,e.Element.feGaussianBlur=function(t){this.base=e.Element.ElementBase,this.base(t),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(t,n,r,i,s){if(typeof stackBlurCanvasRGBA=="undefined"){typeof console!="undefined"&&console.log("ERROR: StackBlur.js must be included for blur to work");return}t.canvas.id=e.UniqueId(),t.canvas.style.display="none",document.body.appendChild(t.canvas),stackBlurCanvasRGBA(t.canvas.id,n,r,i,s,this.blurRadius),document.body.removeChild(t.canvas)}},e.Element.feGaussianBlur.prototype=new e.Element.ElementBase,e.Element.title=function(e){},e.Element.title.prototype=new e.Element.ElementBase,e.Element.desc=function(e){},e.Element.desc.prototype=new e.Element.ElementBase,e.Element.MISSING=function(e){typeof console!="undefined"&&console.log("ERROR: Element '"+e.nodeName+"' not yet implemented.")},e.Element.MISSING.prototype=new e.Element.ElementBase,e.CreateElement=function(t){var n=t.nodeName.replace(/^[^:]+:/,"");n=n.replace(/\-/g,"");var r=null;return typeof e.Element[n]!="undefined"?r=new e.Element[n](t):r=new e.Element.MISSING(t),r.type=t.nodeName,r},e.load=function(t,n){e.loadXml(t,e.ajax(n))},e.loadXml=function(t,n){e.loadXmlDoc(t,e.parseXml(n))},e.loadXmlDoc=function(t,n){e.init(t);var r=function(e){var n=t.canvas;while(n)e.x-=n.offsetLeft,e.y-=n.offsetTop,n=n.offsetParent;return window.scrollX&&(e.x+=window.scrollX),window.scrollY&&(e.y+=window.scrollY),e};e.opts["ignoreMouse"]!=1&&(t.canvas.onclick=function(t){var n=r(new e.Point(t!=null?t.clientX:event.clientX,t!=null?t.clientY:event.clientY));e.Mouse.onclick(n.x,n.y)},t.canvas.onmousemove=function(t){var n=r(new e.Point(t!=null?t.clientX:event.clientX,t!=null?t.clientY:event.clientY));e.Mouse.onmousemove(n.x,n.y)});var i=e.CreateElement(n.documentElement);i.root=!0;var s=!0,o=function(){e.ViewPort.Clear(),t.canvas.parentNode&&e.ViewPort.SetCurrent(t.canvas.parentNode.clientWidth,t.canvas.parentNode.clientHeight),e.opts["ignoreDimensions"]!=1&&(i.style("width").hasValue()&&(t.canvas.width=i.style("width").toPixels("x"),t.canvas.style.width=t.canvas.width+"px"),i.style("height").hasValue()&&(t.canvas.height=i.style("height").toPixels("y"),t.canvas.style.height=t.canvas.height+"px"));var r=t.canvas.clientWidth||t.canvas.width,o=t.canvas.clientHeight||t.canvas.height;e.opts["ignoreDimensions"]==1&&i.style("width").hasValue()&&i.style("height").hasValue()&&(r=i.style("width").toPixels("x"),o=i.style("height").toPixels("y")),e.ViewPort.SetCurrent(r,o),e.opts["offsetX"]!=null&&(i.attribute("x",!0).value=e.opts.offsetX),e.opts["offsetY"]!=null&&(i.attribute("y",!0).value=e.opts.offsetY);if(e.opts["scaleWidth"]!=null&&e.opts["scaleHeight"]!=null){var u=1,a=1,f=e.ToNumberArray(i.attribute("viewBox").value);i.attribute("width").hasValue()?u=i.attribute("width").toPixels("x")/e.opts.scaleWidth:isNaN(f[2])||(u=f[2]/e.opts.scaleWidth),i.attribute("height").hasValue()?a=i.attribute("height").toPixels("y")/e.opts.scaleHeight:isNaN(f[3])||(a=f[3]/e.opts.scaleHeight),i.attribute("width",!0).value=e.opts.scaleWidth,i.attribute("height",!0).value=e.opts.scaleHeight,i.attribute("viewBox",!0).value="0 0 "+r*u+" "+o*a,i.attribute("preserveAspectRatio",!0).value="none"}e.opts["ignoreClear"]!=1&&t.clearRect(0,0,r,o),i.render(t),s&&(s=!1,typeof e.opts["renderCallback"]=="function"&&e.opts.renderCallback(n))},u=!0;e.ImagesLoaded()&&(u=!1,o()),e.intervalID=setInterval(function(){var t=!1;u&&e.ImagesLoaded()&&(u=!1,t=!0),e.opts["ignoreMouse"]!=1&&(t|=e.Mouse.hasEvents());if(e.opts["ignoreAnimation"]!=1)for(var n=0;n<e.Animations.length;n++)t|=e.Animations[n].update(1e3/e.FRAMERATE);typeof e.opts["forceRedraw"]=="function"&&e.opts["forceRedraw"]()==1&&(t=!0),t&&(o(),e.Mouse.runEvents())},1e3/e.FRAMERATE)},e.stop=function(){e.intervalID&&clearInterval(e.intervalID)},e.Mouse=new function(){this.events=[],this.hasEvents=function(){return this.events.length!=0},this.onclick=function(e,t){this.events.push({type:"onclick",x:e,y:t,run:function(e){e.onclick&&e.onclick()}})},this.onmousemove=function(e,t){this.events.push({type:"onmousemove",x:e,y:t,run:function(e){e.onmousemove&&e.onmousemove()}})},this.eventElements=[],this.checkPath=function(e,t){for(var n=0;n<this.events.length;n++){var r=this.events[n];t.isPointInPath&&t.isPointInPath(r.x,r.y)&&(this.eventElements[n]=e)}},this.checkBoundingBox=function(e,t){for(var n=0;n<this.events.length;n++){var r=this.events[n];t.isPointInBox(r.x,r.y)&&(this.eventElements[n]=e)}},this.runEvents=function(){e.ctx.canvas.style.cursor="";for(var t=0;t<this.events.length;t++){var n=this.events[t],r=this.eventElements[t];while(r)n.run(r),r=r.parent}this.events=[],this.eventElements=[]}},e}this.canvg=function(t,n,r){if(t==null&&n==null&&r==null){var i=document.getElementsByTagName("svg");for(var s=0;s<i.length;s++){var o=i[s],u=document.createElement("canvas");u.width=o.clientWidth,u.height=o.clientHeight,o.parentNode.insertBefore(u,o),o.parentNode.removeChild(o);var a=document.createElement("div");a.appendChild(o),canvg(u,a.innerHTML)}return}r=r||{},typeof t=="string"&&(t=document.getElementById(t)),t.svg!=null&&t.svg.stop();var f=e();if(t.childNodes.length!=1||t.childNodes[0].nodeName!="OBJECT")t.svg=f;f.opts=r;var l=t.getContext("2d");typeof n.documentElement!="undefined"?f.loadXmlDoc(l,n):n.substr(0,1)=="<"?f.loadXml(l,n):f.load(l,n)}})(),typeof CanvasRenderingContext2D!="undefined"&&(CanvasRenderingContext2D.prototype.drawSvg=function(e,t,n,r,i){canvg(this.canvas,e,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:t,offsetY:n,scaleWidth:r,scaleHeight:i})}),Pancake.prototype={replace:function(e){typeof e=="string"&&(e=document.getElementById(e));if(!e||!this.element)throw"No valid element or element ID supplied.";return e.parentNode.insertBefore(this.element,e.nextSibling),e.parentNode.removeChild(e),this},download:function(e){if(typeof e!="string"||!e.length)this.id?e=this.id+"."+this.format:e="image."+this.format;var t=document.createElement("a");t.href=this.src,t.setAttribute("download",e),document.body.appendChild(t);if(typeof t.click=="function")t.click();else{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}return document.body.removeChild(t),this}};

// Spectrum Colorpicker v1.1.1
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

(function (window, $, undefined) {
    var defaultOpts = {

        // Callbacks
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false,
        showInput: false,
        showButtons: true,
        clickoutFiresChange: false,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        preferredFormat: false,
        className: "",
        showAlpha: false,
        theme: "sp-light",
        palette: ['fff', '000'],
        selectionPalette: [],
        disabled: false
    },
    spectrums = [],
    IE = !!/msie/i.exec( window.navigator.userAgent ),
    rgbaSupport = (function() {
        function contains( str, substr ) {
            return !!~('' + str).indexOf(substr);
        }

        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    })(),
    replaceInput = [
        "<div class='sp-replacer'>",
            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
            "<div class='sp-dd'>&#9660;</div>",
        "</div>"
    ].join(''),
    markup = (function () {

        // IE does not support gradients with multiple stops, so we need to simulate
        //  that for the rainbow slider with 8 divs that each have a single gradient
        var gradientFix = "";
        if (IE) {
            for (var i = 1; i <= 6; i++) {
                gradientFix += "<div class='sp-" + i + "'></div>";
            }
        }

        return [
            "<div class='sp-container sp-hidden'>",
                "<div class='sp-palette-container'>",
                    "<div class='sp-palette sp-thumb sp-cf'></div>",
                "</div>",
                "<div class='sp-picker-container'>",
                    "<div class='sp-top sp-cf'>",
                        "<div class='sp-fill'></div>",
                        "<div class='sp-top-inner'>",
                            "<div class='sp-color'>",
                                "<div class='sp-sat'>",
                                    "<div class='sp-val'>",
                                        "<div class='sp-dragger'></div>",
                                    "</div>",
                                "</div>",
                            "</div>",
                            "<div class='sp-hue'>",
                                "<div class='sp-slider'></div>",
                                gradientFix,
                            "</div>",
                        "</div>",
                        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                    "</div>",
                    "<div class='sp-input-container sp-cf'>",
                        "<input class='sp-input' type='text' spellcheck='false'  />",
                    "</div>",
                    "<div class='sp-initial sp-thumb sp-cf'></div>",
                    "<div class='sp-button-container sp-cf'>",
                        "<a class='sp-cancel' href='#'></a>",
                        "<button class='sp-choose'></button>",
                    "</div>",
                "</div>",
            "</div>"
        ].join("");
    })();

    function paletteTemplate (p, color, className) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var tiny = tinycolor(p[i]);
            var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
            c += (tinycolor.equals(color, p[i])) ? " sp-thumb-active" : "";

            var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
            html.push('<span title="' + tiny.toRgbString() + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        var opts = $.extend({}, defaultOpts, o);
        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            flat = opts.flat,
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = opts.palette.slice(0),
            paletteArray = $.isArray(palette[0]) ? palette : [palette],
            selectionPalette = opts.selectionPalette.slice(0),
            maxSelectionSize = opts.maxSelectionSize,
            draggingClass = "sp-dragging",
            shiftMovementDirection = null;

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            chooseButton = container.find(".sp-choose"),
            isInput = boundElement.is("input"),
            shouldReplace = isInput && !flat,
            replacer = (shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className) : $([]),
            offsetElement = (shouldReplace) ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || (isInput && boundElement.val()),
            colorOnShow = false,
            preferredFormat = opts.preferredFormat,
            currentPreferredFormat = preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange;


        function applyOptions() {

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            if (shouldReplace) {
                boundElement.after(replacer).hide();
            }

            if (flat) {
                boundElement.after(container).hide();
            }
            else {

                var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
                if (appendTo.length !== 1) {
                    appendTo = $("body");
                }

                appendTo.append(container);
            }

            if (localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[localStorageKey];
                        $.each(oldPalette, function(i, c) {
                             addColorToSelectionPalette(c);
                        });
                    }
                }
                catch(e) { }

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                }
                catch (e) { }
            }

            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if(boundElement.is(":disabled") || (opts.disabled === true)) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            textInput.change(setFromTextInput);
            textInput.bind("paste", function () {
                setTimeout(setFromTextInput, 1);
            });
            textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

            cancelButton.text(opts.cancelText);
            cancelButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                hide("cancel");
            });

            chooseButton.text(opts.chooseText);
            chooseButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = (dragX / alphaWidth);
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            });

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY, e) {

                // shift+drag should snap the movement to either the x or y axis.
                if (!e.shiftKey) {
                    shiftMovementDirection = null;
                }
                else if (!shiftMovementDirection) {
                    var oldDragX = currentSaturation * dragWidth;
                    var oldDragY = dragHeight - (currentValue * dragHeight);
                    var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

                    shiftMovementDirection = furtherFromX ? "x" : "y";
                }

                var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
                var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

                if (setSaturation) {
                    currentSaturation = parseFloat(dragX / dragWidth);
                }
                if (setValue) {
                    currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                }

                move();

            }, dragStart, dragStop);

            if (!!initialColor) {
                set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = preferredFormat || tinycolor(initialColor).format;

                addColorToSelectionPalette(initialColor);
            }
            else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function palletElementClick(e) {
                if (e.data && e.data.ignore) {
                    set($(this).data("color"));
                    move();
                }
                else {
                    set($(this).data("color"));
                    updateOriginalInput(true);
                    move();
                    hide();
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.delegate(".sp-thumb-el", paletteEvent, palletElementClick);
            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, palletElementClick);
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var colorRgb = tinycolor(color).toRgbString();
                if ($.inArray(colorRgb, selectionPalette) === -1) {
                    selectionPalette.push(colorRgb);
                    while(selectionPalette.length > maxSelectionSize) {
                        selectionPalette.shift();
                    }
                }

                if (localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    }
                    catch(e) { }
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            var p = selectionPalette;
            var paletteLookup = {};
            var rgb;

            if (opts.showPalette) {

                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }

                for (i = 0; i < p.length; i++) {
                    rgb = tinycolor(p[i]).toRgbString();

                    if (!paletteLookup.hasOwnProperty(rgb)) {
                        unique.push(p[i]);
                        paletteLookup[rgb] = true;
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i);
            });

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection"));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial"));
            }
        }

        function dragStart() {
            if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
                reflow();
            }
            container.addClass(draggingClass);
            shiftMovementDirection = null;
        }

        function dragStop() {
            container.removeClass(draggingClass);
        }

        function setFromTextInput() {
            var tiny = tinycolor(textInput.val());
            if (tiny.ok) {
                set(tiny);
            }
            else {
                textInput.addClass("sp-validation-error");
            }
        }

        function toggle() {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }

        function show() {
            var event = $.Event('beforeShow.spectrum');

            if (visible) {
                reflow();
                return;
            }

            boundElement.trigger(event, [ get() ]);

            if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
                return;
            }

            hideAll();
            visible = true;

            $(doc).bind("click.spectrum", hide);
            $(window).bind("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.removeClass("sp-hidden");

            if (opts.showPalette) {
                drawPalette();
            }
            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
            boundElement.trigger('show.spectrum', [ colorOnShow ]);
        }

        function hide(e) {

            // Return on right click
            if (e && e.type == "click" && e.button == 2) { return; }

            // Return if hiding is unnecessary
            if (!visible || flat) { return; }
            visible = false;

            $(doc).unbind("click.spectrum", hide);
            $(window).unbind("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.addClass("sp-hidden");

            var colorHasChanged = !tinycolor.equals(get(), colorOnShow);

            if (colorHasChanged) {
                if (clickoutFiresChange && e !== "cancel") {
                    updateOriginalInput(true);
                }
                else {
                    revert();
                }
            }

            callbacks.hide(get());
            boundElement.trigger('hide.spectrum', [ get() ]);
        }

        function revert() {
            set(colorOnShow, true);
        }

        function set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                return;
            }

            var newColor = tinycolor(color);
            var newHsv = newColor.toHsv();

            currentHue = (newHsv.h % 360) / 360;
            currentSaturation = newHsv.s;
            currentValue = newHsv.v;
            currentAlpha = newHsv.a;

            updateUI();

            if (newColor.ok && !ignoreFormatChange) {
                currentPreferredFormat = preferredFormat || newColor.format;
            }
        }

        function get(opts) {
            opts = opts || { };
            return tinycolor.fromRatio({
                h: currentHue,
                s: currentSaturation,
                v: currentValue,
                a: Math.round(currentAlpha * 100) / 100
            }, { format: opts.format || currentPreferredFormat });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
            boundElement.trigger('move.spectrum', [ get() ]);
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
            dragger.css("background-color", flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1) {
                if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get({ format: format }),
                realHex = realColor.toHexString(),
                realRgb = realColor.toRgbString();

            // Update the replaced elements background color (with actual selected color)
            if (rgbaSupport || realColor.alpha === 1) {
                previewElement.css("background-color", realRgb);
            }
            else {
                previewElement.css("background-color", "transparent");
                previewElement.css("filter", realColor.toFilter());
            }

            if (opts.showAlpha) {
                var rgb = realColor.toRgb();
                rgb.a = 0;
                var realAlpha = tinycolor(rgb).toRgbString();
                var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                if (IE) {
                    alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                }
                else {
                    alphaSliderInner.css("background", "-webkit-" + gradient);
                    alphaSliderInner.css("background", "-moz-" + gradient);
                    alphaSliderInner.css("background", "-ms-" + gradient);
                    alphaSliderInner.css("background", gradient);
                }
            }


            // Update the text entry input as it changes happen
            if (opts.showInput) {
                textInput.val(realColor.toString(format));
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            // Where to show the little circle in that displays your current selected color
            var dragX = s * dragWidth;
            var dragY = dragHeight - (v * dragHeight);
            dragX = Math.max(
                -dragHelperHeight,
                Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
            );
            dragY = Math.max(
                -dragHelperHeight,
                Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
            );
            dragHelper.css({
                "top": dragY,
                "left": dragX
            });

            var alphaX = currentAlpha * alphaWidth;
            alphaSlideHelper.css({
                "left": alphaX - (alphaSlideHelperWidth / 2)
            });

            // Where to show the bar that displays your current selected hue
            var slideY = (currentHue) * slideHeight;
            slideHelper.css({
                "top": slideY - slideHelperHeight
            });
        }

        function updateOriginalInput(fireCallback) {
            var color = get();

            if (isInput) {
                boundElement.val(color.toString(currentPreferredFormat)).change();
            }

            var hasChanged = !tinycolor.equals(color, colorOnShow);
            colorOnShow = color;

            // Update the selection palette with the current color
            addColorToSelectionPalette(color);
            if (fireCallback && hasChanged) {
                callbacks.change(color);
                boundElement.trigger('change.spectrum', [ color ]);
            }
        }

        function reflow() {
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.css("position", "absolute");
                container.offset(getOffset(container, offsetElement));
            }

            updateHelperLocations();
        }

        function destroy() {
            boundElement.show();
            offsetElement.unbind("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            set: function (c) {
                set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        offset.top += inputHeight;

        offset.left -=
            Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offset.left + dpWidth - viewWidth) : 0);

        offset.top -=
            Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return offset;
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = element.ownerDocument || document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents["touchmove mousemove"] = move;
        duringDragEvents["touchend mouseup"] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && document.documentMode < 9 && !e.button) {
                    return stop();
                }

                var touches = e.originalEvent.touches;
                var pageX = touches ? touches[0].pageX : e.pageX;
                var pageY = touches ? touches[0].pageY : e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }
        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);
            var touches = e.originalEvent.touches;

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    if (!hasTouch) {
                        move(e);
                    }

                    prevent(e);
                }
            }
        }
        function stop() {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");
                onstop.apply(element, arguments);
            }
            dragging = false;
        }

        $(element).bind("touchstart mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }


    function log(){/* jshint -W021 */if(window.console){if(Function.prototype.bind)log=Function.prototype.bind.call(console.log,console);else log=function(){Function.prototype.apply.call(console.log,console,arguments);};log.apply(this,arguments);}}

    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {

                    var method = spect[opts];
                    if (!method) {
                        throw new Error( "Spectrum: no such method: '" + opts + "'" );
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    }
                    else if (opts == "container") {
                        returnValue = spect.container;
                    }
                    else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    }
                    else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    }
                    else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var spect = spectrum(this, opts);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;

    $.spectrum = { };
    $.spectrum.localization = { };
    $.spectrum.palettes = { };

    $.fn.spectrum.processNativeColorInputs = function () {
        var colorInput = $("<input type='color' value='!' />")[0];
        var supportsColor = colorInput.type === "color" && colorInput.value != "!";

        if (!supportsColor) {
            $("input[type=color]").spectrum({
                preferredFormat: "hex6"
            });
        }
    };
    // TinyColor v0.9.14
    // https://github.com/bgrins/TinyColor
    // 2013-02-24, Brian Grinstead, MIT License

    (function(root) {

        var trimLeft = /^[\s,#]+/,
            trimRight = /\s+$/,
            tinyCounter = 0,
            math = Math,
            mathRound = math.round,
            mathMin = math.min,
            mathMax = math.max,
            mathRandom = math.random;

        function tinycolor (color, opts) {

            color = (color) ? color : '';
            opts = opts || { };

            // If input is already a tinycolor, return itself
            if (typeof color == "object" && color.hasOwnProperty("_tc_id")) {
               return color;
            }
            var rgb = inputToRGB(color);
            var r = rgb.r,
                g = rgb.g,
                b = rgb.b,
                a = rgb.a,
                roundA = mathRound(100*a) / 100,
                format = opts.format || rgb.format;

            // Don't let the range of [0,255] come back in [0,1].
            // Potentially lose a little bit of precision here, but will fix issues where
            // .5 gets interpreted as half of the total, instead of half of 1
            // If it was supposed to be 128, this was already taken care of by `inputToRgb`
            if (r < 1) { r = mathRound(r); }
            if (g < 1) { g = mathRound(g); }
            if (b < 1) { b = mathRound(b); }

            return {
                ok: rgb.ok,
                format: format,
                _tc_id: tinyCounter++,
                alpha: a,
                toHsv: function() {
                    var hsv = rgbToHsv(r, g, b);
                    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: a };
                },
                toHsvString: function() {
                    var hsv = rgbToHsv(r, g, b);
                    var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
                    return (a == 1) ?
                      "hsv("  + h + ", " + s + "%, " + v + "%)" :
                      "hsva(" + h + ", " + s + "%, " + v + "%, "+ roundA + ")";
                },
                toHsl: function() {
                    var hsl = rgbToHsl(r, g, b);
                    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: a };
                },
                toHslString: function() {
                    var hsl = rgbToHsl(r, g, b);
                    var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
                    return (a == 1) ?
                      "hsl("  + h + ", " + s + "%, " + l + "%)" :
                      "hsla(" + h + ", " + s + "%, " + l + "%, "+ roundA + ")";
                },
                toHex: function(allow3Char) {
                    return rgbToHex(r, g, b, allow3Char);
                },
                toHexString: function(allow3Char) {
                    return '#' + rgbToHex(r, g, b, allow3Char);
                },
                toRgb: function() {
                    return { r: mathRound(r), g: mathRound(g), b: mathRound(b), a: a };
                },
                toRgbString: function() {
                    return (a == 1) ?
                      "rgb("  + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ")" :
                      "rgba(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ", " + roundA + ")";
                },
                toPercentageRgb: function() {
                    return { r: mathRound(bound01(r, 255) * 100) + "%", g: mathRound(bound01(g, 255) * 100) + "%", b: mathRound(bound01(b, 255) * 100) + "%", a: a };
                },
                toPercentageRgbString: function() {
                    return (a == 1) ?
                      "rgb("  + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%)" :
                      "rgba(" + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%, " + roundA + ")";
                },
                toName: function() {
                    return hexNames[rgbToHex(r, g, b, true)] || false;
                },
                toFilter: function(secondColor) {
                    var hex = rgbToHex(r, g, b);
                    var secondHex = hex;
                    var alphaHex = Math.round(parseFloat(a) * 255).toString(16);
                    var secondAlphaHex = alphaHex;
                    var gradientType = opts && opts.gradientType ? "GradientType = 1, " : "";

                    if (secondColor) {
                        var s = tinycolor(secondColor);
                        secondHex = s.toHex();
                        secondAlphaHex = Math.round(parseFloat(s.alpha) * 255).toString(16);
                    }

                    return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr=#" + pad2(alphaHex) + hex + ",endColorstr=#" + pad2(secondAlphaHex) + secondHex + ")";
                },
                toString: function(format) {
                    format = format || this.format;
                    var formattedString = false;
                    if (format === "rgb") {
                        formattedString = this.toRgbString();
                    }
                    if (format === "prgb") {
                        formattedString = this.toPercentageRgbString();
                    }
                    if (format === "hex" || format === "hex6") {
                        formattedString = this.toHexString();
                    }
                    if (format === "hex3") {
                        formattedString = this.toHexString(true);
                    }
                    if (format === "name") {
                        formattedString = this.toName();
                    }
                    if (format === "hsl") {
                        formattedString = this.toHslString();
                    }
                    if (format === "hsv") {
                        formattedString = this.toHsvString();
                    }

                    return formattedString || this.toHexString();
                }
            };
        }

        // If input is an object, force 1 into "1.0" to handle ratios properly
        // String input requires "1.0" as input, so 1 will be treated as 1
        tinycolor.fromRatio = function(color, opts) {
            if (typeof color == "object") {
                var newColor = {};
                for (var i in color) {
                    if (color.hasOwnProperty(i)) {
                        if (i === "a") {
                            newColor[i] = color[i];
                        }
                        else {
                            newColor[i] = convertToPercentage(color[i]);
                        }
                    }
                }
                color = newColor;
            }

            return tinycolor(color, opts);
        };

        // Given a string or object, convert that input to RGB
        // Possible string inputs:
        //
        //     "red"
        //     "#f00" or "f00"
        //     "#ff0000" or "ff0000"
        //     "rgb 255 0 0" or "rgb (255, 0, 0)"
        //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
        //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
        //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
        //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
        //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
        //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
        //
        function inputToRGB(color) {

            var rgb = { r: 0, g: 0, b: 0 };
            var a = 1;
            var ok = false;
            var format = false;

            if (typeof color == "string") {
                color = stringInputToObject(color);
            }

            if (typeof color == "object") {
                if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                    rgb = rgbToRgb(color.r, color.g, color.b);
                    ok = true;
                    format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                    color.s = convertToPercentage(color.s);
                    color.v = convertToPercentage(color.v);
                    rgb = hsvToRgb(color.h, color.s, color.v);
                    ok = true;
                    format = "hsv";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                    color.s = convertToPercentage(color.s);
                    color.l = convertToPercentage(color.l);
                    rgb = hslToRgb(color.h, color.s, color.l);
                    ok = true;
                    format = "hsl";
                }

                if (color.hasOwnProperty("a")) {
                    a = color.a;
                }
            }

            a = parseFloat(a);

            // Handle invalid alpha characters by setting to 1
            if (isNaN(a) || a < 0 || a > 1) {
                a = 1;
            }

            return {
                ok: ok,
                format: color.format || format,
                r: mathMin(255, mathMax(rgb.r, 0)),
                g: mathMin(255, mathMax(rgb.g, 0)),
                b: mathMin(255, mathMax(rgb.b, 0)),
                a: a
            };
        }



        // Conversion Functions
        // --------------------

        // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
        // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

        // `rgbToRgb`
        // Handle bounds / percentage checking to conform to CSS color spec
        // <http://www.w3.org/TR/css3-color/>
        // *Assumes:* r, g, b in [0, 255] or [0, 1]
        // *Returns:* { r, g, b } in [0, 255]
        function rgbToRgb(r, g, b){
            return {
                r: bound01(r, 255) * 255,
                g: bound01(g, 255) * 255,
                b: bound01(b, 255) * 255
            };
        }

        // `rgbToHsl`
        // Converts an RGB color value to HSL.
        // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
        // *Returns:* { h, s, l } in [0,1]
        function rgbToHsl(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, l = (max + min) / 2;

            if(max == min) {
                h = s = 0; // achromatic
            }
            else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch(max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }

                h /= 6;
            }

            return { h: h, s: s, l: l };
        }

        // `hslToRgb`
        // Converts an HSL color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hslToRgb(h, s, l) {
            var r, g, b;

            h = bound01(h, 360);
            s = bound01(s, 100);
            l = bound01(l, 100);

            function hue2rgb(p, q, t) {
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            if(s === 0) {
                r = g = b = l; // achromatic
            }
            else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1/3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1/3);
            }

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHsv`
        // Converts an RGB color value to HSV
        // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
        // *Returns:* { h, s, v } in [0,1]
        function rgbToHsv(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, v = max;

            var d = max - min;
            s = max === 0 ? 0 : d / max;

            if(max == min) {
                h = 0; // achromatic
            }
            else {
                switch(max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return { h: h, s: s, v: v };
        }

        // `hsvToRgb`
        // Converts an HSV color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
         function hsvToRgb(h, s, v) {

            h = bound01(h, 360) * 6;
            s = bound01(s, 100);
            v = bound01(v, 100);

            var i = math.floor(h),
                f = h - i,
                p = v * (1 - s),
                q = v * (1 - f * s),
                t = v * (1 - (1 - f) * s),
                mod = i % 6,
                r = [v, q, p, p, t, v][mod],
                g = [t, v, v, q, p, p][mod],
                b = [p, p, t, v, v, q][mod];

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHex`
        // Converts an RGB color to hex
        // Assumes r, g, and b are contained in the set [0, 255]
        // Returns a 3 or 6 character hex
        function rgbToHex(r, g, b, allow3Char) {

            var hex = [
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            // Return a 3 character hex if possible
            if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
                return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
            }

            return hex.join("");
        }

        // `equals`
        // Can be called with any tinycolor input
        tinycolor.equals = function (color1, color2) {
            if (!color1 || !color2) { return false; }
            return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function() {
            return tinycolor.fromRatio({
                r: mathRandom(),
                g: mathRandom(),
                b: mathRandom()
            });
        };


        // Modification Functions
        // ----------------------
        // Thanks to less.js for some of the basics here
        // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


        tinycolor.desaturate = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.s -= ((amount || 10) / 100);
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        };
        tinycolor.saturate = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.s += ((amount || 10) / 100);
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        };
        tinycolor.greyscale = function(color) {
            return tinycolor.desaturate(color, 100);
        };
        tinycolor.lighten = function(color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.l += ((amount || 10) / 100);
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        };
        tinycolor.darken = function (color, amount) {
            var hsl = tinycolor(color).toHsl();
            hsl.l -= ((amount || 10) / 100);
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        };
        tinycolor.complement = function(color) {
            var hsl = tinycolor(color).toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return tinycolor(hsl);
        };


        // Combination Functions
        // ---------------------
        // Thanks to jQuery xColor for some of the ideas behind these
        // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

        tinycolor.triad = function(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [
                tinycolor(color),
                tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
                tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
            ];
        };
        tinycolor.tetrad = function(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [
                tinycolor(color),
                tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
                tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
                tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
            ];
        };
        tinycolor.splitcomplement = function(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [
                tinycolor(color),
                tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
                tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
            ];
        };
        tinycolor.analogous = function(color, results, slices) {
            results = results || 6;
            slices = slices || 30;

            var hsl = tinycolor(color).toHsl();
            var part = 360 / slices;
            var ret = [tinycolor(color)];

            for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
                hsl.h = (hsl.h + part) % 360;
                ret.push(tinycolor(hsl));
            }
            return ret;
        };
        tinycolor.monochromatic = function(color, results) {
            results = results || 6;
            var hsv = tinycolor(color).toHsv();
            var h = hsv.h, s = hsv.s, v = hsv.v;
            var ret = [];
            var modification = 1 / results;

            while (results--) {
                ret.push(tinycolor({ h: h, s: s, v: v}));
                v = (v + modification) % 1;
            }

            return ret;
        };

        // Readability Functions
        // ---------------------
        // <http://www.w3.org/TR/AERT#color-contrast>

        // `readability`
        // Analyze the 2 colors and returns an object with the following properties:
        //    `brightness`: difference in brightness between the two colors
        //    `color`: difference in color/hue between the two colors
        tinycolor.readability = function(color1, color2) {
            var a = tinycolor(color1).toRgb();
            var b = tinycolor(color2).toRgb();
            var brightnessA = (a.r * 299 + a.g * 587 + a.b * 114) / 1000;
            var brightnessB = (b.r * 299 + b.g * 587 + b.b * 114) / 1000;
            var colorDiff = (
                Math.max(a.r, b.r) - Math.min(a.r, b.r) +
                Math.max(a.g, b.g) - Math.min(a.g, b.g) +
                Math.max(a.b, b.b) - Math.min(a.b, b.b)
            );

            return {
                brightness: Math.abs(brightnessA - brightnessB),
                color: colorDiff
            };
        };

        // `readable`
        // http://www.w3.org/TR/AERT#color-contrast
        // Ensure that foreground and background color combinations provide sufficient contrast.
        // *Example*
        //    tinycolor.readable("#000", "#111") => false
        tinycolor.readable = function(color1, color2) {
            var readability = tinycolor.readability(color1, color2);
            return readability.brightness > 125 && readability.color > 500;
        };

        // `mostReadable`
        // Given a base color and a list of possible foreground or background
        // colors for that base, returns the most readable color.
        // *Example*
        //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
        tinycolor.mostReadable = function(baseColor, colorList) {
            var bestColor = null;
            var bestScore = 0;
            var bestIsReadable = false;
            for (var i=0; i < colorList.length; i++) {

                // We normalize both around the "acceptable" breaking point,
                // but rank brightness constrast higher than hue.

                var readability = tinycolor.readability(baseColor, colorList[i]);
                var readable = readability.brightness > 125 && readability.color > 500;
                var score = 3 * (readability.brightness / 125) + (readability.color / 500);

                if ((readable && ! bestIsReadable) ||
                    (readable && bestIsReadable && score > bestScore) ||
                    ((! readable) && (! bestIsReadable) && score > bestScore)) {
                    bestIsReadable = readable;
                    bestScore = score;
                    bestColor = tinycolor(colorList[i]);
                }
            }
            return bestColor;
        };


        // Big List of Colors
        // ------------------
        // <http://www.w3.org/TR/css3-color/#svg-color>
        var names = tinycolor.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        };

        // Make it easy to access colors via `hexNames[hex]`
        var hexNames = tinycolor.hexNames = flip(names);


        // Utilities
        // ---------

        // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
        function flip(o) {
            var flipped = { };
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    flipped[o[i]] = i;
                }
            }
            return flipped;
        }

        // Take input from [0, n] and return it as [0, 1]
        function bound01(n, max) {
            if (isOnePointZero(n)) { n = "100%"; }

            var processPercent = isPercentage(n);
            n = mathMin(max, mathMax(0, parseFloat(n)));

            // Automatically convert percentage into number
            if (processPercent) {
                n = parseInt(n * max, 10) / 100;
            }

            // Handle floating point rounding errors
            if ((math.abs(n - max) < 0.000001)) {
                return 1;
            }

            // Convert into [0, 1] range if it isn't already
            return (n % max) / parseFloat(max);
        }

        // Force a number between 0 and 1
        function clamp01(val) {
            return mathMin(1, mathMax(0, val));
        }

        // Parse an integer into hex
        function parseHex(val) {
            return parseInt(val, 16);
        }

        // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
        // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
        function isOnePointZero(n) {
            return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
        }

        // Check to see if string passed in is a percentage
        function isPercentage(n) {
            return typeof n === "string" && n.indexOf('%') != -1;
        }

        // Force a hex value to have 2 characters
        function pad2(c) {
            return c.length == 1 ? '0' + c : '' + c;
        }

        // Replace a decimal with it's percentage value
        function convertToPercentage(n) {
            if (n <= 1) {
                n = (n * 100) + "%";
            }

            return n;
        }

        var matchers = (function() {

            // <http://www.w3.org/TR/css3-values/#integers>
            var CSS_INTEGER = "[-\\+]?\\d+%?";

            // <http://www.w3.org/TR/css3-values/#number-value>
            var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

            // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
            var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

            // Actual matching.
            // Parentheses and commas are optional, but not required.
            // Whitespace can take the place of commas or opening paren
            var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
            var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

            return {
                rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
                rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
                hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
                hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
                hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            };
        })();

        // `stringInputToObject`
        // Permissive string parsing.  Take in a number of formats, and output an object
        // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
        function stringInputToObject(color) {

            color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
            var named = false;
            if (names[color]) {
                color = names[color];
                named = true;
            }
            else if (color == 'transparent') {
                return { r: 0, g: 0, b: 0, a: 0 };
            }

            // Try to match string input using regular expressions.
            // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
            // Just return an object and let the conversion functions handle that.
            // This way the result will be the same whether the tinycolor is initialized with string or object.
            var match;
            if ((match = matchers.rgb.exec(color))) {
                return { r: match[1], g: match[2], b: match[3] };
            }
            if ((match = matchers.rgba.exec(color))) {
                return { r: match[1], g: match[2], b: match[3], a: match[4] };
            }
            if ((match = matchers.hsl.exec(color))) {
                return { h: match[1], s: match[2], l: match[3] };
            }
            if ((match = matchers.hsla.exec(color))) {
                return { h: match[1], s: match[2], l: match[3], a: match[4] };
            }
            if ((match = matchers.hsv.exec(color))) {
                return { h: match[1], s: match[2], v: match[3] };
            }
            if ((match = matchers.hex6.exec(color))) {
                return {
                    r: parseHex(match[1]),
                    g: parseHex(match[2]),
                    b: parseHex(match[3]),
                    format: named ? "name" : "hex"
                };
            }
            if ((match = matchers.hex3.exec(color))) {
                return {
                    r: parseHex(match[1] + '' + match[1]),
                    g: parseHex(match[2] + '' + match[2]),
                    b: parseHex(match[3] + '' + match[3]),
                    format: named ? "name" : "hex"
                };
            }

            return false;
        }

        root.tinycolor = tinycolor;

    })(this);

    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });

})(window, jQuery);
;

/**
 * Check for require and D3
 */
if (typeof require === 'function') {
  var d3 = require('d3');
}

/**
 * Main JS for Simple Map (D3).
 *
 * Colors from http://colorbrewer2.org/
 */
function SimpleMapD3(o) {
  var smd = {};
  
  var defaults = {
    startManually: false,
    mapOffset: [0, 0],
    colorOn: false,
    colorSet: 'YlOrBr',
    colorScale: 'quantile',
    colorReverse: false,
    tooltipOn: true,
    tooltipContent: function(d) {
      var output = '';
      for (var p in d.properties) {
        if (d.properties.hasOwnProperty(p)) {
          output += p + ': ' + d.properties[p] + '<br />';
        }
      }
      return output;
    },
    projection: 'albersUsa',
    legendFormatter: d3.format(','),
    legendOn: true,
    legendTitle: 'Legend',
    legendOffset: [10, 10],
    styles: {},
    stylesHover: {},
    stylesBackground: {},
    stylesLegendContainer: {},
    stylesLegendTitleText: {},
    stylesLegendText: {},
    stylesLegendSwatch: {},
    stylesGraticule: {},
    stylesGlobe: {},
    canvasDragOn: false,
    mapDragOn: false,
    legendDragOn: false,
    graticuleOn: false
  };
  
  // Colorbrewer colors borrowed from Chroma.js
  // https://github.com/gka/chroma.js/blob/master/src/colors/colorbrewer.coffee
  // Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
  // Pennsylvania State University.
  // Licensed under the Apache License, Version 2.0
  smd.brewer = {
    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    // diverging
    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    // qualitative
    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
  };
  
  // Constructor
  smd.constructor = function(options) {
    // Make sure we have the right libraries
    if (typeof d3 === 'undefined') {
      throw new Error('Simple Map requires D3.');
    }
    
    // Extend defaults
    var extended = defaults;
    for (var prop in options) {
      if (options.hasOwnProperty(prop)) {
        extended[prop] = options[prop];
      }
    }
    smd.options = extended;
    
    // Make colorset
    if (typeof smd.options.colorSet == 'string' && 
      Object.prototype.toString.call(smd.brewer[smd.options.colorSet]) == '[object Array]') {
      smd.options.colorSet = smd.brewer[smd.options.colorSet];
    }
    else if (Object.prototype.toString.call(smd.options.colorSet) != '[object Array]') {
      throw new Error('Simple Map requires a valid colorSet option.');
    }
    if (smd.options.colorReverse === true) {
      smd.options.colorSet = smd.options.colorSet.reverse();
    }
    
    // Create event dispatcher using D3
    smd.events = d3.dispatch('dataLoaded', 'rendered');
    
    // Start manually or automatically
    if (smd.options.startManually !== true) {
      smd.start();
    }
    return smd;
  };
  
  // Start function
  smd.start = function() {
    // Check if data was given, or if data source was given
    if (smd.options.data === Object(smd.options.data)) {
      smd.data = smd.options.data;
      smd.loadData(smd.data);
    }
    else if (Object.prototype.toString.call(smd.options.datasource) == '[object String]') {
      smd.getData();
    }
    
    return smd;
  };
  
  // Get data
  smd.getData = function() {
    d3.json(smd.options.datasource, function(data) {
      smd.data = data;
      smd.loadData();
    });
    
    return smd;
  };
  
  // Handle data once loaded
  smd.loadData = function(data) {
    if (smd.data === void 0) {
      smd.data = data;
    }
    
    smd.topo();
    
    // Call data loaded event
    smd.events.dataLoaded(smd);
    
    // Render everything
    smd
      .drawCanvas()
      .projection()
      .makeColorRange()
      .drawGlobe()
      .drawGraticule()
      .drawMap()
      .fit()
      .drawLegend()
      .drag();
    
    // Call rendered event
    smd.events.rendered(smd);
    
    return smd;
  };
  
  // Handle topojson
  smd.topo = function() {
    var o = smd.options.topojsonObject;
    var obj;
    
    if (smd.data.type.toLowerCase() === 'topology' && 
      typeof topojson != 'undefined') {
      // Use first object found if object not defined
      if (typeof o == 'undefined') {
        for (o in smd.data.objects) {
          if (smd.data.objects.hasOwnProperty(o)) {
            obj = smd.data.objects[o];
            break;
          }
        }
      }
      smd.data = topojson.feature(smd.data, smd.data.objects[o]);
    }
    
    return smd;
  };
  
  // Load up canvas, set size to container
  smd.drawCanvas = function() {
    var mapOffset = smd.options.mapOffset;
  
    smd.container = d3.select(smd.options.container);
    smd.width = parseFloat(smd.container.style('width'));
    smd.height = parseFloat(smd.container.style('height'));
    smd.canvas = smd.container.append('svg')
      .attr('width', smd.width)
      .attr('height', smd.height)
      .attr('class', 'smd-canvas')
      .classed('smd-draggable', smd.options.canvasDragOn)
      .classed('smd-tooltipped', smd.options.tooltipOn)
      .data([{ x: 0, y: 0 }]);
      
    smd.background = smd.canvas.append('rect')
      .attr('width', smd.width)
      .attr('height', smd.height)
      .classed('smd-background', true)
      .style(smd.options.stylesBackground);
      
    smd.draggableMapGroup = smd.canvas.append('g')
      .attr('class', 'smd-draggable-map-group')
      .data([{ x: mapOffset[0] - 1, y: mapOffset[1] - 1 }])
      .attr('transform', 'translate(' + mapOffset + ')');
      
    smd.featureGroup = smd.draggableMapGroup.append('g')
      .attr('class', 'smd-feature-group');
      
    // Add tooltip
    if (smd.options.tooltipOn === true) {
      smd.container.classed('simple-map-d3-tooltip-container', true);
      smd.container.append('div').classed('simple-map-d3-tooltip', true);
    }
    
    return smd;
  };
  
  // Create projection
  smd.projection = function() {
    var projFunc = smd.options.projection;
  
    if (typeof projFunc == 'undefined' ||
      typeof d3.geo[projFunc] != 'function') {
      projFunc = 'albersUsa';
    }
    
    smd.centroid = d3.geo.centroid(smd.data);
    smd.projection = d3.geo[projFunc]()
      .scale(1000)
      .translate([smd.width / 2, smd.height / 2]);
    
    // Center if available
    if (typeof smd.projection.center === 'function') {
      smd.projection.center(smd.centroid);
    }
    
    // Rotate if needed
    if (typeof smd.options.rotation != 'undefined' &&
      smd.options.rotation.length > 0 &&
      typeof smd.projection.rotate === 'function') {
      smd.projection.rotate(smd.options.rotation);
    }
  
    smd.projPath = d3.geo.path()
      .projection(smd.projection);
      
    return smd;
  };
  
  // Fit view
  smd.fit = function() {
    var b = smd.bounds = smd.projPath.bounds(smd.data);

    smd.featureGroup.attr('transform',
      'translate(' + smd.projection.translate() + ') ' + 
      'scale(' + 0.95 / Math.max((b[1][0] - b[0][0]) / smd.width, (b[1][1] - b[0][1]) / smd.height) + ') ' +
      'translate(' + -(b[1][0] + b[0][0]) / 2 + ',' + -(b[1][1] + b[0][1]) / 2 + ')');
      
    return smd;
  };
  
  // Make color range
  smd.makeColorRange = function() {
    var scaleFunc = smd.options.colorScale;
    var d, domain;
    smd.valuesSet = [];
    
    // Make color range
    if (smd.options.colorOn !== true) {
      return smd;
    }
    
    // Get values for range
    for (d = 0; d < smd.data.features.length; d++) {
      smd.valuesSet.push(parseFloat(smd.data.features[d].properties[smd.options.colorProperty]));
    }
    smd.valuesSet.sort(function(a, b) { return a - b; });
  
    // Determine range function to use
    if (typeof scaleFunc != 'function') {
      scaleFunc = d3.scale[scaleFunc];
    } 
    // Make range with appropriate values
    smd.colorRange = scaleFunc()
      .domain(smd.valuesSet)
      .range(smd.options.colorSet);
    
    // Clamp if can
    if (typeof smd.colorRange.clamp == 'function') {
      smd.colorRange.clamp(true);
    }
    return smd;
  };
  
  // Dragging functinoality
  smd.dragging = false;
  smd.drag = function() {
    smd.dragCanvas = d3.behavior.drag()
      .on('drag', function(d) {
        if (smd.options.canvasDragOn !== true) {
          return true;
        }
        smd.dragging = true;
        smd.canvas.classed('dragging', true);
        d3.event.sourceEvent.stopPropagation();
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        
        smd.draggableMapGroup.attr('transform', 'translate(' + [d.x, d.y] + ')');
      })
      .on('dragend', function() {
        smd.canvas.classed('dragging', false);
        smd.dragging = false;
      });
    
    // Simple drag
    smd.dragSimple = d3.behavior.drag()
      .on('drag', function(d,i) {
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        d3.select(this)
          .classed('dragging', true)
          .attr('transform', function(d, i) {
            return 'translate(' + [ d.x, d.y ] + ')';
          });
      })
      .on('dragend', function(d) {
        d3.select(this).classed('dragging', false);
      });
    
    // Whole canvas drag
    if (smd.options.canvasDragOn === true) {
      smd.canvas.call(smd.dragCanvas);
    }

    // Jus map drag
    if (smd.options.mapDragOn === true) {
      smd.draggableMapGroup
        .classed('smd-draggable', true)
        .call(smd.dragSimple);
    }

    // Legend drag
    if (smd.options.legendDragOn === true && smd.legendGroup) {
      smd.legendGroup
        .classed('smd-draggable', true)
        .call(smd.dragSimple);
    }
    
    return smd;
  };
  
  // Render graticule
  smd.drawGraticule = function() {
    if (smd.options.graticuleOn !== true) {
      return smd;
    }
    
    smd.graticule = d3.geo.graticule();
    smd.featureGroup.append('path')
      .datum(smd.graticule)
      .attr('d', smd.projPath)
      .attr('class', 'smd-graticule')
      .style(smd.options.stylesGraticule);
    
    return smd;
  };
  
  // Render globe
  smd.drawGlobe = function() {
    if (smd.options.globeOn !== true) {
      return smd;
    }
    
    smd.globe = smd.featureGroup.append('path')
      .datum({ type: 'Sphere' })
      .attr('class', 'smd-globe')
      .attr('d', smd.projPath)
      .style(smd.options.stylesGlobe);
    
    return smd;
  };
  
  // Make legend
  smd.drawLegend = function() {
    var qs;
    var formatter = smd.options.legendFormatter || d3.format(',');
    var unit = 10;
    var width = smd.options.legendWidth || (smd.width / 5);
    var scale = smd.options.legendScale || 1;
    var min = d3.min(smd.valuesSet);
    var max = d3.max(smd.valuesSet);
    var offset = smd.options.legendOffset;
    var legendSwatches = [];
    var c;
    
    // Make sure legend is on
    if (smd.options.legendOn !== true || typeof smd.colorRange == 'undefined') {
      return smd;
    }
    
    // Specific to scale type, unfortunately
    if (smd.options.colorScale === 'quantile') {
      legendSwatches = smd.colorRange.quantiles();
      legendSwatches[0] = min;
    }
    
    // Quantize
    if (smd.options.colorScale === 'quantize') {
      for (c = 0; c < smd.options.colorSet.length; c++) {
        legendSwatches.push(smd.colorRange.invertExtent(smd.options.colorSet[c])[0]);
      }
    }
    
    // Ensure we have something to make a legend with
    if (legendSwatches.length === 0) {
      return smd;
    }
    
    // Specific to scale type, unfortunately
    if (legendSwatches && legendSwatches.length > 0) {
      // Make group for legend objects
      smd.legendGroup = smd.canvas.append('g');
      
      // Make container and label for legend
      smd.legendGroup.append('rect')
        .attr('class', 'smd-legend-container')
        .attr('width', width)
        .attr('height', legendSwatches.length * (unit * 2) + (unit * 3))
        .attr('x', 0)
        .attr('y', 0)
        .style(smd.options.stylesLegendContainer);
      smd.legendGroup.append('text')
        .attr('class', 'smd-legend-label')
        .attr('font-size', unit)
        .attr('x', (unit * 1))
        .attr('y', (unit * 2))
        .text(smd.options.legendTitle)
        .style(smd.options.stylesLegendTitleText);
      
      // Add colors swatches
      smd.legendGroup
        .selectAll('rect.smd-legend-swatch')
          .data(legendSwatches)
        .enter().append('rect')
          .attr('class', 'smd-legend-swatch')
          .attr('width', unit)
          .attr('height', unit)
          .attr('x', (unit * 1))
          .attr('y', function(d, i) { return (i * unit * 2) + (unit * 3); })
          .style(smd.options.stylesLegendSwatch)
          .style('fill', function(d, i) { return smd.colorRange(d); });
          
      // Add text label
      smd.legendGroup
        .selectAll('text.smd-legend-amount')
          .data(legendSwatches)
        .enter().append('text')
          .attr('class', 'smd-legend-amount')
          .attr('font-size', unit)
          .attr('x', (unit * 3))
          .attr('y', function(d, i) { return (i * unit * 2) + (unit * 4 - 1); })
          .text(function(d, i) { return '>= ' + formatter(d); })
          .style(smd.options.stylesLegendText);
      
      // Scale and translate from offset
      smd.legendGroup
        .attr('transform', 'scale(' + scale + ')')
        .data([{ x: offset[0] - 1, y: offset[1] - 1 }])
        .attr('transform', 'translate(' + offset + ')');
    }
  
    return smd;
  };
  
  // Render
  smd.drawMap = function() {
    // Render paths
    smd.featureGroup
      .selectAll('path')
        .data(smd.data.features)
      .enter().append('path')
        .attr('d', smd.projPath)
        .attr('class', 'smd-path')
        .style(smd.options.styles)
        .attr('fill', function(d) {
          if (smd.options.colorOn === false) {
            return smd.options.styles.fill;
          }
          else {
            return smd.colorRange(d.properties[smd.options.colorProperty]);
          }
        })
        .on('mouseover', function(d) {
          // Tooltip
          if (smd.options.tooltipOn === true) {
            smd.container.select('.simple-map-d3-tooltip')
              .style('display', 'block')
              .html(smd.options.tooltipContent(d));
          }
          
          // Styles
          d3.select(this).style(smd.options.stylesHover);
        })
        .on('mouseout', function(d) {
          // Tooltip
          if (smd.options.tooltipOn === true) {
            smd.container.select('.simple-map-d3-tooltip')
              .style('display', 'none');
          }
          
          // Styles
          d3.select(this).style(smd.options.styles);
        });
        
    return smd;
  };
  
  // Construct and return our map object.
  smd.constructor(o);
  return smd;
}

// NodeJS support
if (typeof module !== 'undefined') {
  module.exports = SimpleMapD3;
}