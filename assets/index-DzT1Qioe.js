(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function s5(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ff={exports:{}},ds={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function l5(){if(dg)return ds;dg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var p in u)p!=="key"&&(f[p]=u[p])}else f=u;return u=f.ref,{$$typeof:n,type:s,key:d,ref:u!==void 0?u:null,props:f}}return ds.Fragment=i,ds.jsx=o,ds.jsxs=o,ds}var hg;function u5(){return hg||(hg=1,Ff.exports=l5()),Ff.exports}var y=u5(),Zf={exports:{}},Gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function c5(){if(pg)return Gt;pg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,R={};function k(O,nt,yt){this.props=O,this.context=nt,this.refs=R,this.updater=yt||S}k.prototype.isReactComponent={},k.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},k.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function A(){}A.prototype=k.prototype;function D(O,nt,yt){this.props=O,this.context=nt,this.refs=R,this.updater=yt||S}var M=D.prototype=new A;M.constructor=D,C(M,k.prototype),M.isPureReactComponent=!0;var L=Array.isArray,B={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ot(O,nt,yt,wt,mt,ht){return yt=ht.ref,{$$typeof:n,type:O,key:nt,ref:yt!==void 0?yt:null,props:ht}}function dt(O,nt){return ot(O.type,nt,void 0,void 0,void 0,O.props)}function X(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function it(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(yt){return nt[yt]})}var J=/\/+/g;function Jt(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?it(""+O.key):nt.toString(36)}function ge(){}function Z(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ge,ge):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Dt(O,nt,yt,wt,mt){var ht=typeof O;(ht==="undefined"||ht==="boolean")&&(O=null);var lt=!1;if(O===null)lt=!0;else switch(ht){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(O.$$typeof){case n:case i:lt=!0;break;case v:return lt=O._init,Dt(lt(O._payload),nt,yt,wt,mt)}}if(lt)return mt=mt(O),lt=wt===""?"."+Jt(O,0):wt,L(mt)?(yt="",lt!=null&&(yt=lt.replace(J,"$&/")+"/"),Dt(mt,nt,yt,"",function($){return $})):mt!=null&&(X(mt)&&(mt=dt(mt,yt+(mt.key==null||O&&O.key===mt.key?"":(""+mt.key).replace(J,"$&/")+"/")+lt)),nt.push(mt)),1;lt=0;var Tt=wt===""?".":wt+":";if(L(O))for(var St=0;St<O.length;St++)wt=O[St],ht=Tt+Jt(wt,St),lt+=Dt(wt,nt,yt,ht,mt);else if(St=x(O),typeof St=="function")for(O=St.call(O),St=0;!(wt=O.next()).done;)wt=wt.value,ht=Tt+Jt(wt,St++),lt+=Dt(wt,nt,yt,ht,mt);else if(ht==="object"){if(typeof O.then=="function")return Dt(Z(O),nt,yt,wt,mt);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return lt}function G(O,nt,yt){if(O==null)return O;var wt=[],mt=0;return Dt(O,wt,"","",function(ht){return nt.call(yt,ht,mt++)}),wt}function Q(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(yt){(O._status===0||O._status===-1)&&(O._status=1,O._result=yt)},function(yt){(O._status===0||O._status===-1)&&(O._status=2,O._result=yt)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var rt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function vt(){}return Gt.Children={map:G,forEach:function(O,nt,yt){G(O,function(){nt.apply(this,arguments)},yt)},count:function(O){var nt=0;return G(O,function(){nt++}),nt},toArray:function(O){return G(O,function(nt){return nt})||[]},only:function(O){if(!X(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Gt.Component=k,Gt.Fragment=o,Gt.Profiler=u,Gt.PureComponent=D,Gt.StrictMode=s,Gt.Suspense=h,Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Gt.act=function(){throw Error("act(...) is not supported in production builds of React.")},Gt.cache=function(O){return function(){return O.apply(null,arguments)}},Gt.cloneElement=function(O,nt,yt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var wt=C({},O.props),mt=O.key,ht=void 0;if(nt!=null)for(lt in nt.ref!==void 0&&(ht=void 0),nt.key!==void 0&&(mt=""+nt.key),nt)!W.call(nt,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&nt.ref===void 0||(wt[lt]=nt[lt]);var lt=arguments.length-2;if(lt===1)wt.children=yt;else if(1<lt){for(var Tt=Array(lt),St=0;St<lt;St++)Tt[St]=arguments[St+2];wt.children=Tt}return ot(O.type,mt,void 0,void 0,ht,wt)},Gt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},Gt.createElement=function(O,nt,yt){var wt,mt={},ht=null;if(nt!=null)for(wt in nt.key!==void 0&&(ht=""+nt.key),nt)W.call(nt,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(mt[wt]=nt[wt]);var lt=arguments.length-2;if(lt===1)mt.children=yt;else if(1<lt){for(var Tt=Array(lt),St=0;St<lt;St++)Tt[St]=arguments[St+2];mt.children=Tt}if(O&&O.defaultProps)for(wt in lt=O.defaultProps,lt)mt[wt]===void 0&&(mt[wt]=lt[wt]);return ot(O,ht,void 0,void 0,null,mt)},Gt.createRef=function(){return{current:null}},Gt.forwardRef=function(O){return{$$typeof:p,render:O}},Gt.isValidElement=X,Gt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:Q}},Gt.memo=function(O,nt){return{$$typeof:m,type:O,compare:nt===void 0?null:nt}},Gt.startTransition=function(O){var nt=B.T,yt={};B.T=yt;try{var wt=O(),mt=B.S;mt!==null&&mt(yt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(vt,rt)}catch(ht){rt(ht)}finally{B.T=nt}},Gt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Gt.use=function(O){return B.H.use(O)},Gt.useActionState=function(O,nt,yt){return B.H.useActionState(O,nt,yt)},Gt.useCallback=function(O,nt){return B.H.useCallback(O,nt)},Gt.useContext=function(O){return B.H.useContext(O)},Gt.useDebugValue=function(){},Gt.useDeferredValue=function(O,nt){return B.H.useDeferredValue(O,nt)},Gt.useEffect=function(O,nt){return B.H.useEffect(O,nt)},Gt.useId=function(){return B.H.useId()},Gt.useImperativeHandle=function(O,nt,yt){return B.H.useImperativeHandle(O,nt,yt)},Gt.useInsertionEffect=function(O,nt){return B.H.useInsertionEffect(O,nt)},Gt.useLayoutEffect=function(O,nt){return B.H.useLayoutEffect(O,nt)},Gt.useMemo=function(O,nt){return B.H.useMemo(O,nt)},Gt.useOptimistic=function(O,nt){return B.H.useOptimistic(O,nt)},Gt.useReducer=function(O,nt,yt){return B.H.useReducer(O,nt,yt)},Gt.useRef=function(O){return B.H.useRef(O)},Gt.useState=function(O){return B.H.useState(O)},Gt.useSyncExternalStore=function(O,nt,yt){return B.H.useSyncExternalStore(O,nt,yt)},Gt.useTransition=function(){return B.H.useTransition()},Gt.version="19.0.0",Gt}var mg;function Bu(){return mg||(mg=1,Zf.exports=c5()),Zf.exports}var T=Bu();const ha=s5(T);var Wf={exports:{}},hs={},Jf={exports:{}},If={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function f5(){return gg||(gg=1,function(n){function i(G,Q){var rt=G.length;G.push(Q);t:for(;0<rt;){var vt=rt-1>>>1,O=G[vt];if(0<u(O,Q))G[vt]=Q,G[rt]=O,rt=vt;else break t}}function o(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var Q=G[0],rt=G.pop();if(rt!==Q){G[0]=rt;t:for(var vt=0,O=G.length,nt=O>>>1;vt<nt;){var yt=2*(vt+1)-1,wt=G[yt],mt=yt+1,ht=G[mt];if(0>u(wt,rt))mt<O&&0>u(ht,wt)?(G[vt]=ht,G[mt]=rt,vt=mt):(G[vt]=wt,G[yt]=rt,vt=yt);else if(mt<O&&0>u(ht,rt))G[vt]=ht,G[mt]=rt,vt=mt;else break t}}return Q}function u(G,Q){var rt=G.sortIndex-Q.sortIndex;return rt!==0?rt:G.id-Q.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var h=[],m=[],v=1,b=null,x=3,S=!1,C=!1,R=!1,k=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function M(G){for(var Q=o(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=G)s(m),Q.sortIndex=Q.expirationTime,i(h,Q);else break;Q=o(m)}}function L(G){if(R=!1,M(G),!C)if(o(h)!==null)C=!0,Z();else{var Q=o(m);Q!==null&&Dt(L,Q.startTime-G)}}var B=!1,W=-1,ot=5,dt=-1;function X(){return!(n.unstable_now()-dt<ot)}function it(){if(B){var G=n.unstable_now();dt=G;var Q=!0;try{t:{C=!1,R&&(R=!1,A(W),W=-1),S=!0;var rt=x;try{e:{for(M(G),b=o(h);b!==null&&!(b.expirationTime>G&&X());){var vt=b.callback;if(typeof vt=="function"){b.callback=null,x=b.priorityLevel;var O=vt(b.expirationTime<=G);if(G=n.unstable_now(),typeof O=="function"){b.callback=O,M(G),Q=!0;break e}b===o(h)&&s(h),M(G)}else s(h);b=o(h)}if(b!==null)Q=!0;else{var nt=o(m);nt!==null&&Dt(L,nt.startTime-G),Q=!1}}break t}finally{b=null,x=rt,S=!1}Q=void 0}}finally{Q?J():B=!1}}}var J;if(typeof D=="function")J=function(){D(it)};else if(typeof MessageChannel<"u"){var Jt=new MessageChannel,ge=Jt.port2;Jt.port1.onmessage=it,J=function(){ge.postMessage(null)}}else J=function(){k(it,0)};function Z(){B||(B=!0,J())}function Dt(G,Q){W=k(function(){G(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){C||S||(C=!0,Z())},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(G){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var rt=x;x=Q;try{return G()}finally{x=rt}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,Q){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var rt=x;x=G;try{return Q()}finally{x=rt}},n.unstable_scheduleCallback=function(G,Q,rt){var vt=n.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?vt+rt:vt):rt=vt,G){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=rt+O,G={id:v++,callback:Q,priorityLevel:G,startTime:rt,expirationTime:O,sortIndex:-1},rt>vt?(G.sortIndex=rt,i(m,G),o(h)===null&&G===o(m)&&(R?(A(W),W=-1):R=!0,Dt(L,rt-vt))):(G.sortIndex=O,i(h,G),C||S||(C=!0,Z())),G},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(G){var Q=x;return function(){var rt=x;x=Q;try{return G.apply(this,arguments)}finally{x=rt}}}}(If)),If}var vg;function d5(){return vg||(vg=1,Jf.exports=f5()),Jf.exports}var td={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function h5(){if(yg)return jn;yg=1;var n=Bu();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:m,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(h,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(h,m,null,v)},jn.flushSync=function(h){var m=d.T,v=s.p;try{if(d.T=null,s.p=2,h)return h()}finally{d.T=m,s.p=v,s.d.f()}},jn.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(h,m))},jn.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},jn.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:S}):v==="script"&&s.d.X(h,{crossOrigin:b,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},jn.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);s.d.M(h,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(h)},jn.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin);s.d.L(h,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},jn.preloadModule=function(h,m){if(typeof h=="string")if(m){var v=p(m.as,m.crossOrigin);s.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(h)},jn.requestFormReset=function(h){s.d.r(h)},jn.unstable_batchedUpdates=function(h,m){return h(m)},jn.useFormState=function(h,m,v){return d.H.useFormState(h,m,v)},jn.useFormStatus=function(){return d.H.useHostTransitionStatus()},jn.version="19.0.0",jn}var bg;function p5(){if(bg)return td.exports;bg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),td.exports=h5(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function m5(){if(xg)return hs;xg=1;var n=d5(),i=Bu(),o=p5();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),S=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case h:return"Fragment";case p:return"Portal";case v:return"Profiler";case m:return"StrictMode";case R:return"Suspense";case k:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case C:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case A:return e=t.displayName||null,e!==null?e:dt(t.type)||"Memo";case D:e=t._payload,t=t._init;try{return dt(t(e))}catch{}}return null}var X=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it=Object.assign,J,Jt;function ge(t){if(J===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);J=e&&e[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+J+t+Jt}var Z=!1;function Dt(t,e){if(!t||Z)return"";Z=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var ut=function(){throw Error()};if(Object.defineProperty(ut.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ut,[])}catch(I){var Y=I}Reflect.construct(t,[],ut)}else{try{ut.call()}catch(I){Y=I}t.call(ut.prototype)}}else{try{throw Error()}catch(I){Y=I}(ut=t())&&typeof ut.catch=="function"&&ut.catch(function(){})}}catch(I){if(I&&Y&&typeof I.stack=="string")return[I.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],w=c[1];if(g&&w){var z=g.split(`
`),V=w.split(`
`);for(l=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;if(r===z.length||l===V.length)for(r=z.length-1,l=V.length-1;1<=r&&0<=l&&z[r]!==V[l];)l--;for(;1<=r&&0<=l;r--,l--)if(z[r]!==V[l]){if(r!==1||l!==1)do if(r--,l--,0>l||z[r]!==V[l]){var et=`
`+z[r].replace(" at new "," at ");return t.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",t.displayName)),et}while(1<=r&&0<=l);break}}}finally{Z=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ge(a):""}function G(t){switch(t.tag){case 26:case 27:case 5:return ge(t.type);case 16:return ge("Lazy");case 13:return ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return t=Dt(t.type,!1),t;case 11:return t=Dt(t.type.render,!1),t;case 1:return t=Dt(t.type,!0),t;default:return""}}function Q(t){try{var e="";do e+=G(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function rt(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function vt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function O(t){if(rt(t)!==t)throw Error(s(188))}function nt(t){var e=t.alternate;if(!e){if(e=rt(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,r=e;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return O(l),t;if(c===r)return O(l),e;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var g=!1,w=l.child;w;){if(w===a){g=!0,a=l,r=c;break}if(w===r){g=!0,r=l,a=c;break}w=w.sibling}if(!g){for(w=c.child;w;){if(w===a){g=!0,a=c,r=l;break}if(w===r){g=!0,r=c,a=l;break}w=w.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function yt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=yt(t),e!==null)return e;t=t.sibling}return null}var wt=Array.isArray,mt=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},lt=[],Tt=-1;function St(t){return{current:t}}function $(t){0>Tt||(t.current=lt[Tt],lt[Tt]=null,Tt--)}function Nt(t,e){Tt++,lt[Tt]=t.current,t.current=e}var bt=St(null),It=St(null),Ht=St(null),ce=St(null);function Oe(t,e){switch(Nt(Ht,e),Nt(It,t),Nt(bt,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Hm(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Hm(t),e=$m(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(bt),Nt(bt,e)}function Vt(){$(bt),$(It),$(Ht)}function Mt(t){t.memoizedState!==null&&Nt(ce,t);var e=bt.current,a=$m(e,t.type);e!==a&&(Nt(It,t),Nt(bt,a))}function Pt(t){It.current===t&&($(bt),$(It)),ce.current===t&&($(ce),ss._currentValue=ht)}var ye=Object.prototype.hasOwnProperty,He=n.unstable_scheduleCallback,be=n.unstable_cancelCallback,ee=n.unstable_shouldYield,De=n.unstable_requestPaint,Yt=n.unstable_now,Ie=n.unstable_getCurrentPriorityLevel,vn=n.unstable_ImmediatePriority,ie=n.unstable_UserBlockingPriority,$t=n.unstable_NormalPriority,j=n.unstable_LowPriority,_=n.unstable_IdlePriority,tt=n.log,ct=n.unstable_setDisableYieldValue,pt=null,st=null;function ft(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(pt,t,void 0,(t.current.flags&128)===128)}catch{}}function jt(t){if(typeof tt=="function"&&ct(t),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(pt,t)}catch{}}var Ct=Math.clz32?Math.clz32:de,zt=Math.log,Et=Math.LN2;function de(t){return t>>>=0,t===0?32:31-(zt(t)/Et|0)|0}var se=128,Se=4194304;function $e(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function tn(t,e){var a=t.pendingLanes;if(a===0)return 0;var r=0,l=t.suspendedLanes,c=t.pingedLanes,g=t.warmLanes;t=t.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~l,a!==0?r=$e(a):(c&=w,c!==0?r=$e(c):t||(g=w&~g,g!==0&&(r=$e(g))))):(w=a&~l,w!==0?r=$e(w):c!==0?r=$e(c):t||(g=a&~g,g!==0&&(r=$e(g)))),r===0?0:e!==0&&e!==r&&(e&l)===0&&(l=r&-r,g=e&-e,l>=g||l===32&&(g&4194176)!==0)?e:r}function xe(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qe(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var t=se;return se<<=1,(se&4194176)===0&&(se=128),t}function Zn(){var t=Se;return Se<<=1,(Se&62914560)===0&&(Se=4194304),t}function en(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function yn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function H(t,e,a,r,l,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,z=t.expirationTimes,V=t.hiddenUpdates;for(a=g&~a;0<a;){var et=31-Ct(a),ut=1<<et;w[et]=0,z[et]=-1;var Y=V[et];if(Y!==null)for(V[et]=null,et=0;et<Y.length;et++){var I=Y[et];I!==null&&(I.lane&=-536870913)}a&=~ut}r!==0&&F(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function F(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Ct(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194218}function U(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-Ct(a),l=1<<r;l&e|t[r]&e&&(t[r]|=e),a&=~l}}function K(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function gt(){var t=mt.p;return t!==0?t:(t=window.event,t===void 0?32:og(t.type))}function Rt(t,e){var a=mt.p;try{return mt.p=t,e()}finally{mt.p=a}}var xt=Math.random().toString(36).slice(2),kt="__reactFiber$"+xt,Ut="__reactProps$"+xt,Xt="__reactContainer$"+xt,fe="__reactEvents$"+xt,Ge="__reactListeners$"+xt,nn="__reactHandles$"+xt,Be="__reactResources$"+xt,ne="__reactMarker$"+xt;function Zt(t){delete t[kt],delete t[Ut],delete t[fe],delete t[Ge],delete t[nn]}function he(t){var e=t[kt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Xt]||a[kt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Gm(t);t!==null;){if(a=t[kt])return a;t=Gm(t)}return e}t=a,a=t.parentNode}return null}function ve(t){if(t=t[kt]||t[Xt]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Kt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ne(t){var e=t[Be];return e||(e=t[Be]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Qt(t){t[ne]=!0}var Xe=new Set,Wn={};function Cn(t,e){dn(t,e),dn(t+"Capture",e)}function dn(t,e){for(Wn[t]=e,t=0;t<e.length;t++)Xe.add(e[t])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sa={},ci={};function Sr(t){return ye.call(ci,t)?!0:ye.call(Sa,t)?!1:ma.test(t)?ci[t]=!0:(Sa[t]=!0,!1)}function fi(t,e,a){if(Sr(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Ua(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Le(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}function re(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bn(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vn(t){var e=bn(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pn(t){t._valueTracker||(t._valueTracker=Vn(t))}function di(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=bn(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function Jn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function Me(t){return t.replace(In,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Dn(t,e,a,r,l,c,g,w){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+re(e)):t.value!==""+re(e)&&(t.value=""+re(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?ta(t,g,re(e)):a!=null?ta(t,g,re(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+re(w):t.removeAttribute("name")}function hi(t,e,a,r,l,c,g,w){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+re(a):"",e=e!=null?""+re(e):a,w||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=w?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function ta(t,e,a){e==="number"&&Jn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Un(t,e,a,r){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+re(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Bn(t,e,a){if(e!=null&&(e=""+re(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+re(a):""}function Hn(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=re(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function An(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function le(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||Ea.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function $n(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var l in e)r=e[l],e.hasOwnProperty(l)&&a[l]!==r&&le(t,l,r)}else for(var c in e)e.hasOwnProperty(c)&&le(t,c,e[c])}function qi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ha=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(t){return Ha.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Yi=null;function Gi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Aa=null,Ta=null;function Er(t){var e=ve(t);if(e&&(t=e.stateNode)){var a=t[Ut]||null;t:switch(t=e.stateNode,e.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var l=r[Ut]||null;if(!l)throw Error(s(90));Dn(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&di(r)}break t;case"textarea":Bn(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Un(t,!!a.multiple,e,!1)}}}var Wu=!1;function J0(t,e,a){if(Wu)return t(e,a);Wu=!0;try{var r=t(e);return r}finally{if(Wu=!1,(Aa!==null||Ta!==null)&&(_l(),Aa&&(e=Aa,t=Ta,Ta=Aa=null,Er(e),t)))for(e=0;e<t.length;e++)Er(t[e])}}function wo(t,e){var a=t.stateNode;if(a===null)return null;var r=a[Ut]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var Ju=!1;if(Ke)try{var So={};Object.defineProperty(So,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Ju=!1}var mi=null,Iu=null,el=null;function I0(){if(el)return el;var t,e=Iu,a=e.length,r,l="value"in mi?mi.value:mi.textContent,c=l.length;for(t=0;t<a&&e[t]===l[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===l[c-r];r++);return el=l.slice(t,1<r?1-r:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function th(){return!1}function Nn(t){function e(a,r,l,c,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(c):c[w]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?al:th,this.isPropagationStopped=th,this}return it(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Nn(Xi),Eo=it({},Xi,{view:0,detail:0}),sb=Nn(Eo),tc,ec,Co,rl=it({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(tc=t.screenX-Co.screenX,ec=t.screenY-Co.screenY):ec=tc=0,Co=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),eh=Nn(rl),lb=it({},rl,{dataTransfer:0}),ub=Nn(lb),cb=it({},Eo,{relatedTarget:0}),nc=Nn(cb),fb=it({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),db=Nn(fb),hb=it({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pb=Nn(hb),mb=it({},Xi,{data:0}),nh=Nn(mb),gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yb[t])?!!e[t]:!1}function ac(){return bb}var xb=it({},Eo,{key:function(t){if(t.key){var e=gb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wb=Nn(xb),Sb=it({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Nn(Sb),Eb=it({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),Cb=Nn(Eb),Ab=it({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tb=Nn(Ab),jb=it({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zb=Nn(jb),Rb=it({},Xi,{newState:0,oldState:0}),Mb=Nn(Rb),kb=[9,13,27,32],ic=Ke&&"CompositionEvent"in window,Ao=null;Ke&&"documentMode"in document&&(Ao=document.documentMode);var Ob=Ke&&"TextEvent"in window&&!Ao,ih=Ke&&(!ic||Ao&&8<Ao&&11>=Ao),rh=" ",oh=!1;function sh(t,e){switch(t){case"keyup":return kb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function Db(t,e){switch(t){case"compositionend":return lh(e);case"keypress":return e.which!==32?null:(oh=!0,rh);case"textInput":return t=e.data,t===rh&&oh?null:t;default:return null}}function Bb(t,e){if(Cr)return t==="compositionend"||!ic&&sh(t,e)?(t=I0(),el=Iu=mi=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ih&&e.locale!=="ko"?null:e.data;default:return null}}var Nb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nb[t.type]:e==="textarea"}function ch(t,e,a,r){Aa?Ta?Ta.push(r):Ta=[r]:Aa=r,e=$l(e,"onChange"),0<e.length&&(a=new il("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var To=null,jo=null;function Lb(t){Lm(t,0)}function ol(t){var e=Kt(t);if(di(e))return t}function fh(t,e){if(t==="change")return e}var dh=!1;if(Ke){var rc;if(Ke){var oc="oninput"in document;if(!oc){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),oc=typeof hh.oninput=="function"}rc=oc}else rc=!1;dh=rc&&(!document.documentMode||9<document.documentMode)}function ph(){To&&(To.detachEvent("onpropertychange",mh),jo=To=null)}function mh(t){if(t.propertyName==="value"&&ol(jo)){var e=[];ch(e,jo,t,Gi(t)),J0(Lb,e)}}function _b(t,e,a){t==="focusin"?(ph(),To=e,jo=a,To.attachEvent("onpropertychange",mh)):t==="focusout"&&ph()}function Vb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(jo)}function Pb(t,e){if(t==="click")return ol(e)}function Ub(t,e){if(t==="input"||t==="change")return ol(e)}function Hb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Hb;function zo(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!ye.call(e,l)||!qn(t[l],e[l]))return!1}return!0}function gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vh(t,e){var a=gh(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gh(a)}}function yh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Jn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Jn(t.document)}return e}function sc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $b(t,e){var a=bh(e);e=t.focusedElem;var r=t.selectionRange;if(a!==e&&e&&e.ownerDocument&&yh(e.ownerDocument.documentElement,e)){if(r!==null&&sc(e)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(a,e.value.length);else if(a=(t=e.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var l=e.textContent.length,c=Math.min(r.start,l);r=r.end===void 0?c:Math.min(r.end,l),!a.extend&&c>r&&(l=r,r=c,c=l),l=vh(e,c);var g=vh(e,r);l&&g&&(a.rangeCount!==1||a.anchorNode!==l.node||a.anchorOffset!==l.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),a.removeAllRanges(),c>r?(a.addRange(t),a.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),a.addRange(t)))}}for(t=[],a=e;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)a=t[e],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var qb=Ke&&"documentMode"in document&&11>=document.documentMode,Ar=null,lc=null,Ro=null,uc=!1;function xh(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||Ar==null||Ar!==Jn(r)||(r=Ar,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&zo(Ro,r)||(Ro=r,r=$l(lc,"onSelect"),0<r.length&&(e=new il("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=Ar)))}function Ki(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Tr={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionrun:Ki("Transition","TransitionRun"),transitionstart:Ki("Transition","TransitionStart"),transitioncancel:Ki("Transition","TransitionCancel"),transitionend:Ki("Transition","TransitionEnd")},cc={},wh={};Ke&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Qi(t){if(cc[t])return cc[t];if(!Tr[t])return t;var e=Tr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in wh)return cc[t]=e[a];return t}var Sh=Qi("animationend"),Eh=Qi("animationiteration"),Ch=Qi("animationstart"),Yb=Qi("transitionrun"),Gb=Qi("transitionstart"),Xb=Qi("transitioncancel"),Ah=Qi("transitionend"),Th=new Map,jh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ga(t,e){Th.set(t,e),Cn(e,[t])}var ea=[],jr=0,fc=0;function sl(){for(var t=jr,e=fc=jr=0;e<t;){var a=ea[e];ea[e++]=null;var r=ea[e];ea[e++]=null;var l=ea[e];ea[e++]=null;var c=ea[e];if(ea[e++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&zh(a,l,c)}}function ll(t,e,a,r){ea[jr++]=t,ea[jr++]=e,ea[jr++]=a,ea[jr++]=r,fc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function dc(t,e,a,r){return ll(t,e,a,r),ul(t)}function gi(t,e){return ll(t,null,null,e),ul(t)}function zh(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;l&&e!==null&&t.tag===3&&(c=t.stateNode,l=31-Ct(a),c=c.hiddenUpdates,t=c[l],t===null?c[l]=[e]:t.push(e),e.lane=a|536870912)}function ul(t){if(50<ts)throw ts=0,bf=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var zr={},Rh=new WeakMap;function na(t,e){if(typeof t=="object"&&t!==null){var a=Rh.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Q(e)},Rh.set(t,e),e)}return{value:t,source:e,stack:Q(e)}}var Rr=[],Mr=0,cl=null,fl=0,aa=[],ia=0,Fi=null,$a=1,qa="";function Zi(t,e){Rr[Mr++]=fl,Rr[Mr++]=cl,cl=t,fl=e}function Mh(t,e,a){aa[ia++]=$a,aa[ia++]=qa,aa[ia++]=Fi,Fi=t;var r=$a;t=qa;var l=32-Ct(r)-1;r&=~(1<<l),a+=1;var c=32-Ct(e)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,$a=1<<32-Ct(e)+l|a<<l|r,qa=c+t}else $a=1<<c|a<<l|r,qa=t}function hc(t){t.return!==null&&(Zi(t,1),Mh(t,1,0))}function pc(t){for(;t===cl;)cl=Rr[--Mr],Rr[Mr]=null,fl=Rr[--Mr],Rr[Mr]=null;for(;t===Fi;)Fi=aa[--ia],aa[ia]=null,qa=aa[--ia],aa[ia]=null,$a=aa[--ia],aa[ia]=null}var Mn=null,xn=null,pe=!1,va=null,ja=!1,mc=Error(s(519));function Wi(t){var e=Error(s(418,""));throw Oo(na(e,t)),mc}function kh(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[kt]=t,e[Ut]=r,a){case"dialog":oe("cancel",e),oe("close",e);break;case"iframe":case"object":case"embed":oe("load",e);break;case"video":case"audio":for(a=0;a<ns.length;a++)oe(ns[a],e);break;case"source":oe("error",e);break;case"img":case"image":case"link":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"input":oe("invalid",e),hi(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Pn(e);break;case"select":oe("invalid",e);break;case"textarea":oe("invalid",e),Hn(e,r.value,r.defaultValue,r.children),Pn(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||Um(e.textContent,a)?(r.popover!=null&&(oe("beforetoggle",e),oe("toggle",e)),r.onScroll!=null&&oe("scroll",e),r.onScrollEnd!=null&&oe("scrollend",e),r.onClick!=null&&(e.onclick=ql),e=!0):e=!1,e||Wi(t)}function Oh(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 3:case 27:ja=!0;return;case 5:case 13:ja=!1;return;default:Mn=Mn.return}}function Mo(t){if(t!==Mn)return!1;if(!pe)return Oh(t),pe=!0,!1;var e=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lf(t.type,t.memoizedProps)),a=!a),a&&(e=!0),e&&xn&&Wi(t),Oh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){xn=ba(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}xn=null}}else xn=Mn?ba(t.stateNode.nextSibling):null;return!0}function ko(){xn=Mn=null,pe=!1}function Oo(t){va===null?va=[t]:va.push(t)}var Do=Error(s(460)),Dh=Error(s(474)),gc={then:function(){}};function Bh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dl(){}function Nh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(dl,dl),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Do?Error(s(483)):t;default:if(typeof e.status=="string")e.then(dl,dl);else{if(t=Te,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Do?Error(s(483)):t}throw Bo=e,Do}}var Bo=null;function Lh(){if(Bo===null)throw Error(s(459));var t=Bo;return Bo=null,t}var kr=null,No=0;function hl(t){var e=No;return No+=1,kr===null&&(kr=[]),Nh(kr,t,e)}function Lo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pl(t,e){throw e.$$typeof===f?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function _h(t){var e=t._init;return e(t._payload)}function Vh(t){function e(P,N){if(t){var q=P.deletions;q===null?(P.deletions=[N],P.flags|=16):q.push(N)}}function a(P,N){if(!t)return null;for(;N!==null;)e(P,N),N=N.sibling;return null}function r(P){for(var N=new Map;P!==null;)P.key!==null?N.set(P.key,P):N.set(P.index,P),P=P.sibling;return N}function l(P,N){return P=zi(P,N),P.index=0,P.sibling=null,P}function c(P,N,q){return P.index=q,t?(q=P.alternate,q!==null?(q=q.index,q<N?(P.flags|=33554434,N):q):(P.flags|=33554434,N)):(P.flags|=1048576,N)}function g(P){return t&&P.alternate===null&&(P.flags|=33554434),P}function w(P,N,q,at){return N===null||N.tag!==6?(N=ff(q,P.mode,at),N.return=P,N):(N=l(N,q),N.return=P,N)}function z(P,N,q,at){var At=q.type;return At===h?et(P,N,q.props.children,at,q.key):N!==null&&(N.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===D&&_h(At)===N.type)?(N=l(N,q.props),Lo(N,q),N.return=P,N):(N=Ol(q.type,q.key,q.props,null,P.mode,at),Lo(N,q),N.return=P,N)}function V(P,N,q,at){return N===null||N.tag!==4||N.stateNode.containerInfo!==q.containerInfo||N.stateNode.implementation!==q.implementation?(N=df(q,P.mode,at),N.return=P,N):(N=l(N,q.children||[]),N.return=P,N)}function et(P,N,q,at,At){return N===null||N.tag!==7?(N=sr(q,P.mode,at,At),N.return=P,N):(N=l(N,q),N.return=P,N)}function ut(P,N,q){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=ff(""+N,P.mode,q),N.return=P,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case d:return q=Ol(N.type,N.key,N.props,null,P.mode,q),Lo(q,N),q.return=P,q;case p:return N=df(N,P.mode,q),N.return=P,N;case D:var at=N._init;return N=at(N._payload),ut(P,N,q)}if(wt(N)||W(N))return N=sr(N,P.mode,q,null),N.return=P,N;if(typeof N.then=="function")return ut(P,hl(N),q);if(N.$$typeof===S)return ut(P,Rl(P,N),q);pl(P,N)}return null}function Y(P,N,q,at){var At=N!==null?N.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return At!==null?null:w(P,N,""+q,at);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return q.key===At?z(P,N,q,at):null;case p:return q.key===At?V(P,N,q,at):null;case D:return At=q._init,q=At(q._payload),Y(P,N,q,at)}if(wt(q)||W(q))return At!==null?null:et(P,N,q,at,null);if(typeof q.then=="function")return Y(P,N,hl(q),at);if(q.$$typeof===S)return Y(P,N,Rl(P,q),at);pl(P,q)}return null}function I(P,N,q,at,At){if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return P=P.get(q)||null,w(N,P,""+at,At);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case d:return P=P.get(at.key===null?q:at.key)||null,z(N,P,at,At);case p:return P=P.get(at.key===null?q:at.key)||null,V(N,P,at,At);case D:var te=at._init;return at=te(at._payload),I(P,N,q,at,At)}if(wt(at)||W(at))return P=P.get(q)||null,et(N,P,at,At,null);if(typeof at.then=="function")return I(P,N,q,hl(at),At);if(at.$$typeof===S)return I(P,N,q,Rl(N,at),At);pl(N,at)}return null}function Ot(P,N,q,at){for(var At=null,te=null,Bt=N,Lt=N=0,mn=null;Bt!==null&&Lt<q.length;Lt++){Bt.index>Lt?(mn=Bt,Bt=null):mn=Bt.sibling;var me=Y(P,Bt,q[Lt],at);if(me===null){Bt===null&&(Bt=mn);break}t&&Bt&&me.alternate===null&&e(P,Bt),N=c(me,N,Lt),te===null?At=me:te.sibling=me,te=me,Bt=mn}if(Lt===q.length)return a(P,Bt),pe&&Zi(P,Lt),At;if(Bt===null){for(;Lt<q.length;Lt++)Bt=ut(P,q[Lt],at),Bt!==null&&(N=c(Bt,N,Lt),te===null?At=Bt:te.sibling=Bt,te=Bt);return pe&&Zi(P,Lt),At}for(Bt=r(Bt);Lt<q.length;Lt++)mn=I(Bt,P,Lt,q[Lt],at),mn!==null&&(t&&mn.alternate!==null&&Bt.delete(mn.key===null?Lt:mn.key),N=c(mn,N,Lt),te===null?At=mn:te.sibling=mn,te=mn);return t&&Bt.forEach(function(Ni){return e(P,Ni)}),pe&&Zi(P,Lt),At}function qt(P,N,q,at){if(q==null)throw Error(s(151));for(var At=null,te=null,Bt=N,Lt=N=0,mn=null,me=q.next();Bt!==null&&!me.done;Lt++,me=q.next()){Bt.index>Lt?(mn=Bt,Bt=null):mn=Bt.sibling;var Ni=Y(P,Bt,me.value,at);if(Ni===null){Bt===null&&(Bt=mn);break}t&&Bt&&Ni.alternate===null&&e(P,Bt),N=c(Ni,N,Lt),te===null?At=Ni:te.sibling=Ni,te=Ni,Bt=mn}if(me.done)return a(P,Bt),pe&&Zi(P,Lt),At;if(Bt===null){for(;!me.done;Lt++,me=q.next())me=ut(P,me.value,at),me!==null&&(N=c(me,N,Lt),te===null?At=me:te.sibling=me,te=me);return pe&&Zi(P,Lt),At}for(Bt=r(Bt);!me.done;Lt++,me=q.next())me=I(Bt,P,Lt,me.value,at),me!==null&&(t&&me.alternate!==null&&Bt.delete(me.key===null?Lt:me.key),N=c(me,N,Lt),te===null?At=me:te.sibling=me,te=me);return t&&Bt.forEach(function(o5){return e(P,o5)}),pe&&Zi(P,Lt),At}function Ze(P,N,q,at){if(typeof q=="object"&&q!==null&&q.type===h&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case d:t:{for(var At=q.key;N!==null;){if(N.key===At){if(At=q.type,At===h){if(N.tag===7){a(P,N.sibling),at=l(N,q.props.children),at.return=P,P=at;break t}}else if(N.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===D&&_h(At)===N.type){a(P,N.sibling),at=l(N,q.props),Lo(at,q),at.return=P,P=at;break t}a(P,N);break}else e(P,N);N=N.sibling}q.type===h?(at=sr(q.props.children,P.mode,at,q.key),at.return=P,P=at):(at=Ol(q.type,q.key,q.props,null,P.mode,at),Lo(at,q),at.return=P,P=at)}return g(P);case p:t:{for(At=q.key;N!==null;){if(N.key===At)if(N.tag===4&&N.stateNode.containerInfo===q.containerInfo&&N.stateNode.implementation===q.implementation){a(P,N.sibling),at=l(N,q.children||[]),at.return=P,P=at;break t}else{a(P,N);break}else e(P,N);N=N.sibling}at=df(q,P.mode,at),at.return=P,P=at}return g(P);case D:return At=q._init,q=At(q._payload),Ze(P,N,q,at)}if(wt(q))return Ot(P,N,q,at);if(W(q)){if(At=W(q),typeof At!="function")throw Error(s(150));return q=At.call(q),qt(P,N,q,at)}if(typeof q.then=="function")return Ze(P,N,hl(q),at);if(q.$$typeof===S)return Ze(P,N,Rl(P,q),at);pl(P,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,N!==null&&N.tag===6?(a(P,N.sibling),at=l(N,q),at.return=P,P=at):(a(P,N),at=ff(q,P.mode,at),at.return=P,P=at),g(P)):a(P,N)}return function(P,N,q,at){try{No=0;var At=Ze(P,N,q,at);return kr=null,At}catch(Bt){if(Bt===Do)throw Bt;var te=la(29,Bt,null,P.mode);return te.lanes=at,te.return=P,te}finally{}}}var Ji=Vh(!0),Ph=Vh(!1),Or=St(null),ml=St(0);function Uh(t,e){t=ti,Nt(ml,t),Nt(Or,e),ti=t|e.baseLanes}function vc(){Nt(ml,ti),Nt(Or,Or.current)}function yc(){ti=ml.current,$(Or),$(ml)}var ra=St(null),za=null;function vi(t){var e=t.alternate;Nt(cn,cn.current&1),Nt(ra,t),za===null&&(e===null||Or.current!==null||e.memoizedState!==null)&&(za=t)}function Hh(t){if(t.tag===22){if(Nt(cn,cn.current),Nt(ra,t),za===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(za=t)}}else yi()}function yi(){Nt(cn,cn.current),Nt(ra,ra.current)}function Ya(t){$(ra),za===t&&(za=null),$(cn)}var cn=St(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Qb=n.unstable_scheduleCallback,Fb=n.unstable_NormalPriority,fn={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new Kb,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&Qb(Fb,function(){t.controller.abort()})}var Vo=null,xc=0,Dr=0,Br=null;function Zb(t,e){if(Vo===null){var a=Vo=[];xc=0,Dr=jf(),Br={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xc++,e.then($h,$h),e}function $h(){if(--xc===0&&Vo!==null){Br!==null&&(Br.status="fulfilled");var t=Vo;Vo=null,Dr=0,Br=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Wb(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var qh=X.S;X.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Zb(t,e),qh!==null&&qh(t,e)};var Ii=St(null);function wc(){var t=Ii.current;return t!==null?t:Te.pooledCache}function vl(t,e){e===null?Nt(Ii,Ii.current):Nt(Ii,e.pool)}function Yh(){var t=wc();return t===null?null:{parent:fn._currentValue,pool:t}}var bi=0,Wt=null,Ee=null,on=null,yl=!1,Nr=!1,tr=!1,bl=0,Po=0,Lr=null,Jb=0;function an(){throw Error(s(321))}function Sc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!qn(t[a],e[a]))return!1;return!0}function Ec(t,e,a,r,l,c){return bi=c,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,X.H=t===null||t.memoizedState===null?er:xi,tr=!1,c=a(r,l),tr=!1,Nr&&(c=Xh(e,a,r,l)),Gh(t),c}function Gh(t){X.H=Ra;var e=Ee!==null&&Ee.next!==null;if(bi=0,on=Ee=Wt=null,yl=!1,Po=0,Lr=null,e)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&zl(t)&&(hn=!0))}function Xh(t,e,a,r){Wt=t;var l=0;do{if(Nr&&(Lr=null),Po=0,Nr=!1,25<=l)throw Error(s(301));if(l+=1,on=Ee=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}X.H=nr,c=e(a,r)}while(Nr);return c}function Ib(){var t=X.H,e=t.useState()[0];return e=typeof e.then=="function"?Uo(e):e,t=t.useState()[0],(Ee!==null?Ee.memoizedState:null)!==t&&(Wt.flags|=1024),e}function Cc(){var t=bl!==0;return bl=0,t}function Ac(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Tc(t){if(yl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yl=!1}bi=0,on=Ee=Wt=null,Nr=!1,Po=bl=0,Lr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Wt.memoizedState=on=t:on=on.next=t,on}function sn(){if(Ee===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=on===null?Wt.memoizedState:on.next;if(e!==null)on=e,Ee=t;else{if(t===null)throw Wt.alternate===null?Error(s(467)):Error(s(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},on===null?Wt.memoizedState=on=t:on=on.next=t}return on}var xl;xl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Uo(t){var e=Po;return Po+=1,Lr===null&&(Lr=[]),t=Nh(Lr,t,e),e=Wt,(on===null?e.memoizedState:on.next)===null&&(e=e.alternate,X.H=e===null||e.memoizedState===null?er:xi),t}function wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uo(t);if(t.$$typeof===S)return Tn(t)}throw Error(s(438,String(t)))}function jc(t){var e=null,a=Wt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=Wt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=xl(),Wt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=L;return e.index++,a}function Ga(t,e){return typeof e=="function"?e(t):e}function Sl(t){var e=sn();return zc(e,Ee,t)}function zc(t,e,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var w=g=null,z=null,V=e,et=!1;do{var ut=V.lane&-536870913;if(ut!==V.lane?(ue&ut)===ut:(bi&ut)===ut){var Y=V.revertLane;if(Y===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),ut===Dr&&(et=!0);else if((bi&Y)===Y){V=V.next,Y===Dr&&(et=!0);continue}else ut={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},z===null?(w=z=ut,g=c):z=z.next=ut,Wt.lanes|=Y,Ri|=Y;ut=V.action,tr&&a(c,ut),c=V.hasEagerState?V.eagerState:a(c,ut)}else Y={lane:ut,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},z===null?(w=z=Y,g=c):z=z.next=Y,Wt.lanes|=ut,Ri|=ut;V=V.next}while(V!==null&&V!==e);if(z===null?g=c:z.next=w,!qn(c,t.memoizedState)&&(hn=!0,et&&(a=Br,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=z,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Rc(t){var e=sn(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=e.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);qn(c,e.memoizedState)||(hn=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function Kh(t,e,a){var r=Wt,l=sn(),c=pe;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=e();var g=!qn((Ee||l).memoizedState,a);if(g&&(l.memoizedState=a,hn=!0),l=l.queue,Oc(Zh.bind(null,r,l,t),[t]),l.getSnapshot!==e||g||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,_r(9,Fh.bind(null,r,l,a,e),{destroy:void 0},null),Te===null)throw Error(s(349));c||(bi&60)!==0||Qh(r,e,a)}return a}function Qh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Wt.updateQueue,e===null?(e=xl(),Wt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Fh(t,e,a,r){e.value=a,e.getSnapshot=r,Wh(e)&&Jh(t)}function Zh(t,e,a){return a(function(){Wh(e)&&Jh(t)})}function Wh(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!qn(t,a)}catch{return!0}}function Jh(t){var e=gi(t,2);e!==null&&kn(e,t,2)}function Mc(t){var e=Ln();if(typeof t=="function"){var a=t;if(t=a(),tr){jt(!0);try{a()}finally{jt(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e}function Ih(t,e,a,r){return t.baseState=a,zc(t,Ee,typeof r=="function"?r:Ga)}function tx(t,e,a,r,l){if(Al(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};X.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,tp(e,c)):(c.next=a.next,e.pending=a.next=c)}}function tp(t,e){var a=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=X.T,g={};X.T=g;try{var w=a(l,r),z=X.S;z!==null&&z(g,w),ep(t,e,w)}catch(V){kc(t,e,V)}finally{X.T=c}}else try{c=a(l,r),ep(t,e,c)}catch(V){kc(t,e,V)}}function ep(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){np(t,e,r)},function(r){return kc(t,e,r)}):np(t,e,a)}function np(t,e,a){e.status="fulfilled",e.value=a,ap(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,tp(t,a)))}function kc(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,ap(e),e=e.next;while(e!==r)}t.action=null}function ap(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ip(t,e){return e}function rp(t,e){if(pe){var a=Te.formState;if(a!==null){t:{var r=Wt;if(pe){if(xn){e:{for(var l=xn,c=ja;l.nodeType!==8;){if(!c){l=null;break e}if(l=ba(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){xn=ba(l.nextSibling),r=l.data==="F!";break t}}Wi(r)}r=!1}r&&(e=a[0])}}return a=Ln(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ip,lastRenderedState:e},a.queue=r,a=Ep.bind(null,Wt,r),r.dispatch=a,r=Mc(!1),c=_c.bind(null,Wt,!1,r.queue),r=Ln(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,a=tx.bind(null,Wt,l,c,a),l.dispatch=a,r.memoizedState=t,[e,a,!1]}function op(t){var e=sn();return sp(e,Ee,t)}function sp(t,e,a){e=zc(t,e,ip)[0],t=Sl(Ga)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Uo(e):e;var r=sn(),l=r.queue,c=l.dispatch;return a!==r.memoizedState&&(Wt.flags|=2048,_r(9,ex.bind(null,l,a),{destroy:void 0},null)),[e,c,t]}function ex(t,e){t.action=e}function lp(t){var e=sn(),a=Ee;if(a!==null)return sp(e,a,t);sn(),e=e.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function _r(t,e,a,r){return t={tag:t,create:e,inst:a,deps:r,next:null},e=Wt.updateQueue,e===null&&(e=xl(),Wt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function up(){return sn().memoizedState}function El(t,e,a,r){var l=Ln();Wt.flags|=t,l.memoizedState=_r(1|e,a,{destroy:void 0},r===void 0?null:r)}function Cl(t,e,a,r){var l=sn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ee!==null&&r!==null&&Sc(r,Ee.memoizedState.deps)?l.memoizedState=_r(e,a,c,r):(Wt.flags|=t,l.memoizedState=_r(1|e,a,c,r))}function cp(t,e){El(8390656,8,t,e)}function Oc(t,e){Cl(2048,8,t,e)}function fp(t,e){return Cl(4,2,t,e)}function dp(t,e){return Cl(4,4,t,e)}function hp(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pp(t,e,a){a=a!=null?a.concat([t]):null,Cl(4,4,hp.bind(null,e,t),a)}function Dc(){}function mp(t,e){var a=sn();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Sc(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function gp(t,e){var a=sn();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Sc(e,r[1]))return r[0];if(r=t(),tr){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[r,e],r}function Bc(t,e,a){return a===void 0||(bi&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=ym(),Wt.lanes|=t,Ri|=t,a)}function vp(t,e,a,r){return qn(a,e)?a:Or.current!==null?(t=Bc(t,a,r),qn(t,e)||(hn=!0),t):(bi&42)===0?(hn=!0,t.memoizedState=a):(t=ym(),Wt.lanes|=t,Ri|=t,e)}function yp(t,e,a,r,l){var c=mt.p;mt.p=c!==0&&8>c?c:8;var g=X.T,w={};X.T=w,_c(t,!1,e,a);try{var z=l(),V=X.S;if(V!==null&&V(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var et=Wb(z,r);Ho(t,e,et,Kn(t))}else Ho(t,e,r,Kn(t))}catch(ut){Ho(t,e,{then:function(){},status:"rejected",reason:ut},Kn())}finally{mt.p=c,X.T=g}}function nx(){}function Nc(t,e,a,r){if(t.tag!==5)throw Error(s(476));var l=bp(t).queue;yp(t,l,e,ht,a===null?nx:function(){return xp(t),a(r)})}function bp(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:ht},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function xp(t){var e=bp(t).next.queue;Ho(t,e,{},Kn())}function Lc(){return Tn(ss)}function wp(){return sn().memoizedState}function Sp(){return sn().memoizedState}function ax(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Kn();t=Ei(a);var r=Ci(e,t,a);r!==null&&(kn(r,e,a),Yo(r,e,a)),e={cache:bc()},t.payload=e;return}e=e.return}}function ix(t,e,a){var r=Kn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?Cp(e,a):(a=dc(t,e,a,r),a!==null&&(kn(a,t,r),Ap(a,e,r)))}function Ep(t,e,a){var r=Kn();Ho(t,e,a,r)}function Ho(t,e,a,r){var l={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))Cp(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,w=c(g,a);if(l.hasEagerState=!0,l.eagerState=w,qn(w,g))return ll(t,e,l,0),Te===null&&sl(),!1}catch{}finally{}if(a=dc(t,e,l,r),a!==null)return kn(a,t,r),Ap(a,e,r),!0}return!1}function _c(t,e,a,r){if(r={lane:2,revertLane:jf(),action:r,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(e)throw Error(s(479))}else e=dc(t,a,r,2),e!==null&&kn(e,t,2)}function Al(t){var e=t.alternate;return t===Wt||e!==null&&e===Wt}function Cp(t,e){Nr=yl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Ap(t,e,a){if((a&4194176)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,U(t,a)}}var Ra={readContext:Tn,use:wl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an};Ra.useCacheRefresh=an,Ra.useMemoCache=an,Ra.useHostTransitionStatus=an,Ra.useFormState=an,Ra.useActionState=an,Ra.useOptimistic=an;var er={readContext:Tn,use:wl,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:cp,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,El(4194308,4,hp.bind(null,e,t),a)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){El(4,2,t,e)},useMemo:function(t,e){var a=Ln();e=e===void 0?null:e;var r=t();if(tr){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=Ln();if(a!==void 0){var l=a(e);if(tr){jt(!0);try{a(e)}finally{jt(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=ix.bind(null,Wt,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:function(t){t=Mc(t);var e=t.queue,a=Ep.bind(null,Wt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Dc,useDeferredValue:function(t,e){var a=Ln();return Bc(a,t,e)},useTransition:function(){var t=Mc(!1);return t=yp.bind(null,Wt,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=Wt,l=Ln();if(pe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),Te===null)throw Error(s(349));(ue&60)!==0||Qh(r,e,a)}l.memoizedState=a;var c={value:a,getSnapshot:e};return l.queue=c,cp(Zh.bind(null,r,c,t),[t]),r.flags|=2048,_r(9,Fh.bind(null,r,c,a,e),{destroy:void 0},null),a},useId:function(){var t=Ln(),e=Te.identifierPrefix;if(pe){var a=qa,r=$a;a=(r&~(1<<32-Ct(r)-1)).toString(32)+a,e=":"+e+"R"+a,a=bl++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=Jb++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Ln().memoizedState=ax.bind(null,Wt)}};er.useMemoCache=jc,er.useHostTransitionStatus=Lc,er.useFormState=rp,er.useActionState=rp,er.useOptimistic=function(t){var e=Ln();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=_c.bind(null,Wt,!0,a),a.dispatch=e,[t,e]};var xi={readContext:Tn,use:wl,useCallback:mp,useContext:Tn,useEffect:Oc,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:Sl,useRef:up,useState:function(){return Sl(Ga)},useDebugValue:Dc,useDeferredValue:function(t,e){var a=sn();return vp(a,Ee.memoizedState,t,e)},useTransition:function(){var t=Sl(Ga)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:Uo(t),e]},useSyncExternalStore:Kh,useId:wp};xi.useCacheRefresh=Sp,xi.useMemoCache=jc,xi.useHostTransitionStatus=Lc,xi.useFormState=op,xi.useActionState=op,xi.useOptimistic=function(t,e){var a=sn();return Ih(a,Ee,t,e)};var nr={readContext:Tn,use:wl,useCallback:mp,useContext:Tn,useEffect:Oc,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:dp,useMemo:gp,useReducer:Rc,useRef:up,useState:function(){return Rc(Ga)},useDebugValue:Dc,useDeferredValue:function(t,e){var a=sn();return Ee===null?Bc(a,t,e):vp(a,Ee.memoizedState,t,e)},useTransition:function(){var t=Rc(Ga)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:Uo(t),e]},useSyncExternalStore:Kh,useId:wp};nr.useCacheRefresh=Sp,nr.useMemoCache=jc,nr.useHostTransitionStatus=Lc,nr.useFormState=lp,nr.useActionState=lp,nr.useOptimistic=function(t,e){var a=sn();return Ee!==null?Ih(a,Ee,t,e):(a.baseState=t,[t,a.queue.dispatch])};function Vc(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:it({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pc={isMounted:function(t){return(t=t._reactInternals)?rt(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var r=Kn(),l=Ei(r);l.payload=e,a!=null&&(l.callback=a),e=Ci(t,l,r),e!==null&&(kn(e,t,r),Yo(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=Kn(),l=Ei(r);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=Ci(t,l,r),e!==null&&(kn(e,t,r),Yo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Kn(),r=Ei(a);r.tag=2,e!=null&&(r.callback=e),e=Ci(t,r,a),e!==null&&(kn(e,t,a),Yo(e,t,a))}};function Tp(t,e,a,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!zo(a,r)||!zo(l,c):!0}function jp(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function ar(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=it({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function zp(t){Tl(t)}function Rp(t){console.error(t)}function Mp(t){Tl(t)}function jl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function kp(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Uc(t,e,a){return a=Ei(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(t,e)},a}function Op(t){return t=Ei(t),t.tag=3,t}function Dp(t,e,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){kp(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){kp(e,a,r),typeof l!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function rx(t,e,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&qo(e,a,l,!0),a=ra.current,a!==null){switch(a.tag){case 13:return za===null?Sf():a.alternate===null&&Fe===0&&(Fe=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===gc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),Cf(t,r,l)),!1;case 22:return a.flags|=65536,r===gc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),Cf(t,r,l)),!1}throw Error(s(435,a.tag))}return Cf(t,r,l),Sf(),!1}if(pe)return e=ra.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==mc&&(t=Error(s(422),{cause:r}),Oo(na(t,a)))):(r!==mc&&(e=Error(s(423),{cause:r}),Oo(na(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=na(r,a),l=Uc(t.stateNode,r,l),ef(t,l),Fe!==4&&(Fe=2)),!1;var c=Error(s(520),{cause:r});if(c=na(c,a),Jo===null?Jo=[c]:Jo.push(c),Fe!==4&&(Fe=2),e===null)return!0;r=na(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Uc(a.stateNode,r,t),ef(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Mi===null||!Mi.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Op(l),Dp(l,t,a,r),ef(a,l),!1}a=a.return}while(a!==null);return!1}var Bp=Error(s(461)),hn=!1;function wn(t,e,a,r){e.child=t===null?Ph(e,null,a,r):Ji(e,t.child,a,r)}function Np(t,e,a,r,l){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var w in r)w!=="ref"&&(g[w]=r[w])}else g=r;return rr(e),r=Ec(t,e,a,g,c,l),w=Cc(),t!==null&&!hn?(Ac(t,e,l),Xa(t,e,l)):(pe&&w&&hc(e),e.flags|=1,wn(t,e,r,l),e.child)}function Lp(t,e,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!cf(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,_p(t,e,c,r,l)):(t=Ol(a.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Fc(t,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(g,r)&&t.ref===e.ref)return Xa(t,e,l)}return e.flags|=1,t=zi(c,r),t.ref=e.ref,t.return=e,e.child=t}function _p(t,e,a,r,l){if(t!==null){var c=t.memoizedProps;if(zo(c,r)&&t.ref===e.ref)if(hn=!1,e.pendingProps=r=c,Fc(t,l))(t.flags&131072)!==0&&(hn=!0);else return e.lanes=t.lanes,Xa(t,e,l)}return Hc(t,e,a,r,l)}function Vp(t,e,a){var r=e.pendingProps,l=r.children,c=(e.stateNode._pendingVisibility&2)!==0,g=t!==null?t.memoizedState:null;if($o(t,e),r.mode==="hidden"||c){if((e.flags&128)!==0){if(r=g!==null?g.baseLanes|a:a,t!==null){for(l=e.child=t.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return Pp(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(e,g!==null?g.cachePool:null),g!==null?Uh(e,g):vc(),Hh(e);else return e.lanes=e.childLanes=536870912,Pp(t,e,g!==null?g.baseLanes|a:a,a)}else g!==null?(vl(e,g.cachePool),Uh(e,g),yi(),e.memoizedState=null):(t!==null&&vl(e,null),vc(),yi());return wn(t,e,l,a),e.child}function Pp(t,e,a,r){var l=wc();return l=l===null?null:{parent:fn._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&vl(e,null),vc(),Hh(e),t!==null&&qo(t,e,r,!0),null}function $o(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=2097664)}}function Hc(t,e,a,r,l){return rr(e),a=Ec(t,e,a,r,void 0,l),r=Cc(),t!==null&&!hn?(Ac(t,e,l),Xa(t,e,l)):(pe&&r&&hc(e),e.flags|=1,wn(t,e,a,l),e.child)}function Up(t,e,a,r,l,c){return rr(e),e.updateQueue=null,a=Xh(e,r,a,l),Gh(t),r=Cc(),t!==null&&!hn?(Ac(t,e,c),Xa(t,e,c)):(pe&&r&&hc(e),e.flags|=1,wn(t,e,a,c),e.child)}function Hp(t,e,a,r,l){if(rr(e),e.stateNode===null){var c=zr,g=a.contextType;typeof g=="object"&&g!==null&&(c=Tn(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Pc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},Ic(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?Tn(g):zr,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Vc(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Pc.enqueueReplaceState(c,c.state,null),Xo(e,r,c,l),Go(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var w=e.memoizedProps,z=ar(a,w);c.props=z;var V=c.context,et=a.contextType;g=zr,typeof et=="object"&&et!==null&&(g=Tn(et));var ut=a.getDerivedStateFromProps;et=typeof ut=="function"||typeof c.getSnapshotBeforeUpdate=="function",w=e.pendingProps!==w,et||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w||V!==g)&&jp(e,c,r,g),Si=!1;var Y=e.memoizedState;c.state=Y,Xo(e,r,c,l),Go(),V=e.memoizedState,w||Y!==V||Si?(typeof ut=="function"&&(Vc(e,a,ut,r),V=e.memoizedState),(z=Si||Tp(e,a,z,r,Y,V,g))?(et||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=V),c.props=r,c.state=V,c.context=g,r=z):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,tf(t,e),g=e.memoizedProps,et=ar(a,g),c.props=et,ut=e.pendingProps,Y=c.context,V=a.contextType,z=zr,typeof V=="object"&&V!==null&&(z=Tn(V)),w=a.getDerivedStateFromProps,(V=typeof w=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==ut||Y!==z)&&jp(e,c,r,z),Si=!1,Y=e.memoizedState,c.state=Y,Xo(e,r,c,l),Go();var I=e.memoizedState;g!==ut||Y!==I||Si||t!==null&&t.dependencies!==null&&zl(t.dependencies)?(typeof w=="function"&&(Vc(e,a,w,r),I=e.memoizedState),(et=Si||Tp(e,a,et,r,Y,I,z)||t!==null&&t.dependencies!==null&&zl(t.dependencies))?(V||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,I,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,I,z)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),c.props=r,c.state=I,c.context=z,r=et):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,$o(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=Ji(e,t.child,null,l),e.child=Ji(e,null,a,l)):wn(t,e,a,l),e.memoizedState=c.state,t=e.child):t=Xa(t,e,l),t}function $p(t,e,a,r){return ko(),e.flags|=256,wn(t,e,a,r),e.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function qc(t){return{baseLanes:t,cachePool:Yh()}}function Yc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ua),t}function qp(t,e,a){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),g&&(l=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(pe){if(l?vi(e):yi(),pe){var w=xn,z;if(z=w){t:{for(z=w,w=ja;z.nodeType!==8;){if(!w){w=null;break t}if(z=ba(z.nextSibling),z===null){w=null;break t}}w=z}w!==null?(e.memoizedState={dehydrated:w,treeContext:Fi!==null?{id:$a,overflow:qa}:null,retryLane:536870912},z=la(18,null,null,0),z.stateNode=w,z.return=e,e.child=z,Mn=e,xn=null,z=!0):z=!1}z||Wi(e)}if(w=e.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?e.lanes=16:e.lanes=536870912,null;Ya(e)}return w=r.children,r=r.fallback,l?(yi(),l=e.mode,w=Xc({mode:"hidden",children:w},l),r=sr(r,l,a,null),w.return=e,r.return=e,w.sibling=r,e.child=w,l=e.child,l.memoizedState=qc(a),l.childLanes=Yc(t,g,a),e.memoizedState=$c,r):(vi(e),Gc(e,w))}if(z=t.memoizedState,z!==null&&(w=z.dehydrated,w!==null)){if(c)e.flags&256?(vi(e),e.flags&=-257,e=Kc(t,e,a)):e.memoizedState!==null?(yi(),e.child=t.child,e.flags|=128,e=null):(yi(),l=r.fallback,w=e.mode,r=Xc({mode:"visible",children:r.children},w),l=sr(l,w,a,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,Ji(e,t.child,null,a),r=e.child,r.memoizedState=qc(a),r.childLanes=Yc(t,g,a),e.memoizedState=$c,e=l);else if(vi(e),w.data==="$!"){if(g=w.nextSibling&&w.nextSibling.dataset,g)var V=g.dgst;g=V,r=Error(s(419)),r.stack="",r.digest=g,Oo({value:r,source:null,stack:null}),e=Kc(t,e,a)}else if(hn||qo(t,e,a,!1),g=(a&t.childLanes)!==0,hn||g){if(g=Te,g!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==z.retryLane)throw z.retryLane=r,gi(t,r),kn(g,t,r),Bp}w.data==="$?"||Sf(),e=Kc(t,e,a)}else w.data==="$?"?(e.flags|=128,e.child=t.child,e=xx.bind(null,t),w._reactRetry=e,e=null):(t=z.treeContext,xn=ba(w.nextSibling),Mn=e,pe=!0,va=null,ja=!1,t!==null&&(aa[ia++]=$a,aa[ia++]=qa,aa[ia++]=Fi,$a=t.id,qa=t.overflow,Fi=e),e=Gc(e,r.children),e.flags|=4096);return e}return l?(yi(),l=r.fallback,w=e.mode,z=t.child,V=z.sibling,r=zi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&31457280,V!==null?l=zi(V,l):(l=sr(l,w,a,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,r=l,l=e.child,w=t.child.memoizedState,w===null?w=qc(a):(z=w.cachePool,z!==null?(V=fn._currentValue,z=z.parent!==V?{parent:V,pool:V}:z):z=Yh(),w={baseLanes:w.baseLanes|a,cachePool:z}),l.memoizedState=w,l.childLanes=Yc(t,g,a),e.memoizedState=$c,r):(vi(e),a=t.child,t=a.sibling,a=zi(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function Gc(t,e){return e=Xc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Xc(t,e){return mm(t,e,0,null)}function Kc(t,e,a){return Ji(e,t.child,null,a),t=Gc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yp(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wc(t.return,e,a)}function Qc(t,e,a,r,l){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=l)}function Gp(t,e,a){var r=e.pendingProps,l=r.revealOrder,c=r.tail;if(wn(t,e,r.children,a),r=cn.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yp(t,a,e);else if(t.tag===19)Yp(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Nt(cn,r),l){case"forwards":for(a=e.child,l=null;a!==null;)t=a.alternate,t!==null&&gl(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Qc(e,!1,l,a,c);break;case"backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&gl(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Qc(e,!0,a,null,c);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xa(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Ri|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(qo(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=zi(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=zi(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Fc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&zl(t)))}function ox(t,e,a){switch(e.tag){case 3:Oe(e,e.stateNode.containerInfo),wi(e,fn,t.memoizedState.cache),ko();break;case 27:case 5:Mt(e);break;case 4:Oe(e,e.stateNode.containerInfo);break;case 10:wi(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(vi(e),e.flags|=128,null):(a&e.child.childLanes)!==0?qp(t,e,a):(vi(e),t=Xa(t,e,a),t!==null?t.sibling:null);vi(e);break;case 19:var l=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(qo(t,e,a,!1),r=(a&e.childLanes)!==0),l){if(r)return Gp(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Nt(cn,cn.current),r)break;return null;case 22:case 23:return e.lanes=0,Vp(t,e,a);case 24:wi(e,fn,t.memoizedState.cache)}return Xa(t,e,a)}function Xp(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)hn=!0;else{if(!Fc(t,a)&&(e.flags&128)===0)return hn=!1,ox(t,e,a);hn=(t.flags&131072)!==0}else hn=!1,pe&&(e.flags&1048576)!==0&&Mh(e,fl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,l=r._init;if(r=l(r._payload),e.type=r,typeof r=="function")cf(r)?(t=ar(r,t),e.tag=1,e=Hp(null,e,r,t,a)):(e.tag=0,e=Hc(null,e,r,t,a));else{if(r!=null){if(l=r.$$typeof,l===C){e.tag=11,e=Np(null,e,r,t,a);break t}else if(l===A){e.tag=14,e=Lp(null,e,r,t,a);break t}}throw e=dt(r)||r,Error(s(306,e,""))}}return e;case 0:return Hc(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,l=ar(r,e.pendingProps),Hp(t,e,r,l,a);case 3:t:{if(Oe(e,e.stateNode.containerInfo),t===null)throw Error(s(387));var c=e.pendingProps;l=e.memoizedState,r=l.element,tf(t,e),Xo(e,c,null,a);var g=e.memoizedState;if(c=g.cache,wi(e,fn,c),c!==l.cache&&Jc(e,[fn],a,!0),Go(),c=g.element,l.isDehydrated)if(l={element:c,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=$p(t,e,c,a);break t}else if(c!==r){r=na(Error(s(424)),e),Oo(r),e=$p(t,e,c,a);break t}else for(xn=ba(e.stateNode.containerInfo.firstChild),Mn=e,pe=!0,va=null,ja=!0,a=Ph(e,null,c,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ko(),c===r){e=Xa(t,e,a);break t}wn(t,e,c,a)}e=e.child}return e;case 26:return $o(t,e),t===null?(a=Fm(e.type,null,e.pendingProps,null))?e.memoizedState=a:pe||(a=e.type,t=e.pendingProps,r=Yl(Ht.current).createElement(a),r[kt]=e,r[Ut]=t,Sn(r,a,t),Qt(r),e.stateNode=r):e.memoizedState=Fm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Mt(e),t===null&&pe&&(r=e.stateNode=Xm(e.type,e.pendingProps,Ht.current),Mn=e,ja=!0,xn=ba(r.firstChild)),r=e.pendingProps.children,t!==null||pe?wn(t,e,r,a):e.child=Ji(e,null,r,a),$o(t,e),e.child;case 5:return t===null&&pe&&((l=r=xn)&&(r=Lx(r,e.type,e.pendingProps,ja),r!==null?(e.stateNode=r,Mn=e,xn=ba(r.firstChild),ja=!1,l=!0):l=!1),l||Wi(e)),Mt(e),l=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Lf(l,c)?r=null:g!==null&&Lf(l,g)&&(e.flags|=32),e.memoizedState!==null&&(l=Ec(t,e,Ib,null,null,a),ss._currentValue=l),$o(t,e),wn(t,e,r,a),e.child;case 6:return t===null&&pe&&((t=a=xn)&&(a=_x(a,e.pendingProps,ja),a!==null?(e.stateNode=a,Mn=e,xn=null,t=!0):t=!1),t||Wi(e)),null;case 13:return qp(t,e,a);case 4:return Oe(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,a):wn(t,e,r,a),e.child;case 11:return Np(t,e,e.type,e.pendingProps,a);case 7:return wn(t,e,e.pendingProps,a),e.child;case 8:return wn(t,e,e.pendingProps.children,a),e.child;case 12:return wn(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,wi(e,e.type,r.value),wn(t,e,r.children,a),e.child;case 9:return l=e.type._context,r=e.pendingProps.children,rr(e),l=Tn(l),r=r(l),e.flags|=1,wn(t,e,r,a),e.child;case 14:return Lp(t,e,e.type,e.pendingProps,a);case 15:return _p(t,e,e.type,e.pendingProps,a);case 19:return Gp(t,e,a);case 22:return Vp(t,e,a);case 24:return rr(e),r=Tn(fn),t===null?(l=wc(),l===null&&(l=Te,c=bc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),e.memoizedState={parent:r,cache:l},Ic(e),wi(e,fn,l)):((t.lanes&a)!==0&&(tf(t,e),Xo(e,null,null,a),Go()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),wi(e,fn,r)):(r=c.cache,wi(e,fn,r),r!==l.cache&&Jc(e,[fn],a,!0))),wn(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}var Zc=St(null),ir=null,Ka=null;function wi(t,e,a){Nt(Zc,e._currentValue),e._currentValue=a}function Qa(t){t._currentValue=Zc.current,$(Zc)}function Wc(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function Jc(t,e,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var w=c;c=l;for(var z=0;z<e.length;z++)if(w.context===e[z]){c.lanes|=a,w=c.alternate,w!==null&&(w.lanes|=a),Wc(c.return,a,t),r||(g=null);break t}c=w.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Wc(g,a,t),g=null}else g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function qo(t,e,a,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var w=l.type;qn(l.pendingProps.value,g.value)||(t!==null?t.push(w):t=[w])}}else if(l===ce.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(ss):t=[ss])}l=l.return}t!==null&&Jc(e,t,a,r),e.flags|=262144}function zl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ir=t,Ka=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Kp(ir,t)}function Rl(t,e){return ir===null&&rr(t),Kp(t,e)}function Kp(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ka===null){if(t===null)throw Error(s(308));Ka=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ka=Ka.next=e;return a}var Si=!1;function Ic(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ei(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ci(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=ul(t),zh(t,null,a),e}return ll(t,r,e,a),ul(t)}function Yo(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194176)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,U(t,a)}}function ef(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=e:c=c.next=e}else l=c=e;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var nf=!1;function Go(){if(nf){var t=Br;if(t!==null)throw t}}function Xo(t,e,a,r){nf=!1;var l=t.updateQueue;Si=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var z=w,V=z.next;z.next=null,g===null?c=V:g.next=V,g=z;var et=t.alternate;et!==null&&(et=et.updateQueue,w=et.lastBaseUpdate,w!==g&&(w===null?et.firstBaseUpdate=V:w.next=V,et.lastBaseUpdate=z))}if(c!==null){var ut=l.baseState;g=0,et=V=z=null,w=c;do{var Y=w.lane&-536870913,I=Y!==w.lane;if(I?(ue&Y)===Y:(r&Y)===Y){Y!==0&&Y===Dr&&(nf=!0),et!==null&&(et=et.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Ot=t,qt=w;Y=e;var Ze=a;switch(qt.tag){case 1:if(Ot=qt.payload,typeof Ot=="function"){ut=Ot.call(Ze,ut,Y);break t}ut=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=qt.payload,Y=typeof Ot=="function"?Ot.call(Ze,ut,Y):Ot,Y==null)break t;ut=it({},ut,Y);break t;case 2:Si=!0}}Y=w.callback,Y!==null&&(t.flags|=64,I&&(t.flags|=8192),I=l.callbacks,I===null?l.callbacks=[Y]:I.push(Y))}else I={lane:Y,tag:w.tag,payload:w.payload,callback:w.callback,next:null},et===null?(V=et=I,z=ut):et=et.next=I,g|=Y;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;I=w,w=I.next,I.next=null,l.lastBaseUpdate=I,l.shared.pending=null}}while(!0);et===null&&(z=ut),l.baseState=z,l.firstBaseUpdate=V,l.lastBaseUpdate=et,c===null&&(l.shared.lanes=0),Ri|=g,t.lanes=g,t.memoizedState=ut}}function Qp(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Fp(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],e)}function Ko(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==l)}}catch(w){Ae(e,e.return,w)}}function Ai(t,e,a){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,w=g.destroy;if(w!==void 0){g.destroy=void 0,l=e;var z=a;try{w()}catch(V){Ae(l,z,V)}}}r=r.next}while(r!==c)}}catch(V){Ae(e,e.return,V)}}function Zp(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Fp(e,a)}catch(r){Ae(t,t.return,r)}}}function Wp(t,e,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ae(t,e,r)}}function or(t,e){try{var a=t.ref;if(a!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var l=r;break;default:l=r}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(c){Ae(t,e,c)}}function Yn(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Ae(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ae(t,e,l)}else a.current=null}function Jp(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Ae(t,t.return,l)}}function Ip(t,e,a){try{var r=t.stateNode;kx(r,t.type,a,e),r[Ut]=e}catch(l){Ae(t,t.return,l)}}function tm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function af(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||tm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ql));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(rf(t,e,a),t=t.sibling;t!==null;)rf(t,e,a),t=t.sibling}function Ml(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(Ml(t,e,a),t=t.sibling;t!==null;)Ml(t,e,a),t=t.sibling}var Fa=!1,Qe=!1,of=!1,em=typeof WeakSet=="function"?WeakSet:Set,pn=null,nm=!1;function sx(t,e){if(t=t.containerInfo,Bf=Zl,t=bh(t),sc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var l=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,w=-1,z=-1,V=0,et=0,ut=t,Y=null;e:for(;;){for(var I;ut!==a||l!==0&&ut.nodeType!==3||(w=g+l),ut!==c||r!==0&&ut.nodeType!==3||(z=g+r),ut.nodeType===3&&(g+=ut.nodeValue.length),(I=ut.firstChild)!==null;)Y=ut,ut=I;for(;;){if(ut===t)break e;if(Y===a&&++V===l&&(w=g),Y===c&&++et===r&&(z=g),(I=ut.nextSibling)!==null)break;ut=Y,Y=ut.parentNode}ut=I}a=w===-1||z===-1?null:{start:w,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:t,selectionRange:a},Zl=!1,pn=e;pn!==null;)if(e=pn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pn=t;else for(;pn!==null;){switch(e=pn,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,l=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var Ot=ar(a.type,l,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(Ot,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(qt){Ae(a,a.return,qt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,pn=t;break}pn=e.return}return Ot=nm,nm=!1,Ot}function am(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Wa(t,a),r&4&&Ko(5,a);break;case 1:if(Wa(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(w){Ae(a,a.return,w)}else{var l=ar(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Ae(a,a.return,w)}}r&64&&Zp(a),r&512&&or(a,a.return);break;case 3:if(Wa(t,a),r&64&&(r=a.updateQueue,r!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fp(r,t)}catch(w){Ae(a,a.return,w)}}break;case 26:Wa(t,a),r&512&&or(a,a.return);break;case 27:case 5:Wa(t,a),e===null&&r&4&&Jp(a),r&512&&or(a,a.return);break;case 12:Wa(t,a);break;case 13:Wa(t,a),r&4&&om(t,a);break;case 22:if(l=a.memoizedState!==null||Fa,!l){e=e!==null&&e.memoizedState!==null||Qe;var c=Fa,g=Qe;Fa=l,(Qe=e)&&!g?Ti(t,a,(a.subtreeFlags&8772)!==0):Wa(t,a),Fa=c,Qe=g}r&512&&(a.memoizedProps.mode==="manual"?or(a,a.return):Yn(a,a.return));break;default:Wa(t,a)}}function im(t){var e=t.alternate;e!==null&&(t.alternate=null,im(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Zt(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,Gn=!1;function Za(t,e,a){for(a=a.child;a!==null;)rm(t,e,a),a=a.sibling}function rm(t,e,a){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:Qe||Yn(a,e),Za(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Yn(a,e);var r=ln,l=Gn;for(ln=a.stateNode,Za(t,e,a),a=a.stateNode,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Zt(a),ln=r,Gn=l;break;case 5:Qe||Yn(a,e);case 6:l=ln;var c=Gn;if(ln=null,Za(t,e,a),ln=l,Gn=c,ln!==null)if(Gn)try{t=ln,r=a.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(g){Ae(a,e,g)}else try{ln.removeChild(a.stateNode)}catch(g){Ae(a,e,g)}break;case 18:ln!==null&&(Gn?(e=ln,a=a.stateNode,e.nodeType===8?Vf(e.parentNode,a):e.nodeType===1&&Vf(e,a),fs(e)):Vf(ln,a.stateNode));break;case 4:r=ln,l=Gn,ln=a.stateNode.containerInfo,Gn=!0,Za(t,e,a),ln=r,Gn=l;break;case 0:case 11:case 14:case 15:Qe||Ai(2,a,e),Qe||Ai(4,a,e),Za(t,e,a);break;case 1:Qe||(Yn(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Wp(a,e,r)),Za(t,e,a);break;case 21:Za(t,e,a);break;case 22:Qe||Yn(a,e),Qe=(r=Qe)||a.memoizedState!==null,Za(t,e,a),Qe=r;break;default:Za(t,e,a)}}function om(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Ae(e,e.return,a)}}function lx(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new em),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new em),e;default:throw Error(s(435,t.tag))}}function sf(t,e){var a=lx(t);e.forEach(function(r){var l=wx.bind(null,t,r);a.has(r)||(a.add(r),r.then(l,l))})}function oa(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r],c=t,g=e,w=g;t:for(;w!==null;){switch(w.tag){case 27:case 5:ln=w.stateNode,Gn=!1;break t;case 3:ln=w.stateNode.containerInfo,Gn=!0;break t;case 4:ln=w.stateNode.containerInfo,Gn=!0;break t}w=w.return}if(ln===null)throw Error(s(160));rm(c,g,l),ln=null,Gn=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)sm(e,t),e=e.sibling}var ya=null;function sm(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oa(e,t),sa(t),r&4&&(Ai(3,t,t.return),Ko(3,t),Ai(5,t,t.return));break;case 1:oa(e,t),sa(t),r&512&&(Qe||a===null||Yn(a,a.return)),r&64&&Fa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var l=ya;if(oa(e,t),sa(t),r&512&&(Qe||a===null||Yn(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,l=l.ownerDocument||l;e:switch(r){case"title":c=l.getElementsByTagName("title")[0],(!c||c[ne]||c[kt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(r),l.head.insertBefore(c,l.querySelector("head > title"))),Sn(c,r,a),c[kt]=t,Qt(c),r=c;break t;case"link":var g=Jm("link","href",l).get(r+(a.href||""));if(g){for(var w=0;w<g.length;w++)if(c=g[w],c.getAttribute("href")===(a.href==null?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(w,1);break e}}c=l.createElement(r),Sn(c,r,a),l.head.appendChild(c);break;case"meta":if(g=Jm("meta","content",l).get(r+(a.content||""))){for(w=0;w<g.length;w++)if(c=g[w],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(w,1);break e}}c=l.createElement(r),Sn(c,r,a),l.head.appendChild(c);break;default:throw Error(s(468,r))}c[kt]=t,Qt(c),r=c}t.stateNode=r}else Im(l,t.type,t.stateNode);else t.stateNode=Wm(l,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?Im(l,t.type,t.stateNode):Wm(l,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Ip(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){l=t.stateNode,c=t.memoizedProps;try{for(var z=l.firstChild;z;){var V=z.nextSibling,et=z.nodeName;z[ne]||et==="HEAD"||et==="BODY"||et==="SCRIPT"||et==="STYLE"||et==="LINK"&&z.rel.toLowerCase()==="stylesheet"||l.removeChild(z),z=V}for(var ut=t.type,Y=l.attributes;Y.length;)l.removeAttributeNode(Y[0]);Sn(l,ut,c),l[kt]=t,l[Ut]=c}catch(Ot){Ae(t,t.return,Ot)}}case 5:if(oa(e,t),sa(t),r&512&&(Qe||a===null||Yn(a,a.return)),t.flags&32){l=t.stateNode;try{An(l,"")}catch(Ot){Ae(t,t.return,Ot)}}r&4&&t.stateNode!=null&&(l=t.memoizedProps,Ip(t,l,a!==null?a.memoizedProps:l)),r&1024&&(of=!0);break;case 6:if(oa(e,t),sa(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ot){Ae(t,t.return,Ot)}}break;case 3:if(Kl=null,l=ya,ya=Gl(e.containerInfo),oa(e,t),ya=l,sa(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(e.containerInfo)}catch(Ot){Ae(t,t.return,Ot)}of&&(of=!1,lm(t));break;case 4:r=ya,ya=Gl(t.stateNode.containerInfo),oa(e,t),sa(t),ya=r;break;case 12:oa(e,t),sa(t);break;case 13:oa(e,t),sa(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gf=Yt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,sf(t,r)));break;case 22:if(r&512&&(Qe||a===null||Yn(a,a.return)),z=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,et=Fa,ut=Qe,Fa=et||z,Qe=ut||V,oa(e,t),Qe=ut,Fa=et,sa(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=z?e._visibility&-2:e._visibility|1,z&&(e=Fa||Qe,a===null||V||e||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(a===null){V=a=e;try{if(l=V.stateNode,z)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=V.stateNode,w=V.memoizedProps.style;var I=w!=null&&w.hasOwnProperty("display")?w.display:null;g.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(Ot){Ae(V,V.return,Ot)}}}else if(e.tag===6){if(a===null){V=e;try{V.stateNode.nodeValue=z?"":V.memoizedProps}catch(Ot){Ae(V,V.return,Ot)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,sf(t,a))));break;case 19:oa(e,t),sa(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,sf(t,r)));break;case 21:break;default:oa(e,t),sa(t)}}function sa(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(tm(a)){var r=a;break t}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var l=r.stateNode,c=af(t);Ml(t,c,l);break;case 5:var g=r.stateNode;r.flags&32&&(An(g,""),r.flags&=-33);var w=af(t);Ml(t,w,g);break;case 3:case 4:var z=r.stateNode.containerInfo,V=af(t);rf(t,V,z);break;default:throw Error(s(161))}}}catch(et){Ae(t,t.return,et)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;lm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Wa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)am(t,e.alternate,e),e=e.sibling}function Vr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ai(4,e,e.return),Vr(e);break;case 1:Yn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Wp(e,e.return,a),Vr(e);break;case 26:case 27:case 5:Yn(e,e.return),Vr(e);break;case 22:Yn(e,e.return),e.memoizedState===null&&Vr(e);break;default:Vr(e)}t=t.sibling}}function Ti(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Ti(l,c,a),Ko(4,c);break;case 1:if(Ti(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(V){Ae(r,r.return,V)}if(r=c,l=r.updateQueue,l!==null){var w=r.stateNode;try{var z=l.shared.hiddenCallbacks;if(z!==null)for(l.shared.hiddenCallbacks=null,l=0;l<z.length;l++)Qp(z[l],w)}catch(V){Ae(r,r.return,V)}}a&&g&64&&Zp(c),or(c,c.return);break;case 26:case 27:case 5:Ti(l,c,a),a&&r===null&&g&4&&Jp(c),or(c,c.return);break;case 12:Ti(l,c,a);break;case 13:Ti(l,c,a),a&&g&4&&om(l,c);break;case 22:c.memoizedState===null&&Ti(l,c,a),or(c,c.return);break;default:Ti(l,c,a)}e=e.sibling}}function lf(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&_o(a))}function uf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_o(t))}function ji(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)um(t,e,a,r),e=e.sibling}function um(t,e,a,r){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ji(t,e,a,r),l&2048&&Ko(9,e);break;case 3:ji(t,e,a,r),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_o(t)));break;case 12:if(l&2048){ji(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,w=c.onPostCommit;typeof w=="function"&&w(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Ae(e,e.return,z)}}else ji(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,e.memoizedState!==null?c._visibility&4?ji(t,e,a,r):Qo(t,e):c._visibility&4?ji(t,e,a,r):(c._visibility|=4,Pr(t,e,a,r,(e.subtreeFlags&10256)!==0)),l&2048&&lf(e.alternate,e);break;case 24:ji(t,e,a,r),l&2048&&uf(e.alternate,e);break;default:ji(t,e,a,r)}}function Pr(t,e,a,r,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,w=a,z=r,V=g.flags;switch(g.tag){case 0:case 11:case 15:Pr(c,g,w,z,l),Ko(8,g);break;case 23:break;case 22:var et=g.stateNode;g.memoizedState!==null?et._visibility&4?Pr(c,g,w,z,l):Qo(c,g):(et._visibility|=4,Pr(c,g,w,z,l)),l&&V&2048&&lf(g.alternate,g);break;case 24:Pr(c,g,w,z,l),l&&V&2048&&uf(g.alternate,g);break;default:Pr(c,g,w,z,l)}e=e.sibling}}function Qo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,l=r.flags;switch(r.tag){case 22:Qo(a,r),l&2048&&lf(r.alternate,r);break;case 24:Qo(a,r),l&2048&&uf(r.alternate,r);break;default:Qo(a,r)}e=e.sibling}}var Fo=8192;function Ur(t){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)cm(t),t=t.sibling}function cm(t){switch(t.tag){case 26:Ur(t),t.flags&Fo&&t.memoizedState!==null&&Zx(ya,t.memoizedState,t.memoizedProps);break;case 5:Ur(t);break;case 3:case 4:var e=ya;ya=Gl(t.stateNode.containerInfo),Ur(t),ya=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Fo,Fo=16777216,Ur(t),Fo=e):Ur(t));break;default:Ur(t)}}function fm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Zo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];pn=r,hm(r,t)}fm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dm(t),t=t.sibling}function dm(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&Ai(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,kl(t)):Zo(t);break;default:Zo(t)}}function kl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];pn=r,hm(r,t)}fm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ai(8,e,e.return),kl(e);break;case 22:a=e.stateNode,a._visibility&4&&(a._visibility&=-5,kl(e));break;default:kl(e)}t=t.sibling}}function hm(t,e){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Ai(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:_o(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=t;pn!==null;){r=pn;var l=r.sibling,c=r.return;if(im(r),r===a){pn=null;break t}if(l!==null){l.return=c,pn=l;break t}pn=c}}}function ux(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(t,e,a,r){return new ux(t,e,a,r)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zi(t,e){var a=t.alternate;return a===null?(a=la(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pm(t,e){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ol(t,e,a,r,l,c){var g=0;if(r=t,typeof t=="function")cf(t)&&(g=1);else if(typeof t=="string")g=Qx(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case h:return sr(a.children,l,c,e);case m:g=8,l|=24;break;case v:return t=la(12,a,e,l|2),t.elementType=v,t.lanes=c,t;case R:return t=la(13,a,e,l),t.elementType=R,t.lanes=c,t;case k:return t=la(19,a,e,l),t.elementType=k,t.lanes=c,t;case M:return mm(a,l,c,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:case S:g=10;break t;case x:g=9;break t;case C:g=11;break t;case A:g=14;break t;case D:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=la(g,a,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function sr(t,e,a,r){return t=la(7,t,r,e),t.lanes=a,t}function mm(t,e,a,r){t=la(22,t,r,e),t.elementType=M,t.lanes=a;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var c=l._current;if(c===null)throw Error(s(456));if((l._pendingVisibility&2)===0){var g=gi(c,2);g!==null&&(l._pendingVisibility|=2,kn(g,c,2))}},attach:function(){var c=l._current;if(c===null)throw Error(s(456));if((l._pendingVisibility&2)!==0){var g=gi(c,2);g!==null&&(l._pendingVisibility&=-3,kn(g,c,2))}}};return t.stateNode=l,t}function ff(t,e,a){return t=la(6,t,null,e),t.lanes=a,t}function df(t,e,a){return e=la(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ja(t){t.flags|=4}function gm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tg(e)){if(e=ra.current,e!==null&&((ue&4194176)===ue?za!==null:(ue&62914560)!==ue&&(ue&536870912)===0||e!==za))throw Bo=gc,Dh;t.flags|=8192}}function Dl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Zn():536870912,t.lanes|=e,$r|=e)}function Wo(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&31457280,r|=l.flags&31457280,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function cx(t,e,a){var r=e.pendingProps;switch(pc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return _e(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Qa(fn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Mo(e)?Ja(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,va!==null&&(xf(va),va=null))),_e(e),null;case 26:return a=e.memoizedState,t===null?(Ja(e),a!==null?(_e(e),gm(e,a)):(_e(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Ja(e),_e(e),gm(e,a)):(_e(e),e.flags&=-16777217):(t.memoizedProps!==r&&Ja(e),_e(e),e.flags&=-16777217),null;case 27:Pt(e),a=Ht.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Ja(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return _e(e),null}t=bt.current,Mo(e)?kh(e):(t=Xm(l,r,a),e.stateNode=t,Ja(e))}return _e(e),null;case 5:if(Pt(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Ja(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return _e(e),null}if(t=bt.current,Mo(e))kh(e);else{switch(l=Yl(Ht.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?l.createElement(a,{is:r.is}):l.createElement(a)}}t[kt]=e,t[Ut]=r;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Sn(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ja(e)}}return _e(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Ja(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=Ht.current,Mo(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[kt]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Um(t.nodeValue,a)),t||Wi(e)}else t=Yl(t).createTextNode(r),t[kt]=e,e.stateNode=t}return _e(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[kt]=e}else ko(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_e(e),l=!1}else va!==null&&(xf(va),va=null),l=!0;if(!l)return e.flags&256?(Ya(e),e):(Ya(e),null)}if(Ya(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Dl(e,e.updateQueue),_e(e),null;case 4:return Vt(),t===null&&kf(e.stateNode.containerInfo),_e(e),null;case 10:return Qa(e.type),_e(e),null;case 19:if($(cn),l=e.memoizedState,l===null)return _e(e),null;if(r=(e.flags&128)!==0,c=l.rendering,c===null)if(r)Wo(l,!1);else{if(Fe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=gl(t),c!==null){for(e.flags|=128,Wo(l,!1),t=c.updateQueue,e.updateQueue=t,Dl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)pm(a,t),a=a.sibling;return Nt(cn,cn.current&1|2),e.child}t=t.sibling}l.tail!==null&&Yt()>Bl&&(e.flags|=128,r=!0,Wo(l,!1),e.lanes=4194304)}else{if(!r)if(t=gl(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Dl(e,t),Wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!pe)return _e(e),null}else 2*Yt()-l.renderingStartTime>Bl&&a!==536870912&&(e.flags|=128,r=!0,Wo(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(t=l.last,t!==null?t.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Yt(),e.sibling=null,t=cn.current,Nt(cn,r?t&1|2:t&1),e):(_e(e),null);case 22:case 23:return Ya(e),yc(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),a=e.updateQueue,a!==null&&Dl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&$(Ii),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Qa(fn),_e(e),null;case 25:return null}throw Error(s(156,e.tag))}function fx(t,e){switch(pc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qa(fn),Vt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Pt(e),null;case 13:if(Ya(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $(cn),null;case 4:return Vt(),null;case 10:return Qa(e.type),null;case 22:case 23:return Ya(e),yc(),t!==null&&$(Ii),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qa(fn),null;case 25:return null;default:return null}}function vm(t,e){switch(pc(e),e.tag){case 3:Qa(fn),Vt();break;case 26:case 27:case 5:Pt(e);break;case 4:Vt();break;case 13:Ya(e);break;case 19:$(cn);break;case 10:Qa(e.type);break;case 22:case 23:Ya(e),yc(),t!==null&&$(Ii);break;case 24:Qa(fn)}}var dx={getCacheForType:function(t){var e=Tn(fn),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},hx=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Te=null,ae=null,ue=0,je=0,Xn=null,Ia=!1,Hr=!1,hf=!1,ti=0,Fe=0,Ri=0,lr=0,pf=0,ua=0,$r=0,Jo=null,Ma=null,mf=!1,gf=0,Bl=1/0,Nl=null,Mi=null,Ll=!1,ur=null,Io=0,vf=0,yf=null,ts=0,bf=null;function Kn(){if((Ve&2)!==0&&ue!==0)return ue&-ue;if(X.T!==null){var t=Dr;return t!==0?t:jf()}return gt()}function ym(){ua===0&&(ua=(ue&536870912)===0||pe?Ye():536870912);var t=ra.current;return t!==null&&(t.flags|=32),ua}function kn(t,e,a){(t===Te&&je===2||t.cancelPendingCommit!==null)&&(qr(t,0),ei(t,ue,ua,!1)),yn(t,a),((Ve&2)===0||t!==Te)&&(t===Te&&((Ve&2)===0&&(lr|=a),Fe===4&&ei(t,ue,ua,!1)),ka(t))}function bm(t,e,a){if((Ve&6)!==0)throw Error(s(327));var r=!a&&(e&60)===0&&(e&t.expiredLanes)===0||xe(t,e),l=r?gx(t,e):Ef(t,e,!0),c=r;do{if(l===0){Hr&&!r&&ei(t,e,0,!1);break}else if(l===6)ei(t,e,0,!Ia);else{if(a=t.current.alternate,c&&!px(a)){l=Ef(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var w=t;l=Jo;var z=w.current.memoizedState.isDehydrated;if(z&&(qr(w,g).flags|=256),g=Ef(w,g,!1),g!==2){if(hf&&!z){w.errorRecoveryDisabledLanes|=c,lr|=c,l=4;break t}c=Ma,Ma=l,c!==null&&xf(c)}l=g}if(c=!1,l!==2)continue}}if(l===1){qr(t,0),ei(t,e,0,!0);break}t:{switch(r=t,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194176)===e){ei(r,e,ua,!Ia);break t}break;case 2:Ma=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=e,(e&62914560)===e&&(c=gf+300-Yt(),10<c)){if(ei(r,e,ua,!Ia),tn(r,0)!==0)break t;r.timeoutHandle=qm(xm.bind(null,r,a,Ma,Nl,mf,e,ua,lr,$r,Ia,2,-0,0),c);break t}xm(r,a,Ma,Nl,mf,e,ua,lr,$r,Ia,0,-0,0)}}break}while(!0);ka(t)}function xf(t){Ma===null?Ma=t:Ma.push.apply(Ma,t)}function xm(t,e,a,r,l,c,g,w,z,V,et,ut,Y){var I=e.subtreeFlags;if((I&8192||(I&16785408)===16785408)&&(os={stylesheets:null,count:0,unsuspend:Fx},cm(e),e=Wx(),e!==null)){t.cancelPendingCommit=e(jm.bind(null,t,a,r,l,g,w,z,1,ut,Y)),ei(t,c,g,!V);return}jm(t,a,r,l,g,w,z,et,ut,Y)}function px(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!qn(c(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ei(t,e,a,r){e&=~pf,e&=~lr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-Ct(l),g=1<<c;r[c]=-1,l&=~g}a!==0&&F(t,a,e)}function _l(){return(Ve&6)===0?(es(0),!1):!0}function wf(){if(ae!==null){if(je===0)var t=ae.return;else t=ae,Ka=ir=null,Tc(t),kr=null,No=0,t=ae;for(;t!==null;)vm(t.alternate,t),t=t.return;ae=null}}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Dx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),wf(),Te=t,ae=a=zi(t.current,null),ue=e,je=0,Xn=null,Ia=!1,Hr=xe(t,e),hf=!1,$r=ua=pf=lr=Ri=Fe=0,Ma=Jo=null,mf=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var l=31-Ct(r),c=1<<l;e|=t[l],r&=~c}return ti=e,sl(),a}function wm(t,e){Wt=null,X.H=Ra,e===Do?(e=Lh(),je=3):e===Dh?(e=Lh(),je=4):je=e===Bp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Xn=e,ae===null&&(Fe=1,jl(t,na(e,t.current)))}function Sm(){var t=X.H;return X.H=Ra,t===null?Ra:t}function Em(){var t=X.A;return X.A=dx,t}function Sf(){Fe=4,Ia||(ue&4194176)!==ue&&ra.current!==null||(Hr=!0),(Ri&134217727)===0&&(lr&134217727)===0||Te===null||ei(Te,ue,ua,!1)}function Ef(t,e,a){var r=Ve;Ve|=2;var l=Sm(),c=Em();(Te!==t||ue!==e)&&(Nl=null,qr(t,e)),e=!1;var g=Fe;t:do try{if(je!==0&&ae!==null){var w=ae,z=Xn;switch(je){case 8:wf(),g=6;break t;case 3:case 2:case 6:ra.current===null&&(e=!0);var V=je;if(je=0,Xn=null,Yr(t,w,z,V),a&&Hr){g=0;break t}break;default:V=je,je=0,Xn=null,Yr(t,w,z,V)}}mx(),g=Fe;break}catch(et){wm(t,et)}while(!0);return e&&t.shellSuspendCounter++,Ka=ir=null,Ve=r,X.H=l,X.A=c,ae===null&&(Te=null,ue=0,sl()),g}function mx(){for(;ae!==null;)Cm(ae)}function gx(t,e){var a=Ve;Ve|=2;var r=Sm(),l=Em();Te!==t||ue!==e?(Nl=null,Bl=Yt()+500,qr(t,e)):Hr=xe(t,e);t:do try{if(je!==0&&ae!==null){e=ae;var c=Xn;e:switch(je){case 1:je=0,Xn=null,Yr(t,e,c,1);break;case 2:if(Bh(c)){je=0,Xn=null,Am(e);break}e=function(){je===2&&Te===t&&(je=7),ka(t)},c.then(e,e);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:Bh(c)?(je=0,Xn=null,Am(e)):(je=0,Xn=null,Yr(t,e,c,7));break;case 5:var g=null;switch(ae.tag){case 26:g=ae.memoizedState;case 5:case 27:var w=ae;if(!g||tg(g)){je=0,Xn=null;var z=w.sibling;if(z!==null)ae=z;else{var V=w.return;V!==null?(ae=V,Vl(V)):ae=null}break e}}je=0,Xn=null,Yr(t,e,c,5);break;case 6:je=0,Xn=null,Yr(t,e,c,6);break;case 8:wf(),Fe=6;break t;default:throw Error(s(462))}}vx();break}catch(et){wm(t,et)}while(!0);return Ka=ir=null,X.H=r,X.A=l,Ve=a,ae!==null?0:(Te=null,ue=0,sl(),Fe)}function vx(){for(;ae!==null&&!ee();)Cm(ae)}function Cm(t){var e=Xp(t.alternate,t,ti);t.memoizedProps=t.pendingProps,e===null?Vl(t):ae=e}function Am(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Up(a,e,e.pendingProps,e.type,void 0,ue);break;case 11:e=Up(a,e,e.pendingProps,e.type.render,e.ref,ue);break;case 5:Tc(e);default:vm(a,e),e=ae=pm(e,ti),e=Xp(a,e,ti)}t.memoizedProps=t.pendingProps,e===null?Vl(t):ae=e}function Yr(t,e,a,r){Ka=ir=null,Tc(e),kr=null,No=0;var l=e.return;try{if(rx(t,l,e,a,ue)){Fe=1,jl(t,na(a,t.current)),ae=null;return}}catch(c){if(l!==null)throw ae=l,c;Fe=1,jl(t,na(a,t.current)),ae=null;return}e.flags&32768?(pe||r===1?t=!0:Hr||(ue&536870912)!==0?t=!1:(Ia=t=!0,(r===2||r===3||r===6)&&(r=ra.current,r!==null&&r.tag===13&&(r.flags|=16384))),Tm(e,t)):Vl(e)}function Vl(t){var e=t;do{if((e.flags&32768)!==0){Tm(e,Ia);return}t=e.return;var a=cx(e.alternate,e,ti);if(a!==null){ae=a;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);Fe===0&&(Fe=5)}function Tm(t,e){do{var a=fx(t.alternate,t);if(a!==null){a.flags&=32767,ae=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ae=t;return}ae=t=a}while(t!==null);Fe=6,ae=null}function jm(t,e,a,r,l,c,g,w,z,V){var et=X.T,ut=mt.p;try{mt.p=2,X.T=null,yx(t,e,a,r,ut,l,c,g,w,z,V)}finally{X.T=et,mt.p=ut}}function yx(t,e,a,r,l,c,g,w){do Gr();while(ur!==null);if((Ve&6)!==0)throw Error(s(327));var z=t.finishedWork;if(r=t.finishedLanes,z===null)return null;if(t.finishedWork=null,t.finishedLanes=0,z===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=z.lanes|z.childLanes;if(V|=fc,H(t,r,V,c,g,w),t===Te&&(ae=Te=null,ue=0),(z.subtreeFlags&10256)===0&&(z.flags&10256)===0||Ll||(Ll=!0,vf=V,yf=a,Sx($t,function(){return Gr(),null})),a=(z.flags&15990)!==0,(z.subtreeFlags&15990)!==0||a?(a=X.T,X.T=null,c=mt.p,mt.p=2,g=Ve,Ve|=4,sx(t,z),sm(z,t),$b(Nf,t.containerInfo),Zl=!!Bf,Nf=Bf=null,t.current=z,am(t,z.alternate,z),De(),Ve=g,mt.p=c,X.T=a):t.current=z,Ll?(Ll=!1,ur=t,Io=r):zm(t,V),V=t.pendingLanes,V===0&&(Mi=null),ft(z.stateNode),ka(t),e!==null)for(l=t.onRecoverableError,z=0;z<e.length;z++)V=e[z],l(V.value,{componentStack:V.stack});return(Io&3)!==0&&Gr(),V=t.pendingLanes,(r&4194218)!==0&&(V&42)!==0?t===bf?ts++:(ts=0,bf=t):ts=0,es(0),null}function zm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,_o(e)))}function Gr(){if(ur!==null){var t=ur,e=vf;vf=0;var a=K(Io),r=X.T,l=mt.p;try{if(mt.p=32>a?32:a,X.T=null,ur===null)var c=!1;else{a=yf,yf=null;var g=ur,w=Io;if(ur=null,Io=0,(Ve&6)!==0)throw Error(s(331));var z=Ve;if(Ve|=4,dm(g.current),um(g,g.current,w,a),Ve=z,es(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(pt,g)}catch{}c=!0}return c}finally{mt.p=l,X.T=r,zm(t,e)}}return!1}function Rm(t,e,a){e=na(a,e),e=Uc(t.stateNode,e,2),t=Ci(t,e,2),t!==null&&(yn(t,2),ka(t))}function Ae(t,e,a){if(t.tag===3)Rm(t,t,a);else for(;e!==null;){if(e.tag===3){Rm(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mi===null||!Mi.has(r))){t=na(a,t),a=Op(2),r=Ci(e,a,2),r!==null&&(Dp(a,r,e,t),yn(r,2),ka(r));break}}e=e.return}}function Cf(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new hx;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(a)||(hf=!0,l.add(a),t=bx.bind(null,t,e,a),e.then(t,t))}function bx(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Te===t&&(ue&a)===a&&(Fe===4||Fe===3&&(ue&62914560)===ue&&300>Yt()-gf?(Ve&2)===0&&qr(t,0):pf|=a,$r===ue&&($r=0)),ka(t)}function Mm(t,e){e===0&&(e=Zn()),t=gi(t,e),t!==null&&(yn(t,e),ka(t))}function xx(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Mm(t,a)}function wx(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),Mm(t,a)}function Sx(t,e){return He(t,e)}var Pl=null,Xr=null,Af=!1,Ul=!1,Tf=!1,cr=0;function ka(t){t!==Xr&&t.next===null&&(Xr===null?Pl=Xr=t:Xr=Xr.next=t),Ul=!0,Af||(Af=!0,Cx(Ex))}function es(t,e){if(!Tf&&Ul){Tf=!0;do for(var a=!1,r=Pl;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,w=r.pingedLanes;c=(1<<31-Ct(42|t)+1)-1,c&=l&~(g&~w),c=c&201326677?c&201326677|1:c?c|2:0}c!==0&&(a=!0,Dm(r,c))}else c=ue,c=tn(r,r===Te?c:0),(c&3)===0||xe(r,c)||(a=!0,Dm(r,c));r=r.next}while(a);Tf=!1}}function Ex(){Ul=Af=!1;var t=0;cr!==0&&(Ox()&&(t=cr),cr=0);for(var e=Yt(),a=null,r=Pl;r!==null;){var l=r.next,c=km(r,e);c===0?(r.next=null,a===null?Pl=l:a.next=l,l===null&&(Xr=a)):(a=r,(t!==0||(c&3)!==0)&&(Ul=!0)),r=l}es(t)}function km(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Ct(c),w=1<<g,z=l[g];z===-1?((w&a)===0||(w&r)!==0)&&(l[g]=qe(w,e)):z<=e&&(t.expiredLanes|=w),c&=~w}if(e=Te,a=ue,a=tn(t,t===e?a:0),r=t.callbackNode,a===0||t===e&&je===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&be(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||xe(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&be(r),K(a)){case 2:case 8:a=ie;break;case 32:a=$t;break;case 268435456:a=_;break;default:a=$t}return r=Om.bind(null,t),a=He(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&be(r),t.callbackPriority=2,t.callbackNode=null,2}function Om(t,e){var a=t.callbackNode;if(Gr()&&t.callbackNode!==a)return null;var r=ue;return r=tn(t,t===Te?r:0),r===0?null:(bm(t,r,e),km(t,Yt()),t.callbackNode!=null&&t.callbackNode===a?Om.bind(null,t):null)}function Dm(t,e){if(Gr())return null;bm(t,e,!0)}function Cx(t){Bx(function(){(Ve&6)!==0?He(vn,t):t()})}function jf(){return cr===0&&(cr=Ye()),cr}function Bm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pi(""+t)}function Nm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Ax(t,e,a,r,l){if(e==="submit"&&a&&a.stateNode===l){var c=Bm((l[Ut]||null).action),g=r.submitter;g&&(e=(e=g[Ut]||null)?Bm(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var w=new il("action","action",null,r,l);t.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(cr!==0){var z=g?Nm(l,g):new FormData(l);Nc(a,{pending:!0,data:z,method:l.method,action:c},null,z)}}else typeof c=="function"&&(w.preventDefault(),z=g?Nm(l,g):new FormData(l),Nc(a,{pending:!0,data:z,method:l.method,action:c},c,z))},currentTarget:l}]})}}for(var zf=0;zf<jh.length;zf++){var Rf=jh[zf],Tx=Rf.toLowerCase(),jx=Rf[0].toUpperCase()+Rf.slice(1);ga(Tx,"on"+jx)}ga(Sh,"onAnimationEnd"),ga(Eh,"onAnimationIteration"),ga(Ch,"onAnimationStart"),ga("dblclick","onDoubleClick"),ga("focusin","onFocus"),ga("focusout","onBlur"),ga(Yb,"onTransitionRun"),ga(Gb,"onTransitionStart"),ga(Xb,"onTransitionCancel"),ga(Ah,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ns));function Lm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var w=r[g],z=w.instance,V=w.currentTarget;if(w=w.listener,z!==c&&l.isPropagationStopped())break t;c=w,l.currentTarget=V;try{c(l)}catch(et){Tl(et)}l.currentTarget=null,c=z}else for(g=0;g<r.length;g++){if(w=r[g],z=w.instance,V=w.currentTarget,w=w.listener,z!==c&&l.isPropagationStopped())break t;c=w,l.currentTarget=V;try{c(l)}catch(et){Tl(et)}l.currentTarget=null,c=z}}}}function oe(t,e){var a=e[fe];a===void 0&&(a=e[fe]=new Set);var r=t+"__bubble";a.has(r)||(_m(e,t,2,!1),a.add(r))}function Mf(t,e,a){var r=0;e&&(r|=4),_m(a,t,r,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[Hl]){t[Hl]=!0,Xe.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,Mf("selectionchange",!1,e))}}function _m(t,e,a,r){switch(og(e)){case 2:var l=t5;break;case 8:l=e5;break;default:l=Yf}a=l.bind(null,e,a,t),l=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function Of(t,e,a,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var w=r.stateNode.containerInfo;if(w===l||w.nodeType===8&&w.parentNode===l)break;if(g===4)for(g=r.return;g!==null;){var z=g.tag;if((z===3||z===4)&&(z=g.stateNode.containerInfo,z===l||z.nodeType===8&&z.parentNode===l))return;g=g.return}for(;w!==null;){if(g=he(w),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){r=c=g;continue t}w=w.parentNode}}r=r.return}J0(function(){var V=c,et=Gi(a),ut=[];t:{var Y=Th.get(t);if(Y!==void 0){var I=il,Ot=t;switch(t){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":I=wb;break;case"focusin":Ot="focus",I=nc;break;case"focusout":Ot="blur",I=nc;break;case"beforeblur":case"afterblur":I=nc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Cb;break;case Sh:case Eh:case Ch:I=db;break;case Ah:I=Tb;break;case"scroll":case"scrollend":I=sb;break;case"wheel":I=zb;break;case"copy":case"cut":case"paste":I=pb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=ah;break;case"toggle":case"beforetoggle":I=Mb}var qt=(e&4)!==0,Ze=!qt&&(t==="scroll"||t==="scrollend"),P=qt?Y!==null?Y+"Capture":null:Y;qt=[];for(var N=V,q;N!==null;){var at=N;if(q=at.stateNode,at=at.tag,at!==5&&at!==26&&at!==27||q===null||P===null||(at=wo(N,P),at!=null&&qt.push(as(N,at,q))),Ze)break;N=N.return}0<qt.length&&(Y=new I(Y,Ot,null,a,et),ut.push({event:Y,listeners:qt}))}}if((e&7)===0){t:{if(Y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",Y&&a!==Yi&&(Ot=a.relatedTarget||a.fromElement)&&(he(Ot)||Ot[Xt]))break t;if((I||Y)&&(Y=et.window===et?et:(Y=et.ownerDocument)?Y.defaultView||Y.parentWindow:window,I?(Ot=a.relatedTarget||a.toElement,I=V,Ot=Ot?he(Ot):null,Ot!==null&&(Ze=rt(Ot),qt=Ot.tag,Ot!==Ze||qt!==5&&qt!==27&&qt!==6)&&(Ot=null)):(I=null,Ot=V),I!==Ot)){if(qt=eh,at="onMouseLeave",P="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(qt=ah,at="onPointerLeave",P="onPointerEnter",N="pointer"),Ze=I==null?Y:Kt(I),q=Ot==null?Y:Kt(Ot),Y=new qt(at,N+"leave",I,a,et),Y.target=Ze,Y.relatedTarget=q,at=null,he(et)===V&&(qt=new qt(P,N+"enter",Ot,a,et),qt.target=q,qt.relatedTarget=Ze,at=qt),Ze=at,I&&Ot)e:{for(qt=I,P=Ot,N=0,q=qt;q;q=Kr(q))N++;for(q=0,at=P;at;at=Kr(at))q++;for(;0<N-q;)qt=Kr(qt),N--;for(;0<q-N;)P=Kr(P),q--;for(;N--;){if(qt===P||P!==null&&qt===P.alternate)break e;qt=Kr(qt),P=Kr(P)}qt=null}else qt=null;I!==null&&Vm(ut,Y,I,qt,!1),Ot!==null&&Ze!==null&&Vm(ut,Ze,Ot,qt,!0)}}t:{if(Y=V?Kt(V):window,I=Y.nodeName&&Y.nodeName.toLowerCase(),I==="select"||I==="input"&&Y.type==="file")var At=fh;else if(uh(Y))if(dh)At=Ub;else{At=Vb;var te=_b}else I=Y.nodeName,!I||I.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?V&&qi(V.elementType)&&(At=fh):At=Pb;if(At&&(At=At(t,V))){ch(ut,At,a,et);break t}te&&te(t,Y,V),t==="focusout"&&V&&Y.type==="number"&&V.memoizedProps.value!=null&&ta(Y,"number",Y.value)}switch(te=V?Kt(V):window,t){case"focusin":(uh(te)||te.contentEditable==="true")&&(Ar=te,lc=V,Ro=null);break;case"focusout":Ro=lc=Ar=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,xh(ut,a,et);break;case"selectionchange":if(qb)break;case"keydown":case"keyup":xh(ut,a,et)}var Bt;if(ic)t:{switch(t){case"compositionstart":var Lt="onCompositionStart";break t;case"compositionend":Lt="onCompositionEnd";break t;case"compositionupdate":Lt="onCompositionUpdate";break t}Lt=void 0}else Cr?sh(t,a)&&(Lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Lt="onCompositionStart");Lt&&(ih&&a.locale!=="ko"&&(Cr||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&Cr&&(Bt=I0()):(mi=et,Iu="value"in mi?mi.value:mi.textContent,Cr=!0)),te=$l(V,Lt),0<te.length&&(Lt=new nh(Lt,t,null,a,et),ut.push({event:Lt,listeners:te}),Bt?Lt.data=Bt:(Bt=lh(a),Bt!==null&&(Lt.data=Bt)))),(Bt=Ob?Db(t,a):Bb(t,a))&&(Lt=$l(V,"onBeforeInput"),0<Lt.length&&(te=new nh("onBeforeInput","beforeinput",null,a,et),ut.push({event:te,listeners:Lt}),te.data=Bt)),Ax(ut,t,V,a,et)}Lm(ut,e)})}function as(t,e,a){return{instance:t,listener:e,currentTarget:a}}function $l(t,e){for(var a=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=wo(t,a),l!=null&&r.unshift(as(t,l,c)),l=wo(t,e),l!=null&&r.push(as(t,l,c))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vm(t,e,a,r,l){for(var c=e._reactName,g=[];a!==null&&a!==r;){var w=a,z=w.alternate,V=w.stateNode;if(w=w.tag,z!==null&&z===r)break;w!==5&&w!==26&&w!==27||V===null||(z=V,l?(V=wo(a,c),V!=null&&g.unshift(as(a,V,z))):l||(V=wo(a,c),V!=null&&g.push(as(a,V,z)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var Rx=/\r\n?/g,Mx=/\u0000|\uFFFD/g;function Pm(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(Mx,"")}function Um(t,e){return e=Pm(e),Pm(t)===e}function ql(){}function Ce(t,e,a,r,l,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||An(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&An(t,""+r);break;case"className":Ua(t,"class",r);break;case"tabIndex":Ua(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ua(t,a,r);break;case"style":$n(t,r,c);break;case"data":if(e!=="object"){Ua(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=pi(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Ce(t,e,"name",l.name,l,null),Ce(t,e,"formEncType",l.formEncType,l,null),Ce(t,e,"formMethod",l.formMethod,l,null),Ce(t,e,"formTarget",l.formTarget,l,null)):(Ce(t,e,"encType",l.encType,l,null),Ce(t,e,"method",l.method,l,null),Ce(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=pi(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ql);break;case"onScroll":r!=null&&oe("scroll",t);break;case"onScrollEnd":r!=null&&oe("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=pi(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":oe("beforetoggle",t),oe("toggle",t),fi(t,"popover",r);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":fi(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ca.get(a)||a,fi(t,a,r))}}function Df(t,e,a,r,l,c){switch(a){case"style":$n(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?An(t,r):(typeof r=="number"||typeof r=="bigint")&&An(t,""+r);break;case"onScroll":r!=null&&oe("scroll",t);break;case"onScrollEnd":r!=null&&oe("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),c=t[Ut]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,l),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,l);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):fi(t,a,r)}}}function Sn(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",t),oe("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ce(t,e,c,g,a,null)}}l&&Ce(t,e,"srcSet",a.srcSet,a,null),r&&Ce(t,e,"src",a.src,a,null);return;case"input":oe("invalid",t);var w=c=g=l=null,z=null,V=null;for(r in a)if(a.hasOwnProperty(r)){var et=a[r];if(et!=null)switch(r){case"name":l=et;break;case"type":g=et;break;case"checked":z=et;break;case"defaultChecked":V=et;break;case"value":c=et;break;case"defaultValue":w=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,e));break;default:Ce(t,e,r,et,a,null)}}hi(t,c,w,z,V,g,l,!1),Pn(t);return;case"select":oe("invalid",t),r=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(w=a[l],w!=null))switch(l){case"value":c=w;break;case"defaultValue":g=w;break;case"multiple":r=w;default:Ce(t,e,l,w,a,null)}e=c,a=g,t.multiple=!!r,e!=null?Un(t,!!r,e,!1):a!=null&&Un(t,!!r,a,!0);return;case"textarea":oe("invalid",t),c=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(w=a[g],w!=null))switch(g){case"value":r=w;break;case"defaultValue":l=w;break;case"children":c=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ce(t,e,g,w,a,null)}Hn(t,r,l,c),Pn(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ce(t,e,z,r,a,null)}return;case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":oe("load",t);break;case"video":case"audio":for(r=0;r<ns.length;r++)oe(ns[r],t);break;case"image":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"embed":case"source":case"link":oe("error",t),oe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ce(t,e,V,r,a,null)}return;default:if(qi(e)){for(et in a)a.hasOwnProperty(et)&&(r=a[et],r!==void 0&&Df(t,e,et,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Ce(t,e,w,r,a,null))}function kx(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,w=null,z=null,V=null,et=null;for(I in a){var ut=a[I];if(a.hasOwnProperty(I)&&ut!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":z=ut;default:r.hasOwnProperty(I)||Ce(t,e,I,null,r,ut)}}for(var Y in r){var I=r[Y];if(ut=a[Y],r.hasOwnProperty(Y)&&(I!=null||ut!=null))switch(Y){case"type":c=I;break;case"name":l=I;break;case"checked":V=I;break;case"defaultChecked":et=I;break;case"value":g=I;break;case"defaultValue":w=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(137,e));break;default:I!==ut&&Ce(t,e,Y,I,r,ut)}}Dn(t,g,w,z,V,et,c,l);return;case"select":I=g=w=Y=null;for(c in a)if(z=a[c],a.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":I=z;default:r.hasOwnProperty(c)||Ce(t,e,c,null,r,z)}for(l in r)if(c=r[l],z=a[l],r.hasOwnProperty(l)&&(c!=null||z!=null))switch(l){case"value":Y=c;break;case"defaultValue":w=c;break;case"multiple":g=c;default:c!==z&&Ce(t,e,l,c,r,z)}e=w,a=g,r=I,Y!=null?Un(t,!!a,Y,!1):!!r!=!!a&&(e!=null?Un(t,!!a,e,!0):Un(t,!!a,a?[]:"",!1));return;case"textarea":I=Y=null;for(w in a)if(l=a[w],a.hasOwnProperty(w)&&l!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ce(t,e,w,null,r,l)}for(g in r)if(l=r[g],c=a[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":Y=l;break;case"defaultValue":I=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ce(t,e,g,l,r,c)}Bn(t,Y,I);return;case"option":for(var Ot in a)if(Y=a[Ot],a.hasOwnProperty(Ot)&&Y!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:Ce(t,e,Ot,null,r,Y)}for(z in r)if(Y=r[z],I=a[z],r.hasOwnProperty(z)&&Y!==I&&(Y!=null||I!=null))switch(z){case"selected":t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Ce(t,e,z,Y,r,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)Y=a[qt],a.hasOwnProperty(qt)&&Y!=null&&!r.hasOwnProperty(qt)&&Ce(t,e,qt,null,r,Y);for(V in r)if(Y=r[V],I=a[V],r.hasOwnProperty(V)&&Y!==I&&(Y!=null||I!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,e));break;default:Ce(t,e,V,Y,r,I)}return;default:if(qi(e)){for(var Ze in a)Y=a[Ze],a.hasOwnProperty(Ze)&&Y!==void 0&&!r.hasOwnProperty(Ze)&&Df(t,e,Ze,void 0,r,Y);for(et in r)Y=r[et],I=a[et],!r.hasOwnProperty(et)||Y===I||Y===void 0&&I===void 0||Df(t,e,et,Y,r,I);return}}for(var P in a)Y=a[P],a.hasOwnProperty(P)&&Y!=null&&!r.hasOwnProperty(P)&&Ce(t,e,P,null,r,Y);for(ut in r)Y=r[ut],I=a[ut],!r.hasOwnProperty(ut)||Y===I||Y==null&&I==null||Ce(t,e,ut,Y,r,I)}var Bf=null,Nf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function Hm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $m(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=null;function Ox(){var t=window.event;return t&&t.type==="popstate"?t===_f?!1:(_f=t,!0):(_f=null,!1)}var qm=typeof setTimeout=="function"?setTimeout:void 0,Dx=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(t){return Ym.resolve(null).then(t).catch(Nx)}:qm;function Nx(t){setTimeout(function(){throw t})}function Vf(t,e){var a=e,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(r===0){t.removeChild(l),fs(e);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=l}while(a);fs(e)}function Pf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),Zt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Lx(t,e,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ne])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=ba(t.nextSibling),t===null)break}return null}function _x(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ba(t.nextSibling),t===null))return null;return t}function ba(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Xm(t,e,a){switch(e=Yl(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var ca=new Map,Km=new Set;function Gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ni=mt.d;mt.d={f:Vx,r:Px,D:Ux,C:Hx,L:$x,m:qx,X:Gx,S:Yx,M:Xx};function Vx(){var t=ni.f(),e=_l();return t||e}function Px(t){var e=ve(t);e!==null&&e.tag===5&&e.type==="form"?xp(e):ni.r(t)}var Qr=typeof document>"u"?null:document;function Qm(t,e,a){var r=Qr;if(r&&typeof e=="string"&&e){var l=Me(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Km.has(l)||(Km.add(l),t={rel:t,crossOrigin:a,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Sn(e,"link",t),Qt(e),r.head.appendChild(e)))}}function Ux(t){ni.D(t),Qm("dns-prefetch",t,null)}function Hx(t,e){ni.C(t,e),Qm("preconnect",t,e)}function $x(t,e,a){ni.L(t,e,a);var r=Qr;if(r&&t&&e){var l='link[rel="preload"][as="'+Me(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Me(a.imageSizes)+'"]')):l+='[href="'+Me(t)+'"]';var c=l;switch(e){case"style":c=Fr(t);break;case"script":c=Zr(t)}ca.has(c)||(t=it({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ca.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(is(c))||e==="script"&&r.querySelector(rs(c))||(e=r.createElement("link"),Sn(e,"link",t),Qt(e),r.head.appendChild(e)))}}function qx(t,e){ni.m(t,e);var a=Qr;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Me(r)+'"][href="'+Me(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Zr(t)}if(!ca.has(c)&&(t=it({rel:"modulepreload",href:t},e),ca.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rs(c)))return}r=a.createElement("link"),Sn(r,"link",t),Qt(r),a.head.appendChild(r)}}}function Yx(t,e,a){ni.S(t,e,a);var r=Qr;if(r&&t){var l=Ne(r).hoistableStyles,c=Fr(t);e=e||"default";var g=l.get(c);if(!g){var w={loading:0,preload:null};if(g=r.querySelector(is(c)))w.loading=5;else{t=it({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ca.get(c))&&Uf(t,a);var z=g=r.createElement("link");Qt(z),Sn(z,"link",t),z._p=new Promise(function(V,et){z.onload=V,z.onerror=et}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Xl(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:w},l.set(c,g)}}}function Gx(t,e){ni.X(t,e);var a=Qr;if(a&&t){var r=Ne(a).hoistableScripts,l=Zr(t),c=r.get(l);c||(c=a.querySelector(rs(l)),c||(t=it({src:t,async:!0},e),(e=ca.get(l))&&Hf(t,e),c=a.createElement("script"),Qt(c),Sn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Xx(t,e){ni.M(t,e);var a=Qr;if(a&&t){var r=Ne(a).hoistableScripts,l=Zr(t),c=r.get(l);c||(c=a.querySelector(rs(l)),c||(t=it({src:t,async:!0,type:"module"},e),(e=ca.get(l))&&Hf(t,e),c=a.createElement("script"),Qt(c),Sn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Fm(t,e,a,r){var l=(l=Ht.current)?Gl(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Fr(a.href),a=Ne(l).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fr(a.href);var c=Ne(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(is(t)))&&!c._p&&(g.instance=c,g.state.loading=5),ca.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ca.set(t,a),c||Kx(l,t,a,g.state))),e&&r===null)throw Error(s(528,""));return g}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Zr(a),a=Ne(l).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fr(t){return'href="'+Me(t)+'"'}function is(t){return'link[rel="stylesheet"]['+t+"]"}function Zm(t){return it({},t,{"data-precedence":t.precedence,precedence:null})}function Kx(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Sn(e,"link",a),Qt(e),t.head.appendChild(e))}function Zr(t){return'[src="'+Me(t)+'"]'}function rs(t){return"script[async]"+t}function Wm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Me(a.href)+'"]');if(r)return e.instance=r,Qt(r),r;var l=it({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Qt(r),Sn(r,"style",l),Xl(r,a.precedence,t),e.instance=r;case"stylesheet":l=Fr(a.href);var c=t.querySelector(is(l));if(c)return e.state.loading|=4,e.instance=c,Qt(c),c;r=Zm(a),(l=ca.get(l))&&Uf(r,l),c=(t.ownerDocument||t).createElement("link"),Qt(c);var g=c;return g._p=new Promise(function(w,z){g.onload=w,g.onerror=z}),Sn(c,"link",r),e.state.loading|=4,Xl(c,a.precedence,t),e.instance=c;case"script":return c=Zr(a.src),(l=t.querySelector(rs(c)))?(e.instance=l,Qt(l),l):(r=a,(l=ca.get(c))&&(r=it({},a),Hf(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Qt(l),Sn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Xl(r,a.precedence,t));return e.instance}function Xl(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var w=r[g];if(w.dataset.precedence===e)c=w;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Uf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Hf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Kl=null;function Jm(t,e,a){if(Kl===null){var r=new Map,l=Kl=new Map;l.set(a,r)}else l=Kl,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[ne]||c[kt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var w=r.get(g);w?w.push(c):r.set(g,[c])}}return r}function Im(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Qx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var os=null;function Fx(){}function Zx(t,e,a){if(os===null)throw Error(s(475));var r=os;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Fr(a.href),c=t.querySelector(is(l));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Ql.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,Qt(c);return}c=t.ownerDocument||t,a=Zm(a),(l=ca.get(l))&&Uf(a,l),c=c.createElement("link"),Qt(c);var g=c;g._p=new Promise(function(w,z){g.onload=w,g.onerror=z}),Sn(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Ql.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function Wx(){if(os===null)throw Error(s(475));var t=os;return t.stylesheets&&t.count===0&&$f(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&$f(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)$f(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function $f(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,e.forEach(Jx,t),Fl=null,Ql.call(t))}function Jx(t,e){if(!(e.state.loading&4)){var a=Fl.get(t);if(a)var r=a.get(null);else{a=new Map,Fl.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=e.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,l),a.set(g,l),this.count++,r=Ql.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var ss={$$typeof:S,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function Ix(t,e,a,r,l,c,g,w){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=en(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=en(0),this.hiddenUpdates=en(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function eg(t,e,a,r,l,c,g,w,z,V,et,ut){return t=new Ix(t,e,a,g,w,z,V,ut),e=1,c===!0&&(e|=24),c=la(3,null,null,e),t.current=c,c.stateNode=t,e=bc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},Ic(c),t}function ng(t){return t?(t=zr,t):zr}function ag(t,e,a,r,l,c){l=ng(l),r.context===null?r.context=l:r.pendingContext=l,r=Ei(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ci(t,r,e),a!==null&&(kn(a,t,e),Yo(a,t,e))}function ig(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function qf(t,e){ig(t,e),(t=t.alternate)&&ig(t,e)}function rg(t){if(t.tag===13){var e=gi(t,67108864);e!==null&&kn(e,t,67108864),qf(t,67108864)}}var Zl=!0;function t5(t,e,a,r){var l=X.T;X.T=null;var c=mt.p;try{mt.p=2,Yf(t,e,a,r)}finally{mt.p=c,X.T=l}}function e5(t,e,a,r){var l=X.T;X.T=null;var c=mt.p;try{mt.p=8,Yf(t,e,a,r)}finally{mt.p=c,X.T=l}}function Yf(t,e,a,r){if(Zl){var l=Gf(r);if(l===null)Of(t,e,r,Wl,a),sg(t,r);else if(a5(l,t,e,a,r))r.stopPropagation();else if(sg(t,r),e&4&&-1<n5.indexOf(t)){for(;l!==null;){var c=ve(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=$e(c.pendingLanes);if(g!==0){var w=c;for(w.pendingLanes|=2,w.entangledLanes|=2;g;){var z=1<<31-Ct(g);w.entanglements[1]|=z,g&=~z}ka(c),(Ve&6)===0&&(Bl=Yt()+500,es(0))}}break;case 13:w=gi(c,2),w!==null&&kn(w,c,2),_l(),qf(c,2)}if(c=Gf(r),c===null&&Of(t,e,r,Wl,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Of(t,e,r,null,a)}}function Gf(t){return t=Gi(t),Xf(t)}var Wl=null;function Xf(t){if(Wl=null,t=he(t),t!==null){var e=rt(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=vt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Wl=t,null}function og(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case vn:return 2;case ie:return 8;case $t:case j:return 32;case _:return 268435456;default:return 32}default:return 32}}var Kf=!1,ki=null,Oi=null,Di=null,ls=new Map,us=new Map,Bi=[],n5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sg(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":ls.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(e.pointerId)}}function cs(t,e,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=ve(e),e!==null&&rg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function a5(t,e,a,r,l){switch(e){case"focusin":return ki=cs(ki,t,e,a,r,l),!0;case"dragenter":return Oi=cs(Oi,t,e,a,r,l),!0;case"mouseover":return Di=cs(Di,t,e,a,r,l),!0;case"pointerover":var c=l.pointerId;return ls.set(c,cs(ls.get(c)||null,t,e,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,us.set(c,cs(us.get(c)||null,t,e,a,r,l)),!0}return!1}function lg(t){var e=he(t.target);if(e!==null){var a=rt(e);if(a!==null){if(e=a.tag,e===13){if(e=vt(a),e!==null){t.blockedOn=e,Rt(t.priority,function(){if(a.tag===13){var r=Kn(),l=gi(a,r);l!==null&&kn(l,a,r),qf(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yi=r,a.target.dispatchEvent(r),Yi=null}else return e=ve(a),e!==null&&rg(e),t.blockedOn=a,!1;e.shift()}return!0}function ug(t,e,a){Jl(t)&&a.delete(e)}function i5(){Kf=!1,ki!==null&&Jl(ki)&&(ki=null),Oi!==null&&Jl(Oi)&&(Oi=null),Di!==null&&Jl(Di)&&(Di=null),ls.forEach(ug),us.forEach(ug)}function Il(t,e){t.blockedOn===e&&(t.blockedOn=null,Kf||(Kf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,i5)))}var tu=null;function cg(t){tu!==t&&(tu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Xf(r||a)===null)continue;break}var c=ve(a);c!==null&&(t.splice(e,3),e-=3,Nc(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function fs(t){function e(z){return Il(z,t)}ki!==null&&Il(ki,t),Oi!==null&&Il(Oi,t),Di!==null&&Il(Di,t),ls.forEach(e),us.forEach(e);for(var a=0;a<Bi.length;a++){var r=Bi[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Bi.length&&(a=Bi[0],a.blockedOn===null);)lg(a),a.blockedOn===null&&Bi.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],g=l[Ut]||null;if(typeof c=="function")g||cg(a);else if(g){var w=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[Ut]||null)w=g.formAction;else if(Xf(l)!==null)continue}else w=g.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),cg(a)}}}function Qf(t){this._internalRoot=t}eu.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,r=Kn();ag(a,r,t,e,null,null)},eu.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&Gr(),ag(t.current,2,null,t,null,null),_l(),e[Xt]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=gt();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Bi.length&&e!==0&&e<Bi[a].priority;a++);Bi.splice(a,0,t),a===0&&lg(t)}};var fg=i.version;if(fg!=="19.0.0")throw Error(s(527,fg,"19.0.0"));mt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=nt(e),t=t!==null?yt(t):null,t=t===null?null:t.stateNode,t};var r5={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:X,findFiberByHostInstance:he,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{pt=nu.inject(r5),st=nu}catch{}}return hs.createRoot=function(t,e){if(!u(t))throw Error(s(299));var a=!1,r="",l=zp,c=Rp,g=Mp,w=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(w=e.unstable_transitionCallbacks)),e=eg(t,1,!1,null,null,a,r,l,c,g,w,null),t[Xt]=e.current,kf(t.nodeType===8?t.parentNode:t),new Qf(e)},hs.hydrateRoot=function(t,e,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=zp,g=Rp,w=Mp,z=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),e=eg(t,1,!0,e,a??null,r,l,c,g,w,z,V),e.context=ng(null),a=e.current,r=Kn(),l=Ei(r),l.callback=null,Ci(a,l,r),e.current.lanes=r,yn(e,r),ka(e),t[Xt]=e.current,kf(t),new eu(e)},hs.version="19.0.0",hs}var wg;function g5(){if(wg)return Wf.exports;wg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Wf.exports=m5(),Wf.exports}var v5=g5(),ps={},Sg;function y5(){if(Sg)return ps;Sg=1,Object.defineProperty(ps,"__esModule",{value:!0}),ps.parse=d,ps.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,S){const C=new f,R=x.length;if(R<2)return C;const k=(S==null?void 0:S.decode)||v;let A=0;do{const D=x.indexOf("=",A);if(D===-1)break;const M=x.indexOf(";",A),L=M===-1?R:M;if(D>L){A=x.lastIndexOf(";",D-1)+1;continue}const B=p(x,A,D),W=h(x,D,B),ot=x.slice(B,W);if(C[ot]===void 0){let dt=p(x,D+1,L),X=h(x,L,dt);const it=k(x.slice(dt,X));C[ot]=it}A=L+1}while(A<R);return C}function p(x,S,C){do{const R=x.charCodeAt(S);if(R!==32&&R!==9)return S}while(++S<C);return C}function h(x,S,C){for(;S>C;){const R=x.charCodeAt(--S);if(R!==32&&R!==9)return S+1}return C}function m(x,S,C){const R=(C==null?void 0:C.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const k=R(S);if(!i.test(k))throw new TypeError(`argument val is invalid: ${S}`);let A=x+"="+k;if(!C)return A;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);A+="; Max-Age="+C.maxAge}if(C.domain){if(!o.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);A+="; Domain="+C.domain}if(C.path){if(!s.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);A+="; Path="+C.path}if(C.expires){if(!b(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);A+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(A+="; HttpOnly"),C.secure&&(A+="; Secure"),C.partitioned&&(A+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return A}function v(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function b(x){return u.call(x)==="[object Date]"}return ps}y5();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Eg="popstate";function b5(n={}){function i(s,u){let{pathname:f,search:d,hash:p}=s.location;return zd("",{pathname:f,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(s,u){return typeof u=="string"?u:zs(u)}return w5(i,o,null,n)}function Ue(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function La(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function x5(){return Math.random().toString(36).substring(2,10)}function Cg(n,i){return{usr:n.state,key:n.key,idx:i}}function zd(n,i,o=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?mo(i):i,state:o,key:i&&i.key||s||x5()}}function zs({pathname:n="/",search:i="",hash:o=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function mo(n){let i={};if(n){let o=n.indexOf("#");o>=0&&(i.hash=n.substring(o),n=n.substring(0,o));let s=n.indexOf("?");s>=0&&(i.search=n.substring(s),n=n.substring(0,s)),n&&(i.pathname=n)}return i}function w5(n,i,o,s={}){let{window:u=document.defaultView,v5Compat:f=!1}=s,d=u.history,p="POP",h=null,m=v();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function v(){return(d.state||{idx:null}).idx}function b(){p="POP";let k=v(),A=k==null?null:k-m;m=k,h&&h({action:p,location:R.location,delta:A})}function x(k,A){p="PUSH";let D=zd(R.location,k,A);m=v()+1;let M=Cg(D,m),L=R.createHref(D);try{d.pushState(M,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;u.location.assign(L)}f&&h&&h({action:p,location:R.location,delta:1})}function S(k,A){p="REPLACE";let D=zd(R.location,k,A);m=v();let M=Cg(D,m),L=R.createHref(D);d.replaceState(M,"",L),f&&h&&h({action:p,location:R.location,delta:0})}function C(k){let A=u.location.origin!=="null"?u.location.origin:u.location.href,D=typeof k=="string"?k:zs(k);return D=D.replace(/ $/,"%20"),Ue(A,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,A)}let R={get action(){return p},get location(){return n(u,d)},listen(k){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Eg,b),h=k,()=>{u.removeEventListener(Eg,b),h=null}},createHref(k){return i(u,k)},createURL:C,encodeLocation(k){let A=C(k);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:x,replace:S,go(k){return d.go(k)}};return R}function Lv(n,i,o="/"){return S5(n,i,o,!1)}function S5(n,i,o,s){let u=typeof i=="string"?mo(i):i,f=si(u.pathname||"/",o);if(f==null)return null;let d=_v(n);E5(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=B5(f);p=O5(d[h],m,s)}return p}function _v(n,i=[],o=[],s=""){let u=(f,d,p)=>{let h={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(Ue(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let m=ii([s,h.relativePath]),v=o.concat(h);f.children&&f.children.length>0&&(Ue(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),_v(f.children,i,v,m)),!(f.path==null&&!f.index)&&i.push({path:m,score:M5(m,f.index),routesMeta:v})};return n.forEach((f,d)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,d);else for(let h of Vv(f.path))u(f,d,h)}),i}function Vv(n){let i=n.split("/");if(i.length===0)return[];let[o,...s]=i,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(s.length===0)return u?[f,""]:[f];let d=Vv(s.join("/")),p=[];return p.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&p.push(...d),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function E5(n){n.sort((i,o)=>i.score!==o.score?o.score-i.score:k5(i.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var C5=/^:[\w-]+$/,A5=3,T5=2,j5=1,z5=10,R5=-2,Ag=n=>n==="*";function M5(n,i){let o=n.split("/"),s=o.length;return o.some(Ag)&&(s+=R5),i&&(s+=T5),o.filter(u=>!Ag(u)).reduce((u,f)=>u+(C5.test(f)?A5:f===""?j5:z5),s)}function k5(n,i){return n.length===i.length&&n.slice(0,-1).every((s,u)=>s===i[u])?n[n.length-1]-i[i.length-1]:0}function O5(n,i,o=!1){let{routesMeta:s}=n,u={},f="/",d=[];for(let p=0;p<s.length;++p){let h=s[p],m=p===s.length-1,v=f==="/"?i:i.slice(f.length)||"/",b=wu({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v),x=h.route;if(!b&&m&&o&&!s[s.length-1].route.index&&(b=wu({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!b)return null;Object.assign(u,b.params),d.push({params:u,pathname:ii([f,b.pathname]),pathnameBase:V5(ii([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=ii([f,b.pathnameBase]))}return d}function wu(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,s]=D5(n.path,n.caseSensitive,n.end),u=i.match(o);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:b},x)=>{if(v==="*"){let C=p[x]||"";d=f.slice(0,f.length-C.length).replace(/(.)\/+$/,"$1")}const S=p[x];return b&&!S?m[v]=void 0:m[v]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:n}}function D5(n,i=!1,o=!0){La(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(s.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),s]}function B5(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return La(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function si(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,s=n.charAt(o);return s&&s!=="/"?null:n.slice(o)||"/"}function N5(n,i="/"){let{pathname:o,search:s="",hash:u=""}=typeof n=="string"?mo(n):n;return{pathname:o?o.startsWith("/")?o:L5(o,i):i,search:P5(s),hash:U5(u)}}function L5(n,i){let o=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function ed(n,i,o,s){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _5(n){return n.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Pv(n){let i=_5(n);return i.map((o,s)=>s===i.length-1?o.pathname:o.pathnameBase)}function Uv(n,i,o,s=!1){let u;typeof n=="string"?u=mo(n):(u={...n},Ue(!u.pathname||!u.pathname.includes("?"),ed("?","pathname","search",u)),Ue(!u.pathname||!u.pathname.includes("#"),ed("#","pathname","hash",u)),Ue(!u.search||!u.search.includes("#"),ed("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,p;if(d==null)p=o;else{let b=i.length-1;if(!s&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;u.pathname=x.join("/")}p=b>=0?i[b]:"/"}let h=N5(u,p),m=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||v)&&(h.pathname+="/"),h}var ii=n=>n.join("/").replace(/\/\/+/g,"/"),V5=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),P5=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,U5=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function H5(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Hv=["POST","PUT","PATCH","DELETE"];new Set(Hv);var $5=["GET",...Hv];new Set($5);var go=T.createContext(null);go.displayName="DataRouter";var Nu=T.createContext(null);Nu.displayName="DataRouterState";var $v=T.createContext({isTransitioning:!1});$v.displayName="ViewTransition";var q5=T.createContext(new Map);q5.displayName="Fetchers";var Y5=T.createContext(null);Y5.displayName="Await";var _a=T.createContext(null);_a.displayName="Navigation";var Xs=T.createContext(null);Xs.displayName="Location";var ui=T.createContext({outlet:null,matches:[],isDataRoute:!1});ui.displayName="Route";var o0=T.createContext(null);o0.displayName="RouteError";function G5(n,{relative:i}={}){Ue(Ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=T.useContext(_a),{hash:u,pathname:f,search:d}=Qs(n,{relative:i}),p=f;return o!=="/"&&(p=f==="/"?o:ii([o,f])),s.createHref({pathname:p,search:d,hash:u})}function Ks(){return T.useContext(Xs)!=null}function Va(){return Ue(Ks(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Xs).location}var qv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yv(n){T.useContext(_a).static||T.useLayoutEffect(n)}function Hi(){let{isDataRoute:n}=T.useContext(ui);return n?i3():X5()}function X5(){Ue(Ks(),"useNavigate() may be used only in the context of a <Router> component.");let n=T.useContext(go),{basename:i,navigator:o}=T.useContext(_a),{matches:s}=T.useContext(ui),{pathname:u}=Va(),f=JSON.stringify(Pv(s)),d=T.useRef(!1);return Yv(()=>{d.current=!0}),T.useCallback((h,m={})=>{if(La(d.current,qv),!d.current)return;if(typeof h=="number"){o.go(h);return}let v=Uv(h,JSON.parse(f),u,m.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:ii([i,v.pathname])),(m.replace?o.replace:o.push)(v,m.state,m)},[i,o,f,u,n])}T.createContext(null);function Qs(n,{relative:i}={}){let{matches:o}=T.useContext(ui),{pathname:s}=Va(),u=JSON.stringify(Pv(o));return T.useMemo(()=>Uv(n,JSON.parse(u),s,i==="path"),[n,u,s,i])}function K5(n,i){return Gv(n,i)}function Gv(n,i,o,s){var D;Ue(Ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=T.useContext(_a),{matches:d}=T.useContext(ui),p=d[d.length-1],h=p?p.params:{},m=p?p.pathname:"/",v=p?p.pathnameBase:"/",b=p&&p.route;{let M=b&&b.path||"";Xv(m,!b||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let x=Va(),S;if(i){let M=typeof i=="string"?mo(i):i;Ue(v==="/"||((D=M.pathname)==null?void 0:D.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${M.pathname}" was given in the \`location\` prop.`),S=M}else S=x;let C=S.pathname||"/",R=C;if(v!=="/"){let M=v.replace(/^\//,"").split("/");R="/"+C.replace(/^\//,"").split("/").slice(M.length).join("/")}let k=!f&&o&&o.matches&&o.matches.length>0?o.matches:Lv(n,{pathname:R});La(b||k!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),La(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=J5(k&&k.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:ii([v,u.encodeLocation?u.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?v:ii([v,u.encodeLocation?u.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),d,o,s);return i&&A?T.createElement(Xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},A):A}function Q5(){let n=a3(),i=H5(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:f},"ErrorBoundary")," or"," ",T.createElement("code",{style:f},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},i),o?T.createElement("pre",{style:u},o):null,d)}var F5=T.createElement(Q5,null),Z5=class extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?T.createElement(ui.Provider,{value:this.props.routeContext},T.createElement(o0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function W5({routeContext:n,match:i,children:o}){let s=T.useContext(go);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(ui.Provider,{value:n},o)}function J5(n,i=[],o=null,s=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let u=n,f=o==null?void 0:o.errors;if(f!=null){let h=u.findIndex(m=>m.route.id&&(f==null?void 0:f[m.route.id])!==void 0);Ue(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,p=-1;if(o)for(let h=0;h<u.length;h++){let m=u[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:v,errors:b}=o,x=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||x){d=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((h,m,v)=>{let b,x=!1,S=null,C=null;o&&(b=f&&m.route.id?f[m.route.id]:void 0,S=m.route.errorElement||F5,d&&(p<0&&v===0?(Xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,C=null):p===v&&(x=!0,C=m.route.hydrateFallbackElement||null)));let R=i.concat(u.slice(0,v+1)),k=()=>{let A;return b?A=S:x?A=C:m.route.Component?A=T.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=h,T.createElement(W5,{match:m,routeContext:{outlet:h,matches:R,isDataRoute:o!=null},children:A})};return o&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?T.createElement(Z5,{location:o.location,revalidation:o.revalidation,component:S,error:b,children:k(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):k()},null)}function s0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function I5(n){let i=T.useContext(go);return Ue(i,s0(n)),i}function t3(n){let i=T.useContext(Nu);return Ue(i,s0(n)),i}function e3(n){let i=T.useContext(ui);return Ue(i,s0(n)),i}function l0(n){let i=e3(n),o=i.matches[i.matches.length-1];return Ue(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function n3(){return l0("useRouteId")}function a3(){var s;let n=T.useContext(o0),i=t3("useRouteError"),o=l0("useRouteError");return n!==void 0?n:(s=i.errors)==null?void 0:s[o]}function i3(){let{router:n}=I5("useNavigate"),i=l0("useNavigate"),o=T.useRef(!1);return Yv(()=>{o.current=!0}),T.useCallback(async(u,f={})=>{La(o.current,qv),o.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var Tg={};function Xv(n,i,o){!i&&!Tg[n]&&(Tg[n]=!0,La(!1,o))}T.memo(r3);function r3({routes:n,future:i,state:o}){return Gv(n,void 0,o,i)}function Oa(n){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function o3({basename:n="/",children:i=null,location:o,navigationType:s="POP",navigator:u,static:f=!1}){Ue(!Ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=T.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof o=="string"&&(o=mo(o));let{pathname:h="/",search:m="",hash:v="",state:b=null,key:x="default"}=o,S=T.useMemo(()=>{let C=si(h,d);return C==null?null:{location:{pathname:C,search:m,hash:v,state:b,key:x},navigationType:s}},[d,h,m,v,b,x,s]);return La(S!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:T.createElement(_a.Provider,{value:p},T.createElement(Xs.Provider,{children:i,value:S}))}function s3({children:n,location:i}){return K5(Rd(n),i)}function Rd(n,i=[]){let o=[];return T.Children.forEach(n,(s,u)=>{if(!T.isValidElement(s))return;let f=[...i,u];if(s.type===T.Fragment){o.push.apply(o,Rd(s.props.children,f));return}Ue(s.type===Oa,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Rd(s.props.children,f)),o.push(d)}),o}var fu="get",du="application/x-www-form-urlencoded";function Lu(n){return n!=null&&typeof n.tagName=="string"}function l3(n){return Lu(n)&&n.tagName.toLowerCase()==="button"}function u3(n){return Lu(n)&&n.tagName.toLowerCase()==="form"}function c3(n){return Lu(n)&&n.tagName.toLowerCase()==="input"}function f3(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function d3(n,i){return n.button===0&&(!i||i==="_self")&&!f3(n)}var au=null;function h3(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var p3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nd(n){return n!=null&&!p3.has(n)?(La(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${du}"`),null):n}function m3(n,i){let o,s,u,f,d;if(u3(n)){let p=n.getAttribute("action");s=p?si(p,i):null,o=n.getAttribute("method")||fu,u=nd(n.getAttribute("enctype"))||du,f=new FormData(n)}else if(l3(n)||c3(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(s=h?si(h,i):null,o=n.getAttribute("formmethod")||p.getAttribute("method")||fu,u=nd(n.getAttribute("formenctype"))||nd(p.getAttribute("enctype"))||du,f=new FormData(p,n),!h3()){let{name:m,type:v,value:b}=n;if(v==="image"){let x=m?`${m}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else m&&f.append(m,b)}}else{if(Lu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=fu,s=null,u=du,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:s,method:o.toLowerCase(),encType:u,formData:f,body:d}}function u0(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function g3(n,i){if(n.id in i)return i[n.id];try{let o=await import(n.module);return i[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function v3(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function y3(n,i,o){let s=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await g3(f,o);return d.links?d.links():[]}return[]}));return S3(s.flat(1).filter(v3).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function jg(n,i,o,s,u,f){let d=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,p=(h,m)=>{var v;return o[m].pathname!==h.pathname||((v=o[m].route.path)==null?void 0:v.endsWith("*"))&&o[m].params["*"]!==h.params["*"]};return f==="assets"?i.filter((h,m)=>d(h,m)||p(h,m)):f==="data"?i.filter((h,m)=>{var b;let v=s.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((b=o[0])==null?void 0:b.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function b3(n,i,{includeHydrateFallback:o}={}){return x3(n.map(s=>{let u=i.routes[s.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function x3(n){return[...new Set(n)]}function w3(n){let i={},o=Object.keys(n).sort();for(let s of o)i[s]=n[s];return i}function S3(n,i){let o=new Set;return new Set(i),n.reduce((s,u)=>{let f=JSON.stringify(w3(u));return o.has(f)||(o.add(f),s.push({key:f,link:u})),s},[])}function E3(n,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":i&&si(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Kv(){let n=T.useContext(go);return u0(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function C3(){let n=T.useContext(Nu);return u0(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var c0=T.createContext(void 0);c0.displayName="FrameworkContext";function Qv(){let n=T.useContext(c0);return u0(n,"You must render this element inside a <HydratedRouter> element"),n}function A3(n,i){let o=T.useContext(c0),[s,u]=T.useState(!1),[f,d]=T.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:v,onTouchStart:b}=i,x=T.useRef(null);T.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let R=A=>{A.forEach(D=>{d(D.isIntersecting)})},k=new IntersectionObserver(R,{threshold:.5});return x.current&&k.observe(x.current),()=>{k.disconnect()}}},[n]),T.useEffect(()=>{if(s){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[s]);let S=()=>{u(!0)},C=()=>{u(!1),d(!1)};return o?n!=="intent"?[f,x,{}]:[f,x,{onFocus:ms(p,S),onBlur:ms(h,C),onMouseEnter:ms(m,S),onMouseLeave:ms(v,C),onTouchStart:ms(b,S)}]:[!1,x,{}]}function ms(n,i){return o=>{n&&n(o),o.defaultPrevented||i(o)}}function T3({page:n,...i}){let{router:o}=Kv(),s=T.useMemo(()=>Lv(o.routes,n,o.basename),[o.routes,n,o.basename]);return s?T.createElement(z3,{page:n,matches:s,...i}):null}function j3(n){let{manifest:i,routeModules:o}=Qv(),[s,u]=T.useState([]);return T.useEffect(()=>{let f=!1;return y3(n,i,o).then(d=>{f||u(d)}),()=>{f=!0}},[n,i,o]),s}function z3({page:n,matches:i,...o}){let s=Va(),{manifest:u,routeModules:f}=Qv(),{basename:d}=Kv(),{loaderData:p,matches:h}=C3(),m=T.useMemo(()=>jg(n,i,h,u,s,"data"),[n,i,h,u,s]),v=T.useMemo(()=>jg(n,i,h,u,s,"assets"),[n,i,h,u,s]),b=T.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let C=new Set,R=!1;if(i.forEach(A=>{var M;let D=u.routes[A.route.id];!D||!D.hasLoader||(!m.some(L=>L.route.id===A.route.id)&&A.route.id in p&&((M=f[A.route.id])!=null&&M.shouldRevalidate)||D.hasClientLoader?R=!0:C.add(A.route.id))}),C.size===0)return[];let k=E3(n,d);return R&&C.size>0&&k.searchParams.set("_routes",i.filter(A=>C.has(A.route.id)).map(A=>A.route.id).join(",")),[k.pathname+k.search]},[d,p,s,u,m,i,n,f]),x=T.useMemo(()=>b3(v,u),[v,u]),S=j3(v);return T.createElement(T.Fragment,null,b.map(C=>T.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...o})),x.map(C=>T.createElement("link",{key:C,rel:"modulepreload",href:C,...o})),S.map(({key:C,link:R})=>T.createElement("link",{key:C,...R})))}function R3(...n){return i=>{n.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fv&&(window.__reactRouterVersion="7.4.0")}catch{}function M3({basename:n,children:i,window:o}){let s=T.useRef();s.current==null&&(s.current=b5({window:o,v5Compat:!0}));let u=s.current,[f,d]=T.useState({action:u.action,location:u.location}),p=T.useCallback(h=>{T.startTransition(()=>d(h))},[d]);return T.useLayoutEffect(()=>u.listen(p),[u,p]),T.createElement(o3,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pa=T.forwardRef(function({onClick:i,discover:o="render",prefetch:s="none",relative:u,reloadDocument:f,replace:d,state:p,target:h,to:m,preventScrollReset:v,viewTransition:b,...x},S){let{basename:C}=T.useContext(_a),R=typeof m=="string"&&Zv.test(m),k,A=!1;if(typeof m=="string"&&R&&(k=m,Fv))try{let X=new URL(window.location.href),it=m.startsWith("//")?new URL(X.protocol+m):new URL(m),J=si(it.pathname,C);it.origin===X.origin&&J!=null?m=J+it.search+it.hash:A=!0}catch{La(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=G5(m,{relative:u}),[M,L,B]=A3(s,x),W=B3(m,{replace:d,state:p,target:h,preventScrollReset:v,relative:u,viewTransition:b});function ot(X){i&&i(X),X.defaultPrevented||W(X)}let dt=T.createElement("a",{...x,...B,href:k||D,onClick:A||f?i:ot,ref:R3(S,L),target:h,"data-discover":!R&&o==="render"?"true":void 0});return M&&!R?T.createElement(T.Fragment,null,dt,T.createElement(T3,{page:D})):dt});Pa.displayName="Link";var k3=T.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:s="",end:u=!1,style:f,to:d,viewTransition:p,children:h,...m},v){let b=Qs(d,{relative:m.relative}),x=Va(),S=T.useContext(Nu),{navigator:C,basename:R}=T.useContext(_a),k=S!=null&&P3(b)&&p===!0,A=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,D=x.pathname,M=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(D=D.toLowerCase(),M=M?M.toLowerCase():null,A=A.toLowerCase()),M&&R&&(M=si(M,R)||M);const L=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let B=D===A||!u&&D.startsWith(A)&&D.charAt(L)==="/",W=M!=null&&(M===A||!u&&M.startsWith(A)&&M.charAt(A.length)==="/"),ot={isActive:B,isPending:W,isTransitioning:k},dt=B?i:void 0,X;typeof s=="function"?X=s(ot):X=[s,B?"active":null,W?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let it=typeof f=="function"?f(ot):f;return T.createElement(Pa,{...m,"aria-current":dt,className:X,ref:v,style:it,to:d,viewTransition:p},typeof h=="function"?h(ot):h)});k3.displayName="NavLink";var O3=T.forwardRef(({discover:n="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:u,state:f,method:d=fu,action:p,onSubmit:h,relative:m,preventScrollReset:v,viewTransition:b,...x},S)=>{let C=_3(),R=V3(p,{relative:m}),k=d.toLowerCase()==="get"?"get":"post",A=typeof p=="string"&&Zv.test(p),D=M=>{if(h&&h(M),M.defaultPrevented)return;M.preventDefault();let L=M.nativeEvent.submitter,B=(L==null?void 0:L.getAttribute("formmethod"))||d;C(L||M.currentTarget,{fetcherKey:i,method:B,navigate:o,replace:u,state:f,relative:m,preventScrollReset:v,viewTransition:b})};return T.createElement("form",{ref:S,method:k,action:R,onSubmit:s?h:D,...x,"data-discover":!A&&n==="render"?"true":void 0})});O3.displayName="Form";function D3(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wv(n){let i=T.useContext(go);return Ue(i,D3(n)),i}function B3(n,{target:i,replace:o,state:s,preventScrollReset:u,relative:f,viewTransition:d}={}){let p=Hi(),h=Va(),m=Qs(n,{relative:f});return T.useCallback(v=>{if(d3(v,i)){v.preventDefault();let b=o!==void 0?o:zs(h)===zs(m);p(n,{replace:b,state:s,preventScrollReset:u,relative:f,viewTransition:d})}},[h,p,m,o,s,i,n,u,f,d])}var N3=0,L3=()=>`__${String(++N3)}__`;function _3(){let{router:n}=Wv("useSubmit"),{basename:i}=T.useContext(_a),o=n3();return T.useCallback(async(s,u={})=>{let{action:f,method:d,encType:p,formData:h,body:m}=m3(s,i);if(u.navigate===!1){let v=u.fetcherKey||L3();await n.fetch(v,o,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,o])}function V3(n,{relative:i}={}){let{basename:o}=T.useContext(_a),s=T.useContext(ui);Ue(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),f={...Qs(n||".",{relative:i})},d=Va();if(n==null){f.search=d.search;let p=new URLSearchParams(f.search),h=p.getAll("index");if(h.some(v=>v==="")){p.delete("index"),h.filter(b=>b).forEach(b=>p.append("index",b));let v=p.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:ii([o,f.pathname])),zs(f)}function P3(n,i={}){let o=T.useContext($v);Ue(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Wv("useViewTransitionState"),u=Qs(n,{relative:i.relative});if(!o.isTransitioning)return!1;let f=si(o.currentLocation.pathname,s)||o.currentLocation.pathname,d=si(o.nextLocation.pathname,s)||o.nextLocation.pathname;return wu(u.pathname,d)!=null||wu(u.pathname,f)!=null}new TextEncoder;var _n=function(){return _n=Object.assign||function(i){for(var o,s=1,u=arguments.length;s<u;s++){o=arguments[s];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(i[f]=o[f])}return i},_n.apply(this,arguments)};function Rs(n,i,o){if(o||arguments.length===2)for(var s=0,u=i.length,f;s<u;s++)(f||!(s in i))&&(f||(f=Array.prototype.slice.call(i,0,s)),f[s]=i[s]);return n.concat(f||Array.prototype.slice.call(i))}var ke="-ms-",Es="-moz-",we="-webkit-",Jv="comm",_u="rule",f0="decl",U3="@import",Iv="@keyframes",H3="@layer",ty=Math.abs,d0=String.fromCharCode,Md=Object.assign;function $3(n,i){return gn(n,0)^45?(((i<<2^gn(n,0))<<2^gn(n,1))<<2^gn(n,2))<<2^gn(n,3):0}function ey(n){return n.trim()}function ai(n,i){return(n=i.exec(n))?n[0]:n}function Ft(n,i,o){return n.replace(i,o)}function hu(n,i,o){return n.indexOf(i,o)}function gn(n,i){return n.charCodeAt(i)|0}function ro(n,i,o){return n.slice(i,o)}function Da(n){return n.length}function ny(n){return n.length}function xs(n,i){return i.push(n),n}function q3(n,i){return n.map(i).join("")}function zg(n,i){return n.filter(function(o){return!ai(o,i)})}var Vu=1,oo=1,ay=0,pa=0,un=0,vo="";function Pu(n,i,o,s,u,f,d,p){return{value:n,root:i,parent:o,type:s,props:u,children:f,line:Vu,column:oo,length:d,return:"",siblings:p}}function _i(n,i){return Md(Pu("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function Wr(n){for(;n.root;)n=_i(n.root,{children:[n]});xs(n,n.siblings)}function Y3(){return un}function G3(){return un=pa>0?gn(vo,--pa):0,oo--,un===10&&(oo=1,Vu--),un}function wa(){return un=pa<ay?gn(vo,pa++):0,oo++,un===10&&(oo=1,Vu++),un}function gr(){return gn(vo,pa)}function pu(){return pa}function Uu(n,i){return ro(vo,n,i)}function kd(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X3(n){return Vu=oo=1,ay=Da(vo=n),pa=0,[]}function K3(n){return vo="",n}function ad(n){return ey(Uu(pa-1,Od(n===91?n+2:n===40?n+1:n)))}function Q3(n){for(;(un=gr())&&un<33;)wa();return kd(n)>2||kd(un)>3?"":" "}function F3(n,i){for(;--i&&wa()&&!(un<48||un>102||un>57&&un<65||un>70&&un<97););return Uu(n,pu()+(i<6&&gr()==32&&wa()==32))}function Od(n){for(;wa();)switch(un){case n:return pa;case 34:case 39:n!==34&&n!==39&&Od(un);break;case 40:n===41&&Od(n);break;case 92:wa();break}return pa}function Z3(n,i){for(;wa()&&n+un!==57;)if(n+un===84&&gr()===47)break;return"/*"+Uu(i,pa-1)+"*"+d0(n===47?n:wa())}function W3(n){for(;!kd(gr());)wa();return Uu(n,pa)}function J3(n){return K3(mu("",null,null,null,[""],n=X3(n),0,[0],n))}function mu(n,i,o,s,u,f,d,p,h){for(var m=0,v=0,b=d,x=0,S=0,C=0,R=1,k=1,A=1,D=0,M="",L=u,B=f,W=s,ot=M;k;)switch(C=D,D=wa()){case 40:if(C!=108&&gn(ot,b-1)==58){hu(ot+=Ft(ad(D),"&","&\f"),"&\f",ty(m?p[m-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:ot+=ad(D);break;case 9:case 10:case 13:case 32:ot+=Q3(C);break;case 92:ot+=F3(pu()-1,7);continue;case 47:switch(gr()){case 42:case 47:xs(I3(Z3(wa(),pu()),i,o,h),h);break;default:ot+="/"}break;case 123*R:p[m++]=Da(ot)*A;case 125*R:case 59:case 0:switch(D){case 0:case 125:k=0;case 59+v:A==-1&&(ot=Ft(ot,/\f/g,"")),S>0&&Da(ot)-b&&xs(S>32?Mg(ot+";",s,o,b-1,h):Mg(Ft(ot," ","")+";",s,o,b-2,h),h);break;case 59:ot+=";";default:if(xs(W=Rg(ot,i,o,m,v,u,p,M,L=[],B=[],b,f),f),D===123)if(v===0)mu(ot,i,W,W,L,f,b,p,B);else switch(x===99&&gn(ot,3)===110?100:x){case 100:case 108:case 109:case 115:mu(n,W,W,s&&xs(Rg(n,W,W,0,0,u,p,M,u,L=[],b,B),B),u,B,b,p,s?L:B);break;default:mu(ot,W,W,W,[""],B,0,p,B)}}m=v=S=0,R=A=1,M=ot="",b=d;break;case 58:b=1+Da(ot),S=C;default:if(R<1){if(D==123)--R;else if(D==125&&R++==0&&G3()==125)continue}switch(ot+=d0(D),D*R){case 38:A=v>0?1:(ot+="\f",-1);break;case 44:p[m++]=(Da(ot)-1)*A,A=1;break;case 64:gr()===45&&(ot+=ad(wa())),x=gr(),v=b=Da(M=ot+=W3(pu())),D++;break;case 45:C===45&&Da(ot)==2&&(R=0)}}return f}function Rg(n,i,o,s,u,f,d,p,h,m,v,b){for(var x=u-1,S=u===0?f:[""],C=ny(S),R=0,k=0,A=0;R<s;++R)for(var D=0,M=ro(n,x+1,x=ty(k=d[R])),L=n;D<C;++D)(L=ey(k>0?S[D]+" "+M:Ft(M,/&\f/g,S[D])))&&(h[A++]=L);return Pu(n,i,o,u===0?_u:p,h,m,v,b)}function I3(n,i,o,s){return Pu(n,i,o,Jv,d0(Y3()),ro(n,2,-2),0,s)}function Mg(n,i,o,s,u){return Pu(n,i,o,f0,ro(n,0,s),ro(n,s+1,-1),s,u)}function iy(n,i,o){switch($3(n,i)){case 5103:return we+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+n+n;case 4789:return Es+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return we+n+Es+n+ke+n+n;case 5936:switch(gn(n,i+11)){case 114:return we+n+ke+Ft(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return we+n+ke+Ft(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return we+n+ke+Ft(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return we+n+ke+n+n;case 6165:return we+n+ke+"flex-"+n+n;case 5187:return we+n+Ft(n,/(\w+).+(:[^]+)/,we+"box-$1$2"+ke+"flex-$1$2")+n;case 5443:return we+n+ke+"flex-item-"+Ft(n,/flex-|-self/g,"")+(ai(n,/flex-|baseline/)?"":ke+"grid-row-"+Ft(n,/flex-|-self/g,""))+n;case 4675:return we+n+ke+"flex-line-pack"+Ft(n,/align-content|flex-|-self/g,"")+n;case 5548:return we+n+ke+Ft(n,"shrink","negative")+n;case 5292:return we+n+ke+Ft(n,"basis","preferred-size")+n;case 6060:return we+"box-"+Ft(n,"-grow","")+we+n+ke+Ft(n,"grow","positive")+n;case 4554:return we+Ft(n,/([^-])(transform)/g,"$1"+we+"$2")+n;case 6187:return Ft(Ft(Ft(n,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),n,"")+n;case 5495:case 3959:return Ft(n,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return Ft(Ft(n,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+n+n;case 4200:if(!ai(n,/flex-|baseline/))return ke+"grid-column-align"+ro(n,i)+n;break;case 2592:case 3360:return ke+Ft(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(s,u){return i=u,ai(s.props,/grid-\w+-end/)})?~hu(n+(o=o[i].value),"span",0)?n:ke+Ft(n,"-start","")+n+ke+"grid-row-span:"+(~hu(o,"span",0)?ai(o,/\d+/):+ai(o,/\d+/)-+ai(n,/\d+/))+";":ke+Ft(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(s){return ai(s.props,/grid-\w+-start/)})?n:ke+Ft(Ft(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ft(n,/(.+)-inline(.+)/,we+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Da(n)-1-i>6)switch(gn(n,i+1)){case 109:if(gn(n,i+4)!==45)break;case 102:return Ft(n,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Es+(gn(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~hu(n,"stretch",0)?iy(Ft(n,"stretch","fill-available"),i,o)+n:n}break;case 5152:case 5920:return Ft(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,f,d,p,h,m){return ke+u+":"+f+m+(d?ke+u+"-span:"+(p?h:+h-+f)+m:"")+n});case 4949:if(gn(n,i+6)===121)return Ft(n,":",":"+we)+n;break;case 6444:switch(gn(n,gn(n,14)===45?18:11)){case 120:return Ft(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(gn(n,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+ke+"$2box$3")+n;case 100:return Ft(n,":",":"+ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ft(n,"scroll-","scroll-snap-")+n}return n}function Su(n,i){for(var o="",s=0;s<n.length;s++)o+=i(n[s],s,n,i)||"";return o}function tw(n,i,o,s){switch(n.type){case H3:if(n.children.length)break;case U3:case f0:return n.return=n.return||n.value;case Jv:return"";case Iv:return n.return=n.value+"{"+Su(n.children,s)+"}";case _u:if(!Da(n.value=n.props.join(",")))return""}return Da(o=Su(n.children,s))?n.return=n.value+"{"+o+"}":""}function ew(n){var i=ny(n);return function(o,s,u,f){for(var d="",p=0;p<i;p++)d+=n[p](o,s,u,f)||"";return d}}function nw(n){return function(i){i.root||(i=i.return)&&n(i)}}function aw(n,i,o,s){if(n.length>-1&&!n.return)switch(n.type){case f0:n.return=iy(n.value,n.length,o);return;case Iv:return Su([_i(n,{value:Ft(n.value,"@","@"+we)})],s);case _u:if(n.length)return q3(o=n.props,function(u){switch(ai(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wr(_i(n,{props:[Ft(u,/:(read-\w+)/,":"+Es+"$1")]})),Wr(_i(n,{props:[u]})),Md(n,{props:zg(o,s)});break;case"::placeholder":Wr(_i(n,{props:[Ft(u,/:(plac\w+)/,":"+we+"input-$1")]})),Wr(_i(n,{props:[Ft(u,/:(plac\w+)/,":"+Es+"$1")]})),Wr(_i(n,{props:[Ft(u,/:(plac\w+)/,ke+"input-$1")]})),Wr(_i(n,{props:[u]})),Md(n,{props:zg(o,s)});break}return""})}}var iw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qn={},so=typeof process<"u"&&Qn!==void 0&&(Qn.REACT_APP_SC_ATTR||Qn.SC_ATTR)||"data-styled",ry="active",oy="data-styled-version",Hu="6.1.16",h0=`/*!sc*/
`,Eu=typeof window<"u"&&"HTMLElement"in window,rw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qn!==void 0&&Qn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qn.REACT_APP_SC_DISABLE_SPEEDY!==""?Qn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qn!==void 0&&Qn.SC_DISABLE_SPEEDY!==void 0&&Qn.SC_DISABLE_SPEEDY!==""&&Qn.SC_DISABLE_SPEEDY!=="false"&&Qn.SC_DISABLE_SPEEDY),$u=Object.freeze([]),lo=Object.freeze({});function ow(n,i,o){return o===void 0&&(o=lo),n.theme!==o.theme&&n.theme||i||o.theme}var sy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lw=/(^-|-$)/g;function kg(n){return n.replace(sw,"-").replace(lw,"")}var uw=/(a)(d)/gi,iu=52,Og=function(n){return String.fromCharCode(n+(n>25?39:97))};function Dd(n){var i,o="";for(i=Math.abs(n);i>iu;i=i/iu|0)o=Og(i%iu)+o;return(Og(i%iu)+o).replace(uw,"$1-$2")}var id,ly=5381,Ir=function(n,i){for(var o=i.length;o;)n=33*n^i.charCodeAt(--o);return n},uy=function(n){return Ir(ly,n)};function cy(n){return Dd(uy(n)>>>0)}function cw(n){return n.displayName||n.name||"Component"}function rd(n){return typeof n=="string"&&!0}var fy=typeof Symbol=="function"&&Symbol.for,dy=fy?Symbol.for("react.memo"):60115,fw=fy?Symbol.for("react.forward_ref"):60112,dw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pw=((id={})[fw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},id[dy]=hy,id);function Dg(n){return("type"in(i=n)&&i.type.$$typeof)===dy?hy:"$$typeof"in n?pw[n.$$typeof]:dw;var i}var mw=Object.defineProperty,gw=Object.getOwnPropertyNames,Bg=Object.getOwnPropertySymbols,vw=Object.getOwnPropertyDescriptor,yw=Object.getPrototypeOf,Ng=Object.prototype;function py(n,i,o){if(typeof i!="string"){if(Ng){var s=yw(i);s&&s!==Ng&&py(n,s,o)}var u=gw(i);Bg&&(u=u.concat(Bg(i)));for(var f=Dg(n),d=Dg(i),p=0;p<u.length;++p){var h=u[p];if(!(h in hw||o&&o[h]||d&&h in d||f&&h in f)){var m=vw(i,h);try{mw(n,h,m)}catch{}}}}return n}function uo(n){return typeof n=="function"}function p0(n){return typeof n=="object"&&"styledComponentId"in n}function hr(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Bd(n,i){if(n.length===0)return"";for(var o=n[0],s=1;s<n.length;s++)o+=n[s];return o}function Ms(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Nd(n,i,o){if(o===void 0&&(o=!1),!o&&!Ms(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)n[s]=Nd(n[s],i[s]);else if(Ms(i))for(var s in i)n[s]=Nd(n[s],i[s]);return n}function m0(n,i){Object.defineProperty(n,"toString",{value:i})}function Fs(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var bw=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var o=0,s=0;s<i;s++)o+=this.groupSizes[s];return o},n.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var s=this.groupSizes,u=s.length,f=u;i>=f;)if((f<<=1)<0)throw Fs(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(i+1),h=(d=0,o.length);d<h;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[i]++,p++)},n.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],s=this.indexOfGroup(i),u=s+o;this.groupSizes[i]=0;for(var f=s;f<u;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var s=this.groupSizes[i],u=this.indexOfGroup(i),f=u+s,d=u;d<f;d++)o+="".concat(this.tag.getRule(d)).concat(h0);return o},n}(),gu=new Map,Cu=new Map,vu=1,ru=function(n){if(gu.has(n))return gu.get(n);for(;Cu.has(vu);)vu++;var i=vu++;return gu.set(n,i),Cu.set(i,n),i},xw=function(n,i){vu=i+1,gu.set(n,i),Cu.set(i,n)},ww="style[".concat(so,"][").concat(oy,'="').concat(Hu,'"]'),Sw=new RegExp("^".concat(so,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ew=function(n,i,o){for(var s,u=o.split(","),f=0,d=u.length;f<d;f++)(s=u[f])&&n.registerName(i,s)},Cw=function(n,i){for(var o,s=((o=i.textContent)!==null&&o!==void 0?o:"").split(h0),u=[],f=0,d=s.length;f<d;f++){var p=s[f].trim();if(p){var h=p.match(Sw);if(h){var m=0|parseInt(h[1],10),v=h[2];m!==0&&(xw(v,m),Ew(n,v,h[3]),n.getTag().insertRules(m,u)),u.length=0}else u.push(p)}}},Lg=function(n){for(var i=document.querySelectorAll(ww),o=0,s=i.length;o<s;o++){var u=i[o];u&&u.getAttribute(so)!==ry&&(Cw(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function Aw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var my=function(n){var i=document.head,o=n||i,s=document.createElement("style"),u=function(p){var h=Array.from(p.querySelectorAll("style[".concat(so,"]")));return h[h.length-1]}(o),f=u!==void 0?u.nextSibling:null;s.setAttribute(so,ry),s.setAttribute(oy,Hu);var d=Aw();return d&&s.setAttribute("nonce",d),o.insertBefore(s,f),s},Tw=function(){function n(i){this.element=my(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,u=0,f=s.length;u<f;u++){var d=s[u];if(d.ownerNode===o)return d}throw Fs(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},n}(),jw=function(){function n(i){this.element=my(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),zw=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),_g=Eu,Rw={isServer:!Eu,useCSSOMInjection:!rw},gy=function(){function n(i,o,s){i===void 0&&(i=lo),o===void 0&&(o={});var u=this;this.options=_n(_n({},Rw),i),this.gs=o,this.names=new Map(s),this.server=!!i.isServer,!this.server&&Eu&&_g&&(_g=!1,Lg(this)),m0(this,function(){return function(f){for(var d=f.getTag(),p=d.length,h="",m=function(b){var x=function(A){return Cu.get(A)}(b);if(x===void 0)return"continue";var S=f.names.get(x),C=d.getGroup(b);if(S===void 0||!S.size||C.length===0)return"continue";var R="".concat(so,".g").concat(b,'[id="').concat(x,'"]'),k="";S!==void 0&&S.forEach(function(A){A.length>0&&(k+="".concat(A,","))}),h+="".concat(C).concat(R,'{content:"').concat(k,'"}').concat(h0)},v=0;v<p;v++)m(v);return h}(u)})}return n.registerId=function(i){return ru(i)},n.prototype.rehydrate=function(){!this.server&&Eu&&Lg(this)},n.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new n(_n(_n({},this.options),i),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var s=o.useCSSOMInjection,u=o.target;return o.isServer?new zw(u):s?new Tw(u):new jw(u)}(this.options),new bw(i)));var i},n.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},n.prototype.registerName=function(i,o){if(ru(i),this.names.has(i))this.names.get(i).add(o);else{var s=new Set;s.add(o),this.names.set(i,s)}},n.prototype.insertRules=function(i,o,s){this.registerName(i,o),this.getTag().insertRules(ru(i),s)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(ru(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Mw=/&/g,kw=/^\s*\/\/.*$/gm;function vy(n,i){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=vy(o.children,i)),o})}function Ow(n){var i,o,s,u=lo,f=u.options,d=f===void 0?lo:f,p=u.plugins,h=p===void 0?$u:p,m=function(x,S,C){return C.startsWith(o)&&C.endsWith(o)&&C.replaceAll(o,"").length>0?".".concat(i):x},v=h.slice();v.push(function(x){x.type===_u&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Mw,o).replace(s,m))}),d.prefix&&v.push(aw),v.push(tw);var b=function(x,S,C,R){S===void 0&&(S=""),C===void 0&&(C=""),R===void 0&&(R="&"),i=R,o=S,s=new RegExp("\\".concat(o,"\\b"),"g");var k=x.replace(kw,""),A=J3(C||S?"".concat(C," ").concat(S," { ").concat(k," }"):k);d.namespace&&(A=vy(A,d.namespace));var D=[];return Su(A,ew(v.concat(nw(function(M){return D.push(M)})))),D};return b.hash=h.length?h.reduce(function(x,S){return S.name||Fs(15),Ir(x,S.name)},ly).toString():"",b}var Dw=new gy,Ld=Ow(),yy=ha.createContext({shouldForwardProp:void 0,styleSheet:Dw,stylis:Ld});yy.Consumer;ha.createContext(void 0);function Vg(){return T.useContext(yy)}var by=function(){function n(i,o){var s=this;this.inject=function(u,f){f===void 0&&(f=Ld);var d=s.name+f.hash;u.hasNameForId(s.id,d)||u.insertRules(s.id,d,f(s.rules,d,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,m0(this,function(){throw Fs(12,String(s.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Ld),this.name+i.hash},n}(),Bw=function(n){return n>="A"&&n<="Z"};function Pg(n){for(var i="",o=0;o<n.length;o++){var s=n[o];if(o===1&&s==="-"&&n[0]==="-")return n;Bw(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var xy=function(n){return n==null||n===!1||n===""},wy=function(n){var i,o,s=[];for(var u in n){var f=n[u];n.hasOwnProperty(u)&&!xy(f)&&(Array.isArray(f)&&f.isCss||uo(f)?s.push("".concat(Pg(u),":"),f,";"):Ms(f)?s.push.apply(s,Rs(Rs(["".concat(u," {")],wy(f),!1),["}"],!1)):s.push("".concat(Pg(u),": ").concat((i=u,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in iw||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function vr(n,i,o,s){if(xy(n))return[];if(p0(n))return[".".concat(n.styledComponentId)];if(uo(n)){if(!uo(f=n)||f.prototype&&f.prototype.isReactComponent||!i)return[n];var u=n(i);return vr(u,i,o,s)}var f;return n instanceof by?o?(n.inject(o,s),[n.getName(s)]):[n]:Ms(n)?wy(n):Array.isArray(n)?Array.prototype.concat.apply($u,n.map(function(d){return vr(d,i,o,s)})):[n.toString()]}function Nw(n){for(var i=0;i<n.length;i+=1){var o=n[i];if(uo(o)&&!p0(o))return!1}return!0}var Lw=uy(Hu),_w=function(){function n(i,o,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Nw(i),this.componentId=o,this.baseHash=Ir(Lw,o),this.baseStyle=s,gy.registerId(o)}return n.prototype.generateAndInjectStyles=function(i,o,s){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=hr(u,this.staticRulesId);else{var f=Bd(vr(this.rules,i,o,s)),d=Dd(Ir(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=s(f,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}u=hr(u,d),this.staticRulesId=d}else{for(var h=Ir(this.baseHash,s.hash),m="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")m+=b;else if(b){var x=Bd(vr(b,i,o,s));h=Ir(h,x+v),m+=x}}if(m){var S=Dd(h>>>0);o.hasNameForId(this.componentId,S)||o.insertRules(this.componentId,S,s(m,".".concat(S),void 0,this.componentId)),u=hr(u,S)}}return u},n}(),Sy=ha.createContext(void 0);Sy.Consumer;var od={};function Vw(n,i,o){var s=p0(n),u=n,f=!rd(n),d=i.attrs,p=d===void 0?$u:d,h=i.componentId,m=h===void 0?function(L,B){var W=typeof L!="string"?"sc":kg(L);od[W]=(od[W]||0)+1;var ot="".concat(W,"-").concat(cy(Hu+W+od[W]));return B?"".concat(B,"-").concat(ot):ot}(i.displayName,i.parentComponentId):h,v=i.displayName,b=v===void 0?function(L){return rd(L)?"styled.".concat(L):"Styled(".concat(cw(L),")")}(n):v,x=i.displayName&&i.componentId?"".concat(kg(i.displayName),"-").concat(i.componentId):i.componentId||m,S=s&&u.attrs?u.attrs.concat(p).filter(Boolean):p,C=i.shouldForwardProp;if(s&&u.shouldForwardProp){var R=u.shouldForwardProp;if(i.shouldForwardProp){var k=i.shouldForwardProp;C=function(L,B){return R(L,B)&&k(L,B)}}else C=R}var A=new _w(o,x,s?u.componentStyle:void 0);function D(L,B){return function(W,ot,dt){var X=W.attrs,it=W.componentStyle,J=W.defaultProps,Jt=W.foldedComponentIds,ge=W.styledComponentId,Z=W.target,Dt=ha.useContext(Sy),G=Vg(),Q=W.shouldForwardProp||G.shouldForwardProp,rt=ow(ot,Dt,J)||lo,vt=function(ht,lt,Tt){for(var St,$=_n(_n({},lt),{className:void 0,theme:Tt}),Nt=0;Nt<ht.length;Nt+=1){var bt=uo(St=ht[Nt])?St($):St;for(var It in bt)$[It]=It==="className"?hr($[It],bt[It]):It==="style"?_n(_n({},$[It]),bt[It]):bt[It]}return lt.className&&($.className=hr($.className,lt.className)),$}(X,ot,rt),O=vt.as||Z,nt={};for(var yt in vt)vt[yt]===void 0||yt[0]==="$"||yt==="as"||yt==="theme"&&vt.theme===rt||(yt==="forwardedAs"?nt.as=vt.forwardedAs:Q&&!Q(yt,O)||(nt[yt]=vt[yt]));var wt=function(ht,lt){var Tt=Vg(),St=ht.generateAndInjectStyles(lt,Tt.styleSheet,Tt.stylis);return St}(it,vt),mt=hr(Jt,ge);return wt&&(mt+=" "+wt),vt.className&&(mt+=" "+vt.className),nt[rd(O)&&!sy.has(O)?"class":"className"]=mt,dt&&(nt.ref=dt),T.createElement(O,nt)}(M,L,B)}D.displayName=b;var M=ha.forwardRef(D);return M.attrs=S,M.componentStyle=A,M.displayName=b,M.shouldForwardProp=C,M.foldedComponentIds=s?hr(u.foldedComponentIds,u.styledComponentId):"",M.styledComponentId=x,M.target=s?u.target:n,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=s?function(B){for(var W=[],ot=1;ot<arguments.length;ot++)W[ot-1]=arguments[ot];for(var dt=0,X=W;dt<X.length;dt++)Nd(B,X[dt],!0);return B}({},u.defaultProps,L):L}}),m0(M,function(){return".".concat(M.styledComponentId)}),f&&py(M,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function Ug(n,i){for(var o=[n[0]],s=0,u=i.length;s<u;s+=1)o.push(i[s],n[s+1]);return o}var Hg=function(n){return Object.assign(n,{isCss:!0})};function yo(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(uo(n)||Ms(n))return Hg(vr(Ug($u,Rs([n],i,!0))));var s=n;return i.length===0&&s.length===1&&typeof s[0]=="string"?vr(s):Hg(vr(Ug(s,i)))}function _d(n,i,o){if(o===void 0&&(o=lo),!i)throw Fs(1,i);var s=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(i,o,yo.apply(void 0,Rs([u],f,!1)))};return s.attrs=function(u){return _d(n,i,_n(_n({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},s.withConfig=function(u){return _d(n,i,_n(_n({},o),u))},s}var Ey=function(n){return _d(Vw,n)},E=Ey;sy.forEach(function(n){E[n]=Ey(n)});function Re(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var s=Bd(yo.apply(void 0,Rs([n],i,!1))),u=cy(s);return new by(u,s)}var Cy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$g=ha.createContext&&ha.createContext(Cy),Pw=["attr","size","title"];function Uw(n,i){if(n==null)return{};var o=Hw(n,i),s,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(u=0;u<f.length;u++)s=f[u],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(o[s]=n[s])}return o}function Hw(n,i){if(n==null)return{};var o={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(i.indexOf(s)>=0)continue;o[s]=n[s]}return o}function Au(){return Au=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},Au.apply(this,arguments)}function qg(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,s)}return o}function Tu(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?qg(Object(o),!0).forEach(function(s){$w(n,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):qg(Object(o)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(o,s))})}return n}function $w(n,i,o){return i=qw(i),i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}function qw(n){var i=Yw(n,"string");return typeof i=="symbol"?i:i+""}function Yw(n,i){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var s=o.call(n,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function Ay(n){return n&&n.map((i,o)=>ha.createElement(i.tag,Tu({key:o},i.attr),Ay(i.child)))}function Je(n){return i=>ha.createElement(Gw,Au({attr:Tu({},n.attr)},i),Ay(n.child))}function Gw(n){var i=o=>{var{attr:s,size:u,title:f}=n,d=Uw(n,Pw),p=u||o.size||"1em",h;return o.className&&(h=o.className),n.className&&(h=(h?h+" ":"")+n.className),ha.createElement("svg",Au({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,d,{className:h,style:Tu(Tu({color:n.color||o.color},o.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),f&&ha.createElement("title",null,f),n.children)};return $g!==void 0?ha.createElement($g.Consumer,null,o=>i(o)):i(Cy)}function br(n){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function qu(n){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function Xw(n){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"},child:[]}]})(n)}function Kw(n){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"},child:[]}]})(n)}function Qw(n){return Je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function Fw(n){return Je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function Ty(n){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(n)}function Vd(n){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"},child:[]}]})(n)}function Zw(n){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(n)}function Ww(n){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function Jw(n){return Je({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(n)}function Iw(n){return Je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"},child:[]}]})(n)}function jy(n){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function g0(n){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function co(n){return Je({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function zy(n){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(n)}function t4(n){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function e4(n){return Je({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"},child:[]}]})(n)}function n4(n){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function Pd(n){return Je({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(n)}const a4="/vegetaquizshow/assets/vegetaball-DRzOjpAa.webp",Ry=T.createContext(void 0),i4=({children:n})=>{const[i,o]=T.useState(0),[s,u]=T.useState(0),[f,d]=T.useState(!1),[p,h]=T.useState(()=>{const D=localStorage.getItem("quizPlayers");return D?JSON.parse(D):[]}),[m,v]=T.useState(null);T.useEffect(()=>{const D=localStorage.getItem("quizPlayers");if(D){const M=JSON.parse(D);h(M),M.length>0&&v(M[0])}},[]),T.useEffect(()=>{localStorage.setItem("quizPlayers",JSON.stringify(p))},[p]);const b=D=>{const M={...D,id:Date.now().toString()};h([...p,M]),p.length===0&&v(M)},x=D=>{if(h(p.filter(M=>M.id!==D)),m&&m.id===D){const M=p.filter(L=>L.id!==D);v(M.length>0?M[0]:null)}},S=(D,M)=>{h(p.map(L=>L.id===D?{...L,score:M}:L)),m&&m.id===D&&v({...m,score:M})},[C,R]=T.useState([]),A={score:i,setScore:o,currentQuestion:s,setCurrentQuestion:u,isGameActive:f,setIsGameActive:d,players:p,addPlayer:b,removePlayer:x,updatePlayerScore:S,activePlayer:m,setActivePlayer:v,guessedCards:C,markCardAsGuessed:D=>{R(M=>[...M,D])}};return y.jsx(Ry.Provider,{value:A,children:n})},xr=()=>{const n=T.useContext(Ry);if(n===void 0)throw new Error("useGlobalContext must be used within a GlobalProvider");return n},r4=()=>{const{players:n,addPlayer:i,removePlayer:o}=xr(),[s,u]=T.useState(!1),[f,d]=T.useState(""),[p,h]=T.useState(""),[m,v]=T.useState(""),b=Hi(),x=A=>A?`https://play.pokemonshowdown.com/sprites/xyani/${A.toLowerCase().trim().replace(/[^a-z0-9]/g,"")}.gif`:"",S=A=>{const D=A.target.value;h(D),v(x(D))},C=()=>{if(f.trim()){const A=p.trim()?x(p):`https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`;i({name:f.trim(),avatar:A,score:0}),d(""),h(""),v(""),u(!1)}},R=()=>{if(n.length===0){alert("Aggiungi almeno un allenatore prima di iniziare!");return}localStorage.setItem("quizPlayers",JSON.stringify(n)),b("/game")},k=A=>{o(A)};return y.jsxs(s4,{children:[y.jsxs(h4,{children:[y.jsx(sd,{children:"VEGETA"}),y.jsx(sd,{children:"QUIZ"}),y.jsx(sd,{children:"SHOW"})]}),y.jsxs(p4,{children:[y.jsxs(Gg,{onClick:()=>u(!0),$color:"#EE1515",children:[y.jsx(Yg,{children:y.jsx(t4,{})}),y.jsx("span",{children:"Registra Allenatore"})]}),y.jsxs(Gg,{onClick:R,disabled:n.length===0,className:n.length===0?"disabled":"ready",$color:"#3B4CCA",children:[y.jsx(Yg,{children:y.jsx(Ty,{})}),y.jsx("span",{children:"Inizia Avventura"})]})]}),y.jsxs(m4,{children:[y.jsxs(g4,{children:[y.jsx("h2",{children:"Allenatori"}),n.length>0&&y.jsxs(y4,{children:[y.jsx(v4,{small:!0,style:{transform:"rotate(180deg)"}}),n.length]})]}),n.length===0?y.jsxs(b4,{children:[y.jsx(x4,{children:"Nessun allenatore registrato"}),y.jsx(w4,{onClick:()=>u(!0),children:"Registra il tuo primo allenatore!"})]}):y.jsx(S4,{children:n.map(A=>y.jsxs(Zs,{children:[y.jsx(_4,{children:y.jsx(V4,{src:A.avatar,alt:A.name})}),y.jsx(C4,{children:A.name}),y.jsx(A4,{onClick:()=>k(A.id),children:y.jsx(co,{})}),y.jsx(E4,{children:y.jsx(Vd,{})})]},A.id))})]}),s&&y.jsx(T4,{children:y.jsxs(j4,{children:[y.jsxs(z4,{children:[y.jsx("h2",{children:"Registra Allenatore"}),y.jsx(R4,{onClick:()=>u(!1),children:y.jsx(co,{})})]}),y.jsxs(M4,{children:[y.jsxs(Xg,{children:[y.jsx(Kg,{children:"Nome Allenatore"}),y.jsx(Qg,{type:"text",value:f,onChange:A=>d(A.target.value),placeholder:"Inserisci il nome dell'allenatore"})]}),y.jsxs(Xg,{children:[y.jsx(Kg,{children:"Nome Pokémon"}),y.jsx(Qg,{type:"text",value:p,onChange:S,placeholder:"Inserisci il nome di un Pokémon (es. pikachu, charizard)"}),y.jsx(k4,{children:"Inserisci il nome di un Pokémon per utilizzarlo come avatar"}),m&&y.jsxs(N4,{children:[y.jsx(P4,{children:y.jsx(U4,{src:m,alt:"Anteprima Avatar"})}),y.jsx(L4,{children:"Anteprima Avatar"})]})]}),y.jsxs(O4,{children:[y.jsx(D4,{onClick:()=>u(!1),children:"Annulla"}),y.jsx(B4,{onClick:C,children:"Registra"})]})]})]})}),y.jsxs(l4,{children:[y.jsx(Os,{className:"ball1"}),y.jsx(Os,{className:"ball2"}),y.jsx(c4,{className:"ball3"}),y.jsx(f4,{className:"ball4"}),y.jsx(d4,{className:"ball5"}),y.jsx(u4,{})]}),y.jsx("img",{src:a4,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:.55,zIndex:0,objectFit:"cover"}})]})},ks=Re`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,o4=Re`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;Re`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;Re`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;const s4=E.div`
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
`,l4=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,u4=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z'/%3E%3C/g%3E%3C/svg%3E");
  z-index: -1;
`,Os=E.div`
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
    animation: ${ks} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${ks} 10s ease-in-out infinite reverse;
  }
`,c4=E(Os)`
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
    animation: ${ks} 15s ease-in-out infinite;
  }
`,f4=E(Os)`
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
    animation: ${ks} 18s ease-in-out infinite reverse;
  }
`,d4=E(Os)`
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
    animation: ${ks} 14s ease-in-out infinite;
  }
`,h4=E.h1`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;

  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${o4} 3s infinite ease-in-out;
  z-index: 1;
  font-family: 'Pokemon Solid', 'Arial Black', sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,sd=E.span`
  color: #ffde00;
  margin: 0 0.3rem;
  position: relative;
  -webkit-text-stroke: 3px #3b4cca;
  text-shadow: 4px 4px 0 #3b4cca;

  @media (max-width: 768px) {
    -webkit-text-stroke: 2px #3b4cca;
  }
`,p4=E.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,Yg=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
  font-size: 1.3rem;
`,Gg=E.button`
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
`,m4=E.div`
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
`,g4=E.div`
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
`,v4=E.div`
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
`,y4=E.div`
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,b4=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`,x4=E.p`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin-bottom: 1rem;
`,w4=E.button`
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
`,S4=E.div`
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
`,Zs=E.div`
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
`,E4=E.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${Zs}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`;E.img`
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

  ${Zs}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;const C4=E.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 1;
`,A4=E.button`
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

  ${Zs}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: #ff0044;
    transform: scale(1.2);
  }
`,T4=E.div`
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
`,j4=E.div`
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
`,z4=E.div`
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
`,R4=E.button`
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
`,M4=E.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`,Xg=E.div`
  margin-bottom: 1.5rem;
`,Kg=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffde00;
  font-weight: 600;
  font-size: 0.9rem;
`,Qg=E.input`
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
`,k4=E.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`,O4=E.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,D4=E.button`
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
`,B4=E.button`
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
`,N4=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`,L4=E.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`,_4=E.div`
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

  ${Zs}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`,V4=E.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`,P4=E.div`
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
`,U4=E.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
  display: block;
`;function H4(n){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(n)}function $4(){const n=Hi(),{players:i,updatePlayerScore:o}=xr();T.useEffect(()=>{i.length===0&&n("/")},[n,i]);const s=[{id:"categories",title:"Quiz Pokémon",description:"Sfida le tue conoscenze sui Pokémon in varie categorie",icon:y.jsx(Ty,{}),color:"#EE1515",path:"/game/categories"},{id:"wheel",title:"Ruota della Fortuna",description:"Gira la ruota e affronta sfide casuali",icon:y.jsx(Kw,{}),color:"#3bcaca",path:"/game/wheel"},{id:"image",title:"WhO's ThAt PoKéMoN?",description:"Indovina il Pokémon dall'ombra o immagine sfocata",icon:y.jsx(Ww,{}),color:"#FF9C54",path:"/game/image"},{id:"city",title:"Citta Pokémon",description:"Indovina la città Pokémon da un indizio",icon:y.jsx(Xw,{}),color:"#f066ff",path:"/game/city"},{id:"pokemon",title:"Poké-Sherlock",description:"Indovina il Pokémon dagli indizi",icon:y.jsx(H4,{}),color:"#78C850",path:"/game/pokemon"}];i.map(f=>y.jsxs(ju,{children:[y.jsx(Ig,{children:y.jsx(e1,{src:f.avatar,alt:f.name})}),y.jsxs(Wg,{children:[y.jsx(Jg,{children:f.name}),y.jsxs(Ud,{children:[y.jsx(Fg,{})," ",f.score," punti"]})]}),y.jsx(t1,{children:y.jsx(Vd,{})})]},f.id));const u=f=>{const d=prompt(`Modifica il punteggio per ${f.name}:`,f.score.toString());if(d!==null){const p=parseInt(d,10);isNaN(p)?alert("Inserisci un numero valido."):o(f.id,p)}};return y.jsxs(G4,{children:[y.jsxs(Z4,{to:"/",children:[y.jsx(br,{})," Torna alla home"]}),y.jsx(W4,{children:"Centro Sfide Pokémon"}),y.jsx(J4,{children:s.map(f=>y.jsxs(v0,{to:f.path,$color:f.color,children:[y.jsx(tS,{$color:f.color,children:f.icon}),y.jsxs(eS,{children:[y.jsx(nS,{children:f.title}),y.jsx(aS,{children:f.description})]}),y.jsx(iS,{children:y.jsx("div",{className:"arrow",children:"→"})}),y.jsx(I4,{})]},f.id))}),y.jsxs(rS,{children:[y.jsxs(oS,{children:[y.jsx(sS,{children:"Allenatori"}),y.jsxs(lS,{children:[i.length," ",i.length===1?"allenatore":"allenatori"]})]}),y.jsx(Zg,{children:i.map(f=>y.jsxs(ju,{children:[y.jsx(Ig,{children:y.jsx(e1,{src:f.avatar,alt:f.name})}),y.jsxs(Wg,{children:[y.jsx(Jg,{children:f.name}),y.jsxs(Ud,{onClick:()=>u(f),children:[y.jsx(Fg,{})," ",f.score," punti",y.jsx(uS,{children:y.jsx(Qw,{})})]})]}),y.jsx(t1,{children:y.jsx(Vd,{})})]},f.id))})]}),y.jsxs(X4,{children:[y.jsx(Bs,{className:"ball1"}),y.jsx(Bs,{className:"ball2"}),y.jsx(K4,{className:"ball3"}),y.jsx(Q4,{className:"ball4"}),y.jsx(F4,{className:"ball5"})]})]})}const Ds=Re`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;Re`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;const q4=Re`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,Y4=Re`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,G4=E.div`
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
`,X4=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,Bs=E.div`
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
    animation: ${Ds} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${Ds} 10s ease-in-out infinite reverse;
  }
`,K4=E(Bs)`
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
    animation: ${Ds} 15s ease-in-out infinite;
  }
`,Q4=E(Bs)`
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
    animation: ${Ds} 18s ease-in-out infinite reverse;
  }
`,F4=E(Bs)`
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
    animation: ${Ds} 14s ease-in-out infinite;
  }
`,Z4=E(Pa)`
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
`,W4=E.h1`
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
`,J4=E.div`
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
`,v0=E(Pa)`
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
      animation: ${q4} 1s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,I4=E.div`
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

  ${v0}:hover & {
    animation: ${Y4} 1s ease-in-out;
  }
`,tS=E.div`
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
`,eS=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,nS=E.h3`
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,aS=E.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
`,iS=E.div`
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

  ${v0}:hover .arrow {
    transform: translateX(5px);
    opacity: 1;
  }
`,Fg=E.div`
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
`,rS=E.div`
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
`,oS=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
`,sS=E.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,lS=E.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,Zg=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ju=E.div`
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
`;E.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`;const Wg=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,Jg=E.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`,Ud=E.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  width: fit-content;
  &:hover {
    color: white;
  }
`,uS=E.span`
  margin-left: 0.5rem;
  opacity: 0;
  transition: all 0.2s ease;
  color: #ffde00;

  ${Ud}:hover & {
    opacity: 1;
  }
`,Ig=E.div`
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

  ${ju}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`,t1=E.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 1rem;
  color: #ffde00;
  opacity: 0.5;
  transition: all 0.3s ease;

  ${ju}:hover & {
    opacity: 1;
    transform: rotate(15deg);
  }
`,e1=E.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`,y0=T.createContext({});function b0(n){const i=T.useRef(null);return i.current===null&&(i.current=n()),i.current}const x0=typeof window<"u",My=x0?T.useLayoutEffect:T.useEffect,Yu=T.createContext(null),w0=T.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class cS extends T.Component{getSnapshotBeforeUpdate(i){const o=this.props.childRef.current;if(o&&i.isPresent&&!this.props.isPresent){const s=o.offsetParent,u=s instanceof HTMLElement&&s.offsetWidth||0,f=this.props.sizeRef.current;f.height=o.offsetHeight||0,f.width=o.offsetWidth||0,f.top=o.offsetTop,f.left=o.offsetLeft,f.right=u-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function fS({children:n,isPresent:i,anchorX:o}){const s=T.useId(),u=T.useRef(null),f=T.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=T.useContext(w0);return T.useInsertionEffect(()=>{const{width:p,height:h,top:m,left:v,right:b}=f.current;if(i||!u.current||!p||!h)return;const x=o==="left"?`left: ${v}`:`right: ${b}`;u.current.dataset.motionPopId=s;const S=document.createElement("style");return d&&(S.nonce=d),document.head.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${m}px !important;
          }
        `),()=>{document.head.removeChild(S)}},[i]),y.jsx(cS,{isPresent:i,childRef:u,sizeRef:f,children:T.cloneElement(n,{ref:u})})}const dS=({children:n,initial:i,isPresent:o,onExitComplete:s,custom:u,presenceAffectsLayout:f,mode:d,anchorX:p})=>{const h=b0(hS),m=T.useId(),v=T.useCallback(x=>{h.set(x,!0);for(const S of h.values())if(!S)return;s&&s()},[h,s]),b=T.useMemo(()=>({id:m,initial:i,isPresent:o,custom:u,onExitComplete:v,register:x=>(h.set(x,!1),()=>h.delete(x))}),f?[Math.random(),v]:[o,v]);return T.useMemo(()=>{h.forEach((x,S)=>h.set(S,!1))},[o]),T.useEffect(()=>{!o&&!h.size&&s&&s()},[o]),d==="popLayout"&&(n=y.jsx(fS,{isPresent:o,anchorX:p,children:n})),y.jsx(Yu.Provider,{value:b,children:n})};function hS(){return new Map}function ky(n=!0){const i=T.useContext(Yu);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:u}=i,f=T.useId();T.useEffect(()=>{if(n)return u(f)},[n]);const d=T.useCallback(()=>n&&s&&s(f),[f,s,n]);return!o&&s?[!1,d]:[!0]}const ou=n=>n.key||"";function n1(n){const i=[];return T.Children.forEach(n,o=>{T.isValidElement(o)&&i.push(o)}),i}const pS=({children:n,custom:i,initial:o=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:p="left"})=>{const[h,m]=ky(d),v=T.useMemo(()=>n1(n),[n]),b=d&&!h?[]:v.map(ou),x=T.useRef(!0),S=T.useRef(v),C=b0(()=>new Map),[R,k]=T.useState(v),[A,D]=T.useState(v);My(()=>{x.current=!1,S.current=v;for(let B=0;B<A.length;B++){const W=ou(A[B]);b.includes(W)?C.delete(W):C.get(W)!==!0&&C.set(W,!1)}},[A,b.length,b.join("-")]);const M=[];if(v!==R){let B=[...v];for(let W=0;W<A.length;W++){const ot=A[W],dt=ou(ot);b.includes(dt)||(B.splice(W,0,ot),M.push(ot))}return f==="wait"&&M.length&&(B=M),D(n1(B)),k(v),null}const{forceRender:L}=T.useContext(y0);return y.jsx(y.Fragment,{children:A.map(B=>{const W=ou(B),ot=d&&!h?!1:v===A||b.includes(W),dt=()=>{if(C.has(W))C.set(W,!0);else return;let X=!0;C.forEach(it=>{it||(X=!1)}),X&&(L==null||L(),D(S.current),d&&(m==null||m()),s&&s())};return y.jsx(dS,{isPresent:ot,initial:!x.current||o?void 0:!1,custom:i,presenceAffectsLayout:u,mode:f,onExitComplete:ot?void 0:dt,anchorX:p,children:B},W)})})};function S0(n,i){n.indexOf(i)===-1&&n.push(i)}function E0(n,i){const o=n.indexOf(i);o>-1&&n.splice(o,1)}const Fn=n=>n;let Oy=Fn;const mS={useManualTiming:!1};function C0(n){let i;return()=>(i===void 0&&(i=n()),i)}const fo=(n,i,o)=>{const s=i-n;return s===0?1:(o-n)/s};class A0{constructor(){this.subscriptions=[]}add(i){return S0(this.subscriptions,i),()=>E0(this.subscriptions,i)}notify(i,o,s){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,o,s);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ri=n=>n*1e3,oi=n=>n/1e3;function Dy(n,i){return i?n*(1e3/i):0}const gS=C0(()=>window.ScrollTimeline!==void 0);class vS{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,o){for(let s=0;s<this.animations.length;s++)this.animations[s][i]=o}attachTimeline(i,o){const s=this.animations.map(u=>{if(gS()&&u.attachTimeline)return u.attachTimeline(i);if(typeof o=="function")return o(u)});return()=>{s.forEach((u,f)=>{u&&u(),this.animations[f].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let o=0;o<this.animations.length;o++)i=Math.max(i,this.animations[o].duration);return i}runAll(i){this.animations.forEach(o=>o[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class yS extends vS{then(i,o){return Promise.all(this.animations).then(i).catch(o)}}function T0(n,i){return n?n[i]||n.default||n:void 0}const Hd=2e4;function By(n){let i=0;const o=50;let s=n.next(i);for(;!s.done&&i<Hd;)i+=o,s=n.next(i);return i>=Hd?1/0:i}function j0(n){return typeof n=="function"}function a1(n,i){n.timeline=i,n.onfinish=null}const z0=n=>Array.isArray(n)&&typeof n[0]=="number",bS={linearEasing:void 0};function xS(n,i){const o=C0(n);return()=>{var s;return(s=bS[i])!==null&&s!==void 0?s:o()}}const zu=xS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ny=(n,i,o=10)=>{let s="";const u=Math.max(Math.round(i/o),2);for(let f=0;f<u;f++)s+=n(fo(0,u-1,f))+", ";return`linear(${s.substring(0,s.length-2)})`};function Ly(n){return!!(typeof n=="function"&&zu()||!n||typeof n=="string"&&(n in $d||zu())||z0(n)||Array.isArray(n)&&n.every(Ly))}const ws=([n,i,o,s])=>`cubic-bezier(${n}, ${i}, ${o}, ${s})`,$d={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ws([0,.65,.55,1]),circOut:ws([.55,0,1,.45]),backIn:ws([.31,.01,.66,-.59]),backOut:ws([.33,1.53,.69,.99])};function _y(n,i){if(n)return typeof n=="function"&&zu()?Ny(n,i):z0(n)?ws(n):Array.isArray(n)?n.map(o=>_y(o,i)||$d.easeOut):$d[n]}const su=["read","resolveKeyframes","update","preRender","render","postRender"],i1={value:null};function wS(n,i){let o=new Set,s=new Set,u=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1},h=0;function m(b){d.has(b)&&(v.schedule(b),n()),h++,b(p)}const v={schedule:(b,x=!1,S=!1)=>{const R=S&&u?o:s;return x&&d.add(b),R.has(b)||R.add(b),b},cancel:b=>{s.delete(b),d.delete(b)},process:b=>{if(p=b,u){f=!0;return}u=!0,[o,s]=[s,o],o.forEach(m),i&&i1.value&&i1.value.frameloop[i].push(h),h=0,o.clear(),u=!1,f&&(f=!1,v.process(b))}};return v}const SS=40;function Vy(n,i){let o=!1,s=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=su.reduce((A,D)=>(A[D]=wS(f,i?D:void 0),A),{}),{read:p,resolveKeyframes:h,update:m,preRender:v,render:b,postRender:x}=d,S=()=>{const A=performance.now();o=!1,u.delta=s?1e3/60:Math.max(Math.min(A-u.timestamp,SS),1),u.timestamp=A,u.isProcessing=!0,p.process(u),h.process(u),m.process(u),v.process(u),b.process(u),x.process(u),u.isProcessing=!1,o&&i&&(s=!1,n(S))},C=()=>{o=!0,s=!0,u.isProcessing||n(S)};return{schedule:su.reduce((A,D)=>{const M=d[D];return A[D]=(L,B=!1,W=!1)=>(o||C(),M.schedule(L,B,W)),A},{}),cancel:A=>{for(let D=0;D<su.length;D++)d[su[D]].cancel(A)},state:u,steps:d}}const{schedule:ze,cancel:Pi,state:En,steps:ld}=Vy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fn,!0),{schedule:R0}=Vy(queueMicrotask,!1);let yu;function ES(){yu=void 0}const Ba={now:()=>(yu===void 0&&Ba.set(En.isProcessing||mS.useManualTiming?En.timestamp:performance.now()),yu),set:n=>{yu=n,queueMicrotask(ES)}},xa={x:!1,y:!1};function Py(){return xa.x||xa.y}function CS(n){return n==="x"||n==="y"?xa[n]?null:(xa[n]=!0,()=>{xa[n]=!1}):xa.x||xa.y?null:(xa.x=xa.y=!0,()=>{xa.x=xa.y=!1})}function AS(n,i,o){var s;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let u=document;const f=(s=void 0)!==null&&s!==void 0?s:u.querySelectorAll(n);return f?Array.from(f):[]}return Array.from(n)}function Uy(n,i){const o=AS(n),s=new AbortController,u={passive:!0,...i,signal:s.signal};return[o,u,()=>s.abort()]}function r1(n){return!(n.pointerType==="touch"||Py())}function TS(n,i,o={}){const[s,u,f]=Uy(n,o),d=p=>{if(!r1(p))return;const{target:h}=p,m=i(h,p);if(typeof m!="function"||!h)return;const v=b=>{r1(b)&&(m(b),h.removeEventListener("pointerleave",v))};h.addEventListener("pointerleave",v,u)};return s.forEach(p=>{p.addEventListener("pointerenter",d,u)}),f}function o1(n,i){const o=`${i}PointerCapture`;if(n.target instanceof Element&&o in n.target&&n.pointerId!==void 0)try{n.target[o](n.pointerId)}catch{}}const Hy=(n,i)=>i?n===i?!0:Hy(n,i.parentElement):!1,M0=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,jS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function zS(n){return jS.has(n.tagName)||n.tabIndex!==-1}const Ss=new WeakSet;function s1(n){return i=>{i.key==="Enter"&&n(i)}}function ud(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const RS=(n,i)=>{const o=n.currentTarget;if(!o)return;const s=s1(()=>{if(Ss.has(o))return;ud(o,"down");const u=s1(()=>{ud(o,"up")}),f=()=>ud(o,"cancel");o.addEventListener("keyup",u,i),o.addEventListener("blur",f,i)});o.addEventListener("keydown",s,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),i)};function l1(n){return M0(n)&&!Py()}function MS(n,i,o={}){const[s,u,f]=Uy(n,o),d=p=>{const h=p.currentTarget;if(!h||!l1(p)||Ss.has(h))return;Ss.add(h),o1(p,"set");const m=i(h,p),v=(S,C)=>{h.removeEventListener("pointerup",b),h.removeEventListener("pointercancel",x),o1(S,"release"),!(!l1(S)||!Ss.has(h))&&(Ss.delete(h),typeof m=="function"&&m(S,{success:C}))},b=S=>{(S.isTrusted?kS(S,h instanceof Element?h.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?v(S,!1):v(S,!(h instanceof Element)||Hy(h,S.target))},x=S=>{v(S,!1)};h.addEventListener("pointerup",b,u),h.addEventListener("pointercancel",x,u),h.addEventListener("lostpointercapture",x,u)};return s.forEach(p=>{p=o.useGlobalTarget?window:p;let h=!1;p instanceof HTMLElement&&(h=!0,!zS(p)&&p.getAttribute("tabindex")===null&&(p.tabIndex=0)),p.addEventListener("pointerdown",d,u),h&&p.addEventListener("focus",m=>RS(m,u),u)}),f}function kS(n,i){return n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom}const u1=30,OS=n=>!isNaN(parseFloat(n));class DS{constructor(i,o={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,u=!0)=>{const f=Ba.now();this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=Ba.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=OS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new A0);const s=this.events[i].add(o);return i==="change"?()=>{s(),ze.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i,o=!0){!o||!this.passiveEffect?this.updateAndNotify(i,o):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Ba.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>u1)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,u1);return Dy(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ns(n,i){return new DS(n,i)}const $y=T.createContext({strict:!1}),c1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ho={};for(const n in c1)ho[n]={isEnabled:i=>c1[n].some(o=>!!i[o])};function BS(n){for(const i in n)ho[i]={...ho[i],...n[i]}}const NS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ru(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||NS.has(n)}let qy=n=>!Ru(n);function LS(n){n&&(qy=i=>i.startsWith("on")?!Ru(i):n(i))}try{LS(require("@emotion/is-prop-valid").default)}catch{}function _S(n,i,o){const s={};for(const u in n)u==="values"&&typeof n.values=="object"||(qy(u)||o===!0&&Ru(u)||!i&&!Ru(u)||n.draggable&&u.startsWith("onDrag"))&&(s[u]=n[u]);return s}function VS(n){if(typeof Proxy>"u")return n;const i=new Map,o=(...s)=>n(...s);return new Proxy(o,{get:(s,u)=>u==="create"?n:(i.has(u)||i.set(u,n(u)),i.get(u))})}const Gu=T.createContext({});function Xu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ls(n){return typeof n=="string"||Array.isArray(n)}const k0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],O0=["initial",...k0];function Ku(n){return Xu(n.animate)||O0.some(i=>Ls(n[i]))}function Yy(n){return!!(Ku(n)||n.variants)}function PS(n,i){if(Ku(n)){const{initial:o,animate:s}=n;return{initial:o===!1||Ls(o)?o:void 0,animate:Ls(s)?s:void 0}}return n.inherit!==!1?i:{}}function US(n){const{initial:i,animate:o}=PS(n,T.useContext(Gu));return T.useMemo(()=>({initial:i,animate:o}),[f1(i),f1(o)])}function f1(n){return Array.isArray(n)?n.join(" "):n}const HS=Symbol.for("motionComponentSymbol");function to(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function $S(n,i,o){return T.useCallback(s=>{s&&n.onMount&&n.onMount(s),i&&(s?i.mount(s):i.unmount()),o&&(typeof o=="function"?o(s):to(o)&&(o.current=s))},[i])}const D0=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),qS="framerAppearId",Gy="data-"+D0(qS),Xy=T.createContext({});function YS(n,i,o,s,u){var f,d;const{visualElement:p}=T.useContext(Gu),h=T.useContext($y),m=T.useContext(Yu),v=T.useContext(w0).reducedMotion,b=T.useRef(null);s=s||h.renderer,!b.current&&s&&(b.current=s(n,{visualState:i,parent:p,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:v}));const x=b.current,S=T.useContext(Xy);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&GS(b.current,o,u,S);const C=T.useRef(!1);T.useInsertionEffect(()=>{x&&C.current&&x.update(o,m)});const R=o[Gy],k=T.useRef(!!R&&!(!((f=window.MotionHandoffIsComplete)===null||f===void 0)&&f.call(window,R))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,R)));return My(()=>{x&&(C.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),R0.render(x.render),k.current&&x.animationState&&x.animationState.animateChanges())}),T.useEffect(()=>{x&&(!k.current&&x.animationState&&x.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)===null||A===void 0||A.call(window,R)}),k.current=!1))}),x}function GS(n,i,o,s){const{layoutId:u,layout:f,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:m}=i;n.projection=new o(n.latestValues,i["data-framer-portal-id"]?void 0:Ky(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||p&&to(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:m})}function Ky(n){if(n)return n.options.allowProjection!==!1?n.projection:Ky(n.parent)}function XS({preloadedFeatures:n,createVisualElement:i,useRender:o,useVisualState:s,Component:u}){var f,d;n&&BS(n);function p(m,v){let b;const x={...T.useContext(w0),...m,layoutId:KS(m)},{isStatic:S}=x,C=US(m),R=s(m,S);if(!S&&x0){QS();const k=FS(x);b=k.MeasureLayout,C.visualElement=YS(u,R,x,i,k.ProjectionNode)}return y.jsxs(Gu.Provider,{value:C,children:[b&&C.visualElement?y.jsx(b,{visualElement:C.visualElement,...x}):null,o(u,m,$S(R,C.visualElement,v),R,S,C.visualElement)]})}p.displayName=`motion.${typeof u=="string"?u:`create(${(d=(f=u.displayName)!==null&&f!==void 0?f:u.name)!==null&&d!==void 0?d:""})`}`;const h=T.forwardRef(p);return h[HS]=u,h}function KS({layoutId:n}){const i=T.useContext(y0).id;return i&&n!==void 0?i+"-"+n:n}function QS(n,i){T.useContext($y).strict}function FS(n){const{drag:i,layout:o}=ho;if(!i&&!o)return{};const s={...i,...o};return{MeasureLayout:i!=null&&i.isEnabled(n)||o!=null&&o.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Qy=n=>i=>typeof i=="string"&&i.startsWith(n),B0=Qy("--"),ZS=Qy("var(--"),N0=n=>ZS(n)?WS.test(n.split("/*")[0].trim()):!1,WS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_s={};function JS(n){for(const i in n)_s[i]=n[i],B0(i)&&(_s[i].isCSSVariable=!0)}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wr=new Set(bo);function Fy(n,{layout:i,layoutId:o}){return wr.has(n)||n.startsWith("origin")||(i||o!==void 0)&&(!!_s[n]||n==="opacity")}const Rn=n=>!!(n&&n.getVelocity),Zy=(n,i)=>i&&typeof n=="number"?i.transform(n):n,li=(n,i,o)=>o>i?i:o<n?n:o,xo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Vs={...xo,transform:n=>li(0,1,n)},lu={...xo,default:1},Ws=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),Vi=Ws("deg"),Na=Ws("%"),_t=Ws("px"),IS=Ws("vh"),t6=Ws("vw"),d1={...Na,parse:n=>Na.parse(n)/100,transform:n=>Na.transform(n*100)},e6={borderWidth:_t,borderTopWidth:_t,borderRightWidth:_t,borderBottomWidth:_t,borderLeftWidth:_t,borderRadius:_t,radius:_t,borderTopLeftRadius:_t,borderTopRightRadius:_t,borderBottomRightRadius:_t,borderBottomLeftRadius:_t,width:_t,maxWidth:_t,height:_t,maxHeight:_t,top:_t,right:_t,bottom:_t,left:_t,padding:_t,paddingTop:_t,paddingRight:_t,paddingBottom:_t,paddingLeft:_t,margin:_t,marginTop:_t,marginRight:_t,marginBottom:_t,marginLeft:_t,backgroundPositionX:_t,backgroundPositionY:_t},n6={rotate:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:lu,scaleX:lu,scaleY:lu,scaleZ:lu,skew:Vi,skewX:Vi,skewY:Vi,distance:_t,translateX:_t,translateY:_t,translateZ:_t,x:_t,y:_t,z:_t,perspective:_t,transformPerspective:_t,opacity:Vs,originX:d1,originY:d1,originZ:_t},h1={...xo,transform:Math.round},L0={...e6,...n6,zIndex:h1,size:_t,fillOpacity:Vs,strokeOpacity:Vs,numOctaves:h1},a6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},i6=bo.length;function r6(n,i,o){let s="",u=!0;for(let f=0;f<i6;f++){const d=bo[f],p=n[d];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(d.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||o){const m=Zy(p,L0[d]);if(!h){u=!1;const v=a6[d]||d;s+=`${v}(${m}) `}o&&(i[d]=m)}}return s=s.trim(),o?s=o(i,u?"":s):u&&(s="none"),s}function _0(n,i,o){const{style:s,vars:u,transformOrigin:f}=n;let d=!1,p=!1;for(const h in i){const m=i[h];if(wr.has(h)){d=!0;continue}else if(B0(h)){u[h]=m;continue}else{const v=Zy(m,L0[h]);h.startsWith("origin")?(p=!0,f[h]=v):s[h]=v}}if(i.transform||(d||o?s.transform=r6(i,n.transform,o):s.transform&&(s.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:v=0}=f;s.transformOrigin=`${h} ${m} ${v}`}}const V0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Wy(n,i,o){for(const s in i)!Rn(i[s])&&!Fy(s,o)&&(n[s]=i[s])}function o6({transformTemplate:n},i){return T.useMemo(()=>{const o=V0();return _0(o,i,n),Object.assign({},o.vars,o.style)},[i])}function s6(n,i){const o=n.style||{},s={};return Wy(s,o,n),Object.assign(s,o6(n,i)),s}function l6(n,i){const o={},s=s6(n,i);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=s,o}const u6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function P0(n){return typeof n!="string"||n.includes("-")?!1:!!(u6.indexOf(n)>-1||/[A-Z]/u.test(n))}const c6={offset:"stroke-dashoffset",array:"stroke-dasharray"},f6={offset:"strokeDashoffset",array:"strokeDasharray"};function d6(n,i,o=1,s=0,u=!0){n.pathLength=1;const f=u?c6:f6;n[f.offset]=_t.transform(-s);const d=_t.transform(i),p=_t.transform(o);n[f.array]=`${d} ${p}`}function p1(n,i,o){return typeof n=="string"?n:_t.transform(i+o*n)}function h6(n,i,o){const s=p1(i,n.x,n.width),u=p1(o,n.y,n.height);return`${s} ${u}`}function U0(n,{attrX:i,attrY:o,attrScale:s,originX:u,originY:f,pathLength:d,pathSpacing:p=1,pathOffset:h=0,...m},v,b){if(_0(n,m,b),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:S,dimensions:C}=n;x.transform&&(C&&(S.transform=x.transform),delete x.transform),C&&(u!==void 0||f!==void 0||S.transform)&&(S.transformOrigin=h6(C,u!==void 0?u:.5,f!==void 0?f:.5)),i!==void 0&&(x.x=i),o!==void 0&&(x.y=o),s!==void 0&&(x.scale=s),d!==void 0&&d6(x,d,p,h,!1)}const Jy=()=>({...V0(),attrs:{}}),H0=n=>typeof n=="string"&&n.toLowerCase()==="svg";function p6(n,i,o,s){const u=T.useMemo(()=>{const f=Jy();return U0(f,i,H0(s),n.transformTemplate),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Wy(f,n.style,n),u.style={...f,...u.style}}return u}function m6(n=!1){return(o,s,u,{latestValues:f},d)=>{const h=(P0(o)?p6:l6)(s,f,d,o),m=_S(s,typeof o=="string",n),v=o!==T.Fragment?{...m,...h,ref:u}:{},{children:b}=s,x=T.useMemo(()=>Rn(b)?b.get():b,[b]);return T.createElement(o,{...v,children:x})}}function m1(n){const i=[{},{}];return n==null||n.values.forEach((o,s)=>{i[0][s]=o.get(),i[1][s]=o.getVelocity()}),i}function $0(n,i,o,s){if(typeof i=="function"){const[u,f]=m1(s);i=i(o!==void 0?o:n.custom,u,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,f]=m1(s);i=i(o!==void 0?o:n.custom,u,f)}return i}const qd=n=>Array.isArray(n),g6=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),v6=n=>qd(n)?n[n.length-1]||0:n;function bu(n){const i=Rn(n)?n.get():n;return g6(i)?i.toValue():i}function y6({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:o},s,u,f){const d={latestValues:b6(s,u,f,n),renderState:i()};return o&&(d.onMount=p=>o({props:s,current:p,...d}),d.onUpdate=p=>o(p)),d}const Iy=n=>(i,o)=>{const s=T.useContext(Gu),u=T.useContext(Yu),f=()=>y6(n,i,s,u);return o?f():b0(f)};function b6(n,i,o,s){const u={},f=s(n,{});for(const x in f)u[x]=bu(f[x]);let{initial:d,animate:p}=n;const h=Ku(n),m=Yy(n);i&&m&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let v=o?o.initial===!1:!1;v=v||d===!1;const b=v?p:d;if(b&&typeof b!="boolean"&&!Xu(b)){const x=Array.isArray(b)?b:[b];for(let S=0;S<x.length;S++){const C=$0(n,x[S]);if(C){const{transitionEnd:R,transition:k,...A}=C;for(const D in A){let M=A[D];if(Array.isArray(M)){const L=v?M.length-1:0;M=M[L]}M!==null&&(u[D]=M)}for(const D in R)u[D]=R[D]}}}return u}function q0(n,i,o){var s;const{style:u}=n,f={};for(const d in u)(Rn(u[d])||i.style&&Rn(i.style[d])||Fy(d,n)||((s=o==null?void 0:o.getValue(d))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(f[d]=u[d]);return f}const x6={useVisualState:Iy({scrapeMotionValuesFromProps:q0,createRenderState:V0})};function t2(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}function e2(n,{style:i,vars:o},s,u){Object.assign(n.style,i,u&&u.getProjectionStyles(s));for(const f in o)n.style.setProperty(f,o[f])}const n2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function a2(n,i,o,s){e2(n,i,void 0,s);for(const u in i.attrs)n.setAttribute(n2.has(u)?u:D0(u),i.attrs[u])}function i2(n,i,o){const s=q0(n,i,o);for(const u in n)if(Rn(n[u])||Rn(i[u])){const f=bo.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;s[f]=n[u]}return s}const g1=["x","y","width","height","cx","cy","r"],w6={useVisualState:Iy({scrapeMotionValuesFromProps:i2,createRenderState:Jy,onUpdate:({props:n,prevProps:i,current:o,renderState:s,latestValues:u})=>{if(!o)return;let f=!!n.drag;if(!f){for(const p in u)if(wr.has(p)){f=!0;break}}if(!f)return;let d=!i;if(i)for(let p=0;p<g1.length;p++){const h=g1[p];n[h]!==i[h]&&(d=!0)}d&&ze.read(()=>{t2(o,s),ze.render(()=>{U0(s,u,H0(o.tagName),n.transformTemplate),a2(o,s)})})}})};function S6(n,i){return function(s,{forwardMotionProps:u}={forwardMotionProps:!1}){const d={...P0(s)?w6:x6,preloadedFeatures:n,useRender:m6(u),createVisualElement:i,Component:s};return XS(d)}}function Ps(n,i,o){const s=n.getProps();return $0(s,i,o!==void 0?o:s.custom,n)}const r2=new Set(["width","height","top","left","right","bottom",...bo]);function E6(n,i,o){n.hasValue(i)?n.getValue(i).set(o):n.addValue(i,Ns(o))}function C6(n,i){const o=Ps(n,i);let{transitionEnd:s={},transition:u={},...f}=o||{};f={...f,...s};for(const d in f){const p=v6(f[d]);E6(n,d,p)}}function A6(n){return!!(Rn(n)&&n.add)}function Yd(n,i){const o=n.getValue("willChange");if(A6(o))return o.add(i)}function o2(n){return n.props[Gy]}const s2=(n,i,o)=>(((1-3*o+3*i)*n+(3*o-6*i))*n+3*i)*n,T6=1e-7,j6=12;function z6(n,i,o,s,u){let f,d,p=0;do d=i+(o-i)/2,f=s2(d,s,u)-n,f>0?o=d:i=d;while(Math.abs(f)>T6&&++p<j6);return d}function Js(n,i,o,s){if(n===i&&o===s)return Fn;const u=f=>z6(f,0,1,n,o);return f=>f===0||f===1?f:s2(u(f),i,s)}const l2=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,u2=n=>i=>1-n(1-i),c2=Js(.33,1.53,.69,.99),Y0=u2(c2),f2=l2(Y0),d2=n=>(n*=2)<1?.5*Y0(n):.5*(2-Math.pow(2,-10*(n-1))),G0=n=>1-Math.sin(Math.acos(n)),h2=u2(G0),p2=l2(G0),m2=n=>/^0[^.\s]+$/u.test(n);function R6(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||m2(n):!0}const Cs=n=>Math.round(n*1e5)/1e5,X0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function M6(n){return n==null}const k6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,K0=(n,i)=>o=>!!(typeof o=="string"&&k6.test(o)&&o.startsWith(n)||i&&!M6(o)&&Object.prototype.hasOwnProperty.call(o,i)),g2=(n,i,o)=>s=>{if(typeof s!="string")return s;const[u,f,d,p]=s.match(X0);return{[n]:parseFloat(u),[i]:parseFloat(f),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},O6=n=>li(0,255,n),cd={...xo,transform:n=>Math.round(O6(n))},pr={test:K0("rgb","red"),parse:g2("red","green","blue"),transform:({red:n,green:i,blue:o,alpha:s=1})=>"rgba("+cd.transform(n)+", "+cd.transform(i)+", "+cd.transform(o)+", "+Cs(Vs.transform(s))+")"};function D6(n){let i="",o="",s="",u="";return n.length>5?(i=n.substring(1,3),o=n.substring(3,5),s=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),o=n.substring(2,3),s=n.substring(3,4),u=n.substring(4,5),i+=i,o+=o,s+=s,u+=u),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:u?parseInt(u,16)/255:1}}const Gd={test:K0("#"),parse:D6,transform:pr.transform},eo={test:K0("hsl","hue"),parse:g2("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:o,alpha:s=1})=>"hsla("+Math.round(n)+", "+Na.transform(Cs(i))+", "+Na.transform(Cs(o))+", "+Cs(Vs.transform(s))+")"},zn={test:n=>pr.test(n)||Gd.test(n)||eo.test(n),parse:n=>pr.test(n)?pr.parse(n):eo.test(n)?eo.parse(n):Gd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?pr.transform(n):eo.transform(n)},B6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function N6(n){var i,o;return isNaN(n)&&typeof n=="string"&&(((i=n.match(X0))===null||i===void 0?void 0:i.length)||0)+(((o=n.match(B6))===null||o===void 0?void 0:o.length)||0)>0}const v2="number",y2="color",L6="var",_6="var(",v1="${}",V6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Us(n){const i=n.toString(),o=[],s={color:[],number:[],var:[]},u=[];let f=0;const p=i.replace(V6,h=>(zn.test(h)?(s.color.push(f),u.push(y2),o.push(zn.parse(h))):h.startsWith(_6)?(s.var.push(f),u.push(L6),o.push(h)):(s.number.push(f),u.push(v2),o.push(parseFloat(h))),++f,v1)).split(v1);return{values:o,split:p,indexes:s,types:u}}function b2(n){return Us(n).values}function x2(n){const{split:i,types:o}=Us(n),s=i.length;return u=>{let f="";for(let d=0;d<s;d++)if(f+=i[d],u[d]!==void 0){const p=o[d];p===v2?f+=Cs(u[d]):p===y2?f+=zn.transform(u[d]):f+=u[d]}return f}}const P6=n=>typeof n=="number"?0:n;function U6(n){const i=b2(n);return x2(n)(i.map(P6))}const Ui={test:N6,parse:b2,createTransformer:x2,getAnimatableNone:U6},H6=new Set(["brightness","contrast","saturate","opacity"]);function $6(n){const[i,o]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[s]=o.match(X0)||[];if(!s)return n;const u=o.replace(s,"");let f=H6.has(i)?1:0;return s!==o&&(f*=100),i+"("+f+u+")"}const q6=/\b([a-z-]*)\(.*?\)/gu,Xd={...Ui,getAnimatableNone:n=>{const i=n.match(q6);return i?i.map($6).join(" "):n}},Y6={...L0,color:zn,backgroundColor:zn,outlineColor:zn,fill:zn,stroke:zn,borderColor:zn,borderTopColor:zn,borderRightColor:zn,borderBottomColor:zn,borderLeftColor:zn,filter:Xd,WebkitFilter:Xd},w2=n=>Y6[n];function S2(n,i){let o=w2(n);return o!==Xd&&(o=Ui),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const G6=new Set(["auto","none","0"]);function X6(n,i,o){let s=0,u;for(;s<n.length&&!u;){const f=n[s];typeof f=="string"&&!G6.has(f)&&Us(f).values.length&&(u=n[s]),s++}if(u&&o)for(const f of i)n[f]=S2(o,u)}const mr=n=>n*180/Math.PI,Kd=n=>{const i=mr(Math.atan2(n[1],n[0]));return Qd(i)},K6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Kd,rotateZ:Kd,skewX:n=>mr(Math.atan(n[1])),skewY:n=>mr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Qd=n=>(n=n%360,n<0&&(n+=360),n),y1=Kd,b1=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),x1=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Q6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:b1,scaleY:x1,scale:n=>(b1(n)+x1(n))/2,rotateX:n=>Qd(mr(Math.atan2(n[6],n[5]))),rotateY:n=>Qd(mr(Math.atan2(-n[2],n[0]))),rotateZ:y1,rotate:y1,skewX:n=>mr(Math.atan(n[4])),skewY:n=>mr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function w1(n){return n.includes("scale")?1:0}function Fd(n,i){if(!n||n==="none")return w1(i);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,u;if(o)s=Q6,u=o;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=K6,u=p}if(!u)return w1(i);const f=s[i],d=u[1].split(",").map(Z6);return typeof f=="function"?f(d):d[f]}const F6=(n,i)=>{const{transform:o="none"}=getComputedStyle(n);return Fd(o,i)};function Z6(n){return parseFloat(n.trim())}const S1=n=>n===xo||n===_t,W6=new Set(["x","y","z"]),J6=bo.filter(n=>!W6.has(n));function I6(n){const i=[];return J6.forEach(o=>{const s=n.getValue(o);s!==void 0&&(i.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),i}const po={width:({x:n},{paddingLeft:i="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),height:({y:n},{paddingTop:i="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Fd(i,"x"),y:(n,{transform:i})=>Fd(i,"y")};po.translateX=po.x;po.translateY=po.y;const yr=new Set;let Zd=!1,Wd=!1;function E2(){if(Wd){const n=Array.from(yr).filter(s=>s.needsMeasurement),i=new Set(n.map(s=>s.element)),o=new Map;i.forEach(s=>{const u=I6(s);u.length&&(o.set(s,u),s.render())}),n.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const u=o.get(s);u&&u.forEach(([f,d])=>{var p;(p=s.getValue(f))===null||p===void 0||p.set(d)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Wd=!1,Zd=!1,yr.forEach(n=>n.complete()),yr.clear()}function C2(){yr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Wd=!0)})}function t8(){C2(),E2()}class Q0{constructor(i,o,s,u,f,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=s,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(yr.add(this),Zd||(Zd=!0,ze.read(C2),ze.resolveKeyframes(E2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:s,motionValue:u}=this;for(let f=0;f<i.length;f++)if(i[f]===null)if(f===0){const d=u==null?void 0:u.get(),p=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&o){const h=s.readValue(o,p);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=p),u&&d===void 0&&u.set(i[0])}else i[f]=i[f-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),yr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,yr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const A2=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),e8=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function n8(n){const i=e8.exec(n);if(!i)return[,];const[,o,s,u]=i;return[`--${o??s}`,u]}function T2(n,i,o=1){const[s,u]=n8(n);if(!s)return;const f=window.getComputedStyle(i).getPropertyValue(s);if(f){const d=f.trim();return A2(d)?parseFloat(d):d}return N0(u)?T2(u,i,o+1):u}const j2=n=>i=>i.test(n),a8={test:n=>n==="auto",parse:n=>n},z2=[xo,_t,Na,Vi,t6,IS,a8],E1=n=>z2.find(j2(n));class R2 extends Q0{constructor(i,o,s,u,f){super(i,o,s,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let m=i[h];if(typeof m=="string"&&(m=m.trim(),N0(m))){const v=T2(m,o.current);v!==void 0&&(i[h]=v),h===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!r2.has(s)||i.length!==2)return;const[u,f]=i,d=E1(u),p=E1(f);if(d!==p)if(S1(d)&&S1(p))for(let h=0;h<i.length;h++){const m=i[h];typeof m=="string"&&(i[h]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,s=[];for(let u=0;u<i.length;u++)R6(i[u])&&s.push(u);s.length&&X6(i,s,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=po[s](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&i.getValue(s,u).jump(u,!1)}measureEndState(){var i;const{element:o,name:s,unresolvedKeyframes:u}=this;if(!o||!o.current)return;const f=o.getValue(s);f&&f.jump(this.measuredOrigin,!1);const d=u.length-1,p=u[d];u[d]=po[s](o.measureViewportBox(),window.getComputedStyle(o.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,m])=>{o.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const C1=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ui.test(n)||n==="0")&&!n.startsWith("url("));function i8(n){const i=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==i)return!0}function r8(n,i,o,s){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=C1(u,i),p=C1(f,i);return!d||!p?!1:i8(n)||(o==="spring"||j0(o))&&s}const o8=n=>n!==null;function Qu(n,{repeat:i,repeatType:o="loop"},s){const u=n.filter(o8),f=i&&o!=="loop"&&i%2===1?0:u.length-1;return!f||s===void 0?u[f]:s}const s8=40;class M2{constructor({autoplay:i=!0,delay:o=0,type:s="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",...p}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ba.now(),this.options={autoplay:i,delay:o,type:s,repeat:u,repeatDelay:f,repeatType:d,...p},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>s8?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&t8(),this._resolved}onKeyframesResolved(i,o){this.resolvedAt=Ba.now(),this.hasAttemptedResolve=!0;const{name:s,type:u,velocity:f,delay:d,onComplete:p,onUpdate:h,isGenerator:m}=this.options;if(!m&&!r8(i,s,u,f))if(d)this.options.duration=0;else{h&&h(Qu(i,this.options,o)),p&&p(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,o);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:o,...v},this.onPostResolved())}onPostResolved(){}then(i,o){return this.currentFinishedPromise.then(i,o)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Pe=(n,i,o)=>n+(i-n)*o;function fd(n,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(i-n)*6*o:o<1/2?i:o<2/3?n+(i-n)*(2/3-o)*6:n}function l8({hue:n,saturation:i,lightness:o,alpha:s}){n/=360,i/=100,o/=100;let u=0,f=0,d=0;if(!i)u=f=d=o;else{const p=o<.5?o*(1+i):o+i-o*i,h=2*o-p;u=fd(h,p,n+1/3),f=fd(h,p,n),d=fd(h,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:s}}function Mu(n,i){return o=>o>0?i:n}const dd=(n,i,o)=>{const s=n*n,u=o*(i*i-s)+s;return u<0?0:Math.sqrt(u)},u8=[Gd,pr,eo],c8=n=>u8.find(i=>i.test(n));function A1(n){const i=c8(n);if(!i)return!1;let o=i.parse(n);return i===eo&&(o=l8(o)),o}const T1=(n,i)=>{const o=A1(n),s=A1(i);if(!o||!s)return Mu(n,i);const u={...o};return f=>(u.red=dd(o.red,s.red,f),u.green=dd(o.green,s.green,f),u.blue=dd(o.blue,s.blue,f),u.alpha=Pe(o.alpha,s.alpha,f),pr.transform(u))},f8=(n,i)=>o=>i(n(o)),Is=(...n)=>n.reduce(f8),Jd=new Set(["none","hidden"]);function d8(n,i){return Jd.has(n)?o=>o<=0?n:i:o=>o>=1?i:n}function h8(n,i){return o=>Pe(n,i,o)}function F0(n){return typeof n=="number"?h8:typeof n=="string"?N0(n)?Mu:zn.test(n)?T1:g8:Array.isArray(n)?k2:typeof n=="object"?zn.test(n)?T1:p8:Mu}function k2(n,i){const o=[...n],s=o.length,u=n.map((f,d)=>F0(f)(f,i[d]));return f=>{for(let d=0;d<s;d++)o[d]=u[d](f);return o}}function p8(n,i){const o={...n,...i},s={};for(const u in o)n[u]!==void 0&&i[u]!==void 0&&(s[u]=F0(n[u])(n[u],i[u]));return u=>{for(const f in s)o[f]=s[f](u);return o}}function m8(n,i){var o;const s=[],u={color:0,var:0,number:0};for(let f=0;f<i.values.length;f++){const d=i.types[f],p=n.indexes[d][u[d]],h=(o=n.values[p])!==null&&o!==void 0?o:0;s[f]=h,u[d]++}return s}const g8=(n,i)=>{const o=Ui.createTransformer(i),s=Us(n),u=Us(i);return s.indexes.var.length===u.indexes.var.length&&s.indexes.color.length===u.indexes.color.length&&s.indexes.number.length>=u.indexes.number.length?Jd.has(n)&&!u.values.length||Jd.has(i)&&!s.values.length?d8(n,i):Is(k2(m8(s,u),u.values),o):Mu(n,i)};function O2(n,i,o){return typeof n=="number"&&typeof i=="number"&&typeof o=="number"?Pe(n,i,o):F0(n)(n,i)}const v8=5;function D2(n,i,o){const s=Math.max(i-v8,0);return Dy(o-n(s),i-s)}const We={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},j1=.001;function y8({duration:n=We.duration,bounce:i=We.bounce,velocity:o=We.velocity,mass:s=We.mass}){let u,f,d=1-i;d=li(We.minDamping,We.maxDamping,d),n=li(We.minDuration,We.maxDuration,oi(n)),d<1?(u=m=>{const v=m*d,b=v*n,x=v-o,S=Id(m,d),C=Math.exp(-b);return j1-x/S*C},f=m=>{const b=m*d*n,x=b*o+o,S=Math.pow(d,2)*Math.pow(m,2)*n,C=Math.exp(-b),R=Id(Math.pow(m,2),d);return(-u(m)+j1>0?-1:1)*((x-S)*C)/R}):(u=m=>{const v=Math.exp(-m*n),b=(m-o)*n+1;return-.001+v*b},f=m=>{const v=Math.exp(-m*n),b=(o-m)*(n*n);return v*b});const p=5/n,h=x8(u,f,p);if(n=ri(n),isNaN(h))return{stiffness:We.stiffness,damping:We.damping,duration:n};{const m=Math.pow(h,2)*s;return{stiffness:m,damping:d*2*Math.sqrt(s*m),duration:n}}}const b8=12;function x8(n,i,o){let s=o;for(let u=1;u<b8;u++)s=s-n(s)/i(s);return s}function Id(n,i){return n*Math.sqrt(1-i*i)}const w8=["duration","bounce"],S8=["stiffness","damping","mass"];function z1(n,i){return i.some(o=>n[o]!==void 0)}function E8(n){let i={velocity:We.velocity,stiffness:We.stiffness,damping:We.damping,mass:We.mass,isResolvedFromDuration:!1,...n};if(!z1(n,S8)&&z1(n,w8))if(n.visualDuration){const o=n.visualDuration,s=2*Math.PI/(o*1.2),u=s*s,f=2*li(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:We.mass,stiffness:u,damping:f}}else{const o=y8(n);i={...i,...o,mass:We.mass},i.isResolvedFromDuration=!0}return i}function B2(n=We.visualDuration,i=We.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:s,restDelta:u}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:f},{stiffness:h,damping:m,mass:v,duration:b,velocity:x,isResolvedFromDuration:S}=E8({...o,velocity:-oi(o.velocity||0)}),C=x||0,R=m/(2*Math.sqrt(h*v)),k=d-f,A=oi(Math.sqrt(h/v)),D=Math.abs(k)<5;s||(s=D?We.restSpeed.granular:We.restSpeed.default),u||(u=D?We.restDelta.granular:We.restDelta.default);let M;if(R<1){const B=Id(A,R);M=W=>{const ot=Math.exp(-R*A*W);return d-ot*((C+R*A*k)/B*Math.sin(B*W)+k*Math.cos(B*W))}}else if(R===1)M=B=>d-Math.exp(-A*B)*(k+(C+A*k)*B);else{const B=A*Math.sqrt(R*R-1);M=W=>{const ot=Math.exp(-R*A*W),dt=Math.min(B*W,300);return d-ot*((C+R*A*k)*Math.sinh(dt)+B*k*Math.cosh(dt))/B}}const L={calculatedDuration:S&&b||null,next:B=>{const W=M(B);if(S)p.done=B>=b;else{let ot=0;R<1&&(ot=B===0?ri(C):D2(M,B,W));const dt=Math.abs(ot)<=s,X=Math.abs(d-W)<=u;p.done=dt&&X}return p.value=p.done?d:W,p},toString:()=>{const B=Math.min(By(L),Hd),W=Ny(ot=>L.next(B*ot).value,B,30);return B+"ms "+W}};return L}function R1({keyframes:n,velocity:i=0,power:o=.8,timeConstant:s=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:h,restDelta:m=.5,restSpeed:v}){const b=n[0],x={done:!1,value:b},S=dt=>p!==void 0&&dt<p||h!==void 0&&dt>h,C=dt=>p===void 0?h:h===void 0||Math.abs(p-dt)<Math.abs(h-dt)?p:h;let R=o*i;const k=b+R,A=d===void 0?k:d(k);A!==k&&(R=A-b);const D=dt=>-R*Math.exp(-dt/s),M=dt=>A+D(dt),L=dt=>{const X=D(dt),it=M(dt);x.done=Math.abs(X)<=m,x.value=x.done?A:it};let B,W;const ot=dt=>{S(x.value)&&(B=dt,W=B2({keyframes:[x.value,C(x.value)],velocity:D2(M,dt,x.value),damping:u,stiffness:f,restDelta:m,restSpeed:v}))};return ot(0),{calculatedDuration:null,next:dt=>{let X=!1;return!W&&B===void 0&&(X=!0,L(dt),ot(dt)),B!==void 0&&dt>=B?W.next(dt-B):(!X&&L(dt),x)}}}const C8=Js(.42,0,1,1),A8=Js(0,0,.58,1),N2=Js(.42,0,.58,1),T8=n=>Array.isArray(n)&&typeof n[0]!="number",j8={linear:Fn,easeIn:C8,easeInOut:N2,easeOut:A8,circIn:G0,circInOut:p2,circOut:h2,backIn:Y0,backInOut:f2,backOut:c2,anticipate:d2},M1=n=>{if(z0(n)){Oy(n.length===4);const[i,o,s,u]=n;return Js(i,o,s,u)}else if(typeof n=="string")return j8[n];return n};function z8(n,i,o){const s=[],u=o||O2,f=n.length-1;for(let d=0;d<f;d++){let p=u(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||Fn:i;p=Is(h,p)}s.push(p)}return s}function R8(n,i,{clamp:o=!0,ease:s,mixer:u}={}){const f=n.length;if(Oy(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const p=z8(i,s,u),h=p.length,m=v=>{if(d&&v<n[0])return i[0];let b=0;if(h>1)for(;b<n.length-2&&!(v<n[b+1]);b++);const x=fo(n[b],n[b+1],v);return p[b](x)};return o?v=>m(li(n[0],n[f-1],v)):m}function M8(n,i){const o=n[n.length-1];for(let s=1;s<=i;s++){const u=fo(0,i,s);n.push(Pe(o,1,u))}}function k8(n){const i=[0];return M8(i,n.length-1),i}function O8(n,i){return n.map(o=>o*i)}function D8(n,i){return n.map(()=>i||N2).splice(0,n.length-1)}function ku({duration:n=300,keyframes:i,times:o,ease:s="easeInOut"}){const u=T8(s)?s.map(M1):M1(s),f={done:!1,value:i[0]},d=O8(o&&o.length===i.length?o:k8(i),n),p=R8(d,i,{ease:Array.isArray(u)?u:D8(i,u)});return{calculatedDuration:n,next:h=>(f.value=p(h),f.done=h>=n,f)}}const B8=n=>{const i=({timestamp:o})=>n(o);return{start:()=>ze.update(i,!0),stop:()=>Pi(i),now:()=>En.isProcessing?En.timestamp:Ba.now()}},N8={decay:R1,inertia:R1,tween:ku,keyframes:ku,spring:B2},L8=n=>n/100;class Z0 extends M2{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:o,motionValue:s,element:u,keyframes:f}=this.options,d=(u==null?void 0:u.KeyframeResolver)||Q0,p=(h,m)=>this.onKeyframesResolved(h,m);this.resolver=new d(f,p,o,s,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:o="keyframes",repeat:s=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=this.options,p=j0(o)?o:N8[o]||ku;let h,m;p!==ku&&typeof i[0]!="number"&&(h=Is(L8,O2(i[0],i[1])),i=[0,100]);const v=p({...this.options,keyframes:i});f==="mirror"&&(m=p({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=By(v));const{calculatedDuration:b}=v,x=b+u,S=x*(s+1)-u;return{generator:v,mirroredGenerator:m,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:x,totalDuration:S}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,o=!1){const{resolved:s}=this;if(!s){const{keyframes:dt}=this.options;return{done:!0,value:dt[dt.length-1]}}const{finalKeyframe:u,generator:f,mirroredGenerator:d,mapPercentToKeyframes:p,keyframes:h,calculatedDuration:m,totalDuration:v,resolvedDuration:b}=s;if(this.startTime===null)return f.next(0);const{delay:x,repeat:S,repeatType:C,repeatDelay:R,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),o?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const A=this.currentTime-x*(this.speed>=0?1:-1),D=this.speed>=0?A<0:A>v;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let M=this.currentTime,L=f;if(S){const dt=Math.min(this.currentTime,v)/b;let X=Math.floor(dt),it=dt%1;!it&&dt>=1&&(it=1),it===1&&X--,X=Math.min(X,S+1),!!(X%2)&&(C==="reverse"?(it=1-it,R&&(it-=R/b)):C==="mirror"&&(L=d)),M=li(0,1,it)*b}const B=D?{done:!1,value:h[0]}:L.next(M);p&&(B.value=p(B.value));let{done:W}=B;!D&&m!==null&&(W=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const ot=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return ot&&u!==void 0&&(B.value=Qu(h,this.options,u)),k&&k(B.value),ot&&this.finish(),B}get duration(){const{resolved:i}=this;return i?oi(i.calculatedDuration):0}get time(){return oi(this.currentTime)}set time(i){i=ri(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=oi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=B8,onPlay:o,startTime:s}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),o&&o();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const _8=new Set(["opacity","clipPath","filter","transform"]);function V8(n,i,o,{delay:s=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:p="easeInOut",times:h}={}){const m={[i]:o};h&&(m.offset=h);const v=_y(p,u);return Array.isArray(v)&&(m.easing=v),n.animate(m,{delay:s,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"})}const P8=C0(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ou=10,U8=2e4;function H8(n){return j0(n.type)||n.type==="spring"||!Ly(n.ease)}function $8(n,i){const o=new Z0({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:n[0]};const u=[];let f=0;for(;!s.done&&f<U8;)s=o.sample(f),u.push(s.value),f+=Ou;return{times:void 0,keyframes:u,duration:f-Ou,ease:"linear"}}const L2={anticipate:d2,backInOut:f2,circInOut:p2};function q8(n){return n in L2}class k1 extends M2{constructor(i){super(i);const{name:o,motionValue:s,element:u,keyframes:f}=this.options;this.resolver=new R2(f,(d,p)=>this.onKeyframesResolved(d,p),o,s,u),this.resolver.scheduleResolve()}initPlayback(i,o){let{duration:s=300,times:u,ease:f,type:d,motionValue:p,name:h,startTime:m}=this.options;if(!p.owner||!p.owner.current)return!1;if(typeof f=="string"&&zu()&&q8(f)&&(f=L2[f]),H8(this.options)){const{onComplete:b,onUpdate:x,motionValue:S,element:C,...R}=this.options,k=$8(i,R);i=k.keyframes,i.length===1&&(i[1]=i[0]),s=k.duration,u=k.times,f=k.ease,d="keyframes"}const v=V8(p.owner.current,h,i,{...this.options,duration:s,times:u,ease:f});return v.startTime=m??this.calcStartTime(),this.pendingTimeline?(a1(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:b}=this.options;p.set(Qu(i,this.options,o)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:s,times:u,type:d,ease:f,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:o}=i;return oi(o)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:o}=i;return oi(o.currentTime||0)}set time(i){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.currentTime=ri(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:o}=i;return o.playbackRate}set speed(i){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:o}=i;return o.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:o}=i;return o.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:o}=this;if(!o)return Fn;const{animation:s}=o;a1(s,i)}return Fn}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:o,keyframes:s,duration:u,type:f,ease:d,times:p}=i;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:v,onComplete:b,element:x,...S}=this.options,C=new Z0({...S,keyframes:s,duration:u,type:f,ease:d,times:p,isGenerator:!0}),R=ri(this.time);m.setWithVelocity(C.sample(R-Ou).value,C.sample(R).value,Ou)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:o,name:s,repeatDelay:u,repeatType:f,damping:d,type:p}=i;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=o.owner.getProps();return P8()&&s&&_8.has(s)&&!h&&!m&&!u&&f!=="mirror"&&d!==0&&p!=="inertia"}}const Y8={type:"spring",stiffness:500,damping:25,restSpeed:10},G8=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),X8={type:"keyframes",duration:.8},K8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q8=(n,{keyframes:i})=>i.length>2?X8:wr.has(n)?n.startsWith("scale")?G8(i[1]):Y8:K8;function F8({when:n,delay:i,delayChildren:o,staggerChildren:s,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:p,from:h,elapsed:m,...v}){return!!Object.keys(v).length}const W0=(n,i,o,s={},u,f)=>d=>{const p=T0(s,n)||{},h=p.delay||s.delay||0;let{elapsed:m=0}=s;m=m-ri(h);let v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-m,onUpdate:x=>{i.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:i,element:f?void 0:u};F8(p)||(v={...v,...Q8(n,v)}),v.duration&&(v.duration=ri(v.duration)),v.repeatDelay&&(v.repeatDelay=ri(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(b=!0)),v.allowFlatten=!p.type&&!p.ease,b&&!f&&i.get()!==void 0){const x=Qu(v.keyframes,p);if(x!==void 0)return ze.update(()=>{v.onUpdate(x),v.onComplete()}),new yS([])}return!f&&k1.supports(v)?new k1(v):new Z0(v)};function Z8({protectedKeys:n,needsAnimating:i},o){const s=n.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,s}function _2(n,i,{delay:o=0,transitionOverride:s,type:u}={}){var f;let{transition:d=n.getDefaultTransition(),transitionEnd:p,...h}=i;s&&(d=s);const m=[],v=u&&n.animationState&&n.animationState.getState()[u];for(const b in h){const x=n.getValue(b,(f=n.latestValues[b])!==null&&f!==void 0?f:null),S=h[b];if(S===void 0||v&&Z8(v,b))continue;const C={delay:o,...T0(d||{},b)};let R=!1;if(window.MotionHandoffAnimation){const A=o2(n);if(A){const D=window.MotionHandoffAnimation(A,b,ze);D!==null&&(C.startTime=D,R=!0)}}Yd(n,b),x.start(W0(b,x,S,n.shouldReduceMotion&&r2.has(b)?{type:!1}:C,n,R));const k=x.animation;k&&m.push(k)}return p&&Promise.all(m).then(()=>{ze.update(()=>{p&&C6(n,p)})}),m}function t0(n,i,o={}){var s;const u=Ps(n,i,o.type==="exit"?(s=n.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:f=n.getDefaultTransition()||{}}=u||{};o.transitionOverride&&(f=o.transitionOverride);const d=u?()=>Promise.all(_2(n,u,o)):()=>Promise.resolve(),p=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:v=0,staggerChildren:b,staggerDirection:x}=f;return W8(n,i,v+m,b,x,o)}:()=>Promise.resolve(),{when:h}=f;if(h){const[m,v]=h==="beforeChildren"?[d,p]:[p,d];return m().then(()=>v())}else return Promise.all([d(),p(o.delay)])}function W8(n,i,o=0,s=0,u=1,f){const d=[],p=(n.variantChildren.size-1)*s,h=u===1?(m=0)=>m*s:(m=0)=>p-m*s;return Array.from(n.variantChildren).sort(J8).forEach((m,v)=>{m.notify("AnimationStart",i),d.push(t0(m,i,{...f,delay:o+h(v)}).then(()=>m.notify("AnimationComplete",i)))}),Promise.all(d)}function J8(n,i){return n.sortNodePosition(i)}function I8(n,i,o={}){n.notify("AnimationStart",i);let s;if(Array.isArray(i)){const u=i.map(f=>t0(n,f,o));s=Promise.all(u)}else if(typeof i=="string")s=t0(n,i,o);else{const u=typeof i=="function"?Ps(n,i,o.custom):i;s=Promise.all(_2(n,u,o))}return s.then(()=>{n.notify("AnimationComplete",i)})}function V2(n,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==n.length)return!1;for(let s=0;s<o;s++)if(i[s]!==n[s])return!1;return!0}const tE=O0.length;function P2(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?P2(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const i={};for(let o=0;o<tE;o++){const s=O0[o],u=n.props[s];(Ls(u)||u===!1)&&(i[s]=u)}return i}const eE=[...k0].reverse(),nE=k0.length;function aE(n){return i=>Promise.all(i.map(({animation:o,options:s})=>I8(n,o,s)))}function iE(n){let i=aE(n),o=O1(),s=!0;const u=h=>(m,v)=>{var b;const x=Ps(n,v,h==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(x){const{transition:S,transitionEnd:C,...R}=x;m={...m,...R,...C}}return m};function f(h){i=h(n)}function d(h){const{props:m}=n,v=P2(n.parent)||{},b=[],x=new Set;let S={},C=1/0;for(let k=0;k<nE;k++){const A=eE[k],D=o[A],M=m[A]!==void 0?m[A]:v[A],L=Ls(M),B=A===h?D.isActive:null;B===!1&&(C=k);let W=M===v[A]&&M!==m[A]&&L;if(W&&s&&n.manuallyAnimateOnMount&&(W=!1),D.protectedKeys={...S},!D.isActive&&B===null||!M&&!D.prevProp||Xu(M)||typeof M=="boolean")continue;const ot=rE(D.prevProp,M);let dt=ot||A===h&&D.isActive&&!W&&L||k>C&&L,X=!1;const it=Array.isArray(M)?M:[M];let J=it.reduce(u(A),{});B===!1&&(J={});const{prevResolvedValues:Jt={}}=D,ge={...Jt,...J},Z=Q=>{dt=!0,x.has(Q)&&(X=!0,x.delete(Q)),D.needsAnimating[Q]=!0;const rt=n.getValue(Q);rt&&(rt.liveStyle=!1)};for(const Q in ge){const rt=J[Q],vt=Jt[Q];if(S.hasOwnProperty(Q))continue;let O=!1;qd(rt)&&qd(vt)?O=!V2(rt,vt):O=rt!==vt,O?rt!=null?Z(Q):x.add(Q):rt!==void 0&&x.has(Q)?Z(Q):D.protectedKeys[Q]=!0}D.prevProp=M,D.prevResolvedValues=J,D.isActive&&(S={...S,...J}),s&&n.blockInitialAnimation&&(dt=!1),dt&&(!(W&&ot)||X)&&b.push(...it.map(Q=>({animation:Q,options:{type:A}})))}if(x.size){const k={};if(typeof m.initial!="boolean"){const A=Ps(n,Array.isArray(m.initial)?m.initial[0]:m.initial);A&&A.transition&&(k.transition=A.transition)}x.forEach(A=>{const D=n.getBaseTarget(A),M=n.getValue(A);M&&(M.liveStyle=!0),k[A]=D??null}),b.push({animation:k})}let R=!!b.length;return s&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(R=!1),s=!1,R?i(b):Promise.resolve()}function p(h,m){var v;if(o[h].isActive===m)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(x=>{var S;return(S=x.animationState)===null||S===void 0?void 0:S.setActive(h,m)}),o[h].isActive=m;const b=d(h);for(const x in o)o[x].protectedKeys={};return b}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>o,reset:()=>{o=O1(),s=!0}}}function rE(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!V2(i,n):!1}function fr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function O1(){return{animate:fr(!0),whileInView:fr(),whileHover:fr(),whileTap:fr(),whileDrag:fr(),whileFocus:fr(),exit:fr()}}class $i{constructor(i){this.isMounted=!1,this.node=i}update(){}}class oE extends $i{constructor(i){super(i),i.animationState||(i.animationState=iE(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Xu(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let sE=0;class lE extends $i{constructor(){super(...arguments),this.id=sE++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const u=this.node.animationState.setActive("exit",!i);o&&!i&&u.then(()=>{o(this.id)})}mount(){const{register:i,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const uE={animation:{Feature:oE},exit:{Feature:lE}};function Hs(n,i,o,s={passive:!0}){return n.addEventListener(i,o,s),()=>n.removeEventListener(i,o)}function tl(n){return{point:{x:n.pageX,y:n.pageY}}}const cE=n=>i=>M0(i)&&n(i,tl(i));function As(n,i,o,s){return Hs(n,i,cE(o),s)}function U2({top:n,left:i,right:o,bottom:s}){return{x:{min:i,max:o},y:{min:n,max:s}}}function fE({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function dE(n,i){if(!i)return n;const o=i({x:n.left,y:n.top}),s=i({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}const H2=1e-4,hE=1-H2,pE=1+H2,$2=.01,mE=0-$2,gE=0+$2;function On(n){return n.max-n.min}function vE(n,i,o){return Math.abs(n-i)<=o}function D1(n,i,o,s=.5){n.origin=s,n.originPoint=Pe(i.min,i.max,n.origin),n.scale=On(o)/On(i),n.translate=Pe(o.min,o.max,n.origin)-n.originPoint,(n.scale>=hE&&n.scale<=pE||isNaN(n.scale))&&(n.scale=1),(n.translate>=mE&&n.translate<=gE||isNaN(n.translate))&&(n.translate=0)}function Ts(n,i,o,s){D1(n.x,i.x,o.x,s?s.originX:void 0),D1(n.y,i.y,o.y,s?s.originY:void 0)}function B1(n,i,o){n.min=o.min+i.min,n.max=n.min+On(i)}function yE(n,i,o){B1(n.x,i.x,o.x),B1(n.y,i.y,o.y)}function N1(n,i,o){n.min=i.min-o.min,n.max=n.min+On(i)}function js(n,i,o){N1(n.x,i.x,o.x),N1(n.y,i.y,o.y)}const L1=()=>({translate:0,scale:1,origin:0,originPoint:0}),no=()=>({x:L1(),y:L1()}),_1=()=>({min:0,max:0}),rn=()=>({x:_1(),y:_1()});function da(n){return[n("x"),n("y")]}function hd(n){return n===void 0||n===1}function e0({scale:n,scaleX:i,scaleY:o}){return!hd(n)||!hd(i)||!hd(o)}function dr(n){return e0(n)||q2(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function q2(n){return V1(n.x)||V1(n.y)}function V1(n){return n&&n!=="0%"}function Du(n,i,o){const s=n-o,u=i*s;return o+u}function P1(n,i,o,s,u){return u!==void 0&&(n=Du(n,u,s)),Du(n,o,s)+i}function n0(n,i=0,o=1,s,u){n.min=P1(n.min,i,o,s,u),n.max=P1(n.max,i,o,s,u)}function Y2(n,{x:i,y:o}){n0(n.x,i.translate,i.scale,i.originPoint),n0(n.y,o.translate,o.scale,o.originPoint)}const U1=.999999999999,H1=1.0000000000001;function bE(n,i,o,s=!1){const u=o.length;if(!u)return;i.x=i.y=1;let f,d;for(let p=0;p<u;p++){f=o[p],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&io(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Y2(n,d)),s&&dr(f.latestValues)&&io(n,f.latestValues))}i.x<H1&&i.x>U1&&(i.x=1),i.y<H1&&i.y>U1&&(i.y=1)}function ao(n,i){n.min=n.min+i,n.max=n.max+i}function $1(n,i,o,s,u=.5){const f=Pe(n.min,n.max,u);n0(n,i,o,f,s)}function io(n,i){$1(n.x,i.x,i.scaleX,i.scale,i.originX),$1(n.y,i.y,i.scaleY,i.scale,i.originY)}function G2(n,i){return U2(dE(n.getBoundingClientRect(),i))}function xE(n,i,o){const s=G2(n,o),{scroll:u}=i;return u&&(ao(s.x,u.offset.x),ao(s.y,u.offset.y)),s}const X2=({current:n})=>n?n.ownerDocument.defaultView:null,q1=(n,i)=>Math.abs(n-i);function wE(n,i){const o=q1(n.x,i.x),s=q1(n.y,i.y);return Math.sqrt(o**2+s**2)}class K2{constructor(i,o,{transformPagePoint:s,contextWindow:u,dragSnapToOrigin:f=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=md(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,S=wE(b.offset,{x:0,y:0})>=3;if(!x&&!S)return;const{point:C}=b,{timestamp:R}=En;this.history.push({...C,timestamp:R});const{onStart:k,onMove:A}=this.handlers;x||(k&&k(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=pd(x,this.transformPagePoint),ze.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();const{onEnd:S,onSessionEnd:C,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=md(b.type==="pointercancel"?this.lastMoveEventInfo:pd(x,this.transformPagePoint),this.history);this.startEvent&&S&&S(b,k),C&&C(b,k)},!M0(i))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=s,this.contextWindow=u||window;const d=tl(i),p=pd(d,this.transformPagePoint),{point:h}=p,{timestamp:m}=En;this.history=[{...h,timestamp:m}];const{onSessionStart:v}=o;v&&v(i,md(p,this.history)),this.removeListeners=Is(As(this.contextWindow,"pointermove",this.handlePointerMove),As(this.contextWindow,"pointerup",this.handlePointerUp),As(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Pi(this.updatePoint)}}function pd(n,i){return i?{point:i(n.point)}:n}function Y1(n,i){return{x:n.x-i.x,y:n.y-i.y}}function md({point:n},i){return{point:n,delta:Y1(n,Q2(i)),offset:Y1(n,SE(i)),velocity:EE(i,.1)}}function SE(n){return n[0]}function Q2(n){return n[n.length-1]}function EE(n,i){if(n.length<2)return{x:0,y:0};let o=n.length-1,s=null;const u=Q2(n);for(;o>=0&&(s=n[o],!(u.timestamp-s.timestamp>ri(i)));)o--;if(!s)return{x:0,y:0};const f=oi(u.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-s.x)/f,y:(u.y-s.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function CE(n,{min:i,max:o},s){return i!==void 0&&n<i?n=s?Pe(i,n,s.min):Math.max(n,i):o!==void 0&&n>o&&(n=s?Pe(o,n,s.max):Math.min(n,o)),n}function G1(n,i,o){return{min:i!==void 0?n.min+i:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function AE(n,{top:i,left:o,bottom:s,right:u}){return{x:G1(n.x,o,u),y:G1(n.y,i,s)}}function X1(n,i){let o=i.min-n.min,s=i.max-n.max;return i.max-i.min<n.max-n.min&&([o,s]=[s,o]),{min:o,max:s}}function TE(n,i){return{x:X1(n.x,i.x),y:X1(n.y,i.y)}}function jE(n,i){let o=.5;const s=On(n),u=On(i);return u>s?o=fo(i.min,i.max-s,n.min):s>u&&(o=fo(n.min,n.max-u,i.min)),li(0,1,o)}function zE(n,i){const o={};return i.min!==void 0&&(o.min=i.min-n.min),i.max!==void 0&&(o.max=i.max-n.min),o}const a0=.35;function RE(n=a0){return n===!1?n=0:n===!0&&(n=a0),{x:K1(n,"left","right"),y:K1(n,"top","bottom")}}function K1(n,i,o){return{min:Q1(n,i),max:Q1(n,o)}}function Q1(n,i){return typeof n=="number"?n:n[i]||0}const ME=new WeakMap;class kE{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rn(),this.visualElement=i}start(i,{snapToCursor:o=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(tl(v).point)},f=(v,b)=>{const{drag:x,dragPropagation:S,onDragStart:C}=this.getProps();if(x&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=CS(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),da(k=>{let A=this.getAxisMotionValue(k).get()||0;if(Na.test(A)){const{projection:D}=this.visualElement;if(D&&D.layout){const M=D.layout.layoutBox[k];M&&(A=On(M)*(parseFloat(A)/100))}}this.originPoint[k]=A}),C&&ze.postRender(()=>C(v,b)),Yd(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},d=(v,b)=>{const{dragPropagation:x,dragDirectionLock:S,onDirectionLock:C,onDrag:R}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:k}=b;if(S&&this.currentDirection===null){this.currentDirection=OE(k),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",b.point,k),this.updateAxis("y",b.point,k),this.visualElement.render(),R&&R(v,b)},p=(v,b)=>this.stop(v,b),h=()=>da(v=>{var b;return this.getAnimationState(v)==="paused"&&((b=this.getAxisMotionValue(v).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new K2(i,{onSessionStart:u,onStart:f,onMove:d,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:X2(this.visualElement)})}stop(i,o){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&ze.postRender(()=>f(i,o))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,s){const{drag:u}=this.getProps();if(!s||!uu(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(d=CE(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var i;const{dragConstraints:o,dragElastic:s}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,f=this.constraints;o&&to(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&u?this.constraints=AE(u.layoutBox,o):this.constraints=!1,this.elastic=RE(s),f!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&da(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=zE(u.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!to(i))return!1;const s=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=xE(s,u.root,this.visualElement.getTransformPagePoint());let d=TE(u.layout.layoutBox,f);if(o){const p=o(fE(d));this.hasMutatedConstraints=!!p,p&&(d=U2(p))}return d}startAnimation(i){const{drag:o,dragMomentum:s,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=da(v=>{if(!uu(v,o,this.currentDirection))return;let b=h&&h[v]||{};d&&(b={min:0,max:0});const x=u?200:1e6,S=u?40:1e7,C={type:"inertia",velocity:s?i[v]:0,bounceStiffness:x,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(v,C)});return Promise.all(m).then(p)}startAxisValueAnimation(i,o){const s=this.getAxisMotionValue(i);return Yd(this.visualElement,i),s.start(W0(i,s,0,o,this.visualElement,!1))}stopAnimation(){da(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){da(i=>{var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(i){var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),u=s[o];return u||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){da(o=>{const{drag:s}=this.getProps();if(!uu(o,s,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[o];f.set(i[o]-Pe(d,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!to(o)||!s||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};da(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const h=p.get();u[d]=jE({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),da(d=>{if(!uu(d,i,null))return;const p=this.getAxisMotionValue(d),{min:h,max:m}=this.constraints[d];p.set(Pe(h,m,u[d]))})}addListeners(){if(!this.visualElement.current)return;ME.set(this.visualElement,this);const i=this.visualElement.current,o=As(i,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps();m&&v&&this.start(h)}),s=()=>{const{dragConstraints:h}=this.getProps();to(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",s);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ze.read(s);const d=Hs(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(da(v=>{const b=this.getAxisMotionValue(v);b&&(this.originPoint[v]+=h[v].translate,b.set(b.get()+h[v].translate))}),this.visualElement.render())});return()=>{d(),o(),f(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=a0,dragMomentum:p=!0}=i;return{...i,drag:o,dragDirectionLock:s,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function uu(n,i,o){return(i===!0||i===n)&&(o===null||o===n)}function OE(n,i=10){let o=null;return Math.abs(n.y)>i?o="y":Math.abs(n.x)>i&&(o="x"),o}class DE extends $i{constructor(i){super(i),this.removeGroupControls=Fn,this.removeListeners=Fn,this.controls=new kE(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fn}unmount(){this.removeGroupControls(),this.removeListeners()}}const F1=n=>(i,o)=>{n&&ze.postRender(()=>n(i,o))};class BE extends $i{constructor(){super(...arguments),this.removePointerDownListener=Fn}onPointerDown(i){this.session=new K2(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:X2(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:s,onPanEnd:u}=this.node.getProps();return{onSessionStart:F1(i),onStart:F1(o),onMove:s,onEnd:(f,d)=>{delete this.session,u&&ze.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=As(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const xu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Z1(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const gs={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(_t.test(n))n=parseFloat(n);else return n;const o=Z1(n,i.target.x),s=Z1(n,i.target.y);return`${o}% ${s}%`}},NE={correct:(n,{treeScale:i,projectionDelta:o})=>{const s=n,u=Ui.parse(n);if(u.length>5)return s;const f=Ui.createTransformer(n),d=typeof u[0]!="number"?1:0,p=o.x.scale*i.x,h=o.y.scale*i.y;u[0+d]/=p,u[1+d]/=h;const m=Pe(p,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=m),typeof u[3+d]=="number"&&(u[3+d]/=m),f(u)}};class LE extends T.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:s,layoutId:u}=this.props,{projection:f}=i;JS(_E),f&&(o.group&&o.group.add(f),s&&s.register&&u&&s.register(f),f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),xu.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:s,drag:u,isPresent:f}=this.props,d=s.projection;return d&&(d.isPresent=f,u||i.layoutDependency!==o||o===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||ze.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),R0.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:u}=i;u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),s&&s.deregister&&s.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function F2(n){const[i,o]=ky(),s=T.useContext(y0);return y.jsx(LE,{...n,layoutGroup:s,switchLayoutGroup:T.useContext(Xy),isPresent:i,safeToRemove:o})}const _E={borderRadius:{...gs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gs,borderTopRightRadius:gs,borderBottomLeftRadius:gs,borderBottomRightRadius:gs,boxShadow:NE};function VE(n,i,o){const s=Rn(n)?n:Ns(n);return s.start(W0("",s,i,o)),s.animation}function PE(n){return n instanceof SVGElement&&n.tagName!=="svg"}const UE=(n,i)=>n.depth-i.depth;class HE{constructor(){this.children=[],this.isDirty=!1}add(i){S0(this.children,i),this.isDirty=!0}remove(i){E0(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(UE),this.isDirty=!1,this.children.forEach(i)}}function $E(n,i){const o=Ba.now(),s=({timestamp:u})=>{const f=u-o;f>=i&&(Pi(s),n(f-i))};return ze.read(s,!0),()=>Pi(s)}const Z2=["TopLeft","TopRight","BottomLeft","BottomRight"],qE=Z2.length,W1=n=>typeof n=="string"?parseFloat(n):n,J1=n=>typeof n=="number"||_t.test(n);function YE(n,i,o,s,u,f){u?(n.opacity=Pe(0,o.opacity!==void 0?o.opacity:1,GE(s)),n.opacityExit=Pe(i.opacity!==void 0?i.opacity:1,0,XE(s))):f&&(n.opacity=Pe(i.opacity!==void 0?i.opacity:1,o.opacity!==void 0?o.opacity:1,s));for(let d=0;d<qE;d++){const p=`border${Z2[d]}Radius`;let h=I1(i,p),m=I1(o,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||J1(h)===J1(m)?(n[p]=Math.max(Pe(W1(h),W1(m),s),0),(Na.test(m)||Na.test(h))&&(n[p]+="%")):n[p]=m}(i.rotate||o.rotate)&&(n.rotate=Pe(i.rotate||0,o.rotate||0,s))}function I1(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const GE=W2(0,.5,h2),XE=W2(.5,.95,Fn);function W2(n,i,o){return s=>s<n?0:s>i?1:o(fo(n,i,s))}function tv(n,i){n.min=i.min,n.max=i.max}function fa(n,i){tv(n.x,i.x),tv(n.y,i.y)}function ev(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function nv(n,i,o,s,u){return n-=i,n=Du(n,1/o,s),u!==void 0&&(n=Du(n,1/u,s)),n}function KE(n,i=0,o=1,s=.5,u,f=n,d=n){if(Na.test(i)&&(i=parseFloat(i),i=Pe(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=Pe(f.min,f.max,s);n===f&&(p-=i),n.min=nv(n.min,i,o,p,u),n.max=nv(n.max,i,o,p,u)}function av(n,i,[o,s,u],f,d){KE(n,i[o],i[s],i[u],i.scale,f,d)}const QE=["x","scaleX","originX"],FE=["y","scaleY","originY"];function iv(n,i,o,s){av(n.x,i,QE,o?o.x:void 0,s?s.x:void 0),av(n.y,i,FE,o?o.y:void 0,s?s.y:void 0)}function rv(n){return n.translate===0&&n.scale===1}function J2(n){return rv(n.x)&&rv(n.y)}function ov(n,i){return n.min===i.min&&n.max===i.max}function ZE(n,i){return ov(n.x,i.x)&&ov(n.y,i.y)}function sv(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function I2(n,i){return sv(n.x,i.x)&&sv(n.y,i.y)}function lv(n){return On(n.x)/On(n.y)}function uv(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class WE{constructor(){this.members=[]}add(i){S0(this.members,i),i.scheduleRender()}remove(i){if(E0(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(u=>i===u);if(o===0)return!1;let s;for(let u=o;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){s=f;break}}return s?(this.promote(s),!0):!1}promote(i,o){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,o&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:s}=i;o.onExitComplete&&o.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function JE(n,i,o){let s="";const u=n.x.translate/i.x,f=n.y.translate/i.y,d=(o==null?void 0:o.z)||0;if((u||f||d)&&(s=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:m,rotate:v,rotateX:b,rotateY:x,skewX:S,skewY:C}=o;m&&(s=`perspective(${m}px) ${s}`),v&&(s+=`rotate(${v}deg) `),b&&(s+=`rotateX(${b}deg) `),x&&(s+=`rotateY(${x}deg) `),S&&(s+=`skewX(${S}deg) `),C&&(s+=`skewY(${C}deg) `)}const p=n.x.scale*i.x,h=n.y.scale*i.y;return(p!==1||h!==1)&&(s+=`scale(${p}, ${h})`),s||"none"}const gd=["","X","Y","Z"],IE={visibility:"hidden"},cv=1e3;let tC=0;function vd(n,i,o,s){const{latestValues:u}=i;u[n]&&(o[n]=u[n],i.setStaticValue(n,0),s&&(s[n]=0))}function tb(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const o=o2(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",ze,!(u||f))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&tb(s)}function eb({attachResizeListener:n,defaultParent:i,measureScroll:o,checkIsScrollRoot:s,resetTransform:u}){return class{constructor(d={},p=i==null?void 0:i()){this.id=tC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aC),this.nodes.forEach(lC),this.nodes.forEach(uC),this.nodes.forEach(iC)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new HE)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new A0),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const h=this.eventHandlers.get(d);h&&h.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,p=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=PE(d),this.instance=d;const{layoutId:h,layout:m,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),p&&(m||h)&&(this.isLayoutDirty=!0),n){let b;const x=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=$E(x,250),xu.hasAnimatedSinceResize&&(xu.hasAnimatedSinceResize=!1,this.nodes.forEach(dv))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||m)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||v.getDefaultTransition()||pC,{onLayoutAnimationStart:k,onLayoutAnimationComplete:A}=v.getProps(),D=!this.targetLayout||!I2(this.targetLayout,C),M=!x&&S;if(this.options.layoutRoot||this.resumeFrom||M||x&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,M);const L={...T0(R,"layout"),onPlay:k,onComplete:A};(v.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L)}else x||dv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cC),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&tb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(fv);return}this.isUpdating||this.nodes.forEach(oC),this.isUpdating=!1,this.nodes.forEach(sC),this.nodes.forEach(eC),this.nodes.forEach(nC),this.clearAllSnapshots();const p=Ba.now();En.delta=li(0,1e3/60,p-En.timestamp),En.timestamp=p,En.isProcessing=!0,ld.update.process(En),ld.preRender.process(En),ld.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,R0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(rC),this.sharedNodes.forEach(fC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!On(this.snapshot.measuredBox.x)&&!On(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p){const h=s(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!J2(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,v=m!==this.prevTransformTemplateValue;d&&(p||dr(this.latestValues)||v)&&(u(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return d&&(h=this.removeTransform(h)),mC(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:p}=this.options;if(!p)return rn();const h=p.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(gC))){const{scroll:v}=this.root;v&&(ao(h.x,v.offset.x),ao(h.y,v.offset.y))}return h}removeElementScroll(d){var p;const h=rn();if(fa(h,d),!((p=this.scroll)===null||p===void 0)&&p.wasRoot)return h;for(let m=0;m<this.path.length;m++){const v=this.path[m],{scroll:b,options:x}=v;v!==this.root&&b&&x.layoutScroll&&(b.wasRoot&&fa(h,d),ao(h.x,b.offset.x),ao(h.y,b.offset.y))}return h}applyTransform(d,p=!1){const h=rn();fa(h,d);for(let m=0;m<this.path.length;m++){const v=this.path[m];!p&&v.options.layoutScroll&&v.scroll&&v!==v.root&&io(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),dr(v.latestValues)&&io(h,v.latestValues)}return dr(this.latestValues)&&io(h,this.latestValues),h}removeTransform(d){const p=rn();fa(p,d);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!dr(m.latestValues))continue;e0(m.latestValues)&&m.updateSnapshot();const v=rn(),b=m.measurePageBox();fa(v,b),iv(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,v)}return dr(this.latestValues)&&iv(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var p;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((p=this.parent)===null||p===void 0)&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!(!this.layout||!(b||x))){if(this.resolvedRelativeTargetAt=En.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rn(),this.relativeTargetOrigin=rn(),js(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),fa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=rn(),this.targetWithTransforms=rn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):fa(this.target,this.layout.layoutBox),Y2(this.target,this.targetDelta)):fa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rn(),this.relativeTargetOrigin=rn(),js(this.relativeTargetOrigin,this.target,S.target),fa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||e0(this.parent.latestValues)||q2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const p=this.getLead(),h=!!this.resumingFrom||this!==p;let m=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===En.timestamp&&(m=!1),m)return;const{layout:v,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||b))return;fa(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;bE(this.layoutCorrected,this.treeScale,this.path,h),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=rn());const{target:C}=p;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ev(this.prevProjectionDelta.x,this.projectionDelta.x),ev(this.prevProjectionDelta.y,this.projectionDelta.y)),Ts(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!uv(this.projectionDelta.x,this.prevProjectionDelta.x)||!uv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)===null||p===void 0||p.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=no(),this.projectionDelta=no(),this.projectionDeltaWithTransform=no()}setAnimationOrigin(d,p=!1){const h=this.snapshot,m=h?h.latestValues:{},v={...this.latestValues},b=no();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=rn(),S=h?h.source:void 0,C=this.layout?this.layout.source:void 0,R=S!==C,k=this.getStack(),A=!k||k.members.length<=1,D=!!(R&&!A&&this.options.crossfade===!0&&!this.path.some(hC));this.animationProgress=0;let M;this.mixTargetDelta=L=>{const B=L/1e3;hv(b.x,d.x,B),hv(b.y,d.y,B),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(js(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),dC(this.relativeTarget,this.relativeTargetOrigin,x,B),M&&ZE(this.relativeTarget,M)&&(this.isProjectionDirty=!1),M||(M=rn()),fa(M,this.relativeTarget)),R&&(this.animationValues=v,YE(v,m,this.latestValues,B,D,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ze.update(()=>{xu.hasAnimatedSinceResize=!0,this.currentAnimation=VE(0,cv,{...d,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(cv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:v}=d;if(!(!p||!h||!m)){if(this!==d&&this.layout&&m&&nb(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||rn();const b=On(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+b;const x=On(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}fa(p,h),io(p,v),Ts(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new WE),this.sharedNodes.get(d).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:p}=this.options;return p?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:p}=this.options;return p?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&vd("z",d,m,this.animationValues);for(let v=0;v<gd.length;v++)vd(`rotate${gd[v]}`,d,m,this.animationValues),vd(`skew${gd[v]}`,d,m,this.animationValues);d.render();for(const v in m)d.setStaticValue(v,m[v]),this.animationValues&&(this.animationValues[v]=m[v]);d.scheduleRender()}getProjectionStyles(d){var p,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return IE;const m={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=bu(d==null?void 0:d.pointerEvents)||"",m.transform=v?v(this.latestValues,""):"none",m;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const R={};return this.options.layoutId&&(R.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,R.pointerEvents=bu(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!dr(this.latestValues)&&(R.transform=v?v({},""):"none",this.hasProjected=!1),R}const x=b.animationValues||b.latestValues;this.applyTransformsToTarget(),m.transform=JE(this.projectionDeltaWithTransform,this.treeScale,x),v&&(m.transform=v(x,m.transform));const{x:S,y:C}=this.projectionDelta;m.transformOrigin=`${S.origin*100}% ${C.origin*100}% 0`,b.animationValues?m.opacity=b===this?(h=(p=x.opacity)!==null&&p!==void 0?p:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:m.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const R in _s){if(x[R]===void 0)continue;const{correct:k,applyTo:A,isCSSVariable:D}=_s[R],M=m.transform==="none"?x[R]:k(x[R],b);if(A){const L=A.length;for(let B=0;B<L;B++)m[A[B]]=M}else D?this.options.visualElement.renderState.vars[R]=M:m[R]=M}return this.options.layoutId&&(m.pointerEvents=b===this?bu(d==null?void 0:d.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)===null||p===void 0?void 0:p.stop()}),this.root.nodes.forEach(fv),this.root.sharedNodes.clear()}}}function eC(n){n.updateLayout()}function nC(n){var i;const o=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:u}=n.layout,{animationType:f}=n.options,d=o.source!==n.layout.source;f==="size"?da(b=>{const x=d?o.measuredBox[b]:o.layoutBox[b],S=On(x);x.min=s[b].min,x.max=x.min+S}):nb(f,o.layoutBox,s)&&da(b=>{const x=d?o.measuredBox[b]:o.layoutBox[b],S=On(s[b]);x.max=x.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+S)});const p=no();Ts(p,s,o.layoutBox);const h=no();d?Ts(h,n.applyTransform(u,!0),o.measuredBox):Ts(h,s,o.layoutBox);const m=!J2(p);let v=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:x,layout:S}=b;if(x&&S){const C=rn();js(C,o.layoutBox,x.layoutBox);const R=rn();js(R,s,S.layoutBox),I2(C,R)||(v=!0),b.options.layoutRoot&&(n.relativeTarget=R,n.relativeTargetOrigin=C,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:o,delta:h,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function aC(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function iC(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function rC(n){n.clearSnapshot()}function fv(n){n.clearMeasurements()}function oC(n){n.isLayoutDirty=!1}function sC(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function dv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function lC(n){n.resolveTargetDelta()}function uC(n){n.calcProjection()}function cC(n){n.resetSkewAndRotation()}function fC(n){n.removeLeadSnapshot()}function hv(n,i,o){n.translate=Pe(i.translate,0,o),n.scale=Pe(i.scale,1,o),n.origin=i.origin,n.originPoint=i.originPoint}function pv(n,i,o,s){n.min=Pe(i.min,o.min,s),n.max=Pe(i.max,o.max,s)}function dC(n,i,o,s){pv(n.x,i.x,o.x,s),pv(n.y,i.y,o.y,s)}function hC(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const pC={duration:.45,ease:[.4,0,.1,1]},mv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),gv=mv("applewebkit/")&&!mv("chrome/")?Math.round:Fn;function vv(n){n.min=gv(n.min),n.max=gv(n.max)}function mC(n){vv(n.x),vv(n.y)}function nb(n,i,o){return n==="position"||n==="preserve-aspect"&&!vE(lv(i),lv(o),.2)}function gC(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const vC=eb({attachResizeListener:(n,i)=>Hs(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),yd={current:void 0},ab=eb({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!yd.current){const n=new vC({});n.mount(window),n.setOptions({layoutScroll:!0}),yd.current=n}return yd.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),yC={pan:{Feature:BE},drag:{Feature:DE,ProjectionNode:ab,MeasureLayout:F2}};function yv(n,i,o){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,f=s[u];f&&ze.postRender(()=>f(i,tl(i)))}class bC extends $i{mount(){const{current:i}=this.node;i&&(this.unmount=TS(i,(o,s)=>(yv(this.node,s,"Start"),u=>yv(this.node,u,"End"))))}unmount(){}}class xC extends $i{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Is(Hs(this.node.current,"focus",()=>this.onFocus()),Hs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function bv(n,i,o){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),f=s[u];f&&ze.postRender(()=>f(i,tl(i)))}class wC extends $i{mount(){const{current:i}=this.node;i&&(this.unmount=MS(i,(o,s)=>(bv(this.node,s,"Start"),(u,{success:f})=>bv(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const i0=new WeakMap,bd=new WeakMap,SC=n=>{const i=i0.get(n.target);i&&i(n)},EC=n=>{n.forEach(SC)};function CC({root:n,...i}){const o=n||document;bd.has(o)||bd.set(o,{});const s=bd.get(o),u=JSON.stringify(i);return s[u]||(s[u]=new IntersectionObserver(EC,{root:n,...i})),s[u]}function AC(n,i,o){const s=CC(i);return i0.set(n,o),s.observe(n),()=>{i0.delete(n),s.unobserve(n)}}const TC={some:0,all:1};class jC extends $i{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:s,amount:u="some",once:f}=i,d={root:o?o.current:void 0,rootMargin:s,threshold:typeof u=="number"?u:TC[u]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,f&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),x=m?v:b;x&&x(h)};return AC(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(zC(i,o))&&this.startObserver()}unmount(){}}function zC({viewport:n={}},{viewport:i={}}={}){return o=>n[o]!==i[o]}const RC={inView:{Feature:jC},tap:{Feature:wC},focus:{Feature:xC},hover:{Feature:bC}},MC={layout:{ProjectionNode:ab,MeasureLayout:F2}},r0={current:null},ib={current:!1};function kC(){if(ib.current=!0,!!x0)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>r0.current=n.matches;n.addListener(i),i()}else r0.current=!1}const OC=[...z2,zn,Ui],DC=n=>OC.find(j2(n)),BC=new WeakMap;function NC(n,i,o){for(const s in i){const u=i[s],f=o[s];if(Rn(u))n.addValue(s,u);else if(Rn(f))n.addValue(s,Ns(u,{owner:n}));else if(f!==u)if(n.hasValue(s)){const d=n.getValue(s);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(s);n.addValue(s,Ns(d!==void 0?d:u,{owner:n}))}}for(const s in o)i[s]===void 0&&n.removeValue(s);return i}const xv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class LC{scrapeMotionValuesFromProps(i,o,s){return{}}constructor({parent:i,props:o,presenceContext:s,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Q0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Ba.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,ze.render(this.render,!1,!0))};const{latestValues:h,renderState:m,onUpdate:v}=d;this.onUpdate=v,this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=m,this.parent=i,this.props=o,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Ku(o),this.isVariantNode=Yy(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const S in x){const C=x[S];h[S]!==void 0&&Rn(C)&&C.set(h[S],!1)}}mount(i){this.current=i,BC.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,s)=>this.bindToMotionValue(s,o)),ib.current||kC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:r0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Pi(this.notifyUpdate),Pi(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=wr.has(i);s&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",p=>{this.latestValues[i]=p,this.props.onUpdate&&ze.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),f=o.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{u(),f(),d&&d(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ho){const o=ho[i];if(!o)continue;const{isEnabled:s,Feature:u}=o;if(!this.features[i]&&u&&s(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rn()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<xv.length;s++){const u=xv[s];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=NC(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const s=this.values.get(i);o!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&o!==void 0&&(s=Ns(o===null?void 0:o,{owner:this}),this.addValue(i,s)),s}readValue(i,o){var s;let u=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(s=this.getBaseTargetFromProps(this.props,i))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,i,this.options);return u!=null&&(typeof u=="string"&&(A2(u)||m2(u))?u=parseFloat(u):!DC(u)&&Ui.test(o)&&(u=S2(i,o)),this.setBaseTarget(i,Rn(u)?u.get():u)),Rn(u)?u.get():u}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){var o;const{initial:s}=this.props;let u;if(typeof s=="string"||typeof s=="object"){const d=$0(this.props,s,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);d&&(u=d[i])}if(s&&u!==void 0)return u;const f=this.getBaseTargetFromProps(this.props,i);return f!==void 0&&!Rn(f)?f:this.initialValues[i]!==void 0&&u===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new A0),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}}class rb extends LC{constructor(){super(...arguments),this.KeyframeResolver=R2}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:s}){delete o[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Rn(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function _C(n){return window.getComputedStyle(n)}class VC extends rb{constructor(){super(...arguments),this.type="html",this.renderInstance=e2}readValueFromInstance(i,o){if(wr.has(o))return F6(i,o);{const s=_C(i),u=(B0(o)?s.getPropertyValue(o):s[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:o}){return G2(i,o)}build(i,o,s){_0(i,o,s.transformTemplate)}scrapeMotionValuesFromProps(i,o,s){return q0(i,o,s)}}class PC extends rb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rn,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&t2(this.current,this.renderState)}}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(wr.has(o)){const s=w2(o);return s&&s.default||0}return o=n2.has(o)?o:D0(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,s){return i2(i,o,s)}onBindTransform(){this.current&&!this.renderState.dimensions&&ze.postRender(this.updateDimensions)}build(i,o,s){U0(i,o,this.isSVGTag,s.transformTemplate)}renderInstance(i,o,s,u){a2(i,o,s,u)}mount(i){this.isSVGTag=H0(i.tagName),super.mount(i)}}const UC=(n,i)=>P0(n)?new PC(i):new VC(i,{allowProjection:n!==T.Fragment}),HC=S6({...uE,...RC,...yC,...MC},UC),xd=VS(HC);function $C(n){return Je({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(n)}const qC=()=>{const[n,i]=T.useState([]),[o,s]=T.useState(null),[u,f]=T.useState(null),[d,p]=T.useState(!1),[h,m]=T.useState([{name:"Curiosità Pokémon",color:"#EE1515",questions:[{question:"L'Adamo dei pokemon per gamefreak",answer:"Rhydon è stato il primo pokemon disegnato",points:100,answered:!1},{question:"Charizard può anche ottenere una variante ogni anno, ma c'è chi ne possiede 4 miliardi",answer:"Possibili varianti delle macchie di Spinda",points:200,answered:!1},{question:"Se proprio devo morire che almeno diventi un pokemon",answer:"Yamask si dice che sia stato un umano divenuto pokemon dopo la morte e che la maschera sia il ricordo della vita passata",points:300,answered:!1},{question:"Roma di notte e di notte Roma, Mew di giorno e di notte…",answer:" Smergle, fra le varie leggende legate a loro due esiste una che dice che Smergle sia Mew di notte",points:400,answered:!1},{question:"Sebbene sia la mascotte, c'è ancora chi non sa scrivere il suo nome",answer:"Errore del nome Pikachu in Pokemon Go (Pikahcu)",points:500,answered:!1}]},{name:"Pokémon",color:"#3B4CCA",questions:[{question:"Impossibile andare oltre",answer:"Nosepass",points:100,answered:!1},{question:"Bello Chimchar, sì, finché non ti arriva da Wish",answer:"Pansear",points:200,answered:!1},{question:"Il pokemon preferito di Bud Spencer",answer:"Hippowdon",points:300,answered:!1},{question:"Dovrei essere meno emotivo, sono tentato a diventare più freddo",answer:"Tentacool",points:400,answered:!1},{question:"Sono le 11:05 o le 12:55?",answer:"Hoothoot",points:500,answered:!1}]},{name:"Allenatori",color:"#FFDE00",questions:[{question:"C'è solo un capitano",answer:"Marinaio",points:100,answered:!1},{question:"Conoscevo questo allenatore ma poi mi sono scordato ",answer:"Chitarrista",points:200,answered:!1},{question:"Quanto era bello fargli il culo dopo che ti prendeva un coccolone?",answer:"Ninja",points:300,answered:!1},{question:"Il potere è pelato e a quanto pare anche muscoloso",answer:"ZuccaPelata",points:400,answered:!1},{question:"+10 punti se sale sul campo da battaglia con i capezzoli di fuori?",answer:"Fantallenatore",points:500,answered:!1}]},{name:"GCC Pokémon",color:"#FF9C54",questions:[{question:"Quante carte si pescano all'inizio di una partita nel GCC Pokémon?",answer:"7",points:100,answered:!1},{question:"Quanti sono i tipi presenti nel GCC?",answer:"11",points:200,answered:!1},{question:"Qual è il valore di ritirata più alto mai stampato su una carta?",answer:"5 energie",points:300,answered:!1},{question:"Quanti sono i PS massimi mai stampati su una carta?",answer:"340",points:400,answered:!1},{question:"Qual è il primo set di carte e quando è stato rilasciato? (giappone/italia)",answer:"Set Base nel 1996/2000",points:500,answered:!1}]},{name:"Serie Pokémon",color:"#78C850",questions:[{question:"Quale pokemon era famoso per portare sempre con se un paio di occhiali neri?",answer:"Squirtle",points:100,answered:!1},{question:"Quale Pokémon leggendario appare nel primo film? (fino a 5 gen)",answer:"Misty - Brock - Spighetto - (Iris)",points:200,answered:!1},{question:"In quale anno è uscita la prima serie pokemon in Italia?",answer:"Nel 2000",points:300,answered:!1},{question:"Chi sono i pokemon starter full evolved avuti da ash?",answer:"Charizard - Sceptile - Torterra - Infernape - Incineroar - Greninja -",points:400,answered:!1},{question:"Quanti sono i lungometraggi della serie pokemon?",answer:"22 ",points:500,answered:!1}]}]);T.useEffect(()=>{const R=localStorage.getItem("quizPlayers");if(R){const A=JSON.parse(R);i(A),A.length>0&&s(A[0])}const k=localStorage.getItem("quizCategories");if(k)m(JSON.parse(k));else{const A=h.map(D=>({...D,questions:D.questions.map(M=>({...M,id:`${D.name}-${M.points}-${Math.random().toString(36).substr(2,9)}`}))}));m(A)}},[]);const v=(R,k,A)=>{k.answered||!o||(f({category:R,question:k,categoryColor:A}),p(!1))},b=R=>{const k=h.map(A=>({...A,questions:A.questions.map(D=>D.id===R.id?{...D,answered:!0}:D)}));m(k),localStorage.setItem("quizCategories",JSON.stringify(k))},x=()=>{if(!o||!u)return;const R=n.map(k=>k.id===o.id?{...k,score:k.score+u.question.points}:k);i(R),localStorage.setItem("quizPlayers",JSON.stringify(R)),s({...o,score:o.score+u.question.points}),b(u.question),f(null)},S=()=>{u&&(b(u.question),f(null))},C=()=>{const R=h.map(k=>({...k,questions:k.questions.map(A=>({...A,answered:!1}))}));m(R),localStorage.setItem("quizCategories",JSON.stringify(R))};return y.jsxs(KC,{children:[y.jsxs(kA,{onClick:C,children:[y.jsx(Zw,{})," Reset Quiz"]}),y.jsxs(JC,{to:"/game",children:[y.jsx(br,{})," Torna ai giochi"]}),y.jsx(IC,{children:"Sfida Quiz Pokémon"}),y.jsxs(tA,{children:[y.jsx(eA,{children:h.map((R,k)=>y.jsxs(iA,{$color:R.color,children:[y.jsx(nA,{}),R.name]},k))}),[0,1,2,3,4].map(R=>y.jsx(rA,{children:h.map((k,A)=>{const D=k.questions[R];return y.jsx(oA,{$color:k.color,$answered:D.answered,onClick:()=>v(k.name,D,k.color),children:D.answered?y.jsx(lA,{children:y.jsx(aA,{})}):y.jsx(sA,{children:D.points})},A)})},R))]}),y.jsxs(uA,{children:[y.jsxs(cA,{children:[y.jsx(fA,{children:"Allenatori"}),y.jsx(dA,{children:o?"Scegli una casella per sfidare la tua conoscenza":"Scegli un allenatore per iniziare"})]}),y.jsx(hA,{children:n.map(R=>y.jsxs(pA,{$active:(o==null?void 0:o.id)===R.id,onClick:()=>s(R),children:[y.jsx(Sv,{src:R.avatar,alt:R.name}),y.jsxs(mA,{children:[y.jsx(gA,{children:R.name}),y.jsxs(vA,{children:[y.jsx(wv,{})," ",R.score," punti"]})]}),(o==null?void 0:o.id)===R.id&&y.jsx(yA,{children:y.jsx(zy,{})})]},R.id))})]}),y.jsx(pS,{children:u&&y.jsx(bA,{as:xd.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:y.jsxs(xA,{as:xd.div,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},$color:u.categoryColor,children:[y.jsx($C,{size:"30px",color:"red",style:{position:"absolute",top:"20px",right:"50% ",transform:"translateX(50%)",cursor:"pointer",backgroundColor:"#d9d9d940",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",zIndex:10},onClick:()=>{f(null),p(!1)}}),y.jsxs(wA,{children:[y.jsx(SA,{$color:u.categoryColor,children:u.category}),y.jsxs(EA,{children:[y.jsx(wv,{})," ",u.question.points," punti"]})]}),y.jsx(CA,{children:u.question.question}),y.jsx(AA,{children:d?y.jsxs(TA,{as:xd.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[y.jsx(jA,{children:u.question.answer}),y.jsxs(zA,{children:[y.jsxs(Ev,{$color:"#4CAF50",onClick:x,children:[y.jsx(qu,{})," Corretta"]}),y.jsxs(Ev,{$color:"#EE1515",onClick:S,children:[y.jsx(co,{})," Sbagliata"]})]})]}):y.jsxs(RA,{onClick:()=>p(!0),children:[y.jsx(Fw,{})," Mostra Risposta"]})}),y.jsxs(MA,{children:[y.jsx(Sv,{src:o==null?void 0:o.avatar,alt:o==null?void 0:o.name,$small:!0}),y.jsx("span",{children:o==null?void 0:o.name})]})]})})}),y.jsxs(QC,{children:[y.jsx(qs,{className:"ball1"}),y.jsx(qs,{className:"ball2"}),y.jsx(FC,{className:"ball3"}),y.jsx(ZC,{className:"ball4"}),y.jsx(WC,{className:"ball5"})]})]})},$s=Re`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-100px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,YC=Re`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,GC=Re`
  0% { opacity: 0.3; }
  50% { opacity: 0.8; }
  100% { opacity: 0.3; }
`,XC=Re`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,KC=E.div`
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

  font-family: 'Pokemon Solid', 'Montserrat', sans-serif;
`,QC=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background-color: #233975;
`,qs=E.div`
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
    animation: ${$s} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${$s} 10s ease-in-out infinite reverse;
  }
`,FC=E(qs)`
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
    animation: ${$s} 15s ease-in-out infinite;
  }
`,ZC=E(qs)`
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
    animation: ${$s} 18s ease-in-out infinite reverse;
  }
`,WC=E(qs)`
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
    animation: ${$s} 14s ease-in-out infinite;
  }
`,JC=E(Pa)`
  position: fixed;
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
`,IC=E.h1`
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
`,tA=E.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: rgba(19, 42, 87, 0.9);
  border-radius: 16px;
  /* overflow: hidden; */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 1;
  border: 4px solid #ffde00;
`,eA=E.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,nA=E.div`
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
`,aA=E.div`
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
  animation: ${XC} 1s ease-in-out;
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
`,wv=E.div`
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
`,iA=E.div`
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
`,rA=E.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,oA=E.div`
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

  ${n=>!n.$answered&&yo`
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
`,sA=E.div`
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
`,lA=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`,uA=E.div`
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
`,cA=E.div`
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
`,fA=E.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,dA=E.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`,hA=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,pA=E.div`
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

  ${n=>n.$active&&yo`
      animation: ${YC} 2s infinite ease-in-out;
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
`,Sv=E.img`
  width: ${n=>n.$small?"30px":"45px"};
  height: ${n=>n.$small?"30px":"45px"};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`,mA=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,gA=E.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,vA=E.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,yA=E.div`
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
  animation: ${GC} 2s infinite;
`,bA=E.div`
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
`,xA=E.div`
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
`,wA=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`,SA=E.div`
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
`,EA=E.div`
  background: rgba(255, 255, 255, 0.15);
  color: #ffde00;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.3);
  display: flex;
  align-items: center;
`,CA=E.div`
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
`,AA=E.div`
  padding: 20px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  position: relative;
  z-index: 1;
`,TA=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,jA=E.div`
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
`,zA=E.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`,Ev=E.button`
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
`,RA=E.button`
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
`,MA=E.div`
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
`,kA=E.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(238, 21, 21, 0.8);
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #ee1515;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;var wd={exports:{}},Cv;function OA(){return Cv||(Cv=1,function(n,i){(function(o,s){n.exports=s(Bu())})(window,function(o){return function(s){var u={};function f(d){if(u[d])return u[d].exports;var p=u[d]={i:d,l:!1,exports:{}};return s[d].call(p.exports,p,p.exports,f),p.l=!0,p.exports}return f.m=s,f.c=u,f.d=function(d,p,h){f.o(d,p)||Object.defineProperty(d,p,{enumerable:!0,get:h})},f.r=function(d){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},f.t=function(d,p){if(1&p&&(d=f(d)),8&p||4&p&&typeof d=="object"&&d&&d.__esModule)return d;var h=Object.create(null);if(f.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:d}),2&p&&typeof d!="string")for(var m in d)f.d(h,m,(function(v){return d[v]}).bind(null,m));return h},f.n=function(d){var p=d&&d.__esModule?function(){return d.default}:function(){return d};return f.d(p,"a",p),p},f.o=function(d,p){return Object.prototype.hasOwnProperty.call(d,p)},f.p="",f(f.s=11)}([function(s,u){s.exports=o},function(s,u,f){(function(d){var p=f(2),h=f(0),m=f.n(h),v=f(6);f.n(v);var b=f(7),x=f(8),S=f(4),C=f(3),R=f.n(C);function k(){return(k=Object.assign||function(H){for(var F=1;F<arguments.length;F++){var U=arguments[F];for(var K in U)Object.prototype.hasOwnProperty.call(U,K)&&(H[K]=U[K])}return H}).apply(this,arguments)}var A=function(H,F){for(var U=[H[0]],K=0,gt=F.length;K<gt;K+=1)U.push(F[K],H[K+1]);return U},D=function(H){return H!==null&&typeof H=="object"&&(H.toString?H.toString():Object.prototype.toString.call(H))==="[object Object]"&&!Object(p.typeOf)(H)},M=Object.freeze([]),L=Object.freeze({});function B(H){return typeof H=="function"}function W(H){return H.displayName||H.name||"Component"}function ot(H){return H&&typeof H.styledComponentId=="string"}var dt=d!==void 0&&(d.env.REACT_APP_SC_ATTR||d.env.SC_ATTR)||"data-styled",X=typeof window<"u"&&"HTMLElement"in window,it=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:d!==void 0&&d.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&d.env.REACT_APP_SC_DISABLE_SPEEDY!==""?d.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&d.env.REACT_APP_SC_DISABLE_SPEEDY:d!==void 0&&d.env.SC_DISABLE_SPEEDY!==void 0&&d.env.SC_DISABLE_SPEEDY!==""&&d.env.SC_DISABLE_SPEEDY!=="false"&&d.env.SC_DISABLE_SPEEDY);function J(H){for(var F=arguments.length,U=new Array(F>1?F-1:0),K=1;K<F;K++)U[K-1]=arguments[K];throw new Error("An error occurred. See https://git.io/JUIaE#"+H+" for more information."+(U.length>0?" Args: "+U.join(", "):""))}var Jt=function(){function H(U){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=U}var F=H.prototype;return F.indexOfGroup=function(U){for(var K=0,gt=0;gt<U;gt++)K+=this.groupSizes[gt];return K},F.insertRules=function(U,K){if(U>=this.groupSizes.length){for(var gt=this.groupSizes,Rt=gt.length,xt=Rt;U>=xt;)(xt<<=1)<0&&J(16,""+U);this.groupSizes=new Uint32Array(xt),this.groupSizes.set(gt),this.length=xt;for(var kt=Rt;kt<xt;kt++)this.groupSizes[kt]=0}for(var Ut=this.indexOfGroup(U+1),Xt=0,fe=K.length;Xt<fe;Xt++)this.tag.insertRule(Ut,K[Xt])&&(this.groupSizes[U]++,Ut++)},F.clearGroup=function(U){if(U<this.length){var K=this.groupSizes[U],gt=this.indexOfGroup(U),Rt=gt+K;this.groupSizes[U]=0;for(var xt=gt;xt<Rt;xt++)this.tag.deleteRule(gt)}},F.getGroup=function(U){var K="";if(U>=this.length||this.groupSizes[U]===0)return K;for(var gt=this.groupSizes[U],Rt=this.indexOfGroup(U),xt=Rt+gt,kt=Rt;kt<xt;kt++)K+=this.tag.getRule(kt)+`/*!sc*/
`;return K},H}(),ge=new Map,Z=new Map,Dt=1,G=function(H){if(ge.has(H))return ge.get(H);for(;Z.has(Dt);)Dt++;var F=Dt++;return ge.set(H,F),Z.set(F,H),F},Q=function(H){return Z.get(H)},rt=function(H,F){ge.set(H,F),Z.set(F,H)},vt="style["+dt+'][data-styled-version="5.2.1"]',O=new RegExp("^"+dt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nt=function(H,F,U){for(var K,gt=U.split(","),Rt=0,xt=gt.length;Rt<xt;Rt++)(K=gt[Rt])&&H.registerName(F,K)},yt=function(H,F){for(var U=F.innerHTML.split(`/*!sc*/
`),K=[],gt=0,Rt=U.length;gt<Rt;gt++){var xt=U[gt].trim();if(xt){var kt=xt.match(O);if(kt){var Ut=0|parseInt(kt[1],10),Xt=kt[2];Ut!==0&&(rt(Xt,Ut),nt(H,Xt,kt[3]),H.getTag().insertRules(Ut,K)),K.length=0}else K.push(xt)}}},wt=function(){return f.nc},mt=function(H){var F=document.head,U=H||F,K=document.createElement("style"),gt=function(kt){for(var Ut=kt.childNodes,Xt=Ut.length;Xt>=0;Xt--){var fe=Ut[Xt];if(fe&&fe.nodeType===1&&fe.hasAttribute(dt))return fe}}(U),Rt=gt!==void 0?gt.nextSibling:null;K.setAttribute(dt,"active"),K.setAttribute("data-styled-version","5.2.1");var xt=wt();return xt&&K.setAttribute("nonce",xt),U.insertBefore(K,Rt),K},ht=function(){function H(U){var K=this.element=mt(U);K.appendChild(document.createTextNode("")),this.sheet=function(gt){if(gt.sheet)return gt.sheet;for(var Rt=document.styleSheets,xt=0,kt=Rt.length;xt<kt;xt++){var Ut=Rt[xt];if(Ut.ownerNode===gt)return Ut}J(17)}(K),this.length=0}var F=H.prototype;return F.insertRule=function(U,K){try{return this.sheet.insertRule(K,U),this.length++,!0}catch{return!1}},F.deleteRule=function(U){this.sheet.deleteRule(U),this.length--},F.getRule=function(U){var K=this.sheet.cssRules[U];return K!==void 0&&typeof K.cssText=="string"?K.cssText:""},H}(),lt=function(){function H(U){var K=this.element=mt(U);this.nodes=K.childNodes,this.length=0}var F=H.prototype;return F.insertRule=function(U,K){if(U<=this.length&&U>=0){var gt=document.createTextNode(K),Rt=this.nodes[U];return this.element.insertBefore(gt,Rt||null),this.length++,!0}return!1},F.deleteRule=function(U){this.element.removeChild(this.nodes[U]),this.length--},F.getRule=function(U){return U<this.length?this.nodes[U].textContent:""},H}(),Tt=function(){function H(U){this.rules=[],this.length=0}var F=H.prototype;return F.insertRule=function(U,K){return U<=this.length&&(this.rules.splice(U,0,K),this.length++,!0)},F.deleteRule=function(U){this.rules.splice(U,1),this.length--},F.getRule=function(U){return U<this.length?this.rules[U]:""},H}(),St=X,$={isServer:!X,useCSSOMInjection:!it},Nt=function(){function H(U,K,gt){U===void 0&&(U=L),K===void 0&&(K={}),this.options=k({},$,{},U),this.gs=K,this.names=new Map(gt),!this.options.isServer&&X&&St&&(St=!1,function(Rt){for(var xt=document.querySelectorAll(vt),kt=0,Ut=xt.length;kt<Ut;kt++){var Xt=xt[kt];Xt&&Xt.getAttribute(dt)!=="active"&&(yt(Rt,Xt),Xt.parentNode&&Xt.parentNode.removeChild(Xt))}}(this))}H.registerId=function(U){return G(U)};var F=H.prototype;return F.reconstructWithOptions=function(U,K){return K===void 0&&(K=!0),new H(k({},this.options,{},U),this.gs,K&&this.names||void 0)},F.allocateGSInstance=function(U){return this.gs[U]=(this.gs[U]||0)+1},F.getTag=function(){return this.tag||(this.tag=(gt=(K=this.options).isServer,Rt=K.useCSSOMInjection,xt=K.target,U=gt?new Tt(xt):Rt?new ht(xt):new lt(xt),new Jt(U)));var U,K,gt,Rt,xt},F.hasNameForId=function(U,K){return this.names.has(U)&&this.names.get(U).has(K)},F.registerName=function(U,K){if(G(U),this.names.has(U))this.names.get(U).add(K);else{var gt=new Set;gt.add(K),this.names.set(U,gt)}},F.insertRules=function(U,K,gt){this.registerName(U,K),this.getTag().insertRules(G(U),gt)},F.clearNames=function(U){this.names.has(U)&&this.names.get(U).clear()},F.clearRules=function(U){this.getTag().clearGroup(G(U)),this.clearNames(U)},F.clearTag=function(){this.tag=void 0},F.toString=function(){return function(U){for(var K=U.getTag(),gt=K.length,Rt="",xt=0;xt<gt;xt++){var kt=Q(xt);if(kt!==void 0){var Ut=U.names.get(kt),Xt=K.getGroup(xt);if(Ut!==void 0&&Xt.length!==0){var fe=dt+".g"+xt+'[id="'+kt+'"]',Ge="";Ut!==void 0&&Ut.forEach(function(nn){nn.length>0&&(Ge+=nn+",")}),Rt+=""+Xt+fe+'{content:"'+Ge+`"}/*!sc*/
`}}}return Rt}(this)},H}(),bt=/(a)(d)/gi,It=function(H){return String.fromCharCode(H+(H>25?39:97))};function Ht(H){var F,U="";for(F=Math.abs(H);F>52;F=F/52|0)U=It(F%52)+U;return(It(F%52)+U).replace(bt,"$1-$2")}var ce=function(H,F){for(var U=F.length;U;)H=33*H^F.charCodeAt(--U);return H},Oe=function(H){return ce(5381,H)};function Vt(H){for(var F=0;F<H.length;F+=1){var U=H[F];if(B(U)&&!ot(U))return!1}return!0}var Mt=Oe("5.2.1"),Pt=function(){function H(F,U,K){this.rules=F,this.staticRulesId="",this.isStatic=(K===void 0||K.isStatic)&&Vt(F),this.componentId=U,this.baseHash=ce(Mt,U),this.baseStyle=K,Nt.registerId(U)}return H.prototype.generateAndInjectStyles=function(F,U,K){var gt=this.componentId,Rt=[];if(this.baseStyle&&Rt.push(this.baseStyle.generateAndInjectStyles(F,U,K)),this.isStatic&&!K.hash)if(this.staticRulesId&&U.hasNameForId(gt,this.staticRulesId))Rt.push(this.staticRulesId);else{var xt=ft(this.rules,F,U,K).join(""),kt=Ht(ce(this.baseHash,xt.length)>>>0);if(!U.hasNameForId(gt,kt)){var Ut=K(xt,"."+kt,void 0,gt);U.insertRules(gt,kt,Ut)}Rt.push(kt),this.staticRulesId=kt}else{for(var Xt=this.rules.length,fe=ce(this.baseHash,K.hash),Ge="",nn=0;nn<Xt;nn++){var Be=this.rules[nn];if(typeof Be=="string")Ge+=Be;else if(Be){var ne=ft(Be,F,U,K),Zt=Array.isArray(ne)?ne.join(""):ne;fe=ce(fe,Zt+nn),Ge+=Zt}}if(Ge){var he=Ht(fe>>>0);if(!U.hasNameForId(gt,he)){var ve=K(Ge,"."+he,void 0,gt);U.insertRules(gt,he,ve)}Rt.push(he)}}return Rt.join(" ")},H}(),ye=/^\s*\/\/.*$/gm,He=[":","[",".","#"];function be(H){var F,U,K,gt,Rt=L,xt=Rt.options,kt=xt===void 0?L:xt,Ut=Rt.plugins,Xt=Ut===void 0?M:Ut,fe=new b.a(kt),Ge=[],nn=function(Zt){function he(ve){if(ve)try{Zt(ve+"}")}catch{}}return function(ve,Kt,Ne,Qt,Xe,Wn,Cn,dn,Ke,ma){switch(ve){case 1:if(Ke===0&&Kt.charCodeAt(0)===64)return Zt(Kt+";"),"";break;case 2:if(dn===0)return Kt+"/*|*/";break;case 3:switch(dn){case 102:case 112:return Zt(Ne[0]+Kt),"";default:return Kt+(ma===0?"/*|*/":"")}case-2:Kt.split("/*|*/}").forEach(he)}}}(function(Zt){Ge.push(Zt)}),Be=function(Zt,he,ve){return he===0&&He.includes(ve[U.length])||ve.match(gt)?Zt:"."+F};function ne(Zt,he,ve,Kt){Kt===void 0&&(Kt="&");var Ne=Zt.replace(ye,""),Qt=he&&ve?ve+" "+he+" { "+Ne+" }":Ne;return F=Kt,U=he,K=new RegExp("\\"+U+"\\b","g"),gt=new RegExp("(\\"+U+"\\b){2,}"),fe(ve||!he?"":he,Qt)}return fe.use([].concat(Xt,[function(Zt,he,ve){Zt===2&&ve.length&&ve[0].lastIndexOf(U)>0&&(ve[0]=ve[0].replace(K,Be))},nn,function(Zt){if(Zt===-2){var he=Ge;return Ge=[],he}}])),ne.hash=Xt.length?Xt.reduce(function(Zt,he){return he.name||J(15),ce(Zt,he.name)},5381).toString():"",ne}var ee=m.a.createContext(),De=(ee.Consumer,m.a.createContext()),Yt=(De.Consumer,new Nt),Ie=be();function vn(){return Object(h.useContext)(ee)||Yt}function ie(){return Object(h.useContext)(De)||Ie}var $t=function(){function H(F,U){var K=this;this.inject=function(gt,Rt){Rt===void 0&&(Rt=Ie);var xt=K.name+Rt.hash;gt.hasNameForId(K.id,xt)||gt.insertRules(K.id,xt,Rt(K.rules,xt,"@keyframes"))},this.toString=function(){return J(12,String(K.name))},this.name=F,this.id="sc-keyframes-"+F,this.rules=U}return H.prototype.getName=function(F){return F===void 0&&(F=Ie),this.name+F.hash},H}(),j=/([A-Z])/,_=/([A-Z])/g,tt=/^ms-/,ct=function(H){return"-"+H.toLowerCase()};function pt(H){return j.test(H)?H.replace(_,ct).replace(tt,"-ms-"):H}var st=function(H){return H==null||H===!1||H===""};function ft(H,F,U,K){if(Array.isArray(H)){for(var gt,Rt=[],xt=0,kt=H.length;xt<kt;xt+=1)(gt=ft(H[xt],F,U,K))!==""&&(Array.isArray(gt)?Rt.push.apply(Rt,gt):Rt.push(gt));return Rt}return st(H)?"":ot(H)?"."+H.styledComponentId:B(H)?typeof(Ut=H)!="function"||Ut.prototype&&Ut.prototype.isReactComponent||!F?H:ft(H(F),F,U,K):H instanceof $t?U?(H.inject(U,K),H.getName(K)):H:D(H)?function Xt(fe,Ge){var nn,Be,ne=[];for(var Zt in fe)fe.hasOwnProperty(Zt)&&!st(fe[Zt])&&(D(fe[Zt])?ne.push.apply(ne,Xt(fe[Zt],Zt)):B(fe[Zt])?ne.push(pt(Zt)+":",fe[Zt],";"):ne.push(pt(Zt)+": "+(nn=Zt,((Be=fe[Zt])==null||typeof Be=="boolean"||Be===""?"":typeof Be!="number"||Be===0||nn in x.a?String(Be).trim():Be+"px")+";")));return Ge?[Ge+" {"].concat(ne,["}"]):ne}(H):H.toString();var Ut}function jt(H){for(var F=arguments.length,U=new Array(F>1?F-1:0),K=1;K<F;K++)U[K-1]=arguments[K];return B(H)||D(H)?ft(A(M,[H].concat(U))):U.length===0&&H.length===1&&typeof H[0]=="string"?H:ft(A(H,U))}var Ct=function(H,F,U){return U===void 0&&(U=L),H.theme!==U.theme&&H.theme||F||U.theme},zt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Et=/(^-|-$)/g;function de(H){return H.replace(zt,"-").replace(Et,"")}var se=function(H){return Ht(Oe(H)>>>0)};function Se(H){return typeof H=="string"&&!0}var $e=function(H){return typeof H=="function"||typeof H=="object"&&H!==null&&!Array.isArray(H)},tn=function(H){return H!=="__proto__"&&H!=="constructor"&&H!=="prototype"};function xe(H,F,U){var K=H[U];$e(F)&&$e(K)?qe(K,F):H[U]=F}function qe(H){for(var F=arguments.length,U=new Array(F>1?F-1:0),K=1;K<F;K++)U[K-1]=arguments[K];for(var gt=0,Rt=U;gt<Rt.length;gt++){var xt=Rt[gt];if($e(xt))for(var kt in xt)tn(kt)&&xe(H,xt[kt],kt)}return H}var Ye=m.a.createContext();Ye.Consumer;var Zn={};function en(H,F,U){var K=ot(H),gt=!Se(H),Rt=F.attrs,xt=Rt===void 0?M:Rt,kt=F.componentId,Ut=kt===void 0?function(Kt,Ne){var Qt=typeof Kt!="string"?"sc":de(Kt);Zn[Qt]=(Zn[Qt]||0)+1;var Xe=Qt+"-"+se("5.2.1"+Qt+Zn[Qt]);return Ne?Ne+"-"+Xe:Xe}(F.displayName,F.parentComponentId):kt,Xt=F.displayName,fe=Xt===void 0?function(Kt){return Se(Kt)?"styled."+Kt:"Styled("+W(Kt)+")"}(H):Xt,Ge=F.displayName&&F.componentId?de(F.displayName)+"-"+F.componentId:F.componentId||Ut,nn=K&&H.attrs?Array.prototype.concat(H.attrs,xt).filter(Boolean):xt,Be=F.shouldForwardProp;K&&H.shouldForwardProp&&(Be=F.shouldForwardProp?function(Kt,Ne){return H.shouldForwardProp(Kt,Ne)&&F.shouldForwardProp(Kt,Ne)}:H.shouldForwardProp);var ne,Zt=new Pt(U,Ge,K?H.componentStyle:void 0),he=Zt.isStatic&&xt.length===0,ve=function(Kt,Ne){return function(Qt,Xe,Wn,Cn){var dn=Qt.attrs,Ke=Qt.componentStyle,ma=Qt.defaultProps,Sa=Qt.foldedComponentIds,ci=Qt.shouldForwardProp,Sr=Qt.styledComponentId,fi=Qt.target,Ua=function(Dn,hi,ta){Dn===void 0&&(Dn=L);var Un=k({},hi,{theme:Dn}),Bn={};return ta.forEach(function(Hn){var An,Ea,le,$n=Hn;for(An in B($n)&&($n=$n(Un)),$n)Un[An]=Bn[An]=An==="className"?(Ea=Bn[An],le=$n[An],Ea&&le?Ea+" "+le:Ea||le):$n[An]}),[Un,Bn]}(Ct(Xe,Object(h.useContext)(Ye),ma)||L,Xe,dn),Le=Ua[0],re=Ua[1],bn=function(Dn,hi,ta,Un){var Bn=vn(),Hn=ie();return hi?Dn.generateAndInjectStyles(L,Bn,Hn):Dn.generateAndInjectStyles(ta,Bn,Hn)}(Ke,Cn,Le),Vn=Wn,Pn=re.$as||Xe.$as||re.as||Xe.as||fi,di=Se(Pn),Jn=re!==Xe?k({},Xe,{},re):Xe,In={};for(var Me in Jn)Me[0]!=="$"&&Me!=="as"&&(Me==="forwardedAs"?In.as=Jn[Me]:(ci?ci(Me,S.a):!di||Object(S.a)(Me))&&(In[Me]=Jn[Me]));return Xe.style&&re.style!==Xe.style&&(In.style=k({},Xe.style,{},re.style)),In.className=Array.prototype.concat(Sa,Sr,bn!==Sr?bn:null,Xe.className,re.className).filter(Boolean).join(" "),In.ref=Vn,Object(h.createElement)(Pn,In)}(ne,Kt,Ne,he)};return ve.displayName=fe,(ne=m.a.forwardRef(ve)).attrs=nn,ne.componentStyle=Zt,ne.displayName=fe,ne.shouldForwardProp=Be,ne.foldedComponentIds=K?Array.prototype.concat(H.foldedComponentIds,H.styledComponentId):M,ne.styledComponentId=Ge,ne.target=K?H.target:H,ne.withComponent=function(Kt){var Ne=F.componentId,Qt=function(Wn,Cn){if(Wn==null)return{};var dn,Ke,ma={},Sa=Object.keys(Wn);for(Ke=0;Ke<Sa.length;Ke++)dn=Sa[Ke],Cn.indexOf(dn)>=0||(ma[dn]=Wn[dn]);return ma}(F,["componentId"]),Xe=Ne&&Ne+"-"+(Se(Kt)?Kt:de(W(Kt)));return en(Kt,k({},Qt,{attrs:nn,componentId:Xe}),U)},Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Kt){this._foldedDefaultProps=K?qe({},H.defaultProps,Kt):Kt}}),ne.toString=function(){return"."+ne.styledComponentId},gt&&R()(ne,H,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),ne}var yn=function(H){return function F(U,K,gt){if(gt===void 0&&(gt=L),!Object(p.isValidElementType)(K))return J(1,String(K));var Rt=function(){return U(K,gt,jt.apply(void 0,arguments))};return Rt.withConfig=function(xt){return F(U,K,k({},gt,{},xt))},Rt.attrs=function(xt){return F(U,K,k({},gt,{attrs:Array.prototype.concat(gt.attrs,xt).filter(Boolean)}))},Rt}(en,H)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(H){yn[H]=yn(H)}),u.a=yn}).call(this,f(9))},function(s,u,f){s.exports=f(10)},function(s,u,f){var d=f(2),p={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v={};function b(D){return d.isMemo(D)?m:v[D.$$typeof]||p}v[d.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},v[d.Memo]=m;var x=Object.defineProperty,S=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,R=Object.getOwnPropertyDescriptor,k=Object.getPrototypeOf,A=Object.prototype;s.exports=function D(M,L,B){if(typeof L!="string"){if(A){var W=k(L);W&&W!==A&&D(M,W,B)}var ot=S(L);C&&(ot=ot.concat(C(L)));for(var dt=b(M),X=b(L),it=0;it<ot.length;++it){var J=ot[it];if(!(h[J]||B&&B[J]||X&&X[J]||dt&&dt[J])){var Jt=R(L,J);try{x(M,J,Jt)}catch{}}}}return M}},function(s,u,f){var d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p=function(h){var m={};return function(v){return m[v]===void 0&&(m[v]=h(v)),m[v]}}(function(h){return d.test(h)||h.charCodeAt(0)===111&&h.charCodeAt(1)===110&&h.charCodeAt(2)<91});u.a=p},function(s,u,f){var d;(function(){function p(j,_,tt){return j.call.apply(j.bind,arguments)}function h(j,_,tt){if(!j)throw Error();if(2<arguments.length){var ct=Array.prototype.slice.call(arguments,2);return function(){var pt=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(pt,ct),j.apply(_,pt)}}return function(){return j.apply(_,arguments)}}function m(j,_,tt){return(m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:h).apply(null,arguments)}var v=Date.now||function(){return+new Date};function b(j,_){this.a=j,this.o=_||j,this.c=this.o.document}var x=!!window.FontFace;function S(j,_,tt,ct){if(_=j.c.createElement(_),tt)for(var pt in tt)tt.hasOwnProperty(pt)&&(pt=="style"?_.style.cssText=tt[pt]:_.setAttribute(pt,tt[pt]));return ct&&_.appendChild(j.c.createTextNode(ct)),_}function C(j,_,tt){(j=j.c.getElementsByTagName(_)[0])||(j=document.documentElement),j.insertBefore(tt,j.lastChild)}function R(j){j.parentNode&&j.parentNode.removeChild(j)}function k(j,_,tt){_=_||[],tt=tt||[];for(var ct=j.className.split(/\s+/),pt=0;pt<_.length;pt+=1){for(var st=!1,ft=0;ft<ct.length;ft+=1)if(_[pt]===ct[ft]){st=!0;break}st||ct.push(_[pt])}for(_=[],pt=0;pt<ct.length;pt+=1){for(st=!1,ft=0;ft<tt.length;ft+=1)if(ct[pt]===tt[ft]){st=!0;break}st||_.push(ct[pt])}j.className=_.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function A(j,_){for(var tt=j.className.split(/\s+/),ct=0,pt=tt.length;ct<pt;ct++)if(tt[ct]==_)return!0;return!1}function D(j,_,tt){function ct(){jt&&pt&&st&&(jt(ft),jt=null)}_=S(j,"link",{rel:"stylesheet",href:_,media:"all"});var pt=!1,st=!0,ft=null,jt=tt||null;x?(_.onload=function(){pt=!0,ct()},_.onerror=function(){pt=!0,ft=Error("Stylesheet failed to load"),ct()}):setTimeout(function(){pt=!0,ct()},0),C(j,"head",_)}function M(j,_,tt,ct){var pt=j.c.getElementsByTagName("head")[0];if(pt){var st=S(j,"script",{src:_}),ft=!1;return st.onload=st.onreadystatechange=function(){ft||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(ft=!0,tt&&tt(null),st.onload=st.onreadystatechange=null,st.parentNode.tagName=="HEAD"&&pt.removeChild(st))},pt.appendChild(st),setTimeout(function(){ft||(ft=!0,tt&&tt(Error("Script load timeout")))},ct||5e3),st}return null}function L(){this.a=0,this.c=null}function B(j){return j.a++,function(){j.a--,ot(j)}}function W(j,_){j.c=_,ot(j)}function ot(j){j.a==0&&j.c&&(j.c(),j.c=null)}function dt(j){this.a=j||"-"}function X(j,_){this.c=j,this.f=4,this.a="n";var tt=(_||"n4").match(/^([nio])([1-9])$/i);tt&&(this.a=tt[1],this.f=parseInt(tt[2],10))}function it(j){var _=[];j=j.split(/,\s*/);for(var tt=0;tt<j.length;tt++){var ct=j[tt].replace(/['"]/g,"");ct.indexOf(" ")!=-1||/^\d/.test(ct)?_.push("'"+ct+"'"):_.push(ct)}return _.join(",")}function J(j){return j.a+j.f}function Jt(j){var _="normal";return j.a==="o"?_="oblique":j.a==="i"&&(_="italic"),_}function ge(j){var _=4,tt="n",ct=null;return j&&((ct=j.match(/(normal|oblique|italic)/i))&&ct[1]&&(tt=ct[1].substr(0,1).toLowerCase()),(ct=j.match(/([1-9]00|normal|bold)/i))&&ct[1]&&(/bold/i.test(ct[1])?_=7:/[1-9]00/.test(ct[1])&&(_=parseInt(ct[1].substr(0,1),10)))),tt+_}function Z(j,_){this.c=j,this.f=j.o.document.documentElement,this.h=_,this.a=new dt("-"),this.j=_.events!==!1,this.g=_.classes!==!1}function Dt(j){if(j.g){var _=A(j.f,j.a.c("wf","active")),tt=[],ct=[j.a.c("wf","loading")];_||tt.push(j.a.c("wf","inactive")),k(j.f,tt,ct)}G(j,"inactive")}function G(j,_,tt){j.j&&j.h[_]&&(tt?j.h[_](tt.c,J(tt)):j.h[_]())}function Q(){this.c={}}function rt(j,_){this.c=j,this.f=_,this.a=S(this.c,"span",{"aria-hidden":"true"},this.f)}function vt(j){C(j.c,"body",j.a)}function O(j){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+it(j.c)+";font-style:"+Jt(j)+";font-weight:"+j.f+"00;"}function nt(j,_,tt,ct,pt,st){this.g=j,this.j=_,this.a=ct,this.c=tt,this.f=pt||3e3,this.h=st||void 0}function yt(j,_,tt,ct,pt,st,ft){this.v=j,this.B=_,this.c=tt,this.a=ct,this.s=ft||"BESbswy",this.f={},this.w=pt||3e3,this.u=st||null,this.m=this.j=this.h=this.g=null,this.g=new rt(this.c,this.s),this.h=new rt(this.c,this.s),this.j=new rt(this.c,this.s),this.m=new rt(this.c,this.s),j=O(j=new X(this.a.c+",serif",J(this.a))),this.g.a.style.cssText=j,j=O(j=new X(this.a.c+",sans-serif",J(this.a))),this.h.a.style.cssText=j,j=O(j=new X("serif",J(this.a))),this.j.a.style.cssText=j,j=O(j=new X("sans-serif",J(this.a))),this.m.a.style.cssText=j,vt(this.g),vt(this.h),vt(this.j),vt(this.m)}dt.prototype.c=function(j){for(var _=[],tt=0;tt<arguments.length;tt++)_.push(arguments[tt].replace(/[\W_]+/g,"").toLowerCase());return _.join(this.a)},nt.prototype.start=function(){var j=this.c.o.document,_=this,tt=v(),ct=new Promise(function(ft,jt){(function Ct(){v()-tt>=_.f?jt():j.fonts.load(function(zt){return Jt(zt)+" "+zt.f+"00 300px "+it(zt.c)}(_.a),_.h).then(function(zt){1<=zt.length?ft():setTimeout(Ct,25)},function(){jt()})})()}),pt=null,st=new Promise(function(ft,jt){pt=setTimeout(jt,_.f)});Promise.race([st,ct]).then(function(){pt&&(clearTimeout(pt),pt=null),_.g(_.a)},function(){_.j(_.a)})};var wt={D:"serif",C:"sans-serif"},mt=null;function ht(){if(mt===null){var j=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);mt=!!j&&(536>parseInt(j[1],10)||parseInt(j[1],10)===536&&11>=parseInt(j[2],10))}return mt}function lt(j,_,tt){for(var ct in wt)if(wt.hasOwnProperty(ct)&&_===j.f[wt[ct]]&&tt===j.f[wt[ct]])return!0;return!1}function Tt(j){var _,tt=j.g.a.offsetWidth,ct=j.h.a.offsetWidth;(_=tt===j.f.serif&&ct===j.f["sans-serif"])||(_=ht()&&lt(j,tt,ct)),_?v()-j.A>=j.w?ht()&&lt(j,tt,ct)&&(j.u===null||j.u.hasOwnProperty(j.a.c))?St(j,j.v):St(j,j.B):function(pt){setTimeout(m(function(){Tt(this)},pt),50)}(j):St(j,j.v)}function St(j,_){setTimeout(m(function(){R(this.g.a),R(this.h.a),R(this.j.a),R(this.m.a),_(this.a)},j),0)}function $(j,_,tt){this.c=j,this.a=_,this.f=0,this.m=this.j=!1,this.s=tt}yt.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=v(),Tt(this)};var Nt=null;function bt(j){--j.f==0&&j.j&&(j.m?((j=j.a).g&&k(j.f,[j.a.c("wf","active")],[j.a.c("wf","loading"),j.a.c("wf","inactive")]),G(j,"active")):Dt(j.a))}function It(j){this.j=j,this.a=new Q,this.h=0,this.f=this.g=!0}function Ht(j,_,tt,ct,pt){var st=--j.h==0;(j.f||j.g)&&setTimeout(function(){var ft=pt||null,jt=ct||{};if(tt.length===0&&st)Dt(_.a);else{_.f+=tt.length,st&&(_.j=st);var Ct,zt=[];for(Ct=0;Ct<tt.length;Ct++){var Et=tt[Ct],de=jt[Et.c],se=_.a,Se=Et;if(se.g&&k(se.f,[se.a.c("wf",Se.c,J(Se).toString(),"loading")]),G(se,"fontloading",Se),se=null,Nt===null)if(window.FontFace){Se=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var $e=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);Nt=Se?42<parseInt(Se[1],10):!$e}else Nt=!1;se=Nt?new nt(m(_.g,_),m(_.h,_),_.c,Et,_.s,de):new yt(m(_.g,_),m(_.h,_),_.c,Et,_.s,ft,de),zt.push(se)}for(Ct=0;Ct<zt.length;Ct++)zt[Ct].start()}},0)}function ce(j,_){this.c=j,this.a=_}function Oe(j,_){this.c=j,this.a=_}function Vt(j,_){this.c=j||Mt,this.a=[],this.f=[],this.g=_||""}$.prototype.g=function(j){var _=this.a;_.g&&k(_.f,[_.a.c("wf",j.c,J(j).toString(),"active")],[_.a.c("wf",j.c,J(j).toString(),"loading"),_.a.c("wf",j.c,J(j).toString(),"inactive")]),G(_,"fontactive",j),this.m=!0,bt(this)},$.prototype.h=function(j){var _=this.a;if(_.g){var tt=A(_.f,_.a.c("wf",j.c,J(j).toString(),"active")),ct=[],pt=[_.a.c("wf",j.c,J(j).toString(),"loading")];tt||ct.push(_.a.c("wf",j.c,J(j).toString(),"inactive")),k(_.f,ct,pt)}G(_,"fontinactive",j),bt(this)},It.prototype.load=function(j){this.c=new b(this.j,j.context||this.j),this.g=j.events!==!1,this.f=j.classes!==!1,function(_,tt,ct){var pt=[],st=ct.timeout;(function(jt){jt.g&&k(jt.f,[jt.a.c("wf","loading")]),G(jt,"loading")})(tt),pt=function(jt,Ct,zt){var Et,de=[];for(Et in Ct)if(Ct.hasOwnProperty(Et)){var se=jt.c[Et];se&&de.push(se(Ct[Et],zt))}return de}(_.a,ct,_.c);var ft=new $(_.c,tt,st);for(_.h=pt.length,tt=0,ct=pt.length;tt<ct;tt++)pt[tt].load(function(jt,Ct,zt){Ht(_,ft,jt,Ct,zt)})}(this,new Z(this.c,j),j)},ce.prototype.load=function(j){var _=this,tt=_.a.projectId,ct=_.a.version;if(tt){var pt=_.c.o;M(this.c,(_.a.api||"https://fast.fonts.net/jsapi")+"/"+tt+".js"+(ct?"?v="+ct:""),function(st){st?j([]):(pt["__MonotypeConfiguration__"+tt]=function(){return _.a},function ft(){if(pt["__mti_fntLst"+tt]){var jt,Ct=pt["__mti_fntLst"+tt](),zt=[];if(Ct)for(var Et=0;Et<Ct.length;Et++){var de=Ct[Et].fontfamily;Ct[Et].fontStyle!=null&&Ct[Et].fontWeight!=null?(jt=Ct[Et].fontStyle+Ct[Et].fontWeight,zt.push(new X(de,jt))):zt.push(new X(de))}j(zt)}else setTimeout(function(){ft()},50)}())}).id="__MonotypeAPIScript__"+tt}else j([])},Oe.prototype.load=function(j){var _,tt,ct=this.a.urls||[],pt=this.a.families||[],st=this.a.testStrings||{},ft=new L;for(_=0,tt=ct.length;_<tt;_++)D(this.c,ct[_],B(ft));var jt=[];for(_=0,tt=pt.length;_<tt;_++)if((ct=pt[_].split(":"))[1])for(var Ct=ct[1].split(","),zt=0;zt<Ct.length;zt+=1)jt.push(new X(ct[0],Ct[zt]));else jt.push(new X(ct[0]));W(ft,function(){j(jt,st)})};var Mt="https://fonts.googleapis.com/css";function Pt(j){this.f=j,this.a=[],this.c={}}var ye={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},He={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},be={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function De(j,_){this.c=j,this.a=_}var Yt={Arimo:!0,Cousine:!0,Tinos:!0};function Ie(j,_){this.c=j,this.a=_}function vn(j,_){this.c=j,this.f=_,this.a=[]}De.prototype.load=function(j){var _=new L,tt=this.c,ct=new Vt(this.a.api,this.a.text),pt=this.a.families;(function(ft,jt){for(var Ct=jt.length,zt=0;zt<Ct;zt++){var Et=jt[zt].split(":");Et.length==3&&ft.f.push(Et.pop());var de="";Et.length==2&&Et[1]!=""&&(de=":"),ft.a.push(Et.join(de))}})(ct,pt);var st=new Pt(pt);(function(ft){for(var jt=ft.f.length,Ct=0;Ct<jt;Ct++){var zt=ft.f[Ct].split(":"),Et=zt[0].replace(/\+/g," "),de=["n4"];if(2<=zt.length){var se;if(se=[],Se=zt[1])for(var Se,$e=(Se=Se.split(",")).length,tn=0;tn<$e;tn++){var xe;if((xe=Se[tn]).match(/^[\w-]+$/))if((Ye=ee.exec(xe.toLowerCase()))==null)xe="";else{if(xe=(xe=Ye[2])==null||xe==""?"n":be[xe],(Ye=Ye[1])==null||Ye=="")Ye="4";else var qe=He[Ye],Ye=qe||(isNaN(Ye)?"4":Ye.substr(0,1));xe=[xe,Ye].join("")}else xe="";xe&&se.push(xe)}0<se.length&&(de=se),zt.length==3&&(se=[],0<(zt=(zt=zt[2])?zt.split(","):se).length&&(zt=ye[zt[0]])&&(ft.c[Et]=zt))}for(ft.c[Et]||(zt=ye[Et])&&(ft.c[Et]=zt),zt=0;zt<de.length;zt+=1)ft.a.push(new X(Et,de[zt]))}})(st),D(tt,function(ft){if(ft.a.length==0)throw Error("No fonts to load!");if(ft.c.indexOf("kit=")!=-1)return ft.c;for(var jt=ft.a.length,Ct=[],zt=0;zt<jt;zt++)Ct.push(ft.a[zt].replace(/ /g,"+"));return jt=ft.c+"?family="+Ct.join("%7C"),0<ft.f.length&&(jt+="&subset="+ft.f.join(",")),0<ft.g.length&&(jt+="&text="+encodeURIComponent(ft.g)),jt}(ct),B(_)),W(_,function(){j(st.a,st.c,Yt)})},Ie.prototype.load=function(j){var _=this.a.id,tt=this.c.o;_?M(this.c,(this.a.api||"https://use.typekit.net")+"/"+_+".js",function(ct){if(ct)j([]);else if(tt.Typekit&&tt.Typekit.config&&tt.Typekit.config.fn){ct=tt.Typekit.config.fn;for(var pt=[],st=0;st<ct.length;st+=2)for(var ft=ct[st],jt=ct[st+1],Ct=0;Ct<jt.length;Ct++)pt.push(new X(ft,jt[Ct]));try{tt.Typekit.load({events:!1,classes:!1,async:!0})}catch{}j(pt)}},2e3):j([])},vn.prototype.load=function(j){var _=this.f.id,tt=this.c.o,ct=this;_?(tt.__webfontfontdeckmodule__||(tt.__webfontfontdeckmodule__={}),tt.__webfontfontdeckmodule__[_]=function(pt,st){for(var ft=0,jt=st.fonts.length;ft<jt;++ft){var Ct=st.fonts[ft];ct.a.push(new X(Ct.name,ge("font-weight:"+Ct.weight+";font-style:"+Ct.style)))}j(ct.a)},M(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(pt){return pt.o.location.hostname||pt.a.location.hostname}(this.c)+"/"+_+".js",function(pt){pt&&j([])})):j([])};var ie=new It(window);ie.a.c.custom=function(j,_){return new Oe(_,j)},ie.a.c.fontdeck=function(j,_){return new vn(_,j)},ie.a.c.monotype=function(j,_){return new ce(_,j)},ie.a.c.typekit=function(j,_){return new Ie(_,j)},ie.a.c.google=function(j,_){return new De(_,j)};var $t={load:m(ie.load,ie)};(d=(function(){return $t}).call(u,f,u,s))===void 0||(s.exports=d)})()},function(s,u){s.exports=function(f,d,p,h){var m=p?p.call(h,f,d):void 0;if(m!==void 0)return!!m;if(f===d)return!0;if(typeof f!="object"||!f||typeof d!="object"||!d)return!1;var v=Object.keys(f),b=Object.keys(d);if(v.length!==b.length)return!1;for(var x=Object.prototype.hasOwnProperty.bind(d),S=0;S<v.length;S++){var C=v[S];if(!x(C))return!1;var R=f[C],k=d[C];if((m=p?p.call(h,R,k,C):void 0)===!1||m===void 0&&R!==k)return!1}return!0}},function(s,u,f){u.a=function(d){function p(ht,lt,Tt){var St=lt.trim().split(L);lt=St;var $=St.length,Nt=ht.length;switch(Nt){case 0:case 1:var bt=0;for(ht=Nt===0?"":ht[0]+" ";bt<$;++bt)lt[bt]=h(ht,lt[bt],Tt).trim();break;default:var It=bt=0;for(lt=[];bt<$;++bt)for(var Ht=0;Ht<Nt;++Ht)lt[It++]=h(ht[Ht]+" ",St[bt],Tt).trim()}return lt}function h(ht,lt,Tt){var St=lt.charCodeAt(0);switch(33>St&&(St=(lt=lt.trim()).charCodeAt(0)),St){case 38:return lt.replace(B,"$1"+ht.trim());case 58:return ht.trim()+lt.replace(B,"$1"+ht.trim());default:if(0<1*Tt&&0<lt.indexOf("\f"))return lt.replace(B,(ht.charCodeAt(0)===58?"":"$1")+ht.trim())}return ht+lt}function m(ht,lt,Tt,St){var $=ht+";",Nt=2*lt+3*Tt+4*St;if(Nt===944){ht=$.indexOf(":",9)+1;var bt=$.substring(ht,$.length-1).trim();return bt=$.substring(0,ht).trim()+bt+";",vt===1||vt===2&&v(bt,1)?"-webkit-"+bt+bt:bt}if(vt===0||vt===2&&!v($,1))return $;switch(Nt){case 1015:return $.charCodeAt(10)===97?"-webkit-"+$+$:$;case 951:return $.charCodeAt(3)===116?"-webkit-"+$+$:$;case 963:return $.charCodeAt(5)===110?"-webkit-"+$+$:$;case 1009:if($.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+$+$;case 978:return"-webkit-"+$+"-moz-"+$+$;case 1019:case 983:return"-webkit-"+$+"-moz-"+$+"-ms-"+$+$;case 883:if($.charCodeAt(8)===45)return"-webkit-"+$+$;if(0<$.indexOf("image-set(",11))return $.replace(Dt,"$1-webkit-$2")+$;break;case 932:if($.charCodeAt(4)===45)switch($.charCodeAt(5)){case 103:return"-webkit-box-"+$.replace("-grow","")+"-webkit-"+$+"-ms-"+$.replace("grow","positive")+$;case 115:return"-webkit-"+$+"-ms-"+$.replace("shrink","negative")+$;case 98:return"-webkit-"+$+"-ms-"+$.replace("basis","preferred-size")+$}return"-webkit-"+$+"-ms-"+$+$;case 964:return"-webkit-"+$+"-ms-flex-"+$+$;case 1023:if($.charCodeAt(8)!==99)break;return"-webkit-box-pack"+(bt=$.substring($.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+$+"-ms-flex-pack"+bt+$;case 1005:return D.test($)?$.replace(A,":-webkit-")+$.replace(A,":-moz-")+$:$;case 1e3:switch(lt=(bt=$.substring(13).trim()).indexOf("-")+1,bt.charCodeAt(0)+bt.charCodeAt(lt)){case 226:bt=$.replace(X,"tb");break;case 232:bt=$.replace(X,"tb-rl");break;case 220:bt=$.replace(X,"lr");break;default:return $}return"-webkit-"+$+"-ms-"+bt+$;case 1017:if($.indexOf("sticky",9)===-1)break;case 975:switch(lt=($=ht).length-10,Nt=(bt=($.charCodeAt(lt)===33?$.substring(0,lt):$).substring(ht.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|bt.charCodeAt(7))){case 203:if(111>bt.charCodeAt(8))break;case 115:$=$.replace(bt,"-webkit-"+bt)+";"+$;break;case 207:case 102:$=$.replace(bt,"-webkit-"+(102<Nt?"inline-":"")+"box")+";"+$.replace(bt,"-webkit-"+bt)+";"+$.replace(bt,"-ms-"+bt+"box")+";"+$}return $+";";case 938:if($.charCodeAt(5)===45)switch($.charCodeAt(6)){case 105:return bt=$.replace("-items",""),"-webkit-"+$+"-webkit-box-"+bt+"-ms-flex-"+bt+$;case 115:return"-webkit-"+$+"-ms-flex-item-"+$.replace(Jt,"")+$;default:return"-webkit-"+$+"-ms-flex-line-pack"+$.replace("align-content","").replace(Jt,"")+$}break;case 973:case 989:if($.charCodeAt(3)!==45||$.charCodeAt(4)===122)break;case 931:case 953:if(Z.test(ht)===!0)return(bt=ht.substring(ht.indexOf(":")+1)).charCodeAt(0)===115?m(ht.replace("stretch","fill-available"),lt,Tt,St).replace(":fill-available",":stretch"):$.replace(bt,"-webkit-"+bt)+$.replace(bt,"-moz-"+bt.replace("fill-",""))+$;break;case 962:if($="-webkit-"+$+($.charCodeAt(5)===102?"-ms-"+$:"")+$,Tt+St===211&&$.charCodeAt(13)===105&&0<$.indexOf("transform",10))return $.substring(0,$.indexOf(";",27)+1).replace(M,"$1-webkit-$2")+$}return $}function v(ht,lt){var Tt=ht.indexOf(lt===1?":":"{"),St=ht.substring(0,lt!==3?Tt:10);return Tt=ht.substring(Tt+1,ht.length-1),wt(lt!==2?St:St.replace(ge,"$1"),Tt,lt)}function b(ht,lt){var Tt=m(lt,lt.charCodeAt(0),lt.charCodeAt(1),lt.charCodeAt(2));return Tt!==lt+";"?Tt.replace(J," or ($1)").substring(4):"("+lt+")"}function x(ht,lt,Tt,St,$,Nt,bt,It,Ht,ce){for(var Oe,Vt=0,Mt=lt;Vt<yt;++Vt)switch(Oe=nt[Vt].call(C,ht,Mt,Tt,St,$,Nt,bt,It,Ht,ce)){case void 0:case!1:case!0:case null:break;default:Mt=Oe}if(Mt!==lt)return Mt}function S(ht){return(ht=ht.prefix)!==void 0&&(wt=null,ht?typeof ht!="function"?vt=1:(vt=2,wt=ht):vt=0),S}function C(ht,lt){var Tt=ht;if(33>Tt.charCodeAt(0)&&(Tt=Tt.trim()),Tt=[Tt],0<yt){var St=x(-1,lt,Tt,Tt,Q,G,0,0,0,0);St!==void 0&&typeof St=="string"&&(lt=St)}var $=function Nt(bt,It,Ht,ce,Oe){for(var Vt,Mt,Pt,ye,He,be=0,ee=0,De=0,Yt=0,Ie=0,vn=0,ie=Pt=Vt=0,$t=0,j=0,_=0,tt=0,ct=Ht.length,pt=ct-1,st="",ft="",jt="",Ct="";$t<ct;){if(Mt=Ht.charCodeAt($t),$t===pt&&ee+Yt+De+be!==0&&(ee!==0&&(Mt=ee===47?10:47),Yt=De=be=0,ct++,pt++),ee+Yt+De+be===0){if($t===pt&&(0<j&&(st=st.replace(k,"")),0<st.trim().length)){switch(Mt){case 32:case 9:case 59:case 13:case 10:break;default:st+=Ht.charAt($t)}Mt=59}switch(Mt){case 123:for(Vt=(st=st.trim()).charCodeAt(0),Pt=1,tt=++$t;$t<ct;){switch(Mt=Ht.charCodeAt($t)){case 123:Pt++;break;case 125:Pt--;break;case 47:switch(Mt=Ht.charCodeAt($t+1)){case 42:case 47:t:{for(ie=$t+1;ie<pt;++ie)switch(Ht.charCodeAt(ie)){case 47:if(Mt===42&&Ht.charCodeAt(ie-1)===42&&$t+2!==ie){$t=ie+1;break t}break;case 10:if(Mt===47){$t=ie+1;break t}}$t=ie}}break;case 91:Mt++;case 40:Mt++;case 34:case 39:for(;$t++<pt&&Ht.charCodeAt($t)!==Mt;);}if(Pt===0)break;$t++}switch(Pt=Ht.substring(tt,$t),Vt===0&&(Vt=(st=st.replace(R,"").trim()).charCodeAt(0)),Vt){case 64:switch(0<j&&(st=st.replace(k,"")),Mt=st.charCodeAt(1)){case 100:case 109:case 115:case 45:j=It;break;default:j=O}if(tt=(Pt=Nt(It,j,Pt,Mt,Oe+1)).length,0<yt&&(He=x(3,Pt,j=p(O,st,_),It,Q,G,tt,Mt,Oe,ce),st=j.join(""),He!==void 0&&(tt=(Pt=He.trim()).length)===0&&(Mt=0,Pt="")),0<tt)switch(Mt){case 115:st=st.replace(it,b);case 100:case 109:case 45:Pt=st+"{"+Pt+"}";break;case 107:Pt=(st=st.replace(W,"$1 $2"))+"{"+Pt+"}",Pt=vt===1||vt===2&&v("@"+Pt,3)?"@-webkit-"+Pt+"@"+Pt:"@"+Pt;break;default:Pt=st+Pt,ce===112&&(ft+=Pt,Pt="")}else Pt="";break;default:Pt=Nt(It,p(It,st,_),Pt,ce,Oe+1)}jt+=Pt,Pt=_=j=ie=Vt=0,st="",Mt=Ht.charCodeAt(++$t);break;case 125:case 59:if(1<(tt=(st=(0<j?st.replace(k,""):st).trim()).length))switch(ie===0&&(Vt=st.charCodeAt(0),Vt===45||96<Vt&&123>Vt)&&(tt=(st=st.replace(" ",":")).length),0<yt&&(He=x(1,st,It,bt,Q,G,ft.length,ce,Oe,ce))!==void 0&&(tt=(st=He.trim()).length)===0&&(st="\0\0"),Vt=st.charCodeAt(0),Mt=st.charCodeAt(1),Vt){case 0:break;case 64:if(Mt===105||Mt===99){Ct+=st+Ht.charAt($t);break}default:st.charCodeAt(tt-1)!==58&&(ft+=m(st,Vt,Mt,st.charCodeAt(2)))}_=j=ie=Vt=0,st="",Mt=Ht.charCodeAt(++$t)}}switch(Mt){case 13:case 10:ee===47?ee=0:1+Vt===0&&ce!==107&&0<st.length&&(j=1,st+="\0"),0<yt*mt&&x(0,st,It,bt,Q,G,ft.length,ce,Oe,ce),G=1,Q++;break;case 59:case 125:if(ee+Yt+De+be===0){G++;break}default:switch(G++,ye=Ht.charAt($t),Mt){case 9:case 32:if(Yt+be+ee===0)switch(Ie){case 44:case 58:case 9:case 32:ye="";break;default:Mt!==32&&(ye=" ")}break;case 0:ye="\\0";break;case 12:ye="\\f";break;case 11:ye="\\v";break;case 38:Yt+ee+be===0&&(j=_=1,ye="\f"+ye);break;case 108:if(Yt+ee+be+rt===0&&0<ie)switch($t-ie){case 2:Ie===112&&Ht.charCodeAt($t-3)===58&&(rt=Ie);case 8:vn===111&&(rt=vn)}break;case 58:Yt+ee+be===0&&(ie=$t);break;case 44:ee+De+Yt+be===0&&(j=1,ye+="\r");break;case 34:case 39:ee===0&&(Yt=Yt===Mt?0:Yt===0?Mt:Yt);break;case 91:Yt+ee+De===0&&be++;break;case 93:Yt+ee+De===0&&be--;break;case 41:Yt+ee+be===0&&De--;break;case 40:if(Yt+ee+be===0){if(Vt===0)switch(2*Ie+3*vn){case 533:break;default:Vt=1}De++}break;case 64:ee+De+Yt+be+ie+Pt===0&&(Pt=1);break;case 42:case 47:if(!(0<Yt+be+De))switch(ee){case 0:switch(2*Mt+3*Ht.charCodeAt($t+1)){case 235:ee=47;break;case 220:tt=$t,ee=42}break;case 42:Mt===47&&Ie===42&&tt+2!==$t&&(Ht.charCodeAt(tt+2)===33&&(ft+=Ht.substring(tt,$t+1)),ye="",ee=0)}}ee===0&&(st+=ye)}vn=Ie,Ie=Mt,$t++}if(0<(tt=ft.length)){if(j=It,0<yt&&(He=x(2,ft,j,bt,Q,G,tt,ce,Oe,ce))!==void 0&&(ft=He).length===0)return Ct+ft+jt;if(ft=j.join(",")+"{"+ft+"}",vt*rt!=0){switch(vt!==2||v(ft,2)||(rt=0),rt){case 111:ft=ft.replace(dt,":-moz-$1")+ft;break;case 112:ft=ft.replace(ot,"::-webkit-input-$1")+ft.replace(ot,"::-moz-$1")+ft.replace(ot,":-ms-input-$1")+ft}rt=0}}return Ct+ft+jt}(O,Tt,lt,0,0);return 0<yt&&(St=x(-2,$,Tt,Tt,Q,G,$.length,0,0,0))!==void 0&&($=St),rt=0,G=Q=1,$}var R=/^\0+/g,k=/[\0\r\f]/g,A=/: */g,D=/zoo|gra/,M=/([,: ])(transform)/g,L=/,\r+?/g,B=/([\t\r\n ])*\f?&/g,W=/@(k\w+)\s*(\S*)\s*/,ot=/::(place)/g,dt=/:(read-only)/g,X=/[svh]\w+-[tblr]{2}/,it=/\(\s*(.*)\s*\)/g,J=/([\s\S]*?);/g,Jt=/-self|flex-/g,ge=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Z=/stretch|:\s*\w+\-(?:conte|avail)/,Dt=/([^-])(image-set\()/,G=1,Q=1,rt=0,vt=1,O=[],nt=[],yt=0,wt=null,mt=0;return C.use=function ht(lt){switch(lt){case void 0:case null:yt=nt.length=0;break;default:if(typeof lt=="function")nt[yt++]=lt;else if(typeof lt=="object")for(var Tt=0,St=lt.length;Tt<St;++Tt)ht(lt[Tt]);else mt=0|!!lt}return ht},C.set=S,d!==void 0&&S(d),C}},function(s,u,f){u.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},function(s,u){var f,d,p=s.exports={};function h(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}function v(M){if(f===setTimeout)return setTimeout(M,0);if((f===h||!f)&&setTimeout)return f=setTimeout,setTimeout(M,0);try{return f(M,0)}catch{try{return f.call(null,M,0)}catch{return f.call(this,M,0)}}}(function(){try{f=typeof setTimeout=="function"?setTimeout:h}catch{f=h}try{d=typeof clearTimeout=="function"?clearTimeout:m}catch{d=m}})();var b,x=[],S=!1,C=-1;function R(){S&&b&&(S=!1,b.length?x=b.concat(x):C=-1,x.length&&k())}function k(){if(!S){var M=v(R);S=!0;for(var L=x.length;L;){for(b=x,x=[];++C<L;)b&&b[C].run();C=-1,L=x.length}b=null,S=!1,function(B){if(d===clearTimeout)return clearTimeout(B);if((d===m||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(B);try{d(B)}catch{try{return d.call(null,B)}catch{return d.call(this,B)}}}(M)}}function A(M,L){this.fun=M,this.array=L}function D(){}p.nextTick=function(M){var L=new Array(arguments.length-1);if(arguments.length>1)for(var B=1;B<arguments.length;B++)L[B-1]=arguments[B];x.push(new A(M,L)),x.length!==1||S||v(k)},A.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=D,p.addListener=D,p.once=D,p.off=D,p.removeListener=D,p.removeAllListeners=D,p.emit=D,p.prependListener=D,p.prependOnceListener=D,p.listeners=function(M){return[]},p.binding=function(M){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(M){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(s,u,f){/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var d=typeof Symbol=="function"&&Symbol.for,p=d?Symbol.for("react.element"):60103,h=d?Symbol.for("react.portal"):60106,m=d?Symbol.for("react.fragment"):60107,v=d?Symbol.for("react.strict_mode"):60108,b=d?Symbol.for("react.profiler"):60114,x=d?Symbol.for("react.provider"):60109,S=d?Symbol.for("react.context"):60110,C=d?Symbol.for("react.async_mode"):60111,R=d?Symbol.for("react.concurrent_mode"):60111,k=d?Symbol.for("react.forward_ref"):60112,A=d?Symbol.for("react.suspense"):60113,D=d?Symbol.for("react.suspense_list"):60120,M=d?Symbol.for("react.memo"):60115,L=d?Symbol.for("react.lazy"):60116,B=d?Symbol.for("react.block"):60121,W=d?Symbol.for("react.fundamental"):60117,ot=d?Symbol.for("react.responder"):60118,dt=d?Symbol.for("react.scope"):60119;function X(J){if(typeof J=="object"&&J!==null){var Jt=J.$$typeof;switch(Jt){case p:switch(J=J.type){case C:case R:case m:case b:case v:case A:return J;default:switch(J=J&&J.$$typeof){case S:case k:case L:case M:case x:return J;default:return Jt}}case h:return Jt}}}function it(J){return X(J)===R}u.AsyncMode=C,u.ConcurrentMode=R,u.ContextConsumer=S,u.ContextProvider=x,u.Element=p,u.ForwardRef=k,u.Fragment=m,u.Lazy=L,u.Memo=M,u.Portal=h,u.Profiler=b,u.StrictMode=v,u.Suspense=A,u.isAsyncMode=function(J){return it(J)||X(J)===C},u.isConcurrentMode=it,u.isContextConsumer=function(J){return X(J)===S},u.isContextProvider=function(J){return X(J)===x},u.isElement=function(J){return typeof J=="object"&&J!==null&&J.$$typeof===p},u.isForwardRef=function(J){return X(J)===k},u.isFragment=function(J){return X(J)===m},u.isLazy=function(J){return X(J)===L},u.isMemo=function(J){return X(J)===M},u.isPortal=function(J){return X(J)===h},u.isProfiler=function(J){return X(J)===b},u.isStrictMode=function(J){return X(J)===v},u.isSuspense=function(J){return X(J)===A},u.isValidElementType=function(J){return typeof J=="string"||typeof J=="function"||J===m||J===R||J===b||J===v||J===A||J===D||typeof J=="object"&&J!==null&&(J.$$typeof===L||J.$$typeof===M||J.$$typeof===x||J.$$typeof===S||J.$$typeof===k||J.$$typeof===W||J.$$typeof===ot||J.$$typeof===dt||J.$$typeof===B)},u.typeOf=X},function(s,u,f){f.r(u),f.d(u,"Wheel",function(){return ge});var d=f(0),p=f.n(d),h=f(5),m=f.n(h);const v=["darkgrey","lightgrey"],b=["black"],x=["arial","verdana","tahoma","trebuchet ms","times","garamond","brush script mt","courier new","georgia","helvetica","times new roman","serif","sans-serif","monospace","cursive","fantasy"];var S=function(Z,Dt,G){G===void 0&&(G=!0);var Q=360/Dt,rt=43+Q/2,vt=(2*Math.random()-1)*Q*.35,O=G?Q*(Dt-Z)-rt+vt:Q*(Dt-Z)-rt;return Dt-Z>Dt/2?-360+O:O},C=function(Z,Dt,G){return Math.min(Math.max(Z,+G),Dt)},R=function(Z){return!!Z&&!x.includes(Z.toLowerCase())},k=function(Z){return Z.slice(-1)[0].slice(-1)[0]+1},A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";const D=new Image;D.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAENCAMAAADwnMpiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACZUExURUdwTP+OROJKK+JKK/6PReJKK/+QQ+JKK+JKK+JKK+JKK/2MQ/+LRv2LQeNLK+JKK/BrNuRNLPyJQeNLK/d+PfFvN/iFQONLK/BtOPV3OvmCPfFxOPR4PeNMLO5oNexiNPmBPudVL+hXL+pcMepfMuZSLvV7PORPLPFyPedULuhYMOpfM+5nNetdMfupXexhM+2dRuNOLeJKK+Smm3cAAAAydFJOUwAY9Okb+hT+8f3uIRYm5fdz1yvdQWQx4mtRNV1L0HqNOsOwo5W6RcRWz6qGgLYFnA6eKwdCNwAACLhJREFUGBntwNeSg8C1BdANdHMaGLJyzprRaNL+/4+7df1iV7lsgyI0Wnh5eXl5eXl5eXl5+S/8t3jQG/ez5W779bX+f1+b7fI8ms4mseOjS5yo937erk0aCP+FCP9BJHU/NstpL3JgPSeeZafc1SIkhf+FiDYf29EheoOlfLXq/+RGC4WVSertF+PoDbZRg9HP0ATC+kRc7zQaOLCGH83OH6EWXk50eDxPFCzgR++7oRHh1XS4ziYO2k31PksjwpsQSb1NP/bRVm9FtjaaNyWmXPYU2kj1dqUrvLkg8DbjCG0TvW88zTsJzHoU+2gPP+qvTcA7CkyeFW9oibg/94R3JibPCh8tEE2PYcAHkDDvx2g6NduHAR8kMMd3hSZ7m2wTzQcKvFPPQWPFWenywdLhcuCjkdRsbQI+nsn7EZrHL5aJ5lME4WbloGHUbG74LJKWWYxGic9JyicKwn3PQWP4q00ofK60zGI0hHrPXT5dEG5WPpogWgw1m8DNpwrPV+y8gM2gk2WMJ/NXeyNsCgk3Ex/P5PTmLpvEzHsOnkeNS5fN4uZjhWdR0zJl06TlVOE51Gio2Tx62Fd4BtUfajaRTrIIj6f6Q81mCpJFhEdT/aFmU4n3GeGx1LTUbDBvGeGRnHGp2Wjep8Lj+L08ZcMlmcLDTOYumy4YTh08SLE3bD5dHnw8RLQzbAN3PsEjqMwTtoK7KXB//ngYsCXMMsLdTfKUbSHeSOHO4o3L9gjKg4+7UouQbZLOB7gnf5YIW8VsI9xRMU/ZMuHIwd2onWHbBGUPdzNL2D7pusCdxEfNFjKfCnfxlhm2kSRjH/ewKgO2UjovcAdqm7KlzFLh9sYeWyuZ4ebivWZr6WOMG/Onhi1msjfcVpEHbLGgXOGmnEXIVku3CrdUlMJWE+8dN+QsDFtOH2PcTlEK2870fdyKnxm2XpAXuJU4F7afOTu4kZGhBaQc4DaitdAG7qeDmxgbWkHKCW5BbQLaIf10cAM9j5aQcoDrvS01beEufFytKGkNyWNcLXNpDzPCtaK90B6yV7jSwdAm4QHXedtp2kTv3nCVoqRdyhhXGbm0izvCNdReaBfZO7hCL6Rtwgku539q2kYvcLkop32OChd7N7RPuMKlnJ3QPnqBS8WJ0D6ydnChvksbhQNcxtkKbaT7uEzh0Uqy9XGRUUo7JREu4ZyEdjIHXKLwaCkZ4RKjlJaSrY/6nI3QVomD+gqP1jIT1DdKaa1gjNqcjdBackZthUeLbVDbKKXFyjfU5JyEFnMVaio82kyvUFM/pc1khnqcrdBmkqGeOKHdlqhn6tJuX6jF3wnt9oFa1FBot9BHHTNDu4l+Qx1noeWCCDWoD6HlpEANg5C2kwFqGGlab4LqnJPQej1UF3m0Xw/Vvbu0Xw/VLYX266EylbMDeqhsYtgBPVSWBeyAHqpyNsIOWKGqyGMHyABVjV12gMSo6izsAB2hIvUh7IDUR0VFyC5IfFTU1+wA+UBF/k7YBV+oSCXshCUq6oXshAwVjYRdELyjGuck7IJghWpUwk4wMao5uOwEz0E1mbATvnxU4myEXSBLVBN57ASZopqDy05IV6gmE3ZCGKES5yTshPUbKlEeO0F2qKbnshOCKaoZCTshnKASfyvshKFCJSphJ8jORyUTw07QfVQzDdgJ4QDV/Ai7QD4UKnE+2AlyRjWxYSeYGaqZaXaBDCNUsxB2gfz4qMT/Yie4U1SjPHaBJDGq6bnsgmDroJqpsAvMFBX9CDtAhjGqcT7YBbJzUE1k2AXhOyqaaXaA5BEqyoQdkC58VOOf2AXJBBWphB2gtw4qGhh2gBmjqnFA+8kxQlVnof1Mhqr8De0neYyqHI/2c88+qhoYWk/KASo7BLReunRQWSa0nQwnqG5J67mfDqpb03ZSDlBDQtuZs4MaUlouyAvUoWm5cOqjhkhot3QfoY53Wi45oJY97WaWCrXMaTWdF6gnpdW8dx+1/GrazGwj1HOgzXQ+QE2ftJgkYx81zWkxc1aoq6S93H2Mur41rZXmK9RWBLRVMBz7qG1EW4mXKdS3p63CXYQL5LSUOcW4REo7ufsBLvEd0ErufIWLDGglNz/4uMiINkrLmYPL7GmhtJwpXCinfdxyrHChX5fWcfOZwqViTdu4856Di02FlnH3Kx+X29Ey4WmAa+S0SuAtY1zFo03SYRbhKr+aFnHzscJ1YqE1JNysfFzpndZIk3OMqy1pCzMfK1xvTjtob1f4uIGENpAwH0e4hW9NC6TDz8LHTTgBWy/wTisHN7Ji2wXm+K5wMyO2m5i8H+OGNmwzcctF4eOWSraXmPJcOLgtw7aSMM8KBzf2G7CddLjvRz5uLhK2kKTJz0HhHsZsHRGTLwYO7uOTLSNpeJpGPu5lzjYRMfl5pXBHQ7aHpN52Gvm4p++UbaHNcTFwcGd+wFYQU+4OEe5vIGw+Sb3tNPbxCFM2nehwPyocPMiOzabDdTZx8DhzNpgOj4uJwkN5bCodrhcrhQf71mwi0eE6myg83m/AxpHU22QDB09RsFlETLLtFw6eZcwGEW3yz3H0hidasinE9TbZROHJjmwC0ebjcxw5eD6PzyZikl1/oNAMLp9JxPW+sp7y0RTfwmcRSb39YhY5aJJf4TOIuN5XNoscNE3Mh5PAJKfsEDlooh4fSrT5+OmvlI+mGvFRRFzvazGOHTTajg8gos3HbrpSPhrvg/clos3Hz+gQOWgHw7sR0ebjp9+LHLQI70IkNeuffi9y0Da8MQnScL1dzCaOj1ZKeSuivfnfzEHLubye6GT+965ghSOvITqZ/72rb9jjFPASIql3/JspWGcasibRZr7pT3zYKTpqVhXoZL6bxr+w2mci/F9Eu+UxO6hvdED0Z4T/kWgv/5sOftEhh7+Q/050Wh4XM/WL7ln9DTX/SXSYn/oT/xud9dv/y8MgkCAdzj/H0S9evtVk1hv433h5eXl5ebna/wE/LWKN4f9AUgAAAABJRU5ErkJggg==";var M=f(1);const L=M.a.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`,B=M.a.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`,W=M.a.div`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${Z=>Z.startRotationDegrees}deg);

  &.started-spinning {
    animation: spin-${({classKey:Z})=>Z} ${({startSpinningTime:Z})=>Z/1e3}s cubic-bezier(
          0.71,
          ${Z=>Z.disableInitialAnimation?0:-.29},
          0.96,
          0.9
        ) 0s 1 normal forwards running,
      continueSpin-${({classKey:Z})=>Z} ${({continueSpinningTime:Z})=>Z/1e3}s linear ${({startSpinningTime:Z})=>Z/1e3}s 1 normal forwards running,
      stopSpin-${({classKey:Z})=>Z} ${({stopSpinningTime:Z})=>Z/1e3}s cubic-bezier(0, 0, 0.35, 1.02) ${({startSpinningTime:Z,continueSpinningTime:Dt})=>(Z+Dt)/1e3}s 1 normal forwards
        running;
  }

  @keyframes spin-${({classKey:Z})=>Z} {
    from {
      transform: rotate(${Z=>Z.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${Z=>Z.startRotationDegrees+360}deg);
    }
  }
  @keyframes continueSpin-${({classKey:Z})=>Z} {
    from {
      transform: rotate(${Z=>Z.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${Z=>Z.startRotationDegrees+360}deg);
    }
  }
  @keyframes stopSpin-${({classKey:Z})=>Z} {
    from {
      transform: rotate(${Z=>Z.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${Z=>1440+Z.finalRotationDegrees}deg);
    }
  }
`,ot=Object(M.a)(L)`
  position: absolute;
  z-index: 5;
  width: 17%;
  right: 6px;
  top: 15px;
`,dt=M.a.canvas`
  width: 98%;
  height: 98%;
`;var X=function(Z,Dt,G,Q,rt,vt){Z.beginPath(),Z.moveTo(Dt+(Q+1)*Math.cos(vt),G+(Q+1)*Math.sin(vt)),Z.lineTo(Dt+(rt-1)*Math.cos(vt),G+(rt-1)*Math.sin(vt)),Z.closePath(),Z.stroke()},it=function(Z){var Dt=Z.width,G=Z.height,Q=Z.data,rt=Z.outerBorderColor,vt=Z.outerBorderWidth,O=Z.innerRadius,nt=Z.innerBorderColor,yt=Z.innerBorderWidth,wt=Z.radiusLineColor,mt=Z.radiusLineWidth,ht=Z.fontFamily,lt=Z.fontWeight,Tt=Z.fontSize,St=Z.fontStyle,$=Z.perpendicularText,Nt=Z.prizeMap,bt=Z.rouletteUpdater,It=Z.textDistance,Ht=Object(d.createRef)(),ce={outerBorderColor:rt,outerBorderWidth:vt,innerRadius:O,innerBorderColor:nt,innerBorderWidth:yt,radiusLineColor:wt,radiusLineWidth:mt,fontFamily:ht,fontWeight:lt,fontSize:Tt,fontStyle:St,perpendicularText:$,prizeMap:Nt,rouletteUpdater:bt,textDistance:It};return Object(d.useEffect)(function(){(function(Oe,Vt,Mt){var Pt,ye,He,be,ee,De=Mt.outerBorderColor,Yt=Mt.outerBorderWidth,Ie=Mt.innerRadius,vn=Mt.innerBorderColor,ie=Mt.innerBorderWidth,$t=Mt.radiusLineColor,j=Mt.radiusLineWidth,_=Mt.fontFamily,tt=Mt.fontWeight,ct=Mt.fontSize,pt=Mt.fontStyle,st=Mt.perpendicularText,ft=Mt.prizeMap,jt=Mt.textDistance,Ct=k(ft);Yt*=2,ie*=2,j*=2;var zt=Oe.current;if(zt!=null&&zt.getContext("2d")){var Et=zt.getContext("2d");Et.clearRect(0,0,500,500),Et.strokeStyle="transparent",Et.lineWidth=0;for(var de=0,se=zt.width/2-10,Se=se*C(0,100,jt)/100,$e=se*C(0,100,Ie)/100,tn=zt.width/2,xe=zt.height/2,qe=0;qe<Vt.length;qe++){var Ye=Vt[qe],Zn=Ye.optionSize,en=Ye.style,yn=Zn&&Zn*(2*Math.PI)/Ct||2*Math.PI/Ct,H=de+yn;Et.fillStyle=en&&en.backgroundColor,Et.beginPath(),Et.arc(tn,xe,se,de,H,!1),Et.arc(tn,xe,$e,H,de,!0),Et.stroke(),Et.fill(),Et.save(),Et.strokeStyle=j<=0?"transparent":$t,Et.lineWidth=j,X(Et,tn,xe,$e,se,de),qe===Vt.length-1&&X(Et,tn,xe,$e,se,H),Et.strokeStyle=Yt<=0?"transparent":De,Et.lineWidth=Yt,Et.beginPath(),Et.arc(tn,xe,se-Et.lineWidth/2,0,2*Math.PI),Et.closePath(),Et.stroke(),Et.strokeStyle=ie<=0?"transparent":vn,Et.lineWidth=ie,Et.beginPath(),Et.arc(tn,xe,$e+Et.lineWidth/2-1,0,2*Math.PI),Et.closePath(),Et.stroke(),Et.translate(tn+Math.cos(de+yn/2)*Se,xe+Math.sin(de+yn/2)*Se);var F=de+yn/2;if(Vt[qe].image){F+=Vt[qe].image&&!(!((Pt=Vt[qe].image)===null||Pt===void 0)&&Pt.landscape)?Math.PI/2:0,Et.rotate(F);var U=((ye=Vt[qe].image)===null||ye===void 0?void 0:ye._imageHTML)||new Image;Et.drawImage(U,(U.width+(((He=Vt[qe].image)===null||He===void 0?void 0:He.offsetX)||0))/-2,-(U.height-(!((be=Vt[qe].image)===null||be===void 0)&&be.landscape?0:90)+(((ee=Vt[qe].image)===null||ee===void 0?void 0:ee.offsetY)||0))/2,U.width,U.height)}else{F+=st?Math.PI/2:0,Et.rotate(F);var K=Vt[qe].option;Et.font="".concat((en==null?void 0:en.fontStyle)||pt," ").concat((en==null?void 0:en.fontWeight)||tt," ").concat(2*((en==null?void 0:en.fontSize)||ct),"px ").concat((en==null?void 0:en.fontFamily)||_,", Helvetica, Arial"),Et.fillStyle=en&&en.textColor,Et.fillText(K||"",-Et.measureText(K||"").width/2,ct/2.7)}Et.restore(),de=H}}})(Ht,Q,ce)},[Ht,Q,ce,bt]),p.a.createElement(dt,{ref:Ht,width:Dt,height:G})},J=function(){return(J=Object.assign||function(Z){for(var Dt,G=1,Q=arguments.length;G<Q;G++)for(var rt in Dt=arguments[G])Object.prototype.hasOwnProperty.call(Dt,rt)&&(Z[rt]=Dt[rt]);return Z}).apply(this,arguments)},Jt=function(Z,Dt,G){for(var Q,rt=0,vt=Dt.length;rt<vt;rt++)!Q&&rt in Dt||(Q||(Q=Array.prototype.slice.call(Dt,0,rt)),Q[rt]=Dt[rt]);return Z.concat(Q||Array.prototype.slice.call(Dt))},ge=function(Z){var Dt=Z.mustStartSpinning,G=Z.prizeNumber,Q=Z.data,rt=Z.onStopSpinning,vt=rt===void 0?function(){return null}:rt,O=Z.backgroundColors,nt=O===void 0?v:O,yt=Z.textColors,wt=yt===void 0?b:yt,mt=Z.outerBorderColor,ht=mt===void 0?"black":mt,lt=Z.outerBorderWidth,Tt=lt===void 0?5:lt,St=Z.innerRadius,$=St===void 0?0:St,Nt=Z.innerBorderColor,bt=Nt===void 0?"black":Nt,It=Z.innerBorderWidth,Ht=It===void 0?0:It,ce=Z.radiusLineColor,Oe=ce===void 0?"black":ce,Vt=Z.radiusLineWidth,Mt=Vt===void 0?5:Vt,Pt=Z.fontFamily,ye=Pt===void 0?x[0]:Pt,He=Z.fontSize,be=He===void 0?20:He,ee=Z.fontWeight,De=ee===void 0?"bold":ee,Yt=Z.fontStyle,Ie=Yt===void 0?"normal":Yt,vn=Z.perpendicularText,ie=vn!==void 0&&vn,$t=Z.textDistance,j=$t===void 0?60:$t,_=Z.spinDuration,tt=_===void 0?1:_,ct=Z.startingOptionIndex,pt=ct===void 0?-1:ct,st=Z.pointerProps,ft=st===void 0?{}:st,jt=Z.disableInitialAnimation,Ct=jt!==void 0&&jt,zt=Object(d.useState)(Jt([],Q)),Et=zt[0],de=zt[1],se=Object(d.useState)([[0]]),Se=se[0],$e=se[1],tn=Object(d.useState)(0),xe=tn[0],qe=tn[1],Ye=Object(d.useState)(0),Zn=Ye[0],en=Ye[1],yn=Object(d.useState)(!1),H=yn[0],F=yn[1],U=Object(d.useState)(!1),K=U[0],gt=U[1],Rt=Object(d.useState)(!1),xt=Rt[0],kt=Rt[1],Ut=Object(d.useState)(!1),Xt=Ut[0],fe=Ut[1],Ge=Object(d.useState)(!1),nn=Ge[0],Be=Ge[1],ne=Object(d.useState)(0),Zt=ne[0],he=ne[1],ve=Object(d.useState)(0),Kt=ve[0],Ne=ve[1],Qt=Object(d.useState)(!1),Xe=Qt[0],Wn=Qt[1],Cn=Object(d.useRef)(!1),dn=function(Le){for(var re="",bn=A.length,Vn=0;Vn<Le;Vn++)re+=A.charAt(Math.floor(Math.random()*bn));return re}(5),Ke=Math.max(.01,tt),ma=2600*Ke,Sa=750*Ke,ci=8e3*Ke,Sr=ma+Sa+ci;Object(d.useEffect)(function(){for(var Le,re,bn,Vn,Pn,di,Jn,In,Me,Dn,hi=0,ta=[],Un=(Q==null?void 0:Q.length)||0,Bn=[{option:"",optionSize:1}],Hn=R(ye==null?void 0:ye.trim())?[ye]:[],An=function(le){var $n=((bn=(re=(Le=Q[le])===null||Le===void 0?void 0:Le.style)===null||re===void 0?void 0:re.fontFamily)===null||bn===void 0?void 0:bn.split(","))||[];$n=$n.map(function(Ha){return Ha.trim()}).filter(R),Hn.push.apply(Hn,$n),Bn[le]=J(J({},Q[le]),{style:{backgroundColor:((Vn=Q[le].style)===null||Vn===void 0?void 0:Vn.backgroundColor)||(nt==null?void 0:nt[le%(nt==null?void 0:nt.length)])||v[0],fontFamily:((Pn=Q[le].style)===null||Pn===void 0?void 0:Pn.fontFamily)||ye||"Nunito",fontSize:((di=Q[le].style)===null||di===void 0?void 0:di.fontSize)||be||20,fontWeight:((Jn=Q[le].style)===null||Jn===void 0?void 0:Jn.fontWeight)||De||"bold",fontStyle:((In=Q[le].style)===null||In===void 0?void 0:In.fontStyle)||Ie||"normal",textColor:((Me=Q[le].style)===null||Me===void 0?void 0:Me.textColor)||(wt==null?void 0:wt[le%(wt==null?void 0:wt.length)])||b[0]}}),ta.push([]);for(var qi=0;qi<(Bn[le].optionSize||1);qi++)ta[le][qi]=hi++;if(Q[le].image){Ne(function(Ha){return Ha+1});var Ca=new Image;Ca.src=((Dn=Q[le].image)===null||Dn===void 0?void 0:Dn.uri)||"",Ca.onload=function(){var Ha,pi,Yi,Gi,Aa,Ta;Ca.height=200*(((Ha=Q[le].image)===null||Ha===void 0?void 0:Ha.sizeMultiplier)||1),Ca.width=Ca.naturalWidth/Ca.naturalHeight*Ca.height,Bn[le].image={uri:((pi=Q[le].image)===null||pi===void 0?void 0:pi.uri)||"",offsetX:((Yi=Q[le].image)===null||Yi===void 0?void 0:Yi.offsetX)||0,offsetY:((Gi=Q[le].image)===null||Gi===void 0?void 0:Gi.offsetY)||0,landscape:((Aa=Q[le].image)===null||Aa===void 0?void 0:Aa.landscape)||!1,sizeMultiplier:((Ta=Q[le].image)===null||Ta===void 0?void 0:Ta.sizeMultiplier)||1,_imageHTML:Ca},he(function(Er){return Er+1}),Be(function(Er){return!Er})}}},Ea=0;Ea<Un;Ea++)An(Ea);if((Hn==null?void 0:Hn.length)>0)try{m.a.load({google:{families:Array.from(new Set(Hn.filter(function(le){return!!le})))},timeout:1e3,fontactive:function(){Be(!nn)},active:function(){Wn(!0),Be(!nn)}})}catch(le){console.log("Error loading webfonts:",le)}else Wn(!0);de(Jt([],Bn)),$e(ta),Ua(pt,ta),fe(!0)},[Q,nt,wt]),Object(d.useEffect)(function(){var Le;if(Dt&&!xt){kt(!0),fi();var re=Se[G][Math.floor(Math.random()*((Le=Se[G])===null||Le===void 0?void 0:Le.length))],bn=S(re,k(Se));en(bn)}},[Dt]),Object(d.useEffect)(function(){K&&(kt(!1),qe(Zn))},[K]);var fi=function(){F(!0),gt(!1),Cn.current=!0,setTimeout(function(){Cn.current&&(Cn.current=!1,F(!1),gt(!0),vt())},Sr)},Ua=function(Le,re){var bn;if(pt>=0){var Vn=Math.floor(Le)%(re==null?void 0:re.length),Pn=re[Vn][Math.floor(((bn=re[Vn])===null||bn===void 0?void 0:bn.length)/2)];qe(S(Pn,k(re),!1))}};return Xt?p.a.createElement(B,{style:!Xe||Kt>0&&Zt!==Kt?{visibility:"hidden"}:{}},p.a.createElement(W,{className:H?"started-spinning":"",classKey:dn,startSpinningTime:ma,continueSpinningTime:Sa,stopSpinningTime:ci,startRotationDegrees:xe,finalRotationDegrees:Zn,disableInitialAnimation:Ct},p.a.createElement(it,{width:"900",height:"900",data:Et,outerBorderColor:ht,outerBorderWidth:Tt,innerRadius:$,innerBorderColor:bt,innerBorderWidth:Ht,radiusLineColor:Oe,radiusLineWidth:Mt,fontFamily:ye,fontWeight:De,fontStyle:Ie,fontSize:be,perpendicularText:ie,prizeMap:Se,rouletteUpdater:nn,textDistance:j})),p.a.createElement(ot,{style:ft==null?void 0:ft.style,src:(ft==null?void 0:ft.src)||D.src,alt:"roulette-static"})):null}}])})}(wd)),wd.exports}var DA=OA();const cu=[{id:1,label:"Passa",color:"#FF5252",points:0},{id:2,label:"Rebus",color:"#FF9800",points:200,url:"/game/wheel/rebus"},{id:7,label:"Bonus",color:"#F44336",points:200},{id:4,label:"Fusioni",color:"#4CAF50",points:400,url:"/game/wheel/fusion"},{id:8,label:"Malus",color:"#000000",points:-100},{id:5,label:"Suono",color:"#2196F3",points:500,url:"/game/wheel/sound"}];function BA(){const n=Hi(),{players:i,updatePlayerScore:o}=xr(),[s,u]=T.useState(null),[f,d]=T.useState(!1),[p,h]=T.useState(0),[m,v]=T.useState(!1),[b,x]=T.useState(null),[S,C]=T.useState(!1),R=cu.map(L=>({option:L.label,style:{backgroundColor:L.color,textColor:"white"}}));T.useEffect(()=>{i.length===0&&n("/")},[i,n]);const k=L=>{f||(u(L),x(null),C(!1))},A=()=>{if(!s){alert("Seleziona prima un giocatore!");return}if(!m){const L=Math.floor(Math.random()*cu.length);h(L),v(!0),d(!0),C(!1)}},D=()=>{v(!1),d(!1);const L=cu[p];if(x(L),C(!0),(L.label==="Bonus"||L.label==="Malus")&&s){const B=s.score+L.points;o(s.id,B),u({...s,score:B})}},M=()=>{if(!b)return null;if(b.label==="Bonus"||b.label==="Malus"){const L=b.label==="Bonus"?"aggiunti":"sottratti",B=Math.abs(b.points);return y.jsxs(Sd,{$color:b.color,children:[y.jsxs(Ed,{children:[b.label,"!"]}),y.jsxs(Cd,{children:[b.points>0?"+":"-",B," punti"]}),y.jsx(Ad,{children:L}),y.jsx(Td,{onClick:()=>C(!1),children:"Continua"})]})}return b.label==="Passa"?y.jsxs(Sd,{$color:b.color,children:[y.jsx(Ed,{children:"Peccato!"}),y.jsx(Cd,{children:"Passa!"}),y.jsx(Ad,{children:"Turno saltato"}),y.jsx(Td,{onClick:()=>C(!1),children:"Continua"})]}):y.jsxs(Sd,{$color:b.color,children:[y.jsx(Ed,{children:"Hai ottenuto:"}),y.jsx(Cd,{children:b.label}),y.jsxs(Ad,{children:[b.points>0?"+":"",b.points," punti"]}),b.url&&y.jsx(Pa,{to:b.url,style:{textDecoration:"none"},children:y.jsx(Td,{as:"div",children:"Inizia la Sfida"})})]})};return y.jsxs(HA,{children:[y.jsxs($A,{to:"/game",children:[y.jsx(br,{})," Torna ai giochi"]}),y.jsx(qA,{children:"Ruota della Fortuna Pokémon"}),y.jsx(YA,{children:"Seleziona un allenatore, gira la ruota e affronta la sfida!"}),y.jsxs(GA,{children:[y.jsxs(XA,{children:[y.jsxs(KA,{children:[y.jsx(NA,{children:y.jsx(DA.Wheel,{mustStartSpinning:m,prizeNumber:p,data:R,backgroundColors:cu.map(L=>L.color),textColors:["#ffffff"],fontSize:14,outerBorderColor:"#ffde00",outerBorderWidth:3,innerBorderColor:"#ffffff",innerBorderWidth:1,radiusLineColor:"#ffffff",radiusLineWidth:1,perpendicularText:!0,textDistance:60,onStopSpinning:D})}),y.jsxs(QA,{onClick:A,disabled:f||!s,children:[y.jsx(g0,{})," Gira la Ruota"]})]}),S&&b&&M()]}),y.jsxs(FA,{children:[y.jsx(ZA,{children:"Seleziona un Allenatore"}),y.jsx(WA,{children:i.map(L=>y.jsxs(JA,{onClick:()=>k(L),$active:(s==null?void 0:s.id)===L.id,children:[y.jsx(IA,{src:L.avatar,alt:L.name}),y.jsxs(tT,{children:[y.jsx(eT,{children:L.name}),y.jsxs(nT,{children:[L.score," punti"]})]})]},L.id))})]})]}),y.jsxs(VA,{children:[y.jsx(Gs,{className:"ball1"}),y.jsx(Gs,{className:"ball2"}),y.jsx(PA,{className:"ball3"}),y.jsx(UA,{className:"ball4"})]})]})}const NA=E.div`
  width: 80%;
  max-width: 400px;
  position: relative;
`,LA=Re`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;Re`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;const Ys=Re`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,_A=Re`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,VA=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background-color: #233975;
`,Gs=E.div`
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
    animation: ${Ys} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${Ys} 10s ease-in-out infinite reverse;
  }
`,PA=E(Gs)`
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
    animation: ${Ys} 15s ease-in-out infinite;
  }
`,UA=E(Gs)`
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
    animation: ${Ys} 18s ease-in-out infinite reverse;
  }
`;E(Gs)`
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
    animation: ${Ys} 14s ease-in-out infinite;
  }
`;const HA=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,$A=E(Pa)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`,qA=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1rem;
  text-align: center;
  z-index: 1;
`,YA=E.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  z-index: 1;
`,GA=E.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  margin: 2rem 0;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`,XA=E.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`,KA=E.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;E.svg`
  width: 100%;
  height: 100%;
  transition: transform 5s cubic-bezier(0.17, 0.67, 0.2, 1);
  transform: ${n=>`rotate(${n.$rotation}deg)`};
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
`;E.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid #ee1515;
  z-index: 2;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.3));

  &::after {
    content: '';
    position: absolute;
    top: -28px;
    left: -10px;
    width: 20px;
    height: 20px;
    background: #ffde00;
    border-radius: 50%;
    border: 3px solid #ee1515;
  }
`;const QA=E.button`
  position: absolute;
  bottom: -60px;
  padding: 12px 25px;
  background: #ee1515;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,Sd=E.div`
  margin-top: 5rem;
  padding: 1.5rem;
  background: ${n=>n.$color||"#3b4cca"};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${_A} 0.5s ease;
  border: 3px solid white;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Ed=E.div`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.5rem;
`,Cd=E.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,Ad=E.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffde00;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`,Td=E.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`,FA=E.div`
  flex: 1;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,ZA=E.h2`
  font-size: 1.5rem;
  color: #ffde00;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,WA=E.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 60vh;
  /* overflow-y: auto; */
  padding-right: 0.5rem;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`,JA=E.div`
  display: flex;
  align-items: center;
  background: ${n=>n.$active?"linear-gradient(135deg, rgba(255, 222, 0, 0.2), rgba(59, 76, 202, 0.2))":"rgba(255, 255, 255, 0.08)"};
  border-radius: 12px;
  padding: 0.8rem;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  border: 2px solid ${n=>n.$active?"#FFDE00":"transparent"};

  ${n=>n.$active&&yo`
      animation: ${LA} 2s infinite ease-in-out;
      box-shadow: 0 0 15px rgba(255, 222, 0, 0.4);
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`,IA=E.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  background: #132a57;
`,tT=E.div`
  flex: 1;
`,eT=E.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  color: white;
`,nT=E.div`
  font-size: 0.85rem;
  color: #ffde00;
`;E.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ee1515;
  width: 24px;
  height: 24px;
`;const aT="/vegetaquizshow/assets/card-4O-qPn6Q.png",iT="/vegetaquizshow/assets/vaporeon-CKwMlkUN.jpg",rT="/vegetaquizshow/assets/garchomp-HcLYxoWu.jpg",oT="/vegetaquizshow/assets/lopunny-By_K6DKg.jpg",sT="/vegetaquizshow/assets/psyduck-DHhIB6m5.jpg",lT="/vegetaquizshow/assets/lucario-Bg7ysgN9.jpg",uT="/vegetaquizshow/assets/fletchling-BpYOL6cV.jpg",cT="/vegetaquizshow/assets/flygon-m92uu1ci.jpg",fT="/vegetaquizshow/assets/stoutland-PE5ZhK-H.jpg",dT="/vegetaquizshow/assets/charizard-fdt7rzMN.jpg",hT="/vegetaquizshow/assets/sceptile-BHd02e9v.jpg",pT="/vegetaquizshow/assets/deoxys-DQxvufKR.jpg",mT="/vegetaquizshow/assets/bulbasaur-c44S7uX_.jpg",gT=[{id:1,name:"Vaporeon",image:iT},{id:2,name:"Garchomp",image:rT},{id:3,name:"Lopunny",image:oT},{id:4,name:"Psyduck",image:sT},{id:5,name:"Lucario",image:lT},{id:6,name:"fletchling",image:uT},{id:7,name:"Flygon",image:cT},{id:8,name:"Stoutland",image:fT},{id:9,name:"Charizard",image:dT},{id:10,name:"Sceptile",image:hT},{id:11,name:"Deoxys",image:pT},{id:12,name:"Bulbasaur",image:mT}];new URL("../../../assets/images/cardbg.png",import.meta.url).href;function vT(){const{players:n,guessedCards:i}=xr(),[o,s]=T.useState([]),u=Hi();T.useEffect(()=>{if(n.length===0){u("/");return}const p=[...gT.map(h=>({...h,guessed:i.includes(h.id)}))].sort(()=>.5-Math.random());s(p)},[u,n,i]);const f=d=>{d.guessed||u("/game/image/guess",{state:{selectedCard:d,totalCards:o.length}})};return y.jsxs(yT,{children:[y.jsxs(bT,{to:"/game",children:[y.jsx(br,{})," Torna ai giochi"]}),y.jsx(xT,{children:"Chi è quel Pokémon?"}),y.jsx(wT,{children:"Seleziona una carta misteriosa per iniziare la sfida"}),y.jsx(ST,{children:o.map(d=>y.jsx(jT,{onClick:()=>f(d),children:d.guessed?y.jsxs(zT,{children:[y.jsx("img",{src:d.image,alt:d.name}),y.jsx(RT,{children:d.name})]}):y.jsx("img",{src:aT,alt:""})},d.id))}),y.jsxs(ET,{children:[y.jsx(Av,{className:"ball1"}),y.jsx(Av,{className:"ball2"}),y.jsx(CT,{className:"ball3"}),y.jsx(AT,{className:"ball4"}),y.jsx(TT,{className:"ball5"})]})]})}const vs=Re`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,yT=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,bT=E(Pa)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`,xT=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
`,wT=E.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  z-index: 1;
`,ST=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1024px;
  margin: auto 0;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
  }
`,ET=E.div`
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
`,Fu=E.div`
  position: absolute;
  opacity: 0.15;
  filter: blur(2px);
  z-index: 0;

  &.ball1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
    animation: ${vs} 15s ease-in-out infinite;
  }

  &.ball2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: 10%;
    animation: ${vs} 20s ease-in-out infinite reverse;
  }

  &.ball3 {
    width: 250px;
    height: 250px;
    top: 30%;
    left: -100px;
    animation: ${vs} 17s ease-in-out infinite 5s;
  }

  &.ball4 {
    width: 280px;
    height: 280px;
    bottom: 10%;
    right: 5%;
    animation: ${vs} 22s ease-in-out infinite 3s;
  }

  &.ball5 {
    width: 150px;
    height: 150px;
    top: 20%;
    right: 15%;
    animation: ${vs} 18s ease-in-out infinite 8s;
  }
`,Av=E(Fu)`
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
`,CT=E(Fu)`
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
`,AT=E(Fu)`
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
`,TT=E(Fu)`
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
`,jT=E.div`
  /* perspective: 1000px; */
  width: 150px;
  cursor: ${n=>n.$guessed?"default":"pointer"};
  aspect-ratio: 2.5 / 3.5;
  transition: transform 0.3s, opacity 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid
    ${n=>n.$guessed?"rgba(255, 255, 255, 0.5)":"#ffde00"};

  &:hover {
    transform: ${n=>n.$guessed?"none":"scale(1.05)"};
  }

  img {
    width: ${n=>n.$guessed?"100%":"330%"};
    height: ${n=>n.$guessed?"100%":"auto"};
    object-fit: ${n=>n.$guessed?"cover":"contain"};
  }
`,zT=E.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%); /* Rendi l'immagine in bianco e nero */
    opacity: 0.8; /* Opacità ridotta */
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1); /* Leggera sfumatura scura */
    pointer-events: none;
  }
`,RT=E.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`,Jr=36,Tv=500,MT=5e3;function kT(){var Z,Dt;const n=Va(),i=Hi(),{players:o,updatePlayerScore:s,markCardAsGuessed:u}=xr(),[f,d]=T.useState(null),p=(Z=n.state)==null?void 0:Z.selectedCard;(Dt=n.state)!=null&&Dt.totalCards;const[h,m]=T.useState("active"),[v,b]=T.useState(!1),[x,S]=T.useState(Tv),[C,R]=T.useState(""),[k,A]=T.useState(!1),[D,M]=T.useState(!1),L=T.useRef(null),[B,W]=T.useState([]),[ot,dt]=T.useState([]),X=B.length/Jr*100,it=G=>{const Q=[...G];for(let rt=Q.length-1;rt>0;rt--){const vt=Math.floor(Math.random()*(rt+1));[Q[rt],Q[vt]]=[Q[vt],Q[rt]]}return Q};T.useEffect(()=>{const G=Array.from({length:Jr},(rt,vt)=>vt),Q=it(G);dt(Q)},[]),T.useEffect(()=>(h==="active"&&!v&&B.length<Jr&&ot.length>0&&(L.current=setTimeout(()=>{const G=ot[B.length];W(Q=>[...Q,G]),S(Q=>Math.max(Q-Tv/Jr,0))},MT)),()=>{L.current&&clearTimeout(L.current)}),[h,v,B.length,ot]),T.useEffect(()=>{if(!p){i("/game/image");return}},[p,i]),T.useEffect(()=>{if(o.length===0){i("/");return}},[o,i]);const J=()=>{b(!v)},Jt=()=>{if(!f){alert("Seleziona prima un giocatore!");return}const G=C.trim().toLowerCase(),Q=p.name.toLowerCase(),rt=G===Q;if(M(rt),A(!0),m("completed"),rt){const vt=f.score+Math.round(x);s(f.id,vt),d({...f,score:vt}),u(p.id);const O=Array.from({length:Jr},(nt,yt)=>yt);W(O)}},ge=()=>{i("/game/image")};return p?y.jsxs(NT,{children:[y.jsxs(LT,{to:"/game/image",children:[y.jsx(br,{})," Torna alla selezione"]}),y.jsx(_T,{children:"Chi è quel Pokémon?"}),y.jsx(VT,{children:"Seleziona un giocatore dalla lista prima di indovinare"}),y.jsxs(C7,{children:[y.jsxs(PT,{children:[y.jsxs(UT,{children:[y.jsx(HT,{children:"Punteggio:"}),y.jsx($T,{children:Math.round(x)})]}),y.jsx(qT,{children:h==="active"&&y.jsx(YT,{onClick:J,children:v?y.jsxs(y.Fragment,{children:[y.jsx(g0,{})," Riprendi"]}):y.jsxs(y.Fragment,{children:[y.jsx(jy,{})," Pausa"]})})})]}),y.jsxs(g7,{children:[y.jsx(v7,{children:y.jsxs(y7,{children:[y.jsx(b7,{$percentage:X}),y.jsxs(x7,{children:[Math.round(X),"%"]})]})}),y.jsxs(E7,{children:[y.jsx(GT,{src:p==null?void 0:p.image,alt:"Pokémon da indovinare"}),y.jsx(XT,{children:Array.from({length:Jr}).map((G,Q)=>y.jsx(KT,{$visible:!B.includes(Q)},Q))})]}),y.jsx(w7,{children:k?y.jsxs(A7,{$correct:D,children:[y.jsx(ZT,{children:D?y.jsx(qu,{}):y.jsx(co,{})}),y.jsx(WT,{children:D?"Corretto!":"Sbagliato!"}),y.jsx(JT,{children:D?`Hai guadagnato ${Math.round(x)} punti!`:`Era ${p.name}. Nessun punto guadagnato.`}),y.jsx(IT,{onClick:ge,children:"Nuova Sfida"})]}):y.jsxs(S7,{children:[y.jsx("h3",{children:"Chi è questo Pokémon?"}),y.jsx(QT,{type:"text",value:C,onChange:G=>R(G.target.value),placeholder:"Nome del Pokémon...",disabled:h==="completed"}),y.jsx(FT,{onClick:Jt,disabled:!C.trim()||h==="completed",children:"Indovina"})]})})]})]}),y.jsxs(t7,{children:[y.jsxs(e7,{children:[y.jsx(n7,{children:"Allenatori"}),y.jsx(a7,{children:f?"Ora indovina il Pokémon":"Scegli un allenatore per iniziare"})]}),y.jsx(i7,{children:o.map(G=>y.jsxs(r7,{$active:(f==null?void 0:f.id)===G.id,onClick:()=>d(G),children:[y.jsx(o7,{src:G.avatar,alt:G.name}),y.jsxs(s7,{children:[y.jsx(l7,{children:G.name}),y.jsxs(u7,{children:[y.jsx(f7,{})," ",G.score," punti"]})]}),(f==null?void 0:f.id)===G.id&&y.jsx(c7,{children:y.jsx(zy,{})})]},G.id))})]}),y.jsxs(d7,{children:[y.jsx(jv,{className:"ball1"}),y.jsx(jv,{className:"ball2"}),y.jsx(h7,{className:"ball3"}),y.jsx(p7,{className:"ball4"}),y.jsx(m7,{className:"ball5"})]})]}):null}const OT=Re`
  0% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 222, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0); }
`,DT=Re`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`,ys=Re`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,BT=Re`
  from { opacity: 0; }
  to { opacity: 1; }
`,NT=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,LT=E(Pa)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`,_T=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;

  text-align: center;
  z-index: 1;
`,VT=E.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  z-index: 1;
`,PT=E.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`,UT=E.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`,HT=E.span`
  font-size: 0.9rem;
  margin-right: 8px;
  color: white;
`,$T=E.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffde00;
`,qT=E.div`
  display: flex;
  gap: 10px;
`,YT=E.button`
  background: rgba(19, 42, 87, 0.8);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  border: 2px solid #ffde00;

  &:hover {
    background: #3b4cca;
  }

  &:active {
    transform: translateY(2px);
  }
`,GT=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: white;
`,XT=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`,KT=E.div`
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
`,QT=E.input`
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  outline: none;
  border: 2px solid rgba(59, 76, 202, 0.5);

  &:focus {
    border-color: #3b4cca;
  }
`,FT=E.button`
  padding: 12px 25px;
  background: #ee1515;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`,ZT=E.div`
  font-size: 3rem;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,WT=E.h2`
  font-size: 1.8rem;
  margin: 0;
`,JT=E.p`
  font-size: 1.2rem;
  opacity: 0.9;
`,IT=E.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: white;
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }
`,t7=E.div`
  width: 100%;
  max-width: 800px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  z-index: 1;

  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,e7=E.div`
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
`,n7=E.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,a7=E.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`,i7=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,r7=E.div`
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

  ${n=>n.$active&&yo`
      animation: ${OT} 2s infinite ease-in-out;
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
`,o7=E.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #132a57 0%, #233975 100%);
`,s7=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,l7=E.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,u7=E.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,c7=E.div`
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
  animation: ${DT} 2s infinite;
`,f7=E.div`
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
`,d7=E.div`
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
`,Zu=E.div`
  position: absolute;
  opacity: 0.15;
  filter: blur(2px);
  z-index: 0;

  &.ball1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -50px;
    animation: ${ys} 15s ease-in-out infinite;
  }

  &.ball2 {
    width: 200px;
    height: 200px;
    bottom: -50px;
    left: 10%;
    animation: ${ys} 20s ease-in-out infinite reverse;
  }

  &.ball3 {
    width: 250px;
    height: 250px;
    top: 30%;
    left: -100px;
    animation: ${ys} 17s ease-in-out infinite 5s;
  }

  &.ball4 {
    width: 280px;
    height: 280px;
    bottom: 10%;
    right: 5%;
    animation: ${ys} 22s ease-in-out infinite 3s;
  }

  &.ball5 {
    width: 150px;
    height: 150px;
    top: 20%;
    right: 15%;
    animation: ${ys} 18s ease-in-out infinite 8s;
  }
`,jv=E(Zu)`
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
`,h7=E(Zu)`
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
`,p7=E(Zu)`
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
`,m7=E(Zu)`
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
`,g7=E.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`,v7=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  position: absolute;
  left: 5vw;
  @media (max-width: 900px) {
    width: 100%;
    height: 40px;
    margin-bottom: 1rem;
  }
`,y7=E.div`
  width: 40px;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 900px) {
    width: 100%;
    height: 20px;
  }
`,b7=E.div`
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
`,x7=E.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.85rem;
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
  }
`,w7=E.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 250px; */
  width: 400px;
  position: absolute;
  right: 5vw;
  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
    margin-top: 1rem;
  }
`,S7=E.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(19, 42, 87, 0.7);
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid rgba(255, 222, 0, 0.5);

  h3 {
    color: #ffde00;
    margin: 0 0 0.5rem 0;
    text-align: center;
    text-shadow: 1px 1px 0 #3b4cca;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`,E7=E.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1.4;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`,C7=E.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`,A7=E.div`
  width: 100%;
  padding: 1.5rem;
  background: ${n=>n.$correct?"linear-gradient(135deg, rgba(120, 200, 80, 0.9), rgba(60, 130, 40, 0.9))":"linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(150, 30, 30, 0.9))"};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid ${n=>n.$correct?"#78C850":"#ee1515"};
  animation: ${BT} 0.5s ease;
`,Li=new URL("./assets/audio/abtn.mp3",import.meta.url).href,zv=[{id:1,name:"Pikachu",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,name:"Charizard",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{id:3,name:"Bulbasaur",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:4,name:"Jigglypuff",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"},{id:5,name:"Meowth",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"},{id:6,name:"Snorlax",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:7,name:"Eevee",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:8,name:"Gyarados",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"}];function T7(){const n=Hi(),i=Va(),{updatePlayerScore:o}=xr(),[s,u]=T.useState(null),[f,d]=T.useState(null),[p,h]=T.useState(!1),[m,v]=T.useState(""),[b,x]=T.useState(!1),[S,C]=T.useState(!1),[R,k]=T.useState(!1),A=T.useRef(null);T.useEffect(()=>{var W;(W=i.state)!=null&&W.player?u(i.state.player):n("/game/wheel")},[i,n]),T.useEffect(()=>{const W=Math.floor(Math.random()*zv.length);d(zv[W])},[]),T.useEffect(()=>{A.current&&(p?A.current.play():A.current.pause())},[p,f]);const D=()=>{h(!p)},M=()=>{if(!f||!m.trim())return;const W=m.trim().toLowerCase(),ot=f.name.toLowerCase(),dt=W===ot;if(C(dt),x(!0),h(!1),dt&&s){const X=s.score+500;o(s.id,X),u({...s,score:X})}},L=()=>{k(!0)},B=()=>{n("/game/wheel")};return y.jsxs(z7,{children:[y.jsxs(R7,{onClick:B,children:[y.jsx(br,{})," Torna alla ruota"]}),y.jsx(M7,{children:"Chi è questo Pokémon?"}),y.jsx(k7,{children:s?`${s.name}, ascolta e indovina il verso di quale Pokémon stai sentendo!`:"Ascolta e indovina!"}),y.jsx(O7,{children:y.jsx(D7,{children:f&&y.jsxs(y.Fragment,{children:[y.jsx("audio",{ref:A,src:f.audio,onEnded:()=>h(!1)}),y.jsxs(B7,{children:[y.jsxs(N7,{onClick:D,disabled:b,children:[p?y.jsx(jy,{}):y.jsx(g0,{}),p?" Pausa":" Ascolta"]}),y.jsxs(L7,{$playing:p&&!b,children:[y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"})]})]}),R?y.jsxs(q7,{children:[y.jsx(Y7,{src:f.image,alt:f.name}),y.jsx(G7,{children:f.name})]}):b?null:y.jsxs(_7,{children:[y.jsx(V7,{type:"text",value:m,onChange:W=>v(W.target.value),placeholder:"Nome del Pokémon...",disabled:b}),y.jsx(P7,{onClick:M,disabled:!m.trim()||b,children:"Indovina"})]}),b&&y.jsxs(U7,{$correct:S,children:[y.jsx(H7,{children:S?y.jsx(qu,{}):y.jsx(co,{})}),y.jsx($7,{children:S?"Corretto! Hai guadagnato 500 punti!":`Sbagliato! Era ${f.name}.`}),!R&&!S&&y.jsx(Rv,{$secondary:!0,onClick:L,children:"Mostra Pokémon"}),y.jsx(Rv,{onClick:B,children:"Torna alla Ruota"})]})]})})}),y.jsxs(X7,{children:[y.jsx(Q7,{className:"ball1"}),y.jsx(jd,{className:"note1"}),y.jsx(jd,{className:"note2"}),y.jsx(jd,{className:"note3"})]})]})}const j7=Re`
  0% { height: 5px; }
  50% { height: 30px; }
  100% { height: 5px; }
`,ob=Re`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,z7=E.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: #0a1428;
`,R7=E.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #ffde00;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: white;
  }
`,M7=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin: 2rem 0 1rem;
  text-align: center;
`,k7=E.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
`,O7=E.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`,D7=E.div`
  width: 100%;
  background: rgba(19, 42, 87, 0.8);
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);
`,B7=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0 2rem;
`,N7=E.button`
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
`,L7=E.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;

  .bar {
    width: 7px;
    height: 5px;
    background: #ffde00;
    border-radius: 3px;
    animation: ${j7} ${n=>n.$playing?"0.5s":"0s"}
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
`,_7=E.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
`,V7=E.input`
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
`,P7=E.button`
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
`,U7=E.div`
  width: 100%;
  background: ${n=>n.$correct?"linear-gradient(135deg, rgba(120, 200, 80, 0.9), rgba(60, 130, 40, 0.9))":"linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(150, 30, 30, 0.9))"};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${ob} 0.5s ease;
  border: 3px solid ${n=>n.$correct?"#78C850":"#ee1515"};
`,H7=E.div`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`,$7=E.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`,Rv=E.button`
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
`,q7=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  animation: ${ob} 0.7s ease;
`,Y7=E.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
`,G7=E.div`
  font-size: 1.5rem;
  color: #ffde00;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`,X7=E.div`
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
`,K7=Re`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;Re`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;const Q7=E.div`
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
    animation: ${K7} 20s linear infinite;
  }
`,jd=E.div`
  position: absolute;
`;function F7(){return y.jsx("div",{children:"Fusion"})}const Z7="/vegetaquizshow/assets/Canalipoli-DHnHYnqm.jpg",Mv=[{id:1,name:"Canalipoli",image:Z7,score:100,hints:[{type:"text",content:"Una città attraversata da numerosi canali",cost:30},{type:"text",content:"Si trova nella regione di Johto",cost:50},{type:"text",content:"È famosa per i suoi ponti e le gondole",cost:70},{type:"text",content:"Qui vivono i leggendari Latios e Latias",cost:90},{type:"sound",content:"/audio/altomare-theme.mp3",cost:100},{type:"text",content:"La città ospita un importante museo con un antico meccanismo di difesa",cost:120},{type:"text",content:"Ispirata alla città di Venezia nel mondo reale",cost:150}]}];function W7(){const n=Hi(),{players:i,updatePlayerScore:o}=xr(),[s,u]=T.useState(null),[f,d]=T.useState(null),[p,h]=T.useState([]),[m,v]=T.useState(""),[b,x]=T.useState(!1),[S,C]=T.useState(!1),[R,k]=T.useState(!0),[A,D]=T.useState(!1),M=T.useRef(null);T.useEffect(()=>{if(i.length===0){n("/");return}if(s&&!f){const it=Mv[Math.floor(Math.random()*Mv.length)];d(it),D(!0)}return()=>{M.current&&(M.current.pause(),M.current.src="")}},[i,n,s,f]);const L=it=>{u(it),k(!1)},B=it=>{if(!s||p.includes(it.content))return;if(s.score<it.cost){alert("Non hai abbastanza punti per questo indizio!");return}it.type==="sound"&&(M.current&&M.current.pause(),M.current=new Audio(it.content),M.current.volume=.6,M.current.play().catch(Jt=>console.error("Errore nel riprodurre l'audio:",Jt)));const J=s.score-it.cost;o(s.id,J),u({...s,score:J}),h([...p,it.content])},W=()=>{if(!f||!m.trim())return;const it=m.trim().toLowerCase(),J=f.name.toLowerCase(),Jt=it===J;if(C(Jt),x(!0),Jt&&s){const ge=s.score+f.score;o(s.id,ge),u({...s,score:ge})}M.current&&M.current.pause()},ot=()=>{M.current&&M.current.pause(),n("/game")},dt=()=>{k(!0),u(null),d(null),h([]),v(""),x(!1),C(!1),D(!1)},X=it=>p.includes(it);return y.jsxs(J7,{children:[y.jsxs(O9,{to:"/game",children:[y.jsx(br,{})," Torna ai giochi"]}),y.jsx(t9,{children:"Indovina la Città Pokémon"}),y.jsx(A9,{children:"Guarda l'immagine e indovina di quale città Pokémon si tratta"}),R?y.jsxs(T9,{children:[y.jsx(j9,{children:"Seleziona un Allenatore"}),y.jsx(z9,{children:i.map(it=>y.jsxs(R9,{onClick:()=>L(it),children:[y.jsx(M9,{src:it.avatar,alt:it.name}),y.jsxs(kv,{children:[y.jsx(Ov,{children:it.name}),y.jsxs(Dv,{children:[it.score," punti"]})]})]},it.id))})]}):A?y.jsxs(e9,{children:[y.jsx(n9,{children:y.jsxs(kv,{children:[y.jsx(Ov,{children:s.name}),y.jsxs(Dv,{children:[s.score," punti"]})]})}),b?y.jsxs(b9,{$correct:S,children:[y.jsx(x9,{children:S?y.jsx(qu,{}):y.jsx(co,{})}),y.jsx(w9,{children:S?"Corretto!":"Sbagliato!"}),y.jsx(S9,{children:S?`Era ${f.name}! Hai guadagnato 400 punti!`:`Era ${f.name}. Nessun punto guadagnato.`}),y.jsxs(k9,{children:[y.jsx(Bv,{onClick:dt,children:"Gioca ancora"}),y.jsx(Bv,{onClick:ot,children:"Torna ai giochi"})]})]}):y.jsxs("div",{className:"flex flex-col items-center",style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",width:"100%"},children:[y.jsxs("div",{className:"flex",style:{flex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:"1024px",gap:"1rem"},children:[y.jsx(a9,{children:y.jsx(i9,{src:f==null?void 0:f.image,alt:f==null?void 0:f.name})}),y.jsxs(r9,{children:[y.jsx(o9,{children:"Indizi Disponibili:"}),y.jsx(s9,{children:f.hints.map((it,J)=>y.jsxs(l9,{$used:X(it.content),children:[y.jsx(u9,{children:it.type==="text"?y.jsx(Jw,{}):y.jsx(Pd,{})}),y.jsxs(c9,{children:[X(it.content)?y.jsx(f9,{children:it.type==="text"?it.content:y.jsxs(m9,{onClick:()=>{M.current&&M.current.play()},children:["Riproduci tema musicale ",y.jsx(Pd,{})]})}):y.jsx(d9,{children:it.type==="text"?"Indizio testuale":"Tema musicale della città"}),y.jsx(h9,{children:X(it.content)?"Già sbloccato":y.jsxs(p9,{onClick:()=>B(it),disabled:s.score<it.cost,children:["Sblocca (",it.cost," punti)"]})})]})]},J))})]})]}),y.jsxs(g9,{children:[y.jsx(v9,{type:"text",value:m,onChange:it=>v(it.target.value),placeholder:"Nome della città..."}),y.jsx(y9,{onClick:W,disabled:!m.trim(),children:"Indovina"})]})]})]}):y.jsx(I7,{children:"Caricamento..."}),y.jsxs(E9,{children:[y.jsx(Nv,{className:"ball1"}),y.jsx(Nv,{className:"ball2"})]})]})}const J7=E.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  background-color: #0a1428;
  color: white;
`,I7=E.div`
  font-size: 1.5rem;
  color: white;
  margin-top: 3rem;
`,t9=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
`,e9=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* max-width: 800px; */
  padding: 1rem;
  z-index: 1;
  gap: 1.5rem;
  flex: 1;
`,n9=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin-bottom: 1rem;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);
`,kv=E.div`
  display: flex;
  flex-direction: column;
`,Ov=E.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffde00;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`,Dv=E.div`
  font-size: 0.9rem;
  color: white;
`,a9=E.div`
  border-radius: 10px;
  aspect-ratio: 1;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid #ffde00;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`,i9=E.img`
  width: 100%;
  height: auto;
  display: block;
`,r9=E.div`
  flex: 1;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1rem;
  border: 2px solid rgba(255, 222, 0, 0.5);
  overflow: auto;
  position: absolute;
  right: 5vw;
`,o9=E.h3`
  color: #ffde00;
  margin: 0 0 1rem 0;
  text-shadow: 1px 1px 0 #3b4cca;
`,s9=E.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,l9=E.div`
  display: flex;
  background: ${n=>n.$used?"rgba(59, 76, 202, 0.3)":"rgba(0, 0, 0, 0.3)"};
  border-radius: 8px;
  padding: 0.8rem;
  border: 1px solid ${n=>n.$used?"#3b4cca":"transparent"};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`,u9=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 222, 0, 0.2);
  border-radius: 50%;
  margin-right: 1rem;
  color: #ffde00;
  font-size: 1.2rem;
`,c9=E.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,f9=E.div`
  color: white;
`,d9=E.div`
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`,h9=E.div`
  margin-top: 0.2rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`,p9=E.button`
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 4px 10px;
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
`,m9=E.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(59, 76, 202, 0.6);
  color: white;
  border: none;
  border-radius: 15px;
  padding: 6px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 76, 202, 0.8);
    transform: translateY(-1px);
  }

  svg {
    margin-left: 5px;
  }
`,g9=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`,v9=E.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: 2px solid #ffde00;
  }
`,y9=E.button`
  width: 100%;
  padding: 12px 20px;
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &:hover:not(:disabled) {
    background: #d10000;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`,b9=E.div`
  width: 100%;
  background: ${n=>n.$correct?"rgba(76, 175, 80, 0.9)":"rgba(244, 67, 54, 0.9)"};
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`,x9=E.div`
  font-size: 3rem;
  color: white;
`,w9=E.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
`,S9=E.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`,Bv=E.button`
  background: #ffde00;
  color: #3b4cca;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`,E9=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`,C9=Re`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Nv=E.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    #ee1515 0%,
    #ee1515 50%,
    white 50%,
    white 100%
  );
  opacity: 0.05;
  z-index: -1;
  animation: ${C9} 60s linear infinite;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
    background: white;
    border-radius: 50%;
    border: 30px solid #222;
  }

  &.ball1 {
    top: 10%;
    left: 10%;
  }

  &.ball2 {
    bottom: 10%;
    right: 10%;
  }
`,A9=E.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  z-index: 1;
  max-width: 600px;
`,T9=E.section`
  width: 100%;
  max-width: 1024px;
  z-index: 1;
  margin: auto;
`,j9=E.h2`
  color: #ffde00;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 2px 2px 0 #3b4cca;
`,z9=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`,R9=E.div`
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid rgba(255, 222, 0, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(59, 76, 202, 0.4);
    border-color: #ffde00;
  }
`,M9=E.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #ffde00;
  background-color: white;
  object-fit: cover;
`,k9=E.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`,O9=E(Pa)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(19, 42, 87, 0.8);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  border: 2px solid #ffde00;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: #3b4cca;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`,D9=new URL("/vegetaquizshow/assets/Pokemon%20Mystery%20Dungeon%20Red_Blue%20Rescue%20Team%20Full%20OST%20_6EHwdMQj3i4_00_00_00_00_05_00_part_-CfduThOI.mp3",import.meta.url).href,B9=new URL("/vegetaquizshow/assets/welcome-pokemon-Boc2-QOp.mp3",import.meta.url).href,N9=new URL("/vegetaquizshow/assets/Contest-BlCSr_73.mp3",import.meta.url).href,L9=new URL("/vegetaquizshow/assets/image_guess-Cyt9QryZ.mp3",import.meta.url).href,_9=new URL("/vegetaquizshow/assets/abtn-DX_bwNuP.mp3",import.meta.url).href,bs={"/":B9,"/game":D9,"/game/image":N9,"/game/image/guess":L9},V9=T.createContext({isPlaying:!1,volume:.5,toggleAudio:()=>{},changeVolume:n=>{},currentAudioPath:""}),P9=()=>{const{pathname:n}=Va(),[i]=T.useState(new Audio),[o,s]=T.useState(!1),[u,f]=T.useState(.5),[d,p]=T.useState(!1),[h,m]=T.useState(""),v=T.useRef(null),[b,x]=T.useState(!0),S=T.useRef(new Audio(_9));T.useEffect(()=>{S.current.volume=.2;const L=localStorage.getItem("pokemonQuizClickSoundEnabled");L!==null&&x(L==="true")},[]);const C=()=>{const L=!b;x(L),localStorage.setItem("pokemonQuizClickSoundEnabled",String(L))},R=()=>{if(b){const L=S.current.cloneNode();L.volume=.1,L.play().catch(B=>console.log("Click sound error:",B))}};T.useEffect(()=>{const L=()=>R();return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[b]);const k=()=>{o?(i.pause(),s(!1),localStorage.setItem("pokemonQuizAudioEnabled","false")):(i.volume=u,i.loop=!0,i.play().then(()=>{s(!0),localStorage.setItem("pokemonQuizAudioEnabled","true")}).catch(L=>console.log("Audio playback error:",L)))},A=L=>{const B=parseFloat(L.toFixed(2));f(B),i.volume=B,localStorage.setItem("pokemonQuizAudioVolume",B.toString())},D=L=>{if(bs[L])return bs[L];for(const B in bs)if(L.startsWith(B)&&B!=="/")return bs[B];return bs["/"]};T.useEffect(()=>{const L=localStorage.getItem("pokemonQuizAudioEnabled")==="true",B=localStorage.getItem("pokemonQuizAudioVolume");if(B){const W=parseFloat(B);f(W),i.volume=W}else i.volume=u;L&&s(!0)},[i]),T.useEffect(()=>{const L=D(n);if(L!==h){const B=!i.paused;i.currentTime,i.src=L,m(L),B&&o&&i.play().catch(W=>console.log("Audio playback error:",W))}else o&&i.paused&&i.play().catch(B=>console.log("Audio playback error:",B))},[n,i,o,h]),T.useEffect(()=>{const L=B=>{v.current&&!v.current.contains(B.target)&&p(!1)};return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[]);const M=()=>u===0||!o?y.jsx(n4,{}):u<.5?y.jsx(e4,{}):y.jsx(Pd,{});return y.jsx(V9.Provider,{value:{isPlaying:o,volume:u,toggleAudio:k,changeVolume:A,currentAudioPath:h},children:y.jsxs(H9,{ref:v,children:[y.jsxs("div",{className:"container",children:[y.jsx($9,{onClick:k,onMouseEnter:()=>p(!0),title:o?"Disattiva musica":"Attiva musica",children:M()}),y.jsx(q9,{$visible:d,children:y.jsx(Y9,{type:"range",min:"0",max:"0.3",step:"0.01",value:u,onChange:L=>A(parseFloat(L.target.value))})})]}),y.jsx(G9,{onClick:C,$active:b,title:b?"Disattiva suono click":"Attiva suono click",children:y.jsx(Iw,{})})]})})},U9=()=>y.jsxs(M3,{basename:"/vegetaquizshow",children:[y.jsx(P9,{}),y.jsxs(s3,{children:[y.jsx(Oa,{path:"/",element:y.jsx(r4,{})}),y.jsx(Oa,{path:"/game",element:y.jsx($4,{})}),y.jsx(Oa,{path:"/game/categories",element:y.jsx(qC,{})}),y.jsx(Oa,{path:"/game/wheel",element:y.jsx(BA,{})}),y.jsx(Oa,{path:"/game/wheel/fusion",element:y.jsx(F7,{})}),y.jsx(Oa,{path:"/game/wheel/sound",element:y.jsx(T7,{})}),y.jsx(Oa,{path:"/game/image",element:y.jsx(vT,{})}),y.jsx(Oa,{path:"/game/image/guess",element:y.jsx(kT,{})}),y.jsx(Oa,{path:"/game/city",element:y.jsx(W7,{})})]})]}),H9=E.div`
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
`,$9=E.button`
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
`,q9=E.div`
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
`,Y9=E.input`
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
`,G9=E.button`
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
`;v5.createRoot(document.getElementById("root")).render(y.jsx(T.StrictMode,{children:y.jsx(i4,{children:y.jsx(U9,{})})}));
