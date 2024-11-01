import { service } from '../services';
import type { IConfig } from '../types/index';

export const HtmlForm = (config: IConfig) => {
  const {
    userId,
    token,
    referenceNo,
    sendSmsLanguage,
    sendSms,
    macroMerchantId,
  } = config;

  return String.raw`<html>
    <head>
      <title>Register Check Form</title>
      <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
      <meta content="utf-8" http-equiv="encoding">
    </head>
    <body>

      <form action="" method="POST" id="checkMP-form" style="display: none">
        <input type="hidden" name="userId" value="${userId}" />
        <input type="hidden" name="token" value="${token}" />
        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="sendSms" value="${sendSms}" /> 
      </form>

      <form action="" method="POST" id="register-form" style="display: none">
        <!-- MFS Register User Form -->
        <input type="hidden" name="accountAliasName" />
        <input type="hidden" name="rtaPan" />
        <input type="hidden" name="expiryDate" />
        <input type="hidden" name="cvc" />

        <!-- MFS Register Global Form -->
        <input type="hidden" name="msisdn" value="${userId}" />
				<input type="hidden" name="token" value="${token}" />
				<input type="hidden" name="referenceNo" value="${referenceNo}" />
				<input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />

        <input type="hidden" name="sendSms" value="${sendSms}" />
        <input type="hidden" name="actionType" value="A" />
        <input type="hidden" name="clientIp" value="" />
        <input type="hidden" name="delinkReason" value="" />
        <input type="hidden" name="eActionType" value="A" />
        <input type="hidden" name="cardTypeFlag" value="05" />
        <input type="hidden" name="cpinFlag" value="Y" />
 
        <input type="hidden" name="defaultAccount" value="Y" />
        <input type="hidden" name="mmrpConfig" value="110010" />
        <input type="hidden" name="identityVerificationFlag" value="Y" />
        <input type="hidden" name="mobileAccountConfig" value="MWA" />
        <input type="hidden" name="timeZone" value="+01" />
        <input type="hidden" name="uiChannelType" value="6" />
      </form>

      <form action="" method="POST" id="link-form" style="display:none;">
        <input type="hidden" name="msisdn" value="${userId}" />
        <input type="hidden" name="token" value="${token}" />
        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="sendSms" value="${sendSms}" />
      </form>

      <form action="" method="POST" id="direct-purchase-form" style="display:none;">
        <input type="hidden" name="amount" />
        <input type="hidden" name="cardHolderName" />
        <input type="hidden" name="rtaPan" />
        <input type="hidden" name="cvc" />
        <input type="hidden" name="expiryDate" />
        <input type="hidden" name="orderNo" />

        <input type="hidden" name="msisdn" value="${userId}" />
        <input type="hidden" name="token" value="${token}" />
        <input type="hidden" name="macroMerchantId" value="${macroMerchantId}" />
        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="sendSms" value="${sendSms}" />
      </form>

      <form action="" method="POST" id="purchase-and-register-form" style="display:none;">
        <input type="hidden" name="amount" />
        <input type="hidden" name="cardHolderName" />
        <input type="hidden" name="rtaPan" />
        <input type="hidden" name="cvc" />
        <input type="hidden" name="expiryDate" />
        <input type="hidden" name="orderNo" />
        <input type="hidden" name="accountAliasName" />

        <input type="hidden" name="msisdn" value="${userId}" />
        <input type="hidden" name="token" value="${token}" />
        <input type="hidden" name="macroMerchantId" value="${macroMerchantId}" />
        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="sendSms" value="${sendSms}" />
      </form>

      <form action="" method="POST" id="otp-form" style="display: none">
        <input type="hidden" name="validationCode" />
        <input type="hidden" name="token" value="${token}" />

        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSms" value="${sendSms}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="pinType" value="otp" />
      </form>

      <form action="" method="POST" id="mpin-form" style="display: none">
        <input type="hidden" name="validationCode" />
        
        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSms" value="${sendSms}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="pinType" value="mpin" />
      </form>

      <form action="" method="POST" id="delete-form" style="display: none">
        <input type="hidden" name="accountAliasName" />

        <input type="hidden" name="msisdn" value="${userId}" />
        <input type="hidden" name="token" value="${token}" />
        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="sendSms" value="${sendSms}" />
      </form>

      <form action="" method="POST" id="purchase-form" class="form-horizontal" style="display:none">
        <input type="hidden" name="amount" />

        <!-- MFS purchase parameters start -->
        <input type="hidden" name="listAccountName" />
        <input type="hidden" name="msisdn" value="${userId}" />
        <input type="hidden" name="token" value="${token}" />
        <input type="hidden" name="referenceNo" value="${referenceNo}" />
        <input type="hidden" name="sendSmsLanguage" value="${sendSmsLanguage}" />
        <input type="hidden" name="macroMerchantId" value="${macroMerchantId}" />
        <input type="hidden" name="orderNo" value="" />
        <input type="hidden" name="paymentType" value="" />

        <input type="hidden" name="installmentCount" value="" /> (Optional)
        <input type="hidden" name="rewardName" value="" /> (Optional)
        <input type="hidden" name="rewardValue" value="" /> (Optional)
        <input type="hidden" name="cvc" value="" /> (Optional)
          <!-- MFS purchase operation parameters end -->
          
          <!-- MFS constant parameters start -->
        <input type="hidden" name="sendSms" value="N" />
        <input type="hidden" name="aav" value="aav" />
        <input type="hidden" name="clientIp" value="" />
        <input type="hidden" name="encCPin" value="0" />
        <input type="hidden" name="encPassword" value="" />
        <input type="hidden" name="sendSmsMerchant" value="Y" />
        <input type="hidden" name="password" value="" />
          <!-- MFS constant parameters end -->
      </form>

      <script>
        /*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
        !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
      </script>
      <script>${service(config)}</script>
      <script>
      /*! mfs-client 23-12-2020 */

      var dbits,
        superagentLegacyIESupportPlugin = function (t) {
          function i(t) {
            if (t !== Object(t)) return t;
            var e,
              r = [];
            for (e in t) null != t[e] && r.push(encodeURIComponent(e) + '=' + encodeURIComponent(t[e]));
            return r.join('&');
          }
          var e, r;
          ((e = t.url),
            ((r = document.createElement('a')).href = e),
            { hostname: r.hostname, protocol: r.protocol, pathname: r.pathname, queryString: r.search }).hostname !=
            window.location.hostname &&
            'undefined' != typeof XDomainRequest &&
            (t.end = function (t) {
              var e = this,
                r = (this.xhr = new XDomainRequest());
              (r.getAllResponseHeaders = function () {
                return '';
              }),
                (r.getResponseHeader = function (t) {
                  if ('content-type' == t) return 'application/json';
                });
              var n = this._query.join('&'),
                o = this._formData || this._data;
              if (
                ((this._callback = t || noop),
                  (r.onload = function () {
                    (r.status = 200), e.emit('end');
                  }),
                  (r.onerror = function () {
                    return (r.status = 400), e.aborted ? e.timeoutError() : e.crossDomainError();
                  }),
                  (r.onprogress = function () {
                    e.emit('progress', 50);
                  }),
                  (r.ontimeout = function () {
                    return (r.status = 408), e.timeoutError();
                  }),
                  n && ((n = i(n)), (this.url += ~this.url.indexOf('?') ? '&' + n : '?' + n)),
                  'GET' != this.method && 'POST' != this.method)
              )
                throw 'Only Get and Post methods are supported by XDomainRequest object.';
              return (
                r.open(this.method, this.url, !0),
                'POST' == this.method && 'string' != typeof o && (o = i(o)),
                this.emit('request', this),
                r.send(o),
                this
              );
            });
        },
        canary = 0xdeadbeefcafe,
        j_lm = 15715070 == (16777215 & canary);
      function BigInteger(t, e, r) {
        null != t &&
          ('number' == typeof t
            ? this.fromNumber(t, e, r)
            : null == e && 'string' != typeof t
              ? this.fromString(t, 256)
              : this.fromString(t, e));
      }
      function nbi() {
        return new BigInteger(null);
      }
      function am1(t, e, r, n, o, i) {
        for (; 0 <= --i;) {
          var s = e * this[t++] + r[n] + o;
          (o = Math.floor(s / 67108864)), (r[n++] = 67108863 & s);
        }
        return o;
      }
      function am2(t, e, r, n, o, i) {
        for (var s = 32767 & e, a = e >> 15; 0 <= --i;) {
          var u = 32767 & this[t],
            c = this[t++] >> 15,
            l = a * u + c * s;
          (o = ((u = s * u + ((32767 & l) << 15) + r[n] + (1073741823 & o)) >>> 30) + (l >>> 15) + a * c + (o >>> 30)),
            (r[n++] = 1073741823 & u);
        }
        return o;
      }
      function am3(t, e, r, n, o, i) {
        for (var s = 16383 & e, a = e >> 14; 0 <= --i;) {
          var u = 16383 & this[t],
            c = this[t++] >> 14,
            l = a * u + c * s;
          (o = ((u = s * u + ((16383 & l) << 14) + r[n] + o) >> 28) + (l >> 14) + a * c), (r[n++] = 268435455 & u);
        }
        return o;
      }
      (dbits =
        j_lm && 'Microsoft Internet Explorer' == navigator.appName
          ? ((BigInteger.prototype.am = am2), 30)
          : j_lm && 'Netscape' != navigator.appName
            ? ((BigInteger.prototype.am = am1), 26)
            : ((BigInteger.prototype.am = am3), 28)),
        (BigInteger.prototype.DB = dbits),
        (BigInteger.prototype.DM = (1 << dbits) - 1),
        (BigInteger.prototype.DV = 1 << dbits);
      var BI_FP = 52;
      (BigInteger.prototype.FV = Math.pow(2, BI_FP)),
        (BigInteger.prototype.F1 = BI_FP - dbits),
        (BigInteger.prototype.F2 = 2 * dbits - BI_FP);
      for (
        var BI_RM = '0123456789abcdefghijklmnopqrstuvwxyz', BI_RC = new Array(), rr = '0'.charCodeAt(0), vv = 0;
        vv <= 9;
        ++vv
      )
        BI_RC[rr++] = vv;
      for (rr = 'a'.charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
      for (rr = 'A'.charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
      function int2char(t) {
        return BI_RM.charAt(t);
      }
      function intAt(t, e) {
        e = BI_RC[t.charCodeAt(e)];
        return null == e ? -1 : e;
      }
      function bnpCopyTo(t) {
        for (var e = this.t - 1; 0 <= e; --e) t[e] = this[e];
        (t.t = this.t), (t.s = this.s);
      }
      function bnpFromInt(t) {
        (this.t = 1), (this.s = t < 0 ? -1 : 0), 0 < t ? (this[0] = t) : t < -1 ? (this[0] = t + this.DV) : (this.t = 0);
      }
      function nbv(t) {
        var e = nbi();
        return e.fromInt(t), e;
      }
      function bnpFromString(t, e) {
        var r;
        if (16 == e) r = 4;
        else if (8 == e) r = 3;
        else if (256 == e) r = 8;
        else if (2 == e) r = 1;
        else if (32 == e) r = 5;
        else {
          if (4 != e) return void this.fromRadix(t, e);
          r = 2;
        }
        (this.t = 0), (this.s = 0);
        for (var n = t.length, o = !1, i = 0; 0 <= --n;) {
          var s = 8 == r ? 255 & t[n] : intAt(t, n);
          s < 0
            ? '-' == t.charAt(n) && (o = !0)
            : ((o = !1),
              0 == i
                ? (this[this.t++] = s)
                : i + r > this.DB
                  ? ((this[this.t - 1] |= (s & ((1 << (this.DB - i)) - 1)) << i), (this[this.t++] = s >> (this.DB - i)))
                  : (this[this.t - 1] |= s << i),
              (i += r) >= this.DB && (i -= this.DB));
        }
        8 == r && 0 != (128 & t[0]) && ((this.s = -1), 0 < i && (this[this.t - 1] |= ((1 << (this.DB - i)) - 1) << i)),
          this.clamp(),
          o && BigInteger.ZERO.subTo(this, this);
      }
      function bnpClamp() {
        for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;) --this.t;
      }
      function bnToString(t) {
        if (this.s < 0) return '-' + this.negate().toString(t);
        var e;
        if (16 == t) e = 4;
        else if (8 == t) e = 3;
        else if (2 == t) e = 1;
        else if (32 == t) e = 5;
        else {
          if (4 != t) return this.toRadix(t);
          e = 2;
        }
        var r,
          n = (1 << e) - 1,
          o = !1,
          i = '',
          s = this.t,
          a = this.DB - ((s * this.DB) % e);
        if (0 < s--)
          for (a < this.DB && 0 < (r = this[s] >> a) && ((o = !0), (i = int2char(r))); 0 <= s;)
            a < e
              ? ((r = (this[s] & ((1 << a) - 1)) << (e - a)), (r |= this[--s] >> (a += this.DB - e)))
              : ((r = (this[s] >> (a -= e)) & n), a <= 0 && ((a += this.DB), --s)),
              0 < r && (o = !0),
              o && (i += int2char(r));
        return o ? i : '0';
      }
      function bnNegate() {
        var t = nbi();
        return BigInteger.ZERO.subTo(this, t), t;
      }
      function bnAbs() {
        return this.s < 0 ? this.negate() : this;
      }
      function bnCompareTo(t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var r = this.t;
        if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
        for (; 0 <= --r;) if (0 != (e = this[r] - t[r])) return e;
        return 0;
      }
      function nbits(t) {
        var e,
          r = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (r += 16)),
          0 != (e = t >> 8) && ((t = e), (r += 8)),
          0 != (e = t >> 4) && ((t = e), (r += 4)),
          0 != (e = t >> 2) && ((t = e), (r += 2)),
          0 != (e = t >> 1) && ((t = e), (r += 1)),
          r
        );
      }
      function bnBitLength() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
      }
      function bnpDLShiftTo(t, e) {
        for (var r = this.t - 1; 0 <= r; --r) e[r + t] = this[r];
        for (r = t - 1; 0 <= r; --r) e[r] = 0;
        (e.t = this.t + t), (e.s = this.s);
      }
      function bnpDRShiftTo(t, e) {
        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
        (e.t = Math.max(this.t - t, 0)), (e.s = this.s);
      }
      function bnpLShiftTo(t, e) {
        for (
          var r = t % this.DB,
          n = this.DB - r,
          o = (1 << n) - 1,
          i = Math.floor(t / this.DB),
          s = (this.s << r) & this.DM,
          a = this.t - 1;
          0 <= a;
          --a
        )
          (e[a + i + 1] = (this[a] >> n) | s), (s = (this[a] & o) << r);
        for (a = i - 1; 0 <= a; --a) e[a] = 0;
        (e[i] = s), (e.t = this.t + i + 1), (e.s = this.s), e.clamp();
      }
      function bnpRShiftTo(t, e) {
        e.s = this.s;
        var r = Math.floor(t / this.DB);
        if (r >= this.t) e.t = 0;
        else {
          var n = t % this.DB,
            o = this.DB - n,
            i = (1 << n) - 1;
          e[0] = this[r] >> n;
          for (var s = r + 1; s < this.t; ++s) (e[s - r - 1] |= (this[s] & i) << o), (e[s - r] = this[s] >> n);
          0 < n && (e[this.t - r - 1] |= (this.s & i) << o), (e.t = this.t - r), e.clamp();
        }
      }
      function bnpSubTo(t, e) {
        for (var r = 0, n = 0, o = Math.min(t.t, this.t); r < o;)
          (n += this[r] - t[r]), (e[r++] = n & this.DM), (n >>= this.DB);
        if (t.t < this.t) {
          for (n -= t.s; r < this.t;) (n += this[r]), (e[r++] = n & this.DM), (n >>= this.DB);
          n += this.s;
        } else {
          for (n += this.s; r < t.t;) (n -= t[r]), (e[r++] = n & this.DM), (n >>= this.DB);
          n -= t.s;
        }
        (e.s = n < 0 ? -1 : 0), n < -1 ? (e[r++] = this.DV + n) : 0 < n && (e[r++] = n), (e.t = r), e.clamp();
      }
      function bnpMultiplyTo(t, e) {
        var r = this.abs(),
          n = t.abs(),
          o = r.t;
        for (e.t = o + n.t; 0 <= --o;) e[o] = 0;
        for (o = 0; o < n.t; ++o) e[o + r.t] = r.am(0, n[o], e, o, 0, r.t);
        (e.s = 0), e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e);
      }
      function bnpSquareTo(t) {
        for (var e = this.abs(), r = (t.t = 2 * e.t); 0 <= --r;) t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
          var n = e.am(r, e[r], t, 2 * r, 0, 1);
          (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >= e.DV &&
            ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
        }
        0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), (t.s = 0), t.clamp();
      }
      function bnpDivRemTo(t, e, r) {
        var n = t.abs();
        if (!(n.t <= 0)) {
          var o = this.abs();
          if (o.t < n.t) return null != e && e.fromInt(0), void (null != r && this.copyTo(r));
          null == r && (r = nbi());
          var i = nbi(),
            s = this.s,
            a = t.s,
            t = this.DB - nbits(n[n.t - 1]);
          0 < t ? (n.lShiftTo(t, i), o.lShiftTo(t, r)) : (n.copyTo(i), o.copyTo(r));
          var u = i.t,
            c = i[u - 1];
          if (0 != c) {
            var o = c * (1 << this.F1) + (1 < u ? i[u - 2] >> this.F2 : 0),
              l = this.FV / o,
              p = (1 << this.F1) / o,
              f = 1 << this.F2,
              h = r.t,
              d = h - u,
              y = null == e ? nbi() : e;
            for (
              i.dlShiftTo(d, y),
              0 <= r.compareTo(y) && ((r[r.t++] = 1), r.subTo(y, r)),
              BigInteger.ONE.dlShiftTo(u, y),
              y.subTo(i, i);
              i.t < u;
      
            )
              i[i.t++] = 0;
            for (; 0 <= --d;) {
              var m = r[--h] == c ? this.DM : Math.floor(r[h] * l + (r[h - 1] + f) * p);
              if ((r[h] += i.am(0, m, r, d, 0, u)) < m) for (i.dlShiftTo(d, y), r.subTo(y, r); r[h] < --m;) r.subTo(y, r);
            }
            null != e && (r.drShiftTo(u, e), s != a && BigInteger.ZERO.subTo(e, e)),
              (r.t = u),
              r.clamp(),
              0 < t && r.rShiftTo(t, r),
              s < 0 && BigInteger.ZERO.subTo(r, r);
          }
        }
      }
      function bnMod(t) {
        var e = nbi();
        return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(BigInteger.ZERO) && t.subTo(e, e), e;
      }
      function Classic(t) {
        this.m = t;
      }
      function cConvert(t) {
        return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
      }
      function cRevert(t) {
        return t;
      }
      function cReduce(t) {
        t.divRemTo(this.m, null, t);
      }
      function cMulTo(t, e, r) {
        t.multiplyTo(e, r), this.reduce(r);
      }
      function cSqrTo(t, e) {
        t.squareTo(e), this.reduce(e);
      }
      function bnpInvDigit() {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var e = 3 & t;
        return 0 <
          (e =
            ((e =
              ((e = ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) & 255) * (2 - (((65535 & t) * e) & 65535))) &
              65535) *
              (2 - ((t * e) % this.DV))) %
            this.DV)
          ? this.DV - e
          : -e;
      }
      function Montgomery(t) {
        (this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t);
      }
      function montConvert(t) {
        var e = nbi();
        return (
          t.abs().dlShiftTo(this.m.t, e),
          e.divRemTo(this.m, null, e),
          t.s < 0 && 0 < e.compareTo(BigInteger.ZERO) && this.m.subTo(e, e),
          e
        );
      }
      function montRevert(t) {
        var e = nbi();
        return t.copyTo(e), this.reduce(e), e;
      }
      function montReduce(t) {
        for (; t.t <= this.mt2;) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var r = 32767 & t[e],
            n = (r * this.mpl + (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) & t.DM;
          for (t[(r = e + this.m.t)] += this.m.am(0, n, t, e, 0, this.m.t); t[r] >= t.DV;) (t[r] -= t.DV), t[++r]++;
        }
        t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
      }
      function montSqrTo(t, e) {
        t.squareTo(e), this.reduce(e);
      }
      function montMulTo(t, e, r) {
        t.multiplyTo(e, r), this.reduce(r);
      }
      function bnpIsEven() {
        return 0 == (0 < this.t ? 1 & this[0] : this.s);
      }
      function bnpExp(t, e) {
        if (4294967295 < t || t < 1) return BigInteger.ONE;
        var r,
          n = nbi(),
          o = nbi(),
          i = e.convert(this),
          s = nbits(t) - 1;
        for (i.copyTo(n); 0 <= --s;) e.sqrTo(n, o), 0 < (t & (1 << s)) ? e.mulTo(o, i, n) : ((r = n), (n = o), (o = r));
        return e.revert(n);
      }
      function bnModPowInt(t, e) {
        e = new (t < 256 || e.isEven() ? Classic : Montgomery)(e);
        return this.exp(t, e);
      }
      function Arcfour() {
        (this.i = 0), (this.j = 0), (this.S = new Array());
      }
      function ARC4init(t) {
        for (var e, r, n = 0; n < 256; ++n) this.S[n] = n;
        for (n = e = 0; n < 256; ++n)
          (e = (e + this.S[n] + t[n % t.length]) & 255), (r = this.S[n]), (this.S[n] = this.S[e]), (this.S[e] = r);
        (this.i = 0), (this.j = 0);
      }
      function ARC4next() {
        var t;
        return (
          (this.i = (this.i + 1) & 255),
          (this.j = (this.j + this.S[this.i]) & 255),
          (t = this.S[this.i]),
          (this.S[this.i] = this.S[this.j]),
          (this.S[this.j] = t),
          this.S[(t + this.S[this.i]) & 255]
        );
      }
      function prng_newstate() {
        return new Arcfour();
      }
      (Classic.prototype.convert = cConvert),
        (Classic.prototype.revert = cRevert),
        (Classic.prototype.reduce = cReduce),
        (Classic.prototype.mulTo = cMulTo),
        (Classic.prototype.sqrTo = cSqrTo),
        (Montgomery.prototype.convert = montConvert),
        (Montgomery.prototype.revert = montRevert),
        (Montgomery.prototype.reduce = montReduce),
        (Montgomery.prototype.mulTo = montMulTo),
        (Montgomery.prototype.sqrTo = montSqrTo),
        (BigInteger.prototype.copyTo = bnpCopyTo),
        (BigInteger.prototype.fromInt = bnpFromInt),
        (BigInteger.prototype.fromString = bnpFromString),
        (BigInteger.prototype.clamp = bnpClamp),
        (BigInteger.prototype.dlShiftTo = bnpDLShiftTo),
        (BigInteger.prototype.drShiftTo = bnpDRShiftTo),
        (BigInteger.prototype.lShiftTo = bnpLShiftTo),
        (BigInteger.prototype.rShiftTo = bnpRShiftTo),
        (BigInteger.prototype.subTo = bnpSubTo),
        (BigInteger.prototype.multiplyTo = bnpMultiplyTo),
        (BigInteger.prototype.squareTo = bnpSquareTo),
        (BigInteger.prototype.divRemTo = bnpDivRemTo),
        (BigInteger.prototype.invDigit = bnpInvDigit),
        (BigInteger.prototype.isEven = bnpIsEven),
        (BigInteger.prototype.exp = bnpExp),
        (BigInteger.prototype.toString = bnToString),
        (BigInteger.prototype.negate = bnNegate),
        (BigInteger.prototype.abs = bnAbs),
        (BigInteger.prototype.compareTo = bnCompareTo),
        (BigInteger.prototype.bitLength = bnBitLength),
        (BigInteger.prototype.mod = bnMod),
        (BigInteger.prototype.modPowInt = bnModPowInt),
        (BigInteger.ZERO = nbv(0)),
        (BigInteger.ONE = nbv(1)),
        (Arcfour.prototype.init = ARC4init),
        (Arcfour.prototype.next = ARC4next);
      var rng_state,
        rng_psize = 256;
      function rng_seed_int(t) {
        (rng_pool[rng_pptr++] ^= 255 & t),
          (rng_pool[rng_pptr++] ^= (t >> 8) & 255),
          (rng_pool[rng_pptr++] ^= (t >> 16) & 255),
          (rng_pool[rng_pptr++] ^= (t >> 24) & 255),
          rng_psize <= rng_pptr && (rng_pptr -= rng_psize);
      }
      function rng_seed_time() {
        rng_seed_int(new Date().getTime());
      }
      if (null == rng_pool) {
        var rng_pool = new Array(),
          rng_pptr = 0;
        if (window.crypto && window.crypto.getRandomValues) {
          var ua = new Uint8Array(32);
          for (window.crypto.getRandomValues(ua), t = 0; t < 32; ++t) rng_pool[rng_pptr++] = ua[t];
        }
        if ('Netscape' == navigator.appName && navigator.appVersion < '5' && window.crypto)
          for (var z = window.crypto.random(32), t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = 255 & z.charCodeAt(t);
        for (; rng_pptr < rng_psize;)
          (t = Math.floor(65536 * Math.random())), (rng_pool[rng_pptr++] = t >>> 8), (rng_pool[rng_pptr++] = 255 & t);
        (rng_pptr = 0), rng_seed_time();
      }
      function rng_get_byte() {
        if (null == rng_state) {
          for (
            rng_seed_time(), (rng_state = prng_newstate()).init(rng_pool), rng_pptr = 0;
            rng_pptr < rng_pool.length;
            ++rng_pptr
          )
            rng_pool[rng_pptr] = 0;
          rng_pptr = 0;
        }
        return rng_state.next();
      }
      function rng_get_bytes(t) {
        for (var e = 0; e < t.length; ++e) t[e] = rng_get_byte();
      }
      function SecureRandom() { }
      function parseBigInt(t, e) {
        return new BigInteger(t, e);
      }
      function linebrk(t, e) {
        for (var r = '', n = 0; n + e < t.length;) (r += t.substring(n, n + e) + '\n'), (n += e);
        return r + t.substring(n, t.length);
      }
      function byte2Hex(t) {
        return t < 16 ? '0' + t.toString(16) : t.toString(16);
      }
      function pkcs1pad2(t, e) {
        if (e < t.length + 11) return alert('Message too long for RSA'), null;
        for (var r = new Array(), n = t.length - 1; 0 <= n && 0 < e;) {
          var o = t.charCodeAt(n--);
          o < 128
            ? (r[--e] = o)
            : 127 < o && o < 2048
              ? ((r[--e] = (63 & o) | 128), (r[--e] = (o >> 6) | 192))
              : ((r[--e] = (63 & o) | 128), (r[--e] = ((o >> 6) & 63) | 128), (r[--e] = (o >> 12) | 224));
        }
        r[--e] = 0;
        for (var i = new SecureRandom(), s = new Array(); 2 < e;) {
          for (s[0] = 0; 0 == s[0];) i.nextBytes(s);
          r[--e] = s[0];
        }
        return (r[--e] = 2), (r[--e] = 0), new BigInteger(r);
      }
      function RSAKey() {
        (this.n = null),
          (this.e = 0),
          (this.d = null),
          (this.p = null),
          (this.q = null),
          (this.dmp1 = null),
          (this.dmq1 = null),
          (this.coeff = null);
      }
      function RSASetPublic(t, e) {
        null != t && null != e && 0 < t.length && 0 < e.length
          ? ((this.n = parseBigInt(t, 16)), (this.e = parseInt(e, 16)))
          : alert('Invalid RSA public key');
      }
      function RSADoPublic(t) {
        return t.modPowInt(this.e, this.n);
      }
      function RSAEncrypt(t) {
        t = pkcs1pad2(t, (this.n.bitLength() + 7) >> 3);
        if (null == t) return null;
        t = this.doPublic(t);
        if (null == t) return null;
        t = t.toString(16);
        return 0 == (1 & t.length) ? t : '0' + t;
      }
      (SecureRandom.prototype.nextBytes = rng_get_bytes),
        (RSAKey.prototype.doPublic = RSADoPublic),
        (RSAKey.prototype.setPublic = RSASetPublic),
        (RSAKey.prototype.encrypt = RSAEncrypt);
      var b64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        b64padchar = '=';
      function hex2b64(t) {
        for (var e, r = '', n = 0; n + 3 <= t.length; n += 3)
          (e = parseInt(t.substring(n, n + 3), 16)), (r += b64map.charAt(e >> 6) + b64map.charAt(63 & e));
        for (
          n + 1 == t.length
            ? ((e = parseInt(t.substring(n, n + 1), 16)), (r += b64map.charAt(e << 2)))
            : n + 2 == t.length &&
            ((e = parseInt(t.substring(n, n + 2), 16)), (r += b64map.charAt(e >> 2) + b64map.charAt((3 & e) << 4)));
          0 < (3 & r.length);
      
        )
          r += b64padchar;
        return r;
      }
      function b64tohex(t) {
        for (var e, r = '', n = 0, o = 0; o < t.length && t.charAt(o) != b64padchar; ++o)
          (v = b64map.indexOf(t.charAt(o))),
            v < 0 ||
            (n =
              0 == n
                ? ((r += int2char(v >> 2)), (e = 3 & v), 1)
                : 1 == n
                  ? ((r += int2char((e << 2) | (v >> 4))), (e = 15 & v), 2)
                  : 2 == n
                    ? ((r += int2char(e)), (r += int2char(v >> 2)), (e = 3 & v), 3)
                    : ((r += int2char((e << 2) | (v >> 4))), (r += int2char(15 & v)), 0));
        return 1 == n && (r += int2char(e << 2)), r;
      }
      function b64toBA(t) {
        for (var e = b64tohex(t), r = new Array(), n = 0; 2 * n < e.length; ++n)
          r[n] = parseInt(e.substring(2 * n, 2 * n + 2), 16);
        return r;
      }
      !(function (t) {
        'object' == typeof exports && 'undefined' != typeof module
          ? (module.exports = t())
          : 'function' == typeof define && define.amd
            ? define([], t)
            : (('undefined' != typeof window
              ? window
              : 'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                  ? self
                  : this
            ).superagent = t());
      })(function () {
        return (function n(o, i, s) {
          function a(e, t) {
            if (!i[e]) {
              if (!o[e]) {
                var r = 'function' == typeof require && require;
                if (!t && r) return r(e, !0);
                if (u) return u(e, !0);
                throw (((r = new Error("Cannot find module '" + e + "'")).code = 'MODULE_NOT_FOUND'), r);
              }
              (r = i[e] = { exports: {} }),
                o[e][0].call(
                  r.exports,
                  function (t) {
                    return a(o[e][1][t] || t);
                  },
                  r,
                  r.exports,
                  n,
                  o,
                  i,
                  s
                );
            }
            return i[e].exports;
          }
          for (var u = 'function' == typeof require && require, t = 0; t < s.length; t++) a(s[t]);
          return a;
        })(
          {
            1: [
              function (t, e, r) {
                'use strict';
                function n(t) {
                  if (t)
                    return (function (t) {
                      for (var e in n.prototype) t[e] = n.prototype[e];
                      return t;
                    })(t);
                }
                void 0 !== e && (e.exports = n),
                  (n.prototype.on = n.prototype.addEventListener =
                    function (t, e) {
                      return (
                        (this._callbacks = this._callbacks || {}),
                        (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e),
                        this
                      );
                    }),
                  (n.prototype.once = function (t, e) {
                    function r() {
                      this.off(t, r), e.apply(this, arguments);
                    }
                    return (r.fn = e), this.on(t, r), this;
                  }),
                  (n.prototype.off =
                    n.prototype.removeListener =
                    n.prototype.removeAllListeners =
                    n.prototype.removeEventListener =
                    function (t, e) {
                      if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
                        return (this._callbacks = {}), this;
                      var r,
                        n = this._callbacks['$' + t];
                      if (!n) return this;
                      if (1 == arguments.length) return delete this._callbacks['$' + t], this;
                      for (var o = 0; o < n.length; o++)
                        if ((r = n[o]) === e || r.fn === e) {
                          n.splice(o, 1);
                          break;
                        }
                      return 0 === n.length && delete this._callbacks['$' + t], this;
                    }),
                  (n.prototype.emit = function (t) {
                    this._callbacks = this._callbacks || {};
                    for (
                      var e = new Array(arguments.length - 1), r = this._callbacks['$' + t], n = 1;
                      n < arguments.length;
                      n++
                    )
                      e[n - 1] = arguments[n];
                    if (r) for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n) r[n].apply(this, e);
                    return this;
                  }),
                  (n.prototype.listeners = function (t) {
                    return (this._callbacks = this._callbacks || {}), this._callbacks['$' + t] || [];
                  }),
                  (n.prototype.hasListeners = function (t) {
                    return !!this.listeners(t).length;
                  });
              },
              {},
            ],
            2: [
              function (t, e, r) {
                'use strict';
                function l(t) {
                  return (l =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (t) {
                        return typeof t;
                      }
                      : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      })(t);
                }
                (((e.exports = n).default = n).stable = o), (n.stableStringify = o);
                var p = [],
                  f = [];
                function n(t, e, r) {
                  for (
                    !(function t(e, r, n, o) {
                      var i;
                      if ('object' === l(e) && null !== e) {
                        for (i = 0; i < n.length; i++)
                          if (n[i] === e) {
                            var s = Object.getOwnPropertyDescriptor(o, r);
                            return void (void 0 !== s.get
                              ? s.configurable
                                ? (Object.defineProperty(o, r, { value: '[Circular]' }), p.push([o, r, e, s]))
                                : f.push([e, r])
                              : ((o[r] = '[Circular]'), p.push([o, r, e])));
                          }
                        if ((n.push(e), Array.isArray(e))) for (i = 0; i < e.length; i++) t(e[i], i, n, e);
                        else {
                          var a = Object.keys(e);
                          for (i = 0; i < a.length; i++) {
                            var u = a[i];
                            t(e[u], u, n, e);
                          }
                        }
                        n.pop();
                      }
                    })(t, '', [], void 0),
                    r = 0 === f.length ? JSON.stringify(t, e, r) : JSON.stringify(t, i(e), r);
                    0 !== p.length;
      
                  ) {
                    var n = p.pop();
                    4 === n.length ? Object.defineProperty(n[0], n[1], n[3]) : (n[0][n[1]] = n[2]);
                  }
                  return r;
                }
                function h(t, e) {
                  return t < e ? -1 : e < t ? 1 : 0;
                }
                function o(t, e, r) {
                  for (
                    t =
                    (function t(e, r, n, o) {
                      var i;
                      if ('object' === l(e) && null !== e) {
                        for (i = 0; i < n.length; i++)
                          if (n[i] === e) {
                            var s = Object.getOwnPropertyDescriptor(o, r);
                            return void (void 0 !== s.get
                              ? s.configurable
                                ? (Object.defineProperty(o, r, { value: '[Circular]' }), p.push([o, r, e, s]))
                                : f.push([e, r])
                              : ((o[r] = '[Circular]'), p.push([o, r, e])));
                          }
                        if ('function' != typeof e.toJSON) {
                          if ((n.push(e), Array.isArray(e))) for (i = 0; i < e.length; i++) t(e[i], i, n, e);
                          else {
                            var a = {},
                              u = Object.keys(e).sort(h);
                            for (i = 0; i < u.length; i++) {
                              var c = u[i];
                              t(e[c], c, n, e), (a[c] = e[c]);
                            }
                            if (void 0 === o) return a;
                            p.push([o, r, e]), (o[r] = a);
                          }
                          n.pop();
                        }
                      }
                    })(t, '', [], void 0) || t,
                    r = 0 === f.length ? JSON.stringify(t, e, r) : JSON.stringify(t, i(e), r);
                    0 !== p.length;
      
                  ) {
                    var n = p.pop();
                    4 === n.length ? Object.defineProperty(n[0], n[1], n[3]) : (n[0][n[1]] = n[2]);
                  }
                  return r;
                }
                function i(o) {
                  return (
                    (o =
                      void 0 !== o
                        ? o
                        : function (t, e) {
                          return e;
                        }),
                    function (t, e) {
                      if (0 < f.length)
                        for (var r = 0; r < f.length; r++) {
                          var n = f[r];
                          if (n[1] === t && n[0] === e) {
                            (e = '[Circular]'), f.splice(r, 1);
                            break;
                          }
                        }
                      return o.call(this, t, e);
                    }
                  );
                }
              },
              {},
            ],
            3: [
              function (t, e, r) {
                'use strict';
                var n = String.prototype.replace,
                  o = /%20/g,
                  i = t('./utils'),
                  t = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' };
                e.exports = i.assign(
                  {
                    default: t.RFC3986,
                    formatters: {
                      RFC1738: function (t) {
                        return n.call(t, o, '+');
                      },
                      RFC3986: function (t) {
                        return String(t);
                      },
                    },
                  },
                  t
                );
              },
              { './utils': 7 },
            ],
            4: [
              function (t, e, r) {
                'use strict';
                var n = t('./stringify'),
                  o = t('./parse'),
                  t = t('./formats');
                e.exports = { formats: t, parse: o, stringify: n };
              },
              { './formats': 3, './parse': 5, './stringify': 6 },
            ],
            5: [
              function (t, e, r) {
                'use strict';
                function p(t, e) {
                  return t && 'string' == typeof t && e.comma && -1 < t.indexOf(',') ? t.split(',') : t;
                }
                function u(t, e) {
                  var r,
                    n,
                    o,
                    i,
                    s = {},
                    a = e.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
                    t = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                    u = a.split(e.delimiter, t),
                    c = -1,
                    l = e.charset;
                  if (e.charsetSentinel)
                    for (r = 0; r < u.length; ++r)
                      0 === u[r].indexOf('utf8=') &&
                        ('utf8=%E2%9C%93' === u[r] ? (l = 'utf-8') : 'utf8=%26%2310003%3B' === u[r] && (l = 'iso-8859-1'),
                          (c = r),
                          (r = u.length));
                  for (r = 0; r < u.length; ++r)
                    r !== c &&
                      ((i =
                        -1 === (i = -1 === (i = (n = u[r]).indexOf(']=')) ? n.indexOf('=') : i + 1)
                          ? ((o = e.decoder(n, y.decoder, l, 'key')), e.strictNullHandling ? null : '')
                          : ((o = e.decoder(n.slice(0, i), y.decoder, l, 'key')),
                            f.maybeMap(p(n.slice(i + 1), e), function (t) {
                              return e.decoder(t, y.decoder, l, 'value');
                            }))) &&
                        e.interpretNumericEntities &&
                        'iso-8859-1' === l &&
                        (i = i.replace(/&#(\d+);/g, function (t, e) {
                          return String.fromCharCode(parseInt(e, 10));
                        })),
                        -1 < n.indexOf('[]=') && (i = d(i) ? [i] : i),
                        h.call(s, o) ? (s[o] = f.combine(s[o], i)) : (s[o] = i));
                  return s;
                }
                function c(t, e, r, n) {
                  if (t) {
                    var o = r.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
                      i = /(\[[^[\]]*])/g,
                      s = 0 < r.depth && /(\[[^[\]]*])/.exec(o),
                      t = s ? o.slice(0, s.index) : o,
                      a = [];
                    if (t) {
                      if (!r.plainObjects && h.call(Object.prototype, t) && !r.allowPrototypes) return;
                      a.push(t);
                    }
                    for (var u = 0; 0 < r.depth && null !== (s = i.exec(o)) && u < r.depth;) {
                      if (((u += 1), !r.plainObjects && h.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes))
                        return;
                      a.push(s[1]);
                    }
                    return (
                      s && a.push('[' + o.slice(s.index) + ']'),
                      (function (t, e, r, n) {
                        for (var o = n ? e : p(e, r), i = t.length - 1; 0 <= i; --i) {
                          var s,
                            a,
                            u,
                            c = t[i];
                          '[]' === c && r.parseArrays
                            ? (s = [].concat(o))
                            : ((s = r.plainObjects ? Object.create(null) : {}),
                              (a = '[' === c.charAt(0) && ']' === c.charAt(c.length - 1) ? c.slice(1, -1) : c),
                              (u = parseInt(a, 10)),
                              r.parseArrays || '' !== a
                                ? !isNaN(u) && c !== a && String(u) === a && 0 <= u && r.parseArrays && u <= r.arrayLimit
                                  ? ((s = [])[u] = o)
                                  : (s[a] = o)
                                : (s = { 0: o })),
                            (o = s);
                        }
                        return o;
                      })(a, e, r, n)
                    );
                  }
                }
                var f = t('./utils'),
                  h = Object.prototype.hasOwnProperty,
                  d = Array.isArray,
                  y = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    arrayLimit: 20,
                    charset: 'utf-8',
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: f.decode,
                    delimiter: '&',
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1,
                  };
                e.exports = function (t, e) {
                  var r = (function (t) {
                    if (!t) return y;
                    if (null !== t.decoder && void 0 !== t.decoder && 'function' != typeof t.decoder)
                      throw new TypeError('Decoder has to be a function.');
                    if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                      throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
                    var e = (void 0 === t.charset ? y : t).charset;
                    return {
                      allowDots: void 0 === t.allowDots ? y.allowDots : !!t.allowDots,
                      allowPrototypes: ('boolean' == typeof t.allowPrototypes ? t : y).allowPrototypes,
                      arrayLimit: ('number' == typeof t.arrayLimit ? t : y).arrayLimit,
                      charset: e,
                      charsetSentinel: ('boolean' == typeof t.charsetSentinel ? t : y).charsetSentinel,
                      comma: ('boolean' == typeof t.comma ? t : y).comma,
                      decoder: ('function' == typeof t.decoder ? t : y).decoder,
                      delimiter: ('string' == typeof t.delimiter || f.isRegExp(t.delimiter) ? t : y).delimiter,
                      depth: 'number' == typeof t.depth || !1 === t.depth ? +t.depth : y.depth,
                      ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                      interpretNumericEntities: ('boolean' == typeof t.interpretNumericEntities ? t : y)
                        .interpretNumericEntities,
                      parameterLimit: ('number' == typeof t.parameterLimit ? t : y).parameterLimit,
                      parseArrays: !1 !== t.parseArrays,
                      plainObjects: ('boolean' == typeof t.plainObjects ? t : y).plainObjects,
                      strictNullHandling: ('boolean' == typeof t.strictNullHandling ? t : y).strictNullHandling,
                    };
                  })(e);
                  if ('' === t || null == t) return r.plainObjects ? Object.create(null) : {};
                  for (
                    var n = 'string' == typeof t ? u(t, r) : t,
                    o = r.plainObjects ? Object.create(null) : {},
                    i = Object.keys(n),
                    s = 0;
                    s < i.length;
                    ++s
                  )
                    var a = i[s], a = c(a, n[a], r, 'string' == typeof t), o = f.merge(o, a, r);
                  return f.compact(o);
                };
              },
              { './utils': 7 },
            ],
            6: [
              function (t, e, r) {
                'use strict';
                function v(t) {
                  return (v =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (t) {
                        return typeof t;
                      }
                      : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      })(t);
                }
                function T(t, e) {
                  n.apply(t, w(e) ? e : [e]);
                }
                function _(t, e, r, n, o, i, s, a, u, c, l, p, f) {
                  var h = t;
                  if (
                    ('function' == typeof s
                      ? (h = s(e, h))
                      : h instanceof Date
                        ? (h = c(h))
                        : 'comma' === r &&
                        w(h) &&
                        (h = S.maybeMap(h, function (t) {
                          return t instanceof Date ? c(t) : t;
                        }).join(',')),
                      null === h)
                  ) {
                    if (n) return i && !p ? i(e, D.encoder, f, 'key') : e;
                    h = '';
                  }
                  if (
                    ((t = h),
                      'string' == typeof t ||
                      'number' == typeof t ||
                      'boolean' == typeof t ||
                      'symbol' === v(t) ||
                      'bigint' == typeof t ||
                      S.isBuffer(h))
                  )
                    return i
                      ? [l(p ? e : i(e, D.encoder, f, 'key')) + '=' + l(i(h, D.encoder, f, 'value'))]
                      : [l(e) + '=' + l(String(h))];
                  var d,
                    y = [];
                  if (void 0 === h) return y;
                  d = w(s) ? s : ((t = Object.keys(h)), a ? t.sort(a) : t);
                  for (var m = 0; m < d.length; ++m) {
                    var g = d[m],
                      b = h[g];
                    (o && null === b) ||
                      ((g = w(h) ? ('function' == typeof r ? r(e, g) : e) : e + (u ? '.' + g : '[' + g + ']')),
                        T(y, _(b, g, r, n, o, i, s, a, u, c, l, p, f)));
                  }
                  return y;
                }
                var S = t('./utils'),
                  c = t('./formats'),
                  l = Object.prototype.hasOwnProperty,
                  p = {
                    brackets: function (t) {
                      return t + '[]';
                    },
                    comma: 'comma',
                    indices: function (t, e) {
                      return t + '[' + e + ']';
                    },
                    repeat: function (t) {
                      return t;
                    },
                  },
                  w = Array.isArray,
                  n = Array.prototype.push,
                  o = Date.prototype.toISOString,
                  t = c.default,
                  D = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: 'utf-8',
                    charsetSentinel: !1,
                    delimiter: '&',
                    encode: !0,
                    encoder: S.encode,
                    encodeValuesOnly: !1,
                    format: t,
                    formatter: c.formatters[t],
                    indices: !1,
                    serializeDate: function (t) {
                      return o.call(t);
                    },
                    skipNulls: !1,
                    strictNullHandling: !1,
                  };
                e.exports = function (t, e) {
                  var r = t,
                    n = (function (t) {
                      if (!t) return D;
                      if (null !== t.encoder && void 0 !== t.encoder && 'function' != typeof t.encoder)
                        throw new TypeError('Encoder has to be a function.');
                      var e = t.charset || D.charset;
                      if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
                      var r = c.default;
                      if (void 0 !== t.format) {
                        if (!l.call(c.formatters, t.format)) throw new TypeError('Unknown format option provided.');
                        r = t.format;
                      }
                      var n = c.formatters[r],
                        r = D.filter;
                      return (
                        ('function' != typeof t.filter && !w(t.filter)) || (r = t.filter),
                        {
                          addQueryPrefix: ('boolean' == typeof t.addQueryPrefix ? t : D).addQueryPrefix,
                          allowDots: void 0 === t.allowDots ? D.allowDots : !!t.allowDots,
                          charset: e,
                          charsetSentinel: ('boolean' == typeof t.charsetSentinel ? t : D).charsetSentinel,
                          delimiter: (void 0 === t.delimiter ? D : t).delimiter,
                          encode: ('boolean' == typeof t.encode ? t : D).encode,
                          encoder: ('function' == typeof t.encoder ? t : D).encoder,
                          encodeValuesOnly: ('boolean' == typeof t.encodeValuesOnly ? t : D).encodeValuesOnly,
                          filter: r,
                          formatter: n,
                          serializeDate: ('function' == typeof t.serializeDate ? t : D).serializeDate,
                          skipNulls: ('boolean' == typeof t.skipNulls ? t : D).skipNulls,
                          sort: 'function' == typeof t.sort ? t.sort : null,
                          strictNullHandling: ('boolean' == typeof t.strictNullHandling ? t : D).strictNullHandling,
                        }
                      );
                    })(e);
                  'function' == typeof n.filter ? (r = (0, n.filter)('', r)) : w(n.filter) && (s = n.filter);
                  var o = [];
                  if ('object' !== v(r) || null === r) return '';
                  t = e && e.arrayFormat in p ? e.arrayFormat : !(e && 'indices' in e) || e.indices ? 'indices' : 'repeat';
                  var i = p[t],
                    s = s || Object.keys(r);
                  n.sort && s.sort(n.sort);
                  for (var a = 0; a < s.length; ++a) {
                    var u = s[a];
                    (n.skipNulls && null === r[u]) ||
                      T(
                        o,
                        _(
                          r[u],
                          u,
                          i,
                          n.strictNullHandling,
                          n.skipNulls,
                          n.encode ? n.encoder : null,
                          n.filter,
                          n.sort,
                          n.allowDots,
                          n.serializeDate,
                          n.formatter,
                          n.encodeValuesOnly,
                          n.charset
                        )
                      );
                  }
                  (e = o.join(n.delimiter)), (t = !0 === n.addQueryPrefix ? '?' : '');
                  return (
                    n.charsetSentinel &&
                    ('iso-8859-1' === n.charset ? (t += 'utf8=%26%2310003%3B&') : (t += 'utf8=%E2%9C%93&')),
                    0 < e.length ? t + e : ''
                  );
                };
              },
              { './formats': 3, './utils': 7 },
            ],
            7: [
              function (t, e, r) {
                'use strict';
                function l(t) {
                  return (l =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (t) {
                        return typeof t;
                      }
                      : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      })(t);
                }
                function s(t, e) {
                  for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n)
                    void 0 !== t[n] && (r[n] = t[n]);
                  return r;
                }
                function a(n, o, i) {
                  if (!o) return n;
                  if ('object' !== l(o)) {
                    if (p(n)) n.push(o);
                    else {
                      if (!n || 'object' !== l(n)) return [n, o];
                      ((i && (i.plainObjects || i.allowPrototypes)) || !u.call(Object.prototype, o)) && (n[o] = !0);
                    }
                    return n;
                  }
                  if (!n || 'object' !== l(n)) return [n].concat(o);
                  var t = n;
                  return (
                    p(n) && !p(o) && (t = s(n, i)),
                    p(n) && p(o)
                      ? (o.forEach(function (t, e) {
                        var r;
                        u.call(n, e)
                          ? (r = n[e]) && 'object' === l(r) && t && 'object' === l(t)
                            ? (n[e] = a(r, t, i))
                            : n.push(t)
                          : (n[e] = t);
                      }),
                        n)
                      : Object.keys(o).reduce(function (t, e) {
                        var r = o[e];
                        return u.call(t, e) ? (t[e] = a(t[e], r, i)) : (t[e] = r), t;
                      }, t)
                  );
                }
                var u = Object.prototype.hasOwnProperty,
                  p = Array.isArray,
                  c = (function () {
                    for (var t = [], e = 0; e < 256; ++e) t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
                    return t;
                  })();
                e.exports = {
                  arrayToObject: s,
                  assign: function (t, r) {
                    return Object.keys(r).reduce(function (t, e) {
                      return (t[e] = r[e]), t;
                    }, t);
                  },
                  combine: function (t, e) {
                    return [].concat(t, e);
                  },
                  compact: function (t) {
                    for (var e = [{ obj: { o: t }, prop: 'o' }], r = [], n = 0; n < e.length; ++n)
                      for (var o = e[n], i = o.obj[o.prop], s = Object.keys(i), a = 0; a < s.length; ++a) {
                        var u = s[a],
                          c = i[u];
                        'object' === l(c) && null !== c && -1 === r.indexOf(c) && (e.push({ obj: i, prop: u }), r.push(c));
                      }
                    return (
                      (function (t) {
                        for (; 1 < t.length;) {
                          var e = t.pop(),
                            r = e.obj[e.prop];
                          if (p(r)) {
                            for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                            e.obj[e.prop] = n;
                          }
                        }
                      })(e),
                      t
                    );
                  },
                  decode: function (t, e, r) {
                    var n = t.replace(/\+/g, ' ');
                    if ('iso-8859-1' === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                      return decodeURIComponent(n);
                    } catch (t) {
                      return n;
                    }
                  },
                  encode: function (t, e, r) {
                    if (0 === t.length) return t;
                    var n = t;
                    if (
                      ('symbol' === l(t) ? (n = Symbol.prototype.toString.call(t)) : 'string' != typeof t && (n = String(t)),
                        'iso-8859-1' === r)
                    )
                      return escape(n).replace(/%u[0-9a-f]{4}/gi, function (t) {
                        return '%26%23' + parseInt(t.slice(2), 16) + '%3B';
                      });
                    for (var o = '', i = 0; i < n.length; ++i) {
                      var s = n.charCodeAt(i);
                      45 === s ||
                        46 === s ||
                        95 === s ||
                        126 === s ||
                        (48 <= s && s <= 57) ||
                        (65 <= s && s <= 90) ||
                        (97 <= s && s <= 122)
                        ? (o += n.charAt(i))
                        : s < 128
                          ? (o += c[s])
                          : s < 2048
                            ? (o += c[192 | (s >> 6)] + c[128 | (63 & s)])
                            : s < 55296 || 57344 <= s
                              ? (o += c[224 | (s >> 12)] + c[128 | ((s >> 6) & 63)] + c[128 | (63 & s)])
                              : ((i += 1),
                                (s = 65536 + (((1023 & s) << 10) | (1023 & n.charCodeAt(i)))),
                                (o +=
                                  c[240 | (s >> 18)] + c[128 | ((s >> 12) & 63)] + c[128 | ((s >> 6) & 63)] + c[128 | (63 & s)]));
                    }
                    return o;
                  },
                  isBuffer: function (t) {
                    return (
                      !(!t || 'object' !== l(t)) && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
                    );
                  },
                  isRegExp: function (t) {
                    return '[object RegExp]' === Object.prototype.toString.call(t);
                  },
                  maybeMap: function (t, e) {
                    if (p(t)) {
                      for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
                      return r;
                    }
                    return e(t);
                  },
                  merge: a,
                };
              },
              {},
            ],
            8: [
              function (t, e, r) {
                'use strict';
                function n(t) {
                  return (
                    (function (t) {
                      if (Array.isArray(t)) return o(t);
                    })(t) ||
                    (function (t) {
                      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                      if (!t) return;
                      if ('string' == typeof t) return o(t, e);
                      var r = Object.prototype.toString.call(t).slice(8, -1);
                      'Object' === r && t.constructor && (r = t.constructor.name);
                      if ('Map' === r || 'Set' === r) return Array.from(t);
                      if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e);
                    })(t) ||
                    (function () {
                      throw new TypeError(
                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })()
                  );
                }
                function o(t, e) {
                  (null == e || e > t.length) && (e = t.length);
                  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                  return n;
                }
                function i() {
                  this._defaults = [];
                }
                [
                  'use',
                  'on',
                  'once',
                  'set',
                  'query',
                  'type',
                  'accept',
                  'auth',
                  'withCredentials',
                  'sortQuery',
                  'retry',
                  'ok',
                  'redirects',
                  'timeout',
                  'buffer',
                  'serialize',
                  'parse',
                  'ca',
                  'key',
                  'pfx',
                  'cert',
                  'disableTLSCerts',
                ].forEach(function (n) {
                  i.prototype[n] = function () {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return this._defaults.push({ fn: n, args: e }), this;
                  };
                }),
                  (i.prototype._setDefaults = function (e) {
                    this._defaults.forEach(function (t) {
                      e[t.fn].apply(e, n(t.args));
                    });
                  }),
                  (e.exports = i);
              },
              {},
            ],
            9: [
              function (t, e, r) {
                'use strict';
                function n(t) {
                  return (n =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (t) {
                        return typeof t;
                      }
                      : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      })(t);
                }
                e.exports = function (t) {
                  return null !== t && 'object' === n(t);
                };
              },
              {},
            ],
            10: [
              function (t, e, r) {
                'use strict';
                function n(t) {
                  return (n =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (t) {
                        return typeof t;
                      }
                      : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      })(t);
                }
                var o =
                  'undefined' != typeof window
                    ? window
                    : 'undefined' == typeof self
                      ? void console.warn('Using browser-only version of superagent in non-browser environment')
                      : self,
                  i = t('component-emitter'),
                  s = t('fast-safe-stringify'),
                  a = t('qs'),
                  u = t('./request-base'),
                  c = t('./is-object'),
                  l = t('./response-base'),
                  p = t('./agent-base');
                function f() { }
                e.exports = function (t, e) {
                  return 'function' == typeof e
                    ? new r.Request('GET', t).end(e)
                    : 1 === arguments.length
                      ? new r.Request('GET', t)
                      : new r.Request(t, e);
                };
                var h = (r = e.exports);
                (r.Request = v),
                  (h.getXHR = function () {
                    if (o.XMLHttpRequest && (!o.location || 'file:' !== o.location.protocol || !o.ActiveXObject))
                      return new XMLHttpRequest();
                    try {
                      return new ActiveXObject('Microsoft.XMLHTTP');
                    } catch (t) { }
                    try {
                      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
                    } catch (t) { }
                    try {
                      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
                    } catch (t) { }
                    try {
                      return new ActiveXObject('Msxml2.XMLHTTP');
                    } catch (t) { }
                    throw new Error('Browser-only version of superagent could not find XHR');
                  });
                var d = ''.trim
                  ? function (t) {
                    return t.trim();
                  }
                  : function (t) {
                    return t.replace(/(^\s*|\s*$)/g, '');
                  };
                function y(t) {
                  if (!c(t)) return t;
                  var e,
                    r = [];
                  for (e in t)
                    Object.prototype.hasOwnProperty.call(t, e) &&
                      !(function e(r, n, t) {
                        if (void 0 === t) return;
                        if (null === t) return void r.push(encodeURI(n));
                        if (Array.isArray(t))
                          t.forEach(function (t) {
                            e(r, n, t);
                          });
                        else if (c(t))
                          for (var o in t)
                            Object.prototype.hasOwnProperty.call(t, o) && e(r, ''.concat(n, '[').concat(o, ']'), t[o]);
                        else r.push(encodeURI(n) + '=' + encodeURIComponent(t));
                      })(r, e, t[e]);
                  return r.join('&');
                }
                function m(t) {
                  for (var e, r, n = {}, o = t.split('&'), i = 0, s = o.length; i < s; ++i)
                    -1 === (r = (e = o[i]).indexOf('='))
                      ? (n[decodeURIComponent(e)] = '')
                      : (n[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(r + 1)));
                  return n;
                }
                function g(t) {
                  return /[/+]json($|[^-\w])/i.test(t);
                }
                function b(t) {
                  (this.req = t),
                    (this.xhr = this.req.xhr),
                    (this.text =
                      ('HEAD' !== this.req.method && ('' === this.xhr.responseType || 'text' === this.xhr.responseType)) ||
                        void 0 === this.xhr.responseType
                        ? this.xhr.responseText
                        : null),
                    (this.statusText = this.req.xhr.statusText);
                  var e = this.xhr.status;
                  1223 === e && (e = 204),
                    this._setStatusProperties(e),
                    (this.headers = (function (t) {
                      for (var e, r, n, o = t.split(/\r?\n/), i = {}, s = 0, a = o.length; s < a; ++s)
                        -1 !== (n = (e = o[s]).indexOf(':')) &&
                          ((r = e.slice(0, n).toLowerCase()), (n = d(e.slice(n + 1))), (i[r] = n));
                      return i;
                    })(this.xhr.getAllResponseHeaders())),
                    (this.header = this.headers),
                    (this.header['content-type'] = this.xhr.getResponseHeader('content-type')),
                    this._setHeaderProperties(this.header),
                    null === this.text && t._responseType
                      ? (this.body = this.xhr.response)
                      : (this.body = 'HEAD' === this.req.method ? null : this._parseBody(this.text || this.xhr.response));
                }
                function v(t, e) {
                  var n = this;
                  (this._query = this._query || []),
                    (this.method = t),
                    (this.url = e),
                    (this.header = {}),
                    (this._header = {}),
                    this.on('end', function () {
                      var e,
                        r = null,
                        t = null;
                      try {
                        t = new b(n);
                      } catch (t) {
                        return (
                          ((r = new Error('Parser is unable to parse the response')).parse = !0),
                          (r.original = t),
                          n.xhr
                            ? ((r.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response),
                              (r.status = n.xhr.status || null),
                              (r.statusCode = r.status))
                            : ((r.rawResponse = null), (r.status = null)),
                          n.callback(r)
                        );
                      }
                      n.emit('response', t);
                      try {
                        n._isResponseOK(t) || (e = new Error(t.statusText || t.text || 'Unsuccessful HTTP response'));
                      } catch (t) {
                        e = t;
                      }
                      e ? ((e.original = r), (e.response = t), (e.status = t.status), n.callback(e, t)) : n.callback(null, t);
                    });
                }
                function T(t, e, r) {
                  t = h('DELETE', t);
                  return 'function' == typeof e && ((r = e), (e = null)), e && t.send(e), r && t.end(r), t;
                }
                (h.serializeObject = y),
                  (h.parseString = m),
                  (h.types = {
                    html: 'text/html',
                    json: 'application/json',
                    xml: 'text/xml',
                    urlencoded: 'application/x-www-form-urlencoded',
                    form: 'application/x-www-form-urlencoded',
                    'form-data': 'application/x-www-form-urlencoded',
                  }),
                  (h.serialize = { 'application/x-www-form-urlencoded': a.stringify, 'application/json': s }),
                  (h.parse = { 'application/x-www-form-urlencoded': m, 'application/json': JSON.parse }),
                  l(b.prototype),
                  (b.prototype._parseBody = function (t) {
                    var e = h.parse[this.type];
                    return this.req._parser
                      ? this.req._parser(this, t)
                      : (!e && g(this.type) && (e = h.parse['application/json']),
                        e && t && (0 < t.length || t instanceof Object) ? e(t) : null);
                  }),
                  (b.prototype.toError = function () {
                    var t = this.req,
                      e = t.method,
                      r = t.url,
                      t = 'cannot '.concat(e, ' ').concat(r, ' (').concat(this.status, ')'),
                      t = new Error(t);
                    return (t.status = this.status), (t.method = e), (t.url = r), t;
                  }),
                  (h.Response = b),
                  i(v.prototype),
                  u(v.prototype),
                  (v.prototype.type = function (t) {
                    return this.set('Content-Type', h.types[t] || t), this;
                  }),
                  (v.prototype.accept = function (t) {
                    return this.set('Accept', h.types[t] || t), this;
                  }),
                  (v.prototype.auth = function (t, e, r) {
                    1 === arguments.length && (e = ''),
                      'object' === n(e) && null !== e && ((r = e), (e = '')),
                      (r = r || { type: 'function' == typeof btoa ? 'basic' : 'auto' });
                    return this._auth(t, e, r, function (t) {
                      if ('function' == typeof btoa) return btoa(t);
                      throw new Error('Cannot use basic auth, btoa is not a function');
                    });
                  }),
                  (v.prototype.query = function (t) {
                    return 'string' != typeof t && (t = y(t)), t && this._query.push(t), this;
                  }),
                  (v.prototype.attach = function (t, e, r) {
                    if (e) {
                      if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                      this._getFormData().append(t, e, r || e.name);
                    }
                    return this;
                  }),
                  (v.prototype._getFormData = function () {
                    return this._formData || (this._formData = new o.FormData()), this._formData;
                  }),
                  (v.prototype.callback = function (t, e) {
                    if (this._shouldRetry(t, e)) return this._retry();
                    var r = this._callback;
                    this.clearTimeout(),
                      t && (this._maxRetries && (t.retries = this._retries - 1), this.emit('error', t)),
                      r(t, e);
                  }),
                  (v.prototype.crossDomainError = function () {
                    var t = new Error(
                      'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
                    );
                    (t.crossDomain = !0),
                      (t.status = this.status),
                      (t.method = this.method),
                      (t.url = this.url),
                      this.callback(t);
                  }),
                  (v.prototype.buffer =
                    v.prototype.ca =
                    v.prototype.agent =
                    function () {
                      return console.warn('This is not supported in browser version of superagent'), this;
                    }),
                  (v.prototype.pipe = v.prototype.write =
                    function () {
                      throw new Error('Streaming is not supported in browser version of superagent');
                    }),
                  (v.prototype._isHost = function (t) {
                    return (
                      t && 'object' === n(t) && !Array.isArray(t) && '[object Object]' !== Object.prototype.toString.call(t)
                    );
                  }),
                  (v.prototype.end = function (t) {
                    this._endCalled && console.warn('Warning: .end() was called twice. This is not supported in superagent'),
                      (this._endCalled = !0),
                      (this._callback = t || f),
                      this._finalizeQueryString(),
                      this._end();
                  }),
                  (v.prototype._setUploadTimeout = function () {
                    var t = this;
                    this._uploadTimeout &&
                      !this._uploadTimeoutTimer &&
                      (this._uploadTimeoutTimer = setTimeout(function () {
                        t._timeoutError('Upload timeout of ', t._uploadTimeout, 'ETIMEDOUT');
                      }, this._uploadTimeout));
                  }),
                  (v.prototype._end = function () {
                    if (this._aborted)
                      return this.callback(new Error('The request has been aborted even before .end() was called'));
                    var r = this;
                    this.xhr = h.getXHR();
                    var n = this.xhr,
                      t = this._formData || this._data;
                    this._setTimeouts(),
                      (n.onreadystatechange = function () {
                        var e,
                          t = n.readyState;
                        if ((2 <= t && r._responseTimeoutTimer && clearTimeout(r._responseTimeoutTimer), 4 === t)) {
                          try {
                            e = n.status;
                          } catch (t) {
                            e = 0;
                          }
                          if (!e) return r.timedout || r._aborted ? void 0 : r.crossDomainError();
                          r.emit('end');
                        }
                      });
                    function e(t, e) {
                      0 < e.total &&
                        ((e.percent = (e.loaded / e.total) * 100), 100 === e.percent && clearTimeout(r._uploadTimeoutTimer)),
                        (e.direction = t),
                        r.emit('progress', e);
                    }
                    var o, i, s;
                    if (this.hasListeners('progress'))
                      try {
                        n.addEventListener('progress', e.bind(null, 'download')),
                          n.upload && n.upload.addEventListener('progress', e.bind(null, 'upload'));
                      } catch (t) { }
                    n.upload && this._setUploadTimeout();
                    try {
                      this.username && this.password
                        ? n.open(this.method, this.url, !0, this.username, this.password)
                        : n.open(this.method, this.url, !0);
                    } catch (t) {
                      return this.callback(t);
                    }
                    for (s in (this._withCredentials && (n.withCredentials = !0),
                      this._formData ||
                      'GET' === this.method ||
                      'HEAD' === this.method ||
                      'string' == typeof t ||
                      this._isHost(t) ||
                      ((o = this._header['content-type']),
                        !(i = this._serializer || h.serialize[o ? o.split(';')[0] : '']) &&
                        g(o) &&
                        (i = h.serialize['application/json']),
                        i && (t = i(t))),
                      this.header))
                      null !== this.header[s] &&
                        Object.prototype.hasOwnProperty.call(this.header, s) &&
                        n.setRequestHeader(s, this.header[s]);
                    this._responseType && (n.responseType = this._responseType),
                      this.emit('request', this),
                      n.send(void 0 === t ? null : t);
                  }),
                  (h.agent = function () {
                    return new p();
                  }),
                  ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (r) {
                    p.prototype[r.toLowerCase()] = function (t, e) {
                      t = new h.Request(r, t);
                      return this._setDefaults(t), e && t.end(e), t;
                    };
                  }),
                  (p.prototype.del = p.prototype.delete),
                  (h.get = function (t, e, r) {
                    t = h('GET', t);
                    return 'function' == typeof e && ((r = e), (e = null)), e && t.query(e), r && t.end(r), t;
                  }),
                  (h.head = function (t, e, r) {
                    t = h('HEAD', t);
                    return 'function' == typeof e && ((r = e), (e = null)), e && t.query(e), r && t.end(r), t;
                  }),
                  (h.options = function (t, e, r) {
                    t = h('OPTIONS', t);
                    return 'function' == typeof e && ((r = e), (e = null)), e && t.send(e), r && t.end(r), t;
                  }),
                  (h.del = T),
                  (h.delete = T),
                  (h.patch = function (t, e, r) {
                    t = h('PATCH', t);
                    return 'function' == typeof e && ((r = e), (e = null)), e && t.send(e), r && t.end(r), t;
                  }),
                  (h.post = function (t, e, r) {
                    t = h('POST', t);
                    return 'function' == typeof e && ((r = e), (e = null)), e && t.send(e), r && t.end(r), t;
                  }),
                  (h.put = function (t, e, r) {
                    t = h('PUT', t);
                    return 'function' == typeof e && ((r = e), (e = null)), e && t.send(e), r && t.end(r), t;
                  });
              },
              {
                './agent-base': 8,
                './is-object': 9,
                './request-base': 11,
                './response-base': 12,
                'component-emitter': 1,
                'fast-safe-stringify': 2,
                qs: 4,
              },
            ],
            11: [
              function (t, e, r) {
                'use strict';
                function n(t) {
                  return (n =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function (t) {
                        return typeof t;
                      }
                      : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      })(t);
                }
                var o = t('./is-object');
                function i(t) {
                  if (t)
                    return (function (t) {
                      for (var e in i.prototype)
                        Object.prototype.hasOwnProperty.call(i.prototype, e) && (t[e] = i.prototype[e]);
                      return t;
                    })(t);
                }
                ((e.exports = i).prototype.clearTimeout = function () {
                  return (
                    clearTimeout(this._timer),
                    clearTimeout(this._responseTimeoutTimer),
                    clearTimeout(this._uploadTimeoutTimer),
                    delete this._timer,
                    delete this._responseTimeoutTimer,
                    delete this._uploadTimeoutTimer,
                    this
                  );
                }),
                  (i.prototype.parse = function (t) {
                    return (this._parser = t), this;
                  }),
                  (i.prototype.responseType = function (t) {
                    return (this._responseType = t), this;
                  }),
                  (i.prototype.serialize = function (t) {
                    return (this._serializer = t), this;
                  }),
                  (i.prototype.timeout = function (t) {
                    if (!t || 'object' !== n(t))
                      return (this._timeout = t), (this._responseTimeout = 0), (this._uploadTimeout = 0), this;
                    for (var e in t)
                      if (Object.prototype.hasOwnProperty.call(t, e))
                        switch (e) {
                          case 'deadline':
                            this._timeout = t.deadline;
                            break;
                          case 'response':
                            this._responseTimeout = t.response;
                            break;
                          case 'upload':
                            this._uploadTimeout = t.upload;
                            break;
                          default:
                            console.warn('Unknown timeout option', e);
                        }
                    return this;
                  }),
                  (i.prototype.retry = function (t, e) {
                    return (
                      (0 !== arguments.length && !0 !== t) || (t = 1),
                      t <= 0 && (t = 0),
                      (this._maxRetries = t),
                      (this._retries = 0),
                      (this._retryCallback = e),
                      this
                    );
                  });
                var s = new Set([
                  'ETIMEDOUT',
                  'ECONNRESET',
                  'EADDRINUSE',
                  'ECONNREFUSED',
                  'EPIPE',
                  'ENOTFOUND',
                  'ENETUNREACH',
                  'EAI_AGAIN',
                ]),
                  a = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
                (i.prototype._shouldRetry = function (t, e) {
                  if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
                  if (this._retryCallback)
                    try {
                      var r = this._retryCallback(t, e);
                      if (!0 === r) return !0;
                      if (!1 === r) return !1;
                    } catch (t) {
                      console.error(t);
                    }
                  if (e && e.status && a.has(e.status)) return !0;
                  if (t) {
                    if (t.code && s.has(t.code)) return !0;
                    if (t.timeout && 'ECONNABORTED' === t.code) return !0;
                    if (t.crossDomain) return !0;
                  }
                  return !1;
                }),
                  (i.prototype._retry = function () {
                    return (
                      this.clearTimeout(),
                      this.req && ((this.req = null), (this.req = this.request())),
                      (this._aborted = !1),
                      (this.timedout = !1),
                      (this.timedoutError = null),
                      this._end()
                    );
                  }),
                  (i.prototype.then = function (t, e) {
                    var o,
                      i = this;
                    return (
                      this._fullfilledPromise ||
                      ((o = this)._endCalled &&
                        console.warn(
                          'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
                        ),
                        (this._fullfilledPromise = new Promise(function (r, n) {
                          o.on('abort', function () {
                            var t;
                            (i._maxRetries && i._maxRetries > i._retries) ||
                              (i.timedout && i.timedoutError
                                ? n(i.timedoutError)
                                : (((t = new Error('Aborted')).code = 'ABORTED'),
                                  (t.status = i.status),
                                  (t.method = i.method),
                                  (t.url = i.url),
                                  n(t)));
                          }),
                            o.end(function (t, e) {
                              t ? n(t) : r(e);
                            });
                        }))),
                      this._fullfilledPromise.then(t, e)
                    );
                  }),
                  (i.prototype.catch = function (t) {
                    return this.then(void 0, t);
                  }),
                  (i.prototype.use = function (t) {
                    return t(this), this;
                  }),
                  (i.prototype.ok = function (t) {
                    if ('function' != typeof t) throw new Error('Callback required');
                    return (this._okCallback = t), this;
                  }),
                  (i.prototype._isResponseOK = function (t) {
                    return !!t && (this._okCallback ? this._okCallback(t) : 200 <= t.status && t.status < 300);
                  }),
                  (i.prototype.getHeader = i.prototype.get =
                    function (t) {
                      return this._header[t.toLowerCase()];
                    }),
                  (i.prototype.set = function (t, e) {
                    if (o(t)) {
                      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
                      return this;
                    }
                    return (this._header[t.toLowerCase()] = e), (this.header[t] = e), this;
                  }),
                  (i.prototype.unset = function (t) {
                    return delete this._header[t.toLowerCase()], delete this.header[t], this;
                  }),
                  (i.prototype.field = function (t, e) {
                    if (null == t) throw new Error('.field(name, val) name can not be empty');
                    if (this._data)
                      throw new Error(
                        ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
                      );
                    if (o(t)) {
                      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
                      return this;
                    }
                    if (Array.isArray(e)) {
                      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.field(t, e[n]);
                      return this;
                    }
                    if (null == e) throw new Error('.field(name, val) val can not be empty');
                    return 'boolean' == typeof e && (e = String(e)), this._getFormData().append(t, e), this;
                  }),
                  (i.prototype.abort = function () {
                    return (
                      this._aborted ||
                      ((this._aborted = !0),
                        this.xhr && this.xhr.abort(),
                        this.req && this.req.abort(),
                        this.clearTimeout(),
                        this.emit('abort')),
                      this
                    );
                  }),
                  (i.prototype._auth = function (t, e, r, n) {
                    switch (r.type) {
                      case 'basic':
                        this.set('Authorization', 'Basic '.concat(n(''.concat(t, ':').concat(e))));
                        break;
                      case 'auto':
                        (this.username = t), (this.password = e);
                        break;
                      case 'bearer':
                        this.set('Authorization', 'Bearer '.concat(t));
                    }
                    return this;
                  }),
                  (i.prototype.withCredentials = function (t) {
                    return void 0 === t && (t = !0), (this._withCredentials = t), this;
                  }),
                  (i.prototype.redirects = function (t) {
                    return (this._maxRedirects = t), this;
                  }),
                  (i.prototype.maxResponseSize = function (t) {
                    if ('number' != typeof t) throw new TypeError('Invalid argument');
                    return (this._maxResponseSize = t), this;
                  }),
                  (i.prototype.toJSON = function () {
                    return { method: this.method, url: this.url, data: this._data, headers: this._header };
                  }),
                  (i.prototype.send = function (t) {
                    var e = o(t),
                      r = this._header['content-type'];
                    if (this._formData)
                      throw new Error(
                        ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
                      );
                    if (e && !this._data) Array.isArray(t) ? (this._data = []) : this._isHost(t) || (this._data = {});
                    else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
                    if (e && o(this._data))
                      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (this._data[n] = t[n]);
                    else
                      'string' == typeof t
                        ? (r || this.type('form'),
                          (r = (r = this._header['content-type']) && r.toLowerCase().trim()),
                          (this._data =
                            'application/x-www-form-urlencoded' === r
                              ? this._data
                                ? ''.concat(this._data, '&').concat(t)
                                : t
                              : (this._data || '') + t))
                        : (this._data = t);
                    return !e || this._isHost(t) || r || this.type('json'), this;
                  }),
                  (i.prototype.sortQuery = function (t) {
                    return (this._sort = void 0 === t || t), this;
                  }),
                  (i.prototype._finalizeQueryString = function () {
                    var t,
                      e = this._query.join('&');
                    e && (this.url += (this.url.includes('?') ? '&' : '?') + e),
                      (this._query.length = 0),
                      !this._sort ||
                      (0 <= (t = this.url.indexOf('?')) &&
                        ((e = this.url.slice(t + 1).split('&')),
                          'function' == typeof this._sort ? e.sort(this._sort) : e.sort(),
                          (this.url = this.url.slice(0, t) + '?' + e.join('&'))));
                  }),
                  (i.prototype._appendQueryString = function () {
                    console.warn('Unsupported');
                  }),
                  (i.prototype._timeoutError = function (t, e, r) {
                    this._aborted ||
                      (((t = new Error(''.concat(t + e, 'ms exceeded'))).timeout = e),
                        (t.code = 'ECONNABORTED'),
                        (t.errno = r),
                        (this.timedout = !0),
                        (this.timedoutError = t),
                        this.abort(),
                        this.callback(t));
                  }),
                  (i.prototype._setTimeouts = function () {
                    var t = this;
                    this._timeout &&
                      !this._timer &&
                      (this._timer = setTimeout(function () {
                        t._timeoutError('Timeout of ', t._timeout, 'ETIME');
                      }, this._timeout)),
                      this._responseTimeout &&
                      !this._responseTimeoutTimer &&
                      (this._responseTimeoutTimer = setTimeout(function () {
                        t._timeoutError('Response timeout of ', t._responseTimeout, 'ETIMEDOUT');
                      }, this._responseTimeout));
                  });
              },
              { './is-object': 9 },
            ],
            12: [
              function (t, e, r) {
                'use strict';
                var o = t('./utils');
                function n(t) {
                  if (t)
                    return (function (t) {
                      for (var e in n.prototype)
                        Object.prototype.hasOwnProperty.call(n.prototype, e) && (t[e] = n.prototype[e]);
                      return t;
                    })(t);
                }
                ((e.exports = n).prototype.get = function (t) {
                  return this.header[t.toLowerCase()];
                }),
                  (n.prototype._setHeaderProperties = function (t) {
                    var e = t['content-type'] || '';
                    this.type = o.type(e);
                    var r,
                      n = o.params(e);
                    for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (this[r] = n[r]);
                    this.links = {};
                    try {
                      t.link && (this.links = o.parseLinks(t.link));
                    } catch (t) { }
                  }),
                  (n.prototype._setStatusProperties = function (t) {
                    var e = (t / 100) | 0;
                    (this.statusCode = t),
                      (this.status = this.statusCode),
                      (this.statusType = e),
                      (this.info = 1 == e),
                      (this.ok = 2 == e),
                      (this.redirect = 3 == e),
                      (this.clientError = 4 == e),
                      (this.serverError = 5 == e),
                      (this.error = (4 == e || 5 == e) && this.toError()),
                      (this.created = 201 === t),
                      (this.accepted = 202 === t),
                      (this.noContent = 204 === t),
                      (this.badRequest = 400 === t),
                      (this.unauthorized = 401 === t),
                      (this.notAcceptable = 406 === t),
                      (this.forbidden = 403 === t),
                      (this.notFound = 404 === t),
                      (this.unprocessableEntity = 422 === t);
                  });
              },
              { './utils': 13 },
            ],
            13: [
              function (t, e, r) {
                'use strict';
                function i(t, e) {
                  var r;
                  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
                    if (
                      Array.isArray(t) ||
                      (r = (function (t, e) {
                        if (!t) return;
                        if ('string' == typeof t) return a(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        'Object' === r && t.constructor && (r = t.constructor.name);
                        if ('Map' === r || 'Set' === r) return Array.from(t);
                        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(t, e);
                      })(t)) ||
                      (e && t && 'number' == typeof t.length)
                    ) {
                      r && (t = r);
                      var n = 0,
                        e = function () { };
                      return {
                        s: e,
                        n: function () {
                          return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                        },
                        e: function (t) {
                          throw t;
                        },
                        f: e,
                      };
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  }
                  var o,
                    i = !0,
                    s = !1;
                  return {
                    s: function () {
                      r = t[Symbol.iterator]();
                    },
                    n: function () {
                      var t = r.next();
                      return (i = t.done), t;
                    },
                    e: function (t) {
                      (s = !0), (o = t);
                    },
                    f: function () {
                      try {
                        i || null == r.return || r.return();
                      } finally {
                        if (s) throw o;
                      }
                    },
                  };
                }
                function a(t, e) {
                  (null == e || e > t.length) && (e = t.length);
                  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                  return n;
                }
                (r.type = function (t) {
                  return t.split(/ *; */).shift();
                }),
                  (r.params = function (t) {
                    var e = {},
                      r = i(t.split(/ *; */));
                    try {
                      for (r.s(); !(o = r.n()).done;) {
                        var n = o.value.split(/ *= */),
                          o = n.shift(),
                          n = n.shift();
                        o && n && (e[o] = n);
                      }
                    } catch (t) {
                      r.e(t);
                    } finally {
                      r.f();
                    }
                    return e;
                  }),
                  (r.parseLinks = function (t) {
                    var e = {},
                      r = i(t.split(/ *, */));
                    try {
                      for (r.s(); !(o = r.n()).done;) {
                        var n = o.value.split(/ *; */),
                          o = n[0].slice(1, -1);
                        e[n[1].split(/ *= */)[1].slice(1, -1)] = o;
                      }
                    } catch (t) {
                      r.e(t);
                    } finally {
                      r.f();
                    }
                    return e;
                  }),
                  (r.cleanHeader = function (t, e) {
                    return (
                      delete t['content-type'],
                      delete t['content-length'],
                      delete t['transfer-encoding'],
                      delete t.host,
                      e && (delete t.authorization, delete t.cookie),
                      t
                    );
                  });
              },
              {},
            ],
          },
          {},
          [10]
        )(10);
      }),
        function () {
          var o,
            s,
            i,
            a,
            n,
            u,
            c,
            l,
            p,
            f,
            h,
            d,
            y,
            m,
            g,
            b,
            v,
            T,
            _,
            S,
            w,
            D,
            A,
            C,
            R,
            B,
            E,
            O,
            I,
            N,
            P = superagent,
            k = superagentLegacyIESupportPlugin,
            x = 'https://test.masterpassturkiye.com/MasterpassJsonServerHandler/v2',
            j = '',
            L = new RSAKey();
          function F(t, e, r) {
            for (var n = r.length - 1; 0 <= n; n--) {
              var o = r[n];
              e[o] = (function (t, e) {
                for (var r = t.find('input'), n = r.length - 1; 0 <= n; n--) {
                  var o = r[n].getAttribute('type');
                  if (r[n].getAttribute('name') == e) {
                    if (
                      'cardAliasName' == e ||
                      'accountAliasName' == e ||
                      'cardHolderName' == e ||
                      'listAccountName' == e ||
                      'productId' == e ||
                      'senderAliasName' == e ||
                      'recipientAliasName' == e
                    )
                      return encodeURIComponent(r[n].value);
                    if ('validationCode' == e) {
                      if (O) return L.encrypt(r[n].value);
                      if (I) {
                        var i = r[n].value.replace('.', '').replace(',', '');
                        return 3 == i.length ? i : i.concat('0');
                      }
                    }
                    if ('rtaPan' == e || 'pan' == e) return N(r[n].value) ? L.encrypt(r[n].value) : '';
                    if ('cvv' == e || 'cvc' == e)
                      return 3 != r[n].value.length && 4 != r[n].value.length ? '' : L.encrypt(r[n].value);
                    if ('installmentCount' == e && '' !== r[n].value && !isNaN(r[n].value)) return parseFloat(r[n].value);
                    if ('checkbox' == o || 'radio' == o) if (!r[n].checked) continue;
                    return r[n].value;
                  }
                }
                return null;
              })(t, o);
            }
            (e.fp = j), (e.additionalParams = i);
          }
          function M(t, e, n) {
            t.clientId = o;
            var r = (r = new Date().toJSON()).replace(/"/g, '');
            (t.dateTime = r),
              (t.version = '35.4'),
              (t.clientType = '1'),
              P.post(x + e)
                .use(k)
                .send(JSON.stringify(t))
                .end(function (t, e) {
                  var r = (function (t) {
                    var e = JSON.parse(t.text || {}),
                      r = {};
                    if (e.hasOwnProperty('Data')) {
                      (r.referenceNo = e.Data.Body.Fault.Detail.ServiceFaultDetail.RefNo),
                        (r.responseCode = e.Data.Body.Fault.Detail.ServiceFaultDetail.ResponseCode),
                        (r.responseDescription = e.Data.Body.Fault.Detail.ServiceFaultDetail.ResponseDesc),
                        (r.url3D = e.Data.Body.Fault.Detail.ServiceFaultDetail.Url3D),
                        (r.url3DSuccess = e.Data.Body.Fault.Detail.ServiceFaultDetail.Url3DSuccess),
                        (r.url3DError = e.Data.Body.Fault.Detail.ServiceFaultDetail.Url3DError),
                        (r.urlLoan = e.Data.Body.Fault.Detail.ServiceFaultDetail.UrlLoan),
                        (r.urlLoanSuccess = e.Data.Body.Fault.Detail.ServiceFaultDetail.UrlLoanSuccess),
                        (r.urlLoanError = e.Data.Body.Fault.Detail.ServiceFaultDetail.UrlLoanError),
                        (r.newMsisdn = e.Data.Body.Fault.Detail.ServiceFaultDetail.NewMsisdn),
                        (r.internalResponseCode = e.Data.Body.Fault.Detail.ServiceFaultDetail.InternalResponseCode),
                        (r.internalResponseDescription = e.Data.Body.Fault.Detail.ServiceFaultDetail.InternalResponseMessage);
                      var n = e.Data.Body.Fault.Detail.ServiceFaultDetail.Token,
                        o = '';
                      if (e.Data.Body.hasOwnProperty('Response')) {
                        (o = e.Data.Body.Response.Result.TransactionBody.Token), (r.token = o);
                        t = '';
                        e.Data.Body.Response.Result.TransactionBody.hasOwnProperty('RefNo') &&
                          '' !== e.Data.Body.Response.Result.TransactionBody.RefNo &&
                          (t = e.Data.Body.Response.Result.TransactionBody.RefNo),
                          e.Data.Body.Fault.Detail.ServiceFaultDetail.hasOwnProperty('RefNo') &&
                          '' !== e.Data.Body.Fault.Detail.ServiceFaultDetail.RefNo &&
                          (t = e.Data.Body.Fault.Detail.ServiceFaultDetail.RefNo),
                          (r.transactionId = t);
                        t = '';
                        e.Data.Body.Response.Result.TransactionBody.hasOwnProperty('CardUniqueId') &&
                          '' !== e.Data.Body.Response.Result.TransactionBody.CardUniqueId &&
                          (t = e.Data.Body.Response.Result.TransactionBody.CardUniqueId),
                          (r.cardUniqueId = t),
                          e.Data.Body.Response.Result.TransactionBody.hasOwnProperty('AccountList') &&
                          '' !== e.Data.Body.Response.Result.TransactionBody.AccountList &&
                          (r.AccountList = e.Data.Body.Response.Result.TransactionBody.AccountList);
                        var i = e.Data.Body.Response.Result.TransactionBody.ListItems;
                        try {
                          i && 0 !== i.ListItem && (r.cards = i.ListItem);
                        } catch (t) { }
                        try {
                          i && 0 !== i.BankList && (r.banks = i.BankList);
                        } catch (t) { }
                        (r.accountStatus = e.Data.Body.Response.Result.TransactionBody.AccountStatus),
                          (r.amount = e.Data.Body.Response.Result.TransactionBody.Amount),
                          (r.orderNo = e.Data.Body.Response.Result.TransactionBody.OrderNo),
                          (r.installmentCount = e.Data.Body.Response.Result.TransactionBody.InstallmentCount);
                      }
                      n && 0 !== n.length ? (s = n) : (r.token = o);
                    }
                    return r;
                  })(e);
                  n(e.status, r);
                });
          }
          L.setPublic(
            'F619C53A37BAB059C583DA9AC4E2920FFC9D57E00885E82F7A0863DEAC43CE06374E45A1417DAC907C6CAC0AF1DDF1D7152192FED7A1D9255C97BC27E420E0742B95ED3C53C62995F42CB6EEDB7B1FBDD3E4F4A4AA935650DA81E763CA7074690032F6A6AF72802CC50394C2AFA5C9450A990E6F969A38571C8BC9E381125D2BEEC348AF919D7374FF10DC3E0B4367566CE929AD6EA323A475A677EB41C20B42D44E82E8A53DD52334D927394FCADF09',
            '03'
          ),
            (this.MFS =
              ((n = [
                'actionType',
                'clientIp',
                'delinkReason',
                'eActionType',
                'cardTypeFlag',
                'cpinFlag',
                'defaultAccount',
                'mmrpConfig',
                'identityVerificationFlag',
                'mobileAccountConfig',
                'msisdn',
                'referenceNo',
                'sendSms',
                'sendSmsLanguage',
                'timeZone',
                'uiChannelType',
                'rtaPan',
                'expiryDate',
                'accountAliasName',
                'cvc',
                'homeAddress',
                'homeCity',
                'homeState',
                'homeCountryCode',
                'homePostalCode',
                'firstName',
                'lastName',
                'email',
                'cardHolderName',
                'token',
              ]),
                (u = ['msisdn', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'accountAliasName', 'token']),
                (c = ['validationCode', 'sendSms', 'sendSmsLanguage', 'referenceNo', 'token']),
                (l = [
                  'aav',
                  'amount',
                  'clientIp',
                  'encCPin',
                  'encPassword',
                  'listAccountName',
                  'msisdn',
                  'password',
                  'referenceNo',
                  'sendSms',
                  'sendSmsLanguage',
                  'sendSmsMerchant',
                  'userId',
                  'token',
                  'rewardName',
                  'rewardValue',
                  'moneyCardInvoiceAmount',
                  'moneyCardMigrosDiscountAmount',
                  'moneyCardPaymentAmount',
                  'moneyCardExtraDiscountAmount',
                  'moneyCardProductBasedDiscountAmount',
                  'installmentCount',
                  'cvc',
                  'macroMerchantId',
                  'orderNo',
                  'paymentType',
                ]),
                (p = ['msisdn', 'encPan', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage', 'cvv']),
                (f = ['userId', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage']),
                (h = ['msisdn', 'cardAliasName', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage']),
                (d = ['msisdn', 'cardAliasName', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage']),
                (y = [
                  'token',
                  'msisdn',
                  'sendSmsLanguage',
                  'fP',
                  'amount',
                  'expiryDate',
                  'rtaPan',
                  'cardHolderName',
                  'cvc',
                  'macroMerchantId',
                  'orderNo',
                  'paymentType',
                  'installmentCount',
                  'rewardName',
                  'rewardValue',
                ]),
                (m = ['sendSmsLanguage', 'msisdn', 'token', 'cardAliasName', 'fP', 'referenceNo', 'sendSms']),
                (g = [
                  'token',
                  'msisdn',
                  'oldValue',
                  'theNewValue',
                  'valueType',
                  'sendSmsLanguage',
                  'fP',
                  'referenceNo',
                  'sendSms',
                ]),
                (b = ['token', 'msisdn', 'sendSmsLanguage', 'fP', 'referenceNo', 'sendSms']),
                (v = [
                  'msisdn',
                  'accountAliasName',
                  'token',
                  'referenceNo',
                  'sendSms',
                  'sendSmsLanguage',
                  'fP',
                  'amount',
                  'actionType',
                  'firstName',
                  'lastName',
                  'gender',
                  'expiryDate',
                  'rtaPan',
                  'cardHolderName',
                  'orderNo',
                  'merchantId',
                  'rewardName',
                  'rewardValue',
                  'moneyCardInvoiceAmount',
                  'moneyCardMigrosDiscountAmount',
                  'moneyCardPaymentAmount',
                  'moneyCardExtraDiscountAmount',
                  'moneyCardProductBasedDiscountAmount',
                  'installmentCount',
                  'cvc',
                  'macroMerchantId',
                  'orderNo',
                  'paymentType',
                ]),
                (T = ['msisdn', 'token', 'referenceNo', 'sendSms', 'sendSmsLanguage']),
                (_ = [
                  'msisdn',
                  'token',
                  'listAccountName',
                  'amount',
                  'endDate',
                  'actionType',
                  'referenceNo',
                  'sendSms',
                  'sendSmsLanguage',
                  'productId',
                ]),
                (S = [
                  'aav',
                  'amount',
                  'clientIp',
                  'encCPin',
                  'encPassword',
                  'moneySendType',
                  'senderAliasName',
                  'recipientAliasName',
                  'msisdn',
                  'password',
                  'referenceNo',
                  'sendSms',
                  'sendSmsLanguage',
                  'sendSmsMerchant',
                  'userId',
                  'token',
                  'rewardName',
                  'rewardValue',
                  'moneyCardInvoiceAmount',
                  'installmentCount',
                  'cvc',
                  'macroMerchantId',
                  'orderNo',
                  'paymentType',
                ]),
                (w = ['language', 'referenceNo', 'cvc', 'pan', 'client_token', 'action_type', 'token']),
                (D = ['msisdn', 'token', 'language', 'referenceNo']),
                (A = ['referenceNo', 'language', 'client_token', 'fP']),
                (C = [
                  'referenceNo',
                  'language',
                  'msisdn',
                  'amount',
                  'client_token',
                  'fP',
                  'macroMerchantId',
                  'orderNo',
                  'cvc',
                  'basketInfo',
                  'listAccountName',
                  'basketInfo',
                  'campaignCode',
                  'loanBankIca',
                ]),
                (R = ['referenceNo', 'language', 'client_token', 'fP', 'identityNumber']),
                (B = ['referenceNo', 'language', 'client_token', 'fP', 'installmentId', 'installmentCount', 'loanType']),
                (I = O = !(E = ['referenceNo', 'language', 'client_token', 'fP', 'loanType'])),
                (a = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]),
                (N = function (t) {
                  for (var e, r = t.length, n = 1, o = 0; r;) (e = parseInt(t.charAt(--r), 10)), (o += (n ^= 1) ? a[e] : e);
                  return o && o % 10 == 0;
                }),
              {
                setClientId: function (t) {
                  o = t;
                },
                listCards: function (t, e, r) {
                  var n = {};
                  (n.msisdn = t),
                    (n.token = e),
                    (n.referenceNo = '00000000'),
                    (n.listType = 'ACCOUNT'),
                    (n.sendSms = 'Y'),
                    (n.clientIp = ''),
                    (n.sendSmsLanguage = 'eng'),
                    M(n, '/listManagement', r);
                },
                register: function (t, e) {
                  var r = {};
                  F(t, r, n), M(r, '/register', e);
                },
                purchase: function (t, e) {
                  var r = {};
                  F(t, r, l), M(r, '/remotePurchaseOther', e);
                },
                commit: function (t) {
                  var e = { referenceNo: '00000000', sendSms: 'N', sendSmsLanguage: 'eng' };
                  (e.token = t), M(e, '/commitTransaction', function () { });
                },
                deleteCard: function (t, e) {
                  var r = {};
                  F(t, r, u), M(r, '/deleteCard', e);
                },
                validateTransaction: function (t, e) {
                  var r = t.find("input[name^='pinType']")[0];
                  (O = 'mpin' == r.value || 'cvv' == r.value), 'rta' == r.value && (I = !0);
                  r = {};
                  (r.validationRefNo = s), F(t, r, c), M(r, '/validateTransaction', e);
                },
                forgotPassword: function (t, e) {
                  var r = {};
                  F(t, r, p), M(r, '/forgotPassword', e);
                },
                setAddress: function (t) {
                  x = t;
                },
                checkMasterPass: function (t, e) {
                  var r = {};
                  F(t, r, f), M(r, '/checkMasterPassEndUser', e);
                },
                linkCardToClient: function (t, e) {
                  var r = {};
                  F(t, r, d), M(r, '/linkCardToClient', e);
                },
                addCardToMasterPass: function (t, e) {
                  var r = {};
                  F(t, r, h), M(r, '/addCardToMasterPass', e);
                },
                purchaseAndRegister: function (t, e) {
                  var r = {};
                  (r.validationRefNo = s), F(t, r, v), M(r, '/purchaseAndRegister', e);
                },
                directPurchase: function (t, e) {
                  var r = {};
                  F(t, r, y), M(r, '/directPurchase', e);
                },
                resendOtp: function (t, e, r) {
                  var n = {};
                  (n.validationRefNo = t),
                    (n.referenceNo = '00000000'),
                    (n.sendSms = 'N'),
                    (n.sendSmsLanguage = e),
                    M(n, '/resendOtp', r);
                },
                completeRegistration: function (t, e, r) {
                  var n = {};
                  (n.token2 = e), F(t, n, m), M(n, '/completeRegistration', r);
                },
                setFingerprint: function (t) {
                  j = t;
                },
                setToken: function (t) {
                  s = t;
                },
                getLastToken: function () {
                  return s;
                },
                updateUser: function (t, e) {
                  var r = {};
                  F(t, r, g), M(r, '/updateUser', e);
                },
                verifyPin: function (t, e) {
                  var r = {};
                  F(t, r, b), M(r, '/verifyPin', e);
                },
                parseQrCode: function (t, e) {
                  var r = {};
                  F(t, r, T), M(r, '/QrPaymentVerify', e);
                },
                initiateRecurringPayment: function (t, e) {
                  var r = {};
                  F(t, r, _), M(r, '/initiateManageRecurringPayment', e);
                },
                setAdditionalParameters: function (t) {
                  i = t;
                },
                moneySend: function (t, e) {
                  var r = {};
                  F(t, r, S), M(r, '/initiateMoneySend', e);
                },
                getCardUniqueId: function (t, e, r) {
                  var n = {};
                  N(t) ? (n.rtaPan = L.encrypt(t)) : (n.rtaPan = ''),
                    (n.token = e),
                    (n.referenceNo = '00000000'),
                    (n.sendSms = 'N'),
                    (n.clientIp = ''),
                    (n.sendSmsLanguage = 'eng'),
                    M(n, '/getCardUniqueId', r);
                },
                listCardAccounts: function (t, e) {
                  var r = {};
                  F(t, r, w), M(r, '/ListAccountByCardOwner ', e);
                },
                deleteCardAccount: function (t, e) {
                  var r = {};
                  F(t, r, D), M(r, '/deletecardbycardowner', e);
                },
                digitalLoanList: function (t, e) {
                  var r = {};
                  F(t, r, A), M(r, '/digitalLoanBankList', e);
                },
                getDigitalLoanUrl: function (t, e) {
                  var r = {};
                  F(t, r, C), M(r, '/digitalLoanUrl', e);
                },
                initiateTcknValidation: function (t, e) {
                  var r = {};
                  F(t, r, R), M(r, '/initiateTcknValidation', e);
                },
                completeLoan: function (t, e) {
                  var r = {};
                  F(t, r, B), M(r, '/completeLoan', e);
                },
                initiateLoanPayment: function (t, e) {
                  var r = {};
                  F(t, r, E), M(r, '/initiateLoanPayment', e);
                },
              }));
        }.call(this);
      </script>
    </body>
  </html>
`;
};
