(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=s(u);fetch(u.href,f)}})();function Mb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fc={exports:{}},Yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Rb(){if(zp)return Yr;zp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(l,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:n,type:l,key:d,ref:u!==void 0?u:null,props:f}}return Yr.Fragment=i,Yr.jsx=s,Yr.jsxs=s,Yr}var Dp;function zb(){return Dp||(Dp=1,Fc.exports=Rb()),Fc.exports}var T=zb(),Jc={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Db(){if(Op)return ut;Op=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(M){return M===null||typeof M!="object"?null:(M=b&&M[b]||M["@@iterator"],typeof M=="function"?M:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,C={};function O(M,G,nt){this.props=M,this.context=G,this.refs=C,this.updater=nt||E}O.prototype.isReactComponent={},O.prototype.setState=function(M,G){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,G,"setState")},O.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function R(){}R.prototype=O.prototype;function L(M,G,nt){this.props=M,this.context=G,this.refs=C,this.updater=nt||E}var N=L.prototype=new R;N.constructor=L,S(N,O.prototype),N.isPureReactComponent=!0;var $=Array.isArray,k={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function Q(M,G,nt,it,K,dt){return nt=dt.ref,{$$typeof:n,type:M,key:G,ref:nt!==void 0?nt:null,props:dt}}function F(M,G){return Q(M.type,G,void 0,void 0,void 0,M.props)}function X(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function tt(M){var G={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(nt){return G[nt]})}var Rt=/\/+/g;function ie(M,G){return typeof M=="object"&&M!==null&&M.key!=null?tt(""+M.key):G.toString(36)}function vt(){}function Gt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(vt,vt):(M.status="pending",M.then(function(G){M.status==="pending"&&(M.status="fulfilled",M.value=G)},function(G){M.status==="pending"&&(M.status="rejected",M.reason=G)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Yt(M,G,nt,it,K){var dt=typeof M;(dt==="undefined"||dt==="boolean")&&(M=null);var lt=!1;if(M===null)lt=!0;else switch(dt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(M.$$typeof){case n:case i:lt=!0;break;case v:return lt=M._init,Yt(lt(M._payload),G,nt,it,K)}}if(lt)return K=K(M),lt=it===""?"."+ie(M,0):it,$(K)?(nt="",lt!=null&&(nt=lt.replace(Rt,"$&/")+"/"),Yt(K,G,nt,"",function(Et){return Et})):K!=null&&(X(K)&&(K=F(K,nt+(K.key==null||M&&M.key===K.key?"":(""+K.key).replace(Rt,"$&/")+"/")+lt)),G.push(K)),1;lt=0;var $t=it===""?".":it+":";if($(M))for(var gt=0;gt<M.length;gt++)it=M[gt],dt=$t+ie(it,gt),lt+=Yt(it,G,nt,dt,K);else if(gt=x(M),typeof gt=="function")for(M=gt.call(M),gt=0;!(it=M.next()).done;)it=it.value,dt=$t+ie(it,gt++),lt+=Yt(it,G,nt,dt,K);else if(dt==="object"){if(typeof M.then=="function")return Yt(Gt(M),G,nt,it,K);throw G=String(M),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return lt}function Z(M,G,nt){if(M==null)return M;var it=[],K=0;return Yt(M,it,"","",function(dt){return G.call(nt,dt,K++)}),it}function J(M){if(M._status===-1){var G=M._result;G=G(),G.then(function(nt){(M._status===0||M._status===-1)&&(M._status=1,M._result=nt)},function(nt){(M._status===0||M._status===-1)&&(M._status=2,M._result=nt)}),M._status===-1&&(M._status=0,M._result=G)}if(M._status===1)return M._result.default;throw M._result}var I=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function ct(){}return ut.Children={map:Z,forEach:function(M,G,nt){Z(M,function(){G.apply(this,arguments)},nt)},count:function(M){var G=0;return Z(M,function(){G++}),G},toArray:function(M){return Z(M,function(G){return G})||[]},only:function(M){if(!X(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ut.Component=O,ut.Fragment=s,ut.Profiler=u,ut.PureComponent=L,ut.StrictMode=l,ut.Suspense=h,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ut.act=function(){throw Error("act(...) is not supported in production builds of React.")},ut.cache=function(M){return function(){return M.apply(null,arguments)}},ut.cloneElement=function(M,G,nt){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var it=S({},M.props),K=M.key,dt=void 0;if(G!=null)for(lt in G.ref!==void 0&&(dt=void 0),G.key!==void 0&&(K=""+G.key),G)!Y.call(G,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&G.ref===void 0||(it[lt]=G[lt]);var lt=arguments.length-2;if(lt===1)it.children=nt;else if(1<lt){for(var $t=Array(lt),gt=0;gt<lt;gt++)$t[gt]=arguments[gt+2];it.children=$t}return Q(M.type,K,void 0,void 0,dt,it)},ut.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:f,_context:M},M},ut.createElement=function(M,G,nt){var it,K={},dt=null;if(G!=null)for(it in G.key!==void 0&&(dt=""+G.key),G)Y.call(G,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(K[it]=G[it]);var lt=arguments.length-2;if(lt===1)K.children=nt;else if(1<lt){for(var $t=Array(lt),gt=0;gt<lt;gt++)$t[gt]=arguments[gt+2];K.children=$t}if(M&&M.defaultProps)for(it in lt=M.defaultProps,lt)K[it]===void 0&&(K[it]=lt[it]);return Q(M,dt,void 0,void 0,null,K)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(M){return{$$typeof:m,render:M}},ut.isValidElement=X,ut.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:J}},ut.memo=function(M,G){return{$$typeof:p,type:M,compare:G===void 0?null:G}},ut.startTransition=function(M){var G=k.T,nt={};k.T=nt;try{var it=M(),K=k.S;K!==null&&K(nt,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(ct,I)}catch(dt){I(dt)}finally{k.T=G}},ut.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ut.use=function(M){return k.H.use(M)},ut.useActionState=function(M,G,nt){return k.H.useActionState(M,G,nt)},ut.useCallback=function(M,G){return k.H.useCallback(M,G)},ut.useContext=function(M){return k.H.useContext(M)},ut.useDebugValue=function(){},ut.useDeferredValue=function(M,G){return k.H.useDeferredValue(M,G)},ut.useEffect=function(M,G){return k.H.useEffect(M,G)},ut.useId=function(){return k.H.useId()},ut.useImperativeHandle=function(M,G,nt){return k.H.useImperativeHandle(M,G,nt)},ut.useInsertionEffect=function(M,G){return k.H.useInsertionEffect(M,G)},ut.useLayoutEffect=function(M,G){return k.H.useLayoutEffect(M,G)},ut.useMemo=function(M,G){return k.H.useMemo(M,G)},ut.useOptimistic=function(M,G){return k.H.useOptimistic(M,G)},ut.useReducer=function(M,G,nt){return k.H.useReducer(M,G,nt)},ut.useRef=function(M){return k.H.useRef(M)},ut.useState=function(M){return k.H.useState(M)},ut.useSyncExternalStore=function(M,G,nt){return k.H.useSyncExternalStore(M,G,nt)},ut.useTransition=function(){return k.H.useTransition()},ut.version="19.0.0",ut}var jp;function If(){return jp||(jp=1,Jc.exports=Db()),Jc.exports}var A=If();const Qe=Mb(A);var Wc={exports:{}},$r={},Ic={exports:{}},tf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Ob(){return Bp||(Bp=1,function(n){function i(Z,J){var I=Z.length;Z.push(J);t:for(;0<I;){var ct=I-1>>>1,M=Z[ct];if(0<u(M,J))Z[ct]=J,Z[I]=M,I=ct;else break t}}function s(Z){return Z.length===0?null:Z[0]}function l(Z){if(Z.length===0)return null;var J=Z[0],I=Z.pop();if(I!==J){Z[0]=I;t:for(var ct=0,M=Z.length,G=M>>>1;ct<G;){var nt=2*(ct+1)-1,it=Z[nt],K=nt+1,dt=Z[K];if(0>u(it,I))K<M&&0>u(dt,it)?(Z[ct]=dt,Z[K]=I,ct=K):(Z[ct]=it,Z[nt]=I,ct=nt);else if(K<M&&0>u(dt,I))Z[ct]=dt,Z[K]=I,ct=K;else break t}}return J}function u(Z,J){var I=Z.sortIndex-J.sortIndex;return I!==0?I:Z.id-J.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var h=[],p=[],v=1,b=null,x=3,E=!1,S=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(Z){for(var J=s(p);J!==null;){if(J.callback===null)l(p);else if(J.startTime<=Z)l(p),J.sortIndex=J.expirationTime,i(h,J);else break;J=s(p)}}function $(Z){if(C=!1,N(Z),!S)if(s(h)!==null)S=!0,Gt();else{var J=s(p);J!==null&&Yt($,J.startTime-Z)}}var k=!1,Y=-1,Q=5,F=-1;function X(){return!(n.unstable_now()-F<Q)}function tt(){if(k){var Z=n.unstable_now();F=Z;var J=!0;try{t:{S=!1,C&&(C=!1,R(Y),Y=-1),E=!0;var I=x;try{e:{for(N(Z),b=s(h);b!==null&&!(b.expirationTime>Z&&X());){var ct=b.callback;if(typeof ct=="function"){b.callback=null,x=b.priorityLevel;var M=ct(b.expirationTime<=Z);if(Z=n.unstable_now(),typeof M=="function"){b.callback=M,N(Z),J=!0;break e}b===s(h)&&l(h),N(Z)}else l(h);b=s(h)}if(b!==null)J=!0;else{var G=s(p);G!==null&&Yt($,G.startTime-Z),J=!1}}break t}finally{b=null,x=I,E=!1}J=void 0}}finally{J?Rt():k=!1}}}var Rt;if(typeof L=="function")Rt=function(){L(tt)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,vt=ie.port2;ie.port1.onmessage=tt,Rt=function(){vt.postMessage(null)}}else Rt=function(){O(tt,0)};function Gt(){k||(k=!0,Rt())}function Yt(Z,J){Y=O(function(){Z(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){S||E||(S=!0,Gt())},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return s(h)},n.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var I=x;x=J;try{return Z()}finally{x=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,J){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var I=x;x=Z;try{return J()}finally{x=I}},n.unstable_scheduleCallback=function(Z,J,I){var ct=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ct+I:ct):I=ct,Z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=I+M,Z={id:v++,callback:J,priorityLevel:Z,startTime:I,expirationTime:M,sortIndex:-1},I>ct?(Z.sortIndex=I,i(p,Z),s(h)===null&&Z===s(p)&&(C?(R(Y),Y=-1):C=!0,Yt($,I-ct))):(Z.sortIndex=M,i(h,Z),S||E||(S=!0,Gt())),Z},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(Z){var J=x;return function(){var I=x;x=J;try{return Z.apply(this,arguments)}finally{x=I}}}}(tf)),tf}var Vp;function jb(){return Vp||(Vp=1,Ic.exports=Ob()),Ic.exports}var ef={exports:{}},de={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Bb(){if(_p)return de;_p=1;var n=If();function i(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,p,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:p,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,de.createPortal=function(h,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return f(h,p,null,v)},de.flushSync=function(h){var p=d.T,v=l.p;try{if(d.T=null,l.p=2,h)return h()}finally{d.T=p,l.p=v,l.d.f()}},de.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(h,p))},de.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},de.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?l.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:E}):v==="script"&&l.d.X(h,{crossOrigin:b,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},de.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);l.d.M(h,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(h)},de.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin);l.d.L(h,v,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},de.preloadModule=function(h,p){if(typeof h=="string")if(p){var v=m(p.as,p.crossOrigin);l.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(h)},de.requestFormReset=function(h){l.d.r(h)},de.unstable_batchedUpdates=function(h,p){return h(p)},de.useFormState=function(h,p,v){return d.H.useFormState(h,p,v)},de.useFormStatus=function(){return d.H.useHostTransitionStatus()},de.version="19.0.0",de}var Np;function Vb(){if(Np)return ef.exports;Np=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),ef.exports=Bb(),ef.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function _b(){if(Lp)return $r;Lp=1;var n=jb(),i=If(),s=Vb();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),E=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),$=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function F(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case h:return"Fragment";case m:return"Portal";case v:return"Profiler";case p:return"StrictMode";case C:return"Suspense";case O:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case S:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return e=t.displayName||null,e!==null?e:F(t.type)||"Memo";case L:e=t._payload,t=t._init;try{return F(t(e))}catch{}}return null}var X=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=Object.assign,Rt,ie;function vt(t){if(Rt===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Rt=e&&e[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+ie}var Gt=!1;function Yt(t,e){if(!t||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(U){var _=U}Reflect.construct(t,[],q)}else{try{q.call()}catch(U){_=U}t.call(q.prototype)}}else{try{throw Error()}catch(U){_=U}(q=t())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(U){if(U&&_&&typeof U.stack=="string")return[U.stack,_.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],y=c[1];if(g&&y){var w=g.split(`
`),D=y.split(`
`);for(o=r=0;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;for(;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;if(r===w.length||o===D.length)for(r=w.length-1,o=D.length-1;1<=r&&0<=o&&w[r]!==D[o];)o--;for(;1<=r&&0<=o;r--,o--)if(w[r]!==D[o]){if(r!==1||o!==1)do if(r--,o--,0>o||w[r]!==D[o]){var H=`
`+w[r].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=r&&0<=o);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function Z(t){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return t=Yt(t.type,!1),t;case 11:return t=Yt(t.type.render,!1),t;case 1:return t=Yt(t.type,!0),t;default:return""}}function J(t){try{var e="";do e+=Z(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function I(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function ct(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function M(t){if(I(t)!==t)throw Error(l(188))}function G(t){var e=t.alternate;if(!e){if(e=I(t),e===null)throw Error(l(188));return e!==t?null:t}for(var a=t,r=e;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return M(o),t;if(c===r)return M(o),e;c=c.sibling}throw Error(l(188))}if(a.return!==r.return)a=o,r=c;else{for(var g=!1,y=o.child;y;){if(y===a){g=!0,a=o,r=c;break}if(y===r){g=!0,r=o,a=c;break}y=y.sibling}if(!g){for(y=c.child;y;){if(y===a){g=!0,a=c,r=o;break}if(y===r){g=!0,r=c,a=o;break}y=y.sibling}if(!g)throw Error(l(189))}}if(a.alternate!==r)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?t:e}function nt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=nt(t),e!==null)return e;t=t.sibling}return null}var it=Array.isArray,K=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},lt=[],$t=-1;function gt(t){return{current:t}}function Et(t){0>$t||(t.current=lt[$t],lt[$t]=null,$t--)}function Tt(t,e){$t++,lt[$t]=t.current,t.current=e}var pe=gt(null),be=gt(null),Ln=gt(null),Vs=gt(null);function _s(t,e){switch(Tt(Ln,e),Tt(be,t),Tt(pe,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?ip(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=ip(t),e=rp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(pe),Tt(pe,e)}function Ya(){Et(pe),Et(be),Et(Ln)}function Po(t){t.memoizedState!==null&&Tt(Vs,t);var e=pe.current,a=rp(e,t.type);e!==a&&(Tt(be,t),Tt(pe,a))}function Ns(t){be.current===t&&(Et(pe),Et(be)),Vs.current===t&&(Et(Vs),Ur._currentValue=dt)}var qo=Object.prototype.hasOwnProperty,Go=n.unstable_scheduleCallback,Yo=n.unstable_cancelCallback,r2=n.unstable_shouldYield,s2=n.unstable_requestPaint,en=n.unstable_now,l2=n.unstable_getCurrentPriorityLevel,Qd=n.unstable_ImmediatePriority,Zd=n.unstable_UserBlockingPriority,Ls=n.unstable_NormalPriority,o2=n.unstable_LowPriority,Kd=n.unstable_IdlePriority,u2=n.log,c2=n.unstable_setDisableYieldValue,Zi=null,Te=null;function f2(t){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Zi,t,void 0,(t.current.flags&128)===128)}catch{}}function kn(t){if(typeof u2=="function"&&c2(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Zi,t)}catch{}}var Ae=Math.clz32?Math.clz32:m2,d2=Math.log,h2=Math.LN2;function m2(t){return t>>>=0,t===0?32:31-(d2(t)/h2|0)|0}var ks=128,Us=4194304;function ha(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Hs(t,e){var a=t.pendingLanes;if(a===0)return 0;var r=0,o=t.suspendedLanes,c=t.pingedLanes,g=t.warmLanes;t=t.finishedLanes!==0;var y=a&134217727;return y!==0?(a=y&~o,a!==0?r=ha(a):(c&=y,c!==0?r=ha(c):t||(g=y&~g,g!==0&&(r=ha(g))))):(y=a&~o,y!==0?r=ha(y):c!==0?r=ha(c):t||(g=a&~g,g!==0&&(r=ha(g)))),r===0?0:e!==0&&e!==r&&(e&o)===0&&(o=r&-r,g=e&-e,o>=g||o===32&&(g&4194176)!==0)?e:r}function Ki(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function p2(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fd(){var t=ks;return ks<<=1,(ks&4194176)===0&&(ks=128),t}function Jd(){var t=Us;return Us<<=1,(Us&62914560)===0&&(Us=4194304),t}function $o(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Fi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function g2(t,e,a,r,o,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var y=t.entanglements,w=t.expirationTimes,D=t.hiddenUpdates;for(a=g&~a;0<a;){var H=31-Ae(a),q=1<<H;y[H]=0,w[H]=-1;var _=D[H];if(_!==null)for(D[H]=null,H=0;H<_.length;H++){var U=_[H];U!==null&&(U.lane&=-536870913)}a&=~q}r!==0&&Wd(t,r,0),c!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function Wd(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Ae(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194218}function Id(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-Ae(a),o=1<<r;o&e|t[r]&e&&(t[r]|=e),a&=~o}}function th(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function eh(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Ep(t.type))}function v2(t,e){var a=K.p;try{return K.p=t,e()}finally{K.p=a}}var Un=Math.random().toString(36).slice(2),ce="__reactFiber$"+Un,xe="__reactProps$"+Un,$a="__reactContainer$"+Un,Xo="__reactEvents$"+Un,y2="__reactListeners$"+Un,b2="__reactHandles$"+Un,nh="__reactResources$"+Un,Ji="__reactMarker$"+Un;function Qo(t){delete t[ce],delete t[xe],delete t[Xo],delete t[y2],delete t[b2]}function ma(t){var e=t[ce];if(e)return e;for(var a=t.parentNode;a;){if(e=a[$a]||a[ce]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=op(t);t!==null;){if(a=t[ce])return a;t=op(t)}return e}t=a,a=t.parentNode}return null}function Xa(t){if(t=t[ce]||t[$a]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Wi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Qa(t){var e=t[nh];return e||(e=t[nh]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function It(t){t[Ji]=!0}var ah=new Set,ih={};function pa(t,e){Za(t,e),Za(t+"Capture",e)}function Za(t,e){for(ih[t]=e,t=0;t<e.length;t++)ah.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rh={},sh={};function S2(t){return qo.call(sh,t)?!0:qo.call(rh,t)?!1:x2.test(t)?sh[t]=!0:(rh[t]=!0,!1)}function Ps(t,e,a){if(S2(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function qs(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function mn(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w2(t){var e=lh(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gs(t){t._valueTracker||(t._valueTracker=w2(t))}function oh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=lh(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function Ys(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var E2=/[\n"\\]/g;function Ve(t){return t.replace(E2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Zo(t,e,a,r,o,c,g,y){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?Ko(t,g,Be(e)):a!=null?Ko(t,g,Be(a)):r!=null&&t.removeAttribute("value"),o==null&&c!=null&&(t.defaultChecked=!!c),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Be(y):t.removeAttribute("name")}function uh(t,e,a,r,o,c,g,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+Be(a):"",e=e!=null?""+Be(e):a,y||e===t.value||(t.value=e),t.defaultValue=e}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=y?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function Ko(t,e,a){e==="number"&&Ys(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ka(t,e,a,r){if(t=t.options,e){e={};for(var o=0;o<a.length;o++)e["$"+a[o]]=!0;for(a=0;a<t.length;a++)o=e.hasOwnProperty("$"+t[a].value),t[a].selected!==o&&(t[a].selected=o),o&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Be(a),e=null,o=0;o<t.length;o++){if(t[o].value===a){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function ch(t,e,a){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Be(a):""}function fh(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(l(92));if(it(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=Be(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function Fa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var T2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dh(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||T2.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function hh(t,e,a){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var o in e)r=e[o],e.hasOwnProperty(o)&&a[o]!==r&&dh(t,o,r)}else for(var c in e)e.hasOwnProperty(c)&&dh(t,c,e[c])}function Fo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(t){return C2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Jo=null;function Wo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ja=null,Wa=null;function mh(t){var e=Xa(t);if(e&&(t=e.stateNode)){var a=t[xe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Zo(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var o=r[xe]||null;if(!o)throw Error(l(90));Zo(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&oh(r)}break t;case"textarea":ch(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ka(t,!!a.multiple,e,!1)}}}var Io=!1;function ph(t,e,a){if(Io)return t(e,a);Io=!0;try{var r=t(e);return r}finally{if(Io=!1,(Ja!==null||Wa!==null)&&(Rl(),Ja&&(e=Ja,t=Wa,Wa=Ja=null,mh(e),t)))for(e=0;e<t.length;e++)mh(t[e])}}function Ii(t,e){var a=t.stateNode;if(a===null)return null;var r=a[xe]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(l(231,e,typeof a));return a}var tu=!1;if(hn)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{tu=!1}var Hn=null,eu=null,Xs=null;function gh(){if(Xs)return Xs;var t,e=eu,a=e.length,r,o="value"in Hn?Hn.value:Hn.textContent,c=o.length;for(t=0;t<a&&e[t]===o[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===o[c-r];r++);return Xs=o.slice(t,1<r?1-r:void 0)}function Qs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zs(){return!0}function vh(){return!1}function Se(t){function e(a,r,o,c,g){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(a=t[y],this[y]=a?a(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Zs:vh,this.isPropagationStopped=vh,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Se(ga),er=tt({},ga,{view:0,detail:0}),M2=Se(er),nu,au,nr,Fs=tt({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nr&&(nr&&t.type==="mousemove"?(nu=t.screenX-nr.screenX,au=t.screenY-nr.screenY):au=nu=0,nr=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),yh=Se(Fs),R2=tt({},Fs,{dataTransfer:0}),z2=Se(R2),D2=tt({},er,{relatedTarget:0}),iu=Se(D2),O2=tt({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),j2=Se(O2),B2=tt({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V2=Se(B2),_2=tt({},ga,{data:0}),bh=Se(_2),N2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k2[t])?!!e[t]:!1}function ru(){return U2}var H2=tt({},er,{key:function(t){if(t.key){var e=N2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P2=Se(H2),q2=tt({},Fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=Se(q2),G2=tt({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Y2=Se(G2),$2=tt({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),X2=Se($2),Q2=tt({},Fs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z2=Se(Q2),K2=tt({},ga,{newState:0,oldState:0}),F2=Se(K2),J2=[9,13,27,32],su=hn&&"CompositionEvent"in window,ar=null;hn&&"documentMode"in document&&(ar=document.documentMode);var W2=hn&&"TextEvent"in window&&!ar,Sh=hn&&(!su||ar&&8<ar&&11>=ar),wh=" ",Eh=!1;function Th(t,e){switch(t){case"keyup":return J2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ia=!1;function I2(t,e){switch(t){case"compositionend":return Ah(e);case"keypress":return e.which!==32?null:(Eh=!0,wh);case"textInput":return t=e.data,t===wh&&Eh?null:t;default:return null}}function t5(t,e){if(Ia)return t==="compositionend"||!su&&Th(t,e)?(t=gh(),Xs=eu=Hn=null,Ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sh&&e.locale!=="ko"?null:e.data;default:return null}}var e5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e5[t.type]:e==="textarea"}function Mh(t,e,a,r){Ja?Wa?Wa.push(r):Wa=[r]:Ja=r,e=Bl(e,"onChange"),0<e.length&&(a=new Ks("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var ir=null,rr=null;function n5(t){Im(t,0)}function Js(t){var e=Wi(t);if(oh(e))return t}function Rh(t,e){if(t==="change")return e}var zh=!1;if(hn){var lu;if(hn){var ou="oninput"in document;if(!ou){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),ou=typeof Dh.oninput=="function"}lu=ou}else lu=!1;zh=lu&&(!document.documentMode||9<document.documentMode)}function Oh(){ir&&(ir.detachEvent("onpropertychange",jh),rr=ir=null)}function jh(t){if(t.propertyName==="value"&&Js(rr)){var e=[];Mh(e,rr,t,Wo(t)),ph(n5,e)}}function a5(t,e,a){t==="focusin"?(Oh(),ir=e,rr=a,ir.attachEvent("onpropertychange",jh)):t==="focusout"&&Oh()}function i5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Js(rr)}function r5(t,e){if(t==="click")return Js(e)}function s5(t,e){if(t==="input"||t==="change")return Js(e)}function l5(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:l5;function sr(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!qo.call(e,o)||!Ce(t[o],e[o]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var a=Bh(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bh(a)}}function _h(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_h(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ys(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Ys(t.document)}return e}function uu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o5(t,e){var a=Nh(e);e=t.focusedElem;var r=t.selectionRange;if(a!==e&&e&&e.ownerDocument&&_h(e.ownerDocument.documentElement,e)){if(r!==null&&uu(e)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(a,e.value.length);else if(a=(t=e.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var o=e.textContent.length,c=Math.min(r.start,o);r=r.end===void 0?c:Math.min(r.end,o),!a.extend&&c>r&&(o=r,r=c,c=o),o=Vh(e,c);var g=Vh(e,r);o&&g&&(a.rangeCount!==1||a.anchorNode!==o.node||a.anchorOffset!==o.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),a.removeAllRanges(),c>r?(a.addRange(t),a.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),a.addRange(t)))}}for(t=[],a=e;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)a=t[e],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var u5=hn&&"documentMode"in document&&11>=document.documentMode,ti=null,cu=null,lr=null,fu=!1;function Lh(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||ti==null||ti!==Ys(r)||(r=ti,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&sr(lr,r)||(lr=r,r=Bl(cu,"onSelect"),0<r.length&&(e=new Ks("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=ti)))}function va(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ei={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},du={},kh={};hn&&(kh=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function ya(t){if(du[t])return du[t];if(!ei[t])return t;var e=ei[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in kh)return du[t]=e[a];return t}var Uh=ya("animationend"),Hh=ya("animationiteration"),Ph=ya("animationstart"),c5=ya("transitionrun"),f5=ya("transitionstart"),d5=ya("transitioncancel"),qh=ya("transitionend"),Gh=new Map,Yh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ke(t,e){Gh.set(t,e),pa(e,[t])}var _e=[],ni=0,hu=0;function Ws(){for(var t=ni,e=hu=ni=0;e<t;){var a=_e[e];_e[e++]=null;var r=_e[e];_e[e++]=null;var o=_e[e];_e[e++]=null;var c=_e[e];if(_e[e++]=null,r!==null&&o!==null){var g=r.pending;g===null?o.next=o:(o.next=g.next,g.next=o),r.pending=o}c!==0&&$h(a,o,c)}}function Is(t,e,a,r){_e[ni++]=t,_e[ni++]=e,_e[ni++]=a,_e[ni++]=r,hu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function mu(t,e,a,r){return Is(t,e,a,r),tl(t)}function Pn(t,e){return Is(t,null,null,e),tl(t)}function $h(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var o=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(o=!0)),t=c,c=c.return;o&&e!==null&&t.tag===3&&(c=t.stateNode,o=31-Ae(a),c=c.hiddenUpdates,t=c[o],t===null?c[o]=[e]:t.push(e),e.lane=a|536870912)}function tl(t){if(50<jr)throw jr=0,xc=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ai={},Xh=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var a=Xh.get(t);return a!==void 0?a:(e={value:t,source:e,stack:J(e)},Xh.set(t,e),e)}return{value:t,source:e,stack:J(e)}}var ii=[],ri=0,el=null,nl=0,Le=[],ke=0,ba=null,pn=1,gn="";function xa(t,e){ii[ri++]=nl,ii[ri++]=el,el=t,nl=e}function Qh(t,e,a){Le[ke++]=pn,Le[ke++]=gn,Le[ke++]=ba,ba=t;var r=pn;t=gn;var o=32-Ae(r)-1;r&=~(1<<o),a+=1;var c=32-Ae(e)+o;if(30<c){var g=o-o%5;c=(r&(1<<g)-1).toString(32),r>>=g,o-=g,pn=1<<32-Ae(e)+o|a<<o|r,gn=c+t}else pn=1<<c|a<<o|r,gn=t}function pu(t){t.return!==null&&(xa(t,1),Qh(t,1,0))}function gu(t){for(;t===el;)el=ii[--ri],ii[ri]=null,nl=ii[--ri],ii[ri]=null;for(;t===ba;)ba=Le[--ke],Le[ke]=null,gn=Le[--ke],Le[ke]=null,pn=Le[--ke],Le[ke]=null}var ge=null,re=null,xt=!1,Fe=null,nn=!1,vu=Error(l(519));function Sa(t){var e=Error(l(418,""));throw cr(Ne(e,t)),vu}function Zh(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[ce]=t,e[xe]=r,a){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(a=0;a<Vr.length;a++)yt(Vr[a],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),uh(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Gs(e);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),fh(e,r.value,r.defaultValue,r.children),Gs(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||ap(e.textContent,a)?(r.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),r.onScroll!=null&&yt("scroll",e),r.onScrollEnd!=null&&yt("scrollend",e),r.onClick!=null&&(e.onclick=Vl),e=!0):e=!1,e||Sa(t)}function Kh(t){for(ge=t.return;ge;)switch(ge.tag){case 3:case 27:nn=!0;return;case 5:case 13:nn=!1;return;default:ge=ge.return}}function or(t){if(t!==ge)return!1;if(!xt)return Kh(t),xt=!0,!1;var e=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lc(t.type,t.memoizedProps)),a=!a),a&&(e=!0),e&&re&&Sa(t),Kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){re=We(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}re=null}}else re=ge?We(t.stateNode.nextSibling):null;return!0}function ur(){re=ge=null,xt=!1}function cr(t){Fe===null?Fe=[t]:Fe.push(t)}var fr=Error(l(460)),Fh=Error(l(474)),yu={then:function(){}};function Jh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function al(){}function Wh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(al,al),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===fr?Error(l(483)):t;default:if(typeof e.status=="string")e.then(al,al);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=r}},function(r){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===fr?Error(l(483)):t}throw dr=e,fr}}var dr=null;function Ih(){if(dr===null)throw Error(l(459));var t=dr;return dr=null,t}var si=null,hr=0;function il(t){var e=hr;return hr+=1,si===null&&(si=[]),Wh(si,t,e)}function mr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function rl(t,e){throw e.$$typeof===f?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function t0(t){var e=t._init;return e(t._payload)}function e0(t){function e(j,z){if(t){var V=j.deletions;V===null?(j.deletions=[z],j.flags|=16):V.push(z)}}function a(j,z){if(!t)return null;for(;z!==null;)e(j,z),z=z.sibling;return null}function r(j){for(var z=new Map;j!==null;)j.key!==null?z.set(j.key,j):z.set(j.index,j),j=j.sibling;return z}function o(j,z){return j=In(j,z),j.index=0,j.sibling=null,j}function c(j,z,V){return j.index=V,t?(V=j.alternate,V!==null?(V=V.index,V<z?(j.flags|=33554434,z):V):(j.flags|=33554434,z)):(j.flags|=1048576,z)}function g(j){return t&&j.alternate===null&&(j.flags|=33554434),j}function y(j,z,V,P){return z===null||z.tag!==6?(z=dc(V,j.mode,P),z.return=j,z):(z=o(z,V),z.return=j,z)}function w(j,z,V,P){var W=V.type;return W===h?H(j,z,V.props.children,P,V.key):z!==null&&(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&t0(W)===z.type)?(z=o(z,V.props),mr(z,V),z.return=j,z):(z=El(V.type,V.key,V.props,null,j.mode,P),mr(z,V),z.return=j,z)}function D(j,z,V,P){return z===null||z.tag!==4||z.stateNode.containerInfo!==V.containerInfo||z.stateNode.implementation!==V.implementation?(z=hc(V,j.mode,P),z.return=j,z):(z=o(z,V.children||[]),z.return=j,z)}function H(j,z,V,P,W){return z===null||z.tag!==7?(z=Oa(V,j.mode,P,W),z.return=j,z):(z=o(z,V),z.return=j,z)}function q(j,z,V){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=dc(""+z,j.mode,V),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case d:return V=El(z.type,z.key,z.props,null,j.mode,V),mr(V,z),V.return=j,V;case m:return z=hc(z,j.mode,V),z.return=j,z;case L:var P=z._init;return z=P(z._payload),q(j,z,V)}if(it(z)||Y(z))return z=Oa(z,j.mode,V,null),z.return=j,z;if(typeof z.then=="function")return q(j,il(z),V);if(z.$$typeof===E)return q(j,xl(j,z),V);rl(j,z)}return null}function _(j,z,V,P){var W=z!==null?z.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return W!==null?null:y(j,z,""+V,P);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case d:return V.key===W?w(j,z,V,P):null;case m:return V.key===W?D(j,z,V,P):null;case L:return W=V._init,V=W(V._payload),_(j,z,V,P)}if(it(V)||Y(V))return W!==null?null:H(j,z,V,P,null);if(typeof V.then=="function")return _(j,z,il(V),P);if(V.$$typeof===E)return _(j,z,xl(j,V),P);rl(j,V)}return null}function U(j,z,V,P,W){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return j=j.get(V)||null,y(z,j,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case d:return j=j.get(P.key===null?V:P.key)||null,w(z,j,P,W);case m:return j=j.get(P.key===null?V:P.key)||null,D(z,j,P,W);case L:var mt=P._init;return P=mt(P._payload),U(j,z,V,P,W)}if(it(P)||Y(P))return j=j.get(V)||null,H(z,j,P,W,null);if(typeof P.then=="function")return U(j,z,V,il(P),W);if(P.$$typeof===E)return U(j,z,V,xl(z,P),W);rl(z,P)}return null}function et(j,z,V,P){for(var W=null,mt=null,at=z,rt=z=0,ne=null;at!==null&&rt<V.length;rt++){at.index>rt?(ne=at,at=null):ne=at.sibling;var St=_(j,at,V[rt],P);if(St===null){at===null&&(at=ne);break}t&&at&&St.alternate===null&&e(j,at),z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St,at=ne}if(rt===V.length)return a(j,at),xt&&xa(j,rt),W;if(at===null){for(;rt<V.length;rt++)at=q(j,V[rt],P),at!==null&&(z=c(at,z,rt),mt===null?W=at:mt.sibling=at,mt=at);return xt&&xa(j,rt),W}for(at=r(at);rt<V.length;rt++)ne=U(at,j,rt,V[rt],P),ne!==null&&(t&&ne.alternate!==null&&at.delete(ne.key===null?rt:ne.key),z=c(ne,z,rt),mt===null?W=ne:mt.sibling=ne,mt=ne);return t&&at.forEach(function(sa){return e(j,sa)}),xt&&xa(j,rt),W}function ot(j,z,V,P){if(V==null)throw Error(l(151));for(var W=null,mt=null,at=z,rt=z=0,ne=null,St=V.next();at!==null&&!St.done;rt++,St=V.next()){at.index>rt?(ne=at,at=null):ne=at.sibling;var sa=_(j,at,St.value,P);if(sa===null){at===null&&(at=ne);break}t&&at&&sa.alternate===null&&e(j,at),z=c(sa,z,rt),mt===null?W=sa:mt.sibling=sa,mt=sa,at=ne}if(St.done)return a(j,at),xt&&xa(j,rt),W;if(at===null){for(;!St.done;rt++,St=V.next())St=q(j,St.value,P),St!==null&&(z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St);return xt&&xa(j,rt),W}for(at=r(at);!St.done;rt++,St=V.next())St=U(at,j,rt,St.value,P),St!==null&&(t&&St.alternate!==null&&at.delete(St.key===null?rt:St.key),z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St);return t&&at.forEach(function(Cb){return e(j,Cb)}),xt&&xa(j,rt),W}function Ut(j,z,V,P){if(typeof V=="object"&&V!==null&&V.type===h&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case d:t:{for(var W=V.key;z!==null;){if(z.key===W){if(W=V.type,W===h){if(z.tag===7){a(j,z.sibling),P=o(z,V.props.children),P.return=j,j=P;break t}}else if(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&t0(W)===z.type){a(j,z.sibling),P=o(z,V.props),mr(P,V),P.return=j,j=P;break t}a(j,z);break}else e(j,z);z=z.sibling}V.type===h?(P=Oa(V.props.children,j.mode,P,V.key),P.return=j,j=P):(P=El(V.type,V.key,V.props,null,j.mode,P),mr(P,V),P.return=j,j=P)}return g(j);case m:t:{for(W=V.key;z!==null;){if(z.key===W)if(z.tag===4&&z.stateNode.containerInfo===V.containerInfo&&z.stateNode.implementation===V.implementation){a(j,z.sibling),P=o(z,V.children||[]),P.return=j,j=P;break t}else{a(j,z);break}else e(j,z);z=z.sibling}P=hc(V,j.mode,P),P.return=j,j=P}return g(j);case L:return W=V._init,V=W(V._payload),Ut(j,z,V,P)}if(it(V))return et(j,z,V,P);if(Y(V)){if(W=Y(V),typeof W!="function")throw Error(l(150));return V=W.call(V),ot(j,z,V,P)}if(typeof V.then=="function")return Ut(j,z,il(V),P);if(V.$$typeof===E)return Ut(j,z,xl(j,V),P);rl(j,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,z!==null&&z.tag===6?(a(j,z.sibling),P=o(z,V),P.return=j,j=P):(a(j,z),P=dc(V,j.mode,P),P.return=j,j=P),g(j)):a(j,z)}return function(j,z,V,P){try{hr=0;var W=Ut(j,z,V,P);return si=null,W}catch(at){if(at===fr)throw at;var mt=qe(29,at,null,j.mode);return mt.lanes=P,mt.return=j,mt}finally{}}}var wa=e0(!0),n0=e0(!1),li=gt(null),sl=gt(0);function a0(t,e){t=Mn,Tt(sl,t),Tt(li,e),Mn=t|e.baseLanes}function bu(){Tt(sl,Mn),Tt(li,li.current)}function xu(){Mn=sl.current,Et(li),Et(sl)}var Ue=gt(null),an=null;function qn(t){var e=t.alternate;Tt(Ft,Ft.current&1),Tt(Ue,t),an===null&&(e===null||li.current!==null||e.memoizedState!==null)&&(an=t)}function i0(t){if(t.tag===22){if(Tt(Ft,Ft.current),Tt(Ue,t),an===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(an=t)}}else Gn()}function Gn(){Tt(Ft,Ft.current),Tt(Ue,Ue.current)}function vn(t){Et(Ue),an===t&&(an=null),Et(Ft)}var Ft=gt(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var h5=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},m5=n.unstable_scheduleCallback,p5=n.unstable_NormalPriority,Jt={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new h5,data:new Map,refCount:0}}function pr(t){t.refCount--,t.refCount===0&&m5(p5,function(){t.controller.abort()})}var gr=null,wu=0,oi=0,ui=null;function g5(t,e){if(gr===null){var a=gr=[];wu=0,oi=Rc(),ui={status:"pending",value:void 0,then:function(r){a.push(r)}}}return wu++,e.then(r0,r0),e}function r0(){if(--wu===0&&gr!==null){ui!==null&&(ui.status="fulfilled");var t=gr;gr=null,oi=0,ui=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function v5(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var o=0;o<a.length;o++)(0,a[o])(e)},function(o){for(r.status="rejected",r.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),r}var s0=X.S;X.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&g5(t,e),s0!==null&&s0(t,e)};var Ea=gt(null);function Eu(){var t=Ea.current;return t!==null?t:zt.pooledCache}function ol(t,e){e===null?Tt(Ea,Ea.current):Tt(Ea,e.pool)}function l0(){var t=Eu();return t===null?null:{parent:Jt._currentValue,pool:t}}var Yn=0,ht=null,At=null,Xt=null,ul=!1,ci=!1,Ta=!1,cl=0,vr=0,fi=null,y5=0;function Pt(){throw Error(l(321))}function Tu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ce(t[a],e[a]))return!1;return!0}function Au(t,e,a,r,o,c){return Yn=c,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,X.H=t===null||t.memoizedState===null?Aa:$n,Ta=!1,c=a(r,o),Ta=!1,ci&&(c=u0(e,a,r,o)),o0(t),c}function o0(t){X.H=rn;var e=At!==null&&At.next!==null;if(Yn=0,Xt=At=ht=null,ul=!1,vr=0,fi=null,e)throw Error(l(300));t===null||te||(t=t.dependencies,t!==null&&bl(t)&&(te=!0))}function u0(t,e,a,r){ht=t;var o=0;do{if(ci&&(fi=null),vr=0,ci=!1,25<=o)throw Error(l(301));if(o+=1,Xt=At=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}X.H=Ca,c=e(a,r)}while(ci);return c}function b5(){var t=X.H,e=t.useState()[0];return e=typeof e.then=="function"?yr(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ht.flags|=1024),e}function Cu(){var t=cl!==0;return cl=0,t}function Mu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Ru(t){if(ul){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ul=!1}Yn=0,Xt=At=ht=null,ci=!1,vr=cl=0,fi=null}function we(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?ht.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Qt(){if(At===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Xt===null?ht.memoizedState:Xt.next;if(e!==null)Xt=e,At=t;else{if(t===null)throw ht.alternate===null?Error(l(467)):Error(l(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Xt===null?ht.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}var fl;fl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function yr(t){var e=vr;return vr+=1,fi===null&&(fi=[]),t=Wh(fi,t,e),e=ht,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,X.H=e===null||e.memoizedState===null?Aa:$n),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yr(t);if(t.$$typeof===E)return fe(t)}throw Error(l(438,String(t)))}function zu(t){var e=null,a=ht.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=ht.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=fl(),ht.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=$;return e.index++,a}function yn(t,e){return typeof e=="function"?e(t):e}function hl(t){var e=Qt();return Du(e,At,t)}function Du(t,e,a){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=a;var o=t.baseQueue,c=r.pending;if(c!==null){if(o!==null){var g=o.next;o.next=c.next,c.next=g}e.baseQueue=o=c,r.pending=null}if(c=t.baseState,o===null)t.memoizedState=c;else{e=o.next;var y=g=null,w=null,D=e,H=!1;do{var q=D.lane&-536870913;if(q!==D.lane?(bt&q)===q:(Yn&q)===q){var _=D.revertLane;if(_===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),q===oi&&(H=!0);else if((Yn&_)===_){D=D.next,_===oi&&(H=!0);continue}else q={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(y=w=q,g=c):w=w.next=q,ht.lanes|=_,ta|=_;q=D.action,Ta&&a(c,q),c=D.hasEagerState?D.eagerState:a(c,q)}else _={lane:q,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(y=w=_,g=c):w=w.next=_,ht.lanes|=q,ta|=q;D=D.next}while(D!==null&&D!==e);if(w===null?g=c:w.next=y,!Ce(c,t.memoizedState)&&(te=!0,H&&(a=ui,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=w,r.lastRenderedState=c}return o===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ou(t){var e=Qt(),a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var r=a.dispatch,o=a.pending,c=e.memoizedState;if(o!==null){a.pending=null;var g=o=o.next;do c=t(c,g.action),g=g.next;while(g!==o);Ce(c,e.memoizedState)||(te=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function c0(t,e,a){var r=ht,o=Qt(),c=xt;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=e();var g=!Ce((At||o).memoizedState,a);if(g&&(o.memoizedState=a,te=!0),o=o.queue,Vu(h0.bind(null,r,o,t),[t]),o.getSnapshot!==e||g||Xt!==null&&Xt.memoizedState.tag&1){if(r.flags|=2048,di(9,d0.bind(null,r,o,a,e),{destroy:void 0},null),zt===null)throw Error(l(349));c||(Yn&60)!==0||f0(r,e,a)}return a}function f0(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ht.updateQueue,e===null?(e=fl(),ht.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function d0(t,e,a,r){e.value=a,e.getSnapshot=r,m0(e)&&p0(t)}function h0(t,e,a){return a(function(){m0(e)&&p0(t)})}function m0(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ce(t,a)}catch{return!0}}function p0(t){var e=Pn(t,2);e!==null&&ve(e,t,2)}function ju(t){var e=we();if(typeof t=="function"){var a=t;if(t=a(),Ta){kn(!0);try{a()}finally{kn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:t},e}function g0(t,e,a,r){return t.baseState=a,Du(t,At,typeof r=="function"?r:yn)}function x5(t,e,a,r,o){if(gl(t))throw Error(l(485));if(t=e.action,t!==null){var c={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};X.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,v0(e,c)):(c.next=a.next,e.pending=a.next=c)}}function v0(t,e){var a=e.action,r=e.payload,o=t.state;if(e.isTransition){var c=X.T,g={};X.T=g;try{var y=a(o,r),w=X.S;w!==null&&w(g,y),y0(t,e,y)}catch(D){Bu(t,e,D)}finally{X.T=c}}else try{c=a(o,r),y0(t,e,c)}catch(D){Bu(t,e,D)}}function y0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){b0(t,e,r)},function(r){return Bu(t,e,r)}):b0(t,e,a)}function b0(t,e,a){e.status="fulfilled",e.value=a,x0(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,v0(t,a)))}function Bu(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,x0(e),e=e.next;while(e!==r)}t.action=null}function x0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function S0(t,e){return e}function w0(t,e){if(xt){var a=zt.formState;if(a!==null){t:{var r=ht;if(xt){if(re){e:{for(var o=re,c=nn;o.nodeType!==8;){if(!c){o=null;break e}if(o=We(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){re=We(o.nextSibling),r=o.data==="F!";break t}}Sa(r)}r=!1}r&&(e=a[0])}}return a=we(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S0,lastRenderedState:e},a.queue=r,a=H0.bind(null,ht,r),r.dispatch=a,r=ju(!1),c=Uu.bind(null,ht,!1,r.queue),r=we(),o={state:e,dispatch:null,action:t,pending:null},r.queue=o,a=x5.bind(null,ht,o,c,a),o.dispatch=a,r.memoizedState=t,[e,a,!1]}function E0(t){var e=Qt();return T0(e,At,t)}function T0(t,e,a){e=Du(t,e,S0)[0],t=hl(yn)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?yr(e):e;var r=Qt(),o=r.queue,c=o.dispatch;return a!==r.memoizedState&&(ht.flags|=2048,di(9,S5.bind(null,o,a),{destroy:void 0},null)),[e,c,t]}function S5(t,e){t.action=e}function A0(t){var e=Qt(),a=At;if(a!==null)return T0(e,a,t);Qt(),e=e.memoizedState,a=Qt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function di(t,e,a,r){return t={tag:t,create:e,inst:a,deps:r,next:null},e=ht.updateQueue,e===null&&(e=fl(),ht.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function C0(){return Qt().memoizedState}function ml(t,e,a,r){var o=we();ht.flags|=t,o.memoizedState=di(1|e,a,{destroy:void 0},r===void 0?null:r)}function pl(t,e,a,r){var o=Qt();r=r===void 0?null:r;var c=o.memoizedState.inst;At!==null&&r!==null&&Tu(r,At.memoizedState.deps)?o.memoizedState=di(e,a,c,r):(ht.flags|=t,o.memoizedState=di(1|e,a,c,r))}function M0(t,e){ml(8390656,8,t,e)}function Vu(t,e){pl(2048,8,t,e)}function R0(t,e){return pl(4,2,t,e)}function z0(t,e){return pl(4,4,t,e)}function D0(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O0(t,e,a){a=a!=null?a.concat([t]):null,pl(4,4,D0.bind(null,e,t),a)}function _u(){}function j0(t,e){var a=Qt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Tu(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function B0(t,e){var a=Qt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Tu(e,r[1]))return r[0];if(r=t(),Ta){kn(!0);try{t()}finally{kn(!1)}}return a.memoizedState=[r,e],r}function Nu(t,e,a){return a===void 0||(Yn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=_m(),ht.lanes|=t,ta|=t,a)}function V0(t,e,a,r){return Ce(a,e)?a:li.current!==null?(t=Nu(t,a,r),Ce(t,e)||(te=!0),t):(Yn&42)===0?(te=!0,t.memoizedState=a):(t=_m(),ht.lanes|=t,ta|=t,e)}function _0(t,e,a,r,o){var c=K.p;K.p=c!==0&&8>c?c:8;var g=X.T,y={};X.T=y,Uu(t,!1,e,a);try{var w=o(),D=X.S;if(D!==null&&D(y,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=v5(w,r);br(t,e,H,De(t))}else br(t,e,r,De(t))}catch(q){br(t,e,{then:function(){},status:"rejected",reason:q},De())}finally{K.p=c,X.T=g}}function w5(){}function Lu(t,e,a,r){if(t.tag!==5)throw Error(l(476));var o=N0(t).queue;_0(t,o,e,dt,a===null?w5:function(){return L0(t),a(r)})}function N0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:dt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function L0(t){var e=N0(t).next.queue;br(t,e,{},De())}function ku(){return fe(Ur)}function k0(){return Qt().memoizedState}function U0(){return Qt().memoizedState}function E5(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=De();t=Zn(a);var r=Kn(e,t,a);r!==null&&(ve(r,e,a),wr(r,e,a)),e={cache:Su()},t.payload=e;return}e=e.return}}function T5(t,e,a){var r=De();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gl(t)?P0(e,a):(a=mu(t,e,a,r),a!==null&&(ve(a,t,r),q0(a,e,r)))}function H0(t,e,a){var r=De();br(t,e,a,r)}function br(t,e,a,r){var o={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(t))P0(e,o);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,y=c(g,a);if(o.hasEagerState=!0,o.eagerState=y,Ce(y,g))return Is(t,e,o,0),zt===null&&Ws(),!1}catch{}finally{}if(a=mu(t,e,o,r),a!==null)return ve(a,t,r),q0(a,e,r),!0}return!1}function Uu(t,e,a,r){if(r={lane:2,revertLane:Rc(),action:r,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(e)throw Error(l(479))}else e=mu(t,a,r,2),e!==null&&ve(e,t,2)}function gl(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function P0(t,e){ci=ul=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function q0(t,e,a){if((a&4194176)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Id(t,a)}}var rn={readContext:fe,use:dl,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt};rn.useCacheRefresh=Pt,rn.useMemoCache=Pt,rn.useHostTransitionStatus=Pt,rn.useFormState=Pt,rn.useActionState=Pt,rn.useOptimistic=Pt;var Aa={readContext:fe,use:dl,useCallback:function(t,e){return we().memoizedState=[t,e===void 0?null:e],t},useContext:fe,useEffect:M0,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,ml(4194308,4,D0.bind(null,e,t),a)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){ml(4,2,t,e)},useMemo:function(t,e){var a=we();e=e===void 0?null:e;var r=t();if(Ta){kn(!0);try{t()}finally{kn(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=we();if(a!==void 0){var o=a(e);if(Ta){kn(!0);try{a(e)}finally{kn(!1)}}}else o=e;return r.memoizedState=r.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},r.queue=t,t=t.dispatch=T5.bind(null,ht,t),[r.memoizedState,t]},useRef:function(t){var e=we();return t={current:t},e.memoizedState=t},useState:function(t){t=ju(t);var e=t.queue,a=H0.bind(null,ht,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:_u,useDeferredValue:function(t,e){var a=we();return Nu(a,t,e)},useTransition:function(){var t=ju(!1);return t=_0.bind(null,ht,t.queue,!0,!1),we().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=ht,o=we();if(xt){if(a===void 0)throw Error(l(407));a=a()}else{if(a=e(),zt===null)throw Error(l(349));(bt&60)!==0||f0(r,e,a)}o.memoizedState=a;var c={value:a,getSnapshot:e};return o.queue=c,M0(h0.bind(null,r,c,t),[t]),r.flags|=2048,di(9,d0.bind(null,r,c,a,e),{destroy:void 0},null),a},useId:function(){var t=we(),e=zt.identifierPrefix;if(xt){var a=gn,r=pn;a=(r&~(1<<32-Ae(r)-1)).toString(32)+a,e=":"+e+"R"+a,a=cl++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=y5++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return we().memoizedState=E5.bind(null,ht)}};Aa.useMemoCache=zu,Aa.useHostTransitionStatus=ku,Aa.useFormState=w0,Aa.useActionState=w0,Aa.useOptimistic=function(t){var e=we();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Uu.bind(null,ht,!0,a),a.dispatch=e,[t,e]};var $n={readContext:fe,use:dl,useCallback:j0,useContext:fe,useEffect:Vu,useImperativeHandle:O0,useInsertionEffect:R0,useLayoutEffect:z0,useMemo:B0,useReducer:hl,useRef:C0,useState:function(){return hl(yn)},useDebugValue:_u,useDeferredValue:function(t,e){var a=Qt();return V0(a,At.memoizedState,t,e)},useTransition:function(){var t=hl(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:yr(t),e]},useSyncExternalStore:c0,useId:k0};$n.useCacheRefresh=U0,$n.useMemoCache=zu,$n.useHostTransitionStatus=ku,$n.useFormState=E0,$n.useActionState=E0,$n.useOptimistic=function(t,e){var a=Qt();return g0(a,At,t,e)};var Ca={readContext:fe,use:dl,useCallback:j0,useContext:fe,useEffect:Vu,useImperativeHandle:O0,useInsertionEffect:R0,useLayoutEffect:z0,useMemo:B0,useReducer:Ou,useRef:C0,useState:function(){return Ou(yn)},useDebugValue:_u,useDeferredValue:function(t,e){var a=Qt();return At===null?Nu(a,t,e):V0(a,At.memoizedState,t,e)},useTransition:function(){var t=Ou(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:yr(t),e]},useSyncExternalStore:c0,useId:k0};Ca.useCacheRefresh=U0,Ca.useMemoCache=zu,Ca.useHostTransitionStatus=ku,Ca.useFormState=A0,Ca.useActionState=A0,Ca.useOptimistic=function(t,e){var a=Qt();return At!==null?g0(a,At,t,e):(a.baseState=t,[t,a.queue.dispatch])};function Hu(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:tt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pu={isMounted:function(t){return(t=t._reactInternals)?I(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var r=De(),o=Zn(r);o.payload=e,a!=null&&(o.callback=a),e=Kn(t,o,r),e!==null&&(ve(e,t,r),wr(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=De(),o=Zn(r);o.tag=1,o.payload=e,a!=null&&(o.callback=a),e=Kn(t,o,r),e!==null&&(ve(e,t,r),wr(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=De(),r=Zn(a);r.tag=2,e!=null&&(r.callback=e),e=Kn(t,r,a),e!==null&&(ve(e,t,a),wr(e,t,a))}};function G0(t,e,a,r,o,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!sr(a,r)||!sr(o,c):!0}function Y0(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Ma(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=tt({},a));for(var o in t)a[o]===void 0&&(a[o]=t[o])}return a}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $0(t){vl(t)}function X0(t){console.error(t)}function Q0(t){vl(t)}function yl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Z0(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function qu(t,e,a){return a=Zn(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(t,e)},a}function K0(t){return t=Zn(t),t.tag=3,t}function F0(t,e,a,r){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=r.value;t.payload=function(){return o(c)},t.callback=function(){Z0(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Z0(e,a,r),typeof o!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function A5(t,e,a,r,o){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&Sr(e,a,o,!0),a=Ue.current,a!==null){switch(a.tag){case 13:return an===null?Ec():a.alternate===null&&kt===0&&(kt=3),a.flags&=-257,a.flags|=65536,a.lanes=o,r===yu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),Ac(t,r,o)),!1;case 22:return a.flags|=65536,r===yu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),Ac(t,r,o)),!1}throw Error(l(435,a.tag))}return Ac(t,r,o),Ec(),!1}if(xt)return e=Ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,r!==vu&&(t=Error(l(422),{cause:r}),cr(Ne(t,a)))):(r!==vu&&(e=Error(l(423),{cause:r}),cr(Ne(e,a))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,r=Ne(r,a),o=qu(t.stateNode,r,o),ac(t,o),kt!==4&&(kt=2)),!1;var c=Error(l(520),{cause:r});if(c=Ne(c,a),Dr===null?Dr=[c]:Dr.push(c),kt!==4&&(kt=2),e===null)return!0;r=Ne(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=o&-o,a.lanes|=t,t=qu(a.stateNode,r,t),ac(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ea===null||!ea.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=K0(o),F0(o,t,a,r),ac(a,o),!1}a=a.return}while(a!==null);return!1}var J0=Error(l(461)),te=!1;function se(t,e,a,r){e.child=t===null?n0(e,null,a,r):wa(e,t.child,a,r)}function W0(t,e,a,r,o){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var y in r)y!=="ref"&&(g[y]=r[y])}else g=r;return za(e),r=Au(t,e,a,g,c,o),y=Cu(),t!==null&&!te?(Mu(t,e,o),bn(t,e,o)):(xt&&y&&pu(e),e.flags|=1,se(t,e,r,o),e.child)}function I0(t,e,a,r,o){if(t===null){var c=a.type;return typeof c=="function"&&!fc(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,tm(t,e,c,r,o)):(t=El(a.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Ju(t,o)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:sr,a(g,r)&&t.ref===e.ref)return bn(t,e,o)}return e.flags|=1,t=In(c,r),t.ref=e.ref,t.return=e,e.child=t}function tm(t,e,a,r,o){if(t!==null){var c=t.memoizedProps;if(sr(c,r)&&t.ref===e.ref)if(te=!1,e.pendingProps=r=c,Ju(t,o))(t.flags&131072)!==0&&(te=!0);else return e.lanes=t.lanes,bn(t,e,o)}return Gu(t,e,a,r,o)}function em(t,e,a){var r=e.pendingProps,o=r.children,c=(e.stateNode._pendingVisibility&2)!==0,g=t!==null?t.memoizedState:null;if(xr(t,e),r.mode==="hidden"||c){if((e.flags&128)!==0){if(r=g!==null?g.baseLanes|a:a,t!==null){for(o=e.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return nm(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ol(e,g!==null?g.cachePool:null),g!==null?a0(e,g):bu(),i0(e);else return e.lanes=e.childLanes=536870912,nm(t,e,g!==null?g.baseLanes|a:a,a)}else g!==null?(ol(e,g.cachePool),a0(e,g),Gn(),e.memoizedState=null):(t!==null&&ol(e,null),bu(),Gn());return se(t,e,o,a),e.child}function nm(t,e,a,r){var o=Eu();return o=o===null?null:{parent:Jt._currentValue,pool:o},e.memoizedState={baseLanes:a,cachePool:o},t!==null&&ol(e,null),bu(),i0(e),t!==null&&Sr(t,e,r,!0),null}function xr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(t===null||t.ref!==a)&&(e.flags|=2097664)}}function Gu(t,e,a,r,o){return za(e),a=Au(t,e,a,r,void 0,o),r=Cu(),t!==null&&!te?(Mu(t,e,o),bn(t,e,o)):(xt&&r&&pu(e),e.flags|=1,se(t,e,a,o),e.child)}function am(t,e,a,r,o,c){return za(e),e.updateQueue=null,a=u0(e,r,a,o),o0(t),r=Cu(),t!==null&&!te?(Mu(t,e,c),bn(t,e,c)):(xt&&r&&pu(e),e.flags|=1,se(t,e,a,c),e.child)}function im(t,e,a,r,o){if(za(e),e.stateNode===null){var c=ai,g=a.contextType;typeof g=="object"&&g!==null&&(c=fe(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Pu,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},ec(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?fe(g):ai,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Hu(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Pu.enqueueReplaceState(c,c.state,null),Tr(e,r,c,o),Er(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var y=e.memoizedProps,w=Ma(a,y);c.props=w;var D=c.context,H=a.contextType;g=ai,typeof H=="object"&&H!==null&&(g=fe(H));var q=a.getDerivedStateFromProps;H=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||D!==g)&&Y0(e,c,r,g),Qn=!1;var _=e.memoizedState;c.state=_,Tr(e,r,c,o),Er(),D=e.memoizedState,y||_!==D||Qn?(typeof q=="function"&&(Hu(e,a,q,r),D=e.memoizedState),(w=Qn||G0(e,a,w,r,_,D,g))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=D),c.props=r,c.state=D,c.context=g,r=w):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,nc(t,e),g=e.memoizedProps,H=Ma(a,g),c.props=H,q=e.pendingProps,_=c.context,D=a.contextType,w=ai,typeof D=="object"&&D!==null&&(w=fe(D)),y=a.getDerivedStateFromProps,(D=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==q||_!==w)&&Y0(e,c,r,w),Qn=!1,_=e.memoizedState,c.state=_,Tr(e,r,c,o),Er();var U=e.memoizedState;g!==q||_!==U||Qn||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof y=="function"&&(Hu(e,a,y,r),U=e.memoizedState),(H=Qn||G0(e,a,H,r,_,U,w)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,U,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,U,w)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=U),c.props=r,c.state=U,c.context=w,r=H):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,xr(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=wa(e,t.child,null,o),e.child=wa(e,null,a,o)):se(t,e,a,o),e.memoizedState=c.state,t=e.child):t=bn(t,e,o),t}function rm(t,e,a,r){return ur(),e.flags|=256,se(t,e,a,r),e.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:l0()}}function Xu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ge),t}function sm(t,e,a){var r=e.pendingProps,o=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),g&&(o=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(o?qn(e):Gn(),xt){var y=re,w;if(w=y){t:{for(w=y,y=nn;w.nodeType!==8;){if(!y){y=null;break t}if(w=We(w.nextSibling),w===null){y=null;break t}}y=w}y!==null?(e.memoizedState={dehydrated:y,treeContext:ba!==null?{id:pn,overflow:gn}:null,retryLane:536870912},w=qe(18,null,null,0),w.stateNode=y,w.return=e,e.child=w,ge=e,re=null,w=!0):w=!1}w||Sa(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?e.lanes=16:e.lanes=536870912,null;vn(e)}return y=r.children,r=r.fallback,o?(Gn(),o=e.mode,y=Zu({mode:"hidden",children:y},o),r=Oa(r,o,a,null),y.return=e,r.return=e,y.sibling=r,e.child=y,o=e.child,o.memoizedState=$u(a),o.childLanes=Xu(t,g,a),e.memoizedState=Yu,r):(qn(e),Qu(e,y))}if(w=t.memoizedState,w!==null&&(y=w.dehydrated,y!==null)){if(c)e.flags&256?(qn(e),e.flags&=-257,e=Ku(t,e,a)):e.memoizedState!==null?(Gn(),e.child=t.child,e.flags|=128,e=null):(Gn(),o=r.fallback,y=e.mode,r=Zu({mode:"visible",children:r.children},y),o=Oa(o,y,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,wa(e,t.child,null,a),r=e.child,r.memoizedState=$u(a),r.childLanes=Xu(t,g,a),e.memoizedState=Yu,e=o);else if(qn(e),y.data==="$!"){if(g=y.nextSibling&&y.nextSibling.dataset,g)var D=g.dgst;g=D,r=Error(l(419)),r.stack="",r.digest=g,cr({value:r,source:null,stack:null}),e=Ku(t,e,a)}else if(te||Sr(t,e,a,!1),g=(a&t.childLanes)!==0,te||g){if(g=zt,g!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==w.retryLane)throw w.retryLane=r,Pn(t,r),ve(g,t,r),J0}y.data==="$?"||Ec(),e=Ku(t,e,a)}else y.data==="$?"?(e.flags|=128,e.child=t.child,e=H5.bind(null,t),y._reactRetry=e,e=null):(t=w.treeContext,re=We(y.nextSibling),ge=e,xt=!0,Fe=null,nn=!1,t!==null&&(Le[ke++]=pn,Le[ke++]=gn,Le[ke++]=ba,pn=t.id,gn=t.overflow,ba=e),e=Qu(e,r.children),e.flags|=4096);return e}return o?(Gn(),o=r.fallback,y=e.mode,w=t.child,D=w.sibling,r=In(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&31457280,D!==null?o=In(D,o):(o=Oa(o,y,a,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,y=t.child.memoizedState,y===null?y=$u(a):(w=y.cachePool,w!==null?(D=Jt._currentValue,w=w.parent!==D?{parent:D,pool:D}:w):w=l0(),y={baseLanes:y.baseLanes|a,cachePool:w}),o.memoizedState=y,o.childLanes=Xu(t,g,a),e.memoizedState=Yu,r):(qn(e),a=t.child,t=a.sibling,a=In(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function Qu(t,e){return e=Zu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Zu(t,e){return jm(t,e,0,null)}function Ku(t,e,a){return wa(e,t.child,null,a),t=Qu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lm(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Iu(t.return,e,a)}function Fu(t,e,a,r,o){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=o)}function om(t,e,a){var r=e.pendingProps,o=r.revealOrder,c=r.tail;if(se(t,e,r.children,a),r=Ft.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,a,e);else if(t.tag===19)lm(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Tt(Ft,r),o){case"forwards":for(a=e.child,o=null;a!==null;)t=a.alternate,t!==null&&ll(t)===null&&(o=a),a=a.sibling;a=o,a===null?(o=e.child,e.child=null):(o=a.sibling,a.sibling=null),Fu(e,!1,o,a,c);break;case"backwards":for(a=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&ll(t)===null){e.child=o;break}t=o.sibling,o.sibling=a,a=o,o=t}Fu(e,!0,a,null,c);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Sr(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,a=In(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=In(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Ju(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function C5(t,e,a){switch(e.tag){case 3:_s(e,e.stateNode.containerInfo),Xn(e,Jt,t.memoizedState.cache),ur();break;case 27:case 5:Po(e);break;case 4:_s(e,e.stateNode.containerInfo);break;case 10:Xn(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(qn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?sm(t,e,a):(qn(e),t=bn(t,e,a),t!==null?t.sibling:null);qn(e);break;case 19:var o=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(Sr(t,e,a,!1),r=(a&e.childLanes)!==0),o){if(r)return om(t,e,a);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Tt(Ft,Ft.current),r)break;return null;case 22:case 23:return e.lanes=0,em(t,e,a);case 24:Xn(e,Jt,t.memoizedState.cache)}return bn(t,e,a)}function um(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)te=!0;else{if(!Ju(t,a)&&(e.flags&128)===0)return te=!1,C5(t,e,a);te=(t.flags&131072)!==0}else te=!1,xt&&(e.flags&1048576)!==0&&Qh(e,nl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,o=r._init;if(r=o(r._payload),e.type=r,typeof r=="function")fc(r)?(t=Ma(r,t),e.tag=1,e=im(null,e,r,t,a)):(e.tag=0,e=Gu(null,e,r,t,a));else{if(r!=null){if(o=r.$$typeof,o===S){e.tag=11,e=W0(null,e,r,t,a);break t}else if(o===R){e.tag=14,e=I0(null,e,r,t,a);break t}}throw e=F(r)||r,Error(l(306,e,""))}}return e;case 0:return Gu(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,o=Ma(r,e.pendingProps),im(t,e,r,o,a);case 3:t:{if(_s(e,e.stateNode.containerInfo),t===null)throw Error(l(387));var c=e.pendingProps;o=e.memoizedState,r=o.element,nc(t,e),Tr(e,c,null,a);var g=e.memoizedState;if(c=g.cache,Xn(e,Jt,c),c!==o.cache&&tc(e,[Jt],a,!0),Er(),c=g.element,o.isDehydrated)if(o={element:c,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=rm(t,e,c,a);break t}else if(c!==r){r=Ne(Error(l(424)),e),cr(r),e=rm(t,e,c,a);break t}else for(re=We(e.stateNode.containerInfo.firstChild),ge=e,xt=!0,Fe=null,nn=!0,a=n0(e,null,c,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),c===r){e=bn(t,e,a);break t}se(t,e,c,a)}e=e.child}return e;case 26:return xr(t,e),t===null?(a=dp(e.type,null,e.pendingProps,null))?e.memoizedState=a:xt||(a=e.type,t=e.pendingProps,r=_l(Ln.current).createElement(a),r[ce]=e,r[xe]=t,le(r,a,t),It(r),e.stateNode=r):e.memoizedState=dp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Po(e),t===null&&xt&&(r=e.stateNode=up(e.type,e.pendingProps,Ln.current),ge=e,nn=!0,re=We(r.firstChild)),r=e.pendingProps.children,t!==null||xt?se(t,e,r,a):e.child=wa(e,null,r,a),xr(t,e),e.child;case 5:return t===null&&xt&&((o=r=re)&&(r=nb(r,e.type,e.pendingProps,nn),r!==null?(e.stateNode=r,ge=e,re=We(r.firstChild),nn=!1,o=!0):o=!1),o||Sa(e)),Po(e),o=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Lc(o,c)?r=null:g!==null&&Lc(o,g)&&(e.flags|=32),e.memoizedState!==null&&(o=Au(t,e,b5,null,null,a),Ur._currentValue=o),xr(t,e),se(t,e,r,a),e.child;case 6:return t===null&&xt&&((t=a=re)&&(a=ab(a,e.pendingProps,nn),a!==null?(e.stateNode=a,ge=e,re=null,t=!0):t=!1),t||Sa(e)),null;case 13:return sm(t,e,a);case 4:return _s(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wa(e,null,r,a):se(t,e,r,a),e.child;case 11:return W0(t,e,e.type,e.pendingProps,a);case 7:return se(t,e,e.pendingProps,a),e.child;case 8:return se(t,e,e.pendingProps.children,a),e.child;case 12:return se(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,Xn(e,e.type,r.value),se(t,e,r.children,a),e.child;case 9:return o=e.type._context,r=e.pendingProps.children,za(e),o=fe(o),r=r(o),e.flags|=1,se(t,e,r,a),e.child;case 14:return I0(t,e,e.type,e.pendingProps,a);case 15:return tm(t,e,e.type,e.pendingProps,a);case 19:return om(t,e,a);case 22:return em(t,e,a);case 24:return za(e),r=fe(Jt),t===null?(o=Eu(),o===null&&(o=zt,c=Su(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),e.memoizedState={parent:r,cache:o},ec(e),Xn(e,Jt,o)):((t.lanes&a)!==0&&(nc(t,e),Tr(e,null,null,a),Er()),o=t.memoizedState,c=e.memoizedState,o.parent!==r?(o={parent:r,cache:r},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Xn(e,Jt,r)):(r=c.cache,Xn(e,Jt,r),r!==o.cache&&tc(e,[Jt],a,!0))),se(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}var Wu=gt(null),Ra=null,xn=null;function Xn(t,e,a){Tt(Wu,e._currentValue),e._currentValue=a}function Sn(t){t._currentValue=Wu.current,Et(Wu)}function Iu(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function tc(t,e,a,r){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){var g=o.child;c=c.firstContext;t:for(;c!==null;){var y=c;c=o;for(var w=0;w<e.length;w++)if(y.context===e[w]){c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),Iu(c.return,a,t),r||(g=null);break t}c=y.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(l(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Iu(g,a,t),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===t){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Sr(t,e,a,r){t=null;for(var o=e,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(l(387));if(g=g.memoizedProps,g!==null){var y=o.type;Ce(o.pendingProps.value,g.value)||(t!==null?t.push(y):t=[y])}}else if(o===Vs.current){if(g=o.alternate,g===null)throw Error(l(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(Ur):t=[Ur])}o=o.return}t!==null&&tc(e,t,a,r),e.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!Ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function za(t){Ra=t,xn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function fe(t){return cm(Ra,t)}function xl(t,e){return Ra===null&&za(t),cm(t,e)}function cm(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},xn===null){if(t===null)throw Error(l(308));xn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else xn=xn.next=e;return a}var Qn=!1;function ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Zn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Vt&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,e=tl(t),$h(t,null,a),e}return Is(t,r,e,a),tl(t)}function wr(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194176)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Id(t,a)}}function ac(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?o=c=e:c=c.next=e}else o=c=e;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var ic=!1;function Er(){if(ic){var t=ui;if(t!==null)throw t}}function Tr(t,e,a,r){ic=!1;var o=t.updateQueue;Qn=!1;var c=o.firstBaseUpdate,g=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var w=y,D=w.next;w.next=null,g===null?c=D:g.next=D,g=w;var H=t.alternate;H!==null&&(H=H.updateQueue,y=H.lastBaseUpdate,y!==g&&(y===null?H.firstBaseUpdate=D:y.next=D,H.lastBaseUpdate=w))}if(c!==null){var q=o.baseState;g=0,H=D=w=null,y=c;do{var _=y.lane&-536870913,U=_!==y.lane;if(U?(bt&_)===_:(r&_)===_){_!==0&&_===oi&&(ic=!0),H!==null&&(H=H.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var et=t,ot=y;_=e;var Ut=a;switch(ot.tag){case 1:if(et=ot.payload,typeof et=="function"){q=et.call(Ut,q,_);break t}q=et;break t;case 3:et.flags=et.flags&-65537|128;case 0:if(et=ot.payload,_=typeof et=="function"?et.call(Ut,q,_):et,_==null)break t;q=tt({},q,_);break t;case 2:Qn=!0}}_=y.callback,_!==null&&(t.flags|=64,U&&(t.flags|=8192),U=o.callbacks,U===null?o.callbacks=[_]:U.push(_))}else U={lane:_,tag:y.tag,payload:y.payload,callback:y.callback,next:null},H===null?(D=H=U,w=q):H=H.next=U,g|=_;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;U=y,y=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);H===null&&(w=q),o.baseState=w,o.firstBaseUpdate=D,o.lastBaseUpdate=H,c===null&&(o.shared.lanes=0),ta|=g,t.lanes=g,t.memoizedState=q}}function fm(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function dm(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)fm(a[t],e)}function Ar(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==o)}}catch(y){Mt(e,e.return,y)}}function Fn(t,e,a){try{var r=e.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){var g=r.inst,y=g.destroy;if(y!==void 0){g.destroy=void 0,o=e;var w=a;try{y()}catch(D){Mt(o,w,D)}}}r=r.next}while(r!==c)}}catch(D){Mt(e,e.return,D)}}function hm(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{dm(e,a)}catch(r){Mt(t,t.return,r)}}}function mm(t,e,a){a.props=Ma(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Mt(t,e,r)}}function Da(t,e){try{var a=t.ref;if(a!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var o=r;break;default:o=r}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Mt(t,e,c)}}function Me(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(o){Mt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Mt(t,e,o)}else a.current=null}function pm(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(o){Mt(t,t.return,o)}}function gm(t,e,a){try{var r=t.stateNode;J5(r,t.type,a,e),r[xe]=e}catch(o){Mt(t,t.return,o)}}function vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function rc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sc(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(sc(t,e,a),t=t.sibling;t!==null;)sc(t,e,a),t=t.sibling}function Sl(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(Sl(t,e,a),t=t.sibling;t!==null;)Sl(t,e,a),t=t.sibling}var wn=!1,Lt=!1,lc=!1,ym=typeof WeakSet=="function"?WeakSet:Set,ee=null,bm=!1;function M5(t,e){if(t=t.containerInfo,_c=Pl,t=Nh(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,y=-1,w=-1,D=0,H=0,q=t,_=null;e:for(;;){for(var U;q!==a||o!==0&&q.nodeType!==3||(y=g+o),q!==c||r!==0&&q.nodeType!==3||(w=g+r),q.nodeType===3&&(g+=q.nodeValue.length),(U=q.firstChild)!==null;)_=q,q=U;for(;;){if(q===t)break e;if(_===a&&++D===o&&(y=g),_===c&&++H===r&&(w=g),(U=q.nextSibling)!==null)break;q=_,_=q.parentNode}q=U}a=y===-1||w===-1?null:{start:y,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:t,selectionRange:a},Pl=!1,ee=e;ee!==null;)if(e=ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ee=t;else for(;ee!==null;){switch(e=ee,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,o=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var et=Ma(a.type,o,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(et,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Mt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Hc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,ee=t;break}ee=e.return}return et=bm,bm=!1,et}function xm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Tn(t,a),r&4&&Ar(5,a);break;case 1:if(Tn(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(y){Mt(a,a.return,y)}else{var o=Ma(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Mt(a,a.return,y)}}r&64&&hm(a),r&512&&Da(a,a.return);break;case 3:if(Tn(t,a),r&64&&(r=a.updateQueue,r!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{dm(r,t)}catch(y){Mt(a,a.return,y)}}break;case 26:Tn(t,a),r&512&&Da(a,a.return);break;case 27:case 5:Tn(t,a),e===null&&r&4&&pm(a),r&512&&Da(a,a.return);break;case 12:Tn(t,a);break;case 13:Tn(t,a),r&4&&Em(t,a);break;case 22:if(o=a.memoizedState!==null||wn,!o){e=e!==null&&e.memoizedState!==null||Lt;var c=wn,g=Lt;wn=o,(Lt=e)&&!g?Jn(t,a,(a.subtreeFlags&8772)!==0):Tn(t,a),wn=c,Lt=g}r&512&&(a.memoizedProps.mode==="manual"?Da(a,a.return):Me(a,a.return));break;default:Tn(t,a)}}function Sm(t){var e=t.alternate;e!==null&&(t.alternate=null,Sm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Qo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Re=!1;function En(t,e,a){for(a=a.child;a!==null;)wm(t,e,a),a=a.sibling}function wm(t,e,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 26:Lt||Me(a,e),En(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Lt||Me(a,e);var r=Zt,o=Re;for(Zt=a.stateNode,En(t,e,a),a=a.stateNode,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Qo(a),Zt=r,Re=o;break;case 5:Lt||Me(a,e);case 6:o=Zt;var c=Re;if(Zt=null,En(t,e,a),Zt=o,Re=c,Zt!==null)if(Re)try{t=Zt,r=a.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(g){Mt(a,e,g)}else try{Zt.removeChild(a.stateNode)}catch(g){Mt(a,e,g)}break;case 18:Zt!==null&&(Re?(e=Zt,a=a.stateNode,e.nodeType===8?Uc(e.parentNode,a):e.nodeType===1&&Uc(e,a),Gr(e)):Uc(Zt,a.stateNode));break;case 4:r=Zt,o=Re,Zt=a.stateNode.containerInfo,Re=!0,En(t,e,a),Zt=r,Re=o;break;case 0:case 11:case 14:case 15:Lt||Fn(2,a,e),Lt||Fn(4,a,e),En(t,e,a);break;case 1:Lt||(Me(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&mm(a,e,r)),En(t,e,a);break;case 21:En(t,e,a);break;case 22:Lt||Me(a,e),Lt=(r=Lt)||a.memoizedState!==null,En(t,e,a),Lt=r;break;default:En(t,e,a)}}function Em(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gr(t)}catch(a){Mt(e,e.return,a)}}function R5(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ym),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ym),e;default:throw Error(l(435,t.tag))}}function oc(t,e){var a=R5(t);e.forEach(function(r){var o=P5.bind(null,t,r);a.has(r)||(a.add(r),r.then(o,o))})}function He(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r],c=t,g=e,y=g;t:for(;y!==null;){switch(y.tag){case 27:case 5:Zt=y.stateNode,Re=!1;break t;case 3:Zt=y.stateNode.containerInfo,Re=!0;break t;case 4:Zt=y.stateNode.containerInfo,Re=!0;break t}y=y.return}if(Zt===null)throw Error(l(160));wm(c,g,o),Zt=null,Re=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Tm(e,t),e=e.sibling}var Je=null;function Tm(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:He(e,t),Pe(t),r&4&&(Fn(3,t,t.return),Ar(3,t),Fn(5,t,t.return));break;case 1:He(e,t),Pe(t),r&512&&(Lt||a===null||Me(a,a.return)),r&64&&wn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var o=Je;if(He(e,t),Pe(t),r&512&&(Lt||a===null||Me(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,o=o.ownerDocument||o;e:switch(r){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ji]||c[ce]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(r),o.head.insertBefore(c,o.querySelector("head > title"))),le(c,r,a),c[ce]=t,It(c),r=c;break t;case"link":var g=pp("link","href",o).get(r+(a.href||""));if(g){for(var y=0;y<g.length;y++)if(c=g[y],c.getAttribute("href")===(a.href==null?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(y,1);break e}}c=o.createElement(r),le(c,r,a),o.head.appendChild(c);break;case"meta":if(g=pp("meta","content",o).get(r+(a.content||""))){for(y=0;y<g.length;y++)if(c=g[y],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(y,1);break e}}c=o.createElement(r),le(c,r,a),o.head.appendChild(c);break;default:throw Error(l(468,r))}c[ce]=t,It(c),r=c}t.stateNode=r}else gp(o,t.type,t.stateNode);else t.stateNode=mp(o,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?gp(o,t.type,t.stateNode):mp(o,r,t.memoizedProps)):r===null&&t.stateNode!==null&&gm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){o=t.stateNode,c=t.memoizedProps;try{for(var w=o.firstChild;w;){var D=w.nextSibling,H=w.nodeName;w[Ji]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&w.rel.toLowerCase()==="stylesheet"||o.removeChild(w),w=D}for(var q=t.type,_=o.attributes;_.length;)o.removeAttributeNode(_[0]);le(o,q,c),o[ce]=t,o[xe]=c}catch(et){Mt(t,t.return,et)}}case 5:if(He(e,t),Pe(t),r&512&&(Lt||a===null||Me(a,a.return)),t.flags&32){o=t.stateNode;try{Fa(o,"")}catch(et){Mt(t,t.return,et)}}r&4&&t.stateNode!=null&&(o=t.memoizedProps,gm(t,o,a!==null?a.memoizedProps:o)),r&1024&&(lc=!0);break;case 6:if(He(e,t),Pe(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(et){Mt(t,t.return,et)}}break;case 3:if(kl=null,o=Je,Je=Nl(e.containerInfo),He(e,t),Je=o,Pe(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(e.containerInfo)}catch(et){Mt(t,t.return,et)}lc&&(lc=!1,Am(t));break;case 4:r=Je,Je=Nl(t.stateNode.containerInfo),He(e,t),Pe(t),Je=r;break;case 12:He(e,t),Pe(t);break;case 13:He(e,t),Pe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vc=en()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,oc(t,r)));break;case 22:if(r&512&&(Lt||a===null||Me(a,a.return)),w=t.memoizedState!==null,D=a!==null&&a.memoizedState!==null,H=wn,q=Lt,wn=H||w,Lt=q||D,He(e,t),Lt=q,wn=H,Pe(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=w?e._visibility&-2:e._visibility|1,w&&(e=wn||Lt,a===null||D||e||hi(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(a===null){D=a=e;try{if(o=D.stateNode,w)c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=D.stateNode,y=D.memoizedProps.style;var U=y!=null&&y.hasOwnProperty("display")?y.display:null;g.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(et){Mt(D,D.return,et)}}}else if(e.tag===6){if(a===null){D=e;try{D.stateNode.nodeValue=w?"":D.memoizedProps}catch(et){Mt(D,D.return,et)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,oc(t,a))));break;case 19:He(e,t),Pe(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,oc(t,r)));break;case 21:break;default:He(e,t),Pe(t)}}function Pe(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(vm(a)){var r=a;break t}a=a.return}throw Error(l(160))}switch(r.tag){case 27:var o=r.stateNode,c=rc(t);Sl(t,c,o);break;case 5:var g=r.stateNode;r.flags&32&&(Fa(g,""),r.flags&=-33);var y=rc(t);Sl(t,y,g);break;case 3:case 4:var w=r.stateNode.containerInfo,D=rc(t);sc(t,D,w);break;default:throw Error(l(161))}}}catch(H){Mt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Am(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Am(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Tn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)xm(t,e.alternate,e),e=e.sibling}function hi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Fn(4,e,e.return),hi(e);break;case 1:Me(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&mm(e,e.return,a),hi(e);break;case 26:case 27:case 5:Me(e,e.return),hi(e);break;case 22:Me(e,e.return),e.memoizedState===null&&hi(e);break;default:hi(e)}t=t.sibling}}function Jn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,o=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Jn(o,c,a),Ar(4,c);break;case 1:if(Jn(o,c,a),r=c,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){Mt(r,r.return,D)}if(r=c,o=r.updateQueue,o!==null){var y=r.stateNode;try{var w=o.shared.hiddenCallbacks;if(w!==null)for(o.shared.hiddenCallbacks=null,o=0;o<w.length;o++)fm(w[o],y)}catch(D){Mt(r,r.return,D)}}a&&g&64&&hm(c),Da(c,c.return);break;case 26:case 27:case 5:Jn(o,c,a),a&&r===null&&g&4&&pm(c),Da(c,c.return);break;case 12:Jn(o,c,a);break;case 13:Jn(o,c,a),a&&g&4&&Em(o,c);break;case 22:c.memoizedState===null&&Jn(o,c,a),Da(c,c.return);break;default:Jn(o,c,a)}e=e.sibling}}function uc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&pr(a))}function cc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pr(t))}function Wn(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cm(t,e,a,r),e=e.sibling}function Cm(t,e,a,r){var o=e.flags;switch(e.tag){case 0:case 11:case 15:Wn(t,e,a,r),o&2048&&Ar(9,e);break;case 3:Wn(t,e,a,r),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pr(t)));break;case 12:if(o&2048){Wn(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,y=c.onPostCommit;typeof y=="function"&&y(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Mt(e,e.return,w)}}else Wn(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,e.memoizedState!==null?c._visibility&4?Wn(t,e,a,r):Cr(t,e):c._visibility&4?Wn(t,e,a,r):(c._visibility|=4,mi(t,e,a,r,(e.subtreeFlags&10256)!==0)),o&2048&&uc(e.alternate,e);break;case 24:Wn(t,e,a,r),o&2048&&cc(e.alternate,e);break;default:Wn(t,e,a,r)}}function mi(t,e,a,r,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,y=a,w=r,D=g.flags;switch(g.tag){case 0:case 11:case 15:mi(c,g,y,w,o),Ar(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&4?mi(c,g,y,w,o):Cr(c,g):(H._visibility|=4,mi(c,g,y,w,o)),o&&D&2048&&uc(g.alternate,g);break;case 24:mi(c,g,y,w,o),o&&D&2048&&cc(g.alternate,g);break;default:mi(c,g,y,w,o)}e=e.sibling}}function Cr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,o=r.flags;switch(r.tag){case 22:Cr(a,r),o&2048&&uc(r.alternate,r);break;case 24:Cr(a,r),o&2048&&cc(r.alternate,r);break;default:Cr(a,r)}e=e.sibling}}var Mr=8192;function pi(t){if(t.subtreeFlags&Mr)for(t=t.child;t!==null;)Mm(t),t=t.sibling}function Mm(t){switch(t.tag){case 26:pi(t),t.flags&Mr&&t.memoizedState!==null&&gb(Je,t.memoizedState,t.memoizedProps);break;case 5:pi(t);break;case 3:case 4:var e=Je;Je=Nl(t.stateNode.containerInfo),pi(t),Je=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Mr,Mr=16777216,pi(t),Mr=e):pi(t));break;default:pi(t)}}function Rm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Rr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];ee=r,Dm(r,t)}Rm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zm(t),t=t.sibling}function zm(t){switch(t.tag){case 0:case 11:case 15:Rr(t),t.flags&2048&&Fn(9,t,t.return);break;case 3:Rr(t);break;case 12:Rr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,wl(t)):Rr(t);break;default:Rr(t)}}function wl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];ee=r,Dm(r,t)}Rm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fn(8,e,e.return),wl(e);break;case 22:a=e.stateNode,a._visibility&4&&(a._visibility&=-5,wl(e));break;default:wl(e)}t=t.sibling}}function Dm(t,e){for(;ee!==null;){var a=ee;switch(a.tag){case 0:case 11:case 15:Fn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,ee=r;else t:for(a=t;ee!==null;){r=ee;var o=r.sibling,c=r.return;if(Sm(r),r===a){ee=null;break t}if(o!==null){o.return=c,ee=o;break t}ee=c}}}function z5(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,a,r){return new z5(t,e,a,r)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function In(t,e){var a=t.alternate;return a===null?(a=qe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Om(t,e){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function El(t,e,a,r,o,c){var g=0;if(r=t,typeof t=="function")fc(t)&&(g=1);else if(typeof t=="string")g=mb(t,a,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case h:return Oa(a.children,o,c,e);case p:g=8,o|=24;break;case v:return t=qe(12,a,e,o|2),t.elementType=v,t.lanes=c,t;case C:return t=qe(13,a,e,o),t.elementType=C,t.lanes=c,t;case O:return t=qe(19,a,e,o),t.elementType=O,t.lanes=c,t;case N:return jm(a,o,c,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:case E:g=10;break t;case x:g=9;break t;case S:g=11;break t;case R:g=14;break t;case L:g=16,r=null;break t}g=29,a=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=qe(g,a,e,o),e.elementType=t,e.type=r,e.lanes=c,e}function Oa(t,e,a,r){return t=qe(7,t,r,e),t.lanes=a,t}function jm(t,e,a,r){t=qe(22,t,r,e),t.elementType=N,t.lanes=a;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var c=o._current;if(c===null)throw Error(l(456));if((o._pendingVisibility&2)===0){var g=Pn(c,2);g!==null&&(o._pendingVisibility|=2,ve(g,c,2))}},attach:function(){var c=o._current;if(c===null)throw Error(l(456));if((o._pendingVisibility&2)!==0){var g=Pn(c,2);g!==null&&(o._pendingVisibility&=-3,ve(g,c,2))}}};return t.stateNode=o,t}function dc(t,e,a){return t=qe(6,t,null,e),t.lanes=a,t}function hc(t,e,a){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function An(t){t.flags|=4}function Bm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!vp(e)){if(e=Ue.current,e!==null&&((bt&4194176)===bt?an!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==an))throw dr=yu,Fh;t.flags|=8192}}function Tl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Jd():536870912,t.lanes|=e,vi|=e)}function zr(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var o=t.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&31457280,r|=o.flags&31457280,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function D5(t,e,a){var r=e.pendingProps;switch(gu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Sn(Jt),Ya(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(or(e)?An(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Fe!==null&&(Sc(Fe),Fe=null))),Bt(e),null;case 26:return a=e.memoizedState,t===null?(An(e),a!==null?(Bt(e),Bm(e,a)):(Bt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(An(e),Bt(e),Bm(e,a)):(Bt(e),e.flags&=-16777217):(t.memoizedProps!==r&&An(e),Bt(e),e.flags&=-16777217),null;case 27:Ns(e),a=Ln.current;var o=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Bt(e),null}t=pe.current,or(e)?Zh(e):(t=up(o,r,a),e.stateNode=t,An(e))}return Bt(e),null;case 5:if(Ns(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Bt(e),null}if(t=pe.current,or(e))Zh(e);else{switch(o=_l(Ln.current),t){case 1:t=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?o.createElement(a,{is:r.is}):o.createElement(a)}}t[ce]=e,t[xe]=r;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=t;t:switch(le(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&An(e)}}return Bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=Ln.current,or(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,o=ge,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}t[ce]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ap(t.nodeValue,a)),t||Sa(e)}else t=_l(t).createTextNode(r),t[ce]=e,e.stateNode=t}return Bt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=or(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(l(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[ce]=e}else ur(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),o=!1}else Fe!==null&&(Sc(Fe),Fe=null),o=!0;if(!o)return e.flags&256?(vn(e),e):(vn(e),null)}if(vn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Tl(e,e.updateQueue),Bt(e),null;case 4:return Ya(),t===null&&jc(e.stateNode.containerInfo),Bt(e),null;case 10:return Sn(e.type),Bt(e),null;case 19:if(Et(Ft),o=e.memoizedState,o===null)return Bt(e),null;if(r=(e.flags&128)!==0,c=o.rendering,c===null)if(r)zr(o,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=ll(t),c!==null){for(e.flags|=128,zr(o,!1),t=c.updateQueue,e.updateQueue=t,Tl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Om(a,t),a=a.sibling;return Tt(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&en()>Al&&(e.flags|=128,r=!0,zr(o,!1),e.lanes=4194304)}else{if(!r)if(t=ll(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Tl(e,t),zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Bt(e),null}else 2*en()-o.renderingStartTime>Al&&a!==536870912&&(e.flags|=128,r=!0,zr(o,!1),e.lanes=4194304);o.isBackwards?(c.sibling=e.child,e.child=c):(t=o.last,t!==null?t.sibling=c:e.child=c,o.last=c)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=en(),e.sibling=null,t=Ft.current,Tt(Ft,r?t&1|2:t&1),e):(Bt(e),null);case 22:case 23:return vn(e),xu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),a=e.updateQueue,a!==null&&Tl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&Et(Ea),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sn(Jt),Bt(e),null;case 25:return null}throw Error(l(156,e.tag))}function O5(t,e){switch(gu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sn(Jt),Ya(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ns(e),null;case 13:if(vn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(Ft),null;case 4:return Ya(),null;case 10:return Sn(e.type),null;case 22:case 23:return vn(e),xu(),t!==null&&Et(Ea),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sn(Jt),null;case 25:return null;default:return null}}function Vm(t,e){switch(gu(e),e.tag){case 3:Sn(Jt),Ya();break;case 26:case 27:case 5:Ns(e);break;case 4:Ya();break;case 13:vn(e);break;case 19:Et(Ft);break;case 10:Sn(e.type);break;case 22:case 23:vn(e),xu(),t!==null&&Et(Ea);break;case 24:Sn(Jt)}}var j5={getCacheForType:function(t){var e=fe(Jt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},B5=typeof WeakMap=="function"?WeakMap:Map,Vt=0,zt=null,pt=null,bt=0,Dt=0,ze=null,Cn=!1,gi=!1,mc=!1,Mn=0,kt=0,ta=0,ja=0,pc=0,Ge=0,vi=0,Dr=null,sn=null,gc=!1,vc=0,Al=1/0,Cl=null,ea=null,Ml=!1,Ba=null,Or=0,yc=0,bc=null,jr=0,xc=null;function De(){if((Vt&2)!==0&&bt!==0)return bt&-bt;if(X.T!==null){var t=oi;return t!==0?t:Rc()}return eh()}function _m(){Ge===0&&(Ge=(bt&536870912)===0||xt?Fd():536870912);var t=Ue.current;return t!==null&&(t.flags|=32),Ge}function ve(t,e,a){(t===zt&&Dt===2||t.cancelPendingCommit!==null)&&(yi(t,0),Rn(t,bt,Ge,!1)),Fi(t,a),((Vt&2)===0||t!==zt)&&(t===zt&&((Vt&2)===0&&(ja|=a),kt===4&&Rn(t,bt,Ge,!1)),ln(t))}function Nm(t,e,a){if((Vt&6)!==0)throw Error(l(327));var r=!a&&(e&60)===0&&(e&t.expiredLanes)===0||Ki(t,e),o=r?N5(t,e):Tc(t,e,!0),c=r;do{if(o===0){gi&&!r&&Rn(t,e,0,!1);break}else if(o===6)Rn(t,e,0,!Cn);else{if(a=t.current.alternate,c&&!V5(a)){o=Tc(t,e,!1),c=!1;continue}if(o===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var y=t;o=Dr;var w=y.current.memoizedState.isDehydrated;if(w&&(yi(y,g).flags|=256),g=Tc(y,g,!1),g!==2){if(mc&&!w){y.errorRecoveryDisabledLanes|=c,ja|=c,o=4;break t}c=sn,sn=o,c!==null&&Sc(c)}o=g}if(c=!1,o!==2)continue}}if(o===1){yi(t,0),Rn(t,e,0,!0);break}t:{switch(r=t,o){case 0:case 1:throw Error(l(345));case 4:if((e&4194176)===e){Rn(r,e,Ge,!Cn);break t}break;case 2:sn=null;break;case 3:case 5:break;default:throw Error(l(329))}if(r.finishedWork=a,r.finishedLanes=e,(e&62914560)===e&&(c=vc+300-en(),10<c)){if(Rn(r,e,Ge,!Cn),Hs(r,0)!==0)break t;r.timeoutHandle=sp(Lm.bind(null,r,a,sn,Cl,gc,e,Ge,ja,vi,Cn,2,-0,0),c);break t}Lm(r,a,sn,Cl,gc,e,Ge,ja,vi,Cn,0,-0,0)}}break}while(!0);ln(t)}function Sc(t){sn===null?sn=t:sn.push.apply(sn,t)}function Lm(t,e,a,r,o,c,g,y,w,D,H,q,_){var U=e.subtreeFlags;if((U&8192||(U&16785408)===16785408)&&(kr={stylesheets:null,count:0,unsuspend:pb},Mm(e),e=vb(),e!==null)){t.cancelPendingCommit=e(Ym.bind(null,t,a,r,o,g,y,w,1,q,_)),Rn(t,c,g,!D);return}Ym(t,a,r,o,g,y,w,H,q,_)}function V5(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var o=a[r],c=o.getSnapshot;o=o.value;try{if(!Ce(c(),o))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e,a,r){e&=~pc,e&=~ja,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var o=e;0<o;){var c=31-Ae(o),g=1<<c;r[c]=-1,o&=~g}a!==0&&Wd(t,a,e)}function Rl(){return(Vt&6)===0?(Br(0),!1):!0}function wc(){if(pt!==null){if(Dt===0)var t=pt.return;else t=pt,xn=Ra=null,Ru(t),si=null,hr=0,t=pt;for(;t!==null;)Vm(t.alternate,t),t=t.return;pt=null}}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,I5(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),wc(),zt=t,pt=a=In(t.current,null),bt=e,Dt=0,ze=null,Cn=!1,gi=Ki(t,e),mc=!1,vi=Ge=pc=ja=ta=kt=0,sn=Dr=null,gc=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var o=31-Ae(r),c=1<<o;e|=t[o],r&=~c}return Mn=e,Ws(),a}function km(t,e){ht=null,X.H=rn,e===fr?(e=Ih(),Dt=3):e===Fh?(e=Ih(),Dt=4):Dt=e===J0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ze=e,pt===null&&(kt=1,yl(t,Ne(e,t.current)))}function Um(){var t=X.H;return X.H=rn,t===null?rn:t}function Hm(){var t=X.A;return X.A=j5,t}function Ec(){kt=4,Cn||(bt&4194176)!==bt&&Ue.current!==null||(gi=!0),(ta&134217727)===0&&(ja&134217727)===0||zt===null||Rn(zt,bt,Ge,!1)}function Tc(t,e,a){var r=Vt;Vt|=2;var o=Um(),c=Hm();(zt!==t||bt!==e)&&(Cl=null,yi(t,e)),e=!1;var g=kt;t:do try{if(Dt!==0&&pt!==null){var y=pt,w=ze;switch(Dt){case 8:wc(),g=6;break t;case 3:case 2:case 6:Ue.current===null&&(e=!0);var D=Dt;if(Dt=0,ze=null,bi(t,y,w,D),a&&gi){g=0;break t}break;default:D=Dt,Dt=0,ze=null,bi(t,y,w,D)}}_5(),g=kt;break}catch(H){km(t,H)}while(!0);return e&&t.shellSuspendCounter++,xn=Ra=null,Vt=r,X.H=o,X.A=c,pt===null&&(zt=null,bt=0,Ws()),g}function _5(){for(;pt!==null;)Pm(pt)}function N5(t,e){var a=Vt;Vt|=2;var r=Um(),o=Hm();zt!==t||bt!==e?(Cl=null,Al=en()+500,yi(t,e)):gi=Ki(t,e);t:do try{if(Dt!==0&&pt!==null){e=pt;var c=ze;e:switch(Dt){case 1:Dt=0,ze=null,bi(t,e,c,1);break;case 2:if(Jh(c)){Dt=0,ze=null,qm(e);break}e=function(){Dt===2&&zt===t&&(Dt=7),ln(t)},c.then(e,e);break t;case 3:Dt=7;break t;case 4:Dt=5;break t;case 7:Jh(c)?(Dt=0,ze=null,qm(e)):(Dt=0,ze=null,bi(t,e,c,7));break;case 5:var g=null;switch(pt.tag){case 26:g=pt.memoizedState;case 5:case 27:var y=pt;if(!g||vp(g)){Dt=0,ze=null;var w=y.sibling;if(w!==null)pt=w;else{var D=y.return;D!==null?(pt=D,zl(D)):pt=null}break e}}Dt=0,ze=null,bi(t,e,c,5);break;case 6:Dt=0,ze=null,bi(t,e,c,6);break;case 8:wc(),kt=6;break t;default:throw Error(l(462))}}L5();break}catch(H){km(t,H)}while(!0);return xn=Ra=null,X.H=r,X.A=o,Vt=a,pt!==null?0:(zt=null,bt=0,Ws(),kt)}function L5(){for(;pt!==null&&!r2();)Pm(pt)}function Pm(t){var e=um(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?zl(t):pt=e}function qm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=am(a,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=am(a,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:Ru(e);default:Vm(a,e),e=pt=Om(e,Mn),e=um(a,e,Mn)}t.memoizedProps=t.pendingProps,e===null?zl(t):pt=e}function bi(t,e,a,r){xn=Ra=null,Ru(e),si=null,hr=0;var o=e.return;try{if(A5(t,o,e,a,bt)){kt=1,yl(t,Ne(a,t.current)),pt=null;return}}catch(c){if(o!==null)throw pt=o,c;kt=1,yl(t,Ne(a,t.current)),pt=null;return}e.flags&32768?(xt||r===1?t=!0:gi||(bt&536870912)!==0?t=!1:(Cn=t=!0,(r===2||r===3||r===6)&&(r=Ue.current,r!==null&&r.tag===13&&(r.flags|=16384))),Gm(e,t)):zl(e)}function zl(t){var e=t;do{if((e.flags&32768)!==0){Gm(e,Cn);return}t=e.return;var a=D5(e.alternate,e,Mn);if(a!==null){pt=a;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);kt===0&&(kt=5)}function Gm(t,e){do{var a=O5(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);kt=6,pt=null}function Ym(t,e,a,r,o,c,g,y,w,D){var H=X.T,q=K.p;try{K.p=2,X.T=null,k5(t,e,a,r,q,o,c,g,y,w,D)}finally{X.T=H,K.p=q}}function k5(t,e,a,r,o,c,g,y){do xi();while(Ba!==null);if((Vt&6)!==0)throw Error(l(327));var w=t.finishedWork;if(r=t.finishedLanes,w===null)return null;if(t.finishedWork=null,t.finishedLanes=0,w===t.current)throw Error(l(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var D=w.lanes|w.childLanes;if(D|=hu,g2(t,r,D,c,g,y),t===zt&&(pt=zt=null,bt=0),(w.subtreeFlags&10256)===0&&(w.flags&10256)===0||Ml||(Ml=!0,yc=D,bc=a,q5(Ls,function(){return xi(),null})),a=(w.flags&15990)!==0,(w.subtreeFlags&15990)!==0||a?(a=X.T,X.T=null,c=K.p,K.p=2,g=Vt,Vt|=4,M5(t,w),Tm(w,t),o5(Nc,t.containerInfo),Pl=!!_c,Nc=_c=null,t.current=w,xm(t,w.alternate,w),s2(),Vt=g,K.p=c,X.T=a):t.current=w,Ml?(Ml=!1,Ba=t,Or=r):$m(t,D),D=t.pendingLanes,D===0&&(ea=null),f2(w.stateNode),ln(t),e!==null)for(o=t.onRecoverableError,w=0;w<e.length;w++)D=e[w],o(D.value,{componentStack:D.stack});return(Or&3)!==0&&xi(),D=t.pendingLanes,(r&4194218)!==0&&(D&42)!==0?t===xc?jr++:(jr=0,xc=t):jr=0,Br(0),null}function $m(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,pr(e)))}function xi(){if(Ba!==null){var t=Ba,e=yc;yc=0;var a=th(Or),r=X.T,o=K.p;try{if(K.p=32>a?32:a,X.T=null,Ba===null)var c=!1;else{a=bc,bc=null;var g=Ba,y=Or;if(Ba=null,Or=0,(Vt&6)!==0)throw Error(l(331));var w=Vt;if(Vt|=4,zm(g.current),Cm(g,g.current,y,a),Vt=w,Br(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Zi,g)}catch{}c=!0}return c}finally{K.p=o,X.T=r,$m(t,e)}}return!1}function Xm(t,e,a){e=Ne(a,e),e=qu(t.stateNode,e,2),t=Kn(t,e,2),t!==null&&(Fi(t,2),ln(t))}function Mt(t,e,a){if(t.tag===3)Xm(t,t,a);else for(;e!==null;){if(e.tag===3){Xm(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ea===null||!ea.has(r))){t=Ne(a,t),a=K0(2),r=Kn(e,a,2),r!==null&&(F0(a,r,e,t),Fi(r,2),ln(r));break}}e=e.return}}function Ac(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new B5;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(a)||(mc=!0,o.add(a),t=U5.bind(null,t,e,a),e.then(t,t))}function U5(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(bt&a)===a&&(kt===4||kt===3&&(bt&62914560)===bt&&300>en()-vc?(Vt&2)===0&&yi(t,0):pc|=a,vi===bt&&(vi=0)),ln(t)}function Qm(t,e){e===0&&(e=Jd()),t=Pn(t,e),t!==null&&(Fi(t,e),ln(t))}function H5(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Qm(t,a)}function P5(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),Qm(t,a)}function q5(t,e){return Go(t,e)}var Dl=null,Si=null,Cc=!1,Ol=!1,Mc=!1,Va=0;function ln(t){t!==Si&&t.next===null&&(Si===null?Dl=Si=t:Si=Si.next=t),Ol=!0,Cc||(Cc=!0,Y5(G5))}function Br(t,e){if(!Mc&&Ol){Mc=!0;do for(var a=!1,r=Dl;r!==null;){if(t!==0){var o=r.pendingLanes;if(o===0)var c=0;else{var g=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-Ae(42|t)+1)-1,c&=o&~(g&~y),c=c&201326677?c&201326677|1:c?c|2:0}c!==0&&(a=!0,Fm(r,c))}else c=bt,c=Hs(r,r===zt?c:0),(c&3)===0||Ki(r,c)||(a=!0,Fm(r,c));r=r.next}while(a);Mc=!1}}function G5(){Ol=Cc=!1;var t=0;Va!==0&&(W5()&&(t=Va),Va=0);for(var e=en(),a=null,r=Dl;r!==null;){var o=r.next,c=Zm(r,e);c===0?(r.next=null,a===null?Dl=o:a.next=o,o===null&&(Si=a)):(a=r,(t!==0||(c&3)!==0)&&(Ol=!0)),r=o}Br(t)}function Zm(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Ae(c),y=1<<g,w=o[g];w===-1?((y&a)===0||(y&r)!==0)&&(o[g]=p2(y,e)):w<=e&&(t.expiredLanes|=y),c&=~y}if(e=zt,a=bt,a=Hs(t,t===e?a:0),r=t.callbackNode,a===0||t===e&&Dt===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Yo(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ki(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&Yo(r),th(a)){case 2:case 8:a=Zd;break;case 32:a=Ls;break;case 268435456:a=Kd;break;default:a=Ls}return r=Km.bind(null,t),a=Go(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&Yo(r),t.callbackPriority=2,t.callbackNode=null,2}function Km(t,e){var a=t.callbackNode;if(xi()&&t.callbackNode!==a)return null;var r=bt;return r=Hs(t,t===zt?r:0),r===0?null:(Nm(t,r,e),Zm(t,en()),t.callbackNode!=null&&t.callbackNode===a?Km.bind(null,t):null)}function Fm(t,e){if(xi())return null;Nm(t,e,!0)}function Y5(t){tb(function(){(Vt&6)!==0?Go(Qd,t):t()})}function Rc(){return Va===0&&(Va=Fd()),Va}function Jm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$s(""+t)}function Wm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function $5(t,e,a,r,o){if(e==="submit"&&a&&a.stateNode===o){var c=Jm((o[xe]||null).action),g=r.submitter;g&&(e=(e=g[xe]||null)?Jm(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var y=new Ks("action","action",null,r,o);t.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var w=g?Wm(o,g):new FormData(o);Lu(a,{pending:!0,data:w,method:o.method,action:c},null,w)}}else typeof c=="function"&&(y.preventDefault(),w=g?Wm(o,g):new FormData(o),Lu(a,{pending:!0,data:w,method:o.method,action:c},c,w))},currentTarget:o}]})}}for(var zc=0;zc<Yh.length;zc++){var Dc=Yh[zc],X5=Dc.toLowerCase(),Q5=Dc[0].toUpperCase()+Dc.slice(1);Ke(X5,"on"+Q5)}Ke(Uh,"onAnimationEnd"),Ke(Hh,"onAnimationIteration"),Ke(Ph,"onAnimationStart"),Ke("dblclick","onDoubleClick"),Ke("focusin","onFocus"),Ke("focusout","onBlur"),Ke(c5,"onTransitionRun"),Ke(f5,"onTransitionStart"),Ke(d5,"onTransitionCancel"),Ke(qh,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vr));function Im(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],o=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var y=r[g],w=y.instance,D=y.currentTarget;if(y=y.listener,w!==c&&o.isPropagationStopped())break t;c=y,o.currentTarget=D;try{c(o)}catch(H){vl(H)}o.currentTarget=null,c=w}else for(g=0;g<r.length;g++){if(y=r[g],w=y.instance,D=y.currentTarget,y=y.listener,w!==c&&o.isPropagationStopped())break t;c=y,o.currentTarget=D;try{c(o)}catch(H){vl(H)}o.currentTarget=null,c=w}}}}function yt(t,e){var a=e[Xo];a===void 0&&(a=e[Xo]=new Set);var r=t+"__bubble";a.has(r)||(tp(e,t,2,!1),a.add(r))}function Oc(t,e,a){var r=0;e&&(r|=4),tp(a,t,r,e)}var jl="_reactListening"+Math.random().toString(36).slice(2);function jc(t){if(!t[jl]){t[jl]=!0,ah.forEach(function(a){a!=="selectionchange"&&(Z5.has(a)||Oc(a,!1,t),Oc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jl]||(e[jl]=!0,Oc("selectionchange",!1,e))}}function tp(t,e,a,r){switch(Ep(e)){case 2:var o=xb;break;case 8:o=Sb;break;default:o=$c}a=o.bind(null,e,a,t),o=void 0,!tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,a,{capture:!0,passive:o}):t.addEventListener(e,a,!0):o!==void 0?t.addEventListener(e,a,{passive:o}):t.addEventListener(e,a,!1)}function Bc(t,e,a,r,o){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var y=r.stateNode.containerInfo;if(y===o||y.nodeType===8&&y.parentNode===o)break;if(g===4)for(g=r.return;g!==null;){var w=g.tag;if((w===3||w===4)&&(w=g.stateNode.containerInfo,w===o||w.nodeType===8&&w.parentNode===o))return;g=g.return}for(;y!==null;){if(g=ma(y),g===null)return;if(w=g.tag,w===5||w===6||w===26||w===27){r=c=g;continue t}y=y.parentNode}}r=r.return}ph(function(){var D=c,H=Wo(a),q=[];t:{var _=Gh.get(t);if(_!==void 0){var U=Ks,et=t;switch(t){case"keypress":if(Qs(a)===0)break t;case"keydown":case"keyup":U=P2;break;case"focusin":et="focus",U=iu;break;case"focusout":et="blur",U=iu;break;case"beforeblur":case"afterblur":U=iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=z2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Y2;break;case Uh:case Hh:case Ph:U=j2;break;case qh:U=X2;break;case"scroll":case"scrollend":U=M2;break;case"wheel":U=Z2;break;case"copy":case"cut":case"paste":U=V2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=xh;break;case"toggle":case"beforetoggle":U=F2}var ot=(e&4)!==0,Ut=!ot&&(t==="scroll"||t==="scrollend"),j=ot?_!==null?_+"Capture":null:_;ot=[];for(var z=D,V;z!==null;){var P=z;if(V=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||V===null||j===null||(P=Ii(z,j),P!=null&&ot.push(_r(z,P,V))),Ut)break;z=z.return}0<ot.length&&(_=new U(_,et,null,a,H),q.push({event:_,listeners:ot}))}}if((e&7)===0){t:{if(_=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",_&&a!==Jo&&(et=a.relatedTarget||a.fromElement)&&(ma(et)||et[$a]))break t;if((U||_)&&(_=H.window===H?H:(_=H.ownerDocument)?_.defaultView||_.parentWindow:window,U?(et=a.relatedTarget||a.toElement,U=D,et=et?ma(et):null,et!==null&&(Ut=I(et),ot=et.tag,et!==Ut||ot!==5&&ot!==27&&ot!==6)&&(et=null)):(U=null,et=D),U!==et)){if(ot=yh,P="onMouseLeave",j="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(ot=xh,P="onPointerLeave",j="onPointerEnter",z="pointer"),Ut=U==null?_:Wi(U),V=et==null?_:Wi(et),_=new ot(P,z+"leave",U,a,H),_.target=Ut,_.relatedTarget=V,P=null,ma(H)===D&&(ot=new ot(j,z+"enter",et,a,H),ot.target=V,ot.relatedTarget=Ut,P=ot),Ut=P,U&&et)e:{for(ot=U,j=et,z=0,V=ot;V;V=wi(V))z++;for(V=0,P=j;P;P=wi(P))V++;for(;0<z-V;)ot=wi(ot),z--;for(;0<V-z;)j=wi(j),V--;for(;z--;){if(ot===j||j!==null&&ot===j.alternate)break e;ot=wi(ot),j=wi(j)}ot=null}else ot=null;U!==null&&ep(q,_,U,ot,!1),et!==null&&Ut!==null&&ep(q,Ut,et,ot,!0)}}t:{if(_=D?Wi(D):window,U=_.nodeName&&_.nodeName.toLowerCase(),U==="select"||U==="input"&&_.type==="file")var W=Rh;else if(Ch(_))if(zh)W=s5;else{W=i5;var mt=a5}else U=_.nodeName,!U||U.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?D&&Fo(D.elementType)&&(W=Rh):W=r5;if(W&&(W=W(t,D))){Mh(q,W,a,H);break t}mt&&mt(t,_,D),t==="focusout"&&D&&_.type==="number"&&D.memoizedProps.value!=null&&Ko(_,"number",_.value)}switch(mt=D?Wi(D):window,t){case"focusin":(Ch(mt)||mt.contentEditable==="true")&&(ti=mt,cu=D,lr=null);break;case"focusout":lr=cu=ti=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Lh(q,a,H);break;case"selectionchange":if(u5)break;case"keydown":case"keyup":Lh(q,a,H)}var at;if(su)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Ia?Th(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Sh&&a.locale!=="ko"&&(Ia||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ia&&(at=gh()):(Hn=H,eu="value"in Hn?Hn.value:Hn.textContent,Ia=!0)),mt=Bl(D,rt),0<mt.length&&(rt=new bh(rt,t,null,a,H),q.push({event:rt,listeners:mt}),at?rt.data=at:(at=Ah(a),at!==null&&(rt.data=at)))),(at=W2?I2(t,a):t5(t,a))&&(rt=Bl(D,"onBeforeInput"),0<rt.length&&(mt=new bh("onBeforeInput","beforeinput",null,a,H),q.push({event:mt,listeners:rt}),mt.data=at)),$5(q,t,D,a,H)}Im(q,e)})}function _r(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Bl(t,e){for(var a=e+"Capture",r=[];t!==null;){var o=t,c=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Ii(t,a),o!=null&&r.unshift(_r(t,o,c)),o=Ii(t,e),o!=null&&r.push(_r(t,o,c))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ep(t,e,a,r,o){for(var c=e._reactName,g=[];a!==null&&a!==r;){var y=a,w=y.alternate,D=y.stateNode;if(y=y.tag,w!==null&&w===r)break;y!==5&&y!==26&&y!==27||D===null||(w=D,o?(D=Ii(a,c),D!=null&&g.unshift(_r(a,D,w))):o||(D=Ii(a,c),D!=null&&g.push(_r(a,D,w)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var K5=/\r\n?/g,F5=/\u0000|\uFFFD/g;function np(t){return(typeof t=="string"?t:""+t).replace(K5,`
`).replace(F5,"")}function ap(t,e){return e=np(e),np(t)===e}function Vl(){}function Ct(t,e,a,r,o,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Fa(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Fa(t,""+r);break;case"className":qs(t,"class",r);break;case"tabIndex":qs(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":qs(t,a,r);break;case"style":hh(t,r,c);break;case"data":if(e!=="object"){qs(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$s(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Ct(t,e,"name",o.name,o,null),Ct(t,e,"formEncType",o.formEncType,o,null),Ct(t,e,"formMethod",o.formMethod,o,null),Ct(t,e,"formTarget",o.formTarget,o,null)):(Ct(t,e,"encType",o.encType,o,null),Ct(t,e,"method",o.method,o,null),Ct(t,e,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$s(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Vl);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=$s(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ps(t,"popover",r);break;case"xlinkActuate":mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":mn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":mn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":mn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":mn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ps(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=A2.get(a)||a,Ps(t,a,r))}}function Vc(t,e,a,r,o,c){switch(a){case"style":hh(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Fa(t,r):(typeof r=="number"||typeof r=="bigint")&&Fa(t,""+r);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ih.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),e=a.slice(2,o?a.length-7:void 0),c=t[xe]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,o),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,o);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ps(t,a,r)}}}function le(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var r=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ct(t,e,c,g,a,null)}}o&&Ct(t,e,"srcSet",a.srcSet,a,null),r&&Ct(t,e,"src",a.src,a,null);return;case"input":yt("invalid",t);var y=c=g=o=null,w=null,D=null;for(r in a)if(a.hasOwnProperty(r)){var H=a[r];if(H!=null)switch(r){case"name":o=H;break;case"type":g=H;break;case"checked":w=H;break;case"defaultChecked":D=H;break;case"value":c=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,e));break;default:Ct(t,e,r,H,a,null)}}uh(t,c,y,w,D,g,o,!1),Gs(t);return;case"select":yt("invalid",t),r=g=c=null;for(o in a)if(a.hasOwnProperty(o)&&(y=a[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":g=y;break;case"multiple":r=y;default:Ct(t,e,o,y,a,null)}e=c,a=g,t.multiple=!!r,e!=null?Ka(t,!!r,e,!1):a!=null&&Ka(t,!!r,a,!0);return;case"textarea":yt("invalid",t),c=o=r=null;for(g in a)if(a.hasOwnProperty(g)&&(y=a[g],y!=null))switch(g){case"value":r=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Ct(t,e,g,y,a,null)}fh(t,r,o,c),Gs(t);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(r=a[w],r!=null))switch(w){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ct(t,e,w,r,a,null)}return;case"dialog":yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(r=0;r<Vr.length;r++)yt(Vr[r],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(r=a[D],r!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ct(t,e,D,r,a,null)}return;default:if(Fo(e)){for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!==void 0&&Vc(t,e,H,r,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(r=a[y],r!=null&&Ct(t,e,y,r,a,null))}function J5(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,g=null,y=null,w=null,D=null,H=null;for(U in a){var q=a[U];if(a.hasOwnProperty(U)&&q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":w=q;default:r.hasOwnProperty(U)||Ct(t,e,U,null,r,q)}}for(var _ in r){var U=r[_];if(q=a[_],r.hasOwnProperty(_)&&(U!=null||q!=null))switch(_){case"type":c=U;break;case"name":o=U;break;case"checked":D=U;break;case"defaultChecked":H=U;break;case"value":g=U;break;case"defaultValue":y=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,e));break;default:U!==q&&Ct(t,e,_,U,r,q)}}Zo(t,g,y,w,D,H,c,o);return;case"select":U=g=y=_=null;for(c in a)if(w=a[c],a.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":U=w;default:r.hasOwnProperty(c)||Ct(t,e,c,null,r,w)}for(o in r)if(c=r[o],w=a[o],r.hasOwnProperty(o)&&(c!=null||w!=null))switch(o){case"value":_=c;break;case"defaultValue":y=c;break;case"multiple":g=c;default:c!==w&&Ct(t,e,o,c,r,w)}e=y,a=g,r=U,_!=null?Ka(t,!!a,_,!1):!!r!=!!a&&(e!=null?Ka(t,!!a,e,!0):Ka(t,!!a,a?[]:"",!1));return;case"textarea":U=_=null;for(y in a)if(o=a[y],a.hasOwnProperty(y)&&o!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ct(t,e,y,null,r,o)}for(g in r)if(o=r[g],c=a[g],r.hasOwnProperty(g)&&(o!=null||c!=null))switch(g){case"value":_=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&Ct(t,e,g,o,r,c)}ch(t,_,U);return;case"option":for(var et in a)if(_=a[et],a.hasOwnProperty(et)&&_!=null&&!r.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Ct(t,e,et,null,r,_)}for(w in r)if(_=r[w],U=a[w],r.hasOwnProperty(w)&&_!==U&&(_!=null||U!=null))switch(w){case"selected":t.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Ct(t,e,w,_,r,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)_=a[ot],a.hasOwnProperty(ot)&&_!=null&&!r.hasOwnProperty(ot)&&Ct(t,e,ot,null,r,_);for(D in r)if(_=r[D],U=a[D],r.hasOwnProperty(D)&&_!==U&&(_!=null||U!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(137,e));break;default:Ct(t,e,D,_,r,U)}return;default:if(Fo(e)){for(var Ut in a)_=a[Ut],a.hasOwnProperty(Ut)&&_!==void 0&&!r.hasOwnProperty(Ut)&&Vc(t,e,Ut,void 0,r,_);for(H in r)_=r[H],U=a[H],!r.hasOwnProperty(H)||_===U||_===void 0&&U===void 0||Vc(t,e,H,_,r,U);return}}for(var j in a)_=a[j],a.hasOwnProperty(j)&&_!=null&&!r.hasOwnProperty(j)&&Ct(t,e,j,null,r,_);for(q in r)_=r[q],U=a[q],!r.hasOwnProperty(q)||_===U||_==null&&U==null||Ct(t,e,q,_,r,U)}var _c=null,Nc=null;function _l(t){return t.nodeType===9?t:t.ownerDocument}function ip(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=null;function W5(){var t=window.event;return t&&t.type==="popstate"?t===kc?!1:(kc=t,!0):(kc=null,!1)}var sp=typeof setTimeout=="function"?setTimeout:void 0,I5=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,tb=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(t){return lp.resolve(null).then(t).catch(eb)}:sp;function eb(t){setTimeout(function(){throw t})}function Uc(t,e){var a=e,r=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){t.removeChild(o),Gr(e);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Gr(e)}function Hc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hc(a),Qo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nb(t,e,a,r){for(;t.nodeType===1;){var o=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ji])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==o.rel||t.getAttribute("href")!==(o.href==null?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=We(t.nextSibling),t===null)break}return null}function ab(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=We(t.nextSibling),t===null))return null;return t}function We(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function up(t,e,a){switch(e=_l(a),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}var Ye=new Map,cp=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var zn=K.d;K.d={f:ib,r:rb,D:sb,C:lb,L:ob,m:ub,X:fb,S:cb,M:db};function ib(){var t=zn.f(),e=Rl();return t||e}function rb(t){var e=Xa(t);e!==null&&e.tag===5&&e.type==="form"?L0(e):zn.r(t)}var Ei=typeof document>"u"?null:document;function fp(t,e,a){var r=Ei;if(r&&typeof e=="string"&&e){var o=Ve(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),cp.has(o)||(cp.add(o),t={rel:t,crossOrigin:a,href:e},r.querySelector(o)===null&&(e=r.createElement("link"),le(e,"link",t),It(e),r.head.appendChild(e)))}}function sb(t){zn.D(t),fp("dns-prefetch",t,null)}function lb(t,e){zn.C(t,e),fp("preconnect",t,e)}function ob(t,e,a){zn.L(t,e,a);var r=Ei;if(r&&t&&e){var o='link[rel="preload"][as="'+Ve(e)+'"]';e==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Ve(a.imageSizes)+'"]')):o+='[href="'+Ve(t)+'"]';var c=o;switch(e){case"style":c=Ti(t);break;case"script":c=Ai(t)}Ye.has(c)||(t=tt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ye.set(c,t),r.querySelector(o)!==null||e==="style"&&r.querySelector(Nr(c))||e==="script"&&r.querySelector(Lr(c))||(e=r.createElement("link"),le(e,"link",t),It(e),r.head.appendChild(e)))}}function ub(t,e){zn.m(t,e);var a=Ei;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+Ve(r)+'"][href="'+Ve(t)+'"]',c=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ai(t)}if(!Ye.has(c)&&(t=tt({rel:"modulepreload",href:t},e),Ye.set(c,t),a.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lr(c)))return}r=a.createElement("link"),le(r,"link",t),It(r),a.head.appendChild(r)}}}function cb(t,e,a){zn.S(t,e,a);var r=Ei;if(r&&t){var o=Qa(r).hoistableStyles,c=Ti(t);e=e||"default";var g=o.get(c);if(!g){var y={loading:0,preload:null};if(g=r.querySelector(Nr(c)))y.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ye.get(c))&&Pc(t,a);var w=g=r.createElement("link");It(w),le(w,"link",t),w._p=new Promise(function(D,H){w.onload=D,w.onerror=H}),w.addEventListener("load",function(){y.loading|=1}),w.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Ll(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:y},o.set(c,g)}}}function fb(t,e){zn.X(t,e);var a=Ei;if(a&&t){var r=Qa(a).hoistableScripts,o=Ai(t),c=r.get(o);c||(c=a.querySelector(Lr(o)),c||(t=tt({src:t,async:!0},e),(e=Ye.get(o))&&qc(t,e),c=a.createElement("script"),It(c),le(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function db(t,e){zn.M(t,e);var a=Ei;if(a&&t){var r=Qa(a).hoistableScripts,o=Ai(t),c=r.get(o);c||(c=a.querySelector(Lr(o)),c||(t=tt({src:t,async:!0,type:"module"},e),(e=Ye.get(o))&&qc(t,e),c=a.createElement("script"),It(c),le(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function dp(t,e,a,r){var o=(o=Ln.current)?Nl(o):null;if(!o)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Ti(a.href),a=Qa(o).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ti(a.href);var c=Qa(o).hoistableStyles,g=c.get(t);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=o.querySelector(Nr(t)))&&!c._p&&(g.instance=c,g.state.loading=5),Ye.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ye.set(t,a),c||hb(o,t,a,g.state))),e&&r===null)throw Error(l(528,""));return g}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ai(a),a=Qa(o).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function Ti(t){return'href="'+Ve(t)+'"'}function Nr(t){return'link[rel="stylesheet"]['+t+"]"}function hp(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function hb(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),le(e,"link",a),It(e),t.head.appendChild(e))}function Ai(t){return'[src="'+Ve(t)+'"]'}function Lr(t){return"script[async]"+t}function mp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(r)return e.instance=r,It(r),r;var o=tt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),It(r),le(r,"style",o),Ll(r,a.precedence,t),e.instance=r;case"stylesheet":o=Ti(a.href);var c=t.querySelector(Nr(o));if(c)return e.state.loading|=4,e.instance=c,It(c),c;r=hp(a),(o=Ye.get(o))&&Pc(r,o),c=(t.ownerDocument||t).createElement("link"),It(c);var g=c;return g._p=new Promise(function(y,w){g.onload=y,g.onerror=w}),le(c,"link",r),e.state.loading|=4,Ll(c,a.precedence,t),e.instance=c;case"script":return c=Ai(a.src),(o=t.querySelector(Lr(c)))?(e.instance=o,It(o),o):(r=a,(o=Ye.get(c))&&(r=tt({},a),qc(r,o)),t=t.ownerDocument||t,o=t.createElement("script"),It(o),le(o,"link",r),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Ll(r,a.precedence,t));return e.instance}function Ll(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,c=o,g=0;g<r.length;g++){var y=r[g];if(y.dataset.precedence===e)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Pc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function qc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var kl=null;function pp(t,e,a){if(kl===null){var r=new Map,o=kl=new Map;o.set(a,r)}else o=kl,r=o.get(a),r||(r=new Map,o.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),o=0;o<a.length;o++){var c=a[o];if(!(c[Ji]||c[ce]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var y=r.get(g);y?y.push(c):r.set(g,[c])}}return r}function gp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function mb(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function vp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var kr=null;function pb(){}function gb(t,e,a){if(kr===null)throw Error(l(475));var r=kr;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=Ti(a.href),c=t.querySelector(Nr(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Ul.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,It(c);return}c=t.ownerDocument||t,a=hp(a),(o=Ye.get(o))&&Pc(a,o),c=c.createElement("link"),It(c);var g=c;g._p=new Promise(function(y,w){g.onload=y,g.onerror=w}),le(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Ul.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function vb(){if(kr===null)throw Error(l(475));var t=kr;return t.stylesheets&&t.count===0&&Gc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Gc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Hl=null;function Gc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Hl=new Map,e.forEach(yb,t),Hl=null,Ul.call(t))}function yb(t,e){if(!(e.state.loading&4)){var a=Hl.get(t);if(a)var r=a.get(null);else{a=new Map,Hl.set(t,a);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var g=o[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}o=e.instance,g=o.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,o),a.set(g,o),this.count++,r=Ul.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),c?c.parentNode.insertBefore(o,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var Ur={$$typeof:E,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function bb(t,e,a,r,o,c,g,y){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.hiddenUpdates=$o(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function yp(t,e,a,r,o,c,g,y,w,D,H,q){return t=new bb(t,e,a,g,y,w,D,q),e=1,c===!0&&(e|=24),c=qe(3,null,null,e),t.current=c,c.stateNode=t,e=Su(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},ec(c),t}function bp(t){return t?(t=ai,t):ai}function xp(t,e,a,r,o,c){o=bp(o),r.context===null?r.context=o:r.pendingContext=o,r=Zn(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Kn(t,r,e),a!==null&&(ve(a,t,e),wr(a,t,e))}function Sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Yc(t,e){Sp(t,e),(t=t.alternate)&&Sp(t,e)}function wp(t){if(t.tag===13){var e=Pn(t,67108864);e!==null&&ve(e,t,67108864),Yc(t,67108864)}}var Pl=!0;function xb(t,e,a,r){var o=X.T;X.T=null;var c=K.p;try{K.p=2,$c(t,e,a,r)}finally{K.p=c,X.T=o}}function Sb(t,e,a,r){var o=X.T;X.T=null;var c=K.p;try{K.p=8,$c(t,e,a,r)}finally{K.p=c,X.T=o}}function $c(t,e,a,r){if(Pl){var o=Xc(r);if(o===null)Bc(t,e,r,ql,a),Tp(t,r);else if(Eb(o,t,e,a,r))r.stopPropagation();else if(Tp(t,r),e&4&&-1<wb.indexOf(t)){for(;o!==null;){var c=Xa(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ha(c.pendingLanes);if(g!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;g;){var w=1<<31-Ae(g);y.entanglements[1]|=w,g&=~w}ln(c),(Vt&6)===0&&(Al=en()+500,Br(0))}}break;case 13:y=Pn(c,2),y!==null&&ve(y,c,2),Rl(),Yc(c,2)}if(c=Xc(r),c===null&&Bc(t,e,r,ql,a),c===o)break;o=c}o!==null&&r.stopPropagation()}else Bc(t,e,r,null,a)}}function Xc(t){return t=Wo(t),Qc(t)}var ql=null;function Qc(t){if(ql=null,t=ma(t),t!==null){var e=I(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=ct(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ql=t,null}function Ep(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(l2()){case Qd:return 2;case Zd:return 8;case Ls:case o2:return 32;case Kd:return 268435456;default:return 32}default:return 32}}var Zc=!1,na=null,aa=null,ia=null,Hr=new Map,Pr=new Map,ra=[],wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tp(t,e){switch(t){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":Hr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(e.pointerId)}}function qr(t,e,a,r,o,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[o]},e!==null&&(e=Xa(e),e!==null&&wp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function Eb(t,e,a,r,o){switch(e){case"focusin":return na=qr(na,t,e,a,r,o),!0;case"dragenter":return aa=qr(aa,t,e,a,r,o),!0;case"mouseover":return ia=qr(ia,t,e,a,r,o),!0;case"pointerover":var c=o.pointerId;return Hr.set(c,qr(Hr.get(c)||null,t,e,a,r,o)),!0;case"gotpointercapture":return c=o.pointerId,Pr.set(c,qr(Pr.get(c)||null,t,e,a,r,o)),!0}return!1}function Ap(t){var e=ma(t.target);if(e!==null){var a=I(e);if(a!==null){if(e=a.tag,e===13){if(e=ct(a),e!==null){t.blockedOn=e,v2(t.priority,function(){if(a.tag===13){var r=De(),o=Pn(a,r);o!==null&&ve(o,a,r),Yc(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Xc(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Jo=r,a.target.dispatchEvent(r),Jo=null}else return e=Xa(a),e!==null&&wp(e),t.blockedOn=a,!1;e.shift()}return!0}function Cp(t,e,a){Gl(t)&&a.delete(e)}function Tb(){Zc=!1,na!==null&&Gl(na)&&(na=null),aa!==null&&Gl(aa)&&(aa=null),ia!==null&&Gl(ia)&&(ia=null),Hr.forEach(Cp),Pr.forEach(Cp)}function Yl(t,e){t.blockedOn===e&&(t.blockedOn=null,Zc||(Zc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Tb)))}var $l=null;function Mp(t){$l!==t&&($l=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){$l===t&&($l=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],o=t[e+2];if(typeof r!="function"){if(Qc(r||a)===null)continue;break}var c=Xa(a);c!==null&&(t.splice(e,3),e-=3,Lu(c,{pending:!0,data:o,method:a.method,action:r},r,o))}}))}function Gr(t){function e(w){return Yl(w,t)}na!==null&&Yl(na,t),aa!==null&&Yl(aa,t),ia!==null&&Yl(ia,t),Hr.forEach(e),Pr.forEach(e);for(var a=0;a<ra.length;a++){var r=ra[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ra.length&&(a=ra[0],a.blockedOn===null);)Ap(a),a.blockedOn===null&&ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var o=a[r],c=a[r+1],g=o[xe]||null;if(typeof c=="function")g||Mp(a);else if(g){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,g=c[xe]||null)y=g.formAction;else if(Qc(o)!==null)continue}else y=g.action;typeof y=="function"?a[r+1]=y:(a.splice(r,3),r-=3),Mp(a)}}}function Kc(t){this._internalRoot=t}Xl.prototype.render=Kc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var a=e.current,r=De();xp(a,r,t,e,null,null)},Xl.prototype.unmount=Kc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&xi(),xp(t.current,2,null,t,null,null),Rl(),e[$a]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=eh();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ra.length&&e!==0&&e<ra[a].priority;a++);ra.splice(a,0,t),a===0&&Ap(t)}};var Rp=i.version;if(Rp!=="19.0.0")throw Error(l(527,Rp,"19.0.0"));K.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=G(e),t=t!==null?nt(t):null,t=t===null?null:t.stateNode,t};var Ab={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:X,findFiberByHostInstance:ma,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Zi=Ql.inject(Ab),Te=Ql}catch{}}return $r.createRoot=function(t,e){if(!u(t))throw Error(l(299));var a=!1,r="",o=$0,c=X0,g=Q0,y=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=yp(t,1,!1,null,null,a,r,o,c,g,y,null),t[$a]=e.current,jc(t.nodeType===8?t.parentNode:t),new Kc(e)},$r.hydrateRoot=function(t,e,a){if(!u(t))throw Error(l(299));var r=!1,o="",c=$0,g=X0,y=Q0,w=null,D=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(D=a.formState)),e=yp(t,1,!0,e,a??null,r,o,c,g,y,w,D),e.context=bp(null),a=e.current,r=De(),o=Zn(r),o.callback=null,Kn(a,o,r),e.current.lanes=r,Fi(e,r),ln(e),t[$a]=e.current,jc(t),new Xl(e)},$r.version="19.0.0",$r}var kp;function Nb(){if(kp)return Wc.exports;kp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Wc.exports=_b(),Wc.exports}var Lb=Nb(),Xr={},Up;function kb(){if(Up)return Xr;Up=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.parse=d,Xr.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,E){const S=new f,C=x.length;if(C<2)return S;const O=(E==null?void 0:E.decode)||v;let R=0;do{const L=x.indexOf("=",R);if(L===-1)break;const N=x.indexOf(";",R),$=N===-1?C:N;if(L>$){R=x.lastIndexOf(";",L-1)+1;continue}const k=m(x,R,L),Y=h(x,L,k),Q=x.slice(k,Y);if(S[Q]===void 0){let F=m(x,L+1,$),X=h(x,$,F);const tt=O(x.slice(F,X));S[Q]=tt}R=$+1}while(R<C);return S}function m(x,E,S){do{const C=x.charCodeAt(E);if(C!==32&&C!==9)return E}while(++E<S);return S}function h(x,E,S){for(;E>S;){const C=x.charCodeAt(--E);if(C!==32&&C!==9)return E+1}return S}function p(x,E,S){const C=(S==null?void 0:S.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const O=C(E);if(!i.test(O))throw new TypeError(`argument val is invalid: ${E}`);let R=x+"="+O;if(!S)return R;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);R+="; Max-Age="+S.maxAge}if(S.domain){if(!s.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);R+="; Domain="+S.domain}if(S.path){if(!l.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);R+="; Path="+S.path}if(S.expires){if(!b(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);R+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(R+="; HttpOnly"),S.secure&&(R+="; Secure"),S.partitioned&&(R+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":R+="; Priority=Low";break;case"medium":R+="; Priority=Medium";break;case"high":R+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":R+="; SameSite=Strict";break;case"lax":R+="; SameSite=Lax";break;case"none":R+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return R}function v(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function b(x){return u.call(x)==="[object Date]"}return Xr}kb();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hp="popstate";function Ub(n={}){function i(l,u){let{pathname:f,search:d,hash:m}=l.location;return Ef("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function s(l,u){return typeof u=="string"?u:ss(u)}return Pb(i,s,null,n)}function Nt(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function fn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Hb(){return Math.random().toString(36).substring(2,10)}function Pp(n,i){return{usr:n.state,key:n.key,idx:i}}function Ef(n,i,s=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?qi(i):i,state:s,key:i&&i.key||l||Hb()}}function ss({pathname:n="/",search:i="",hash:s=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function qi(n){let i={};if(n){let s=n.indexOf("#");s>=0&&(i.hash=n.substring(s),n=n.substring(0,s));let l=n.indexOf("?");l>=0&&(i.search=n.substring(l),n=n.substring(0,l)),n&&(i.pathname=n)}return i}function Pb(n,i,s,l={}){let{window:u=document.defaultView,v5Compat:f=!1}=l,d=u.history,m="POP",h=null,p=v();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function v(){return(d.state||{idx:null}).idx}function b(){m="POP";let O=v(),R=O==null?null:O-p;p=O,h&&h({action:m,location:C.location,delta:R})}function x(O,R){m="PUSH";let L=Ef(C.location,O,R);p=v()+1;let N=Pp(L,p),$=C.createHref(L);try{d.pushState(N,"",$)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;u.location.assign($)}f&&h&&h({action:m,location:C.location,delta:1})}function E(O,R){m="REPLACE";let L=Ef(C.location,O,R);p=v();let N=Pp(L,p),$=C.createHref(L);d.replaceState(N,"",$),f&&h&&h({action:m,location:C.location,delta:0})}function S(O){let R=u.location.origin!=="null"?u.location.origin:u.location.href,L=typeof O=="string"?O:ss(O);return L=L.replace(/ $/,"%20"),Nt(R,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,R)}let C={get action(){return m},get location(){return n(u,d)},listen(O){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Hp,b),h=O,()=>{u.removeEventListener(Hp,b),h=null}},createHref(O){return i(u,O)},createURL:S,encodeLocation(O){let R=S(O);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:x,replace:E,go(O){return d.go(O)}};return C}function V1(n,i,s="/"){return qb(n,i,s,!1)}function qb(n,i,s,l){let u=typeof i=="string"?qi(i):i,f=Vn(u.pathname||"/",s);if(f==null)return null;let d=_1(n);Gb(d);let m=null;for(let h=0;m==null&&h<d.length;++h){let p=tx(f);m=Wb(d[h],p,l)}return m}function _1(n,i=[],s=[],l=""){let u=(f,d,m)=>{let h={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(Nt(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length));let p=On([l,h.relativePath]),v=s.concat(h);f.children&&f.children.length>0&&(Nt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),_1(f.children,i,v,p)),!(f.path==null&&!f.index)&&i.push({path:p,score:Fb(p,f.index),routesMeta:v})};return n.forEach((f,d)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))u(f,d);else for(let h of N1(f.path))u(f,d,h)}),i}function N1(n){let i=n.split("/");if(i.length===0)return[];let[s,...l]=i,u=s.endsWith("?"),f=s.replace(/\?$/,"");if(l.length===0)return u?[f,""]:[f];let d=N1(l.join("/")),m=[];return m.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&m.push(...d),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function Gb(n){n.sort((i,s)=>i.score!==s.score?s.score-i.score:Jb(i.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var Yb=/^:[\w-]+$/,$b=3,Xb=2,Qb=1,Zb=10,Kb=-2,qp=n=>n==="*";function Fb(n,i){let s=n.split("/"),l=s.length;return s.some(qp)&&(l+=Kb),i&&(l+=Xb),s.filter(u=>!qp(u)).reduce((u,f)=>u+(Yb.test(f)?$b:f===""?Qb:Zb),l)}function Jb(n,i){return n.length===i.length&&n.slice(0,-1).every((l,u)=>l===i[u])?n[n.length-1]-i[i.length-1]:0}function Wb(n,i,s=!1){let{routesMeta:l}=n,u={},f="/",d=[];for(let m=0;m<l.length;++m){let h=l[m],p=m===l.length-1,v=f==="/"?i:i.slice(f.length)||"/",b=ho({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},v),x=h.route;if(!b&&p&&s&&!l[l.length-1].route.index&&(b=ho({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!b)return null;Object.assign(u,b.params),d.push({params:u,pathname:On([f,b.pathname]),pathnameBase:ix(On([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=On([f,b.pathnameBase]))}return d}function ho(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,l]=Ib(n.path,n.caseSensitive,n.end),u=i.match(s);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:l.reduce((p,{paramName:v,isOptional:b},x)=>{if(v==="*"){let S=m[x]||"";d=f.slice(0,f.length-S.length).replace(/(.)\/+$/,"$1")}const E=m[x];return b&&!E?p[v]=void 0:p[v]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function Ib(n,i=!1,s=!0){fn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,h)=>(l.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),l]}function tx(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return fn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Vn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,l=n.charAt(s);return l&&l!=="/"?null:n.slice(s)||"/"}function ex(n,i="/"){let{pathname:s,search:l="",hash:u=""}=typeof n=="string"?qi(n):n;return{pathname:s?s.startsWith("/")?s:nx(s,i):i,search:rx(l),hash:sx(u)}}function nx(n,i){let s=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function nf(n,i,s,l){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ax(n){return n.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function L1(n){let i=ax(n);return i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase)}function k1(n,i,s,l=!1){let u;typeof n=="string"?u=qi(n):(u={...n},Nt(!u.pathname||!u.pathname.includes("?"),nf("?","pathname","search",u)),Nt(!u.pathname||!u.pathname.includes("#"),nf("#","pathname","hash",u)),Nt(!u.search||!u.search.includes("#"),nf("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,m;if(d==null)m=s;else{let b=i.length-1;if(!l&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;u.pathname=x.join("/")}m=b>=0?i[b]:"/"}let h=ex(u,m),p=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(p||v)&&(h.pathname+="/"),h}var On=n=>n.join("/").replace(/\/\/+/g,"/"),ix=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),rx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,sx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var U1=["POST","PUT","PATCH","DELETE"];new Set(U1);var ox=["GET",...U1];new Set(ox);var Gi=A.createContext(null);Gi.displayName="DataRouter";var Co=A.createContext(null);Co.displayName="DataRouterState";var H1=A.createContext({isTransitioning:!1});H1.displayName="ViewTransition";var ux=A.createContext(new Map);ux.displayName="Fetchers";var cx=A.createContext(null);cx.displayName="Await";var dn=A.createContext(null);dn.displayName="Navigation";var Ts=A.createContext(null);Ts.displayName="Location";var Nn=A.createContext({outlet:null,matches:[],isDataRoute:!1});Nn.displayName="Route";var td=A.createContext(null);td.displayName="RouteError";function fx(n,{relative:i}={}){Nt(As(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=A.useContext(dn),{hash:u,pathname:f,search:d}=Ms(n,{relative:i}),m=f;return s!=="/"&&(m=f==="/"?s:On([s,f])),l.createHref({pathname:m,search:d,hash:u})}function As(){return A.useContext(Ts)!=null}function fa(){return Nt(As(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ts).location}var P1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q1(n){A.useContext(dn).static||A.useLayoutEffect(n)}function Cs(){let{isDataRoute:n}=A.useContext(Nn);return n?Tx():dx()}function dx(){Nt(As(),"useNavigate() may be used only in the context of a <Router> component.");let n=A.useContext(Gi),{basename:i,navigator:s}=A.useContext(dn),{matches:l}=A.useContext(Nn),{pathname:u}=fa(),f=JSON.stringify(L1(l)),d=A.useRef(!1);return q1(()=>{d.current=!0}),A.useCallback((h,p={})=>{if(fn(d.current,P1),!d.current)return;if(typeof h=="number"){s.go(h);return}let v=k1(h,JSON.parse(f),u,p.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:On([i,v.pathname])),(p.replace?s.replace:s.push)(v,p.state,p)},[i,s,f,u,n])}A.createContext(null);function Ms(n,{relative:i}={}){let{matches:s}=A.useContext(Nn),{pathname:l}=fa(),u=JSON.stringify(L1(s));return A.useMemo(()=>k1(n,JSON.parse(u),l,i==="path"),[n,u,l,i])}function hx(n,i){return G1(n,i)}function G1(n,i,s,l){var L;Nt(As(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=A.useContext(dn),{matches:d}=A.useContext(Nn),m=d[d.length-1],h=m?m.params:{},p=m?m.pathname:"/",v=m?m.pathnameBase:"/",b=m&&m.route;{let N=b&&b.path||"";Y1(p,!b||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=fa(),E;if(i){let N=typeof i=="string"?qi(i):i;Nt(v==="/"||((L=N.pathname)==null?void 0:L.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${N.pathname}" was given in the \`location\` prop.`),E=N}else E=x;let S=E.pathname||"/",C=S;if(v!=="/"){let N=v.replace(/^\//,"").split("/");C="/"+S.replace(/^\//,"").split("/").slice(N.length).join("/")}let O=!f&&s&&s.matches&&s.matches.length>0?s.matches:V1(n,{pathname:C});fn(b||O!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),fn(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=yx(O&&O.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:On([v,u.encodeLocation?u.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?v:On([v,u.encodeLocation?u.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),d,s,l);return i&&R?A.createElement(Ts.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},R):R}function mx(){let n=Ex(),i=lx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:f},"ErrorBoundary")," or"," ",A.createElement("code",{style:f},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},i),s?A.createElement("pre",{style:u},s):null,d)}var px=A.createElement(mx,null),gx=class extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?A.createElement(Nn.Provider,{value:this.props.routeContext},A.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vx({routeContext:n,match:i,children:s}){let l=A.useContext(Gi);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),A.createElement(Nn.Provider,{value:n},s)}function yx(n,i=[],s=null,l=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let u=n,f=s==null?void 0:s.errors;if(f!=null){let h=u.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);Nt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,m=-1;if(s)for(let h=0;h<u.length;h++){let p=u[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(m=h),p.route.id){let{loaderData:v,errors:b}=s,x=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!b||b[p.route.id]===void 0);if(p.route.lazy||x){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((h,p,v)=>{let b,x=!1,E=null,S=null;s&&(b=f&&p.route.id?f[p.route.id]:void 0,E=p.route.errorElement||px,d&&(m<0&&v===0?(Y1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,S=null):m===v&&(x=!0,S=p.route.hydrateFallbackElement||null)));let C=i.concat(u.slice(0,v+1)),O=()=>{let R;return b?R=E:x?R=S:p.route.Component?R=A.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=h,A.createElement(vx,{match:p,routeContext:{outlet:h,matches:C,isDataRoute:s!=null},children:R})};return s&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?A.createElement(gx,{location:s.location,revalidation:s.revalidation,component:E,error:b,children:O(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):O()},null)}function ed(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bx(n){let i=A.useContext(Gi);return Nt(i,ed(n)),i}function xx(n){let i=A.useContext(Co);return Nt(i,ed(n)),i}function Sx(n){let i=A.useContext(Nn);return Nt(i,ed(n)),i}function nd(n){let i=Sx(n),s=i.matches[i.matches.length-1];return Nt(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function wx(){return nd("useRouteId")}function Ex(){var l;let n=A.useContext(td),i=xx("useRouteError"),s=nd("useRouteError");return n!==void 0?n:(l=i.errors)==null?void 0:l[s]}function Tx(){let{router:n}=bx("useNavigate"),i=nd("useNavigate"),s=A.useRef(!1);return q1(()=>{s.current=!0}),A.useCallback(async(u,f={})=>{fn(s.current,P1),s.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var Gp={};function Y1(n,i,s){!i&&!Gp[n]&&(Gp[n]=!0,fn(!1,s))}A.memo(Ax);function Ax({routes:n,future:i,state:s}){return G1(n,void 0,s,i)}function Mi(n){Nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cx({basename:n="/",children:i=null,location:s,navigationType:l="POP",navigator:u,static:f=!1}){Nt(!As(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=A.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof s=="string"&&(s=qi(s));let{pathname:h="/",search:p="",hash:v="",state:b=null,key:x="default"}=s,E=A.useMemo(()=>{let S=Vn(h,d);return S==null?null:{location:{pathname:S,search:p,hash:v,state:b,key:x},navigationType:l}},[d,h,p,v,b,x,l]);return fn(E!=null,`<Router basename="${d}"> is not able to match the URL "${h}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:A.createElement(dn.Provider,{value:m},A.createElement(Ts.Provider,{children:i,value:E}))}function Mx({children:n,location:i}){return hx(Tf(n),i)}function Tf(n,i=[]){let s=[];return A.Children.forEach(n,(l,u)=>{if(!A.isValidElement(l))return;let f=[...i,u];if(l.type===A.Fragment){s.push.apply(s,Tf(l.props.children,f));return}Nt(l.type===Mi,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Nt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=Tf(l.props.children,f)),s.push(d)}),s}var no="get",ao="application/x-www-form-urlencoded";function Mo(n){return n!=null&&typeof n.tagName=="string"}function Rx(n){return Mo(n)&&n.tagName.toLowerCase()==="button"}function zx(n){return Mo(n)&&n.tagName.toLowerCase()==="form"}function Dx(n){return Mo(n)&&n.tagName.toLowerCase()==="input"}function Ox(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function jx(n,i){return n.button===0&&(!i||i==="_self")&&!Ox(n)}var Zl=null;function Bx(){if(Zl===null)try{new FormData(document.createElement("form"),0),Zl=!1}catch{Zl=!0}return Zl}var Vx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function af(n){return n!=null&&!Vx.has(n)?(fn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ao}"`),null):n}function _x(n,i){let s,l,u,f,d;if(zx(n)){let m=n.getAttribute("action");l=m?Vn(m,i):null,s=n.getAttribute("method")||no,u=af(n.getAttribute("enctype"))||ao,f=new FormData(n)}else if(Rx(n)||Dx(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(l=h?Vn(h,i):null,s=n.getAttribute("formmethod")||m.getAttribute("method")||no,u=af(n.getAttribute("formenctype"))||af(m.getAttribute("enctype"))||ao,f=new FormData(m,n),!Bx()){let{name:p,type:v,value:b}=n;if(v==="image"){let x=p?`${p}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else p&&f.append(p,b)}}else{if(Mo(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=no,l=null,u=ao,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:l,method:s.toLowerCase(),encType:u,formData:f,body:d}}function ad(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function Nx(n,i){if(n.id in i)return i[n.id];try{let s=await import(n.module);return i[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function kx(n,i,s){let l=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await Nx(f,s);return d.links?d.links():[]}return[]}));return qx(l.flat(1).filter(Lx).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Yp(n,i,s,l,u,f){let d=(h,p)=>s[p]?h.route.id!==s[p].route.id:!0,m=(h,p)=>{var v;return s[p].pathname!==h.pathname||((v=s[p].route.path)==null?void 0:v.endsWith("*"))&&s[p].params["*"]!==h.params["*"]};return f==="assets"?i.filter((h,p)=>d(h,p)||m(h,p)):f==="data"?i.filter((h,p)=>{var b;let v=l.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(d(h,p)||m(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((b=s[0])==null?void 0:b.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Ux(n,i,{includeHydrateFallback:s}={}){return Hx(n.map(l=>{let u=i.routes[l.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),s&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function Hx(n){return[...new Set(n)]}function Px(n){let i={},s=Object.keys(n).sort();for(let l of s)i[l]=n[l];return i}function qx(n,i){let s=new Set;return new Set(i),n.reduce((l,u)=>{let f=JSON.stringify(Px(u));return s.has(f)||(s.add(f),l.push({key:f,link:u})),l},[])}function Gx(n,i){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname="_root.data":i&&Vn(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.data`:s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function $1(){let n=A.useContext(Gi);return ad(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Yx(){let n=A.useContext(Co);return ad(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var id=A.createContext(void 0);id.displayName="FrameworkContext";function X1(){let n=A.useContext(id);return ad(n,"You must render this element inside a <HydratedRouter> element"),n}function $x(n,i){let s=A.useContext(id),[l,u]=A.useState(!1),[f,d]=A.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:p,onMouseLeave:v,onTouchStart:b}=i,x=A.useRef(null);A.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let C=R=>{R.forEach(L=>{d(L.isIntersecting)})},O=new IntersectionObserver(C,{threshold:.5});return x.current&&O.observe(x.current),()=>{O.disconnect()}}},[n]),A.useEffect(()=>{if(l){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[l]);let E=()=>{u(!0)},S=()=>{u(!1),d(!1)};return s?n!=="intent"?[f,x,{}]:[f,x,{onFocus:Qr(m,E),onBlur:Qr(h,S),onMouseEnter:Qr(p,E),onMouseLeave:Qr(v,S),onTouchStart:Qr(b,E)}]:[!1,x,{}]}function Qr(n,i){return s=>{n&&n(s),s.defaultPrevented||i(s)}}function Xx({page:n,...i}){let{router:s}=$1(),l=A.useMemo(()=>V1(s.routes,n,s.basename),[s.routes,n,s.basename]);return l?A.createElement(Zx,{page:n,matches:l,...i}):null}function Qx(n){let{manifest:i,routeModules:s}=X1(),[l,u]=A.useState([]);return A.useEffect(()=>{let f=!1;return kx(n,i,s).then(d=>{f||u(d)}),()=>{f=!0}},[n,i,s]),l}function Zx({page:n,matches:i,...s}){let l=fa(),{manifest:u,routeModules:f}=X1(),{basename:d}=$1(),{loaderData:m,matches:h}=Yx(),p=A.useMemo(()=>Yp(n,i,h,u,l,"data"),[n,i,h,u,l]),v=A.useMemo(()=>Yp(n,i,h,u,l,"assets"),[n,i,h,u,l]),b=A.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let S=new Set,C=!1;if(i.forEach(R=>{var N;let L=u.routes[R.route.id];!L||!L.hasLoader||(!p.some($=>$.route.id===R.route.id)&&R.route.id in m&&((N=f[R.route.id])!=null&&N.shouldRevalidate)||L.hasClientLoader?C=!0:S.add(R.route.id))}),S.size===0)return[];let O=Gx(n,d);return C&&S.size>0&&O.searchParams.set("_routes",i.filter(R=>S.has(R.route.id)).map(R=>R.route.id).join(",")),[O.pathname+O.search]},[d,m,l,u,p,i,n,f]),x=A.useMemo(()=>Ux(v,u),[v,u]),E=Qx(v);return A.createElement(A.Fragment,null,b.map(S=>A.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...s})),x.map(S=>A.createElement("link",{key:S,rel:"modulepreload",href:S,...s})),E.map(({key:S,link:C})=>A.createElement("link",{key:S,...C})))}function Kx(...n){return i=>{n.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var Q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Q1&&(window.__reactRouterVersion="7.4.0")}catch{}function Fx({basename:n,children:i,window:s}){let l=A.useRef();l.current==null&&(l.current=Ub({window:s,v5Compat:!0}));let u=l.current,[f,d]=A.useState({action:u.action,location:u.location}),m=A.useCallback(h=>{A.startTransition(()=>d(h))},[d]);return A.useLayoutEffect(()=>u.listen(m),[u,m]),A.createElement(Cx,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var Z1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yi=A.forwardRef(function({onClick:i,discover:s="render",prefetch:l="none",relative:u,reloadDocument:f,replace:d,state:m,target:h,to:p,preventScrollReset:v,viewTransition:b,...x},E){let{basename:S}=A.useContext(dn),C=typeof p=="string"&&Z1.test(p),O,R=!1;if(typeof p=="string"&&C&&(O=p,Q1))try{let X=new URL(window.location.href),tt=p.startsWith("//")?new URL(X.protocol+p):new URL(p),Rt=Vn(tt.pathname,S);tt.origin===X.origin&&Rt!=null?p=Rt+tt.search+tt.hash:R=!0}catch{fn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=fx(p,{relative:u}),[N,$,k]=$x(l,x),Y=t4(p,{replace:d,state:m,target:h,preventScrollReset:v,relative:u,viewTransition:b});function Q(X){i&&i(X),X.defaultPrevented||Y(X)}let F=A.createElement("a",{...x,...k,href:O||L,onClick:R||f?i:Q,ref:Kx(E,$),target:h,"data-discover":!C&&s==="render"?"true":void 0});return N&&!C?A.createElement(A.Fragment,null,F,A.createElement(Xx,{page:L})):F});Yi.displayName="Link";var Jx=A.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:l="",end:u=!1,style:f,to:d,viewTransition:m,children:h,...p},v){let b=Ms(d,{relative:p.relative}),x=fa(),E=A.useContext(Co),{navigator:S,basename:C}=A.useContext(dn),O=E!=null&&r4(b)&&m===!0,R=S.encodeLocation?S.encodeLocation(b).pathname:b.pathname,L=x.pathname,N=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;s||(L=L.toLowerCase(),N=N?N.toLowerCase():null,R=R.toLowerCase()),N&&C&&(N=Vn(N,C)||N);const $=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let k=L===R||!u&&L.startsWith(R)&&L.charAt($)==="/",Y=N!=null&&(N===R||!u&&N.startsWith(R)&&N.charAt(R.length)==="/"),Q={isActive:k,isPending:Y,isTransitioning:O},F=k?i:void 0,X;typeof l=="function"?X=l(Q):X=[l,k?"active":null,Y?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let tt=typeof f=="function"?f(Q):f;return A.createElement(Yi,{...p,"aria-current":F,className:X,ref:v,style:tt,to:d,viewTransition:m},typeof h=="function"?h(Q):h)});Jx.displayName="NavLink";var Wx=A.forwardRef(({discover:n="render",fetcherKey:i,navigate:s,reloadDocument:l,replace:u,state:f,method:d=no,action:m,onSubmit:h,relative:p,preventScrollReset:v,viewTransition:b,...x},E)=>{let S=a4(),C=i4(m,{relative:p}),O=d.toLowerCase()==="get"?"get":"post",R=typeof m=="string"&&Z1.test(m),L=N=>{if(h&&h(N),N.defaultPrevented)return;N.preventDefault();let $=N.nativeEvent.submitter,k=($==null?void 0:$.getAttribute("formmethod"))||d;S($||N.currentTarget,{fetcherKey:i,method:k,navigate:s,replace:u,state:f,relative:p,preventScrollReset:v,viewTransition:b})};return A.createElement("form",{ref:E,method:O,action:C,onSubmit:l?h:L,...x,"data-discover":!R&&n==="render"?"true":void 0})});Wx.displayName="Form";function Ix(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function K1(n){let i=A.useContext(Gi);return Nt(i,Ix(n)),i}function t4(n,{target:i,replace:s,state:l,preventScrollReset:u,relative:f,viewTransition:d}={}){let m=Cs(),h=fa(),p=Ms(n,{relative:f});return A.useCallback(v=>{if(jx(v,i)){v.preventDefault();let b=s!==void 0?s:ss(h)===ss(p);m(n,{replace:b,state:l,preventScrollReset:u,relative:f,viewTransition:d})}},[h,m,p,s,l,i,n,u,f,d])}var e4=0,n4=()=>`__${String(++e4)}__`;function a4(){let{router:n}=K1("useSubmit"),{basename:i}=A.useContext(dn),s=wx();return A.useCallback(async(l,u={})=>{let{action:f,method:d,encType:m,formData:h,body:p}=_x(l,i);if(u.navigate===!1){let v=u.fetcherKey||n4();await n.fetch(v,s,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:s,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,s])}function i4(n,{relative:i}={}){let{basename:s}=A.useContext(dn),l=A.useContext(Nn);Nt(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),f={...Ms(n||".",{relative:i})},d=fa();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),h=m.getAll("index");if(h.some(v=>v==="")){m.delete("index"),h.filter(b=>b).forEach(b=>m.append("index",b));let v=m.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:On([s,f.pathname])),ss(f)}function r4(n,i={}){let s=A.useContext(H1);Nt(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=K1("useViewTransitionState"),u=Ms(n,{relative:i.relative});if(!s.isTransitioning)return!1;let f=Vn(s.currentLocation.pathname,l)||s.currentLocation.pathname,d=Vn(s.nextLocation.pathname,l)||s.nextLocation.pathname;return ho(u.pathname,d)!=null||ho(u.pathname,f)!=null}new TextEncoder;var Ee=function(){return Ee=Object.assign||function(i){for(var s,l=1,u=arguments.length;l<u;l++){s=arguments[l];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(i[f]=s[f])}return i},Ee.apply(this,arguments)};function ls(n,i,s){if(s||arguments.length===2)for(var l=0,u=i.length,f;l<u;l++)(f||!(l in i))&&(f||(f=Array.prototype.slice.call(i,0,l)),f[l]=i[l]);return n.concat(f||Array.prototype.slice.call(i))}var jt="-ms-",ts="-moz-",wt="-webkit-",F1="comm",Ro="rule",rd="decl",s4="@import",J1="@keyframes",l4="@layer",W1=Math.abs,sd=String.fromCharCode,Af=Object.assign;function o4(n,i){return ae(n,0)^45?(((i<<2^ae(n,0))<<2^ae(n,1))<<2^ae(n,2))<<2^ae(n,3):0}function I1(n){return n.trim()}function Dn(n,i){return(n=i.exec(n))?n[0]:n}function ft(n,i,s){return n.replace(i,s)}function io(n,i,s){return n.indexOf(i,s)}function ae(n,i){return n.charCodeAt(i)|0}function Vi(n,i,s){return n.slice(i,s)}function on(n){return n.length}function tv(n){return n.length}function Jr(n,i){return i.push(n),n}function u4(n,i){return n.map(i).join("")}function $p(n,i){return n.filter(function(s){return!Dn(s,i)})}var zo=1,_i=1,ev=0,Ze=0,Kt=0,$i="";function Do(n,i,s,l,u,f,d,m){return{value:n,root:i,parent:s,type:l,props:u,children:f,line:zo,column:_i,length:d,return:"",siblings:m}}function la(n,i){return Af(Do("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function Ci(n){for(;n.root;)n=la(n.root,{children:[n]});Jr(n,n.siblings)}function c4(){return Kt}function f4(){return Kt=Ze>0?ae($i,--Ze):0,_i--,Kt===10&&(_i=1,zo--),Kt}function tn(){return Kt=Ze<ev?ae($i,Ze++):0,_i++,Kt===10&&(_i=1,zo++),Kt}function Ha(){return ae($i,Ze)}function ro(){return Ze}function Oo(n,i){return Vi($i,n,i)}function Cf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d4(n){return zo=_i=1,ev=on($i=n),Ze=0,[]}function h4(n){return $i="",n}function rf(n){return I1(Oo(Ze-1,Mf(n===91?n+2:n===40?n+1:n)))}function m4(n){for(;(Kt=Ha())&&Kt<33;)tn();return Cf(n)>2||Cf(Kt)>3?"":" "}function p4(n,i){for(;--i&&tn()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return Oo(n,ro()+(i<6&&Ha()==32&&tn()==32))}function Mf(n){for(;tn();)switch(Kt){case n:return Ze;case 34:case 39:n!==34&&n!==39&&Mf(Kt);break;case 40:n===41&&Mf(n);break;case 92:tn();break}return Ze}function g4(n,i){for(;tn()&&n+Kt!==57;)if(n+Kt===84&&Ha()===47)break;return"/*"+Oo(i,Ze-1)+"*"+sd(n===47?n:tn())}function v4(n){for(;!Cf(Ha());)tn();return Oo(n,Ze)}function y4(n){return h4(so("",null,null,null,[""],n=d4(n),0,[0],n))}function so(n,i,s,l,u,f,d,m,h){for(var p=0,v=0,b=d,x=0,E=0,S=0,C=1,O=1,R=1,L=0,N="",$=u,k=f,Y=l,Q=N;O;)switch(S=L,L=tn()){case 40:if(S!=108&&ae(Q,b-1)==58){io(Q+=ft(rf(L),"&","&\f"),"&\f",W1(p?m[p-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:Q+=rf(L);break;case 9:case 10:case 13:case 32:Q+=m4(S);break;case 92:Q+=p4(ro()-1,7);continue;case 47:switch(Ha()){case 42:case 47:Jr(b4(g4(tn(),ro()),i,s,h),h);break;default:Q+="/"}break;case 123*C:m[p++]=on(Q)*R;case 125*C:case 59:case 0:switch(L){case 0:case 125:O=0;case 59+v:R==-1&&(Q=ft(Q,/\f/g,"")),E>0&&on(Q)-b&&Jr(E>32?Qp(Q+";",l,s,b-1,h):Qp(ft(Q," ","")+";",l,s,b-2,h),h);break;case 59:Q+=";";default:if(Jr(Y=Xp(Q,i,s,p,v,u,m,N,$=[],k=[],b,f),f),L===123)if(v===0)so(Q,i,Y,Y,$,f,b,m,k);else switch(x===99&&ae(Q,3)===110?100:x){case 100:case 108:case 109:case 115:so(n,Y,Y,l&&Jr(Xp(n,Y,Y,0,0,u,m,N,u,$=[],b,k),k),u,k,b,m,l?$:k);break;default:so(Q,Y,Y,Y,[""],k,0,m,k)}}p=v=E=0,C=R=1,N=Q="",b=d;break;case 58:b=1+on(Q),E=S;default:if(C<1){if(L==123)--C;else if(L==125&&C++==0&&f4()==125)continue}switch(Q+=sd(L),L*C){case 38:R=v>0?1:(Q+="\f",-1);break;case 44:m[p++]=(on(Q)-1)*R,R=1;break;case 64:Ha()===45&&(Q+=rf(tn())),x=Ha(),v=b=on(N=Q+=v4(ro())),L++;break;case 45:S===45&&on(Q)==2&&(C=0)}}return f}function Xp(n,i,s,l,u,f,d,m,h,p,v,b){for(var x=u-1,E=u===0?f:[""],S=tv(E),C=0,O=0,R=0;C<l;++C)for(var L=0,N=Vi(n,x+1,x=W1(O=d[C])),$=n;L<S;++L)($=I1(O>0?E[L]+" "+N:ft(N,/&\f/g,E[L])))&&(h[R++]=$);return Do(n,i,s,u===0?Ro:m,h,p,v,b)}function b4(n,i,s,l){return Do(n,i,s,F1,sd(c4()),Vi(n,2,-2),0,l)}function Qp(n,i,s,l,u){return Do(n,i,s,rd,Vi(n,0,l),Vi(n,l+1,-1),l,u)}function nv(n,i,s){switch(o4(n,i)){case 5103:return wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+n+n;case 4789:return ts+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+n+ts+n+jt+n+n;case 5936:switch(ae(n,i+11)){case 114:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return wt+n+jt+n+n;case 6165:return wt+n+jt+"flex-"+n+n;case 5187:return wt+n+ft(n,/(\w+).+(:[^]+)/,wt+"box-$1$2"+jt+"flex-$1$2")+n;case 5443:return wt+n+jt+"flex-item-"+ft(n,/flex-|-self/g,"")+(Dn(n,/flex-|baseline/)?"":jt+"grid-row-"+ft(n,/flex-|-self/g,""))+n;case 4675:return wt+n+jt+"flex-line-pack"+ft(n,/align-content|flex-|-self/g,"")+n;case 5548:return wt+n+jt+ft(n,"shrink","negative")+n;case 5292:return wt+n+jt+ft(n,"basis","preferred-size")+n;case 6060:return wt+"box-"+ft(n,"-grow","")+wt+n+jt+ft(n,"grow","positive")+n;case 4554:return wt+ft(n,/([^-])(transform)/g,"$1"+wt+"$2")+n;case 6187:return ft(ft(ft(n,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),n,"")+n;case 5495:case 3959:return ft(n,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return ft(ft(n,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+n+n;case 4200:if(!Dn(n,/flex-|baseline/))return jt+"grid-column-align"+Vi(n,i)+n;break;case 2592:case 3360:return jt+ft(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(l,u){return i=u,Dn(l.props,/grid-\w+-end/)})?~io(n+(s=s[i].value),"span",0)?n:jt+ft(n,"-start","")+n+jt+"grid-row-span:"+(~io(s,"span",0)?Dn(s,/\d+/):+Dn(s,/\d+/)-+Dn(n,/\d+/))+";":jt+ft(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(l){return Dn(l.props,/grid-\w+-start/)})?n:jt+ft(ft(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ft(n,/(.+)-inline(.+)/,wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(n)-1-i>6)switch(ae(n,i+1)){case 109:if(ae(n,i+4)!==45)break;case 102:return ft(n,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+ts+(ae(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~io(n,"stretch",0)?nv(ft(n,"stretch","fill-available"),i,s)+n:n}break;case 5152:case 5920:return ft(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,f,d,m,h,p){return jt+u+":"+f+p+(d?jt+u+"-span:"+(m?h:+h-+f)+p:"")+n});case 4949:if(ae(n,i+6)===121)return ft(n,":",":"+wt)+n;break;case 6444:switch(ae(n,ae(n,14)===45?18:11)){case 120:return ft(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(ae(n,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+jt+"$2box$3")+n;case 100:return ft(n,":",":"+jt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(n,"scroll-","scroll-snap-")+n}return n}function mo(n,i){for(var s="",l=0;l<n.length;l++)s+=i(n[l],l,n,i)||"";return s}function x4(n,i,s,l){switch(n.type){case l4:if(n.children.length)break;case s4:case rd:return n.return=n.return||n.value;case F1:return"";case J1:return n.return=n.value+"{"+mo(n.children,l)+"}";case Ro:if(!on(n.value=n.props.join(",")))return""}return on(s=mo(n.children,l))?n.return=n.value+"{"+s+"}":""}function S4(n){var i=tv(n);return function(s,l,u,f){for(var d="",m=0;m<i;m++)d+=n[m](s,l,u,f)||"";return d}}function w4(n){return function(i){i.root||(i=i.return)&&n(i)}}function E4(n,i,s,l){if(n.length>-1&&!n.return)switch(n.type){case rd:n.return=nv(n.value,n.length,s);return;case J1:return mo([la(n,{value:ft(n.value,"@","@"+wt)})],l);case Ro:if(n.length)return u4(s=n.props,function(u){switch(Dn(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ci(la(n,{props:[ft(u,/:(read-\w+)/,":"+ts+"$1")]})),Ci(la(n,{props:[u]})),Af(n,{props:$p(s,l)});break;case"::placeholder":Ci(la(n,{props:[ft(u,/:(plac\w+)/,":"+wt+"input-$1")]})),Ci(la(n,{props:[ft(u,/:(plac\w+)/,":"+ts+"$1")]})),Ci(la(n,{props:[ft(u,/:(plac\w+)/,jt+"input-$1")]})),Ci(la(n,{props:[u]})),Af(n,{props:$p(s,l)});break}return""})}}var T4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe={},Ni=typeof process<"u"&&Oe!==void 0&&(Oe.REACT_APP_SC_ATTR||Oe.SC_ATTR)||"data-styled",av="active",iv="data-styled-version",jo="6.1.16",ld=`/*!sc*/
`,po=typeof window<"u"&&"HTMLElement"in window,A4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==""?Oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.SC_DISABLE_SPEEDY!==void 0&&Oe.SC_DISABLE_SPEEDY!==""&&Oe.SC_DISABLE_SPEEDY!=="false"&&Oe.SC_DISABLE_SPEEDY),Bo=Object.freeze([]),Li=Object.freeze({});function C4(n,i,s){return s===void 0&&(s=Li),n.theme!==s.theme&&n.theme||i||s.theme}var rv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,R4=/(^-|-$)/g;function Zp(n){return n.replace(M4,"-").replace(R4,"")}var z4=/(a)(d)/gi,Kl=52,Kp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Rf(n){var i,s="";for(i=Math.abs(n);i>Kl;i=i/Kl|0)s=Kp(i%Kl)+s;return(Kp(i%Kl)+s).replace(z4,"$1-$2")}var sf,sv=5381,Ri=function(n,i){for(var s=i.length;s;)n=33*n^i.charCodeAt(--s);return n},lv=function(n){return Ri(sv,n)};function ov(n){return Rf(lv(n)>>>0)}function D4(n){return n.displayName||n.name||"Component"}function lf(n){return typeof n=="string"&&!0}var uv=typeof Symbol=="function"&&Symbol.for,cv=uv?Symbol.for("react.memo"):60115,O4=uv?Symbol.for("react.forward_ref"):60112,j4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},B4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V4=((sf={})[O4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sf[cv]=fv,sf);function Fp(n){return("type"in(i=n)&&i.type.$$typeof)===cv?fv:"$$typeof"in n?V4[n.$$typeof]:j4;var i}var _4=Object.defineProperty,N4=Object.getOwnPropertyNames,Jp=Object.getOwnPropertySymbols,L4=Object.getOwnPropertyDescriptor,k4=Object.getPrototypeOf,Wp=Object.prototype;function dv(n,i,s){if(typeof i!="string"){if(Wp){var l=k4(i);l&&l!==Wp&&dv(n,l,s)}var u=N4(i);Jp&&(u=u.concat(Jp(i)));for(var f=Fp(n),d=Fp(i),m=0;m<u.length;++m){var h=u[m];if(!(h in B4||s&&s[h]||d&&h in d||f&&h in f)){var p=L4(i,h);try{_4(n,h,p)}catch{}}}}return n}function ki(n){return typeof n=="function"}function od(n){return typeof n=="object"&&"styledComponentId"in n}function La(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function zf(n,i){if(n.length===0)return"";for(var s=n[0],l=1;l<n.length;l++)s+=n[l];return s}function os(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Df(n,i,s){if(s===void 0&&(s=!1),!s&&!os(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var l=0;l<i.length;l++)n[l]=Df(n[l],i[l]);else if(os(i))for(var l in i)n[l]=Df(n[l],i[l]);return n}function ud(n,i){Object.defineProperty(n,"toString",{value:i})}function Rs(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var U4=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var s=0,l=0;l<i;l++)s+=this.groupSizes[l];return s},n.prototype.insertRules=function(i,s){if(i>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,f=u;i>=f;)if((f<<=1)<0)throw Rs(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(l),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(i+1),h=(d=0,s.length);d<h;d++)this.tag.insertRule(m,s[d])&&(this.groupSizes[i]++,m++)},n.prototype.clearGroup=function(i){if(i<this.length){var s=this.groupSizes[i],l=this.indexOfGroup(i),u=l+s;this.groupSizes[i]=0;for(var f=l;f<u;f++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(i){var s="";if(i>=this.length||this.groupSizes[i]===0)return s;for(var l=this.groupSizes[i],u=this.indexOfGroup(i),f=u+l,d=u;d<f;d++)s+="".concat(this.tag.getRule(d)).concat(ld);return s},n}(),lo=new Map,go=new Map,oo=1,Fl=function(n){if(lo.has(n))return lo.get(n);for(;go.has(oo);)oo++;var i=oo++;return lo.set(n,i),go.set(i,n),i},H4=function(n,i){oo=i+1,lo.set(n,i),go.set(i,n)},P4="style[".concat(Ni,"][").concat(iv,'="').concat(jo,'"]'),q4=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),G4=function(n,i,s){for(var l,u=s.split(","),f=0,d=u.length;f<d;f++)(l=u[f])&&n.registerName(i,l)},Y4=function(n,i){for(var s,l=((s=i.textContent)!==null&&s!==void 0?s:"").split(ld),u=[],f=0,d=l.length;f<d;f++){var m=l[f].trim();if(m){var h=m.match(q4);if(h){var p=0|parseInt(h[1],10),v=h[2];p!==0&&(H4(v,p),G4(n,v,h[3]),n.getTag().insertRules(p,u)),u.length=0}else u.push(m)}}},Ip=function(n){for(var i=document.querySelectorAll(P4),s=0,l=i.length;s<l;s++){var u=i[s];u&&u.getAttribute(Ni)!==av&&(Y4(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function $4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hv=function(n){var i=document.head,s=n||i,l=document.createElement("style"),u=function(m){var h=Array.from(m.querySelectorAll("style[".concat(Ni,"]")));return h[h.length-1]}(s),f=u!==void 0?u.nextSibling:null;l.setAttribute(Ni,av),l.setAttribute(iv,jo);var d=$4();return d&&l.setAttribute("nonce",d),s.insertBefore(l,f),l},X4=function(){function n(i){this.element=hv(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var l=document.styleSheets,u=0,f=l.length;u<f;u++){var d=l[u];if(d.ownerNode===s)return d}throw Rs(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,s){try{return this.sheet.insertRule(s,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var s=this.sheet.cssRules[i];return s&&s.cssText?s.cssText:""},n}(),Q4=function(){function n(i){this.element=hv(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,s){if(i<=this.length&&i>=0){var l=document.createTextNode(s);return this.element.insertBefore(l,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),Z4=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,s){return i<=this.length&&(this.rules.splice(i,0,s),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),tg=po,K4={isServer:!po,useCSSOMInjection:!A4},mv=function(){function n(i,s,l){i===void 0&&(i=Li),s===void 0&&(s={});var u=this;this.options=Ee(Ee({},K4),i),this.gs=s,this.names=new Map(l),this.server=!!i.isServer,!this.server&&po&&tg&&(tg=!1,Ip(this)),ud(this,function(){return function(f){for(var d=f.getTag(),m=d.length,h="",p=function(b){var x=function(R){return go.get(R)}(b);if(x===void 0)return"continue";var E=f.names.get(x),S=d.getGroup(b);if(E===void 0||!E.size||S.length===0)return"continue";var C="".concat(Ni,".g").concat(b,'[id="').concat(x,'"]'),O="";E!==void 0&&E.forEach(function(R){R.length>0&&(O+="".concat(R,","))}),h+="".concat(S).concat(C,'{content:"').concat(O,'"}').concat(ld)},v=0;v<m;v++)p(v);return h}(u)})}return n.registerId=function(i){return Fl(i)},n.prototype.rehydrate=function(){!this.server&&po&&Ip(this)},n.prototype.reconstructWithOptions=function(i,s){return s===void 0&&(s=!0),new n(Ee(Ee({},this.options),i),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(s){var l=s.useCSSOMInjection,u=s.target;return s.isServer?new Z4(u):l?new X4(u):new Q4(u)}(this.options),new U4(i)));var i},n.prototype.hasNameForId=function(i,s){return this.names.has(i)&&this.names.get(i).has(s)},n.prototype.registerName=function(i,s){if(Fl(i),this.names.has(i))this.names.get(i).add(s);else{var l=new Set;l.add(s),this.names.set(i,l)}},n.prototype.insertRules=function(i,s,l){this.registerName(i,s),this.getTag().insertRules(Fl(i),l)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(Fl(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),F4=/&/g,J4=/^\s*\/\/.*$/gm;function pv(n,i){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(i," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(i," ")),s.props=s.props.map(function(l){return"".concat(i," ").concat(l)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=pv(s.children,i)),s})}function W4(n){var i,s,l,u=Li,f=u.options,d=f===void 0?Li:f,m=u.plugins,h=m===void 0?Bo:m,p=function(x,E,S){return S.startsWith(s)&&S.endsWith(s)&&S.replaceAll(s,"").length>0?".".concat(i):x},v=h.slice();v.push(function(x){x.type===Ro&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(F4,s).replace(l,p))}),d.prefix&&v.push(E4),v.push(x4);var b=function(x,E,S,C){E===void 0&&(E=""),S===void 0&&(S=""),C===void 0&&(C="&"),i=C,s=E,l=new RegExp("\\".concat(s,"\\b"),"g");var O=x.replace(J4,""),R=y4(S||E?"".concat(S," ").concat(E," { ").concat(O," }"):O);d.namespace&&(R=pv(R,d.namespace));var L=[];return mo(R,S4(v.concat(w4(function(N){return L.push(N)})))),L};return b.hash=h.length?h.reduce(function(x,E){return E.name||Rs(15),Ri(x,E.name)},sv).toString():"",b}var I4=new mv,Of=W4(),gv=Qe.createContext({shouldForwardProp:void 0,styleSheet:I4,stylis:Of});gv.Consumer;Qe.createContext(void 0);function eg(){return A.useContext(gv)}var vv=function(){function n(i,s){var l=this;this.inject=function(u,f){f===void 0&&(f=Of);var d=l.name+f.hash;u.hasNameForId(l.id,d)||u.insertRules(l.id,d,f(l.rules,d,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=s,ud(this,function(){throw Rs(12,String(l.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Of),this.name+i.hash},n}(),t3=function(n){return n>="A"&&n<="Z"};function ng(n){for(var i="",s=0;s<n.length;s++){var l=n[s];if(s===1&&l==="-"&&n[0]==="-")return n;t3(l)?i+="-"+l.toLowerCase():i+=l}return i.startsWith("ms-")?"-"+i:i}var yv=function(n){return n==null||n===!1||n===""},bv=function(n){var i,s,l=[];for(var u in n){var f=n[u];n.hasOwnProperty(u)&&!yv(f)&&(Array.isArray(f)&&f.isCss||ki(f)?l.push("".concat(ng(u),":"),f,";"):os(f)?l.push.apply(l,ls(ls(["".concat(u," {")],bv(f),!1),["}"],!1)):l.push("".concat(ng(u),": ").concat((i=u,(s=f)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||i in T4||i.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return l};function Pa(n,i,s,l){if(yv(n))return[];if(od(n))return[".".concat(n.styledComponentId)];if(ki(n)){if(!ki(f=n)||f.prototype&&f.prototype.isReactComponent||!i)return[n];var u=n(i);return Pa(u,i,s,l)}var f;return n instanceof vv?s?(n.inject(s,l),[n.getName(l)]):[n]:os(n)?bv(n):Array.isArray(n)?Array.prototype.concat.apply(Bo,n.map(function(d){return Pa(d,i,s,l)})):[n.toString()]}function e3(n){for(var i=0;i<n.length;i+=1){var s=n[i];if(ki(s)&&!od(s))return!1}return!0}var n3=lv(jo),a3=function(){function n(i,s,l){this.rules=i,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&e3(i),this.componentId=s,this.baseHash=Ri(n3,s),this.baseStyle=l,mv.registerId(s)}return n.prototype.generateAndInjectStyles=function(i,s,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,s,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))u=La(u,this.staticRulesId);else{var f=zf(Pa(this.rules,i,s,l)),d=Rf(Ri(this.baseHash,f)>>>0);if(!s.hasNameForId(this.componentId,d)){var m=l(f,".".concat(d),void 0,this.componentId);s.insertRules(this.componentId,d,m)}u=La(u,d),this.staticRulesId=d}else{for(var h=Ri(this.baseHash,l.hash),p="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")p+=b;else if(b){var x=zf(Pa(b,i,s,l));h=Ri(h,x+v),p+=x}}if(p){var E=Rf(h>>>0);s.hasNameForId(this.componentId,E)||s.insertRules(this.componentId,E,l(p,".".concat(E),void 0,this.componentId)),u=La(u,E)}}return u},n}(),xv=Qe.createContext(void 0);xv.Consumer;var of={};function i3(n,i,s){var l=od(n),u=n,f=!lf(n),d=i.attrs,m=d===void 0?Bo:d,h=i.componentId,p=h===void 0?function($,k){var Y=typeof $!="string"?"sc":Zp($);of[Y]=(of[Y]||0)+1;var Q="".concat(Y,"-").concat(ov(jo+Y+of[Y]));return k?"".concat(k,"-").concat(Q):Q}(i.displayName,i.parentComponentId):h,v=i.displayName,b=v===void 0?function($){return lf($)?"styled.".concat($):"Styled(".concat(D4($),")")}(n):v,x=i.displayName&&i.componentId?"".concat(Zp(i.displayName),"-").concat(i.componentId):i.componentId||p,E=l&&u.attrs?u.attrs.concat(m).filter(Boolean):m,S=i.shouldForwardProp;if(l&&u.shouldForwardProp){var C=u.shouldForwardProp;if(i.shouldForwardProp){var O=i.shouldForwardProp;S=function($,k){return C($,k)&&O($,k)}}else S=C}var R=new a3(s,x,l?u.componentStyle:void 0);function L($,k){return function(Y,Q,F){var X=Y.attrs,tt=Y.componentStyle,Rt=Y.defaultProps,ie=Y.foldedComponentIds,vt=Y.styledComponentId,Gt=Y.target,Yt=Qe.useContext(xv),Z=eg(),J=Y.shouldForwardProp||Z.shouldForwardProp,I=C4(Q,Yt,Rt)||Li,ct=function(dt,lt,$t){for(var gt,Et=Ee(Ee({},lt),{className:void 0,theme:$t}),Tt=0;Tt<dt.length;Tt+=1){var pe=ki(gt=dt[Tt])?gt(Et):gt;for(var be in pe)Et[be]=be==="className"?La(Et[be],pe[be]):be==="style"?Ee(Ee({},Et[be]),pe[be]):pe[be]}return lt.className&&(Et.className=La(Et.className,lt.className)),Et}(X,Q,I),M=ct.as||Gt,G={};for(var nt in ct)ct[nt]===void 0||nt[0]==="$"||nt==="as"||nt==="theme"&&ct.theme===I||(nt==="forwardedAs"?G.as=ct.forwardedAs:J&&!J(nt,M)||(G[nt]=ct[nt]));var it=function(dt,lt){var $t=eg(),gt=dt.generateAndInjectStyles(lt,$t.styleSheet,$t.stylis);return gt}(tt,ct),K=La(ie,vt);return it&&(K+=" "+it),ct.className&&(K+=" "+ct.className),G[lf(M)&&!rv.has(M)?"class":"className"]=K,F&&(G.ref=F),A.createElement(M,G)}(N,$,k)}L.displayName=b;var N=Qe.forwardRef(L);return N.attrs=E,N.componentStyle=R,N.displayName=b,N.shouldForwardProp=S,N.foldedComponentIds=l?La(u.foldedComponentIds,u.styledComponentId):"",N.styledComponentId=x,N.target=l?u.target:n,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=l?function(k){for(var Y=[],Q=1;Q<arguments.length;Q++)Y[Q-1]=arguments[Q];for(var F=0,X=Y;F<X.length;F++)Df(k,X[F],!0);return k}({},u.defaultProps,$):$}}),ud(N,function(){return".".concat(N.styledComponentId)}),f&&dv(N,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function ag(n,i){for(var s=[n[0]],l=0,u=i.length;l<u;l+=1)s.push(i[l],n[l+1]);return s}var ig=function(n){return Object.assign(n,{isCss:!0})};function zs(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];if(ki(n)||os(n))return ig(Pa(ag(Bo,ls([n],i,!0))));var l=n;return i.length===0&&l.length===1&&typeof l[0]=="string"?Pa(l):ig(Pa(ag(l,i)))}function jf(n,i,s){if(s===void 0&&(s=Li),!i)throw Rs(1,i);var l=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(i,s,zs.apply(void 0,ls([u],f,!1)))};return l.attrs=function(u){return jf(n,i,Ee(Ee({},s),{attrs:Array.prototype.concat(s.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return jf(n,i,Ee(Ee({},s),u))},l}var Sv=function(n){return jf(i3,n)},B=Sv;rv.forEach(function(n){B[n]=Sv(n)});function ue(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var l=zf(zs.apply(void 0,ls([n],i,!1))),u=ov(l);return new vv(u,l)}var wv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rg=Qe.createContext&&Qe.createContext(wv),r3=["attr","size","title"];function s3(n,i){if(n==null)return{};var s=l3(n,i),l,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(u=0;u<f.length;u++)l=f[u],!(i.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(s[l]=n[l])}return s}function l3(n,i){if(n==null)return{};var s={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(i.indexOf(l)>=0)continue;s[l]=n[l]}return s}function vo(){return vo=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(n[l]=s[l])}return n},vo.apply(this,arguments)}function sg(n,i){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),s.push.apply(s,l)}return s}function yo(n){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?sg(Object(s),!0).forEach(function(l){o3(n,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):sg(Object(s)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(s,l))})}return n}function o3(n,i,s){return i=u3(i),i in n?Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[i]=s,n}function u3(n){var i=c3(n,"string");return typeof i=="symbol"?i:i+""}function c3(n,i){if(typeof n!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var l=s.call(n,i);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function Ev(n){return n&&n.map((i,s)=>Qe.createElement(i.tag,yo({key:s},i.attr),Ev(i.child)))}function Wt(n){return i=>Qe.createElement(f3,vo({attr:yo({},n.attr)},i),Ev(n.child))}function f3(n){var i=s=>{var{attr:l,size:u,title:f}=n,d=s3(n,r3),m=u||s.size||"1em",h;return s.className&&(h=s.className),n.className&&(h=(h?h+" ":"")+n.className),Qe.createElement("svg",vo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,l,d,{className:h,style:yo(yo({color:n.color||s.color},s.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),f&&Qe.createElement("title",null,f),n.children)};return rg!==void 0?Qe.createElement(rg.Consumer,null,s=>i(s)):i(wv)}function d3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(n)}function Vo(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function h3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z"},child:[]}]})(n)}function Tv(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function m3(n){return Wt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"},child:[]}]})(n)}function p3(n){return Wt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function g3(n){return Wt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function Av(n){return Wt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(n)}function v3(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"},child:[]}]})(n)}function y3(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function b3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function x3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function bo(n){return Wt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function S3(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(n)}function w3(n){return Wt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function E3(n){return Wt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"},child:[]}]})(n)}function T3(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function A3(n){return Wt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(n)}const C3="/vegetaquizshow/assets/vegetaball-DRzOjpAa.webp",M3=()=>{const[n,i]=A.useState([]),[s,l]=A.useState(!1),[u,f]=A.useState(""),[d,m]=A.useState(""),h=Cs(),p=()=>{if(u.trim()){const x={id:Date.now().toString(),name:u.trim(),avatar:d||`https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`,score:0};i([...n,x]),f(""),m(""),l(!1)}},v=x=>{i(n.filter(E=>E.id!==x))},b=()=>{if(n.length===0){alert("Aggiungi almeno un allenatore prima di iniziare!");return}localStorage.setItem("quizPlayers",JSON.stringify(n)),h("/game")};return T.jsxs(z3,{children:[T.jsxs(_3,{children:[T.jsx(uf,{children:"VEGETA"}),T.jsx(uf,{children:"QUIZ"}),T.jsx(uf,{children:"SHOW"})]}),T.jsxs(N3,{children:[T.jsxs(og,{onClick:()=>l(!0),$color:"#EE1515",children:[T.jsx(lg,{children:T.jsx(w3,{})}),T.jsx("span",{children:"Registra Allenatore"})]}),T.jsxs(og,{onClick:b,disabled:n.length===0,className:n.length===0?"disabled":"ready",$color:"#3B4CCA",children:[T.jsx(lg,{children:T.jsx(Av,{})}),T.jsx("span",{children:"Inizia Avventura"})]})]}),T.jsxs(L3,{children:[T.jsxs(k3,{children:[T.jsx("h2",{children:"Allenatori"}),n.length>0&&T.jsxs(H3,{children:[T.jsx(U3,{small:!0,style:{transform:"rotate(180deg)"}}),n.length]})]}),n.length===0?T.jsxs(P3,{children:[T.jsx(q3,{children:"Nessun allenatore registrato"}),T.jsx(G3,{onClick:()=>l(!0),children:"Registra il tuo primo allenatore!"})]}):T.jsx(Y3,{children:n.map(x=>T.jsxs(cd,{children:[T.jsx(X3,{src:x.avatar,alt:x.name}),T.jsx(Q3,{children:x.name}),T.jsx(Z3,{onClick:()=>v(x.id),children:T.jsx(bo,{})}),T.jsx($3,{children:T.jsx(v3,{})})]},x.id))})]}),s&&T.jsx(K3,{children:T.jsxs(F3,{children:[T.jsxs(J3,{children:[T.jsx("h2",{children:"Registra Allenatore"}),T.jsx(W3,{onClick:()=>l(!1),children:T.jsx(bo,{})})]}),T.jsxs(I3,{children:[T.jsxs(ug,{children:[T.jsx(cg,{children:"Nome Allenatore"}),T.jsx(fg,{type:"text",value:u,onChange:x=>f(x.target.value),placeholder:"Inserisci il nome dell'allenatore"})]}),T.jsxs(ug,{children:[T.jsx(cg,{children:"URL Avatar (opzionale)"}),T.jsx(fg,{type:"text",value:d,onChange:x=>m(x.target.value),placeholder:"URL immagine avatar"}),T.jsx(tS,{children:"Se lasci vuoto, verrà generato automaticamente"})]}),T.jsxs(eS,{children:[T.jsx(nS,{onClick:()=>l(!1),children:"Annulla"}),T.jsx(aS,{onClick:p,children:"Registra"})]})]})]})}),T.jsxs(D3,{children:[T.jsx(cs,{className:"ball1"}),T.jsx(cs,{className:"ball2"}),T.jsx(j3,{className:"ball3"}),T.jsx(B3,{className:"ball4"}),T.jsx(V3,{className:"ball5"}),T.jsx(O3,{})]}),T.jsx("img",{src:C3,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:.55,zIndex:0,objectFit:"cover"}})]})},us=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,R3=ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;ue`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;ue`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;const z3=B.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  padding-top: 10vh;
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
`,D3=B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,O3=B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
`,cs=B.div`
  position: absolute;
  width: 150px;
  height: 150px;
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
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333, 0 0 0 10px white;
  }

  &.ball1 {
    top: -40px;
    right: 10%;
    animation: ${us} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${us} 10s ease-in-out infinite reverse;
  }
`,j3=B(cs)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #3b4cca 50%,
    #3b4cca 100%
  );

  &.ball3 {
    top: 20%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${us} 15s ease-in-out infinite;
  }
`,B3=B(cs)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ffde00 50%,
    #ffde00 100%
  );

  &.ball4 {
    bottom: 5%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${us} 18s ease-in-out infinite reverse;
  }
`,V3=B(cs)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #9966ff 50%,
    #9966ff 100%
  );

  &.ball5 {
    top: 40%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${us} 14s ease-in-out infinite;
  }
`,_3=B.h1`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;

  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${R3} 3s infinite ease-in-out;
  z-index: 1;
  font-family: 'Pokemon Solid', 'Arial Black', sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,uf=B.span`
  color: #ffde00;
  margin: 0 0.3rem;
  position: relative;
  -webkit-text-stroke: 3px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;

  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #3b4cca;
  }
`,N3=B.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,lg=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
  font-size: 1.3rem;
`,og=B.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  background: ${n=>n.$color||"#EE1515"};
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
  }

  &.disabled {
    background: #666;
    box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);
    }
  }
`,L3=B.div`
  width: 100%;
  max-width: 800px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  z-index: 1;
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
    z-index: -1;
    border-radius: 17px;
  }
`,k3=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.8rem;

  h2 {
    font-size: 1.8rem;
    margin: 0;
    color: #ffde00;
    text-shadow: 2px 2px 0 #3b4cca;
  }
`,U3=B.div`
  display: inline-block;
  width: ${n=>n.small?"20px":"30px"};
  height: ${n=>n.small?"20px":"30px"};
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;
  margin-right: ${n=>n.small?"5px":"8px"};
  vertical-align: middle;

  &::before {
    content: '';
    position: absolute;
    width: ${n=>n.small?"6px":"8px"};
    height: ${n=>n.small?"6px":"8px"};
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 ${n=>n.small?"1px":"2px"} #333,
      0 0 0 ${n=>n.small?"3px":"4px"} white;
  }
`,H3=B.div`
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,P3=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`,q3=B.p`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin-bottom: 1rem;
`,G3=B.button`
  background: none;
  border: 2px dashed #ffde00;
  border-radius: 10px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 222, 0, 0.1);
    transform: translateY(-3px);
  }
`,Y3=B.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  max-height: 300px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffde00;
    border-radius: 10px;
  }
`,cd=B.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.1);

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
  }
`,$3=B.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${cd}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`,X3=B.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`,Q3=B.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 1;
`,Z3=B.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #ee1515;
  border: 2px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  z-index: 2;

  ${cd}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: #ff0044;
    transform: scale(1.2);
  }
`,K3=B.div`
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
`,F3=B.div`
  background: radial-gradient(circle at top left, #233975 0%, #132a57 100%);
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
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
`,J3=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;

  h2 {
    margin: 0;
    color: #ffde00;
    font-size: 1.5rem;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
  }
`,W3=B.button`
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
`,I3=B.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`,ug=B.div`
  margin-bottom: 1.5rem;
`,cg=B.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffde00;
  font-weight: 600;
  font-size: 0.9rem;
`,fg=B.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
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
`,tS=B.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`,eS=B.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,nS=B.button`
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,aS=B.button`
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: none;
  background: #ee1515;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
  }
`;function iS(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(n)}function rS(){const[n,i]=A.useState([]),s=Cs();A.useEffect(()=>{const f=localStorage.getItem("quizPlayers");f?i(JSON.parse(f)):s("/")},[s]);const l=(f,d)=>{const m=n.map(h=>h.id===f?{...h,score:d}:h);i(m),localStorage.setItem("quizPlayers",JSON.stringify(m))},u=[{id:"categories",title:"Quiz Pokémon",description:"Sfida le tue conoscenze sui Pokémon in varie categorie",icon:T.jsx(Av,{}),color:"#EE1515",path:"/game/categories"},{id:"wheel",title:"Ruota della Fortuna",description:"Gira la ruota e affronta sfide casuali",icon:T.jsx(m3,{}),color:"#3B4CCA",path:"/game/wheel"},{id:"image",title:"WhO's ThAt PoKéMoN?",description:"Indovina il Pokémon dall'ombra o immagine sfocata",icon:T.jsx(y3,{}),color:"#FF9C54",path:"/game/image"},{id:"fusion",title:"Fusioni Pokémon",description:"Indovina quali Pokémon creano una fusione",icon:T.jsx(h3,{}),color:"#9966FF",path:"/game/fusion"},{id:"pokemon",title:"Poké-Sherlock",description:"Indovina il Pokémon dagli indizi",icon:T.jsx(iS,{}),color:"#78C850",path:"/game/pokemon"}];return T.jsxs(oS,{children:[T.jsxs(hS,{to:"/",children:[T.jsx(Vo,{})," Torna alla home"]}),T.jsx(mS,{children:"Centro Sfide Pokémon"}),T.jsx(pS,{children:u.map(f=>T.jsxs(fd,{to:f.path,$color:f.color,children:[T.jsx(vS,{$color:f.color,children:f.icon}),T.jsxs(yS,{children:[T.jsx(bS,{children:f.title}),T.jsx(xS,{children:f.description})]}),T.jsx(SS,{children:T.jsx("div",{className:"arrow",children:"→"})}),T.jsx(gS,{})]},f.id))}),T.jsxs(ES,{children:[T.jsxs(TS,{children:[T.jsx(AS,{children:"Allenatori"}),T.jsxs(CS,{children:[n.length," ",n.length===1?"allenatore":"allenatori"]})]}),T.jsx(MS,{children:n.map(f=>T.jsxs(RS,{children:[T.jsx(zS,{src:f.avatar,alt:f.name}),T.jsxs(DS,{children:[T.jsx(OS,{children:f.name}),T.jsxs(Cv,{onClick:()=>{const d=prompt(`Modifica punteggio per ${f.name}:`,String(f.score));if(d!==null){const m=parseInt(d);isNaN(m)||l(f.id,m)}},children:[T.jsx(wS,{})," ",f.score," punti"," ",T.jsx(jS,{children:T.jsx(p3,{})})]})]})]},f.id))})]}),T.jsxs(uS,{children:[T.jsx(ds,{className:"ball1"}),T.jsx(ds,{className:"ball2"}),T.jsx(cS,{className:"ball3"}),T.jsx(fS,{className:"ball4"}),T.jsx(dS,{className:"ball5"})]})]})}const fs=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;const sS=ue`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,lS=ue`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,oS=B.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
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
`,uS=B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,ds=B.div`
  position: absolute;
  width: 150px;
  height: 150px;
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
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333, 0 0 0 10px white;
  }

  &.ball1 {
    top: -40px;
    right: 10%;
    animation: ${fs} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${fs} 10s ease-in-out infinite reverse;
  }
`,cS=B(ds)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #3b4cca 50%,
    #3b4cca 100%
  );

  &.ball3 {
    top: 20%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${fs} 15s ease-in-out infinite;
  }
`,fS=B(ds)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ffde00 50%,
    #ffde00 100%
  );

  &.ball4 {
    bottom: 5%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${fs} 18s ease-in-out infinite reverse;
  }
`,dS=B(ds)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #9966ff 50%,
    #9966ff 100%
  );

  &.ball5 {
    top: 40%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${fs} 14s ease-in-out infinite;
  }
`,hS=B(Yi)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 30px;
  font-weight: 500;
  z-index: 10;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
`,mS=B.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 3rem 0;
  text-align: center;
  z-index: 1;
  color: #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
    margin: 2rem 0;
    -webkit-text-stroke: 1px #3b4cca;
  }
`,pS=B.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,fd=B(Yi)`
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 3px solid ${n=>n.$color};
  width: 350px;

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

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 150%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transform: skewX(-20deg);
      animation: ${sS} 1s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,gS=B.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    rgba(240, 240, 240, 0.2) 0%,
    rgba(240, 240, 240, 0.2) 50%,
    rgba(238, 21, 21, 0.2) 50%,
    rgba(238, 21, 21, 0.2) 100%
  );

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.3),
      0 0 0 4px rgba(255, 255, 255, 0.3);
  }

  ${fd}:hover & {
    animation: ${lS} 1s ease-in-out;
  }
`,vS=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${n=>n.$color};
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  margin-right: 1.2rem;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 2px solid ${n=>n.$color};
  position: relative;
  z-index: 1;
`,yS=B.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,bS=B.h3`
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,xS=B.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
`,SS=B.div`
  margin-left: 1rem;
  position: relative;
  z-index: 1;

  .arrow {
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0.5;
    transition: all 0.3s ease;
    color: #ffde00;
  }

  ${fd}:hover .arrow {
    transform: translateX(5px);
    opacity: 1;
  }
`,wS=B.div`
  width: 18px;
  height: 18px;
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
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle;
`,ES=B.div`
  width: 100%;
  max-width: 1200px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  z-index: 1;
  margin-top: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

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
    border-radius: 16px;
  }
`,TS=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
`,AS=B.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,CS=B.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,MS=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,RS=B.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;

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
    border-radius: 10px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    border-color: #ffde00;
  }
`,zS=B.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`,DS=B.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,OS=B.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`,Cv=B.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    color: white;
  }
`,jS=B.span`
  margin-left: 0.5rem;
  opacity: 0;
  transition: all 0.2s ease;
  color: #ffde00;

  ${Cv}:hover & {
    opacity: 1;
  }
`,dd=A.createContext({});function _o(n){const i=A.useRef(null);return i.current===null&&(i.current=n()),i.current}const hd=typeof window<"u",md=hd?A.useLayoutEffect:A.useEffect,No=A.createContext(null),pd=A.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class BS extends A.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent){const l=s.offsetParent,u=l instanceof HTMLElement&&l.offsetWidth||0,f=this.props.sizeRef.current;f.height=s.offsetHeight||0,f.width=s.offsetWidth||0,f.top=s.offsetTop,f.left=s.offsetLeft,f.right=u-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function VS({children:n,isPresent:i,anchorX:s}){const l=A.useId(),u=A.useRef(null),f=A.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=A.useContext(pd);return A.useInsertionEffect(()=>{const{width:m,height:h,top:p,left:v,right:b}=f.current;if(i||!u.current||!m||!h)return;const x=s==="left"?`left: ${v}`:`right: ${b}`;u.current.dataset.motionPopId=l;const E=document.createElement("style");return d&&(E.nonce=d),document.head.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.removeChild(E)}},[i]),T.jsx(BS,{isPresent:i,childRef:u,sizeRef:f,children:A.cloneElement(n,{ref:u})})}const _S=({children:n,initial:i,isPresent:s,onExitComplete:l,custom:u,presenceAffectsLayout:f,mode:d,anchorX:m})=>{const h=_o(NS),p=A.useId(),v=A.useCallback(x=>{h.set(x,!0);for(const E of h.values())if(!E)return;l&&l()},[h,l]),b=A.useMemo(()=>({id:p,initial:i,isPresent:s,custom:u,onExitComplete:v,register:x=>(h.set(x,!1),()=>h.delete(x))}),f?[Math.random(),v]:[s,v]);return A.useMemo(()=>{h.forEach((x,E)=>h.set(E,!1))},[s]),A.useEffect(()=>{!s&&!h.size&&l&&l()},[s]),d==="popLayout"&&(n=T.jsx(VS,{isPresent:s,anchorX:m,children:n})),T.jsx(No.Provider,{value:b,children:n})};function NS(){return new Map}function Mv(n=!0){const i=A.useContext(No);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:l,register:u}=i,f=A.useId();A.useEffect(()=>{if(n)return u(f)},[n]);const d=A.useCallback(()=>n&&l&&l(f),[f,l,n]);return!s&&l?[!1,d]:[!0]}const Jl=n=>n.key||"";function dg(n){const i=[];return A.Children.forEach(n,s=>{A.isValidElement(s)&&i.push(s)}),i}const Rv=({children:n,custom:i,initial:s=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:m="left"})=>{const[h,p]=Mv(d),v=A.useMemo(()=>dg(n),[n]),b=d&&!h?[]:v.map(Jl),x=A.useRef(!0),E=A.useRef(v),S=_o(()=>new Map),[C,O]=A.useState(v),[R,L]=A.useState(v);md(()=>{x.current=!1,E.current=v;for(let k=0;k<R.length;k++){const Y=Jl(R[k]);b.includes(Y)?S.delete(Y):S.get(Y)!==!0&&S.set(Y,!1)}},[R,b.length,b.join("-")]);const N=[];if(v!==C){let k=[...v];for(let Y=0;Y<R.length;Y++){const Q=R[Y],F=Jl(Q);b.includes(F)||(k.splice(Y,0,Q),N.push(Q))}return f==="wait"&&N.length&&(k=N),L(dg(k)),O(v),null}const{forceRender:$}=A.useContext(dd);return T.jsx(T.Fragment,{children:R.map(k=>{const Y=Jl(k),Q=d&&!h?!1:v===R||b.includes(Y),F=()=>{if(S.has(Y))S.set(Y,!0);else return;let X=!0;S.forEach(tt=>{tt||(X=!1)}),X&&($==null||$(),L(E.current),d&&(p==null||p()),l&&l())};return T.jsx(_S,{isPresent:Q,initial:!x.current||s?void 0:!1,custom:i,presenceAffectsLayout:u,mode:f,onExitComplete:Q?void 0:F,anchorX:m,children:k},Y)})})};function gd(n,i){n.indexOf(i)===-1&&n.push(i)}function vd(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const je=n=>n;let zv=je;const LS={useManualTiming:!1};function yd(n){let i;return()=>(i===void 0&&(i=n()),i)}const Ui=(n,i,s)=>{const l=i-n;return l===0?1:(s-n)/l};class bd{constructor(){this.subscriptions=[]}add(i){return gd(this.subscriptions,i),()=>vd(this.subscriptions,i)}notify(i,s,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,s,l);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,s,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jn=n=>n*1e3,Bn=n=>n/1e3;function Dv(n,i){return i?n*(1e3/i):0}const kS=yd(()=>window.ScrollTimeline!==void 0);class US{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,s){for(let l=0;l<this.animations.length;l++)this.animations[l][i]=s}attachTimeline(i,s){const l=this.animations.map(u=>{if(kS()&&u.attachTimeline)return u.attachTimeline(i);if(typeof s=="function")return s(u)});return()=>{l.forEach((u,f)=>{u&&u(),this.animations[f].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let s=0;s<this.animations.length;s++)i=Math.max(i,this.animations[s].duration);return i}runAll(i){this.animations.forEach(s=>s[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class HS extends US{then(i,s){return Promise.all(this.animations).then(i).catch(s)}}function xd(n,i){return n?n[i]||n.default||n:void 0}const Bf=2e4;function Ov(n){let i=0;const s=50;let l=n.next(i);for(;!l.done&&i<Bf;)i+=s,l=n.next(i);return i>=Bf?1/0:i}function Sd(n){return typeof n=="function"}function hg(n,i){n.timeline=i,n.onfinish=null}const wd=n=>Array.isArray(n)&&typeof n[0]=="number",PS={linearEasing:void 0};function qS(n,i){const s=yd(n);return()=>{var l;return(l=PS[i])!==null&&l!==void 0?l:s()}}const xo=qS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),jv=(n,i,s=10)=>{let l="";const u=Math.max(Math.round(i/s),2);for(let f=0;f<u;f++)l+=n(Ui(0,u-1,f))+", ";return`linear(${l.substring(0,l.length-2)})`};function Bv(n){return!!(typeof n=="function"&&xo()||!n||typeof n=="string"&&(n in Vf||xo())||wd(n)||Array.isArray(n)&&n.every(Bv))}const Wr=([n,i,s,l])=>`cubic-bezier(${n}, ${i}, ${s}, ${l})`,Vf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Wr([0,.65,.55,1]),circOut:Wr([.55,0,1,.45]),backIn:Wr([.31,.01,.66,-.59]),backOut:Wr([.33,1.53,.69,.99])};function Vv(n,i){if(n)return typeof n=="function"&&xo()?jv(n,i):wd(n)?Wr(n):Array.isArray(n)?n.map(s=>Vv(s,i)||Vf.easeOut):Vf[n]}const Wl=["read","resolveKeyframes","update","preRender","render","postRender"];function GS(n,i){let s=new Set,l=new Set,u=!1,f=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function h(v){d.has(v)&&(p.schedule(v),n()),v(m)}const p={schedule:(v,b=!1,x=!1)=>{const S=x&&u?s:l;return b&&d.add(v),S.has(v)||S.add(v),v},cancel:v=>{l.delete(v),d.delete(v)},process:v=>{if(m=v,u){f=!0;return}u=!0,[s,l]=[l,s],s.forEach(h),s.clear(),u=!1,f&&(f=!1,p.process(v))}};return p}const YS=40;function _v(n,i){let s=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>s=!0,d=Wl.reduce((R,L)=>(R[L]=GS(f),R),{}),{read:m,resolveKeyframes:h,update:p,preRender:v,render:b,postRender:x}=d,E=()=>{const R=performance.now();s=!1,u.delta=l?1e3/60:Math.max(Math.min(R-u.timestamp,YS),1),u.timestamp=R,u.isProcessing=!0,m.process(u),h.process(u),p.process(u),v.process(u),b.process(u),x.process(u),u.isProcessing=!1,s&&i&&(l=!1,n(E))},S=()=>{s=!0,l=!0,u.isProcessing||n(E)};return{schedule:Wl.reduce((R,L)=>{const N=d[L];return R[L]=($,k=!1,Y=!1)=>(s||S(),N.schedule($,k,Y)),R},{}),cancel:R=>{for(let L=0;L<Wl.length;L++)d[Wl[L]].cancel(R)},state:u,steps:d}}const{schedule:Ot,cancel:ua,state:oe,steps:cf}=_v(typeof requestAnimationFrame<"u"?requestAnimationFrame:je,!0),{schedule:Ed}=_v(queueMicrotask,!1);let uo;function $S(){uo=void 0}const un={now:()=>(uo===void 0&&un.set(oe.isProcessing||LS.useManualTiming?oe.timestamp:performance.now()),uo),set:n=>{uo=n,queueMicrotask($S)}},Ie={x:!1,y:!1};function Nv(){return Ie.x||Ie.y}function XS(n){return n==="x"||n==="y"?Ie[n]?null:(Ie[n]=!0,()=>{Ie[n]=!1}):Ie.x||Ie.y?null:(Ie.x=Ie.y=!0,()=>{Ie.x=Ie.y=!1})}function QS(n,i,s){var l;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let u=document;const f=(l=void 0)!==null&&l!==void 0?l:u.querySelectorAll(n);return f?Array.from(f):[]}return Array.from(n)}function Lv(n,i){const s=QS(n),l=new AbortController,u={passive:!0,...i,signal:l.signal};return[s,u,()=>l.abort()]}function mg(n){return!(n.pointerType==="touch"||Nv())}function ZS(n,i,s={}){const[l,u,f]=Lv(n,s),d=m=>{if(!mg(m))return;const{target:h}=m,p=i(h,m);if(typeof p!="function"||!h)return;const v=b=>{mg(b)&&(p(b),h.removeEventListener("pointerleave",v))};h.addEventListener("pointerleave",v,u)};return l.forEach(m=>{m.addEventListener("pointerenter",d,u)}),f}function pg(n,i){const s=`${i}PointerCapture`;if(n.target instanceof Element&&s in n.target&&n.pointerId!==void 0)try{n.target[s](n.pointerId)}catch{}}const kv=(n,i)=>i?n===i?!0:kv(n,i.parentElement):!1,Td=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,KS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FS(n){return KS.has(n.tagName)||n.tabIndex!==-1}const Ir=new WeakSet;function gg(n){return i=>{i.key==="Enter"&&n(i)}}function ff(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const JS=(n,i)=>{const s=n.currentTarget;if(!s)return;const l=gg(()=>{if(Ir.has(s))return;ff(s,"down");const u=gg(()=>{ff(s,"up")}),f=()=>ff(s,"cancel");s.addEventListener("keyup",u,i),s.addEventListener("blur",f,i)});s.addEventListener("keydown",l,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",l),i)};function vg(n){return Td(n)&&!Nv()}function WS(n,i,s={}){const[l,u,f]=Lv(n,s),d=m=>{const h=m.currentTarget;if(!h||!vg(m)||Ir.has(h))return;Ir.add(h),pg(m,"set");const p=i(h,m),v=(E,S)=>{h.removeEventListener("pointerup",b),h.removeEventListener("pointercancel",x),pg(E,"release"),!(!vg(E)||!Ir.has(h))&&(Ir.delete(h),typeof p=="function"&&p(E,{success:S}))},b=E=>{(E.isTrusted?IS(E,h instanceof Element?h.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?v(E,!1):v(E,!(h instanceof Element)||kv(h,E.target))},x=E=>{v(E,!1)};h.addEventListener("pointerup",b,u),h.addEventListener("pointercancel",x,u),h.addEventListener("lostpointercapture",x,u)};return l.forEach(m=>{m=s.useGlobalTarget?window:m;let h=!1;m instanceof HTMLElement&&(h=!0,!FS(m)&&m.getAttribute("tabindex")===null&&(m.tabIndex=0)),m.addEventListener("pointerdown",d,u),h&&m.addEventListener("focus",p=>JS(p,u),u)}),f}function IS(n,i){return n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom}const yg=30,tw=n=>!isNaN(parseFloat(n));class ew{constructor(i,s={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,u=!0)=>{const f=un.now();this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=un.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=tw(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new bd);const l=this.events[i].add(s);return i==="change"?()=>{l(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i,s=!0){!s||!this.passiveEffect?this.updateAndNotify(i,s):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,s,l){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=un.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>yg)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,yg);return Dv(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hs(n,i){return new ew(n,i)}const Uv=A.createContext({strict:!1}),bg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Hi={};for(const n in bg)Hi[n]={isEnabled:i=>bg[n].some(s=>!!i[s])};function nw(n){for(const i in n)Hi[i]={...Hi[i],...n[i]}}const aw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function So(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||aw.has(n)}let Hv=n=>!So(n);function iw(n){n&&(Hv=i=>i.startsWith("on")?!So(i):n(i))}try{iw(require("@emotion/is-prop-valid").default)}catch{}function rw(n,i,s){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(Hv(u)||s===!0&&So(u)||!i&&!So(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}function sw(n){if(typeof Proxy>"u")return n;const i=new Map,s=(...l)=>n(...l);return new Proxy(s,{get:(l,u)=>u==="create"?n:(i.has(u)||i.set(u,n(u)),i.get(u))})}const Lo=A.createContext({});function ko(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ms(n){return typeof n=="string"||Array.isArray(n)}const Ad=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cd=["initial",...Ad];function Uo(n){return ko(n.animate)||Cd.some(i=>ms(n[i]))}function Pv(n){return!!(Uo(n)||n.variants)}function lw(n,i){if(Uo(n)){const{initial:s,animate:l}=n;return{initial:s===!1||ms(s)?s:void 0,animate:ms(l)?l:void 0}}return n.inherit!==!1?i:{}}function ow(n){const{initial:i,animate:s}=lw(n,A.useContext(Lo));return A.useMemo(()=>({initial:i,animate:s}),[xg(i),xg(s)])}function xg(n){return Array.isArray(n)?n.join(" "):n}const uw=Symbol.for("motionComponentSymbol");function zi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function cw(n,i,s){return A.useCallback(l=>{l&&n.onMount&&n.onMount(l),i&&(l?i.mount(l):i.unmount()),s&&(typeof s=="function"?s(l):zi(s)&&(s.current=l))},[i])}const Md=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),fw="framerAppearId",qv="data-"+Md(fw),Gv=A.createContext({});function dw(n,i,s,l,u){var f,d;const{visualElement:m}=A.useContext(Lo),h=A.useContext(Uv),p=A.useContext(No),v=A.useContext(pd).reducedMotion,b=A.useRef(null);l=l||h.renderer,!b.current&&l&&(b.current=l(n,{visualState:i,parent:m,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:v}));const x=b.current,E=A.useContext(Gv);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&hw(b.current,s,u,E);const S=A.useRef(!1);A.useInsertionEffect(()=>{x&&S.current&&x.update(s,p)});const C=s[qv],O=A.useRef(!!C&&!(!((f=window.MotionHandoffIsComplete)===null||f===void 0)&&f.call(window,C))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,C)));return md(()=>{x&&(S.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),Ed.render(x.render),O.current&&x.animationState&&x.animationState.animateChanges())}),A.useEffect(()=>{x&&(!O.current&&x.animationState&&x.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)===null||R===void 0||R.call(window,C)}),O.current=!1))}),x}function hw(n,i,s,l){const{layoutId:u,layout:f,drag:d,dragConstraints:m,layoutScroll:h,layoutRoot:p}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Yv(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||m&&zi(m),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,layoutScroll:h,layoutRoot:p})}function Yv(n){if(n)return n.options.allowProjection!==!1?n.projection:Yv(n.parent)}function mw({preloadedFeatures:n,createVisualElement:i,useRender:s,useVisualState:l,Component:u}){var f,d;n&&nw(n);function m(p,v){let b;const x={...A.useContext(pd),...p,layoutId:pw(p)},{isStatic:E}=x,S=ow(p),C=l(p,E);if(!E&&hd){gw();const O=vw(x);b=O.MeasureLayout,S.visualElement=dw(u,C,x,i,O.ProjectionNode)}return T.jsxs(Lo.Provider,{value:S,children:[b&&S.visualElement?T.jsx(b,{visualElement:S.visualElement,...x}):null,s(u,p,cw(C,S.visualElement,v),C,E,S.visualElement)]})}m.displayName=`motion.${typeof u=="string"?u:`create(${(d=(f=u.displayName)!==null&&f!==void 0?f:u.name)!==null&&d!==void 0?d:""})`}`;const h=A.forwardRef(m);return h[uw]=u,h}function pw({layoutId:n}){const i=A.useContext(dd).id;return i&&n!==void 0?i+"-"+n:n}function gw(n,i){A.useContext(Uv).strict}function vw(n){const{drag:i,layout:s}=Hi;if(!i&&!s)return{};const l={...i,...s};return{MeasureLayout:i!=null&&i.isEnabled(n)||s!=null&&s.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const $v=n=>i=>typeof i=="string"&&i.startsWith(n),Rd=$v("--"),yw=$v("var(--"),zd=n=>yw(n)?bw.test(n.split("/*")[0].trim()):!1,bw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ps={};function xw(n){for(const i in n)ps[i]=n[i],Rd(i)&&(ps[i].isCSSVariable=!0)}const Xi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ga=new Set(Xi);function Xv(n,{layout:i,layoutId:s}){return Ga.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!ps[n]||n==="opacity")}const me=n=>!!(n&&n.getVelocity),Qv=(n,i)=>i&&typeof n=="number"?i.transform(n):n,_n=(n,i,s)=>s>i?i:s<n?n:s,Qi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},gs={...Qi,transform:n=>_n(0,1,n)},Il={...Qi,default:1},Ds=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),oa=Ds("deg"),cn=Ds("%"),st=Ds("px"),Sw=Ds("vh"),ww=Ds("vw"),Sg={...cn,parse:n=>cn.parse(n)/100,transform:n=>cn.transform(n*100)},Ew={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st},Tw={rotate:oa,rotateX:oa,rotateY:oa,rotateZ:oa,scale:Il,scaleX:Il,scaleY:Il,scaleZ:Il,skew:oa,skewX:oa,skewY:oa,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:gs,originX:Sg,originY:Sg,originZ:st},wg={...Qi,transform:Math.round},Dd={...Ew,...Tw,zIndex:wg,size:st,fillOpacity:gs,strokeOpacity:gs,numOctaves:wg},Aw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Cw=Xi.length;function Mw(n,i,s){let l="",u=!0;for(let f=0;f<Cw;f++){const d=Xi[f],m=n[d];if(m===void 0)continue;let h=!0;if(typeof m=="number"?h=m===(d.startsWith("scale")?1:0):h=parseFloat(m)===0,!h||s){const p=Qv(m,Dd[d]);if(!h){u=!1;const v=Aw[d]||d;l+=`${v}(${p}) `}s&&(i[d]=p)}}return l=l.trim(),s?l=s(i,u?"":l):u&&(l="none"),l}function Od(n,i,s){const{style:l,vars:u,transformOrigin:f}=n;let d=!1,m=!1;for(const h in i){const p=i[h];if(Ga.has(h)){d=!0;continue}else if(Rd(h)){u[h]=p;continue}else{const v=Qv(p,Dd[h]);h.startsWith("origin")?(m=!0,f[h]=v):l[h]=v}}if(i.transform||(d||s?l.transform=Mw(i,n.transform,s):l.transform&&(l.transform="none")),m){const{originX:h="50%",originY:p="50%",originZ:v=0}=f;l.transformOrigin=`${h} ${p} ${v}`}}const jd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Zv(n,i,s){for(const l in i)!me(i[l])&&!Xv(l,s)&&(n[l]=i[l])}function Rw({transformTemplate:n},i){return A.useMemo(()=>{const s=jd();return Od(s,i,n),Object.assign({},s.vars,s.style)},[i])}function zw(n,i){const s=n.style||{},l={};return Zv(l,s,n),Object.assign(l,Rw(n,i)),l}function Dw(n,i){const s={},l=zw(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=l,s}const Ow=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bd(n){return typeof n!="string"||n.includes("-")?!1:!!(Ow.indexOf(n)>-1||/[A-Z]/u.test(n))}const jw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Bw={offset:"strokeDashoffset",array:"strokeDasharray"};function Vw(n,i,s=1,l=0,u=!0){n.pathLength=1;const f=u?jw:Bw;n[f.offset]=st.transform(-l);const d=st.transform(i),m=st.transform(s);n[f.array]=`${d} ${m}`}function Eg(n,i,s){return typeof n=="string"?n:st.transform(i+s*n)}function _w(n,i,s){const l=Eg(i,n.x,n.width),u=Eg(s,n.y,n.height);return`${l} ${u}`}function Vd(n,{attrX:i,attrY:s,attrScale:l,originX:u,originY:f,pathLength:d,pathSpacing:m=1,pathOffset:h=0,...p},v,b){if(Od(n,p,b),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:E,dimensions:S}=n;x.transform&&(S&&(E.transform=x.transform),delete x.transform),S&&(u!==void 0||f!==void 0||E.transform)&&(E.transformOrigin=_w(S,u!==void 0?u:.5,f!==void 0?f:.5)),i!==void 0&&(x.x=i),s!==void 0&&(x.y=s),l!==void 0&&(x.scale=l),d!==void 0&&Vw(x,d,m,h,!1)}const Kv=()=>({...jd(),attrs:{}}),_d=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Nw(n,i,s,l){const u=A.useMemo(()=>{const f=Kv();return Vd(f,i,_d(l),n.transformTemplate),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Zv(f,n.style,n),u.style={...f,...u.style}}return u}function Lw(n=!1){return(s,l,u,{latestValues:f},d)=>{const h=(Bd(s)?Nw:Dw)(l,f,d,s),p=rw(l,typeof s=="string",n),v=s!==A.Fragment?{...p,...h,ref:u}:{},{children:b}=l,x=A.useMemo(()=>me(b)?b.get():b,[b]);return A.createElement(s,{...v,children:x})}}function Tg(n){const i=[{},{}];return n==null||n.values.forEach((s,l)=>{i[0][l]=s.get(),i[1][l]=s.getVelocity()}),i}function Nd(n,i,s,l){if(typeof i=="function"){const[u,f]=Tg(l);i=i(s!==void 0?s:n.custom,u,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,f]=Tg(l);i=i(s!==void 0?s:n.custom,u,f)}return i}const _f=n=>Array.isArray(n),kw=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Uw=n=>_f(n)?n[n.length-1]||0:n;function co(n){const i=me(n)?n.get():n;return kw(i)?i.toValue():i}function Hw({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:s},l,u,f){const d={latestValues:Pw(l,u,f,n),renderState:i()};return s&&(d.onMount=m=>s({props:l,current:m,...d}),d.onUpdate=m=>s(m)),d}const Fv=n=>(i,s)=>{const l=A.useContext(Lo),u=A.useContext(No),f=()=>Hw(n,i,l,u);return s?f():_o(f)};function Pw(n,i,s,l){const u={},f=l(n,{});for(const x in f)u[x]=co(f[x]);let{initial:d,animate:m}=n;const h=Uo(n),p=Pv(n);i&&p&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),m===void 0&&(m=i.animate));let v=s?s.initial===!1:!1;v=v||d===!1;const b=v?m:d;if(b&&typeof b!="boolean"&&!ko(b)){const x=Array.isArray(b)?b:[b];for(let E=0;E<x.length;E++){const S=Nd(n,x[E]);if(S){const{transitionEnd:C,transition:O,...R}=S;for(const L in R){let N=R[L];if(Array.isArray(N)){const $=v?N.length-1:0;N=N[$]}N!==null&&(u[L]=N)}for(const L in C)u[L]=C[L]}}}return u}function Ld(n,i,s){var l;const{style:u}=n,f={};for(const d in u)(me(u[d])||i.style&&me(i.style[d])||Xv(d,n)||((l=s==null?void 0:s.getValue(d))===null||l===void 0?void 0:l.liveStyle)!==void 0)&&(f[d]=u[d]);return f}const qw={useVisualState:Fv({scrapeMotionValuesFromProps:Ld,createRenderState:jd})};function Jv(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}function Wv(n,{style:i,vars:s},l,u){Object.assign(n.style,i,u&&u.getProjectionStyles(l));for(const f in s)n.style.setProperty(f,s[f])}const Iv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ty(n,i,s,l){Wv(n,i,void 0,l);for(const u in i.attrs)n.setAttribute(Iv.has(u)?u:Md(u),i.attrs[u])}function ey(n,i,s){const l=Ld(n,i,s);for(const u in n)if(me(n[u])||me(i[u])){const f=Xi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[f]=n[u]}return l}const Ag=["x","y","width","height","cx","cy","r"],Gw={useVisualState:Fv({scrapeMotionValuesFromProps:ey,createRenderState:Kv,onUpdate:({props:n,prevProps:i,current:s,renderState:l,latestValues:u})=>{if(!s)return;let f=!!n.drag;if(!f){for(const m in u)if(Ga.has(m)){f=!0;break}}if(!f)return;let d=!i;if(i)for(let m=0;m<Ag.length;m++){const h=Ag[m];n[h]!==i[h]&&(d=!0)}d&&Ot.read(()=>{Jv(s,l),Ot.render(()=>{Vd(l,u,_d(s.tagName),n.transformTemplate),ty(s,l)})})}})};function Yw(n,i){return function(l,{forwardMotionProps:u}={forwardMotionProps:!1}){const d={...Bd(l)?Gw:qw,preloadedFeatures:n,useRender:Lw(u),createVisualElement:i,Component:l};return mw(d)}}function vs(n,i,s){const l=n.getProps();return Nd(l,i,s!==void 0?s:l.custom,n)}const ny=new Set(["width","height","top","left","right","bottom",...Xi]);function $w(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,hs(s))}function kd(n,i){const s=vs(n,i);let{transitionEnd:l={},transition:u={},...f}=s||{};f={...f,...l};for(const d in f){const m=Uw(f[d]);$w(n,d,m)}}function Xw(n){return!!(me(n)&&n.add)}function Nf(n,i){const s=n.getValue("willChange");if(Xw(s))return s.add(i)}function ay(n){return n.props[qv]}const iy=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,Qw=1e-7,Zw=12;function Kw(n,i,s,l,u){let f,d,m=0;do d=i+(s-i)/2,f=iy(d,l,u)-n,f>0?s=d:i=d;while(Math.abs(f)>Qw&&++m<Zw);return d}function Os(n,i,s,l){if(n===i&&s===l)return je;const u=f=>Kw(f,0,1,n,s);return f=>f===0||f===1?f:iy(u(f),i,l)}const ry=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,sy=n=>i=>1-n(1-i),ly=Os(.33,1.53,.69,.99),Ud=sy(ly),oy=ry(Ud),uy=n=>(n*=2)<1?.5*Ud(n):.5*(2-Math.pow(2,-10*(n-1))),Hd=n=>1-Math.sin(Math.acos(n)),cy=sy(Hd),fy=ry(Hd),dy=n=>/^0[^.\s]+$/u.test(n);function Fw(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||dy(n):!0}const es=n=>Math.round(n*1e5)/1e5,Pd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jw(n){return n==null}const Ww=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,qd=(n,i)=>s=>!!(typeof s=="string"&&Ww.test(s)&&s.startsWith(n)||i&&!Jw(s)&&Object.prototype.hasOwnProperty.call(s,i)),hy=(n,i,s)=>l=>{if(typeof l!="string")return l;const[u,f,d,m]=l.match(Pd);return{[n]:parseFloat(u),[i]:parseFloat(f),[s]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},Iw=n=>_n(0,255,n),df={...Qi,transform:n=>Math.round(Iw(n))},ka={test:qd("rgb","red"),parse:hy("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:l=1})=>"rgba("+df.transform(n)+", "+df.transform(i)+", "+df.transform(s)+", "+es(gs.transform(l))+")"};function t6(n){let i="",s="",l="",u="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),i+=i,s+=s,l+=l,u+=u),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const Lf={test:qd("#"),parse:t6,transform:ka.transform},Di={test:qd("hsl","hue"),parse:hy("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:l=1})=>"hsla("+Math.round(n)+", "+cn.transform(es(i))+", "+cn.transform(es(s))+", "+es(gs.transform(l))+")"},he={test:n=>ka.test(n)||Lf.test(n)||Di.test(n),parse:n=>ka.test(n)?ka.parse(n):Di.test(n)?Di.parse(n):Lf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ka.transform(n):Di.transform(n)},e6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function n6(n){var i,s;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Pd))===null||i===void 0?void 0:i.length)||0)+(((s=n.match(e6))===null||s===void 0?void 0:s.length)||0)>0}const my="number",py="color",a6="var",i6="var(",Cg="${}",r6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ys(n){const i=n.toString(),s=[],l={color:[],number:[],var:[]},u=[];let f=0;const m=i.replace(r6,h=>(he.test(h)?(l.color.push(f),u.push(py),s.push(he.parse(h))):h.startsWith(i6)?(l.var.push(f),u.push(a6),s.push(h)):(l.number.push(f),u.push(my),s.push(parseFloat(h))),++f,Cg)).split(Cg);return{values:s,split:m,indexes:l,types:u}}function gy(n){return ys(n).values}function vy(n){const{split:i,types:s}=ys(n),l=i.length;return u=>{let f="";for(let d=0;d<l;d++)if(f+=i[d],u[d]!==void 0){const m=s[d];m===my?f+=es(u[d]):m===py?f+=he.transform(u[d]):f+=u[d]}return f}}const s6=n=>typeof n=="number"?0:n;function l6(n){const i=gy(n);return vy(n)(i.map(s6))}const ca={test:n6,parse:gy,createTransformer:vy,getAnimatableNone:l6},o6=new Set(["brightness","contrast","saturate","opacity"]);function u6(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[l]=s.match(Pd)||[];if(!l)return n;const u=s.replace(l,"");let f=o6.has(i)?1:0;return l!==s&&(f*=100),i+"("+f+u+")"}const c6=/\b([a-z-]*)\(.*?\)/gu,kf={...ca,getAnimatableNone:n=>{const i=n.match(c6);return i?i.map(u6).join(" "):n}},f6={...Dd,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:kf,WebkitFilter:kf},yy=n=>f6[n];function by(n,i){let s=yy(n);return s!==kf&&(s=ca),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const d6=new Set(["auto","none","0"]);function h6(n,i,s){let l=0,u;for(;l<n.length&&!u;){const f=n[l];typeof f=="string"&&!d6.has(f)&&ys(f).values.length&&(u=n[l]),l++}if(u&&s)for(const f of i)n[f]=by(s,u)}const Ua=n=>n*180/Math.PI,Uf=n=>{const i=Ua(Math.atan2(n[1],n[0]));return Hf(i)},m6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Uf,rotateZ:Uf,skewX:n=>Ua(Math.atan(n[1])),skewY:n=>Ua(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Hf=n=>(n=n%360,n<0&&(n+=360),n),Mg=Uf,Rg=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),zg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),p6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Rg,scaleY:zg,scale:n=>(Rg(n)+zg(n))/2,rotateX:n=>Hf(Ua(Math.atan2(n[6],n[5]))),rotateY:n=>Hf(Ua(Math.atan2(-n[2],n[0]))),rotateZ:Mg,rotate:Mg,skewX:n=>Ua(Math.atan(n[4])),skewY:n=>Ua(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Dg(n){return n.includes("scale")?1:0}function Pf(n,i){if(!n||n==="none")return Dg(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(s)l=p6,u=s;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=m6,u=m}if(!u)return Dg(i);const f=l[i],d=u[1].split(",").map(v6);return typeof f=="function"?f(d):d[f]}const g6=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return Pf(s,i)};function v6(n){return parseFloat(n.trim())}const Og=n=>n===Qi||n===st,y6=new Set(["x","y","z"]),b6=Xi.filter(n=>!y6.has(n));function x6(n){const i=[];return b6.forEach(s=>{const l=n.getValue(s);l!==void 0&&(i.push([s,l.get()]),l.set(s.startsWith("scale")?1:0))}),i}const Pi={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Pf(i,"x"),y:(n,{transform:i})=>Pf(i,"y")};Pi.translateX=Pi.x;Pi.translateY=Pi.y;const qa=new Set;let qf=!1,Gf=!1;function xy(){if(Gf){const n=Array.from(qa).filter(l=>l.needsMeasurement),i=new Set(n.map(l=>l.element)),s=new Map;i.forEach(l=>{const u=x6(l);u.length&&(s.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const u=s.get(l);u&&u.forEach(([f,d])=>{var m;(m=l.getValue(f))===null||m===void 0||m.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Gf=!1,qf=!1,qa.forEach(n=>n.complete()),qa.clear()}function Sy(){qa.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Gf=!0)})}function S6(){Sy(),xy()}class Gd{constructor(i,s,l,u,f,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=l,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(qa.add(this),qf||(qf=!0,Ot.read(Sy),Ot.resolveKeyframes(xy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:l,motionValue:u}=this;for(let f=0;f<i.length;f++)if(i[f]===null)if(f===0){const d=u==null?void 0:u.get(),m=i[i.length-1];if(d!==void 0)i[0]=d;else if(l&&s){const h=l.readValue(s,m);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=m),u&&d===void 0&&u.set(i[0])}else i[f]=i[f-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),qa.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,qa.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const wy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),w6=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function E6(n){const i=w6.exec(n);if(!i)return[,];const[,s,l,u]=i;return[`--${s??l}`,u]}function Ey(n,i,s=1){const[l,u]=E6(n);if(!l)return;const f=window.getComputedStyle(i).getPropertyValue(l);if(f){const d=f.trim();return wy(d)?parseFloat(d):d}return zd(u)?Ey(u,i,s+1):u}const Ty=n=>i=>i.test(n),T6={test:n=>n==="auto",parse:n=>n},Ay=[Qi,st,cn,oa,ww,Sw,T6],jg=n=>Ay.find(Ty(n));class Cy extends Gd{constructor(i,s,l,u,f){super(i,s,l,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:l}=this;if(!s||!s.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let p=i[h];if(typeof p=="string"&&(p=p.trim(),zd(p))){const v=Ey(p,s.current);v!==void 0&&(i[h]=v),h===i.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!ny.has(l)||i.length!==2)return;const[u,f]=i,d=jg(u),m=jg(f);if(d!==m)if(Og(d)&&Og(m))for(let h=0;h<i.length;h++){const p=i[h];typeof p=="string"&&(i[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,l=[];for(let u=0;u<i.length;u++)Fw(i[u])&&l.push(u);l.length&&h6(i,l,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Pi[l](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const u=s[s.length-1];u!==void 0&&i.getValue(l,u).jump(u,!1)}measureEndState(){var i;const{element:s,name:l,unresolvedKeyframes:u}=this;if(!s||!s.current)return;const f=s.getValue(l);f&&f.jump(this.measuredOrigin,!1);const d=u.length-1,m=u[d];u[d]=Pi[l](s.measureViewportBox(),window.getComputedStyle(s.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,p])=>{s.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const Bg=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ca.test(n)||n==="0")&&!n.startsWith("url("));function A6(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function C6(n,i,s,l){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=Bg(u,i),m=Bg(f,i);return!d||!m?!1:A6(n)||(s==="spring"||Sd(s))&&l}const M6=n=>n!==null;function Ho(n,{repeat:i,repeatType:s="loop"},l){const u=n.filter(M6),f=i&&s!=="loop"&&i%2===1?0:u.length-1;return!f||l===void 0?u[f]:l}const R6=40;class My{constructor({autoplay:i=!0,delay:s=0,type:l="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=un.now(),this.options={autoplay:i,delay:s,type:l,repeat:u,repeatDelay:f,repeatType:d,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>R6?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&S6(),this._resolved}onKeyframesResolved(i,s){this.resolvedAt=un.now(),this.hasAttemptedResolve=!0;const{name:l,type:u,velocity:f,delay:d,onComplete:m,onUpdate:h,isGenerator:p}=this.options;if(!p&&!C6(i,l,u,f))if(d)this.options.duration=0;else{h&&h(Ho(i,this.options,s)),m&&m(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,s);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:s,...v},this.onPostResolved())}onPostResolved(){}then(i,s){return this.currentFinishedPromise.then(i,s)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const _t=(n,i,s)=>n+(i-n)*s;function hf(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function z6({hue:n,saturation:i,lightness:s,alpha:l}){n/=360,i/=100,s/=100;let u=0,f=0,d=0;if(!i)u=f=d=s;else{const m=s<.5?s*(1+i):s+i-s*i,h=2*s-m;u=hf(h,m,n+1/3),f=hf(h,m,n),d=hf(h,m,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function wo(n,i){return s=>s>0?i:n}const mf=(n,i,s)=>{const l=n*n,u=s*(i*i-l)+l;return u<0?0:Math.sqrt(u)},D6=[Lf,ka,Di],O6=n=>D6.find(i=>i.test(n));function Vg(n){const i=O6(n);if(!i)return!1;let s=i.parse(n);return i===Di&&(s=z6(s)),s}const _g=(n,i)=>{const s=Vg(n),l=Vg(i);if(!s||!l)return wo(n,i);const u={...s};return f=>(u.red=mf(s.red,l.red,f),u.green=mf(s.green,l.green,f),u.blue=mf(s.blue,l.blue,f),u.alpha=_t(s.alpha,l.alpha,f),ka.transform(u))},j6=(n,i)=>s=>i(n(s)),js=(...n)=>n.reduce(j6),Yf=new Set(["none","hidden"]);function B6(n,i){return Yf.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function V6(n,i){return s=>_t(n,i,s)}function Yd(n){return typeof n=="number"?V6:typeof n=="string"?zd(n)?wo:he.test(n)?_g:L6:Array.isArray(n)?Ry:typeof n=="object"?he.test(n)?_g:_6:wo}function Ry(n,i){const s=[...n],l=s.length,u=n.map((f,d)=>Yd(f)(f,i[d]));return f=>{for(let d=0;d<l;d++)s[d]=u[d](f);return s}}function _6(n,i){const s={...n,...i},l={};for(const u in s)n[u]!==void 0&&i[u]!==void 0&&(l[u]=Yd(n[u])(n[u],i[u]));return u=>{for(const f in l)s[f]=l[f](u);return s}}function N6(n,i){var s;const l=[],u={color:0,var:0,number:0};for(let f=0;f<i.values.length;f++){const d=i.types[f],m=n.indexes[d][u[d]],h=(s=n.values[m])!==null&&s!==void 0?s:0;l[f]=h,u[d]++}return l}const L6=(n,i)=>{const s=ca.createTransformer(i),l=ys(n),u=ys(i);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?Yf.has(n)&&!u.values.length||Yf.has(i)&&!l.values.length?B6(n,i):js(Ry(N6(l,u),u.values),s):wo(n,i)};function zy(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?_t(n,i,s):Yd(n)(n,i)}const k6=5;function Dy(n,i,s){const l=Math.max(i-k6,0);return Dv(s-n(l),i-l)}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ng=.001;function U6({duration:n=Ht.duration,bounce:i=Ht.bounce,velocity:s=Ht.velocity,mass:l=Ht.mass}){let u,f,d=1-i;d=_n(Ht.minDamping,Ht.maxDamping,d),n=_n(Ht.minDuration,Ht.maxDuration,Bn(n)),d<1?(u=p=>{const v=p*d,b=v*n,x=v-s,E=$f(p,d),S=Math.exp(-b);return Ng-x/E*S},f=p=>{const b=p*d*n,x=b*s+s,E=Math.pow(d,2)*Math.pow(p,2)*n,S=Math.exp(-b),C=$f(Math.pow(p,2),d);return(-u(p)+Ng>0?-1:1)*((x-E)*S)/C}):(u=p=>{const v=Math.exp(-p*n),b=(p-s)*n+1;return-.001+v*b},f=p=>{const v=Math.exp(-p*n),b=(s-p)*(n*n);return v*b});const m=5/n,h=P6(u,f,m);if(n=jn(n),isNaN(h))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:n};{const p=Math.pow(h,2)*l;return{stiffness:p,damping:d*2*Math.sqrt(l*p),duration:n}}}const H6=12;function P6(n,i,s){let l=s;for(let u=1;u<H6;u++)l=l-n(l)/i(l);return l}function $f(n,i){return n*Math.sqrt(1-i*i)}const q6=["duration","bounce"],G6=["stiffness","damping","mass"];function Lg(n,i){return i.some(s=>n[s]!==void 0)}function Y6(n){let i={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...n};if(!Lg(n,G6)&&Lg(n,q6))if(n.visualDuration){const s=n.visualDuration,l=2*Math.PI/(s*1.2),u=l*l,f=2*_n(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:Ht.mass,stiffness:u,damping:f}}else{const s=U6(n);i={...i,...s,mass:Ht.mass},i.isResolvedFromDuration=!0}return i}function Oy(n=Ht.visualDuration,i=Ht.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:l,restDelta:u}=s;const f=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],m={done:!1,value:f},{stiffness:h,damping:p,mass:v,duration:b,velocity:x,isResolvedFromDuration:E}=Y6({...s,velocity:-Bn(s.velocity||0)}),S=x||0,C=p/(2*Math.sqrt(h*v)),O=d-f,R=Bn(Math.sqrt(h/v)),L=Math.abs(O)<5;l||(l=L?Ht.restSpeed.granular:Ht.restSpeed.default),u||(u=L?Ht.restDelta.granular:Ht.restDelta.default);let N;if(C<1){const k=$f(R,C);N=Y=>{const Q=Math.exp(-C*R*Y);return d-Q*((S+C*R*O)/k*Math.sin(k*Y)+O*Math.cos(k*Y))}}else if(C===1)N=k=>d-Math.exp(-R*k)*(O+(S+R*O)*k);else{const k=R*Math.sqrt(C*C-1);N=Y=>{const Q=Math.exp(-C*R*Y),F=Math.min(k*Y,300);return d-Q*((S+C*R*O)*Math.sinh(F)+k*O*Math.cosh(F))/k}}const $={calculatedDuration:E&&b||null,next:k=>{const Y=N(k);if(E)m.done=k>=b;else{let Q=0;C<1&&(Q=k===0?jn(S):Dy(N,k,Y));const F=Math.abs(Q)<=l,X=Math.abs(d-Y)<=u;m.done=F&&X}return m.value=m.done?d:Y,m},toString:()=>{const k=Math.min(Ov($),Bf),Y=jv(Q=>$.next(k*Q).value,k,30);return k+"ms "+Y}};return $}function kg({keyframes:n,velocity:i=0,power:s=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:m,max:h,restDelta:p=.5,restSpeed:v}){const b=n[0],x={done:!1,value:b},E=F=>m!==void 0&&F<m||h!==void 0&&F>h,S=F=>m===void 0?h:h===void 0||Math.abs(m-F)<Math.abs(h-F)?m:h;let C=s*i;const O=b+C,R=d===void 0?O:d(O);R!==O&&(C=R-b);const L=F=>-C*Math.exp(-F/l),N=F=>R+L(F),$=F=>{const X=L(F),tt=N(F);x.done=Math.abs(X)<=p,x.value=x.done?R:tt};let k,Y;const Q=F=>{E(x.value)&&(k=F,Y=Oy({keyframes:[x.value,S(x.value)],velocity:Dy(N,F,x.value),damping:u,stiffness:f,restDelta:p,restSpeed:v}))};return Q(0),{calculatedDuration:null,next:F=>{let X=!1;return!Y&&k===void 0&&(X=!0,$(F),Q(F)),k!==void 0&&F>=k?Y.next(F-k):(!X&&$(F),x)}}}const $6=Os(.42,0,1,1),X6=Os(0,0,.58,1),jy=Os(.42,0,.58,1),Q6=n=>Array.isArray(n)&&typeof n[0]!="number",Z6={linear:je,easeIn:$6,easeInOut:jy,easeOut:X6,circIn:Hd,circInOut:fy,circOut:cy,backIn:Ud,backInOut:oy,backOut:ly,anticipate:uy},Ug=n=>{if(wd(n)){zv(n.length===4);const[i,s,l,u]=n;return Os(i,s,l,u)}else if(typeof n=="string")return Z6[n];return n};function K6(n,i,s){const l=[],u=s||zy,f=n.length-1;for(let d=0;d<f;d++){let m=u(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||je:i;m=js(h,m)}l.push(m)}return l}function F6(n,i,{clamp:s=!0,ease:l,mixer:u}={}){const f=n.length;if(zv(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const m=K6(i,l,u),h=m.length,p=v=>{if(d&&v<n[0])return i[0];let b=0;if(h>1)for(;b<n.length-2&&!(v<n[b+1]);b++);const x=Ui(n[b],n[b+1],v);return m[b](x)};return s?v=>p(_n(n[0],n[f-1],v)):p}function J6(n,i){const s=n[n.length-1];for(let l=1;l<=i;l++){const u=Ui(0,i,l);n.push(_t(s,1,u))}}function W6(n){const i=[0];return J6(i,n.length-1),i}function I6(n,i){return n.map(s=>s*i)}function t8(n,i){return n.map(()=>i||jy).splice(0,n.length-1)}function Eo({duration:n=300,keyframes:i,times:s,ease:l="easeInOut"}){const u=Q6(l)?l.map(Ug):Ug(l),f={done:!1,value:i[0]},d=I6(s&&s.length===i.length?s:W6(i),n),m=F6(d,i,{ease:Array.isArray(u)?u:t8(i,u)});return{calculatedDuration:n,next:h=>(f.value=m(h),f.done=h>=n,f)}}const e8=n=>{const i=({timestamp:s})=>n(s);return{start:()=>Ot.update(i,!0),stop:()=>ua(i),now:()=>oe.isProcessing?oe.timestamp:un.now()}},n8={decay:kg,inertia:kg,tween:Eo,keyframes:Eo,spring:Oy},a8=n=>n/100;class $d extends My{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:s,motionValue:l,element:u,keyframes:f}=this.options,d=(u==null?void 0:u.KeyframeResolver)||Gd,m=(h,p)=>this.onKeyframesResolved(h,p);this.resolver=new d(f,m,s,l,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=this.options,m=Sd(s)?s:n8[s]||Eo;let h,p;m!==Eo&&typeof i[0]!="number"&&(h=js(a8,zy(i[0],i[1])),i=[0,100]);const v=m({...this.options,keyframes:i});f==="mirror"&&(p=m({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=Ov(v));const{calculatedDuration:b}=v,x=b+u,E=x*(l+1)-u;return{generator:v,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:x,totalDuration:E}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,s=!1){const{resolved:l}=this;if(!l){const{keyframes:F}=this.options;return{done:!0,value:F[F.length-1]}}const{finalKeyframe:u,generator:f,mirroredGenerator:d,mapPercentToKeyframes:m,keyframes:h,calculatedDuration:p,totalDuration:v,resolvedDuration:b}=l;if(this.startTime===null)return f.next(0);const{delay:x,repeat:E,repeatType:S,repeatDelay:C,onUpdate:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),s?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const R=this.currentTime-x*(this.speed>=0?1:-1),L=this.speed>=0?R<0:R>v;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let N=this.currentTime,$=f;if(E){const F=Math.min(this.currentTime,v)/b;let X=Math.floor(F),tt=F%1;!tt&&F>=1&&(tt=1),tt===1&&X--,X=Math.min(X,E+1),!!(X%2)&&(S==="reverse"?(tt=1-tt,C&&(tt-=C/b)):S==="mirror"&&($=d)),N=_n(0,1,tt)*b}const k=L?{done:!1,value:h[0]}:$.next(N);m&&(k.value=m(k.value));let{done:Y}=k;!L&&p!==null&&(Y=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return Q&&u!==void 0&&(k.value=Ho(h,this.options,u)),O&&O(k.value),Q&&this.finish(),k}get duration(){const{resolved:i}=this;return i?Bn(i.calculatedDuration):0}get time(){return Bn(this.currentTime)}set time(i){i=jn(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=Bn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=e8,onPlay:s,startTime:l}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),s&&s();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=l??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const i8=new Set(["opacity","clipPath","filter","transform"]);function r8(n,i,s,{delay:l=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:m="easeInOut",times:h}={}){const p={[i]:s};h&&(p.offset=h);const v=Vv(m,u);return Array.isArray(v)&&(p.easing=v),n.animate(p,{delay:l,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"})}const s8=yd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),To=10,l8=2e4;function o8(n){return Sd(n.type)||n.type==="spring"||!Bv(n.ease)}function u8(n,i){const s=new $d({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let l={done:!1,value:n[0]};const u=[];let f=0;for(;!l.done&&f<l8;)l=s.sample(f),u.push(l.value),f+=To;return{times:void 0,keyframes:u,duration:f-To,ease:"linear"}}const By={anticipate:uy,backInOut:oy,circInOut:fy};function c8(n){return n in By}class Hg extends My{constructor(i){super(i);const{name:s,motionValue:l,element:u,keyframes:f}=this.options;this.resolver=new Cy(f,(d,m)=>this.onKeyframesResolved(d,m),s,l,u),this.resolver.scheduleResolve()}initPlayback(i,s){let{duration:l=300,times:u,ease:f,type:d,motionValue:m,name:h,startTime:p}=this.options;if(!m.owner||!m.owner.current)return!1;if(typeof f=="string"&&xo()&&c8(f)&&(f=By[f]),o8(this.options)){const{onComplete:b,onUpdate:x,motionValue:E,element:S,...C}=this.options,O=u8(i,C);i=O.keyframes,i.length===1&&(i[1]=i[0]),l=O.duration,u=O.times,f=O.ease,d="keyframes"}const v=r8(m.owner.current,h,i,{...this.options,duration:l,times:u,ease:f});return v.startTime=p??this.calcStartTime(),this.pendingTimeline?(hg(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:b}=this.options;m.set(Ho(i,this.options,s)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:l,times:u,type:d,ease:f,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:s}=i;return Bn(s)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:s}=i;return Bn(s.currentTime||0)}set time(i){const{resolved:s}=this;if(!s)return;const{animation:l}=s;l.currentTime=jn(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:s}=i;return s.playbackRate}set speed(i){const{resolved:s}=this;if(!s)return;const{animation:l}=s;l.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:s}=i;return s.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:s}=i;return s.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:s}=this;if(!s)return je;const{animation:l}=s;hg(l,i)}return je}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.playState==="finished"&&this.updateFinishedPromise(),s.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:s,keyframes:l,duration:u,type:f,ease:d,times:m}=i;if(s.playState==="idle"||s.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:v,onComplete:b,element:x,...E}=this.options,S=new $d({...E,keyframes:l,duration:u,type:f,ease:d,times:m,isGenerator:!0}),C=jn(this.time);p.setWithVelocity(S.sample(C-To).value,S.sample(C).value,To)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:s,name:l,repeatDelay:u,repeatType:f,damping:d,type:m}=i;if(!s||!s.owner||!(s.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=s.owner.getProps();return s8()&&l&&i8.has(l)&&!h&&!p&&!u&&f!=="mirror"&&d!==0&&m!=="inertia"}}const f8={type:"spring",stiffness:500,damping:25,restSpeed:10},d8=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),h8={type:"keyframes",duration:.8},m8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},p8=(n,{keyframes:i})=>i.length>2?h8:Ga.has(n)?n.startsWith("scale")?d8(i[1]):f8:m8;function g8({when:n,delay:i,delayChildren:s,staggerChildren:l,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:m,from:h,elapsed:p,...v}){return!!Object.keys(v).length}const Xd=(n,i,s,l={},u,f)=>d=>{const m=xd(l,n)||{},h=m.delay||l.delay||0;let{elapsed:p=0}=l;p=p-jn(h);let v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...m,delay:-p,onUpdate:x=>{i.set(x),m.onUpdate&&m.onUpdate(x)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:i,element:f?void 0:u};g8(m)||(v={...v,...p8(n,v)}),v.duration&&(v.duration=jn(v.duration)),v.repeatDelay&&(v.repeatDelay=jn(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(b=!0)),v.allowFlatten=!m.type&&!m.ease,b&&!f&&i.get()!==void 0){const x=Ho(v.keyframes,m);if(x!==void 0)return Ot.update(()=>{v.onUpdate(x),v.onComplete()}),new HS([])}return!f&&Hg.supports(v)?new Hg(v):new $d(v)};function v8({protectedKeys:n,needsAnimating:i},s){const l=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,l}function Vy(n,i,{delay:s=0,transitionOverride:l,type:u}={}){var f;let{transition:d=n.getDefaultTransition(),transitionEnd:m,...h}=i;l&&(d=l);const p=[],v=u&&n.animationState&&n.animationState.getState()[u];for(const b in h){const x=n.getValue(b,(f=n.latestValues[b])!==null&&f!==void 0?f:null),E=h[b];if(E===void 0||v&&v8(v,b))continue;const S={delay:s,...xd(d||{},b)};let C=!1;if(window.MotionHandoffAnimation){const R=ay(n);if(R){const L=window.MotionHandoffAnimation(R,b,Ot);L!==null&&(S.startTime=L,C=!0)}}Nf(n,b),x.start(Xd(b,x,E,n.shouldReduceMotion&&ny.has(b)?{type:!1}:S,n,C));const O=x.animation;O&&p.push(O)}return m&&Promise.all(p).then(()=>{Ot.update(()=>{m&&kd(n,m)})}),p}function Xf(n,i,s={}){var l;const u=vs(n,i,s.type==="exit"?(l=n.presenceContext)===null||l===void 0?void 0:l.custom:void 0);let{transition:f=n.getDefaultTransition()||{}}=u||{};s.transitionOverride&&(f=s.transitionOverride);const d=u?()=>Promise.all(Vy(n,u,s)):()=>Promise.resolve(),m=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:v=0,staggerChildren:b,staggerDirection:x}=f;return y8(n,i,v+p,b,x,s)}:()=>Promise.resolve(),{when:h}=f;if(h){const[p,v]=h==="beforeChildren"?[d,m]:[m,d];return p().then(()=>v())}else return Promise.all([d(),m(s.delay)])}function y8(n,i,s=0,l=0,u=1,f){const d=[],m=(n.variantChildren.size-1)*l,h=u===1?(p=0)=>p*l:(p=0)=>m-p*l;return Array.from(n.variantChildren).sort(b8).forEach((p,v)=>{p.notify("AnimationStart",i),d.push(Xf(p,i,{...f,delay:s+h(v)}).then(()=>p.notify("AnimationComplete",i)))}),Promise.all(d)}function b8(n,i){return n.sortNodePosition(i)}function _y(n,i,s={}){n.notify("AnimationStart",i);let l;if(Array.isArray(i)){const u=i.map(f=>Xf(n,f,s));l=Promise.all(u)}else if(typeof i=="string")l=Xf(n,i,s);else{const u=typeof i=="function"?vs(n,i,s.custom):i;l=Promise.all(Vy(n,u,s))}return l.then(()=>{n.notify("AnimationComplete",i)})}function Ny(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let l=0;l<s;l++)if(i[l]!==n[l])return!1;return!0}const x8=Cd.length;function Ly(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Ly(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<x8;s++){const l=Cd[s],u=n.props[l];(ms(u)||u===!1)&&(i[l]=u)}return i}const S8=[...Ad].reverse(),w8=Ad.length;function E8(n){return i=>Promise.all(i.map(({animation:s,options:l})=>_y(n,s,l)))}function T8(n){let i=E8(n),s=Pg(),l=!0;const u=h=>(p,v)=>{var b;const x=vs(n,v,h==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(x){const{transition:E,transitionEnd:S,...C}=x;p={...p,...C,...S}}return p};function f(h){i=h(n)}function d(h){const{props:p}=n,v=Ly(n.parent)||{},b=[],x=new Set;let E={},S=1/0;for(let O=0;O<w8;O++){const R=S8[O],L=s[R],N=p[R]!==void 0?p[R]:v[R],$=ms(N),k=R===h?L.isActive:null;k===!1&&(S=O);let Y=N===v[R]&&N!==p[R]&&$;if(Y&&l&&n.manuallyAnimateOnMount&&(Y=!1),L.protectedKeys={...E},!L.isActive&&k===null||!N&&!L.prevProp||ko(N)||typeof N=="boolean")continue;const Q=A8(L.prevProp,N);let F=Q||R===h&&L.isActive&&!Y&&$||O>S&&$,X=!1;const tt=Array.isArray(N)?N:[N];let Rt=tt.reduce(u(R),{});k===!1&&(Rt={});const{prevResolvedValues:ie={}}=L,vt={...ie,...Rt},Gt=J=>{F=!0,x.has(J)&&(X=!0,x.delete(J)),L.needsAnimating[J]=!0;const I=n.getValue(J);I&&(I.liveStyle=!1)};for(const J in vt){const I=Rt[J],ct=ie[J];if(E.hasOwnProperty(J))continue;let M=!1;_f(I)&&_f(ct)?M=!Ny(I,ct):M=I!==ct,M?I!=null?Gt(J):x.add(J):I!==void 0&&x.has(J)?Gt(J):L.protectedKeys[J]=!0}L.prevProp=N,L.prevResolvedValues=Rt,L.isActive&&(E={...E,...Rt}),l&&n.blockInitialAnimation&&(F=!1),F&&(!(Y&&Q)||X)&&b.push(...tt.map(J=>({animation:J,options:{type:R}})))}if(x.size){const O={};if(typeof p.initial!="boolean"){const R=vs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);R&&R.transition&&(O.transition=R.transition)}x.forEach(R=>{const L=n.getBaseTarget(R),N=n.getValue(R);N&&(N.liveStyle=!0),O[R]=L??null}),b.push({animation:O})}let C=!!b.length;return l&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(C=!1),l=!1,C?i(b):Promise.resolve()}function m(h,p){var v;if(s[h].isActive===p)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(x=>{var E;return(E=x.animationState)===null||E===void 0?void 0:E.setActive(h,p)}),s[h].isActive=p;const b=d(h);for(const x in s)s[x].protectedKeys={};return b}return{animateChanges:d,setActive:m,setAnimateFunction:f,getState:()=>s,reset:()=>{s=Pg(),l=!0}}}function A8(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Ny(i,n):!1}function _a(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Pg(){return{animate:_a(!0),whileInView:_a(),whileHover:_a(),whileTap:_a(),whileDrag:_a(),whileFocus:_a(),exit:_a()}}class da{constructor(i){this.isMounted=!1,this.node=i}update(){}}class C8 extends da{constructor(i){super(i),i.animationState||(i.animationState=T8(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();ko(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let M8=0;class R8 extends da{constructor(){super(...arguments),this.id=M8++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const u=this.node.animationState.setActive("exit",!i);s&&!i&&u.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const z8={animation:{Feature:C8},exit:{Feature:R8}};function bs(n,i,s,l={passive:!0}){return n.addEventListener(i,s,l),()=>n.removeEventListener(i,s)}function Bs(n){return{point:{x:n.pageX,y:n.pageY}}}const D8=n=>i=>Td(i)&&n(i,Bs(i));function ns(n,i,s,l){return bs(n,i,D8(s),l)}function ky({top:n,left:i,right:s,bottom:l}){return{x:{min:i,max:s},y:{min:n,max:l}}}function O8({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function j8(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),l=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:l.y,right:l.x}}const Uy=1e-4,B8=1-Uy,V8=1+Uy,Hy=.01,_8=0-Hy,N8=0+Hy;function ye(n){return n.max-n.min}function L8(n,i,s){return Math.abs(n-i)<=s}function qg(n,i,s,l=.5){n.origin=l,n.originPoint=_t(i.min,i.max,n.origin),n.scale=ye(s)/ye(i),n.translate=_t(s.min,s.max,n.origin)-n.originPoint,(n.scale>=B8&&n.scale<=V8||isNaN(n.scale))&&(n.scale=1),(n.translate>=_8&&n.translate<=N8||isNaN(n.translate))&&(n.translate=0)}function as(n,i,s,l){qg(n.x,i.x,s.x,l?l.originX:void 0),qg(n.y,i.y,s.y,l?l.originY:void 0)}function Gg(n,i,s){n.min=s.min+i.min,n.max=n.min+ye(i)}function k8(n,i,s){Gg(n.x,i.x,s.x),Gg(n.y,i.y,s.y)}function Yg(n,i,s){n.min=i.min-s.min,n.max=n.min+ye(i)}function is(n,i,s){Yg(n.x,i.x,s.x),Yg(n.y,i.y,s.y)}const $g=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oi=()=>({x:$g(),y:$g()}),Xg=()=>({min:0,max:0}),qt=()=>({x:Xg(),y:Xg()});function Xe(n){return[n("x"),n("y")]}function pf(n){return n===void 0||n===1}function Qf({scale:n,scaleX:i,scaleY:s}){return!pf(n)||!pf(i)||!pf(s)}function Na(n){return Qf(n)||Py(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Py(n){return Qg(n.x)||Qg(n.y)}function Qg(n){return n&&n!=="0%"}function Ao(n,i,s){const l=n-s,u=i*l;return s+u}function Zg(n,i,s,l,u){return u!==void 0&&(n=Ao(n,u,l)),Ao(n,s,l)+i}function Zf(n,i=0,s=1,l,u){n.min=Zg(n.min,i,s,l,u),n.max=Zg(n.max,i,s,l,u)}function qy(n,{x:i,y:s}){Zf(n.x,i.translate,i.scale,i.originPoint),Zf(n.y,s.translate,s.scale,s.originPoint)}const Kg=.999999999999,Fg=1.0000000000001;function U8(n,i,s,l=!1){const u=s.length;if(!u)return;i.x=i.y=1;let f,d;for(let m=0;m<u;m++){f=s[m],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Bi(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,qy(n,d)),l&&Na(f.latestValues)&&Bi(n,f.latestValues))}i.x<Fg&&i.x>Kg&&(i.x=1),i.y<Fg&&i.y>Kg&&(i.y=1)}function ji(n,i){n.min=n.min+i,n.max=n.max+i}function Jg(n,i,s,l,u=.5){const f=_t(n.min,n.max,u);Zf(n,i,s,f,l)}function Bi(n,i){Jg(n.x,i.x,i.scaleX,i.scale,i.originX),Jg(n.y,i.y,i.scaleY,i.scale,i.originY)}function Gy(n,i){return ky(j8(n.getBoundingClientRect(),i))}function H8(n,i,s){const l=Gy(n,s),{scroll:u}=i;return u&&(ji(l.x,u.offset.x),ji(l.y,u.offset.y)),l}const Yy=({current:n})=>n?n.ownerDocument.defaultView:null,Wg=(n,i)=>Math.abs(n-i);function P8(n,i){const s=Wg(n.x,i.x),l=Wg(n.y,i.y);return Math.sqrt(s**2+l**2)}class $y{constructor(i,s,{transformPagePoint:l,contextWindow:u,dragSnapToOrigin:f=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=vf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,E=P8(b.offset,{x:0,y:0})>=3;if(!x&&!E)return;const{point:S}=b,{timestamp:C}=oe;this.history.push({...S,timestamp:C});const{onStart:O,onMove:R}=this.handlers;x||(O&&O(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=gf(x,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();const{onEnd:E,onSessionEnd:S,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=vf(b.type==="pointercancel"?this.lastMoveEventInfo:gf(x,this.transformPagePoint),this.history);this.startEvent&&E&&E(b,O),S&&S(b,O)},!Td(i))return;this.dragSnapToOrigin=f,this.handlers=s,this.transformPagePoint=l,this.contextWindow=u||window;const d=Bs(i),m=gf(d,this.transformPagePoint),{point:h}=m,{timestamp:p}=oe;this.history=[{...h,timestamp:p}];const{onSessionStart:v}=s;v&&v(i,vf(m,this.history)),this.removeListeners=js(ns(this.contextWindow,"pointermove",this.handlePointerMove),ns(this.contextWindow,"pointerup",this.handlePointerUp),ns(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),ua(this.updatePoint)}}function gf(n,i){return i?{point:i(n.point)}:n}function Ig(n,i){return{x:n.x-i.x,y:n.y-i.y}}function vf({point:n},i){return{point:n,delta:Ig(n,Xy(i)),offset:Ig(n,q8(i)),velocity:G8(i,.1)}}function q8(n){return n[0]}function Xy(n){return n[n.length-1]}function G8(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,l=null;const u=Xy(n);for(;s>=0&&(l=n[s],!(u.timestamp-l.timestamp>jn(i)));)s--;if(!l)return{x:0,y:0};const f=Bn(u.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-l.x)/f,y:(u.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Y8(n,{min:i,max:s},l){return i!==void 0&&n<i?n=l?_t(i,n,l.min):Math.max(n,i):s!==void 0&&n>s&&(n=l?_t(s,n,l.max):Math.min(n,s)),n}function t1(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function $8(n,{top:i,left:s,bottom:l,right:u}){return{x:t1(n.x,s,u),y:t1(n.y,i,l)}}function e1(n,i){let s=i.min-n.min,l=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,l]=[l,s]),{min:s,max:l}}function X8(n,i){return{x:e1(n.x,i.x),y:e1(n.y,i.y)}}function Q8(n,i){let s=.5;const l=ye(n),u=ye(i);return u>l?s=Ui(i.min,i.max-l,n.min):l>u&&(s=Ui(n.min,n.max-u,i.min)),_n(0,1,s)}function Z8(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const Kf=.35;function K8(n=Kf){return n===!1?n=0:n===!0&&(n=Kf),{x:n1(n,"left","right"),y:n1(n,"top","bottom")}}function n1(n,i,s){return{min:a1(n,i),max:a1(n,s)}}function a1(n,i){return typeof n=="number"?n:n[i]||0}const F8=new WeakMap;class J8{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=qt(),this.visualElement=i}start(i,{snapToCursor:s=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(Bs(v).point)},f=(v,b)=>{const{drag:x,dragPropagation:E,onDragStart:S}=this.getProps();if(x&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XS(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(O=>{let R=this.getAxisMotionValue(O).get()||0;if(cn.test(R)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[O];N&&(R=ye(N)*(parseFloat(R)/100))}}this.originPoint[O]=R}),S&&Ot.postRender(()=>S(v,b)),Nf(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},d=(v,b)=>{const{dragPropagation:x,dragDirectionLock:E,onDirectionLock:S,onDrag:C}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:O}=b;if(E&&this.currentDirection===null){this.currentDirection=W8(O),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",b.point,O),this.updateAxis("y",b.point,O),this.visualElement.render(),C&&C(v,b)},m=(v,b)=>this.stop(v,b),h=()=>Xe(v=>{var b;return this.getAnimationState(v)==="paused"&&((b=this.getAxisMotionValue(v).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new $y(i,{onSessionStart:u,onStart:f,onMove:d,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:Yy(this.visualElement)})}stop(i,s){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:u}=s;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ot.postRender(()=>f(i,s))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(i,s,l){const{drag:u}=this.getProps();if(!l||!to(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(d=Y8(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var i;const{dragConstraints:s,dragElastic:l}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,f=this.constraints;s&&zi(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&u?this.constraints=$8(u.layoutBox,s):this.constraints=!1,this.elastic=K8(l),f!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&Xe(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Z8(u.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!zi(i))return!1;const l=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=H8(l,u.root,this.visualElement.getTransformPagePoint());let d=X8(u.layout.layoutBox,f);if(s){const m=s(O8(d));this.hasMutatedConstraints=!!m,m&&(d=ky(m))}return d}startAnimation(i){const{drag:s,dragMomentum:l,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},p=Xe(v=>{if(!to(v,s,this.currentDirection))return;let b=h&&h[v]||{};d&&(b={min:0,max:0});const x=u?200:1e6,E=u?40:1e7,S={type:"inertia",velocity:l?i[v]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(v,S)});return Promise.all(p).then(m)}startAxisValueAnimation(i,s){const l=this.getAxisMotionValue(i);return Nf(this.visualElement,i),l.start(Xd(i,l,0,s,this.visualElement,!1))}stopAnimation(){Xe(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Xe(i=>{var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.pause()})}getAnimationState(i){var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.state}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),u=l[s];return u||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){Xe(s=>{const{drag:l}=this.getProps();if(!to(s,l,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(s);if(u&&u.layout){const{min:d,max:m}=u.layout.layoutBox[s];f.set(i[s]-_t(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:l}=this.visualElement;if(!zi(s)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xe(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const h=m.get();u[d]=Q8({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Xe(d=>{if(!to(d,i,null))return;const m=this.getAxisMotionValue(d),{min:h,max:p}=this.constraints[d];m.set(_t(h,p,u[d]))})}addListeners(){if(!this.visualElement.current)return;F8.set(this.visualElement,this);const i=this.visualElement.current,s=ns(i,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps();p&&v&&this.start(h)}),l=()=>{const{dragConstraints:h}=this.getProps();zi(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Ot.read(l);const d=bs(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Xe(v=>{const b=this.getAxisMotionValue(v);b&&(this.originPoint[v]+=h[v].translate,b.set(b.get()+h[v].translate))}),this.visualElement.render())});return()=>{d(),s(),f(),m&&m()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=Kf,dragMomentum:m=!0}=i;return{...i,drag:s,dragDirectionLock:l,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:m}}}function to(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function W8(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class I8 extends da{constructor(i){super(i),this.removeGroupControls=je,this.removeListeners=je,this.controls=new J8(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||je}unmount(){this.removeGroupControls(),this.removeListeners()}}const i1=n=>(i,s)=>{n&&Ot.postRender(()=>n(i,s))};class tE extends da{constructor(){super(...arguments),this.removePointerDownListener=je}onPointerDown(i){this.session=new $y(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:i1(i),onStart:i1(s),onMove:l,onEnd:(f,d)=>{delete this.session,u&&Ot.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=ns(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const fo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function r1(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Zr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const s=r1(n,i.target.x),l=r1(n,i.target.y);return`${s}% ${l}%`}},eE={correct:(n,{treeScale:i,projectionDelta:s})=>{const l=n,u=ca.parse(n);if(u.length>5)return l;const f=ca.createTransformer(n),d=typeof u[0]!="number"?1:0,m=s.x.scale*i.x,h=s.y.scale*i.y;u[0+d]/=m,u[1+d]/=h;const p=_t(m,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=p),typeof u[3+d]=="number"&&(u[3+d]/=p),f(u)}};class nE extends A.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:l,layoutId:u}=this.props,{projection:f}=i;xw(aE),f&&(s.group&&s.group.add(f),l&&l.register&&u&&l.register(f),f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),fo.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:l,drag:u,isPresent:f}=this.props,d=l.projection;return d&&(d.isPresent=f,u||i.layoutDependency!==s||s===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||Ot.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Ed.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:l}=this.props,{projection:u}=i;u&&(u.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Qy(n){const[i,s]=Mv(),l=A.useContext(dd);return T.jsx(nE,{...n,layoutGroup:l,switchLayoutGroup:A.useContext(Gv),isPresent:i,safeToRemove:s})}const aE={borderRadius:{...Zr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zr,borderTopRightRadius:Zr,borderBottomLeftRadius:Zr,borderBottomRightRadius:Zr,boxShadow:eE};function iE(n,i,s){const l=me(n)?n:hs(n);return l.start(Xd("",l,i,s)),l.animation}function rE(n){return n instanceof SVGElement&&n.tagName!=="svg"}const sE=(n,i)=>n.depth-i.depth;class lE{constructor(){this.children=[],this.isDirty=!1}add(i){gd(this.children,i),this.isDirty=!0}remove(i){vd(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(sE),this.isDirty=!1,this.children.forEach(i)}}function oE(n,i){const s=un.now(),l=({timestamp:u})=>{const f=u-s;f>=i&&(ua(l),n(f-i))};return Ot.read(l,!0),()=>ua(l)}const Zy=["TopLeft","TopRight","BottomLeft","BottomRight"],uE=Zy.length,s1=n=>typeof n=="string"?parseFloat(n):n,l1=n=>typeof n=="number"||st.test(n);function cE(n,i,s,l,u,f){u?(n.opacity=_t(0,s.opacity!==void 0?s.opacity:1,fE(l)),n.opacityExit=_t(i.opacity!==void 0?i.opacity:1,0,dE(l))):f&&(n.opacity=_t(i.opacity!==void 0?i.opacity:1,s.opacity!==void 0?s.opacity:1,l));for(let d=0;d<uE;d++){const m=`border${Zy[d]}Radius`;let h=o1(i,m),p=o1(s,m);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||l1(h)===l1(p)?(n[m]=Math.max(_t(s1(h),s1(p),l),0),(cn.test(p)||cn.test(h))&&(n[m]+="%")):n[m]=p}(i.rotate||s.rotate)&&(n.rotate=_t(i.rotate||0,s.rotate||0,l))}function o1(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const fE=Ky(0,.5,cy),dE=Ky(.5,.95,je);function Ky(n,i,s){return l=>l<n?0:l>i?1:s(Ui(n,i,l))}function u1(n,i){n.min=i.min,n.max=i.max}function $e(n,i){u1(n.x,i.x),u1(n.y,i.y)}function c1(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function f1(n,i,s,l,u){return n-=i,n=Ao(n,1/s,l),u!==void 0&&(n=Ao(n,1/u,l)),n}function hE(n,i=0,s=1,l=.5,u,f=n,d=n){if(cn.test(i)&&(i=parseFloat(i),i=_t(d.min,d.max,i/100)-d.min),typeof i!="number")return;let m=_t(f.min,f.max,l);n===f&&(m-=i),n.min=f1(n.min,i,s,m,u),n.max=f1(n.max,i,s,m,u)}function d1(n,i,[s,l,u],f,d){hE(n,i[s],i[l],i[u],i.scale,f,d)}const mE=["x","scaleX","originX"],pE=["y","scaleY","originY"];function h1(n,i,s,l){d1(n.x,i,mE,s?s.x:void 0,l?l.x:void 0),d1(n.y,i,pE,s?s.y:void 0,l?l.y:void 0)}function m1(n){return n.translate===0&&n.scale===1}function Fy(n){return m1(n.x)&&m1(n.y)}function p1(n,i){return n.min===i.min&&n.max===i.max}function gE(n,i){return p1(n.x,i.x)&&p1(n.y,i.y)}function g1(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Jy(n,i){return g1(n.x,i.x)&&g1(n.y,i.y)}function v1(n){return ye(n.x)/ye(n.y)}function y1(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class vE{constructor(){this.members=[]}add(i){gd(this.members,i),i.scheduleRender()}remove(i){if(vd(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(u=>i===u);if(s===0)return!1;let l;for(let u=s;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){l=f;break}}return l?(this.promote(l),!0):!1}promote(i,s){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,s&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:l}=i;s.onExitComplete&&s.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yE(n,i,s){let l="";const u=n.x.translate/i.x,f=n.y.translate/i.y,d=(s==null?void 0:s.z)||0;if((u||f||d)&&(l=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:p,rotate:v,rotateX:b,rotateY:x,skewX:E,skewY:S}=s;p&&(l=`perspective(${p}px) ${l}`),v&&(l+=`rotate(${v}deg) `),b&&(l+=`rotateX(${b}deg) `),x&&(l+=`rotateY(${x}deg) `),E&&(l+=`skewX(${E}deg) `),S&&(l+=`skewY(${S}deg) `)}const m=n.x.scale*i.x,h=n.y.scale*i.y;return(m!==1||h!==1)&&(l+=`scale(${m}, ${h})`),l||"none"}const yf=["","X","Y","Z"],bE={visibility:"hidden"},b1=1e3;let xE=0;function bf(n,i,s,l){const{latestValues:u}=i;u[n]&&(s[n]=u[n],i.setStaticValue(n,0),l&&(l[n]=0))}function Wy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=ay(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",Ot,!(u||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&Wy(l)}function Iy({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(d={},m=i==null?void 0:i()){this.id=xE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(EE),this.nodes.forEach(RE),this.nodes.forEach(zE),this.nodes.forEach(TE)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new lE)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new bd),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const h=this.eventHandlers.get(d);h&&h.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,m=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=rE(d),this.instance=d;const{layoutId:h,layout:p,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),m&&(p||h)&&(this.isLayoutDirty=!0),n){let b;const x=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=oE(x,250),fo.hasAnimatedSinceResize&&(fo.hasAnimatedSinceResize=!1,this.nodes.forEach(S1))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||p)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:E,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||v.getDefaultTransition()||VE,{onLayoutAnimationStart:O,onLayoutAnimationComplete:R}=v.getProps(),L=!this.targetLayout||!Jy(this.targetLayout,S),N=!x&&E;if(this.options.layoutRoot||this.resumeFrom||N||x&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,N);const $={...xd(C,"layout"),onPlay:O,onComplete:R};(v.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($)}else x||S1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ua(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(DE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Wy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:m,layout:h}=this.options;if(m===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(x1);return}this.isUpdating||this.nodes.forEach(CE),this.isUpdating=!1,this.nodes.forEach(ME),this.nodes.forEach(SE),this.nodes.forEach(wE),this.clearAllSnapshots();const m=un.now();oe.delta=_n(0,1e3/60,m-oe.timestamp),oe.timestamp=m,oe.isProcessing=!0,cf.update.process(oe),cf.preRender.process(oe),cf.render.process(oe),oe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ed.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(AE),this.sharedNodes.forEach(OE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ye(this.snapshot.measuredBox.x)&&!ye(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Fy(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;d&&(m||Na(this.latestValues)||v)&&(u(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let h=this.removeElementScroll(m);return d&&(h=this.removeTransform(h)),_E(h),{animationId:this.root.animationId,measuredBox:m,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:m}=this.options;if(!m)return qt();const h=m.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(NE))){const{scroll:v}=this.root;v&&(ji(h.x,v.offset.x),ji(h.y,v.offset.y))}return h}removeElementScroll(d){var m;const h=qt();if($e(h,d),!((m=this.scroll)===null||m===void 0)&&m.wasRoot)return h;for(let p=0;p<this.path.length;p++){const v=this.path[p],{scroll:b,options:x}=v;v!==this.root&&b&&x.layoutScroll&&(b.wasRoot&&$e(h,d),ji(h.x,b.offset.x),ji(h.y,b.offset.y))}return h}applyTransform(d,m=!1){const h=qt();$e(h,d);for(let p=0;p<this.path.length;p++){const v=this.path[p];!m&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Bi(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Na(v.latestValues)&&Bi(h,v.latestValues)}return Na(this.latestValues)&&Bi(h,this.latestValues),h}removeTransform(d){const m=qt();$e(m,d);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!Na(p.latestValues))continue;Qf(p.latestValues)&&p.updateSnapshot();const v=qt(),b=p.measurePageBox();$e(v,b),h1(m,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,v)}return Na(this.latestValues)&&h1(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==oe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var m;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!(!this.layout||!(b||x))){if(this.resolvedRelativeTargetAt=oe.timestamp,!this.targetDelta&&!this.relativeTarget){const E=this.getClosestProjectingParent();E&&E.layout&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qt(),this.relativeTargetOrigin=qt(),is(this.relativeTargetOrigin,this.layout.layoutBox,E.layout.layoutBox),$e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=qt(),this.targetWithTransforms=qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),k8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):$e(this.target,this.layout.layoutBox),qy(this.target,this.targetDelta)):$e(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const E=this.getClosestProjectingParent();E&&!!E.resumingFrom==!!this.resumingFrom&&!E.options.layoutScroll&&E.target&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qt(),this.relativeTargetOrigin=qt(),is(this.relativeTargetOrigin,this.target,E.target),$e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Qf(this.parent.latestValues)||Py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const m=this.getLead(),h=!!this.resumingFrom||this!==m;let p=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===oe.timestamp&&(p=!1),p)return;const{layout:v,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||b))return;$e(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,E=this.treeScale.y;U8(this.layoutCorrected,this.treeScale,this.path,h),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=qt());const{target:S}=m;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(c1(this.prevProjectionDelta.x,this.projectionDelta.x),c1(this.prevProjectionDelta.y,this.projectionDelta.y)),as(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==E||!y1(this.projectionDelta.x,this.prevProjectionDelta.x)||!y1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var m;if((m=this.options.visualElement)===null||m===void 0||m.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oi(),this.projectionDelta=Oi(),this.projectionDeltaWithTransform=Oi()}setAnimationOrigin(d,m=!1){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},b=Oi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const x=qt(),E=h?h.source:void 0,S=this.layout?this.layout.source:void 0,C=E!==S,O=this.getStack(),R=!O||O.members.length<=1,L=!!(C&&!R&&this.options.crossfade===!0&&!this.path.some(BE));this.animationProgress=0;let N;this.mixTargetDelta=$=>{const k=$/1e3;w1(b.x,d.x,k),w1(b.y,d.y,k),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(is(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jE(this.relativeTarget,this.relativeTargetOrigin,x,k),N&&gE(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=qt()),$e(N,this.relativeTarget)),C&&(this.animationValues=v,cE(v,p,this.latestValues,k,L,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ua(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ot.update(()=>{fo.hasAnimatedSinceResize=!0,this.currentAnimation=iE(0,b1,{...d,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(b1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:h,layout:p,latestValues:v}=d;if(!(!m||!h||!p)){if(this!==d&&this.layout&&p&&t2(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||qt();const b=ye(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+b;const x=ye(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}$e(m,h),Bi(m,v),as(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new vE),this.sharedNodes.get(d).add(m);const p=m.options.initialPromotionConfig;m.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:m}=this.options;return m?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:m}=this.options;return m?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(m=!0),!m)return;const p={};h.z&&bf("z",d,p,this.animationValues);for(let v=0;v<yf.length;v++)bf(`rotate${yf[v]}`,d,p,this.animationValues),bf(`skew${yf[v]}`,d,p,this.animationValues);d.render();for(const v in p)d.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);d.scheduleRender()}getProjectionStyles(d){var m,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return bE;const p={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=co(d==null?void 0:d.pointerEvents)||"",p.transform=v?v(this.latestValues,""):"none",p;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=co(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Na(this.latestValues)&&(C.transform=v?v({},""):"none",this.hasProjected=!1),C}const x=b.animationValues||b.latestValues;this.applyTransformsToTarget(),p.transform=yE(this.projectionDeltaWithTransform,this.treeScale,x),v&&(p.transform=v(x,p.transform));const{x:E,y:S}=this.projectionDelta;p.transformOrigin=`${E.origin*100}% ${S.origin*100}% 0`,b.animationValues?p.opacity=b===this?(h=(m=x.opacity)!==null&&m!==void 0?m:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:p.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const C in ps){if(x[C]===void 0)continue;const{correct:O,applyTo:R,isCSSVariable:L}=ps[C],N=p.transform==="none"?x[C]:O(x[C],b);if(R){const $=R.length;for(let k=0;k<$;k++)p[R[k]]=N}else L?this.options.visualElement.renderState.vars[C]=N:p[C]=N}return this.options.layoutId&&(p.pointerEvents=b===this?co(d==null?void 0:d.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var m;return(m=d.currentAnimation)===null||m===void 0?void 0:m.stop()}),this.root.nodes.forEach(x1),this.root.sharedNodes.clear()}}}function SE(n){n.updateLayout()}function wE(n){var i;const s=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&s&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:u}=n.layout,{animationType:f}=n.options,d=s.source!==n.layout.source;f==="size"?Xe(b=>{const x=d?s.measuredBox[b]:s.layoutBox[b],E=ye(x);x.min=l[b].min,x.max=x.min+E}):t2(f,s.layoutBox,l)&&Xe(b=>{const x=d?s.measuredBox[b]:s.layoutBox[b],E=ye(l[b]);x.max=x.min+E,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+E)});const m=Oi();as(m,l,s.layoutBox);const h=Oi();d?as(h,n.applyTransform(u,!0),s.measuredBox):as(h,l,s.layoutBox);const p=!Fy(m);let v=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:x,layout:E}=b;if(x&&E){const S=qt();is(S,s.layoutBox,x.layoutBox);const C=qt();is(C,l,E.layoutBox),Jy(S,C)||(v=!0),b.options.layoutRoot&&(n.relativeTarget=C,n.relativeTargetOrigin=S,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:s,delta:h,layoutDelta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function EE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function TE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function AE(n){n.clearSnapshot()}function x1(n){n.clearMeasurements()}function CE(n){n.isLayoutDirty=!1}function ME(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function S1(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function RE(n){n.resolveTargetDelta()}function zE(n){n.calcProjection()}function DE(n){n.resetSkewAndRotation()}function OE(n){n.removeLeadSnapshot()}function w1(n,i,s){n.translate=_t(i.translate,0,s),n.scale=_t(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function E1(n,i,s,l){n.min=_t(i.min,s.min,l),n.max=_t(i.max,s.max,l)}function jE(n,i,s,l){E1(n.x,i.x,s.x,l),E1(n.y,i.y,s.y,l)}function BE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const VE={duration:.45,ease:[.4,0,.1,1]},T1=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),A1=T1("applewebkit/")&&!T1("chrome/")?Math.round:je;function C1(n){n.min=A1(n.min),n.max=A1(n.max)}function _E(n){C1(n.x),C1(n.y)}function t2(n,i,s){return n==="position"||n==="preserve-aspect"&&!L8(v1(i),v1(s),.2)}function NE(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const LE=Iy({attachResizeListener:(n,i)=>bs(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),xf={current:void 0},e2=Iy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!xf.current){const n=new LE({});n.mount(window),n.setOptions({layoutScroll:!0}),xf.current=n}return xf.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),kE={pan:{Feature:tE},drag:{Feature:I8,ProjectionNode:e2,MeasureLayout:Qy}};function M1(n,i,s){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",s==="Start");const u="onHover"+s,f=l[u];f&&Ot.postRender(()=>f(i,Bs(i)))}class UE extends da{mount(){const{current:i}=this.node;i&&(this.unmount=ZS(i,(s,l)=>(M1(this.node,l,"Start"),u=>M1(this.node,u,"End"))))}unmount(){}}class HE extends da{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=js(bs(this.node.current,"focus",()=>this.onFocus()),bs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function R1(n,i,s){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",s==="Start");const u="onTap"+(s==="End"?"":s),f=l[u];f&&Ot.postRender(()=>f(i,Bs(i)))}class PE extends da{mount(){const{current:i}=this.node;i&&(this.unmount=WS(i,(s,l)=>(R1(this.node,l,"Start"),(u,{success:f})=>R1(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ff=new WeakMap,Sf=new WeakMap,qE=n=>{const i=Ff.get(n.target);i&&i(n)},GE=n=>{n.forEach(qE)};function YE({root:n,...i}){const s=n||document;Sf.has(s)||Sf.set(s,{});const l=Sf.get(s),u=JSON.stringify(i);return l[u]||(l[u]=new IntersectionObserver(GE,{root:n,...i})),l[u]}function $E(n,i,s){const l=YE(i);return Ff.set(n,s),l.observe(n),()=>{Ff.delete(n),l.unobserve(n)}}const XE={some:0,all:1};class QE extends da{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:l,amount:u="some",once:f}=i,d={root:s?s.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:XE[u]},m=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,f&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),x=p?v:b;x&&x(h)};return $E(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(ZE(i,s))&&this.startObserver()}unmount(){}}function ZE({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const KE={inView:{Feature:QE},tap:{Feature:PE},focus:{Feature:HE},hover:{Feature:UE}},FE={layout:{ProjectionNode:e2,MeasureLayout:Qy}},Jf={current:null},n2={current:!1};function JE(){if(n2.current=!0,!!hd)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Jf.current=n.matches;n.addListener(i),i()}else Jf.current=!1}const WE=[...Ay,he,ca],IE=n=>WE.find(Ty(n)),tT=new WeakMap;function eT(n,i,s){for(const l in i){const u=i[l],f=s[l];if(me(u))n.addValue(l,u);else if(me(f))n.addValue(l,hs(u,{owner:n}));else if(f!==u)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(l);n.addValue(l,hs(d!==void 0?d:u,{owner:n}))}}for(const l in s)i[l]===void 0&&n.removeValue(l);return i}const z1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class nT{scrapeMotionValuesFromProps(i,s,l){return{}}constructor({parent:i,props:s,presenceContext:l,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=un.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,Ot.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:v}=d;this.onUpdate=v,this.latestValues=h,this.baseTarget={...h},this.initialValues=s.initial?{...h}:{},this.renderState=p,this.parent=i,this.props=s,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!f,this.isControllingVariants=Uo(s),this.isVariantNode=Pv(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...x}=this.scrapeMotionValuesFromProps(s,{},this);for(const E in x){const S=x[E];h[E]!==void 0&&me(S)&&S.set(h[E],!1)}}mount(i){this.current=i,tT.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,l)=>this.bindToMotionValue(l,s)),n2.current||JE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ua(this.notifyUpdate),ua(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const s=this.features[i];s&&(s.unmount(),s.isMounted=!1)}this.current=null}bindToMotionValue(i,s){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=Ga.has(i);l&&this.onBindTransform&&this.onBindTransform();const u=s.on("change",m=>{this.latestValues[i]=m,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),f=s.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{u(),f(),d&&d(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Hi){const s=Hi[i];if(!s)continue;const{isEnabled:l,Feature:u}=s;if(!this.features[i]&&u&&l(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):qt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let l=0;l<z1.length;l++){const u=z1[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=eT(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const l=this.values.get(i);s!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&s!==void 0&&(l=hs(s===null?void 0:s,{owner:this}),this.addValue(i,l)),l}readValue(i,s){var l;let u=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(l=this.getBaseTargetFromProps(this.props,i))!==null&&l!==void 0?l:this.readValueFromInstance(this.current,i,this.options);return u!=null&&(typeof u=="string"&&(wy(u)||dy(u))?u=parseFloat(u):!IE(u)&&ca.test(s)&&(u=by(i,s)),this.setBaseTarget(i,me(u)?u.get():u)),me(u)?u.get():u}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var s;const{initial:l}=this.props;let u;if(typeof l=="string"||typeof l=="object"){const d=Nd(this.props,l,(s=this.presenceContext)===null||s===void 0?void 0:s.custom);d&&(u=d[i])}if(l&&u!==void 0)return u;const f=this.getBaseTargetFromProps(this.props,i);return f!==void 0&&!me(f)?f:this.initialValues[i]!==void 0&&u===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new bd),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}}class a2 extends nT{constructor(){super(...arguments),this.KeyframeResolver=Cy}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){return i.style?i.style[s]:void 0}removeValueFromRenderState(i,{vars:s,style:l}){delete s[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;me(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function aT(n){return window.getComputedStyle(n)}class iT extends a2{constructor(){super(...arguments),this.type="html",this.renderInstance=Wv}readValueFromInstance(i,s){if(Ga.has(s))return g6(i,s);{const l=aT(i),u=(Rd(s)?l.getPropertyValue(s):l[s])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Gy(i,s)}build(i,s,l){Od(i,s,l.transformTemplate)}scrapeMotionValuesFromProps(i,s,l){return Ld(i,s,l)}}class rT extends a2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=qt,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Jv(this.current,this.renderState)}}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Ga.has(s)){const l=yy(s);return l&&l.default||0}return s=Iv.has(s)?s:Md(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,l){return ey(i,s,l)}onBindTransform(){this.current&&!this.renderState.dimensions&&Ot.postRender(this.updateDimensions)}build(i,s,l){Vd(i,s,this.isSVGTag,l.transformTemplate)}renderInstance(i,s,l,u){ty(i,s,l,u)}mount(i){this.isSVGTag=_d(i.tagName),super.mount(i)}}const sT=(n,i)=>Bd(n)?new rT(i):new iT(i,{allowProjection:n!==A.Fragment}),lT=Yw({...z8,...KE,...kE,...FE},sT),rs=sw(lT);function oT(n){n.values.forEach(i=>i.stop())}function Wf(n,i){[...i].reverse().forEach(l=>{const u=n.getVariant(l);u&&kd(n,u),n.variantChildren&&n.variantChildren.forEach(f=>{Wf(f,i)})})}function uT(n,i){if(Array.isArray(i))return Wf(n,i);if(typeof i=="string")return Wf(n,[i]);kd(n,i)}function cT(){const n=new Set,i={subscribe(s){return n.add(s),()=>void n.delete(s)},start(s,l){const u=[];return n.forEach(f=>{u.push(_y(f,s,{transitionOverride:l}))}),Promise.all(u)},set(s){return n.forEach(l=>{uT(l,s)})},stop(){n.forEach(s=>{oT(s)})},mount(){return()=>{i.stop()}}};return i}function fT(){const n=_o(cT);return md(n.mount,[]),n}const dT=fT,hT=()=>{const[n,i]=A.useState([]),[s,l]=A.useState(null),[u,f]=A.useState(null),[d,m]=A.useState(!1),[h,p]=A.useState([{name:"Curiosità Pokémon",color:"#EE1515",questions:[{question:"Qual è stato il primo Pokémon disegnato da Game Freak?",answer:"Rhydon",points:100,answered:!1},{question:"Quante varianti di macchie può avere Spinda?",answer:"4 miliardi",points:200,answered:!1},{question:"Quale Pokémon si dice sia stato un umano in vita passata?",answer:"Yamask",points:300,answered:!1},{question:"Quale Pokémon si dice possa essere Mew di notte?",answer:"Smeargle",points:400,answered:!1},{question:"Quale errore di ortografia famoso è apparso in Pokémon GO?",answer:"Pikahcu (invece di Pikachu)",points:500,answered:!1}]},{name:"Pokémon Specifici",color:"#3B4CCA",questions:[{question:"Quale Pokémon è noto per non poter mai guardare a nord?",answer:"Nosepass",points:100,answered:!1},{question:"Quale Pokémon è considerato la versione 'economica' di Chimchar?",answer:"Pansear",points:200,answered:!1},{question:"Quale Pokémon potrebbe essere associato a Bud Spencer?",answer:"Hippowdon",points:300,answered:!1},{question:"Quale Pokémon acquatico ha un nome che suggerisce freddezza emotiva?",answer:"Tentacool",points:400,answered:!1},{question:"Quale Pokémon ha le lancette di un orologio sul corpo?",answer:"Hoothoot",points:500,answered:!1}]},{name:"Allenatori",color:"#FFDE00",questions:[{question:"Quale tipo di allenatore dice spesso 'C'è solo un capitano'?",answer:"Marinaio",points:100,answered:!1},{question:"Quale tipo di allenatore è associato a strumenti musicali?",answer:"Chitarrista",points:200,answered:!1},{question:"Quale tipo di allenatore usa tattiche furtive?",answer:"Ninja",points:300,answered:!1},{question:"Quale tipo di allenatore è calvo e muscoloso?",answer:"ZuccaPelata",points:400,answered:!1},{question:"Quale tipo di allenatore è noto per il suo abbigliamento minimal?",answer:"Fantallenatore",points:500,answered:!1}]},{name:"GCC Pokémon",color:"#FF9C54",questions:[{question:"Quante carte si pescano all'inizio di una partita nel GCC Pokémon?",answer:"7",points:100,answered:!1},{question:"Qual è il valore di ritirata più alto mai stampato su una carta?",answer:"5 energie",points:200,answered:!1},{question:"In che anno è stato rilasciato il primo Set Base?",answer:"1996 in Giappone, 1999 nel resto del mondo",points:300,answered:!1},{question:"C'è un limite massimo di carte in mano durante una partita ufficiale?",answer:"No, ma se non puoi pescare all'inizio del turno perdi",points:400,answered:!1},{question:"Come si chiama la meccanica di Reshiram & Charizard GX?",answer:"Tag Team GX",points:500,answered:!1}]},{name:"Serie Pokémon",color:"#78C850",questions:[{question:"Chi è il protagonista della prima serie animata Pokémon?",answer:"Ash Ketchum",points:100,answered:!1},{question:"Quale Pokémon leggendario appare nel primo film?",answer:"Mewtwo",points:200,answered:!1},{question:"Come si chiamano i nemici ricorrenti nella serie animata?",answer:"Team Rocket (Jessie, James e Meowth)",points:300,answered:!1},{question:"Quante stagioni ha la serie animata originale?",answer:"23 stagioni (fino a Pokémon Esplorazioni)",points:400,answered:!1},{question:"Chi è il successore di Ash come protagonista?",answer:"Liko e Roy",points:500,answered:!1}]}]);A.useEffect(()=>{const S=localStorage.getItem("quizPlayers");if(S){const C=JSON.parse(S);i(C),C.length>0&&l(C[0])}},[]);const v=(S,C,O)=>{C.answered||!s||(f({category:S,question:C,categoryColor:O}),m(!1))},b=S=>{p(h.map(C=>({...C,questions:C.questions.map(O=>O===S?{...O,answered:!0}:O)})))},x=()=>{if(!s||!u)return;const S=n.map(C=>C.id===s.id?{...C,score:C.score+u.question.points}:C);i(S),localStorage.setItem("quizPlayers",JSON.stringify(S)),l({...s,score:s.score+u.question.points}),b(u.question),f(null)},E=()=>{u&&(b(u.question),f(null))};return T.jsxs(vT,{children:[T.jsxs(wT,{to:"/game",children:[T.jsx(Vo,{})," Torna ai giochi"]}),T.jsx(ET,{children:"Sfida Quiz Pokémon"}),T.jsxs(TT,{children:[T.jsx(AT,{children:h.map((S,C)=>T.jsxs(RT,{$color:S.color,children:[T.jsx(CT,{}),S.name]},C))}),[0,1,2,3,4].map(S=>T.jsx(zT,{children:h.map((C,O)=>{const R=C.questions[S];return T.jsx(DT,{$color:C.color,$answered:R.answered,onClick:()=>v(C.name,R,C.color),children:R.answered?T.jsx(jT,{children:T.jsx(MT,{})}):T.jsx(OT,{children:R.points})},O)})},S))]}),T.jsxs(BT,{children:[T.jsxs(VT,{children:[T.jsx(_T,{children:"Allenatori"}),T.jsx(NT,{children:s?"Scegli una casella per sfidare la tua conoscenza":"Scegli un allenatore per iniziare"})]}),T.jsx(LT,{children:n.map(S=>T.jsxs(kT,{$active:(s==null?void 0:s.id)===S.id,onClick:()=>l(S),children:[T.jsx(O1,{src:S.avatar,alt:S.name}),T.jsxs(UT,{children:[T.jsx(HT,{children:S.name}),T.jsxs(PT,{children:[T.jsx(D1,{})," ",S.score," punti"]})]}),(s==null?void 0:s.id)===S.id&&T.jsx(qT,{children:T.jsx(S3,{})})]},S.id))})]}),T.jsx(Rv,{children:u&&T.jsx(GT,{as:rs.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:T.jsxs(YT,{as:rs.div,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},$color:u.categoryColor,children:[T.jsxs($T,{children:[T.jsx(XT,{$color:u.categoryColor,children:u.category}),T.jsxs(QT,{children:[T.jsx(D1,{})," ",u.question.points," punti"]})]}),T.jsx(ZT,{children:u.question.question}),T.jsx(KT,{children:d?T.jsxs(FT,{as:rs.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[T.jsx(JT,{children:u.question.answer}),T.jsxs(WT,{children:[T.jsxs(j1,{$color:"#4CAF50",onClick:x,children:[T.jsx(Tv,{})," Corretta"]}),T.jsxs(j1,{$color:"#EE1515",onClick:E,children:[T.jsx(bo,{})," Sbagliata"]})]})]}):T.jsxs(IT,{onClick:()=>m(!0),children:[T.jsx(g3,{})," Mostra Risposta"]})}),T.jsxs(tA,{children:[T.jsx(O1,{src:s==null?void 0:s.avatar,alt:s==null?void 0:s.name,$small:!0}),T.jsx("span",{children:s==null?void 0:s.name})]})]})})}),T.jsxs(yT,{children:[T.jsx(Ss,{className:"ball1"}),T.jsx(Ss,{className:"ball2"}),T.jsx(bT,{className:"ball3"}),T.jsx(xT,{className:"ball4"}),T.jsx(ST,{className:"ball5"})]})]})},xs=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,mT=ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,pT=ue`
  0% { opacity: 0.3; }
  50% { opacity: 0.8; }
  100% { opacity: 0.3; }
`,gT=ue`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,vT=B.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  background: #233975;
  color: white;
  position: relative;
  overflow: hidden;
  font-family: 'Pokemon Solid', 'Montserrat', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`,yT=B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,Ss=B.div`
  position: absolute;
  width: 150px;
  height: 150px;
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
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333, 0 0 0 10px white;
  }

  &.ball1 {
    top: -40px;
    right: 10%;
    animation: ${xs} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${xs} 10s ease-in-out infinite reverse;
  }
`,bT=B(Ss)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #3b4cca 50%,
    #3b4cca 100%
  );

  &.ball3 {
    top: 20%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${xs} 15s ease-in-out infinite;
  }
`,xT=B(Ss)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ffde00 50%,
    #ffde00 100%
  );

  &.ball4 {
    bottom: 5%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${xs} 18s ease-in-out infinite reverse;
  }
`,ST=B(Ss)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #9966ff 50%,
    #9966ff 100%
  );

  &.ball5 {
    top: 40%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${xs} 14s ease-in-out infinite;
  }
`,wT=B(Yi)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 30px;
  font-weight: 500;
  z-index: 10;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
`,ET=B.h1`
  font-size: 2.6rem;
  font-weight: 800;
  text-align: center;
  z-index: 1;
  color: #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
  letter-spacing: 2px;
  /* margin-bottom: 1.5rem; */

  @media (max-width: 768px) {
    font-size: 2rem;
    -webkit-text-stroke: 1px #3b4cca;
  }
`,TT=B.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: rgba(19, 42, 87, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 1;
  border: 4px solid #ffde00;
`,AT=B.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,CT=B.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  margin-right: 8px;
  position: relative;
  display: inline-block;
  vertical-align: middle;

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
    box-shadow: 0 0 0 1px #333, 0 0 0 3px white;
  }
`,MT=B.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;
  animation: ${gT} 1s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 2px #333, 0 0 0 5px white;
  }
`,D1=B.div`
  width: 18px;
  height: 18px;
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
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle;
`,RT=B.div`
  background: ${n=>n.$color};
  color: white;
  padding: 20px 15px;
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid white;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 15px 10px;
  }
`,zT=B.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,DT=B.div`
  background: ${n=>n.$answered?"rgba(19, 42, 87, 0.7)":"rgba(19, 42, 87, 0.95)"};
  color: ${n=>n.$color};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${n=>n.$answered?"default":"pointer"};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
  opacity: ${n=>n.$answered?.8:1};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }

  ${n=>!n.$answered&&zs`
      &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 20px ${n.$color};
        z-index: 1;

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid ${n.$color};
        }
      }
    `}

  @media (max-width: 768px) {
    height: 70px;
  }
`,OT=B.div`
  font-size: 2.2rem;
  font-weight: 800;
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;

  &::after {
    content: 'P';
    font-size: 1rem;
    vertical-align: super;
    margin-left: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,jT=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`,BT=B.div`
  width: 100%;
  max-width: 1200px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  z-index: 1;
  margin-top: 2rem;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,VT=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`,_T=B.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,NT=B.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`,LT=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,kT=B.div`
  display: flex;
  align-items: center;
  background: ${n=>n.$active?"linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(59, 76, 202, 0.2))":"rgba(255, 255, 255, 0.08)"};
  border-radius: 12px;
  padding: 0.8rem 1rem;
  flex: 1;
  min-width: 200px;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid ${n=>n.$active?"#FFDE00":"transparent"};
  cursor: pointer;

  ${n=>n.$active&&zs`
      animation: ${mT} 2s infinite ease-in-out;
      box-shadow: 0 0 15px rgba(255, 222, 0, 0.4);
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
  }

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
    border-radius: 10px;
  }
`,O1=B.img`
  width: ${n=>n.$small?"30px":"45px"};
  height: ${n=>n.$small?"30px":"45px"};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`,UT=B.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,HT=B.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,PT=B.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,qT=B.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ee1515;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: ${pT} 2s infinite;
`,GT=B.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
`,YT=B.div`
  background: radial-gradient(circle at top left, #233975 0%, #132a57 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid #ffde00;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }
`,$T=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`,XT=B.div`
  background: ${n=>n.$color||"#00ccff"};
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    margin-right: 8px;
  }
`,QT=B.div`
  background: rgba(255, 255, 255, 0.15);
  color: #ffde00;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.3);
  display: flex;
  align-items: center;
`,ZT=B.div`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  padding: 40px 30px;
  color: white;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '?';
    position: absolute;
    font-size: 8rem;
    opacity: 0.06;
    color: white;
    z-index: -1;
  }

  &::before {
    top: 20px;
    left: 30px;
  }

  &::after {
    bottom: 20px;
    right: 30px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 30px 20px;
    min-height: 140px;
  }
`,KT=B.div`
  padding: 20px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  position: relative;
  z-index: 1;
`,FT=B.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,JT=B.div`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  color: #ffde00;
  margin-bottom: 30px;
  line-height: 1.5;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 1px solid rgba(255, 222, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`,WT=B.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`,j1=B.button`
  background: ${n=>n.$color};
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`,IT=B.button`
  background: linear-gradient(135deg, #3b4cca, #0a1f5c);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }
`,tA=B.div`
  position: absolute;
  bottom: 15px;
  right: 20px;

  background: linear-gradient(to right, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  z-index: 10;
  border: 2px solid white;
`,Kr=[{id:1,label:"Pokémon",color:"#FF5252",points:100},{id:2,label:"Allenatori",color:"#FF9800",points:200},{id:3,label:"Mosse",color:"#FFEB3B",points:300},{id:4,label:"Città",color:"#4CAF50",points:400},{id:5,label:"Oggetti",color:"#2196F3",points:500},{id:6,label:"Leggende",color:"#9C27B0",points:750},{id:7,label:"Bonus",color:"#F44336",points:1e3},{id:8,label:"Malus",color:"#000000",points:-500}],eA=()=>{const[n,i]=A.useState(!1),[s,l]=A.useState(null),[u,f]=A.useState(5),d=dT(),m=Cs(),h=A.useRef(null),p=()=>{if(n)return;i(!0),l(null);const b=5+Math.random()*5,x=360/Kr.length,E=Math.floor(Math.random()*Kr.length),S=Math.random()*x,C=b*360+E*x+S;d.start({rotate:C,transition:{duration:u,ease:"easeOut"}}).then(()=>{i(!1);const O=Kr[E];l(O),setTimeout(()=>{O.label!=="Bonus"&&O.label!=="Malus"&&m("/game/categories",{state:{category:O.label,points:O.points}})},3e3)})},v=()=>{m("/game")};return T.jsxs(nA,{children:[T.jsxs(aA,{onClick:v,children:[T.jsx(Vo,{})," Indietro"]}),T.jsxs(iA,{children:[T.jsx(oA,{children:T.jsx(d3,{})}),T.jsx(rA,{ref:h,animate:d,initial:{rotate:0},children:Kr.map((b,x)=>{const E=360/Kr.length,S=x*E;return T.jsx(sA,{$color:b.color,$rotation:S,$segmentAngle:E,children:T.jsx(lA,{$rotation:-S,children:b.label})},b.id)})}),T.jsx(uA,{onClick:p,disabled:n,children:n?"Gira...":"Gira la Ruota!"})]}),T.jsx(Rv,{children:s&&T.jsx(cA,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},children:T.jsxs(fA,{$color:s.color,children:[T.jsx("h2",{children:"Categoria:"}),T.jsx(dA,{children:s.label}),T.jsxs(hA,{$isNegative:s.points<0,children:[s.points>0?"+":"",s.points," Punti"]})]})})})]})},nA=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f);
  position: relative;
  overflow: hidden;
`,aA=B.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,iA=B.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`,rA=B(rs.div)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border: 10px solid rgba(255, 255, 255, 0.2);
`,sA=B.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    50% 50%,
    50% 0%,
    ${n=>50+50*Math.sin(Math.PI/180*n.$segmentAngle)}%
      ${n=>50-50*Math.cos(Math.PI/180*n.$segmentAngle)}%,
    50% 50%
  );
  background-color: ${n=>n.$color};
  transform: rotate(${n=>n.$rotation}deg);
  transform-origin: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
`,lA=B.span`
  transform: rotate(${n=>n.$rotation}deg);
  transform-origin: center 170px; /* Approssimazione del raggio metà */
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-size: 16px;
  text-align: center;
  max-width: 80px;
`,oA=B.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #ffde00;
  z-index: 10;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`,uA=B.button`
  margin-top: 30px;
  background: #ffde00;
  color: #1a2a6c;
  border: none;
  border-radius: 30px;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    background: #fff176;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: scale(1);
  }
`,cA=B(rs.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`,fA=B.div`
  background: white;
  border-radius: 20px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-top: 10px solid ${n=>n.$color};

  h2 {
    margin: 0 0 10px 0;
    color: #333;
  }
`,dA=B.div`
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0 20px;
  color: #1a2a6c;
`,hA=B.div`
  font-size: 24px;
  font-weight: bold;
  color: ${n=>n.$isNegative?"#d32f2f":"#388e3c"};
  background: ${n=>n.$isNegative?"rgba(211, 47, 47, 0.1)":"rgba(56, 142, 60, 0.1)"};
  padding: 10px 20px;
  border-radius: 30px;
`,B1=[{id:1,name:"Pikachu",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,name:"Charizard",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{id:3,name:"Bulbasaur",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:4,name:"Squirtle",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},{id:5,name:"Jigglypuff",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"},{id:6,name:"Mewtwo",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"},{id:7,name:"Eevee",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:8,name:"Snorlax",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:9,name:"Gengar",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"},{id:10,name:"Gyarados",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"},{id:11,name:"Dragonite",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"},{id:12,name:"Mew",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"}],wf=20,eo=500,mA=5e3;function pA(){const[n,i]=A.useState([]),[s,l]=A.useState(null),[u,f]=A.useState([]),[d,m]=A.useState(null),[h,p]=A.useState("inactive"),[v,b]=A.useState(0),[x,E]=A.useState(!1),[S,C]=A.useState(eo),[O,R]=A.useState(""),[L,N]=A.useState(!1),[$,k]=A.useState(!1),Y=A.useRef(null),Q=Cs();A.useEffect(()=>{const vt=localStorage.getItem("quizPlayers");if(vt){const Gt=JSON.parse(vt);i(Gt),Gt.length>0&&l(Gt[0])}else Q("/")},[Q]),A.useEffect(()=>{const vt=[...B1].sort(()=>.5-Math.random());f(vt)},[]),A.useEffect(()=>(h==="active"&&!x&&v<wf&&(Y.current=setTimeout(()=>{b(vt=>vt+1),C(vt=>Math.max(vt-eo/wf,0))},mA)),()=>{Y.current&&clearTimeout(Y.current)}),[h,x,v]);const F=vt=>{h==="inactive"&&(m(vt),p("active"),b(0),C(eo),E(!1),R(""),N(!1))},X=()=>{E(!x)},tt=()=>{const vt=O.trim().toLowerCase(),Gt=d.name.toLowerCase(),Yt=vt===Gt;if(k(Yt),N(!0),p("completed"),Yt&&s){const Z=n.map(J=>J.id===s.id?{...J,score:J.score+Math.round(S)}:J);i(Z),localStorage.setItem("quizPlayers",JSON.stringify(Z)),l({...s,score:s.score+Math.round(S)})}},Rt=()=>{m(null),p("inactive"),b(0),C(eo),E(!1),R(""),N(!1);const vt=[...B1].sort(()=>.5-Math.random());f(vt)},ie=v/wf*100;return T.jsxs(vA,{children:[T.jsxs(wA,{to:"/game",children:[T.jsx(Vo,{})," Torna ai giochi"]}),T.jsx(EA,{children:"Chi è quel Pokémon?"}),h==="inactive"?T.jsx(TA,{children:u.map(vt=>T.jsx(AA,{onClick:()=>F(vt),children:T.jsx(CA,{children:T.jsxs(MA,{children:[T.jsx(RA,{}),T.jsx(zA,{children:vt.id})]})})},vt.id))}):T.jsxs(DA,{children:[T.jsxs(OA,{children:[T.jsxs(jA,{children:[T.jsx(BA,{children:"Punteggio:"}),T.jsx(VA,{children:Math.round(S)})]}),T.jsx(_A,{children:h==="active"&&T.jsx(NA,{onClick:X,children:x?T.jsxs(T.Fragment,{children:[T.jsx(x3,{})," Riprendi"]}):T.jsxs(T.Fragment,{children:[T.jsx(b3,{})," Pausa"]})})})]}),T.jsxs(LA,{children:[T.jsx(kA,{src:d==null?void 0:d.image,alt:"Pokémon da indovinare"}),T.jsx(UA,{$revealedPieces:v})]}),T.jsxs(HA,{children:[T.jsx(PA,{$percentage:ie}),T.jsxs(qA,{children:["Rivelato: ",Math.round(ie),"%"]})]}),!L&&T.jsxs(GA,{children:[T.jsx(YA,{type:"text",value:O,onChange:vt=>R(vt.target.value),placeholder:"Nome del Pokémon...",disabled:h==="completed"}),T.jsx($A,{onClick:tt,disabled:!O.trim()||h==="completed",children:"Indovina"})]}),L&&T.jsxs(XA,{$correct:$,children:[T.jsx(QA,{children:$?T.jsx(Tv,{}):T.jsx(bo,{})}),T.jsx(ZA,{children:$?"Corretto!":"Sbagliato!"}),T.jsx(KA,{children:$?`Hai guadagnato ${Math.round(S)} punti!`:`Era ${d.name}. Nessun punto guadagnato.`}),T.jsx(FA,{onClick:Rt,children:"Nuova Sfida"})]})]}),T.jsxs(JA,{children:[T.jsx(WA,{src:s==null?void 0:s.avatar,alt:s==null?void 0:s.name}),T.jsx(IA,{children:s==null?void 0:s.name}),T.jsxs(tC,{children:[(s==null?void 0:s.score)||0," punti"]})]}),T.jsxs(yA,{children:[T.jsx(Es,{className:"ball1"}),T.jsx(Es,{className:"ball2"}),T.jsx(bA,{className:"ball3"}),T.jsx(xA,{className:"ball4"}),T.jsx(SA,{className:"ball5"})]})]})}const ws=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;ue`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;const i2=ue`
  from { opacity: 0; }
  to { opacity: 1; }
`,gA=ue`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,vA=B.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
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
`,yA=B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,Es=B.div`
  position: absolute;
  width: 150px;
  height: 150px;
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
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 5px #333, 0 0 0 10px white;
  }

  &.ball1 {
    top: -40px;
    right: 10%;
    animation: ${ws} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${ws} 10s ease-in-out infinite reverse;
  }
`,bA=B(Es)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #3b4cca 50%,
    #3b4cca 100%
  );

  &.ball3 {
    top: 20%;
    right: 5%;
    width: 100px;
    height: 100px;
    animation: ${ws} 15s ease-in-out infinite;
  }
`,xA=B(Es)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ffde00 50%,
    #ffde00 100%
  );

  &.ball4 {
    bottom: 5%;
    right: 15%;
    width: 120px;
    height: 120px;
    animation: ${ws} 18s ease-in-out infinite reverse;
  }
`,SA=B(Es)`
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #9966ff 50%,
    #9966ff 100%
  );

  &.ball5 {
    top: 40%;
    left: 8%;
    width: 80px;
    height: 80px;
    animation: ${ws} 14s ease-in-out infinite;
  }
`,wA=B(Yi)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 30px;
  font-weight: 500;
  z-index: 10;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
`,EA=B.h1`
  font-size: 3rem;
  font-weight: 800;

  text-align: center;
  z-index: 1;
  color: #ffde00;
  -webkit-text-stroke: 2px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
    margin: 2rem 0;
    -webkit-text-stroke: 1px #3b4cca;
  }
`,TA=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 90%;
  height: 60vh;
  height: 60dvh;
  z-index: 1;
  margin: auto 0;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,AA=B.div`
  height: 300px;
  aspect-ratio: 1/1.4;
  border-radius: 15px;
  perspective: 1000px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 350%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transform: skewX(-20deg);
      animation: ${gA} 1s;
    }
  }
`,CA=B.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`,MA=B.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ee1515, #3b4cca);
  border: 3px solid #ffde00;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  }
`,RA=B.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #f0f0f0 0%,
    #f0f0f0 50%,
    #ee1515 50%,
    #ee1515 100%
  );
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

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
    box-shadow: 0 0 0 3px #333, 0 0 0 6px white;
  }
`,zA=B.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,DA=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  z-index: 1;
  animation: ${i2} 0.5s ease;
`,OA=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`,jA=B.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`,BA=B.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 10px;
`,VA=B.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
`,_A=B.div`
  display: flex;
  gap: 1rem;
`,NA=B.button`
  background: linear-gradient(135deg, #3b4cca, #233975);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }
`,LA=B.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`,kA=B.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #233975;
`,UA=B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 0%, #000 70%);
    z-index: 2;
    opacity: 0.4;
  }

  // Create 20 puzzle pieces using grid areas
  ${({$revealedPieces:n})=>zs`
      ${Array.from({length:20}).map((i,s)=>`
        &::before:nth-of-type(${s+1}) {
          content: '';
          position: absolute;
          top: ${Math.floor(s/5)*25}%;
          left: ${s%5*20}%;
          width: 20%;
          height: 25%;
          background: #000;
          opacity: ${s<n?0:1};
          transition: opacity 0.5s ease;
          z-index: 1;
        }
      `).join("")}
    `}
`,HA=B.div`
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,PA=B.div`
  height: 100%;
  width: ${n=>n.$percentage}%;
  background: linear-gradient(90deg, #ee1515, #ff9c54);
  border-radius: 8px;
  transition: width 0.5s ease;
`,qA=B.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,GA=B.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,YA=B.input`
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,$A=B.button`
  padding: 1rem 2rem;
  border-radius: 10px;
  border: none;
  background: #ee1515;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 7px 0 rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`,XA=B.div`
  width: 100%;
  background: ${n=>n.$correct?"rgba(76, 175, 80, 0.2)":"rgba(244, 67, 54, 0.2)"};
  border: 3px solid ${n=>n.$correct?"#4CAF50":"#F44336"};
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${i2} 0.5s ease;
`,QA=B.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffde00;
`,ZA=B.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffde00;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,KA=B.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`,FA=B.button`
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #ee1515, #3b4cca);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
  }
`,JA=B.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 2rem;
  }
`,WA=B.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
`,IA=B.div`
  font-weight: 600;
  margin-right: 1rem;
`,tC=B.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffde00;
`,eC=new URL("/vegetaquizshow/assets/Pokemon%20Mystery%20Dungeon%20Red_Blue%20Rescue%20Team%20Full%20OST%20_6EHwdMQj3i4_00_00_00_00_05_00_part_-CfduThOI.mp3",import.meta.url).href,nC=new URL("/vegetaquizshow/assets/003%20-%20Welcome%20to%20the%20World%20of%20Poke%CC%81mon!-Boc2-QOp.mp3",import.meta.url).href,Fr={"/":nC,"/game":eC},aC=A.createContext({isPlaying:!1,volume:.5,toggleAudio:()=>{},changeVolume:n=>{},currentAudioPath:""}),iC=()=>{const{pathname:n}=fa(),[i]=A.useState(new Audio),[s,l]=A.useState(!1),[u,f]=A.useState(.5),[d,m]=A.useState(!1),[h,p]=A.useState(""),v=A.useRef(null),b=()=>{s?(i.pause(),l(!1),localStorage.setItem("pokemonQuizAudioEnabled","false")):(i.volume=u,i.loop=!0,i.play().then(()=>{l(!0),localStorage.setItem("pokemonQuizAudioEnabled","true")}).catch(C=>console.log("Audio playback error:",C)))},x=C=>{const O=parseFloat(C.toFixed(2));f(O),i.volume=O,localStorage.setItem("pokemonQuizAudioVolume",O.toString())},E=C=>{if(Fr[C])return Fr[C];for(const O in Fr)if(C.startsWith(O)&&O!=="/")return Fr[O];return Fr["/"]};A.useEffect(()=>{const C=localStorage.getItem("pokemonQuizAudioEnabled")==="true",O=localStorage.getItem("pokemonQuizAudioVolume");if(O){const R=parseFloat(O);f(R),i.volume=R}else i.volume=u;C&&l(!0)},[i]),A.useEffect(()=>{const C=E(n);if(C!==h){const O=!i.paused;i.currentTime,i.src=C,p(C),O&&s&&i.play().catch(R=>console.log("Audio playback error:",R))}else s&&i.paused&&i.play().catch(O=>console.log("Audio playback error:",O))},[n,i,s,h]),A.useEffect(()=>{const C=O=>{v.current&&!v.current.contains(O.target)&&m(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]);const S=()=>u===0||!s?T.jsx(T3,{}):u<.5?T.jsx(E3,{}):T.jsx(A3,{});return T.jsx(aC.Provider,{value:{isPlaying:s,volume:u,toggleAudio:b,changeVolume:x,currentAudioPath:h},children:T.jsxs(sC,{ref:v,children:[T.jsx(lC,{onClick:b,onMouseEnter:()=>m(!0),children:S()}),T.jsx(oC,{$visible:d,children:T.jsx(uC,{type:"range",min:"0",max:"0.3",step:"0.01",value:u,onChange:C=>x(parseFloat(C.target.value))})})]})})},rC=()=>T.jsxs(Fx,{basename:"/vegetaquizshow",children:[T.jsx(iC,{}),T.jsxs(Mx,{children:[T.jsx(Mi,{path:"/",element:T.jsx(M3,{})}),T.jsx(Mi,{path:"/game",element:T.jsx(rS,{})}),T.jsx(Mi,{path:"/game/categories",element:T.jsx(hT,{})}),T.jsx(Mi,{path:"/game/wheel",element:T.jsx(eA,{})}),T.jsx(Mi,{path:"/game/image",element:T.jsx(pA,{})})]})]}),sC=B.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
`,lC=B.button`
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
`,oC=B.div`
  position: absolute;
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
`,uC=B.input`
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
`,cC=A.createContext(void 0),fC=({children:n})=>{const[i,s]=A.useState(0),[l,u]=A.useState(0),[f,d]=A.useState(!1),m={score:i,setScore:s,currentQuestion:l,setCurrentQuestion:u,isGameActive:f,setIsGameActive:d};return T.jsx(cC.Provider,{value:m,children:n})};Lb.createRoot(document.getElementById("root")).render(T.jsx(A.StrictMode,{children:T.jsx(fC,{children:T.jsx(rC,{})})}));
