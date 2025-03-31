(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function nx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ff={exports:{}},ds={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function ax(){if(fg)return ds;fg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var p in u)p!=="key"&&(f[p]=u[p])}else f=u;return u=f.ref,{$$typeof:n,type:s,key:d,ref:u!==void 0?u:null,props:f}}return ds.Fragment=i,ds.jsx=o,ds.jsxs=o,ds}var dg;function ix(){return dg||(dg=1,Ff.exports=ax()),Ff.exports}var y=ix(),Zf={exports:{}},Gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function rx(){if(hg)return Gt;hg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=b&&k[b]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,z={};function M(k,nt,vt){this.props=k,this.context=nt,this.refs=z,this.updater=vt||S}M.prototype.isReactComponent={},M.prototype.setState=function(k,nt){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,nt,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function A(){}A.prototype=M.prototype;function D(k,nt,vt){this.props=k,this.context=nt,this.refs=z,this.updater=vt||S}var O=D.prototype=new A;O.constructor=D,C(O,M.prototype),O.isPureReactComponent=!0;var L=Array.isArray,B={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function st(k,nt,vt,wt,pt,ft){return vt=ft.ref,{$$typeof:n,type:k,key:nt,ref:vt!==void 0?vt:null,props:ft}}function dt(k,nt){return st(k.type,nt,void 0,void 0,void 0,k.props)}function Q(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function yt(k){var nt={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(vt){return nt[vt]})}var et=/\/+/g;function ue(k,nt){return typeof k=="object"&&k!==null&&k.key!=null?yt(""+k.key):nt.toString(36)}function Se(){}function Z(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(Se,Se):(k.status="pending",k.then(function(nt){k.status==="pending"&&(k.status="fulfilled",k.value=nt)},function(nt){k.status==="pending"&&(k.status="rejected",k.reason=nt)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function Dt(k,nt,vt,wt,pt){var ft=typeof k;(ft==="undefined"||ft==="boolean")&&(k=null);var ot=!1;if(k===null)ot=!0;else switch(ft){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(k.$$typeof){case n:case i:ot=!0;break;case v:return ot=k._init,Dt(ot(k._payload),nt,vt,wt,pt)}}if(ot)return pt=pt(k),ot=wt===""?"."+ue(k,0):wt,L(pt)?(vt="",ot!=null&&(vt=ot.replace(et,"$&/")+"/"),Dt(pt,nt,vt,"",function(H){return H})):pt!=null&&(Q(pt)&&(pt=dt(pt,vt+(pt.key==null||k&&k.key===pt.key?"":(""+pt.key).replace(et,"$&/")+"/")+ot)),nt.push(pt)),1;ot=0;var Tt=wt===""?".":wt+":";if(L(k))for(var St=0;St<k.length;St++)wt=k[St],ft=Tt+ue(wt,St),ot+=Dt(wt,nt,vt,ft,pt);else if(St=x(k),typeof St=="function")for(k=St.call(k),St=0;!(wt=k.next()).done;)wt=wt.value,ft=Tt+ue(wt,St++),ot+=Dt(wt,nt,vt,ft,pt);else if(ft==="object"){if(typeof k.then=="function")return Dt(Z(k),nt,vt,wt,pt);throw nt=String(k),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ot}function G(k,nt,vt){if(k==null)return k;var wt=[],pt=0;return Dt(k,wt,"","",function(ft){return nt.call(vt,ft,pt++)}),wt}function K(k){if(k._status===-1){var nt=k._result;nt=nt(),nt.then(function(vt){(k._status===0||k._status===-1)&&(k._status=1,k._result=vt)},function(vt){(k._status===0||k._status===-1)&&(k._status=2,k._result=vt)}),k._status===-1&&(k._status=0,k._result=nt)}if(k._status===1)return k._result.default;throw k._result}var it=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function gt(){}return Gt.Children={map:G,forEach:function(k,nt,vt){G(k,function(){nt.apply(this,arguments)},vt)},count:function(k){var nt=0;return G(k,function(){nt++}),nt},toArray:function(k){return G(k,function(nt){return nt})||[]},only:function(k){if(!Q(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Gt.Component=M,Gt.Fragment=o,Gt.Profiler=u,Gt.PureComponent=D,Gt.StrictMode=s,Gt.Suspense=h,Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Gt.act=function(){throw Error("act(...) is not supported in production builds of React.")},Gt.cache=function(k){return function(){return k.apply(null,arguments)}},Gt.cloneElement=function(k,nt,vt){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var wt=C({},k.props),pt=k.key,ft=void 0;if(nt!=null)for(ot in nt.ref!==void 0&&(ft=void 0),nt.key!==void 0&&(pt=""+nt.key),nt)!W.call(nt,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&nt.ref===void 0||(wt[ot]=nt[ot]);var ot=arguments.length-2;if(ot===1)wt.children=vt;else if(1<ot){for(var Tt=Array(ot),St=0;St<ot;St++)Tt[St]=arguments[St+2];wt.children=Tt}return st(k.type,pt,void 0,void 0,ft,wt)},Gt.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:f,_context:k},k},Gt.createElement=function(k,nt,vt){var wt,pt={},ft=null;if(nt!=null)for(wt in nt.key!==void 0&&(ft=""+nt.key),nt)W.call(nt,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(pt[wt]=nt[wt]);var ot=arguments.length-2;if(ot===1)pt.children=vt;else if(1<ot){for(var Tt=Array(ot),St=0;St<ot;St++)Tt[St]=arguments[St+2];pt.children=Tt}if(k&&k.defaultProps)for(wt in ot=k.defaultProps,ot)pt[wt]===void 0&&(pt[wt]=ot[wt]);return st(k,ft,void 0,void 0,null,pt)},Gt.createRef=function(){return{current:null}},Gt.forwardRef=function(k){return{$$typeof:p,render:k}},Gt.isValidElement=Q,Gt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:K}},Gt.memo=function(k,nt){return{$$typeof:m,type:k,compare:nt===void 0?null:nt}},Gt.startTransition=function(k){var nt=B.T,vt={};B.T=vt;try{var wt=k(),pt=B.S;pt!==null&&pt(vt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(gt,it)}catch(ft){it(ft)}finally{B.T=nt}},Gt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Gt.use=function(k){return B.H.use(k)},Gt.useActionState=function(k,nt,vt){return B.H.useActionState(k,nt,vt)},Gt.useCallback=function(k,nt){return B.H.useCallback(k,nt)},Gt.useContext=function(k){return B.H.useContext(k)},Gt.useDebugValue=function(){},Gt.useDeferredValue=function(k,nt){return B.H.useDeferredValue(k,nt)},Gt.useEffect=function(k,nt){return B.H.useEffect(k,nt)},Gt.useId=function(){return B.H.useId()},Gt.useImperativeHandle=function(k,nt,vt){return B.H.useImperativeHandle(k,nt,vt)},Gt.useInsertionEffect=function(k,nt){return B.H.useInsertionEffect(k,nt)},Gt.useLayoutEffect=function(k,nt){return B.H.useLayoutEffect(k,nt)},Gt.useMemo=function(k,nt){return B.H.useMemo(k,nt)},Gt.useOptimistic=function(k,nt){return B.H.useOptimistic(k,nt)},Gt.useReducer=function(k,nt,vt){return B.H.useReducer(k,nt,vt)},Gt.useRef=function(k){return B.H.useRef(k)},Gt.useState=function(k){return B.H.useState(k)},Gt.useSyncExternalStore=function(k,nt,vt){return B.H.useSyncExternalStore(k,nt,vt)},Gt.useTransition=function(){return B.H.useTransition()},Gt.version="19.0.0",Gt}var pg;function Bu(){return pg||(pg=1,Zf.exports=rx()),Zf.exports}var T=Bu();const ha=nx(T);var Wf={exports:{}},hs={},Jf={exports:{}},If={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function ox(){return mg||(mg=1,function(n){function i(G,K){var it=G.length;G.push(K);t:for(;0<it;){var gt=it-1>>>1,k=G[gt];if(0<u(k,K))G[gt]=K,G[it]=k,it=gt;else break t}}function o(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var K=G[0],it=G.pop();if(it!==K){G[0]=it;t:for(var gt=0,k=G.length,nt=k>>>1;gt<nt;){var vt=2*(gt+1)-1,wt=G[vt],pt=vt+1,ft=G[pt];if(0>u(wt,it))pt<k&&0>u(ft,wt)?(G[gt]=ft,G[pt]=it,gt=pt):(G[gt]=wt,G[vt]=it,gt=vt);else if(pt<k&&0>u(ft,it))G[gt]=ft,G[pt]=it,gt=pt;else break t}}return K}function u(G,K){var it=G.sortIndex-K.sortIndex;return it!==0?it:G.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var h=[],m=[],v=1,b=null,x=3,S=!1,C=!1,z=!1,M=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(G){for(var K=o(m);K!==null;){if(K.callback===null)s(m);else if(K.startTime<=G)s(m),K.sortIndex=K.expirationTime,i(h,K);else break;K=o(m)}}function L(G){if(z=!1,O(G),!C)if(o(h)!==null)C=!0,Z();else{var K=o(m);K!==null&&Dt(L,K.startTime-G)}}var B=!1,W=-1,st=5,dt=-1;function Q(){return!(n.unstable_now()-dt<st)}function yt(){if(B){var G=n.unstable_now();dt=G;var K=!0;try{t:{C=!1,z&&(z=!1,A(W),W=-1),S=!0;var it=x;try{e:{for(O(G),b=o(h);b!==null&&!(b.expirationTime>G&&Q());){var gt=b.callback;if(typeof gt=="function"){b.callback=null,x=b.priorityLevel;var k=gt(b.expirationTime<=G);if(G=n.unstable_now(),typeof k=="function"){b.callback=k,O(G),K=!0;break e}b===o(h)&&s(h),O(G)}else s(h);b=o(h)}if(b!==null)K=!0;else{var nt=o(m);nt!==null&&Dt(L,nt.startTime-G),K=!1}}break t}finally{b=null,x=it,S=!1}K=void 0}}finally{K?et():B=!1}}}var et;if(typeof D=="function")et=function(){D(yt)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Se=ue.port2;ue.port1.onmessage=yt,et=function(){Se.postMessage(null)}}else et=function(){M(yt,0)};function Z(){B||(B=!0,et())}function Dt(G,K){W=M(function(){G(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){C||S||(C=!0,Z())},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):st=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(G){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var it=x;x=K;try{return G()}finally{x=it}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,K){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var it=x;x=G;try{return K()}finally{x=it}},n.unstable_scheduleCallback=function(G,K,it){var gt=n.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?gt+it:gt):it=gt,G){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=it+k,G={id:v++,callback:K,priorityLevel:G,startTime:it,expirationTime:k,sortIndex:-1},it>gt?(G.sortIndex=it,i(m,G),o(h)===null&&G===o(m)&&(z?(A(W),W=-1):z=!0,Dt(L,it-gt))):(G.sortIndex=k,i(h,G),C||S||(C=!0,Z())),G},n.unstable_shouldYield=Q,n.unstable_wrapCallback=function(G){var K=x;return function(){var it=x;x=K;try{return G.apply(this,arguments)}finally{x=it}}}}(If)),If}var gg;function sx(){return gg||(gg=1,Jf.exports=ox()),Jf.exports}var td={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function lx(){if(vg)return jn;vg=1;var n=Bu();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(h,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:m,implementation:v}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(h,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return f(h,m,null,v)},jn.flushSync=function(h){var m=d.T,v=s.p;try{if(d.T=null,s.p=2,h)return h()}finally{d.T=m,s.p=v,s.d.f()}},jn.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(h,m))},jn.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},jn.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:S}):v==="script"&&s.d.X(h,{crossOrigin:b,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},jn.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);s.d.M(h,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(h)},jn.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin);s.d.L(h,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},jn.preloadModule=function(h,m){if(typeof h=="string")if(m){var v=p(m.as,m.crossOrigin);s.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(h)},jn.requestFormReset=function(h){s.d.r(h)},jn.unstable_batchedUpdates=function(h,m){return h(m)},jn.useFormState=function(h,m,v){return d.H.useFormState(h,m,v)},jn.useFormStatus=function(){return d.H.useHostTransitionStatus()},jn.version="19.0.0",jn}var yg;function ux(){if(yg)return td.exports;yg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),td.exports=lx(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function cx(){if(bg)return hs;bg=1;var n=sx(),i=Bu(),o=ux();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),S=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case h:return"Fragment";case p:return"Portal";case v:return"Profiler";case m:return"StrictMode";case z:return"Suspense";case M:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S:return(t.displayName||"Context")+".Provider";case x:return(t._context.displayName||"Context")+".Consumer";case C:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case A:return e=t.displayName||null,e!==null?e:dt(t.type)||"Memo";case D:e=t._payload,t=t._init;try{return dt(t(e))}catch{}}return null}var Q=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt=Object.assign,et,ue;function Se(t){if(et===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);et=e&&e[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+ue}var Z=!1;function Dt(t,e){if(!t||Z)return"";Z=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var lt=function(){throw Error()};if(Object.defineProperty(lt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(lt,[])}catch(J){var Y=J}Reflect.construct(t,[],lt)}else{try{lt.call()}catch(J){Y=J}t.call(lt.prototype)}}else{try{throw Error()}catch(J){Y=J}(lt=t())&&typeof lt.catch=="function"&&lt.catch(function(){})}}catch(J){if(J&&Y&&typeof J.stack=="string")return[J.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],w=c[1];if(g&&w){var R=g.split(`
`),V=w.split(`
`);for(l=r=0;r<R.length&&!R[r].includes("DetermineComponentFrameRoot");)r++;for(;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;if(r===R.length||l===V.length)for(r=R.length-1,l=V.length-1;1<=r&&0<=l&&R[r]!==V[l];)l--;for(;1<=r&&0<=l;r--,l--)if(R[r]!==V[l]){if(r!==1||l!==1)do if(r--,l--,0>l||R[r]!==V[l]){var tt=`
`+R[r].replace(" at new "," at ");return t.displayName&&tt.includes("<anonymous>")&&(tt=tt.replace("<anonymous>",t.displayName)),tt}while(1<=r&&0<=l);break}}}finally{Z=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Se(a):""}function G(t){switch(t.tag){case 26:case 27:case 5:return Se(t.type);case 16:return Se("Lazy");case 13:return Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return t=Dt(t.type,!1),t;case 11:return t=Dt(t.type.render,!1),t;case 1:return t=Dt(t.type,!0),t;default:return""}}function K(t){try{var e="";do e+=G(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function it(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function gt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function k(t){if(it(t)!==t)throw Error(s(188))}function nt(t){var e=t.alternate;if(!e){if(e=it(t),e===null)throw Error(s(188));return e!==t?null:t}for(var a=t,r=e;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return k(l),t;if(c===r)return k(l),e;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var g=!1,w=l.child;w;){if(w===a){g=!0,a=l,r=c;break}if(w===r){g=!0,r=l,a=c;break}w=w.sibling}if(!g){for(w=c.child;w;){if(w===a){g=!0,a=c,r=l;break}if(w===r){g=!0,r=c,a=l;break}w=w.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:e}function vt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=vt(t),e!==null)return e;t=t.sibling}return null}var wt=Array.isArray,pt=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},ot=[],Tt=-1;function St(t){return{current:t}}function H(t){0>Tt||(t.current=ot[Tt],ot[Tt]=null,Tt--)}function Nt(t,e){Tt++,ot[Tt]=t.current,t.current=e}var bt=St(null),Jt=St(null),$t=St(null),ce=St(null);function Oe(t,e){switch(Nt($t,e),Nt(Jt,t),Nt(bt,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?Um(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=Um(t),e=$m(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(bt),Nt(bt,e)}function Vt(){H(bt),H(Jt),H($t)}function Mt(t){t.memoizedState!==null&&Nt(ce,t);var e=bt.current,a=$m(e,t.type);e!==a&&(Nt(Jt,t),Nt(bt,a))}function Pt(t){Jt.current===t&&(H(bt),H(Jt)),ce.current===t&&(H(ce),ss._currentValue=ft)}var ve=Object.prototype.hasOwnProperty,$e=n.unstable_scheduleCallback,ye=n.unstable_cancelCallback,te=n.unstable_shouldYield,De=n.unstable_requestPaint,Yt=n.unstable_now,Je=n.unstable_getCurrentPriorityLevel,vn=n.unstable_ImmediatePriority,ae=n.unstable_UserBlockingPriority,Ht=n.unstable_NormalPriority,j=n.unstable_LowPriority,_=n.unstable_IdlePriority,I=n.log,ut=n.unstable_setDisableYieldValue,ht=null,rt=null;function ct(t){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ht,t,void 0,(t.current.flags&128)===128)}catch{}}function jt(t){if(typeof I=="function"&&ut(t),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(ht,t)}catch{}}var Ct=Math.clz32?Math.clz32:de,Rt=Math.log,Et=Math.LN2;function de(t){return t>>>=0,t===0?32:31-(Rt(t)/Et|0)|0}var oe=128,we=4194304;function He(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ie(t,e){var a=t.pendingLanes;if(a===0)return 0;var r=0,l=t.suspendedLanes,c=t.pingedLanes,g=t.warmLanes;t=t.finishedLanes!==0;var w=a&134217727;return w!==0?(a=w&~l,a!==0?r=He(a):(c&=w,c!==0?r=He(c):t||(g=w&~g,g!==0&&(r=He(g))))):(w=a&~l,w!==0?r=He(w):c!==0?r=He(c):t||(g=a&~g,g!==0&&(r=He(g)))),r===0?0:e!==0&&e!==r&&(e&l)===0&&(l=r&-r,g=e&-e,l>=g||l===32&&(g&4194176)!==0)?e:r}function be(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function qe(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var t=oe;return oe<<=1,(oe&4194176)===0&&(oe=128),t}function Zn(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function tn(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function yn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $(t,e,a,r,l,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,R=t.expirationTimes,V=t.hiddenUpdates;for(a=g&~a;0<a;){var tt=31-Ct(a),lt=1<<tt;w[tt]=0,R[tt]=-1;var Y=V[tt];if(Y!==null)for(V[tt]=null,tt=0;tt<Y.length;tt++){var J=Y[tt];J!==null&&(J.lane&=-536870913)}a&=~lt}r!==0&&F(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function F(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Ct(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194218}function U(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-Ct(a),l=1<<r;l&e|t[r]&e&&(t[r]|=e),a&=~l}}function X(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function mt(){var t=pt.p;return t!==0?t:(t=window.event,t===void 0?32:rg(t.type))}function zt(t,e){var a=pt.p;try{return pt.p=t,e()}finally{pt.p=a}}var xt=Math.random().toString(36).slice(2),kt="__reactFiber$"+xt,Ut="__reactProps$"+xt,Xt="__reactContainer$"+xt,fe="__reactEvents$"+xt,Ge="__reactListeners$"+xt,en="__reactHandles$"+xt,Be="__reactResources$"+xt,ee="__reactMarker$"+xt;function Zt(t){delete t[kt],delete t[Ut],delete t[fe],delete t[Ge],delete t[en]}function he(t){var e=t[kt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Xt]||a[kt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Ym(t);t!==null;){if(a=t[kt])return a;t=Ym(t)}return e}t=a,a=t.parentNode}return null}function ge(t){if(t=t[kt]||t[Xt]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Kt(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ne(t){var e=t[Be];return e||(e=t[Be]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Qt(t){t[ee]=!0}var Xe=new Set,Wn={};function Cn(t,e){dn(t,e),dn(t+"Capture",e)}function dn(t,e){for(Wn[t]=e,t=0;t<e.length;t++)Xe.add(e[t])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ma=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ea={},ci={};function Sr(t){return ve.call(ci,t)?!0:ve.call(Ea,t)?!1:ma.test(t)?ci[t]=!0:(Ea[t]=!0,!1)}function fi(t,e,a){if(Sr(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Pa(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Le(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}function ie(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bn(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vn(t){var e=bn(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pn(t){t._valueTracker||(t._valueTracker=Vn(t))}function di(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=bn(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function Jn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function Me(t){return t.replace(In,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Dn(t,e,a,r,l,c,g,w){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ie(e)):t.value!==""+ie(e)&&(t.value=""+ie(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?ta(t,g,ie(e)):a!=null?ta(t,g,ie(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+ie(w):t.removeAttribute("name")}function hi(t,e,a,r,l,c,g,w){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+ie(a):"",e=e!=null?""+ie(e):a,w||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=w?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function ta(t,e,a){e==="number"&&Jn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Un(t,e,a,r){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ie(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Bn(t,e,a){if(e!=null&&(e=""+ie(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ie(a):""}function $n(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=ie(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function An(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Ca=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function se(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||Ca.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Hn(t,e,a){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var l in e)r=e[l],e.hasOwnProperty(l)&&a[l]!==r&&se(t,l,r)}else for(var c in e)e.hasOwnProperty(c)&&se(t,c,e[c])}function qi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(t){return Ua.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Yi=null;function Gi(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ta=null,ja=null;function Er(t){var e=ge(t);if(e&&(t=e.stateNode)){var a=t[Ut]||null;t:switch(t=e.stateNode,e.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var l=r[Ut]||null;if(!l)throw Error(s(90));Dn(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&di(r)}break t;case"textarea":Bn(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Un(t,!!a.multiple,e,!1)}}}var Wu=!1;function W0(t,e,a){if(Wu)return t(e,a);Wu=!0;try{var r=t(e);return r}finally{if(Wu=!1,(Ta!==null||ja!==null)&&(_l(),Ta&&(e=Ta,t=ja,ja=Ta=null,Er(e),t)))for(e=0;e<t.length;e++)Er(t[e])}}function wo(t,e){var a=t.stateNode;if(a===null)return null;var r=a[Ut]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,e,typeof a));return a}var Ju=!1;if(Ke)try{var So={};Object.defineProperty(So,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Ju=!1}var mi=null,Iu=null,el=null;function J0(){if(el)return el;var t,e=Iu,a=e.length,r,l="value"in mi?mi.value:mi.textContent,c=l.length;for(t=0;t<a&&e[t]===l[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===l[c-r];r++);return el=l.slice(t,1<r?1-r:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function I0(){return!1}function Nn(t){function e(a,r,l,c,g){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(c):c[w]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?al:I0,this.isPropagationStopped=I0,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Nn(Xi),Eo=yt({},Xi,{view:0,detail:0}),nb=Nn(Eo),tc,ec,Co,rl=yt({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(tc=t.screenX-Co.screenX,ec=t.screenY-Co.screenY):ec=tc=0,Co=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),th=Nn(rl),ab=yt({},rl,{dataTransfer:0}),ib=Nn(ab),rb=yt({},Eo,{relatedTarget:0}),nc=Nn(rb),ob=yt({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),sb=Nn(ob),lb=yt({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ub=Nn(lb),cb=yt({},Xi,{data:0}),eh=Nn(cb),fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},db={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hb[t])?!!e[t]:!1}function ac(){return pb}var mb=yt({},Eo,{key:function(t){if(t.key){var e=fb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?db[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gb=Nn(mb),vb=yt({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=Nn(vb),yb=yt({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),bb=Nn(yb),xb=yt({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),wb=Nn(xb),Sb=yt({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Eb=Nn(Sb),Cb=yt({},Xi,{newState:0,oldState:0}),Ab=Nn(Cb),Tb=[9,13,27,32],ic=Ke&&"CompositionEvent"in window,Ao=null;Ke&&"documentMode"in document&&(Ao=document.documentMode);var jb=Ke&&"TextEvent"in window&&!Ao,ah=Ke&&(!ic||Ao&&8<Ao&&11>=Ao),ih=" ",rh=!1;function oh(t,e){switch(t){case"keyup":return Tb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function Rb(t,e){switch(t){case"compositionend":return sh(e);case"keypress":return e.which!==32?null:(rh=!0,ih);case"textInput":return t=e.data,t===ih&&rh?null:t;default:return null}}function zb(t,e){if(Cr)return t==="compositionend"||!ic&&oh(t,e)?(t=J0(),el=Iu=mi=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ah&&e.locale!=="ko"?null:e.data;default:return null}}var Mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mb[t.type]:e==="textarea"}function uh(t,e,a,r){Ta?ja?ja.push(r):ja=[r]:Ta=r,e=Hl(e,"onChange"),0<e.length&&(a=new il("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var To=null,jo=null;function kb(t){Nm(t,0)}function ol(t){var e=Kt(t);if(di(e))return t}function ch(t,e){if(t==="change")return e}var fh=!1;if(Ke){var rc;if(Ke){var oc="oninput"in document;if(!oc){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),oc=typeof dh.oninput=="function"}rc=oc}else rc=!1;fh=rc&&(!document.documentMode||9<document.documentMode)}function hh(){To&&(To.detachEvent("onpropertychange",ph),jo=To=null)}function ph(t){if(t.propertyName==="value"&&ol(jo)){var e=[];uh(e,jo,t,Gi(t)),W0(kb,e)}}function Ob(t,e,a){t==="focusin"?(hh(),To=e,jo=a,To.attachEvent("onpropertychange",ph)):t==="focusout"&&hh()}function Db(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(jo)}function Bb(t,e){if(t==="click")return ol(e)}function Nb(t,e){if(t==="input"||t==="change")return ol(e)}function Lb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Lb;function Ro(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!ve.call(e,l)||!qn(t[l],e[l]))return!1}return!0}function mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gh(t,e){var a=mh(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=mh(a)}}function vh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Jn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Jn(t.document)}return e}function sc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _b(t,e){var a=yh(e);e=t.focusedElem;var r=t.selectionRange;if(a!==e&&e&&e.ownerDocument&&vh(e.ownerDocument.documentElement,e)){if(r!==null&&sc(e)){if(t=r.start,a=r.end,a===void 0&&(a=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(a,e.value.length);else if(a=(t=e.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var l=e.textContent.length,c=Math.min(r.start,l);r=r.end===void 0?c:Math.min(r.end,l),!a.extend&&c>r&&(l=r,r=c,c=l),l=gh(e,c);var g=gh(e,r);l&&g&&(a.rangeCount!==1||a.anchorNode!==l.node||a.anchorOffset!==l.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),a.removeAllRanges(),c>r?(a.addRange(t),a.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),a.addRange(t)))}}for(t=[],a=e;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)a=t[e],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Vb=Ke&&"documentMode"in document&&11>=document.documentMode,Ar=null,lc=null,zo=null,uc=!1;function bh(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||Ar==null||Ar!==Jn(r)||(r=Ar,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&Ro(zo,r)||(zo=r,r=Hl(lc,"onSelect"),0<r.length&&(e=new il("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=Ar)))}function Ki(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Tr={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionrun:Ki("Transition","TransitionRun"),transitionstart:Ki("Transition","TransitionStart"),transitioncancel:Ki("Transition","TransitionCancel"),transitionend:Ki("Transition","TransitionEnd")},cc={},xh={};Ke&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Qi(t){if(cc[t])return cc[t];if(!Tr[t])return t;var e=Tr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in xh)return cc[t]=e[a];return t}var wh=Qi("animationend"),Sh=Qi("animationiteration"),Eh=Qi("animationstart"),Pb=Qi("transitionrun"),Ub=Qi("transitionstart"),$b=Qi("transitioncancel"),Ch=Qi("transitionend"),Ah=new Map,Th="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ga(t,e){Ah.set(t,e),Cn(e,[t])}var ea=[],jr=0,fc=0;function sl(){for(var t=jr,e=fc=jr=0;e<t;){var a=ea[e];ea[e++]=null;var r=ea[e];ea[e++]=null;var l=ea[e];ea[e++]=null;var c=ea[e];if(ea[e++]=null,r!==null&&l!==null){var g=r.pending;g===null?l.next=l:(l.next=g.next,g.next=l),r.pending=l}c!==0&&jh(a,l,c)}}function ll(t,e,a,r){ea[jr++]=t,ea[jr++]=e,ea[jr++]=a,ea[jr++]=r,fc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function dc(t,e,a,r){return ll(t,e,a,r),ul(t)}function gi(t,e){return ll(t,null,null,e),ul(t)}function jh(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;l&&e!==null&&t.tag===3&&(c=t.stateNode,l=31-Ct(a),c=c.hiddenUpdates,t=c[l],t===null?c[l]=[e]:t.push(e),e.lane=a|536870912)}function ul(t){if(50<ts)throw ts=0,bf=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rr={},Rh=new WeakMap;function na(t,e){if(typeof t=="object"&&t!==null){var a=Rh.get(t);return a!==void 0?a:(e={value:t,source:e,stack:K(e)},Rh.set(t,e),e)}return{value:t,source:e,stack:K(e)}}var zr=[],Mr=0,cl=null,fl=0,aa=[],ia=0,Fi=null,$a=1,Ha="";function Zi(t,e){zr[Mr++]=fl,zr[Mr++]=cl,cl=t,fl=e}function zh(t,e,a){aa[ia++]=$a,aa[ia++]=Ha,aa[ia++]=Fi,Fi=t;var r=$a;t=Ha;var l=32-Ct(r)-1;r&=~(1<<l),a+=1;var c=32-Ct(e)+l;if(30<c){var g=l-l%5;c=(r&(1<<g)-1).toString(32),r>>=g,l-=g,$a=1<<32-Ct(e)+l|a<<l|r,Ha=c+t}else $a=1<<c|a<<l|r,Ha=t}function hc(t){t.return!==null&&(Zi(t,1),zh(t,1,0))}function pc(t){for(;t===cl;)cl=zr[--Mr],zr[Mr]=null,fl=zr[--Mr],zr[Mr]=null;for(;t===Fi;)Fi=aa[--ia],aa[ia]=null,Ha=aa[--ia],aa[ia]=null,$a=aa[--ia],aa[ia]=null}var Mn=null,xn=null,pe=!1,va=null,Ra=!1,mc=Error(s(519));function Wi(t){var e=Error(s(418,""));throw Oo(na(e,t)),mc}function Mh(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[kt]=t,e[Ut]=r,a){case"dialog":re("cancel",e),re("close",e);break;case"iframe":case"object":case"embed":re("load",e);break;case"video":case"audio":for(a=0;a<ns.length;a++)re(ns[a],e);break;case"source":re("error",e);break;case"img":case"image":case"link":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"input":re("invalid",e),hi(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Pn(e);break;case"select":re("invalid",e);break;case"textarea":re("invalid",e),$n(e,r.value,r.defaultValue,r.children),Pn(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||Pm(e.textContent,a)?(r.popover!=null&&(re("beforetoggle",e),re("toggle",e)),r.onScroll!=null&&re("scroll",e),r.onScrollEnd!=null&&re("scrollend",e),r.onClick!=null&&(e.onclick=ql),e=!0):e=!1,e||Wi(t)}function kh(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 3:case 27:Ra=!0;return;case 5:case 13:Ra=!1;return;default:Mn=Mn.return}}function Mo(t){if(t!==Mn)return!1;if(!pe)return kh(t),pe=!0,!1;var e=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lf(t.type,t.memoizedProps)),a=!a),a&&(e=!0),e&&xn&&Wi(t),kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){xn=ba(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}xn=null}}else xn=Mn?ba(t.stateNode.nextSibling):null;return!0}function ko(){xn=Mn=null,pe=!1}function Oo(t){va===null?va=[t]:va.push(t)}var Do=Error(s(460)),Oh=Error(s(474)),gc={then:function(){}};function Dh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dl(){}function Bh(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(dl,dl),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Do?Error(s(483)):t;default:if(typeof e.status=="string")e.then(dl,dl);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Do?Error(s(483)):t}throw Bo=e,Do}}var Bo=null;function Nh(){if(Bo===null)throw Error(s(459));var t=Bo;return Bo=null,t}var kr=null,No=0;function hl(t){var e=No;return No+=1,kr===null&&(kr=[]),Bh(kr,t,e)}function Lo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pl(t,e){throw e.$$typeof===f?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Lh(t){var e=t._init;return e(t._payload)}function _h(t){function e(P,N){if(t){var q=P.deletions;q===null?(P.deletions=[N],P.flags|=16):q.push(N)}}function a(P,N){if(!t)return null;for(;N!==null;)e(P,N),N=N.sibling;return null}function r(P){for(var N=new Map;P!==null;)P.key!==null?N.set(P.key,P):N.set(P.index,P),P=P.sibling;return N}function l(P,N){return P=Ri(P,N),P.index=0,P.sibling=null,P}function c(P,N,q){return P.index=q,t?(q=P.alternate,q!==null?(q=q.index,q<N?(P.flags|=33554434,N):q):(P.flags|=33554434,N)):(P.flags|=1048576,N)}function g(P){return t&&P.alternate===null&&(P.flags|=33554434),P}function w(P,N,q,at){return N===null||N.tag!==6?(N=ff(q,P.mode,at),N.return=P,N):(N=l(N,q),N.return=P,N)}function R(P,N,q,at){var At=q.type;return At===h?tt(P,N,q.props.children,at,q.key):N!==null&&(N.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===D&&Lh(At)===N.type)?(N=l(N,q.props),Lo(N,q),N.return=P,N):(N=Ol(q.type,q.key,q.props,null,P.mode,at),Lo(N,q),N.return=P,N)}function V(P,N,q,at){return N===null||N.tag!==4||N.stateNode.containerInfo!==q.containerInfo||N.stateNode.implementation!==q.implementation?(N=df(q,P.mode,at),N.return=P,N):(N=l(N,q.children||[]),N.return=P,N)}function tt(P,N,q,at,At){return N===null||N.tag!==7?(N=sr(q,P.mode,at,At),N.return=P,N):(N=l(N,q),N.return=P,N)}function lt(P,N,q){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=ff(""+N,P.mode,q),N.return=P,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case d:return q=Ol(N.type,N.key,N.props,null,P.mode,q),Lo(q,N),q.return=P,q;case p:return N=df(N,P.mode,q),N.return=P,N;case D:var at=N._init;return N=at(N._payload),lt(P,N,q)}if(wt(N)||W(N))return N=sr(N,P.mode,q,null),N.return=P,N;if(typeof N.then=="function")return lt(P,hl(N),q);if(N.$$typeof===S)return lt(P,zl(P,N),q);pl(P,N)}return null}function Y(P,N,q,at){var At=N!==null?N.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return At!==null?null:w(P,N,""+q,at);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return q.key===At?R(P,N,q,at):null;case p:return q.key===At?V(P,N,q,at):null;case D:return At=q._init,q=At(q._payload),Y(P,N,q,at)}if(wt(q)||W(q))return At!==null?null:tt(P,N,q,at,null);if(typeof q.then=="function")return Y(P,N,hl(q),at);if(q.$$typeof===S)return Y(P,N,zl(P,q),at);pl(P,q)}return null}function J(P,N,q,at,At){if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return P=P.get(q)||null,w(N,P,""+at,At);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case d:return P=P.get(at.key===null?q:at.key)||null,R(N,P,at,At);case p:return P=P.get(at.key===null?q:at.key)||null,V(N,P,at,At);case D:var It=at._init;return at=It(at._payload),J(P,N,q,at,At)}if(wt(at)||W(at))return P=P.get(q)||null,tt(N,P,at,At,null);if(typeof at.then=="function")return J(P,N,q,hl(at),At);if(at.$$typeof===S)return J(P,N,q,zl(N,at),At);pl(N,at)}return null}function Ot(P,N,q,at){for(var At=null,It=null,Bt=N,Lt=N=0,mn=null;Bt!==null&&Lt<q.length;Lt++){Bt.index>Lt?(mn=Bt,Bt=null):mn=Bt.sibling;var me=Y(P,Bt,q[Lt],at);if(me===null){Bt===null&&(Bt=mn);break}t&&Bt&&me.alternate===null&&e(P,Bt),N=c(me,N,Lt),It===null?At=me:It.sibling=me,It=me,Bt=mn}if(Lt===q.length)return a(P,Bt),pe&&Zi(P,Lt),At;if(Bt===null){for(;Lt<q.length;Lt++)Bt=lt(P,q[Lt],at),Bt!==null&&(N=c(Bt,N,Lt),It===null?At=Bt:It.sibling=Bt,It=Bt);return pe&&Zi(P,Lt),At}for(Bt=r(Bt);Lt<q.length;Lt++)mn=J(Bt,P,Lt,q[Lt],at),mn!==null&&(t&&mn.alternate!==null&&Bt.delete(mn.key===null?Lt:mn.key),N=c(mn,N,Lt),It===null?At=mn:It.sibling=mn,It=mn);return t&&Bt.forEach(function(Ni){return e(P,Ni)}),pe&&Zi(P,Lt),At}function qt(P,N,q,at){if(q==null)throw Error(s(151));for(var At=null,It=null,Bt=N,Lt=N=0,mn=null,me=q.next();Bt!==null&&!me.done;Lt++,me=q.next()){Bt.index>Lt?(mn=Bt,Bt=null):mn=Bt.sibling;var Ni=Y(P,Bt,me.value,at);if(Ni===null){Bt===null&&(Bt=mn);break}t&&Bt&&Ni.alternate===null&&e(P,Bt),N=c(Ni,N,Lt),It===null?At=Ni:It.sibling=Ni,It=Ni,Bt=mn}if(me.done)return a(P,Bt),pe&&Zi(P,Lt),At;if(Bt===null){for(;!me.done;Lt++,me=q.next())me=lt(P,me.value,at),me!==null&&(N=c(me,N,Lt),It===null?At=me:It.sibling=me,It=me);return pe&&Zi(P,Lt),At}for(Bt=r(Bt);!me.done;Lt++,me=q.next())me=J(Bt,P,Lt,me.value,at),me!==null&&(t&&me.alternate!==null&&Bt.delete(me.key===null?Lt:me.key),N=c(me,N,Lt),It===null?At=me:It.sibling=me,It=me);return t&&Bt.forEach(function(ex){return e(P,ex)}),pe&&Zi(P,Lt),At}function Ze(P,N,q,at){if(typeof q=="object"&&q!==null&&q.type===h&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case d:t:{for(var At=q.key;N!==null;){if(N.key===At){if(At=q.type,At===h){if(N.tag===7){a(P,N.sibling),at=l(N,q.props.children),at.return=P,P=at;break t}}else if(N.elementType===At||typeof At=="object"&&At!==null&&At.$$typeof===D&&Lh(At)===N.type){a(P,N.sibling),at=l(N,q.props),Lo(at,q),at.return=P,P=at;break t}a(P,N);break}else e(P,N);N=N.sibling}q.type===h?(at=sr(q.props.children,P.mode,at,q.key),at.return=P,P=at):(at=Ol(q.type,q.key,q.props,null,P.mode,at),Lo(at,q),at.return=P,P=at)}return g(P);case p:t:{for(At=q.key;N!==null;){if(N.key===At)if(N.tag===4&&N.stateNode.containerInfo===q.containerInfo&&N.stateNode.implementation===q.implementation){a(P,N.sibling),at=l(N,q.children||[]),at.return=P,P=at;break t}else{a(P,N);break}else e(P,N);N=N.sibling}at=df(q,P.mode,at),at.return=P,P=at}return g(P);case D:return At=q._init,q=At(q._payload),Ze(P,N,q,at)}if(wt(q))return Ot(P,N,q,at);if(W(q)){if(At=W(q),typeof At!="function")throw Error(s(150));return q=At.call(q),qt(P,N,q,at)}if(typeof q.then=="function")return Ze(P,N,hl(q),at);if(q.$$typeof===S)return Ze(P,N,zl(P,q),at);pl(P,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,N!==null&&N.tag===6?(a(P,N.sibling),at=l(N,q),at.return=P,P=at):(a(P,N),at=ff(q,P.mode,at),at.return=P,P=at),g(P)):a(P,N)}return function(P,N,q,at){try{No=0;var At=Ze(P,N,q,at);return kr=null,At}catch(Bt){if(Bt===Do)throw Bt;var It=la(29,Bt,null,P.mode);return It.lanes=at,It.return=P,It}finally{}}}var Ji=_h(!0),Vh=_h(!1),Or=St(null),ml=St(0);function Ph(t,e){t=Ia,Nt(ml,t),Nt(Or,e),Ia=t|e.baseLanes}function vc(){Nt(ml,Ia),Nt(Or,Or.current)}function yc(){Ia=ml.current,H(Or),H(ml)}var ra=St(null),za=null;function vi(t){var e=t.alternate;Nt(cn,cn.current&1),Nt(ra,t),za===null&&(e===null||Or.current!==null||e.memoizedState!==null)&&(za=t)}function Uh(t){if(t.tag===22){if(Nt(cn,cn.current),Nt(ra,t),za===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(za=t)}}else yi()}function yi(){Nt(cn,cn.current),Nt(ra,ra.current)}function qa(t){H(ra),za===t&&(za=null),H(cn)}var cn=St(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},qb=n.unstable_scheduleCallback,Yb=n.unstable_NormalPriority,fn={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new Hb,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&qb(Yb,function(){t.controller.abort()})}var Vo=null,xc=0,Dr=0,Br=null;function Gb(t,e){if(Vo===null){var a=Vo=[];xc=0,Dr=jf(),Br={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xc++,e.then($h,$h),e}function $h(){if(--xc===0&&Vo!==null){Br!==null&&(Br.status="fulfilled");var t=Vo;Vo=null,Dr=0,Br=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Xb(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Hh=Q.S;Q.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Gb(t,e),Hh!==null&&Hh(t,e)};var Ii=St(null);function wc(){var t=Ii.current;return t!==null?t:je.pooledCache}function vl(t,e){e===null?Nt(Ii,Ii.current):Nt(Ii,e.pool)}function qh(){var t=wc();return t===null?null:{parent:fn._currentValue,pool:t}}var bi=0,Wt=null,Ee=null,on=null,yl=!1,Nr=!1,tr=!1,bl=0,Po=0,Lr=null,Kb=0;function nn(){throw Error(s(321))}function Sc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!qn(t[a],e[a]))return!1;return!0}function Ec(t,e,a,r,l,c){return bi=c,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Q.H=t===null||t.memoizedState===null?er:xi,tr=!1,c=a(r,l),tr=!1,Nr&&(c=Gh(e,a,r,l)),Yh(t),c}function Yh(t){Q.H=Ma;var e=Ee!==null&&Ee.next!==null;if(bi=0,on=Ee=Wt=null,yl=!1,Po=0,Lr=null,e)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&Rl(t)&&(hn=!0))}function Gh(t,e,a,r){Wt=t;var l=0;do{if(Nr&&(Lr=null),Po=0,Nr=!1,25<=l)throw Error(s(301));if(l+=1,on=Ee=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Q.H=nr,c=e(a,r)}while(Nr);return c}function Qb(){var t=Q.H,e=t.useState()[0];return e=typeof e.then=="function"?Uo(e):e,t=t.useState()[0],(Ee!==null?Ee.memoizedState:null)!==t&&(Wt.flags|=1024),e}function Cc(){var t=bl!==0;return bl=0,t}function Ac(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Tc(t){if(yl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yl=!1}bi=0,on=Ee=Wt=null,Nr=!1,Po=bl=0,Lr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Wt.memoizedState=on=t:on=on.next=t,on}function sn(){if(Ee===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=Ee.next;var e=on===null?Wt.memoizedState:on.next;if(e!==null)on=e,Ee=t;else{if(t===null)throw Wt.alternate===null?Error(s(467)):Error(s(310));Ee=t,t={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},on===null?Wt.memoizedState=on=t:on=on.next=t}return on}var xl;xl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Uo(t){var e=Po;return Po+=1,Lr===null&&(Lr=[]),t=Bh(Lr,t,e),e=Wt,(on===null?e.memoizedState:on.next)===null&&(e=e.alternate,Q.H=e===null||e.memoizedState===null?er:xi),t}function wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uo(t);if(t.$$typeof===S)return Tn(t)}throw Error(s(438,String(t)))}function jc(t){var e=null,a=Wt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=Wt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=xl(),Wt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=L;return e.index++,a}function Ya(t,e){return typeof e=="function"?e(t):e}function Sl(t){var e=sn();return Rc(e,Ee,t)}function Rc(t,e,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var g=l.next;l.next=c.next,c.next=g}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var w=g=null,R=null,V=e,tt=!1;do{var lt=V.lane&-536870913;if(lt!==V.lane?(le&lt)===lt:(bi&lt)===lt){var Y=V.revertLane;if(Y===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),lt===Dr&&(tt=!0);else if((bi&Y)===Y){V=V.next,Y===Dr&&(tt=!0);continue}else lt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(w=R=lt,g=c):R=R.next=lt,Wt.lanes|=Y,zi|=Y;lt=V.action,tr&&a(c,lt),c=V.hasEagerState?V.eagerState:a(c,lt)}else Y={lane:lt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},R===null?(w=R=Y,g=c):R=R.next=Y,Wt.lanes|=lt,zi|=lt;V=V.next}while(V!==null&&V!==e);if(R===null?g=c:R.next=w,!qn(c,t.memoizedState)&&(hn=!0,tt&&(a=Br,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=R,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function zc(t){var e=sn(),a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=e.memoizedState;if(l!==null){a.pending=null;var g=l=l.next;do c=t(c,g.action),g=g.next;while(g!==l);qn(c,e.memoizedState)||(hn=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function Xh(t,e,a){var r=Wt,l=sn(),c=pe;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=e();var g=!qn((Ee||l).memoizedState,a);if(g&&(l.memoizedState=a,hn=!0),l=l.queue,Oc(Fh.bind(null,r,l,t),[t]),l.getSnapshot!==e||g||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,_r(9,Qh.bind(null,r,l,a,e),{destroy:void 0},null),je===null)throw Error(s(349));c||(bi&60)!==0||Kh(r,e,a)}return a}function Kh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Wt.updateQueue,e===null?(e=xl(),Wt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Qh(t,e,a,r){e.value=a,e.getSnapshot=r,Zh(e)&&Wh(t)}function Fh(t,e,a){return a(function(){Zh(e)&&Wh(t)})}function Zh(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!qn(t,a)}catch{return!0}}function Wh(t){var e=gi(t,2);e!==null&&kn(e,t,2)}function Mc(t){var e=Ln();if(typeof t=="function"){var a=t;if(t=a(),tr){jt(!0);try{a()}finally{jt(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:t},e}function Jh(t,e,a,r){return t.baseState=a,Rc(t,Ee,typeof r=="function"?r:Ya)}function Fb(t,e,a,r,l){if(Al(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};Q.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,Ih(e,c)):(c.next=a.next,e.pending=a.next=c)}}function Ih(t,e){var a=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=Q.T,g={};Q.T=g;try{var w=a(l,r),R=Q.S;R!==null&&R(g,w),tp(t,e,w)}catch(V){kc(t,e,V)}finally{Q.T=c}}else try{c=a(l,r),tp(t,e,c)}catch(V){kc(t,e,V)}}function tp(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){ep(t,e,r)},function(r){return kc(t,e,r)}):ep(t,e,a)}function ep(t,e,a){e.status="fulfilled",e.value=a,np(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Ih(t,a)))}function kc(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,np(e),e=e.next;while(e!==r)}t.action=null}function np(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ap(t,e){return e}function ip(t,e){if(pe){var a=je.formState;if(a!==null){t:{var r=Wt;if(pe){if(xn){e:{for(var l=xn,c=Ra;l.nodeType!==8;){if(!c){l=null;break e}if(l=ba(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){xn=ba(l.nextSibling),r=l.data==="F!";break t}}Wi(r)}r=!1}r&&(e=a[0])}}return a=Ln(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ap,lastRenderedState:e},a.queue=r,a=Sp.bind(null,Wt,r),r.dispatch=a,r=Mc(!1),c=_c.bind(null,Wt,!1,r.queue),r=Ln(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,a=Fb.bind(null,Wt,l,c,a),l.dispatch=a,r.memoizedState=t,[e,a,!1]}function rp(t){var e=sn();return op(e,Ee,t)}function op(t,e,a){e=Rc(t,e,ap)[0],t=Sl(Ya)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Uo(e):e;var r=sn(),l=r.queue,c=l.dispatch;return a!==r.memoizedState&&(Wt.flags|=2048,_r(9,Zb.bind(null,l,a),{destroy:void 0},null)),[e,c,t]}function Zb(t,e){t.action=e}function sp(t){var e=sn(),a=Ee;if(a!==null)return op(e,a,t);sn(),e=e.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function _r(t,e,a,r){return t={tag:t,create:e,inst:a,deps:r,next:null},e=Wt.updateQueue,e===null&&(e=xl(),Wt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function lp(){return sn().memoizedState}function El(t,e,a,r){var l=Ln();Wt.flags|=t,l.memoizedState=_r(1|e,a,{destroy:void 0},r===void 0?null:r)}function Cl(t,e,a,r){var l=sn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ee!==null&&r!==null&&Sc(r,Ee.memoizedState.deps)?l.memoizedState=_r(e,a,c,r):(Wt.flags|=t,l.memoizedState=_r(1|e,a,c,r))}function up(t,e){El(8390656,8,t,e)}function Oc(t,e){Cl(2048,8,t,e)}function cp(t,e){return Cl(4,2,t,e)}function fp(t,e){return Cl(4,4,t,e)}function dp(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hp(t,e,a){a=a!=null?a.concat([t]):null,Cl(4,4,dp.bind(null,e,t),a)}function Dc(){}function pp(t,e){var a=sn();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Sc(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function mp(t,e){var a=sn();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Sc(e,r[1]))return r[0];if(r=t(),tr){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[r,e],r}function Bc(t,e,a){return a===void 0||(bi&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=vm(),Wt.lanes|=t,zi|=t,a)}function gp(t,e,a,r){return qn(a,e)?a:Or.current!==null?(t=Bc(t,a,r),qn(t,e)||(hn=!0),t):(bi&42)===0?(hn=!0,t.memoizedState=a):(t=vm(),Wt.lanes|=t,zi|=t,e)}function vp(t,e,a,r,l){var c=pt.p;pt.p=c!==0&&8>c?c:8;var g=Q.T,w={};Q.T=w,_c(t,!1,e,a);try{var R=l(),V=Q.S;if(V!==null&&V(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var tt=Xb(R,r);$o(t,e,tt,Kn(t))}else $o(t,e,r,Kn(t))}catch(lt){$o(t,e,{then:function(){},status:"rejected",reason:lt},Kn())}finally{pt.p=c,Q.T=g}}function Wb(){}function Nc(t,e,a,r){if(t.tag!==5)throw Error(s(476));var l=yp(t).queue;vp(t,l,e,ft,a===null?Wb:function(){return bp(t),a(r)})}function yp(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:ft},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bp(t){var e=yp(t).next.queue;$o(t,e,{},Kn())}function Lc(){return Tn(ss)}function xp(){return sn().memoizedState}function wp(){return sn().memoizedState}function Jb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Kn();t=Ei(a);var r=Ci(e,t,a);r!==null&&(kn(r,e,a),Yo(r,e,a)),e={cache:bc()},t.payload=e;return}e=e.return}}function Ib(t,e,a){var r=Kn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?Ep(e,a):(a=dc(t,e,a,r),a!==null&&(kn(a,t,r),Cp(a,e,r)))}function Sp(t,e,a){var r=Kn();$o(t,e,a,r)}function $o(t,e,a,r){var l={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))Ep(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,w=c(g,a);if(l.hasEagerState=!0,l.eagerState=w,qn(w,g))return ll(t,e,l,0),je===null&&sl(),!1}catch{}finally{}if(a=dc(t,e,l,r),a!==null)return kn(a,t,r),Cp(a,e,r),!0}return!1}function _c(t,e,a,r){if(r={lane:2,revertLane:jf(),action:r,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(e)throw Error(s(479))}else e=dc(t,a,r,2),e!==null&&kn(e,t,2)}function Al(t){var e=t.alternate;return t===Wt||e!==null&&e===Wt}function Ep(t,e){Nr=yl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Cp(t,e,a){if((a&4194176)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,U(t,a)}}var Ma={readContext:Tn,use:wl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn};Ma.useCacheRefresh=nn,Ma.useMemoCache=nn,Ma.useHostTransitionStatus=nn,Ma.useFormState=nn,Ma.useActionState=nn,Ma.useOptimistic=nn;var er={readContext:Tn,use:wl,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:up,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,El(4194308,4,dp.bind(null,e,t),a)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){El(4,2,t,e)},useMemo:function(t,e){var a=Ln();e=e===void 0?null:e;var r=t();if(tr){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=Ln();if(a!==void 0){var l=a(e);if(tr){jt(!0);try{a(e)}finally{jt(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Ib.bind(null,Wt,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:function(t){t=Mc(t);var e=t.queue,a=Sp.bind(null,Wt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Dc,useDeferredValue:function(t,e){var a=Ln();return Bc(a,t,e)},useTransition:function(){var t=Mc(!1);return t=vp.bind(null,Wt,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=Wt,l=Ln();if(pe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=e(),je===null)throw Error(s(349));(le&60)!==0||Kh(r,e,a)}l.memoizedState=a;var c={value:a,getSnapshot:e};return l.queue=c,up(Fh.bind(null,r,c,t),[t]),r.flags|=2048,_r(9,Qh.bind(null,r,c,a,e),{destroy:void 0},null),a},useId:function(){var t=Ln(),e=je.identifierPrefix;if(pe){var a=Ha,r=$a;a=(r&~(1<<32-Ct(r)-1)).toString(32)+a,e=":"+e+"R"+a,a=bl++,0<a&&(e+="H"+a.toString(32)),e+=":"}else a=Kb++,e=":"+e+"r"+a.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return Ln().memoizedState=Jb.bind(null,Wt)}};er.useMemoCache=jc,er.useHostTransitionStatus=Lc,er.useFormState=ip,er.useActionState=ip,er.useOptimistic=function(t){var e=Ln();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=_c.bind(null,Wt,!0,a),a.dispatch=e,[t,e]};var xi={readContext:Tn,use:wl,useCallback:pp,useContext:Tn,useEffect:Oc,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:Sl,useRef:lp,useState:function(){return Sl(Ya)},useDebugValue:Dc,useDeferredValue:function(t,e){var a=sn();return gp(a,Ee.memoizedState,t,e)},useTransition:function(){var t=Sl(Ya)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:Uo(t),e]},useSyncExternalStore:Xh,useId:xp};xi.useCacheRefresh=wp,xi.useMemoCache=jc,xi.useHostTransitionStatus=Lc,xi.useFormState=rp,xi.useActionState=rp,xi.useOptimistic=function(t,e){var a=sn();return Jh(a,Ee,t,e)};var nr={readContext:Tn,use:wl,useCallback:pp,useContext:Tn,useEffect:Oc,useImperativeHandle:hp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:zc,useRef:lp,useState:function(){return zc(Ya)},useDebugValue:Dc,useDeferredValue:function(t,e){var a=sn();return Ee===null?Bc(a,t,e):gp(a,Ee.memoizedState,t,e)},useTransition:function(){var t=zc(Ya)[0],e=sn().memoizedState;return[typeof t=="boolean"?t:Uo(t),e]},useSyncExternalStore:Xh,useId:xp};nr.useCacheRefresh=wp,nr.useMemoCache=jc,nr.useHostTransitionStatus=Lc,nr.useFormState=sp,nr.useActionState=sp,nr.useOptimistic=function(t,e){var a=sn();return Ee!==null?Jh(a,Ee,t,e):(a.baseState=t,[t,a.queue.dispatch])};function Vc(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:yt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pc={isMounted:function(t){return(t=t._reactInternals)?it(t)===t:!1},enqueueSetState:function(t,e,a){t=t._reactInternals;var r=Kn(),l=Ei(r);l.payload=e,a!=null&&(l.callback=a),e=Ci(t,l,r),e!==null&&(kn(e,t,r),Yo(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=Kn(),l=Ei(r);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=Ci(t,l,r),e!==null&&(kn(e,t,r),Yo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Kn(),r=Ei(a);r.tag=2,e!=null&&(r.callback=e),e=Ci(t,r,a),e!==null&&(kn(e,t,a),Yo(e,t,a))}};function Ap(t,e,a,r,l,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!Ro(a,r)||!Ro(l,c):!0}function Tp(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function ar(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=yt({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function jp(t){Tl(t)}function Rp(t){console.error(t)}function zp(t){Tl(t)}function jl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Mp(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Uc(t,e,a){return a=Ei(a),a.tag=3,a.payload={element:null},a.callback=function(){jl(t,e)},a}function kp(t){return t=Ei(t),t.tag=3,t}function Op(t,e,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Mp(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Mp(e,a,r),typeof l!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function t5(t,e,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&qo(e,a,l,!0),a=ra.current,a!==null){switch(a.tag){case 13:return za===null?Sf():a.alternate===null&&Fe===0&&(Fe=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===gc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),Cf(t,r,l)),!1;case 22:return a.flags|=65536,r===gc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),Cf(t,r,l)),!1}throw Error(s(435,a.tag))}return Cf(t,r,l),Sf(),!1}if(pe)return e=ra.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==mc&&(t=Error(s(422),{cause:r}),Oo(na(t,a)))):(r!==mc&&(e=Error(s(423),{cause:r}),Oo(na(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=na(r,a),l=Uc(t.stateNode,r,l),ef(t,l),Fe!==4&&(Fe=2)),!1;var c=Error(s(520),{cause:r});if(c=na(c,a),Jo===null?Jo=[c]:Jo.push(c),Fe!==4&&(Fe=2),e===null)return!0;r=na(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Uc(a.stateNode,r,t),ef(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Mi===null||!Mi.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=kp(l),Op(l,t,a,r),ef(a,l),!1}a=a.return}while(a!==null);return!1}var Dp=Error(s(461)),hn=!1;function wn(t,e,a,r){e.child=t===null?Vh(e,null,a,r):Ji(e,t.child,a,r)}function Bp(t,e,a,r,l){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var w in r)w!=="ref"&&(g[w]=r[w])}else g=r;return rr(e),r=Ec(t,e,a,g,c,l),w=Cc(),t!==null&&!hn?(Ac(t,e,l),Ga(t,e,l)):(pe&&w&&hc(e),e.flags|=1,wn(t,e,r,l),e.child)}function Np(t,e,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!cf(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,Lp(t,e,c,r,l)):(t=Ol(a.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Fc(t,l)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(g,r)&&t.ref===e.ref)return Ga(t,e,l)}return e.flags|=1,t=Ri(c,r),t.ref=e.ref,t.return=e,e.child=t}function Lp(t,e,a,r,l){if(t!==null){var c=t.memoizedProps;if(Ro(c,r)&&t.ref===e.ref)if(hn=!1,e.pendingProps=r=c,Fc(t,l))(t.flags&131072)!==0&&(hn=!0);else return e.lanes=t.lanes,Ga(t,e,l)}return $c(t,e,a,r,l)}function _p(t,e,a){var r=e.pendingProps,l=r.children,c=(e.stateNode._pendingVisibility&2)!==0,g=t!==null?t.memoizedState:null;if(Ho(t,e),r.mode==="hidden"||c){if((e.flags&128)!==0){if(r=g!==null?g.baseLanes|a:a,t!==null){for(l=e.child=t.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return Vp(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(e,g!==null?g.cachePool:null),g!==null?Ph(e,g):vc(),Uh(e);else return e.lanes=e.childLanes=536870912,Vp(t,e,g!==null?g.baseLanes|a:a,a)}else g!==null?(vl(e,g.cachePool),Ph(e,g),yi(),e.memoizedState=null):(t!==null&&vl(e,null),vc(),yi());return wn(t,e,l,a),e.child}function Vp(t,e,a,r){var l=wc();return l=l===null?null:{parent:fn._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&vl(e,null),vc(),Uh(e),t!==null&&qo(t,e,r,!0),null}function Ho(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(e.flags|=2097664)}}function $c(t,e,a,r,l){return rr(e),a=Ec(t,e,a,r,void 0,l),r=Cc(),t!==null&&!hn?(Ac(t,e,l),Ga(t,e,l)):(pe&&r&&hc(e),e.flags|=1,wn(t,e,a,l),e.child)}function Pp(t,e,a,r,l,c){return rr(e),e.updateQueue=null,a=Gh(e,r,a,l),Yh(t),r=Cc(),t!==null&&!hn?(Ac(t,e,c),Ga(t,e,c)):(pe&&r&&hc(e),e.flags|=1,wn(t,e,a,c),e.child)}function Up(t,e,a,r,l){if(rr(e),e.stateNode===null){var c=Rr,g=a.contextType;typeof g=="object"&&g!==null&&(c=Tn(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Pc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},Ic(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?Tn(g):Rr,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Vc(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Pc.enqueueReplaceState(c,c.state,null),Xo(e,r,c,l),Go(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var w=e.memoizedProps,R=ar(a,w);c.props=R;var V=c.context,tt=a.contextType;g=Rr,typeof tt=="object"&&tt!==null&&(g=Tn(tt));var lt=a.getDerivedStateFromProps;tt=typeof lt=="function"||typeof c.getSnapshotBeforeUpdate=="function",w=e.pendingProps!==w,tt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(w||V!==g)&&Tp(e,c,r,g),Si=!1;var Y=e.memoizedState;c.state=Y,Xo(e,r,c,l),Go(),V=e.memoizedState,w||Y!==V||Si?(typeof lt=="function"&&(Vc(e,a,lt,r),V=e.memoizedState),(R=Si||Ap(e,a,R,r,Y,V,g))?(tt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=V),c.props=r,c.state=V,c.context=g,r=R):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,tf(t,e),g=e.memoizedProps,tt=ar(a,g),c.props=tt,lt=e.pendingProps,Y=c.context,V=a.contextType,R=Rr,typeof V=="object"&&V!==null&&(R=Tn(V)),w=a.getDerivedStateFromProps,(V=typeof w=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==lt||Y!==R)&&Tp(e,c,r,R),Si=!1,Y=e.memoizedState,c.state=Y,Xo(e,r,c,l),Go();var J=e.memoizedState;g!==lt||Y!==J||Si||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof w=="function"&&(Vc(e,a,w,r),J=e.memoizedState),(tt=Si||Ap(e,a,tt,r,Y,J,R)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(V||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,J,R),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,J,R)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=J),c.props=r,c.state=J,c.context=R,r=tt):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,Ho(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=Ji(e,t.child,null,l),e.child=Ji(e,null,a,l)):wn(t,e,a,l),e.memoizedState=c.state,t=e.child):t=Ga(t,e,l),t}function $p(t,e,a,r){return ko(),e.flags|=256,wn(t,e,a,r),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function qc(t){return{baseLanes:t,cachePool:qh()}}function Yc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ua),t}function Hp(t,e,a){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),g&&(l=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(pe){if(l?vi(e):yi(),pe){var w=xn,R;if(R=w){t:{for(R=w,w=Ra;R.nodeType!==8;){if(!w){w=null;break t}if(R=ba(R.nextSibling),R===null){w=null;break t}}w=R}w!==null?(e.memoizedState={dehydrated:w,treeContext:Fi!==null?{id:$a,overflow:Ha}:null,retryLane:536870912},R=la(18,null,null,0),R.stateNode=w,R.return=e,e.child=R,Mn=e,xn=null,R=!0):R=!1}R||Wi(e)}if(w=e.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?e.lanes=16:e.lanes=536870912,null;qa(e)}return w=r.children,r=r.fallback,l?(yi(),l=e.mode,w=Xc({mode:"hidden",children:w},l),r=sr(r,l,a,null),w.return=e,r.return=e,w.sibling=r,e.child=w,l=e.child,l.memoizedState=qc(a),l.childLanes=Yc(t,g,a),e.memoizedState=Hc,r):(vi(e),Gc(e,w))}if(R=t.memoizedState,R!==null&&(w=R.dehydrated,w!==null)){if(c)e.flags&256?(vi(e),e.flags&=-257,e=Kc(t,e,a)):e.memoizedState!==null?(yi(),e.child=t.child,e.flags|=128,e=null):(yi(),l=r.fallback,w=e.mode,r=Xc({mode:"visible",children:r.children},w),l=sr(l,w,a,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,Ji(e,t.child,null,a),r=e.child,r.memoizedState=qc(a),r.childLanes=Yc(t,g,a),e.memoizedState=Hc,e=l);else if(vi(e),w.data==="$!"){if(g=w.nextSibling&&w.nextSibling.dataset,g)var V=g.dgst;g=V,r=Error(s(419)),r.stack="",r.digest=g,Oo({value:r,source:null,stack:null}),e=Kc(t,e,a)}else if(hn||qo(t,e,a,!1),g=(a&t.childLanes)!==0,hn||g){if(g=je,g!==null){if(r=a&-a,(r&42)!==0)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==R.retryLane)throw R.retryLane=r,gi(t,r),kn(g,t,r),Dp}w.data==="$?"||Sf(),e=Kc(t,e,a)}else w.data==="$?"?(e.flags|=128,e.child=t.child,e=m5.bind(null,t),w._reactRetry=e,e=null):(t=R.treeContext,xn=ba(w.nextSibling),Mn=e,pe=!0,va=null,Ra=!1,t!==null&&(aa[ia++]=$a,aa[ia++]=Ha,aa[ia++]=Fi,$a=t.id,Ha=t.overflow,Fi=e),e=Gc(e,r.children),e.flags|=4096);return e}return l?(yi(),l=r.fallback,w=e.mode,R=t.child,V=R.sibling,r=Ri(R,{mode:"hidden",children:r.children}),r.subtreeFlags=R.subtreeFlags&31457280,V!==null?l=Ri(V,l):(l=sr(l,w,a,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,r=l,l=e.child,w=t.child.memoizedState,w===null?w=qc(a):(R=w.cachePool,R!==null?(V=fn._currentValue,R=R.parent!==V?{parent:V,pool:V}:R):R=qh(),w={baseLanes:w.baseLanes|a,cachePool:R}),l.memoizedState=w,l.childLanes=Yc(t,g,a),e.memoizedState=Hc,r):(vi(e),a=t.child,t=a.sibling,a=Ri(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function Gc(t,e){return e=Xc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Xc(t,e){return pm(t,e,0,null)}function Kc(t,e,a){return Ji(e,t.child,null,a),t=Gc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qp(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wc(t.return,e,a)}function Qc(t,e,a,r,l){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=l)}function Yp(t,e,a){var r=e.pendingProps,l=r.revealOrder,c=r.tail;if(wn(t,e,r.children,a),r=cn.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,a,e);else if(t.tag===19)qp(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Nt(cn,r),l){case"forwards":for(a=e.child,l=null;a!==null;)t=a.alternate,t!==null&&gl(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Qc(e,!1,l,a,c);break;case"backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&gl(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Qc(e,!0,a,null,c);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),zi|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(qo(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,a=Ri(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ri(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Fc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function e5(t,e,a){switch(e.tag){case 3:Oe(e,e.stateNode.containerInfo),wi(e,fn,t.memoizedState.cache),ko();break;case 27:case 5:Mt(e);break;case 4:Oe(e,e.stateNode.containerInfo);break;case 10:wi(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(vi(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Hp(t,e,a):(vi(e),t=Ga(t,e,a),t!==null?t.sibling:null);vi(e);break;case 19:var l=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(qo(t,e,a,!1),r=(a&e.childLanes)!==0),l){if(r)return Yp(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Nt(cn,cn.current),r)break;return null;case 22:case 23:return e.lanes=0,_p(t,e,a);case 24:wi(e,fn,t.memoizedState.cache)}return Ga(t,e,a)}function Gp(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)hn=!0;else{if(!Fc(t,a)&&(e.flags&128)===0)return hn=!1,e5(t,e,a);hn=(t.flags&131072)!==0}else hn=!1,pe&&(e.flags&1048576)!==0&&zh(e,fl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,l=r._init;if(r=l(r._payload),e.type=r,typeof r=="function")cf(r)?(t=ar(r,t),e.tag=1,e=Up(null,e,r,t,a)):(e.tag=0,e=$c(null,e,r,t,a));else{if(r!=null){if(l=r.$$typeof,l===C){e.tag=11,e=Bp(null,e,r,t,a);break t}else if(l===A){e.tag=14,e=Np(null,e,r,t,a);break t}}throw e=dt(r)||r,Error(s(306,e,""))}}return e;case 0:return $c(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,l=ar(r,e.pendingProps),Up(t,e,r,l,a);case 3:t:{if(Oe(e,e.stateNode.containerInfo),t===null)throw Error(s(387));var c=e.pendingProps;l=e.memoizedState,r=l.element,tf(t,e),Xo(e,c,null,a);var g=e.memoizedState;if(c=g.cache,wi(e,fn,c),c!==l.cache&&Jc(e,[fn],a,!0),Go(),c=g.element,l.isDehydrated)if(l={element:c,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=$p(t,e,c,a);break t}else if(c!==r){r=na(Error(s(424)),e),Oo(r),e=$p(t,e,c,a);break t}else for(xn=ba(e.stateNode.containerInfo.firstChild),Mn=e,pe=!0,va=null,Ra=!0,a=Vh(e,null,c,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ko(),c===r){e=Ga(t,e,a);break t}wn(t,e,c,a)}e=e.child}return e;case 26:return Ho(t,e),t===null?(a=Qm(e.type,null,e.pendingProps,null))?e.memoizedState=a:pe||(a=e.type,t=e.pendingProps,r=Yl($t.current).createElement(a),r[kt]=e,r[Ut]=t,Sn(r,a,t),Qt(r),e.stateNode=r):e.memoizedState=Qm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Mt(e),t===null&&pe&&(r=e.stateNode=Gm(e.type,e.pendingProps,$t.current),Mn=e,Ra=!0,xn=ba(r.firstChild)),r=e.pendingProps.children,t!==null||pe?wn(t,e,r,a):e.child=Ji(e,null,r,a),Ho(t,e),e.child;case 5:return t===null&&pe&&((l=r=xn)&&(r=k5(r,e.type,e.pendingProps,Ra),r!==null?(e.stateNode=r,Mn=e,xn=ba(r.firstChild),Ra=!1,l=!0):l=!1),l||Wi(e)),Mt(e),l=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Lf(l,c)?r=null:g!==null&&Lf(l,g)&&(e.flags|=32),e.memoizedState!==null&&(l=Ec(t,e,Qb,null,null,a),ss._currentValue=l),Ho(t,e),wn(t,e,r,a),e.child;case 6:return t===null&&pe&&((t=a=xn)&&(a=O5(a,e.pendingProps,Ra),a!==null?(e.stateNode=a,Mn=e,xn=null,t=!0):t=!1),t||Wi(e)),null;case 13:return Hp(t,e,a);case 4:return Oe(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,a):wn(t,e,r,a),e.child;case 11:return Bp(t,e,e.type,e.pendingProps,a);case 7:return wn(t,e,e.pendingProps,a),e.child;case 8:return wn(t,e,e.pendingProps.children,a),e.child;case 12:return wn(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,wi(e,e.type,r.value),wn(t,e,r.children,a),e.child;case 9:return l=e.type._context,r=e.pendingProps.children,rr(e),l=Tn(l),r=r(l),e.flags|=1,wn(t,e,r,a),e.child;case 14:return Np(t,e,e.type,e.pendingProps,a);case 15:return Lp(t,e,e.type,e.pendingProps,a);case 19:return Yp(t,e,a);case 22:return _p(t,e,a);case 24:return rr(e),r=Tn(fn),t===null?(l=wc(),l===null&&(l=je,c=bc(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),e.memoizedState={parent:r,cache:l},Ic(e),wi(e,fn,l)):((t.lanes&a)!==0&&(tf(t,e),Xo(e,null,null,a),Go()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),wi(e,fn,r)):(r=c.cache,wi(e,fn,r),r!==l.cache&&Jc(e,[fn],a,!0))),wn(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}var Zc=St(null),ir=null,Xa=null;function wi(t,e,a){Nt(Zc,e._currentValue),e._currentValue=a}function Ka(t){t._currentValue=Zc.current,H(Zc)}function Wc(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function Jc(t,e,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var g=l.child;c=c.firstContext;t:for(;c!==null;){var w=c;c=l;for(var R=0;R<e.length;R++)if(w.context===e[R]){c.lanes|=a,w=c.alternate,w!==null&&(w.lanes|=a),Wc(c.return,a,t),r||(g=null);break t}c=w.next}}else if(l.tag===18){if(g=l.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Wc(g,a,t),g=null}else g=l.child;if(g!==null)g.return=l;else for(g=l;g!==null;){if(g===t){g=null;break}if(l=g.sibling,l!==null){l.return=g.return,g=l;break}g=g.return}l=g}}function qo(t,e,a,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var g=l.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var w=l.type;qn(l.pendingProps.value,g.value)||(t!==null?t.push(w):t=[w])}}else if(l===ce.current){if(g=l.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(ss):t=[ss])}l=l.return}t!==null&&Jc(e,t,a,r),e.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ir=t,Xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Xp(ir,t)}function zl(t,e){return ir===null&&rr(t),Xp(t,e)}function Xp(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Xa===null){if(t===null)throw Error(s(308));Xa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xa=Xa.next=e;return a}var Si=!1;function Ic(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ei(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ci(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=ul(t),jh(t,null,a),e}return ll(t,r,e,a),ul(t)}function Yo(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194176)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,U(t,a)}}function ef(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?l=c=e:c=c.next=e}else l=c=e;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var nf=!1;function Go(){if(nf){var t=Br;if(t!==null)throw t}}function Xo(t,e,a,r){nf=!1;var l=t.updateQueue;Si=!1;var c=l.firstBaseUpdate,g=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var R=w,V=R.next;R.next=null,g===null?c=V:g.next=V,g=R;var tt=t.alternate;tt!==null&&(tt=tt.updateQueue,w=tt.lastBaseUpdate,w!==g&&(w===null?tt.firstBaseUpdate=V:w.next=V,tt.lastBaseUpdate=R))}if(c!==null){var lt=l.baseState;g=0,tt=V=R=null,w=c;do{var Y=w.lane&-536870913,J=Y!==w.lane;if(J?(le&Y)===Y:(r&Y)===Y){Y!==0&&Y===Dr&&(nf=!0),tt!==null&&(tt=tt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Ot=t,qt=w;Y=e;var Ze=a;switch(qt.tag){case 1:if(Ot=qt.payload,typeof Ot=="function"){lt=Ot.call(Ze,lt,Y);break t}lt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=qt.payload,Y=typeof Ot=="function"?Ot.call(Ze,lt,Y):Ot,Y==null)break t;lt=yt({},lt,Y);break t;case 2:Si=!0}}Y=w.callback,Y!==null&&(t.flags|=64,J&&(t.flags|=8192),J=l.callbacks,J===null?l.callbacks=[Y]:J.push(Y))}else J={lane:Y,tag:w.tag,payload:w.payload,callback:w.callback,next:null},tt===null?(V=tt=J,R=lt):tt=tt.next=J,g|=Y;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;J=w,w=J.next,J.next=null,l.lastBaseUpdate=J,l.shared.pending=null}}while(!0);tt===null&&(R=lt),l.baseState=R,l.firstBaseUpdate=V,l.lastBaseUpdate=tt,c===null&&(l.shared.lanes=0),zi|=g,t.lanes=g,t.memoizedState=lt}}function Kp(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Qp(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Kp(a[t],e)}function Ko(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==l)}}catch(w){Ae(e,e.return,w)}}function Ai(t,e,a){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var g=r.inst,w=g.destroy;if(w!==void 0){g.destroy=void 0,l=e;var R=a;try{w()}catch(V){Ae(l,R,V)}}}r=r.next}while(r!==c)}}catch(V){Ae(e,e.return,V)}}function Fp(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Qp(e,a)}catch(r){Ae(t,t.return,r)}}}function Zp(t,e,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ae(t,e,r)}}function or(t,e){try{var a=t.ref;if(a!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var l=r;break;default:l=r}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(c){Ae(t,e,c)}}function Yn(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Ae(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ae(t,e,l)}else a.current=null}function Wp(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Ae(t,t.return,l)}}function Jp(t,e,a){try{var r=t.stateNode;T5(r,t.type,a,e),r[Ut]=e}catch(l){Ae(t,t.return,l)}}function Ip(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function af(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.nodeType===8?a.parentNode.insertBefore(t,e):a.insertBefore(t,e):(a.nodeType===8?(e=a.parentNode,e.insertBefore(t,a)):(e=a,e.appendChild(t)),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ql));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(rf(t,e,a),t=t.sibling;t!==null;)rf(t,e,a),t=t.sibling}function Ml(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(Ml(t,e,a),t=t.sibling;t!==null;)Ml(t,e,a),t=t.sibling}var Qa=!1,Qe=!1,of=!1,tm=typeof WeakSet=="function"?WeakSet:Set,pn=null,em=!1;function n5(t,e){if(t=t.containerInfo,Bf=Zl,t=yh(t),sc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var l=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,w=-1,R=-1,V=0,tt=0,lt=t,Y=null;e:for(;;){for(var J;lt!==a||l!==0&&lt.nodeType!==3||(w=g+l),lt!==c||r!==0&&lt.nodeType!==3||(R=g+r),lt.nodeType===3&&(g+=lt.nodeValue.length),(J=lt.firstChild)!==null;)Y=lt,lt=J;for(;;){if(lt===t)break e;if(Y===a&&++V===l&&(w=g),Y===c&&++tt===r&&(R=g),(J=lt.nextSibling)!==null)break;lt=Y,Y=lt.parentNode}lt=J}a=w===-1||R===-1?null:{start:w,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:t,selectionRange:a},Zl=!1,pn=e;pn!==null;)if(e=pn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pn=t;else for(;pn!==null;){switch(e=pn,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,l=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var Ot=ar(a.type,l,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(Ot,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(qt){Ae(a,a.return,qt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Pf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Pf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,pn=t;break}pn=e.return}return Ot=em,em=!1,Ot}function nm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Za(t,a),r&4&&Ko(5,a);break;case 1:if(Za(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(w){Ae(a,a.return,w)}else{var l=ar(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(w){Ae(a,a.return,w)}}r&64&&Fp(a),r&512&&or(a,a.return);break;case 3:if(Za(t,a),r&64&&(r=a.updateQueue,r!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Qp(r,t)}catch(w){Ae(a,a.return,w)}}break;case 26:Za(t,a),r&512&&or(a,a.return);break;case 27:case 5:Za(t,a),e===null&&r&4&&Wp(a),r&512&&or(a,a.return);break;case 12:Za(t,a);break;case 13:Za(t,a),r&4&&rm(t,a);break;case 22:if(l=a.memoizedState!==null||Qa,!l){e=e!==null&&e.memoizedState!==null||Qe;var c=Qa,g=Qe;Qa=l,(Qe=e)&&!g?Ti(t,a,(a.subtreeFlags&8772)!==0):Za(t,a),Qa=c,Qe=g}r&512&&(a.memoizedProps.mode==="manual"?or(a,a.return):Yn(a,a.return));break;default:Za(t,a)}}function am(t){var e=t.alternate;e!==null&&(t.alternate=null,am(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Zt(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,Gn=!1;function Fa(t,e,a){for(a=a.child;a!==null;)im(t,e,a),a=a.sibling}function im(t,e,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:Qe||Yn(a,e),Fa(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||Yn(a,e);var r=ln,l=Gn;for(ln=a.stateNode,Fa(t,e,a),a=a.stateNode,e=a.attributes;e.length;)a.removeAttributeNode(e[0]);Zt(a),ln=r,Gn=l;break;case 5:Qe||Yn(a,e);case 6:l=ln;var c=Gn;if(ln=null,Fa(t,e,a),ln=l,Gn=c,ln!==null)if(Gn)try{t=ln,r=a.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(g){Ae(a,e,g)}else try{ln.removeChild(a.stateNode)}catch(g){Ae(a,e,g)}break;case 18:ln!==null&&(Gn?(e=ln,a=a.stateNode,e.nodeType===8?Vf(e.parentNode,a):e.nodeType===1&&Vf(e,a),fs(e)):Vf(ln,a.stateNode));break;case 4:r=ln,l=Gn,ln=a.stateNode.containerInfo,Gn=!0,Fa(t,e,a),ln=r,Gn=l;break;case 0:case 11:case 14:case 15:Qe||Ai(2,a,e),Qe||Ai(4,a,e),Fa(t,e,a);break;case 1:Qe||(Yn(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Zp(a,e,r)),Fa(t,e,a);break;case 21:Fa(t,e,a);break;case 22:Qe||Yn(a,e),Qe=(r=Qe)||a.memoizedState!==null,Fa(t,e,a),Qe=r;break;default:Fa(t,e,a)}}function rm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Ae(e,e.return,a)}}function a5(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new tm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new tm),e;default:throw Error(s(435,t.tag))}}function sf(t,e){var a=a5(t);e.forEach(function(r){var l=g5.bind(null,t,r);a.has(r)||(a.add(r),r.then(l,l))})}function oa(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r],c=t,g=e,w=g;t:for(;w!==null;){switch(w.tag){case 27:case 5:ln=w.stateNode,Gn=!1;break t;case 3:ln=w.stateNode.containerInfo,Gn=!0;break t;case 4:ln=w.stateNode.containerInfo,Gn=!0;break t}w=w.return}if(ln===null)throw Error(s(160));im(c,g,l),ln=null,Gn=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)om(e,t),e=e.sibling}var ya=null;function om(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oa(e,t),sa(t),r&4&&(Ai(3,t,t.return),Ko(3,t),Ai(5,t,t.return));break;case 1:oa(e,t),sa(t),r&512&&(Qe||a===null||Yn(a,a.return)),r&64&&Qa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var l=ya;if(oa(e,t),sa(t),r&512&&(Qe||a===null||Yn(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,l=l.ownerDocument||l;e:switch(r){case"title":c=l.getElementsByTagName("title")[0],(!c||c[ee]||c[kt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(r),l.head.insertBefore(c,l.querySelector("head > title"))),Sn(c,r,a),c[kt]=t,Qt(c),r=c;break t;case"link":var g=Wm("link","href",l).get(r+(a.href||""));if(g){for(var w=0;w<g.length;w++)if(c=g[w],c.getAttribute("href")===(a.href==null?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(w,1);break e}}c=l.createElement(r),Sn(c,r,a),l.head.appendChild(c);break;case"meta":if(g=Wm("meta","content",l).get(r+(a.content||""))){for(w=0;w<g.length;w++)if(c=g[w],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(w,1);break e}}c=l.createElement(r),Sn(c,r,a),l.head.appendChild(c);break;default:throw Error(s(468,r))}c[kt]=t,Qt(c),r=c}t.stateNode=r}else Jm(l,t.type,t.stateNode);else t.stateNode=Zm(l,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?Jm(l,t.type,t.stateNode):Zm(l,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Jp(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){l=t.stateNode,c=t.memoizedProps;try{for(var R=l.firstChild;R;){var V=R.nextSibling,tt=R.nodeName;R[ee]||tt==="HEAD"||tt==="BODY"||tt==="SCRIPT"||tt==="STYLE"||tt==="LINK"&&R.rel.toLowerCase()==="stylesheet"||l.removeChild(R),R=V}for(var lt=t.type,Y=l.attributes;Y.length;)l.removeAttributeNode(Y[0]);Sn(l,lt,c),l[kt]=t,l[Ut]=c}catch(Ot){Ae(t,t.return,Ot)}}case 5:if(oa(e,t),sa(t),r&512&&(Qe||a===null||Yn(a,a.return)),t.flags&32){l=t.stateNode;try{An(l,"")}catch(Ot){Ae(t,t.return,Ot)}}r&4&&t.stateNode!=null&&(l=t.memoizedProps,Jp(t,l,a!==null?a.memoizedProps:l)),r&1024&&(of=!0);break;case 6:if(oa(e,t),sa(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ot){Ae(t,t.return,Ot)}}break;case 3:if(Kl=null,l=ya,ya=Gl(e.containerInfo),oa(e,t),ya=l,sa(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(e.containerInfo)}catch(Ot){Ae(t,t.return,Ot)}of&&(of=!1,sm(t));break;case 4:r=ya,ya=Gl(t.stateNode.containerInfo),oa(e,t),sa(t),ya=r;break;case 12:oa(e,t),sa(t);break;case 13:oa(e,t),sa(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gf=Yt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,sf(t,r)));break;case 22:if(r&512&&(Qe||a===null||Yn(a,a.return)),R=t.memoizedState!==null,V=a!==null&&a.memoizedState!==null,tt=Qa,lt=Qe,Qa=tt||R,Qe=lt||V,oa(e,t),Qe=lt,Qa=tt,sa(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=R?e._visibility&-2:e._visibility|1,R&&(e=Qa||Qe,a===null||V||e||Vr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(a===null){V=a=e;try{if(l=V.stateNode,R)c=l.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{g=V.stateNode,w=V.memoizedProps.style;var J=w!=null&&w.hasOwnProperty("display")?w.display:null;g.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ot){Ae(V,V.return,Ot)}}}else if(e.tag===6){if(a===null){V=e;try{V.stateNode.nodeValue=R?"":V.memoizedProps}catch(Ot){Ae(V,V.return,Ot)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,sf(t,a))));break;case 19:oa(e,t),sa(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,sf(t,r)));break;case 21:break;default:oa(e,t),sa(t)}}function sa(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(Ip(a)){var r=a;break t}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var l=r.stateNode,c=af(t);Ml(t,c,l);break;case 5:var g=r.stateNode;r.flags&32&&(An(g,""),r.flags&=-33);var w=af(t);Ml(t,w,g);break;case 3:case 4:var R=r.stateNode.containerInfo,V=af(t);rf(t,V,R);break;default:throw Error(s(161))}}}catch(tt){Ae(t,t.return,tt)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;sm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Za(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)nm(t,e.alternate,e),e=e.sibling}function Vr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ai(4,e,e.return),Vr(e);break;case 1:Yn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Zp(e,e.return,a),Vr(e);break;case 26:case 27:case 5:Yn(e,e.return),Vr(e);break;case 22:Yn(e,e.return),e.memoizedState===null&&Vr(e);break;default:Vr(e)}t=t.sibling}}function Ti(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Ti(l,c,a),Ko(4,c);break;case 1:if(Ti(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(V){Ae(r,r.return,V)}if(r=c,l=r.updateQueue,l!==null){var w=r.stateNode;try{var R=l.shared.hiddenCallbacks;if(R!==null)for(l.shared.hiddenCallbacks=null,l=0;l<R.length;l++)Kp(R[l],w)}catch(V){Ae(r,r.return,V)}}a&&g&64&&Fp(c),or(c,c.return);break;case 26:case 27:case 5:Ti(l,c,a),a&&r===null&&g&4&&Wp(c),or(c,c.return);break;case 12:Ti(l,c,a);break;case 13:Ti(l,c,a),a&&g&4&&rm(l,c);break;case 22:c.memoizedState===null&&Ti(l,c,a),or(c,c.return);break;default:Ti(l,c,a)}e=e.sibling}}function lf(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&_o(a))}function uf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_o(t))}function ji(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lm(t,e,a,r),e=e.sibling}function lm(t,e,a,r){var l=e.flags;switch(e.tag){case 0:case 11:case 15:ji(t,e,a,r),l&2048&&Ko(9,e);break;case 3:ji(t,e,a,r),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&_o(t)));break;case 12:if(l&2048){ji(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,w=c.onPostCommit;typeof w=="function"&&w(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){Ae(e,e.return,R)}}else ji(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,e.memoizedState!==null?c._visibility&4?ji(t,e,a,r):Qo(t,e):c._visibility&4?ji(t,e,a,r):(c._visibility|=4,Pr(t,e,a,r,(e.subtreeFlags&10256)!==0)),l&2048&&lf(e.alternate,e);break;case 24:ji(t,e,a,r),l&2048&&uf(e.alternate,e);break;default:ji(t,e,a,r)}}function Pr(t,e,a,r,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,w=a,R=r,V=g.flags;switch(g.tag){case 0:case 11:case 15:Pr(c,g,w,R,l),Ko(8,g);break;case 23:break;case 22:var tt=g.stateNode;g.memoizedState!==null?tt._visibility&4?Pr(c,g,w,R,l):Qo(c,g):(tt._visibility|=4,Pr(c,g,w,R,l)),l&&V&2048&&lf(g.alternate,g);break;case 24:Pr(c,g,w,R,l),l&&V&2048&&uf(g.alternate,g);break;default:Pr(c,g,w,R,l)}e=e.sibling}}function Qo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,l=r.flags;switch(r.tag){case 22:Qo(a,r),l&2048&&lf(r.alternate,r);break;case 24:Qo(a,r),l&2048&&uf(r.alternate,r);break;default:Qo(a,r)}e=e.sibling}}var Fo=8192;function Ur(t){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)um(t),t=t.sibling}function um(t){switch(t.tag){case 26:Ur(t),t.flags&Fo&&t.memoizedState!==null&&G5(ya,t.memoizedState,t.memoizedProps);break;case 5:Ur(t);break;case 3:case 4:var e=ya;ya=Gl(t.stateNode.containerInfo),Ur(t),ya=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Fo,Fo=16777216,Ur(t),Fo=e):Ur(t));break;default:Ur(t)}}function cm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Zo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];pn=r,dm(r,t)}cm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fm(t),t=t.sibling}function fm(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&Ai(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,kl(t)):Zo(t);break;default:Zo(t)}}function kl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];pn=r,dm(r,t)}cm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ai(8,e,e.return),kl(e);break;case 22:a=e.stateNode,a._visibility&4&&(a._visibility&=-5,kl(e));break;default:kl(e)}t=t.sibling}}function dm(t,e){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:Ai(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:_o(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,pn=r;else t:for(a=t;pn!==null;){r=pn;var l=r.sibling,c=r.return;if(am(r),r===a){pn=null;break t}if(l!==null){l.return=c,pn=l;break t}pn=c}}}function i5(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(t,e,a,r){return new i5(t,e,a,r)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,e){var a=t.alternate;return a===null?(a=la(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hm(t,e){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ol(t,e,a,r,l,c){var g=0;if(r=t,typeof t=="function")cf(t)&&(g=1);else if(typeof t=="string")g=q5(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case h:return sr(a.children,l,c,e);case m:g=8,l|=24;break;case v:return t=la(12,a,e,l|2),t.elementType=v,t.lanes=c,t;case z:return t=la(13,a,e,l),t.elementType=z,t.lanes=c,t;case M:return t=la(19,a,e,l),t.elementType=M,t.lanes=c,t;case O:return pm(a,l,c,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b:case S:g=10;break t;case x:g=9;break t;case C:g=11;break t;case A:g=14;break t;case D:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=la(g,a,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function sr(t,e,a,r){return t=la(7,t,r,e),t.lanes=a,t}function pm(t,e,a,r){t=la(22,t,r,e),t.elementType=O,t.lanes=a;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var c=l._current;if(c===null)throw Error(s(456));if((l._pendingVisibility&2)===0){var g=gi(c,2);g!==null&&(l._pendingVisibility|=2,kn(g,c,2))}},attach:function(){var c=l._current;if(c===null)throw Error(s(456));if((l._pendingVisibility&2)!==0){var g=gi(c,2);g!==null&&(l._pendingVisibility&=-3,kn(g,c,2))}}};return t.stateNode=l,t}function ff(t,e,a){return t=la(6,t,null,e),t.lanes=a,t}function df(t,e,a){return e=la(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wa(t){t.flags|=4}function mm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Im(e)){if(e=ra.current,e!==null&&((le&4194176)===le?za!==null:(le&62914560)!==le&&(le&536870912)===0||e!==za))throw Bo=gc,Oh;t.flags|=8192}}function Dl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Zn():536870912,t.lanes|=e,Hr|=e)}function Wo(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&31457280,r|=l.flags&31457280,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function r5(t,e,a){var r=e.pendingProps;switch(pc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return _e(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Ka(fn),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Mo(e)?Wa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,va!==null&&(xf(va),va=null))),_e(e),null;case 26:return a=e.memoizedState,t===null?(Wa(e),a!==null?(_e(e),mm(e,a)):(_e(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Wa(e),_e(e),mm(e,a)):(_e(e),e.flags&=-16777217):(t.memoizedProps!==r&&Wa(e),_e(e),e.flags&=-16777217),null;case 27:Pt(e),a=$t.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Wa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return _e(e),null}t=bt.current,Mo(e)?Mh(e):(t=Gm(l,r,a),e.stateNode=t,Wa(e))}return _e(e),null;case 5:if(Pt(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Wa(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return _e(e),null}if(t=bt.current,Mo(e))Mh(e);else{switch(l=Yl($t.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?l.createElement(a,{is:r.is}):l.createElement(a)}}t[kt]=e,t[Ut]=r;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Sn(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Wa(e)}}return _e(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Wa(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=$t.current,Mo(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[kt]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Pm(t.nodeValue,a)),t||Wi(e)}else t=Yl(t).createTextNode(r),t[kt]=e,e.stateNode=t}return _e(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[kt]=e}else ko(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_e(e),l=!1}else va!==null&&(xf(va),va=null),l=!0;if(!l)return e.flags&256?(qa(e),e):(qa(e),null)}if(qa(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Dl(e,e.updateQueue),_e(e),null;case 4:return Vt(),t===null&&kf(e.stateNode.containerInfo),_e(e),null;case 10:return Ka(e.type),_e(e),null;case 19:if(H(cn),l=e.memoizedState,l===null)return _e(e),null;if(r=(e.flags&128)!==0,c=l.rendering,c===null)if(r)Wo(l,!1);else{if(Fe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=gl(t),c!==null){for(e.flags|=128,Wo(l,!1),t=c.updateQueue,e.updateQueue=t,Dl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)hm(a,t),a=a.sibling;return Nt(cn,cn.current&1|2),e.child}t=t.sibling}l.tail!==null&&Yt()>Bl&&(e.flags|=128,r=!0,Wo(l,!1),e.lanes=4194304)}else{if(!r)if(t=gl(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Dl(e,t),Wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!pe)return _e(e),null}else 2*Yt()-l.renderingStartTime>Bl&&a!==536870912&&(e.flags|=128,r=!0,Wo(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(t=l.last,t!==null?t.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Yt(),e.sibling=null,t=cn.current,Nt(cn,r?t&1|2:t&1),e):(_e(e),null);case 22:case 23:return qa(e),yc(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),a=e.updateQueue,a!==null&&Dl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&H(Ii),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ka(fn),_e(e),null;case 25:return null}throw Error(s(156,e.tag))}function o5(t,e){switch(pc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ka(fn),Vt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Pt(e),null;case 13:if(qa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(cn),null;case 4:return Vt(),null;case 10:return Ka(e.type),null;case 22:case 23:return qa(e),yc(),t!==null&&H(Ii),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ka(fn),null;case 25:return null;default:return null}}function gm(t,e){switch(pc(e),e.tag){case 3:Ka(fn),Vt();break;case 26:case 27:case 5:Pt(e);break;case 4:Vt();break;case 13:qa(e);break;case 19:H(cn);break;case 10:Ka(e.type);break;case 22:case 23:qa(e),yc(),t!==null&&H(Ii);break;case 24:Ka(fn)}}var s5={getCacheForType:function(t){var e=Tn(fn),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},l5=typeof WeakMap=="function"?WeakMap:Map,Ve=0,je=null,ne=null,le=0,Re=0,Xn=null,Ja=!1,$r=!1,hf=!1,Ia=0,Fe=0,zi=0,lr=0,pf=0,ua=0,Hr=0,Jo=null,ka=null,mf=!1,gf=0,Bl=1/0,Nl=null,Mi=null,Ll=!1,ur=null,Io=0,vf=0,yf=null,ts=0,bf=null;function Kn(){if((Ve&2)!==0&&le!==0)return le&-le;if(Q.T!==null){var t=Dr;return t!==0?t:jf()}return mt()}function vm(){ua===0&&(ua=(le&536870912)===0||pe?Ye():536870912);var t=ra.current;return t!==null&&(t.flags|=32),ua}function kn(t,e,a){(t===je&&Re===2||t.cancelPendingCommit!==null)&&(qr(t,0),ti(t,le,ua,!1)),yn(t,a),((Ve&2)===0||t!==je)&&(t===je&&((Ve&2)===0&&(lr|=a),Fe===4&&ti(t,le,ua,!1)),Oa(t))}function ym(t,e,a){if((Ve&6)!==0)throw Error(s(327));var r=!a&&(e&60)===0&&(e&t.expiredLanes)===0||be(t,e),l=r?f5(t,e):Ef(t,e,!0),c=r;do{if(l===0){$r&&!r&&ti(t,e,0,!1);break}else if(l===6)ti(t,e,0,!Ja);else{if(a=t.current.alternate,c&&!u5(a)){l=Ef(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var w=t;l=Jo;var R=w.current.memoizedState.isDehydrated;if(R&&(qr(w,g).flags|=256),g=Ef(w,g,!1),g!==2){if(hf&&!R){w.errorRecoveryDisabledLanes|=c,lr|=c,l=4;break t}c=ka,ka=l,c!==null&&xf(c)}l=g}if(c=!1,l!==2)continue}}if(l===1){qr(t,0),ti(t,e,0,!0);break}t:{switch(r=t,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194176)===e){ti(r,e,ua,!Ja);break t}break;case 2:ka=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=e,(e&62914560)===e&&(c=gf+300-Yt(),10<c)){if(ti(r,e,ua,!Ja),Ie(r,0)!==0)break t;r.timeoutHandle=Hm(bm.bind(null,r,a,ka,Nl,mf,e,ua,lr,Hr,Ja,2,-0,0),c);break t}bm(r,a,ka,Nl,mf,e,ua,lr,Hr,Ja,0,-0,0)}}break}while(!0);Oa(t)}function xf(t){ka===null?ka=t:ka.push.apply(ka,t)}function bm(t,e,a,r,l,c,g,w,R,V,tt,lt,Y){var J=e.subtreeFlags;if((J&8192||(J&16785408)===16785408)&&(os={stylesheets:null,count:0,unsuspend:Y5},um(e),e=X5(),e!==null)){t.cancelPendingCommit=e(Tm.bind(null,t,a,r,l,g,w,R,1,lt,Y)),ti(t,c,g,!V);return}Tm(t,a,r,l,g,w,R,tt,lt,Y)}function u5(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!qn(c(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(t,e,a,r){e&=~pf,e&=~lr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-Ct(l),g=1<<c;r[c]=-1,l&=~g}a!==0&&F(t,a,e)}function _l(){return(Ve&6)===0?(es(0),!1):!0}function wf(){if(ne!==null){if(Re===0)var t=ne.return;else t=ne,Xa=ir=null,Tc(t),kr=null,No=0,t=ne;for(;t!==null;)gm(t.alternate,t),t=t.return;ne=null}}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,R5(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),wf(),je=t,ne=a=Ri(t.current,null),le=e,Re=0,Xn=null,Ja=!1,$r=be(t,e),hf=!1,Hr=ua=pf=lr=zi=Fe=0,ka=Jo=null,mf=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var l=31-Ct(r),c=1<<l;e|=t[l],r&=~c}return Ia=e,sl(),a}function xm(t,e){Wt=null,Q.H=Ma,e===Do?(e=Nh(),Re=3):e===Oh?(e=Nh(),Re=4):Re=e===Dp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Xn=e,ne===null&&(Fe=1,jl(t,na(e,t.current)))}function wm(){var t=Q.H;return Q.H=Ma,t===null?Ma:t}function Sm(){var t=Q.A;return Q.A=s5,t}function Sf(){Fe=4,Ja||(le&4194176)!==le&&ra.current!==null||($r=!0),(zi&134217727)===0&&(lr&134217727)===0||je===null||ti(je,le,ua,!1)}function Ef(t,e,a){var r=Ve;Ve|=2;var l=wm(),c=Sm();(je!==t||le!==e)&&(Nl=null,qr(t,e)),e=!1;var g=Fe;t:do try{if(Re!==0&&ne!==null){var w=ne,R=Xn;switch(Re){case 8:wf(),g=6;break t;case 3:case 2:case 6:ra.current===null&&(e=!0);var V=Re;if(Re=0,Xn=null,Yr(t,w,R,V),a&&$r){g=0;break t}break;default:V=Re,Re=0,Xn=null,Yr(t,w,R,V)}}c5(),g=Fe;break}catch(tt){xm(t,tt)}while(!0);return e&&t.shellSuspendCounter++,Xa=ir=null,Ve=r,Q.H=l,Q.A=c,ne===null&&(je=null,le=0,sl()),g}function c5(){for(;ne!==null;)Em(ne)}function f5(t,e){var a=Ve;Ve|=2;var r=wm(),l=Sm();je!==t||le!==e?(Nl=null,Bl=Yt()+500,qr(t,e)):$r=be(t,e);t:do try{if(Re!==0&&ne!==null){e=ne;var c=Xn;e:switch(Re){case 1:Re=0,Xn=null,Yr(t,e,c,1);break;case 2:if(Dh(c)){Re=0,Xn=null,Cm(e);break}e=function(){Re===2&&je===t&&(Re=7),Oa(t)},c.then(e,e);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:Dh(c)?(Re=0,Xn=null,Cm(e)):(Re=0,Xn=null,Yr(t,e,c,7));break;case 5:var g=null;switch(ne.tag){case 26:g=ne.memoizedState;case 5:case 27:var w=ne;if(!g||Im(g)){Re=0,Xn=null;var R=w.sibling;if(R!==null)ne=R;else{var V=w.return;V!==null?(ne=V,Vl(V)):ne=null}break e}}Re=0,Xn=null,Yr(t,e,c,5);break;case 6:Re=0,Xn=null,Yr(t,e,c,6);break;case 8:wf(),Fe=6;break t;default:throw Error(s(462))}}d5();break}catch(tt){xm(t,tt)}while(!0);return Xa=ir=null,Q.H=r,Q.A=l,Ve=a,ne!==null?0:(je=null,le=0,sl(),Fe)}function d5(){for(;ne!==null&&!te();)Em(ne)}function Em(t){var e=Gp(t.alternate,t,Ia);t.memoizedProps=t.pendingProps,e===null?Vl(t):ne=e}function Cm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Pp(a,e,e.pendingProps,e.type,void 0,le);break;case 11:e=Pp(a,e,e.pendingProps,e.type.render,e.ref,le);break;case 5:Tc(e);default:gm(a,e),e=ne=hm(e,Ia),e=Gp(a,e,Ia)}t.memoizedProps=t.pendingProps,e===null?Vl(t):ne=e}function Yr(t,e,a,r){Xa=ir=null,Tc(e),kr=null,No=0;var l=e.return;try{if(t5(t,l,e,a,le)){Fe=1,jl(t,na(a,t.current)),ne=null;return}}catch(c){if(l!==null)throw ne=l,c;Fe=1,jl(t,na(a,t.current)),ne=null;return}e.flags&32768?(pe||r===1?t=!0:$r||(le&536870912)!==0?t=!1:(Ja=t=!0,(r===2||r===3||r===6)&&(r=ra.current,r!==null&&r.tag===13&&(r.flags|=16384))),Am(e,t)):Vl(e)}function Vl(t){var e=t;do{if((e.flags&32768)!==0){Am(e,Ja);return}t=e.return;var a=r5(e.alternate,e,Ia);if(a!==null){ne=a;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);Fe===0&&(Fe=5)}function Am(t,e){do{var a=o5(t.alternate,t);if(a!==null){a.flags&=32767,ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ne=t;return}ne=t=a}while(t!==null);Fe=6,ne=null}function Tm(t,e,a,r,l,c,g,w,R,V){var tt=Q.T,lt=pt.p;try{pt.p=2,Q.T=null,h5(t,e,a,r,lt,l,c,g,w,R,V)}finally{Q.T=tt,pt.p=lt}}function h5(t,e,a,r,l,c,g,w){do Gr();while(ur!==null);if((Ve&6)!==0)throw Error(s(327));var R=t.finishedWork;if(r=t.finishedLanes,R===null)return null;if(t.finishedWork=null,t.finishedLanes=0,R===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var V=R.lanes|R.childLanes;if(V|=fc,$(t,r,V,c,g,w),t===je&&(ne=je=null,le=0),(R.subtreeFlags&10256)===0&&(R.flags&10256)===0||Ll||(Ll=!0,vf=V,yf=a,v5(Ht,function(){return Gr(),null})),a=(R.flags&15990)!==0,(R.subtreeFlags&15990)!==0||a?(a=Q.T,Q.T=null,c=pt.p,pt.p=2,g=Ve,Ve|=4,n5(t,R),om(R,t),_b(Nf,t.containerInfo),Zl=!!Bf,Nf=Bf=null,t.current=R,nm(t,R.alternate,R),De(),Ve=g,pt.p=c,Q.T=a):t.current=R,Ll?(Ll=!1,ur=t,Io=r):jm(t,V),V=t.pendingLanes,V===0&&(Mi=null),ct(R.stateNode),Oa(t),e!==null)for(l=t.onRecoverableError,R=0;R<e.length;R++)V=e[R],l(V.value,{componentStack:V.stack});return(Io&3)!==0&&Gr(),V=t.pendingLanes,(r&4194218)!==0&&(V&42)!==0?t===bf?ts++:(ts=0,bf=t):ts=0,es(0),null}function jm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,_o(e)))}function Gr(){if(ur!==null){var t=ur,e=vf;vf=0;var a=X(Io),r=Q.T,l=pt.p;try{if(pt.p=32>a?32:a,Q.T=null,ur===null)var c=!1;else{a=yf,yf=null;var g=ur,w=Io;if(ur=null,Io=0,(Ve&6)!==0)throw Error(s(331));var R=Ve;if(Ve|=4,fm(g.current),lm(g,g.current,w,a),Ve=R,es(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ht,g)}catch{}c=!0}return c}finally{pt.p=l,Q.T=r,jm(t,e)}}return!1}function Rm(t,e,a){e=na(a,e),e=Uc(t.stateNode,e,2),t=Ci(t,e,2),t!==null&&(yn(t,2),Oa(t))}function Ae(t,e,a){if(t.tag===3)Rm(t,t,a);else for(;e!==null;){if(e.tag===3){Rm(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mi===null||!Mi.has(r))){t=na(a,t),a=kp(2),r=Ci(e,a,2),r!==null&&(Op(a,r,e,t),yn(r,2),Oa(r));break}}e=e.return}}function Cf(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new l5;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(a)||(hf=!0,l.add(a),t=p5.bind(null,t,e,a),e.then(t,t))}function p5(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(le&a)===a&&(Fe===4||Fe===3&&(le&62914560)===le&&300>Yt()-gf?(Ve&2)===0&&qr(t,0):pf|=a,Hr===le&&(Hr=0)),Oa(t)}function zm(t,e){e===0&&(e=Zn()),t=gi(t,e),t!==null&&(yn(t,e),Oa(t))}function m5(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),zm(t,a)}function g5(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),zm(t,a)}function v5(t,e){return $e(t,e)}var Pl=null,Xr=null,Af=!1,Ul=!1,Tf=!1,cr=0;function Oa(t){t!==Xr&&t.next===null&&(Xr===null?Pl=Xr=t:Xr=Xr.next=t),Ul=!0,Af||(Af=!0,b5(y5))}function es(t,e){if(!Tf&&Ul){Tf=!0;do for(var a=!1,r=Pl;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var g=r.suspendedLanes,w=r.pingedLanes;c=(1<<31-Ct(42|t)+1)-1,c&=l&~(g&~w),c=c&201326677?c&201326677|1:c?c|2:0}c!==0&&(a=!0,Om(r,c))}else c=le,c=Ie(r,r===je?c:0),(c&3)===0||be(r,c)||(a=!0,Om(r,c));r=r.next}while(a);Tf=!1}}function y5(){Ul=Af=!1;var t=0;cr!==0&&(j5()&&(t=cr),cr=0);for(var e=Yt(),a=null,r=Pl;r!==null;){var l=r.next,c=Mm(r,e);c===0?(r.next=null,a===null?Pl=l:a.next=l,l===null&&(Xr=a)):(a=r,(t!==0||(c&3)!==0)&&(Ul=!0)),r=l}es(t)}function Mm(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Ct(c),w=1<<g,R=l[g];R===-1?((w&a)===0||(w&r)!==0)&&(l[g]=qe(w,e)):R<=e&&(t.expiredLanes|=w),c&=~w}if(e=je,a=le,a=Ie(t,t===e?a:0),r=t.callbackNode,a===0||t===e&&Re===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ye(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||be(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&ye(r),X(a)){case 2:case 8:a=ae;break;case 32:a=Ht;break;case 268435456:a=_;break;default:a=Ht}return r=km.bind(null,t),a=$e(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&ye(r),t.callbackPriority=2,t.callbackNode=null,2}function km(t,e){var a=t.callbackNode;if(Gr()&&t.callbackNode!==a)return null;var r=le;return r=Ie(t,t===je?r:0),r===0?null:(ym(t,r,e),Mm(t,Yt()),t.callbackNode!=null&&t.callbackNode===a?km.bind(null,t):null)}function Om(t,e){if(Gr())return null;ym(t,e,!0)}function b5(t){z5(function(){(Ve&6)!==0?$e(vn,t):t()})}function jf(){return cr===0&&(cr=Ye()),cr}function Dm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pi(""+t)}function Bm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function x5(t,e,a,r,l){if(e==="submit"&&a&&a.stateNode===l){var c=Dm((l[Ut]||null).action),g=r.submitter;g&&(e=(e=g[Ut]||null)?Dm(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var w=new il("action","action",null,r,l);t.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(cr!==0){var R=g?Bm(l,g):new FormData(l);Nc(a,{pending:!0,data:R,method:l.method,action:c},null,R)}}else typeof c=="function"&&(w.preventDefault(),R=g?Bm(l,g):new FormData(l),Nc(a,{pending:!0,data:R,method:l.method,action:c},c,R))},currentTarget:l}]})}}for(var Rf=0;Rf<Th.length;Rf++){var zf=Th[Rf],w5=zf.toLowerCase(),S5=zf[0].toUpperCase()+zf.slice(1);ga(w5,"on"+S5)}ga(wh,"onAnimationEnd"),ga(Sh,"onAnimationIteration"),ga(Eh,"onAnimationStart"),ga("dblclick","onDoubleClick"),ga("focusin","onFocus"),ga("focusout","onBlur"),ga(Pb,"onTransitionRun"),ga(Ub,"onTransitionStart"),ga($b,"onTransitionCancel"),ga(Ch,"onTransitionEnd"),dn("onMouseEnter",["mouseout","mouseover"]),dn("onMouseLeave",["mouseout","mouseover"]),dn("onPointerEnter",["pointerout","pointerover"]),dn("onPointerLeave",["pointerout","pointerover"]),Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ns));function Nm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var w=r[g],R=w.instance,V=w.currentTarget;if(w=w.listener,R!==c&&l.isPropagationStopped())break t;c=w,l.currentTarget=V;try{c(l)}catch(tt){Tl(tt)}l.currentTarget=null,c=R}else for(g=0;g<r.length;g++){if(w=r[g],R=w.instance,V=w.currentTarget,w=w.listener,R!==c&&l.isPropagationStopped())break t;c=w,l.currentTarget=V;try{c(l)}catch(tt){Tl(tt)}l.currentTarget=null,c=R}}}}function re(t,e){var a=e[fe];a===void 0&&(a=e[fe]=new Set);var r=t+"__bubble";a.has(r)||(Lm(e,t,2,!1),a.add(r))}function Mf(t,e,a){var r=0;e&&(r|=4),Lm(a,t,r,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[$l]){t[$l]=!0,Xe.forEach(function(a){a!=="selectionchange"&&(E5.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,Mf("selectionchange",!1,e))}}function Lm(t,e,a,r){switch(rg(e)){case 2:var l=F5;break;case 8:l=Z5;break;default:l=Yf}a=l.bind(null,e,a,t),l=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function Of(t,e,a,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var w=r.stateNode.containerInfo;if(w===l||w.nodeType===8&&w.parentNode===l)break;if(g===4)for(g=r.return;g!==null;){var R=g.tag;if((R===3||R===4)&&(R=g.stateNode.containerInfo,R===l||R.nodeType===8&&R.parentNode===l))return;g=g.return}for(;w!==null;){if(g=he(w),g===null)return;if(R=g.tag,R===5||R===6||R===26||R===27){r=c=g;continue t}w=w.parentNode}}r=r.return}W0(function(){var V=c,tt=Gi(a),lt=[];t:{var Y=Ah.get(t);if(Y!==void 0){var J=il,Ot=t;switch(t){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":J=gb;break;case"focusin":Ot="focus",J=nc;break;case"focusout":Ot="blur",J=nc;break;case"beforeblur":case"afterblur":J=nc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=ib;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=bb;break;case wh:case Sh:case Eh:J=sb;break;case Ch:J=wb;break;case"scroll":case"scrollend":J=nb;break;case"wheel":J=Eb;break;case"copy":case"cut":case"paste":J=ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=nh;break;case"toggle":case"beforetoggle":J=Ab}var qt=(e&4)!==0,Ze=!qt&&(t==="scroll"||t==="scrollend"),P=qt?Y!==null?Y+"Capture":null:Y;qt=[];for(var N=V,q;N!==null;){var at=N;if(q=at.stateNode,at=at.tag,at!==5&&at!==26&&at!==27||q===null||P===null||(at=wo(N,P),at!=null&&qt.push(as(N,at,q))),Ze)break;N=N.return}0<qt.length&&(Y=new J(Y,Ot,null,a,tt),lt.push({event:Y,listeners:qt}))}}if((e&7)===0){t:{if(Y=t==="mouseover"||t==="pointerover",J=t==="mouseout"||t==="pointerout",Y&&a!==Yi&&(Ot=a.relatedTarget||a.fromElement)&&(he(Ot)||Ot[Xt]))break t;if((J||Y)&&(Y=tt.window===tt?tt:(Y=tt.ownerDocument)?Y.defaultView||Y.parentWindow:window,J?(Ot=a.relatedTarget||a.toElement,J=V,Ot=Ot?he(Ot):null,Ot!==null&&(Ze=it(Ot),qt=Ot.tag,Ot!==Ze||qt!==5&&qt!==27&&qt!==6)&&(Ot=null)):(J=null,Ot=V),J!==Ot)){if(qt=th,at="onMouseLeave",P="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(qt=nh,at="onPointerLeave",P="onPointerEnter",N="pointer"),Ze=J==null?Y:Kt(J),q=Ot==null?Y:Kt(Ot),Y=new qt(at,N+"leave",J,a,tt),Y.target=Ze,Y.relatedTarget=q,at=null,he(tt)===V&&(qt=new qt(P,N+"enter",Ot,a,tt),qt.target=q,qt.relatedTarget=Ze,at=qt),Ze=at,J&&Ot)e:{for(qt=J,P=Ot,N=0,q=qt;q;q=Kr(q))N++;for(q=0,at=P;at;at=Kr(at))q++;for(;0<N-q;)qt=Kr(qt),N--;for(;0<q-N;)P=Kr(P),q--;for(;N--;){if(qt===P||P!==null&&qt===P.alternate)break e;qt=Kr(qt),P=Kr(P)}qt=null}else qt=null;J!==null&&_m(lt,Y,J,qt,!1),Ot!==null&&Ze!==null&&_m(lt,Ze,Ot,qt,!0)}}t:{if(Y=V?Kt(V):window,J=Y.nodeName&&Y.nodeName.toLowerCase(),J==="select"||J==="input"&&Y.type==="file")var At=ch;else if(lh(Y))if(fh)At=Nb;else{At=Db;var It=Ob}else J=Y.nodeName,!J||J.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?V&&qi(V.elementType)&&(At=ch):At=Bb;if(At&&(At=At(t,V))){uh(lt,At,a,tt);break t}It&&It(t,Y,V),t==="focusout"&&V&&Y.type==="number"&&V.memoizedProps.value!=null&&ta(Y,"number",Y.value)}switch(It=V?Kt(V):window,t){case"focusin":(lh(It)||It.contentEditable==="true")&&(Ar=It,lc=V,zo=null);break;case"focusout":zo=lc=Ar=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,bh(lt,a,tt);break;case"selectionchange":if(Vb)break;case"keydown":case"keyup":bh(lt,a,tt)}var Bt;if(ic)t:{switch(t){case"compositionstart":var Lt="onCompositionStart";break t;case"compositionend":Lt="onCompositionEnd";break t;case"compositionupdate":Lt="onCompositionUpdate";break t}Lt=void 0}else Cr?oh(t,a)&&(Lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Lt="onCompositionStart");Lt&&(ah&&a.locale!=="ko"&&(Cr||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&Cr&&(Bt=J0()):(mi=tt,Iu="value"in mi?mi.value:mi.textContent,Cr=!0)),It=Hl(V,Lt),0<It.length&&(Lt=new eh(Lt,t,null,a,tt),lt.push({event:Lt,listeners:It}),Bt?Lt.data=Bt:(Bt=sh(a),Bt!==null&&(Lt.data=Bt)))),(Bt=jb?Rb(t,a):zb(t,a))&&(Lt=Hl(V,"onBeforeInput"),0<Lt.length&&(It=new eh("onBeforeInput","beforeinput",null,a,tt),lt.push({event:It,listeners:Lt}),It.data=Bt)),x5(lt,t,V,a,tt)}Nm(lt,e)})}function as(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Hl(t,e){for(var a=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=wo(t,a),l!=null&&r.unshift(as(t,l,c)),l=wo(t,e),l!=null&&r.push(as(t,l,c))),t=t.return}return r}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _m(t,e,a,r,l){for(var c=e._reactName,g=[];a!==null&&a!==r;){var w=a,R=w.alternate,V=w.stateNode;if(w=w.tag,R!==null&&R===r)break;w!==5&&w!==26&&w!==27||V===null||(R=V,l?(V=wo(a,c),V!=null&&g.unshift(as(a,V,R))):l||(V=wo(a,c),V!=null&&g.push(as(a,V,R)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var C5=/\r\n?/g,A5=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(C5,`
`).replace(A5,"")}function Pm(t,e){return e=Vm(e),Vm(t)===e}function ql(){}function Ce(t,e,a,r,l,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||An(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&An(t,""+r);break;case"className":Pa(t,"class",r);break;case"tabIndex":Pa(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Pa(t,a,r);break;case"style":Hn(t,r,c);break;case"data":if(e!=="object"){Pa(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=pi(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Ce(t,e,"name",l.name,l,null),Ce(t,e,"formEncType",l.formEncType,l,null),Ce(t,e,"formMethod",l.formMethod,l,null),Ce(t,e,"formTarget",l.formTarget,l,null)):(Ce(t,e,"encType",l.encType,l,null),Ce(t,e,"method",l.method,l,null),Ce(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=pi(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ql);break;case"onScroll":r!=null&&re("scroll",t);break;case"onScrollEnd":r!=null&&re("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=pi(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":re("beforetoggle",t),re("toggle",t),fi(t,"popover",r);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":fi(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Aa.get(a)||a,fi(t,a,r))}}function Df(t,e,a,r,l,c){switch(a){case"style":Hn(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?An(t,r):(typeof r=="number"||typeof r=="bigint")&&An(t,""+r);break;case"onScroll":r!=null&&re("scroll",t);break;case"onScrollEnd":r!=null&&re("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),c=t[Ut]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,l),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,l);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):fi(t,a,r)}}}function Sn(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",t),re("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ce(t,e,c,g,a,null)}}l&&Ce(t,e,"srcSet",a.srcSet,a,null),r&&Ce(t,e,"src",a.src,a,null);return;case"input":re("invalid",t);var w=c=g=l=null,R=null,V=null;for(r in a)if(a.hasOwnProperty(r)){var tt=a[r];if(tt!=null)switch(r){case"name":l=tt;break;case"type":g=tt;break;case"checked":R=tt;break;case"defaultChecked":V=tt;break;case"value":c=tt;break;case"defaultValue":w=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,e));break;default:Ce(t,e,r,tt,a,null)}}hi(t,c,w,R,V,g,l,!1),Pn(t);return;case"select":re("invalid",t),r=g=c=null;for(l in a)if(a.hasOwnProperty(l)&&(w=a[l],w!=null))switch(l){case"value":c=w;break;case"defaultValue":g=w;break;case"multiple":r=w;default:Ce(t,e,l,w,a,null)}e=c,a=g,t.multiple=!!r,e!=null?Un(t,!!r,e,!1):a!=null&&Un(t,!!r,a,!0);return;case"textarea":re("invalid",t),c=l=r=null;for(g in a)if(a.hasOwnProperty(g)&&(w=a[g],w!=null))switch(g){case"value":r=w;break;case"defaultValue":l=w;break;case"children":c=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ce(t,e,g,w,a,null)}$n(t,r,l,c),Pn(t);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(r=a[R],r!=null))switch(R){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ce(t,e,R,r,a,null)}return;case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":re("load",t);break;case"video":case"audio":for(r=0;r<ns.length;r++)re(ns[r],t);break;case"image":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"embed":case"source":case"link":re("error",t),re("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ce(t,e,V,r,a,null)}return;default:if(qi(e)){for(tt in a)a.hasOwnProperty(tt)&&(r=a[tt],r!==void 0&&Df(t,e,tt,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Ce(t,e,w,r,a,null))}function T5(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,g=null,w=null,R=null,V=null,tt=null;for(J in a){var lt=a[J];if(a.hasOwnProperty(J)&&lt!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":R=lt;default:r.hasOwnProperty(J)||Ce(t,e,J,null,r,lt)}}for(var Y in r){var J=r[Y];if(lt=a[Y],r.hasOwnProperty(Y)&&(J!=null||lt!=null))switch(Y){case"type":c=J;break;case"name":l=J;break;case"checked":V=J;break;case"defaultChecked":tt=J;break;case"value":g=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,e));break;default:J!==lt&&Ce(t,e,Y,J,r,lt)}}Dn(t,g,w,R,V,tt,c,l);return;case"select":J=g=w=Y=null;for(c in a)if(R=a[c],a.hasOwnProperty(c)&&R!=null)switch(c){case"value":break;case"multiple":J=R;default:r.hasOwnProperty(c)||Ce(t,e,c,null,r,R)}for(l in r)if(c=r[l],R=a[l],r.hasOwnProperty(l)&&(c!=null||R!=null))switch(l){case"value":Y=c;break;case"defaultValue":w=c;break;case"multiple":g=c;default:c!==R&&Ce(t,e,l,c,r,R)}e=w,a=g,r=J,Y!=null?Un(t,!!a,Y,!1):!!r!=!!a&&(e!=null?Un(t,!!a,e,!0):Un(t,!!a,a?[]:"",!1));return;case"textarea":J=Y=null;for(w in a)if(l=a[w],a.hasOwnProperty(w)&&l!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ce(t,e,w,null,r,l)}for(g in r)if(l=r[g],c=a[g],r.hasOwnProperty(g)&&(l!=null||c!=null))switch(g){case"value":Y=l;break;case"defaultValue":J=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ce(t,e,g,l,r,c)}Bn(t,Y,J);return;case"option":for(var Ot in a)if(Y=a[Ot],a.hasOwnProperty(Ot)&&Y!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:Ce(t,e,Ot,null,r,Y)}for(R in r)if(Y=r[R],J=a[R],r.hasOwnProperty(R)&&Y!==J&&(Y!=null||J!=null))switch(R){case"selected":t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Ce(t,e,R,Y,r,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)Y=a[qt],a.hasOwnProperty(qt)&&Y!=null&&!r.hasOwnProperty(qt)&&Ce(t,e,qt,null,r,Y);for(V in r)if(Y=r[V],J=a[V],r.hasOwnProperty(V)&&Y!==J&&(Y!=null||J!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,e));break;default:Ce(t,e,V,Y,r,J)}return;default:if(qi(e)){for(var Ze in a)Y=a[Ze],a.hasOwnProperty(Ze)&&Y!==void 0&&!r.hasOwnProperty(Ze)&&Df(t,e,Ze,void 0,r,Y);for(tt in r)Y=r[tt],J=a[tt],!r.hasOwnProperty(tt)||Y===J||Y===void 0&&J===void 0||Df(t,e,tt,Y,r,J);return}}for(var P in a)Y=a[P],a.hasOwnProperty(P)&&Y!=null&&!r.hasOwnProperty(P)&&Ce(t,e,P,null,r,Y);for(lt in r)Y=r[lt],J=a[lt],!r.hasOwnProperty(lt)||Y===J||Y==null&&J==null||Ce(t,e,lt,Y,r,J)}var Bf=null,Nf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function Um(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $m(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=null;function j5(){var t=window.event;return t&&t.type==="popstate"?t===_f?!1:(_f=t,!0):(_f=null,!1)}var Hm=typeof setTimeout=="function"?setTimeout:void 0,R5=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,z5=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(M5)}:Hm;function M5(t){setTimeout(function(){throw t})}function Vf(t,e){var a=e,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(r===0){t.removeChild(l),fs(e);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=l}while(a);fs(e)}function Pf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),Zt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function k5(t,e,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ee])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=ba(t.nextSibling),t===null)break}return null}function O5(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ba(t.nextSibling),t===null))return null;return t}function ba(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Ym(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Gm(t,e,a){switch(e=Yl(a),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var ca=new Map,Xm=new Set;function Gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ei=pt.d;pt.d={f:D5,r:B5,D:N5,C:L5,L:_5,m:V5,X:U5,S:P5,M:$5};function D5(){var t=ei.f(),e=_l();return t||e}function B5(t){var e=ge(t);e!==null&&e.tag===5&&e.type==="form"?bp(e):ei.r(t)}var Qr=typeof document>"u"?null:document;function Km(t,e,a){var r=Qr;if(r&&typeof e=="string"&&e){var l=Me(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Xm.has(l)||(Xm.add(l),t={rel:t,crossOrigin:a,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Sn(e,"link",t),Qt(e),r.head.appendChild(e)))}}function N5(t){ei.D(t),Km("dns-prefetch",t,null)}function L5(t,e){ei.C(t,e),Km("preconnect",t,e)}function _5(t,e,a){ei.L(t,e,a);var r=Qr;if(r&&t&&e){var l='link[rel="preload"][as="'+Me(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Me(a.imageSizes)+'"]')):l+='[href="'+Me(t)+'"]';var c=l;switch(e){case"style":c=Fr(t);break;case"script":c=Zr(t)}ca.has(c)||(t=yt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ca.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(is(c))||e==="script"&&r.querySelector(rs(c))||(e=r.createElement("link"),Sn(e,"link",t),Qt(e),r.head.appendChild(e)))}}function V5(t,e){ei.m(t,e);var a=Qr;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Me(r)+'"][href="'+Me(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Zr(t)}if(!ca.has(c)&&(t=yt({rel:"modulepreload",href:t},e),ca.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rs(c)))return}r=a.createElement("link"),Sn(r,"link",t),Qt(r),a.head.appendChild(r)}}}function P5(t,e,a){ei.S(t,e,a);var r=Qr;if(r&&t){var l=Ne(r).hoistableStyles,c=Fr(t);e=e||"default";var g=l.get(c);if(!g){var w={loading:0,preload:null};if(g=r.querySelector(is(c)))w.loading=5;else{t=yt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ca.get(c))&&Uf(t,a);var R=g=r.createElement("link");Qt(R),Sn(R,"link",t),R._p=new Promise(function(V,tt){R.onload=V,R.onerror=tt}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Xl(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:w},l.set(c,g)}}}function U5(t,e){ei.X(t,e);var a=Qr;if(a&&t){var r=Ne(a).hoistableScripts,l=Zr(t),c=r.get(l);c||(c=a.querySelector(rs(l)),c||(t=yt({src:t,async:!0},e),(e=ca.get(l))&&$f(t,e),c=a.createElement("script"),Qt(c),Sn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function $5(t,e){ei.M(t,e);var a=Qr;if(a&&t){var r=Ne(a).hoistableScripts,l=Zr(t),c=r.get(l);c||(c=a.querySelector(rs(l)),c||(t=yt({src:t,async:!0,type:"module"},e),(e=ca.get(l))&&$f(t,e),c=a.createElement("script"),Qt(c),Sn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function Qm(t,e,a,r){var l=(l=$t.current)?Gl(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Fr(a.href),a=Ne(l).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fr(a.href);var c=Ne(l).hoistableStyles,g=c.get(t);if(g||(l=l.ownerDocument||l,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=l.querySelector(is(t)))&&!c._p&&(g.instance=c,g.state.loading=5),ca.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ca.set(t,a),c||H5(l,t,a,g.state))),e&&r===null)throw Error(s(528,""));return g}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Zr(a),a=Ne(l).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fr(t){return'href="'+Me(t)+'"'}function is(t){return'link[rel="stylesheet"]['+t+"]"}function Fm(t){return yt({},t,{"data-precedence":t.precedence,precedence:null})}function H5(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Sn(e,"link",a),Qt(e),t.head.appendChild(e))}function Zr(t){return'[src="'+Me(t)+'"]'}function rs(t){return"script[async]"+t}function Zm(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Me(a.href)+'"]');if(r)return e.instance=r,Qt(r),r;var l=yt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Qt(r),Sn(r,"style",l),Xl(r,a.precedence,t),e.instance=r;case"stylesheet":l=Fr(a.href);var c=t.querySelector(is(l));if(c)return e.state.loading|=4,e.instance=c,Qt(c),c;r=Fm(a),(l=ca.get(l))&&Uf(r,l),c=(t.ownerDocument||t).createElement("link"),Qt(c);var g=c;return g._p=new Promise(function(w,R){g.onload=w,g.onerror=R}),Sn(c,"link",r),e.state.loading|=4,Xl(c,a.precedence,t),e.instance=c;case"script":return c=Zr(a.src),(l=t.querySelector(rs(c)))?(e.instance=l,Qt(l),l):(r=a,(l=ca.get(c))&&(r=yt({},a),$f(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Qt(l),Sn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Xl(r,a.precedence,t));return e.instance}function Xl(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,g=0;g<r.length;g++){var w=r[g];if(w.dataset.precedence===e)c=w;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Uf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function $f(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Kl=null;function Wm(t,e,a){if(Kl===null){var r=new Map,l=Kl=new Map;l.set(a,r)}else l=Kl,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[ee]||c[kt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var w=r.get(g);w?w.push(c):r.set(g,[c])}}return r}function Jm(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function q5(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Im(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var os=null;function Y5(){}function G5(t,e,a){if(os===null)throw Error(s(475));var r=os;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Fr(a.href),c=t.querySelector(is(l));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Ql.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,Qt(c);return}c=t.ownerDocument||t,a=Fm(a),(l=ca.get(l))&&Uf(a,l),c=c.createElement("link"),Qt(c);var g=c;g._p=new Promise(function(w,R){g.onload=w,g.onerror=R}),Sn(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Ql.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function X5(){if(os===null)throw Error(s(475));var t=os;return t.stylesheets&&t.count===0&&Hf(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Hf(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)Hf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fl=null;function Hf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fl=new Map,e.forEach(K5,t),Fl=null,Ql.call(t))}function K5(t,e){if(!(e.state.loading&4)){var a=Fl.get(t);if(a)var r=a.get(null);else{a=new Map,Fl.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var g=l[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}l=e.instance,g=l.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,l),a.set(g,l),this.count++,r=Ql.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var ss={$$typeof:S,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function Q5(t,e,a,r,l,c,g,w){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tn(0),this.hiddenUpdates=tn(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function tg(t,e,a,r,l,c,g,w,R,V,tt,lt){return t=new Q5(t,e,a,g,w,R,V,lt),e=1,c===!0&&(e|=24),c=la(3,null,null,e),t.current=c,c.stateNode=t,e=bc(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},Ic(c),t}function eg(t){return t?(t=Rr,t):Rr}function ng(t,e,a,r,l,c){l=eg(l),r.context===null?r.context=l:r.pendingContext=l,r=Ei(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ci(t,r,e),a!==null&&(kn(a,t,e),Yo(a,t,e))}function ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function qf(t,e){ag(t,e),(t=t.alternate)&&ag(t,e)}function ig(t){if(t.tag===13){var e=gi(t,67108864);e!==null&&kn(e,t,67108864),qf(t,67108864)}}var Zl=!0;function F5(t,e,a,r){var l=Q.T;Q.T=null;var c=pt.p;try{pt.p=2,Yf(t,e,a,r)}finally{pt.p=c,Q.T=l}}function Z5(t,e,a,r){var l=Q.T;Q.T=null;var c=pt.p;try{pt.p=8,Yf(t,e,a,r)}finally{pt.p=c,Q.T=l}}function Yf(t,e,a,r){if(Zl){var l=Gf(r);if(l===null)Of(t,e,r,Wl,a),og(t,r);else if(J5(l,t,e,a,r))r.stopPropagation();else if(og(t,r),e&4&&-1<W5.indexOf(t)){for(;l!==null;){var c=ge(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=He(c.pendingLanes);if(g!==0){var w=c;for(w.pendingLanes|=2,w.entangledLanes|=2;g;){var R=1<<31-Ct(g);w.entanglements[1]|=R,g&=~R}Oa(c),(Ve&6)===0&&(Bl=Yt()+500,es(0))}}break;case 13:w=gi(c,2),w!==null&&kn(w,c,2),_l(),qf(c,2)}if(c=Gf(r),c===null&&Of(t,e,r,Wl,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Of(t,e,r,null,a)}}function Gf(t){return t=Gi(t),Xf(t)}var Wl=null;function Xf(t){if(Wl=null,t=he(t),t!==null){var e=it(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=gt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Wl=t,null}function rg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Je()){case vn:return 2;case ae:return 8;case Ht:case j:return 32;case _:return 268435456;default:return 32}default:return 32}}var Kf=!1,ki=null,Oi=null,Di=null,ls=new Map,us=new Map,Bi=[],W5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function og(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":ls.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(e.pointerId)}}function cs(t,e,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=ge(e),e!==null&&ig(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function J5(t,e,a,r,l){switch(e){case"focusin":return ki=cs(ki,t,e,a,r,l),!0;case"dragenter":return Oi=cs(Oi,t,e,a,r,l),!0;case"mouseover":return Di=cs(Di,t,e,a,r,l),!0;case"pointerover":var c=l.pointerId;return ls.set(c,cs(ls.get(c)||null,t,e,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,us.set(c,cs(us.get(c)||null,t,e,a,r,l)),!0}return!1}function sg(t){var e=he(t.target);if(e!==null){var a=it(e);if(a!==null){if(e=a.tag,e===13){if(e=gt(a),e!==null){t.blockedOn=e,zt(t.priority,function(){if(a.tag===13){var r=Kn(),l=gi(a,r);l!==null&&kn(l,a,r),qf(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yi=r,a.target.dispatchEvent(r),Yi=null}else return e=ge(a),e!==null&&ig(e),t.blockedOn=a,!1;e.shift()}return!0}function lg(t,e,a){Jl(t)&&a.delete(e)}function I5(){Kf=!1,ki!==null&&Jl(ki)&&(ki=null),Oi!==null&&Jl(Oi)&&(Oi=null),Di!==null&&Jl(Di)&&(Di=null),ls.forEach(lg),us.forEach(lg)}function Il(t,e){t.blockedOn===e&&(t.blockedOn=null,Kf||(Kf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,I5)))}var tu=null;function ug(t){tu!==t&&(tu=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Xf(r||a)===null)continue;break}var c=ge(a);c!==null&&(t.splice(e,3),e-=3,Nc(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function fs(t){function e(R){return Il(R,t)}ki!==null&&Il(ki,t),Oi!==null&&Il(Oi,t),Di!==null&&Il(Di,t),ls.forEach(e),us.forEach(e);for(var a=0;a<Bi.length;a++){var r=Bi[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Bi.length&&(a=Bi[0],a.blockedOn===null);)sg(a),a.blockedOn===null&&Bi.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],g=l[Ut]||null;if(typeof c=="function")g||ug(a);else if(g){var w=null;if(c&&c.hasAttribute("formAction")){if(l=c,g=c[Ut]||null)w=g.formAction;else if(Xf(l)!==null)continue}else w=g.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),ug(a)}}}function Qf(t){this._internalRoot=t}eu.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var a=e.current,r=Kn();ng(a,r,t,e,null,null)},eu.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&Gr(),ng(t.current,2,null,t,null,null),_l(),e[Xt]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=mt();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Bi.length&&e!==0&&e<Bi[a].priority;a++);Bi.splice(a,0,t),a===0&&sg(t)}};var cg=i.version;if(cg!=="19.0.0")throw Error(s(527,cg,"19.0.0"));pt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=nt(e),t=t!==null?vt(t):null,t=t===null?null:t.stateNode,t};var tx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,findFiberByHostInstance:he,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{ht=nu.inject(tx),rt=nu}catch{}}return hs.createRoot=function(t,e){if(!u(t))throw Error(s(299));var a=!1,r="",l=jp,c=Rp,g=zp,w=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(w=e.unstable_transitionCallbacks)),e=tg(t,1,!1,null,null,a,r,l,c,g,w,null),t[Xt]=e.current,kf(t.nodeType===8?t.parentNode:t),new Qf(e)},hs.hydrateRoot=function(t,e,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=jp,g=Rp,w=zp,R=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),e=tg(t,1,!0,e,a??null,r,l,c,g,w,R,V),e.context=eg(null),a=e.current,r=Kn(),l=Ei(r),l.callback=null,Ci(a,l,r),e.current.lanes=r,yn(e,r),Oa(e),t[Xt]=e.current,kf(t),new eu(e)},hs.version="19.0.0",hs}var xg;function fx(){if(xg)return Wf.exports;xg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Wf.exports=cx(),Wf.exports}var dx=fx(),ps={},wg;function hx(){if(wg)return ps;wg=1,Object.defineProperty(ps,"__esModule",{value:!0}),ps.parse=d,ps.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,f=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function d(x,S){const C=new f,z=x.length;if(z<2)return C;const M=(S==null?void 0:S.decode)||v;let A=0;do{const D=x.indexOf("=",A);if(D===-1)break;const O=x.indexOf(";",A),L=O===-1?z:O;if(D>L){A=x.lastIndexOf(";",D-1)+1;continue}const B=p(x,A,D),W=h(x,D,B),st=x.slice(B,W);if(C[st]===void 0){let dt=p(x,D+1,L),Q=h(x,L,dt);const yt=M(x.slice(dt,Q));C[st]=yt}A=L+1}while(A<z);return C}function p(x,S,C){do{const z=x.charCodeAt(S);if(z!==32&&z!==9)return S}while(++S<C);return C}function h(x,S,C){for(;S>C;){const z=x.charCodeAt(--S);if(z!==32&&z!==9)return S+1}return C}function m(x,S,C){const z=(C==null?void 0:C.encode)||encodeURIComponent;if(!n.test(x))throw new TypeError(`argument name is invalid: ${x}`);const M=z(S);if(!i.test(M))throw new TypeError(`argument val is invalid: ${S}`);let A=x+"="+M;if(!C)return A;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);A+="; Max-Age="+C.maxAge}if(C.domain){if(!o.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);A+="; Domain="+C.domain}if(C.path){if(!s.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);A+="; Path="+C.path}if(C.expires){if(!b(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);A+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(A+="; HttpOnly"),C.secure&&(A+="; Secure"),C.partitioned&&(A+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return A}function v(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function b(x){return u.call(x)==="[object Date]"}return ps}hx();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Sg="popstate";function px(n={}){function i(s,u){let{pathname:f,search:d,hash:p}=s.location;return Rd("",{pathname:f,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(s,u){return typeof u=="string"?u:Rs(u)}return gx(i,o,null,n)}function Ue(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function La(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function mx(){return Math.random().toString(36).substring(2,10)}function Eg(n,i){return{usr:n.state,key:n.key,idx:i}}function Rd(n,i,o=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?mo(i):i,state:o,key:i&&i.key||s||mx()}}function Rs({pathname:n="/",search:i="",hash:o=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function mo(n){let i={};if(n){let o=n.indexOf("#");o>=0&&(i.hash=n.substring(o),n=n.substring(0,o));let s=n.indexOf("?");s>=0&&(i.search=n.substring(s),n=n.substring(0,s)),n&&(i.pathname=n)}return i}function gx(n,i,o,s={}){let{window:u=document.defaultView,v5Compat:f=!1}=s,d=u.history,p="POP",h=null,m=v();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function v(){return(d.state||{idx:null}).idx}function b(){p="POP";let M=v(),A=M==null?null:M-m;m=M,h&&h({action:p,location:z.location,delta:A})}function x(M,A){p="PUSH";let D=Rd(z.location,M,A);m=v()+1;let O=Eg(D,m),L=z.createHref(D);try{d.pushState(O,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;u.location.assign(L)}f&&h&&h({action:p,location:z.location,delta:1})}function S(M,A){p="REPLACE";let D=Rd(z.location,M,A);m=v();let O=Eg(D,m),L=z.createHref(D);d.replaceState(O,"",L),f&&h&&h({action:p,location:z.location,delta:0})}function C(M){let A=u.location.origin!=="null"?u.location.origin:u.location.href,D=typeof M=="string"?M:Rs(M);return D=D.replace(/ $/,"%20"),Ue(A,`No window.location.(origin|href) available to create URL for href: ${D}`),new URL(D,A)}let z={get action(){return p},get location(){return n(u,d)},listen(M){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Sg,b),h=M,()=>{u.removeEventListener(Sg,b),h=null}},createHref(M){return i(u,M)},createURL:C,encodeLocation(M){let A=C(M);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:x,replace:S,go(M){return d.go(M)}};return z}function kv(n,i,o="/"){return vx(n,i,o,!1)}function vx(n,i,o,s){let u=typeof i=="string"?mo(i):i,f=si(u.pathname||"/",o);if(f==null)return null;let d=Ov(n);yx(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=zx(f);p=jx(d[h],m,s)}return p}function Ov(n,i=[],o=[],s=""){let u=(f,d,p)=>{let h={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};h.relativePath.startsWith("/")&&(Ue(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let m=ii([s,h.relativePath]),v=o.concat(h);f.children&&f.children.length>0&&(Ue(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ov(f.children,i,v,m)),!(f.path==null&&!f.index)&&i.push({path:m,score:Ax(m,f.index),routesMeta:v})};return n.forEach((f,d)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,d);else for(let h of Dv(f.path))u(f,d,h)}),i}function Dv(n){let i=n.split("/");if(i.length===0)return[];let[o,...s]=i,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(s.length===0)return u?[f,""]:[f];let d=Dv(s.join("/")),p=[];return p.push(...d.map(h=>h===""?f:[f,h].join("/"))),u&&p.push(...d),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function yx(n){n.sort((i,o)=>i.score!==o.score?o.score-i.score:Tx(i.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var bx=/^:[\w-]+$/,xx=3,wx=2,Sx=1,Ex=10,Cx=-2,Cg=n=>n==="*";function Ax(n,i){let o=n.split("/"),s=o.length;return o.some(Cg)&&(s+=Cx),i&&(s+=wx),o.filter(u=>!Cg(u)).reduce((u,f)=>u+(bx.test(f)?xx:f===""?Sx:Ex),s)}function Tx(n,i){return n.length===i.length&&n.slice(0,-1).every((s,u)=>s===i[u])?n[n.length-1]-i[i.length-1]:0}function jx(n,i,o=!1){let{routesMeta:s}=n,u={},f="/",d=[];for(let p=0;p<s.length;++p){let h=s[p],m=p===s.length-1,v=f==="/"?i:i.slice(f.length)||"/",b=wu({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v),x=h.route;if(!b&&m&&o&&!s[s.length-1].route.index&&(b=wu({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!b)return null;Object.assign(u,b.params),d.push({params:u,pathname:ii([f,b.pathname]),pathnameBase:Dx(ii([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=ii([f,b.pathnameBase]))}return d}function wu(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,s]=Rx(n.path,n.caseSensitive,n.end),u=i.match(o);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:b},x)=>{if(v==="*"){let C=p[x]||"";d=f.slice(0,f.length-C.length).replace(/(.)\/+$/,"$1")}const S=p[x];return b&&!S?m[v]=void 0:m[v]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:d,pattern:n}}function Rx(n,i=!1,o=!0){La(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(s.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),s]}function zx(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return La(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function si(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,s=n.charAt(o);return s&&s!=="/"?null:n.slice(o)||"/"}function Mx(n,i="/"){let{pathname:o,search:s="",hash:u=""}=typeof n=="string"?mo(n):n;return{pathname:o?o.startsWith("/")?o:kx(o,i):i,search:Bx(s),hash:Nx(u)}}function kx(n,i){let o=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function ed(n,i,o,s){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ox(n){return n.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Bv(n){let i=Ox(n);return i.map((o,s)=>s===i.length-1?o.pathname:o.pathnameBase)}function Nv(n,i,o,s=!1){let u;typeof n=="string"?u=mo(n):(u={...n},Ue(!u.pathname||!u.pathname.includes("?"),ed("?","pathname","search",u)),Ue(!u.pathname||!u.pathname.includes("#"),ed("#","pathname","hash",u)),Ue(!u.search||!u.search.includes("#"),ed("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,p;if(d==null)p=o;else{let b=i.length-1;if(!s&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;u.pathname=x.join("/")}p=b>=0?i[b]:"/"}let h=Mx(u,p),m=d&&d!=="/"&&d.endsWith("/"),v=(f||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||v)&&(h.pathname+="/"),h}var ii=n=>n.join("/").replace(/\/\/+/g,"/"),Dx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Bx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Nx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Lx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Lv=["POST","PUT","PATCH","DELETE"];new Set(Lv);var _x=["GET",...Lv];new Set(_x);var go=T.createContext(null);go.displayName="DataRouter";var Nu=T.createContext(null);Nu.displayName="DataRouterState";var _v=T.createContext({isTransitioning:!1});_v.displayName="ViewTransition";var Vx=T.createContext(new Map);Vx.displayName="Fetchers";var Px=T.createContext(null);Px.displayName="Await";var _a=T.createContext(null);_a.displayName="Navigation";var Xs=T.createContext(null);Xs.displayName="Location";var ui=T.createContext({outlet:null,matches:[],isDataRoute:!1});ui.displayName="Route";var r0=T.createContext(null);r0.displayName="RouteError";function Ux(n,{relative:i}={}){Ue(Ks(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=T.useContext(_a),{hash:u,pathname:f,search:d}=Qs(n,{relative:i}),p=f;return o!=="/"&&(p=f==="/"?o:ii([o,f])),s.createHref({pathname:p,search:d,hash:u})}function Ks(){return T.useContext(Xs)!=null}function Sa(){return Ue(Ks(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Xs).location}var Vv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pv(n){T.useContext(_a).static||T.useLayoutEffect(n)}function $i(){let{isDataRoute:n}=T.useContext(ui);return n?Ix():$x()}function $x(){Ue(Ks(),"useNavigate() may be used only in the context of a <Router> component.");let n=T.useContext(go),{basename:i,navigator:o}=T.useContext(_a),{matches:s}=T.useContext(ui),{pathname:u}=Sa(),f=JSON.stringify(Bv(s)),d=T.useRef(!1);return Pv(()=>{d.current=!0}),T.useCallback((h,m={})=>{if(La(d.current,Vv),!d.current)return;if(typeof h=="number"){o.go(h);return}let v=Nv(h,JSON.parse(f),u,m.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:ii([i,v.pathname])),(m.replace?o.replace:o.push)(v,m.state,m)},[i,o,f,u,n])}T.createContext(null);function Qs(n,{relative:i}={}){let{matches:o}=T.useContext(ui),{pathname:s}=Sa(),u=JSON.stringify(Bv(o));return T.useMemo(()=>Nv(n,JSON.parse(u),s,i==="path"),[n,u,s,i])}function Hx(n,i){return Uv(n,i)}function Uv(n,i,o,s){var D;Ue(Ks(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:f}=T.useContext(_a),{matches:d}=T.useContext(ui),p=d[d.length-1],h=p?p.params:{},m=p?p.pathname:"/",v=p?p.pathnameBase:"/",b=p&&p.route;{let O=b&&b.path||"";$v(m,!b||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let x=Sa(),S;if(i){let O=typeof i=="string"?mo(i):i;Ue(v==="/"||((D=O.pathname)==null?void 0:D.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${O.pathname}" was given in the \`location\` prop.`),S=O}else S=x;let C=S.pathname||"/",z=C;if(v!=="/"){let O=v.replace(/^\//,"").split("/");z="/"+C.replace(/^\//,"").split("/").slice(O.length).join("/")}let M=!f&&o&&o.matches&&o.matches.length>0?o.matches:kv(n,{pathname:z});La(b||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),La(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=Kx(M&&M.map(O=>Object.assign({},O,{params:Object.assign({},h,O.params),pathname:ii([v,u.encodeLocation?u.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?v:ii([v,u.encodeLocation?u.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),d,o,s);return i&&A?T.createElement(Xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},A):A}function qx(){let n=Jx(),i=Lx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:f},"ErrorBoundary")," or"," ",T.createElement("code",{style:f},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},i),o?T.createElement("pre",{style:u},o):null,d)}var Yx=T.createElement(qx,null),Gx=class extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?T.createElement(ui.Provider,{value:this.props.routeContext},T.createElement(r0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Xx({routeContext:n,match:i,children:o}){let s=T.useContext(go);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(ui.Provider,{value:n},o)}function Kx(n,i=[],o=null,s=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let u=n,f=o==null?void 0:o.errors;if(f!=null){let h=u.findIndex(m=>m.route.id&&(f==null?void 0:f[m.route.id])!==void 0);Ue(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,h+1))}let d=!1,p=-1;if(o)for(let h=0;h<u.length;h++){let m=u[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:v,errors:b}=o,x=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||x){d=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((h,m,v)=>{let b,x=!1,S=null,C=null;o&&(b=f&&m.route.id?f[m.route.id]:void 0,S=m.route.errorElement||Yx,d&&(p<0&&v===0?($v("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,C=null):p===v&&(x=!0,C=m.route.hydrateFallbackElement||null)));let z=i.concat(u.slice(0,v+1)),M=()=>{let A;return b?A=S:x?A=C:m.route.Component?A=T.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=h,T.createElement(Xx,{match:m,routeContext:{outlet:h,matches:z,isDataRoute:o!=null},children:A})};return o&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?T.createElement(Gx,{location:o.location,revalidation:o.revalidation,component:S,error:b,children:M(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):M()},null)}function o0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qx(n){let i=T.useContext(go);return Ue(i,o0(n)),i}function Fx(n){let i=T.useContext(Nu);return Ue(i,o0(n)),i}function Zx(n){let i=T.useContext(ui);return Ue(i,o0(n)),i}function s0(n){let i=Zx(n),o=i.matches[i.matches.length-1];return Ue(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function Wx(){return s0("useRouteId")}function Jx(){var s;let n=T.useContext(r0),i=Fx("useRouteError"),o=s0("useRouteError");return n!==void 0?n:(s=i.errors)==null?void 0:s[o]}function Ix(){let{router:n}=Qx("useNavigate"),i=s0("useNavigate"),o=T.useRef(!1);return Pv(()=>{o.current=!0}),T.useCallback(async(u,f={})=>{La(o.current,Vv),o.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var Ag={};function $v(n,i,o){!i&&!Ag[n]&&(Ag[n]=!0,La(!1,o))}T.memo(t3);function t3({routes:n,future:i,state:o}){return Uv(n,void 0,o,i)}function ni(n){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function e3({basename:n="/",children:i=null,location:o,navigationType:s="POP",navigator:u,static:f=!1}){Ue(!Ks(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=T.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof o=="string"&&(o=mo(o));let{pathname:h="/",search:m="",hash:v="",state:b=null,key:x="default"}=o,S=T.useMemo(()=>{let C=si(h,d);return C==null?null:{location:{pathname:C,search:m,hash:v,state:b,key:x},navigationType:s}},[d,h,m,v,b,x,s]);return La(S!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:T.createElement(_a.Provider,{value:p},T.createElement(Xs.Provider,{children:i,value:S}))}function n3({children:n,location:i}){return Hx(zd(n),i)}function zd(n,i=[]){let o=[];return T.Children.forEach(n,(s,u)=>{if(!T.isValidElement(s))return;let f=[...i,u];if(s.type===T.Fragment){o.push.apply(o,zd(s.props.children,f));return}Ue(s.type===ni,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=zd(s.props.children,f)),o.push(d)}),o}var fu="get",du="application/x-www-form-urlencoded";function Lu(n){return n!=null&&typeof n.tagName=="string"}function a3(n){return Lu(n)&&n.tagName.toLowerCase()==="button"}function i3(n){return Lu(n)&&n.tagName.toLowerCase()==="form"}function r3(n){return Lu(n)&&n.tagName.toLowerCase()==="input"}function o3(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function s3(n,i){return n.button===0&&(!i||i==="_self")&&!o3(n)}var au=null;function l3(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var u3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nd(n){return n!=null&&!u3.has(n)?(La(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${du}"`),null):n}function c3(n,i){let o,s,u,f,d;if(i3(n)){let p=n.getAttribute("action");s=p?si(p,i):null,o=n.getAttribute("method")||fu,u=nd(n.getAttribute("enctype"))||du,f=new FormData(n)}else if(a3(n)||r3(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(s=h?si(h,i):null,o=n.getAttribute("formmethod")||p.getAttribute("method")||fu,u=nd(n.getAttribute("formenctype"))||nd(p.getAttribute("enctype"))||du,f=new FormData(p,n),!l3()){let{name:m,type:v,value:b}=n;if(v==="image"){let x=m?`${m}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else m&&f.append(m,b)}}else{if(Lu(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=fu,s=null,u=du,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:s,method:o.toLowerCase(),encType:u,formData:f,body:d}}function l0(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function f3(n,i){if(n.id in i)return i[n.id];try{let o=await import(n.module);return i[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function d3(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function h3(n,i,o){let s=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await f3(f,o);return d.links?d.links():[]}return[]}));return v3(s.flat(1).filter(d3).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Tg(n,i,o,s,u,f){let d=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,p=(h,m)=>{var v;return o[m].pathname!==h.pathname||((v=o[m].route.path)==null?void 0:v.endsWith("*"))&&o[m].params["*"]!==h.params["*"]};return f==="assets"?i.filter((h,m)=>d(h,m)||p(h,m)):f==="data"?i.filter((h,m)=>{var b;let v=s.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((b=o[0])==null?void 0:b.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function p3(n,i,{includeHydrateFallback:o}={}){return m3(n.map(s=>{let u=i.routes[s.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function m3(n){return[...new Set(n)]}function g3(n){let i={},o=Object.keys(n).sort();for(let s of o)i[s]=n[s];return i}function v3(n,i){let o=new Set;return new Set(i),n.reduce((s,u)=>{let f=JSON.stringify(g3(u));return o.has(f)||(o.add(f),s.push({key:f,link:u})),s},[])}function y3(n,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":i&&si(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Hv(){let n=T.useContext(go);return l0(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function b3(){let n=T.useContext(Nu);return l0(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var u0=T.createContext(void 0);u0.displayName="FrameworkContext";function qv(){let n=T.useContext(u0);return l0(n,"You must render this element inside a <HydratedRouter> element"),n}function x3(n,i){let o=T.useContext(u0),[s,u]=T.useState(!1),[f,d]=T.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:v,onTouchStart:b}=i,x=T.useRef(null);T.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let z=A=>{A.forEach(D=>{d(D.isIntersecting)})},M=new IntersectionObserver(z,{threshold:.5});return x.current&&M.observe(x.current),()=>{M.disconnect()}}},[n]),T.useEffect(()=>{if(s){let z=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(z)}}},[s]);let S=()=>{u(!0)},C=()=>{u(!1),d(!1)};return o?n!=="intent"?[f,x,{}]:[f,x,{onFocus:ms(p,S),onBlur:ms(h,C),onMouseEnter:ms(m,S),onMouseLeave:ms(v,C),onTouchStart:ms(b,S)}]:[!1,x,{}]}function ms(n,i){return o=>{n&&n(o),o.defaultPrevented||i(o)}}function w3({page:n,...i}){let{router:o}=Hv(),s=T.useMemo(()=>kv(o.routes,n,o.basename),[o.routes,n,o.basename]);return s?T.createElement(E3,{page:n,matches:s,...i}):null}function S3(n){let{manifest:i,routeModules:o}=qv(),[s,u]=T.useState([]);return T.useEffect(()=>{let f=!1;return h3(n,i,o).then(d=>{f||u(d)}),()=>{f=!0}},[n,i,o]),s}function E3({page:n,matches:i,...o}){let s=Sa(),{manifest:u,routeModules:f}=qv(),{basename:d}=Hv(),{loaderData:p,matches:h}=b3(),m=T.useMemo(()=>Tg(n,i,h,u,s,"data"),[n,i,h,u,s]),v=T.useMemo(()=>Tg(n,i,h,u,s,"assets"),[n,i,h,u,s]),b=T.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let C=new Set,z=!1;if(i.forEach(A=>{var O;let D=u.routes[A.route.id];!D||!D.hasLoader||(!m.some(L=>L.route.id===A.route.id)&&A.route.id in p&&((O=f[A.route.id])!=null&&O.shouldRevalidate)||D.hasClientLoader?z=!0:C.add(A.route.id))}),C.size===0)return[];let M=y3(n,d);return z&&C.size>0&&M.searchParams.set("_routes",i.filter(A=>C.has(A.route.id)).map(A=>A.route.id).join(",")),[M.pathname+M.search]},[d,p,s,u,m,i,n,f]),x=T.useMemo(()=>p3(v,u),[v,u]),S=S3(v);return T.createElement(T.Fragment,null,b.map(C=>T.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...o})),x.map(C=>T.createElement("link",{key:C,rel:"modulepreload",href:C,...o})),S.map(({key:C,link:z})=>T.createElement("link",{key:C,...z})))}function C3(...n){return i=>{n.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yv&&(window.__reactRouterVersion="7.4.0")}catch{}function A3({basename:n,children:i,window:o}){let s=T.useRef();s.current==null&&(s.current=px({window:o,v5Compat:!0}));let u=s.current,[f,d]=T.useState({action:u.action,location:u.location}),p=T.useCallback(h=>{T.startTransition(()=>d(h))},[d]);return T.useLayoutEffect(()=>u.listen(p),[u,p]),T.createElement(e3,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var Gv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Va=T.forwardRef(function({onClick:i,discover:o="render",prefetch:s="none",relative:u,reloadDocument:f,replace:d,state:p,target:h,to:m,preventScrollReset:v,viewTransition:b,...x},S){let{basename:C}=T.useContext(_a),z=typeof m=="string"&&Gv.test(m),M,A=!1;if(typeof m=="string"&&z&&(M=m,Yv))try{let Q=new URL(window.location.href),yt=m.startsWith("//")?new URL(Q.protocol+m):new URL(m),et=si(yt.pathname,C);yt.origin===Q.origin&&et!=null?m=et+yt.search+yt.hash:A=!0}catch{La(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=Ux(m,{relative:u}),[O,L,B]=x3(s,x),W=z3(m,{replace:d,state:p,target:h,preventScrollReset:v,relative:u,viewTransition:b});function st(Q){i&&i(Q),Q.defaultPrevented||W(Q)}let dt=T.createElement("a",{...x,...B,href:M||D,onClick:A||f?i:st,ref:C3(S,L),target:h,"data-discover":!z&&o==="render"?"true":void 0});return O&&!z?T.createElement(T.Fragment,null,dt,T.createElement(w3,{page:D})):dt});Va.displayName="Link";var T3=T.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:s="",end:u=!1,style:f,to:d,viewTransition:p,children:h,...m},v){let b=Qs(d,{relative:m.relative}),x=Sa(),S=T.useContext(Nu),{navigator:C,basename:z}=T.useContext(_a),M=S!=null&&B3(b)&&p===!0,A=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,D=x.pathname,O=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(D=D.toLowerCase(),O=O?O.toLowerCase():null,A=A.toLowerCase()),O&&z&&(O=si(O,z)||O);const L=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let B=D===A||!u&&D.startsWith(A)&&D.charAt(L)==="/",W=O!=null&&(O===A||!u&&O.startsWith(A)&&O.charAt(A.length)==="/"),st={isActive:B,isPending:W,isTransitioning:M},dt=B?i:void 0,Q;typeof s=="function"?Q=s(st):Q=[s,B?"active":null,W?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let yt=typeof f=="function"?f(st):f;return T.createElement(Va,{...m,"aria-current":dt,className:Q,ref:v,style:yt,to:d,viewTransition:p},typeof h=="function"?h(st):h)});T3.displayName="NavLink";var j3=T.forwardRef(({discover:n="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:u,state:f,method:d=fu,action:p,onSubmit:h,relative:m,preventScrollReset:v,viewTransition:b,...x},S)=>{let C=O3(),z=D3(p,{relative:m}),M=d.toLowerCase()==="get"?"get":"post",A=typeof p=="string"&&Gv.test(p),D=O=>{if(h&&h(O),O.defaultPrevented)return;O.preventDefault();let L=O.nativeEvent.submitter,B=(L==null?void 0:L.getAttribute("formmethod"))||d;C(L||O.currentTarget,{fetcherKey:i,method:B,navigate:o,replace:u,state:f,relative:m,preventScrollReset:v,viewTransition:b})};return T.createElement("form",{ref:S,method:M,action:z,onSubmit:s?h:D,...x,"data-discover":!A&&n==="render"?"true":void 0})});j3.displayName="Form";function R3(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(n){let i=T.useContext(go);return Ue(i,R3(n)),i}function z3(n,{target:i,replace:o,state:s,preventScrollReset:u,relative:f,viewTransition:d}={}){let p=$i(),h=Sa(),m=Qs(n,{relative:f});return T.useCallback(v=>{if(s3(v,i)){v.preventDefault();let b=o!==void 0?o:Rs(h)===Rs(m);p(n,{replace:b,state:s,preventScrollReset:u,relative:f,viewTransition:d})}},[h,p,m,o,s,i,n,u,f,d])}var M3=0,k3=()=>`__${String(++M3)}__`;function O3(){let{router:n}=Xv("useSubmit"),{basename:i}=T.useContext(_a),o=Wx();return T.useCallback(async(s,u={})=>{let{action:f,method:d,encType:p,formData:h,body:m}=c3(s,i);if(u.navigate===!1){let v=u.fetcherKey||k3();await n.fetch(v,o,u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:h,body:m,formMethod:u.method||d,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,o])}function D3(n,{relative:i}={}){let{basename:o}=T.useContext(_a),s=T.useContext(ui);Ue(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),f={...Qs(n||".",{relative:i})},d=Sa();if(n==null){f.search=d.search;let p=new URLSearchParams(f.search),h=p.getAll("index");if(h.some(v=>v==="")){p.delete("index"),h.filter(b=>b).forEach(b=>p.append("index",b));let v=p.toString();f.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(f.pathname=f.pathname==="/"?o:ii([o,f.pathname])),Rs(f)}function B3(n,i={}){let o=T.useContext(_v);Ue(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Xv("useViewTransitionState"),u=Qs(n,{relative:i.relative});if(!o.isTransitioning)return!1;let f=si(o.currentLocation.pathname,s)||o.currentLocation.pathname,d=si(o.nextLocation.pathname,s)||o.nextLocation.pathname;return wu(u.pathname,d)!=null||wu(u.pathname,f)!=null}new TextEncoder;var _n=function(){return _n=Object.assign||function(i){for(var o,s=1,u=arguments.length;s<u;s++){o=arguments[s];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(i[f]=o[f])}return i},_n.apply(this,arguments)};function zs(n,i,o){if(o||arguments.length===2)for(var s=0,u=i.length,f;s<u;s++)(f||!(s in i))&&(f||(f=Array.prototype.slice.call(i,0,s)),f[s]=i[s]);return n.concat(f||Array.prototype.slice.call(i))}var ke="-ms-",Es="-moz-",xe="-webkit-",Kv="comm",_u="rule",c0="decl",N3="@import",Qv="@keyframes",L3="@layer",Fv=Math.abs,f0=String.fromCharCode,Md=Object.assign;function _3(n,i){return gn(n,0)^45?(((i<<2^gn(n,0))<<2^gn(n,1))<<2^gn(n,2))<<2^gn(n,3):0}function Zv(n){return n.trim()}function ai(n,i){return(n=i.exec(n))?n[0]:n}function Ft(n,i,o){return n.replace(i,o)}function hu(n,i,o){return n.indexOf(i,o)}function gn(n,i){return n.charCodeAt(i)|0}function ro(n,i,o){return n.slice(i,o)}function Da(n){return n.length}function Wv(n){return n.length}function xs(n,i){return i.push(n),n}function V3(n,i){return n.map(i).join("")}function jg(n,i){return n.filter(function(o){return!ai(o,i)})}var Vu=1,oo=1,Jv=0,pa=0,un=0,vo="";function Pu(n,i,o,s,u,f,d,p){return{value:n,root:i,parent:o,type:s,props:u,children:f,line:Vu,column:oo,length:d,return:"",siblings:p}}function _i(n,i){return Md(Pu("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function Wr(n){for(;n.root;)n=_i(n.root,{children:[n]});xs(n,n.siblings)}function P3(){return un}function U3(){return un=pa>0?gn(vo,--pa):0,oo--,un===10&&(oo=1,Vu--),un}function wa(){return un=pa<Jv?gn(vo,pa++):0,oo++,un===10&&(oo=1,Vu++),un}function gr(){return gn(vo,pa)}function pu(){return pa}function Uu(n,i){return ro(vo,n,i)}function kd(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $3(n){return Vu=oo=1,Jv=Da(vo=n),pa=0,[]}function H3(n){return vo="",n}function ad(n){return Zv(Uu(pa-1,Od(n===91?n+2:n===40?n+1:n)))}function q3(n){for(;(un=gr())&&un<33;)wa();return kd(n)>2||kd(un)>3?"":" "}function Y3(n,i){for(;--i&&wa()&&!(un<48||un>102||un>57&&un<65||un>70&&un<97););return Uu(n,pu()+(i<6&&gr()==32&&wa()==32))}function Od(n){for(;wa();)switch(un){case n:return pa;case 34:case 39:n!==34&&n!==39&&Od(un);break;case 40:n===41&&Od(n);break;case 92:wa();break}return pa}function G3(n,i){for(;wa()&&n+un!==57;)if(n+un===84&&gr()===47)break;return"/*"+Uu(i,pa-1)+"*"+f0(n===47?n:wa())}function X3(n){for(;!kd(gr());)wa();return Uu(n,pa)}function K3(n){return H3(mu("",null,null,null,[""],n=$3(n),0,[0],n))}function mu(n,i,o,s,u,f,d,p,h){for(var m=0,v=0,b=d,x=0,S=0,C=0,z=1,M=1,A=1,D=0,O="",L=u,B=f,W=s,st=O;M;)switch(C=D,D=wa()){case 40:if(C!=108&&gn(st,b-1)==58){hu(st+=Ft(ad(D),"&","&\f"),"&\f",Fv(m?p[m-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:st+=ad(D);break;case 9:case 10:case 13:case 32:st+=q3(C);break;case 92:st+=Y3(pu()-1,7);continue;case 47:switch(gr()){case 42:case 47:xs(Q3(G3(wa(),pu()),i,o,h),h);break;default:st+="/"}break;case 123*z:p[m++]=Da(st)*A;case 125*z:case 59:case 0:switch(D){case 0:case 125:M=0;case 59+v:A==-1&&(st=Ft(st,/\f/g,"")),S>0&&Da(st)-b&&xs(S>32?zg(st+";",s,o,b-1,h):zg(Ft(st," ","")+";",s,o,b-2,h),h);break;case 59:st+=";";default:if(xs(W=Rg(st,i,o,m,v,u,p,O,L=[],B=[],b,f),f),D===123)if(v===0)mu(st,i,W,W,L,f,b,p,B);else switch(x===99&&gn(st,3)===110?100:x){case 100:case 108:case 109:case 115:mu(n,W,W,s&&xs(Rg(n,W,W,0,0,u,p,O,u,L=[],b,B),B),u,B,b,p,s?L:B);break;default:mu(st,W,W,W,[""],B,0,p,B)}}m=v=S=0,z=A=1,O=st="",b=d;break;case 58:b=1+Da(st),S=C;default:if(z<1){if(D==123)--z;else if(D==125&&z++==0&&U3()==125)continue}switch(st+=f0(D),D*z){case 38:A=v>0?1:(st+="\f",-1);break;case 44:p[m++]=(Da(st)-1)*A,A=1;break;case 64:gr()===45&&(st+=ad(wa())),x=gr(),v=b=Da(O=st+=X3(pu())),D++;break;case 45:C===45&&Da(st)==2&&(z=0)}}return f}function Rg(n,i,o,s,u,f,d,p,h,m,v,b){for(var x=u-1,S=u===0?f:[""],C=Wv(S),z=0,M=0,A=0;z<s;++z)for(var D=0,O=ro(n,x+1,x=Fv(M=d[z])),L=n;D<C;++D)(L=Zv(M>0?S[D]+" "+O:Ft(O,/&\f/g,S[D])))&&(h[A++]=L);return Pu(n,i,o,u===0?_u:p,h,m,v,b)}function Q3(n,i,o,s){return Pu(n,i,o,Kv,f0(P3()),ro(n,2,-2),0,s)}function zg(n,i,o,s,u){return Pu(n,i,o,c0,ro(n,0,s),ro(n,s+1,-1),s,u)}function Iv(n,i,o){switch(_3(n,i)){case 5103:return xe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+n+n;case 4789:return Es+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+n+Es+n+ke+n+n;case 5936:switch(gn(n,i+11)){case 114:return xe+n+ke+Ft(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return xe+n+ke+Ft(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return xe+n+ke+Ft(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return xe+n+ke+n+n;case 6165:return xe+n+ke+"flex-"+n+n;case 5187:return xe+n+Ft(n,/(\w+).+(:[^]+)/,xe+"box-$1$2"+ke+"flex-$1$2")+n;case 5443:return xe+n+ke+"flex-item-"+Ft(n,/flex-|-self/g,"")+(ai(n,/flex-|baseline/)?"":ke+"grid-row-"+Ft(n,/flex-|-self/g,""))+n;case 4675:return xe+n+ke+"flex-line-pack"+Ft(n,/align-content|flex-|-self/g,"")+n;case 5548:return xe+n+ke+Ft(n,"shrink","negative")+n;case 5292:return xe+n+ke+Ft(n,"basis","preferred-size")+n;case 6060:return xe+"box-"+Ft(n,"-grow","")+xe+n+ke+Ft(n,"grow","positive")+n;case 4554:return xe+Ft(n,/([^-])(transform)/g,"$1"+xe+"$2")+n;case 6187:return Ft(Ft(Ft(n,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),n,"")+n;case 5495:case 3959:return Ft(n,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return Ft(Ft(n,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+n+n;case 4200:if(!ai(n,/flex-|baseline/))return ke+"grid-column-align"+ro(n,i)+n;break;case 2592:case 3360:return ke+Ft(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(s,u){return i=u,ai(s.props,/grid-\w+-end/)})?~hu(n+(o=o[i].value),"span",0)?n:ke+Ft(n,"-start","")+n+ke+"grid-row-span:"+(~hu(o,"span",0)?ai(o,/\d+/):+ai(o,/\d+/)-+ai(n,/\d+/))+";":ke+Ft(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(s){return ai(s.props,/grid-\w+-start/)})?n:ke+Ft(Ft(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ft(n,/(.+)-inline(.+)/,xe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Da(n)-1-i>6)switch(gn(n,i+1)){case 109:if(gn(n,i+4)!==45)break;case 102:return Ft(n,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+Es+(gn(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~hu(n,"stretch",0)?Iv(Ft(n,"stretch","fill-available"),i,o)+n:n}break;case 5152:case 5920:return Ft(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,f,d,p,h,m){return ke+u+":"+f+m+(d?ke+u+"-span:"+(p?h:+h-+f)+m:"")+n});case 4949:if(gn(n,i+6)===121)return Ft(n,":",":"+xe)+n;break;case 6444:switch(gn(n,gn(n,14)===45?18:11)){case 120:return Ft(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(gn(n,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+ke+"$2box$3")+n;case 100:return Ft(n,":",":"+ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ft(n,"scroll-","scroll-snap-")+n}return n}function Su(n,i){for(var o="",s=0;s<n.length;s++)o+=i(n[s],s,n,i)||"";return o}function F3(n,i,o,s){switch(n.type){case L3:if(n.children.length)break;case N3:case c0:return n.return=n.return||n.value;case Kv:return"";case Qv:return n.return=n.value+"{"+Su(n.children,s)+"}";case _u:if(!Da(n.value=n.props.join(",")))return""}return Da(o=Su(n.children,s))?n.return=n.value+"{"+o+"}":""}function Z3(n){var i=Wv(n);return function(o,s,u,f){for(var d="",p=0;p<i;p++)d+=n[p](o,s,u,f)||"";return d}}function W3(n){return function(i){i.root||(i=i.return)&&n(i)}}function J3(n,i,o,s){if(n.length>-1&&!n.return)switch(n.type){case c0:n.return=Iv(n.value,n.length,o);return;case Qv:return Su([_i(n,{value:Ft(n.value,"@","@"+xe)})],s);case _u:if(n.length)return V3(o=n.props,function(u){switch(ai(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wr(_i(n,{props:[Ft(u,/:(read-\w+)/,":"+Es+"$1")]})),Wr(_i(n,{props:[u]})),Md(n,{props:jg(o,s)});break;case"::placeholder":Wr(_i(n,{props:[Ft(u,/:(plac\w+)/,":"+xe+"input-$1")]})),Wr(_i(n,{props:[Ft(u,/:(plac\w+)/,":"+Es+"$1")]})),Wr(_i(n,{props:[Ft(u,/:(plac\w+)/,ke+"input-$1")]})),Wr(_i(n,{props:[u]})),Md(n,{props:jg(o,s)});break}return""})}}var I3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qn={},so=typeof process<"u"&&Qn!==void 0&&(Qn.REACT_APP_SC_ATTR||Qn.SC_ATTR)||"data-styled",ty="active",ey="data-styled-version",$u="6.1.16",d0=`/*!sc*/
`,Eu=typeof window<"u"&&"HTMLElement"in window,tw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qn!==void 0&&Qn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qn.REACT_APP_SC_DISABLE_SPEEDY!==""?Qn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qn!==void 0&&Qn.SC_DISABLE_SPEEDY!==void 0&&Qn.SC_DISABLE_SPEEDY!==""&&Qn.SC_DISABLE_SPEEDY!=="false"&&Qn.SC_DISABLE_SPEEDY),Hu=Object.freeze([]),lo=Object.freeze({});function ew(n,i,o){return o===void 0&&(o=lo),n.theme!==o.theme&&n.theme||i||o.theme}var ny=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aw=/(^-|-$)/g;function Mg(n){return n.replace(nw,"-").replace(aw,"")}var iw=/(a)(d)/gi,iu=52,kg=function(n){return String.fromCharCode(n+(n>25?39:97))};function Dd(n){var i,o="";for(i=Math.abs(n);i>iu;i=i/iu|0)o=kg(i%iu)+o;return(kg(i%iu)+o).replace(iw,"$1-$2")}var id,ay=5381,Ir=function(n,i){for(var o=i.length;o;)n=33*n^i.charCodeAt(--o);return n},iy=function(n){return Ir(ay,n)};function ry(n){return Dd(iy(n)>>>0)}function rw(n){return n.displayName||n.name||"Component"}function rd(n){return typeof n=="string"&&!0}var oy=typeof Symbol=="function"&&Symbol.for,sy=oy?Symbol.for("react.memo"):60115,ow=oy?Symbol.for("react.forward_ref"):60112,sw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ly={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uw=((id={})[ow]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},id[sy]=ly,id);function Og(n){return("type"in(i=n)&&i.type.$$typeof)===sy?ly:"$$typeof"in n?uw[n.$$typeof]:sw;var i}var cw=Object.defineProperty,fw=Object.getOwnPropertyNames,Dg=Object.getOwnPropertySymbols,dw=Object.getOwnPropertyDescriptor,hw=Object.getPrototypeOf,Bg=Object.prototype;function uy(n,i,o){if(typeof i!="string"){if(Bg){var s=hw(i);s&&s!==Bg&&uy(n,s,o)}var u=fw(i);Dg&&(u=u.concat(Dg(i)));for(var f=Og(n),d=Og(i),p=0;p<u.length;++p){var h=u[p];if(!(h in lw||o&&o[h]||d&&h in d||f&&h in f)){var m=dw(i,h);try{cw(n,h,m)}catch{}}}}return n}function uo(n){return typeof n=="function"}function h0(n){return typeof n=="object"&&"styledComponentId"in n}function hr(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Bd(n,i){if(n.length===0)return"";for(var o=n[0],s=1;s<n.length;s++)o+=n[s];return o}function Ms(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Nd(n,i,o){if(o===void 0&&(o=!1),!o&&!Ms(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)n[s]=Nd(n[s],i[s]);else if(Ms(i))for(var s in i)n[s]=Nd(n[s],i[s]);return n}function p0(n,i){Object.defineProperty(n,"toString",{value:i})}function Fs(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var pw=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return n.prototype.indexOfGroup=function(i){for(var o=0,s=0;s<i;s++)o+=this.groupSizes[s];return o},n.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var s=this.groupSizes,u=s.length,f=u;i>=f;)if((f<<=1)<0)throw Fs(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var d=u;d<f;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(i+1),h=(d=0,o.length);d<h;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[i]++,p++)},n.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],s=this.indexOfGroup(i),u=s+o;this.groupSizes[i]=0;for(var f=s;f<u;f++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var s=this.groupSizes[i],u=this.indexOfGroup(i),f=u+s,d=u;d<f;d++)o+="".concat(this.tag.getRule(d)).concat(d0);return o},n}(),gu=new Map,Cu=new Map,vu=1,ru=function(n){if(gu.has(n))return gu.get(n);for(;Cu.has(vu);)vu++;var i=vu++;return gu.set(n,i),Cu.set(i,n),i},mw=function(n,i){vu=i+1,gu.set(n,i),Cu.set(i,n)},gw="style[".concat(so,"][").concat(ey,'="').concat($u,'"]'),vw=new RegExp("^".concat(so,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yw=function(n,i,o){for(var s,u=o.split(","),f=0,d=u.length;f<d;f++)(s=u[f])&&n.registerName(i,s)},bw=function(n,i){for(var o,s=((o=i.textContent)!==null&&o!==void 0?o:"").split(d0),u=[],f=0,d=s.length;f<d;f++){var p=s[f].trim();if(p){var h=p.match(vw);if(h){var m=0|parseInt(h[1],10),v=h[2];m!==0&&(mw(v,m),yw(n,v,h[3]),n.getTag().insertRules(m,u)),u.length=0}else u.push(p)}}},Ng=function(n){for(var i=document.querySelectorAll(gw),o=0,s=i.length;o<s;o++){var u=i[o];u&&u.getAttribute(so)!==ty&&(bw(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function xw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cy=function(n){var i=document.head,o=n||i,s=document.createElement("style"),u=function(p){var h=Array.from(p.querySelectorAll("style[".concat(so,"]")));return h[h.length-1]}(o),f=u!==void 0?u.nextSibling:null;s.setAttribute(so,ty),s.setAttribute(ey,$u);var d=xw();return d&&s.setAttribute("nonce",d),o.insertBefore(s,f),s},ww=function(){function n(i){this.element=cy(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var s=document.styleSheets,u=0,f=s.length;u<f;u++){var d=s[u];if(d.ownerNode===o)return d}throw Fs(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},n}(),Sw=function(){function n(i){this.element=cy(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var s=document.createTextNode(o);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),Ew=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),Lg=Eu,Cw={isServer:!Eu,useCSSOMInjection:!tw},fy=function(){function n(i,o,s){i===void 0&&(i=lo),o===void 0&&(o={});var u=this;this.options=_n(_n({},Cw),i),this.gs=o,this.names=new Map(s),this.server=!!i.isServer,!this.server&&Eu&&Lg&&(Lg=!1,Ng(this)),p0(this,function(){return function(f){for(var d=f.getTag(),p=d.length,h="",m=function(b){var x=function(A){return Cu.get(A)}(b);if(x===void 0)return"continue";var S=f.names.get(x),C=d.getGroup(b);if(S===void 0||!S.size||C.length===0)return"continue";var z="".concat(so,".g").concat(b,'[id="').concat(x,'"]'),M="";S!==void 0&&S.forEach(function(A){A.length>0&&(M+="".concat(A,","))}),h+="".concat(C).concat(z,'{content:"').concat(M,'"}').concat(d0)},v=0;v<p;v++)m(v);return h}(u)})}return n.registerId=function(i){return ru(i)},n.prototype.rehydrate=function(){!this.server&&Eu&&Ng(this)},n.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new n(_n(_n({},this.options),i),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var s=o.useCSSOMInjection,u=o.target;return o.isServer?new Ew(u):s?new ww(u):new Sw(u)}(this.options),new pw(i)));var i},n.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},n.prototype.registerName=function(i,o){if(ru(i),this.names.has(i))this.names.get(i).add(o);else{var s=new Set;s.add(o),this.names.set(i,s)}},n.prototype.insertRules=function(i,o,s){this.registerName(i,o),this.getTag().insertRules(ru(i),s)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(ru(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Aw=/&/g,Tw=/^\s*\/\/.*$/gm;function dy(n,i){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=dy(o.children,i)),o})}function jw(n){var i,o,s,u=lo,f=u.options,d=f===void 0?lo:f,p=u.plugins,h=p===void 0?Hu:p,m=function(x,S,C){return C.startsWith(o)&&C.endsWith(o)&&C.replaceAll(o,"").length>0?".".concat(i):x},v=h.slice();v.push(function(x){x.type===_u&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Aw,o).replace(s,m))}),d.prefix&&v.push(J3),v.push(F3);var b=function(x,S,C,z){S===void 0&&(S=""),C===void 0&&(C=""),z===void 0&&(z="&"),i=z,o=S,s=new RegExp("\\".concat(o,"\\b"),"g");var M=x.replace(Tw,""),A=K3(C||S?"".concat(C," ").concat(S," { ").concat(M," }"):M);d.namespace&&(A=dy(A,d.namespace));var D=[];return Su(A,Z3(v.concat(W3(function(O){return D.push(O)})))),D};return b.hash=h.length?h.reduce(function(x,S){return S.name||Fs(15),Ir(x,S.name)},ay).toString():"",b}var Rw=new fy,Ld=jw(),hy=ha.createContext({shouldForwardProp:void 0,styleSheet:Rw,stylis:Ld});hy.Consumer;ha.createContext(void 0);function _g(){return T.useContext(hy)}var py=function(){function n(i,o){var s=this;this.inject=function(u,f){f===void 0&&(f=Ld);var d=s.name+f.hash;u.hasNameForId(s.id,d)||u.insertRules(s.id,d,f(s.rules,d,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,p0(this,function(){throw Fs(12,String(s.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=Ld),this.name+i.hash},n}(),zw=function(n){return n>="A"&&n<="Z"};function Vg(n){for(var i="",o=0;o<n.length;o++){var s=n[o];if(o===1&&s==="-"&&n[0]==="-")return n;zw(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var my=function(n){return n==null||n===!1||n===""},gy=function(n){var i,o,s=[];for(var u in n){var f=n[u];n.hasOwnProperty(u)&&!my(f)&&(Array.isArray(f)&&f.isCss||uo(f)?s.push("".concat(Vg(u),":"),f,";"):Ms(f)?s.push.apply(s,zs(zs(["".concat(u," {")],gy(f),!1),["}"],!1)):s.push("".concat(Vg(u),": ").concat((i=u,(o=f)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in I3||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return s};function vr(n,i,o,s){if(my(n))return[];if(h0(n))return[".".concat(n.styledComponentId)];if(uo(n)){if(!uo(f=n)||f.prototype&&f.prototype.isReactComponent||!i)return[n];var u=n(i);return vr(u,i,o,s)}var f;return n instanceof py?o?(n.inject(o,s),[n.getName(s)]):[n]:Ms(n)?gy(n):Array.isArray(n)?Array.prototype.concat.apply(Hu,n.map(function(d){return vr(d,i,o,s)})):[n.toString()]}function Mw(n){for(var i=0;i<n.length;i+=1){var o=n[i];if(uo(o)&&!h0(o))return!1}return!0}var kw=iy($u),Ow=function(){function n(i,o,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Mw(i),this.componentId=o,this.baseHash=Ir(kw,o),this.baseStyle=s,fy.registerId(o)}return n.prototype.generateAndInjectStyles=function(i,o,s){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=hr(u,this.staticRulesId);else{var f=Bd(vr(this.rules,i,o,s)),d=Dd(Ir(this.baseHash,f)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=s(f,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}u=hr(u,d),this.staticRulesId=d}else{for(var h=Ir(this.baseHash,s.hash),m="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")m+=b;else if(b){var x=Bd(vr(b,i,o,s));h=Ir(h,x+v),m+=x}}if(m){var S=Dd(h>>>0);o.hasNameForId(this.componentId,S)||o.insertRules(this.componentId,S,s(m,".".concat(S),void 0,this.componentId)),u=hr(u,S)}}return u},n}(),vy=ha.createContext(void 0);vy.Consumer;var od={};function Dw(n,i,o){var s=h0(n),u=n,f=!rd(n),d=i.attrs,p=d===void 0?Hu:d,h=i.componentId,m=h===void 0?function(L,B){var W=typeof L!="string"?"sc":Mg(L);od[W]=(od[W]||0)+1;var st="".concat(W,"-").concat(ry($u+W+od[W]));return B?"".concat(B,"-").concat(st):st}(i.displayName,i.parentComponentId):h,v=i.displayName,b=v===void 0?function(L){return rd(L)?"styled.".concat(L):"Styled(".concat(rw(L),")")}(n):v,x=i.displayName&&i.componentId?"".concat(Mg(i.displayName),"-").concat(i.componentId):i.componentId||m,S=s&&u.attrs?u.attrs.concat(p).filter(Boolean):p,C=i.shouldForwardProp;if(s&&u.shouldForwardProp){var z=u.shouldForwardProp;if(i.shouldForwardProp){var M=i.shouldForwardProp;C=function(L,B){return z(L,B)&&M(L,B)}}else C=z}var A=new Ow(o,x,s?u.componentStyle:void 0);function D(L,B){return function(W,st,dt){var Q=W.attrs,yt=W.componentStyle,et=W.defaultProps,ue=W.foldedComponentIds,Se=W.styledComponentId,Z=W.target,Dt=ha.useContext(vy),G=_g(),K=W.shouldForwardProp||G.shouldForwardProp,it=ew(st,Dt,et)||lo,gt=function(ft,ot,Tt){for(var St,H=_n(_n({},ot),{className:void 0,theme:Tt}),Nt=0;Nt<ft.length;Nt+=1){var bt=uo(St=ft[Nt])?St(H):St;for(var Jt in bt)H[Jt]=Jt==="className"?hr(H[Jt],bt[Jt]):Jt==="style"?_n(_n({},H[Jt]),bt[Jt]):bt[Jt]}return ot.className&&(H.className=hr(H.className,ot.className)),H}(Q,st,it),k=gt.as||Z,nt={};for(var vt in gt)gt[vt]===void 0||vt[0]==="$"||vt==="as"||vt==="theme"&&gt.theme===it||(vt==="forwardedAs"?nt.as=gt.forwardedAs:K&&!K(vt,k)||(nt[vt]=gt[vt]));var wt=function(ft,ot){var Tt=_g(),St=ft.generateAndInjectStyles(ot,Tt.styleSheet,Tt.stylis);return St}(yt,gt),pt=hr(ue,Se);return wt&&(pt+=" "+wt),gt.className&&(pt+=" "+gt.className),nt[rd(k)&&!ny.has(k)?"class":"className"]=pt,dt&&(nt.ref=dt),T.createElement(k,nt)}(O,L,B)}D.displayName=b;var O=ha.forwardRef(D);return O.attrs=S,O.componentStyle=A,O.displayName=b,O.shouldForwardProp=C,O.foldedComponentIds=s?hr(u.foldedComponentIds,u.styledComponentId):"",O.styledComponentId=x,O.target=s?u.target:n,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=s?function(B){for(var W=[],st=1;st<arguments.length;st++)W[st-1]=arguments[st];for(var dt=0,Q=W;dt<Q.length;dt++)Nd(B,Q[dt],!0);return B}({},u.defaultProps,L):L}}),p0(O,function(){return".".concat(O.styledComponentId)}),f&&uy(O,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function Pg(n,i){for(var o=[n[0]],s=0,u=i.length;s<u;s+=1)o.push(i[s],n[s+1]);return o}var Ug=function(n){return Object.assign(n,{isCss:!0})};function yo(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(uo(n)||Ms(n))return Ug(vr(Pg(Hu,zs([n],i,!0))));var s=n;return i.length===0&&s.length===1&&typeof s[0]=="string"?vr(s):Ug(vr(Pg(s,i)))}function _d(n,i,o){if(o===void 0&&(o=lo),!i)throw Fs(1,i);var s=function(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return n(i,o,yo.apply(void 0,zs([u],f,!1)))};return s.attrs=function(u){return _d(n,i,_n(_n({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},s.withConfig=function(u){return _d(n,i,_n(_n({},o),u))},s}var yy=function(n){return _d(Dw,n)},E=yy;ny.forEach(function(n){E[n]=yy(n)});function Te(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var s=Bd(yo.apply(void 0,zs([n],i,!1))),u=ry(s);return new py(u,s)}var by={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$g=ha.createContext&&ha.createContext(by),Bw=["attr","size","title"];function Nw(n,i){if(n==null)return{};var o=Lw(n,i),s,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(u=0;u<f.length;u++)s=f[u],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(o[s]=n[s])}return o}function Lw(n,i){if(n==null)return{};var o={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(i.indexOf(s)>=0)continue;o[s]=n[s]}return o}function Au(){return Au=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])}return n},Au.apply(this,arguments)}function Hg(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,s)}return o}function Tu(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?Hg(Object(o),!0).forEach(function(s){_w(n,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Hg(Object(o)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(o,s))})}return n}function _w(n,i,o){return i=Vw(i),i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}function Vw(n){var i=Pw(n,"string");return typeof i=="symbol"?i:i+""}function Pw(n,i){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var s=o.call(n,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function xy(n){return n&&n.map((i,o)=>ha.createElement(i.tag,Tu({key:o},i.attr),xy(i.child)))}function rn(n){return i=>ha.createElement(Uw,Au({attr:Tu({},n.attr)},i),xy(n.child))}function Uw(n){var i=o=>{var{attr:s,size:u,title:f}=n,d=Nw(n,Bw),p=u||o.size||"1em",h;return o.className&&(h=o.className),n.className&&(h=(h?h+" ":"")+n.className),ha.createElement("svg",Au({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,d,{className:h,style:Tu(Tu({color:n.color||o.color},o.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),f&&ha.createElement("title",null,f),n.children)};return $g!==void 0?ha.createElement($g.Consumer,null,o=>i(o)):i(by)}function br(n){return rn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function $w(n){return rn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z"},child:[]}]})(n)}function qu(n){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function Hw(n){return rn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"},child:[]}]})(n)}function qw(n){return rn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function Yw(n){return rn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function wy(n){return rn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(n)}function Vd(n){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"},child:[]}]})(n)}function Gw(n){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(n)}function Xw(n){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function Kw(n){return rn({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"},child:[]}]})(n)}function Sy(n){return rn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(n)}function m0(n){return rn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function co(n){return rn({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function Ey(n){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(n)}function Qw(n){return rn({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function Fw(n){return rn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z"},child:[]}]})(n)}function Zw(n){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function Ww(n){return rn({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(n)}const Jw="/vegetaquizshow/assets/vegetaball-DRzOjpAa.webp",Cy=T.createContext(void 0),Iw=({children:n})=>{const[i,o]=T.useState(0),[s,u]=T.useState(0),[f,d]=T.useState(!1),[p,h]=T.useState(()=>{const D=localStorage.getItem("quizPlayers");return D?JSON.parse(D):[]}),[m,v]=T.useState(null);T.useEffect(()=>{const D=localStorage.getItem("quizPlayers");if(D){const O=JSON.parse(D);h(O),O.length>0&&v(O[0])}},[]),T.useEffect(()=>{localStorage.setItem("quizPlayers",JSON.stringify(p))},[p]);const b=D=>{const O={...D,id:Date.now().toString()};h([...p,O]),p.length===0&&v(O)},x=D=>{if(h(p.filter(O=>O.id!==D)),m&&m.id===D){const O=p.filter(L=>L.id!==D);v(O.length>0?O[0]:null)}},S=(D,O)=>{h(p.map(L=>L.id===D?{...L,score:O}:L)),m&&m.id===D&&v({...m,score:O})},[C,z]=T.useState([]),A={score:i,setScore:o,currentQuestion:s,setCurrentQuestion:u,isGameActive:f,setIsGameActive:d,players:p,addPlayer:b,removePlayer:x,updatePlayerScore:S,activePlayer:m,setActivePlayer:v,guessedCards:C,markCardAsGuessed:D=>{z(O=>[...O,D])}};return y.jsx(Cy.Provider,{value:A,children:n})},xr=()=>{const n=T.useContext(Cy);if(n===void 0)throw new Error("useGlobalContext must be used within a GlobalProvider");return n},t4=()=>{const{players:n,addPlayer:i,removePlayer:o}=xr(),[s,u]=T.useState(!1),[f,d]=T.useState(""),[p,h]=T.useState(""),[m,v]=T.useState(""),b=$i(),x=A=>A?`https://play.pokemonshowdown.com/sprites/xyani/${A.toLowerCase().trim().replace(/[^a-z0-9]/g,"")}.gif`:"",S=A=>{const D=A.target.value;h(D),v(x(D))},C=()=>{if(f.trim()){const A=p.trim()?x(p):`https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`;i({name:f.trim(),avatar:A,score:0}),d(""),h(""),v(""),u(!1)}},z=()=>{if(n.length===0){alert("Aggiungi almeno un allenatore prima di iniziare!");return}localStorage.setItem("quizPlayers",JSON.stringify(n)),b("/game")},M=A=>{o(A)};return y.jsxs(n4,{children:[y.jsxs(l4,{children:[y.jsx(sd,{children:"VEGETA"}),y.jsx(sd,{children:"QUIZ"}),y.jsx(sd,{children:"SHOW"})]}),y.jsxs(u4,{children:[y.jsxs(Yg,{onClick:()=>u(!0),$color:"#EE1515",children:[y.jsx(qg,{children:y.jsx(Qw,{})}),y.jsx("span",{children:"Registra Allenatore"})]}),y.jsxs(Yg,{onClick:z,disabled:n.length===0,className:n.length===0?"disabled":"ready",$color:"#3B4CCA",children:[y.jsx(qg,{children:y.jsx(wy,{})}),y.jsx("span",{children:"Inizia Avventura"})]})]}),y.jsxs(c4,{children:[y.jsxs(f4,{children:[y.jsx("h2",{children:"Allenatori"}),n.length>0&&y.jsxs(h4,{children:[y.jsx(d4,{small:!0,style:{transform:"rotate(180deg)"}}),n.length]})]}),n.length===0?y.jsxs(p4,{children:[y.jsx(m4,{children:"Nessun allenatore registrato"}),y.jsx(g4,{onClick:()=>u(!0),children:"Registra il tuo primo allenatore!"})]}):y.jsx(v4,{children:n.map(A=>y.jsxs(Zs,{children:[y.jsx(O4,{children:y.jsx(D4,{src:A.avatar,alt:A.name})}),y.jsx(b4,{children:A.name}),y.jsx(x4,{onClick:()=>M(A.id),children:y.jsx(co,{})}),y.jsx(y4,{children:y.jsx(Vd,{})})]},A.id))})]}),s&&y.jsx(w4,{children:y.jsxs(S4,{children:[y.jsxs(E4,{children:[y.jsx("h2",{children:"Registra Allenatore"}),y.jsx(C4,{onClick:()=>u(!1),children:y.jsx(co,{})})]}),y.jsxs(A4,{children:[y.jsxs(Gg,{children:[y.jsx(Xg,{children:"Nome Allenatore"}),y.jsx(Kg,{type:"text",value:f,onChange:A=>d(A.target.value),placeholder:"Inserisci il nome dell'allenatore"})]}),y.jsxs(Gg,{children:[y.jsx(Xg,{children:"Nome Pokémon"}),y.jsx(Kg,{type:"text",value:p,onChange:S,placeholder:"Inserisci il nome di un Pokémon (es. pikachu, charizard)"}),y.jsx(T4,{children:"Inserisci il nome di un Pokémon per utilizzarlo come avatar"}),m&&y.jsxs(M4,{children:[y.jsx(B4,{children:y.jsx(N4,{src:m,alt:"Anteprima Avatar"})}),y.jsx(k4,{children:"Anteprima Avatar"})]})]}),y.jsxs(j4,{children:[y.jsx(R4,{onClick:()=>u(!1),children:"Annulla"}),y.jsx(z4,{onClick:C,children:"Registra"})]})]})]})}),y.jsxs(a4,{children:[y.jsx(Os,{className:"ball1"}),y.jsx(Os,{className:"ball2"}),y.jsx(r4,{className:"ball3"}),y.jsx(o4,{className:"ball4"}),y.jsx(s4,{className:"ball5"}),y.jsx(i4,{})]}),y.jsx("img",{src:Jw,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:.55,zIndex:0,objectFit:"cover"}})]})},ks=Te`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,e4=Te`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;Te`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;Te`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;const n4=E.div`
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
`,a4=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`,i4=E.div`
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
`,r4=E(Os)`
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
`,o4=E(Os)`
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
`,s4=E(Os)`
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
`,l4=E.h1`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;

  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  animation: ${e4} 3s infinite ease-in-out;
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
`,u4=E.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;

  z-index: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,qg=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
  font-size: 1.3rem;
`,Yg=E.button`
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
`,c4=E.div`
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
`,f4=E.div`
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
`,d4=E.div`
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
`,h4=E.div`
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,p4=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`,m4=E.p`
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin-bottom: 1rem;
`,g4=E.button`
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
`,v4=E.div`
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
`,y4=E.div`
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
`;const b4=E.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  position: relative;
  z-index: 1;
`,x4=E.button`
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
`,w4=E.div`
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
`,S4=E.div`
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
`,E4=E.div`
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
`,C4=E.button`
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
`,A4=E.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`,Gg=E.div`
  margin-bottom: 1.5rem;
`,Xg=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffde00;
  font-weight: 600;
  font-size: 0.9rem;
`,Kg=E.input`
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
`,T4=E.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
`,j4=E.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,R4=E.button`
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
`,z4=E.button`
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
`,M4=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`,k4=E.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`,O4=E.div`
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
`,D4=E.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`,B4=E.div`
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
`,N4=E.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
  display: block;
`;function L4(n){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(n)}function _4(){const n=$i(),{players:i,updatePlayerScore:o}=xr();T.useEffect(()=>{i.length===0&&n("/")},[n,i]);const s=[{id:"categories",title:"Quiz Pokémon",description:"Sfida le tue conoscenze sui Pokémon in varie categorie",icon:y.jsx(wy,{}),color:"#EE1515",path:"/game/categories"},{id:"wheel",title:"Ruota della Fortuna",description:"Gira la ruota e affronta sfide casuali",icon:y.jsx(Hw,{}),color:"#3B4CCA",path:"/game/wheel"},{id:"image",title:"WhO's ThAt PoKéMoN?",description:"Indovina il Pokémon dall'ombra o immagine sfocata",icon:y.jsx(Xw,{}),color:"#FF9C54",path:"/game/image"},{id:"fusion",title:"Fusioni Pokémon",description:"Indovina quali Pokémon creano una fusione",icon:y.jsx($w,{}),color:"#9966FF",path:"/game/fusion"},{id:"pokemon",title:"Poké-Sherlock",description:"Indovina il Pokémon dagli indizi",icon:y.jsx(L4,{}),color:"#78C850",path:"/game/pokemon"}];i.map(f=>y.jsxs(ju,{children:[y.jsx(Jg,{children:y.jsx(t1,{src:f.avatar,alt:f.name})}),y.jsxs(Zg,{children:[y.jsx(Wg,{children:f.name}),y.jsxs(Pd,{children:[y.jsx(Qg,{})," ",f.score," punti"]})]}),y.jsx(Ig,{children:y.jsx(Vd,{})})]},f.id));const u=f=>{const d=prompt(`Modifica il punteggio per ${f.name}:`,f.score.toString());if(d!==null){const p=parseInt(d,10);isNaN(p)?alert("Inserisci un numero valido."):o(f.id,p)}};return y.jsxs(U4,{children:[y.jsxs(G4,{to:"/",children:[y.jsx(br,{})," Torna alla home"]}),y.jsx(X4,{children:"Centro Sfide Pokémon"}),y.jsx(K4,{children:s.map(f=>y.jsxs(g0,{to:f.path,$color:f.color,children:[y.jsx(F4,{$color:f.color,children:f.icon}),y.jsxs(Z4,{children:[y.jsx(W4,{children:f.title}),y.jsx(J4,{children:f.description})]}),y.jsx(I4,{children:y.jsx("div",{className:"arrow",children:"→"})}),y.jsx(Q4,{})]},f.id))}),y.jsxs(tS,{children:[y.jsxs(eS,{children:[y.jsx(nS,{children:"Allenatori"}),y.jsxs(aS,{children:[i.length," ",i.length===1?"allenatore":"allenatori"]})]}),y.jsx(Fg,{children:i.map(f=>y.jsxs(ju,{children:[y.jsx(Jg,{children:y.jsx(t1,{src:f.avatar,alt:f.name})}),y.jsxs(Zg,{children:[y.jsx(Wg,{children:f.name}),y.jsxs(Pd,{onClick:()=>u(f),children:[y.jsx(Qg,{})," ",f.score," punti",y.jsx(iS,{children:y.jsx(qw,{})})]})]}),y.jsx(Ig,{children:y.jsx(Vd,{})})]},f.id))})]}),y.jsxs($4,{children:[y.jsx(Bs,{className:"ball1"}),y.jsx(Bs,{className:"ball2"}),y.jsx(H4,{className:"ball3"}),y.jsx(q4,{className:"ball4"}),y.jsx(Y4,{className:"ball5"})]})]})}const Ds=Te`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;Te`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;const V4=Te`
  0% { background-position: -200px; }
  100% { background-position: 200px; }
`,P4=Te`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,U4=E.div`
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
`,$4=E.div`
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
`,H4=E(Bs)`
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
`,q4=E(Bs)`
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
`,Y4=E(Bs)`
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
`,G4=E(Va)`
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
`,X4=E.h1`
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
`,K4=E.div`
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
`,g0=E(Va)`
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
      animation: ${V4} 1s;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,Q4=E.div`
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

  ${g0}:hover & {
    animation: ${P4} 1s ease-in-out;
  }
`,F4=E.div`
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
`,Z4=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,W4=E.h3`
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,J4=E.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
`,I4=E.div`
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

  ${g0}:hover .arrow {
    transform: translateX(5px);
    opacity: 1;
  }
`,Qg=E.div`
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
`,tS=E.div`
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
`,eS=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
`,nS=E.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,aS=E.div`
  background: linear-gradient(45deg, #ee1515, #3b4cca);
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
`,Fg=E.div`
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
`;const Zg=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,Wg=E.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`,Pd=E.div`
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
`,iS=E.span`
  margin-left: 0.5rem;
  opacity: 0;
  transition: all 0.2s ease;
  color: #ffde00;

  ${Pd}:hover & {
    opacity: 1;
  }
`,Jg=E.div`
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
`,Ig=E.div`
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
`,t1=E.img`
  width: 70%;
  height: 70%;
  object-fit: contain;
  display: block;
`,v0=T.createContext({});function y0(n){const i=T.useRef(null);return i.current===null&&(i.current=n()),i.current}const b0=typeof window<"u",Ay=b0?T.useLayoutEffect:T.useEffect,Yu=T.createContext(null),x0=T.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class rS extends T.Component{getSnapshotBeforeUpdate(i){const o=this.props.childRef.current;if(o&&i.isPresent&&!this.props.isPresent){const s=o.offsetParent,u=s instanceof HTMLElement&&s.offsetWidth||0,f=this.props.sizeRef.current;f.height=o.offsetHeight||0,f.width=o.offsetWidth||0,f.top=o.offsetTop,f.left=o.offsetLeft,f.right=u-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function oS({children:n,isPresent:i,anchorX:o}){const s=T.useId(),u=T.useRef(null),f=T.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=T.useContext(x0);return T.useInsertionEffect(()=>{const{width:p,height:h,top:m,left:v,right:b}=f.current;if(i||!u.current||!p||!h)return;const x=o==="left"?`left: ${v}`:`right: ${b}`;u.current.dataset.motionPopId=s;const S=document.createElement("style");return d&&(S.nonce=d),document.head.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${h}px !important;
            ${x}px !important;
            top: ${m}px !important;
          }
        `),()=>{document.head.removeChild(S)}},[i]),y.jsx(rS,{isPresent:i,childRef:u,sizeRef:f,children:T.cloneElement(n,{ref:u})})}const sS=({children:n,initial:i,isPresent:o,onExitComplete:s,custom:u,presenceAffectsLayout:f,mode:d,anchorX:p})=>{const h=y0(lS),m=T.useId(),v=T.useCallback(x=>{h.set(x,!0);for(const S of h.values())if(!S)return;s&&s()},[h,s]),b=T.useMemo(()=>({id:m,initial:i,isPresent:o,custom:u,onExitComplete:v,register:x=>(h.set(x,!1),()=>h.delete(x))}),f?[Math.random(),v]:[o,v]);return T.useMemo(()=>{h.forEach((x,S)=>h.set(S,!1))},[o]),T.useEffect(()=>{!o&&!h.size&&s&&s()},[o]),d==="popLayout"&&(n=y.jsx(oS,{isPresent:o,anchorX:p,children:n})),y.jsx(Yu.Provider,{value:b,children:n})};function lS(){return new Map}function Ty(n=!0){const i=T.useContext(Yu);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:u}=i,f=T.useId();T.useEffect(()=>{if(n)return u(f)},[n]);const d=T.useCallback(()=>n&&s&&s(f),[f,s,n]);return!o&&s?[!1,d]:[!0]}const ou=n=>n.key||"";function e1(n){const i=[];return T.Children.forEach(n,o=>{T.isValidElement(o)&&i.push(o)}),i}const uS=({children:n,custom:i,initial:o=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:p="left"})=>{const[h,m]=Ty(d),v=T.useMemo(()=>e1(n),[n]),b=d&&!h?[]:v.map(ou),x=T.useRef(!0),S=T.useRef(v),C=y0(()=>new Map),[z,M]=T.useState(v),[A,D]=T.useState(v);Ay(()=>{x.current=!1,S.current=v;for(let B=0;B<A.length;B++){const W=ou(A[B]);b.includes(W)?C.delete(W):C.get(W)!==!0&&C.set(W,!1)}},[A,b.length,b.join("-")]);const O=[];if(v!==z){let B=[...v];for(let W=0;W<A.length;W++){const st=A[W],dt=ou(st);b.includes(dt)||(B.splice(W,0,st),O.push(st))}return f==="wait"&&O.length&&(B=O),D(e1(B)),M(v),null}const{forceRender:L}=T.useContext(v0);return y.jsx(y.Fragment,{children:A.map(B=>{const W=ou(B),st=d&&!h?!1:v===A||b.includes(W),dt=()=>{if(C.has(W))C.set(W,!0);else return;let Q=!0;C.forEach(yt=>{yt||(Q=!1)}),Q&&(L==null||L(),D(S.current),d&&(m==null||m()),s&&s())};return y.jsx(sS,{isPresent:st,initial:!x.current||o?void 0:!1,custom:i,presenceAffectsLayout:u,mode:f,onExitComplete:st?void 0:dt,anchorX:p,children:B},W)})})};function w0(n,i){n.indexOf(i)===-1&&n.push(i)}function S0(n,i){const o=n.indexOf(i);o>-1&&n.splice(o,1)}const Fn=n=>n;let jy=Fn;const cS={useManualTiming:!1};function E0(n){let i;return()=>(i===void 0&&(i=n()),i)}const fo=(n,i,o)=>{const s=i-n;return s===0?1:(o-n)/s};class C0{constructor(){this.subscriptions=[]}add(i){return w0(this.subscriptions,i),()=>S0(this.subscriptions,i)}notify(i,o,s){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,o,s);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ri=n=>n*1e3,oi=n=>n/1e3;function Ry(n,i){return i?n*(1e3/i):0}const fS=E0(()=>window.ScrollTimeline!==void 0);class dS{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,o){for(let s=0;s<this.animations.length;s++)this.animations[s][i]=o}attachTimeline(i,o){const s=this.animations.map(u=>{if(fS()&&u.attachTimeline)return u.attachTimeline(i);if(typeof o=="function")return o(u)});return()=>{s.forEach((u,f)=>{u&&u(),this.animations[f].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let o=0;o<this.animations.length;o++)i=Math.max(i,this.animations[o].duration);return i}runAll(i){this.animations.forEach(o=>o[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class hS extends dS{then(i,o){return Promise.all(this.animations).then(i).catch(o)}}function A0(n,i){return n?n[i]||n.default||n:void 0}const Ud=2e4;function zy(n){let i=0;const o=50;let s=n.next(i);for(;!s.done&&i<Ud;)i+=o,s=n.next(i);return i>=Ud?1/0:i}function T0(n){return typeof n=="function"}function n1(n,i){n.timeline=i,n.onfinish=null}const j0=n=>Array.isArray(n)&&typeof n[0]=="number",pS={linearEasing:void 0};function mS(n,i){const o=E0(n);return()=>{var s;return(s=pS[i])!==null&&s!==void 0?s:o()}}const Ru=mS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),My=(n,i,o=10)=>{let s="";const u=Math.max(Math.round(i/o),2);for(let f=0;f<u;f++)s+=n(fo(0,u-1,f))+", ";return`linear(${s.substring(0,s.length-2)})`};function ky(n){return!!(typeof n=="function"&&Ru()||!n||typeof n=="string"&&(n in $d||Ru())||j0(n)||Array.isArray(n)&&n.every(ky))}const ws=([n,i,o,s])=>`cubic-bezier(${n}, ${i}, ${o}, ${s})`,$d={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ws([0,.65,.55,1]),circOut:ws([.55,0,1,.45]),backIn:ws([.31,.01,.66,-.59]),backOut:ws([.33,1.53,.69,.99])};function Oy(n,i){if(n)return typeof n=="function"&&Ru()?My(n,i):j0(n)?ws(n):Array.isArray(n)?n.map(o=>Oy(o,i)||$d.easeOut):$d[n]}const su=["read","resolveKeyframes","update","preRender","render","postRender"],a1={value:null};function gS(n,i){let o=new Set,s=new Set,u=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1},h=0;function m(b){d.has(b)&&(v.schedule(b),n()),h++,b(p)}const v={schedule:(b,x=!1,S=!1)=>{const z=S&&u?o:s;return x&&d.add(b),z.has(b)||z.add(b),b},cancel:b=>{s.delete(b),d.delete(b)},process:b=>{if(p=b,u){f=!0;return}u=!0,[o,s]=[s,o],o.forEach(m),i&&a1.value&&a1.value.frameloop[i].push(h),h=0,o.clear(),u=!1,f&&(f=!1,v.process(b))}};return v}const vS=40;function Dy(n,i){let o=!1,s=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=su.reduce((A,D)=>(A[D]=gS(f,i?D:void 0),A),{}),{read:p,resolveKeyframes:h,update:m,preRender:v,render:b,postRender:x}=d,S=()=>{const A=performance.now();o=!1,u.delta=s?1e3/60:Math.max(Math.min(A-u.timestamp,vS),1),u.timestamp=A,u.isProcessing=!0,p.process(u),h.process(u),m.process(u),v.process(u),b.process(u),x.process(u),u.isProcessing=!1,o&&i&&(s=!1,n(S))},C=()=>{o=!0,s=!0,u.isProcessing||n(S)};return{schedule:su.reduce((A,D)=>{const O=d[D];return A[D]=(L,B=!1,W=!1)=>(o||C(),O.schedule(L,B,W)),A},{}),cancel:A=>{for(let D=0;D<su.length;D++)d[su[D]].cancel(A)},state:u,steps:d}}const{schedule:ze,cancel:Pi,state:En,steps:ld}=Dy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fn,!0),{schedule:R0}=Dy(queueMicrotask,!1);let yu;function yS(){yu=void 0}const Ba={now:()=>(yu===void 0&&Ba.set(En.isProcessing||cS.useManualTiming?En.timestamp:performance.now()),yu),set:n=>{yu=n,queueMicrotask(yS)}},xa={x:!1,y:!1};function By(){return xa.x||xa.y}function bS(n){return n==="x"||n==="y"?xa[n]?null:(xa[n]=!0,()=>{xa[n]=!1}):xa.x||xa.y?null:(xa.x=xa.y=!0,()=>{xa.x=xa.y=!1})}function xS(n,i,o){var s;if(n instanceof EventTarget)return[n];if(typeof n=="string"){let u=document;const f=(s=void 0)!==null&&s!==void 0?s:u.querySelectorAll(n);return f?Array.from(f):[]}return Array.from(n)}function Ny(n,i){const o=xS(n),s=new AbortController,u={passive:!0,...i,signal:s.signal};return[o,u,()=>s.abort()]}function i1(n){return!(n.pointerType==="touch"||By())}function wS(n,i,o={}){const[s,u,f]=Ny(n,o),d=p=>{if(!i1(p))return;const{target:h}=p,m=i(h,p);if(typeof m!="function"||!h)return;const v=b=>{i1(b)&&(m(b),h.removeEventListener("pointerleave",v))};h.addEventListener("pointerleave",v,u)};return s.forEach(p=>{p.addEventListener("pointerenter",d,u)}),f}function r1(n,i){const o=`${i}PointerCapture`;if(n.target instanceof Element&&o in n.target&&n.pointerId!==void 0)try{n.target[o](n.pointerId)}catch{}}const Ly=(n,i)=>i?n===i?!0:Ly(n,i.parentElement):!1,z0=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,SS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ES(n){return SS.has(n.tagName)||n.tabIndex!==-1}const Ss=new WeakSet;function o1(n){return i=>{i.key==="Enter"&&n(i)}}function ud(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const CS=(n,i)=>{const o=n.currentTarget;if(!o)return;const s=o1(()=>{if(Ss.has(o))return;ud(o,"down");const u=o1(()=>{ud(o,"up")}),f=()=>ud(o,"cancel");o.addEventListener("keyup",u,i),o.addEventListener("blur",f,i)});o.addEventListener("keydown",s,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),i)};function s1(n){return z0(n)&&!By()}function AS(n,i,o={}){const[s,u,f]=Ny(n,o),d=p=>{const h=p.currentTarget;if(!h||!s1(p)||Ss.has(h))return;Ss.add(h),r1(p,"set");const m=i(h,p),v=(S,C)=>{h.removeEventListener("pointerup",b),h.removeEventListener("pointercancel",x),r1(S,"release"),!(!s1(S)||!Ss.has(h))&&(Ss.delete(h),typeof m=="function"&&m(S,{success:C}))},b=S=>{(S.isTrusted?TS(S,h instanceof Element?h.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}):!1)?v(S,!1):v(S,!(h instanceof Element)||Ly(h,S.target))},x=S=>{v(S,!1)};h.addEventListener("pointerup",b,u),h.addEventListener("pointercancel",x,u),h.addEventListener("lostpointercapture",x,u)};return s.forEach(p=>{p=o.useGlobalTarget?window:p;let h=!1;p instanceof HTMLElement&&(h=!0,!ES(p)&&p.getAttribute("tabindex")===null&&(p.tabIndex=0)),p.addEventListener("pointerdown",d,u),h&&p.addEventListener("focus",m=>CS(m,u),u)}),f}function TS(n,i){return n.clientX<i.left||n.clientX>i.right||n.clientY<i.top||n.clientY>i.bottom}const l1=30,jS=n=>!isNaN(parseFloat(n));class RS{constructor(i,o={}){this.version="12.5.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,u=!0)=>{const f=Ba.now();this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=Ba.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=jS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new C0);const s=this.events[i].add(o);return i==="change"?()=>{s(),ze.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i,o=!0){!o||!this.passiveEffect?this.updateAndNotify(i,o):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-s}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Ba.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>l1)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,l1);return Ry(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ns(n,i){return new RS(n,i)}const _y=T.createContext({strict:!1}),u1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ho={};for(const n in u1)ho[n]={isEnabled:i=>u1[n].some(o=>!!i[o])};function zS(n){for(const i in n)ho[i]={...ho[i],...n[i]}}const MS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||MS.has(n)}let Vy=n=>!zu(n);function kS(n){n&&(Vy=i=>i.startsWith("on")?!zu(i):n(i))}try{kS(require("@emotion/is-prop-valid").default)}catch{}function OS(n,i,o){const s={};for(const u in n)u==="values"&&typeof n.values=="object"||(Vy(u)||o===!0&&zu(u)||!i&&!zu(u)||n.draggable&&u.startsWith("onDrag"))&&(s[u]=n[u]);return s}function DS(n){if(typeof Proxy>"u")return n;const i=new Map,o=(...s)=>n(...s);return new Proxy(o,{get:(s,u)=>u==="create"?n:(i.has(u)||i.set(u,n(u)),i.get(u))})}const Gu=T.createContext({});function Xu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ls(n){return typeof n=="string"||Array.isArray(n)}const M0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],k0=["initial",...M0];function Ku(n){return Xu(n.animate)||k0.some(i=>Ls(n[i]))}function Py(n){return!!(Ku(n)||n.variants)}function BS(n,i){if(Ku(n)){const{initial:o,animate:s}=n;return{initial:o===!1||Ls(o)?o:void 0,animate:Ls(s)?s:void 0}}return n.inherit!==!1?i:{}}function NS(n){const{initial:i,animate:o}=BS(n,T.useContext(Gu));return T.useMemo(()=>({initial:i,animate:o}),[c1(i),c1(o)])}function c1(n){return Array.isArray(n)?n.join(" "):n}const LS=Symbol.for("motionComponentSymbol");function to(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function _S(n,i,o){return T.useCallback(s=>{s&&n.onMount&&n.onMount(s),i&&(s?i.mount(s):i.unmount()),o&&(typeof o=="function"?o(s):to(o)&&(o.current=s))},[i])}const O0=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),VS="framerAppearId",Uy="data-"+O0(VS),$y=T.createContext({});function PS(n,i,o,s,u){var f,d;const{visualElement:p}=T.useContext(Gu),h=T.useContext(_y),m=T.useContext(Yu),v=T.useContext(x0).reducedMotion,b=T.useRef(null);s=s||h.renderer,!b.current&&s&&(b.current=s(n,{visualState:i,parent:p,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:v}));const x=b.current,S=T.useContext($y);x&&!x.projection&&u&&(x.type==="html"||x.type==="svg")&&US(b.current,o,u,S);const C=T.useRef(!1);T.useInsertionEffect(()=>{x&&C.current&&x.update(o,m)});const z=o[Uy],M=T.useRef(!!z&&!(!((f=window.MotionHandoffIsComplete)===null||f===void 0)&&f.call(window,z))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,z)));return Ay(()=>{x&&(C.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),R0.render(x.render),M.current&&x.animationState&&x.animationState.animateChanges())}),T.useEffect(()=>{x&&(!M.current&&x.animationState&&x.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)===null||A===void 0||A.call(window,z)}),M.current=!1))}),x}function US(n,i,o,s){const{layoutId:u,layout:f,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:m}=i;n.projection=new o(n.latestValues,i["data-framer-portal-id"]?void 0:Hy(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||p&&to(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:m})}function Hy(n){if(n)return n.options.allowProjection!==!1?n.projection:Hy(n.parent)}function $S({preloadedFeatures:n,createVisualElement:i,useRender:o,useVisualState:s,Component:u}){var f,d;n&&zS(n);function p(m,v){let b;const x={...T.useContext(x0),...m,layoutId:HS(m)},{isStatic:S}=x,C=NS(m),z=s(m,S);if(!S&&b0){qS();const M=YS(x);b=M.MeasureLayout,C.visualElement=PS(u,z,x,i,M.ProjectionNode)}return y.jsxs(Gu.Provider,{value:C,children:[b&&C.visualElement?y.jsx(b,{visualElement:C.visualElement,...x}):null,o(u,m,_S(z,C.visualElement,v),z,S,C.visualElement)]})}p.displayName=`motion.${typeof u=="string"?u:`create(${(d=(f=u.displayName)!==null&&f!==void 0?f:u.name)!==null&&d!==void 0?d:""})`}`;const h=T.forwardRef(p);return h[LS]=u,h}function HS({layoutId:n}){const i=T.useContext(v0).id;return i&&n!==void 0?i+"-"+n:n}function qS(n,i){T.useContext(_y).strict}function YS(n){const{drag:i,layout:o}=ho;if(!i&&!o)return{};const s={...i,...o};return{MeasureLayout:i!=null&&i.isEnabled(n)||o!=null&&o.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const qy=n=>i=>typeof i=="string"&&i.startsWith(n),D0=qy("--"),GS=qy("var(--"),B0=n=>GS(n)?XS.test(n.split("/*")[0].trim()):!1,XS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_s={};function KS(n){for(const i in n)_s[i]=n[i],D0(i)&&(_s[i].isCSSVariable=!0)}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wr=new Set(bo);function Yy(n,{layout:i,layoutId:o}){return wr.has(n)||n.startsWith("origin")||(i||o!==void 0)&&(!!_s[n]||n==="opacity")}const zn=n=>!!(n&&n.getVelocity),Gy=(n,i)=>i&&typeof n=="number"?i.transform(n):n,li=(n,i,o)=>o>i?i:o<n?n:o,xo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Vs={...xo,transform:n=>li(0,1,n)},lu={...xo,default:1},Ws=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),Vi=Ws("deg"),Na=Ws("%"),_t=Ws("px"),QS=Ws("vh"),FS=Ws("vw"),f1={...Na,parse:n=>Na.parse(n)/100,transform:n=>Na.transform(n*100)},ZS={borderWidth:_t,borderTopWidth:_t,borderRightWidth:_t,borderBottomWidth:_t,borderLeftWidth:_t,borderRadius:_t,radius:_t,borderTopLeftRadius:_t,borderTopRightRadius:_t,borderBottomRightRadius:_t,borderBottomLeftRadius:_t,width:_t,maxWidth:_t,height:_t,maxHeight:_t,top:_t,right:_t,bottom:_t,left:_t,padding:_t,paddingTop:_t,paddingRight:_t,paddingBottom:_t,paddingLeft:_t,margin:_t,marginTop:_t,marginRight:_t,marginBottom:_t,marginLeft:_t,backgroundPositionX:_t,backgroundPositionY:_t},WS={rotate:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:lu,scaleX:lu,scaleY:lu,scaleZ:lu,skew:Vi,skewX:Vi,skewY:Vi,distance:_t,translateX:_t,translateY:_t,translateZ:_t,x:_t,y:_t,z:_t,perspective:_t,transformPerspective:_t,opacity:Vs,originX:f1,originY:f1,originZ:_t},d1={...xo,transform:Math.round},N0={...ZS,...WS,zIndex:d1,size:_t,fillOpacity:Vs,strokeOpacity:Vs,numOctaves:d1},JS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},IS=bo.length;function t6(n,i,o){let s="",u=!0;for(let f=0;f<IS;f++){const d=bo[f],p=n[d];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(d.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||o){const m=Gy(p,N0[d]);if(!h){u=!1;const v=JS[d]||d;s+=`${v}(${m}) `}o&&(i[d]=m)}}return s=s.trim(),o?s=o(i,u?"":s):u&&(s="none"),s}function L0(n,i,o){const{style:s,vars:u,transformOrigin:f}=n;let d=!1,p=!1;for(const h in i){const m=i[h];if(wr.has(h)){d=!0;continue}else if(D0(h)){u[h]=m;continue}else{const v=Gy(m,N0[h]);h.startsWith("origin")?(p=!0,f[h]=v):s[h]=v}}if(i.transform||(d||o?s.transform=t6(i,n.transform,o):s.transform&&(s.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:v=0}=f;s.transformOrigin=`${h} ${m} ${v}`}}const _0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Xy(n,i,o){for(const s in i)!zn(i[s])&&!Yy(s,o)&&(n[s]=i[s])}function e6({transformTemplate:n},i){return T.useMemo(()=>{const o=_0();return L0(o,i,n),Object.assign({},o.vars,o.style)},[i])}function n6(n,i){const o=n.style||{},s={};return Xy(s,o,n),Object.assign(s,e6(n,i)),s}function a6(n,i){const o={},s=n6(n,i);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=s,o}const i6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function V0(n){return typeof n!="string"||n.includes("-")?!1:!!(i6.indexOf(n)>-1||/[A-Z]/u.test(n))}const r6={offset:"stroke-dashoffset",array:"stroke-dasharray"},o6={offset:"strokeDashoffset",array:"strokeDasharray"};function s6(n,i,o=1,s=0,u=!0){n.pathLength=1;const f=u?r6:o6;n[f.offset]=_t.transform(-s);const d=_t.transform(i),p=_t.transform(o);n[f.array]=`${d} ${p}`}function h1(n,i,o){return typeof n=="string"?n:_t.transform(i+o*n)}function l6(n,i,o){const s=h1(i,n.x,n.width),u=h1(o,n.y,n.height);return`${s} ${u}`}function P0(n,{attrX:i,attrY:o,attrScale:s,originX:u,originY:f,pathLength:d,pathSpacing:p=1,pathOffset:h=0,...m},v,b){if(L0(n,m,b),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:S,dimensions:C}=n;x.transform&&(C&&(S.transform=x.transform),delete x.transform),C&&(u!==void 0||f!==void 0||S.transform)&&(S.transformOrigin=l6(C,u!==void 0?u:.5,f!==void 0?f:.5)),i!==void 0&&(x.x=i),o!==void 0&&(x.y=o),s!==void 0&&(x.scale=s),d!==void 0&&s6(x,d,p,h,!1)}const Ky=()=>({..._0(),attrs:{}}),U0=n=>typeof n=="string"&&n.toLowerCase()==="svg";function u6(n,i,o,s){const u=T.useMemo(()=>{const f=Ky();return P0(f,i,U0(s),n.transformTemplate),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Xy(f,n.style,n),u.style={...f,...u.style}}return u}function c6(n=!1){return(o,s,u,{latestValues:f},d)=>{const h=(V0(o)?u6:a6)(s,f,d,o),m=OS(s,typeof o=="string",n),v=o!==T.Fragment?{...m,...h,ref:u}:{},{children:b}=s,x=T.useMemo(()=>zn(b)?b.get():b,[b]);return T.createElement(o,{...v,children:x})}}function p1(n){const i=[{},{}];return n==null||n.values.forEach((o,s)=>{i[0][s]=o.get(),i[1][s]=o.getVelocity()}),i}function $0(n,i,o,s){if(typeof i=="function"){const[u,f]=p1(s);i=i(o!==void 0?o:n.custom,u,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,f]=p1(s);i=i(o!==void 0?o:n.custom,u,f)}return i}const Hd=n=>Array.isArray(n),f6=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),d6=n=>Hd(n)?n[n.length-1]||0:n;function bu(n){const i=zn(n)?n.get():n;return f6(i)?i.toValue():i}function h6({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:o},s,u,f){const d={latestValues:p6(s,u,f,n),renderState:i()};return o&&(d.onMount=p=>o({props:s,current:p,...d}),d.onUpdate=p=>o(p)),d}const Qy=n=>(i,o)=>{const s=T.useContext(Gu),u=T.useContext(Yu),f=()=>h6(n,i,s,u);return o?f():y0(f)};function p6(n,i,o,s){const u={},f=s(n,{});for(const x in f)u[x]=bu(f[x]);let{initial:d,animate:p}=n;const h=Ku(n),m=Py(n);i&&m&&!h&&n.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let v=o?o.initial===!1:!1;v=v||d===!1;const b=v?p:d;if(b&&typeof b!="boolean"&&!Xu(b)){const x=Array.isArray(b)?b:[b];for(let S=0;S<x.length;S++){const C=$0(n,x[S]);if(C){const{transitionEnd:z,transition:M,...A}=C;for(const D in A){let O=A[D];if(Array.isArray(O)){const L=v?O.length-1:0;O=O[L]}O!==null&&(u[D]=O)}for(const D in z)u[D]=z[D]}}}return u}function H0(n,i,o){var s;const{style:u}=n,f={};for(const d in u)(zn(u[d])||i.style&&zn(i.style[d])||Yy(d,n)||((s=o==null?void 0:o.getValue(d))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(f[d]=u[d]);return f}const m6={useVisualState:Qy({scrapeMotionValuesFromProps:H0,createRenderState:_0})};function Fy(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}function Zy(n,{style:i,vars:o},s,u){Object.assign(n.style,i,u&&u.getProjectionStyles(s));for(const f in o)n.style.setProperty(f,o[f])}const Wy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Jy(n,i,o,s){Zy(n,i,void 0,s);for(const u in i.attrs)n.setAttribute(Wy.has(u)?u:O0(u),i.attrs[u])}function Iy(n,i,o){const s=H0(n,i,o);for(const u in n)if(zn(n[u])||zn(i[u])){const f=bo.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;s[f]=n[u]}return s}const m1=["x","y","width","height","cx","cy","r"],g6={useVisualState:Qy({scrapeMotionValuesFromProps:Iy,createRenderState:Ky,onUpdate:({props:n,prevProps:i,current:o,renderState:s,latestValues:u})=>{if(!o)return;let f=!!n.drag;if(!f){for(const p in u)if(wr.has(p)){f=!0;break}}if(!f)return;let d=!i;if(i)for(let p=0;p<m1.length;p++){const h=m1[p];n[h]!==i[h]&&(d=!0)}d&&ze.read(()=>{Fy(o,s),ze.render(()=>{P0(s,u,U0(o.tagName),n.transformTemplate),Jy(o,s)})})}})};function v6(n,i){return function(s,{forwardMotionProps:u}={forwardMotionProps:!1}){const d={...V0(s)?g6:m6,preloadedFeatures:n,useRender:c6(u),createVisualElement:i,Component:s};return $S(d)}}function Ps(n,i,o){const s=n.getProps();return $0(s,i,o!==void 0?o:s.custom,n)}const t2=new Set(["width","height","top","left","right","bottom",...bo]);function y6(n,i,o){n.hasValue(i)?n.getValue(i).set(o):n.addValue(i,Ns(o))}function b6(n,i){const o=Ps(n,i);let{transitionEnd:s={},transition:u={},...f}=o||{};f={...f,...s};for(const d in f){const p=d6(f[d]);y6(n,d,p)}}function x6(n){return!!(zn(n)&&n.add)}function qd(n,i){const o=n.getValue("willChange");if(x6(o))return o.add(i)}function e2(n){return n.props[Uy]}const n2=(n,i,o)=>(((1-3*o+3*i)*n+(3*o-6*i))*n+3*i)*n,w6=1e-7,S6=12;function E6(n,i,o,s,u){let f,d,p=0;do d=i+(o-i)/2,f=n2(d,s,u)-n,f>0?o=d:i=d;while(Math.abs(f)>w6&&++p<S6);return d}function Js(n,i,o,s){if(n===i&&o===s)return Fn;const u=f=>E6(f,0,1,n,o);return f=>f===0||f===1?f:n2(u(f),i,s)}const a2=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,i2=n=>i=>1-n(1-i),r2=Js(.33,1.53,.69,.99),q0=i2(r2),o2=a2(q0),s2=n=>(n*=2)<1?.5*q0(n):.5*(2-Math.pow(2,-10*(n-1))),Y0=n=>1-Math.sin(Math.acos(n)),l2=i2(Y0),u2=a2(Y0),c2=n=>/^0[^.\s]+$/u.test(n);function C6(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||c2(n):!0}const Cs=n=>Math.round(n*1e5)/1e5,G0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function A6(n){return n==null}const T6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,X0=(n,i)=>o=>!!(typeof o=="string"&&T6.test(o)&&o.startsWith(n)||i&&!A6(o)&&Object.prototype.hasOwnProperty.call(o,i)),f2=(n,i,o)=>s=>{if(typeof s!="string")return s;const[u,f,d,p]=s.match(G0);return{[n]:parseFloat(u),[i]:parseFloat(f),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},j6=n=>li(0,255,n),cd={...xo,transform:n=>Math.round(j6(n))},pr={test:X0("rgb","red"),parse:f2("red","green","blue"),transform:({red:n,green:i,blue:o,alpha:s=1})=>"rgba("+cd.transform(n)+", "+cd.transform(i)+", "+cd.transform(o)+", "+Cs(Vs.transform(s))+")"};function R6(n){let i="",o="",s="",u="";return n.length>5?(i=n.substring(1,3),o=n.substring(3,5),s=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),o=n.substring(2,3),s=n.substring(3,4),u=n.substring(4,5),i+=i,o+=o,s+=s,u+=u),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:u?parseInt(u,16)/255:1}}const Yd={test:X0("#"),parse:R6,transform:pr.transform},eo={test:X0("hsl","hue"),parse:f2("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:o,alpha:s=1})=>"hsla("+Math.round(n)+", "+Na.transform(Cs(i))+", "+Na.transform(Cs(o))+", "+Cs(Vs.transform(s))+")"},Rn={test:n=>pr.test(n)||Yd.test(n)||eo.test(n),parse:n=>pr.test(n)?pr.parse(n):eo.test(n)?eo.parse(n):Yd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?pr.transform(n):eo.transform(n)},z6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function M6(n){var i,o;return isNaN(n)&&typeof n=="string"&&(((i=n.match(G0))===null||i===void 0?void 0:i.length)||0)+(((o=n.match(z6))===null||o===void 0?void 0:o.length)||0)>0}const d2="number",h2="color",k6="var",O6="var(",g1="${}",D6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Us(n){const i=n.toString(),o=[],s={color:[],number:[],var:[]},u=[];let f=0;const p=i.replace(D6,h=>(Rn.test(h)?(s.color.push(f),u.push(h2),o.push(Rn.parse(h))):h.startsWith(O6)?(s.var.push(f),u.push(k6),o.push(h)):(s.number.push(f),u.push(d2),o.push(parseFloat(h))),++f,g1)).split(g1);return{values:o,split:p,indexes:s,types:u}}function p2(n){return Us(n).values}function m2(n){const{split:i,types:o}=Us(n),s=i.length;return u=>{let f="";for(let d=0;d<s;d++)if(f+=i[d],u[d]!==void 0){const p=o[d];p===d2?f+=Cs(u[d]):p===h2?f+=Rn.transform(u[d]):f+=u[d]}return f}}const B6=n=>typeof n=="number"?0:n;function N6(n){const i=p2(n);return m2(n)(i.map(B6))}const Ui={test:M6,parse:p2,createTransformer:m2,getAnimatableNone:N6},L6=new Set(["brightness","contrast","saturate","opacity"]);function _6(n){const[i,o]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[s]=o.match(G0)||[];if(!s)return n;const u=o.replace(s,"");let f=L6.has(i)?1:0;return s!==o&&(f*=100),i+"("+f+u+")"}const V6=/\b([a-z-]*)\(.*?\)/gu,Gd={...Ui,getAnimatableNone:n=>{const i=n.match(V6);return i?i.map(_6).join(" "):n}},P6={...N0,color:Rn,backgroundColor:Rn,outlineColor:Rn,fill:Rn,stroke:Rn,borderColor:Rn,borderTopColor:Rn,borderRightColor:Rn,borderBottomColor:Rn,borderLeftColor:Rn,filter:Gd,WebkitFilter:Gd},g2=n=>P6[n];function v2(n,i){let o=g2(n);return o!==Gd&&(o=Ui),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const U6=new Set(["auto","none","0"]);function $6(n,i,o){let s=0,u;for(;s<n.length&&!u;){const f=n[s];typeof f=="string"&&!U6.has(f)&&Us(f).values.length&&(u=n[s]),s++}if(u&&o)for(const f of i)n[f]=v2(o,u)}const mr=n=>n*180/Math.PI,Xd=n=>{const i=mr(Math.atan2(n[1],n[0]));return Kd(i)},H6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Xd,rotateZ:Xd,skewX:n=>mr(Math.atan(n[1])),skewY:n=>mr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Kd=n=>(n=n%360,n<0&&(n+=360),n),v1=Xd,y1=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),b1=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),q6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:y1,scaleY:b1,scale:n=>(y1(n)+b1(n))/2,rotateX:n=>Kd(mr(Math.atan2(n[6],n[5]))),rotateY:n=>Kd(mr(Math.atan2(-n[2],n[0]))),rotateZ:v1,rotate:v1,skewX:n=>mr(Math.atan(n[4])),skewY:n=>mr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function x1(n){return n.includes("scale")?1:0}function Qd(n,i){if(!n||n==="none")return x1(i);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,u;if(o)s=q6,u=o;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=H6,u=p}if(!u)return x1(i);const f=s[i],d=u[1].split(",").map(G6);return typeof f=="function"?f(d):d[f]}const Y6=(n,i)=>{const{transform:o="none"}=getComputedStyle(n);return Qd(o,i)};function G6(n){return parseFloat(n.trim())}const w1=n=>n===xo||n===_t,X6=new Set(["x","y","z"]),K6=bo.filter(n=>!X6.has(n));function Q6(n){const i=[];return K6.forEach(o=>{const s=n.getValue(o);s!==void 0&&(i.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),i}const po={width:({x:n},{paddingLeft:i="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),height:({y:n},{paddingTop:i="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Qd(i,"x"),y:(n,{transform:i})=>Qd(i,"y")};po.translateX=po.x;po.translateY=po.y;const yr=new Set;let Fd=!1,Zd=!1;function y2(){if(Zd){const n=Array.from(yr).filter(s=>s.needsMeasurement),i=new Set(n.map(s=>s.element)),o=new Map;i.forEach(s=>{const u=Q6(s);u.length&&(o.set(s,u),s.render())}),n.forEach(s=>s.measureInitialState()),i.forEach(s=>{s.render();const u=o.get(s);u&&u.forEach(([f,d])=>{var p;(p=s.getValue(f))===null||p===void 0||p.set(d)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Zd=!1,Fd=!1,yr.forEach(n=>n.complete()),yr.clear()}function b2(){yr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Zd=!0)})}function F6(){b2(),y2()}class K0{constructor(i,o,s,u,f,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=s,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(yr.add(this),Fd||(Fd=!0,ze.read(b2),ze.resolveKeyframes(y2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:s,motionValue:u}=this;for(let f=0;f<i.length;f++)if(i[f]===null)if(f===0){const d=u==null?void 0:u.get(),p=i[i.length-1];if(d!==void 0)i[0]=d;else if(s&&o){const h=s.readValue(o,p);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=p),u&&d===void 0&&u.set(i[0])}else i[f]=i[f-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),yr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,yr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const x2=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Z6=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function W6(n){const i=Z6.exec(n);if(!i)return[,];const[,o,s,u]=i;return[`--${o??s}`,u]}function w2(n,i,o=1){const[s,u]=W6(n);if(!s)return;const f=window.getComputedStyle(i).getPropertyValue(s);if(f){const d=f.trim();return x2(d)?parseFloat(d):d}return B0(u)?w2(u,i,o+1):u}const S2=n=>i=>i.test(n),J6={test:n=>n==="auto",parse:n=>n},E2=[xo,_t,Na,Vi,FS,QS,J6],S1=n=>E2.find(S2(n));class C2 extends K0{constructor(i,o,s,u,f){super(i,o,s,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let m=i[h];if(typeof m=="string"&&(m=m.trim(),B0(m))){const v=w2(m,o.current);v!==void 0&&(i[h]=v),h===i.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!t2.has(s)||i.length!==2)return;const[u,f]=i,d=S1(u),p=S1(f);if(d!==p)if(w1(d)&&w1(p))for(let h=0;h<i.length;h++){const m=i[h];typeof m=="string"&&(i[h]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,s=[];for(let u=0;u<i.length;u++)C6(i[u])&&s.push(u);s.length&&$6(i,s,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:s}=this;if(!i||!i.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=po[s](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&i.getValue(s,u).jump(u,!1)}measureEndState(){var i;const{element:o,name:s,unresolvedKeyframes:u}=this;if(!o||!o.current)return;const f=o.getValue(s);f&&f.jump(this.measuredOrigin,!1);const d=u.length-1,p=u[d];u[d]=po[s](o.measureViewportBox(),window.getComputedStyle(o.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,m])=>{o.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const E1=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ui.test(n)||n==="0")&&!n.startsWith("url("));function I6(n){const i=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==i)return!0}function t8(n,i,o,s){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=E1(u,i),p=E1(f,i);return!d||!p?!1:I6(n)||(o==="spring"||T0(o))&&s}const e8=n=>n!==null;function Qu(n,{repeat:i,repeatType:o="loop"},s){const u=n.filter(e8),f=i&&o!=="loop"&&i%2===1?0:u.length-1;return!f||s===void 0?u[f]:s}const n8=40;class A2{constructor({autoplay:i=!0,delay:o=0,type:s="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",...p}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ba.now(),this.options={autoplay:i,delay:o,type:s,repeat:u,repeatDelay:f,repeatType:d,...p},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>n8?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&F6(),this._resolved}onKeyframesResolved(i,o){this.resolvedAt=Ba.now(),this.hasAttemptedResolve=!0;const{name:s,type:u,velocity:f,delay:d,onComplete:p,onUpdate:h,isGenerator:m}=this.options;if(!m&&!t8(i,s,u,f))if(d)this.options.duration=0;else{h&&h(Qu(i,this.options,o)),p&&p(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,o);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:o,...v},this.onPostResolved())}onPostResolved(){}then(i,o){return this.currentFinishedPromise.then(i,o)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Pe=(n,i,o)=>n+(i-n)*o;function fd(n,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(i-n)*6*o:o<1/2?i:o<2/3?n+(i-n)*(2/3-o)*6:n}function a8({hue:n,saturation:i,lightness:o,alpha:s}){n/=360,i/=100,o/=100;let u=0,f=0,d=0;if(!i)u=f=d=o;else{const p=o<.5?o*(1+i):o+i-o*i,h=2*o-p;u=fd(h,p,n+1/3),f=fd(h,p,n),d=fd(h,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:s}}function Mu(n,i){return o=>o>0?i:n}const dd=(n,i,o)=>{const s=n*n,u=o*(i*i-s)+s;return u<0?0:Math.sqrt(u)},i8=[Yd,pr,eo],r8=n=>i8.find(i=>i.test(n));function C1(n){const i=r8(n);if(!i)return!1;let o=i.parse(n);return i===eo&&(o=a8(o)),o}const A1=(n,i)=>{const o=C1(n),s=C1(i);if(!o||!s)return Mu(n,i);const u={...o};return f=>(u.red=dd(o.red,s.red,f),u.green=dd(o.green,s.green,f),u.blue=dd(o.blue,s.blue,f),u.alpha=Pe(o.alpha,s.alpha,f),pr.transform(u))},o8=(n,i)=>o=>i(n(o)),Is=(...n)=>n.reduce(o8),Wd=new Set(["none","hidden"]);function s8(n,i){return Wd.has(n)?o=>o<=0?n:i:o=>o>=1?i:n}function l8(n,i){return o=>Pe(n,i,o)}function Q0(n){return typeof n=="number"?l8:typeof n=="string"?B0(n)?Mu:Rn.test(n)?A1:f8:Array.isArray(n)?T2:typeof n=="object"?Rn.test(n)?A1:u8:Mu}function T2(n,i){const o=[...n],s=o.length,u=n.map((f,d)=>Q0(f)(f,i[d]));return f=>{for(let d=0;d<s;d++)o[d]=u[d](f);return o}}function u8(n,i){const o={...n,...i},s={};for(const u in o)n[u]!==void 0&&i[u]!==void 0&&(s[u]=Q0(n[u])(n[u],i[u]));return u=>{for(const f in s)o[f]=s[f](u);return o}}function c8(n,i){var o;const s=[],u={color:0,var:0,number:0};for(let f=0;f<i.values.length;f++){const d=i.types[f],p=n.indexes[d][u[d]],h=(o=n.values[p])!==null&&o!==void 0?o:0;s[f]=h,u[d]++}return s}const f8=(n,i)=>{const o=Ui.createTransformer(i),s=Us(n),u=Us(i);return s.indexes.var.length===u.indexes.var.length&&s.indexes.color.length===u.indexes.color.length&&s.indexes.number.length>=u.indexes.number.length?Wd.has(n)&&!u.values.length||Wd.has(i)&&!s.values.length?s8(n,i):Is(T2(c8(s,u),u.values),o):Mu(n,i)};function j2(n,i,o){return typeof n=="number"&&typeof i=="number"&&typeof o=="number"?Pe(n,i,o):Q0(n)(n,i)}const d8=5;function R2(n,i,o){const s=Math.max(i-d8,0);return Ry(o-n(s),i-s)}const We={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},T1=.001;function h8({duration:n=We.duration,bounce:i=We.bounce,velocity:o=We.velocity,mass:s=We.mass}){let u,f,d=1-i;d=li(We.minDamping,We.maxDamping,d),n=li(We.minDuration,We.maxDuration,oi(n)),d<1?(u=m=>{const v=m*d,b=v*n,x=v-o,S=Jd(m,d),C=Math.exp(-b);return T1-x/S*C},f=m=>{const b=m*d*n,x=b*o+o,S=Math.pow(d,2)*Math.pow(m,2)*n,C=Math.exp(-b),z=Jd(Math.pow(m,2),d);return(-u(m)+T1>0?-1:1)*((x-S)*C)/z}):(u=m=>{const v=Math.exp(-m*n),b=(m-o)*n+1;return-.001+v*b},f=m=>{const v=Math.exp(-m*n),b=(o-m)*(n*n);return v*b});const p=5/n,h=m8(u,f,p);if(n=ri(n),isNaN(h))return{stiffness:We.stiffness,damping:We.damping,duration:n};{const m=Math.pow(h,2)*s;return{stiffness:m,damping:d*2*Math.sqrt(s*m),duration:n}}}const p8=12;function m8(n,i,o){let s=o;for(let u=1;u<p8;u++)s=s-n(s)/i(s);return s}function Jd(n,i){return n*Math.sqrt(1-i*i)}const g8=["duration","bounce"],v8=["stiffness","damping","mass"];function j1(n,i){return i.some(o=>n[o]!==void 0)}function y8(n){let i={velocity:We.velocity,stiffness:We.stiffness,damping:We.damping,mass:We.mass,isResolvedFromDuration:!1,...n};if(!j1(n,v8)&&j1(n,g8))if(n.visualDuration){const o=n.visualDuration,s=2*Math.PI/(o*1.2),u=s*s,f=2*li(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:We.mass,stiffness:u,damping:f}}else{const o=h8(n);i={...i,...o,mass:We.mass},i.isResolvedFromDuration=!0}return i}function z2(n=We.visualDuration,i=We.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:s,restDelta:u}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:f},{stiffness:h,damping:m,mass:v,duration:b,velocity:x,isResolvedFromDuration:S}=y8({...o,velocity:-oi(o.velocity||0)}),C=x||0,z=m/(2*Math.sqrt(h*v)),M=d-f,A=oi(Math.sqrt(h/v)),D=Math.abs(M)<5;s||(s=D?We.restSpeed.granular:We.restSpeed.default),u||(u=D?We.restDelta.granular:We.restDelta.default);let O;if(z<1){const B=Jd(A,z);O=W=>{const st=Math.exp(-z*A*W);return d-st*((C+z*A*M)/B*Math.sin(B*W)+M*Math.cos(B*W))}}else if(z===1)O=B=>d-Math.exp(-A*B)*(M+(C+A*M)*B);else{const B=A*Math.sqrt(z*z-1);O=W=>{const st=Math.exp(-z*A*W),dt=Math.min(B*W,300);return d-st*((C+z*A*M)*Math.sinh(dt)+B*M*Math.cosh(dt))/B}}const L={calculatedDuration:S&&b||null,next:B=>{const W=O(B);if(S)p.done=B>=b;else{let st=0;z<1&&(st=B===0?ri(C):R2(O,B,W));const dt=Math.abs(st)<=s,Q=Math.abs(d-W)<=u;p.done=dt&&Q}return p.value=p.done?d:W,p},toString:()=>{const B=Math.min(zy(L),Ud),W=My(st=>L.next(B*st).value,B,30);return B+"ms "+W}};return L}function R1({keyframes:n,velocity:i=0,power:o=.8,timeConstant:s=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:h,restDelta:m=.5,restSpeed:v}){const b=n[0],x={done:!1,value:b},S=dt=>p!==void 0&&dt<p||h!==void 0&&dt>h,C=dt=>p===void 0?h:h===void 0||Math.abs(p-dt)<Math.abs(h-dt)?p:h;let z=o*i;const M=b+z,A=d===void 0?M:d(M);A!==M&&(z=A-b);const D=dt=>-z*Math.exp(-dt/s),O=dt=>A+D(dt),L=dt=>{const Q=D(dt),yt=O(dt);x.done=Math.abs(Q)<=m,x.value=x.done?A:yt};let B,W;const st=dt=>{S(x.value)&&(B=dt,W=z2({keyframes:[x.value,C(x.value)],velocity:R2(O,dt,x.value),damping:u,stiffness:f,restDelta:m,restSpeed:v}))};return st(0),{calculatedDuration:null,next:dt=>{let Q=!1;return!W&&B===void 0&&(Q=!0,L(dt),st(dt)),B!==void 0&&dt>=B?W.next(dt-B):(!Q&&L(dt),x)}}}const b8=Js(.42,0,1,1),x8=Js(0,0,.58,1),M2=Js(.42,0,.58,1),w8=n=>Array.isArray(n)&&typeof n[0]!="number",S8={linear:Fn,easeIn:b8,easeInOut:M2,easeOut:x8,circIn:Y0,circInOut:u2,circOut:l2,backIn:q0,backInOut:o2,backOut:r2,anticipate:s2},z1=n=>{if(j0(n)){jy(n.length===4);const[i,o,s,u]=n;return Js(i,o,s,u)}else if(typeof n=="string")return S8[n];return n};function E8(n,i,o){const s=[],u=o||j2,f=n.length-1;for(let d=0;d<f;d++){let p=u(n[d],n[d+1]);if(i){const h=Array.isArray(i)?i[d]||Fn:i;p=Is(h,p)}s.push(p)}return s}function C8(n,i,{clamp:o=!0,ease:s,mixer:u}={}){const f=n.length;if(jy(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const p=E8(i,s,u),h=p.length,m=v=>{if(d&&v<n[0])return i[0];let b=0;if(h>1)for(;b<n.length-2&&!(v<n[b+1]);b++);const x=fo(n[b],n[b+1],v);return p[b](x)};return o?v=>m(li(n[0],n[f-1],v)):m}function A8(n,i){const o=n[n.length-1];for(let s=1;s<=i;s++){const u=fo(0,i,s);n.push(Pe(o,1,u))}}function T8(n){const i=[0];return A8(i,n.length-1),i}function j8(n,i){return n.map(o=>o*i)}function R8(n,i){return n.map(()=>i||M2).splice(0,n.length-1)}function ku({duration:n=300,keyframes:i,times:o,ease:s="easeInOut"}){const u=w8(s)?s.map(z1):z1(s),f={done:!1,value:i[0]},d=j8(o&&o.length===i.length?o:T8(i),n),p=C8(d,i,{ease:Array.isArray(u)?u:R8(i,u)});return{calculatedDuration:n,next:h=>(f.value=p(h),f.done=h>=n,f)}}const z8=n=>{const i=({timestamp:o})=>n(o);return{start:()=>ze.update(i,!0),stop:()=>Pi(i),now:()=>En.isProcessing?En.timestamp:Ba.now()}},M8={decay:R1,inertia:R1,tween:ku,keyframes:ku,spring:z2},k8=n=>n/100;class F0 extends A2{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:o,motionValue:s,element:u,keyframes:f}=this.options,d=(u==null?void 0:u.KeyframeResolver)||K0,p=(h,m)=>this.onKeyframesResolved(h,m);this.resolver=new d(f,p,o,s,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:o="keyframes",repeat:s=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=this.options,p=T0(o)?o:M8[o]||ku;let h,m;p!==ku&&typeof i[0]!="number"&&(h=Is(k8,j2(i[0],i[1])),i=[0,100]);const v=p({...this.options,keyframes:i});f==="mirror"&&(m=p({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=zy(v));const{calculatedDuration:b}=v,x=b+u,S=x*(s+1)-u;return{generator:v,mirroredGenerator:m,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:x,totalDuration:S}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,o=!1){const{resolved:s}=this;if(!s){const{keyframes:dt}=this.options;return{done:!0,value:dt[dt.length-1]}}const{finalKeyframe:u,generator:f,mirroredGenerator:d,mapPercentToKeyframes:p,keyframes:h,calculatedDuration:m,totalDuration:v,resolvedDuration:b}=s;if(this.startTime===null)return f.next(0);const{delay:x,repeat:S,repeatType:C,repeatDelay:z,onUpdate:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),o?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const A=this.currentTime-x*(this.speed>=0?1:-1),D=this.speed>=0?A<0:A>v;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let O=this.currentTime,L=f;if(S){const dt=Math.min(this.currentTime,v)/b;let Q=Math.floor(dt),yt=dt%1;!yt&&dt>=1&&(yt=1),yt===1&&Q--,Q=Math.min(Q,S+1),!!(Q%2)&&(C==="reverse"?(yt=1-yt,z&&(yt-=z/b)):C==="mirror"&&(L=d)),O=li(0,1,yt)*b}const B=D?{done:!1,value:h[0]}:L.next(O);p&&(B.value=p(B.value));let{done:W}=B;!D&&m!==null&&(W=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const st=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return st&&u!==void 0&&(B.value=Qu(h,this.options,u)),M&&M(B.value),st&&this.finish(),B}get duration(){const{resolved:i}=this;return i?oi(i.calculatedDuration):0}get time(){return oi(this.currentTime)}set time(i){i=ri(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=oi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=z8,onPlay:o,startTime:s}=this.options;this.driver||(this.driver=i(f=>this.tick(f))),o&&o();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const O8=new Set(["opacity","clipPath","filter","transform"]);function D8(n,i,o,{delay:s=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:p="easeInOut",times:h}={}){const m={[i]:o};h&&(m.offset=h);const v=Oy(p,u);return Array.isArray(v)&&(m.easing=v),n.animate(m,{delay:s,duration:u,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"})}const B8=E0(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ou=10,N8=2e4;function L8(n){return T0(n.type)||n.type==="spring"||!ky(n.ease)}function _8(n,i){const o=new F0({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:n[0]};const u=[];let f=0;for(;!s.done&&f<N8;)s=o.sample(f),u.push(s.value),f+=Ou;return{times:void 0,keyframes:u,duration:f-Ou,ease:"linear"}}const k2={anticipate:s2,backInOut:o2,circInOut:u2};function V8(n){return n in k2}class M1 extends A2{constructor(i){super(i);const{name:o,motionValue:s,element:u,keyframes:f}=this.options;this.resolver=new C2(f,(d,p)=>this.onKeyframesResolved(d,p),o,s,u),this.resolver.scheduleResolve()}initPlayback(i,o){let{duration:s=300,times:u,ease:f,type:d,motionValue:p,name:h,startTime:m}=this.options;if(!p.owner||!p.owner.current)return!1;if(typeof f=="string"&&Ru()&&V8(f)&&(f=k2[f]),L8(this.options)){const{onComplete:b,onUpdate:x,motionValue:S,element:C,...z}=this.options,M=_8(i,z);i=M.keyframes,i.length===1&&(i[1]=i[0]),s=M.duration,u=M.times,f=M.ease,d="keyframes"}const v=D8(p.owner.current,h,i,{...this.options,duration:s,times:u,ease:f});return v.startTime=m??this.calcStartTime(),this.pendingTimeline?(n1(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:b}=this.options;p.set(Qu(i,this.options,o)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:s,times:u,type:d,ease:f,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:o}=i;return oi(o)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:o}=i;return oi(o.currentTime||0)}set time(i){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.currentTime=ri(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:o}=i;return o.playbackRate}set speed(i){const{resolved:o}=this;if(!o)return;const{animation:s}=o;s.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:o}=i;return o.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:o}=i;return o.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:o}=this;if(!o)return Fn;const{animation:s}=o;n1(s,i)}return Fn}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:o,keyframes:s,duration:u,type:f,ease:d,times:p}=i;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:v,onComplete:b,element:x,...S}=this.options,C=new F0({...S,keyframes:s,duration:u,type:f,ease:d,times:p,isGenerator:!0}),z=ri(this.time);m.setWithVelocity(C.sample(z-Ou).value,C.sample(z).value,Ou)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:o,name:s,repeatDelay:u,repeatType:f,damping:d,type:p}=i;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=o.owner.getProps();return B8()&&s&&O8.has(s)&&!h&&!m&&!u&&f!=="mirror"&&d!==0&&p!=="inertia"}}const P8={type:"spring",stiffness:500,damping:25,restSpeed:10},U8=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),$8={type:"keyframes",duration:.8},H8={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},q8=(n,{keyframes:i})=>i.length>2?$8:wr.has(n)?n.startsWith("scale")?U8(i[1]):P8:H8;function Y8({when:n,delay:i,delayChildren:o,staggerChildren:s,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:p,from:h,elapsed:m,...v}){return!!Object.keys(v).length}const Z0=(n,i,o,s={},u,f)=>d=>{const p=A0(s,n)||{},h=p.delay||s.delay||0;let{elapsed:m=0}=s;m=m-ri(h);let v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-m,onUpdate:x=>{i.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:i,element:f?void 0:u};Y8(p)||(v={...v,...q8(n,v)}),v.duration&&(v.duration=ri(v.duration)),v.repeatDelay&&(v.repeatDelay=ri(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(b=!0)),v.allowFlatten=!p.type&&!p.ease,b&&!f&&i.get()!==void 0){const x=Qu(v.keyframes,p);if(x!==void 0)return ze.update(()=>{v.onUpdate(x),v.onComplete()}),new hS([])}return!f&&M1.supports(v)?new M1(v):new F0(v)};function G8({protectedKeys:n,needsAnimating:i},o){const s=n.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,s}function O2(n,i,{delay:o=0,transitionOverride:s,type:u}={}){var f;let{transition:d=n.getDefaultTransition(),transitionEnd:p,...h}=i;s&&(d=s);const m=[],v=u&&n.animationState&&n.animationState.getState()[u];for(const b in h){const x=n.getValue(b,(f=n.latestValues[b])!==null&&f!==void 0?f:null),S=h[b];if(S===void 0||v&&G8(v,b))continue;const C={delay:o,...A0(d||{},b)};let z=!1;if(window.MotionHandoffAnimation){const A=e2(n);if(A){const D=window.MotionHandoffAnimation(A,b,ze);D!==null&&(C.startTime=D,z=!0)}}qd(n,b),x.start(Z0(b,x,S,n.shouldReduceMotion&&t2.has(b)?{type:!1}:C,n,z));const M=x.animation;M&&m.push(M)}return p&&Promise.all(m).then(()=>{ze.update(()=>{p&&b6(n,p)})}),m}function Id(n,i,o={}){var s;const u=Ps(n,i,o.type==="exit"?(s=n.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:f=n.getDefaultTransition()||{}}=u||{};o.transitionOverride&&(f=o.transitionOverride);const d=u?()=>Promise.all(O2(n,u,o)):()=>Promise.resolve(),p=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:v=0,staggerChildren:b,staggerDirection:x}=f;return X8(n,i,v+m,b,x,o)}:()=>Promise.resolve(),{when:h}=f;if(h){const[m,v]=h==="beforeChildren"?[d,p]:[p,d];return m().then(()=>v())}else return Promise.all([d(),p(o.delay)])}function X8(n,i,o=0,s=0,u=1,f){const d=[],p=(n.variantChildren.size-1)*s,h=u===1?(m=0)=>m*s:(m=0)=>p-m*s;return Array.from(n.variantChildren).sort(K8).forEach((m,v)=>{m.notify("AnimationStart",i),d.push(Id(m,i,{...f,delay:o+h(v)}).then(()=>m.notify("AnimationComplete",i)))}),Promise.all(d)}function K8(n,i){return n.sortNodePosition(i)}function Q8(n,i,o={}){n.notify("AnimationStart",i);let s;if(Array.isArray(i)){const u=i.map(f=>Id(n,f,o));s=Promise.all(u)}else if(typeof i=="string")s=Id(n,i,o);else{const u=typeof i=="function"?Ps(n,i,o.custom):i;s=Promise.all(O2(n,u,o))}return s.then(()=>{n.notify("AnimationComplete",i)})}function D2(n,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==n.length)return!1;for(let s=0;s<o;s++)if(i[s]!==n[s])return!1;return!0}const F8=k0.length;function B2(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?B2(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const i={};for(let o=0;o<F8;o++){const s=k0[o],u=n.props[s];(Ls(u)||u===!1)&&(i[s]=u)}return i}const Z8=[...M0].reverse(),W8=M0.length;function J8(n){return i=>Promise.all(i.map(({animation:o,options:s})=>Q8(n,o,s)))}function I8(n){let i=J8(n),o=k1(),s=!0;const u=h=>(m,v)=>{var b;const x=Ps(n,v,h==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(x){const{transition:S,transitionEnd:C,...z}=x;m={...m,...z,...C}}return m};function f(h){i=h(n)}function d(h){const{props:m}=n,v=B2(n.parent)||{},b=[],x=new Set;let S={},C=1/0;for(let M=0;M<W8;M++){const A=Z8[M],D=o[A],O=m[A]!==void 0?m[A]:v[A],L=Ls(O),B=A===h?D.isActive:null;B===!1&&(C=M);let W=O===v[A]&&O!==m[A]&&L;if(W&&s&&n.manuallyAnimateOnMount&&(W=!1),D.protectedKeys={...S},!D.isActive&&B===null||!O&&!D.prevProp||Xu(O)||typeof O=="boolean")continue;const st=tE(D.prevProp,O);let dt=st||A===h&&D.isActive&&!W&&L||M>C&&L,Q=!1;const yt=Array.isArray(O)?O:[O];let et=yt.reduce(u(A),{});B===!1&&(et={});const{prevResolvedValues:ue={}}=D,Se={...ue,...et},Z=K=>{dt=!0,x.has(K)&&(Q=!0,x.delete(K)),D.needsAnimating[K]=!0;const it=n.getValue(K);it&&(it.liveStyle=!1)};for(const K in Se){const it=et[K],gt=ue[K];if(S.hasOwnProperty(K))continue;let k=!1;Hd(it)&&Hd(gt)?k=!D2(it,gt):k=it!==gt,k?it!=null?Z(K):x.add(K):it!==void 0&&x.has(K)?Z(K):D.protectedKeys[K]=!0}D.prevProp=O,D.prevResolvedValues=et,D.isActive&&(S={...S,...et}),s&&n.blockInitialAnimation&&(dt=!1),dt&&(!(W&&st)||Q)&&b.push(...yt.map(K=>({animation:K,options:{type:A}})))}if(x.size){const M={};if(typeof m.initial!="boolean"){const A=Ps(n,Array.isArray(m.initial)?m.initial[0]:m.initial);A&&A.transition&&(M.transition=A.transition)}x.forEach(A=>{const D=n.getBaseTarget(A),O=n.getValue(A);O&&(O.liveStyle=!0),M[A]=D??null}),b.push({animation:M})}let z=!!b.length;return s&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(z=!1),s=!1,z?i(b):Promise.resolve()}function p(h,m){var v;if(o[h].isActive===m)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(x=>{var S;return(S=x.animationState)===null||S===void 0?void 0:S.setActive(h,m)}),o[h].isActive=m;const b=d(h);for(const x in o)o[x].protectedKeys={};return b}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>o,reset:()=>{o=k1(),s=!0}}}function tE(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!D2(i,n):!1}function fr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function k1(){return{animate:fr(!0),whileInView:fr(),whileHover:fr(),whileTap:fr(),whileDrag:fr(),whileFocus:fr(),exit:fr()}}class Hi{constructor(i){this.isMounted=!1,this.node=i}update(){}}class eE extends Hi{constructor(i){super(i),i.animationState||(i.animationState=I8(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Xu(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let nE=0;class aE extends Hi{constructor(){super(...arguments),this.id=nE++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===s)return;const u=this.node.animationState.setActive("exit",!i);o&&!i&&u.then(()=>{o(this.id)})}mount(){const{register:i,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const iE={animation:{Feature:eE},exit:{Feature:aE}};function $s(n,i,o,s={passive:!0}){return n.addEventListener(i,o,s),()=>n.removeEventListener(i,o)}function tl(n){return{point:{x:n.pageX,y:n.pageY}}}const rE=n=>i=>z0(i)&&n(i,tl(i));function As(n,i,o,s){return $s(n,i,rE(o),s)}function N2({top:n,left:i,right:o,bottom:s}){return{x:{min:i,max:o},y:{min:n,max:s}}}function oE({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function sE(n,i){if(!i)return n;const o=i({x:n.left,y:n.top}),s=i({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}const L2=1e-4,lE=1-L2,uE=1+L2,_2=.01,cE=0-_2,fE=0+_2;function On(n){return n.max-n.min}function dE(n,i,o){return Math.abs(n-i)<=o}function O1(n,i,o,s=.5){n.origin=s,n.originPoint=Pe(i.min,i.max,n.origin),n.scale=On(o)/On(i),n.translate=Pe(o.min,o.max,n.origin)-n.originPoint,(n.scale>=lE&&n.scale<=uE||isNaN(n.scale))&&(n.scale=1),(n.translate>=cE&&n.translate<=fE||isNaN(n.translate))&&(n.translate=0)}function Ts(n,i,o,s){O1(n.x,i.x,o.x,s?s.originX:void 0),O1(n.y,i.y,o.y,s?s.originY:void 0)}function D1(n,i,o){n.min=o.min+i.min,n.max=n.min+On(i)}function hE(n,i,o){D1(n.x,i.x,o.x),D1(n.y,i.y,o.y)}function B1(n,i,o){n.min=i.min-o.min,n.max=n.min+On(i)}function js(n,i,o){B1(n.x,i.x,o.x),B1(n.y,i.y,o.y)}const N1=()=>({translate:0,scale:1,origin:0,originPoint:0}),no=()=>({x:N1(),y:N1()}),L1=()=>({min:0,max:0}),an=()=>({x:L1(),y:L1()});function da(n){return[n("x"),n("y")]}function hd(n){return n===void 0||n===1}function t0({scale:n,scaleX:i,scaleY:o}){return!hd(n)||!hd(i)||!hd(o)}function dr(n){return t0(n)||V2(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function V2(n){return _1(n.x)||_1(n.y)}function _1(n){return n&&n!=="0%"}function Du(n,i,o){const s=n-o,u=i*s;return o+u}function V1(n,i,o,s,u){return u!==void 0&&(n=Du(n,u,s)),Du(n,o,s)+i}function e0(n,i=0,o=1,s,u){n.min=V1(n.min,i,o,s,u),n.max=V1(n.max,i,o,s,u)}function P2(n,{x:i,y:o}){e0(n.x,i.translate,i.scale,i.originPoint),e0(n.y,o.translate,o.scale,o.originPoint)}const P1=.999999999999,U1=1.0000000000001;function pE(n,i,o,s=!1){const u=o.length;if(!u)return;i.x=i.y=1;let f,d;for(let p=0;p<u;p++){f=o[p],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&io(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,P2(n,d)),s&&dr(f.latestValues)&&io(n,f.latestValues))}i.x<U1&&i.x>P1&&(i.x=1),i.y<U1&&i.y>P1&&(i.y=1)}function ao(n,i){n.min=n.min+i,n.max=n.max+i}function $1(n,i,o,s,u=.5){const f=Pe(n.min,n.max,u);e0(n,i,o,f,s)}function io(n,i){$1(n.x,i.x,i.scaleX,i.scale,i.originX),$1(n.y,i.y,i.scaleY,i.scale,i.originY)}function U2(n,i){return N2(sE(n.getBoundingClientRect(),i))}function mE(n,i,o){const s=U2(n,o),{scroll:u}=i;return u&&(ao(s.x,u.offset.x),ao(s.y,u.offset.y)),s}const $2=({current:n})=>n?n.ownerDocument.defaultView:null,H1=(n,i)=>Math.abs(n-i);function gE(n,i){const o=H1(n.x,i.x),s=H1(n.y,i.y);return Math.sqrt(o**2+s**2)}class H2{constructor(i,o,{transformPagePoint:s,contextWindow:u,dragSnapToOrigin:f=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=md(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,S=gE(b.offset,{x:0,y:0})>=3;if(!x&&!S)return;const{point:C}=b,{timestamp:z}=En;this.history.push({...C,timestamp:z});const{onStart:M,onMove:A}=this.handlers;x||(M&&M(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=pd(x,this.transformPagePoint),ze.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();const{onEnd:S,onSessionEnd:C,resumeAnimation:z}=this.handlers;if(this.dragSnapToOrigin&&z&&z(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=md(b.type==="pointercancel"?this.lastMoveEventInfo:pd(x,this.transformPagePoint),this.history);this.startEvent&&S&&S(b,M),C&&C(b,M)},!z0(i))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=s,this.contextWindow=u||window;const d=tl(i),p=pd(d,this.transformPagePoint),{point:h}=p,{timestamp:m}=En;this.history=[{...h,timestamp:m}];const{onSessionStart:v}=o;v&&v(i,md(p,this.history)),this.removeListeners=Is(As(this.contextWindow,"pointermove",this.handlePointerMove),As(this.contextWindow,"pointerup",this.handlePointerUp),As(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Pi(this.updatePoint)}}function pd(n,i){return i?{point:i(n.point)}:n}function q1(n,i){return{x:n.x-i.x,y:n.y-i.y}}function md({point:n},i){return{point:n,delta:q1(n,q2(i)),offset:q1(n,vE(i)),velocity:yE(i,.1)}}function vE(n){return n[0]}function q2(n){return n[n.length-1]}function yE(n,i){if(n.length<2)return{x:0,y:0};let o=n.length-1,s=null;const u=q2(n);for(;o>=0&&(s=n[o],!(u.timestamp-s.timestamp>ri(i)));)o--;if(!s)return{x:0,y:0};const f=oi(u.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-s.x)/f,y:(u.y-s.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function bE(n,{min:i,max:o},s){return i!==void 0&&n<i?n=s?Pe(i,n,s.min):Math.max(n,i):o!==void 0&&n>o&&(n=s?Pe(o,n,s.max):Math.min(n,o)),n}function Y1(n,i,o){return{min:i!==void 0?n.min+i:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function xE(n,{top:i,left:o,bottom:s,right:u}){return{x:Y1(n.x,o,u),y:Y1(n.y,i,s)}}function G1(n,i){let o=i.min-n.min,s=i.max-n.max;return i.max-i.min<n.max-n.min&&([o,s]=[s,o]),{min:o,max:s}}function wE(n,i){return{x:G1(n.x,i.x),y:G1(n.y,i.y)}}function SE(n,i){let o=.5;const s=On(n),u=On(i);return u>s?o=fo(i.min,i.max-s,n.min):s>u&&(o=fo(n.min,n.max-u,i.min)),li(0,1,o)}function EE(n,i){const o={};return i.min!==void 0&&(o.min=i.min-n.min),i.max!==void 0&&(o.max=i.max-n.min),o}const n0=.35;function CE(n=n0){return n===!1?n=0:n===!0&&(n=n0),{x:X1(n,"left","right"),y:X1(n,"top","bottom")}}function X1(n,i,o){return{min:K1(n,i),max:K1(n,o)}}function K1(n,i){return typeof n=="number"?n:n[i]||0}const AE=new WeakMap;class TE{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=an(),this.visualElement=i}start(i,{snapToCursor:o=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(tl(v).point)},f=(v,b)=>{const{drag:x,dragPropagation:S,onDragStart:C}=this.getProps();if(x&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=bS(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),da(M=>{let A=this.getAxisMotionValue(M).get()||0;if(Na.test(A)){const{projection:D}=this.visualElement;if(D&&D.layout){const O=D.layout.layoutBox[M];O&&(A=On(O)*(parseFloat(A)/100))}}this.originPoint[M]=A}),C&&ze.postRender(()=>C(v,b)),qd(this.visualElement,"transform");const{animationState:z}=this.visualElement;z&&z.setActive("whileDrag",!0)},d=(v,b)=>{const{dragPropagation:x,dragDirectionLock:S,onDirectionLock:C,onDrag:z}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:M}=b;if(S&&this.currentDirection===null){this.currentDirection=jE(M),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",b.point,M),this.updateAxis("y",b.point,M),this.visualElement.render(),z&&z(v,b)},p=(v,b)=>this.stop(v,b),h=()=>da(v=>{var b;return this.getAnimationState(v)==="paused"&&((b=this.getAxisMotionValue(v).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new H2(i,{onSessionStart:u,onStart:f,onMove:d,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:$2(this.visualElement)})}stop(i,o){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&ze.postRender(()=>f(i,o))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,s){const{drag:u}=this.getProps();if(!s||!uu(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+s[i];this.constraints&&this.constraints[i]&&(d=bE(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){var i;const{dragConstraints:o,dragElastic:s}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,f=this.constraints;o&&to(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&u?this.constraints=xE(u.layoutBox,o):this.constraints=!1,this.elastic=CE(s),f!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&da(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=EE(u.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!to(i))return!1;const s=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=mE(s,u.root,this.visualElement.getTransformPagePoint());let d=wE(u.layout.layoutBox,f);if(o){const p=o(oE(d));this.hasMutatedConstraints=!!p,p&&(d=N2(p))}return d}startAnimation(i){const{drag:o,dragMomentum:s,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=da(v=>{if(!uu(v,o,this.currentDirection))return;let b=h&&h[v]||{};d&&(b={min:0,max:0});const x=u?200:1e6,S=u?40:1e7,C={type:"inertia",velocity:s?i[v]:0,bounceStiffness:x,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(v,C)});return Promise.all(m).then(p)}startAxisValueAnimation(i,o){const s=this.getAxisMotionValue(i);return qd(this.visualElement,i),s.start(Z0(i,s,0,o,this.visualElement,!1))}stopAnimation(){da(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){da(i=>{var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(i){var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,s=this.visualElement.getProps(),u=s[o];return u||this.visualElement.getValue(i,(s.initial?s.initial[i]:void 0)||0)}snapToCursor(i){da(o=>{const{drag:s}=this.getProps();if(!uu(o,s,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[o];f.set(i[o]-Pe(d,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!to(o)||!s||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};da(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const h=p.get();u[d]=SE({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),da(d=>{if(!uu(d,i,null))return;const p=this.getAxisMotionValue(d),{min:h,max:m}=this.constraints[d];p.set(Pe(h,m,u[d]))})}addListeners(){if(!this.visualElement.current)return;AE.set(this.visualElement,this);const i=this.visualElement.current,o=As(i,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps();m&&v&&this.start(h)}),s=()=>{const{dragConstraints:h}=this.getProps();to(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",s);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),ze.read(s);const d=$s(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(da(v=>{const b=this.getAxisMotionValue(v);b&&(this.originPoint[v]+=h[v].translate,b.set(b.get()+h[v].translate))}),this.visualElement.render())});return()=>{d(),o(),f(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=n0,dragMomentum:p=!0}=i;return{...i,drag:o,dragDirectionLock:s,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function uu(n,i,o){return(i===!0||i===n)&&(o===null||o===n)}function jE(n,i=10){let o=null;return Math.abs(n.y)>i?o="y":Math.abs(n.x)>i&&(o="x"),o}class RE extends Hi{constructor(i){super(i),this.removeGroupControls=Fn,this.removeListeners=Fn,this.controls=new TE(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Q1=n=>(i,o)=>{n&&ze.postRender(()=>n(i,o))};class zE extends Hi{constructor(){super(...arguments),this.removePointerDownListener=Fn}onPointerDown(i){this.session=new H2(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:$2(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:s,onPanEnd:u}=this.node.getProps();return{onSessionStart:Q1(i),onStart:Q1(o),onMove:s,onEnd:(f,d)=>{delete this.session,u&&ze.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=As(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const xu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function F1(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const gs={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(_t.test(n))n=parseFloat(n);else return n;const o=F1(n,i.target.x),s=F1(n,i.target.y);return`${o}% ${s}%`}},ME={correct:(n,{treeScale:i,projectionDelta:o})=>{const s=n,u=Ui.parse(n);if(u.length>5)return s;const f=Ui.createTransformer(n),d=typeof u[0]!="number"?1:0,p=o.x.scale*i.x,h=o.y.scale*i.y;u[0+d]/=p,u[1+d]/=h;const m=Pe(p,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=m),typeof u[3+d]=="number"&&(u[3+d]/=m),f(u)}};class kE extends T.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:s,layoutId:u}=this.props,{projection:f}=i;KS(OE),f&&(o.group&&o.group.add(f),s&&s.register&&u&&s.register(f),f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),xu.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:s,drag:u,isPresent:f}=this.props,d=s.projection;return d&&(d.isPresent=f,u||i.layoutDependency!==o||o===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||ze.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),R0.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:u}=i;u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),s&&s.deregister&&s.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Y2(n){const[i,o]=Ty(),s=T.useContext(v0);return y.jsx(kE,{...n,layoutGroup:s,switchLayoutGroup:T.useContext($y),isPresent:i,safeToRemove:o})}const OE={borderRadius:{...gs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gs,borderTopRightRadius:gs,borderBottomLeftRadius:gs,borderBottomRightRadius:gs,boxShadow:ME};function DE(n,i,o){const s=zn(n)?n:Ns(n);return s.start(Z0("",s,i,o)),s.animation}function BE(n){return n instanceof SVGElement&&n.tagName!=="svg"}const NE=(n,i)=>n.depth-i.depth;class LE{constructor(){this.children=[],this.isDirty=!1}add(i){w0(this.children,i),this.isDirty=!0}remove(i){S0(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(NE),this.isDirty=!1,this.children.forEach(i)}}function _E(n,i){const o=Ba.now(),s=({timestamp:u})=>{const f=u-o;f>=i&&(Pi(s),n(f-i))};return ze.read(s,!0),()=>Pi(s)}const G2=["TopLeft","TopRight","BottomLeft","BottomRight"],VE=G2.length,Z1=n=>typeof n=="string"?parseFloat(n):n,W1=n=>typeof n=="number"||_t.test(n);function PE(n,i,o,s,u,f){u?(n.opacity=Pe(0,o.opacity!==void 0?o.opacity:1,UE(s)),n.opacityExit=Pe(i.opacity!==void 0?i.opacity:1,0,$E(s))):f&&(n.opacity=Pe(i.opacity!==void 0?i.opacity:1,o.opacity!==void 0?o.opacity:1,s));for(let d=0;d<VE;d++){const p=`border${G2[d]}Radius`;let h=J1(i,p),m=J1(o,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||W1(h)===W1(m)?(n[p]=Math.max(Pe(Z1(h),Z1(m),s),0),(Na.test(m)||Na.test(h))&&(n[p]+="%")):n[p]=m}(i.rotate||o.rotate)&&(n.rotate=Pe(i.rotate||0,o.rotate||0,s))}function J1(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const UE=X2(0,.5,l2),$E=X2(.5,.95,Fn);function X2(n,i,o){return s=>s<n?0:s>i?1:o(fo(n,i,s))}function I1(n,i){n.min=i.min,n.max=i.max}function fa(n,i){I1(n.x,i.x),I1(n.y,i.y)}function tv(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function ev(n,i,o,s,u){return n-=i,n=Du(n,1/o,s),u!==void 0&&(n=Du(n,1/u,s)),n}function HE(n,i=0,o=1,s=.5,u,f=n,d=n){if(Na.test(i)&&(i=parseFloat(i),i=Pe(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=Pe(f.min,f.max,s);n===f&&(p-=i),n.min=ev(n.min,i,o,p,u),n.max=ev(n.max,i,o,p,u)}function nv(n,i,[o,s,u],f,d){HE(n,i[o],i[s],i[u],i.scale,f,d)}const qE=["x","scaleX","originX"],YE=["y","scaleY","originY"];function av(n,i,o,s){nv(n.x,i,qE,o?o.x:void 0,s?s.x:void 0),nv(n.y,i,YE,o?o.y:void 0,s?s.y:void 0)}function iv(n){return n.translate===0&&n.scale===1}function K2(n){return iv(n.x)&&iv(n.y)}function rv(n,i){return n.min===i.min&&n.max===i.max}function GE(n,i){return rv(n.x,i.x)&&rv(n.y,i.y)}function ov(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Q2(n,i){return ov(n.x,i.x)&&ov(n.y,i.y)}function sv(n){return On(n.x)/On(n.y)}function lv(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class XE{constructor(){this.members=[]}add(i){w0(this.members,i),i.scheduleRender()}remove(i){if(S0(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(u=>i===u);if(o===0)return!1;let s;for(let u=o;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){s=f;break}}return s?(this.promote(s),!0):!1}promote(i,o){const s=this.lead;if(i!==s&&(this.prevLead=s,this.lead=i,i.show(),s)){s.instance&&s.scheduleRender(),i.scheduleRender(),i.resumeFrom=s,o&&(i.resumeFrom.preserveOpacity=!0),s.snapshot&&(i.snapshot=s.snapshot,i.snapshot.latestValues=s.animationValues||s.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:s}=i;o.onExitComplete&&o.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function KE(n,i,o){let s="";const u=n.x.translate/i.x,f=n.y.translate/i.y,d=(o==null?void 0:o.z)||0;if((u||f||d)&&(s=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(s+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:m,rotate:v,rotateX:b,rotateY:x,skewX:S,skewY:C}=o;m&&(s=`perspective(${m}px) ${s}`),v&&(s+=`rotate(${v}deg) `),b&&(s+=`rotateX(${b}deg) `),x&&(s+=`rotateY(${x}deg) `),S&&(s+=`skewX(${S}deg) `),C&&(s+=`skewY(${C}deg) `)}const p=n.x.scale*i.x,h=n.y.scale*i.y;return(p!==1||h!==1)&&(s+=`scale(${p}, ${h})`),s||"none"}const gd=["","X","Y","Z"],QE={visibility:"hidden"},uv=1e3;let FE=0;function vd(n,i,o,s){const{latestValues:u}=i;u[n]&&(o[n]=u[n],i.setStaticValue(n,0),s&&(s[n]=0))}function F2(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const o=e2(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",ze,!(u||f))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&F2(s)}function Z2({attachResizeListener:n,defaultParent:i,measureScroll:o,checkIsScrollRoot:s,resetTransform:u}){return class{constructor(d={},p=i==null?void 0:i()){this.id=FE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(JE),this.nodes.forEach(aC),this.nodes.forEach(iC),this.nodes.forEach(IE)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new LE)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new C0),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const h=this.eventHandlers.get(d);h&&h.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,p=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=BE(d),this.instance=d;const{layoutId:h,layout:m,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),p&&(m||h)&&(this.isLayoutDirty=!0),n){let b;const x=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=_E(x,250),xu.hasAnimatedSinceResize&&(xu.hasAnimatedSinceResize=!1,this.nodes.forEach(fv))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||m)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const z=this.options.transition||v.getDefaultTransition()||uC,{onLayoutAnimationStart:M,onLayoutAnimationComplete:A}=v.getProps(),D=!this.targetLayout||!Q2(this.targetLayout,C),O=!x&&S;if(this.options.layoutRoot||this.resumeFrom||O||x&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,O);const L={...A0(z,"layout"),onPlay:M,onComplete:A};(v.shouldReduceMotion||this.options.layoutRoot)&&(L.delay=0,L.type=!1),this.startAnimation(L)}else x||fv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rC),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&F2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(cv);return}this.isUpdating||this.nodes.forEach(eC),this.isUpdating=!1,this.nodes.forEach(nC),this.nodes.forEach(ZE),this.nodes.forEach(WE),this.clearAllSnapshots();const p=Ba.now();En.delta=li(0,1e3/60,p-En.timestamp),En.timestamp=p,En.isProcessing=!0,ld.update.process(En),ld.preRender.process(En),ld.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,R0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(tC),this.sharedNodes.forEach(oC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!On(this.snapshot.measuredBox.x)&&!On(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=an(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p){const h=s(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!K2(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,v=m!==this.prevTransformTemplateValue;d&&(p||dr(this.latestValues)||v)&&(u(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return d&&(h=this.removeTransform(h)),cC(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:p}=this.options;if(!p)return an();const h=p.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(fC))){const{scroll:v}=this.root;v&&(ao(h.x,v.offset.x),ao(h.y,v.offset.y))}return h}removeElementScroll(d){var p;const h=an();if(fa(h,d),!((p=this.scroll)===null||p===void 0)&&p.wasRoot)return h;for(let m=0;m<this.path.length;m++){const v=this.path[m],{scroll:b,options:x}=v;v!==this.root&&b&&x.layoutScroll&&(b.wasRoot&&fa(h,d),ao(h.x,b.offset.x),ao(h.y,b.offset.y))}return h}applyTransform(d,p=!1){const h=an();fa(h,d);for(let m=0;m<this.path.length;m++){const v=this.path[m];!p&&v.options.layoutScroll&&v.scroll&&v!==v.root&&io(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),dr(v.latestValues)&&io(h,v.latestValues)}return dr(this.latestValues)&&io(h,this.latestValues),h}removeTransform(d){const p=an();fa(p,d);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!dr(m.latestValues))continue;t0(m.latestValues)&&m.updateSnapshot();const v=an(),b=m.measurePageBox();fa(v,b),av(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,v)}return dr(this.latestValues)&&av(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var p;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((p=this.parent)===null||p===void 0)&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!(!this.layout||!(b||x))){if(this.resolvedRelativeTargetAt=En.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),js(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),fa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=an(),this.targetWithTransforms=an()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),hE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):fa(this.target,this.layout.layoutBox),P2(this.target,this.targetDelta)):fa(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),js(this.relativeTargetOrigin,this.target,S.target),fa(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||t0(this.parent.latestValues)||V2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const p=this.getLead(),h=!!this.resumingFrom||this!==p;let m=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===En.timestamp&&(m=!1),m)return;const{layout:v,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||b))return;fa(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;pE(this.layoutCorrected,this.treeScale,this.path,h),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=an());const{target:C}=p;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(tv(this.prevProjectionDelta.x,this.projectionDelta.x),tv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ts(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!lv(this.projectionDelta.x,this.prevProjectionDelta.x)||!lv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)===null||p===void 0||p.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=no(),this.projectionDelta=no(),this.projectionDeltaWithTransform=no()}setAnimationOrigin(d,p=!1){const h=this.snapshot,m=h?h.latestValues:{},v={...this.latestValues},b=no();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=an(),S=h?h.source:void 0,C=this.layout?this.layout.source:void 0,z=S!==C,M=this.getStack(),A=!M||M.members.length<=1,D=!!(z&&!A&&this.options.crossfade===!0&&!this.path.some(lC));this.animationProgress=0;let O;this.mixTargetDelta=L=>{const B=L/1e3;dv(b.x,d.x,B),dv(b.y,d.y,B),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(js(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sC(this.relativeTarget,this.relativeTargetOrigin,x,B),O&&GE(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=an()),fa(O,this.relativeTarget)),z&&(this.animationValues=v,PE(v,m,this.latestValues,B,D,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ze.update(()=>{xu.hasAnimatedSinceResize=!0,this.currentAnimation=DE(0,uv,{...d,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:v}=d;if(!(!p||!h||!m)){if(this!==d&&this.layout&&m&&W2(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||an();const b=On(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+b;const x=On(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}fa(p,h),io(p,v),Ts(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new XE),this.sharedNodes.get(d).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:p}=this.options;return p?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:p}=this.options;return p?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&vd("z",d,m,this.animationValues);for(let v=0;v<gd.length;v++)vd(`rotate${gd[v]}`,d,m,this.animationValues),vd(`skew${gd[v]}`,d,m,this.animationValues);d.render();for(const v in m)d.setStaticValue(v,m[v]),this.animationValues&&(this.animationValues[v]=m[v]);d.scheduleRender()}getProjectionStyles(d){var p,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return QE;const m={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=bu(d==null?void 0:d.pointerEvents)||"",m.transform=v?v(this.latestValues,""):"none",m;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const z={};return this.options.layoutId&&(z.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,z.pointerEvents=bu(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!dr(this.latestValues)&&(z.transform=v?v({},""):"none",this.hasProjected=!1),z}const x=b.animationValues||b.latestValues;this.applyTransformsToTarget(),m.transform=KE(this.projectionDeltaWithTransform,this.treeScale,x),v&&(m.transform=v(x,m.transform));const{x:S,y:C}=this.projectionDelta;m.transformOrigin=`${S.origin*100}% ${C.origin*100}% 0`,b.animationValues?m.opacity=b===this?(h=(p=x.opacity)!==null&&p!==void 0?p:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:m.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const z in _s){if(x[z]===void 0)continue;const{correct:M,applyTo:A,isCSSVariable:D}=_s[z],O=m.transform==="none"?x[z]:M(x[z],b);if(A){const L=A.length;for(let B=0;B<L;B++)m[A[B]]=O}else D?this.options.visualElement.renderState.vars[z]=O:m[z]=O}return this.options.layoutId&&(m.pointerEvents=b===this?bu(d==null?void 0:d.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)===null||p===void 0?void 0:p.stop()}),this.root.nodes.forEach(cv),this.root.sharedNodes.clear()}}}function ZE(n){n.updateLayout()}function WE(n){var i;const o=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:u}=n.layout,{animationType:f}=n.options,d=o.source!==n.layout.source;f==="size"?da(b=>{const x=d?o.measuredBox[b]:o.layoutBox[b],S=On(x);x.min=s[b].min,x.max=x.min+S}):W2(f,o.layoutBox,s)&&da(b=>{const x=d?o.measuredBox[b]:o.layoutBox[b],S=On(s[b]);x.max=x.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+S)});const p=no();Ts(p,s,o.layoutBox);const h=no();d?Ts(h,n.applyTransform(u,!0),o.measuredBox):Ts(h,s,o.layoutBox);const m=!K2(p);let v=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:x,layout:S}=b;if(x&&S){const C=an();js(C,o.layoutBox,x.layoutBox);const z=an();js(z,s,S.layoutBox),Q2(C,z)||(v=!0),b.options.layoutRoot&&(n.relativeTarget=z,n.relativeTargetOrigin=C,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:o,delta:h,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function JE(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function IE(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function tC(n){n.clearSnapshot()}function cv(n){n.clearMeasurements()}function eC(n){n.isLayoutDirty=!1}function nC(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function fv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function aC(n){n.resolveTargetDelta()}function iC(n){n.calcProjection()}function rC(n){n.resetSkewAndRotation()}function oC(n){n.removeLeadSnapshot()}function dv(n,i,o){n.translate=Pe(i.translate,0,o),n.scale=Pe(i.scale,1,o),n.origin=i.origin,n.originPoint=i.originPoint}function hv(n,i,o,s){n.min=Pe(i.min,o.min,s),n.max=Pe(i.max,o.max,s)}function sC(n,i,o,s){hv(n.x,i.x,o.x,s),hv(n.y,i.y,o.y,s)}function lC(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const uC={duration:.45,ease:[.4,0,.1,1]},pv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),mv=pv("applewebkit/")&&!pv("chrome/")?Math.round:Fn;function gv(n){n.min=mv(n.min),n.max=mv(n.max)}function cC(n){gv(n.x),gv(n.y)}function W2(n,i,o){return n==="position"||n==="preserve-aspect"&&!dE(sv(i),sv(o),.2)}function fC(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const dC=Z2({attachResizeListener:(n,i)=>$s(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),yd={current:void 0},J2=Z2({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!yd.current){const n=new dC({});n.mount(window),n.setOptions({layoutScroll:!0}),yd.current=n}return yd.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),hC={pan:{Feature:zE},drag:{Feature:RE,ProjectionNode:J2,MeasureLayout:Y2}};function vv(n,i,o){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,f=s[u];f&&ze.postRender(()=>f(i,tl(i)))}class pC extends Hi{mount(){const{current:i}=this.node;i&&(this.unmount=wS(i,(o,s)=>(vv(this.node,s,"Start"),u=>vv(this.node,u,"End"))))}unmount(){}}class mC extends Hi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Is($s(this.node.current,"focus",()=>this.onFocus()),$s(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function yv(n,i,o){const{props:s}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),f=s[u];f&&ze.postRender(()=>f(i,tl(i)))}class gC extends Hi{mount(){const{current:i}=this.node;i&&(this.unmount=AS(i,(o,s)=>(yv(this.node,s,"Start"),(u,{success:f})=>yv(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const a0=new WeakMap,bd=new WeakMap,vC=n=>{const i=a0.get(n.target);i&&i(n)},yC=n=>{n.forEach(vC)};function bC({root:n,...i}){const o=n||document;bd.has(o)||bd.set(o,{});const s=bd.get(o),u=JSON.stringify(i);return s[u]||(s[u]=new IntersectionObserver(yC,{root:n,...i})),s[u]}function xC(n,i,o){const s=bC(i);return a0.set(n,o),s.observe(n),()=>{a0.delete(n),s.unobserve(n)}}const wC={some:0,all:1};class SC extends Hi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:s,amount:u="some",once:f}=i,d={root:o?o.current:void 0,rootMargin:s,threshold:typeof u=="number"?u:wC[u]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,f&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),x=m?v:b;x&&x(h)};return xC(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(EC(i,o))&&this.startObserver()}unmount(){}}function EC({viewport:n={}},{viewport:i={}}={}){return o=>n[o]!==i[o]}const CC={inView:{Feature:SC},tap:{Feature:gC},focus:{Feature:mC},hover:{Feature:pC}},AC={layout:{ProjectionNode:J2,MeasureLayout:Y2}},i0={current:null},I2={current:!1};function TC(){if(I2.current=!0,!!b0)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>i0.current=n.matches;n.addListener(i),i()}else i0.current=!1}const jC=[...E2,Rn,Ui],RC=n=>jC.find(S2(n)),zC=new WeakMap;function MC(n,i,o){for(const s in i){const u=i[s],f=o[s];if(zn(u))n.addValue(s,u);else if(zn(f))n.addValue(s,Ns(u,{owner:n}));else if(f!==u)if(n.hasValue(s)){const d=n.getValue(s);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(s);n.addValue(s,Ns(d!==void 0?d:u,{owner:n}))}}for(const s in o)i[s]===void 0&&n.removeValue(s);return i}const bv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class kC{scrapeMotionValuesFromProps(i,o,s){return{}}constructor({parent:i,props:o,presenceContext:s,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=K0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Ba.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,ze.render(this.render,!1,!0))};const{latestValues:h,renderState:m,onUpdate:v}=d;this.onUpdate=v,this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=m,this.parent=i,this.props=o,this.presenceContext=s,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Ku(o),this.isVariantNode=Py(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:b,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const S in x){const C=x[S];h[S]!==void 0&&zn(C)&&C.set(h[S],!1)}}mount(i){this.current=i,zC.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,s)=>this.bindToMotionValue(s,o)),I2.current||TC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:i0.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Pi(this.notifyUpdate),Pi(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const s=wr.has(i);s&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",p=>{this.latestValues[i]=p,this.props.onUpdate&&ze.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),f=o.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{u(),f(),d&&d(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ho){const o=ho[i];if(!o)continue;const{isEnabled:s,Feature:u}=o;if(!this.features[i]&&u&&s(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):an()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<bv.length;s++){const u=bv[s];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=MC(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const s=this.values.get(i);o!==s&&(s&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let s=this.values.get(i);return s===void 0&&o!==void 0&&(s=Ns(o===null?void 0:o,{owner:this}),this.addValue(i,s)),s}readValue(i,o){var s;let u=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(s=this.getBaseTargetFromProps(this.props,i))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,i,this.options);return u!=null&&(typeof u=="string"&&(x2(u)||c2(u))?u=parseFloat(u):!RC(u)&&Ui.test(o)&&(u=v2(i,o)),this.setBaseTarget(i,zn(u)?u.get():u)),zn(u)?u.get():u}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){var o;const{initial:s}=this.props;let u;if(typeof s=="string"||typeof s=="object"){const d=$0(this.props,s,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);d&&(u=d[i])}if(s&&u!==void 0)return u;const f=this.getBaseTargetFromProps(this.props,i);return f!==void 0&&!zn(f)?f:this.initialValues[i]!==void 0&&u===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new C0),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}}class tb extends kC{constructor(){super(...arguments),this.KeyframeResolver=C2}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:s}){delete o[i],delete s[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;zn(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function OC(n){return window.getComputedStyle(n)}class DC extends tb{constructor(){super(...arguments),this.type="html",this.renderInstance=Zy}readValueFromInstance(i,o){if(wr.has(o))return Y6(i,o);{const s=OC(i),u=(D0(o)?s.getPropertyValue(o):s[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:o}){return U2(i,o)}build(i,o,s){L0(i,o,s.transformTemplate)}scrapeMotionValuesFromProps(i,o,s){return H0(i,o,s)}}class BC extends tb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=an,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Fy(this.current,this.renderState)}}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(wr.has(o)){const s=g2(o);return s&&s.default||0}return o=Wy.has(o)?o:O0(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,s){return Iy(i,o,s)}onBindTransform(){this.current&&!this.renderState.dimensions&&ze.postRender(this.updateDimensions)}build(i,o,s){P0(i,o,this.isSVGTag,s.transformTemplate)}renderInstance(i,o,s,u){Jy(i,o,s,u)}mount(i){this.isSVGTag=U0(i.tagName),super.mount(i)}}const NC=(n,i)=>V0(n)?new BC(i):new DC(i,{allowProjection:n!==T.Fragment}),LC=v6({...iE,...CC,...hC,...AC},NC),xd=DS(LC);function _C(n){return rn({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(n)}const VC=()=>{const[n,i]=T.useState([]),[o,s]=T.useState(null),[u,f]=T.useState(null),[d,p]=T.useState(!1),[h,m]=T.useState([{name:"Curiosità Pokémon",color:"#EE1515",questions:[{question:"L'Adamo dei pokemon per gamefreak",answer:"Rhydon è stato il primo pokemon disegnato",points:100,answered:!1},{question:"Charizard può anche ottenere una variante ogni anno, ma c'è chi ne possiede 4 miliardi",answer:"Possibili varianti delle macchie di Spinda",points:200,answered:!1},{question:"Se proprio devo morire che almeno diventi un pokemon",answer:"Yamask si dice che sia stato un umano divenuto pokemon dopo la morte e che la maschera sia il ricordo della vita passata",points:300,answered:!1},{question:"Roma di notte e di notte Roma, Mew di giorno e di notte…",answer:" Smergle, fra le varie leggende legate a loro due esiste una che dice che Smergle sia Mew di notte",points:400,answered:!1},{question:"Sebbene sia la mascotte, c'è ancora chi non sa scrivere il suo nome",answer:"Errore del nome Pikachu in Pokemon Go (Pikahcu)",points:500,answered:!1}]},{name:"Pokémon",color:"#3B4CCA",questions:[{question:"Impossibile andare oltre",answer:"Nosepass",points:100,answered:!1},{question:"Bello Chimchar, sì, finché non ti arriva da Wish",answer:"Pansear",points:200,answered:!1},{question:"Il pokemon preferito di Bud Spencer",answer:"Hippowdon",points:300,answered:!1},{question:"Dovrei essere meno emotivo, sono tentato a diventare più freddo",answer:"Tentacool",points:400,answered:!1},{question:"Sono le 11:05 o le 12:55?",answer:"Hoothoot",points:500,answered:!1}]},{name:"Allenatori",color:"#FFDE00",questions:[{question:"C'è solo un capitano",answer:"Marinaio",points:100,answered:!1},{question:"Conoscevo questo allenatore ma poi mi sono scordato ",answer:"Chitarrista",points:200,answered:!1},{question:"Quanto era bello fargli il culo dopo che ti prendeva un coccolone?",answer:"Ninja",points:300,answered:!1},{question:"Il potere è pelato e a quanto pare anche muscoloso",answer:"ZuccaPelata",points:400,answered:!1},{question:"+10 punti se sale sul campo da battaglia con i capezzoli di fuori?",answer:"Fantallenatore",points:500,answered:!1}]},{name:"GCC Pokémon",color:"#FF9C54",questions:[{question:"Quante carte si pescano all'inizio di una partita nel GCC Pokémon?",answer:"7",points:100,answered:!1},{question:"Quanti sono i tipi presenti nel GCC?",answer:"11",points:200,answered:!1},{question:"Qual è il valore di ritirata più alto mai stampato su una carta?",answer:"5 energie",points:300,answered:!1},{question:"Quanti sono i PS massimi mai stampati su una carta?",answer:"340",points:400,answered:!1},{question:"Qual è il primo set di carte e quando è stato rilasciato? (giappone/italia)",answer:"Set Base nel 1996/2000",points:500,answered:!1}]},{name:"Serie Pokémon",color:"#78C850",questions:[{question:"Quale pokemon era famoso per portare sempre con se un paio di occhiali neri?",answer:"Squirtle",points:100,answered:!1},{question:"Quale Pokémon leggendario appare nel primo film? (fino a 5 gen)",answer:"Misty - Brock - Spighetto - (Iris)",points:200,answered:!1},{question:"In quale anno è uscita la prima serie pokemon in Italia?",answer:"Nel 2000",points:300,answered:!1},{question:"Chi sono i pokemon starter full evolved avuti da ash?",answer:"Charizard - Sceptile - Torterra - Infernape - Incineroar - Greninja -",points:400,answered:!1},{question:"Quanti sono i lungometraggi della serie pokemon?",answer:"22 ",points:500,answered:!1}]}]);T.useEffect(()=>{const z=localStorage.getItem("quizPlayers");if(z){const A=JSON.parse(z);i(A),A.length>0&&s(A[0])}const M=localStorage.getItem("quizCategories");if(M)m(JSON.parse(M));else{const A=h.map(D=>({...D,questions:D.questions.map(O=>({...O,id:`${D.name}-${O.points}-${Math.random().toString(36).substr(2,9)}`}))}));m(A)}},[]);const v=(z,M,A)=>{M.answered||!o||(f({category:z,question:M,categoryColor:A}),p(!1))},b=z=>{const M=h.map(A=>({...A,questions:A.questions.map(D=>D.id===z.id?{...D,answered:!0}:D)}));m(M),localStorage.setItem("quizCategories",JSON.stringify(M))},x=()=>{if(!o||!u)return;const z=n.map(M=>M.id===o.id?{...M,score:M.score+u.question.points}:M);i(z),localStorage.setItem("quizPlayers",JSON.stringify(z)),s({...o,score:o.score+u.question.points}),b(u.question),f(null)},S=()=>{u&&(b(u.question),f(null))},C=()=>{const z=h.map(M=>({...M,questions:M.questions.map(A=>({...A,answered:!1}))}));m(z),localStorage.setItem("quizCategories",JSON.stringify(z))};return y.jsxs(HC,{children:[y.jsxs(TA,{onClick:C,children:[y.jsx(Gw,{})," Reset Quiz"]}),y.jsxs(KC,{to:"/game",children:[y.jsx(br,{})," Torna ai giochi"]}),y.jsx(QC,{children:"Sfida Quiz Pokémon"}),y.jsxs(FC,{children:[y.jsx(ZC,{children:h.map((z,M)=>y.jsxs(IC,{$color:z.color,children:[y.jsx(WC,{}),z.name]},M))}),[0,1,2,3,4].map(z=>y.jsx(tA,{children:h.map((M,A)=>{const D=M.questions[z];return y.jsx(eA,{$color:M.color,$answered:D.answered,onClick:()=>v(M.name,D,M.color),children:D.answered?y.jsx(aA,{children:y.jsx(JC,{})}):y.jsx(nA,{children:D.points})},A)})},z))]}),y.jsxs(iA,{children:[y.jsxs(rA,{children:[y.jsx(oA,{children:"Allenatori"}),y.jsx(sA,{children:o?"Scegli una casella per sfidare la tua conoscenza":"Scegli un allenatore per iniziare"})]}),y.jsx(lA,{children:n.map(z=>y.jsxs(uA,{$active:(o==null?void 0:o.id)===z.id,onClick:()=>s(z),children:[y.jsx(wv,{src:z.avatar,alt:z.name}),y.jsxs(cA,{children:[y.jsx(fA,{children:z.name}),y.jsxs(dA,{children:[y.jsx(xv,{})," ",z.score," punti"]})]}),(o==null?void 0:o.id)===z.id&&y.jsx(hA,{children:y.jsx(Ey,{})})]},z.id))})]}),y.jsx(uS,{children:u&&y.jsx(pA,{as:xd.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:y.jsxs(mA,{as:xd.div,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},$color:u.categoryColor,children:[y.jsx(_C,{size:"30px",color:"red",style:{position:"absolute",top:"20px",right:"50% ",transform:"translateX(50%)",cursor:"pointer",backgroundColor:"#d9d9d940",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"5px",zIndex:10},onClick:()=>{f(null),p(!1)}}),y.jsxs(gA,{children:[y.jsx(vA,{$color:u.categoryColor,children:u.category}),y.jsxs(yA,{children:[y.jsx(xv,{})," ",u.question.points," punti"]})]}),y.jsx(bA,{children:u.question.question}),y.jsx(xA,{children:d?y.jsxs(wA,{as:xd.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[y.jsx(SA,{children:u.question.answer}),y.jsxs(EA,{children:[y.jsxs(Sv,{$color:"#4CAF50",onClick:x,children:[y.jsx(qu,{})," Corretta"]}),y.jsxs(Sv,{$color:"#EE1515",onClick:S,children:[y.jsx(co,{})," Sbagliata"]})]})]}):y.jsxs(CA,{onClick:()=>p(!0),children:[y.jsx(Yw,{})," Mostra Risposta"]})}),y.jsxs(AA,{children:[y.jsx(wv,{src:o==null?void 0:o.avatar,alt:o==null?void 0:o.name,$small:!0}),y.jsx("span",{children:o==null?void 0:o.name})]})]})})}),y.jsxs(qC,{children:[y.jsx(qs,{className:"ball1"}),y.jsx(qs,{className:"ball2"}),y.jsx(YC,{className:"ball3"}),y.jsx(GC,{className:"ball4"}),y.jsx(XC,{className:"ball5"})]})]})},Hs=Te`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-100px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,PC=Te`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,UC=Te`
  0% { opacity: 0.3; }
  50% { opacity: 0.8; }
  100% { opacity: 0.3; }
`,$C=Te`
  0% { transform: rotate(-5deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`,HC=E.div`
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
`,qC=E.div`
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
    animation: ${Hs} 12s ease-in-out infinite;
  }

  &.ball2 {
    bottom: 10%;
    left: 5%;
    animation: ${Hs} 10s ease-in-out infinite reverse;
  }
`,YC=E(qs)`
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
    animation: ${Hs} 15s ease-in-out infinite;
  }
`,GC=E(qs)`
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
    animation: ${Hs} 18s ease-in-out infinite reverse;
  }
`,XC=E(qs)`
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
    animation: ${Hs} 14s ease-in-out infinite;
  }
`,KC=E(Va)`
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
`,QC=E.h1`
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
`,FC=E.div`
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
`,ZC=E.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,WC=E.div`
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
`,JC=E.div`
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
  animation: ${$C} 1s ease-in-out;
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
`,xv=E.div`
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
`,IC=E.div`
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
`,tA=E.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`,eA=E.div`
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
`,nA=E.div`
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
`,aA=E.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`,iA=E.div`
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
`,rA=E.div`
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
`,oA=E.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,sA=E.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`,lA=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,uA=E.div`
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
      animation: ${PC} 2s infinite ease-in-out;
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
`,wv=E.img`
  width: ${n=>n.$small?"30px":"45px"};
  height: ${n=>n.$small?"30px":"45px"};
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
`,cA=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,fA=E.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,dA=E.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,hA=E.div`
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
  animation: ${UC} 2s infinite;
`,pA=E.div`
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
`,mA=E.div`
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
`,gA=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`,vA=E.div`
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
`,yA=E.div`
  background: rgba(255, 255, 255, 0.15);
  color: #ffde00;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 222, 0, 0.3);
  display: flex;
  align-items: center;
`,bA=E.div`
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
`,xA=E.div`
  padding: 20px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
  position: relative;
  z-index: 1;
`,wA=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,SA=E.div`
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
`,EA=E.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`,Sv=E.button`
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
`,CA=E.button`
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
`,AA=E.div`
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
`,TA=E.button`
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
`;var wd={exports:{}},Ev;function jA(){return Ev||(Ev=1,function(n,i){(function(o,s){n.exports=s(Bu())})(window,function(o){return function(s){var u={};function f(d){if(u[d])return u[d].exports;var p=u[d]={i:d,l:!1,exports:{}};return s[d].call(p.exports,p,p.exports,f),p.l=!0,p.exports}return f.m=s,f.c=u,f.d=function(d,p,h){f.o(d,p)||Object.defineProperty(d,p,{enumerable:!0,get:h})},f.r=function(d){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})},f.t=function(d,p){if(1&p&&(d=f(d)),8&p||4&p&&typeof d=="object"&&d&&d.__esModule)return d;var h=Object.create(null);if(f.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:d}),2&p&&typeof d!="string")for(var m in d)f.d(h,m,(function(v){return d[v]}).bind(null,m));return h},f.n=function(d){var p=d&&d.__esModule?function(){return d.default}:function(){return d};return f.d(p,"a",p),p},f.o=function(d,p){return Object.prototype.hasOwnProperty.call(d,p)},f.p="",f(f.s=11)}([function(s,u){s.exports=o},function(s,u,f){(function(d){var p=f(2),h=f(0),m=f.n(h),v=f(6);f.n(v);var b=f(7),x=f(8),S=f(4),C=f(3),z=f.n(C);function M(){return(M=Object.assign||function($){for(var F=1;F<arguments.length;F++){var U=arguments[F];for(var X in U)Object.prototype.hasOwnProperty.call(U,X)&&($[X]=U[X])}return $}).apply(this,arguments)}var A=function($,F){for(var U=[$[0]],X=0,mt=F.length;X<mt;X+=1)U.push(F[X],$[X+1]);return U},D=function($){return $!==null&&typeof $=="object"&&($.toString?$.toString():Object.prototype.toString.call($))==="[object Object]"&&!Object(p.typeOf)($)},O=Object.freeze([]),L=Object.freeze({});function B($){return typeof $=="function"}function W($){return $.displayName||$.name||"Component"}function st($){return $&&typeof $.styledComponentId=="string"}var dt=d!==void 0&&(d.env.REACT_APP_SC_ATTR||d.env.SC_ATTR)||"data-styled",Q=typeof window<"u"&&"HTMLElement"in window,yt=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:d!==void 0&&d.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&d.env.REACT_APP_SC_DISABLE_SPEEDY!==""?d.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&d.env.REACT_APP_SC_DISABLE_SPEEDY:d!==void 0&&d.env.SC_DISABLE_SPEEDY!==void 0&&d.env.SC_DISABLE_SPEEDY!==""&&d.env.SC_DISABLE_SPEEDY!=="false"&&d.env.SC_DISABLE_SPEEDY);function et($){for(var F=arguments.length,U=new Array(F>1?F-1:0),X=1;X<F;X++)U[X-1]=arguments[X];throw new Error("An error occurred. See https://git.io/JUIaE#"+$+" for more information."+(U.length>0?" Args: "+U.join(", "):""))}var ue=function(){function $(U){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=U}var F=$.prototype;return F.indexOfGroup=function(U){for(var X=0,mt=0;mt<U;mt++)X+=this.groupSizes[mt];return X},F.insertRules=function(U,X){if(U>=this.groupSizes.length){for(var mt=this.groupSizes,zt=mt.length,xt=zt;U>=xt;)(xt<<=1)<0&&et(16,""+U);this.groupSizes=new Uint32Array(xt),this.groupSizes.set(mt),this.length=xt;for(var kt=zt;kt<xt;kt++)this.groupSizes[kt]=0}for(var Ut=this.indexOfGroup(U+1),Xt=0,fe=X.length;Xt<fe;Xt++)this.tag.insertRule(Ut,X[Xt])&&(this.groupSizes[U]++,Ut++)},F.clearGroup=function(U){if(U<this.length){var X=this.groupSizes[U],mt=this.indexOfGroup(U),zt=mt+X;this.groupSizes[U]=0;for(var xt=mt;xt<zt;xt++)this.tag.deleteRule(mt)}},F.getGroup=function(U){var X="";if(U>=this.length||this.groupSizes[U]===0)return X;for(var mt=this.groupSizes[U],zt=this.indexOfGroup(U),xt=zt+mt,kt=zt;kt<xt;kt++)X+=this.tag.getRule(kt)+`/*!sc*/
`;return X},$}(),Se=new Map,Z=new Map,Dt=1,G=function($){if(Se.has($))return Se.get($);for(;Z.has(Dt);)Dt++;var F=Dt++;return Se.set($,F),Z.set(F,$),F},K=function($){return Z.get($)},it=function($,F){Se.set($,F),Z.set(F,$)},gt="style["+dt+'][data-styled-version="5.2.1"]',k=new RegExp("^"+dt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nt=function($,F,U){for(var X,mt=U.split(","),zt=0,xt=mt.length;zt<xt;zt++)(X=mt[zt])&&$.registerName(F,X)},vt=function($,F){for(var U=F.innerHTML.split(`/*!sc*/
`),X=[],mt=0,zt=U.length;mt<zt;mt++){var xt=U[mt].trim();if(xt){var kt=xt.match(k);if(kt){var Ut=0|parseInt(kt[1],10),Xt=kt[2];Ut!==0&&(it(Xt,Ut),nt($,Xt,kt[3]),$.getTag().insertRules(Ut,X)),X.length=0}else X.push(xt)}}},wt=function(){return f.nc},pt=function($){var F=document.head,U=$||F,X=document.createElement("style"),mt=function(kt){for(var Ut=kt.childNodes,Xt=Ut.length;Xt>=0;Xt--){var fe=Ut[Xt];if(fe&&fe.nodeType===1&&fe.hasAttribute(dt))return fe}}(U),zt=mt!==void 0?mt.nextSibling:null;X.setAttribute(dt,"active"),X.setAttribute("data-styled-version","5.2.1");var xt=wt();return xt&&X.setAttribute("nonce",xt),U.insertBefore(X,zt),X},ft=function(){function $(U){var X=this.element=pt(U);X.appendChild(document.createTextNode("")),this.sheet=function(mt){if(mt.sheet)return mt.sheet;for(var zt=document.styleSheets,xt=0,kt=zt.length;xt<kt;xt++){var Ut=zt[xt];if(Ut.ownerNode===mt)return Ut}et(17)}(X),this.length=0}var F=$.prototype;return F.insertRule=function(U,X){try{return this.sheet.insertRule(X,U),this.length++,!0}catch{return!1}},F.deleteRule=function(U){this.sheet.deleteRule(U),this.length--},F.getRule=function(U){var X=this.sheet.cssRules[U];return X!==void 0&&typeof X.cssText=="string"?X.cssText:""},$}(),ot=function(){function $(U){var X=this.element=pt(U);this.nodes=X.childNodes,this.length=0}var F=$.prototype;return F.insertRule=function(U,X){if(U<=this.length&&U>=0){var mt=document.createTextNode(X),zt=this.nodes[U];return this.element.insertBefore(mt,zt||null),this.length++,!0}return!1},F.deleteRule=function(U){this.element.removeChild(this.nodes[U]),this.length--},F.getRule=function(U){return U<this.length?this.nodes[U].textContent:""},$}(),Tt=function(){function $(U){this.rules=[],this.length=0}var F=$.prototype;return F.insertRule=function(U,X){return U<=this.length&&(this.rules.splice(U,0,X),this.length++,!0)},F.deleteRule=function(U){this.rules.splice(U,1),this.length--},F.getRule=function(U){return U<this.length?this.rules[U]:""},$}(),St=Q,H={isServer:!Q,useCSSOMInjection:!yt},Nt=function(){function $(U,X,mt){U===void 0&&(U=L),X===void 0&&(X={}),this.options=M({},H,{},U),this.gs=X,this.names=new Map(mt),!this.options.isServer&&Q&&St&&(St=!1,function(zt){for(var xt=document.querySelectorAll(gt),kt=0,Ut=xt.length;kt<Ut;kt++){var Xt=xt[kt];Xt&&Xt.getAttribute(dt)!=="active"&&(vt(zt,Xt),Xt.parentNode&&Xt.parentNode.removeChild(Xt))}}(this))}$.registerId=function(U){return G(U)};var F=$.prototype;return F.reconstructWithOptions=function(U,X){return X===void 0&&(X=!0),new $(M({},this.options,{},U),this.gs,X&&this.names||void 0)},F.allocateGSInstance=function(U){return this.gs[U]=(this.gs[U]||0)+1},F.getTag=function(){return this.tag||(this.tag=(mt=(X=this.options).isServer,zt=X.useCSSOMInjection,xt=X.target,U=mt?new Tt(xt):zt?new ft(xt):new ot(xt),new ue(U)));var U,X,mt,zt,xt},F.hasNameForId=function(U,X){return this.names.has(U)&&this.names.get(U).has(X)},F.registerName=function(U,X){if(G(U),this.names.has(U))this.names.get(U).add(X);else{var mt=new Set;mt.add(X),this.names.set(U,mt)}},F.insertRules=function(U,X,mt){this.registerName(U,X),this.getTag().insertRules(G(U),mt)},F.clearNames=function(U){this.names.has(U)&&this.names.get(U).clear()},F.clearRules=function(U){this.getTag().clearGroup(G(U)),this.clearNames(U)},F.clearTag=function(){this.tag=void 0},F.toString=function(){return function(U){for(var X=U.getTag(),mt=X.length,zt="",xt=0;xt<mt;xt++){var kt=K(xt);if(kt!==void 0){var Ut=U.names.get(kt),Xt=X.getGroup(xt);if(Ut!==void 0&&Xt.length!==0){var fe=dt+".g"+xt+'[id="'+kt+'"]',Ge="";Ut!==void 0&&Ut.forEach(function(en){en.length>0&&(Ge+=en+",")}),zt+=""+Xt+fe+'{content:"'+Ge+`"}/*!sc*/
`}}}return zt}(this)},$}(),bt=/(a)(d)/gi,Jt=function($){return String.fromCharCode($+($>25?39:97))};function $t($){var F,U="";for(F=Math.abs($);F>52;F=F/52|0)U=Jt(F%52)+U;return(Jt(F%52)+U).replace(bt,"$1-$2")}var ce=function($,F){for(var U=F.length;U;)$=33*$^F.charCodeAt(--U);return $},Oe=function($){return ce(5381,$)};function Vt($){for(var F=0;F<$.length;F+=1){var U=$[F];if(B(U)&&!st(U))return!1}return!0}var Mt=Oe("5.2.1"),Pt=function(){function $(F,U,X){this.rules=F,this.staticRulesId="",this.isStatic=(X===void 0||X.isStatic)&&Vt(F),this.componentId=U,this.baseHash=ce(Mt,U),this.baseStyle=X,Nt.registerId(U)}return $.prototype.generateAndInjectStyles=function(F,U,X){var mt=this.componentId,zt=[];if(this.baseStyle&&zt.push(this.baseStyle.generateAndInjectStyles(F,U,X)),this.isStatic&&!X.hash)if(this.staticRulesId&&U.hasNameForId(mt,this.staticRulesId))zt.push(this.staticRulesId);else{var xt=ct(this.rules,F,U,X).join(""),kt=$t(ce(this.baseHash,xt.length)>>>0);if(!U.hasNameForId(mt,kt)){var Ut=X(xt,"."+kt,void 0,mt);U.insertRules(mt,kt,Ut)}zt.push(kt),this.staticRulesId=kt}else{for(var Xt=this.rules.length,fe=ce(this.baseHash,X.hash),Ge="",en=0;en<Xt;en++){var Be=this.rules[en];if(typeof Be=="string")Ge+=Be;else if(Be){var ee=ct(Be,F,U,X),Zt=Array.isArray(ee)?ee.join(""):ee;fe=ce(fe,Zt+en),Ge+=Zt}}if(Ge){var he=$t(fe>>>0);if(!U.hasNameForId(mt,he)){var ge=X(Ge,"."+he,void 0,mt);U.insertRules(mt,he,ge)}zt.push(he)}}return zt.join(" ")},$}(),ve=/^\s*\/\/.*$/gm,$e=[":","[",".","#"];function ye($){var F,U,X,mt,zt=L,xt=zt.options,kt=xt===void 0?L:xt,Ut=zt.plugins,Xt=Ut===void 0?O:Ut,fe=new b.a(kt),Ge=[],en=function(Zt){function he(ge){if(ge)try{Zt(ge+"}")}catch{}}return function(ge,Kt,Ne,Qt,Xe,Wn,Cn,dn,Ke,ma){switch(ge){case 1:if(Ke===0&&Kt.charCodeAt(0)===64)return Zt(Kt+";"),"";break;case 2:if(dn===0)return Kt+"/*|*/";break;case 3:switch(dn){case 102:case 112:return Zt(Ne[0]+Kt),"";default:return Kt+(ma===0?"/*|*/":"")}case-2:Kt.split("/*|*/}").forEach(he)}}}(function(Zt){Ge.push(Zt)}),Be=function(Zt,he,ge){return he===0&&$e.includes(ge[U.length])||ge.match(mt)?Zt:"."+F};function ee(Zt,he,ge,Kt){Kt===void 0&&(Kt="&");var Ne=Zt.replace(ve,""),Qt=he&&ge?ge+" "+he+" { "+Ne+" }":Ne;return F=Kt,U=he,X=new RegExp("\\"+U+"\\b","g"),mt=new RegExp("(\\"+U+"\\b){2,}"),fe(ge||!he?"":he,Qt)}return fe.use([].concat(Xt,[function(Zt,he,ge){Zt===2&&ge.length&&ge[0].lastIndexOf(U)>0&&(ge[0]=ge[0].replace(X,Be))},en,function(Zt){if(Zt===-2){var he=Ge;return Ge=[],he}}])),ee.hash=Xt.length?Xt.reduce(function(Zt,he){return he.name||et(15),ce(Zt,he.name)},5381).toString():"",ee}var te=m.a.createContext(),De=(te.Consumer,m.a.createContext()),Yt=(De.Consumer,new Nt),Je=ye();function vn(){return Object(h.useContext)(te)||Yt}function ae(){return Object(h.useContext)(De)||Je}var Ht=function(){function $(F,U){var X=this;this.inject=function(mt,zt){zt===void 0&&(zt=Je);var xt=X.name+zt.hash;mt.hasNameForId(X.id,xt)||mt.insertRules(X.id,xt,zt(X.rules,xt,"@keyframes"))},this.toString=function(){return et(12,String(X.name))},this.name=F,this.id="sc-keyframes-"+F,this.rules=U}return $.prototype.getName=function(F){return F===void 0&&(F=Je),this.name+F.hash},$}(),j=/([A-Z])/,_=/([A-Z])/g,I=/^ms-/,ut=function($){return"-"+$.toLowerCase()};function ht($){return j.test($)?$.replace(_,ut).replace(I,"-ms-"):$}var rt=function($){return $==null||$===!1||$===""};function ct($,F,U,X){if(Array.isArray($)){for(var mt,zt=[],xt=0,kt=$.length;xt<kt;xt+=1)(mt=ct($[xt],F,U,X))!==""&&(Array.isArray(mt)?zt.push.apply(zt,mt):zt.push(mt));return zt}return rt($)?"":st($)?"."+$.styledComponentId:B($)?typeof(Ut=$)!="function"||Ut.prototype&&Ut.prototype.isReactComponent||!F?$:ct($(F),F,U,X):$ instanceof Ht?U?($.inject(U,X),$.getName(X)):$:D($)?function Xt(fe,Ge){var en,Be,ee=[];for(var Zt in fe)fe.hasOwnProperty(Zt)&&!rt(fe[Zt])&&(D(fe[Zt])?ee.push.apply(ee,Xt(fe[Zt],Zt)):B(fe[Zt])?ee.push(ht(Zt)+":",fe[Zt],";"):ee.push(ht(Zt)+": "+(en=Zt,((Be=fe[Zt])==null||typeof Be=="boolean"||Be===""?"":typeof Be!="number"||Be===0||en in x.a?String(Be).trim():Be+"px")+";")));return Ge?[Ge+" {"].concat(ee,["}"]):ee}($):$.toString();var Ut}function jt($){for(var F=arguments.length,U=new Array(F>1?F-1:0),X=1;X<F;X++)U[X-1]=arguments[X];return B($)||D($)?ct(A(O,[$].concat(U))):U.length===0&&$.length===1&&typeof $[0]=="string"?$:ct(A($,U))}var Ct=function($,F,U){return U===void 0&&(U=L),$.theme!==U.theme&&$.theme||F||U.theme},Rt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Et=/(^-|-$)/g;function de($){return $.replace(Rt,"-").replace(Et,"")}var oe=function($){return $t(Oe($)>>>0)};function we($){return typeof $=="string"&&!0}var He=function($){return typeof $=="function"||typeof $=="object"&&$!==null&&!Array.isArray($)},Ie=function($){return $!=="__proto__"&&$!=="constructor"&&$!=="prototype"};function be($,F,U){var X=$[U];He(F)&&He(X)?qe(X,F):$[U]=F}function qe($){for(var F=arguments.length,U=new Array(F>1?F-1:0),X=1;X<F;X++)U[X-1]=arguments[X];for(var mt=0,zt=U;mt<zt.length;mt++){var xt=zt[mt];if(He(xt))for(var kt in xt)Ie(kt)&&be($,xt[kt],kt)}return $}var Ye=m.a.createContext();Ye.Consumer;var Zn={};function tn($,F,U){var X=st($),mt=!we($),zt=F.attrs,xt=zt===void 0?O:zt,kt=F.componentId,Ut=kt===void 0?function(Kt,Ne){var Qt=typeof Kt!="string"?"sc":de(Kt);Zn[Qt]=(Zn[Qt]||0)+1;var Xe=Qt+"-"+oe("5.2.1"+Qt+Zn[Qt]);return Ne?Ne+"-"+Xe:Xe}(F.displayName,F.parentComponentId):kt,Xt=F.displayName,fe=Xt===void 0?function(Kt){return we(Kt)?"styled."+Kt:"Styled("+W(Kt)+")"}($):Xt,Ge=F.displayName&&F.componentId?de(F.displayName)+"-"+F.componentId:F.componentId||Ut,en=X&&$.attrs?Array.prototype.concat($.attrs,xt).filter(Boolean):xt,Be=F.shouldForwardProp;X&&$.shouldForwardProp&&(Be=F.shouldForwardProp?function(Kt,Ne){return $.shouldForwardProp(Kt,Ne)&&F.shouldForwardProp(Kt,Ne)}:$.shouldForwardProp);var ee,Zt=new Pt(U,Ge,X?$.componentStyle:void 0),he=Zt.isStatic&&xt.length===0,ge=function(Kt,Ne){return function(Qt,Xe,Wn,Cn){var dn=Qt.attrs,Ke=Qt.componentStyle,ma=Qt.defaultProps,Ea=Qt.foldedComponentIds,ci=Qt.shouldForwardProp,Sr=Qt.styledComponentId,fi=Qt.target,Pa=function(Dn,hi,ta){Dn===void 0&&(Dn=L);var Un=M({},hi,{theme:Dn}),Bn={};return ta.forEach(function($n){var An,Ca,se,Hn=$n;for(An in B(Hn)&&(Hn=Hn(Un)),Hn)Un[An]=Bn[An]=An==="className"?(Ca=Bn[An],se=Hn[An],Ca&&se?Ca+" "+se:Ca||se):Hn[An]}),[Un,Bn]}(Ct(Xe,Object(h.useContext)(Ye),ma)||L,Xe,dn),Le=Pa[0],ie=Pa[1],bn=function(Dn,hi,ta,Un){var Bn=vn(),$n=ae();return hi?Dn.generateAndInjectStyles(L,Bn,$n):Dn.generateAndInjectStyles(ta,Bn,$n)}(Ke,Cn,Le),Vn=Wn,Pn=ie.$as||Xe.$as||ie.as||Xe.as||fi,di=we(Pn),Jn=ie!==Xe?M({},Xe,{},ie):Xe,In={};for(var Me in Jn)Me[0]!=="$"&&Me!=="as"&&(Me==="forwardedAs"?In.as=Jn[Me]:(ci?ci(Me,S.a):!di||Object(S.a)(Me))&&(In[Me]=Jn[Me]));return Xe.style&&ie.style!==Xe.style&&(In.style=M({},Xe.style,{},ie.style)),In.className=Array.prototype.concat(Ea,Sr,bn!==Sr?bn:null,Xe.className,ie.className).filter(Boolean).join(" "),In.ref=Vn,Object(h.createElement)(Pn,In)}(ee,Kt,Ne,he)};return ge.displayName=fe,(ee=m.a.forwardRef(ge)).attrs=en,ee.componentStyle=Zt,ee.displayName=fe,ee.shouldForwardProp=Be,ee.foldedComponentIds=X?Array.prototype.concat($.foldedComponentIds,$.styledComponentId):O,ee.styledComponentId=Ge,ee.target=X?$.target:$,ee.withComponent=function(Kt){var Ne=F.componentId,Qt=function(Wn,Cn){if(Wn==null)return{};var dn,Ke,ma={},Ea=Object.keys(Wn);for(Ke=0;Ke<Ea.length;Ke++)dn=Ea[Ke],Cn.indexOf(dn)>=0||(ma[dn]=Wn[dn]);return ma}(F,["componentId"]),Xe=Ne&&Ne+"-"+(we(Kt)?Kt:de(W(Kt)));return tn(Kt,M({},Qt,{attrs:en,componentId:Xe}),U)},Object.defineProperty(ee,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Kt){this._foldedDefaultProps=X?qe({},$.defaultProps,Kt):Kt}}),ee.toString=function(){return"."+ee.styledComponentId},mt&&z()(ee,$,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),ee}var yn=function($){return function F(U,X,mt){if(mt===void 0&&(mt=L),!Object(p.isValidElementType)(X))return et(1,String(X));var zt=function(){return U(X,mt,jt.apply(void 0,arguments))};return zt.withConfig=function(xt){return F(U,X,M({},mt,{},xt))},zt.attrs=function(xt){return F(U,X,M({},mt,{attrs:Array.prototype.concat(mt.attrs,xt).filter(Boolean)}))},zt}(tn,$)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function($){yn[$]=yn($)}),u.a=yn}).call(this,f(9))},function(s,u,f){s.exports=f(10)},function(s,u,f){var d=f(2),p={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v={};function b(D){return d.isMemo(D)?m:v[D.$$typeof]||p}v[d.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},v[d.Memo]=m;var x=Object.defineProperty,S=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,z=Object.getOwnPropertyDescriptor,M=Object.getPrototypeOf,A=Object.prototype;s.exports=function D(O,L,B){if(typeof L!="string"){if(A){var W=M(L);W&&W!==A&&D(O,W,B)}var st=S(L);C&&(st=st.concat(C(L)));for(var dt=b(O),Q=b(L),yt=0;yt<st.length;++yt){var et=st[yt];if(!(h[et]||B&&B[et]||Q&&Q[et]||dt&&dt[et])){var ue=z(L,et);try{x(O,et,ue)}catch{}}}}return O}},function(s,u,f){var d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p=function(h){var m={};return function(v){return m[v]===void 0&&(m[v]=h(v)),m[v]}}(function(h){return d.test(h)||h.charCodeAt(0)===111&&h.charCodeAt(1)===110&&h.charCodeAt(2)<91});u.a=p},function(s,u,f){var d;(function(){function p(j,_,I){return j.call.apply(j.bind,arguments)}function h(j,_,I){if(!j)throw Error();if(2<arguments.length){var ut=Array.prototype.slice.call(arguments,2);return function(){var ht=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(ht,ut),j.apply(_,ht)}}return function(){return j.apply(_,arguments)}}function m(j,_,I){return(m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:h).apply(null,arguments)}var v=Date.now||function(){return+new Date};function b(j,_){this.a=j,this.o=_||j,this.c=this.o.document}var x=!!window.FontFace;function S(j,_,I,ut){if(_=j.c.createElement(_),I)for(var ht in I)I.hasOwnProperty(ht)&&(ht=="style"?_.style.cssText=I[ht]:_.setAttribute(ht,I[ht]));return ut&&_.appendChild(j.c.createTextNode(ut)),_}function C(j,_,I){(j=j.c.getElementsByTagName(_)[0])||(j=document.documentElement),j.insertBefore(I,j.lastChild)}function z(j){j.parentNode&&j.parentNode.removeChild(j)}function M(j,_,I){_=_||[],I=I||[];for(var ut=j.className.split(/\s+/),ht=0;ht<_.length;ht+=1){for(var rt=!1,ct=0;ct<ut.length;ct+=1)if(_[ht]===ut[ct]){rt=!0;break}rt||ut.push(_[ht])}for(_=[],ht=0;ht<ut.length;ht+=1){for(rt=!1,ct=0;ct<I.length;ct+=1)if(ut[ht]===I[ct]){rt=!0;break}rt||_.push(ut[ht])}j.className=_.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function A(j,_){for(var I=j.className.split(/\s+/),ut=0,ht=I.length;ut<ht;ut++)if(I[ut]==_)return!0;return!1}function D(j,_,I){function ut(){jt&&ht&&rt&&(jt(ct),jt=null)}_=S(j,"link",{rel:"stylesheet",href:_,media:"all"});var ht=!1,rt=!0,ct=null,jt=I||null;x?(_.onload=function(){ht=!0,ut()},_.onerror=function(){ht=!0,ct=Error("Stylesheet failed to load"),ut()}):setTimeout(function(){ht=!0,ut()},0),C(j,"head",_)}function O(j,_,I,ut){var ht=j.c.getElementsByTagName("head")[0];if(ht){var rt=S(j,"script",{src:_}),ct=!1;return rt.onload=rt.onreadystatechange=function(){ct||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(ct=!0,I&&I(null),rt.onload=rt.onreadystatechange=null,rt.parentNode.tagName=="HEAD"&&ht.removeChild(rt))},ht.appendChild(rt),setTimeout(function(){ct||(ct=!0,I&&I(Error("Script load timeout")))},ut||5e3),rt}return null}function L(){this.a=0,this.c=null}function B(j){return j.a++,function(){j.a--,st(j)}}function W(j,_){j.c=_,st(j)}function st(j){j.a==0&&j.c&&(j.c(),j.c=null)}function dt(j){this.a=j||"-"}function Q(j,_){this.c=j,this.f=4,this.a="n";var I=(_||"n4").match(/^([nio])([1-9])$/i);I&&(this.a=I[1],this.f=parseInt(I[2],10))}function yt(j){var _=[];j=j.split(/,\s*/);for(var I=0;I<j.length;I++){var ut=j[I].replace(/['"]/g,"");ut.indexOf(" ")!=-1||/^\d/.test(ut)?_.push("'"+ut+"'"):_.push(ut)}return _.join(",")}function et(j){return j.a+j.f}function ue(j){var _="normal";return j.a==="o"?_="oblique":j.a==="i"&&(_="italic"),_}function Se(j){var _=4,I="n",ut=null;return j&&((ut=j.match(/(normal|oblique|italic)/i))&&ut[1]&&(I=ut[1].substr(0,1).toLowerCase()),(ut=j.match(/([1-9]00|normal|bold)/i))&&ut[1]&&(/bold/i.test(ut[1])?_=7:/[1-9]00/.test(ut[1])&&(_=parseInt(ut[1].substr(0,1),10)))),I+_}function Z(j,_){this.c=j,this.f=j.o.document.documentElement,this.h=_,this.a=new dt("-"),this.j=_.events!==!1,this.g=_.classes!==!1}function Dt(j){if(j.g){var _=A(j.f,j.a.c("wf","active")),I=[],ut=[j.a.c("wf","loading")];_||I.push(j.a.c("wf","inactive")),M(j.f,I,ut)}G(j,"inactive")}function G(j,_,I){j.j&&j.h[_]&&(I?j.h[_](I.c,et(I)):j.h[_]())}function K(){this.c={}}function it(j,_){this.c=j,this.f=_,this.a=S(this.c,"span",{"aria-hidden":"true"},this.f)}function gt(j){C(j.c,"body",j.a)}function k(j){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+yt(j.c)+";font-style:"+ue(j)+";font-weight:"+j.f+"00;"}function nt(j,_,I,ut,ht,rt){this.g=j,this.j=_,this.a=ut,this.c=I,this.f=ht||3e3,this.h=rt||void 0}function vt(j,_,I,ut,ht,rt,ct){this.v=j,this.B=_,this.c=I,this.a=ut,this.s=ct||"BESbswy",this.f={},this.w=ht||3e3,this.u=rt||null,this.m=this.j=this.h=this.g=null,this.g=new it(this.c,this.s),this.h=new it(this.c,this.s),this.j=new it(this.c,this.s),this.m=new it(this.c,this.s),j=k(j=new Q(this.a.c+",serif",et(this.a))),this.g.a.style.cssText=j,j=k(j=new Q(this.a.c+",sans-serif",et(this.a))),this.h.a.style.cssText=j,j=k(j=new Q("serif",et(this.a))),this.j.a.style.cssText=j,j=k(j=new Q("sans-serif",et(this.a))),this.m.a.style.cssText=j,gt(this.g),gt(this.h),gt(this.j),gt(this.m)}dt.prototype.c=function(j){for(var _=[],I=0;I<arguments.length;I++)_.push(arguments[I].replace(/[\W_]+/g,"").toLowerCase());return _.join(this.a)},nt.prototype.start=function(){var j=this.c.o.document,_=this,I=v(),ut=new Promise(function(ct,jt){(function Ct(){v()-I>=_.f?jt():j.fonts.load(function(Rt){return ue(Rt)+" "+Rt.f+"00 300px "+yt(Rt.c)}(_.a),_.h).then(function(Rt){1<=Rt.length?ct():setTimeout(Ct,25)},function(){jt()})})()}),ht=null,rt=new Promise(function(ct,jt){ht=setTimeout(jt,_.f)});Promise.race([rt,ut]).then(function(){ht&&(clearTimeout(ht),ht=null),_.g(_.a)},function(){_.j(_.a)})};var wt={D:"serif",C:"sans-serif"},pt=null;function ft(){if(pt===null){var j=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);pt=!!j&&(536>parseInt(j[1],10)||parseInt(j[1],10)===536&&11>=parseInt(j[2],10))}return pt}function ot(j,_,I){for(var ut in wt)if(wt.hasOwnProperty(ut)&&_===j.f[wt[ut]]&&I===j.f[wt[ut]])return!0;return!1}function Tt(j){var _,I=j.g.a.offsetWidth,ut=j.h.a.offsetWidth;(_=I===j.f.serif&&ut===j.f["sans-serif"])||(_=ft()&&ot(j,I,ut)),_?v()-j.A>=j.w?ft()&&ot(j,I,ut)&&(j.u===null||j.u.hasOwnProperty(j.a.c))?St(j,j.v):St(j,j.B):function(ht){setTimeout(m(function(){Tt(this)},ht),50)}(j):St(j,j.v)}function St(j,_){setTimeout(m(function(){z(this.g.a),z(this.h.a),z(this.j.a),z(this.m.a),_(this.a)},j),0)}function H(j,_,I){this.c=j,this.a=_,this.f=0,this.m=this.j=!1,this.s=I}vt.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=v(),Tt(this)};var Nt=null;function bt(j){--j.f==0&&j.j&&(j.m?((j=j.a).g&&M(j.f,[j.a.c("wf","active")],[j.a.c("wf","loading"),j.a.c("wf","inactive")]),G(j,"active")):Dt(j.a))}function Jt(j){this.j=j,this.a=new K,this.h=0,this.f=this.g=!0}function $t(j,_,I,ut,ht){var rt=--j.h==0;(j.f||j.g)&&setTimeout(function(){var ct=ht||null,jt=ut||{};if(I.length===0&&rt)Dt(_.a);else{_.f+=I.length,rt&&(_.j=rt);var Ct,Rt=[];for(Ct=0;Ct<I.length;Ct++){var Et=I[Ct],de=jt[Et.c],oe=_.a,we=Et;if(oe.g&&M(oe.f,[oe.a.c("wf",we.c,et(we).toString(),"loading")]),G(oe,"fontloading",we),oe=null,Nt===null)if(window.FontFace){we=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var He=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);Nt=we?42<parseInt(we[1],10):!He}else Nt=!1;oe=Nt?new nt(m(_.g,_),m(_.h,_),_.c,Et,_.s,de):new vt(m(_.g,_),m(_.h,_),_.c,Et,_.s,ct,de),Rt.push(oe)}for(Ct=0;Ct<Rt.length;Ct++)Rt[Ct].start()}},0)}function ce(j,_){this.c=j,this.a=_}function Oe(j,_){this.c=j,this.a=_}function Vt(j,_){this.c=j||Mt,this.a=[],this.f=[],this.g=_||""}H.prototype.g=function(j){var _=this.a;_.g&&M(_.f,[_.a.c("wf",j.c,et(j).toString(),"active")],[_.a.c("wf",j.c,et(j).toString(),"loading"),_.a.c("wf",j.c,et(j).toString(),"inactive")]),G(_,"fontactive",j),this.m=!0,bt(this)},H.prototype.h=function(j){var _=this.a;if(_.g){var I=A(_.f,_.a.c("wf",j.c,et(j).toString(),"active")),ut=[],ht=[_.a.c("wf",j.c,et(j).toString(),"loading")];I||ut.push(_.a.c("wf",j.c,et(j).toString(),"inactive")),M(_.f,ut,ht)}G(_,"fontinactive",j),bt(this)},Jt.prototype.load=function(j){this.c=new b(this.j,j.context||this.j),this.g=j.events!==!1,this.f=j.classes!==!1,function(_,I,ut){var ht=[],rt=ut.timeout;(function(jt){jt.g&&M(jt.f,[jt.a.c("wf","loading")]),G(jt,"loading")})(I),ht=function(jt,Ct,Rt){var Et,de=[];for(Et in Ct)if(Ct.hasOwnProperty(Et)){var oe=jt.c[Et];oe&&de.push(oe(Ct[Et],Rt))}return de}(_.a,ut,_.c);var ct=new H(_.c,I,rt);for(_.h=ht.length,I=0,ut=ht.length;I<ut;I++)ht[I].load(function(jt,Ct,Rt){$t(_,ct,jt,Ct,Rt)})}(this,new Z(this.c,j),j)},ce.prototype.load=function(j){var _=this,I=_.a.projectId,ut=_.a.version;if(I){var ht=_.c.o;O(this.c,(_.a.api||"https://fast.fonts.net/jsapi")+"/"+I+".js"+(ut?"?v="+ut:""),function(rt){rt?j([]):(ht["__MonotypeConfiguration__"+I]=function(){return _.a},function ct(){if(ht["__mti_fntLst"+I]){var jt,Ct=ht["__mti_fntLst"+I](),Rt=[];if(Ct)for(var Et=0;Et<Ct.length;Et++){var de=Ct[Et].fontfamily;Ct[Et].fontStyle!=null&&Ct[Et].fontWeight!=null?(jt=Ct[Et].fontStyle+Ct[Et].fontWeight,Rt.push(new Q(de,jt))):Rt.push(new Q(de))}j(Rt)}else setTimeout(function(){ct()},50)}())}).id="__MonotypeAPIScript__"+I}else j([])},Oe.prototype.load=function(j){var _,I,ut=this.a.urls||[],ht=this.a.families||[],rt=this.a.testStrings||{},ct=new L;for(_=0,I=ut.length;_<I;_++)D(this.c,ut[_],B(ct));var jt=[];for(_=0,I=ht.length;_<I;_++)if((ut=ht[_].split(":"))[1])for(var Ct=ut[1].split(","),Rt=0;Rt<Ct.length;Rt+=1)jt.push(new Q(ut[0],Ct[Rt]));else jt.push(new Q(ut[0]));W(ct,function(){j(jt,rt)})};var Mt="https://fonts.googleapis.com/css";function Pt(j){this.f=j,this.a=[],this.c={}}var ve={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},$e={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ye={i:"i",italic:"i",n:"n",normal:"n"},te=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function De(j,_){this.c=j,this.a=_}var Yt={Arimo:!0,Cousine:!0,Tinos:!0};function Je(j,_){this.c=j,this.a=_}function vn(j,_){this.c=j,this.f=_,this.a=[]}De.prototype.load=function(j){var _=new L,I=this.c,ut=new Vt(this.a.api,this.a.text),ht=this.a.families;(function(ct,jt){for(var Ct=jt.length,Rt=0;Rt<Ct;Rt++){var Et=jt[Rt].split(":");Et.length==3&&ct.f.push(Et.pop());var de="";Et.length==2&&Et[1]!=""&&(de=":"),ct.a.push(Et.join(de))}})(ut,ht);var rt=new Pt(ht);(function(ct){for(var jt=ct.f.length,Ct=0;Ct<jt;Ct++){var Rt=ct.f[Ct].split(":"),Et=Rt[0].replace(/\+/g," "),de=["n4"];if(2<=Rt.length){var oe;if(oe=[],we=Rt[1])for(var we,He=(we=we.split(",")).length,Ie=0;Ie<He;Ie++){var be;if((be=we[Ie]).match(/^[\w-]+$/))if((Ye=te.exec(be.toLowerCase()))==null)be="";else{if(be=(be=Ye[2])==null||be==""?"n":ye[be],(Ye=Ye[1])==null||Ye=="")Ye="4";else var qe=$e[Ye],Ye=qe||(isNaN(Ye)?"4":Ye.substr(0,1));be=[be,Ye].join("")}else be="";be&&oe.push(be)}0<oe.length&&(de=oe),Rt.length==3&&(oe=[],0<(Rt=(Rt=Rt[2])?Rt.split(","):oe).length&&(Rt=ve[Rt[0]])&&(ct.c[Et]=Rt))}for(ct.c[Et]||(Rt=ve[Et])&&(ct.c[Et]=Rt),Rt=0;Rt<de.length;Rt+=1)ct.a.push(new Q(Et,de[Rt]))}})(rt),D(I,function(ct){if(ct.a.length==0)throw Error("No fonts to load!");if(ct.c.indexOf("kit=")!=-1)return ct.c;for(var jt=ct.a.length,Ct=[],Rt=0;Rt<jt;Rt++)Ct.push(ct.a[Rt].replace(/ /g,"+"));return jt=ct.c+"?family="+Ct.join("%7C"),0<ct.f.length&&(jt+="&subset="+ct.f.join(",")),0<ct.g.length&&(jt+="&text="+encodeURIComponent(ct.g)),jt}(ut),B(_)),W(_,function(){j(rt.a,rt.c,Yt)})},Je.prototype.load=function(j){var _=this.a.id,I=this.c.o;_?O(this.c,(this.a.api||"https://use.typekit.net")+"/"+_+".js",function(ut){if(ut)j([]);else if(I.Typekit&&I.Typekit.config&&I.Typekit.config.fn){ut=I.Typekit.config.fn;for(var ht=[],rt=0;rt<ut.length;rt+=2)for(var ct=ut[rt],jt=ut[rt+1],Ct=0;Ct<jt.length;Ct++)ht.push(new Q(ct,jt[Ct]));try{I.Typekit.load({events:!1,classes:!1,async:!0})}catch{}j(ht)}},2e3):j([])},vn.prototype.load=function(j){var _=this.f.id,I=this.c.o,ut=this;_?(I.__webfontfontdeckmodule__||(I.__webfontfontdeckmodule__={}),I.__webfontfontdeckmodule__[_]=function(ht,rt){for(var ct=0,jt=rt.fonts.length;ct<jt;++ct){var Ct=rt.fonts[ct];ut.a.push(new Q(Ct.name,Se("font-weight:"+Ct.weight+";font-style:"+Ct.style)))}j(ut.a)},O(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(ht){return ht.o.location.hostname||ht.a.location.hostname}(this.c)+"/"+_+".js",function(ht){ht&&j([])})):j([])};var ae=new Jt(window);ae.a.c.custom=function(j,_){return new Oe(_,j)},ae.a.c.fontdeck=function(j,_){return new vn(_,j)},ae.a.c.monotype=function(j,_){return new ce(_,j)},ae.a.c.typekit=function(j,_){return new Je(_,j)},ae.a.c.google=function(j,_){return new De(_,j)};var Ht={load:m(ae.load,ae)};(d=(function(){return Ht}).call(u,f,u,s))===void 0||(s.exports=d)})()},function(s,u){s.exports=function(f,d,p,h){var m=p?p.call(h,f,d):void 0;if(m!==void 0)return!!m;if(f===d)return!0;if(typeof f!="object"||!f||typeof d!="object"||!d)return!1;var v=Object.keys(f),b=Object.keys(d);if(v.length!==b.length)return!1;for(var x=Object.prototype.hasOwnProperty.bind(d),S=0;S<v.length;S++){var C=v[S];if(!x(C))return!1;var z=f[C],M=d[C];if((m=p?p.call(h,z,M,C):void 0)===!1||m===void 0&&z!==M)return!1}return!0}},function(s,u,f){u.a=function(d){function p(ft,ot,Tt){var St=ot.trim().split(L);ot=St;var H=St.length,Nt=ft.length;switch(Nt){case 0:case 1:var bt=0;for(ft=Nt===0?"":ft[0]+" ";bt<H;++bt)ot[bt]=h(ft,ot[bt],Tt).trim();break;default:var Jt=bt=0;for(ot=[];bt<H;++bt)for(var $t=0;$t<Nt;++$t)ot[Jt++]=h(ft[$t]+" ",St[bt],Tt).trim()}return ot}function h(ft,ot,Tt){var St=ot.charCodeAt(0);switch(33>St&&(St=(ot=ot.trim()).charCodeAt(0)),St){case 38:return ot.replace(B,"$1"+ft.trim());case 58:return ft.trim()+ot.replace(B,"$1"+ft.trim());default:if(0<1*Tt&&0<ot.indexOf("\f"))return ot.replace(B,(ft.charCodeAt(0)===58?"":"$1")+ft.trim())}return ft+ot}function m(ft,ot,Tt,St){var H=ft+";",Nt=2*ot+3*Tt+4*St;if(Nt===944){ft=H.indexOf(":",9)+1;var bt=H.substring(ft,H.length-1).trim();return bt=H.substring(0,ft).trim()+bt+";",gt===1||gt===2&&v(bt,1)?"-webkit-"+bt+bt:bt}if(gt===0||gt===2&&!v(H,1))return H;switch(Nt){case 1015:return H.charCodeAt(10)===97?"-webkit-"+H+H:H;case 951:return H.charCodeAt(3)===116?"-webkit-"+H+H:H;case 963:return H.charCodeAt(5)===110?"-webkit-"+H+H:H;case 1009:if(H.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+H+H;case 978:return"-webkit-"+H+"-moz-"+H+H;case 1019:case 983:return"-webkit-"+H+"-moz-"+H+"-ms-"+H+H;case 883:if(H.charCodeAt(8)===45)return"-webkit-"+H+H;if(0<H.indexOf("image-set(",11))return H.replace(Dt,"$1-webkit-$2")+H;break;case 932:if(H.charCodeAt(4)===45)switch(H.charCodeAt(5)){case 103:return"-webkit-box-"+H.replace("-grow","")+"-webkit-"+H+"-ms-"+H.replace("grow","positive")+H;case 115:return"-webkit-"+H+"-ms-"+H.replace("shrink","negative")+H;case 98:return"-webkit-"+H+"-ms-"+H.replace("basis","preferred-size")+H}return"-webkit-"+H+"-ms-"+H+H;case 964:return"-webkit-"+H+"-ms-flex-"+H+H;case 1023:if(H.charCodeAt(8)!==99)break;return"-webkit-box-pack"+(bt=H.substring(H.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+H+"-ms-flex-pack"+bt+H;case 1005:return D.test(H)?H.replace(A,":-webkit-")+H.replace(A,":-moz-")+H:H;case 1e3:switch(ot=(bt=H.substring(13).trim()).indexOf("-")+1,bt.charCodeAt(0)+bt.charCodeAt(ot)){case 226:bt=H.replace(Q,"tb");break;case 232:bt=H.replace(Q,"tb-rl");break;case 220:bt=H.replace(Q,"lr");break;default:return H}return"-webkit-"+H+"-ms-"+bt+H;case 1017:if(H.indexOf("sticky",9)===-1)break;case 975:switch(ot=(H=ft).length-10,Nt=(bt=(H.charCodeAt(ot)===33?H.substring(0,ot):H).substring(ft.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|bt.charCodeAt(7))){case 203:if(111>bt.charCodeAt(8))break;case 115:H=H.replace(bt,"-webkit-"+bt)+";"+H;break;case 207:case 102:H=H.replace(bt,"-webkit-"+(102<Nt?"inline-":"")+"box")+";"+H.replace(bt,"-webkit-"+bt)+";"+H.replace(bt,"-ms-"+bt+"box")+";"+H}return H+";";case 938:if(H.charCodeAt(5)===45)switch(H.charCodeAt(6)){case 105:return bt=H.replace("-items",""),"-webkit-"+H+"-webkit-box-"+bt+"-ms-flex-"+bt+H;case 115:return"-webkit-"+H+"-ms-flex-item-"+H.replace(ue,"")+H;default:return"-webkit-"+H+"-ms-flex-line-pack"+H.replace("align-content","").replace(ue,"")+H}break;case 973:case 989:if(H.charCodeAt(3)!==45||H.charCodeAt(4)===122)break;case 931:case 953:if(Z.test(ft)===!0)return(bt=ft.substring(ft.indexOf(":")+1)).charCodeAt(0)===115?m(ft.replace("stretch","fill-available"),ot,Tt,St).replace(":fill-available",":stretch"):H.replace(bt,"-webkit-"+bt)+H.replace(bt,"-moz-"+bt.replace("fill-",""))+H;break;case 962:if(H="-webkit-"+H+(H.charCodeAt(5)===102?"-ms-"+H:"")+H,Tt+St===211&&H.charCodeAt(13)===105&&0<H.indexOf("transform",10))return H.substring(0,H.indexOf(";",27)+1).replace(O,"$1-webkit-$2")+H}return H}function v(ft,ot){var Tt=ft.indexOf(ot===1?":":"{"),St=ft.substring(0,ot!==3?Tt:10);return Tt=ft.substring(Tt+1,ft.length-1),wt(ot!==2?St:St.replace(Se,"$1"),Tt,ot)}function b(ft,ot){var Tt=m(ot,ot.charCodeAt(0),ot.charCodeAt(1),ot.charCodeAt(2));return Tt!==ot+";"?Tt.replace(et," or ($1)").substring(4):"("+ot+")"}function x(ft,ot,Tt,St,H,Nt,bt,Jt,$t,ce){for(var Oe,Vt=0,Mt=ot;Vt<vt;++Vt)switch(Oe=nt[Vt].call(C,ft,Mt,Tt,St,H,Nt,bt,Jt,$t,ce)){case void 0:case!1:case!0:case null:break;default:Mt=Oe}if(Mt!==ot)return Mt}function S(ft){return(ft=ft.prefix)!==void 0&&(wt=null,ft?typeof ft!="function"?gt=1:(gt=2,wt=ft):gt=0),S}function C(ft,ot){var Tt=ft;if(33>Tt.charCodeAt(0)&&(Tt=Tt.trim()),Tt=[Tt],0<vt){var St=x(-1,ot,Tt,Tt,K,G,0,0,0,0);St!==void 0&&typeof St=="string"&&(ot=St)}var H=function Nt(bt,Jt,$t,ce,Oe){for(var Vt,Mt,Pt,ve,$e,ye=0,te=0,De=0,Yt=0,Je=0,vn=0,ae=Pt=Vt=0,Ht=0,j=0,_=0,I=0,ut=$t.length,ht=ut-1,rt="",ct="",jt="",Ct="";Ht<ut;){if(Mt=$t.charCodeAt(Ht),Ht===ht&&te+Yt+De+ye!==0&&(te!==0&&(Mt=te===47?10:47),Yt=De=ye=0,ut++,ht++),te+Yt+De+ye===0){if(Ht===ht&&(0<j&&(rt=rt.replace(M,"")),0<rt.trim().length)){switch(Mt){case 32:case 9:case 59:case 13:case 10:break;default:rt+=$t.charAt(Ht)}Mt=59}switch(Mt){case 123:for(Vt=(rt=rt.trim()).charCodeAt(0),Pt=1,I=++Ht;Ht<ut;){switch(Mt=$t.charCodeAt(Ht)){case 123:Pt++;break;case 125:Pt--;break;case 47:switch(Mt=$t.charCodeAt(Ht+1)){case 42:case 47:t:{for(ae=Ht+1;ae<ht;++ae)switch($t.charCodeAt(ae)){case 47:if(Mt===42&&$t.charCodeAt(ae-1)===42&&Ht+2!==ae){Ht=ae+1;break t}break;case 10:if(Mt===47){Ht=ae+1;break t}}Ht=ae}}break;case 91:Mt++;case 40:Mt++;case 34:case 39:for(;Ht++<ht&&$t.charCodeAt(Ht)!==Mt;);}if(Pt===0)break;Ht++}switch(Pt=$t.substring(I,Ht),Vt===0&&(Vt=(rt=rt.replace(z,"").trim()).charCodeAt(0)),Vt){case 64:switch(0<j&&(rt=rt.replace(M,"")),Mt=rt.charCodeAt(1)){case 100:case 109:case 115:case 45:j=Jt;break;default:j=k}if(I=(Pt=Nt(Jt,j,Pt,Mt,Oe+1)).length,0<vt&&($e=x(3,Pt,j=p(k,rt,_),Jt,K,G,I,Mt,Oe,ce),rt=j.join(""),$e!==void 0&&(I=(Pt=$e.trim()).length)===0&&(Mt=0,Pt="")),0<I)switch(Mt){case 115:rt=rt.replace(yt,b);case 100:case 109:case 45:Pt=rt+"{"+Pt+"}";break;case 107:Pt=(rt=rt.replace(W,"$1 $2"))+"{"+Pt+"}",Pt=gt===1||gt===2&&v("@"+Pt,3)?"@-webkit-"+Pt+"@"+Pt:"@"+Pt;break;default:Pt=rt+Pt,ce===112&&(ct+=Pt,Pt="")}else Pt="";break;default:Pt=Nt(Jt,p(Jt,rt,_),Pt,ce,Oe+1)}jt+=Pt,Pt=_=j=ae=Vt=0,rt="",Mt=$t.charCodeAt(++Ht);break;case 125:case 59:if(1<(I=(rt=(0<j?rt.replace(M,""):rt).trim()).length))switch(ae===0&&(Vt=rt.charCodeAt(0),Vt===45||96<Vt&&123>Vt)&&(I=(rt=rt.replace(" ",":")).length),0<vt&&($e=x(1,rt,Jt,bt,K,G,ct.length,ce,Oe,ce))!==void 0&&(I=(rt=$e.trim()).length)===0&&(rt="\0\0"),Vt=rt.charCodeAt(0),Mt=rt.charCodeAt(1),Vt){case 0:break;case 64:if(Mt===105||Mt===99){Ct+=rt+$t.charAt(Ht);break}default:rt.charCodeAt(I-1)!==58&&(ct+=m(rt,Vt,Mt,rt.charCodeAt(2)))}_=j=ae=Vt=0,rt="",Mt=$t.charCodeAt(++Ht)}}switch(Mt){case 13:case 10:te===47?te=0:1+Vt===0&&ce!==107&&0<rt.length&&(j=1,rt+="\0"),0<vt*pt&&x(0,rt,Jt,bt,K,G,ct.length,ce,Oe,ce),G=1,K++;break;case 59:case 125:if(te+Yt+De+ye===0){G++;break}default:switch(G++,ve=$t.charAt(Ht),Mt){case 9:case 32:if(Yt+ye+te===0)switch(Je){case 44:case 58:case 9:case 32:ve="";break;default:Mt!==32&&(ve=" ")}break;case 0:ve="\\0";break;case 12:ve="\\f";break;case 11:ve="\\v";break;case 38:Yt+te+ye===0&&(j=_=1,ve="\f"+ve);break;case 108:if(Yt+te+ye+it===0&&0<ae)switch(Ht-ae){case 2:Je===112&&$t.charCodeAt(Ht-3)===58&&(it=Je);case 8:vn===111&&(it=vn)}break;case 58:Yt+te+ye===0&&(ae=Ht);break;case 44:te+De+Yt+ye===0&&(j=1,ve+="\r");break;case 34:case 39:te===0&&(Yt=Yt===Mt?0:Yt===0?Mt:Yt);break;case 91:Yt+te+De===0&&ye++;break;case 93:Yt+te+De===0&&ye--;break;case 41:Yt+te+ye===0&&De--;break;case 40:if(Yt+te+ye===0){if(Vt===0)switch(2*Je+3*vn){case 533:break;default:Vt=1}De++}break;case 64:te+De+Yt+ye+ae+Pt===0&&(Pt=1);break;case 42:case 47:if(!(0<Yt+ye+De))switch(te){case 0:switch(2*Mt+3*$t.charCodeAt(Ht+1)){case 235:te=47;break;case 220:I=Ht,te=42}break;case 42:Mt===47&&Je===42&&I+2!==Ht&&($t.charCodeAt(I+2)===33&&(ct+=$t.substring(I,Ht+1)),ve="",te=0)}}te===0&&(rt+=ve)}vn=Je,Je=Mt,Ht++}if(0<(I=ct.length)){if(j=Jt,0<vt&&($e=x(2,ct,j,bt,K,G,I,ce,Oe,ce))!==void 0&&(ct=$e).length===0)return Ct+ct+jt;if(ct=j.join(",")+"{"+ct+"}",gt*it!=0){switch(gt!==2||v(ct,2)||(it=0),it){case 111:ct=ct.replace(dt,":-moz-$1")+ct;break;case 112:ct=ct.replace(st,"::-webkit-input-$1")+ct.replace(st,"::-moz-$1")+ct.replace(st,":-ms-input-$1")+ct}it=0}}return Ct+ct+jt}(k,Tt,ot,0,0);return 0<vt&&(St=x(-2,H,Tt,Tt,K,G,H.length,0,0,0))!==void 0&&(H=St),it=0,G=K=1,H}var z=/^\0+/g,M=/[\0\r\f]/g,A=/: */g,D=/zoo|gra/,O=/([,: ])(transform)/g,L=/,\r+?/g,B=/([\t\r\n ])*\f?&/g,W=/@(k\w+)\s*(\S*)\s*/,st=/::(place)/g,dt=/:(read-only)/g,Q=/[svh]\w+-[tblr]{2}/,yt=/\(\s*(.*)\s*\)/g,et=/([\s\S]*?);/g,ue=/-self|flex-/g,Se=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Z=/stretch|:\s*\w+\-(?:conte|avail)/,Dt=/([^-])(image-set\()/,G=1,K=1,it=0,gt=1,k=[],nt=[],vt=0,wt=null,pt=0;return C.use=function ft(ot){switch(ot){case void 0:case null:vt=nt.length=0;break;default:if(typeof ot=="function")nt[vt++]=ot;else if(typeof ot=="object")for(var Tt=0,St=ot.length;Tt<St;++Tt)ft(ot[Tt]);else pt=0|!!ot}return ft},C.set=S,d!==void 0&&S(d),C}},function(s,u,f){u.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},function(s,u){var f,d,p=s.exports={};function h(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}function v(O){if(f===setTimeout)return setTimeout(O,0);if((f===h||!f)&&setTimeout)return f=setTimeout,setTimeout(O,0);try{return f(O,0)}catch{try{return f.call(null,O,0)}catch{return f.call(this,O,0)}}}(function(){try{f=typeof setTimeout=="function"?setTimeout:h}catch{f=h}try{d=typeof clearTimeout=="function"?clearTimeout:m}catch{d=m}})();var b,x=[],S=!1,C=-1;function z(){S&&b&&(S=!1,b.length?x=b.concat(x):C=-1,x.length&&M())}function M(){if(!S){var O=v(z);S=!0;for(var L=x.length;L;){for(b=x,x=[];++C<L;)b&&b[C].run();C=-1,L=x.length}b=null,S=!1,function(B){if(d===clearTimeout)return clearTimeout(B);if((d===m||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(B);try{d(B)}catch{try{return d.call(null,B)}catch{return d.call(this,B)}}}(O)}}function A(O,L){this.fun=O,this.array=L}function D(){}p.nextTick=function(O){var L=new Array(arguments.length-1);if(arguments.length>1)for(var B=1;B<arguments.length;B++)L[B-1]=arguments[B];x.push(new A(O,L)),x.length!==1||S||v(M)},A.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=D,p.addListener=D,p.once=D,p.off=D,p.removeListener=D,p.removeAllListeners=D,p.emit=D,p.prependListener=D,p.prependOnceListener=D,p.listeners=function(O){return[]},p.binding=function(O){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(O){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(s,u,f){/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var d=typeof Symbol=="function"&&Symbol.for,p=d?Symbol.for("react.element"):60103,h=d?Symbol.for("react.portal"):60106,m=d?Symbol.for("react.fragment"):60107,v=d?Symbol.for("react.strict_mode"):60108,b=d?Symbol.for("react.profiler"):60114,x=d?Symbol.for("react.provider"):60109,S=d?Symbol.for("react.context"):60110,C=d?Symbol.for("react.async_mode"):60111,z=d?Symbol.for("react.concurrent_mode"):60111,M=d?Symbol.for("react.forward_ref"):60112,A=d?Symbol.for("react.suspense"):60113,D=d?Symbol.for("react.suspense_list"):60120,O=d?Symbol.for("react.memo"):60115,L=d?Symbol.for("react.lazy"):60116,B=d?Symbol.for("react.block"):60121,W=d?Symbol.for("react.fundamental"):60117,st=d?Symbol.for("react.responder"):60118,dt=d?Symbol.for("react.scope"):60119;function Q(et){if(typeof et=="object"&&et!==null){var ue=et.$$typeof;switch(ue){case p:switch(et=et.type){case C:case z:case m:case b:case v:case A:return et;default:switch(et=et&&et.$$typeof){case S:case M:case L:case O:case x:return et;default:return ue}}case h:return ue}}}function yt(et){return Q(et)===z}u.AsyncMode=C,u.ConcurrentMode=z,u.ContextConsumer=S,u.ContextProvider=x,u.Element=p,u.ForwardRef=M,u.Fragment=m,u.Lazy=L,u.Memo=O,u.Portal=h,u.Profiler=b,u.StrictMode=v,u.Suspense=A,u.isAsyncMode=function(et){return yt(et)||Q(et)===C},u.isConcurrentMode=yt,u.isContextConsumer=function(et){return Q(et)===S},u.isContextProvider=function(et){return Q(et)===x},u.isElement=function(et){return typeof et=="object"&&et!==null&&et.$$typeof===p},u.isForwardRef=function(et){return Q(et)===M},u.isFragment=function(et){return Q(et)===m},u.isLazy=function(et){return Q(et)===L},u.isMemo=function(et){return Q(et)===O},u.isPortal=function(et){return Q(et)===h},u.isProfiler=function(et){return Q(et)===b},u.isStrictMode=function(et){return Q(et)===v},u.isSuspense=function(et){return Q(et)===A},u.isValidElementType=function(et){return typeof et=="string"||typeof et=="function"||et===m||et===z||et===b||et===v||et===A||et===D||typeof et=="object"&&et!==null&&(et.$$typeof===L||et.$$typeof===O||et.$$typeof===x||et.$$typeof===S||et.$$typeof===M||et.$$typeof===W||et.$$typeof===st||et.$$typeof===dt||et.$$typeof===B)},u.typeOf=Q},function(s,u,f){f.r(u),f.d(u,"Wheel",function(){return Se});var d=f(0),p=f.n(d),h=f(5),m=f.n(h);const v=["darkgrey","lightgrey"],b=["black"],x=["arial","verdana","tahoma","trebuchet ms","times","garamond","brush script mt","courier new","georgia","helvetica","times new roman","serif","sans-serif","monospace","cursive","fantasy"];var S=function(Z,Dt,G){G===void 0&&(G=!0);var K=360/Dt,it=43+K/2,gt=(2*Math.random()-1)*K*.35,k=G?K*(Dt-Z)-it+gt:K*(Dt-Z)-it;return Dt-Z>Dt/2?-360+k:k},C=function(Z,Dt,G){return Math.min(Math.max(Z,+G),Dt)},z=function(Z){return!!Z&&!x.includes(Z.toLowerCase())},M=function(Z){return Z.slice(-1)[0].slice(-1)[0]+1},A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";const D=new Image;D.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAENCAMAAADwnMpiAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACZUExURUdwTP+OROJKK+JKK/6PReJKK/+QQ+JKK+JKK+JKK+JKK/2MQ/+LRv2LQeNLK+JKK/BrNuRNLPyJQeNLK/d+PfFvN/iFQONLK/BtOPV3OvmCPfFxOPR4PeNMLO5oNexiNPmBPudVL+hXL+pcMepfMuZSLvV7PORPLPFyPedULuhYMOpfM+5nNetdMfupXexhM+2dRuNOLeJKK+Smm3cAAAAydFJOUwAY9Okb+hT+8f3uIRYm5fdz1yvdQWQx4mtRNV1L0HqNOsOwo5W6RcRWz6qGgLYFnA6eKwdCNwAACLhJREFUGBntwNeSg8C1BdANdHMaGLJyzprRaNL+/4+7df1iV7lsgyI0Wnh5eXl5eXl5eXl5+S/8t3jQG/ez5W779bX+f1+b7fI8ms4mseOjS5yo937erk0aCP+FCP9BJHU/NstpL3JgPSeeZafc1SIkhf+FiDYf29EheoOlfLXq/+RGC4WVSertF+PoDbZRg9HP0ATC+kRc7zQaOLCGH83OH6EWXk50eDxPFCzgR++7oRHh1XS4ziYO2k31PksjwpsQSb1NP/bRVm9FtjaaNyWmXPYU2kj1dqUrvLkg8DbjCG0TvW88zTsJzHoU+2gPP+qvTcA7CkyeFW9oibg/94R3JibPCh8tEE2PYcAHkDDvx2g6NduHAR8kMMd3hSZ7m2wTzQcKvFPPQWPFWenywdLhcuCjkdRsbQI+nsn7EZrHL5aJ5lME4WbloGHUbG74LJKWWYxGic9JyicKwn3PQWP4q00ofK60zGI0hHrPXT5dEG5WPpogWgw1m8DNpwrPV+y8gM2gk2WMJ/NXeyNsCgk3Ex/P5PTmLpvEzHsOnkeNS5fN4uZjhWdR0zJl06TlVOE51Gio2Tx62Fd4BtUfajaRTrIIj6f6Q81mCpJFhEdT/aFmU4n3GeGx1LTUbDBvGeGRnHGp2Wjep8Lj+L08ZcMlmcLDTOYumy4YTh08SLE3bD5dHnw8RLQzbAN3PsEjqMwTtoK7KXB//ngYsCXMMsLdTfKUbSHeSOHO4o3L9gjKg4+7UouQbZLOB7gnf5YIW8VsI9xRMU/ZMuHIwd2onWHbBGUPdzNL2D7pusCdxEfNFjKfCnfxlhm2kSRjH/ewKgO2UjovcAdqm7KlzFLh9sYeWyuZ4ebivWZr6WOMG/Onhi1msjfcVpEHbLGgXOGmnEXIVku3CrdUlMJWE+8dN+QsDFtOH2PcTlEK2870fdyKnxm2XpAXuJU4F7afOTu4kZGhBaQc4DaitdAG7qeDmxgbWkHKCW5BbQLaIf10cAM9j5aQcoDrvS01beEufFytKGkNyWNcLXNpDzPCtaK90B6yV7jSwdAm4QHXedtp2kTv3nCVoqRdyhhXGbm0izvCNdReaBfZO7hCL6Rtwgku539q2kYvcLkop32OChd7N7RPuMKlnJ3QPnqBS8WJ0D6ydnChvksbhQNcxtkKbaT7uEzh0Uqy9XGRUUo7JREu4ZyEdjIHXKLwaCkZ4RKjlJaSrY/6nI3QVomD+gqP1jIT1DdKaa1gjNqcjdBackZthUeLbVDbKKXFyjfU5JyEFnMVaio82kyvUFM/pc1khnqcrdBmkqGeOKHdlqhn6tJuX6jF3wnt9oFa1FBot9BHHTNDu4l+Qx1noeWCCDWoD6HlpEANg5C2kwFqGGlab4LqnJPQej1UF3m0Xw/Vvbu0Xw/VLYX266EylbMDeqhsYtgBPVSWBeyAHqpyNsIOWKGqyGMHyABVjV12gMSo6izsAB2hIvUh7IDUR0VFyC5IfFTU1+wA+UBF/k7YBV+oSCXshCUq6oXshAwVjYRdELyjGuck7IJghWpUwk4wMao5uOwEz0E1mbATvnxU4myEXSBLVBN57ASZopqDy05IV6gmE3ZCGKES5yTshPUbKlEeO0F2qKbnshOCKaoZCTshnKASfyvshKFCJSphJ8jORyUTw07QfVQzDdgJ4QDV/Ai7QD4UKnE+2AlyRjWxYSeYGaqZaXaBDCNUsxB2gfz4qMT/Yie4U1SjPHaBJDGq6bnsgmDroJqpsAvMFBX9CDtAhjGqcT7YBbJzUE1k2AXhOyqaaXaA5BEqyoQdkC58VOOf2AXJBBWphB2gtw4qGhh2gBmjqnFA+8kxQlVnof1Mhqr8De0neYyqHI/2c88+qhoYWk/KASo7BLReunRQWSa0nQwnqG5J67mfDqpb03ZSDlBDQtuZs4MaUlouyAvUoWm5cOqjhkhot3QfoY53Wi45oJY97WaWCrXMaTWdF6gnpdW8dx+1/GrazGwj1HOgzXQ+QE2ftJgkYx81zWkxc1aoq6S93H2Mur41rZXmK9RWBLRVMBz7qG1EW4mXKdS3p63CXYQL5LSUOcW4REo7ufsBLvEd0ErufIWLDGglNz/4uMiINkrLmYPL7GmhtJwpXCinfdxyrHChX5fWcfOZwqViTdu4856Di02FlnH3Kx+X29Ey4WmAa+S0SuAtY1zFo03SYRbhKr+aFnHzscJ1YqE1JNysfFzpndZIk3OMqy1pCzMfK1xvTjtob1f4uIGENpAwH0e4hW9NC6TDz8LHTTgBWy/wTisHN7Ji2wXm+K5wMyO2m5i8H+OGNmwzcctF4eOWSraXmPJcOLgtw7aSMM8KBzf2G7CddLjvRz5uLhK2kKTJz0HhHsZsHRGTLwYO7uOTLSNpeJpGPu5lzjYRMfl5pXBHQ7aHpN52Gvm4p++UbaHNcTFwcGd+wFYQU+4OEe5vIGw+Sb3tNPbxCFM2nehwPyocPMiOzabDdTZx8DhzNpgOj4uJwkN5bCodrhcrhQf71mwi0eE6myg83m/AxpHU22QDB09RsFlETLLtFw6eZcwGEW3yz3H0hidasinE9TbZROHJjmwC0ebjcxw5eD6PzyZikl1/oNAMLp9JxPW+sp7y0RTfwmcRSb39YhY5aJJf4TOIuN5XNoscNE3Mh5PAJKfsEDlooh4fSrT5+OmvlI+mGvFRRFzvazGOHTTajg8gos3HbrpSPhrvg/clos3Hz+gQOWgHw7sR0ebjp9+LHLQI70IkNeuffi9y0Da8MQnScL1dzCaOj1ZKeSuivfnfzEHLubye6GT+965ghSOvITqZ/72rb9jjFPASIql3/JspWGcasibRZr7pT3zYKTpqVhXoZL6bxr+w2mci/F9Eu+UxO6hvdED0Z4T/kWgv/5sOftEhh7+Q/050Wh4XM/WL7ln9DTX/SXSYn/oT/xud9dv/y8MgkCAdzj/H0S9evtVk1hv433h5eXl5ebna/wE/LWKN4f9AUgAAAABJRU5ErkJggg==";var O=f(1);const L=O.a.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`,B=O.a.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`,W=O.a.div`
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
`,st=Object(O.a)(L)`
  position: absolute;
  z-index: 5;
  width: 17%;
  right: 6px;
  top: 15px;
`,dt=O.a.canvas`
  width: 98%;
  height: 98%;
`;var Q=function(Z,Dt,G,K,it,gt){Z.beginPath(),Z.moveTo(Dt+(K+1)*Math.cos(gt),G+(K+1)*Math.sin(gt)),Z.lineTo(Dt+(it-1)*Math.cos(gt),G+(it-1)*Math.sin(gt)),Z.closePath(),Z.stroke()},yt=function(Z){var Dt=Z.width,G=Z.height,K=Z.data,it=Z.outerBorderColor,gt=Z.outerBorderWidth,k=Z.innerRadius,nt=Z.innerBorderColor,vt=Z.innerBorderWidth,wt=Z.radiusLineColor,pt=Z.radiusLineWidth,ft=Z.fontFamily,ot=Z.fontWeight,Tt=Z.fontSize,St=Z.fontStyle,H=Z.perpendicularText,Nt=Z.prizeMap,bt=Z.rouletteUpdater,Jt=Z.textDistance,$t=Object(d.createRef)(),ce={outerBorderColor:it,outerBorderWidth:gt,innerRadius:k,innerBorderColor:nt,innerBorderWidth:vt,radiusLineColor:wt,radiusLineWidth:pt,fontFamily:ft,fontWeight:ot,fontSize:Tt,fontStyle:St,perpendicularText:H,prizeMap:Nt,rouletteUpdater:bt,textDistance:Jt};return Object(d.useEffect)(function(){(function(Oe,Vt,Mt){var Pt,ve,$e,ye,te,De=Mt.outerBorderColor,Yt=Mt.outerBorderWidth,Je=Mt.innerRadius,vn=Mt.innerBorderColor,ae=Mt.innerBorderWidth,Ht=Mt.radiusLineColor,j=Mt.radiusLineWidth,_=Mt.fontFamily,I=Mt.fontWeight,ut=Mt.fontSize,ht=Mt.fontStyle,rt=Mt.perpendicularText,ct=Mt.prizeMap,jt=Mt.textDistance,Ct=M(ct);Yt*=2,ae*=2,j*=2;var Rt=Oe.current;if(Rt!=null&&Rt.getContext("2d")){var Et=Rt.getContext("2d");Et.clearRect(0,0,500,500),Et.strokeStyle="transparent",Et.lineWidth=0;for(var de=0,oe=Rt.width/2-10,we=oe*C(0,100,jt)/100,He=oe*C(0,100,Je)/100,Ie=Rt.width/2,be=Rt.height/2,qe=0;qe<Vt.length;qe++){var Ye=Vt[qe],Zn=Ye.optionSize,tn=Ye.style,yn=Zn&&Zn*(2*Math.PI)/Ct||2*Math.PI/Ct,$=de+yn;Et.fillStyle=tn&&tn.backgroundColor,Et.beginPath(),Et.arc(Ie,be,oe,de,$,!1),Et.arc(Ie,be,He,$,de,!0),Et.stroke(),Et.fill(),Et.save(),Et.strokeStyle=j<=0?"transparent":Ht,Et.lineWidth=j,Q(Et,Ie,be,He,oe,de),qe===Vt.length-1&&Q(Et,Ie,be,He,oe,$),Et.strokeStyle=Yt<=0?"transparent":De,Et.lineWidth=Yt,Et.beginPath(),Et.arc(Ie,be,oe-Et.lineWidth/2,0,2*Math.PI),Et.closePath(),Et.stroke(),Et.strokeStyle=ae<=0?"transparent":vn,Et.lineWidth=ae,Et.beginPath(),Et.arc(Ie,be,He+Et.lineWidth/2-1,0,2*Math.PI),Et.closePath(),Et.stroke(),Et.translate(Ie+Math.cos(de+yn/2)*we,be+Math.sin(de+yn/2)*we);var F=de+yn/2;if(Vt[qe].image){F+=Vt[qe].image&&!(!((Pt=Vt[qe].image)===null||Pt===void 0)&&Pt.landscape)?Math.PI/2:0,Et.rotate(F);var U=((ve=Vt[qe].image)===null||ve===void 0?void 0:ve._imageHTML)||new Image;Et.drawImage(U,(U.width+((($e=Vt[qe].image)===null||$e===void 0?void 0:$e.offsetX)||0))/-2,-(U.height-(!((ye=Vt[qe].image)===null||ye===void 0)&&ye.landscape?0:90)+(((te=Vt[qe].image)===null||te===void 0?void 0:te.offsetY)||0))/2,U.width,U.height)}else{F+=rt?Math.PI/2:0,Et.rotate(F);var X=Vt[qe].option;Et.font="".concat((tn==null?void 0:tn.fontStyle)||ht," ").concat((tn==null?void 0:tn.fontWeight)||I," ").concat(2*((tn==null?void 0:tn.fontSize)||ut),"px ").concat((tn==null?void 0:tn.fontFamily)||_,", Helvetica, Arial"),Et.fillStyle=tn&&tn.textColor,Et.fillText(X||"",-Et.measureText(X||"").width/2,ut/2.7)}Et.restore(),de=$}}})($t,K,ce)},[$t,K,ce,bt]),p.a.createElement(dt,{ref:$t,width:Dt,height:G})},et=function(){return(et=Object.assign||function(Z){for(var Dt,G=1,K=arguments.length;G<K;G++)for(var it in Dt=arguments[G])Object.prototype.hasOwnProperty.call(Dt,it)&&(Z[it]=Dt[it]);return Z}).apply(this,arguments)},ue=function(Z,Dt,G){for(var K,it=0,gt=Dt.length;it<gt;it++)!K&&it in Dt||(K||(K=Array.prototype.slice.call(Dt,0,it)),K[it]=Dt[it]);return Z.concat(K||Array.prototype.slice.call(Dt))},Se=function(Z){var Dt=Z.mustStartSpinning,G=Z.prizeNumber,K=Z.data,it=Z.onStopSpinning,gt=it===void 0?function(){return null}:it,k=Z.backgroundColors,nt=k===void 0?v:k,vt=Z.textColors,wt=vt===void 0?b:vt,pt=Z.outerBorderColor,ft=pt===void 0?"black":pt,ot=Z.outerBorderWidth,Tt=ot===void 0?5:ot,St=Z.innerRadius,H=St===void 0?0:St,Nt=Z.innerBorderColor,bt=Nt===void 0?"black":Nt,Jt=Z.innerBorderWidth,$t=Jt===void 0?0:Jt,ce=Z.radiusLineColor,Oe=ce===void 0?"black":ce,Vt=Z.radiusLineWidth,Mt=Vt===void 0?5:Vt,Pt=Z.fontFamily,ve=Pt===void 0?x[0]:Pt,$e=Z.fontSize,ye=$e===void 0?20:$e,te=Z.fontWeight,De=te===void 0?"bold":te,Yt=Z.fontStyle,Je=Yt===void 0?"normal":Yt,vn=Z.perpendicularText,ae=vn!==void 0&&vn,Ht=Z.textDistance,j=Ht===void 0?60:Ht,_=Z.spinDuration,I=_===void 0?1:_,ut=Z.startingOptionIndex,ht=ut===void 0?-1:ut,rt=Z.pointerProps,ct=rt===void 0?{}:rt,jt=Z.disableInitialAnimation,Ct=jt!==void 0&&jt,Rt=Object(d.useState)(ue([],K)),Et=Rt[0],de=Rt[1],oe=Object(d.useState)([[0]]),we=oe[0],He=oe[1],Ie=Object(d.useState)(0),be=Ie[0],qe=Ie[1],Ye=Object(d.useState)(0),Zn=Ye[0],tn=Ye[1],yn=Object(d.useState)(!1),$=yn[0],F=yn[1],U=Object(d.useState)(!1),X=U[0],mt=U[1],zt=Object(d.useState)(!1),xt=zt[0],kt=zt[1],Ut=Object(d.useState)(!1),Xt=Ut[0],fe=Ut[1],Ge=Object(d.useState)(!1),en=Ge[0],Be=Ge[1],ee=Object(d.useState)(0),Zt=ee[0],he=ee[1],ge=Object(d.useState)(0),Kt=ge[0],Ne=ge[1],Qt=Object(d.useState)(!1),Xe=Qt[0],Wn=Qt[1],Cn=Object(d.useRef)(!1),dn=function(Le){for(var ie="",bn=A.length,Vn=0;Vn<Le;Vn++)ie+=A.charAt(Math.floor(Math.random()*bn));return ie}(5),Ke=Math.max(.01,I),ma=2600*Ke,Ea=750*Ke,ci=8e3*Ke,Sr=ma+Ea+ci;Object(d.useEffect)(function(){for(var Le,ie,bn,Vn,Pn,di,Jn,In,Me,Dn,hi=0,ta=[],Un=(K==null?void 0:K.length)||0,Bn=[{option:"",optionSize:1}],$n=z(ve==null?void 0:ve.trim())?[ve]:[],An=function(se){var Hn=((bn=(ie=(Le=K[se])===null||Le===void 0?void 0:Le.style)===null||ie===void 0?void 0:ie.fontFamily)===null||bn===void 0?void 0:bn.split(","))||[];Hn=Hn.map(function(Ua){return Ua.trim()}).filter(z),$n.push.apply($n,Hn),Bn[se]=et(et({},K[se]),{style:{backgroundColor:((Vn=K[se].style)===null||Vn===void 0?void 0:Vn.backgroundColor)||(nt==null?void 0:nt[se%(nt==null?void 0:nt.length)])||v[0],fontFamily:((Pn=K[se].style)===null||Pn===void 0?void 0:Pn.fontFamily)||ve||"Nunito",fontSize:((di=K[se].style)===null||di===void 0?void 0:di.fontSize)||ye||20,fontWeight:((Jn=K[se].style)===null||Jn===void 0?void 0:Jn.fontWeight)||De||"bold",fontStyle:((In=K[se].style)===null||In===void 0?void 0:In.fontStyle)||Je||"normal",textColor:((Me=K[se].style)===null||Me===void 0?void 0:Me.textColor)||(wt==null?void 0:wt[se%(wt==null?void 0:wt.length)])||b[0]}}),ta.push([]);for(var qi=0;qi<(Bn[se].optionSize||1);qi++)ta[se][qi]=hi++;if(K[se].image){Ne(function(Ua){return Ua+1});var Aa=new Image;Aa.src=((Dn=K[se].image)===null||Dn===void 0?void 0:Dn.uri)||"",Aa.onload=function(){var Ua,pi,Yi,Gi,Ta,ja;Aa.height=200*(((Ua=K[se].image)===null||Ua===void 0?void 0:Ua.sizeMultiplier)||1),Aa.width=Aa.naturalWidth/Aa.naturalHeight*Aa.height,Bn[se].image={uri:((pi=K[se].image)===null||pi===void 0?void 0:pi.uri)||"",offsetX:((Yi=K[se].image)===null||Yi===void 0?void 0:Yi.offsetX)||0,offsetY:((Gi=K[se].image)===null||Gi===void 0?void 0:Gi.offsetY)||0,landscape:((Ta=K[se].image)===null||Ta===void 0?void 0:Ta.landscape)||!1,sizeMultiplier:((ja=K[se].image)===null||ja===void 0?void 0:ja.sizeMultiplier)||1,_imageHTML:Aa},he(function(Er){return Er+1}),Be(function(Er){return!Er})}}},Ca=0;Ca<Un;Ca++)An(Ca);if(($n==null?void 0:$n.length)>0)try{m.a.load({google:{families:Array.from(new Set($n.filter(function(se){return!!se})))},timeout:1e3,fontactive:function(){Be(!en)},active:function(){Wn(!0),Be(!en)}})}catch(se){console.log("Error loading webfonts:",se)}else Wn(!0);de(ue([],Bn)),He(ta),Pa(ht,ta),fe(!0)},[K,nt,wt]),Object(d.useEffect)(function(){var Le;if(Dt&&!xt){kt(!0),fi();var ie=we[G][Math.floor(Math.random()*((Le=we[G])===null||Le===void 0?void 0:Le.length))],bn=S(ie,M(we));tn(bn)}},[Dt]),Object(d.useEffect)(function(){X&&(kt(!1),qe(Zn))},[X]);var fi=function(){F(!0),mt(!1),Cn.current=!0,setTimeout(function(){Cn.current&&(Cn.current=!1,F(!1),mt(!0),gt())},Sr)},Pa=function(Le,ie){var bn;if(ht>=0){var Vn=Math.floor(Le)%(ie==null?void 0:ie.length),Pn=ie[Vn][Math.floor(((bn=ie[Vn])===null||bn===void 0?void 0:bn.length)/2)];qe(S(Pn,M(ie),!1))}};return Xt?p.a.createElement(B,{style:!Xe||Kt>0&&Zt!==Kt?{visibility:"hidden"}:{}},p.a.createElement(W,{className:$?"started-spinning":"",classKey:dn,startSpinningTime:ma,continueSpinningTime:Ea,stopSpinningTime:ci,startRotationDegrees:be,finalRotationDegrees:Zn,disableInitialAnimation:Ct},p.a.createElement(yt,{width:"900",height:"900",data:Et,outerBorderColor:ft,outerBorderWidth:Tt,innerRadius:H,innerBorderColor:bt,innerBorderWidth:$t,radiusLineColor:Oe,radiusLineWidth:Mt,fontFamily:ve,fontWeight:De,fontStyle:Je,fontSize:ye,perpendicularText:ae,prizeMap:we,rouletteUpdater:en,textDistance:j})),p.a.createElement(st,{style:ct==null?void 0:ct.style,src:(ct==null?void 0:ct.src)||D.src,alt:"roulette-static"})):null}}])})}(wd)),wd.exports}var RA=jA();const cu=[{id:1,label:"Passa",color:"#FF5252",points:0},{id:2,label:"Rebus",color:"#FF9800",points:200,url:"/game/wheel/rebus"},{id:7,label:"Bonus",color:"#F44336",points:200},{id:4,label:"Città",color:"#4CAF50",points:400,url:"/game/wheel/city"},{id:8,label:"Malus",color:"#000000",points:-100},{id:5,label:"Suono",color:"#2196F3",points:500,url:"/game/wheel/sound"}];function zA(){const n=$i(),{players:i,updatePlayerScore:o}=xr(),[s,u]=T.useState(null),[f,d]=T.useState(!1),[p,h]=T.useState(0),[m,v]=T.useState(!1),[b,x]=T.useState(null),[S,C]=T.useState(!1),z=cu.map(L=>({option:L.label,style:{backgroundColor:L.color,textColor:"white"}}));T.useEffect(()=>{i.length===0&&n("/")},[i,n]);const M=L=>{f||(u(L),x(null),C(!1))},A=()=>{if(!s){alert("Seleziona prima un giocatore!");return}if(!m){const L=Math.floor(Math.random()*cu.length);h(L),v(!0),d(!0),C(!1)}},D=()=>{v(!1),d(!1);const L=cu[p];if(x(L),C(!0),(L.label==="Bonus"||L.label==="Malus")&&s){const B=s.score+L.points;o(s.id,B),u({...s,score:B})}},O=()=>{if(!b)return null;if(b.label==="Bonus"||b.label==="Malus"){const L=b.label==="Bonus"?"aggiunti":"sottratti",B=Math.abs(b.points);return y.jsxs(Sd,{$color:b.color,children:[y.jsxs(Ed,{children:[b.label,"!"]}),y.jsxs(Cd,{children:[b.points>0?"+":"-",B," punti"]}),y.jsx(Ad,{children:L}),y.jsx(Td,{onClick:()=>C(!1),children:"Continua"})]})}return b.label==="Passa"?y.jsxs(Sd,{$color:b.color,children:[y.jsx(Ed,{children:"Peccato!"}),y.jsx(Cd,{children:"Passa!"}),y.jsx(Ad,{children:"Turno saltato"}),y.jsx(Td,{onClick:()=>C(!1),children:"Continua"})]}):y.jsxs(Sd,{$color:b.color,children:[y.jsx(Ed,{children:"Hai ottenuto:"}),y.jsx(Cd,{children:b.label}),y.jsxs(Ad,{children:[b.points>0?"+":"",b.points," punti"]}),b.url&&y.jsx(Va,{to:b.url,style:{textDecoration:"none"},children:y.jsx(Td,{as:"div",children:"Inizia la Sfida"})})]})};return y.jsxs(LA,{children:[y.jsxs(_A,{to:"/game",children:[y.jsx(br,{})," Torna ai giochi"]}),y.jsx(VA,{children:"Ruota della Fortuna Pokémon"}),y.jsx(PA,{children:"Seleziona un allenatore, gira la ruota e affronta la sfida!"}),y.jsxs(UA,{children:[y.jsxs($A,{children:[y.jsxs(HA,{children:[y.jsx(MA,{children:y.jsx(RA.Wheel,{mustStartSpinning:m,prizeNumber:p,data:z,backgroundColors:cu.map(L=>L.color),textColors:["#ffffff"],fontSize:14,outerBorderColor:"#ffde00",outerBorderWidth:3,innerBorderColor:"#ffffff",innerBorderWidth:1,radiusLineColor:"#ffffff",radiusLineWidth:1,perpendicularText:!0,textDistance:60,onStopSpinning:D})}),y.jsxs(qA,{onClick:A,disabled:f||!s,children:[y.jsx(m0,{})," Gira la Ruota"]})]}),S&&b&&O()]}),y.jsxs(YA,{children:[y.jsx(GA,{children:"Seleziona un Allenatore"}),y.jsx(XA,{children:i.map(L=>y.jsxs(KA,{onClick:()=>M(L),$active:(s==null?void 0:s.id)===L.id,children:[y.jsx(QA,{src:L.avatar,alt:L.name}),y.jsxs(FA,{children:[y.jsx(ZA,{children:L.name}),y.jsxs(WA,{children:[L.score," punti"]})]})]},L.id))})]})]}),y.jsxs(DA,{children:[y.jsx(Gs,{className:"ball1"}),y.jsx(Gs,{className:"ball2"}),y.jsx(BA,{className:"ball3"}),y.jsx(NA,{className:"ball4"})]})]})}const MA=E.div`
  width: 80%;
  max-width: 400px;
  position: relative;
`,kA=Te`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;Te`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;const Ys=Te`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,OA=Te`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,DA=E.div`
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
`,BA=E(Gs)`
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
`,NA=E(Gs)`
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
`;const LA=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,_A=E(Va)`
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
`,VA=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1rem;
  text-align: center;
  z-index: 1;
`,PA=E.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  z-index: 1;
`,UA=E.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  margin: 2rem 0;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`,$A=E.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`,HA=E.div`
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
`;const qA=E.button`
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
  animation: ${OA} 0.5s ease;
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
`,YA=E.div`
  flex: 1;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`,GA=E.h2`
  font-size: 1.5rem;
  color: #ffde00;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
`,XA=E.div`
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
`,KA=E.div`
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
      animation: ${kA} 2s infinite ease-in-out;
      box-shadow: 0 0 15px rgba(255, 222, 0, 0.4);
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`,QA=E.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 2px solid #ffde00;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  background: #132a57;
`,FA=E.div`
  flex: 1;
`,ZA=E.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  color: white;
`,WA=E.div`
  font-size: 0.85rem;
  color: #ffde00;
`;E.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ee1515;
  width: 24px;
  height: 24px;
`;const JA="/vegetaquizshow/assets/card-4O-qPn6Q.png",IA="/vegetaquizshow/assets/vaporeon-CKwMlkUN.jpg",tT="/vegetaquizshow/assets/garchomp-HcLYxoWu.jpg",eT="/vegetaquizshow/assets/lopunny-By_K6DKg.jpg",nT="/vegetaquizshow/assets/psyduck-DHhIB6m5.jpg",aT="/vegetaquizshow/assets/lucario-Bg7ysgN9.jpg",iT="/vegetaquizshow/assets/fletchling-BpYOL6cV.jpg",rT=[{id:1,name:"Vaporeon",image:IA},{id:2,name:"Garchomp",image:tT},{id:3,name:"Lopunny",image:eT},{id:4,name:"Psyduck",image:nT},{id:5,name:"Lucario",image:aT},{id:6,name:"fletchling",image:iT},{id:7,name:"Gengar",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"},{id:8,name:"Eevee",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:9,name:"Snorlax",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:10,name:"Gyarados",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"},{id:11,name:"Dragonite",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"},{id:12,name:"Meowth",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"}];new URL("../../../assets/images/cardbg.png",import.meta.url).href;function oT(){const{players:n,guessedCards:i}=xr(),[o,s]=T.useState([]),u=$i();T.useEffect(()=>{if(n.length===0){u("/");return}const p=[...rT.map(h=>({...h,guessed:i.includes(h.id)}))].sort(()=>.5-Math.random());s(p)},[u,n,i]);const f=d=>{d.guessed||u("/game/image/guess",{state:{selectedCard:d,totalCards:o.length}})};return y.jsxs(sT,{children:[y.jsxs(lT,{to:"/game",children:[y.jsx(br,{})," Torna ai giochi"]}),y.jsx(uT,{children:"Chi è quel Pokémon?"}),y.jsx(cT,{children:"Seleziona una carta misteriosa per iniziare la sfida"}),y.jsx(fT,{children:o.map(d=>y.jsx(gT,{onClick:()=>f(d),children:d.guessed?y.jsxs(vT,{children:[y.jsx("img",{src:d.image,alt:d.name}),y.jsx(yT,{children:d.name})]}):y.jsx("img",{src:JA,alt:""})},d.id))}),y.jsxs(dT,{children:[y.jsx(Cv,{className:"ball1"}),y.jsx(Cv,{className:"ball2"}),y.jsx(hT,{className:"ball3"}),y.jsx(pT,{className:"ball4"}),y.jsx(mT,{className:"ball5"})]})]})}const vs=Te`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,sT=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,lT=E(Va)`
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
`,uT=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
`,cT=E.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  z-index: 1;
`,fT=E.div`
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
`,dT=E.div`
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
`,Cv=E(Fu)`
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
`,hT=E(Fu)`
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
`,pT=E(Fu)`
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
`,mT=E(Fu)`
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
`,gT=E.div`
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
`,vT=E.div`
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
`,yT=E.div`
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
`,Jr=36,Av=500,bT=5e3;function xT(){var Z,Dt;const n=Sa(),i=$i(),{players:o,updatePlayerScore:s,markCardAsGuessed:u}=xr(),[f,d]=T.useState(null),p=(Z=n.state)==null?void 0:Z.selectedCard;(Dt=n.state)!=null&&Dt.totalCards;const[h,m]=T.useState("active"),[v,b]=T.useState(!1),[x,S]=T.useState(Av),[C,z]=T.useState(""),[M,A]=T.useState(!1),[D,O]=T.useState(!1),L=T.useRef(null),[B,W]=T.useState([]),[st,dt]=T.useState([]),Q=B.length/Jr*100,yt=G=>{const K=[...G];for(let it=K.length-1;it>0;it--){const gt=Math.floor(Math.random()*(it+1));[K[it],K[gt]]=[K[gt],K[it]]}return K};T.useEffect(()=>{const G=Array.from({length:Jr},(it,gt)=>gt),K=yt(G);dt(K)},[]),T.useEffect(()=>(h==="active"&&!v&&B.length<Jr&&st.length>0&&(L.current=setTimeout(()=>{const G=st[B.length];W(K=>[...K,G]),S(K=>Math.max(K-Av/Jr,0))},bT)),()=>{L.current&&clearTimeout(L.current)}),[h,v,B.length,st]),T.useEffect(()=>{if(!p){i("/game/image");return}},[p,i]),T.useEffect(()=>{if(o.length===0){i("/");return}},[o,i]);const et=()=>{b(!v)},ue=()=>{if(!f){alert("Seleziona prima un giocatore!");return}const G=C.trim().toLowerCase(),K=p.name.toLowerCase(),it=G===K;if(O(it),A(!0),m("completed"),it){const gt=f.score+Math.round(x);s(f.id,gt),d({...f,score:gt}),u(p.id);const k=Array.from({length:Jr},(nt,vt)=>vt);W(k)}},Se=()=>{i("/game/image")};return p?y.jsxs(CT,{children:[y.jsxs(AT,{to:"/game/image",children:[y.jsx(br,{})," Torna alla selezione"]}),y.jsx(TT,{children:"Chi è quel Pokémon?"}),y.jsx(jT,{children:"Seleziona un giocatore dalla lista prima di indovinare"}),y.jsxs(h7,{children:[y.jsxs(RT,{children:[y.jsxs(zT,{children:[y.jsx(MT,{children:"Punteggio:"}),y.jsx(kT,{children:Math.round(x)})]}),y.jsx(OT,{children:h==="active"&&y.jsx(DT,{onClick:et,children:v?y.jsxs(y.Fragment,{children:[y.jsx(m0,{})," Riprendi"]}):y.jsxs(y.Fragment,{children:[y.jsx(Sy,{})," Pausa"]})})})]}),y.jsxs(r7,{children:[y.jsx(o7,{children:y.jsxs(s7,{children:[y.jsx(l7,{$percentage:Q}),y.jsxs(u7,{children:[Math.round(Q),"%"]})]})}),y.jsxs(d7,{children:[y.jsx(BT,{src:p==null?void 0:p.image,alt:"Pokémon da indovinare"}),y.jsx(NT,{children:Array.from({length:Jr}).map((G,K)=>y.jsx(LT,{$visible:!B.includes(K)},K))})]}),y.jsx(c7,{children:M?y.jsxs(p7,{$correct:D,children:[y.jsx(PT,{children:D?y.jsx(qu,{}):y.jsx(co,{})}),y.jsx(UT,{children:D?"Corretto!":"Sbagliato!"}),y.jsx($T,{children:D?`Hai guadagnato ${Math.round(x)} punti!`:`Era ${p.name}. Nessun punto guadagnato.`}),y.jsx(HT,{onClick:Se,children:"Nuova Sfida"})]}):y.jsxs(f7,{children:[y.jsx("h3",{children:"Chi è questo Pokémon?"}),y.jsx(_T,{type:"text",value:C,onChange:G=>z(G.target.value),placeholder:"Nome del Pokémon...",disabled:h==="completed"}),y.jsx(VT,{onClick:ue,disabled:!C.trim()||h==="completed",children:"Indovina"})]})})]})]}),y.jsxs(qT,{children:[y.jsxs(YT,{children:[y.jsx(GT,{children:"Allenatori"}),y.jsx(XT,{children:f?"Ora indovina il Pokémon":"Scegli un allenatore per iniziare"})]}),y.jsx(KT,{children:o.map(G=>y.jsxs(QT,{$active:(f==null?void 0:f.id)===G.id,onClick:()=>d(G),children:[y.jsx(FT,{src:G.avatar,alt:G.name}),y.jsxs(ZT,{children:[y.jsx(WT,{children:G.name}),y.jsxs(JT,{children:[y.jsx(t7,{})," ",G.score," punti"]})]}),(f==null?void 0:f.id)===G.id&&y.jsx(IT,{children:y.jsx(Ey,{})})]},G.id))})]}),y.jsxs(e7,{children:[y.jsx(Tv,{className:"ball1"}),y.jsx(Tv,{className:"ball2"}),y.jsx(n7,{className:"ball3"}),y.jsx(a7,{className:"ball4"}),y.jsx(i7,{className:"ball5"})]})]}):null}const wT=Te`
  0% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 222, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 222, 0, 0); }
`,ST=Te`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`,ys=Te`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,ET=Te`
  from { opacity: 0; }
  to { opacity: 1; }
`,CT=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`,AT=E(Va)`
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
`,TT=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;

  text-align: center;
  z-index: 1;
`,jT=E.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  z-index: 1;
`,RT=E.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`,zT=E.div`
  background: rgba(19, 42, 87, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 2px solid #ffde00;
`,MT=E.span`
  font-size: 0.9rem;
  margin-right: 8px;
  color: white;
`,kT=E.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffde00;
`,OT=E.div`
  display: flex;
  gap: 10px;
`,DT=E.button`
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
`,BT=E.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: white;
`,NT=E.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`,LT=E.div`
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
`,_T=E.input`
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
`,VT=E.button`
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
`,PT=E.div`
  font-size: 3rem;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,UT=E.h2`
  font-size: 1.8rem;
  margin: 0;
`,$T=E.p`
  font-size: 1.2rem;
  opacity: 0.9;
`,HT=E.button`
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
`,qT=E.div`
  width: 100%;
  max-width: 800px;
  background: rgba(19, 42, 87, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  z-index: 1;

  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,YT=E.div`
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
`,GT=E.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffde00;
  text-shadow: 2px 2px 0 #3b4cca;
`,XT=E.div`
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
`,KT=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,QT=E.div`
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
      animation: ${wT} 2s infinite ease-in-out;
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
`,FT=E.img`
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
`,ZT=E.div`
  flex: 1;
  position: relative;
  z-index: 1;
`,WT=E.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: white;
`,JT=E.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ffde00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,IT=E.div`
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
  animation: ${ST} 2s infinite;
`,t7=E.div`
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
`,e7=E.div`
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
`,Tv=E(Zu)`
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
`,n7=E(Zu)`
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
`,a7=E(Zu)`
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
`,i7=E(Zu)`
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
`,r7=E.div`
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
`,o7=E.div`
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
`,s7=E.div`
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
`,l7=E.div`
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
`,u7=E.div`
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
`,c7=E.div`
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
`,f7=E.div`
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
`,d7=E.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffde00;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,h7=E.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`,p7=E.div`
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
  animation: ${ET} 0.5s ease;
`,jv=[{id:1,name:"Biancavilla",image:"/images/cities/pallet-town.jpg",hint:"La città natale di Ash Ketchum"},{id:2,name:"Smeraldopoli",image:"/images/cities/celadon-city.jpg",hint:"Famosa per il centro commerciale e la palestra di tipo Erba"},{id:3,name:"Celestopoli",image:"/images/cities/saffron-city.jpg",hint:"Sede della Silph Co. e della palestra di tipo Psico"},{id:4,name:"Aranciopoli",image:"/images/cities/vermilion-city.jpg",hint:"Una città portuale con una palestra di tipo Elettro"},{id:5,name:"Azzurropoli",image:"/images/cities/cerulean-city.jpg",hint:"Città con una palestra di tipo Acqua gestita dalle sorelle di Misty"}];function m7(){const n=$i(),i=Sa(),{activePlayer:o,updatePlayerScore:s}=xr(),[u,f]=T.useState(null),[d,p]=T.useState(""),[h,m]=T.useState(!1),[v,b]=T.useState(!1),[x,S]=T.useState(!1);T.useEffect(()=>{if(o)console.log("Giocatore attivo:",o);else{n("/game/wheel");return}const M=jv[Math.floor(Math.random()*jv.length)];f(M)},[i.state,n]);const C=()=>{if(!u||!d.trim())return;const M=d.trim().toLowerCase(),A=u.name.toLowerCase(),D=M===A;if(b(D),m(!0),D&&o){const O=o.score+400;s(o.id,O),setActivePlayer({...o,score:O})}},z=()=>{n("/game/wheel")};return y.jsxs(S7,{children:[y.jsxs(C7,{onClick:z,children:[y.jsx(br,{})," Torna alla Ruota"]}),y.jsx(A7,{children:"Indovina la Città Pokémon"}),y.jsx(j7,{children:y.jsxs(R7,{children:[y.jsx(z7,{children:(o==null?void 0:o.name)||"Giocatore"}),y.jsxs(M7,{children:[(o==null?void 0:o.score)||0," punti"]})]})}),y.jsx(T7,{children:h?y.jsxs(B7,{$correct:v,children:[y.jsx(N7,{children:v?y.jsx(qu,{}):y.jsx(co,{})}),y.jsx(L7,{children:v?"Corretto!":"Sbagliato!"}),y.jsx(_7,{children:v?`La città era ${u.name}! Hai guadagnato 400 punti!`:`La città era ${u.name}. Nessun punto guadagnato.`}),y.jsx(V7,{onClick:z,children:"Torna alla Ruota"})]}):y.jsxs(y.Fragment,{children:[y.jsx(g7,{children:u&&y.jsx(v7,{src:u.image,alt:"Dettaglio città Pokémon"})}),x&&u&&y.jsx(y7,{children:y.jsx(b7,{children:u.hint})}),y.jsxs(k7,{children:[y.jsx(O7,{type:"text",value:d,onChange:M=>p(M.target.value),placeholder:"Nome della città..."}),y.jsxs(x7,{children:[y.jsx(D7,{onClick:C,disabled:!d.trim(),children:"Indovina"}),y.jsx(w7,{onClick:()=>S(!0),disabled:x,children:"Suggerimento"})]})]})]})}),y.jsxs(P7,{children:[y.jsx(Rv,{className:"ball1"}),y.jsx(Rv,{className:"ball2"})]})]})}const g7=E.div`
  width: 100%;
  max-width: 500px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  border: 3px solid #ffde00;
`,v7=E.img`
  width: 100%;
  display: block;
`,y7=E.div`
  background: rgba(59, 76, 202, 0.7);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #ffde00;
  max-width: 500px;
  width: 100%;
`,b7=E.p`
  margin: 0;
  font-style: italic;
  color: white;
`,x7=E.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`,w7=E.button`
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,S7=E.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  background-color: #0a1428;
  color: white;
`;E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;E.div`
  width: 120px;
  height: 120px;
  background: #3b4cca;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;E.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${n=>n.$playing?1:0};
  transition: opacity 0.3s;
`;const E7=Te`
  0% { transform: scaleY(1); opacity: 0.8; }
  50% { transform: scaleY(0.5); opacity: 0.5; }
  100% { transform: scaleY(1); opacity: 0.8; }
`;E.div`
  width: 4px;
  height: 30px;
  background: white;
  margin: 0 3px;
  border-radius: 2px;
  animation: ${E7} 1s ease-in-out infinite;
  animation-delay: ${n=>n.delay||0}s;
`;E.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 1rem;
`;const C7=E(Va)`
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
`,A7=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin-bottom: 1rem;
  text-align: center;
  z-index: 1;
`,T7=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  z-index: 1;
`,j7=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
  background: rgba(19, 42, 87, 0.7);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);
`,R7=E.div`
  display: flex;
  flex-direction: column;
`,z7=E.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #ffde00;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`,M7=E.div`
  font-size: 0.9rem;
  color: white;
`,k7=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`,O7=E.input`
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
`,D7=E.button`
  flex: 1;
  padding: 12px 20px;
  background: #ee1515;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
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
`,B7=E.div`
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
`,N7=E.div`
  font-size: 3rem;
  color: white;
`,L7=E.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
`,_7=E.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`,V7=E.button`
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
`,P7=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`,U7=Te`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Rv=E.div`
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
  animation: ${U7} 60s linear infinite;

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
`,Li=new URL("./assets/audio/abtn.mp3",import.meta.url).href,zv=[{id:1,name:"Pikachu",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},{id:2,name:"Charizard",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},{id:3,name:"Bulbasaur",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"},{id:4,name:"Jigglypuff",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"},{id:5,name:"Meowth",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png"},{id:6,name:"Snorlax",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"},{id:7,name:"Eevee",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"},{id:8,name:"Gyarados",audio:Li,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png"}];function $7(){const n=$i(),i=Sa(),{updatePlayerScore:o}=xr(),[s,u]=T.useState(null),[f,d]=T.useState(null),[p,h]=T.useState(!1),[m,v]=T.useState(""),[b,x]=T.useState(!1),[S,C]=T.useState(!1),[z,M]=T.useState(!1),A=T.useRef(null);T.useEffect(()=>{var W;(W=i.state)!=null&&W.player?u(i.state.player):n("/game/wheel")},[i,n]),T.useEffect(()=>{const W=Math.floor(Math.random()*zv.length);d(zv[W])},[]),T.useEffect(()=>{A.current&&(p?A.current.play():A.current.pause())},[p,f]);const D=()=>{h(!p)},O=()=>{if(!f||!m.trim())return;const W=m.trim().toLowerCase(),st=f.name.toLowerCase(),dt=W===st;if(C(dt),x(!0),h(!1),dt&&s){const Q=s.score+500;o(s.id,Q),u({...s,score:Q})}},L=()=>{M(!0)},B=()=>{n("/game/wheel")};return y.jsxs(q7,{children:[y.jsxs(Y7,{onClick:B,children:[y.jsx(br,{})," Torna alla ruota"]}),y.jsx(G7,{children:"Chi è questo Pokémon?"}),y.jsx(X7,{children:s?`${s.name}, ascolta e indovina il verso di quale Pokémon stai sentendo!`:"Ascolta e indovina!"}),y.jsx(K7,{children:y.jsx(Q7,{children:f&&y.jsxs(y.Fragment,{children:[y.jsx("audio",{ref:A,src:f.audio,onEnded:()=>h(!1)}),y.jsxs(F7,{children:[y.jsxs(Z7,{onClick:D,disabled:b,children:[p?y.jsx(Sy,{}):y.jsx(m0,{}),p?" Pausa":" Ascolta"]}),y.jsxs(W7,{$playing:p&&!b,children:[y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"}),y.jsx("div",{className:"bar"})]})]}),z?y.jsxs(i9,{children:[y.jsx(r9,{src:f.image,alt:f.name}),y.jsx(o9,{children:f.name})]}):b?null:y.jsxs(J7,{children:[y.jsx(I7,{type:"text",value:m,onChange:W=>v(W.target.value),placeholder:"Nome del Pokémon...",disabled:b}),y.jsx(t9,{onClick:O,disabled:!m.trim()||b,children:"Indovina"})]}),b&&y.jsxs(e9,{$correct:S,children:[y.jsx(n9,{children:S?y.jsx(qu,{}):y.jsx(co,{})}),y.jsx(a9,{children:S?"Corretto! Hai guadagnato 500 punti!":`Sbagliato! Era ${f.name}.`}),!z&&!S&&y.jsx(Mv,{$secondary:!0,onClick:L,children:"Mostra Pokémon"}),y.jsx(Mv,{onClick:B,children:"Torna alla Ruota"})]})]})})}),y.jsxs(s9,{children:[y.jsx(u9,{className:"ball1"}),y.jsx(jd,{className:"note1"}),y.jsx(jd,{className:"note2"}),y.jsx(jd,{className:"note3"})]})]})}const H7=Te`
  0% { height: 5px; }
  50% { height: 30px; }
  100% { height: 5px; }
`,eb=Te`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,q7=E.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: #0a1428;
`,Y7=E.button`
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
`,G7=E.h1`
  font-size: 2.5rem;
  color: #ffde00;
  text-shadow: 3px 3px 0 #3b4cca;
  margin: 2rem 0 1rem;
  text-align: center;
`,X7=E.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
`,K7=E.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`,Q7=E.div`
  width: 100%;
  background: rgba(19, 42, 87, 0.8);
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 222, 0, 0.5);
`,F7=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0 2rem;
`,Z7=E.button`
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
`,W7=E.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;

  .bar {
    width: 7px;
    height: 5px;
    background: #ffde00;
    border-radius: 3px;
    animation: ${H7} ${n=>n.$playing?"0.5s":"0s"}
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
`,J7=E.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
`,I7=E.input`
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
`,t9=E.button`
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
`,e9=E.div`
  width: 100%;
  background: ${n=>n.$correct?"linear-gradient(135deg, rgba(120, 200, 80, 0.9), rgba(60, 130, 40, 0.9))":"linear-gradient(135deg, rgba(238, 21, 21, 0.9), rgba(150, 30, 30, 0.9))"};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${eb} 0.5s ease;
  border: 3px solid ${n=>n.$correct?"#78C850":"#ee1515"};
`,n9=E.div`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`,a9=E.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`,Mv=E.button`
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
`,i9=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  animation: ${eb} 0.7s ease;
`,r9=E.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
`,o9=E.div`
  font-size: 1.5rem;
  color: #ffde00;
  font-weight: bold;
  margin-top: 1rem;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`,s9=E.div`
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
`,l9=Te`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;Te`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;const u9=E.div`
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
    animation: ${l9} 20s linear infinite;
  }
`,jd=E.div`
  position: absolute;
`,c9=new URL("/vegetaquizshow/assets/Pokemon%20Mystery%20Dungeon%20Red_Blue%20Rescue%20Team%20Full%20OST%20_6EHwdMQj3i4_00_00_00_00_05_00_part_-CfduThOI.mp3",import.meta.url).href,f9=new URL("/vegetaquizshow/assets/welcome-pokemon-Boc2-QOp.mp3",import.meta.url).href,d9=new URL("/vegetaquizshow/assets/abtn-DX_bwNuP.mp3",import.meta.url).href,bs={"/":f9,"/game":c9},h9=T.createContext({isPlaying:!1,volume:.5,toggleAudio:()=>{},changeVolume:n=>{},currentAudioPath:""}),p9=()=>{const{pathname:n}=Sa(),[i]=T.useState(new Audio),[o,s]=T.useState(!1),[u,f]=T.useState(.5),[d,p]=T.useState(!1),[h,m]=T.useState(""),v=T.useRef(null),[b,x]=T.useState(!0),S=T.useRef(new Audio(d9));T.useEffect(()=>{S.current.volume=.2;const L=localStorage.getItem("pokemonQuizClickSoundEnabled");L!==null&&x(L==="true")},[]);const C=()=>{const L=!b;x(L),localStorage.setItem("pokemonQuizClickSoundEnabled",String(L))},z=()=>{if(b){const L=S.current.cloneNode();L.volume=.1,L.play().catch(B=>console.log("Click sound error:",B))}};T.useEffect(()=>{const L=()=>z();return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[b]);const M=()=>{o?(i.pause(),s(!1),localStorage.setItem("pokemonQuizAudioEnabled","false")):(i.volume=u,i.loop=!0,i.play().then(()=>{s(!0),localStorage.setItem("pokemonQuizAudioEnabled","true")}).catch(L=>console.log("Audio playback error:",L)))},A=L=>{const B=parseFloat(L.toFixed(2));f(B),i.volume=B,localStorage.setItem("pokemonQuizAudioVolume",B.toString())},D=L=>{if(bs[L])return bs[L];for(const B in bs)if(L.startsWith(B)&&B!=="/")return bs[B];return bs["/"]};T.useEffect(()=>{const L=localStorage.getItem("pokemonQuizAudioEnabled")==="true",B=localStorage.getItem("pokemonQuizAudioVolume");if(B){const W=parseFloat(B);f(W),i.volume=W}else i.volume=u;L&&s(!0)},[i]),T.useEffect(()=>{const L=D(n);if(L!==h){const B=!i.paused;i.currentTime,i.src=L,m(L),B&&o&&i.play().catch(W=>console.log("Audio playback error:",W))}else o&&i.paused&&i.play().catch(B=>console.log("Audio playback error:",B))},[n,i,o,h]),T.useEffect(()=>{const L=B=>{v.current&&!v.current.contains(B.target)&&p(!1)};return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[]);const O=()=>u===0||!o?y.jsx(Zw,{}):u<.5?y.jsx(Fw,{}):y.jsx(Ww,{});return y.jsx(h9.Provider,{value:{isPlaying:o,volume:u,toggleAudio:M,changeVolume:A,currentAudioPath:h},children:y.jsxs(g9,{ref:v,children:[y.jsxs("div",{className:"container",children:[y.jsx(v9,{onClick:M,onMouseEnter:()=>p(!0),title:o?"Disattiva musica":"Attiva musica",children:O()}),y.jsx(y9,{$visible:d,children:y.jsx(b9,{type:"range",min:"0",max:"0.3",step:"0.01",value:u,onChange:L=>A(parseFloat(L.target.value))})})]}),y.jsx(x9,{onClick:C,$active:b,title:b?"Disattiva suono click":"Attiva suono click",children:y.jsx(Kw,{})})]})})},m9=()=>y.jsxs(A3,{basename:"/vegetaquizshow",children:[y.jsx(p9,{}),y.jsxs(n3,{children:[y.jsx(ni,{path:"/",element:y.jsx(t4,{})}),y.jsx(ni,{path:"/game",element:y.jsx(_4,{})}),y.jsx(ni,{path:"/game/categories",element:y.jsx(VC,{})}),y.jsx(ni,{path:"/game/wheel",element:y.jsx(zA,{})}),y.jsx(ni,{path:"/game/wheel/city",element:y.jsx(m7,{})}),y.jsx(ni,{path:"/game/wheel/sound",element:y.jsx($7,{})}),y.jsx(ni,{path:"/game/image",element:y.jsx(oT,{})}),y.jsx(ni,{path:"/game/image/guess",element:y.jsx(xT,{})})]})]}),g9=E.div`
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
`,v9=E.button`
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
`,y9=E.div`
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
`,b9=E.input`
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
`,x9=E.button`
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
`;dx.createRoot(document.getElementById("root")).render(y.jsx(T.StrictMode,{children:y.jsx(Iw,{children:y.jsx(m9,{})})}));
