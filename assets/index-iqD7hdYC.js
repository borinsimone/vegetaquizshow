(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function Eb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xc={exports:{}},Gr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Tb(){if(Ap)return Gr;Ap=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:n,type:s,key:d,ref:u!==void 0?u:null,props:f}}return Gr.Fragment=i,Gr.jsx=l,Gr.jsxs=l,Gr}var Cp;function Ab(){return Cp||(Cp=1,Xc.exports=Tb()),Xc.exports}var T=Ab(),Qc={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Cb(){if(Mp)return ut;Mp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function O(M,Y,nt){this.props=M,this.context=Y,this.refs=C,this.updater=nt||E}O.prototype.isReactComponent={},O.prototype.setState=function(M,Y){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Y,"setState")},O.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function R(){}R.prototype=O.prototype;function L(M,Y,nt){this.props=M,this.context=Y,this.refs=C,this.updater=nt||E}var N=L.prototype=new R;N.constructor=L,w(N,O.prototype),N.isPureReactComponent=!0;var $=Array.isArray,U={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function Q(M,Y,nt,it,K,dt){return nt=dt.ref,{$$typeof:n,type:M,key:Y,ref:nt!==void 0?nt:null,props:dt}}function F(M,Y){return Q(M.type,Y,void 0,void 0,void 0,M.props)}function X(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function tt(M){var Y={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(nt){return Y[nt]})}var Rt=/\/+/g;function ie(M,Y){return typeof M=="object"&&M!==null&&M.key!=null?tt(""+M.key):Y.toString(36)}function vt(){}function Yt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(vt,vt):(M.status="pending",M.then(function(Y){M.status==="pending"&&(M.status="fulfilled",M.value=Y)},function(Y){M.status==="pending"&&(M.status="rejected",M.reason=Y)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Gt(M,Y,nt,it,K){var dt=typeof M;(dt==="undefined"||dt==="boolean")&&(M=null);var st=!1;if(M===null)st=!0;else switch(dt){case"bigint":case"string":case"number":st=!0;break;case"object":switch(M.$$typeof){case n:case i:st=!0;break;case v:return st=M._init,Gt(st(M._payload),Y,nt,it,K)}}if(st)return K=K(M),st=it===""?"."+ie(M,0):it,$(K)?(nt="",st!=null&&(nt=st.replace(Rt,"$&/")+"/"),Gt(K,Y,nt,"",function(Et){return Et})):K!=null&&(X(K)&&(K=F(K,nt+(K.key==null||M&&M.key===K.key?"":(""+K.key).replace(Rt,"$&/")+"/")+st)),Y.push(K)),1;st=0;var $t=it===""?".":it+":";if($(M))for(var gt=0;gt<M.length;gt++)it=M[gt],dt=$t+ie(it,gt),st+=Gt(it,Y,nt,dt,K);else if(gt=x(M),typeof gt=="function")for(M=gt.call(M),gt=0;!(it=M.next()).done;)it=it.value,dt=$t+ie(it,gt++),st+=Gt(it,Y,nt,dt,K);else if(dt==="object"){if(typeof M.then=="function")return Gt(Yt(M),Y,nt,it,K);throw Y=String(M),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return st}function Z(M,Y,nt){if(M==null)return M;var it=[],K=0;return Gt(M,it,"","",function(dt){return Y.call(nt,dt,K++)}),it}function J(M){if(M._status===-1){var Y=M._result;Y=Y(),Y.then(function(nt){(M._status===0||M._status===-1)&&(M._status=1,M._result=nt)},function(nt){(M._status===0||M._status===-1)&&(M._status=2,M._result=nt)}),M._status===-1&&(M._status=0,M._result=Y)}if(M._status===1)return M._result.default;throw M._result}var I=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function ct(){}return ut.Children={map:Z,forEach:function(M,Y,nt){Z(M,function(){Y.apply(this,arguments)},nt)},count:function(M){var Y=0;return Z(M,function(){Y++}),Y},toArray:function(M){return Z(M,function(Y){return Y})||[]},only:function(M){if(!X(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ut.Component=O,ut.Fragment=l,ut.Profiler=u,ut.PureComponent=L,ut.StrictMode=s,ut.Suspense=h,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ut.act=function(){throw Error("act(...) is not supported in production builds of React.")},ut.cache=function(M){return function(){return M.apply(null,arguments)}},ut.cloneElement=function(M,Y,nt){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var it=w({},M.props),K=M.key,dt=void 0;if(Y!=null)for(st in Y.ref!==void 0&&(dt=void 0),Y.key!==void 0&&(K=""+Y.key),Y)!G.call(Y,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Y.ref===void 0||(it[st]=Y[st]);var st=arguments.length-2;if(st===1)it.children=nt;else if(1<st){for(var $t=Array(st),gt=0;gt<st;gt++)$t[gt]=arguments[gt+2];it.children=$t}return Q(M.type,K,void 0,void 0,dt,it)},ut.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:f,_context:M},M},ut.createElement=function(M,Y,nt){var it,K={},dt=null;if(Y!=null)for(it in Y.key!==void 0&&(dt=""+Y.key),Y)G.call(Y,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(K[it]=Y[it]);var st=arguments.length-2;if(st===1)K.children=nt;else if(1<st){for(var $t=Array(st),gt=0;gt<st;gt++)$t[gt]=arguments[gt+2];K.children=$t}if(M&&M.defaultProps)for(it in st=M.defaultProps,st)K[it]===void 0&&(K[it]=st[it]);return Q(M,dt,void 0,void 0,null,K)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(M){return{$$typeof:m,render:M}},ut.isValidElement=X,ut.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:J}},ut.memo=function(M,Y){return{$$typeof:p,type:M,compare:Y===void 0?null:Y}},ut.startTransition=function(M){var Y=U.T,nt={};U.T=nt;try{var it=M(),K=U.S;K!==null&&K(nt,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(ct,I)}catch(dt){I(dt)}finally{U.T=Y}},ut.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ut.use=function(M){return U.H.use(M)},ut.useActionState=function(M,Y,nt){return U.H.useActionState(M,Y,nt)},ut.useCallback=function(M,Y){return U.H.useCallback(M,Y)},ut.useContext=function(M){return U.H.useContext(M)},ut.useDebugValue=function(){},ut.useDeferredValue=function(M,Y){return U.H.useDeferredValue(M,Y)},ut.useEffect=function(M,Y){return U.H.useEffect(M,Y)},ut.useId=function(){return U.H.useId()},ut.useImperativeHandle=function(M,Y,nt){return U.H.useImperativeHandle(M,Y,nt)},ut.useInsertionEffect=function(M,Y){return U.H.useInsertionEffect(M,Y)},ut.useLayoutEffect=function(M,Y){return U.H.useLayoutEffect(M,Y)},ut.useMemo=function(M,Y){return U.H.useMemo(M,Y)},ut.useOptimistic=function(M,Y){return U.H.useOptimistic(M,Y)},ut.useReducer=function(M,Y,nt){return U.H.useReducer(M,Y,nt)},ut.useRef=function(M){return U.H.useRef(M)},ut.useState=function(M){return U.H.useState(M)},ut.useSyncExternalStore=function(M,Y,nt){return U.H.useSyncExternalStore(M,Y,nt)},ut.useTransition=function(){return U.H.useTransition()},ut.version="19.0.0",ut}var Rp;function Kf(){return Rp||(Rp=1,Qc.exports=Cb()),Qc.exports}var A=Kf();const Qe=Eb(A);var Zc={exports:{}},$r={},Kc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Mb(){return zp||(zp=1,function(n){function i(Z,J){var I=Z.length;Z.push(J);t:for(;0<I;){var ct=I-1>>>1,M=Z[ct];if(0<u(M,J))Z[ct]=J,Z[I]=M,I=ct;else break t}}function l(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var J=Z[0],I=Z.pop();if(I!==J){Z[0]=I;t:for(var ct=0,M=Z.length,Y=M>>>1;ct<Y;){var nt=2*(ct+1)-1,it=Z[nt],K=nt+1,dt=Z[K];if(0>u(it,I))K<M&&0>u(dt,it)?(Z[ct]=dt,Z[K]=I,ct=K):(Z[ct]=it,Z[nt]=I,ct=nt);else if(K<M&&0>u(dt,I))Z[ct]=dt,Z[K]=I,ct=K;else break t}}return J}function u(Z,J){var I=Z.sortIndex-J.sortIndex;return I!==0?I:Z.id-J.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var h=[],p=[],v=1,y=null,x=3,E=!1,w=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(Z){for(var J=l(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=Z)s(p),J.sortIndex=J.expirationTime,i(h,J);else break;J=l(p)}}function $(Z){if(C=!1,N(Z),!w)if(l(h)!==null)w=!0,Yt();else{var J=l(p);J!==null&&Gt($,J.startTime-Z)}}var U=!1,G=-1,Q=5,F=-1;function X(){return!(n.unstable_now()-F<Q)}function tt(){if(U){var Z=n.unstable_now();F=Z;var J=!0;try{t:{w=!1,C&&(C=!1,R(G),G=-1),E=!0;var I=x;try{e:{for(N(Z),y=l(h);y!==null&&!(y.expirationTime>Z&&X());){var ct=y.callback;if(typeof ct=="function"){y.callback=null,x=y.priorityLevel;var M=ct(y.expirationTime<=Z);if(Z=n.unstable_now(),typeof M=="function"){y.callback=M,N(Z),J=!0;break e}y===l(h)&&s(h),N(Z)}else s(h);y=l(h)}if(y!==null)J=!0;else{var Y=l(p);Y!==null&&Gt($,Y.startTime-Z),J=!1}}break t}finally{y=null,x=I,E=!1}J=void 0}}finally{J?Rt():U=!1}}}var Rt;if(typeof L=="function")Rt=function(){L(tt)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,vt=ie.port2;ie.port1.onmessage=tt,Rt=function(){vt.postMessage(null)}}else Rt=function(){O(tt,0)};function Yt(){U||(U=!0,Rt())}function Gt(Z,J){G=O(function(){Z(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){w||E||(w=!0,Yt())},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return l(h)},n.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var I=x;x=J;try{return Z()}finally{x=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,J){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var I=x;x=Z;try{return J()}finally{x=I}},n.unstable_scheduleCallback=function(Z,J,I){var ct=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ct+I:ct):I=ct,Z){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=I+M,Z={id:v++,callback:J,priorityLevel:Z,startTime:I,expirationTime:M,sortIndex:-1},I>ct?(Z.sortIndex=I,i(p,Z),l(h)===null&&Z===l(p)&&(C?(R(G),G=-1):C=!0,Gt($,I-ct))):(Z.sortIndex=M,i(h,Z),w||E||(w=!0,Yt())),Z},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(Z){var J=x;return function(){var I=x;x=J;try{return Z.apply(this,arguments)}finally{x=I}}}}(Fc)),Fc}var Dp;function Rb(){return Dp||(Dp=1,Kc.exports=Mb()),Kc.exports}var Jc={exports:{}},de={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function zb(){if(Op)return de;Op=1;var n=Kf();function i(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,p,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:h,containerInfo:p,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,de.createPortal=function(h,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return f(h,p,null,v)},de.flushSync=function(h){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,h)return h()}finally{d.T=p,s.p=v,s.d.f()}},de.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(h,p))},de.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},de.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var v=p.as,y=m(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:E}):v==="script"&&s.d.X(h,{crossOrigin:y,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},de.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);s.d.M(h,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(h)},de.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,y=m(v,p.crossOrigin);s.d.L(h,v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},de.preloadModule=function(h,p){if(typeof h=="string")if(p){var v=m(p.as,p.crossOrigin);s.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(h)},de.requestFormReset=function(h){s.d.r(h)},de.unstable_batchedUpdates=function(h,p){return h(p)},de.useFormState=function(h,p,v){return d.H.useFormState(h,p,v)},de.useFormStatus=function(){return d.H.useHostTransitionStatus()},de.version="19.0.0",de}var jp;function Db(){if(jp)return Jc.exports;jp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Jc.exports=zb(),Jc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Ob(){if(Bp)return $r;Bp=1;var n=Rb(),i=Kf(),l=Db();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),E=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),$=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=U&&t[U]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function F(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case h:return"Fragment";case m:return"Portal";case v:return"Profiler";case p:return"StrictMode";case C:return"Suspense";case O:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case w:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return e=t.displayName||null,e!==null?e:F(t.type)||"Memo";case L:e=t._payload,t=t._init;try{return F(t(e))}catch{}}return null}var X=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=Object.assign,Rt,ie;function vt(t){if(Rt===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Rt=e&&e[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+ie}var Yt=!1;function Gt(t,e){if(!t||Yt)return"";Yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(k){var V=k}Reflect.construct(t,[],q)}else{try{q.call()}catch(k){V=k}t.call(q.prototype)}}else{try{throw Error()}catch(k){V=k}(q=t())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(k){if(k&&V&&typeof k.stack=="string")return[k.stack,V.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],b=c[1];if(g&&b){var S=g.split(`
`),D=b.split(`
`);for(o=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;if(r===S.length||o===D.length)for(r=S.length-1,o=D.length-1;1<=r&&0<=o&&S[r]!==D[o];)o--;for(;1<=r&&0<=o;r--,o--)if(S[r]!==D[o]){if(r!==1||o!==1)do if(r--,o--,0>o||S[r]!==D[o]){var H=`
`+S[r].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=r&&0<=o);break}}}finally{Yt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function Z(t){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return t=Gt(t.type,!1),t;case 11:return t=Gt(t.type.render,!1),t;case 1:return t=Gt(t.type,!0),t;default:return""}}function J(t){try{var e="";do e+=Z(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function I(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function ct(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function M(t){if(I(t)!==t)throw Error(s(188))}function Y(t){var e=t.alternate;if(!e){if(e=I(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,r=e;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return M(o),t;if(c===r)return M(o),e;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=o,r=c;else{for(var g=!1,b=o.child;b;){if(b===a){g=!0,a=o,r=c;break}if(b===r){g=!0,r=o,a=c;break}b=b.sibling}if(!g){for(b=c.child;b;){if(b===a){g=!0,a=c,r=o;break}if(b===r){g=!0,r=c,a=o;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function nt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=nt(t),e!==null)return e;t=t.sibling}return null}var it=Array.isArray,K=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},st=[],$t=-1;function gt(t){return{current:t}}function Et(t){0>$t||(t.current=st[$t],st[$t]=null,$t--)}function Tt(t,e){$t++,st[$t]=t.current,t.current=e}var pe=gt(null),be=gt(null),Ln=gt(null),Ol=gt(null);function jl(t,e){switch(Tt(Ln,e),Tt(be,t),Tt(pe,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?tp(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=tp(t),e=ep(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(pe),Tt(pe,e)}function Ga(){Et(pe),Et(be),Et(Ln)}function Lo(t){t.memoizedState!==null&&Tt(Ol,t);var e=pe.current,a=ep(e,t.type);e!==a&&(Tt(be,t),Tt(pe,a))}function Bl(t){be.current===t&&(Et(pe),Et(be)),Ol.current===t&&(Et(Ol),kr._currentValue=dt)}var Uo=Object.prototype.hasOwnProperty,ko=n.unstable_scheduleCallback,Ho=n.unstable_cancelCallback,e2=n.unstable_shouldYield,n2=n.unstable_requestPaint,en=n.unstable_now,a2=n.unstable_getCurrentPriorityLevel,Yd=n.unstable_ImmediatePriority,Gd=n.unstable_UserBlockingPriority,_l=n.unstable_NormalPriority,i2=n.unstable_LowPriority,$d=n.unstable_IdlePriority,r2=n.log,l2=n.unstable_setDisableYieldValue,Zi=null,Te=null;function s2(t){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Zi,t,void 0,(t.current.flags&128)===128)}catch{}}function Un(t){if(typeof r2=="function"&&l2(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Zi,t)}catch{}}var Ae=Math.clz32?Math.clz32:c2,o2=Math.log,u2=Math.LN2;function c2(t){return t>>>=0,t===0?32:31-(o2(t)/u2|0)|0}var Vl=128,Nl=4194304;function ha(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ll(t,e){var a=t.pendingLanes;if(a===0)return 0;var r=0,o=t.suspendedLanes,c=t.pingedLanes,g=t.warmLanes;t=t.finishedLanes!==0;var b=a&134217727;return b!==0?(a=b&~o,a!==0?r=ha(a):(c&=b,c!==0?r=ha(c):t||(g=b&~g,g!==0&&(r=ha(g))))):(b=a&~o,b!==0?r=ha(b):c!==0?r=ha(c):t||(g=a&~g,g!==0&&(r=ha(g)))),r===0?0:e!==0&&e!==r&&(e&o)===0&&(o=r&-r,g=e&-e,o>=g||o===32&&(g&4194176)!==0)?e:r}function Ki(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function f2(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(){var t=Vl;return Vl<<=1,(Vl&4194176)===0&&(Vl=128),t}function Qd(){var t=Nl;return Nl<<=1,(Nl&62914560)===0&&(Nl=4194304),t}function Po(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Fi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function d2(t,e,a,r,o,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,S=t.expirationTimes,D=t.hiddenUpdates;for(a=g&~a;0<a;){var H=31-Ae(a),q=1<<H;b[H]=0,S[H]=-1;var V=D[H];if(V!==null)for(D[H]=null,H=0;H<V.length;H++){var k=V[H];k!==null&&(k.lane&=-536870913)}a&=~q}r!==0&&Zd(t,r,0),c!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function Zd(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Ae(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194218}function Kd(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-Ae(a),o=1<<r;o&e|t[r]&e&&(t[r]|=e),a&=~o}}function Fd(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jd(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:bp(t.type))}function h2(t,e){var a=K.p;try{return K.p=t,e()}finally{K.p=a}}var kn=Math.random().toString(36).slice(2),ce="__reactFiber$"+kn,xe="__reactProps$"+kn,$a="__reactContainer$"+kn,qo="__reactEvents$"+kn,m2="__reactListeners$"+kn,p2="__reactHandles$"+kn,Wd="__reactResources$"+kn,Ji="__reactMarker$"+kn;function Yo(t){delete t[ce],delete t[xe],delete t[qo],delete t[m2],delete t[p2]}function ma(t){var e=t[ce];if(e)return e;for(var a=t.parentNode;a;){if(e=a[$a]||a[ce]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=ip(t);t!==null;){if(a=t[ce])return a;t=ip(t)}return e}t=a,a=t.parentNode}return null}function Xa(t){if(t=t[ce]||t[$a]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Wi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Qa(t){var e=t[Wd];return e||(e=t[Wd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[Ji]=!0}var Id=new Set,th={};function pa(t,e){Za(t,e),Za(t+"Capture",e)}function Za(t,e){for(th[t]=e,t=0;t<e.length;t++)Id.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eh={},nh={};function v2(t){return Uo.call(nh,t)?!0:Uo.call(eh,t)?!1:g2.test(t)?nh[t]=!0:(eh[t]=!0,!1)}function Ul(t,e,a){if(v2(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function kl(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function mn(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ah(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y2(t){var e=ah(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hl(t){t._valueTracker||(t._valueTracker=y2(t))}function ih(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=ah(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var b2=/[\n"\\]/g;function _e(t){return t.replace(b2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Go(t,e,a,r,o,c,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?$o(t,g,Be(e)):a!=null?$o(t,g,Be(a)):r!=null&&t.removeAttribute("value"),o==null&&c!=null&&(t.defaultChecked=!!c),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Be(b):t.removeAttribute("name")}function rh(t,e,a,r,o,c,g,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+Be(a):"",e=e!=null?""+Be(e):a,b||e===t.value||(t.value=e),t.defaultValue=e}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function $o(t,e,a){e==="number"&&Pl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ka(t,e,a,r){if(t=t.options,e){e={};for(var o=0;o<a.length;o++)e["$"+a[o]]=!0;for(a=0;a<t.length;a++)o=e.hasOwnProperty("$"+t[a].value),t[a].selected!==o&&(t[a].selected=o),o&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Be(a),e=null,o=0;o<t.length;o++){if(t[o].value===a){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function lh(t,e,a){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Be(a):""}function sh(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(s(92));if(it(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=Be(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function Fa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var x2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oh(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||x2.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function uh(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var o in e)r=e[o],e.hasOwnProperty(o)&&a[o]!==r&&oh(t,o,r)}else for(var c in e)e.hasOwnProperty(c)&&oh(t,c,e[c])}function Xo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var S2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),w2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(t){return w2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Qo=null;function Zo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ja=null,Wa=null;function ch(t){var e=Xa(t);if(e&&(t=e.stateNode)){var a=t[xe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Go(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var o=r[xe]||null;if(!o)throw Error(s(90));Go(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&ih(r)}break t;case"textarea":lh(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ka(t,!!a.multiple,e,!1)}}}var Ko=!1;function fh(t,e,a){if(Ko)return t(e,a);Ko=!0;try{var r=t(e);return r}finally{if(Ko=!1,(Ja!==null||Wa!==null)&&(As(),Ja&&(e=Ja,t=Wa,Wa=Ja=null,ch(e),t)))for(e=0;e<t.length;e++)ch(t[e])}}function Ii(t,e){var a=t.stateNode;if(a===null)return null;var r=a[xe]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var Fo=!1;if(hn)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Fo=!1}var Hn=null,Jo=null,Yl=null;function dh(){if(Yl)return Yl;var t,e=Jo,a=e.length,r,o="value"in Hn?Hn.value:Hn.textContent,c=o.length;for(t=0;t<a&&e[t]===o[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===o[c-r];r++);return Yl=o.slice(t,1<r?1-r:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function hh(){return!1}function Se(t){function e(a,r,o,c,g){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?$l:hh,this.isPropagationStopped=hh,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Se(ga),er=tt({},ga,{view:0,detail:0}),E2=Se(er),Wo,Io,nr,Ql=tt({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nr&&(nr&&t.type==="mousemove"?(Wo=t.screenX-nr.screenX,Io=t.screenY-nr.screenY):Io=Wo=0,nr=t),Wo)},movementY:function(t){return"movementY"in t?t.movementY:Io}}),mh=Se(Ql),T2=tt({},Ql,{dataTransfer:0}),A2=Se(T2),C2=tt({},er,{relatedTarget:0}),tu=Se(C2),M2=tt({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),R2=Se(M2),z2=tt({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D2=Se(z2),O2=tt({},ga,{data:0}),ph=Se(O2),j2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_2[t])?!!e[t]:!1}function eu(){return V2}var N2=tt({},er,{key:function(t){if(t.key){var e=j2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L2=Se(N2),U2=tt({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=Se(U2),k2=tt({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),H2=Se(k2),P2=tt({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),q2=Se(P2),Y2=tt({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G2=Se(Y2),$2=tt({},ga,{newState:0,oldState:0}),X2=Se($2),Q2=[9,13,27,32],nu=hn&&"CompositionEvent"in window,ar=null;hn&&"documentMode"in document&&(ar=document.documentMode);var Z2=hn&&"TextEvent"in window&&!ar,vh=hn&&(!nu||ar&&8<ar&&11>=ar),yh=" ",bh=!1;function xh(t,e){switch(t){case"keyup":return Q2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ia=!1;function K2(t,e){switch(t){case"compositionend":return Sh(e);case"keypress":return e.which!==32?null:(bh=!0,yh);case"textInput":return t=e.data,t===yh&&bh?null:t;default:return null}}function F2(t,e){if(Ia)return t==="compositionend"||!nu&&xh(t,e)?(t=dh(),Yl=Jo=Hn=null,Ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vh&&e.locale!=="ko"?null:e.data;default:return null}}var J2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J2[t.type]:e==="textarea"}function Eh(t,e,a,r){Ja?Wa?Wa.push(r):Wa=[r]:Ja=r,e=Ds(e,"onChange"),0<e.length&&(a=new Xl("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var ir=null,rr=null;function W2(t){Km(t,0)}function Zl(t){var e=Wi(t);if(ih(e))return t}function Th(t,e){if(t==="change")return e}var Ah=!1;if(hn){var au;if(hn){var iu="oninput"in document;if(!iu){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),iu=typeof Ch.oninput=="function"}au=iu}else au=!1;Ah=au&&(!document.documentMode||9<document.documentMode)}function Mh(){ir&&(ir.detachEvent("onpropertychange",Rh),rr=ir=null)}function Rh(t){if(t.propertyName==="value"&&Zl(rr)){var e=[];Eh(e,rr,t,Zo(t)),fh(W2,e)}}function I2(t,e,a){t==="focusin"?(Mh(),ir=e,rr=a,ir.attachEvent("onpropertychange",Rh)):t==="focusout"&&Mh()}function t5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(rr)}function e5(t,e){if(t==="click")return Zl(e)}function n5(t,e){if(t==="input"||t==="change")return Zl(e)}function a5(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:a5;function lr(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Uo.call(e,o)||!Ce(t[o],e[o]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,e){var a=zh(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zh(a)}}function Oh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Oh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pl(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Pl(t.document)}return e}function ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function i5(t,e){var a=jh(e);e=t.focusedElem;var r=t.selectionRange;if(a!==e&&e&&e.ownerDocument&&Oh(e.ownerDocument.documentElement,e)){if(r!==null&&ru(e)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(a,e.value.length);else if(a=(t=e.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var o=e.textContent.length,c=Math.min(r.start,o);r=r.end===void 0?c:Math.min(r.end,o),!a.extend&&c>r&&(o=r,r=c,c=o),o=Dh(e,c);var g=Dh(e,r);o&&g&&(a.rangeCount!==1||a.anchorNode!==o.node||a.anchorOffset!==o.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),a.removeAllRanges(),c>r?(a.addRange(t),a.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),a.addRange(t)))}}for(t=[],a=e;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)a=t[e],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var r5=hn&&"documentMode"in document&&11>=document.documentMode,ti=null,lu=null,sr=null,su=!1;function Bh(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||ti==null||ti!==Pl(r)||(r=ti,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&lr(sr,r)||(sr=r,r=Ds(lu,"onSelect"),0<r.length&&(e=new Xl("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=ti)))}function va(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ei={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},ou={},_h={};hn&&(_h=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function ya(t){if(ou[t])return ou[t];if(!ei[t])return t;var e=ei[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in _h)return ou[t]=e[a];return t}var Vh=ya("animationend"),Nh=ya("animationiteration"),Lh=ya("animationstart"),l5=ya("transitionrun"),s5=ya("transitionstart"),o5=ya("transitioncancel"),Uh=ya("transitionend"),kh=new Map,Hh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ke(t,e){kh.set(t,e),pa(e,[t])}var Ve=[],ni=0,uu=0;function Kl(){for(var t=ni,e=uu=ni=0;e<t;){var a=Ve[e];Ve[e++]=null;var r=Ve[e];Ve[e++]=null;var o=Ve[e];Ve[e++]=null;var c=Ve[e];if(Ve[e++]=null,r!==null&&o!==null){var g=r.pending;g===null?o.next=o:(o.next=g.next,g.next=o),r.pending=o}c!==0&&Ph(a,o,c)}}function Fl(t,e,a,r){Ve[ni++]=t,Ve[ni++]=e,Ve[ni++]=a,Ve[ni++]=r,uu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function cu(t,e,a,r){return Fl(t,e,a,r),Jl(t)}function Pn(t,e){return Fl(t,null,null,e),Jl(t)}function Ph(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var o=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(o=!0)),t=c,c=c.return;o&&e!==null&&t.tag===3&&(c=t.stateNode,o=31-Ae(a),c=c.hiddenUpdates,t=c[o],t===null?c[o]=[e]:t.push(e),e.lane=a|536870912)}function Jl(t){if(50<jr)throw jr=0,gc=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ai={},qh=new WeakMap;function Ne(t,e){if(typeof t=="object"&&t!==null){var a=qh.get(t);return a!==void 0?a:(e={value:t,source:e,stack:J(e)},qh.set(t,e),e)}return{value:t,source:e,stack:J(e)}}var ii=[],ri=0,Wl=null,Il=0,Le=[],Ue=0,ba=null,pn=1,gn="";function xa(t,e){ii[ri++]=Il,ii[ri++]=Wl,Wl=t,Il=e}function Yh(t,e,a){Le[Ue++]=pn,Le[Ue++]=gn,Le[Ue++]=ba,ba=t;var r=pn;t=gn;var o=32-Ae(r)-1;r&=~(1<<o),a+=1;var c=32-Ae(e)+o;if(30<c){var g=o-o%5;c=(r&(1<<g)-1).toString(32),r>>=g,o-=g,pn=1<<32-Ae(e)+o|a<<o|r,gn=c+t}else pn=1<<c|a<<o|r,gn=t}function fu(t){t.return!==null&&(xa(t,1),Yh(t,1,0))}function du(t){for(;t===Wl;)Wl=ii[--ri],ii[ri]=null,Il=ii[--ri],ii[ri]=null;for(;t===ba;)ba=Le[--Ue],Le[Ue]=null,gn=Le[--Ue],Le[Ue]=null,pn=Le[--Ue],Le[Ue]=null}var ge=null,re=null,xt=!1,Fe=null,nn=!1,hu=Error(s(519));function Sa(t){var e=Error(s(418,""));throw cr(Ne(e,t)),hu}function Gh(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[ce]=t,e[xe]=r,a){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(a=0;a<_r.length;a++)yt(_r[a],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),rh(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Hl(e);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),sh(e,r.value,r.defaultValue,r.children),Hl(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||Im(e.textContent,a)?(r.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),r.onScroll!=null&&yt("scroll",e),r.onScrollEnd!=null&&yt("scrollend",e),r.onClick!=null&&(e.onclick=Os),e=!0):e=!1,e||Sa(t)}function $h(t){for(ge=t.return;ge;)switch(ge.tag){case 3:case 27:nn=!0;return;case 5:case 13:nn=!1;return;default:ge=ge.return}}function or(t){if(t!==ge)return!1;if(!xt)return $h(t),xt=!0,!1;var e=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Bc(t.type,t.memoizedProps)),a=!a),a&&(e=!0),e&&re&&Sa(t),$h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){re=We(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}re=null}}else re=ge?We(t.stateNode.nextSibling):null;return!0}function ur(){re=ge=null,xt=!1}function cr(t){Fe===null?Fe=[t]:Fe.push(t)}var fr=Error(s(460)),Xh=Error(s(474)),mu={then:function(){}};function Qh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ts(){}function Zh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ts,ts),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===fr?Error(s(483)):t;default:if(typeof e.status=="string")e.then(ts,ts);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=r}},function(r){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===fr?Error(s(483)):t}throw dr=e,fr}}var dr=null;function Kh(){if(dr===null)throw Error(s(459));var t=dr;return dr=null,t}var li=null,hr=0;function es(t){var e=hr;return hr+=1,li===null&&(li=[]),Zh(li,t,e)}function mr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ns(t,e){throw e.$$typeof===f?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Fh(t){var e=t._init;return e(t._payload)}function Jh(t){function e(j,z){if(t){var B=j.deletions;B===null?(j.deletions=[z],j.flags|=16):B.push(z)}}function a(j,z){if(!t)return null;for(;z!==null;)e(j,z),z=z.sibling;return null}function r(j){for(var z=new Map;j!==null;)j.key!==null?z.set(j.key,j):z.set(j.index,j),j=j.sibling;return z}function o(j,z){return j=In(j,z),j.index=0,j.sibling=null,j}function c(j,z,B){return j.index=B,t?(B=j.alternate,B!==null?(B=B.index,B<z?(j.flags|=33554434,z):B):(j.flags|=33554434,z)):(j.flags|=1048576,z)}function g(j){return t&&j.alternate===null&&(j.flags|=33554434),j}function b(j,z,B,P){return z===null||z.tag!==6?(z=oc(B,j.mode,P),z.return=j,z):(z=o(z,B),z.return=j,z)}function S(j,z,B,P){var W=B.type;return W===h?H(j,z,B.props.children,P,B.key):z!==null&&(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&Fh(W)===z.type)?(z=o(z,B.props),mr(z,B),z.return=j,z):(z=xs(B.type,B.key,B.props,null,j.mode,P),mr(z,B),z.return=j,z)}function D(j,z,B,P){return z===null||z.tag!==4||z.stateNode.containerInfo!==B.containerInfo||z.stateNode.implementation!==B.implementation?(z=uc(B,j.mode,P),z.return=j,z):(z=o(z,B.children||[]),z.return=j,z)}function H(j,z,B,P,W){return z===null||z.tag!==7?(z=Oa(B,j.mode,P,W),z.return=j,z):(z=o(z,B),z.return=j,z)}function q(j,z,B){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=oc(""+z,j.mode,B),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case d:return B=xs(z.type,z.key,z.props,null,j.mode,B),mr(B,z),B.return=j,B;case m:return z=uc(z,j.mode,B),z.return=j,z;case L:var P=z._init;return z=P(z._payload),q(j,z,B)}if(it(z)||G(z))return z=Oa(z,j.mode,B,null),z.return=j,z;if(typeof z.then=="function")return q(j,es(z),B);if(z.$$typeof===E)return q(j,vs(j,z),B);ns(j,z)}return null}function V(j,z,B,P){var W=z!==null?z.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return W!==null?null:b(j,z,""+B,P);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case d:return B.key===W?S(j,z,B,P):null;case m:return B.key===W?D(j,z,B,P):null;case L:return W=B._init,B=W(B._payload),V(j,z,B,P)}if(it(B)||G(B))return W!==null?null:H(j,z,B,P,null);if(typeof B.then=="function")return V(j,z,es(B),P);if(B.$$typeof===E)return V(j,z,vs(j,B),P);ns(j,B)}return null}function k(j,z,B,P,W){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return j=j.get(B)||null,b(z,j,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case d:return j=j.get(P.key===null?B:P.key)||null,S(z,j,P,W);case m:return j=j.get(P.key===null?B:P.key)||null,D(z,j,P,W);case L:var mt=P._init;return P=mt(P._payload),k(j,z,B,P,W)}if(it(P)||G(P))return j=j.get(B)||null,H(z,j,P,W,null);if(typeof P.then=="function")return k(j,z,B,es(P),W);if(P.$$typeof===E)return k(j,z,B,vs(z,P),W);ns(z,P)}return null}function et(j,z,B,P){for(var W=null,mt=null,at=z,rt=z=0,ee=null;at!==null&&rt<B.length;rt++){at.index>rt?(ee=at,at=null):ee=at.sibling;var St=V(j,at,B[rt],P);if(St===null){at===null&&(at=ee);break}t&&at&&St.alternate===null&&e(j,at),z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St,at=ee}if(rt===B.length)return a(j,at),xt&&xa(j,rt),W;if(at===null){for(;rt<B.length;rt++)at=q(j,B[rt],P),at!==null&&(z=c(at,z,rt),mt===null?W=at:mt.sibling=at,mt=at);return xt&&xa(j,rt),W}for(at=r(at);rt<B.length;rt++)ee=k(at,j,rt,B[rt],P),ee!==null&&(t&&ee.alternate!==null&&at.delete(ee.key===null?rt:ee.key),z=c(ee,z,rt),mt===null?W=ee:mt.sibling=ee,mt=ee);return t&&at.forEach(function(la){return e(j,la)}),xt&&xa(j,rt),W}function ot(j,z,B,P){if(B==null)throw Error(s(151));for(var W=null,mt=null,at=z,rt=z=0,ee=null,St=B.next();at!==null&&!St.done;rt++,St=B.next()){at.index>rt?(ee=at,at=null):ee=at.sibling;var la=V(j,at,St.value,P);if(la===null){at===null&&(at=ee);break}t&&at&&la.alternate===null&&e(j,at),z=c(la,z,rt),mt===null?W=la:mt.sibling=la,mt=la,at=ee}if(St.done)return a(j,at),xt&&xa(j,rt),W;if(at===null){for(;!St.done;rt++,St=B.next())St=q(j,St.value,P),St!==null&&(z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St);return xt&&xa(j,rt),W}for(at=r(at);!St.done;rt++,St=B.next())St=k(at,j,rt,St.value,P),St!==null&&(t&&St.alternate!==null&&at.delete(St.key===null?rt:St.key),z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St);return t&&at.forEach(function(wb){return e(j,wb)}),xt&&xa(j,rt),W}function kt(j,z,B,P){if(typeof B=="object"&&B!==null&&B.type===h&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case d:t:{for(var W=B.key;z!==null;){if(z.key===W){if(W=B.type,W===h){if(z.tag===7){a(j,z.sibling),P=o(z,B.props.children),P.return=j,j=P;break t}}else if(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&Fh(W)===z.type){a(j,z.sibling),P=o(z,B.props),mr(P,B),P.return=j,j=P;break t}a(j,z);break}else e(j,z);z=z.sibling}B.type===h?(P=Oa(B.props.children,j.mode,P,B.key),P.return=j,j=P):(P=xs(B.type,B.key,B.props,null,j.mode,P),mr(P,B),P.return=j,j=P)}return g(j);case m:t:{for(W=B.key;z!==null;){if(z.key===W)if(z.tag===4&&z.stateNode.containerInfo===B.containerInfo&&z.stateNode.implementation===B.implementation){a(j,z.sibling),P=o(z,B.children||[]),P.return=j,j=P;break t}else{a(j,z);break}else e(j,z);z=z.sibling}P=uc(B,j.mode,P),P.return=j,j=P}return g(j);case L:return W=B._init,B=W(B._payload),kt(j,z,B,P)}if(it(B))return et(j,z,B,P);if(G(B)){if(W=G(B),typeof W!="function")throw Error(s(150));return B=W.call(B),ot(j,z,B,P)}if(typeof B.then=="function")return kt(j,z,es(B),P);if(B.$$typeof===E)return kt(j,z,vs(j,B),P);ns(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,z!==null&&z.tag===6?(a(j,z.sibling),P=o(z,B),P.return=j,j=P):(a(j,z),P=oc(B,j.mode,P),P.return=j,j=P),g(j)):a(j,z)}return function(j,z,B,P){try{hr=0;var W=kt(j,z,B,P);return li=null,W}catch(at){if(at===fr)throw at;var mt=qe(29,at,null,j.mode);return mt.lanes=P,mt.return=j,mt}finally{}}}var wa=Jh(!0),Wh=Jh(!1),si=gt(null),as=gt(0);function Ih(t,e){t=Mn,Tt(as,t),Tt(si,e),Mn=t|e.baseLanes}function pu(){Tt(as,Mn),Tt(si,si.current)}function gu(){Mn=as.current,Et(si),Et(as)}var ke=gt(null),an=null;function qn(t){var e=t.alternate;Tt(Ft,Ft.current&1),Tt(ke,t),an===null&&(e===null||si.current!==null||e.memoizedState!==null)&&(an=t)}function t0(t){if(t.tag===22){if(Tt(Ft,Ft.current),Tt(ke,t),an===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(an=t)}}else Yn()}function Yn(){Tt(Ft,Ft.current),Tt(ke,ke.current)}function vn(t){Et(ke),an===t&&(an=null),Et(Ft)}var Ft=gt(0);function is(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var u5=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},c5=n.unstable_scheduleCallback,f5=n.unstable_NormalPriority,Jt={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new u5,data:new Map,refCount:0}}function pr(t){t.refCount--,t.refCount===0&&c5(f5,function(){t.controller.abort()})}var gr=null,yu=0,oi=0,ui=null;function d5(t,e){if(gr===null){var a=gr=[];yu=0,oi=Tc(),ui={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yu++,e.then(e0,e0),e}function e0(){if(--yu===0&&gr!==null){ui!==null&&(ui.status="fulfilled");var t=gr;gr=null,oi=0,ui=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function h5(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var o=0;o<a.length;o++)(0,a[o])(e)},function(o){for(r.status="rejected",r.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),r}var n0=X.S;X.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&d5(t,e),n0!==null&&n0(t,e)};var Ea=gt(null);function bu(){var t=Ea.current;return t!==null?t:zt.pooledCache}function rs(t,e){e===null?Tt(Ea,Ea.current):Tt(Ea,e.pool)}function a0(){var t=bu();return t===null?null:{parent:Jt._currentValue,pool:t}}var Gn=0,ht=null,At=null,Xt=null,ls=!1,ci=!1,Ta=!1,ss=0,vr=0,fi=null,m5=0;function Pt(){throw Error(s(321))}function xu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ce(t[a],e[a]))return!1;return!0}function Su(t,e,a,r,o,c){return Gn=c,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,X.H=t===null||t.memoizedState===null?Aa:$n,Ta=!1,c=a(r,o),Ta=!1,ci&&(c=r0(e,a,r,o)),i0(t),c}function i0(t){X.H=rn;var e=At!==null&&At.next!==null;if(Gn=0,Xt=At=ht=null,ls=!1,vr=0,fi=null,e)throw Error(s(300));t===null||It||(t=t.dependencies,t!==null&&gs(t)&&(It=!0))}function r0(t,e,a,r){ht=t;var o=0;do{if(ci&&(fi=null),vr=0,ci=!1,25<=o)throw Error(s(301));if(o+=1,Xt=At=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}X.H=Ca,c=e(a,r)}while(ci);return c}function p5(){var t=X.H,e=t.useState()[0];return e=typeof e.then=="function"?yr(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ht.flags|=1024),e}function wu(){var t=ss!==0;return ss=0,t}function Eu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Tu(t){if(ls){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ls=!1}Gn=0,Xt=At=ht=null,ci=!1,vr=ss=0,fi=null}function we(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?ht.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Qt(){if(At===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Xt===null?ht.memoizedState:Xt.next;if(e!==null)Xt=e,At=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Xt===null?ht.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}var os;os=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function yr(t){var e=vr;return vr+=1,fi===null&&(fi=[]),t=Zh(fi,t,e),e=ht,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,X.H=e===null||e.memoizedState===null?Aa:$n),t}function us(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yr(t);if(t.$$typeof===E)return fe(t)}throw Error(s(438,String(t)))}function Au(t){var e=null,a=ht.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=ht.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=os(),ht.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=$;return e.index++,a}function yn(t,e){return typeof e=="function"?e(t):e}function cs(t){var e=Qt();return Cu(e,At,t)}function Cu(t,e,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var o=t.baseQueue,c=r.pending;if(c!==null){if(o!==null){var g=o.next;o.next=c.next,c.next=g}e.baseQueue=o=c,r.pending=null}if(c=t.baseState,o===null)t.memoizedState=c;else{e=o.next;var b=g=null,S=null,D=e,H=!1;do{var q=D.lane&-536870913;if(q!==D.lane?(bt&q)===q:(Gn&q)===q){var V=D.revertLane;if(V===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),q===oi&&(H=!0);else if((Gn&V)===V){D=D.next,V===oi&&(H=!0);continue}else q={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(b=S=q,g=c):S=S.next=q,ht.lanes|=V,ta|=V;q=D.action,Ta&&a(c,q),c=D.hasEagerState?D.eagerState:a(c,q)}else V={lane:q,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(b=S=V,g=c):S=S.next=V,ht.lanes|=q,ta|=q;D=D.next}while(D!==null&&D!==e);if(S===null?g=c:S.next=b,!Ce(c,t.memoizedState)&&(It=!0,H&&(a=ui,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=S,r.lastRenderedState=c}return o===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Mu(t){var e=Qt(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,o=a.pending,c=e.memoizedState;if(o!==null){a.pending=null;var g=o=o.next;do c=t(c,g.action),g=g.next;while(g!==o);Ce(c,e.memoizedState)||(It=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function l0(t,e,a){var r=ht,o=Qt(),c=xt;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=e();var g=!Ce((At||o).memoizedState,a);if(g&&(o.memoizedState=a,It=!0),o=o.queue,Du(u0.bind(null,r,o,t),[t]),o.getSnapshot!==e||g||Xt!==null&&Xt.memoizedState.tag&1){if(r.flags|=2048,di(9,o0.bind(null,r,o,a,e),{destroy:void 0},null),zt===null)throw Error(s(349));c||(Gn&60)!==0||s0(r,e,a)}return a}function s0(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ht.updateQueue,e===null?(e=os(),ht.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function o0(t,e,a,r){e.value=a,e.getSnapshot=r,c0(e)&&f0(t)}function u0(t,e,a){return a(function(){c0(e)&&f0(t)})}function c0(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ce(t,a)}catch{return!0}}function f0(t){var e=Pn(t,2);e!==null&&ve(e,t,2)}function Ru(t){var e=we();if(typeof t=="function"){var a=t;if(t=a(),Ta){Un(!0);try{a()}finally{Un(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:t},e}function d0(t,e,a,r){return t.baseState=a,Cu(t,At,typeof r=="function"?r:yn)}function g5(t,e,a,r,o){if(hs(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};X.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,h0(e,c)):(c.next=a.next,e.pending=a.next=c)}}function h0(t,e){var a=e.action,r=e.payload,o=t.state;if(e.isTransition){var c=X.T,g={};X.T=g;try{var b=a(o,r),S=X.S;S!==null&&S(g,b),m0(t,e,b)}catch(D){zu(t,e,D)}finally{X.T=c}}else try{c=a(o,r),m0(t,e,c)}catch(D){zu(t,e,D)}}function m0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){p0(t,e,r)},function(r){return zu(t,e,r)}):p0(t,e,a)}function p0(t,e,a){e.status="fulfilled",e.value=a,g0(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,h0(t,a)))}function zu(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,g0(e),e=e.next;while(e!==r)}t.action=null}function g0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function v0(t,e){return e}function y0(t,e){if(xt){var a=zt.formState;if(a!==null){t:{var r=ht;if(xt){if(re){e:{for(var o=re,c=nn;o.nodeType!==8;){if(!c){o=null;break e}if(o=We(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){re=We(o.nextSibling),r=o.data==="F!";break t}}Sa(r)}r=!1}r&&(e=a[0])}}return a=we(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:e},a.queue=r,a=N0.bind(null,ht,r),r.dispatch=a,r=Ru(!1),c=Vu.bind(null,ht,!1,r.queue),r=we(),o={state:e,dispatch:null,action:t,pending:null},r.queue=o,a=g5.bind(null,ht,o,c,a),o.dispatch=a,r.memoizedState=t,[e,a,!1]}function b0(t){var e=Qt();return x0(e,At,t)}function x0(t,e,a){e=Cu(t,e,v0)[0],t=cs(yn)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?yr(e):e;var r=Qt(),o=r.queue,c=o.dispatch;return a!==r.memoizedState&&(ht.flags|=2048,di(9,v5.bind(null,o,a),{destroy:void 0},null)),[e,c,t]}function v5(t,e){t.action=e}function S0(t){var e=Qt(),a=At;if(a!==null)return x0(e,a,t);Qt(),e=e.memoizedState,a=Qt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function di(t,e,a,r){return t={tag:t,create:e,inst:a,deps:r,next:null},e=ht.updateQueue,e===null&&(e=os(),ht.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function w0(){return Qt().memoizedState}function fs(t,e,a,r){var o=we();ht.flags|=t,o.memoizedState=di(1|e,a,{destroy:void 0},r===void 0?null:r)}function ds(t,e,a,r){var o=Qt();r=r===void 0?null:r;var c=o.memoizedState.inst;At!==null&&r!==null&&xu(r,At.memoizedState.deps)?o.memoizedState=di(e,a,c,r):(ht.flags|=t,o.memoizedState=di(1|e,a,c,r))}function E0(t,e){fs(8390656,8,t,e)}function Du(t,e){ds(2048,8,t,e)}function T0(t,e){return ds(4,2,t,e)}function A0(t,e){return ds(4,4,t,e)}function C0(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function M0(t,e,a){a=a!=null?a.concat([t]):null,ds(4,4,C0.bind(null,e,t),a)}function Ou(){}function R0(t,e){var a=Qt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&xu(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function z0(t,e){var a=Qt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&xu(e,r[1]))return r[0];if(r=t(),Ta){Un(!0);try{t()}finally{Un(!1)}}return a.memoizedState=[r,e],r}function ju(t,e,a){return a===void 0||(Gn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Om(),ht.lanes|=t,ta|=t,a)}function D0(t,e,a,r){return Ce(a,e)?a:si.current!==null?(t=ju(t,a,r),Ce(t,e)||(It=!0),t):(Gn&42)===0?(It=!0,t.memoizedState=a):(t=Om(),ht.lanes|=t,ta|=t,e)}function O0(t,e,a,r,o){var c=K.p;K.p=c!==0&&8>c?c:8;var g=X.T,b={};X.T=b,Vu(t,!1,e,a);try{var S=o(),D=X.S;if(D!==null&&D(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=h5(S,r);br(t,e,H,De(t))}else br(t,e,r,De(t))}catch(q){br(t,e,{then:function(){},status:"rejected",reason:q},De())}finally{K.p=c,X.T=g}}function y5(){}function Bu(t,e,a,r){if(t.tag!==5)throw Error(s(476));var o=j0(t).queue;O0(t,o,e,dt,a===null?y5:function(){return B0(t),a(r)})}function j0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:dt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function B0(t){var e=j0(t).next.queue;br(t,e,{},De())}function _u(){return fe(kr)}function _0(){return Qt().memoizedState}function V0(){return Qt().memoizedState}function b5(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=De();t=Zn(a);var r=Kn(e,t,a);r!==null&&(ve(r,e,a),wr(r,e,a)),e={cache:vu()},t.payload=e;return}e=e.return}}function x5(t,e,a){var r=De();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},hs(t)?L0(e,a):(a=cu(t,e,a,r),a!==null&&(ve(a,t,r),U0(a,e,r)))}function N0(t,e,a){var r=De();br(t,e,a,r)}function br(t,e,a,r){var o={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(hs(t))L0(e,o);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,b=c(g,a);if(o.hasEagerState=!0,o.eagerState=b,Ce(b,g))return Fl(t,e,o,0),zt===null&&Kl(),!1}catch{}finally{}if(a=cu(t,e,o,r),a!==null)return ve(a,t,r),U0(a,e,r),!0}return!1}function Vu(t,e,a,r){if(r={lane:2,revertLane:Tc(),action:r,hasEagerState:!1,eagerState:null,next:null},hs(t)){if(e)throw Error(s(479))}else e=cu(t,a,r,2),e!==null&&ve(e,t,2)}function hs(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function L0(t,e){ci=ls=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function U0(t,e,a){if((a&4194176)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Kd(t,a)}}var rn={readContext:fe,use:us,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt};rn.useCacheRefresh=Pt,rn.useMemoCache=Pt,rn.useHostTransitionStatus=Pt,rn.useFormState=Pt,rn.useActionState=Pt,rn.useOptimistic=Pt;var Aa={readContext:fe,use:us,useCallback:function(t,e){return we().memoizedState=[t,e===void 0?null:e],t},useContext:fe,useEffect:E0,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,fs(4194308,4,C0.bind(null,e,t),a)},useLayoutEffect:function(t,e){return fs(4194308,4,t,e)},useInsertionEffect:function(t,e){fs(4,2,t,e)},useMemo:function(t,e){var a=we();e=e===void 0?null:e;var r=t();if(Ta){Un(!0);try{t()}finally{Un(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=we();if(a!==void 0){var o=a(e);if(Ta){Un(!0);try{a(e)}finally{Un(!1)}}}else o=e;return r.memoizedState=r.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},r.queue=t,t=t.dispatch=x5.bind(null,ht,t),[r.memoizedState,t]},useRef:function(t){var e=we();return t={current:t},e.memoizedState=t},useState:function(t){t=Ru(t);var e=t.queue,a=N0.bind(null,ht,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(t,e){var a=we();return ju(a,t,e)},useTransition:function(){var t=Ru(!1);return t=O0.bind(null,ht,t.queue,!0,!1),we().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=ht,o=we();if(xt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),zt===null)throw Error(s(349));(bt&60)!==0||s0(r,e,a)}o.memoizedState=a;var c={value:a,getSnapshot:e};return o.queue=c,E0(u0.bind(null,r,c,t),[t]),r.flags|=2048,di(9,o0.bind(null,r,c,a,e),{destroy:void 0},null),a},useId:function(){var t=we(),e=zt.identifierPrefix;if(xt){var a=gn,r=pn;a=(r&~(1<<32-Ae(r)-1)).toString(32)+a,e=":"+e+"R"+a,a=ss++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=m5++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return we().memoizedState=b5.bind(null,ht)}};Aa.useMemoCache=Au,Aa.useHostTransitionStatus=_u,Aa.useFormState=y0,Aa.useActionState=y0,Aa.useOptimistic=function(t){var e=we();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Vu.bind(null,ht,!0,a),a.dispatch=e,[t,e]};var $n={readContext:fe,use:us,useCallback:R0,useContext:fe,useEffect:Du,useImperativeHandle:M0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:z0,useReducer:cs,useRef:w0,useState:function(){return cs(yn)},useDebugValue:Ou,useDeferredValue:function(t,e){var a=Qt();return D0(a,At.memoizedState,t,e)},useTransition:function(){var t=cs(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:yr(t),e]},useSyncExternalStore:l0,useId:_0};$n.useCacheRefresh=V0,$n.useMemoCache=Au,$n.useHostTransitionStatus=_u,$n.useFormState=b0,$n.useActionState=b0,$n.useOptimistic=function(t,e){var a=Qt();return d0(a,At,t,e)};var Ca={readContext:fe,use:us,useCallback:R0,useContext:fe,useEffect:Du,useImperativeHandle:M0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:z0,useReducer:Mu,useRef:w0,useState:function(){return Mu(yn)},useDebugValue:Ou,useDeferredValue:function(t,e){var a=Qt();return At===null?ju(a,t,e):D0(a,At.memoizedState,t,e)},useTransition:function(){var t=Mu(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:yr(t),e]},useSyncExternalStore:l0,useId:_0};Ca.useCacheRefresh=V0,Ca.useMemoCache=Au,Ca.useHostTransitionStatus=_u,Ca.useFormState=S0,Ca.useActionState=S0,Ca.useOptimistic=function(t,e){var a=Qt();return At!==null?d0(a,At,t,e):(a.baseState=t,[t,a.queue.dispatch])};function Nu(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:tt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lu={isMounted:function(t){return(t=t._reactInternals)?I(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var r=De(),o=Zn(r);o.payload=e,a!=null&&(o.callback=a),e=Kn(t,o,r),e!==null&&(ve(e,t,r),wr(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=De(),o=Zn(r);o.tag=1,o.payload=e,a!=null&&(o.callback=a),e=Kn(t,o,r),e!==null&&(ve(e,t,r),wr(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=De(),r=Zn(a);r.tag=2,e!=null&&(r.callback=e),e=Kn(t,r,a),e!==null&&(ve(e,t,a),wr(e,t,a))}};function k0(t,e,a,r,o,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!lr(a,r)||!lr(o,c):!0}function H0(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&Lu.enqueueReplaceState(e,e.state,null)}function Ma(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=tt({},a));for(var o in t)a[o]===void 0&&(a[o]=t[o])}return a}var ms=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function P0(t){ms(t)}function q0(t){console.error(t)}function Y0(t){ms(t)}function ps(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function G0(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Uu(t,e,a){return a=Zn(a),a.tag=3,a.payload={element:null},a.callback=function(){ps(t,e)},a}function $0(t){return t=Zn(t),t.tag=3,t}function X0(t,e,a,r){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=r.value;t.payload=function(){return o(c)},t.callback=function(){G0(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){G0(e,a,r),typeof o!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function S5(t,e,a,r,o){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&Sr(e,a,o,!0),a=ke.current,a!==null){switch(a.tag){case 13:return an===null?bc():a.alternate===null&&Ut===0&&(Ut=3),a.flags&=-257,a.flags|=65536,a.lanes=o,r===mu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),Sc(t,r,o)),!1;case 22:return a.flags|=65536,r===mu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),Sc(t,r,o)),!1}throw Error(s(435,a.tag))}return Sc(t,r,o),bc(),!1}if(xt)return e=ke.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,r!==hu&&(t=Error(s(422),{cause:r}),cr(Ne(t,a)))):(r!==hu&&(e=Error(s(423),{cause:r}),cr(Ne(e,a))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,r=Ne(r,a),o=Uu(t.stateNode,r,o),Iu(t,o),Ut!==4&&(Ut=2)),!1;var c=Error(s(520),{cause:r});if(c=Ne(c,a),Dr===null?Dr=[c]:Dr.push(c),Ut!==4&&(Ut=2),e===null)return!0;r=Ne(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=o&-o,a.lanes|=t,t=Uu(a.stateNode,r,t),Iu(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ea===null||!ea.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=$0(o),X0(o,t,a,r),Iu(a,o),!1}a=a.return}while(a!==null);return!1}var Q0=Error(s(461)),It=!1;function le(t,e,a,r){e.child=t===null?Wh(e,null,a,r):wa(e,t.child,a,r)}function Z0(t,e,a,r,o){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return za(e),r=Su(t,e,a,g,c,o),b=wu(),t!==null&&!It?(Eu(t,e,o),bn(t,e,o)):(xt&&b&&fu(e),e.flags|=1,le(t,e,r,o),e.child)}function K0(t,e,a,r,o){if(t===null){var c=a.type;return typeof c=="function"&&!sc(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,F0(t,e,c,r,o)):(t=xs(a.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Qu(t,o)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:lr,a(g,r)&&t.ref===e.ref)return bn(t,e,o)}return e.flags|=1,t=In(c,r),t.ref=e.ref,t.return=e,e.child=t}function F0(t,e,a,r,o){if(t!==null){var c=t.memoizedProps;if(lr(c,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=c,Qu(t,o))(t.flags&131072)!==0&&(It=!0);else return e.lanes=t.lanes,bn(t,e,o)}return ku(t,e,a,r,o)}function J0(t,e,a){var r=e.pendingProps,o=r.children,c=(e.stateNode._pendingVisibility&2)!==0,g=t!==null?t.memoizedState:null;if(xr(t,e),r.mode==="hidden"||c){if((e.flags&128)!==0){if(r=g!==null?g.baseLanes|a:a,t!==null){for(o=e.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return W0(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&rs(e,g!==null?g.cachePool:null),g!==null?Ih(e,g):pu(),t0(e);else return e.lanes=e.childLanes=536870912,W0(t,e,g!==null?g.baseLanes|a:a,a)}else g!==null?(rs(e,g.cachePool),Ih(e,g),Yn(),e.memoizedState=null):(t!==null&&rs(e,null),pu(),Yn());return le(t,e,o,a),e.child}function W0(t,e,a,r){var o=bu();return o=o===null?null:{parent:Jt._currentValue,pool:o},e.memoizedState={baseLanes:a,cachePool:o},t!==null&&rs(e,null),pu(),t0(e),t!==null&&Sr(t,e,r,!0),null}function xr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=2097664)}}function ku(t,e,a,r,o){return za(e),a=Su(t,e,a,r,void 0,o),r=wu(),t!==null&&!It?(Eu(t,e,o),bn(t,e,o)):(xt&&r&&fu(e),e.flags|=1,le(t,e,a,o),e.child)}function I0(t,e,a,r,o,c){return za(e),e.updateQueue=null,a=r0(e,r,a,o),i0(t),r=wu(),t!==null&&!It?(Eu(t,e,c),bn(t,e,c)):(xt&&r&&fu(e),e.flags|=1,le(t,e,a,c),e.child)}function tm(t,e,a,r,o){if(za(e),e.stateNode===null){var c=ai,g=a.contextType;typeof g=="object"&&g!==null&&(c=fe(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Lu,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},Ju(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?fe(g):ai,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Nu(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Lu.enqueueReplaceState(c,c.state,null),Tr(e,r,c,o),Er(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var b=e.memoizedProps,S=Ma(a,b);c.props=S;var D=c.context,H=a.contextType;g=ai,typeof H=="object"&&H!==null&&(g=fe(H));var q=a.getDerivedStateFromProps;H=typeof q=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||D!==g)&&H0(e,c,r,g),Qn=!1;var V=e.memoizedState;c.state=V,Tr(e,r,c,o),Er(),D=e.memoizedState,b||V!==D||Qn?(typeof q=="function"&&(Nu(e,a,q,r),D=e.memoizedState),(S=Qn||k0(e,a,S,r,V,D,g))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=D),c.props=r,c.state=D,c.context=g,r=S):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,Wu(t,e),g=e.memoizedProps,H=Ma(a,g),c.props=H,q=e.pendingProps,V=c.context,D=a.contextType,S=ai,typeof D=="object"&&D!==null&&(S=fe(D)),b=a.getDerivedStateFromProps,(D=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==q||V!==S)&&H0(e,c,r,S),Qn=!1,V=e.memoizedState,c.state=V,Tr(e,r,c,o),Er();var k=e.memoizedState;g!==q||V!==k||Qn||t!==null&&t.dependencies!==null&&gs(t.dependencies)?(typeof b=="function"&&(Nu(e,a,b,r),k=e.memoizedState),(H=Qn||k0(e,a,H,r,V,k,S)||t!==null&&t.dependencies!==null&&gs(t.dependencies))?(D||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,k,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,k,S)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),c.props=r,c.state=k,c.context=S,r=H):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,xr(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=wa(e,t.child,null,o),e.child=wa(e,null,a,o)):le(t,e,a,o),e.memoizedState=c.state,t=e.child):t=bn(t,e,o),t}function em(t,e,a,r){return ur(),e.flags|=256,le(t,e,a,r),e.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Pu(t){return{baseLanes:t,cachePool:a0()}}function qu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ye),t}function nm(t,e,a){var r=e.pendingProps,o=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),g&&(o=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(o?qn(e):Yn(),xt){var b=re,S;if(S=b){t:{for(S=b,b=nn;S.nodeType!==8;){if(!b){b=null;break t}if(S=We(S.nextSibling),S===null){b=null;break t}}b=S}b!==null?(e.memoizedState={dehydrated:b,treeContext:ba!==null?{id:pn,overflow:gn}:null,retryLane:536870912},S=qe(18,null,null,0),S.stateNode=b,S.return=e,e.child=S,ge=e,re=null,S=!0):S=!1}S||Sa(e)}if(b=e.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?e.lanes=16:e.lanes=536870912,null;vn(e)}return b=r.children,r=r.fallback,o?(Yn(),o=e.mode,b=Gu({mode:"hidden",children:b},o),r=Oa(r,o,a,null),b.return=e,r.return=e,b.sibling=r,e.child=b,o=e.child,o.memoizedState=Pu(a),o.childLanes=qu(t,g,a),e.memoizedState=Hu,r):(qn(e),Yu(e,b))}if(S=t.memoizedState,S!==null&&(b=S.dehydrated,b!==null)){if(c)e.flags&256?(qn(e),e.flags&=-257,e=$u(t,e,a)):e.memoizedState!==null?(Yn(),e.child=t.child,e.flags|=128,e=null):(Yn(),o=r.fallback,b=e.mode,r=Gu({mode:"visible",children:r.children},b),o=Oa(o,b,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,wa(e,t.child,null,a),r=e.child,r.memoizedState=Pu(a),r.childLanes=qu(t,g,a),e.memoizedState=Hu,e=o);else if(qn(e),b.data==="$!"){if(g=b.nextSibling&&b.nextSibling.dataset,g)var D=g.dgst;g=D,r=Error(s(419)),r.stack="",r.digest=g,cr({value:r,source:null,stack:null}),e=$u(t,e,a)}else if(It||Sr(t,e,a,!1),g=(a&t.childLanes)!==0,It||g){if(g=zt,g!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==S.retryLane)throw S.retryLane=r,Pn(t,r),ve(g,t,r),Q0}b.data==="$?"||bc(),e=$u(t,e,a)}else b.data==="$?"?(e.flags|=128,e.child=t.child,e=N5.bind(null,t),b._reactRetry=e,e=null):(t=S.treeContext,re=We(b.nextSibling),ge=e,xt=!0,Fe=null,nn=!1,t!==null&&(Le[Ue++]=pn,Le[Ue++]=gn,Le[Ue++]=ba,pn=t.id,gn=t.overflow,ba=e),e=Yu(e,r.children),e.flags|=4096);return e}return o?(Yn(),o=r.fallback,b=e.mode,S=t.child,D=S.sibling,r=In(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&31457280,D!==null?o=In(D,o):(o=Oa(o,b,a,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,b=t.child.memoizedState,b===null?b=Pu(a):(S=b.cachePool,S!==null?(D=Jt._currentValue,S=S.parent!==D?{parent:D,pool:D}:S):S=a0(),b={baseLanes:b.baseLanes|a,cachePool:S}),o.memoizedState=b,o.childLanes=qu(t,g,a),e.memoizedState=Hu,r):(qn(e),a=t.child,t=a.sibling,a=In(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function Yu(t,e){return e=Gu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Gu(t,e){return Rm(t,e,0,null)}function $u(t,e,a){return wa(e,t.child,null,a),t=Yu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function am(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ku(t.return,e,a)}function Xu(t,e,a,r,o){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=o)}function im(t,e,a){var r=e.pendingProps,o=r.revealOrder,c=r.tail;if(le(t,e,r.children,a),r=Ft.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&am(t,a,e);else if(t.tag===19)am(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Tt(Ft,r),o){case"forwards":for(a=e.child,o=null;a!==null;)t=a.alternate,t!==null&&is(t)===null&&(o=a),a=a.sibling;a=o,a===null?(o=e.child,e.child=null):(o=a.sibling,a.sibling=null),Xu(e,!1,o,a,c);break;case"backwards":for(a=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&is(t)===null){e.child=o;break}t=o.sibling,o.sibling=a,a=o,o=t}Xu(e,!0,a,null,c);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Sr(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=In(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=In(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Qu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&gs(t)))}function w5(t,e,a){switch(e.tag){case 3:jl(e,e.stateNode.containerInfo),Xn(e,Jt,t.memoizedState.cache),ur();break;case 27:case 5:Lo(e);break;case 4:jl(e,e.stateNode.containerInfo);break;case 10:Xn(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(qn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?nm(t,e,a):(qn(e),t=bn(t,e,a),t!==null?t.sibling:null);qn(e);break;case 19:var o=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(Sr(t,e,a,!1),r=(a&e.childLanes)!==0),o){if(r)return im(t,e,a);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Tt(Ft,Ft.current),r)break;return null;case 22:case 23:return e.lanes=0,J0(t,e,a);case 24:Xn(e,Jt,t.memoizedState.cache)}return bn(t,e,a)}function rm(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)It=!0;else{if(!Qu(t,a)&&(e.flags&128)===0)return It=!1,w5(t,e,a);It=(t.flags&131072)!==0}else It=!1,xt&&(e.flags&1048576)!==0&&Yh(e,Il,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,o=r._init;if(r=o(r._payload),e.type=r,typeof r=="function")sc(r)?(t=Ma(r,t),e.tag=1,e=tm(null,e,r,t,a)):(e.tag=0,e=ku(null,e,r,t,a));else{if(r!=null){if(o=r.$$typeof,o===w){e.tag=11,e=Z0(null,e,r,t,a);break t}else if(o===R){e.tag=14,e=K0(null,e,r,t,a);break t}}throw e=F(r)||r,Error(s(306,e,""))}}return e;case 0:return ku(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,o=Ma(r,e.pendingProps),tm(t,e,r,o,a);case 3:t:{if(jl(e,e.stateNode.containerInfo),t===null)throw Error(s(387));var c=e.pendingProps;o=e.memoizedState,r=o.element,Wu(t,e),Tr(e,c,null,a);var g=e.memoizedState;if(c=g.cache,Xn(e,Jt,c),c!==o.cache&&Fu(e,[Jt],a,!0),Er(),c=g.element,o.isDehydrated)if(o={element:c,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=em(t,e,c,a);break t}else if(c!==r){r=Ne(Error(s(424)),e),cr(r),e=em(t,e,c,a);break t}else for(re=We(e.stateNode.containerInfo.firstChild),ge=e,xt=!0,Fe=null,nn=!0,a=Wh(e,null,c,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),c===r){e=bn(t,e,a);break t}le(t,e,c,a)}e=e.child}return e;case 26:return xr(t,e),t===null?(a=op(e.type,null,e.pendingProps,null))?e.memoizedState=a:xt||(a=e.type,t=e.pendingProps,r=js(Ln.current).createElement(a),r[ce]=e,r[xe]=t,se(r,a,t),Wt(r),e.stateNode=r):e.memoizedState=op(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Lo(e),t===null&&xt&&(r=e.stateNode=rp(e.type,e.pendingProps,Ln.current),ge=e,nn=!0,re=We(r.firstChild)),r=e.pendingProps.children,t!==null||xt?le(t,e,r,a):e.child=wa(e,null,r,a),xr(t,e),e.child;case 5:return t===null&&xt&&((o=r=re)&&(r=W5(r,e.type,e.pendingProps,nn),r!==null?(e.stateNode=r,ge=e,re=We(r.firstChild),nn=!1,o=!0):o=!1),o||Sa(e)),Lo(e),o=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Bc(o,c)?r=null:g!==null&&Bc(o,g)&&(e.flags|=32),e.memoizedState!==null&&(o=Su(t,e,p5,null,null,a),kr._currentValue=o),xr(t,e),le(t,e,r,a),e.child;case 6:return t===null&&xt&&((t=a=re)&&(a=I5(a,e.pendingProps,nn),a!==null?(e.stateNode=a,ge=e,re=null,t=!0):t=!1),t||Sa(e)),null;case 13:return nm(t,e,a);case 4:return jl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wa(e,null,r,a):le(t,e,r,a),e.child;case 11:return Z0(t,e,e.type,e.pendingProps,a);case 7:return le(t,e,e.pendingProps,a),e.child;case 8:return le(t,e,e.pendingProps.children,a),e.child;case 12:return le(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,Xn(e,e.type,r.value),le(t,e,r.children,a),e.child;case 9:return o=e.type._context,r=e.pendingProps.children,za(e),o=fe(o),r=r(o),e.flags|=1,le(t,e,r,a),e.child;case 14:return K0(t,e,e.type,e.pendingProps,a);case 15:return F0(t,e,e.type,e.pendingProps,a);case 19:return im(t,e,a);case 22:return J0(t,e,a);case 24:return za(e),r=fe(Jt),t===null?(o=bu(),o===null&&(o=zt,c=vu(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),e.memoizedState={parent:r,cache:o},Ju(e),Xn(e,Jt,o)):((t.lanes&a)!==0&&(Wu(t,e),Tr(e,null,null,a),Er()),o=t.memoizedState,c=e.memoizedState,o.parent!==r?(o={parent:r,cache:r},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Xn(e,Jt,r)):(r=c.cache,Xn(e,Jt,r),r!==o.cache&&Fu(e,[Jt],a,!0))),le(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}var Zu=gt(null),Ra=null,xn=null;function Xn(t,e,a){Tt(Zu,e._currentValue),e._currentValue=a}function Sn(t){t._currentValue=Zu.current,Et(Zu)}function Ku(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function Fu(t,e,a,r){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){var g=o.child;c=c.firstContext;t:for(;c!==null;){var b=c;c=o;for(var S=0;S<e.length;S++)if(b.context===e[S]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),Ku(c.return,a,t),r||(g=null);break t}c=b.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Ku(g,a,t),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===t){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Sr(t,e,a,r){t=null;for(var o=e,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=o.type;Ce(o.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(o===Ol.current){if(g=o.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(kr):t=[kr])}o=o.return}t!==null&&Fu(e,t,a,r),e.flags|=262144}function gs(t){for(t=t.firstContext;t!==null;){if(!Ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function za(t){Ra=t,xn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function fe(t){return lm(Ra,t)}function vs(t,e){return Ra===null&&za(t),lm(t,e)}function lm(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},xn===null){if(t===null)throw Error(s(308));xn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else xn=xn.next=e;return a}var Qn=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Zn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(_t&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,e=Jl(t),Ph(t,null,a),e}return Fl(t,r,e,a),Jl(t)}function wr(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194176)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Kd(t,a)}}function Iu(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?o=c=e:c=c.next=e}else o=c=e;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var tc=!1;function Er(){if(tc){var t=ui;if(t!==null)throw t}}function Tr(t,e,a,r){tc=!1;var o=t.updateQueue;Qn=!1;var c=o.firstBaseUpdate,g=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var S=b,D=S.next;S.next=null,g===null?c=D:g.next=D,g=S;var H=t.alternate;H!==null&&(H=H.updateQueue,b=H.lastBaseUpdate,b!==g&&(b===null?H.firstBaseUpdate=D:b.next=D,H.lastBaseUpdate=S))}if(c!==null){var q=o.baseState;g=0,H=D=S=null,b=c;do{var V=b.lane&-536870913,k=V!==b.lane;if(k?(bt&V)===V:(r&V)===V){V!==0&&V===oi&&(tc=!0),H!==null&&(H=H.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var et=t,ot=b;V=e;var kt=a;switch(ot.tag){case 1:if(et=ot.payload,typeof et=="function"){q=et.call(kt,q,V);break t}q=et;break t;case 3:et.flags=et.flags&-65537|128;case 0:if(et=ot.payload,V=typeof et=="function"?et.call(kt,q,V):et,V==null)break t;q=tt({},q,V);break t;case 2:Qn=!0}}V=b.callback,V!==null&&(t.flags|=64,k&&(t.flags|=8192),k=o.callbacks,k===null?o.callbacks=[V]:k.push(V))}else k={lane:V,tag:b.tag,payload:b.payload,callback:b.callback,next:null},H===null?(D=H=k,S=q):H=H.next=k,g|=V;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;k=b,b=k.next,k.next=null,o.lastBaseUpdate=k,o.shared.pending=null}}while(!0);H===null&&(S=q),o.baseState=S,o.firstBaseUpdate=D,o.lastBaseUpdate=H,c===null&&(o.shared.lanes=0),ta|=g,t.lanes=g,t.memoizedState=q}}function sm(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function om(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)sm(a[t],e)}function Ar(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==o)}}catch(b){Mt(e,e.return,b)}}function Fn(t,e,a){try{var r=e.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,o=e;var S=a;try{b()}catch(D){Mt(o,S,D)}}}r=r.next}while(r!==c)}}catch(D){Mt(e,e.return,D)}}function um(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{om(e,a)}catch(r){Mt(t,t.return,r)}}}function cm(t,e,a){a.props=Ma(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Mt(t,e,r)}}function Da(t,e){try{var a=t.ref;if(a!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var o=r;break;default:o=r}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Mt(t,e,c)}}function Me(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(o){Mt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Mt(t,e,o)}else a.current=null}function fm(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(o){Mt(t,t.return,o)}}function dm(t,e,a){try{var r=t.stateNode;Q5(r,t.type,a,e),r[xe]=e}catch(o){Mt(t,t.return,o)}}function hm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function ec(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nc(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Os));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(nc(t,e,a),t=t.sibling;t!==null;)nc(t,e,a),t=t.sibling}function ys(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(ys(t,e,a),t=t.sibling;t!==null;)ys(t,e,a),t=t.sibling}var wn=!1,Lt=!1,ac=!1,mm=typeof WeakSet=="function"?WeakSet:Set,te=null,pm=!1;function E5(t,e){if(t=t.containerInfo,Oc=Us,t=jh(t),ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,b=-1,S=-1,D=0,H=0,q=t,V=null;e:for(;;){for(var k;q!==a||o!==0&&q.nodeType!==3||(b=g+o),q!==c||r!==0&&q.nodeType!==3||(S=g+r),q.nodeType===3&&(g+=q.nodeValue.length),(k=q.firstChild)!==null;)V=q,q=k;for(;;){if(q===t)break e;if(V===a&&++D===o&&(b=g),V===c&&++H===r&&(S=g),(k=q.nextSibling)!==null)break;q=V,V=q.parentNode}q=k}a=b===-1||S===-1?null:{start:b,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:t,selectionRange:a},Us=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){switch(e=te,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,o=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var et=Ma(a.type,o,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(et,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Mt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Nc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return et=pm,pm=!1,et}function gm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Tn(t,a),r&4&&Ar(5,a);break;case 1:if(Tn(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(b){Mt(a,a.return,b)}else{var o=Ma(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Mt(a,a.return,b)}}r&64&&um(a),r&512&&Da(a,a.return);break;case 3:if(Tn(t,a),r&64&&(r=a.updateQueue,r!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{om(r,t)}catch(b){Mt(a,a.return,b)}}break;case 26:Tn(t,a),r&512&&Da(a,a.return);break;case 27:case 5:Tn(t,a),e===null&&r&4&&fm(a),r&512&&Da(a,a.return);break;case 12:Tn(t,a);break;case 13:Tn(t,a),r&4&&bm(t,a);break;case 22:if(o=a.memoizedState!==null||wn,!o){e=e!==null&&e.memoizedState!==null||Lt;var c=wn,g=Lt;wn=o,(Lt=e)&&!g?Jn(t,a,(a.subtreeFlags&8772)!==0):Tn(t,a),wn=c,Lt=g}r&512&&(a.memoizedProps.mode==="manual"?Da(a,a.return):Me(a,a.return));break;default:Tn(t,a)}}function vm(t){var e=t.alternate;e!==null&&(t.alternate=null,vm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Yo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Re=!1;function En(t,e,a){for(a=a.child;a!==null;)ym(t,e,a),a=a.sibling}function ym(t,e,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 26:Lt||Me(a,e),En(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Lt||Me(a,e);var r=Zt,o=Re;for(Zt=a.stateNode,En(t,e,a),a=a.stateNode,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Yo(a),Zt=r,Re=o;break;case 5:Lt||Me(a,e);case 6:o=Zt;var c=Re;if(Zt=null,En(t,e,a),Zt=o,Re=c,Zt!==null)if(Re)try{t=Zt,r=a.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(g){Mt(a,e,g)}else try{Zt.removeChild(a.stateNode)}catch(g){Mt(a,e,g)}break;case 18:Zt!==null&&(Re?(e=Zt,a=a.stateNode,e.nodeType===8?Vc(e.parentNode,a):e.nodeType===1&&Vc(e,a),Yr(e)):Vc(Zt,a.stateNode));break;case 4:r=Zt,o=Re,Zt=a.stateNode.containerInfo,Re=!0,En(t,e,a),Zt=r,Re=o;break;case 0:case 11:case 14:case 15:Lt||Fn(2,a,e),Lt||Fn(4,a,e),En(t,e,a);break;case 1:Lt||(Me(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&cm(a,e,r)),En(t,e,a);break;case 21:En(t,e,a);break;case 22:Lt||Me(a,e),Lt=(r=Lt)||a.memoizedState!==null,En(t,e,a),Lt=r;break;default:En(t,e,a)}}function bm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yr(t)}catch(a){Mt(e,e.return,a)}}function T5(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new mm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new mm),e;default:throw Error(s(435,t.tag))}}function ic(t,e){var a=T5(t);e.forEach(function(r){var o=L5.bind(null,t,r);a.has(r)||(a.add(r),r.then(o,o))})}function He(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r],c=t,g=e,b=g;t:for(;b!==null;){switch(b.tag){case 27:case 5:Zt=b.stateNode,Re=!1;break t;case 3:Zt=b.stateNode.containerInfo,Re=!0;break t;case 4:Zt=b.stateNode.containerInfo,Re=!0;break t}b=b.return}if(Zt===null)throw Error(s(160));ym(c,g,o),Zt=null,Re=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)xm(e,t),e=e.sibling}var Je=null;function xm(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:He(e,t),Pe(t),r&4&&(Fn(3,t,t.return),Ar(3,t),Fn(5,t,t.return));break;case 1:He(e,t),Pe(t),r&512&&(Lt||a===null||Me(a,a.return)),r&64&&wn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var o=Je;if(He(e,t),Pe(t),r&512&&(Lt||a===null||Me(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,o=o.ownerDocument||o;e:switch(r){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ji]||c[ce]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(r),o.head.insertBefore(c,o.querySelector("head > title"))),se(c,r,a),c[ce]=t,Wt(c),r=c;break t;case"link":var g=fp("link","href",o).get(r+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(c=g[b],c.getAttribute("href")===(a.href==null?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}c=o.createElement(r),se(c,r,a),o.head.appendChild(c);break;case"meta":if(g=fp("meta","content",o).get(r+(a.content||""))){for(b=0;b<g.length;b++)if(c=g[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}c=o.createElement(r),se(c,r,a),o.head.appendChild(c);break;default:throw Error(s(468,r))}c[ce]=t,Wt(c),r=c}t.stateNode=r}else dp(o,t.type,t.stateNode);else t.stateNode=cp(o,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?dp(o,t.type,t.stateNode):cp(o,r,t.memoizedProps)):r===null&&t.stateNode!==null&&dm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){o=t.stateNode,c=t.memoizedProps;try{for(var S=o.firstChild;S;){var D=S.nextSibling,H=S.nodeName;S[Ji]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&S.rel.toLowerCase()==="stylesheet"||o.removeChild(S),S=D}for(var q=t.type,V=o.attributes;V.length;)o.removeAttributeNode(V[0]);se(o,q,c),o[ce]=t,o[xe]=c}catch(et){Mt(t,t.return,et)}}case 5:if(He(e,t),Pe(t),r&512&&(Lt||a===null||Me(a,a.return)),t.flags&32){o=t.stateNode;try{Fa(o,"")}catch(et){Mt(t,t.return,et)}}r&4&&t.stateNode!=null&&(o=t.memoizedProps,dm(t,o,a!==null?a.memoizedProps:o)),r&1024&&(ac=!0);break;case 6:if(He(e,t),Pe(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(et){Mt(t,t.return,et)}}break;case 3:if(Vs=null,o=Je,Je=Bs(e.containerInfo),He(e,t),Je=o,Pe(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Yr(e.containerInfo)}catch(et){Mt(t,t.return,et)}ac&&(ac=!1,Sm(t));break;case 4:r=Je,Je=Bs(t.stateNode.containerInfo),He(e,t),Pe(t),Je=r;break;case 12:He(e,t),Pe(t);break;case 13:He(e,t),Pe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hc=en()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,ic(t,r)));break;case 22:if(r&512&&(Lt||a===null||Me(a,a.return)),S=t.memoizedState!==null,D=a!==null&&a.memoizedState!==null,H=wn,q=Lt,wn=H||S,Lt=q||D,He(e,t),Lt=q,wn=H,Pe(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=S?e._visibility&-2:e._visibility|1,S&&(e=wn||Lt,a===null||D||e||hi(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(a===null){D=a=e;try{if(o=D.stateNode,S)c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=D.stateNode,b=D.memoizedProps.style;var k=b!=null&&b.hasOwnProperty("display")?b.display:null;g.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(et){Mt(D,D.return,et)}}}else if(e.tag===6){if(a===null){D=e;try{D.stateNode.nodeValue=S?"":D.memoizedProps}catch(et){Mt(D,D.return,et)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,ic(t,a))));break;case 19:He(e,t),Pe(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,ic(t,r)));break;case 21:break;default:He(e,t),Pe(t)}}function Pe(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(hm(a)){var r=a;break t}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var o=r.stateNode,c=ec(t);ys(t,c,o);break;case 5:var g=r.stateNode;r.flags&32&&(Fa(g,""),r.flags&=-33);var b=ec(t);ys(t,b,g);break;case 3:case 4:var S=r.stateNode.containerInfo,D=ec(t);nc(t,D,S);break;default:throw Error(s(161))}}}catch(H){Mt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Sm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Tn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)gm(t,e.alternate,e),e=e.sibling}function hi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Fn(4,e,e.return),hi(e);break;case 1:Me(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&cm(e,e.return,a),hi(e);break;case 26:case 27:case 5:Me(e,e.return),hi(e);break;case 22:Me(e,e.return),e.memoizedState===null&&hi(e);break;default:hi(e)}t=t.sibling}}function Jn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,o=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Jn(o,c,a),Ar(4,c);break;case 1:if(Jn(o,c,a),r=c,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(D){Mt(r,r.return,D)}if(r=c,o=r.updateQueue,o!==null){var b=r.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)sm(S[o],b)}catch(D){Mt(r,r.return,D)}}a&&g&64&&um(c),Da(c,c.return);break;case 26:case 27:case 5:Jn(o,c,a),a&&r===null&&g&4&&fm(c),Da(c,c.return);break;case 12:Jn(o,c,a);break;case 13:Jn(o,c,a),a&&g&4&&bm(o,c);break;case 22:c.memoizedState===null&&Jn(o,c,a),Da(c,c.return);break;default:Jn(o,c,a)}e=e.sibling}}function rc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&pr(a))}function lc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pr(t))}function Wn(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(t,e,a,r),e=e.sibling}function wm(t,e,a,r){var o=e.flags;switch(e.tag){case 0:case 11:case 15:Wn(t,e,a,r),o&2048&&Ar(9,e);break;case 3:Wn(t,e,a,r),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pr(t)));break;case 12:if(o&2048){Wn(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,b=c.onPostCommit;typeof b=="function"&&b(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Mt(e,e.return,S)}}else Wn(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,e.memoizedState!==null?c._visibility&4?Wn(t,e,a,r):Cr(t,e):c._visibility&4?Wn(t,e,a,r):(c._visibility|=4,mi(t,e,a,r,(e.subtreeFlags&10256)!==0)),o&2048&&rc(e.alternate,e);break;case 24:Wn(t,e,a,r),o&2048&&lc(e.alternate,e);break;default:Wn(t,e,a,r)}}function mi(t,e,a,r,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,b=a,S=r,D=g.flags;switch(g.tag){case 0:case 11:case 15:mi(c,g,b,S,o),Ar(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&4?mi(c,g,b,S,o):Cr(c,g):(H._visibility|=4,mi(c,g,b,S,o)),o&&D&2048&&rc(g.alternate,g);break;case 24:mi(c,g,b,S,o),o&&D&2048&&lc(g.alternate,g);break;default:mi(c,g,b,S,o)}e=e.sibling}}function Cr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,o=r.flags;switch(r.tag){case 22:Cr(a,r),o&2048&&rc(r.alternate,r);break;case 24:Cr(a,r),o&2048&&lc(r.alternate,r);break;default:Cr(a,r)}e=e.sibling}}var Mr=8192;function pi(t){if(t.subtreeFlags&Mr)for(t=t.child;t!==null;)Em(t),t=t.sibling}function Em(t){switch(t.tag){case 26:pi(t),t.flags&Mr&&t.memoizedState!==null&&db(Je,t.memoizedState,t.memoizedProps);break;case 5:pi(t);break;case 3:case 4:var e=Je;Je=Bs(t.stateNode.containerInfo),pi(t),Je=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Mr,Mr=16777216,pi(t),Mr=e):pi(t));break;default:pi(t)}}function Tm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Rr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];te=r,Cm(r,t)}Tm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Am(t),t=t.sibling}function Am(t){switch(t.tag){case 0:case 11:case 15:Rr(t),t.flags&2048&&Fn(9,t,t.return);break;case 3:Rr(t);break;case 12:Rr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,bs(t)):Rr(t);break;default:Rr(t)}}function bs(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];te=r,Cm(r,t)}Tm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fn(8,e,e.return),bs(e);break;case 22:a=e.stateNode,a._visibility&4&&(a._visibility&=-5,bs(e));break;default:bs(e)}t=t.sibling}}function Cm(t,e){for(;te!==null;){var a=te;switch(a.tag){case 0:case 11:case 15:Fn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,te=r;else t:for(a=t;te!==null;){r=te;var o=r.sibling,c=r.return;if(vm(r),r===a){te=null;break t}if(o!==null){o.return=c,te=o;break t}te=c}}}function A5(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,a,r){return new A5(t,e,a,r)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function In(t,e){var a=t.alternate;return a===null?(a=qe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Mm(t,e){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function xs(t,e,a,r,o,c){var g=0;if(r=t,typeof t=="function")sc(t)&&(g=1);else if(typeof t=="string")g=cb(t,a,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case h:return Oa(a.children,o,c,e);case p:g=8,o|=24;break;case v:return t=qe(12,a,e,o|2),t.elementType=v,t.lanes=c,t;case C:return t=qe(13,a,e,o),t.elementType=C,t.lanes=c,t;case O:return t=qe(19,a,e,o),t.elementType=O,t.lanes=c,t;case N:return Rm(a,o,c,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case E:g=10;break t;case x:g=9;break t;case w:g=11;break t;case R:g=14;break t;case L:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=qe(g,a,e,o),e.elementType=t,e.type=r,e.lanes=c,e}function Oa(t,e,a,r){return t=qe(7,t,r,e),t.lanes=a,t}function Rm(t,e,a,r){t=qe(22,t,r,e),t.elementType=N,t.lanes=a;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var c=o._current;if(c===null)throw Error(s(456));if((o._pendingVisibility&2)===0){var g=Pn(c,2);g!==null&&(o._pendingVisibility|=2,ve(g,c,2))}},attach:function(){var c=o._current;if(c===null)throw Error(s(456));if((o._pendingVisibility&2)!==0){var g=Pn(c,2);g!==null&&(o._pendingVisibility&=-3,ve(g,c,2))}}};return t.stateNode=o,t}function oc(t,e,a){return t=qe(6,t,null,e),t.lanes=a,t}function uc(t,e,a){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function An(t){t.flags|=4}function zm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!hp(e)){if(e=ke.current,e!==null&&((bt&4194176)===bt?an!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==an))throw dr=mu,Xh;t.flags|=8192}}function Ss(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Qd():536870912,t.lanes|=e,vi|=e)}function zr(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var o=t.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&31457280,r|=o.flags&31457280,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function C5(t,e,a){var r=e.pendingProps;switch(du(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Sn(Jt),Ga(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(or(e)?An(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Fe!==null&&(vc(Fe),Fe=null))),Bt(e),null;case 26:return a=e.memoizedState,t===null?(An(e),a!==null?(Bt(e),zm(e,a)):(Bt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(An(e),Bt(e),zm(e,a)):(Bt(e),e.flags&=-16777217):(t.memoizedProps!==r&&An(e),Bt(e),e.flags&=-16777217),null;case 27:Bl(e),a=Ln.current;var o=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}t=pe.current,or(e)?Gh(e):(t=rp(o,r,a),e.stateNode=t,An(e))}return Bt(e),null;case 5:if(Bl(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Bt(e),null}if(t=pe.current,or(e))Gh(e);else{switch(o=js(Ln.current),t){case 1:t=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?o.createElement(a,{is:r.is}):o.createElement(a)}}t[ce]=e,t[xe]=r;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=t;t:switch(se(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&An(e)}}return Bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=Ln.current,or(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,o=ge,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}t[ce]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Im(t.nodeValue,a)),t||Sa(e)}else t=js(t).createTextNode(r),t[ce]=e,e.stateNode=t}return Bt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=or(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(s(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[ce]=e}else ur(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),o=!1}else Fe!==null&&(vc(Fe),Fe=null),o=!0;if(!o)return e.flags&256?(vn(e),e):(vn(e),null)}if(vn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Ss(e,e.updateQueue),Bt(e),null;case 4:return Ga(),t===null&&Rc(e.stateNode.containerInfo),Bt(e),null;case 10:return Sn(e.type),Bt(e),null;case 19:if(Et(Ft),o=e.memoizedState,o===null)return Bt(e),null;if(r=(e.flags&128)!==0,c=o.rendering,c===null)if(r)zr(o,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=is(t),c!==null){for(e.flags|=128,zr(o,!1),t=c.updateQueue,e.updateQueue=t,Ss(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Mm(a,t),a=a.sibling;return Tt(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&en()>ws&&(e.flags|=128,r=!0,zr(o,!1),e.lanes=4194304)}else{if(!r)if(t=is(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Ss(e,t),zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Bt(e),null}else 2*en()-o.renderingStartTime>ws&&a!==536870912&&(e.flags|=128,r=!0,zr(o,!1),e.lanes=4194304);o.isBackwards?(c.sibling=e.child,e.child=c):(t=o.last,t!==null?t.sibling=c:e.child=c,o.last=c)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=en(),e.sibling=null,t=Ft.current,Tt(Ft,r?t&1|2:t&1),e):(Bt(e),null);case 22:case 23:return vn(e),gu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),a=e.updateQueue,a!==null&&Ss(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&Et(Ea),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sn(Jt),Bt(e),null;case 25:return null}throw Error(s(156,e.tag))}function M5(t,e){switch(du(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sn(Jt),Ga(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Bl(e),null;case 13:if(vn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(Ft),null;case 4:return Ga(),null;case 10:return Sn(e.type),null;case 22:case 23:return vn(e),gu(),t!==null&&Et(Ea),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sn(Jt),null;case 25:return null;default:return null}}function Dm(t,e){switch(du(e),e.tag){case 3:Sn(Jt),Ga();break;case 26:case 27:case 5:Bl(e);break;case 4:Ga();break;case 13:vn(e);break;case 19:Et(Ft);break;case 10:Sn(e.type);break;case 22:case 23:vn(e),gu(),t!==null&&Et(Ea);break;case 24:Sn(Jt)}}var R5={getCacheForType:function(t){var e=fe(Jt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},z5=typeof WeakMap=="function"?WeakMap:Map,_t=0,zt=null,pt=null,bt=0,Dt=0,ze=null,Cn=!1,gi=!1,cc=!1,Mn=0,Ut=0,ta=0,ja=0,fc=0,Ye=0,vi=0,Dr=null,ln=null,dc=!1,hc=0,ws=1/0,Es=null,ea=null,Ts=!1,Ba=null,Or=0,mc=0,pc=null,jr=0,gc=null;function De(){if((_t&2)!==0&&bt!==0)return bt&-bt;if(X.T!==null){var t=oi;return t!==0?t:Tc()}return Jd()}function Om(){Ye===0&&(Ye=(bt&536870912)===0||xt?Xd():536870912);var t=ke.current;return t!==null&&(t.flags|=32),Ye}function ve(t,e,a){(t===zt&&Dt===2||t.cancelPendingCommit!==null)&&(yi(t,0),Rn(t,bt,Ye,!1)),Fi(t,a),((_t&2)===0||t!==zt)&&(t===zt&&((_t&2)===0&&(ja|=a),Ut===4&&Rn(t,bt,Ye,!1)),sn(t))}function jm(t,e,a){if((_t&6)!==0)throw Error(s(327));var r=!a&&(e&60)===0&&(e&t.expiredLanes)===0||Ki(t,e),o=r?j5(t,e):xc(t,e,!0),c=r;do{if(o===0){gi&&!r&&Rn(t,e,0,!1);break}else if(o===6)Rn(t,e,0,!Cn);else{if(a=t.current.alternate,c&&!D5(a)){o=xc(t,e,!1),c=!1;continue}if(o===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var b=t;o=Dr;var S=b.current.memoizedState.isDehydrated;if(S&&(yi(b,g).flags|=256),g=xc(b,g,!1),g!==2){if(cc&&!S){b.errorRecoveryDisabledLanes|=c,ja|=c,o=4;break t}c=ln,ln=o,c!==null&&vc(c)}o=g}if(c=!1,o!==2)continue}}if(o===1){yi(t,0),Rn(t,e,0,!0);break}t:{switch(r=t,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194176)===e){Rn(r,e,Ye,!Cn);break t}break;case 2:ln=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=e,(e&62914560)===e&&(c=hc+300-en(),10<c)){if(Rn(r,e,Ye,!Cn),Ll(r,0)!==0)break t;r.timeoutHandle=np(Bm.bind(null,r,a,ln,Es,dc,e,Ye,ja,vi,Cn,2,-0,0),c);break t}Bm(r,a,ln,Es,dc,e,Ye,ja,vi,Cn,0,-0,0)}}break}while(!0);sn(t)}function vc(t){ln===null?ln=t:ln.push.apply(ln,t)}function Bm(t,e,a,r,o,c,g,b,S,D,H,q,V){var k=e.subtreeFlags;if((k&8192||(k&16785408)===16785408)&&(Ur={stylesheets:null,count:0,unsuspend:fb},Em(e),e=hb(),e!==null)){t.cancelPendingCommit=e(Hm.bind(null,t,a,r,o,g,b,S,1,q,V)),Rn(t,c,g,!D);return}Hm(t,a,r,o,g,b,S,H,q,V)}function D5(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var o=a[r],c=o.getSnapshot;o=o.value;try{if(!Ce(c(),o))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e,a,r){e&=~fc,e&=~ja,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var o=e;0<o;){var c=31-Ae(o),g=1<<c;r[c]=-1,o&=~g}a!==0&&Zd(t,a,e)}function As(){return(_t&6)===0?(Br(0),!1):!0}function yc(){if(pt!==null){if(Dt===0)var t=pt.return;else t=pt,xn=Ra=null,Tu(t),li=null,hr=0,t=pt;for(;t!==null;)Dm(t.alternate,t),t=t.return;pt=null}}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,K5(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),yc(),zt=t,pt=a=In(t.current,null),bt=e,Dt=0,ze=null,Cn=!1,gi=Ki(t,e),cc=!1,vi=Ye=fc=ja=ta=Ut=0,ln=Dr=null,dc=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var o=31-Ae(r),c=1<<o;e|=t[o],r&=~c}return Mn=e,Kl(),a}function _m(t,e){ht=null,X.H=rn,e===fr?(e=Kh(),Dt=3):e===Xh?(e=Kh(),Dt=4):Dt=e===Q0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ze=e,pt===null&&(Ut=1,ps(t,Ne(e,t.current)))}function Vm(){var t=X.H;return X.H=rn,t===null?rn:t}function Nm(){var t=X.A;return X.A=R5,t}function bc(){Ut=4,Cn||(bt&4194176)!==bt&&ke.current!==null||(gi=!0),(ta&134217727)===0&&(ja&134217727)===0||zt===null||Rn(zt,bt,Ye,!1)}function xc(t,e,a){var r=_t;_t|=2;var o=Vm(),c=Nm();(zt!==t||bt!==e)&&(Es=null,yi(t,e)),e=!1;var g=Ut;t:do try{if(Dt!==0&&pt!==null){var b=pt,S=ze;switch(Dt){case 8:yc(),g=6;break t;case 3:case 2:case 6:ke.current===null&&(e=!0);var D=Dt;if(Dt=0,ze=null,bi(t,b,S,D),a&&gi){g=0;break t}break;default:D=Dt,Dt=0,ze=null,bi(t,b,S,D)}}O5(),g=Ut;break}catch(H){_m(t,H)}while(!0);return e&&t.shellSuspendCounter++,xn=Ra=null,_t=r,X.H=o,X.A=c,pt===null&&(zt=null,bt=0,Kl()),g}function O5(){for(;pt!==null;)Lm(pt)}function j5(t,e){var a=_t;_t|=2;var r=Vm(),o=Nm();zt!==t||bt!==e?(Es=null,ws=en()+500,yi(t,e)):gi=Ki(t,e);t:do try{if(Dt!==0&&pt!==null){e=pt;var c=ze;e:switch(Dt){case 1:Dt=0,ze=null,bi(t,e,c,1);break;case 2:if(Qh(c)){Dt=0,ze=null,Um(e);break}e=function(){Dt===2&&zt===t&&(Dt=7),sn(t)},c.then(e,e);break t;case 3:Dt=7;break t;case 4:Dt=5;break t;case 7:Qh(c)?(Dt=0,ze=null,Um(e)):(Dt=0,ze=null,bi(t,e,c,7));break;case 5:var g=null;switch(pt.tag){case 26:g=pt.memoizedState;case 5:case 27:var b=pt;if(!g||hp(g)){Dt=0,ze=null;var S=b.sibling;if(S!==null)pt=S;else{var D=b.return;D!==null?(pt=D,Cs(D)):pt=null}break e}}Dt=0,ze=null,bi(t,e,c,5);break;case 6:Dt=0,ze=null,bi(t,e,c,6);break;case 8:yc(),Ut=6;break t;default:throw Error(s(462))}}B5();break}catch(H){_m(t,H)}while(!0);return xn=Ra=null,X.H=r,X.A=o,_t=a,pt!==null?0:(zt=null,bt=0,Kl(),Ut)}function B5(){for(;pt!==null&&!e2();)Lm(pt)}function Lm(t){var e=rm(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Cs(t):pt=e}function Um(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=I0(a,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=I0(a,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:Tu(e);default:Dm(a,e),e=pt=Mm(e,Mn),e=rm(a,e,Mn)}t.memoizedProps=t.pendingProps,e===null?Cs(t):pt=e}function bi(t,e,a,r){xn=Ra=null,Tu(e),li=null,hr=0;var o=e.return;try{if(S5(t,o,e,a,bt)){Ut=1,ps(t,Ne(a,t.current)),pt=null;return}}catch(c){if(o!==null)throw pt=o,c;Ut=1,ps(t,Ne(a,t.current)),pt=null;return}e.flags&32768?(xt||r===1?t=!0:gi||(bt&536870912)!==0?t=!1:(Cn=t=!0,(r===2||r===3||r===6)&&(r=ke.current,r!==null&&r.tag===13&&(r.flags|=16384))),km(e,t)):Cs(e)}function Cs(t){var e=t;do{if((e.flags&32768)!==0){km(e,Cn);return}t=e.return;var a=C5(e.alternate,e,Mn);if(a!==null){pt=a;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);Ut===0&&(Ut=5)}function km(t,e){do{var a=M5(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Ut=6,pt=null}function Hm(t,e,a,r,o,c,g,b,S,D){var H=X.T,q=K.p;try{K.p=2,X.T=null,_5(t,e,a,r,q,o,c,g,b,S,D)}finally{X.T=H,K.p=q}}function _5(t,e,a,r,o,c,g,b){do xi();while(Ba!==null);if((_t&6)!==0)throw Error(s(327));var S=t.finishedWork;if(r=t.finishedLanes,S===null)return null;if(t.finishedWork=null,t.finishedLanes=0,S===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var D=S.lanes|S.childLanes;if(D|=uu,d2(t,r,D,c,g,b),t===zt&&(pt=zt=null,bt=0),(S.subtreeFlags&10256)===0&&(S.flags&10256)===0||Ts||(Ts=!0,mc=D,pc=a,U5(_l,function(){return xi(),null})),a=(S.flags&15990)!==0,(S.subtreeFlags&15990)!==0||a?(a=X.T,X.T=null,c=K.p,K.p=2,g=_t,_t|=4,E5(t,S),xm(S,t),i5(jc,t.containerInfo),Us=!!Oc,jc=Oc=null,t.current=S,gm(t,S.alternate,S),n2(),_t=g,K.p=c,X.T=a):t.current=S,Ts?(Ts=!1,Ba=t,Or=r):Pm(t,D),D=t.pendingLanes,D===0&&(ea=null),s2(S.stateNode),sn(t),e!==null)for(o=t.onRecoverableError,S=0;S<e.length;S++)D=e[S],o(D.value,{componentStack:D.stack});return(Or&3)!==0&&xi(),D=t.pendingLanes,(r&4194218)!==0&&(D&42)!==0?t===gc?jr++:(jr=0,gc=t):jr=0,Br(0),null}function Pm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,pr(e)))}function xi(){if(Ba!==null){var t=Ba,e=mc;mc=0;var a=Fd(Or),r=X.T,o=K.p;try{if(K.p=32>a?32:a,X.T=null,Ba===null)var c=!1;else{a=pc,pc=null;var g=Ba,b=Or;if(Ba=null,Or=0,(_t&6)!==0)throw Error(s(331));var S=_t;if(_t|=4,Am(g.current),wm(g,g.current,b,a),_t=S,Br(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Zi,g)}catch{}c=!0}return c}finally{K.p=o,X.T=r,Pm(t,e)}}return!1}function qm(t,e,a){e=Ne(a,e),e=Uu(t.stateNode,e,2),t=Kn(t,e,2),t!==null&&(Fi(t,2),sn(t))}function Mt(t,e,a){if(t.tag===3)qm(t,t,a);else for(;e!==null;){if(e.tag===3){qm(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ea===null||!ea.has(r))){t=Ne(a,t),a=$0(2),r=Kn(e,a,2),r!==null&&(X0(a,r,e,t),Fi(r,2),sn(r));break}}e=e.return}}function Sc(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new z5;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(a)||(cc=!0,o.add(a),t=V5.bind(null,t,e,a),e.then(t,t))}function V5(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(bt&a)===a&&(Ut===4||Ut===3&&(bt&62914560)===bt&&300>en()-hc?(_t&2)===0&&yi(t,0):fc|=a,vi===bt&&(vi=0)),sn(t)}function Ym(t,e){e===0&&(e=Qd()),t=Pn(t,e),t!==null&&(Fi(t,e),sn(t))}function N5(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ym(t,a)}function L5(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),Ym(t,a)}function U5(t,e){return ko(t,e)}var Ms=null,Si=null,wc=!1,Rs=!1,Ec=!1,_a=0;function sn(t){t!==Si&&t.next===null&&(Si===null?Ms=Si=t:Si=Si.next=t),Rs=!0,wc||(wc=!0,H5(k5))}function Br(t,e){if(!Ec&&Rs){Ec=!0;do for(var a=!1,r=Ms;r!==null;){if(t!==0){var o=r.pendingLanes;if(o===0)var c=0;else{var g=r.suspendedLanes,b=r.pingedLanes;c=(1<<31-Ae(42|t)+1)-1,c&=o&~(g&~b),c=c&201326677?c&201326677|1:c?c|2:0}c!==0&&(a=!0,Xm(r,c))}else c=bt,c=Ll(r,r===zt?c:0),(c&3)===0||Ki(r,c)||(a=!0,Xm(r,c));r=r.next}while(a);Ec=!1}}function k5(){Rs=wc=!1;var t=0;_a!==0&&(Z5()&&(t=_a),_a=0);for(var e=en(),a=null,r=Ms;r!==null;){var o=r.next,c=Gm(r,e);c===0?(r.next=null,a===null?Ms=o:a.next=o,o===null&&(Si=a)):(a=r,(t!==0||(c&3)!==0)&&(Rs=!0)),r=o}Br(t)}function Gm(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Ae(c),b=1<<g,S=o[g];S===-1?((b&a)===0||(b&r)!==0)&&(o[g]=f2(b,e)):S<=e&&(t.expiredLanes|=b),c&=~b}if(e=zt,a=bt,a=Ll(t,t===e?a:0),r=t.callbackNode,a===0||t===e&&Dt===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ho(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ki(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&Ho(r),Fd(a)){case 2:case 8:a=Gd;break;case 32:a=_l;break;case 268435456:a=$d;break;default:a=_l}return r=$m.bind(null,t),a=ko(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&Ho(r),t.callbackPriority=2,t.callbackNode=null,2}function $m(t,e){var a=t.callbackNode;if(xi()&&t.callbackNode!==a)return null;var r=bt;return r=Ll(t,t===zt?r:0),r===0?null:(jm(t,r,e),Gm(t,en()),t.callbackNode!=null&&t.callbackNode===a?$m.bind(null,t):null)}function Xm(t,e){if(xi())return null;jm(t,e,!0)}function H5(t){F5(function(){(_t&6)!==0?ko(Yd,t):t()})}function Tc(){return _a===0&&(_a=Xd()),_a}function Qm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ql(""+t)}function Zm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function P5(t,e,a,r,o){if(e==="submit"&&a&&a.stateNode===o){var c=Qm((o[xe]||null).action),g=r.submitter;g&&(e=(e=g[xe]||null)?Qm(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var b=new Xl("action","action",null,r,o);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(_a!==0){var S=g?Zm(o,g):new FormData(o);Bu(a,{pending:!0,data:S,method:o.method,action:c},null,S)}}else typeof c=="function"&&(b.preventDefault(),S=g?Zm(o,g):new FormData(o),Bu(a,{pending:!0,data:S,method:o.method,action:c},c,S))},currentTarget:o}]})}}for(var Ac=0;Ac<Hh.length;Ac++){var Cc=Hh[Ac],q5=Cc.toLowerCase(),Y5=Cc[0].toUpperCase()+Cc.slice(1);Ke(q5,"on"+Y5)}Ke(Vh,"onAnimationEnd"),Ke(Nh,"onAnimationIteration"),Ke(Lh,"onAnimationStart"),Ke("dblclick","onDoubleClick"),Ke("focusin","onFocus"),Ke("focusout","onBlur"),Ke(l5,"onTransitionRun"),Ke(s5,"onTransitionStart"),Ke(o5,"onTransitionCancel"),Ke(Uh,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_r));function Km(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],o=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var b=r[g],S=b.instance,D=b.currentTarget;if(b=b.listener,S!==c&&o.isPropagationStopped())break t;c=b,o.currentTarget=D;try{c(o)}catch(H){ms(H)}o.currentTarget=null,c=S}else for(g=0;g<r.length;g++){if(b=r[g],S=b.instance,D=b.currentTarget,b=b.listener,S!==c&&o.isPropagationStopped())break t;c=b,o.currentTarget=D;try{c(o)}catch(H){ms(H)}o.currentTarget=null,c=S}}}}function yt(t,e){var a=e[qo];a===void 0&&(a=e[qo]=new Set);var r=t+"__bubble";a.has(r)||(Fm(e,t,2,!1),a.add(r))}function Mc(t,e,a){var r=0;e&&(r|=4),Fm(a,t,r,e)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Rc(t){if(!t[zs]){t[zs]=!0,Id.forEach(function(a){a!=="selectionchange"&&(G5.has(a)||Mc(a,!1,t),Mc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zs]||(e[zs]=!0,Mc("selectionchange",!1,e))}}function Fm(t,e,a,r){switch(bp(e)){case 2:var o=gb;break;case 8:o=vb;break;default:o=Pc}a=o.bind(null,e,a,t),o=void 0,!Fo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,a,{capture:!0,passive:o}):t.addEventListener(e,a,!0):o!==void 0?t.addEventListener(e,a,{passive:o}):t.addEventListener(e,a,!1)}function zc(t,e,a,r,o){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===o||b.nodeType===8&&b.parentNode===o)break;if(g===4)for(g=r.return;g!==null;){var S=g.tag;if((S===3||S===4)&&(S=g.stateNode.containerInfo,S===o||S.nodeType===8&&S.parentNode===o))return;g=g.return}for(;b!==null;){if(g=ma(b),g===null)return;if(S=g.tag,S===5||S===6||S===26||S===27){r=c=g;continue t}b=b.parentNode}}r=r.return}fh(function(){var D=c,H=Zo(a),q=[];t:{var V=kh.get(t);if(V!==void 0){var k=Xl,et=t;switch(t){case"keypress":if(Gl(a)===0)break t;case"keydown":case"keyup":k=L2;break;case"focusin":et="focus",k=tu;break;case"focusout":et="blur",k=tu;break;case"beforeblur":case"afterblur":k=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=A2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=H2;break;case Vh:case Nh:case Lh:k=R2;break;case Uh:k=q2;break;case"scroll":case"scrollend":k=E2;break;case"wheel":k=G2;break;case"copy":case"cut":case"paste":k=D2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=gh;break;case"toggle":case"beforetoggle":k=X2}var ot=(e&4)!==0,kt=!ot&&(t==="scroll"||t==="scrollend"),j=ot?V!==null?V+"Capture":null:V;ot=[];for(var z=D,B;z!==null;){var P=z;if(B=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||B===null||j===null||(P=Ii(z,j),P!=null&&ot.push(Vr(z,P,B))),kt)break;z=z.return}0<ot.length&&(V=new k(V,et,null,a,H),q.push({event:V,listeners:ot}))}}if((e&7)===0){t:{if(V=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",V&&a!==Qo&&(et=a.relatedTarget||a.fromElement)&&(ma(et)||et[$a]))break t;if((k||V)&&(V=H.window===H?H:(V=H.ownerDocument)?V.defaultView||V.parentWindow:window,k?(et=a.relatedTarget||a.toElement,k=D,et=et?ma(et):null,et!==null&&(kt=I(et),ot=et.tag,et!==kt||ot!==5&&ot!==27&&ot!==6)&&(et=null)):(k=null,et=D),k!==et)){if(ot=mh,P="onMouseLeave",j="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(ot=gh,P="onPointerLeave",j="onPointerEnter",z="pointer"),kt=k==null?V:Wi(k),B=et==null?V:Wi(et),V=new ot(P,z+"leave",k,a,H),V.target=kt,V.relatedTarget=B,P=null,ma(H)===D&&(ot=new ot(j,z+"enter",et,a,H),ot.target=B,ot.relatedTarget=kt,P=ot),kt=P,k&&et)e:{for(ot=k,j=et,z=0,B=ot;B;B=wi(B))z++;for(B=0,P=j;P;P=wi(P))B++;for(;0<z-B;)ot=wi(ot),z--;for(;0<B-z;)j=wi(j),B--;for(;z--;){if(ot===j||j!==null&&ot===j.alternate)break e;ot=wi(ot),j=wi(j)}ot=null}else ot=null;k!==null&&Jm(q,V,k,ot,!1),et!==null&&kt!==null&&Jm(q,kt,et,ot,!0)}}t:{if(V=D?Wi(D):window,k=V.nodeName&&V.nodeName.toLowerCase(),k==="select"||k==="input"&&V.type==="file")var W=Th;else if(wh(V))if(Ah)W=n5;else{W=t5;var mt=I2}else k=V.nodeName,!k||k.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?D&&Xo(D.elementType)&&(W=Th):W=e5;if(W&&(W=W(t,D))){Eh(q,W,a,H);break t}mt&&mt(t,V,D),t==="focusout"&&D&&V.type==="number"&&D.memoizedProps.value!=null&&$o(V,"number",V.value)}switch(mt=D?Wi(D):window,t){case"focusin":(wh(mt)||mt.contentEditable==="true")&&(ti=mt,lu=D,sr=null);break;case"focusout":sr=lu=ti=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Bh(q,a,H);break;case"selectionchange":if(r5)break;case"keydown":case"keyup":Bh(q,a,H)}var at;if(nu)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Ia?xh(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(vh&&a.locale!=="ko"&&(Ia||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ia&&(at=dh()):(Hn=H,Jo="value"in Hn?Hn.value:Hn.textContent,Ia=!0)),mt=Ds(D,rt),0<mt.length&&(rt=new ph(rt,t,null,a,H),q.push({event:rt,listeners:mt}),at?rt.data=at:(at=Sh(a),at!==null&&(rt.data=at)))),(at=Z2?K2(t,a):F2(t,a))&&(rt=Ds(D,"onBeforeInput"),0<rt.length&&(mt=new ph("onBeforeInput","beforeinput",null,a,H),q.push({event:mt,listeners:rt}),mt.data=at)),P5(q,t,D,a,H)}Km(q,e)})}function Vr(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ds(t,e){for(var a=e+"Capture",r=[];t!==null;){var o=t,c=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Ii(t,a),o!=null&&r.unshift(Vr(t,o,c)),o=Ii(t,e),o!=null&&r.push(Vr(t,o,c))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jm(t,e,a,r,o){for(var c=e._reactName,g=[];a!==null&&a!==r;){var b=a,S=b.alternate,D=b.stateNode;if(b=b.tag,S!==null&&S===r)break;b!==5&&b!==26&&b!==27||D===null||(S=D,o?(D=Ii(a,c),D!=null&&g.unshift(Vr(a,D,S))):o||(D=Ii(a,c),D!=null&&g.push(Vr(a,D,S)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var $5=/\r\n?/g,X5=/\u0000|\uFFFD/g;function Wm(t){return(typeof t=="string"?t:""+t).replace($5,`
`).replace(X5,"")}function Im(t,e){return e=Wm(e),Wm(t)===e}function Os(){}function Ct(t,e,a,r,o,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Fa(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Fa(t,""+r);break;case"className":kl(t,"class",r);break;case"tabIndex":kl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":kl(t,a,r);break;case"style":uh(t,r,c);break;case"data":if(e!=="object"){kl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ql(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Ct(t,e,"name",o.name,o,null),Ct(t,e,"formEncType",o.formEncType,o,null),Ct(t,e,"formMethod",o.formMethod,o,null),Ct(t,e,"formTarget",o.formTarget,o,null)):(Ct(t,e,"encType",o.encType,o,null),Ct(t,e,"method",o.method,o,null),Ct(t,e,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ql(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Os);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ql(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Ul(t,"popover",r);break;case"xlinkActuate":mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":mn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":mn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":mn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":mn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ul(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=S2.get(a)||a,Ul(t,a,r))}}function Dc(t,e,a,r,o,c){switch(a){case"style":uh(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Fa(t,r):(typeof r=="number"||typeof r=="bigint")&&Fa(t,""+r);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Os);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!th.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),e=a.slice(2,o?a.length-7:void 0),c=t[xe]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,o),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,o);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ul(t,a,r)}}}function se(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var r=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,c,g,a,null)}}o&&Ct(t,e,"srcSet",a.srcSet,a,null),r&&Ct(t,e,"src",a.src,a,null);return;case"input":yt("invalid",t);var b=c=g=o=null,S=null,D=null;for(r in a)if(a.hasOwnProperty(r)){var H=a[r];if(H!=null)switch(r){case"name":o=H;break;case"type":g=H;break;case"checked":S=H;break;case"defaultChecked":D=H;break;case"value":c=H;break;case"defaultValue":b=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,e));break;default:Ct(t,e,r,H,a,null)}}rh(t,c,b,S,D,g,o,!1),Hl(t);return;case"select":yt("invalid",t),r=g=c=null;for(o in a)if(a.hasOwnProperty(o)&&(b=a[o],b!=null))switch(o){case"value":c=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Ct(t,e,o,b,a,null)}e=c,a=g,t.multiple=!!r,e!=null?Ka(t,!!r,e,!1):a!=null&&Ka(t,!!r,a,!0);return;case"textarea":yt("invalid",t),c=o=r=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":o=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ct(t,e,g,b,a,null)}sh(t,r,o,c),Hl(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(r=a[S],r!=null))switch(S){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ct(t,e,S,r,a,null)}return;case"dialog":yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(r=0;r<_r.length;r++)yt(_r[r],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(r=a[D],r!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,D,r,a,null)}return;default:if(Xo(e)){for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!==void 0&&Dc(t,e,H,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ct(t,e,b,r,a,null))}function Q5(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,g=null,b=null,S=null,D=null,H=null;for(k in a){var q=a[k];if(a.hasOwnProperty(k)&&q!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":S=q;default:r.hasOwnProperty(k)||Ct(t,e,k,null,r,q)}}for(var V in r){var k=r[V];if(q=a[V],r.hasOwnProperty(V)&&(k!=null||q!=null))switch(V){case"type":c=k;break;case"name":o=k;break;case"checked":D=k;break;case"defaultChecked":H=k;break;case"value":g=k;break;case"defaultValue":b=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:k!==q&&Ct(t,e,V,k,r,q)}}Go(t,g,b,S,D,H,c,o);return;case"select":k=g=b=V=null;for(c in a)if(S=a[c],a.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":k=S;default:r.hasOwnProperty(c)||Ct(t,e,c,null,r,S)}for(o in r)if(c=r[o],S=a[o],r.hasOwnProperty(o)&&(c!=null||S!=null))switch(o){case"value":V=c;break;case"defaultValue":b=c;break;case"multiple":g=c;default:c!==S&&Ct(t,e,o,c,r,S)}e=b,a=g,r=k,V!=null?Ka(t,!!a,V,!1):!!r!=!!a&&(e!=null?Ka(t,!!a,e,!0):Ka(t,!!a,a?[]:"",!1));return;case"textarea":k=V=null;for(b in a)if(o=a[b],a.hasOwnProperty(b)&&o!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ct(t,e,b,null,r,o)}for(g in r)if(o=r[g],c=a[g],r.hasOwnProperty(g)&&(o!=null||c!=null))switch(g){case"value":V=o;break;case"defaultValue":k=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==c&&Ct(t,e,g,o,r,c)}lh(t,V,k);return;case"option":for(var et in a)if(V=a[et],a.hasOwnProperty(et)&&V!=null&&!r.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Ct(t,e,et,null,r,V)}for(S in r)if(V=r[S],k=a[S],r.hasOwnProperty(S)&&V!==k&&(V!=null||k!=null))switch(S){case"selected":t.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Ct(t,e,S,V,r,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)V=a[ot],a.hasOwnProperty(ot)&&V!=null&&!r.hasOwnProperty(ot)&&Ct(t,e,ot,null,r,V);for(D in r)if(V=r[D],k=a[D],r.hasOwnProperty(D)&&V!==k&&(V!=null||k!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,e));break;default:Ct(t,e,D,V,r,k)}return;default:if(Xo(e)){for(var kt in a)V=a[kt],a.hasOwnProperty(kt)&&V!==void 0&&!r.hasOwnProperty(kt)&&Dc(t,e,kt,void 0,r,V);for(H in r)V=r[H],k=a[H],!r.hasOwnProperty(H)||V===k||V===void 0&&k===void 0||Dc(t,e,H,V,r,k);return}}for(var j in a)V=a[j],a.hasOwnProperty(j)&&V!=null&&!r.hasOwnProperty(j)&&Ct(t,e,j,null,r,V);for(q in r)V=r[q],k=a[q],!r.hasOwnProperty(q)||V===k||V==null&&k==null||Ct(t,e,q,V,r,k)}var Oc=null,jc=null;function js(t){return t.nodeType===9?t:t.ownerDocument}function tp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ep(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _c=null;function Z5(){var t=window.event;return t&&t.type==="popstate"?t===_c?!1:(_c=t,!0):(_c=null,!1)}var np=typeof setTimeout=="function"?setTimeout:void 0,K5=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,F5=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(t){return ap.resolve(null).then(t).catch(J5)}:np;function J5(t){setTimeout(function(){throw t})}function Vc(t,e){var a=e,r=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){t.removeChild(o),Yr(e);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Yr(e)}function Nc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Nc(a),Yo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function W5(t,e,a,r){for(;t.nodeType===1;){var o=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ji])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==o.rel||t.getAttribute("href")!==(o.href==null?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=We(t.nextSibling),t===null)break}return null}function I5(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=We(t.nextSibling),t===null))return null;return t}function We(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function rp(t,e,a){switch(e=js(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var Ge=new Map,lp=new Set;function Bs(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var zn=K.d;K.d={f:tb,r:eb,D:nb,C:ab,L:ib,m:rb,X:sb,S:lb,M:ob};function tb(){var t=zn.f(),e=As();return t||e}function eb(t){var e=Xa(t);e!==null&&e.tag===5&&e.type==="form"?B0(e):zn.r(t)}var Ei=typeof document>"u"?null:document;function sp(t,e,a){var r=Ei;if(r&&typeof e=="string"&&e){var o=_e(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),lp.has(o)||(lp.add(o),t={rel:t,crossOrigin:a,href:e},r.querySelector(o)===null&&(e=r.createElement("link"),se(e,"link",t),Wt(e),r.head.appendChild(e)))}}function nb(t){zn.D(t),sp("dns-prefetch",t,null)}function ab(t,e){zn.C(t,e),sp("preconnect",t,e)}function ib(t,e,a){zn.L(t,e,a);var r=Ei;if(r&&t&&e){var o='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+_e(a.imageSizes)+'"]')):o+='[href="'+_e(t)+'"]';var c=o;switch(e){case"style":c=Ti(t);break;case"script":c=Ai(t)}Ge.has(c)||(t=tt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ge.set(c,t),r.querySelector(o)!==null||e==="style"&&r.querySelector(Nr(c))||e==="script"&&r.querySelector(Lr(c))||(e=r.createElement("link"),se(e,"link",t),Wt(e),r.head.appendChild(e)))}}function rb(t,e){zn.m(t,e);var a=Ei;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+_e(r)+'"][href="'+_e(t)+'"]',c=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ai(t)}if(!Ge.has(c)&&(t=tt({rel:"modulepreload",href:t},e),Ge.set(c,t),a.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lr(c)))return}r=a.createElement("link"),se(r,"link",t),Wt(r),a.head.appendChild(r)}}}function lb(t,e,a){zn.S(t,e,a);var r=Ei;if(r&&t){var o=Qa(r).hoistableStyles,c=Ti(t);e=e||"default";var g=o.get(c);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(Nr(c)))b.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ge.get(c))&&Lc(t,a);var S=g=r.createElement("link");Wt(S),se(S,"link",t),S._p=new Promise(function(D,H){S.onload=D,S.onerror=H}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,_s(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:b},o.set(c,g)}}}function sb(t,e){zn.X(t,e);var a=Ei;if(a&&t){var r=Qa(a).hoistableScripts,o=Ai(t),c=r.get(o);c||(c=a.querySelector(Lr(o)),c||(t=tt({src:t,async:!0},e),(e=Ge.get(o))&&Uc(t,e),c=a.createElement("script"),Wt(c),se(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function ob(t,e){zn.M(t,e);var a=Ei;if(a&&t){var r=Qa(a).hoistableScripts,o=Ai(t),c=r.get(o);c||(c=a.querySelector(Lr(o)),c||(t=tt({src:t,async:!0,type:"module"},e),(e=Ge.get(o))&&Uc(t,e),c=a.createElement("script"),Wt(c),se(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function op(t,e,a,r){var o=(o=Ln.current)?Bs(o):null;if(!o)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Ti(a.href),a=Qa(o).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ti(a.href);var c=Qa(o).hoistableStyles,g=c.get(t);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=o.querySelector(Nr(t)))&&!c._p&&(g.instance=c,g.state.loading=5),Ge.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ge.set(t,a),c||ub(o,t,a,g.state))),e&&r===null)throw Error(s(528,""));return g}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ai(a),a=Qa(o).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ti(t){return'href="'+_e(t)+'"'}function Nr(t){return'link[rel="stylesheet"]['+t+"]"}function up(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function ub(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),se(e,"link",a),Wt(e),t.head.appendChild(e))}function Ai(t){return'[src="'+_e(t)+'"]'}function Lr(t){return"script[async]"+t}function cp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(r)return e.instance=r,Wt(r),r;var o=tt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Wt(r),se(r,"style",o),_s(r,a.precedence,t),e.instance=r;case"stylesheet":o=Ti(a.href);var c=t.querySelector(Nr(o));if(c)return e.state.loading|=4,e.instance=c,Wt(c),c;r=up(a),(o=Ge.get(o))&&Lc(r,o),c=(t.ownerDocument||t).createElement("link"),Wt(c);var g=c;return g._p=new Promise(function(b,S){g.onload=b,g.onerror=S}),se(c,"link",r),e.state.loading|=4,_s(c,a.precedence,t),e.instance=c;case"script":return c=Ai(a.src),(o=t.querySelector(Lr(c)))?(e.instance=o,Wt(o),o):(r=a,(o=Ge.get(c))&&(r=tt({},a),Uc(r,o)),t=t.ownerDocument||t,o=t.createElement("script"),Wt(o),se(o,"link",r),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,_s(r,a.precedence,t));return e.instance}function _s(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,c=o,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===e)c=b;else if(c!==o)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Lc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Uc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Vs=null;function fp(t,e,a){if(Vs===null){var r=new Map,o=Vs=new Map;o.set(a,r)}else o=Vs,r=o.get(a),r||(r=new Map,o.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),o=0;o<a.length;o++){var c=a[o];if(!(c[Ji]||c[ce]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var b=r.get(g);b?b.push(c):r.set(g,[c])}}return r}function dp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function cb(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function hp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ur=null;function fb(){}function db(t,e,a){if(Ur===null)throw Error(s(475));var r=Ur;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=Ti(a.href),c=t.querySelector(Nr(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Ns.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,Wt(c);return}c=t.ownerDocument||t,a=up(a),(o=Ge.get(o))&&Lc(a,o),c=c.createElement("link"),Wt(c);var g=c;g._p=new Promise(function(b,S){g.onload=b,g.onerror=S}),se(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Ns.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function hb(){if(Ur===null)throw Error(s(475));var t=Ur;return t.stylesheets&&t.count===0&&kc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&kc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ns(){if(this.count--,this.count===0){if(this.stylesheets)kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ls=null;function kc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ls=new Map,e.forEach(mb,t),Ls=null,Ns.call(t))}function mb(t,e){if(!(e.state.loading&4)){var a=Ls.get(t);if(a)var r=a.get(null);else{a=new Map,Ls.set(t,a);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var g=o[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}o=e.instance,g=o.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,o),a.set(g,o),this.count++,r=Ns.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),c?c.parentNode.insertBefore(o,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var kr={$$typeof:E,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function pb(t,e,a,r,o,c,g,b){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.hiddenUpdates=Po(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function mp(t,e,a,r,o,c,g,b,S,D,H,q){return t=new pb(t,e,a,g,b,S,D,q),e=1,c===!0&&(e|=24),c=qe(3,null,null,e),t.current=c,c.stateNode=t,e=vu(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},Ju(c),t}function pp(t){return t?(t=ai,t):ai}function gp(t,e,a,r,o,c){o=pp(o),r.context===null?r.context=o:r.pendingContext=o,r=Zn(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Kn(t,r,e),a!==null&&(ve(a,t,e),wr(a,t,e))}function vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Hc(t,e){vp(t,e),(t=t.alternate)&&vp(t,e)}function yp(t){if(t.tag===13){var e=Pn(t,67108864);e!==null&&ve(e,t,67108864),Hc(t,67108864)}}var Us=!0;function gb(t,e,a,r){var o=X.T;X.T=null;var c=K.p;try{K.p=2,Pc(t,e,a,r)}finally{K.p=c,X.T=o}}function vb(t,e,a,r){var o=X.T;X.T=null;var c=K.p;try{K.p=8,Pc(t,e,a,r)}finally{K.p=c,X.T=o}}function Pc(t,e,a,r){if(Us){var o=qc(r);if(o===null)zc(t,e,r,ks,a),xp(t,r);else if(bb(o,t,e,a,r))r.stopPropagation();else if(xp(t,r),e&4&&-1<yb.indexOf(t)){for(;o!==null;){var c=Xa(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ha(c.pendingLanes);if(g!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var S=1<<31-Ae(g);b.entanglements[1]|=S,g&=~S}sn(c),(_t&6)===0&&(ws=en()+500,Br(0))}}break;case 13:b=Pn(c,2),b!==null&&ve(b,c,2),As(),Hc(c,2)}if(c=qc(r),c===null&&zc(t,e,r,ks,a),c===o)break;o=c}o!==null&&r.stopPropagation()}else zc(t,e,r,null,a)}}function qc(t){return t=Zo(t),Yc(t)}var ks=null;function Yc(t){if(ks=null,t=ma(t),t!==null){var e=I(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=ct(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ks=t,null}function bp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(a2()){case Yd:return 2;case Gd:return 8;case _l:case i2:return 32;case $d:return 268435456;default:return 32}default:return 32}}var Gc=!1,na=null,aa=null,ia=null,Hr=new Map,Pr=new Map,ra=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":Hr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(e.pointerId)}}function qr(t,e,a,r,o,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[o]},e!==null&&(e=Xa(e),e!==null&&yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function bb(t,e,a,r,o){switch(e){case"focusin":return na=qr(na,t,e,a,r,o),!0;case"dragenter":return aa=qr(aa,t,e,a,r,o),!0;case"mouseover":return ia=qr(ia,t,e,a,r,o),!0;case"pointerover":var c=o.pointerId;return Hr.set(c,qr(Hr.get(c)||null,t,e,a,r,o)),!0;case"gotpointercapture":return c=o.pointerId,Pr.set(c,qr(Pr.get(c)||null,t,e,a,r,o)),!0}return!1}function Sp(t){var e=ma(t.target);if(e!==null){var a=I(e);if(a!==null){if(e=a.tag,e===13){if(e=ct(a),e!==null){t.blockedOn=e,h2(t.priority,function(){if(a.tag===13){var r=De(),o=Pn(a,r);o!==null&&ve(o,a,r),Hc(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=qc(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Qo=r,a.target.dispatchEvent(r),Qo=null}else return e=Xa(a),e!==null&&yp(e),t.blockedOn=a,!1;e.shift()}return!0}function wp(t,e,a){Hs(t)&&a.delete(e)}function xb(){Gc=!1,na!==null&&Hs(na)&&(na=null),aa!==null&&Hs(aa)&&(aa=null),ia!==null&&Hs(ia)&&(ia=null),Hr.forEach(wp),Pr.forEach(wp)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xb)))}var qs=null;function Ep(t){qs!==t&&(qs=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){qs===t&&(qs=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],o=t[e+2];if(typeof r!="function"){if(Yc(r||a)===null)continue;break}var c=Xa(a);c!==null&&(t.splice(e,3),e-=3,Bu(c,{pending:!0,data:o,method:a.method,action:r},r,o))}}))}function Yr(t){function e(S){return Ps(S,t)}na!==null&&Ps(na,t),aa!==null&&Ps(aa,t),ia!==null&&Ps(ia,t),Hr.forEach(e),Pr.forEach(e);for(var a=0;a<ra.length;a++){var r=ra[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ra.length&&(a=ra[0],a.blockedOn===null);)Sp(a),a.blockedOn===null&&ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var o=a[r],c=a[r+1],g=o[xe]||null;if(typeof c=="function")g||Ep(a);else if(g){var b=null;if(c&&c.hasAttribute("formAction")){if(o=c,g=c[xe]||null)b=g.formAction;else if(Yc(o)!==null)continue}else b=g.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Ep(a)}}}function $c(t){this._internalRoot=t}Ys.prototype.render=$c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,r=De();gp(a,r,t,e,null,null)},Ys.prototype.unmount=$c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&xi(),gp(t.current,2,null,t,null,null),As(),e[$a]=null}};function Ys(t){this._internalRoot=t}Ys.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jd();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ra.length&&e!==0&&e<ra[a].priority;a++);ra.splice(a,0,t),a===0&&Sp(t)}};var Tp=i.version;if(Tp!=="19.0.0")throw Error(s(527,Tp,"19.0.0"));K.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=Y(e),t=t!==null?nt(t):null,t=t===null?null:t.stateNode,t};var Sb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:X,findFiberByHostInstance:ma,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{Zi=Gs.inject(Sb),Te=Gs}catch{}}return $r.createRoot=function(t,e){if(!u(t))throw Error(s(299));var a=!1,r="",o=P0,c=q0,g=Y0,b=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(b=e.unstable_transitionCallbacks)),e=mp(t,1,!1,null,null,a,r,o,c,g,b,null),t[$a]=e.current,Rc(t.nodeType===8?t.parentNode:t),new $c(e)},$r.hydrateRoot=function(t,e,a){if(!u(t))throw Error(s(299));var r=!1,o="",c=P0,g=q0,b=Y0,S=null,D=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(D=a.formState)),e=mp(t,1,!0,e,a??null,r,o,c,g,b,S,D),e.context=pp(null),a=e.current,r=De(),o=Zn(r),o.callback=null,Kn(a,o,r),e.current.lanes=r,Fi(e,r),sn(e),t[$a]=e.current,Rc(t),new Ys(e)},$r.version="19.0.0",$r}var _p;function jb(){if(_p)return Zc.exports;_p=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Zc.exports=Ob(),Zc.exports}var Bb=jb(),Xr={},Vp;function _b(){if(Vp)return Xr;Vp=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.parse=d,Xr.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,E){const w=new f,C=x.length;if(C<2)return w;const O=(E==null?void 0:E.decode)||v;let R=0;do{const L=x.indexOf("=",R);if(L===-1)break;const N=x.indexOf(";",R),$=N===-1?C:N;if(L>$){R=x.lastIndexOf(";",L-1)+1;continue}const U=m(x,R,L),G=h(x,L,U),Q=x.slice(U,G);if(w[Q]===void 0){let F=m(x,L+1,$),X=h(x,$,F);const tt=O(x.slice(F,X));w[Q]=tt}R=$+1}while(R<C);return w}function m(x,E,w){do{const C=x.charCodeAt(E);if(C!==32&&C!==9)return E}while(++E<w);return w}function h(x,E,w){for(;E>w;){const C=x.charCodeAt(--E);if(C!==32&&C!==9)return E+1}return w}function p(x,E,w){const C=(w==null?void 0:w.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const O=C(E);if(!i.test(O))throw new TypeError(`argument val is invalid: ${E}`);let R=x+"="+O;if(!w)return R;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);R+="; Max-Age="+w.maxAge}if(w.domain){if(!l.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);R+="; Domain="+w.domain}if(w.path){if(!s.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);R+="; Path="+w.path}if(w.expires){if(!y(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);R+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(R+="; HttpOnly"),w.secure&&(R+="; Secure"),w.partitioned&&(R+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":R+="; Priority=Low";break;case"medium":R+="; Priority=Medium";break;case"high":R+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":R+="; SameSite=Strict";break;case"lax":R+="; SameSite=Lax";break;case"none":R+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return R}function v(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function y(x){return u.call(x)==="[object Date]"}return Xr}_b();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Np="popstate";function Vb(n={}){function i(s,u){let{pathname:f,search:d,hash:m}=s.location;return xf("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(s,u){return typeof u=="string"?u:il(u)}return Lb(i,l,null,n)}function Nt(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function fn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Nb(){return Math.random().toString(36).substring(2,10)}function Lp(n,i){return{usr:n.state,key:n.key,idx:i}}function xf(n,i,l=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?qi(i):i,state:l,key:i&&i.key||s||Nb()}}function il({pathname:n="/",search:i="",hash:l=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function qi(n){let i={};if(n){let l=n.indexOf("#");l>=0&&(i.hash=n.substring(l),n=n.substring(0,l));let s=n.indexOf("?");s>=0&&(i.search=n.substring(s),n=n.substring(0,s)),n&&(i.pathname=n)}return i}function Lb(n,i,l,s={}){let{window:u=document.defaultView,v5Compat:f=!1}=s,d=u.history,m="POP",h=null,p=v();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function v(){return(d.state||{idx:null}).idx}function y(){m="POP";let O=v(),R=O==null?null:O-p;p=O,h&&h({action:m,location:C.location,delta:R})}function x(O,R){m="PUSH";let L=xf(C.location,O,R);p=v()+1;let N=Lp(L,p),$=C.createHref(L);try{d.pushState(N,"",$)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;u.location.assign($)}f&&h&&h({action:m,location:C.location,delta:1})}function E(O,R){m="REPLACE";let L=xf(C.location,O,R);p=v();let N=Lp(L,p),$=C.createHref(L);d.replaceState(N,"",$),f&&h&&h({action:m,location:C.location,delta:0})}function w(O){let R=u.location.origin!=="null"?u.location.origin:u.location.href,L=typeof O=="string"?O:il(O);return L=L.replace(/ $/,"%20"),Nt(R,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,R)}let C={get action(){return m},get location(){return n(u,d)},listen(O){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Np,y),h=O,()=>{u.removeEventListener(Np,y),h=null}},createHref(O){return i(u,O)},createURL:w,encodeLocation(O){let R=w(O);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:x,replace:E,go(O){return d.go(O)}};return C}function O1(n,i,l="/"){return Ub(n,i,l,!1)}function Ub(n,i,l,s){let u=typeof i=="string"?qi(i):i,f=_n(u.pathname||"/",l);if(f==null)return null;let d=j1(n);kb(d);let m=null;for(let h=0;m==null&&h<d.length;++h){let p=Fb(f);m=Zb(d[h],p,s)}return m}function j1(n,i=[],l=[],s=""){let u=(f,d,m)=>{let h={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(Nt(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let p=On([s,h.relativePath]),v=l.concat(h);f.children&&f.children.length>0&&(Nt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),j1(f.children,i,v,p)),!(f.path==null&&!f.index)&&i.push({path:p,score:Xb(p,f.index),routesMeta:v})};return n.forEach((f,d)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))u(f,d);else for(let h of B1(f.path))u(f,d,h)}),i}function B1(n){let i=n.split("/");if(i.length===0)return[];let[l,...s]=i,u=l.endsWith("?"),f=l.replace(/\?$/,"");if(s.length===0)return u?[f,""]:[f];let d=B1(s.join("/")),m=[];return m.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&m.push(...d),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function kb(n){n.sort((i,l)=>i.score!==l.score?l.score-i.score:Qb(i.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var Hb=/^:[\w-]+$/,Pb=3,qb=2,Yb=1,Gb=10,$b=-2,Up=n=>n==="*";function Xb(n,i){let l=n.split("/"),s=l.length;return l.some(Up)&&(s+=$b),i&&(s+=qb),l.filter(u=>!Up(u)).reduce((u,f)=>u+(Hb.test(f)?Pb:f===""?Yb:Gb),s)}function Qb(n,i){return n.length===i.length&&n.slice(0,-1).every((s,u)=>s===i[u])?n[n.length-1]-i[i.length-1]:0}function Zb(n,i,l=!1){let{routesMeta:s}=n,u={},f="/",d=[];for(let m=0;m<s.length;++m){let h=s[m],p=m===s.length-1,v=f==="/"?i:i.slice(f.length)||"/",y=uo({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},v),x=h.route;if(!y&&p&&l&&!s[s.length-1].route.index&&(y=uo({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!y)return null;Object.assign(u,y.params),d.push({params:u,pathname:On([f,y.pathname]),pathnameBase:tx(On([f,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(f=On([f,y.pathnameBase]))}return d}function uo(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,s]=Kb(n.path,n.caseSensitive,n.end),u=i.match(l);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:s.reduce((p,{paramName:v,isOptional:y},x)=>{if(v==="*"){let w=m[x]||"";d=f.slice(0,f.length-w.length).replace(/(.)\/+$/,"$1")}const E=m[x];return y&&!E?p[v]=void 0:p[v]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function Kb(n,i=!1,l=!0){fn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,h)=>(s.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),s]}function Fb(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return fn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function _n(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,s=n.charAt(l);return s&&s!=="/"?null:n.slice(l)||"/"}function Jb(n,i="/"){let{pathname:l,search:s="",hash:u=""}=typeof n=="string"?qi(n):n;return{pathname:l?l.startsWith("/")?l:Wb(l,i):i,search:ex(s),hash:nx(u)}}function Wb(n,i){let l=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function Wc(n,i,l,s){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ib(n){return n.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function _1(n){let i=Ib(n);return i.map((l,s)=>s===i.length-1?l.pathname:l.pathnameBase)}function V1(n,i,l,s=!1){let u;typeof n=="string"?u=qi(n):(u={...n},Nt(!u.pathname||!u.pathname.includes("?"),Wc("?","pathname","search",u)),Nt(!u.pathname||!u.pathname.includes("#"),Wc("#","pathname","hash",u)),Nt(!u.search||!u.search.includes("#"),Wc("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,m;if(d==null)m=l;else{let y=i.length-1;if(!s&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),y-=1;u.pathname=x.join("/")}m=y>=0?i[y]:"/"}let h=Jb(u,m),p=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&l.endsWith("/");return!h.pathname.endsWith("/")&&(p||v)&&(h.pathname+="/"),h}var On=n=>n.join("/").replace(/\/\/+/g,"/"),tx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),ex=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,nx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ax(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var N1=["POST","PUT","PATCH","DELETE"];new Set(N1);var ix=["GET",...N1];new Set(ix);var Yi=A.createContext(null);Yi.displayName="DataRouter";var Eo=A.createContext(null);Eo.displayName="DataRouterState";var L1=A.createContext({isTransitioning:!1});L1.displayName="ViewTransition";var rx=A.createContext(new Map);rx.displayName="Fetchers";var lx=A.createContext(null);lx.displayName="Await";var dn=A.createContext(null);dn.displayName="Navigation";var wl=A.createContext(null);wl.displayName="Location";var Nn=A.createContext({outlet:null,matches:[],isDataRoute:!1});Nn.displayName="Route";var Ff=A.createContext(null);Ff.displayName="RouteError";function sx(n,{relative:i}={}){Nt(El(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=A.useContext(dn),{hash:u,pathname:f,search:d}=Tl(n,{relative:i}),m=f;return l!=="/"&&(m=f==="/"?l:On([l,f])),s.createHref({pathname:m,search:d,hash:u})}function El(){return A.useContext(wl)!=null}function fa(){return Nt(El(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(wl).location}var U1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k1(n){A.useContext(dn).static||A.useLayoutEffect(n)}function To(){let{isDataRoute:n}=A.useContext(Nn);return n?xx():ox()}function ox(){Nt(El(),"useNavigate() may be used only in the context of a <Router> component.");let n=A.useContext(Yi),{basename:i,navigator:l}=A.useContext(dn),{matches:s}=A.useContext(Nn),{pathname:u}=fa(),f=JSON.stringify(_1(s)),d=A.useRef(!1);return k1(()=>{d.current=!0}),A.useCallback((h,p={})=>{if(fn(d.current,U1),!d.current)return;if(typeof h=="number"){l.go(h);return}let v=V1(h,JSON.parse(f),u,p.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:On([i,v.pathname])),(p.replace?l.replace:l.push)(v,p.state,p)},[i,l,f,u,n])}A.createContext(null);function Tl(n,{relative:i}={}){let{matches:l}=A.useContext(Nn),{pathname:s}=fa(),u=JSON.stringify(_1(l));return A.useMemo(()=>V1(n,JSON.parse(u),s,i==="path"),[n,u,s,i])}function ux(n,i){return H1(n,i)}function H1(n,i,l,s){var L;Nt(El(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=A.useContext(dn),{matches:d}=A.useContext(Nn),m=d[d.length-1],h=m?m.params:{},p=m?m.pathname:"/",v=m?m.pathnameBase:"/",y=m&&m.route;{let N=y&&y.path||"";P1(p,!y||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=fa(),E;if(i){let N=typeof i=="string"?qi(i):i;Nt(v==="/"||((L=N.pathname)==null?void 0:L.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${N.pathname}" was given in the \`location\` prop.`),E=N}else E=x;let w=E.pathname||"/",C=w;if(v!=="/"){let N=v.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(N.length).join("/")}let O=!f&&l&&l.matches&&l.matches.length>0?l.matches:O1(n,{pathname:C});fn(y||O!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),fn(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=mx(O&&O.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:On([v,u.encodeLocation?u.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?v:On([v,u.encodeLocation?u.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),d,l,s);return i&&R?A.createElement(wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},R):R}function cx(){let n=bx(),i=ax(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:f},"ErrorBoundary")," or"," ",A.createElement("code",{style:f},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},i),l?A.createElement("pre",{style:u},l):null,d)}var fx=A.createElement(cx,null),dx=class extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?A.createElement(Nn.Provider,{value:this.props.routeContext},A.createElement(Ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function hx({routeContext:n,match:i,children:l}){let s=A.useContext(Yi);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),A.createElement(Nn.Provider,{value:n},l)}function mx(n,i=[],l=null,s=null){if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let u=n,f=l==null?void 0:l.errors;if(f!=null){let h=u.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);Nt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,m=-1;if(l)for(let h=0;h<u.length;h++){let p=u[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(m=h),p.route.id){let{loaderData:v,errors:y}=l,x=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||x){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((h,p,v)=>{let y,x=!1,E=null,w=null;l&&(y=f&&p.route.id?f[p.route.id]:void 0,E=p.route.errorElement||fx,d&&(m<0&&v===0?(P1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,w=null):m===v&&(x=!0,w=p.route.hydrateFallbackElement||null)));let C=i.concat(u.slice(0,v+1)),O=()=>{let R;return y?R=E:x?R=w:p.route.Component?R=A.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=h,A.createElement(hx,{match:p,routeContext:{outlet:h,matches:C,isDataRoute:l!=null},children:R})};return l&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?A.createElement(dx,{location:l.location,revalidation:l.revalidation,component:E,error:y,children:O(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):O()},null)}function Jf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function px(n){let i=A.useContext(Yi);return Nt(i,Jf(n)),i}function gx(n){let i=A.useContext(Eo);return Nt(i,Jf(n)),i}function vx(n){let i=A.useContext(Nn);return Nt(i,Jf(n)),i}function Wf(n){let i=vx(n),l=i.matches[i.matches.length-1];return Nt(l.route.id,`${n} can only be used on routes that contain a unique "id"`),l.route.id}function yx(){return Wf("useRouteId")}function bx(){var s;let n=A.useContext(Ff),i=gx("useRouteError"),l=Wf("useRouteError");return n!==void 0?n:(s=i.errors)==null?void 0:s[l]}function xx(){let{router:n}=px("useNavigate"),i=Wf("useNavigate"),l=A.useRef(!1);return k1(()=>{l.current=!0}),A.useCallback(async(u,f={})=>{fn(l.current,U1),l.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var kp={};function P1(n,i,l){!i&&!kp[n]&&(kp[n]=!0,fn(!1,l))}A.memo(Sx);function Sx({routes:n,future:i,state:l}){return H1(n,void 0,l,i)}function Mi(n){Nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wx({basename:n="/",children:i=null,location:l,navigationType:s="POP",navigator:u,static:f=!1}){Nt(!El(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=A.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof l=="string"&&(l=qi(l));let{pathname:h="/",search:p="",hash:v="",state:y=null,key:x="default"}=l,E=A.useMemo(()=>{let w=_n(h,d);return w==null?null:{location:{pathname:w,search:p,hash:v,state:y,key:x},navigationType:s}},[d,h,p,v,y,x,s]);return fn(E!=null,`<Router basename="${d}"> is not able to match the URL "${h}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:A.createElement(dn.Provider,{value:m},A.createElement(wl.Provider,{children:i,value:E}))}function Ex({children:n,location:i}){return ux(Sf(n),i)}function Sf(n,i=[]){let l=[];return A.Children.forEach(n,(s,u)=>{if(!A.isValidElement(s))return;let f=[...i,u];if(s.type===A.Fragment){l.push.apply(l,Sf(s.props.children,f));return}Nt(s.type===Mi,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Nt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Sf(s.props.children,f)),l.push(d)}),l}var Is="get",to="application/x-www-form-urlencoded";function Ao(n){return n!=null&&typeof n.tagName=="string"}function Tx(n){return Ao(n)&&n.tagName.toLowerCase()==="button"}function Ax(n){return Ao(n)&&n.tagName.toLowerCase()==="form"}function Cx(n){return Ao(n)&&n.tagName.toLowerCase()==="input"}function Mx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Rx(n,i){return n.button===0&&(!i||i==="_self")&&!Mx(n)}var $s=null;function zx(){if($s===null)try{new FormData(document.createElement("form"),0),$s=!1}catch{$s=!0}return $s}var Dx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ic(n){return n!=null&&!Dx.has(n)?(fn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${to}"`),null):n}function Ox(n,i){let l,s,u,f,d;if(Ax(n)){let m=n.getAttribute("action");s=m?_n(m,i):null,l=n.getAttribute("method")||Is,u=Ic(n.getAttribute("enctype"))||to,f=new FormData(n)}else if(Tx(n)||Cx(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(s=h?_n(h,i):null,l=n.getAttribute("formmethod")||m.getAttribute("method")||Is,u=Ic(n.getAttribute("formenctype"))||Ic(m.getAttribute("enctype"))||to,f=new FormData(m,n),!zx()){let{name:p,type:v,value:y}=n;if(v==="image"){let x=p?`${p}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else p&&f.append(p,y)}}else{if(Ao(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Is,s=null,u=to,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:s,method:l.toLowerCase(),encType:u,formData:f,body:d}}function If(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function jx(n,i){if(n.id in i)return i[n.id];try{let l=await import(n.module);return i[n.id]=l,l}catch(l){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function _x(n,i,l){let s=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await jx(f,l);return d.links?d.links():[]}return[]}));return Ux(s.flat(1).filter(Bx).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Hp(n,i,l,s,u,f){let d=(h,p)=>l[p]?h.route.id!==l[p].route.id:!0,m=(h,p)=>{var v;return l[p].pathname!==h.pathname||((v=l[p].route.path)==null?void 0:v.endsWith("*"))&&l[p].params["*"]!==h.params["*"]};return f==="assets"?i.filter((h,p)=>d(h,p)||m(h,p)):f==="data"?i.filter((h,p)=>{var y;let v=s.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(d(h,p)||m(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((y=l[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Vx(n,i,{includeHydrateFallback:l}={}){return Nx(n.map(s=>{let u=i.routes[s.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function Nx(n){return[...new Set(n)]}function Lx(n){let i={},l=Object.keys(n).sort();for(let s of l)i[s]=n[s];return i}function Ux(n,i){let l=new Set;return new Set(i),n.reduce((s,u)=>{let f=JSON.stringify(Lx(u));return l.has(f)||(l.add(f),s.push({key:f,link:u})),s},[])}function kx(n,i){let l=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l.pathname==="/"?l.pathname="_root.data":i&&_n(l.pathname,i)==="/"?l.pathname=`${i.replace(/\/$/,"")}/_root.data`:l.pathname=`${l.pathname.replace(/\/$/,"")}.data`,l}function q1(){let n=A.useContext(Yi);return If(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Hx(){let n=A.useContext(Eo);return If(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var td=A.createContext(void 0);td.displayName="FrameworkContext";function Y1(){let n=A.useContext(td);return If(n,"You must render this element inside a <HydratedRouter> element"),n}function Px(n,i){let l=A.useContext(td),[s,u]=A.useState(!1),[f,d]=A.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:p,onMouseLeave:v,onTouchStart:y}=i,x=A.useRef(null);A.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let C=R=>{R.forEach(L=>{d(L.isIntersecting)})},O=new IntersectionObserver(C,{threshold:.5});return x.current&&O.observe(x.current),()=>{O.disconnect()}}},[n]),A.useEffect(()=>{if(s){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[s]);let E=()=>{u(!0)},w=()=>{u(!1),d(!1)};return l?n!=="intent"?[f,x,{}]:[f,x,{onFocus:Qr(m,E),onBlur:Qr(h,w),onMouseEnter:Qr(p,E),onMouseLeave:Qr(v,w),onTouchStart:Qr(y,E)}]:[!1,x,{}]}function Qr(n,i){return l=>{n&&n(l),l.defaultPrevented||i(l)}}function qx({page:n,...i}){let{router:l}=q1(),s=A.useMemo(()=>O1(l.routes,n,l.basename),[l.routes,n,l.basename]);return s?A.createElement(Gx,{page:n,matches:s,...i}):null}function Yx(n){let{manifest:i,routeModules:l}=Y1(),[s,u]=A.useState([]);return A.useEffect(()=>{let f=!1;return _x(n,i,l).then(d=>{f||u(d)}),()=>{f=!0}},[n,i,l]),s}function Gx({page:n,matches:i,...l}){let s=fa(),{manifest:u,routeModules:f}=Y1(),{basename:d}=q1(),{loaderData:m,matches:h}=Hx(),p=A.useMemo(()=>Hp(n,i,h,u,s,"data"),[n,i,h,u,s]),v=A.useMemo(()=>Hp(n,i,h,u,s,"assets"),[n,i,h,u,s]),y=A.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let w=new Set,C=!1;if(i.forEach(R=>{var N;let L=u.routes[R.route.id];!L||!L.hasLoader||(!p.some($=>$.route.id===R.route.id)&&R.route.id in m&&((N=f[R.route.id])!=null&&N.shouldRevalidate)||L.hasClientLoader?C=!0:w.add(R.route.id))}),w.size===0)return[];let O=kx(n,d);return C&&w.size>0&&O.searchParams.set("_routes",i.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[O.pathname+O.search]},[d,m,s,u,p,i,n,f]),x=A.useMemo(()=>Vx(v,u),[v,u]),E=Yx(v);return A.createElement(A.Fragment,null,y.map(w=>A.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...l})),x.map(w=>A.createElement("link",{key:w,rel:"modulepreload",href:w,...l})),E.map(({key:w,link:C})=>A.createElement("link",{key:w,...C})))}function $x(...n){return i=>{n.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var G1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{G1&&(window.__reactRouterVersion="7.4.0")}catch{}function Xx({basename:n,children:i,window:l}){let s=A.useRef();s.current==null&&(s.current=Vb({window:l,v5Compat:!0}));let u=s.current,[f,d]=A.useState({action:u.action,location:u.location}),m=A.useCallback(h=>{A.startTransition(()=>d(h))},[d]);return A.useLayoutEffect(()=>u.listen(m),[u,m]),A.createElement(wx,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var $1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gi=A.forwardRef(function({onClick:i,discover:l="render",prefetch:s="none",relative:u,reloadDocument:f,replace:d,state:m,target:h,to:p,preventScrollReset:v,viewTransition:y,...x},E){let{basename:w}=A.useContext(dn),C=typeof p=="string"&&$1.test(p),O,R=!1;if(typeof p=="string"&&C&&(O=p,G1))try{let X=new URL(window.location.href),tt=p.startsWith("//")?new URL(X.protocol+p):new URL(p),Rt=_n(tt.pathname,w);tt.origin===X.origin&&Rt!=null?p=Rt+tt.search+tt.hash:R=!0}catch{fn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=sx(p,{relative:u}),[N,$,U]=Px(s,x),G=Fx(p,{replace:d,state:m,target:h,preventScrollReset:v,relative:u,viewTransition:y});function Q(X){i&&i(X),X.defaultPrevented||G(X)}let F=A.createElement("a",{...x,...U,href:O||L,onClick:R||f?i:Q,ref:$x(E,$),target:h,"data-discover":!C&&l==="render"?"true":void 0});return N&&!C?A.createElement(A.Fragment,null,F,A.createElement(qx,{page:L})):F});Gi.displayName="Link";var Qx=A.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:s="",end:u=!1,style:f,to:d,viewTransition:m,children:h,...p},v){let y=Tl(d,{relative:p.relative}),x=fa(),E=A.useContext(Eo),{navigator:w,basename:C}=A.useContext(dn),O=E!=null&&e4(y)&&m===!0,R=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,L=x.pathname,N=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;l||(L=L.toLowerCase(),N=N?N.toLowerCase():null,R=R.toLowerCase()),N&&C&&(N=_n(N,C)||N);const $=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let U=L===R||!u&&L.startsWith(R)&&L.charAt($)==="/",G=N!=null&&(N===R||!u&&N.startsWith(R)&&N.charAt(R.length)==="/"),Q={isActive:U,isPending:G,isTransitioning:O},F=U?i:void 0,X;typeof s=="function"?X=s(Q):X=[s,U?"active":null,G?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let tt=typeof f=="function"?f(Q):f;return A.createElement(Gi,{...p,"aria-current":F,className:X,ref:v,style:tt,to:d,viewTransition:m},typeof h=="function"?h(Q):h)});Qx.displayName="NavLink";var Zx=A.forwardRef(({discover:n="render",fetcherKey:i,navigate:l,reloadDocument:s,replace:u,state:f,method:d=Is,action:m,onSubmit:h,relative:p,preventScrollReset:v,viewTransition:y,...x},E)=>{let w=Ix(),C=t4(m,{relative:p}),O=d.toLowerCase()==="get"?"get":"post",R=typeof m=="string"&&$1.test(m),L=N=>{if(h&&h(N),N.defaultPrevented)return;N.preventDefault();let $=N.nativeEvent.submitter,U=($==null?void 0:$.getAttribute("formmethod"))||d;w($||N.currentTarget,{fetcherKey:i,method:U,navigate:l,replace:u,state:f,relative:p,preventScrollReset:v,viewTransition:y})};return A.createElement("form",{ref:E,method:O,action:C,onSubmit:s?h:L,...x,"data-discover":!R&&n==="render"?"true":void 0})});Zx.displayName="Form";function Kx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X1(n){let i=A.useContext(Yi);return Nt(i,Kx(n)),i}function Fx(n,{target:i,replace:l,state:s,preventScrollReset:u,relative:f,viewTransition:d}={}){let m=To(),h=fa(),p=Tl(n,{relative:f});return A.useCallback(v=>{if(Rx(v,i)){v.preventDefault();let y=l!==void 0?l:il(h)===il(p);m(n,{replace:y,state:s,preventScrollReset:u,relative:f,viewTransition:d})}},[h,m,p,l,s,i,n,u,f,d])}var Jx=0,Wx=()=>`__${String(++Jx)}__`;function Ix(){let{router:n}=X1("useSubmit"),{basename:i}=A.useContext(dn),l=yx();return A.useCallback(async(s,u={})=>{let{action:f,method:d,encType:m,formData:h,body:p}=Ox(s,i);if(u.navigate===!1){let v=u.fetcherKey||Wx();await n.fetch(v,l,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:l,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,l])}function t4(n,{relative:i}={}){let{basename:l}=A.useContext(dn),s=A.useContext(Nn);Nt(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),f={...Tl(n||".",{relative:i})},d=fa();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),h=m.getAll("index");if(h.some(v=>v==="")){m.delete("index"),h.filter(y=>y).forEach(y=>m.append("index",y));let v=m.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:On([l,f.pathname])),il(f)}function e4(n,i={}){let l=A.useContext(L1);Nt(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=X1("useViewTransitionState"),u=Tl(n,{relative:i.relative});if(!l.isTransitioning)return!1;let f=_n(l.currentLocation.pathname,s)||l.currentLocation.pathname,d=_n(l.nextLocation.pathname,s)||l.nextLocation.pathname;return uo(u.pathname,d)!=null||uo(u.pathname,f)!=null}new TextEncoder;var Ee=function(){return Ee=Object.assign||function(i){for(var l,s=1,u=arguments.length;s<u;s++){l=arguments[s];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(i[f]=l[f])}return i},Ee.apply(this,arguments)};function rl(n,i,l){if(l||arguments.length===2)for(var s=0,u=i.length,f;s<u;s++)(f||!(s in i))&&(f||(f=Array.prototype.slice.call(i,0,s)),f[s]=i[s]);return n.concat(f||Array.prototype.slice.call(i))}var jt="-ms-",Ir="-moz-",wt="-webkit-",Q1="comm",Co="rule",ed="decl",n4="@import",Z1="@keyframes",a4="@layer",K1=Math.abs,nd=String.fromCharCode,wf=Object.assign;function i4(n,i){return ne(n,0)^45?(((i<<2^ne(n,0))<<2^ne(n,1))<<2^ne(n,2))<<2^ne(n,3):0}function F1(n){return n.trim()}function Dn(n,i){return(n=i.exec(n))?n[0]:n}function ft(n,i,l){return n.replace(i,l)}function eo(n,i,l){return n.indexOf(i,l)}function ne(n,i){return n.charCodeAt(i)|0}function _i(n,i,l){return n.slice(i,l)}function on(n){return n.length}function J1(n){return n.length}function Fr(n,i){return i.push(n),n}function r4(n,i){return n.map(i).join("")}function Pp(n,i){return n.filter(function(l){return!Dn(l,i)})}var Mo=1,Vi=1,W1=0,Ze=0,Kt=0,$i="";function Ro(n,i,l,s,u,f,d,m){return{value:n,root:i,parent:l,type:s,props:u,children:f,line:Mo,column:Vi,length:d,return:"",siblings:m}}function sa(n,i){return wf(Ro("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function Ci(n){for(;n.root;)n=sa(n.root,{children:[n]});Fr(n,n.siblings)}function l4(){return Kt}function s4(){return Kt=Ze>0?ne($i,--Ze):0,Vi--,Kt===10&&(Vi=1,Mo--),Kt}function tn(){return Kt=Ze<W1?ne($i,Ze++):0,Vi++,Kt===10&&(Vi=1,Mo++),Kt}function Ha(){return ne($i,Ze)}function no(){return Ze}function zo(n,i){return _i($i,n,i)}function Ef(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o4(n){return Mo=Vi=1,W1=on($i=n),Ze=0,[]}function u4(n){return $i="",n}function tf(n){return F1(zo(Ze-1,Tf(n===91?n+2:n===40?n+1:n)))}function c4(n){for(;(Kt=Ha())&&Kt<33;)tn();return Ef(n)>2||Ef(Kt)>3?"":" "}function f4(n,i){for(;--i&&tn()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return zo(n,no()+(i<6&&Ha()==32&&tn()==32))}function Tf(n){for(;tn();)switch(Kt){case n:return Ze;case 34:case 39:n!==34&&n!==39&&Tf(Kt);break;case 40:n===41&&Tf(n);break;case 92:tn();break}return Ze}function d4(n,i){for(;tn()&&n+Kt!==57;)if(n+Kt===84&&Ha()===47)break;return"/*"+zo(i,Ze-1)+"*"+nd(n===47?n:tn())}function h4(n){for(;!Ef(Ha());)tn();return zo(n,Ze)}function m4(n){return u4(ao("",null,null,null,[""],n=o4(n),0,[0],n))}function ao(n,i,l,s,u,f,d,m,h){for(var p=0,v=0,y=d,x=0,E=0,w=0,C=1,O=1,R=1,L=0,N="",$=u,U=f,G=s,Q=N;O;)switch(w=L,L=tn()){case 40:if(w!=108&&ne(Q,y-1)==58){eo(Q+=ft(tf(L),"&","&\f"),"&\f",K1(p?m[p-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:Q+=tf(L);break;case 9:case 10:case 13:case 32:Q+=c4(w);break;case 92:Q+=f4(no()-1,7);continue;case 47:switch(Ha()){case 42:case 47:Fr(p4(d4(tn(),no()),i,l,h),h);break;default:Q+="/"}break;case 123*C:m[p++]=on(Q)*R;case 125*C:case 59:case 0:switch(L){case 0:case 125:O=0;case 59+v:R==-1&&(Q=ft(Q,/\f/g,"")),E>0&&on(Q)-y&&Fr(E>32?Yp(Q+";",s,l,y-1,h):Yp(ft(Q," ","")+";",s,l,y-2,h),h);break;case 59:Q+=";";default:if(Fr(G=qp(Q,i,l,p,v,u,m,N,$=[],U=[],y,f),f),L===123)if(v===0)ao(Q,i,G,G,$,f,y,m,U);else switch(x===99&&ne(Q,3)===110?100:x){case 100:case 108:case 109:case 115:ao(n,G,G,s&&Fr(qp(n,G,G,0,0,u,m,N,u,$=[],y,U),U),u,U,y,m,s?$:U);break;default:ao(Q,G,G,G,[""],U,0,m,U)}}p=v=E=0,C=R=1,N=Q="",y=d;break;case 58:y=1+on(Q),E=w;default:if(C<1){if(L==123)--C;else if(L==125&&C++==0&&s4()==125)continue}switch(Q+=nd(L),L*C){case 38:R=v>0?1:(Q+="\f",-1);break;case 44:m[p++]=(on(Q)-1)*R,R=1;break;case 64:Ha()===45&&(Q+=tf(tn())),x=Ha(),v=y=on(N=Q+=h4(no())),L++;break;case 45:w===45&&on(Q)==2&&(C=0)}}return f}function qp(n,i,l,s,u,f,d,m,h,p,v,y){for(var x=u-1,E=u===0?f:[""],w=J1(E),C=0,O=0,R=0;C<s;++C)for(var L=0,N=_i(n,x+1,x=K1(O=d[C])),$=n;L<w;++L)($=F1(O>0?E[L]+" "+N:ft(N,/&\f/g,E[L])))&&(h[R++]=$);return Ro(n,i,l,u===0?Co:m,h,p,v,y)}function p4(n,i,l,s){return Ro(n,i,l,Q1,nd(l4()),_i(n,2,-2),0,s)}function Yp(n,i,l,s,u){return Ro(n,i,l,ed,_i(n,0,s),_i(n,s+1,-1),s,u)}function I1(n,i,l){switch(i4(n,i)){case 5103:return wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+n+n;case 4789:return Ir+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+n+Ir+n+jt+n+n;case 5936:switch(ne(n,i+11)){case 114:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return wt+n+jt+n+n;case 6165:return wt+n+jt+"flex-"+n+n;case 5187:return wt+n+ft(n,/(\w+).+(:[^]+)/,wt+"box-$1$2"+jt+"flex-$1$2")+n;case 5443:return wt+n+jt+"flex-item-"+ft(n,/flex-|-self/g,"")+(Dn(n,/flex-|baseline/)?"":jt+"grid-row-"+ft(n,/flex-|-self/g,""))+n;case 4675:return wt+n+jt+"flex-line-pack"+ft(n,/align-content|flex-|-self/g,"")+n;case 5548:return wt+n+jt+ft(n,"shrink","negative")+n;case 5292:return wt+n+jt+ft(n,"basis","preferred-size")+n;case 6060:return wt+"box-"+ft(n,"-grow","")+wt+n+jt+ft(n,"grow","positive")+n;case 4554:return wt+ft(n,/([^-])(transform)/g,"$1"+wt+"$2")+n;case 6187:return ft(ft(ft(n,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),n,"")+n;case 5495:case 3959:return ft(n,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return ft(ft(n,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+n+n;case 4200:if(!Dn(n,/flex-|baseline/))return jt+"grid-column-align"+_i(n,i)+n;break;case 2592:case 3360:return jt+ft(n,"template-","")+n;case 4384:case 3616:return l&&l.some(function(s,u){return i=u,Dn(s.props,/grid-\w+-end/)})?~eo(n+(l=l[i].value),"span",0)?n:jt+ft(n,"-start","")+n+jt+"grid-row-span:"+(~eo(l,"span",0)?Dn(l,/\d+/):+Dn(l,/\d+/)-+Dn(n,/\d+/))+";":jt+ft(n,"-start","")+n;case 4896:case 4128:return l&&l.some(function(s){return Dn(s.props,/grid-\w+-start/)})?n:jt+ft(ft(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ft(n,/(.+)-inline(.+)/,wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(n)-1-i>6)switch(ne(n,i+1)){case 109:if(ne(n,i+4)!==45)break;case 102:return ft(n,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+Ir+(ne(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~eo(n,"stretch",0)?I1(ft(n,"stretch","fill-available"),i,l)+n:n}break;case 5152:case 5920:return ft(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,f,d,m,h,p){return jt+u+":"+f+p+(d?jt+u+"-span:"+(m?h:+h-+f)+p:"")+n});case 4949:if(ne(n,i+6)===121)return ft(n,":",":"+wt)+n;break;case 6444:switch(ne(n,ne(n,14)===45?18:11)){case 120:return ft(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(ne(n,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+jt+"$2box$3")+n;case 100:return ft(n,":",":"+jt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(n,"scroll-","scroll-snap-")+n}return n}function co(n,i){for(var l="",s=0;s<n.length;s++)l+=i(n[s],s,n,i)||"";return l}function g4(n,i,l,s){switch(n.type){case a4:if(n.children.length)break;case n4:case ed:return n.return=n.return||n.value;case Q1:return"";case Z1:return n.return=n.value+"{"+co(n.children,s)+"}";case Co:if(!on(n.value=n.props.join(",")))return""}return on(l=co(n.children,s))?n.return=n.value+"{"+l+"}":""}function v4(n){var i=J1(n);return function(l,s,u,f){for(var d="",m=0;m<i;m++)d+=n[m](l,s,u,f)||"";return d}}function y4(n){return function(i){i.root||(i=i.return)&&n(i)}}function b4(n,i,l,s){if(n.length>-1&&!n.return)switch(n.type){case ed:n.return=I1(n.value,n.length,l);return;case Z1:return co([sa(n,{value:ft(n.value,"@","@"+wt)})],s);case Co:if(n.length)return r4(l=n.props,function(u){switch(Dn(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ci(sa(n,{props:[ft(u,/:(read-\w+)/,":"+Ir+"$1")]})),Ci(sa(n,{props:[u]})),wf(n,{props:Pp(l,s)});break;case"::placeholder":Ci(sa(n,{props:[ft(u,/:(plac\w+)/,":"+wt+"input-$1")]})),Ci(sa(n,{props:[ft(u,/:(plac\w+)/,":"+Ir+"$1")]})),Ci(sa(n,{props:[ft(u,/:(plac\w+)/,jt+"input-$1")]})),Ci(sa(n,{props:[u]})),wf(n,{props:Pp(l,s)});break}return""})}}var x4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe={},Ni=typeof process<"u"&&Oe!==void 0&&(Oe.REACT_APP_SC_ATTR||Oe.SC_ATTR)||"data-styled",tv="active",ev="data-styled-version",Do="6.1.16",ad=`/*!sc*/
`,fo=typeof window<"u"&&"HTMLElement"in window,S4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==""?Oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.SC_DISABLE_SPEEDY!==void 0&&Oe.SC_DISABLE_SPEEDY!==""&&Oe.SC_DISABLE_SPEEDY!=="false"&&Oe.SC_DISABLE_SPEEDY),Oo=Object.freeze([]),Li=Object.freeze({});function w4(n,i,l){return l===void 0&&(l=Li),n.theme!==l.theme&&n.theme||i||l.theme}var nv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),E4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,T4=/(^-|-$)/g;function Gp(n){return n.replace(E4,"-").replace(T4,"")}var A4=/(a)(d)/gi,Xs=52,$p=function(n){return String.fromCharCode(n+(n>25?39:97))};function Af(n){var i,l="";for(i=Math.abs(n);i>Xs;i=i/Xs|0)l=$p(i%Xs)+l;return($p(i%Xs)+l).replace(A4,"$1-$2")}var ef,av=5381,Ri=function(n,i){for(var l=i.length;l;)n=33*n^i.charCodeAt(--l);return n},iv=function(n){return Ri(av,n)};function rv(n){return Af(iv(n)>>>0)}function C4(n){return n.displayName||n.name||"Component"}function nf(n){return typeof n=="string"&&!0}var lv=typeof Symbol=="function"&&Symbol.for,sv=lv?Symbol.for("react.memo"):60115,M4=lv?Symbol.for("react.forward_ref"):60112,R4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},z4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ov={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},D4=((ef={})[M4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ef[sv]=ov,ef);function Xp(n){return("type"in(i=n)&&i.type.$$typeof)===sv?ov:"$$typeof"in n?D4[n.$$typeof]:R4;var i}var O4=Object.defineProperty,j4=Object.getOwnPropertyNames,Qp=Object.getOwnPropertySymbols,B4=Object.getOwnPropertyDescriptor,_4=Object.getPrototypeOf,Zp=Object.prototype;function uv(n,i,l){if(typeof i!="string"){if(Zp){var s=_4(i);s&&s!==Zp&&uv(n,s,l)}var u=j4(i);Qp&&(u=u.concat(Qp(i)));for(var f=Xp(n),d=Xp(i),m=0;m<u.length;++m){var h=u[m];if(!(h in z4||l&&l[h]||d&&h in d||f&&h in f)){var p=B4(i,h);try{O4(n,h,p)}catch{}}}}return n}function Ui(n){return typeof n=="function"}function id(n){return typeof n=="object"&&"styledComponentId"in n}function La(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Cf(n,i){if(n.length===0)return"";for(var l=n[0],s=1;s<n.length;s++)l+=n[s];return l}function ll(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Mf(n,i,l){if(l===void 0&&(l=!1),!l&&!ll(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)n[s]=Mf(n[s],i[s]);else if(ll(i))for(var s in i)n[s]=Mf(n[s],i[s]);return n}function rd(n,i){Object.defineProperty(n,"toString",{value:i})}function Al(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var V4=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var l=0,s=0;s<i;s++)l+=this.groupSizes[s];return l},n.prototype.insertRules=function(i,l){if(i>=this.groupSizes.length){for(var s=this.groupSizes,u=s.length,f=u;i>=f;)if((f<<=1)<0)throw Al(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(i+1),h=(d=0,l.length);d<h;d++)this.tag.insertRule(m,l[d])&&(this.groupSizes[i]++,m++)},n.prototype.clearGroup=function(i){if(i<this.length){var l=this.groupSizes[i],s=this.indexOfGroup(i),u=s+l;this.groupSizes[i]=0;for(var f=s;f<u;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(i){var l="";if(i>=this.length||this.groupSizes[i]===0)return l;for(var s=this.groupSizes[i],u=this.indexOfGroup(i),f=u+s,d=u;d<f;d++)l+="".concat(this.tag.getRule(d)).concat(ad);return l},n}(),io=new Map,ho=new Map,ro=1,Qs=function(n){if(io.has(n))return io.get(n);for(;ho.has(ro);)ro++;var i=ro++;return io.set(n,i),ho.set(i,n),i},N4=function(n,i){ro=i+1,io.set(n,i),ho.set(i,n)},L4="style[".concat(Ni,"][").concat(ev,'="').concat(Do,'"]'),U4=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),k4=function(n,i,l){for(var s,u=l.split(","),f=0,d=u.length;f<d;f++)(s=u[f])&&n.registerName(i,s)},H4=function(n,i){for(var l,s=((l=i.textContent)!==null&&l!==void 0?l:"").split(ad),u=[],f=0,d=s.length;f<d;f++){var m=s[f].trim();if(m){var h=m.match(U4);if(h){var p=0|parseInt(h[1],10),v=h[2];p!==0&&(N4(v,p),k4(n,v,h[3]),n.getTag().insertRules(p,u)),u.length=0}else u.push(m)}}},Kp=function(n){for(var i=document.querySelectorAll(L4),l=0,s=i.length;l<s;l++){var u=i[l];u&&u.getAttribute(Ni)!==tv&&(H4(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function P4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cv=function(n){var i=document.head,l=n||i,s=document.createElement("style"),u=function(m){var h=Array.from(m.querySelectorAll("style[".concat(Ni,"]")));return h[h.length-1]}(l),f=u!==void 0?u.nextSibling:null;s.setAttribute(Ni,tv),s.setAttribute(ev,Do);var d=P4();return d&&s.setAttribute("nonce",d),l.insertBefore(s,f),s},q4=function(){function n(i){this.element=cv(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(l){if(l.sheet)return l.sheet;for(var s=document.styleSheets,u=0,f=s.length;u<f;u++){var d=s[u];if(d.ownerNode===l)return d}throw Al(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,l){try{return this.sheet.insertRule(l,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var l=this.sheet.cssRules[i];return l&&l.cssText?l.cssText:""},n}(),Y4=function(){function n(i){this.element=cv(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,l){if(i<=this.length&&i>=0){var s=document.createTextNode(l);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),G4=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,l){return i<=this.length&&(this.rules.splice(i,0,l),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),Fp=fo,$4={isServer:!fo,useCSSOMInjection:!S4},fv=function(){function n(i,l,s){i===void 0&&(i=Li),l===void 0&&(l={});var u=this;this.options=Ee(Ee({},$4),i),this.gs=l,this.names=new Map(s),this.server=!!i.isServer,!this.server&&fo&&Fp&&(Fp=!1,Kp(this)),rd(this,function(){return function(f){for(var d=f.getTag(),m=d.length,h="",p=function(y){var x=function(R){return ho.get(R)}(y);if(x===void 0)return"continue";var E=f.names.get(x),w=d.getGroup(y);if(E===void 0||!E.size||w.length===0)return"continue";var C="".concat(Ni,".g").concat(y,'[id="').concat(x,'"]'),O="";E!==void 0&&E.forEach(function(R){R.length>0&&(O+="".concat(R,","))}),h+="".concat(w).concat(C,'{content:"').concat(O,'"}').concat(ad)},v=0;v<m;v++)p(v);return h}(u)})}return n.registerId=function(i){return Qs(i)},n.prototype.rehydrate=function(){!this.server&&fo&&Kp(this)},n.prototype.reconstructWithOptions=function(i,l){return l===void 0&&(l=!0),new n(Ee(Ee({},this.options),i),this.gs,l&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(l){var s=l.useCSSOMInjection,u=l.target;return l.isServer?new G4(u):s?new q4(u):new Y4(u)}(this.options),new V4(i)));var i},n.prototype.hasNameForId=function(i,l){return this.names.has(i)&&this.names.get(i).has(l)},n.prototype.registerName=function(i,l){if(Qs(i),this.names.has(i))this.names.get(i).add(l);else{var s=new Set;s.add(l),this.names.set(i,s)}},n.prototype.insertRules=function(i,l,s){this.registerName(i,l),this.getTag().insertRules(Qs(i),s)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(Qs(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),X4=/&/g,Q4=/^\s*\/\/.*$/gm;function dv(n,i){return n.map(function(l){return l.type==="rule"&&(l.value="".concat(i," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(i," ")),l.props=l.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=dv(l.children,i)),l})}function Z4(n){var i,l,s,u=Li,f=u.options,d=f===void 0?Li:f,m=u.plugins,h=m===void 0?Oo:m,p=function(x,E,w){return w.startsWith(l)&&w.endsWith(l)&&w.replaceAll(l,"").length>0?".".concat(i):x},v=h.slice();v.push(function(x){x.type===Co&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(X4,l).replace(s,p))}),d.prefix&&v.push(b4),v.push(g4);var y=function(x,E,w,C){E===void 0&&(E=""),w===void 0&&(w=""),C===void 0&&(C="&"),i=C,l=E,s=new RegExp("\\".concat(l,"\\b"),"g");var O=x.replace(Q4,""),R=m4(w||E?"".concat(w," ").concat(E," { ").concat(O," }"):O);d.namespace&&(R=dv(R,d.namespace));var L=[];return co(R,v4(v.concat(y4(function(N){return L.push(N)})))),L};return y.hash=h.length?h.reduce(function(x,E){return E.name||Al(15),Ri(x,E.name)},av).toString():"",y}var K4=new fv,Rf=Z4(),hv=Qe.createContext({shouldForwardProp:void 0,styleSheet:K4,stylis:Rf});hv.Consumer;Qe.createContext(void 0);function Jp(){return A.useContext(hv)}var mv=function(){function n(i,l){var s=this;this.inject=function(u,f){f===void 0&&(f=Rf);var d=s.name+f.hash;u.hasNameForId(s.id,d)||u.insertRules(s.id,d,f(s.rules,d,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=l,rd(this,function(){throw Al(12,String(s.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Rf),this.name+i.hash},n}(),F4=function(n){return n>="A"&&n<="Z"};function Wp(n){for(var i="",l=0;l<n.length;l++){var s=n[l];if(l===1&&s==="-"&&n[0]==="-")return n;F4(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var pv=function(n){return n==null||n===!1||n===""},gv=function(n){var i,l,s=[];for(var u in n){var f=n[u];n.hasOwnProperty(u)&&!pv(f)&&(Array.isArray(f)&&f.isCss||Ui(f)?s.push("".concat(Wp(u),":"),f,";"):ll(f)?s.push.apply(s,rl(rl(["".concat(u," {")],gv(f),!1),["}"],!1)):s.push("".concat(Wp(u),": ").concat((i=u,(l=f)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||i in x4||i.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return s};function Pa(n,i,l,s){if(pv(n))return[];if(id(n))return[".".concat(n.styledComponentId)];if(Ui(n)){if(!Ui(f=n)||f.prototype&&f.prototype.isReactComponent||!i)return[n];var u=n(i);return Pa(u,i,l,s)}var f;return n instanceof mv?l?(n.inject(l,s),[n.getName(s)]):[n]:ll(n)?gv(n):Array.isArray(n)?Array.prototype.concat.apply(Oo,n.map(function(d){return Pa(d,i,l,s)})):[n.toString()]}function J4(n){for(var i=0;i<n.length;i+=1){var l=n[i];if(Ui(l)&&!id(l))return!1}return!0}var W4=iv(Do),I4=function(){function n(i,l,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&J4(i),this.componentId=l,this.baseHash=Ri(W4,l),this.baseStyle=s,fv.registerId(l)}return n.prototype.generateAndInjectStyles=function(i,l,s){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,l,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=La(u,this.staticRulesId);else{var f=Cf(Pa(this.rules,i,l,s)),d=Af(Ri(this.baseHash,f)>>>0);if(!l.hasNameForId(this.componentId,d)){var m=s(f,".".concat(d),void 0,this.componentId);l.insertRules(this.componentId,d,m)}u=La(u,d),this.staticRulesId=d}else{for(var h=Ri(this.baseHash,s.hash),p="",v=0;v<this.rules.length;v++){var y=this.rules[v];if(typeof y=="string")p+=y;else if(y){var x=Cf(Pa(y,i,l,s));h=Ri(h,x+v),p+=x}}if(p){var E=Af(h>>>0);l.hasNameForId(this.componentId,E)||l.insertRules(this.componentId,E,s(p,".".concat(E),void 0,this.componentId)),u=La(u,E)}}return u},n}(),vv=Qe.createContext(void 0);vv.Consumer;var af={};function t3(n,i,l){var s=id(n),u=n,f=!nf(n),d=i.attrs,m=d===void 0?Oo:d,h=i.componentId,p=h===void 0?function($,U){var G=typeof $!="string"?"sc":Gp($);af[G]=(af[G]||0)+1;var Q="".concat(G,"-").concat(rv(Do+G+af[G]));return U?"".concat(U,"-").concat(Q):Q}(i.displayName,i.parentComponentId):h,v=i.displayName,y=v===void 0?function($){return nf($)?"styled.".concat($):"Styled(".concat(C4($),")")}(n):v,x=i.displayName&&i.componentId?"".concat(Gp(i.displayName),"-").concat(i.componentId):i.componentId||p,E=s&&u.attrs?u.attrs.concat(m).filter(Boolean):m,w=i.shouldForwardProp;if(s&&u.shouldForwardProp){var C=u.shouldForwardProp;if(i.shouldForwardProp){var O=i.shouldForwardProp;w=function($,U){return C($,U)&&O($,U)}}else w=C}var R=new I4(l,x,s?u.componentStyle:void 0);function L($,U){return function(G,Q,F){var X=G.attrs,tt=G.componentStyle,Rt=G.defaultProps,ie=G.foldedComponentIds,vt=G.styledComponentId,Yt=G.target,Gt=Qe.useContext(vv),Z=Jp(),J=G.shouldForwardProp||Z.shouldForwardProp,I=w4(Q,Gt,Rt)||Li,ct=function(dt,st,$t){for(var gt,Et=Ee(Ee({},st),{className:void 0,theme:$t}),Tt=0;Tt<dt.length;Tt+=1){var pe=Ui(gt=dt[Tt])?gt(Et):gt;for(var be in pe)Et[be]=be==="className"?La(Et[be],pe[be]):be==="style"?Ee(Ee({},Et[be]),pe[be]):pe[be]}return st.className&&(Et.className=La(Et.className,st.className)),Et}(X,Q,I),M=ct.as||Yt,Y={};for(var nt in ct)ct[nt]===void 0||nt[0]==="$"||nt==="as"||nt==="theme"&&ct.theme===I||(nt==="forwardedAs"?Y.as=ct.forwardedAs:J&&!J(nt,M)||(Y[nt]=ct[nt]));var it=function(dt,st){var $t=Jp(),gt=dt.generateAndInjectStyles(st,$t.styleSheet,$t.stylis);return gt}(tt,ct),K=La(ie,vt);return it&&(K+=" "+it),ct.className&&(K+=" "+ct.className),Y[nf(M)&&!nv.has(M)?"class":"className"]=K,F&&(Y.ref=F),A.createElement(M,Y)}(N,$,U)}L.displayName=y;var N=Qe.forwardRef(L);return N.attrs=E,N.componentStyle=R,N.displayName=y,N.shouldForwardProp=w,N.foldedComponentIds=s?La(u.foldedComponentIds,u.styledComponentId):"",N.styledComponentId=x,N.target=s?u.target:n,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=s?function(U){for(var G=[],Q=1;Q<arguments.length;Q++)G[Q-1]=arguments[Q];for(var F=0,X=G;F<X.length;F++)Mf(U,X[F],!0);return U}({},u.defaultProps,$):$}}),rd(N,function(){return".".concat(N.styledComponentId)}),f&&uv(N,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function Ip(n,i){for(var l=[n[0]],s=0,u=i.length;s<u;s+=1)l.push(i[s],n[s+1]);return l}var tg=function(n){return Object.assign(n,{isCss:!0})};function Cl(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];if(Ui(n)||ll(n))return tg(Pa(Ip(Oo,rl([n],i,!0))));var s=n;return i.length===0&&s.length===1&&typeof s[0]=="string"?Pa(s):tg(Pa(Ip(s,i)))}function zf(n,i,l){if(l===void 0&&(l=Li),!i)throw Al(1,i);var s=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(i,l,Cl.apply(void 0,rl([u],f,!1)))};return s.attrs=function(u){return zf(n,i,Ee(Ee({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},s.withConfig=function(u){return zf(n,i,Ee(Ee({},l),u))},s}var yv=function(n){return zf(t3,n)},_=yv;nv.forEach(function(n){_[n]=yv(n)});function ue(n){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var s=Cf(Cl.apply(void 0,rl([n],i,!1))),u=rv(s);return new mv(u,s)}var bv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},eg=Qe.createContext&&Qe.createContext(bv),e3=["attr","size","title"];function n3(n,i){if(n==null)return{};var l=a3(n,i),s,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(u=0;u<f.length;u++)s=f[u],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(l[s]=n[s])}return l}function a3(n,i){if(n==null)return{};var l={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(i.indexOf(s)>=0)continue;l[s]=n[s]}return l}function mo(){return mo=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(n[s]=l[s])}return n},mo.apply(this,arguments)}function ng(n,i){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),l.push.apply(l,s)}return l}function po(n){for(var i=1;i<arguments.length;i++){var l=arguments[i]!=null?arguments[i]:{};i%2?ng(Object(l),!0).forEach(function(s){i3(n,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):ng(Object(l)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(l,s))})}return n}function i3(n,i,l){return i=r3(i),i in n?Object.defineProperty(n,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[i]=l,n}function r3(n){var i=l3(n,"string");return typeof i=="symbol"?i:i+""}function l3(n,i){if(typeof n!="object"||!n)return n;var l=n[Symbol.toPrimitive];if(l!==void 0){var s=l.call(n,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function xv(n){return n&&n.map((i,l)=>Qe.createElement(i.tag,po({key:l},i.attr),xv(i.child)))}function ae(n){return i=>Qe.createElement(s3,mo({attr:po({},n.attr)},i),xv(n.child))}function s3(n){var i=l=>{var{attr:s,size:u,title:f}=n,d=n3(n,e3),m=u||l.size||"1em",h;return l.className&&(h=l.className),n.className&&(h=(h?h+" ":"")+n.className),Qe.createElement("svg",mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,s,d,{className:h,style:po(po({color:n.color||l.color},l.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),f&&Qe.createElement("title",null,f),n.children)};return eg!==void 0?Qe.createElement(eg.Consumer,null,l=>i(l)):i(bv)}function ld(n){return ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function o3(n){return ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z"},child:[]}]})(n)}function Sv(n){return ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function u3(n){return ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"},child:[]}]})(n)}function c3(n){return ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function f3(n){return ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function wv(n){return ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(n)}function d3(n){return ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"},child:[]}]})(n)}function h3(n){return ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function m3(n){return ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function p3(n){return ae({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function go(n){return ae({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function g3(n){return ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(n)}function v3(n){return ae({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function y3(n){return ae({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"},child:[]}]})(n)}function b3(n){return ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function x3(n){return ae({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(n)}const S3="/assets/vegetaball-DRzOjpAa.webp",w3=()=>{const[n,i]=A.useState([]),[l,s]=A.useState(!1),[u,f]=A.useState(""),[d,m]=A.useState(""),h=To(),p=()=>{if(u.trim()){const x={id:Date.now().toString(),name:u.trim(),avatar:d||`https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`,score:0};i([...n,x]),f(""),m(""),s(!1)}},v=x=>{i(n.filter(E=>E.id!==x))},y=()=>{if(n.length===0){alert("Aggiungi almeno un allenatore prima di iniziare!");return}localStorage.setItem("quizPlayers",JSON.stringify(n)),h("/game")};return T.jsxs(T3,{children:[T.jsxs(D3,{children:[T.jsx(rf,{children:"VEGETA"}),T.jsx(rf,{children:"QUIZ"}),T.jsx(rf,{children:"SHOW"})]}),T.jsxs(O3,{children:[T.jsxs(ig,{onClick:()=>s(!0),$color:"#EE1515",children:[T.jsx(ag,{children:T.jsx(v3,{})}),T.jsx("span",{children:"Registra Allenatore"})]}),T.jsxs(ig,{onClick:y,disabled:n.length===0,className:n.length===0?"disabled":"ready",$color:"#3B4CCA",children:[T.jsx(ag,{children:T.jsx(wv,{})}),T.jsx("span",{children:"Inizia Avventura"})]})]}),T.jsxs(j3,{children:[T.jsxs(B3,{children:[T.jsx("h2",{children:"Allenatori"}),n.length>0&&T.jsxs(V3,{children:[T.jsx(_3,{small:!0,style:{transform:"rotate(180deg)"}}),n.length]})]}),n.length===0?T.jsxs(N3,{children:[T.jsx(L3,{children:"Nessun allenatore registrato"}),T.jsx(U3,{onClick:()=>s(!0),children:"Registra il tuo primo allenatore!"})]}):T.jsx(k3,{children:n.map(x=>T.jsxs(sd,{children:[T.jsx(P3,{src:x.avatar,alt:x.name}),T.jsx(q3,{children:x.name}),T.jsx(Y3,{onClick:()=>v(x.id),children:T.jsx(go,{})}),T.jsx(H3,{children:T.jsx(d3,{})})]},x.id))})]}),l&&T.jsx(G3,{children:T.jsxs($3,{children:[T.jsxs(X3,{children:[T.jsx("h2",{children:"Registra Allenatore"}),T.jsx(Q3,{onClick:()=>s(!1),children:T.jsx(go,{})})]}),T.jsxs(Z3,{children:[T.jsxs(rg,{children:[T.jsx(lg,{children:"Nome Allenatore"}),T.jsx(sg,{type:"text",value:u,onChange:x=>f(x.target.value),placeholder:"Inserisci il nome dell'allenatore"})]}),T.jsxs(rg,{children:[T.jsx(lg,{children:"URL Avatar (opzionale)"}),T.jsx(sg,{type:"text",value:d,onChange:x=>m(x.target.value),placeholder:"URL immagine avatar"}),T.jsx(K3,{children:"Se lasci vuoto, verrà generato automaticamente"})]}),T.jsxs(F3,{children:[T.jsx(J3,{onClick:()=>s(!1),children:"Annulla"}),T.jsx(W3,{onClick:p,children:"Registra"})]})]})]})}),T.jsxs(A3,{children:[T.jsx(ol,{className:"ball1"}),T.jsx(ol,{className:"ball2"}),T.jsx(M3,{className:"ball3"}),T.jsx(R3,{className:"ball4"}),T.jsx(z3,{className:"ball5"}),T.jsx(C3,{})]}),T.jsx("img",{src:S3,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:.55,zIndex:0,objectFit:"cover"}})]})},sl=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,E3=ue`
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
`;const T3=_.div`
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
`,A3=_.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,C3=_.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
`,ol=_.div`
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
    animation: ${sl} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${sl} 10s ease-in-out infinite reverse;
  }
`,M3=_(ol)`
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
    animation: ${sl} 15s ease-in-out infinite;
  }
`,R3=_(ol)`
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
    animation: ${sl} 18s ease-in-out infinite reverse;
  }
`,z3=_(ol)`
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
    animation: ${sl} 14s ease-in-out infinite;
  }
`,D3=_.h1`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;

  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${E3} 3s infinite ease-in-out;
  z-index: 1;
  font-family: 'Pokemon Solid', 'Arial Black', sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,rf=_.span`
  color: #ffde00;
  margin: 0 0.3rem;
  position: relative;
  -webkit-text-stroke: 3px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;

  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #3b4cca;
  }
`,O3=_.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,ag=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
  font-size: 1.3rem;
`,ig=_.button`
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
`,j3=_.div`
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
`,B3=_.div`
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
`,_3=_.div`
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
`,V3=_.div`
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,N3=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`,L3=_.p`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin-bottom: 1rem;
`,U3=_.button`
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
`,k3=_.div`
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
`,sd=_.div`
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
`,H3=_.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${sd}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`,P3=_.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`,q3=_.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 1;
`,Y3=_.button`
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

  ${sd}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: #ff0044;
    transform: scale(1.2);
  }
`,G3=_.div`
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
`,$3=_.div`
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
`,X3=_.div`
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
`,Q3=_.button`
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
`,Z3=_.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`,rg=_.div`
  margin-bottom: 1.5rem;
`,lg=_.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffde00;
  font-weight: 600;
  font-size: 0.9rem;
`,sg=_.input`
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
`,K3=_.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`,F3=_.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,J3=_.button`
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
`,W3=_.button`
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
`;function I3(n){return ae({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(n)}function tS(){const[n,i]=A.useState([]),l=To();A.useEffect(()=>{const f=localStorage.getItem("quizPlayers");f?i(JSON.parse(f)):l("/")},[l]);const s=(f,d)=>{const m=n.map(h=>h.id===f?{...h,score:d}:h);i(m),localStorage.setItem("quizPlayers",JSON.stringify(m))},u=[{id:"categories",title:"Quiz Pokémon",description:"Sfida le tue conoscenze sui Pokémon in varie categorie",icon:T.jsx(wv,{}),color:"#EE1515",path:"/game/categories"},{id:"wheel",title:"Ruota della Fortuna",description:"Gira la ruota e affronta sfide casuali",icon:T.jsx(u3,{}),color:"#3B4CCA",path:"/game/wheel"},{id:"image",title:"WhO's ThAt PoKéMoN?",description:"Indovina il Pokémon dall'ombra o immagine sfocata",icon:T.jsx(h3,{}),color:"#FF9C54",path:"/game/image"},{id:"fusion",title:"Fusioni Pokémon",description:"Indovina quali Pokémon creano una fusione",icon:T.jsx(o3,{}),color:"#9966FF",path:"/game/fusion"},{id:"pokemon",title:"Poké-Sherlock",description:"Indovina il Pokémon dagli indizi",icon:T.jsx(I3,{}),color:"#78C850",path:"/game/pokemon"}];return T.jsxs(aS,{children:[T.jsxs(oS,{to:"/",children:[T.jsx(ld,{})," Torna alla home"]}),T.jsx(uS,{children:"Centro Sfide Pokémon"}),T.jsx(cS,{children:u.map(f=>T.jsxs(od,{to:f.path,$color:f.color,children:[T.jsx(dS,{$color:f.color,children:f.icon}),T.jsxs(hS,{children:[T.jsx(mS,{children:f.title}),T.jsx(pS,{children:f.description})]}),T.jsx(gS,{children:T.jsx("div",{className:"arrow",children:"→"})}),T.jsx(fS,{})]},f.id))}),T.jsxs(yS,{children:[T.jsxs(bS,{children:[T.jsx(xS,{children:"Allenatori"}),T.jsxs(SS,{children:[n.length," ",n.length===1?"allenatore":"allenatori"]})]}),T.jsx(wS,{children:n.map(f=>T.jsxs(ES,{children:[T.jsx(TS,{src:f.avatar,alt:f.name}),T.jsxs(AS,{children:[T.jsx(CS,{children:f.name}),T.jsxs(Ev,{onClick:()=>{const d=prompt(`Modifica punteggio per ${f.name}:`,String(f.score));if(d!==null){const m=parseInt(d);isNaN(m)||s(f.id,m)}},children:[T.jsx(vS,{})," ",f.score," punti"," ",T.jsx(MS,{children:T.jsx(c3,{})})]})]})]},f.id))})]}),T.jsxs(iS,{children:[T.jsx(cl,{className:"ball1"}),T.jsx(cl,{className:"ball2"}),T.jsx(rS,{className:"ball3"}),T.jsx(lS,{className:"ball4"}),T.jsx(sS,{className:"ball5"})]})]})}const ul=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;const eS=ue`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,nS=ue`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,aS=_.div`
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
`,iS=_.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,cl=_.div`
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
    animation: ${ul} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${ul} 10s ease-in-out infinite reverse;
  }
`,rS=_(cl)`
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
    animation: ${ul} 15s ease-in-out infinite;
  }
`,lS=_(cl)`
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
    animation: ${ul} 18s ease-in-out infinite reverse;
  }
`,sS=_(cl)`
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
    animation: ${ul} 14s ease-in-out infinite;
  }
`,oS=_(Gi)`
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
`,uS=_.h1`
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
`,cS=_.div`
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
`,od=_(Gi)`
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
      animation: ${eS} 1s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,fS=_.div`
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

  ${od}:hover & {
    animation: ${nS} 1s ease-in-out;
  }
`,dS=_.div`
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
`,hS=_.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,mS=_.h3`
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,pS=_.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
`,gS=_.div`
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

  ${od}:hover .arrow {
    transform: translateX(5px);
    opacity: 1;
  }
`,vS=_.div`
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
`,yS=_.div`
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
`,bS=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
`,xS=_.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,SS=_.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,wS=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ES=_.div`
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
`,TS=_.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`,AS=_.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,CS=_.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`,Ev=_.div`
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
`,MS=_.span`
  margin-left: 0.5rem;
  opacity: 0;
  transition: all 0.2s ease;
  color: #ffde00;

  ${Ev}:hover & {
    opacity: 1;
  }
`,ud=A.createContext({});function cd(n){const i=A.useRef(null);return i.current===null&&(i.current=n()),i.current}const fd=typeof window<"u",Tv=fd?A.useLayoutEffect:A.useEffect,jo=A.createContext(null),dd=A.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class RS extends A.Component{getSnapshotBeforeUpdate(i){const l=this.props.childRef.current;if(l&&i.isPresent&&!this.props.isPresent){const s=l.offsetParent,u=s instanceof HTMLElement&&s.offsetWidth||0,f=this.props.sizeRef.current;f.height=l.offsetHeight||0,f.width=l.offsetWidth||0,f.top=l.offsetTop,f.left=l.offsetLeft,f.right=u-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function zS({children:n,isPresent:i,anchorX:l}){const s=A.useId(),u=A.useRef(null),f=A.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=A.useContext(dd);return A.useInsertionEffect(()=>{const{width:m,height:h,top:p,left:v,right:y}=f.current;if(i||!u.current||!m||!h)return;const x=l==="left"?`left: ${v}`:`right: ${y}`;u.current.dataset.motionPopId=s;const E=document.createElement("style");return d&&(E.nonce=d),document.head.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.removeChild(E)}},[i]),T.jsx(RS,{isPresent:i,childRef:u,sizeRef:f,children:A.cloneElement(n,{ref:u})})}const DS=({children:n,initial:i,isPresent:l,onExitComplete:s,custom:u,presenceAffectsLayout:f,mode:d,anchorX:m})=>{const h=cd(OS),p=A.useId(),v=A.useCallback(x=>{h.set(x,!0);for(const E of h.values())if(!E)return;s&&s()},[h,s]),y=A.useMemo(()=>({id:p,initial:i,isPresent:l,custom:u,onExitComplete:v,register:x=>(h.set(x,!1),()=>h.delete(x))}),f?[Math.random(),v]:[l,v]);return A.useMemo(()=>{h.forEach((x,E)=>h.set(E,!1))},[l]),A.useEffect(()=>{!l&&!h.size&&s&&s()},[l]),d==="popLayout"&&(n=T.jsx(zS,{isPresent:l,anchorX:m,children:n})),T.jsx(jo.Provider,{value:y,children:n})};function OS(){return new Map}function Av(n=!0){const i=A.useContext(jo);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:s,register:u}=i,f=A.useId();A.useEffect(()=>{if(n)return u(f)},[n]);const d=A.useCallback(()=>n&&s&&s(f),[f,s,n]);return!l&&s?[!1,d]:[!0]}const Zs=n=>n.key||"";function og(n){const i=[];return A.Children.forEach(n,l=>{A.isValidElement(l)&&i.push(l)}),i}const jS=({children:n,custom:i,initial:l=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:m="left"})=>{const[h,p]=Av(d),v=A.useMemo(()=>og(n),[n]),y=d&&!h?[]:v.map(Zs),x=A.useRef(!0),E=A.useRef(v),w=cd(()=>new Map),[C,O]=A.useState(v),[R,L]=A.useState(v);Tv(()=>{x.current=!1,E.current=v;for(let U=0;U<R.length;U++){const G=Zs(R[U]);y.includes(G)?w.delete(G):w.get(G)!==!0&&w.set(G,!1)}},[R,y.length,y.join("-")]);const N=[];if(v!==C){let U=[...v];for(let G=0;G<R.length;G++){const Q=R[G],F=Zs(Q);y.includes(F)||(U.splice(G,0,Q),N.push(Q))}return f==="wait"&&N.length&&(U=N),L(og(U)),O(v),null}const{forceRender:$}=A.useContext(ud);return T.jsx(T.Fragment,{children:R.map(U=>{const G=Zs(U),Q=d&&!h?!1:v===R||y.includes(G),F=()=>{if(w.has(G))w.set(G,!0);else return;let X=!0;w.forEach(tt=>{tt||(X=!1)}),X&&($==null||$(),L(E.current),d&&(p==null||p()),s&&s())};return T.jsx(DS,{isPresent:Q,initial:!x.current||l?void 0:!1,custom:i,presenceAffectsLayout:u,mode:f,onExitComplete:Q?void 0:F,anchorX:m,children:U},G)})})};function hd(n,i){n.indexOf(i)===-1&&n.push(i)}function md(n,i){const l=n.indexOf(i);l>-1&&n.splice(l,1)}const je=n=>n;let Cv=je;const BS={useManualTiming:!1};function pd(n){let i;return()=>(i===void 0&&(i=n()),i)}const ki=(n,i,l)=>{const s=i-n;return s===0?1:(l-n)/s};class gd{constructor(){this.subscriptions=[]}add(i){return hd(this.subscriptions,i),()=>md(this.subscriptions,i)}notify(i,l,s){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,l,s);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,l,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jn=n=>n*1e3,Bn=n=>n/1e3;function Mv(n,i){return i?n*(1e3/i):0}const _S=pd(()=>window.ScrollTimeline!==void 0);class VS{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,l){for(let s=0;s<this.animations.length;s++)this.animations[s][i]=l}attachTimeline(i,l){const s=this.animations.map(u=>{if(_S()&&u.attachTimeline)return u.attachTimeline(i);if(typeof l=="function")return l(u)});return()=>{s.forEach((u,f)=>{u&&u(),this.animations[f].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let l=0;l<this.animations.length;l++)i=Math.max(i,this.animations[l].duration);return i}runAll(i){this.animations.forEach(l=>l[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class NS extends VS{then(i,l){return Promise.all(this.animations).then(i).catch(l)}}function vd(n,i){return n?n[i]||n.default||n:void 0}const Df=2e4;function Rv(n){let i=0;const l=50;let s=n.next(i);for(;!s.done&&i<Df;)i+=l,s=n.next(i);return i>=Df?1/0:i}function yd(n){return typeof n=="function"}function ug(n,i){n.timeline=i,n.onfinish=null}const bd=n=>Array.isArray(n)&&typeof n[0]=="number",LS={linearEasing:void 0};function US(n,i){const l=pd(n);return()=>{var s;return(s=LS[i])!==null&&s!==void 0?s:l()}}const vo=US(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zv=(n,i,l=10)=>{let s="";const u=Math.max(Math.round(i/l),2);for(let f=0;f<u;f++)s+=n(ki(0,u-1,f))+", ";return`linear(${s.substring(0,s.length-2)})`};function Dv(n){return!!(typeof n=="function"&&vo()||!n||typeof n=="string"&&(n in Of||vo())||bd(n)||Array.isArray(n)&&n.every(Dv))}const Jr=([n,i,l,s])=>`cubic-bezier(${n}, ${i}, ${l}, ${s})`,Of={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jr([0,.65,.55,1]),circOut:Jr([.55,0,1,.45]),backIn:Jr([.31,.01,.66,-.59]),backOut:Jr([.33,1.53,.69,.99])};function Ov(n,i){if(n)return typeof n=="function"&&vo()?zv(n,i):bd(n)?Jr(n):Array.isArray(n)?n.map(l=>Ov(l,i)||Of.easeOut):Of[n]}const Ks=["read","resolveKeyframes","update","preRender","render","postRender"],cg={value:null};function kS(n,i){let l=new Set,s=new Set,u=!1,f=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1},h=0;function p(y){d.has(y)&&(v.schedule(y),n()),h++,y(m)}const v={schedule:(y,x=!1,E=!1)=>{const C=E&&u?l:s;return x&&d.add(y),C.has(y)||C.add(y),y},cancel:y=>{s.delete(y),d.delete(y)},process:y=>{if(m=y,u){f=!0;return}u=!0,[l,s]=[s,l],l.forEach(p),i&&cg.value&&cg.value.frameloop[i].push(h),h=0,l.clear(),u=!1,f&&(f=!1,v.process(y))}};return v}const HS=40;function jv(n,i){let l=!1,s=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>l=!0,d=Ks.reduce((R,L)=>(R[L]=kS(f,i?L:void 0),R),{}),{read:m,resolveKeyframes:h,update:p,preRender:v,render:y,postRender:x}=d,E=()=>{const R=performance.now();l=!1,u.delta=s?1e3/60:Math.max(Math.min(R-u.timestamp,HS),1),u.timestamp=R,u.isProcessing=!0,m.process(u),h.process(u),p.process(u),v.process(u),y.process(u),x.process(u),u.isProcessing=!1,l&&i&&(s=!1,n(E))},w=()=>{l=!0,s=!0,u.isProcessing||n(E)};return{schedule:Ks.reduce((R,L)=>{const N=d[L];return R[L]=($,U=!1,G=!1)=>(l||w(),N.schedule($,U,G)),R},{}),cancel:R=>{for(let L=0;L<Ks.length;L++)d[Ks[L]].cancel(R)},state:u,steps:d}}const{schedule:Ot,cancel:ua,state:oe,steps:lf}=jv(typeof requestAnimationFrame<"u"?requestAnimationFrame:je,!0),{schedule:xd}=jv(queueMicrotask,!1);let lo;function PS(){lo=void 0}const un={now:()=>(lo===void 0&&un.set(oe.isProcessing||BS.useManualTiming?oe.timestamp:performance.now()),lo),set:n=>{lo=n,queueMicrotask(PS)}},Ie={x:!1,y:!1};function Bv(){return Ie.x||Ie.y}function qS(n){return n==="x"||n==="y"?Ie[n]?null:(Ie[n]=!0,()=>{Ie[n]=!1}):Ie.x||Ie.y?null:(Ie.x=Ie.y=!0,()=>{Ie.x=Ie.y=!1})}function YS(n,i,l){var s;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let u=document;const f=(s=void 0)!==null&&s!==void 0?s:u.querySelectorAll(n);return f?Array.from(f):[]}return Array.from(n)}function _v(n,i){const l=YS(n),s=new AbortController,u={passive:!0,...i,signal:s.signal};return[l,u,()=>s.abort()]}function fg(n){return!(n.pointerType==="touch"||Bv())}function GS(n,i,l={}){const[s,u,f]=_v(n,l),d=m=>{if(!fg(m))return;const{target:h}=m,p=i(h,m);if(typeof p!="function"||!h)return;const v=y=>{fg(y)&&(p(y),h.removeEventListener("pointerleave",v))};h.addEventListener("pointerleave",v,u)};return s.forEach(m=>{m.addEventListener("pointerenter",d,u)}),f}function dg(n,i){const l=`${i}PointerCapture`;if(n.target instanceof Element&&l in n.target&&n.pointerId!==void 0)try{n.target[l](n.pointerId)}catch{}}const Vv=(n,i)=>i?n===i?!0:Vv(n,i.parentElement):!1,Sd=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,$S=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function XS(n){return $S.has(n.tagName)||n.tabIndex!==-1}const Wr=new WeakSet;function hg(n){return i=>{i.key==="Enter"&&n(i)}}function sf(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const QS=(n,i)=>{const l=n.currentTarget;if(!l)return;const s=hg(()=>{if(Wr.has(l))return;sf(l,"down");const u=hg(()=>{sf(l,"up")}),f=()=>sf(l,"cancel");l.addEventListener("keyup",u,i),l.addEventListener("blur",f,i)});l.addEventListener("keydown",s,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",s),i)};function mg(n){return Sd(n)&&!Bv()}function ZS(n,i,l={}){const[s,u,f]=_v(n,l),d=m=>{const h=m.currentTarget;if(!h||!mg(m)||Wr.has(h))return;Wr.add(h),dg(m,"set");const p=i(h,m),v=(E,w)=>{h.removeEventListener("pointerup",y),h.removeEventListener("pointercancel",x),dg(E,"release"),!(!mg(E)||!Wr.has(h))&&(Wr.delete(h),typeof p=="function"&&p(E,{success:w}))},y=E=>{(E.isTrusted?KS(E,h instanceof Element?h.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?v(E,!1):v(E,!(h instanceof Element)||Vv(h,E.target))},x=E=>{v(E,!1)};h.addEventListener("pointerup",y,u),h.addEventListener("pointercancel",x,u),h.addEventListener("lostpointercapture",x,u)};return s.forEach(m=>{m=l.useGlobalTarget?window:m;let h=!1;m instanceof HTMLElement&&(h=!0,!XS(m)&&m.getAttribute("tabindex")===null&&(m.tabIndex=0)),m.addEventListener("pointerdown",d,u),h&&m.addEventListener("focus",p=>QS(p,u),u)}),f}function KS(n,i){return n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom}const pg=30,FS=n=>!isNaN(parseFloat(n));class JS{constructor(i,l={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,u=!0)=>{const f=un.now();this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=un.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=FS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new gd);const s=this.events[i].add(l);return i==="change"?()=>{s(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,s){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=un.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>pg)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,pg);return Mv(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fl(n,i){return new JS(n,i)}const Nv=A.createContext({strict:!1}),gg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Hi={};for(const n in gg)Hi[n]={isEnabled:i=>gg[n].some(l=>!!i[l])};function WS(n){for(const i in n)Hi[i]={...Hi[i],...n[i]}}const IS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function yo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||IS.has(n)}let Lv=n=>!yo(n);function tw(n){n&&(Lv=i=>i.startsWith("on")?!yo(i):n(i))}try{tw(require("@emotion/is-prop-valid").default)}catch{}function ew(n,i,l){const s={};for(const u in n)u==="values"&&typeof n.values=="object"||(Lv(u)||l===!0&&yo(u)||!i&&!yo(u)||n.draggable&&u.startsWith("onDrag"))&&(s[u]=n[u]);return s}function nw(n){if(typeof Proxy>"u")return n;const i=new Map,l=(...s)=>n(...s);return new Proxy(l,{get:(s,u)=>u==="create"?n:(i.has(u)||i.set(u,n(u)),i.get(u))})}const Bo=A.createContext({});function _o(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function dl(n){return typeof n=="string"||Array.isArray(n)}const wd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ed=["initial",...wd];function Vo(n){return _o(n.animate)||Ed.some(i=>dl(n[i]))}function Uv(n){return!!(Vo(n)||n.variants)}function aw(n,i){if(Vo(n)){const{initial:l,animate:s}=n;return{initial:l===!1||dl(l)?l:void 0,animate:dl(s)?s:void 0}}return n.inherit!==!1?i:{}}function iw(n){const{initial:i,animate:l}=aw(n,A.useContext(Bo));return A.useMemo(()=>({initial:i,animate:l}),[vg(i),vg(l)])}function vg(n){return Array.isArray(n)?n.join(" "):n}const rw=Symbol.for("motionComponentSymbol");function zi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function lw(n,i,l){return A.useCallback(s=>{s&&n.onMount&&n.onMount(s),i&&(s?i.mount(s):i.unmount()),l&&(typeof l=="function"?l(s):zi(l)&&(l.current=s))},[i])}const Td=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),sw="framerAppearId",kv="data-"+Td(sw),Hv=A.createContext({});function ow(n,i,l,s,u){var f,d;const{visualElement:m}=A.useContext(Bo),h=A.useContext(Nv),p=A.useContext(jo),v=A.useContext(dd).reducedMotion,y=A.useRef(null);s=s||h.renderer,!y.current&&s&&(y.current=s(n,{visualState:i,parent:m,props:l,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:v}));const x=y.current,E=A.useContext(Hv);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&uw(y.current,l,u,E);const w=A.useRef(!1);A.useInsertionEffect(()=>{x&&w.current&&x.update(l,p)});const C=l[kv],O=A.useRef(!!C&&!(!((f=window.MotionHandoffIsComplete)===null||f===void 0)&&f.call(window,C))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,C)));return Tv(()=>{x&&(w.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),xd.render(x.render),O.current&&x.animationState&&x.animationState.animateChanges())}),A.useEffect(()=>{x&&(!O.current&&x.animationState&&x.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)===null||R===void 0||R.call(window,C)}),O.current=!1))}),x}function uw(n,i,l,s){const{layoutId:u,layout:f,drag:d,dragConstraints:m,layoutScroll:h,layoutRoot:p}=i;n.projection=new l(n.latestValues,i["data-framer-portal-id"]?void 0:Pv(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||m&&zi(m),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:p})}function Pv(n){if(n)return n.options.allowProjection!==!1?n.projection:Pv(n.parent)}function cw({preloadedFeatures:n,createVisualElement:i,useRender:l,useVisualState:s,Component:u}){var f,d;n&&WS(n);function m(p,v){let y;const x={...A.useContext(dd),...p,layoutId:fw(p)},{isStatic:E}=x,w=iw(p),C=s(p,E);if(!E&&fd){dw();const O=hw(x);y=O.MeasureLayout,w.visualElement=ow(u,C,x,i,O.ProjectionNode)}return T.jsxs(Bo.Provider,{value:w,children:[y&&w.visualElement?T.jsx(y,{visualElement:w.visualElement,...x}):null,l(u,p,lw(C,w.visualElement,v),C,E,w.visualElement)]})}m.displayName=`motion.${typeof u=="string"?u:`create(${(d=(f=u.displayName)!==null&&f!==void 0?f:u.name)!==null&&d!==void 0?d:""})`}`;const h=A.forwardRef(m);return h[rw]=u,h}function fw({layoutId:n}){const i=A.useContext(ud).id;return i&&n!==void 0?i+"-"+n:n}function dw(n,i){A.useContext(Nv).strict}function hw(n){const{drag:i,layout:l}=Hi;if(!i&&!l)return{};const s={...i,...l};return{MeasureLayout:i!=null&&i.isEnabled(n)||l!=null&&l.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const qv=n=>i=>typeof i=="string"&&i.startsWith(n),Ad=qv("--"),mw=qv("var(--"),Cd=n=>mw(n)?pw.test(n.split("/*")[0].trim()):!1,pw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,hl={};function gw(n){for(const i in n)hl[i]=n[i],Ad(i)&&(hl[i].isCSSVariable=!0)}const Xi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ya=new Set(Xi);function Yv(n,{layout:i,layoutId:l}){return Ya.has(n)||n.startsWith("origin")||(i||l!==void 0)&&(!!hl[n]||n==="opacity")}const me=n=>!!(n&&n.getVelocity),Gv=(n,i)=>i&&typeof n=="number"?i.transform(n):n,Vn=(n,i,l)=>l>i?i:l<n?n:l,Qi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ml={...Qi,transform:n=>Vn(0,1,n)},Fs={...Qi,default:1},Ml=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),oa=Ml("deg"),cn=Ml("%"),lt=Ml("px"),vw=Ml("vh"),yw=Ml("vw"),yg={...cn,parse:n=>cn.parse(n)/100,transform:n=>cn.transform(n*100)},bw={borderWidth:lt,borderTopWidth:lt,borderRightWidth:lt,borderBottomWidth:lt,borderLeftWidth:lt,borderRadius:lt,radius:lt,borderTopLeftRadius:lt,borderTopRightRadius:lt,borderBottomRightRadius:lt,borderBottomLeftRadius:lt,width:lt,maxWidth:lt,height:lt,maxHeight:lt,top:lt,right:lt,bottom:lt,left:lt,padding:lt,paddingTop:lt,paddingRight:lt,paddingBottom:lt,paddingLeft:lt,margin:lt,marginTop:lt,marginRight:lt,marginBottom:lt,marginLeft:lt,backgroundPositionX:lt,backgroundPositionY:lt},xw={rotate:oa,rotateX:oa,rotateY:oa,rotateZ:oa,scale:Fs,scaleX:Fs,scaleY:Fs,scaleZ:Fs,skew:oa,skewX:oa,skewY:oa,distance:lt,translateX:lt,translateY:lt,translateZ:lt,x:lt,y:lt,z:lt,perspective:lt,transformPerspective:lt,opacity:ml,originX:yg,originY:yg,originZ:lt},bg={...Qi,transform:Math.round},Md={...bw,...xw,zIndex:bg,size:lt,fillOpacity:ml,strokeOpacity:ml,numOctaves:bg},Sw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ww=Xi.length;function Ew(n,i,l){let s="",u=!0;for(let f=0;f<ww;f++){const d=Xi[f],m=n[d];if(m===void 0)continue;let h=!0;if(typeof m=="number"?h=m===(d.startsWith("scale")?1:0):h=parseFloat(m)===0,!h||l){const p=Gv(m,Md[d]);if(!h){u=!1;const v=Sw[d]||d;s+=`${v}(${p}) `}l&&(i[d]=p)}}return s=s.trim(),l?s=l(i,u?"":s):u&&(s="none"),s}function Rd(n,i,l){const{style:s,vars:u,transformOrigin:f}=n;let d=!1,m=!1;for(const h in i){const p=i[h];if(Ya.has(h)){d=!0;continue}else if(Ad(h)){u[h]=p;continue}else{const v=Gv(p,Md[h]);h.startsWith("origin")?(m=!0,f[h]=v):s[h]=v}}if(i.transform||(d||l?s.transform=Ew(i,n.transform,l):s.transform&&(s.transform="none")),m){const{originX:h="50%",originY:p="50%",originZ:v=0}=f;s.transformOrigin=`${h} ${p} ${v}`}}const zd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $v(n,i,l){for(const s in i)!me(i[s])&&!Yv(s,l)&&(n[s]=i[s])}function Tw({transformTemplate:n},i){return A.useMemo(()=>{const l=zd();return Rd(l,i,n),Object.assign({},l.vars,l.style)},[i])}function Aw(n,i){const l=n.style||{},s={};return $v(s,l,n),Object.assign(s,Tw(n,i)),s}function Cw(n,i){const l={},s=Aw(n,i);return n.drag&&n.dragListener!==!1&&(l.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(l.tabIndex=0),l.style=s,l}const Mw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dd(n){return typeof n!="string"||n.includes("-")?!1:!!(Mw.indexOf(n)>-1||/[A-Z]/u.test(n))}const Rw={offset:"stroke-dashoffset",array:"stroke-dasharray"},zw={offset:"strokeDashoffset",array:"strokeDasharray"};function Dw(n,i,l=1,s=0,u=!0){n.pathLength=1;const f=u?Rw:zw;n[f.offset]=lt.transform(-s);const d=lt.transform(i),m=lt.transform(l);n[f.array]=`${d} ${m}`}function xg(n,i,l){return typeof n=="string"?n:lt.transform(i+l*n)}function Ow(n,i,l){const s=xg(i,n.x,n.width),u=xg(l,n.y,n.height);return`${s} ${u}`}function Od(n,{attrX:i,attrY:l,attrScale:s,originX:u,originY:f,pathLength:d,pathSpacing:m=1,pathOffset:h=0,...p},v,y){if(Rd(n,p,y),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:E,dimensions:w}=n;x.transform&&(w&&(E.transform=x.transform),delete x.transform),w&&(u!==void 0||f!==void 0||E.transform)&&(E.transformOrigin=Ow(w,u!==void 0?u:.5,f!==void 0?f:.5)),i!==void 0&&(x.x=i),l!==void 0&&(x.y=l),s!==void 0&&(x.scale=s),d!==void 0&&Dw(x,d,m,h,!1)}const Xv=()=>({...zd(),attrs:{}}),jd=n=>typeof n=="string"&&n.toLowerCase()==="svg";function jw(n,i,l,s){const u=A.useMemo(()=>{const f=Xv();return Od(f,i,jd(s),n.transformTemplate),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};$v(f,n.style,n),u.style={...f,...u.style}}return u}function Bw(n=!1){return(l,s,u,{latestValues:f},d)=>{const h=(Dd(l)?jw:Cw)(s,f,d,l),p=ew(s,typeof l=="string",n),v=l!==A.Fragment?{...p,...h,ref:u}:{},{children:y}=s,x=A.useMemo(()=>me(y)?y.get():y,[y]);return A.createElement(l,{...v,children:x})}}function Sg(n){const i=[{},{}];return n==null||n.values.forEach((l,s)=>{i[0][s]=l.get(),i[1][s]=l.getVelocity()}),i}function Bd(n,i,l,s){if(typeof i=="function"){const[u,f]=Sg(s);i=i(l!==void 0?l:n.custom,u,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,f]=Sg(s);i=i(l!==void 0?l:n.custom,u,f)}return i}const jf=n=>Array.isArray(n),_w=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Vw=n=>jf(n)?n[n.length-1]||0:n;function so(n){const i=me(n)?n.get():n;return _w(i)?i.toValue():i}function Nw({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:l},s,u,f){const d={latestValues:Lw(s,u,f,n),renderState:i()};return l&&(d.onMount=m=>l({props:s,current:m,...d}),d.onUpdate=m=>l(m)),d}const Qv=n=>(i,l)=>{const s=A.useContext(Bo),u=A.useContext(jo),f=()=>Nw(n,i,s,u);return l?f():cd(f)};function Lw(n,i,l,s){const u={},f=s(n,{});for(const x in f)u[x]=so(f[x]);let{initial:d,animate:m}=n;const h=Vo(n),p=Uv(n);i&&p&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),m===void 0&&(m=i.animate));let v=l?l.initial===!1:!1;v=v||d===!1;const y=v?m:d;if(y&&typeof y!="boolean"&&!_o(y)){const x=Array.isArray(y)?y:[y];for(let E=0;E<x.length;E++){const w=Bd(n,x[E]);if(w){const{transitionEnd:C,transition:O,...R}=w;for(const L in R){let N=R[L];if(Array.isArray(N)){const $=v?N.length-1:0;N=N[$]}N!==null&&(u[L]=N)}for(const L in C)u[L]=C[L]}}}return u}function _d(n,i,l){var s;const{style:u}=n,f={};for(const d in u)(me(u[d])||i.style&&me(i.style[d])||Yv(d,n)||((s=l==null?void 0:l.getValue(d))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(f[d]=u[d]);return f}const Uw={useVisualState:Qv({scrapeMotionValuesFromProps:_d,createRenderState:zd})};function Zv(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}function Kv(n,{style:i,vars:l},s,u){Object.assign(n.style,i,u&&u.getProjectionStyles(s));for(const f in l)n.style.setProperty(f,l[f])}const Fv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Jv(n,i,l,s){Kv(n,i,void 0,s);for(const u in i.attrs)n.setAttribute(Fv.has(u)?u:Td(u),i.attrs[u])}function Wv(n,i,l){const s=_d(n,i,l);for(const u in n)if(me(n[u])||me(i[u])){const f=Xi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;s[f]=n[u]}return s}const wg=["x","y","width","height","cx","cy","r"],kw={useVisualState:Qv({scrapeMotionValuesFromProps:Wv,createRenderState:Xv,onUpdate:({props:n,prevProps:i,current:l,renderState:s,latestValues:u})=>{if(!l)return;let f=!!n.drag;if(!f){for(const m in u)if(Ya.has(m)){f=!0;break}}if(!f)return;let d=!i;if(i)for(let m=0;m<wg.length;m++){const h=wg[m];n[h]!==i[h]&&(d=!0)}d&&Ot.read(()=>{Zv(l,s),Ot.render(()=>{Od(s,u,jd(l.tagName),n.transformTemplate),Jv(l,s)})})}})};function Hw(n,i){return function(s,{forwardMotionProps:u}={forwardMotionProps:!1}){const d={...Dd(s)?kw:Uw,preloadedFeatures:n,useRender:Bw(u),createVisualElement:i,Component:s};return cw(d)}}function pl(n,i,l){const s=n.getProps();return Bd(s,i,l!==void 0?l:s.custom,n)}const Iv=new Set(["width","height","top","left","right","bottom",...Xi]);function Pw(n,i,l){n.hasValue(i)?n.getValue(i).set(l):n.addValue(i,fl(l))}function qw(n,i){const l=pl(n,i);let{transitionEnd:s={},transition:u={},...f}=l||{};f={...f,...s};for(const d in f){const m=Vw(f[d]);Pw(n,d,m)}}function Yw(n){return!!(me(n)&&n.add)}function Bf(n,i){const l=n.getValue("willChange");if(Yw(l))return l.add(i)}function ty(n){return n.props[kv]}const ey=(n,i,l)=>(((1-3*l+3*i)*n+(3*l-6*i))*n+3*i)*n,Gw=1e-7,$w=12;function Xw(n,i,l,s,u){let f,d,m=0;do d=i+(l-i)/2,f=ey(d,s,u)-n,f>0?l=d:i=d;while(Math.abs(f)>Gw&&++m<$w);return d}function Rl(n,i,l,s){if(n===i&&l===s)return je;const u=f=>Xw(f,0,1,n,l);return f=>f===0||f===1?f:ey(u(f),i,s)}const ny=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,ay=n=>i=>1-n(1-i),iy=Rl(.33,1.53,.69,.99),Vd=ay(iy),ry=ny(Vd),ly=n=>(n*=2)<1?.5*Vd(n):.5*(2-Math.pow(2,-10*(n-1))),Nd=n=>1-Math.sin(Math.acos(n)),sy=ay(Nd),oy=ny(Nd),uy=n=>/^0[^.\s]+$/u.test(n);function Qw(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||uy(n):!0}const tl=n=>Math.round(n*1e5)/1e5,Ld=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Zw(n){return n==null}const Kw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ud=(n,i)=>l=>!!(typeof l=="string"&&Kw.test(l)&&l.startsWith(n)||i&&!Zw(l)&&Object.prototype.hasOwnProperty.call(l,i)),cy=(n,i,l)=>s=>{if(typeof s!="string")return s;const[u,f,d,m]=s.match(Ld);return{[n]:parseFloat(u),[i]:parseFloat(f),[l]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},Fw=n=>Vn(0,255,n),of={...Qi,transform:n=>Math.round(Fw(n))},Ua={test:Ud("rgb","red"),parse:cy("red","green","blue"),transform:({red:n,green:i,blue:l,alpha:s=1})=>"rgba("+of.transform(n)+", "+of.transform(i)+", "+of.transform(l)+", "+tl(ml.transform(s))+")"};function Jw(n){let i="",l="",s="",u="";return n.length>5?(i=n.substring(1,3),l=n.substring(3,5),s=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),l=n.substring(2,3),s=n.substring(3,4),u=n.substring(4,5),i+=i,l+=l,s+=s,u+=u),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(s,16),alpha:u?parseInt(u,16)/255:1}}const _f={test:Ud("#"),parse:Jw,transform:Ua.transform},Di={test:Ud("hsl","hue"),parse:cy("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:l,alpha:s=1})=>"hsla("+Math.round(n)+", "+cn.transform(tl(i))+", "+cn.transform(tl(l))+", "+tl(ml.transform(s))+")"},he={test:n=>Ua.test(n)||_f.test(n)||Di.test(n),parse:n=>Ua.test(n)?Ua.parse(n):Di.test(n)?Di.parse(n):_f.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ua.transform(n):Di.transform(n)},Ww=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Iw(n){var i,l;return isNaN(n)&&typeof n=="string"&&(((i=n.match(Ld))===null||i===void 0?void 0:i.length)||0)+(((l=n.match(Ww))===null||l===void 0?void 0:l.length)||0)>0}const fy="number",dy="color",t6="var",e6="var(",Eg="${}",n6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function gl(n){const i=n.toString(),l=[],s={color:[],number:[],var:[]},u=[];let f=0;const m=i.replace(n6,h=>(he.test(h)?(s.color.push(f),u.push(dy),l.push(he.parse(h))):h.startsWith(e6)?(s.var.push(f),u.push(t6),l.push(h)):(s.number.push(f),u.push(fy),l.push(parseFloat(h))),++f,Eg)).split(Eg);return{values:l,split:m,indexes:s,types:u}}function hy(n){return gl(n).values}function my(n){const{split:i,types:l}=gl(n),s=i.length;return u=>{let f="";for(let d=0;d<s;d++)if(f+=i[d],u[d]!==void 0){const m=l[d];m===fy?f+=tl(u[d]):m===dy?f+=he.transform(u[d]):f+=u[d]}return f}}const a6=n=>typeof n=="number"?0:n;function i6(n){const i=hy(n);return my(n)(i.map(a6))}const ca={test:Iw,parse:hy,createTransformer:my,getAnimatableNone:i6},r6=new Set(["brightness","contrast","saturate","opacity"]);function l6(n){const[i,l]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[s]=l.match(Ld)||[];if(!s)return n;const u=l.replace(s,"");let f=r6.has(i)?1:0;return s!==l&&(f*=100),i+"("+f+u+")"}const s6=/\b([a-z-]*)\(.*?\)/gu,Vf={...ca,getAnimatableNone:n=>{const i=n.match(s6);return i?i.map(l6).join(" "):n}},o6={...Md,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:Vf,WebkitFilter:Vf},py=n=>o6[n];function gy(n,i){let l=py(n);return l!==Vf&&(l=ca),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const u6=new Set(["auto","none","0"]);function c6(n,i,l){let s=0,u;for(;s<n.length&&!u;){const f=n[s];typeof f=="string"&&!u6.has(f)&&gl(f).values.length&&(u=n[s]),s++}if(u&&l)for(const f of i)n[f]=gy(l,u)}const ka=n=>n*180/Math.PI,Nf=n=>{const i=ka(Math.atan2(n[1],n[0]));return Lf(i)},f6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Nf,rotateZ:Nf,skewX:n=>ka(Math.atan(n[1])),skewY:n=>ka(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Lf=n=>(n=n%360,n<0&&(n+=360),n),Tg=Nf,Ag=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Cg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),d6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ag,scaleY:Cg,scale:n=>(Ag(n)+Cg(n))/2,rotateX:n=>Lf(ka(Math.atan2(n[6],n[5]))),rotateY:n=>Lf(ka(Math.atan2(-n[2],n[0]))),rotateZ:Tg,rotate:Tg,skewX:n=>ka(Math.atan(n[4])),skewY:n=>ka(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Mg(n){return n.includes("scale")?1:0}function Uf(n,i){if(!n||n==="none")return Mg(i);const l=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,u;if(l)s=d6,u=l;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=f6,u=m}if(!u)return Mg(i);const f=s[i],d=u[1].split(",").map(m6);return typeof f=="function"?f(d):d[f]}const h6=(n,i)=>{const{transform:l="none"}=getComputedStyle(n);return Uf(l,i)};function m6(n){return parseFloat(n.trim())}const Rg=n=>n===Qi||n===lt,p6=new Set(["x","y","z"]),g6=Xi.filter(n=>!p6.has(n));function v6(n){const i=[];return g6.forEach(l=>{const s=n.getValue(l);s!==void 0&&(i.push([l,s.get()]),s.set(l.startsWith("scale")?1:0))}),i}const Pi={width:({x:n},{paddingLeft:i="0",paddingRight:l="0"})=>n.max-n.min-parseFloat(i)-parseFloat(l),height:({y:n},{paddingTop:i="0",paddingBottom:l="0"})=>n.max-n.min-parseFloat(i)-parseFloat(l),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Uf(i,"x"),y:(n,{transform:i})=>Uf(i,"y")};Pi.translateX=Pi.x;Pi.translateY=Pi.y;const qa=new Set;let kf=!1,Hf=!1;function vy(){if(Hf){const n=Array.from(qa).filter(s=>s.needsMeasurement),i=new Set(n.map(s=>s.element)),l=new Map;i.forEach(s=>{const u=v6(s);u.length&&(l.set(s,u),s.render())}),n.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const u=l.get(s);u&&u.forEach(([f,d])=>{var m;(m=s.getValue(f))===null||m===void 0||m.set(d)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Hf=!1,kf=!1,qa.forEach(n=>n.complete()),qa.clear()}function yy(){qa.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Hf=!0)})}function y6(){yy(),vy()}class kd{constructor(i,l,s,u,f,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=s,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(qa.add(this),kf||(kf=!0,Ot.read(yy),Ot.resolveKeyframes(vy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:s,motionValue:u}=this;for(let f=0;f<i.length;f++)if(i[f]===null)if(f===0){const d=u==null?void 0:u.get(),m=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&l){const h=s.readValue(l,m);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=m),u&&d===void 0&&u.set(i[0])}else i[f]=i[f-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),qa.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,qa.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const by=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),b6=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function x6(n){const i=b6.exec(n);if(!i)return[,];const[,l,s,u]=i;return[`--${l??s}`,u]}function xy(n,i,l=1){const[s,u]=x6(n);if(!s)return;const f=window.getComputedStyle(i).getPropertyValue(s);if(f){const d=f.trim();return by(d)?parseFloat(d):d}return Cd(u)?xy(u,i,l+1):u}const Sy=n=>i=>i.test(n),S6={test:n=>n==="auto",parse:n=>n},wy=[Qi,lt,cn,oa,yw,vw,S6],zg=n=>wy.find(Sy(n));class Ey extends kd{constructor(i,l,s,u,f){super(i,l,s,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:s}=this;if(!l||!l.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let p=i[h];if(typeof p=="string"&&(p=p.trim(),Cd(p))){const v=xy(p,l.current);v!==void 0&&(i[h]=v),h===i.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Iv.has(s)||i.length!==2)return;const[u,f]=i,d=zg(u),m=zg(f);if(d!==m)if(Rg(d)&&Rg(m))for(let h=0;h<i.length;h++){const p=i[h];typeof p=="string"&&(i[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,s=[];for(let u=0;u<i.length;u++)Qw(i[u])&&s.push(u);s.length&&c6(i,s,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Pi[s](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&i.getValue(s,u).jump(u,!1)}measureEndState(){var i;const{element:l,name:s,unresolvedKeyframes:u}=this;if(!l||!l.current)return;const f=l.getValue(s);f&&f.jump(this.measuredOrigin,!1);const d=u.length-1,m=u[d];u[d]=Pi[s](l.measureViewportBox(),window.getComputedStyle(l.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,p])=>{l.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const Dg=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ca.test(n)||n==="0")&&!n.startsWith("url("));function w6(n){const i=n[0];if(n.length===1)return!0;for(let l=0;l<n.length;l++)if(n[l]!==i)return!0}function E6(n,i,l,s){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=Dg(u,i),m=Dg(f,i);return!d||!m?!1:w6(n)||(l==="spring"||yd(l))&&s}const T6=n=>n!==null;function No(n,{repeat:i,repeatType:l="loop"},s){const u=n.filter(T6),f=i&&l!=="loop"&&i%2===1?0:u.length-1;return!f||s===void 0?u[f]:s}const A6=40;class Ty{constructor({autoplay:i=!0,delay:l=0,type:s="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=un.now(),this.options={autoplay:i,delay:l,type:s,repeat:u,repeatDelay:f,repeatType:d,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>A6?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&y6(),this._resolved}onKeyframesResolved(i,l){this.resolvedAt=un.now(),this.hasAttemptedResolve=!0;const{name:s,type:u,velocity:f,delay:d,onComplete:m,onUpdate:h,isGenerator:p}=this.options;if(!p&&!E6(i,s,u,f))if(d)this.options.duration=0;else{h&&h(No(i,this.options,l)),m&&m(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,l);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:l,...v},this.onPostResolved())}onPostResolved(){}then(i,l){return this.currentFinishedPromise.then(i,l)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Vt=(n,i,l)=>n+(i-n)*l;function uf(n,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?n+(i-n)*6*l:l<1/2?i:l<2/3?n+(i-n)*(2/3-l)*6:n}function C6({hue:n,saturation:i,lightness:l,alpha:s}){n/=360,i/=100,l/=100;let u=0,f=0,d=0;if(!i)u=f=d=l;else{const m=l<.5?l*(1+i):l+i-l*i,h=2*l-m;u=uf(h,m,n+1/3),f=uf(h,m,n),d=uf(h,m,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:s}}function bo(n,i){return l=>l>0?i:n}const cf=(n,i,l)=>{const s=n*n,u=l*(i*i-s)+s;return u<0?0:Math.sqrt(u)},M6=[_f,Ua,Di],R6=n=>M6.find(i=>i.test(n));function Og(n){const i=R6(n);if(!i)return!1;let l=i.parse(n);return i===Di&&(l=C6(l)),l}const jg=(n,i)=>{const l=Og(n),s=Og(i);if(!l||!s)return bo(n,i);const u={...l};return f=>(u.red=cf(l.red,s.red,f),u.green=cf(l.green,s.green,f),u.blue=cf(l.blue,s.blue,f),u.alpha=Vt(l.alpha,s.alpha,f),Ua.transform(u))},z6=(n,i)=>l=>i(n(l)),zl=(...n)=>n.reduce(z6),Pf=new Set(["none","hidden"]);function D6(n,i){return Pf.has(n)?l=>l<=0?n:i:l=>l>=1?i:n}function O6(n,i){return l=>Vt(n,i,l)}function Hd(n){return typeof n=="number"?O6:typeof n=="string"?Cd(n)?bo:he.test(n)?jg:_6:Array.isArray(n)?Ay:typeof n=="object"?he.test(n)?jg:j6:bo}function Ay(n,i){const l=[...n],s=l.length,u=n.map((f,d)=>Hd(f)(f,i[d]));return f=>{for(let d=0;d<s;d++)l[d]=u[d](f);return l}}function j6(n,i){const l={...n,...i},s={};for(const u in l)n[u]!==void 0&&i[u]!==void 0&&(s[u]=Hd(n[u])(n[u],i[u]));return u=>{for(const f in s)l[f]=s[f](u);return l}}function B6(n,i){var l;const s=[],u={color:0,var:0,number:0};for(let f=0;f<i.values.length;f++){const d=i.types[f],m=n.indexes[d][u[d]],h=(l=n.values[m])!==null&&l!==void 0?l:0;s[f]=h,u[d]++}return s}const _6=(n,i)=>{const l=ca.createTransformer(i),s=gl(n),u=gl(i);return s.indexes.var.length===u.indexes.var.length&&s.indexes.color.length===u.indexes.color.length&&s.indexes.number.length>=u.indexes.number.length?Pf.has(n)&&!u.values.length||Pf.has(i)&&!s.values.length?D6(n,i):zl(Ay(B6(s,u),u.values),l):bo(n,i)};function Cy(n,i,l){return typeof n=="number"&&typeof i=="number"&&typeof l=="number"?Vt(n,i,l):Hd(n)(n,i)}const V6=5;function My(n,i,l){const s=Math.max(i-V6,0);return Mv(l-n(s),i-s)}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Bg=.001;function N6({duration:n=Ht.duration,bounce:i=Ht.bounce,velocity:l=Ht.velocity,mass:s=Ht.mass}){let u,f,d=1-i;d=Vn(Ht.minDamping,Ht.maxDamping,d),n=Vn(Ht.minDuration,Ht.maxDuration,Bn(n)),d<1?(u=p=>{const v=p*d,y=v*n,x=v-l,E=qf(p,d),w=Math.exp(-y);return Bg-x/E*w},f=p=>{const y=p*d*n,x=y*l+l,E=Math.pow(d,2)*Math.pow(p,2)*n,w=Math.exp(-y),C=qf(Math.pow(p,2),d);return(-u(p)+Bg>0?-1:1)*((x-E)*w)/C}):(u=p=>{const v=Math.exp(-p*n),y=(p-l)*n+1;return-.001+v*y},f=p=>{const v=Math.exp(-p*n),y=(l-p)*(n*n);return v*y});const m=5/n,h=U6(u,f,m);if(n=jn(n),isNaN(h))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:n};{const p=Math.pow(h,2)*s;return{stiffness:p,damping:d*2*Math.sqrt(s*p),duration:n}}}const L6=12;function U6(n,i,l){let s=l;for(let u=1;u<L6;u++)s=s-n(s)/i(s);return s}function qf(n,i){return n*Math.sqrt(1-i*i)}const k6=["duration","bounce"],H6=["stiffness","damping","mass"];function _g(n,i){return i.some(l=>n[l]!==void 0)}function P6(n){let i={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...n};if(!_g(n,H6)&&_g(n,k6))if(n.visualDuration){const l=n.visualDuration,s=2*Math.PI/(l*1.2),u=s*s,f=2*Vn(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:Ht.mass,stiffness:u,damping:f}}else{const l=N6(n);i={...i,...l,mass:Ht.mass},i.isResolvedFromDuration=!0}return i}function Ry(n=Ht.visualDuration,i=Ht.bounce){const l=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:s,restDelta:u}=l;const f=l.keyframes[0],d=l.keyframes[l.keyframes.length-1],m={done:!1,value:f},{stiffness:h,damping:p,mass:v,duration:y,velocity:x,isResolvedFromDuration:E}=P6({...l,velocity:-Bn(l.velocity||0)}),w=x||0,C=p/(2*Math.sqrt(h*v)),O=d-f,R=Bn(Math.sqrt(h/v)),L=Math.abs(O)<5;s||(s=L?Ht.restSpeed.granular:Ht.restSpeed.default),u||(u=L?Ht.restDelta.granular:Ht.restDelta.default);let N;if(C<1){const U=qf(R,C);N=G=>{const Q=Math.exp(-C*R*G);return d-Q*((w+C*R*O)/U*Math.sin(U*G)+O*Math.cos(U*G))}}else if(C===1)N=U=>d-Math.exp(-R*U)*(O+(w+R*O)*U);else{const U=R*Math.sqrt(C*C-1);N=G=>{const Q=Math.exp(-C*R*G),F=Math.min(U*G,300);return d-Q*((w+C*R*O)*Math.sinh(F)+U*O*Math.cosh(F))/U}}const $={calculatedDuration:E&&y||null,next:U=>{const G=N(U);if(E)m.done=U>=y;else{let Q=0;C<1&&(Q=U===0?jn(w):My(N,U,G));const F=Math.abs(Q)<=s,X=Math.abs(d-G)<=u;m.done=F&&X}return m.value=m.done?d:G,m},toString:()=>{const U=Math.min(Rv($),Df),G=zv(Q=>$.next(U*Q).value,U,30);return U+"ms "+G}};return $}function Vg({keyframes:n,velocity:i=0,power:l=.8,timeConstant:s=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:m,max:h,restDelta:p=.5,restSpeed:v}){const y=n[0],x={done:!1,value:y},E=F=>m!==void 0&&F<m||h!==void 0&&F>h,w=F=>m===void 0?h:h===void 0||Math.abs(m-F)<Math.abs(h-F)?m:h;let C=l*i;const O=y+C,R=d===void 0?O:d(O);R!==O&&(C=R-y);const L=F=>-C*Math.exp(-F/s),N=F=>R+L(F),$=F=>{const X=L(F),tt=N(F);x.done=Math.abs(X)<=p,x.value=x.done?R:tt};let U,G;const Q=F=>{E(x.value)&&(U=F,G=Ry({keyframes:[x.value,w(x.value)],velocity:My(N,F,x.value),damping:u,stiffness:f,restDelta:p,restSpeed:v}))};return Q(0),{calculatedDuration:null,next:F=>{let X=!1;return!G&&U===void 0&&(X=!0,$(F),Q(F)),U!==void 0&&F>=U?G.next(F-U):(!X&&$(F),x)}}}const q6=Rl(.42,0,1,1),Y6=Rl(0,0,.58,1),zy=Rl(.42,0,.58,1),G6=n=>Array.isArray(n)&&typeof n[0]!="number",$6={linear:je,easeIn:q6,easeInOut:zy,easeOut:Y6,circIn:Nd,circInOut:oy,circOut:sy,backIn:Vd,backInOut:ry,backOut:iy,anticipate:ly},Ng=n=>{if(bd(n)){Cv(n.length===4);const[i,l,s,u]=n;return Rl(i,l,s,u)}else if(typeof n=="string")return $6[n];return n};function X6(n,i,l){const s=[],u=l||Cy,f=n.length-1;for(let d=0;d<f;d++){let m=u(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||je:i;m=zl(h,m)}s.push(m)}return s}function Q6(n,i,{clamp:l=!0,ease:s,mixer:u}={}){const f=n.length;if(Cv(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const m=X6(i,s,u),h=m.length,p=v=>{if(d&&v<n[0])return i[0];let y=0;if(h>1)for(;y<n.length-2&&!(v<n[y+1]);y++);const x=ki(n[y],n[y+1],v);return m[y](x)};return l?v=>p(Vn(n[0],n[f-1],v)):p}function Z6(n,i){const l=n[n.length-1];for(let s=1;s<=i;s++){const u=ki(0,i,s);n.push(Vt(l,1,u))}}function K6(n){const i=[0];return Z6(i,n.length-1),i}function F6(n,i){return n.map(l=>l*i)}function J6(n,i){return n.map(()=>i||zy).splice(0,n.length-1)}function xo({duration:n=300,keyframes:i,times:l,ease:s="easeInOut"}){const u=G6(s)?s.map(Ng):Ng(s),f={done:!1,value:i[0]},d=F6(l&&l.length===i.length?l:K6(i),n),m=Q6(d,i,{ease:Array.isArray(u)?u:J6(i,u)});return{calculatedDuration:n,next:h=>(f.value=m(h),f.done=h>=n,f)}}const W6=n=>{const i=({timestamp:l})=>n(l);return{start:()=>Ot.update(i,!0),stop:()=>ua(i),now:()=>oe.isProcessing?oe.timestamp:un.now()}},I6={decay:Vg,inertia:Vg,tween:xo,keyframes:xo,spring:Ry},t8=n=>n/100;class Pd extends Ty{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:l,motionValue:s,element:u,keyframes:f}=this.options,d=(u==null?void 0:u.KeyframeResolver)||kd,m=(h,p)=>this.onKeyframesResolved(h,p);this.resolver=new d(f,m,l,s,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:l="keyframes",repeat:s=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=this.options,m=yd(l)?l:I6[l]||xo;let h,p;m!==xo&&typeof i[0]!="number"&&(h=zl(t8,Cy(i[0],i[1])),i=[0,100]);const v=m({...this.options,keyframes:i});f==="mirror"&&(p=m({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=Rv(v));const{calculatedDuration:y}=v,x=y+u,E=x*(s+1)-u;return{generator:v,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:y,resolvedDuration:x,totalDuration:E}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,l=!1){const{resolved:s}=this;if(!s){const{keyframes:F}=this.options;return{done:!0,value:F[F.length-1]}}const{finalKeyframe:u,generator:f,mirroredGenerator:d,mapPercentToKeyframes:m,keyframes:h,calculatedDuration:p,totalDuration:v,resolvedDuration:y}=s;if(this.startTime===null)return f.next(0);const{delay:x,repeat:E,repeatType:w,repeatDelay:C,onUpdate:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),l?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const R=this.currentTime-x*(this.speed>=0?1:-1),L=this.speed>=0?R<0:R>v;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let N=this.currentTime,$=f;if(E){const F=Math.min(this.currentTime,v)/y;let X=Math.floor(F),tt=F%1;!tt&&F>=1&&(tt=1),tt===1&&X--,X=Math.min(X,E+1),!!(X%2)&&(w==="reverse"?(tt=1-tt,C&&(tt-=C/y)):w==="mirror"&&($=d)),N=Vn(0,1,tt)*y}const U=L?{done:!1,value:h[0]}:$.next(N);m&&(U.value=m(U.value));let{done:G}=U;!L&&p!==null&&(G=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&G);return Q&&u!==void 0&&(U.value=No(h,this.options,u)),O&&O(U.value),Q&&this.finish(),U}get duration(){const{resolved:i}=this;return i?Bn(i.calculatedDuration):0}get time(){return Bn(this.currentTime)}set time(i){i=jn(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=Bn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=W6,onPlay:l,startTime:s}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),l&&l();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const e8=new Set(["opacity","clipPath","filter","transform"]);function n8(n,i,l,{delay:s=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:m="easeInOut",times:h}={}){const p={[i]:l};h&&(p.offset=h);const v=Ov(m,u);return Array.isArray(v)&&(p.easing=v),n.animate(p,{delay:s,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"})}const a8=pd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),So=10,i8=2e4;function r8(n){return yd(n.type)||n.type==="spring"||!Dv(n.ease)}function l8(n,i){const l=new Pd({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:n[0]};const u=[];let f=0;for(;!s.done&&f<i8;)s=l.sample(f),u.push(s.value),f+=So;return{times:void 0,keyframes:u,duration:f-So,ease:"linear"}}const Dy={anticipate:ly,backInOut:ry,circInOut:oy};function s8(n){return n in Dy}class Lg extends Ty{constructor(i){super(i);const{name:l,motionValue:s,element:u,keyframes:f}=this.options;this.resolver=new Ey(f,(d,m)=>this.onKeyframesResolved(d,m),l,s,u),this.resolver.scheduleResolve()}initPlayback(i,l){let{duration:s=300,times:u,ease:f,type:d,motionValue:m,name:h,startTime:p}=this.options;if(!m.owner||!m.owner.current)return!1;if(typeof f=="string"&&vo()&&s8(f)&&(f=Dy[f]),r8(this.options)){const{onComplete:y,onUpdate:x,motionValue:E,element:w,...C}=this.options,O=l8(i,C);i=O.keyframes,i.length===1&&(i[1]=i[0]),s=O.duration,u=O.times,f=O.ease,d="keyframes"}const v=n8(m.owner.current,h,i,{...this.options,duration:s,times:u,ease:f});return v.startTime=p??this.calcStartTime(),this.pendingTimeline?(ug(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:y}=this.options;m.set(No(i,this.options,l)),y&&y(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:s,times:u,type:d,ease:f,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:l}=i;return Bn(l)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:l}=i;return Bn(l.currentTime||0)}set time(i){const{resolved:l}=this;if(!l)return;const{animation:s}=l;s.currentTime=jn(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:l}=i;return l.playbackRate}set speed(i){const{resolved:l}=this;if(!l)return;const{animation:s}=l;s.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:l}=i;return l.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:l}=i;return l.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:l}=this;if(!l)return je;const{animation:s}=l;ug(s,i)}return je}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:l}=i;l.playState==="finished"&&this.updateFinishedPromise(),l.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:l}=i;l.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:l,keyframes:s,duration:u,type:f,ease:d,times:m}=i;if(l.playState==="idle"||l.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:v,onComplete:y,element:x,...E}=this.options,w=new Pd({...E,keyframes:s,duration:u,type:f,ease:d,times:m,isGenerator:!0}),C=jn(this.time);p.setWithVelocity(w.sample(C-So).value,w.sample(C).value,So)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:l,name:s,repeatDelay:u,repeatType:f,damping:d,type:m}=i;if(!l||!l.owner||!(l.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=l.owner.getProps();return a8()&&s&&e8.has(s)&&!h&&!p&&!u&&f!=="mirror"&&d!==0&&m!=="inertia"}}const o8={type:"spring",stiffness:500,damping:25,restSpeed:10},u8=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),c8={type:"keyframes",duration:.8},f8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},d8=(n,{keyframes:i})=>i.length>2?c8:Ya.has(n)?n.startsWith("scale")?u8(i[1]):o8:f8;function h8({when:n,delay:i,delayChildren:l,staggerChildren:s,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:m,from:h,elapsed:p,...v}){return!!Object.keys(v).length}const qd=(n,i,l,s={},u,f)=>d=>{const m=vd(s,n)||{},h=m.delay||s.delay||0;let{elapsed:p=0}=s;p=p-jn(h);let v={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...m,delay:-p,onUpdate:x=>{i.set(x),m.onUpdate&&m.onUpdate(x)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:i,element:f?void 0:u};h8(m)||(v={...v,...d8(n,v)}),v.duration&&(v.duration=jn(v.duration)),v.repeatDelay&&(v.repeatDelay=jn(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let y=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(y=!0)),v.allowFlatten=!m.type&&!m.ease,y&&!f&&i.get()!==void 0){const x=No(v.keyframes,m);if(x!==void 0)return Ot.update(()=>{v.onUpdate(x),v.onComplete()}),new NS([])}return!f&&Lg.supports(v)?new Lg(v):new Pd(v)};function m8({protectedKeys:n,needsAnimating:i},l){const s=n.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,s}function Oy(n,i,{delay:l=0,transitionOverride:s,type:u}={}){var f;let{transition:d=n.getDefaultTransition(),transitionEnd:m,...h}=i;s&&(d=s);const p=[],v=u&&n.animationState&&n.animationState.getState()[u];for(const y in h){const x=n.getValue(y,(f=n.latestValues[y])!==null&&f!==void 0?f:null),E=h[y];if(E===void 0||v&&m8(v,y))continue;const w={delay:l,...vd(d||{},y)};let C=!1;if(window.MotionHandoffAnimation){const R=ty(n);if(R){const L=window.MotionHandoffAnimation(R,y,Ot);L!==null&&(w.startTime=L,C=!0)}}Bf(n,y),x.start(qd(y,x,E,n.shouldReduceMotion&&Iv.has(y)?{type:!1}:w,n,C));const O=x.animation;O&&p.push(O)}return m&&Promise.all(p).then(()=>{Ot.update(()=>{m&&qw(n,m)})}),p}function Yf(n,i,l={}){var s;const u=pl(n,i,l.type==="exit"?(s=n.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:f=n.getDefaultTransition()||{}}=u||{};l.transitionOverride&&(f=l.transitionOverride);const d=u?()=>Promise.all(Oy(n,u,l)):()=>Promise.resolve(),m=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:v=0,staggerChildren:y,staggerDirection:x}=f;return p8(n,i,v+p,y,x,l)}:()=>Promise.resolve(),{when:h}=f;if(h){const[p,v]=h==="beforeChildren"?[d,m]:[m,d];return p().then(()=>v())}else return Promise.all([d(),m(l.delay)])}function p8(n,i,l=0,s=0,u=1,f){const d=[],m=(n.variantChildren.size-1)*s,h=u===1?(p=0)=>p*s:(p=0)=>m-p*s;return Array.from(n.variantChildren).sort(g8).forEach((p,v)=>{p.notify("AnimationStart",i),d.push(Yf(p,i,{...f,delay:l+h(v)}).then(()=>p.notify("AnimationComplete",i)))}),Promise.all(d)}function g8(n,i){return n.sortNodePosition(i)}function v8(n,i,l={}){n.notify("AnimationStart",i);let s;if(Array.isArray(i)){const u=i.map(f=>Yf(n,f,l));s=Promise.all(u)}else if(typeof i=="string")s=Yf(n,i,l);else{const u=typeof i=="function"?pl(n,i,l.custom):i;s=Promise.all(Oy(n,u,l))}return s.then(()=>{n.notify("AnimationComplete",i)})}function jy(n,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==n.length)return!1;for(let s=0;s<l;s++)if(i[s]!==n[s])return!1;return!0}const y8=Ed.length;function By(n){if(!n)return;if(!n.isControllingVariants){const l=n.parent?By(n.parent)||{}:{};return n.props.initial!==void 0&&(l.initial=n.props.initial),l}const i={};for(let l=0;l<y8;l++){const s=Ed[l],u=n.props[s];(dl(u)||u===!1)&&(i[s]=u)}return i}const b8=[...wd].reverse(),x8=wd.length;function S8(n){return i=>Promise.all(i.map(({animation:l,options:s})=>v8(n,l,s)))}function w8(n){let i=S8(n),l=Ug(),s=!0;const u=h=>(p,v)=>{var y;const x=pl(n,v,h==="exit"?(y=n.presenceContext)===null||y===void 0?void 0:y.custom:void 0);if(x){const{transition:E,transitionEnd:w,...C}=x;p={...p,...C,...w}}return p};function f(h){i=h(n)}function d(h){const{props:p}=n,v=By(n.parent)||{},y=[],x=new Set;let E={},w=1/0;for(let O=0;O<x8;O++){const R=b8[O],L=l[R],N=p[R]!==void 0?p[R]:v[R],$=dl(N),U=R===h?L.isActive:null;U===!1&&(w=O);let G=N===v[R]&&N!==p[R]&&$;if(G&&s&&n.manuallyAnimateOnMount&&(G=!1),L.protectedKeys={...E},!L.isActive&&U===null||!N&&!L.prevProp||_o(N)||typeof N=="boolean")continue;const Q=E8(L.prevProp,N);let F=Q||R===h&&L.isActive&&!G&&$||O>w&&$,X=!1;const tt=Array.isArray(N)?N:[N];let Rt=tt.reduce(u(R),{});U===!1&&(Rt={});const{prevResolvedValues:ie={}}=L,vt={...ie,...Rt},Yt=J=>{F=!0,x.has(J)&&(X=!0,x.delete(J)),L.needsAnimating[J]=!0;const I=n.getValue(J);I&&(I.liveStyle=!1)};for(const J in vt){const I=Rt[J],ct=ie[J];if(E.hasOwnProperty(J))continue;let M=!1;jf(I)&&jf(ct)?M=!jy(I,ct):M=I!==ct,M?I!=null?Yt(J):x.add(J):I!==void 0&&x.has(J)?Yt(J):L.protectedKeys[J]=!0}L.prevProp=N,L.prevResolvedValues=Rt,L.isActive&&(E={...E,...Rt}),s&&n.blockInitialAnimation&&(F=!1),F&&(!(G&&Q)||X)&&y.push(...tt.map(J=>({animation:J,options:{type:R}})))}if(x.size){const O={};if(typeof p.initial!="boolean"){const R=pl(n,Array.isArray(p.initial)?p.initial[0]:p.initial);R&&R.transition&&(O.transition=R.transition)}x.forEach(R=>{const L=n.getBaseTarget(R),N=n.getValue(R);N&&(N.liveStyle=!0),O[R]=L??null}),y.push({animation:O})}let C=!!y.length;return s&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(C=!1),s=!1,C?i(y):Promise.resolve()}function m(h,p){var v;if(l[h].isActive===p)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(x=>{var E;return(E=x.animationState)===null||E===void 0?void 0:E.setActive(h,p)}),l[h].isActive=p;const y=d(h);for(const x in l)l[x].protectedKeys={};return y}return{animateChanges:d,setActive:m,setAnimateFunction:f,getState:()=>l,reset:()=>{l=Ug(),s=!0}}}function E8(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!jy(i,n):!1}function Va(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ug(){return{animate:Va(!0),whileInView:Va(),whileHover:Va(),whileTap:Va(),whileDrag:Va(),whileFocus:Va(),exit:Va()}}class da{constructor(i){this.isMounted=!1,this.node=i}update(){}}class T8 extends da{constructor(i){super(i),i.animationState||(i.animationState=w8(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();_o(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let A8=0;class C8 extends da{constructor(){super(...arguments),this.id=A8++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const u=this.node.animationState.setActive("exit",!i);l&&!i&&u.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const M8={animation:{Feature:T8},exit:{Feature:C8}};function vl(n,i,l,s={passive:!0}){return n.addEventListener(i,l,s),()=>n.removeEventListener(i,l)}function Dl(n){return{point:{x:n.pageX,y:n.pageY}}}const R8=n=>i=>Sd(i)&&n(i,Dl(i));function el(n,i,l,s){return vl(n,i,R8(l),s)}function _y({top:n,left:i,right:l,bottom:s}){return{x:{min:i,max:l},y:{min:n,max:s}}}function z8({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function D8(n,i){if(!i)return n;const l=i({x:n.left,y:n.top}),s=i({x:n.right,y:n.bottom});return{top:l.y,left:l.x,bottom:s.y,right:s.x}}const Vy=1e-4,O8=1-Vy,j8=1+Vy,Ny=.01,B8=0-Ny,_8=0+Ny;function ye(n){return n.max-n.min}function V8(n,i,l){return Math.abs(n-i)<=l}function kg(n,i,l,s=.5){n.origin=s,n.originPoint=Vt(i.min,i.max,n.origin),n.scale=ye(l)/ye(i),n.translate=Vt(l.min,l.max,n.origin)-n.originPoint,(n.scale>=O8&&n.scale<=j8||isNaN(n.scale))&&(n.scale=1),(n.translate>=B8&&n.translate<=_8||isNaN(n.translate))&&(n.translate=0)}function nl(n,i,l,s){kg(n.x,i.x,l.x,s?s.originX:void 0),kg(n.y,i.y,l.y,s?s.originY:void 0)}function Hg(n,i,l){n.min=l.min+i.min,n.max=n.min+ye(i)}function N8(n,i,l){Hg(n.x,i.x,l.x),Hg(n.y,i.y,l.y)}function Pg(n,i,l){n.min=i.min-l.min,n.max=n.min+ye(i)}function al(n,i,l){Pg(n.x,i.x,l.x),Pg(n.y,i.y,l.y)}const qg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oi=()=>({x:qg(),y:qg()}),Yg=()=>({min:0,max:0}),qt=()=>({x:Yg(),y:Yg()});function Xe(n){return[n("x"),n("y")]}function ff(n){return n===void 0||n===1}function Gf({scale:n,scaleX:i,scaleY:l}){return!ff(n)||!ff(i)||!ff(l)}function Na(n){return Gf(n)||Ly(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ly(n){return Gg(n.x)||Gg(n.y)}function Gg(n){return n&&n!=="0%"}function wo(n,i,l){const s=n-l,u=i*s;return l+u}function $g(n,i,l,s,u){return u!==void 0&&(n=wo(n,u,s)),wo(n,l,s)+i}function $f(n,i=0,l=1,s,u){n.min=$g(n.min,i,l,s,u),n.max=$g(n.max,i,l,s,u)}function Uy(n,{x:i,y:l}){$f(n.x,i.translate,i.scale,i.originPoint),$f(n.y,l.translate,l.scale,l.originPoint)}const Xg=.999999999999,Qg=1.0000000000001;function L8(n,i,l,s=!1){const u=l.length;if(!u)return;i.x=i.y=1;let f,d;for(let m=0;m<u;m++){f=l[m],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Bi(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Uy(n,d)),s&&Na(f.latestValues)&&Bi(n,f.latestValues))}i.x<Qg&&i.x>Xg&&(i.x=1),i.y<Qg&&i.y>Xg&&(i.y=1)}function ji(n,i){n.min=n.min+i,n.max=n.max+i}function Zg(n,i,l,s,u=.5){const f=Vt(n.min,n.max,u);$f(n,i,l,f,s)}function Bi(n,i){Zg(n.x,i.x,i.scaleX,i.scale,i.originX),Zg(n.y,i.y,i.scaleY,i.scale,i.originY)}function ky(n,i){return _y(D8(n.getBoundingClientRect(),i))}function U8(n,i,l){const s=ky(n,l),{scroll:u}=i;return u&&(ji(s.x,u.offset.x),ji(s.y,u.offset.y)),s}const Hy=({current:n})=>n?n.ownerDocument.defaultView:null,Kg=(n,i)=>Math.abs(n-i);function k8(n,i){const l=Kg(n.x,i.x),s=Kg(n.y,i.y);return Math.sqrt(l**2+s**2)}class Py{constructor(i,l,{transformPagePoint:s,contextWindow:u,dragSnapToOrigin:f=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=hf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,E=k8(y.offset,{x:0,y:0})>=3;if(!x&&!E)return;const{point:w}=y,{timestamp:C}=oe;this.history.push({...w,timestamp:C});const{onStart:O,onMove:R}=this.handlers;x||(O&&O(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,y)},this.handlePointerMove=(y,x)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=df(x,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(y,x)=>{this.end();const{onEnd:E,onSessionEnd:w,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=hf(y.type==="pointercancel"?this.lastMoveEventInfo:df(x,this.transformPagePoint),this.history);this.startEvent&&E&&E(y,O),w&&w(y,O)},!Sd(i))return;this.dragSnapToOrigin=f,this.handlers=l,this.transformPagePoint=s,this.contextWindow=u||window;const d=Dl(i),m=df(d,this.transformPagePoint),{point:h}=m,{timestamp:p}=oe;this.history=[{...h,timestamp:p}];const{onSessionStart:v}=l;v&&v(i,hf(m,this.history)),this.removeListeners=zl(el(this.contextWindow,"pointermove",this.handlePointerMove),el(this.contextWindow,"pointerup",this.handlePointerUp),el(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),ua(this.updatePoint)}}function df(n,i){return i?{point:i(n.point)}:n}function Fg(n,i){return{x:n.x-i.x,y:n.y-i.y}}function hf({point:n},i){return{point:n,delta:Fg(n,qy(i)),offset:Fg(n,H8(i)),velocity:P8(i,.1)}}function H8(n){return n[0]}function qy(n){return n[n.length-1]}function P8(n,i){if(n.length<2)return{x:0,y:0};let l=n.length-1,s=null;const u=qy(n);for(;l>=0&&(s=n[l],!(u.timestamp-s.timestamp>jn(i)));)l--;if(!s)return{x:0,y:0};const f=Bn(u.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-s.x)/f,y:(u.y-s.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function q8(n,{min:i,max:l},s){return i!==void 0&&n<i?n=s?Vt(i,n,s.min):Math.max(n,i):l!==void 0&&n>l&&(n=s?Vt(l,n,s.max):Math.min(n,l)),n}function Jg(n,i,l){return{min:i!==void 0?n.min+i:void 0,max:l!==void 0?n.max+l-(n.max-n.min):void 0}}function Y8(n,{top:i,left:l,bottom:s,right:u}){return{x:Jg(n.x,l,u),y:Jg(n.y,i,s)}}function Wg(n,i){let l=i.min-n.min,s=i.max-n.max;return i.max-i.min<n.max-n.min&&([l,s]=[s,l]),{min:l,max:s}}function G8(n,i){return{x:Wg(n.x,i.x),y:Wg(n.y,i.y)}}function $8(n,i){let l=.5;const s=ye(n),u=ye(i);return u>s?l=ki(i.min,i.max-s,n.min):s>u&&(l=ki(n.min,n.max-u,i.min)),Vn(0,1,l)}function X8(n,i){const l={};return i.min!==void 0&&(l.min=i.min-n.min),i.max!==void 0&&(l.max=i.max-n.min),l}const Xf=.35;function Q8(n=Xf){return n===!1?n=0:n===!0&&(n=Xf),{x:Ig(n,"left","right"),y:Ig(n,"top","bottom")}}function Ig(n,i,l){return{min:t1(n,i),max:t1(n,l)}}function t1(n,i){return typeof n=="number"?n:n[i]||0}const Z8=new WeakMap;class K8{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=qt(),this.visualElement=i}start(i,{snapToCursor:l=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(Dl(v).point)},f=(v,y)=>{const{drag:x,dragPropagation:E,onDragStart:w}=this.getProps();if(x&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=qS(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(O=>{let R=this.getAxisMotionValue(O).get()||0;if(cn.test(R)){const{projection:L}=this.visualElement;if(L&&L.layout){const N=L.layout.layoutBox[O];N&&(R=ye(N)*(parseFloat(R)/100))}}this.originPoint[O]=R}),w&&Ot.postRender(()=>w(v,y)),Bf(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},d=(v,y)=>{const{dragPropagation:x,dragDirectionLock:E,onDirectionLock:w,onDrag:C}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:O}=y;if(E&&this.currentDirection===null){this.currentDirection=F8(O),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",y.point,O),this.updateAxis("y",y.point,O),this.visualElement.render(),C&&C(v,y)},m=(v,y)=>this.stop(v,y),h=()=>Xe(v=>{var y;return this.getAnimationState(v)==="paused"&&((y=this.getAxisMotionValue(v).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new Py(i,{onSessionStart:u,onStart:f,onMove:d,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:Hy(this.visualElement)})}stop(i,l){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:u}=l;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ot.postRender(()=>f(i,l))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,s){const{drag:u}=this.getProps();if(!s||!Js(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(d=q8(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var i;const{dragConstraints:l,dragElastic:s}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,f=this.constraints;l&&zi(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&u?this.constraints=Y8(u.layoutBox,l):this.constraints=!1,this.elastic=Q8(s),f!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&Xe(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=X8(u.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!zi(i))return!1;const s=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=U8(s,u.root,this.visualElement.getTransformPagePoint());let d=G8(u.layout.layoutBox,f);if(l){const m=l(z8(d));this.hasMutatedConstraints=!!m,m&&(d=_y(m))}return d}startAnimation(i){const{drag:l,dragMomentum:s,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},p=Xe(v=>{if(!Js(v,l,this.currentDirection))return;let y=h&&h[v]||{};d&&(y={min:0,max:0});const x=u?200:1e6,E=u?40:1e7,w={type:"inertia",velocity:s?i[v]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...f,...y};return this.startAxisValueAnimation(v,w)});return Promise.all(p).then(m)}startAxisValueAnimation(i,l){const s=this.getAxisMotionValue(i);return Bf(this.visualElement,i),s.start(qd(i,s,0,l,this.visualElement,!1))}stopAnimation(){Xe(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Xe(i=>{var l;return(l=this.getAxisMotionValue(i).animation)===null||l===void 0?void 0:l.pause()})}getAnimationState(i){var l;return(l=this.getAxisMotionValue(i).animation)===null||l===void 0?void 0:l.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),u=s[l];return u||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){Xe(l=>{const{drag:s}=this.getProps();if(!Js(l,s,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(l);if(u&&u.layout){const{min:d,max:m}=u.layout.layoutBox[l];f.set(i[l]-Vt(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:s}=this.visualElement;if(!zi(l)||!s||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xe(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const h=m.get();u[d]=$8({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Xe(d=>{if(!Js(d,i,null))return;const m=this.getAxisMotionValue(d),{min:h,max:p}=this.constraints[d];m.set(Vt(h,p,u[d]))})}addListeners(){if(!this.visualElement.current)return;Z8.set(this.visualElement,this);const i=this.visualElement.current,l=el(i,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps();p&&v&&this.start(h)}),s=()=>{const{dragConstraints:h}=this.getProps();zi(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",s);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Ot.read(s);const d=vl(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Xe(v=>{const y=this.getAxisMotionValue(v);y&&(this.originPoint[v]+=h[v].translate,y.set(y.get()+h[v].translate))}),this.visualElement.render())});return()=>{d(),l(),f(),m&&m()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:s=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=Xf,dragMomentum:m=!0}=i;return{...i,drag:l,dragDirectionLock:s,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:m}}}function Js(n,i,l){return(i===!0||i===n)&&(l===null||l===n)}function F8(n,i=10){let l=null;return Math.abs(n.y)>i?l="y":Math.abs(n.x)>i&&(l="x"),l}class J8 extends da{constructor(i){super(i),this.removeGroupControls=je,this.removeListeners=je,this.controls=new K8(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||je}unmount(){this.removeGroupControls(),this.removeListeners()}}const e1=n=>(i,l)=>{n&&Ot.postRender(()=>n(i,l))};class W8 extends da{constructor(){super(...arguments),this.removePointerDownListener=je}onPointerDown(i){this.session=new Py(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Hy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:s,onPanEnd:u}=this.node.getProps();return{onSessionStart:e1(i),onStart:e1(l),onMove:s,onEnd:(f,d)=>{delete this.session,u&&Ot.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=el(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const oo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function n1(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Zr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(lt.test(n))n=parseFloat(n);else return n;const l=n1(n,i.target.x),s=n1(n,i.target.y);return`${l}% ${s}%`}},I8={correct:(n,{treeScale:i,projectionDelta:l})=>{const s=n,u=ca.parse(n);if(u.length>5)return s;const f=ca.createTransformer(n),d=typeof u[0]!="number"?1:0,m=l.x.scale*i.x,h=l.y.scale*i.y;u[0+d]/=m,u[1+d]/=h;const p=Vt(m,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=p),typeof u[3+d]=="number"&&(u[3+d]/=p),f(u)}};class tE extends A.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s,layoutId:u}=this.props,{projection:f}=i;gw(eE),f&&(l.group&&l.group.add(f),s&&s.register&&u&&s.register(f),f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),oo.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:s,drag:u,isPresent:f}=this.props,d=s.projection;return d&&(d.isPresent=f,u||i.layoutDependency!==l||l===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||Ot.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),xd.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:s}=this.props,{projection:u}=i;u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),s&&s.deregister&&s.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Yy(n){const[i,l]=Av(),s=A.useContext(ud);return T.jsx(tE,{...n,layoutGroup:s,switchLayoutGroup:A.useContext(Hv),isPresent:i,safeToRemove:l})}const eE={borderRadius:{...Zr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zr,borderTopRightRadius:Zr,borderBottomLeftRadius:Zr,borderBottomRightRadius:Zr,boxShadow:I8};function nE(n,i,l){const s=me(n)?n:fl(n);return s.start(qd("",s,i,l)),s.animation}function aE(n){return n instanceof SVGElement&&n.tagName!=="svg"}const iE=(n,i)=>n.depth-i.depth;class rE{constructor(){this.children=[],this.isDirty=!1}add(i){hd(this.children,i),this.isDirty=!0}remove(i){md(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(iE),this.isDirty=!1,this.children.forEach(i)}}function lE(n,i){const l=un.now(),s=({timestamp:u})=>{const f=u-l;f>=i&&(ua(s),n(f-i))};return Ot.read(s,!0),()=>ua(s)}const Gy=["TopLeft","TopRight","BottomLeft","BottomRight"],sE=Gy.length,a1=n=>typeof n=="string"?parseFloat(n):n,i1=n=>typeof n=="number"||lt.test(n);function oE(n,i,l,s,u,f){u?(n.opacity=Vt(0,l.opacity!==void 0?l.opacity:1,uE(s)),n.opacityExit=Vt(i.opacity!==void 0?i.opacity:1,0,cE(s))):f&&(n.opacity=Vt(i.opacity!==void 0?i.opacity:1,l.opacity!==void 0?l.opacity:1,s));for(let d=0;d<sE;d++){const m=`border${Gy[d]}Radius`;let h=r1(i,m),p=r1(l,m);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||i1(h)===i1(p)?(n[m]=Math.max(Vt(a1(h),a1(p),s),0),(cn.test(p)||cn.test(h))&&(n[m]+="%")):n[m]=p}(i.rotate||l.rotate)&&(n.rotate=Vt(i.rotate||0,l.rotate||0,s))}function r1(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const uE=$y(0,.5,sy),cE=$y(.5,.95,je);function $y(n,i,l){return s=>s<n?0:s>i?1:l(ki(n,i,s))}function l1(n,i){n.min=i.min,n.max=i.max}function $e(n,i){l1(n.x,i.x),l1(n.y,i.y)}function s1(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function o1(n,i,l,s,u){return n-=i,n=wo(n,1/l,s),u!==void 0&&(n=wo(n,1/u,s)),n}function fE(n,i=0,l=1,s=.5,u,f=n,d=n){if(cn.test(i)&&(i=parseFloat(i),i=Vt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let m=Vt(f.min,f.max,s);n===f&&(m-=i),n.min=o1(n.min,i,l,m,u),n.max=o1(n.max,i,l,m,u)}function u1(n,i,[l,s,u],f,d){fE(n,i[l],i[s],i[u],i.scale,f,d)}const dE=["x","scaleX","originX"],hE=["y","scaleY","originY"];function c1(n,i,l,s){u1(n.x,i,dE,l?l.x:void 0,s?s.x:void 0),u1(n.y,i,hE,l?l.y:void 0,s?s.y:void 0)}function f1(n){return n.translate===0&&n.scale===1}function Xy(n){return f1(n.x)&&f1(n.y)}function d1(n,i){return n.min===i.min&&n.max===i.max}function mE(n,i){return d1(n.x,i.x)&&d1(n.y,i.y)}function h1(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Qy(n,i){return h1(n.x,i.x)&&h1(n.y,i.y)}function m1(n){return ye(n.x)/ye(n.y)}function p1(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class pE{constructor(){this.members=[]}add(i){hd(this.members,i),i.scheduleRender()}remove(i){if(md(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(u=>i===u);if(l===0)return!1;let s;for(let u=l;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){s=f;break}}return s?(this.promote(s),!0):!1}promote(i,l){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,l&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:s}=i;l.onExitComplete&&l.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function gE(n,i,l){let s="";const u=n.x.translate/i.x,f=n.y.translate/i.y,d=(l==null?void 0:l.z)||0;if((u||f||d)&&(s=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:p,rotate:v,rotateX:y,rotateY:x,skewX:E,skewY:w}=l;p&&(s=`perspective(${p}px) ${s}`),v&&(s+=`rotate(${v}deg) `),y&&(s+=`rotateX(${y}deg) `),x&&(s+=`rotateY(${x}deg) `),E&&(s+=`skewX(${E}deg) `),w&&(s+=`skewY(${w}deg) `)}const m=n.x.scale*i.x,h=n.y.scale*i.y;return(m!==1||h!==1)&&(s+=`scale(${m}, ${h})`),s||"none"}const mf=["","X","Y","Z"],vE={visibility:"hidden"},g1=1e3;let yE=0;function pf(n,i,l,s){const{latestValues:u}=i;u[n]&&(l[n]=u[n],i.setStaticValue(n,0),s&&(s[n]=0))}function Zy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const l=ty(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(l,"transform",Ot,!(u||f))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&Zy(s)}function Ky({attachResizeListener:n,defaultParent:i,measureScroll:l,checkIsScrollRoot:s,resetTransform:u}){return class{constructor(d={},m=i==null?void 0:i()){this.id=yE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(SE),this.nodes.forEach(CE),this.nodes.forEach(ME),this.nodes.forEach(wE)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new rE)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new gd),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const h=this.eventHandlers.get(d);h&&h.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,m=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=aE(d),this.instance=d;const{layoutId:h,layout:p,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),m&&(p||h)&&(this.isLayoutDirty=!0),n){let y;const x=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=lE(x,250),oo.hasAnimatedSinceResize&&(oo.hasAnimatedSinceResize=!1,this.nodes.forEach(y1))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:E,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||v.getDefaultTransition()||jE,{onLayoutAnimationStart:O,onLayoutAnimationComplete:R}=v.getProps(),L=!this.targetLayout||!Qy(this.targetLayout,w),N=!x&&E;if(this.options.layoutRoot||this.resumeFrom||N||x&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,N);const $={...vd(C,"layout"),onPlay:O,onComplete:R};(v.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($)}else x||y1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ua(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Zy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const y=this.path[v];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:m,layout:h}=this.options;if(m===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(v1);return}this.isUpdating||this.nodes.forEach(TE),this.isUpdating=!1,this.nodes.forEach(AE),this.nodes.forEach(bE),this.nodes.forEach(xE),this.clearAllSnapshots();const m=un.now();oe.delta=Vn(0,1e3/60,m-oe.timestamp),oe.timestamp=m,oe.isProcessing=!0,lf.update.process(oe),lf.preRender.process(oe),lf.render.process(oe),oe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(EE),this.sharedNodes.forEach(zE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ye(this.snapshot.measuredBox.x)&&!ye(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m){const h=s(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Xy(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;d&&(m||Na(this.latestValues)||v)&&(u(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let h=this.removeElementScroll(m);return d&&(h=this.removeTransform(h)),BE(h),{animationId:this.root.animationId,measuredBox:m,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:m}=this.options;if(!m)return qt();const h=m.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(_E))){const{scroll:v}=this.root;v&&(ji(h.x,v.offset.x),ji(h.y,v.offset.y))}return h}removeElementScroll(d){var m;const h=qt();if($e(h,d),!((m=this.scroll)===null||m===void 0)&&m.wasRoot)return h;for(let p=0;p<this.path.length;p++){const v=this.path[p],{scroll:y,options:x}=v;v!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&$e(h,d),ji(h.x,y.offset.x),ji(h.y,y.offset.y))}return h}applyTransform(d,m=!1){const h=qt();$e(h,d);for(let p=0;p<this.path.length;p++){const v=this.path[p];!m&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Bi(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Na(v.latestValues)&&Bi(h,v.latestValues)}return Na(this.latestValues)&&Bi(h,this.latestValues),h}removeTransform(d){const m=qt();$e(m,d);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!Na(p.latestValues))continue;Gf(p.latestValues)&&p.updateSnapshot();const v=qt(),y=p.measurePageBox();$e(v,y),c1(m,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,v)}return Na(this.latestValues)&&c1(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==oe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var m;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!(!this.layout||!(y||x))){if(this.resolvedRelativeTargetAt=oe.timestamp,!this.targetDelta&&!this.relativeTarget){const E=this.getClosestProjectingParent();E&&E.layout&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qt(),this.relativeTargetOrigin=qt(),al(this.relativeTargetOrigin,this.layout.layoutBox,E.layout.layoutBox),$e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=qt(),this.targetWithTransforms=qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):$e(this.target,this.layout.layoutBox),Uy(this.target,this.targetDelta)):$e(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const E=this.getClosestProjectingParent();E&&!!E.resumingFrom==!!this.resumingFrom&&!E.options.layoutScroll&&E.target&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qt(),this.relativeTargetOrigin=qt(),al(this.relativeTargetOrigin,this.target,E.target),$e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Gf(this.parent.latestValues)||Ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const m=this.getLead(),h=!!this.resumingFrom||this!==m;let p=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===oe.timestamp&&(p=!1),p)return;const{layout:v,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||y))return;$e(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,E=this.treeScale.y;L8(this.layoutCorrected,this.treeScale,this.path,h),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=qt());const{target:w}=m;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(s1(this.prevProjectionDelta.x,this.projectionDelta.x),s1(this.prevProjectionDelta.y,this.projectionDelta.y)),nl(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==E||!p1(this.projectionDelta.x,this.prevProjectionDelta.x)||!p1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var m;if((m=this.options.visualElement)===null||m===void 0||m.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oi(),this.projectionDelta=Oi(),this.projectionDeltaWithTransform=Oi()}setAnimationOrigin(d,m=!1){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},y=Oi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const x=qt(),E=h?h.source:void 0,w=this.layout?this.layout.source:void 0,C=E!==w,O=this.getStack(),R=!O||O.members.length<=1,L=!!(C&&!R&&this.options.crossfade===!0&&!this.path.some(OE));this.animationProgress=0;let N;this.mixTargetDelta=$=>{const U=$/1e3;b1(y.x,d.x,U),b1(y.y,d.y,U),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(al(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),DE(this.relativeTarget,this.relativeTargetOrigin,x,U),N&&mE(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=qt()),$e(N,this.relativeTarget)),C&&(this.animationValues=v,oE(v,p,this.latestValues,U,L,R)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ua(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ot.update(()=>{oo.hasAnimatedSinceResize=!0,this.currentAnimation=nE(0,g1,{...d,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(g1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:h,layout:p,latestValues:v}=d;if(!(!m||!h||!p)){if(this!==d&&this.layout&&p&&Fy(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||qt();const y=ye(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+y;const x=ye(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}$e(m,h),Bi(m,v),nl(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new pE),this.sharedNodes.get(d).add(m);const p=m.options.initialPromotionConfig;m.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:m}=this.options;return m?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:m}=this.options;return m?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(m=!0),!m)return;const p={};h.z&&pf("z",d,p,this.animationValues);for(let v=0;v<mf.length;v++)pf(`rotate${mf[v]}`,d,p,this.animationValues),pf(`skew${mf[v]}`,d,p,this.animationValues);d.render();for(const v in p)d.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);d.scheduleRender()}getProjectionStyles(d){var m,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return vE;const p={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=so(d==null?void 0:d.pointerEvents)||"",p.transform=v?v(this.latestValues,""):"none",p;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const C={};return this.options.layoutId&&(C.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,C.pointerEvents=so(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!Na(this.latestValues)&&(C.transform=v?v({},""):"none",this.hasProjected=!1),C}const x=y.animationValues||y.latestValues;this.applyTransformsToTarget(),p.transform=gE(this.projectionDeltaWithTransform,this.treeScale,x),v&&(p.transform=v(x,p.transform));const{x:E,y:w}=this.projectionDelta;p.transformOrigin=`${E.origin*100}% ${w.origin*100}% 0`,y.animationValues?p.opacity=y===this?(h=(m=x.opacity)!==null&&m!==void 0?m:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:p.opacity=y===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const C in hl){if(x[C]===void 0)continue;const{correct:O,applyTo:R,isCSSVariable:L}=hl[C],N=p.transform==="none"?x[C]:O(x[C],y);if(R){const $=R.length;for(let U=0;U<$;U++)p[R[U]]=N}else L?this.options.visualElement.renderState.vars[C]=N:p[C]=N}return this.options.layoutId&&(p.pointerEvents=y===this?so(d==null?void 0:d.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var m;return(m=d.currentAnimation)===null||m===void 0?void 0:m.stop()}),this.root.nodes.forEach(v1),this.root.sharedNodes.clear()}}}function bE(n){n.updateLayout()}function xE(n){var i;const l=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&l&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:u}=n.layout,{animationType:f}=n.options,d=l.source!==n.layout.source;f==="size"?Xe(y=>{const x=d?l.measuredBox[y]:l.layoutBox[y],E=ye(x);x.min=s[y].min,x.max=x.min+E}):Fy(f,l.layoutBox,s)&&Xe(y=>{const x=d?l.measuredBox[y]:l.layoutBox[y],E=ye(s[y]);x.max=x.min+E,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+E)});const m=Oi();nl(m,s,l.layoutBox);const h=Oi();d?nl(h,n.applyTransform(u,!0),l.measuredBox):nl(h,s,l.layoutBox);const p=!Xy(m);let v=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:E}=y;if(x&&E){const w=qt();al(w,l.layoutBox,x.layoutBox);const C=qt();al(C,s,E.layoutBox),Qy(w,C)||(v=!0),y.options.layoutRoot&&(n.relativeTarget=C,n.relativeTargetOrigin=w,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:l,delta:h,layoutDelta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function SE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function wE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function EE(n){n.clearSnapshot()}function v1(n){n.clearMeasurements()}function TE(n){n.isLayoutDirty=!1}function AE(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function y1(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function CE(n){n.resolveTargetDelta()}function ME(n){n.calcProjection()}function RE(n){n.resetSkewAndRotation()}function zE(n){n.removeLeadSnapshot()}function b1(n,i,l){n.translate=Vt(i.translate,0,l),n.scale=Vt(i.scale,1,l),n.origin=i.origin,n.originPoint=i.originPoint}function x1(n,i,l,s){n.min=Vt(i.min,l.min,s),n.max=Vt(i.max,l.max,s)}function DE(n,i,l,s){x1(n.x,i.x,l.x,s),x1(n.y,i.y,l.y,s)}function OE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const jE={duration:.45,ease:[.4,0,.1,1]},S1=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),w1=S1("applewebkit/")&&!S1("chrome/")?Math.round:je;function E1(n){n.min=w1(n.min),n.max=w1(n.max)}function BE(n){E1(n.x),E1(n.y)}function Fy(n,i,l){return n==="position"||n==="preserve-aspect"&&!V8(m1(i),m1(l),.2)}function _E(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const VE=Ky({attachResizeListener:(n,i)=>vl(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),gf={current:void 0},Jy=Ky({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!gf.current){const n=new VE({});n.mount(window),n.setOptions({layoutScroll:!0}),gf.current=n}return gf.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),NE={pan:{Feature:W8},drag:{Feature:J8,ProjectionNode:Jy,MeasureLayout:Yy}};function T1(n,i,l){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,f=s[u];f&&Ot.postRender(()=>f(i,Dl(i)))}class LE extends da{mount(){const{current:i}=this.node;i&&(this.unmount=GS(i,(l,s)=>(T1(this.node,s,"Start"),u=>T1(this.node,u,"End"))))}unmount(){}}class UE extends da{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zl(vl(this.node.current,"focus",()=>this.onFocus()),vl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function A1(n,i,l){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),f=s[u];f&&Ot.postRender(()=>f(i,Dl(i)))}class kE extends da{mount(){const{current:i}=this.node;i&&(this.unmount=ZS(i,(l,s)=>(A1(this.node,s,"Start"),(u,{success:f})=>A1(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qf=new WeakMap,vf=new WeakMap,HE=n=>{const i=Qf.get(n.target);i&&i(n)},PE=n=>{n.forEach(HE)};function qE({root:n,...i}){const l=n||document;vf.has(l)||vf.set(l,{});const s=vf.get(l),u=JSON.stringify(i);return s[u]||(s[u]=new IntersectionObserver(PE,{root:n,...i})),s[u]}function YE(n,i,l){const s=qE(i);return Qf.set(n,l),s.observe(n),()=>{Qf.delete(n),s.unobserve(n)}}const GE={some:0,all:1};class $E extends da{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:u="some",once:f}=i,d={root:l?l.current:void 0,rootMargin:s,threshold:typeof u=="number"?u:GE[u]},m=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,f&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:y}=this.node.getProps(),x=p?v:y;x&&x(h)};return YE(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(XE(i,l))&&this.startObserver()}unmount(){}}function XE({viewport:n={}},{viewport:i={}}={}){return l=>n[l]!==i[l]}const QE={inView:{Feature:$E},tap:{Feature:kE},focus:{Feature:UE},hover:{Feature:LE}},ZE={layout:{ProjectionNode:Jy,MeasureLayout:Yy}},Zf={current:null},Wy={current:!1};function KE(){if(Wy.current=!0,!!fd)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Zf.current=n.matches;n.addListener(i),i()}else Zf.current=!1}const FE=[...wy,he,ca],JE=n=>FE.find(Sy(n)),WE=new WeakMap;function IE(n,i,l){for(const s in i){const u=i[s],f=l[s];if(me(u))n.addValue(s,u);else if(me(f))n.addValue(s,fl(u,{owner:n}));else if(f!==u)if(n.hasValue(s)){const d=n.getValue(s);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(s);n.addValue(s,fl(d!==void 0?d:u,{owner:n}))}}for(const s in l)i[s]===void 0&&n.removeValue(s);return i}const C1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tT{scrapeMotionValuesFromProps(i,l,s){return{}}constructor({parent:i,props:l,presenceContext:s,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=un.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,Ot.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:v}=d;this.onUpdate=v,this.latestValues=h,this.baseTarget={...h},this.initialValues=l.initial?{...h}:{},this.renderState=p,this.parent=i,this.props=l,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!f,this.isControllingVariants=Vo(l),this.isVariantNode=Uv(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(l,{},this);for(const E in x){const w=x[E];h[E]!==void 0&&me(w)&&w.set(h[E],!1)}}mount(i){this.current=i,WE.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,s)=>this.bindToMotionValue(s,l)),Wy.current||KE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ua(this.notifyUpdate),ua(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=Ya.has(i);s&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",m=>{this.latestValues[i]=m,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),f=l.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{u(),f(),d&&d(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Hi){const l=Hi[i];if(!l)continue;const{isEnabled:s,Feature:u}=l;if(!this.features[i]&&u&&s(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):qt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let s=0;s<C1.length;s++){const u=C1[s];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=IE(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const s=this.values.get(i);l!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&l!==void 0&&(s=fl(l===null?void 0:l,{owner:this}),this.addValue(i,s)),s}readValue(i,l){var s;let u=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(s=this.getBaseTargetFromProps(this.props,i))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,i,this.options);return u!=null&&(typeof u=="string"&&(by(u)||uy(u))?u=parseFloat(u):!JE(u)&&ca.test(l)&&(u=gy(i,l)),this.setBaseTarget(i,me(u)?u.get():u)),me(u)?u.get():u}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){var l;const{initial:s}=this.props;let u;if(typeof s=="string"||typeof s=="object"){const d=Bd(this.props,s,(l=this.presenceContext)===null||l===void 0?void 0:l.custom);d&&(u=d[i])}if(s&&u!==void 0)return u;const f=this.getBaseTargetFromProps(this.props,i);return f!==void 0&&!me(f)?f:this.initialValues[i]!==void 0&&u===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new gd),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}}class Iy extends tT{constructor(){super(...arguments),this.KeyframeResolver=Ey}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:s}){delete l[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;me(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function eT(n){return window.getComputedStyle(n)}class nT extends Iy{constructor(){super(...arguments),this.type="html",this.renderInstance=Kv}readValueFromInstance(i,l){if(Ya.has(l))return h6(i,l);{const s=eT(i),u=(Ad(l)?s.getPropertyValue(l):s[l])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:l}){return ky(i,l)}build(i,l,s){Rd(i,l,s.transformTemplate)}scrapeMotionValuesFromProps(i,l,s){return _d(i,l,s)}}class aT extends Iy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=qt,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Zv(this.current,this.renderState)}}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(Ya.has(l)){const s=py(l);return s&&s.default||0}return l=Fv.has(l)?l:Td(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,s){return Wv(i,l,s)}onBindTransform(){this.current&&!this.renderState.dimensions&&Ot.postRender(this.updateDimensions)}build(i,l,s){Od(i,l,this.isSVGTag,s.transformTemplate)}renderInstance(i,l,s,u){Jv(i,l,s,u)}mount(i){this.isSVGTag=jd(i.tagName),super.mount(i)}}const iT=(n,i)=>Dd(n)?new aT(i):new nT(i,{allowProjection:n!==A.Fragment}),rT=Hw({...M8,...QE,...NE,...ZE},iT),yf=nw(rT),lT=()=>{const[n,i]=A.useState([]),[l,s]=A.useState(null),[u,f]=A.useState(null),[d,m]=A.useState(!1),[h,p]=A.useState([{name:"Curiosità Pokémon",color:"#EE1515",questions:[{question:"Qual è stato il primo Pokémon disegnato da Game Freak?",answer:"Rhydon",points:100,answered:!1},{question:"Quante varianti di macchie può avere Spinda?",answer:"4 miliardi",points:200,answered:!1},{question:"Quale Pokémon si dice sia stato un umano in vita passata?",answer:"Yamask",points:300,answered:!1},{question:"Quale Pokémon si dice possa essere Mew di notte?",answer:"Smeargle",points:400,answered:!1},{question:"Quale errore di ortografia famoso è apparso in Pokémon GO?",answer:"Pikahcu (invece di Pikachu)",points:500,answered:!1}]},{name:"Pokémon Specifici",color:"#3B4CCA",questions:[{question:"Quale Pokémon è noto per non poter mai guardare a nord?",answer:"Nosepass",points:100,answered:!1},{question:"Quale Pokémon è considerato la versione 'economica' di Chimchar?",answer:"Pansear",points:200,answered:!1},{question:"Quale Pokémon potrebbe essere associato a Bud Spencer?",answer:"Hippowdon",points:300,answered:!1},{question:"Quale Pokémon acquatico ha un nome che suggerisce freddezza emotiva?",answer:"Tentacool",points:400,answered:!1},{question:"Quale Pokémon ha le lancette di un orologio sul corpo?",answer:"Hoothoot",points:500,answered:!1}]},{name:"Allenatori",color:"#FFDE00",questions:[{question:"Quale tipo di allenatore dice spesso 'C'è solo un capitano'?",answer:"Marinaio",points:100,answered:!1},{question:"Quale tipo di allenatore è associato a strumenti musicali?",answer:"Chitarrista",points:200,answered:!1},{question:"Quale tipo di allenatore usa tattiche furtive?",answer:"Ninja",points:300,answered:!1},{question:"Quale tipo di allenatore è calvo e muscoloso?",answer:"ZuccaPelata",points:400,answered:!1},{question:"Quale tipo di allenatore è noto per il suo abbigliamento minimal?",answer:"Fantallenatore",points:500,answered:!1}]},{name:"GCC Pokémon",color:"#FF9C54",questions:[{question:"Quante carte si pescano all'inizio di una partita nel GCC Pokémon?",answer:"7",points:100,answered:!1},{question:"Qual è il valore di ritirata più alto mai stampato su una carta?",answer:"5 energie",points:200,answered:!1},{question:"In che anno è stato rilasciato il primo Set Base?",answer:"1996 in Giappone, 1999 nel resto del mondo",points:300,answered:!1},{question:"C'è un limite massimo di carte in mano durante una partita ufficiale?",answer:"No, ma se non puoi pescare all'inizio del turno perdi",points:400,answered:!1},{question:"Come si chiama la meccanica di Reshiram & Charizard GX?",answer:"Tag Team GX",points:500,answered:!1}]},{name:"Serie Pokémon",color:"#78C850",questions:[{question:"Chi è il protagonista della prima serie animata Pokémon?",answer:"Ash Ketchum",points:100,answered:!1},{question:"Quale Pokémon leggendario appare nel primo film?",answer:"Mewtwo",points:200,answered:!1},{question:"Come si chiamano i nemici ricorrenti nella serie animata?",answer:"Team Rocket (Jessie, James e Meowth)",points:300,answered:!1},{question:"Quante stagioni ha la serie animata originale?",answer:"23 stagioni (fino a Pokémon Esplorazioni)",points:400,answered:!1},{question:"Chi è il successore di Ash come protagonista?",answer:"Liko e Roy",points:500,answered:!1}]}]);A.useEffect(()=>{const w=localStorage.getItem("quizPlayers");if(w){const C=JSON.parse(w);i(C),C.length>0&&s(C[0])}},[]);const v=(w,C,O)=>{C.answered||!l||(f({category:w,question:C,categoryColor:O}),m(!1))},y=w=>{p(h.map(C=>({...C,questions:C.questions.map(O=>O===w?{...O,answered:!0}:O)})))},x=()=>{if(!l||!u)return;const w=n.map(C=>C.id===l.id?{...C,score:C.score+u.question.points}:C);i(w),localStorage.setItem("quizPlayers",JSON.stringify(w)),s({...l,score:l.score+u.question.points}),y(u.question),f(null)},E=()=>{u&&(y(u.question),f(null))};return T.jsxs(cT,{children:[T.jsxs(pT,{to:"/game",children:[T.jsx(ld,{})," Torna ai giochi"]}),T.jsx(gT,{children:"Sfida Quiz Pokémon"}),T.jsxs(vT,{children:[T.jsx(yT,{children:h.map((w,C)=>T.jsxs(ST,{$color:w.color,children:[T.jsx(bT,{}),w.name]},C))}),[0,1,2,3,4].map(w=>T.jsx(wT,{children:h.map((C,O)=>{const R=C.questions[w];return T.jsx(ET,{$color:C.color,$answered:R.answered,onClick:()=>v(C.name,R,C.color),children:R.answered?T.jsx(AT,{children:T.jsx(xT,{})}):T.jsx(TT,{children:R.points})},O)})},w))]}),T.jsxs(CT,{children:[T.jsxs(MT,{children:[T.jsx(RT,{children:"Allenatori"}),T.jsx(zT,{children:l?"Scegli una casella per sfidare la tua conoscenza":"Scegli un allenatore per iniziare"})]}),T.jsx(DT,{children:n.map(w=>T.jsxs(OT,{$active:(l==null?void 0:l.id)===w.id,onClick:()=>s(w),children:[T.jsx(R1,{src:w.avatar,alt:w.name}),T.jsxs(jT,{children:[T.jsx(BT,{children:w.name}),T.jsxs(_T,{children:[T.jsx(M1,{})," ",w.score," punti"]})]}),(l==null?void 0:l.id)===w.id&&T.jsx(VT,{children:T.jsx(g3,{})})]},w.id))})]}),T.jsx(jS,{children:u&&T.jsx(NT,{as:yf.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:T.jsxs(LT,{as:yf.div,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},$color:u.categoryColor,children:[T.jsxs(UT,{children:[T.jsx(kT,{$color:u.categoryColor,children:u.category}),T.jsxs(HT,{children:[T.jsx(M1,{})," ",u.question.points," punti"]})]}),T.jsx(PT,{children:u.question.question}),T.jsx(qT,{children:d?T.jsxs(YT,{as:yf.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[T.jsx(GT,{children:u.question.answer}),T.jsxs($T,{children:[T.jsxs(z1,{$color:"#4CAF50",onClick:x,children:[T.jsx(Sv,{})," Corretta"]}),T.jsxs(z1,{$color:"#EE1515",onClick:E,children:[T.jsx(go,{})," Sbagliata"]})]})]}):T.jsxs(XT,{onClick:()=>m(!0),children:[T.jsx(f3,{})," Mostra Risposta"]})}),T.jsxs(QT,{children:[T.jsx(R1,{src:l==null?void 0:l.avatar,alt:l==null?void 0:l.name,$small:!0}),T.jsx("span",{children:l==null?void 0:l.name})]})]})})}),T.jsxs(fT,{children:[T.jsx(bl,{className:"ball1"}),T.jsx(bl,{className:"ball2"}),T.jsx(dT,{className:"ball3"}),T.jsx(hT,{className:"ball4"}),T.jsx(mT,{className:"ball5"})]})]})},yl=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,sT=ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,oT=ue`
  0% { opacity: 0.3; }
  50% { opacity: 0.8; }
  100% { opacity: 0.3; }
`,uT=ue`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,cT=_.div`
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
`,fT=_.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,bl=_.div`
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
    animation: ${yl} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${yl} 10s ease-in-out infinite reverse;
  }
`,dT=_(bl)`
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
    animation: ${yl} 15s ease-in-out infinite;
  }
`,hT=_(bl)`
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
    animation: ${yl} 18s ease-in-out infinite reverse;
  }
`,mT=_(bl)`
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
    animation: ${yl} 14s ease-in-out infinite;
  }
`,pT=_(Gi)`
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
`,gT=_.h1`
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
`,vT=_.div`
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
`,yT=_.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,bT=_.div`
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
`,xT=_.div`
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
  animation: ${uT} 1s ease-in-out;
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
`,M1=_.div`
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
`,ST=_.div`
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
`,wT=_.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,ET=_.div`
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

  ${n=>!n.$answered&&Cl`
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
`,TT=_.div`
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
`,AT=_.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`,CT=_.div`
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
`,MT=_.div`
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
`,RT=_.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,zT=_.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`,DT=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,OT=_.div`
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

  ${n=>n.$active&&Cl`
      animation: ${sT} 2s infinite ease-in-out;
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
`,R1=_.img`
  width: ${n=>n.$small?"30px":"45px"};
  height: ${n=>n.$small?"30px":"45px"};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`,jT=_.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,BT=_.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,_T=_.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,VT=_.div`
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
  animation: ${oT} 2s infinite;
`,NT=_.div`
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
`,LT=_.div`
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
`,UT=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`,kT=_.div`
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
`,HT=_.div`
  background: rgba(255, 255, 255, 0.15);
  color: #ffde00;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.3);
  display: flex;
  align-items: center;
`,PT=_.div`
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
`,qT=_.div`
  padding: 20px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  position: relative;
  z-index: 1;
`,YT=_.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,GT=_.div`
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
`,$T=_.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`,z1=_.button`
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
`,XT=_.button`
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
`,QT=_.div`
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
`;function ZT(){return T.jsx("div",{children:"Wheel"})}const D1=[{id:1,name:"Pikachu",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,name:"Charizard",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{id:3,name:"Bulbasaur",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:4,name:"Squirtle",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},{id:5,name:"Jigglypuff",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"},{id:6,name:"Mewtwo",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"},{id:7,name:"Eevee",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:8,name:"Snorlax",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:9,name:"Gengar",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"},{id:10,name:"Gyarados",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"},{id:11,name:"Dragonite",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"},{id:12,name:"Mew",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"}],bf=20,Ws=500,KT=5e3;function FT(){const[n,i]=A.useState([]),[l,s]=A.useState(null),[u,f]=A.useState([]),[d,m]=A.useState(null),[h,p]=A.useState("inactive"),[v,y]=A.useState(0),[x,E]=A.useState(!1),[w,C]=A.useState(Ws),[O,R]=A.useState(""),[L,N]=A.useState(!1),[$,U]=A.useState(!1),G=A.useRef(null),Q=To();A.useEffect(()=>{const vt=localStorage.getItem("quizPlayers");if(vt){const Yt=JSON.parse(vt);i(Yt),Yt.length>0&&s(Yt[0])}else Q("/")},[Q]),A.useEffect(()=>{const vt=[...D1].sort(()=>.5-Math.random());f(vt)},[]),A.useEffect(()=>(h==="active"&&!x&&v<bf&&(G.current=setTimeout(()=>{y(vt=>vt+1),C(vt=>Math.max(vt-Ws/bf,0))},KT)),()=>{G.current&&clearTimeout(G.current)}),[h,x,v]);const F=vt=>{h==="inactive"&&(m(vt),p("active"),y(0),C(Ws),E(!1),R(""),N(!1))},X=()=>{E(!x)},tt=()=>{const vt=O.trim().toLowerCase(),Yt=d.name.toLowerCase(),Gt=vt===Yt;if(U(Gt),N(!0),p("completed"),Gt&&l){const Z=n.map(J=>J.id===l.id?{...J,score:J.score+Math.round(w)}:J);i(Z),localStorage.setItem("quizPlayers",JSON.stringify(Z)),s({...l,score:l.score+Math.round(w)})}},Rt=()=>{m(null),p("inactive"),y(0),C(Ws),E(!1),R(""),N(!1);const vt=[...D1].sort(()=>.5-Math.random());f(vt)},ie=v/bf*100;return T.jsxs(WT,{children:[T.jsxs(aA,{to:"/game",children:[T.jsx(ld,{})," Torna ai giochi"]}),T.jsx(iA,{children:"Chi è quel Pokémon?"}),h==="inactive"?T.jsx(rA,{children:u.map(vt=>T.jsx(lA,{onClick:()=>F(vt),children:T.jsx(sA,{children:T.jsxs(oA,{children:[T.jsx(uA,{}),T.jsx(cA,{children:vt.id})]})})},vt.id))}):T.jsxs(fA,{children:[T.jsxs(dA,{children:[T.jsxs(hA,{children:[T.jsx(mA,{children:"Punteggio:"}),T.jsx(pA,{children:Math.round(w)})]}),T.jsx(gA,{children:h==="active"&&T.jsx(vA,{onClick:X,children:x?T.jsxs(T.Fragment,{children:[T.jsx(p3,{})," Riprendi"]}):T.jsxs(T.Fragment,{children:[T.jsx(m3,{})," Pausa"]})})})]}),T.jsxs(yA,{children:[T.jsx(bA,{src:d==null?void 0:d.image,alt:"Pokémon da indovinare"}),T.jsx(xA,{$revealedPieces:v})]}),T.jsxs(SA,{children:[T.jsx(wA,{$percentage:ie}),T.jsxs(EA,{children:["Rivelato: ",Math.round(ie),"%"]})]}),!L&&T.jsxs(TA,{children:[T.jsx(AA,{type:"text",value:O,onChange:vt=>R(vt.target.value),placeholder:"Nome del Pokémon...",disabled:h==="completed"}),T.jsx(CA,{onClick:tt,disabled:!O.trim()||h==="completed",children:"Indovina"})]}),L&&T.jsxs(MA,{$correct:$,children:[T.jsx(RA,{children:$?T.jsx(Sv,{}):T.jsx(go,{})}),T.jsx(zA,{children:$?"Corretto!":"Sbagliato!"}),T.jsx(DA,{children:$?`Hai guadagnato ${Math.round(w)} punti!`:`Era ${d.name}. Nessun punto guadagnato.`}),T.jsx(OA,{onClick:Rt,children:"Nuova Sfida"})]})]}),T.jsxs(jA,{children:[T.jsx(BA,{src:l==null?void 0:l.avatar,alt:l==null?void 0:l.name}),T.jsx(_A,{children:l==null?void 0:l.name}),T.jsxs(VA,{children:[(l==null?void 0:l.score)||0," punti"]})]}),T.jsxs(IT,{children:[T.jsx(Sl,{className:"ball1"}),T.jsx(Sl,{className:"ball2"}),T.jsx(tA,{className:"ball3"}),T.jsx(eA,{className:"ball4"}),T.jsx(nA,{className:"ball5"})]})]})}const xl=ue`
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
`;const t2=ue`
  from { opacity: 0; }
  to { opacity: 1; }
`,JT=ue`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,WT=_.div`
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
`,IT=_.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,Sl=_.div`
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
    animation: ${xl} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${xl} 10s ease-in-out infinite reverse;
  }
`,tA=_(Sl)`
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
    animation: ${xl} 15s ease-in-out infinite;
  }
`,eA=_(Sl)`
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
    animation: ${xl} 18s ease-in-out infinite reverse;
  }
`,nA=_(Sl)`
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
    animation: ${xl} 14s ease-in-out infinite;
  }
`,aA=_(Gi)`
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
`,iA=_.h1`
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
`,rA=_.div`
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
`,lA=_.div`
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
      animation: ${JT} 1s;
    }
  }
`,sA=_.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`,oA=_.div`
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
`,uA=_.div`
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
`,cA=_.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,fA=_.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  z-index: 1;
  animation: ${t2} 0.5s ease;
`,dA=_.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`,hA=_.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`,mA=_.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 10px;
`,pA=_.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
`,gA=_.div`
  display: flex;
  gap: 1rem;
`,vA=_.button`
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
`,yA=_.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`,bA=_.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #233975;
`,xA=_.div`
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
  ${({$revealedPieces:n})=>Cl`
      ${Array.from({length:20}).map((i,l)=>`
        &::before:nth-of-type(${l+1}) {
          content: '';
          position: absolute;
          top: ${Math.floor(l/5)*25}%;
          left: ${l%5*20}%;
          width: 20%;
          height: 25%;
          background: #000;
          opacity: ${l<n?0:1};
          transition: opacity 0.5s ease;
          z-index: 1;
        }
      `).join("")}
    `}
`,SA=_.div`
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,wA=_.div`
  height: 100%;
  width: ${n=>n.$percentage}%;
  background: linear-gradient(90deg, #ee1515, #ff9c54);
  border-radius: 8px;
  transition: width 0.5s ease;
`,EA=_.div`
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
`,TA=_.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,AA=_.input`
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
`,CA=_.button`
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
`,MA=_.div`
  width: 100%;
  background: ${n=>n.$correct?"rgba(76, 175, 80, 0.2)":"rgba(244, 67, 54, 0.2)"};
  border: 3px solid ${n=>n.$correct?"#4CAF50":"#F44336"};
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${t2} 0.5s ease;
`,RA=_.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffde00;
`,zA=_.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffde00;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,DA=_.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`,OA=_.button`
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
`,jA=_.div`
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
`,BA=_.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
`,_A=_.div`
  font-weight: 600;
  margin-right: 1rem;
`,VA=_.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffde00;
`,NA="/assets/Pokemon%20Mystery%20Dungeon%20Red_Blue%20Rescue%20Team%20Full%20OST%20_6EHwdMQj3i4_00_00_00_00_05_00_part_-CfduThOI.mp3",LA="/assets/003%20-%20Welcome%20to%20the%20World%20of%20Poke%CC%81mon!-Boc2-QOp.mp3",Kr={"/":LA,"/game":NA},UA=A.createContext({isPlaying:!1,volume:.5,toggleAudio:()=>{},changeVolume:n=>{},currentAudioPath:""}),kA=()=>{const{pathname:n}=fa(),[i]=A.useState(new Audio),[l,s]=A.useState(!1),[u,f]=A.useState(.5),[d,m]=A.useState(!1),[h,p]=A.useState(""),v=A.useRef(null),y=()=>{l?(i.pause(),s(!1),localStorage.setItem("pokemonQuizAudioEnabled","false")):(i.volume=u,i.loop=!0,i.play().then(()=>{s(!0),localStorage.setItem("pokemonQuizAudioEnabled","true")}).catch(C=>console.log("Audio playback error:",C)))},x=C=>{const O=parseFloat(C.toFixed(2));f(O),i.volume=O,localStorage.setItem("pokemonQuizAudioVolume",O.toString())},E=C=>{if(Kr[C])return Kr[C];for(const O in Kr)if(C.startsWith(O)&&O!=="/")return Kr[O];return Kr["/"]};A.useEffect(()=>{const C=localStorage.getItem("pokemonQuizAudioEnabled")==="true",O=localStorage.getItem("pokemonQuizAudioVolume");if(O){const R=parseFloat(O);f(R),i.volume=R}else i.volume=u;C&&s(!0)},[i]),A.useEffect(()=>{const C=E(n);if(C!==h){const O=!i.paused;i.currentTime,i.src=C,p(C),O&&l&&i.play().catch(R=>console.log("Audio playback error:",R))}else l&&i.paused&&i.play().catch(O=>console.log("Audio playback error:",O))},[n,i,l,h]),A.useEffect(()=>{const C=O=>{v.current&&!v.current.contains(O.target)&&m(!1)};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]);const w=()=>u===0||!l?T.jsx(b3,{}):u<.5?T.jsx(y3,{}):T.jsx(x3,{});return T.jsx(UA.Provider,{value:{isPlaying:l,volume:u,toggleAudio:y,changeVolume:x,currentAudioPath:h},children:T.jsxs(PA,{ref:v,children:[T.jsx(qA,{onClick:y,onMouseEnter:()=>m(!0),children:w()}),T.jsx(YA,{$visible:d,children:T.jsx(GA,{type:"range",min:"0",max:"0.3",step:"0.01",value:u,onChange:C=>x(parseFloat(C.target.value))})})]})})},HA=()=>T.jsxs(Xx,{children:[T.jsx(kA,{}),T.jsxs(Ex,{children:[T.jsx(Mi,{path:"/",element:T.jsx(w3,{})}),T.jsx(Mi,{path:"/game",element:T.jsx(tS,{})}),T.jsx(Mi,{path:"/game/categories",element:T.jsx(lT,{})}),T.jsx(Mi,{path:"/game/wheel",element:T.jsx(ZT,{})}),T.jsx(Mi,{path:"/game/image",element:T.jsx(FT,{})})]})]}),PA=_.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
`,qA=_.button`
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
`,YA=_.div`
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
`,GA=_.input`
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
`,$A=A.createContext(void 0),XA=({children:n})=>{const[i,l]=A.useState(0),[s,u]=A.useState(0),[f,d]=A.useState(!1),m={score:i,setScore:l,currentQuestion:s,setCurrentQuestion:u,isGameActive:f,setIsGameActive:d};return T.jsx($A.Provider,{value:m,children:n})};Bb.createRoot(document.getElementById("root")).render(T.jsx(A.StrictMode,{children:T.jsx(XA,{children:T.jsx(HA,{})})}));
