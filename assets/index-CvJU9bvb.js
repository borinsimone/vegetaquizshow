(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=s(u);fetch(u.href,f)}})();function Dx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jc={exports:{}},Yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function Ox(){if(Dp)return Yr;Dp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(l,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var m in u)m!=="key"&&(f[m]=u[m])}else f=u;return u=f.ref,{$$typeof:n,type:l,key:d,ref:u!==void 0?u:null,props:f}}return Yr.Fragment=i,Yr.jsx=s,Yr.jsxs=s,Yr}var Op;function jx(){return Op||(Op=1,Jc.exports=Ox()),Jc.exports}var w=jx(),Wc={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Bx(){if(jp)return ut;jp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,M={};function D(R,$,nt){this.props=R,this.context=$,this.refs=M,this.updater=nt||E}D.prototype.isReactComponent={},D.prototype.setState=function(R,$){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,$,"setState")},D.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function C(){}C.prototype=D.prototype;function L(R,$,nt){this.props=R,this.context=$,this.refs=M,this.updater=nt||E}var V=L.prototype=new C;V.constructor=L,S(V,D.prototype),V.isPureReactComponent=!0;var P=Array.isArray,N={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function Q(R,$,nt,it,K,dt){return nt=dt.ref,{$$typeof:n,type:R,key:$,ref:nt!==void 0?nt:null,props:dt}}function F(R,$){return Q(R.type,$,void 0,void 0,void 0,R.props)}function X(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function tt(R){var $={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(nt){return $[nt]})}var Rt=/\/+/g;function ie(R,$){return typeof R=="object"&&R!==null&&R.key!=null?tt(""+R.key):$.toString(36)}function vt(){}function Gt(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(vt,vt):(R.status="pending",R.then(function($){R.status==="pending"&&(R.status="fulfilled",R.value=$)},function($){R.status==="pending"&&(R.status="rejected",R.reason=$)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function Yt(R,$,nt,it,K){var dt=typeof R;(dt==="undefined"||dt==="boolean")&&(R=null);var lt=!1;if(R===null)lt=!0;else switch(dt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(R.$$typeof){case n:case i:lt=!0;break;case v:return lt=R._init,Yt(lt(R._payload),$,nt,it,K)}}if(lt)return K=K(R),lt=it===""?"."+ie(R,0):it,P(K)?(nt="",lt!=null&&(nt=lt.replace(Rt,"$&/")+"/"),Yt(K,$,nt,"",function(Et){return Et})):K!=null&&(X(K)&&(K=F(K,nt+(K.key==null||R&&R.key===K.key?"":(""+K.key).replace(Rt,"$&/")+"/")+lt)),$.push(K)),1;lt=0;var $t=it===""?".":it+":";if(P(R))for(var gt=0;gt<R.length;gt++)it=R[gt],dt=$t+ie(it,gt),lt+=Yt(it,$,nt,dt,K);else if(gt=x(R),typeof gt=="function")for(R=gt.call(R),gt=0;!(it=R.next()).done;)it=it.value,dt=$t+ie(it,gt++),lt+=Yt(it,$,nt,dt,K);else if(dt==="object"){if(typeof R.then=="function")return Yt(Gt(R),$,nt,it,K);throw $=String(R),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return lt}function Z(R,$,nt){if(R==null)return R;var it=[],K=0;return Yt(R,it,"","",function(dt){return $.call(nt,dt,K++)}),it}function J(R){if(R._status===-1){var $=R._result;$=$(),$.then(function(nt){(R._status===0||R._status===-1)&&(R._status=1,R._result=nt)},function(nt){(R._status===0||R._status===-1)&&(R._status=2,R._result=nt)}),R._status===-1&&(R._status=0,R._result=$)}if(R._status===1)return R._result.default;throw R._result}var I=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function ct(){}return ut.Children={map:Z,forEach:function(R,$,nt){Z(R,function(){$.apply(this,arguments)},nt)},count:function(R){var $=0;return Z(R,function(){$++}),$},toArray:function(R){return Z(R,function($){return $})||[]},only:function(R){if(!X(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},ut.Component=D,ut.Fragment=s,ut.Profiler=u,ut.PureComponent=L,ut.StrictMode=l,ut.Suspense=h,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ut.act=function(){throw Error("act(...) is not supported in production builds of React.")},ut.cache=function(R){return function(){return R.apply(null,arguments)}},ut.cloneElement=function(R,$,nt){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var it=S({},R.props),K=R.key,dt=void 0;if($!=null)for(lt in $.ref!==void 0&&(dt=void 0),$.key!==void 0&&(K=""+$.key),$)!Y.call($,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&$.ref===void 0||(it[lt]=$[lt]);var lt=arguments.length-2;if(lt===1)it.children=nt;else if(1<lt){for(var $t=Array(lt),gt=0;gt<lt;gt++)$t[gt]=arguments[gt+2];it.children=$t}return Q(R.type,K,void 0,void 0,dt,it)},ut.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:f,_context:R},R},ut.createElement=function(R,$,nt){var it,K={},dt=null;if($!=null)for(it in $.key!==void 0&&(dt=""+$.key),$)Y.call($,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(K[it]=$[it]);var lt=arguments.length-2;if(lt===1)K.children=nt;else if(1<lt){for(var $t=Array(lt),gt=0;gt<lt;gt++)$t[gt]=arguments[gt+2];K.children=$t}if(R&&R.defaultProps)for(it in lt=R.defaultProps,lt)K[it]===void 0&&(K[it]=lt[it]);return Q(R,dt,void 0,void 0,null,K)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(R){return{$$typeof:m,render:R}},ut.isValidElement=X,ut.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:J}},ut.memo=function(R,$){return{$$typeof:p,type:R,compare:$===void 0?null:$}},ut.startTransition=function(R){var $=N.T,nt={};N.T=nt;try{var it=R(),K=N.S;K!==null&&K(nt,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(ct,I)}catch(dt){I(dt)}finally{N.T=$}},ut.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ut.use=function(R){return N.H.use(R)},ut.useActionState=function(R,$,nt){return N.H.useActionState(R,$,nt)},ut.useCallback=function(R,$){return N.H.useCallback(R,$)},ut.useContext=function(R){return N.H.useContext(R)},ut.useDebugValue=function(){},ut.useDeferredValue=function(R,$){return N.H.useDeferredValue(R,$)},ut.useEffect=function(R,$){return N.H.useEffect(R,$)},ut.useId=function(){return N.H.useId()},ut.useImperativeHandle=function(R,$,nt){return N.H.useImperativeHandle(R,$,nt)},ut.useInsertionEffect=function(R,$){return N.H.useInsertionEffect(R,$)},ut.useLayoutEffect=function(R,$){return N.H.useLayoutEffect(R,$)},ut.useMemo=function(R,$){return N.H.useMemo(R,$)},ut.useOptimistic=function(R,$){return N.H.useOptimistic(R,$)},ut.useReducer=function(R,$,nt){return N.H.useReducer(R,$,nt)},ut.useRef=function(R){return N.H.useRef(R)},ut.useState=function(R){return N.H.useState(R)},ut.useSyncExternalStore=function(R,$,nt){return N.H.useSyncExternalStore(R,$,nt)},ut.useTransition=function(){return N.H.useTransition()},ut.version="19.0.0",ut}var Bp;function td(){return Bp||(Bp=1,Wc.exports=Bx()),Wc.exports}var A=td();const Qe=Dx(A);var Ic={exports:{}},$r={},tf={exports:{}},ef={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function _x(){return _p||(_p=1,function(n){function i(Z,J){var I=Z.length;Z.push(J);t:for(;0<I;){var ct=I-1>>>1,R=Z[ct];if(0<u(R,J))Z[ct]=J,Z[I]=R,I=ct;else break t}}function s(Z){return Z.length===0?null:Z[0]}function l(Z){if(Z.length===0)return null;var J=Z[0],I=Z.pop();if(I!==J){Z[0]=I;t:for(var ct=0,R=Z.length,$=R>>>1;ct<$;){var nt=2*(ct+1)-1,it=Z[nt],K=nt+1,dt=Z[K];if(0>u(it,I))K<R&&0>u(dt,it)?(Z[ct]=dt,Z[K]=I,ct=K):(Z[ct]=it,Z[nt]=I,ct=nt);else if(K<R&&0>u(dt,I))Z[ct]=dt,Z[K]=I,ct=K;else break t}}return J}function u(Z,J){var I=Z.sortIndex-J.sortIndex;return I!==0?I:Z.id-J.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var h=[],p=[],v=1,b=null,x=3,E=!1,S=!1,M=!1,D=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function V(Z){for(var J=s(p);J!==null;){if(J.callback===null)l(p);else if(J.startTime<=Z)l(p),J.sortIndex=J.expirationTime,i(h,J);else break;J=s(p)}}function P(Z){if(M=!1,V(Z),!S)if(s(h)!==null)S=!0,Gt();else{var J=s(p);J!==null&&Yt(P,J.startTime-Z)}}var N=!1,Y=-1,Q=5,F=-1;function X(){return!(n.unstable_now()-F<Q)}function tt(){if(N){var Z=n.unstable_now();F=Z;var J=!0;try{t:{S=!1,M&&(M=!1,C(Y),Y=-1),E=!0;var I=x;try{e:{for(V(Z),b=s(h);b!==null&&!(b.expirationTime>Z&&X());){var ct=b.callback;if(typeof ct=="function"){b.callback=null,x=b.priorityLevel;var R=ct(b.expirationTime<=Z);if(Z=n.unstable_now(),typeof R=="function"){b.callback=R,V(Z),J=!0;break e}b===s(h)&&l(h),V(Z)}else l(h);b=s(h)}if(b!==null)J=!0;else{var $=s(p);$!==null&&Yt(P,$.startTime-Z),J=!1}}break t}finally{b=null,x=I,E=!1}J=void 0}}finally{J?Rt():N=!1}}}var Rt;if(typeof L=="function")Rt=function(){L(tt)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,vt=ie.port2;ie.port1.onmessage=tt,Rt=function(){vt.postMessage(null)}}else Rt=function(){D(tt,0)};function Gt(){N||(N=!0,Rt())}function Yt(Z,J){Y=D(function(){Z(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){S||E||(S=!0,Gt())},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return s(h)},n.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var I=x;x=J;try{return Z()}finally{x=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,J){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var I=x;x=Z;try{return J()}finally{x=I}},n.unstable_scheduleCallback=function(Z,J,I){var ct=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ct+I:ct):I=ct,Z){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=I+R,Z={id:v++,callback:J,priorityLevel:Z,startTime:I,expirationTime:R,sortIndex:-1},I>ct?(Z.sortIndex=I,i(p,Z),s(h)===null&&Z===s(p)&&(M?(C(Y),Y=-1):M=!0,Yt(P,I-ct))):(Z.sortIndex=R,i(h,Z),S||E||(S=!0,Gt())),Z},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(Z){var J=x;return function(){var I=x;x=J;try{return Z.apply(this,arguments)}finally{x=I}}}}(ef)),ef}var Vp;function Vx(){return Vp||(Vp=1,tf.exports=_x()),tf.exports}var nf={exports:{}},de={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function kx(){if(kp)return de;kp=1;var n=td();function i(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,p,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:p,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,de.createPortal=function(h,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return f(h,p,null,v)},de.flushSync=function(h){var p=d.T,v=l.p;try{if(d.T=null,l.p=2,h)return h()}finally{d.T=p,l.p=v,l.d.f()}},de.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(h,p))},de.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},de.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?l.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:E}):v==="script"&&l.d.X(h,{crossOrigin:b,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},de.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);l.d.M(h,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(h)},de.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin);l.d.L(h,v,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},de.preloadModule=function(h,p){if(typeof h=="string")if(p){var v=m(p.as,p.crossOrigin);l.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(h)},de.requestFormReset=function(h){l.d.r(h)},de.unstable_batchedUpdates=function(h,p){return h(p)},de.useFormState=function(h,p,v){return d.H.useFormState(h,p,v)},de.useFormStatus=function(){return d.H.useHostTransitionStatus()},de.version="19.0.0",de}var Np;function Nx(){if(Np)return nf.exports;Np=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),nf.exports=kx(),nf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function Lx(){if(Lp)return $r;Lp=1;var n=Vx(),i=td(),s=Nx();function l(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),E=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),P=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function F(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case h:return"Fragment";case m:return"Portal";case v:return"Profiler";case p:return"StrictMode";case M:return"Suspense";case D:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case S:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return e=t.displayName||null,e!==null?e:F(t.type)||"Memo";case L:e=t._payload,t=t._init;try{return F(t(e))}catch{}}return null}var X=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=Object.assign,Rt,ie;function vt(t){if(Rt===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Rt=e&&e[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+ie}var Gt=!1;function Yt(t,e){if(!t||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(U){var k=U}Reflect.construct(t,[],G)}else{try{G.call()}catch(U){k=U}t.call(G.prototype)}}else{try{throw Error()}catch(U){k=U}(G=t())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(U){if(U&&k&&typeof U.stack=="string")return[U.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],y=c[1];if(g&&y){var T=g.split(`
`),O=y.split(`
`);for(o=r=0;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;for(;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;if(r===T.length||o===O.length)for(r=T.length-1,o=O.length-1;1<=r&&0<=o&&T[r]!==O[o];)o--;for(;1<=r&&0<=o;r--,o--)if(T[r]!==O[o]){if(r!==1||o!==1)do if(r--,o--,0>o||T[r]!==O[o]){var H=`
`+T[r].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=r&&0<=o);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function Z(t){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return t=Yt(t.type,!1),t;case 11:return t=Yt(t.type.render,!1),t;case 1:return t=Yt(t.type,!0),t;default:return""}}function J(t){try{var e="";do e+=Z(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function I(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function ct(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function R(t){if(I(t)!==t)throw Error(l(188))}function $(t){var e=t.alternate;if(!e){if(e=I(t),e===null)throw Error(l(188));return e!==t?null:t}for(var a=t,r=e;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return R(o),t;if(c===r)return R(o),e;c=c.sibling}throw Error(l(188))}if(a.return!==r.return)a=o,r=c;else{for(var g=!1,y=o.child;y;){if(y===a){g=!0,a=o,r=c;break}if(y===r){g=!0,r=o,a=c;break}y=y.sibling}if(!g){for(y=c.child;y;){if(y===a){g=!0,a=c,r=o;break}if(y===r){g=!0,r=c,a=o;break}y=y.sibling}if(!g)throw Error(l(189))}}if(a.alternate!==r)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?t:e}function nt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=nt(t),e!==null)return e;t=t.sibling}return null}var it=Array.isArray,K=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},lt=[],$t=-1;function gt(t){return{current:t}}function Et(t){0>$t||(t.current=lt[$t],lt[$t]=null,$t--)}function Tt(t,e){$t++,lt[$t]=t.current,t.current=e}var pe=gt(null),be=gt(null),Nn=gt(null),Vs=gt(null);function ks(t,e){switch(Tt(Nn,e),Tt(be,t),Tt(pe,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?rp(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=rp(t),e=sp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(pe),Tt(pe,e)}function Ya(){Et(pe),Et(be),Et(Nn)}function qo(t){t.memoizedState!==null&&Tt(Vs,t);var e=pe.current,a=sp(e,t.type);e!==a&&(Tt(be,t),Tt(pe,a))}function Ns(t){be.current===t&&(Et(pe),Et(be)),Vs.current===t&&(Et(Vs),Ur._currentValue=dt)}var Go=Object.prototype.hasOwnProperty,Yo=n.unstable_scheduleCallback,$o=n.unstable_cancelCallback,o2=n.unstable_shouldYield,u2=n.unstable_requestPaint,en=n.unstable_now,c2=n.unstable_getCurrentPriorityLevel,Zd=n.unstable_ImmediatePriority,Kd=n.unstable_UserBlockingPriority,Ls=n.unstable_NormalPriority,f2=n.unstable_LowPriority,Fd=n.unstable_IdlePriority,d2=n.log,h2=n.unstable_setDisableYieldValue,Zi=null,Te=null;function m2(t){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Zi,t,void 0,(t.current.flags&128)===128)}catch{}}function Ln(t){if(typeof d2=="function"&&h2(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Zi,t)}catch{}}var Ae=Math.clz32?Math.clz32:v2,p2=Math.log,g2=Math.LN2;function v2(t){return t>>>=0,t===0?32:31-(p2(t)/g2|0)|0}var Us=128,Hs=4194304;function ha(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ps(t,e){var a=t.pendingLanes;if(a===0)return 0;var r=0,o=t.suspendedLanes,c=t.pingedLanes,g=t.warmLanes;t=t.finishedLanes!==0;var y=a&134217727;return y!==0?(a=y&~o,a!==0?r=ha(a):(c&=y,c!==0?r=ha(c):t||(g=y&~g,g!==0&&(r=ha(g))))):(y=a&~o,y!==0?r=ha(y):c!==0?r=ha(c):t||(g=a&~g,g!==0&&(r=ha(g)))),r===0?0:e!==0&&e!==r&&(e&o)===0&&(o=r&-r,g=e&-e,o>=g||o===32&&(g&4194176)!==0)?e:r}function Ki(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function y2(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jd(){var t=Us;return Us<<=1,(Us&4194176)===0&&(Us=128),t}function Wd(){var t=Hs;return Hs<<=1,(Hs&62914560)===0&&(Hs=4194304),t}function Xo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Fi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function b2(t,e,a,r,o,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var y=t.entanglements,T=t.expirationTimes,O=t.hiddenUpdates;for(a=g&~a;0<a;){var H=31-Ae(a),G=1<<H;y[H]=0,T[H]=-1;var k=O[H];if(k!==null)for(O[H]=null,H=0;H<k.length;H++){var U=k[H];U!==null&&(U.lane&=-536870913)}a&=~G}r!==0&&Id(t,r,0),c!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function Id(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Ae(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194218}function th(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-Ae(a),o=1<<r;o&e|t[r]&e&&(t[r]|=e),a&=~o}}function eh(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function nh(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Tp(t.type))}function x2(t,e){var a=K.p;try{return K.p=t,e()}finally{K.p=a}}var Un=Math.random().toString(36).slice(2),ce="__reactFiber$"+Un,xe="__reactProps$"+Un,$a="__reactContainer$"+Un,Qo="__reactEvents$"+Un,S2="__reactListeners$"+Un,w2="__reactHandles$"+Un,ah="__reactResources$"+Un,Ji="__reactMarker$"+Un;function Zo(t){delete t[ce],delete t[xe],delete t[Qo],delete t[S2],delete t[w2]}function ma(t){var e=t[ce];if(e)return e;for(var a=t.parentNode;a;){if(e=a[$a]||a[ce]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=up(t);t!==null;){if(a=t[ce])return a;t=up(t)}return e}t=a,a=t.parentNode}return null}function Xa(t){if(t=t[ce]||t[$a]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Wi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(l(33))}function Qa(t){var e=t[ah];return e||(e=t[ah]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function It(t){t[Ji]=!0}var ih=new Set,rh={};function pa(t,e){Za(t,e),Za(t+"Capture",e)}function Za(t,e){for(rh[t]=e,t=0;t<e.length;t++)ih.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sh={},lh={};function T2(t){return Go.call(lh,t)?!0:Go.call(sh,t)?!1:E2.test(t)?lh[t]=!0:(sh[t]=!0,!1)}function qs(t,e,a){if(T2(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Gs(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function mn(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A2(t){var e=oh(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ys(t){t._valueTracker||(t._valueTracker=A2(t))}function uh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=oh(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function $s(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var C2=/[\n"\\]/g;function _e(t){return t.replace(C2,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ko(t,e,a,r,o,c,g,y){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?Fo(t,g,Be(e)):a!=null?Fo(t,g,Be(a)):r!=null&&t.removeAttribute("value"),o==null&&c!=null&&(t.defaultChecked=!!c),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Be(y):t.removeAttribute("name")}function ch(t,e,a,r,o,c,g,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+Be(a):"",e=e!=null?""+Be(e):a,y||e===t.value||(t.value=e),t.defaultValue=e}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=y?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function Fo(t,e,a){e==="number"&&$s(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ka(t,e,a,r){if(t=t.options,e){e={};for(var o=0;o<a.length;o++)e["$"+a[o]]=!0;for(a=0;a<t.length;a++)o=e.hasOwnProperty("$"+t[a].value),t[a].selected!==o&&(t[a].selected=o),o&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Be(a),e=null,o=0;o<t.length;o++){if(t[o].value===a){t[o].selected=!0,r&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function fh(t,e,a){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Be(a):""}function dh(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(l(92));if(it(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=Be(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function Fa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var M2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hh(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||M2.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function mh(t,e,a){if(e!=null&&typeof e!="object")throw Error(l(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var o in e)r=e[o],e.hasOwnProperty(o)&&a[o]!==r&&hh(t,o,r)}else for(var c in e)e.hasOwnProperty(c)&&hh(t,c,e[c])}function Jo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xs(t){return z2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Wo=null;function Io(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ja=null,Wa=null;function ph(t){var e=Xa(t);if(e&&(t=e.stateNode)){var a=t[xe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ko(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var o=r[xe]||null;if(!o)throw Error(l(90));Ko(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&uh(r)}break t;case"textarea":fh(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ka(t,!!a.multiple,e,!1)}}}var tu=!1;function gh(t,e,a){if(tu)return t(e,a);tu=!0;try{var r=t(e);return r}finally{if(tu=!1,(Ja!==null||Wa!==null)&&(zl(),Ja&&(e=Ja,t=Wa,Wa=Ja=null,ph(e),t)))for(e=0;e<t.length;e++)ph(t[e])}}function Ii(t,e){var a=t.stateNode;if(a===null)return null;var r=a[xe]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(l(231,e,typeof a));return a}var eu=!1;if(hn)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{eu=!1}var Hn=null,nu=null,Qs=null;function vh(){if(Qs)return Qs;var t,e=nu,a=e.length,r,o="value"in Hn?Hn.value:Hn.textContent,c=o.length;for(t=0;t<a&&e[t]===o[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===o[c-r];r++);return Qs=o.slice(t,1<r?1-r:void 0)}function Zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function yh(){return!1}function Se(t){function e(a,r,o,c,g){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(a=t[y],this[y]=a?a(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ks:yh,this.isPropagationStopped=yh,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=Se(ga),er=tt({},ga,{view:0,detail:0}),D2=Se(er),au,iu,nr,Js=tt({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nr&&(nr&&t.type==="mousemove"?(au=t.screenX-nr.screenX,iu=t.screenY-nr.screenY):iu=au=0,nr=t),au)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),bh=Se(Js),O2=tt({},Js,{dataTransfer:0}),j2=Se(O2),B2=tt({},er,{relatedTarget:0}),ru=Se(B2),_2=tt({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),V2=Se(_2),k2=tt({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N2=Se(k2),L2=tt({},ga,{data:0}),xh=Se(L2),U2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=P2[t])?!!e[t]:!1}function su(){return q2}var G2=tt({},er,{key:function(t){if(t.key){var e=U2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?Zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y2=Se(G2),$2=tt({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=Se($2),X2=tt({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Q2=Se(X2),Z2=tt({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),K2=Se(Z2),F2=tt({},Js,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J2=Se(F2),W2=tt({},ga,{newState:0,oldState:0}),I2=Se(W2),tb=[9,13,27,32],lu=hn&&"CompositionEvent"in window,ar=null;hn&&"documentMode"in document&&(ar=document.documentMode);var eb=hn&&"TextEvent"in window&&!ar,wh=hn&&(!lu||ar&&8<ar&&11>=ar),Eh=" ",Th=!1;function Ah(t,e){switch(t){case"keyup":return tb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ia=!1;function nb(t,e){switch(t){case"compositionend":return Ch(e);case"keypress":return e.which!==32?null:(Th=!0,Eh);case"textInput":return t=e.data,t===Eh&&Th?null:t;default:return null}}function ab(t,e){if(Ia)return t==="compositionend"||!lu&&Ah(t,e)?(t=vh(),Qs=nu=Hn=null,Ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wh&&e.locale!=="ko"?null:e.data;default:return null}}var ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ib[t.type]:e==="textarea"}function Rh(t,e,a,r){Ja?Wa?Wa.push(r):Wa=[r]:Ja=r,e=_l(e,"onChange"),0<e.length&&(a=new Fs("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var ir=null,rr=null;function rb(t){tp(t,0)}function Ws(t){var e=Wi(t);if(uh(e))return t}function zh(t,e){if(t==="change")return e}var Dh=!1;if(hn){var ou;if(hn){var uu="oninput"in document;if(!uu){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),uu=typeof Oh.oninput=="function"}ou=uu}else ou=!1;Dh=ou&&(!document.documentMode||9<document.documentMode)}function jh(){ir&&(ir.detachEvent("onpropertychange",Bh),rr=ir=null)}function Bh(t){if(t.propertyName==="value"&&Ws(rr)){var e=[];Rh(e,rr,t,Io(t)),gh(rb,e)}}function sb(t,e,a){t==="focusin"?(jh(),ir=e,rr=a,ir.attachEvent("onpropertychange",Bh)):t==="focusout"&&jh()}function lb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ws(rr)}function ob(t,e){if(t==="click")return Ws(e)}function ub(t,e){if(t==="input"||t==="change")return Ws(e)}function cb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ce=typeof Object.is=="function"?Object.is:cb;function sr(t,e){if(Ce(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Go.call(e,o)||!Ce(t[o],e[o]))return!1}return!0}function _h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var a=_h(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_h(a)}}function kh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=$s(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=$s(t.document)}return e}function cu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fb(t,e){var a=Nh(e);e=t.focusedElem;var r=t.selectionRange;if(a!==e&&e&&e.ownerDocument&&kh(e.ownerDocument.documentElement,e)){if(r!==null&&cu(e)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(a,e.value.length);else if(a=(t=e.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var o=e.textContent.length,c=Math.min(r.start,o);r=r.end===void 0?c:Math.min(r.end,o),!a.extend&&c>r&&(o=r,r=c,c=o),o=Vh(e,c);var g=Vh(e,r);o&&g&&(a.rangeCount!==1||a.anchorNode!==o.node||a.anchorOffset!==o.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),a.removeAllRanges(),c>r?(a.addRange(t),a.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),a.addRange(t)))}}for(t=[],a=e;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)a=t[e],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var db=hn&&"documentMode"in document&&11>=document.documentMode,ti=null,fu=null,lr=null,du=!1;function Lh(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||ti==null||ti!==$s(r)||(r=ti,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&sr(lr,r)||(lr=r,r=_l(fu,"onSelect"),0<r.length&&(e=new Fs("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=ti)))}function va(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ei={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},hu={},Uh={};hn&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function ya(t){if(hu[t])return hu[t];if(!ei[t])return t;var e=ei[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Uh)return hu[t]=e[a];return t}var Hh=ya("animationend"),Ph=ya("animationiteration"),qh=ya("animationstart"),hb=ya("transitionrun"),mb=ya("transitionstart"),pb=ya("transitioncancel"),Gh=ya("transitionend"),Yh=new Map,$h="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Ke(t,e){Yh.set(t,e),pa(e,[t])}var Ve=[],ni=0,mu=0;function Is(){for(var t=ni,e=mu=ni=0;e<t;){var a=Ve[e];Ve[e++]=null;var r=Ve[e];Ve[e++]=null;var o=Ve[e];Ve[e++]=null;var c=Ve[e];if(Ve[e++]=null,r!==null&&o!==null){var g=r.pending;g===null?o.next=o:(o.next=g.next,g.next=o),r.pending=o}c!==0&&Xh(a,o,c)}}function tl(t,e,a,r){Ve[ni++]=t,Ve[ni++]=e,Ve[ni++]=a,Ve[ni++]=r,mu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function pu(t,e,a,r){return tl(t,e,a,r),el(t)}function Pn(t,e){return tl(t,null,null,e),el(t)}function Xh(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var o=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(o=!0)),t=c,c=c.return;o&&e!==null&&t.tag===3&&(c=t.stateNode,o=31-Ae(a),c=c.hiddenUpdates,t=c[o],t===null?c[o]=[e]:t.push(e),e.lane=a|536870912)}function el(t){if(50<jr)throw jr=0,Sc=null,Error(l(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ai={},Qh=new WeakMap;function ke(t,e){if(typeof t=="object"&&t!==null){var a=Qh.get(t);return a!==void 0?a:(e={value:t,source:e,stack:J(e)},Qh.set(t,e),e)}return{value:t,source:e,stack:J(e)}}var ii=[],ri=0,nl=null,al=0,Ne=[],Le=0,ba=null,pn=1,gn="";function xa(t,e){ii[ri++]=al,ii[ri++]=nl,nl=t,al=e}function Zh(t,e,a){Ne[Le++]=pn,Ne[Le++]=gn,Ne[Le++]=ba,ba=t;var r=pn;t=gn;var o=32-Ae(r)-1;r&=~(1<<o),a+=1;var c=32-Ae(e)+o;if(30<c){var g=o-o%5;c=(r&(1<<g)-1).toString(32),r>>=g,o-=g,pn=1<<32-Ae(e)+o|a<<o|r,gn=c+t}else pn=1<<c|a<<o|r,gn=t}function gu(t){t.return!==null&&(xa(t,1),Zh(t,1,0))}function vu(t){for(;t===nl;)nl=ii[--ri],ii[ri]=null,al=ii[--ri],ii[ri]=null;for(;t===ba;)ba=Ne[--Le],Ne[Le]=null,gn=Ne[--Le],Ne[Le]=null,pn=Ne[--Le],Ne[Le]=null}var ge=null,re=null,xt=!1,Fe=null,nn=!1,yu=Error(l(519));function Sa(t){var e=Error(l(418,""));throw cr(ke(e,t)),yu}function Kh(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[ce]=t,e[xe]=r,a){case"dialog":yt("cancel",e),yt("close",e);break;case"iframe":case"object":case"embed":yt("load",e);break;case"video":case"audio":for(a=0;a<_r.length;a++)yt(_r[a],e);break;case"source":yt("error",e);break;case"img":case"image":case"link":yt("error",e),yt("load",e);break;case"details":yt("toggle",e);break;case"input":yt("invalid",e),ch(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Ys(e);break;case"select":yt("invalid",e);break;case"textarea":yt("invalid",e),dh(e,r.value,r.defaultValue,r.children),Ys(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||ip(e.textContent,a)?(r.popover!=null&&(yt("beforetoggle",e),yt("toggle",e)),r.onScroll!=null&&yt("scroll",e),r.onScrollEnd!=null&&yt("scrollend",e),r.onClick!=null&&(e.onclick=Vl),e=!0):e=!1,e||Sa(t)}function Fh(t){for(ge=t.return;ge;)switch(ge.tag){case 3:case 27:nn=!0;return;case 5:case 13:nn=!1;return;default:ge=ge.return}}function or(t){if(t!==ge)return!1;if(!xt)return Fh(t),xt=!0,!1;var e=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lc(t.type,t.memoizedProps)),a=!a),a&&(e=!0),e&&re&&Sa(t),Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(l(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){re=We(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}re=null}}else re=ge?We(t.stateNode.nextSibling):null;return!0}function ur(){re=ge=null,xt=!1}function cr(t){Fe===null?Fe=[t]:Fe.push(t)}var fr=Error(l(460)),Jh=Error(l(474)),bu={then:function(){}};function Wh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function il(){}function Ih(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(il,il),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===fr?Error(l(483)):t;default:if(typeof e.status=="string")e.then(il,il);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(l(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=r}},function(r){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===fr?Error(l(483)):t}throw dr=e,fr}}var dr=null;function t0(){if(dr===null)throw Error(l(459));var t=dr;return dr=null,t}var si=null,hr=0;function rl(t){var e=hr;return hr+=1,si===null&&(si=[]),Ih(si,t,e)}function mr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function sl(t,e){throw e.$$typeof===f?Error(l(525)):(t=Object.prototype.toString.call(e),Error(l(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function e0(t){var e=t._init;return e(t._payload)}function n0(t){function e(B,z){if(t){var _=B.deletions;_===null?(B.deletions=[z],B.flags|=16):_.push(z)}}function a(B,z){if(!t)return null;for(;z!==null;)e(B,z),z=z.sibling;return null}function r(B){for(var z=new Map;B!==null;)B.key!==null?z.set(B.key,B):z.set(B.index,B),B=B.sibling;return z}function o(B,z){return B=In(B,z),B.index=0,B.sibling=null,B}function c(B,z,_){return B.index=_,t?(_=B.alternate,_!==null?(_=_.index,_<z?(B.flags|=33554434,z):_):(B.flags|=33554434,z)):(B.flags|=1048576,z)}function g(B){return t&&B.alternate===null&&(B.flags|=33554434),B}function y(B,z,_,q){return z===null||z.tag!==6?(z=hc(_,B.mode,q),z.return=B,z):(z=o(z,_),z.return=B,z)}function T(B,z,_,q){var W=_.type;return W===h?H(B,z,_.props.children,q,_.key):z!==null&&(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&e0(W)===z.type)?(z=o(z,_.props),mr(z,_),z.return=B,z):(z=Tl(_.type,_.key,_.props,null,B.mode,q),mr(z,_),z.return=B,z)}function O(B,z,_,q){return z===null||z.tag!==4||z.stateNode.containerInfo!==_.containerInfo||z.stateNode.implementation!==_.implementation?(z=mc(_,B.mode,q),z.return=B,z):(z=o(z,_.children||[]),z.return=B,z)}function H(B,z,_,q,W){return z===null||z.tag!==7?(z=Oa(_,B.mode,q,W),z.return=B,z):(z=o(z,_),z.return=B,z)}function G(B,z,_){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=hc(""+z,B.mode,_),z.return=B,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case d:return _=Tl(z.type,z.key,z.props,null,B.mode,_),mr(_,z),_.return=B,_;case m:return z=mc(z,B.mode,_),z.return=B,z;case L:var q=z._init;return z=q(z._payload),G(B,z,_)}if(it(z)||Y(z))return z=Oa(z,B.mode,_,null),z.return=B,z;if(typeof z.then=="function")return G(B,rl(z),_);if(z.$$typeof===E)return G(B,Sl(B,z),_);sl(B,z)}return null}function k(B,z,_,q){var W=z!==null?z.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return W!==null?null:y(B,z,""+_,q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case d:return _.key===W?T(B,z,_,q):null;case m:return _.key===W?O(B,z,_,q):null;case L:return W=_._init,_=W(_._payload),k(B,z,_,q)}if(it(_)||Y(_))return W!==null?null:H(B,z,_,q,null);if(typeof _.then=="function")return k(B,z,rl(_),q);if(_.$$typeof===E)return k(B,z,Sl(B,_),q);sl(B,_)}return null}function U(B,z,_,q,W){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return B=B.get(_)||null,y(z,B,""+q,W);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return B=B.get(q.key===null?_:q.key)||null,T(z,B,q,W);case m:return B=B.get(q.key===null?_:q.key)||null,O(z,B,q,W);case L:var mt=q._init;return q=mt(q._payload),U(B,z,_,q,W)}if(it(q)||Y(q))return B=B.get(_)||null,H(z,B,q,W,null);if(typeof q.then=="function")return U(B,z,_,rl(q),W);if(q.$$typeof===E)return U(B,z,_,Sl(z,q),W);sl(z,q)}return null}function et(B,z,_,q){for(var W=null,mt=null,at=z,rt=z=0,ne=null;at!==null&&rt<_.length;rt++){at.index>rt?(ne=at,at=null):ne=at.sibling;var St=k(B,at,_[rt],q);if(St===null){at===null&&(at=ne);break}t&&at&&St.alternate===null&&e(B,at),z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St,at=ne}if(rt===_.length)return a(B,at),xt&&xa(B,rt),W;if(at===null){for(;rt<_.length;rt++)at=G(B,_[rt],q),at!==null&&(z=c(at,z,rt),mt===null?W=at:mt.sibling=at,mt=at);return xt&&xa(B,rt),W}for(at=r(at);rt<_.length;rt++)ne=U(at,B,rt,_[rt],q),ne!==null&&(t&&ne.alternate!==null&&at.delete(ne.key===null?rt:ne.key),z=c(ne,z,rt),mt===null?W=ne:mt.sibling=ne,mt=ne);return t&&at.forEach(function(sa){return e(B,sa)}),xt&&xa(B,rt),W}function ot(B,z,_,q){if(_==null)throw Error(l(151));for(var W=null,mt=null,at=z,rt=z=0,ne=null,St=_.next();at!==null&&!St.done;rt++,St=_.next()){at.index>rt?(ne=at,at=null):ne=at.sibling;var sa=k(B,at,St.value,q);if(sa===null){at===null&&(at=ne);break}t&&at&&sa.alternate===null&&e(B,at),z=c(sa,z,rt),mt===null?W=sa:mt.sibling=sa,mt=sa,at=ne}if(St.done)return a(B,at),xt&&xa(B,rt),W;if(at===null){for(;!St.done;rt++,St=_.next())St=G(B,St.value,q),St!==null&&(z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St);return xt&&xa(B,rt),W}for(at=r(at);!St.done;rt++,St=_.next())St=U(at,B,rt,St.value,q),St!==null&&(t&&St.alternate!==null&&at.delete(St.key===null?rt:St.key),z=c(St,z,rt),mt===null?W=St:mt.sibling=St,mt=St);return t&&at.forEach(function(zx){return e(B,zx)}),xt&&xa(B,rt),W}function Ut(B,z,_,q){if(typeof _=="object"&&_!==null&&_.type===h&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case d:t:{for(var W=_.key;z!==null;){if(z.key===W){if(W=_.type,W===h){if(z.tag===7){a(B,z.sibling),q=o(z,_.props.children),q.return=B,B=q;break t}}else if(z.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===L&&e0(W)===z.type){a(B,z.sibling),q=o(z,_.props),mr(q,_),q.return=B,B=q;break t}a(B,z);break}else e(B,z);z=z.sibling}_.type===h?(q=Oa(_.props.children,B.mode,q,_.key),q.return=B,B=q):(q=Tl(_.type,_.key,_.props,null,B.mode,q),mr(q,_),q.return=B,B=q)}return g(B);case m:t:{for(W=_.key;z!==null;){if(z.key===W)if(z.tag===4&&z.stateNode.containerInfo===_.containerInfo&&z.stateNode.implementation===_.implementation){a(B,z.sibling),q=o(z,_.children||[]),q.return=B,B=q;break t}else{a(B,z);break}else e(B,z);z=z.sibling}q=mc(_,B.mode,q),q.return=B,B=q}return g(B);case L:return W=_._init,_=W(_._payload),Ut(B,z,_,q)}if(it(_))return et(B,z,_,q);if(Y(_)){if(W=Y(_),typeof W!="function")throw Error(l(150));return _=W.call(_),ot(B,z,_,q)}if(typeof _.then=="function")return Ut(B,z,rl(_),q);if(_.$$typeof===E)return Ut(B,z,Sl(B,_),q);sl(B,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,z!==null&&z.tag===6?(a(B,z.sibling),q=o(z,_),q.return=B,B=q):(a(B,z),q=hc(_,B.mode,q),q.return=B,B=q),g(B)):a(B,z)}return function(B,z,_,q){try{hr=0;var W=Ut(B,z,_,q);return si=null,W}catch(at){if(at===fr)throw at;var mt=qe(29,at,null,B.mode);return mt.lanes=q,mt.return=B,mt}finally{}}}var wa=n0(!0),a0=n0(!1),li=gt(null),ll=gt(0);function i0(t,e){t=Mn,Tt(ll,t),Tt(li,e),Mn=t|e.baseLanes}function xu(){Tt(ll,Mn),Tt(li,li.current)}function Su(){Mn=ll.current,Et(li),Et(ll)}var Ue=gt(null),an=null;function qn(t){var e=t.alternate;Tt(Ft,Ft.current&1),Tt(Ue,t),an===null&&(e===null||li.current!==null||e.memoizedState!==null)&&(an=t)}function r0(t){if(t.tag===22){if(Tt(Ft,Ft.current),Tt(Ue,t),an===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(an=t)}}else Gn()}function Gn(){Tt(Ft,Ft.current),Tt(Ue,Ue.current)}function vn(t){Et(Ue),an===t&&(an=null),Et(Ft)}var Ft=gt(0);function ol(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},vb=n.unstable_scheduleCallback,yb=n.unstable_NormalPriority,Jt={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new gb,data:new Map,refCount:0}}function pr(t){t.refCount--,t.refCount===0&&vb(yb,function(){t.controller.abort()})}var gr=null,Eu=0,oi=0,ui=null;function bb(t,e){if(gr===null){var a=gr=[];Eu=0,oi=zc(),ui={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Eu++,e.then(s0,s0),e}function s0(){if(--Eu===0&&gr!==null){ui!==null&&(ui.status="fulfilled");var t=gr;gr=null,oi=0,ui=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function xb(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var o=0;o<a.length;o++)(0,a[o])(e)},function(o){for(r.status="rejected",r.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),r}var l0=X.S;X.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&bb(t,e),l0!==null&&l0(t,e)};var Ea=gt(null);function Tu(){var t=Ea.current;return t!==null?t:zt.pooledCache}function ul(t,e){e===null?Tt(Ea,Ea.current):Tt(Ea,e.pool)}function o0(){var t=Tu();return t===null?null:{parent:Jt._currentValue,pool:t}}var Yn=0,ht=null,At=null,Xt=null,cl=!1,ci=!1,Ta=!1,fl=0,vr=0,fi=null,Sb=0;function Pt(){throw Error(l(321))}function Au(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Ce(t[a],e[a]))return!1;return!0}function Cu(t,e,a,r,o,c){return Yn=c,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,X.H=t===null||t.memoizedState===null?Aa:$n,Ta=!1,c=a(r,o),Ta=!1,ci&&(c=c0(e,a,r,o)),u0(t),c}function u0(t){X.H=rn;var e=At!==null&&At.next!==null;if(Yn=0,Xt=At=ht=null,cl=!1,vr=0,fi=null,e)throw Error(l(300));t===null||te||(t=t.dependencies,t!==null&&xl(t)&&(te=!0))}function c0(t,e,a,r){ht=t;var o=0;do{if(ci&&(fi=null),vr=0,ci=!1,25<=o)throw Error(l(301));if(o+=1,Xt=At=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}X.H=Ca,c=e(a,r)}while(ci);return c}function wb(){var t=X.H,e=t.useState()[0];return e=typeof e.then=="function"?yr(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(ht.flags|=1024),e}function Mu(){var t=fl!==0;return fl=0,t}function Ru(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function zu(t){if(cl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}cl=!1}Yn=0,Xt=At=ht=null,ci=!1,vr=fl=0,fi=null}function we(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?ht.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Qt(){if(At===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Xt===null?ht.memoizedState:Xt.next;if(e!==null)Xt=e,At=t;else{if(t===null)throw ht.alternate===null?Error(l(467)):Error(l(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Xt===null?ht.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}var dl;dl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function yr(t){var e=vr;return vr+=1,fi===null&&(fi=[]),t=Ih(fi,t,e),e=ht,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,X.H=e===null||e.memoizedState===null?Aa:$n),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yr(t);if(t.$$typeof===E)return fe(t)}throw Error(l(438,String(t)))}function Du(t){var e=null,a=ht.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=ht.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=dl(),ht.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=P;return e.index++,a}function yn(t,e){return typeof e=="function"?e(t):e}function ml(t){var e=Qt();return Ou(e,At,t)}function Ou(t,e,a){var r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=a;var o=t.baseQueue,c=r.pending;if(c!==null){if(o!==null){var g=o.next;o.next=c.next,c.next=g}e.baseQueue=o=c,r.pending=null}if(c=t.baseState,o===null)t.memoizedState=c;else{e=o.next;var y=g=null,T=null,O=e,H=!1;do{var G=O.lane&-536870913;if(G!==O.lane?(bt&G)===G:(Yn&G)===G){var k=O.revertLane;if(k===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),G===oi&&(H=!0);else if((Yn&k)===k){O=O.next,k===oi&&(H=!0);continue}else G={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(y=T=G,g=c):T=T.next=G,ht.lanes|=k,ta|=k;G=O.action,Ta&&a(c,G),c=O.hasEagerState?O.eagerState:a(c,G)}else k={lane:G,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(y=T=k,g=c):T=T.next=k,ht.lanes|=G,ta|=G;O=O.next}while(O!==null&&O!==e);if(T===null?g=c:T.next=y,!Ce(c,t.memoizedState)&&(te=!0,H&&(a=ui,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=T,r.lastRenderedState=c}return o===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function ju(t){var e=Qt(),a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=t;var r=a.dispatch,o=a.pending,c=e.memoizedState;if(o!==null){a.pending=null;var g=o=o.next;do c=t(c,g.action),g=g.next;while(g!==o);Ce(c,e.memoizedState)||(te=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function f0(t,e,a){var r=ht,o=Qt(),c=xt;if(c){if(a===void 0)throw Error(l(407));a=a()}else a=e();var g=!Ce((At||o).memoizedState,a);if(g&&(o.memoizedState=a,te=!0),o=o.queue,Vu(m0.bind(null,r,o,t),[t]),o.getSnapshot!==e||g||Xt!==null&&Xt.memoizedState.tag&1){if(r.flags|=2048,di(9,h0.bind(null,r,o,a,e),{destroy:void 0},null),zt===null)throw Error(l(349));c||(Yn&60)!==0||d0(r,e,a)}return a}function d0(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ht.updateQueue,e===null?(e=dl(),ht.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function h0(t,e,a,r){e.value=a,e.getSnapshot=r,p0(e)&&g0(t)}function m0(t,e,a){return a(function(){p0(e)&&g0(t)})}function p0(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Ce(t,a)}catch{return!0}}function g0(t){var e=Pn(t,2);e!==null&&ve(e,t,2)}function Bu(t){var e=we();if(typeof t=="function"){var a=t;if(t=a(),Ta){Ln(!0);try{a()}finally{Ln(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:t},e}function v0(t,e,a,r){return t.baseState=a,Ou(t,At,typeof r=="function"?r:yn)}function Eb(t,e,a,r,o){if(vl(t))throw Error(l(485));if(t=e.action,t!==null){var c={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};X.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,y0(e,c)):(c.next=a.next,e.pending=a.next=c)}}function y0(t,e){var a=e.action,r=e.payload,o=t.state;if(e.isTransition){var c=X.T,g={};X.T=g;try{var y=a(o,r),T=X.S;T!==null&&T(g,y),b0(t,e,y)}catch(O){_u(t,e,O)}finally{X.T=c}}else try{c=a(o,r),b0(t,e,c)}catch(O){_u(t,e,O)}}function b0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){x0(t,e,r)},function(r){return _u(t,e,r)}):x0(t,e,a)}function x0(t,e,a){e.status="fulfilled",e.value=a,S0(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,y0(t,a)))}function _u(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,S0(e),e=e.next;while(e!==r)}t.action=null}function S0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function w0(t,e){return e}function E0(t,e){if(xt){var a=zt.formState;if(a!==null){t:{var r=ht;if(xt){if(re){e:{for(var o=re,c=nn;o.nodeType!==8;){if(!c){o=null;break e}if(o=We(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){re=We(o.nextSibling),r=o.data==="F!";break t}}Sa(r)}r=!1}r&&(e=a[0])}}return a=we(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:w0,lastRenderedState:e},a.queue=r,a=P0.bind(null,ht,r),r.dispatch=a,r=Bu(!1),c=Hu.bind(null,ht,!1,r.queue),r=we(),o={state:e,dispatch:null,action:t,pending:null},r.queue=o,a=Eb.bind(null,ht,o,c,a),o.dispatch=a,r.memoizedState=t,[e,a,!1]}function T0(t){var e=Qt();return A0(e,At,t)}function A0(t,e,a){e=Ou(t,e,w0)[0],t=ml(yn)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?yr(e):e;var r=Qt(),o=r.queue,c=o.dispatch;return a!==r.memoizedState&&(ht.flags|=2048,di(9,Tb.bind(null,o,a),{destroy:void 0},null)),[e,c,t]}function Tb(t,e){t.action=e}function C0(t){var e=Qt(),a=At;if(a!==null)return A0(e,a,t);Qt(),e=e.memoizedState,a=Qt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function di(t,e,a,r){return t={tag:t,create:e,inst:a,deps:r,next:null},e=ht.updateQueue,e===null&&(e=dl(),ht.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function M0(){return Qt().memoizedState}function pl(t,e,a,r){var o=we();ht.flags|=t,o.memoizedState=di(1|e,a,{destroy:void 0},r===void 0?null:r)}function gl(t,e,a,r){var o=Qt();r=r===void 0?null:r;var c=o.memoizedState.inst;At!==null&&r!==null&&Au(r,At.memoizedState.deps)?o.memoizedState=di(e,a,c,r):(ht.flags|=t,o.memoizedState=di(1|e,a,c,r))}function R0(t,e){pl(8390656,8,t,e)}function Vu(t,e){gl(2048,8,t,e)}function z0(t,e){return gl(4,2,t,e)}function D0(t,e){return gl(4,4,t,e)}function O0(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j0(t,e,a){a=a!=null?a.concat([t]):null,gl(4,4,O0.bind(null,e,t),a)}function ku(){}function B0(t,e){var a=Qt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Au(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function _0(t,e){var a=Qt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Au(e,r[1]))return r[0];if(r=t(),Ta){Ln(!0);try{t()}finally{Ln(!1)}}return a.memoizedState=[r,e],r}function Nu(t,e,a){return a===void 0||(Yn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=km(),ht.lanes|=t,ta|=t,a)}function V0(t,e,a,r){return Ce(a,e)?a:li.current!==null?(t=Nu(t,a,r),Ce(t,e)||(te=!0),t):(Yn&42)===0?(te=!0,t.memoizedState=a):(t=km(),ht.lanes|=t,ta|=t,e)}function k0(t,e,a,r,o){var c=K.p;K.p=c!==0&&8>c?c:8;var g=X.T,y={};X.T=y,Hu(t,!1,e,a);try{var T=o(),O=X.S;if(O!==null&&O(y,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=xb(T,r);br(t,e,H,De(t))}else br(t,e,r,De(t))}catch(G){br(t,e,{then:function(){},status:"rejected",reason:G},De())}finally{K.p=c,X.T=g}}function Ab(){}function Lu(t,e,a,r){if(t.tag!==5)throw Error(l(476));var o=N0(t).queue;k0(t,o,e,dt,a===null?Ab:function(){return L0(t),a(r)})}function N0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:dt},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function L0(t){var e=N0(t).next.queue;br(t,e,{},De())}function Uu(){return fe(Ur)}function U0(){return Qt().memoizedState}function H0(){return Qt().memoizedState}function Cb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=De();t=Zn(a);var r=Kn(e,t,a);r!==null&&(ve(r,e,a),wr(r,e,a)),e={cache:wu()},t.payload=e;return}e=e.return}}function Mb(t,e,a){var r=De();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?q0(e,a):(a=pu(t,e,a,r),a!==null&&(ve(a,t,r),G0(a,e,r)))}function P0(t,e,a){var r=De();br(t,e,a,r)}function br(t,e,a,r){var o={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))q0(e,o);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,y=c(g,a);if(o.hasEagerState=!0,o.eagerState=y,Ce(y,g))return tl(t,e,o,0),zt===null&&Is(),!1}catch{}finally{}if(a=pu(t,e,o,r),a!==null)return ve(a,t,r),G0(a,e,r),!0}return!1}function Hu(t,e,a,r){if(r={lane:2,revertLane:zc(),action:r,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(e)throw Error(l(479))}else e=pu(t,a,r,2),e!==null&&ve(e,t,2)}function vl(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function q0(t,e){ci=cl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function G0(t,e,a){if((a&4194176)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,th(t,a)}}var rn={readContext:fe,use:hl,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useLayoutEffect:Pt,useInsertionEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useSyncExternalStore:Pt,useId:Pt};rn.useCacheRefresh=Pt,rn.useMemoCache=Pt,rn.useHostTransitionStatus=Pt,rn.useFormState=Pt,rn.useActionState=Pt,rn.useOptimistic=Pt;var Aa={readContext:fe,use:hl,useCallback:function(t,e){return we().memoizedState=[t,e===void 0?null:e],t},useContext:fe,useEffect:R0,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,pl(4194308,4,O0.bind(null,e,t),a)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){pl(4,2,t,e)},useMemo:function(t,e){var a=we();e=e===void 0?null:e;var r=t();if(Ta){Ln(!0);try{t()}finally{Ln(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=we();if(a!==void 0){var o=a(e);if(Ta){Ln(!0);try{a(e)}finally{Ln(!1)}}}else o=e;return r.memoizedState=r.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},r.queue=t,t=t.dispatch=Mb.bind(null,ht,t),[r.memoizedState,t]},useRef:function(t){var e=we();return t={current:t},e.memoizedState=t},useState:function(t){t=Bu(t);var e=t.queue,a=P0.bind(null,ht,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(t,e){var a=we();return Nu(a,t,e)},useTransition:function(){var t=Bu(!1);return t=k0.bind(null,ht,t.queue,!0,!1),we().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=ht,o=we();if(xt){if(a===void 0)throw Error(l(407));a=a()}else{if(a=e(),zt===null)throw Error(l(349));(bt&60)!==0||d0(r,e,a)}o.memoizedState=a;var c={value:a,getSnapshot:e};return o.queue=c,R0(m0.bind(null,r,c,t),[t]),r.flags|=2048,di(9,h0.bind(null,r,c,a,e),{destroy:void 0},null),a},useId:function(){var t=we(),e=zt.identifierPrefix;if(xt){var a=gn,r=pn;a=(r&~(1<<32-Ae(r)-1)).toString(32)+a,e=":"+e+"R"+a,a=fl++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=Sb++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return we().memoizedState=Cb.bind(null,ht)}};Aa.useMemoCache=Du,Aa.useHostTransitionStatus=Uu,Aa.useFormState=E0,Aa.useActionState=E0,Aa.useOptimistic=function(t){var e=we();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Hu.bind(null,ht,!0,a),a.dispatch=e,[t,e]};var $n={readContext:fe,use:hl,useCallback:B0,useContext:fe,useEffect:Vu,useImperativeHandle:j0,useInsertionEffect:z0,useLayoutEffect:D0,useMemo:_0,useReducer:ml,useRef:M0,useState:function(){return ml(yn)},useDebugValue:ku,useDeferredValue:function(t,e){var a=Qt();return V0(a,At.memoizedState,t,e)},useTransition:function(){var t=ml(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:yr(t),e]},useSyncExternalStore:f0,useId:U0};$n.useCacheRefresh=H0,$n.useMemoCache=Du,$n.useHostTransitionStatus=Uu,$n.useFormState=T0,$n.useActionState=T0,$n.useOptimistic=function(t,e){var a=Qt();return v0(a,At,t,e)};var Ca={readContext:fe,use:hl,useCallback:B0,useContext:fe,useEffect:Vu,useImperativeHandle:j0,useInsertionEffect:z0,useLayoutEffect:D0,useMemo:_0,useReducer:ju,useRef:M0,useState:function(){return ju(yn)},useDebugValue:ku,useDeferredValue:function(t,e){var a=Qt();return At===null?Nu(a,t,e):V0(a,At.memoizedState,t,e)},useTransition:function(){var t=ju(yn)[0],e=Qt().memoizedState;return[typeof t=="boolean"?t:yr(t),e]},useSyncExternalStore:f0,useId:U0};Ca.useCacheRefresh=H0,Ca.useMemoCache=Du,Ca.useHostTransitionStatus=Uu,Ca.useFormState=C0,Ca.useActionState=C0,Ca.useOptimistic=function(t,e){var a=Qt();return At!==null?v0(a,At,t,e):(a.baseState=t,[t,a.queue.dispatch])};function Pu(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:tt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qu={isMounted:function(t){return(t=t._reactInternals)?I(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var r=De(),o=Zn(r);o.payload=e,a!=null&&(o.callback=a),e=Kn(t,o,r),e!==null&&(ve(e,t,r),wr(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=De(),o=Zn(r);o.tag=1,o.payload=e,a!=null&&(o.callback=a),e=Kn(t,o,r),e!==null&&(ve(e,t,r),wr(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=De(),r=Zn(a);r.tag=2,e!=null&&(r.callback=e),e=Kn(t,r,a),e!==null&&(ve(e,t,a),wr(e,t,a))}};function Y0(t,e,a,r,o,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!sr(a,r)||!sr(o,c):!0}function $0(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function Ma(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=tt({},a));for(var o in t)a[o]===void 0&&(a[o]=t[o])}return a}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function X0(t){yl(t)}function Q0(t){console.error(t)}function Z0(t){yl(t)}function bl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function K0(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Gu(t,e,a){return a=Zn(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(t,e)},a}function F0(t){return t=Zn(t),t.tag=3,t}function J0(t,e,a,r){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=r.value;t.payload=function(){return o(c)},t.callback=function(){K0(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){K0(e,a,r),typeof o!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function Rb(t,e,a,r,o){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&Sr(e,a,o,!0),a=Ue.current,a!==null){switch(a.tag){case 13:return an===null?Tc():a.alternate===null&&Lt===0&&(Lt=3),a.flags&=-257,a.flags|=65536,a.lanes=o,r===bu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),Cc(t,r,o)),!1;case 22:return a.flags|=65536,r===bu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),Cc(t,r,o)),!1}throw Error(l(435,a.tag))}return Cc(t,r,o),Tc(),!1}if(xt)return e=Ue.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,r!==yu&&(t=Error(l(422),{cause:r}),cr(ke(t,a)))):(r!==yu&&(e=Error(l(423),{cause:r}),cr(ke(e,a))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,r=ke(r,a),o=Gu(t.stateNode,r,o),ic(t,o),Lt!==4&&(Lt=2)),!1;var c=Error(l(520),{cause:r});if(c=ke(c,a),Dr===null?Dr=[c]:Dr.push(c),Lt!==4&&(Lt=2),e===null)return!0;r=ke(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=o&-o,a.lanes|=t,t=Gu(a.stateNode,r,t),ic(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ea===null||!ea.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=F0(o),J0(o,t,a,r),ic(a,o),!1}a=a.return}while(a!==null);return!1}var W0=Error(l(461)),te=!1;function se(t,e,a,r){e.child=t===null?a0(e,null,a,r):wa(e,t.child,a,r)}function I0(t,e,a,r,o){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var y in r)y!=="ref"&&(g[y]=r[y])}else g=r;return za(e),r=Cu(t,e,a,g,c,o),y=Mu(),t!==null&&!te?(Ru(t,e,o),bn(t,e,o)):(xt&&y&&gu(e),e.flags|=1,se(t,e,r,o),e.child)}function tm(t,e,a,r,o){if(t===null){var c=a.type;return typeof c=="function"&&!dc(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,em(t,e,c,r,o)):(t=Tl(a.type,null,r,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Wu(t,o)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:sr,a(g,r)&&t.ref===e.ref)return bn(t,e,o)}return e.flags|=1,t=In(c,r),t.ref=e.ref,t.return=e,e.child=t}function em(t,e,a,r,o){if(t!==null){var c=t.memoizedProps;if(sr(c,r)&&t.ref===e.ref)if(te=!1,e.pendingProps=r=c,Wu(t,o))(t.flags&131072)!==0&&(te=!0);else return e.lanes=t.lanes,bn(t,e,o)}return Yu(t,e,a,r,o)}function nm(t,e,a){var r=e.pendingProps,o=r.children,c=(e.stateNode._pendingVisibility&2)!==0,g=t!==null?t.memoizedState:null;if(xr(t,e),r.mode==="hidden"||c){if((e.flags&128)!==0){if(r=g!==null?g.baseLanes|a:a,t!==null){for(o=e.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return am(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ul(e,g!==null?g.cachePool:null),g!==null?i0(e,g):xu(),r0(e);else return e.lanes=e.childLanes=536870912,am(t,e,g!==null?g.baseLanes|a:a,a)}else g!==null?(ul(e,g.cachePool),i0(e,g),Gn(),e.memoizedState=null):(t!==null&&ul(e,null),xu(),Gn());return se(t,e,o,a),e.child}function am(t,e,a,r){var o=Tu();return o=o===null?null:{parent:Jt._currentValue,pool:o},e.memoizedState={baseLanes:a,cachePool:o},t!==null&&ul(e,null),xu(),r0(e),t!==null&&Sr(t,e,r,!0),null}function xr(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(t===null||t.ref!==a)&&(e.flags|=2097664)}}function Yu(t,e,a,r,o){return za(e),a=Cu(t,e,a,r,void 0,o),r=Mu(),t!==null&&!te?(Ru(t,e,o),bn(t,e,o)):(xt&&r&&gu(e),e.flags|=1,se(t,e,a,o),e.child)}function im(t,e,a,r,o,c){return za(e),e.updateQueue=null,a=c0(e,r,a,o),u0(t),r=Mu(),t!==null&&!te?(Ru(t,e,c),bn(t,e,c)):(xt&&r&&gu(e),e.flags|=1,se(t,e,a,c),e.child)}function rm(t,e,a,r,o){if(za(e),e.stateNode===null){var c=ai,g=a.contextType;typeof g=="object"&&g!==null&&(c=fe(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=qu,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},nc(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?fe(g):ai,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Pu(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&qu.enqueueReplaceState(c,c.state,null),Tr(e,r,c,o),Er(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var y=e.memoizedProps,T=Ma(a,y);c.props=T;var O=c.context,H=a.contextType;g=ai,typeof H=="object"&&H!==null&&(g=fe(H));var G=a.getDerivedStateFromProps;H=typeof G=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,H||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||O!==g)&&$0(e,c,r,g),Qn=!1;var k=e.memoizedState;c.state=k,Tr(e,r,c,o),Er(),O=e.memoizedState,y||k!==O||Qn?(typeof G=="function"&&(Pu(e,a,G,r),O=e.memoizedState),(T=Qn||Y0(e,a,T,r,k,O,g))?(H||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=O),c.props=r,c.state=O,c.context=g,r=T):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,ac(t,e),g=e.memoizedProps,H=Ma(a,g),c.props=H,G=e.pendingProps,k=c.context,O=a.contextType,T=ai,typeof O=="object"&&O!==null&&(T=fe(O)),y=a.getDerivedStateFromProps,(O=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==G||k!==T)&&$0(e,c,r,T),Qn=!1,k=e.memoizedState,c.state=k,Tr(e,r,c,o),Er();var U=e.memoizedState;g!==G||k!==U||Qn||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof y=="function"&&(Pu(e,a,y,r),U=e.memoizedState),(H=Qn||Y0(e,a,H,r,k,U,T)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,U,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,U,T)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=U),c.props=r,c.state=U,c.context=T,r=H):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,xr(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=wa(e,t.child,null,o),e.child=wa(e,null,a,o)):se(t,e,a,o),e.memoizedState=c.state,t=e.child):t=bn(t,e,o),t}function sm(t,e,a,r){return ur(),e.flags|=256,se(t,e,a,r),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Xu(t){return{baseLanes:t,cachePool:o0()}}function Qu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ge),t}function lm(t,e,a){var r=e.pendingProps,o=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),g&&(o=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(o?qn(e):Gn(),xt){var y=re,T;if(T=y){t:{for(T=y,y=nn;T.nodeType!==8;){if(!y){y=null;break t}if(T=We(T.nextSibling),T===null){y=null;break t}}y=T}y!==null?(e.memoizedState={dehydrated:y,treeContext:ba!==null?{id:pn,overflow:gn}:null,retryLane:536870912},T=qe(18,null,null,0),T.stateNode=y,T.return=e,e.child=T,ge=e,re=null,T=!0):T=!1}T||Sa(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return y.data==="$!"?e.lanes=16:e.lanes=536870912,null;vn(e)}return y=r.children,r=r.fallback,o?(Gn(),o=e.mode,y=Ku({mode:"hidden",children:y},o),r=Oa(r,o,a,null),y.return=e,r.return=e,y.sibling=r,e.child=y,o=e.child,o.memoizedState=Xu(a),o.childLanes=Qu(t,g,a),e.memoizedState=$u,r):(qn(e),Zu(e,y))}if(T=t.memoizedState,T!==null&&(y=T.dehydrated,y!==null)){if(c)e.flags&256?(qn(e),e.flags&=-257,e=Fu(t,e,a)):e.memoizedState!==null?(Gn(),e.child=t.child,e.flags|=128,e=null):(Gn(),o=r.fallback,y=e.mode,r=Ku({mode:"visible",children:r.children},y),o=Oa(o,y,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,wa(e,t.child,null,a),r=e.child,r.memoizedState=Xu(a),r.childLanes=Qu(t,g,a),e.memoizedState=$u,e=o);else if(qn(e),y.data==="$!"){if(g=y.nextSibling&&y.nextSibling.dataset,g)var O=g.dgst;g=O,r=Error(l(419)),r.stack="",r.digest=g,cr({value:r,source:null,stack:null}),e=Fu(t,e,a)}else if(te||Sr(t,e,a,!1),g=(a&t.childLanes)!==0,te||g){if(g=zt,g!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==T.retryLane)throw T.retryLane=r,Pn(t,r),ve(g,t,r),W0}y.data==="$?"||Tc(),e=Fu(t,e,a)}else y.data==="$?"?(e.flags|=128,e.child=t.child,e=Gb.bind(null,t),y._reactRetry=e,e=null):(t=T.treeContext,re=We(y.nextSibling),ge=e,xt=!0,Fe=null,nn=!1,t!==null&&(Ne[Le++]=pn,Ne[Le++]=gn,Ne[Le++]=ba,pn=t.id,gn=t.overflow,ba=e),e=Zu(e,r.children),e.flags|=4096);return e}return o?(Gn(),o=r.fallback,y=e.mode,T=t.child,O=T.sibling,r=In(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&31457280,O!==null?o=In(O,o):(o=Oa(o,y,a,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,y=t.child.memoizedState,y===null?y=Xu(a):(T=y.cachePool,T!==null?(O=Jt._currentValue,T=T.parent!==O?{parent:O,pool:O}:T):T=o0(),y={baseLanes:y.baseLanes|a,cachePool:T}),o.memoizedState=y,o.childLanes=Qu(t,g,a),e.memoizedState=$u,r):(qn(e),a=t.child,t=a.sibling,a=In(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function Zu(t,e){return e=Ku({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ku(t,e){return Bm(t,e,0,null)}function Fu(t,e,a){return wa(e,t.child,null,a),t=Zu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function om(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tc(t.return,e,a)}function Ju(t,e,a,r,o){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=o)}function um(t,e,a){var r=e.pendingProps,o=r.revealOrder,c=r.tail;if(se(t,e,r.children,a),r=Ft.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,a,e);else if(t.tag===19)om(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Tt(Ft,r),o){case"forwards":for(a=e.child,o=null;a!==null;)t=a.alternate,t!==null&&ol(t)===null&&(o=a),a=a.sibling;a=o,a===null?(o=e.child,e.child=null):(o=a.sibling,a.sibling=null),Ju(e,!1,o,a,c);break;case"backwards":for(a=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&ol(t)===null){e.child=o;break}t=o.sibling,o.sibling=a,a=o,o=t}Ju(e,!0,a,null,c);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Sr(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(l(153));if(e.child!==null){for(t=e.child,a=In(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=In(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Wu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function zb(t,e,a){switch(e.tag){case 3:ks(e,e.stateNode.containerInfo),Xn(e,Jt,t.memoizedState.cache),ur();break;case 27:case 5:qo(e);break;case 4:ks(e,e.stateNode.containerInfo);break;case 10:Xn(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(qn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?lm(t,e,a):(qn(e),t=bn(t,e,a),t!==null?t.sibling:null);qn(e);break;case 19:var o=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(Sr(t,e,a,!1),r=(a&e.childLanes)!==0),o){if(r)return um(t,e,a);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Tt(Ft,Ft.current),r)break;return null;case 22:case 23:return e.lanes=0,nm(t,e,a);case 24:Xn(e,Jt,t.memoizedState.cache)}return bn(t,e,a)}function cm(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)te=!0;else{if(!Wu(t,a)&&(e.flags&128)===0)return te=!1,zb(t,e,a);te=(t.flags&131072)!==0}else te=!1,xt&&(e.flags&1048576)!==0&&Zh(e,al,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,o=r._init;if(r=o(r._payload),e.type=r,typeof r=="function")dc(r)?(t=Ma(r,t),e.tag=1,e=rm(null,e,r,t,a)):(e.tag=0,e=Yu(null,e,r,t,a));else{if(r!=null){if(o=r.$$typeof,o===S){e.tag=11,e=I0(null,e,r,t,a);break t}else if(o===C){e.tag=14,e=tm(null,e,r,t,a);break t}}throw e=F(r)||r,Error(l(306,e,""))}}return e;case 0:return Yu(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,o=Ma(r,e.pendingProps),rm(t,e,r,o,a);case 3:t:{if(ks(e,e.stateNode.containerInfo),t===null)throw Error(l(387));var c=e.pendingProps;o=e.memoizedState,r=o.element,ac(t,e),Tr(e,c,null,a);var g=e.memoizedState;if(c=g.cache,Xn(e,Jt,c),c!==o.cache&&ec(e,[Jt],a,!0),Er(),c=g.element,o.isDehydrated)if(o={element:c,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=sm(t,e,c,a);break t}else if(c!==r){r=ke(Error(l(424)),e),cr(r),e=sm(t,e,c,a);break t}else for(re=We(e.stateNode.containerInfo.firstChild),ge=e,xt=!0,Fe=null,nn=!0,a=a0(e,null,c,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),c===r){e=bn(t,e,a);break t}se(t,e,c,a)}e=e.child}return e;case 26:return xr(t,e),t===null?(a=hp(e.type,null,e.pendingProps,null))?e.memoizedState=a:xt||(a=e.type,t=e.pendingProps,r=kl(Nn.current).createElement(a),r[ce]=e,r[xe]=t,le(r,a,t),It(r),e.stateNode=r):e.memoizedState=hp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qo(e),t===null&&xt&&(r=e.stateNode=cp(e.type,e.pendingProps,Nn.current),ge=e,nn=!0,re=We(r.firstChild)),r=e.pendingProps.children,t!==null||xt?se(t,e,r,a):e.child=wa(e,null,r,a),xr(t,e),e.child;case 5:return t===null&&xt&&((o=r=re)&&(r=rx(r,e.type,e.pendingProps,nn),r!==null?(e.stateNode=r,ge=e,re=We(r.firstChild),nn=!1,o=!0):o=!1),o||Sa(e)),qo(e),o=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Lc(o,c)?r=null:g!==null&&Lc(o,g)&&(e.flags|=32),e.memoizedState!==null&&(o=Cu(t,e,wb,null,null,a),Ur._currentValue=o),xr(t,e),se(t,e,r,a),e.child;case 6:return t===null&&xt&&((t=a=re)&&(a=sx(a,e.pendingProps,nn),a!==null?(e.stateNode=a,ge=e,re=null,t=!0):t=!1),t||Sa(e)),null;case 13:return lm(t,e,a);case 4:return ks(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wa(e,null,r,a):se(t,e,r,a),e.child;case 11:return I0(t,e,e.type,e.pendingProps,a);case 7:return se(t,e,e.pendingProps,a),e.child;case 8:return se(t,e,e.pendingProps.children,a),e.child;case 12:return se(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,Xn(e,e.type,r.value),se(t,e,r.children,a),e.child;case 9:return o=e.type._context,r=e.pendingProps.children,za(e),o=fe(o),r=r(o),e.flags|=1,se(t,e,r,a),e.child;case 14:return tm(t,e,e.type,e.pendingProps,a);case 15:return em(t,e,e.type,e.pendingProps,a);case 19:return um(t,e,a);case 22:return nm(t,e,a);case 24:return za(e),r=fe(Jt),t===null?(o=Tu(),o===null&&(o=zt,c=wu(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),e.memoizedState={parent:r,cache:o},nc(e),Xn(e,Jt,o)):((t.lanes&a)!==0&&(ac(t,e),Tr(e,null,null,a),Er()),o=t.memoizedState,c=e.memoizedState,o.parent!==r?(o={parent:r,cache:r},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Xn(e,Jt,r)):(r=c.cache,Xn(e,Jt,r),r!==o.cache&&ec(e,[Jt],a,!0))),se(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}var Iu=gt(null),Ra=null,xn=null;function Xn(t,e,a){Tt(Iu,e._currentValue),e._currentValue=a}function Sn(t){t._currentValue=Iu.current,Et(Iu)}function tc(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function ec(t,e,a,r){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){var g=o.child;c=c.firstContext;t:for(;c!==null;){var y=c;c=o;for(var T=0;T<e.length;T++)if(y.context===e[T]){c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),tc(c.return,a,t),r||(g=null);break t}c=y.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(l(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),tc(g,a,t),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===t){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Sr(t,e,a,r){t=null;for(var o=e,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(l(387));if(g=g.memoizedProps,g!==null){var y=o.type;Ce(o.pendingProps.value,g.value)||(t!==null?t.push(y):t=[y])}}else if(o===Vs.current){if(g=o.alternate,g===null)throw Error(l(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(Ur):t=[Ur])}o=o.return}t!==null&&ec(e,t,a,r),e.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Ce(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function za(t){Ra=t,xn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function fe(t){return fm(Ra,t)}function Sl(t,e){return Ra===null&&za(t),fm(t,e)}function fm(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},xn===null){if(t===null)throw Error(l(308));xn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else xn=xn.next=e;return a}var Qn=!1;function nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ac(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Zn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(_t&2)!==0){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,e=el(t),Xh(t,null,a),e}return tl(t,r,e,a),el(t)}function wr(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194176)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,th(t,a)}}function ic(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?o=c=e:c=c.next=e}else o=c=e;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var rc=!1;function Er(){if(rc){var t=ui;if(t!==null)throw t}}function Tr(t,e,a,r){rc=!1;var o=t.updateQueue;Qn=!1;var c=o.firstBaseUpdate,g=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var T=y,O=T.next;T.next=null,g===null?c=O:g.next=O,g=T;var H=t.alternate;H!==null&&(H=H.updateQueue,y=H.lastBaseUpdate,y!==g&&(y===null?H.firstBaseUpdate=O:y.next=O,H.lastBaseUpdate=T))}if(c!==null){var G=o.baseState;g=0,H=O=T=null,y=c;do{var k=y.lane&-536870913,U=k!==y.lane;if(U?(bt&k)===k:(r&k)===k){k!==0&&k===oi&&(rc=!0),H!==null&&(H=H.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var et=t,ot=y;k=e;var Ut=a;switch(ot.tag){case 1:if(et=ot.payload,typeof et=="function"){G=et.call(Ut,G,k);break t}G=et;break t;case 3:et.flags=et.flags&-65537|128;case 0:if(et=ot.payload,k=typeof et=="function"?et.call(Ut,G,k):et,k==null)break t;G=tt({},G,k);break t;case 2:Qn=!0}}k=y.callback,k!==null&&(t.flags|=64,U&&(t.flags|=8192),U=o.callbacks,U===null?o.callbacks=[k]:U.push(k))}else U={lane:k,tag:y.tag,payload:y.payload,callback:y.callback,next:null},H===null?(O=H=U,T=G):H=H.next=U,g|=k;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;U=y,y=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);H===null&&(T=G),o.baseState=T,o.firstBaseUpdate=O,o.lastBaseUpdate=H,c===null&&(o.shared.lanes=0),ta|=g,t.lanes=g,t.memoizedState=G}}function dm(t,e){if(typeof t!="function")throw Error(l(191,t));t.call(e)}function hm(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)dm(a[t],e)}function Ar(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var o=r.next;a=o;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==o)}}catch(y){Mt(e,e.return,y)}}function Fn(t,e,a){try{var r=e.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){var g=r.inst,y=g.destroy;if(y!==void 0){g.destroy=void 0,o=e;var T=a;try{y()}catch(O){Mt(o,T,O)}}}r=r.next}while(r!==c)}}catch(O){Mt(e,e.return,O)}}function mm(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{hm(e,a)}catch(r){Mt(t,t.return,r)}}}function pm(t,e,a){a.props=Ma(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Mt(t,e,r)}}function Da(t,e){try{var a=t.ref;if(a!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var o=r;break;default:o=r}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Mt(t,e,c)}}function Me(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(o){Mt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Mt(t,e,o)}else a.current=null}function gm(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(o){Mt(t,t.return,o)}}function vm(t,e,a){try{var r=t.stateNode;tx(r,t.type,a,e),r[xe]=e}catch(o){Mt(t,t.return,o)}}function ym(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function sc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ym(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lc(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(lc(t,e,a),t=t.sibling;t!==null;)lc(t,e,a),t=t.sibling}function wl(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(wl(t,e,a),t=t.sibling;t!==null;)wl(t,e,a),t=t.sibling}var wn=!1,Nt=!1,oc=!1,bm=typeof WeakSet=="function"?WeakSet:Set,ee=null,xm=!1;function Db(t,e){if(t=t.containerInfo,kc=ql,t=Nh(t),cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,y=-1,T=-1,O=0,H=0,G=t,k=null;e:for(;;){for(var U;G!==a||o!==0&&G.nodeType!==3||(y=g+o),G!==c||r!==0&&G.nodeType!==3||(T=g+r),G.nodeType===3&&(g+=G.nodeValue.length),(U=G.firstChild)!==null;)k=G,G=U;for(;;){if(G===t)break e;if(k===a&&++O===o&&(y=g),k===c&&++H===r&&(T=g),(U=G.nextSibling)!==null)break;G=k,k=G.parentNode}G=U}a=y===-1||T===-1?null:{start:y,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:t,selectionRange:a},ql=!1,ee=e;ee!==null;)if(e=ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ee=t;else for(;ee!==null;){switch(e=ee,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,o=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var et=Ma(a.type,o,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(et,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Mt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Pc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(l(163))}if(t=e.sibling,t!==null){t.return=e.return,ee=t;break}ee=e.return}return et=xm,xm=!1,et}function Sm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Tn(t,a),r&4&&Ar(5,a);break;case 1:if(Tn(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(y){Mt(a,a.return,y)}else{var o=Ma(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Mt(a,a.return,y)}}r&64&&mm(a),r&512&&Da(a,a.return);break;case 3:if(Tn(t,a),r&64&&(r=a.updateQueue,r!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hm(r,t)}catch(y){Mt(a,a.return,y)}}break;case 26:Tn(t,a),r&512&&Da(a,a.return);break;case 27:case 5:Tn(t,a),e===null&&r&4&&gm(a),r&512&&Da(a,a.return);break;case 12:Tn(t,a);break;case 13:Tn(t,a),r&4&&Tm(t,a);break;case 22:if(o=a.memoizedState!==null||wn,!o){e=e!==null&&e.memoizedState!==null||Nt;var c=wn,g=Nt;wn=o,(Nt=e)&&!g?Jn(t,a,(a.subtreeFlags&8772)!==0):Tn(t,a),wn=c,Nt=g}r&512&&(a.memoizedProps.mode==="manual"?Da(a,a.return):Me(a,a.return));break;default:Tn(t,a)}}function wm(t){var e=t.alternate;e!==null&&(t.alternate=null,wm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Zo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Re=!1;function En(t,e,a){for(a=a.child;a!==null;)Em(t,e,a),a=a.sibling}function Em(t,e,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 26:Nt||Me(a,e),En(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Nt||Me(a,e);var r=Zt,o=Re;for(Zt=a.stateNode,En(t,e,a),a=a.stateNode,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Zo(a),Zt=r,Re=o;break;case 5:Nt||Me(a,e);case 6:o=Zt;var c=Re;if(Zt=null,En(t,e,a),Zt=o,Re=c,Zt!==null)if(Re)try{t=Zt,r=a.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(g){Mt(a,e,g)}else try{Zt.removeChild(a.stateNode)}catch(g){Mt(a,e,g)}break;case 18:Zt!==null&&(Re?(e=Zt,a=a.stateNode,e.nodeType===8?Hc(e.parentNode,a):e.nodeType===1&&Hc(e,a),Gr(e)):Hc(Zt,a.stateNode));break;case 4:r=Zt,o=Re,Zt=a.stateNode.containerInfo,Re=!0,En(t,e,a),Zt=r,Re=o;break;case 0:case 11:case 14:case 15:Nt||Fn(2,a,e),Nt||Fn(4,a,e),En(t,e,a);break;case 1:Nt||(Me(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&pm(a,e,r)),En(t,e,a);break;case 21:En(t,e,a);break;case 22:Nt||Me(a,e),Nt=(r=Nt)||a.memoizedState!==null,En(t,e,a),Nt=r;break;default:En(t,e,a)}}function Tm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gr(t)}catch(a){Mt(e,e.return,a)}}function Ob(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new bm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new bm),e;default:throw Error(l(435,t.tag))}}function uc(t,e){var a=Ob(t);e.forEach(function(r){var o=Yb.bind(null,t,r);a.has(r)||(a.add(r),r.then(o,o))})}function He(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r],c=t,g=e,y=g;t:for(;y!==null;){switch(y.tag){case 27:case 5:Zt=y.stateNode,Re=!1;break t;case 3:Zt=y.stateNode.containerInfo,Re=!0;break t;case 4:Zt=y.stateNode.containerInfo,Re=!0;break t}y=y.return}if(Zt===null)throw Error(l(160));Em(c,g,o),Zt=null,Re=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Am(e,t),e=e.sibling}var Je=null;function Am(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:He(e,t),Pe(t),r&4&&(Fn(3,t,t.return),Ar(3,t),Fn(5,t,t.return));break;case 1:He(e,t),Pe(t),r&512&&(Nt||a===null||Me(a,a.return)),r&64&&wn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var o=Je;if(He(e,t),Pe(t),r&512&&(Nt||a===null||Me(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,o=o.ownerDocument||o;e:switch(r){case"title":c=o.getElementsByTagName("title")[0],(!c||c[Ji]||c[ce]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(r),o.head.insertBefore(c,o.querySelector("head > title"))),le(c,r,a),c[ce]=t,It(c),r=c;break t;case"link":var g=gp("link","href",o).get(r+(a.href||""));if(g){for(var y=0;y<g.length;y++)if(c=g[y],c.getAttribute("href")===(a.href==null?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(y,1);break e}}c=o.createElement(r),le(c,r,a),o.head.appendChild(c);break;case"meta":if(g=gp("meta","content",o).get(r+(a.content||""))){for(y=0;y<g.length;y++)if(c=g[y],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(y,1);break e}}c=o.createElement(r),le(c,r,a),o.head.appendChild(c);break;default:throw Error(l(468,r))}c[ce]=t,It(c),r=c}t.stateNode=r}else vp(o,t.type,t.stateNode);else t.stateNode=pp(o,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?vp(o,t.type,t.stateNode):pp(o,r,t.memoizedProps)):r===null&&t.stateNode!==null&&vm(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){o=t.stateNode,c=t.memoizedProps;try{for(var T=o.firstChild;T;){var O=T.nextSibling,H=T.nodeName;T[Ji]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=O}for(var G=t.type,k=o.attributes;k.length;)o.removeAttributeNode(k[0]);le(o,G,c),o[ce]=t,o[xe]=c}catch(et){Mt(t,t.return,et)}}case 5:if(He(e,t),Pe(t),r&512&&(Nt||a===null||Me(a,a.return)),t.flags&32){o=t.stateNode;try{Fa(o,"")}catch(et){Mt(t,t.return,et)}}r&4&&t.stateNode!=null&&(o=t.memoizedProps,vm(t,o,a!==null?a.memoizedProps:o)),r&1024&&(oc=!0);break;case 6:if(He(e,t),Pe(t),r&4){if(t.stateNode===null)throw Error(l(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(et){Mt(t,t.return,et)}}break;case 3:if(Ul=null,o=Je,Je=Nl(e.containerInfo),He(e,t),Je=o,Pe(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(e.containerInfo)}catch(et){Mt(t,t.return,et)}oc&&(oc=!1,Cm(t));break;case 4:r=Je,Je=Nl(t.stateNode.containerInfo),He(e,t),Pe(t),Je=r;break;case 12:He(e,t),Pe(t);break;case 13:He(e,t),Pe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yc=en()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,uc(t,r)));break;case 22:if(r&512&&(Nt||a===null||Me(a,a.return)),T=t.memoizedState!==null,O=a!==null&&a.memoizedState!==null,H=wn,G=Nt,wn=H||T,Nt=G||O,He(e,t),Nt=G,wn=H,Pe(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=T?e._visibility&-2:e._visibility|1,T&&(e=wn||Nt,a===null||O||e||hi(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(a===null){O=a=e;try{if(o=O.stateNode,T)c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=O.stateNode,y=O.memoizedProps.style;var U=y!=null&&y.hasOwnProperty("display")?y.display:null;g.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(et){Mt(O,O.return,et)}}}else if(e.tag===6){if(a===null){O=e;try{O.stateNode.nodeValue=T?"":O.memoizedProps}catch(et){Mt(O,O.return,et)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,uc(t,a))));break;case 19:He(e,t),Pe(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,uc(t,r)));break;case 21:break;default:He(e,t),Pe(t)}}function Pe(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(ym(a)){var r=a;break t}a=a.return}throw Error(l(160))}switch(r.tag){case 27:var o=r.stateNode,c=sc(t);wl(t,c,o);break;case 5:var g=r.stateNode;r.flags&32&&(Fa(g,""),r.flags&=-33);var y=sc(t);wl(t,y,g);break;case 3:case 4:var T=r.stateNode.containerInfo,O=sc(t);lc(t,O,T);break;default:throw Error(l(161))}}}catch(H){Mt(t,t.return,H)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Cm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Tn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Sm(t,e.alternate,e),e=e.sibling}function hi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Fn(4,e,e.return),hi(e);break;case 1:Me(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&pm(e,e.return,a),hi(e);break;case 26:case 27:case 5:Me(e,e.return),hi(e);break;case 22:Me(e,e.return),e.memoizedState===null&&hi(e);break;default:hi(e)}t=t.sibling}}function Jn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,o=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Jn(o,c,a),Ar(4,c);break;case 1:if(Jn(o,c,a),r=c,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(O){Mt(r,r.return,O)}if(r=c,o=r.updateQueue,o!==null){var y=r.stateNode;try{var T=o.shared.hiddenCallbacks;if(T!==null)for(o.shared.hiddenCallbacks=null,o=0;o<T.length;o++)dm(T[o],y)}catch(O){Mt(r,r.return,O)}}a&&g&64&&mm(c),Da(c,c.return);break;case 26:case 27:case 5:Jn(o,c,a),a&&r===null&&g&4&&gm(c),Da(c,c.return);break;case 12:Jn(o,c,a);break;case 13:Jn(o,c,a),a&&g&4&&Tm(o,c);break;case 22:c.memoizedState===null&&Jn(o,c,a),Da(c,c.return);break;default:Jn(o,c,a)}e=e.sibling}}function cc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&pr(a))}function fc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pr(t))}function Wn(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mm(t,e,a,r),e=e.sibling}function Mm(t,e,a,r){var o=e.flags;switch(e.tag){case 0:case 11:case 15:Wn(t,e,a,r),o&2048&&Ar(9,e);break;case 3:Wn(t,e,a,r),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pr(t)));break;case 12:if(o&2048){Wn(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,y=c.onPostCommit;typeof y=="function"&&y(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){Mt(e,e.return,T)}}else Wn(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,e.memoizedState!==null?c._visibility&4?Wn(t,e,a,r):Cr(t,e):c._visibility&4?Wn(t,e,a,r):(c._visibility|=4,mi(t,e,a,r,(e.subtreeFlags&10256)!==0)),o&2048&&cc(e.alternate,e);break;case 24:Wn(t,e,a,r),o&2048&&fc(e.alternate,e);break;default:Wn(t,e,a,r)}}function mi(t,e,a,r,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,y=a,T=r,O=g.flags;switch(g.tag){case 0:case 11:case 15:mi(c,g,y,T,o),Ar(8,g);break;case 23:break;case 22:var H=g.stateNode;g.memoizedState!==null?H._visibility&4?mi(c,g,y,T,o):Cr(c,g):(H._visibility|=4,mi(c,g,y,T,o)),o&&O&2048&&cc(g.alternate,g);break;case 24:mi(c,g,y,T,o),o&&O&2048&&fc(g.alternate,g);break;default:mi(c,g,y,T,o)}e=e.sibling}}function Cr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,o=r.flags;switch(r.tag){case 22:Cr(a,r),o&2048&&cc(r.alternate,r);break;case 24:Cr(a,r),o&2048&&fc(r.alternate,r);break;default:Cr(a,r)}e=e.sibling}}var Mr=8192;function pi(t){if(t.subtreeFlags&Mr)for(t=t.child;t!==null;)Rm(t),t=t.sibling}function Rm(t){switch(t.tag){case 26:pi(t),t.flags&Mr&&t.memoizedState!==null&&bx(Je,t.memoizedState,t.memoizedProps);break;case 5:pi(t);break;case 3:case 4:var e=Je;Je=Nl(t.stateNode.containerInfo),pi(t),Je=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Mr,Mr=16777216,pi(t),Mr=e):pi(t));break;default:pi(t)}}function zm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Rr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];ee=r,Om(r,t)}zm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dm(t),t=t.sibling}function Dm(t){switch(t.tag){case 0:case 11:case 15:Rr(t),t.flags&2048&&Fn(9,t,t.return);break;case 3:Rr(t);break;case 12:Rr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,El(t)):Rr(t);break;default:Rr(t)}}function El(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];ee=r,Om(r,t)}zm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fn(8,e,e.return),El(e);break;case 22:a=e.stateNode,a._visibility&4&&(a._visibility&=-5,El(e));break;default:El(e)}t=t.sibling}}function Om(t,e){for(;ee!==null;){var a=ee;switch(a.tag){case 0:case 11:case 15:Fn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,ee=r;else t:for(a=t;ee!==null;){r=ee;var o=r.sibling,c=r.return;if(wm(r),r===a){ee=null;break t}if(o!==null){o.return=c,ee=o;break t}ee=c}}}function jb(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,a,r){return new jb(t,e,a,r)}function dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function In(t,e){var a=t.alternate;return a===null?(a=qe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function jm(t,e){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Tl(t,e,a,r,o,c){var g=0;if(r=t,typeof t=="function")dc(t)&&(g=1);else if(typeof t=="string")g=vx(t,a,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case h:return Oa(a.children,o,c,e);case p:g=8,o|=24;break;case v:return t=qe(12,a,e,o|2),t.elementType=v,t.lanes=c,t;case M:return t=qe(13,a,e,o),t.elementType=M,t.lanes=c,t;case D:return t=qe(19,a,e,o),t.elementType=D,t.lanes=c,t;case V:return Bm(a,o,c,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:case E:g=10;break t;case x:g=9;break t;case S:g=11;break t;case C:g=14;break t;case L:g=16,r=null;break t}g=29,a=Error(l(130,t===null?"null":typeof t,"")),r=null}return e=qe(g,a,e,o),e.elementType=t,e.type=r,e.lanes=c,e}function Oa(t,e,a,r){return t=qe(7,t,r,e),t.lanes=a,t}function Bm(t,e,a,r){t=qe(22,t,r,e),t.elementType=V,t.lanes=a;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var c=o._current;if(c===null)throw Error(l(456));if((o._pendingVisibility&2)===0){var g=Pn(c,2);g!==null&&(o._pendingVisibility|=2,ve(g,c,2))}},attach:function(){var c=o._current;if(c===null)throw Error(l(456));if((o._pendingVisibility&2)!==0){var g=Pn(c,2);g!==null&&(o._pendingVisibility&=-3,ve(g,c,2))}}};return t.stateNode=o,t}function hc(t,e,a){return t=qe(6,t,null,e),t.lanes=a,t}function mc(t,e,a){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function An(t){t.flags|=4}function _m(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!yp(e)){if(e=Ue.current,e!==null&&((bt&4194176)===bt?an!==null:(bt&62914560)!==bt&&(bt&536870912)===0||e!==an))throw dr=bu,Jh;t.flags|=8192}}function Al(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Wd():536870912,t.lanes|=e,vi|=e)}function zr(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var o=t.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&31457280,r|=o.flags&31457280,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function Bb(t,e,a){var r=e.pendingProps;switch(vu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Sn(Jt),Ya(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(or(e)?An(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Fe!==null&&(wc(Fe),Fe=null))),Bt(e),null;case 26:return a=e.memoizedState,t===null?(An(e),a!==null?(Bt(e),_m(e,a)):(Bt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(An(e),Bt(e),_m(e,a)):(Bt(e),e.flags&=-16777217):(t.memoizedProps!==r&&An(e),Bt(e),e.flags&=-16777217),null;case 27:Ns(e),a=Nn.current;var o=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Bt(e),null}t=pe.current,or(e)?Kh(e):(t=cp(o,r,a),e.stateNode=t,An(e))}return Bt(e),null;case 5:if(Ns(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(!r){if(e.stateNode===null)throw Error(l(166));return Bt(e),null}if(t=pe.current,or(e))Kh(e);else{switch(o=kl(Nn.current),t){case 1:t=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?o.createElement(a,{is:r.is}):o.createElement(a)}}t[ce]=e,t[xe]=r;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=t;t:switch(le(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&An(e)}}return Bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&An(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(l(166));if(t=Nn.current,or(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,o=ge,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}t[ce]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ip(t.nodeValue,a)),t||Sa(e)}else t=kl(t).createTextNode(r),t[ce]=e,e.stateNode=t}return Bt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=or(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(l(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[ce]=e}else ur(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),o=!1}else Fe!==null&&(wc(Fe),Fe=null),o=!0;if(!o)return e.flags&256?(vn(e),e):(vn(e),null)}if(vn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Al(e,e.updateQueue),Bt(e),null;case 4:return Ya(),t===null&&Bc(e.stateNode.containerInfo),Bt(e),null;case 10:return Sn(e.type),Bt(e),null;case 19:if(Et(Ft),o=e.memoizedState,o===null)return Bt(e),null;if(r=(e.flags&128)!==0,c=o.rendering,c===null)if(r)zr(o,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=ol(t),c!==null){for(e.flags|=128,zr(o,!1),t=c.updateQueue,e.updateQueue=t,Al(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)jm(a,t),a=a.sibling;return Tt(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&en()>Cl&&(e.flags|=128,r=!0,zr(o,!1),e.lanes=4194304)}else{if(!r)if(t=ol(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Al(e,t),zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!xt)return Bt(e),null}else 2*en()-o.renderingStartTime>Cl&&a!==536870912&&(e.flags|=128,r=!0,zr(o,!1),e.lanes=4194304);o.isBackwards?(c.sibling=e.child,e.child=c):(t=o.last,t!==null?t.sibling=c:e.child=c,o.last=c)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=en(),e.sibling=null,t=Ft.current,Tt(Ft,r?t&1|2:t&1),e):(Bt(e),null);case 22:case 23:return vn(e),Su(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),a=e.updateQueue,a!==null&&Al(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&Et(Ea),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sn(Jt),Bt(e),null;case 25:return null}throw Error(l(156,e.tag))}function _b(t,e){switch(vu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sn(Jt),Ya(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ns(e),null;case 13:if(vn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(l(340));ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(Ft),null;case 4:return Ya(),null;case 10:return Sn(e.type),null;case 22:case 23:return vn(e),Su(),t!==null&&Et(Ea),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sn(Jt),null;case 25:return null;default:return null}}function Vm(t,e){switch(vu(e),e.tag){case 3:Sn(Jt),Ya();break;case 26:case 27:case 5:Ns(e);break;case 4:Ya();break;case 13:vn(e);break;case 19:Et(Ft);break;case 10:Sn(e.type);break;case 22:case 23:vn(e),Su(),t!==null&&Et(Ea);break;case 24:Sn(Jt)}}var Vb={getCacheForType:function(t){var e=fe(Jt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},kb=typeof WeakMap=="function"?WeakMap:Map,_t=0,zt=null,pt=null,bt=0,Dt=0,ze=null,Cn=!1,gi=!1,pc=!1,Mn=0,Lt=0,ta=0,ja=0,gc=0,Ge=0,vi=0,Dr=null,sn=null,vc=!1,yc=0,Cl=1/0,Ml=null,ea=null,Rl=!1,Ba=null,Or=0,bc=0,xc=null,jr=0,Sc=null;function De(){if((_t&2)!==0&&bt!==0)return bt&-bt;if(X.T!==null){var t=oi;return t!==0?t:zc()}return nh()}function km(){Ge===0&&(Ge=(bt&536870912)===0||xt?Jd():536870912);var t=Ue.current;return t!==null&&(t.flags|=32),Ge}function ve(t,e,a){(t===zt&&Dt===2||t.cancelPendingCommit!==null)&&(yi(t,0),Rn(t,bt,Ge,!1)),Fi(t,a),((_t&2)===0||t!==zt)&&(t===zt&&((_t&2)===0&&(ja|=a),Lt===4&&Rn(t,bt,Ge,!1)),ln(t))}function Nm(t,e,a){if((_t&6)!==0)throw Error(l(327));var r=!a&&(e&60)===0&&(e&t.expiredLanes)===0||Ki(t,e),o=r?Ub(t,e):Ac(t,e,!0),c=r;do{if(o===0){gi&&!r&&Rn(t,e,0,!1);break}else if(o===6)Rn(t,e,0,!Cn);else{if(a=t.current.alternate,c&&!Nb(a)){o=Ac(t,e,!1),c=!1;continue}if(o===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var y=t;o=Dr;var T=y.current.memoizedState.isDehydrated;if(T&&(yi(y,g).flags|=256),g=Ac(y,g,!1),g!==2){if(pc&&!T){y.errorRecoveryDisabledLanes|=c,ja|=c,o=4;break t}c=sn,sn=o,c!==null&&wc(c)}o=g}if(c=!1,o!==2)continue}}if(o===1){yi(t,0),Rn(t,e,0,!0);break}t:{switch(r=t,o){case 0:case 1:throw Error(l(345));case 4:if((e&4194176)===e){Rn(r,e,Ge,!Cn);break t}break;case 2:sn=null;break;case 3:case 5:break;default:throw Error(l(329))}if(r.finishedWork=a,r.finishedLanes=e,(e&62914560)===e&&(c=yc+300-en(),10<c)){if(Rn(r,e,Ge,!Cn),Ps(r,0)!==0)break t;r.timeoutHandle=lp(Lm.bind(null,r,a,sn,Ml,vc,e,Ge,ja,vi,Cn,2,-0,0),c);break t}Lm(r,a,sn,Ml,vc,e,Ge,ja,vi,Cn,0,-0,0)}}break}while(!0);ln(t)}function wc(t){sn===null?sn=t:sn.push.apply(sn,t)}function Lm(t,e,a,r,o,c,g,y,T,O,H,G,k){var U=e.subtreeFlags;if((U&8192||(U&16785408)===16785408)&&(Lr={stylesheets:null,count:0,unsuspend:yx},Rm(e),e=xx(),e!==null)){t.cancelPendingCommit=e($m.bind(null,t,a,r,o,g,y,T,1,G,k)),Rn(t,c,g,!O);return}$m(t,a,r,o,g,y,T,H,G,k)}function Nb(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var o=a[r],c=o.getSnapshot;o=o.value;try{if(!Ce(c(),o))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e,a,r){e&=~gc,e&=~ja,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var o=e;0<o;){var c=31-Ae(o),g=1<<c;r[c]=-1,o&=~g}a!==0&&Id(t,a,e)}function zl(){return(_t&6)===0?(Br(0),!1):!0}function Ec(){if(pt!==null){if(Dt===0)var t=pt.return;else t=pt,xn=Ra=null,zu(t),si=null,hr=0,t=pt;for(;t!==null;)Vm(t.alternate,t),t=t.return;pt=null}}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,nx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ec(),zt=t,pt=a=In(t.current,null),bt=e,Dt=0,ze=null,Cn=!1,gi=Ki(t,e),pc=!1,vi=Ge=gc=ja=ta=Lt=0,sn=Dr=null,vc=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var o=31-Ae(r),c=1<<o;e|=t[o],r&=~c}return Mn=e,Is(),a}function Um(t,e){ht=null,X.H=rn,e===fr?(e=t0(),Dt=3):e===Jh?(e=t0(),Dt=4):Dt=e===W0?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ze=e,pt===null&&(Lt=1,bl(t,ke(e,t.current)))}function Hm(){var t=X.H;return X.H=rn,t===null?rn:t}function Pm(){var t=X.A;return X.A=Vb,t}function Tc(){Lt=4,Cn||(bt&4194176)!==bt&&Ue.current!==null||(gi=!0),(ta&134217727)===0&&(ja&134217727)===0||zt===null||Rn(zt,bt,Ge,!1)}function Ac(t,e,a){var r=_t;_t|=2;var o=Hm(),c=Pm();(zt!==t||bt!==e)&&(Ml=null,yi(t,e)),e=!1;var g=Lt;t:do try{if(Dt!==0&&pt!==null){var y=pt,T=ze;switch(Dt){case 8:Ec(),g=6;break t;case 3:case 2:case 6:Ue.current===null&&(e=!0);var O=Dt;if(Dt=0,ze=null,bi(t,y,T,O),a&&gi){g=0;break t}break;default:O=Dt,Dt=0,ze=null,bi(t,y,T,O)}}Lb(),g=Lt;break}catch(H){Um(t,H)}while(!0);return e&&t.shellSuspendCounter++,xn=Ra=null,_t=r,X.H=o,X.A=c,pt===null&&(zt=null,bt=0,Is()),g}function Lb(){for(;pt!==null;)qm(pt)}function Ub(t,e){var a=_t;_t|=2;var r=Hm(),o=Pm();zt!==t||bt!==e?(Ml=null,Cl=en()+500,yi(t,e)):gi=Ki(t,e);t:do try{if(Dt!==0&&pt!==null){e=pt;var c=ze;e:switch(Dt){case 1:Dt=0,ze=null,bi(t,e,c,1);break;case 2:if(Wh(c)){Dt=0,ze=null,Gm(e);break}e=function(){Dt===2&&zt===t&&(Dt=7),ln(t)},c.then(e,e);break t;case 3:Dt=7;break t;case 4:Dt=5;break t;case 7:Wh(c)?(Dt=0,ze=null,Gm(e)):(Dt=0,ze=null,bi(t,e,c,7));break;case 5:var g=null;switch(pt.tag){case 26:g=pt.memoizedState;case 5:case 27:var y=pt;if(!g||yp(g)){Dt=0,ze=null;var T=y.sibling;if(T!==null)pt=T;else{var O=y.return;O!==null?(pt=O,Dl(O)):pt=null}break e}}Dt=0,ze=null,bi(t,e,c,5);break;case 6:Dt=0,ze=null,bi(t,e,c,6);break;case 8:Ec(),Lt=6;break t;default:throw Error(l(462))}}Hb();break}catch(H){Um(t,H)}while(!0);return xn=Ra=null,X.H=r,X.A=o,_t=a,pt!==null?0:(zt=null,bt=0,Is(),Lt)}function Hb(){for(;pt!==null&&!o2();)qm(pt)}function qm(t){var e=cm(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Dl(t):pt=e}function Gm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=im(a,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=im(a,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:zu(e);default:Vm(a,e),e=pt=jm(e,Mn),e=cm(a,e,Mn)}t.memoizedProps=t.pendingProps,e===null?Dl(t):pt=e}function bi(t,e,a,r){xn=Ra=null,zu(e),si=null,hr=0;var o=e.return;try{if(Rb(t,o,e,a,bt)){Lt=1,bl(t,ke(a,t.current)),pt=null;return}}catch(c){if(o!==null)throw pt=o,c;Lt=1,bl(t,ke(a,t.current)),pt=null;return}e.flags&32768?(xt||r===1?t=!0:gi||(bt&536870912)!==0?t=!1:(Cn=t=!0,(r===2||r===3||r===6)&&(r=Ue.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ym(e,t)):Dl(e)}function Dl(t){var e=t;do{if((e.flags&32768)!==0){Ym(e,Cn);return}t=e.return;var a=Bb(e.alternate,e,Mn);if(a!==null){pt=a;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Ym(t,e){do{var a=_b(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Lt=6,pt=null}function $m(t,e,a,r,o,c,g,y,T,O){var H=X.T,G=K.p;try{K.p=2,X.T=null,Pb(t,e,a,r,G,o,c,g,y,T,O)}finally{X.T=H,K.p=G}}function Pb(t,e,a,r,o,c,g,y){do xi();while(Ba!==null);if((_t&6)!==0)throw Error(l(327));var T=t.finishedWork;if(r=t.finishedLanes,T===null)return null;if(t.finishedWork=null,t.finishedLanes=0,T===t.current)throw Error(l(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var O=T.lanes|T.childLanes;if(O|=mu,b2(t,r,O,c,g,y),t===zt&&(pt=zt=null,bt=0),(T.subtreeFlags&10256)===0&&(T.flags&10256)===0||Rl||(Rl=!0,bc=O,xc=a,$b(Ls,function(){return xi(),null})),a=(T.flags&15990)!==0,(T.subtreeFlags&15990)!==0||a?(a=X.T,X.T=null,c=K.p,K.p=2,g=_t,_t|=4,Db(t,T),Am(T,t),fb(Nc,t.containerInfo),ql=!!kc,Nc=kc=null,t.current=T,Sm(t,T.alternate,T),u2(),_t=g,K.p=c,X.T=a):t.current=T,Rl?(Rl=!1,Ba=t,Or=r):Xm(t,O),O=t.pendingLanes,O===0&&(ea=null),m2(T.stateNode),ln(t),e!==null)for(o=t.onRecoverableError,T=0;T<e.length;T++)O=e[T],o(O.value,{componentStack:O.stack});return(Or&3)!==0&&xi(),O=t.pendingLanes,(r&4194218)!==0&&(O&42)!==0?t===Sc?jr++:(jr=0,Sc=t):jr=0,Br(0),null}function Xm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,pr(e)))}function xi(){if(Ba!==null){var t=Ba,e=bc;bc=0;var a=eh(Or),r=X.T,o=K.p;try{if(K.p=32>a?32:a,X.T=null,Ba===null)var c=!1;else{a=xc,xc=null;var g=Ba,y=Or;if(Ba=null,Or=0,(_t&6)!==0)throw Error(l(331));var T=_t;if(_t|=4,Dm(g.current),Mm(g,g.current,y,a),_t=T,Br(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Zi,g)}catch{}c=!0}return c}finally{K.p=o,X.T=r,Xm(t,e)}}return!1}function Qm(t,e,a){e=ke(a,e),e=Gu(t.stateNode,e,2),t=Kn(t,e,2),t!==null&&(Fi(t,2),ln(t))}function Mt(t,e,a){if(t.tag===3)Qm(t,t,a);else for(;e!==null;){if(e.tag===3){Qm(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ea===null||!ea.has(r))){t=ke(a,t),a=F0(2),r=Kn(e,a,2),r!==null&&(J0(a,r,e,t),Fi(r,2),ln(r));break}}e=e.return}}function Cc(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new kb;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(a)||(pc=!0,o.add(a),t=qb.bind(null,t,e,a),e.then(t,t))}function qb(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(bt&a)===a&&(Lt===4||Lt===3&&(bt&62914560)===bt&&300>en()-yc?(_t&2)===0&&yi(t,0):gc|=a,vi===bt&&(vi=0)),ln(t)}function Zm(t,e){e===0&&(e=Wd()),t=Pn(t,e),t!==null&&(Fi(t,e),ln(t))}function Gb(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Zm(t,a)}function Yb(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,o=t.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(e),Zm(t,a)}function $b(t,e){return Yo(t,e)}var Ol=null,Si=null,Mc=!1,jl=!1,Rc=!1,_a=0;function ln(t){t!==Si&&t.next===null&&(Si===null?Ol=Si=t:Si=Si.next=t),jl=!0,Mc||(Mc=!0,Qb(Xb))}function Br(t,e){if(!Rc&&jl){Rc=!0;do for(var a=!1,r=Ol;r!==null;){if(t!==0){var o=r.pendingLanes;if(o===0)var c=0;else{var g=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-Ae(42|t)+1)-1,c&=o&~(g&~y),c=c&201326677?c&201326677|1:c?c|2:0}c!==0&&(a=!0,Jm(r,c))}else c=bt,c=Ps(r,r===zt?c:0),(c&3)===0||Ki(r,c)||(a=!0,Jm(r,c));r=r.next}while(a);Rc=!1}}function Xb(){jl=Mc=!1;var t=0;_a!==0&&(ex()&&(t=_a),_a=0);for(var e=en(),a=null,r=Ol;r!==null;){var o=r.next,c=Km(r,e);c===0?(r.next=null,a===null?Ol=o:a.next=o,o===null&&(Si=a)):(a=r,(t!==0||(c&3)!==0)&&(jl=!0)),r=o}Br(t)}function Km(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,o=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Ae(c),y=1<<g,T=o[g];T===-1?((y&a)===0||(y&r)!==0)&&(o[g]=y2(y,e)):T<=e&&(t.expiredLanes|=y),c&=~y}if(e=zt,a=bt,a=Ps(t,t===e?a:0),r=t.callbackNode,a===0||t===e&&Dt===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$o(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ki(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&$o(r),eh(a)){case 2:case 8:a=Kd;break;case 32:a=Ls;break;case 268435456:a=Fd;break;default:a=Ls}return r=Fm.bind(null,t),a=Yo(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&$o(r),t.callbackPriority=2,t.callbackNode=null,2}function Fm(t,e){var a=t.callbackNode;if(xi()&&t.callbackNode!==a)return null;var r=bt;return r=Ps(t,t===zt?r:0),r===0?null:(Nm(t,r,e),Km(t,en()),t.callbackNode!=null&&t.callbackNode===a?Fm.bind(null,t):null)}function Jm(t,e){if(xi())return null;Nm(t,e,!0)}function Qb(t){ax(function(){(_t&6)!==0?Yo(Zd,t):t()})}function zc(){return _a===0&&(_a=Jd()),_a}function Wm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xs(""+t)}function Im(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Zb(t,e,a,r,o){if(e==="submit"&&a&&a.stateNode===o){var c=Wm((o[xe]||null).action),g=r.submitter;g&&(e=(e=g[xe]||null)?Wm(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var y=new Fs("action","action",null,r,o);t.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(_a!==0){var T=g?Im(o,g):new FormData(o);Lu(a,{pending:!0,data:T,method:o.method,action:c},null,T)}}else typeof c=="function"&&(y.preventDefault(),T=g?Im(o,g):new FormData(o),Lu(a,{pending:!0,data:T,method:o.method,action:c},c,T))},currentTarget:o}]})}}for(var Dc=0;Dc<$h.length;Dc++){var Oc=$h[Dc],Kb=Oc.toLowerCase(),Fb=Oc[0].toUpperCase()+Oc.slice(1);Ke(Kb,"on"+Fb)}Ke(Hh,"onAnimationEnd"),Ke(Ph,"onAnimationIteration"),Ke(qh,"onAnimationStart"),Ke("dblclick","onDoubleClick"),Ke("focusin","onFocus"),Ke("focusout","onBlur"),Ke(hb,"onTransitionRun"),Ke(mb,"onTransitionStart"),Ke(pb,"onTransitionCancel"),Ke(Gh,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_r));function tp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],o=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var y=r[g],T=y.instance,O=y.currentTarget;if(y=y.listener,T!==c&&o.isPropagationStopped())break t;c=y,o.currentTarget=O;try{c(o)}catch(H){yl(H)}o.currentTarget=null,c=T}else for(g=0;g<r.length;g++){if(y=r[g],T=y.instance,O=y.currentTarget,y=y.listener,T!==c&&o.isPropagationStopped())break t;c=y,o.currentTarget=O;try{c(o)}catch(H){yl(H)}o.currentTarget=null,c=T}}}}function yt(t,e){var a=e[Qo];a===void 0&&(a=e[Qo]=new Set);var r=t+"__bubble";a.has(r)||(ep(e,t,2,!1),a.add(r))}function jc(t,e,a){var r=0;e&&(r|=4),ep(a,t,r,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Bc(t){if(!t[Bl]){t[Bl]=!0,ih.forEach(function(a){a!=="selectionchange"&&(Jb.has(a)||jc(a,!1,t),jc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,jc("selectionchange",!1,e))}}function ep(t,e,a,r){switch(Tp(e)){case 2:var o=Ex;break;case 8:o=Tx;break;default:o=Xc}a=o.bind(null,e,a,t),o=void 0,!eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?t.addEventListener(e,a,{capture:!0,passive:o}):t.addEventListener(e,a,!0):o!==void 0?t.addEventListener(e,a,{passive:o}):t.addEventListener(e,a,!1)}function _c(t,e,a,r,o){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var y=r.stateNode.containerInfo;if(y===o||y.nodeType===8&&y.parentNode===o)break;if(g===4)for(g=r.return;g!==null;){var T=g.tag;if((T===3||T===4)&&(T=g.stateNode.containerInfo,T===o||T.nodeType===8&&T.parentNode===o))return;g=g.return}for(;y!==null;){if(g=ma(y),g===null)return;if(T=g.tag,T===5||T===6||T===26||T===27){r=c=g;continue t}y=y.parentNode}}r=r.return}gh(function(){var O=c,H=Io(a),G=[];t:{var k=Yh.get(t);if(k!==void 0){var U=Fs,et=t;switch(t){case"keypress":if(Zs(a)===0)break t;case"keydown":case"keyup":U=Y2;break;case"focusin":et="focus",U=ru;break;case"focusout":et="blur",U=ru;break;case"beforeblur":case"afterblur":U=ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=j2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Q2;break;case Hh:case Ph:case qh:U=V2;break;case Gh:U=K2;break;case"scroll":case"scrollend":U=D2;break;case"wheel":U=J2;break;case"copy":case"cut":case"paste":U=N2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Sh;break;case"toggle":case"beforetoggle":U=I2}var ot=(e&4)!==0,Ut=!ot&&(t==="scroll"||t==="scrollend"),B=ot?k!==null?k+"Capture":null:k;ot=[];for(var z=O,_;z!==null;){var q=z;if(_=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||_===null||B===null||(q=Ii(z,B),q!=null&&ot.push(Vr(z,q,_))),Ut)break;z=z.return}0<ot.length&&(k=new U(k,et,null,a,H),G.push({event:k,listeners:ot}))}}if((e&7)===0){t:{if(k=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",k&&a!==Wo&&(et=a.relatedTarget||a.fromElement)&&(ma(et)||et[$a]))break t;if((U||k)&&(k=H.window===H?H:(k=H.ownerDocument)?k.defaultView||k.parentWindow:window,U?(et=a.relatedTarget||a.toElement,U=O,et=et?ma(et):null,et!==null&&(Ut=I(et),ot=et.tag,et!==Ut||ot!==5&&ot!==27&&ot!==6)&&(et=null)):(U=null,et=O),U!==et)){if(ot=bh,q="onMouseLeave",B="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Sh,q="onPointerLeave",B="onPointerEnter",z="pointer"),Ut=U==null?k:Wi(U),_=et==null?k:Wi(et),k=new ot(q,z+"leave",U,a,H),k.target=Ut,k.relatedTarget=_,q=null,ma(H)===O&&(ot=new ot(B,z+"enter",et,a,H),ot.target=_,ot.relatedTarget=Ut,q=ot),Ut=q,U&&et)e:{for(ot=U,B=et,z=0,_=ot;_;_=wi(_))z++;for(_=0,q=B;q;q=wi(q))_++;for(;0<z-_;)ot=wi(ot),z--;for(;0<_-z;)B=wi(B),_--;for(;z--;){if(ot===B||B!==null&&ot===B.alternate)break e;ot=wi(ot),B=wi(B)}ot=null}else ot=null;U!==null&&np(G,k,U,ot,!1),et!==null&&Ut!==null&&np(G,Ut,et,ot,!0)}}t:{if(k=O?Wi(O):window,U=k.nodeName&&k.nodeName.toLowerCase(),U==="select"||U==="input"&&k.type==="file")var W=zh;else if(Mh(k))if(Dh)W=ub;else{W=lb;var mt=sb}else U=k.nodeName,!U||U.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?O&&Jo(O.elementType)&&(W=zh):W=ob;if(W&&(W=W(t,O))){Rh(G,W,a,H);break t}mt&&mt(t,k,O),t==="focusout"&&O&&k.type==="number"&&O.memoizedProps.value!=null&&Fo(k,"number",k.value)}switch(mt=O?Wi(O):window,t){case"focusin":(Mh(mt)||mt.contentEditable==="true")&&(ti=mt,fu=O,lr=null);break;case"focusout":lr=fu=ti=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Lh(G,a,H);break;case"selectionchange":if(db)break;case"keydown":case"keyup":Lh(G,a,H)}var at;if(lu)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Ia?Ah(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(wh&&a.locale!=="ko"&&(Ia||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ia&&(at=vh()):(Hn=H,nu="value"in Hn?Hn.value:Hn.textContent,Ia=!0)),mt=_l(O,rt),0<mt.length&&(rt=new xh(rt,t,null,a,H),G.push({event:rt,listeners:mt}),at?rt.data=at:(at=Ch(a),at!==null&&(rt.data=at)))),(at=eb?nb(t,a):ab(t,a))&&(rt=_l(O,"onBeforeInput"),0<rt.length&&(mt=new xh("onBeforeInput","beforeinput",null,a,H),G.push({event:mt,listeners:rt}),mt.data=at)),Zb(G,t,O,a,H)}tp(G,e)})}function Vr(t,e,a){return{instance:t,listener:e,currentTarget:a}}function _l(t,e){for(var a=e+"Capture",r=[];t!==null;){var o=t,c=o.stateNode;o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=Ii(t,a),o!=null&&r.unshift(Vr(t,o,c)),o=Ii(t,e),o!=null&&r.push(Vr(t,o,c))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function np(t,e,a,r,o){for(var c=e._reactName,g=[];a!==null&&a!==r;){var y=a,T=y.alternate,O=y.stateNode;if(y=y.tag,T!==null&&T===r)break;y!==5&&y!==26&&y!==27||O===null||(T=O,o?(O=Ii(a,c),O!=null&&g.unshift(Vr(a,O,T))):o||(O=Ii(a,c),O!=null&&g.push(Vr(a,O,T)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var Wb=/\r\n?/g,Ib=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(Wb,`
`).replace(Ib,"")}function ip(t,e){return e=ap(e),ap(t)===e}function Vl(){}function Ct(t,e,a,r,o,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Fa(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Fa(t,""+r);break;case"className":Gs(t,"class",r);break;case"tabIndex":Gs(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Gs(t,a,r);break;case"style":mh(t,r,c);break;case"data":if(e!=="object"){Gs(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xs(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Ct(t,e,"name",o.name,o,null),Ct(t,e,"formEncType",o.formEncType,o,null),Ct(t,e,"formMethod",o.formMethod,o,null),Ct(t,e,"formTarget",o.formTarget,o,null)):(Ct(t,e,"encType",o.encType,o,null),Ct(t,e,"method",o.method,o,null),Ct(t,e,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Xs(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Vl);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Xs(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":yt("beforetoggle",t),yt("toggle",t),qs(t,"popover",r);break;case"xlinkActuate":mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":mn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":mn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":mn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":mn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":qs(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=R2.get(a)||a,qs(t,a,r))}}function Vc(t,e,a,r,o,c){switch(a){case"style":mh(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(o.children!=null)throw Error(l(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Fa(t,r):(typeof r=="number"||typeof r=="bigint")&&Fa(t,""+r);break;case"onScroll":r!=null&&yt("scroll",t);break;case"onScrollEnd":r!=null&&yt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rh.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),e=a.slice(2,o?a.length-7:void 0),c=t[xe]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,o),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,o);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):qs(t,a,r)}}}function le(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var r=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ct(t,e,c,g,a,null)}}o&&Ct(t,e,"srcSet",a.srcSet,a,null),r&&Ct(t,e,"src",a.src,a,null);return;case"input":yt("invalid",t);var y=c=g=o=null,T=null,O=null;for(r in a)if(a.hasOwnProperty(r)){var H=a[r];if(H!=null)switch(r){case"name":o=H;break;case"type":g=H;break;case"checked":T=H;break;case"defaultChecked":O=H;break;case"value":c=H;break;case"defaultValue":y=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,e));break;default:Ct(t,e,r,H,a,null)}}ch(t,c,y,T,O,g,o,!1),Ys(t);return;case"select":yt("invalid",t),r=g=c=null;for(o in a)if(a.hasOwnProperty(o)&&(y=a[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":g=y;break;case"multiple":r=y;default:Ct(t,e,o,y,a,null)}e=c,a=g,t.multiple=!!r,e!=null?Ka(t,!!r,e,!1):a!=null&&Ka(t,!!r,a,!0);return;case"textarea":yt("invalid",t),c=o=r=null;for(g in a)if(a.hasOwnProperty(g)&&(y=a[g],y!=null))switch(g){case"value":r=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(l(91));break;default:Ct(t,e,g,y,a,null)}dh(t,r,o,c),Ys(t);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(r=a[T],r!=null))switch(T){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ct(t,e,T,r,a,null)}return;case"dialog":yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(r=0;r<_r.length;r++)yt(_r[r],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in a)if(a.hasOwnProperty(O)&&(r=a[O],r!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:Ct(t,e,O,r,a,null)}return;default:if(Jo(e)){for(H in a)a.hasOwnProperty(H)&&(r=a[H],r!==void 0&&Vc(t,e,H,r,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(r=a[y],r!=null&&Ct(t,e,y,r,a,null))}function tx(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,g=null,y=null,T=null,O=null,H=null;for(U in a){var G=a[U];if(a.hasOwnProperty(U)&&G!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":T=G;default:r.hasOwnProperty(U)||Ct(t,e,U,null,r,G)}}for(var k in r){var U=r[k];if(G=a[k],r.hasOwnProperty(k)&&(U!=null||G!=null))switch(k){case"type":c=U;break;case"name":o=U;break;case"checked":O=U;break;case"defaultChecked":H=U;break;case"value":g=U;break;case"defaultValue":y=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,e));break;default:U!==G&&Ct(t,e,k,U,r,G)}}Ko(t,g,y,T,O,H,c,o);return;case"select":U=g=y=k=null;for(c in a)if(T=a[c],a.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":U=T;default:r.hasOwnProperty(c)||Ct(t,e,c,null,r,T)}for(o in r)if(c=r[o],T=a[o],r.hasOwnProperty(o)&&(c!=null||T!=null))switch(o){case"value":k=c;break;case"defaultValue":y=c;break;case"multiple":g=c;default:c!==T&&Ct(t,e,o,c,r,T)}e=y,a=g,r=U,k!=null?Ka(t,!!a,k,!1):!!r!=!!a&&(e!=null?Ka(t,!!a,e,!0):Ka(t,!!a,a?[]:"",!1));return;case"textarea":U=k=null;for(y in a)if(o=a[y],a.hasOwnProperty(y)&&o!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ct(t,e,y,null,r,o)}for(g in r)if(o=r[g],c=a[g],r.hasOwnProperty(g)&&(o!=null||c!=null))switch(g){case"value":k=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==c&&Ct(t,e,g,o,r,c)}fh(t,k,U);return;case"option":for(var et in a)if(k=a[et],a.hasOwnProperty(et)&&k!=null&&!r.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Ct(t,e,et,null,r,k)}for(T in r)if(k=r[T],U=a[T],r.hasOwnProperty(T)&&k!==U&&(k!=null||U!=null))switch(T){case"selected":t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ct(t,e,T,k,r,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)k=a[ot],a.hasOwnProperty(ot)&&k!=null&&!r.hasOwnProperty(ot)&&Ct(t,e,ot,null,r,k);for(O in r)if(k=r[O],U=a[O],r.hasOwnProperty(O)&&k!==U&&(k!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(137,e));break;default:Ct(t,e,O,k,r,U)}return;default:if(Jo(e)){for(var Ut in a)k=a[Ut],a.hasOwnProperty(Ut)&&k!==void 0&&!r.hasOwnProperty(Ut)&&Vc(t,e,Ut,void 0,r,k);for(H in r)k=r[H],U=a[H],!r.hasOwnProperty(H)||k===U||k===void 0&&U===void 0||Vc(t,e,H,k,r,U);return}}for(var B in a)k=a[B],a.hasOwnProperty(B)&&k!=null&&!r.hasOwnProperty(B)&&Ct(t,e,B,null,r,k);for(G in r)k=r[G],U=a[G],!r.hasOwnProperty(G)||k===U||k==null&&U==null||Ct(t,e,G,k,r,U)}var kc=null,Nc=null;function kl(t){return t.nodeType===9?t:t.ownerDocument}function rp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uc=null;function ex(){var t=window.event;return t&&t.type==="popstate"?t===Uc?!1:(Uc=t,!0):(Uc=null,!1)}var lp=typeof setTimeout=="function"?setTimeout:void 0,nx=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(ix)}:lp;function ix(t){setTimeout(function(){throw t})}function Hc(t,e){var a=e,r=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){t.removeChild(o),Gr(e);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Gr(e)}function Pc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pc(a),Zo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rx(t,e,a,r){for(;t.nodeType===1;){var o=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ji])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==o.rel||t.getAttribute("href")!==(o.href==null?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=We(t.nextSibling),t===null)break}return null}function sx(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=We(t.nextSibling),t===null))return null;return t}function We(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function cp(t,e,a){switch(e=kl(a),t){case"html":if(t=e.documentElement,!t)throw Error(l(452));return t;case"head":if(t=e.head,!t)throw Error(l(453));return t;case"body":if(t=e.body,!t)throw Error(l(454));return t;default:throw Error(l(451))}}var Ye=new Map,fp=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var zn=K.d;K.d={f:lx,r:ox,D:ux,C:cx,L:fx,m:dx,X:mx,S:hx,M:px};function lx(){var t=zn.f(),e=zl();return t||e}function ox(t){var e=Xa(t);e!==null&&e.tag===5&&e.type==="form"?L0(e):zn.r(t)}var Ei=typeof document>"u"?null:document;function dp(t,e,a){var r=Ei;if(r&&typeof e=="string"&&e){var o=_e(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),fp.has(o)||(fp.add(o),t={rel:t,crossOrigin:a,href:e},r.querySelector(o)===null&&(e=r.createElement("link"),le(e,"link",t),It(e),r.head.appendChild(e)))}}function ux(t){zn.D(t),dp("dns-prefetch",t,null)}function cx(t,e){zn.C(t,e),dp("preconnect",t,e)}function fx(t,e,a){zn.L(t,e,a);var r=Ei;if(r&&t&&e){var o='link[rel="preload"][as="'+_e(e)+'"]';e==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+_e(a.imageSizes)+'"]')):o+='[href="'+_e(t)+'"]';var c=o;switch(e){case"style":c=Ti(t);break;case"script":c=Ai(t)}Ye.has(c)||(t=tt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ye.set(c,t),r.querySelector(o)!==null||e==="style"&&r.querySelector(kr(c))||e==="script"&&r.querySelector(Nr(c))||(e=r.createElement("link"),le(e,"link",t),It(e),r.head.appendChild(e)))}}function dx(t,e){zn.m(t,e);var a=Ei;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+_e(r)+'"][href="'+_e(t)+'"]',c=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ai(t)}if(!Ye.has(c)&&(t=tt({rel:"modulepreload",href:t},e),Ye.set(c,t),a.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nr(c)))return}r=a.createElement("link"),le(r,"link",t),It(r),a.head.appendChild(r)}}}function hx(t,e,a){zn.S(t,e,a);var r=Ei;if(r&&t){var o=Qa(r).hoistableStyles,c=Ti(t);e=e||"default";var g=o.get(c);if(!g){var y={loading:0,preload:null};if(g=r.querySelector(kr(c)))y.loading=5;else{t=tt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ye.get(c))&&qc(t,a);var T=g=r.createElement("link");It(T),le(T,"link",t),T._p=new Promise(function(O,H){T.onload=O,T.onerror=H}),T.addEventListener("load",function(){y.loading|=1}),T.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Ll(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:y},o.set(c,g)}}}function mx(t,e){zn.X(t,e);var a=Ei;if(a&&t){var r=Qa(a).hoistableScripts,o=Ai(t),c=r.get(o);c||(c=a.querySelector(Nr(o)),c||(t=tt({src:t,async:!0},e),(e=Ye.get(o))&&Gc(t,e),c=a.createElement("script"),It(c),le(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function px(t,e){zn.M(t,e);var a=Ei;if(a&&t){var r=Qa(a).hoistableScripts,o=Ai(t),c=r.get(o);c||(c=a.querySelector(Nr(o)),c||(t=tt({src:t,async:!0,type:"module"},e),(e=Ye.get(o))&&Gc(t,e),c=a.createElement("script"),It(c),le(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(o,c))}}function hp(t,e,a,r){var o=(o=Nn.current)?Nl(o):null;if(!o)throw Error(l(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Ti(a.href),a=Qa(o).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ti(a.href);var c=Qa(o).hoistableStyles,g=c.get(t);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=o.querySelector(kr(t)))&&!c._p&&(g.instance=c,g.state.loading=5),Ye.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ye.set(t,a),c||gx(o,t,a,g.state))),e&&r===null)throw Error(l(528,""));return g}if(e&&r!==null)throw Error(l(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ai(a),a=Qa(o).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,t))}}function Ti(t){return'href="'+_e(t)+'"'}function kr(t){return'link[rel="stylesheet"]['+t+"]"}function mp(t){return tt({},t,{"data-precedence":t.precedence,precedence:null})}function gx(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),le(e,"link",a),It(e),t.head.appendChild(e))}function Ai(t){return'[src="'+_e(t)+'"]'}function Nr(t){return"script[async]"+t}function pp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(r)return e.instance=r,It(r),r;var o=tt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),It(r),le(r,"style",o),Ll(r,a.precedence,t),e.instance=r;case"stylesheet":o=Ti(a.href);var c=t.querySelector(kr(o));if(c)return e.state.loading|=4,e.instance=c,It(c),c;r=mp(a),(o=Ye.get(o))&&qc(r,o),c=(t.ownerDocument||t).createElement("link"),It(c);var g=c;return g._p=new Promise(function(y,T){g.onload=y,g.onerror=T}),le(c,"link",r),e.state.loading|=4,Ll(c,a.precedence,t),e.instance=c;case"script":return c=Ai(a.src),(o=t.querySelector(Nr(c)))?(e.instance=o,It(o),o):(r=a,(o=Ye.get(c))&&(r=tt({},a),Gc(r,o)),t=t.ownerDocument||t,o=t.createElement("script"),It(o),le(o,"link",r),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Ll(r,a.precedence,t));return e.instance}function Ll(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,c=o,g=0;g<r.length;g++){var y=r[g];if(y.dataset.precedence===e)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function qc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Gc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ul=null;function gp(t,e,a){if(Ul===null){var r=new Map,o=Ul=new Map;o.set(a,r)}else o=Ul,r=o.get(a),r||(r=new Map,o.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),o=0;o<a.length;o++){var c=a[o];if(!(c[Ji]||c[ce]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var y=r.get(g);y?y.push(c):r.set(g,[c])}}return r}function vp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function vx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function yp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Lr=null;function yx(){}function bx(t,e,a){if(Lr===null)throw Error(l(475));var r=Lr;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=Ti(a.href),c=t.querySelector(kr(o));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Hl.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,It(c);return}c=t.ownerDocument||t,a=mp(a),(o=Ye.get(o))&&qc(a,o),c=c.createElement("link"),It(c);var g=c;g._p=new Promise(function(y,T){g.onload=y,g.onerror=T}),le(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Hl.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function xx(){if(Lr===null)throw Error(l(475));var t=Lr;return t.stylesheets&&t.count===0&&Yc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Yc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)Yc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function Yc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,e.forEach(Sx,t),Pl=null,Hl.call(t))}function Sx(t,e){if(!(e.state.loading&4)){var a=Pl.get(t);if(a)var r=a.get(null);else{a=new Map,Pl.set(t,a);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var g=o[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}o=e.instance,g=o.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,o),a.set(g,o),this.count++,r=Hl.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),c?c.parentNode.insertBefore(o,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var Ur={$$typeof:E,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function wx(t,e,a,r,o,c,g,y){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function bp(t,e,a,r,o,c,g,y,T,O,H,G){return t=new wx(t,e,a,g,y,T,O,G),e=1,c===!0&&(e|=24),c=qe(3,null,null,e),t.current=c,c.stateNode=t,e=wu(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},nc(c),t}function xp(t){return t?(t=ai,t):ai}function Sp(t,e,a,r,o,c){o=xp(o),r.context===null?r.context=o:r.pendingContext=o,r=Zn(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Kn(t,r,e),a!==null&&(ve(a,t,e),wr(a,t,e))}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function $c(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function Ep(t){if(t.tag===13){var e=Pn(t,67108864);e!==null&&ve(e,t,67108864),$c(t,67108864)}}var ql=!0;function Ex(t,e,a,r){var o=X.T;X.T=null;var c=K.p;try{K.p=2,Xc(t,e,a,r)}finally{K.p=c,X.T=o}}function Tx(t,e,a,r){var o=X.T;X.T=null;var c=K.p;try{K.p=8,Xc(t,e,a,r)}finally{K.p=c,X.T=o}}function Xc(t,e,a,r){if(ql){var o=Qc(r);if(o===null)_c(t,e,r,Gl,a),Ap(t,r);else if(Cx(o,t,e,a,r))r.stopPropagation();else if(Ap(t,r),e&4&&-1<Ax.indexOf(t)){for(;o!==null;){var c=Xa(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ha(c.pendingLanes);if(g!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;g;){var T=1<<31-Ae(g);y.entanglements[1]|=T,g&=~T}ln(c),(_t&6)===0&&(Cl=en()+500,Br(0))}}break;case 13:y=Pn(c,2),y!==null&&ve(y,c,2),zl(),$c(c,2)}if(c=Qc(r),c===null&&_c(t,e,r,Gl,a),c===o)break;o=c}o!==null&&r.stopPropagation()}else _c(t,e,r,null,a)}}function Qc(t){return t=Io(t),Zc(t)}var Gl=null;function Zc(t){if(Gl=null,t=ma(t),t!==null){var e=I(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=ct(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Gl=t,null}function Tp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(c2()){case Zd:return 2;case Kd:return 8;case Ls:case f2:return 32;case Fd:return 268435456;default:return 32}default:return 32}}var Kc=!1,na=null,aa=null,ia=null,Hr=new Map,Pr=new Map,ra=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ap(t,e){switch(t){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":aa=null;break;case"mouseover":case"mouseout":ia=null;break;case"pointerover":case"pointerout":Hr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(e.pointerId)}}function qr(t,e,a,r,o,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[o]},e!==null&&(e=Xa(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function Cx(t,e,a,r,o){switch(e){case"focusin":return na=qr(na,t,e,a,r,o),!0;case"dragenter":return aa=qr(aa,t,e,a,r,o),!0;case"mouseover":return ia=qr(ia,t,e,a,r,o),!0;case"pointerover":var c=o.pointerId;return Hr.set(c,qr(Hr.get(c)||null,t,e,a,r,o)),!0;case"gotpointercapture":return c=o.pointerId,Pr.set(c,qr(Pr.get(c)||null,t,e,a,r,o)),!0}return!1}function Cp(t){var e=ma(t.target);if(e!==null){var a=I(e);if(a!==null){if(e=a.tag,e===13){if(e=ct(a),e!==null){t.blockedOn=e,x2(t.priority,function(){if(a.tag===13){var r=De(),o=Pn(a,r);o!==null&&ve(o,a,r),$c(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Qc(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Wo=r,a.target.dispatchEvent(r),Wo=null}else return e=Xa(a),e!==null&&Ep(e),t.blockedOn=a,!1;e.shift()}return!0}function Mp(t,e,a){Yl(t)&&a.delete(e)}function Mx(){Kc=!1,na!==null&&Yl(na)&&(na=null),aa!==null&&Yl(aa)&&(aa=null),ia!==null&&Yl(ia)&&(ia=null),Hr.forEach(Mp),Pr.forEach(Mp)}function $l(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Mx)))}var Xl=null;function Rp(t){Xl!==t&&(Xl=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],o=t[e+2];if(typeof r!="function"){if(Zc(r||a)===null)continue;break}var c=Xa(a);c!==null&&(t.splice(e,3),e-=3,Lu(c,{pending:!0,data:o,method:a.method,action:r},r,o))}}))}function Gr(t){function e(T){return $l(T,t)}na!==null&&$l(na,t),aa!==null&&$l(aa,t),ia!==null&&$l(ia,t),Hr.forEach(e),Pr.forEach(e);for(var a=0;a<ra.length;a++){var r=ra[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ra.length&&(a=ra[0],a.blockedOn===null);)Cp(a),a.blockedOn===null&&ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var o=a[r],c=a[r+1],g=o[xe]||null;if(typeof c=="function")g||Rp(a);else if(g){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,g=c[xe]||null)y=g.formAction;else if(Zc(o)!==null)continue}else y=g.action;typeof y=="function"?a[r+1]=y:(a.splice(r,3),r-=3),Rp(a)}}}function Fc(t){this._internalRoot=t}Ql.prototype.render=Fc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(l(409));var a=e.current,r=De();Sp(a,r,t,e,null,null)},Ql.prototype.unmount=Fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&xi(),Sp(t.current,2,null,t,null,null),zl(),e[$a]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=nh();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ra.length&&e!==0&&e<ra[a].priority;a++);ra.splice(a,0,t),a===0&&Cp(t)}};var zp=i.version;if(zp!=="19.0.0")throw Error(l(527,zp,"19.0.0"));K.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(l(188)):(t=Object.keys(t).join(","),Error(l(268,t)));return t=$(e),t=t!==null?nt(t):null,t=t===null?null:t.stateNode,t};var Rx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:X,findFiberByHostInstance:ma,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Zi=Zl.inject(Rx),Te=Zl}catch{}}return $r.createRoot=function(t,e){if(!u(t))throw Error(l(299));var a=!1,r="",o=X0,c=Q0,g=Z0,y=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=bp(t,1,!1,null,null,a,r,o,c,g,y,null),t[$a]=e.current,Bc(t.nodeType===8?t.parentNode:t),new Fc(e)},$r.hydrateRoot=function(t,e,a){if(!u(t))throw Error(l(299));var r=!1,o="",c=X0,g=Q0,y=Z0,T=null,O=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(T=a.unstable_transitionCallbacks),a.formState!==void 0&&(O=a.formState)),e=bp(t,1,!0,e,a??null,r,o,c,g,y,T,O),e.context=xp(null),a=e.current,r=De(),o=Zn(r),o.callback=null,Kn(a,o,r),e.current.lanes=r,Fi(e,r),ln(e),t[$a]=e.current,Bc(t),new Ql(e)},$r.version="19.0.0",$r}var Up;function Ux(){if(Up)return Ic.exports;Up=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Ic.exports=Lx(),Ic.exports}var Hx=Ux(),Xr={},Hp;function Px(){if(Hp)return Xr;Hp=1,Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.parse=d,Xr.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,E){const S=new f,M=x.length;if(M<2)return S;const D=(E==null?void 0:E.decode)||v;let C=0;do{const L=x.indexOf("=",C);if(L===-1)break;const V=x.indexOf(";",C),P=V===-1?M:V;if(L>P){C=x.lastIndexOf(";",L-1)+1;continue}const N=m(x,C,L),Y=h(x,L,N),Q=x.slice(N,Y);if(S[Q]===void 0){let F=m(x,L+1,P),X=h(x,P,F);const tt=D(x.slice(F,X));S[Q]=tt}C=P+1}while(C<M);return S}function m(x,E,S){do{const M=x.charCodeAt(E);if(M!==32&&M!==9)return E}while(++E<S);return S}function h(x,E,S){for(;E>S;){const M=x.charCodeAt(--E);if(M!==32&&M!==9)return E+1}return S}function p(x,E,S){const M=(S==null?void 0:S.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const D=M(E);if(!i.test(D))throw new TypeError(`argument val is invalid: ${E}`);let C=x+"="+D;if(!S)return C;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);C+="; Max-Age="+S.maxAge}if(S.domain){if(!s.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);C+="; Domain="+S.domain}if(S.path){if(!l.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);C+="; Path="+S.path}if(S.expires){if(!b(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);C+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(C+="; HttpOnly"),S.secure&&(C+="; Secure"),S.partitioned&&(C+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return C}function v(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function b(x){return u.call(x)==="[object Date]"}return Xr}Px();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pp="popstate";function qx(n={}){function i(l,u){let{pathname:f,search:d,hash:m}=l.location;return Tf("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function s(l,u){return typeof u=="string"?u:ss(u)}return Yx(i,s,null,n)}function kt(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function fn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Gx(){return Math.random().toString(36).substring(2,10)}function qp(n,i){return{usr:n.state,key:n.key,idx:i}}function Tf(n,i,s=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?qi(i):i,state:s,key:i&&i.key||l||Gx()}}function ss({pathname:n="/",search:i="",hash:s=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function qi(n){let i={};if(n){let s=n.indexOf("#");s>=0&&(i.hash=n.substring(s),n=n.substring(0,s));let l=n.indexOf("?");l>=0&&(i.search=n.substring(l),n=n.substring(0,l)),n&&(i.pathname=n)}return i}function Yx(n,i,s,l={}){let{window:u=document.defaultView,v5Compat:f=!1}=l,d=u.history,m="POP",h=null,p=v();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function v(){return(d.state||{idx:null}).idx}function b(){m="POP";let D=v(),C=D==null?null:D-p;p=D,h&&h({action:m,location:M.location,delta:C})}function x(D,C){m="PUSH";let L=Tf(M.location,D,C);p=v()+1;let V=qp(L,p),P=M.createHref(L);try{d.pushState(V,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;u.location.assign(P)}f&&h&&h({action:m,location:M.location,delta:1})}function E(D,C){m="REPLACE";let L=Tf(M.location,D,C);p=v();let V=qp(L,p),P=M.createHref(L);d.replaceState(V,"",P),f&&h&&h({action:m,location:M.location,delta:0})}function S(D){let C=u.location.origin!=="null"?u.location.origin:u.location.href,L=typeof D=="string"?D:ss(D);return L=L.replace(/ $/,"%20"),kt(C,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,C)}let M={get action(){return m},get location(){return n(u,d)},listen(D){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Pp,b),h=D,()=>{u.removeEventListener(Pp,b),h=null}},createHref(D){return i(u,D)},createURL:S,encodeLocation(D){let C=S(D);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:x,replace:E,go(D){return d.go(D)}};return M}function V1(n,i,s="/"){return $x(n,i,s,!1)}function $x(n,i,s,l){let u=typeof i=="string"?qi(i):i,f=_n(u.pathname||"/",s);if(f==null)return null;let d=k1(n);Xx(d);let m=null;for(let h=0;m==null&&h<d.length;++h){let p=a5(f);m=e5(d[h],p,l)}return m}function k1(n,i=[],s=[],l=""){let u=(f,d,m)=>{let h={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(kt(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length));let p=On([l,h.relativePath]),v=s.concat(h);f.children&&f.children.length>0&&(kt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),k1(f.children,i,v,p)),!(f.path==null&&!f.index)&&i.push({path:p,score:Ix(p,f.index),routesMeta:v})};return n.forEach((f,d)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))u(f,d);else for(let h of N1(f.path))u(f,d,h)}),i}function N1(n){let i=n.split("/");if(i.length===0)return[];let[s,...l]=i,u=s.endsWith("?"),f=s.replace(/\?$/,"");if(l.length===0)return u?[f,""]:[f];let d=N1(l.join("/")),m=[];return m.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&m.push(...d),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function Xx(n){n.sort((i,s)=>i.score!==s.score?s.score-i.score:t5(i.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var Qx=/^:[\w-]+$/,Zx=3,Kx=2,Fx=1,Jx=10,Wx=-2,Gp=n=>n==="*";function Ix(n,i){let s=n.split("/"),l=s.length;return s.some(Gp)&&(l+=Wx),i&&(l+=Kx),s.filter(u=>!Gp(u)).reduce((u,f)=>u+(Qx.test(f)?Zx:f===""?Fx:Jx),l)}function t5(n,i){return n.length===i.length&&n.slice(0,-1).every((l,u)=>l===i[u])?n[n.length-1]-i[i.length-1]:0}function e5(n,i,s=!1){let{routesMeta:l}=n,u={},f="/",d=[];for(let m=0;m<l.length;++m){let h=l[m],p=m===l.length-1,v=f==="/"?i:i.slice(f.length)||"/",b=mo({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},v),x=h.route;if(!b&&p&&s&&!l[l.length-1].route.index&&(b=mo({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!b)return null;Object.assign(u,b.params),d.push({params:u,pathname:On([f,b.pathname]),pathnameBase:l5(On([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=On([f,b.pathnameBase]))}return d}function mo(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,l]=n5(n.path,n.caseSensitive,n.end),u=i.match(s);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:l.reduce((p,{paramName:v,isOptional:b},x)=>{if(v==="*"){let S=m[x]||"";d=f.slice(0,f.length-S.length).replace(/(.)\/+$/,"$1")}const E=m[x];return b&&!E?p[v]=void 0:p[v]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:d,pattern:n}}function n5(n,i=!1,s=!0){fn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,h)=>(l.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),l]}function a5(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return fn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function _n(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,l=n.charAt(s);return l&&l!=="/"?null:n.slice(s)||"/"}function i5(n,i="/"){let{pathname:s,search:l="",hash:u=""}=typeof n=="string"?qi(n):n;return{pathname:s?s.startsWith("/")?s:r5(s,i):i,search:o5(l),hash:u5(u)}}function r5(n,i){let s=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?s.length>1&&s.pop():u!=="."&&s.push(u)}),s.length>1?s.join("/"):"/"}function af(n,i,s,l){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function s5(n){return n.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function L1(n){let i=s5(n);return i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase)}function U1(n,i,s,l=!1){let u;typeof n=="string"?u=qi(n):(u={...n},kt(!u.pathname||!u.pathname.includes("?"),af("?","pathname","search",u)),kt(!u.pathname||!u.pathname.includes("#"),af("#","pathname","hash",u)),kt(!u.search||!u.search.includes("#"),af("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,m;if(d==null)m=s;else{let b=i.length-1;if(!l&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;u.pathname=x.join("/")}m=b>=0?i[b]:"/"}let h=i5(u,m),p=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(p||v)&&(h.pathname+="/"),h}var On=n=>n.join("/").replace(/\/\/+/g,"/"),l5=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),o5=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,u5=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function c5(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var H1=["POST","PUT","PATCH","DELETE"];new Set(H1);var f5=["GET",...H1];new Set(f5);var Gi=A.createContext(null);Gi.displayName="DataRouter";var Mo=A.createContext(null);Mo.displayName="DataRouterState";var P1=A.createContext({isTransitioning:!1});P1.displayName="ViewTransition";var d5=A.createContext(new Map);d5.displayName="Fetchers";var h5=A.createContext(null);h5.displayName="Await";var dn=A.createContext(null);dn.displayName="Navigation";var Ts=A.createContext(null);Ts.displayName="Location";var kn=A.createContext({outlet:null,matches:[],isDataRoute:!1});kn.displayName="Route";var ed=A.createContext(null);ed.displayName="RouteError";function m5(n,{relative:i}={}){kt(As(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=A.useContext(dn),{hash:u,pathname:f,search:d}=Ms(n,{relative:i}),m=f;return s!=="/"&&(m=f==="/"?s:On([s,f])),l.createHref({pathname:m,search:d,hash:u})}function As(){return A.useContext(Ts)!=null}function fa(){return kt(As(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ts).location}var q1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function G1(n){A.useContext(dn).static||A.useLayoutEffect(n)}function Cs(){let{isDataRoute:n}=A.useContext(kn);return n?M5():p5()}function p5(){kt(As(),"useNavigate() may be used only in the context of a <Router> component.");let n=A.useContext(Gi),{basename:i,navigator:s}=A.useContext(dn),{matches:l}=A.useContext(kn),{pathname:u}=fa(),f=JSON.stringify(L1(l)),d=A.useRef(!1);return G1(()=>{d.current=!0}),A.useCallback((h,p={})=>{if(fn(d.current,q1),!d.current)return;if(typeof h=="number"){s.go(h);return}let v=U1(h,JSON.parse(f),u,p.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:On([i,v.pathname])),(p.replace?s.replace:s.push)(v,p.state,p)},[i,s,f,u,n])}A.createContext(null);function Ms(n,{relative:i}={}){let{matches:s}=A.useContext(kn),{pathname:l}=fa(),u=JSON.stringify(L1(s));return A.useMemo(()=>U1(n,JSON.parse(u),l,i==="path"),[n,u,l,i])}function g5(n,i){return Y1(n,i)}function Y1(n,i,s,l){var L;kt(As(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=A.useContext(dn),{matches:d}=A.useContext(kn),m=d[d.length-1],h=m?m.params:{},p=m?m.pathname:"/",v=m?m.pathnameBase:"/",b=m&&m.route;{let V=b&&b.path||"";$1(p,!b||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let x=fa(),E;if(i){let V=typeof i=="string"?qi(i):i;kt(v==="/"||((L=V.pathname)==null?void 0:L.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${V.pathname}" was given in the \`location\` prop.`),E=V}else E=x;let S=E.pathname||"/",M=S;if(v!=="/"){let V=v.replace(/^\//,"").split("/");M="/"+S.replace(/^\//,"").split("/").slice(V.length).join("/")}let D=!f&&s&&s.matches&&s.matches.length>0?s.matches:V1(n,{pathname:M});fn(b||D!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),fn(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=S5(D&&D.map(V=>Object.assign({},V,{params:Object.assign({},h,V.params),pathname:On([v,u.encodeLocation?u.encodeLocation(V.pathname).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?v:On([v,u.encodeLocation?u.encodeLocation(V.pathnameBase).pathname:V.pathnameBase])})),d,s,l);return i&&C?A.createElement(Ts.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},C):C}function v5(){let n=C5(),i=c5(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},f={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:f},"ErrorBoundary")," or"," ",A.createElement("code",{style:f},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},i),s?A.createElement("pre",{style:u},s):null,d)}var y5=A.createElement(v5,null),b5=class extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?A.createElement(kn.Provider,{value:this.props.routeContext},A.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function x5({routeContext:n,match:i,children:s}){let l=A.useContext(Gi);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),A.createElement(kn.Provider,{value:n},s)}function S5(n,i=[],s=null,l=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let u=n,f=s==null?void 0:s.errors;if(f!=null){let h=u.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);kt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,m=-1;if(s)for(let h=0;h<u.length;h++){let p=u[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(m=h),p.route.id){let{loaderData:v,errors:b}=s,x=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!b||b[p.route.id]===void 0);if(p.route.lazy||x){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((h,p,v)=>{let b,x=!1,E=null,S=null;s&&(b=f&&p.route.id?f[p.route.id]:void 0,E=p.route.errorElement||y5,d&&(m<0&&v===0?($1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,S=null):m===v&&(x=!0,S=p.route.hydrateFallbackElement||null)));let M=i.concat(u.slice(0,v+1)),D=()=>{let C;return b?C=E:x?C=S:p.route.Component?C=A.createElement(p.route.Component,null):p.route.element?C=p.route.element:C=h,A.createElement(x5,{match:p,routeContext:{outlet:h,matches:M,isDataRoute:s!=null},children:C})};return s&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?A.createElement(b5,{location:s.location,revalidation:s.revalidation,component:E,error:b,children:D(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):D()},null)}function nd(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w5(n){let i=A.useContext(Gi);return kt(i,nd(n)),i}function E5(n){let i=A.useContext(Mo);return kt(i,nd(n)),i}function T5(n){let i=A.useContext(kn);return kt(i,nd(n)),i}function ad(n){let i=T5(n),s=i.matches[i.matches.length-1];return kt(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function A5(){return ad("useRouteId")}function C5(){var l;let n=A.useContext(ed),i=E5("useRouteError"),s=ad("useRouteError");return n!==void 0?n:(l=i.errors)==null?void 0:l[s]}function M5(){let{router:n}=w5("useNavigate"),i=ad("useNavigate"),s=A.useRef(!1);return G1(()=>{s.current=!0}),A.useCallback(async(u,f={})=>{fn(s.current,q1),s.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var Yp={};function $1(n,i,s){!i&&!Yp[n]&&(Yp[n]=!0,fn(!1,s))}A.memo(R5);function R5({routes:n,future:i,state:s}){return Y1(n,void 0,s,i)}function Mi(n){kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function z5({basename:n="/",children:i=null,location:s,navigationType:l="POP",navigator:u,static:f=!1}){kt(!As(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),m=A.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof s=="string"&&(s=qi(s));let{pathname:h="/",search:p="",hash:v="",state:b=null,key:x="default"}=s,E=A.useMemo(()=>{let S=_n(h,d);return S==null?null:{location:{pathname:S,search:p,hash:v,state:b,key:x},navigationType:l}},[d,h,p,v,b,x,l]);return fn(E!=null,`<Router basename="${d}"> is not able to match the URL "${h}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:A.createElement(dn.Provider,{value:m},A.createElement(Ts.Provider,{children:i,value:E}))}function D5({children:n,location:i}){return g5(Af(n),i)}function Af(n,i=[]){let s=[];return A.Children.forEach(n,(l,u)=>{if(!A.isValidElement(l))return;let f=[...i,u];if(l.type===A.Fragment){s.push.apply(s,Af(l.props.children,f));return}kt(l.type===Mi,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),kt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||f.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=Af(l.props.children,f)),s.push(d)}),s}var ao="get",io="application/x-www-form-urlencoded";function Ro(n){return n!=null&&typeof n.tagName=="string"}function O5(n){return Ro(n)&&n.tagName.toLowerCase()==="button"}function j5(n){return Ro(n)&&n.tagName.toLowerCase()==="form"}function B5(n){return Ro(n)&&n.tagName.toLowerCase()==="input"}function _5(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function V5(n,i){return n.button===0&&(!i||i==="_self")&&!_5(n)}var Kl=null;function k5(){if(Kl===null)try{new FormData(document.createElement("form"),0),Kl=!1}catch{Kl=!0}return Kl}var N5=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rf(n){return n!=null&&!N5.has(n)?(fn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${io}"`),null):n}function L5(n,i){let s,l,u,f,d;if(j5(n)){let m=n.getAttribute("action");l=m?_n(m,i):null,s=n.getAttribute("method")||ao,u=rf(n.getAttribute("enctype"))||io,f=new FormData(n)}else if(O5(n)||B5(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(l=h?_n(h,i):null,s=n.getAttribute("formmethod")||m.getAttribute("method")||ao,u=rf(n.getAttribute("formenctype"))||rf(m.getAttribute("enctype"))||io,f=new FormData(m,n),!k5()){let{name:p,type:v,value:b}=n;if(v==="image"){let x=p?`${p}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else p&&f.append(p,b)}}else{if(Ro(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ao,l=null,u=io,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:l,method:s.toLowerCase(),encType:u,formData:f,body:d}}function id(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function U5(n,i){if(n.id in i)return i[n.id];try{let s=await import(n.module);return i[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function H5(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function P5(n,i,s){let l=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await U5(f,s);return d.links?d.links():[]}return[]}));return $5(l.flat(1).filter(H5).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function $p(n,i,s,l,u,f){let d=(h,p)=>s[p]?h.route.id!==s[p].route.id:!0,m=(h,p)=>{var v;return s[p].pathname!==h.pathname||((v=s[p].route.path)==null?void 0:v.endsWith("*"))&&s[p].params["*"]!==h.params["*"]};return f==="assets"?i.filter((h,p)=>d(h,p)||m(h,p)):f==="data"?i.filter((h,p)=>{var b;let v=l.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(d(h,p)||m(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((b=s[0])==null?void 0:b.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function q5(n,i,{includeHydrateFallback:s}={}){return G5(n.map(l=>{let u=i.routes[l.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),s&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function G5(n){return[...new Set(n)]}function Y5(n){let i={},s=Object.keys(n).sort();for(let l of s)i[l]=n[l];return i}function $5(n,i){let s=new Set;return new Set(i),n.reduce((l,u)=>{let f=JSON.stringify(Y5(u));return s.has(f)||(s.add(f),l.push({key:f,link:u})),l},[])}function X5(n,i){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname="_root.data":i&&_n(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.data`:s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function X1(){let n=A.useContext(Gi);return id(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Q5(){let n=A.useContext(Mo);return id(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var rd=A.createContext(void 0);rd.displayName="FrameworkContext";function Q1(){let n=A.useContext(rd);return id(n,"You must render this element inside a <HydratedRouter> element"),n}function Z5(n,i){let s=A.useContext(rd),[l,u]=A.useState(!1),[f,d]=A.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:p,onMouseLeave:v,onTouchStart:b}=i,x=A.useRef(null);A.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let M=C=>{C.forEach(L=>{d(L.isIntersecting)})},D=new IntersectionObserver(M,{threshold:.5});return x.current&&D.observe(x.current),()=>{D.disconnect()}}},[n]),A.useEffect(()=>{if(l){let M=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(M)}}},[l]);let E=()=>{u(!0)},S=()=>{u(!1),d(!1)};return s?n!=="intent"?[f,x,{}]:[f,x,{onFocus:Qr(m,E),onBlur:Qr(h,S),onMouseEnter:Qr(p,E),onMouseLeave:Qr(v,S),onTouchStart:Qr(b,E)}]:[!1,x,{}]}function Qr(n,i){return s=>{n&&n(s),s.defaultPrevented||i(s)}}function K5({page:n,...i}){let{router:s}=X1(),l=A.useMemo(()=>V1(s.routes,n,s.basename),[s.routes,n,s.basename]);return l?A.createElement(J5,{page:n,matches:l,...i}):null}function F5(n){let{manifest:i,routeModules:s}=Q1(),[l,u]=A.useState([]);return A.useEffect(()=>{let f=!1;return P5(n,i,s).then(d=>{f||u(d)}),()=>{f=!0}},[n,i,s]),l}function J5({page:n,matches:i,...s}){let l=fa(),{manifest:u,routeModules:f}=Q1(),{basename:d}=X1(),{loaderData:m,matches:h}=Q5(),p=A.useMemo(()=>$p(n,i,h,u,l,"data"),[n,i,h,u,l]),v=A.useMemo(()=>$p(n,i,h,u,l,"assets"),[n,i,h,u,l]),b=A.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let S=new Set,M=!1;if(i.forEach(C=>{var V;let L=u.routes[C.route.id];!L||!L.hasLoader||(!p.some(P=>P.route.id===C.route.id)&&C.route.id in m&&((V=f[C.route.id])!=null&&V.shouldRevalidate)||L.hasClientLoader?M=!0:S.add(C.route.id))}),S.size===0)return[];let D=X5(n,d);return M&&S.size>0&&D.searchParams.set("_routes",i.filter(C=>S.has(C.route.id)).map(C=>C.route.id).join(",")),[D.pathname+D.search]},[d,m,l,u,p,i,n,f]),x=A.useMemo(()=>q5(v,u),[v,u]),E=F5(v);return A.createElement(A.Fragment,null,b.map(S=>A.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...s})),x.map(S=>A.createElement("link",{key:S,rel:"modulepreload",href:S,...s})),E.map(({key:S,link:M})=>A.createElement("link",{key:S,...M})))}function W5(...n){return i=>{n.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var Z1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Z1&&(window.__reactRouterVersion="7.4.0")}catch{}function I5({basename:n,children:i,window:s}){let l=A.useRef();l.current==null&&(l.current=qx({window:s,v5Compat:!0}));let u=l.current,[f,d]=A.useState({action:u.action,location:u.location}),m=A.useCallback(h=>{A.startTransition(()=>d(h))},[d]);return A.useLayoutEffect(()=>u.listen(m),[u,m]),A.createElement(z5,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var K1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yi=A.forwardRef(function({onClick:i,discover:s="render",prefetch:l="none",relative:u,reloadDocument:f,replace:d,state:m,target:h,to:p,preventScrollReset:v,viewTransition:b,...x},E){let{basename:S}=A.useContext(dn),M=typeof p=="string"&&K1.test(p),D,C=!1;if(typeof p=="string"&&M&&(D=p,Z1))try{let X=new URL(window.location.href),tt=p.startsWith("//")?new URL(X.protocol+p):new URL(p),Rt=_n(tt.pathname,S);tt.origin===X.origin&&Rt!=null?p=Rt+tt.search+tt.hash:C=!0}catch{fn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=m5(p,{relative:u}),[V,P,N]=Z5(l,x),Y=a4(p,{replace:d,state:m,target:h,preventScrollReset:v,relative:u,viewTransition:b});function Q(X){i&&i(X),X.defaultPrevented||Y(X)}let F=A.createElement("a",{...x,...N,href:D||L,onClick:C||f?i:Q,ref:W5(E,P),target:h,"data-discover":!M&&s==="render"?"true":void 0});return V&&!M?A.createElement(A.Fragment,null,F,A.createElement(K5,{page:L})):F});Yi.displayName="Link";var t4=A.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:l="",end:u=!1,style:f,to:d,viewTransition:m,children:h,...p},v){let b=Ms(d,{relative:p.relative}),x=fa(),E=A.useContext(Mo),{navigator:S,basename:M}=A.useContext(dn),D=E!=null&&o4(b)&&m===!0,C=S.encodeLocation?S.encodeLocation(b).pathname:b.pathname,L=x.pathname,V=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;s||(L=L.toLowerCase(),V=V?V.toLowerCase():null,C=C.toLowerCase()),V&&M&&(V=_n(V,M)||V);const P=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let N=L===C||!u&&L.startsWith(C)&&L.charAt(P)==="/",Y=V!=null&&(V===C||!u&&V.startsWith(C)&&V.charAt(C.length)==="/"),Q={isActive:N,isPending:Y,isTransitioning:D},F=N?i:void 0,X;typeof l=="function"?X=l(Q):X=[l,N?"active":null,Y?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let tt=typeof f=="function"?f(Q):f;return A.createElement(Yi,{...p,"aria-current":F,className:X,ref:v,style:tt,to:d,viewTransition:m},typeof h=="function"?h(Q):h)});t4.displayName="NavLink";var e4=A.forwardRef(({discover:n="render",fetcherKey:i,navigate:s,reloadDocument:l,replace:u,state:f,method:d=ao,action:m,onSubmit:h,relative:p,preventScrollReset:v,viewTransition:b,...x},E)=>{let S=s4(),M=l4(m,{relative:p}),D=d.toLowerCase()==="get"?"get":"post",C=typeof m=="string"&&K1.test(m),L=V=>{if(h&&h(V),V.defaultPrevented)return;V.preventDefault();let P=V.nativeEvent.submitter,N=(P==null?void 0:P.getAttribute("formmethod"))||d;S(P||V.currentTarget,{fetcherKey:i,method:N,navigate:s,replace:u,state:f,relative:p,preventScrollReset:v,viewTransition:b})};return A.createElement("form",{ref:E,method:D,action:M,onSubmit:l?h:L,...x,"data-discover":!C&&n==="render"?"true":void 0})});e4.displayName="Form";function n4(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F1(n){let i=A.useContext(Gi);return kt(i,n4(n)),i}function a4(n,{target:i,replace:s,state:l,preventScrollReset:u,relative:f,viewTransition:d}={}){let m=Cs(),h=fa(),p=Ms(n,{relative:f});return A.useCallback(v=>{if(V5(v,i)){v.preventDefault();let b=s!==void 0?s:ss(h)===ss(p);m(n,{replace:b,state:l,preventScrollReset:u,relative:f,viewTransition:d})}},[h,m,p,s,l,i,n,u,f,d])}var i4=0,r4=()=>`__${String(++i4)}__`;function s4(){let{router:n}=F1("useSubmit"),{basename:i}=A.useContext(dn),s=A5();return A.useCallback(async(l,u={})=>{let{action:f,method:d,encType:m,formData:h,body:p}=L5(l,i);if(u.navigate===!1){let v=u.fetcherKey||r4();await n.fetch(v,s,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:p,formMethod:u.method||d,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:s,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,s])}function l4(n,{relative:i}={}){let{basename:s}=A.useContext(dn),l=A.useContext(kn);kt(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),f={...Ms(n||".",{relative:i})},d=fa();if(n==null){f.search=d.search;let m=new URLSearchParams(f.search),h=m.getAll("index");if(h.some(v=>v==="")){m.delete("index"),h.filter(b=>b).forEach(b=>m.append("index",b));let v=m.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:On([s,f.pathname])),ss(f)}function o4(n,i={}){let s=A.useContext(P1);kt(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=F1("useViewTransitionState"),u=Ms(n,{relative:i.relative});if(!s.isTransitioning)return!1;let f=_n(s.currentLocation.pathname,l)||s.currentLocation.pathname,d=_n(s.nextLocation.pathname,l)||s.nextLocation.pathname;return mo(u.pathname,d)!=null||mo(u.pathname,f)!=null}new TextEncoder;var Ee=function(){return Ee=Object.assign||function(i){for(var s,l=1,u=arguments.length;l<u;l++){s=arguments[l];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(i[f]=s[f])}return i},Ee.apply(this,arguments)};function ls(n,i,s){if(s||arguments.length===2)for(var l=0,u=i.length,f;l<u;l++)(f||!(l in i))&&(f||(f=Array.prototype.slice.call(i,0,l)),f[l]=i[l]);return n.concat(f||Array.prototype.slice.call(i))}var jt="-ms-",ts="-moz-",wt="-webkit-",J1="comm",zo="rule",sd="decl",u4="@import",W1="@keyframes",c4="@layer",I1=Math.abs,ld=String.fromCharCode,Cf=Object.assign;function f4(n,i){return ae(n,0)^45?(((i<<2^ae(n,0))<<2^ae(n,1))<<2^ae(n,2))<<2^ae(n,3):0}function tv(n){return n.trim()}function Dn(n,i){return(n=i.exec(n))?n[0]:n}function ft(n,i,s){return n.replace(i,s)}function ro(n,i,s){return n.indexOf(i,s)}function ae(n,i){return n.charCodeAt(i)|0}function _i(n,i,s){return n.slice(i,s)}function on(n){return n.length}function ev(n){return n.length}function Jr(n,i){return i.push(n),n}function d4(n,i){return n.map(i).join("")}function Xp(n,i){return n.filter(function(s){return!Dn(s,i)})}var Do=1,Vi=1,nv=0,Ze=0,Kt=0,$i="";function Oo(n,i,s,l,u,f,d,m){return{value:n,root:i,parent:s,type:l,props:u,children:f,line:Do,column:Vi,length:d,return:"",siblings:m}}function la(n,i){return Cf(Oo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function Ci(n){for(;n.root;)n=la(n.root,{children:[n]});Jr(n,n.siblings)}function h4(){return Kt}function m4(){return Kt=Ze>0?ae($i,--Ze):0,Vi--,Kt===10&&(Vi=1,Do--),Kt}function tn(){return Kt=Ze<nv?ae($i,Ze++):0,Vi++,Kt===10&&(Vi=1,Do++),Kt}function Ha(){return ae($i,Ze)}function so(){return Ze}function jo(n,i){return _i($i,n,i)}function Mf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function p4(n){return Do=Vi=1,nv=on($i=n),Ze=0,[]}function g4(n){return $i="",n}function sf(n){return tv(jo(Ze-1,Rf(n===91?n+2:n===40?n+1:n)))}function v4(n){for(;(Kt=Ha())&&Kt<33;)tn();return Mf(n)>2||Mf(Kt)>3?"":" "}function y4(n,i){for(;--i&&tn()&&!(Kt<48||Kt>102||Kt>57&&Kt<65||Kt>70&&Kt<97););return jo(n,so()+(i<6&&Ha()==32&&tn()==32))}function Rf(n){for(;tn();)switch(Kt){case n:return Ze;case 34:case 39:n!==34&&n!==39&&Rf(Kt);break;case 40:n===41&&Rf(n);break;case 92:tn();break}return Ze}function b4(n,i){for(;tn()&&n+Kt!==57;)if(n+Kt===84&&Ha()===47)break;return"/*"+jo(i,Ze-1)+"*"+ld(n===47?n:tn())}function x4(n){for(;!Mf(Ha());)tn();return jo(n,Ze)}function S4(n){return g4(lo("",null,null,null,[""],n=p4(n),0,[0],n))}function lo(n,i,s,l,u,f,d,m,h){for(var p=0,v=0,b=d,x=0,E=0,S=0,M=1,D=1,C=1,L=0,V="",P=u,N=f,Y=l,Q=V;D;)switch(S=L,L=tn()){case 40:if(S!=108&&ae(Q,b-1)==58){ro(Q+=ft(sf(L),"&","&\f"),"&\f",I1(p?m[p-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:Q+=sf(L);break;case 9:case 10:case 13:case 32:Q+=v4(S);break;case 92:Q+=y4(so()-1,7);continue;case 47:switch(Ha()){case 42:case 47:Jr(w4(b4(tn(),so()),i,s,h),h);break;default:Q+="/"}break;case 123*M:m[p++]=on(Q)*C;case 125*M:case 59:case 0:switch(L){case 0:case 125:D=0;case 59+v:C==-1&&(Q=ft(Q,/\f/g,"")),E>0&&on(Q)-b&&Jr(E>32?Zp(Q+";",l,s,b-1,h):Zp(ft(Q," ","")+";",l,s,b-2,h),h);break;case 59:Q+=";";default:if(Jr(Y=Qp(Q,i,s,p,v,u,m,V,P=[],N=[],b,f),f),L===123)if(v===0)lo(Q,i,Y,Y,P,f,b,m,N);else switch(x===99&&ae(Q,3)===110?100:x){case 100:case 108:case 109:case 115:lo(n,Y,Y,l&&Jr(Qp(n,Y,Y,0,0,u,m,V,u,P=[],b,N),N),u,N,b,m,l?P:N);break;default:lo(Q,Y,Y,Y,[""],N,0,m,N)}}p=v=E=0,M=C=1,V=Q="",b=d;break;case 58:b=1+on(Q),E=S;default:if(M<1){if(L==123)--M;else if(L==125&&M++==0&&m4()==125)continue}switch(Q+=ld(L),L*M){case 38:C=v>0?1:(Q+="\f",-1);break;case 44:m[p++]=(on(Q)-1)*C,C=1;break;case 64:Ha()===45&&(Q+=sf(tn())),x=Ha(),v=b=on(V=Q+=x4(so())),L++;break;case 45:S===45&&on(Q)==2&&(M=0)}}return f}function Qp(n,i,s,l,u,f,d,m,h,p,v,b){for(var x=u-1,E=u===0?f:[""],S=ev(E),M=0,D=0,C=0;M<l;++M)for(var L=0,V=_i(n,x+1,x=I1(D=d[M])),P=n;L<S;++L)(P=tv(D>0?E[L]+" "+V:ft(V,/&\f/g,E[L])))&&(h[C++]=P);return Oo(n,i,s,u===0?zo:m,h,p,v,b)}function w4(n,i,s,l){return Oo(n,i,s,J1,ld(h4()),_i(n,2,-2),0,l)}function Zp(n,i,s,l,u){return Oo(n,i,s,sd,_i(n,0,l),_i(n,l+1,-1),l,u)}function av(n,i,s){switch(f4(n,i)){case 5103:return wt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return wt+n+n;case 4789:return ts+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+n+ts+n+jt+n+n;case 5936:switch(ae(n,i+11)){case 114:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return wt+n+jt+ft(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return wt+n+jt+n+n;case 6165:return wt+n+jt+"flex-"+n+n;case 5187:return wt+n+ft(n,/(\w+).+(:[^]+)/,wt+"box-$1$2"+jt+"flex-$1$2")+n;case 5443:return wt+n+jt+"flex-item-"+ft(n,/flex-|-self/g,"")+(Dn(n,/flex-|baseline/)?"":jt+"grid-row-"+ft(n,/flex-|-self/g,""))+n;case 4675:return wt+n+jt+"flex-line-pack"+ft(n,/align-content|flex-|-self/g,"")+n;case 5548:return wt+n+jt+ft(n,"shrink","negative")+n;case 5292:return wt+n+jt+ft(n,"basis","preferred-size")+n;case 6060:return wt+"box-"+ft(n,"-grow","")+wt+n+jt+ft(n,"grow","positive")+n;case 4554:return wt+ft(n,/([^-])(transform)/g,"$1"+wt+"$2")+n;case 6187:return ft(ft(ft(n,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),n,"")+n;case 5495:case 3959:return ft(n,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return ft(ft(n,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+jt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+wt+n+n;case 4200:if(!Dn(n,/flex-|baseline/))return jt+"grid-column-align"+_i(n,i)+n;break;case 2592:case 3360:return jt+ft(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(l,u){return i=u,Dn(l.props,/grid-\w+-end/)})?~ro(n+(s=s[i].value),"span",0)?n:jt+ft(n,"-start","")+n+jt+"grid-row-span:"+(~ro(s,"span",0)?Dn(s,/\d+/):+Dn(s,/\d+/)-+Dn(n,/\d+/))+";":jt+ft(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(l){return Dn(l.props,/grid-\w+-start/)})?n:jt+ft(ft(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ft(n,/(.+)-inline(.+)/,wt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(n)-1-i>6)switch(ae(n,i+1)){case 109:if(ae(n,i+4)!==45)break;case 102:return ft(n,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+ts+(ae(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~ro(n,"stretch",0)?av(ft(n,"stretch","fill-available"),i,s)+n:n}break;case 5152:case 5920:return ft(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,u,f,d,m,h,p){return jt+u+":"+f+p+(d?jt+u+"-span:"+(m?h:+h-+f)+p:"")+n});case 4949:if(ae(n,i+6)===121)return ft(n,":",":"+wt)+n;break;case 6444:switch(ae(n,ae(n,14)===45?18:11)){case 120:return ft(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(ae(n,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+jt+"$2box$3")+n;case 100:return ft(n,":",":"+jt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(n,"scroll-","scroll-snap-")+n}return n}function po(n,i){for(var s="",l=0;l<n.length;l++)s+=i(n[l],l,n,i)||"";return s}function E4(n,i,s,l){switch(n.type){case c4:if(n.children.length)break;case u4:case sd:return n.return=n.return||n.value;case J1:return"";case W1:return n.return=n.value+"{"+po(n.children,l)+"}";case zo:if(!on(n.value=n.props.join(",")))return""}return on(s=po(n.children,l))?n.return=n.value+"{"+s+"}":""}function T4(n){var i=ev(n);return function(s,l,u,f){for(var d="",m=0;m<i;m++)d+=n[m](s,l,u,f)||"";return d}}function A4(n){return function(i){i.root||(i=i.return)&&n(i)}}function C4(n,i,s,l){if(n.length>-1&&!n.return)switch(n.type){case sd:n.return=av(n.value,n.length,s);return;case W1:return po([la(n,{value:ft(n.value,"@","@"+wt)})],l);case zo:if(n.length)return d4(s=n.props,function(u){switch(Dn(u,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ci(la(n,{props:[ft(u,/:(read-\w+)/,":"+ts+"$1")]})),Ci(la(n,{props:[u]})),Cf(n,{props:Xp(s,l)});break;case"::placeholder":Ci(la(n,{props:[ft(u,/:(plac\w+)/,":"+wt+"input-$1")]})),Ci(la(n,{props:[ft(u,/:(plac\w+)/,":"+ts+"$1")]})),Ci(la(n,{props:[ft(u,/:(plac\w+)/,jt+"input-$1")]})),Ci(la(n,{props:[u]})),Cf(n,{props:Xp(s,l)});break}return""})}}var M4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe={},ki=typeof process<"u"&&Oe!==void 0&&(Oe.REACT_APP_SC_ATTR||Oe.SC_ATTR)||"data-styled",iv="active",rv="data-styled-version",Bo="6.1.16",od=`/*!sc*/
`,go=typeof window<"u"&&"HTMLElement"in window,R4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==""?Oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.SC_DISABLE_SPEEDY!==void 0&&Oe.SC_DISABLE_SPEEDY!==""&&Oe.SC_DISABLE_SPEEDY!=="false"&&Oe.SC_DISABLE_SPEEDY),_o=Object.freeze([]),Ni=Object.freeze({});function z4(n,i,s){return s===void 0&&(s=Ni),n.theme!==s.theme&&n.theme||i||s.theme}var sv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),D4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O4=/(^-|-$)/g;function Kp(n){return n.replace(D4,"-").replace(O4,"")}var j4=/(a)(d)/gi,Fl=52,Fp=function(n){return String.fromCharCode(n+(n>25?39:97))};function zf(n){var i,s="";for(i=Math.abs(n);i>Fl;i=i/Fl|0)s=Fp(i%Fl)+s;return(Fp(i%Fl)+s).replace(j4,"$1-$2")}var lf,lv=5381,Ri=function(n,i){for(var s=i.length;s;)n=33*n^i.charCodeAt(--s);return n},ov=function(n){return Ri(lv,n)};function uv(n){return zf(ov(n)>>>0)}function B4(n){return n.displayName||n.name||"Component"}function of(n){return typeof n=="string"&&!0}var cv=typeof Symbol=="function"&&Symbol.for,fv=cv?Symbol.for("react.memo"):60115,_4=cv?Symbol.for("react.forward_ref"):60112,V4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},N4=((lf={})[_4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lf[fv]=dv,lf);function Jp(n){return("type"in(i=n)&&i.type.$$typeof)===fv?dv:"$$typeof"in n?N4[n.$$typeof]:V4;var i}var L4=Object.defineProperty,U4=Object.getOwnPropertyNames,Wp=Object.getOwnPropertySymbols,H4=Object.getOwnPropertyDescriptor,P4=Object.getPrototypeOf,Ip=Object.prototype;function hv(n,i,s){if(typeof i!="string"){if(Ip){var l=P4(i);l&&l!==Ip&&hv(n,l,s)}var u=U4(i);Wp&&(u=u.concat(Wp(i)));for(var f=Jp(n),d=Jp(i),m=0;m<u.length;++m){var h=u[m];if(!(h in k4||s&&s[h]||d&&h in d||f&&h in f)){var p=H4(i,h);try{L4(n,h,p)}catch{}}}}return n}function Li(n){return typeof n=="function"}function ud(n){return typeof n=="object"&&"styledComponentId"in n}function Na(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Df(n,i){if(n.length===0)return"";for(var s=n[0],l=1;l<n.length;l++)s+=n[l];return s}function os(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Of(n,i,s){if(s===void 0&&(s=!1),!s&&!os(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var l=0;l<i.length;l++)n[l]=Of(n[l],i[l]);else if(os(i))for(var l in i)n[l]=Of(n[l],i[l]);return n}function cd(n,i){Object.defineProperty(n,"toString",{value:i})}function Rs(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var q4=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var s=0,l=0;l<i;l++)s+=this.groupSizes[l];return s},n.prototype.insertRules=function(i,s){if(i>=this.groupSizes.length){for(var l=this.groupSizes,u=l.length,f=u;i>=f;)if((f<<=1)<0)throw Rs(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(l),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(i+1),h=(d=0,s.length);d<h;d++)this.tag.insertRule(m,s[d])&&(this.groupSizes[i]++,m++)},n.prototype.clearGroup=function(i){if(i<this.length){var s=this.groupSizes[i],l=this.indexOfGroup(i),u=l+s;this.groupSizes[i]=0;for(var f=l;f<u;f++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(i){var s="";if(i>=this.length||this.groupSizes[i]===0)return s;for(var l=this.groupSizes[i],u=this.indexOfGroup(i),f=u+l,d=u;d<f;d++)s+="".concat(this.tag.getRule(d)).concat(od);return s},n}(),oo=new Map,vo=new Map,uo=1,Jl=function(n){if(oo.has(n))return oo.get(n);for(;vo.has(uo);)uo++;var i=uo++;return oo.set(n,i),vo.set(i,n),i},G4=function(n,i){uo=i+1,oo.set(n,i),vo.set(i,n)},Y4="style[".concat(ki,"][").concat(rv,'="').concat(Bo,'"]'),$4=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),X4=function(n,i,s){for(var l,u=s.split(","),f=0,d=u.length;f<d;f++)(l=u[f])&&n.registerName(i,l)},Q4=function(n,i){for(var s,l=((s=i.textContent)!==null&&s!==void 0?s:"").split(od),u=[],f=0,d=l.length;f<d;f++){var m=l[f].trim();if(m){var h=m.match($4);if(h){var p=0|parseInt(h[1],10),v=h[2];p!==0&&(G4(v,p),X4(n,v,h[3]),n.getTag().insertRules(p,u)),u.length=0}else u.push(m)}}},tg=function(n){for(var i=document.querySelectorAll(Y4),s=0,l=i.length;s<l;s++){var u=i[s];u&&u.getAttribute(ki)!==iv&&(Q4(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function Z4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mv=function(n){var i=document.head,s=n||i,l=document.createElement("style"),u=function(m){var h=Array.from(m.querySelectorAll("style[".concat(ki,"]")));return h[h.length-1]}(s),f=u!==void 0?u.nextSibling:null;l.setAttribute(ki,iv),l.setAttribute(rv,Bo);var d=Z4();return d&&l.setAttribute("nonce",d),s.insertBefore(l,f),l},K4=function(){function n(i){this.element=mv(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var l=document.styleSheets,u=0,f=l.length;u<f;u++){var d=l[u];if(d.ownerNode===s)return d}throw Rs(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,s){try{return this.sheet.insertRule(s,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var s=this.sheet.cssRules[i];return s&&s.cssText?s.cssText:""},n}(),F4=function(){function n(i){this.element=mv(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,s){if(i<=this.length&&i>=0){var l=document.createTextNode(s);return this.element.insertBefore(l,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),J4=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,s){return i<=this.length&&(this.rules.splice(i,0,s),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),eg=go,W4={isServer:!go,useCSSOMInjection:!R4},pv=function(){function n(i,s,l){i===void 0&&(i=Ni),s===void 0&&(s={});var u=this;this.options=Ee(Ee({},W4),i),this.gs=s,this.names=new Map(l),this.server=!!i.isServer,!this.server&&go&&eg&&(eg=!1,tg(this)),cd(this,function(){return function(f){for(var d=f.getTag(),m=d.length,h="",p=function(b){var x=function(C){return vo.get(C)}(b);if(x===void 0)return"continue";var E=f.names.get(x),S=d.getGroup(b);if(E===void 0||!E.size||S.length===0)return"continue";var M="".concat(ki,".g").concat(b,'[id="').concat(x,'"]'),D="";E!==void 0&&E.forEach(function(C){C.length>0&&(D+="".concat(C,","))}),h+="".concat(S).concat(M,'{content:"').concat(D,'"}').concat(od)},v=0;v<m;v++)p(v);return h}(u)})}return n.registerId=function(i){return Jl(i)},n.prototype.rehydrate=function(){!this.server&&go&&tg(this)},n.prototype.reconstructWithOptions=function(i,s){return s===void 0&&(s=!0),new n(Ee(Ee({},this.options),i),this.gs,s&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(s){var l=s.useCSSOMInjection,u=s.target;return s.isServer?new J4(u):l?new K4(u):new F4(u)}(this.options),new q4(i)));var i},n.prototype.hasNameForId=function(i,s){return this.names.has(i)&&this.names.get(i).has(s)},n.prototype.registerName=function(i,s){if(Jl(i),this.names.has(i))this.names.get(i).add(s);else{var l=new Set;l.add(s),this.names.set(i,l)}},n.prototype.insertRules=function(i,s,l){this.registerName(i,s),this.getTag().insertRules(Jl(i),l)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(Jl(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),I4=/&/g,t3=/^\s*\/\/.*$/gm;function gv(n,i){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(i," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(i," ")),s.props=s.props.map(function(l){return"".concat(i," ").concat(l)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=gv(s.children,i)),s})}function e3(n){var i,s,l,u=Ni,f=u.options,d=f===void 0?Ni:f,m=u.plugins,h=m===void 0?_o:m,p=function(x,E,S){return S.startsWith(s)&&S.endsWith(s)&&S.replaceAll(s,"").length>0?".".concat(i):x},v=h.slice();v.push(function(x){x.type===zo&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(I4,s).replace(l,p))}),d.prefix&&v.push(C4),v.push(E4);var b=function(x,E,S,M){E===void 0&&(E=""),S===void 0&&(S=""),M===void 0&&(M="&"),i=M,s=E,l=new RegExp("\\".concat(s,"\\b"),"g");var D=x.replace(t3,""),C=S4(S||E?"".concat(S," ").concat(E," { ").concat(D," }"):D);d.namespace&&(C=gv(C,d.namespace));var L=[];return po(C,T4(v.concat(A4(function(V){return L.push(V)})))),L};return b.hash=h.length?h.reduce(function(x,E){return E.name||Rs(15),Ri(x,E.name)},lv).toString():"",b}var n3=new pv,jf=e3(),vv=Qe.createContext({shouldForwardProp:void 0,styleSheet:n3,stylis:jf});vv.Consumer;Qe.createContext(void 0);function ng(){return A.useContext(vv)}var yv=function(){function n(i,s){var l=this;this.inject=function(u,f){f===void 0&&(f=jf);var d=l.name+f.hash;u.hasNameForId(l.id,d)||u.insertRules(l.id,d,f(l.rules,d,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=s,cd(this,function(){throw Rs(12,String(l.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=jf),this.name+i.hash},n}(),a3=function(n){return n>="A"&&n<="Z"};function ag(n){for(var i="",s=0;s<n.length;s++){var l=n[s];if(s===1&&l==="-"&&n[0]==="-")return n;a3(l)?i+="-"+l.toLowerCase():i+=l}return i.startsWith("ms-")?"-"+i:i}var bv=function(n){return n==null||n===!1||n===""},xv=function(n){var i,s,l=[];for(var u in n){var f=n[u];n.hasOwnProperty(u)&&!bv(f)&&(Array.isArray(f)&&f.isCss||Li(f)?l.push("".concat(ag(u),":"),f,";"):os(f)?l.push.apply(l,ls(ls(["".concat(u," {")],xv(f),!1),["}"],!1)):l.push("".concat(ag(u),": ").concat((i=u,(s=f)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||i in M4||i.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return l};function Pa(n,i,s,l){if(bv(n))return[];if(ud(n))return[".".concat(n.styledComponentId)];if(Li(n)){if(!Li(f=n)||f.prototype&&f.prototype.isReactComponent||!i)return[n];var u=n(i);return Pa(u,i,s,l)}var f;return n instanceof yv?s?(n.inject(s,l),[n.getName(l)]):[n]:os(n)?xv(n):Array.isArray(n)?Array.prototype.concat.apply(_o,n.map(function(d){return Pa(d,i,s,l)})):[n.toString()]}function i3(n){for(var i=0;i<n.length;i+=1){var s=n[i];if(Li(s)&&!ud(s))return!1}return!0}var r3=ov(Bo),s3=function(){function n(i,s,l){this.rules=i,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&i3(i),this.componentId=s,this.baseHash=Ri(r3,s),this.baseStyle=l,pv.registerId(s)}return n.prototype.generateAndInjectStyles=function(i,s,l){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,s,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))u=Na(u,this.staticRulesId);else{var f=Df(Pa(this.rules,i,s,l)),d=zf(Ri(this.baseHash,f)>>>0);if(!s.hasNameForId(this.componentId,d)){var m=l(f,".".concat(d),void 0,this.componentId);s.insertRules(this.componentId,d,m)}u=Na(u,d),this.staticRulesId=d}else{for(var h=Ri(this.baseHash,l.hash),p="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")p+=b;else if(b){var x=Df(Pa(b,i,s,l));h=Ri(h,x+v),p+=x}}if(p){var E=zf(h>>>0);s.hasNameForId(this.componentId,E)||s.insertRules(this.componentId,E,l(p,".".concat(E),void 0,this.componentId)),u=Na(u,E)}}return u},n}(),Sv=Qe.createContext(void 0);Sv.Consumer;var uf={};function l3(n,i,s){var l=ud(n),u=n,f=!of(n),d=i.attrs,m=d===void 0?_o:d,h=i.componentId,p=h===void 0?function(P,N){var Y=typeof P!="string"?"sc":Kp(P);uf[Y]=(uf[Y]||0)+1;var Q="".concat(Y,"-").concat(uv(Bo+Y+uf[Y]));return N?"".concat(N,"-").concat(Q):Q}(i.displayName,i.parentComponentId):h,v=i.displayName,b=v===void 0?function(P){return of(P)?"styled.".concat(P):"Styled(".concat(B4(P),")")}(n):v,x=i.displayName&&i.componentId?"".concat(Kp(i.displayName),"-").concat(i.componentId):i.componentId||p,E=l&&u.attrs?u.attrs.concat(m).filter(Boolean):m,S=i.shouldForwardProp;if(l&&u.shouldForwardProp){var M=u.shouldForwardProp;if(i.shouldForwardProp){var D=i.shouldForwardProp;S=function(P,N){return M(P,N)&&D(P,N)}}else S=M}var C=new s3(s,x,l?u.componentStyle:void 0);function L(P,N){return function(Y,Q,F){var X=Y.attrs,tt=Y.componentStyle,Rt=Y.defaultProps,ie=Y.foldedComponentIds,vt=Y.styledComponentId,Gt=Y.target,Yt=Qe.useContext(Sv),Z=ng(),J=Y.shouldForwardProp||Z.shouldForwardProp,I=z4(Q,Yt,Rt)||Ni,ct=function(dt,lt,$t){for(var gt,Et=Ee(Ee({},lt),{className:void 0,theme:$t}),Tt=0;Tt<dt.length;Tt+=1){var pe=Li(gt=dt[Tt])?gt(Et):gt;for(var be in pe)Et[be]=be==="className"?Na(Et[be],pe[be]):be==="style"?Ee(Ee({},Et[be]),pe[be]):pe[be]}return lt.className&&(Et.className=Na(Et.className,lt.className)),Et}(X,Q,I),R=ct.as||Gt,$={};for(var nt in ct)ct[nt]===void 0||nt[0]==="$"||nt==="as"||nt==="theme"&&ct.theme===I||(nt==="forwardedAs"?$.as=ct.forwardedAs:J&&!J(nt,R)||($[nt]=ct[nt]));var it=function(dt,lt){var $t=ng(),gt=dt.generateAndInjectStyles(lt,$t.styleSheet,$t.stylis);return gt}(tt,ct),K=Na(ie,vt);return it&&(K+=" "+it),ct.className&&(K+=" "+ct.className),$[of(R)&&!sv.has(R)?"class":"className"]=K,F&&($.ref=F),A.createElement(R,$)}(V,P,N)}L.displayName=b;var V=Qe.forwardRef(L);return V.attrs=E,V.componentStyle=C,V.displayName=b,V.shouldForwardProp=S,V.foldedComponentIds=l?Na(u.foldedComponentIds,u.styledComponentId):"",V.styledComponentId=x,V.target=l?u.target:n,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=l?function(N){for(var Y=[],Q=1;Q<arguments.length;Q++)Y[Q-1]=arguments[Q];for(var F=0,X=Y;F<X.length;F++)Of(N,X[F],!0);return N}({},u.defaultProps,P):P}}),cd(V,function(){return".".concat(V.styledComponentId)}),f&&hv(V,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function ig(n,i){for(var s=[n[0]],l=0,u=i.length;l<u;l+=1)s.push(i[l],n[l+1]);return s}var rg=function(n){return Object.assign(n,{isCss:!0})};function zs(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];if(Li(n)||os(n))return rg(Pa(ig(_o,ls([n],i,!0))));var l=n;return i.length===0&&l.length===1&&typeof l[0]=="string"?Pa(l):rg(Pa(ig(l,i)))}function Bf(n,i,s){if(s===void 0&&(s=Ni),!i)throw Rs(1,i);var l=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(i,s,zs.apply(void 0,ls([u],f,!1)))};return l.attrs=function(u){return Bf(n,i,Ee(Ee({},s),{attrs:Array.prototype.concat(s.attrs,u).filter(Boolean)}))},l.withConfig=function(u){return Bf(n,i,Ee(Ee({},s),u))},l}var wv=function(n){return Bf(l3,n)},j=wv;sv.forEach(function(n){j[n]=wv(n)});function ue(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var l=Df(zs.apply(void 0,ls([n],i,!1))),u=uv(l);return new yv(u,l)}var Ev={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sg=Qe.createContext&&Qe.createContext(Ev),o3=["attr","size","title"];function u3(n,i){if(n==null)return{};var s=c3(n,i),l,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(u=0;u<f.length;u++)l=f[u],!(i.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(s[l]=n[l])}return s}function c3(n,i){if(n==null)return{};var s={};for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){if(i.indexOf(l)>=0)continue;s[l]=n[l]}return s}function yo(){return yo=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(n[l]=s[l])}return n},yo.apply(this,arguments)}function lg(n,i){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);i&&(l=l.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),s.push.apply(s,l)}return s}function bo(n){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?arguments[i]:{};i%2?lg(Object(s),!0).forEach(function(l){f3(n,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):lg(Object(s)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(s,l))})}return n}function f3(n,i,s){return i=d3(i),i in n?Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[i]=s,n}function d3(n){var i=h3(n,"string");return typeof i=="symbol"?i:i+""}function h3(n,i){if(typeof n!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var l=s.call(n,i);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function Tv(n){return n&&n.map((i,s)=>Qe.createElement(i.tag,bo({key:s},i.attr),Tv(i.child)))}function Wt(n){return i=>Qe.createElement(m3,yo({attr:bo({},n.attr)},i),Tv(n.child))}function m3(n){var i=s=>{var{attr:l,size:u,title:f}=n,d=u3(n,o3),m=u||s.size||"1em",h;return s.className&&(h=s.className),n.className&&(h=(h?h+" ":"")+n.className),Qe.createElement("svg",yo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,l,d,{className:h,style:bo(bo({color:n.color||s.color},s.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),f&&Qe.createElement("title",null,f),n.children)};return sg!==void 0?Qe.createElement(sg.Consumer,null,s=>i(s)):i(Ev)}function p3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(n)}function Vo(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function g3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z"},child:[]}]})(n)}function Av(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function v3(n){return Wt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"},child:[]}]})(n)}function y3(n){return Wt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function Cv(n){return Wt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(n)}function Mv(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"},child:[]}]})(n)}function b3(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function x3(n){return Wt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"},child:[]}]})(n)}function S3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function w3(n){return Wt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function xo(n){return Wt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function E3(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(n)}function T3(n){return Wt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function A3(n){return Wt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"},child:[]}]})(n)}function C3(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function M3(n){return Wt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(n)}const R3="/vegetaquizshow/assets/vegetaball-DRzOjpAa.webp",Rv=A.createContext(void 0),z3=({children:n})=>{const[i,s]=A.useState(0),[l,u]=A.useState(0),[f,d]=A.useState(!1),[m,h]=A.useState(()=>{const M=localStorage.getItem("quizPlayers");return M?JSON.parse(M):[]}),[p,v]=A.useState(null);A.useEffect(()=>{const M=localStorage.getItem("quizPlayers");if(M){const D=JSON.parse(M);h(D),D.length>0&&v(D[0])}},[]),A.useEffect(()=>{localStorage.setItem("quizPlayers",JSON.stringify(m))},[m]);const S={score:i,setScore:s,currentQuestion:l,setCurrentQuestion:u,isGameActive:f,setIsGameActive:d,players:m,addPlayer:M=>{const D={...M,id:Date.now().toString()};h([...m,D]),m.length===0&&v(D)},removePlayer:M=>{if(h(m.filter(D=>D.id!==M)),p&&p.id===M){const D=m.filter(C=>C.id!==M);v(D.length>0?D[0]:null)}},updatePlayerScore:(M,D)=>{h(m.map(C=>C.id===M?{...C,score:D}:C)),p&&p.id===M&&v({...p,score:D})},activePlayer:p,setActivePlayer:v};return w.jsx(Rv.Provider,{value:S,children:n})},zv=()=>{const n=A.useContext(Rv);if(n===void 0)throw new Error("useGlobalContext must be used within a GlobalProvider");return n},D3=()=>{const{players:n,addPlayer:i,removePlayer:s}=zv(),[l,u]=A.useState(!1),[f,d]=A.useState(""),[m,h]=A.useState(""),[p,v]=A.useState(""),b=Cs(),x=C=>C?`https://play.pokemonshowdown.com/sprites/xyani/${C.toLowerCase().trim().replace(/[^a-z0-9]/g,"")}.gif`:"",E=C=>{const L=C.target.value;h(L),v(x(L))},S=()=>{if(f.trim()){const C=m.trim()?x(m):`https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`;i({name:f.trim(),avatar:C,score:0}),d(""),h(""),v(""),u(!1)}},M=()=>{if(n.length===0){alert("Aggiungi almeno un allenatore prima di iniziare!");return}localStorage.setItem("quizPlayers",JSON.stringify(n)),b("/game")},D=C=>{s(C)};return w.jsxs(j3,{children:[w.jsxs(L3,{children:[w.jsx(cf,{children:"VEGETA"}),w.jsx(cf,{children:"QUIZ"}),w.jsx(cf,{children:"SHOW"})]}),w.jsxs(U3,{children:[w.jsxs(ug,{onClick:()=>u(!0),$color:"#EE1515",children:[w.jsx(og,{children:w.jsx(T3,{})}),w.jsx("span",{children:"Registra Allenatore"})]}),w.jsxs(ug,{onClick:M,disabled:n.length===0,className:n.length===0?"disabled":"ready",$color:"#3B4CCA",children:[w.jsx(og,{children:w.jsx(Cv,{})}),w.jsx("span",{children:"Inizia Avventura"})]})]}),w.jsxs(H3,{children:[w.jsxs(P3,{children:[w.jsx("h2",{children:"Allenatori"}),n.length>0&&w.jsxs(G3,{children:[w.jsx(q3,{small:!0,style:{transform:"rotate(180deg)"}}),n.length]})]}),n.length===0?w.jsxs(Y3,{children:[w.jsx($3,{children:"Nessun allenatore registrato"}),w.jsx(X3,{onClick:()=>u(!0),children:"Registra il tuo primo allenatore!"})]}):w.jsx(Q3,{children:n.map(C=>w.jsxs(Ds,{children:[w.jsx(oS,{children:w.jsx(uS,{src:C.avatar,alt:C.name})}),w.jsx(K3,{children:C.name}),w.jsx(F3,{onClick:()=>D(C.id),children:w.jsx(xo,{})}),w.jsx(Z3,{children:w.jsx(Mv,{})})]},C.id))})]}),l&&w.jsx(J3,{children:w.jsxs(W3,{children:[w.jsxs(I3,{children:[w.jsx("h2",{children:"Registra Allenatore"}),w.jsx(tS,{onClick:()=>u(!1),children:w.jsx(xo,{})})]}),w.jsxs(eS,{children:[w.jsxs(cg,{children:[w.jsx(fg,{children:"Nome Allenatore"}),w.jsx(dg,{type:"text",value:f,onChange:C=>d(C.target.value),placeholder:"Inserisci il nome dell'allenatore"})]}),w.jsxs(cg,{children:[w.jsx(fg,{children:"Nome Pokémon"}),w.jsx(dg,{type:"text",value:m,onChange:E,placeholder:"Inserisci il nome di un Pokémon (es. pikachu, charizard)"}),w.jsx(nS,{children:"Inserisci il nome di un Pokémon per utilizzarlo come avatar"}),p&&w.jsxs(sS,{children:[w.jsx(cS,{children:w.jsx(fS,{src:p,alt:"Anteprima Avatar"})}),w.jsx(lS,{children:"Anteprima Avatar"})]})]}),w.jsxs(aS,{children:[w.jsx(iS,{onClick:()=>u(!1),children:"Annulla"}),w.jsx(rS,{onClick:S,children:"Registra"})]})]})]})}),w.jsxs(B3,{children:[w.jsx(cs,{className:"ball1"}),w.jsx(cs,{className:"ball2"}),w.jsx(V3,{className:"ball3"}),w.jsx(k3,{className:"ball4"}),w.jsx(N3,{className:"ball5"}),w.jsx(_3,{})]}),w.jsx("img",{src:R3,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:.55,zIndex:0,objectFit:"cover"}})]})},us=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,O3=ue`
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
`;const j3=j.div`
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
`,B3=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,_3=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
`,cs=j.div`
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
`,V3=j(cs)`
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
`,k3=j(cs)`
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
`,N3=j(cs)`
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
`,L3=j.h1`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;

  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${O3} 3s infinite ease-in-out;
  z-index: 1;
  font-family: 'Pokemon Solid', 'Arial Black', sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,cf=j.span`
  color: #ffde00;
  margin: 0 0.3rem;
  position: relative;
  -webkit-text-stroke: 3px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;

  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #3b4cca;
  }
`,U3=j.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,og=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
  font-size: 1.3rem;
`,ug=j.button`
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
`,H3=j.div`
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
`,P3=j.div`
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
`,q3=j.div`
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
`,G3=j.div`
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,Y3=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`,$3=j.p`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin-bottom: 1rem;
`,X3=j.button`
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
`,Q3=j.div`
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
`,Ds=j.div`
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
`,Z3=j.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${Ds}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`;j.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  object-fit: contain;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);

  /* Effetto hover per evidenziare l'animazione */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${Ds}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;const K3=j.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 1;
`,F3=j.button`
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

  ${Ds}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: #ff0044;
    transform: scale(1.2);
  }
`,J3=j.div`
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
`,W3=j.div`
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
`,I3=j.div`
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
`,tS=j.button`
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
`,eS=j.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`,cg=j.div`
  margin-bottom: 1.5rem;
`,fg=j.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffde00;
  font-weight: 600;
  font-size: 0.9rem;
`,dg=j.input`
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
`,nS=j.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`,aS=j.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,iS=j.button`
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
`,rS=j.button`
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
`,sS=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`,lS=j.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`,oS=j.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Effetto hover per evidenziare l'animazione */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${Ds}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`,uS=j.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`,cS=j.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`,fS=j.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
  display: block;
`;function dS(n){return Wt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(n)}function hS(){const n=Cs(),{players:i,updatePlayerScore:s}=zv();A.useEffect(()=>{i.length===0&&n("/")},[n,i]);const l=[{id:"categories",title:"Quiz Pokémon",description:"Sfida le tue conoscenze sui Pokémon in varie categorie",icon:w.jsx(Cv,{}),color:"#EE1515",path:"/game/categories"},{id:"wheel",title:"Ruota della Fortuna",description:"Gira la ruota e affronta sfide casuali",icon:w.jsx(v3,{}),color:"#3B4CCA",path:"/game/wheel"},{id:"image",title:"WhO's ThAt PoKéMoN?",description:"Indovina il Pokémon dall'ombra o immagine sfocata",icon:w.jsx(b3,{}),color:"#FF9C54",path:"/game/image"},{id:"fusion",title:"Fusioni Pokémon",description:"Indovina quali Pokémon creano una fusione",icon:w.jsx(g3,{}),color:"#9966FF",path:"/game/fusion"},{id:"pokemon",title:"Poké-Sherlock",description:"Indovina il Pokémon dagli indizi",icon:w.jsx(dS,{}),color:"#78C850",path:"/game/pokemon"}];return w.jsxs(gS,{children:[w.jsxs(SS,{to:"/",children:[w.jsx(Vo,{})," Torna alla home"]}),w.jsx(wS,{children:"Centro Sfide Pokémon"}),w.jsx(ES,{children:l.map(u=>w.jsxs(fd,{to:u.path,$color:u.color,children:[w.jsx(AS,{$color:u.color,children:u.icon}),w.jsxs(CS,{children:[w.jsx(MS,{children:u.title}),w.jsx(RS,{children:u.description})]}),w.jsx(zS,{children:w.jsx("div",{className:"arrow",children:"→"})}),w.jsx(TS,{})]},u.id))}),w.jsxs(DS,{children:[w.jsxs(OS,{children:[w.jsx(jS,{children:"Allenatori"}),w.jsxs(BS,{children:[i.length," ",i.length===1?"allenatore":"allenatori"]})]}),w.jsx(_S,{children:i.map(u=>w.jsxs(dd,{children:[w.jsx(NS,{children:w.jsx(US,{src:u.avatar,alt:u.name})}),w.jsx(VS,{children:u.name}),w.jsx(LS,{children:w.jsx(Mv,{})})]},u.id))})]}),w.jsxs(vS,{children:[w.jsx(ds,{className:"ball1"}),w.jsx(ds,{className:"ball2"}),w.jsx(yS,{className:"ball3"}),w.jsx(bS,{className:"ball4"}),w.jsx(xS,{className:"ball5"})]})]})}const fs=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;const mS=ue`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,pS=ue`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,gS=j.div`
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
`,vS=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,ds=j.div`
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
`,yS=j(ds)`
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
`,bS=j(ds)`
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
`,xS=j(ds)`
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
`,SS=j(Yi)`
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
`,wS=j.h1`
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
`,ES=j.div`
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
`,fd=j(Yi)`
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
      animation: ${mS} 1s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,TS=j.div`
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
    animation: ${pS} 1s ease-in-out;
  }
`,AS=j.div`
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
`,CS=j.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,MS=j.h3`
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,RS=j.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
`,zS=j.div`
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
`;j.div`
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
`;const DS=j.div`
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
`,OS=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
`,jS=j.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,BS=j.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,_S=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,dd=j.div`
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
`;j.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`;j.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;const VS=j.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`,kS=j.div`
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
`;j.span`
  margin-left: 0.5rem;
  opacity: 0;
  transition: all 0.2s ease;
  color: #ffde00;

  ${kS}:hover & {
    opacity: 1;
  }
`;const NS=j.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  margin-right: 1rem;
  border: 3px solid #ffde00;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Effetto hover per evidenziare l'animazione */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${dd}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`,LS=j.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${dd}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`,US=j.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`,hd=A.createContext({});function ko(n){const i=A.useRef(null);return i.current===null&&(i.current=n()),i.current}const md=typeof window<"u",pd=md?A.useLayoutEffect:A.useEffect,No=A.createContext(null),gd=A.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class HS extends A.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent){const l=s.offsetParent,u=l instanceof HTMLElement&&l.offsetWidth||0,f=this.props.sizeRef.current;f.height=s.offsetHeight||0,f.width=s.offsetWidth||0,f.top=s.offsetTop,f.left=s.offsetLeft,f.right=u-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function PS({children:n,isPresent:i,anchorX:s}){const l=A.useId(),u=A.useRef(null),f=A.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=A.useContext(gd);return A.useInsertionEffect(()=>{const{width:m,height:h,top:p,left:v,right:b}=f.current;if(i||!u.current||!m||!h)return;const x=s==="left"?`left: ${v}`:`right: ${b}`;u.current.dataset.motionPopId=l;const E=document.createElement("style");return d&&(E.nonce=d),document.head.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${p}px !important;
          }
        `),()=>{document.head.removeChild(E)}},[i]),w.jsx(HS,{isPresent:i,childRef:u,sizeRef:f,children:A.cloneElement(n,{ref:u})})}const qS=({children:n,initial:i,isPresent:s,onExitComplete:l,custom:u,presenceAffectsLayout:f,mode:d,anchorX:m})=>{const h=ko(GS),p=A.useId(),v=A.useCallback(x=>{h.set(x,!0);for(const E of h.values())if(!E)return;l&&l()},[h,l]),b=A.useMemo(()=>({id:p,initial:i,isPresent:s,custom:u,onExitComplete:v,register:x=>(h.set(x,!1),()=>h.delete(x))}),f?[Math.random(),v]:[s,v]);return A.useMemo(()=>{h.forEach((x,E)=>h.set(E,!1))},[s]),A.useEffect(()=>{!s&&!h.size&&l&&l()},[s]),d==="popLayout"&&(n=w.jsx(PS,{isPresent:s,anchorX:m,children:n})),w.jsx(No.Provider,{value:b,children:n})};function GS(){return new Map}function Dv(n=!0){const i=A.useContext(No);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:l,register:u}=i,f=A.useId();A.useEffect(()=>{if(n)return u(f)},[n]);const d=A.useCallback(()=>n&&l&&l(f),[f,l,n]);return!s&&l?[!1,d]:[!0]}const Wl=n=>n.key||"";function hg(n){const i=[];return A.Children.forEach(n,s=>{A.isValidElement(s)&&i.push(s)}),i}const Ov=({children:n,custom:i,initial:s=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:m="left"})=>{const[h,p]=Dv(d),v=A.useMemo(()=>hg(n),[n]),b=d&&!h?[]:v.map(Wl),x=A.useRef(!0),E=A.useRef(v),S=ko(()=>new Map),[M,D]=A.useState(v),[C,L]=A.useState(v);pd(()=>{x.current=!1,E.current=v;for(let N=0;N<C.length;N++){const Y=Wl(C[N]);b.includes(Y)?S.delete(Y):S.get(Y)!==!0&&S.set(Y,!1)}},[C,b.length,b.join("-")]);const V=[];if(v!==M){let N=[...v];for(let Y=0;Y<C.length;Y++){const Q=C[Y],F=Wl(Q);b.includes(F)||(N.splice(Y,0,Q),V.push(Q))}return f==="wait"&&V.length&&(N=V),L(hg(N)),D(v),null}const{forceRender:P}=A.useContext(hd);return w.jsx(w.Fragment,{children:C.map(N=>{const Y=Wl(N),Q=d&&!h?!1:v===C||b.includes(Y),F=()=>{if(S.has(Y))S.set(Y,!0);else return;let X=!0;S.forEach(tt=>{tt||(X=!1)}),X&&(P==null||P(),L(E.current),d&&(p==null||p()),l&&l())};return w.jsx(qS,{isPresent:Q,initial:!x.current||s?void 0:!1,custom:i,presenceAffectsLayout:u,mode:f,onExitComplete:Q?void 0:F,anchorX:m,children:N},Y)})})};function vd(n,i){n.indexOf(i)===-1&&n.push(i)}function yd(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}const je=n=>n;let jv=je;const YS={useManualTiming:!1};function bd(n){let i;return()=>(i===void 0&&(i=n()),i)}const Ui=(n,i,s)=>{const l=i-n;return l===0?1:(s-n)/l};class xd{constructor(){this.subscriptions=[]}add(i){return vd(this.subscriptions,i),()=>yd(this.subscriptions,i)}notify(i,s,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,s,l);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,s,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jn=n=>n*1e3,Bn=n=>n/1e3;function Bv(n,i){return i?n*(1e3/i):0}const $S=bd(()=>window.ScrollTimeline!==void 0);class XS{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,s){for(let l=0;l<this.animations.length;l++)this.animations[l][i]=s}attachTimeline(i,s){const l=this.animations.map(u=>{if($S()&&u.attachTimeline)return u.attachTimeline(i);if(typeof s=="function")return s(u)});return()=>{l.forEach((u,f)=>{u&&u(),this.animations[f].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let s=0;s<this.animations.length;s++)i=Math.max(i,this.animations[s].duration);return i}runAll(i){this.animations.forEach(s=>s[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class QS extends XS{then(i,s){return Promise.all(this.animations).then(i).catch(s)}}function Sd(n,i){return n?n[i]||n.default||n:void 0}const _f=2e4;function _v(n){let i=0;const s=50;let l=n.next(i);for(;!l.done&&i<_f;)i+=s,l=n.next(i);return i>=_f?1/0:i}function wd(n){return typeof n=="function"}function mg(n,i){n.timeline=i,n.onfinish=null}const Ed=n=>Array.isArray(n)&&typeof n[0]=="number",ZS={linearEasing:void 0};function KS(n,i){const s=bd(n);return()=>{var l;return(l=ZS[i])!==null&&l!==void 0?l:s()}}const So=KS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Vv=(n,i,s=10)=>{let l="";const u=Math.max(Math.round(i/s),2);for(let f=0;f<u;f++)l+=n(Ui(0,u-1,f))+", ";return`linear(${l.substring(0,l.length-2)})`};function kv(n){return!!(typeof n=="function"&&So()||!n||typeof n=="string"&&(n in Vf||So())||Ed(n)||Array.isArray(n)&&n.every(kv))}const Wr=([n,i,s,l])=>`cubic-bezier(${n}, ${i}, ${s}, ${l})`,Vf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Wr([0,.65,.55,1]),circOut:Wr([.55,0,1,.45]),backIn:Wr([.31,.01,.66,-.59]),backOut:Wr([.33,1.53,.69,.99])};function Nv(n,i){if(n)return typeof n=="function"&&So()?Vv(n,i):Ed(n)?Wr(n):Array.isArray(n)?n.map(s=>Nv(s,i)||Vf.easeOut):Vf[n]}const Il=["read","resolveKeyframes","update","preRender","render","postRender"];function FS(n,i){let s=new Set,l=new Set,u=!1,f=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function h(v){d.has(v)&&(p.schedule(v),n()),v(m)}const p={schedule:(v,b=!1,x=!1)=>{const S=x&&u?s:l;return b&&d.add(v),S.has(v)||S.add(v),v},cancel:v=>{l.delete(v),d.delete(v)},process:v=>{if(m=v,u){f=!0;return}u=!0,[s,l]=[l,s],s.forEach(h),s.clear(),u=!1,f&&(f=!1,p.process(v))}};return p}const JS=40;function Lv(n,i){let s=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>s=!0,d=Il.reduce((C,L)=>(C[L]=FS(f),C),{}),{read:m,resolveKeyframes:h,update:p,preRender:v,render:b,postRender:x}=d,E=()=>{const C=performance.now();s=!1,u.delta=l?1e3/60:Math.max(Math.min(C-u.timestamp,JS),1),u.timestamp=C,u.isProcessing=!0,m.process(u),h.process(u),p.process(u),v.process(u),b.process(u),x.process(u),u.isProcessing=!1,s&&i&&(l=!1,n(E))},S=()=>{s=!0,l=!0,u.isProcessing||n(E)};return{schedule:Il.reduce((C,L)=>{const V=d[L];return C[L]=(P,N=!1,Y=!1)=>(s||S(),V.schedule(P,N,Y)),C},{}),cancel:C=>{for(let L=0;L<Il.length;L++)d[Il[L]].cancel(C)},state:u,steps:d}}const{schedule:Ot,cancel:ua,state:oe,steps:ff}=Lv(typeof requestAnimationFrame<"u"?requestAnimationFrame:je,!0),{schedule:Td}=Lv(queueMicrotask,!1);let co;function WS(){co=void 0}const un={now:()=>(co===void 0&&un.set(oe.isProcessing||YS.useManualTiming?oe.timestamp:performance.now()),co),set:n=>{co=n,queueMicrotask(WS)}},Ie={x:!1,y:!1};function Uv(){return Ie.x||Ie.y}function IS(n){return n==="x"||n==="y"?Ie[n]?null:(Ie[n]=!0,()=>{Ie[n]=!1}):Ie.x||Ie.y?null:(Ie.x=Ie.y=!0,()=>{Ie.x=Ie.y=!1})}function tw(n,i,s){var l;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let u=document;const f=(l=void 0)!==null&&l!==void 0?l:u.querySelectorAll(n);return f?Array.from(f):[]}return Array.from(n)}function Hv(n,i){const s=tw(n),l=new AbortController,u={passive:!0,...i,signal:l.signal};return[s,u,()=>l.abort()]}function pg(n){return!(n.pointerType==="touch"||Uv())}function ew(n,i,s={}){const[l,u,f]=Hv(n,s),d=m=>{if(!pg(m))return;const{target:h}=m,p=i(h,m);if(typeof p!="function"||!h)return;const v=b=>{pg(b)&&(p(b),h.removeEventListener("pointerleave",v))};h.addEventListener("pointerleave",v,u)};return l.forEach(m=>{m.addEventListener("pointerenter",d,u)}),f}function gg(n,i){const s=`${i}PointerCapture`;if(n.target instanceof Element&&s in n.target&&n.pointerId!==void 0)try{n.target[s](n.pointerId)}catch{}}const Pv=(n,i)=>i?n===i?!0:Pv(n,i.parentElement):!1,Ad=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,nw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function aw(n){return nw.has(n.tagName)||n.tabIndex!==-1}const Ir=new WeakSet;function vg(n){return i=>{i.key==="Enter"&&n(i)}}function df(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const iw=(n,i)=>{const s=n.currentTarget;if(!s)return;const l=vg(()=>{if(Ir.has(s))return;df(s,"down");const u=vg(()=>{df(s,"up")}),f=()=>df(s,"cancel");s.addEventListener("keyup",u,i),s.addEventListener("blur",f,i)});s.addEventListener("keydown",l,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",l),i)};function yg(n){return Ad(n)&&!Uv()}function rw(n,i,s={}){const[l,u,f]=Hv(n,s),d=m=>{const h=m.currentTarget;if(!h||!yg(m)||Ir.has(h))return;Ir.add(h),gg(m,"set");const p=i(h,m),v=(E,S)=>{h.removeEventListener("pointerup",b),h.removeEventListener("pointercancel",x),gg(E,"release"),!(!yg(E)||!Ir.has(h))&&(Ir.delete(h),typeof p=="function"&&p(E,{success:S}))},b=E=>{(E.isTrusted?sw(E,h instanceof Element?h.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?v(E,!1):v(E,!(h instanceof Element)||Pv(h,E.target))},x=E=>{v(E,!1)};h.addEventListener("pointerup",b,u),h.addEventListener("pointercancel",x,u),h.addEventListener("lostpointercapture",x,u)};return l.forEach(m=>{m=s.useGlobalTarget?window:m;let h=!1;m instanceof HTMLElement&&(h=!0,!aw(m)&&m.getAttribute("tabindex")===null&&(m.tabIndex=0)),m.addEventListener("pointerdown",d,u),h&&m.addEventListener("focus",p=>iw(p,u),u)}),f}function sw(n,i){return n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom}const bg=30,lw=n=>!isNaN(parseFloat(n));class ow{constructor(i,s={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(l,u=!0)=>{const f=un.now();this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=un.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=lw(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new xd);const l=this.events[i].add(s);return i==="change"?()=>{l(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i,s=!0){!s||!this.passiveEffect?this.updateAndNotify(i,s):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,s,l){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=un.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>bg)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,bg);return Bv(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function hs(n,i){return new ow(n,i)}const qv=A.createContext({strict:!1}),xg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Hi={};for(const n in xg)Hi[n]={isEnabled:i=>xg[n].some(s=>!!i[s])};function uw(n){for(const i in n)Hi[i]={...Hi[i],...n[i]}}const cw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||cw.has(n)}let Gv=n=>!wo(n);function fw(n){n&&(Gv=i=>i.startsWith("on")?!wo(i):n(i))}try{fw(require("@emotion/is-prop-valid").default)}catch{}function dw(n,i,s){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(Gv(u)||s===!0&&wo(u)||!i&&!wo(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}function hw(n){if(typeof Proxy>"u")return n;const i=new Map,s=(...l)=>n(...l);return new Proxy(s,{get:(l,u)=>u==="create"?n:(i.has(u)||i.set(u,n(u)),i.get(u))})}const Lo=A.createContext({});function Uo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ms(n){return typeof n=="string"||Array.isArray(n)}const Cd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Md=["initial",...Cd];function Ho(n){return Uo(n.animate)||Md.some(i=>ms(n[i]))}function Yv(n){return!!(Ho(n)||n.variants)}function mw(n,i){if(Ho(n)){const{initial:s,animate:l}=n;return{initial:s===!1||ms(s)?s:void 0,animate:ms(l)?l:void 0}}return n.inherit!==!1?i:{}}function pw(n){const{initial:i,animate:s}=mw(n,A.useContext(Lo));return A.useMemo(()=>({initial:i,animate:s}),[Sg(i),Sg(s)])}function Sg(n){return Array.isArray(n)?n.join(" "):n}const gw=Symbol.for("motionComponentSymbol");function zi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function vw(n,i,s){return A.useCallback(l=>{l&&n.onMount&&n.onMount(l),i&&(l?i.mount(l):i.unmount()),s&&(typeof s=="function"?s(l):zi(s)&&(s.current=l))},[i])}const Rd=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yw="framerAppearId",$v="data-"+Rd(yw),Xv=A.createContext({});function bw(n,i,s,l,u){var f,d;const{visualElement:m}=A.useContext(Lo),h=A.useContext(qv),p=A.useContext(No),v=A.useContext(gd).reducedMotion,b=A.useRef(null);l=l||h.renderer,!b.current&&l&&(b.current=l(n,{visualState:i,parent:m,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:v}));const x=b.current,E=A.useContext(Xv);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&xw(b.current,s,u,E);const S=A.useRef(!1);A.useInsertionEffect(()=>{x&&S.current&&x.update(s,p)});const M=s[$v],D=A.useRef(!!M&&!(!((f=window.MotionHandoffIsComplete)===null||f===void 0)&&f.call(window,M))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,M)));return pd(()=>{x&&(S.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),Td.render(x.render),D.current&&x.animationState&&x.animationState.animateChanges())}),A.useEffect(()=>{x&&(!D.current&&x.animationState&&x.animationState.animateChanges(),D.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)===null||C===void 0||C.call(window,M)}),D.current=!1))}),x}function xw(n,i,s,l){const{layoutId:u,layout:f,drag:d,dragConstraints:m,layoutScroll:h,layoutRoot:p}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Qv(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||m&&zi(m),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,layoutScroll:h,layoutRoot:p})}function Qv(n){if(n)return n.options.allowProjection!==!1?n.projection:Qv(n.parent)}function Sw({preloadedFeatures:n,createVisualElement:i,useRender:s,useVisualState:l,Component:u}){var f,d;n&&uw(n);function m(p,v){let b;const x={...A.useContext(gd),...p,layoutId:ww(p)},{isStatic:E}=x,S=pw(p),M=l(p,E);if(!E&&md){Ew();const D=Tw(x);b=D.MeasureLayout,S.visualElement=bw(u,M,x,i,D.ProjectionNode)}return w.jsxs(Lo.Provider,{value:S,children:[b&&S.visualElement?w.jsx(b,{visualElement:S.visualElement,...x}):null,s(u,p,vw(M,S.visualElement,v),M,E,S.visualElement)]})}m.displayName=`motion.${typeof u=="string"?u:`create(${(d=(f=u.displayName)!==null&&f!==void 0?f:u.name)!==null&&d!==void 0?d:""})`}`;const h=A.forwardRef(m);return h[gw]=u,h}function ww({layoutId:n}){const i=A.useContext(hd).id;return i&&n!==void 0?i+"-"+n:n}function Ew(n,i){A.useContext(qv).strict}function Tw(n){const{drag:i,layout:s}=Hi;if(!i&&!s)return{};const l={...i,...s};return{MeasureLayout:i!=null&&i.isEnabled(n)||s!=null&&s.isEnabled(n)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}const Zv=n=>i=>typeof i=="string"&&i.startsWith(n),zd=Zv("--"),Aw=Zv("var(--"),Dd=n=>Aw(n)?Cw.test(n.split("/*")[0].trim()):!1,Cw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ps={};function Mw(n){for(const i in n)ps[i]=n[i],zd(i)&&(ps[i].isCSSVariable=!0)}const Xi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ga=new Set(Xi);function Kv(n,{layout:i,layoutId:s}){return Ga.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!ps[n]||n==="opacity")}const me=n=>!!(n&&n.getVelocity),Fv=(n,i)=>i&&typeof n=="number"?i.transform(n):n,Vn=(n,i,s)=>s>i?i:s<n?n:s,Qi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},gs={...Qi,transform:n=>Vn(0,1,n)},to={...Qi,default:1},Os=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),oa=Os("deg"),cn=Os("%"),st=Os("px"),Rw=Os("vh"),zw=Os("vw"),wg={...cn,parse:n=>cn.parse(n)/100,transform:n=>cn.transform(n*100)},Dw={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st},Ow={rotate:oa,rotateX:oa,rotateY:oa,rotateZ:oa,scale:to,scaleX:to,scaleY:to,scaleZ:to,skew:oa,skewX:oa,skewY:oa,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:gs,originX:wg,originY:wg,originZ:st},Eg={...Qi,transform:Math.round},Od={...Dw,...Ow,zIndex:Eg,size:st,fillOpacity:gs,strokeOpacity:gs,numOctaves:Eg},jw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Bw=Xi.length;function _w(n,i,s){let l="",u=!0;for(let f=0;f<Bw;f++){const d=Xi[f],m=n[d];if(m===void 0)continue;let h=!0;if(typeof m=="number"?h=m===(d.startsWith("scale")?1:0):h=parseFloat(m)===0,!h||s){const p=Fv(m,Od[d]);if(!h){u=!1;const v=jw[d]||d;l+=`${v}(${p}) `}s&&(i[d]=p)}}return l=l.trim(),s?l=s(i,u?"":l):u&&(l="none"),l}function jd(n,i,s){const{style:l,vars:u,transformOrigin:f}=n;let d=!1,m=!1;for(const h in i){const p=i[h];if(Ga.has(h)){d=!0;continue}else if(zd(h)){u[h]=p;continue}else{const v=Fv(p,Od[h]);h.startsWith("origin")?(m=!0,f[h]=v):l[h]=v}}if(i.transform||(d||s?l.transform=_w(i,n.transform,s):l.transform&&(l.transform="none")),m){const{originX:h="50%",originY:p="50%",originZ:v=0}=f;l.transformOrigin=`${h} ${p} ${v}`}}const Bd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Jv(n,i,s){for(const l in i)!me(i[l])&&!Kv(l,s)&&(n[l]=i[l])}function Vw({transformTemplate:n},i){return A.useMemo(()=>{const s=Bd();return jd(s,i,n),Object.assign({},s.vars,s.style)},[i])}function kw(n,i){const s=n.style||{},l={};return Jv(l,s,n),Object.assign(l,Vw(n,i)),l}function Nw(n,i){const s={},l=kw(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=l,s}const Lw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _d(n){return typeof n!="string"||n.includes("-")?!1:!!(Lw.indexOf(n)>-1||/[A-Z]/u.test(n))}const Uw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Hw={offset:"strokeDashoffset",array:"strokeDasharray"};function Pw(n,i,s=1,l=0,u=!0){n.pathLength=1;const f=u?Uw:Hw;n[f.offset]=st.transform(-l);const d=st.transform(i),m=st.transform(s);n[f.array]=`${d} ${m}`}function Tg(n,i,s){return typeof n=="string"?n:st.transform(i+s*n)}function qw(n,i,s){const l=Tg(i,n.x,n.width),u=Tg(s,n.y,n.height);return`${l} ${u}`}function Vd(n,{attrX:i,attrY:s,attrScale:l,originX:u,originY:f,pathLength:d,pathSpacing:m=1,pathOffset:h=0,...p},v,b){if(jd(n,p,b),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:E,dimensions:S}=n;x.transform&&(S&&(E.transform=x.transform),delete x.transform),S&&(u!==void 0||f!==void 0||E.transform)&&(E.transformOrigin=qw(S,u!==void 0?u:.5,f!==void 0?f:.5)),i!==void 0&&(x.x=i),s!==void 0&&(x.y=s),l!==void 0&&(x.scale=l),d!==void 0&&Pw(x,d,m,h,!1)}const Wv=()=>({...Bd(),attrs:{}}),kd=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Gw(n,i,s,l){const u=A.useMemo(()=>{const f=Wv();return Vd(f,i,kd(l),n.transformTemplate),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Jv(f,n.style,n),u.style={...f,...u.style}}return u}function Yw(n=!1){return(s,l,u,{latestValues:f},d)=>{const h=(_d(s)?Gw:Nw)(l,f,d,s),p=dw(l,typeof s=="string",n),v=s!==A.Fragment?{...p,...h,ref:u}:{},{children:b}=l,x=A.useMemo(()=>me(b)?b.get():b,[b]);return A.createElement(s,{...v,children:x})}}function Ag(n){const i=[{},{}];return n==null||n.values.forEach((s,l)=>{i[0][l]=s.get(),i[1][l]=s.getVelocity()}),i}function Nd(n,i,s,l){if(typeof i=="function"){const[u,f]=Ag(l);i=i(s!==void 0?s:n.custom,u,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,f]=Ag(l);i=i(s!==void 0?s:n.custom,u,f)}return i}const kf=n=>Array.isArray(n),$w=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Xw=n=>kf(n)?n[n.length-1]||0:n;function fo(n){const i=me(n)?n.get():n;return $w(i)?i.toValue():i}function Qw({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:s},l,u,f){const d={latestValues:Zw(l,u,f,n),renderState:i()};return s&&(d.onMount=m=>s({props:l,current:m,...d}),d.onUpdate=m=>s(m)),d}const Iv=n=>(i,s)=>{const l=A.useContext(Lo),u=A.useContext(No),f=()=>Qw(n,i,l,u);return s?f():ko(f)};function Zw(n,i,s,l){const u={},f=l(n,{});for(const x in f)u[x]=fo(f[x]);let{initial:d,animate:m}=n;const h=Ho(n),p=Yv(n);i&&p&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),m===void 0&&(m=i.animate));let v=s?s.initial===!1:!1;v=v||d===!1;const b=v?m:d;if(b&&typeof b!="boolean"&&!Uo(b)){const x=Array.isArray(b)?b:[b];for(let E=0;E<x.length;E++){const S=Nd(n,x[E]);if(S){const{transitionEnd:M,transition:D,...C}=S;for(const L in C){let V=C[L];if(Array.isArray(V)){const P=v?V.length-1:0;V=V[P]}V!==null&&(u[L]=V)}for(const L in M)u[L]=M[L]}}}return u}function Ld(n,i,s){var l;const{style:u}=n,f={};for(const d in u)(me(u[d])||i.style&&me(i.style[d])||Kv(d,n)||((l=s==null?void 0:s.getValue(d))===null||l===void 0?void 0:l.liveStyle)!==void 0)&&(f[d]=u[d]);return f}const Kw={useVisualState:Iv({scrapeMotionValuesFromProps:Ld,createRenderState:Bd})};function ty(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}function ey(n,{style:i,vars:s},l,u){Object.assign(n.style,i,u&&u.getProjectionStyles(l));for(const f in s)n.style.setProperty(f,s[f])}const ny=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ay(n,i,s,l){ey(n,i,void 0,l);for(const u in i.attrs)n.setAttribute(ny.has(u)?u:Rd(u),i.attrs[u])}function iy(n,i,s){const l=Ld(n,i,s);for(const u in n)if(me(n[u])||me(i[u])){const f=Xi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[f]=n[u]}return l}const Cg=["x","y","width","height","cx","cy","r"],Fw={useVisualState:Iv({scrapeMotionValuesFromProps:iy,createRenderState:Wv,onUpdate:({props:n,prevProps:i,current:s,renderState:l,latestValues:u})=>{if(!s)return;let f=!!n.drag;if(!f){for(const m in u)if(Ga.has(m)){f=!0;break}}if(!f)return;let d=!i;if(i)for(let m=0;m<Cg.length;m++){const h=Cg[m];n[h]!==i[h]&&(d=!0)}d&&Ot.read(()=>{ty(s,l),Ot.render(()=>{Vd(l,u,kd(s.tagName),n.transformTemplate),ay(s,l)})})}})};function Jw(n,i){return function(l,{forwardMotionProps:u}={forwardMotionProps:!1}){const d={..._d(l)?Fw:Kw,preloadedFeatures:n,useRender:Yw(u),createVisualElement:i,Component:l};return Sw(d)}}function vs(n,i,s){const l=n.getProps();return Nd(l,i,s!==void 0?s:l.custom,n)}const ry=new Set(["width","height","top","left","right","bottom",...Xi]);function Ww(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,hs(s))}function Ud(n,i){const s=vs(n,i);let{transitionEnd:l={},transition:u={},...f}=s||{};f={...f,...l};for(const d in f){const m=Xw(f[d]);Ww(n,d,m)}}function Iw(n){return!!(me(n)&&n.add)}function Nf(n,i){const s=n.getValue("willChange");if(Iw(s))return s.add(i)}function sy(n){return n.props[$v]}const ly=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,t6=1e-7,e6=12;function n6(n,i,s,l,u){let f,d,m=0;do d=i+(s-i)/2,f=ly(d,l,u)-n,f>0?s=d:i=d;while(Math.abs(f)>t6&&++m<e6);return d}function js(n,i,s,l){if(n===i&&s===l)return je;const u=f=>n6(f,0,1,n,s);return f=>f===0||f===1?f:ly(u(f),i,l)}const oy=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,uy=n=>i=>1-n(1-i),cy=js(.33,1.53,.69,.99),Hd=uy(cy),fy=oy(Hd),dy=n=>(n*=2)<1?.5*Hd(n):.5*(2-Math.pow(2,-10*(n-1))),Pd=n=>1-Math.sin(Math.acos(n)),hy=uy(Pd),my=oy(Pd),py=n=>/^0[^.\s]+$/u.test(n);function a6(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||py(n):!0}const es=n=>Math.round(n*1e5)/1e5,qd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function i6(n){return n==null}const r6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gd=(n,i)=>s=>!!(typeof s=="string"&&r6.test(s)&&s.startsWith(n)||i&&!i6(s)&&Object.prototype.hasOwnProperty.call(s,i)),gy=(n,i,s)=>l=>{if(typeof l!="string")return l;const[u,f,d,m]=l.match(qd);return{[n]:parseFloat(u),[i]:parseFloat(f),[s]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},s6=n=>Vn(0,255,n),hf={...Qi,transform:n=>Math.round(s6(n))},La={test:Gd("rgb","red"),parse:gy("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:l=1})=>"rgba("+hf.transform(n)+", "+hf.transform(i)+", "+hf.transform(s)+", "+es(gs.transform(l))+")"};function l6(n){let i="",s="",l="",u="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),i+=i,s+=s,l+=l,u+=u),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const Lf={test:Gd("#"),parse:l6,transform:La.transform},Di={test:Gd("hsl","hue"),parse:gy("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:l=1})=>"hsla("+Math.round(n)+", "+cn.transform(es(i))+", "+cn.transform(es(s))+", "+es(gs.transform(l))+")"},he={test:n=>La.test(n)||Lf.test(n)||Di.test(n),parse:n=>La.test(n)?La.parse(n):Di.test(n)?Di.parse(n):Lf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?La.transform(n):Di.transform(n)},o6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function u6(n){var i,s;return isNaN(n)&&typeof n=="string"&&(((i=n.match(qd))===null||i===void 0?void 0:i.length)||0)+(((s=n.match(o6))===null||s===void 0?void 0:s.length)||0)>0}const vy="number",yy="color",c6="var",f6="var(",Mg="${}",d6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ys(n){const i=n.toString(),s=[],l={color:[],number:[],var:[]},u=[];let f=0;const m=i.replace(d6,h=>(he.test(h)?(l.color.push(f),u.push(yy),s.push(he.parse(h))):h.startsWith(f6)?(l.var.push(f),u.push(c6),s.push(h)):(l.number.push(f),u.push(vy),s.push(parseFloat(h))),++f,Mg)).split(Mg);return{values:s,split:m,indexes:l,types:u}}function by(n){return ys(n).values}function xy(n){const{split:i,types:s}=ys(n),l=i.length;return u=>{let f="";for(let d=0;d<l;d++)if(f+=i[d],u[d]!==void 0){const m=s[d];m===vy?f+=es(u[d]):m===yy?f+=he.transform(u[d]):f+=u[d]}return f}}const h6=n=>typeof n=="number"?0:n;function m6(n){const i=by(n);return xy(n)(i.map(h6))}const ca={test:u6,parse:by,createTransformer:xy,getAnimatableNone:m6},p6=new Set(["brightness","contrast","saturate","opacity"]);function g6(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[l]=s.match(qd)||[];if(!l)return n;const u=s.replace(l,"");let f=p6.has(i)?1:0;return l!==s&&(f*=100),i+"("+f+u+")"}const v6=/\b([a-z-]*)\(.*?\)/gu,Uf={...ca,getAnimatableNone:n=>{const i=n.match(v6);return i?i.map(g6).join(" "):n}},y6={...Od,color:he,backgroundColor:he,outlineColor:he,fill:he,stroke:he,borderColor:he,borderTopColor:he,borderRightColor:he,borderBottomColor:he,borderLeftColor:he,filter:Uf,WebkitFilter:Uf},Sy=n=>y6[n];function wy(n,i){let s=Sy(n);return s!==Uf&&(s=ca),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const b6=new Set(["auto","none","0"]);function x6(n,i,s){let l=0,u;for(;l<n.length&&!u;){const f=n[l];typeof f=="string"&&!b6.has(f)&&ys(f).values.length&&(u=n[l]),l++}if(u&&s)for(const f of i)n[f]=wy(s,u)}const Ua=n=>n*180/Math.PI,Hf=n=>{const i=Ua(Math.atan2(n[1],n[0]));return Pf(i)},S6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Hf,rotateZ:Hf,skewX:n=>Ua(Math.atan(n[1])),skewY:n=>Ua(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Pf=n=>(n=n%360,n<0&&(n+=360),n),Rg=Hf,zg=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Dg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),w6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:zg,scaleY:Dg,scale:n=>(zg(n)+Dg(n))/2,rotateX:n=>Pf(Ua(Math.atan2(n[6],n[5]))),rotateY:n=>Pf(Ua(Math.atan2(-n[2],n[0]))),rotateZ:Rg,rotate:Rg,skewX:n=>Ua(Math.atan(n[4])),skewY:n=>Ua(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Og(n){return n.includes("scale")?1:0}function qf(n,i){if(!n||n==="none")return Og(i);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(s)l=w6,u=s;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=S6,u=m}if(!u)return Og(i);const f=l[i],d=u[1].split(",").map(T6);return typeof f=="function"?f(d):d[f]}const E6=(n,i)=>{const{transform:s="none"}=getComputedStyle(n);return qf(s,i)};function T6(n){return parseFloat(n.trim())}const jg=n=>n===Qi||n===st,A6=new Set(["x","y","z"]),C6=Xi.filter(n=>!A6.has(n));function M6(n){const i=[];return C6.forEach(s=>{const l=n.getValue(s);l!==void 0&&(i.push([s,l.get()]),l.set(s.startsWith("scale")?1:0))}),i}const Pi={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>qf(i,"x"),y:(n,{transform:i})=>qf(i,"y")};Pi.translateX=Pi.x;Pi.translateY=Pi.y;const qa=new Set;let Gf=!1,Yf=!1;function Ey(){if(Yf){const n=Array.from(qa).filter(l=>l.needsMeasurement),i=new Set(n.map(l=>l.element)),s=new Map;i.forEach(l=>{const u=M6(l);u.length&&(s.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const u=s.get(l);u&&u.forEach(([f,d])=>{var m;(m=l.getValue(f))===null||m===void 0||m.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Yf=!1,Gf=!1,qa.forEach(n=>n.complete()),qa.clear()}function Ty(){qa.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Yf=!0)})}function R6(){Ty(),Ey()}class Yd{constructor(i,s,l,u,f,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=l,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(qa.add(this),Gf||(Gf=!0,Ot.read(Ty),Ot.resolveKeyframes(Ey))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:l,motionValue:u}=this;for(let f=0;f<i.length;f++)if(i[f]===null)if(f===0){const d=u==null?void 0:u.get(),m=i[i.length-1];if(d!==void 0)i[0]=d;else if(l&&s){const h=l.readValue(s,m);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=m),u&&d===void 0&&u.set(i[0])}else i[f]=i[f-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),qa.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,qa.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ay=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),z6=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function D6(n){const i=z6.exec(n);if(!i)return[,];const[,s,l,u]=i;return[`--${s??l}`,u]}function Cy(n,i,s=1){const[l,u]=D6(n);if(!l)return;const f=window.getComputedStyle(i).getPropertyValue(l);if(f){const d=f.trim();return Ay(d)?parseFloat(d):d}return Dd(u)?Cy(u,i,s+1):u}const My=n=>i=>i.test(n),O6={test:n=>n==="auto",parse:n=>n},Ry=[Qi,st,cn,oa,zw,Rw,O6],Bg=n=>Ry.find(My(n));class zy extends Yd{constructor(i,s,l,u,f){super(i,s,l,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:l}=this;if(!s||!s.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let p=i[h];if(typeof p=="string"&&(p=p.trim(),Dd(p))){const v=Cy(p,s.current);v!==void 0&&(i[h]=v),h===i.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!ry.has(l)||i.length!==2)return;const[u,f]=i,d=Bg(u),m=Bg(f);if(d!==m)if(jg(d)&&jg(m))for(let h=0;h<i.length;h++){const p=i[h];typeof p=="string"&&(i[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,l=[];for(let u=0;u<i.length;u++)a6(i[u])&&l.push(u);l.length&&x6(i,l,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Pi[l](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const u=s[s.length-1];u!==void 0&&i.getValue(l,u).jump(u,!1)}measureEndState(){var i;const{element:s,name:l,unresolvedKeyframes:u}=this;if(!s||!s.current)return;const f=s.getValue(l);f&&f.jump(this.measuredOrigin,!1);const d=u.length-1,m=u[d];u[d]=Pi[l](s.measureViewportBox(),window.getComputedStyle(s.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,p])=>{s.getValue(h).set(p)}),this.resolveNoneKeyframes()}}const _g=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ca.test(n)||n==="0")&&!n.startsWith("url("));function j6(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function B6(n,i,s,l){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=_g(u,i),m=_g(f,i);return!d||!m?!1:j6(n)||(s==="spring"||wd(s))&&l}const _6=n=>n!==null;function Po(n,{repeat:i,repeatType:s="loop"},l){const u=n.filter(_6),f=i&&s!=="loop"&&i%2===1?0:u.length-1;return!f||l===void 0?u[f]:l}const V6=40;class Dy{constructor({autoplay:i=!0,delay:s=0,type:l="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=un.now(),this.options={autoplay:i,delay:s,type:l,repeat:u,repeatDelay:f,repeatType:d,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>V6?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&R6(),this._resolved}onKeyframesResolved(i,s){this.resolvedAt=un.now(),this.hasAttemptedResolve=!0;const{name:l,type:u,velocity:f,delay:d,onComplete:m,onUpdate:h,isGenerator:p}=this.options;if(!p&&!B6(i,l,u,f))if(d)this.options.duration=0;else{h&&h(Po(i,this.options,s)),m&&m(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,s);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:s,...v},this.onPostResolved())}onPostResolved(){}then(i,s){return this.currentFinishedPromise.then(i,s)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Vt=(n,i,s)=>n+(i-n)*s;function mf(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function k6({hue:n,saturation:i,lightness:s,alpha:l}){n/=360,i/=100,s/=100;let u=0,f=0,d=0;if(!i)u=f=d=s;else{const m=s<.5?s*(1+i):s+i-s*i,h=2*s-m;u=mf(h,m,n+1/3),f=mf(h,m,n),d=mf(h,m,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function Eo(n,i){return s=>s>0?i:n}const pf=(n,i,s)=>{const l=n*n,u=s*(i*i-l)+l;return u<0?0:Math.sqrt(u)},N6=[Lf,La,Di],L6=n=>N6.find(i=>i.test(n));function Vg(n){const i=L6(n);if(!i)return!1;let s=i.parse(n);return i===Di&&(s=k6(s)),s}const kg=(n,i)=>{const s=Vg(n),l=Vg(i);if(!s||!l)return Eo(n,i);const u={...s};return f=>(u.red=pf(s.red,l.red,f),u.green=pf(s.green,l.green,f),u.blue=pf(s.blue,l.blue,f),u.alpha=Vt(s.alpha,l.alpha,f),La.transform(u))},U6=(n,i)=>s=>i(n(s)),Bs=(...n)=>n.reduce(U6),$f=new Set(["none","hidden"]);function H6(n,i){return $f.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function P6(n,i){return s=>Vt(n,i,s)}function $d(n){return typeof n=="number"?P6:typeof n=="string"?Dd(n)?Eo:he.test(n)?kg:Y6:Array.isArray(n)?Oy:typeof n=="object"?he.test(n)?kg:q6:Eo}function Oy(n,i){const s=[...n],l=s.length,u=n.map((f,d)=>$d(f)(f,i[d]));return f=>{for(let d=0;d<l;d++)s[d]=u[d](f);return s}}function q6(n,i){const s={...n,...i},l={};for(const u in s)n[u]!==void 0&&i[u]!==void 0&&(l[u]=$d(n[u])(n[u],i[u]));return u=>{for(const f in l)s[f]=l[f](u);return s}}function G6(n,i){var s;const l=[],u={color:0,var:0,number:0};for(let f=0;f<i.values.length;f++){const d=i.types[f],m=n.indexes[d][u[d]],h=(s=n.values[m])!==null&&s!==void 0?s:0;l[f]=h,u[d]++}return l}const Y6=(n,i)=>{const s=ca.createTransformer(i),l=ys(n),u=ys(i);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?$f.has(n)&&!u.values.length||$f.has(i)&&!l.values.length?H6(n,i):Bs(Oy(G6(l,u),u.values),s):Eo(n,i)};function jy(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?Vt(n,i,s):$d(n)(n,i)}const $6=5;function By(n,i,s){const l=Math.max(i-$6,0);return Bv(s-n(l),i-l)}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ng=.001;function X6({duration:n=Ht.duration,bounce:i=Ht.bounce,velocity:s=Ht.velocity,mass:l=Ht.mass}){let u,f,d=1-i;d=Vn(Ht.minDamping,Ht.maxDamping,d),n=Vn(Ht.minDuration,Ht.maxDuration,Bn(n)),d<1?(u=p=>{const v=p*d,b=v*n,x=v-s,E=Xf(p,d),S=Math.exp(-b);return Ng-x/E*S},f=p=>{const b=p*d*n,x=b*s+s,E=Math.pow(d,2)*Math.pow(p,2)*n,S=Math.exp(-b),M=Xf(Math.pow(p,2),d);return(-u(p)+Ng>0?-1:1)*((x-E)*S)/M}):(u=p=>{const v=Math.exp(-p*n),b=(p-s)*n+1;return-.001+v*b},f=p=>{const v=Math.exp(-p*n),b=(s-p)*(n*n);return v*b});const m=5/n,h=Z6(u,f,m);if(n=jn(n),isNaN(h))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:n};{const p=Math.pow(h,2)*l;return{stiffness:p,damping:d*2*Math.sqrt(l*p),duration:n}}}const Q6=12;function Z6(n,i,s){let l=s;for(let u=1;u<Q6;u++)l=l-n(l)/i(l);return l}function Xf(n,i){return n*Math.sqrt(1-i*i)}const K6=["duration","bounce"],F6=["stiffness","damping","mass"];function Lg(n,i){return i.some(s=>n[s]!==void 0)}function J6(n){let i={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...n};if(!Lg(n,F6)&&Lg(n,K6))if(n.visualDuration){const s=n.visualDuration,l=2*Math.PI/(s*1.2),u=l*l,f=2*Vn(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:Ht.mass,stiffness:u,damping:f}}else{const s=X6(n);i={...i,...s,mass:Ht.mass},i.isResolvedFromDuration=!0}return i}function _y(n=Ht.visualDuration,i=Ht.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:l,restDelta:u}=s;const f=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],m={done:!1,value:f},{stiffness:h,damping:p,mass:v,duration:b,velocity:x,isResolvedFromDuration:E}=J6({...s,velocity:-Bn(s.velocity||0)}),S=x||0,M=p/(2*Math.sqrt(h*v)),D=d-f,C=Bn(Math.sqrt(h/v)),L=Math.abs(D)<5;l||(l=L?Ht.restSpeed.granular:Ht.restSpeed.default),u||(u=L?Ht.restDelta.granular:Ht.restDelta.default);let V;if(M<1){const N=Xf(C,M);V=Y=>{const Q=Math.exp(-M*C*Y);return d-Q*((S+M*C*D)/N*Math.sin(N*Y)+D*Math.cos(N*Y))}}else if(M===1)V=N=>d-Math.exp(-C*N)*(D+(S+C*D)*N);else{const N=C*Math.sqrt(M*M-1);V=Y=>{const Q=Math.exp(-M*C*Y),F=Math.min(N*Y,300);return d-Q*((S+M*C*D)*Math.sinh(F)+N*D*Math.cosh(F))/N}}const P={calculatedDuration:E&&b||null,next:N=>{const Y=V(N);if(E)m.done=N>=b;else{let Q=0;M<1&&(Q=N===0?jn(S):By(V,N,Y));const F=Math.abs(Q)<=l,X=Math.abs(d-Y)<=u;m.done=F&&X}return m.value=m.done?d:Y,m},toString:()=>{const N=Math.min(_v(P),_f),Y=Vv(Q=>P.next(N*Q).value,N,30);return N+"ms "+Y}};return P}function Ug({keyframes:n,velocity:i=0,power:s=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:m,max:h,restDelta:p=.5,restSpeed:v}){const b=n[0],x={done:!1,value:b},E=F=>m!==void 0&&F<m||h!==void 0&&F>h,S=F=>m===void 0?h:h===void 0||Math.abs(m-F)<Math.abs(h-F)?m:h;let M=s*i;const D=b+M,C=d===void 0?D:d(D);C!==D&&(M=C-b);const L=F=>-M*Math.exp(-F/l),V=F=>C+L(F),P=F=>{const X=L(F),tt=V(F);x.done=Math.abs(X)<=p,x.value=x.done?C:tt};let N,Y;const Q=F=>{E(x.value)&&(N=F,Y=_y({keyframes:[x.value,S(x.value)],velocity:By(V,F,x.value),damping:u,stiffness:f,restDelta:p,restSpeed:v}))};return Q(0),{calculatedDuration:null,next:F=>{let X=!1;return!Y&&N===void 0&&(X=!0,P(F),Q(F)),N!==void 0&&F>=N?Y.next(F-N):(!X&&P(F),x)}}}const W6=js(.42,0,1,1),I6=js(0,0,.58,1),Vy=js(.42,0,.58,1),t8=n=>Array.isArray(n)&&typeof n[0]!="number",e8={linear:je,easeIn:W6,easeInOut:Vy,easeOut:I6,circIn:Pd,circInOut:my,circOut:hy,backIn:Hd,backInOut:fy,backOut:cy,anticipate:dy},Hg=n=>{if(Ed(n)){jv(n.length===4);const[i,s,l,u]=n;return js(i,s,l,u)}else if(typeof n=="string")return e8[n];return n};function n8(n,i,s){const l=[],u=s||jy,f=n.length-1;for(let d=0;d<f;d++){let m=u(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||je:i;m=Bs(h,m)}l.push(m)}return l}function a8(n,i,{clamp:s=!0,ease:l,mixer:u}={}){const f=n.length;if(jv(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const m=n8(i,l,u),h=m.length,p=v=>{if(d&&v<n[0])return i[0];let b=0;if(h>1)for(;b<n.length-2&&!(v<n[b+1]);b++);const x=Ui(n[b],n[b+1],v);return m[b](x)};return s?v=>p(Vn(n[0],n[f-1],v)):p}function i8(n,i){const s=n[n.length-1];for(let l=1;l<=i;l++){const u=Ui(0,i,l);n.push(Vt(s,1,u))}}function r8(n){const i=[0];return i8(i,n.length-1),i}function s8(n,i){return n.map(s=>s*i)}function l8(n,i){return n.map(()=>i||Vy).splice(0,n.length-1)}function To({duration:n=300,keyframes:i,times:s,ease:l="easeInOut"}){const u=t8(l)?l.map(Hg):Hg(l),f={done:!1,value:i[0]},d=s8(s&&s.length===i.length?s:r8(i),n),m=a8(d,i,{ease:Array.isArray(u)?u:l8(i,u)});return{calculatedDuration:n,next:h=>(f.value=m(h),f.done=h>=n,f)}}const o8=n=>{const i=({timestamp:s})=>n(s);return{start:()=>Ot.update(i,!0),stop:()=>ua(i),now:()=>oe.isProcessing?oe.timestamp:un.now()}},u8={decay:Ug,inertia:Ug,tween:To,keyframes:To,spring:_y},c8=n=>n/100;class Xd extends Dy{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:s,motionValue:l,element:u,keyframes:f}=this.options,d=(u==null?void 0:u.KeyframeResolver)||Yd,m=(h,p)=>this.onKeyframesResolved(h,p);this.resolver=new d(f,m,s,l,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=this.options,m=wd(s)?s:u8[s]||To;let h,p;m!==To&&typeof i[0]!="number"&&(h=Bs(c8,jy(i[0],i[1])),i=[0,100]);const v=m({...this.options,keyframes:i});f==="mirror"&&(p=m({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=_v(v));const{calculatedDuration:b}=v,x=b+u,E=x*(l+1)-u;return{generator:v,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:x,totalDuration:E}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,s=!1){const{resolved:l}=this;if(!l){const{keyframes:F}=this.options;return{done:!0,value:F[F.length-1]}}const{finalKeyframe:u,generator:f,mirroredGenerator:d,mapPercentToKeyframes:m,keyframes:h,calculatedDuration:p,totalDuration:v,resolvedDuration:b}=l;if(this.startTime===null)return f.next(0);const{delay:x,repeat:E,repeatType:S,repeatDelay:M,onUpdate:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),s?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const C=this.currentTime-x*(this.speed>=0?1:-1),L=this.speed>=0?C<0:C>v;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let V=this.currentTime,P=f;if(E){const F=Math.min(this.currentTime,v)/b;let X=Math.floor(F),tt=F%1;!tt&&F>=1&&(tt=1),tt===1&&X--,X=Math.min(X,E+1),!!(X%2)&&(S==="reverse"?(tt=1-tt,M&&(tt-=M/b)):S==="mirror"&&(P=d)),V=Vn(0,1,tt)*b}const N=L?{done:!1,value:h[0]}:P.next(V);m&&(N.value=m(N.value));let{done:Y}=N;!L&&p!==null&&(Y=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return Q&&u!==void 0&&(N.value=Po(h,this.options,u)),D&&D(N.value),Q&&this.finish(),N}get duration(){const{resolved:i}=this;return i?Bn(i.calculatedDuration):0}get time(){return Bn(this.currentTime)}set time(i){i=jn(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=Bn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=o8,onPlay:s,startTime:l}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),s&&s();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=l??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const f8=new Set(["opacity","clipPath","filter","transform"]);function d8(n,i,s,{delay:l=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:m="easeInOut",times:h}={}){const p={[i]:s};h&&(p.offset=h);const v=Nv(m,u);return Array.isArray(v)&&(p.easing=v),n.animate(p,{delay:l,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"})}const h8=bd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ao=10,m8=2e4;function p8(n){return wd(n.type)||n.type==="spring"||!kv(n.ease)}function g8(n,i){const s=new Xd({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let l={done:!1,value:n[0]};const u=[];let f=0;for(;!l.done&&f<m8;)l=s.sample(f),u.push(l.value),f+=Ao;return{times:void 0,keyframes:u,duration:f-Ao,ease:"linear"}}const ky={anticipate:dy,backInOut:fy,circInOut:my};function v8(n){return n in ky}class Pg extends Dy{constructor(i){super(i);const{name:s,motionValue:l,element:u,keyframes:f}=this.options;this.resolver=new zy(f,(d,m)=>this.onKeyframesResolved(d,m),s,l,u),this.resolver.scheduleResolve()}initPlayback(i,s){let{duration:l=300,times:u,ease:f,type:d,motionValue:m,name:h,startTime:p}=this.options;if(!m.owner||!m.owner.current)return!1;if(typeof f=="string"&&So()&&v8(f)&&(f=ky[f]),p8(this.options)){const{onComplete:b,onUpdate:x,motionValue:E,element:S,...M}=this.options,D=g8(i,M);i=D.keyframes,i.length===1&&(i[1]=i[0]),l=D.duration,u=D.times,f=D.ease,d="keyframes"}const v=d8(m.owner.current,h,i,{...this.options,duration:l,times:u,ease:f});return v.startTime=p??this.calcStartTime(),this.pendingTimeline?(mg(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:b}=this.options;m.set(Po(i,this.options,s)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:l,times:u,type:d,ease:f,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:s}=i;return Bn(s)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:s}=i;return Bn(s.currentTime||0)}set time(i){const{resolved:s}=this;if(!s)return;const{animation:l}=s;l.currentTime=jn(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:s}=i;return s.playbackRate}set speed(i){const{resolved:s}=this;if(!s)return;const{animation:l}=s;l.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:s}=i;return s.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:s}=i;return s.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:s}=this;if(!s)return je;const{animation:l}=s;mg(l,i)}return je}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.playState==="finished"&&this.updateFinishedPromise(),s.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:s,keyframes:l,duration:u,type:f,ease:d,times:m}=i;if(s.playState==="idle"||s.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:v,onComplete:b,element:x,...E}=this.options,S=new Xd({...E,keyframes:l,duration:u,type:f,ease:d,times:m,isGenerator:!0}),M=jn(this.time);p.setWithVelocity(S.sample(M-Ao).value,S.sample(M).value,Ao)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:s,name:l,repeatDelay:u,repeatType:f,damping:d,type:m}=i;if(!s||!s.owner||!(s.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=s.owner.getProps();return h8()&&l&&f8.has(l)&&!h&&!p&&!u&&f!=="mirror"&&d!==0&&m!=="inertia"}}const y8={type:"spring",stiffness:500,damping:25,restSpeed:10},b8=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),x8={type:"keyframes",duration:.8},S8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w8=(n,{keyframes:i})=>i.length>2?x8:Ga.has(n)?n.startsWith("scale")?b8(i[1]):y8:S8;function E8({when:n,delay:i,delayChildren:s,staggerChildren:l,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:m,from:h,elapsed:p,...v}){return!!Object.keys(v).length}const Qd=(n,i,s,l={},u,f)=>d=>{const m=Sd(l,n)||{},h=m.delay||l.delay||0;let{elapsed:p=0}=l;p=p-jn(h);let v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...m,delay:-p,onUpdate:x=>{i.set(x),m.onUpdate&&m.onUpdate(x)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:i,element:f?void 0:u};E8(m)||(v={...v,...w8(n,v)}),v.duration&&(v.duration=jn(v.duration)),v.repeatDelay&&(v.repeatDelay=jn(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(b=!0)),v.allowFlatten=!m.type&&!m.ease,b&&!f&&i.get()!==void 0){const x=Po(v.keyframes,m);if(x!==void 0)return Ot.update(()=>{v.onUpdate(x),v.onComplete()}),new QS([])}return!f&&Pg.supports(v)?new Pg(v):new Xd(v)};function T8({protectedKeys:n,needsAnimating:i},s){const l=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,l}function Ny(n,i,{delay:s=0,transitionOverride:l,type:u}={}){var f;let{transition:d=n.getDefaultTransition(),transitionEnd:m,...h}=i;l&&(d=l);const p=[],v=u&&n.animationState&&n.animationState.getState()[u];for(const b in h){const x=n.getValue(b,(f=n.latestValues[b])!==null&&f!==void 0?f:null),E=h[b];if(E===void 0||v&&T8(v,b))continue;const S={delay:s,...Sd(d||{},b)};let M=!1;if(window.MotionHandoffAnimation){const C=sy(n);if(C){const L=window.MotionHandoffAnimation(C,b,Ot);L!==null&&(S.startTime=L,M=!0)}}Nf(n,b),x.start(Qd(b,x,E,n.shouldReduceMotion&&ry.has(b)?{type:!1}:S,n,M));const D=x.animation;D&&p.push(D)}return m&&Promise.all(p).then(()=>{Ot.update(()=>{m&&Ud(n,m)})}),p}function Qf(n,i,s={}){var l;const u=vs(n,i,s.type==="exit"?(l=n.presenceContext)===null||l===void 0?void 0:l.custom:void 0);let{transition:f=n.getDefaultTransition()||{}}=u||{};s.transitionOverride&&(f=s.transitionOverride);const d=u?()=>Promise.all(Ny(n,u,s)):()=>Promise.resolve(),m=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:v=0,staggerChildren:b,staggerDirection:x}=f;return A8(n,i,v+p,b,x,s)}:()=>Promise.resolve(),{when:h}=f;if(h){const[p,v]=h==="beforeChildren"?[d,m]:[m,d];return p().then(()=>v())}else return Promise.all([d(),m(s.delay)])}function A8(n,i,s=0,l=0,u=1,f){const d=[],m=(n.variantChildren.size-1)*l,h=u===1?(p=0)=>p*l:(p=0)=>m-p*l;return Array.from(n.variantChildren).sort(C8).forEach((p,v)=>{p.notify("AnimationStart",i),d.push(Qf(p,i,{...f,delay:s+h(v)}).then(()=>p.notify("AnimationComplete",i)))}),Promise.all(d)}function C8(n,i){return n.sortNodePosition(i)}function Ly(n,i,s={}){n.notify("AnimationStart",i);let l;if(Array.isArray(i)){const u=i.map(f=>Qf(n,f,s));l=Promise.all(u)}else if(typeof i=="string")l=Qf(n,i,s);else{const u=typeof i=="function"?vs(n,i,s.custom):i;l=Promise.all(Ny(n,u,s))}return l.then(()=>{n.notify("AnimationComplete",i)})}function Uy(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let l=0;l<s;l++)if(i[l]!==n[l])return!1;return!0}const M8=Md.length;function Hy(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Hy(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<M8;s++){const l=Md[s],u=n.props[l];(ms(u)||u===!1)&&(i[l]=u)}return i}const R8=[...Cd].reverse(),z8=Cd.length;function D8(n){return i=>Promise.all(i.map(({animation:s,options:l})=>Ly(n,s,l)))}function O8(n){let i=D8(n),s=qg(),l=!0;const u=h=>(p,v)=>{var b;const x=vs(n,v,h==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(x){const{transition:E,transitionEnd:S,...M}=x;p={...p,...M,...S}}return p};function f(h){i=h(n)}function d(h){const{props:p}=n,v=Hy(n.parent)||{},b=[],x=new Set;let E={},S=1/0;for(let D=0;D<z8;D++){const C=R8[D],L=s[C],V=p[C]!==void 0?p[C]:v[C],P=ms(V),N=C===h?L.isActive:null;N===!1&&(S=D);let Y=V===v[C]&&V!==p[C]&&P;if(Y&&l&&n.manuallyAnimateOnMount&&(Y=!1),L.protectedKeys={...E},!L.isActive&&N===null||!V&&!L.prevProp||Uo(V)||typeof V=="boolean")continue;const Q=j8(L.prevProp,V);let F=Q||C===h&&L.isActive&&!Y&&P||D>S&&P,X=!1;const tt=Array.isArray(V)?V:[V];let Rt=tt.reduce(u(C),{});N===!1&&(Rt={});const{prevResolvedValues:ie={}}=L,vt={...ie,...Rt},Gt=J=>{F=!0,x.has(J)&&(X=!0,x.delete(J)),L.needsAnimating[J]=!0;const I=n.getValue(J);I&&(I.liveStyle=!1)};for(const J in vt){const I=Rt[J],ct=ie[J];if(E.hasOwnProperty(J))continue;let R=!1;kf(I)&&kf(ct)?R=!Uy(I,ct):R=I!==ct,R?I!=null?Gt(J):x.add(J):I!==void 0&&x.has(J)?Gt(J):L.protectedKeys[J]=!0}L.prevProp=V,L.prevResolvedValues=Rt,L.isActive&&(E={...E,...Rt}),l&&n.blockInitialAnimation&&(F=!1),F&&(!(Y&&Q)||X)&&b.push(...tt.map(J=>({animation:J,options:{type:C}})))}if(x.size){const D={};if(typeof p.initial!="boolean"){const C=vs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);C&&C.transition&&(D.transition=C.transition)}x.forEach(C=>{const L=n.getBaseTarget(C),V=n.getValue(C);V&&(V.liveStyle=!0),D[C]=L??null}),b.push({animation:D})}let M=!!b.length;return l&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(M=!1),l=!1,M?i(b):Promise.resolve()}function m(h,p){var v;if(s[h].isActive===p)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(x=>{var E;return(E=x.animationState)===null||E===void 0?void 0:E.setActive(h,p)}),s[h].isActive=p;const b=d(h);for(const x in s)s[x].protectedKeys={};return b}return{animateChanges:d,setActive:m,setAnimateFunction:f,getState:()=>s,reset:()=>{s=qg(),l=!0}}}function j8(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Uy(i,n):!1}function Va(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qg(){return{animate:Va(!0),whileInView:Va(),whileHover:Va(),whileTap:Va(),whileDrag:Va(),whileFocus:Va(),exit:Va()}}class da{constructor(i){this.isMounted=!1,this.node=i}update(){}}class B8 extends da{constructor(i){super(i),i.animationState||(i.animationState=O8(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Uo(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let _8=0;class V8 extends da{constructor(){super(...arguments),this.id=_8++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;const u=this.node.animationState.setActive("exit",!i);s&&!i&&u.then(()=>{s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const k8={animation:{Feature:B8},exit:{Feature:V8}};function bs(n,i,s,l={passive:!0}){return n.addEventListener(i,s,l),()=>n.removeEventListener(i,s)}function _s(n){return{point:{x:n.pageX,y:n.pageY}}}const N8=n=>i=>Ad(i)&&n(i,_s(i));function ns(n,i,s,l){return bs(n,i,N8(s),l)}function Py({top:n,left:i,right:s,bottom:l}){return{x:{min:i,max:s},y:{min:n,max:l}}}function L8({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function U8(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),l=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:l.y,right:l.x}}const qy=1e-4,H8=1-qy,P8=1+qy,Gy=.01,q8=0-Gy,G8=0+Gy;function ye(n){return n.max-n.min}function Y8(n,i,s){return Math.abs(n-i)<=s}function Gg(n,i,s,l=.5){n.origin=l,n.originPoint=Vt(i.min,i.max,n.origin),n.scale=ye(s)/ye(i),n.translate=Vt(s.min,s.max,n.origin)-n.originPoint,(n.scale>=H8&&n.scale<=P8||isNaN(n.scale))&&(n.scale=1),(n.translate>=q8&&n.translate<=G8||isNaN(n.translate))&&(n.translate=0)}function as(n,i,s,l){Gg(n.x,i.x,s.x,l?l.originX:void 0),Gg(n.y,i.y,s.y,l?l.originY:void 0)}function Yg(n,i,s){n.min=s.min+i.min,n.max=n.min+ye(i)}function $8(n,i,s){Yg(n.x,i.x,s.x),Yg(n.y,i.y,s.y)}function $g(n,i,s){n.min=i.min-s.min,n.max=n.min+ye(i)}function is(n,i,s){$g(n.x,i.x,s.x),$g(n.y,i.y,s.y)}const Xg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oi=()=>({x:Xg(),y:Xg()}),Qg=()=>({min:0,max:0}),qt=()=>({x:Qg(),y:Qg()});function Xe(n){return[n("x"),n("y")]}function gf(n){return n===void 0||n===1}function Zf({scale:n,scaleX:i,scaleY:s}){return!gf(n)||!gf(i)||!gf(s)}function ka(n){return Zf(n)||Yy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Yy(n){return Zg(n.x)||Zg(n.y)}function Zg(n){return n&&n!=="0%"}function Co(n,i,s){const l=n-s,u=i*l;return s+u}function Kg(n,i,s,l,u){return u!==void 0&&(n=Co(n,u,l)),Co(n,s,l)+i}function Kf(n,i=0,s=1,l,u){n.min=Kg(n.min,i,s,l,u),n.max=Kg(n.max,i,s,l,u)}function $y(n,{x:i,y:s}){Kf(n.x,i.translate,i.scale,i.originPoint),Kf(n.y,s.translate,s.scale,s.originPoint)}const Fg=.999999999999,Jg=1.0000000000001;function X8(n,i,s,l=!1){const u=s.length;if(!u)return;i.x=i.y=1;let f,d;for(let m=0;m<u;m++){f=s[m],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Bi(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,$y(n,d)),l&&ka(f.latestValues)&&Bi(n,f.latestValues))}i.x<Jg&&i.x>Fg&&(i.x=1),i.y<Jg&&i.y>Fg&&(i.y=1)}function ji(n,i){n.min=n.min+i,n.max=n.max+i}function Wg(n,i,s,l,u=.5){const f=Vt(n.min,n.max,u);Kf(n,i,s,f,l)}function Bi(n,i){Wg(n.x,i.x,i.scaleX,i.scale,i.originX),Wg(n.y,i.y,i.scaleY,i.scale,i.originY)}function Xy(n,i){return Py(U8(n.getBoundingClientRect(),i))}function Q8(n,i,s){const l=Xy(n,s),{scroll:u}=i;return u&&(ji(l.x,u.offset.x),ji(l.y,u.offset.y)),l}const Qy=({current:n})=>n?n.ownerDocument.defaultView:null,Ig=(n,i)=>Math.abs(n-i);function Z8(n,i){const s=Ig(n.x,i.x),l=Ig(n.y,i.y);return Math.sqrt(s**2+l**2)}class Zy{constructor(i,s,{transformPagePoint:l,contextWindow:u,dragSnapToOrigin:f=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=yf(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,E=Z8(b.offset,{x:0,y:0})>=3;if(!x&&!E)return;const{point:S}=b,{timestamp:M}=oe;this.history.push({...S,timestamp:M});const{onStart:D,onMove:C}=this.handlers;x||(D&&D(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=vf(x,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();const{onEnd:E,onSessionEnd:S,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=yf(b.type==="pointercancel"?this.lastMoveEventInfo:vf(x,this.transformPagePoint),this.history);this.startEvent&&E&&E(b,D),S&&S(b,D)},!Ad(i))return;this.dragSnapToOrigin=f,this.handlers=s,this.transformPagePoint=l,this.contextWindow=u||window;const d=_s(i),m=vf(d,this.transformPagePoint),{point:h}=m,{timestamp:p}=oe;this.history=[{...h,timestamp:p}];const{onSessionStart:v}=s;v&&v(i,yf(m,this.history)),this.removeListeners=Bs(ns(this.contextWindow,"pointermove",this.handlePointerMove),ns(this.contextWindow,"pointerup",this.handlePointerUp),ns(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),ua(this.updatePoint)}}function vf(n,i){return i?{point:i(n.point)}:n}function t1(n,i){return{x:n.x-i.x,y:n.y-i.y}}function yf({point:n},i){return{point:n,delta:t1(n,Ky(i)),offset:t1(n,K8(i)),velocity:F8(i,.1)}}function K8(n){return n[0]}function Ky(n){return n[n.length-1]}function F8(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,l=null;const u=Ky(n);for(;s>=0&&(l=n[s],!(u.timestamp-l.timestamp>jn(i)));)s--;if(!l)return{x:0,y:0};const f=Bn(u.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-l.x)/f,y:(u.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function J8(n,{min:i,max:s},l){return i!==void 0&&n<i?n=l?Vt(i,n,l.min):Math.max(n,i):s!==void 0&&n>s&&(n=l?Vt(s,n,l.max):Math.min(n,s)),n}function e1(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function W8(n,{top:i,left:s,bottom:l,right:u}){return{x:e1(n.x,s,u),y:e1(n.y,i,l)}}function n1(n,i){let s=i.min-n.min,l=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,l]=[l,s]),{min:s,max:l}}function I8(n,i){return{x:n1(n.x,i.x),y:n1(n.y,i.y)}}function tE(n,i){let s=.5;const l=ye(n),u=ye(i);return u>l?s=Ui(i.min,i.max-l,n.min):l>u&&(s=Ui(n.min,n.max-u,i.min)),Vn(0,1,s)}function eE(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const Ff=.35;function nE(n=Ff){return n===!1?n=0:n===!0&&(n=Ff),{x:a1(n,"left","right"),y:a1(n,"top","bottom")}}function a1(n,i,s){return{min:i1(n,i),max:i1(n,s)}}function i1(n,i){return typeof n=="number"?n:n[i]||0}const aE=new WeakMap;class iE{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=qt(),this.visualElement=i}start(i,{snapToCursor:s=!1}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(_s(v).point)},f=(v,b)=>{const{drag:x,dragPropagation:E,onDragStart:S}=this.getProps();if(x&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=IS(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(D=>{let C=this.getAxisMotionValue(D).get()||0;if(cn.test(C)){const{projection:L}=this.visualElement;if(L&&L.layout){const V=L.layout.layoutBox[D];V&&(C=ye(V)*(parseFloat(C)/100))}}this.originPoint[D]=C}),S&&Ot.postRender(()=>S(v,b)),Nf(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},d=(v,b)=>{const{dragPropagation:x,dragDirectionLock:E,onDirectionLock:S,onDrag:M}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:D}=b;if(E&&this.currentDirection===null){this.currentDirection=rE(D),this.currentDirection!==null&&S&&S(this.currentDirection);return}this.updateAxis("x",b.point,D),this.updateAxis("y",b.point,D),this.visualElement.render(),M&&M(v,b)},m=(v,b)=>this.stop(v,b),h=()=>Xe(v=>{var b;return this.getAnimationState(v)==="paused"&&((b=this.getAxisMotionValue(v).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new Zy(i,{onSessionStart:u,onStart:f,onMove:d,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:Qy(this.visualElement)})}stop(i,s){const l=this.isDragging;if(this.cancel(),!l)return;const{velocity:u}=s;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ot.postRender(()=>f(i,s))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(i,s,l){const{drag:u}=this.getProps();if(!l||!eo(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(d=J8(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var i;const{dragConstraints:s,dragElastic:l}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,f=this.constraints;s&&zi(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&u?this.constraints=W8(u.layoutBox,s):this.constraints=!1,this.elastic=nE(l),f!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&Xe(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=eE(u.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!zi(i))return!1;const l=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=Q8(l,u.root,this.visualElement.getTransformPagePoint());let d=I8(u.layout.layoutBox,f);if(s){const m=s(L8(d));this.hasMutatedConstraints=!!m,m&&(d=Py(m))}return d}startAnimation(i){const{drag:s,dragMomentum:l,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},p=Xe(v=>{if(!eo(v,s,this.currentDirection))return;let b=h&&h[v]||{};d&&(b={min:0,max:0});const x=u?200:1e6,E=u?40:1e7,S={type:"inertia",velocity:l?i[v]:0,bounceStiffness:x,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(v,S)});return Promise.all(p).then(m)}startAxisValueAnimation(i,s){const l=this.getAxisMotionValue(i);return Nf(this.visualElement,i),l.start(Qd(i,l,0,s,this.visualElement,!1))}stopAnimation(){Xe(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Xe(i=>{var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.pause()})}getAnimationState(i){var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.state}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,l=this.visualElement.getProps(),u=l[s];return u||this.visualElement.getValue(i,(l.initial?l.initial[i]:void 0)||0)}snapToCursor(i){Xe(s=>{const{drag:l}=this.getProps();if(!eo(s,l,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(s);if(u&&u.layout){const{min:d,max:m}=u.layout.layoutBox[s];f.set(i[s]-Vt(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:l}=this.visualElement;if(!zi(s)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xe(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const h=m.get();u[d]=tE({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.resolveConstraints(),Xe(d=>{if(!eo(d,i,null))return;const m=this.getAxisMotionValue(d),{min:h,max:p}=this.constraints[d];m.set(Vt(h,p,u[d]))})}addListeners(){if(!this.visualElement.current)return;aE.set(this.visualElement,this);const i=this.visualElement.current,s=ns(i,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps();p&&v&&this.start(h)}),l=()=>{const{dragConstraints:h}=this.getProps();zi(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",l);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Ot.read(l);const d=bs(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Xe(v=>{const b=this.getAxisMotionValue(v);b&&(this.originPoint[v]+=h[v].translate,b.set(b.get()+h[v].translate))}),this.visualElement.render())});return()=>{d(),s(),f(),m&&m()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=Ff,dragMomentum:m=!0}=i;return{...i,drag:s,dragDirectionLock:l,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:m}}}function eo(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function rE(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class sE extends da{constructor(i){super(i),this.removeGroupControls=je,this.removeListeners=je,this.controls=new iE(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||je}unmount(){this.removeGroupControls(),this.removeListeners()}}const r1=n=>(i,s)=>{n&&Ot.postRender(()=>n(i,s))};class lE extends da{constructor(){super(...arguments),this.removePointerDownListener=je}onPointerDown(i){this.session=new Zy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Qy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:r1(i),onStart:r1(s),onMove:l,onEnd:(f,d)=>{delete this.session,u&&Ot.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=ns(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ho={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function s1(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Zr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const s=s1(n,i.target.x),l=s1(n,i.target.y);return`${s}% ${l}%`}},oE={correct:(n,{treeScale:i,projectionDelta:s})=>{const l=n,u=ca.parse(n);if(u.length>5)return l;const f=ca.createTransformer(n),d=typeof u[0]!="number"?1:0,m=s.x.scale*i.x,h=s.y.scale*i.y;u[0+d]/=m,u[1+d]/=h;const p=Vt(m,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=p),typeof u[3+d]=="number"&&(u[3+d]/=p),f(u)}};class uE extends A.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:l,layoutId:u}=this.props,{projection:f}=i;Mw(cE),f&&(s.group&&s.group.add(f),l&&l.register&&u&&l.register(f),f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),ho.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:l,drag:u,isPresent:f}=this.props,d=l.projection;return d&&(d.isPresent=f,u||i.layoutDependency!==s||s===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||Ot.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Td.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:l}=this.props,{projection:u}=i;u&&(u.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Fy(n){const[i,s]=Dv(),l=A.useContext(hd);return w.jsx(uE,{...n,layoutGroup:l,switchLayoutGroup:A.useContext(Xv),isPresent:i,safeToRemove:s})}const cE={borderRadius:{...Zr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zr,borderTopRightRadius:Zr,borderBottomLeftRadius:Zr,borderBottomRightRadius:Zr,boxShadow:oE};function fE(n,i,s){const l=me(n)?n:hs(n);return l.start(Qd("",l,i,s)),l.animation}function dE(n){return n instanceof SVGElement&&n.tagName!=="svg"}const hE=(n,i)=>n.depth-i.depth;class mE{constructor(){this.children=[],this.isDirty=!1}add(i){vd(this.children,i),this.isDirty=!0}remove(i){yd(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(hE),this.isDirty=!1,this.children.forEach(i)}}function pE(n,i){const s=un.now(),l=({timestamp:u})=>{const f=u-s;f>=i&&(ua(l),n(f-i))};return Ot.read(l,!0),()=>ua(l)}const Jy=["TopLeft","TopRight","BottomLeft","BottomRight"],gE=Jy.length,l1=n=>typeof n=="string"?parseFloat(n):n,o1=n=>typeof n=="number"||st.test(n);function vE(n,i,s,l,u,f){u?(n.opacity=Vt(0,s.opacity!==void 0?s.opacity:1,yE(l)),n.opacityExit=Vt(i.opacity!==void 0?i.opacity:1,0,bE(l))):f&&(n.opacity=Vt(i.opacity!==void 0?i.opacity:1,s.opacity!==void 0?s.opacity:1,l));for(let d=0;d<gE;d++){const m=`border${Jy[d]}Radius`;let h=u1(i,m),p=u1(s,m);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||o1(h)===o1(p)?(n[m]=Math.max(Vt(l1(h),l1(p),l),0),(cn.test(p)||cn.test(h))&&(n[m]+="%")):n[m]=p}(i.rotate||s.rotate)&&(n.rotate=Vt(i.rotate||0,s.rotate||0,l))}function u1(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const yE=Wy(0,.5,hy),bE=Wy(.5,.95,je);function Wy(n,i,s){return l=>l<n?0:l>i?1:s(Ui(n,i,l))}function c1(n,i){n.min=i.min,n.max=i.max}function $e(n,i){c1(n.x,i.x),c1(n.y,i.y)}function f1(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function d1(n,i,s,l,u){return n-=i,n=Co(n,1/s,l),u!==void 0&&(n=Co(n,1/u,l)),n}function xE(n,i=0,s=1,l=.5,u,f=n,d=n){if(cn.test(i)&&(i=parseFloat(i),i=Vt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let m=Vt(f.min,f.max,l);n===f&&(m-=i),n.min=d1(n.min,i,s,m,u),n.max=d1(n.max,i,s,m,u)}function h1(n,i,[s,l,u],f,d){xE(n,i[s],i[l],i[u],i.scale,f,d)}const SE=["x","scaleX","originX"],wE=["y","scaleY","originY"];function m1(n,i,s,l){h1(n.x,i,SE,s?s.x:void 0,l?l.x:void 0),h1(n.y,i,wE,s?s.y:void 0,l?l.y:void 0)}function p1(n){return n.translate===0&&n.scale===1}function Iy(n){return p1(n.x)&&p1(n.y)}function g1(n,i){return n.min===i.min&&n.max===i.max}function EE(n,i){return g1(n.x,i.x)&&g1(n.y,i.y)}function v1(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function t2(n,i){return v1(n.x,i.x)&&v1(n.y,i.y)}function y1(n){return ye(n.x)/ye(n.y)}function b1(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class TE{constructor(){this.members=[]}add(i){vd(this.members,i),i.scheduleRender()}remove(i){if(yd(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(u=>i===u);if(s===0)return!1;let l;for(let u=s;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){l=f;break}}return l?(this.promote(l),!0):!1}promote(i,s){const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.instance&&l.scheduleRender(),i.scheduleRender(),i.resumeFrom=l,s&&(i.resumeFrom.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:l}=i;s.onExitComplete&&s.onExitComplete(),l&&l.options.onExitComplete&&l.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function AE(n,i,s){let l="";const u=n.x.translate/i.x,f=n.y.translate/i.y,d=(s==null?void 0:s.z)||0;if((u||f||d)&&(l=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:p,rotate:v,rotateX:b,rotateY:x,skewX:E,skewY:S}=s;p&&(l=`perspective(${p}px) ${l}`),v&&(l+=`rotate(${v}deg) `),b&&(l+=`rotateX(${b}deg) `),x&&(l+=`rotateY(${x}deg) `),E&&(l+=`skewX(${E}deg) `),S&&(l+=`skewY(${S}deg) `)}const m=n.x.scale*i.x,h=n.y.scale*i.y;return(m!==1||h!==1)&&(l+=`scale(${m}, ${h})`),l||"none"}const bf=["","X","Y","Z"],CE={visibility:"hidden"},x1=1e3;let ME=0;function xf(n,i,s,l){const{latestValues:u}=i;u[n]&&(s[n]=u[n],i.setStaticValue(n,0),l&&(l[n]=0))}function e2(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=sy(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",Ot,!(u||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&e2(l)}function n2({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(d={},m=i==null?void 0:i()){this.id=ME++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(DE),this.nodes.forEach(VE),this.nodes.forEach(kE),this.nodes.forEach(OE)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new mE)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new xd),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const h=this.eventHandlers.get(d);h&&h.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,m=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=dE(d),this.instance=d;const{layoutId:h,layout:p,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),m&&(p||h)&&(this.isLayoutDirty=!0),n){let b;const x=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=pE(x,250),ho.hasAnimatedSinceResize&&(ho.hasAnimatedSinceResize=!1,this.nodes.forEach(w1))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||p)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:E,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||v.getDefaultTransition()||PE,{onLayoutAnimationStart:D,onLayoutAnimationComplete:C}=v.getProps(),L=!this.targetLayout||!t2(this.targetLayout,S),V=!x&&E;if(this.options.layoutRoot||this.resumeFrom||V||x&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,V);const P={...Sd(M,"layout"),onPlay:D,onComplete:C};(v.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P)}else x||w1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ua(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(NE),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&e2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:m,layout:h}=this.options;if(m===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(S1);return}this.isUpdating||this.nodes.forEach(BE),this.isUpdating=!1,this.nodes.forEach(_E),this.nodes.forEach(RE),this.nodes.forEach(zE),this.clearAllSnapshots();const m=un.now();oe.delta=Vn(0,1e3/60,m-oe.timestamp),oe.timestamp=m,oe.isProcessing=!0,ff.update.process(oe),ff.preRender.process(oe),ff.render.process(oe),oe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Td.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jE),this.sharedNodes.forEach(LE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ye(this.snapshot.measuredBox.x)&&!ye(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Iy(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;d&&(m||ka(this.latestValues)||v)&&(u(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let h=this.removeElementScroll(m);return d&&(h=this.removeTransform(h)),qE(h),{animationId:this.root.animationId,measuredBox:m,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:m}=this.options;if(!m)return qt();const h=m.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(GE))){const{scroll:v}=this.root;v&&(ji(h.x,v.offset.x),ji(h.y,v.offset.y))}return h}removeElementScroll(d){var m;const h=qt();if($e(h,d),!((m=this.scroll)===null||m===void 0)&&m.wasRoot)return h;for(let p=0;p<this.path.length;p++){const v=this.path[p],{scroll:b,options:x}=v;v!==this.root&&b&&x.layoutScroll&&(b.wasRoot&&$e(h,d),ji(h.x,b.offset.x),ji(h.y,b.offset.y))}return h}applyTransform(d,m=!1){const h=qt();$e(h,d);for(let p=0;p<this.path.length;p++){const v=this.path[p];!m&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Bi(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),ka(v.latestValues)&&Bi(h,v.latestValues)}return ka(this.latestValues)&&Bi(h,this.latestValues),h}removeTransform(d){const m=qt();$e(m,d);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!ka(p.latestValues))continue;Zf(p.latestValues)&&p.updateSnapshot();const v=qt(),b=p.measurePageBox();$e(v,b),m1(m,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,v)}return ka(this.latestValues)&&m1(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==oe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var m;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!(!this.layout||!(b||x))){if(this.resolvedRelativeTargetAt=oe.timestamp,!this.targetDelta&&!this.relativeTarget){const E=this.getClosestProjectingParent();E&&E.layout&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qt(),this.relativeTargetOrigin=qt(),is(this.relativeTargetOrigin,this.layout.layoutBox,E.layout.layoutBox),$e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=qt(),this.targetWithTransforms=qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):$e(this.target,this.layout.layoutBox),$y(this.target,this.targetDelta)):$e(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const E=this.getClosestProjectingParent();E&&!!E.resumingFrom==!!this.resumingFrom&&!E.options.layoutScroll&&E.target&&this.animationProgress!==1?(this.relativeParent=E,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qt(),this.relativeTargetOrigin=qt(),is(this.relativeTargetOrigin,this.target,E.target),$e(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Zf(this.parent.latestValues)||Yy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const m=this.getLead(),h=!!this.resumingFrom||this!==m;let p=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===oe.timestamp&&(p=!1),p)return;const{layout:v,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||b))return;$e(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,E=this.treeScale.y;X8(this.layoutCorrected,this.treeScale,this.path,h),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=qt());const{target:S}=m;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(f1(this.prevProjectionDelta.x,this.projectionDelta.x),f1(this.prevProjectionDelta.y,this.projectionDelta.y)),as(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==E||!b1(this.projectionDelta.x,this.prevProjectionDelta.x)||!b1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var m;if((m=this.options.visualElement)===null||m===void 0||m.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oi(),this.projectionDelta=Oi(),this.projectionDeltaWithTransform=Oi()}setAnimationOrigin(d,m=!1){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},b=Oi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const x=qt(),E=h?h.source:void 0,S=this.layout?this.layout.source:void 0,M=E!==S,D=this.getStack(),C=!D||D.members.length<=1,L=!!(M&&!C&&this.options.crossfade===!0&&!this.path.some(HE));this.animationProgress=0;let V;this.mixTargetDelta=P=>{const N=P/1e3;E1(b.x,d.x,N),E1(b.y,d.y,N),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(is(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),UE(this.relativeTarget,this.relativeTargetOrigin,x,N),V&&EE(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=qt()),$e(V,this.relativeTarget)),M&&(this.animationValues=v,vE(v,p,this.latestValues,N,L,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ua(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ot.update(()=>{ho.hasAnimatedSinceResize=!0,this.currentAnimation=fE(0,x1,{...d,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(x1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:h,layout:p,latestValues:v}=d;if(!(!m||!h||!p)){if(this!==d&&this.layout&&p&&a2(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||qt();const b=ye(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+b;const x=ye(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}$e(m,h),Bi(m,v),as(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new TE),this.sharedNodes.get(d).add(m);const p=m.options.initialPromotionConfig;m.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:m}=this.options;return m?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:m}=this.options;return m?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(m=!0),!m)return;const p={};h.z&&xf("z",d,p,this.animationValues);for(let v=0;v<bf.length;v++)xf(`rotate${bf[v]}`,d,p,this.animationValues),xf(`skew${bf[v]}`,d,p,this.animationValues);d.render();for(const v in p)d.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);d.scheduleRender()}getProjectionStyles(d){var m,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return CE;const p={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,p.opacity="",p.pointerEvents=fo(d==null?void 0:d.pointerEvents)||"",p.transform=v?v(this.latestValues,""):"none",p;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=fo(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!ka(this.latestValues)&&(M.transform=v?v({},""):"none",this.hasProjected=!1),M}const x=b.animationValues||b.latestValues;this.applyTransformsToTarget(),p.transform=AE(this.projectionDeltaWithTransform,this.treeScale,x),v&&(p.transform=v(x,p.transform));const{x:E,y:S}=this.projectionDelta;p.transformOrigin=`${E.origin*100}% ${S.origin*100}% 0`,b.animationValues?p.opacity=b===this?(h=(m=x.opacity)!==null&&m!==void 0?m:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:p.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const M in ps){if(x[M]===void 0)continue;const{correct:D,applyTo:C,isCSSVariable:L}=ps[M],V=p.transform==="none"?x[M]:D(x[M],b);if(C){const P=C.length;for(let N=0;N<P;N++)p[C[N]]=V}else L?this.options.visualElement.renderState.vars[M]=V:p[M]=V}return this.options.layoutId&&(p.pointerEvents=b===this?fo(d==null?void 0:d.pointerEvents)||"":"none"),p}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var m;return(m=d.currentAnimation)===null||m===void 0?void 0:m.stop()}),this.root.nodes.forEach(S1),this.root.sharedNodes.clear()}}}function RE(n){n.updateLayout()}function zE(n){var i;const s=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&s&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:u}=n.layout,{animationType:f}=n.options,d=s.source!==n.layout.source;f==="size"?Xe(b=>{const x=d?s.measuredBox[b]:s.layoutBox[b],E=ye(x);x.min=l[b].min,x.max=x.min+E}):a2(f,s.layoutBox,l)&&Xe(b=>{const x=d?s.measuredBox[b]:s.layoutBox[b],E=ye(l[b]);x.max=x.min+E,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+E)});const m=Oi();as(m,l,s.layoutBox);const h=Oi();d?as(h,n.applyTransform(u,!0),s.measuredBox):as(h,l,s.layoutBox);const p=!Iy(m);let v=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:x,layout:E}=b;if(x&&E){const S=qt();is(S,s.layoutBox,x.layoutBox);const M=qt();is(M,l,E.layoutBox),t2(S,M)||(v=!0),b.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=S,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:s,delta:h,layoutDelta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function DE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function OE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function jE(n){n.clearSnapshot()}function S1(n){n.clearMeasurements()}function BE(n){n.isLayoutDirty=!1}function _E(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function w1(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function VE(n){n.resolveTargetDelta()}function kE(n){n.calcProjection()}function NE(n){n.resetSkewAndRotation()}function LE(n){n.removeLeadSnapshot()}function E1(n,i,s){n.translate=Vt(i.translate,0,s),n.scale=Vt(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function T1(n,i,s,l){n.min=Vt(i.min,s.min,l),n.max=Vt(i.max,s.max,l)}function UE(n,i,s,l){T1(n.x,i.x,s.x,l),T1(n.y,i.y,s.y,l)}function HE(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const PE={duration:.45,ease:[.4,0,.1,1]},A1=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),C1=A1("applewebkit/")&&!A1("chrome/")?Math.round:je;function M1(n){n.min=C1(n.min),n.max=C1(n.max)}function qE(n){M1(n.x),M1(n.y)}function a2(n,i,s){return n==="position"||n==="preserve-aspect"&&!Y8(y1(i),y1(s),.2)}function GE(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const YE=n2({attachResizeListener:(n,i)=>bs(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Sf={current:void 0},i2=n2({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Sf.current){const n=new YE({});n.mount(window),n.setOptions({layoutScroll:!0}),Sf.current=n}return Sf.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),$E={pan:{Feature:lE},drag:{Feature:sE,ProjectionNode:i2,MeasureLayout:Fy}};function R1(n,i,s){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",s==="Start");const u="onHover"+s,f=l[u];f&&Ot.postRender(()=>f(i,_s(i)))}class XE extends da{mount(){const{current:i}=this.node;i&&(this.unmount=ew(i,(s,l)=>(R1(this.node,l,"Start"),u=>R1(this.node,u,"End"))))}unmount(){}}class QE extends da{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Bs(bs(this.node.current,"focus",()=>this.onFocus()),bs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function z1(n,i,s){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",s==="Start");const u="onTap"+(s==="End"?"":s),f=l[u];f&&Ot.postRender(()=>f(i,_s(i)))}class ZE extends da{mount(){const{current:i}=this.node;i&&(this.unmount=rw(i,(s,l)=>(z1(this.node,l,"Start"),(u,{success:f})=>z1(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Jf=new WeakMap,wf=new WeakMap,KE=n=>{const i=Jf.get(n.target);i&&i(n)},FE=n=>{n.forEach(KE)};function JE({root:n,...i}){const s=n||document;wf.has(s)||wf.set(s,{});const l=wf.get(s),u=JSON.stringify(i);return l[u]||(l[u]=new IntersectionObserver(FE,{root:n,...i})),l[u]}function WE(n,i,s){const l=JE(i);return Jf.set(n,s),l.observe(n),()=>{Jf.delete(n),l.unobserve(n)}}const IE={some:0,all:1};class tT extends da{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:l,amount:u="some",once:f}=i,d={root:s?s.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:IE[u]},m=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,f&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),x=p?v:b;x&&x(h)};return WE(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(eT(i,s))&&this.startObserver()}unmount(){}}function eT({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const nT={inView:{Feature:tT},tap:{Feature:ZE},focus:{Feature:QE},hover:{Feature:XE}},aT={layout:{ProjectionNode:i2,MeasureLayout:Fy}},Wf={current:null},r2={current:!1};function iT(){if(r2.current=!0,!!md)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Wf.current=n.matches;n.addListener(i),i()}else Wf.current=!1}const rT=[...Ry,he,ca],sT=n=>rT.find(My(n)),lT=new WeakMap;function oT(n,i,s){for(const l in i){const u=i[l],f=s[l];if(me(u))n.addValue(l,u);else if(me(f))n.addValue(l,hs(u,{owner:n}));else if(f!==u)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(l);n.addValue(l,hs(d!==void 0?d:u,{owner:n}))}}for(const l in s)i[l]===void 0&&n.removeValue(l);return i}const D1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class uT{scrapeMotionValuesFromProps(i,s,l){return{}}constructor({parent:i,props:s,presenceContext:l,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Yd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=un.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,Ot.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:v}=d;this.onUpdate=v,this.latestValues=h,this.baseTarget={...h},this.initialValues=s.initial?{...h}:{},this.renderState=p,this.parent=i,this.props=s,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!f,this.isControllingVariants=Ho(s),this.isVariantNode=Yv(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...x}=this.scrapeMotionValuesFromProps(s,{},this);for(const E in x){const S=x[E];h[E]!==void 0&&me(S)&&S.set(h[E],!1)}}mount(i){this.current=i,lT.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,l)=>this.bindToMotionValue(l,s)),r2.current||iT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Wf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ua(this.notifyUpdate),ua(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const s=this.features[i];s&&(s.unmount(),s.isMounted=!1)}this.current=null}bindToMotionValue(i,s){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const l=Ga.has(i);l&&this.onBindTransform&&this.onBindTransform();const u=s.on("change",m=>{this.latestValues[i]=m,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0)}),f=s.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{u(),f(),d&&d(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Hi){const s=Hi[i];if(!s)continue;const{isEnabled:l,Feature:u}=s;if(!this.features[i]&&u&&l(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):qt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let l=0;l<D1.length;l++){const u=D1[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=oT(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const l=this.values.get(i);s!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&s!==void 0&&(l=hs(s===null?void 0:s,{owner:this}),this.addValue(i,l)),l}readValue(i,s){var l;let u=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(l=this.getBaseTargetFromProps(this.props,i))!==null&&l!==void 0?l:this.readValueFromInstance(this.current,i,this.options);return u!=null&&(typeof u=="string"&&(Ay(u)||py(u))?u=parseFloat(u):!sT(u)&&ca.test(s)&&(u=wy(i,s)),this.setBaseTarget(i,me(u)?u.get():u)),me(u)?u.get():u}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var s;const{initial:l}=this.props;let u;if(typeof l=="string"||typeof l=="object"){const d=Nd(this.props,l,(s=this.presenceContext)===null||s===void 0?void 0:s.custom);d&&(u=d[i])}if(l&&u!==void 0)return u;const f=this.getBaseTargetFromProps(this.props,i);return f!==void 0&&!me(f)?f:this.initialValues[i]!==void 0&&u===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new xd),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}}class s2 extends uT{constructor(){super(...arguments),this.KeyframeResolver=zy}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){return i.style?i.style[s]:void 0}removeValueFromRenderState(i,{vars:s,style:l}){delete s[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;me(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function cT(n){return window.getComputedStyle(n)}class fT extends s2{constructor(){super(...arguments),this.type="html",this.renderInstance=ey}readValueFromInstance(i,s){if(Ga.has(s))return E6(i,s);{const l=cT(i),u=(zd(s)?l.getPropertyValue(s):l[s])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Xy(i,s)}build(i,s,l){jd(i,s,l.transformTemplate)}scrapeMotionValuesFromProps(i,s,l){return Ld(i,s,l)}}class dT extends s2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=qt,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&ty(this.current,this.renderState)}}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Ga.has(s)){const l=Sy(s);return l&&l.default||0}return s=ny.has(s)?s:Rd(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,l){return iy(i,s,l)}onBindTransform(){this.current&&!this.renderState.dimensions&&Ot.postRender(this.updateDimensions)}build(i,s,l){Vd(i,s,this.isSVGTag,l.transformTemplate)}renderInstance(i,s,l,u){ay(i,s,l,u)}mount(i){this.isSVGTag=kd(i.tagName),super.mount(i)}}const hT=(n,i)=>_d(n)?new dT(i):new fT(i,{allowProjection:n!==A.Fragment}),mT=Jw({...k8,...nT,...$E,...aT},hT),rs=hw(mT);function pT(n){n.values.forEach(i=>i.stop())}function If(n,i){[...i].reverse().forEach(l=>{const u=n.getVariant(l);u&&Ud(n,u),n.variantChildren&&n.variantChildren.forEach(f=>{If(f,i)})})}function gT(n,i){if(Array.isArray(i))return If(n,i);if(typeof i=="string")return If(n,[i]);Ud(n,i)}function vT(){const n=new Set,i={subscribe(s){return n.add(s),()=>void n.delete(s)},start(s,l){const u=[];return n.forEach(f=>{u.push(Ly(f,s,{transitionOverride:l}))}),Promise.all(u)},set(s){return n.forEach(l=>{gT(l,s)})},stop(){n.forEach(s=>{pT(s)})},mount(){return()=>{i.stop()}}};return i}function yT(){const n=ko(vT);return pd(n.mount,[]),n}const bT=yT,xT=()=>{const[n,i]=A.useState([]),[s,l]=A.useState(null),[u,f]=A.useState(null),[d,m]=A.useState(!1),[h,p]=A.useState([{name:"Curiosità Pokémon",color:"#EE1515",questions:[{question:"Qual è stato il primo Pokémon disegnato da Game Freak?",answer:"Rhydon",points:100,answered:!1},{question:"Quante varianti di macchie può avere Spinda?",answer:"4 miliardi",points:200,answered:!1},{question:"Quale Pokémon si dice sia stato un umano in vita passata?",answer:"Yamask",points:300,answered:!1},{question:"Quale Pokémon si dice possa essere Mew di notte?",answer:"Smeargle",points:400,answered:!1},{question:"Quale errore di ortografia famoso è apparso in Pokémon GO?",answer:"Pikahcu (invece di Pikachu)",points:500,answered:!1}]},{name:"Pokémon Specifici",color:"#3B4CCA",questions:[{question:"Quale Pokémon è noto per non poter mai guardare a nord?",answer:"Nosepass",points:100,answered:!1},{question:"Quale Pokémon è considerato la versione 'economica' di Chimchar?",answer:"Pansear",points:200,answered:!1},{question:"Quale Pokémon potrebbe essere associato a Bud Spencer?",answer:"Hippowdon",points:300,answered:!1},{question:"Quale Pokémon acquatico ha un nome che suggerisce freddezza emotiva?",answer:"Tentacool",points:400,answered:!1},{question:"Quale Pokémon ha le lancette di un orologio sul corpo?",answer:"Hoothoot",points:500,answered:!1}]},{name:"Allenatori",color:"#FFDE00",questions:[{question:"Quale tipo di allenatore dice spesso 'C'è solo un capitano'?",answer:"Marinaio",points:100,answered:!1},{question:"Quale tipo di allenatore è associato a strumenti musicali?",answer:"Chitarrista",points:200,answered:!1},{question:"Quale tipo di allenatore usa tattiche furtive?",answer:"Ninja",points:300,answered:!1},{question:"Quale tipo di allenatore è calvo e muscoloso?",answer:"ZuccaPelata",points:400,answered:!1},{question:"Quale tipo di allenatore è noto per il suo abbigliamento minimal?",answer:"Fantallenatore",points:500,answered:!1}]},{name:"GCC Pokémon",color:"#FF9C54",questions:[{question:"Quante carte si pescano all'inizio di una partita nel GCC Pokémon?",answer:"7",points:100,answered:!1},{question:"Qual è il valore di ritirata più alto mai stampato su una carta?",answer:"5 energie",points:200,answered:!1},{question:"In che anno è stato rilasciato il primo Set Base?",answer:"1996 in Giappone, 1999 nel resto del mondo",points:300,answered:!1},{question:"C'è un limite massimo di carte in mano durante una partita ufficiale?",answer:"No, ma se non puoi pescare all'inizio del turno perdi",points:400,answered:!1},{question:"Come si chiama la meccanica di Reshiram & Charizard GX?",answer:"Tag Team GX",points:500,answered:!1}]},{name:"Serie Pokémon",color:"#78C850",questions:[{question:"Chi è il protagonista della prima serie animata Pokémon?",answer:"Ash Ketchum",points:100,answered:!1},{question:"Quale Pokémon leggendario appare nel primo film?",answer:"Mewtwo",points:200,answered:!1},{question:"Come si chiamano i nemici ricorrenti nella serie animata?",answer:"Team Rocket (Jessie, James e Meowth)",points:300,answered:!1},{question:"Quante stagioni ha la serie animata originale?",answer:"23 stagioni (fino a Pokémon Esplorazioni)",points:400,answered:!1},{question:"Chi è il successore di Ash come protagonista?",answer:"Liko e Roy",points:500,answered:!1}]}]);A.useEffect(()=>{const S=localStorage.getItem("quizPlayers");if(S){const M=JSON.parse(S);i(M),M.length>0&&l(M[0])}},[]);const v=(S,M,D)=>{M.answered||!s||(f({category:S,question:M,categoryColor:D}),m(!1))},b=S=>{p(h.map(M=>({...M,questions:M.questions.map(D=>D===S?{...D,answered:!0}:D)})))},x=()=>{if(!s||!u)return;const S=n.map(M=>M.id===s.id?{...M,score:M.score+u.question.points}:M);i(S),localStorage.setItem("quizPlayers",JSON.stringify(S)),l({...s,score:s.score+u.question.points}),b(u.question),f(null)},E=()=>{u&&(b(u.question),f(null))};return w.jsxs(TT,{children:[w.jsxs(zT,{to:"/game",children:[w.jsx(Vo,{})," Torna ai giochi"]}),w.jsx(DT,{children:"Sfida Quiz Pokémon"}),w.jsxs(OT,{children:[w.jsx(jT,{children:h.map((S,M)=>w.jsxs(VT,{$color:S.color,children:[w.jsx(BT,{}),S.name]},M))}),[0,1,2,3,4].map(S=>w.jsx(kT,{children:h.map((M,D)=>{const C=M.questions[S];return w.jsx(NT,{$color:M.color,$answered:C.answered,onClick:()=>v(M.name,C,M.color),children:C.answered?w.jsx(UT,{children:w.jsx(_T,{})}):w.jsx(LT,{children:C.points})},D)})},S))]}),w.jsxs(HT,{children:[w.jsxs(PT,{children:[w.jsx(qT,{children:"Allenatori"}),w.jsx(GT,{children:s?"Scegli una casella per sfidare la tua conoscenza":"Scegli un allenatore per iniziare"})]}),w.jsx(YT,{children:n.map(S=>w.jsxs($T,{$active:(s==null?void 0:s.id)===S.id,onClick:()=>l(S),children:[w.jsx(j1,{src:S.avatar,alt:S.name}),w.jsxs(XT,{children:[w.jsx(QT,{children:S.name}),w.jsxs(ZT,{children:[w.jsx(O1,{})," ",S.score," punti"]})]}),(s==null?void 0:s.id)===S.id&&w.jsx(KT,{children:w.jsx(E3,{})})]},S.id))})]}),w.jsx(Ov,{children:u&&w.jsx(FT,{as:rs.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:w.jsxs(JT,{as:rs.div,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},$color:u.categoryColor,children:[w.jsxs(WT,{children:[w.jsx(IT,{$color:u.categoryColor,children:u.category}),w.jsxs(tA,{children:[w.jsx(O1,{})," ",u.question.points," punti"]})]}),w.jsx(eA,{children:u.question.question}),w.jsx(nA,{children:d?w.jsxs(aA,{as:rs.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[w.jsx(iA,{children:u.question.answer}),w.jsxs(rA,{children:[w.jsxs(B1,{$color:"#4CAF50",onClick:x,children:[w.jsx(Av,{})," Corretta"]}),w.jsxs(B1,{$color:"#EE1515",onClick:E,children:[w.jsx(xo,{})," Sbagliata"]})]})]}):w.jsxs(sA,{onClick:()=>m(!0),children:[w.jsx(y3,{})," Mostra Risposta"]})}),w.jsxs(lA,{children:[w.jsx(j1,{src:s==null?void 0:s.avatar,alt:s==null?void 0:s.name,$small:!0}),w.jsx("span",{children:s==null?void 0:s.name})]})]})})}),w.jsxs(AT,{children:[w.jsx(Ss,{className:"ball1"}),w.jsx(Ss,{className:"ball2"}),w.jsx(CT,{className:"ball3"}),w.jsx(MT,{className:"ball4"}),w.jsx(RT,{className:"ball5"})]})]})},xs=ue`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,ST=ue`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,wT=ue`
  0% { opacity: 0.3; }
  50% { opacity: 0.8; }
  100% { opacity: 0.3; }
`,ET=ue`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,TT=j.div`
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
`,AT=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,Ss=j.div`
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
`,CT=j(Ss)`
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
`,MT=j(Ss)`
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
`,RT=j(Ss)`
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
`,zT=j(Yi)`
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
`,DT=j.h1`
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
`,OT=j.div`
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
`,jT=j.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,BT=j.div`
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
`,_T=j.div`
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
  animation: ${ET} 1s ease-in-out;
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
`,O1=j.div`
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
`,VT=j.div`
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
`,kT=j.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,NT=j.div`
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
`,LT=j.div`
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
`,UT=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`,HT=j.div`
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
`,PT=j.div`
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
`,qT=j.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,GT=j.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`,YT=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,$T=j.div`
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
      animation: ${ST} 2s infinite ease-in-out;
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
`,j1=j.img`
  width: ${n=>n.$small?"30px":"45px"};
  height: ${n=>n.$small?"30px":"45px"};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`,XT=j.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,QT=j.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,ZT=j.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,KT=j.div`
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
  animation: ${wT} 2s infinite;
`,FT=j.div`
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
`,JT=j.div`
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
`,WT=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`,IT=j.div`
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
`,tA=j.div`
  background: rgba(255, 255, 255, 0.15);
  color: #ffde00;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.3);
  display: flex;
  align-items: center;
`,eA=j.div`
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
`,nA=j.div`
  padding: 20px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  position: relative;
  z-index: 1;
`,aA=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,iA=j.div`
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
`,rA=j.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`,B1=j.button`
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
`,sA=j.button`
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
`,lA=j.div`
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
`,Kr=[{id:1,label:"Pokémon",color:"#FF5252",points:100},{id:2,label:"Allenatori",color:"#FF9800",points:200},{id:3,label:"Mosse",color:"#FFEB3B",points:300},{id:4,label:"Città",color:"#4CAF50",points:400},{id:5,label:"Oggetti",color:"#2196F3",points:500},{id:6,label:"Leggende",color:"#9C27B0",points:750},{id:7,label:"Bonus",color:"#F44336",points:1e3},{id:8,label:"Malus",color:"#000000",points:-500}],oA=()=>{const[n,i]=A.useState(!1),[s,l]=A.useState(null),[u,f]=A.useState(5),d=bT(),m=Cs(),h=A.useRef(null),p=()=>{if(n)return;i(!0),l(null);const b=5+Math.random()*5,x=360/Kr.length,E=Math.floor(Math.random()*Kr.length),S=Math.random()*x,M=b*360+E*x+S;d.start({rotate:M,transition:{duration:u,ease:"easeOut"}}).then(()=>{i(!1);const D=Kr[E];l(D),setTimeout(()=>{D.label!=="Bonus"&&D.label!=="Malus"&&m("/game/categories",{state:{category:D.label,points:D.points}})},3e3)})},v=()=>{m("/game")};return w.jsxs(uA,{children:[w.jsxs(cA,{onClick:v,children:[w.jsx(Vo,{})," Indietro"]}),w.jsxs(fA,{children:[w.jsx(pA,{children:w.jsx(p3,{})}),w.jsx(dA,{ref:h,animate:d,initial:{rotate:0},children:Kr.map((b,x)=>{const E=360/Kr.length,S=x*E;return w.jsx(hA,{$color:b.color,$rotation:S,$segmentAngle:E,children:w.jsx(mA,{$rotation:-S,children:b.label})},b.id)})}),w.jsx(gA,{onClick:p,disabled:n,children:n?"Gira...":"Gira la Ruota!"})]}),w.jsx(Ov,{children:s&&w.jsx(vA,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3},children:w.jsxs(yA,{$color:s.color,children:[w.jsx("h2",{children:"Categoria:"}),w.jsx(bA,{children:s.label}),w.jsxs(xA,{$isNegative:s.points<0,children:[s.points>0?"+":"",s.points," Punti"]})]})})})]})},uA=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f);
  position: relative;
  overflow: hidden;
`,cA=j.button`
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
`,fA=j.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`,dA=j(rs.div)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border: 10px solid rgba(255, 255, 255, 0.2);
`,hA=j.div`
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
`,mA=j.span`
  transform: rotate(${n=>n.$rotation}deg);
  transform-origin: center 170px; /* Approssimazione del raggio metà */
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-size: 16px;
  text-align: center;
  max-width: 80px;
`,pA=j.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #ffde00;
  z-index: 10;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`,gA=j.button`
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
`,vA=j(rs.div)`
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
`,yA=j.div`
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
`,bA=j.div`
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0 20px;
  color: #1a2a6c;
`,xA=j.div`
  font-size: 24px;
  font-weight: bold;
  color: ${n=>n.$isNegative?"#d32f2f":"#388e3c"};
  background: ${n=>n.$isNegative?"rgba(211, 47, 47, 0.1)":"rgba(56, 142, 60, 0.1)"};
  padding: 10px 20px;
  border-radius: 30px;
`,_1=[{id:1,name:"Pikachu",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,name:"Charizard",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{id:3,name:"Bulbasaur",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:4,name:"Squirtle",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},{id:5,name:"Jigglypuff",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"},{id:6,name:"Mewtwo",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"},{id:7,name:"Eevee",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:8,name:"Snorlax",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:9,name:"Gengar",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"},{id:10,name:"Gyarados",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"},{id:11,name:"Dragonite",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"},{id:12,name:"Mew",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"}],Ef=20,no=500,SA=5e3;function wA(){const[n,i]=A.useState([]),[s,l]=A.useState(null),[u,f]=A.useState([]),[d,m]=A.useState(null),[h,p]=A.useState("inactive"),[v,b]=A.useState(0),[x,E]=A.useState(!1),[S,M]=A.useState(no),[D,C]=A.useState(""),[L,V]=A.useState(!1),[P,N]=A.useState(!1),Y=A.useRef(null),Q=Cs();A.useEffect(()=>{const vt=localStorage.getItem("quizPlayers");if(vt){const Gt=JSON.parse(vt);i(Gt),Gt.length>0&&l(Gt[0])}else Q("/")},[Q]),A.useEffect(()=>{const vt=[..._1].sort(()=>.5-Math.random());f(vt)},[]),A.useEffect(()=>(h==="active"&&!x&&v<Ef&&(Y.current=setTimeout(()=>{b(vt=>vt+1),M(vt=>Math.max(vt-no/Ef,0))},SA)),()=>{Y.current&&clearTimeout(Y.current)}),[h,x,v]);const F=vt=>{h==="inactive"&&(m(vt),p("active"),b(0),M(no),E(!1),C(""),V(!1))},X=()=>{E(!x)},tt=()=>{const vt=D.trim().toLowerCase(),Gt=d.name.toLowerCase(),Yt=vt===Gt;if(N(Yt),V(!0),p("completed"),Yt&&s){const Z=n.map(J=>J.id===s.id?{...J,score:J.score+Math.round(S)}:J);i(Z),localStorage.setItem("quizPlayers",JSON.stringify(Z)),l({...s,score:s.score+Math.round(S)})}},Rt=()=>{m(null),p("inactive"),b(0),M(no),E(!1),C(""),V(!1);const vt=[..._1].sort(()=>.5-Math.random());f(vt)},ie=v/Ef*100;return w.jsxs(TA,{children:[w.jsxs(zA,{to:"/game",children:[w.jsx(Vo,{})," Torna ai giochi"]}),w.jsx(DA,{children:"Chi è quel Pokémon?"}),h==="inactive"?w.jsx(OA,{children:u.map(vt=>w.jsx(jA,{onClick:()=>F(vt),children:w.jsx(BA,{children:w.jsxs(_A,{children:[w.jsx(VA,{}),w.jsx(kA,{children:vt.id})]})})},vt.id))}):w.jsxs(NA,{children:[w.jsxs(LA,{children:[w.jsxs(UA,{children:[w.jsx(HA,{children:"Punteggio:"}),w.jsx(PA,{children:Math.round(S)})]}),w.jsx(qA,{children:h==="active"&&w.jsx(GA,{onClick:X,children:x?w.jsxs(w.Fragment,{children:[w.jsx(w3,{})," Riprendi"]}):w.jsxs(w.Fragment,{children:[w.jsx(S3,{})," Pausa"]})})})]}),w.jsxs(YA,{children:[w.jsx($A,{src:d==null?void 0:d.image,alt:"Pokémon da indovinare"}),w.jsx(XA,{$revealedPieces:v})]}),w.jsxs(QA,{children:[w.jsx(ZA,{$percentage:ie}),w.jsxs(KA,{children:["Rivelato: ",Math.round(ie),"%"]})]}),!L&&w.jsxs(FA,{children:[w.jsx(JA,{type:"text",value:D,onChange:vt=>C(vt.target.value),placeholder:"Nome del Pokémon...",disabled:h==="completed"}),w.jsx(WA,{onClick:tt,disabled:!D.trim()||h==="completed",children:"Indovina"})]}),L&&w.jsxs(IA,{$correct:P,children:[w.jsx(tC,{children:P?w.jsx(Av,{}):w.jsx(xo,{})}),w.jsx(eC,{children:P?"Corretto!":"Sbagliato!"}),w.jsx(nC,{children:P?`Hai guadagnato ${Math.round(S)} punti!`:`Era ${d.name}. Nessun punto guadagnato.`}),w.jsx(aC,{onClick:Rt,children:"Nuova Sfida"})]})]}),w.jsxs(iC,{children:[w.jsx(rC,{src:s==null?void 0:s.avatar,alt:s==null?void 0:s.name}),w.jsx(sC,{children:s==null?void 0:s.name}),w.jsxs(lC,{children:[(s==null?void 0:s.score)||0," punti"]})]}),w.jsxs(AA,{children:[w.jsx(Es,{className:"ball1"}),w.jsx(Es,{className:"ball2"}),w.jsx(CA,{className:"ball3"}),w.jsx(MA,{className:"ball4"}),w.jsx(RA,{className:"ball5"})]})]})}const ws=ue`
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
`;const l2=ue`
  from { opacity: 0; }
  to { opacity: 1; }
`,EA=ue`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,TA=j.div`
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
`,AA=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,Es=j.div`
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
`,CA=j(Es)`
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
`,MA=j(Es)`
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
`,RA=j(Es)`
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
`,zA=j(Yi)`
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
`,DA=j.h1`
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
`,OA=j.div`
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
`,jA=j.div`
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
      animation: ${EA} 1s;
    }
  }
`,BA=j.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`,_A=j.div`
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
`,VA=j.div`
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
`,kA=j.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,NA=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  z-index: 1;
  animation: ${l2} 0.5s ease;
`,LA=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`,UA=j.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`,HA=j.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 10px;
`,PA=j.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
`,qA=j.div`
  display: flex;
  gap: 1rem;
`,GA=j.button`
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
`,YA=j.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`,$A=j.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #233975;
`,XA=j.div`
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
`,QA=j.div`
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
`,ZA=j.div`
  height: 100%;
  width: ${n=>n.$percentage}%;
  background: linear-gradient(90deg, #ee1515, #ff9c54);
  border-radius: 8px;
  transition: width 0.5s ease;
`,KA=j.div`
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
`,FA=j.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,JA=j.input`
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
`,WA=j.button`
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
`,IA=j.div`
  width: 100%;
  background: ${n=>n.$correct?"rgba(76, 175, 80, 0.2)":"rgba(244, 67, 54, 0.2)"};
  border: 3px solid ${n=>n.$correct?"#4CAF50":"#F44336"};
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  animation: ${l2} 0.5s ease;
`,tC=j.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffde00;
`,eC=j.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffde00;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,nC=j.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`,aC=j.button`
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
`,iC=j.div`
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
`,rC=j.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
`,sC=j.div`
  font-weight: 600;
  margin-right: 1rem;
`,lC=j.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffde00;
`,oC=new URL("/vegetaquizshow/assets/Pokemon%20Mystery%20Dungeon%20Red_Blue%20Rescue%20Team%20Full%20OST%20_6EHwdMQj3i4_00_00_00_00_05_00_part_-CfduThOI.mp3",import.meta.url).href,uC=new URL("/vegetaquizshow/assets/welcome-pokemon-Boc2-QOp.mp3",import.meta.url).href,cC=new URL("/vegetaquizshow/assets/abtn-DX_bwNuP.mp3",import.meta.url).href,Fr={"/":uC,"/game":oC},fC=A.createContext({isPlaying:!1,volume:.5,toggleAudio:()=>{},changeVolume:n=>{},currentAudioPath:""}),dC=()=>{const{pathname:n}=fa(),[i]=A.useState(new Audio),[s,l]=A.useState(!1),[u,f]=A.useState(.5),[d,m]=A.useState(!1),[h,p]=A.useState(""),v=A.useRef(null),[b,x]=A.useState(!0),E=A.useRef(new Audio(cC));A.useEffect(()=>{E.current.volume=.2;const P=localStorage.getItem("pokemonQuizClickSoundEnabled");P!==null&&x(P==="true")},[]);const S=()=>{const P=!b;x(P),localStorage.setItem("pokemonQuizClickSoundEnabled",String(P))},M=()=>{if(b){const P=E.current.cloneNode();P.volume=.1,P.play().catch(N=>console.log("Click sound error:",N))}};A.useEffect(()=>{const P=()=>M();return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[b]);const D=()=>{s?(i.pause(),l(!1),localStorage.setItem("pokemonQuizAudioEnabled","false")):(i.volume=u,i.loop=!0,i.play().then(()=>{l(!0),localStorage.setItem("pokemonQuizAudioEnabled","true")}).catch(P=>console.log("Audio playback error:",P)))},C=P=>{const N=parseFloat(P.toFixed(2));f(N),i.volume=N,localStorage.setItem("pokemonQuizAudioVolume",N.toString())},L=P=>{if(Fr[P])return Fr[P];for(const N in Fr)if(P.startsWith(N)&&N!=="/")return Fr[N];return Fr["/"]};A.useEffect(()=>{const P=localStorage.getItem("pokemonQuizAudioEnabled")==="true",N=localStorage.getItem("pokemonQuizAudioVolume");if(N){const Y=parseFloat(N);f(Y),i.volume=Y}else i.volume=u;P&&l(!0)},[i]),A.useEffect(()=>{const P=L(n);if(P!==h){const N=!i.paused;i.currentTime,i.src=P,p(P),N&&s&&i.play().catch(Y=>console.log("Audio playback error:",Y))}else s&&i.paused&&i.play().catch(N=>console.log("Audio playback error:",N))},[n,i,s,h]),A.useEffect(()=>{const P=N=>{v.current&&!v.current.contains(N.target)&&m(!1)};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[]);const V=()=>u===0||!s?w.jsx(C3,{}):u<.5?w.jsx(A3,{}):w.jsx(M3,{});return w.jsx(fC.Provider,{value:{isPlaying:s,volume:u,toggleAudio:D,changeVolume:C,currentAudioPath:h},children:w.jsxs(mC,{ref:v,children:[w.jsxs("div",{className:"container",children:[w.jsx(pC,{onClick:D,onMouseEnter:()=>m(!0),title:s?"Disattiva musica":"Attiva musica",children:V()}),w.jsx(gC,{$visible:d,children:w.jsx(vC,{type:"range",min:"0",max:"0.3",step:"0.01",value:u,onChange:P=>C(parseFloat(P.target.value))})})]}),w.jsx(yC,{onClick:S,$active:b,title:b?"Disattiva suono click":"Attiva suono click",children:w.jsx(x3,{})})]})})},hC=()=>w.jsxs(I5,{basename:"/vegetaquizshow",children:[w.jsx(dC,{}),w.jsxs(D5,{children:[w.jsx(Mi,{path:"/",element:w.jsx(D3,{})}),w.jsx(Mi,{path:"/game",element:w.jsx(hS,{})}),w.jsx(Mi,{path:"/game/categories",element:w.jsx(xT,{})}),w.jsx(Mi,{path:"/game/wheel",element:w.jsx(oA,{})}),w.jsx(Mi,{path:"/game/image",element:w.jsx(wA,{})})]})]}),mC=j.div`
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
`,pC=j.button`
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
`,gC=j.div`
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
`,vC=j.input`
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
`,yC=j.button`
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
`;Hx.createRoot(document.getElementById("root")).render(w.jsx(A.StrictMode,{children:w.jsx(z3,{children:w.jsx(hC,{})})}));
