(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function o(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(c){if(c.ep)return;c.ep=!0;const u=o(c);fetch(c.href,u)}})();function Ry(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var af={exports:{}},xs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function My(){if(Sg)return xs;Sg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(s,c,u){var f=null;if(u!==void 0&&(f=""+u),c.key!==void 0&&(f=""+c.key),"key"in c){u={};for(var h in c)h!=="key"&&(u[h]=c[h])}else u=c;return c=u.ref,{$$typeof:n,type:s,key:f,ref:c!==void 0?c:null,props:u}}return xs.Fragment=i,xs.jsx=o,xs.jsxs=o,xs}var Cg;function Dy(){return Cg||(Cg=1,af.exports=My()),af.exports}var m=Dy(),rf={exports:{}},Fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function Oy(){if(Ag)return Fe;Ag=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,O={};function B(M,ie,be){this.props=M,this.context=ie,this.refs=O,this.updater=be||C}B.prototype.isReactComponent={},B.prototype.setState=function(M,ie){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,ie,"setState")},B.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function A(){}A.prototype=B.prototype;function R(M,ie,be){this.props=M,this.context=ie,this.refs=O,this.updater=be||C}var T=R.prototype=new A;T.constructor=R,E(T,B.prototype),T.isPureReactComponent=!0;var N=Array.isArray,D={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function Z(M,ie,be,we,me,he){return be=he.ref,{$$typeof:n,type:M,key:ie,ref:be!==void 0?be:null,props:he}}function ae(M,ie){return Z(M.type,ie,void 0,void 0,void 0,M.props)}function Q(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function de(M){var ie={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(be){return ie[be]})}var X=/\/+/g;function Pe(M,ie){return typeof M=="object"&&M!==null&&M.key!=null?de(""+M.key):ie.toString(36)}function rt(){}function Y(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(rt,rt):(M.status="pending",M.then(function(ie){M.status==="pending"&&(M.status="fulfilled",M.value=ie)},function(ie){M.status==="pending"&&(M.status="rejected",M.reason=ie)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function je(M,ie,be,we,me){var he=typeof M;(he==="undefined"||he==="boolean")&&(M=null);var le=!1;if(M===null)le=!0;else switch(he){case"bigint":case"string":case"number":le=!0;break;case"object":switch(M.$$typeof){case n:case i:le=!0;break;case b:return le=M._init,je(le(M._payload),ie,be,we,me)}}if(le)return me=me(M),le=we===""?"."+Pe(M,0):we,N(me)?(be="",le!=null&&(be=le.replace(X,"$&/")+"/"),je(me,ie,be,"",function(H){return H})):me!=null&&(Q(me)&&(me=ae(me,be+(me.key==null||M&&M.key===me.key?"":(""+me.key).replace(X,"$&/")+"/")+le)),ie.push(me)),1;le=0;var Te=we===""?".":we+":";if(N(M))for(var Se=0;Se<M.length;Se++)we=M[Se],he=Te+Pe(we,Se),le+=je(we,ie,be,he,me);else if(Se=w(M),typeof Se=="function")for(M=Se.call(M),Se=0;!(we=M.next()).done;)we=we.value,he=Te+Pe(we,Se++),le+=je(we,ie,be,he,me);else if(he==="object"){if(typeof M.then=="function")return je(Y(M),ie,be,we,me);throw ie=String(M),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return le}function K(M,ie,be){if(M==null)return M;var we=[],me=0;return je(M,we,"","",function(he){return ie.call(be,he,me++)}),we}function I(M){if(M._status===-1){var ie=M._result;ie=ie(),ie.then(function(be){(M._status===0||M._status===-1)&&(M._status=1,M._result=be)},function(be){(M._status===0||M._status===-1)&&(M._status=2,M._result=be)}),M._status===-1&&(M._status=0,M._result=ie)}if(M._status===1)return M._result.default;throw M._result}var re=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function xe(){}return Fe.Children={map:K,forEach:function(M,ie,be){K(M,function(){ie.apply(this,arguments)},be)},count:function(M){var ie=0;return K(M,function(){ie++}),ie},toArray:function(M){return K(M,function(ie){return ie})||[]},only:function(M){if(!Q(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Fe.Component=B,Fe.Fragment=o,Fe.Profiler=c,Fe.PureComponent=R,Fe.StrictMode=s,Fe.Suspense=p,Fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},Fe.cache=function(M){return function(){return M.apply(null,arguments)}},Fe.cloneElement=function(M,ie,be){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var we=E({},M.props),me=M.key,he=void 0;if(ie!=null)for(le in ie.ref!==void 0&&(he=void 0),ie.key!==void 0&&(me=""+ie.key),ie)!G.call(ie,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&ie.ref===void 0||(we[le]=ie[le]);var le=arguments.length-2;if(le===1)we.children=be;else if(1<le){for(var Te=Array(le),Se=0;Se<le;Se++)Te[Se]=arguments[Se+2];we.children=Te}return Z(M.type,me,void 0,void 0,he,we)},Fe.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},Fe.createElement=function(M,ie,be){var we,me={},he=null;if(ie!=null)for(we in ie.key!==void 0&&(he=""+ie.key),ie)G.call(ie,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(me[we]=ie[we]);var le=arguments.length-2;if(le===1)me.children=be;else if(1<le){for(var Te=Array(le),Se=0;Se<le;Se++)Te[Se]=arguments[Se+2];me.children=Te}if(M&&M.defaultProps)for(we in le=M.defaultProps,le)me[we]===void 0&&(me[we]=le[we]);return Z(M,he,void 0,void 0,null,me)},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(M){return{$$typeof:h,render:M}},Fe.isValidElement=Q,Fe.lazy=function(M){return{$$typeof:b,_payload:{_status:-1,_result:M},_init:I}},Fe.memo=function(M,ie){return{$$typeof:g,type:M,compare:ie===void 0?null:ie}},Fe.startTransition=function(M){var ie=D.T,be={};D.T=be;try{var we=M(),me=D.S;me!==null&&me(be,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(xe,re)}catch(he){re(he)}finally{D.T=ie}},Fe.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Fe.use=function(M){return D.H.use(M)},Fe.useActionState=function(M,ie,be){return D.H.useActionState(M,ie,be)},Fe.useCallback=function(M,ie){return D.H.useCallback(M,ie)},Fe.useContext=function(M){return D.H.useContext(M)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(M,ie){return D.H.useDeferredValue(M,ie)},Fe.useEffect=function(M,ie){return D.H.useEffect(M,ie)},Fe.useId=function(){return D.H.useId()},Fe.useImperativeHandle=function(M,ie,be){return D.H.useImperativeHandle(M,ie,be)},Fe.useInsertionEffect=function(M,ie){return D.H.useInsertionEffect(M,ie)},Fe.useLayoutEffect=function(M,ie){return D.H.useLayoutEffect(M,ie)},Fe.useMemo=function(M,ie){return D.H.useMemo(M,ie)},Fe.useOptimistic=function(M,ie){return D.H.useOptimistic(M,ie)},Fe.useReducer=function(M,ie,be){return D.H.useReducer(M,ie,be)},Fe.useRef=function(M){return D.H.useRef(M)},Fe.useState=function(M){return D.H.useState(M)},Fe.useSyncExternalStore=function(M,ie,be){return D.H.useSyncExternalStore(M,ie,be)},Fe.useTransition=function(){return D.H.useTransition()},Fe.version="19.0.0",Fe}var jg;function qc(){return jg||(jg=1,rf.exports=Oy()),rf.exports}var j=qc();const Zn=Ry(j);var of={exports:{}},bs={},sf={exports:{}},lf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function By(){return Eg||(Eg=1,function(n){function i(K,I){var re=K.length;K.push(I);e:for(;0<re;){var xe=re-1>>>1,M=K[xe];if(0<c(M,I))K[xe]=I,K[re]=M,re=xe;else break e}}function o(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var I=K[0],re=K.pop();if(re!==I){K[0]=re;e:for(var xe=0,M=K.length,ie=M>>>1;xe<ie;){var be=2*(xe+1)-1,we=K[be],me=be+1,he=K[me];if(0>c(we,re))me<M&&0>c(he,we)?(K[xe]=he,K[me]=re,xe=me):(K[xe]=we,K[be]=re,xe=be);else if(me<M&&0>c(he,re))K[xe]=he,K[me]=re,xe=me;else break e}}return I}function c(K,I){var re=K.sortIndex-I.sortIndex;return re!==0?re:K.id-I.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var p=[],g=[],b=1,v=null,w=3,C=!1,E=!1,O=!1,B=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function T(K){for(var I=o(g);I!==null;){if(I.callback===null)s(g);else if(I.startTime<=K)s(g),I.sortIndex=I.expirationTime,i(p,I);else break;I=o(g)}}function N(K){if(O=!1,T(K),!E)if(o(p)!==null)E=!0,Y();else{var I=o(g);I!==null&&je(N,I.startTime-K)}}var D=!1,G=-1,Z=5,ae=-1;function Q(){return!(n.unstable_now()-ae<Z)}function de(){if(D){var K=n.unstable_now();ae=K;var I=!0;try{e:{E=!1,O&&(O=!1,A(G),G=-1),C=!0;var re=w;try{t:{for(T(K),v=o(p);v!==null&&!(v.expirationTime>K&&Q());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,w=v.priorityLevel;var M=xe(v.expirationTime<=K);if(K=n.unstable_now(),typeof M=="function"){v.callback=M,T(K),I=!0;break t}v===o(p)&&s(p),T(K)}else s(p);v=o(p)}if(v!==null)I=!0;else{var ie=o(g);ie!==null&&je(N,ie.startTime-K),I=!1}}break e}finally{v=null,w=re,C=!1}I=void 0}}finally{I?X():D=!1}}}var X;if(typeof R=="function")X=function(){R(de)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,rt=Pe.port2;Pe.port1.onmessage=de,X=function(){rt.postMessage(null)}}else X=function(){B(de,0)};function Y(){D||(D=!0,X())}function je(K,I){G=B(function(){K(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_continueExecution=function(){E||C||(E=!0,Y())},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return o(p)},n.unstable_next=function(K){switch(w){case 1:case 2:case 3:var I=3;break;default:I=w}var re=w;w=I;try{return K()}finally{w=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(K,I){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var re=w;w=K;try{return I()}finally{w=re}},n.unstable_scheduleCallback=function(K,I,re){var xe=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?xe+re:xe):re=xe,K){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=re+M,K={id:b++,callback:I,priorityLevel:K,startTime:re,expirationTime:M,sortIndex:-1},re>xe?(K.sortIndex=re,i(g,K),o(p)===null&&K===o(g)&&(O?(A(G),G=-1):O=!0,je(N,re-xe))):(K.sortIndex=M,i(p,K),E||C||(E=!0,Y())),K},n.unstable_shouldYield=Q,n.unstable_wrapCallback=function(K){var I=w;return function(){var re=w;w=I;try{return K.apply(this,arguments)}finally{w=re}}}}(lf)),lf}var Tg;function Ly(){return Tg||(Tg=1,sf.exports=By()),sf.exports}var cf={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function Ny(){if(zg)return Tn;zg=1;var n=qc();function i(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(p,g,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:p,containerInfo:g,implementation:b}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(p,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return u(p,g,null,b)},Tn.flushSync=function(p){var g=f.T,b=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=g,s.p=b,s.d.f()}},Tn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Tn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Tn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var b=g.as,v=h(b,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:C}):b==="script"&&s.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=h(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Tn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,v=h(b,g.crossOrigin);s.d.L(p,b,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tn.preloadModule=function(p,g){if(typeof p=="string")if(g){var b=h(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Tn.requestFormReset=function(p){s.d.r(p)},Tn.unstable_batchedUpdates=function(p,g){return p(g)},Tn.useFormState=function(p,g,b){return f.H.useFormState(p,g,b)},Tn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var kg;function $y(){if(kg)return cf.exports;kg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),cf.exports=Ny(),cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function Py(){if(Rg)return bs;Rg=1;var n=Ly(),i=qc(),o=$y();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),C=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),T=Symbol.for("react.offscreen"),N=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case h:return"Portal";case b:return"Profiler";case g:return"StrictMode";case O:return"Suspense";case B:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case E:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var Q=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=Object.assign,X,Pe;function rt(e){if(X===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);X=t&&t[1]||"",Pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+X+e+Pe}var Y=!1;function je(e,t){if(!e||Y)return"";Y=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(ee){var F=ee}Reflect.construct(e,[],ce)}else{try{ce.call()}catch(ee){F=ee}e.call(ce.prototype)}}else{try{throw Error()}catch(ee){F=ee}(ce=e())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(ee){if(ee&&F&&typeof ee.stack=="string")return[ee.stack,F.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),x=d[0],S=d[1];if(x&&S){var k=x.split(`
`),P=S.split(`
`);for(l=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;if(r===k.length||l===P.length)for(r=k.length-1,l=P.length-1;1<=r&&0<=l&&k[r]!==P[l];)l--;for(;1<=r&&0<=l;r--,l--)if(k[r]!==P[l]){if(r!==1||l!==1)do if(r--,l--,0>l||k[r]!==P[l]){var ne=`
`+k[r].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),ne}while(1<=r&&0<=l);break}}}finally{Y=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?rt(a):""}function K(e){switch(e.tag){case 26:case 27:case 5:return rt(e.type);case 16:return rt("Lazy");case 13:return rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return e=je(e.type,!1),e;case 11:return e=je(e.type.render,!1),e;case 1:return e=je(e.type,!0),e;default:return""}}function I(e){try{var t="";do t+=K(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function re(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function xe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(re(e)!==e)throw Error(s(188))}function ie(e){var t=e.alternate;if(!t){if(t=re(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,r=t;;){var l=a.return;if(l===null)break;var d=l.alternate;if(d===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===a)return M(l),e;if(d===r)return M(l),t;d=d.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=d;else{for(var x=!1,S=l.child;S;){if(S===a){x=!0,a=l,r=d;break}if(S===r){x=!0,r=l,a=d;break}S=S.sibling}if(!x){for(S=d.child;S;){if(S===a){x=!0,a=d,r=l;break}if(S===r){x=!0,r=d,a=l;break}S=S.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function be(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=be(e),t!==null)return t;e=e.sibling}return null}var we=Array.isArray,me=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},le=[],Te=-1;function Se(e){return{current:e}}function H(e){0>Te||(e.current=le[Te],le[Te]=null,Te--)}function Le(e,t){Te++,le[Te]=e.current,e.current=t}var ve=Se(null),et=Se(null),qe=Se(null),ft=Se(null);function Ot(e,t){switch(Le(qe,t),Le(et,e),Le(ve,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Im(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=Im(e),t=Jm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}H(ve),Le(ve,t)}function _e(){H(ve),H(et),H(qe)}function Me(e){e.memoizedState!==null&&Le(ft,e);var t=ve.current,a=Jm(t,e.type);t!==a&&(Le(et,e),Le(ve,a))}function Ve(e){et.current===e&&(H(ve),H(et)),ft.current===e&&(H(ft),fs._currentValue=he)}var vt=Object.prototype.hasOwnProperty,Ht=n.unstable_scheduleCallback,yt=n.unstable_cancelCallback,nt=n.unstable_shouldYield,Bt=n.unstable_requestPaint,Xe=n.unstable_now,Wt=n.unstable_getCurrentPriorityLevel,xn=n.unstable_ImmediatePriority,ot=n.unstable_UserBlockingPriority,Ge=n.unstable_NormalPriority,z=n.unstable_LowPriority,$=n.unstable_IdlePriority,te=n.log,ue=n.unstable_setDisableYieldValue,pe=null,se=null;function fe(e){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(pe,e,void 0,(e.current.flags&128)===128)}catch{}}function ze(e){if(typeof te=="function"&&ue(e),se&&typeof se.setStrictMode=="function")try{se.setStrictMode(pe,e)}catch{}}var Ae=Math.clz32?Math.clz32:pt,ke=Math.log,Ce=Math.LN2;function pt(e){return e>>>=0,e===0?32:31-(ke(e)/Ce|0)|0}var ct=128,Ct=4194304;function qt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function en(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,l=e.suspendedLanes,d=e.pingedLanes,x=e.warmLanes;e=e.finishedLanes!==0;var S=a&134217727;return S!==0?(a=S&~l,a!==0?r=qt(a):(d&=S,d!==0?r=qt(d):e||(x=S&~x,x!==0&&(r=qt(x))))):(S=a&~l,S!==0?r=qt(S):d!==0?r=qt(d):e||(x=a&~x,x!==0&&(r=qt(x)))),r===0?0:t!==0&&t!==r&&(t&l)===0&&(l=r&-r,x=t&-t,l>=x||l===32&&(x&4194176)!==0)?t:r}function wt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gt(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yt(){var e=ct;return ct<<=1,(ct&4194176)===0&&(ct=128),e}function Jn(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function tn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function bn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function U(e,t,a,r,l,d){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var S=e.entanglements,k=e.expirationTimes,P=e.hiddenUpdates;for(a=x&~a;0<a;){var ne=31-Ae(a),ce=1<<ne;S[ne]=0,k[ne]=-1;var F=P[ne];if(F!==null)for(P[ne]=null,ne=0;ne<F.length;ne++){var ee=F[ne];ee!==null&&(ee.lane&=-536870913)}a&=~ce}r!==0&&W(e,r,0),d!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~t))}function W(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ae(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194218}function V(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-Ae(a),l=1<<r;l&t|e[r]&t&&(e[r]|=t),a&=~l}}function J(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ge(){var e=me.p;return e!==0?e:(e=window.event,e===void 0?32:gg(e.type))}function Re(e,t){var a=me.p;try{return me.p=e,t()}finally{me.p=a}}var ye=Math.random().toString(36).slice(2),De="__reactFiber$"+ye,Ue="__reactProps$"+ye,Qe="__reactContainer$"+ye,ht="__reactEvents$"+ye,Xt="__reactListeners$"+ye,nn="__reactHandles$"+ye,Lt="__reactResources$"+ye,at="__reactMarker$"+ye;function Je(e){delete e[De],delete e[Ue],delete e[ht],delete e[Xt],delete e[nn]}function mt(e){var t=e[De];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qe]||a[De]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=tg(e);e!==null;){if(a=e[De])return a;e=tg(e)}return t}e=a,a=e.parentNode}return null}function bt(e){if(e=e[De]||e[Qe]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ke(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Nt(e){var t=e[Lt];return t||(t=e[Lt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[at]=!0}var Ft=new Set,Wn={};function An(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Ft.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ea={},gi={};function zr(e){return vt.call(gi,e)?!0:vt.call(Ea,e)?!1:xa.test(e)?gi[e]=!0:(Ea[e]=!0,!1)}function xi(e,t,a){if(zr(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qa(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function $t(e,t,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+r)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _n(e){var t=vn(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,d=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(x){r=""+x,d.call(this,x)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vn(e){e._valueTracker||(e._valueTracker=_n(e))}function bi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=vn(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ta=/[\n"\\]/g;function Mt(e){return e.replace(ta,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bn(e,t,a,r,l,d,x,S){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?na(e,x,st(t)):a!=null?na(e,x,st(a)):r!=null&&e.removeAttribute("value"),l==null&&d!=null&&(e.defaultChecked=!!d),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+st(S):e.removeAttribute("name")}function vi(e,t,a,r,l,d,x,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||t!=null))return;a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,S||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=S?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function na(e,t,a){t==="number"&&ea(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Un(e,t,a,r){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ln(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function Hn(e,t,a,r){if(t==null){if(r!=null){if(a!=null)throw Error(s(92));if(we(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function jn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ta=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ut(e,t,a){var r=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,a):typeof a!="number"||a===0||Ta.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qn(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in t)r=t[l],t.hasOwnProperty(l)&&a[l]!==r&&ut(e,l,r)}else for(var d in t)t.hasOwnProperty(d)&&ut(e,d,t[d])}function Ki(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ga=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return Ga.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zi=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,Ra=null;function kr(e){var t=bt(e);if(t&&(e=t.stateNode)){var a=e[Ue]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var l=r[Ue]||null;if(!l)throw Error(s(90));Bn(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)r=a[t],r.form===e.form&&bi(r)}break e;case"textarea":Ln(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Un(e,!!a.multiple,t,!1)}}}var ou=!1;function lh(e,t,a){if(ou)return e(t,a);ou=!0;try{var r=e(t);return r}finally{if(ou=!1,(ka!==null||Ra!==null)&&(Vl(),ka&&(t=ka,e=Ra,Ra=ka=null,kr(t),e)))for(t=0;t<e.length;t++)kr(e[t])}}function Eo(e,t){var a=e.stateNode;if(a===null)return null;var r=a[Ue]||null;if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var su=!1;if(Qt)try{var To={};Object.defineProperty(To,"passive",{get:function(){su=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{su=!1}var wi=null,lu=null,il=null;function ch(){if(il)return il;var e,t=lu,a=t.length,r,l="value"in wi?wi.value:wi.textContent,d=l.length;for(e=0;e<a&&t[e]===l[e];e++);var x=a-e;for(r=1;r<=x&&t[a-r]===l[d-r];r++);return il=l.slice(e,1<r?1-r:void 0)}function rl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function uh(){return!1}function Nn(e){function t(a,r,l,d,x){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ol:uh,this.isPropagationStopped=uh,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),t}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Nn(Ji),zo=de({},Ji,{view:0,detail:0}),Rv=Nn(zo),cu,uu,ko,ll=de({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?(cu=e.screenX-ko.screenX,uu=e.screenY-ko.screenY):uu=cu=0,ko=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),dh=Nn(ll),Mv=de({},ll,{dataTransfer:0}),Dv=Nn(Mv),Ov=de({},zo,{relatedTarget:0}),du=Nn(Ov),Bv=de({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=Nn(Bv),Nv=de({},Ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=Nn(Nv),Pv=de({},Ji,{data:0}),fh=Nn(Pv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uv[e])?!!t[e]:!1}function fu(){return Hv}var qv=de({},zo,{key:function(e){if(e.key){var t=_v[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gv=Nn(qv),Yv=de({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=Nn(Yv),Xv=de({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Fv=Nn(Xv),Qv=de({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Nn(Qv),Zv=de({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Nn(Zv),Jv=de({},Ji,{newState:0,oldState:0}),Wv=Nn(Jv),e5=[9,13,27,32],hu=Qt&&"CompositionEvent"in window,Ro=null;Qt&&"documentMode"in document&&(Ro=document.documentMode);var t5=Qt&&"TextEvent"in window&&!Ro,ph=Qt&&(!hu||Ro&&8<Ro&&11>=Ro),mh=" ",gh=!1;function xh(e,t){switch(e){case"keyup":return e5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function n5(e,t){switch(e){case"compositionend":return bh(t);case"keypress":return t.which!==32?null:(gh=!0,mh);case"textInput":return e=t.data,e===mh&&gh?null:e;default:return null}}function a5(e,t){if(Rr)return e==="compositionend"||!hu&&xh(e,t)?(e=ch(),il=lu=wi=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ph&&t.locale!=="ko"?null:t.data;default:return null}}var i5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i5[e.type]:t==="textarea"}function yh(e,t,a,r){ka?Ra?Ra.push(r):Ra=[r]:ka=r,t=Yl(t,"onChange"),0<t.length&&(a=new sl("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var Mo=null,Do=null;function r5(e){Xm(e,0)}function cl(e){var t=Ke(e);if(bi(t))return e}function wh(e,t){if(e==="change")return t}var Sh=!1;if(Qt){var pu;if(Qt){var mu="oninput"in document;if(!mu){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),mu=typeof Ch.oninput=="function"}pu=mu}else pu=!1;Sh=pu&&(!document.documentMode||9<document.documentMode)}function Ah(){Mo&&(Mo.detachEvent("onpropertychange",jh),Do=Mo=null)}function jh(e){if(e.propertyName==="value"&&cl(Do)){var t=[];yh(t,Do,e,Ii(e)),lh(r5,t)}}function o5(e,t,a){e==="focusin"?(Ah(),Mo=t,Do=a,Mo.attachEvent("onpropertychange",jh)):e==="focusout"&&Ah()}function s5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Do)}function l5(e,t){if(e==="click")return cl(t)}function c5(e,t){if(e==="input"||e==="change")return cl(t)}function u5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:u5;function Oo(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!vt.call(t,l)||!Gn(e[l],t[l]))return!1}return!0}function Eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,t){var a=Eh(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Eh(a)}}function zh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ea(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ea(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function d5(e,t){var a=kh(t);t=e.focusedElem;var r=e.selectionRange;if(a!==t&&t&&t.ownerDocument&&zh(t.ownerDocument.documentElement,t)){if(r!==null&&gu(t)){if(e=r.start,a=r.end,a===void 0&&(a=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(a,t.value.length);else if(a=(e=t.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var l=t.textContent.length,d=Math.min(r.start,l);r=r.end===void 0?d:Math.min(r.end,l),!a.extend&&d>r&&(l=r,r=d,d=l),l=Th(t,d);var x=Th(t,r);l&&x&&(a.rangeCount!==1||a.anchorNode!==l.node||a.anchorOffset!==l.offset||a.focusNode!==x.node||a.focusOffset!==x.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),a.removeAllRanges(),d>r?(a.addRange(e),a.extend(x.node,x.offset)):(e.setEnd(x.node,x.offset),a.addRange(e)))}}for(e=[],a=t;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)a=e[t],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var f5=Qt&&"documentMode"in document&&11>=document.documentMode,Mr=null,xu=null,Bo=null,bu=!1;function Rh(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Mr==null||Mr!==ea(r)||(r=Mr,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&Oo(Bo,r)||(Bo=r,r=Yl(xu,"onSelect"),0<r.length&&(t=new sl("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=Mr)))}function Wi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Dr={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionrun:Wi("Transition","TransitionRun"),transitionstart:Wi("Transition","TransitionStart"),transitioncancel:Wi("Transition","TransitionCancel"),transitionend:Wi("Transition","TransitionEnd")},vu={},Mh={};Qt&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function er(e){if(vu[e])return vu[e];if(!Dr[e])return e;var t=Dr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Mh)return vu[e]=t[a];return e}var Dh=er("animationend"),Oh=er("animationiteration"),Bh=er("animationstart"),h5=er("transitionrun"),p5=er("transitionstart"),m5=er("transitioncancel"),Lh=er("transitionend"),Nh=new Map,$h="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ba(e,t){Nh.set(e,t),An(t,[e])}var aa=[],Or=0,yu=0;function ul(){for(var e=Or,t=yu=Or=0;t<e;){var a=aa[t];aa[t++]=null;var r=aa[t];aa[t++]=null;var l=aa[t];aa[t++]=null;var d=aa[t];if(aa[t++]=null,r!==null&&l!==null){var x=r.pending;x===null?l.next=l:(l.next=x.next,x.next=l),r.pending=l}d!==0&&Ph(a,l,d)}}function dl(e,t,a,r){aa[Or++]=e,aa[Or++]=t,aa[Or++]=a,aa[Or++]=r,yu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function wu(e,t,a,r){return dl(e,t,a,r),fl(e)}function Si(e,t){return dl(e,null,null,t),fl(e)}function Ph(e,t,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,d=e.return;d!==null;)d.childLanes|=a,r=d.alternate,r!==null&&(r.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(l=!0)),e=d,d=d.return;l&&t!==null&&e.tag===3&&(d=e.stateNode,l=31-Ae(a),d=d.hiddenUpdates,e=d[l],e===null?d[l]=[t]:e.push(t),t.lane=a|536870912)}function fl(e){if(50<rs)throw rs=0,Td=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Br={},_h=new WeakMap;function ia(e,t){if(typeof e=="object"&&e!==null){var a=_h.get(e);return a!==void 0?a:(t={value:e,source:t,stack:I(t)},_h.set(e,t),t)}return{value:e,source:t,stack:I(t)}}var Lr=[],Nr=0,hl=null,pl=0,ra=[],oa=0,tr=null,Ya=1,Xa="";function nr(e,t){Lr[Nr++]=pl,Lr[Nr++]=hl,hl=e,pl=t}function Vh(e,t,a){ra[oa++]=Ya,ra[oa++]=Xa,ra[oa++]=tr,tr=e;var r=Ya;e=Xa;var l=32-Ae(r)-1;r&=~(1<<l),a+=1;var d=32-Ae(t)+l;if(30<d){var x=l-l%5;d=(r&(1<<x)-1).toString(32),r>>=x,l-=x,Ya=1<<32-Ae(t)+l|a<<l|r,Xa=d+e}else Ya=1<<d|a<<l|r,Xa=e}function Su(e){e.return!==null&&(nr(e,1),Vh(e,1,0))}function Cu(e){for(;e===hl;)hl=Lr[--Nr],Lr[Nr]=null,pl=Lr[--Nr],Lr[Nr]=null;for(;e===tr;)tr=ra[--oa],ra[oa]=null,Xa=ra[--oa],ra[oa]=null,Ya=ra[--oa],ra[oa]=null}var Mn=null,yn=null,gt=!1,va=null,Ma=!1,Au=Error(s(519));function ar(e){var t=Error(s(418,""));throw $o(ia(t,e)),Au}function Uh(e){var t=e.stateNode,a=e.type,r=e.memoizedProps;switch(t[De]=e,t[Ue]=r,a){case"dialog":lt("cancel",t),lt("close",t);break;case"iframe":case"object":case"embed":lt("load",t);break;case"video":case"audio":for(a=0;a<ss.length;a++)lt(ss[a],t);break;case"source":lt("error",t);break;case"img":case"image":case"link":lt("error",t),lt("load",t);break;case"details":lt("toggle",t);break;case"input":lt("invalid",t),vi(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Vn(t);break;case"select":lt("invalid",t);break;case"textarea":lt("invalid",t),Hn(t,r.value,r.defaultValue,r.children),Vn(t)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||r.suppressHydrationWarning===!0||Zm(t.textContent,a)?(r.popover!=null&&(lt("beforetoggle",t),lt("toggle",t)),r.onScroll!=null&&lt("scroll",t),r.onScrollEnd!=null&&lt("scrollend",t),r.onClick!=null&&(t.onclick=Xl),t=!0):t=!1,t||ar(e)}function Hh(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 3:case 27:Ma=!0;return;case 5:case 13:Ma=!1;return;default:Mn=Mn.return}}function Lo(e){if(e!==Mn)return!1;if(!gt)return Hh(e),gt=!0,!1;var t=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gd(e.type,e.memoizedProps)),a=!a),a&&(t=!0),t&&yn&&ar(e),Hh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){yn=wa(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}yn=null}}else yn=Mn?wa(e.stateNode.nextSibling):null;return!0}function No(){yn=Mn=null,gt=!1}function $o(e){va===null?va=[e]:va.push(e)}var Po=Error(s(460)),qh=Error(s(474)),ju={then:function(){}};function Gh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Yh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ml,ml),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Po?Error(s(483)):e;default:if(typeof t.status=="string")t.then(ml,ml);else{if(e=zt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Po?Error(s(483)):e}throw _o=t,Po}}var _o=null;function Xh(){if(_o===null)throw Error(s(459));var e=_o;return _o=null,e}var $r=null,Vo=0;function gl(e){var t=Vo;return Vo+=1,$r===null&&($r=[]),Yh($r,e,t)}function Uo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xl(e,t){throw t.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fh(e){var t=e._init;return t(e._payload)}function Qh(e){function t(_,L){if(e){var q=_.deletions;q===null?(_.deletions=[L],_.flags|=16):q.push(L)}}function a(_,L){if(!e)return null;for(;L!==null;)t(_,L),L=L.sibling;return null}function r(_){for(var L=new Map;_!==null;)_.key!==null?L.set(_.key,_):L.set(_.index,_),_=_.sibling;return L}function l(_,L){return _=Bi(_,L),_.index=0,_.sibling=null,_}function d(_,L,q){return _.index=q,e?(q=_.alternate,q!==null?(q=q.index,q<L?(_.flags|=33554434,L):q):(_.flags|=33554434,L)):(_.flags|=1048576,L)}function x(_){return e&&_.alternate===null&&(_.flags|=33554434),_}function S(_,L,q,oe){return L===null||L.tag!==6?(L=vd(q,_.mode,oe),L.return=_,L):(L=l(L,q),L.return=_,L)}function k(_,L,q,oe){var Ee=q.type;return Ee===p?ne(_,L,q.props.children,oe,q.key):L!==null&&(L.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===R&&Fh(Ee)===L.type)?(L=l(L,q.props),Uo(L,q),L.return=_,L):(L=Ll(q.type,q.key,q.props,null,_.mode,oe),Uo(L,q),L.return=_,L)}function P(_,L,q,oe){return L===null||L.tag!==4||L.stateNode.containerInfo!==q.containerInfo||L.stateNode.implementation!==q.implementation?(L=yd(q,_.mode,oe),L.return=_,L):(L=l(L,q.children||[]),L.return=_,L)}function ne(_,L,q,oe,Ee){return L===null||L.tag!==7?(L=hr(q,_.mode,oe,Ee),L.return=_,L):(L=l(L,q),L.return=_,L)}function ce(_,L,q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=vd(""+L,_.mode,q),L.return=_,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case f:return q=Ll(L.type,L.key,L.props,null,_.mode,q),Uo(q,L),q.return=_,q;case h:return L=yd(L,_.mode,q),L.return=_,L;case R:var oe=L._init;return L=oe(L._payload),ce(_,L,q)}if(we(L)||G(L))return L=hr(L,_.mode,q,null),L.return=_,L;if(typeof L.then=="function")return ce(_,gl(L),q);if(L.$$typeof===C)return ce(_,Dl(_,L),q);xl(_,L)}return null}function F(_,L,q,oe){var Ee=L!==null?L.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return Ee!==null?null:S(_,L,""+q,oe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case f:return q.key===Ee?k(_,L,q,oe):null;case h:return q.key===Ee?P(_,L,q,oe):null;case R:return Ee=q._init,q=Ee(q._payload),F(_,L,q,oe)}if(we(q)||G(q))return Ee!==null?null:ne(_,L,q,oe,null);if(typeof q.then=="function")return F(_,L,gl(q),oe);if(q.$$typeof===C)return F(_,L,Dl(_,q),oe);xl(_,q)}return null}function ee(_,L,q,oe,Ee){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return _=_.get(q)||null,S(L,_,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case f:return _=_.get(oe.key===null?q:oe.key)||null,k(L,_,oe,Ee);case h:return _=_.get(oe.key===null?q:oe.key)||null,P(L,_,oe,Ee);case R:var tt=oe._init;return oe=tt(oe._payload),ee(_,L,q,oe,Ee)}if(we(oe)||G(oe))return _=_.get(q)||null,ne(L,_,oe,Ee,null);if(typeof oe.then=="function")return ee(_,L,q,gl(oe),Ee);if(oe.$$typeof===C)return ee(_,L,q,Dl(L,oe),Ee);xl(L,oe)}return null}function Oe(_,L,q,oe){for(var Ee=null,tt=null,Be=L,Ne=L=0,mn=null;Be!==null&&Ne<q.length;Ne++){Be.index>Ne?(mn=Be,Be=null):mn=Be.sibling;var xt=F(_,Be,q[Ne],oe);if(xt===null){Be===null&&(Be=mn);break}e&&Be&&xt.alternate===null&&t(_,Be),L=d(xt,L,Ne),tt===null?Ee=xt:tt.sibling=xt,tt=xt,Be=mn}if(Ne===q.length)return a(_,Be),gt&&nr(_,Ne),Ee;if(Be===null){for(;Ne<q.length;Ne++)Be=ce(_,q[Ne],oe),Be!==null&&(L=d(Be,L,Ne),tt===null?Ee=Be:tt.sibling=Be,tt=Be);return gt&&nr(_,Ne),Ee}for(Be=r(Be);Ne<q.length;Ne++)mn=ee(Be,_,Ne,q[Ne],oe),mn!==null&&(e&&mn.alternate!==null&&Be.delete(mn.key===null?Ne:mn.key),L=d(mn,L,Ne),tt===null?Ee=mn:tt.sibling=mn,tt=mn);return e&&Be.forEach(function(Ui){return t(_,Ui)}),gt&&nr(_,Ne),Ee}function Ye(_,L,q,oe){if(q==null)throw Error(s(151));for(var Ee=null,tt=null,Be=L,Ne=L=0,mn=null,xt=q.next();Be!==null&&!xt.done;Ne++,xt=q.next()){Be.index>Ne?(mn=Be,Be=null):mn=Be.sibling;var Ui=F(_,Be,xt.value,oe);if(Ui===null){Be===null&&(Be=mn);break}e&&Be&&Ui.alternate===null&&t(_,Be),L=d(Ui,L,Ne),tt===null?Ee=Ui:tt.sibling=Ui,tt=Ui,Be=mn}if(xt.done)return a(_,Be),gt&&nr(_,Ne),Ee;if(Be===null){for(;!xt.done;Ne++,xt=q.next())xt=ce(_,xt.value,oe),xt!==null&&(L=d(xt,L,Ne),tt===null?Ee=xt:tt.sibling=xt,tt=xt);return gt&&nr(_,Ne),Ee}for(Be=r(Be);!xt.done;Ne++,xt=q.next())xt=ee(Be,_,Ne,xt.value,oe),xt!==null&&(e&&xt.alternate!==null&&Be.delete(xt.key===null?Ne:xt.key),L=d(xt,L,Ne),tt===null?Ee=xt:tt.sibling=xt,tt=xt);return e&&Be.forEach(function(ky){return t(_,ky)}),gt&&nr(_,Ne),Ee}function It(_,L,q,oe){if(typeof q=="object"&&q!==null&&q.type===p&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case f:e:{for(var Ee=q.key;L!==null;){if(L.key===Ee){if(Ee=q.type,Ee===p){if(L.tag===7){a(_,L.sibling),oe=l(L,q.props.children),oe.return=_,_=oe;break e}}else if(L.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===R&&Fh(Ee)===L.type){a(_,L.sibling),oe=l(L,q.props),Uo(oe,q),oe.return=_,_=oe;break e}a(_,L);break}else t(_,L);L=L.sibling}q.type===p?(oe=hr(q.props.children,_.mode,oe,q.key),oe.return=_,_=oe):(oe=Ll(q.type,q.key,q.props,null,_.mode,oe),Uo(oe,q),oe.return=_,_=oe)}return x(_);case h:e:{for(Ee=q.key;L!==null;){if(L.key===Ee)if(L.tag===4&&L.stateNode.containerInfo===q.containerInfo&&L.stateNode.implementation===q.implementation){a(_,L.sibling),oe=l(L,q.children||[]),oe.return=_,_=oe;break e}else{a(_,L);break}else t(_,L);L=L.sibling}oe=yd(q,_.mode,oe),oe.return=_,_=oe}return x(_);case R:return Ee=q._init,q=Ee(q._payload),It(_,L,q,oe)}if(we(q))return Oe(_,L,q,oe);if(G(q)){if(Ee=G(q),typeof Ee!="function")throw Error(s(150));return q=Ee.call(q),Ye(_,L,q,oe)}if(typeof q.then=="function")return It(_,L,gl(q),oe);if(q.$$typeof===C)return It(_,L,Dl(_,q),oe);xl(_,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,L!==null&&L.tag===6?(a(_,L.sibling),oe=l(L,q),oe.return=_,_=oe):(a(_,L),oe=vd(q,_.mode,oe),oe.return=_,_=oe),x(_)):a(_,L)}return function(_,L,q,oe){try{Vo=0;var Ee=It(_,L,q,oe);return $r=null,Ee}catch(Be){if(Be===Po)throw Be;var tt=ua(29,Be,null,_.mode);return tt.lanes=oe,tt.return=_,tt}finally{}}}var ir=Qh(!0),Kh=Qh(!1),Pr=Se(null),bl=Se(0);function Zh(e,t){e=ai,Le(bl,e),Le(Pr,t),ai=e|t.baseLanes}function Eu(){Le(bl,ai),Le(Pr,Pr.current)}function Tu(){ai=bl.current,H(Pr),H(bl)}var sa=Se(null),Da=null;function Ci(e){var t=e.alternate;Le(un,un.current&1),Le(sa,e),Da===null&&(t===null||Pr.current!==null||t.memoizedState!==null)&&(Da=e)}function Ih(e){if(e.tag===22){if(Le(un,un.current),Le(sa,e),Da===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Da=e)}}else Ai()}function Ai(){Le(un,un.current),Le(sa,sa.current)}function Fa(e){H(sa),Da===e&&(Da=null),H(un)}var un=Se(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var g5=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},x5=n.unstable_scheduleCallback,b5=n.unstable_NormalPriority,dn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new g5,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&x5(b5,function(){e.controller.abort()})}var qo=null,ku=0,_r=0,Vr=null;function v5(e,t){if(qo===null){var a=qo=[];ku=0,_r=Ld(),Vr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ku++,t.then(Jh,Jh),t}function Jh(){if(--ku===0&&qo!==null){Vr!==null&&(Vr.status="fulfilled");var e=qo;qo=null,_r=0,Vr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function y5(e,t){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Wh=Q.S;Q.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&v5(e,t),Wh!==null&&Wh(e,t)};var rr=Se(null);function Ru(){var e=rr.current;return e!==null?e:zt.pooledCache}function yl(e,t){t===null?Le(rr,rr.current):Le(rr,t.pool)}function ep(){var e=Ru();return e===null?null:{parent:dn._currentValue,pool:e}}var ji=0,We=null,At=null,on=null,wl=!1,Ur=!1,or=!1,Sl=0,Go=0,Hr=null,w5=0;function an(){throw Error(s(321))}function Mu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Gn(e[a],t[a]))return!1;return!0}function Du(e,t,a,r,l,d){return ji=d,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Q.H=e===null||e.memoizedState===null?sr:Ei,or=!1,d=a(r,l),or=!1,Ur&&(d=np(t,a,r,l)),tp(e),d}function tp(e){Q.H=Oa;var t=At!==null&&At.next!==null;if(ji=0,on=At=We=null,wl=!1,Go=0,Hr=null,t)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Ml(e)&&(hn=!0))}function np(e,t,a,r){We=e;var l=0;do{if(Ur&&(Hr=null),Go=0,Ur=!1,25<=l)throw Error(s(301));if(l+=1,on=At=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Q.H=lr,d=t(a,r)}while(Ur);return d}function S5(){var e=Q.H,t=e.useState()[0];return t=typeof t.then=="function"?Yo(t):t,e=e.useState()[0],(At!==null?At.memoizedState:null)!==e&&(We.flags|=1024),t}function Ou(){var e=Sl!==0;return Sl=0,e}function Bu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Lu(e){if(wl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wl=!1}ji=0,on=At=We=null,Ur=!1,Go=Sl=0,Hr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?We.memoizedState=on=e:on=on.next=e,on}function sn(){if(At===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=At.next;var t=on===null?We.memoizedState:on.next;if(t!==null)on=t,At=e;else{if(e===null)throw We.alternate===null?Error(s(467)):Error(s(310));At=e,e={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},on===null?We.memoizedState=on=e:on=on.next=e}return on}var Cl;Cl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Yo(e){var t=Go;return Go+=1,Hr===null&&(Hr=[]),e=Yh(Hr,e,t),t=We,(on===null?t.memoizedState:on.next)===null&&(t=t.alternate,Q.H=t===null||t.memoizedState===null?sr:Ei),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yo(e);if(e.$$typeof===C)return En(e)}throw Error(s(438,String(e)))}function Nu(e){var t=null,a=We.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var r=We.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Cl(),We.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),r=0;r<e;r++)a[r]=N;return t.index++,a}function Qa(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=sn();return $u(t,At,e)}function $u(e,t,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,d=r.pending;if(d!==null){if(l!==null){var x=l.next;l.next=d.next,d.next=x}t.baseQueue=l=d,r.pending=null}if(d=e.baseState,l===null)e.memoizedState=d;else{t=l.next;var S=x=null,k=null,P=t,ne=!1;do{var ce=P.lane&-536870913;if(ce!==P.lane?(dt&ce)===ce:(ji&ce)===ce){var F=P.revertLane;if(F===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),ce===_r&&(ne=!0);else if((ji&F)===F){P=P.next,F===_r&&(ne=!0);continue}else ce={lane:0,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},k===null?(S=k=ce,x=d):k=k.next=ce,We.lanes|=F,Li|=F;ce=P.action,or&&a(d,ce),d=P.hasEagerState?P.eagerState:a(d,ce)}else F={lane:ce,revertLane:P.revertLane,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},k===null?(S=k=F,x=d):k=k.next=F,We.lanes|=ce,Li|=ce;P=P.next}while(P!==null&&P!==t);if(k===null?x=d:k.next=S,!Gn(d,e.memoizedState)&&(hn=!0,ne&&(a=Vr,a!==null)))throw a;e.memoizedState=d,e.baseState=x,e.baseQueue=k,r.lastRenderedState=d}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Pu(e){var t=sn(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,d=t.memoizedState;if(l!==null){a.pending=null;var x=l=l.next;do d=e(d,x.action),x=x.next;while(x!==l);Gn(d,t.memoizedState)||(hn=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),a.lastRenderedState=d}return[d,r]}function ap(e,t,a){var r=We,l=sn(),d=gt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=t();var x=!Gn((At||l).memoizedState,a);if(x&&(l.memoizedState=a,hn=!0),l=l.queue,Uu(op.bind(null,r,l,e),[e]),l.getSnapshot!==t||x||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,qr(9,rp.bind(null,r,l,a,t),{destroy:void 0},null),zt===null)throw Error(s(349));d||(ji&60)!==0||ip(r,t,a)}return a}function ip(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=We.updateQueue,t===null?(t=Cl(),We.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function rp(e,t,a,r){t.value=a,t.getSnapshot=r,sp(t)&&lp(e)}function op(e,t,a){return a(function(){sp(t)&&lp(e)})}function sp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Gn(e,a)}catch{return!0}}function lp(e){var t=Si(e,2);t!==null&&Dn(t,e,2)}function _u(e){var t=$n();if(typeof e=="function"){var a=e;if(e=a(),or){ze(!0);try{a()}finally{ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:e},t}function cp(e,t,a,r){return e.baseState=a,$u(e,At,typeof r=="function"?r:Qa)}function C5(e,t,a,r,l){if(zl(e))throw Error(s(485));if(e=t.action,e!==null){var d={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};Q.T!==null?a(!0):d.isTransition=!1,r(d),a=t.pending,a===null?(d.next=t.pending=d,up(t,d)):(d.next=a.next,t.pending=a.next=d)}}function up(e,t){var a=t.action,r=t.payload,l=e.state;if(t.isTransition){var d=Q.T,x={};Q.T=x;try{var S=a(l,r),k=Q.S;k!==null&&k(x,S),dp(e,t,S)}catch(P){Vu(e,t,P)}finally{Q.T=d}}else try{d=a(l,r),dp(e,t,d)}catch(P){Vu(e,t,P)}}function dp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){fp(e,t,r)},function(r){return Vu(e,t,r)}):fp(e,t,a)}function fp(e,t,a){t.status="fulfilled",t.value=a,hp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,up(e,a)))}function Vu(e,t,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=a,hp(t),t=t.next;while(t!==r)}e.action=null}function hp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function pp(e,t){return t}function mp(e,t){if(gt){var a=zt.formState;if(a!==null){e:{var r=We;if(gt){if(yn){t:{for(var l=yn,d=Ma;l.nodeType!==8;){if(!d){l=null;break t}if(l=wa(l.nextSibling),l===null){l=null;break t}}d=l.data,l=d==="F!"||d==="F"?l:null}if(l){yn=wa(l.nextSibling),r=l.data==="F!";break e}}ar(r)}r=!1}r&&(t=a[0])}}return a=$n(),a.memoizedState=a.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pp,lastRenderedState:t},a.queue=r,a=Op.bind(null,We,r),r.dispatch=a,r=_u(!1),d=Xu.bind(null,We,!1,r.queue),r=$n(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,a=C5.bind(null,We,l,d,a),l.dispatch=a,r.memoizedState=e,[t,a,!1]}function gp(e){var t=sn();return xp(t,At,e)}function xp(e,t,a){t=$u(e,t,pp)[0],e=jl(Qa)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Yo(t):t;var r=sn(),l=r.queue,d=l.dispatch;return a!==r.memoizedState&&(We.flags|=2048,qr(9,A5.bind(null,l,a),{destroy:void 0},null)),[t,d,e]}function A5(e,t){e.action=t}function bp(e){var t=sn(),a=At;if(a!==null)return xp(t,a,e);sn(),t=t.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=e,[t,r,!1]}function qr(e,t,a,r){return e={tag:e,create:t,inst:a,deps:r,next:null},t=We.updateQueue,t===null&&(t=Cl(),We.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e),e}function vp(){return sn().memoizedState}function El(e,t,a,r){var l=$n();We.flags|=e,l.memoizedState=qr(1|t,a,{destroy:void 0},r===void 0?null:r)}function Tl(e,t,a,r){var l=sn();r=r===void 0?null:r;var d=l.memoizedState.inst;At!==null&&r!==null&&Mu(r,At.memoizedState.deps)?l.memoizedState=qr(t,a,d,r):(We.flags|=e,l.memoizedState=qr(1|t,a,d,r))}function yp(e,t){El(8390656,8,e,t)}function Uu(e,t){Tl(2048,8,e,t)}function wp(e,t){return Tl(4,2,e,t)}function Sp(e,t){return Tl(4,4,e,t)}function Cp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ap(e,t,a){a=a!=null?a.concat([e]):null,Tl(4,4,Cp.bind(null,t,e),a)}function Hu(){}function jp(e,t){var a=sn();t=t===void 0?null:t;var r=a.memoizedState;return t!==null&&Mu(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function Ep(e,t){var a=sn();t=t===void 0?null:t;var r=a.memoizedState;if(t!==null&&Mu(t,r[1]))return r[0];if(r=e(),or){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[r,t],r}function qu(e,t,a){return a===void 0||(ji&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=zm(),We.lanes|=e,Li|=e,a)}function Tp(e,t,a,r){return Gn(a,t)?a:Pr.current!==null?(e=qu(e,a,r),Gn(e,t)||(hn=!0),e):(ji&42)===0?(hn=!0,e.memoizedState=a):(e=zm(),We.lanes|=e,Li|=e,t)}function zp(e,t,a,r,l){var d=me.p;me.p=d!==0&&8>d?d:8;var x=Q.T,S={};Q.T=S,Xu(e,!1,t,a);try{var k=l(),P=Q.S;if(P!==null&&P(S,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ne=y5(k,r);Xo(e,t,ne,Qn(e))}else Xo(e,t,r,Qn(e))}catch(ce){Xo(e,t,{then:function(){},status:"rejected",reason:ce},Qn())}finally{me.p=d,Q.T=x}}function j5(){}function Gu(e,t,a,r){if(e.tag!==5)throw Error(s(476));var l=kp(e).queue;zp(e,l,t,he,a===null?j5:function(){return Rp(e),a(r)})}function kp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:he},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rp(e){var t=kp(e).next.queue;Xo(e,t,{},Qn())}function Yu(){return En(fs)}function Mp(){return sn().memoizedState}function Dp(){return sn().memoizedState}function E5(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Qn();e=ki(a);var r=Ri(t,e,a);r!==null&&(Dn(r,t,a),Ko(r,t,a)),t={cache:zu()},e.payload=t;return}t=t.return}}function T5(e,t,a){var r=Qn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Bp(t,a):(a=wu(e,t,a,r),a!==null&&(Dn(a,e,r),Lp(a,t,r)))}function Op(e,t,a){var r=Qn();Xo(e,t,a,r)}function Xo(e,t,a,r){var l={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Bp(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var x=t.lastRenderedState,S=d(x,a);if(l.hasEagerState=!0,l.eagerState=S,Gn(S,x))return dl(e,t,l,0),zt===null&&ul(),!1}catch{}finally{}if(a=wu(e,t,l,r),a!==null)return Dn(a,e,r),Lp(a,t,r),!0}return!1}function Xu(e,t,a,r){if(r={lane:2,revertLane:Ld(),action:r,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(t)throw Error(s(479))}else t=wu(e,a,r,2),t!==null&&Dn(t,e,2)}function zl(e){var t=e.alternate;return e===We||t!==null&&t===We}function Bp(e,t){Ur=wl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Lp(e,t,a){if((a&4194176)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,V(e,a)}}var Oa={readContext:En,use:Al,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an};Oa.useCacheRefresh=an,Oa.useMemoCache=an,Oa.useHostTransitionStatus=an,Oa.useFormState=an,Oa.useActionState=an,Oa.useOptimistic=an;var sr={readContext:En,use:Al,useCallback:function(e,t){return $n().memoizedState=[e,t===void 0?null:t],e},useContext:En,useEffect:yp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,El(4194308,4,Cp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return El(4194308,4,e,t)},useInsertionEffect:function(e,t){El(4,2,e,t)},useMemo:function(e,t){var a=$n();t=t===void 0?null:t;var r=e();if(or){ze(!0);try{e()}finally{ze(!1)}}return a.memoizedState=[r,t],r},useReducer:function(e,t,a){var r=$n();if(a!==void 0){var l=a(t);if(or){ze(!0);try{a(t)}finally{ze(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=T5.bind(null,We,e),[r.memoizedState,e]},useRef:function(e){var t=$n();return e={current:e},t.memoizedState=e},useState:function(e){e=_u(e);var t=e.queue,a=Op.bind(null,We,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Hu,useDeferredValue:function(e,t){var a=$n();return qu(a,e,t)},useTransition:function(){var e=_u(!1);return e=zp.bind(null,We,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var r=We,l=$n();if(gt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),zt===null)throw Error(s(349));(dt&60)!==0||ip(r,t,a)}l.memoizedState=a;var d={value:a,getSnapshot:t};return l.queue=d,yp(op.bind(null,r,d,e),[e]),r.flags|=2048,qr(9,rp.bind(null,r,d,a,t),{destroy:void 0},null),a},useId:function(){var e=$n(),t=zt.identifierPrefix;if(gt){var a=Xa,r=Ya;a=(r&~(1<<32-Ae(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Sl++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=w5++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return $n().memoizedState=E5.bind(null,We)}};sr.useMemoCache=Nu,sr.useHostTransitionStatus=Yu,sr.useFormState=mp,sr.useActionState=mp,sr.useOptimistic=function(e){var t=$n();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Xu.bind(null,We,!0,a),a.dispatch=t,[e,t]};var Ei={readContext:En,use:Al,useCallback:jp,useContext:En,useEffect:Uu,useImperativeHandle:Ap,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:Ep,useReducer:jl,useRef:vp,useState:function(){return jl(Qa)},useDebugValue:Hu,useDeferredValue:function(e,t){var a=sn();return Tp(a,At.memoizedState,e,t)},useTransition:function(){var e=jl(Qa)[0],t=sn().memoizedState;return[typeof e=="boolean"?e:Yo(e),t]},useSyncExternalStore:ap,useId:Mp};Ei.useCacheRefresh=Dp,Ei.useMemoCache=Nu,Ei.useHostTransitionStatus=Yu,Ei.useFormState=gp,Ei.useActionState=gp,Ei.useOptimistic=function(e,t){var a=sn();return cp(a,At,e,t)};var lr={readContext:En,use:Al,useCallback:jp,useContext:En,useEffect:Uu,useImperativeHandle:Ap,useInsertionEffect:wp,useLayoutEffect:Sp,useMemo:Ep,useReducer:Pu,useRef:vp,useState:function(){return Pu(Qa)},useDebugValue:Hu,useDeferredValue:function(e,t){var a=sn();return At===null?qu(a,e,t):Tp(a,At.memoizedState,e,t)},useTransition:function(){var e=Pu(Qa)[0],t=sn().memoizedState;return[typeof e=="boolean"?e:Yo(e),t]},useSyncExternalStore:ap,useId:Mp};lr.useCacheRefresh=Dp,lr.useMemoCache=Nu,lr.useHostTransitionStatus=Yu,lr.useFormState=bp,lr.useActionState=bp,lr.useOptimistic=function(e,t){var a=sn();return At!==null?cp(a,At,e,t):(a.baseState=e,[e,a.queue.dispatch])};function Fu(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:de({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={isMounted:function(e){return(e=e._reactInternals)?re(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=Qn(),l=ki(r);l.payload=t,a!=null&&(l.callback=a),t=Ri(e,l,r),t!==null&&(Dn(t,e,r),Ko(t,e,r))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=Qn(),l=ki(r);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ri(e,l,r),t!==null&&(Dn(t,e,r),Ko(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Qn(),r=ki(a);r.tag=2,t!=null&&(r.callback=t),t=Ri(e,r,a),t!==null&&(Dn(t,e,a),Ko(t,e,a))}};function Np(e,t,a,r,l,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,x):t.prototype&&t.prototype.isPureReactComponent?!Oo(a,r)||!Oo(l,d):!0}function $p(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Qu.enqueueReplaceState(t,t.state,null)}function cr(e,t){var a=t;if("ref"in t){a={};for(var r in t)r!=="ref"&&(a[r]=t[r])}if(e=e.defaultProps){a===t&&(a=de({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Pp(e){kl(e)}function _p(e){console.error(e)}function Vp(e){kl(e)}function Rl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Up(e,t,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ku(e,t,a){return a=ki(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,t)},a}function Hp(e){return e=ki(e),e.tag=3,e}function qp(e,t,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var d=r.value;e.payload=function(){return l(d)},e.callback=function(){Up(t,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Up(t,a,r),typeof l!="function"&&(Ni===null?Ni=new Set([this]):Ni.add(this));var S=r.stack;this.componentDidCatch(r.value,{componentStack:S!==null?S:""})})}function z5(e,t,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=a.alternate,t!==null&&Qo(t,a,l,!0),a=sa.current,a!==null){switch(a.tag){case 13:return Da===null?Rd():a.alternate===null&&Zt===0&&(Zt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===ju?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([r]):t.add(r),Dd(e,r,l)),!1;case 22:return a.flags|=65536,r===ju?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([r]):a.add(r)),Dd(e,r,l)),!1}throw Error(s(435,a.tag))}return Dd(e,r,l),Rd(),!1}if(gt)return t=sa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==Au&&(e=Error(s(422),{cause:r}),$o(ia(e,a)))):(r!==Au&&(t=Error(s(423),{cause:r}),$o(ia(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=ia(r,a),l=Ku(e.stateNode,r,l),ud(e,l),Zt!==4&&(Zt=2)),!1;var d=Error(s(520),{cause:r});if(d=ia(d,a),as===null?as=[d]:as.push(d),Zt!==4&&(Zt=2),t===null)return!0;r=ia(r,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Ku(a.stateNode,r,e),ud(a,e),!1;case 1:if(t=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ni===null||!Ni.has(d))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Hp(l),qp(l,e,a,r),ud(a,l),!1}a=a.return}while(a!==null);return!1}var Gp=Error(s(461)),hn=!1;function wn(e,t,a,r){t.child=e===null?Kh(t,null,a,r):ir(t,e.child,a,r)}function Yp(e,t,a,r,l){a=a.render;var d=t.ref;if("ref"in r){var x={};for(var S in r)S!=="ref"&&(x[S]=r[S])}else x=r;return dr(t),r=Du(e,t,a,x,d,l),S=Ou(),e!==null&&!hn?(Bu(e,t,l),Ka(e,t,l)):(gt&&S&&Su(t),t.flags|=1,wn(e,t,r,l),t.child)}function Xp(e,t,a,r,l){if(e===null){var d=a.type;return typeof d=="function"&&!bd(d)&&d.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=d,Fp(e,t,d,r,l)):(e=Ll(a.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!id(e,l)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(x,r)&&e.ref===t.ref)return Ka(e,t,l)}return t.flags|=1,e=Bi(d,r),e.ref=t.ref,e.return=t,t.child=e}function Fp(e,t,a,r,l){if(e!==null){var d=e.memoizedProps;if(Oo(d,r)&&e.ref===t.ref)if(hn=!1,t.pendingProps=r=d,id(e,l))(e.flags&131072)!==0&&(hn=!0);else return t.lanes=e.lanes,Ka(e,t,l)}return Zu(e,t,a,r,l)}function Qp(e,t,a){var r=t.pendingProps,l=r.children,d=(t.stateNode._pendingVisibility&2)!==0,x=e!==null?e.memoizedState:null;if(Fo(e,t),r.mode==="hidden"||d){if((t.flags&128)!==0){if(r=x!==null?x.baseLanes|a:a,e!==null){for(l=t.child=e.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;t.childLanes=d&~r}else t.childLanes=0,t.child=null;return Kp(e,t,r,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(t,x!==null?x.cachePool:null),x!==null?Zh(t,x):Eu(),Ih(t);else return t.lanes=t.childLanes=536870912,Kp(e,t,x!==null?x.baseLanes|a:a,a)}else x!==null?(yl(t,x.cachePool),Zh(t,x),Ai(),t.memoizedState=null):(e!==null&&yl(t,null),Eu(),Ai());return wn(e,t,l,a),t.child}function Kp(e,t,a,r){var l=Ru();return l=l===null?null:{parent:dn._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&yl(t,null),Eu(),Ih(t),e!==null&&Qo(e,t,r,!0),null}function Fo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=2097664)}}function Zu(e,t,a,r,l){return dr(t),a=Du(e,t,a,r,void 0,l),r=Ou(),e!==null&&!hn?(Bu(e,t,l),Ka(e,t,l)):(gt&&r&&Su(t),t.flags|=1,wn(e,t,a,l),t.child)}function Zp(e,t,a,r,l,d){return dr(t),t.updateQueue=null,a=np(t,r,a,l),tp(e),r=Ou(),e!==null&&!hn?(Bu(e,t,d),Ka(e,t,d)):(gt&&r&&Su(t),t.flags|=1,wn(e,t,a,d),t.child)}function Ip(e,t,a,r,l){if(dr(t),t.stateNode===null){var d=Br,x=a.contextType;typeof x=="object"&&x!==null&&(d=En(x)),d=new a(r,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Qu,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=r,d.state=t.memoizedState,d.refs={},ld(t),x=a.contextType,d.context=typeof x=="object"&&x!==null?En(x):Br,d.state=t.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Fu(t,a,x,r),d.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Qu.enqueueReplaceState(d,d.state,null),Io(t,r,d,l),Zo(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){d=t.stateNode;var S=t.memoizedProps,k=cr(a,S);d.props=k;var P=d.context,ne=a.contextType;x=Br,typeof ne=="object"&&ne!==null&&(x=En(ne));var ce=a.getDerivedStateFromProps;ne=typeof ce=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,ne||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||P!==x)&&$p(t,d,r,x),zi=!1;var F=t.memoizedState;d.state=F,Io(t,r,d,l),Zo(),P=t.memoizedState,S||F!==P||zi?(typeof ce=="function"&&(Fu(t,a,ce,r),P=t.memoizedState),(k=zi||Np(t,a,k,r,F,P,x))?(ne||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=P),d.props=r,d.state=P,d.context=x,r=k):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,cd(e,t),x=t.memoizedProps,ne=cr(a,x),d.props=ne,ce=t.pendingProps,F=d.context,P=a.contextType,k=Br,typeof P=="object"&&P!==null&&(k=En(P)),S=a.getDerivedStateFromProps,(P=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==ce||F!==k)&&$p(t,d,r,k),zi=!1,F=t.memoizedState,d.state=F,Io(t,r,d,l),Zo();var ee=t.memoizedState;x!==ce||F!==ee||zi||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof S=="function"&&(Fu(t,a,S,r),ee=t.memoizedState),(ne=zi||Np(t,a,ne,r,F,ee,k)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(P||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,ee,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,ee,k)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ee),d.props=r,d.state=ee,d.context=k,r=ne):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),r=!1)}return d=r,Fo(e,t),r=(t.flags&128)!==0,d||r?(d=t.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&r?(t.child=ir(t,e.child,null,l),t.child=ir(t,null,a,l)):wn(e,t,a,l),t.memoizedState=d.state,e=t.child):e=Ka(e,t,l),e}function Jp(e,t,a,r){return No(),t.flags|=256,wn(e,t,a,r),t.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Ju(e){return{baseLanes:e,cachePool:ep()}}function Wu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=da),e}function Wp(e,t,a){var r=t.pendingProps,l=!1,d=(t.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),x&&(l=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(gt){if(l?Ci(t):Ai(),gt){var S=yn,k;if(k=S){e:{for(k=S,S=Ma;k.nodeType!==8;){if(!S){S=null;break e}if(k=wa(k.nextSibling),k===null){S=null;break e}}S=k}S!==null?(t.memoizedState={dehydrated:S,treeContext:tr!==null?{id:Ya,overflow:Xa}:null,retryLane:536870912},k=ua(18,null,null,0),k.stateNode=S,k.return=t,t.child=k,Mn=t,yn=null,k=!0):k=!1}k||ar(t)}if(S=t.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return S.data==="$!"?t.lanes=16:t.lanes=536870912,null;Fa(t)}return S=r.children,r=r.fallback,l?(Ai(),l=t.mode,S=td({mode:"hidden",children:S},l),r=hr(r,l,a,null),S.return=t,r.return=t,S.sibling=r,t.child=S,l=t.child,l.memoizedState=Ju(a),l.childLanes=Wu(e,x,a),t.memoizedState=Iu,r):(Ci(t),ed(t,S))}if(k=e.memoizedState,k!==null&&(S=k.dehydrated,S!==null)){if(d)t.flags&256?(Ci(t),t.flags&=-257,t=nd(e,t,a)):t.memoizedState!==null?(Ai(),t.child=e.child,t.flags|=128,t=null):(Ai(),l=r.fallback,S=t.mode,r=td({mode:"visible",children:r.children},S),l=hr(l,S,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,ir(t,e.child,null,a),r=t.child,r.memoizedState=Ju(a),r.childLanes=Wu(e,x,a),t.memoizedState=Iu,t=l);else if(Ci(t),S.data==="$!"){if(x=S.nextSibling&&S.nextSibling.dataset,x)var P=x.dgst;x=P,r=Error(s(419)),r.stack="",r.digest=x,$o({value:r,source:null,stack:null}),t=nd(e,t,a)}else if(hn||Qo(e,t,a,!1),x=(a&e.childLanes)!==0,hn||x){if(x=zt,x!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(x.suspendedLanes|a))!==0?0:r,r!==0&&r!==k.retryLane)throw k.retryLane=r,Si(e,r),Dn(x,e,r),Gp}S.data==="$?"||Rd(),t=nd(e,t,a)}else S.data==="$?"?(t.flags|=128,t.child=e.child,t=q5.bind(null,e),S._reactRetry=t,t=null):(e=k.treeContext,yn=wa(S.nextSibling),Mn=t,gt=!0,va=null,Ma=!1,e!==null&&(ra[oa++]=Ya,ra[oa++]=Xa,ra[oa++]=tr,Ya=e.id,Xa=e.overflow,tr=t),t=ed(t,r.children),t.flags|=4096);return t}return l?(Ai(),l=r.fallback,S=t.mode,k=e.child,P=k.sibling,r=Bi(k,{mode:"hidden",children:r.children}),r.subtreeFlags=k.subtreeFlags&31457280,P!==null?l=Bi(P,l):(l=hr(l,S,a,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,S=e.child.memoizedState,S===null?S=Ju(a):(k=S.cachePool,k!==null?(P=dn._currentValue,k=k.parent!==P?{parent:P,pool:P}:k):k=ep(),S={baseLanes:S.baseLanes|a,cachePool:k}),l.memoizedState=S,l.childLanes=Wu(e,x,a),t.memoizedState=Iu,r):(Ci(t),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:r.children}),a.return=t,a.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=a,t.memoizedState=null,a)}function ed(e,t){return t=td({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function td(e,t){return jm(e,t,0,null)}function nd(e,t,a){return ir(t,e.child,null,a),e=ed(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),od(e.return,t,a)}function ad(e,t,a,r,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=a,d.tailMode=l)}function tm(e,t,a){var r=t.pendingProps,l=r.revealOrder,d=r.tail;if(wn(e,t,r.children,a),r=un.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,a,t);else if(e.tag===19)em(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Le(un,r),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),ad(t,!1,l,a,d);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}ad(t,!0,a,null,d);break;case"together":ad(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ka(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Li|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Qo(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Bi(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function id(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function k5(e,t,a){switch(t.tag){case 3:Ot(t,t.stateNode.containerInfo),Ti(t,dn,e.memoizedState.cache),No();break;case 27:case 5:Me(t);break;case 4:Ot(t,t.stateNode.containerInfo);break;case 10:Ti(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Ci(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wp(e,t,a):(Ci(t),e=Ka(e,t,a),e!==null?e.sibling:null);Ci(t);break;case 19:var l=(e.flags&128)!==0;if(r=(a&t.childLanes)!==0,r||(Qo(e,t,a,!1),r=(a&t.childLanes)!==0),l){if(r)return tm(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Le(un,un.current),r)break;return null;case 22:case 23:return t.lanes=0,Qp(e,t,a);case 24:Ti(t,dn,e.memoizedState.cache)}return Ka(e,t,a)}function nm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)hn=!0;else{if(!id(e,a)&&(t.flags&128)===0)return hn=!1,k5(e,t,a);hn=(e.flags&131072)!==0}else hn=!1,gt&&(t.flags&1048576)!==0&&Vh(t,pl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,l=r._init;if(r=l(r._payload),t.type=r,typeof r=="function")bd(r)?(e=cr(r,e),t.tag=1,t=Ip(null,t,r,e,a)):(t.tag=0,t=Zu(null,t,r,e,a));else{if(r!=null){if(l=r.$$typeof,l===E){t.tag=11,t=Yp(null,t,r,e,a);break e}else if(l===A){t.tag=14,t=Xp(null,t,r,e,a);break e}}throw t=ae(r)||r,Error(s(306,t,""))}}return t;case 0:return Zu(e,t,t.type,t.pendingProps,a);case 1:return r=t.type,l=cr(r,t.pendingProps),Ip(e,t,r,l,a);case 3:e:{if(Ot(t,t.stateNode.containerInfo),e===null)throw Error(s(387));var d=t.pendingProps;l=t.memoizedState,r=l.element,cd(e,t),Io(t,d,null,a);var x=t.memoizedState;if(d=x.cache,Ti(t,dn,d),d!==l.cache&&sd(t,[dn],a,!0),Zo(),d=x.element,l.isDehydrated)if(l={element:d,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Jp(e,t,d,a);break e}else if(d!==r){r=ia(Error(s(424)),t),$o(r),t=Jp(e,t,d,a);break e}else for(yn=wa(t.stateNode.containerInfo.firstChild),Mn=t,gt=!0,va=null,Ma=!0,a=Kh(t,null,d,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(No(),d===r){t=Ka(e,t,a);break e}wn(e,t,d,a)}t=t.child}return t;case 26:return Fo(e,t),e===null?(a=rg(t.type,null,t.pendingProps,null))?t.memoizedState=a:gt||(a=t.type,e=t.pendingProps,r=Fl(qe.current).createElement(a),r[De]=t,r[Ue]=e,Sn(r,a,e),Ze(r),t.stateNode=r):t.memoizedState=rg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Me(t),e===null&&gt&&(r=t.stateNode=ng(t.type,t.pendingProps,qe.current),Mn=t,Ma=!0,yn=wa(r.firstChild)),r=t.pendingProps.children,e!==null||gt?wn(e,t,r,a):t.child=ir(t,null,r,a),Fo(e,t),t.child;case 5:return e===null&&gt&&((l=r=yn)&&(r=ry(r,t.type,t.pendingProps,Ma),r!==null?(t.stateNode=r,Mn=t,yn=wa(r.firstChild),Ma=!1,l=!0):l=!1),l||ar(t)),Me(t),l=t.type,d=t.pendingProps,x=e!==null?e.memoizedProps:null,r=d.children,Gd(l,d)?r=null:x!==null&&Gd(l,x)&&(t.flags|=32),t.memoizedState!==null&&(l=Du(e,t,S5,null,null,a),fs._currentValue=l),Fo(e,t),wn(e,t,r,a),t.child;case 6:return e===null&&gt&&((e=a=yn)&&(a=oy(a,t.pendingProps,Ma),a!==null?(t.stateNode=a,Mn=t,yn=null,e=!0):e=!1),e||ar(t)),null;case 13:return Wp(e,t,a);case 4:return Ot(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,a):wn(e,t,r,a),t.child;case 11:return Yp(e,t,t.type,t.pendingProps,a);case 7:return wn(e,t,t.pendingProps,a),t.child;case 8:return wn(e,t,t.pendingProps.children,a),t.child;case 12:return wn(e,t,t.pendingProps.children,a),t.child;case 10:return r=t.pendingProps,Ti(t,t.type,r.value),wn(e,t,r.children,a),t.child;case 9:return l=t.type._context,r=t.pendingProps.children,dr(t),l=En(l),r=r(l),t.flags|=1,wn(e,t,r,a),t.child;case 14:return Xp(e,t,t.type,t.pendingProps,a);case 15:return Fp(e,t,t.type,t.pendingProps,a);case 19:return tm(e,t,a);case 22:return Qp(e,t,a);case 24:return dr(t),r=En(dn),e===null?(l=Ru(),l===null&&(l=zt,d=zu(),l.pooledCache=d,d.refCount++,d!==null&&(l.pooledCacheLanes|=a),l=d),t.memoizedState={parent:r,cache:l},ld(t),Ti(t,dn,l)):((e.lanes&a)!==0&&(cd(e,t),Io(t,null,null,a),Zo()),l=e.memoizedState,d=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ti(t,dn,r)):(r=d.cache,Ti(t,dn,r),r!==l.cache&&sd(t,[dn],a,!0))),wn(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}var rd=Se(null),ur=null,Za=null;function Ti(e,t,a){Le(rd,t._currentValue),t._currentValue=a}function Ia(e){e._currentValue=rd.current,H(rd)}function od(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function sd(e,t,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var d=l.dependencies;if(d!==null){var x=l.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=l;for(var k=0;k<t.length;k++)if(S.context===t[k]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),od(d.return,a,e),r||(x=null);break e}d=S.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),od(x,a,e),x=null}else x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===e){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function Qo(e,t,a,r){e=null;for(var l=t,d=!1;l!==null;){if(!d){if((l.flags&524288)!==0)d=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var S=l.type;Gn(l.pendingProps.value,x.value)||(e!==null?e.push(S):e=[S])}}else if(l===ft.current){if(x=l.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(fs):e=[fs])}l=l.return}e!==null&&sd(t,e,a,r),t.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){ur=e,Za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return am(ur,e)}function Dl(e,t){return ur===null&&dr(e),am(e,t)}function am(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Za===null){if(e===null)throw Error(s(308));Za=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Za=Za.next=t;return a}var zi=!1;function ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ki(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(_t&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=fl(e),Ph(e,null,a),t}return dl(e,r,t,a),fl(e)}function Ko(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194176)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,V(e,a)}}function ud(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?l=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?l=d=t:d=d.next=t}else l=d=t;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var dd=!1;function Zo(){if(dd){var e=Vr;if(e!==null)throw e}}function Io(e,t,a,r){dd=!1;var l=e.updateQueue;zi=!1;var d=l.firstBaseUpdate,x=l.lastBaseUpdate,S=l.shared.pending;if(S!==null){l.shared.pending=null;var k=S,P=k.next;k.next=null,x===null?d=P:x.next=P,x=k;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==x&&(S===null?ne.firstBaseUpdate=P:S.next=P,ne.lastBaseUpdate=k))}if(d!==null){var ce=l.baseState;x=0,ne=P=k=null,S=d;do{var F=S.lane&-536870913,ee=F!==S.lane;if(ee?(dt&F)===F:(r&F)===F){F!==0&&F===_r&&(dd=!0),ne!==null&&(ne=ne.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Oe=e,Ye=S;F=t;var It=a;switch(Ye.tag){case 1:if(Oe=Ye.payload,typeof Oe=="function"){ce=Oe.call(It,ce,F);break e}ce=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Ye.payload,F=typeof Oe=="function"?Oe.call(It,ce,F):Oe,F==null)break e;ce=de({},ce,F);break e;case 2:zi=!0}}F=S.callback,F!==null&&(e.flags|=64,ee&&(e.flags|=8192),ee=l.callbacks,ee===null?l.callbacks=[F]:ee.push(F))}else ee={lane:F,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(P=ne=ee,k=ce):ne=ne.next=ee,x|=F;if(S=S.next,S===null){if(S=l.shared.pending,S===null)break;ee=S,S=ee.next,ee.next=null,l.lastBaseUpdate=ee,l.shared.pending=null}}while(!0);ne===null&&(k=ce),l.baseState=k,l.firstBaseUpdate=P,l.lastBaseUpdate=ne,d===null&&(l.shared.lanes=0),Li|=x,e.lanes=x,e.memoizedState=ce}}function im(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function rm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],t)}function Jo(e,t){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var d=a.create,x=a.inst;r=d(),x.destroy=r}a=a.next}while(a!==l)}}catch(S){Tt(t,t.return,S)}}function Mi(e,t,a){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var d=l.next;r=d;do{if((r.tag&e)===e){var x=r.inst,S=x.destroy;if(S!==void 0){x.destroy=void 0,l=t;var k=a;try{S()}catch(P){Tt(l,k,P)}}}r=r.next}while(r!==d)}}catch(P){Tt(t,t.return,P)}}function om(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{rm(t,a)}catch(r){Tt(e,e.return,r)}}}function sm(e,t,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Tt(e,t,r)}}function fr(e,t){try{var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var l=r;break;default:l=r}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(d){Tt(e,t,d)}}function Yn(e,t){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Tt(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Tt(e,t,l)}else a.current=null}function lm(e){var t=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Tt(e,e.return,l)}}function cm(e,t,a){try{var r=e.stateNode;ey(r,e.type,a,t),r[Ue]=t}catch(l){Tt(e,e.return,l)}}function um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xl));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(hd(e,t,a),e=e.sibling;e!==null;)hd(e,t,a),e=e.sibling}function Ol(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Ol(e,t,a),e=e.sibling;e!==null;)Ol(e,t,a),e=e.sibling}var Ja=!1,Kt=!1,pd=!1,dm=typeof WeakSet=="function"?WeakSet:Set,pn=null,fm=!1;function R5(e,t){if(e=e.containerInfo,Hd=Wl,e=kh(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var l=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,S=-1,k=-1,P=0,ne=0,ce=e,F=null;t:for(;;){for(var ee;ce!==a||l!==0&&ce.nodeType!==3||(S=x+l),ce!==d||r!==0&&ce.nodeType!==3||(k=x+r),ce.nodeType===3&&(x+=ce.nodeValue.length),(ee=ce.firstChild)!==null;)F=ce,ce=ee;for(;;){if(ce===e)break t;if(F===a&&++P===l&&(S=x),F===d&&++ne===r&&(k=x),(ee=ce.nextSibling)!==null)break;ce=F,F=ce.parentNode}ce=ee}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(qd={focusedElem:e,selectionRange:a},Wl=!1,pn=t;pn!==null;)if(t=pn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pn=e;else for(;pn!==null;){switch(t=pn,d=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=t,l=d.memoizedProps,d=d.memoizedState,r=a.stateNode;try{var Oe=cr(a.type,l,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(Oe,d),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ye){Tt(a,a.return,Ye)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Fd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,pn=e;break}pn=t.return}return Oe=fm,fm=!1,Oe}function hm(e,t,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ei(e,a),r&4&&Jo(5,a);break;case 1:if(ei(e,a),r&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(S){Tt(a,a.return,S)}else{var l=cr(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Tt(a,a.return,S)}}r&64&&om(a),r&512&&fr(a,a.return);break;case 3:if(ei(e,a),r&64&&(r=a.updateQueue,r!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{rm(r,e)}catch(S){Tt(a,a.return,S)}}break;case 26:ei(e,a),r&512&&fr(a,a.return);break;case 27:case 5:ei(e,a),t===null&&r&4&&lm(a),r&512&&fr(a,a.return);break;case 12:ei(e,a);break;case 13:ei(e,a),r&4&&gm(e,a);break;case 22:if(l=a.memoizedState!==null||Ja,!l){t=t!==null&&t.memoizedState!==null||Kt;var d=Ja,x=Kt;Ja=l,(Kt=t)&&!x?Di(e,a,(a.subtreeFlags&8772)!==0):ei(e,a),Ja=d,Kt=x}r&512&&(a.memoizedProps.mode==="manual"?fr(a,a.return):Yn(a,a.return));break;default:ei(e,a)}}function pm(e){var t=e.alternate;t!==null&&(e.alternate=null,pm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Je(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,Xn=!1;function Wa(e,t,a){for(a=a.child;a!==null;)mm(e,t,a),a=a.sibling}function mm(e,t,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:Kt||Yn(a,t),Wa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||Yn(a,t);var r=ln,l=Xn;for(ln=a.stateNode,Wa(e,t,a),a=a.stateNode,t=a.attributes;t.length;)a.removeAttributeNode(t[0]);Je(a),ln=r,Xn=l;break;case 5:Kt||Yn(a,t);case 6:l=ln;var d=Xn;if(ln=null,Wa(e,t,a),ln=l,Xn=d,ln!==null)if(Xn)try{e=ln,r=a.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(x){Tt(a,t,x)}else try{ln.removeChild(a.stateNode)}catch(x){Tt(a,t,x)}break;case 18:ln!==null&&(Xn?(t=ln,a=a.stateNode,t.nodeType===8?Xd(t.parentNode,a):t.nodeType===1&&Xd(t,a),gs(t)):Xd(ln,a.stateNode));break;case 4:r=ln,l=Xn,ln=a.stateNode.containerInfo,Xn=!0,Wa(e,t,a),ln=r,Xn=l;break;case 0:case 11:case 14:case 15:Kt||Mi(2,a,t),Kt||Mi(4,a,t),Wa(e,t,a);break;case 1:Kt||(Yn(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"&&sm(a,t,r)),Wa(e,t,a);break;case 21:Wa(e,t,a);break;case 22:Kt||Yn(a,t),Kt=(r=Kt)||a.memoizedState!==null,Wa(e,t,a),Kt=r;break;default:Wa(e,t,a)}}function gm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(a){Tt(t,t.return,a)}}function M5(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new dm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new dm),t;default:throw Error(s(435,e.tag))}}function md(e,t){var a=M5(e);t.forEach(function(r){var l=G5.bind(null,e,r);a.has(r)||(a.add(r),r.then(l,l))})}function la(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r],d=e,x=t,S=x;e:for(;S!==null;){switch(S.tag){case 27:case 5:ln=S.stateNode,Xn=!1;break e;case 3:ln=S.stateNode.containerInfo,Xn=!0;break e;case 4:ln=S.stateNode.containerInfo,Xn=!0;break e}S=S.return}if(ln===null)throw Error(s(160));mm(d,x,l),ln=null,Xn=!1,d=l.alternate,d!==null&&(d.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)xm(t,e),t=t.sibling}var ya=null;function xm(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:la(t,e),ca(e),r&4&&(Mi(3,e,e.return),Jo(3,e),Mi(5,e,e.return));break;case 1:la(t,e),ca(e),r&512&&(Kt||a===null||Yn(a,a.return)),r&64&&Ja&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var l=ya;if(la(t,e),ca(e),r&512&&(Kt||a===null||Yn(a,a.return)),r&4){var d=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(r){case"title":d=l.getElementsByTagName("title")[0],(!d||d[at]||d[De]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=l.createElement(r),l.head.insertBefore(d,l.querySelector("head > title"))),Sn(d,r,a),d[De]=e,Ze(d),r=d;break e;case"link":var x=lg("link","href",l).get(r+(a.href||""));if(x){for(var S=0;S<x.length;S++)if(d=x[S],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(S,1);break t}}d=l.createElement(r),Sn(d,r,a),l.head.appendChild(d);break;case"meta":if(x=lg("meta","content",l).get(r+(a.content||""))){for(S=0;S<x.length;S++)if(d=x[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(S,1);break t}}d=l.createElement(r),Sn(d,r,a),l.head.appendChild(d);break;default:throw Error(s(468,r))}d[De]=e,Ze(d),r=d}e.stateNode=r}else cg(l,e.type,e.stateNode);else e.stateNode=sg(l,r,e.memoizedProps);else d!==r?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,r===null?cg(l,e.type,e.stateNode):sg(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&cm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&e.alternate===null){l=e.stateNode,d=e.memoizedProps;try{for(var k=l.firstChild;k;){var P=k.nextSibling,ne=k.nodeName;k[at]||ne==="HEAD"||ne==="BODY"||ne==="SCRIPT"||ne==="STYLE"||ne==="LINK"&&k.rel.toLowerCase()==="stylesheet"||l.removeChild(k),k=P}for(var ce=e.type,F=l.attributes;F.length;)l.removeAttributeNode(F[0]);Sn(l,ce,d),l[De]=e,l[Ue]=d}catch(Oe){Tt(e,e.return,Oe)}}case 5:if(la(t,e),ca(e),r&512&&(Kt||a===null||Yn(a,a.return)),e.flags&32){l=e.stateNode;try{jn(l,"")}catch(Oe){Tt(e,e.return,Oe)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,cm(e,l,a!==null?a.memoizedProps:l)),r&1024&&(pd=!0);break;case 6:if(la(t,e),ca(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Oe){Tt(e,e.return,Oe)}}break;case 3:if(Zl=null,l=ya,ya=Ql(t.containerInfo),la(t,e),ya=l,ca(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(t.containerInfo)}catch(Oe){Tt(e,e.return,Oe)}pd&&(pd=!1,bm(e));break;case 4:r=ya,ya=Ql(e.stateNode.containerInfo),la(t,e),ca(e),ya=r;break;case 12:la(t,e),ca(e);break;case 13:la(t,e),ca(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ad=Xe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,md(e,r)));break;case 22:if(r&512&&(Kt||a===null||Yn(a,a.return)),k=e.memoizedState!==null,P=a!==null&&a.memoizedState!==null,ne=Ja,ce=Kt,Ja=ne||k,Kt=ce||P,la(t,e),Kt=ce,Ja=ne,ca(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,r&8192&&(t._visibility=k?t._visibility&-2:t._visibility|1,k&&(t=Ja||Kt,a===null||P||t||Gr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(a=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(a===null){P=a=t;try{if(l=P.stateNode,k)d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{x=P.stateNode,S=P.memoizedProps.style;var ee=S!=null&&S.hasOwnProperty("display")?S.display:null;x.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Oe){Tt(P,P.return,Oe)}}}else if(t.tag===6){if(a===null){P=t;try{P.stateNode.nodeValue=k?"":P.memoizedProps}catch(Oe){Tt(P,P.return,Oe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,md(e,a))));break;case 19:la(t,e),ca(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,md(e,r)));break;case 21:break;default:la(t,e),ca(e)}}function ca(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var a=e.return;a!==null;){if(um(a)){var r=a;break e}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var l=r.stateNode,d=fd(e);Ol(e,d,l);break;case 5:var x=r.stateNode;r.flags&32&&(jn(x,""),r.flags&=-33);var S=fd(e);Ol(e,S,x);break;case 3:case 4:var k=r.stateNode.containerInfo,P=fd(e);hd(e,P,k);break;default:throw Error(s(161))}}}catch(ne){Tt(e,e.return,ne)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ei(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hm(e,t.alternate,t),t=t.sibling}function Gr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Mi(4,t,t.return),Gr(t);break;case 1:Yn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&sm(t,t.return,a),Gr(t);break;case 26:case 27:case 5:Yn(t,t.return),Gr(t);break;case 22:Yn(t,t.return),t.memoizedState===null&&Gr(t);break;default:Gr(t)}e=e.sibling}}function Di(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,l=e,d=t,x=d.flags;switch(d.tag){case 0:case 11:case 15:Di(l,d,a),Jo(4,d);break;case 1:if(Di(l,d,a),r=d,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(P){Tt(r,r.return,P)}if(r=d,l=r.updateQueue,l!==null){var S=r.stateNode;try{var k=l.shared.hiddenCallbacks;if(k!==null)for(l.shared.hiddenCallbacks=null,l=0;l<k.length;l++)im(k[l],S)}catch(P){Tt(r,r.return,P)}}a&&x&64&&om(d),fr(d,d.return);break;case 26:case 27:case 5:Di(l,d,a),a&&r===null&&x&4&&lm(d),fr(d,d.return);break;case 12:Di(l,d,a);break;case 13:Di(l,d,a),a&&x&4&&gm(l,d);break;case 22:d.memoizedState===null&&Di(l,d,a),fr(d,d.return);break;default:Di(l,d,a)}t=t.sibling}}function gd(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function xd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ho(e))}function Oi(e,t,a,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vm(e,t,a,r),t=t.sibling}function vm(e,t,a,r){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Oi(e,t,a,r),l&2048&&Jo(9,t);break;case 3:Oi(e,t,a,r),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ho(e)));break;case 12:if(l&2048){Oi(e,t,a,r),e=t.stateNode;try{var d=t.memoizedProps,x=d.id,S=d.onPostCommit;typeof S=="function"&&S(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Tt(t,t.return,k)}}else Oi(e,t,a,r);break;case 23:break;case 22:d=t.stateNode,t.memoizedState!==null?d._visibility&4?Oi(e,t,a,r):Wo(e,t):d._visibility&4?Oi(e,t,a,r):(d._visibility|=4,Yr(e,t,a,r,(t.subtreeFlags&10256)!==0)),l&2048&&gd(t.alternate,t);break;case 24:Oi(e,t,a,r),l&2048&&xd(t.alternate,t);break;default:Oi(e,t,a,r)}}function Yr(e,t,a,r,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var d=e,x=t,S=a,k=r,P=x.flags;switch(x.tag){case 0:case 11:case 15:Yr(d,x,S,k,l),Jo(8,x);break;case 23:break;case 22:var ne=x.stateNode;x.memoizedState!==null?ne._visibility&4?Yr(d,x,S,k,l):Wo(d,x):(ne._visibility|=4,Yr(d,x,S,k,l)),l&&P&2048&&gd(x.alternate,x);break;case 24:Yr(d,x,S,k,l),l&&P&2048&&xd(x.alternate,x);break;default:Yr(d,x,S,k,l)}t=t.sibling}}function Wo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,r=t,l=r.flags;switch(r.tag){case 22:Wo(a,r),l&2048&&gd(r.alternate,r);break;case 24:Wo(a,r),l&2048&&xd(r.alternate,r);break;default:Wo(a,r)}t=t.sibling}}var es=8192;function Xr(e){if(e.subtreeFlags&es)for(e=e.child;e!==null;)ym(e),e=e.sibling}function ym(e){switch(e.tag){case 26:Xr(e),e.flags&es&&e.memoizedState!==null&&vy(ya,e.memoizedState,e.memoizedProps);break;case 5:Xr(e);break;case 3:case 4:var t=ya;ya=Ql(e.stateNode.containerInfo),Xr(e),ya=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=es,es=16777216,Xr(e),es=t):Xr(e));break;default:Xr(e)}}function wm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];pn=r,Cm(r,e)}wm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sm(e),e=e.sibling}function Sm(e){switch(e.tag){case 0:case 11:case 15:ts(e),e.flags&2048&&Mi(9,e,e.return);break;case 3:ts(e);break;case 12:ts(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Bl(e)):ts(e);break;default:ts(e)}}function Bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];pn=r,Cm(r,e)}wm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Mi(8,t,t.return),Bl(t);break;case 22:a=t.stateNode,a._visibility&4&&(a._visibility&=-5,Bl(t));break;default:Bl(t)}e=e.sibling}}function Cm(e,t){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Mi(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else e:for(a=e;pn!==null;){r=pn;var l=r.sibling,d=r.return;if(pm(r),r===a){pn=null;break e}if(l!==null){l.return=d,pn=l;break e}pn=d}}}function D5(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ua(e,t,a,r){return new D5(e,t,a,r)}function bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,t){var a=e.alternate;return a===null?(a=ua(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Am(e,t){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ll(e,t,a,r,l,d){var x=0;if(r=e,typeof e=="function")bd(e)&&(x=1);else if(typeof e=="string")x=xy(e,a,ve.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case p:return hr(a.children,l,d,t);case g:x=8,l|=24;break;case b:return e=ua(12,a,t,l|2),e.elementType=b,e.lanes=d,e;case O:return e=ua(13,a,t,l),e.elementType=O,e.lanes=d,e;case B:return e=ua(19,a,t,l),e.elementType=B,e.lanes=d,e;case T:return jm(a,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case C:x=10;break e;case w:x=9;break e;case E:x=11;break e;case A:x=14;break e;case R:x=16,r=null;break e}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=ua(x,a,t,l),t.elementType=e,t.type=r,t.lanes=d,t}function hr(e,t,a,r){return e=ua(7,e,r,t),e.lanes=a,e}function jm(e,t,a,r){e=ua(22,e,r,t),e.elementType=T,e.lanes=a;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=l._current;if(d===null)throw Error(s(456));if((l._pendingVisibility&2)===0){var x=Si(d,2);x!==null&&(l._pendingVisibility|=2,Dn(x,d,2))}},attach:function(){var d=l._current;if(d===null)throw Error(s(456));if((l._pendingVisibility&2)!==0){var x=Si(d,2);x!==null&&(l._pendingVisibility&=-3,Dn(x,d,2))}}};return e.stateNode=l,e}function vd(e,t,a){return e=ua(6,e,null,t),e.lanes=a,e}function yd(e,t,a){return t=ua(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ti(e){e.flags|=4}function Em(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ug(t)){if(t=sa.current,t!==null&&((dt&4194176)===dt?Da!==null:(dt&62914560)!==dt&&(dt&536870912)===0||t!==Da))throw _o=ju,qh;e.flags|=8192}}function Nl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jn():536870912,e.lanes|=t,Qr|=t)}function ns(e,t){if(!gt)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&31457280,r|=l.flags&31457280,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function O5(e,t,a){var r=t.pendingProps;switch(Cu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(t),null;case 1:return Pt(t),null;case 3:return a=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ia(dn),_e(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Lo(t)?ti(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,va!==null&&(zd(va),va=null))),Pt(t),null;case 26:return a=t.memoizedState,e===null?(ti(t),a!==null?(Pt(t),Em(t,a)):(Pt(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ti(t),Pt(t),Em(t,a)):(Pt(t),t.flags&=-16777217):(e.memoizedProps!==r&&ti(t),Pt(t),t.flags&=-16777217),null;case 27:Ve(t),a=qe.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ti(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Pt(t),null}e=ve.current,Lo(t)?Uh(t):(e=ng(l,r,a),t.stateNode=e,ti(t))}return Pt(t),null;case 5:if(Ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ti(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Pt(t),null}if(e=ve.current,Lo(t))Uh(t);else{switch(l=Fl(qe.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?l.createElement(a,{is:r.is}):l.createElement(a)}}e[De]=t,e[Ue]=r;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Sn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ti(t)}}return Pt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ti(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=qe.current,Lo(t)){if(e=t.stateNode,a=t.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[De]=t,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Zm(e.nodeValue,a)),e||ar(t)}else e=Fl(e).createTextNode(r),e[De]=t,t.stateNode=e}return Pt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[De]=t}else No(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pt(t),l=!1}else va!==null&&(zd(va),va=null),l=!0;if(!l)return t.flags&256?(Fa(t),t):(Fa(t),null)}if(Fa(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool);var d=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==l&&(r.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Nl(t,t.updateQueue),Pt(t),null;case 4:return _e(),e===null&&_d(t.stateNode.containerInfo),Pt(t),null;case 10:return Ia(t.type),Pt(t),null;case 19:if(H(un),l=t.memoizedState,l===null)return Pt(t),null;if(r=(t.flags&128)!==0,d=l.rendering,d===null)if(r)ns(l,!1);else{if(Zt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=vl(e),d!==null){for(t.flags|=128,ns(l,!1),e=d.updateQueue,t.updateQueue=e,Nl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Am(a,e),a=a.sibling;return Le(un,un.current&1|2),t.child}e=e.sibling}l.tail!==null&&Xe()>$l&&(t.flags|=128,r=!0,ns(l,!1),t.lanes=4194304)}else{if(!r)if(e=vl(d),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Nl(t,e),ns(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!gt)return Pt(t),null}else 2*Xe()-l.renderingStartTime>$l&&a!==536870912&&(t.flags|=128,r=!0,ns(l,!1),t.lanes=4194304);l.isBackwards?(d.sibling=t.child,t.child=d):(e=l.last,e!==null?e.sibling=d:t.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Xe(),t.sibling=null,e=un.current,Le(un,r?e&1|2:e&1),t):(Pt(t),null);case 22:case 23:return Fa(t),Tu(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(a&536870912)!==0&&(t.flags&128)===0&&(Pt(t),t.subtreeFlags&6&&(t.flags|=8192)):Pt(t),a=t.updateQueue,a!==null&&Nl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==a&&(t.flags|=2048),e!==null&&H(rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ia(dn),Pt(t),null;case 25:return null}throw Error(s(156,t.tag))}function B5(e,t){switch(Cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ia(dn),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ve(t),null;case 13:if(Fa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));No()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(un),null;case 4:return _e(),null;case 10:return Ia(t.type),null;case 22:case 23:return Fa(t),Tu(),e!==null&&H(rr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ia(dn),null;case 25:return null;default:return null}}function Tm(e,t){switch(Cu(t),t.tag){case 3:Ia(dn),_e();break;case 26:case 27:case 5:Ve(t);break;case 4:_e();break;case 13:Fa(t);break;case 19:H(un);break;case 10:Ia(t.type);break;case 22:case 23:Fa(t),Tu(),e!==null&&H(rr);break;case 24:Ia(dn)}}var L5={getCacheForType:function(e){var t=En(dn),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},N5=typeof WeakMap=="function"?WeakMap:Map,_t=0,zt=null,it=null,dt=0,kt=0,Fn=null,ni=!1,Fr=!1,wd=!1,ai=0,Zt=0,Li=0,pr=0,Sd=0,da=0,Qr=0,as=null,Ba=null,Cd=!1,Ad=0,$l=1/0,Pl=null,Ni=null,_l=!1,mr=null,is=0,jd=0,Ed=null,rs=0,Td=null;function Qn(){if((_t&2)!==0&&dt!==0)return dt&-dt;if(Q.T!==null){var e=_r;return e!==0?e:Ld()}return ge()}function zm(){da===0&&(da=(dt&536870912)===0||gt?Yt():536870912);var e=sa.current;return e!==null&&(e.flags|=32),da}function Dn(e,t,a){(e===zt&&kt===2||e.cancelPendingCommit!==null)&&(Kr(e,0),ii(e,dt,da,!1)),bn(e,a),((_t&2)===0||e!==zt)&&(e===zt&&((_t&2)===0&&(pr|=a),Zt===4&&ii(e,dt,da,!1)),La(e))}function km(e,t,a){if((_t&6)!==0)throw Error(s(327));var r=!a&&(t&60)===0&&(t&e.expiredLanes)===0||wt(e,t),l=r?_5(e,t):Md(e,t,!0),d=r;do{if(l===0){Fr&&!r&&ii(e,t,0,!1);break}else if(l===6)ii(e,t,0,!ni);else{if(a=e.current.alternate,d&&!$5(a)){l=Md(e,t,!1),d=!1;continue}if(l===2){if(d=t,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var S=e;l=as;var k=S.current.memoizedState.isDehydrated;if(k&&(Kr(S,x).flags|=256),x=Md(S,x,!1),x!==2){if(wd&&!k){S.errorRecoveryDisabledLanes|=d,pr|=d,l=4;break e}d=Ba,Ba=l,d!==null&&zd(d)}l=x}if(d=!1,l!==2)continue}}if(l===1){Kr(e,0),ii(e,t,0,!0);break}e:{switch(r=e,l){case 0:case 1:throw Error(s(345));case 4:if((t&4194176)===t){ii(r,t,da,!ni);break e}break;case 2:Ba=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=t,(t&62914560)===t&&(d=Ad+300-Xe(),10<d)){if(ii(r,t,da,!ni),en(r,0)!==0)break e;r.timeoutHandle=Wm(Rm.bind(null,r,a,Ba,Pl,Cd,t,da,pr,Qr,ni,2,-0,0),d);break e}Rm(r,a,Ba,Pl,Cd,t,da,pr,Qr,ni,0,-0,0)}}break}while(!0);La(e)}function zd(e){Ba===null?Ba=e:Ba.push.apply(Ba,e)}function Rm(e,t,a,r,l,d,x,S,k,P,ne,ce,F){var ee=t.subtreeFlags;if((ee&8192||(ee&16785408)===16785408)&&(ds={stylesheets:null,count:0,unsuspend:by},ym(t),t=yy(),t!==null)){e.cancelPendingCommit=t($m.bind(null,e,a,r,l,x,S,k,1,ce,F)),ii(e,d,x,!P);return}$m(e,a,r,l,x,S,k,ne,ce,F)}function $5(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],d=l.getSnapshot;l=l.value;try{if(!Gn(d(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ii(e,t,a,r){t&=~Sd,t&=~pr,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var d=31-Ae(l),x=1<<d;r[d]=-1,l&=~x}a!==0&&W(e,a,t)}function Vl(){return(_t&6)===0?(os(0),!1):!0}function kd(){if(it!==null){if(kt===0)var e=it.return;else e=it,Za=ur=null,Lu(e),$r=null,Vo=0,e=it;for(;e!==null;)Tm(e.alternate,e),e=e.return;it=null}}function Kr(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ny(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),kd(),zt=e,it=a=Bi(e.current,null),dt=t,kt=0,Fn=null,ni=!1,Fr=wt(e,t),wd=!1,Qr=da=Sd=pr=Li=Zt=0,Ba=as=null,Cd=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var l=31-Ae(r),d=1<<l;t|=e[l],r&=~d}return ai=t,ul(),a}function Mm(e,t){We=null,Q.H=Oa,t===Po?(t=Xh(),kt=3):t===qh?(t=Xh(),kt=4):kt=t===Gp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Fn=t,it===null&&(Zt=1,Rl(e,ia(t,e.current)))}function Dm(){var e=Q.H;return Q.H=Oa,e===null?Oa:e}function Om(){var e=Q.A;return Q.A=L5,e}function Rd(){Zt=4,ni||(dt&4194176)!==dt&&sa.current!==null||(Fr=!0),(Li&134217727)===0&&(pr&134217727)===0||zt===null||ii(zt,dt,da,!1)}function Md(e,t,a){var r=_t;_t|=2;var l=Dm(),d=Om();(zt!==e||dt!==t)&&(Pl=null,Kr(e,t)),t=!1;var x=Zt;e:do try{if(kt!==0&&it!==null){var S=it,k=Fn;switch(kt){case 8:kd(),x=6;break e;case 3:case 2:case 6:sa.current===null&&(t=!0);var P=kt;if(kt=0,Fn=null,Zr(e,S,k,P),a&&Fr){x=0;break e}break;default:P=kt,kt=0,Fn=null,Zr(e,S,k,P)}}P5(),x=Zt;break}catch(ne){Mm(e,ne)}while(!0);return t&&e.shellSuspendCounter++,Za=ur=null,_t=r,Q.H=l,Q.A=d,it===null&&(zt=null,dt=0,ul()),x}function P5(){for(;it!==null;)Bm(it)}function _5(e,t){var a=_t;_t|=2;var r=Dm(),l=Om();zt!==e||dt!==t?(Pl=null,$l=Xe()+500,Kr(e,t)):Fr=wt(e,t);e:do try{if(kt!==0&&it!==null){t=it;var d=Fn;t:switch(kt){case 1:kt=0,Fn=null,Zr(e,t,d,1);break;case 2:if(Gh(d)){kt=0,Fn=null,Lm(t);break}t=function(){kt===2&&zt===e&&(kt=7),La(e)},d.then(t,t);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Gh(d)?(kt=0,Fn=null,Lm(t)):(kt=0,Fn=null,Zr(e,t,d,7));break;case 5:var x=null;switch(it.tag){case 26:x=it.memoizedState;case 5:case 27:var S=it;if(!x||ug(x)){kt=0,Fn=null;var k=S.sibling;if(k!==null)it=k;else{var P=S.return;P!==null?(it=P,Ul(P)):it=null}break t}}kt=0,Fn=null,Zr(e,t,d,5);break;case 6:kt=0,Fn=null,Zr(e,t,d,6);break;case 8:kd(),Zt=6;break e;default:throw Error(s(462))}}V5();break}catch(ne){Mm(e,ne)}while(!0);return Za=ur=null,Q.H=r,Q.A=l,_t=a,it!==null?0:(zt=null,dt=0,ul(),Zt)}function V5(){for(;it!==null&&!nt();)Bm(it)}function Bm(e){var t=nm(e.alternate,e,ai);e.memoizedProps=e.pendingProps,t===null?Ul(e):it=t}function Lm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Zp(a,t,t.pendingProps,t.type,void 0,dt);break;case 11:t=Zp(a,t,t.pendingProps,t.type.render,t.ref,dt);break;case 5:Lu(t);default:Tm(a,t),t=it=Am(t,ai),t=nm(a,t,ai)}e.memoizedProps=e.pendingProps,t===null?Ul(e):it=t}function Zr(e,t,a,r){Za=ur=null,Lu(t),$r=null,Vo=0;var l=t.return;try{if(z5(e,l,t,a,dt)){Zt=1,Rl(e,ia(a,e.current)),it=null;return}}catch(d){if(l!==null)throw it=l,d;Zt=1,Rl(e,ia(a,e.current)),it=null;return}t.flags&32768?(gt||r===1?e=!0:Fr||(dt&536870912)!==0?e=!1:(ni=e=!0,(r===2||r===3||r===6)&&(r=sa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Nm(t,e)):Ul(t)}function Ul(e){var t=e;do{if((t.flags&32768)!==0){Nm(t,ni);return}e=t.return;var a=O5(t.alternate,t,ai);if(a!==null){it=a;return}if(t=t.sibling,t!==null){it=t;return}it=t=e}while(t!==null);Zt===0&&(Zt=5)}function Nm(e,t){do{var a=B5(e.alternate,e);if(a!==null){a.flags&=32767,it=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){it=e;return}it=e=a}while(e!==null);Zt=6,it=null}function $m(e,t,a,r,l,d,x,S,k,P){var ne=Q.T,ce=me.p;try{me.p=2,Q.T=null,U5(e,t,a,r,ce,l,d,x,S,k,P)}finally{Q.T=ne,me.p=ce}}function U5(e,t,a,r,l,d,x,S){do Ir();while(mr!==null);if((_t&6)!==0)throw Error(s(327));var k=e.finishedWork;if(r=e.finishedLanes,k===null)return null;if(e.finishedWork=null,e.finishedLanes=0,k===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var P=k.lanes|k.childLanes;if(P|=yu,U(e,r,P,d,x,S),e===zt&&(it=zt=null,dt=0),(k.subtreeFlags&10256)===0&&(k.flags&10256)===0||_l||(_l=!0,jd=P,Ed=a,Y5(Ge,function(){return Ir(),null})),a=(k.flags&15990)!==0,(k.subtreeFlags&15990)!==0||a?(a=Q.T,Q.T=null,d=me.p,me.p=2,x=_t,_t|=4,R5(e,k),xm(k,e),d5(qd,e.containerInfo),Wl=!!Hd,qd=Hd=null,e.current=k,hm(e,k.alternate,k),Bt(),_t=x,me.p=d,Q.T=a):e.current=k,_l?(_l=!1,mr=e,is=r):Pm(e,P),P=e.pendingLanes,P===0&&(Ni=null),fe(k.stateNode),La(e),t!==null)for(l=e.onRecoverableError,k=0;k<t.length;k++)P=t[k],l(P.value,{componentStack:P.stack});return(is&3)!==0&&Ir(),P=e.pendingLanes,(r&4194218)!==0&&(P&42)!==0?e===Td?rs++:(rs=0,Td=e):rs=0,os(0),null}function Pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ho(t)))}function Ir(){if(mr!==null){var e=mr,t=jd;jd=0;var a=J(is),r=Q.T,l=me.p;try{if(me.p=32>a?32:a,Q.T=null,mr===null)var d=!1;else{a=Ed,Ed=null;var x=mr,S=is;if(mr=null,is=0,(_t&6)!==0)throw Error(s(331));var k=_t;if(_t|=4,Sm(x.current),vm(x,x.current,S,a),_t=k,os(0,!1),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(pe,x)}catch{}d=!0}return d}finally{me.p=l,Q.T=r,Pm(e,t)}}return!1}function _m(e,t,a){t=ia(a,t),t=Ku(e.stateNode,t,2),e=Ri(e,t,2),e!==null&&(bn(e,2),La(e))}function Tt(e,t,a){if(e.tag===3)_m(e,e,a);else for(;t!==null;){if(t.tag===3){_m(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ni===null||!Ni.has(r))){e=ia(a,e),a=Hp(2),r=Ri(t,a,2),r!==null&&(qp(a,r,t,e),bn(r,2),La(r));break}}t=t.return}}function Dd(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new N5;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(a)||(wd=!0,l.add(a),e=H5.bind(null,e,t,a),t.then(e,e))}function H5(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,zt===e&&(dt&a)===a&&(Zt===4||Zt===3&&(dt&62914560)===dt&&300>Xe()-Ad?(_t&2)===0&&Kr(e,0):Sd|=a,Qr===dt&&(Qr=0)),La(e)}function Vm(e,t){t===0&&(t=Jn()),e=Si(e,t),e!==null&&(bn(e,t),La(e))}function q5(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vm(e,a)}function G5(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Vm(e,a)}function Y5(e,t){return Ht(e,t)}var Hl=null,Jr=null,Od=!1,ql=!1,Bd=!1,gr=0;function La(e){e!==Jr&&e.next===null&&(Jr===null?Hl=Jr=e:Jr=Jr.next=e),ql=!0,Od||(Od=!0,F5(X5))}function os(e,t){if(!Bd&&ql){Bd=!0;do for(var a=!1,r=Hl;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var d=0;else{var x=r.suspendedLanes,S=r.pingedLanes;d=(1<<31-Ae(42|e)+1)-1,d&=l&~(x&~S),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,qm(r,d))}else d=dt,d=en(r,r===zt?d:0),(d&3)===0||wt(r,d)||(a=!0,qm(r,d));r=r.next}while(a);Bd=!1}}function X5(){ql=Od=!1;var e=0;gr!==0&&(ty()&&(e=gr),gr=0);for(var t=Xe(),a=null,r=Hl;r!==null;){var l=r.next,d=Um(r,t);d===0?(r.next=null,a===null?Hl=l:a.next=l,l===null&&(Jr=a)):(a=r,(e!==0||(d&3)!==0)&&(ql=!0)),r=l}os(e)}function Um(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Ae(d),S=1<<x,k=l[x];k===-1?((S&a)===0||(S&r)!==0)&&(l[x]=Gt(S,t)):k<=t&&(e.expiredLanes|=S),d&=~S}if(t=zt,a=dt,a=en(e,e===t?a:0),r=e.callbackNode,a===0||e===t&&kt===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&yt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(r!==null&&yt(r),J(a)){case 2:case 8:a=ot;break;case 32:a=Ge;break;case 268435456:a=$;break;default:a=Ge}return r=Hm.bind(null,e),a=Ht(a,r),e.callbackPriority=t,e.callbackNode=a,t}return r!==null&&r!==null&&yt(r),e.callbackPriority=2,e.callbackNode=null,2}function Hm(e,t){var a=e.callbackNode;if(Ir()&&e.callbackNode!==a)return null;var r=dt;return r=en(e,e===zt?r:0),r===0?null:(km(e,r,t),Um(e,Xe()),e.callbackNode!=null&&e.callbackNode===a?Hm.bind(null,e):null)}function qm(e,t){if(Ir())return null;km(e,t,!0)}function F5(e){ay(function(){(_t&6)!==0?Ht(xn,e):e()})}function Ld(){return gr===0&&(gr=Yt()),gr}function Gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function Ym(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Q5(e,t,a,r,l){if(t==="submit"&&a&&a.stateNode===l){var d=Gm((l[Ue]||null).action),x=r.submitter;x&&(t=(t=x[Ue]||null)?Gm(t.formAction):x.getAttribute("formAction"),t!==null&&(d=t,x=null));var S=new sl("action","action",null,r,l);e.push({event:S,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(gr!==0){var k=x?Ym(l,x):new FormData(l);Gu(a,{pending:!0,data:k,method:l.method,action:d},null,k)}}else typeof d=="function"&&(S.preventDefault(),k=x?Ym(l,x):new FormData(l),Gu(a,{pending:!0,data:k,method:l.method,action:d},d,k))},currentTarget:l}]})}}for(var Nd=0;Nd<$h.length;Nd++){var $d=$h[Nd],K5=$d.toLowerCase(),Z5=$d[0].toUpperCase()+$d.slice(1);ba(K5,"on"+Z5)}ba(Dh,"onAnimationEnd"),ba(Oh,"onAnimationIteration"),ba(Bh,"onAnimationStart"),ba("dblclick","onDoubleClick"),ba("focusin","onFocus"),ba("focusout","onBlur"),ba(h5,"onTransitionRun"),ba(p5,"onTransitionStart"),ba(m5,"onTransitionCancel"),ba(Lh,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),An("onBeforeInput",["compositionend","keypress","textInput","paste"]),An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ss));function Xm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var d=void 0;if(t)for(var x=r.length-1;0<=x;x--){var S=r[x],k=S.instance,P=S.currentTarget;if(S=S.listener,k!==d&&l.isPropagationStopped())break e;d=S,l.currentTarget=P;try{d(l)}catch(ne){kl(ne)}l.currentTarget=null,d=k}else for(x=0;x<r.length;x++){if(S=r[x],k=S.instance,P=S.currentTarget,S=S.listener,k!==d&&l.isPropagationStopped())break e;d=S,l.currentTarget=P;try{d(l)}catch(ne){kl(ne)}l.currentTarget=null,d=k}}}}function lt(e,t){var a=t[ht];a===void 0&&(a=t[ht]=new Set);var r=e+"__bubble";a.has(r)||(Fm(t,e,2,!1),a.add(r))}function Pd(e,t,a){var r=0;t&&(r|=4),Fm(a,e,r,t)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function _d(e){if(!e[Gl]){e[Gl]=!0,Ft.forEach(function(a){a!=="selectionchange"&&(I5.has(a)||Pd(a,!1,e),Pd(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gl]||(t[Gl]=!0,Pd("selectionchange",!1,t))}}function Fm(e,t,a,r){switch(gg(t)){case 2:var l=Cy;break;case 8:l=Ay;break;default:l=Jd}a=l.bind(null,t,a,e),l=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Vd(e,t,a,r,l){var d=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var S=r.stateNode.containerInfo;if(S===l||S.nodeType===8&&S.parentNode===l)break;if(x===4)for(x=r.return;x!==null;){var k=x.tag;if((k===3||k===4)&&(k=x.stateNode.containerInfo,k===l||k.nodeType===8&&k.parentNode===l))return;x=x.return}for(;S!==null;){if(x=mt(S),x===null)return;if(k=x.tag,k===5||k===6||k===26||k===27){r=d=x;continue e}S=S.parentNode}}r=r.return}lh(function(){var P=d,ne=Ii(a),ce=[];e:{var F=Nh.get(e);if(F!==void 0){var ee=sl,Oe=e;switch(e){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":ee=Gv;break;case"focusin":Oe="focus",ee=du;break;case"focusout":Oe="blur",ee=du;break;case"beforeblur":case"afterblur":ee=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Fv;break;case Dh:case Oh:case Bh:ee=Lv;break;case Lh:ee=Kv;break;case"scroll":case"scrollend":ee=Rv;break;case"wheel":ee=Iv;break;case"copy":case"cut":case"paste":ee=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=hh;break;case"toggle":case"beforetoggle":ee=Wv}var Ye=(t&4)!==0,It=!Ye&&(e==="scroll"||e==="scrollend"),_=Ye?F!==null?F+"Capture":null:F;Ye=[];for(var L=P,q;L!==null;){var oe=L;if(q=oe.stateNode,oe=oe.tag,oe!==5&&oe!==26&&oe!==27||q===null||_===null||(oe=Eo(L,_),oe!=null&&Ye.push(ls(L,oe,q))),It)break;L=L.return}0<Ye.length&&(F=new ee(F,Oe,null,a,ne),ce.push({event:F,listeners:Ye}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",F&&a!==Zi&&(Oe=a.relatedTarget||a.fromElement)&&(mt(Oe)||Oe[Qe]))break e;if((ee||F)&&(F=ne.window===ne?ne:(F=ne.ownerDocument)?F.defaultView||F.parentWindow:window,ee?(Oe=a.relatedTarget||a.toElement,ee=P,Oe=Oe?mt(Oe):null,Oe!==null&&(It=re(Oe),Ye=Oe.tag,Oe!==It||Ye!==5&&Ye!==27&&Ye!==6)&&(Oe=null)):(ee=null,Oe=P),ee!==Oe)){if(Ye=dh,oe="onMouseLeave",_="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(Ye=hh,oe="onPointerLeave",_="onPointerEnter",L="pointer"),It=ee==null?F:Ke(ee),q=Oe==null?F:Ke(Oe),F=new Ye(oe,L+"leave",ee,a,ne),F.target=It,F.relatedTarget=q,oe=null,mt(ne)===P&&(Ye=new Ye(_,L+"enter",Oe,a,ne),Ye.target=q,Ye.relatedTarget=It,oe=Ye),It=oe,ee&&Oe)t:{for(Ye=ee,_=Oe,L=0,q=Ye;q;q=Wr(q))L++;for(q=0,oe=_;oe;oe=Wr(oe))q++;for(;0<L-q;)Ye=Wr(Ye),L--;for(;0<q-L;)_=Wr(_),q--;for(;L--;){if(Ye===_||_!==null&&Ye===_.alternate)break t;Ye=Wr(Ye),_=Wr(_)}Ye=null}else Ye=null;ee!==null&&Qm(ce,F,ee,Ye,!1),Oe!==null&&It!==null&&Qm(ce,It,Oe,Ye,!0)}}e:{if(F=P?Ke(P):window,ee=F.nodeName&&F.nodeName.toLowerCase(),ee==="select"||ee==="input"&&F.type==="file")var Ee=wh;else if(vh(F))if(Sh)Ee=c5;else{Ee=s5;var tt=o5}else ee=F.nodeName,!ee||ee.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?P&&Ki(P.elementType)&&(Ee=wh):Ee=l5;if(Ee&&(Ee=Ee(e,P))){yh(ce,Ee,a,ne);break e}tt&&tt(e,F,P),e==="focusout"&&P&&F.type==="number"&&P.memoizedProps.value!=null&&na(F,"number",F.value)}switch(tt=P?Ke(P):window,e){case"focusin":(vh(tt)||tt.contentEditable==="true")&&(Mr=tt,xu=P,Bo=null);break;case"focusout":Bo=xu=Mr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Rh(ce,a,ne);break;case"selectionchange":if(f5)break;case"keydown":case"keyup":Rh(ce,a,ne)}var Be;if(hu)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Rr?xh(e,a)&&(Ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ne="onCompositionStart");Ne&&(ph&&a.locale!=="ko"&&(Rr||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Rr&&(Be=ch()):(wi=ne,lu="value"in wi?wi.value:wi.textContent,Rr=!0)),tt=Yl(P,Ne),0<tt.length&&(Ne=new fh(Ne,e,null,a,ne),ce.push({event:Ne,listeners:tt}),Be?Ne.data=Be:(Be=bh(a),Be!==null&&(Ne.data=Be)))),(Be=t5?n5(e,a):a5(e,a))&&(Ne=Yl(P,"onBeforeInput"),0<Ne.length&&(tt=new fh("onBeforeInput","beforeinput",null,a,ne),ce.push({event:tt,listeners:Ne}),tt.data=Be)),Q5(ce,e,P,a,ne)}Xm(ce,t)})}function ls(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yl(e,t){for(var a=t+"Capture",r=[];e!==null;){var l=e,d=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||d===null||(l=Eo(e,a),l!=null&&r.unshift(ls(e,l,d)),l=Eo(e,t),l!=null&&r.push(ls(e,l,d))),e=e.return}return r}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qm(e,t,a,r,l){for(var d=t._reactName,x=[];a!==null&&a!==r;){var S=a,k=S.alternate,P=S.stateNode;if(S=S.tag,k!==null&&k===r)break;S!==5&&S!==26&&S!==27||P===null||(k=P,l?(P=Eo(a,d),P!=null&&x.unshift(ls(a,P,k))):l||(P=Eo(a,d),P!=null&&x.push(ls(a,P,k)))),a=a.return}x.length!==0&&e.push({event:t,listeners:x})}var J5=/\r\n?/g,W5=/\u0000|\uFFFD/g;function Km(e){return(typeof e=="string"?e:""+e).replace(J5,`
`).replace(W5,"")}function Zm(e,t){return t=Km(t),Km(e)===t}function Xl(){}function jt(e,t,a,r,l,d){switch(a){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||jn(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&jn(e,""+r);break;case"className":qa(e,"class",r);break;case"tabIndex":qa(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qa(e,a,r);break;case"style":qn(e,r,d);break;case"data":if(t!=="object"){qa(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=yi(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(t!=="input"&&jt(e,t,"name",l.name,l,null),jt(e,t,"formEncType",l.formEncType,l,null),jt(e,t,"formMethod",l.formMethod,l,null),jt(e,t,"formTarget",l.formTarget,l,null)):(jt(e,t,"encType",l.encType,l,null),jt(e,t,"method",l.method,l,null),jt(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=yi(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Xl);break;case"onScroll":r!=null&&lt("scroll",e);break;case"onScrollEnd":r!=null&&lt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=yi(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":lt("beforetoggle",e),lt("toggle",e),xi(e,"popover",r);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":xi(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=za.get(a)||a,xi(e,a,r))}}function Ud(e,t,a,r,l,d){switch(a){case"style":qn(e,r,d);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?jn(e,r):(typeof r=="number"||typeof r=="bigint")&&jn(e,""+r);break;case"onScroll":r!=null&&lt("scroll",e);break;case"onScrollEnd":r!=null&&lt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),d=e[Ue]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(t,d,l),typeof r=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,r,l);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):xi(e,a,r)}}}function Sn(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":lt("error",e),lt("load",e);var r=!1,l=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:jt(e,t,d,x,a,null)}}l&&jt(e,t,"srcSet",a.srcSet,a,null),r&&jt(e,t,"src",a.src,a,null);return;case"input":lt("invalid",e);var S=d=x=l=null,k=null,P=null;for(r in a)if(a.hasOwnProperty(r)){var ne=a[r];if(ne!=null)switch(r){case"name":l=ne;break;case"type":x=ne;break;case"checked":k=ne;break;case"defaultChecked":P=ne;break;case"value":d=ne;break;case"defaultValue":S=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,t));break;default:jt(e,t,r,ne,a,null)}}vi(e,d,S,k,P,x,l,!1),Vn(e);return;case"select":lt("invalid",e),r=x=d=null;for(l in a)if(a.hasOwnProperty(l)&&(S=a[l],S!=null))switch(l){case"value":d=S;break;case"defaultValue":x=S;break;case"multiple":r=S;default:jt(e,t,l,S,a,null)}t=d,a=x,e.multiple=!!r,t!=null?Un(e,!!r,t,!1):a!=null&&Un(e,!!r,a,!0);return;case"textarea":lt("invalid",e),d=l=r=null;for(x in a)if(a.hasOwnProperty(x)&&(S=a[x],S!=null))switch(x){case"value":r=S;break;case"defaultValue":l=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:jt(e,t,x,S,a,null)}Hn(e,r,l,d),Vn(e);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:jt(e,t,k,r,a,null)}return;case"dialog":lt("cancel",e),lt("close",e);break;case"iframe":case"object":lt("load",e);break;case"video":case"audio":for(r=0;r<ss.length;r++)lt(ss[r],e);break;case"image":lt("error",e),lt("load",e);break;case"details":lt("toggle",e);break;case"embed":case"source":case"link":lt("error",e),lt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:jt(e,t,P,r,a,null)}return;default:if(Ki(t)){for(ne in a)a.hasOwnProperty(ne)&&(r=a[ne],r!==void 0&&Ud(e,t,ne,r,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(r=a[S],r!=null&&jt(e,t,S,r,a,null))}function ey(e,t,a,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,d=null,x=null,S=null,k=null,P=null,ne=null;for(ee in a){var ce=a[ee];if(a.hasOwnProperty(ee)&&ce!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":k=ce;default:r.hasOwnProperty(ee)||jt(e,t,ee,null,r,ce)}}for(var F in r){var ee=r[F];if(ce=a[F],r.hasOwnProperty(F)&&(ee!=null||ce!=null))switch(F){case"type":d=ee;break;case"name":l=ee;break;case"checked":P=ee;break;case"defaultChecked":ne=ee;break;case"value":x=ee;break;case"defaultValue":S=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(s(137,t));break;default:ee!==ce&&jt(e,t,F,ee,r,ce)}}Bn(e,x,S,k,P,ne,d,l);return;case"select":ee=x=S=F=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ee=k;default:r.hasOwnProperty(d)||jt(e,t,d,null,r,k)}for(l in r)if(d=r[l],k=a[l],r.hasOwnProperty(l)&&(d!=null||k!=null))switch(l){case"value":F=d;break;case"defaultValue":S=d;break;case"multiple":x=d;default:d!==k&&jt(e,t,l,d,r,k)}t=S,a=x,r=ee,F!=null?Un(e,!!a,F,!1):!!r!=!!a&&(t!=null?Un(e,!!a,t,!0):Un(e,!!a,a?[]:"",!1));return;case"textarea":ee=F=null;for(S in a)if(l=a[S],a.hasOwnProperty(S)&&l!=null&&!r.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:jt(e,t,S,null,r,l)}for(x in r)if(l=r[x],d=a[x],r.hasOwnProperty(x)&&(l!=null||d!=null))switch(x){case"value":F=l;break;case"defaultValue":ee=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==d&&jt(e,t,x,l,r,d)}Ln(e,F,ee);return;case"option":for(var Oe in a)if(F=a[Oe],a.hasOwnProperty(Oe)&&F!=null&&!r.hasOwnProperty(Oe))switch(Oe){case"selected":e.selected=!1;break;default:jt(e,t,Oe,null,r,F)}for(k in r)if(F=r[k],ee=a[k],r.hasOwnProperty(k)&&F!==ee&&(F!=null||ee!=null))switch(k){case"selected":e.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:jt(e,t,k,F,r,ee)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ye in a)F=a[Ye],a.hasOwnProperty(Ye)&&F!=null&&!r.hasOwnProperty(Ye)&&jt(e,t,Ye,null,r,F);for(P in r)if(F=r[P],ee=a[P],r.hasOwnProperty(P)&&F!==ee&&(F!=null||ee!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,t));break;default:jt(e,t,P,F,r,ee)}return;default:if(Ki(t)){for(var It in a)F=a[It],a.hasOwnProperty(It)&&F!==void 0&&!r.hasOwnProperty(It)&&Ud(e,t,It,void 0,r,F);for(ne in r)F=r[ne],ee=a[ne],!r.hasOwnProperty(ne)||F===ee||F===void 0&&ee===void 0||Ud(e,t,ne,F,r,ee);return}}for(var _ in a)F=a[_],a.hasOwnProperty(_)&&F!=null&&!r.hasOwnProperty(_)&&jt(e,t,_,null,r,F);for(ce in r)F=r[ce],ee=a[ce],!r.hasOwnProperty(ce)||F===ee||F==null&&ee==null||jt(e,t,ce,F,r,ee)}var Hd=null,qd=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function Im(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yd=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var Wm=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(e){return eg.resolve(null).then(e).catch(iy)}:Wm;function iy(e){setTimeout(function(){throw e})}function Xd(e,t){var a=t,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(r===0){e.removeChild(l),gs(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=l}while(a);gs(t)}function Fd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fd(a),Je(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ry(e,t,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[at])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==l.rel||e.getAttribute("href")!==(l.href==null?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=wa(e.nextSibling),e===null)break}return null}function oy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wa(e.nextSibling),e===null))return null;return e}function wa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function tg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function ng(e,t,a){switch(t=Fl(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var fa=new Map,ag=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var ri=me.d;me.d={f:sy,r:ly,D:cy,C:uy,L:dy,m:fy,X:py,S:hy,M:my};function sy(){var e=ri.f(),t=Vl();return e||t}function ly(e){var t=bt(e);t!==null&&t.tag===5&&t.type==="form"?Rp(t):ri.r(e)}var eo=typeof document>"u"?null:document;function ig(e,t,a){var r=eo;if(r&&typeof t=="string"&&t){var l=Mt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),ag.has(l)||(ag.add(l),e={rel:e,crossOrigin:a,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),Sn(t,"link",e),Ze(t),r.head.appendChild(t)))}}function cy(e){ri.D(e),ig("dns-prefetch",e,null)}function uy(e,t){ri.C(e,t),ig("preconnect",e,t)}function dy(e,t,a){ri.L(e,t,a);var r=eo;if(r&&e&&t){var l='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Mt(a.imageSizes)+'"]')):l+='[href="'+Mt(e)+'"]';var d=l;switch(t){case"style":d=to(e);break;case"script":d=no(e)}fa.has(d)||(e=de({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),fa.set(d,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(cs(d))||t==="script"&&r.querySelector(us(d))||(t=r.createElement("link"),Sn(t,"link",e),Ze(t),r.head.appendChild(t)))}}function fy(e,t){ri.m(e,t);var a=eo;if(a&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Mt(r)+'"][href="'+Mt(e)+'"]',d=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=no(e)}if(!fa.has(d)&&(e=de({rel:"modulepreload",href:e},t),fa.set(d,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(us(d)))return}r=a.createElement("link"),Sn(r,"link",e),Ze(r),a.head.appendChild(r)}}}function hy(e,t,a){ri.S(e,t,a);var r=eo;if(r&&e){var l=Nt(r).hoistableStyles,d=to(e);t=t||"default";var x=l.get(d);if(!x){var S={loading:0,preload:null};if(x=r.querySelector(cs(d)))S.loading=5;else{e=de({rel:"stylesheet",href:e,"data-precedence":t},a),(a=fa.get(d))&&Qd(e,a);var k=x=r.createElement("link");Ze(k),Sn(k,"link",e),k._p=new Promise(function(P,ne){k.onload=P,k.onerror=ne}),k.addEventListener("load",function(){S.loading|=1}),k.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Kl(x,t,r)}x={type:"stylesheet",instance:x,count:1,state:S},l.set(d,x)}}}function py(e,t){ri.X(e,t);var a=eo;if(a&&e){var r=Nt(a).hoistableScripts,l=no(e),d=r.get(l);d||(d=a.querySelector(us(l)),d||(e=de({src:e,async:!0},t),(t=fa.get(l))&&Kd(e,t),d=a.createElement("script"),Ze(d),Sn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(l,d))}}function my(e,t){ri.M(e,t);var a=eo;if(a&&e){var r=Nt(a).hoistableScripts,l=no(e),d=r.get(l);d||(d=a.querySelector(us(l)),d||(e=de({src:e,async:!0,type:"module"},t),(t=fa.get(l))&&Kd(e,t),d=a.createElement("script"),Ze(d),Sn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(l,d))}}function rg(e,t,a,r){var l=(l=qe.current)?Ql(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=to(a.href),a=Nt(l).hoistableStyles,r=a.get(t),r||(r={type:"style",instance:null,count:0,state:null},a.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=to(a.href);var d=Nt(l).hoistableStyles,x=d.get(e);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=l.querySelector(cs(e)))&&!d._p&&(x.instance=d,x.state.loading=5),fa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fa.set(e,a),d||gy(l,e,a,x.state))),t&&r===null)throw Error(s(528,""));return x}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=no(a),a=Nt(l).hoistableScripts,r=a.get(t),r||(r={type:"script",instance:null,count:0,state:null},a.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function to(e){return'href="'+Mt(e)+'"'}function cs(e){return'link[rel="stylesheet"]['+e+"]"}function og(e){return de({},e,{"data-precedence":e.precedence,precedence:null})}function gy(e,t,a,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Sn(t,"link",a),Ze(t),e.head.appendChild(t))}function no(e){return'[src="'+Mt(e)+'"]'}function us(e){return"script[async]"+e}function sg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(r)return t.instance=r,Ze(r),r;var l=de({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ze(r),Sn(r,"style",l),Kl(r,a.precedence,e),t.instance=r;case"stylesheet":l=to(a.href);var d=e.querySelector(cs(l));if(d)return t.state.loading|=4,t.instance=d,Ze(d),d;r=og(a),(l=fa.get(l))&&Qd(r,l),d=(e.ownerDocument||e).createElement("link"),Ze(d);var x=d;return x._p=new Promise(function(S,k){x.onload=S,x.onerror=k}),Sn(d,"link",r),t.state.loading|=4,Kl(d,a.precedence,e),t.instance=d;case"script":return d=no(a.src),(l=e.querySelector(us(d)))?(t.instance=l,Ze(l),l):(r=a,(l=fa.get(d))&&(r=de({},a),Kd(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Sn(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Kl(r,a.precedence,e));return t.instance}function Kl(e,t,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,d=l,x=0;x<r.length;x++){var S=r[x];if(S.dataset.precedence===t)d=S;else if(d!==l)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Qd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Kd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zl=null;function lg(e,t,a){if(Zl===null){var r=new Map,l=Zl=new Map;l.set(a,r)}else l=Zl,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var d=a[l];if(!(d[at]||d[De]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(t)||"";x=e+x;var S=r.get(x);S?S.push(d):r.set(x,[d])}}return r}function cg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function xy(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ug(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ds=null;function by(){}function vy(e,t,a){if(ds===null)throw Error(s(475));var r=ds;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=to(a.href),d=e.querySelector(cs(l));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Il.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=d,Ze(d);return}d=e.ownerDocument||e,a=og(a),(l=fa.get(l))&&Qd(a,l),d=d.createElement("link"),Ze(d);var x=d;x._p=new Promise(function(S,k){x.onload=S,x.onerror=k}),Sn(d,"link",a),t.instance=d}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=Il.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function yy(){if(ds===null)throw Error(s(475));var e=ds;return e.stylesheets&&e.count===0&&Zd(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Zd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Il(){if(this.count--,this.count===0){if(this.stylesheets)Zd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function Zd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,t.forEach(wy,e),Jl=null,Il.call(e))}function wy(e,t){if(!(t.state.loading&4)){var a=Jl.get(e);if(a)var r=a.get(null);else{a=new Map,Jl.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<l.length;d++){var x=l[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}l=t.instance,x=l.getAttribute("data-precedence"),d=a.get(x)||r,d===r&&a.set(null,l),a.set(x,l),this.count++,r=Il.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),d?d.parentNode.insertBefore(l,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var fs={$$typeof:C,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function Sy(e,t,a,r,l,d,x,S){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tn(0),this.hiddenUpdates=tn(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function dg(e,t,a,r,l,d,x,S,k,P,ne,ce){return e=new Sy(e,t,a,x,S,k,P,ce),t=1,d===!0&&(t|=24),d=ua(3,null,null,t),e.current=d,d.stateNode=e,t=zu(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:r,isDehydrated:a,cache:t},ld(d),e}function fg(e){return e?(e=Br,e):Br}function hg(e,t,a,r,l,d){l=fg(l),r.context===null?r.context=l:r.pendingContext=l,r=ki(t),r.payload={element:a},d=d===void 0?null:d,d!==null&&(r.callback=d),a=Ri(e,r,t),a!==null&&(Dn(a,e,t),Ko(a,e,t))}function pg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Id(e,t){pg(e,t),(e=e.alternate)&&pg(e,t)}function mg(e){if(e.tag===13){var t=Si(e,67108864);t!==null&&Dn(t,e,67108864),Id(e,67108864)}}var Wl=!0;function Cy(e,t,a,r){var l=Q.T;Q.T=null;var d=me.p;try{me.p=2,Jd(e,t,a,r)}finally{me.p=d,Q.T=l}}function Ay(e,t,a,r){var l=Q.T;Q.T=null;var d=me.p;try{me.p=8,Jd(e,t,a,r)}finally{me.p=d,Q.T=l}}function Jd(e,t,a,r){if(Wl){var l=Wd(r);if(l===null)Vd(e,t,r,ec,a),xg(e,r);else if(Ey(l,e,t,a,r))r.stopPropagation();else if(xg(e,r),t&4&&-1<jy.indexOf(e)){for(;l!==null;){var d=bt(l);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=qt(d.pendingLanes);if(x!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;x;){var k=1<<31-Ae(x);S.entanglements[1]|=k,x&=~k}La(d),(_t&6)===0&&($l=Xe()+500,os(0))}}break;case 13:S=Si(d,2),S!==null&&Dn(S,d,2),Vl(),Id(d,2)}if(d=Wd(r),d===null&&Vd(e,t,r,ec,a),d===l)break;l=d}l!==null&&r.stopPropagation()}else Vd(e,t,r,null,a)}}function Wd(e){return e=Ii(e),ef(e)}var ec=null;function ef(e){if(ec=null,e=mt(e),e!==null){var t=re(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=xe(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ec=e,null}function gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wt()){case xn:return 2;case ot:return 8;case Ge:case z:return 32;case $:return 268435456;default:return 32}default:return 32}}var tf=!1,$i=null,Pi=null,_i=null,hs=new Map,ps=new Map,Vi=[],jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(e,t){switch(e){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":hs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(t.pointerId)}}function ms(e,t,a,r,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:d,targetContainers:[l]},t!==null&&(t=bt(t),t!==null&&mg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ey(e,t,a,r,l){switch(t){case"focusin":return $i=ms($i,e,t,a,r,l),!0;case"dragenter":return Pi=ms(Pi,e,t,a,r,l),!0;case"mouseover":return _i=ms(_i,e,t,a,r,l),!0;case"pointerover":var d=l.pointerId;return hs.set(d,ms(hs.get(d)||null,e,t,a,r,l)),!0;case"gotpointercapture":return d=l.pointerId,ps.set(d,ms(ps.get(d)||null,e,t,a,r,l)),!0}return!1}function bg(e){var t=mt(e.target);if(t!==null){var a=re(t);if(a!==null){if(t=a.tag,t===13){if(t=xe(a),t!==null){e.blockedOn=t,Re(e.priority,function(){if(a.tag===13){var r=Qn(),l=Si(a,r);l!==null&&Dn(l,a,r),Id(a,r)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Wd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Zi=r,a.target.dispatchEvent(r),Zi=null}else return t=bt(a),t!==null&&mg(t),e.blockedOn=a,!1;t.shift()}return!0}function vg(e,t,a){tc(e)&&a.delete(t)}function Ty(){tf=!1,$i!==null&&tc($i)&&($i=null),Pi!==null&&tc(Pi)&&(Pi=null),_i!==null&&tc(_i)&&(_i=null),hs.forEach(vg),ps.forEach(vg)}function nc(e,t){e.blockedOn===t&&(e.blockedOn=null,tf||(tf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Ty)))}var ac=null;function yg(e){ac!==e&&(ac=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var t=0;t<e.length;t+=3){var a=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(ef(r||a)===null)continue;break}var d=bt(a);d!==null&&(e.splice(t,3),t-=3,Gu(d,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function gs(e){function t(k){return nc(k,e)}$i!==null&&nc($i,e),Pi!==null&&nc(Pi,e),_i!==null&&nc(_i,e),hs.forEach(t),ps.forEach(t);for(var a=0;a<Vi.length;a++){var r=Vi[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Vi.length&&(a=Vi[0],a.blockedOn===null);)bg(a),a.blockedOn===null&&Vi.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],d=a[r+1],x=l[Ue]||null;if(typeof d=="function")x||yg(a);else if(x){var S=null;if(d&&d.hasAttribute("formAction")){if(l=d,x=d[Ue]||null)S=x.formAction;else if(ef(l)!==null)continue}else S=x.action;typeof S=="function"?a[r+1]=S:(a.splice(r,3),r-=3),yg(a)}}}function nf(e){this._internalRoot=e}ic.prototype.render=nf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,r=Qn();hg(a,r,e,t,null,null)},ic.prototype.unmount=nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&Ir(),hg(e.current,2,null,e,null,null),Vl(),t[Qe]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var t=ge();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Vi.length&&t!==0&&t<Vi[a].priority;a++);Vi.splice(a,0,e),a===0&&bg(e)}};var wg=i.version;if(wg!=="19.0.0")throw Error(s(527,wg,"19.0.0"));me.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ie(t),e=e!==null?be(e):null,e=e===null?null:e.stateNode,e};var zy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,findFiberByHostInstance:mt,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{pe=rc.inject(zy),se=rc}catch{}}return bs.createRoot=function(e,t){if(!c(e))throw Error(s(299));var a=!1,r="",l=Pp,d=_p,x=Vp,S=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(S=t.unstable_transitionCallbacks)),t=dg(e,1,!1,null,null,a,r,l,d,x,S,null),e[Qe]=t.current,_d(e.nodeType===8?e.parentNode:e),new nf(t)},bs.hydrateRoot=function(e,t,a){if(!c(e))throw Error(s(299));var r=!1,l="",d=Pp,x=_p,S=Vp,k=null,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks),a.formState!==void 0&&(P=a.formState)),t=dg(e,1,!0,t,a??null,r,l,d,x,S,k,P),t.context=fg(null),a=t.current,r=Qn(),l=ki(r),l.callback=null,Ri(a,l,r),t.current.lanes=r,bn(t,r),La(t),e[Qe]=t.current,_d(e),new ic(t)},bs.version="19.0.0",bs}var Mg;function _y(){if(Mg)return of.exports;Mg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),of.exports=Py(),of.exports}var Vy=_y(),vs={},Dg;function Uy(){if(Dg)return vs;Dg=1,Object.defineProperty(vs,"__esModule",{value:!0}),vs.parse=f,vs.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function f(w,C){const E=new u,O=w.length;if(O<2)return E;const B=(C==null?void 0:C.decode)||b;let A=0;do{const R=w.indexOf("=",A);if(R===-1)break;const T=w.indexOf(";",A),N=T===-1?O:T;if(R>N){A=w.lastIndexOf(";",R-1)+1;continue}const D=h(w,A,R),G=p(w,R,D),Z=w.slice(D,G);if(E[Z]===void 0){let ae=h(w,R+1,N),Q=p(w,N,ae);const de=B(w.slice(ae,Q));E[Z]=de}A=N+1}while(A<O);return E}function h(w,C,E){do{const O=w.charCodeAt(C);if(O!==32&&O!==9)return C}while(++C<E);return E}function p(w,C,E){for(;C>E;){const O=w.charCodeAt(--C);if(O!==32&&O!==9)return C+1}return E}function g(w,C,E){const O=(E==null?void 0:E.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const B=O(C);if(!i.test(B))throw new TypeError(`argument val is invalid: ${C}`);let A=w+"="+B;if(!E)return A;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);A+="; Max-Age="+E.maxAge}if(E.domain){if(!o.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);A+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);A+="; Path="+E.path}if(E.expires){if(!v(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);A+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(A+="; HttpOnly"),E.secure&&(A+="; Secure"),E.partitioned&&(A+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return A}function b(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return c.call(w)==="[object Date]"}return vs}Uy();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Og="popstate";function Hy(n={}){function i(s,c){let{pathname:u,search:f,hash:h}=s.location;return Vf("",{pathname:u,search:f,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(s,c){return typeof c=="string"?c:Os(c)}return Gy(i,o,null,n)}function Ut(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function _a(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function qy(){return Math.random().toString(36).substring(2,10)}function Bg(n,i){return{usr:n.state,key:n.key,idx:i}}function Vf(n,i,o=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?wo(i):i,state:o,key:i&&i.key||s||qy()}}function Os({pathname:n="/",search:i="",hash:o=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function wo(n){let i={};if(n){let o=n.indexOf("#");o>=0&&(i.hash=n.substring(o),n=n.substring(0,o));let s=n.indexOf("?");s>=0&&(i.search=n.substring(s),n=n.substring(0,s)),n&&(i.pathname=n)}return i}function Gy(n,i,o,s={}){let{window:c=document.defaultView,v5Compat:u=!1}=s,f=c.history,h="POP",p=null,g=b();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function b(){return(f.state||{idx:null}).idx}function v(){h="POP";let B=b(),A=B==null?null:B-g;g=B,p&&p({action:h,location:O.location,delta:A})}function w(B,A){h="PUSH";let R=Vf(O.location,B,A);g=b()+1;let T=Bg(R,g),N=O.createHref(R);try{f.pushState(T,"",N)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;c.location.assign(N)}u&&p&&p({action:h,location:O.location,delta:1})}function C(B,A){h="REPLACE";let R=Vf(O.location,B,A);g=b();let T=Bg(R,g),N=O.createHref(R);f.replaceState(T,"",N),u&&p&&p({action:h,location:O.location,delta:0})}function E(B){let A=c.location.origin!=="null"?c.location.origin:c.location.href,R=typeof B=="string"?B:Os(B);return R=R.replace(/ $/,"%20"),Ut(A,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,A)}let O={get action(){return h},get location(){return n(c,f)},listen(B){if(p)throw new Error("A history only accepts one active listener");return c.addEventListener(Og,v),p=B,()=>{c.removeEventListener(Og,v),p=null}},createHref(B){return i(c,B)},createURL:E,encodeLocation(B){let A=E(B);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:w,replace:C,go(B){return f.go(B)}};return O}function Xx(n,i,o="/"){return Yy(n,i,o,!1)}function Yy(n,i,o,s){let c=typeof i=="string"?wo(i):i,u=ui(c.pathname||"/",o);if(u==null)return null;let f=Fx(n);Xy(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let g=a3(u);h=t3(f[p],g,s)}return h}function Fx(n,i=[],o=[],s=""){let c=(u,f,h)=>{let p={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Ut(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=si([s,p.relativePath]),b=o.concat(p);u.children&&u.children.length>0&&(Ut(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Fx(u.children,i,b,g)),!(u.path==null&&!u.index)&&i.push({path:g,score:Wy(g,u.index),routesMeta:b})};return n.forEach((u,f)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))c(u,f);else for(let p of Qx(u.path))c(u,f,p)}),i}function Qx(n){let i=n.split("/");if(i.length===0)return[];let[o,...s]=i,c=o.endsWith("?"),u=o.replace(/\?$/,"");if(s.length===0)return c?[u,""]:[u];let f=Qx(s.join("/")),h=[];return h.push(...f.map(p=>p===""?u:[u,p].join("/"))),c&&h.push(...f),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function Xy(n){n.sort((i,o)=>i.score!==o.score?o.score-i.score:e3(i.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var Fy=/^:[\w-]+$/,Qy=3,Ky=2,Zy=1,Iy=10,Jy=-2,Lg=n=>n==="*";function Wy(n,i){let o=n.split("/"),s=o.length;return o.some(Lg)&&(s+=Jy),i&&(s+=Ky),o.filter(c=>!Lg(c)).reduce((c,u)=>c+(Fy.test(u)?Qy:u===""?Zy:Iy),s)}function e3(n,i){return n.length===i.length&&n.slice(0,-1).every((s,c)=>s===i[c])?n[n.length-1]-i[i.length-1]:0}function t3(n,i,o=!1){let{routesMeta:s}=n,c={},u="/",f=[];for(let h=0;h<s.length;++h){let p=s[h],g=h===s.length-1,b=u==="/"?i:i.slice(u.length)||"/",v=Ec({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},b),w=p.route;if(!v&&g&&o&&!s[s.length-1].route.index&&(v=Ec({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},b)),!v)return null;Object.assign(c,v.params),f.push({params:c,pathname:si([u,v.pathname]),pathnameBase:s3(si([u,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(u=si([u,v.pathnameBase]))}return f}function Ec(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,s]=n3(n.path,n.caseSensitive,n.end),c=i.match(o);if(!c)return null;let u=c[0],f=u.replace(/(.)\/+$/,"$1"),h=c.slice(1);return{params:s.reduce((g,{paramName:b,isOptional:v},w)=>{if(b==="*"){let E=h[w]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const C=h[w];return v&&!C?g[b]=void 0:g[b]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:n}}function n3(n,i=!1,o=!0){_a(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),s]}function a3(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return _a(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function ui(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,s=n.charAt(o);return s&&s!=="/"?null:n.slice(o)||"/"}function i3(n,i="/"){let{pathname:o,search:s="",hash:c=""}=typeof n=="string"?wo(n):n;return{pathname:o?o.startsWith("/")?o:r3(o,i):i,search:l3(s),hash:c3(c)}}function r3(n,i){let o=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function uf(n,i,o,s){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function o3(n){return n.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Kx(n){let i=o3(n);return i.map((o,s)=>s===i.length-1?o.pathname:o.pathnameBase)}function Zx(n,i,o,s=!1){let c;typeof n=="string"?c=wo(n):(c={...n},Ut(!c.pathname||!c.pathname.includes("?"),uf("?","pathname","search",c)),Ut(!c.pathname||!c.pathname.includes("#"),uf("#","pathname","hash",c)),Ut(!c.search||!c.search.includes("#"),uf("#","search","hash",c)));let u=n===""||c.pathname==="",f=u?"/":c.pathname,h;if(f==null)h=o;else{let v=i.length-1;if(!s&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),v-=1;c.pathname=w.join("/")}h=v>=0?i[v]:"/"}let p=i3(c,h),g=f&&f!=="/"&&f.endsWith("/"),b=(u||f===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(g||b)&&(p.pathname+="/"),p}var si=n=>n.join("/").replace(/\/\/+/g,"/"),s3=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),l3=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,c3=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function u3(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ix=["POST","PUT","PATCH","DELETE"];new Set(Ix);var d3=["GET",...Ix];new Set(d3);var So=j.createContext(null);So.displayName="DataRouter";var Gc=j.createContext(null);Gc.displayName="DataRouterState";var Jx=j.createContext({isTransitioning:!1});Jx.displayName="ViewTransition";var f3=j.createContext(new Map);f3.displayName="Fetchers";var h3=j.createContext(null);h3.displayName="Await";var Va=j.createContext(null);Va.displayName="Navigation";var Zs=j.createContext(null);Zs.displayName="Location";var hi=j.createContext({outlet:null,matches:[],isDataRoute:!1});hi.displayName="Route";var b0=j.createContext(null);b0.displayName="RouteError";function p3(n,{relative:i}={}){Ut(Is(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=j.useContext(Va),{hash:c,pathname:u,search:f}=Js(n,{relative:i}),h=u;return o!=="/"&&(h=u==="/"?o:si([o,u])),s.createHref({pathname:h,search:f,hash:c})}function Is(){return j.useContext(Zs)!=null}function ga(){return Ut(Is(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Zs).location}var Wx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function e2(n){j.useContext(Va).static||j.useLayoutEffect(n)}function Ua(){let{isDataRoute:n}=j.useContext(hi);return n?T3():m3()}function m3(){Ut(Is(),"useNavigate() may be used only in the context of a <Router> component.");let n=j.useContext(So),{basename:i,navigator:o}=j.useContext(Va),{matches:s}=j.useContext(hi),{pathname:c}=ga(),u=JSON.stringify(Kx(s)),f=j.useRef(!1);return e2(()=>{f.current=!0}),j.useCallback((p,g={})=>{if(_a(f.current,Wx),!f.current)return;if(typeof p=="number"){o.go(p);return}let b=Zx(p,JSON.parse(u),c,g.relative==="path");n==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:si([i,b.pathname])),(g.replace?o.replace:o.push)(b,g.state,g)},[i,o,u,c,n])}j.createContext(null);function Js(n,{relative:i}={}){let{matches:o}=j.useContext(hi),{pathname:s}=ga(),c=JSON.stringify(Kx(o));return j.useMemo(()=>Zx(n,JSON.parse(c),s,i==="path"),[n,c,s,i])}function g3(n,i){return t2(n,i)}function t2(n,i,o,s){var R;Ut(Is(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c,static:u}=j.useContext(Va),{matches:f}=j.useContext(hi),h=f[f.length-1],p=h?h.params:{},g=h?h.pathname:"/",b=h?h.pathnameBase:"/",v=h&&h.route;{let T=v&&v.path||"";n2(g,!v||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let w=ga(),C;if(i){let T=typeof i=="string"?wo(i):i;Ut(b==="/"||((R=T.pathname)==null?void 0:R.startsWith(b)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${T.pathname}" was given in the \`location\` prop.`),C=T}else C=w;let E=C.pathname||"/",O=E;if(b!=="/"){let T=b.replace(/^\//,"").split("/");O="/"+E.replace(/^\//,"").split("/").slice(T.length).join("/")}let B=!u&&o&&o.matches&&o.matches.length>0?o.matches:Xx(n,{pathname:O});_a(v||B!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),_a(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=w3(B&&B.map(T=>Object.assign({},T,{params:Object.assign({},p,T.params),pathname:si([b,c.encodeLocation?c.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?b:si([b,c.encodeLocation?c.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),f,o,s);return i&&A?j.createElement(Zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},A):A}function x3(){let n=E3(),i=u3(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:u},"ErrorBoundary")," or"," ",j.createElement("code",{style:u},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},i),o?j.createElement("pre",{style:c},o):null,f)}var b3=j.createElement(x3,null),v3=class extends j.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?j.createElement(hi.Provider,{value:this.props.routeContext},j.createElement(b0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function y3({routeContext:n,match:i,children:o}){let s=j.useContext(So);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),j.createElement(hi.Provider,{value:n},o)}function w3(n,i=[],o=null,s=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let c=n,u=o==null?void 0:o.errors;if(u!=null){let p=c.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);Ut(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let f=!1,h=-1;if(o)for(let p=0;p<c.length;p++){let g=c[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:b,errors:v}=o,w=g.route.loader&&!b.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||w){f=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}return c.reduceRight((p,g,b)=>{let v,w=!1,C=null,E=null;o&&(v=u&&g.route.id?u[g.route.id]:void 0,C=g.route.errorElement||b3,f&&(h<0&&b===0?(n2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,E=null):h===b&&(w=!0,E=g.route.hydrateFallbackElement||null)));let O=i.concat(c.slice(0,b+1)),B=()=>{let A;return v?A=C:w?A=E:g.route.Component?A=j.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=p,j.createElement(y3,{match:g,routeContext:{outlet:p,matches:O,isDataRoute:o!=null},children:A})};return o&&(g.route.ErrorBoundary||g.route.errorElement||b===0)?j.createElement(v3,{location:o.location,revalidation:o.revalidation,component:C,error:v,children:B(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):B()},null)}function v0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S3(n){let i=j.useContext(So);return Ut(i,v0(n)),i}function C3(n){let i=j.useContext(Gc);return Ut(i,v0(n)),i}function A3(n){let i=j.useContext(hi);return Ut(i,v0(n)),i}function y0(n){let i=A3(n),o=i.matches[i.matches.length-1];return Ut(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function j3(){return y0("useRouteId")}function E3(){var s;let n=j.useContext(b0),i=C3("useRouteError"),o=y0("useRouteError");return n!==void 0?n:(s=i.errors)==null?void 0:s[o]}function T3(){let{router:n}=S3("useNavigate"),i=y0("useNavigate"),o=j.useRef(!1);return e2(()=>{o.current=!0}),j.useCallback(async(c,u={})=>{_a(o.current,Wx),o.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:i,...u}))},[n,i])}var Ng={};function n2(n,i,o){!i&&!Ng[n]&&(Ng[n]=!0,_a(!1,o))}j.memo(z3);function z3({routes:n,future:i,state:o}){return t2(n,void 0,o,i)}function Sa(n){Ut(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function k3({basename:n="/",children:i=null,location:o,navigationType:s="POP",navigator:c,static:u=!1}){Ut(!Is(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),h=j.useMemo(()=>({basename:f,navigator:c,static:u,future:{}}),[f,c,u]);typeof o=="string"&&(o=wo(o));let{pathname:p="/",search:g="",hash:b="",state:v=null,key:w="default"}=o,C=j.useMemo(()=>{let E=ui(p,f);return E==null?null:{location:{pathname:E,search:g,hash:b,state:v,key:w},navigationType:s}},[f,p,g,b,v,w,s]);return _a(C!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:j.createElement(Va.Provider,{value:h},j.createElement(Zs.Provider,{children:i,value:C}))}function R3({children:n,location:i}){return g3(Uf(n),i)}function Uf(n,i=[]){let o=[];return j.Children.forEach(n,(s,c)=>{if(!j.isValidElement(s))return;let u=[...i,c];if(s.type===j.Fragment){o.push.apply(o,Uf(s.props.children,u));return}Ut(s.type===Sa,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ut(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Uf(s.props.children,u)),o.push(f)}),o}var gc="get",xc="application/x-www-form-urlencoded";function Yc(n){return n!=null&&typeof n.tagName=="string"}function M3(n){return Yc(n)&&n.tagName.toLowerCase()==="button"}function D3(n){return Yc(n)&&n.tagName.toLowerCase()==="form"}function O3(n){return Yc(n)&&n.tagName.toLowerCase()==="input"}function B3(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function L3(n,i){return n.button===0&&(!i||i==="_self")&&!B3(n)}var oc=null;function N3(){if(oc===null)try{new FormData(document.createElement("form"),0),oc=!1}catch{oc=!0}return oc}var $3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function df(n){return n!=null&&!$3.has(n)?(_a(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xc}"`),null):n}function P3(n,i){let o,s,c,u,f;if(D3(n)){let h=n.getAttribute("action");s=h?ui(h,i):null,o=n.getAttribute("method")||gc,c=df(n.getAttribute("enctype"))||xc,u=new FormData(n)}else if(M3(n)||O3(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(s=p?ui(p,i):null,o=n.getAttribute("formmethod")||h.getAttribute("method")||gc,c=df(n.getAttribute("formenctype"))||df(h.getAttribute("enctype"))||xc,u=new FormData(h,n),!N3()){let{name:g,type:b,value:v}=n;if(b==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,v)}}else{if(Yc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=gc,s=null,c=xc,f=n}return u&&c==="text/plain"&&(f=u,u=void 0),{action:s,method:o.toLowerCase(),encType:c,formData:u,body:f}}function w0(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function _3(n,i){if(n.id in i)return i[n.id];try{let o=await import(n.module);return i[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function V3(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function U3(n,i,o){let s=await Promise.all(n.map(async c=>{let u=i.routes[c.route.id];if(u){let f=await _3(u,o);return f.links?f.links():[]}return[]}));return Y3(s.flat(1).filter(V3).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function $g(n,i,o,s,c,u){let f=(p,g)=>o[g]?p.route.id!==o[g].route.id:!0,h=(p,g)=>{var b;return o[g].pathname!==p.pathname||((b=o[g].route.path)==null?void 0:b.endsWith("*"))&&o[g].params["*"]!==p.params["*"]};return u==="assets"?i.filter((p,g)=>f(p,g)||h(p,g)):u==="data"?i.filter((p,g)=>{var v;let b=s.routes[p.route.id];if(!b||!b.hasLoader)return!1;if(f(p,g)||h(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((v=o[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function H3(n,i,{includeHydrateFallback:o}={}){return q3(n.map(s=>{let c=i.routes[s.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function q3(n){return[...new Set(n)]}function G3(n){let i={},o=Object.keys(n).sort();for(let s of o)i[s]=n[s];return i}function Y3(n,i){let o=new Set;return new Set(i),n.reduce((s,c)=>{let u=JSON.stringify(G3(c));return o.has(u)||(o.add(u),s.push({key:u,link:c})),s},[])}function X3(n,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":i&&ui(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function a2(){let n=j.useContext(So);return w0(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function F3(){let n=j.useContext(Gc);return w0(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var S0=j.createContext(void 0);S0.displayName="FrameworkContext";function i2(){let n=j.useContext(S0);return w0(n,"You must render this element inside a <HydratedRouter> element"),n}function Q3(n,i){let o=j.useContext(S0),[s,c]=j.useState(!1),[u,f]=j.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:g,onMouseLeave:b,onTouchStart:v}=i,w=j.useRef(null);j.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let O=A=>{A.forEach(R=>{f(R.isIntersecting)})},B=new IntersectionObserver(O,{threshold:.5});return w.current&&B.observe(w.current),()=>{B.disconnect()}}},[n]),j.useEffect(()=>{if(s){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[s]);let C=()=>{c(!0)},E=()=>{c(!1),f(!1)};return o?n!=="intent"?[u,w,{}]:[u,w,{onFocus:ys(h,C),onBlur:ys(p,E),onMouseEnter:ys(g,C),onMouseLeave:ys(b,E),onTouchStart:ys(v,C)}]:[!1,w,{}]}function ys(n,i){return o=>{n&&n(o),o.defaultPrevented||i(o)}}function K3({page:n,...i}){let{router:o}=a2(),s=j.useMemo(()=>Xx(o.routes,n,o.basename),[o.routes,n,o.basename]);return s?j.createElement(I3,{page:n,matches:s,...i}):null}function Z3(n){let{manifest:i,routeModules:o}=i2(),[s,c]=j.useState([]);return j.useEffect(()=>{let u=!1;return U3(n,i,o).then(f=>{u||c(f)}),()=>{u=!0}},[n,i,o]),s}function I3({page:n,matches:i,...o}){let s=ga(),{manifest:c,routeModules:u}=i2(),{basename:f}=a2(),{loaderData:h,matches:p}=F3(),g=j.useMemo(()=>$g(n,i,p,c,s,"data"),[n,i,p,c,s]),b=j.useMemo(()=>$g(n,i,p,c,s,"assets"),[n,i,p,c,s]),v=j.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let E=new Set,O=!1;if(i.forEach(A=>{var T;let R=c.routes[A.route.id];!R||!R.hasLoader||(!g.some(N=>N.route.id===A.route.id)&&A.route.id in h&&((T=u[A.route.id])!=null&&T.shouldRevalidate)||R.hasClientLoader?O=!0:E.add(A.route.id))}),E.size===0)return[];let B=X3(n,f);return O&&E.size>0&&B.searchParams.set("_routes",i.filter(A=>E.has(A.route.id)).map(A=>A.route.id).join(",")),[B.pathname+B.search]},[f,h,s,c,g,i,n,u]),w=j.useMemo(()=>H3(b,c),[b,c]),C=Z3(b);return j.createElement(j.Fragment,null,v.map(E=>j.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...o})),w.map(E=>j.createElement("link",{key:E,rel:"modulepreload",href:E,...o})),C.map(({key:E,link:O})=>j.createElement("link",{key:E,...O})))}function J3(...n){return i=>{n.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var r2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{r2&&(window.__reactRouterVersion="7.4.0")}catch{}function W3({basename:n,children:i,window:o}){let s=j.useRef();s.current==null&&(s.current=Hy({window:o,v5Compat:!0}));let c=s.current,[u,f]=j.useState({action:c.action,location:c.location}),h=j.useCallback(p=>{j.startTransition(()=>f(p))},[f]);return j.useLayoutEffect(()=>c.listen(h),[c,h]),j.createElement(k3,{basename:n,children:i,location:u.location,navigationType:u.action,navigator:c})}var o2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pi=j.forwardRef(function({onClick:i,discover:o="render",prefetch:s="none",relative:c,reloadDocument:u,replace:f,state:h,target:p,to:g,preventScrollReset:b,viewTransition:v,...w},C){let{basename:E}=j.useContext(Va),O=typeof g=="string"&&o2.test(g),B,A=!1;if(typeof g=="string"&&O&&(B=g,r2))try{let Q=new URL(window.location.href),de=g.startsWith("//")?new URL(Q.protocol+g):new URL(g),X=ui(de.pathname,E);de.origin===Q.origin&&X!=null?g=X+de.search+de.hash:A=!0}catch{_a(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=p3(g,{relative:c}),[T,N,D]=Q3(s,w),G=a4(g,{replace:f,state:h,target:p,preventScrollReset:b,relative:c,viewTransition:v});function Z(Q){i&&i(Q),Q.defaultPrevented||G(Q)}let ae=j.createElement("a",{...w,...D,href:B||R,onClick:A||u?i:Z,ref:J3(C,N),target:p,"data-discover":!O&&o==="render"?"true":void 0});return T&&!O?j.createElement(j.Fragment,null,ae,j.createElement(K3,{page:R})):ae});pi.displayName="Link";var e4=j.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:s="",end:c=!1,style:u,to:f,viewTransition:h,children:p,...g},b){let v=Js(f,{relative:g.relative}),w=ga(),C=j.useContext(Gc),{navigator:E,basename:O}=j.useContext(Va),B=C!=null&&l4(v)&&h===!0,A=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,R=w.pathname,T=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;o||(R=R.toLowerCase(),T=T?T.toLowerCase():null,A=A.toLowerCase()),T&&O&&(T=ui(T,O)||T);const N=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let D=R===A||!c&&R.startsWith(A)&&R.charAt(N)==="/",G=T!=null&&(T===A||!c&&T.startsWith(A)&&T.charAt(A.length)==="/"),Z={isActive:D,isPending:G,isTransitioning:B},ae=D?i:void 0,Q;typeof s=="function"?Q=s(Z):Q=[s,D?"active":null,G?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let de=typeof u=="function"?u(Z):u;return j.createElement(pi,{...g,"aria-current":ae,className:Q,ref:b,style:de,to:f,viewTransition:h},typeof p=="function"?p(Z):p)});e4.displayName="NavLink";var t4=j.forwardRef(({discover:n="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:c,state:u,method:f=gc,action:h,onSubmit:p,relative:g,preventScrollReset:b,viewTransition:v,...w},C)=>{let E=o4(),O=s4(h,{relative:g}),B=f.toLowerCase()==="get"?"get":"post",A=typeof h=="string"&&o2.test(h),R=T=>{if(p&&p(T),T.defaultPrevented)return;T.preventDefault();let N=T.nativeEvent.submitter,D=(N==null?void 0:N.getAttribute("formmethod"))||f;E(N||T.currentTarget,{fetcherKey:i,method:D,navigate:o,replace:c,state:u,relative:g,preventScrollReset:b,viewTransition:v})};return j.createElement("form",{ref:C,method:B,action:O,onSubmit:s?p:R,...w,"data-discover":!A&&n==="render"?"true":void 0})});t4.displayName="Form";function n4(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function s2(n){let i=j.useContext(So);return Ut(i,n4(n)),i}function a4(n,{target:i,replace:o,state:s,preventScrollReset:c,relative:u,viewTransition:f}={}){let h=Ua(),p=ga(),g=Js(n,{relative:u});return j.useCallback(b=>{if(L3(b,i)){b.preventDefault();let v=o!==void 0?o:Os(p)===Os(g);h(n,{replace:v,state:s,preventScrollReset:c,relative:u,viewTransition:f})}},[p,h,g,o,s,i,n,c,u,f])}var i4=0,r4=()=>`__${String(++i4)}__`;function o4(){let{router:n}=s2("useSubmit"),{basename:i}=j.useContext(Va),o=j3();return j.useCallback(async(s,c={})=>{let{action:u,method:f,encType:h,formData:p,body:g}=P3(s,i);if(c.navigate===!1){let b=c.fetcherKey||r4();await n.fetch(b,o,c.action||u,{preventScrollReset:c.preventScrollReset,formData:p,body:g,formMethod:c.method||f,formEncType:c.encType||h,flushSync:c.flushSync})}else await n.navigate(c.action||u,{preventScrollReset:c.preventScrollReset,formData:p,body:g,formMethod:c.method||f,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,i,o])}function s4(n,{relative:i}={}){let{basename:o}=j.useContext(Va),s=j.useContext(hi);Ut(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),u={...Js(n||".",{relative:i})},f=ga();if(n==null){u.search=f.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(b=>b==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let b=h.toString();u.search=b?`?${b}`:""}}return(!n||n===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:si([o,u.pathname])),Os(u)}function l4(n,i={}){let o=j.useContext(Jx);Ut(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=s2("useViewTransitionState"),c=Js(n,{relative:i.relative});if(!o.isTransitioning)return!1;let u=ui(o.currentLocation.pathname,s)||o.currentLocation.pathname,f=ui(o.nextLocation.pathname,s)||o.nextLocation.pathname;return Ec(c.pathname,f)!=null||Ec(c.pathname,u)!=null}new TextEncoder;var Pn=function(){return Pn=Object.assign||function(i){for(var o,s=1,c=arguments.length;s<c;s++){o=arguments[s];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(i[u]=o[u])}return i},Pn.apply(this,arguments)};function Bs(n,i,o){if(o||arguments.length===2)for(var s=0,c=i.length,u;s<c;s++)(u||!(s in i))&&(u||(u=Array.prototype.slice.call(i,0,s)),u[s]=i[s]);return n.concat(u||Array.prototype.slice.call(i))}var Dt="-ms-",zs="-moz-",St="-webkit-",l2="comm",Xc="rule",C0="decl",c4="@import",c2="@keyframes",u4="@layer",u2=Math.abs,A0=String.fromCharCode,Hf=Object.assign;function d4(n,i){return gn(n,0)^45?(((i<<2^gn(n,0))<<2^gn(n,1))<<2^gn(n,2))<<2^gn(n,3):0}function d2(n){return n.trim()}function oi(n,i){return(n=i.exec(n))?n[0]:n}function Ie(n,i,o){return n.replace(i,o)}function bc(n,i,o){return n.indexOf(i,o)}function gn(n,i){return n.charCodeAt(i)|0}function ho(n,i,o){return n.slice(i,o)}function Na(n){return n.length}function f2(n){return n.length}function js(n,i){return i.push(n),n}function f4(n,i){return n.map(i).join("")}function Pg(n,i){return n.filter(function(o){return!oi(o,i)})}var Fc=1,po=1,h2=0,ma=0,cn=0,Co="";function Qc(n,i,o,s,c,u,f,h){return{value:n,root:i,parent:o,type:s,props:c,children:u,line:Fc,column:po,length:f,return:"",siblings:h}}function qi(n,i){return Hf(Qc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function ao(n){for(;n.root;)n=qi(n.root,{children:[n]});js(n,n.siblings)}function h4(){return cn}function p4(){return cn=ma>0?gn(Co,--ma):0,po--,cn===10&&(po=1,Fc--),cn}function Aa(){return cn=ma<h2?gn(Co,ma++):0,po++,cn===10&&(po=1,Fc++),cn}function Cr(){return gn(Co,ma)}function vc(){return ma}function Kc(n,i){return ho(Co,n,i)}function qf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m4(n){return Fc=po=1,h2=Na(Co=n),ma=0,[]}function g4(n){return Co="",n}function ff(n){return d2(Kc(ma-1,Gf(n===91?n+2:n===40?n+1:n)))}function x4(n){for(;(cn=Cr())&&cn<33;)Aa();return qf(n)>2||qf(cn)>3?"":" "}function b4(n,i){for(;--i&&Aa()&&!(cn<48||cn>102||cn>57&&cn<65||cn>70&&cn<97););return Kc(n,vc()+(i<6&&Cr()==32&&Aa()==32))}function Gf(n){for(;Aa();)switch(cn){case n:return ma;case 34:case 39:n!==34&&n!==39&&Gf(cn);break;case 40:n===41&&Gf(n);break;case 92:Aa();break}return ma}function v4(n,i){for(;Aa()&&n+cn!==57;)if(n+cn===84&&Cr()===47)break;return"/*"+Kc(i,ma-1)+"*"+A0(n===47?n:Aa())}function y4(n){for(;!qf(Cr());)Aa();return Kc(n,ma)}function w4(n){return g4(yc("",null,null,null,[""],n=m4(n),0,[0],n))}function yc(n,i,o,s,c,u,f,h,p){for(var g=0,b=0,v=f,w=0,C=0,E=0,O=1,B=1,A=1,R=0,T="",N=c,D=u,G=s,Z=T;B;)switch(E=R,R=Aa()){case 40:if(E!=108&&gn(Z,v-1)==58){bc(Z+=Ie(ff(R),"&","&\f"),"&\f",u2(g?h[g-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:Z+=ff(R);break;case 9:case 10:case 13:case 32:Z+=x4(E);break;case 92:Z+=b4(vc()-1,7);continue;case 47:switch(Cr()){case 42:case 47:js(S4(v4(Aa(),vc()),i,o,p),p);break;default:Z+="/"}break;case 123*O:h[g++]=Na(Z)*A;case 125*O:case 59:case 0:switch(R){case 0:case 125:B=0;case 59+b:A==-1&&(Z=Ie(Z,/\f/g,"")),C>0&&Na(Z)-v&&js(C>32?Vg(Z+";",s,o,v-1,p):Vg(Ie(Z," ","")+";",s,o,v-2,p),p);break;case 59:Z+=";";default:if(js(G=_g(Z,i,o,g,b,c,h,T,N=[],D=[],v,u),u),R===123)if(b===0)yc(Z,i,G,G,N,u,v,h,D);else switch(w===99&&gn(Z,3)===110?100:w){case 100:case 108:case 109:case 115:yc(n,G,G,s&&js(_g(n,G,G,0,0,c,h,T,c,N=[],v,D),D),c,D,v,h,s?N:D);break;default:yc(Z,G,G,G,[""],D,0,h,D)}}g=b=C=0,O=A=1,T=Z="",v=f;break;case 58:v=1+Na(Z),C=E;default:if(O<1){if(R==123)--O;else if(R==125&&O++==0&&p4()==125)continue}switch(Z+=A0(R),R*O){case 38:A=b>0?1:(Z+="\f",-1);break;case 44:h[g++]=(Na(Z)-1)*A,A=1;break;case 64:Cr()===45&&(Z+=ff(Aa())),w=Cr(),b=v=Na(T=Z+=y4(vc())),R++;break;case 45:E===45&&Na(Z)==2&&(O=0)}}return u}function _g(n,i,o,s,c,u,f,h,p,g,b,v){for(var w=c-1,C=c===0?u:[""],E=f2(C),O=0,B=0,A=0;O<s;++O)for(var R=0,T=ho(n,w+1,w=u2(B=f[O])),N=n;R<E;++R)(N=d2(B>0?C[R]+" "+T:Ie(T,/&\f/g,C[R])))&&(p[A++]=N);return Qc(n,i,o,c===0?Xc:h,p,g,b,v)}function S4(n,i,o,s){return Qc(n,i,o,l2,A0(h4()),ho(n,2,-2),0,s)}function Vg(n,i,o,s,c){return Qc(n,i,o,C0,ho(n,0,s),ho(n,s+1,-1),s,c)}function p2(n,i,o){switch(d4(n,i)){case 5103:return St+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return St+n+n;case 4789:return zs+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return St+n+zs+n+Dt+n+n;case 5936:switch(gn(n,i+11)){case 114:return St+n+Dt+Ie(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return St+n+Dt+Ie(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return St+n+Dt+Ie(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return St+n+Dt+n+n;case 6165:return St+n+Dt+"flex-"+n+n;case 5187:return St+n+Ie(n,/(\w+).+(:[^]+)/,St+"box-$1$2"+Dt+"flex-$1$2")+n;case 5443:return St+n+Dt+"flex-item-"+Ie(n,/flex-|-self/g,"")+(oi(n,/flex-|baseline/)?"":Dt+"grid-row-"+Ie(n,/flex-|-self/g,""))+n;case 4675:return St+n+Dt+"flex-line-pack"+Ie(n,/align-content|flex-|-self/g,"")+n;case 5548:return St+n+Dt+Ie(n,"shrink","negative")+n;case 5292:return St+n+Dt+Ie(n,"basis","preferred-size")+n;case 6060:return St+"box-"+Ie(n,"-grow","")+St+n+Dt+Ie(n,"grow","positive")+n;case 4554:return St+Ie(n,/([^-])(transform)/g,"$1"+St+"$2")+n;case 6187:return Ie(Ie(Ie(n,/(zoom-|grab)/,St+"$1"),/(image-set)/,St+"$1"),n,"")+n;case 5495:case 3959:return Ie(n,/(image-set\([^]*)/,St+"$1$`$1");case 4968:return Ie(Ie(n,/(.+:)(flex-)?(.*)/,St+"box-pack:$3"+Dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+St+n+n;case 4200:if(!oi(n,/flex-|baseline/))return Dt+"grid-column-align"+ho(n,i)+n;break;case 2592:case 3360:return Dt+Ie(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(s,c){return i=c,oi(s.props,/grid-\w+-end/)})?~bc(n+(o=o[i].value),"span",0)?n:Dt+Ie(n,"-start","")+n+Dt+"grid-row-span:"+(~bc(o,"span",0)?oi(o,/\d+/):+oi(o,/\d+/)-+oi(n,/\d+/))+";":Dt+Ie(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(s){return oi(s.props,/grid-\w+-start/)})?n:Dt+Ie(Ie(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ie(n,/(.+)-inline(.+)/,St+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Na(n)-1-i>6)switch(gn(n,i+1)){case 109:if(gn(n,i+4)!==45)break;case 102:return Ie(n,/(.+:)(.+)-([^]+)/,"$1"+St+"$2-$3$1"+zs+(gn(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~bc(n,"stretch",0)?p2(Ie(n,"stretch","fill-available"),i,o)+n:n}break;case 5152:case 5920:return Ie(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,u,f,h,p,g){return Dt+c+":"+u+g+(f?Dt+c+"-span:"+(h?p:+p-+u)+g:"")+n});case 4949:if(gn(n,i+6)===121)return Ie(n,":",":"+St)+n;break;case 6444:switch(gn(n,gn(n,14)===45?18:11)){case 120:return Ie(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+St+(gn(n,14)===45?"inline-":"")+"box$3$1"+St+"$2$3$1"+Dt+"$2box$3")+n;case 100:return Ie(n,":",":"+Dt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ie(n,"scroll-","scroll-snap-")+n}return n}function Tc(n,i){for(var o="",s=0;s<n.length;s++)o+=i(n[s],s,n,i)||"";return o}function C4(n,i,o,s){switch(n.type){case u4:if(n.children.length)break;case c4:case C0:return n.return=n.return||n.value;case l2:return"";case c2:return n.return=n.value+"{"+Tc(n.children,s)+"}";case Xc:if(!Na(n.value=n.props.join(",")))return""}return Na(o=Tc(n.children,s))?n.return=n.value+"{"+o+"}":""}function A4(n){var i=f2(n);return function(o,s,c,u){for(var f="",h=0;h<i;h++)f+=n[h](o,s,c,u)||"";return f}}function j4(n){return function(i){i.root||(i=i.return)&&n(i)}}function E4(n,i,o,s){if(n.length>-1&&!n.return)switch(n.type){case C0:n.return=p2(n.value,n.length,o);return;case c2:return Tc([qi(n,{value:Ie(n.value,"@","@"+St)})],s);case Xc:if(n.length)return f4(o=n.props,function(c){switch(oi(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ao(qi(n,{props:[Ie(c,/:(read-\w+)/,":"+zs+"$1")]})),ao(qi(n,{props:[c]})),Hf(n,{props:Pg(o,s)});break;case"::placeholder":ao(qi(n,{props:[Ie(c,/:(plac\w+)/,":"+St+"input-$1")]})),ao(qi(n,{props:[Ie(c,/:(plac\w+)/,":"+zs+"$1")]})),ao(qi(n,{props:[Ie(c,/:(plac\w+)/,Dt+"input-$1")]})),ao(qi(n,{props:[c]})),Hf(n,{props:Pg(o,s)});break}return""})}}var T4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kn={},mo=typeof process<"u"&&Kn!==void 0&&(Kn.REACT_APP_SC_ATTR||Kn.SC_ATTR)||"data-styled",m2="active",g2="data-styled-version",Zc="6.1.16",j0=`/*!sc*/
`,zc=typeof window<"u"&&"HTMLElement"in window,z4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kn!==void 0&&Kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kn.REACT_APP_SC_DISABLE_SPEEDY!==""?Kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kn!==void 0&&Kn.SC_DISABLE_SPEEDY!==void 0&&Kn.SC_DISABLE_SPEEDY!==""&&Kn.SC_DISABLE_SPEEDY!=="false"&&Kn.SC_DISABLE_SPEEDY),Ic=Object.freeze([]),go=Object.freeze({});function k4(n,i,o){return o===void 0&&(o=go),n.theme!==o.theme&&n.theme||i||o.theme}var x2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M4=/(^-|-$)/g;function Ug(n){return n.replace(R4,"-").replace(M4,"")}var D4=/(a)(d)/gi,sc=52,Hg=function(n){return String.fromCharCode(n+(n>25?39:97))};function Yf(n){var i,o="";for(i=Math.abs(n);i>sc;i=i/sc|0)o=Hg(i%sc)+o;return(Hg(i%sc)+o).replace(D4,"$1-$2")}var hf,b2=5381,ro=function(n,i){for(var o=i.length;o;)n=33*n^i.charCodeAt(--o);return n},v2=function(n){return ro(b2,n)};function y2(n){return Yf(v2(n)>>>0)}function O4(n){return n.displayName||n.name||"Component"}function pf(n){return typeof n=="string"&&!0}var w2=typeof Symbol=="function"&&Symbol.for,S2=w2?Symbol.for("react.memo"):60115,B4=w2?Symbol.for("react.forward_ref"):60112,L4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},N4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$4=((hf={})[B4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hf[S2]=C2,hf);function qg(n){return("type"in(i=n)&&i.type.$$typeof)===S2?C2:"$$typeof"in n?$4[n.$$typeof]:L4;var i}var P4=Object.defineProperty,_4=Object.getOwnPropertyNames,Gg=Object.getOwnPropertySymbols,V4=Object.getOwnPropertyDescriptor,U4=Object.getPrototypeOf,Yg=Object.prototype;function A2(n,i,o){if(typeof i!="string"){if(Yg){var s=U4(i);s&&s!==Yg&&A2(n,s,o)}var c=_4(i);Gg&&(c=c.concat(Gg(i)));for(var u=qg(n),f=qg(i),h=0;h<c.length;++h){var p=c[h];if(!(p in N4||o&&o[p]||f&&p in f||u&&p in u)){var g=V4(i,p);try{P4(n,p,g)}catch{}}}}return n}function xo(n){return typeof n=="function"}function E0(n){return typeof n=="object"&&"styledComponentId"in n}function yr(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Xf(n,i){if(n.length===0)return"";for(var o=n[0],s=1;s<n.length;s++)o+=n[s];return o}function Ls(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ff(n,i,o){if(o===void 0&&(o=!1),!o&&!Ls(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)n[s]=Ff(n[s],i[s]);else if(Ls(i))for(var s in i)n[s]=Ff(n[s],i[s]);return n}function T0(n,i){Object.defineProperty(n,"toString",{value:i})}function Ws(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var H4=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var o=0,s=0;s<i;s++)o+=this.groupSizes[s];return o},n.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var s=this.groupSizes,c=s.length,u=c;i>=u;)if((u<<=1)<0)throw Ws(16,"".concat(i));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var f=c;f<u;f++)this.groupSizes[f]=0}for(var h=this.indexOfGroup(i+1),p=(f=0,o.length);f<p;f++)this.tag.insertRule(h,o[f])&&(this.groupSizes[i]++,h++)},n.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],s=this.indexOfGroup(i),c=s+o;this.groupSizes[i]=0;for(var u=s;u<c;u++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var s=this.groupSizes[i],c=this.indexOfGroup(i),u=c+s,f=c;f<u;f++)o+="".concat(this.tag.getRule(f)).concat(j0);return o},n}(),wc=new Map,kc=new Map,Sc=1,lc=function(n){if(wc.has(n))return wc.get(n);for(;kc.has(Sc);)Sc++;var i=Sc++;return wc.set(n,i),kc.set(i,n),i},q4=function(n,i){Sc=i+1,wc.set(n,i),kc.set(i,n)},G4="style[".concat(mo,"][").concat(g2,'="').concat(Zc,'"]'),Y4=new RegExp("^".concat(mo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),X4=function(n,i,o){for(var s,c=o.split(","),u=0,f=c.length;u<f;u++)(s=c[u])&&n.registerName(i,s)},F4=function(n,i){for(var o,s=((o=i.textContent)!==null&&o!==void 0?o:"").split(j0),c=[],u=0,f=s.length;u<f;u++){var h=s[u].trim();if(h){var p=h.match(Y4);if(p){var g=0|parseInt(p[1],10),b=p[2];g!==0&&(q4(b,g),X4(n,b,p[3]),n.getTag().insertRules(g,c)),c.length=0}else c.push(h)}}},Xg=function(n){for(var i=document.querySelectorAll(G4),o=0,s=i.length;o<s;o++){var c=i[o];c&&c.getAttribute(mo)!==m2&&(F4(n,c),c.parentNode&&c.parentNode.removeChild(c))}};function Q4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var j2=function(n){var i=document.head,o=n||i,s=document.createElement("style"),c=function(h){var p=Array.from(h.querySelectorAll("style[".concat(mo,"]")));return p[p.length-1]}(o),u=c!==void 0?c.nextSibling:null;s.setAttribute(mo,m2),s.setAttribute(g2,Zc);var f=Q4();return f&&s.setAttribute("nonce",f),o.insertBefore(s,u),s},K4=function(){function n(i){this.element=j2(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,c=0,u=s.length;c<u;c++){var f=s[c];if(f.ownerNode===o)return f}throw Ws(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},n}(),Z4=function(){function n(i){this.element=j2(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),I4=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),Fg=zc,J4={isServer:!zc,useCSSOMInjection:!z4},E2=function(){function n(i,o,s){i===void 0&&(i=go),o===void 0&&(o={});var c=this;this.options=Pn(Pn({},J4),i),this.gs=o,this.names=new Map(s),this.server=!!i.isServer,!this.server&&zc&&Fg&&(Fg=!1,Xg(this)),T0(this,function(){return function(u){for(var f=u.getTag(),h=f.length,p="",g=function(v){var w=function(A){return kc.get(A)}(v);if(w===void 0)return"continue";var C=u.names.get(w),E=f.getGroup(v);if(C===void 0||!C.size||E.length===0)return"continue";var O="".concat(mo,".g").concat(v,'[id="').concat(w,'"]'),B="";C!==void 0&&C.forEach(function(A){A.length>0&&(B+="".concat(A,","))}),p+="".concat(E).concat(O,'{content:"').concat(B,'"}').concat(j0)},b=0;b<h;b++)g(b);return p}(c)})}return n.registerId=function(i){return lc(i)},n.prototype.rehydrate=function(){!this.server&&zc&&Xg(this)},n.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new n(Pn(Pn({},this.options),i),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var s=o.useCSSOMInjection,c=o.target;return o.isServer?new I4(c):s?new K4(c):new Z4(c)}(this.options),new H4(i)));var i},n.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},n.prototype.registerName=function(i,o){if(lc(i),this.names.has(i))this.names.get(i).add(o);else{var s=new Set;s.add(o),this.names.set(i,s)}},n.prototype.insertRules=function(i,o,s){this.registerName(i,o),this.getTag().insertRules(lc(i),s)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(lc(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),W4=/&/g,ew=/^\s*\/\/.*$/gm;function T2(n,i){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=T2(o.children,i)),o})}function tw(n){var i,o,s,c=go,u=c.options,f=u===void 0?go:u,h=c.plugins,p=h===void 0?Ic:h,g=function(w,C,E){return E.startsWith(o)&&E.endsWith(o)&&E.replaceAll(o,"").length>0?".".concat(i):w},b=p.slice();b.push(function(w){w.type===Xc&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(W4,o).replace(s,g))}),f.prefix&&b.push(E4),b.push(C4);var v=function(w,C,E,O){C===void 0&&(C=""),E===void 0&&(E=""),O===void 0&&(O="&"),i=O,o=C,s=new RegExp("\\".concat(o,"\\b"),"g");var B=w.replace(ew,""),A=w4(E||C?"".concat(E," ").concat(C," { ").concat(B," }"):B);f.namespace&&(A=T2(A,f.namespace));var R=[];return Tc(A,A4(b.concat(j4(function(T){return R.push(T)})))),R};return v.hash=p.length?p.reduce(function(w,C){return C.name||Ws(15),ro(w,C.name)},b2).toString():"",v}var nw=new E2,Qf=tw(),z2=Zn.createContext({shouldForwardProp:void 0,styleSheet:nw,stylis:Qf});z2.Consumer;Zn.createContext(void 0);function Qg(){return j.useContext(z2)}var k2=function(){function n(i,o){var s=this;this.inject=function(c,u){u===void 0&&(u=Qf);var f=s.name+u.hash;c.hasNameForId(s.id,f)||c.insertRules(s.id,f,u(s.rules,f,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,T0(this,function(){throw Ws(12,String(s.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Qf),this.name+i.hash},n}(),aw=function(n){return n>="A"&&n<="Z"};function Kg(n){for(var i="",o=0;o<n.length;o++){var s=n[o];if(o===1&&s==="-"&&n[0]==="-")return n;aw(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var R2=function(n){return n==null||n===!1||n===""},M2=function(n){var i,o,s=[];for(var c in n){var u=n[c];n.hasOwnProperty(c)&&!R2(u)&&(Array.isArray(u)&&u.isCss||xo(u)?s.push("".concat(Kg(c),":"),u,";"):Ls(u)?s.push.apply(s,Bs(Bs(["".concat(c," {")],M2(u),!1),["}"],!1)):s.push("".concat(Kg(c),": ").concat((i=c,(o=u)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in T4||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function Ar(n,i,o,s){if(R2(n))return[];if(E0(n))return[".".concat(n.styledComponentId)];if(xo(n)){if(!xo(u=n)||u.prototype&&u.prototype.isReactComponent||!i)return[n];var c=n(i);return Ar(c,i,o,s)}var u;return n instanceof k2?o?(n.inject(o,s),[n.getName(s)]):[n]:Ls(n)?M2(n):Array.isArray(n)?Array.prototype.concat.apply(Ic,n.map(function(f){return Ar(f,i,o,s)})):[n.toString()]}function iw(n){for(var i=0;i<n.length;i+=1){var o=n[i];if(xo(o)&&!E0(o))return!1}return!0}var rw=v2(Zc),ow=function(){function n(i,o,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&iw(i),this.componentId=o,this.baseHash=ro(rw,o),this.baseStyle=s,E2.registerId(o)}return n.prototype.generateAndInjectStyles=function(i,o,s){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))c=yr(c,this.staticRulesId);else{var u=Xf(Ar(this.rules,i,o,s)),f=Yf(ro(this.baseHash,u)>>>0);if(!o.hasNameForId(this.componentId,f)){var h=s(u,".".concat(f),void 0,this.componentId);o.insertRules(this.componentId,f,h)}c=yr(c,f),this.staticRulesId=f}else{for(var p=ro(this.baseHash,s.hash),g="",b=0;b<this.rules.length;b++){var v=this.rules[b];if(typeof v=="string")g+=v;else if(v){var w=Xf(Ar(v,i,o,s));p=ro(p,w+b),g+=w}}if(g){var C=Yf(p>>>0);o.hasNameForId(this.componentId,C)||o.insertRules(this.componentId,C,s(g,".".concat(C),void 0,this.componentId)),c=yr(c,C)}}return c},n}(),D2=Zn.createContext(void 0);D2.Consumer;var mf={};function sw(n,i,o){var s=E0(n),c=n,u=!pf(n),f=i.attrs,h=f===void 0?Ic:f,p=i.componentId,g=p===void 0?function(N,D){var G=typeof N!="string"?"sc":Ug(N);mf[G]=(mf[G]||0)+1;var Z="".concat(G,"-").concat(y2(Zc+G+mf[G]));return D?"".concat(D,"-").concat(Z):Z}(i.displayName,i.parentComponentId):p,b=i.displayName,v=b===void 0?function(N){return pf(N)?"styled.".concat(N):"Styled(".concat(O4(N),")")}(n):b,w=i.displayName&&i.componentId?"".concat(Ug(i.displayName),"-").concat(i.componentId):i.componentId||g,C=s&&c.attrs?c.attrs.concat(h).filter(Boolean):h,E=i.shouldForwardProp;if(s&&c.shouldForwardProp){var O=c.shouldForwardProp;if(i.shouldForwardProp){var B=i.shouldForwardProp;E=function(N,D){return O(N,D)&&B(N,D)}}else E=O}var A=new ow(o,w,s?c.componentStyle:void 0);function R(N,D){return function(G,Z,ae){var Q=G.attrs,de=G.componentStyle,X=G.defaultProps,Pe=G.foldedComponentIds,rt=G.styledComponentId,Y=G.target,je=Zn.useContext(D2),K=Qg(),I=G.shouldForwardProp||K.shouldForwardProp,re=k4(Z,je,X)||go,xe=function(he,le,Te){for(var Se,H=Pn(Pn({},le),{className:void 0,theme:Te}),Le=0;Le<he.length;Le+=1){var ve=xo(Se=he[Le])?Se(H):Se;for(var et in ve)H[et]=et==="className"?yr(H[et],ve[et]):et==="style"?Pn(Pn({},H[et]),ve[et]):ve[et]}return le.className&&(H.className=yr(H.className,le.className)),H}(Q,Z,re),M=xe.as||Y,ie={};for(var be in xe)xe[be]===void 0||be[0]==="$"||be==="as"||be==="theme"&&xe.theme===re||(be==="forwardedAs"?ie.as=xe.forwardedAs:I&&!I(be,M)||(ie[be]=xe[be]));var we=function(he,le){var Te=Qg(),Se=he.generateAndInjectStyles(le,Te.styleSheet,Te.stylis);return Se}(de,xe),me=yr(Pe,rt);return we&&(me+=" "+we),xe.className&&(me+=" "+xe.className),ie[pf(M)&&!x2.has(M)?"class":"className"]=me,ae&&(ie.ref=ae),j.createElement(M,ie)}(T,N,D)}R.displayName=v;var T=Zn.forwardRef(R);return T.attrs=C,T.componentStyle=A,T.displayName=v,T.shouldForwardProp=E,T.foldedComponentIds=s?yr(c.foldedComponentIds,c.styledComponentId):"",T.styledComponentId=w,T.target=s?c.target:n,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=s?function(D){for(var G=[],Z=1;Z<arguments.length;Z++)G[Z-1]=arguments[Z];for(var ae=0,Q=G;ae<Q.length;ae++)Ff(D,Q[ae],!0);return D}({},c.defaultProps,N):N}}),T0(T,function(){return".".concat(T.styledComponentId)}),u&&A2(T,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function Zg(n,i){for(var o=[n[0]],s=0,c=i.length;s<c;s+=1)o.push(i[s],n[s+1]);return o}var Ig=function(n){return Object.assign(n,{isCss:!0})};function Er(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(xo(n)||Ls(n))return Ig(Ar(Zg(Ic,Bs([n],i,!0))));var s=n;return i.length===0&&s.length===1&&typeof s[0]=="string"?Ar(s):Ig(Ar(Zg(s,i)))}function Kf(n,i,o){if(o===void 0&&(o=go),!i)throw Ws(1,i);var s=function(c){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return n(i,o,Er.apply(void 0,Bs([c],u,!1)))};return s.attrs=function(c){return Kf(n,i,Pn(Pn({},o),{attrs:Array.prototype.concat(o.attrs,c).filter(Boolean)}))},s.withConfig=function(c){return Kf(n,i,Pn(Pn({},o),c))},s}var O2=function(n){return Kf(sw,n)},y=O2;x2.forEach(function(n){y[n]=O2(n)});function He(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var s=Xf(Er.apply(void 0,Bs([n],i,!1))),c=y2(s);return new k2(c,s)}var B2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jg=Zn.createContext&&Zn.createContext(B2),lw=["attr","size","title"];function cw(n,i){if(n==null)return{};var o=uw(n,i),s,c;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(c=0;c<u.length;c++)s=u[c],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(o[s]=n[s])}return o}function uw(n,i){if(n==null)return{};var o={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(i.indexOf(s)>=0)continue;o[s]=n[s]}return o}function Rc(){return Rc=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},Rc.apply(this,arguments)}function Wg(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),o.push.apply(o,s)}return o}function Mc(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?Wg(Object(o),!0).forEach(function(s){dw(n,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Wg(Object(o)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(o,s))})}return n}function dw(n,i,o){return i=fw(i),i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}function fw(n){var i=hw(n,"string");return typeof i=="symbol"?i:i+""}function hw(n,i){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var s=o.call(n,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function L2(n){return n&&n.map((i,o)=>Zn.createElement(i.tag,Mc({key:o},i.attr),L2(i.child)))}function Et(n){return i=>Zn.createElement(pw,Rc({attr:Mc({},n.attr)},i),L2(n.child))}function pw(n){var i=o=>{var{attr:s,size:c,title:u}=n,f=cw(n,lw),h=c||o.size||"1em",p;return o.className&&(p=o.className),n.className&&(p=(p?p+" ":"")+n.className),Zn.createElement("svg",Rc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,f,{className:p,style:Mc(Mc({color:n.color||o.color},o.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&Zn.createElement("title",null,u),n.children)};return Jg!==void 0?Zn.createElement(Jg.Consumer,null,o=>i(o)):i(B2)}function ja(n){return Et({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function Yi(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function N2(n){return Et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"},child:[]}]})(n)}function Zf(n){return Et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"},child:[]}]})(n)}function mw(n){return Et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"},child:[]}]})(n)}function gw(n){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function xw(n){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function If(n){return Et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(n)}function bw(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"},child:[]}]})(n)}function vw(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(n)}function yw(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function $2(n){return Et({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(n)}function ww(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"},child:[]}]})(n)}function Sw(n){return Et({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"},child:[]}]})(n)}function P2(n){return Et({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function Dc(n){return Et({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function Cw(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"},child:[]}]})(n)}function _2(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(n)}function Oc(n){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(n)}function di(n){return Et({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function V2(n){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(n)}function Aw(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(n)}function jw(n){return Et({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function Ew(n){return Et({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"},child:[]}]})(n)}function Tw(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function Jf(n){return Et({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(n)}const zw="/vegetaquizshow/assets/vegetaball-DRzOjpAa.webp",U2=j.createContext(void 0),kw=({children:n})=>{const[i,o]=j.useState(0),[s,c]=j.useState(0),[u,f]=j.useState(!1),[h,p]=j.useState(()=>{const R=localStorage.getItem("quizPlayers");return R?JSON.parse(R):[]}),[g,b]=j.useState(null);j.useEffect(()=>{const R=localStorage.getItem("quizPlayers");if(R){const T=JSON.parse(R);p(T),T.length>0&&b(T[0])}},[]),j.useEffect(()=>{localStorage.setItem("quizPlayers",JSON.stringify(h))},[h]);const v=R=>{const T={...R,id:Date.now().toString()};p([...h,T]),h.length===0&&b(T)},w=R=>{if(p(h.filter(T=>T.id!==R)),g&&g.id===R){const T=h.filter(N=>N.id!==R);b(T.length>0?T[0]:null)}},C=(R,T)=>{p(h.map(N=>N.id===R?{...N,score:T}:N)),g&&g.id===R&&b({...g,score:T})},[E,O]=j.useState([]),A={score:i,setScore:o,currentQuestion:s,setCurrentQuestion:c,isGameActive:u,setIsGameActive:f,players:h,addPlayer:v,removePlayer:w,updatePlayerScore:C,activePlayer:g,setActivePlayer:b,guessedCards:E,markCardAsGuessed:R=>{O(T=>[...T,R])}};return m.jsx(U2.Provider,{value:A,children:n})},Ha=()=>{const n=j.useContext(U2);if(n===void 0)throw new Error("useGlobalContext must be used within a GlobalProvider");return n},Rw=()=>{const{players:n,addPlayer:i,removePlayer:o}=Ha(),[s,c]=j.useState(!1),[u,f]=j.useState(""),[h,p]=j.useState(""),[g,b]=j.useState(""),v=Ua(),w=A=>A?`https://play.pokemonshowdown.com/sprites/xyani/${A.toLowerCase().trim().replace(/[^a-z0-9]/g,"")}.gif`:"",C=A=>{const R=A.target.value;p(R),b(w(R))},E=()=>{if(u.trim()&&n.length<5){const A=h.trim()?w(h):`https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`;i({name:u.trim(),avatar:A,score:0}),f(""),p(""),b(""),c(!1)}},O=()=>{if(n.length===0){alert("Aggiungi almeno un allenatore prima di iniziare!");return}localStorage.setItem("quizPlayers",JSON.stringify(n)),v("/game")},B=A=>{o(A)};return m.jsxs(Bw,{children:[m.jsxs(Lw,{children:[m.jsx(Nw,{children:m.jsxs(Gw,{children:[m.jsx(gf,{children:"VEGETA"}),m.jsx(gf,{children:"QUIZ"}),m.jsx(gf,{children:"SHOW"})]})}),m.jsx($w,{children:m.jsxs(Xw,{children:[m.jsx(Fw,{children:m.jsxs(Qw,{children:[m.jsx(Kw,{}),"Allenatori Registrati",n.length>0&&m.jsxs(Zw,{children:[n.length,"/5"]})]})}),n.length===0?m.jsxs(Iw,{children:[m.jsx(Jw,{children:"Nessun allenatore nella sala"}),m.jsx(Ww,{onClick:()=>c(!0),children:"Registra il tuo primo allenatore!"})]}):m.jsx(e6,{children:n.map(A=>m.jsxs(Jc,{children:[m.jsx(t6,{children:m.jsx(n6,{src:A.avatar,alt:A.name})}),m.jsxs(a6,{children:[m.jsx(i6,{children:A.name}),m.jsxs(r6,{children:[m.jsx(bw,{}),m.jsx("span",{children:"Allenatore"})]})]}),m.jsx(o6,{onClick:()=>B(A.id),children:m.jsx(di,{})})]},A.id))})]})}),m.jsx(Pw,{children:m.jsxs(Yw,{children:[m.jsxs(t1,{onClick:()=>c(!0),disabled:n.length>=5,$color:"#EE1515",children:[m.jsx(e1,{children:m.jsx(jw,{})}),m.jsx("span",{children:"Registra Allenatore"})]}),m.jsxs(t1,{onClick:O,disabled:n.length===0,className:n.length===0?"disabled":"ready",$color:"#3B4CCA",$primary:!0,children:[m.jsx(e1,{children:m.jsx(If,{})}),m.jsx("span",{children:"Inizia Avventura"})]})]})})]}),s&&m.jsx(s6,{children:m.jsxs(l6,{children:[m.jsxs(c6,{children:[m.jsx("h2",{children:"Registra Nuovo Allenatore"}),m.jsx(u6,{onClick:()=>c(!1),children:m.jsx(di,{})})]}),m.jsxs(d6,{children:[m.jsxs(n1,{children:[m.jsx(a1,{children:"Nome Allenatore"}),m.jsx(i1,{type:"text",value:u,onChange:A=>f(A.target.value),placeholder:"Inserisci il nome dell'allenatore"})]}),m.jsxs(n1,{children:[m.jsx(a1,{children:"Nome Pokémon"}),m.jsx(i1,{type:"text",value:h,onChange:C,placeholder:"Inserisci il nome di un Pokémon (es. pikachu, charizard)"}),m.jsx(f6,{children:"Inserisci il nome di un Pokémon per utilizzarlo come avatar"}),g&&m.jsxs(g6,{children:[m.jsx(x6,{children:m.jsx(b6,{src:g,alt:"Anteprima Avatar"})}),m.jsx(v6,{children:"Anteprima Avatar"})]})]}),m.jsxs(h6,{children:[m.jsx(p6,{onClick:()=>c(!1),children:"Annulla"}),m.jsx(m6,{onClick:E,children:"Registra Allenatore"})]})]})]})}),m.jsxs(_w,{children:[m.jsx($s,{className:"ball1"}),m.jsx($s,{className:"ball2"}),m.jsx(Uw,{className:"ball3"}),m.jsx(Hw,{className:"ball4"}),m.jsx(qw,{className:"ball5"}),m.jsx(Vw,{})]}),m.jsx("img",{src:zw,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:.55,zIndex:0,objectFit:"cover"}})]})},Ns=He`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,Mw=He`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Dw=He`
  0% { box-shadow: 0 0 20px rgba(255, 222, 0, 0.5); }
  50% { box-shadow: 0 0 40px rgba(255, 222, 0, 0.8); }
  100% { box-shadow: 0 0 20px rgba(255, 222, 0, 0.5); }
`,Ow=He`
  0% { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`,Bw=y.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #233975;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`,Lw=y.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 3rem 4rem;
  z-index: 1;
`,Nw=y.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,$w=y.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`,Pw=y.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
`,_w=y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,Vw=y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
`,$s=y.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  opacity: 0.15;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px #333, 0 0 0 8px white;
  }

  &.ball1 {
    top: 10%;
    right: 15%;
    animation: ${Ns} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 15%;
    left: 10%;
    animation: ${Ns} 10s ease-in-out infinite reverse;
  }
`,Uw=y($s)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #3b4cca 50%,
    #3b4cca 100%
  );

  &.ball3 {
    top: 25%;
    right: 8%;
    width: 90px;
    height: 90px;
    animation: ${Ns} 15s ease-in-out infinite;
  }
`,Hw=y($s)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ffde00 50%,
    #ffde00 100%
  );

  &.ball4 {
    bottom: 25%;
    right: 12%;
    width: 100px;
    height: 100px;
    animation: ${Ns} 18s ease-in-out infinite reverse;
  }
`,qw=y($s)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #9966ff 50%,
    #9966ff 100%
  );

  &.ball5 {
    top: 45%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${Ns} 14s ease-in-out infinite;
  }
`,Gw=y.h1`
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${Mw} 3s infinite ease-in-out;
  font-family: 'Pokemon Solid', 'Arial Black', sans-serif;
  margin: 0;
`,gf=y.span`
  color: #ffde00;
  margin: 0 0.5rem;
  position: relative;
  -webkit-text-stroke: 3px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
`,Yw=y.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`,e1=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 12px;
  font-size: 1.2rem;
`,t1=y.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.5rem;
  border-radius: 60px;
  border: none;
  background: ${n=>n.$color||"#EE1515"};
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  min-width: 250px;

  ${n=>n.$primary&&Er`
      animation: ${Dw} 2s infinite ease-in-out;
    `}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.15);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: #666;
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
    animation: none;

    &:hover {
      transform: none;
      box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
    }
  }
`,Xw=y.div`
  width: 100%;
  max-width: 1200px;
  background: rgba(19, 42, 87, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 3px solid #ffde00;
  position: relative;
  min-height: 220px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: -1;
    border-radius: 22px;
  }
`,Fw=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.8rem;
`,Qw=y.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`,Kw=y.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px #333, 0 0 0 4px white;
  }
`,Zw=y.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 0.9rem;
`,Iw=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  height: 150px;
`,Jw=y.p`
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`,Ww=y.button`
  background: none;
  border: 3px dashed #ffde00;
  border-radius: 15px;
  padding: 1.5rem 3rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background: rgba(255, 222, 0, 0.1);
    transform: translateY(-3px);
    border-style: solid;
  }
`,e6=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: 150px;
  overflow: hidden;

  /* Handle 4-5 players layout */
  &:has(.player-card:nth-child(4):last-child) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    .player-card:nth-child(3) {
      grid-column: 1;
    }
    .player-card:nth-child(4) {
      grid-column: 2;
    }
  }

  &:has(.player-card:nth-child(5)) {
    grid-template-columns: repeat(3, 1fr);

    .player-card:nth-child(4) {
      grid-column: 1;
      justify-self: end;
    }
    .player-card:nth-child(5) {
      grid-column: 3;
      justify-self: start;
    }
  }
`,Jc=y.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);
  animation: ${Ow} 0.5s ease-out;
  height: 70px;
  min-width: 200px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.2;
    z-index: 0;
    border-radius: 13px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    border-color: #ffde00;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`,t6=y.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 2px;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${Jc}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`,n6=y.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  display: block;
`,a6=y.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,i6=y.h3`
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`,r6=y.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: #ffde00;
  opacity: 0.8;
  transition: all 0.3s ease;

  ${Jc}:hover & {
    opacity: 1;
    transform: translateX(3px);
  }
`,o6=y.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ee1515;
  border: 2px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  z-index: 2;

  ${Jc}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: #ff0044;
    transform: scale(1.15);
  }
`,s6=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,l6=y.div`
  background: radial-gradient(circle at top left, #233975 0%, #132a57 100%);
  border-radius: 25px;
  width: 500px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  animation: slideUp 0.3s ease;
  border: 3px solid #ffde00;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,c6=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;

  h2 {
    margin: 0;
    color: #ffde00;
    font-size: 1.6rem;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
  }
`,u6=y.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(90deg);
    color: #ee1515;
  }
`,d6=y.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`,n1=y.div`
  margin-bottom: 1.5rem;
`,a1=y.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffde00;
  font-weight: 600;
  font-size: 1rem;
`,i1=y.input`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ffde00;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,f6=y.p`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`,h6=y.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,p6=y.button`
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`,m6=y.button`
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  background: #ee1515;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  }
`,g6=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`,x6=y.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`,b6=y.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
  display: block;
`,v6=y.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;function y6(n){return Et({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(n)}function w6(){const n=Ua(),{players:i,updatePlayerScore:o}=Ha();j.useEffect(()=>{i.length===0&&n("/")},[n,i]);const s=[{id:"categories",title:"Quiz Pokémon",description:"Metti alla prova le tue conoscenze sui Pokémon",icon:m.jsx(If,{}),color:"#FF6B6B",gradient:"linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%)",category:"Trivia",path:"/game/categories"},{id:"wheel",title:"Ruota della Fortuna",description:"Gira la ruota e affronta sfide casuali per vincere punti",icon:m.jsx(mw,{}),color:"#4ECDC4",gradient:"linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",category:"Fortuna",path:"/game/wheel"},{id:"image",title:"Chi è quel Pokémon?",description:"Riconosci i Pokémon dalle loro silhouette misteriose",icon:m.jsx(yw,{}),color:"#FFE66D",gradient:"linear-gradient(135deg, #FFE66D 0%, #FF9F43 100%)",category:"Visual",path:"/game/image"},{id:"city",title:"Città Pokémon",description:"Esplora e indovina le città del mondo Pokémon",icon:m.jsx(N2,{}),color:"#A8E6CF",gradient:"linear-gradient(135deg, #A8E6CF 0%, #7FCDCD 100%)",category:"Geografia",path:"/game/city"},{id:"pokemon",title:"Poké-Detective",description:"Risolvi enigmi e indovina i Pokémon dagli indizi",icon:m.jsx(y6,{}),color:"#C7CEEA",gradient:"linear-gradient(135deg, #C7CEEA 0%, #A8A8F0 100%)",category:"Mistero",path:"/game/pokemon"}],c=f=>{const h=prompt(`Modifica il punteggio per ${f.name}:`,f.score.toString());if(h!==null){const p=parseInt(h,10);isNaN(p)?alert("Inserisci un numero valido."):o(f.id,p)}},u=[...i].sort((f,h)=>h.score-f.score);return m.jsxs(j6,{children:[m.jsxs(E6,{children:[m.jsxs(T6,{to:"/",children:[m.jsx(ja,{}),m.jsx("span",{children:"Home"})]}),m.jsxs(z6,{children:[m.jsx(k6,{children:"Centro Sfide Pokémon"}),m.jsx(R6,{children:"Scegli la tua avventura"})]})]}),m.jsxs(M6,{children:[m.jsxs(D6,{children:[m.jsxs(r1,{children:[m.jsx(If,{}),"Modalità di Gioco"]}),m.jsx(O6,{children:s.map((f,h)=>m.jsxs(H2,{to:f.path,$gradient:f.gradient,$delay:h*.1,children:[m.jsxs(B6,{children:[m.jsx(L6,{children:f.category}),m.jsx(N6,{children:f.icon})]}),m.jsxs($6,{children:[m.jsx(P6,{children:f.title}),m.jsx(_6,{children:f.description})]}),m.jsx(V6,{children:m.jsxs(U6,{children:["Gioca Ora",m.jsx(ja,{style:{transform:"rotate(180deg)"}})]})}),m.jsx(H6,{})]},f.id))})]}),m.jsxs(q6,{children:[m.jsxs(r1,{children:[m.jsx(V2,{}),"Classifica Allenatori"]}),m.jsx(G6,{children:u.map((f,h)=>m.jsxs(Y6,{$rank:h+1,children:[m.jsxs(X6,{$rank:h+1,children:[h===0&&m.jsx(Zf,{}),h===1&&m.jsx(ww,{}),h===2&&m.jsx(Oc,{}),h>2&&m.jsx("span",{children:h+1})]}),m.jsx(F6,{$rank:h+1,children:m.jsx(Q6,{src:f.avatar,alt:f.name})}),m.jsxs(K6,{children:[m.jsx(Z6,{children:f.name}),m.jsxs(q2,{onClick:()=>c(f),children:[m.jsx(I6,{}),f.score.toLocaleString()," punti",m.jsx(J6,{children:m.jsx(gw,{})})]})]}),m.jsx(W6,{})]},f.id))})]})]}),m.jsxs(eS,{children:[m.jsx(xf,{className:"pokeball-1"}),m.jsx(xf,{className:"pokeball-2"}),m.jsx(xf,{className:"pokeball-3"}),m.jsx(tS,{})]})]})}const S6=He`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,C6=He`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
`;He`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 222, 0, 0.3); }
  50% { box-shadow: 0 0 40px rgba(255, 222, 0, 0.6); }
`;He`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;He`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;const A6=He`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`,j6=y.div`
  height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #24243e 50%, #313155 100%);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,E6=y.header`
  position: relative;
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(59, 76, 202, 0.8) 0%,
    rgba(35, 57, 117, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  border-bottom: 3px solid #ffde00;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,T6=y(pi)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 222, 0, 0.5);
  border-radius: 50px;
  padding: 0.6rem 1rem;
  color: #ffde00;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 100;

  &:hover {
    background: rgba(255, 222, 0, 0.2);
    transform: translateX(-5px);
    box-shadow: 0 5px 20px rgba(255, 222, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
`,z6=y.div`
  text-align: center;
  margin-top: 1rem;
`,k6=y.h1`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #ffde00 0%, #ffc107 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 222, 0, 0.5);
  margin: 0;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,R6=y.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.3rem 0 0;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,M6=y.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`,r1=y.h2`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`,D6=y.section`
  flex-shrink: 0;
`,O6=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,H2=y(pi)`
  display: block;
  background: ${n=>n.$gradient};
  border-radius: 15px;
  padding: 0;
  text-decoration: none;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: ${S6} 0.6s ease ${n=>n.$delay}s both;
  border: 2px solid rgba(255, 255, 255, 0.1);
  min-height: 200px;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`,B6=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0;
`,L6=y.span`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`,N6=y.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,$6=y.div`
  padding: 1rem;
`,P6=y.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`,_6=y.p`
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
`,V6=y.div`
  padding: 0 1rem 1rem;
`,U6=y.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`,H6=y.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 222, 0, 0.5),
    transparent
  );
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;

  ${H2}:hover & {
    opacity: 1;
  }
`,q6=y.section`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,G6=y.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  max-height: none;
  /* padding-bottom: 0.5rem; */

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffde00;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`,Y6=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  border: 2px solid
    ${n=>n.$rank===1?"#FFD700":n.$rank===2?"#C0C0C0":n.$rank===3?"#CD7F32":"rgba(255, 255, 255, 0.1)"};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${n=>n.$rank===1?"linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent)":n.$rank===2?"linear-gradient(135deg, rgba(192, 192, 192, 0.1), transparent)":n.$rank===3?"linear-gradient(135deg, rgba(205, 127, 50, 0.1), transparent)":"none"};
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    min-width: 160px;
    padding: 0.8rem;
  }
`,X6=y.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${n=>n.$rank===1?"linear-gradient(135deg, #FFD700, #FFA500)":n.$rank===2?"linear-gradient(135deg, #C0C0C0, #A9A9A9)":n.$rank===3?"linear-gradient(135deg, #CD7F32, #8B4513)":"linear-gradient(135deg, #4ECDC4, #44A08D)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  svg {
    font-size: 1.2rem;
    color: white;
  }
`,F6=y.div`
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 0.8rem;
  border: 2px solid
    ${n=>n.$rank===1?"#FFD700":n.$rank===2?"#C0C0C0":n.$rank===3?"#CD7F32":"#4ECDC4"};
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,Q6=y.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
`;y.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${n=>n.$rank===1?"#FFD700":n.$rank===2?"#C0C0C0":"#CD7F32"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  border: 2px solid white;
  z-index: 2;

  &::after {
    content: '${n=>n.$rank}';
  }
`;const K6=y.div`
  text-align: center;
  z-index: 1;
  margin-bottom: 0.8rem;
`,Z6=y.div`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`,q2=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #ffde00;
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;

  &:hover {
    color: white;
    transform: scale(1.05);
  }
`,I6=y.div`
  width: 16px;
  height: 16px;
  background: #ffde00;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`,J6=y.span`
  opacity: 0;
  transition: all 0.2s ease;
  margin-left: 0.5rem;

  ${q2}:hover & {
    opacity: 1;
  }
`,W6=y.div`
  z-index: 1;
`;y.button`
  background: rgba(255, 222, 0, 0.2);
  border: 2px solid #ffde00;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffde00;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffde00;
    color: #0f0c29;
    transform: rotate(15deg) scale(1.1);
  }
`;const eS=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`,xf=y.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f0f0f0 50%, #ee1515 50%);
  opacity: 0.1;
  animation: ${C6} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 3px #333, 0 0 0 6px white;
  }

  &.pokeball-1 {
    top: 20%;
    right: 10%;
    animation-delay: 0s;
  }

  &.pokeball-2 {
    bottom: 30%;
    left: 5%;
    animation-delay: 2s;
  }

  &.pokeball-3 {
    top: 60%;
    right: 20%;
    animation-delay: 4s;
  }
`,tS=y.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(2px 2px at 20px 30px, #ffde00, transparent),
    radial-gradient(2px 2px at 40px 70px, #4ecdc4, transparent),
    radial-gradient(1px 1px at 90px 40px, #ff6b6b, transparent),
    radial-gradient(1px 1px at 130px 80px, #ffe66d, transparent),
    radial-gradient(2px 2px at 160px 30px, #c7ceea, transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: ${A6} 3s ease-in-out infinite alternate;
  opacity: 0.5;
`,z0=j.createContext({});function k0(n){const i=j.useRef(null);return i.current===null&&(i.current=n()),i.current}const R0=typeof window<"u",G2=R0?j.useLayoutEffect:j.useEffect,Wc=j.createContext(null),M0=j.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class nS extends j.Component{getSnapshotBeforeUpdate(i){const o=this.props.childRef.current;if(o&&i.isPresent&&!this.props.isPresent){const s=o.offsetParent,c=s instanceof HTMLElement&&s.offsetWidth||0,u=this.props.sizeRef.current;u.height=o.offsetHeight||0,u.width=o.offsetWidth||0,u.top=o.offsetTop,u.left=o.offsetLeft,u.right=c-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function aS({children:n,isPresent:i,anchorX:o}){const s=j.useId(),c=j.useRef(null),u=j.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=j.useContext(M0);return j.useInsertionEffect(()=>{const{width:h,height:p,top:g,left:b,right:v}=u.current;if(i||!c.current||!h||!p)return;const w=o==="left"?`left: ${b}`:`right: ${v}`;c.current.dataset.motionPopId=s;const C=document.createElement("style");return f&&(C.nonce=f),document.head.appendChild(C),C.sheet&&C.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${w}px !important;
            top: ${g}px !important;
          }
        `),()=>{document.head.removeChild(C)}},[i]),m.jsx(nS,{isPresent:i,childRef:c,sizeRef:u,children:j.cloneElement(n,{ref:c})})}const iS=({children:n,initial:i,isPresent:o,onExitComplete:s,custom:c,presenceAffectsLayout:u,mode:f,anchorX:h})=>{const p=k0(rS),g=j.useId(),b=j.useCallback(w=>{p.set(w,!0);for(const C of p.values())if(!C)return;s&&s()},[p,s]),v=j.useMemo(()=>({id:g,initial:i,isPresent:o,custom:c,onExitComplete:b,register:w=>(p.set(w,!1),()=>p.delete(w))}),u?[Math.random(),b]:[o,b]);return j.useMemo(()=>{p.forEach((w,C)=>p.set(C,!1))},[o]),j.useEffect(()=>{!o&&!p.size&&s&&s()},[o]),f==="popLayout"&&(n=m.jsx(aS,{isPresent:o,anchorX:h,children:n})),m.jsx(Wc.Provider,{value:v,children:n})};function rS(){return new Map}function Y2(n=!0){const i=j.useContext(Wc);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:c}=i,u=j.useId();j.useEffect(()=>{if(n)return c(u)},[n]);const f=j.useCallback(()=>n&&s&&s(u),[u,s,n]);return!o&&s?[!1,f]:[!0]}const cc=n=>n.key||"";function o1(n){const i=[];return j.Children.forEach(n,o=>{j.isValidElement(o)&&i.push(o)}),i}const s1=({children:n,custom:i,initial:o=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:u="sync",propagate:f=!1,anchorX:h="left"})=>{const[p,g]=Y2(f),b=j.useMemo(()=>o1(n),[n]),v=f&&!p?[]:b.map(cc),w=j.useRef(!0),C=j.useRef(b),E=k0(()=>new Map),[O,B]=j.useState(b),[A,R]=j.useState(b);G2(()=>{w.current=!1,C.current=b;for(let D=0;D<A.length;D++){const G=cc(A[D]);v.includes(G)?E.delete(G):E.get(G)!==!0&&E.set(G,!1)}},[A,v.length,v.join("-")]);const T=[];if(b!==O){let D=[...b];for(let G=0;G<A.length;G++){const Z=A[G],ae=cc(Z);v.includes(ae)||(D.splice(G,0,Z),T.push(Z))}return u==="wait"&&T.length&&(D=T),R(o1(D)),B(b),null}const{forceRender:N}=j.useContext(z0);return m.jsx(m.Fragment,{children:A.map(D=>{const G=cc(D),Z=f&&!p?!1:b===A||v.includes(G),ae=()=>{if(E.has(G))E.set(G,!0);else return;let Q=!0;E.forEach(de=>{de||(Q=!1)}),Q&&(N==null||N(),R(C.current),f&&(g==null||g()),s&&s())};return m.jsx(iS,{isPresent:Z,initial:!w.current||o?void 0:!1,custom:i,presenceAffectsLayout:c,mode:u,onExitComplete:Z?void 0:ae,anchorX:h,children:D},G)})})};function D0(n,i){n.indexOf(i)===-1&&n.push(i)}function O0(n,i){const o=n.indexOf(i);o>-1&&n.splice(o,1)}const In=n=>n;let X2=In;const oS={useManualTiming:!1};function B0(n){let i;return()=>(i===void 0&&(i=n()),i)}const bo=(n,i,o)=>{const s=i-n;return s===0?1:(o-n)/s};class L0{constructor(){this.subscriptions=[]}add(i){return D0(this.subscriptions,i),()=>O0(this.subscriptions,i)}notify(i,o,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,o,s);else for(let u=0;u<c;u++){const f=this.subscriptions[u];f&&f(i,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const li=n=>n*1e3,ci=n=>n/1e3;function F2(n,i){return i?n*(1e3/i):0}const sS=B0(()=>window.ScrollTimeline!==void 0);class lS{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,o){for(let s=0;s<this.animations.length;s++)this.animations[s][i]=o}attachTimeline(i,o){const s=this.animations.map(c=>{if(sS()&&c.attachTimeline)return c.attachTimeline(i);if(typeof o=="function")return o(c)});return()=>{s.forEach((c,u)=>{c&&c(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let o=0;o<this.animations.length;o++)i=Math.max(i,this.animations[o].duration);return i}runAll(i){this.animations.forEach(o=>o[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class cS extends lS{then(i,o){return Promise.all(this.animations).then(i).catch(o)}}function N0(n,i){return n?n[i]||n.default||n:void 0}const Wf=2e4;function Q2(n){let i=0;const o=50;let s=n.next(i);for(;!s.done&&i<Wf;)i+=o,s=n.next(i);return i>=Wf?1/0:i}function $0(n){return typeof n=="function"}function l1(n,i){n.timeline=i,n.onfinish=null}const P0=n=>Array.isArray(n)&&typeof n[0]=="number",uS={linearEasing:void 0};function dS(n,i){const o=B0(n);return()=>{var s;return(s=uS[i])!==null&&s!==void 0?s:o()}}const Bc=dS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),K2=(n,i,o=10)=>{let s="";const c=Math.max(Math.round(i/o),2);for(let u=0;u<c;u++)s+=n(bo(0,c-1,u))+", ";return`linear(${s.substring(0,s.length-2)})`};function Z2(n){return!!(typeof n=="function"&&Bc()||!n||typeof n=="string"&&(n in e0||Bc())||P0(n)||Array.isArray(n)&&n.every(Z2))}const Es=([n,i,o,s])=>`cubic-bezier(${n}, ${i}, ${o}, ${s})`,e0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Es([0,.65,.55,1]),circOut:Es([.55,0,1,.45]),backIn:Es([.31,.01,.66,-.59]),backOut:Es([.33,1.53,.69,.99])};function I2(n,i){if(n)return typeof n=="function"&&Bc()?K2(n,i):P0(n)?Es(n):Array.isArray(n)?n.map(o=>I2(o,i)||e0.easeOut):e0[n]}const uc=["read","resolveKeyframes","update","preRender","render","postRender"],c1={value:null};function fS(n,i){let o=new Set,s=new Set,c=!1,u=!1;const f=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1},p=0;function g(v){f.has(v)&&(b.schedule(v),n()),p++,v(h)}const b={schedule:(v,w=!1,C=!1)=>{const O=C&&c?o:s;return w&&f.add(v),O.has(v)||O.add(v),v},cancel:v=>{s.delete(v),f.delete(v)},process:v=>{if(h=v,c){u=!0;return}c=!0,[o,s]=[s,o],o.forEach(g),i&&c1.value&&c1.value.frameloop[i].push(p),p=0,o.clear(),c=!1,u&&(u=!1,b.process(v))}};return b}const hS=40;function J2(n,i){let o=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,f=uc.reduce((A,R)=>(A[R]=fS(u,i?R:void 0),A),{}),{read:h,resolveKeyframes:p,update:g,preRender:b,render:v,postRender:w}=f,C=()=>{const A=performance.now();o=!1,c.delta=s?1e3/60:Math.max(Math.min(A-c.timestamp,hS),1),c.timestamp=A,c.isProcessing=!0,h.process(c),p.process(c),g.process(c),b.process(c),v.process(c),w.process(c),c.isProcessing=!1,o&&i&&(s=!1,n(C))},E=()=>{o=!0,s=!0,c.isProcessing||n(C)};return{schedule:uc.reduce((A,R)=>{const T=f[R];return A[R]=(N,D=!1,G=!1)=>(o||E(),T.schedule(N,D,G)),A},{}),cancel:A=>{for(let R=0;R<uc.length;R++)f[uc[R]].cancel(A)},state:c,steps:f}}const{schedule:Rt,cancel:Xi,state:Cn,steps:bf}=J2(typeof requestAnimationFrame<"u"?requestAnimationFrame:In,!0),{schedule:_0}=J2(queueMicrotask,!1);let Cc;function pS(){Cc=void 0}const $a={now:()=>(Cc===void 0&&$a.set(Cn.isProcessing||oS.useManualTiming?Cn.timestamp:performance.now()),Cc),set:n=>{Cc=n,queueMicrotask(pS)}},Ca={x:!1,y:!1};function W2(){return Ca.x||Ca.y}function mS(n){return n==="x"||n==="y"?Ca[n]?null:(Ca[n]=!0,()=>{Ca[n]=!1}):Ca.x||Ca.y?null:(Ca.x=Ca.y=!0,()=>{Ca.x=Ca.y=!1})}function gS(n,i,o){var s;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let c=document;const u=(s=void 0)!==null&&s!==void 0?s:c.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}function eb(n,i){const o=gS(n),s=new AbortController,c={passive:!0,...i,signal:s.signal};return[o,c,()=>s.abort()]}function u1(n){return!(n.pointerType==="touch"||W2())}function xS(n,i,o={}){const[s,c,u]=eb(n,o),f=h=>{if(!u1(h))return;const{target:p}=h,g=i(p,h);if(typeof g!="function"||!p)return;const b=v=>{u1(v)&&(g(v),p.removeEventListener("pointerleave",b))};p.addEventListener("pointerleave",b,c)};return s.forEach(h=>{h.addEventListener("pointerenter",f,c)}),u}function d1(n,i){const o=`${i}PointerCapture`;if(n.target instanceof Element&&o in n.target&&n.pointerId!==void 0)try{n.target[o](n.pointerId)}catch{}}const tb=(n,i)=>i?n===i?!0:tb(n,i.parentElement):!1,V0=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,bS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function vS(n){return bS.has(n.tagName)||n.tabIndex!==-1}const Ts=new WeakSet;function f1(n){return i=>{i.key==="Enter"&&n(i)}}function vf(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const yS=(n,i)=>{const o=n.currentTarget;if(!o)return;const s=f1(()=>{if(Ts.has(o))return;vf(o,"down");const c=f1(()=>{vf(o,"up")}),u=()=>vf(o,"cancel");o.addEventListener("keyup",c,i),o.addEventListener("blur",u,i)});o.addEventListener("keydown",s,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),i)};function h1(n){return V0(n)&&!W2()}function wS(n,i,o={}){const[s,c,u]=eb(n,o),f=h=>{const p=h.currentTarget;if(!p||!h1(h)||Ts.has(p))return;Ts.add(p),d1(h,"set");const g=i(p,h),b=(C,E)=>{p.removeEventListener("pointerup",v),p.removeEventListener("pointercancel",w),d1(C,"release"),!(!h1(C)||!Ts.has(p))&&(Ts.delete(p),typeof g=="function"&&g(C,{success:E}))},v=C=>{(C.isTrusted?SS(C,p instanceof Element?p.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?b(C,!1):b(C,!(p instanceof Element)||tb(p,C.target))},w=C=>{b(C,!1)};p.addEventListener("pointerup",v,c),p.addEventListener("pointercancel",w,c),p.addEventListener("lostpointercapture",w,c)};return s.forEach(h=>{h=o.useGlobalTarget?window:h;let p=!1;h instanceof HTMLElement&&(p=!0,!vS(h)&&h.getAttribute("tabindex")===null&&(h.tabIndex=0)),h.addEventListener("pointerdown",f,c),p&&h.addEventListener("focus",g=>yS(g,c),c)}),u}function SS(n,i){return n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom}const p1=30,CS=n=>!isNaN(parseFloat(n));class AS{constructor(i,o={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{const u=$a.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=$a.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=CS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new L0);const s=this.events[i].add(o);return i==="change"?()=>{s(),Rt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i,o=!0){!o||!this.passiveEffect?this.updateAndNotify(i,o):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=$a.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>p1)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,p1);return F2(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ps(n,i){return new AS(n,i)}const nb=j.createContext({strict:!1}),m1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},vo={};for(const n in m1)vo[n]={isEnabled:i=>m1[n].some(o=>!!i[o])};function jS(n){for(const i in n)vo[i]={...vo[i],...n[i]}}const ES=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Lc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||ES.has(n)}let ab=n=>!Lc(n);function TS(n){n&&(ab=i=>i.startsWith("on")?!Lc(i):n(i))}try{TS(require("@emotion/is-prop-valid").default)}catch{}function zS(n,i,o){const s={};for(const c in n)c==="values"&&typeof n.values=="object"||(ab(c)||o===!0&&Lc(c)||!i&&!Lc(c)||n.draggable&&c.startsWith("onDrag"))&&(s[c]=n[c]);return s}function kS(n){if(typeof Proxy>"u")return n;const i=new Map,o=(...s)=>n(...s);return new Proxy(o,{get:(s,c)=>c==="create"?n:(i.has(c)||i.set(c,n(c)),i.get(c))})}const eu=j.createContext({});function tu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function _s(n){return typeof n=="string"||Array.isArray(n)}const U0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],H0=["initial",...U0];function nu(n){return tu(n.animate)||H0.some(i=>_s(n[i]))}function ib(n){return!!(nu(n)||n.variants)}function RS(n,i){if(nu(n)){const{initial:o,animate:s}=n;return{initial:o===!1||_s(o)?o:void 0,animate:_s(s)?s:void 0}}return n.inherit!==!1?i:{}}function MS(n){const{initial:i,animate:o}=RS(n,j.useContext(eu));return j.useMemo(()=>({initial:i,animate:o}),[g1(i),g1(o)])}function g1(n){return Array.isArray(n)?n.join(" "):n}const DS=Symbol.for("motionComponentSymbol");function oo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function OS(n,i,o){return j.useCallback(s=>{s&&n.onMount&&n.onMount(s),i&&(s?i.mount(s):i.unmount()),o&&(typeof o=="function"?o(s):oo(o)&&(o.current=s))},[i])}const q0=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),BS="framerAppearId",rb="data-"+q0(BS),ob=j.createContext({});function LS(n,i,o,s,c){var u,f;const{visualElement:h}=j.useContext(eu),p=j.useContext(nb),g=j.useContext(Wc),b=j.useContext(M0).reducedMotion,v=j.useRef(null);s=s||p.renderer,!v.current&&s&&(v.current=s(n,{visualState:i,parent:h,props:o,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:b}));const w=v.current,C=j.useContext(ob);w&&!w.projection&&c&&(w.type==="html"||w.type==="svg")&&NS(v.current,o,c,C);const E=j.useRef(!1);j.useInsertionEffect(()=>{w&&E.current&&w.update(o,g)});const O=o[rb],B=j.useRef(!!O&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,O))&&((f=window.MotionHasOptimisedAnimation)===null||f===void 0?void 0:f.call(window,O)));return G2(()=>{w&&(E.current=!0,window.MotionIsMounted=!0,w.updateFeatures(),_0.render(w.render),B.current&&w.animationState&&w.animationState.animateChanges())}),j.useEffect(()=>{w&&(!B.current&&w.animationState&&w.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)===null||A===void 0||A.call(window,O)}),B.current=!1))}),w}function NS(n,i,o,s){const{layoutId:c,layout:u,drag:f,dragConstraints:h,layoutScroll:p,layoutRoot:g}=i;n.projection=new o(n.latestValues,i["data-framer-portal-id"]?void 0:sb(n.parent)),n.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!f||h&&oo(h),visualElement:n,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:g})}function sb(n){if(n)return n.options.allowProjection!==!1?n.projection:sb(n.parent)}function $S({preloadedFeatures:n,createVisualElement:i,useRender:o,useVisualState:s,Component:c}){var u,f;n&&jS(n);function h(g,b){let v;const w={...j.useContext(M0),...g,layoutId:PS(g)},{isStatic:C}=w,E=MS(g),O=s(g,C);if(!C&&R0){_S();const B=VS(w);v=B.MeasureLayout,E.visualElement=LS(c,O,w,i,B.ProjectionNode)}return m.jsxs(eu.Provider,{value:E,children:[v&&E.visualElement?m.jsx(v,{visualElement:E.visualElement,...w}):null,o(c,g,OS(O,E.visualElement,b),O,C,E.visualElement)]})}h.displayName=`motion.${typeof c=="string"?c:`create(${(f=(u=c.displayName)!==null&&u!==void 0?u:c.name)!==null&&f!==void 0?f:""})`}`;const p=j.forwardRef(h);return p[DS]=c,p}function PS({layoutId:n}){const i=j.useContext(z0).id;return i&&n!==void 0?i+"-"+n:n}function _S(n,i){j.useContext(nb).strict}function VS(n){const{drag:i,layout:o}=vo;if(!i&&!o)return{};const s={...i,...o};return{MeasureLayout:i!=null&&i.isEnabled(n)||o!=null&&o.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const lb=n=>i=>typeof i=="string"&&i.startsWith(n),G0=lb("--"),US=lb("var(--"),Y0=n=>US(n)?HS.test(n.split("/*")[0].trim()):!1,HS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Vs={};function qS(n){for(const i in n)Vs[i]=n[i],G0(i)&&(Vs[i].isCSSVariable=!0)}const Ao=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Tr=new Set(Ao);function cb(n,{layout:i,layoutId:o}){return Tr.has(n)||n.startsWith("origin")||(i||o!==void 0)&&(!!Vs[n]||n==="opacity")}const Rn=n=>!!(n&&n.getVelocity),ub=(n,i)=>i&&typeof n=="number"?i.transform(n):n,fi=(n,i,o)=>o>i?i:o<n?n:o,jo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Us={...jo,transform:n=>fi(0,1,n)},dc={...jo,default:1},el=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),Gi=el("deg"),Pa=el("%"),$e=el("px"),GS=el("vh"),YS=el("vw"),x1={...Pa,parse:n=>Pa.parse(n)/100,transform:n=>Pa.transform(n*100)},XS={borderWidth:$e,borderTopWidth:$e,borderRightWidth:$e,borderBottomWidth:$e,borderLeftWidth:$e,borderRadius:$e,radius:$e,borderTopLeftRadius:$e,borderTopRightRadius:$e,borderBottomRightRadius:$e,borderBottomLeftRadius:$e,width:$e,maxWidth:$e,height:$e,maxHeight:$e,top:$e,right:$e,bottom:$e,left:$e,padding:$e,paddingTop:$e,paddingRight:$e,paddingBottom:$e,paddingLeft:$e,margin:$e,marginTop:$e,marginRight:$e,marginBottom:$e,marginLeft:$e,backgroundPositionX:$e,backgroundPositionY:$e},FS={rotate:Gi,rotateX:Gi,rotateY:Gi,rotateZ:Gi,scale:dc,scaleX:dc,scaleY:dc,scaleZ:dc,skew:Gi,skewX:Gi,skewY:Gi,distance:$e,translateX:$e,translateY:$e,translateZ:$e,x:$e,y:$e,z:$e,perspective:$e,transformPerspective:$e,opacity:Us,originX:x1,originY:x1,originZ:$e},b1={...jo,transform:Math.round},X0={...XS,...FS,zIndex:b1,size:$e,fillOpacity:Us,strokeOpacity:Us,numOctaves:b1},QS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},KS=Ao.length;function ZS(n,i,o){let s="",c=!0;for(let u=0;u<KS;u++){const f=Ao[u],h=n[f];if(h===void 0)continue;let p=!0;if(typeof h=="number"?p=h===(f.startsWith("scale")?1:0):p=parseFloat(h)===0,!p||o){const g=ub(h,X0[f]);if(!p){c=!1;const b=QS[f]||f;s+=`${b}(${g}) `}o&&(i[f]=g)}}return s=s.trim(),o?s=o(i,c?"":s):c&&(s="none"),s}function F0(n,i,o){const{style:s,vars:c,transformOrigin:u}=n;let f=!1,h=!1;for(const p in i){const g=i[p];if(Tr.has(p)){f=!0;continue}else if(G0(p)){c[p]=g;continue}else{const b=ub(g,X0[p]);p.startsWith("origin")?(h=!0,u[p]=b):s[p]=b}}if(i.transform||(f||o?s.transform=ZS(i,n.transform,o):s.transform&&(s.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:b=0}=u;s.transformOrigin=`${p} ${g} ${b}`}}const Q0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function db(n,i,o){for(const s in i)!Rn(i[s])&&!cb(s,o)&&(n[s]=i[s])}function IS({transformTemplate:n},i){return j.useMemo(()=>{const o=Q0();return F0(o,i,n),Object.assign({},o.vars,o.style)},[i])}function JS(n,i){const o=n.style||{},s={};return db(s,o,n),Object.assign(s,IS(n,i)),s}function WS(n,i){const o={},s=JS(n,i);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=s,o}const e8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function K0(n){return typeof n!="string"||n.includes("-")?!1:!!(e8.indexOf(n)>-1||/[A-Z]/u.test(n))}const t8={offset:"stroke-dashoffset",array:"stroke-dasharray"},n8={offset:"strokeDashoffset",array:"strokeDasharray"};function a8(n,i,o=1,s=0,c=!0){n.pathLength=1;const u=c?t8:n8;n[u.offset]=$e.transform(-s);const f=$e.transform(i),h=$e.transform(o);n[u.array]=`${f} ${h}`}function v1(n,i,o){return typeof n=="string"?n:$e.transform(i+o*n)}function i8(n,i,o){const s=v1(i,n.x,n.width),c=v1(o,n.y,n.height);return`${s} ${c}`}function Z0(n,{attrX:i,attrY:o,attrScale:s,originX:c,originY:u,pathLength:f,pathSpacing:h=1,pathOffset:p=0,...g},b,v){if(F0(n,g,v),b){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:w,style:C,dimensions:E}=n;w.transform&&(E&&(C.transform=w.transform),delete w.transform),E&&(c!==void 0||u!==void 0||C.transform)&&(C.transformOrigin=i8(E,c!==void 0?c:.5,u!==void 0?u:.5)),i!==void 0&&(w.x=i),o!==void 0&&(w.y=o),s!==void 0&&(w.scale=s),f!==void 0&&a8(w,f,h,p,!1)}const fb=()=>({...Q0(),attrs:{}}),I0=n=>typeof n=="string"&&n.toLowerCase()==="svg";function r8(n,i,o,s){const c=j.useMemo(()=>{const u=fb();return Z0(u,i,I0(s),n.transformTemplate),{...u.attrs,style:{...u.style}}},[i]);if(n.style){const u={};db(u,n.style,n),c.style={...u,...c.style}}return c}function o8(n=!1){return(o,s,c,{latestValues:u},f)=>{const p=(K0(o)?r8:WS)(s,u,f,o),g=zS(s,typeof o=="string",n),b=o!==j.Fragment?{...g,...p,ref:c}:{},{children:v}=s,w=j.useMemo(()=>Rn(v)?v.get():v,[v]);return j.createElement(o,{...b,children:w})}}function y1(n){const i=[{},{}];return n==null||n.values.forEach((o,s)=>{i[0][s]=o.get(),i[1][s]=o.getVelocity()}),i}function J0(n,i,o,s){if(typeof i=="function"){const[c,u]=y1(s);i=i(o!==void 0?o:n.custom,c,u)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,u]=y1(s);i=i(o!==void 0?o:n.custom,c,u)}return i}const t0=n=>Array.isArray(n),s8=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),l8=n=>t0(n)?n[n.length-1]||0:n;function Ac(n){const i=Rn(n)?n.get():n;return s8(i)?i.toValue():i}function c8({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:o},s,c,u){const f={latestValues:u8(s,c,u,n),renderState:i()};return o&&(f.onMount=h=>o({props:s,current:h,...f}),f.onUpdate=h=>o(h)),f}const hb=n=>(i,o)=>{const s=j.useContext(eu),c=j.useContext(Wc),u=()=>c8(n,i,s,c);return o?u():k0(u)};function u8(n,i,o,s){const c={},u=s(n,{});for(const w in u)c[w]=Ac(u[w]);let{initial:f,animate:h}=n;const p=nu(n),g=ib(n);i&&g&&!p&&n.inherit!==!1&&(f===void 0&&(f=i.initial),h===void 0&&(h=i.animate));let b=o?o.initial===!1:!1;b=b||f===!1;const v=b?h:f;if(v&&typeof v!="boolean"&&!tu(v)){const w=Array.isArray(v)?v:[v];for(let C=0;C<w.length;C++){const E=J0(n,w[C]);if(E){const{transitionEnd:O,transition:B,...A}=E;for(const R in A){let T=A[R];if(Array.isArray(T)){const N=b?T.length-1:0;T=T[N]}T!==null&&(c[R]=T)}for(const R in O)c[R]=O[R]}}}return c}function W0(n,i,o){var s;const{style:c}=n,u={};for(const f in c)(Rn(c[f])||i.style&&Rn(i.style[f])||cb(f,n)||((s=o==null?void 0:o.getValue(f))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(u[f]=c[f]);return u}const d8={useVisualState:hb({scrapeMotionValuesFromProps:W0,createRenderState:Q0})};function pb(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}function mb(n,{style:i,vars:o},s,c){Object.assign(n.style,i,c&&c.getProjectionStyles(s));for(const u in o)n.style.setProperty(u,o[u])}const gb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function xb(n,i,o,s){mb(n,i,void 0,s);for(const c in i.attrs)n.setAttribute(gb.has(c)?c:q0(c),i.attrs[c])}function bb(n,i,o){const s=W0(n,i,o);for(const c in n)if(Rn(n[c])||Rn(i[c])){const u=Ao.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[u]=n[c]}return s}const w1=["x","y","width","height","cx","cy","r"],f8={useVisualState:hb({scrapeMotionValuesFromProps:bb,createRenderState:fb,onUpdate:({props:n,prevProps:i,current:o,renderState:s,latestValues:c})=>{if(!o)return;let u=!!n.drag;if(!u){for(const h in c)if(Tr.has(h)){u=!0;break}}if(!u)return;let f=!i;if(i)for(let h=0;h<w1.length;h++){const p=w1[h];n[p]!==i[p]&&(f=!0)}f&&Rt.read(()=>{pb(o,s),Rt.render(()=>{Z0(s,c,I0(o.tagName),n.transformTemplate),xb(o,s)})})}})};function h8(n,i){return function(s,{forwardMotionProps:c}={forwardMotionProps:!1}){const f={...K0(s)?f8:d8,preloadedFeatures:n,useRender:o8(c),createVisualElement:i,Component:s};return $S(f)}}function Hs(n,i,o){const s=n.getProps();return J0(s,i,o!==void 0?o:s.custom,n)}const vb=new Set(["width","height","top","left","right","bottom",...Ao]);function p8(n,i,o){n.hasValue(i)?n.getValue(i).set(o):n.addValue(i,Ps(o))}function m8(n,i){const o=Hs(n,i);let{transitionEnd:s={},transition:c={},...u}=o||{};u={...u,...s};for(const f in u){const h=l8(u[f]);p8(n,f,h)}}function g8(n){return!!(Rn(n)&&n.add)}function n0(n,i){const o=n.getValue("willChange");if(g8(o))return o.add(i)}function yb(n){return n.props[rb]}const wb=(n,i,o)=>(((1-3*o+3*i)*n+(3*o-6*i))*n+3*i)*n,x8=1e-7,b8=12;function v8(n,i,o,s,c){let u,f,h=0;do f=i+(o-i)/2,u=wb(f,s,c)-n,u>0?o=f:i=f;while(Math.abs(u)>x8&&++h<b8);return f}function tl(n,i,o,s){if(n===i&&o===s)return In;const c=u=>v8(u,0,1,n,o);return u=>u===0||u===1?u:wb(c(u),i,s)}const Sb=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,Cb=n=>i=>1-n(1-i),Ab=tl(.33,1.53,.69,.99),eh=Cb(Ab),jb=Sb(eh),Eb=n=>(n*=2)<1?.5*eh(n):.5*(2-Math.pow(2,-10*(n-1))),th=n=>1-Math.sin(Math.acos(n)),Tb=Cb(th),zb=Sb(th),kb=n=>/^0[^.\s]+$/u.test(n);function y8(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||kb(n):!0}const ks=n=>Math.round(n*1e5)/1e5,nh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function w8(n){return n==null}const S8=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ah=(n,i)=>o=>!!(typeof o=="string"&&S8.test(o)&&o.startsWith(n)||i&&!w8(o)&&Object.prototype.hasOwnProperty.call(o,i)),Rb=(n,i,o)=>s=>{if(typeof s!="string")return s;const[c,u,f,h]=s.match(nh);return{[n]:parseFloat(c),[i]:parseFloat(u),[o]:parseFloat(f),alpha:h!==void 0?parseFloat(h):1}},C8=n=>fi(0,255,n),yf={...jo,transform:n=>Math.round(C8(n))},wr={test:ah("rgb","red"),parse:Rb("red","green","blue"),transform:({red:n,green:i,blue:o,alpha:s=1})=>"rgba("+yf.transform(n)+", "+yf.transform(i)+", "+yf.transform(o)+", "+ks(Us.transform(s))+")"};function A8(n){let i="",o="",s="",c="";return n.length>5?(i=n.substring(1,3),o=n.substring(3,5),s=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),o=n.substring(2,3),s=n.substring(3,4),c=n.substring(4,5),i+=i,o+=o,s+=s,c+=c),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const a0={test:ah("#"),parse:A8,transform:wr.transform},so={test:ah("hsl","hue"),parse:Rb("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:o,alpha:s=1})=>"hsla("+Math.round(n)+", "+Pa.transform(ks(i))+", "+Pa.transform(ks(o))+", "+ks(Us.transform(s))+")"},kn={test:n=>wr.test(n)||a0.test(n)||so.test(n),parse:n=>wr.test(n)?wr.parse(n):so.test(n)?so.parse(n):a0.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?wr.transform(n):so.transform(n)},j8=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function E8(n){var i,o;return isNaN(n)&&typeof n=="string"&&(((i=n.match(nh))===null||i===void 0?void 0:i.length)||0)+(((o=n.match(j8))===null||o===void 0?void 0:o.length)||0)>0}const Mb="number",Db="color",T8="var",z8="var(",S1="${}",k8=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function qs(n){const i=n.toString(),o=[],s={color:[],number:[],var:[]},c=[];let u=0;const h=i.replace(k8,p=>(kn.test(p)?(s.color.push(u),c.push(Db),o.push(kn.parse(p))):p.startsWith(z8)?(s.var.push(u),c.push(T8),o.push(p)):(s.number.push(u),c.push(Mb),o.push(parseFloat(p))),++u,S1)).split(S1);return{values:o,split:h,indexes:s,types:c}}function Ob(n){return qs(n).values}function Bb(n){const{split:i,types:o}=qs(n),s=i.length;return c=>{let u="";for(let f=0;f<s;f++)if(u+=i[f],c[f]!==void 0){const h=o[f];h===Mb?u+=ks(c[f]):h===Db?u+=kn.transform(c[f]):u+=c[f]}return u}}const R8=n=>typeof n=="number"?0:n;function M8(n){const i=Ob(n);return Bb(n)(i.map(R8))}const Fi={test:E8,parse:Ob,createTransformer:Bb,getAnimatableNone:M8},D8=new Set(["brightness","contrast","saturate","opacity"]);function O8(n){const[i,o]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[s]=o.match(nh)||[];if(!s)return n;const c=o.replace(s,"");let u=D8.has(i)?1:0;return s!==o&&(u*=100),i+"("+u+c+")"}const B8=/\b([a-z-]*)\(.*?\)/gu,i0={...Fi,getAnimatableNone:n=>{const i=n.match(B8);return i?i.map(O8).join(" "):n}},L8={...X0,color:kn,backgroundColor:kn,outlineColor:kn,fill:kn,stroke:kn,borderColor:kn,borderTopColor:kn,borderRightColor:kn,borderBottomColor:kn,borderLeftColor:kn,filter:i0,WebkitFilter:i0},Lb=n=>L8[n];function Nb(n,i){let o=Lb(n);return o!==i0&&(o=Fi),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const N8=new Set(["auto","none","0"]);function $8(n,i,o){let s=0,c;for(;s<n.length&&!c;){const u=n[s];typeof u=="string"&&!N8.has(u)&&qs(u).values.length&&(c=n[s]),s++}if(c&&o)for(const u of i)n[u]=Nb(o,c)}const Sr=n=>n*180/Math.PI,r0=n=>{const i=Sr(Math.atan2(n[1],n[0]));return o0(i)},P8={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:r0,rotateZ:r0,skewX:n=>Sr(Math.atan(n[1])),skewY:n=>Sr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},o0=n=>(n=n%360,n<0&&(n+=360),n),C1=r0,A1=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),j1=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),_8={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:A1,scaleY:j1,scale:n=>(A1(n)+j1(n))/2,rotateX:n=>o0(Sr(Math.atan2(n[6],n[5]))),rotateY:n=>o0(Sr(Math.atan2(-n[2],n[0]))),rotateZ:C1,rotate:C1,skewX:n=>Sr(Math.atan(n[4])),skewY:n=>Sr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function E1(n){return n.includes("scale")?1:0}function s0(n,i){if(!n||n==="none")return E1(i);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(o)s=_8,c=o;else{const h=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=P8,c=h}if(!c)return E1(i);const u=s[i],f=c[1].split(",").map(U8);return typeof u=="function"?u(f):f[u]}const V8=(n,i)=>{const{transform:o="none"}=getComputedStyle(n);return s0(o,i)};function U8(n){return parseFloat(n.trim())}const T1=n=>n===jo||n===$e,H8=new Set(["x","y","z"]),q8=Ao.filter(n=>!H8.has(n));function G8(n){const i=[];return q8.forEach(o=>{const s=n.getValue(o);s!==void 0&&(i.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),i}const yo={width:({x:n},{paddingLeft:i="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),height:({y:n},{paddingTop:i="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>s0(i,"x"),y:(n,{transform:i})=>s0(i,"y")};yo.translateX=yo.x;yo.translateY=yo.y;const jr=new Set;let l0=!1,c0=!1;function $b(){if(c0){const n=Array.from(jr).filter(s=>s.needsMeasurement),i=new Set(n.map(s=>s.element)),o=new Map;i.forEach(s=>{const c=G8(s);c.length&&(o.set(s,c),s.render())}),n.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const c=o.get(s);c&&c.forEach(([u,f])=>{var h;(h=s.getValue(u))===null||h===void 0||h.set(f)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}c0=!1,l0=!1,jr.forEach(n=>n.complete()),jr.clear()}function Pb(){jr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(c0=!0)})}function Y8(){Pb(),$b()}class ih{constructor(i,o,s,c,u,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=s,this.motionValue=c,this.element=u,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(jr.add(this),l0||(l0=!0,Rt.read(Pb),Rt.resolveKeyframes($b))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:s,motionValue:c}=this;for(let u=0;u<i.length;u++)if(i[u]===null)if(u===0){const f=c==null?void 0:c.get(),h=i[i.length-1];if(f!==void 0)i[0]=f;else if(s&&o){const p=s.readValue(o,h);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=h),c&&f===void 0&&c.set(i[0])}else i[u]=i[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),jr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,jr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _b=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),X8=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function F8(n){const i=X8.exec(n);if(!i)return[,];const[,o,s,c]=i;return[`--${o??s}`,c]}function Vb(n,i,o=1){const[s,c]=F8(n);if(!s)return;const u=window.getComputedStyle(i).getPropertyValue(s);if(u){const f=u.trim();return _b(f)?parseFloat(f):f}return Y0(c)?Vb(c,i,o+1):c}const Ub=n=>i=>i.test(n),Q8={test:n=>n==="auto",parse:n=>n},Hb=[jo,$e,Pa,Gi,YS,GS,Q8],z1=n=>Hb.find(Ub(n));class qb extends ih{constructor(i,o,s,c,u){super(i,o,s,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let g=i[p];if(typeof g=="string"&&(g=g.trim(),Y0(g))){const b=Vb(g,o.current);b!==void 0&&(i[p]=b),p===i.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!vb.has(s)||i.length!==2)return;const[c,u]=i,f=z1(c),h=z1(u);if(f!==h)if(T1(f)&&T1(h))for(let p=0;p<i.length;p++){const g=i[p];typeof g=="string"&&(i[p]=parseFloat(g))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,s=[];for(let c=0;c<i.length;c++)y8(i[c])&&s.push(c);s.length&&$8(i,s,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yo[s](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&i.getValue(s,c).jump(c,!1)}measureEndState(){var i;const{element:o,name:s,unresolvedKeyframes:c}=this;if(!o||!o.current)return;const u=o.getValue(s);u&&u.jump(this.measuredOrigin,!1);const f=c.length-1,h=c[f];c[f]=yo[s](o.measureViewportBox(),window.getComputedStyle(o.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([p,g])=>{o.getValue(p).set(g)}),this.resolveNoneKeyframes()}}const k1=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Fi.test(n)||n==="0")&&!n.startsWith("url("));function K8(n){const i=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==i)return!0}function Z8(n,i,o,s){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const u=n[n.length-1],f=k1(c,i),h=k1(u,i);return!f||!h?!1:K8(n)||(o==="spring"||$0(o))&&s}const I8=n=>n!==null;function au(n,{repeat:i,repeatType:o="loop"},s){const c=n.filter(I8),u=i&&o!=="loop"&&i%2===1?0:c.length-1;return!u||s===void 0?c[u]:s}const J8=40;class Gb{constructor({autoplay:i=!0,delay:o=0,type:s="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:f="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=$a.now(),this.options={autoplay:i,delay:o,type:s,repeat:c,repeatDelay:u,repeatType:f,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>J8?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Y8(),this._resolved}onKeyframesResolved(i,o){this.resolvedAt=$a.now(),this.hasAttemptedResolve=!0;const{name:s,type:c,velocity:u,delay:f,onComplete:h,onUpdate:p,isGenerator:g}=this.options;if(!g&&!Z8(i,s,c,u))if(f)this.options.duration=0;else{p&&p(au(i,this.options,o)),h&&h(),this.resolveFinishedPromise();return}const b=this.initPlayback(i,o);b!==!1&&(this._resolved={keyframes:i,finalKeyframe:o,...b},this.onPostResolved())}onPostResolved(){}then(i,o){return this.currentFinishedPromise.then(i,o)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Vt=(n,i,o)=>n+(i-n)*o;function wf(n,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(i-n)*6*o:o<1/2?i:o<2/3?n+(i-n)*(2/3-o)*6:n}function W8({hue:n,saturation:i,lightness:o,alpha:s}){n/=360,i/=100,o/=100;let c=0,u=0,f=0;if(!i)c=u=f=o;else{const h=o<.5?o*(1+i):o+i-o*i,p=2*o-h;c=wf(p,h,n+1/3),u=wf(p,h,n),f=wf(p,h,n-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:s}}function Nc(n,i){return o=>o>0?i:n}const Sf=(n,i,o)=>{const s=n*n,c=o*(i*i-s)+s;return c<0?0:Math.sqrt(c)},eC=[a0,wr,so],tC=n=>eC.find(i=>i.test(n));function R1(n){const i=tC(n);if(!i)return!1;let o=i.parse(n);return i===so&&(o=W8(o)),o}const M1=(n,i)=>{const o=R1(n),s=R1(i);if(!o||!s)return Nc(n,i);const c={...o};return u=>(c.red=Sf(o.red,s.red,u),c.green=Sf(o.green,s.green,u),c.blue=Sf(o.blue,s.blue,u),c.alpha=Vt(o.alpha,s.alpha,u),wr.transform(c))},nC=(n,i)=>o=>i(n(o)),nl=(...n)=>n.reduce(nC),u0=new Set(["none","hidden"]);function aC(n,i){return u0.has(n)?o=>o<=0?n:i:o=>o>=1?i:n}function iC(n,i){return o=>Vt(n,i,o)}function rh(n){return typeof n=="number"?iC:typeof n=="string"?Y0(n)?Nc:kn.test(n)?M1:sC:Array.isArray(n)?Yb:typeof n=="object"?kn.test(n)?M1:rC:Nc}function Yb(n,i){const o=[...n],s=o.length,c=n.map((u,f)=>rh(u)(u,i[f]));return u=>{for(let f=0;f<s;f++)o[f]=c[f](u);return o}}function rC(n,i){const o={...n,...i},s={};for(const c in o)n[c]!==void 0&&i[c]!==void 0&&(s[c]=rh(n[c])(n[c],i[c]));return c=>{for(const u in s)o[u]=s[u](c);return o}}function oC(n,i){var o;const s=[],c={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const f=i.types[u],h=n.indexes[f][c[f]],p=(o=n.values[h])!==null&&o!==void 0?o:0;s[u]=p,c[f]++}return s}const sC=(n,i)=>{const o=Fi.createTransformer(i),s=qs(n),c=qs(i);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?u0.has(n)&&!c.values.length||u0.has(i)&&!s.values.length?aC(n,i):nl(Yb(oC(s,c),c.values),o):Nc(n,i)};function Xb(n,i,o){return typeof n=="number"&&typeof i=="number"&&typeof o=="number"?Vt(n,i,o):rh(n)(n,i)}const lC=5;function Fb(n,i,o){const s=Math.max(i-lC,0);return F2(o-n(s),i-s)}const Jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},D1=.001;function cC({duration:n=Jt.duration,bounce:i=Jt.bounce,velocity:o=Jt.velocity,mass:s=Jt.mass}){let c,u,f=1-i;f=fi(Jt.minDamping,Jt.maxDamping,f),n=fi(Jt.minDuration,Jt.maxDuration,ci(n)),f<1?(c=g=>{const b=g*f,v=b*n,w=b-o,C=d0(g,f),E=Math.exp(-v);return D1-w/C*E},u=g=>{const v=g*f*n,w=v*o+o,C=Math.pow(f,2)*Math.pow(g,2)*n,E=Math.exp(-v),O=d0(Math.pow(g,2),f);return(-c(g)+D1>0?-1:1)*((w-C)*E)/O}):(c=g=>{const b=Math.exp(-g*n),v=(g-o)*n+1;return-.001+b*v},u=g=>{const b=Math.exp(-g*n),v=(o-g)*(n*n);return b*v});const h=5/n,p=dC(c,u,h);if(n=li(n),isNaN(p))return{stiffness:Jt.stiffness,damping:Jt.damping,duration:n};{const g=Math.pow(p,2)*s;return{stiffness:g,damping:f*2*Math.sqrt(s*g),duration:n}}}const uC=12;function dC(n,i,o){let s=o;for(let c=1;c<uC;c++)s=s-n(s)/i(s);return s}function d0(n,i){return n*Math.sqrt(1-i*i)}const fC=["duration","bounce"],hC=["stiffness","damping","mass"];function O1(n,i){return i.some(o=>n[o]!==void 0)}function pC(n){let i={velocity:Jt.velocity,stiffness:Jt.stiffness,damping:Jt.damping,mass:Jt.mass,isResolvedFromDuration:!1,...n};if(!O1(n,hC)&&O1(n,fC))if(n.visualDuration){const o=n.visualDuration,s=2*Math.PI/(o*1.2),c=s*s,u=2*fi(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:Jt.mass,stiffness:c,damping:u}}else{const o=cC(n);i={...i,...o,mass:Jt.mass},i.isResolvedFromDuration=!0}return i}function Qb(n=Jt.visualDuration,i=Jt.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:s,restDelta:c}=o;const u=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],h={done:!1,value:u},{stiffness:p,damping:g,mass:b,duration:v,velocity:w,isResolvedFromDuration:C}=pC({...o,velocity:-ci(o.velocity||0)}),E=w||0,O=g/(2*Math.sqrt(p*b)),B=f-u,A=ci(Math.sqrt(p/b)),R=Math.abs(B)<5;s||(s=R?Jt.restSpeed.granular:Jt.restSpeed.default),c||(c=R?Jt.restDelta.granular:Jt.restDelta.default);let T;if(O<1){const D=d0(A,O);T=G=>{const Z=Math.exp(-O*A*G);return f-Z*((E+O*A*B)/D*Math.sin(D*G)+B*Math.cos(D*G))}}else if(O===1)T=D=>f-Math.exp(-A*D)*(B+(E+A*B)*D);else{const D=A*Math.sqrt(O*O-1);T=G=>{const Z=Math.exp(-O*A*G),ae=Math.min(D*G,300);return f-Z*((E+O*A*B)*Math.sinh(ae)+D*B*Math.cosh(ae))/D}}const N={calculatedDuration:C&&v||null,next:D=>{const G=T(D);if(C)h.done=D>=v;else{let Z=0;O<1&&(Z=D===0?li(E):Fb(T,D,G));const ae=Math.abs(Z)<=s,Q=Math.abs(f-G)<=c;h.done=ae&&Q}return h.value=h.done?f:G,h},toString:()=>{const D=Math.min(Q2(N),Wf),G=K2(Z=>N.next(D*Z).value,D,30);return D+"ms "+G}};return N}function B1({keyframes:n,velocity:i=0,power:o=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:f,min:h,max:p,restDelta:g=.5,restSpeed:b}){const v=n[0],w={done:!1,value:v},C=ae=>h!==void 0&&ae<h||p!==void 0&&ae>p,E=ae=>h===void 0?p:p===void 0||Math.abs(h-ae)<Math.abs(p-ae)?h:p;let O=o*i;const B=v+O,A=f===void 0?B:f(B);A!==B&&(O=A-v);const R=ae=>-O*Math.exp(-ae/s),T=ae=>A+R(ae),N=ae=>{const Q=R(ae),de=T(ae);w.done=Math.abs(Q)<=g,w.value=w.done?A:de};let D,G;const Z=ae=>{C(w.value)&&(D=ae,G=Qb({keyframes:[w.value,E(w.value)],velocity:Fb(T,ae,w.value),damping:c,stiffness:u,restDelta:g,restSpeed:b}))};return Z(0),{calculatedDuration:null,next:ae=>{let Q=!1;return!G&&D===void 0&&(Q=!0,N(ae),Z(ae)),D!==void 0&&ae>=D?G.next(ae-D):(!Q&&N(ae),w)}}}const mC=tl(.42,0,1,1),gC=tl(0,0,.58,1),Kb=tl(.42,0,.58,1),xC=n=>Array.isArray(n)&&typeof n[0]!="number",bC={linear:In,easeIn:mC,easeInOut:Kb,easeOut:gC,circIn:th,circInOut:zb,circOut:Tb,backIn:eh,backInOut:jb,backOut:Ab,anticipate:Eb},L1=n=>{if(P0(n)){X2(n.length===4);const[i,o,s,c]=n;return tl(i,o,s,c)}else if(typeof n=="string")return bC[n];return n};function vC(n,i,o){const s=[],c=o||Xb,u=n.length-1;for(let f=0;f<u;f++){let h=c(n[f],n[f+1]);if(i){const p=Array.isArray(i)?i[f]||In:i;h=nl(p,h)}s.push(h)}return s}function yC(n,i,{clamp:o=!0,ease:s,mixer:c}={}){const u=n.length;if(X2(u===i.length),u===1)return()=>i[0];if(u===2&&i[0]===i[1])return()=>i[1];const f=n[0]===n[1];n[0]>n[u-1]&&(n=[...n].reverse(),i=[...i].reverse());const h=vC(i,s,c),p=h.length,g=b=>{if(f&&b<n[0])return i[0];let v=0;if(p>1)for(;v<n.length-2&&!(b<n[v+1]);v++);const w=bo(n[v],n[v+1],b);return h[v](w)};return o?b=>g(fi(n[0],n[u-1],b)):g}function wC(n,i){const o=n[n.length-1];for(let s=1;s<=i;s++){const c=bo(0,i,s);n.push(Vt(o,1,c))}}function SC(n){const i=[0];return wC(i,n.length-1),i}function CC(n,i){return n.map(o=>o*i)}function AC(n,i){return n.map(()=>i||Kb).splice(0,n.length-1)}function $c({duration:n=300,keyframes:i,times:o,ease:s="easeInOut"}){const c=xC(s)?s.map(L1):L1(s),u={done:!1,value:i[0]},f=CC(o&&o.length===i.length?o:SC(i),n),h=yC(f,i,{ease:Array.isArray(c)?c:AC(i,c)});return{calculatedDuration:n,next:p=>(u.value=h(p),u.done=p>=n,u)}}const jC=n=>{const i=({timestamp:o})=>n(o);return{start:()=>Rt.update(i,!0),stop:()=>Xi(i),now:()=>Cn.isProcessing?Cn.timestamp:$a.now()}},EC={decay:B1,inertia:B1,tween:$c,keyframes:$c,spring:Qb},TC=n=>n/100;class oh extends Gb{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:o,motionValue:s,element:c,keyframes:u}=this.options,f=(c==null?void 0:c.KeyframeResolver)||ih,h=(p,g)=>this.onKeyframesResolved(p,g);this.resolver=new f(u,h,o,s,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:o="keyframes",repeat:s=0,repeatDelay:c=0,repeatType:u,velocity:f=0}=this.options,h=$0(o)?o:EC[o]||$c;let p,g;h!==$c&&typeof i[0]!="number"&&(p=nl(TC,Xb(i[0],i[1])),i=[0,100]);const b=h({...this.options,keyframes:i});u==="mirror"&&(g=h({...this.options,keyframes:[...i].reverse(),velocity:-f})),b.calculatedDuration===null&&(b.calculatedDuration=Q2(b));const{calculatedDuration:v}=b,w=v+c,C=w*(s+1)-c;return{generator:b,mirroredGenerator:g,mapPercentToKeyframes:p,calculatedDuration:v,resolvedDuration:w,totalDuration:C}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,o=!1){const{resolved:s}=this;if(!s){const{keyframes:ae}=this.options;return{done:!0,value:ae[ae.length-1]}}const{finalKeyframe:c,generator:u,mirroredGenerator:f,mapPercentToKeyframes:h,keyframes:p,calculatedDuration:g,totalDuration:b,resolvedDuration:v}=s;if(this.startTime===null)return u.next(0);const{delay:w,repeat:C,repeatType:E,repeatDelay:O,onUpdate:B}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-b/this.speed,this.startTime)),o?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const A=this.currentTime-w*(this.speed>=0?1:-1),R=this.speed>=0?A<0:A>b;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=b);let T=this.currentTime,N=u;if(C){const ae=Math.min(this.currentTime,b)/v;let Q=Math.floor(ae),de=ae%1;!de&&ae>=1&&(de=1),de===1&&Q--,Q=Math.min(Q,C+1),!!(Q%2)&&(E==="reverse"?(de=1-de,O&&(de-=O/v)):E==="mirror"&&(N=f)),T=fi(0,1,de)*v}const D=R?{done:!1,value:p[0]}:N.next(T);h&&(D.value=h(D.value));let{done:G}=D;!R&&g!==null&&(G=this.speed>=0?this.currentTime>=b:this.currentTime<=0);const Z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&G);return Z&&c!==void 0&&(D.value=au(p,this.options,c)),B&&B(D.value),Z&&this.finish(),D}get duration(){const{resolved:i}=this;return i?ci(i.calculatedDuration):0}get time(){return ci(this.currentTime)}set time(i){i=li(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=ci(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=jC,onPlay:o,startTime:s}=this.options;this.driver||(this.driver=i(u=>this.tick(u))),o&&o();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const zC=new Set(["opacity","clipPath","filter","transform"]);function kC(n,i,o,{delay:s=0,duration:c=300,repeat:u=0,repeatType:f="loop",ease:h="easeInOut",times:p}={}){const g={[i]:o};p&&(g.offset=p);const b=I2(h,c);return Array.isArray(b)&&(g.easing=b),n.animate(g,{delay:s,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"})}const RC=B0(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Pc=10,MC=2e4;function DC(n){return $0(n.type)||n.type==="spring"||!Z2(n.ease)}function OC(n,i){const o=new oh({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:n[0]};const c=[];let u=0;for(;!s.done&&u<MC;)s=o.sample(u),c.push(s.value),u+=Pc;return{times:void 0,keyframes:c,duration:u-Pc,ease:"linear"}}const Zb={anticipate:Eb,backInOut:jb,circInOut:zb};function BC(n){return n in Zb}class N1 extends Gb{constructor(i){super(i);const{name:o,motionValue:s,element:c,keyframes:u}=this.options;this.resolver=new qb(u,(f,h)=>this.onKeyframesResolved(f,h),o,s,c),this.resolver.scheduleResolve()}initPlayback(i,o){let{duration:s=300,times:c,ease:u,type:f,motionValue:h,name:p,startTime:g}=this.options;if(!h.owner||!h.owner.current)return!1;if(typeof u=="string"&&Bc()&&BC(u)&&(u=Zb[u]),DC(this.options)){const{onComplete:v,onUpdate:w,motionValue:C,element:E,...O}=this.options,B=OC(i,O);i=B.keyframes,i.length===1&&(i[1]=i[0]),s=B.duration,c=B.times,u=B.ease,f="keyframes"}const b=kC(h.owner.current,p,i,{...this.options,duration:s,times:c,ease:u});return b.startTime=g??this.calcStartTime(),this.pendingTimeline?(l1(b,this.pendingTimeline),this.pendingTimeline=void 0):b.onfinish=()=>{const{onComplete:v}=this.options;h.set(au(i,this.options,o)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:b,duration:s,times:c,type:f,ease:u,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:o}=i;return ci(o)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:o}=i;return ci(o.currentTime||0)}set time(i){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.currentTime=li(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:o}=i;return o.playbackRate}set speed(i){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:o}=i;return o.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:o}=i;return o.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:o}=this;if(!o)return In;const{animation:s}=o;l1(s,i)}return In}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:o,keyframes:s,duration:c,type:u,ease:f,times:h}=i;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:g,onUpdate:b,onComplete:v,element:w,...C}=this.options,E=new oh({...C,keyframes:s,duration:c,type:u,ease:f,times:h,isGenerator:!0}),O=li(this.time);g.setWithVelocity(E.sample(O-Pc).value,E.sample(O).value,Pc)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:o,name:s,repeatDelay:c,repeatType:u,damping:f,type:h}=i;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=o.owner.getProps();return RC()&&s&&zC.has(s)&&!p&&!g&&!c&&u!=="mirror"&&f!==0&&h!=="inertia"}}const LC={type:"spring",stiffness:500,damping:25,restSpeed:10},NC=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),$C={type:"keyframes",duration:.8},PC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_C=(n,{keyframes:i})=>i.length>2?$C:Tr.has(n)?n.startsWith("scale")?NC(i[1]):LC:PC;function VC({when:n,delay:i,delayChildren:o,staggerChildren:s,staggerDirection:c,repeat:u,repeatType:f,repeatDelay:h,from:p,elapsed:g,...b}){return!!Object.keys(b).length}const sh=(n,i,o,s={},c,u)=>f=>{const h=N0(s,n)||{},p=h.delay||s.delay||0;let{elapsed:g=0}=s;g=g-li(p);let b={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...h,delay:-g,onUpdate:w=>{i.set(w),h.onUpdate&&h.onUpdate(w)},onComplete:()=>{f(),h.onComplete&&h.onComplete()},name:n,motionValue:i,element:u?void 0:c};VC(h)||(b={...b,..._C(n,b)}),b.duration&&(b.duration=li(b.duration)),b.repeatDelay&&(b.repeatDelay=li(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let v=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(b.duration=0,b.delay===0&&(v=!0)),b.allowFlatten=!h.type&&!h.ease,v&&!u&&i.get()!==void 0){const w=au(b.keyframes,h);if(w!==void 0)return Rt.update(()=>{b.onUpdate(w),b.onComplete()}),new cS([])}return!u&&N1.supports(b)?new N1(b):new oh(b)};function UC({protectedKeys:n,needsAnimating:i},o){const s=n.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,s}function Ib(n,i,{delay:o=0,transitionOverride:s,type:c}={}){var u;let{transition:f=n.getDefaultTransition(),transitionEnd:h,...p}=i;s&&(f=s);const g=[],b=c&&n.animationState&&n.animationState.getState()[c];for(const v in p){const w=n.getValue(v,(u=n.latestValues[v])!==null&&u!==void 0?u:null),C=p[v];if(C===void 0||b&&UC(b,v))continue;const E={delay:o,...N0(f||{},v)};let O=!1;if(window.MotionHandoffAnimation){const A=yb(n);if(A){const R=window.MotionHandoffAnimation(A,v,Rt);R!==null&&(E.startTime=R,O=!0)}}n0(n,v),w.start(sh(v,w,C,n.shouldReduceMotion&&vb.has(v)?{type:!1}:E,n,O));const B=w.animation;B&&g.push(B)}return h&&Promise.all(g).then(()=>{Rt.update(()=>{h&&m8(n,h)})}),g}function f0(n,i,o={}){var s;const c=Hs(n,i,o.type==="exit"?(s=n.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=c||{};o.transitionOverride&&(u=o.transitionOverride);const f=c?()=>Promise.all(Ib(n,c,o)):()=>Promise.resolve(),h=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:b=0,staggerChildren:v,staggerDirection:w}=u;return HC(n,i,b+g,v,w,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[g,b]=p==="beforeChildren"?[f,h]:[h,f];return g().then(()=>b())}else return Promise.all([f(),h(o.delay)])}function HC(n,i,o=0,s=0,c=1,u){const f=[],h=(n.variantChildren.size-1)*s,p=c===1?(g=0)=>g*s:(g=0)=>h-g*s;return Array.from(n.variantChildren).sort(qC).forEach((g,b)=>{g.notify("AnimationStart",i),f.push(f0(g,i,{...u,delay:o+p(b)}).then(()=>g.notify("AnimationComplete",i)))}),Promise.all(f)}function qC(n,i){return n.sortNodePosition(i)}function GC(n,i,o={}){n.notify("AnimationStart",i);let s;if(Array.isArray(i)){const c=i.map(u=>f0(n,u,o));s=Promise.all(c)}else if(typeof i=="string")s=f0(n,i,o);else{const c=typeof i=="function"?Hs(n,i,o.custom):i;s=Promise.all(Ib(n,c,o))}return s.then(()=>{n.notify("AnimationComplete",i)})}function Jb(n,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==n.length)return!1;for(let s=0;s<o;s++)if(i[s]!==n[s])return!1;return!0}const YC=H0.length;function Wb(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?Wb(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const i={};for(let o=0;o<YC;o++){const s=H0[o],c=n.props[s];(_s(c)||c===!1)&&(i[s]=c)}return i}const XC=[...U0].reverse(),FC=U0.length;function QC(n){return i=>Promise.all(i.map(({animation:o,options:s})=>GC(n,o,s)))}function KC(n){let i=QC(n),o=$1(),s=!0;const c=p=>(g,b)=>{var v;const w=Hs(n,b,p==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(w){const{transition:C,transitionEnd:E,...O}=w;g={...g,...O,...E}}return g};function u(p){i=p(n)}function f(p){const{props:g}=n,b=Wb(n.parent)||{},v=[],w=new Set;let C={},E=1/0;for(let B=0;B<FC;B++){const A=XC[B],R=o[A],T=g[A]!==void 0?g[A]:b[A],N=_s(T),D=A===p?R.isActive:null;D===!1&&(E=B);let G=T===b[A]&&T!==g[A]&&N;if(G&&s&&n.manuallyAnimateOnMount&&(G=!1),R.protectedKeys={...C},!R.isActive&&D===null||!T&&!R.prevProp||tu(T)||typeof T=="boolean")continue;const Z=ZC(R.prevProp,T);let ae=Z||A===p&&R.isActive&&!G&&N||B>E&&N,Q=!1;const de=Array.isArray(T)?T:[T];let X=de.reduce(c(A),{});D===!1&&(X={});const{prevResolvedValues:Pe={}}=R,rt={...Pe,...X},Y=I=>{ae=!0,w.has(I)&&(Q=!0,w.delete(I)),R.needsAnimating[I]=!0;const re=n.getValue(I);re&&(re.liveStyle=!1)};for(const I in rt){const re=X[I],xe=Pe[I];if(C.hasOwnProperty(I))continue;let M=!1;t0(re)&&t0(xe)?M=!Jb(re,xe):M=re!==xe,M?re!=null?Y(I):w.add(I):re!==void 0&&w.has(I)?Y(I):R.protectedKeys[I]=!0}R.prevProp=T,R.prevResolvedValues=X,R.isActive&&(C={...C,...X}),s&&n.blockInitialAnimation&&(ae=!1),ae&&(!(G&&Z)||Q)&&v.push(...de.map(I=>({animation:I,options:{type:A}})))}if(w.size){const B={};if(typeof g.initial!="boolean"){const A=Hs(n,Array.isArray(g.initial)?g.initial[0]:g.initial);A&&A.transition&&(B.transition=A.transition)}w.forEach(A=>{const R=n.getBaseTarget(A),T=n.getValue(A);T&&(T.liveStyle=!0),B[A]=R??null}),v.push({animation:B})}let O=!!v.length;return s&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(O=!1),s=!1,O?i(v):Promise.resolve()}function h(p,g){var b;if(o[p].isActive===g)return Promise.resolve();(b=n.variantChildren)===null||b===void 0||b.forEach(w=>{var C;return(C=w.animationState)===null||C===void 0?void 0:C.setActive(p,g)}),o[p].isActive=g;const v=f(p);for(const w in o)o[w].protectedKeys={};return v}return{animateChanges:f,setActive:h,setAnimateFunction:u,getState:()=>o,reset:()=>{o=$1(),s=!0}}}function ZC(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Jb(i,n):!1}function xr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $1(){return{animate:xr(!0),whileInView:xr(),whileHover:xr(),whileTap:xr(),whileDrag:xr(),whileFocus:xr(),exit:xr()}}class Qi{constructor(i){this.isMounted=!1,this.node=i}update(){}}class IC extends Qi{constructor(i){super(i),i.animationState||(i.animationState=KC(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();tu(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let JC=0;class WC extends Qi{constructor(){super(...arguments),this.id=JC++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const c=this.node.animationState.setActive("exit",!i);o&&!i&&c.then(()=>{o(this.id)})}mount(){const{register:i,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const e7={animation:{Feature:IC},exit:{Feature:WC}};function Gs(n,i,o,s={passive:!0}){return n.addEventListener(i,o,s),()=>n.removeEventListener(i,o)}function al(n){return{point:{x:n.pageX,y:n.pageY}}}const t7=n=>i=>V0(i)&&n(i,al(i));function Rs(n,i,o,s){return Gs(n,i,t7(o),s)}function ev({top:n,left:i,right:o,bottom:s}){return{x:{min:i,max:o},y:{min:n,max:s}}}function n7({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function a7(n,i){if(!i)return n;const o=i({x:n.left,y:n.top}),s=i({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}const tv=1e-4,i7=1-tv,r7=1+tv,nv=.01,o7=0-nv,s7=0+nv;function On(n){return n.max-n.min}function l7(n,i,o){return Math.abs(n-i)<=o}function P1(n,i,o,s=.5){n.origin=s,n.originPoint=Vt(i.min,i.max,n.origin),n.scale=On(o)/On(i),n.translate=Vt(o.min,o.max,n.origin)-n.originPoint,(n.scale>=i7&&n.scale<=r7||isNaN(n.scale))&&(n.scale=1),(n.translate>=o7&&n.translate<=s7||isNaN(n.translate))&&(n.translate=0)}function Ms(n,i,o,s){P1(n.x,i.x,o.x,s?s.originX:void 0),P1(n.y,i.y,o.y,s?s.originY:void 0)}function _1(n,i,o){n.min=o.min+i.min,n.max=n.min+On(i)}function c7(n,i,o){_1(n.x,i.x,o.x),_1(n.y,i.y,o.y)}function V1(n,i,o){n.min=i.min-o.min,n.max=n.min+On(i)}function Ds(n,i,o){V1(n.x,i.x,o.x),V1(n.y,i.y,o.y)}const U1=()=>({translate:0,scale:1,origin:0,originPoint:0}),lo=()=>({x:U1(),y:U1()}),H1=()=>({min:0,max:0}),rn=()=>({x:H1(),y:H1()});function pa(n){return[n("x"),n("y")]}function Cf(n){return n===void 0||n===1}function h0({scale:n,scaleX:i,scaleY:o}){return!Cf(n)||!Cf(i)||!Cf(o)}function br(n){return h0(n)||av(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function av(n){return q1(n.x)||q1(n.y)}function q1(n){return n&&n!=="0%"}function _c(n,i,o){const s=n-o,c=i*s;return o+c}function G1(n,i,o,s,c){return c!==void 0&&(n=_c(n,c,s)),_c(n,o,s)+i}function p0(n,i=0,o=1,s,c){n.min=G1(n.min,i,o,s,c),n.max=G1(n.max,i,o,s,c)}function iv(n,{x:i,y:o}){p0(n.x,i.translate,i.scale,i.originPoint),p0(n.y,o.translate,o.scale,o.originPoint)}const Y1=.999999999999,X1=1.0000000000001;function u7(n,i,o,s=!1){const c=o.length;if(!c)return;i.x=i.y=1;let u,f;for(let h=0;h<c;h++){u=o[h],f=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&uo(n,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(i.x*=f.x.scale,i.y*=f.y.scale,iv(n,f)),s&&br(u.latestValues)&&uo(n,u.latestValues))}i.x<X1&&i.x>Y1&&(i.x=1),i.y<X1&&i.y>Y1&&(i.y=1)}function co(n,i){n.min=n.min+i,n.max=n.max+i}function F1(n,i,o,s,c=.5){const u=Vt(n.min,n.max,c);p0(n,i,o,u,s)}function uo(n,i){F1(n.x,i.x,i.scaleX,i.scale,i.originX),F1(n.y,i.y,i.scaleY,i.scale,i.originY)}function rv(n,i){return ev(a7(n.getBoundingClientRect(),i))}function d7(n,i,o){const s=rv(n,o),{scroll:c}=i;return c&&(co(s.x,c.offset.x),co(s.y,c.offset.y)),s}const ov=({current:n})=>n?n.ownerDocument.defaultView:null,Q1=(n,i)=>Math.abs(n-i);function f7(n,i){const o=Q1(n.x,i.x),s=Q1(n.y,i.y);return Math.sqrt(o**2+s**2)}class sv{constructor(i,o,{transformPagePoint:s,contextWindow:c,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=jf(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,C=f7(v.offset,{x:0,y:0})>=3;if(!w&&!C)return;const{point:E}=v,{timestamp:O}=Cn;this.history.push({...E,timestamp:O});const{onStart:B,onMove:A}=this.handlers;w||(B&&B(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,v)},this.handlePointerMove=(v,w)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Af(w,this.transformPagePoint),Rt.update(this.updatePoint,!0)},this.handlePointerUp=(v,w)=>{this.end();const{onEnd:C,onSessionEnd:E,resumeAnimation:O}=this.handlers;if(this.dragSnapToOrigin&&O&&O(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=jf(v.type==="pointercancel"?this.lastMoveEventInfo:Af(w,this.transformPagePoint),this.history);this.startEvent&&C&&C(v,B),E&&E(v,B)},!V0(i))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=s,this.contextWindow=c||window;const f=al(i),h=Af(f,this.transformPagePoint),{point:p}=h,{timestamp:g}=Cn;this.history=[{...p,timestamp:g}];const{onSessionStart:b}=o;b&&b(i,jf(h,this.history)),this.removeListeners=nl(Rs(this.contextWindow,"pointermove",this.handlePointerMove),Rs(this.contextWindow,"pointerup",this.handlePointerUp),Rs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Xi(this.updatePoint)}}function Af(n,i){return i?{point:i(n.point)}:n}function K1(n,i){return{x:n.x-i.x,y:n.y-i.y}}function jf({point:n},i){return{point:n,delta:K1(n,lv(i)),offset:K1(n,h7(i)),velocity:p7(i,.1)}}function h7(n){return n[0]}function lv(n){return n[n.length-1]}function p7(n,i){if(n.length<2)return{x:0,y:0};let o=n.length-1,s=null;const c=lv(n);for(;o>=0&&(s=n[o],!(c.timestamp-s.timestamp>li(i)));)o--;if(!s)return{x:0,y:0};const u=ci(c.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const f={x:(c.x-s.x)/u,y:(c.y-s.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function m7(n,{min:i,max:o},s){return i!==void 0&&n<i?n=s?Vt(i,n,s.min):Math.max(n,i):o!==void 0&&n>o&&(n=s?Vt(o,n,s.max):Math.min(n,o)),n}function Z1(n,i,o){return{min:i!==void 0?n.min+i:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function g7(n,{top:i,left:o,bottom:s,right:c}){return{x:Z1(n.x,o,c),y:Z1(n.y,i,s)}}function I1(n,i){let o=i.min-n.min,s=i.max-n.max;return i.max-i.min<n.max-n.min&&([o,s]=[s,o]),{min:o,max:s}}function x7(n,i){return{x:I1(n.x,i.x),y:I1(n.y,i.y)}}function b7(n,i){let o=.5;const s=On(n),c=On(i);return c>s?o=bo(i.min,i.max-s,n.min):s>c&&(o=bo(n.min,n.max-c,i.min)),fi(0,1,o)}function v7(n,i){const o={};return i.min!==void 0&&(o.min=i.min-n.min),i.max!==void 0&&(o.max=i.max-n.min),o}const m0=.35;function y7(n=m0){return n===!1?n=0:n===!0&&(n=m0),{x:J1(n,"left","right"),y:J1(n,"top","bottom")}}function J1(n,i,o){return{min:W1(n,i),max:W1(n,o)}}function W1(n,i){return typeof n=="number"?n:n[i]||0}const w7=new WeakMap;class S7{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rn(),this.visualElement=i}start(i,{snapToCursor:o=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const c=b=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(al(b).point)},u=(b,v)=>{const{drag:w,dragPropagation:C,onDragStart:E}=this.getProps();if(w&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=mS(w),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pa(B=>{let A=this.getAxisMotionValue(B).get()||0;if(Pa.test(A)){const{projection:R}=this.visualElement;if(R&&R.layout){const T=R.layout.layoutBox[B];T&&(A=On(T)*(parseFloat(A)/100))}}this.originPoint[B]=A}),E&&Rt.postRender(()=>E(b,v)),n0(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},f=(b,v)=>{const{dragPropagation:w,dragDirectionLock:C,onDirectionLock:E,onDrag:O}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:B}=v;if(C&&this.currentDirection===null){this.currentDirection=C7(B),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",v.point,B),this.updateAxis("y",v.point,B),this.visualElement.render(),O&&O(b,v)},h=(b,v)=>this.stop(b,v),p=()=>pa(b=>{var v;return this.getAnimationState(b)==="paused"&&((v=this.getAxisMotionValue(b).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new sv(i,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:ov(this.visualElement)})}stop(i,o){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&Rt.postRender(()=>u(i,o))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,s){const{drag:c}=this.getProps();if(!s||!fc(i,c,this.currentDirection))return;const u=this.getAxisMotionValue(i);let f=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(f=m7(f,this.constraints[i],this.elastic[i])),u.set(f)}resolveConstraints(){var i;const{dragConstraints:o,dragElastic:s}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,u=this.constraints;o&&oo(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&c?this.constraints=g7(c.layoutBox,o):this.constraints=!1,this.elastic=y7(s),u!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&pa(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=v7(c.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!oo(i))return!1;const s=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=d7(s,c.root,this.visualElement.getTransformPagePoint());let f=x7(c.layout.layoutBox,u);if(o){const h=o(n7(f));this.hasMutatedConstraints=!!h,h&&(f=ev(h))}return f}startAnimation(i){const{drag:o,dragMomentum:s,dragElastic:c,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=pa(b=>{if(!fc(b,o,this.currentDirection))return;let v=p&&p[b]||{};f&&(v={min:0,max:0});const w=c?200:1e6,C=c?40:1e7,E={type:"inertia",velocity:s?i[b]:0,bounceStiffness:w,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...u,...v};return this.startAxisValueAnimation(b,E)});return Promise.all(g).then(h)}startAxisValueAnimation(i,o){const s=this.getAxisMotionValue(i);return n0(this.visualElement,i),s.start(sh(i,s,0,o,this.visualElement,!1))}stopAnimation(){pa(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){pa(i=>{var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(i){var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),c=s[o];return c||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){pa(o=>{const{drag:s}=this.getProps();if(!fc(o,s,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(o);if(c&&c.layout){const{min:f,max:h}=c.layout.layoutBox[o];u.set(i[o]-Vt(f,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!oo(o)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};pa(f=>{const h=this.getAxisMotionValue(f);if(h&&this.constraints!==!1){const p=h.get();c[f]=b7({min:p,max:p},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),pa(f=>{if(!fc(f,i,null))return;const h=this.getAxisMotionValue(f),{min:p,max:g}=this.constraints[f];h.set(Vt(p,g,c[f]))})}addListeners(){if(!this.visualElement.current)return;w7.set(this.visualElement,this);const i=this.visualElement.current,o=Rs(i,"pointerdown",p=>{const{drag:g,dragListener:b=!0}=this.getProps();g&&b&&this.start(p)}),s=()=>{const{dragConstraints:p}=this.getProps();oo(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,u=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Rt.read(s);const f=Gs(window,"resize",()=>this.scalePositionWithinConstraints()),h=c.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(pa(b=>{const v=this.getAxisMotionValue(b);v&&(this.originPoint[b]+=p[b].translate,v.set(v.get()+p[b].translate))}),this.visualElement.render())});return()=>{f(),o(),u(),h&&h()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:f=m0,dragMomentum:h=!0}=i;return{...i,drag:o,dragDirectionLock:s,dragPropagation:c,dragConstraints:u,dragElastic:f,dragMomentum:h}}}function fc(n,i,o){return(i===!0||i===n)&&(o===null||o===n)}function C7(n,i=10){let o=null;return Math.abs(n.y)>i?o="y":Math.abs(n.x)>i&&(o="x"),o}class A7 extends Qi{constructor(i){super(i),this.removeGroupControls=In,this.removeListeners=In,this.controls=new S7(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||In}unmount(){this.removeGroupControls(),this.removeListeners()}}const ex=n=>(i,o)=>{n&&Rt.postRender(()=>n(i,o))};class j7 extends Qi{constructor(){super(...arguments),this.removePointerDownListener=In}onPointerDown(i){this.session=new sv(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ov(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:ex(i),onStart:ex(o),onMove:s,onEnd:(u,f)=>{delete this.session,c&&Rt.postRender(()=>c(u,f))}}}mount(){this.removePointerDownListener=Rs(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const jc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function tx(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const ws={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if($e.test(n))n=parseFloat(n);else return n;const o=tx(n,i.target.x),s=tx(n,i.target.y);return`${o}% ${s}%`}},E7={correct:(n,{treeScale:i,projectionDelta:o})=>{const s=n,c=Fi.parse(n);if(c.length>5)return s;const u=Fi.createTransformer(n),f=typeof c[0]!="number"?1:0,h=o.x.scale*i.x,p=o.y.scale*i.y;c[0+f]/=h,c[1+f]/=p;const g=Vt(h,p,.5);return typeof c[2+f]=="number"&&(c[2+f]/=g),typeof c[3+f]=="number"&&(c[3+f]/=g),u(c)}};class T7 extends j.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:s,layoutId:c}=this.props,{projection:u}=i;qS(z7),u&&(o.group&&o.group.add(u),s&&s.register&&c&&s.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),jc.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:s,drag:c,isPresent:u}=this.props,f=s.projection;return f&&(f.isPresent=u,c||i.layoutDependency!==o||o===void 0||i.isPresent!==u?f.willUpdate():this.safeToRemove(),i.isPresent!==u&&(u?f.promote():f.relegate()||Rt.postRender(()=>{const h=f.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),_0.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function cv(n){const[i,o]=Y2(),s=j.useContext(z0);return m.jsx(T7,{...n,layoutGroup:s,switchLayoutGroup:j.useContext(ob),isPresent:i,safeToRemove:o})}const z7={borderRadius:{...ws,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ws,borderTopRightRadius:ws,borderBottomLeftRadius:ws,borderBottomRightRadius:ws,boxShadow:E7};function k7(n,i,o){const s=Rn(n)?n:Ps(n);return s.start(sh("",s,i,o)),s.animation}function R7(n){return n instanceof SVGElement&&n.tagName!=="svg"}const M7=(n,i)=>n.depth-i.depth;class D7{constructor(){this.children=[],this.isDirty=!1}add(i){D0(this.children,i),this.isDirty=!0}remove(i){O0(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(M7),this.isDirty=!1,this.children.forEach(i)}}function O7(n,i){const o=$a.now(),s=({timestamp:c})=>{const u=c-o;u>=i&&(Xi(s),n(u-i))};return Rt.read(s,!0),()=>Xi(s)}const uv=["TopLeft","TopRight","BottomLeft","BottomRight"],B7=uv.length,nx=n=>typeof n=="string"?parseFloat(n):n,ax=n=>typeof n=="number"||$e.test(n);function L7(n,i,o,s,c,u){c?(n.opacity=Vt(0,o.opacity!==void 0?o.opacity:1,N7(s)),n.opacityExit=Vt(i.opacity!==void 0?i.opacity:1,0,$7(s))):u&&(n.opacity=Vt(i.opacity!==void 0?i.opacity:1,o.opacity!==void 0?o.opacity:1,s));for(let f=0;f<B7;f++){const h=`border${uv[f]}Radius`;let p=ix(i,h),g=ix(o,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||ax(p)===ax(g)?(n[h]=Math.max(Vt(nx(p),nx(g),s),0),(Pa.test(g)||Pa.test(p))&&(n[h]+="%")):n[h]=g}(i.rotate||o.rotate)&&(n.rotate=Vt(i.rotate||0,o.rotate||0,s))}function ix(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const N7=dv(0,.5,Tb),$7=dv(.5,.95,In);function dv(n,i,o){return s=>s<n?0:s>i?1:o(bo(n,i,s))}function rx(n,i){n.min=i.min,n.max=i.max}function ha(n,i){rx(n.x,i.x),rx(n.y,i.y)}function ox(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function sx(n,i,o,s,c){return n-=i,n=_c(n,1/o,s),c!==void 0&&(n=_c(n,1/c,s)),n}function P7(n,i=0,o=1,s=.5,c,u=n,f=n){if(Pa.test(i)&&(i=parseFloat(i),i=Vt(f.min,f.max,i/100)-f.min),typeof i!="number")return;let h=Vt(u.min,u.max,s);n===u&&(h-=i),n.min=sx(n.min,i,o,h,c),n.max=sx(n.max,i,o,h,c)}function lx(n,i,[o,s,c],u,f){P7(n,i[o],i[s],i[c],i.scale,u,f)}const _7=["x","scaleX","originX"],V7=["y","scaleY","originY"];function cx(n,i,o,s){lx(n.x,i,_7,o?o.x:void 0,s?s.x:void 0),lx(n.y,i,V7,o?o.y:void 0,s?s.y:void 0)}function ux(n){return n.translate===0&&n.scale===1}function fv(n){return ux(n.x)&&ux(n.y)}function dx(n,i){return n.min===i.min&&n.max===i.max}function U7(n,i){return dx(n.x,i.x)&&dx(n.y,i.y)}function fx(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function hv(n,i){return fx(n.x,i.x)&&fx(n.y,i.y)}function hx(n){return On(n.x)/On(n.y)}function px(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class H7{constructor(){this.members=[]}add(i){D0(this.members,i),i.scheduleRender()}remove(i){if(O0(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(c=>i===c);if(o===0)return!1;let s;for(let c=o;c>=0;c--){const u=this.members[c];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(i,o){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,o&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:s}=i;o.onExitComplete&&o.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function q7(n,i,o){let s="";const c=n.x.translate/i.x,u=n.y.translate/i.y,f=(o==null?void 0:o.z)||0;if((c||u||f)&&(s=`translate3d(${c}px, ${u}px, ${f}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:g,rotate:b,rotateX:v,rotateY:w,skewX:C,skewY:E}=o;g&&(s=`perspective(${g}px) ${s}`),b&&(s+=`rotate(${b}deg) `),v&&(s+=`rotateX(${v}deg) `),w&&(s+=`rotateY(${w}deg) `),C&&(s+=`skewX(${C}deg) `),E&&(s+=`skewY(${E}deg) `)}const h=n.x.scale*i.x,p=n.y.scale*i.y;return(h!==1||p!==1)&&(s+=`scale(${h}, ${p})`),s||"none"}const Ef=["","X","Y","Z"],G7={visibility:"hidden"},mx=1e3;let Y7=0;function Tf(n,i,o,s){const{latestValues:c}=i;c[n]&&(o[n]=c[n],i.setStaticValue(n,0),s&&(s[n]=0))}function pv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const o=yb(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:u}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Rt,!(c||u))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&pv(s)}function mv({attachResizeListener:n,defaultParent:i,measureScroll:o,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},h=i==null?void 0:i()){this.id=Y7++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Q7),this.nodes.forEach(W7),this.nodes.forEach(eA),this.nodes.forEach(K7)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new D7)}addEventListener(f,h){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new L0),this.eventHandlers.get(f).add(h)}notifyListeners(f,...h){const p=this.eventHandlers.get(f);p&&p.notify(...h)}hasListeners(f){return this.eventHandlers.has(f)}mount(f,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=R7(f),this.instance=f;const{layoutId:p,layout:g,visualElement:b}=this.options;if(b&&!b.current&&b.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(g||p)&&(this.isLayoutDirty=!0),n){let v;const w=()=>this.root.updateBlockedByResize=!1;n(f,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=O7(w,250),jc.hasAnimatedSinceResize&&(jc.hasAnimatedSinceResize=!1,this.nodes.forEach(xx))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&b&&(p||g)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:w,hasRelativeLayoutChanged:C,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const O=this.options.transition||b.getDefaultTransition()||rA,{onLayoutAnimationStart:B,onLayoutAnimationComplete:A}=b.getProps(),R=!this.targetLayout||!hv(this.targetLayout,E),T=!w&&C;if(this.options.layoutRoot||this.resumeFrom||T||w&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,T);const N={...N0(O,"layout"),onPlay:B,onComplete:A};(b.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N)}else w||xx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Xi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(tA),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&pv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const v=this.path[b];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gx);return}this.isUpdating||this.nodes.forEach(I7),this.isUpdating=!1,this.nodes.forEach(J7),this.nodes.forEach(X7),this.nodes.forEach(F7),this.clearAllSnapshots();const h=$a.now();Cn.delta=fi(0,1e3/60,h-Cn.timestamp),Cn.timestamp=h,Cn.isProcessing=!0,bf.update.process(Cn),bf.preRender.process(Cn),bf.render.process(Cn),Cn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Z7),this.sharedNodes.forEach(nA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!On(this.snapshot.measuredBox.x)&&!On(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(h=!1),h){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!fv(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,b=g!==this.prevTransformTemplateValue;f&&(h||br(this.latestValues)||b)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return f&&(p=this.removeTransform(p)),oA(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:h}=this.options;if(!h)return rn();const p=h.measureViewportBox();if(!(((f=this.scroll)===null||f===void 0?void 0:f.wasRoot)||this.path.some(sA))){const{scroll:b}=this.root;b&&(co(p.x,b.offset.x),co(p.y,b.offset.y))}return p}removeElementScroll(f){var h;const p=rn();if(ha(p,f),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return p;for(let g=0;g<this.path.length;g++){const b=this.path[g],{scroll:v,options:w}=b;b!==this.root&&v&&w.layoutScroll&&(v.wasRoot&&ha(p,f),co(p.x,v.offset.x),co(p.y,v.offset.y))}return p}applyTransform(f,h=!1){const p=rn();ha(p,f);for(let g=0;g<this.path.length;g++){const b=this.path[g];!h&&b.options.layoutScroll&&b.scroll&&b!==b.root&&uo(p,{x:-b.scroll.offset.x,y:-b.scroll.offset.y}),br(b.latestValues)&&uo(p,b.latestValues)}return br(this.latestValues)&&uo(p,this.latestValues),p}removeTransform(f){const h=rn();ha(h,f);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!br(g.latestValues))continue;h0(g.latestValues)&&g.updateSnapshot();const b=rn(),v=g.measurePageBox();ha(b,v),cx(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,b)}return br(this.latestValues)&&cx(h,this.latestValues),h}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Cn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var h;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==p;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:w}=this.options;if(!(!this.layout||!(v||w))){if(this.resolvedRelativeTargetAt=Cn.timestamp,!this.targetDelta&&!this.relativeTarget){const C=this.getClosestProjectingParent();C&&C.layout&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rn(),this.relativeTargetOrigin=rn(),Ds(this.relativeTargetOrigin,this.layout.layoutBox,C.layout.layoutBox),ha(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=rn(),this.targetWithTransforms=rn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),c7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ha(this.target,this.layout.layoutBox),iv(this.target,this.targetDelta)):ha(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const C=this.getClosestProjectingParent();C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rn(),this.relativeTargetOrigin=rn(),Ds(this.relativeTargetOrigin,this.target,C.target),ha(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||h0(this.parent.latestValues)||av(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var f;const h=this.getLead(),p=!!this.resumingFrom||this!==h;let g=!0;if((this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty)&&(g=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===Cn.timestamp&&(g=!1),g)return;const{layout:b,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(b||v))return;ha(this.layoutCorrected,this.layout.layoutBox);const w=this.treeScale.x,C=this.treeScale.y;u7(this.layoutCorrected,this.treeScale,this.path,p),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=rn());const{target:E}=h;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ox(this.prevProjectionDelta.x,this.projectionDelta.x),ox(this.prevProjectionDelta.y,this.projectionDelta.y)),Ms(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==w||this.treeScale.y!==C||!px(this.projectionDelta.x,this.prevProjectionDelta.x)||!px(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=lo(),this.projectionDelta=lo(),this.projectionDeltaWithTransform=lo()}setAnimationOrigin(f,h=!1){const p=this.snapshot,g=p?p.latestValues:{},b={...this.latestValues},v=lo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=rn(),C=p?p.source:void 0,E=this.layout?this.layout.source:void 0,O=C!==E,B=this.getStack(),A=!B||B.members.length<=1,R=!!(O&&!A&&this.options.crossfade===!0&&!this.path.some(iA));this.animationProgress=0;let T;this.mixTargetDelta=N=>{const D=N/1e3;bx(v.x,f.x,D),bx(v.y,f.y,D),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ds(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),aA(this.relativeTarget,this.relativeTargetOrigin,w,D),T&&U7(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=rn()),ha(T,this.relativeTarget)),O&&(this.animationValues=b,L7(b,g,this.latestValues,D,R,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Xi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Rt.update(()=>{jc.hasAnimatedSinceResize=!0,this.currentAnimation=k7(0,mx,{...f,onUpdate:h=>{this.mixTargetDelta(h),f.onUpdate&&f.onUpdate(h)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mx),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:b}=f;if(!(!h||!p||!g)){if(this!==f&&this.layout&&g&&gv(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||rn();const v=On(this.layout.layoutBox.x);p.x.min=f.target.x.min,p.x.max=p.x.min+v;const w=On(this.layout.layoutBox.y);p.y.min=f.target.y.min,p.y.max=p.y.min+w}ha(h,p),uo(h,b),Ms(this.projectionDeltaWithTransform,this.layoutCorrected,h,b)}}registerSharedNode(f,h){this.sharedNodes.has(f)||this.sharedNodes.set(f,new H7),this.sharedNodes.get(f).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var f;const{layoutId:h}=this.options;return h?((f=this.getStack())===null||f===void 0?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:h}=this.options;return h?(f=this.getStack())===null||f===void 0?void 0:f.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let h=!1;const{latestValues:p}=f;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&Tf("z",f,g,this.animationValues);for(let b=0;b<Ef.length;b++)Tf(`rotate${Ef[b]}`,f,g,this.animationValues),Tf(`skew${Ef[b]}`,f,g,this.animationValues);f.render();for(const b in g)f.setStaticValue(b,g[b]),this.animationValues&&(this.animationValues[b]=g[b]);f.scheduleRender()}getProjectionStyles(f){var h,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return G7;const g={visibility:""},b=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=Ac(f==null?void 0:f.pointerEvents)||"",g.transform=b?b(this.latestValues,""):"none",g;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const O={};return this.options.layoutId&&(O.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,O.pointerEvents=Ac(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!br(this.latestValues)&&(O.transform=b?b({},""):"none",this.hasProjected=!1),O}const w=v.animationValues||v.latestValues;this.applyTransformsToTarget(),g.transform=q7(this.projectionDeltaWithTransform,this.treeScale,w),b&&(g.transform=b(w,g.transform));const{x:C,y:E}=this.projectionDelta;g.transformOrigin=`${C.origin*100}% ${E.origin*100}% 0`,v.animationValues?g.opacity=v===this?(p=(h=w.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:w.opacityExit:g.opacity=v===this?w.opacity!==void 0?w.opacity:"":w.opacityExit!==void 0?w.opacityExit:0;for(const O in Vs){if(w[O]===void 0)continue;const{correct:B,applyTo:A,isCSSVariable:R}=Vs[O],T=g.transform==="none"?w[O]:B(w[O],v);if(A){const N=A.length;for(let D=0;D<N;D++)g[A[D]]=T}else R?this.options.visualElement.renderState.vars[O]=T:g[O]=T}return this.options.layoutId&&(g.pointerEvents=v===this?Ac(f==null?void 0:f.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var h;return(h=f.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(gx),this.root.sharedNodes.clear()}}}function X7(n){n.updateLayout()}function F7(n){var i;const o=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=n.layout,{animationType:u}=n.options,f=o.source!==n.layout.source;u==="size"?pa(v=>{const w=f?o.measuredBox[v]:o.layoutBox[v],C=On(w);w.min=s[v].min,w.max=w.min+C}):gv(u,o.layoutBox,s)&&pa(v=>{const w=f?o.measuredBox[v]:o.layoutBox[v],C=On(s[v]);w.max=w.min+C,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+C)});const h=lo();Ms(h,s,o.layoutBox);const p=lo();f?Ms(p,n.applyTransform(c,!0),o.measuredBox):Ms(p,s,o.layoutBox);const g=!fv(h);let b=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:w,layout:C}=v;if(w&&C){const E=rn();Ds(E,o.layoutBox,w.layoutBox);const O=rn();Ds(O,s,C.layoutBox),hv(E,O)||(b=!0),v.options.layoutRoot&&(n.relativeTarget=O,n.relativeTargetOrigin=E,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:o,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:b})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function Q7(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function K7(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Z7(n){n.clearSnapshot()}function gx(n){n.clearMeasurements()}function I7(n){n.isLayoutDirty=!1}function J7(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function xx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function W7(n){n.resolveTargetDelta()}function eA(n){n.calcProjection()}function tA(n){n.resetSkewAndRotation()}function nA(n){n.removeLeadSnapshot()}function bx(n,i,o){n.translate=Vt(i.translate,0,o),n.scale=Vt(i.scale,1,o),n.origin=i.origin,n.originPoint=i.originPoint}function vx(n,i,o,s){n.min=Vt(i.min,o.min,s),n.max=Vt(i.max,o.max,s)}function aA(n,i,o,s){vx(n.x,i.x,o.x,s),vx(n.y,i.y,o.y,s)}function iA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const rA={duration:.45,ease:[.4,0,.1,1]},yx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),wx=yx("applewebkit/")&&!yx("chrome/")?Math.round:In;function Sx(n){n.min=wx(n.min),n.max=wx(n.max)}function oA(n){Sx(n.x),Sx(n.y)}function gv(n,i,o){return n==="position"||n==="preserve-aspect"&&!l7(hx(i),hx(o),.2)}function sA(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const lA=mv({attachResizeListener:(n,i)=>Gs(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zf={current:void 0},xv=mv({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!zf.current){const n=new lA({});n.mount(window),n.setOptions({layoutScroll:!0}),zf.current=n}return zf.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),cA={pan:{Feature:j7},drag:{Feature:A7,ProjectionNode:xv,MeasureLayout:cv}};function Cx(n,i,o){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,u=s[c];u&&Rt.postRender(()=>u(i,al(i)))}class uA extends Qi{mount(){const{current:i}=this.node;i&&(this.unmount=xS(i,(o,s)=>(Cx(this.node,s,"Start"),c=>Cx(this.node,c,"End"))))}unmount(){}}class dA extends Qi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nl(Gs(this.node.current,"focus",()=>this.onFocus()),Gs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ax(n,i,o){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),u=s[c];u&&Rt.postRender(()=>u(i,al(i)))}class fA extends Qi{mount(){const{current:i}=this.node;i&&(this.unmount=wS(i,(o,s)=>(Ax(this.node,s,"Start"),(c,{success:u})=>Ax(this.node,c,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const g0=new WeakMap,kf=new WeakMap,hA=n=>{const i=g0.get(n.target);i&&i(n)},pA=n=>{n.forEach(hA)};function mA({root:n,...i}){const o=n||document;kf.has(o)||kf.set(o,{});const s=kf.get(o),c=JSON.stringify(i);return s[c]||(s[c]=new IntersectionObserver(pA,{root:n,...i})),s[c]}function gA(n,i,o){const s=mA(i);return g0.set(n,o),s.observe(n),()=>{g0.delete(n),s.unobserve(n)}}const xA={some:0,all:1};class bA extends Qi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:s,amount:c="some",once:u}=i,f={root:o?o.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:xA[c]},h=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:b,onViewportLeave:v}=this.node.getProps(),w=g?b:v;w&&w(p)};return gA(this.node.current,f,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(vA(i,o))&&this.startObserver()}unmount(){}}function vA({viewport:n={}},{viewport:i={}}={}){return o=>n[o]!==i[o]}const yA={inView:{Feature:bA},tap:{Feature:fA},focus:{Feature:dA},hover:{Feature:uA}},wA={layout:{ProjectionNode:xv,MeasureLayout:cv}},x0={current:null},bv={current:!1};function SA(){if(bv.current=!0,!!R0)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>x0.current=n.matches;n.addListener(i),i()}else x0.current=!1}const CA=[...Hb,kn,Fi],AA=n=>CA.find(Ub(n)),jA=new WeakMap;function EA(n,i,o){for(const s in i){const c=i[s],u=o[s];if(Rn(c))n.addValue(s,c);else if(Rn(u))n.addValue(s,Ps(c,{owner:n}));else if(u!==c)if(n.hasValue(s)){const f=n.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=n.getStaticValue(s);n.addValue(s,Ps(f!==void 0?f:c,{owner:n}))}}for(const s in o)i[s]===void 0&&n.removeValue(s);return i}const jx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class TA{scrapeMotionValuesFromProps(i,o,s){return{}}constructor({parent:i,props:o,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:u,visualState:f},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ih,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const C=$a.now();this.renderScheduledAt<C&&(this.renderScheduledAt=C,Rt.render(this.render,!1,!0))};const{latestValues:p,renderState:g,onUpdate:b}=f;this.onUpdate=b,this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=g,this.parent=i,this.props=o,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=h,this.blockInitialAnimation=!!u,this.isControllingVariants=nu(o),this.isVariantNode=ib(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:v,...w}=this.scrapeMotionValuesFromProps(o,{},this);for(const C in w){const E=w[C];p[C]!==void 0&&Rn(E)&&E.set(p[C],!1)}}mount(i){this.current=i,jA.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,s)=>this.bindToMotionValue(s,o)),bv.current||SA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:x0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Xi(this.notifyUpdate),Xi(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=Tr.has(i);s&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",h=>{this.latestValues[i]=h,this.props.onUpdate&&Rt.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),u=o.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{c(),u(),f&&f(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in vo){const o=vo[i];if(!o)continue;const{isEnabled:s,Feature:c}=o;if(!this.features[i]&&c&&s(this.props)&&(this.features[i]=new c(this)),this.features[i]){const u=this.features[i];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rn()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<jx.length;s++){const c=jx[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,f=i[u];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=EA(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const s=this.values.get(i);o!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&o!==void 0&&(s=Ps(o===null?void 0:o,{owner:this}),this.addValue(i,s)),s}readValue(i,o){var s;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(s=this.getBaseTargetFromProps(this.props,i))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(_b(c)||kb(c))?c=parseFloat(c):!AA(c)&&Fi.test(o)&&(c=Nb(i,o)),this.setBaseTarget(i,Rn(c)?c.get():c)),Rn(c)?c.get():c}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){var o;const{initial:s}=this.props;let c;if(typeof s=="string"||typeof s=="object"){const f=J0(this.props,s,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);f&&(c=f[i])}if(s&&c!==void 0)return c;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!Rn(u)?u:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new L0),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}}class vv extends TA{constructor(){super(...arguments),this.KeyframeResolver=qb}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:s}){delete o[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Rn(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function zA(n){return window.getComputedStyle(n)}class kA extends vv{constructor(){super(...arguments),this.type="html",this.renderInstance=mb}readValueFromInstance(i,o){if(Tr.has(o))return V8(i,o);{const s=zA(i),c=(G0(o)?s.getPropertyValue(o):s[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:o}){return rv(i,o)}build(i,o,s){F0(i,o,s.transformTemplate)}scrapeMotionValuesFromProps(i,o,s){return W0(i,o,s)}}class RA extends vv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rn,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&pb(this.current,this.renderState)}}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(Tr.has(o)){const s=Lb(o);return s&&s.default||0}return o=gb.has(o)?o:q0(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,s){return bb(i,o,s)}onBindTransform(){this.current&&!this.renderState.dimensions&&Rt.postRender(this.updateDimensions)}build(i,o,s){Z0(i,o,this.isSVGTag,s.transformTemplate)}renderInstance(i,o,s,c){xb(i,o,s,c)}mount(i){this.isSVGTag=I0(i.tagName),super.mount(i)}}const MA=(n,i)=>K0(n)?new RA(i):new kA(i,{allowProjection:n!==j.Fragment}),DA=h8({...e7,...yA,...cA,...wA},MA),zn=kS(DA);function OA(n){return Et({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(n)}const BA=()=>{const{players:n,updatePlayerScore:i}=Ha(),[o,s]=j.useState(null),[c,u]=j.useState(null),[f,h]=j.useState(!1),[p,g]=j.useState([{name:"Curiosità Pokémon",color:"#EE1515",questions:[{question:"L'Adamo dei pokemon per gamefreak",answer:"Rhydon è stato il primo pokemon disegnato",points:100,answered:!1},{question:"Charizard può anche ottenere una variante ogni anno, ma c'è chi ne possiede 4 miliardi",answer:"Possibili varianti delle macchie di Spinda",points:200,answered:!1},{question:"Se proprio devo morire che almeno diventi un pokemon",answer:"Yamask si dice che sia stato un umano divenuto pokemon dopo la morte e che la maschera sia il ricordo della vita passata",points:300,answered:!1},{question:"Roma di notte e di notte Roma, Mew di giorno e di notte…",answer:" Smergle, fra le varie leggende legate a loro due esiste una che dice che Smergle sia Mew di notte",points:400,answered:!1},{question:"Sebbene sia la mascotte, c'è ancora chi non sa scrivere il suo nome",answer:"Errore del nome Pikachu in Pokemon Go (Pikahcu)",points:500,answered:!1}]},{name:"Pokémon",color:"#3B4CCA",questions:[{question:"Impossibile andare oltre",answer:"Nosepass",points:100,answered:!1},{question:"Bello Chimchar, sì, finché non ti arriva da Wish",answer:"Pansear",points:200,answered:!1},{question:"Il pokemon preferito di Bud Spencer",answer:"Hippowdon",points:300,answered:!1},{question:"Dovrei essere meno emotivo, sono tentato a diventare più freddo",answer:"Tentacool",points:400,answered:!1},{question:"Sono le 11:05 o le 12:55?",answer:"Hoothoot",points:500,answered:!1}]},{name:"Allenatori",color:"#FFDE00",questions:[{question:"C'è solo un capitano",answer:"Marinaio",points:100,answered:!1},{question:"Conoscevo questo allenatore ma poi mi sono scordato ",answer:"Chitarrista",points:200,answered:!1},{question:"Quanto era bello fargli il culo dopo che ti prendeva un coccolone?",answer:"Ninja",points:300,answered:!1},{question:"Il potere è pelato e a quanto pare anche muscoloso",answer:"ZuccaPelata",points:400,answered:!1},{question:"+10 punti se sale sul campo da battaglia con i capezzoli di fuori?",answer:"Fantallenatore",points:500,answered:!1}]},{name:"GCC Pokémon",color:"#FF9C54",questions:[{question:"Quante carte si pescano all'inizio di una partita nel GCC Pokémon?",answer:"7",points:100,answered:!1},{question:"Quanti sono i tipi presenti nel GCC?",answer:"11",points:200,answered:!1},{question:"Qual è il valore di ritirata più alto mai stampato su una carta?",answer:"5 energie",points:300,answered:!1},{question:"Quanti sono i PS massimi mai stampati su una carta?",answer:"340",points:400,answered:!1},{question:"Qual è il primo set di carte e quando è stato rilasciato? (giappone/italia)",answer:"Set Base nel 1996/2000",points:500,answered:!1}]},{name:"Serie Pokémon",color:"#78C850",questions:[{question:"Quale pokemon era famoso per portare sempre con se un paio di occhiali neri?",answer:"Squirtle",points:100,answered:!1},{question:"Quale Pokémon leggendario appare nel primo film? (fino a 5 gen)",answer:"Misty - Brock - Spighetto - (Iris)",points:200,answered:!1},{question:"In quale anno è uscita la prima serie pokemon in Italia?",answer:"Nel 2000",points:300,answered:!1},{question:"Chi sono i pokemon starter full evolved avuti da ash?",answer:"Charizard - Sceptile - Torterra - Infernape - Incineroar - Greninja -",points:400,answered:!1},{question:"Quanti sono i lungometraggi della serie pokemon?",answer:"22 ",points:500,answered:!1}]}]),[b,v]=j.useState(!1);j.useEffect(()=>{n.length>0&&!o&&s(n[0]);const A=localStorage.getItem("quizCategories");if(A)g(JSON.parse(A));else{const R=p.map(T=>({...T,questions:T.questions.map(N=>({...N,id:`${T.name}-${N.points}-${Math.random().toString(36).substr(2,9)}`}))}));g(R)}},[n,o]);const w=(A,R,T)=>{R.answered||!o||(v(!0),setTimeout(()=>{u({category:A,question:R,categoryColor:T}),h(!1),v(!1)},300))},C=A=>{const R=p.map(T=>({...T,questions:T.questions.map(N=>N.id===A.id?{...N,answered:!0}:N)}));g(R),localStorage.setItem("quizCategories",JSON.stringify(R))},E=()=>{if(!o||!c)return;const A=o.score+c.question.points;i(o.id,A),s({...o,score:A}),C(c.question),u(null)},O=()=>{c&&(C(c.question),u(null))},B=()=>{const A=p.map(R=>({...R,questions:R.questions.map(T=>({...T,answered:!1}))}));g(A),localStorage.setItem("quizCategories",JSON.stringify(A))};return m.jsxs(VA,{children:[m.jsxs(UA,{children:[m.jsxs(HA,{to:"/game",children:[m.jsx(ja,{}),m.jsx("span",{children:"Torna ai giochi"})]}),m.jsxs(qA,{onClick:B,children:[m.jsx(vw,{}),m.jsx("span",{children:"Reset Quiz"})]})]}),m.jsx(GA,{as:zn.h1,initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,type:"spring"},children:"🎮 Sfida Quiz Pokémon 🎮"}),m.jsxs("div",{className:"container",style:{display:"flex",width:"90%",justifyContent:"space-evenly"},children:[m.jsx("div",{className:"table",children:m.jsx(zn.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:m.jsxs(YA,{children:[m.jsx(XA,{children:p.map((A,R)=>m.jsxs(FA,{$color:A.color,as:zn.div,initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:R*.1},children:[m.jsx(Ex,{}),m.jsx(QA,{children:A.name})]},R))}),[0,1,2,3,4].map(A=>m.jsx(KA,{children:p.map((R,T)=>{const N=R.questions[A];return m.jsx(ZA,{$color:R.color,$answered:N.answered,onClick:()=>w(R.name,N,R.color),as:zn.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:(A*5+T)*.05},whileHover:N.answered?{}:{scale:1.05},whileTap:N.answered?{}:{scale:.95},children:N.answered?m.jsxs(e9,{children:[m.jsx(n9,{}),m.jsx(t9,{children:"Catturato!"})]}):m.jsxs(IA,{children:[m.jsx(JA,{}),N.points,m.jsx(WA,{children:"PT"})]})},T)})},A))]})})}),m.jsxs(a9,{as:zn.div,initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,delay:.4},children:[m.jsxs(i9,{children:[m.jsxs(r9,{children:[m.jsx(Zf,{})," Allenatori in Gara"]}),m.jsx(o9,{children:o?`🎯 Turno di ${o.name} - Scegli una domanda!`:"👆 Seleziona un allenatore per iniziare la sfida"})]}),m.jsx(s9,{children:n.map((A,R)=>m.jsxs(l9,{$active:(o==null?void 0:o.id)===A.id,onClick:()=>s(A),as:zn.div,initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{delay:R*.1},whileHover:{scale:1.02},whileTap:{scale:.98},children:[m.jsx(Tx,{src:A.avatar,alt:A.name}),m.jsxs(c9,{children:[m.jsx(zx,{children:A.name}),m.jsxs(u9,{children:[m.jsx(Oc,{})," ",A.score," punti"]})]}),(o==null?void 0:o.id)===A.id&&m.jsx(d9,{as:zn.div,initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:300},children:m.jsx(Zf,{})})]},A.id))})]})]}),m.jsx(s1,{children:b&&m.jsxs(f9,{as:zn.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[m.jsx(h9,{}),m.jsx(p9,{children:"Preparando la domanda..."})]})}),m.jsx(s1,{children:c&&m.jsx(m9,{as:zn.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:A=>{A.target===A.currentTarget&&(u(null),h(!1))},children:m.jsxs(g9,{as:zn.div,initial:{scale:.7,opacity:0,y:50},animate:{scale:1,opacity:1,y:0},exit:{scale:.7,opacity:0,y:50},transition:{type:"spring",stiffness:300,damping:30},$color:c.categoryColor,children:[m.jsx(x9,{onClick:()=>{u(null),h(!1)},as:zn.button,whileHover:{scale:1.1,rotate:90},whileTap:{scale:.9},children:m.jsx(OA,{size:24})}),m.jsxs(b9,{children:[m.jsxs(v9,{$color:c.categoryColor,children:[m.jsx(Ex,{}),c.category]}),m.jsxs(y9,{children:[m.jsx(Oc,{})," ",c.question.points," punti"]})]}),m.jsx(w9,{as:zn.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:c.question.question}),m.jsx(S9,{children:f?m.jsxs(C9,{as:zn.div,initial:{opacity:0,y:30,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{type:"spring",stiffness:200},children:[m.jsxs(A9,{children:["💡 ",c.question.answer]}),m.jsxs(j9,{children:[m.jsxs(kx,{$color:"#4CAF50",onClick:E,as:zn.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(Yi,{})," Corretta"]}),m.jsxs(kx,{$color:"#EE1515",onClick:O,as:zn.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(di,{})," Sbagliata"]})]})]}):m.jsxs(E9,{onClick:()=>h(!0),as:zn.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:[m.jsx(xw,{})," Rivela la Risposta"]})}),m.jsxs(T9,{children:[m.jsx(Tx,{src:o==null?void 0:o.avatar,alt:o==null?void 0:o.name,$small:!0}),m.jsx(zx,{children:o==null?void 0:o.name})]})]})})}),m.jsxs(z9,{children:[m.jsx(Xs,{className:"ball1"}),m.jsx(Xs,{className:"ball2"}),m.jsx(k9,{className:"ball3"}),m.jsx(R9,{className:"ball4"}),m.jsx(M9,{className:"ball5"})]})]})},Ys=He`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`,LA=He`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,NA=He`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`,$A=He`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,PA=He`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0,-4px,0); }
`,_A=He`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,VA=y.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  padding-top: 100px; /* Spazio per la TopBar fissa */
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);
  color: white;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  gap: 2rem; /* Spazio tra gli elementi */

  @media (max-width: 768px) {
    padding: 80px 0.5rem 1rem 0.5rem;
    gap: 1.5rem;
  }
`,UA=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(26, 35, 126, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 222, 0, 0.3);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`,HA=y(pi)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  padding: 10px 16px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    transform: translateX(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`,qA=y.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #f44336, #d32f2f);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(244, 67, 54, 0.3);

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  &:hover {
    background: linear-gradient(135deg, #e53935, #c62828);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(244, 67, 54, 0.4);
  }
`,GA=y.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  color: #ffde00;
  background: linear-gradient(45deg, #ffde00, #ffc107, #ff9800);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  margin: 0; /* Rimosso il margin eccessivo */
  position: relative;
  z-index: 10; /* Assicura che sia visibile */

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 222, 0, 0.1),
      transparent
    );
    border-radius: 20px;
    z-index: -1;
    animation: ${$A} 3s ease-in-out infinite;
  }
`,YA=y.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: rgba(13, 27, 62, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(255, 222, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 2px solid #ffde00;
  overflow: hidden;
  backdrop-filter: blur(10px);
  z-index: 10; /* Assicura che sia visibile */
`,XA=y.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,FA=y.div`
  background: linear-gradient(
    135deg,
    ${n=>n.$color},
    ${n=>n.$color}dd
  );
  color: white;
  padding: 1.5rem 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  min-height: 100px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1rem 0.5rem;
    min-height: 80px;
  }
`,QA=y.span`
  font-size: 0.9rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,KA=y.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,ZA=y.div`
  background: ${n=>n.$answered?"linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(56, 142, 60, 0.2))":"linear-gradient(135deg, rgba(13, 27, 62, 0.8), rgba(21, 39, 78, 0.9))"};
  color: ${n=>n.$answered?"#81C784":n.$color};
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${n=>n.$answered?"default":"pointer"};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${n=>n.$answered?"none":`radial-gradient(circle at center, ${n.$color}15, transparent)`};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${n=>!n.$answered&&Er`
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 20px ${n.$color}40, inset 0 0 20px ${n.$color}20;
        border: 2px solid ${n.$color};
        z-index: 1;

        &::before {
          opacity: 1;
        }
      }
    `}

  @media (max-width: 768px) {
    height: 80px;
  }
`,IA=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 1.8rem;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`,JA=y(Oc)`
  font-size: 1rem;
  margin-bottom: 4px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`,WA=y.span`
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.8;
`,e9=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  animation: ${PA} 1s ease-out;
`,t9=y.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #81c784;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,Ex=y.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #ee1515 55%
  );
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 1px #333;
  }
`,n9=y.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #4caf50 55%
  );
  position: relative;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px #333;
  }
`,a9=y.div`
  width: 20vw;
  max-width: 1200px;
  background: rgba(13, 27, 62, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(255, 222, 0, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 10; /* Assicura che sia visibile */

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,i9=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 222, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,r9=y.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,o9=y.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  background: rgba(255, 222, 0, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 222, 0, 0.4);
  backdrop-filter: blur(5px);
`,s9=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,l9=y.div`
  display: flex;
  align-items: center;
  background: ${n=>n.$active?"linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(255, 193, 7, 0.1))":"rgba(255, 255, 255, 0.08)"};
  border-radius: 16px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid
    ${n=>n.$active?"#FFDE00":"rgba(255, 255, 255, 0.1)"};
  cursor: pointer;
  backdrop-filter: blur(10px);

  ${n=>n.$active&&Er`
      box-shadow: 0 0 20px rgba(255, 222, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      animation: ${LA} 2s infinite ease-in-out;
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`,Tx=y.img`
  width: ${n=>n.$small?"32px":"50px"};
  height: ${n=>n.$small?"32px":"50px"};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`,c9=y.div`
  flex: 1;
`,zx=y.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,u9=y.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: #ffde00;
  font-weight: 600;
`,d9=y.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #ff9800, #f57c00);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  animation: ${NA} 2s infinite;
`,f9=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`,h9=y.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 222, 0, 0.3);
  border-top: 4px solid #ffde00;
  border-radius: 50%;
  animation: ${_A} 1s linear infinite;
  margin-bottom: 1rem;
`,p9=y.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
`,m9=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,g9=y.div`
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
  border-radius: 20px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 3px rgba(255, 222, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid #ffde00;
`,x9=y.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(244, 67, 54, 0.9);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(244, 67, 54, 1);
  }
`,b9=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    flex-direction: column;
    gap: 1rem;
  }
`,v9=y.div`
  background: linear-gradient(
    135deg,
    ${n=>n.$color},
    ${n=>n.$color}dd
  );
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
`,y9=y.div`
  background: rgba(255, 222, 0, 0.2);
  color: #ffde00;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.4);
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(10px);
`,w9=y.div`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  padding: 3rem 2rem;
  color: white;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  position: relative;
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 2rem 1.5rem;
    min-height: 120px;
  }
`,S9=y.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,C9=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`,A9=y.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: #ffde00;
  line-height: 1.5;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  border: 1px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`,j9=y.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`,kx=y.button`
  background: linear-gradient(
    135deg,
    ${n=>n.$color},
    ${n=>n.$color}dd
  );
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  min-width: 140px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
  }
`,E9=y.button`
  background: linear-gradient(135deg, #3b4cca, #283593);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #303f9f, #1a237e);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`,T9=y.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid white;
  backdrop-filter: blur(10px);
`,z9=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Messo dietro a tutto */
  overflow: hidden;
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);
`,Xs=y.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #ee1515 55%
  );
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  opacity: 0.05; /* Ridotta opacità per non interferire */

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333;
  }

  &.ball1 {
    top: 10%;
    right: 10%;
    animation: ${Ys} 8s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 20%;
    left: 5%;
    animation: ${Ys} 10s ease-in-out infinite reverse;
  }
`,k9=y(Xs)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #3b4cca 55%
  );

  &.ball3 {
    top: 30%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${Ys} 12s ease-in-out infinite;
  }
`,R9=y(Xs)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #ffde00 55%
  );

  &.ball4 {
    bottom: 10%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${Ys} 15s ease-in-out infinite reverse;
  }
`,M9=y(Xs)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 45%,
    #333 45%,
    #333 55%,
    #9966ff 55%
  );

  &.ball5 {
    top: 50%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${Ys} 14s ease-in-out infinite;
  }
`;var Rf={exports:{}},Rx;function D9(){return Rx||(Rx=1,function(n,i){(function(o,s){n.exports=s(qc())})(window,function(o){return function(s){var c={};function u(f){if(c[f])return c[f].exports;var h=c[f]={i:f,l:!1,exports:{}};return s[f].call(h.exports,h,h.exports,u),h.l=!0,h.exports}return u.m=s,u.c=c,u.d=function(f,h,p){u.o(f,h)||Object.defineProperty(f,h,{enumerable:!0,get:p})},u.r=function(f){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},u.t=function(f,h){if(1&h&&(f=u(f)),8&h||4&h&&typeof f=="object"&&f&&f.__esModule)return f;var p=Object.create(null);if(u.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:f}),2&h&&typeof f!="string")for(var g in f)u.d(p,g,(function(b){return f[b]}).bind(null,g));return p},u.n=function(f){var h=f&&f.__esModule?function(){return f.default}:function(){return f};return u.d(h,"a",h),h},u.o=function(f,h){return Object.prototype.hasOwnProperty.call(f,h)},u.p="",u(u.s=11)}([function(s,c){s.exports=o},function(s,c,u){(function(f){var h=u(2),p=u(0),g=u.n(p),b=u(6);u.n(b);var v=u(7),w=u(8),C=u(4),E=u(3),O=u.n(E);function B(){return(B=Object.assign||function(U){for(var W=1;W<arguments.length;W++){var V=arguments[W];for(var J in V)Object.prototype.hasOwnProperty.call(V,J)&&(U[J]=V[J])}return U}).apply(this,arguments)}var A=function(U,W){for(var V=[U[0]],J=0,ge=W.length;J<ge;J+=1)V.push(W[J],U[J+1]);return V},R=function(U){return U!==null&&typeof U=="object"&&(U.toString?U.toString():Object.prototype.toString.call(U))==="[object Object]"&&!Object(h.typeOf)(U)},T=Object.freeze([]),N=Object.freeze({});function D(U){return typeof U=="function"}function G(U){return U.displayName||U.name||"Component"}function Z(U){return U&&typeof U.styledComponentId=="string"}var ae=f!==void 0&&(f.env.REACT_APP_SC_ATTR||f.env.SC_ATTR)||"data-styled",Q=typeof window<"u"&&"HTMLElement"in window,de=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:f!==void 0&&f.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&f.env.REACT_APP_SC_DISABLE_SPEEDY!==""?f.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&f.env.REACT_APP_SC_DISABLE_SPEEDY:f!==void 0&&f.env.SC_DISABLE_SPEEDY!==void 0&&f.env.SC_DISABLE_SPEEDY!==""&&f.env.SC_DISABLE_SPEEDY!=="false"&&f.env.SC_DISABLE_SPEEDY);function X(U){for(var W=arguments.length,V=new Array(W>1?W-1:0),J=1;J<W;J++)V[J-1]=arguments[J];throw new Error("An error occurred. See https://git.io/JUIaE#"+U+" for more information."+(V.length>0?" Args: "+V.join(", "):""))}var Pe=function(){function U(V){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=V}var W=U.prototype;return W.indexOfGroup=function(V){for(var J=0,ge=0;ge<V;ge++)J+=this.groupSizes[ge];return J},W.insertRules=function(V,J){if(V>=this.groupSizes.length){for(var ge=this.groupSizes,Re=ge.length,ye=Re;V>=ye;)(ye<<=1)<0&&X(16,""+V);this.groupSizes=new Uint32Array(ye),this.groupSizes.set(ge),this.length=ye;for(var De=Re;De<ye;De++)this.groupSizes[De]=0}for(var Ue=this.indexOfGroup(V+1),Qe=0,ht=J.length;Qe<ht;Qe++)this.tag.insertRule(Ue,J[Qe])&&(this.groupSizes[V]++,Ue++)},W.clearGroup=function(V){if(V<this.length){var J=this.groupSizes[V],ge=this.indexOfGroup(V),Re=ge+J;this.groupSizes[V]=0;for(var ye=ge;ye<Re;ye++)this.tag.deleteRule(ge)}},W.getGroup=function(V){var J="";if(V>=this.length||this.groupSizes[V]===0)return J;for(var ge=this.groupSizes[V],Re=this.indexOfGroup(V),ye=Re+ge,De=Re;De<ye;De++)J+=this.tag.getRule(De)+`/*!sc*/
`;return J},U}(),rt=new Map,Y=new Map,je=1,K=function(U){if(rt.has(U))return rt.get(U);for(;Y.has(je);)je++;var W=je++;return rt.set(U,W),Y.set(W,U),W},I=function(U){return Y.get(U)},re=function(U,W){rt.set(U,W),Y.set(W,U)},xe="style["+ae+'][data-styled-version="5.2.1"]',M=new RegExp("^"+ae+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ie=function(U,W,V){for(var J,ge=V.split(","),Re=0,ye=ge.length;Re<ye;Re++)(J=ge[Re])&&U.registerName(W,J)},be=function(U,W){for(var V=W.innerHTML.split(`/*!sc*/
`),J=[],ge=0,Re=V.length;ge<Re;ge++){var ye=V[ge].trim();if(ye){var De=ye.match(M);if(De){var Ue=0|parseInt(De[1],10),Qe=De[2];Ue!==0&&(re(Qe,Ue),ie(U,Qe,De[3]),U.getTag().insertRules(Ue,J)),J.length=0}else J.push(ye)}}},we=function(){return u.nc},me=function(U){var W=document.head,V=U||W,J=document.createElement("style"),ge=function(De){for(var Ue=De.childNodes,Qe=Ue.length;Qe>=0;Qe--){var ht=Ue[Qe];if(ht&&ht.nodeType===1&&ht.hasAttribute(ae))return ht}}(V),Re=ge!==void 0?ge.nextSibling:null;J.setAttribute(ae,"active"),J.setAttribute("data-styled-version","5.2.1");var ye=we();return ye&&J.setAttribute("nonce",ye),V.insertBefore(J,Re),J},he=function(){function U(V){var J=this.element=me(V);J.appendChild(document.createTextNode("")),this.sheet=function(ge){if(ge.sheet)return ge.sheet;for(var Re=document.styleSheets,ye=0,De=Re.length;ye<De;ye++){var Ue=Re[ye];if(Ue.ownerNode===ge)return Ue}X(17)}(J),this.length=0}var W=U.prototype;return W.insertRule=function(V,J){try{return this.sheet.insertRule(J,V),this.length++,!0}catch{return!1}},W.deleteRule=function(V){this.sheet.deleteRule(V),this.length--},W.getRule=function(V){var J=this.sheet.cssRules[V];return J!==void 0&&typeof J.cssText=="string"?J.cssText:""},U}(),le=function(){function U(V){var J=this.element=me(V);this.nodes=J.childNodes,this.length=0}var W=U.prototype;return W.insertRule=function(V,J){if(V<=this.length&&V>=0){var ge=document.createTextNode(J),Re=this.nodes[V];return this.element.insertBefore(ge,Re||null),this.length++,!0}return!1},W.deleteRule=function(V){this.element.removeChild(this.nodes[V]),this.length--},W.getRule=function(V){return V<this.length?this.nodes[V].textContent:""},U}(),Te=function(){function U(V){this.rules=[],this.length=0}var W=U.prototype;return W.insertRule=function(V,J){return V<=this.length&&(this.rules.splice(V,0,J),this.length++,!0)},W.deleteRule=function(V){this.rules.splice(V,1),this.length--},W.getRule=function(V){return V<this.length?this.rules[V]:""},U}(),Se=Q,H={isServer:!Q,useCSSOMInjection:!de},Le=function(){function U(V,J,ge){V===void 0&&(V=N),J===void 0&&(J={}),this.options=B({},H,{},V),this.gs=J,this.names=new Map(ge),!this.options.isServer&&Q&&Se&&(Se=!1,function(Re){for(var ye=document.querySelectorAll(xe),De=0,Ue=ye.length;De<Ue;De++){var Qe=ye[De];Qe&&Qe.getAttribute(ae)!=="active"&&(be(Re,Qe),Qe.parentNode&&Qe.parentNode.removeChild(Qe))}}(this))}U.registerId=function(V){return K(V)};var W=U.prototype;return W.reconstructWithOptions=function(V,J){return J===void 0&&(J=!0),new U(B({},this.options,{},V),this.gs,J&&this.names||void 0)},W.allocateGSInstance=function(V){return this.gs[V]=(this.gs[V]||0)+1},W.getTag=function(){return this.tag||(this.tag=(ge=(J=this.options).isServer,Re=J.useCSSOMInjection,ye=J.target,V=ge?new Te(ye):Re?new he(ye):new le(ye),new Pe(V)));var V,J,ge,Re,ye},W.hasNameForId=function(V,J){return this.names.has(V)&&this.names.get(V).has(J)},W.registerName=function(V,J){if(K(V),this.names.has(V))this.names.get(V).add(J);else{var ge=new Set;ge.add(J),this.names.set(V,ge)}},W.insertRules=function(V,J,ge){this.registerName(V,J),this.getTag().insertRules(K(V),ge)},W.clearNames=function(V){this.names.has(V)&&this.names.get(V).clear()},W.clearRules=function(V){this.getTag().clearGroup(K(V)),this.clearNames(V)},W.clearTag=function(){this.tag=void 0},W.toString=function(){return function(V){for(var J=V.getTag(),ge=J.length,Re="",ye=0;ye<ge;ye++){var De=I(ye);if(De!==void 0){var Ue=V.names.get(De),Qe=J.getGroup(ye);if(Ue!==void 0&&Qe.length!==0){var ht=ae+".g"+ye+'[id="'+De+'"]',Xt="";Ue!==void 0&&Ue.forEach(function(nn){nn.length>0&&(Xt+=nn+",")}),Re+=""+Qe+ht+'{content:"'+Xt+`"}/*!sc*/
`}}}return Re}(this)},U}(),ve=/(a)(d)/gi,et=function(U){return String.fromCharCode(U+(U>25?39:97))};function qe(U){var W,V="";for(W=Math.abs(U);W>52;W=W/52|0)V=et(W%52)+V;return(et(W%52)+V).replace(ve,"$1-$2")}var ft=function(U,W){for(var V=W.length;V;)U=33*U^W.charCodeAt(--V);return U},Ot=function(U){return ft(5381,U)};function _e(U){for(var W=0;W<U.length;W+=1){var V=U[W];if(D(V)&&!Z(V))return!1}return!0}var Me=Ot("5.2.1"),Ve=function(){function U(W,V,J){this.rules=W,this.staticRulesId="",this.isStatic=(J===void 0||J.isStatic)&&_e(W),this.componentId=V,this.baseHash=ft(Me,V),this.baseStyle=J,Le.registerId(V)}return U.prototype.generateAndInjectStyles=function(W,V,J){var ge=this.componentId,Re=[];if(this.baseStyle&&Re.push(this.baseStyle.generateAndInjectStyles(W,V,J)),this.isStatic&&!J.hash)if(this.staticRulesId&&V.hasNameForId(ge,this.staticRulesId))Re.push(this.staticRulesId);else{var ye=fe(this.rules,W,V,J).join(""),De=qe(ft(this.baseHash,ye.length)>>>0);if(!V.hasNameForId(ge,De)){var Ue=J(ye,"."+De,void 0,ge);V.insertRules(ge,De,Ue)}Re.push(De),this.staticRulesId=De}else{for(var Qe=this.rules.length,ht=ft(this.baseHash,J.hash),Xt="",nn=0;nn<Qe;nn++){var Lt=this.rules[nn];if(typeof Lt=="string")Xt+=Lt;else if(Lt){var at=fe(Lt,W,V,J),Je=Array.isArray(at)?at.join(""):at;ht=ft(ht,Je+nn),Xt+=Je}}if(Xt){var mt=qe(ht>>>0);if(!V.hasNameForId(ge,mt)){var bt=J(Xt,"."+mt,void 0,ge);V.insertRules(ge,mt,bt)}Re.push(mt)}}return Re.join(" ")},U}(),vt=/^\s*\/\/.*$/gm,Ht=[":","[",".","#"];function yt(U){var W,V,J,ge,Re=N,ye=Re.options,De=ye===void 0?N:ye,Ue=Re.plugins,Qe=Ue===void 0?T:Ue,ht=new v.a(De),Xt=[],nn=function(Je){function mt(bt){if(bt)try{Je(bt+"}")}catch{}}return function(bt,Ke,Nt,Ze,Ft,Wn,An,fn,Qt,xa){switch(bt){case 1:if(Qt===0&&Ke.charCodeAt(0)===64)return Je(Ke+";"),"";break;case 2:if(fn===0)return Ke+"/*|*/";break;case 3:switch(fn){case 102:case 112:return Je(Nt[0]+Ke),"";default:return Ke+(xa===0?"/*|*/":"")}case-2:Ke.split("/*|*/}").forEach(mt)}}}(function(Je){Xt.push(Je)}),Lt=function(Je,mt,bt){return mt===0&&Ht.includes(bt[V.length])||bt.match(ge)?Je:"."+W};function at(Je,mt,bt,Ke){Ke===void 0&&(Ke="&");var Nt=Je.replace(vt,""),Ze=mt&&bt?bt+" "+mt+" { "+Nt+" }":Nt;return W=Ke,V=mt,J=new RegExp("\\"+V+"\\b","g"),ge=new RegExp("(\\"+V+"\\b){2,}"),ht(bt||!mt?"":mt,Ze)}return ht.use([].concat(Qe,[function(Je,mt,bt){Je===2&&bt.length&&bt[0].lastIndexOf(V)>0&&(bt[0]=bt[0].replace(J,Lt))},nn,function(Je){if(Je===-2){var mt=Xt;return Xt=[],mt}}])),at.hash=Qe.length?Qe.reduce(function(Je,mt){return mt.name||X(15),ft(Je,mt.name)},5381).toString():"",at}var nt=g.a.createContext(),Bt=(nt.Consumer,g.a.createContext()),Xe=(Bt.Consumer,new Le),Wt=yt();function xn(){return Object(p.useContext)(nt)||Xe}function ot(){return Object(p.useContext)(Bt)||Wt}var Ge=function(){function U(W,V){var J=this;this.inject=function(ge,Re){Re===void 0&&(Re=Wt);var ye=J.name+Re.hash;ge.hasNameForId(J.id,ye)||ge.insertRules(J.id,ye,Re(J.rules,ye,"@keyframes"))},this.toString=function(){return X(12,String(J.name))},this.name=W,this.id="sc-keyframes-"+W,this.rules=V}return U.prototype.getName=function(W){return W===void 0&&(W=Wt),this.name+W.hash},U}(),z=/([A-Z])/,$=/([A-Z])/g,te=/^ms-/,ue=function(U){return"-"+U.toLowerCase()};function pe(U){return z.test(U)?U.replace($,ue).replace(te,"-ms-"):U}var se=function(U){return U==null||U===!1||U===""};function fe(U,W,V,J){if(Array.isArray(U)){for(var ge,Re=[],ye=0,De=U.length;ye<De;ye+=1)(ge=fe(U[ye],W,V,J))!==""&&(Array.isArray(ge)?Re.push.apply(Re,ge):Re.push(ge));return Re}return se(U)?"":Z(U)?"."+U.styledComponentId:D(U)?typeof(Ue=U)!="function"||Ue.prototype&&Ue.prototype.isReactComponent||!W?U:fe(U(W),W,V,J):U instanceof Ge?V?(U.inject(V,J),U.getName(J)):U:R(U)?function Qe(ht,Xt){var nn,Lt,at=[];for(var Je in ht)ht.hasOwnProperty(Je)&&!se(ht[Je])&&(R(ht[Je])?at.push.apply(at,Qe(ht[Je],Je)):D(ht[Je])?at.push(pe(Je)+":",ht[Je],";"):at.push(pe(Je)+": "+(nn=Je,((Lt=ht[Je])==null||typeof Lt=="boolean"||Lt===""?"":typeof Lt!="number"||Lt===0||nn in w.a?String(Lt).trim():Lt+"px")+";")));return Xt?[Xt+" {"].concat(at,["}"]):at}(U):U.toString();var Ue}function ze(U){for(var W=arguments.length,V=new Array(W>1?W-1:0),J=1;J<W;J++)V[J-1]=arguments[J];return D(U)||R(U)?fe(A(T,[U].concat(V))):V.length===0&&U.length===1&&typeof U[0]=="string"?U:fe(A(U,V))}var Ae=function(U,W,V){return V===void 0&&(V=N),U.theme!==V.theme&&U.theme||W||V.theme},ke=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ce=/(^-|-$)/g;function pt(U){return U.replace(ke,"-").replace(Ce,"")}var ct=function(U){return qe(Ot(U)>>>0)};function Ct(U){return typeof U=="string"&&!0}var qt=function(U){return typeof U=="function"||typeof U=="object"&&U!==null&&!Array.isArray(U)},en=function(U){return U!=="__proto__"&&U!=="constructor"&&U!=="prototype"};function wt(U,W,V){var J=U[V];qt(W)&&qt(J)?Gt(J,W):U[V]=W}function Gt(U){for(var W=arguments.length,V=new Array(W>1?W-1:0),J=1;J<W;J++)V[J-1]=arguments[J];for(var ge=0,Re=V;ge<Re.length;ge++){var ye=Re[ge];if(qt(ye))for(var De in ye)en(De)&&wt(U,ye[De],De)}return U}var Yt=g.a.createContext();Yt.Consumer;var Jn={};function tn(U,W,V){var J=Z(U),ge=!Ct(U),Re=W.attrs,ye=Re===void 0?T:Re,De=W.componentId,Ue=De===void 0?function(Ke,Nt){var Ze=typeof Ke!="string"?"sc":pt(Ke);Jn[Ze]=(Jn[Ze]||0)+1;var Ft=Ze+"-"+ct("5.2.1"+Ze+Jn[Ze]);return Nt?Nt+"-"+Ft:Ft}(W.displayName,W.parentComponentId):De,Qe=W.displayName,ht=Qe===void 0?function(Ke){return Ct(Ke)?"styled."+Ke:"Styled("+G(Ke)+")"}(U):Qe,Xt=W.displayName&&W.componentId?pt(W.displayName)+"-"+W.componentId:W.componentId||Ue,nn=J&&U.attrs?Array.prototype.concat(U.attrs,ye).filter(Boolean):ye,Lt=W.shouldForwardProp;J&&U.shouldForwardProp&&(Lt=W.shouldForwardProp?function(Ke,Nt){return U.shouldForwardProp(Ke,Nt)&&W.shouldForwardProp(Ke,Nt)}:U.shouldForwardProp);var at,Je=new Ve(V,Xt,J?U.componentStyle:void 0),mt=Je.isStatic&&ye.length===0,bt=function(Ke,Nt){return function(Ze,Ft,Wn,An){var fn=Ze.attrs,Qt=Ze.componentStyle,xa=Ze.defaultProps,Ea=Ze.foldedComponentIds,gi=Ze.shouldForwardProp,zr=Ze.styledComponentId,xi=Ze.target,qa=function(Bn,vi,na){Bn===void 0&&(Bn=N);var Un=B({},vi,{theme:Bn}),Ln={};return na.forEach(function(Hn){var jn,Ta,ut,qn=Hn;for(jn in D(qn)&&(qn=qn(Un)),qn)Un[jn]=Ln[jn]=jn==="className"?(Ta=Ln[jn],ut=qn[jn],Ta&&ut?Ta+" "+ut:Ta||ut):qn[jn]}),[Un,Ln]}(Ae(Ft,Object(p.useContext)(Yt),xa)||N,Ft,fn),$t=qa[0],st=qa[1],vn=function(Bn,vi,na,Un){var Ln=xn(),Hn=ot();return vi?Bn.generateAndInjectStyles(N,Ln,Hn):Bn.generateAndInjectStyles(na,Ln,Hn)}(Qt,An,$t),_n=Wn,Vn=st.$as||Ft.$as||st.as||Ft.as||xi,bi=Ct(Vn),ea=st!==Ft?B({},Ft,{},st):Ft,ta={};for(var Mt in ea)Mt[0]!=="$"&&Mt!=="as"&&(Mt==="forwardedAs"?ta.as=ea[Mt]:(gi?gi(Mt,C.a):!bi||Object(C.a)(Mt))&&(ta[Mt]=ea[Mt]));return Ft.style&&st.style!==Ft.style&&(ta.style=B({},Ft.style,{},st.style)),ta.className=Array.prototype.concat(Ea,zr,vn!==zr?vn:null,Ft.className,st.className).filter(Boolean).join(" "),ta.ref=_n,Object(p.createElement)(Vn,ta)}(at,Ke,Nt,mt)};return bt.displayName=ht,(at=g.a.forwardRef(bt)).attrs=nn,at.componentStyle=Je,at.displayName=ht,at.shouldForwardProp=Lt,at.foldedComponentIds=J?Array.prototype.concat(U.foldedComponentIds,U.styledComponentId):T,at.styledComponentId=Xt,at.target=J?U.target:U,at.withComponent=function(Ke){var Nt=W.componentId,Ze=function(Wn,An){if(Wn==null)return{};var fn,Qt,xa={},Ea=Object.keys(Wn);for(Qt=0;Qt<Ea.length;Qt++)fn=Ea[Qt],An.indexOf(fn)>=0||(xa[fn]=Wn[fn]);return xa}(W,["componentId"]),Ft=Nt&&Nt+"-"+(Ct(Ke)?Ke:pt(G(Ke)));return tn(Ke,B({},Ze,{attrs:nn,componentId:Ft}),V)},Object.defineProperty(at,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Ke){this._foldedDefaultProps=J?Gt({},U.defaultProps,Ke):Ke}}),at.toString=function(){return"."+at.styledComponentId},ge&&O()(at,U,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),at}var bn=function(U){return function W(V,J,ge){if(ge===void 0&&(ge=N),!Object(h.isValidElementType)(J))return X(1,String(J));var Re=function(){return V(J,ge,ze.apply(void 0,arguments))};return Re.withConfig=function(ye){return W(V,J,B({},ge,{},ye))},Re.attrs=function(ye){return W(V,J,B({},ge,{attrs:Array.prototype.concat(ge.attrs,ye).filter(Boolean)}))},Re}(tn,U)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(U){bn[U]=bn(U)}),c.a=bn}).call(this,u(9))},function(s,c,u){s.exports=u(10)},function(s,c,u){var f=u(2),h={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b={};function v(R){return f.isMemo(R)?g:b[R.$$typeof]||h}b[f.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},b[f.Memo]=g;var w=Object.defineProperty,C=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,O=Object.getOwnPropertyDescriptor,B=Object.getPrototypeOf,A=Object.prototype;s.exports=function R(T,N,D){if(typeof N!="string"){if(A){var G=B(N);G&&G!==A&&R(T,G,D)}var Z=C(N);E&&(Z=Z.concat(E(N)));for(var ae=v(T),Q=v(N),de=0;de<Z.length;++de){var X=Z[de];if(!(p[X]||D&&D[X]||Q&&Q[X]||ae&&ae[X])){var Pe=O(N,X);try{w(T,X,Pe)}catch{}}}}return T}},function(s,c,u){var f=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,h=function(p){var g={};return function(b){return g[b]===void 0&&(g[b]=p(b)),g[b]}}(function(p){return f.test(p)||p.charCodeAt(0)===111&&p.charCodeAt(1)===110&&p.charCodeAt(2)<91});c.a=h},function(s,c,u){var f;(function(){function h(z,$,te){return z.call.apply(z.bind,arguments)}function p(z,$,te){if(!z)throw Error();if(2<arguments.length){var ue=Array.prototype.slice.call(arguments,2);return function(){var pe=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(pe,ue),z.apply($,pe)}}return function(){return z.apply($,arguments)}}function g(z,$,te){return(g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p).apply(null,arguments)}var b=Date.now||function(){return+new Date};function v(z,$){this.a=z,this.o=$||z,this.c=this.o.document}var w=!!window.FontFace;function C(z,$,te,ue){if($=z.c.createElement($),te)for(var pe in te)te.hasOwnProperty(pe)&&(pe=="style"?$.style.cssText=te[pe]:$.setAttribute(pe,te[pe]));return ue&&$.appendChild(z.c.createTextNode(ue)),$}function E(z,$,te){(z=z.c.getElementsByTagName($)[0])||(z=document.documentElement),z.insertBefore(te,z.lastChild)}function O(z){z.parentNode&&z.parentNode.removeChild(z)}function B(z,$,te){$=$||[],te=te||[];for(var ue=z.className.split(/\s+/),pe=0;pe<$.length;pe+=1){for(var se=!1,fe=0;fe<ue.length;fe+=1)if($[pe]===ue[fe]){se=!0;break}se||ue.push($[pe])}for($=[],pe=0;pe<ue.length;pe+=1){for(se=!1,fe=0;fe<te.length;fe+=1)if(ue[pe]===te[fe]){se=!0;break}se||$.push(ue[pe])}z.className=$.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function A(z,$){for(var te=z.className.split(/\s+/),ue=0,pe=te.length;ue<pe;ue++)if(te[ue]==$)return!0;return!1}function R(z,$,te){function ue(){ze&&pe&&se&&(ze(fe),ze=null)}$=C(z,"link",{rel:"stylesheet",href:$,media:"all"});var pe=!1,se=!0,fe=null,ze=te||null;w?($.onload=function(){pe=!0,ue()},$.onerror=function(){pe=!0,fe=Error("Stylesheet failed to load"),ue()}):setTimeout(function(){pe=!0,ue()},0),E(z,"head",$)}function T(z,$,te,ue){var pe=z.c.getElementsByTagName("head")[0];if(pe){var se=C(z,"script",{src:$}),fe=!1;return se.onload=se.onreadystatechange=function(){fe||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(fe=!0,te&&te(null),se.onload=se.onreadystatechange=null,se.parentNode.tagName=="HEAD"&&pe.removeChild(se))},pe.appendChild(se),setTimeout(function(){fe||(fe=!0,te&&te(Error("Script load timeout")))},ue||5e3),se}return null}function N(){this.a=0,this.c=null}function D(z){return z.a++,function(){z.a--,Z(z)}}function G(z,$){z.c=$,Z(z)}function Z(z){z.a==0&&z.c&&(z.c(),z.c=null)}function ae(z){this.a=z||"-"}function Q(z,$){this.c=z,this.f=4,this.a="n";var te=($||"n4").match(/^([nio])([1-9])$/i);te&&(this.a=te[1],this.f=parseInt(te[2],10))}function de(z){var $=[];z=z.split(/,\s*/);for(var te=0;te<z.length;te++){var ue=z[te].replace(/['"]/g,"");ue.indexOf(" ")!=-1||/^\d/.test(ue)?$.push("'"+ue+"'"):$.push(ue)}return $.join(",")}function X(z){return z.a+z.f}function Pe(z){var $="normal";return z.a==="o"?$="oblique":z.a==="i"&&($="italic"),$}function rt(z){var $=4,te="n",ue=null;return z&&((ue=z.match(/(normal|oblique|italic)/i))&&ue[1]&&(te=ue[1].substr(0,1).toLowerCase()),(ue=z.match(/([1-9]00|normal|bold)/i))&&ue[1]&&(/bold/i.test(ue[1])?$=7:/[1-9]00/.test(ue[1])&&($=parseInt(ue[1].substr(0,1),10)))),te+$}function Y(z,$){this.c=z,this.f=z.o.document.documentElement,this.h=$,this.a=new ae("-"),this.j=$.events!==!1,this.g=$.classes!==!1}function je(z){if(z.g){var $=A(z.f,z.a.c("wf","active")),te=[],ue=[z.a.c("wf","loading")];$||te.push(z.a.c("wf","inactive")),B(z.f,te,ue)}K(z,"inactive")}function K(z,$,te){z.j&&z.h[$]&&(te?z.h[$](te.c,X(te)):z.h[$]())}function I(){this.c={}}function re(z,$){this.c=z,this.f=$,this.a=C(this.c,"span",{"aria-hidden":"true"},this.f)}function xe(z){E(z.c,"body",z.a)}function M(z){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+de(z.c)+";font-style:"+Pe(z)+";font-weight:"+z.f+"00;"}function ie(z,$,te,ue,pe,se){this.g=z,this.j=$,this.a=ue,this.c=te,this.f=pe||3e3,this.h=se||void 0}function be(z,$,te,ue,pe,se,fe){this.v=z,this.B=$,this.c=te,this.a=ue,this.s=fe||"BESbswy",this.f={},this.w=pe||3e3,this.u=se||null,this.m=this.j=this.h=this.g=null,this.g=new re(this.c,this.s),this.h=new re(this.c,this.s),this.j=new re(this.c,this.s),this.m=new re(this.c,this.s),z=M(z=new Q(this.a.c+",serif",X(this.a))),this.g.a.style.cssText=z,z=M(z=new Q(this.a.c+",sans-serif",X(this.a))),this.h.a.style.cssText=z,z=M(z=new Q("serif",X(this.a))),this.j.a.style.cssText=z,z=M(z=new Q("sans-serif",X(this.a))),this.m.a.style.cssText=z,xe(this.g),xe(this.h),xe(this.j),xe(this.m)}ae.prototype.c=function(z){for(var $=[],te=0;te<arguments.length;te++)$.push(arguments[te].replace(/[\W_]+/g,"").toLowerCase());return $.join(this.a)},ie.prototype.start=function(){var z=this.c.o.document,$=this,te=b(),ue=new Promise(function(fe,ze){(function Ae(){b()-te>=$.f?ze():z.fonts.load(function(ke){return Pe(ke)+" "+ke.f+"00 300px "+de(ke.c)}($.a),$.h).then(function(ke){1<=ke.length?fe():setTimeout(Ae,25)},function(){ze()})})()}),pe=null,se=new Promise(function(fe,ze){pe=setTimeout(ze,$.f)});Promise.race([se,ue]).then(function(){pe&&(clearTimeout(pe),pe=null),$.g($.a)},function(){$.j($.a)})};var we={D:"serif",C:"sans-serif"},me=null;function he(){if(me===null){var z=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);me=!!z&&(536>parseInt(z[1],10)||parseInt(z[1],10)===536&&11>=parseInt(z[2],10))}return me}function le(z,$,te){for(var ue in we)if(we.hasOwnProperty(ue)&&$===z.f[we[ue]]&&te===z.f[we[ue]])return!0;return!1}function Te(z){var $,te=z.g.a.offsetWidth,ue=z.h.a.offsetWidth;($=te===z.f.serif&&ue===z.f["sans-serif"])||($=he()&&le(z,te,ue)),$?b()-z.A>=z.w?he()&&le(z,te,ue)&&(z.u===null||z.u.hasOwnProperty(z.a.c))?Se(z,z.v):Se(z,z.B):function(pe){setTimeout(g(function(){Te(this)},pe),50)}(z):Se(z,z.v)}function Se(z,$){setTimeout(g(function(){O(this.g.a),O(this.h.a),O(this.j.a),O(this.m.a),$(this.a)},z),0)}function H(z,$,te){this.c=z,this.a=$,this.f=0,this.m=this.j=!1,this.s=te}be.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=b(),Te(this)};var Le=null;function ve(z){--z.f==0&&z.j&&(z.m?((z=z.a).g&&B(z.f,[z.a.c("wf","active")],[z.a.c("wf","loading"),z.a.c("wf","inactive")]),K(z,"active")):je(z.a))}function et(z){this.j=z,this.a=new I,this.h=0,this.f=this.g=!0}function qe(z,$,te,ue,pe){var se=--z.h==0;(z.f||z.g)&&setTimeout(function(){var fe=pe||null,ze=ue||{};if(te.length===0&&se)je($.a);else{$.f+=te.length,se&&($.j=se);var Ae,ke=[];for(Ae=0;Ae<te.length;Ae++){var Ce=te[Ae],pt=ze[Ce.c],ct=$.a,Ct=Ce;if(ct.g&&B(ct.f,[ct.a.c("wf",Ct.c,X(Ct).toString(),"loading")]),K(ct,"fontloading",Ct),ct=null,Le===null)if(window.FontFace){Ct=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var qt=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);Le=Ct?42<parseInt(Ct[1],10):!qt}else Le=!1;ct=Le?new ie(g($.g,$),g($.h,$),$.c,Ce,$.s,pt):new be(g($.g,$),g($.h,$),$.c,Ce,$.s,fe,pt),ke.push(ct)}for(Ae=0;Ae<ke.length;Ae++)ke[Ae].start()}},0)}function ft(z,$){this.c=z,this.a=$}function Ot(z,$){this.c=z,this.a=$}function _e(z,$){this.c=z||Me,this.a=[],this.f=[],this.g=$||""}H.prototype.g=function(z){var $=this.a;$.g&&B($.f,[$.a.c("wf",z.c,X(z).toString(),"active")],[$.a.c("wf",z.c,X(z).toString(),"loading"),$.a.c("wf",z.c,X(z).toString(),"inactive")]),K($,"fontactive",z),this.m=!0,ve(this)},H.prototype.h=function(z){var $=this.a;if($.g){var te=A($.f,$.a.c("wf",z.c,X(z).toString(),"active")),ue=[],pe=[$.a.c("wf",z.c,X(z).toString(),"loading")];te||ue.push($.a.c("wf",z.c,X(z).toString(),"inactive")),B($.f,ue,pe)}K($,"fontinactive",z),ve(this)},et.prototype.load=function(z){this.c=new v(this.j,z.context||this.j),this.g=z.events!==!1,this.f=z.classes!==!1,function($,te,ue){var pe=[],se=ue.timeout;(function(ze){ze.g&&B(ze.f,[ze.a.c("wf","loading")]),K(ze,"loading")})(te),pe=function(ze,Ae,ke){var Ce,pt=[];for(Ce in Ae)if(Ae.hasOwnProperty(Ce)){var ct=ze.c[Ce];ct&&pt.push(ct(Ae[Ce],ke))}return pt}($.a,ue,$.c);var fe=new H($.c,te,se);for($.h=pe.length,te=0,ue=pe.length;te<ue;te++)pe[te].load(function(ze,Ae,ke){qe($,fe,ze,Ae,ke)})}(this,new Y(this.c,z),z)},ft.prototype.load=function(z){var $=this,te=$.a.projectId,ue=$.a.version;if(te){var pe=$.c.o;T(this.c,($.a.api||"https://fast.fonts.net/jsapi")+"/"+te+".js"+(ue?"?v="+ue:""),function(se){se?z([]):(pe["__MonotypeConfiguration__"+te]=function(){return $.a},function fe(){if(pe["__mti_fntLst"+te]){var ze,Ae=pe["__mti_fntLst"+te](),ke=[];if(Ae)for(var Ce=0;Ce<Ae.length;Ce++){var pt=Ae[Ce].fontfamily;Ae[Ce].fontStyle!=null&&Ae[Ce].fontWeight!=null?(ze=Ae[Ce].fontStyle+Ae[Ce].fontWeight,ke.push(new Q(pt,ze))):ke.push(new Q(pt))}z(ke)}else setTimeout(function(){fe()},50)}())}).id="__MonotypeAPIScript__"+te}else z([])},Ot.prototype.load=function(z){var $,te,ue=this.a.urls||[],pe=this.a.families||[],se=this.a.testStrings||{},fe=new N;for($=0,te=ue.length;$<te;$++)R(this.c,ue[$],D(fe));var ze=[];for($=0,te=pe.length;$<te;$++)if((ue=pe[$].split(":"))[1])for(var Ae=ue[1].split(","),ke=0;ke<Ae.length;ke+=1)ze.push(new Q(ue[0],Ae[ke]));else ze.push(new Q(ue[0]));G(fe,function(){z(ze,se)})};var Me="https://fonts.googleapis.com/css";function Ve(z){this.f=z,this.a=[],this.c={}}var vt={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Ht={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},yt={i:"i",italic:"i",n:"n",normal:"n"},nt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Bt(z,$){this.c=z,this.a=$}var Xe={Arimo:!0,Cousine:!0,Tinos:!0};function Wt(z,$){this.c=z,this.a=$}function xn(z,$){this.c=z,this.f=$,this.a=[]}Bt.prototype.load=function(z){var $=new N,te=this.c,ue=new _e(this.a.api,this.a.text),pe=this.a.families;(function(fe,ze){for(var Ae=ze.length,ke=0;ke<Ae;ke++){var Ce=ze[ke].split(":");Ce.length==3&&fe.f.push(Ce.pop());var pt="";Ce.length==2&&Ce[1]!=""&&(pt=":"),fe.a.push(Ce.join(pt))}})(ue,pe);var se=new Ve(pe);(function(fe){for(var ze=fe.f.length,Ae=0;Ae<ze;Ae++){var ke=fe.f[Ae].split(":"),Ce=ke[0].replace(/\+/g," "),pt=["n4"];if(2<=ke.length){var ct;if(ct=[],Ct=ke[1])for(var Ct,qt=(Ct=Ct.split(",")).length,en=0;en<qt;en++){var wt;if((wt=Ct[en]).match(/^[\w-]+$/))if((Yt=nt.exec(wt.toLowerCase()))==null)wt="";else{if(wt=(wt=Yt[2])==null||wt==""?"n":yt[wt],(Yt=Yt[1])==null||Yt=="")Yt="4";else var Gt=Ht[Yt],Yt=Gt||(isNaN(Yt)?"4":Yt.substr(0,1));wt=[wt,Yt].join("")}else wt="";wt&&ct.push(wt)}0<ct.length&&(pt=ct),ke.length==3&&(ct=[],0<(ke=(ke=ke[2])?ke.split(","):ct).length&&(ke=vt[ke[0]])&&(fe.c[Ce]=ke))}for(fe.c[Ce]||(ke=vt[Ce])&&(fe.c[Ce]=ke),ke=0;ke<pt.length;ke+=1)fe.a.push(new Q(Ce,pt[ke]))}})(se),R(te,function(fe){if(fe.a.length==0)throw Error("No fonts to load!");if(fe.c.indexOf("kit=")!=-1)return fe.c;for(var ze=fe.a.length,Ae=[],ke=0;ke<ze;ke++)Ae.push(fe.a[ke].replace(/ /g,"+"));return ze=fe.c+"?family="+Ae.join("%7C"),0<fe.f.length&&(ze+="&subset="+fe.f.join(",")),0<fe.g.length&&(ze+="&text="+encodeURIComponent(fe.g)),ze}(ue),D($)),G($,function(){z(se.a,se.c,Xe)})},Wt.prototype.load=function(z){var $=this.a.id,te=this.c.o;$?T(this.c,(this.a.api||"https://use.typekit.net")+"/"+$+".js",function(ue){if(ue)z([]);else if(te.Typekit&&te.Typekit.config&&te.Typekit.config.fn){ue=te.Typekit.config.fn;for(var pe=[],se=0;se<ue.length;se+=2)for(var fe=ue[se],ze=ue[se+1],Ae=0;Ae<ze.length;Ae++)pe.push(new Q(fe,ze[Ae]));try{te.Typekit.load({events:!1,classes:!1,async:!0})}catch{}z(pe)}},2e3):z([])},xn.prototype.load=function(z){var $=this.f.id,te=this.c.o,ue=this;$?(te.__webfontfontdeckmodule__||(te.__webfontfontdeckmodule__={}),te.__webfontfontdeckmodule__[$]=function(pe,se){for(var fe=0,ze=se.fonts.length;fe<ze;++fe){var Ae=se.fonts[fe];ue.a.push(new Q(Ae.name,rt("font-weight:"+Ae.weight+";font-style:"+Ae.style)))}z(ue.a)},T(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(pe){return pe.o.location.hostname||pe.a.location.hostname}(this.c)+"/"+$+".js",function(pe){pe&&z([])})):z([])};var ot=new et(window);ot.a.c.custom=function(z,$){return new Ot($,z)},ot.a.c.fontdeck=function(z,$){return new xn($,z)},ot.a.c.monotype=function(z,$){return new ft($,z)},ot.a.c.typekit=function(z,$){return new Wt($,z)},ot.a.c.google=function(z,$){return new Bt($,z)};var Ge={load:g(ot.load,ot)};(f=(function(){return Ge}).call(c,u,c,s))===void 0||(s.exports=f)})()},function(s,c){s.exports=function(u,f,h,p){var g=h?h.call(p,u,f):void 0;if(g!==void 0)return!!g;if(u===f)return!0;if(typeof u!="object"||!u||typeof f!="object"||!f)return!1;var b=Object.keys(u),v=Object.keys(f);if(b.length!==v.length)return!1;for(var w=Object.prototype.hasOwnProperty.bind(f),C=0;C<b.length;C++){var E=b[C];if(!w(E))return!1;var O=u[E],B=f[E];if((g=h?h.call(p,O,B,E):void 0)===!1||g===void 0&&O!==B)return!1}return!0}},function(s,c,u){c.a=function(f){function h(he,le,Te){var Se=le.trim().split(N);le=Se;var H=Se.length,Le=he.length;switch(Le){case 0:case 1:var ve=0;for(he=Le===0?"":he[0]+" ";ve<H;++ve)le[ve]=p(he,le[ve],Te).trim();break;default:var et=ve=0;for(le=[];ve<H;++ve)for(var qe=0;qe<Le;++qe)le[et++]=p(he[qe]+" ",Se[ve],Te).trim()}return le}function p(he,le,Te){var Se=le.charCodeAt(0);switch(33>Se&&(Se=(le=le.trim()).charCodeAt(0)),Se){case 38:return le.replace(D,"$1"+he.trim());case 58:return he.trim()+le.replace(D,"$1"+he.trim());default:if(0<1*Te&&0<le.indexOf("\f"))return le.replace(D,(he.charCodeAt(0)===58?"":"$1")+he.trim())}return he+le}function g(he,le,Te,Se){var H=he+";",Le=2*le+3*Te+4*Se;if(Le===944){he=H.indexOf(":",9)+1;var ve=H.substring(he,H.length-1).trim();return ve=H.substring(0,he).trim()+ve+";",xe===1||xe===2&&b(ve,1)?"-webkit-"+ve+ve:ve}if(xe===0||xe===2&&!b(H,1))return H;switch(Le){case 1015:return H.charCodeAt(10)===97?"-webkit-"+H+H:H;case 951:return H.charCodeAt(3)===116?"-webkit-"+H+H:H;case 963:return H.charCodeAt(5)===110?"-webkit-"+H+H:H;case 1009:if(H.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+H+H;case 978:return"-webkit-"+H+"-moz-"+H+H;case 1019:case 983:return"-webkit-"+H+"-moz-"+H+"-ms-"+H+H;case 883:if(H.charCodeAt(8)===45)return"-webkit-"+H+H;if(0<H.indexOf("image-set(",11))return H.replace(je,"$1-webkit-$2")+H;break;case 932:if(H.charCodeAt(4)===45)switch(H.charCodeAt(5)){case 103:return"-webkit-box-"+H.replace("-grow","")+"-webkit-"+H+"-ms-"+H.replace("grow","positive")+H;case 115:return"-webkit-"+H+"-ms-"+H.replace("shrink","negative")+H;case 98:return"-webkit-"+H+"-ms-"+H.replace("basis","preferred-size")+H}return"-webkit-"+H+"-ms-"+H+H;case 964:return"-webkit-"+H+"-ms-flex-"+H+H;case 1023:if(H.charCodeAt(8)!==99)break;return"-webkit-box-pack"+(ve=H.substring(H.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+H+"-ms-flex-pack"+ve+H;case 1005:return R.test(H)?H.replace(A,":-webkit-")+H.replace(A,":-moz-")+H:H;case 1e3:switch(le=(ve=H.substring(13).trim()).indexOf("-")+1,ve.charCodeAt(0)+ve.charCodeAt(le)){case 226:ve=H.replace(Q,"tb");break;case 232:ve=H.replace(Q,"tb-rl");break;case 220:ve=H.replace(Q,"lr");break;default:return H}return"-webkit-"+H+"-ms-"+ve+H;case 1017:if(H.indexOf("sticky",9)===-1)break;case 975:switch(le=(H=he).length-10,Le=(ve=(H.charCodeAt(le)===33?H.substring(0,le):H).substring(he.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|ve.charCodeAt(7))){case 203:if(111>ve.charCodeAt(8))break;case 115:H=H.replace(ve,"-webkit-"+ve)+";"+H;break;case 207:case 102:H=H.replace(ve,"-webkit-"+(102<Le?"inline-":"")+"box")+";"+H.replace(ve,"-webkit-"+ve)+";"+H.replace(ve,"-ms-"+ve+"box")+";"+H}return H+";";case 938:if(H.charCodeAt(5)===45)switch(H.charCodeAt(6)){case 105:return ve=H.replace("-items",""),"-webkit-"+H+"-webkit-box-"+ve+"-ms-flex-"+ve+H;case 115:return"-webkit-"+H+"-ms-flex-item-"+H.replace(Pe,"")+H;default:return"-webkit-"+H+"-ms-flex-line-pack"+H.replace("align-content","").replace(Pe,"")+H}break;case 973:case 989:if(H.charCodeAt(3)!==45||H.charCodeAt(4)===122)break;case 931:case 953:if(Y.test(he)===!0)return(ve=he.substring(he.indexOf(":")+1)).charCodeAt(0)===115?g(he.replace("stretch","fill-available"),le,Te,Se).replace(":fill-available",":stretch"):H.replace(ve,"-webkit-"+ve)+H.replace(ve,"-moz-"+ve.replace("fill-",""))+H;break;case 962:if(H="-webkit-"+H+(H.charCodeAt(5)===102?"-ms-"+H:"")+H,Te+Se===211&&H.charCodeAt(13)===105&&0<H.indexOf("transform",10))return H.substring(0,H.indexOf(";",27)+1).replace(T,"$1-webkit-$2")+H}return H}function b(he,le){var Te=he.indexOf(le===1?":":"{"),Se=he.substring(0,le!==3?Te:10);return Te=he.substring(Te+1,he.length-1),we(le!==2?Se:Se.replace(rt,"$1"),Te,le)}function v(he,le){var Te=g(le,le.charCodeAt(0),le.charCodeAt(1),le.charCodeAt(2));return Te!==le+";"?Te.replace(X," or ($1)").substring(4):"("+le+")"}function w(he,le,Te,Se,H,Le,ve,et,qe,ft){for(var Ot,_e=0,Me=le;_e<be;++_e)switch(Ot=ie[_e].call(E,he,Me,Te,Se,H,Le,ve,et,qe,ft)){case void 0:case!1:case!0:case null:break;default:Me=Ot}if(Me!==le)return Me}function C(he){return(he=he.prefix)!==void 0&&(we=null,he?typeof he!="function"?xe=1:(xe=2,we=he):xe=0),C}function E(he,le){var Te=he;if(33>Te.charCodeAt(0)&&(Te=Te.trim()),Te=[Te],0<be){var Se=w(-1,le,Te,Te,I,K,0,0,0,0);Se!==void 0&&typeof Se=="string"&&(le=Se)}var H=function Le(ve,et,qe,ft,Ot){for(var _e,Me,Ve,vt,Ht,yt=0,nt=0,Bt=0,Xe=0,Wt=0,xn=0,ot=Ve=_e=0,Ge=0,z=0,$=0,te=0,ue=qe.length,pe=ue-1,se="",fe="",ze="",Ae="";Ge<ue;){if(Me=qe.charCodeAt(Ge),Ge===pe&&nt+Xe+Bt+yt!==0&&(nt!==0&&(Me=nt===47?10:47),Xe=Bt=yt=0,ue++,pe++),nt+Xe+Bt+yt===0){if(Ge===pe&&(0<z&&(se=se.replace(B,"")),0<se.trim().length)){switch(Me){case 32:case 9:case 59:case 13:case 10:break;default:se+=qe.charAt(Ge)}Me=59}switch(Me){case 123:for(_e=(se=se.trim()).charCodeAt(0),Ve=1,te=++Ge;Ge<ue;){switch(Me=qe.charCodeAt(Ge)){case 123:Ve++;break;case 125:Ve--;break;case 47:switch(Me=qe.charCodeAt(Ge+1)){case 42:case 47:e:{for(ot=Ge+1;ot<pe;++ot)switch(qe.charCodeAt(ot)){case 47:if(Me===42&&qe.charCodeAt(ot-1)===42&&Ge+2!==ot){Ge=ot+1;break e}break;case 10:if(Me===47){Ge=ot+1;break e}}Ge=ot}}break;case 91:Me++;case 40:Me++;case 34:case 39:for(;Ge++<pe&&qe.charCodeAt(Ge)!==Me;);}if(Ve===0)break;Ge++}switch(Ve=qe.substring(te,Ge),_e===0&&(_e=(se=se.replace(O,"").trim()).charCodeAt(0)),_e){case 64:switch(0<z&&(se=se.replace(B,"")),Me=se.charCodeAt(1)){case 100:case 109:case 115:case 45:z=et;break;default:z=M}if(te=(Ve=Le(et,z,Ve,Me,Ot+1)).length,0<be&&(Ht=w(3,Ve,z=h(M,se,$),et,I,K,te,Me,Ot,ft),se=z.join(""),Ht!==void 0&&(te=(Ve=Ht.trim()).length)===0&&(Me=0,Ve="")),0<te)switch(Me){case 115:se=se.replace(de,v);case 100:case 109:case 45:Ve=se+"{"+Ve+"}";break;case 107:Ve=(se=se.replace(G,"$1 $2"))+"{"+Ve+"}",Ve=xe===1||xe===2&&b("@"+Ve,3)?"@-webkit-"+Ve+"@"+Ve:"@"+Ve;break;default:Ve=se+Ve,ft===112&&(fe+=Ve,Ve="")}else Ve="";break;default:Ve=Le(et,h(et,se,$),Ve,ft,Ot+1)}ze+=Ve,Ve=$=z=ot=_e=0,se="",Me=qe.charCodeAt(++Ge);break;case 125:case 59:if(1<(te=(se=(0<z?se.replace(B,""):se).trim()).length))switch(ot===0&&(_e=se.charCodeAt(0),_e===45||96<_e&&123>_e)&&(te=(se=se.replace(" ",":")).length),0<be&&(Ht=w(1,se,et,ve,I,K,fe.length,ft,Ot,ft))!==void 0&&(te=(se=Ht.trim()).length)===0&&(se="\0\0"),_e=se.charCodeAt(0),Me=se.charCodeAt(1),_e){case 0:break;case 64:if(Me===105||Me===99){Ae+=se+qe.charAt(Ge);break}default:se.charCodeAt(te-1)!==58&&(fe+=g(se,_e,Me,se.charCodeAt(2)))}$=z=ot=_e=0,se="",Me=qe.charCodeAt(++Ge)}}switch(Me){case 13:case 10:nt===47?nt=0:1+_e===0&&ft!==107&&0<se.length&&(z=1,se+="\0"),0<be*me&&w(0,se,et,ve,I,K,fe.length,ft,Ot,ft),K=1,I++;break;case 59:case 125:if(nt+Xe+Bt+yt===0){K++;break}default:switch(K++,vt=qe.charAt(Ge),Me){case 9:case 32:if(Xe+yt+nt===0)switch(Wt){case 44:case 58:case 9:case 32:vt="";break;default:Me!==32&&(vt=" ")}break;case 0:vt="\\0";break;case 12:vt="\\f";break;case 11:vt="\\v";break;case 38:Xe+nt+yt===0&&(z=$=1,vt="\f"+vt);break;case 108:if(Xe+nt+yt+re===0&&0<ot)switch(Ge-ot){case 2:Wt===112&&qe.charCodeAt(Ge-3)===58&&(re=Wt);case 8:xn===111&&(re=xn)}break;case 58:Xe+nt+yt===0&&(ot=Ge);break;case 44:nt+Bt+Xe+yt===0&&(z=1,vt+="\r");break;case 34:case 39:nt===0&&(Xe=Xe===Me?0:Xe===0?Me:Xe);break;case 91:Xe+nt+Bt===0&&yt++;break;case 93:Xe+nt+Bt===0&&yt--;break;case 41:Xe+nt+yt===0&&Bt--;break;case 40:if(Xe+nt+yt===0){if(_e===0)switch(2*Wt+3*xn){case 533:break;default:_e=1}Bt++}break;case 64:nt+Bt+Xe+yt+ot+Ve===0&&(Ve=1);break;case 42:case 47:if(!(0<Xe+yt+Bt))switch(nt){case 0:switch(2*Me+3*qe.charCodeAt(Ge+1)){case 235:nt=47;break;case 220:te=Ge,nt=42}break;case 42:Me===47&&Wt===42&&te+2!==Ge&&(qe.charCodeAt(te+2)===33&&(fe+=qe.substring(te,Ge+1)),vt="",nt=0)}}nt===0&&(se+=vt)}xn=Wt,Wt=Me,Ge++}if(0<(te=fe.length)){if(z=et,0<be&&(Ht=w(2,fe,z,ve,I,K,te,ft,Ot,ft))!==void 0&&(fe=Ht).length===0)return Ae+fe+ze;if(fe=z.join(",")+"{"+fe+"}",xe*re!=0){switch(xe!==2||b(fe,2)||(re=0),re){case 111:fe=fe.replace(ae,":-moz-$1")+fe;break;case 112:fe=fe.replace(Z,"::-webkit-input-$1")+fe.replace(Z,"::-moz-$1")+fe.replace(Z,":-ms-input-$1")+fe}re=0}}return Ae+fe+ze}(M,Te,le,0,0);return 0<be&&(Se=w(-2,H,Te,Te,I,K,H.length,0,0,0))!==void 0&&(H=Se),re=0,K=I=1,H}var O=/^\0+/g,B=/[\0\r\f]/g,A=/: */g,R=/zoo|gra/,T=/([,: ])(transform)/g,N=/,\r+?/g,D=/([\t\r\n ])*\f?&/g,G=/@(k\w+)\s*(\S*)\s*/,Z=/::(place)/g,ae=/:(read-only)/g,Q=/[svh]\w+-[tblr]{2}/,de=/\(\s*(.*)\s*\)/g,X=/([\s\S]*?);/g,Pe=/-self|flex-/g,rt=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Y=/stretch|:\s*\w+\-(?:conte|avail)/,je=/([^-])(image-set\()/,K=1,I=1,re=0,xe=1,M=[],ie=[],be=0,we=null,me=0;return E.use=function he(le){switch(le){case void 0:case null:be=ie.length=0;break;default:if(typeof le=="function")ie[be++]=le;else if(typeof le=="object")for(var Te=0,Se=le.length;Te<Se;++Te)he(le[Te]);else me=0|!!le}return he},E.set=C,f!==void 0&&C(f),E}},function(s,c,u){c.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},function(s,c){var u,f,h=s.exports={};function p(){throw new Error("setTimeout has not been defined")}function g(){throw new Error("clearTimeout has not been defined")}function b(T){if(u===setTimeout)return setTimeout(T,0);if((u===p||!u)&&setTimeout)return u=setTimeout,setTimeout(T,0);try{return u(T,0)}catch{try{return u.call(null,T,0)}catch{return u.call(this,T,0)}}}(function(){try{u=typeof setTimeout=="function"?setTimeout:p}catch{u=p}try{f=typeof clearTimeout=="function"?clearTimeout:g}catch{f=g}})();var v,w=[],C=!1,E=-1;function O(){C&&v&&(C=!1,v.length?w=v.concat(w):E=-1,w.length&&B())}function B(){if(!C){var T=b(O);C=!0;for(var N=w.length;N;){for(v=w,w=[];++E<N;)v&&v[E].run();E=-1,N=w.length}v=null,C=!1,function(D){if(f===clearTimeout)return clearTimeout(D);if((f===g||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(D);try{f(D)}catch{try{return f.call(null,D)}catch{return f.call(this,D)}}}(T)}}function A(T,N){this.fun=T,this.array=N}function R(){}h.nextTick=function(T){var N=new Array(arguments.length-1);if(arguments.length>1)for(var D=1;D<arguments.length;D++)N[D-1]=arguments[D];w.push(new A(T,N)),w.length!==1||C||b(B)},A.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=R,h.addListener=R,h.once=R,h.off=R,h.removeListener=R,h.removeAllListeners=R,h.emit=R,h.prependListener=R,h.prependOnceListener=R,h.listeners=function(T){return[]},h.binding=function(T){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(T){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(s,c,u){/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var f=typeof Symbol=="function"&&Symbol.for,h=f?Symbol.for("react.element"):60103,p=f?Symbol.for("react.portal"):60106,g=f?Symbol.for("react.fragment"):60107,b=f?Symbol.for("react.strict_mode"):60108,v=f?Symbol.for("react.profiler"):60114,w=f?Symbol.for("react.provider"):60109,C=f?Symbol.for("react.context"):60110,E=f?Symbol.for("react.async_mode"):60111,O=f?Symbol.for("react.concurrent_mode"):60111,B=f?Symbol.for("react.forward_ref"):60112,A=f?Symbol.for("react.suspense"):60113,R=f?Symbol.for("react.suspense_list"):60120,T=f?Symbol.for("react.memo"):60115,N=f?Symbol.for("react.lazy"):60116,D=f?Symbol.for("react.block"):60121,G=f?Symbol.for("react.fundamental"):60117,Z=f?Symbol.for("react.responder"):60118,ae=f?Symbol.for("react.scope"):60119;function Q(X){if(typeof X=="object"&&X!==null){var Pe=X.$$typeof;switch(Pe){case h:switch(X=X.type){case E:case O:case g:case v:case b:case A:return X;default:switch(X=X&&X.$$typeof){case C:case B:case N:case T:case w:return X;default:return Pe}}case p:return Pe}}}function de(X){return Q(X)===O}c.AsyncMode=E,c.ConcurrentMode=O,c.ContextConsumer=C,c.ContextProvider=w,c.Element=h,c.ForwardRef=B,c.Fragment=g,c.Lazy=N,c.Memo=T,c.Portal=p,c.Profiler=v,c.StrictMode=b,c.Suspense=A,c.isAsyncMode=function(X){return de(X)||Q(X)===E},c.isConcurrentMode=de,c.isContextConsumer=function(X){return Q(X)===C},c.isContextProvider=function(X){return Q(X)===w},c.isElement=function(X){return typeof X=="object"&&X!==null&&X.$$typeof===h},c.isForwardRef=function(X){return Q(X)===B},c.isFragment=function(X){return Q(X)===g},c.isLazy=function(X){return Q(X)===N},c.isMemo=function(X){return Q(X)===T},c.isPortal=function(X){return Q(X)===p},c.isProfiler=function(X){return Q(X)===v},c.isStrictMode=function(X){return Q(X)===b},c.isSuspense=function(X){return Q(X)===A},c.isValidElementType=function(X){return typeof X=="string"||typeof X=="function"||X===g||X===O||X===v||X===b||X===A||X===R||typeof X=="object"&&X!==null&&(X.$$typeof===N||X.$$typeof===T||X.$$typeof===w||X.$$typeof===C||X.$$typeof===B||X.$$typeof===G||X.$$typeof===Z||X.$$typeof===ae||X.$$typeof===D)},c.typeOf=Q},function(s,c,u){u.r(c),u.d(c,"Wheel",function(){return rt});var f=u(0),h=u.n(f),p=u(5),g=u.n(p);const b=["darkgrey","lightgrey"],v=["black"],w=["arial","verdana","tahoma","trebuchet ms","times","garamond","brush script mt","courier new","georgia","helvetica","times new roman","serif","sans-serif","monospace","cursive","fantasy"];var C=function(Y,je,K){K===void 0&&(K=!0);var I=360/je,re=43+I/2,xe=(2*Math.random()-1)*I*.35,M=K?I*(je-Y)-re+xe:I*(je-Y)-re;return je-Y>je/2?-360+M:M},E=function(Y,je,K){return Math.min(Math.max(Y,+K),je)},O=function(Y){return!!Y&&!w.includes(Y.toLowerCase())},B=function(Y){return Y.slice(-1)[0].slice(-1)[0]+1},A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";const R=new Image;R.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAENCAMAAADwnMpiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACZUExURUdwTP+OROJKK+JKK/6PReJKK/+QQ+JKK+JKK+JKK+JKK/2MQ/+LRv2LQeNLK+JKK/BrNuRNLPyJQeNLK/d+PfFvN/iFQONLK/BtOPV3OvmCPfFxOPR4PeNMLO5oNexiNPmBPudVL+hXL+pcMepfMuZSLvV7PORPLPFyPedULuhYMOpfM+5nNetdMfupXexhM+2dRuNOLeJKK+Smm3cAAAAydFJOUwAY9Okb+hT+8f3uIRYm5fdz1yvdQWQx4mtRNV1L0HqNOsOwo5W6RcRWz6qGgLYFnA6eKwdCNwAACLhJREFUGBntwNeSg8C1BdANdHMaGLJyzprRaNL+/4+7df1iV7lsgyI0Wnh5eXl5eXl5eXl5+S/8t3jQG/ez5W779bX+f1+b7fI8ms4mseOjS5yo937erk0aCP+FCP9BJHU/NstpL3JgPSeeZafc1SIkhf+FiDYf29EheoOlfLXq/+RGC4WVSertF+PoDbZRg9HP0ATC+kRc7zQaOLCGH83OH6EWXk50eDxPFCzgR++7oRHh1XS4ziYO2k31PksjwpsQSb1NP/bRVm9FtjaaNyWmXPYU2kj1dqUrvLkg8DbjCG0TvW88zTsJzHoU+2gPP+qvTcA7CkyeFW9oibg/94R3JibPCh8tEE2PYcAHkDDvx2g6NduHAR8kMMd3hSZ7m2wTzQcKvFPPQWPFWenywdLhcuCjkdRsbQI+nsn7EZrHL5aJ5lME4WbloGHUbG74LJKWWYxGic9JyicKwn3PQWP4q00ofK60zGI0hHrPXT5dEG5WPpogWgw1m8DNpwrPV+y8gM2gk2WMJ/NXeyNsCgk3Ex/P5PTmLpvEzHsOnkeNS5fN4uZjhWdR0zJl06TlVOE51Gio2Tx62Fd4BtUfajaRTrIIj6f6Q81mCpJFhEdT/aFmU4n3GeGx1LTUbDBvGeGRnHGp2Wjep8Lj+L08ZcMlmcLDTOYumy4YTh08SLE3bD5dHnw8RLQzbAN3PsEjqMwTtoK7KXB//ngYsCXMMsLdTfKUbSHeSOHO4o3L9gjKg4+7UouQbZLOB7gnf5YIW8VsI9xRMU/ZMuHIwd2onWHbBGUPdzNL2D7pusCdxEfNFjKfCnfxlhm2kSRjH/ewKgO2UjovcAdqm7KlzFLh9sYeWyuZ4ebivWZr6WOMG/Onhi1msjfcVpEHbLGgXOGmnEXIVku3CrdUlMJWE+8dN+QsDFtOH2PcTlEK2870fdyKnxm2XpAXuJU4F7afOTu4kZGhBaQc4DaitdAG7qeDmxgbWkHKCW5BbQLaIf10cAM9j5aQcoDrvS01beEufFytKGkNyWNcLXNpDzPCtaK90B6yV7jSwdAm4QHXedtp2kTv3nCVoqRdyhhXGbm0izvCNdReaBfZO7hCL6Rtwgku539q2kYvcLkop32OChd7N7RPuMKlnJ3QPnqBS8WJ0D6ydnChvksbhQNcxtkKbaT7uEzh0Uqy9XGRUUo7JREu4ZyEdjIHXKLwaCkZ4RKjlJaSrY/6nI3QVomD+gqP1jIT1DdKaa1gjNqcjdBackZthUeLbVDbKKXFyjfU5JyEFnMVaio82kyvUFM/pc1khnqcrdBmkqGeOKHdlqhn6tJuX6jF3wnt9oFa1FBot9BHHTNDu4l+Qx1noeWCCDWoD6HlpEANg5C2kwFqGGlab4LqnJPQej1UF3m0Xw/Vvbu0Xw/VLYX266EylbMDeqhsYtgBPVSWBeyAHqpyNsIOWKGqyGMHyABVjV12gMSo6izsAB2hIvUh7IDUR0VFyC5IfFTU1+wA+UBF/k7YBV+oSCXshCUq6oXshAwVjYRdELyjGuck7IJghWpUwk4wMao5uOwEz0E1mbATvnxU4myEXSBLVBN57ASZopqDy05IV6gmE3ZCGKES5yTshPUbKlEeO0F2qKbnshOCKaoZCTshnKASfyvshKFCJSphJ8jORyUTw07QfVQzDdgJ4QDV/Ai7QD4UKnE+2AlyRjWxYSeYGaqZaXaBDCNUsxB2gfz4qMT/Yie4U1SjPHaBJDGq6bnsgmDroJqpsAvMFBX9CDtAhjGqcT7YBbJzUE1k2AXhOyqaaXaA5BEqyoQdkC58VOOf2AXJBBWphB2gtw4qGhh2gBmjqnFA+8kxQlVnof1Mhqr8De0neYyqHI/2c88+qhoYWk/KASo7BLReunRQWSa0nQwnqG5J67mfDqpb03ZSDlBDQtuZs4MaUlouyAvUoWm5cOqjhkhot3QfoY53Wi45oJY97WaWCrXMaTWdF6gnpdW8dx+1/GrazGwj1HOgzXQ+QE2ftJgkYx81zWkxc1aoq6S93H2Mur41rZXmK9RWBLRVMBz7qG1EW4mXKdS3p63CXYQL5LSUOcW4REo7ufsBLvEd0ErufIWLDGglNz/4uMiINkrLmYPL7GmhtJwpXCinfdxyrHChX5fWcfOZwqViTdu4856Di02FlnH3Kx+X29Ey4WmAa+S0SuAtY1zFo03SYRbhKr+aFnHzscJ1YqE1JNysfFzpndZIk3OMqy1pCzMfK1xvTjtob1f4uIGENpAwH0e4hW9NC6TDz8LHTTgBWy/wTisHN7Ji2wXm+K5wMyO2m5i8H+OGNmwzcctF4eOWSraXmPJcOLgtw7aSMM8KBzf2G7CddLjvRz5uLhK2kKTJz0HhHsZsHRGTLwYO7uOTLSNpeJpGPu5lzjYRMfl5pXBHQ7aHpN52Gvm4p++UbaHNcTFwcGd+wFYQU+4OEe5vIGw+Sb3tNPbxCFM2nehwPyocPMiOzabDdTZx8DhzNpgOj4uJwkN5bCodrhcrhQf71mwi0eE6myg83m/AxpHU22QDB09RsFlETLLtFw6eZcwGEW3yz3H0hidasinE9TbZROHJjmwC0ebjcxw5eD6PzyZikl1/oNAMLp9JxPW+sp7y0RTfwmcRSb39YhY5aJJf4TOIuN5XNoscNE3Mh5PAJKfsEDlooh4fSrT5+OmvlI+mGvFRRFzvazGOHTTajg8gos3HbrpSPhrvg/clos3Hz+gQOWgHw7sR0ebjp9+LHLQI70IkNeuffi9y0Da8MQnScL1dzCaOj1ZKeSuivfnfzEHLubye6GT+965ghSOvITqZ/72rb9jjFPASIql3/JspWGcasibRZr7pT3zYKTpqVhXoZL6bxr+w2mci/F9Eu+UxO6hvdED0Z4T/kWgv/5sOftEhh7+Q/050Wh4XM/WL7ln9DTX/SXSYn/oT/xud9dv/y8MgkCAdzj/H0S9evtVk1hv433h5eXl5ebna/wE/LWKN4f9AUgAAAABJRU5ErkJggg==";var T=u(1);const N=T.a.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`,D=T.a.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`,G=T.a.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${Y=>Y.startRotationDegrees}deg);

  &.started-spinning {
    animation: spin-${({classKey:Y})=>Y} ${({startSpinningTime:Y})=>Y/1e3}s cubic-bezier(
          0.71,
          ${Y=>Y.disableInitialAnimation?0:-.29},
          0.96,
          0.9
        ) 0s 1 normal forwards running,
      continueSpin-${({classKey:Y})=>Y} ${({continueSpinningTime:Y})=>Y/1e3}s linear ${({startSpinningTime:Y})=>Y/1e3}s 1 normal forwards running,
      stopSpin-${({classKey:Y})=>Y} ${({stopSpinningTime:Y})=>Y/1e3}s cubic-bezier(0, 0, 0.35, 1.02) ${({startSpinningTime:Y,continueSpinningTime:je})=>(Y+je)/1e3}s 1 normal forwards
        running;
  }

  @keyframes spin-${({classKey:Y})=>Y} {
    from {
      transform: rotate(${Y=>Y.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${Y=>Y.startRotationDegrees+360}deg);
    }
  }
  @keyframes continueSpin-${({classKey:Y})=>Y} {
    from {
      transform: rotate(${Y=>Y.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${Y=>Y.startRotationDegrees+360}deg);
    }
  }
  @keyframes stopSpin-${({classKey:Y})=>Y} {
    from {
      transform: rotate(${Y=>Y.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${Y=>1440+Y.finalRotationDegrees}deg);
    }
  }
`,Z=Object(T.a)(N)`
  position: absolute;
  z-index: 5;
  width: 17%;
  right: 6px;
  top: 15px;
`,ae=T.a.canvas`
  width: 98%;
  height: 98%;
`;var Q=function(Y,je,K,I,re,xe){Y.beginPath(),Y.moveTo(je+(I+1)*Math.cos(xe),K+(I+1)*Math.sin(xe)),Y.lineTo(je+(re-1)*Math.cos(xe),K+(re-1)*Math.sin(xe)),Y.closePath(),Y.stroke()},de=function(Y){var je=Y.width,K=Y.height,I=Y.data,re=Y.outerBorderColor,xe=Y.outerBorderWidth,M=Y.innerRadius,ie=Y.innerBorderColor,be=Y.innerBorderWidth,we=Y.radiusLineColor,me=Y.radiusLineWidth,he=Y.fontFamily,le=Y.fontWeight,Te=Y.fontSize,Se=Y.fontStyle,H=Y.perpendicularText,Le=Y.prizeMap,ve=Y.rouletteUpdater,et=Y.textDistance,qe=Object(f.createRef)(),ft={outerBorderColor:re,outerBorderWidth:xe,innerRadius:M,innerBorderColor:ie,innerBorderWidth:be,radiusLineColor:we,radiusLineWidth:me,fontFamily:he,fontWeight:le,fontSize:Te,fontStyle:Se,perpendicularText:H,prizeMap:Le,rouletteUpdater:ve,textDistance:et};return Object(f.useEffect)(function(){(function(Ot,_e,Me){var Ve,vt,Ht,yt,nt,Bt=Me.outerBorderColor,Xe=Me.outerBorderWidth,Wt=Me.innerRadius,xn=Me.innerBorderColor,ot=Me.innerBorderWidth,Ge=Me.radiusLineColor,z=Me.radiusLineWidth,$=Me.fontFamily,te=Me.fontWeight,ue=Me.fontSize,pe=Me.fontStyle,se=Me.perpendicularText,fe=Me.prizeMap,ze=Me.textDistance,Ae=B(fe);Xe*=2,ot*=2,z*=2;var ke=Ot.current;if(ke!=null&&ke.getContext("2d")){var Ce=ke.getContext("2d");Ce.clearRect(0,0,500,500),Ce.strokeStyle="transparent",Ce.lineWidth=0;for(var pt=0,ct=ke.width/2-10,Ct=ct*E(0,100,ze)/100,qt=ct*E(0,100,Wt)/100,en=ke.width/2,wt=ke.height/2,Gt=0;Gt<_e.length;Gt++){var Yt=_e[Gt],Jn=Yt.optionSize,tn=Yt.style,bn=Jn&&Jn*(2*Math.PI)/Ae||2*Math.PI/Ae,U=pt+bn;Ce.fillStyle=tn&&tn.backgroundColor,Ce.beginPath(),Ce.arc(en,wt,ct,pt,U,!1),Ce.arc(en,wt,qt,U,pt,!0),Ce.stroke(),Ce.fill(),Ce.save(),Ce.strokeStyle=z<=0?"transparent":Ge,Ce.lineWidth=z,Q(Ce,en,wt,qt,ct,pt),Gt===_e.length-1&&Q(Ce,en,wt,qt,ct,U),Ce.strokeStyle=Xe<=0?"transparent":Bt,Ce.lineWidth=Xe,Ce.beginPath(),Ce.arc(en,wt,ct-Ce.lineWidth/2,0,2*Math.PI),Ce.closePath(),Ce.stroke(),Ce.strokeStyle=ot<=0?"transparent":xn,Ce.lineWidth=ot,Ce.beginPath(),Ce.arc(en,wt,qt+Ce.lineWidth/2-1,0,2*Math.PI),Ce.closePath(),Ce.stroke(),Ce.translate(en+Math.cos(pt+bn/2)*Ct,wt+Math.sin(pt+bn/2)*Ct);var W=pt+bn/2;if(_e[Gt].image){W+=_e[Gt].image&&!(!((Ve=_e[Gt].image)===null||Ve===void 0)&&Ve.landscape)?Math.PI/2:0,Ce.rotate(W);var V=((vt=_e[Gt].image)===null||vt===void 0?void 0:vt._imageHTML)||new Image;Ce.drawImage(V,(V.width+(((Ht=_e[Gt].image)===null||Ht===void 0?void 0:Ht.offsetX)||0))/-2,-(V.height-(!((yt=_e[Gt].image)===null||yt===void 0)&&yt.landscape?0:90)+(((nt=_e[Gt].image)===null||nt===void 0?void 0:nt.offsetY)||0))/2,V.width,V.height)}else{W+=se?Math.PI/2:0,Ce.rotate(W);var J=_e[Gt].option;Ce.font="".concat((tn==null?void 0:tn.fontStyle)||pe," ").concat((tn==null?void 0:tn.fontWeight)||te," ").concat(2*((tn==null?void 0:tn.fontSize)||ue),"px ").concat((tn==null?void 0:tn.fontFamily)||$,", Helvetica, Arial"),Ce.fillStyle=tn&&tn.textColor,Ce.fillText(J||"",-Ce.measureText(J||"").width/2,ue/2.7)}Ce.restore(),pt=U}}})(qe,I,ft)},[qe,I,ft,ve]),h.a.createElement(ae,{ref:qe,width:je,height:K})},X=function(){return(X=Object.assign||function(Y){for(var je,K=1,I=arguments.length;K<I;K++)for(var re in je=arguments[K])Object.prototype.hasOwnProperty.call(je,re)&&(Y[re]=je[re]);return Y}).apply(this,arguments)},Pe=function(Y,je,K){for(var I,re=0,xe=je.length;re<xe;re++)!I&&re in je||(I||(I=Array.prototype.slice.call(je,0,re)),I[re]=je[re]);return Y.concat(I||Array.prototype.slice.call(je))},rt=function(Y){var je=Y.mustStartSpinning,K=Y.prizeNumber,I=Y.data,re=Y.onStopSpinning,xe=re===void 0?function(){return null}:re,M=Y.backgroundColors,ie=M===void 0?b:M,be=Y.textColors,we=be===void 0?v:be,me=Y.outerBorderColor,he=me===void 0?"black":me,le=Y.outerBorderWidth,Te=le===void 0?5:le,Se=Y.innerRadius,H=Se===void 0?0:Se,Le=Y.innerBorderColor,ve=Le===void 0?"black":Le,et=Y.innerBorderWidth,qe=et===void 0?0:et,ft=Y.radiusLineColor,Ot=ft===void 0?"black":ft,_e=Y.radiusLineWidth,Me=_e===void 0?5:_e,Ve=Y.fontFamily,vt=Ve===void 0?w[0]:Ve,Ht=Y.fontSize,yt=Ht===void 0?20:Ht,nt=Y.fontWeight,Bt=nt===void 0?"bold":nt,Xe=Y.fontStyle,Wt=Xe===void 0?"normal":Xe,xn=Y.perpendicularText,ot=xn!==void 0&&xn,Ge=Y.textDistance,z=Ge===void 0?60:Ge,$=Y.spinDuration,te=$===void 0?1:$,ue=Y.startingOptionIndex,pe=ue===void 0?-1:ue,se=Y.pointerProps,fe=se===void 0?{}:se,ze=Y.disableInitialAnimation,Ae=ze!==void 0&&ze,ke=Object(f.useState)(Pe([],I)),Ce=ke[0],pt=ke[1],ct=Object(f.useState)([[0]]),Ct=ct[0],qt=ct[1],en=Object(f.useState)(0),wt=en[0],Gt=en[1],Yt=Object(f.useState)(0),Jn=Yt[0],tn=Yt[1],bn=Object(f.useState)(!1),U=bn[0],W=bn[1],V=Object(f.useState)(!1),J=V[0],ge=V[1],Re=Object(f.useState)(!1),ye=Re[0],De=Re[1],Ue=Object(f.useState)(!1),Qe=Ue[0],ht=Ue[1],Xt=Object(f.useState)(!1),nn=Xt[0],Lt=Xt[1],at=Object(f.useState)(0),Je=at[0],mt=at[1],bt=Object(f.useState)(0),Ke=bt[0],Nt=bt[1],Ze=Object(f.useState)(!1),Ft=Ze[0],Wn=Ze[1],An=Object(f.useRef)(!1),fn=function($t){for(var st="",vn=A.length,_n=0;_n<$t;_n++)st+=A.charAt(Math.floor(Math.random()*vn));return st}(5),Qt=Math.max(.01,te),xa=2600*Qt,Ea=750*Qt,gi=8e3*Qt,zr=xa+Ea+gi;Object(f.useEffect)(function(){for(var $t,st,vn,_n,Vn,bi,ea,ta,Mt,Bn,vi=0,na=[],Un=(I==null?void 0:I.length)||0,Ln=[{option:"",optionSize:1}],Hn=O(vt==null?void 0:vt.trim())?[vt]:[],jn=function(ut){var qn=((vn=(st=($t=I[ut])===null||$t===void 0?void 0:$t.style)===null||st===void 0?void 0:st.fontFamily)===null||vn===void 0?void 0:vn.split(","))||[];qn=qn.map(function(Ga){return Ga.trim()}).filter(O),Hn.push.apply(Hn,qn),Ln[ut]=X(X({},I[ut]),{style:{backgroundColor:((_n=I[ut].style)===null||_n===void 0?void 0:_n.backgroundColor)||(ie==null?void 0:ie[ut%(ie==null?void 0:ie.length)])||b[0],fontFamily:((Vn=I[ut].style)===null||Vn===void 0?void 0:Vn.fontFamily)||vt||"Nunito",fontSize:((bi=I[ut].style)===null||bi===void 0?void 0:bi.fontSize)||yt||20,fontWeight:((ea=I[ut].style)===null||ea===void 0?void 0:ea.fontWeight)||Bt||"bold",fontStyle:((ta=I[ut].style)===null||ta===void 0?void 0:ta.fontStyle)||Wt||"normal",textColor:((Mt=I[ut].style)===null||Mt===void 0?void 0:Mt.textColor)||(we==null?void 0:we[ut%(we==null?void 0:we.length)])||v[0]}}),na.push([]);for(var Ki=0;Ki<(Ln[ut].optionSize||1);Ki++)na[ut][Ki]=vi++;if(I[ut].image){Nt(function(Ga){return Ga+1});var za=new Image;za.src=((Bn=I[ut].image)===null||Bn===void 0?void 0:Bn.uri)||"",za.onload=function(){var Ga,yi,Zi,Ii,ka,Ra;za.height=200*(((Ga=I[ut].image)===null||Ga===void 0?void 0:Ga.sizeMultiplier)||1),za.width=za.naturalWidth/za.naturalHeight*za.height,Ln[ut].image={uri:((yi=I[ut].image)===null||yi===void 0?void 0:yi.uri)||"",offsetX:((Zi=I[ut].image)===null||Zi===void 0?void 0:Zi.offsetX)||0,offsetY:((Ii=I[ut].image)===null||Ii===void 0?void 0:Ii.offsetY)||0,landscape:((ka=I[ut].image)===null||ka===void 0?void 0:ka.landscape)||!1,sizeMultiplier:((Ra=I[ut].image)===null||Ra===void 0?void 0:Ra.sizeMultiplier)||1,_imageHTML:za},mt(function(kr){return kr+1}),Lt(function(kr){return!kr})}}},Ta=0;Ta<Un;Ta++)jn(Ta);if((Hn==null?void 0:Hn.length)>0)try{g.a.load({google:{families:Array.from(new Set(Hn.filter(function(ut){return!!ut})))},timeout:1e3,fontactive:function(){Lt(!nn)},active:function(){Wn(!0),Lt(!nn)}})}catch(ut){console.log("Error loading webfonts:",ut)}else Wn(!0);pt(Pe([],Ln)),qt(na),qa(pe,na),ht(!0)},[I,ie,we]),Object(f.useEffect)(function(){var $t;if(je&&!ye){De(!0),xi();var st=Ct[K][Math.floor(Math.random()*(($t=Ct[K])===null||$t===void 0?void 0:$t.length))],vn=C(st,B(Ct));tn(vn)}},[je]),Object(f.useEffect)(function(){J&&(De(!1),Gt(Jn))},[J]);var xi=function(){W(!0),ge(!1),An.current=!0,setTimeout(function(){An.current&&(An.current=!1,W(!1),ge(!0),xe())},zr)},qa=function($t,st){var vn;if(pe>=0){var _n=Math.floor($t)%(st==null?void 0:st.length),Vn=st[_n][Math.floor(((vn=st[_n])===null||vn===void 0?void 0:vn.length)/2)];Gt(C(Vn,B(st),!1))}};return Qe?h.a.createElement(D,{style:!Ft||Ke>0&&Je!==Ke?{visibility:"hidden"}:{}},h.a.createElement(G,{className:U?"started-spinning":"",classKey:fn,startSpinningTime:xa,continueSpinningTime:Ea,stopSpinningTime:gi,startRotationDegrees:wt,finalRotationDegrees:Jn,disableInitialAnimation:Ae},h.a.createElement(de,{width:"900",height:"900",data:Ce,outerBorderColor:he,outerBorderWidth:Te,innerRadius:H,innerBorderColor:ve,innerBorderWidth:qe,radiusLineColor:Ot,radiusLineWidth:Me,fontFamily:vt,fontWeight:Bt,fontStyle:Wt,fontSize:yt,perpendicularText:ot,prizeMap:Ct,rouletteUpdater:nn,textDistance:z})),h.a.createElement(Z,{style:fe==null?void 0:fe.style,src:(fe==null?void 0:fe.src)||R.src,alt:"roulette-static"})):null}}])})}(Rf)),Rf.exports}var O9=D9();const hc=[{id:4,label:"Fusioni",color:"#4CAF50",points:400,url:"/game/wheel/fusion"}];function B9(){const n=Ua(),{players:i,updatePlayerScore:o}=Ha(),[s,c]=j.useState(null),[u,f]=j.useState(!1),[h,p]=j.useState(0),[g,b]=j.useState(!1),[v,w]=j.useState(null),[C,E]=j.useState(!1),O=j.useMemo(()=>hc.map(D=>({option:D.label,style:{backgroundColor:D.color,textColor:"white"}})),[]);j.useEffect(()=>{i.length===0&&n("/")},[i,n]);const B=j.useCallback(D=>{u||(c(D),w(null),E(!1))},[u]),A=j.useCallback(()=>{if(s&&!g){const D=Math.floor(Math.random()*hc.length);p(D),b(!0),f(!0),E(!1)}},[s,g]),R=j.useCallback(()=>{b(!1),f(!1);const D=hc[h];if(w(D),E(!0),(D.label==="Bonus"||D.label==="Malus")&&s){const G=s.score+D.points;o(s.id,G),c(Z=>({...Z,score:G}))}},[h,s,o]),T=j.useCallback(()=>{console.log("Continue button clicked",{selectedSegment:v,activePlayer:s}),v!=null&&v.url?n(v.url,{state:{player:s,segment:v}}):(E(!1),w(null),c(null))},[v,s,n]),N=()=>{if(!v)return null;const D=v.label==="Bonus",G=v.label==="Malus",Z=v.label==="Passa";return D||G?m.jsx(Mf,{onClick:()=>E(!1),children:m.jsxs(Df,{$color:v.color,onClick:ae=>ae.stopPropagation(),children:[m.jsx(Of,{children:D?"🎉":"💔"}),m.jsxs(Bf,{children:[v.label,"!"]}),m.jsxs(Lf,{children:[v.points>0?"+":"",v.points," punti"]}),m.jsx(Nf,{children:D?"Punti aggiunti al tuo punteggio!":"Punti sottratti dal tuo punteggio!"}),m.jsx($f,{onClick:ae=>{ae.preventDefault(),ae.stopPropagation(),T()},type:"button",children:"Continua"})]})}):Z?m.jsx(Mf,{onClick:()=>E(!1),children:m.jsxs(Df,{$color:v.color,onClick:ae=>ae.stopPropagation(),children:[m.jsx(Of,{children:"😔"}),m.jsx(Bf,{children:"Peccato!"}),m.jsx(Lf,{children:"Passa il turno"}),m.jsx(Nf,{children:"Nessuna sfida questa volta"}),m.jsx($f,{onClick:ae=>{ae.preventDefault(),ae.stopPropagation(),T()},type:"button",children:"Continua"})]})}):m.jsx(Mf,{children:m.jsxs(Df,{$color:v.color,children:[m.jsx(Of,{children:"🎯"}),m.jsx(Bf,{children:"Sfida sbloccata!"}),m.jsx(Lf,{children:v.label}),m.jsxs(Nf,{children:["Completala per guadagnare ",v.points," punti"]}),m.jsxs($f,{onClick:ae=>{ae.preventDefault(),T()},type:"button",children:[m.jsx(Dc,{style:{marginRight:"8px"}}),"Inizia la Sfida"]})]})})};return m.jsxs($9,{children:[m.jsxs(P9,{children:[m.jsxs(_9,{to:"/game",children:[m.jsx(ja,{})," Torna ai giochi"]}),m.jsx(V9,{children:s&&m.jsxs(m.Fragment,{children:[m.jsx(U9,{src:s.avatar,alt:s.name}),m.jsxs(H9,{children:[m.jsx("span",{children:s.name}),m.jsxs("span",{children:[s.score," punti"]})]})]})})]}),m.jsxs(q9,{children:[m.jsxs(G9,{children:[m.jsx(Y9,{children:"Ruota della Fortuna Pokémon"}),m.jsx(X9,{children:"Seleziona un allenatore, gira la ruota e affronta la sfida!"})]}),m.jsxs(F9,{children:[m.jsx(Q9,{children:m.jsxs(K9,{children:[m.jsx(Z9,{children:m.jsx(O9.Wheel,{mustStartSpinning:g,prizeNumber:h,data:O,backgroundColors:hc.map(D=>D.color),textColors:["#ffffff"],fontSize:16,outerBorderColor:"#ffde00",outerBorderWidth:4,innerBorderColor:"#ffffff",innerBorderWidth:2,radiusLineColor:"#ffffff",radiusLineWidth:2,perpendicularText:!0,textDistance:70,onStopSpinning:R})}),m.jsxs(I9,{onClick:A,disabled:u||!s,$hasPlayer:!!s,children:[m.jsx(Dc,{}),s?u?"Girando...":"Gira la Ruota":"Seleziona un allenatore"]})]})}),m.jsxs(J9,{children:[m.jsxs(W9,{children:[m.jsx(ej,{children:"Allenatori"}),m.jsx(tj,{children:"Seleziona chi deve girare la ruota"})]}),m.jsx(nj,{children:i.map(D=>m.jsx(aj,{onClick:()=>B(D),$active:(s==null?void 0:s.id)===D.id,$disabled:u,children:m.jsxs(ij,{children:[m.jsx(rj,{src:D.avatar,alt:D.name}),m.jsxs(oj,{children:[m.jsx(sj,{children:D.name}),m.jsxs(lj,{children:[m.jsx(V2,{style:{marginRight:"4px"}}),D.score," punti"]})]}),(s==null?void 0:s.id)===D.id&&m.jsx(cj,{children:"Attivo"})]})},D.id))})]})]})]}),C&&N(),m.jsxs(uj,{children:[m.jsx(Qs,{className:"ball1"}),m.jsx(Qs,{className:"ball2"}),m.jsx(dj,{className:"ball3"}),m.jsx(fj,{className:"ball4"}),m.jsx(hj,{className:"ball5"})]})]})}const L9=He`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Fs=He`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;He`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;const yv=He`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 222, 0, 0.7); }
  70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(255, 222, 0, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 222, 0, 0); }
`,N9=He`
  from { transform: scale(0.8) translateY(30px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
`,$9=y.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #233975 0%, #1a2a5a 100%);
`,P9=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(19, 42, 87, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #ffde00;
  z-index: 10;
`,_9=y(pi)`
  background: rgba(255, 222, 0, 0.1);
  color: #ffde00;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;

  &:hover {
    background: #ffde00;
    color: #233975;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 222, 0, 0.3);
  }
`,V9=y.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 222, 0, 0.3);
  min-width: 200px;
  justify-content: center;
`,U9=y.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #ffde00;
`,H9=y.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 0.9rem;

  span:first-child {
    font-weight: 600;
  }

  span:last-child {
    color: #ffde00;
    font-size: 0.8rem;
  }
`,q9=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,G9=y.div`
  text-align: center;
  padding: 2rem 0 1rem;
  z-index: 1;
`,Y9=y.h1`
  font-size: 3rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca, 0 0 20px rgba(255, 222, 0, 0.5);
  margin-bottom: 0.5rem;
  font-weight: 800;
`,X9=y.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
`,F9=y.div`
  display: flex;
  flex: 1;
  gap: 3rem;
  padding: 0 2rem 2rem;
  overflow: hidden;
`,Q9=y.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`,K9=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`,Z9=y.div`
  width: 450px;
  height: 450px;
  position: relative;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
`,I9=y.button`
  padding: 16px 32px;
  background: ${n=>n.$hasPlayer?"linear-gradient(135deg, #ee1515, #d10000)":"linear-gradient(135deg, #666, #555)"};
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: ${n=>n.$hasPlayer?"pointer":"not-allowed"};
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  min-width: 280px;
  justify-content: center;

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(238, 21, 21, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
  }
`,J9=y.div`
  flex: 1;
  background: rgba(19, 42, 87, 0.8);
  border-radius: 20px;
  padding: 1.5rem;
  border: 2px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,W9=y.div`
  margin-bottom: 1.5rem;
`,ej=y.h2`
  font-size: 1.8rem;
  color: #ffde00;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,tj=y.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.95rem;
`,nj=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  /* padding-right: 0.5rem; */
  overflow: hidden;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 222, 0, 0.5);
    border-radius: 3px;
  }
`,aj=y.div`
  background: ${n=>n.$active?"linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(59, 76, 202, 0.2))":"rgba(255, 255, 255, 0.08)"};
  border-radius: 15px;
  border: 2px solid ${n=>n.$active?"#ffde00":"transparent"};
  transition: all 0.3s ease;
  cursor: ${n=>n.$disabled?"not-allowed":"pointer"};
  overflow: hidden;

  ${n=>n.$active&&Er`
      animation: ${yv} 2s infinite;
    `}

  &:hover:not([disabled]) {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`,ij=y.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
`,rj=y.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`,oj=y.div`
  flex: 1;
`,sj=y.div`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,lj=y.div`
  font-size: 0.9rem;
  color: #ffde00;
  display: flex;
  align-items: center;
  font-weight: 600;
`,cj=y.div`
  background: linear-gradient(135deg, #ee1515, #d10000);
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(238, 21, 21, 0.3);
`,Mf=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`,Df=y.div`
  background: linear-gradient(
    135deg,
    ${n=>n.$color},
    ${n=>n.$color}dd
  );
  border-radius: 25px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
  animation: ${N9} 0.5s ease;
  position: relative;
  overflow: hidden;

  /* &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${L9} 3s linear infinite;
  } */
`,Of=y.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: ${yv} 1s ease infinite;
`,Bf=y.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
`,Lf=y.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
  text-align: center;
`,Nf=y.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.4;
`,$f=y.button`
  background: linear-gradient(135deg, #ffde00, #ffc107);
  color: #3b4cca;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(255, 222, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 222, 0, 0.6);
  }

  &:active {
    transform: translateY(-1px);
  }
`,uj=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`,Qs=y.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f0f0f0 50%, #ee1515 50%);
  opacity: 0.1;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px #333, 0 0 0 8px white;
  }

  &.ball1 {
    top: 10%;
    right: 15%;
    animation: ${Fs} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 15%;
    left: 10%;
    animation: ${Fs} 15s ease-in-out infinite reverse;
  }
`,dj=y(Qs)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #3b4cca 50%);

  &.ball3 {
    top: 60%;
    right: 5%;
    width: 80px;
    height: 80px;
    animation: ${Fs} 18s ease-in-out infinite;
  }
`,fj=y(Qs)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #ffde00 50%);

  &.ball4 {
    bottom: 30%;
    right: 20%;
    width: 100px;
    height: 100px;
    animation: ${Fs} 14s ease-in-out infinite reverse;
  }
`,hj=y(Qs)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #9966ff 50%);

  &.ball5 {
    top: 30%;
    left: 5%;
    width: 90px;
    height: 90px;
    animation: ${Fs} 20s ease-in-out infinite;
  }
`,pj="/vegetaquizshow/assets/card-4O-qPn6Q.png",mj="/vegetaquizshow/assets/vaporeon-CKwMlkUN.jpg",gj="/vegetaquizshow/assets/garchomp-HcLYxoWu.jpg",xj="/vegetaquizshow/assets/lopunny-By_K6DKg.jpg",bj="/vegetaquizshow/assets/psyduck-DHhIB6m5.jpg",vj="/vegetaquizshow/assets/lucario-Bg7ysgN9.jpg",yj="/vegetaquizshow/assets/fletchling-BpYOL6cV.jpg",wj="/vegetaquizshow/assets/flygon-m92uu1ci.jpg",Sj="/vegetaquizshow/assets/stoutland-PE5ZhK-H.jpg",Cj="/vegetaquizshow/assets/charizard-fdt7rzMN.jpg",Aj="/vegetaquizshow/assets/sceptile-BHd02e9v.jpg",jj="/vegetaquizshow/assets/deoxys-DQxvufKR.jpg",Ej="/vegetaquizshow/assets/bulbasaur-c44S7uX_.jpg",Tj=[{id:1,name:"Vaporeon",image:mj},{id:2,name:"Garchomp",image:gj},{id:3,name:"Lopunny",image:xj},{id:4,name:"Psyduck",image:bj},{id:5,name:"Lucario",image:vj},{id:6,name:"fletchling",image:yj},{id:7,name:"Flygon",image:wj},{id:8,name:"Stoutland",image:Sj},{id:9,name:"Charizard",image:Cj},{id:10,name:"Sceptile",image:Aj},{id:11,name:"Deoxys",image:jj},{id:12,name:"Bulbasaur",image:Ej}];new URL("../../../assets/images/cardbg.png",import.meta.url).href;function zj(){const{players:n,guessedCards:i}=Ha(),[o,s]=j.useState([]),c=Ua();j.useEffect(()=>{if(n.length===0){c("/");return}const h=[...Tj.map(p=>({...p,guessed:i.includes(p.id)}))].sort(()=>.5-Math.random());s(h)},[c,n,i]);const u=f=>{f.guessed||c("/game/image/guess",{state:{selectedCard:f,totalCards:o.length}})};return m.jsxs(kj,{children:[m.jsxs(Rj,{to:"/game",children:[m.jsx(ja,{})," Torna ai giochi"]}),m.jsx(Mj,{children:"Chi è quel Pokémon?"}),m.jsx(Dj,{children:"Seleziona una carta misteriosa per iniziare la sfida"}),m.jsx(Oj,{children:o.map(f=>m.jsx(Pj,{onClick:()=>u(f),children:f.guessed?m.jsxs(_j,{children:[m.jsx("img",{src:f.image,alt:f.name}),m.jsx(Vj,{children:f.name})]}):m.jsx("img",{src:pj,alt:""})},f.id))}),m.jsxs(Bj,{children:[m.jsx(Mx,{className:"ball1"}),m.jsx(Mx,{className:"ball2"}),m.jsx(Lj,{className:"ball3"}),m.jsx(Nj,{className:"ball4"}),m.jsx($j,{className:"ball5"})]})]})}const Ss=He`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,kj=y.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  position: relative;
  overflow: hidden;
`,Rj=y(pi)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(19, 42, 87, 0.9);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 0.9rem;

  &:hover {
    background: #3b4cca;
    transform: translateX(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
`,Mj=y.h1`
  font-size: 2rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin: 0;
  text-align: center;
  z-index: 1;
  margin-top: 4rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
`,Dj=y.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0 1rem;
  z-index: 1;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.3rem 0 0.8rem;
  }
`,Oj=y.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  align-content: start;
  z-index: 1;
  padding: 0 1rem;
  /* overflow-y: auto; */
  max-height: calc(100vh - 200px);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffde00;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.8rem;
    padding: 0 0.5rem;
    max-height: calc(100vh - 160px);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }
`,Bj=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  /* Dark background with Pokemon pattern */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a1428;
    background-image: radial-gradient(
        circle at 30% 20%,
        rgba(59, 76, 202, 0.08) 0%,
        rgba(59, 76, 202, 0) 50%
      ),
      radial-gradient(
        circle at 70% 60%,
        rgba(238, 21, 21, 0.08) 0%,
        rgba(238, 21, 21, 0) 50%
      ),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z' fill='%233b4cca' fill-opacity='0.05'/%3E%3Cpath d='M30 60a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z' fill='%23ee1515' fill-opacity='0.05'/%3E%3C/svg%3E");
    z-index: -1;
  }

  /* Additional subtle Pokemon elements */
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm0-7a8 8 0 1 1 0-16 8 8 0 0 1 0 16z' fill='%23ffde00' fill-opacity='0.03'/%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: -1;
  }
`,iu=y.div`
  position: absolute;
  opacity: 0.15;
  filter: blur(2px);
  z-index: 0;

  &.ball1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
    animation: ${Ss} 15s ease-in-out infinite;
  }

  &.ball2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: 10%;
    animation: ${Ss} 20s ease-in-out infinite reverse;
  }

  &.ball3 {
    width: 250px;
    height: 250px;
    top: 30%;
    left: -100px;
    animation: ${Ss} 17s ease-in-out infinite 5s;
  }

  &.ball4 {
    width: 280px;
    height: 280px;
    bottom: 10%;
    right: 5%;
    animation: ${Ss} 22s ease-in-out infinite 3s;
  }

  &.ball5 {
    width: 150px;
    height: 150px;
    top: 20%;
    right: 15%;
    animation: ${Ss} 18s ease-in-out infinite 8s;
  }
`,Mx=y(iu)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(238, 21, 21, 0.7) 45.5%,
    rgba(238, 21, 21, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(238, 21, 21, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`,Lj=y(iu)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(59, 76, 202, 0.7) 45.5%,
    rgba(59, 76, 202, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(59, 76, 202, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`,Nj=y(iu)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(255, 222, 0, 0.7) 45.5%,
    rgba(255, 222, 0, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255, 222, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`,$j=y(iu)`
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 35%,
    rgba(0, 0, 0, 0.1) 35.5%,
    rgba(0, 0, 0, 0.1) 45%,
    rgba(147, 58, 180, 0.7) 45.5%,
    rgba(147, 58, 180, 0.7) 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(147, 58, 180, 0.5);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  }
`,Pj=y.div`
  width: 100%;
  aspect-ratio: 2.5 / 3.5;
  cursor: ${n=>n.$guessed?"default":"pointer"};
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  border: 3px solid
    ${n=>n.$guessed?"rgba(255, 255, 255, 0.3)":"#ffde00"};
  background: ${n=>n.$guessed?"rgba(0, 0, 0, 0.2)":"transparent"};

  &:hover {
    transform: ${n=>n.$guessed?"none":"translateY(-8px) scale(1.05)"};
    box-shadow: ${n=>n.$guessed?"0 8px 25px rgba(0, 0, 0, 0.4)":"0 15px 35px rgba(255, 222, 0, 0.4)"};
  }

  img {
    width: ${n=>n.$guessed?"100%":"300%"};
    height: ${n=>n.$guessed?"100%":"auto"};
    object-fit: ${n=>n.$guessed?"cover":"contain"};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    border-radius: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);

    &:hover {
      transform: ${n=>n.$guessed?"none":"translateY(-5px) scale(1.03)"};
    }
  }
`,_j=y.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(0, 0, 0, 0.2)
  );
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.7);
    opacity: 0.8;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.3),
      rgba(59, 76, 202, 0.2)
    );
    pointer-events: none;
  }

  &::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: #78c850;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    z-index: 2;
    opacity: 0.9;
  }
`,Vj=y.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(19, 42, 87, 0.95),
    rgba(19, 42, 87, 0.8)
  );
  color: white;
  padding: 0.5rem 0.3rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  border-top: 2px solid rgba(255, 222, 0, 0.5);
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.2rem;
  }
`,io=36,Dx=500,Uj=5e3;function Hj(){var Y,je;const n=ga(),i=Ua(),{players:o,updatePlayerScore:s,markCardAsGuessed:c}=Ha(),[u,f]=j.useState(null),h=(Y=n.state)==null?void 0:Y.selectedCard;(je=n.state)!=null&&je.totalCards;const[p,g]=j.useState("active"),[b,v]=j.useState(!1),[w,C]=j.useState(Dx),[E,O]=j.useState(""),[B,A]=j.useState(!1),[R,T]=j.useState(!1),N=j.useRef(null),[D,G]=j.useState([]),[Z,ae]=j.useState([]),Q=D.length/io*100,de=K=>{const I=[...K];for(let re=I.length-1;re>0;re--){const xe=Math.floor(Math.random()*(re+1));[I[re],I[xe]]=[I[xe],I[re]]}return I};j.useEffect(()=>{const K=Array.from({length:io},(re,xe)=>xe),I=de(K);ae(I)},[]),j.useEffect(()=>(p==="active"&&!b&&D.length<io&&Z.length>0&&(N.current=setTimeout(()=>{const K=Z[D.length];G(I=>[...I,K]),C(I=>Math.max(I-Dx/io,0))},Uj)),()=>{N.current&&clearTimeout(N.current)}),[p,b,D.length,Z]),j.useEffect(()=>{if(!h){i("/game/image");return}},[h,i]),j.useEffect(()=>{if(o.length===0){i("/");return}},[o,i]);const X=()=>{v(!b)},Pe=()=>{if(!u){alert("Seleziona prima un giocatore!");return}const K=E.trim().toLowerCase(),I=h.name.toLowerCase(),re=K===I;if(T(re),A(!0),g("completed"),re){const xe=u.score+Math.round(w);s(u.id,xe),f({...u,score:xe}),c(h.id);const M=Array.from({length:io},(ie,be)=>be);G(M)}},rt=()=>{i("/game/image")};return h?m.jsxs(Fj,{children:[m.jsxs(Qj,{to:"/game/image",children:[m.jsx(ja,{})," Torna alla selezione"]}),m.jsx(Kj,{children:"Chi è quel Pokémon?"}),m.jsx(Zj,{children:"Seleziona un giocatore dalla lista prima di indovinare"}),m.jsxs(yE,{children:[m.jsxs(Ij,{children:[m.jsxs(Jj,{children:[m.jsx(Wj,{children:"Punteggio:"}),m.jsx(eE,{children:Math.round(w)})]}),m.jsx(tE,{children:p==="active"&&m.jsx(nE,{onClick:X,children:b?m.jsxs(m.Fragment,{children:[m.jsx(Dc,{})," Riprendi"]}):m.jsxs(m.Fragment,{children:[m.jsx(P2,{})," Pausa"]})})})]}),m.jsxs(fE,{children:[m.jsx(hE,{children:m.jsxs(pE,{children:[m.jsx(mE,{$percentage:Q}),m.jsxs(gE,{children:[Math.round(Q),"%"]})]})}),m.jsxs(xE,{children:[m.jsx(aE,{src:h==null?void 0:h.image,alt:"Pokémon da indovinare"}),m.jsx(iE,{children:Array.from({length:io}).map((K,I)=>m.jsx(rE,{$visible:!D.includes(I)},I))})]}),m.jsx(bE,{children:B?m.jsxs(wE,{$correct:R,children:[m.jsx(lE,{children:R?m.jsx(Yi,{}):m.jsx(di,{})}),m.jsx(cE,{children:R?"Corretto!":"Sbagliato!"}),m.jsx(uE,{children:R?`Hai guadagnato ${Math.round(w)} punti!`:`Era ${h.name}. Nessun punto guadagnato.`}),m.jsx(dE,{onClick:rt,children:"Nuova Sfida"})]}):m.jsxs(vE,{children:[m.jsx("h3",{children:"Chi è questo Pokémon?"}),m.jsx(oE,{type:"text",value:E,onChange:K=>O(K.target.value),placeholder:"Nome del Pokémon...",disabled:p==="completed"}),m.jsx(sE,{onClick:Pe,disabled:!E.trim()||p==="completed",children:"Indovina"})]})})]})]}),m.jsxs(SE,{children:[m.jsxs(CE,{children:[m.jsx(AE,{children:"Allenatori"}),m.jsx(jE,{children:u?"Ora indovina il Pokémon":"Scegli un allenatore per iniziare"})]}),m.jsx(EE,{children:o.map(K=>m.jsxs(TE,{$active:(u==null?void 0:u.id)===K.id,onClick:()=>f(K),children:[m.jsx(zE,{src:K.avatar,alt:K.name}),m.jsxs(kE,{children:[m.jsx(RE,{children:K.name}),m.jsxs(ME,{children:[m.jsx(DE,{})," ",K.score," punti"]})]}),(u==null?void 0:u.id)===K.id&&m.jsx(OE,{children:m.jsx(Aw,{})})]},K.id))})]}),m.jsxs(BE,{children:[m.jsx(Ks,{className:"ball1"}),m.jsx(Ks,{className:"ball2"}),m.jsx(LE,{className:"ball3"}),m.jsx(NE,{className:"ball4"}),m.jsx($E,{className:"ball5"})]})]}):null}const qj=He`
  0% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 222, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0); }
`,Gj=He`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`,Yj=He`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,Xj=He`
  from { opacity: 0; }
  to { opacity: 1; }
`,Fj=y.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  gap: 0.5rem;
`,Qj=y(pi)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(19, 42, 87, 0.9);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 0.9rem;

  &:hover {
    background: #3b4cca;
    transform: translateX(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
  }
`,Kj=y.h1`
  font-size: 1.8rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  text-align: center;
  z-index: 1;
  margin: 0;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 3rem;
  }
`,Zj=y.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  margin: 0;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,Ij=y.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 0.5rem;
`,Jj=y.div`
  background: rgba(19, 42, 87, 0.9);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`,Wj=y.span`
  font-size: 0.8rem;
  margin-right: 6px;
  color: white;
`,eE=y.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffde00;
`,tE=y.div`
  display: flex;
  gap: 8px;
`,nE=y.button`
  background: rgba(19, 42, 87, 0.9);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  border: 2px solid #ffde00;
  font-size: 0.8rem;

  &:hover {
    background: #3b4cca;
  }

  &:active {
    transform: translateY(1px);
  }
`,aE=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: white;
`,iE=y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`,rE=y.div`
  background: black;
  border: 0.3px solid rgba(255, 255, 255, 0.1); // Bordo più sottile
  opacity: ${n=>n.$visible?1:0};
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  transition: opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  /* transform: scale(${n=>n.$visible?1:.8}); */

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    opacity: ${n=>n.$visible?0:1};
    transition: opacity 0.5s ease;
  }
`,oE=y.input`
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  outline: none;
  border: 2px solid rgba(59, 76, 202, 0.5);

  &:focus {
    border-color: #3b4cca;
    box-shadow: 0 0 0 3px rgba(59, 76, 202, 0.2);
  }
`,sE=y.button`
  padding: 0.8rem 1.2rem;
  background: #ee1515;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,lE=y.div`
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,cE=y.h2`
  font-size: 1.4rem;
  margin: 0;
`,uE=y.p`
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
`,dE=y.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`,fE=y.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`,hE=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;

  @media (max-width: 900px) {
    width: 100%;
    height: 30px;
    order: 1;
  }
`,pE=y.div`
  width: 35px;
  height: 250px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 900px) {
    width: 100%;
    height: 18px;
  }
`,mE=y.div`
  width: 100%;
  background: linear-gradient(0deg, #3b4cca, #ee1515);
  height: ${n=>n.$percentage}%;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 0.5s ease;

  @media (max-width: 900px) {
    width: ${n=>n.$percentage}%;
    height: 100%;
    bottom: auto;
    background: linear-gradient(90deg, #3b4cca, #ee1515);
  }
`,gE=y.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.7rem;
  color: white;
  font-weight: 600;
  text-shadow: 1px 1px 2px black;
  writing-mode: vertical-lr;
  transform: rotate(270deg);

  @media (max-width: 900px) {
    writing-mode: horizontal-tb;
    transform: none;
    top: 50%;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.8rem;
  }
`,xE=y.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1.4;
  border-radius: 12px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 900px) {
    max-width: 280px;
    order: 2;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`,bE=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  max-height: 350px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 400px;
    order: 3;
    max-height: none;
  }
`,vE=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: rgba(19, 42, 87, 0.8);
  padding: 1.2rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 222, 0, 0.6);
  backdrop-filter: blur(10px);

  h3 {
    color: #ffde00;
    margin: 0 0 0.3rem 0;
    text-align: center;
    text-shadow: 1px 1px 0 #3b4cca;
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    padding: 1rem;
  }
`,yE=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  min-height: 0;
`,wE=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: ${n=>n.$correct?"rgba(34, 197, 94, 0.9)":"rgba(239, 68, 68, 0.9)"};
  padding: 1.5rem;
  border-radius: 15px;
  color: white;
  text-align: center;
  animation: ${Xj} 0.5s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`,SE=y.div`
  background: rgba(19, 42, 87, 0.8);
  border-radius: 15px;
  padding: 1rem;
  border: 2px solid rgba(255, 222, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1;
`,CE=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.3rem;
    align-items: flex-start;
  }
`,AE=y.h3`
  color: #ffde00;
  margin: 0;
  font-size: 1.2rem;
  text-shadow: 1px 1px 0 #3b4cca;
`,jE=y.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  font-style: italic;
`,EE=y.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,TE=y.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: ${n=>n.$active?"rgba(255, 222, 0, 0.9)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${n=>n.$active?"#ffde00":"transparent"};
  position: relative;
  min-width: 180px;

  &:hover {
    background: ${n=>n.$active?"rgba(255, 222, 0, 1)":"rgba(255, 255, 255, 0.2)"};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  ${n=>n.$active&&Er`
      animation: ${qj} 2s infinite;
    `}

  @media (max-width: 600px) {
    min-width: auto;
    width: 100%;
  }
`,zE=y.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
`,kE=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,RE=y.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${n=>{var i;return(i=n.theme)!=null&&i.active?"#3b4cca":"white"}};
`,ME=y.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: ${n=>{var i;return(i=n.theme)!=null&&i.active?"#3b4cca":"rgba(255, 255, 255, 0.8)"}};
  font-weight: 500;
`,DE=y.div`
  width: 12px;
  height: 12px;
  background: #ee1515;
  border-radius: 50%;
  border: 1px solid white;
`,OE=y.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #22c55e;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  border: 2px solid white;
  animation: ${Gj} 2s infinite;
`,BE=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`,Ks=y.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ff6b6b, #ee1515);
  opacity: 0.1;
  animation: ${Yj} 6s ease-in-out infinite;

  &.ball1 {
    top: 10%;
    left: 15%;
    animation-delay: 0s;
  }
  &.ball2 {
    top: 60%;
    right: 20%;
    animation-delay: 2s;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,LE=y(Ks)`
  background: radial-gradient(circle at 30% 30%, #4dabf7, #3b4cca);

  &.ball3 {
    bottom: 20%;
    left: 10%;
    animation-delay: 4s;
  }
`,NE=y(Ks)`
  background: radial-gradient(circle at 30% 30%, #ffd43b, #ffde00);

  &.ball4 {
    top: 30%;
    right: 10%;
    animation-delay: 1s;
  }
`,$E=y(Ks)`
  background: radial-gradient(circle at 30% 30%, #b197fc, #9775fa);

  &.ball5 {
    bottom: 40%;
    right: 15%;
    animation-delay: 3s;
  }
`,Hi="/vegetaquizshow/assets/pikachu-Dhdnt46p.mp3",Ox=[{id:1,name:"Pikachu",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,name:"Charizard",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{id:3,name:"Bulbasaur",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:4,name:"Jigglypuff",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"},{id:5,name:"Meowth",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"},{id:6,name:"Snorlax",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:7,name:"Eevee",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:8,name:"Gyarados",audio:Hi,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"}];function PE(){const n=Ua(),i=ga(),{updatePlayerScore:o}=Ha(),[s,c]=j.useState(null),[u,f]=j.useState(null),[h,p]=j.useState(!1),[g,b]=j.useState(""),[v,w]=j.useState(!1),[C,E]=j.useState(!1),[O,B]=j.useState(!1),A=j.useRef(null);j.useEffect(()=>{var G;(G=i.state)!=null&&G.player?c(i.state.player):n("/game/wheel")},[i,n]),j.useEffect(()=>{const G=Math.floor(Math.random()*Ox.length);f(Ox[G])},[]),j.useEffect(()=>{A.current&&(h?A.current.play():A.current.pause())},[h,u]);const R=()=>{p(!h)},T=()=>{if(!u||!g.trim())return;const G=g.trim().toLowerCase(),Z=u.name.toLowerCase(),ae=G===Z;if(E(ae),w(!0),p(!1),ae&&s){const Q=s.score+500;o(s.id,Q),c({...s,score:Q})}},N=()=>{B(!0)},D=()=>{n("/game/wheel")};return m.jsxs(VE,{children:[m.jsxs(UE,{onClick:D,children:[m.jsx(ja,{})," Torna alla ruota"]}),m.jsx(HE,{children:"Chi è questo Pokémon?"}),m.jsx(qE,{children:s?`${s.name}, ascolta e indovina il verso di quale Pokémon stai sentendo!`:"Ascolta e indovina!"}),m.jsx(GE,{children:m.jsx(YE,{children:u&&m.jsxs(m.Fragment,{children:[m.jsx("audio",{ref:A,src:u.audio,onEnded:()=>p(!1)}),m.jsxs(XE,{children:[m.jsxs(FE,{onClick:R,disabled:v,children:[h?m.jsx(P2,{}):m.jsx(Dc,{}),h?" Pausa":" Ascolta"]}),m.jsxs(QE,{$playing:h&&!v,children:[m.jsx("div",{className:"bar"}),m.jsx("div",{className:"bar"}),m.jsx("div",{className:"bar"}),m.jsx("div",{className:"bar"}),m.jsx("div",{className:"bar"}),m.jsx("div",{className:"bar"}),m.jsx("div",{className:"bar"})]})]}),O?m.jsxs(tT,{children:[m.jsx(nT,{src:u.image,alt:u.name}),m.jsx(aT,{children:u.name})]}):v?null:m.jsxs(KE,{children:[m.jsx(ZE,{type:"text",value:g,onChange:G=>b(G.target.value),placeholder:"Nome del Pokémon...",disabled:v}),m.jsx(IE,{onClick:T,disabled:!g.trim()||v,children:"Indovina"})]}),v&&m.jsxs(JE,{$correct:C,children:[m.jsx(WE,{children:C?m.jsx(Yi,{}):m.jsx(di,{})}),m.jsx(eT,{children:C?"Corretto! Hai guadagnato 500 punti!":`Sbagliato! Era ${u.name}.`}),!O&&!C&&m.jsx(Bx,{$secondary:!0,onClick:N,children:"Mostra Pokémon"}),m.jsx(Bx,{onClick:D,children:"Torna alla Ruota"})]})]})})}),m.jsxs(iT,{children:[m.jsx(oT,{className:"ball1"}),m.jsx(Pf,{className:"note1"}),m.jsx(Pf,{className:"note2"}),m.jsx(Pf,{className:"note3"})]})]})}const _E=He`
  0% { height: 5px; }
  50% { height: 30px; }
  100% { height: 5px; }
`,wv=He`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,VE=y.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: #0a1428;
`,UE=y.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(19, 42, 87, 0.8);
  color: #ffde00;
  padding: 8px 15px;
  border-radius: 20px;
  border: 2px solid #ffde00;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    top: 10px;
    left: 10px;
  }
`,HE=y.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin: 2rem 0 1rem;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-shadow: 2px 2px 0 #3b4cca;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-top: 4rem;
  }
`,qE=y.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`,GE=y.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`,YE=y.div`
  width: 100%;
  background: rgba(19, 42, 87, 0.8);
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,XE=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
    margin: 0.5rem 0 1.5rem;
  }
`,FE=y.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`,QE=y.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;

  .bar {
    width: 7px;
    height: 5px;
    background: #ffde00;
    border-radius: 3px;
    animation: ${_E} ${n=>n.$playing?"0.5s":"0s"}
      ease-in-out infinite;
    animation-play-state: ${n=>n.$playing?"running":"paused"};
    transform-origin: bottom center;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation-delay: 0.5s;
    }
    &:nth-child(6) {
      animation-delay: 0.4s;
    }
    &:nth-child(7) {
      animation-delay: 0.3s;
    }
  }
`,KE=y.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`,ZE=y.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid rgba(59, 76, 202, 0.5);
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #3b4cca;
  }

  &:disabled {
    background: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
`,IE=y.button`
  padding: 12px 25px;
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,JE=y.div`
  width: 100%;
  background: ${n=>n.$correct?"linear-gradient(135deg, rgba(120, 200, 80, 0.9), rgba(60, 130, 40, 0.9))":"linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(150, 30, 30, 0.9))"};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${wv} 0.5s ease;
  border: 3px solid ${n=>n.$correct?"#78C850":"#ee1515"};
`,WE=y.div`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`,eT=y.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`,Bx=y.button`
  background: ${n=>n.$secondary?"#3b4cca":"#ffde00"};
  color: ${n=>n.$secondary?"white":"#3b4cca"};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`,tT=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  animation: ${wv} 0.7s ease;
`,nT=y.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
`,aT=y.div`
  font-size: 1.5rem;
  color: #ffde00;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`,iT=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a1428;
    z-index: -1;
  }
`,rT=He`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;He`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;const oT=y.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: radial-gradient(
    circle at 50% 50%,
    #ffffff 0%,
    #ffffff 35%,
    #000000 35%,
    #000000 37%,
    #ee1515 37%,
    #ee1515 50%,
    #ffffff 50%
  );
  border-radius: 50%;
  opacity: 0.1;

  &.ball1 {
    top: 10%;
    left: 5%;
    animation: ${rT} 20s linear infinite;
  }
`,Pf=y.div`
  position: absolute;
`,Lx=[{id:1,name:"Pikachu + Charizard",fusionImage:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",components:[{name:"Pikachu",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{name:"Charizard",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"}]},{id:2,name:"Bulbasaur + Squirtle + Charmander",fusionImage:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",components:[{name:"Bulbasaur",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{name:"Squirtle",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},{name:"Charmander",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"}]},{id:3,name:"Eevee + Jigglypuff",fusionImage:"https://assets.pokemon.com/assets/cms2/img/pokedx/full/133.png",components:[{name:"Eevee",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{name:"Jigglypuff",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"}]},{id:4,name:"Meowth + Psyduck + Magikarp",fusionImage:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",components:[{name:"Meowth",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"},{name:"Psyduck",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"},{name:"Magikarp",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"}]},{id:5,name:"Snorlax + Machamp",fusionImage:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",components:[{name:"Snorlax",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{name:"Machamp",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"}]}];function sT(){const n=Ua(),i=ga(),{updatePlayerScore:o}=Ha(),[s,c]=j.useState(null),[u,f]=j.useState(null),[h,p]=j.useState([]),[g,b]=j.useState(!1),[v,w]=j.useState(!1),[C,E]=j.useState(!1),[O,B]=j.useState([]);j.useEffect(()=>{var G;(G=i.state)!=null&&G.player?c(i.state.player):n("/game/wheel")},[i,n]),j.useEffect(()=>{const G=Math.floor(Math.random()*Lx.length),Z=Lx[G];f(Z),p(new Array(Z.components.length).fill(""))},[]);const A=(G,Z)=>{const ae=[...h];ae[G]=Z,p(ae)},R=()=>{if(!u||h.some(de=>!de.trim()))return;const G=h.map(de=>de.trim().toLowerCase()),Z=u.components.map(de=>de.name.toLowerCase()),ae=G.every(de=>Z.includes(de))&&G.length===Z.length,Q=G.map(de=>Z.includes(de));if(B(Q),w(ae),b(!0),s){const de=Q.filter(Boolean).length,X=Math.floor(400/u.components.length),Pe=de*X;if(Pe>0){const rt=s.score+Pe;o(s.id,rt),c({...s,score:rt})}}},T=()=>{E(!0)},N=()=>{n("/game/wheel")},D=(G,Z)=>{if(G.key==="Enter"&&!g)if(Z<h.length-1){const ae=document.querySelector(`input[data-index="${Z+1}"]`);ae==null||ae.focus()}else h.every(ae=>ae.trim())&&R()};return m.jsxs(cT,{children:[m.jsxs(uT,{onClick:N,children:[m.jsx(ja,{})," Torna alla ruota"]}),m.jsx(dT,{children:"Fusione Pokémon"}),m.jsx(fT,{children:s?`${s.name}, indovina i Pokémon usati per creare questa fusione!`:"Indovina i componenti della fusione!"}),m.jsx(hT,{children:m.jsx(pT,{children:u&&m.jsxs(m.Fragment,{children:[m.jsx(mT,{children:m.jsxs(gT,{children:[m.jsx(xT,{src:u.fusionImage,alt:"Fusione Pokémon"}),m.jsxs(bT,{children:["Fusione di ",u.components.length," Pokémon"]})]})}),C?m.jsxs(RT,{children:[m.jsx(MT,{children:"Componenti della Fusione:"}),m.jsx(vT,{children:u.components.map((G,Z)=>m.jsxs(Zn.Fragment,{children:[m.jsxs(yT,{children:[m.jsx(wT,{src:G.image,alt:G.name}),m.jsx(ST,{children:G.name})]}),Z<u.components.length-1&&m.jsx(CT,{children:"+"})]},Z))})]}):g?null:m.jsxs(AT,{children:[m.jsxs(LT,{children:["Inserisci i nomi dei ",u.components.length," ","Pokémon:"]}),m.jsx(NT,{children:h.map((G,Z)=>m.jsx($T,{children:m.jsx(jT,{type:"text",value:G,onChange:ae=>A(Z,ae.target.value),onKeyPress:ae=>D(ae,Z),placeholder:`Pokémon ${Z+1}...`,disabled:g,"data-index":Z})},Z))}),m.jsx(ET,{onClick:R,disabled:h.some(G=>!G.trim())||g,children:"Indovina Tutti"})]}),g&&m.jsxs(TT,{$correct:v,children:[m.jsx(zT,{children:v?m.jsx(Yi,{}):m.jsx(di,{})}),m.jsx(kT,{children:v?"Perfetto! Hai indovinato tutti i componenti! +400 punti!":`${O.filter(Boolean).length}/${u.components.length} corretti! +${O.filter(Boolean).length*Math.floor(400/u.components.length)} punti!`}),m.jsx(PT,{children:h.map((G,Z)=>m.jsxs(_T,{$correct:O[Z],children:[m.jsx("span",{children:G||"(vuoto)"}),O[Z]?m.jsx(Yi,{}):m.jsx(di,{})]},Z))}),!C&&!v&&m.jsx(Nx,{$secondary:!0,onClick:T,children:"Mostra Componenti"}),m.jsx(Nx,{onClick:N,children:"Torna alla Ruota"})]})]})})}),m.jsxs(DT,{children:[m.jsx(Uc,{className:"ball1"}),m.jsx(Uc,{className:"ball2"}),m.jsx(OT,{className:"ball3"}),m.jsx(BT,{className:"ball4"})]})]})}const Sv=He`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,lT=He`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Vc=He`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;He`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;const cT=y.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #233975 0%, #1a2a5a 100%);
`,uT=y.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(19, 42, 87, 0.8);
  color: #ffde00;
  padding: 8px 15px;
  border-radius: 20px;
  border: 2px solid #ffde00;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    top: 10px;
    left: 10px;
  }
`,dT=y.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca, 0 0 20px rgba(255, 222, 0, 0.5);
  margin: 2rem 0 1rem;
  text-align: center;
  z-index: 1;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-top: 4rem;
  }
`,fT=y.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  z-index: 1;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`,hT=y.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`,pT=y.div`
  width: 100%;
  background: rgba(19, 42, 87, 0.8);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,mT=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,gT=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,xT=y.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
  animation: ${lT} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
`,bT=y.div`
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: white;
  padding: 8px 16px;
  border-radius: 15px;
  font-weight: bold;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
`;y.button`
  display: none;
`;y.div`
  display: none;
`;y.p`
  display: none;
`;const vT=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,yT=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`,wT=y.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`,ST=y.div`
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
`,CT=y.div`
  color: #ffde00;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0.5rem;
`,AT=y.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`,jT=y.input`
  flex: 1;
  padding: 12px 20px;
  border-radius: 10px;
  border: 2px solid rgba(59, 76, 202, 0.5);
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #3b4cca;
  }

  &:disabled {
    background: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
`,ET=y.button`
  padding: 12px 25px;
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,TT=y.div`
  width: 100%;
  background: ${n=>n.$correct?"linear-gradient(135deg, rgba(76, 175, 80, 0.9), rgba(56, 142, 60, 0.9))":"linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(198, 40, 40, 0.9))"};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${Sv} 0.5s ease;
  border: 3px solid ${n=>n.$correct?"#4CAF50":"#ee1515"};
`,zT=y.div`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`,kT=y.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`,Nx=y.button`
  background: ${n=>n.$secondary?"#3b4cca":"#ffde00"};
  color: ${n=>n.$secondary?"white":"#3b4cca"};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`,RT=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  animation: ${Sv} 0.7s ease;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 222, 0, 0.3);
  width: 100%;
  max-width: 500px;
`,MT=y.div`
  color: #ffde00;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;y.div`
  color: #4caf50;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`;const DT=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`,Uc=y.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f0f0f0 50%, #ee1515 50%);
  opacity: 0.1;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px #333, 0 0 0 8px white;
  }

  &.ball1 {
    top: 10%;
    right: 15%;
    animation: ${Vc} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 15%;
    left: 10%;
    animation: ${Vc} 15s ease-in-out infinite reverse;
  }
`,OT=y(Uc)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #3b4cca 50%);

  &.ball3 {
    top: 60%;
    right: 5%;
    width: 80px;
    height: 80px;
    animation: ${Vc} 18s ease-in-out infinite;
  }
`,BT=y(Uc)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #ffde00 50%);

  &.ball4 {
    bottom: 30%;
    right: 20%;
    width: 100px;
    height: 100px;
    animation: ${Vc} 14s ease-in-out infinite reverse;
  }
`;y.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: blur(8px) brightness(0.7);

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;const LT=y.div`
  color: #ffde00;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`,NT=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
`,$T=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,PT=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  width: 100%;
`,_T=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background: ${n=>n.$correct?"rgba(76, 175, 80, 0.3)":"rgba(238, 21, 21, 0.3)"};
  color: white;
  font-weight: 500;

  svg {
    color: ${n=>n.$correct?"#4CAF50":"#ee1515"};
  }
`,Cs="/vegetaquizshow/assets/Canalipoli-DHnHYnqm.jpg",vr=[{id:1,name:"Canalipoli",image:Cs,score:100,hints:[{type:"text",content:"Una città attraversata da numerosi canali",cost:30},{type:"text",content:"Si trova nella regione di Johto",cost:50},{type:"text",content:"È famosa per i suoi ponti e le gondole",cost:70},{type:"text",content:"Qui vivono i leggendari Latios e Latias",cost:90},{type:"sound",content:"/audio/altomare-theme.mp3",cost:100},{type:"text",content:"La città ospita un importante museo con un antico meccanismo di difesa",cost:120},{type:"text",content:"Ispirata alla città di Venezia nel mondo reale",cost:150}]},{id:2,name:"Canalipoli",image:Cs,score:100,hints:[{type:"text",content:"Una città attraversata da numerosi canali",cost:30},{type:"text",content:"Si trova nella regione di Johto",cost:50},{type:"text",content:"È famosa per i suoi ponti e le gondole",cost:70},{type:"text",content:"Qui vivono i leggendari Latios e Latias",cost:90},{type:"sound",content:"/audio/altomare-theme.mp3",cost:100},{type:"text",content:"La città ospita un importante museo con un antico meccanismo di difesa",cost:120},{type:"text",content:"Ispirata alla città di Venezia nel mondo reale",cost:150}]},{id:3,name:"Canalipoli",image:Cs,score:100,hints:[{type:"text",content:"Una città attraversata da numerosi canali",cost:30},{type:"text",content:"Si trova nella regione di Johto",cost:50},{type:"text",content:"È famosa per i suoi ponti e le gondole",cost:70},{type:"text",content:"Qui vivono i leggendari Latios e Latias",cost:90},{type:"sound",content:"/audio/altomare-theme.mp3",cost:100},{type:"text",content:"La città ospita un importante museo con un antico meccanismo di difesa",cost:120},{type:"text",content:"Ispirata alla città di Venezia nel mondo reale",cost:150}]},{id:4,name:"Canalipoli",image:Cs,score:100,hints:[{type:"text",content:"Una città attraversata da numerosi canali",cost:30},{type:"text",content:"Si trova nella regione di Johto",cost:50},{type:"text",content:"È famosa per i suoi ponti e le gondole",cost:70},{type:"text",content:"Qui vivono i leggendari Latios e Latias",cost:90},{type:"sound",content:"/audio/altomare-theme.mp3",cost:100},{type:"text",content:"La città ospita un importante museo con un antico meccanismo di difesa",cost:120},{type:"text",content:"Ispirata alla città di Venezia nel mondo reale",cost:150}]},{id:5,name:"Canalipoli",image:Cs,score:100,hints:[{type:"text",content:"Una città attraversata da numerosi canali",cost:30},{type:"text",content:"Si trova nella regione di Johto",cost:50},{type:"text",content:"È famosa per i suoi ponti e le gondole",cost:70},{type:"text",content:"Qui vivono i leggendari Latios e Latias",cost:90},{type:"sound",content:"/audio/altomare-theme.mp3",cost:100},{type:"text",content:"La città ospita un importante museo con un antico meccanismo di difesa",cost:120},{type:"text",content:"Ispirata alla città di Venezia nel mondo reale",cost:150}]}];He`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;He`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;const mi=He`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Cv=He`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,ru=He`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
`,Av=He`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,VT=He`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
`,UT=y.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-attachment: fixed;
  color: white;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>')
      repeat;
    animation: ${Cv} 20s linear infinite;
    pointer-events: none;
  }
`,HT=y.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${mi} 0.6s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,jv=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`,Ev=y.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: ${ru} 2s infinite;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`,Tv=y.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,qT=y.div`
  font-size: 0.9rem;
  opacity: 0.9;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  display: inline-block;
  margin: 0.2rem 0;
`,zv=y.div`
  font-size: 1.2rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &.score-changed {
    animation: ${VT} 1s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`,GT=y.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: ${Cv} 1s ease-in-out;
`,YT=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  min-width: 200px;

  span {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 0.8rem;
  }
`,XT=y.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
`,FT=y.div`
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #44a08d);
  border-radius: 4px;
  transition: width 0.5s ease-in-out;
  box-shadow: 0 0 10px rgba(78, 205, 196, 0.5);
`,QT=y.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  animation: ${mi} 0.8s ease-out 0.2s both;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,KT=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ZT=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;

  @media (max-width: 900px) {
    width: 100%;
  }
`,IT=y.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 1rem;
  }
`,JT=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  filter: brightness(1.05) contrast(1.1);

  &:hover {
    filter: brightness(1.1) contrast(1.15);
  }
`,WT=y.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 2;

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e3e3e3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: ${Av} 1s linear infinite;
  }

  span {
    color: #6c757d;
    font-weight: 500;
  }
`,ez=y.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${mi} 0.6s ease-out 0.4s both;
  width: 100%;
`,tz=y.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`,nz=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 10px;
  }
`,az=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({$used:n})=>n?"rgba(76, 175, 80, 0.1)":"rgba(0, 0, 0, 0.05)"};
  padding: 1rem;
  border-radius: 15px;
  border-left: 4px solid
    ${({$used:n})=>n?"#4caf50":"rgba(0, 0, 0, 0.2)"};
  transition: all 0.3s ease;
  cursor: ${({$used:n})=>n?"default":"pointer"};

  &:hover {
    background: ${({$used:n})=>n?"rgba(76, 175, 80, 0.15)":"rgba(0, 0, 0, 0.1)"};
    transform: translateX(5px);
  }
`,iz=y.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`,rz=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,oz=y.div`
  color: #333;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 500;
`,sz=y.div`
  color: #666;
  font-style: italic;
  font-size: 0.95rem;
`,lz=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #666;
`,cz=y.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    animation: ${ru} 1s infinite;
  }

  svg {
    font-size: 1rem;
  }
`,kv=y.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${mi} 0.6s ease-out 0.6s both;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;y(kv)``;const uz=y.h3`
  color: #333;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;y.div`
  position: relative;
`;const dz=y.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }
`,fz=y.button`
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`,hz=y.div`
  width: 100%;
  max-width: 500px;
  background: ${({$correct:n})=>n?"linear-gradient(135deg, #4caf50, #66bb6a)":"linear-gradient(135deg, #f44336, #ef5350)"};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.3);
  animation: ${mi} 0.5s ease, ${ru} 0.5s ease 0.2s;
  color: white;
  text-align: center;
  z-index: 1;
`,pz=y.div`
  font-size: 4rem;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${ru} 1s infinite;
`,mz=y.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,gz=y.p`
  font-size: 1.3rem;
  margin: 0;
  line-height: 1.4;
  opacity: 0.95;
`,xz=y.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`,$x=y.button`
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`,bz=y.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${mi} 0.6s ease-out;
  z-index: 1;
`,vz=y.h3`
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
`,yz=y.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1rem 0;
`,wz=y.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({$guessed:n})=>n?"linear-gradient(45deg, #4caf50, #66bb6a)":"linear-gradient(45deg, #e0e0e0, #bdbdbd)"};
  border: 2px solid
    ${({$guessed:n})=>n?"#2e7d32":"rgba(0, 0, 0, 0.1)"};
  color: ${({$guessed:n})=>n?"white":"#666"};
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`,Sz=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;

  strong {
    color: #667eea;
    font-weight: 700;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`,Cz=y.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: ${mi} 1s ease-out;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,Az=y.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${mi} 1s ease-out 0.2s both;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,jz=y(pi)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`,Ez=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`,Px=y.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  opacity: 0.1;
  animation: ${Av} 60s linear infinite;

  &.ball1 {
    top: 10%;
    left: 10%;
  }

  &.ball2 {
    bottom: 10%;
    right: 10%;
  }
`,Tz=y.section`
  width: 100%;
  max-width: 800px;
  margin: 2rem 0;
  z-index: 1;
`,zz=y.h2`
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,kz=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`,Rz=y.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 1.5rem;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  animation: ${mi} 0.8s ease-out;
  z-index: 1;
`;y.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  p {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-weight: 500;
  }

  strong {
    color: #667eea;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;const Mz=y.button`
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 5px 12px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Dz=y.button`
  background: linear-gradient(45deg, #f44336, #ef5350);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-end;
  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(244, 67, 54, 0.4);
  }
`,Oz=y.div`
  font-size: 1.5rem;
  color: white;
  margin-top: 3rem;
  text-align: center;
`,Bz=({players:n,onSelectPlayer:i})=>m.jsxs(Tz,{children:[m.jsx(zz,{children:"Seleziona un Allenatore"}),m.jsx(kz,{children:n.map(o=>m.jsxs(Rz,{onClick:()=>i(o),children:[m.jsx(Ev,{src:o.avatar,alt:o.name}),m.jsxs(jv,{children:[m.jsx(Tv,{children:o.name}),m.jsxs(zv,{children:[o.score," punti"]})]})]},o.id))})]}),Lz=({hints:n,usedHints:i=[],isHintUsed:o,onBuyHint:s,playerScore:c,onPlaySound:u})=>{const f=h=>o?o(h):i.some(p=>p.content===h||p===h);return m.jsxs(ez,{children:[m.jsx(tz,{children:"Indizi Disponibili:"}),m.jsx(nz,{children:n.map((h,p)=>m.jsxs(az,{$used:f(h.content),children:[m.jsx(iz,{children:h.type==="text"?m.jsx($2,{}):m.jsx(Jf,{})}),m.jsxs(rz,{children:[f(h.content)?m.jsx(oz,{children:h.type==="text"?h.content:m.jsxs(cz,{onClick:()=>u&&u(),children:["Riproduci tema musicale ",m.jsx(Jf,{})]})}):m.jsx(sz,{children:h.type==="text"?"Indizio testuale":"Tema musicale della città"}),m.jsx(lz,{children:f(h.content)?"Già sbloccato":m.jsxs(Mz,{onClick:()=>s&&s(h),disabled:c<h.cost,children:["Sblocca (",h.cost," punti)"]})})]})]},p))})]})},Nz=({onGuess:n})=>{const[i,o]=j.useState(""),s=()=>{i.trim()&&(n(i),o(""))},c=u=>{u.key==="Enter"&&s()};return m.jsxs(kv,{children:[m.jsx(uz,{children:"Indovina la città:"}),m.jsx(dz,{type:"text",value:i,onChange:u=>o(u.target.value),onKeyPress:c,placeholder:"Scrivi il nome della città..."}),m.jsx(fz,{onClick:s,disabled:!i.trim(),children:"Conferma"})]})},$z=({activePlayer:n,currentCity:i,usedHints:o,isHintUsed:s,onBuyHint:c,onGuess:u,onPlaySound:f})=>{const[h,p]=j.useState(!1),[g,b]=j.useState(!1),v=()=>{p(!0)},w=E=>E>=1e3?"Master":E>=500?"Expert":E>=200?"Advanced":E>=100?"Intermediate":"Beginner",C=()=>{const E=i.hints.length,O=o.length;return Math.min(O/E*100,100)};return m.jsxs(m.Fragment,{children:[m.jsxs(HT,{children:[m.jsxs(jv,{children:[m.jsx(Ev,{children:n.name.charAt(0).toUpperCase()}),m.jsxs("div",{children:[m.jsx(Tv,{children:n.name}),m.jsx(qT,{children:w(n.score)}),m.jsxs(zv,{className:g?"score-changed":"",children:[n.score," punti",m.jsx(GT,{})]})]})]}),m.jsxs(YT,{children:[m.jsxs("span",{children:["Indizi utilizzati: ",o.length,"/",i.hints.length]}),m.jsx(XT,{children:m.jsx(FT,{style:{width:`${C()}%`}})})]})]}),m.jsxs(QT,{children:[m.jsx(KT,{children:m.jsxs(IT,{children:[!h&&m.jsxs(WT,{children:[m.jsx("div",{className:"loading-spinner"}),m.jsx("span",{children:"Caricamento immagine..."})]}),m.jsx(JT,{src:i.image,alt:"Dettaglio di città Pokémon",onLoad:v,style:{opacity:h?1:0}})]})}),m.jsxs(ZT,{children:[m.jsx(Lz,{hints:i.hints,usedHints:o,isHintUsed:s,onBuyHint:c,onPlaySound:f,playerScore:n.score}),m.jsx(Nz,{onGuess:u})]})]})]})},Pz=({isCorrect:n,cityName:i,points:o,onPlayAgain:s,onReturn:c})=>m.jsxs(hz,{$correct:n,children:[m.jsx(pz,{children:n?m.jsx(Yi,{}):m.jsx(di,{})}),m.jsx(mz,{children:n?"Corretto!":"Sbagliato!"}),m.jsx(gz,{children:n?`Era ${i}! Hai guadagnato ${o} punti!`:`Era ${i}. Nessun punto guadagnato.`}),m.jsxs(xz,{children:[m.jsx($x,{onClick:s,children:"Gioca ancora"}),m.jsx($x,{onClick:c,children:"Torna ai giochi"})]})]}),_z=({guessedCities:n,onReset:i})=>{const o=vr.length,s=o-n.length,c=Math.round(n.length/o*100);return m.jsxs(bz,{children:[m.jsxs(vz,{children:[m.jsx(N2,{})," Città Pokémon"]}),m.jsx(yz,{children:vr.map(u=>m.jsx(wz,{$guessed:n.includes(u.id),title:n.includes(u.id)?u.name:"Città sconosciuta",children:n.includes(u.id)?m.jsx(Yi,{}):m.jsx(Cw,{})},u.id))}),m.jsx(Sz,{children:n.length>0?m.jsxs(m.Fragment,{children:[m.jsxs("span",{children:["Indovinate:"," ",m.jsxs("strong",{children:[n.length,"/",o]})," ","(",c,"%)"]}),m.jsxs("span",{children:["Rimanenti: ",m.jsx("strong",{children:s})]})]}):m.jsx("span",{children:"Nessuna città ancora indovinata!"})}),n.length>0&&m.jsxs(Dz,{onClick:i,children:[m.jsx(_2,{})," Resetta Progresso"]})]})};function Vz(){const n=Ua(),{players:i,updatePlayerScore:o}=Ha(),[s,c]=j.useState(null),[u,f]=j.useState(null),[h,p]=j.useState([]),[g,b]=j.useState(""),[v,w]=j.useState(!1),[C,E]=j.useState(!1),[O,B]=j.useState(!0),[A,R]=j.useState(!1),T=j.useRef(null);j.useEffect(()=>{if(i.length===0){n("/");return}if(s&&!u){const Y=vr[Math.floor(Math.random()*vr.length)];f(Y),R(!0)}return()=>{T.current&&(T.current.pause(),T.current.src="")}},[i,n,s,u]);const N=Y=>{c(Y),B(!1)},D=Y=>{if(!s||h.includes(Y.content))return;if(s.score<Y.cost){alert("Non hai abbastanza punti per questo indizio!");return}Y.type==="sound"&&(T.current&&T.current.pause(),T.current=new Audio(Y.content),T.current.volume=.6,T.current.play().catch(K=>console.error("Errore nel riprodurre l'audio:",K)));const je=s.score-Y.cost;o(s.id,je),c({...s,score:je}),p([...h,Y.content])},G=()=>{T.current&&T.current.pause(),n("/game")},Z=()=>{B(!0),c(null),f(null),p([]),b(""),w(!1),E(!1),R(!1)},ae=Y=>h.includes(Y),Q=()=>{T.current&&T.current.play()},[de,X]=j.useState(()=>{const Y=localStorage.getItem("cityGameGuessedCities");return Y?JSON.parse(Y):[]});j.useEffect(()=>{localStorage.setItem("cityGameGuessedCities",JSON.stringify(de))},[de]);const Pe=Y=>{if(!u||!Y.trim())return;const je=Y.trim().toLowerCase(),K=u.name.toLowerCase(),I=je===K;if(E(I),w(!0),I&&s){de.includes(u.id)||X([...de,u.id]);const re=s.score+u.score;o(s.id,re),c({...s,score:re})}T.current&&T.current.pause()},rt=()=>{X([]),localStorage.removeItem("cityGameGuessedCities")};return j.useEffect(()=>{if(i.length===0){n("/");return}if(s&&!u){const Y=vr.filter(je=>!de.includes(je.id));if(Y.length===0){const je=vr[Math.floor(Math.random()*vr.length)];f(je)}else{const je=Y[Math.floor(Math.random()*Y.length)];f(je)}R(!0)}},[i,n,s,u,de]),m.jsxs(UT,{children:[m.jsxs(jz,{to:"/game",children:[m.jsx(ja,{})," Torna ai giochi"]}),m.jsx(Cz,{children:"Indovina la Città Pokémon"}),m.jsx(Az,{children:"Guarda l'immagine e indovina di quale città Pokémon si tratta"}),O&&m.jsx(_z,{guessedCities:de,onReset:rt}),O?m.jsx(Bz,{players:i,onSelectPlayer:N}):A?v?m.jsx(Pz,{isCorrect:C,cityName:u.name,points:u.score,onPlayAgain:Z,onReturn:G}):m.jsx($z,{activePlayer:s,currentCity:u,usedHints:h,isHintUsed:ae,onBuyHint:D,onGuess:Pe,onPlaySound:Q}):m.jsx(Oz,{children:"Caricamento..."}),m.jsxs(Ez,{children:[m.jsx(Px,{className:"ball1"}),m.jsx(Px,{className:"ball2"})]})]})}const Uz="/vegetaquizshow/assets/domanda%201-Cn4nUSCK.png",Hz="/vegetaquizshow/assets/risposta%201-Dffg8_oj.png",qz="/vegetaquizshow/assets/domanda%202-CwUe3IEL.png",Gz="/vegetaquizshow/assets/risposta%202-C1F0NqQE.png",Yz="/vegetaquizshow/assets/domanda%203-C7dQx4I1.png",Xz="/vegetaquizshow/assets/risposta%203-iB2mK_Q4.png",Fz="/vegetaquizshow/assets/domanda%204-z_ME-vaP.png",Qz="/vegetaquizshow/assets/risposta%204-DbzyNN1T.png",Kz="/vegetaquizshow/assets/domanda%205-Bmd9Oacw.png",Zz="/vegetaquizshow/assets/risposta%205-D6gwoRIT.png",Iz="/vegetaquizshow/assets/domanda%206-DYxuzD63.png",Jz="/vegetaquizshow/assets/risposta%206-O5Bsf2qp.png",Wz="/vegetaquizshow/assets/domanda%207-BNEEHyVa.png",ek="/vegetaquizshow/assets/risposta%207-B_jACCzW.png",tk="/vegetaquizshow/assets/domanda%208-DjK21ttt.png",nk="/vegetaquizshow/assets/risposta%208--_SAXSOb.png",ak="/vegetaquizshow/assets/domanda%209-Dl9UzCCG.png",ik="/vegetaquizshow/assets/risposta%209-CLFSvAyh.png",rk="/vegetaquizshow/assets/domanda%2010-XzmgVRld.png",ok="/vegetaquizshow/assets/risposta%2010-BwSpQ-dx.png",sk="/vegetaquizshow/assets/domanda%2011-D44SIPeq.png",lk="/vegetaquizshow/assets/risposta%2011-BAYJoXN9.png",ck="/vegetaquizshow/assets/domanda%2012-BT3Z50tZ.png",uk="/vegetaquizshow/assets/risposta%2012-BoyYzRyj.png",pc=[{id:1,name:"staraptor",questionImage:Uz,answerImage:Hz,points:300},{id:2,name:"audino",questionImage:qz,answerImage:Gz,points:300},{id:3,name:"darkrai",questionImage:Yz,answerImage:Xz,points:500},{id:4,name:"cubone",questionImage:Fz,answerImage:Qz,points:200},{id:5,name:"cranidos",questionImage:Kz,answerImage:Zz,points:300},{id:6,name:"spinda",questionImage:Iz,answerImage:Jz,points:300},{id:7,name:"bagon",questionImage:Wz,answerImage:ek,points:400},{id:8,name:"lucario",questionImage:tk,answerImage:nk,points:400},{id:9,name:"armaldo",questionImage:ak,answerImage:ik,points:300},{id:10,name:"escadrill",questionImage:rk,answerImage:ok,points:300},{id:11,name:"vigorot",questionImage:sk,answerImage:lk,points:400},{id:12,name:"ninetales",questionImage:ck,answerImage:uk,points:500}],_f="vegetaquizshow_completed_rebus";function dk(){const n=Ua(),i=ga(),{updatePlayerScore:o}=Ha(),[s,c]=j.useState(null),[u,f]=j.useState(null),[h,p]=j.useState(0),[g,b]=j.useState([]),[v,w]=j.useState([]),[C,E]=j.useState(""),[O,B]=j.useState(!1),[A,R]=j.useState(!1),[T,N]=j.useState(!1);j.useEffect(()=>{const X=localStorage.getItem(_f);if(X)try{const Pe=JSON.parse(X);w(Pe)}catch(Pe){console.error("Error loading completed rebus:",Pe),w([])}},[]),j.useEffect(()=>{const X=pc.filter(Pe=>!v.includes(Pe.id));b(X),X.length>0&&h>=X.length&&p(0)},[v,h]),j.useEffect(()=>{g.length>0&&h<g.length?(f(g[h]),E(""),B(!1),R(!1),N(!1)):g.length===0&&v.length>0&&f(null)},[g,h]),j.useEffect(()=>{var X;(X=i.state)!=null&&X.player?c(i.state.player):n("/game/wheel")},[i,n]);const D=X=>{const Pe=[...v,X];w(Pe),localStorage.setItem(_f,JSON.stringify(Pe))},G=()=>{w([]),localStorage.removeItem(_f),p(0)},Z=()=>{if(!u||!C.trim())return;const X=C.trim().toLowerCase(),Pe=u.name.toLowerCase(),rt=X===Pe;if(R(rt),B(!0),N(!0),rt&&s){const Y=s.score+u.points;o(s.id,Y),c({...s,score:Y})}},ae=()=>{A&&u&&D(u.id),N(!1),Q()},Q=()=>{n("/game/wheel")},de=X=>{X.key==="Enter"&&!O&&C.trim()&&Z()};return g.length===0&&v.length>0?m.jsxs(Vx,{children:[m.jsxs(Ux,{onClick:Q,children:[m.jsx(ja,{})," Torna alla ruota"]}),m.jsx(Hx,{children:"🧩 Rebus Challenge 🧩"}),m.jsxs(_k,{children:[m.jsx(Vk,{children:"🎉 Congratulazioni! 🎉"}),m.jsxs(Uk,{children:["Hai completato tutti i ",pc.length," rebus disponibili!"]}),m.jsx(Hk,{children:m.jsx(qk,{onClick:Q,children:"Torna alla Ruota"})})]}),m.jsxs(qx,{children:[m.jsx(fo,{className:"ball1"}),m.jsx(fo,{className:"ball2"}),m.jsx(Gx,{className:"ball3"}),m.jsx(Yx,{className:"ball4"}),m.jsx(mc,{className:"puzzle1"}),m.jsx(mc,{className:"puzzle2"})]})]}):m.jsxs(Vx,{children:[m.jsxs(Ux,{onClick:Q,children:[m.jsx(ja,{})," Torna alla ruota"]}),m.jsx(Hx,{children:"🧩 Rebus Challenge 🧩"}),m.jsxs(Gk,{children:[m.jsxs(Yk,{children:["Rebus ",h+1," di ",g.length,v.length>0&&` (${v.length} completati)`]}),m.jsx(Xk,{children:m.jsx(Fk,{$progress:(pc.length-g.length)/pc.length*100})}),v.length>0&&m.jsxs(Qk,{onClick:G,children:[m.jsx(_2,{})," Reset Tutti i Rebus"]})]}),m.jsx(pk,{children:s?`${s.name}, risolvi il rebus!`:"Decifra il rebus!"}),m.jsx(mk,{children:m.jsx(gk,{children:u&&m.jsxs(m.Fragment,{children:[m.jsxs(xk,{children:[m.jsxs(bk,{children:[m.jsx($2,{})," ",u.points," punti"]}),m.jsx(vk,{children:m.jsxs(yk,{children:[m.jsx(wk,{src:u.questionImage,alt:`Rebus ${u.id}`,onError:X=>{X.target.style.display="none",X.target.nextSibling.style.display="flex"}}),m.jsxs(Sk,{style:{display:"none"},children:["🧩 Immagine Rebus ",u.id]})]})})]}),m.jsxs(Ck,{children:[m.jsx(Ak,{children:"Qual è la soluzione di questo rebus?"}),m.jsx(jk,{type:"text",value:C,onChange:X=>E(X.target.value),onKeyPress:de,placeholder:"Scrivi la tua risposta...",disabled:O}),m.jsx(Ek,{onClick:Z,disabled:!C.trim()||O,children:"Risolvi Rebus"})]})]})})}),T&&m.jsx(Tk,{onClick:ae,children:m.jsxs(zk,{onClick:X=>X.stopPropagation(),children:[m.jsxs(kk,{$correct:A,children:[m.jsx(Rk,{children:A?m.jsx(Yi,{}):m.jsx(di,{})}),m.jsx(Mk,{children:A?"Corretto!":"Sbagliato!"})]}),m.jsxs(Dk,{children:[m.jsx(Ok,{children:A?`Ottimo! Hai guadagnato ${u.points} punti!`:`La risposta corretta era: ${u.name}`}),m.jsxs(Bk,{children:[m.jsx(Lk,{src:u.answerImage,alt:`Soluzione: ${u.name}`,onError:X=>{X.target.style.display="none",X.target.nextSibling.style.display="block"}}),m.jsxs(Nk,{style:{display:"none"},children:["Risposta: ",u.name]})]}),m.jsx($k,{children:m.jsx(Pk,{onClick:ae,children:"Torna alla Ruota"})})]})]})}),m.jsxs(qx,{children:[m.jsx(fo,{className:"ball1"}),m.jsx(fo,{className:"ball2"}),m.jsx(Gx,{className:"ball3"}),m.jsx(Yx,{className:"ball4"}),m.jsx(mc,{className:"puzzle1"}),m.jsx(mc,{className:"puzzle2"})]})]})}const fk=He`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,hk=He`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,Hc=He`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,_x=He`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;He`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;const Vx=y.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #233975 0%, #1a2a5a 100%);
`,Ux=y.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(19, 42, 87, 0.8);
  color: #ffde00;
  padding: 8px 15px;
  border-radius: 20px;
  border: 2px solid #ffde00;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
    top: 10px;
    left: 10px;
  }
`,Hx=y.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca, 0 0 20px rgba(255, 222, 0, 0.5);
  margin: 2rem 0 1rem;
  text-align: center;
  z-index: 1;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-top: 4rem;
  }
`,pk=y.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
  z-index: 1;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`,mk=y.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`,gk=y.div`
  width: 100%;
  background: rgba(19, 42, 87, 0.8);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,xk=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
`,bk=y.div`
  background: linear-gradient(135deg, #ffde00, #ffc107);
  color: #3b4cca;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(255, 222, 0, 0.3);
`,vk=y.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  border: 3px solid #ffde00;
  min-height: 300px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 250px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 200px;
  }
`,yk=y.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`,wk=y.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid #3b4cca;

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 250px;
  }
`,Sk=y.div`
  width: 100%;
  height: 250px;
  background: rgba(59, 76, 202, 0.1);
  border: 2px dashed #3b4cca;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #3b4cca;
  font-weight: bold;

  @media (max-width: 480px) {
    height: 200px;
    font-size: 1.5rem;
  }
`,Ck=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  align-items: center;
`,Ak=y.div`
  color: #ffde00;
  font-weight: 600;
  text-align: center;
  font-size: 1.1rem;
`,jk=y.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 15px;
  border: 2px solid rgba(59, 76, 202, 0.5);
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;
  text-align: center;

  &:focus {
    border-color: #3b4cca;
    box-shadow: 0 0 0 3px rgba(59, 76, 202, 0.2);
  }

  &:disabled {
    background: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
`,Ek=y.button`
  padding: 12px 30px;
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
  }
`,Tk=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fk} 0.3s ease;
`,zk=y.div`
  background: rgba(19, 42, 87, 0.95);
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid rgba(255, 222, 0, 0.5);
  backdrop-filter: blur(10px);
  animation: ${hk} 0.5s ease;

  @media (max-width: 768px) {
    width: 95%;
    max-width: 500px;
  }
`,kk=y.div`
  background: ${n=>n.$correct?"linear-gradient(135deg, #4caf50, #66bb6a)":"linear-gradient(135deg, #f44336, #ef5350)"};
  padding: 1.5rem;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`,Rk=y.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
`,Mk=y.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,Dk=y.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Ok=y.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Bk=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid #ffde00;
`,Lk=y.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-height: 250px;
  }

  @media (max-width: 480px) {
    max-height: 200px;
  }
`,Nk=y.div`
  color: #3b4cca;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,$k=y.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`,Pk=y.button`
  background: linear-gradient(135deg, #ffde00, #ffc107);
  color: #3b4cca;
  border: none;
  border-radius: 15px;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 222, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 222, 0, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
  }
`,qx=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`,fo=y.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #f0f0f0 50%, #ee1515 50%);
  opacity: 0.1;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 4px #333, 0 0 0 8px white;
  }

  &.ball1 {
    top: 10%;
    right: 15%;
    animation: ${Hc} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 15%;
    left: 10%;
    animation: ${Hc} 15s ease-in-out infinite reverse;
  }
`,Gx=y(fo)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #3b4cca 50%);

  &.ball3 {
    top: 60%;
    right: 5%;
    width: 80px;
    height: 80px;
    animation: ${Hc} 18s ease-in-out infinite;
  }
`,Yx=y(fo)`
  background: linear-gradient(to bottom, #f0f0f0 50%, #ffde00 50%);

  &.ball4 {
    bottom: 30%;
    right: 20%;
    width: 100px;
    height: 100px;
    animation: ${Hc} 14s ease-in-out infinite reverse;
  }
`,mc=y.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 222, 0, 0.1);
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 30%,
    0% 40%,
    0% 80%,
    30% 70%,
    20% 100%,
    80% 100%,
    70% 70%,
    100% 80%,
    100% 40%,
    70% 30%,
    100% 20%,
    80% 0%
  );
  opacity: 0.3;

  &.puzzle1 {
    top: 20%;
    left: 5%;
    animation: ${_x} 20s linear infinite;
  }

  &.puzzle2 {
    bottom: 20%;
    right: 10%;
    animation: ${_x} 25s linear infinite reverse;
  }
`,_k=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: rgba(19, 42, 87, 0.8);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.3);
  backdrop-filter: blur(10px);
  max-width: 600px;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,Vk=y.h2`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,Uk=y.p`
  color: white;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Hk=y.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`,qk=y.button`
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 200px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
    background: linear-gradient(135deg, #5cbf60, #4caf50);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
    min-width: auto;
  }
`,Gk=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  z-index: 1;
`,Yk=y.div`
  color: #ffde00;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`,Xk=y.div`
  width: 300px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 222, 0, 0.3);

  @media (max-width: 480px) {
    width: 250px;
  }
`,Fk=y.div`
  width: ${n=>n.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #66bb6a);
  transition: width 0.5s ease;
`,Qk=y.button`
  background: rgba(238, 21, 21, 0.8);
  color: white;
  border: 2px solid #ee1515;
  border-radius: 15px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(238, 21, 21, 0.3);

  &:hover {
    background: #ee1515;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(238, 21, 21, 0.4);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }
`,Kk=new URL("/vegetaquizshow/assets/Pokemon%20Mystery%20Dungeon%20Red_Blue%20Rescue%20Team%20Full%20OST%20_6EHwdMQj3i4_00_00_00_00_05_00_part_-CfduThOI.mp3",import.meta.url).href,Zk=new URL("/vegetaquizshow/assets/welcome-pokemon-Boc2-QOp.mp3",import.meta.url).href,Ik=new URL("/vegetaquizshow/assets/Contest-BlCSr_73.mp3",import.meta.url).href,Jk=new URL("/vegetaquizshow/assets/image_guess-Cyt9QryZ.mp3",import.meta.url).href,Wk=new URL("/vegetaquizshow/assets/abtn-DX_bwNuP.mp3",import.meta.url).href,As={"/":Zk,"/game":Kk,"/game/image":Ik,"/game/image/guess":Jk},eR=j.createContext({isPlaying:!1,volume:.5,toggleAudio:()=>{},changeVolume:n=>{},currentAudioPath:""}),tR=()=>{const{pathname:n}=ga(),[i]=j.useState(new Audio),[o,s]=j.useState(!1),[c,u]=j.useState(.5),[f,h]=j.useState(!1),[p,g]=j.useState(""),b=j.useRef(null),[v,w]=j.useState(!0),C=j.useRef(new Audio(Wk));j.useEffect(()=>{C.current.volume=.2;const N=localStorage.getItem("pokemonQuizClickSoundEnabled");N!==null&&w(N==="true")},[]);const E=()=>{const N=!v;w(N),localStorage.setItem("pokemonQuizClickSoundEnabled",String(N))},O=()=>{if(v){const N=C.current.cloneNode();N.volume=.1,N.play().catch(D=>console.log("Click sound error:",D))}};j.useEffect(()=>{const N=()=>O();return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[v]);const B=()=>{o?(i.pause(),s(!1),localStorage.setItem("pokemonQuizAudioEnabled","false")):(i.volume=c,i.loop=!0,i.play().then(()=>{s(!0),localStorage.setItem("pokemonQuizAudioEnabled","true")}).catch(N=>console.log("Audio playback error:",N)))},A=N=>{const D=parseFloat(N.toFixed(2));u(D),i.volume=D,localStorage.setItem("pokemonQuizAudioVolume",D.toString())},R=N=>{if(As[N])return As[N];for(const D in As)if(N.startsWith(D)&&D!=="/")return As[D];return As["/"]};j.useEffect(()=>{const N=localStorage.getItem("pokemonQuizAudioEnabled")==="true",D=localStorage.getItem("pokemonQuizAudioVolume");if(D){const G=parseFloat(D);u(G),i.volume=G}else i.volume=c;N&&s(!0)},[i]),j.useEffect(()=>{const N=R(n);if(N!==p){const D=!i.paused;i.currentTime,i.src=N,g(N),D&&o&&i.play().catch(G=>console.log("Audio playback error:",G))}else o&&i.paused&&i.play().catch(D=>console.log("Audio playback error:",D))},[n,i,o,p]),j.useEffect(()=>{const N=D=>{b.current&&!b.current.contains(D.target)&&h(!1)};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[]);const T=()=>c===0||!o?m.jsx(Tw,{}):c<.5?m.jsx(Ew,{}):m.jsx(Jf,{});return m.jsx(eR.Provider,{value:{isPlaying:o,volume:c,toggleAudio:B,changeVolume:A,currentAudioPath:p},children:m.jsxs(aR,{ref:b,children:[m.jsxs("div",{className:"container",children:[m.jsx(iR,{onClick:B,onMouseEnter:()=>h(!0),title:o?"Disattiva musica":"Attiva musica",children:T()}),m.jsx(rR,{$visible:f,children:m.jsx(oR,{type:"range",min:"0",max:"0.3",step:"0.01",value:c,onChange:N=>A(parseFloat(N.target.value))})})]}),m.jsx(sR,{onClick:E,$active:v,title:v?"Disattiva suono click":"Attiva suono click",children:m.jsx(Sw,{})})]})})},nR=()=>m.jsxs(W3,{basename:"/vegetaquizshow",children:[m.jsx(tR,{}),m.jsxs(R3,{children:[m.jsx(Sa,{path:"/",element:m.jsx(Rw,{})}),m.jsx(Sa,{path:"/game",element:m.jsx(w6,{})}),m.jsx(Sa,{path:"/game/categories",element:m.jsx(BA,{})}),m.jsx(Sa,{path:"/game/wheel",element:m.jsx(B9,{})}),m.jsx(Sa,{path:"/game/wheel/fusion",element:m.jsx(sT,{})}),m.jsx(Sa,{path:"/game/wheel/sound",element:m.jsx(PE,{})}),m.jsx(Sa,{path:"/game/wheel/rebus",element:m.jsx(dk,{})}),m.jsx(Sa,{path:"/game/image",element:m.jsx(zj,{})}),m.jsx(Sa,{path:"/game/image/guess",element:m.jsx(Hj,{})}),m.jsx(Sa,{path:"/game/city",element:m.jsx(Vz,{})})]})]}),aR=y.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  z-index: 1000;
  .container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,iR=y.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(19, 42, 87, 0.8);
  color: #ffde00;
  border: 2px solid #ffde00;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`,rR=y.div`
  left: 45px;
  width: 100px;
  height: 30px;
  background: rgba(19, 42, 87, 0.9);
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  transform: ${n=>n.$visible?"translateX(0)":"translateX(-20px)"};
  opacity: ${n=>n.$visible?"1":"0"};
  pointer-events: ${n=>n.$visible?"auto":"none"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid rgba(19, 42, 87, 0.9);
  }
`,oR=y.input`
  width: 100%;
  -webkit-appearance: none;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffde00;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffde00;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    border: none;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  }
`,sR=y.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${n=>n.$active?"rgba(19, 42, 87, 0.8)":"rgba(70, 70, 70, 0.8)"};
  color: ${n=>n.$active?"#ffde00":"#999"};
  border: 2px solid ${n=>n.$active?"#ffde00":"#999"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;Vy.createRoot(document.getElementById("root")).render(m.jsx(j.StrictMode,{children:m.jsx(kw,{children:m.jsx(nR,{})})}));
