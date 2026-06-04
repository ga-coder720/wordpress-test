window.yaContextCb=window.yaContextCb||[];
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}({6:function(e,t,r){"use strict";r.r(t);r(7)},7:function(e,t){}});
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
window.wp_data={"ajax_url":"https:\/\/betru.ru\/wp-admin\/admin-ajax.php","theme_path":"\/wp-content\/themes\/betru_new\/"};var PC=false;var TABLET=false;var MOBILE_MID=false;var MOBILE_MID_1=false;var MOBILE_MID_2=false;var MOBILE_MIN=false;var MOBILE_MIN_REVIEW=false;if(window.matchMedia('(min-width: 992px)').matches){PC=true;}
if(window.matchMedia('(max-width: 991px)').matches){TABLET=true;}
if(window.matchMedia('(max-width: 830px)').matches){MOBILE_MID=true;}
if(window.matchMedia('(max-width:768px)').matches){MOBILE_MID_1=true;}
if(window.matchMedia('(max-width: 650px)').matches){MOBILE_MID_2=true;}
if(window.matchMedia('(max-width: 576px)').matches){MOBILE_MIN=true;}
if(window.matchMedia('(max-width: 541px)').matches){MOBILE_MIN_REVIEW=true;};
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(27468879,'init',{webvisor:true,clickmap:true,accurateTrackBounce:true,trackLinks:true});;
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','G-THSEN0HYG9');;
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var t,e;if(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}()){var o=EventTarget.prototype.addEventListener;t=o,e={passive:!0,capture:!1},EventTarget.prototype.addEventListener=function(o,r,n){var i="object"===_typeof(n),p=i?n.capture:n;n=i?n:{},"touchstart"!=o&&"scroll"!=o&&"wheel"!=o||(n.passive=void 0!==n.passive?n.passive:e.passive),n.capture=void 0!==p?p:e.capture,t.call(this,o,r,n)}}}();
(function($){"use strict";$(document).ready(function(){$(document).on("click",".promo-widget-chat-trigger",function(e){e.preventDefault();const mainElement=document.querySelector(".main__RwwjU");if(mainElement){mainElement.click();return false;}
if(typeof jivo_api!=="undefined"&&jivo_api.open){jivo_api.open();return false;}
console.warn("Promo Widget: Jivo чат не найден или не загружен");return false;});});})(jQuery);
var RocketPreloadLinksConfig={"excludeUris":"\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index.php\/)?(.*)wp-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm","siteUrl":"https:\/\/betru.ru","onHoverDelay":"100","rateThrottle":"3"};
(function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();}());
let captcha_human=false;let checkAddScriptCaptcha=false;function getCookie(name){var matches=document.cookie.match(new RegExp("(?:^|; )"+
name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return matches?decodeURIComponent(matches[1]):undefined;}
jQuery(document).ready(function(){let windowWidth=jQuery(window).width();let doCookie=true;var toTop=jQuery(".go-to-top");jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>500){toTop.addClass("show");if(doCookie){let cookie_agree=getCookie("COOKIES_AGREE");if(cookie_agree==undefined){let agree_cookie_block='<div id="public_cookies"><p><a href="/">Betru.ru</a> использует файлы cookie. Оставаясь на сайте, вы соглашаетесь на их использования согласно нашим <a href="/politika-ispolzovaniya-cookies/" target="_blank">правилам использования</a>.</p><a href="#" class="cookies_ok">OK</a></div>';jQuery("footer").after(agree_cookie_block);var cookies_agree=jQuery(".cookies_ok");cookies_agree.on("click",function(){jQuery("#public_cookies").css("display","none");document.cookie="COOKIES_AGREE=yes;  path=/; max-age=2592000";return false;});}
doCookie=false;}}else{toTop.removeClass("show");}});toTop.on("click",function(){jQuery("body,html").animate({scrollTop:0},1000);return false;});var serachButton=jQuery("header .site-search .search-icon");var bonusButton=jQuery("header .best-bonus");serachButton.on("click",function(){if(windowWidth<=991&&windowWidth>450){if(jQuery(this).parent().hasClass("opened")===true){var formWidth="0px";}else{var formWidth=(windowWidth*67.6)/100-120+"px";}}else if(windowWidth<=450){if(jQuery(this).parent().hasClass("opened")===true){var formWidth="0px";}else{var formWidth=this.getBoundingClientRect().right-64+"px";}}else{var formWidth="";}
jQuery(this).parent().toggleClass("opened").find("form").css("width",formWidth);return false;});bonusButton.on("click",function(){jQuery(this).next(".best-bonus-container").slideToggle();return false;});if(windowWidth>1200){jQuery(".site-header .site-navigation").find(".menu-item-has-children").hover(function(){jQuery(this).addClass("menu-item-hover");},function(){jQuery(this).removeClass("menu-item-hover");});}else{$(".site-navigation ul.menu .menu-item-has-children > a").on("click",function(){$(this).parent().toggleClass("menu-item-open");return false;});}
checkWidth();if(windowWidth<=500){var footerWidgetTitle=jQuery(".footer-top__sidebar .side-title");footerWidgetTitle.on("click",function(){jQuery(this).toggleClass("opened").next("div").slideToggle();return false;});}
jQuery(".popup__tab-row button").on("click",function(){jQuery(".popup__tab-row button").toggleClass("active");jQuery(".popup__content").toggleClass("active");});jQuery(".popup").on("click",function(evt){if(evt.target==this){jQuery(".popup").removeClass("active");jQuery("body").removeClass("noscroll");}});jQuery(".open-window").on("click",function(evt){if(checkAddScriptCaptcha==false){checkAddScriptCaptcha=true;let scriptCaptcha="<script src='https://www.google.com/recaptcha/api.js'></script>";$("head").append(scriptCaptcha);}
evt.preventDefault();jQuery("body").addClass("noscroll");jQuery(".popup__tab-row button").removeClass("active");jQuery(".popup__content").removeClass("active");var thisClick=jQuery(this);jQuery(".popup__content").each(function(index,item){if(thisClick.data("type")===jQuery(item).data("type")){jQuery(item).addClass("active");}});jQuery(".popup__tab-row button").each(function(index,item){if(thisClick.data("type")===jQuery(item).data("type")){jQuery(item).addClass("active");}});jQuery(".popup").addClass("active");});jQuery("#registration").submit(async function(event){event.preventDefault();var user_data=jQuery(this).serializeArray();var user_action="user_registration";captcha_human=await processCaptcha(user_data);if(captcha_human===true){user_auth(user_data,user_action,"");}else{falseCheckHuman();}});jQuery("#authorization").submit(async function(event){event.preventDefault();var user_data=jQuery(this).serializeArray();var user_action="user_authorization";var security=jQuery(this).find("#security").val();captcha_human=await processCaptcha(user_data);if(captcha_human===true){user_auth(user_data,user_action,security);}else{falseCheckHuman();}});});function open_menu($this){jQuery($this).toggleClass("close");jQuery(".site-navigation").toggleClass("open-menu");jQuery("body").addClass("noscroll");}
jQuery(window).resize(checkWidth);let load_bonuses_carousel_check=false;window.addEventListener("scroll",load_bonuses_carousel);window.addEventListener("click",load_bonuses_carousel);window.addEventListener("mousemove",load_bonuses_carousel);function load_bonuses_carousel(){if(!load_bonuses_carousel_check){jQuery(".bk-content__bonuses.ajax-bonuses").each(function(){let bonus_block=jQuery(this);let marker=bonus_block.data("marker");let title=bonus_block.data("title");let bk_id=bonus_block.data("bk_id");let count=bonus_block.data("count");let excl_post=bonus_block.data("excl_post");setTimeout(function(){jQuery.ajax({type:"POST",complete:function(){bonus_block.removeClass("loading");},url:window.wp_data.ajax_url,data:{action:"load_bonuses_carousel",bk_id:bk_id,marker:marker,title:title,count:count,excl_post:excl_post,},success:function(data){bonus_block.html(data);bonus_block.find(".content-block.content-block-lite").each(function(){var $p=jQuery(this);var classes=($p.attr("class")||"").split(/\s+/);classes.forEach(function(c){if(/^\d+$/.test(c)){$p.removeClass(c);}});});var $containers=bonus_block.find(".content-block-carousel");var $activeBrands=$containers.filter(".brand-bonuses--active");$activeBrands.each(function(){var $c=jQuery(this);if($c.hasClass("slick-initialized")&&$c.slick){$c.slick("unslick");}});var $toInit=$containers.not($activeBrands);var n_items=$toInit.children(".content-block-carousel__item").length;if(n_items>2){$toInit.not(".slick-initialized").slick({infinite:false,slidesToShow:3,slidesToScroll:3,arrows:true,dots:false,prevArrow:bonus_block.find(".arrows-nav__arrow_prev"),nextArrow:bonus_block.find(".arrows-nav__arrow_next"),responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:true,},},],});}},});},500);});}
load_bonuses_carousel_check=true;window.removeEventListener("scroll",load_bonuses_carousel);window.removeEventListener("click",load_bonuses_carousel);window.removeEventListener("mousemove",load_bonuses_carousel);}
function checkWidth(){var windowHeight=jQuery(window).height();var bonusButton=jQuery(".site-header .best-bonus");var bonusContainer=jQuery(".site-header .best-bonus-container");var mobEnter=jQuery(".site-header .site-user-block .mob-enter");if(TABLET){var top_mobile_widgets=jQuery(".top-mobile-widgets");var comp_widget=jQuery(".comp-link").parent().parent();if(comp_widget.length){top_mobile_widgets.append(comp_widget);}}}
function user_auth(user_data,user_action,security){var resultBlock=jQuery(".popup__result");var p_button=jQuery(".popup__tab-row button");var p_button_enter=jQuery(".popup__tab-row button.enter");var p_content=jQuery(".popup__tab-block .popup__content");var p_content_enter=jQuery(".popup__tab-block .popup__content.enter");jQuery.ajax({type:"POST",beforeSend:function(){},complete:function(){},url:window.wp_data.ajax_url,data:{action:"user_auth_reg",user_action:user_action,user_data:user_data,security:security,},dataType:"json",success:function(data){if(data.result=="success"){var emoj="&#128578;";}else{var emoj="&#128577;";}
resultBlock.addClass("show").html("<span>"+emoj+"</span><br><span>"+data.message+"</span>");setTimeout(function(){if(data.type=="user_registration"){p_button.removeClass("active");p_content.removeClass("active");p_button_enter.addClass("active");p_content_enter.addClass("active");}
if(data.type=="user_authorization"&&data.result=="success"){location.reload();}
resultBlock.removeClass("show");},1000);},});}
async function processCaptcha(user_data){var result=false;let prom=new Promise(function(resolve,reject){jQuery.ajax({type:"POST",url:window.wp_data.ajax_url,data:{action:"process_captcha",user_data:user_data,},dataType:"json",success:function(captcha){resolve(captcha);},});});let captcha=await prom;return captcha["success"];}
function falseCheckHuman(){let resultBlock=jQuery(".popup__result");resultBlock.addClass("show").html("<span>Вы не прошли проверку, пожалуйста обратитесь к администратору!</span>");setTimeout(function(){resultBlock.removeClass("show");},5000);}
jQuery(window).on("load",function(){jQuery("head").append('<link rel="stylesheet" href="/wp-content/themes/betru_new/css/fonts.css" />');});function send_goal(b_goal){ym(27468879,"reachGoal",b_goal);};
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;
      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
document.addEventListener("DOMContentLoaded",()=>{const headerBackground=document.querySelector(".header__bg-right");const headerContainer=document.querySelector(".header .site-box");const headerRightNav=document.querySelector(".header__right");let headerContainerMarginValue=parseInt(window.getComputedStyle(headerContainer).marginRight)+
headerRightNav.clientWidth/2;headerBackground.style.width=headerContainerMarginValue+"px";window.addEventListener("resize",()=>{const headerBackground=document.querySelector(".header__bg-right");const headerContainer=document.querySelector(".header .site-box");const headerRightNav=document.querySelector(".header__right");let headerContainerMarginValue=parseInt(window.getComputedStyle(headerContainer).marginRight)+
headerRightNav.clientWidth/2;headerBackground.style.width=headerContainerMarginValue+"px";});const headerMenu=document.querySelector(".header ul.menu ");const headerMenuFirstRowItems=document.querySelectorAll(".header ul.menu > li:has(.sub-menu)");headerMenuFirstRowItems.forEach((firstRow,index)=>{headerMenu.insertAdjacentHTML("beforeend",`<div class="sub-menu-main" data-parent="${
        firstRow.className.split(" ")[firstRow.className.split(" ").length - 1]
      }">
            <div class="sub-menu-main-item __first"></div>
            <div class="sub-menu-main-item __second"></div>
            <div class="sub-menu-main-item __third"></div>
         </div>`);const firstSubMenu=firstRow.querySelector(".sub-menu");const firstSubMenuToDisplay=firstSubMenu.cloneNode(true);firstSubMenuToDisplay.querySelectorAll(".sub-menu").forEach((m)=>m.remove());headerMenu.querySelectorAll(".sub-menu-main-item.__first")
[index].insertAdjacentHTML("beforeend",firstSubMenuToDisplay.outerHTML);const secondSubMenuItems=firstSubMenu.querySelectorAll("&>li:has(.sub-menu)");secondSubMenuItems.forEach((secondMenu)=>{const cloneSecondMenu=secondMenu.querySelector(".sub-menu");cloneSecondMenu.dataset.parent=secondMenu.className.split(" ")[secondMenu.className.split(" ").length-1];headerMenu.querySelectorAll(".sub-menu-main-item.__second")
[index].insertAdjacentHTML("beforeend",cloneSecondMenu.outerHTML);const thirdSubMenuItems=secondMenu.querySelectorAll(".sub-menu > li:has(.sub-menu)");thirdSubMenuItems.forEach((thirdMenu)=>{const cloneThirdMenu=thirdMenu.querySelector(".sub-menu");cloneThirdMenu.dataset.parent=thirdMenu.className.split(" ")[thirdMenu.className.split(" ").length-1];headerMenu.querySelectorAll(".sub-menu-main-item.__third")
[index].insertAdjacentHTML("beforeend",cloneThirdMenu.outerHTML);});});});const subMenuMains=document.querySelectorAll(".sub-menu-main");const headerLinks=headerMenu.querySelectorAll("&>li");function getCoords(elem){var box=elem.getBoundingClientRect();var body=document.body;var docEl=document.documentElement;var scrollTop=window.pageYOffset||docEl.scrollTop||body.scrollTop;var scrollLeft=window.pageXOffset||docEl.scrollLeft||body.scrollLeft;var clientTop=docEl.clientTop||body.clientTop||0;var clientLeft=docEl.clientLeft||body.clientLeft||0;var top=box.top+scrollTop-clientTop;var left=box.left+scrollLeft-clientLeft;return{top:Math.round(top),left:Math.round(left),};}
headerLinks.forEach((link)=>{const linkId=link.className.split(" ")[link.className.split(" ").length-1];let menuWidth=0;if(document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`))
if(document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`).querySelector(".sub-menu-main-item.__second .sub-menu")&&document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`).querySelector(".sub-menu-main-item.__third .sub-menu")){menuWidth=880;}else if(document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`).querySelector(".sub-menu-main-item.__second .sub-menu")){menuWidth=550;}else{menuWidth=328;}
let borderTouchWidth=0;const rightOffset=window.innerWidth-(getCoords(link).left+menuWidth-100+20);if(rightOffset<0){borderTouchWidth=-rightOffset;}
const leftOffset=link.offsetLeft-100-borderTouchWidth;if(document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`))
document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`).style.left=leftOffset+"px";link.addEventListener("mouseover",(e)=>{const linkId=link.className.split(" ")[link.className.split(" ").length-1];if(document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`))
document.querySelector(`.sub-menu-main[data-parent="${linkId}"]`).classList.add("shown");});link.addEventListener("mouseout",(e)=>{subMenuMains.forEach((i)=>i.classList.remove("shown"));subMenuMains.forEach((menu)=>{const menuFirstLis=menu.querySelectorAll(".sub-menu-main-item.__first  .sub-menu > li");const menuFirstMenus=menu.querySelectorAll(".sub-menu-main-item.__first .sub-menu");const menuSecondMenus=menu.querySelectorAll(".sub-menu-main-item.__second .sub-menu");const menuSecondLis=menu.querySelectorAll(".sub-menu-main-item.__second .sub-menu > li");const menuThirdMenus=menu.querySelectorAll(".sub-menu-main-item.__third .sub-menu");const menuThirdLis=menu.querySelectorAll(".sub-menu-main-item.__third  .sub-menu > li");menuFirstLis.forEach((i)=>i.classList.remove("clicked"));menuSecondLis.forEach((i)=>i.classList.remove("clicked"));menuThirdLis.forEach((i)=>i.classList.remove("clicked"));menuFirstMenus.forEach((i)=>i.classList.remove("shown"));menuSecondMenus.forEach((i)=>i.classList.remove("shown"));menuThirdMenus.forEach((i)=>i.classList.remove("shown"));});});});subMenuMains.forEach((menu)=>{menu.addEventListener("mouseenter",(e)=>{e.preventDefault();menu.classList.add("shown");});menu.addEventListener("mouseleave",(e)=>{e.preventDefault();menu.classList.remove("shown");});const menuFirstLis=menu.querySelectorAll(".sub-menu-main-item.__first  .sub-menu > li");const menuSecondMenus=menu.querySelectorAll(".sub-menu-main-item.__second .sub-menu");const menuSecondLis=menu.querySelectorAll(".sub-menu-main-item.__second .sub-menu > li");const menuThirdMenus=menu.querySelectorAll(".sub-menu-main-item.__third .sub-menu");const menuThirdLis=menu.querySelectorAll(".sub-menu-main-item.__third  .sub-menu > li");menuFirstLis.forEach((li)=>{li.addEventListener("mouseover",(e)=>{if(li.querySelector(".sub-count")){e.preventDefault();const liID=li.className.split(" ")[li.className.split(" ").length-1];menuFirstLis.forEach((i)=>i.classList.remove("clicked"));menuSecondLis.forEach((i)=>i.classList.remove("clicked"));li.classList.add("clicked");const newLiID=li.className.split(" ")[li.className.split(" ").length-2];menuSecondMenus.forEach((i)=>{i.classList.remove("shown");if(i.dataset.parent==newLiID)i.classList.add("shown");});menuThirdMenus.forEach((i)=>{i.classList.remove("shown");});}});});menuSecondLis.forEach((li)=>{li.addEventListener("mouseover",(e)=>{if(li.querySelector(".sub-count")){e.preventDefault();const liID=li.className.split(" ")[li.className.split(" ").length-1];menuSecondLis.forEach((i)=>i.classList.remove("clicked"));li.classList.add("clicked");const newLiID=li.className.split(" ")[li.className.split(" ").length-2];menuThirdMenus.forEach((i)=>{i.classList.remove("shown");if(i.dataset.parent==newLiID)i.classList.add("shown");});}});});});const addmenuBtn=document.querySelector(".addmenu-btn");const addmenuList=document.querySelector(".addmenu ul.menu");if(addmenuBtn&&addmenuList){addmenuBtn.addEventListener("click",()=>{addmenuBtn.classList.toggle("active");addmenuList.classList.toggle("open");});}
const burger=document.querySelector(".header__burger-wrapper");const mobileMenu=document.querySelector(".header__mobile");if(burger&&mobileMenu){const headerEl=document.querySelector(".header");const headerHeight=headerEl?headerEl.clientHeight:0;const wpAdminBar=document.querySelector("#wpadminbar");mobileMenu.style.top=headerHeight+(wpAdminBar?wpAdminBar.clientHeight:0)+"px";mobileMenu.style.maxHeight=`calc(100vh - ${headerHeight}px)`;const wrapper=mobileMenu.querySelector(".header__wrapper");if(wrapper){wrapper.style.maxHeight=`calc(100vh - ${headerHeight}px - 100px)`;}
const mobileMenuItems=document.querySelectorAll(".header__mobile ul.menu li:has(.sub-menu)");mobileMenuItems.forEach((m)=>{const subCount=m.querySelector(".sub-count");if(subCount){subCount.addEventListener("click",(e)=>{e.preventDefault();m.classList.toggle("clicked");});}});burger.addEventListener("click",()=>{burger.classList.toggle("active");document.querySelector("body").classList.toggle("lock");mobileMenu.classList.toggle("active");});const mobileIcons=document.querySelectorAll(".header__mobile-icons img");document.querySelectorAll(".header__mobile ul.menu > li > a").forEach((mobLi,index)=>{if(mobileIcons[index]){mobLi.insertAdjacentHTML("afterbegin",`<div class="mobile-header-icon">${mobileIcons[index].outerHTML}</div>`);}});}
const mobileIconsContainer=document.querySelector(".header__mobile-icons");if(mobileIconsContainer){mobileIconsContainer.remove();}
console.log("header js loaded");});
jQuery(document).ready(function(){var filterBlock=jQuery(".filter-block");if(TABLET===true){if(jQuery(".filter-block-mobile").length){jQuery(".filter-block-mobile").after(filterBlock);}}
if(MOBILE_MID_2===true){filterBlock.find(".content-block__title").on("click",function(){jQuery(this).toggleClass("opened").parent().find(".category-list").slideToggle(function(){jQuery(this).toggleClass("show");});});}else{var catBlockHeight=filterBlock.height()+25;filterBlock.css("height",catBlockHeight+"px");}});
jQuery(document).ready(function(){var articlesBlock=jQuery(".articles-block");var link=articlesBlock.data("link");var get_data=articlesBlock.data("get");var pagination=articlesBlock.data("pagi");if(!get_data){var get_data="";}
jQuery("body").on("click",".loadmore",function(){var termID=jQuery(this).data("term_id");var postType=jQuery(this).data("post_type");var template=jQuery(this).data("template");var paged=jQuery(this).data("page");var pp=jQuery(this).data("per_page");var topPosts=jQuery(this).data("top_posts");var maxPages=jQuery(this).data("max_pages");var args=jQuery(this).data("args");var search=jQuery(this).data("search");var sport_id=jQuery(this).data("sport_id");loadPosts(termID,postType,template,paged,pp,topPosts,link,get_data,args,search,pagination,sport_id,maxPages);if(pagination===false||template=="author-synopsys"||template=="author-articles"||template=="tennis-rank"||template=="tournament"||template=="bookmakers"){}else{loadPagination(paged,maxPages,link);}
return false;});function loadPagination(paged,maxPages,link){var oldNav=jQuery(".nav-links");jQuery.ajax({type:"POST",complete:function(){oldNav.remove();},url:window.wp_data.ajax_url,data:{action:"load_pagination",paged:paged,maxPages:maxPages,link:link,},success:function(data){articlesBlock.parent().after(data);},});}
function loadPosts(termID,postType,template,paged,pp,topPosts,link,get_data,args,search,pagination,sport_id,maxPages){var button=jQuery(".loadmore");var ajaxBlock=button.parent();jQuery.ajax({type:"POST",beforeSend:function(){button.text("Грузим...");},complete:function(){button.remove();},url:window.wp_data.ajax_url,data:{action:"show_more_posts",paged:paged,termID:termID,postType:postType,template:template,topPosts:topPosts,args:args,pp:pp,search:search,max_pages:maxPages,sport_id:sport_id,},success:function(data){ajaxBlock.append(data);if(pagination===false||template=="author-synopsys"||template=="author-articles"||template=="tennis-rank"||template=="tournament"||template=="bookmakers"){}else{if(history.pushState){history.pushState("","",link+"page/"+paged+"/"+get_data);}else{document.location.href="/";}}},});}});
function copyClipboard(link){var promocode=jQuery(link).data("code");if(navigator.clipboard){navigator.clipboard.writeText(promocode).then(()=>{jQuery(link).addClass("copied").text("Скопировано!");if(jQuery(link).siblings(".promo-buttons__promocode")){jQuery(link).siblings(".promo-buttons__promocode").addClass("copied-promo");}}).catch((err)=>{console.log("Something went wrong",err);});}else{alert("Ваш браузер устарел! Пожалуйста, обновите до актуальной версии.");}
return false;}
function copyBonusPromocode(link){var promocode=jQuery(link).data("code");if(navigator.clipboard){navigator.clipboard.writeText(promocode).then(()=>{const text=jQuery(link).addClass("copied").prev().attr('data-copied');jQuery(link).prev().text(text);}).catch((err)=>{console.log("Something went wrong",err);});}else{alert("Ваш браузер устарел! Пожалуйста, обновите до актуальной версии.");}
return false;};

!(function (i) {
  if ("function" == typeof define && define.amd) define(["jquery"], i);
  else if ("object" == typeof module && module.exports) {
    var t = require("jquery");
    i(t), (module.exports = t);
  } else i(jQuery);
})(function (i) {
  function t(i) {
    this.init(i);
  }
  (t.prototype = {
    value: 0,
    size: 100,
    startAngle: -Math.PI,
    thickness: "auto",
    fill: { gradient: ["#3aeabb", "#fdd250"] },
    emptyFill: "rgba(0, 0, 0, .1)",
    animation: { duration: 1200, easing: "circleProgressEasing" },
    animationStartValue: 0,
    reverse: !1,
    lineCap: "butt",
    insertMode: "prepend",
    constructor: t,
    el: null,
    canvas: null,
    ctx: null,
    radius: 0,
    arcFill: null,
    lastFrameValue: 0,
    init: function (t) {
      i.extend(this, t),
        (this.radius = this.size / 2),
        this.initWidget(),
        this.initFill(),
        this.draw(),
        this.el.trigger("circle-inited");
    },
    initWidget: function () {
      this.canvas ||
        (this.canvas = i("<canvas>")[
          "prepend" == this.insertMode ? "prependTo" : "appendTo"
        ](this.el)[0]);
      var t = this.canvas;
      if (
        ((t.width = this.size),
        (t.height = this.size),
        (this.ctx = t.getContext("2d")),
        window.devicePixelRatio > 1)
      ) {
        var e = window.devicePixelRatio;
        (t.style.width = t.style.height = this.size + "px"),
          (t.width = t.height = this.size * e),
          this.ctx.scale(e, e);
      }
    },
    initFill: function () {
      function t() {
        var t = i("<canvas>")[0];
        (t.width = e.size),
          (t.height = e.size),
          t.getContext("2d").drawImage(g, 0, 0, r, r),
          (e.arcFill = e.ctx.createPattern(t, "no-repeat")),
          e.drawFrame(e.lastFrameValue);
      }
      var e = this,
        a = this.fill,
        n = this.ctx,
        r = this.size;
      if (!a) throw Error("The fill is not specified!");
      if (
        ("string" == typeof a && (a = { color: a }),
        a.color && (this.arcFill = a.color),
        a.gradient)
      ) {
        var s = a.gradient;
        if (1 == s.length) this.arcFill = s[0];
        else if (s.length > 1) {
          for (
            var l = a.gradientAngle || 0,
              o = a.gradientDirection || [
                (r / 2) * (1 - Math.cos(l)),
                (r / 2) * (1 + Math.sin(l)),
                (r / 2) * (1 + Math.cos(l)),
                (r / 2) * (1 - Math.sin(l)),
              ],
              h = n.createLinearGradient.apply(n, o),
              c = 0;
            c < s.length;
            c++
          ) {
            var d = s[c],
              u = c / (s.length - 1);
            i.isArray(d) && ((u = d[1]), (d = d[0])), h.addColorStop(u, d);
          }
          this.arcFill = h;
        }
      }
      if (a.image) {
        var g;
        a.image instanceof Image
          ? (g = a.image)
          : ((g = new Image()), (g.src = a.image)),
          g.complete ? t() : (g.onload = t);
      }
    },
    draw: function () {
      this.animation
        ? this.drawAnimated(this.value)
        : this.drawFrame(this.value);
    },
    drawFrame: function (i) {
      (this.lastFrameValue = i),
        this.ctx.clearRect(0, 0, this.size, this.size),
        this.drawEmptyArc(i),
        this.drawArc(i);
    },
    drawArc: function (i) {
      if (0 !== i) {
        var t = this.ctx,
          e = this.radius,
          a = this.getThickness(),
          n = this.startAngle;
        t.save(),
          t.beginPath(),
          this.reverse
            ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n)
            : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i),
          (t.lineWidth = a),
          (t.lineCap = this.lineCap),
          (t.strokeStyle = this.arcFill),
          t.stroke(),
          t.restore();
      }
    },
    drawEmptyArc: function (i) {
      var t = this.ctx,
        e = this.radius,
        a = this.getThickness(),
        n = this.startAngle;
      i < 1 &&
        (t.save(),
        t.beginPath(),
        i <= 0
          ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI)
          : this.reverse
          ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i)
          : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n),
        (t.lineWidth = a),
        (t.strokeStyle = this.emptyFill),
        t.stroke(),
        t.restore());
    },
    drawAnimated: function (t) {
      var e = this,
        a = this.el,
        n = i(this.canvas);
      n.stop(!0, !1),
        a.trigger("circle-animation-start"),
        n
          .css({ animationProgress: 0 })
          .animate(
            { animationProgress: 1 },
            i.extend({}, this.animation, {
              step: function (i) {
                var n = e.animationStartValue * (1 - i) + t * i;
                e.drawFrame(n), a.trigger("circle-animation-progress", [i, n]);
              },
            })
          )
          .promise()
          .always(function () {
            a.trigger("circle-animation-end");
          });
    },
    getThickness: function () {
      return i.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },
    getValue: function () {
      return this.value;
    },
    setValue: function (i) {
      this.animation && (this.animationStartValue = this.lastFrameValue),
        (this.value = i),
        this.draw();
    },
  }),
    (i.circleProgress = { defaults: t.prototype }),
    (i.easing.circleProgressEasing = function (i) {
      return i < 0.5
        ? ((i = 2 * i), 0.5 * i * i * i)
        : ((i = 2 - 2 * i), 1 - 0.5 * i * i * i);
    }),
    (i.fn.circleProgress = function (e, a) {
      var n = "circle-progress",
        r = this.data(n);
      if ("widget" == e) {
        if (!r)
          throw Error(
            'Calling "widget" method on not initialized instance is forbidden'
          );
        return r.canvas;
      }
      if ("value" == e) {
        if (!r)
          throw Error(
            'Calling "value" method on not initialized instance is forbidden'
          );
        if ("undefined" == typeof a) return r.getValue();
        var s = arguments[1];
        return this.each(function () {
          i(this).data(n).setValue(s);
        });
      }
      return this.each(function () {
        var a = i(this),
          r = a.data(n),
          s = i.isPlainObject(e) ? e : {};
        if (r) r.init(s);
        else {
          var l = i.extend({}, a.data());
          "string" == typeof l.fill && (l.fill = JSON.parse(l.fill)),
            "string" == typeof l.animation &&
              (l.animation = JSON.parse(l.animation)),
            (s = i.extend(l, s)),
            (s.el = a),
            (r = new t(s)),
            a.data(n, r);
        }
      });
    });
});
jQuery(document).ready(function(){if(window.matchMedia("(max-width: 1100px)").matches){jQuery(".user-main-block__text").after(jQuery(".user-main-block__social"));}
if(TABLET){jQuery(".user").append(jQuery(".user-widget"));}
if(MOBILE_MID){jQuery(".user-main-block__mobile-column").append(jQuery(".user-main-block__top-row"));jQuery(".user-main-block__mobile-column").append(jQuery(".user-main-block__sport-row"));}
const circleBar=function(){jQuery(".js-circle").each(function(i,item){jQuery(item).addClass("active");jQuery(item).circleProgress({value:jQuery(item).data("value"),lineCap:"round",size:jQuery(item).data("size"),startAngle:Math.PI/2,fill:{color:jQuery(item).data("color"),},emptyFill:"#C8C8C8",thickness:2,});});};setTimeout(circleBar,2000);});
jQuery("body").on("click",".poll-widget__content_a",function(e){e.preventDefault();var p_info=jQuery(this).data("info");if(p_info==1){jQuery(this).addClass("correct");setTimeout(function(){showBannerVik();},1000);}else{jQuery(this).addClass("wrong");}});jQuery("body").on("click",".poll-widget__content_play-btn",function(e){e.preventDefault();var key_b=jQuery(this).data("b");var key_v=jQuery(this).data("v");jQuery.fancybox.close();jQuery.ajax({type:"POST",url:window.wp_data.ajax_url,beforeSend:function(){jQuery(".poll-widget__content").css("opacity",0.3);},complete:function(){jQuery(".poll-widget__content").css("opacity",1);},data:{action:"load_qwiz",key_b:key_b,key_v:key_v,},success:function(data){jQuery(".poll-widget__content").html(data);},});});function showBannerVik(){let that=this;jQuery.fancybox({content:jQuery(".poll-widget__content_bk"),tpl:{closeBtn:'<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>',},});};
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e)
    : e(jQuery);
})(function (e) {
  function t(t) {
    var n = t || window.event,
      a = [].slice.call(arguments, 1),
      r = 0,
      l = 0,
      s = 0,
      c = 0,
      c = 0;
    (t = e.event.fix(n)),
      (t.type = "mousewheel"),
      n.wheelDelta && (r = n.wheelDelta),
      n.detail && (r = -1 * n.detail),
      n.deltaY && (r = s = -1 * n.deltaY),
      n.deltaX && ((l = n.deltaX), (r = -1 * l)),
      void 0 !== n.wheelDeltaY && (s = n.wheelDeltaY),
      void 0 !== n.wheelDeltaX && (l = -1 * n.wheelDeltaX),
      (c = Math.abs(r)),
      (!i || c < i) && (i = c),
      (c = Math.max(Math.abs(s), Math.abs(l))),
      (!o || c < o) && (o = c),
      (n = 0 < r ? "floor" : "ceil"),
      (r = Math[n](r / i)),
      (l = Math[n](l / o)),
      (s = Math[n](s / o));
    try {
      t.originalEvent.hasOwnProperty("wheelDelta");
    } catch (d) {
      s = r;
    }
    return (
      a.unshift(t, r, l, s), (e.event.dispatch || e.event.handle).apply(this, a)
    );
  }
  var i,
    o,
    n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    a =
      "onwheel" in document || 9 <= document.documentMode
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
  if (e.event.fixHooks)
    for (var r = n.length; r; ) e.event.fixHooks[n[--r]] = e.event.mouseHooks;
  (e.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener)
        for (var e = a.length; e; ) this.addEventListener(a[--e], t, !1);
      else this.onmousewheel = t;
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var e = a.length; e; ) this.removeEventListener(a[--e], t, !1);
      else this.onmousewheel = null;
    },
  }),
    e.fn.extend({
      mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
      },
      unmousewheel: function (e) {
        return this.unbind("mousewheel", e);
      },
    });
}),
  (function (e, t, i, o) {
    var n = i("html"),
      a = i(e),
      r = i(t),
      l = (i.fancybox = function () {
        l.open.apply(this, arguments);
      }),
      s = navigator.userAgent.match(/msie/i),
      c = null,
      d = t.createTouch !== o,
      h = function (e) {
        return e && e.hasOwnProperty && e instanceof i;
      },
      p = function (e) {
        return e && "string" === i.type(e);
      },
      f = function (e) {
        return p(e) && 0 < e.indexOf("%");
      },
      u = function (e, t) {
        var i = parseInt(e, 10) || 0;
        return t && f(e) && (i *= l.getViewport()[t] / 100), Math.ceil(i);
      },
      g = function (e, t) {
        return u(e, t) + "px";
      };
    i.extend(l, {
      version: "2.1.7",
      defaults: {
        padding: 15,
        margin: 20,
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 9999,
        maxHeight: 9999,
        pixelRatio: 1,
        autoSize: !0,
        autoHeight: !1,
        autoWidth: !1,
        autoResize: !0,
        autoCenter: !d,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: 0.5,
        leftRatio: 0.5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: !0,
        closeBtn: !0,
        closeClick: !1,
        nextClick: !1,
        mouseWheel: !0,
        autoPlay: !1,
        playSpeed: 3e3,
        preload: 3,
        modal: !1,
        loop: !0,
        ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
        iframe: { scrolling: "auto", preload: !0 },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true",
          allowscriptaccess: "always",
        },
        keys: {
          next: { 13: "left", 34: "up", 39: "left", 40: "up" },
          prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
          close: [27],
          play: [32],
          toggle: [70],
        },
        direction: { next: "left", prev: "right" },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
          wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
          image: '<img class="fancybox-image" src="{href}" alt="" />',
          iframe:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
            (s ? ' allowtransparency="true"' : "") +
            "></iframe>",
          error:
            '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn:
            '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
          loading: '<div id="fancybox-loading"><div></div></div>',
        },
        openEffect: "fade",
        openSpeed: 250,
        openEasing: "swing",
        openOpacity: !0,
        openMethod: "zoomIn",
        closeEffect: "fade",
        closeSpeed: 250,
        closeEasing: "swing",
        closeOpacity: !0,
        closeMethod: "zoomOut",
        nextEffect: "elastic",
        nextSpeed: 250,
        nextEasing: "swing",
        nextMethod: "changeIn",
        prevEffect: "elastic",
        prevSpeed: 250,
        prevEasing: "swing",
        prevMethod: "changeOut",
        helpers: { overlay: !0, title: !0 },
        onCancel: i.noop,
        beforeLoad: i.noop,
        afterLoad: i.noop,
        beforeShow: i.noop,
        afterShow: i.noop,
        beforeChange: i.noop,
        beforeClose: i.noop,
        afterClose: i.noop,
      },
      group: {},
      opts: {},
      previous: null,
      coming: null,
      current: null,
      isActive: !1,
      isOpen: !1,
      isOpened: !1,
      wrap: null,
      skin: null,
      outer: null,
      inner: null,
      player: { timer: null, isActive: !1 },
      ajaxLoad: null,
      imgPreload: null,
      transitions: {},
      helpers: {},
      open: function (e, t) {
        if (e && (i.isPlainObject(t) || (t = {}), !1 !== l.close(!0)))
          return (
            i.isArray(e) || (e = h(e) ? i(e).get() : [e]),
            i.each(e, function (n, a) {
              var r,
                s,
                c,
                d,
                f,
                u = {};
              "object" === i.type(a) &&
                (a.nodeType && (a = i(a)),
                h(a)
                  ? ((u = {
                      href: a.data("fancybox-href") || a.attr("href"),
                      title: i("<div/>")
                        .text(a.data("fancybox-title") || a.attr("title") || "")
                        .html(),
                      isDom: !0,
                      element: a,
                    }),
                    i.metadata && i.extend(!0, u, a.metadata()))
                  : (u = a)),
                (r = t.href || u.href || (p(a) ? a : null)),
                (s = t.title !== o ? t.title : u.title || ""),
                (d = (c = t.content || u.content) ? "html" : t.type || u.type),
                !d &&
                  u.isDom &&
                  ((d = a.data("fancybox-type")),
                  d ||
                    (d = (d = a.prop("class").match(/fancybox\.(\w+)/))
                      ? d[1]
                      : null)),
                p(r) &&
                  (d ||
                    (l.isImage(r)
                      ? (d = "image")
                      : l.isSWF(r)
                      ? (d = "swf")
                      : "#" === r.charAt(0)
                      ? (d = "inline")
                      : p(a) && ((d = "html"), (c = a))),
                  "ajax" === d &&
                    ((f = r.split(/\s+/, 2)),
                    (r = f.shift()),
                    (f = f.shift()))),
                c ||
                  ("inline" === d
                    ? r
                      ? (c = i(p(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r))
                      : u.isDom && (c = a)
                    : "html" === d
                    ? (c = r)
                    : d || r || !u.isDom || ((d = "inline"), (c = a))),
                i.extend(u, {
                  href: r,
                  type: d,
                  content: c,
                  title: s,
                  selector: f,
                }),
                (e[n] = u);
            }),
            (l.opts = i.extend(!0, {}, l.defaults, t)),
            t.keys !== o &&
              (l.opts.keys = !!t.keys && i.extend({}, l.defaults.keys, t.keys)),
            (l.group = e),
            l._start(l.opts.index)
          );
      },
      cancel: function () {
        var e = l.coming;
        (e && !1 === l.trigger("onCancel")) ||
          (l.hideLoading(),
          e &&
            (l.ajaxLoad && l.ajaxLoad.abort(),
            (l.ajaxLoad = null),
            l.imgPreload && (l.imgPreload.onload = l.imgPreload.onerror = null),
            e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
            (l.coming = null),
            l.current || l._afterZoomOut(e)));
      },
      close: function (e) {
        l.cancel(),
          !1 !== l.trigger("beforeClose") &&
            (l.unbindEvents(),
            l.isActive &&
              (l.isOpen && !0 !== e
                ? ((l.isOpen = l.isOpened = !1),
                  (l.isClosing = !0),
                  i(".fancybox-item, .fancybox-nav").remove(),
                  l.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                  l.transitions[l.current.closeMethod]())
                : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                  l._afterZoomOut())));
      },
      play: function (e) {
        var t = function () {
            clearTimeout(l.player.timer);
          },
          i = function () {
            t(),
              l.current &&
                l.player.isActive &&
                (l.player.timer = setTimeout(l.next, l.current.playSpeed));
          },
          o = function () {
            t(),
              r.unbind(".player"),
              (l.player.isActive = !1),
              l.trigger("onPlayEnd");
          };
        !0 === e || (!l.player.isActive && !1 !== e)
          ? l.current &&
            (l.current.loop || l.current.index < l.group.length - 1) &&
            ((l.player.isActive = !0),
            r.bind({
              "onCancel.player beforeClose.player": o,
              "onUpdate.player": i,
              "beforeLoad.player": t,
            }),
            i(),
            l.trigger("onPlayStart"))
          : o();
      },
      next: function (e) {
        var t = l.current;
        t && (p(e) || (e = t.direction.next), l.jumpto(t.index + 1, e, "next"));
      },
      prev: function (e) {
        var t = l.current;
        t && (p(e) || (e = t.direction.prev), l.jumpto(t.index - 1, e, "prev"));
      },
      jumpto: function (e, t, i) {
        var n = l.current;
        n &&
          ((e = u(e)),
          (l.direction = t || n.direction[e >= n.index ? "next" : "prev"]),
          (l.router = i || "jumpto"),
          n.loop &&
            (0 > e && (e = n.group.length + (e % n.group.length)),
            (e %= n.group.length)),
          n.group[e] !== o && (l.cancel(), l._start(e)));
      },
      reposition: function (e, t) {
        var o,
          n = l.current,
          a = n ? n.wrap : null;
        a &&
          ((o = l._getPosition(t)),
          e && "scroll" === e.type
            ? (delete o.position, a.stop(!0, !0).animate(o, 200))
            : (a.css(o), (n.pos = i.extend({}, n.dim, o))));
      },
      update: function (e) {
        var t = e && e.originalEvent && e.originalEvent.type,
          i = !t || "orientationchange" === t;
        i && (clearTimeout(c), (c = null)),
          l.isOpen &&
            !c &&
            (c = setTimeout(
              function () {
                var o = l.current;
                o &&
                  !l.isClosing &&
                  (l.wrap.removeClass("fancybox-tmp"),
                  (i || "load" === t || ("resize" === t && o.autoResize)) &&
                    l._setDimension(),
                  ("scroll" === t && o.canShrink) || l.reposition(e),
                  l.trigger("onUpdate"),
                  (c = null));
              },
              i && !d ? 0 : 300
            ));
      },
      toggle: function (e) {
        l.isOpen &&
          ((l.current.fitToView =
            "boolean" === i.type(e) ? e : !l.current.fitToView),
          d &&
            (l.wrap.removeAttr("style").addClass("fancybox-tmp"),
            l.trigger("onUpdate")),
          l.update());
      },
      hideLoading: function () {
        r.unbind(".loading"), i("#fancybox-loading").remove();
      },
      showLoading: function () {
        var e, t;
        l.hideLoading(),
          (e = i(l.opts.tpl.loading).click(l.cancel).appendTo("body")),
          r.bind("keydown.loading", function (e) {
            27 === (e.which || e.keyCode) && (e.preventDefault(), l.cancel());
          }),
          l.defaults.fixed ||
            ((t = l.getViewport()),
            e.css({
              position: "absolute",
              top: 0.5 * t.h + t.y,
              left: 0.5 * t.w + t.x,
            })),
          l.trigger("onLoading");
      },
      getViewport: function () {
        var t = (l.current && l.current.locked) || !1,
          i = { x: a.scrollLeft(), y: a.scrollTop() };
        return (
          t && t.length
            ? ((i.w = t[0].clientWidth), (i.h = t[0].clientHeight))
            : ((i.w = d && e.innerWidth ? e.innerWidth : a.width()),
              (i.h = d && e.innerHeight ? e.innerHeight : a.height())),
          i
        );
      },
      unbindEvents: function () {
        l.wrap && h(l.wrap) && l.wrap.unbind(".fb"),
          r.unbind(".fb"),
          a.unbind(".fb");
      },
      bindEvents: function () {
        var e,
          t = l.current;
        t &&
          (a.bind(
            "orientationchange.fb" +
              (d ? "" : " resize.fb") +
              (t.autoCenter && !t.locked ? " scroll.fb" : ""),
            l.update
          ),
          (e = t.keys) &&
            r.bind("keydown.fb", function (n) {
              var a = n.which || n.keyCode,
                r = n.target || n.srcElement;
              return (
                (27 !== a || !l.coming) &&
                void (
                  n.ctrlKey ||
                  n.altKey ||
                  n.shiftKey ||
                  n.metaKey ||
                  (r && (r.type || i(r).is("[contenteditable]"))) ||
                  i.each(e, function (e, r) {
                    return 1 < t.group.length && r[a] !== o
                      ? (l[e](r[a]), n.preventDefault(), !1)
                      : -1 < i.inArray(a, r)
                      ? (l[e](), n.preventDefault(), !1)
                      : void 0;
                  })
                )
              );
            }),
          i.fn.mousewheel &&
            t.mouseWheel &&
            l.wrap.bind("mousewheel.fb", function (e, o, n, a) {
              for (
                var r = i(e.target || null), s = !1;
                r.length &&
                !(s || r.is(".fancybox-skin") || r.is(".fancybox-wrap"));
              )
                (s =
                  (s = r[0]) &&
                  !(s.style.overflow && "hidden" === s.style.overflow) &&
                  ((s.clientWidth && s.scrollWidth > s.clientWidth) ||
                    (s.clientHeight && s.scrollHeight > s.clientHeight))),
                  (r = i(r).parent());
              0 !== o &&
                !s &&
                1 < l.group.length &&
                !t.canShrink &&
                (0 < a || 0 < n
                  ? l.prev(0 < a ? "down" : "left")
                  : (0 > a || 0 > n) && l.next(0 > a ? "up" : "right"),
                e.preventDefault());
            }));
      },
      trigger: function (e, t) {
        var o,
          n = t || l.coming || l.current;
        if (n) {
          if (
            (i.isFunction(n[e]) &&
              (o = n[e].apply(n, Array.prototype.slice.call(arguments, 1))),
            !1 === o)
          )
            return !1;
          n.helpers &&
            i.each(n.helpers, function (t, o) {
              o &&
                l.helpers[t] &&
                i.isFunction(l.helpers[t][e]) &&
                l.helpers[t][e](i.extend(!0, {}, l.helpers[t].defaults, o), n);
            });
        }
        r.trigger(e);
      },
      isImage: function (e) {
        return (
          p(e) &&
          e.match(
            /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
          )
        );
      },
      isSWF: function (e) {
        return p(e) && e.match(/\.(swf)((\?|#).*)?$/i);
      },
      _start: function (e) {
        var t,
          o,
          n = {};
        if (((e = u(e)), (t = l.group[e] || null), !t)) return !1;
        if (
          ((n = i.extend(!0, {}, l.opts, t)),
          (t = n.margin),
          (o = n.padding),
          "number" === i.type(t) && (n.margin = [t, t, t, t]),
          "number" === i.type(o) && (n.padding = [o, o, o, o]),
          n.modal &&
            i.extend(!0, n, {
              closeBtn: !1,
              closeClick: !1,
              nextClick: !1,
              arrows: !1,
              mouseWheel: !1,
              keys: null,
              helpers: { overlay: { closeClick: !1 } },
            }),
          n.autoSize && (n.autoWidth = n.autoHeight = !0),
          "auto" === n.width && (n.autoWidth = !0),
          "auto" === n.height && (n.autoHeight = !0),
          (n.group = l.group),
          (n.index = e),
          (l.coming = n),
          !1 === l.trigger("beforeLoad"))
        )
          l.coming = null;
        else {
          if (((o = n.type), (t = n.href), !o))
            return (
              (l.coming = null),
              !(!l.current || !l.router || "jumpto" === l.router) &&
                ((l.current.index = e), l[l.router](l.direction))
            );
          if (
            ((l.isActive = !0),
            ("image" !== o && "swf" !== o) ||
              ((n.autoHeight = n.autoWidth = !1), (n.scrolling = "visible")),
            "image" === o && (n.aspectRatio = !0),
            "iframe" === o && d && (n.scrolling = "scroll"),
            (n.wrap = i(n.tpl.wrap)
              .addClass(
                "fancybox-" +
                  (d ? "mobile" : "desktop") +
                  " fancybox-type-" +
                  o +
                  " fancybox-tmp " +
                  n.wrapCSS
              )
              .appendTo(n.parent || "body")),
            i.extend(n, {
              skin: i(".fancybox-skin", n.wrap),
              outer: i(".fancybox-outer", n.wrap),
              inner: i(".fancybox-inner", n.wrap),
            }),
            i.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
              n.skin.css("padding" + t, g(n.padding[e]));
            }),
            l.trigger("onReady"),
            "inline" === o || "html" === o)
          ) {
            if (!n.content || !n.content.length) return l._error("content");
          } else if (!t) return l._error("href");
          "image" === o
            ? l._loadImage()
            : "ajax" === o
            ? l._loadAjax()
            : "iframe" === o
            ? l._loadIframe()
            : l._afterLoad();
        }
      },
      _error: function (e) {
        i.extend(l.coming, {
          type: "html",
          autoWidth: !0,
          autoHeight: !0,
          minWidth: 0,
          minHeight: 0,
          scrolling: "no",
          hasError: e,
          content: l.coming.tpl.error,
        }),
          l._afterLoad();
      },
      _loadImage: function () {
        var e = (l.imgPreload = new Image());
        (e.onload = function () {
          (this.onload = this.onerror = null),
            (l.coming.width = this.width / l.opts.pixelRatio),
            (l.coming.height = this.height / l.opts.pixelRatio),
            l._afterLoad();
        }),
          (e.onerror = function () {
            (this.onload = this.onerror = null), l._error("image");
          }),
          (e.src = l.coming.href),
          !0 !== e.complete && l.showLoading();
      },
      _loadAjax: function () {
        var e = l.coming;
        l.showLoading(),
          (l.ajaxLoad = i.ajax(
            i.extend({}, e.ajax, {
              url: e.href,
              error: function (e, t) {
                l.coming && "abort" !== t
                  ? l._error("ajax", e)
                  : l.hideLoading();
              },
              success: function (t, i) {
                "success" === i && ((e.content = t), l._afterLoad());
              },
            })
          ));
      },
      _loadIframe: function () {
        var e = l.coming,
          t = i(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
            .attr("scrolling", d ? "auto" : e.iframe.scrolling)
            .attr("src", e.href);
        i(e.wrap).bind("onReset", function () {
          try {
            i(this)
              .find("iframe")
              .hide()
              .attr("src", "//about:blank")
              .end()
              .empty();
          } catch (e) {}
        }),
          e.iframe.preload &&
            (l.showLoading(),
            t.one("load", function () {
              i(this).data("ready", 1),
                d || i(this).bind("load.fb", l.update),
                i(this)
                  .parents(".fancybox-wrap")
                  .width("100%")
                  .removeClass("fancybox-tmp")
                  .show(),
                l._afterLoad();
            })),
          (e.content = t.appendTo(e.inner)),
          e.iframe.preload || l._afterLoad();
      },
      _preloadImages: function () {
        var e,
          t,
          i = l.group,
          o = l.current,
          n = i.length,
          a = o.preload ? Math.min(o.preload, n - 1) : 0;
        for (t = 1; t <= a; t += 1)
          (e = i[(o.index + t) % n]),
            "image" === e.type && e.href && (new Image().src = e.href);
      },
      _afterLoad: function () {
        var e,
          t,
          o,
          n,
          a,
          r = l.coming,
          s = l.current;
        if ((l.hideLoading(), r && !1 !== l.isActive))
          if (!1 === l.trigger("afterLoad", r, s))
            r.wrap.stop(!0).trigger("onReset").remove(), (l.coming = null);
          else {
            switch (
              (s &&
                (l.trigger("beforeChange", s),
                s.wrap
                  .stop(!0)
                  .removeClass("fancybox-opened")
                  .find(".fancybox-item, .fancybox-nav")
                  .remove()),
              l.unbindEvents(),
              (e = r.content),
              (t = r.type),
              (o = r.scrolling),
              i.extend(l, {
                wrap: r.wrap,
                skin: r.skin,
                outer: r.outer,
                inner: r.inner,
                current: r,
                previous: s,
              }),
              (n = r.href),
              t)
            ) {
              case "inline":
              case "ajax":
              case "html":
                r.selector
                  ? (e = i("<div>").html(e).find(r.selector))
                  : h(e) &&
                    (e.data("fancybox-placeholder") ||
                      e.data(
                        "fancybox-placeholder",
                        i('<div class="fancybox-placeholder"></div>')
                          .insertAfter(e)
                          .hide()
                      ),
                    (e = e.show().detach()),
                    r.wrap.bind("onReset", function () {
                      i(this).find(e).length &&
                        e
                          .hide()
                          .replaceAll(e.data("fancybox-placeholder"))
                          .data("fancybox-placeholder", !1);
                    }));
                break;
              case "image":
                e = r.tpl.image.replace(/\{href\}/g, n);
                break;
              case "swf":
                (e =
                  '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                  n +
                  '"></param>'),
                  (a = ""),
                  i.each(r.swf, function (t, i) {
                    (e += '<param name="' + t + '" value="' + i + '"></param>'),
                      (a += " " + t + '="' + i + '"');
                  }),
                  (e +=
                    '<embed src="' +
                    n +
                    '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                    a +
                    "></embed></object>");
            }
            (h(e) && e.parent().is(r.inner)) || r.inner.append(e),
              l.trigger("beforeShow"),
              r.inner.css(
                "overflow",
                "yes" === o ? "scroll" : "no" === o ? "hidden" : o
              ),
              l._setDimension(),
              l.reposition(),
              (l.isOpen = !1),
              (l.coming = null),
              l.bindEvents(),
              l.isOpened
                ? s.prevMethod && l.transitions[s.prevMethod]()
                : i(".fancybox-wrap")
                    .not(r.wrap)
                    .stop(!0)
                    .trigger("onReset")
                    .remove(),
              l.transitions[l.isOpened ? r.nextMethod : r.openMethod](),
              l._preloadImages();
          }
      },
      _setDimension: function () {
        var e,
          t = l.getViewport(),
          o = 0,
          n = l.wrap,
          a = l.skin,
          r = l.inner,
          s = l.current;
        e = s.width;
        var c,
          d,
          h,
          p,
          m,
          y,
          w,
          v,
          b,
          x = s.height,
          k = s.minWidth,
          C = s.minHeight,
          M = s.maxWidth,
          S = s.maxHeight,
          O = s.scrolling,
          j = s.scrollOutside ? s.scrollbarWidth : 0,
          P = s.margin,
          T = u(P[1] + P[3]),
          _ = u(P[0] + P[2]);
        if (
          (n
            .add(a)
            .add(r)
            .width("auto")
            .height("auto")
            .removeClass("fancybox-tmp"),
          (P = u(a.outerWidth(!0) - a.width())),
          (c = u(a.outerHeight(!0) - a.height())),
          (d = T + P),
          (h = _ + c),
          (p = f(e) ? ((t.w - d) * u(e)) / 100 : e),
          (m = f(x) ? ((t.h - h) * u(x)) / 100 : x),
          "iframe" === s.type)
        ) {
          if (((b = s.content), s.autoHeight && b && 1 === b.data("ready")))
            try {
              b[0].contentWindow.document.location &&
                (r.width(p).height(9999),
                (y = b.contents().find("body")),
                j && y.css("overflow-x", "hidden"),
                (m = y.outerHeight(!0)));
            } catch (E) {}
        } else
          (s.autoWidth || s.autoHeight) &&
            (r.addClass("fancybox-tmp"),
            s.autoWidth || r.width(p),
            s.autoHeight || r.height(m),
            s.autoWidth && (p = r.width()),
            s.autoHeight && (m = r.height()),
            r.removeClass("fancybox-tmp"));
        if (
          ((e = u(p)),
          (x = u(m)),
          (v = p / m),
          (k = u(f(k) ? u(k, "w") - d : k)),
          (M = u(f(M) ? u(M, "w") - d : M)),
          (C = u(f(C) ? u(C, "h") - h : C)),
          (S = u(f(S) ? u(S, "h") - h : S)),
          (y = M),
          (w = S),
          s.fitToView &&
            ((M = Math.min(t.w - d, M)), (S = Math.min(t.h - h, S))),
          (d = t.w - T),
          (_ = t.h - _),
          s.aspectRatio
            ? (e > M && ((e = M), (x = u(e / v))),
              x > S && ((x = S), (e = u(x * v))),
              e < k && ((e = k), (x = u(e / v))),
              x < C && ((x = C), (e = u(x * v))))
            : ((e = Math.max(k, Math.min(e, M))),
              s.autoHeight &&
                "iframe" !== s.type &&
                (r.width(e), (x = r.height())),
              (x = Math.max(C, Math.min(x, S)))),
          s.fitToView)
        )
          if (
            (r.width(e).height(x),
            n.width(e + P),
            (t = n.width()),
            (T = n.height()),
            s.aspectRatio)
          )
            for (; (t > d || T > _) && e > k && x > C && !(19 < o++); )
              (x = Math.max(C, Math.min(S, x - 10))),
                (e = u(x * v)),
                e < k && ((e = k), (x = u(e / v))),
                e > M && ((e = M), (x = u(e / v))),
                r.width(e).height(x),
                n.width(e + P),
                (t = n.width()),
                (T = n.height());
          else
            (e = Math.max(k, Math.min(e, e - (t - d)))),
              (x = Math.max(C, Math.min(x, x - (T - _))));
        j && "auto" === O && x < m && e + P + j < d && (e += j),
          r.width(e).height(x),
          n.width(e + P),
          (t = n.width()),
          (T = n.height()),
          (o = (t > d || T > _) && e > k && x > C),
          (e = s.aspectRatio
            ? e < y && x < w && e < p && x < m
            : (e < y || x < w) && (e < p || x < m)),
          i.extend(s, {
            dim: { width: g(t), height: g(T) },
            origWidth: p,
            origHeight: m,
            canShrink: o,
            canExpand: e,
            wPadding: P,
            hPadding: c,
            wrapSpace: T - a.outerHeight(!0),
            skinSpace: a.height() - x,
          }),
          !b && s.autoHeight && x > C && x < S && !e && r.height("auto");
      },
      _getPosition: function (e) {
        var t = l.current,
          i = l.getViewport(),
          o = t.margin,
          n = l.wrap.width() + o[1] + o[3],
          a = l.wrap.height() + o[0] + o[2],
          o = { position: "absolute", top: o[0], left: o[3] };
        return (
          t.autoCenter && t.fixed && !e && a <= i.h && n <= i.w
            ? (o.position = "fixed")
            : t.locked || ((o.top += i.y), (o.left += i.x)),
          (o.top = g(Math.max(o.top, o.top + (i.h - a) * t.topRatio))),
          (o.left = g(Math.max(o.left, o.left + (i.w - n) * t.leftRatio))),
          o
        );
      },
      _afterZoomIn: function () {
        var e = l.current;
        e &&
          ((l.isOpen = l.isOpened = !0),
          l.wrap
            .css("overflow", "visible")
            .addClass("fancybox-opened")
            .hide()
            .show(0),
          l.update(),
          (e.closeClick || (e.nextClick && 1 < l.group.length)) &&
            l.inner.css("cursor", "pointer").bind("click.fb", function (t) {
              i(t.target).is("a") ||
                i(t.target).parent().is("a") ||
                (t.preventDefault(), l[e.closeClick ? "close" : "next"]());
            }),
          e.closeBtn &&
            i(e.tpl.closeBtn)
              .appendTo(l.skin)
              .bind("click.fb", function (e) {
                e.preventDefault(), l.close();
              }),
          e.arrows &&
            1 < l.group.length &&
            ((e.loop || 0 < e.index) &&
              i(e.tpl.prev).appendTo(l.outer).bind("click.fb", l.prev),
            (e.loop || e.index < l.group.length - 1) &&
              i(e.tpl.next).appendTo(l.outer).bind("click.fb", l.next)),
          l.trigger("afterShow"),
          e.loop || e.index !== e.group.length - 1
            ? l.opts.autoPlay &&
              !l.player.isActive &&
              ((l.opts.autoPlay = !1), l.play(!0))
            : l.play(!1));
      },
      _afterZoomOut: function (e) {
        (e = e || l.current),
          i(".fancybox-wrap").trigger("onReset").remove(),
          i.extend(l, {
            group: {},
            opts: {},
            router: !1,
            current: null,
            isActive: !1,
            isOpened: !1,
            isOpen: !1,
            isClosing: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
          }),
          l.trigger("afterClose", e);
      },
    }),
      (l.transitions = {
        getOrigPosition: function () {
          var e = l.current,
            t = e.element,
            i = e.orig,
            o = {},
            n = 50,
            a = 50,
            r = e.hPadding,
            s = e.wPadding,
            c = l.getViewport();
          return (
            !i &&
              e.isDom &&
              t.is(":visible") &&
              ((i = t.find("img:first")), i.length || (i = t)),
            h(i)
              ? ((o = i.offset()),
                i.is("img") && ((n = i.outerWidth()), (a = i.outerHeight())))
              : ((o.top = c.y + (c.h - a) * e.topRatio),
                (o.left = c.x + (c.w - n) * e.leftRatio)),
            ("fixed" === l.wrap.css("position") || e.locked) &&
              ((o.top -= c.y), (o.left -= c.x)),
            (o = {
              top: g(o.top - r * e.topRatio),
              left: g(o.left - s * e.leftRatio),
              width: g(n + s),
              height: g(a + r),
            })
          );
        },
        step: function (e, t) {
          var i,
            o,
            n = t.prop;
          o = l.current;
          var a = o.wrapSpace,
            r = o.skinSpace;
          ("width" !== n && "height" !== n) ||
            ((i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
            l.isClosing && (i = 1 - i),
            (o = "width" === n ? o.wPadding : o.hPadding),
            (o = e - o),
            l.skin[n](u("width" === n ? o : o - a * i)),
            l.inner[n](u("width" === n ? o : o - a * i - r * i)));
        },
        zoomIn: function () {
          var e = l.current,
            t = e.pos,
            o = e.openEffect,
            n = "elastic" === o,
            a = i.extend({ opacity: 1 }, t);
          delete a.position,
            n
              ? ((t = this.getOrigPosition()),
                e.openOpacity && (t.opacity = 0.1))
              : "fade" === o && (t.opacity = 0.1),
            l.wrap.css(t).animate(a, {
              duration: "none" === o ? 0 : e.openSpeed,
              easing: e.openEasing,
              step: n ? this.step : null,
              complete: l._afterZoomIn,
            });
        },
        zoomOut: function () {
          var e = l.current,
            t = e.closeEffect,
            i = "elastic" === t,
            o = { opacity: 0.1 };
          i &&
            ((o = this.getOrigPosition()), e.closeOpacity && (o.opacity = 0.1)),
            l.wrap.animate(o, {
              duration: "none" === t ? 0 : e.closeSpeed,
              easing: e.closeEasing,
              step: i ? this.step : null,
              complete: l._afterZoomOut,
            });
        },
        changeIn: function () {
          var e,
            t = l.current,
            i = t.nextEffect,
            o = t.pos,
            n = { opacity: 1 },
            a = l.direction;
          (o.opacity = 0.1),
            "elastic" === i &&
              ((e = "down" === a || "up" === a ? "top" : "left"),
              "down" === a || "right" === a
                ? ((o[e] = g(u(o[e]) - 200)), (n[e] = "+=200px"))
                : ((o[e] = g(u(o[e]) + 200)), (n[e] = "-=200px"))),
            "none" === i
              ? l._afterZoomIn()
              : l.wrap.css(o).animate(n, {
                  duration: t.nextSpeed,
                  easing: t.nextEasing,
                  complete: l._afterZoomIn,
                });
        },
        changeOut: function () {
          var e = l.previous,
            t = e.prevEffect,
            o = { opacity: 0.1 },
            n = l.direction;
          "elastic" === t &&
            (o["down" === n || "up" === n ? "top" : "left"] =
              ("up" === n || "left" === n ? "-" : "+") + "=200px"),
            e.wrap.animate(o, {
              duration: "none" === t ? 0 : e.prevSpeed,
              easing: e.prevEasing,
              complete: function () {
                i(this).trigger("onReset").remove();
              },
            });
        },
      }),
      (l.helpers.overlay = {
        defaults: {
          closeClick: !0,
          speedOut: 200,
          showEarly: !0,
          css: {},
          locked: !d,
          fixed: !0,
        },
        overlay: null,
        fixed: !1,
        el: i("html"),
        create: function (e) {
          var t;
          (e = i.extend({}, this.defaults, e)),
            this.overlay && this.close(),
            (t = l.coming ? l.coming.parent : e.parent),
            (this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(
              t && t.length ? t : "body"
            )),
            (this.fixed = !1),
            e.fixed &&
              l.defaults.fixed &&
              (this.overlay.addClass("fancybox-overlay-fixed"),
              (this.fixed = !0));
        },
        open: function (e) {
          var t = this;
          (e = i.extend({}, this.defaults, e)),
            this.overlay
              ? this.overlay.unbind(".overlay").width("auto").height("auto")
              : this.create(e),
            this.fixed ||
              (a.bind("resize.overlay", i.proxy(this.update, this)),
              this.update()),
            e.closeClick &&
              this.overlay.bind("click.overlay", function (e) {
                if (i(e.target).hasClass("fancybox-overlay"))
                  return l.isActive ? l.close() : t.close(), !1;
              }),
            this.overlay.css(e.css).show();
        },
        close: function () {
          a.unbind("resize.overlay"),
            this.el.hasClass("fancybox-lock") &&
              (i(".fancybox-margin").removeClass("fancybox-margin"),
              this.el.removeClass("fancybox-lock"),
              a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
            i(".fancybox-overlay").remove().hide(),
            i.extend(this, { overlay: null, fixed: !1 });
        },
        update: function () {
          var e,
            i = "100%";
          this.overlay.width(i).height("100%"),
            s
              ? ((e = Math.max(
                  t.documentElement.offsetWidth,
                  t.body.offsetWidth
                )),
                r.width() > e && (i = r.width()))
              : r.width() > a.width() && (i = r.width()),
            this.overlay.width(i).height(r.height());
        },
        onReady: function (e, t) {
          var o = this.overlay;
          i(".fancybox-overlay").stop(!0, !0),
            o || this.create(e),
            e.locked &&
              this.fixed &&
              t.fixed &&
              ((t.locked = this.overlay.append(t.wrap)), (t.fixed = !1)),
            !0 === e.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function (e, t) {
          t.locked &&
            !this.el.hasClass("fancybox-lock") &&
            (!1 !== this.fixPosition &&
              i("*:not(object)")
                .filter(function () {
                  return (
                    "fixed" === i(this).css("position") &&
                    !i(this).hasClass("fancybox-overlay") &&
                    !i(this).hasClass("fancybox-wrap")
                  );
                })
                .addClass("fancybox-margin"),
            this.el.addClass("fancybox-margin"),
            (this.scrollV = a.scrollTop()),
            (this.scrollH = a.scrollLeft()),
            this.el.addClass("fancybox-lock"),
            a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
            this.open(e);
        },
        onUpdate: function () {
          this.fixed || this.update();
        },
        afterClose: function (e) {
          this.overlay &&
            !l.coming &&
            this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this));
        },
      }),
      (l.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function (e) {
          var t = l.current,
            o = t.title,
            n = e.type;
          if (
            (i.isFunction(o) && (o = o.call(t.element, t)),
            p(o) && "" !== i.trim(o))
          ) {
            switch (
              ((t = i(
                '<div class="fancybox-title fancybox-title-' +
                  n +
                  '-wrap">' +
                  o +
                  "</div>"
              )),
              n)
            ) {
              case "inside":
                n = l.skin;
                break;
              case "outside":
                n = l.wrap;
                break;
              case "over":
                n = l.inner;
                break;
              default:
                (n = l.skin),
                  t.appendTo("body"),
                  s && t.width(t.width()),
                  t.wrapInner('<span class="child"></span>'),
                  (l.current.margin[2] += Math.abs(u(t.css("margin-bottom"))));
            }
            t["top" === e.position ? "prependTo" : "appendTo"](n);
          }
        },
      }),
      (i.fn.fancybox = function (e) {
        var t,
          o = i(this),
          n = this.selector || "",
          a = function (a) {
            var r,
              s,
              c = i(this).blur(),
              d = t;
            a.ctrlKey ||
              a.altKey ||
              a.shiftKey ||
              a.metaKey ||
              c.is(".fancybox-wrap") ||
              ((r = e.groupAttr || "data-fancybox-group"),
              (s = c.attr(r)),
              s || ((r = "rel"), (s = c.get(0)[r])),
              s &&
                "" !== s &&
                "nofollow" !== s &&
                ((c = n.length ? i(n) : o),
                (c = c.filter("[" + r + '="' + s + '"]')),
                (d = c.index(this))),
              (e.index = d),
              !1 !== l.open(c, e) && a.preventDefault());
          };
        return (
          (e = e || {}),
          (t = e.index || 0),
          n && !1 !== e.live
            ? r
                .undelegate(n, "click.fb-start")
                .delegate(
                  n + ":not('.fancybox-item, .fancybox-nav')",
                  "click.fb-start",
                  a
                )
            : o.unbind("click.fb-start").bind("click.fb-start", a),
          this.filter("[data-fancybox-start=1]").trigger("click"),
          this
        );
      }),
      r.ready(function () {
        var t, a;
        i.scrollbarWidth === o &&
          (i.scrollbarWidth = function () {
            var e = i(
                '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
              ).appendTo("body"),
              t = e.children(),
              t = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), t;
          }),
          i.support.fixedPosition === o &&
            (i.support.fixedPosition = (function () {
              var e = i(
                  '<div style="position:fixed;top:20px;"></div>'
                ).appendTo("body"),
                t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
              return e.remove(), t;
            })()),
          i.extend(l.defaults, {
            scrollbarWidth: i.scrollbarWidth(),
            fixed: i.support.fixedPosition,
            parent: i("body"),
          }),
          (t = i(e).width()),
          n.addClass("fancybox-lock-test"),
          (a = i(e).width()),
          n.removeClass("fancybox-lock-test"),
          i(
            "<style type='text/css'>.fancybox-margin{margin-right:" +
              (a - t) +
              "px;}</style>"
          ).appendTo("head");
      });
  })(window, document, jQuery),
  (function (e) {
    var t = e.fancybox;
    t.helpers.buttons = {
      defaults: {
        skipSingle: !1,
        position: "top",
        tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>',
      },
      list: null,
      buttons: null,
      beforeLoad: function (e, t) {
        return e.skipSingle && t.group.length < 2
          ? ((t.helpers.buttons = !1), void (t.closeBtn = !0))
          : void (t.margin["bottom" === e.position ? 2 : 0] += 30);
      },
      onPlayStart: function () {
        this.buttons &&
          this.buttons.play
            .attr("title", "Pause slideshow")
            .addClass("btnPlayOn");
      },
      onPlayEnd: function () {
        this.buttons &&
          this.buttons.play
            .attr("title", "Start slideshow")
            .removeClass("btnPlayOn");
      },
      afterShow: function (i, o) {
        var n = this.buttons;
        n ||
          ((this.list = e(i.tpl).addClass(i.position).appendTo("body")),
          (n = {
            prev: this.list.find(".btnPrev").click(t.prev),
            next: this.list.find(".btnNext").click(t.next),
            play: this.list.find(".btnPlay").click(t.play),
            toggle: this.list.find(".btnToggle").click(t.toggle),
            close: this.list.find(".btnClose").click(t.close),
          })),
          o.index > 0 || o.loop
            ? n.prev.removeClass("btnDisabled")
            : n.prev.addClass("btnDisabled"),
          o.loop || o.index < o.group.length - 1
            ? (n.next.removeClass("btnDisabled"),
              n.play.removeClass("btnDisabled"))
            : (n.next.addClass("btnDisabled"), n.play.addClass("btnDisabled")),
          (this.buttons = n),
          this.onUpdate(i, o);
      },
      onUpdate: function (e, t) {
        var i;
        this.buttons &&
          ((i = this.buttons.toggle.removeClass("btnDisabled btnToggleOn")),
          t.canShrink
            ? i.addClass("btnToggleOn")
            : t.canExpand || i.addClass("btnDisabled"));
      },
      beforeClose: function () {
        this.list && this.list.remove(),
          (this.list = null),
          (this.buttons = null);
      },
    };
  })(jQuery),
  (function (e) {
    var t = e.fancybox;
    t.helpers.thumbs = {
      defaults: {
        width: 50,
        height: 50,
        position: "bottom",
        source: function (t) {
          var i;
          return (
            t.element && (i = e(t.element).find("img").attr("src")),
            !i && "image" === t.type && t.href && (i = t.href),
            i
          );
        },
      },
      wrap: null,
      list: null,
      width: 0,
      init: function (t, i) {
        var o,
          n = this,
          a = t.width,
          r = t.height,
          l = t.source;
        o = "";
        for (var s = 0; s < i.group.length; s++)
          o +=
            '<li><a style="width:' +
            a +
            "px;height:" +
            r +
            'px;" href="javascript:jQuery.fancybox.jumpto(' +
            s +
            ');"></a></li>';
        (this.wrap = e('<div id="fancybox-thumbs"></div>')
          .addClass(t.position)
          .appendTo("body")),
          (this.list = e("<ul>" + o + "</ul>").appendTo(this.wrap)),
          e.each(i.group, function (t) {
            var o = i.group[t],
              s = l(o);
            s &&
              e("<img />")
                .on("load", function () {
                  var i,
                    o,
                    l,
                    s = this.width,
                    c = this.height;
                  n.list &&
                    s &&
                    c &&
                    ((i = s / a),
                    (o = c / r),
                    (l = n.list.children().eq(t).find("a")),
                    i >= 1 &&
                      o >= 1 &&
                      (i > o
                        ? ((s = Math.floor(s / o)), (c = r))
                        : ((s = a), (c = Math.floor(c / i)))),
                    e(this).css({
                      width: s,
                      height: c,
                      top: Math.floor(r / 2 - c / 2),
                      left: Math.floor(a / 2 - s / 2),
                    }),
                    l.width(a).height(r),
                    e(this).hide().appendTo(l).fadeIn(300));
                })
                .attr("src", s)
                .attr("title", o.title);
          }),
          (this.width = this.list.children().eq(0).outerWidth(!0)),
          this.list
            .width(this.width * (i.group.length + 1))
            .css(
              "left",
              Math.floor(
                0.5 * e(window).width() -
                  (i.index * this.width + 0.5 * this.width)
              )
            );
      },
      beforeLoad: function (e, t) {
        return t.group.length < 2
          ? void (t.helpers.thumbs = !1)
          : void (t.margin["top" === e.position ? 0 : 2] += e.height + 15);
      },
      afterShow: function (e, t) {
        this.list ? this.onUpdate(e, t) : this.init(e, t),
          this.list
            .children()
            .removeClass("active")
            .eq(t.index)
            .addClass("active");
      },
      onUpdate: function (t, i) {
        this.list &&
          this.list.stop(!0).animate(
            {
              left: Math.floor(
                0.5 * e(window).width() -
                  (i.index * this.width + 0.5 * this.width)
              ),
            },
            150
          );
      },
      beforeClose: function () {
        this.wrap && this.wrap.remove(),
          (this.wrap = null),
          (this.list = null),
          (this.width = 0);
      },
    };
  })(jQuery),
  (function (e) {
    "use strict";
    var t = e.fancybox,
      i = function (t, i, o) {
        return (
          (o = o || ""),
          "object" === e.type(o) && (o = e.param(o, !0)),
          e.each(i, function (e, i) {
            t = t.replace("$" + e, i || "");
          }),
          o.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + o),
          t
        );
      };
    t.helpers.media = {
      defaults: {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "opaque",
            enablejsapi: 1,
            ps: "docs",
            controls: 1,
          },
          type: "iframe",
          url: "//www.youtube.com/embed/$3",
        },
        vimeo: {
          matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          type: "iframe",
          url: "//player.vimeo.com/video/$1",
        },
        metacafe: {
          matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
          params: { autoPlay: "yes" },
          type: "swf",
          url: function (t, i, o) {
            return (
              (o.swf.flashVars = "playerVars=" + e.param(i, !0)),
              "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
            );
          },
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "swf",
          url: "//www.dailymotion.com/swf/video/$1",
        },
        twitvid: {
          matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
          params: { autoplay: 0 },
          type: "iframe",
          url: "//www.twitvid.com/embed.php?guid=$1",
        },
        twitpic: {
          matcher:
            /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
          type: "image",
          url: "//twitpic.com/show/full/$1/",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        google_maps: {
          matcher:
            /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
          type: "iframe",
          url: function (e) {
            return (
              "//maps.google." +
              e[1] +
              "/" +
              e[3] +
              e[4] +
              "&output=" +
              (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
      },
      beforeLoad: function (t, o) {
        var n,
          a,
          r,
          l,
          s = o.href || "",
          c = !1;
        for (n in t)
          if (t.hasOwnProperty(n) && ((a = t[n]), (r = s.match(a.matcher)))) {
            (c = a.type),
              (l = e.extend(
                !0,
                {},
                a.params,
                o[n] || (e.isPlainObject(t[n]) ? t[n].params : null)
              )),
              (s =
                "function" === e.type(a.url)
                  ? a.url.call(this, r, l, o)
                  : i(a.url, r, l));
            break;
          }
        c && ((o.href = s), (o.type = c), (o.autoHeight = !1));
      },
    };
  })(jQuery);
ai_front={"insertion_before":"\u041f\u0415\u0420\u0415\u0414","insertion_after":"\u041f\u041e\u0421\u041b\u0415","insertion_prepend":"PREPEND CONTENT","insertion_append":"\u0414\u041e\u0411\u0410\u0412\u042c\u0422\u0415 \u0421\u041e\u0414\u0415\u0420\u0416\u0418\u041c\u041e\u0415","insertion_replace_content":"\u0417\u0410\u041c\u0415\u041d\u0418\u0422\u0415 \u041a\u041e\u041d\u0422\u0415\u041d\u0422","insertion_replace_element":"\u0417\u0410\u041c\u0415\u041d\u0418\u0422\u0415 \u042d\u041b\u0415\u041c\u0415\u041d\u0422","visible":"\u0412\u0418\u0414\u0418\u041c\u042b\u0419","hidden":"\u0421\u041a\u0420\u042b\u0422","fallback":"FALLBACK","automatically_placed":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0434\u0430 AdSense Auto","cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","use":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c","add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","parent":"\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c","cancel_element_selection":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430","select_parent_element":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442","css_selector":"CSS \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440","use_current_selector":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440","element":"\u042d\u041b\u0415\u041c\u0415\u041d\u0422","path":"\u041f\u0423\u0422\u042c","selector":"\u0421\u0415\u041b\u0415\u041a\u0422\u041e\u0420"};
(()=>{var _=class{static getScreenWidth(){return window.innerWidth||document.documentElement.clientWidth}static getScreenHeight(){return window.innerHeight||document.documentElement.clientHeight}static isNotValidScreensize(e,t){const s=this.getScreenWidth(),l=this.getScreenHeight(),r=e&&(s>t.width||l>t.height),i=!e&&(s<t.width||l<t.height);return r||i}static isPageCached(){const e=document.documentElement.nextSibling&&document.documentElement.nextSibling.data?document.documentElement.nextSibling.data:"";return e&&e.includes("Debug: cached")}static isIntersecting(e){return e.bottom>=0&&e.right>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)&&e.left<=(window.innerWidth||document.documentElement.clientWidth)}static isPageScrolled(){return window.pageYOffset>0||document.documentElement.scrollTop>0}static isElementVisible(e){const t=window.getComputedStyle(e),s=e.getBoundingClientRect();return!t||this.hasTransparentText(e)?!1:!(t.display==="none"||t.visibility==="hidden"||t.opacity==="0"||s.width===0||s.height===0)}static hasTransparentText(e){const t=window.getComputedStyle(e);if(!t)return!1;const s=t.color||"",l=t.filter||"";return!!(s==="transparent"||s.match(/rgba\(\d+,\s*\d+,\s*\d+,\s*0\)/)||s.match(/hsla\(\d+,\s*\d+%,\s*\d+%,\s*0\)/)||s.match(/#[0-9a-fA-F]{6}00/)||l.includes("opacity(0)"))}},E=_,F=class{constructor(e,t){this.config=e,this.performanceImages=[],this.logger=t}async run(){try{const e=this._generateLcpCandidates(1/0);e&&(this._initWithFirstElementWithInfo(e),this._fillATFWithoutDuplications(e))}catch(e){this.errorCode="script_error",this.logger.logMessage("Script Error: "+e)}}_generateLcpCandidates(e){const t=document.querySelectorAll(this.config.elements);return t.length<=0?[]:Array.from(t).map(r=>{if(r.nodeName.toLowerCase()==="img"&&r.parentElement.nodeName.toLowerCase()==="picture")return null;let i;if(r.nodeName.toLowerCase()==="picture"){const o=r.querySelector("img");if(o)i=o.getBoundingClientRect();else return null}else i=r.getBoundingClientRect();return{element:r,rect:i}}).filter(r=>r!==null).filter(r=>r.rect.width>0&&r.rect.height>0&&E.isIntersecting(r.rect)&&E.isElementVisible(r.element)).map(r=>({item:r,area:this._getElementArea(r.rect),elementInfo:this._getElementInfo(r.element)})).sort((r,i)=>i.area-r.area).slice(0,e).map(r=>({element:r.item.element,elementInfo:r.elementInfo}))}_getElementArea(e){const t=Math.min(e.width,(window.innerWidth||document.documentElement.clientWidth)-e.left),s=Math.min(e.height,(window.innerHeight||document.documentElement.clientHeight)-e.top);return t*s}_getElementInfo(e){const t=e.nodeName.toLowerCase(),s={type:"",src:"",srcset:"",sizes:"",sources:[],bg_set:[],current_src:""},l=/url\(\s*?['"]?\s*?(.+?)\s*?["']?\s*?\)/ig;if(t==="img"&&e.srcset)s.type="img-srcset",s.src=e.src,s.srcset=e.srcset,s.sizes=e.sizes,s.current_src=e.currentSrc;else if(t==="img")s.type="img",s.src=e.src,s.current_src=e.currentSrc;else if(t==="video"){s.type="img";const r=e.querySelector("source");s.src=e.poster||(r?r.src:""),s.current_src=s.src}else if(t==="svg"){const r=e.querySelector("image");r&&(s.type="img",s.src=r.getAttribute("href")||"",s.current_src=s.src)}else if(t==="picture"){s.type="picture";const r=e.querySelector("img");s.src=r?r.src:"",s.sources=Array.from(e.querySelectorAll("source")).map(i=>({srcset:i.srcset||"",media:i.media||"",type:i.type||"",sizes:i.sizes||""}))}else{const i=[window.getComputedStyle(e,null).getPropertyValue("background-image"),getComputedStyle(e,":after").getPropertyValue("background-image"),getComputedStyle(e,":before").getPropertyValue("background-image")].filter(a=>a!=="none");if(i.length===0)return null;const o=i[0];if(s.type="bg-img",o.includes("image-set(")&&(s.type="bg-img-set"),!o||o===""||o.includes("data:image"))return null;const n=[...o.matchAll(l)];if(s.bg_set=n.map(a=>a[1]?{src:a[1].trim()+(a[2]?" "+a[2].trim():"")}:{}),s.bg_set.every(a=>a.src==="")&&(s.bg_set=n.map(a=>a[1]?{src:a[1].trim()}:{})),s.bg_set.length<=0)return null;s.bg_set.length>0&&(s.src=s.bg_set[0].src,s.type==="bg-img-set"&&(s.src=s.bg_set))}return s}_initWithFirstElementWithInfo(e){const t=e.find(s=>s.elementInfo!==null&&(s.elementInfo.src||s.elementInfo.srcset));if(!t){this.logger.logMessage("No LCP candidate found."),this.performanceImages=[];return}this.performanceImages=[{...t.elementInfo,label:"lcp"}]}_fillATFWithoutDuplications(e){e.forEach(({element:t,elementInfo:s})=>{this._isDuplicateImage(t)||!s||this.performanceImages.push({...s,label:"above-the-fold"})})}_isDuplicateImage(e){const t=this._getElementInfo(e);if(t===null)return!1;const s=t.type==="img"||t.type==="img-srcset"||t.type==="video",l=t.type==="bg-img"||t.type==="bg-img-set"||t.type==="picture";return(s||l)&&this.performanceImages.some(r=>r.src===t.src)}getResults(){return this.performanceImages}},C=F,x=class{constructor(e,t){this.config=e,this.logger=t,this.lazyRenderElements=[]}async run(){try{const e=this._getLazyRenderElements();e&&this._processElements(e)}catch(e){this.errorCode="script_error",this.logger.logMessage("Script Error: "+e)}}_getLazyRenderElements(){const e=document.querySelectorAll("[data-rocket-location-hash]"),t=this._getSvgUseTargets();return e.length<=0?[]:Array.from(e).filter(l=>this._skipElement(l)?!1:t.includes(l)?(this.logger.logColoredMessage(`Element skipped because of SVG: ${l.tagName}`,"orange"),!1):!0).map(l=>({element:l,depth:this._getElementDepth(l),distance:this._getElementDistance(l),hash:this._getLocationHash(l)}))}_getElementDepth(e){let t=0,s=e.parentElement;for(;s;)t++,s=s.parentElement;return t}_getElementDistance(e){const t=e.getBoundingClientRect(),s=window.pageYOffset||document.documentElement.scrollTop;return Math.max(0,t.top+s-E.getScreenHeight())}_skipElement(e){const t=this.config.skipStrings||["memex"];return!e||!e.id?!1:t.some(s=>e.id.toLowerCase().includes(s.toLowerCase()))}_shouldSkipElement(e,t){if(!e)return!1;for(let s=0;s<t.length;s++){const[l,r]=t[s],i=e.getAttribute(l);if(i&&new RegExp(r,"i").test(i))return!0}return!1}_checkLcrConflict(e){const t=[],s=window.getComputedStyle(e),r=["marginTop","marginRight","marginBottom","marginLeft"].some(o=>parseFloat(s[o])<0);return(r||s.contentVisibility==="auto"||s.contentVisibility==="hidden")&&t.push({element:e,conflicts:[r&&"negative margin",s.contentVisibility==="auto"&&"content-visibility:auto",s.contentVisibility==="hidden"&&"content-visibility:hidden"].filter(Boolean)}),Array.from(e.children).forEach(o=>{const n=window.getComputedStyle(o),c=["marginTop","marginRight","marginBottom","marginLeft"].some(g=>parseFloat(n[g])<0);(c||n.position==="absolute"||n.position==="fixed")&&t.push({element:o,conflicts:[c&&"negative margin",n.position==="absolute"&&"position:absolute",n.position==="fixed"&&"position:fixed"].filter(Boolean)})}),t}_processElements(e){e.forEach(({element:t,depth:s,distance:l,hash:r})=>{if(this._shouldSkipElement(t,this.config.exclusions||[])||r==="No hash detected")return;const i=this._checkLcrConflict(t);if(i.length>0){this.logger.logMessage("Skipping element due to conflicts:",i);return}const o=t.parentElement&&this._getElementDistance(t.parentElement)<this.config.lrc_threshold&&l>=this.config.lrc_threshold,n=o?"green":l===0?"red":"";this.logger.logColoredMessage(`${"	".repeat(s)}${t.tagName} (Depth: ${s}, Distance from viewport bottom: ${l}px)`,n),this.logger.logColoredMessage(`${"	".repeat(s)}Location hash: ${r}`,n),this.logger.logColoredMessage(`${"	".repeat(s)}Dimensions Client Height: ${t.clientHeight}`,n),o&&(this.lazyRenderElements.push(r),this.logger.logMessage(`Element pushed with hash: ${r}`))})}_getXPath(e){return e&&e.id!==""?`//*[@id="${e.id}"]`:this._getElementXPath(e)}_getElementXPath(e){if(e===document.body)return"/html/body";const t=this._getElementPosition(e);return`${this._getElementXPath(e.parentNode)}/${e.nodeName.toLowerCase()}[${t}]`}_getElementPosition(e){let t=1,s=e.previousElementSibling;for(;s;)s.nodeName===e.nodeName&&t++,s=s.previousElementSibling;return t}_getLocationHash(e){return e.hasAttribute("data-rocket-location-hash")?e.getAttribute("data-rocket-location-hash"):"No hash detected"}_getSvgUseTargets(){const e=document.querySelectorAll("use"),t=new Set;return e.forEach(s=>{let l=s.parentElement;for(;l&&l!==document.body;)t.add(l),l=l.parentElement}),Array.from(t)}getResults(){return this.lazyRenderElements}},v=x,M=class{constructor(e,t){this.config=e,this.logger=t,this.aboveTheFoldFonts=[];const s=(Array.isArray(this.config.processed_extensions)&&this.config.processed_extensions.length>0?this.config.processed_extensions:["woff","woff2","ttf"]).map(l=>l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|");this.FONT_FILE_REGEX=new RegExp(`\\.(${s})(\\?.*)?$`,"i"),this.EXCLUDED_TAG_NAMES=new Set(["BASE","HEAD","LINK","META","STYLE","TITLE","SCRIPT","IMG","VIDEO","AUDIO","EMBED","OBJECT","IFRAME","NOSCRIPT","TEMPLATE","SLOT","CANVAS","SOURCE","TRACK","PARAM","USE","SYMBOL","BR","HR","WBR","APPLET","ACRONYM","BGSOUND","BIG","BLINK","CENTER","FONT","FRAME","FRAMESET","MARQUEE","NOFRAMES","STRIKE","TT","U","XMP"])}isUrlExcludedFromExternalProcessing(e){if(!e)return!1;const t=this.config.external_font_exclusions||[],s=this.config.preload_fonts_exclusions||[];return[...t,...s].some(r=>e.includes(r))}isExcluded(e,t){const s=this.config.preload_fonts_exclusions,l=new Set(s);return!!(l.has(e)||s.some(r=>e.includes(r))||Array.isArray(t)&&t.length>0&&(t.some(r=>l.has(r))||t.some(r=>s.some(i=>r.includes(i)))))}canElementBeStyledWithFontFamily(e){return!this.EXCLUDED_TAG_NAMES.has(e.tagName)}isElementVisible(e){return E.isElementVisible(e)}cleanUrl(e){try{return e=e.split("?")[0].split("#")[0],new URL(e,window.location.href).href}catch{return e}}async externalStylesheetsDoc(){function e(o){const n={};function a(h){if(!h)return null;const g=h.match(/url\s*\(\s*(['"]?)(.+?)\1\s*\)/);return g?g[2]:null}function c(h){return h?h.replace(/^['"]+|['"]+$/g,"").trim():""}return!o||!Array.isArray(o)?(console.warn("generateFontPairsFromStyleSheets: Input is not a valid array. Received:",o),n):(o.length===0||o.forEach(h=>{if(h&&h.cssRules)try{for(const g of h.cssRules)if(g.type===CSSRule.FONT_FACE_RULE){const u=g,m=c(u.style.getPropertyValue("font-family")),d=u.style.getPropertyValue("font-weight")||"normal",f=u.style.getPropertyValue("font-style")||"normal",p=u.style.getPropertyValue("src"),y=a(p);if(m&&y){const S={family:m,weight:d,style:f};n[y]||(n[y]=[]),n[y].some(w=>w.family===S.family&&w.weight===S.weight&&w.style===S.style)||n[y].push(S)}}}catch(g){console.warn("Error processing CSS rules from a stylesheet:",g,h)}else h&&!h.cssRules&&console.warn("Skipping a stylesheet as its cssRules are not accessible or it is empty:",h)}),n)}const t=[...document.querySelectorAll('link[rel="stylesheet"]')].filter(o=>{try{const n=new URL(o.href),a=new URL(window.location.href);return n.origin===a.origin?!1:!this.isUrlExcludedFromExternalProcessing(o.href)}catch{return!1}});if(t.length===0)return this.logger.logMessage("No external CSS links found to process."),{styleSheets:[],fontPairs:{}};const s=t.map(o=>fetch(o.href,{mode:"cors"}).then(n=>n.ok?n.text():(console.warn(`Failed to fetch external CSS from ${o.href}: ${n.status} ${n.statusText}`),null)).catch(n=>(console.error(`Network error fetching external CSS from ${o.href}:`,n),null))),l=await Promise.all(s),r=[];l.forEach(o=>{if(o&&o.trim()!=="")try{const n=new CSSStyleSheet;n.replaceSync(o),r.push(n)}catch(n){console.error("Could not parse fetched CSS into a stylesheet:",n,`
CSS (first 200 chars): ${o.substring(0,200)}...`)}}),r.length>0?this.logger.logMessage(`[Beacon] ${r.length} stylesheet(s) fetched and parsed into CSSStyleSheet objects.`):this.logger.logMessage("[Beacon] No stylesheets were successfully parsed from the fetched CSS.");const i=e(r);return{styleSheets:r,fontPairs:i}}async _initializeExternalFontSheets(){this.logger.logMessage("Initializing external font stylesheets...");try{const e=await this.externalStylesheetsDoc();this.externalParsedSheets=e.styleSheets||[],this.externalParsedPairs=e.fontPairs||[],this.logger.logMessage(`Successfully parsed ${this.externalParsedSheets.length} external font stylesheets.`)}catch(e){this.logger.logMessage("Error initializing external font stylesheets:",e),this.externalParsedSheets=[]}}getNetworkLoadedFonts(){return new Map(window.performance.getEntriesByType("resource").filter(e=>this.FONT_FILE_REGEX.test(e.name)).map(e=>[this.cleanUrl(e.name),e.name]))}async getFontFaceRules(){const e={},t=new Set,s=(n,a=null)=>{const c=n.style.getPropertyValue("src"),h=n.style.getPropertyValue("font-family").replace(/['"]/g,"").trim(),g=n.style.getPropertyValue("font-weight")||"400",u=n.style.getPropertyValue("font-style")||"normal";e[h]||(e[h]={urls:[],variations:new Set});const d=(f=>{if(!f)return null;const p=f.match(/url\s*\(\s*(['"]?)(.+?)\1\s*\)/);return p?p[2]:null})(c);if(d){let f=d;a&&(f=new URL(f,a).href);const p=this.cleanUrl(f);e[h].urls.includes(p)||(e[h].urls.push(p),e[h].variations.add(JSON.stringify({weight:g,style:u})))}},l=async n=>{try{const a=n.href;if(this.isUrlExcludedFromExternalProcessing(a)||t.has(a))return;t.add(a);const c=await fetch(a,{mode:"cors"});if(!c.ok){this.logger.logMessage(`Failed to fetch @import CSS: ${c.status}`);return}const h=await c.text(),g=new CSSStyleSheet;g.replaceSync(h),Array.from(g.cssRules||[]).forEach(u=>{u instanceof CSSFontFaceRule&&s(u,a)})}catch(a){this.logger.logMessage(`Error processing @import rule: ${a.message}`)}},r=async n=>{try{const a=Array.from(n.cssRules||[]);for(const c of a)c instanceof CSSFontFaceRule?s(c,n.href):c instanceof CSSImportRule?c.styleSheet?await r(c.styleSheet):await l(c):c.styleSheet&&await r(c.styleSheet)}catch(a){if(a.name==="SecurityError"&&n.href){if(this.isUrlExcludedFromExternalProcessing(n.href)||t.has(n.href))return;t.add(n.href);try{const c=await fetch(n.href,{mode:"cors"});if(c.ok){const h=await c.text(),g=new CSSStyleSheet;g.replaceSync(h),Array.from(g.cssRules||[]).forEach(d=>{d instanceof CSSFontFaceRule&&s(d,n.href)});const u=/@import\s+url\(['"]?([^'")]+)['"]?\);?/g;let m;for(;(m=u.exec(h))!==null;){const d=new URL(m[1],n.href).href;if(!this.isUrlExcludedFromExternalProcessing(d)&&!t.has(d)){t.add(d);try{const f=await fetch(d,{mode:"cors"});if(f.ok){const p=await f.text(),y=new CSSStyleSheet;y.replaceSync(p),Array.from(y.cssRules||[]).forEach(S=>{S instanceof CSSFontFaceRule&&s(S,d)})}}catch(f){this.logger.logMessage(`Error fetching @import ${d}: ${f.message}`)}}}}}catch(c){this.logger.logMessage(`Error fetching stylesheet ${n.href}: ${c.message}`)}}else this.logger.logMessage(`Error processing stylesheet: ${a.message}`)}},i=Array.from(document.styleSheets);for(const n of i)await r(n);const o=document.querySelectorAll("style");for(const n of o){const a=n.textContent||n.innerHTML||"",c=/@import\s+url\s*\(\s*['"]?([^'")]+)['"]?\s*\)\s*;?/g;let h;for(;(h=c.exec(a))!==null;){const g=h[1];if(!this.isUrlExcludedFromExternalProcessing(g)&&!t.has(g)){t.add(g);try{const u=await fetch(g,{mode:"cors"});if(u.ok){const m=await u.text(),d=new CSSStyleSheet;d.replaceSync(m),Array.from(d.cssRules||[]).forEach(f=>{f instanceof CSSFontFaceRule&&s(f,g)})}}catch(u){this.logger.logMessage(`Error fetching inline @import ${g}: ${u.message}`)}}}}return Object.values(e).forEach(n=>{n.variations=Array.from(n.variations).map(a=>JSON.parse(a))}),e}isElementAboveFold(e){if(!this.isElementVisible(e))return!1;const t=e.getBoundingClientRect(),s=window.pageYOffset||document.documentElement.scrollTop,l=t.top+s,r=window.innerHeight||document.documentElement.clientHeight;return l<=r}canElementBeProcessed(e){return this.canElementBeStyledWithFontFamily(e)&&this.isElementAboveFold(e)}async run(){await document.fonts.ready,await this._initializeExternalFontSheets();const e=this.getNetworkLoadedFonts(),t=await this.getFontFaceRules(),s=new Map,l=await this.processExternalFonts(this.externalParsedPairs);Array.from(document.getElementsByTagName("*")).filter(o=>this.canElementBeProcessed(o)).forEach(o=>{const n=(a,c=null)=>{if(!a||!this.isElementVisible(o))return;const h=a.fontFamily.split(",")[0].replace(/['"]+/g,"").trim();if((c?a.content!=="none"&&a.content!=='""':o.textContent.trim())&&t[h]){let u=t[h].urls;!this.isExcluded(h,u)&&!s.has(h)&&(s.set(h,{elements:new Set,urls:u,variations:t[h].variations}),s.get(h).elements.add(o))}};try{n(window.getComputedStyle(o)),["::before","::after"].forEach(a=>{n(window.getComputedStyle(o,a),a)})}catch(a){this.logger.logMessage("Error processing element:",a)}});const i=this.summarizeMatches(l,s,e);if(!Object.keys(i.allFonts).length&&!Object.keys(i.externalFonts).length&&!Object.keys(i.hostedFonts).length){this.logger.logMessage("No fonts found above the fold.");return}this.logger.logMessage("Above the fold fonts:",i),this.aboveTheFoldFonts=[...new Set(Object.values(i.allFonts).flatMap(o=>o.variations.map(n=>n.url)))]}summarizeMatches(e,t,s){const l={},r={};return t.size>0&&t.forEach((i,o)=>{if(i.variations){const n=Array.from(i.elements),a=n.filter(h=>this.isElementAboveFold(h)),c=n.filter(h=>!this.isElementAboveFold(h));i.variations.forEach(h=>{let g=null;for(const u of i.urls){const m=this.cleanUrl(u);if(s.has(m)){g=s.get(m);break}}g&&(l[o]||(l[o]={type:"hosted",variations:[],elementCount:{aboveFold:a.length,belowFold:c.length,total:n.length},urlCount:{aboveFold:new Set,belowFold:new Set}}),l[o].variations.push({weight:h.weight,style:h.style,url:g,elementCount:{aboveFold:a.length,belowFold:c.length,total:n.length}}),a.length>0&&l[o].urlCount.aboveFold.add(g),c.length>0&&l[o].urlCount.belowFold.add(g))}),l[o]&&(r[o]={variations:l[o].variations,elementCount:{...l[o].elementCount},urlCount:{...l[o].urlCount}})}}),Object.keys(e).length>0&&Object.entries(e).forEach(([i,o])=>{const n=Array.from(o.elements).filter(c=>this.isElementAboveFold(c)),a=Array.from(o.elements).filter(c=>!this.isElementAboveFold(c));(o.elementCount.aboveFold>0||n.length>0)&&o.variations.forEach(c=>{l[c.family]||(l[c.family]={type:"external",variations:[],elementCount:{aboveFold:0,belowFold:0,total:0},urlCount:{aboveFold:new Set,belowFold:new Set}}),l[c.family].variations.push({weight:c.weight,style:c.style,url:i,elementCount:{aboveFold:n.length,belowFold:a.length,total:o.elements.length}}),l[c.family].elementCount.aboveFold+=n.length,l[c.family].elementCount.belowFold+=a.length,l[c.family].elementCount.total+=o.elements.length,n.length>0&&l[c.family].urlCount.aboveFold.add(i),a.length>0&&l[c.family].urlCount.belowFold.add(i)})}),Object.values(l).forEach(i=>{i.urlCount={aboveFold:i.urlCount.aboveFold.size,belowFold:i.urlCount.belowFold.size,total:new Set([...i.urlCount.aboveFold,...i.urlCount.belowFold]).size}}),Object.values(r).forEach(i=>{i.urlCount.aboveFold instanceof Set&&(i.urlCount={aboveFold:i.urlCount.aboveFold.size,belowFold:i.urlCount.belowFold.size,total:new Set([...i.urlCount.aboveFold,...i.urlCount.belowFold]).size})}),{externalFonts:Object.fromEntries(Object.entries(e).filter(i=>i[1].elementCount.aboveFold>0)),hostedFonts:r,allFonts:l}}async processExternalFonts(e){const t=new Map,s=Array.from(document.getElementsByTagName("*")).filter(i=>this.canElementBeProcessed(i)),l=new Map;Object.entries(e).forEach(([i,o])=>{o.forEach(n=>{const a=`${n.family}|${n.weight}|${n.style}`;l.set(a,{url:i,...n})})});const r=i=>{const o=i.fontFamily.split(",")[0].replace(/['"]+/g,"").trim(),n=i.fontWeight,a=i.fontStyle,c=`${o}|${n}|${a}`;let h=l.get(c);if(!h&&n!=="400"){const g=`${o}|400|${a}`;h=l.get(g)}return h};return s.forEach(i=>{if(i.textContent.trim()){const o=window.getComputedStyle(i),n=r(o);n&&!this.isExcluded(n.family,[n.url])&&!t.has(n.url)&&(t.set(n.url,{elements:new Set,variations:new Set}),t.get(n.url).elements.add(i),t.get(n.url).variations.add(JSON.stringify({family:n.family,weight:n.weight,style:n.style})))}["::before","::after"].forEach(o=>{const n=window.getComputedStyle(i,o);if(n.content!=="none"&&n.content!=='""'){const a=r(n);a&&!this.isExcluded(a.family,[a.url])&&!t.has(a.url)&&(t.set(a.url,{elements:new Set,variations:new Set}),t.get(a.url).elements.add(i),t.get(a.url).variations.add(JSON.stringify({family:a.family,weight:a.weight,style:a.style})))}})}),Object.fromEntries(Array.from(t.entries()).map(([i,o])=>[i,{elementCount:{aboveFold:Array.from(o.elements).filter(n=>this.isElementAboveFold(n)).length,total:o.elements.size},variations:Array.from(o.variations).map(n=>JSON.parse(n)),elements:Array.from(o.elements)}]))}getResults(){return this.aboveTheFoldFonts}},B=M,A=class{constructor(e,t){this.logger=t,this.result=[],this.excludedPatterns=e.preconnect_external_domain_exclusions,this.eligibleElements=e.preconnect_external_domain_elements,this.matchedItems=new Set,this.excludedItems=new Set}async run(){document.querySelectorAll(`${this.eligibleElements.join(", ")}[src], ${this.eligibleElements.join(", ")}[href], ${this.eligibleElements.join(", ")}[rel], ${this.eligibleElements.join(", ")}[type]`).forEach(t=>this.processElement(t)),this.logger.logMessage({matchedItems:this.getMatchedItems(),excludedItems:Array.from(this.excludedItems)})}processElement(e){try{const t=new URL(e.src||e.href||"",location.href);if(this.isExcluded(e)){this.excludedItems.add(this.createExclusionObject(t,e));return}this.isExternalDomain(t)&&(this.matchedItems.add(`${t.hostname}-${e.tagName.toLowerCase()}`),this.result=[...new Set(this.result.concat(t.origin))])}catch(t){this.logger.logMessage(t)}}isExcluded(e){const t=e.outerHTML.substring(0,e.outerHTML.indexOf(">")+1);return this.excludedPatterns.some(s=>t.includes(s))}isExcludedByDomain(e){return this.excludedPatterns.some(t=>t.type==="domain"&&e.hostname.includes(t.value))}isExternalDomain(e){return e.hostname!==location.hostname&&e.hostname}createExclusionObject(e,t){return{domain:e.hostname,elementType:t.tagName.toLowerCase()}}getMatchedItems(){return Array.from(this.matchedItems).map(e=>{const t=e.lastIndexOf("-");return[e.substring(0,t),e.substring(t+1)]})}getResults(){return this.result}},P=A,R=class{constructor(e){this.enabled=e}logMessage(e,t=""){if(this.enabled){if(t!==""){console.log(e,t);return}console.log(e)}}logColoredMessage(e,t="green"){this.enabled&&console.log(`%c${e}`,`color: ${t};`)}},I=R,T=class{constructor(e){this.config=e,this.lcpBeacon=null,this.lrcBeacon=null,this.preloadFontsBeacon=null,this.preconnectExternalDomainBeacon=null,this.infiniteLoopId=null,this.errorCode="",this.logger=new I(this.config.debug)}async init(){if(this.scriptTimer=new Date,!await this._isValidPreconditions()){this._finalize();return}if(E.isPageScrolled()){this.logger.logMessage("Bailing out because the page has been scrolled"),this._finalize();return}this.infiniteLoopId=setTimeout(()=>{this._handleInfiniteLoop()},1e4);const e=await this._getGeneratedBefore(),t=this.config.status.atf&&(e===!1||e.lcp===!1),s=this.config.status.lrc&&(e===!1||e.lrc===!1),l=this.config.status.preload_fonts&&(e===!1||e.preload_fonts===!1),r=this.config.status.preconnect_external_domain&&(e===!1||e.preconnect_external_domain===!1);t?(this.lcpBeacon=new C(this.config,this.logger),await this.lcpBeacon.run()):this.logger.logMessage("Not running BeaconLcp because data is already available or feature is disabled"),s?(this.lrcBeacon=new v(this.config,this.logger),await this.lrcBeacon.run()):this.logger.logMessage("Not running BeaconLrc because data is already available or feature is disabled"),l?(this.preloadFontsBeacon=new B(this.config,this.logger),await this.preloadFontsBeacon.run()):this.logger.logMessage("Not running BeaconPreloadFonts because data is already available or feature is disabled"),r?(this.preconnectExternalDomainBeacon=new P(this.config,this.logger),await this.preconnectExternalDomainBeacon.run()):this.logger.logMessage("Not running BeaconPreconnectExternalDomain because data is already available or feature is disabled"),t||s||l||r?this._saveFinalResultIntoDB():(this.logger.logMessage("Not saving results into DB as no beacon features ran."),this._finalize())}async _isValidPreconditions(){const e={width:this.config.width_threshold,height:this.config.height_threshold};return E.isNotValidScreensize(this.config.is_mobile,e)?(this.logger.logMessage("Bailing out because screen size is not acceptable"),!1):!0}async _getGeneratedBefore(){if(!E.isPageCached())return!1;let e=new FormData;return e.append("action","rocket_check_beacon"),e.append("rocket_beacon_nonce",this.config.nonce),e.append("url",this.config.url),e.append("is_mobile",this.config.is_mobile),(await fetch(this.config.ajax_url,{method:"POST",credentials:"same-origin",body:e}).then(s=>s.json())).data}_saveFinalResultIntoDB(){const e={lcp:this.lcpBeacon?this.lcpBeacon.getResults():null,lrc:this.lrcBeacon?this.lrcBeacon.getResults():null,preload_fonts:this.preloadFontsBeacon?this.preloadFontsBeacon.getResults():null,preconnect_external_domain:this.preconnectExternalDomainBeacon?this.preconnectExternalDomainBeacon.getResults():null},t=new FormData;t.append("action","rocket_beacon"),t.append("rocket_beacon_nonce",this.config.nonce),t.append("url",this.config.url),t.append("is_mobile",this.config.is_mobile),t.append("status",this._getFinalStatus()),t.append("results",JSON.stringify(e)),fetch(this.config.ajax_url,{method:"POST",credentials:"same-origin",body:t,headers:{"wpr-saas-no-intercept":!0}}).then(s=>s.json()).then(s=>{this.logger.logMessage(s.data.lcp)}).catch(s=>{this.logger.logMessage(s)}).finally(()=>{this._finalize()})}_getFinalStatus(){return this.errorCode!==""?this.errorCode:10<=(new Date-this.scriptTimer)/1e3?"timeout":"success"}_handleInfiniteLoop(){this._saveFinalResultIntoDB()}_finalize(){document.querySelector('[data-name="wpr-wpr-beacon"]').setAttribute("beacon-completed","true"),clearTimeout(this.infiniteLoopId)}},b=T;(e=>{if(!e)return;const t=new b(e);if(document.readyState!=="loading"){setTimeout(()=>{t.init()},e.delay);return}document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{t.init()},e.delay)})})(window.rocket_beacon_data);var L=b})();
;