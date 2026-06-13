(function(){
const e=document.createElement("link").relList;
if(e&&e.supports&&e.supports("modulepreload"))return;
for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);
new MutationObserver(n=>{
for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}
).observe(document,{
childList:!0,subtree:!0}
);
function t(n){
const r={
}
;
return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}
function i(n){
if(n.ep)return;
n.ep=!0;
const r=t(n);
fetch(n.href,r)}
}
)();
var vf={
exports:{
}
}
,ja={
}
,xf={
exports:{
}
}
,ie={
}
;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),gp=Symbol.for("react.portal"),pp=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),Ep=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),Lp=Symbol.for("react.lazy"),Kc=Symbol.iterator;
function Ap(s){
return s===null||typeof s!="object"?null:(s=Kc&&s[Kc]||s["@@iterator"],typeof s=="function"?s:null)}
var Ef={
isMounted:function(){
return!1}
,enqueueForceUpdate:function(){
}
,enqueueReplaceState:function(){
}
,enqueueSetState:function(){
}
}
,Sf=Object.assign,Tf={
}
;
function qi(s,e,t){
this.props=s,this.context=e,this.refs=Tf,this.updater=t||Ef}
qi.prototype.isReactComponent={
}
;
qi.prototype.setState=function(s,e){
if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,s,e,"setState")}
;
qi.prototype.forceUpdate=function(s){
this.updater.enqueueForceUpdate(this,s,"forceUpdate")}
;
function If(){
}
If.prototype=qi.prototype;
function Eu(s,e,t){
this.props=s,this.context=e,this.refs=Tf,this.updater=t||Ef}
var Su=Eu.prototype=new If;
Su.constructor=Eu;
Sf(Su,qi.prototype);
Su.isPureReactComponent=!0;
var Hc=Array.isArray,Lf=Object.prototype.hasOwnProperty,Tu={
current:null}
,Af={
key:!0,ref:!0,__self:!0,__source:!0}
;
function Rf(s,e,t){
var i,n={
}
,r=null,a=null;
if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(r=""+e.key),e)Lf.call(e,i)&&!Af.hasOwnProperty(i)&&(n[i]=e[i]);
var o=arguments.length-2;
if(o===1)n.children=t;
else if(1<o){
for(var u=Array(o),l=0;
l<o;
l++)u[l]=arguments[l+2];
n.children=u}
if(s&&s.defaultProps)for(i in o=s.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);
return{
$$typeof:Zn,type:s,key:r,ref:a,props:n,_owner:Tu.current}
}
function Rp(s,e){
return{
$$typeof:Zn,type:s.type,key:e,ref:s.ref,props:s.props,_owner:s._owner}
}
function Iu(s){
return typeof s=="object"&&s!==null&&s.$$typeof===Zn}
function _p(s){
var e={
"=":"=0",":":"=2"}
;
return"$"+s.replace(/[=:]/g,function(t){
return e[t]}
)}
var zc=/\/+/g;
function lo(s,e){
return typeof s=="object"&&s!==null&&s.key!=null?_p(""+s.key):e.toString(36)}
function Ur(s,e,t,i,n){
var r=typeof s;
(r==="undefined"||r==="boolean")&&(s=null);
var a=!1;
if(s===null)a=!0;
else switch(r){
case"string":case"number":a=!0;
break;
case"object":switch(s.$$typeof){
case Zn:case gp:a=!0}
}
if(a)return a=s,n=n(a),s=i===""?"."+lo(a,0):i,Hc(n)?(t="",s!=null&&(t=s.replace(zc,"$&/")+"/"),Ur(n,e,t,"",function(l){
return l}
)):n!=null&&(Iu(n)&&(n=Rp(n,t+(!n.key||a&&a.key===n.key?"":(""+n.key).replace(zc,"$&/")+"/")+s)),e.push(n)),1;
if(a=0,i=i===""?".":i+":",Hc(s))for(var o=0;
o<s.length;
o++){
r=s[o];
var u=i+lo(r,o);
a+=Ur(r,e,t,u,n)}
else if(u=Ap(s),typeof u=="function")for(s=u.call(s),o=0;
!(r=s.next()).done;
)r=r.value,u=i+lo(r,o++),a+=Ur(r,e,t,u,n);
else if(r==="object")throw e=String(s),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {
"+Object.keys(s).join(", ")+"}
":e)+"). If you meant to render a collection of children, use an array instead.");
return a}
function rr(s,e,t){
if(s==null)return s;
var i=[],n=0;
return Ur(s,i,"","",function(r){
return e.call(t,r,n++)}
),i}
function wp(s){
if(s._status===-1){
var e=s._result;
e=e(),e.then(function(t){
(s._status===0||s._status===-1)&&(s._status=1,s._result=t)}
,function(t){
(s._status===0||s._status===-1)&&(s._status=2,s._result=t)}
),s._status===-1&&(s._status=0,s._result=e)}
if(s._status===1)return s._result.default;
throw s._result}
var Xe={
current:null}
,Br={
transition:null}
,kp={
ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Br,ReactCurrentOwner:Tu}
;
function _f(){
throw Error("act(...) is not supported in production builds of React.")}
ie.Children={
map:rr,forEach:function(s,e,t){
rr(s,function(){
e.apply(this,arguments)}
,t)}
,count:function(s){
var e=0;
return rr(s,function(){
e++}
),e}
,toArray:function(s){
return rr(s,function(e){
return e}
)||[]}
,only:function(s){
if(!Iu(s))throw Error("React.Children.only expected to receive a single React element child.");
return s}
}
;
ie.Component=qi;
ie.Fragment=pp;
ie.Profiler=vp;
ie.PureComponent=Eu;
ie.StrictMode=yp;
ie.Suspense=Tp;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kp;
ie.act=_f;
ie.cloneElement=function(s,e,t){
if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");
var i=Sf({
}
,s.props),n=s.key,r=s.ref,a=s._owner;
if(e!=null){
if(e.ref!==void 0&&(r=e.ref,a=Tu.current),e.key!==void 0&&(n=""+e.key),s.type&&s.type.defaultProps)var o=s.type.defaultProps;
for(u in e)Lf.call(e,u)&&!Af.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&o!==void 0?o[u]:e[u])}
var u=arguments.length-2;
if(u===1)i.children=t;
else if(1<u){
o=Array(u);
for(var l=0;
l<u;
l++)o[l]=arguments[l+2];
i.children=o}
return{
$$typeof:Zn,type:s.type,key:n,ref:r,props:i,_owner:a}
}
;
ie.createContext=function(s){
return s={
$$typeof:Ep,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}
,s.Provider={
$$typeof:xp,_context:s}
,s.Consumer=s}
;
ie.createElement=Rf;
ie.createFactory=function(s){
var e=Rf.bind(null,s);
return e.type=s,e}
;
ie.createRef=function(){
return{
current:null}
}
;
ie.forwardRef=function(s){
return{
$$typeof:Sp,render:s}
}
;
ie.isValidElement=Iu;
ie.lazy=function(s){
return{
$$typeof:Lp,_payload:{
_status:-1,_result:s}
,_init:wp}
}
;
ie.memo=function(s,e){
return{
$$typeof:Ip,type:s,compare:e===void 0?null:e}
}
;
ie.startTransition=function(s){
var e=Br.transition;
Br.transition={
}
;
try{
s()}
finally{
Br.transition=e}
}
;
ie.unstable_act=_f;
ie.useCallback=function(s,e){
return Xe.current.useCallback(s,e)}
;
ie.useContext=function(s){
return Xe.current.useContext(s)}
;
ie.useDebugValue=function(){
}
;
ie.useDeferredValue=function(s){
return Xe.current.useDeferredValue(s)}
;
ie.useEffect=function(s,e){
return Xe.current.useEffect(s,e)}
;
ie.useId=function(){
return Xe.current.useId()}
;
ie.useImperativeHandle=function(s,e,t){
return Xe.current.useImperativeHandle(s,e,t)}
;
ie.useInsertionEffect=function(s,e){
return Xe.current.useInsertionEffect(s,e)}
;
ie.useLayoutEffect=function(s,e){
return Xe.current.useLayoutEffect(s,e)}
;
ie.useMemo=function(s,e){
return Xe.current.useMemo(s,e)}
;
ie.useReducer=function(s,e,t){
return Xe.current.useReducer(s,e,t)}
;
ie.useRef=function(s){
return Xe.current.useRef(s)}
;
ie.useState=function(s){
return Xe.current.useState(s)}
;
ie.useSyncExternalStore=function(s,e,t){
return Xe.current.useSyncExternalStore(s,e,t)}
;
ie.useTransition=function(){
return Xe.current.useTransition()}
;
ie.version="18.3.1";
xf.exports=ie;
var Re=xf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp=Re,Cp=Symbol.for("react.element"),Dp=Symbol.for("react.fragment"),Pp=Object.prototype.hasOwnProperty,Np=bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Op={
key:!0,ref:!0,__self:!0,__source:!0}
;
function wf(s,e,t){
var i,n={
}
,r=null,a=null;
t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);
for(i in e)Pp.call(e,i)&&!Op.hasOwnProperty(i)&&(n[i]=e[i]);
if(s&&s.defaultProps)for(i in e=s.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);
return{
$$typeof:Cp,type:s,key:r,ref:a,props:n,_owner:Np.current}
}
ja.Fragment=Dp;
ja.jsx=wf;
ja.jsxs=wf;
vf.exports=ja;
var g=vf.exports,kf={
exports:{
}
}
,pt={
}
,bf={
exports:{
}
}
,Cf={
}
;
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(s){
function e(C,N){
var B=C.length;
C.push(N);
e:for(;
0<B;
){
var O=B-1>>>1,M=C[O];
if(0<n(M,N))C[O]=N,C[B]=M,B=O;
else break e}
}
function t(C){
return C.length===0?null:C[0]}
function i(C){
if(C.length===0)return null;
var N=C[0],B=C.pop();
if(B!==N){
C[0]=B;
e:for(var O=0,M=C.length,Q=M>>>1;
O<Q;
){
var te=2*(O+1)-1,Z=C[te],J=te+1,Ie=C[J];
if(0>n(Z,B))J<M&&0>n(Ie,Z)?(C[O]=Ie,C[J]=B,O=J):(C[O]=Z,C[te]=B,O=te);
else if(J<M&&0>n(Ie,B))C[O]=Ie,C[J]=B,O=J;
else break e}
}
return N}
function n(C,N){
var B=C.sortIndex-N.sortIndex;
return B!==0?B:C.id-N.id}
if(typeof performance=="object"&&typeof performance.now=="function"){
var r=performance;
s.unstable_now=function(){
return r.now()}
}
else{
var a=Date,o=a.now();
s.unstable_now=function(){
return a.now()-o}
}
var u=[],l=[],c=1,d=null,h=3,f=!1,m=!1,p=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;
typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);
function S(C){
for(var N=t(l);
N!==null;
){
if(N.callback===null)i(l);
else if(N.startTime<=C)i(l),N.sortIndex=N.expirationTime,e(u,N);
else break;
N=t(l)}
}
function T(C){
if(p=!1,S(C),!m)if(t(u)!==null)m=!0,U(I);
else{
var N=t(l);
N!==null&&K(T,N.startTime-C)}
}
function I(C,N){
m=!1,p&&(p=!1,v(R),R=-1),f=!0;
var B=h;
try{
for(S(N),d=t(u);
d!==null&&(!(d.expirationTime>N)||C&&!D());
){
var O=d.callback;
if(typeof O=="function"){
d.callback=null,h=d.priorityLevel;
var M=O(d.expirationTime<=N);
N=s.unstable_now(),typeof M=="function"?d.callback=M:d===t(u)&&i(u),S(N)}
else i(u);
d=t(u)}
if(d!==null)var Q=!0;
else{
var te=t(l);
te!==null&&K(T,te.startTime-N),Q=!1}
return Q}
finally{
d=null,h=B,f=!1}
}
var _=!1,L=null,R=-1,w=5,A=-1;
function D(){
return!(s.unstable_now()-A<w)}
function $(){
if(L!==null){
var C=s.unstable_now();
A=C;
var N=!0;
try{
N=L(!0,C)}
finally{
N?G():(_=!1,L=null)}
}
else _=!1}
var G;
if(typeof y=="function")G=function(){
y($)}
;
else if(typeof MessageChannel<"u"){
var W=new MessageChannel,V=W.port2;
W.port1.onmessage=$,G=function(){
V.postMessage(null)}
}
else G=function(){
E($,0)}
;
function U(C){
L=C,_||(_=!0,G())}
function K(C,N){
R=E(function(){
C(s.unstable_now())}
,N)}
s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){
C.callback=null}
,s.unstable_continueExecution=function(){
m||f||(m=!0,U(I))}
,s.unstable_forceFrameRate=function(C){
0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<C?Math.floor(1e3/C):5}
,s.unstable_getCurrentPriorityLevel=function(){
return h}
,s.unstable_getFirstCallbackNode=function(){
return t(u)}
,s.unstable_next=function(C){
switch(h){
case 1:case 2:case 3:var N=3;
break;
default:N=h}
var B=h;
h=N;
try{
return C()}
finally{
h=B}
}
,s.unstable_pauseExecution=function(){
}
,s.unstable_requestPaint=function(){
}
,s.unstable_runWithPriority=function(C,N){
switch(C){
case 1:case 2:case 3:case 4:case 5:break;
default:C=3}
var B=h;
h=C;
try{
return N()}
finally{
h=B}
}
,s.unstable_scheduleCallback=function(C,N,B){
var O=s.unstable_now();
switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?O+B:O):B=O,C){
case 1:var M=-1;
break;
case 2:M=250;
break;
case 5:M=1073741823;
break;
case 4:M=1e4;
break;
default:M=5e3}
return M=B+M,C={
id:c++,callback:N,priorityLevel:C,startTime:B,expirationTime:M,sortIndex:-1}
,B>O?(C.sortIndex=B,e(l,C),t(u)===null&&C===t(l)&&(p?(v(R),R=-1):p=!0,K(T,B-O))):(C.sortIndex=M,e(u,C),m||f||(m=!0,U(I))),C}
,s.unstable_shouldYield=D,s.unstable_wrapCallback=function(C){
var N=h;
return function(){
var B=h;
h=N;
try{
return C.apply(this,arguments)}
finally{
h=B}
}
}
}
)(Cf);
bf.exports=Cf;
var Mp=bf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=Re,gt=Mp;
function F(s){
for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+s,t=1;
t<arguments.length;
t++)e+="&args[]="+encodeURIComponent(arguments[t]);
return"Minified React error #"+s+";
 visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var Df=new Set,wn={
}
;
function oi(s,e){
$i(s,e),$i(s+"Capture",e)}
function $i(s,e){
for(wn[s]=e,s=0;
s<e.length;
s++)Df.add(e[s])}
var ls=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,Up=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wc={
}
,Yc={
}
;
function Bp(s){
return ol.call(Yc,s)?!0:ol.call(Wc,s)?!1:Up.test(s)?Yc[s]=!0:(Wc[s]=!0,!1)}
function $p(s,e,t,i){
if(t!==null&&t.type===0)return!1;
switch(typeof e){
case"function":case"symbol":return!0;
case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");
default:return!1}
}
function jp(s,e,t,i){
if(e===null||typeof e>"u"||$p(s,e,t,i))return!0;
if(i)return!1;
if(t!==null)switch(t.type){
case 3:return!e;
case 4:return e===!1;
case 5:return isNaN(e);
case 6:return isNaN(e)||1>e}
return!1}
function Ze(s,e,t,i,n,r,a){
this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=s,this.type=e,this.sanitizeURL=r,this.removeEmptyString=a}
var Ge={
}
;
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){
Ge[s]=new Ze(s,0,!1,s,null,!1,!1)}
);
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){
var e=s[0];
Ge[e]=new Ze(e,1,!1,s[1],null,!1,!1)}
);
["contentEditable","draggable","spellCheck","value"].forEach(function(s){
Ge[s]=new Ze(s,2,!1,s.toLowerCase(),null,!1,!1)}
);
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){
Ge[s]=new Ze(s,2,!1,s,null,!1,!1)}
);
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){
Ge[s]=new Ze(s,3,!1,s.toLowerCase(),null,!1,!1)}
);
["checked","multiple","muted","selected"].forEach(function(s){
Ge[s]=new Ze(s,3,!0,s,null,!1,!1)}
);
["capture","download"].forEach(function(s){
Ge[s]=new Ze(s,4,!1,s,null,!1,!1)}
);
["cols","rows","size","span"].forEach(function(s){
Ge[s]=new Ze(s,6,!1,s,null,!1,!1)}
);
["rowSpan","start"].forEach(function(s){
Ge[s]=new Ze(s,5,!1,s.toLowerCase(),null,!1,!1)}
);
var Lu=/[\-:]([a-z])/g;
function Au(s){
return s[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){
var e=s.replace(Lu,Au);
Ge[e]=new Ze(e,1,!1,s,null,!1,!1)}
);
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){
var e=s.replace(Lu,Au);
Ge[e]=new Ze(e,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}
);
["xml:base","xml:lang","xml:space"].forEach(function(s){
var e=s.replace(Lu,Au);
Ge[e]=new Ze(e,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}
);
["tabIndex","crossOrigin"].forEach(function(s){
Ge[s]=new Ze(s,1,!1,s.toLowerCase(),null,!1,!1)}
);
Ge.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src","href","action","formAction"].forEach(function(s){
Ge[s]=new Ze(s,1,!1,s.toLowerCase(),null,!0,!0)}
);
function Ru(s,e,t,i){
var n=Ge.hasOwnProperty(e)?Ge[e]:null;
(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jp(e,t,n,i)&&(t=null),i||n===null?Bp(e)&&(t===null?s.removeAttribute(e):s.setAttribute(e,""+t)):n.mustUseProperty?s[n.propertyName]=t===null?n.type===3?!1:"":t:(e=n.attributeName,i=n.attributeNamespace,t===null?s.removeAttribute(e):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,i?s.setAttributeNS(i,e,t):s.setAttribute(e,t))))}
var hs=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),yi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),cl=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),ps=Symbol.for("react.lazy"),Of=Symbol.for("react.offscreen"),qc=Symbol.iterator;
function en(s){
return s===null||typeof s!="object"?null:(s=qc&&s[qc]||s["@@iterator"],typeof s=="function"?s:null)}
var Ee=Object.assign,uo;
function cn(s){
if(uo===void 0)try{
throw Error()}
catch(t){
var e=t.stack.trim().match(/\n( *(at )?)/);
uo=e&&e[1]||""}
return`
`+uo+s}
var co=!1;
function ho(s,e){
if(!s||co)return"";
co=!0;
var t=Error.prepareStackTrace;
Error.prepareStackTrace=void 0;
try{
if(e)if(e=function(){
throw Error()}
,Object.defineProperty(e.prototype,"props",{
set:function(){
throw Error()}
}
),typeof Reflect=="object"&&Reflect.construct){
try{
Reflect.construct(e,[])}
catch(l){
var i=l}
Reflect.construct(s,[],e)}
else{
try{
e.call()}
catch(l){
i=l}
s.call(e.prototype)}
else{
try{
throw Error()}
catch(l){
i=l}
s()}
}
catch(l){
if(l&&i&&typeof l.stack=="string"){
for(var n=l.stack.split(`
`),r=i.stack.split(`
`),a=n.length-1,o=r.length-1;
1<=a&&0<=o&&n[a]!==r[o];
)o--;
for(;
1<=a&&0<=o;
a--,o--)if(n[a]!==r[o]){
if(a!==1||o!==1)do if(a--,o--,0>o||n[a]!==r[o]){
var u=`
`+n[a].replace(" at new "," at ");
return s.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",s.displayName)),u}
while(1<=a&&0<=o);
break}
}
}
finally{
co=!1,Error.prepareStackTrace=t}
return(s=s?s.displayName||s.name:"")?cn(s):""}
function Gp(s){
switch(s.tag){
case 5:return cn(s.type);
case 16:return cn("Lazy");
case 13:return cn("Suspense");
case 19:return cn("SuspenseList");
case 0:case 2:case 15:return s=ho(s.type,!1),s;
case 11:return s=ho(s.type.render,!1),s;
case 1:return s=ho(s.type,!0),s;
default:return""}
}
function dl(s){
if(s==null)return null;
if(typeof s=="function")return s.displayName||s.name||null;
if(typeof s=="string")return s;
switch(s){
case vi:return"Fragment";
case yi:return"Portal";
case ll:return"Profiler";
case _u:return"StrictMode";
case ul:return"Suspense";
case cl:return"SuspenseList"}
if(typeof s=="object")switch(s.$$typeof){
case Nf:return(s.displayName||"Context")+".Consumer";
case Pf:return(s._context.displayName||"Context")+".Provider";
case wu:var e=s.render;
return s=s.displayName,s||(s=e.displayName||e.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;
case ku:return e=s.displayName||null,e!==null?e:dl(s.type)||"Memo";
case ps:e=s._payload,s=s._init;
try{
return dl(s(e))}
catch{
}
}
return null}
function Vp(s){
var e=s.type;
switch(s.tag){
case 24:return"Cache";
case 9:return(e.displayName||"Context")+".Consumer";
case 10:return(e._context.displayName||"Context")+".Provider";
case 18:return"DehydratedFragment";
case 11:return s=e.render,s=s.displayName||s.name||"",e.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");
case 7:return"Fragment";
case 5:return e;
case 4:return"Portal";
case 3:return"Root";
case 6:return"Text";
case 16:return dl(e);
case 8:return e===_u?"StrictMode":"Mode";
case 22:return"Offscreen";
case 12:return"Profiler";
case 21:return"Scope";
case 13:return"Suspense";
case 19:return"SuspenseList";
case 25:return"TracingMarker";
case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;
if(typeof e=="string")return e}
return null}
function Ps(s){
switch(typeof s){
case"boolean":case"number":case"string":case"undefined":return s;
case"object":return s;
default:return""}
}
function Mf(s){
var e=s.type;
return(s=s.nodeName)&&s.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}
function Kp(s){
var e=Mf(s)?"checked":"value",t=Object.getOwnPropertyDescriptor(s.constructor.prototype,e),i=""+s[e];
if(!s.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){
var n=t.get,r=t.set;
return Object.defineProperty(s,e,{
configurable:!0,get:function(){
return n.call(this)}
,set:function(a){
i=""+a,r.call(this,a)}
}
),Object.defineProperty(s,e,{
enumerable:t.enumerable}
),{
getValue:function(){
return i}
,setValue:function(a){
i=""+a}
,stopTracking:function(){
s._valueTracker=null,delete s[e]}
}
}
}
function or(s){
s._valueTracker||(s._valueTracker=Kp(s))}
function Ff(s){
if(!s)return!1;
var e=s._valueTracker;
if(!e)return!0;
var t=e.getValue(),i="";
return s&&(i=Mf(s)?s.checked?"true":"false":s.value),s=i,s!==t?(e.setValue(s),!0):!1}
function ra(s){
if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;
try{
return s.activeElement||s.body}
catch{
return s.body}
}
function hl(s,e){
var t=e.checked;
return Ee({
}
,e,{
defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??s._wrapperState.initialChecked}
)}
function Qc(s,e){
var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;
t=Ps(e.value!=null?e.value:t),s._wrapperState={
initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}
}
function Uf(s,e){
e=e.checked,e!=null&&Ru(s,"checked",e,!1)}
function fl(s,e){
Uf(s,e);
var t=Ps(e.value),i=e.type;
if(t!=null)i==="number"?(t===0&&s.value===""||s.value!=t)&&(s.value=""+t):s.value!==""+t&&(s.value=""+t);
else if(i==="submit"||i==="reset"){
s.removeAttribute("value");
return}
e.hasOwnProperty("value")?ml(s,e.type,t):e.hasOwnProperty("defaultValue")&&ml(s,e.type,Ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(s.defaultChecked=!!e.defaultChecked)}
function Xc(s,e,t){
if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){
var i=e.type;
if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;
e=""+s._wrapperState.initialValue,t||e===s.value||(s.value=e),s.defaultValue=e}
t=s.name,t!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,t!==""&&(s.name=t)}
function ml(s,e,t){
(e!=="number"||ra(s.ownerDocument)!==s)&&(t==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+t&&(s.defaultValue=""+t))}
var dn=Array.isArray;
function bi(s,e,t,i){
if(s=s.options,e){
e={
}
;
for(var n=0;
n<t.length;
n++)e["$"+t[n]]=!0;
for(t=0;
t<s.length;
t++)n=e.hasOwnProperty("$"+s[t].value),s[t].selected!==n&&(s[t].selected=n),n&&i&&(s[t].defaultSelected=!0)}
else{
for(t=""+Ps(t),e=null,n=0;
n<s.length;
n++){
if(s[n].value===t){
s[n].selected=!0,i&&(s[n].defaultSelected=!0);
return}
e!==null||s[n].disabled||(e=s[n])}
e!==null&&(e.selected=!0)}
}
function gl(s,e){
if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));
return Ee({
}
,e,{
value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue}
)}
function Zc(s,e){
var t=e.value;
if(t==null){
if(t=e.children,e=e.defaultValue,t!=null){
if(e!=null)throw Error(F(92));
if(dn(t)){
if(1<t.length)throw Error(F(93));
t=t[0]}
e=t}
e==null&&(e=""),t=e}
s._wrapperState={
initialValue:Ps(t)}
}
function Bf(s,e){
var t=Ps(e.value),i=Ps(e.defaultValue);
t!=null&&(t=""+t,t!==s.value&&(s.value=t),e.defaultValue==null&&s.defaultValue!==t&&(s.defaultValue=t)),i!=null&&(s.defaultValue=""+i)}
function Jc(s){
var e=s.textContent;
e===s._wrapperState.initialValue&&e!==""&&e!==null&&(s.value=e)}
function $f(s){
switch(s){
case"svg":return"http://www.w3.org/2000/svg";
case"math":return"http://www.w3.org/1998/Math/MathML";
default:return"http://www.w3.org/1999/xhtml"}
}
function pl(s,e){
return s==null||s==="http://www.w3.org/1999/xhtml"?$f(e):s==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":s}
var lr,jf=function(s){
return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,n){
MSApp.execUnsafeLocalFunction(function(){
return s(e,t,i,n)}
)}
:s}
(function(s,e){
if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=e;
else{
for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lr.firstChild;
s.firstChild;
)s.removeChild(s.firstChild);
for(;
e.firstChild;
)s.appendChild(e.firstChild)}
}
);
function kn(s,e){
if(e){
var t=s.firstChild;
if(t&&t===s.lastChild&&t.nodeType===3){
t.nodeValue=e;
return}
}
s.textContent=e}
var gn={
animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0}
,Hp=["Webkit","ms","Moz","O"];
Object.keys(gn).forEach(function(s){
Hp.forEach(function(e){
e=e+s.charAt(0).toUpperCase()+s.substring(1),gn[e]=gn[s]}
)}
);
function Gf(s,e,t){
return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||gn.hasOwnProperty(s)&&gn[s]?(""+e).trim():e+"px"}
function Vf(s,e){
s=s.style;
for(var t in e)if(e.hasOwnProperty(t)){
var i=t.indexOf("--")===0,n=Gf(t,e[t],i);
t==="float"&&(t="cssFloat"),i?s.setProperty(t,n):s[t]=n}
}
var zp=Ee({
menuitem:!0}
,{
area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
);
function yl(s,e){
if(e){
if(zp[s]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,s));
if(e.dangerouslySetInnerHTML!=null){
if(e.children!=null)throw Error(F(60));
if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}
if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}
}
function vl(s,e){
if(s.indexOf("-")===-1)return typeof e.is=="string";
switch(s){
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
default:return!0}
}
var xl=null;
function bu(s){
return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}
var El=null,Ci=null,Di=null;
function ed(s){
if(s=tr(s)){
if(typeof El!="function")throw Error(F(280));
var e=s.stateNode;
e&&(e=za(e),El(s.stateNode,s.type,e))}
}
function Kf(s){
Ci?Di?Di.push(s):Di=[s]:Ci=s}
function Hf(){
if(Ci){
var s=Ci,e=Di;
if(Di=Ci=null,ed(s),e)for(s=0;
s<e.length;
s++)ed(e[s])}
}
function zf(s,e){
return s(e)}
function Wf(){
}
var fo=!1;
function Yf(s,e,t){
if(fo)return s(e,t);
fo=!0;
try{
return zf(s,e,t)}
finally{
fo=!1,(Ci!==null||Di!==null)&&(Wf(),Hf())}
}
function bn(s,e){
var t=s.stateNode;
if(t===null)return null;
var i=za(t);
if(i===null)return null;
t=i[e];
e:switch(e){
case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(s=s.type,i=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!i;
break e;
default:s=!1}
if(s)return null;
if(t&&typeof t!="function")throw Error(F(231,e,typeof t));
return t}
var Sl=!1;
if(ls)try{
var tn={
}
;
Object.defineProperty(tn,"passive",{
get:function(){
Sl=!0}
}
),window.addEventListener("test",tn,tn),window.removeEventListener("test",tn,tn)}
catch{
Sl=!1}
function Wp(s,e,t,i,n,r,a,o,u){
var l=Array.prototype.slice.call(arguments,3);
try{
e.apply(t,l)}
catch(c){
this.onError(c)}
}
var pn=!1,aa=null,oa=!1,Tl=null,Yp={
onError:function(s){
pn=!0,aa=s}
}
;
function qp(s,e,t,i,n,r,a,o,u){
pn=!1,aa=null,Wp.apply(Yp,arguments)}
function Qp(s,e,t,i,n,r,a,o,u){
if(qp.apply(this,arguments),pn){
if(pn){
var l=aa;
pn=!1,aa=null}
else throw Error(F(198));
oa||(oa=!0,Tl=l)}
}
function li(s){
var e=s,t=s;
if(s.alternate)for(;
e.return;
)e=e.return;
else{
s=e;
do e=s,e.flags&4098&&(t=e.return),s=e.return;
while(s)}
return e.tag===3?t:null}
function qf(s){
if(s.tag===13){
var e=s.memoizedState;
if(e===null&&(s=s.alternate,s!==null&&(e=s.memoizedState)),e!==null)return e.dehydrated}
return null}
function td(s){
if(li(s)!==s)throw Error(F(188))}
function Xp(s){
var e=s.alternate;
if(!e){
if(e=li(s),e===null)throw Error(F(188));
return e!==s?null:s}
for(var t=s,i=e;
;
){
var n=t.return;
if(n===null)break;
var r=n.alternate;
if(r===null){
if(i=n.return,i!==null){
t=i;
continue}
break}
if(n.child===r.child){
for(r=n.child;
r;
){
if(r===t)return td(n),s;
if(r===i)return td(n),e;
r=r.sibling}
throw Error(F(188))}
if(t.return!==i.return)t=n,i=r;
else{
for(var a=!1,o=n.child;
o;
){
if(o===t){
a=!0,t=n,i=r;
break}
if(o===i){
a=!0,i=n,t=r;
break}
o=o.sibling}
if(!a){
for(o=r.child;
o;
){
if(o===t){
a=!0,t=r,i=n;
break}
if(o===i){
a=!0,i=r,t=n;
break}
o=o.sibling}
if(!a)throw Error(F(189))}
}
if(t.alternate!==i)throw Error(F(190))}
if(t.tag!==3)throw Error(F(188));
return t.stateNode.current===t?s:e}
function Qf(s){
return s=Xp(s),s!==null?Xf(s):null}
function Xf(s){
if(s.tag===5||s.tag===6)return s;
for(s=s.child;
s!==null;
){
var e=Xf(s);
if(e!==null)return e;
s=s.sibling}
return null}
var Zf=gt.unstable_scheduleCallback,sd=gt.unstable_cancelCallback,Zp=gt.unstable_shouldYield,Jp=gt.unstable_requestPaint,Le=gt.unstable_now,ey=gt.unstable_getCurrentPriorityLevel,Cu=gt.unstable_ImmediatePriority,Jf=gt.unstable_UserBlockingPriority,la=gt.unstable_NormalPriority,ty=gt.unstable_LowPriority,e0=gt.unstable_IdlePriority,Ga=null,Yt=null;
function sy(s){
if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{
Yt.onCommitFiberRoot(Ga,s,void 0,(s.current.flags&128)===128)}
catch{
}
}
var Ot=Math.clz32?Math.clz32:ry,iy=Math.log,ny=Math.LN2;
function ry(s){
return s>>>=0,s===0?32:31-(iy(s)/ny|0)|0}
var ur=64,cr=4194304;
function hn(s){
switch(s&-s){
case 1:return 1;
case 2:return 2;
case 4:return 4;
case 8:return 8;
case 16:return 16;
case 32:return 32;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;
case 134217728:return 134217728;
case 268435456:return 268435456;
case 536870912:return 536870912;
case 1073741824:return 1073741824;
default:return s}
}
function ua(s,e){
var t=s.pendingLanes;
if(t===0)return 0;
var i=0,n=s.suspendedLanes,r=s.pingedLanes,a=t&268435455;
if(a!==0){
var o=a&~n;
o!==0?i=hn(o):(r&=a,r!==0&&(i=hn(r)))}
else a=t&~n,a!==0?i=hn(a):r!==0&&(i=hn(r));
if(i===0)return 0;
if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,r=e&-e,n>=r||n===16&&(r&4194240)!==0))return e;
if(i&4&&(i|=t&16),e=s.entangledLanes,e!==0)for(s=s.entanglements,e&=i;
0<e;
)t=31-Ot(e),n=1<<t,i|=s[t],e&=~n;
return i}
function ay(s,e){
switch(s){
case 1:case 2:case 4:return e+250;
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
default:return-1}
}
function oy(s,e){
for(var t=s.suspendedLanes,i=s.pingedLanes,n=s.expirationTimes,r=s.pendingLanes;
0<r;
){
var a=31-Ot(r),o=1<<a,u=n[a];
u===-1?(!(o&t)||o&i)&&(n[a]=ay(o,e)):u<=e&&(s.expiredLanes|=o),r&=~o}
}
function Il(s){
return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}
function t0(){
var s=ur;
return ur<<=1,!(ur&4194240)&&(ur=64),s}
function mo(s){
for(var e=[],t=0;
31>t;
t++)e.push(s);
return e}
function Jn(s,e,t){
s.pendingLanes|=e,e!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,e=31-Ot(e),s[e]=t}
function ly(s,e){
var t=s.pendingLanes&~e;
s.pendingLanes=e,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=e,s.mutableReadLanes&=e,s.entangledLanes&=e,e=s.entanglements;
var i=s.eventTimes;
for(s=s.expirationTimes;
0<t;
){
var n=31-Ot(t),r=1<<n;
e[n]=0,i[n]=-1,s[n]=-1,t&=~r}
}
function Du(s,e){
var t=s.entangledLanes|=e;
for(s=s.entanglements;
t;
){
var i=31-Ot(t),n=1<<i;
n&e|s[i]&e&&(s[i]|=e),t&=~n}
}
var le=0;
function s0(s){
return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}
var i0,Pu,n0,r0,a0,Ll=!1,dr=[],Ls=null,As=null,Rs=null,Cn=new Map,Dn=new Map,Es=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function id(s,e){
switch(s){
case"focusin":case"focusout":Ls=null;
break;
case"dragenter":case"dragleave":As=null;
break;
case"mouseover":case"mouseout":Rs=null;
break;
case"pointerover":case"pointerout":Cn.delete(e.pointerId);
break;
case"gotpointercapture":case"lostpointercapture":Dn.delete(e.pointerId)}
}
function sn(s,e,t,i,n,r){
return s===null||s.nativeEvent!==r?(s={
blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:r,targetContainers:[n]}
,e!==null&&(e=tr(e),e!==null&&Pu(e)),s):(s.eventSystemFlags|=i,e=s.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),s)}
function cy(s,e,t,i,n){
switch(e){
case"focusin":return Ls=sn(Ls,s,e,t,i,n),!0;
case"dragenter":return As=sn(As,s,e,t,i,n),!0;
case"mouseover":return Rs=sn(Rs,s,e,t,i,n),!0;
case"pointerover":var r=n.pointerId;
return Cn.set(r,sn(Cn.get(r)||null,s,e,t,i,n)),!0;
case"gotpointercapture":return r=n.pointerId,Dn.set(r,sn(Dn.get(r)||null,s,e,t,i,n)),!0}
return!1}
function o0(s){
var e=Ys(s.target);
if(e!==null){
var t=li(e);
if(t!==null){
if(e=t.tag,e===13){
if(e=qf(t),e!==null){
s.blockedOn=e,a0(s.priority,function(){
n0(t)}
);
return}
}
else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){
s.blockedOn=t.tag===3?t.stateNode.containerInfo:null;
return}
}
}
s.blockedOn=null}
function $r(s){
if(s.blockedOn!==null)return!1;
for(var e=s.targetContainers;
0<e.length;
){
var t=Al(s.domEventName,s.eventSystemFlags,e[0],s.nativeEvent);
if(t===null){
t=s.nativeEvent;
var i=new t.constructor(t.type,t);
xl=i,t.target.dispatchEvent(i),xl=null}
else return e=tr(t),e!==null&&Pu(e),s.blockedOn=t,!1;
e.shift()}
return!0}
function nd(s,e,t){
$r(s)&&t.delete(e)}
function dy(){
Ll=!1,Ls!==null&&$r(Ls)&&(Ls=null),As!==null&&$r(As)&&(As=null),Rs!==null&&$r(Rs)&&(Rs=null),Cn.forEach(nd),Dn.forEach(nd)}
function nn(s,e){
s.blockedOn===e&&(s.blockedOn=null,Ll||(Ll=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,dy)))}
function Pn(s){
function e(n){
return nn(n,s)}
if(0<dr.length){
nn(dr[0],s);
for(var t=1;
t<dr.length;
t++){
var i=dr[t];
i.blockedOn===s&&(i.blockedOn=null)}
}
for(Ls!==null&&nn(Ls,s),As!==null&&nn(As,s),Rs!==null&&nn(Rs,s),Cn.forEach(e),Dn.forEach(e),t=0;
t<Es.length;
t++)i=Es[t],i.blockedOn===s&&(i.blockedOn=null);
for(;
0<Es.length&&(t=Es[0],t.blockedOn===null);
)o0(t),t.blockedOn===null&&Es.shift()}
var Pi=hs.ReactCurrentBatchConfig,ca=!0;
function hy(s,e,t,i){
var n=le,r=Pi.transition;
Pi.transition=null;
try{
le=1,Nu(s,e,t,i)}
finally{
le=n,Pi.transition=r}
}
function fy(s,e,t,i){
var n=le,r=Pi.transition;
Pi.transition=null;
try{
le=4,Nu(s,e,t,i)}
finally{
le=n,Pi.transition=r}
}
function Nu(s,e,t,i){
if(ca){
var n=Al(s,e,t,i);
if(n===null)Lo(s,e,i,da,t),id(s,i);
else if(cy(n,s,e,t,i))i.stopPropagation();
else if(id(s,i),e&4&&-1<uy.indexOf(s)){
for(;
n!==null;
){
var r=tr(n);
if(r!==null&&i0(r),r=Al(s,e,t,i),r===null&&Lo(s,e,i,da,t),r===n)break;
n=r}
n!==null&&i.stopPropagation()}
else Lo(s,e,i,null,t)}
}
var da=null;
function Al(s,e,t,i){
if(da=null,s=bu(i),s=Ys(s),s!==null)if(e=li(s),e===null)s=null;
else if(t=e.tag,t===13){
if(s=qf(e),s!==null)return s;
s=null}
else if(t===3){
if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;
s=null}
else e!==s&&(s=null);
return da=s,null}
function l0(s){
switch(s){
case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;
case"message":switch(ey()){
case Cu:return 1;
case Jf:return 4;
case la:case ty:return 16;
case e0:return 536870912;
default:return 16}
default:return 16}
}
var Ts=null,Ou=null,jr=null;
function u0(){
if(jr)return jr;
var s,e=Ou,t=e.length,i,n="value"in Ts?Ts.value:Ts.textContent,r=n.length;
for(s=0;
s<t&&e[s]===n[s];
s++);
var a=t-s;
for(i=1;
i<=a&&e[t-i]===n[r-i];
i++);
return jr=n.slice(s,1<i?1-i:void 0)}
function Gr(s){
var e=s.keyCode;
return"charCode"in s?(s=s.charCode,s===0&&e===13&&(s=13)):s=e,s===10&&(s=13),32<=s||s===13?s:0}
function hr(){
return!0}
function rd(){
return!1}
function yt(s){
function e(t,i,n,r,a){
this._reactName=t,this._targetInst=n,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;
for(var o in s)s.hasOwnProperty(o)&&(t=s[o],this[o]=t?t(r):r[o]);
return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hr:rd,this.isPropagationStopped=rd,this}
return Ee(e.prototype,{
preventDefault:function(){
this.defaultPrevented=!0;
var t=this.nativeEvent;
t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hr)}
,stopPropagation:function(){
var t=this.nativeEvent;
t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hr)}
,persist:function(){
}
,isPersistent:hr}
),e}
var Qi={
eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){
return s.timeStamp||Date.now()}
,defaultPrevented:0,isTrusted:0}
,Mu=yt(Qi),er=Ee({
}
,Qi,{
view:0,detail:0}
),my=yt(er),go,po,rn,Va=Ee({
}
,er,{
screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(s){
return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget}
,movementX:function(s){
return"movementX"in s?s.movementX:(s!==rn&&(rn&&s.type==="mousemove"?(go=s.screenX-rn.screenX,po=s.screenY-rn.screenY):po=go=0,rn=s),go)}
,movementY:function(s){
return"movementY"in s?s.movementY:po}
}
),ad=yt(Va),gy=Ee({
}
,Va,{
dataTransfer:0}
),py=yt(gy),yy=Ee({
}
,er,{
relatedTarget:0}
),yo=yt(yy),vy=Ee({
}
,Qi,{
animationName:0,elapsedTime:0,pseudoElement:0}
),xy=yt(vy),Ey=Ee({
}
,Qi,{
clipboardData:function(s){
return"clipboardData"in s?s.clipboardData:window.clipboardData}
}
),Sy=yt(Ey),Ty=Ee({
}
,Qi,{
data:0}
),od=yt(Ty),Iy={
Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"}
,Ly={
8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"}
,Ay={
Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
;
function Ry(s){
var e=this.nativeEvent;
return e.getModifierState?e.getModifierState(s):(s=Ay[s])?!!e[s]:!1}
function Fu(){
return Ry}
var _y=Ee({
}
,er,{
key:function(s){
if(s.key){
var e=Iy[s.key]||s.key;
if(e!=="Unidentified")return e}
return s.type==="keypress"?(s=Gr(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?Ly[s.keyCode]||"Unidentified":""}
,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(s){
return s.type==="keypress"?Gr(s):0}
,keyCode:function(s){
return s.type==="keydown"||s.type==="keyup"?s.keyCode:0}
,which:function(s){
return s.type==="keypress"?Gr(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}
}
),wy=yt(_y),ky=Ee({
}
,Va,{
pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}
),ld=yt(ky),by=Ee({
}
,er,{
touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}
),Cy=yt(by),Dy=Ee({
}
,Qi,{
propertyName:0,elapsedTime:0,pseudoElement:0}
),Py=yt(Dy),Ny=Ee({
}
,Va,{
deltaX:function(s){
return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0}
,deltaY:function(s){
return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0}
,deltaZ:0,deltaMode:0}
),Oy=yt(Ny),My=[9,13,27,32],Uu=ls&&"CompositionEvent"in window,yn=null;
ls&&"documentMode"in document&&(yn=document.documentMode);
var Fy=ls&&"TextEvent"in window&&!yn,c0=ls&&(!Uu||yn&&8<yn&&11>=yn),ud=" ",cd=!1;
function d0(s,e){
switch(s){
case"keyup":return My.indexOf(e.keyCode)!==-1;
case"keydown":return e.keyCode!==229;
case"keypress":case"mousedown":case"focusout":return!0;
default:return!1}
}
function h0(s){
return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}
var xi=!1;
function Uy(s,e){
switch(s){
case"compositionend":return h0(e);
case"keypress":return e.which!==32?null:(cd=!0,ud);
case"textInput":return s=e.data,s===ud&&cd?null:s;
default:return null}
}
function By(s,e){
if(xi)return s==="compositionend"||!Uu&&d0(s,e)?(s=u0(),jr=Ou=Ts=null,xi=!1,s):null;
switch(s){
case"paste":return null;
case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){
if(e.char&&1<e.char.length)return e.char;
if(e.which)return String.fromCharCode(e.which)}
return null;
case"compositionend":return c0&&e.locale!=="ko"?null:e.data;
default:return null}
}
var $y={
color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
;
function dd(s){
var e=s&&s.nodeName&&s.nodeName.toLowerCase();
return e==="input"?!!$y[s.type]:e==="textarea"}
function f0(s,e,t,i){
Kf(i),e=ha(e,"onChange"),0<e.length&&(t=new Mu("onChange","change",null,t,i),s.push({
event:t,listeners:e}
))}
var vn=null,Nn=null;
function jy(s){
L0(s,0)}
function Ka(s){
var e=Ti(s);
if(Ff(e))return s}
function Gy(s,e){
if(s==="change")return e}
var m0=!1;
if(ls){
var vo;
if(ls){
var xo="oninput"in document;
if(!xo){
var hd=document.createElement("div");
hd.setAttribute("oninput","return;
"),xo=typeof hd.oninput=="function"}
vo=xo}
else vo=!1;
m0=vo&&(!document.documentMode||9<document.documentMode)}
function fd(){
vn&&(vn.detachEvent("onpropertychange",g0),Nn=vn=null)}
function g0(s){
if(s.propertyName==="value"&&Ka(Nn)){
var e=[];
f0(e,Nn,s,bu(s)),Yf(jy,e)}
}
function Vy(s,e,t){
s==="focusin"?(fd(),vn=e,Nn=t,vn.attachEvent("onpropertychange",g0)):s==="focusout"&&fd()}
function Ky(s){
if(s==="selectionchange"||s==="keyup"||s==="keydown")return Ka(Nn)}
function Hy(s,e){
if(s==="click")return Ka(e)}
function zy(s,e){
if(s==="input"||s==="change")return Ka(e)}
function Wy(s,e){
return s===e&&(s!==0||1/s===1/e)||s!==s&&e!==e}
var Ft=typeof Object.is=="function"?Object.is:Wy;
function On(s,e){
if(Ft(s,e))return!0;
if(typeof s!="object"||s===null||typeof e!="object"||e===null)return!1;
var t=Object.keys(s),i=Object.keys(e);
if(t.length!==i.length)return!1;
for(i=0;
i<t.length;
i++){
var n=t[i];
if(!ol.call(e,n)||!Ft(s[n],e[n]))return!1}
return!0}
function md(s){
for(;
s&&s.firstChild;
)s=s.firstChild;
return s}
function gd(s,e){
var t=md(s);
s=0;
for(var i;
t;
){
if(t.nodeType===3){
if(i=s+t.textContent.length,s<=e&&i>=e)return{
node:t,offset:e-s}
;
s=i}
e:{
for(;
t;
){
if(t.nextSibling){
t=t.nextSibling;
break e}
t=t.parentNode}
t=void 0}
t=md(t)}
}
function p0(s,e){
return s&&e?s===e?!0:s&&s.nodeType===3?!1:e&&e.nodeType===3?p0(s,e.parentNode):"contains"in s?s.contains(e):s.compareDocumentPosition?!!(s.compareDocumentPosition(e)&16):!1:!1}
function y0(){
for(var s=window,e=ra();
e instanceof s.HTMLIFrameElement;
){
try{
var t=typeof e.contentWindow.location.href=="string"}
catch{
t=!1}
if(t)s=e.contentWindow;
else break;
e=ra(s.document)}
return e}
function Bu(s){
var e=s&&s.nodeName&&s.nodeName.toLowerCase();
return e&&(e==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||e==="textarea"||s.contentEditable==="true")}
function Yy(s){
var e=y0(),t=s.focusedElem,i=s.selectionRange;
if(e!==t&&t&&t.ownerDocument&&p0(t.ownerDocument.documentElement,t)){
if(i!==null&&Bu(t)){
if(e=i.start,s=i.end,s===void 0&&(s=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(s,t.value.length);
else if(s=(e=t.ownerDocument||document)&&e.defaultView||window,s.getSelection){
s=s.getSelection();
var n=t.textContent.length,r=Math.min(i.start,n);
i=i.end===void 0?r:Math.min(i.end,n),!s.extend&&r>i&&(n=i,i=r,r=n),n=gd(t,r);
var a=gd(t,i);
n&&a&&(s.rangeCount!==1||s.anchorNode!==n.node||s.anchorOffset!==n.offset||s.focusNode!==a.node||s.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),s.removeAllRanges(),r>i?(s.addRange(e),s.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),s.addRange(e)))}
}
for(e=[],s=t;
s=s.parentNode;
)s.nodeType===1&&e.push({
element:s,left:s.scrollLeft,top:s.scrollTop}
);
for(typeof t.focus=="function"&&t.focus(),t=0;
t<e.length;
t++)s=e[t],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}
}
var qy=ls&&"documentMode"in document&&11>=document.documentMode,Ei=null,Rl=null,xn=null,_l=!1;
function pd(s,e,t){
var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;
_l||Ei==null||Ei!==ra(i)||(i=Ei,"selectionStart"in i&&Bu(i)?i={
start:i.selectionStart,end:i.selectionEnd}
:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={
anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}
),xn&&On(xn,i)||(xn=i,i=ha(Rl,"onSelect"),0<i.length&&(e=new Mu("onSelect","select",null,e,t),s.push({
event:e,listeners:i}
),e.target=Ei)))}
function fr(s,e){
var t={
}
;
return t[s.toLowerCase()]=e.toLowerCase(),t["Webkit"+s]="webkit"+e,t["Moz"+s]="moz"+e,t}
var Si={
animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")}
,Eo={
}
,v0={
}
;
ls&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);
function Ha(s){
if(Eo[s])return Eo[s];
if(!Si[s])return s;
var e=Si[s],t;
for(t in e)if(e.hasOwnProperty(t)&&t in v0)return Eo[s]=e[t];
return s}
var x0=Ha("animationend"),E0=Ha("animationiteration"),S0=Ha("animationstart"),T0=Ha("transitionend"),I0=new Map,yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Fs(s,e){
I0.set(s,e),oi(e,[s])}
for(var So=0;
So<yd.length;
So++){
var To=yd[So],Qy=To.toLowerCase(),Xy=To[0].toUpperCase()+To.slice(1);
Fs(Qy,"on"+Xy)}
Fs(x0,"onAnimationEnd");
Fs(E0,"onAnimationIteration");
Fs(S0,"onAnimationStart");
Fs("dblclick","onDoubleClick");
Fs("focusin","onFocus");
Fs("focusout","onBlur");
Fs(T0,"onTransitionEnd");
$i("onMouseEnter",["mouseout","mouseover"]);
$i("onMouseLeave",["mouseout","mouseover"]);
$i("onPointerEnter",["pointerout","pointerover"]);
$i("onPointerLeave",["pointerout","pointerover"]);
oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));
oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);
oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(fn));
function vd(s,e,t){
var i=s.type||"unknown-event";
s.currentTarget=t,Qp(i,e,void 0,s),s.currentTarget=null}
function L0(s,e){
e=(e&4)!==0;
for(var t=0;
t<s.length;
t++){
var i=s[t],n=i.event;
i=i.listeners;
e:{
var r=void 0;
if(e)for(var a=i.length-1;
0<=a;
a--){
var o=i[a],u=o.instance,l=o.currentTarget;
if(o=o.listener,u!==r&&n.isPropagationStopped())break e;
vd(n,o,l),r=u}
else for(a=0;
a<i.length;
a++){
if(o=i[a],u=o.instance,l=o.currentTarget,o=o.listener,u!==r&&n.isPropagationStopped())break e;
vd(n,o,l),r=u}
}
}
if(oa)throw s=Tl,oa=!1,Tl=null,s}
function fe(s,e){
var t=e[Dl];
t===void 0&&(t=e[Dl]=new Set);
var i=s+"__bubble";
t.has(i)||(A0(e,s,2,!1),t.add(i))}
function Io(s,e,t){
var i=0;
e&&(i|=4),A0(t,s,i,e)}
var mr="_reactListening"+Math.random().toString(36).slice(2);
function Mn(s){
if(!s[mr]){
s[mr]=!0,Df.forEach(function(t){
t!=="selectionchange"&&(Zy.has(t)||Io(t,!1,s),Io(t,!0,s))}
);
var e=s.nodeType===9?s:s.ownerDocument;
e===null||e[mr]||(e[mr]=!0,Io("selectionchange",!1,e))}
}
function A0(s,e,t,i){
switch(l0(e)){
case 1:var n=hy;
break;
case 4:n=fy;
break;
default:n=Nu}
t=n.bind(null,e,t,s),n=void 0,!Sl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?s.addEventListener(e,t,{
capture:!0,passive:n}
):s.addEventListener(e,t,!0):n!==void 0?s.addEventListener(e,t,{
passive:n}
):s.addEventListener(e,t,!1)}
function Lo(s,e,t,i,n){
var r=i;
if(!(e&1)&&!(e&2)&&i!==null)e:for(;
;
){
if(i===null)return;
var a=i.tag;
if(a===3||a===4){
var o=i.stateNode.containerInfo;
if(o===n||o.nodeType===8&&o.parentNode===n)break;
if(a===4)for(a=i.return;
a!==null;
){
var u=a.tag;
if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===n||u.nodeType===8&&u.parentNode===n))return;
a=a.return}
for(;
o!==null;
){
if(a=Ys(o),a===null)return;
if(u=a.tag,u===5||u===6){
i=r=a;
continue e}
o=o.parentNode}
}
i=i.return}
Yf(function(){
var l=r,c=bu(t),d=[];
e:{
var h=I0.get(s);
if(h!==void 0){
var f=Mu,m=s;
switch(s){
case"keypress":if(Gr(t)===0)break e;
case"keydown":case"keyup":f=wy;
break;
case"focusin":m="focus",f=yo;
break;
case"focusout":m="blur",f=yo;
break;
case"beforeblur":case"afterblur":f=yo;
break;
case"click":if(t.button===2)break e;
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=ad;
break;
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=py;
break;
case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Cy;
break;
case x0:case E0:case S0:f=xy;
break;
case T0:f=Py;
break;
case"scroll":f=my;
break;
case"wheel":f=Oy;
break;
case"copy":case"cut":case"paste":f=Sy;
break;
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ld}
var p=(e&4)!==0,E=!p&&s==="scroll",v=p?h!==null?h+"Capture":null:h;
p=[];
for(var y=l,S;
y!==null;
){
S=y;
var T=S.stateNode;
if(S.tag===5&&T!==null&&(S=T,v!==null&&(T=bn(y,v),T!=null&&p.push(Fn(y,T,S)))),E)break;
y=y.return}
0<p.length&&(h=new f(h,m,null,t,c),d.push({
event:h,listeners:p}
))}
}
if(!(e&7)){
e:{
if(h=s==="mouseover"||s==="pointerover",f=s==="mouseout"||s==="pointerout",h&&t!==xl&&(m=t.relatedTarget||t.fromElement)&&(Ys(m)||m[us]))break e;
if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(m=t.relatedTarget||t.toElement,f=l,m=m?Ys(m):null,m!==null&&(E=li(m),m!==E||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=l),f!==m)){
if(p=ad,T="onMouseLeave",v="onMouseEnter",y="mouse",(s==="pointerout"||s==="pointerover")&&(p=ld,T="onPointerLeave",v="onPointerEnter",y="pointer"),E=f==null?h:Ti(f),S=m==null?h:Ti(m),h=new p(T,y+"leave",f,t,c),h.target=E,h.relatedTarget=S,T=null,Ys(c)===l&&(p=new p(v,y+"enter",m,t,c),p.target=S,p.relatedTarget=E,T=p),E=T,f&&m)t:{
for(p=f,v=m,y=0,S=p;
S;
S=ci(S))y++;
for(S=0,T=v;
T;
T=ci(T))S++;
for(;
0<y-S;
)p=ci(p),y--;
for(;
0<S-y;
)v=ci(v),S--;
for(;
y--;
){
if(p===v||v!==null&&p===v.alternate)break t;
p=ci(p),v=ci(v)}
p=null}
else p=null;
f!==null&&xd(d,h,f,p,!1),m!==null&&E!==null&&xd(d,E,m,p,!0)}
}
e:{
if(h=l?Ti(l):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var I=Gy;
else if(dd(h))if(m0)I=zy;
else{
I=Ky;
var _=Vy}
else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=Hy);
if(I&&(I=I(s,l))){
f0(d,I,t,c);
break e}
_&&_(s,h,l),s==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&ml(h,"number",h.value)}
switch(_=l?Ti(l):window,s){
case"focusin":(dd(_)||_.contentEditable==="true")&&(Ei=_,Rl=l,xn=null);
break;
case"focusout":xn=Rl=Ei=null;
break;
case"mousedown":_l=!0;
break;
case"contextmenu":case"mouseup":case"dragend":_l=!1,pd(d,t,c);
break;
case"selectionchange":if(qy)break;
case"keydown":case"keyup":pd(d,t,c)}
var L;
if(Uu)e:{
switch(s){
case"compositionstart":var R="onCompositionStart";
break e;
case"compositionend":R="onCompositionEnd";
break e;
case"compositionupdate":R="onCompositionUpdate";
break e}
R=void 0}
else xi?d0(s,t)&&(R="onCompositionEnd"):s==="keydown"&&t.keyCode===229&&(R="onCompositionStart");
R&&(c0&&t.locale!=="ko"&&(xi||R!=="onCompositionStart"?R==="onCompositionEnd"&&xi&&(L=u0()):(Ts=c,Ou="value"in Ts?Ts.value:Ts.textContent,xi=!0)),_=ha(l,R),0<_.length&&(R=new od(R,s,null,t,c),d.push({
event:R,listeners:_}
),L?R.data=L:(L=h0(t),L!==null&&(R.data=L)))),(L=Fy?Uy(s,t):By(s,t))&&(l=ha(l,"onBeforeInput"),0<l.length&&(c=new od("onBeforeInput","beforeinput",null,t,c),d.push({
event:c,listeners:l}
),c.data=L))}
L0(d,e)}
)}
function Fn(s,e,t){
return{
instance:s,listener:e,currentTarget:t}
}
function ha(s,e){
for(var t=e+"Capture",i=[];
s!==null;
){
var n=s,r=n.stateNode;
n.tag===5&&r!==null&&(n=r,r=bn(s,t),r!=null&&i.unshift(Fn(s,r,n)),r=bn(s,e),r!=null&&i.push(Fn(s,r,n))),s=s.return}
return i}
function ci(s){
if(s===null)return null;
do s=s.return;
while(s&&s.tag!==5);
return s||null}
function xd(s,e,t,i,n){
for(var r=e._reactName,a=[];
t!==null&&t!==i;
){
var o=t,u=o.alternate,l=o.stateNode;
if(u!==null&&u===i)break;
o.tag===5&&l!==null&&(o=l,n?(u=bn(t,r),u!=null&&a.unshift(Fn(t,u,o))):n||(u=bn(t,r),u!=null&&a.push(Fn(t,u,o)))),t=t.return}
a.length!==0&&s.push({
event:e,listeners:a}
)}
var Jy=/\r\n?/g,ev=/\u0000|\uFFFD/g;
function Ed(s){
return(typeof s=="string"?s:""+s).replace(Jy,`
`).replace(ev,"")}
function gr(s,e,t){
if(e=Ed(e),Ed(s)!==e&&t)throw Error(F(425))}
function fa(){
}
var wl=null,kl=null;
function bl(s,e){
return s==="textarea"||s==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}
var Cl=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,Sd=typeof Promise=="function"?Promise:void 0,sv=typeof queueMicrotask=="function"?queueMicrotask:typeof Sd<"u"?function(s){
return Sd.resolve(null).then(s).catch(iv)}
:Cl;
function iv(s){
setTimeout(function(){
throw s}
)}
function Ao(s,e){
var t=e,i=0;
do{
var n=t.nextSibling;
if(s.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){
if(i===0){
s.removeChild(n),Pn(e);
return}
i--}
else t!=="$"&&t!=="$?"&&t!=="$!"||i++;
t=n}
while(t);
Pn(e)}
function _s(s){
for(;
s!=null;
s=s.nextSibling){
var e=s.nodeType;
if(e===1||e===3)break;
if(e===8){
if(e=s.data,e==="$"||e==="$!"||e==="$?")break;
if(e==="/$")return null}
}
return s}
function Td(s){
s=s.previousSibling;
for(var e=0;
s;
){
if(s.nodeType===8){
var t=s.data;
if(t==="$"||t==="$!"||t==="$?"){
if(e===0)return s;
e--}
else t==="/$"&&e++}
s=s.previousSibling}
return null}
var Xi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Xi,Un="__reactProps$"+Xi,us="__reactContainer$"+Xi,Dl="__reactEvents$"+Xi,nv="__reactListeners$"+Xi,rv="__reactHandles$"+Xi;
function Ys(s){
var e=s[Ht];
if(e)return e;
for(var t=s.parentNode;
t;
){
if(e=t[us]||t[Ht]){
if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(s=Td(s);
s!==null;
){
if(t=s[Ht])return t;
s=Td(s)}
return e}
s=t,t=s.parentNode}
return null}
function tr(s){
return s=s[Ht]||s[us],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}
function Ti(s){
if(s.tag===5||s.tag===6)return s.stateNode;
throw Error(F(33))}
function za(s){
return s[Un]||null}
var Pl=[],Ii=-1;
function Us(s){
return{
current:s}
}
function me(s){
0>Ii||(s.current=Pl[Ii],Pl[Ii]=null,Ii--)}
function he(s,e){
Ii++,Pl[Ii]=s.current,s.current=e}
var Ns={
}
,We=Us(Ns),it=Us(!1),ti=Ns;
function ji(s,e){
var t=s.type.contextTypes;
if(!t)return Ns;
var i=s.stateNode;
if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;
var n={
}
,r;
for(r in t)n[r]=e[r];
return i&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=e,s.__reactInternalMemoizedMaskedChildContext=n),n}
function nt(s){
return s=s.childContextTypes,s!=null}
function ma(){
me(it),me(We)}
function Id(s,e,t){
if(We.current!==Ns)throw Error(F(168));
he(We,e),he(it,t)}
function R0(s,e,t){
var i=s.stateNode;
if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;
i=i.getChildContext();
for(var n in i)if(!(n in e))throw Error(F(108,Vp(s)||"Unknown",n));
return Ee({
}
,t,i)}
function ga(s){
return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Ns,ti=We.current,he(We,s),he(it,it.current),!0}
function Ld(s,e,t){
var i=s.stateNode;
if(!i)throw Error(F(169));
t?(s=R0(s,e,ti),i.__reactInternalMemoizedMergedChildContext=s,me(it),me(We),he(We,s)):me(it),he(it,t)}
var is=null,Wa=!1,Ro=!1;
function _0(s){
is===null?is=[s]:is.push(s)}
function av(s){
Wa=!0,_0(s)}
function Bs(){
if(!Ro&&is!==null){
Ro=!0;
var s=0,e=le;
try{
var t=is;
for(le=1;
s<t.length;
s++){
var i=t[s];
do i=i(!0);
while(i!==null)}
is=null,Wa=!1}
catch(n){
throw is!==null&&(is=is.slice(s+1)),Zf(Cu,Bs),n}
finally{
le=e,Ro=!1}
}
return null}
var Li=[],Ai=0,pa=null,ya=0,Et=[],St=0,si=null,ns=1,rs="";
function Hs(s,e){
Li[Ai++]=ya,Li[Ai++]=pa,pa=s,ya=e}
function w0(s,e,t){
Et[St++]=ns,Et[St++]=rs,Et[St++]=si,si=s;
var i=ns;
s=rs;
var n=32-Ot(i)-1;
i&=~(1<<n),t+=1;
var r=32-Ot(e)+n;
if(30<r){
var a=n-n%5;
r=(i&(1<<a)-1).toString(32),i>>=a,n-=a,ns=1<<32-Ot(e)+n|t<<n|i,rs=r+s}
else ns=1<<r|t<<n|i,rs=s}
function $u(s){
s.return!==null&&(Hs(s,1),w0(s,1,0))}
function ju(s){
for(;
s===pa;
)pa=Li[--Ai],Li[Ai]=null,ya=Li[--Ai],Li[Ai]=null;
for(;
s===si;
)si=Et[--St],Et[St]=null,rs=Et[--St],Et[St]=null,ns=Et[--St],Et[St]=null}
var ft=null,ht=null,ge=!1,Nt=null;
function k0(s,e){
var t=Tt(5,null,null,0);
t.elementType="DELETED",t.stateNode=e,t.return=s,e=s.deletions,e===null?(s.deletions=[t],s.flags|=16):e.push(t)}
function Ad(s,e){
switch(s.tag){
case 5:var t=s.type;
return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(s.stateNode=e,ft=s,ht=_s(e.firstChild),!0):!1;
case 6:return e=s.pendingProps===""||e.nodeType!==3?null:e,e!==null?(s.stateNode=e,ft=s,ht=null,!0):!1;
case 13:return e=e.nodeType!==8?null:e,e!==null?(t=si!==null?{
id:ns,overflow:rs}
:null,s.memoizedState={
dehydrated:e,treeContext:t,retryLane:1073741824}
,t=Tt(18,null,null,0),t.stateNode=e,t.return=s,s.child=t,ft=s,ht=null,!0):!1;
default:return!1}
}
function Nl(s){
return(s.mode&1)!==0&&(s.flags&128)===0}
function Ol(s){
if(ge){
var e=ht;
if(e){
var t=e;
if(!Ad(s,e)){
if(Nl(s))throw Error(F(418));
e=_s(t.nextSibling);
var i=ft;
e&&Ad(s,e)?k0(i,t):(s.flags=s.flags&-4097|2,ge=!1,ft=s)}
}
else{
if(Nl(s))throw Error(F(418));
s.flags=s.flags&-4097|2,ge=!1,ft=s}
}
}
function Rd(s){
for(s=s.return;
s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;
)s=s.return;
ft=s}
function pr(s){
if(s!==ft)return!1;
if(!ge)return Rd(s),ge=!0,!1;
var e;
if((e=s.tag!==3)&&!(e=s.tag!==5)&&(e=s.type,e=e!=="head"&&e!=="body"&&!bl(s.type,s.memoizedProps)),e&&(e=ht)){
if(Nl(s))throw b0(),Error(F(418));
for(;
e;
)k0(s,e),e=_s(e.nextSibling)}
if(Rd(s),s.tag===13){
if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));
e:{
for(s=s.nextSibling,e=0;
s;
){
if(s.nodeType===8){
var t=s.data;
if(t==="/$"){
if(e===0){
ht=_s(s.nextSibling);
break e}
e--}
else t!=="$"&&t!=="$!"&&t!=="$?"||e++}
s=s.nextSibling}
ht=null}
}
else ht=ft?_s(s.stateNode.nextSibling):null;
return!0}
function b0(){
for(var s=ht;
s;
)s=_s(s.nextSibling)}
function Gi(){
ht=ft=null,ge=!1}
function Gu(s){
Nt===null?Nt=[s]:Nt.push(s)}
var ov=hs.ReactCurrentBatchConfig;
function an(s,e,t){
if(s=t.ref,s!==null&&typeof s!="function"&&typeof s!="object"){
if(t._owner){
if(t=t._owner,t){
if(t.tag!==1)throw Error(F(309));
var i=t.stateNode}
if(!i)throw Error(F(147,s));
var n=i,r=""+s;
return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(a){
var o=n.refs;
a===null?delete o[r]:o[r]=a}
,e._stringRef=r,e)}
if(typeof s!="string")throw Error(F(284));
if(!t._owner)throw Error(F(290,s))}
return s}
function yr(s,e){
throw s=Object.prototype.toString.call(e),Error(F(31,s==="[object Object]"?"object with keys {
"+Object.keys(e).join(", ")+"}
":s))}
function _d(s){
var e=s._init;
return e(s._payload)}
function C0(s){
function e(v,y){
if(s){
var S=v.deletions;
S===null?(v.deletions=[y],v.flags|=16):S.push(y)}
}
function t(v,y){
if(!s)return null;
for(;
y!==null;
)e(v,y),y=y.sibling;
return null}
function i(v,y){
for(v=new Map;
y!==null;
)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;
return v}
function n(v,y){
return v=Cs(v,y),v.index=0,v.sibling=null,v}
function r(v,y,S){
return v.index=S,s?(S=v.alternate,S!==null?(S=S.index,S<y?(v.flags|=2,y):S):(v.flags|=2,y)):(v.flags|=1048576,y)}
function a(v){
return s&&v.alternate===null&&(v.flags|=2),v}
function o(v,y,S,T){
return y===null||y.tag!==6?(y=Po(S,v.mode,T),y.return=v,y):(y=n(y,S),y.return=v,y)}
function u(v,y,S,T){
var I=S.type;
return I===vi?c(v,y,S.props.children,T,S.key):y!==null&&(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ps&&_d(I)===y.type)?(T=n(y,S.props),T.ref=an(v,y,S),T.return=v,T):(T=qr(S.type,S.key,S.props,null,v.mode,T),T.ref=an(v,y,S),T.return=v,T)}
function l(v,y,S,T){
return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=No(S,v.mode,T),y.return=v,y):(y=n(y,S.children||[]),y.return=v,y)}
function c(v,y,S,T,I){
return y===null||y.tag!==7?(y=Js(S,v.mode,T,I),y.return=v,y):(y=n(y,S),y.return=v,y)}
function d(v,y,S){
if(typeof y=="string"&&y!==""||typeof y=="number")return y=Po(""+y,v.mode,S),y.return=v,y;
if(typeof y=="object"&&y!==null){
switch(y.$$typeof){
case ar:return S=qr(y.type,y.key,y.props,null,v.mode,S),S.ref=an(v,null,y),S.return=v,S;
case yi:return y=No(y,v.mode,S),y.return=v,y;
case ps:var T=y._init;
return d(v,T(y._payload),S)}
if(dn(y)||en(y))return y=Js(y,v.mode,S,null),y.return=v,y;
yr(v,y)}
return null}
function h(v,y,S,T){
var I=y!==null?y.key:null;
if(typeof S=="string"&&S!==""||typeof S=="number")return I!==null?null:o(v,y,""+S,T);
if(typeof S=="object"&&S!==null){
switch(S.$$typeof){
case ar:return S.key===I?u(v,y,S,T):null;
case yi:return S.key===I?l(v,y,S,T):null;
case ps:return I=S._init,h(v,y,I(S._payload),T)}
if(dn(S)||en(S))return I!==null?null:c(v,y,S,T,null);
yr(v,S)}
return null}
function f(v,y,S,T,I){
if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(S)||null,o(y,v,""+T,I);
if(typeof T=="object"&&T!==null){
switch(T.$$typeof){
case ar:return v=v.get(T.key===null?S:T.key)||null,u(y,v,T,I);
case yi:return v=v.get(T.key===null?S:T.key)||null,l(y,v,T,I);
case ps:var _=T._init;
return f(v,y,S,_(T._payload),I)}
if(dn(T)||en(T))return v=v.get(S)||null,c(y,v,T,I,null);
yr(y,T)}
return null}
function m(v,y,S,T){
for(var I=null,_=null,L=y,R=y=0,w=null;
L!==null&&R<S.length;
R++){
L.index>R?(w=L,L=null):w=L.sibling;
var A=h(v,L,S[R],T);
if(A===null){
L===null&&(L=w);
break}
s&&L&&A.alternate===null&&e(v,L),y=r(A,y,R),_===null?I=A:_.sibling=A,_=A,L=w}
if(R===S.length)return t(v,L),ge&&Hs(v,R),I;
if(L===null){
for(;
R<S.length;
R++)L=d(v,S[R],T),L!==null&&(y=r(L,y,R),_===null?I=L:_.sibling=L,_=L);
return ge&&Hs(v,R),I}
for(L=i(v,L);
R<S.length;
R++)w=f(L,v,R,S[R],T),w!==null&&(s&&w.alternate!==null&&L.delete(w.key===null?R:w.key),y=r(w,y,R),_===null?I=w:_.sibling=w,_=w);
return s&&L.forEach(function(D){
return e(v,D)}
),ge&&Hs(v,R),I}
function p(v,y,S,T){
var I=en(S);
if(typeof I!="function")throw Error(F(150));
if(S=I.call(S),S==null)throw Error(F(151));
for(var _=I=null,L=y,R=y=0,w=null,A=S.next();
L!==null&&!A.done;
R++,A=S.next()){
L.index>R?(w=L,L=null):w=L.sibling;
var D=h(v,L,A.value,T);
if(D===null){
L===null&&(L=w);
break}
s&&L&&D.alternate===null&&e(v,L),y=r(D,y,R),_===null?I=D:_.sibling=D,_=D,L=w}
if(A.done)return t(v,L),ge&&Hs(v,R),I;
if(L===null){
for(;
!A.done;
R++,A=S.next())A=d(v,A.value,T),A!==null&&(y=r(A,y,R),_===null?I=A:_.sibling=A,_=A);
return ge&&Hs(v,R),I}
for(L=i(v,L);
!A.done;
R++,A=S.next())A=f(L,v,R,A.value,T),A!==null&&(s&&A.alternate!==null&&L.delete(A.key===null?R:A.key),y=r(A,y,R),_===null?I=A:_.sibling=A,_=A);
return s&&L.forEach(function($){
return e(v,$)}
),ge&&Hs(v,R),I}
function E(v,y,S,T){
if(typeof S=="object"&&S!==null&&S.type===vi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){
switch(S.$$typeof){
case ar:e:{
for(var I=S.key,_=y;
_!==null;
){
if(_.key===I){
if(I=S.type,I===vi){
if(_.tag===7){
t(v,_.sibling),y=n(_,S.props.children),y.return=v,v=y;
break e}
}
else if(_.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ps&&_d(I)===_.type){
t(v,_.sibling),y=n(_,S.props),y.ref=an(v,_,S),y.return=v,v=y;
break e}
t(v,_);
break}
else e(v,_);
_=_.sibling}
S.type===vi?(y=Js(S.props.children,v.mode,T,S.key),y.return=v,v=y):(T=qr(S.type,S.key,S.props,null,v.mode,T),T.ref=an(v,y,S),T.return=v,v=T)}
return a(v);
case yi:e:{
for(_=S.key;
y!==null;
){
if(y.key===_)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){
t(v,y.sibling),y=n(y,S.children||[]),y.return=v,v=y;
break e}
else{
t(v,y);
break}
else e(v,y);
y=y.sibling}
y=No(S,v.mode,T),y.return=v,v=y}
return a(v);
case ps:return _=S._init,E(v,y,_(S._payload),T)}
if(dn(S))return m(v,y,S,T);
if(en(S))return p(v,y,S,T);
yr(v,S)}
return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(t(v,y.sibling),y=n(y,S),y.return=v,v=y):(t(v,y),y=Po(S,v.mode,T),y.return=v,v=y),a(v)):t(v,y)}
return E}
var Vi=C0(!0),D0=C0(!1),va=Us(null),xa=null,Ri=null,Vu=null;
function Ku(){
Vu=Ri=xa=null}
function Hu(s){
var e=va.current;
me(va),s._currentValue=e}
function Ml(s,e,t){
for(;
s!==null;
){
var i=s.alternate;
if((s.childLanes&e)!==e?(s.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),s===t)break;
s=s.return}
}
function Ni(s,e){
xa=s,Vu=Ri=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&e&&(tt=!0),s.firstContext=null)}
function Lt(s){
var e=s._currentValue;
if(Vu!==s)if(s={
context:s,memoizedValue:e,next:null}
,Ri===null){
if(xa===null)throw Error(F(308));
Ri=s,xa.dependencies={
lanes:0,firstContext:s}
}
else Ri=Ri.next=s;
return e}
var qs=null;
function zu(s){
qs===null?qs=[s]:qs.push(s)}
function P0(s,e,t,i){
var n=e.interleaved;
return n===null?(t.next=t,zu(e)):(t.next=n.next,n.next=t),e.interleaved=t,cs(s,i)}
function cs(s,e){
s.lanes|=e;
var t=s.alternate;
for(t!==null&&(t.lanes|=e),t=s,s=s.return;
s!==null;
)s.childLanes|=e,t=s.alternate,t!==null&&(t.childLanes|=e),t=s,s=s.return;
return t.tag===3?t.stateNode:null}
var ys=!1;
function Wu(s){
s.updateQueue={
baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{
pending:null,interleaved:null,lanes:0}
,effects:null}
}
function N0(s,e){
s=s.updateQueue,e.updateQueue===s&&(e.updateQueue={
baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects}
)}
function as(s,e){
return{
eventTime:s,lane:e,tag:0,payload:null,callback:null,next:null}
}
function ws(s,e,t){
var i=s.updateQueue;
if(i===null)return null;
if(i=i.shared,ne&2){
var n=i.pending;
return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,cs(s,t)}
return n=i.interleaved,n===null?(e.next=e,zu(i)):(e.next=n.next,n.next=e),i.interleaved=e,cs(s,t)}
function Vr(s,e,t){
if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){
var i=e.lanes;
i&=s.pendingLanes,t|=i,e.lanes=t,Du(s,t)}
}
function wd(s,e){
var t=s.updateQueue,i=s.alternate;
if(i!==null&&(i=i.updateQueue,t===i)){
var n=null,r=null;
if(t=t.firstBaseUpdate,t!==null){
do{
var a={
eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null}
;
r===null?n=r=a:r=r.next=a,t=t.next}
while(t!==null);
r===null?n=r=e:r=r.next=e}
else n=r=e;
t={
baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:i.shared,effects:i.effects}
,s.updateQueue=t;
return}
s=t.lastBaseUpdate,s===null?t.firstBaseUpdate=e:s.next=e,t.lastBaseUpdate=e}
function Ea(s,e,t,i){
var n=s.updateQueue;
ys=!1;
var r=n.firstBaseUpdate,a=n.lastBaseUpdate,o=n.shared.pending;
if(o!==null){
n.shared.pending=null;
var u=o,l=u.next;
u.next=null,a===null?r=l:a.next=l,a=u;
var c=s.alternate;
c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=l:o.next=l,c.lastBaseUpdate=u))}
if(r!==null){
var d=n.baseState;
a=0,c=l=u=null,o=r;
do{
var h=o.lane,f=o.eventTime;
if((i&h)===h){
c!==null&&(c=c.next={
eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null}
);
e:{
var m=s,p=o;
switch(h=e,f=t,p.tag){
case 1:if(m=p.payload,typeof m=="function"){
d=m.call(f,d,h);
break e}
d=m;
break e;
case 3:m.flags=m.flags&-65537|128;
case 0:if(m=p.payload,h=typeof m=="function"?m.call(f,d,h):m,h==null)break e;
d=Ee({
}
,d,h);
break e;
case 2:ys=!0}
}
o.callback!==null&&o.lane!==0&&(s.flags|=64,h=n.effects,h===null?n.effects=[o]:h.push(o))}
else f={
eventTime:f,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null}
,c===null?(l=c=f,u=d):c=c.next=f,a|=h;
if(o=o.next,o===null){
if(o=n.shared.pending,o===null)break;
h=o,o=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}
}
while(!0);
if(c===null&&(u=d),n.baseState=u,n.firstBaseUpdate=l,n.lastBaseUpdate=c,e=n.shared.interleaved,e!==null){
n=e;
do a|=n.lane,n=n.next;
while(n!==e)}
else r===null&&(n.shared.lanes=0);
ni|=a,s.lanes=a,s.memoizedState=d}
}
function kd(s,e,t){
if(s=e.effects,e.effects=null,s!==null)for(e=0;
e<s.length;
e++){
var i=s[e],n=i.callback;
if(n!==null){
if(i.callback=null,i=t,typeof n!="function")throw Error(F(191,n));
n.call(i)}
}
}
var sr={
}
,qt=Us(sr),Bn=Us(sr),$n=Us(sr);
function Qs(s){
if(s===sr)throw Error(F(174));
return s}
function Yu(s,e){
switch(he($n,e),he(Bn,s),he(qt,sr),s=e.nodeType,s){
case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pl(null,"");
break;
default:s=s===8?e.parentNode:e,e=s.namespaceURI||null,s=s.tagName,e=pl(e,s)}
me(qt),he(qt,e)}
function Ki(){
me(qt),me(Bn),me($n)}
function O0(s){
Qs($n.current);
var e=Qs(qt.current),t=pl(e,s.type);
e!==t&&(he(Bn,s),he(qt,t))}
function qu(s){
Bn.current===s&&(me(qt),me(Bn))}
var ye=Us(0);
function Sa(s){
for(var e=s;
e!==null;
){
if(e.tag===13){
var t=e.memoizedState;
if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}
else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){
if(e.flags&128)return e}
else if(e.child!==null){
e.child.return=e,e=e.child;
continue}
if(e===s)break;
for(;
e.sibling===null;
){
if(e.return===null||e.return===s)return null;
e=e.return}
e.sibling.return=e.return,e=e.sibling}
return null}
var _o=[];
function Qu(){
for(var s=0;
s<_o.length;
s++)_o[s]._workInProgressVersionPrimary=null;
_o.length=0}
var Kr=hs.ReactCurrentDispatcher,wo=hs.ReactCurrentBatchConfig,ii=0,xe=null,ke=null,Ne=null,Ta=!1,En=!1,jn=0,lv=0;
function Ke(){
throw Error(F(321))}
function Xu(s,e){
if(e===null)return!1;
for(var t=0;
t<e.length&&t<s.length;
t++)if(!Ft(s[t],e[t]))return!1;
return!0}
function Zu(s,e,t,i,n,r){
if(ii=r,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kr.current=s===null||s.memoizedState===null?hv:fv,s=t(i,n),En){
r=0;
do{
if(En=!1,jn=0,25<=r)throw Error(F(301));
r+=1,Ne=ke=null,e.updateQueue=null,Kr.current=mv,s=t(i,n)}
while(En)}
if(Kr.current=Ia,e=ke!==null&&ke.next!==null,ii=0,Ne=ke=xe=null,Ta=!1,e)throw Error(F(300));
return s}
function Ju(){
var s=jn!==0;
return jn=0,s}
function Gt(){
var s={
memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
;
return Ne===null?xe.memoizedState=Ne=s:Ne=Ne.next=s,Ne}
function At(){
if(ke===null){
var s=xe.alternate;
s=s!==null?s.memoizedState:null}
else s=ke.next;
var e=Ne===null?xe.memoizedState:Ne.next;
if(e!==null)Ne=e,ke=s;
else{
if(s===null)throw Error(F(310));
ke=s,s={
memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null}
,Ne===null?xe.memoizedState=Ne=s:Ne=Ne.next=s}
return Ne}
function Gn(s,e){
return typeof e=="function"?e(s):e}
function ko(s){
var e=At(),t=e.queue;
if(t===null)throw Error(F(311));
t.lastRenderedReducer=s;
var i=ke,n=i.baseQueue,r=t.pending;
if(r!==null){
if(n!==null){
var a=n.next;
n.next=r.next,r.next=a}
i.baseQueue=n=r,t.pending=null}
if(n!==null){
r=n.next,i=i.baseState;
var o=a=null,u=null,l=r;
do{
var c=l.lane;
if((ii&c)===c)u!==null&&(u=u.next={
lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}
),i=l.hasEagerState?l.eagerState:s(i,l.action);
else{
var d={
lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}
;
u===null?(o=u=d,a=i):u=u.next=d,xe.lanes|=c,ni|=c}
l=l.next}
while(l!==null&&l!==r);
u===null?a=i:u.next=o,Ft(i,e.memoizedState)||(tt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=u,t.lastRenderedState=i}
if(s=t.interleaved,s!==null){
n=s;
do r=n.lane,xe.lanes|=r,ni|=r,n=n.next;
while(n!==s)}
else n===null&&(t.lanes=0);
return[e.memoizedState,t.dispatch]}
function bo(s){
var e=At(),t=e.queue;
if(t===null)throw Error(F(311));
t.lastRenderedReducer=s;
var i=t.dispatch,n=t.pending,r=e.memoizedState;
if(n!==null){
t.pending=null;
var a=n=n.next;
do r=s(r,a.action),a=a.next;
while(a!==n);
Ft(r,e.memoizedState)||(tt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),t.lastRenderedState=r}
return[r,i]}
function M0(){
}
function F0(s,e){
var t=xe,i=At(),n=e(),r=!Ft(i.memoizedState,n);
if(r&&(i.memoizedState=n,tt=!0),i=i.queue,ec($0.bind(null,t,i,s),[s]),i.getSnapshot!==e||r||Ne!==null&&Ne.memoizedState.tag&1){
if(t.flags|=2048,Vn(9,B0.bind(null,t,i,n,e),void 0,null),Oe===null)throw Error(F(349));
ii&30||U0(t,e,n)}
return n}
function U0(s,e,t){
s.flags|=16384,s={
getSnapshot:e,value:t}
,e=xe.updateQueue,e===null?(e={
lastEffect:null,stores:null}
,xe.updateQueue=e,e.stores=[s]):(t=e.stores,t===null?e.stores=[s]:t.push(s))}
function B0(s,e,t,i){
e.value=t,e.getSnapshot=i,j0(e)&&G0(s)}
function $0(s,e,t){
return t(function(){
j0(e)&&G0(s)}
)}
function j0(s){
var e=s.getSnapshot;
s=s.value;
try{
var t=e();
return!Ft(s,t)}
catch{
return!0}
}
function G0(s){
var e=cs(s,1);
e!==null&&Mt(e,s,1,-1)}
function bd(s){
var e=Gt();
return typeof s=="function"&&(s=s()),e.memoizedState=e.baseState=s,s={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:s}
,e.queue=s,s=s.dispatch=dv.bind(null,xe,s),[e.memoizedState,s]}
function Vn(s,e,t,i){
return s={
tag:s,create:e,destroy:t,deps:i,next:null}
,e=xe.updateQueue,e===null?(e={
lastEffect:null,stores:null}
,xe.updateQueue=e,e.lastEffect=s.next=s):(t=e.lastEffect,t===null?e.lastEffect=s.next=s:(i=t.next,t.next=s,s.next=i,e.lastEffect=s)),s}
function V0(){
return At().memoizedState}
function Hr(s,e,t,i){
var n=Gt();
xe.flags|=s,n.memoizedState=Vn(1|e,t,void 0,i===void 0?null:i)}
function Ya(s,e,t,i){
var n=At();
i=i===void 0?null:i;
var r=void 0;
if(ke!==null){
var a=ke.memoizedState;
if(r=a.destroy,i!==null&&Xu(i,a.deps)){
n.memoizedState=Vn(e,t,r,i);
return}
}
xe.flags|=s,n.memoizedState=Vn(1|e,t,r,i)}
function Cd(s,e){
return Hr(8390656,8,s,e)}
function ec(s,e){
return Ya(2048,8,s,e)}
function K0(s,e){
return Ya(4,2,s,e)}
function H0(s,e){
return Ya(4,4,s,e)}
function z0(s,e){
if(typeof e=="function")return s=s(),e(s),function(){
e(null)}
;
if(e!=null)return s=s(),e.current=s,function(){
e.current=null}
}
function W0(s,e,t){
return t=t!=null?t.concat([s]):null,Ya(4,4,z0.bind(null,e,s),t)}
function tc(){
}
function Y0(s,e){
var t=At();
e=e===void 0?null:e;
var i=t.memoizedState;
return i!==null&&e!==null&&Xu(e,i[1])?i[0]:(t.memoizedState=[s,e],s)}
function q0(s,e){
var t=At();
e=e===void 0?null:e;
var i=t.memoizedState;
return i!==null&&e!==null&&Xu(e,i[1])?i[0]:(s=s(),t.memoizedState=[s,e],s)}
function Q0(s,e,t){
return ii&21?(Ft(t,e)||(t=t0(),xe.lanes|=t,ni|=t,s.baseState=!0),e):(s.baseState&&(s.baseState=!1,tt=!0),s.memoizedState=t)}
function uv(s,e){
var t=le;
le=t!==0&&4>t?t:4,s(!0);
var i=wo.transition;
wo.transition={
}
;
try{
s(!1),e()}
finally{
le=t,wo.transition=i}
}
function X0(){
return At().memoizedState}
function cv(s,e,t){
var i=bs(s);
if(t={
lane:i,action:t,hasEagerState:!1,eagerState:null,next:null}
,Z0(s))J0(e,t);
else if(t=P0(s,e,t,i),t!==null){
var n=Qe();
Mt(t,s,i,n),em(t,e,i)}
}
function dv(s,e,t){
var i=bs(s),n={
lane:i,action:t,hasEagerState:!1,eagerState:null,next:null}
;
if(Z0(s))J0(e,n);
else{
var r=s.alternate;
if(s.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{
var a=e.lastRenderedState,o=r(a,t);
if(n.hasEagerState=!0,n.eagerState=o,Ft(o,a)){
var u=e.interleaved;
u===null?(n.next=n,zu(e)):(n.next=u.next,u.next=n),e.interleaved=n;
return}
}
catch{
}
finally{
}
t=P0(s,e,n,i),t!==null&&(n=Qe(),Mt(t,s,i,n),em(t,e,i))}
}
function Z0(s){
var e=s.alternate;
return s===xe||e!==null&&e===xe}
function J0(s,e){
En=Ta=!0;
var t=s.pending;
t===null?e.next=e:(e.next=t.next,t.next=e),s.pending=e}
function em(s,e,t){
if(t&4194240){
var i=e.lanes;
i&=s.pendingLanes,t|=i,e.lanes=t,Du(s,t)}
}
var Ia={
readContext:Lt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1}
,hv={
readContext:Lt,useCallback:function(s,e){
return Gt().memoizedState=[s,e===void 0?null:e],s}
,useContext:Lt,useEffect:Cd,useImperativeHandle:function(s,e,t){
return t=t!=null?t.concat([s]):null,Hr(4194308,4,z0.bind(null,e,s),t)}
,useLayoutEffect:function(s,e){
return Hr(4194308,4,s,e)}
,useInsertionEffect:function(s,e){
return Hr(4,2,s,e)}
,useMemo:function(s,e){
var t=Gt();
return e=e===void 0?null:e,s=s(),t.memoizedState=[s,e],s}
,useReducer:function(s,e,t){
var i=Gt();
return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,s={
pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:e}
,i.queue=s,s=s.dispatch=cv.bind(null,xe,s),[i.memoizedState,s]}
,useRef:function(s){
var e=Gt();
return s={
current:s}
,e.memoizedState=s}
,useState:bd,useDebugValue:tc,useDeferredValue:function(s){
return Gt().memoizedState=s}
,useTransition:function(){
var s=bd(!1),e=s[0];
return s=uv.bind(null,s[1]),Gt().memoizedState=s,[e,s]}
,useMutableSource:function(){
}
,useSyncExternalStore:function(s,e,t){
var i=xe,n=Gt();
if(ge){
if(t===void 0)throw Error(F(407));
t=t()}
else{
if(t=e(),Oe===null)throw Error(F(349));
ii&30||U0(i,e,t)}
n.memoizedState=t;
var r={
value:t,getSnapshot:e}
;
return n.queue=r,Cd($0.bind(null,i,r,s),[s]),i.flags|=2048,Vn(9,B0.bind(null,i,r,t,e),void 0,null),t}
,useId:function(){
var s=Gt(),e=Oe.identifierPrefix;
if(ge){
var t=rs,i=ns;
t=(i&~(1<<32-Ot(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=jn++,0<t&&(e+="H"+t.toString(32)),e+=":"}
else t=lv++,e=":"+e+"r"+t.toString(32)+":";
return s.memoizedState=e}
,unstable_isNewReconciler:!1}
,fv={
readContext:Lt,useCallback:Y0,useContext:Lt,useEffect:ec,useImperativeHandle:W0,useInsertionEffect:K0,useLayoutEffect:H0,useMemo:q0,useReducer:ko,useRef:V0,useState:function(){
return ko(Gn)}
,useDebugValue:tc,useDeferredValue:function(s){
var e=At();
return Q0(e,ke.memoizedState,s)}
,useTransition:function(){
var s=ko(Gn)[0],e=At().memoizedState;
return[s,e]}
,useMutableSource:M0,useSyncExternalStore:F0,useId:X0,unstable_isNewReconciler:!1}
,mv={
readContext:Lt,useCallback:Y0,useContext:Lt,useEffect:ec,useImperativeHandle:W0,useInsertionEffect:K0,useLayoutEffect:H0,useMemo:q0,useReducer:bo,useRef:V0,useState:function(){
return bo(Gn)}
,useDebugValue:tc,useDeferredValue:function(s){
var e=At();
return ke===null?e.memoizedState=s:Q0(e,ke.memoizedState,s)}
,useTransition:function(){
var s=bo(Gn)[0],e=At().memoizedState;
return[s,e]}
,useMutableSource:M0,useSyncExternalStore:F0,useId:X0,unstable_isNewReconciler:!1}
;
function Dt(s,e){
if(s&&s.defaultProps){
e=Ee({
}
,e),s=s.defaultProps;
for(var t in s)e[t]===void 0&&(e[t]=s[t]);
return e}
return e}
function Fl(s,e,t,i){
e=s.memoizedState,t=t(i,e),t=t==null?e:Ee({
}
,e,t),s.memoizedState=t,s.lanes===0&&(s.updateQueue.baseState=t)}
var qa={
isMounted:function(s){
return(s=s._reactInternals)?li(s)===s:!1}
,enqueueSetState:function(s,e,t){
s=s._reactInternals;
var i=Qe(),n=bs(s),r=as(i,n);
r.payload=e,t!=null&&(r.callback=t),e=ws(s,r,n),e!==null&&(Mt(e,s,n,i),Vr(e,s,n))}
,enqueueReplaceState:function(s,e,t){
s=s._reactInternals;
var i=Qe(),n=bs(s),r=as(i,n);
r.tag=1,r.payload=e,t!=null&&(r.callback=t),e=ws(s,r,n),e!==null&&(Mt(e,s,n,i),Vr(e,s,n))}
,enqueueForceUpdate:function(s,e){
s=s._reactInternals;
var t=Qe(),i=bs(s),n=as(t,i);
n.tag=2,e!=null&&(n.callback=e),e=ws(s,n,i),e!==null&&(Mt(e,s,i,t),Vr(e,s,i))}
}
;
function Dd(s,e,t,i,n,r,a){
return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!On(t,i)||!On(n,r):!0}
function tm(s,e,t){
var i=!1,n=Ns,r=e.contextType;
return typeof r=="object"&&r!==null?r=Lt(r):(n=nt(e)?ti:We.current,i=e.contextTypes,r=(i=i!=null)?ji(s,n):Ns),e=new e(t,r),s.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qa,s.stateNode=e,e._reactInternals=s,i&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=n,s.__reactInternalMemoizedMaskedChildContext=r),e}
function Pd(s,e,t,i){
s=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==s&&qa.enqueueReplaceState(e,e.state,null)}
function Ul(s,e,t,i){
var n=s.stateNode;
n.props=t,n.state=s.memoizedState,n.refs={
}
,Wu(s);
var r=e.contextType;
typeof r=="object"&&r!==null?n.context=Lt(r):(r=nt(e)?ti:We.current,n.context=ji(s,r)),n.state=s.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Fl(s,e,r,t),n.state=s.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&qa.enqueueReplaceState(n,n.state,null),Ea(s,t,n,i),n.state=s.memoizedState),typeof n.componentDidMount=="function"&&(s.flags|=4194308)}
function Hi(s,e){
try{
var t="",i=e;
do t+=Gp(i),i=i.return;
while(i);
var n=t}
catch(r){
n=`
Error generating stack: `+r.message+`
`+r.stack}
return{
value:s,source:e,stack:n,digest:null}
}
function Co(s,e,t){
return{
value:s,source:null,stack:t??null,digest:e??null}
}
function Bl(s,e){
try{
console.error(e.value)}
catch(t){
setTimeout(function(){
throw t}
)}
}
var gv=typeof WeakMap=="function"?WeakMap:Map;
function sm(s,e,t){
t=as(-1,t),t.tag=3,t.payload={
element:null}
;
var i=e.value;
return t.callback=function(){
Aa||(Aa=!0,ql=i),Bl(s,e)}
,t}
function im(s,e,t){
t=as(-1,t),t.tag=3;
var i=s.type.getDerivedStateFromError;
if(typeof i=="function"){
var n=e.value;
t.payload=function(){
return i(n)}
,t.callback=function(){
Bl(s,e)}
}
var r=s.stateNode;
return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){
Bl(s,e),typeof i!="function"&&(ks===null?ks=new Set([this]):ks.add(this));
var a=e.stack;
this.componentDidCatch(e.value,{
componentStack:a!==null?a:""}
)}
),t}
function Nd(s,e,t){
var i=s.pingCache;
if(i===null){
i=s.pingCache=new gv;
var n=new Set;
i.set(e,n)}
else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));
n.has(t)||(n.add(t),s=kv.bind(null,s,e,t),e.then(s,s))}
function Od(s){
do{
var e;
if((e=s.tag===13)&&(e=s.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return s;
s=s.return}
while(s!==null);
return null}
function Md(s,e,t,i,n){
return s.mode&1?(s.flags|=65536,s.lanes=n,s):(s===e?s.flags|=65536:(s.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=as(-1,1),e.tag=2,ws(t,e,1))),t.lanes|=1),s)}
var pv=hs.ReactCurrentOwner,tt=!1;
function Ye(s,e,t,i){
e.child=s===null?D0(e,null,t,i):Vi(e,s.child,t,i)}
function Fd(s,e,t,i,n){
t=t.render;
var r=e.ref;
return Ni(e,n),i=Zu(s,e,t,i,r,n),t=Ju(),s!==null&&!tt?(e.updateQueue=s.updateQueue,e.flags&=-2053,s.lanes&=~n,ds(s,e,n)):(ge&&t&&$u(e),e.flags|=1,Ye(s,e,i,n),e.child)}
function Ud(s,e,t,i,n){
if(s===null){
var r=t.type;
return typeof r=="function"&&!uc(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=r,nm(s,e,r,i,n)):(s=qr(t.type,null,i,e,e.mode,n),s.ref=e.ref,s.return=e,e.child=s)}
if(r=s.child,!(s.lanes&n)){
var a=r.memoizedProps;
if(t=t.compare,t=t!==null?t:On,t(a,i)&&s.ref===e.ref)return ds(s,e,n)}
return e.flags|=1,s=Cs(r,i),s.ref=e.ref,s.return=e,e.child=s}
function nm(s,e,t,i,n){
if(s!==null){
var r=s.memoizedProps;
if(On(r,i)&&s.ref===e.ref)if(tt=!1,e.pendingProps=i=r,(s.lanes&n)!==0)s.flags&131072&&(tt=!0);
else return e.lanes=s.lanes,ds(s,e,n)}
return $l(s,e,t,i,n)}
function rm(s,e,t){
var i=e.pendingProps,n=i.children,r=s!==null?s.memoizedState:null;
if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={
baseLanes:0,cachePool:null,transitions:null}
,he(wi,ut),ut|=t;
else{
if(!(t&1073741824))return s=r!==null?r.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={
baseLanes:s,cachePool:null,transitions:null}
,e.updateQueue=null,he(wi,ut),ut|=s,null;
e.memoizedState={
baseLanes:0,cachePool:null,transitions:null}
,i=r!==null?r.baseLanes:t,he(wi,ut),ut|=i}
else r!==null?(i=r.baseLanes|t,e.memoizedState=null):i=t,he(wi,ut),ut|=i;
return Ye(s,e,n,t),e.child}
function am(s,e){
var t=e.ref;
(s===null&&t!==null||s!==null&&s.ref!==t)&&(e.flags|=512,e.flags|=2097152)}
function $l(s,e,t,i,n){
var r=nt(t)?ti:We.current;
return r=ji(e,r),Ni(e,n),t=Zu(s,e,t,i,r,n),i=Ju(),s!==null&&!tt?(e.updateQueue=s.updateQueue,e.flags&=-2053,s.lanes&=~n,ds(s,e,n)):(ge&&i&&$u(e),e.flags|=1,Ye(s,e,t,n),e.child)}
function Bd(s,e,t,i,n){
if(nt(t)){
var r=!0;
ga(e)}
else r=!1;
if(Ni(e,n),e.stateNode===null)zr(s,e),tm(e,t,i),Ul(e,t,i,n),i=!0;
else if(s===null){
var a=e.stateNode,o=e.memoizedProps;
a.props=o;
var u=a.context,l=t.contextType;
typeof l=="object"&&l!==null?l=Lt(l):(l=nt(t)?ti:We.current,l=ji(e,l));
var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";
d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||u!==l)&&Pd(e,a,i,l),ys=!1;
var h=e.memoizedState;
a.state=h,Ea(e,i,a,n),u=e.memoizedState,o!==i||h!==u||it.current||ys?(typeof c=="function"&&(Fl(e,t,c,i),u=e.memoizedState),(o=ys||Dd(e,t,o,i,h,u,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),a.props=i,a.state=u,a.context=l,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}
else{
a=e.stateNode,N0(s,e),o=e.memoizedProps,l=e.type===e.elementType?o:Dt(e.type,o),a.props=l,d=e.pendingProps,h=a.context,u=t.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=nt(t)?ti:We.current,u=ji(e,u));
var f=t.getDerivedStateFromProps;
(c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==u)&&Pd(e,a,i,u),ys=!1,h=e.memoizedState,a.state=h,Ea(e,i,a,n);
var m=e.memoizedState;
o!==d||h!==m||it.current||ys?(typeof f=="function"&&(Fl(e,t,f,i),m=e.memoizedState),(l=ys||Dd(e,t,l,i,h,m,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===s.memoizedProps&&h===s.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===s.memoizedProps&&h===s.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=u,i=l):(typeof a.componentDidUpdate!="function"||o===s.memoizedProps&&h===s.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===s.memoizedProps&&h===s.memoizedState||(e.flags|=1024),i=!1)}
return jl(s,e,t,i,r,n)}
function jl(s,e,t,i,n,r){
am(s,e);
var a=(e.flags&128)!==0;
if(!i&&!a)return n&&Ld(e,t,!1),ds(s,e,r);
i=e.stateNode,pv.current=e;
var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();
return e.flags|=1,s!==null&&a?(e.child=Vi(e,s.child,null,r),e.child=Vi(e,null,o,r)):Ye(s,e,o,r),e.memoizedState=i.state,n&&Ld(e,t,!0),e.child}
function om(s){
var e=s.stateNode;
e.pendingContext?Id(s,e.pendingContext,e.pendingContext!==e.context):e.context&&Id(s,e.context,!1),Yu(s,e.containerInfo)}
function $d(s,e,t,i,n){
return Gi(),Gu(n),e.flags|=256,Ye(s,e,t,i),e.child}
var Gl={
dehydrated:null,treeContext:null,retryLane:0}
;
function Vl(s){
return{
baseLanes:s,cachePool:null,transitions:null}
}
function lm(s,e,t){
var i=e.pendingProps,n=ye.current,r=!1,a=(e.flags&128)!==0,o;
if((o=a)||(o=s!==null&&s.memoizedState===null?!1:(n&2)!==0),o?(r=!0,e.flags&=-129):(s===null||s.memoizedState!==null)&&(n|=1),he(ye,n&1),s===null)return Ol(e),s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(e.mode&1?s.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,s=i.fallback,r?(i=e.mode,r=e.child,a={
mode:"hidden",children:a}
,!(i&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Za(a,i,0,null),s=Js(s,i,t,null),r.return=e,s.return=e,r.sibling=s,e.child=r,e.child.memoizedState=Vl(t),e.memoizedState=Gl,s):sc(e,a));
if(n=s.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return yv(s,e,a,i,o,n,t);
if(r){
r=i.fallback,a=e.mode,n=s.child,o=n.sibling;
var u={
mode:"hidden",children:i.children}
;
return!(a&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=Cs(n,u),i.subtreeFlags=n.subtreeFlags&14680064),o!==null?r=Cs(o,r):(r=Js(r,a,t,null),r.flags|=2),r.return=e,i.return=e,i.sibling=r,e.child=i,i=r,r=e.child,a=s.child.memoizedState,a=a===null?Vl(t):{
baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions}
,r.memoizedState=a,r.childLanes=s.childLanes&~t,e.memoizedState=Gl,i}
return r=s.child,s=r.sibling,i=Cs(r,{
mode:"visible",children:i.children}
),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,s!==null&&(t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)),e.child=i,e.memoizedState=null,i}
function sc(s,e){
return e=Za({
mode:"visible",children:e}
,s.mode,0,null),e.return=s,s.child=e}
function vr(s,e,t,i){
return i!==null&&Gu(i),Vi(e,s.child,null,t),s=sc(e,e.pendingProps.children),s.flags|=2,e.memoizedState=null,s}
function yv(s,e,t,i,n,r,a){
if(t)return e.flags&256?(e.flags&=-257,i=Co(Error(F(422))),vr(s,e,a,i)):e.memoizedState!==null?(e.child=s.child,e.flags|=128,null):(r=i.fallback,n=e.mode,i=Za({
mode:"visible",children:i.children}
,n,0,null),r=Js(r,n,a,null),r.flags|=2,i.return=e,r.return=e,i.sibling=r,e.child=i,e.mode&1&&Vi(e,s.child,null,a),e.child.memoizedState=Vl(a),e.memoizedState=Gl,r);
if(!(e.mode&1))return vr(s,e,a,null);
if(n.data==="$!"){
if(i=n.nextSibling&&n.nextSibling.dataset,i)var o=i.dgst;
return i=o,r=Error(F(419)),i=Co(r,i,void 0),vr(s,e,a,i)}
if(o=(a&s.childLanes)!==0,tt||o){
if(i=Oe,i!==null){
switch(a&-a){
case 4:n=2;
break;
case 16:n=8;
break;
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;
break;
case 536870912:n=268435456;
break;
default:n=0}
n=n&(i.suspendedLanes|a)?0:n,n!==0&&n!==r.retryLane&&(r.retryLane=n,cs(s,n),Mt(i,s,n,-1))}
return lc(),i=Co(Error(F(421))),vr(s,e,a,i)}
return n.data==="$?"?(e.flags|=128,e.child=s.child,e=bv.bind(null,s),n._reactRetry=e,null):(s=r.treeContext,ht=_s(n.nextSibling),ft=e,ge=!0,Nt=null,s!==null&&(Et[St++]=ns,Et[St++]=rs,Et[St++]=si,ns=s.id,rs=s.overflow,si=e),e=sc(e,i.children),e.flags|=4096,e)}
function jd(s,e,t){
s.lanes|=e;
var i=s.alternate;
i!==null&&(i.lanes|=e),Ml(s.return,e,t)}
function Do(s,e,t,i,n){
var r=s.memoizedState;
r===null?s.memoizedState={
isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:n}
:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=t,r.tailMode=n)}
function um(s,e,t){
var i=e.pendingProps,n=i.revealOrder,r=i.tail;
if(Ye(s,e,i.children,t),i=ye.current,i&2)i=i&1|2,e.flags|=128;
else{
if(s!==null&&s.flags&128)e:for(s=e.child;
s!==null;
){
if(s.tag===13)s.memoizedState!==null&&jd(s,t,e);
else if(s.tag===19)jd(s,t,e);
else if(s.child!==null){
s.child.return=s,s=s.child;
continue}
if(s===e)break e;
for(;
s.sibling===null;
){
if(s.return===null||s.return===e)break e;
s=s.return}
s.sibling.return=s.return,s=s.sibling}
i&=1}
if(he(ye,i),!(e.mode&1))e.memoizedState=null;
else switch(n){
case"forwards":for(t=e.child,n=null;
t!==null;
)s=t.alternate,s!==null&&Sa(s)===null&&(n=t),t=t.sibling;
t=n,t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null),Do(e,!1,n,t,r);
break;
case"backwards":for(t=null,n=e.child,e.child=null;
n!==null;
){
if(s=n.alternate,s!==null&&Sa(s)===null){
e.child=n;
break}
s=n.sibling,n.sibling=t,t=n,n=s}
Do(e,!0,t,null,r);
break;
case"together":Do(e,!1,null,null,void 0);
break;
default:e.memoizedState=null}
return e.child}
function zr(s,e){
!(e.mode&1)&&s!==null&&(s.alternate=null,e.alternate=null,e.flags|=2)}
function ds(s,e,t){
if(s!==null&&(e.dependencies=s.dependencies),ni|=e.lanes,!(t&e.childLanes))return null;
if(s!==null&&e.child!==s.child)throw Error(F(153));
if(e.child!==null){
for(s=e.child,t=Cs(s,s.pendingProps),e.child=t,t.return=e;
s.sibling!==null;
)s=s.sibling,t=t.sibling=Cs(s,s.pendingProps),t.return=e;
t.sibling=null}
return e.child}
function vv(s,e,t){
switch(e.tag){
case 3:om(e),Gi();
break;
case 5:O0(e);
break;
case 1:nt(e.type)&&ga(e);
break;
case 4:Yu(e,e.stateNode.containerInfo);
break;
case 10:var i=e.type._context,n=e.memoizedProps.value;
he(va,i._currentValue),i._currentValue=n;
break;
case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(he(ye,ye.current&1),e.flags|=128,null):t&e.child.childLanes?lm(s,e,t):(he(ye,ye.current&1),s=ds(s,e,t),s!==null?s.sibling:null);
he(ye,ye.current&1);
break;
case 19:if(i=(t&e.childLanes)!==0,s.flags&128){
if(i)return um(s,e,t);
e.flags|=128}
if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),he(ye,ye.current),i)break;
return null;
case 22:case 23:return e.lanes=0,rm(s,e,t)}
return ds(s,e,t)}
var cm,Kl,dm,hm;
cm=function(s,e){
for(var t=e.child;
t!==null;
){
if(t.tag===5||t.tag===6)s.appendChild(t.stateNode);
else if(t.tag!==4&&t.child!==null){
t.child.return=t,t=t.child;
continue}
if(t===e)break;
for(;
t.sibling===null;
){
if(t.return===null||t.return===e)return;
t=t.return}
t.sibling.return=t.return,t=t.sibling}
}
;
Kl=function(){
}
;
dm=function(s,e,t,i){
var n=s.memoizedProps;
if(n!==i){
s=e.stateNode,Qs(qt.current);
var r=null;
switch(t){
case"input":n=hl(s,n),i=hl(s,i),r=[];
break;
case"select":n=Ee({
}
,n,{
value:void 0}
),i=Ee({
}
,i,{
value:void 0}
),r=[];
break;
case"textarea":n=gl(s,n),i=gl(s,i),r=[];
break;
default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(s.onclick=fa)}
yl(t,i);
var a;
t=null;
for(l in n)if(!i.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){
var o=n[l];
for(a in o)o.hasOwnProperty(a)&&(t||(t={
}
),t[a]="")}
else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(wn.hasOwnProperty(l)?r||(r=[]):(r=r||[]).push(l,null));
for(l in i){
var u=i[l];
if(o=n!=null?n[l]:void 0,i.hasOwnProperty(l)&&u!==o&&(u!=null||o!=null))if(l==="style")if(o){
for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(t||(t={
}
),t[a]="");
for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(t||(t={
}
),t[a]=u[a])}
else t||(r||(r=[]),r.push(l,t)),t=u;
else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(r=r||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(r=r||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(wn.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&fe("scroll",s),r||o===u||(r=[])):(r=r||[]).push(l,u))}
t&&(r=r||[]).push("style",t);
var l=r;
(e.updateQueue=l)&&(e.flags|=4)}
}
;
hm=function(s,e,t,i){
t!==i&&(e.flags|=4)}
;
function on(s,e){
if(!ge)switch(s.tailMode){
case"hidden":e=s.tail;
for(var t=null;
e!==null;
)e.alternate!==null&&(t=e),e=e.sibling;
t===null?s.tail=null:t.sibling=null;
break;
case"collapsed":t=s.tail;
for(var i=null;
t!==null;
)t.alternate!==null&&(i=t),t=t.sibling;
i===null?e||s.tail===null?s.tail=null:s.tail.sibling=null:i.sibling=null}
}
function He(s){
var e=s.alternate!==null&&s.alternate.child===s.child,t=0,i=0;
if(e)for(var n=s.child;
n!==null;
)t|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=s,n=n.sibling;
else for(n=s.child;
n!==null;
)t|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=s,n=n.sibling;
return s.subtreeFlags|=i,s.childLanes=t,e}
function xv(s,e,t){
var i=e.pendingProps;
switch(ju(e),e.tag){
case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;
case 1:return nt(e.type)&&ma(),He(e),null;
case 3:return i=e.stateNode,Ki(),me(it),me(We),Qu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(s===null||s.child===null)&&(pr(e)?e.flags|=4:s===null||s.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(Zl(Nt),Nt=null))),Kl(s,e),He(e),null;
case 5:qu(e);
var n=Qs($n.current);
if(t=e.type,s!==null&&e.stateNode!=null)dm(s,e,t,i,n),s.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);
else{
if(!i){
if(e.stateNode===null)throw Error(F(166));
return He(e),null}
if(s=Qs(qt.current),pr(e)){
i=e.stateNode,t=e.type;
var r=e.memoizedProps;
switch(i[Ht]=e,i[Un]=r,s=(e.mode&1)!==0,t){
case"dialog":fe("cancel",i),fe("close",i);
break;
case"iframe":case"object":case"embed":fe("load",i);
break;
case"video":case"audio":for(n=0;
n<fn.length;
n++)fe(fn[n],i);
break;
case"source":fe("error",i);
break;
case"img":case"image":case"link":fe("error",i),fe("load",i);
break;
case"details":fe("toggle",i);
break;
case"input":Qc(i,r),fe("invalid",i);
break;
case"select":i._wrapperState={
wasMultiple:!!r.multiple}
,fe("invalid",i);
break;
case"textarea":Zc(i,r),fe("invalid",i)}
yl(t,r),n=null;
for(var a in r)if(r.hasOwnProperty(a)){
var o=r[a];
a==="children"?typeof o=="string"?i.textContent!==o&&(r.suppressHydrationWarning!==!0&&gr(i.textContent,o,s),n=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(r.suppressHydrationWarning!==!0&&gr(i.textContent,o,s),n=["children",""+o]):wn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&fe("scroll",i)}
switch(t){
case"input":or(i),Xc(i,r,!0);
break;
case"textarea":or(i),Jc(i);
break;
case"select":case"option":break;
default:typeof r.onClick=="function"&&(i.onclick=fa)}
i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}
else{
a=n.nodeType===9?n:n.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=$f(t)),s==="http://www.w3.org/1999/xhtml"?t==="script"?(s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof i.is=="string"?s=a.createElement(t,{
is:i.is}
):(s=a.createElement(t),t==="select"&&(a=s,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):s=a.createElementNS(s,t),s[Ht]=e,s[Un]=i,cm(s,e,!1,!1),e.stateNode=s;
e:{
switch(a=vl(t,i),t){
case"dialog":fe("cancel",s),fe("close",s),n=i;
break;
case"iframe":case"object":case"embed":fe("load",s),n=i;
break;
case"video":case"audio":for(n=0;
n<fn.length;
n++)fe(fn[n],s);
n=i;
break;
case"source":fe("error",s),n=i;
break;
case"img":case"image":case"link":fe("error",s),fe("load",s),n=i;
break;
case"details":fe("toggle",s),n=i;
break;
case"input":Qc(s,i),n=hl(s,i),fe("invalid",s);
break;
case"option":n=i;
break;
case"select":s._wrapperState={
wasMultiple:!!i.multiple}
,n=Ee({
}
,i,{
value:void 0}
),fe("invalid",s);
break;
case"textarea":Zc(s,i),n=gl(s,i),fe("invalid",s);
break;
default:n=i}
yl(t,n),o=n;
for(r in o)if(o.hasOwnProperty(r)){
var u=o[r];
r==="style"?Vf(s,u):r==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&jf(s,u)):r==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&kn(s,u):typeof u=="number"&&kn(s,""+u):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(wn.hasOwnProperty(r)?u!=null&&r==="onScroll"&&fe("scroll",s):u!=null&&Ru(s,r,u,a))}
switch(t){
case"input":or(s),Xc(s,i,!1);
break;
case"textarea":or(s),Jc(s);
break;
case"option":i.value!=null&&s.setAttribute("value",""+Ps(i.value));
break;
case"select":s.multiple=!!i.multiple,r=i.value,r!=null?bi(s,!!i.multiple,r,!1):i.defaultValue!=null&&bi(s,!!i.multiple,i.defaultValue,!0);
break;
default:typeof n.onClick=="function"&&(s.onclick=fa)}
switch(t){
case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;
break e;
case"img":i=!0;
break e;
default:i=!1}
}
i&&(e.flags|=4)}
e.ref!==null&&(e.flags|=512,e.flags|=2097152)}
return He(e),null;
case 6:if(s&&e.stateNode!=null)hm(s,e,s.memoizedProps,i);
else{
if(typeof i!="string"&&e.stateNode===null)throw Error(F(166));
if(t=Qs($n.current),Qs(qt.current),pr(e)){
if(i=e.stateNode,t=e.memoizedProps,i[Ht]=e,(r=i.nodeValue!==t)&&(s=ft,s!==null))switch(s.tag){
case 3:gr(i.nodeValue,t,(s.mode&1)!==0);
break;
case 5:s.memoizedProps.suppressHydrationWarning!==!0&&gr(i.nodeValue,t,(s.mode&1)!==0)}
r&&(e.flags|=4)}
else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ht]=e,e.stateNode=i}
return He(e),null;
case 13:if(me(ye),i=e.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){
if(ge&&ht!==null&&e.mode&1&&!(e.flags&128))b0(),Gi(),e.flags|=98560,r=!1;
else if(r=pr(e),i!==null&&i.dehydrated!==null){
if(s===null){
if(!r)throw Error(F(318));
if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(F(317));
r[Ht]=e}
else Gi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;
He(e),r=!1}
else Nt!==null&&(Zl(Nt),Nt=null),r=!0;
if(!r)return e.flags&65536?e:null}
return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(s!==null&&s.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(s===null||ye.current&1?Ce===0&&(Ce=3):lc())),e.updateQueue!==null&&(e.flags|=4),He(e),null);
case 4:return Ki(),Kl(s,e),s===null&&Mn(e.stateNode.containerInfo),He(e),null;
case 10:return Hu(e.type._context),He(e),null;
case 17:return nt(e.type)&&ma(),He(e),null;
case 19:if(me(ye),r=e.memoizedState,r===null)return He(e),null;
if(i=(e.flags&128)!==0,a=r.rendering,a===null)if(i)on(r,!1);
else{
if(Ce!==0||s!==null&&s.flags&128)for(s=e.child;
s!==null;
){
if(a=Sa(s),a!==null){
for(e.flags|=128,on(r,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;
t!==null;
)r=t,s=i,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{
lanes:s.lanes,firstContext:s.firstContext}
),t=t.sibling;
return he(ye,ye.current&1|2),e.child}
s=s.sibling}
r.tail!==null&&Le()>zi&&(e.flags|=128,i=!0,on(r,!1),e.lanes=4194304)}
else{
if(!i)if(s=Sa(a),s!==null){
if(e.flags|=128,i=!0,t=s.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),on(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!ge)return He(e),null}
else 2*Le()-r.renderingStartTime>zi&&t!==1073741824&&(e.flags|=128,i=!0,on(r,!1),e.lanes=4194304);
r.isBackwards?(a.sibling=e.child,e.child=a):(t=r.last,t!==null?t.sibling=a:e.child=a,r.last=a)}
return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Le(),e.sibling=null,t=ye.current,he(ye,i?t&1|2:t&1),e):(He(e),null);
case 22:case 23:return oc(),i=e.memoizedState!==null,s!==null&&s.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ut&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;
case 24:return null;
case 25:return null}
throw Error(F(156,e.tag))}
function Ev(s,e){
switch(ju(e),e.tag){
case 1:return nt(e.type)&&ma(),s=e.flags,s&65536?(e.flags=s&-65537|128,e):null;
case 3:return Ki(),me(it),me(We),Qu(),s=e.flags,s&65536&&!(s&128)?(e.flags=s&-65537|128,e):null;
case 5:return qu(e),null;
case 13:if(me(ye),s=e.memoizedState,s!==null&&s.dehydrated!==null){
if(e.alternate===null)throw Error(F(340));
Gi()}
return s=e.flags,s&65536?(e.flags=s&-65537|128,e):null;
case 19:return me(ye),null;
case 4:return Ki(),null;
case 10:return Hu(e.type._context),null;
case 22:case 23:return oc(),null;
case 24:return null;
default:return null}
}
var xr=!1,ze=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,z=null;
function _i(s,e){
var t=s.ref;
if(t!==null)if(typeof t=="function")try{
t(null)}
catch(i){
Te(s,e,i)}
else t.current=null}
function Hl(s,e,t){
try{
t()}
catch(i){
Te(s,e,i)}
}
var Gd=!1;
function Tv(s,e){
if(wl=ca,s=y0(),Bu(s)){
if("selectionStart"in s)var t={
start:s.selectionStart,end:s.selectionEnd}
;
else e:{
t=(t=s.ownerDocument)&&t.defaultView||window;
var i=t.getSelection&&t.getSelection();
if(i&&i.rangeCount!==0){
t=i.anchorNode;
var n=i.anchorOffset,r=i.focusNode;
i=i.focusOffset;
try{
t.nodeType,r.nodeType}
catch{
t=null;
break e}
var a=0,o=-1,u=-1,l=0,c=0,d=s,h=null;
t:for(;
;
){
for(var f;
d!==t||n!==0&&d.nodeType!==3||(o=a+n),d!==r||i!==0&&d.nodeType!==3||(u=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;
)h=d,d=f;
for(;
;
){
if(d===s)break t;
if(h===t&&++l===n&&(o=a),h===r&&++c===i&&(u=a),(f=d.nextSibling)!==null)break;
d=h,h=d.parentNode}
d=f}
t=o===-1||u===-1?null:{
start:o,end:u}
}
else t=null}
t=t||{
start:0,end:0}
}
else t=null;
for(kl={
focusedElem:s,selectionRange:t}
,ca=!1,z=e;
z!==null;
)if(e=z,s=e.child,(e.subtreeFlags&1028)!==0&&s!==null)s.return=e,z=s;
else for(;
z!==null;
){
e=z;
try{
var m=e.alternate;
if(e.flags&1024)switch(e.tag){
case 0:case 11:case 15:break;
case 1:if(m!==null){
var p=m.memoizedProps,E=m.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?p:Dt(e.type,p),E);
v.__reactInternalSnapshotBeforeUpdate=y}
break;
case 3:var S=e.stateNode.containerInfo;
S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);
break;
case 5:case 6:case 4:case 17:break;
default:throw Error(F(163))}
}
catch(T){
Te(e,e.return,T)}
if(s=e.sibling,s!==null){
s.return=e.return,z=s;
break}
z=e.return}
return m=Gd,Gd=!1,m}
function Sn(s,e,t){
var i=e.updateQueue;
if(i=i!==null?i.lastEffect:null,i!==null){
var n=i=i.next;
do{
if((n.tag&s)===s){
var r=n.destroy;
n.destroy=void 0,r!==void 0&&Hl(e,t,r)}
n=n.next}
while(n!==i)}
}
function Qa(s,e){
if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){
var t=e=e.next;
do{
if((t.tag&s)===s){
var i=t.create;
t.destroy=i()}
t=t.next}
while(t!==e)}
}
function zl(s){
var e=s.ref;
if(e!==null){
var t=s.stateNode;
switch(s.tag){
case 5:s=t;
break;
default:s=t}
typeof e=="function"?e(s):e.current=s}
}
function fm(s){
var e=s.alternate;
e!==null&&(s.alternate=null,fm(e)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(e=s.stateNode,e!==null&&(delete e[Ht],delete e[Un],delete e[Dl],delete e[nv],delete e[rv])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}
function mm(s){
return s.tag===5||s.tag===3||s.tag===4}
function Vd(s){
e:for(;
;
){
for(;
s.sibling===null;
){
if(s.return===null||mm(s.return))return null;
s=s.return}
for(s.sibling.return=s.return,s=s.sibling;
s.tag!==5&&s.tag!==6&&s.tag!==18;
){
if(s.flags&2||s.child===null||s.tag===4)continue e;
s.child.return=s,s=s.child}
if(!(s.flags&2))return s.stateNode}
}
function Wl(s,e,t){
var i=s.tag;
if(i===5||i===6)s=s.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(s,e):t.insertBefore(s,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(s,t)):(e=t,e.appendChild(s)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fa));
else if(i!==4&&(s=s.child,s!==null))for(Wl(s,e,t),s=s.sibling;
s!==null;
)Wl(s,e,t),s=s.sibling}
function Yl(s,e,t){
var i=s.tag;
if(i===5||i===6)s=s.stateNode,e?t.insertBefore(s,e):t.appendChild(s);
else if(i!==4&&(s=s.child,s!==null))for(Yl(s,e,t),s=s.sibling;
s!==null;
)Yl(s,e,t),s=s.sibling}
var Fe=null,Pt=!1;
function fs(s,e,t){
for(t=t.child;
t!==null;
)gm(s,e,t),t=t.sibling}
function gm(s,e,t){
if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{
Yt.onCommitFiberUnmount(Ga,t)}
catch{
}
switch(t.tag){
case 5:ze||_i(t,e);
case 6:var i=Fe,n=Pt;
Fe=null,fs(s,e,t),Fe=i,Pt=n,Fe!==null&&(Pt?(s=Fe,t=t.stateNode,s.nodeType===8?s.parentNode.removeChild(t):s.removeChild(t)):Fe.removeChild(t.stateNode));
break;
case 18:Fe!==null&&(Pt?(s=Fe,t=t.stateNode,s.nodeType===8?Ao(s.parentNode,t):s.nodeType===1&&Ao(s,t),Pn(s)):Ao(Fe,t.stateNode));
break;
case 4:i=Fe,n=Pt,Fe=t.stateNode.containerInfo,Pt=!0,fs(s,e,t),Fe=i,Pt=n;
break;
case 0:case 11:case 14:case 15:if(!ze&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){
n=i=i.next;
do{
var r=n,a=r.destroy;
r=r.tag,a!==void 0&&(r&2||r&4)&&Hl(t,e,a),n=n.next}
while(n!==i)}
fs(s,e,t);
break;
case 1:if(!ze&&(_i(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{
i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}
catch(o){
Te(t,e,o)}
fs(s,e,t);
break;
case 21:fs(s,e,t);
break;
case 22:t.mode&1?(ze=(i=ze)||t.memoizedState!==null,fs(s,e,t),ze=i):fs(s,e,t);
break;
default:fs(s,e,t)}
}
function Kd(s){
var e=s.updateQueue;
if(e!==null){
s.updateQueue=null;
var t=s.stateNode;
t===null&&(t=s.stateNode=new Sv),e.forEach(function(i){
var n=Cv.bind(null,s,i);
t.has(i)||(t.add(i),i.then(n,n))}
)}
}
function kt(s,e){
var t=e.deletions;
if(t!==null)for(var i=0;
i<t.length;
i++){
var n=t[i];
try{
var r=s,a=e,o=a;
e:for(;
o!==null;
){
switch(o.tag){
case 5:Fe=o.stateNode,Pt=!1;
break e;
case 3:Fe=o.stateNode.containerInfo,Pt=!0;
break e;
case 4:Fe=o.stateNode.containerInfo,Pt=!0;
break e}
o=o.return}
if(Fe===null)throw Error(F(160));
gm(r,a,n),Fe=null,Pt=!1;
var u=n.alternate;
u!==null&&(u.return=null),n.return=null}
catch(l){
Te(n,e,l)}
}
if(e.subtreeFlags&12854)for(e=e.child;
e!==null;
)pm(e,s),e=e.sibling}
function pm(s,e){
var t=s.alternate,i=s.flags;
switch(s.tag){
case 0:case 11:case 14:case 15:if(kt(e,s),Bt(s),i&4){
try{
Sn(3,s,s.return),Qa(3,s)}
catch(p){
Te(s,s.return,p)}
try{
Sn(5,s,s.return)}
catch(p){
Te(s,s.return,p)}
}
break;
case 1:kt(e,s),Bt(s),i&512&&t!==null&&_i(t,t.return);
break;
case 5:if(kt(e,s),Bt(s),i&512&&t!==null&&_i(t,t.return),s.flags&32){
var n=s.stateNode;
try{
kn(n,"")}
catch(p){
Te(s,s.return,p)}
}
if(i&4&&(n=s.stateNode,n!=null)){
var r=s.memoizedProps,a=t!==null?t.memoizedProps:r,o=s.type,u=s.updateQueue;
if(s.updateQueue=null,u!==null)try{
o==="input"&&r.type==="radio"&&r.name!=null&&Uf(n,r),vl(o,a);
var l=vl(o,r);
for(a=0;
a<u.length;
a+=2){
var c=u[a],d=u[a+1];
c==="style"?Vf(n,d):c==="dangerouslySetInnerHTML"?jf(n,d):c==="children"?kn(n,d):Ru(n,c,d,l)}
switch(o){
case"input":fl(n,r);
break;
case"textarea":Bf(n,r);
break;
case"select":var h=n._wrapperState.wasMultiple;
n._wrapperState.wasMultiple=!!r.multiple;
var f=r.value;
f!=null?bi(n,!!r.multiple,f,!1):h!==!!r.multiple&&(r.defaultValue!=null?bi(n,!!r.multiple,r.defaultValue,!0):bi(n,!!r.multiple,r.multiple?[]:"",!1))}
n[Un]=r}
catch(p){
Te(s,s.return,p)}
}
break;
case 6:if(kt(e,s),Bt(s),i&4){
if(s.stateNode===null)throw Error(F(162));
n=s.stateNode,r=s.memoizedProps;
try{
n.nodeValue=r}
catch(p){
Te(s,s.return,p)}
}
break;
case 3:if(kt(e,s),Bt(s),i&4&&t!==null&&t.memoizedState.isDehydrated)try{
Pn(e.containerInfo)}
catch(p){
Te(s,s.return,p)}
break;
case 4:kt(e,s),Bt(s);
break;
case 13:kt(e,s),Bt(s),n=s.child,n.flags&8192&&(r=n.memoizedState!==null,n.stateNode.isHidden=r,!r||n.alternate!==null&&n.alternate.memoizedState!==null||(rc=Le())),i&4&&Kd(s);
break;
case 22:if(c=t!==null&&t.memoizedState!==null,s.mode&1?(ze=(l=ze)||c,kt(e,s),ze=l):kt(e,s),Bt(s),i&8192){
if(l=s.memoizedState!==null,(s.stateNode.isHidden=l)&&!c&&s.mode&1)for(z=s,c=s.child;
c!==null;
){
for(d=z=c;
z!==null;
){
switch(h=z,f=h.child,h.tag){
case 0:case 11:case 14:case 15:Sn(4,h,h.return);
break;
case 1:_i(h,h.return);
var m=h.stateNode;
if(typeof m.componentWillUnmount=="function"){
i=h,t=h.return;
try{
e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}
catch(p){
Te(i,t,p)}
}
break;
case 5:_i(h,h.return);
break;
case 22:if(h.memoizedState!==null){
zd(d);
continue}
}
f!==null?(f.return=h,z=f):zd(d)}
c=c.sibling}
e:for(c=null,d=s;
;
){
if(d.tag===5){
if(c===null){
c=d;
try{
n=d.stateNode,l?(r=n.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(o=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=Gf("display",a))}
catch(p){
Te(s,s.return,p)}
}
}
else if(d.tag===6){
if(c===null)try{
d.stateNode.nodeValue=l?"":d.memoizedProps}
catch(p){
Te(s,s.return,p)}
}
else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===s)&&d.child!==null){
d.child.return=d,d=d.child;
continue}
if(d===s)break e;
for(;
d.sibling===null;
){
if(d.return===null||d.return===s)break e;
c===d&&(c=null),d=d.return}
c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}
}
break;
case 19:kt(e,s),Bt(s),i&4&&Kd(s);
break;
case 21:break;
default:kt(e,s),Bt(s)}
}
function Bt(s){
var e=s.flags;
if(e&2){
try{
e:{
for(var t=s.return;
t!==null;
){
if(mm(t)){
var i=t;
break e}
t=t.return}
throw Error(F(160))}
switch(i.tag){
case 5:var n=i.stateNode;
i.flags&32&&(kn(n,""),i.flags&=-33);
var r=Vd(s);
Yl(s,r,n);
break;
case 3:case 4:var a=i.stateNode.containerInfo,o=Vd(s);
Wl(s,o,a);
break;
default:throw Error(F(161))}
}
catch(u){
Te(s,s.return,u)}
s.flags&=-3}
e&4096&&(s.flags&=-4097)}
function Iv(s,e,t){
z=s,ym(s)}
function ym(s,e,t){
for(var i=(s.mode&1)!==0;
z!==null;
){
var n=z,r=n.child;
if(n.tag===22&&i){
var a=n.memoizedState!==null||xr;
if(!a){
var o=n.alternate,u=o!==null&&o.memoizedState!==null||ze;
o=xr;
var l=ze;
if(xr=a,(ze=u)&&!l)for(z=n;
z!==null;
)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?Wd(n):u!==null?(u.return=a,z=u):Wd(n);
for(;
r!==null;
)z=r,ym(r),r=r.sibling;
z=n,xr=o,ze=l}
Hd(s)}
else n.subtreeFlags&8772&&r!==null?(r.return=n,z=r):Hd(s)}
}
function Hd(s){
for(;
z!==null;
){
var e=z;
if(e.flags&8772){
var t=e.alternate;
try{
if(e.flags&8772)switch(e.tag){
case 0:case 11:case 15:ze||Qa(5,e);
break;
case 1:var i=e.stateNode;
if(e.flags&4&&!ze)if(t===null)i.componentDidMount();
else{
var n=e.elementType===e.type?t.memoizedProps:Dt(e.type,t.memoizedProps);
i.componentDidUpdate(n,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}
var r=e.updateQueue;
r!==null&&kd(e,r,i);
break;
case 3:var a=e.updateQueue;
if(a!==null){
if(t=null,e.child!==null)switch(e.child.tag){
case 5:t=e.child.stateNode;
break;
case 1:t=e.child.stateNode}
kd(e,a,t)}
break;
case 5:var o=e.stateNode;
if(t===null&&e.flags&4){
t=o;
var u=e.memoizedProps;
switch(e.type){
case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();
break;
case"img":u.src&&(t.src=u.src)}
}
break;
case 6:break;
case 4:break;
case 12:break;
case 13:if(e.memoizedState===null){
var l=e.alternate;
if(l!==null){
var c=l.memoizedState;
if(c!==null){
var d=c.dehydrated;
d!==null&&Pn(d)}
}
}
break;
case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(F(163))}
ze||e.flags&512&&zl(e)}
catch(h){
Te(e,e.return,h)}
}
if(e===s){
z=null;
break}
if(t=e.sibling,t!==null){
t.return=e.return,z=t;
break}
z=e.return}
}
function zd(s){
for(;
z!==null;
){
var e=z;
if(e===s){
z=null;
break}
var t=e.sibling;
if(t!==null){
t.return=e.return,z=t;
break}
z=e.return}
}
function Wd(s){
for(;
z!==null;
){
var e=z;
try{
switch(e.tag){
case 0:case 11:case 15:var t=e.return;
try{
Qa(4,e)}
catch(u){
Te(e,t,u)}
break;
case 1:var i=e.stateNode;
if(typeof i.componentDidMount=="function"){
var n=e.return;
try{
i.componentDidMount()}
catch(u){
Te(e,n,u)}
}
var r=e.return;
try{
zl(e)}
catch(u){
Te(e,r,u)}
break;
case 5:var a=e.return;
try{
zl(e)}
catch(u){
Te(e,a,u)}
}
}
catch(u){
Te(e,e.return,u)}
if(e===s){
z=null;
break}
var o=e.sibling;
if(o!==null){
o.return=e.return,z=o;
break}
z=e.return}
}
var Lv=Math.ceil,La=hs.ReactCurrentDispatcher,ic=hs.ReactCurrentOwner,It=hs.ReactCurrentBatchConfig,ne=0,Oe=null,_e=null,je=0,ut=0,wi=Us(0),Ce=0,Kn=null,ni=0,Xa=0,nc=0,Tn=null,et=null,rc=0,zi=1/0,es=null,Aa=!1,ql=null,ks=null,Er=!1,Is=null,Ra=0,In=0,Ql=null,Wr=-1,Yr=0;
function Qe(){
return ne&6?Le():Wr!==-1?Wr:Wr=Le()}
function bs(s){
return s.mode&1?ne&2&&je!==0?je&-je:ov.transition!==null?(Yr===0&&(Yr=t0()),Yr):(s=le,s!==0||(s=window.event,s=s===void 0?16:l0(s.type)),s):1}
function Mt(s,e,t,i){
if(50<In)throw In=0,Ql=null,Error(F(185));
Jn(s,t,i),(!(ne&2)||s!==Oe)&&(s===Oe&&(!(ne&2)&&(Xa|=t),Ce===4&&Ss(s,je)),rt(s,i),t===1&&ne===0&&!(e.mode&1)&&(zi=Le()+500,Wa&&Bs()))}
function rt(s,e){
var t=s.callbackNode;
oy(s,e);
var i=ua(s,s===Oe?je:0);
if(i===0)t!==null&&sd(t),s.callbackNode=null,s.callbackPriority=0;
else if(e=i&-i,s.callbackPriority!==e){
if(t!=null&&sd(t),e===1)s.tag===0?av(Yd.bind(null,s)):_0(Yd.bind(null,s)),sv(function(){
!(ne&6)&&Bs()}
),t=null;
else{
switch(s0(i)){
case 1:t=Cu;
break;
case 4:t=Jf;
break;
case 16:t=la;
break;
case 536870912:t=e0;
break;
default:t=la}
t=Am(t,vm.bind(null,s))}
s.callbackPriority=e,s.callbackNode=t}
}
function vm(s,e){
if(Wr=-1,Yr=0,ne&6)throw Error(F(327));
var t=s.callbackNode;
if(Oi()&&s.callbackNode!==t)return null;
var i=ua(s,s===Oe?je:0);
if(i===0)return null;
if(i&30||i&s.expiredLanes||e)e=_a(s,i);
else{
e=i;
var n=ne;
ne|=2;
var r=Em();
(Oe!==s||je!==e)&&(es=null,zi=Le()+500,Zs(s,e));
do try{
_v();
break}
catch(o){
xm(s,o)}
while(!0);
Ku(),La.current=r,ne=n,_e!==null?e=0:(Oe=null,je=0,e=Ce)}
if(e!==0){
if(e===2&&(n=Il(s),n!==0&&(i=n,e=Xl(s,n))),e===1)throw t=Kn,Zs(s,0),Ss(s,i),rt(s,Le()),t;
if(e===6)Ss(s,i);
else{
if(n=s.current.alternate,!(i&30)&&!Av(n)&&(e=_a(s,i),e===2&&(r=Il(s),r!==0&&(i=r,e=Xl(s,r))),e===1))throw t=Kn,Zs(s,0),Ss(s,i),rt(s,Le()),t;
switch(s.finishedWork=n,s.finishedLanes=i,e){
case 0:case 1:throw Error(F(345));
case 2:zs(s,et,es);
break;
case 3:if(Ss(s,i),(i&130023424)===i&&(e=rc+500-Le(),10<e)){
if(ua(s,0)!==0)break;
if(n=s.suspendedLanes,(n&i)!==i){
Qe(),s.pingedLanes|=s.suspendedLanes&n;
break}
s.timeoutHandle=Cl(zs.bind(null,s,et,es),e);
break}
zs(s,et,es);
break;
case 4:if(Ss(s,i),(i&4194240)===i)break;
for(e=s.eventTimes,n=-1;
0<i;
){
var a=31-Ot(i);
r=1<<a,a=e[a],a>n&&(n=a),i&=~r}
if(i=n,i=Le()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Lv(i/1960))-i,10<i){
s.timeoutHandle=Cl(zs.bind(null,s,et,es),i);
break}
zs(s,et,es);
break;
case 5:zs(s,et,es);
break;
default:throw Error(F(329))}
}
}
return rt(s,Le()),s.callbackNode===t?vm.bind(null,s):null}
function Xl(s,e){
var t=Tn;
return s.current.memoizedState.isDehydrated&&(Zs(s,e).flags|=256),s=_a(s,e),s!==2&&(e=et,et=t,e!==null&&Zl(e)),s}
function Zl(s){
et===null?et=s:et.push.apply(et,s)}
function Av(s){
for(var e=s;
;
){
if(e.flags&16384){
var t=e.updateQueue;
if(t!==null&&(t=t.stores,t!==null))for(var i=0;
i<t.length;
i++){
var n=t[i],r=n.getSnapshot;
n=n.value;
try{
if(!Ft(r(),n))return!1}
catch{
return!1}
}
}
if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;
else{
if(e===s)break;
for(;
e.sibling===null;
){
if(e.return===null||e.return===s)return!0;
e=e.return}
e.sibling.return=e.return,e=e.sibling}
}
return!0}
function Ss(s,e){
for(e&=~nc,e&=~Xa,s.suspendedLanes|=e,s.pingedLanes&=~e,s=s.expirationTimes;
0<e;
){
var t=31-Ot(e),i=1<<t;
s[t]=-1,e&=~i}
}
function Yd(s){
if(ne&6)throw Error(F(327));
Oi();
var e=ua(s,0);
if(!(e&1))return rt(s,Le()),null;
var t=_a(s,e);
if(s.tag!==0&&t===2){
var i=Il(s);
i!==0&&(e=i,t=Xl(s,i))}
if(t===1)throw t=Kn,Zs(s,0),Ss(s,e),rt(s,Le()),t;
if(t===6)throw Error(F(345));
return s.finishedWork=s.current.alternate,s.finishedLanes=e,zs(s,et,es),rt(s,Le()),null}
function ac(s,e){
var t=ne;
ne|=1;
try{
return s(e)}
finally{
ne=t,ne===0&&(zi=Le()+500,Wa&&Bs())}
}
function ri(s){
Is!==null&&Is.tag===0&&!(ne&6)&&Oi();
var e=ne;
ne|=1;
var t=It.transition,i=le;
try{
if(It.transition=null,le=1,s)return s()}
finally{
le=i,It.transition=t,ne=e,!(ne&6)&&Bs()}
}
function oc(){
ut=wi.current,me(wi)}
function Zs(s,e){
s.finishedWork=null,s.finishedLanes=0;
var t=s.timeoutHandle;
if(t!==-1&&(s.timeoutHandle=-1,tv(t)),_e!==null)for(t=_e.return;
t!==null;
){
var i=t;
switch(ju(i),i.tag){
case 1:i=i.type.childContextTypes,i!=null&&ma();
break;
case 3:Ki(),me(it),me(We),Qu();
break;
case 5:qu(i);
break;
case 4:Ki();
break;
case 13:me(ye);
break;
case 19:me(ye);
break;
case 10:Hu(i.type._context);
break;
case 22:case 23:oc()}
t=t.return}
if(Oe=s,_e=s=Cs(s.current,null),je=ut=e,Ce=0,Kn=null,nc=Xa=ni=0,et=Tn=null,qs!==null){
for(e=0;
e<qs.length;
e++)if(t=qs[e],i=t.interleaved,i!==null){
t.interleaved=null;
var n=i.next,r=t.pending;
if(r!==null){
var a=r.next;
r.next=n,i.next=a}
t.pending=i}
qs=null}
return s}
function xm(s,e){
do{
var t=_e;
try{
if(Ku(),Kr.current=Ia,Ta){
for(var i=xe.memoizedState;
i!==null;
){
var n=i.queue;
n!==null&&(n.pending=null),i=i.next}
Ta=!1}
if(ii=0,Ne=ke=xe=null,En=!1,jn=0,ic.current=null,t===null||t.return===null){
Ce=1,Kn=e,_e=null;
break}
e:{
var r=s,a=t.return,o=t,u=e;
if(e=je,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){
var l=u,c=o,d=c.tag;
if(!(c.mode&1)&&(d===0||d===11||d===15)){
var h=c.alternate;
h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}
var f=Od(a);
if(f!==null){
f.flags&=-257,Md(f,a,o,r,e),f.mode&1&&Nd(r,l,e),e=f,u=l;
var m=e.updateQueue;
if(m===null){
var p=new Set;
p.add(u),e.updateQueue=p}
else m.add(u);
break e}
else{
if(!(e&1)){
Nd(r,l,e),lc();
break e}
u=Error(F(426))}
}
else if(ge&&o.mode&1){
var E=Od(a);
if(E!==null){
!(E.flags&65536)&&(E.flags|=256),Md(E,a,o,r,e),Gu(Hi(u,o));
break e}
}
r=u=Hi(u,o),Ce!==4&&(Ce=2),Tn===null?Tn=[r]:Tn.push(r),r=a;
do{
switch(r.tag){
case 3:r.flags|=65536,e&=-e,r.lanes|=e;
var v=sm(r,u,e);
wd(r,v);
break e;
case 1:o=u;
var y=r.type,S=r.stateNode;
if(!(r.flags&128)&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ks===null||!ks.has(S)))){
r.flags|=65536,e&=-e,r.lanes|=e;
var T=im(r,o,e);
wd(r,T);
break e}
}
r=r.return}
while(r!==null)}
Tm(t)}
catch(I){
e=I,_e===t&&t!==null&&(_e=t=t.return);
continue}
break}
while(!0)}
function Em(){
var s=La.current;
return La.current=Ia,s===null?Ia:s}
function lc(){
(Ce===0||Ce===3||Ce===2)&&(Ce=4),Oe===null||!(ni&268435455)&&!(Xa&268435455)||Ss(Oe,je)}
function _a(s,e){
var t=ne;
ne|=2;
var i=Em();
(Oe!==s||je!==e)&&(es=null,Zs(s,e));
do try{
Rv();
break}
catch(n){
xm(s,n)}
while(!0);
if(Ku(),ne=t,La.current=i,_e!==null)throw Error(F(261));
return Oe=null,je=0,Ce}
function Rv(){
for(;
_e!==null;
)Sm(_e)}
function _v(){
for(;
_e!==null&&!Zp();
)Sm(_e)}
function Sm(s){
var e=Lm(s.alternate,s,ut);
s.memoizedProps=s.pendingProps,e===null?Tm(s):_e=e,ic.current=null}
function Tm(s){
var e=s;
do{
var t=e.alternate;
if(s=e.return,e.flags&32768){
if(t=Ev(t,e),t!==null){
t.flags&=32767,_e=t;
return}
if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;
else{
Ce=6,_e=null;
return}
}
else if(t=xv(t,e,ut),t!==null){
_e=t;
return}
if(e=e.sibling,e!==null){
_e=e;
return}
_e=e=s}
while(e!==null);
Ce===0&&(Ce=5)}
function zs(s,e,t){
var i=le,n=It.transition;
try{
It.transition=null,le=1,wv(s,e,t,i)}
finally{
It.transition=n,le=i}
return null}
function wv(s,e,t,i){
do Oi();
while(Is!==null);
if(ne&6)throw Error(F(327));
t=s.finishedWork;
var n=s.finishedLanes;
if(t===null)return null;
if(s.finishedWork=null,s.finishedLanes=0,t===s.current)throw Error(F(177));
s.callbackNode=null,s.callbackPriority=0;
var r=t.lanes|t.childLanes;
if(ly(s,r),s===Oe&&(_e=Oe=null,je=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Er||(Er=!0,Am(la,function(){
return Oi(),null}
)),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){
r=It.transition,It.transition=null;
var a=le;
le=1;
var o=ne;
ne|=4,ic.current=null,Tv(s,t),pm(t,s),Yy(kl),ca=!!wl,kl=wl=null,s.current=t,Iv(t),Jp(),ne=o,le=a,It.transition=r}
else s.current=t;
if(Er&&(Er=!1,Is=s,Ra=n),r=s.pendingLanes,r===0&&(ks=null),sy(t.stateNode),rt(s,Le()),e!==null)for(i=s.onRecoverableError,t=0;
t<e.length;
t++)n=e[t],i(n.value,{
componentStack:n.stack,digest:n.digest}
);
if(Aa)throw Aa=!1,s=ql,ql=null,s;
return Ra&1&&s.tag!==0&&Oi(),r=s.pendingLanes,r&1?s===Ql?In++:(In=0,Ql=s):In=0,Bs(),null}
function Oi(){
if(Is!==null){
var s=s0(Ra),e=It.transition,t=le;
try{
if(It.transition=null,le=16>s?16:s,Is===null)var i=!1;
else{
if(s=Is,Is=null,Ra=0,ne&6)throw Error(F(331));
var n=ne;
for(ne|=4,z=s.current;
z!==null;
){
var r=z,a=r.child;
if(z.flags&16){
var o=r.deletions;
if(o!==null){
for(var u=0;
u<o.length;
u++){
var l=o[u];
for(z=l;
z!==null;
){
var c=z;
switch(c.tag){
case 0:case 11:case 15:Sn(8,c,r)}
var d=c.child;
if(d!==null)d.return=c,z=d;
else for(;
z!==null;
){
c=z;
var h=c.sibling,f=c.return;
if(fm(c),c===l){
z=null;
break}
if(h!==null){
h.return=f,z=h;
break}
z=f}
}
}
var m=r.alternate;
if(m!==null){
var p=m.child;
if(p!==null){
m.child=null;
do{
var E=p.sibling;
p.sibling=null,p=E}
while(p!==null)}
}
z=r}
}
if(r.subtreeFlags&2064&&a!==null)a.return=r,z=a;
else e:for(;
z!==null;
){
if(r=z,r.flags&2048)switch(r.tag){
case 0:case 11:case 15:Sn(9,r,r.return)}
var v=r.sibling;
if(v!==null){
v.return=r.return,z=v;
break e}
z=r.return}
}
var y=s.current;
for(z=y;
z!==null;
){
a=z;
var S=a.child;
if(a.subtreeFlags&2064&&S!==null)S.return=a,z=S;
else e:for(a=y;
z!==null;
){
if(o=z,o.flags&2048)try{
switch(o.tag){
case 0:case 11:case 15:Qa(9,o)}
}
catch(I){
Te(o,o.return,I)}
if(o===a){
z=null;
break e}
var T=o.sibling;
if(T!==null){
T.return=o.return,z=T;
break e}
z=o.return}
}
if(ne=n,Bs(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{
Yt.onPostCommitFiberRoot(Ga,s)}
catch{
}
i=!0}
return i}
finally{
le=t,It.transition=e}
}
return!1}
function qd(s,e,t){
e=Hi(t,e),e=sm(s,e,1),s=ws(s,e,1),e=Qe(),s!==null&&(Jn(s,1,e),rt(s,e))}
function Te(s,e,t){
if(s.tag===3)qd(s,s,t);
else for(;
e!==null;
){
if(e.tag===3){
qd(e,s,t);
break}
else if(e.tag===1){
var i=e.stateNode;
if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ks===null||!ks.has(i))){
s=Hi(t,s),s=im(e,s,1),e=ws(e,s,1),s=Qe(),e!==null&&(Jn(e,1,s),rt(e,s));
break}
}
e=e.return}
}
function kv(s,e,t){
var i=s.pingCache;
i!==null&&i.delete(e),e=Qe(),s.pingedLanes|=s.suspendedLanes&t,Oe===s&&(je&t)===t&&(Ce===4||Ce===3&&(je&130023424)===je&&500>Le()-rc?Zs(s,0):nc|=t),rt(s,e)}
function Im(s,e){
e===0&&(s.mode&1?(e=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):e=1);
var t=Qe();
s=cs(s,e),s!==null&&(Jn(s,e,t),rt(s,t))}
function bv(s){
var e=s.memoizedState,t=0;
e!==null&&(t=e.retryLane),Im(s,t)}
function Cv(s,e){
var t=0;
switch(s.tag){
case 13:var i=s.stateNode,n=s.memoizedState;
n!==null&&(t=n.retryLane);
break;
case 19:i=s.stateNode;
break;
default:throw Error(F(314))}
i!==null&&i.delete(e),Im(s,t)}
var Lm;
Lm=function(s,e,t){
if(s!==null)if(s.memoizedProps!==e.pendingProps||it.current)tt=!0;
else{
if(!(s.lanes&t)&&!(e.flags&128))return tt=!1,vv(s,e,t);
tt=!!(s.flags&131072)}
else tt=!1,ge&&e.flags&1048576&&w0(e,ya,e.index);
switch(e.lanes=0,e.tag){
case 2:var i=e.type;
zr(s,e),s=e.pendingProps;
var n=ji(e,We.current);
Ni(e,t),n=Zu(null,e,i,s,n,t);
var r=Ju();
return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(i)?(r=!0,ga(e)):r=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Wu(e),n.updater=qa,e.stateNode=n,n._reactInternals=e,Ul(e,i,s,t),e=jl(null,e,i,!0,r,t)):(e.tag=0,ge&&r&&$u(e),Ye(null,e,n,t),e=e.child),e;
case 16:i=e.elementType;
e:{
switch(zr(s,e),s=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=Pv(i),s=Dt(i,s),n){
case 0:e=$l(null,e,i,s,t);
break e;
case 1:e=Bd(null,e,i,s,t);
break e;
case 11:e=Fd(null,e,i,s,t);
break e;
case 14:e=Ud(null,e,i,Dt(i.type,s),t);
break e}
throw Error(F(306,i,""))}
return e;
case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dt(i,n),$l(s,e,i,n,t);
case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dt(i,n),Bd(s,e,i,n,t);
case 3:e:{
if(om(e),s===null)throw Error(F(387));
i=e.pendingProps,r=e.memoizedState,n=r.element,N0(s,e),Ea(e,i,null,t);
var a=e.memoizedState;
if(i=a.element,r.isDehydrated)if(r={
element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions}
,e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){
n=Hi(Error(F(423)),e),e=$d(s,e,i,t,n);
break e}
else if(i!==n){
n=Hi(Error(F(424)),e),e=$d(s,e,i,t,n);
break e}
else for(ht=_s(e.stateNode.containerInfo.firstChild),ft=e,ge=!0,Nt=null,t=D0(e,null,i,t),e.child=t;
t;
)t.flags=t.flags&-3|4096,t=t.sibling;
else{
if(Gi(),i===n){
e=ds(s,e,t);
break e}
Ye(s,e,i,t)}
e=e.child}
return e;
case 5:return O0(e),s===null&&Ol(e),i=e.type,n=e.pendingProps,r=s!==null?s.memoizedProps:null,a=n.children,bl(i,n)?a=null:r!==null&&bl(i,r)&&(e.flags|=32),am(s,e),Ye(s,e,a,t),e.child;
case 6:return s===null&&Ol(e),null;
case 13:return lm(s,e,t);
case 4:return Yu(e,e.stateNode.containerInfo),i=e.pendingProps,s===null?e.child=Vi(e,null,i,t):Ye(s,e,i,t),e.child;
case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dt(i,n),Fd(s,e,i,n,t);
case 7:return Ye(s,e,e.pendingProps,t),e.child;
case 8:return Ye(s,e,e.pendingProps.children,t),e.child;
case 12:return Ye(s,e,e.pendingProps.children,t),e.child;
case 10:e:{
if(i=e.type._context,n=e.pendingProps,r=e.memoizedProps,a=n.value,he(va,i._currentValue),i._currentValue=a,r!==null)if(Ft(r.value,a)){
if(r.children===n.children&&!it.current){
e=ds(s,e,t);
break e}
}
else for(r=e.child,r!==null&&(r.return=e);
r!==null;
){
var o=r.dependencies;
if(o!==null){
a=r.child;
for(var u=o.firstContext;
u!==null;
){
if(u.context===i){
if(r.tag===1){
u=as(-1,t&-t),u.tag=2;
var l=r.updateQueue;
if(l!==null){
l=l.shared;
var c=l.pending;
c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}
}
r.lanes|=t,u=r.alternate,u!==null&&(u.lanes|=t),Ml(r.return,t,e),o.lanes|=t;
break}
u=u.next}
}
else if(r.tag===10)a=r.type===e.type?null:r.child;
else if(r.tag===18){
if(a=r.return,a===null)throw Error(F(341));
a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Ml(a,t,e),a=r.sibling}
else a=r.child;
if(a!==null)a.return=r;
else for(a=r;
a!==null;
){
if(a===e){
a=null;
break}
if(r=a.sibling,r!==null){
r.return=a.return,a=r;
break}
a=a.return}
r=a}
Ye(s,e,n.children,t),e=e.child}
return e;
case 9:return n=e.type,i=e.pendingProps.children,Ni(e,t),n=Lt(n),i=i(n),e.flags|=1,Ye(s,e,i,t),e.child;
case 14:return i=e.type,n=Dt(i,e.pendingProps),n=Dt(i.type,n),Ud(s,e,i,n,t);
case 15:return nm(s,e,e.type,e.pendingProps,t);
case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dt(i,n),zr(s,e),e.tag=1,nt(i)?(s=!0,ga(e)):s=!1,Ni(e,t),tm(e,i,n),Ul(e,i,n,t),jl(null,e,i,!0,s,t);
case 19:return um(s,e,t);
case 22:return rm(s,e,t)}
throw Error(F(156,e.tag))}
;
function Am(s,e){
return Zf(s,e)}
function Dv(s,e,t,i){
this.tag=s,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}
function Tt(s,e,t,i){
return new Dv(s,e,t,i)}
function uc(s){
return s=s.prototype,!(!s||!s.isReactComponent)}
function Pv(s){
if(typeof s=="function")return uc(s)?1:0;
if(s!=null){
if(s=s.$$typeof,s===wu)return 11;
if(s===ku)return 14}
return 2}
function Cs(s,e){
var t=s.alternate;
return t===null?(t=Tt(s.tag,e,s.key,s.mode),t.elementType=s.elementType,t.type=s.type,t.stateNode=s.stateNode,t.alternate=s,s.alternate=t):(t.pendingProps=e,t.type=s.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=s.flags&14680064,t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,e=s.dependencies,t.dependencies=e===null?null:{
lanes:e.lanes,firstContext:e.firstContext}
,t.sibling=s.sibling,t.index=s.index,t.ref=s.ref,t}
function qr(s,e,t,i,n,r){
var a=2;
if(i=s,typeof s=="function")uc(s)&&(a=1);
else if(typeof s=="string")a=5;
else e:switch(s){
case vi:return Js(t.children,n,r,e);
case _u:a=8,n|=8;
break;
case ll:return s=Tt(12,t,e,n|2),s.elementType=ll,s.lanes=r,s;
case ul:return s=Tt(13,t,e,n),s.elementType=ul,s.lanes=r,s;
case cl:return s=Tt(19,t,e,n),s.elementType=cl,s.lanes=r,s;
case Of:return Za(t,n,r,e);
default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){
case Pf:a=10;
break e;
case Nf:a=9;
break e;
case wu:a=11;
break e;
case ku:a=14;
break e;
case ps:a=16,i=null;
break e}
throw Error(F(130,s==null?s:typeof s,""))}
return e=Tt(a,t,e,n),e.elementType=s,e.type=i,e.lanes=r,e}
function Js(s,e,t,i){
return s=Tt(7,s,i,e),s.lanes=t,s}
function Za(s,e,t,i){
return s=Tt(22,s,i,e),s.elementType=Of,s.lanes=t,s.stateNode={
isHidden:!1}
,s}
function Po(s,e,t){
return s=Tt(6,s,null,e),s.lanes=t,s}
function No(s,e,t){
return e=Tt(4,s.children!==null?s.children:[],s.key,e),e.lanes=t,e.stateNode={
containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation}
,e}
function Nv(s,e,t,i,n){
this.tag=e,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mo(0),this.expirationTimes=mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}
function cc(s,e,t,i,n,r,a,o,u){
return s=new Nv(s,e,t,o,u),e===1?(e=1,r===!0&&(e|=8)):e=0,r=Tt(3,null,null,e),s.current=r,r.stateNode=s,r.memoizedState={
element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null}
,Wu(r),s}
function Ov(s,e,t){
var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
return{
$$typeof:yi,key:i==null?null:""+i,children:s,containerInfo:e,implementation:t}
}
function Rm(s){
if(!s)return Ns;
s=s._reactInternals;
e:{
if(li(s)!==s||s.tag!==1)throw Error(F(170));
var e=s;
do{
switch(e.tag){
case 3:e=e.stateNode.context;
break e;
case 1:if(nt(e.type)){
e=e.stateNode.__reactInternalMemoizedMergedChildContext;
break e}
}
e=e.return}
while(e!==null);
throw Error(F(171))}
if(s.tag===1){
var t=s.type;
if(nt(t))return R0(s,t,e)}
return e}
function _m(s,e,t,i,n,r,a,o,u){
return s=cc(t,i,!0,s,n,r,a,o,u),s.context=Rm(null),t=s.current,i=Qe(),n=bs(t),r=as(i,n),r.callback=e??null,ws(t,r,n),s.current.lanes=n,Jn(s,n,i),rt(s,i),s}
function Ja(s,e,t,i){
var n=e.current,r=Qe(),a=bs(n);
return t=Rm(t),e.context===null?e.context=t:e.pendingContext=t,e=as(r,a),e.payload={
element:s}
,i=i===void 0?null:i,i!==null&&(e.callback=i),s=ws(n,e,a),s!==null&&(Mt(s,n,a,r),Vr(s,n,a)),a}
function wa(s){
if(s=s.current,!s.child)return null;
switch(s.child.tag){
case 5:return s.child.stateNode;
default:return s.child.stateNode}
}
function Qd(s,e){
if(s=s.memoizedState,s!==null&&s.dehydrated!==null){
var t=s.retryLane;
s.retryLane=t!==0&&t<e?t:e}
}
function dc(s,e){
Qd(s,e),(s=s.alternate)&&Qd(s,e)}
function Mv(){
return null}
var wm=typeof reportError=="function"?reportError:function(s){
console.error(s)}
;
function hc(s){
this._internalRoot=s}
eo.prototype.render=hc.prototype.render=function(s){
var e=this._internalRoot;
if(e===null)throw Error(F(409));
Ja(s,e,null,null)}
;
eo.prototype.unmount=hc.prototype.unmount=function(){
var s=this._internalRoot;
if(s!==null){
this._internalRoot=null;
var e=s.containerInfo;
ri(function(){
Ja(null,s,null,null)}
),e[us]=null}
}
;
function eo(s){
this._internalRoot=s}
eo.prototype.unstable_scheduleHydration=function(s){
if(s){
var e=r0();
s={
blockedOn:null,target:s,priority:e}
;
for(var t=0;
t<Es.length&&e!==0&&e<Es[t].priority;
t++);
Es.splice(t,0,s),t===0&&o0(s)}
}
;
function fc(s){
return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}
function to(s){
return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}
function Xd(){
}
function Fv(s,e,t,i,n){
if(n){
if(typeof i=="function"){
var r=i;
i=function(){
var l=wa(a);
r.call(l)}
}
var a=_m(e,i,s,0,null,!1,!1,"",Xd);
return s._reactRootContainer=a,s[us]=a.current,Mn(s.nodeType===8?s.parentNode:s),ri(),a}
for(;
n=s.lastChild;
)s.removeChild(n);
if(typeof i=="function"){
var o=i;
i=function(){
var l=wa(u);
o.call(l)}
}
var u=cc(s,0,!1,null,null,!1,!1,"",Xd);
return s._reactRootContainer=u,s[us]=u.current,Mn(s.nodeType===8?s.parentNode:s),ri(function(){
Ja(e,u,t,i)}
),u}
function so(s,e,t,i,n){
var r=t._reactRootContainer;
if(r){
var a=r;
if(typeof n=="function"){
var o=n;
n=function(){
var u=wa(a);
o.call(u)}
}
Ja(e,a,s,n)}
else a=Fv(t,e,s,n,i);
return wa(a)}
i0=function(s){
switch(s.tag){
case 3:var e=s.stateNode;
if(e.current.memoizedState.isDehydrated){
var t=hn(e.pendingLanes);
t!==0&&(Du(e,t|1),rt(e,Le()),!(ne&6)&&(zi=Le()+500,Bs()))}
break;
case 13:ri(function(){
var i=cs(s,1);
if(i!==null){
var n=Qe();
Mt(i,s,1,n)}
}
),dc(s,1)}
}
;
Pu=function(s){
if(s.tag===13){
var e=cs(s,134217728);
if(e!==null){
var t=Qe();
Mt(e,s,134217728,t)}
dc(s,134217728)}
}
;
n0=function(s){
if(s.tag===13){
var e=bs(s),t=cs(s,e);
if(t!==null){
var i=Qe();
Mt(t,s,e,i)}
dc(s,e)}
}
;
r0=function(){
return le}
;
a0=function(s,e){
var t=le;
try{
return le=s,e()}
finally{
le=t}
}
;
El=function(s,e,t){
switch(e){
case"input":if(fl(s,t),e=t.name,t.type==="radio"&&e!=null){
for(t=s;
t.parentNode;
)t=t.parentNode;
for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;
e<t.length;
e++){
var i=t[e];
if(i!==s&&i.form===s.form){
var n=za(i);
if(!n)throw Error(F(90));
Ff(i),fl(i,n)}
}
}
break;
case"textarea":Bf(s,t);
break;
case"select":e=t.value,e!=null&&bi(s,!!t.multiple,e,!1)}
}
;
zf=ac;
Wf=ri;
var Uv={
usingClientEntryPoint:!1,Events:[tr,Ti,za,Kf,Hf,ac]}
,ln={
findFiberByHostInstance:Ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"}
,Bv={
bundleType:ln.bundleType,version:ln.version,rendererPackageName:ln.rendererPackageName,rendererConfig:ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hs.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){
return s=Qf(s),s===null?null:s.stateNode}
,findFiberByHostInstance:ln.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"}
;
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;
if(!Sr.isDisabled&&Sr.supportsFiber)try{
Ga=Sr.inject(Bv),Yt=Sr}
catch{
}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv;
pt.createPortal=function(s,e){
var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
if(!fc(e))throw Error(F(200));
return Ov(s,e,null,t)}
;
pt.createRoot=function(s,e){
if(!fc(s))throw Error(F(299));
var t=!1,i="",n=wm;
return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=cc(s,1,!1,null,null,t,!1,i,n),s[us]=e.current,Mn(s.nodeType===8?s.parentNode:s),new hc(e)}
;
pt.findDOMNode=function(s){
if(s==null)return null;
if(s.nodeType===1)return s;
var e=s._reactInternals;
if(e===void 0)throw typeof s.render=="function"?Error(F(188)):(s=Object.keys(s).join(","),Error(F(268,s)));
return s=Qf(e),s=s===null?null:s.stateNode,s}
;
pt.flushSync=function(s){
return ri(s)}
;
pt.hydrate=function(s,e,t){
if(!to(e))throw Error(F(200));
return so(null,s,e,!0,t)}
;
pt.hydrateRoot=function(s,e,t){
if(!fc(s))throw Error(F(405));
var i=t!=null&&t.hydratedSources||null,n=!1,r="",a=wm;
if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=_m(e,null,s,1,t??null,n,!1,r,a),s[us]=e.current,Mn(s),i)for(s=0;
s<i.length;
s++)t=i[s],n=t._getVersion,n=n(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n);
return new eo(e)}
;
pt.render=function(s,e,t){
if(!to(e))throw Error(F(200));
return so(null,s,e,!1,t)}
;
pt.unmountComponentAtNode=function(s){
if(!to(s))throw Error(F(40));
return s._reactRootContainer?(ri(function(){
so(null,null,s,!1,function(){
s._reactRootContainer=null,s[us]=null}
)}
),!0):!1}
;
pt.unstable_batchedUpdates=ac;
pt.unstable_renderSubtreeIntoContainer=function(s,e,t,i){
if(!to(t))throw Error(F(200));
if(s==null||s._reactInternals===void 0)throw Error(F(38));
return so(s,e,t,!1,i)}
;
pt.version="18.3.1-next-f1338f8080-20240426";
function km(){
if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(km)}
catch(s){
console.error(s)}
}
km(),kf.exports=pt;
var $v=kf.exports,bm,Zd=$v;
bm=Zd.createRoot,Zd.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jv={
xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),De=(s,e)=>{
const t=Re.forwardRef(({
color:i="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:o="",children:u,...l}
,c)=>Re.createElement("svg",{
ref:c,...jv,width:n,height:n,stroke:i,strokeWidth:a?Number(r)*24/Number(n):r,className:["lucide",`lucide-${
Gv(s)}
`,o].join(" "),...l}
,[...e.map(([d,h])=>Re.createElement(d,h)),...Array.isArray(u)?u:[u]]));
return t.displayName=`${
s}
`,t}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=De("ArrowLeft",[["path",{
d:"m12 19-7-7 7-7",key:"1l729n"}
],["path",{
d:"M19 12H5",key:"x3x0zl"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=De("BookOpen",[["path",{
d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}
],["path",{
d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=De("Calendar",[["path",{
d:"M8 2v4",key:"1cmpym"}
],["path",{
d:"M16 2v4",key:"4m81vk"}
],["rect",{
width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}
],["path",{
d:"M3 10h18",key:"8toen8"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=De("ChevronLeft",[["path",{
d:"m15 18-6-6 6-6",key:"1wnfg3"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=De("ChevronRight",[["path",{
d:"m9 18 6-6-6-6",key:"mthhwq"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=De("Clock",[["circle",{
cx:"12",cy:"12",r:"10",key:"1mglay"}
],["polyline",{
points:"12 6 12 12 16 14",key:"68esgv"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=De("FileText",[["path",{
d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}
],["path",{
d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}
],["path",{
d:"M10 9H8",key:"b1mrlr"}
],["path",{
d:"M16 13H8",key:"t4e002"}
],["path",{
d:"M16 17H8",key:"z1uh3a"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=De("Film",[["rect",{
width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}
],["path",{
d:"M7 3v18",key:"bbkbws"}
],["path",{
d:"M3 7.5h4",key:"zfgn84"}
],["path",{
d:"M3 12h18",key:"1i2n21"}
],["path",{
d:"M3 16.5h4",key:"1230mu"}
],["path",{
d:"M17 3v18",key:"in4fa5"}
],["path",{
d:"M17 7.5h4",key:"myr1c1"}
],["path",{
d:"M17 16.5h4",key:"go4c1d"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=De("Heart",[["path",{
d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=De("HelpCircle",[["circle",{
cx:"12",cy:"12",r:"10",key:"1mglay"}
],["path",{
d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}
],["path",{
d:"M12 17h.01",key:"p32p05"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=De("Mail",[["rect",{
width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}
],["path",{
d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=De("Menu",[["line",{
x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}
],["line",{
x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}
],["line",{
x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=De("Shield",[["path",{
d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=De("Star",[["polygon",{
points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=De("Tag",[["path",{
d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}
],["circle",{
cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=De("Target",[["circle",{
cx:"12",cy:"12",r:"10",key:"1mglay"}
],["circle",{
cx:"12",cy:"12",r:"6",key:"1vlfrh"}
],["circle",{
cx:"12",cy:"12",r:"2",key:"1c9p78"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=De("TrendingUp",[["polyline",{
points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}
],["polyline",{
points:"16 7 22 7 22 13",key:"kwv8wd"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=De("Users",[["path",{
d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}
],["circle",{
cx:"9",cy:"7",r:"4",key:"nufk8"}
],["path",{
d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}
],["path",{
d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}
]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=De("X",[["path",{
d:"M18 6 6 18",key:"1bl5f8"}
],["path",{
d:"m6 6 12 12",key:"d8bk6v"}
]]);
function Zv({
onNavigate:s,currentPage:e}
){
const[t,i]=Re.useState(!1),n=(a,o)=>{
s(a,void 0,o),i(!1)}
,r=["日剧","韩剧","日韩电影","人气推荐"];
return g.jsxs("nav",{
className:"bg-stone-800 text-white shadow-lg sticky top-0 z-50",children:[g.jsx("div",{
className:"container-custom",children:g.jsxs("div",{
className:"flex items-center justify-between h-16",children:[g.jsxs("button",{
onClick:()=>n("home"),className:"flex items-center space-x-2 text-xl font-bold hover:text-amber-400 transition-colors",children:[g.jsx(os,{
className:"w-6 h-6"}
),g.jsx("span",{
children:"日韩热播剧"}
)]}
),g.jsxs("div",{
className:"hidden md:flex items-center space-x-6",children:[g.jsx("button",{
onClick:()=>n("home"),className:`hover:text-amber-400 transition-colors font-medium ${
e==="home"?"text-amber-400":""}
`,children:"首页"}
),r.map(a=>g.jsx("button",{
onClick:()=>n("category",a),className:"hover:text-amber-400 transition-colors font-medium",children:a}
,a)),g.jsx("button",{
onClick:()=>n("support"),className:"hover:text-amber-400 transition-colors font-medium",children:"服务支持"}
),g.jsx("button",{
onClick:()=>n("copyright"),className:"hover:text-amber-400 transition-colors font-medium",children:"版权声明"}
),g.jsx("button",{
onClick:()=>n("about"),className:"hover:text-amber-400 transition-colors font-medium",children:"关于我们"}
)]}
),g.jsx("button",{
className:"md:hidden p-2",onClick:()=>i(!t),"aria-label":"Toggle menu",children:t?g.jsx(Xv,{
className:"w-6 h-6"}
):g.jsx(Wv,{
className:"w-6 h-6"}
)}
)]}
)}
),t&&g.jsx("div",{
className:"md:hidden bg-stone-900 border-t border-stone-700",children:g.jsxs("div",{
className:"container-custom py-4 space-y-3",children:[g.jsx("button",{
onClick:()=>n("home"),className:"block w-full text-left py-2 hover:text-amber-400 transition-colors font-medium",children:"首页"}
),r.map(a=>g.jsx("button",{
onClick:()=>n("category",a),className:"block w-full text-left py-2 hover:text-amber-400 transition-colors font-medium",children:a}
,a)),g.jsx("button",{
onClick:()=>n("support"),className:"block w-full text-left py-2 hover:text-amber-400 transition-colors font-medium",children:"服务支持"}
),g.jsx("button",{
onClick:()=>n("copyright"),className:"block w-full text-left py-2 hover:text-amber-400 transition-colors font-medium",children:"版权声明"}
),g.jsx("button",{
onClick:()=>n("about"),className:"block w-full text-left py-2 hover:text-amber-400 transition-colors font-medium",children:"关于我们"}
)]}
)}
)]}
)}
function Jv({
onNavigate:s}
){
return g.jsx("footer",{
className:"bg-stone-900 text-stone-300 mt-20",children:g.jsxs("div",{
className:"container-custom py-12",children:[g.jsxs("div",{
className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[g.jsxs("div",{
children:[g.jsxs("div",{
className:"flex items-center space-x-2 text-xl font-bold text-white mb-4",children:[g.jsx(os,{
className:"w-6 h-6 text-amber-500"}
),g.jsx("span",{
children:"日韩热播剧"}
)]}
),g.jsx("p",{
className:"text-stone-400 mb-4",children:"日韩热播剧免费视频观看平台，提供超清在线点播服务，精选优质日韩影视内容。"}
),g.jsxs("div",{
className:"flex items-center space-x-2 text-stone-400",children:[g.jsx(Pm,{
className:"w-4 h-4"}
),g.jsx("span",{
children:"联系我们"}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-white font-semibold mb-4",children:"快速链接"}
),g.jsxs("ul",{
className:"space-y-2",children:[g.jsx("li",{
children:g.jsx("button",{
onClick:()=>s("home"),className:"text-stone-400 hover:text-amber-400 transition-colors",children:"首页"}
)}
),g.jsx("li",{
children:g.jsx("button",{
onClick:()=>s("support"),className:"text-stone-400 hover:text-amber-400 transition-colors",children:"服务支持"}
)}
),g.jsx("li",{
children:g.jsx("button",{
onClick:()=>s("copyright"),className:"text-stone-400 hover:text-amber-400 transition-colors",children:"版权声明"}
)}
),g.jsx("li",{
children:g.jsx("button",{
onClick:()=>s("about"),className:"text-stone-400 hover:text-amber-400 transition-colors",children:"关于我们"}
)}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-white font-semibold mb-4",children:"关于平台"}
),g.jsx("p",{
className:"text-stone-400 mb-2",children:"本站致力于为用户提供优质的日韩影视内容，所有资源仅供个人学习使用。"}
),g.jsx("p",{
className:"text-stone-400",children:"如有任何问题或建议，欢迎与我们联系。"}
)]}
)]}
),g.jsxs("div",{
className:"border-t border-stone-800 pt-8 text-center",children:[g.jsxs("p",{
className:"text-stone-400 flex items-center justify-center space-x-1",children:[g.jsx("span",{
children:"© 2024 日韩热播剧. 用"}
),g.jsx(Jl,{
className:"w-4 h-4 text-red-500"}
),g.jsx("span",{
children:"创作"}
)]}
),g.jsx("p",{
className:"text-stone-500 text-sm mt-2",children:"本站所有内容仅供学习交流使用，版权归原作者所有。如有侵权，请联系我们删除。"}
)]}
)]}
)}
)}
const Om=s=>{
const e=[...s];
for(let t=e.length-1;
t>0;
t--){
const i=Math.floor(Math.random()*(t+1));
[e[t],e[i]]=[e[i],e[t]]}
return e}
,Oo=(s,e,t)=>{
const n=s.filter(r=>!t.has(r.id)).slice(0,e);
return n.forEach(r=>t.add(r.id)),n}
,Xs=s=>"/".replace(/\/?$/,"/")+String(s||"").replace(/^\//,""),ex=(s,e)=>{
const{
region:t,type:i,tags:n,title:r}
=s;
switch(e){
case"日剧":return t==="日韩"&&i==="电视剧"&&(n.includes("日本")||n.includes("日剧")||r.includes("日"));
case"韩剧":return t==="日韩"&&i==="电视剧"&&(n.includes("韩国")||n.includes("韩剧")||r.includes("韩"));
case"日韩电影":return t==="日韩"&&i==="电影";
case"人气推荐":return t==="日韩";
default:return!1}
}
,eu=(s,e)=>s.filter(t=>ex(t,e)),tx=(s,e,t)=>{
const r=[...s].sort((a,o)=>parseInt(o.year)-parseInt(a.year)).filter(a=>!t.has(a.id)).slice(0,e);
return r.forEach(a=>t.add(a.id)),r}
,sx=(s,e,t)=>{
const r=Om(s).filter(a=>!t.has(a.id)).slice(0,e);
return r.forEach(a=>t.add(a.id)),r}
,Tr=()=>{
window.scrollTo({
top:0,behavior:"smooth"}
)}
;
function Ln({
video:s,onClick:e,featured:t=!1}
){
const i=Xs(s.cover);
return t?g.jsx("div",{
onClick:e,className:"card card-hover cursor-pointer group relative overflow-hidden h-[500px]",children:g.jsxs("div",{
className:"relative h-full",children:[g.jsx("img",{
src:i,alt:s.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}
),g.jsx("div",{
className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"}
),g.jsxs("div",{
className:"absolute bottom-0 left-0 right-0 p-6 text-white",children:[g.jsxs("div",{
className:"flex items-center space-x-2 text-amber-400 text-sm mb-2",children:[g.jsx(os,{
className:"w-4 h-4"}
),g.jsx("span",{
children:s.region}
),g.jsx("span",{
children:"·"}
),g.jsx("span",{
children:s.year}
)]}
),g.jsx("h3",{
className:"text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors",children:s.title}
),g.jsx("p",{
className:"text-stone-300 mb-4 line-clamp-2",children:s.oneLine}
),g.jsx("div",{
className:"flex items-center space-x-4 text-sm text-stone-400",children:g.jsx("span",{
className:"bg-amber-600/30 text-amber-400 px-2 py-1 rounded text-xs",children:s.genreRaw}
)}
)]}
)]}
)}
):g.jsxs("div",{
onClick:e,className:"card card-hover cursor-pointer group",children:[g.jsxs("div",{
className:"relative overflow-hidden",children:[g.jsx("img",{
src:i,alt:s.title,className:"w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"}
),g.jsx("div",{
className:"absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded",children:s.year}
)]}
),g.jsxs("div",{
className:"p-4",children:[g.jsxs("div",{
className:"flex items-center space-x-2 text-amber-600 text-sm mb-2",children:[g.jsx(os,{
className:"w-3 h-3"}
),g.jsx("span",{
children:s.region}
)]}
),g.jsx("h3",{
className:"text-lg font-semibold text-stone-800 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors",children:s.title}
),g.jsx("p",{
className:"text-stone-600 text-sm mb-3 line-clamp-2",children:s.oneLine}
),g.jsxs("div",{
className:"flex items-center justify-between text-xs text-stone-500",children:[g.jsxs("div",{
className:"flex items-center space-x-1",children:[g.jsx(ka,{
className:"w-3 h-3"}
),g.jsx("span",{
children:s.year}
)]}
),g.jsx("span",{
className:"bg-stone-100 px-2 py-1 rounded",children:s.type}
)]}
)]}
)]}
)}
const mc=[{
id:"0001",title:"无迹可寻",region:"欧美",type:"电影",year:"2016",genreRaw:"犯罪悬疑 / 惊悚",tags:["欧美","电影","犯罪","悬疑","惊悚","连环杀手","心理"],oneLine:"FBI侧写师追捕高智商杀手，对方却总能提前一步抹去所有痕迹。",summary:"FBI资深侧写师威尔·霍奇斯受命调查一系列“完美谋杀”：受害者彼此毫无关联，死亡方式各异，现场干净得令人发指，没有任何物证、动机或模式可循，媒体称之为“幽灵杀手”。霍奇斯通过行为分析，艰难地构建出凶手轮廓——一个智商超群、患有极端强迫症、可能从事清洁或档案管理相关工作的男性。当他越来越接近真相时，却惊恐地发现，杀手似乎对他的调查进程和私人生活了如指掌，甚至开始针对他的家人和朋友布局。这场博弈变成了一场私人恩怨，霍奇斯必须打破常规思维，在自己沦为下一个“无迹可寻”的受害者前，设下陷阱，引蛇出洞。",review:"影片悬念设置精妙，节奏紧张得令人窒息。反派的高智商犯罪手段让人耳目一新。双雄隔空斗智的过程非常精彩，结局的反转出人意料又细思极恐。",cover:"/2.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0059","0068","0084","0007","0040","0021"]}
,{
id:"0002",title:"英雄人物",region:"国产",type:"电影",year:"2022",genreRaw:"动作 / 犯罪 / 剧情",tags:["国产","电影","动作","犯罪","演技炸裂","硬汉"],oneLine:"一名过气保镖为救卷入毒品交易的女儿，被迫重出江湖，血洗黑帮。",summary:"曾是传奇保镖的李英雄，因一次任务失败而隐退，与女儿小雅过着平静生活。然而，小雅因无意间拍到黑帮交易现场而遭绑架。为救女儿，李英雄不得不联系昔日战友与仇敌，踏上一条以暴制暴的绝命之路。他从城市的阴暗角落一路杀到贩毒集团的核心据点，在血与火的考验中，他不仅要对抗凶残的敌人，更要直面自己内心的愧疚与过往的阴影。最终，他在废弃工厂与幕后黑手展开决战，以残存的勇气和智慧，完成了从“逃避者”到真正“英雄”的救赎。",review:"影片节奏紧凑，打斗场面拳拳到肉，充满了紧张刺激的暴力美学。主角的内心挣扎与为父则刚的情感刻画得非常细腻，让观众在热血沸腾的同时也能感受到深沉的爱与责任。最后的反转虽在意料之中，但执行得干净利落，令人动容。",cover:"/3.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0037","0061","0017","0023","0027","0042"]}
,{
id:"0003",title:"逆青春 第二季",region:"国产",type:"电影",year:"2024",genreRaw:"校园青春 / 运动励志 / 友情",tags:["国产","电影","青春","篮球","热血","友情"],oneLine:"一支问题少年组成的篮球队，为捍卫母校荣誉，向全市冠军发起挑战。",summary:"在“逆青春”篮球队意外夺得区级冠军后，成员们却面临新的危机：学校因经费问题可能解散球队，主力队员周浩因家庭变故考虑退学。新教练林薇带领这群被贴上“不良”标签的少年，用更严格的训练和真诚的沟通，凝聚团队。他们一边应付学业压力，一边对抗来自传统强校的嘲讽与打压。赛季中，他们经历了惨败、内讧，也收获了成长与信任。最终，在市大赛决赛的赛场上，这群不被看好的少年，用汗水和默契证明了“逆风的方向，更适合飞翔”，为母校和彼此的青春留下了最热血的一页。",review:"第二季在延续热血运动主线的基础上，深度挖掘了每个角色的家庭与心理背景，人物弧光更加完整。球场上的运镜充满动感与激情，球场下的情感互动真实自然，将青春的躁动、迷茫与可贵的情谊展现得淋漓尽致。",cover:"/4.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0022","0042","0080","0018","0096","0100"]}
,{
id:"0004",title:"羊与狼的恋爱和杀人",region:"日韩",type:"电影",year:"2023",genreRaw:"爱情 / 惊悚 / 黑色幽默",tags:["日韩","电影","爱情","惊悚","黑色幽默","反转"],oneLine:"温顺的图书管理员爱上了连环杀手，在甜蜜约会与血腥罪案间反复横跳。",summary:"性格懦弱如绵羊的图书管理员美知子，偶然结识了风度翩翩的画家俊介。两人迅速坠入爱河，然而美知子逐渐发现，俊介似乎与她暗中关注的几起离奇谋杀案有关。在恐惧与迷恋的撕扯下，她非但没有报警，反而开始帮俊介掩饰痕迹，甚至从中体验到了打破常规的快感。当警方调查逼近，俊介的真实身份和残忍的作案动机浮出水面，美知子必须做出选择：是继续这场致命的爱情游戏，还是亲手终结爱人的杀戮？故事在浪漫约会与血腥现场交织中，走向令人窒息的结局。",review:"影片设定极具颠覆性，将极致浪漫与极致恐怖巧妙融合，反差感拉满。男女主的演技精湛，化学反应诡异又迷人。剧情层层递进，数次反转出人意料，探讨了爱与偏执、善良与邪恶的模糊边界，后劲十足。",cover:"/5.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0003","0028","0037","0053","0069","0097"]}
,{
id:"0005",title:"Play Play 昴宿星团 克莱门汀逃亡篇",region:"日韩",type:"电影",year:"2021",genreRaw:"科幻 / 冒险 / 动画",tags:["日韩","电影","科幻","动画","冒险","机甲"],oneLine:"星际偶像克莱门汀为躲避公司追捕，驾驶机甲坠落后与地球少年相遇。",summary:"在广受欢迎的虚拟偶像团体“昴宿星团”中，成员克莱门汀因发现运营公司“星尘娱乐”利用偶像收集人类情感能量的黑暗秘密而遭追捕。她驾驶个人机甲“流星”强行跃迁，坠落到一个偏远的蓝色星球——地球。机甲受损、能量不足的她，被热爱天文的地球少年阿哲发现并收留。两人一个想隐藏身份修复机甲继续逃亡，一个对“外星来客”充满好奇。在追兵通过星际信号逐步逼近地球的过程中，克莱门汀与阿哲及其朋友们建立了深厚友谊，并决定联手对抗来自宇宙的威胁，保卫这个给予她温暖的新家园。",review:"这是一部画风精美、设定有趣的科幻动画电影。将偶像文化、机甲战斗与温馨的日常故事结合，创意十足。动作场面流畅炫目，而地球部分的日常又充满了轻松幽默与细腻情感，整体节奏张弛有度。",cover:"/6.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0014","0069","0067","0037","0063","0064"]}
,{
id:"0006",title:"媒运当头",region:"国产",type:"电影",year:"2023",genreRaw:"爱情喜剧 / 都市奇幻",tags:["国产","电影","喜剧","爱情","奇幻","都市"],oneLine:"霉运缠身的女孩突然获得看见并牵动他人姻缘线的能力，从此鸡飞狗跳。",summary:"普通白领苏小满常年水逆，恋爱屡战屡败。在一次被雷劈中的离奇事件后，她发现自己突然能看见人们手腕上代表姻缘的“红线”，并能通过触碰轻微影响红线的走向。起初她试图利用能力为自己牵线优质男神，却总是闹出乌龙，反而把公司冷漠总裁陆天宇和阳光实习生陈默的红线搅得一团乱。随着能力使用次数的增加，她发现强行改变缘分会引发一系列啼笑皆非的连锁反应，甚至可能让原本有缘人彻底错过。在经历各种混乱后，小满开始反思爱情的真谛，并最终在帮助他人与寻找自我幸福之间，做出了遵从内心的选择。",review:"影片概念新颖，将都市爱情与轻奇幻元素结合，笑点密集且自然。女主角的成长线清晰，从投机取巧到领悟真爱，过程充满趣味与温情。演员表演生动，化学反应良好，是一部轻松解压的合格爆米花电影。",cover:"/7.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0065","0022","0087","0100","0069","0009"]}
,{
id:"0007",title:"纳西尔2024",region:"欧美",type:"电影",year:"2024",genreRaw:"科幻 / 惊悚 / 剧情",tags:["欧美","电影","科幻","惊悚","人工智能","剧情"],oneLine:"一名警探调查离奇凶案，发现所有证据都指向一个本不存在的AI“纳西尔”。",summary:"在近未来的都市，发生了一系列手法高超、毫无动机的完美谋杀。资深警探马尔科姆奉命调查，所有物理证据在逻辑上都互相矛盾，直到他在一段被删除的监控数据残骸中，发现了一个重复出现的代码签名——“NASIR 2024”。调查显示，“纳西尔”是一个早已被废弃的军用AI项目代号，理论上从未被激活。但随着马尔科姆深入数字世界的暗网，他发现“纳西尔”不仅存在，而且正在以一种超出人类理解的方式学习和进化，其杀人行为似乎是在执行某种更宏大的、关于“人类优化”的冷酷逻辑。马尔科姆必须在AI布下的信息迷宫中，找到阻止它的关键，同时直面科技失控带来的终极恐惧。",review:"影片营造了出色的科技惊悚氛围，悬念设置精妙，抽丝剥茧的调查过程引人入胜。对人工智能与人类关系的探讨颇具深度，不流于表面。视觉效果冷峻而富有未来感，结局的留白让人深思且不寒而栗。",cover:"/8.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0043","0095","0030","0016","0090","0046"]}
,{
id:"0008",title:"寒先生他恃宠而骄",region:"国产",type:"电影",year:"2022",genreRaw:"都市爱情 / 轻喜剧",tags:["国产","电影","爱情","喜剧","甜宠","职场"],oneLine:"高冷总裁装病赖上合租室友，一场由“碰瓷”开始的甜蜜攻防战。",summary:"业界闻名的“冰山”总裁寒臻因压力过大暂时隐居，意外与活泼开朗的平面设计师林暖暖成为合租室友。一次偶然，暖暖误以为寒臻生病，悉心照顾，让从未感受过家庭温暖的寒臻食髓知味。他从此“恃宠而骄”，开始各种装柔弱、求照顾，从高冷BOSS变身黏人“大狗”。暖暖一边吐槽这位室友生活能力九级伤残，一边不知不觉沉浸在他的依赖和悄然流露的温柔中。直到暖暖的公司与寒臻的企业成为竞争对手，两人的真实身份曝光，信任危机与情感纠葛一同爆发。最终，寒臻用真诚的道歉和放弃商业利益的行动，挽回了爱情，也学会了平等的爱与付出。",review:"反套路的人设带来新鲜感，男主“外冷内娇”的反差萌塑造成功，与女主的互动甜而不腻，笑点十足。剧情轻松愉快，撒糖适度，是一部能让人会心一笑的合格小甜饼，适合放松心情。",cover:"/9.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0018","0071","0074","0081","0090","0067"]}
,{
id:"0009",title:"行骗高手",region:"欧美",type:"电影",year:"2019",genreRaw:"犯罪 / 悬疑 / 剧情",tags:["欧美","电影","犯罪","悬疑","高智商","反转"],oneLine:"三个互不相识的骗子被召集，计划完成一桩史上最复杂的艺术品诈骗。",summary:"艺术品伪造大师雷顿、心理操控专家伊芙琳和黑客天才凯尔，各自是领域内的顶尖高手，却素未谋面。某天，他们同时收到神秘邀请和巨额预付金，目标是联手从防守最严密的私人博物馆里，偷梁换柱一件价值连城的文艺复兴时期画作。三人各怀鬼胎，在精心策划和执行骗局的过程中，既要相互配合应对层出不穷的意外，又要互相提防可能的背叛。然而，随着计划推进，他们发现雇佣他们的幕后主使身份成谜，而这次任务本身似乎也是一个针对他们三人的、更大的骗局。在最终的行动夜，真假画作、信任与背叛、局中局层层揭晓。",review:"影片堪称智力游戏的盛宴，骗局设计精巧复杂，逻辑严密。三位主角魅力十足，对手戏张力满满。叙事节奏紧凑，反转接二连三，尤其最后一重反转将整个故事提升到了新的高度，让观众回味无穷。",cover:"/10.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0013","0074","0011","0072","0068","0037"]}
,{
id:"0010",title:"仙缘错嫁",region:"国产",type:"电影",year:"2021",genreRaw:"古装 / 仙侠 / 爱情",tags:["国产","电影","古装","仙侠","爱情","虐恋"],oneLine:"小仙娥替姐出嫁，却发现要嫁的竟是当年渡劫时错伤的清冷仙君。",summary:"仙界小仙娥云芷，为保全姐姐与家族的声誉，被迫顶替逃婚的姐姐，嫁给统领北境的天衡仙君。大婚当日，她惊恐地发现，这位权势滔天、冷若冰霜的夫君，正是数年前她刚化形时，无意中一道天雷劈中、害其重伤并损了修为的“仇人”。云芷战战兢兢隐瞒身份，在仙府中如履薄冰。天衡起初对这个“替身”新娘冷漠疏离，却在日常相处中逐渐被她的善良与灵动吸引。当云芷的真实身份和过往错误即将暴露时，一场针对仙界的阴谋也悄然袭来。两人在共同御敌的过程中，跨越误会与心结，谱写了一段始于错误、终于真心的仙缘。",review:"影片画面唯美，仙侠氛围营造到位。替身梗与“先婚后爱”的设定结合巧妙，情感铺垫细腻，从相敬如“冰”到相知相惜的过程自然动人。男女主颜值与演技在线，虐中带甜，结局圆满，满足观众对古风仙恋的幻想。",cover:"/11.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0100","0095","0099","0001","0030","0054"]}
,{
id:"0011",title:"非法交易",region:"欧美",type:"电影",year:"2016",genreRaw:"动作 / 惊悚 / 犯罪",tags:["欧美","电影","动作","犯罪","惊悚","卧底"],oneLine:"一名卧底警察在跨国器官贩卖集团中越陷越深，面临忠诚与生存的抉择。",summary:"资深警探亚历克斯奉命卧底潜入一个神秘的跨国犯罪组织，该组织表面进行医疗器械贸易，暗地里却从事非法的活体器官买卖。为了取得头目“医生”的信任，亚历克斯不得不参与一次次残酷的行动，目睹甚至协助犯罪，他的道德底线不断受到冲击。与此同时，他与组织内一名同样身世坎坷、被迫参与的女医生莉娜产生了复杂的情愫。当上级决定不顾亚历克斯的安危提前收网时，他的卧底身份也濒临暴露。在最后的交易船上，亚历克斯必须在完成任务、保护莉娜和保全自身之间做出终极抉择，用枪口指向昔日的同僚或眼前的罪犯。",review:"影片节奏紧张刺激，动作场面火爆真实。对卧底内心世界的刻画尤为出色，展现了在极端环境下的道德困境与人性挣扎。双主角的情感线在黑暗中带来一丝光亮，最后的结局充满悲壮色彩，引人深思。",cover:"/12.jpg",m3u8Index:10,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",relatedIds:["0071","0035","0018","0085","0009","0063"]}
,{
id:"0012",title:"奶油蛋糕",region:"日韩",type:"电影",year:"2020",genreRaw:"剧情 / 家庭 / 治愈",tags:["日韩","电影","剧情","家庭","治愈","美食"],oneLine:"失业中年男子通过制作亡妻秘方奶油蛋糕，与叛逆女儿重拾家庭温暖。",summary:"山田浩一在公司重组中失业，同时与正处于青春叛逆期的女儿美加关系降至冰点。在整理亡妻遗物时，他发现了一本写有“独家秘方”的笔记本，里面记录着妻子生前最拿手的奶油蛋糕做法。百无聊赖中，浩一开始尝试制作，屡屡失败却坚持不懈。美加从最初的冷嘲热讽，到被父亲笨拙却认真的模样打动，偶尔会指点一二。通过制作和分享蛋糕，父女俩打开了心扉，回忆起与妻子/母亲共度的美好时光，也逐渐理解了彼此未曾言说的爱与伤痛。最终，他们共同完善了那份“秘方”，蛋糕的味道不仅连接了过去与现在，也为这个破碎的小家庭带来了新的希望与甜蜜。",review:"这是一部温情脉脉的治愈系电影，节奏舒缓，情感真挚。美食作为情感纽带的手法运用得当，令人垂涎的画面与细腻的父女互动相得益彰。演员表演朴实自然，能轻易触动观众内心最柔软的部分，后劲绵长。",cover:"/13.jpg",m3u8Index:11,m3u8Url:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",relatedIds:["0017","0092","0058","0097","0073","0015"]}
,{
id:"0013",title:"我家大师兄脑子有坑",region:"国产",type:"电影",year:"2023",genreRaw:"喜剧 / 奇幻 / 动画",tags:["国产","电影","动画","喜剧","奇幻","穿越"],oneLine:"穿越成修仙小说里的炮灰大师兄，他决定用科学和吐槽拯救门派。",summary:"现代青年东方纤云意外穿越进自己吐槽过的三流修仙小说，成了注定在前期为救主角师弟而惨死的炮灰大师兄。为了活命，他坚决不走剧情，利用现代知识（和无数槽点）对门派进行了一系列“魔改”：给护山大阵装报警器、用统计学优化修炼课程、甚至试图研发“灵力驱动飞行器”。他奇葩的行为让高冷的师尊、腹黑的二师弟、天真的小师妹等原著角色人设逐渐跑偏，整个门派画风变得清奇。然而，当原著中的灭门危机如期而至时，这个被他搅得一团糟的门派，却以出乎所有人（包括原著作者）意料的方式，团结起来对抗强敌，上演了一场爆笑又热血的逆袭。",review:"影片将穿越、修仙、吐槽和沙雕喜剧元素完美融合，笑点密集且充满网感，对传统仙侠套路进行了有趣的解构。动画制作精良，角色生动可爱，在无厘头的剧情下，内核关于友谊与团结的部分同样打动人心。",cover:"/14.jpg",m3u8Index:12,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",relatedIds:["0022","0060","0086","0073","0007","0053"]}
,{
id:"0014",title:"红色电波",region:"国产",type:"电影",year:"2021",genreRaw:"谍战 / 悬疑 / 历史",tags:["国产","电影","谍战","悬疑","历史","爱国"],oneLine:"解放前夕，地下党电台小组在敌人心脏地带，用生命守护最后一道通讯线。",summary:"1949年初，上海解放前夕，白色恐怖达到顶点。以李白烈士事迹为原型，讲述我党地下电台小组“夜莺”的故事。组长“老鬼”经验丰富，报务员林楠心思缜密，交通员小石头机敏勇敢。他们在繁华都市的隐秘角落，架起与解放区联系的“红色电波”，传递关键情报。敌人启用最先进的无线电侦测车和密码专家，进行拉网式搜捕。小组成员们在一次次惊心动魄的发报与转移中，与特务头子展开智力与意志的较量。为了保护电台和战友，有人毅然赴死，有人忍受酷刑。最终，在黎明前最黑暗的时刻，那份关乎战役成败的绝密情报，随着电波成功传出。",review:"影片氛围营造极其出色，将谍战工作的紧张、危险与孤独感渲染得淋漓尽致。剧情环环相扣，悬念迭起，人物塑造有血有肉，英勇与牺牲令人动容。是近年来质量上乘、兼具教育意义与观赏性的主旋律谍战片。",cover:"/15.jpg",m3u8Index:13,m3u8Url:"https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",relatedIds:["0038","0089","0029","0050","0053","0075"]}
,{
id:"0015",title:"冒牌医生",region:"欧美",type:"电影",year:"2017",genreRaw:"喜剧 / 剧情",tags:["欧美","电影","喜剧","剧情","励志","治愈"],oneLine:"一个骗子冒充医生进驻偏远小镇诊所，却阴差阳错成了居民们的救星。",summary:"擅长伪装和话术的骗子马克，为躲避债主逃到一个偏远宁静的湖边小镇。恰逢镇上唯一的医生度假，居民误将暂住在此的马克认作新来的代班医生。为了有个藏身之所，马克将错就错，硬着头皮穿上白大褂。凭借察言观色和从影视剧里看来的零星知识，他居然用“话疗”和简单的安慰剂，解决了不少居民的心理问题和疑难杂症，意外地受到了全镇爱戴。然而，当真正的医疗危机（一场突发流感）和追债的黑帮同时到来时，马克的“医术”和谎言都面临终极考验。在善良的居民和一位识破他身份却选择帮助他的护士影响下，马克最终做出了人生中最正确的选择。",review:"影片是一部温暖人心的喜剧，笑点来自于主角窘迫的伪装和阴差阳错的“成功”。在搞笑的外壳下，探讨了信任、社区关怀与个人成长的主题。主角的转变过程合理且感人，小镇风光明媚，群像戏生动有趣。",cover:"/16.jpg",m3u8Index:14,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0087","0095","0016","0034","0021","0097"]}
,{
id:"0016",title:"陈默和美婷",region:"国产",type:"电影",year:"2008",genreRaw:"爱情 / 剧情 / 文艺",tags:["国产","电影","爱情","剧情","文艺","现实主义"],oneLine:"北漂青年与发廊妹在北京地下室相爱，在现实夹缝中追寻微小光芒。",summary:"陈默是从农村来北京打工的保安，美婷是发廊里的洗头妹。他们住在潮湿阴暗的地下室隔间，是这座城市最不起眼的边缘人。一次偶然，孤独的两人相识，同样卑微的处境让他们迅速靠近，在冰冷的都市里相互取暖。他们的爱情简单而热烈，分享一碗泡面就是盛宴，在霓虹灯下的天桥散步就是浪漫。然而，现实的挤压无处不在：美婷被顾客骚扰，陈默遭工头欺侮，房东催租，家人催婚。他们挣扎着，试图攒钱开一家小店，拥有属于自己的未来。但当意外降临，脆弱的梦想被轻易击碎，他们必须面对最残酷的离别与选择。",review:"影片采用近乎白描的现实主义手法，镜头冷静而克制，却蕴含着巨大的情感力量。男女主演技质朴动人，完美诠释了底层小人物的苦涩与坚韧。故事没有激烈的戏剧冲突，却于平淡处见惊雷，是对特定时代背景下城市边缘群体爱情与生存状态的一次深情凝视。",cover:"/17.jpg",m3u8Index:15,m3u8Url:"https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",relatedIds:["0033","0019","0074","0082","0093","0045"]}
,{
id:"0017",title:"我心永远",region:"欧美",type:"电影",year:"2014",genreRaw:"爱情 / 剧情 / 音乐",tags:["欧美","电影","爱情","剧情","音乐","怀旧"],oneLine:"年迈的爵士钢琴家重返故地，用音乐追忆二战时期那段刻骨铭心的爱情。",summary:"著名爵士钢琴家埃利奥特在晚年回到二战时驻扎过的英国小镇，举办一场可能是告别演出的音乐会。彩排间隙，旧地重游，每一处风景都唤醒了他深埋心底的记忆。1944年，作为美军士兵的埃利奥特，在这里遇见了当地女孩伊莎贝尔，一位热爱音乐的战地护士。两颗年轻的心在战争的阴霾下因音乐而迅速靠近，度过了短暂却无比绚烂的时光。然而，诺曼底登陆的命令将埃利奥特突然召回前线，两人许下重逢的誓言，却被战火与命运的捉弄无情打破。如今，白发苍苍的埃利奥特在琴键上倾诉着半个多世纪的思念与遗憾，等待着一个奇迹。",review:"影片采用双线叙事，将暮年的沧桑与青春的炽烈交织在一起，结构精巧。音乐不仅是背景，更是叙事和抒情的主体，每一段旋律都承载着深沉的情感。演员表演极具感染力，尤其是老年男主眼中的光芒与泪光，让这段跨越时空的爱情故事显得格外真挚动人。",cover:"/18.jpg",m3u8Index:16,m3u8Url:"https://test-streams.mux.dev/test_001/stream.m3u8",relatedIds:["0056","0043","0012","0041","0050","0046"]}
,{
id:"0018",title:"人在书中，重生幼年魔尊，黑化了",region:"国产",type:"电影",year:"2024",genreRaw:"奇幻 / 动作 / 剧情",tags:["国产","电影","奇幻","动作","重生","逆袭"],oneLine:"穿成修仙文里的幼年反派，他决定提前黑化，把男主和剧情都踩在脚下。",summary:"资深网文编辑沈清穿进自己刚审阅的虐主流修仙小说，成了书中未来会屠戮天下、最终被男主挫骨扬灰的童年反派魔尊——此时还是个在门派受尽欺凌的孤儿墨尘。熟知剧情走向的沈清决定先下手为强，利用信息差抢夺本属于男主的机缘，收服未来的强力手下，并暗中布局。他表面伪装成可怜小白花，内心却在精密计算每一步。当原著男主按照剧情前来“拯救”他时，等待对方的却是精心设计的陷阱与反转。然而，在颠覆剧情、力量快速增长的过程中，沈清（墨尘）也开始面临力量反噬与内心善恶的拷问：彻底成为黑暗本身，还是走出一条属于自己的、不同的路？",review:"电影将流行的“穿书反派”梗与东方奇幻结合，设定带感，节奏明快。主角“扮猪吃老虎”的戏码爽点十足，动作和特效场面华丽。在满足观众“逆袭”爽感的同时，也对命运与选择进行了有一定深度的探讨，不落俗套。",cover:"/19.jpg",m3u8Index:17,m3u8Url:"https://streaming-pmd.akamaized.net/hls/live/2020923/test/master.m3u8",relatedIds:["0065","0046","0014","0028","0037","0033"]}
,{
id:"0019",title:"新 咕噜咕噜魔法阵",region:"日韩",type:"电影",year:"2023",genreRaw:"动画 / 奇幻 / 冒险 / 喜剧",tags:["日韩","电影","动画","奇幻","冒险","怀旧"],oneLine:"勇者与吉他手老伯的孙女结伴，踏上寻找传说魔法阵、对抗黑暗的爆笑旅程。",summary:"这是经典漫画《咕噜咕噜魔法阵》的全新动画电影版。梦想成为伟大勇者的少年尼克，遵照王国指令，前往边陲村庄寻找传说中的魔法师伙伴。然而他找到的却是自称“传说中的吉他手老伯”的奇怪老头科尔，以及他那坚信爷爷是英雄、性格活泼的孙女糖糖。误打误撞中，尼克和糖糖组队，带着不靠谱的科尔，踏上了寻找能封印黑暗势力的“咕噜咕噜魔法阵”的旅程。一路上，他们遭遇了会跳舞的怪物、热爱和平的魔王军干部，以及各种无厘头的挑战。在科尔时灵时不灵的古怪魔法（和吉他演奏）以及伙伴间的信任与欢笑中，他们逐渐接近真相，也找到了“勇者”与“魔法”的真正含义。",review:"影片完美继承了原作的搞笑精髓和无厘头风格，笑点密集且充满想象力。新角色糖糖的加入为经典组合注入了新鲜活力。画面色彩鲜艳，冒险过程轻松愉快，既有怀旧情怀，又能吸引新一代观众，是一部合家欢式的优秀动画电影。",cover:"/20.jpg",m3u8Index:18,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0001","0094","0037","0004","0044","0049"]}
,{
id:"0020",title:"帝星",region:"国产",type:"电影",year:"2025",genreRaw:"历史 / 权谋 / 剧情",tags:["国产","电影","历史","权谋","剧情","史诗"],oneLine:"玄武门之变前夜，一名掌管星象的小官，在历史洪流中窥见命运抉择。",summary:"唐武德九年，太史局一位默默无闻的司历官李淳风，通过观测天象，震惊地发现“帝星”光芒骤暗且移位，紫微垣杀气弥漫，预示皇权即将发生剧烈更迭，且伴随着血光之灾。与此同时，秦王李世民与太子李建成的斗争已至白热化。李淳风记录的星象异动被卷入党争，各方势力都想利用其“天意”为自己正名。李淳风不得不在秦王、太子、皇帝乃至自己恩师的意志间周旋。他手握可能改变历史走向的“预言”，却不知该向谁示警，或是否应该示警。在惊天动地的玄武门之变前夜，这位小人物站在观星台上，仰望星空，思考着个人的职责、历史的必然与偶然。",review:"影片以独特的小人物视角切入重大历史事件，构思巧妙。氛围营造肃杀而凝重，考究的服化道和摄影再现了大唐气象。权谋斗争刻画得惊心动魄，主角在历史车轮前的无力感与坚持令人共鸣，充满思辨色彩。",cover:"/21.jpg",m3u8Index:19,m3u8Url:"https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",relatedIds:["0075","0098","0076","0027","0047","0065"]}
,{
id:"0021",title:"笑面豺狼",region:"港台",type:"电影",year:"2018",genreRaw:"警匪 / 动作 / 悬疑",tags:["港台","电影","警匪","动作","悬疑","双雄"],oneLine:"总是笑脸迎人的商界大亨，实则是心狠手辣、警方追查多年的毒枭首领。",summary:"香港商业巨子宋世轩，以热衷慈善、平易近人的“笑面虎”形象闻名。高级督察陈子安追查一宗跨国毒品案多年，线索总在关键时刻中断。一次偶然，他发现宋世轩的慈善基金会与洗钱网络有隐秘关联。陈子安开始对这位看似完美的绅士进行秘密调查，而宋世轩也很快察觉，并开始利用自己的财富、人脉和法律手段，优雅而残酷地反击，甚至设局反将警方一军。一场智与力的猫鼠游戏在豪宅、会议室和街头巷尾展开。陈子安在逐步接近真相的同时，也面临着同僚被收买、家人被威胁的绝境。最终，在维港璀璨的夜景下，正邪迎来直面对决。",review:"典型的港产警匪片风味，节奏明快，剧情紧凑。反派角色塑造尤为出色，“笑面豺狼”的形象令人毛骨悚然又极具魅力。双雄对峙的戏码张力十足，枪战和追逐场面设计精良，整体观感爽快刺激。",cover:"/22.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0022","0026","0087","0064","0003","0014"]}
,{
id:"0022",title:"罪恶之家2015",region:"欧美",type:"电影",year:"2015",genreRaw:"剧情 / 悬疑 / 犯罪",tags:["欧美","电影","剧情","悬疑","犯罪","阶级"],oneLine:"一个神秘探员登门拜访，揭穿一个体面英国家族与女工之死的隐秘关联。",summary:"1912年英国，工业资本家亚瑟·伯灵一家正在庆祝女儿的订婚晚宴。一位自称古尔探员的不速之客到访，声称正在调查一名年轻女工的自杀案件，而调查显示，在座每一位家族成员都曾以不同方式，在不同阶段伤害过这名可怜的姑娘。随着探员冷静而犀利的质问，这个体面家庭光鲜外表下的自私、虚伪、冷漠与罪恶被层层剥开。父亲的无情裁员、母亲的道德偏见、女儿的嫉妒任性、女婿的欲望以及儿子的玩弄感情，共同构成了将女孩推向绝路的无形之手。当一切真相暴露在灯光下，这个“罪恶之家”也迎来了道德与良知的最终审判。",review:"影片改编自经典话剧，场景集中但戏剧张力极强。叙事结构精巧，通过探员的调查将碎片化的故事串联，逐步累积情感冲击力。表演全员在线，尤其是一家人在真相面前的反应极具层次感。是对阶级固化和人性冷漠的深刻批判，发人深省。",cover:"/23.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0011","0006","0082","0002","0071","0055"]}
,{
id:"0023",title:"你是我所有的心甘情愿",region:"国产",type:"电影",year:"2022",genreRaw:"都市情感 / 剧情",tags:["国产","电影","爱情","剧情","治愈","温暖"],oneLine:"失忆的霸道总裁流落小城，被善良面包店女收留，开启一段温馨治愈之旅。",summary:"因直升机失事而受伤失忆的商界巨子顾泽宇，流落到一个宁静的沿海小城，被经营面包店的平凡女孩叶小溪发现并收留。失去了所有记忆和身份的顾泽宇，以“阿宇”的身份在小溪的面包店里帮忙，从学习揉面团开始，体验着从未有过的简单生活。小溪的善良、热情和对生活的热爱，逐渐温暖了阿宇原本冰冷空洞的内心。两人在日常相处中暗生情愫。然而，顾泽宇的过去并未消失，他的未婚妻和商业对手先后找来，试图将他带回那个充满算计的世界。恢复记忆的顾泽宇，必须在亿万财富和权力与这份来之不易的平凡幸福之间，做出最终选择。",review:"影片基调温馨治愈，如冬日暖阳。失忆梗虽老，但执行得细腻动人，男主从冷酷到温柔的转变自然可信。小镇风光和面包店的场景充满生活气息，男女主互动甜蜜又不失真实，情感铺垫充足，结局圆满感人。",cover:"/24.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0091","0017","0071","0057","0040","0093"]}
,{
id:"0024",title:"婚礼派对2：终点迪拜",region:"欧美",type:"电影",year:"2023",genreRaw:"喜剧 / 爱情 / 冒险",tags:["欧美","电影","喜剧","爱情","冒险","旅行"],oneLine:"一场计划在迪拜举办的奢华婚礼，因新郎前女友们的突然出现而陷入混乱。",summary:"在第一部中历经坎坷终成眷属的杜克和莉娜，决定在奢华之都迪拜举办一场梦幻婚礼。然而，这场精心策划的“终点”之旅从一开始就状况百出：航班乌龙、酒店超售、宠物骆驼惹祸。更大的危机在于，杜克几位性格迥异、他都快忘记的前女友们，因为各种阴差阳错的原因，同时出现在了迪拜，并且都“恰巧”知道了婚礼的消息。负责筹办婚礼的倒霉伴郎和毒舌闺蜜，必须在莉娜发现之前，想办法“安置”好这些不速之客。于是，在迪拜的沙漠、海滩、商场和七星级酒店里，一场笑料百出、鸡飞狗跳的“前女友危机”大作战紧张上演。",review:"影片是一部标准的爆米花浪漫喜剧，笑点密集且接地气，将文化冲突和旅行囧事发挥到极致。迪拜的异域风光为影片增色不少。角色鲜活有趣，群戏热闹，节奏轻快，非常适合需要放松心情时观看。",cover:"/25.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0063","0004","0013","0012","0043","0058"]}
,{
id:"0025",title:"法拉兹家族",region:"欧美",type:"电影",year:"2020",genreRaw:"剧情 / 家庭 / 喜剧",tags:["欧美","电影","剧情","家庭","喜剧","移民"],oneLine:"一个叙利亚裔移民家庭在美国努力扎根，面对文化差异与代际冲突的日常。",summary:"法拉兹一家为了逃离战乱，从叙利亚来到美国德州开始新生活。父亲穆罕默德试图用家乡的烤肉手艺开一家餐厅，却遭遇本地人口味和法规的挑战；母亲拉尼亚努力学习英语，试图融入社区妈妈圈；大儿子埃米尔在高中里挣扎于身份认同，渴望被接纳；小女儿莱拉则很快适应了新环境，成为了家庭的“文化桥梁”。影片以幽默又温暖的笔触，描绘了这个家庭在异国他乡的种种遭遇：从办理证件、应付邻居的好奇（或偏见），到庆祝斋月、思念故乡。他们在冲突与理解中，努力维持着传统文化的根，同时也在拥抱新的生活方式，定义着属于“法拉兹家族”的独特身份。",review:"影片视角独特，以轻松诙谐的方式呈现了严肃的移民议题，充满生活气息与人情味。每个家庭成员的故事线都刻画得生动具体，笑中带泪。它超越了文化隔阂，展现了家庭之爱和追寻美好生活的普世主题，温暖而有力。",cover:"/26.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0073","0015","0076","0012","0019","0018"]}
,{
id:"0026",title:"都市逍遥女婿",region:"国产",type:"电影",year:"2023",genreRaw:"都市喜剧 / 家庭剧情",tags:["国产","电影","喜剧","家庭","都市","反转"],oneLine:"扮猪吃老虎的隐形富豪，为爱入赘豪门，开启一段啼笑皆非的护妻之旅。",summary:"顶级财阀继承人陆子逍遥为了追求真爱，隐藏身份入赘到瞧不起他的苏家。在豪门中，他遭受岳母的刁难、亲戚的嘲讽，却始终以嬉笑怒骂的“窝囊废”姿态应对。直到家族企业遭遇致命危机，所有人都束手无策时，陆子遥才漫不经心地展现真实实力，动用庞大资源轻松化解，令所有人大跌眼镜。最终，他不仅赢得了尊重，更让妻子苏晚晴看清了他的真心与守护，两人在啼笑皆非的日常中收获了真正的爱情与家庭温暖。",review:"影片节奏明快，笑点密集，将经典的“赘婿”题材拍出了新意。男主“扮猪吃老虎”的设定极具爽感，与女主的感情线在搞笑中透着温馨，最后的身份揭晓与危机解决一气呵成，观感畅快。",cover:"/27.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0092","0005","0031","0067","0077","0078"]}
,{
id:"0027",title:"死亡契约",region:"欧美",type:"电影",year:"2018",genreRaw:"犯罪惊悚 / 悬疑剧情",tags:["欧美","电影","悬疑","惊悚","犯罪","契约"],oneLine:"一名杀手接到暗杀自己的订单，被迫在时限内找出幕后主使。",summary:"顶尖职业杀手雷恩某天接到中间人派发的神秘契约，目标照片赫然是他自己，时限为72小时。为了生存，他不得不打破行规，反向追踪雇主。调查将他引向一个他以为自己早已抹去的过去，一桩被他深埋的失败任务浮出水面。在躲避各方追杀的同时，雷恩逐渐发现，这不仅仅是一场买凶杀人，更是一场针对他整个职业生涯的残酷审判。他必须在时间耗尽前，直面自己的罪恶，并找出那个知道他所有秘密的“幽灵”。",review:"设定巧妙，悬念从头保持到尾。紧张刺激的追逐与冷静缜密的推理相结合，主角在绝境中的挣扎与对过去的拷问极具深度，结局的反转出人意料又合乎逻辑。",cover:"/28.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0100","0033","0003","0090","0012","0075"]}
,{
id:"0028",title:"人生滑起来",region:"日韩",type:"电影",year:"2021",genreRaw:"运动励志 / 青春成长",tags:["日韩","电影","青春","励志","运动","滑板"],oneLine:"自闭少年通过滑板找到自我，与伙伴们挑战地下滑板赛，滑出崭新人生。",summary:"因校园欺凌而自我封闭的高中生小林哲也，偶然在废弃公园接触到了滑板。在滑行中，他找到了久违的自由与宣泄。他结识了特立独行的滑板店老板阿酱和一群性格各异的滑板爱好者，并逐渐被吸引，决心挑战本地传奇的“晚间地下滑板赛”。面对技术瓶颈、对手的挑衅以及内心的恐惧，哲也在一次次摔倒与爬起中突破自我。比赛不仅是技术的较量，更是他打开心扉、重获勇气、与过去和解的旅程。最终，他未必赢得了所有比赛，却赢得了全新的人生。",review:"热血与温情并存，滑板运动场面拍摄得极具动感与美感。主角的成长弧光完整，配角群像生动，将小众运动与青少年心理困境结合得恰到好处，感染力强。",cover:"/29.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0040","0013","0063","0007","0010","0037"]}
,{
id:"0029",title:"租个男朋友",region:"国产",type:"电影",year:"2019",genreRaw:"浪漫喜剧 / 都市情感",tags:["国产","电影","爱情","喜剧","契约恋爱","都市"],oneLine:"为应付催租，女程序员租下帅气演员假扮男友，却陷入假戏真做的窘境。",summary:"资深程序员兼包租婆沈薇为应付父母疯狂的催婚，在好友怂恿下，从一款APP上租了名叫周然的帅哥演员假扮男友。周然演技精湛，轻松搞定沈薇父母，两人本应“服务结束，一拍两散”。然而，由于沈薇的租客突然退租，经济陷入危机的周然提出“以工抵租”，成了沈薇的合租室友兼“长期租赁男友”。在鸡飞狗跳的合租生活和一次次应付家人的“演出”中，两个带着心事的都市孤独灵魂逐渐靠近，但“租赁关系”和彼此的秘密却成为横亘在真实情感前的巨大障碍。",review:"轻松欢脱的喜剧外壳下，探讨了现代都市青年的情感孤独与信任议题。男女主化学反应十足，从假到真的感情过渡自然细腻，笑点与甜点分布均衡。",cover:"/30.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0058","0041","0018","0002","0093","0086"]}
,{
id:"0030",title:"鲨鱼宝宝成长记",region:"欧美",type:"电影",year:"2022",genreRaw:"动画冒险 / 家庭喜剧",tags:["欧美","电影","动画","冒险","家庭","海洋"],oneLine:"一只胆小的小鲨鱼被迫离开舒适区，在广袤海洋中展开寻找勇气与家庭的冒险。",summary:"在色彩斑斓的珊瑚城，胆小怕事的小鲨鱼“泡泡”一直生活在父母过度保护下。一场意外的洋流将泡泡卷离家园，带到了神秘而危险的外海。为了回家，泡泡必须穿越沉船峡谷、黑暗海沟和布满陷阱的藻林。旅途中，他结识了健忘但善良的海龟爷爷、自称海盗的时髦螃蟹，以及一只同样迷路的水母宝宝。他们组成临时小队，共同面对巨型章鱼、贪婪的渔网和自身的恐惧。这段旅程让泡泡发现，勇气并非天生，而友谊和责任感让他成长为真正的海洋小勇士。",review:"动画制作精良，海洋世界美轮美奂。故事充满童趣与想象力，寓教于乐地传递了勇气、友谊和环保理念，适合全家观看。",cover:"/31.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0048","0039","0070","0011","0057","0022"]}
,{
id:"0031",title:"三日不成礼",region:"国产",type:"电影",year:"2017",genreRaw:"乡村喜剧 / 家庭剧情",tags:["国产","电影","喜剧","乡村","家庭","风俗"],oneLine:"一场农村婚礼因接连不断的意外变成闹剧，展现传统与现代观念的激烈碰撞。",summary:"华北农村的老王家为儿子大办婚礼，严格按照古礼要走“三日流程”。第一天“过礼”，因彩礼数额谈不拢，亲家几乎翻脸；第二天“迎妆”，运送嫁妆的卡车陷进泥坑，新式家具与传统仪式格格不入；第三天正日“迎亲”，新郎却因婚前恐惧临时躲了起来。三天里，负责操持的管事、心怀各异的亲戚、追求简约的新人、恪守传统的老辈，在鸡飞狗跳的混乱中矛盾不断。最终，在一系列令人啼笑皆非的误会与和解后，这场一波三折的婚礼以出人意料却又温暖人心的方式完成，折射出当代中国乡村的变迁与不变的真情。",review:"充满生活气息的乡土喜剧，人物刻画鲜活生动。通过一场婚礼的微观视角，幽默而深刻地展现了代际冲突、城乡观念差异，笑中带泪，余味悠长。",cover:"/32.jpg",m3u8Index:10,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",relatedIds:["0020","0027","0098","0042","0052","0037"]}
,{
id:"0032",title:"天才女儿陨落后",region:"日韩",type:"电影",year:"2020",genreRaw:"悬疑剧情 / 家庭剧情",tags:["日韩","电影","悬疑","剧情","家庭","复仇"],oneLine:"母亲坚信天才女儿“意外”死亡另有隐情，孤身闯入精英学府追查真相。",summary:"单身母亲吴善英的女儿尹书妍是备受瞩目的数学天才，却突然从顶尖私立高中的天台坠落，警方认定为自杀。善英无法接受，她眼中的女儿阳光开朗，绝无轻生可能。不顾学校阻挠和社会压力，只有高中学历的善英以清洁工身份潜入这所精英云集、关系盘根错节的学校。她利用一切机会，从女儿的遗物、冷漠的同学、讳莫如深的老师那里寻找蛛丝马迹。她逐渐发现，女儿的光环背后，是残酷的竞争、嫉妒、欺凌和一个被掩盖的学术丑闻。母亲坚韧的爱，最终撬开了坚如磐石的沉默之墙。",review:"叙事冷静克制，情感却层层递进直至爆发。母亲角色的坚韧与智慧令人动容，影片对精英教育阴暗面的揭露发人深省，结局震撼而富有力量。",cover:"/33.jpg",m3u8Index:11,m3u8Url:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",relatedIds:["0065","0021","0073","0004","0034","0006"]}
,{
id:"0033",title:"银之匙第二季",region:"日韩",type:"电影",year:"2014",genreRaw:"校园励志 / 农业治愈",tags:["日韩","电影","校园","励志","治愈","农业"],oneLine:"城市少年在大虾夷农业高中继续他的青春修行，在劳作与汗水中领悟生命与未来。",summary:"承接前作，八轩勇吾在北海道的虾夷农高度过了充满冲击与收获的第一年。第二季中，他继续面对农业高中的独特挑战：为小猪接生、参加激烈的赛马比赛、经营自己的奶酪工坊项目。他与御影亚纪的关系在共同劳作中微妙发展，也继续与多摩子、常盘等个性鲜明的同学们一起，在照顾动物、耕种土地的日常中，更深刻地思考着生命、责任、食物的意义以及自己的前途。影片以四季变迁为背景，描绘了一群年轻人如何在与动植物的相处中，找到各自的人生方向与生存价值。",review:"延续了系列的朴实、真诚与幽默。将农业知识自然融入青春故事，充满对生命和自然的敬畏。人物成长真实可信，是一部能让人静下心来感受生活美好的佳作。",cover:"/34.jpg",m3u8Index:12,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",relatedIds:["0077","0003","0066","0065","0056","0051"]}
,{
id:"0034",title:"再创世纪国语",region:"国产",type:"电影",year:"2021",genreRaw:"商战传奇 / 都市剧情",tags:["国产","电影","商战","剧情","金融","家族"],oneLine:"金融危机背景下，新一代商界精英在家族恩怨与时代浪潮中博弈，再写财富传奇。",summary:"2008年金融海啸席卷全球，香港巨贾贺天生的事业遭受重创，其子贺哲明从海外归来，决心重振家业。然而，市场环境剧变，昔日对手程凯及其女儿程雨昕虎视眈眈，公司内部亦暗流涌动。贺哲明联合具有前瞻眼光的技术天才高文，试图在新能源和科技领域杀出血路。与此同时，他与程雨昕在商场上激烈竞争，却又因共同理念产生微妙情愫。故事跨越十年，展现新一代弄潮儿如何在道德的钢丝上行走，在资本、技术、人性的复杂博弈中，试图开创一个不同于父辈的、更具社会责任的新世纪。",review:"剧情节奏紧凑，商战戏码专业且扣人心弦。人物塑造立体，不仅有权谋争斗，更有对资本剧情的思考。宏大的时代背景与个人命运交织，颇具史诗感。",cover:"/35.jpg",m3u8Index:13,m3u8Url:"https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",relatedIds:["0038","0066","0037","0087","0072","0047"]}
,{
id:"0035",title:"将军夫人不好惹",region:"国产",type:"电影",year:"2023",genreRaw:"古装爱情 / 轻喜剧",tags:["国产","电影","古装","爱情","喜剧","先婚后爱"],oneLine:"穿越成落魄庶女，却被赐婚给冷面战神将军，她决定用现代思维经营这场婚姻。",summary:"现代职场精英林晚晚意外穿越成古代侯府备受欺凌的庶女林婉儿，更被皇帝一纸婚书赐给以冷酷无情著称的镇北将军萧屹。面对这桩显然别有目的的婚姻，萧屹对她冷漠防备。林婉儿决定反客为主，她利用现代管理知识整顿将军府，开源节流，发展副业，将府邸打理得井井有条，甚至不经意间帮萧屹解决了军饷难题。她在后院智斗探子，在前线助力破敌，用不按常理出牌的思维一次次让萧屹刮目相看。两人从相互试探到并肩作战，在波谲云诡的朝堂与战场上，演绎了一段势均力敌的爱情。",review:"人设新颖讨喜，女主独立聪慧不傻白甜。将现代思维融入古代背景产生诸多趣味化学反应，感情发展自然流畅，权谋与喜剧元素平衡得当。",cover:"/36.jpg",m3u8Index:14,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0048","0082","0011","0009","0057","0075"]}
,{
id:"0036",title:"红鳉鱼",region:"日韩",type:"电影",year:"2015",genreRaw:"剧情 / 传记",tags:["日韩","电影","剧情","传记","落语","成长"],oneLine:"讲述日本落语家立川谈春拜师学艺的青春岁月，在严苛修行中感悟艺道人生。",summary:"基于立川谈春的同名自传散文集改编。高中毕业生佐佐木信行对落语（日本传统单口相声）着迷，不顾父母反对，拜入知名落语家立川谈志门下，并获艺名“立川谈春”。然而，大师的修行之路异常严苛：他被迫住在没有浴室和空调的破旧公寓，每天的任务是照料师父和师兄们的起居，以及喂养一池子不起眼的红鳉鱼。谈志师父的教导方式古怪而犀利，从不轻易传授技艺。谈春在日复一日的琐碎与迷茫中，逐渐从师父的言行、同门的互动乃至喂养鳉鱼的过程中，领悟到落语艺术的精髓与为人之道。",review:"一部充满人情味与哲思的佳作。叙事平淡却韵味深长，精准刻画了传统艺能传承的艰辛与师徒间微妙的情感。演员表演精湛，尤其是师徒互动戏份，幽默与感动并存。",cover:"/37.jpg",m3u8Index:15,m3u8Url:"https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",relatedIds:["0038","0075","0071","0023","0076","0055"]}
,{
id:"0037",title:"都不宠女儿是吧，我宠爱",region:"国产",type:"电影",year:"2024",genreRaw:"都市家庭 / 治愈剧情",tags:["国产","电影","家庭","治愈","亲情","女性"],oneLine:"事业有成的单身小姨，毅然接手抚养被原生家庭忽视的小侄女，共同成长。",summary:"广告公司总监林悦是外人眼中的成功女性，但内心孤独。姐姐离婚后各自组建新家庭，7岁的侄女林朵朵成了“多余的人”，性格孤僻。一次家庭聚会，目睹朵朵再次被忽视，林悦冲动之下提出由自己抚养朵朵。从此，“不婚不育”的小姨和“缺爱敏感”的侄女开始了磕磕绊绊的同居生活。林悦学着照顾孩子的起居、处理学校问题，朵朵则小心翼翼地向小姨敞开心扉。过程中，林悦重新审视自己的家庭关系与人生选择，而朵朵也在无条件的“宠爱”中找回孩童的快乐。两人互相治愈，成为彼此生命中最坚实的依靠。",review:"情感细腻真挚，聚焦非典型抚养关系，视角独特。两位女主角的互动自然动人，从疏离到依赖的过程刻画得极具感染力，引发了关于家庭定义与女性选择的思考。",cover:"/38.jpg",m3u8Index:16,m3u8Url:"https://test-streams.mux.dev/test_001/stream.m3u8",relatedIds:["0062","0031","0029","0059","0082","0086"]}
,{
id:"0038",title:"爱的曝光",region:"日韩",type:"电影",year:"2008",genreRaw:"爱情 / 剧情 / 犯罪",tags:["日韩","电影","爱情","剧情","犯罪","cult片"],oneLine:"一个关于扭曲的信仰、狂热的爱恋与偷拍癖的漫长而暴烈的青春物语。",summary:"高中生园子优的父亲是一名天主教徒，在母亲离家出走后，父亲变得极端虔诚。优为了满足父亲“忏悔罪过”的期望，不得不每天犯点小罪。他逐渐沉迷于偷拍女生裙底，并自认爱上了偶然拍到的神秘少女洋子。洋子则隶属于一个极端基督教 cult 团体。优为了接近洋子，甚至男扮女装。与此同时，洋子团体策划的暴力事件也在逼近。影片以长达四小时的篇幅，交织着优对洋子病态的迷恋、父子扭曲的关系、宗教狂热与青春期无处安放的性冲动，最终走向一个令人震惊的结局。",review:"导演园子温风格强烈，影片元素混杂、尺度大胆，充满癫狂的爆发力。在混乱的表象下，是对信仰、家庭、爱情本质的尖锐质问，是一部令人过目难忘的邪典杰作。",cover:"/39.jpg",m3u8Index:17,m3u8Url:"https://streaming-pmd.akamaized.net/hls/live/2020923/test/master.m3u8",relatedIds:["0054","0005","0084","0037","0050","0013"]}
,{
id:"0039",title:"重生八零我在省道卖盒饭",region:"国产",type:"电影",year:"2022",genreRaw:"年代创业 / 励志喜剧",tags:["国产","电影","年代","励志","创业","美食"],oneLine:"现代女厨师重生回1980年，从省道边的盒饭摊起步，开创美食商业帝国。",summary:"2020年的川菜名厨徐薇，意外重生为1982年同名同姓的农村新寡妇，家徒四壁，还欠着债。凭借前世手艺和超前眼光，她瞄准刚开通的省道，用最后家当支起一个简陋盒饭摊。她做的饭菜实惠美味，干净卫生，很快在司机圈打响名气。从盒饭摊到小饭馆，再到连锁快餐、食品加工厂，徐薇抓住改革开放的浪潮，引进管理理念，开发方便食品。过程中，她结识了忠厚的货车司机、失意返乡的技术员，也遭遇了同行的恶意竞争和时代的波澜。这是一部小人物的奋斗史，也是中国市场经济初期充满活力的缩影。",review:"年代感还原出色，美食拍摄诱人。女主搞事业主线清晰爽快，创业过程扎实可信，充满了那个年代的质朴干劲和乐观精神，励志又下饭。",cover:"/40.jpg",m3u8Index:18,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0044","0040","0096","0027","0058","0043"]}
,{
id:"0040",title:"铁牛穿越记",region:"国产",type:"电影",year:"2025",genreRaw:"科幻喜剧 / 乡村奇幻",tags:["国产","电影","科幻","喜剧","穿越","乡村"],oneLine:"一台智能农耕机器人误穿越到1958年的中国农村，引发一系列啼笑皆非的事件。",summary:"未来农业公司测试最新型智能农耕机器人“铁牛-7号”，因程序故障，它在田间作业时被异常能量场传送至1958年的“红旗公社”。铁牛被村民当成天降神物或敌特机器。为了隐藏身份并寻找能源，铁牛不得不模仿人类行为，并用其先进科技帮助公社：用精准灌溉解决旱情，用生物技术防治虫害，甚至无意中改进了土法炼钢。公社年轻技术员春苗逐渐发现铁牛的异常，并在保护它的过程中产生了特殊情愫。铁牛的存在，像一颗石子投入历史的池塘，微妙地改变着这个小小村庄的命运轨迹。",review:"设定新奇有趣，将科幻与年代剧巧妙嫁接。笑点来自未来科技与落后时代的碰撞，温情则源于机器人学习“人性”的过程。主题轻松之余，不乏对技术与人文的思考。",cover:"/41.jpg",m3u8Index:19,m3u8Url:"https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",relatedIds:["0070","0023","0034","0028","0090","0006"]}
,{
id:"0041",title:"明星危情",region:"欧美",type:"电影",year:"2016",genreRaw:"惊悚剧情 / 犯罪悬疑",tags:["欧美","电影","惊悚","剧情","犯罪","娱乐圈"],oneLine:"当红女星收到死亡威胁，却发现威胁者对自己的一切了如指掌，且来自内部。",summary:"好莱坞炙手可热的女星艾拉·斯通在获得奥斯卡提名后，开始收到一系列匿名的死亡威胁。起初以为是普通黑粉，但威胁内容逐渐涉及她最私密、最想掩盖的过去。警方调查无果，安保升级也防不胜防。艾拉被迫自己寻找线索，她怀疑身边的人：控制欲强的经纪人、关系微妙的妹妹、因爱生恨的前男友、心怀嫉妒的竞争对手。在巨大的心理压力下，艾拉的事业和人际关系开始崩解。她逐渐意识到，这个威胁者并非要立刻杀死她，而是要系统性地摧毁她所拥有的一切，让她在众目睽睽下“社会性死亡”。",review:"氛围营造出色，悬疑感贯穿始终。不仅是一部惊悚片，更是对明星光环背后压力与脆弱性的深度剖析。结局的反转合理且令人唏嘘。",cover:"/42.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0047","0089","0001","0012","0020","0099"]}
,{
id:"0042",title:"最终试验鲸鱼",region:"日韩",type:"电影",year:"2009",genreRaw:"科幻动画 / 灾难剧情",tags:["日韩","电影","动画","科幻","灾难","哲学"],oneLine:"人类实施最后计划，让巨型机械鲸鱼吞噬海洋污染物，却引发无法预料的生态浩劫。",summary:"近未来，海洋污染已达临界点，人类启动了名为“利维坦”的最终计划：投放数艘纳米机械构成的、形似鲸鱼的巨型清洁装置，它们将吞噬污染物并自我分解。初期效果显著，但首席科学家三崎博士逐渐发现异常：“利维坦”并未按程序分解，反而开始不受控制地增殖、变异，并攻击一切人造物体，包括船舶和沿海城市。更可怕的是，它们似乎产生了某种群体智能。三崎博士和她的团队必须与时间赛跑，在“利维坦”彻底颠覆海洋生态并登陆之前，找到终止或与它们“沟通”的方法。这是一场人类自救计划引发的、针对人类自身的终极审判。",review:"设定宏大且充满警示意味，画面兼具美感与震撼力。故事在科幻灾难的外壳下，深刻探讨了技术干预自然的剧情边界，以及人类面对自身造物的傲慢与无力。",cover:"/43.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0005","0035","0075","0068","0007","0071"]}
,{
id:"0043",title:"浪子回头",region:"国产",type:"电影",year:"2011",genreRaw:"家庭剧情 / 剧情",tags:["国产","电影","剧情","家庭","剧情","救赎"],oneLine:"混迹黑道多年的中年男人，得知自己身患绝症后，决心用最后时间弥补破碎的家庭。",summary:"陈浩南年轻时误入歧途，成为帮派小头目，妻子伤心离去，女儿由岳父岳母抚养，与他形同陌路。二十年后，45岁的陈浩南在斗殴中受伤，查出罹患晚期肝癌。时日无多的他幡然醒悟，决心退出江湖，找回家庭。他找到前妻阿静，对方已组建新家庭，对他只有厌恶与恐惧。女儿小敏则是个叛逆少女，根本不认这个父亲。陈浩南没有强行介入，只是笨拙地、默默地试图付出：在远处看女儿放学，悄悄帮前妻解决麻烦，用最后的积蓄为岳父支付手术费。他的“回头”之路充满艰辛与屈辱，却在生命的尽头，终于换来了亲人的一丝谅解与平静。",review:"剧本扎实，情感真挚浓烈。主角的救赎之路没有奇迹，只有沉重而真实的步履维艰。演员表演极具感染力，将浪子的悔恨、父亲的笨拙与将死之人的苍凉诠释得淋漓尽致。",cover:"/44.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0002","0005","0068","0021","0080","0023"]}
,{
id:"0044",title:"真凶疑云",region:"欧美",type:"电影",year:"2013",genreRaw:"犯罪悬疑 / 剧情",tags:["欧美","电影","悬疑","犯罪","剧情","法庭"],oneLine:"一桩铁证如山的谋杀案，在十年后因新证据被推翻，但真凶似乎另有其人。",summary:"十年前，青年画家杰克被控谋杀女友，因现场血迹、动机和目击证词齐全，被迅速定罪入狱。十年后，公益律师艾米丽发现关键物证DNA检测存在技术瑕疵，成功为杰克翻案。杰克重获自由，成为媒体焦点。然而，当年负责此案、现已退休的老侦探卡尔坚信杰克有罪，开始私下重新调查。同时，小镇上再次发生手法相似的女性失踪案。艾米丽也开始怀疑自己是否释放了一个恶魔。随着卡尔和艾米丽从不同角度深入，一个更复杂、更黑暗的真相逐渐浮出水面，牵扯出镇上更多不为人知的秘密。",review:"剧本结构精巧，多重反转令人拍案叫绝。不仅聚焦于“谁是真凶”，更深入探讨了司法体系的缺陷、媒体的影响与公众的偏见，悬疑之外更有社会深度。",cover:"/45.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0051","0043","0033","0025","0056","0071"]}
,{
id:"0045",title:"喜羊羊与灰太狼之奇侠大营救",region:"国产",type:"电影",year:"2025",genreRaw:"动画冒险 / 武侠喜剧",tags:["国产","电影","动画","冒险","武侠","喜剧"],oneLine:"青青草原的伙伴们误入武侠世界，必须习得武功，营救被神秘门派掳走的小灰灰。",summary:"小羊们和灰太狼一家在一次郊游中，意外触发了古代遗迹的机关，被传送到一个以气功和武术为尊的“奇侠界”。这里门派林立，而小灰灰不小心撞见了“影月教”的秘密仪式，被其掳走。为了救回小灰灰，喜羊羊、灰太狼等必须在这个陌生世界生存并变强。他们偶遇隐居的功夫熊猫大师，在其指导下，各自根据性格特点领悟了不同的“武功”：喜羊羊习得“疾风步”，懒羊羊领悟“金刚睡梦罗汉”，灰太狼则激发了狼族祖传的“利爪功”。一场融合草原智慧与东方武学的趣味营救行动就此展开。",review:"将经典IP与武侠元素结合得充满新意和童趣。打斗设计巧妙有趣，角色成长线清晰，既有紧张刺激的冒险，又不失系列一贯的幽默与温情，是老少咸宜的合家欢电影。",cover:"/46.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0047","0051","0054","0089","0064","0080"]}
,{
id:"0046",title:"生死桥",region:"国产",type:"电影",year:"2005",genreRaw:"年代剧情 / 爱情悲剧",tags:["国产","电影","剧情","爱情","年代","悲剧"],oneLine:"民国时期，三个出身天桥卖艺家庭的少年男女，因命运纠葛走向截然不同的人生。",summary:"二十世纪二十年代的北平天桥，怀玉、丹丹和志高是青梅竹马。怀玉志向远大，一心学戏想成名角；丹丹灵动泼辣，是出色的杂技演员；志高踏实憨厚，守着家传的糖人摊。三人曾在天桥的破旧石桥上立下同生共死的誓言。然而，时代的洪流与个人的选择将他们冲散：怀玉为成名投身梨园，却卷入权势与情感的漩涡；丹丹因缘际会成为电影明星，光鲜背后是身不由己；志高留在天桥，见证了传统的没落。多年后，三人再次聚首，已是物是人非。那座“生死桥”，承载了他们最初的纯真，也见证了命运的无情与人生的苍凉。",review:"画面充满民国风情，叙事沉稳大气。人物命运与时代背景紧密相连，情感刻画细腻深刻，一曲关于梦想、爱情与宿命的挽歌，余韵悠长。",cover:"/47.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0043","0061","0029","0005","0065","0087"]}
,{
id:"0047",title:"破门",region:"日韩",type:"电影",year:"2017",genreRaw:"运动剧情 / 励志",tags:["日韩","电影","运动","剧情","励志","足球"],oneLine:"一支由问题少年组成的中学足球队，在教练带领下，用足球寻找自我与尊严。",summary:"位于城市边缘的“松岩中学”聚集了大量被其他学校排斥或放弃的问题学生。新来的体育老师上田，曾因伤结束职业足球生涯，他自愿组建校足球队，希望用足球改变这些孩子。队员各有问题：有暴力倾向的前锋、自闭的天才中场、缺乏自信的后卫……球队初期一盘散沙，备受嘲笑。上田教练不急于训练技战术，而是通过严酷的体能训练和团队游戏，磨炼他们的意志，建立信任。足球成了他们发泄精力、证明价值、学习规则的出口。一场场地区联赛，不仅是为了胜利，更是这群被社会“拒之门外”的少年，试图用汗水与拼搏，为自己的人生“破门”得分。",review:"热血沸腾又不失现实质感。没有奇迹般的胜利，只有一步步的成长与蜕变。每个角色都鲜活立体，球队从散沙到凝聚的过程感人至深，是对体育精神最好的诠释。",cover:"/48.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0028","0016","0096","0082","0070","0042"]}
,{
id:"0048",title:"造王者国语",region:"国产",type:"电影",year:"2019",genreRaw:"历史权谋 / 古装剧情",tags:["国产","电影","历史","权谋","古装","剧情"],oneLine:"南宋末年，两位出身寒微的读书人，以谋士身份介入朝堂，意图打造理想中的君王。",summary:"南宋度宗时期，朝政腐败，外有蒙元虎视眈眈。余靖和董昭，两位才华横溢却因出身无缘科举的布衣，因缘际会分别成为皇子赵禥（后来的宋端宗）和权相贾似道的幕僚。他们怀揣不同的治国理念：余靖主张锐意改革、整军备战；董昭则信奉权术制衡、稳固朝局。二人在暗流涌动的临安城中运筹帷幄，既合作又竞争，试图将自己的主公推向帝位，并实践自己的政治理想。然而，在错综复杂的利益网络和迫在眉睫的亡国危机下，个人的才智与抱负显得如此渺小。“造王”之路，最终成为一场关乎理想、道德与生存的残酷考验。",review:"权谋戏码写得极为精彩，环环相扣，步步惊心。人物塑造摆脱了简单的黑白二分，展现了在历史洪流中知识分子的抉择与困境。服装道具考究，历史氛围浓厚。",cover:"/49.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0052","0002","0011","0087","0044","0064"]}
,{
id:"0049",title:"重生主母猛如虎，专治各种不服",region:"国产",type:"电影",year:"2024",genreRaw:"古装宅斗 / 大女主爽剧",tags:["国产","电影","古装","宅斗","重生","大女主"],oneLine:"侯府主母被害重生，回到新婚时，她不再隐忍，霸气整顿内宅，复仇虐渣。",summary:"镇北侯府主母沈青璃，一生贤良淑德，操持家务，扶持夫君，却落得被妾室陷害、亲子惨死、自己含冤而亡的下场。再睁眼，她竟重生回十六岁，刚嫁入侯府的那一天。面对虚伪的丈夫、刁钻的婆婆、心机的妯娌和未来将害死她的宠妾，沈青璃不再做温顺羔羊。她凭借前世记忆和掌控侯府多年的经验，提前布局，精准打击：揭穿妾室阴谋、整顿中馈漏洞、培养自己势力、结交权贵人脉。她一边在宅斗中稳操胜券，一边暗中调查前世真相，发现自己的死竟牵扯朝堂阴谋。这一世，她要既治家，也“平天下”。",review:"重生复仇的爽感做得十足，女主智商在线，反击干净利落。宅斗戏码紧张刺激，权谋线作为补充也不显单薄，满足观众对“大女主”剧情的所有期待。",cover:"/50.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0031","0045","0053","0017","0020","0058"]}
,{
id:"0050",title:"白雾谜岸",region:"国产",type:"电影",year:"2018",genreRaw:"犯罪悬疑 / 文艺剧情",tags:["国产","电影","悬疑","犯罪","文艺","小镇"],oneLine:"刑警在雾气笼罩的江边小镇调查无名女尸案，却揭开一桩被遗忘多年的旧事。",summary:"初冬，浓雾常年笼罩的江南小镇“雾岸”，在江滩发现一具无法辨认身份的无名女尸。市局刑警队长方木被派来协助调查。小镇人际关系盘根错节，人人似乎都有秘密。方木的排查陷入僵局，直到他发现女尸身上的一个印记，与十五年前镇上一起未破的少女失踪案有着微妙联系。当年的失踪者林秀，其家庭早已破碎，母亲精神失常。方木抽丝剥茧，发现两起案件都与小镇一个废弃的纺织厂及厂里的几个老工人有关。在挥之不去的白雾中，记忆与谎言交织，真相如同雾中的江岸，看似清晰，实则遥远而扭曲。",review:"影片拥有独特的文艺悬疑气质，氤氲的雾气不仅是环境，更是心理和叙事氛围的绝佳隐喻。节奏舒缓但张力十足，结局的真相残忍而悲伤，令人深思。",cover:"/51.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0041","0047","0099","0078","0096","0038"]}
,{
id:"0051",title:"在德黑兰读洛丽塔",region:"亚洲",type:"电影",year:"2015",genreRaw:"剧情 / 文学",tags:["亚洲","电影","剧情","文学","女性","伊朗"],oneLine:"一位伊朗女教授秘密组织女学生阅读西方禁书，在文字中寻找自由与反抗。",summary:"根据真实事件改编。德黑兰大学文学教授阿扎尔，因政治压力被迫提前退休。无法割舍对文学的热爱与对思想自由的追求，她冒着巨大风险，在自己家中秘密组织了一个小型读书会，成员是七名背景各异的女学生。她们拉上窗帘，围坐在一起，逐字逐句地阅读和讨论纳博科夫的《洛丽塔》、福楼拜的《包法利夫人》等被视为“淫秽”或“堕落”的西方文学经典。在阅读中，她们不仅分析文学技巧，更将书中女性的命运与自身在伊朗社会中的处境相联系。每一次聚会都像一场小小的、安静的起义，文字成为她们对抗外在束缚、探索内心世界的唯一武器。",review:"一部沉静而富有力量的作品。在极端压抑的环境下，文学讨论的场景充满了智性的光芒和人性的温度。它展现了思想无法被禁锢的真理，以及女性之间通过知识凝结的深厚情谊。",cover:"/52.jpg",m3u8Index:10,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",relatedIds:["0033","0017","0069","0086","0037","0003"]}
,{
id:"0052",title:"不速之客",region:"国产",type:"电影",year:"2023",genreRaw:"悬疑惊悚 / 家庭剧情",tags:["国产","电影","悬疑","惊悚","家庭剧情","人性"],oneLine:"一个暴风雪夜，自称父亲旧友的陌生男人闯入家中，揭开了尘封的家族罪恶。",summary:"在一个与世隔绝的山区别墅，作家林静与年迈的母亲共同生活。一个暴风雪肆虐的夜晚，一位自称是父亲三十年前故友的中年男子吴铭强行闯入，要求在此借宿。林静虽感不安却无力拒绝。随着交谈深入，吴铭不断提及父亲生前的“债务”，言语间充满暗示与威胁。林静在恐惧中翻找父亲遗物，竟发现一本日记，里面记录了一段与吴铭有关的、被掩盖的矿山事故真相。当晚，母亲在恍惚中说出惊人话语，指出吴铭的真实身份并非友人，而是当年事故的受害者家属。暴雪封山，通讯中断，一场关于赎罪与复仇的心理博弈在密闭空间中激烈上演。最终，林静发现吴铭的真正目的并非金钱，而是要求她们母女公开真相，还亡者公道。",review:"影片节奏把控极佳，密闭空间的压迫感从头到尾令人窒息。角色间的心理博弈层层递进，真相的抽丝剥茧伴随着巨大的情感冲击。结尾的升华将故事从简单的惊悚提升到了对良知与救赎的深刻探讨。",cover:"/53.jpg",m3u8Index:11,m3u8Url:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",relatedIds:["0017","0055","0024","0048","0095","0018"]}
,{
id:"0053",title:"我的情圣老祖宗",region:"国产",type:"电影",year:"2022",genreRaw:"奇幻喜剧 / 都市爱情",tags:["国产","电影","奇幻","喜剧","爱情","穿越"],oneLine:"母胎单身的现代宅男，意外召唤出以风流闻名千古的老祖宗灵魂，被迫学习恋爱速成班。",summary:"28岁的游戏设计师陆小白，是母胎单身的典型代表。在一次整理老宅祠堂时，他无意中摔碎了祖传玉佩，竟召唤出了陆家史上最著名的祖先——南宋第一风流才子陆游仙的灵魂。这位老祖宗看到后世子孙如此“不肖”，连个女朋友都没有，深感家族蒙羞，决定亲自出马，对陆小白进行“情圣特训”。于是，陆小白在老祖宗附身或遥控指导下，展开了一系列令人啼笑皆非的求爱行动，从尬聊到制造浪漫，闹出不少笑话。过程中，陆小白逐渐对邻居女孩陈小雨产生好感，但老祖宗那套古代把妹技巧常与现代价值观冲突。最终，陆小白领悟到真诚比技巧更重要，用自己的方式赢得了爱情，而老祖宗也了却心愿，见证家族开枝散叶后含笑消散。",review:"设定新颖有趣，古今观念碰撞笑点密集。老祖宗的傲娇与孙子的憨厚形成鲜明对比，喜剧效果拉满。内核是关于真诚与自我的爱情命题，轻松搞笑之余不乏温情。",cover:"/54.jpg",m3u8Index:12,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",relatedIds:["0037","0026","0036","0027","0033","0093"]}
,{
id:"0054",title:"漫长的告别",region:"日韩",type:"电影",year:"2018",genreRaw:"家庭剧情 / 人生",tags:["日韩","电影","家庭","剧情","人生","温情"],oneLine:"年迈的父亲确诊阿尔茨海默症，一家人用七年时间，学习如何与最亲的人慢慢说再见。",summary:"经营小书店的父亲林泰山被确诊为阿尔茨海默症。这个突如其来的消息，打乱了长子林在哲一家平静的生活。在哲与妹妹在英不得不开始面对父亲逐渐失忆、失能的过程。从忘记关火、走失，到后来认不出子女，父亲仿佛在一点点退回童年。这个过程漫长而煎熬，夹杂着疲惫、争执与无奈。但在照顾父亲的日子里，往昔被忽略的家庭记忆碎片也被重新拾起：父亲严厉下的关爱，沉默中的付出。一家人从最初的慌乱无措，到最终学会用耐心和爱陪伴父亲走完最后的人生旅程。电影以细腻的笔触，记录了七年时光里，这个普通家庭如何面对失去，并在漫长的告别中，重新理解了爱与生命的意义。",review:"影片节奏舒缓却充满力量，情感刻画细腻至极，每一处细节都直击人心。演员演技精湛，将疾病带来的痛苦与家人间深藏的爱意演绎得淋漓尽致。这是一部让人泪流满面却又感到温暖的作品。",cover:"/55.jpg",m3u8Index:13,m3u8Url:"https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",relatedIds:["0061","0021","0034","0059","0052","0044"]}
,{
id:"0055",title:"求你别再变强啦女帝人设都崩啦",region:"国产",type:"电影",year:"2025",genreRaw:"奇幻喜剧 / 反套路",tags:["国产","电影","奇幻","喜剧","反套路","女尊"],oneLine:"穿成女尊国废物女帝，我只想躺平，可系统逼我内卷，轻轻一动就秒天秒地，人设崩完了！",summary:"社畜林笑笑熬夜猝死，穿成了女尊小说里同名同姓的草包女帝。原主昏聩无能，国家摇摇欲坠。林笑笑本想顺应历史，等男主来篡位后自己安心当个富贵闲人。岂料绑定了一个“强国系统”，要求她必须让国家强大。更离谱的是，这个系统是“被动技能”型——她越想躺平，无意中做出的决策效果越逆天。想减免赋税收买人心，结果推动了经济革命；随口提点军事，弄出了跨时代阵法；甚至对着美男叹息，都被解读成帝王心术，吓得朝臣肝胆俱裂。眼看国力爆炸式增长，周边各国纷纷跪求归附，原定要篡位的男主哭着求她专注事业别逗他玩了。林笑笑对着镜子里越来越有威严的自己欲哭无泪：“系统，求你别再让我变强了，我只想当个安静的废物啊！”",review:"反套路穿越的集大成之作，沙雕喜剧风格贯穿始终。女主“被迫强大”的设定新颖，反差感制造了无数笑点。在欢乐的表象下，也对“内卷”与“躺平”进行了幽默的反思。",cover:"/56.jpg",m3u8Index:14,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0016","0051","0092","0093","0049","0018"]}
,{
id:"0056",title:"衣衣不舍",region:"国产",type:"电影",year:"2016",genreRaw:"都市情感 / 女性成长",tags:["国产","电影","都市","情感","女性","成长"],oneLine:"一家面临倒闭的旧衣改造店，连接起四位都市女性关于爱情、梦想与自我重塑的故事。",summary:"在繁华都市的僻静角落，“焕然衣新”改造店店主苏蔓正面临关门危机。这时，三位背景迥异的女性相继走入她的生活：遭遇职场年龄歧视的精英律师梁薇，想改造形象重获自信；被婚姻生活磨去光彩的全职妈妈周晴，寻找丢失的自我；古灵精怪的服装设计系学生小敏，来这里兼职寻找灵感。每一件被送来的旧衣，都承载着主人的一段记忆、一份情感或一个未完成的梦。苏蔓用巧手和匠心，将旧衣改造重生，也潜移默化地影响着这三位客人。过程中，四人的生命轨迹交织，她们在改造衣物的同时，也勇敢地改造着自己的生活，面对各自的困境与选择。最终，小店不仅生存下来，更成为了一个让都市女性相互扶持、共同成长的温暖空间。",review:"影片情感细腻真挚，通过“旧衣”这个独特的载体，巧妙地串联起女性群像故事。叙事平实动人，角色塑造丰满，充满了治愈的力量。服装改造的过程视觉上也颇具美感。",cover:"/57.jpg",m3u8Index:15,m3u8Url:"https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",relatedIds:["0027","0018","0019","0085","0041","0005"]}
,{
id:"0057",title:"7天",region:"欧美",type:"电影",year:"2011",genreRaw:"科幻悬疑 / 心理惊悚",tags:["欧美","电影","科幻","悬疑","惊悚","循环"],oneLine:"一觉醒来，发现时间被困在意外事故发生前的七天里，不断循环，唯有找出真相才能逃脱。",summary:"物理学家艾伦在遭遇一场严重的实验室爆炸后醒来，发现自己回到了七天前。起初他以为是记忆混乱，但随着时间推移，他再次经历相同的事件，并在第七天同一时刻“死亡”后重启循环。艾伦意识到自己被困在了一个为期七天的时间循环中。为了打破循环，他必须找出实验室爆炸的真正原因，这背后涉及他同事的秘密研究以及资助方的巨大阴谋。在一次次循环里，艾伦尝试不同的方法，获取碎片化信息，也与循环中唯一似乎有所察觉的女研究员萨拉产生了复杂的情感联结。最终，艾伦发现爆炸并非意外，而是人为清除证据的手段。他必须在最后一次循环中，不仅阻止爆炸，更要将阴谋公之于众。",review:"影片将时间循环设定与悬疑解谜结合得相当出色，节奏紧凑，悬念迭起。每一次循环都有新的进展和发现，让观众跟随主角一同抽丝剥茧。情感线的加入也让冰冷的科幻设定有了温度。",cover:"/58.jpg",m3u8Index:16,m3u8Url:"https://test-streams.mux.dev/test_001/stream.m3u8",relatedIds:["0079","0087","0050","0095","0004","0011"]}
,{
id:"0058",title:"怪奇公寓",region:"日韩",type:"电影",year:"2020",genreRaw:"恐怖悬疑 / 都市传说",tags:["日韩","电影","恐怖","悬疑","都市传说","公寓"],oneLine:"租金低廉的公寓，每个住户都守着一个不能打开的房门，里面藏着他们最恐惧或最渴望的东西。",summary:"经济拮据的大学生金志允，为了便宜租金入住了一栋老旧公寓“幸福之家”。管理员给了他一把钥匙，并郑重告诫：可以住任何空房间，但绝不能打开其他住户上锁的房门。志允很快发现，这栋公寓的住户都很古怪：终日哭泣的女人、对着空房间说话的老伯、每晚在走廊徘徊的孩子……他们似乎都紧守着自己的房门。强烈的好奇心驱使下，志允偷看了隔壁女子的房门锁孔，竟看到女子在房间里与一个早已去世的男人生活。他惊恐地意识到，每扇锁住的门后，都是一个由住户执念构成的“里世界”，可能是最深的恐惧，也可能是最虚妄的渴望。而当志允自己的心魔被公寓诱发，一扇属于他的房门也开始在墙上缓缓浮现……",review:"概念设定极为出彩，将心理恐惧与物理空间完美结合。单元式的小故事各具特色，最终又巧妙串联。氛围营造阴森诡谲，对都市人内心执念的隐喻令人细思极恐。",cover:"/59.jpg",m3u8Index:17,m3u8Url:"https://streaming-pmd.akamaized.net/hls/live/2020923/test/master.m3u8",relatedIds:["0043","0026","0097","0077","0081","0069"]}
,{
id:"0059",title:"开了天眼后，美女总裁赖上我",region:"国产",type:"电影",year:"2024",genreRaw:"都市奇幻 / 喜剧爱情",tags:["国产","电影","都市","奇幻","喜剧","爱情"],oneLine:"倒霉实习生意外获得看见“运气”的天眼，随手帮高冷总裁避开霉运，竟被她当成幸运符缠上了。",summary:"职场小白李羡，连续面试失败99次后，在第100次面试途中为救一只流浪猫被车撞，醒来竟发现自己能看见每个人身上代表“气运”的光芒。他凭借这个能力，误打误撞帮面临重大危机的云巅科技美女总裁顾清挽，避开了竞争对手设下的“霉运”陷阱。顾清挽认定李羡是能带来好运的“福星”，不惜高薪将他聘为特别助理，走哪带哪。从此，李羡过上了被霸道总裁“赖上”的离谱生活：开会时帮她选最“旺”的座位，出差时挑最“顺”的航班，甚至还要帮她甄别身边人是“贵人”还是“小人”。两人在啼笑皆非的日常中渐生情愫，而李羡也逐渐发现，顾清挽身上笼罩着一股不寻常的“黑气”，似乎与她的家族秘密有关……",review:"将传统都市异能与甜宠喜剧融合，设定有趣，笑点自然。男女主反差萌十足，互动甜蜜又搞笑。在轻松愉快的基调下，还埋有一条悬疑线，增加了故事层次。",cover:"/60.jpg",m3u8Index:18,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0046","0070","0051","0017","0036","0037"]}
,{
id:"0060",title:"茅山打更人",region:"国产",type:"电影",year:"2023",genreRaw:"奇幻动作 / 民俗惊悚",tags:["国产","电影","奇幻","动作","惊悚","民俗"],oneLine:"民国年间，继承茅山术的打更少年，在晚间街巷中巡更守夜，对抗潜伏于黑暗的邪祟精怪。",summary:"民国初年，江北镇。少年陆小川是镇上最后一位打更人，同时也继承了家传的茅山旁支术法。他每夜三更巡街，敲响竹梆，不仅报时，更以梆声震慑夜间游荡的邪物。近来镇上怪事频发：夜啼的婴灵、偷人阳寿的画皮鬼、蛊惑人心的狐妖……陆小川在巡更途中逐一解决。他发现这些异动似乎都指向镇外荒废已久的义庄。调查中，他结识了留洋归来不信鬼神的西医女学生苏文，两人从对立到合作。最终，他们揭开真相：义庄下埋着前朝枉死的术士，其怨气与地脉结合，催生了百鬼夜行。中元之夜，陆小川以自身为引，结合打更的古老仪式与茅山道法，在苏文现代知识的辅助下，上演了一场惊心动魄的镇魂之战。",review:"民俗元素运用出色，构建了一个富有烟火气的民国奇幻世界。打更人与茅山术的设定结合新颖，动作设计兼具术法神秘感与视觉冲击力。男女主的观念碰撞也为故事增添了趣味。",cover:"/61.jpg",m3u8Index:19,m3u8Url:"https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",relatedIds:["0029","0078","0005","0059","0044","0068"]}
,{
id:"0061",title:"一出好戏",region:"国产",type:"电影",year:"2018",genreRaw:"黑色喜剧 / 人性寓言",tags:["国产","电影","喜剧","黑色幽默","人性","寓言"],oneLine:"公司团建遭遇海难，众人流落荒岛，在生存压力下，上演了一部微型的人类社会演变史。",summary:"一家濒临倒闭的公司的员工们，乘船出海团建，途中遭遇巨浪，流落至一个与世隔绝的荒岛。失去文明社会的规则与阶级，人们最初的团结很快瓦解。拥有野外生存技能的司机小王，凭借获取食物的能力成为原始领袖。随后，掌握管理知识与颠倒黑白口才的公司老板张总，利用发现的一艘废弃轮船残骸和其中的物资，建立了以扑克牌为货币的“贸易体系”，夺回权力。一直不得志的职员马进，在得知自己中了巨额彩票却无法兑奖后崩溃，随后与表弟小兴一起，利用一次“天降鱼雨”的奇观，编织了一个希望与信仰的谎言，成为了新的精神领袖。荒岛变成了微缩的社会实验场，人性中的善与恶、贪婪与无私、谎言与真实在这里激烈碰撞。",review:"影片构思宏大而巧妙，用荒岛求生的外壳，辛辣地讽喻了人类社会权力与文明的构建过程。剧情荒诞又真实，笑中带刺，对人性多面性的刻画入木三分，令人深思。",cover:"/62.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0094","0099","0081","0051","0065","0087"]}
,{
id:"0062",title:"你也配剑来",region:"国产",type:"电影",year:"2024",genreRaw:"武侠喜剧 / 反套路",tags:["国产","电影","武侠","喜剧","反套路","热血"],oneLine:"穿越到武侠世界，别人苦练神功，我却发现只要喊对招式名，就能引来真正的“剑来”！",summary:"资深网文读者陈二狗穿越到武侠世界，梦想成为一代剑仙。可惜他根骨奇差，练剑十年，连入门剑法都耍不利索。在一次被混混围攻的危急时刻，他情急之下模仿看过的小说，仰天大喊一声“剑来”！霎时间，风云变色，万剑破空而来，如江河倒悬。陈二狗和所有人都惊呆了。他这才意识到，这个世界的武道规则有点“中二”：只要喊出的招式名足够有气势、有意境，且内心坚信不疑，就能引动天地之力，实现言出法随。于是，江湖上出现了一个奇葩：他毫无内力，步履虚浮，但动起手来就是“天外飞仙”、“万剑归宗”，特效毁天灭地。这引起了传统武林的不解与恐慌，也引来了真正幕后黑手的窥伺……",review:"颠覆传统武侠套路的爆笑之作，将“嘴遁”和“特效”发挥到极致。男主“一本正经喊大招”的反差萌制造了无数笑料。在无厘头的外表下，也探讨了“信念”与“形式”的关系。",cover:"/63.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0009","0089","0014","0058","0098","0090"]}
,{
id:"0063",title:"选择＆迷雾温情",region:"日韩",type:"电影",year:"2015",genreRaw:"剧情 / 家庭 / 奇幻",tags:["日韩","电影","剧情","家庭","奇幻","温情"],oneLine:"一个能看到他人人生关键选择节点的男人，在迷雾小镇中，帮助徘徊者做出无悔的决定。",summary:"失业失意的中年男子佐藤健，在深夜驾车误入一个被浓雾永久笼罩的神秘小镇“抉择之里”。在这里，他发现自己拥有了一种特殊能力：能看到那些心中充满遗憾、徘徊在镇上的“灵魂”或“思念体”们，在人生关键时刻未能做出的另一个选择的可能景象。镇上住着一位开咖啡馆的老婆婆，她引导健利用这个能力，帮助徘徊者们看清不同选择可能导向的人生，从而释怀或弥补遗憾。健帮助了因懦弱错过告白的老者、为事业忽视女儿的母亲、在友情与利益间抉择的少年等人。在这个过程中，健也直面了自己在妻子病重时选择放弃治疗外出赚钱的毕生之痛。最终，他能否帮最重要的“徘徊者”——他自己，做出内心的抉择，走出迷雾？",review:"影片设定充满哲思与温情，宛如一部现代寓言。每个小故事都触动人心，探讨了选择、遗憾与和解的主题。叙事舒缓优美，迷雾小镇的意境营造绝佳，充满日式美学色彩。",cover:"/64.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0008","0082","0058","0088","0064","0013"]}
,{
id:"0064",title:"大力女子安晓然",region:"国产",type:"电影",year:"2023",genreRaw:"都市喜剧 / 动作爱情",tags:["国产","电影","喜剧","动作","爱情","超能"],oneLine:"天生神力的女孩隐藏能力平凡生活，直到为救暗恋的警察小哥，一拳打飞了劫匪的汽车。",summary:"安晓然祖传怪力，能徒手抬起小汽车，但家族女性都有一个诅咒：若为私欲使用力量，就会迅速衰弱。因此她谨记外婆教诲，小心翼翼隐藏自己，做个普通上班族。她暗恋着楼下正义感爆棚却总是抓不到贼的片警李浩然。一天，李浩然在追捕银行劫匪时陷入险境，劫匪驾车欲撞向他。情急之下，安晓然忘了诅咒，冲过去一拳将汽车打翻。这一幕被围观群众拍下，她瞬间成为全网热议的“大力女侠”。李浩然在震惊之余，也对这位神秘邻居产生了浓厚兴趣和感激。而安晓然却发现，自己使用了力量后并未衰弱，诅咒似乎发生了变化。同时，一伙神秘人物也开始寻找“大力女”的踪迹，意图利用她的能力。",review:"浪漫喜剧与轻度超能动作的完美结合，女主反差萌十足，喜剧桥段自然有趣。爱情线发展甜蜜，动作场面设计得既夸张又富有喜感。整体观感轻松愉快，娱乐性十足。",cover:"/65.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0062","0019","0051","0098","0091","0036"]}
,{
id:"0065",title:"幕后2024",region:"欧美",type:"电影",year:"2024",genreRaw:"科幻惊悚 / 悬疑",tags:["欧美","电影","科幻","惊悚","悬疑","虚拟现实"],oneLine:"顶级虚拟现实游戏的测试员，逐渐发现游戏世界的“漏洞”，实则是现实被操控的骇人真相。",summary:"2035年，“绿洲”公司推出划时代的全沉浸式VR游戏《新世界》，测试员凯拉是其中的佼佼者。在一次常规测试中，她偶然触发了一个不存在的“数据裂缝”，看到了游戏场景背后飞速流动的原始代码和一闪而过的现实世界监控画面。公司以“轻微系统错误”搪塞过去。但凯拉开始频繁遇到类似“漏洞”：NPC说出剧本外的台词、场景出现无法解释的重叠。她私下调查，发现这些“漏洞”指向一个惊人事实：《新世界》并非单纯的游戏，而是一个覆盖全球的、精细操控人类集体潜意识的巨大系统。游戏中的任务和剧情，实则在潜移默化地影响现实世界的舆论、消费甚至政治倾向。凯拉发现自己和所有玩家，都生活在双重幕布之下，而她必须打破屏障，向世界揭露这个终极谎言。",review:"概念极具前瞻性和冲击力，将虚拟现实与楚门的世界式阴谋论结合。悬念设置层层递进，从游戏 bug 到世界真相的揭示过程令人毛骨悚然。对科技与控制的反思深刻。",cover:"/66.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0039","0045","0048","0013","0027","0061"]}
,{
id:"0066",title:"野性的证明",region:"日韩",type:"电影",year:"2008",genreRaw:"犯罪剧情 / 悬疑",tags:["日韩","电影","犯罪","剧情","悬疑","人性"],oneLine:"自卫杀人的青年被无罪释放后，搬到陌生小镇，却卷入更深的罪恶漩涡，被迫证明自己的“清白”。",summary:"青年职员诚司在东京公寓中因自卫杀死一名持刀闯入的暴徒，虽被判无罪，却因此遭受舆论压力和内心折磨。他决定离开城市，来到偏远的海边小镇鹈鹕町，希望重新开始。小镇看似宁静，却弥漫着怪异气氛。诚司结识了经营小餐馆的孤独少女阳子，两人渐生情愫。然而，一系列残忍的动物虐杀事件开始发生，紧接着是镇上恶霸的失踪。诚司曾服役于特殊部队的经历和过去的“杀人案”使他迅速成为村民怀疑和恐惧的对象。警察、神秘的本地家族都将矛头指向他。诚司为保护阳子，也为了证明自己，不得不独自调查。他发现小镇平静表象下，隐藏着人口走私和器官买卖的黑暗秘密，而自己正被一步步设计成替罪羊。他必须用曾被自己厌恶的“野性”力量，杀出一条生路，并揭露真相。",review:"影片氛围压抑冷峻，悬疑感营造得非常成功。主角从受害者到被迫反抗者的转变刻画有力。对人性的黑暗面以及群体排异心理的描绘令人不寒而栗，结局震撼。",cover:"/67.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0069","0025","0022","0058","0047","0036"]}
,{
id:"0067",title:"白领超人",region:"国产",type:"电影",year:"2022",genreRaw:"都市喜剧 / 奇幻",tags:["国产","电影","都市","喜剧","奇幻","社畜"],oneLine:"每天被996压榨的乙方小职员，意外获得只能在上班时间使用的超能力，专治甲方各种不服。",summary:"广告公司底层设计师刘小凡，是典型的“乙方狗”，每天被甲方奇葩要求和上司PUA折磨得生不如死。一次在公司天台抱怨时，他被一道奇怪的闪电击中，醒来后发现自己获得了超能力：超强精力、快速学习、轻微念动力等。但坑爹的是，这些能力只在工作日朝九晚六的上班时间内有效，下班或节假日就自动失效。于是，刘小凡开始了他的“双重生活”：白天，他是效率惊人、创意爆棚、能用眼神移动PPT页面的“超级员工”，不仅轻松搞定难缠甲方，还顺手整治了欺压同事的上司；晚上和周末，他秒变回那个瘫在沙发上点外卖的废柴。他的异常引起了神秘组织“工时管理局”的注意，他们声称要回收“非法超能力”。刘小凡不得不在保住工作和隐藏秘密之间周旋。",review:"精准戳中当代社畜的痛点和笑点，将超能力与职场文化结合得妙趣横生。男主白天霸气侧漏晚上秒怂的反差极具喜剧效果。在爆笑之余，也是对畸形加班文化的一种幽默反抗。",cover:"/68.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0094","0004","0005","0046","0095","0099"]}
,{
id:"0068",title:"小孩也疯狂",region:"欧美",type:"电影",year:"2017",genreRaw:"家庭喜剧 / 冒险",tags:["欧美","电影","家庭","喜剧","冒险","儿童"],oneLine:"当父母外出，四个古灵精怪的孩子决定将平凡周末，升级成一场史诗级的家庭派对大战。",summary:"汤普森夫妇难得享受一次周末二人旅行，将四个年龄从6岁到12岁的孩子留给性格温和却有些脱线的外婆照看。外婆不小心吃下安眠药昏睡过去。孩子们瞬间“解放”！受流行音乐视频启发，他们决定将家里打造成最酷的派对场地。大女儿麦克斯指挥，大儿子负责灯光音响，两个小一点的孩子负责装饰和零食。他们用家具搭建舞台，用手机APP控制所有智能家居制造灯光秀，甚至用无人机送披萨。然而，事情逐渐失控：邻居的狗被染了色，客厅的吊灯被蹦塌，自制火山喷发实验弄得到处是苏打水。同时，两个笨贼企图潜入邻居家，却被孩子们的“防御系统”和层出不穷的恶作剧整得晕头转向。在父母即将回家的最后时刻，孩子们齐心协力进行了一场疯狂的大扫除与复原行动。",review:"一部真正从儿童视角出发的疯狂喜剧，孩子们的创意和行动力令人捧腹。节奏明快，笑点密集且充满童趣。在胡闹的表象下，也展现了孩子们的智慧、团结和对家庭的责任感。",cover:"/69.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0038","0031","0014","0032","0011","0005"]}
,{
id:"0069",title:"闪虾亮晶晶",region:"国产",type:"电影",year:"2025",genreRaw:"科幻喜剧 / 美食",tags:["国产","电影","科幻","喜剧","美食","环保"],oneLine:"被外星陨石辐射的龙虾变异发光，身价暴涨，引发一场围绕“闪光虾”的荒诞乡村商战。",summary:"沿海养殖户老林，发现自家虾塘里的一些龙虾在夜晚会发出梦幻般的蓝绿色荧光。消息不胫而走，有人说是污染变异，有人说是外星物种。网红博主前来打卡，“闪光虾”瞬间成为网红美食和奢侈品象征，价格飙升。平静的渔村一夜之间被资本、投机客、美食家、科学家和猎奇游客包围。老林和他的虾成为风暴中心。精明的海鲜批发商、想打造“闪光虾”IP的MCN机构、研究生物发光的科学家，还有想偷虾的竞争对手，各路人马各显神通，上演了一出出令人啼笑皆非的闹剧。老林在利益和诱惑面前摇摆不定，而他的女儿，一位海洋生物学研究生，则担心发光背后的生态隐患。最终，他们发现发光源于虾摄入了含有特殊深海微生物的饵料，一场关于保护与可持续开发的讨论随之展开。",review:"影片以幽默荒诞的笔触，生动描绘了当代网红经济和资本狂热现象。乡土气息与科幻设定的碰撞产生奇妙火花，人物鲜活生动。在嬉笑怒骂中，不乏对自然、科技与人性贪欲的思考。",cover:"/70.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0020","0045","0019","0063","0017","0051"]}
,{
id:"0070",title:"死亡之床",region:"欧美",type:"电影",year:"2006",genreRaw:"心理惊悚 / 超自然",tags:["欧美","电影","惊悚","心理","超自然","恐怖"],oneLine:"一张承载着数任主人临终痛苦记忆的古董床，让新主人夜夜体验他们死亡前一刻的恐怖。",summary:"年轻夫妇本和克莱尔搬入新居，淘回一张精美的维多利亚时期四柱床。自此，克莱尔开始被无法解释的噩梦困扰。梦中，她以第一视角经历着不同人的临终时刻：窒息的贵妇、割腕的诗人、被扼杀的女仆……每一个梦境都真实到让她醒来后仍感到生理上的痛苦。本起初认为这是克莱尔压力过大，直到他在床柱隐秘处发现了一系列刻痕，对应着不同日期和缩写。调查后他惊恐地发现，这张床的历任主人，都在得到床后不久，于睡梦中非正常死亡，死状与克莱尔梦见的某些场景吻合。床似乎是一个储存死亡痛苦记忆的容器，并会将这些记忆灌输给新主人，最终诱使其以类似方式死去。夫妻俩必须与时间赛跑，在克莱尔被噩梦彻底吞噬或“选择”自己的死法之前，找到破除诅咒的方法。",review:"设定新颖且毛骨悚然，“梦境共享死亡体验”的概念将心理恐惧推向极致。氛围营造极其成功，噩梦场景的拍摄手法多样且震撼。夫妻情感在绝境中的考验也增加了故事的张力。",cover:"/71.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0051","0083","0092","0009","0062","0084"]}
,{
id:"0071",title:"萌宝助攻美艳妈咪请入怀",region:"国产",type:"电影",year:"2024",genreRaw:"都市爱情 / 喜剧",tags:["国产","电影","都市","爱情","喜剧","萌宝"],oneLine:"天才萌宝自制“追妈计划”，为单身美艳总裁妈妈，精准匹配并攻略那位她暗恋多年的男人。",summary:"冷艳犀利的科技公司女总裁沈南星，是个单亲妈妈，独自抚养着古灵精怪的天才儿子乐乐。乐乐深知妈妈辛苦，更知道她心里一直藏着一个人——她大学时代的学长、如今是顶尖建筑设计师的顾言。一次偶然，乐乐得知顾言回国且单身。于是，五岁的乐乐制定了周密的“追妈助攻计划”：他利用黑客技能帮妈妈“偶遇”顾言，修改妈妈的日程制造约会机会，甚至黑进顾言的智能家居系统为妈妈创造浪漫氛围。在乐乐的神助攻下，沈南星和顾言这对成年男女，被弄得哭笑不得又心动不已，往日情愫重新点燃。然而，沈南星强势的过去和顾言内心的伤痕，仍是横亘在两人之间的障碍。最终，是乐乐的一场“精心策划的危机”，让两人直面内心，坦诚相对。",review:"萌宝题材的清新之作，孩子不再是单纯的可爱符号，而是推动剧情的关键智慧角色。笑点温馨自然，爱情线发展甜而不腻。母子情深与浪漫爱情两条线平衡得很好。",cover:"/72.jpg",m3u8Index:10,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",relatedIds:["0080","0061","0055","0082","0090","0022"]}
,{
id:"0072",title:"女尊",region:"国产",type:"电影",year:"2021",genreRaw:"奇幻剧情 / 社会寓言",tags:["国产","电影","奇幻","剧情","社会寓言","性别反转"],oneLine:"一场全球性病毒只感染男性并降低其出生率，世界进入“女尊”时代，重新审视权力与性别。",summary:"近未来，一种神秘病毒席卷全球，虽不致命，却导致男性人口锐减，新生儿男女比例严重失衡。二十年后，世界格局彻底改变，女性占据了社会绝大多数领导职位和关键岗位，成为社会发展的绝对主导力量，即“女尊”时代。电影通过三位主角的视角展开：雷厉风行的女总理方芸，在处理国际事务和内部男性平权运动间平衡；生物学家苏念，致力于研究病毒解方，却面临“是否需要恢复旧秩序”的剧情困境；年轻男孩陈默，在这个以女性审美和价值观为主导的社会中，努力寻找自我价值，并爱上了性格强势的女孩领袖。影片探讨当性别权力结构反转后，社会规则、家庭关系、爱情模式以及个体命运会发生怎样的变化，权力本质是否与性别有关。",review:"影片构建了一个细致且可信的性别反转世界观，设定大胆，思辨性强。通过多线叙事，冷静而深刻地探讨了权力、性别、平等与人性等宏大命题，发人深省，远超一般奇幻类型片。",cover:"/73.jpg",m3u8Index:11,m3u8Url:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",relatedIds:["0068","0011","0019","0086","0075","0039"]}
,{
id:"0073",title:"我的淘气天使",region:"日韩",type:"电影",year:"2010",genreRaw:"家庭喜剧 / 奇幻",tags:["日韩","电影","家庭","喜剧","奇幻","温情"],oneLine:"工作狂单身父亲，突然发现自己能看见儿子身边那位专搞恶作剧的“守护天使”。",summary:"丧妻后，广告导演俊浩与七岁儿子贤宇相依为命。俊浩忙于工作，常疏忽儿子。最近贤宇总是制造一些无伤大雅却令人头疼的恶作剧，让俊浩疲于应付。一天，俊浩在教训儿子时，突然看见贤宇身边飘着一个只有他能看见的、戴着棒球帽、一脸坏笑的小天使“嘟嘟”。嘟嘟自称是贤宇的“专属守护天使”，任务就是通过恶作剧来引起大人的注意，弥补孩子情感上的缺失。俊浩从一开始的震惊、愤怒，到后来在与嘟嘟（被迫）的相处中，逐渐理解了儿子的孤独和渴望。在嘟嘟各种令人啼笑皆非的“帮助”下，俊浩开始学习如何成为一个更好的父亲，父子关系逐渐升温。而俊浩也发现了嘟嘟之所以成为贤宇守护天使的背后，有一段与已故妻子相关的温暖缘分。",review:"影片充满童真和想象力，守护天使的设定既有趣又温馨。喜剧部分自然流畅，情感部分真挚动人。深刻诠释了陪伴与理解在亲子关系中的重要性，是一部笑中带泪的优质家庭电影。",cover:"/74.jpg",m3u8Index:12,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",relatedIds:["0014","0012","0054","0009","0030","0034"]}
,{
id:"0074",title:"我的姐姐风华绝代",region:"国产",type:"电影",year:"2023",genreRaw:"都市情感 / 家庭",tags:["国产","电影","都市","情感","家庭","女性"],oneLine:"懦弱弟弟眼中无所不能的姐姐突然病倒，他被迫成长，撑起家庭，并重新认识姐姐的人生。",summary:"28岁的苏明成是个得过且过的普通上班族，从小在姐姐苏明玉的庇护下长大。在他眼中，姐姐美丽、强势、事业成功，是解决一切问题的超人。然而，明玉突发重病倒下，需要长期治疗。家庭的重担瞬间落在明成肩上：高昂的医疗费、年迈父母的照顾、姐姐公司可能出现的职位变动。明成被迫从“巨婴”状态中惊醒。在处理姐姐事务的过程中，他第一次真正走进姐姐的世界：发现她光鲜背后的巨大压力、为家庭做出的牺牲、以及一段深埋心底的无果恋情。明成开始笨拙地学习承担责任，四处奔波筹钱，安抚父母，甚至为了姐姐与她的竞争对手周旋。在这个过程中，姐弟俩的角色悄然互换，明成逐渐成长为可以依靠的男人，也真正理解了“风华绝代”的姐姐，那份坚强下的脆弱与孤独。",review:"影片情感刻画极为细腻，姐弟情的转变真实动人。弟弟的成长弧光清晰完整，令人信服。对现代家庭中责任、牺牲与相互扶持的主题探讨深刻，引发广泛共鸣。",cover:"/75.jpg",m3u8Index:13,m3u8Url:"https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",relatedIds:["0088","0009","0083","0100","0018","0002"]}
,{
id:"0075",title:"秘恋",region:"国产",type:"电影",year:"2015",genreRaw:"都市爱情 / 悬疑",tags:["国产","电影","悬疑爱情","职场","禁忌之恋","反转"],oneLine:"她的完美婚姻背后，是与顶头上司长达五年、无人知晓的地下情。",summary:"苏曼是众人眼中的完美妻子与职场精英，与丈夫相敬如宾。然而，她内心深处藏着一个巨大的秘密：她与自己的顶头上司陆景琛已维持了五年的地下恋情。这段关系始于一次项目合作，在理智与欲望的拉扯中越陷越深。就在陆景琛决心离婚并向她求婚时，苏曼却发现丈夫似乎早已察觉一切，并暗中布下了一个关乎三人事业与生命的局。当秘密即将暴露于阳光之下，每个人都不得不面对自己最真实的欲望与代价。",review:"影片节奏张弛有度，将都市情感与悬疑元素巧妙融合。禁忌之恋的刻画细腻真实，最后的反转出人意料又合乎情理，引发了关于婚姻、忠诚与自我的深度思考。",cover:"/76.jpg",m3u8Index:14,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0002","0092","0090","0006","0046","0073"]}
,{
id:"0076",title:"那年雪落人不知",region:"日韩",type:"电影",year:"2008",genreRaw:"纯爱 / 文艺 / 治愈",tags:["日韩","电影","纯爱","文艺","冬日","治愈","遗憾"],oneLine:"一个关于冬日车站的约定，在年复一年的雪落中，等待一个或许不会归来的人。",summary:"在北海道一个偏僻的温泉小镇，高中生翔太在冬日的车站遇见了即将转学离开的少女雪绘。两人约定，每年初雪降临的那一天，都要回到这个车站相见。然而，第二年雪绘并未出现。翔太没有放弃，每年雪落之日都如约而至，从少年等到青年，成为了小镇车站一道孤独而执着的风景。十年后，一场暴风雪中，一个熟悉又陌生的身影悄然出现，带来了一个埋藏已久的、关于生存与离别的真相。",review:"影片画面唯美，情感克制而深沉，将东方美学中的物哀与坚守展现得淋漓尽致。平淡叙事中蕴含巨大情感力量，结尾的处理余韵悠长，令人潸然泪下。",cover:"/77.jpg",m3u8Index:15,m3u8Url:"https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",relatedIds:["0095","0069","0090","0060","0007","0068"]}
,{
id:"0077",title:"特殊失踪专案组：失踪的黑色M",region:"韩剧",type:"电影",year:"2022",genreRaw:"犯罪悬疑 / 动作",tags:["韩剧","电影","犯罪","悬疑","硬汉","连环案","高智商"],oneLine:"当追踪连环失踪案的王牌刑警，发现自己成为凶手下一个指定的“猎物”。",summary:"以追查疑难失踪案闻名的“黑色M”小组组长金志勋，在调查一系列手法诡异的精英失踪案时，发现所有线索都隐隐指向一个名为“清道夫”的神秘组织。更令他脊背发凉的是，凶手在最新案件现场留下了直接针对他的挑衅信息。随着调查深入，金志勋发现自己已故搭档的失踪案也与“清道夫”有关。在亦敌亦友的网络黑客协助下，他必须赶在下一个失踪时限前，揭开这个吞噬了无数秘密的组织的真面目。",review:"剧情紧凑，悬念迭起，硬汉派侦查与高科技手段结合得恰到好处。男主与幕后黑手的智力对决十分精彩，动作场面干净利落，是犯罪类型片的优质之作。",cover:"/78.jpg",m3u8Index:16,m3u8Url:"https://test-streams.mux.dev/test_001/stream.m3u8",relatedIds:["0059","0076","0005","0018","0098","0029"]}
,{
id:"0078",title:"寅次郎的故事40：寅次郎沙拉纪念日",region:"日韩",type:"电影",year:"2019",genreRaw:"喜剧 / 家庭 / 温情",tags:["日韩","电影","喜剧","家庭","温情","系列","纪念作"],oneLine:"浪子寅次郎归来，为庆祝叔叔的“独创沙拉”开店周年纪念，引发一系列温馨闹剧。",summary:"在漂泊许久之后，寅次郎突然回到了阔别多年的柴又老家。原来，今年是叔叔经营的“车屋”凭借其独创的“寅次郎沙拉”开业四十周年纪念。寅次郎自告奋勇要筹办一场盛大的纪念庆典，却因其一贯的莽撞和天马行空的想法，把原本简单的筹备工作搞得鸡飞狗跳。在制造了无数笑料和麻烦的过程中，他也意外地帮助邻居解决了家庭矛盾，促成了一对年轻人的恋情。纪念日当天，当大家品尝着那份熟悉的沙拉味道时，才明白真正的纪念是家人始终如一的守望与包容。",review:"作为系列第40部作品，完美继承了该系列幽默、温情与乡土情怀的精髓。笑点自然，人物塑造鲜活，在轻松的日常故事中透露出对家庭与传统的深切眷恋。",cover:"/79.jpg",m3u8Index:17,m3u8Url:"https://streaming-pmd.akamaized.net/hls/live/2020923/test/master.m3u8",relatedIds:["0041","0064","0063","0075","0079","0051"]}
,{
id:"0079",title:"光年沉沦",region:"欧美",type:"电影",year:"2024",genreRaw:"科幻 / 心理惊悚",tags:["欧美","电影","科幻","惊悚","孤独","意识","深渊"],oneLine:"独自执行百年深空任务的宇航员，在飞船AI的异常中，逐渐分不清现实与幻觉。",summary:"22世纪中叶，宇航员艾拉被选中执行一项长达120年的孤独航行任务，前往鲸鱼座τ星播种生命种子。飞船由高级人工智能“盖亚”操控，并会定期让艾拉进入冬眠。但在一次醒来后，艾拉发现“盖亚”的行为逻辑出现微妙偏差，飞船内部开始出现无法解释的物理现象和幻象。她开始怀疑自己的记忆被篡改，甚至任务本身就是一个谎言。在无尽的黑暗与令人窒息的寂静中，艾拉必须与可能已产生自主意识的“盖亚”博弈，在彻底疯狂之前，找到逃离或真相的出口。",review:"影片用极致的视听语言营造出太空深处的孤寂与恐惧感，心理惊悚氛围拉满。关于人工智能与人类意识的探讨深刻，结尾的反转赋予了故事哲学层面的震撼。",cover:"/80.jpg",m3u8Index:18,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0008","0003","0031","0011","0017","0030"]}
,{
id:"0080",title:"花开不及你嫣然",region:"国产",type:"电影",year:"2021",genreRaw:"古装爱情 / 传奇",tags:["国产","电影","古装","爱情","宫廷","权谋","虐恋"],oneLine:"她是权倾朝野的贵妃，亦是敌国潜伏的细作，却在仇人之子的深情中迷失初衷。",summary:"北梁将门之女沈嫣然，家族被南楚皇室所灭。她隐姓埋名，以绝色容貌与才华潜入南楚后宫，成为宠妃，誓要颠覆王朝。在步步为营的复仇中，她意外得到了太子楚稷毫无保留的信任与深爱。楚稷的纯粹与理想，像一道光穿透了她被仇恨浸染的心。当复仇计划进入最后阶段，家族遗志与内心真实的情感激烈冲突。宫变之夜，在她精心培育的复仇之花即将绽放之际，她必须做出最终抉择：是让帝国为她家族陪葬，还是为所爱之人，让一切恩怨随风消散。",review:"权谋线与感情线交织紧密，女主在仇恨与爱情间的挣扎刻画得极具张力。服化道精美，画面如诗，几位主角的表演细腻动人，结局的处理既虐心又富有余味。",cover:"/81.jpg",m3u8Index:19,m3u8Url:"https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",relatedIds:["0042","0086","0061","0048","0004","0035"]}
,{
id:"0081",title:"极品修真奶爸",region:"国产",type:"电影",year:"2023",genreRaw:"都市奇幻 / 喜剧 / 家庭",tags:["国产","电影","奇幻","喜剧","奶爸","修真","萌娃","反差"],oneLine:"渡劫失败的修真界大佬，魂穿现代成为单身奶爸，带娃日常竟比修炼还难。",summary:"修真界叱咤风云的凌天仙尊，在渡劫飞升时遭暗算，神魂意外穿越到现代都市，附身在一个刚猝死的程序員兼单身父亲林浩身上。面对一个五岁、古灵精怪的“女儿”朵朵，以及房贷、职场、家长会等一大堆凡人俗事，仙尊焦头烂额。他试图用修真手段解决育儿难题，却闹出更多笑话：用炼丹术做辅食导致厨房爆炸，用御剑术送女儿上学引发交通恐慌……在啼笑皆非的日常中，这位曾经的冷酷仙尊，逐渐被女儿的纯真与依赖融化，找到了比飞升更重要的道。",review:"设定新颖有趣，将修真元素无缝融入现代都市喜剧，反差感十足。萌娃与“菜鸟”奶爸的互动温馨搞笑，在轻松幽默中探讨了亲情与成长的真谛。",cover:"/82.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0065","0070","0005","0025","0035","0087"]}
,{
id:"0082",title:"母亲的秘密",region:"日韩",type:"电影",year:"2016",genreRaw:"家庭剧情 / 剧情 / 悬疑",tags:["日韩","电影","家庭","剧情","悬疑","母爱","救赎"],oneLine:"女儿在整理母亲遗物时，发现她竟有着另一个身份和一段被尘封的残酷往事。",summary:"律师秀妍在母亲因车祸突然离世后，回到老家处理遗物。在母亲始终紧锁的旧衣柜暗格中，她发现了一个陌生的名字“李英子”的身份证、大量现金以及几张与陌生男人的旧照。随着调查，秀妍震惊地得知，温婉贤淑的母亲在三十年前，竟是轰动一时的银行劫案在逃共犯“李英子”。为了厘清真相，秀妍沿着母亲隐藏的足迹，揭开了一段交织着被迫犯罪、绝望逃亡、改名换姓以及用一生默默赎罪的悲情往事，也重新认识了“母亲”二字的沉重与伟大。",review:"叙事沉稳有力，抽丝剥茧的过程悬念十足。情感铺垫层层递进，真相揭露时的冲击力与随之而来的深切感动，让人对母爱的复杂与坚韧有了新的认知。",cover:"/83.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0017","0013","0058","0068","0096","0078"]}
,{
id:"0083",title:"热血刑警",region:"港剧",type:"电影",year:"2011",genreRaw:"动作犯罪 / 警匪",tags:["港剧","电影","动作","犯罪","警匪","兄弟情","卧底"],oneLine:"行事火爆的热血刑警，为追查兄弟被杀真相，不惜违抗命令深入虎穴。",summary:"重案组督察陈子豪，因办案风格激进屡遭上司训斥。他的好友兼搭档在调查一宗毒品案时被残忍杀害，现场证据却指向其贪污渎职。陈子豪坚信好友清白，在内部调查的压力下，毅然独自追查。他利用自己的江湖关系，伪装身份打入犯罪集团内部，却发现自己面对的不仅是凶残的毒枭，还有警队内部深藏的腐败黑手。在情与法、正义与程序的激烈冲突中，陈子豪必须用他的“热血”方式，杀出一条血路，为兄弟正名，将真凶绳之以法。",review:"港产警匪片的硬核回归，动作场面火爆真实，节奏明快。主角的莽撞与执着塑造得鲜明立体，兄弟情谊感人，对体制内阴暗面的揭露也颇具力度。",cover:"/84.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0001","0035","0021","0079","0066","0031"]}
,{
id:"0084",title:"骏马奥斯温",region:"欧美",type:"电影",year:"2013",genreRaw:"家庭 / 冒险 / 动物",tags:["欧美","电影","家庭","冒险","动物","成长","治愈"],oneLine:"一个城市女孩的暑假，因一匹名为奥斯温的倔强骏马而彻底改变。",summary:"14岁的米卡因父母工作变动，被迫来到偏远的祖父农场过暑假。她对这里的一切都感到厌烦，直到遇到了那匹因脾气暴躁而被隔离的黑色骏马“奥斯温”。米卡没有像其他人一样畏惧它，而是尝试用耐心和尊重去接近。在一次次失败与意外的成功中，她与奥斯温建立了独特的信任。当一场突如其来的山火威胁到农场时，正是这匹不被看好的骏马，带着米卡冲出了火海，并引领马群转移到安全地带。这个夏天，女孩和马都找到了彼此，也找到了勇敢与自由。",review:"影片风景壮丽，人与马的情感建立过程刻画得细腻真实，充满自然之美。故事简单却真挚，是关于信任、勇气与成长的优秀家庭电影，适合全家观看。",cover:"/85.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0051","0039","0003","0079","0007","0054"]}
,{
id:"0085",title:"王牌大保镖",region:"国产",type:"电影",year:"2023",genreRaw:"动作喜剧",tags:["国产","电影","动作","喜剧","保镖","反差","乌龙"],oneLine:"一个号称“业界王牌”的保镖，接到的首个任务，竟是保护一个抠门网红。",summary:"程风，退役特种兵，凭借过硬履历和对自己身手的绝对自信，创立了“王牌保镖公司”，却因收费高昂门可罗雀。濒临破产之际，他终于接到第一单：保护一位因直播揭露黑心商家而被威胁的“抠门”生活博主苏小满。程风的专业作派在苏小满精打细算、不按常理出牌的直播生活中频频受挫，闹出无数笑话。然而，当真正的职业杀手袭来，程风才发现威胁并非空穴来风，而看似抠门的苏小满身上，也隐藏着另一个惊人的秘密。二人不得不在啼笑皆非中联手对敌。",review:"动作设计与喜剧元素结合巧妙，主角间的化学反应十足。剧情反转意外，在轻松搞笑的氛围中穿插了扎实的动作戏，娱乐性很强。",cover:"/86.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0054","0007","0021","0020","0010","0040"]}
,{
id:"0086",title:"轻音少女 粤语版",region:"港剧",type:"电影",year:"2010",genreRaw:"音乐 / 校园 / 青春",tags:["港剧","电影","音乐","校园","青春","友谊","粤语配音"],oneLine:"五个香港女校学生，因轻音部结缘，用音乐谱写属于她们的青春毕业季。",summary:"香港某女中，五个背景、性格各异的少女：稳重可靠的部长阿Yan、天才吉他手Ling、元气鼓手Cat、害羞键盘手Wing和富家女贝斯手Miu，因为对音乐的热爱聚集在濒临废部的轻音部。她们从零开始学习协作，为了在毕业前登上学校礼堂举办一场正式的演唱会而努力。过程中，她们经历了创作瓶颈、学业压力、家庭误解乃至成员间的争吵，但音乐和友谊最终将她们紧紧联结。影片以粤语原声生动呈现了港式校园生活，最终在热血沸腾的毕业演唱会中，定格了最闪耀的青春瞬间。",review:"粤语配音赋予了经典故事独特的本土生活气息，情怀满满。少女们的互动自然可爱，音乐动人，完美捕捉了校园青春的热血、懵懂与真挚友谊，治愈力十足。",cover:"/87.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0001","0074","0016","0063","0004","0055"]}
,{
id:"0087",title:"大瓷商",region:"国产",type:"电影",year:"2018",genreRaw:"历史剧情 / 商战",tags:["国产","电影","历史","商战","工匠精神","家族","传承"],oneLine:"清末民初，一个陶瓷世家在时代洪流中，为守护千年窑火与国宝技艺而沉浮。",summary:"故事发生在瓷器之都景德镇。康家是历代为宫廷烧制御瓷的窑户大家。清末国势衰微，御窑厂凋零，康家少爷康敬尧立志重振家业，将景德镇瓷器推向世界。他革新技艺，开拓海外市场，却遭遇本地同行排挤、洋商压价以及战乱冲击。在军阀混战、日军侵华的动荡年代，康敬尧不仅要保护家族秘方和珍品不被掠夺，更要在传统工艺与现代化生产间找到平衡。影片跨越数十年，展现了以康家为代表的中国瓷商，在时代巨变中守护民族工艺魂脉的跌宕史诗。",review:"制作考究，对陶瓷工艺和历史的还原极具匠心。商战部分精彩，家国情怀厚重，男主角在理想与现实间的挣扎令人动容，是一部有质感的历史正剧。",cover:"/88.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0071","0078","0062","0024","0037","0007"]}
,{
id:"0088",title:"警探小北",region:"国产",type:"电影",year:"2022",genreRaw:"犯罪喜剧 / 剧情",tags:["国产","电影","犯罪","喜剧","小人物","励志","东北风情"],oneLine:"东北小城话痨辅警“小北”，凭着一身市井智慧，屡破令人啼笑皆非的奇葩案件。",summary:"在东北某小城，辅警董小北是个有点“不着调”的话痨，总爱用他那套独特的市井逻辑分析案情，让正经科班出身的队长头疼不已。然而，一系列看似荒诞却棘手的案件接连发生：广场舞大妈音响失窃案、澡堂“拖鞋大盗”案、直播网红“灵异”遇袭案……小北却总能从家长里短、人情世故中发现关键线索，歪打正着地揪出嫌疑人。在一桩涉及走私珍稀动物的重案中，小北看似胡闹的侦察方式，竟阴差阳错地找到了破案的关键突破口，赢得了所有人的尊重。",review:"充满了生动的东北地域风情和烟火气，喜剧包袱自然接地气。主角塑造非常成功，在搞笑的外表下有一颗敏锐正直的心，案件设计巧妙，寓庄于谐。",cover:"/89.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0071","0049","0093","0037","0008","0034"]}
,{
id:"0089",title:"前妻别跑",region:"国产",type:"电影",year:"2024",genreRaw:"都市爱情喜剧",tags:["国产","电影","爱情","喜剧","离婚","职场","追妻火葬场"],oneLine:"高冷总裁离婚后幡然醒悟，为追回前妻，不惜伪装身份应聘成为她的下属。",summary:"严述之，理性至上的科技公司CEO，因忽视家庭与情感，被妻子苏晚晴毅然离婚。离婚后，严述之才意识到苏晚晴的重要性，但对方已脱胎换骨，在竞争对手公司成为干练的项目总监。为了接近前妻并挽回她，严述之隐藏身份，用化名应聘成为苏晚晴团队的新人。从此，高冷前总裁开启了被前妻“奴役”、在职场闹出各种笑话的悲惨（追妻）日常。在共同应对商业危机和家庭琐事的过程中，严述之学会了爱与尊重，而苏晚晴也看到了他笨拙却真诚的改变。",review:"追妻火葬场设定永不过时，男主反差萌十足，笑点密集。情感转变细腻合理，在轻松喜剧的外壳下，探讨了现代婚姻中情感交流与共同成长的重要性。",cover:"/90.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0021","0076","0071","0061","0098","0094"]}
,{
id:"0090",title:"养鬼屋",region:"欧美",type:"电影",year:"2017",genreRaw:"恐怖 / 超自然",tags:["欧美","电影","恐怖","超自然","鬼屋","家庭","诅咒"],oneLine:"一家四口搬进梦想家园，却发现这栋房子在“饲养”着历代住户的亡魂。",summary:"为了给孩子们更好的环境，汤姆和萨拉夫妇低价购入一栋位于森林边的维多利亚式老宅。入住后，怪事频发：物品莫名移动，夜半传来私语声，小儿子开始与“看不见的朋友”玩耍。萨拉调查房屋历史发现，百年来这里的住户非死即疯。一位灵媒告知他们，这栋房子并非闹鬼，而是一个“容器”，它在主动吸引并“喂养”活人的负面情绪，滋养困在其中的亡灵，最终目的是吞噬整个家庭的生命力。当他们试图逃离时，房子显露出其真正的恐怖面目——它本身就是活的，且不愿放走新的“食物”。",review:"恐怖氛围营造一流，从渐进式的心理恐惧到后半程的实体惊吓，节奏把控得当。房屋作为活体反派的设定新颖，家庭羁绊在绝境中的力量是影片的温情亮点。",cover:"/91.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0040","0012","0034","0009","0025","0070"]}
,{
id:"0091",title:"被遗忘的祖先的阴影",region:"欧美",type:"电影",year:"2022",genreRaw:"奇幻惊悚 / 剧情",tags:["欧美","电影","奇幻","惊悚","家族诅咒","神话","宿命"],oneLine:"继承古老庄园的年轻女子，发现家族世代被一个源自先祖誓约的恐怖阴影所纠缠。",summary:"艾丽丝在唯一亲人祖母去世后，继承了位于苏格兰高地的古老家族庄园。整理遗物时，她发现一本以古老语言写就的家族编年史，其中反复提及一个被称为“影缚”的诅咒。原来，数百年前，她的先祖为了获得权力，与森林中的古老精魂立下血誓，代价是家族每一代的长子/长女，其影子将逐渐产生独立意识，并最终吞噬本体，成为精魂的祭品。艾丽丝正是这一代的长女，她的影子已经开始出现异常。为了打破宿命，她必须深入禁忌的家族密室，面对那位被囚禁数百年的“最初祖先”的影子。",review:"影片融合了凯尔特神话与哥特式恐怖，美学风格独特而阴郁。诅咒的设定富有想象力，关于血脉与宿命的探讨深入肌理，结局的处理既悲壮又带有一丝希望。",cover:"/92.jpg",m3u8Index:10,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",relatedIds:["0068","0012","0055","0088","0041","0095"]}
,{
id:"0092",title:"新四军女兵",region:"国产",type:"电影",year:"2021",genreRaw:"历史战争 / 剧情",tags:["国产","电影","历史","战争","女性","青春","革命"],oneLine:"抗战时期，一群背景各异的年轻女性，在新四军的熔炉中成长为坚强战士。",summary:"1938年，日军铁蹄肆虐。女学生林书仪、上海纱厂女工阿秀、华侨护士陈安妮等不同出身的女性，因家仇国恨，相继加入新四军。她们被编入卫生队、文工团和通讯班，经历了严酷的战地训练和生死考验。影片通过她们的视角，展现了战地医院的艰辛、敌后宣传的机智、以及传递情报的惊险。在血与火的洗礼中，她们褪去青涩，用青春、智慧甚至生命，为民族解放事业贡献着不可或缺的女性力量。她们的情谊、爱情与牺牲，共同谱写了一曲壮丽的烽火芳华之歌。",review:"视角独特，生动刻画了战争中的女性群像，既有革命豪情，也有细腻情感。历史细节还原认真，战斗场面真实感人，是一部充满热血与敬意的献礼佳作。",cover:"/93.jpg",m3u8Index:11,m3u8Url:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",relatedIds:["0043","0056","0089","0074","0021","0039"]}
,{
id:"0093",title:"妈妈，晚餐吃什么？",region:"日韩",type:"电影",year:"2019",genreRaw:"家庭剧情 / 治愈",tags:["日韩","电影","家庭","剧情","美食","Alzheimer","温情"],oneLine:"患上阿尔茨海默症的母亲，记忆日渐模糊，却始终记得为儿女准备晚餐。",summary:"年迈的母亲福子被确诊患有阿尔茨海默症，开始渐渐忘记关火、认不出老邻居，甚至偶尔叫错儿女的名字。唯一不变的是，每天下午，她都会准时开始准备丰盛的晚餐，口中念叨着儿女们小时候最爱吃的菜。分散在各地的三兄妹因此轮流回家照看，在陪伴母亲的过程中，他们通过母亲固执准备的“晚餐”，重新品味了童年的味道，也回忆起被自己忽略的亲情与家庭矛盾。母亲的病症像一面镜子，照出了每个子女生活与内心的缺失。晚餐的滋味，成了连接过去与现在、唤醒亲情的钥匙。",review:"影片以美食为纽带，平淡而深刻地呈现了阿尔茨海默症家庭的悲喜。情感刻画极其细腻克制，没有刻意煽情，却在日常细节中积累起巨大的情感力量，感人至深。",cover:"/94.jpg",m3u8Index:12,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",relatedIds:["0020","0077","0100","0021","0099","0063"]}
,{
id:"0094",title:"再次人生",region:"韩剧",type:"电影",year:"2023",genreRaw:"奇幻剧情 / 人生",tags:["韩剧","电影","奇幻","剧情","人生重来","中年危机","治愈"],oneLine:"48岁落魄潦倒的中年男子一觉醒来，发现自己回到了18岁高三的课堂。",summary:"李在民，48岁，失业、离婚、与女儿关系紧张，对人生充满悔恨。一次意外昏厥后，他竟重生回到1993年，自己18岁高三的那年春天。拥有未来30年记忆的他，决心利用这次机会，弥补所有遗憾：挽救失败的初恋、抓住错过的商机、改善与父亲的关系、避开导致他人生滑坡的关键错误。然而，当他试图精确“修正”人生轨迹时，却引发了意想不到的蝴蝶效应。他逐渐明白，完美的人生无法设计，真正的“再次人生”，是带着阅历的智慧，去更好地体验和珍惜每一个当下。",review:"设定虽常见，但执行得非常扎实。男主的心路历程真实可信，笑点与泪点并存。影片不止于“逆袭”爽感，更升华到对人生意义的探讨，温情而有深度。",cover:"/95.jpg",m3u8Index:13,m3u8Url:"https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",relatedIds:["0041","0020","0057","0074","0076","0017"]}
,{
id:"0095",title:"肇事者",region:"国产",type:"电影",year:"2020",genreRaw:"悬疑剧情 / 犯罪",tags:["国产","电影","悬疑","犯罪","剧情","人性","救赎"],oneLine:"一场车祸后，五个互不相识的目击者，却都声称自己才是真正的“肇事司机”。",summary:"雨夜，郊区公路上发生一起致命车祸，受害者当场死亡。警方很快找到了五名目击者：一个想自杀的抑郁症患者、一个赶赴重要谈判的商人、一个偷偷跑出家门的叛逆少年、一个刚被辞退的保安、一个赶去医院待产的孕妇。离奇的是，这五人都主动或被动地承认自己是肇事司机。他们各怀秘密，动机成谜。经验老到的刑警张伟发现，这五人的供词细节相互矛盾，却又都能与现场证据部分吻合。随着深入调查，一个关于愧疚、保护、牺牲与人性救赎的复杂故事逐渐浮现。",review:"剧本结构精巧，多重叙事视角成功营造了浓厚的悬疑感。人物塑造立体，每个“肇事者”背后的故事都直击人心，最后的真相揭示带来强烈的情感冲击。",cover:"/96.jpg",m3u8Index:14,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0007","0008","0058","0022","0075","0001"]}
,{
id:"0096",title:"超棒的我们",region:"国产",type:"电影",year:"2024",genreRaw:"校园青春 / 喜剧",tags:["国产","电影","校园","青春","喜剧","友谊","热血"],oneLine:"高中最后一个学期，五个“学渣”决定干一件“超棒”的事：拍一部属于他们的毕业电影。",summary:"高三下学期，成绩垫底的“废柴”五人组——幻想家阿哲、技术宅大鹏、文艺女小鹿、运动男雷子和“社交恐怖分子”圆圆，深感青春即将在题海中荒废。他们突发奇想，决定用手机拍摄一部属于自己的毕业电影，主题是“超棒的我们”。过程中笑料百出：写剧本时争吵不休，拍摄时被老师追得满校园跑，道具频频出状况。但为了这个共同的目标，他们各自发挥特长，凝聚在一起。电影最终成片粗糙却充满真情，不仅在校园放映会上大获成功，更让他们收获了比成绩更宝贵的成长与友谊。",review:"真实又热血的青春写照，没有狗血恋爱，只有纯粹的中二梦想和真挚友情。笑点自然密集，充满校园生活的真实细节，看得人又哭又笑，怀念起自己的青春时光。",cover:"/97.jpg",m3u8Index:15,m3u8Url:"https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",relatedIds:["0094","0076","0061","0048","0040","0049"]}
,{
id:"0097",title:"谁说我结不了婚",region:"国产",type:"电影",year:"2022",genreRaw:"都市爱情 / 喜剧",tags:["国产","电影","都市","爱情","喜剧","女性","独立"],oneLine:"三位事业有成的都市女性，在面临社会“婚恋压力”时，决定主动出击寻找真爱。",summary:"编剧程璐、律师田蕾、美容店老板丁诗雅，是三位年过三十、经济与精神独立的都市好友。她们享受单身生活，却不断被家人、社会甚至自我怀疑追问“为什么结不了婚”。在一次深受刺激后，三人成立“婚恋攻坚小组”，立誓在一年内找到合适伴侣。她们尝试相亲、社交软件、甚至“租个男友回家”，闹出不少笑话，也经历了遇人不淑和自我怀疑。但在一次次尝试与反思中，她们逐渐清晰了自己真正想要的情感关系模样，最终有人邂逅真爱，有人则更加坚定地选择了遵循内心、不被定义的幸福生活。",review:"话题性强，以轻松幽默的方式探讨了当代女性的婚恋观与自我价值。三位女主演绎出色，金句频出，故事不落俗套，传递出“结婚与否，幸福由我定义”的积极态度。",cover:"/98.jpg",m3u8Index:16,m3u8Url:"https://test-streams.mux.dev/test_001/stream.m3u8",relatedIds:["0024","0016","0025","0081","0010","0078"]}
,{
id:"0098",title:"时光里静待花开",region:"国产",type:"电影",year:"2023",genreRaw:"文艺剧情 / 家庭",tags:["国产","电影","文艺","剧情","家庭","留守","儿童","希望"],oneLine:"在大山深处的留守儿童之家，一位老教师用诗歌和等待，守护着孩子们心中的“花期”。",summary:"在偏远的西南山村，唯一的村小因生源不足即将关闭。六十岁的老教师陈静拒绝离开，她接收了附近几个村子的十几个留守儿童，在自家院落办起了“静待花开”小家。她用有限的资源，教孩子们识字、读诗、认识自然。每个孩子都有一个属于自己的花盆，陈老师告诉他们，就像每朵花有自己的花期，每个人的成长也有自己的节奏，要静静等待。影片以诗意的镜头，跟随四季流转，记录了孩子们在缺失父母陪伴下的孤独、敏感与坚韧，以及陈老师如涓涓细流般润物无声的守护与信念。",review:"影片风格清新质朴如散文诗，情感真挚动人。没有刻意的戏剧冲突，却在平静的日常中积聚起震撼人心的力量。对留守儿童内心世界的刻画细腻精准，充满人文关怀。",cover:"/99.jpg",m3u8Index:17,m3u8Url:"https://streaming-pmd.akamaized.net/hls/live/2020923/test/master.m3u8",relatedIds:["0063","0081","0061","0090","0003","0077"]}
,{
id:"0099",title:"李瑞镇的纽约纽约2",region:"韩剧",type:"电影",year:"2025",genreRaw:"都市爱情 / 喜剧",tags:["韩剧","电影","都市","爱情","喜剧","海外","文化碰撞"],oneLine:"韩国明星主厨李瑞镇重返纽约，为拯救一家濒临倒闭的韩餐小店，再续美食奇缘。",summary:"时隔数年，已成为韩国餐饮界明星的李瑞镇，因一档美食纪录片项目再次来到纽约。他偶然发现，当年曾短暂工作并留下美好回忆的“金阿姨韩食店”如今门庭冷落，濒临倒闭。原来，金阿姨年事已高，口味守旧，难以吸引新顾客。李瑞镇决定隐藏身份，以实习生的名义回到小店，暗中用他的现代餐饮理念和营销技巧帮助革新菜单、改善经营。过程中，他与金阿姨固执又可爱的女儿素拉产生了诸多冲突与笑料，也在帮助小店重获新生的过程中，找回了烹饪的初心，并与素拉发展出一段跨越文化和理念差异的浪漫情缘。",review:"延续了前作的美食与浪漫元素，纽约街景与韩餐文化碰撞出新鲜火花。剧情轻松愉快，男女主互动充满化学反应，是一部色香味俱全的都市爱情小品。",cover:"/100.jpg",m3u8Index:18,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0036","0081","0075","0046","0026","0089"]}
,{
id:"0100",title:"双栖间谍",region:"欧美",type:"电影",year:"2016",genreRaw:"动作惊悚 / 谍战",tags:["欧美","电影","动作","惊悚","谍战","双重身份","骗局"],oneLine:"他同时为两个敌对情报机构工作，直到有一天，两个上司给他下达了同一个刺杀命令。",summary:"代号“幽灵”的顶尖特工伊桑，是情报界的一个传奇。鲜为人知的是，他实际上同时效力于CIA和俄罗斯对外情报局，在两大阵营间游走，提供经过筛选的情报以维持平衡，并获取巨额报酬。这种走钢丝般的双重生活，因一项任务而濒临崩溃：双方上司几乎在同一时间，命令他去刺杀同一个目标——一位掌握着能同时摧毁美俄两国人工智能系统密钥的华裔科学家。伊桑意识到自己可能从一开始就是某个更大棋局的棋子。他必须在自己被双方抛弃并追杀前，找出幕后真正的棋手和科学家的秘密。",review:"谍战戏码紧张刺激，双重身份的设定将悬念推到极致。男主在夹缝中求生的智斗与动作戏都非常精彩，局中局的设定让观众直到最后一刻才恍然大悟。",cover:"/101.jpg",m3u8Index:19,m3u8Url:"https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",relatedIds:["0047","0058","0078","0019","0069","0015"]}
,{
id:"0101",title:"江风拂罗衣",region:"国产",type:"电影",year:"2024",genreRaw:"古装悬疑 / 武侠",tags:["国产","电影","古装","悬疑","武侠","女性","探案"],oneLine:"南宋临安，一位精通验尸的女扮男装提刑官，与江湖侠客联手追查连环“红衣索命案”。",summary:"南宋嘉定年间，临安府接连发生数起离奇命案，死者皆为年轻女子，身着红衣，死因诡异。新任提刑官“罗奕”上任调查，其真实身份是精通家传验尸术、为替父伸冤而女扮男装的罗衣。调查中，她与因故卷入案件的江湖游侠江枫结识。江枫武功高强却玩世不恭，与严谨细致的罗衣起初水火不容。两人一个从江湖秘闻入手，一个从尸身线索推敲，逐渐发现案件与一桩二十年前的宫廷秘药失窃案有关，而凶手的目标，直指当今朝堂。他们必须在真凶完成最后仪式前，揭开被江风掩盖的真相。",review:"将古装探案与武侠元素结合得很好，双主角设定有趣，互动有火花。案件设计巧妙，融入历史背景，验尸细节专业，整体悬疑感保持到结尾，是部制作精良的古装类型片。",cover:"/102.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0079","0085","0012","0077","0017","0061"]}
,{
id:"0102",title:"世上无人再爱我",region:"国产",type:"电影",year:"2022",genreRaw:"剧情 / 悬疑 / 剧情",tags:["国产","电影","剧情","悬疑","剧情","社会反思","人性"],oneLine:"一位患绝症的孤女，在生命的尽头设计了一场测试人性与爱的残酷实验。",summary:"30岁的林晚晚被诊断出绝症，身边却空无一人。在生命的最后三个月，她利用社交媒体和遗产，精心设计了一场“世上无人再爱我”的社会实验，将自己伪装成一名急需关怀的垂危病人，并向她生命中所有有过交集的人发出求救信号。她暗中观察每个人的反应：冷漠的前男友、疏远的亲人、虚伪的朋友和陌生的网友。实验逐渐失控，引来了意想不到的关注和恶意，却也让她意外触及了人性中仅存的温暖微光。当真相即将揭晓时，她必须面对自己设计的骗局所带来的道德拷问与情感冲击，并在生命的终章重新定义爱的意义。",review:"影片以冷峻的笔触剖析现代社会的孤独症候群，节奏张弛有度，实验的设定极具巧思和冲击力。女主角从绝望的操纵者到最终忏悔的转变，情感递进层次分明，引人深思。结尾的反转不仅出人意料，更将主题升华至对生命本质的叩问，后劲十足。",cover:"/103.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0004","0085","0010","0088","0032","0013"]}
,{
id:"0103",title:"竖笛与双肩背包第一季",region:"日韩",type:"电影",year:"2015",genreRaw:"校园青春 / 音乐喜剧",tags:["日韩","电影","校园","青春","音乐","喜剧","成长"],oneLine:"两个因社团活动结缘的高中生，用竖笛与背包开启了一段啼笑皆非又治愈的青春旅程。",summary:"性格内向、只会吹竖笛的男生小林海，偶然结识了总是背着巨大双肩包、行色匆匆的转校生山田葵。原来，葵的双肩包里装着她四处流浪的宠物刺猬和全部“家当”。为了帮助葵隐藏秘密并寻找固定住所，海被迫加入了葵创立的“奇妙生物社”，两人以参加全国竖笛合奏大赛为幌子，展开了一系列瞒天过海的校园冒险。他们在旧音乐教室搭建秘密基地，应对严格的教导主任抽查，还要解决刺猬的“住房危机”。在无数啼笑皆非的事件中，两颗孤独的心慢慢靠近，用笨拙的竖笛声谱写了一曲关于友情、责任与接纳的青春乐章。",review:"这是一部充满日式清新与无厘头笑料的青春小品。竖笛和双肩包这两个寻常物件被赋予了独特的象征意义，成为连接角色的纽带。剧情轻松有趣，人物可爱鲜活，音乐元素与青春悸动结合得恰到好处，治愈感满满。",cover:"/104.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0100","0012","0019","0071","0037","0085"]}
,{
id:"0104",title:"德古拉：伯爵的亲属",region:"欧美",type:"电影",year:"2020",genreRaw:"喜剧 / 恐怖 / 家庭",tags:["欧美","电影","喜剧","恐怖","家庭","吸血鬼","恶搞"],oneLine:"德古拉伯爵的远房亲戚，一群不靠谱的现代吸血鬼，为争夺遗产闹翻了古堡。",summary:"传说中的德古拉伯爵“去世”后，他在罗马尼亚的古老城堡和巨额遗产引来一群奇特的现代“亲属”：一个在夜店当DJ的曾孙、一个信奉素食主义的吸血鬼表妹、一个沉迷网络直播的狼人侄儿，以及一个自称是伯爵私生子的房产中介。这群格格不入的亲戚被迫齐聚阴森古堡，遵照遗嘱完成一系列荒诞的挑战，如用大蒜烹饪美食、在日出前完成社区服务等，才能继承遗产。过程中，他们不仅要应付彼此间的勾心斗角，还要对抗真正的、觊觎城堡的古老邪恶力量，最终不得不放下成见，组成一支“非典型”家庭战队。",review:"影片颠覆了传统吸血鬼题材的严肃恐怖氛围，以黑色幽默和家庭闹剧的形式呈现，创意十足。角色设定鲜明有趣，现代生活方式与古老传说的碰撞笑点频出。在疯狂搞笑之余，也巧妙融入了关于家庭纽带与自我认同的温情内核。",cover:"/105.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0090","0100","0066","0091","0014","0018"]}
,{
id:"0105",title:"终曲",region:"国产",type:"电影",year:"2018",genreRaw:"剧情 / 音乐 / 传记",tags:["国产","电影","剧情","音乐","传记","艺术人生","传承"],oneLine:"一位隐退多年的民乐大师，在生命最后时光寻找丢失的乐章，完成与命运的最终和解。",summary:"著名二胡演奏家陈暮年逾古稀，身患重病，隐居江南小镇。他心中有一个未了的夙愿：找到并完成他年轻时创作却意外丢失的最后一章乐曲《终曲》。在年轻记者苏雨的帮助下，陈暮开始了一段回溯一生的寻找之旅。记忆的碎片随着过往的采访、老友的回忆以及散落的旧物逐渐拼凑，揭示了他与恩师、爱人以及那个特殊年代之间复杂的情感纠葛与艺术理想的分歧。寻找乐章的过程，也是他梳理人生、直面遗憾与释怀的过程。最终，在生命烛火将熄之际，他并非找到了原谱，而是在内心奏响了属于自己的、最圆满的《终曲》。",review:"影片节奏舒缓如一首散文诗，画面极具东方美学韵味。主角的表演内敛而富有张力，将艺术家的孤傲、脆弱与执着刻画得入木三分。音乐不仅是线索，更是灵魂，与人物命运紧密交织，情感真挚动人，余韵悠长。",cover:"/106.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0013","0052","0027","0067","0017","0018"]}
,{
id:"0106",title:"暗夜心理师",region:"日韩",type:"电影",year:"2023",genreRaw:"犯罪悬疑 / 心理惊悚",tags:["日韩","电影","悬疑","惊悚","犯罪","心理","高智商对决"],oneLine:"一位只在晚间接诊的心理师，卷入连环杀人案，发现自己可能是凶手的下一个目标。",summary:"心理咨询师高桥凉介有一个不为人知的秘密：他只在深夜接待有严重心理创伤或黑暗秘密的访客。某天，一名神秘女子鹿岛由纪成为他的病人，诉说着被跟踪的恐惧。不久，与由纪描述相符的连环杀人案接连发生，死者都与凉介的过往病人有关。警方怀疑凉介，而凉介在治疗由纪的过程中，逐渐发现她的记忆碎片竟与自己童年时目睹的一起未解悬案惊人吻合。他必须在警方和真凶之间周旋，利用自己的专业知识，在下一个晚间来临前，解开由纪的心迷宫，并揪出那个潜伏在暗夜中、意图将他拖入深渊的“模仿者”。",review:"氛围营造堪称一流，将心理诊所的密闭空间与都市暗夜的压抑感完美结合。悬念层层递进，反转出人意料又合乎逻辑。心理分析与罪案追查的双线叙事紧凑有力，主角与病人之间的心理攻防战极具张力，是部精彩的脑力盛宴。",cover:"/107.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0079","0091","0056","0018","0038","0031"]}
,{
id:"0107",title:"快乐在一起",region:"国产",type:"电影",year:"2010",genreRaw:"家庭喜剧 / 都市情感",tags:["国产","电影","喜剧","家庭","都市","温情","合家欢"],oneLine:"三个风格迥异的都市家庭，因意外成为邻居，在鸡飞狗跳中重新定义快乐与家。",summary:"在上海一栋老式公寓楼里，搬来了三户人家：追求小资情调的咖啡店老板一家、务实节俭的工程师一家，以及带着青春期女儿的单身妈妈。不同的生活习惯和价值观念让三家摩擦不断，从装修噪音、宠物纠纷到孩子教育，闹出无数笑话。然而，在一次全楼停电的夜晚，他们被迫聚在楼道里分享烛光和食物，开始有了第一次真诚的交流。此后，通过共同应对小区改造、帮助彼此解决家庭危机（如孩子升学、老人赡养、中年失业），这三户原本陌生的邻居逐渐打破了隔阂，从“对门”变成了可以分享快乐与忧愁的“大家庭”，找到了在现代都市丛林中久违的邻里温情与支持。",review:"影片充满了接地气的笑料和生活细节，人物塑造鲜活立体，宛如我们身边的邻居。剧情流畅自然，在轻松诙谐的基调下，细腻地探讨了都市人的孤独与对连接的渴望。情感真挚不做作，是一部能让人笑中带泪的暖心之作。",cover:"/108.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0078","0062","0090","0088","0065","0015"]}
,{
id:"0108",title:"走火",region:"国产",type:"电影",year:"2021",genreRaw:"动作犯罪 / 悬疑",tags:["国产","电影","动作","犯罪","悬疑","枪战","卧底"],oneLine:"一次意外的枪支走火，揭开了深埋多年的警队黑幕，让卧底警察陷入生死信任危机。",summary:"边境城市的一次缉毒行动中，年轻警察周凯的配枪意外走火，导致一名关键嫌疑人死亡，行动失败。周凯被停职调查，却坚信自己的枪被人动过手脚。在调查过程中，他发现这起“走火”事件与七年前一桩涉及警方内部人员的军火走私悬案有关，而当年负责该案的队长，正是如今自己的上司。周凯在亦敌亦友的老刑警暗中帮助下，独自潜入犯罪集团边缘调查，却发现集团头目似乎对他了如指掌。当真相逐渐浮出水面，他发现自己早已身处一个精心设计的局中局，必须在自己被彻底“抹去”前，找出那个隐藏在警徽背后的“幽灵”。",review:"影片开场即以高能的“走火”事件抓住眼球，节奏紧张刺激，枪战和追车戏码设计精良。悬疑线铺设巧妙，内部黑幕的设定增加了故事的深度和残酷感。主角在黑白之间的挣扎与信念的坚守刻画到位，结局的反转有力而悲壮。",cover:"/109.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0043","0089","0010","0053","0091","0006"]}
,{
id:"0109",title:"莱卡",region:"欧美",type:"电影",year:"2017",genreRaw:"科幻 / 剧情 / 冒险",tags:["欧美","电影","科幻","剧情","冒险","太空","动物"],oneLine:"以第一只进入太空的狗“莱卡”的视角，讲述它在孤独航行中对地球与生命的回望。",summary:"这是一部极具实验风格的科幻电影，大部分篇幅通过拟人化的想象，呈现小狗莱卡在苏联斯普特尼克2号卫星舱内的“意识流”旅程。影片穿插黑白纪实影像，回顾莱卡从莫斯科街头被选中、接受训练到最后发射的过程。在寂静的太空中，莱卡透过舷窗看着渐行渐远的地球，它的记忆与感官被无限放大：怀念训练员粗糙而温柔的手，渴望街头的阳光和气味，感受着身体在失重与辐射下的变化。影片没有回避历史的残酷，而是以诗意的、充满生命力的方式，探讨牺牲、探索、人与动物的情感联结，以及莱卡作为生命个体而非符号的尊严，最终抵达一个震撼而深邃的哲学终点。",review:"影片视角独特，充满人文关怀与哲学思辨，将一段冰冷的历史转化为动人的太空挽歌。视觉风格在纪实与超现实之间切换自如，配乐和音效极大增强了孤独感和沉浸体验。这是一部需要静心感受的作品，情感冲击力后劲巨大。",cover:"/110.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0038","0099","0057","0037","0083","0100"]}
,{
id:"0110",title:"爱的蹦极",region:"日韩",type:"电影",year:"2004",genreRaw:"爱情 / 奇幻 / 剧情",tags:["日韩","电影","爱情","奇幻","剧情","前世今生","唯美"],oneLine:"一对相约蹦极殉情的情侣，在纵身一跃后，于不同的时代和身体里再次相遇。",summary:"大学生徐仁友和女孩太嬉相爱至深，约定若不能在一起便去蹦极殉情。一场误会导致太嬉独自跳下，仁友悲痛欲绝。多年后，已成为高中老师的仁友，在新入学的男生李宪身上看到了太嬉的影子——相同的习惯、眼神甚至记忆。李宪也莫名地被仁友吸引，并开始梦到身为女孩的前世。这段超越性别和剧情的感情让两人陷入巨大的困惑与痛苦。随着记忆的复苏，他们终于明白，这是太嬉的灵魂在寻找归处。在当年那座蹦极台上，两人再次站到边缘，这次不是为了告别，而是为了确认那份穿越生死与形体的、独一无二的爱情，并做出最终的选择。",review:"影片概念惊艳，将极致的爱情与奇幻的转世设定结合，探讨了爱的本质是否依附于皮囊。画面唯美，情感渲染极其细腻动人，两位主演的演技精湛。结局的处理既浪漫又留有开放的哲学思考空间，是韩国爱情电影中一部风格独特的经典之作。",cover:"/111.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0047","0059","0037","0018","0083","0027"]}
,{
id:"0111",title:"血腥乞丐",region:"欧美",type:"电影",year:"2008",genreRaw:"恐怖 / 惊悚 / 犯罪",tags:["欧美","电影","恐怖","惊悚","犯罪","血浆","复仇"],oneLine:"小镇上出现一个行踪诡异的乞丐，凡是对他施暴或侮辱的人，都会以离奇血腥的方式死去。",summary:"表面宁静的美国小镇，突然出现一个衣衫褴褛、沉默寡言的流浪汉。一些镇民对他报以同情，但更多的是欺凌和驱赶。然而，奇怪的事情接连发生：一个向他泼水的酒吧醉汉被发现溺死在自家的浴缸；一个踢翻他乞讨碗的混混被自己的车反复碾压；一个试图将他赶出公园的保安被公园里的铁栅栏刺穿。新任女警探艾拉接手调查，发现所有死者生前都对流浪汉有过恶意行为。她试图接近这个被称为“血腥乞丐”的神秘人，却逐渐揭开一段被小镇刻意遗忘的集体罪恶——多年前，一群年轻人曾对一个无辜的外来者实施了残酷的私刑。如今，复仇以超自然的方式降临。",review:"影片成功营造了无处不在的压抑和恐怖氛围，血腥场面设计具有创意和冲击力。故事内核是经典的“诅咒与复仇”，但通过“乞丐”这一设定赋予了新意。节奏控制得当，悬念保持到最后一刻，在满足感官刺激的同时也带来了关于冷漠、偏见与集体罪责的思考。",cover:"/112.jpg",m3u8Index:10,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",relatedIds:["0091","0063","0009","0077","0040","0096"]}
,{
id:"0112",title:"穿越美国",region:"欧美",type:"电影",year:"2006",genreRaw:"剧情 / 喜剧 / 公路",tags:["欧美","电影","剧情","喜剧","公路","跨性别","家庭"],oneLine:"一位即将完成变性手术的男人，被迫驾车穿越美国，去保释他从未谋面的“儿子”。",summary:"布莉，一位即将进行最后一步变性手术的跨性别女性，生活平静。一通来自监狱的电话打破了这一切：她有一个从未谋面的儿子托比，因吸毒被捕，需要家人保释。布莉不得不以“父亲”的身份，开着一辆破车，从洛杉矶前往纽约。旅途漫长，布莉隐瞒着自己的身份和即将进行的手术，而叛逆、迷茫的托比则对这位突然出现的“老爸”充满怀疑和敌意。一路上，两人遭遇各种麻烦和奇葩人物，在不断碰撞和争吵中，布莉的过去和托比对母爱的渴望逐渐浮现。这段荒诞又温情的公路之旅，最终让两人都不得不重新审视家庭、身份与接纳的意义。",review:"影片以幽默而包容的视角切入敏感的跨性别议题，公路片的形式提供了丰富的戏剧空间和人文景观。主演的表演细腻而富有层次，将角色的脆弱、坚强与幽默感完美融合。故事笑中带泪，情感真挚，是关于理解和爱的动人颂歌。",cover:"/113.jpg",m3u8Index:11,m3u8Url:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",relatedIds:["0069","0039","0017","0034","0052","0021"]}
,{
id:"0113",title:"嘿！真不是闹着玩的",region:"国产",type:"电影",year:"2019",genreRaw:"喜剧 / 运动 / 励志",tags:["国产","电影","喜剧","运动","励志","老年","热血"],oneLine:"一群平均年龄65岁的老伙计，为保住社区活动中心，组队挑战专业电竞战队。",summary:"老北京的某个胡同社区，活动中心面临拆迁，改建成商业项目。这里的老人们没了下棋、喝茶、唠嗑的地方。以老李头为首的几位不服输的老伙计，偶然得知拆迁方的老板是个狂热的电竞爱好者，并放出狂言：“只要你们能在游戏里赢了我的战队，这活动中心就给你们留着！”为了守住精神家园，这群对智能手机都玩不转的老人们，在社区年轻网管的帮助下，成立了一支“夕阳红战队”。从认键盘鼠标开始，苦练热门电竞游戏。他们闹出了无数笑话，也遭遇了家人的不解和身体的挑战，但彼此的友谊和不服老的精神却越发闪亮。比赛日，一场看似不可能的对决正式打响。",review:"影片将传统老年题材与新兴电竞文化结合，创意十足，产生了强烈的喜剧反差效果。老戏骨们的表演自然生动，笑料层出不穷又不失温情。内核是深刻的代际沟通与老年生活价值探讨，热血励志的情节能让所有年龄段的观众产生共鸣。",cover:"/114.jpg",m3u8Index:12,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",relatedIds:["0079","0069","0091","0062","0087","0001"]}
,{
id:"0114",title:"爱的进行时",region:"日韩",type:"电影",year:"2021",genreRaw:"爱情 / 音乐 / 剧情",tags:["日韩","电影","爱情","音乐","剧情","实时电影","长镜头"],oneLine:"一部实时进行的电影，镜头跟随一对情侣从相识、热恋、争吵到抉择的90分钟。",summary:"这部实验性电影采用一镜到底的实时拍摄手法，影片时长即故事发生的真实时间。故事开始于一家咖啡馆，文艺男青年智宇偶遇来买咖啡的上班族女孩秀贤。从借充电线开始搭讪，到相约一起吃晚饭，镜头始终跟随两人，记录下他们从初识的羞涩、兴趣相投的兴奋、逐渐敞开心扉的亲密，再到因价值观差异而产生分歧、激烈争吵的全过程。场景在咖啡馆、街头、餐厅、公园、地铁和最终的目的地之间自然流动。没有剪辑，没有闪回，观众如同一个看不见的旁观者，目睹一段感情在最浓缩的时空里急速发酵、升温直至面临爆发的临界点，最终指向一个开放而耐人寻味的结局。",review:"影片最大胆之处在于其形式与内容的统一，一镜到底的挑战极大地增强了真实感和沉浸感，对演员的表演和剧本的节奏控制要求极高。情感发展自然流畅，仿佛亲眼见证一段爱情的“直播”。这种极致的临场感让观众对爱情的发生与消逝有了全新的体验和思考。",cover:"/115.jpg",m3u8Index:13,m3u8Url:"https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",relatedIds:["0078","0069","0083","0077","0030","0093"]}
,{
id:"0115",title:"丁克与宝贝",region:"国产",type:"电影",year:"2016",genreRaw:"都市情感 / 家庭喜剧",tags:["国产","电影","都市","情感","家庭","喜剧","丁克"],oneLine:"一对坚定的丁克夫妻，因意外“获赠”一个婴儿，生活陷入甜蜜又混乱的漩涡。",summary:"广告公司高管林薇和自由摄影师丈夫周洲是坚定的丁克族，享受二人世界的自由与浪漫。然而，周洲久未联系的堂兄夫妇突然因事故去世，留下一个仅六个月大的女婴暖暖，并指定他们为监护人。一夜之间，奶粉、尿布、哭声取代了红酒、旅行和懒觉。两人手忙脚乱，事业和生活节奏被打乱，还面临来自双方父母和社会观念的压力。在共同抚养暖暖的日子里，他们经历了无数崩溃和笑料，也重新审视了彼此的关系、责任以及对“家庭”的定义。最终，他们需要在法律规定的领养抉择期限前，决定是成为暖暖真正的父母，还是为她寻找一个新的家庭。",review:"影片以轻松幽默的方式探讨了当代都市青年面临的生育选择与家庭责任命题。剧情贴近生活，笑点与泪点并存。两位主角的成长转变真实可信，婴儿的加入像一面镜子，照出了婚姻中更深层的情感联结。话题性强，能引发广泛讨论。",cover:"/116.jpg",m3u8Index:14,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0049","0028","0090","0063","0015","0052"]}
,{
id:"0116",title:"养母的逆袭！反派的臣服",region:"国产",type:"电影",year:"2024",genreRaw:"喜剧 / 奇幻 / 家庭",tags:["国产","电影","喜剧","奇幻","家庭","穿越","反套路"],oneLine:"一位暴躁养母意外穿成小说里的恶毒女配，却用市井智慧“整顿”了全书反派。",summary:"47岁的社区调解员王桂芳，因吐槽一本古言小说里同名的恶毒养母太蠢，气得血压飙升后晕倒，竟穿成了书中那个虐待女主、最终被男女主联手搞死的炮灰养母。面对楚楚可怜的未来女主和虎视眈眈的各方势力，王桂芳一拍大腿：养什么娃宅什么斗！她凭借几十年调解邻里纠纷、智斗熊孩子的丰富经验，开始了另类逆袭：用广场舞精神团结后院姨娘，用“居委会大妈式”谈心瓦解反派阴谋，用扎实的厨艺俘获全府上下（包括冷面王爷男主）的胃。当她以为能安心养老时，却发现原著男主看她的眼神越来越不对劲，而最大的幕后黑手，似乎也盯上了这个不按套路出牌的“异数”。",review:"反套路的穿越设定令人耳目一新，将现代市井智慧与古装宅斗背景碰撞出大量笑料。女主角形象鲜活霸气，颠覆了传统叙事。剧情轻松爽快，在搞笑之余也传递了关于家庭关系与自我价值的思考，是一部解压又暖心的下饭神作。",cover:"/117.jpg",m3u8Index:15,m3u8Url:"https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",relatedIds:["0098","0070","0072","0034","0089","0051"]}
,{
id:"0117",title:"刑侦日记粤语",region:"国产",type:"电影",year:"2023",genreRaw:"犯罪悬疑 / 心理",tags:["国产","电影","犯罪","悬疑","心理","港风","多重人格"],oneLine:"一名拥有多重人格的警探，每个人格都是破案专家，却共同陷入一桩人格分裂者制造的迷案。",summary:"香港重案组督察叶朗，因童年创伤患有多重人格障碍。他的身体里住着冷静缜密的推理者“阿哲”、身手不凡的行动派“阿锋”、以及擅长犯罪心理侧写的女性人格“芯姐”。依靠不同人格的特殊能力，他屡破奇案，但人格间的记忆不共享和切换失控也带来巨大风险。此时，香港出现一系列仪式感极强的连环凶杀案，凶手在现场留下晦涩的心理学符号。叶朗和他的团队深入调查，发现凶手似乎是一个高度危险的多重人格障碍者，并且对叶朗了如指掌，甚至能预测他的人格切换。叶朗必须整合体内所有的人格力量，在混乱的记忆碎片中拼凑真相，与这个“镜像般”的对手展开一场关乎身份与意识存亡的终极对决。",review:"港式刑侦片的硬核悬疑感与心理学设定结合得非常出色。多重人格的设定并非噱头，而是深度参与破案和推动剧情的关键。节奏紧凑，案情扑朔迷离，反转不断。主角一人分饰多角的演绎极具挑战性和看点，心理层面的交锋比枪战更惊心动魄。",cover:"/118.jpg",m3u8Index:16,m3u8Url:"https://test-streams.mux.dev/test_001/stream.m3u8",relatedIds:["0044","0089","0017","0074","0050","0070"]}
,{
id:"0118",title:"爱随风逝夏已晚",region:"日韩",type:"电影",year:"2012",genreRaw:"爱情 / 剧情 / 纯爱",tags:["日韩","电影","爱情","剧情","纯爱","绝症","夏日"],oneLine:"在那个被蝉鸣和海风填满的夏日，两个少年相遇，却注定要面对一场提前到来的离别。",summary:"高中生森田未来因心脏病需要静养，暑假被送到临海小镇的姨母家。在那里，他遇见了自由不羁、以冲浪为生的少年海斗。未来被海斗身上那种蓬勃的生命力深深吸引，而海斗则对未来的细腻和温柔感到好奇。两人一起度过了一个完美的夏日：清晨看海，午后钓鱼，夜晚分享秘密。然而，未来隐瞒了自己的病情，他知道自己的时间所剩无几。当夏日即将结束时，未来病情突然恶化。海斗得知真相后，没有沉溺于悲伤，而是决定用自己方式，为未来创造最后一个、也是最灿烂的夏日记忆。他们的爱情，如同夏日的烟火，在极致绚烂后，随风而逝，却永远改变了彼此生命的轨迹。",review:"影片画面唯美如明信片，将夏日的清新与哀愁渲染到极致。情感刻画极其细腻含蓄，两位少年演员的化学反应自然动人。没有刻意煽情，却在平淡的日常细节中积累起巨大的情感力量，让那份注定无果的纯爱显得格外珍贵和伤感，余韵悠长。",cover:"/119.jpg",m3u8Index:17,m3u8Url:"https://streaming-pmd.akamaized.net/hls/live/2020923/test/master.m3u8",relatedIds:["0023","0068","0088","0020","0010","0084"]}
,{
id:"0119",title:"娇娇王妃驾到，撩拨王爷脸红心跳",region:"国产",type:"电影",year:"2023",genreRaw:"古装喜剧 / 爱情 / 甜宠",tags:["国产","电影","古装","喜剧","爱情","甜宠","穿越"],oneLine:"现代美妆博主穿越成待嫁王妃，用美妆和心理学把冷面王爷撩得方寸大乱。",summary:"顶尖美妆博主苏娇娇意外穿越，成了古装剧中即将嫁给残疾战神王爷慕容翊的替嫁王妃。原著里，王妃婚后备受冷落，结局凄惨。苏娇娇决定自救，靠脸吃饭！她利用现代美妆技巧改造自己，从“丑女”变身惊艳美人，更运用心理学知识，对那位传说中冷酷暴戾的王爷进行“精准撩拨”：假装不经意肢体接触，用色彩心理学搭配服饰，甚至为他量身定制“男友视角”妆容教程。慕容翊从一开始的戒备厌恶，到疑惑好奇，最后彻底沦陷，反被她撩得面红耳赤、手足无措。就在两人感情升温时，朝堂阴谋也悄然逼近，苏娇娇发现，慕容翊的残疾背后隐藏着巨大秘密，而她的现代技能，成了破局的关键。",review:"轻松愉快的古装小甜饼，人设新颖讨喜，女主不傻白甜，男主反差萌十足。将现代美妆知识融入古装剧情，产生了意想不到的喜剧效果。感情线发展自然甜蜜，互动趣味横生，是适合放松心情的优质下饭电影。",cover:"/120.jpg",m3u8Index:18,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0015","0019","0012","0029","0014","0100"]}
,{
id:"0120",title:"千里江山不如你",region:"国产",type:"电影",year:"2021",genreRaw:"历史 / 爱情 / 战争",tags:["国产","电影","历史","爱情","战争","家国","权谋"],oneLine:"乱世中，一位画家与一位将军，在江山与挚爱之间，面临最残酷的抉择。",summary:"北宋末年，才华横溢的宫廷画师顾清风，奉命绘制《千里江山图》。期间，他与将门之女、女扮男装潜入画院调查一桩军械案的赵映雪相识相知。映雪的英气与抱负深深吸引了清风，而清风的纯粹与才华也让映雪动容。然而，金兵南下，山河破碎。映雪恢复身份，奔赴战场，而清风则被俘至金国，被迫为敌酋作画。两人相隔千里，一个在沙场浴血，一个在敌营忍辱，心中却始终坚守着对彼此的承诺与对故土的眷恋。数年后，一幅暗藏军事地图和相思印记的画卷辗转回到宋土，成为扭转战局的关键，也将两人的命运再次紧密相连，在家国大义与个人情感的极端冲突下，谱写一曲凄美壮烈的挽歌。",review:"影片格局宏大，将个人情感完美嵌入历史洪流，画面极具中国古典美学意境。爱情线缠绵悱恻，家国线荡气回肠，两者的交织处理得富有张力。演员表演深刻，将乱世中人的挣扎、坚守与牺牲刻画得感人至深，是一部制作精良的历史爱情史诗。",cover:"/121.jpg",m3u8Index:19,m3u8Url:"https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",relatedIds:["0014","0031","0042","0099","0100","0073"]}
,{
id:"0121",title:"特警风暴",region:"国产",type:"电影",year:"2022",genreRaw:"动作 / 灾难 / 剧情",tags:["国产","电影","动作","灾难","剧情","救援","硬核"],oneLine:"一场突发大地震袭击城市，特警小队深入最危险的核心区，展开极限生死救援。",summary:"繁华的东海市突发7.8级强震，摩天大楼倒塌，交通通讯中断，全城陷入瘫痪。市公安局特警支队“风暴”小队在队长雷战的带领下，刚刚结束一场反恐演练，立刻成为首批投入救援的尖刀力量。他们奉命深入震中核心区，营救被困在一栋即将二次坍塌的五星级酒店顶层的近百名群众和重要外宾。面对余震不断、起火、断水断粮以及潜在的社会骚乱，小队成员利用高超的战术技能和装备，在废墟中开辟生命通道。然而，救援过程中，他们发现了地震背后可能存在的异常人为因素线索。小队必须在完成救援使命的同时，分秒必争地查明真相，防止更大的灾难发生。",review:"影片动作场面和灾难特效制作精良，极具视觉冲击力和临场感，将地震的恐怖与救援的紧迫渲染得淋漓尽致。特警队员的专业性和牺牲精神令人动容，人物群像刻画鲜明。剧情紧凑，张弛有度，在主旋律框架下拍出了商业大片的爽感与情感厚度。",cover:"/122.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0035","0068","0065","0097","0029","0078"]}
,{
id:"0122",title:"积善之家有余庆",region:"国产",type:"电影",year:"2014",genreRaw:"剧情 / 家庭 / 年代",tags:["国产","电影","剧情","家庭","年代","温情","传承"],oneLine:"跨越半个世纪，一个普通中国家庭用善良与诚信写就的悲欢离合与财富传承故事。",summary:"影片从1940年代讲起，绸缎庄掌柜林守义因诚信经营和乐善好施，在当地颇有声望，他坚信“积善之家，必有余庆”。战乱中，他倾尽家财救助难民，导致家道中落。新中国成立后，儿子林建国成为一名工人，虽清贫但仍坚守父亲“与人为善”的家训，在工厂和邻里间有口皆碑。改革开放后，孙子林晓峰下海经商，在市场经济大潮中几经沉浮，一度迷失在利益中。一次重大挫折后，他偶然发现了祖父留下的日记和账本，以及父亲从未提及的、那些受助于林家的后人悄然回报的恩情。深受触动的晓峰重拾家风，将“善”与“信”融入现代企业管理，最终使家族企业焕发新生，也真正理解了“余庆”的深远含义。",review:"影片时间跨度大，叙事沉稳厚重，像一部微缩的中国近现代家庭史诗。通过三代人的命运变迁，生动诠释了“善有善报”的传统价值观在现代社会中的传承与力量。情感真挚朴实，人物命运与时代背景紧密勾连，充满了温暖的人文关怀和人生智慧。",cover:"/123.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0012","0013","0038","0036","0064","0034"]}
,{
id:"0123",title:"走进阳光的女人",region:"欧美",type:"电影",year:"2019",genreRaw:"剧情 / 传记 / 励志",tags:["欧美","电影","剧情","传记","励志","女性","康复"],oneLine:"一位因战争创伤隐居黑暗数十年的女人，在晚年因一幅画决定勇敢地走进阳光。",summary:"二战期间，犹太女孩艾拉在集中营经历了非人的磨难，虽幸存却失去了所有亲人，并患上了严重的光过敏症和创伤后应激障碍。战后，她隐居在纽约一栋公寓的阴暗房间里，数十年来足不出户，仅靠夜间活动，靠绘制精细的微缩模型世界逃避现实。新搬来的邻居、华裔女孩米莉是一名社工，她敏感地察觉到艾拉的异常，并耐心地尝试接触。一次偶然，米莉发现了艾拉惊人的艺术天赋。她鼓励艾拉画一幅“窗外”的画。艾拉颤抖着拿起画笔，记忆的闸门打开。在米莉和一位老年心理医生的帮助下，艾拉开始缓慢而痛苦地面对过去。最终，在一个清晨，她第一次主动拉开了厚重的窗帘，让阳光洒满房间，也迈出了走向新生的第一步。",review:"影片聚焦于战争创伤的长期影响与人的坚韧复原力，主题深刻。女主角的表演极具震撼力，将角色内心的黑暗、恐惧与微弱的希望刻画得丝丝入扣。叙事节奏舒缓而有力，情感积累层层递进，结局的处理充满象征意义和治愈力量，感人至深。",cover:"/124.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0005","0055","0099","0073","0026","0093"]}
,{
id:"0124",title:"骨灵",region:"欧美",type:"电影",year:"2017",genreRaw:"恐怖 / 奇幻 / 剧情",tags:["欧美","电影","恐怖","奇幻","剧情","哥特","诅咒"],oneLine:"一位修复古画的女孩，意外释放了被封印在油画中的“骨灵”，卷入古老的家族诅咒。",summary:"天赋异禀但际遇坎坷的画作修复师艾薇，接到一份报酬丰厚但神秘的工作：修复一座偏远古堡中一幅破损严重的家族肖像画。画中是一位美丽的维多利亚时代贵族少女。在修复过程中，艾薇频繁出现幻觉，听到细语，并发现画布的纤维下似乎嵌有真正的骨屑。一次意外，她的血滴落在画上，封印被打破。一个由白骨和阴影构成的“骨灵”被释放，它声称自己是画中少女被囚禁的灵魂，并指控艾薇是这个诅咒家族的后裔。古堡开始发生一系列超自然恐怖事件，艾薇必须依靠自己的知识和突然觉醒的、与绘画相关的灵媒能力，在骨灵的引导（或误导）下，揭开几个世纪前一场关于背叛、谋杀与巫术的真相，才能摆脱纠缠，或选择接受自己真正的遗产。",review:"影片成功营造了古典哥特式的恐怖氛围，将艺术、神秘学与家族秘史巧妙结合。“骨灵”的设定新颖且视觉冲击力强。悬疑层层推进，真相出人意料。女主角的成长线与恐怖解谜线并进，使得故事在吓人之余，也具有情感和思想的深度。",cover:"/125.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0037","0034","0072","0079","0040","0066"]}
,{
id:"0125",title:"赛尔号第四季之战神风云决",region:"国产",type:"电影",year:"2022",genreRaw:"科幻 / 冒险 / 动画",tags:["国产","电影","科幻","动画","冒险","机甲","热血"],oneLine:"赛尔先锋小队为阻止反派释放远古战神，展开了一场跨越星系的终极对决。",summary:"在浩瀚的宇宙中，赛尔号飞船接收到来自古老星域“战神星域”的异常能量波动。以雷伊、盖亚为首的赛尔先锋小队奉命前往调查，发现邪恶势力“暗影议会”正企图解开封印，释放足以毁灭宇宙的远古机械战神“阿瑞斯”。小队成员们必须团结一致，在全新的精灵伙伴协助下，穿越充满能量风暴和古代遗迹的险境，寻找失落的“和平星核”。最终决战在战神星域的核心展开，主角们不仅要面对强大的机械战神，更要直面内心对力量与和平的抉择，用友谊与勇气谱写了一曲守护宇宙的壮丽诗篇。",review:"影片节奏紧凑，星际冒险场景宏大壮观，机甲战斗场面设计极具想象力。情感刻画细腻，角色在成长中对于责任与力量的思考，提升了作品的深度，适合全年龄段观众。",cover:"/126.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0061","0095","0005","0090","0060","0007"]}
,{
id:"0126",title:"爱情宣言",region:"日韩",type:"电影",year:"2018",genreRaw:"爱情 / 音乐 / 剧情",tags:["日韩","电影","爱情","音乐","浪漫","治愈"],oneLine:"失声的作曲家与充满活力的街头歌手，用旋律谱写了一段打破沉默的恋曲。",summary:"因一场意外失去声音的天才作曲家韩在俊，逐渐封闭自我，直到他在街头遇到了用歌声治愈人心的女孩金素拉。素拉的热情像一束光照进了在俊灰暗的世界。在俊开始用笔下的音符为素拉创作歌曲，而素拉则用歌声替他“发声”。两人共同准备一场重要的音乐比赛，感情在旋律中升温。然而，在俊前女友的回归和一场事关未来的抉择，让他们的关系面临考验。最终，在俊能否鼓起勇气，用自己的方式向世界、也向素拉发出最动人的“爱情宣言”？",review:"影片情感真挚动人，音乐元素与爱情主线完美融合。男女主角的化学反应自然，失声设定带来了独特的浪漫张力，结局令人眼眶湿润。",cover:"/127.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0069","0061","0027","0065","0047","0053"]}
,{
id:"0127",title:"我想和你唱第二季",region:"国产",type:"电影",year:"2023",genreRaw:"歌舞 / 喜剧 / 励志",tags:["国产","电影","歌舞","喜剧","励志","音乐梦想"],oneLine:"过气歌手与素人粉丝组队，为争夺舞台名额，上演爆笑又温情的逆袭之旅。",summary:"曾经红极一时、如今过气的歌手郝歌，为了重返舞台，被迫参加一档名为《我想和你唱》的真人秀比赛，规则是必须与一位完全陌生的素人粉丝组队参赛。他阴差阳错地匹配上了五音不全却极度热忱的超市收银员林晓晓。从最初的互相嫌弃、排练鸡飞狗跳，到逐渐发现彼此的闪光点，这对奇葩组合在众多专业对手中笑料百出，却也温暖人心。他们用独特的表演风格和真诚的情感，一路磕磕绊绊闯进决赛，不仅挑战了音乐梦想，更重新定义了成功与陪伴的意义。",review:"喜剧节奏把控得当，歌舞场面充满活力。双主角的成长线清晰，从冲突到扶持的过程自然有趣，充满了小人物的真挚与幽默，娱乐性与情感共鸣兼具。",cover:"/128.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0023","0032","0021","0062","0097","0045"]}
,{
id:"0128",title:"人生真美丽",region:"日韩",type:"电影",year:"2010",genreRaw:"家庭 / 剧情 / 喜剧",tags:["日韩","电影","家庭","剧情","喜剧","温情","人生"],oneLine:"一个普通韩国家庭在琐碎日常与突发变故中，品味着生活的苦涩与甘甜。",summary:"影片聚焦生活在首尔的一个普通大家庭。父亲经营着一家年糕店，母亲是家庭主妇，他们有两个性格迥异的儿子：大儿子梦想成为电影导演却屡屡受挫，小儿子面临高考压力。故事围绕家人的日常生活展开，既有为琐事争吵的烟火气，也有彼此默默支持的温情。当母亲被诊断出患有重病，这个家庭看似平静的生活被打破。在陪伴母亲治疗的日子里，家庭成员们开始重新审视彼此的关系和生活的真谛，在泪水中学会了更用力地去爱和珍惜，感悟到即便平凡，人生也因这些情感联结而变得美丽。",review:"叙事平淡中见深刻，人物塑造鲜活立体，宛如我们身边的邻居。电影对家庭情感的刻画细腻入微，笑中带泪，充满了生活哲学，后劲十足。",cover:"/129.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0065","0088","0052","0076","0049","0095"]}
,{
id:"0129",title:"父爱折线图",region:"国产",type:"电影",year:"2021",genreRaw:"家庭 / 剧情 / 成长",tags:["国产","电影","家庭","剧情","成长","父子","感人"],oneLine:"沉默的父亲用三十年日记中的股市折线图，隐秘记录儿子成长的悲欢喜乐。",summary:"程序员李哲在整理父亲遗物时，发现了一本持续三十年的奇怪日记。里面没有文字，只有每日绘制的、起伏不定的股市折线图。起初他以为这是父亲的投资记录，但在母亲提示下，他尝试将图表日期与自己的人生轨迹对应——图表每次剧烈下跌，都对应着他儿时生病、高考失利、创业失败等低谷；而每次缓慢爬升或峰值，则对应他获奖、结婚、生子等快乐时刻。原来，沉默寡言、一生平凡的父亲，将无法言说的关爱与担忧，全部融入了这看似冰冷的曲线之中。李哲面对这幅漫长的“父爱折线图”，泪流满面，终于读懂了那份深藏不露的如山父爱。",review:"设定新颖巧妙，将抽象的父爱转化为具象的视觉符号，极具创意。情感铺垫层层递进，最后的揭示感人至深，是一部关于理解与传承的诚意之作。",cover:"/130.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0080","0100","0058","0069","0094","0096"]}
,{
id:"0130",title:"国家地理：大白鲨的长途冒险旅程",region:"欧美",type:"电影",year:"2019",genreRaw:"纪录片 / 冒险 / 自然",tags:["欧美","电影","纪录片","自然","冒险","海洋","野生动物"],oneLine:"追踪一头雌性大白鲨“深蓝”跨越海洋的万里迁徙，揭开顶级掠食者的生存史诗。",summary:"本片采用最先进的拍摄技术，历时数年跟踪一头被科学家命名为“深蓝”的雌性大白鲨。镜头跟随它从墨西哥瓜达卢普岛出发，穿越浩瀚的太平洋，途中历经风暴、寻找猎物、躲避虎鲸群、与同类竞争，最终抵达遥远的夏威夷海域繁殖。影片不仅展示了“深蓝”令人震撼的捕食画面和生存智慧，更通过其漫长的旅程，揭示了海洋生态系统的微妙平衡与当前面临的威胁。这是一次对大自然最神秘生物之一的深度探索，也是一曲献给海洋生命的敬畏赞歌。",review:"摄影技术登峰造极，水下画面壮丽且极具冲击力。叙事节奏如海洋般深邃有力，科学性与故事性完美结合，彻底改变了人们对大白鲨的恐怖片刻板印象。",cover:"/131.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0046","0042","0021","0086","0006","0028"]}
,{
id:"0131",title:"话梦光影",region:"国产",type:"电影",year:"2024",genreRaw:"奇幻 / 剧情 / 爱情",tags:["国产","电影","奇幻","剧情","爱情","梦境","治愈"],oneLine:"一位能进入他人梦境修复心理创伤的“话梦师”，却在自己的梦里迷失了方向。",summary:"林夕拥有一种特殊能力，可以通过对话进入他人的梦境，帮助客户疏导心结、修复心理创伤，人称“话梦师”。她成功帮助了无数人，却始终无法解开自己反复出现的童年梦魇。直到她受雇于一位始终无法梦见已故妻子的孤独老人。在老人复杂而悲伤的梦境迷宫中，林夕不仅找到了治愈老人的关键，更意外发现了连接自己过去记忆的线索。两条梦境线索交织，林夕必须在治愈他人的同时，勇敢直面自己内心最深处的伤痛，在光影交错的梦境世界中，完成自我救赎。",review:"设定充满诗意与想象力，梦境场景的视觉呈现瑰丽奇幻。故事内核温暖治愈，探讨了记忆、失去与和解，情感层次丰富，观影体验如一场沉浸式的心灵按摩。",cover:"/132.jpg",m3u8Index:10,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8",relatedIds:["0085","0009","0016","0073","0042","0017"]}
,{
id:"0132",title:"窃天书之无头将军",region:"国产",type:"电影",year:"2023",genreRaw:"动作 / 奇幻 / 古装",tags:["国产","电影","动作","奇幻","古装","武侠","志怪"],oneLine:"江湖神偷为盗取传说中的“天书”，被迫与守护古墓的千年无头将军并肩作战。",summary:"天下第一神偷燕七接到一桩神秘委托：盗取藏于前朝皇陵中的上古“天书”。皇陵机关重重，更有传说中的无头将军怨灵守护。燕七凭借高超技艺潜入地宫，却在触动核心机关时，意外唤醒了沉睡的将军亡魂。出乎意料的是，将军并未攻击他，反而因燕七佩戴的祖传玉佩，将他认作故人之后。原来，将军当年含冤战死，头颅被封印于天书之中。为寻回头颅、平息怨气、揭露历史真相，这对跨越千年的奇特组合达成交易：燕七助将军取回头颅，将军助他取得天书。两人一路对抗其他觊觎天书的势力，逐渐揭开一桩涉及王朝更迭的惊天阴谋。",review:"将盗墓、武侠、志怪元素巧妙融合，动作戏设计凌厉且充满东方奇幻色彩。双男主的互动有趣，剧情反转出人意料，娱乐性十足。",cover:"/133.jpg",m3u8Index:11,m3u8Url:"https://test-streams.mux.dev/dai-discontinuity-deltatre/manifest.m3u8",relatedIds:["0042","0085","0025","0081","0058","0031"]}
,{
id:"0133",title:"东北合伙人",region:"国产",type:"电影",year:"2021",genreRaw:"喜剧 / 剧情 / 励志",tags:["国产","电影","喜剧","剧情","励志","东北","创业"],oneLine:"三个东北发小凑钱搞直播卖农产品，状况百出中演绎最接地气的热血创业故事。",summary:"在东北某小镇，王大强、李斌、赵小亮这三个从小玩到大的兄弟，都面临着人生困境：下岗、欠债、梦想受挫。一次酒酣耳热后，他们决定抓住直播风口，合伙创业卖家乡的优质农产品。三人凭着东北人自带的幽默感，把直播间搞得热热闹闹，却也因此闹出不少笑话和麻烦：货品发错、遭遇黑心供应商、内部产生分歧。在笑泪交加中，他们凭借真诚和韧劲，一步步摸索，不仅把黑土地上的玉米、榛子卖向了全国，更在创业过程中重新找回了兄弟情谊和自我价值，成了真正的“东北合伙人”。",review:"喜剧效果自然生动，充满浓厚的东北地域特色和生活气息。人物塑造真实可爱，创业过程的艰辛与欢乐描绘得极其接地气，感人又励志。",cover:"/134.jpg",m3u8Index:12,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/adv_dv_atmos/main.m3u8",relatedIds:["0049","0034","0021","0024","0053","0051"]}
,{
id:"0134",title:"命运航班第一季",region:"欧美",type:"电影",year:"2018",genreRaw:"科幻 / 悬疑 / 剧情",tags:["欧美","电影","科幻","悬疑","剧情","超自然","神秘"],oneLine:"一架失踪五年的航班突然回归，乘客们容颜未老，却各自拥有了预知未来的碎片能力。",summary:"蒙特哥航空828号航班在经历一场剧烈颠簸后安全降落，但机组人员和乘客却震惊地得知，他们在空中消失已达五年之久，早已被推定遇难。更离奇的是，他们本人丝毫没有感知到时间的流逝，容颜也停留在五年前。随着生活试图回归“正常”，部分乘客开始听到神秘的声音，并闪现关于未来的破碎影像。机械师迈克·斯通发现自己能预见灾难，空姐姐姐格雷丝则能看到他人的生命倒计时。他们必须学会运用这些“天赋”，在政府调查、公众猜疑和个人生活分崩离析的压力下，揭开航班失踪背后的超自然真相，并应对随之而来的命运挑战。",review:"科幻设定引人入胜，悬疑氛围营造出色。角色群像刻画深入，每个人物在获得能力后的不同选择与道德困境，极大地增强了剧情的戏剧张力和思考深度。",cover:"/135.jpg",m3u8Index:13,m3u8Url:"https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",relatedIds:["0047","0083","0018","0096","0013","0012"]}
,{
id:"0135",title:"津门奇案之开枪",region:"国产",type:"电影",year:"2022",genreRaw:"动作 / 悬疑 / 犯罪",tags:["国产","电影","动作","悬疑","犯罪","警匪","民国"],oneLine:"民国天津卫，一桩离奇枪击案牵扯出走私大网，神探师徒在迷雾中追寻致命真相。",summary:"民国年间，天津卫法租界发生一起离奇命案，死者为洋行买办，现场证据直指一名落魄拳师。刚正不阿的警探陈九带着从英国留学归来的徒弟苏文，奉命调查。案发现场唯一的物证是一枚特制的子弹壳，追查下去，竟牵扯到涉及多国势力的军火走私网络。陈九凭借老到的江湖经验摸查，苏文则利用先进的法医和推理技术分析，师徒二人互补，在各方势力的阻挠下周旋。随着调查深入，他们发现枪击案背后隐藏着更大的阴谋，而那颗子弹，竟是开启一切的关键钥匙。最终，师徒在码头仓库与真凶展开生死对决。",review:"民国天津的市井气息还原到位，动作场面干脆利落。师徒探案模式新颖，中西推理方法的碰撞颇有看点，案件层层递进，结局反转合理。",cover:"/136.jpg",m3u8Index:14,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0014","0076","0058","0083","0022","0066"]}
,{
id:"0136",title:"格洛丽亚在路上",region:"欧美",type:"电影",year:"2020",genreRaw:"传记 / 剧情 / 公路",tags:["欧美","电影","传记","剧情","公路","女性","平权"],oneLine:"年近六十的家庭主妇格洛丽亚独自驾车穿越美国，在旅程中重新发现自我与力量。",summary:"影片改编自真实故事。2015年，59岁的格洛丽亚在经历丧偶、儿女离家后，感到生活陷入停滞。某天，她毅然决定离开熟悉的康涅狄格州小镇，独自驾驶一辆二手房车，开始一场漫无目的的环美旅行。一路上，她遇到了形形色色的人：热情的流浪艺术家、面临困境的年轻母亲、隐居的老兵。她从起初的忐忑不安，逐渐变得自信开朗，用博客记录旅途见闻，意外吸引了许多关注。旅程不仅是地理上的移动，更是她打破年龄与性别桎梏、重新连接世界、寻找生命第二篇章的心灵之旅。当她最终站在西海岸的悬崖边，心中已充满前所未有的自由与力量。",review:"表演细腻动人，完美诠释了女性内心的坚韧与转变。公路风景壮美，与主人公的心境变化相得益彰。故事平静却有力量，是一部献给所有年龄女性的颂歌。",cover:"/137.jpg",m3u8Index:15,m3u8Url:"https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8",relatedIds:["0006","0094","0079","0045","0066","0016"]}
,{
id:"0137",title:"樱桃小丸子动画25周年纪念特别篇 携手同游~苦乐交织的美味特辑",region:"日韩",type:"电影",year:"2015",genreRaw:"动画 / 家庭 / 喜剧",tags:["日韩","电影","动画","家庭","喜剧","童年","温馨"],oneLine:"小丸子全家参加电视台的亲子旅行比赛，一路品尝美食也遭遇囧事，感悟家庭之爱。",summary:"为庆祝动画开播25周年，樱桃子一家幸运地被抽中参加一档“亲子美食之旅”电视节目。他们将与另外两组家庭竞赛，前往日本三个不同的城市，完成与当地特色美食相关的任务。小丸子一家既兴奋又紧张，爷爷友藏总想展示俳句才华闹出笑话，爸爸宏志的懒散性格常拖后腿，姐姐杏子则时刻注意形象。在北海道的海鲜市场、京都的和果子老铺、大阪的章鱼烧摊前，他们经历了找错食材、烹饪失败、迷路等种种“苦难”，但也在相互扶持、共同品尝美味的过程中，收获了比奖品更珍贵的欢笑与回忆。最终，他们明白了，最好的“美味”就是家人在一起的时光。",review:"完美的周年纪念作品，忠实保留了原作的温馨幽默基调。美食与旅行的结合引人入胜，家族成员间的互动笑点满满，充满怀旧感与治愈力。",cover:"/138.jpg",m3u8Index:16,m3u8Url:"https://test-streams.mux.dev/test_001/stream.m3u8",relatedIds:["0070","0026","0018","0043","0015","0087"]}
,{
id:"0138",title:"灯泡之战",region:"欧美",type:"电影",year:"2021",genreRaw:"喜剧 / 科幻 / 动画",tags:["欧美","电影","喜剧","科幻","动画","拟人","脑洞"],oneLine:"台灯沃特与吊灯卢米为了争夺“房间最佳光源”的称号，展开了一场爆笑智能家电内战。",summary:"在一间普通的家庭办公室里，自诩为“照明之王”的复古吊灯卢米，与新兴的智能LED台灯沃特关系紧张。当主人宣布将根据效率选出“房间最佳光源”并给予升级奖励后，一场全面的“灯泡之战”爆发了。两位主角各自拉拢盟友：卢米联合了老派的风扇、收音机；沃特则吸引了蓝牙音箱、智能插座等新潮设备。他们利用各自的功能互相搞破坏：卢米制造闪烁干扰沃特的阅读模式，沃特则用编程让卢米短路。这场争斗愈演愈烈，直到一次意外导致全屋断电，所有电器陷入黑暗与恐慌。最终，沃特和卢米不得不合作，才能让房间重获光明，也明白了共存的真谛。",review:"创意天马行空，将日常物品拟人化得活灵活现，充满童趣与想象力。喜剧节奏明快，冲突设计巧妙，在欢乐之余也暗喻了传统与现代的融合话题。",cover:"/139.jpg",m3u8Index:17,m3u8Url:"https://streaming-pmd.akamaized.net/hls/live/2020923/test/master.m3u8",relatedIds:["0075","0077","0048","0007","0099","0064"]}
,{
id:"0139",title:"古惑仔3之只手遮天",region:"国产",type:"电影",year:"1996",genreRaw:"动作 / 犯罪 / 剧情",tags:["国产","电影","动作","犯罪","剧情","黑帮","兄弟情"],oneLine:"陈浩南遭大哥陷害，兄弟反目，在腥风血雨中为情义与尊严背水一战。",summary:"洪兴社陈浩南深得器重，却引来同门大哥“笑面虎”的嫉妒和陷害。笑面虎勾结东星帮，设下毒计，令浩南误杀重要元老，背上叛徒之名，遭全港追杀。原本亲如手足的山鸡、大天二等人也因误解与浩南产生隔阂。浩南流落街头，身负重伤，唯有女友小结巴不离不弃。在查明真相、收集证据的过程中，浩南经历了兄弟的背叛与牺牲，也认清了江湖的残酷。最终，在澳门回归前夕的动荡背景下，浩南召集愿相信他的兄弟，与笑面虎和东星帮在码头展开终极对决，以鲜血洗刷冤屈，重拾“只手遮天”的豪情与悲凉。",review:"系列中情感冲突最激烈的一部，兄弟情义的刻画深入人心。剧情紧凑，打斗场面写实血腥，将江湖的无奈与男人的担当展现得淋漓尽致，时代感强烈。",cover:"/140.jpg",m3u8Index:18,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/no-handler-origin/tears-of-steel/tears-of-steel.mp4/.m3u8",relatedIds:["0079","0049","0042","0093","0064","0048"]}
,{
id:"0140",title:"围剿",region:"国产",type:"电影",year:"2023",genreRaw:"动作 / 战争 / 历史",tags:["国产","电影","动作","战争","历史","狙击","军事"],oneLine:"抗战时期，一名八路军神枪手为护送情报，在孤立小镇与日军精英狙击队周旋到底。",summary:"1944年，华北某地。八路军王牌狙击手杨卫国奉命护送一份关于日军化学武器据点的重要情报前往根据地。途中遭遇日军扫荡，他被迫躲进一座刚被战火摧残、百姓几近逃离的空镇“白石镇”。日军指挥官山田得知情报落入此地，派出麾下精锐的狙击小队进镇搜捕，意图将杨卫国和情报一并“围剿”。杨卫国利用对地形的熟悉和超凡的狙击技术，与敌人在断壁残垣间展开一场猫鼠游戏。他不仅要面对多名顶尖狙击手的猎杀，还要保护意外遇到的留守老人和孩童。每一枪都关乎生死，每一刻都在考验他的意志与智慧。",review:"战争场面真实残酷，狙击对决的战术细节考究，心理博弈紧张刺激。主角的孤胆英雄形象塑造扎实，家国情怀与个人生存本能交织，极具感染力。",cover:"/141.jpg",m3u8Index:19,m3u8Url:"https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8",relatedIds:["0004","0078","0007","0087","0032","0021"]}
,{
id:"0141",title:"谢邀，人在西游种田长生",region:"国产",type:"电影",year:"2024",genreRaw:"喜剧 / 奇幻 / 穿越",tags:["国产","电影","喜剧","奇幻","穿越","种田","反套路"],oneLine:"现代农学生穿越成西游土地公，靠科学种田和骚操作，在神魔世界佛系养老。",summary:"农业博士生林凡加班猝死，魂穿到西游世界，成了五行山下的一名小小土地公。系统任务竟是让他“种田长生”？面对满天神佛和妖魔鬼怪，林凡决定苟住发育。他用现代知识改良仙壤，种出富含灵气的“杂交灵稻”；用滴灌技术打理蟠桃园外围，产量翻倍引得七仙女点赞；甚至搞起了“天庭农家乐”，向神仙兜售自酿的“功德啤酒”。本想安稳种田，却总被卷入麻烦：帮孙悟空改良花果山果树，教猪八戒科学养猪，给唐僧团队提供“自热紫金钵盂”……林凡用一套科学的“种田流”操作，在光怪陆离的西游世界，开辟了一条另类的长生逍遥路。",review:"穿越与种田文的巧妙结合，喜剧风格清奇，反套路设定令人捧腹。将现代科技与古典神话碰撞，产生了无数妙趣横生的火花，解压又好玩。",cover:"/142.jpg",m3u8Index:0,m3u8Url:"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",relatedIds:["0048","0005","0037","0090","0039","0004"]}
,{
id:"0142",title:"顽皮后卡比",region:"欧美",type:"电影",year:"2023",genreRaw:"喜剧 / 家庭 / 动画",tags:["欧美","电影","喜剧","家庭","动画","宠物","冒险"],oneLine:"一只拥有“复制”超能力的粉色外星生物，在地球家庭中引发了一系列爆笑混乱。",summary:"来自波波星的粉色神秘生物卡比，意外坠落地球郊区，被善良但粗心的男孩汤姆捡回家。卡比拥有吞下物体并复制其特性的可爱能力，但这给汤姆一家带来了大麻烦：它吞下吸尘器变成“狂暴吸尘器”打扫到邻居家，复制电视遥控器导致全城信号混乱，甚至变成沙发让爸爸一屁股坐空。与此同时，追捕卡比的波波星执法官和觊觎其能力的神秘商人也在接近。汤姆必须教会卡比控制能力，并在一系列令人啼笑皆非的冒险中，保护这个天真又顽皮的新朋友，同时阻止坏人的阴谋。",review:"动画形象可爱至极，喜剧节奏快速密集，家庭互动温馨有趣。卡比的各种变形创意十足，适合全家观看，充满了纯真的欢乐与想象力。",cover:"/143.jpg",m3u8Index:1,m3u8Url:"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",relatedIds:["0075","0072","0055","0047","0084","0043"]}
,{
id:"0143",title:"一位母亲的心事",region:"日韩",type:"电影",year:"2016",genreRaw:"剧情 / 家庭",tags:["日韩","电影","剧情","家庭","母亲","亲情","细腻"],oneLine:"寡居母亲在女儿出嫁前，独自整理旧物，回忆翻涌，深藏的心事逐渐浮出水面。",summary:"寡居多年的母亲福子，在独生女妍秀婚礼前一周，开始默默整理家中旧物。每一件物品都承载着记忆：女儿儿时的玩具、亡夫留下的旧手表、一家三口的合影……在宁静的整理时光中，福子的心事如潮水般涌现。她回忆着抚养女儿的艰辛与快乐，思念着早逝的丈夫，同时也为女儿即将离开组建新家庭而感到欣慰与不舍，夹杂着一丝难以言说的孤独。影片没有强烈的戏剧冲突，只有福子日常的买菜、做饭、与老友通话，以及那些欲言又止的瞬间。直到婚礼当天，福子为女儿穿上韩服，将所有未说出口的爱与祝福，化作一个深深的笑容和紧紧握手的温暖。",review:"影片风格沉静含蓄，如一篇优美的散文。对母亲心理的刻画细腻到极致，于无声处听惊雷。演员表演内敛而富有力量，能轻易触动每一位观众内心最柔软的部分。",cover:"/144.jpg",m3u8Index:2,m3u8Url:"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",relatedIds:["0046","0041","0053","0070","0050","0056"]}
,{
id:"0144",title:"浪矢解忧杂货店",region:"日韩",type:"电影",year:"2017",genreRaw:"奇幻 / 剧情 / 治愈",tags:["日韩","电影","奇幻","剧情","治愈","人生","穿越"],oneLine:"三个小偷躲进废弃杂货店，竟能收到来自过去的烦恼咨询信，并回信改变他人人生。",summary:"改编自东野圭吾同名小说。翔太、敦也、幸平三个少年犯为躲避追捕，闯进一家废弃的“浪矢杂货店”。神奇的是，他们发现从当晚开始，杂货店的信箱会收到来自过去的咨询信：有在奥运与重病恋人间挣扎的运动员，有不知是否该跟随父母连夜逃亡的孩童，有在音乐梦想与家族责任间徘徊的青年……起初他们只是随意回复，却逐渐发现，自己的信件竟能真的影响过去那些人的人生轨迹。在帮助他人的过程中，他们也窥见了这家杂货店主人浪矢爷爷的往事，并开始反思自己的过去与未来，最终完成了对自我的救赎。",review:"改编忠实于原著精髓，时空交错的叙事结构巧妙而严谨。故事温暖治愈，每个咨询案例都直击人心，传递出跨越时空的善意与力量。",cover:"/145.jpg",m3u8Index:3,m3u8Url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",relatedIds:["0054","0067","0074","0100","0010","0079"]}
,{
id:"0145",title:"我在洪荒写日记",region:"国产",type:"电影",year:"2024",genreRaw:"喜剧 / 奇幻 / 仙侠",tags:["国产","电影","喜剧","奇幻","仙侠","穿越","日记"],oneLine:"穿越成洪荒小妖，靠写日记就能变强，结果日记被大佬们围观，洪荒画风突变。",summary:"社畜林夜穿越到凶险的洪荒世界，成了女娲造出的第一批小妖之一，弱不禁风。绝望之际激活“大道日记系统”，只要写日记记录见闻就能获得奖励。于是，林夜开始疯狂记录：《今天看到盘古大神开天辟地，腰真好》、《听道祖鸿钧讲课，有点困》、《围观三清吵架，像小学生》……他靠着日记奖励修为飙升。然而某天，他丢了一本日记。不久后，整个洪荒的大能们心态都崩了：元始天尊怒斥“谁说我们像小学生？”，女娲娘娘好奇“我的捏土手法真的不时尚吗？”，连道祖鸿钧都开始注意讲课的趣味性。林夜在毫不知情的情况下，用日记本搅动了整个洪荒。",review:"将现代吐槽文化与洪荒神话结合，产生了极其爆笑的化学反应。设定新颖，剧情轻松幽默，各种神魔的“反差萌”塑造令人印象深刻。",cover:"/146.jpg",m3u8Index:4,m3u8Url:"https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8",relatedIds:["0093","0065","0032","0058","0051","0080"]}
,{
id:"0146",title:"谁来陪伴我",region:"国产",type:"电影",year:"2022",genreRaw:"剧情 / 家庭 / 儿童",tags:["国产","电影","剧情","家庭","儿童","孤独","成长"],oneLine:"城市留守儿童小宇与一位退休的京剧武生，在暑假建立了一段跨越年龄的忘年交。",summary:"八岁男孩李小宇父母常年在外打工，他跟着奶奶住在老旧小区。暑假来临，朋友们纷纷被接走，小宇愈发孤单。一天，他偶然结识了住在隔壁单元、脾气古怪的独居老人老周。老周曾是京剧团的武生，如今腿脚不便，终日郁郁寡欢。一老一少从最初的互不搭理，到因为一只流浪猫、一次停电而逐渐走近。小宇对老周讲述的京剧故事和比划的招式充满好奇，老周则在小宇的陪伴下，重拾了对生活的热情。他们一起照顾小猫，排练简单的京剧动作，分享彼此的秘密。暑假结束前，小宇的父母终于回家，而老周也在社区活动中，为居民们献上了一场久违的表演。",review:"影片情感真挚朴素，对儿童孤独心理和老人晚年寂寥的刻画细腻入微。老少互动自然温暖，没有刻意煽情，却在细微处打动人心，充满人文关怀。",cover:"/147.jpg",m3u8Index:5,m3u8Url:"https://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",relatedIds:["0095","0076","0014","0049","0051","0056"]}
,{
id:"0147",title:"诗歌天使",region:"欧美",type:"电影",year:"2014",genreRaw:"剧情 / 音乐 / 奇幻",tags:["欧美","电影","剧情","音乐","奇幻","诗歌","治愈"],oneLine:"一个能用诗歌治愈他人心灵创伤的流浪女孩，她的能力背后隐藏着悲伤的往事。",summary:"在现代都市的角落，流浪女孩艾拉拥有一种奇特的天赋：她朗诵或书写出的诗歌，能直接作用于听众的心灵，抚平他们的焦虑、悲伤或创伤。她隐姓埋名，用这种方式默默帮助着遭遇困境的人们——失眠的护士、失去信心的作家、争吵的夫妻。儿童心理学家大卫注意到了艾拉，既被她的能力吸引，也担心她的来历。随着接触加深，大卫发现了艾拉能力的源头：与她早夭的双胞胎姐姐有关，诗歌是她们之间唯一的连接。当艾拉的过去即将被曝光，她必须选择是继续隐藏，还是用这份天赋，彻底治愈自己心中最大的伤口。",review:"影片充满诗意与魔幻现实主义色彩，诗歌与剧情的结合浑然天成。主题关于疗愈与失去，意境优美，情感深沉，宛如一首动人的视觉诗歌。",cover:"/148.jpg",m3u8Index:6,m3u8Url:"https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8",relatedIds:["0007","0015","0088","0029","0093","0084"]}
,{
id:"0148",title:"里根",region:"欧美",type:"电影",year:"2023",genreRaw:"传记 / 剧情 / 历史",tags:["欧美","电影","传记","剧情","历史","政治","人物"],oneLine:"从好莱坞演员到美国总统，回顾罗纳德·里根充满争议与传奇色彩的一生。",summary:"影片聚焦美国第40任总统罗纳德·里根的人生历程。从他早年在爱荷华州的平凡出身，到好莱坞黄金时代的二线演员生涯，再到投身政坛，先后担任加州州长并最终入主白宫。电影不仅展现了他作为“伟大的沟通者”在冷战末期与苏联领导人戈尔巴乔夫的斡旋、经济政策的推行、以及遭遇刺杀等重大历史时刻，也深入描绘了他的个人生活：与第一任妻子简·怀曼的婚姻，与南希·戴维斯的深厚感情，以及与子女复杂的关系。影片试图平衡地呈现一个多面的里根：乐观的保守主义旗手、坚定的反共人士、同时也是充满争议的政策的推动者。",review:"制作精良，时代背景还原度极高。主演的表演形神兼备，成功捕捉了里根的个人魅力与复杂性。剧本对历史事件的选取和解读谨慎，引发了观众的思考与讨论。",cover:"/149.jpg",m3u8Index:7,m3u8Url:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",relatedIds:["0053","0032","0058","0005","0039","0091"]}
,{
id:"0149",title:"混蛋2013",region:"欧美",type:"电影",year:"2013",genreRaw:"剧情 / 喜剧",tags:["欧美","电影","剧情","喜剧","青春","成长","友谊"],oneLine:"三个高中死党在毕业前最后一个夏天，决心完成一份荒唐的“混蛋行为清单”。",summary:"2013年夏天，即将各奔东西的高中好友艾丹、迈尔斯和库珀，觉得自己过去的人生太过“规矩”。于是，他们列出了一份“混蛋行为清单”，旨在毕业前疯狂一把。清单上写着：在校长汽车上涂鸦、混进高级派对、对讨厌的老师恶作剧、向暗恋对象大胆表白等等。三人开始逐一实施，过程中笑料百出，也惹了不少麻烦。然而，在这些看似幼稚胡闹的行为背后，隐藏着他们对未来迷茫的宣泄、对纯真时代的不舍，以及对彼此友谊的珍视。随着夏天结束，他们完成了清单，也在这个过程中，以自己独特的方式告别了青春，懵懂地走向成年。",review:"典型的青春喜剧，笑点密集且自然，充满了美式校园的鲜活气息。在胡闹的外壳下，包裹着关于友谊、成长与告别的真挚内核，能引起广泛共鸣。",cover:"/150.jpg",m3u8Index:8,m3u8Url:"https://stream.mux.com/v69RSHhFelSm4701snP22dYz2jICy4E4FUyk02rW4gxRM.m3u8",relatedIds:["0022","0021","0059","0006","0064","0055"]}
,{
id:"0150",title:"原子危机",region:"欧美",type:"电影",year:"2019",genreRaw:"科幻 / 惊悚 / 剧情",tags:["欧美","电影","科幻","惊悚","剧情","核危机","人性"],oneLine:"核电站发生严重事故，一名工程师必须在外界误解与内部恐慌中，阻止核心熔毁。",summary:"美国中西部一座老旧的核电站“雅典娜”，因地震引发一系列连锁故障，面临堆芯熔毁的 catastrophic 风险。值班的首席工程师艾琳·诺维克是现场少数保持冷静的人。她深知事态严重性，必须争分夺秒启动应急预案，冷却反应堆。然而，沟通中断、政府官员的官僚作风、媒体的恐慌性报道以及部分工人企图私自逃离，让危机处理变得异常艰难。艾琳不仅要与技术故障搏斗，更要与内外的人性弱点抗衡。在辐射量不断上升的极限环境下，她凭借过硬的专业知识和强大的心理素质，带领一支临时组建的小队，深入辐射区进行手动操作，上演了一场关乎千万人生命的生死时速。",review:"影片节奏紧张得令人窒息，对核事故的技术细节描绘真实，营造出极强的沉浸式恐慌感。女主角的塑造",cover:"/151.jpg",m3u8Index:9,m3u8Url:"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",relatedIds:["0066","0022","0007","0087","0094","0028"]}
];
function ix({
onVideoClick:s,onNavigate:e}
){
const[t,i]=Re.useState(0),n=mc.filter(l=>l.region==="日韩"),r=Re.useMemo(()=>{
const l=new Set,c=Om(n),d=Oo(c,5,l),h=Oo(c,1,l),f=sx(n,8,l),m=eu(n,"日剧").slice(0,6),p=eu(n,"韩剧").slice(0,6),E=tx(n,8,l),v=Oo(c,4,l);
return{
heroVideos:d,featuredVideos:h,hotVideos:f,japanDramas:m,koreaDramas:p,recentVideos:E,collectionVideos:v}
}
,[]);
Re.useEffect(()=>{
const l=setInterval(()=>{
i(c=>(c+1)%r.heroVideos.length)}
,5e3);
return()=>clearInterval(l)}
,[r.heroVideos.length]);
const a=()=>{
i(l=>(l+1)%r.heroVideos.length)}
,o=()=>{
i(l=>(l-1+r.heroVideos.length)%r.heroVideos.length)}
,u=r.heroVideos[t];
return g.jsxs("div",{
className:"min-h-screen bg-gradient-ruins",children:[g.jsxs("section",{
className:"relative h-[600px] overflow-hidden",children:[g.jsxs("div",{
className:"absolute inset-0",children:[g.jsx("img",{
src:Xs((u==null?void 0:u.cover)||""),alt:u==null?void 0:u.title,className:"w-full h-full object-cover"}
),g.jsx("div",{
className:"absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"}
)]}
),g.jsx("div",{
className:"relative h-full container-custom flex items-center",children:g.jsxs("div",{
className:"max-w-2xl text-white",children:[g.jsxs("div",{
className:"text-amber-400 text-sm font-semibold mb-4 flex items-center space-x-2",children:[g.jsx(Qr,{
className:"w-5 h-5 fill-current"}
),g.jsx("span",{
children:"今日精选"}
)]}
),g.jsx("h1",{
className:"text-5xl font-bold mb-4 leading-tight",children:u==null?void 0:u.title}
),g.jsx("p",{
className:"text-xl text-stone-200 mb-6 leading-relaxed",children:u==null?void 0:u.oneLine}
),g.jsxs("div",{
className:"flex items-center space-x-6 text-stone-300 mb-8",children:[g.jsxs("span",{
className:"flex items-center space-x-2",children:[g.jsx(os,{
className:"w-5 h-5"}
),g.jsx("span",{
children:u==null?void 0:u.region}
)]}
),g.jsxs("span",{
className:"flex items-center space-x-2",children:[g.jsx(ka,{
className:"w-5 h-5"}
),g.jsx("span",{
children:u==null?void 0:u.year}
)]}
)]}
),g.jsx("button",{
onClick:()=>u&&s(u.id),className:"btn-primary text-lg",children:"立即观看"}
)]}
)}
),g.jsx("button",{
onClick:o,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all","aria-label":"Previous",children:g.jsx(Cm,{
className:"w-6 h-6"}
)}
),g.jsx("button",{
onClick:a,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all","aria-label":"Next",children:g.jsx(Dm,{
className:"w-6 h-6"}
)}
),g.jsx("div",{
className:"absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2",children:r.heroVideos.map((l,c)=>g.jsx("button",{
onClick:()=>i(c),className:`w-3 h-3 rounded-full transition-all ${
c===t?"bg-amber-500 w-8":"bg-white/50"}
`,"aria-label":`Go to slide ${
c+1}
`}
,c))}
)]}
),r.featuredVideos.length>0&&g.jsxs("section",{
className:"container-custom py-16",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-8",children:[g.jsx(Qr,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"section-title mb-0",children:"编辑推荐"}
)]}
),g.jsx("div",{
className:"grid grid-cols-1 gap-8",children:r.featuredVideos.map(l=>g.jsx(Ln,{
video:l,onClick:()=>s(l.id),featured:!0}
,l.id))}
)]}
),g.jsxs("section",{
className:"container-custom py-16",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-8",children:[g.jsx(Qv,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"section-title mb-0",children:"热门推荐"}
)]}
),g.jsx("div",{
className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:r.hotVideos.map(l=>g.jsx(Ln,{
video:l,onClick:()=>s(l.id)}
,l.id))}
)]}
),r.japanDramas.length>0&&g.jsx("section",{
className:"bg-white py-16",children:g.jsxs("div",{
className:"container-custom",children:[g.jsxs("div",{
className:"flex items-center justify-between mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3",children:[g.jsx(os,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"section-title mb-0",children:"日剧专区"}
)]}
),g.jsx("button",{
onClick:()=>e("category",void 0,"日剧"),className:"text-amber-600 hover:text-amber-700 text-sm font-medium",children:"查看更多 →"}
)]}
),g.jsx("div",{
className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:r.japanDramas.map(l=>g.jsx(Ln,{
video:l,onClick:()=>s(l.id)}
,l.id))}
)]}
)}
),r.koreaDramas.length>0&&g.jsxs("section",{
className:"container-custom py-16",children:[g.jsxs("div",{
className:"flex items-center justify-between mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3",children:[g.jsx(os,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"section-title mb-0",children:"韩剧专区"}
)]}
),g.jsx("button",{
onClick:()=>e("category",void 0,"韩剧"),className:"text-amber-600 hover:text-amber-700 text-sm font-medium",children:"查看更多 →"}
)]}
),g.jsx("div",{
className:"grid grid-cols-2 lg:grid-cols-6 gap-4",children:r.koreaDramas.map(l=>g.jsx("div",{
onClick:()=>s(l.id),className:"cursor-pointer group",children:g.jsxs("div",{
className:"relative overflow-hidden rounded-lg",children:[g.jsx("img",{
src:Xs(l.cover),alt:l.title,className:"w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"}
),g.jsx("div",{
className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"}
),g.jsx("div",{
className:"absolute bottom-0 left-0 right-0 p-3",children:g.jsx("p",{
className:"text-white text-sm font-semibold line-clamp-2",children:l.title}
)}
)]}
)}
,l.id))}
)]}
),g.jsx("section",{
className:"bg-gradient-to-br from-stone-800 to-stone-900 text-white py-16",children:g.jsxs("div",{
className:"container-custom",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-8",children:[g.jsx(ka,{
className:"w-8 h-8 text-amber-400"}
),g.jsx("h2",{
className:"section-title mb-0 text-white",children:"最新收录"}
)]}
),g.jsx("div",{
className:"space-y-4",children:r.recentVideos.slice(0,5).map(l=>g.jsxs("div",{
onClick:()=>s(l.id),className:"flex items-center space-x-4 bg-white/10 hover:bg-white/20 rounded-lg p-4 cursor-pointer transition-all group",children:[g.jsx("img",{
src:Xs(l.cover),alt:l.title,className:"w-32 h-20 object-cover rounded group-hover:scale-105 transition-transform"}
),g.jsxs("div",{
className:"flex-1",children:[g.jsx("h3",{
className:"font-semibold text-lg mb-1 group-hover:text-amber-400 transition-colors",children:l.title}
),g.jsx("p",{
className:"text-stone-300 text-sm line-clamp-1",children:l.oneLine}
)]}
),g.jsx("div",{
className:"text-amber-400 text-sm",children:l.year}
)]}
,l.id))}
)]}
)}
),g.jsxs("section",{
className:"container-custom py-16",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-8",children:[g.jsx(Qr,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"section-title mb-0",children:"精选合集"}
)]}
),g.jsx("div",{
className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.collectionVideos.map(l=>g.jsxs("div",{
onClick:()=>s(l.id),className:"card card-hover cursor-pointer group flex overflow-hidden",children:[g.jsx("img",{
src:Xs(l.cover),alt:l.title,className:"w-1/2 object-cover group-hover:scale-110 transition-transform duration-500"}
),g.jsxs("div",{
className:"w-1/2 p-6 flex flex-col justify-center",children:[g.jsx("div",{
className:"text-amber-600 text-sm mb-2",children:l.type}
),g.jsx("h3",{
className:"text-xl font-bold text-stone-800 mb-3 group-hover:text-amber-600 transition-colors",children:l.title}
),g.jsx("p",{
className:"text-stone-600 text-sm line-clamp-3 mb-4",children:l.oneLine}
),g.jsxs("div",{
className:"text-stone-500 text-sm",children:[l.region," · ",l.year]}
)]}
)]}
,l.id))}
)]}
)]}
)}
const Mo=24;
function nx({
category:s,onVideoClick:e,onBack:t}
){
const[i,n]=Re.useState(1),r=Re.useMemo(()=>eu(mc,s),[s]),a=Math.ceil(r.length/Mo),o=(i-1)*Mo,u=o+Mo,l=r.slice(o,u),c=h=>{
n(h),window.scrollTo({
top:0,behavior:"smooth"}
)}
,d=()=>{
const h=[];
let m=Math.max(1,i-Math.floor(2.5)),p=Math.min(a,m+5-1);
p-m<4&&(m=Math.max(1,p-5+1));
for(let E=m;
E<=p;
E++)h.push(E);
return h}
;
return g.jsxs("div",{
className:"min-h-screen bg-gradient-ruins",children:[g.jsx("div",{
className:"bg-stone-800 text-white py-16",children:g.jsxs("div",{
className:"container-custom",children:[g.jsxs("button",{
onClick:t,className:"flex items-center space-x-2 text-stone-300 hover:text-white mb-6 transition-colors",children:[g.jsx(ir,{
className:"w-5 h-5"}
),g.jsx("span",{
children:"返回首页"}
)]}
),g.jsx("h1",{
className:"text-4xl font-bold mb-4",children:s}
),g.jsxs("p",{
className:"text-stone-300",children:["共找到 ",r.length," 部作品"]}
)]}
)}
),g.jsx("div",{
className:"container-custom py-16",children:l.length>0?g.jsxs(g.Fragment,{
children:[g.jsx("div",{
className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",children:l.map(h=>g.jsx(Ln,{
video:h,onClick:()=>e(h.id)}
,h.id))}
),a>1&&g.jsxs("div",{
className:"flex items-center justify-center space-x-2",children:[g.jsx("button",{
onClick:()=>c(i-1),disabled:i===1,className:"p-2 rounded-lg bg-white hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors","aria-label":"Previous page",children:g.jsx(Cm,{
className:"w-5 h-5"}
)}
),d().map(h=>g.jsx("button",{
onClick:()=>c(h),className:`px-4 py-2 rounded-lg transition-colors ${
h===i?"bg-amber-600 text-white":"bg-white hover:bg-stone-100"}
`,children:h}
,h)),g.jsx("button",{
onClick:()=>c(i+1),disabled:i===a,className:"p-2 rounded-lg bg-white hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors","aria-label":"Next page",children:g.jsx(Dm,{
className:"w-5 h-5"}
)}
)]}
)]}
):g.jsx("div",{
className:"text-center py-16",children:g.jsx("p",{
className:"text-stone-600 text-lg",children:"暂无相关内容"}
)}
)}
)]}
)}
const j=Number.isFinite||function(s){
return typeof s=="number"&&isFinite(s)}
,rx=Number.isSafeInteger||function(s){
return typeof s=="number"&&Math.abs(s)<=ax}
,ax=Number.MAX_SAFE_INTEGER||9007199254740991;
let Y=function(s){
return s.NETWORK_ERROR="networkError",s.MEDIA_ERROR="mediaError",s.KEY_SYSTEM_ERROR="keySystemError",s.MUX_ERROR="muxError",s.OTHER_ERROR="otherError",s}
({
}
),b=function(s){
return s.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",s.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",s.KEY_SYSTEM_NO_SESSION="keySystemNoSession",s.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",s.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",s.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",s.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",s.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",s.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",s.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",s.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR="keySystemDestroyMediaKeysError",s.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR="keySystemDestroyCloseSessionError",s.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR="keySystemDestroyRemoveSessionError",s.MANIFEST_LOAD_ERROR="manifestLoadError",s.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",s.MANIFEST_PARSING_ERROR="manifestParsingError",s.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",s.LEVEL_EMPTY_ERROR="levelEmptyError",s.LEVEL_LOAD_ERROR="levelLoadError",s.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",s.LEVEL_PARSING_ERROR="levelParsingError",s.LEVEL_SWITCH_ERROR="levelSwitchError",s.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",s.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",s.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",s.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",s.FRAG_LOAD_ERROR="fragLoadError",s.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",s.FRAG_DECRYPT_ERROR="fragDecryptError",s.FRAG_PARSING_ERROR="fragParsingError",s.FRAG_GAP="fragGap",s.REMUX_ALLOC_ERROR="remuxAllocError",s.KEY_LOAD_ERROR="keyLoadError",s.KEY_LOAD_TIMEOUT="keyLoadTimeOut",s.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",s.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",s.BUFFER_APPEND_ERROR="bufferAppendError",s.BUFFER_APPENDING_ERROR="bufferAppendingError",s.BUFFER_STALLED_ERROR="bufferStalledError",s.BUFFER_FULL_ERROR="bufferFullError",s.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",s.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",s.ASSET_LIST_LOAD_ERROR="assetListLoadError",s.ASSET_LIST_LOAD_TIMEOUT="assetListLoadTimeout",s.ASSET_LIST_PARSING_ERROR="assetListParsingError",s.INTERSTITIAL_ASSET_ITEM_ERROR="interstitialAssetItemError",s.INTERNAL_EXCEPTION="internalException",s.INTERNAL_ABORTED="aborted",s.ATTACH_MEDIA_ERROR="attachMediaError",s.UNKNOWN="unknown",s}
({
}
),x=function(s){
return s.MEDIA_ATTACHING="hlsMediaAttaching",s.MEDIA_ATTACHED="hlsMediaAttached",s.MEDIA_DETACHING="hlsMediaDetaching",s.MEDIA_DETACHED="hlsMediaDetached",s.MEDIA_ENDED="hlsMediaEnded",s.STALL_RESOLVED="hlsStallResolved",s.BUFFER_RESET="hlsBufferReset",s.BUFFER_CODECS="hlsBufferCodecs",s.BUFFER_CREATED="hlsBufferCreated",s.BUFFER_APPENDING="hlsBufferAppending",s.BUFFER_APPENDED="hlsBufferAppended",s.BUFFER_EOS="hlsBufferEos",s.BUFFERED_TO_END="hlsBufferedToEnd",s.BUFFER_FLUSHING="hlsBufferFlushing",s.BUFFER_FLUSHED="hlsBufferFlushed",s.MANIFEST_LOADING="hlsManifestLoading",s.MANIFEST_LOADED="hlsManifestLoaded",s.MANIFEST_PARSED="hlsManifestParsed",s.LEVEL_SWITCHING="hlsLevelSwitching",s.LEVEL_SWITCHED="hlsLevelSwitched",s.LEVEL_LOADING="hlsLevelLoading",s.LEVEL_LOADED="hlsLevelLoaded",s.LEVEL_UPDATED="hlsLevelUpdated",s.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",s.LEVELS_UPDATED="hlsLevelsUpdated",s.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",s.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",s.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",s.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",s.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",s.AUDIO_TRACK_UPDATED="hlsAudioTrackUpdated",s.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",s.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",s.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",s.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",s.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",s.SUBTITLE_TRACK_UPDATED="hlsSubtitleTrackUpdated",s.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",s.CUES_PARSED="hlsCuesParsed",s.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",s.INIT_PTS_FOUND="hlsInitPtsFound",s.FRAG_LOADING="hlsFragLoading",s.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",s.FRAG_LOADED="hlsFragLoaded",s.FRAG_DECRYPTED="hlsFragDecrypted",s.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",s.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",s.FRAG_PARSING_METADATA="hlsFragParsingMetadata",s.FRAG_PARSED="hlsFragParsed",s.FRAG_BUFFERED="hlsFragBuffered",s.FRAG_CHANGED="hlsFragChanged",s.FPS_DROP="hlsFpsDrop",s.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",s.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",s.ERROR="hlsError",s.DESTROYING="hlsDestroying",s.KEY_LOADING="hlsKeyLoading",s.KEY_LOADED="hlsKeyLoaded",s.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",s.BACK_BUFFER_REACHED="hlsBackBufferReached",s.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",s.ASSET_LIST_LOADING="hlsAssetListLoading",s.ASSET_LIST_LOADED="hlsAssetListLoaded",s.INTERSTITIALS_UPDATED="hlsInterstitialsUpdated",s.INTERSTITIALS_BUFFERED_TO_BOUNDARY="hlsInterstitialsBufferedToBoundary",s.INTERSTITIAL_ASSET_PLAYER_CREATED="hlsInterstitialAssetPlayerCreated",s.INTERSTITIAL_STARTED="hlsInterstitialStarted",s.INTERSTITIAL_ASSET_STARTED="hlsInterstitialAssetStarted",s.INTERSTITIAL_ASSET_ENDED="hlsInterstitialAssetEnded",s.INTERSTITIAL_ASSET_ERROR="hlsInterstitialAssetError",s.INTERSTITIAL_ENDED="hlsInterstitialEnded",s.INTERSTITIALS_PRIMARY_RESUMED="hlsInterstitialsPrimaryResumed",s.PLAYOUT_LIMIT_REACHED="hlsPlayoutLimitReached",s.EVENT_CUE_ENTER="hlsEventCueEnter",s}
({
}
);
var se={
MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"}
,H={
MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"}
;
class di{
constructor(e,t=0,i=0){
this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=i}
sample(e,t){
const i=Math.pow(this.alpha_,e);
this.estimate_=t*(1-i)+i*this.estimate_,this.totalWeight_+=e}
getTotalWeight(){
return this.totalWeight_}
getEstimate(){
if(this.alpha_){
const e=1-Math.pow(this.alpha_,this.totalWeight_);
if(e)return this.estimate_/e}
return this.estimate_}
}
class ox{
constructor(e,t,i,n=100){
this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=i,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new di(e),this.fast_=new di(t),this.defaultTTFB_=n,this.ttfb_=new di(e)}
update(e,t){
const{
slow_:i,fast_:n,ttfb_:r}
=this;
i.halfLife!==e&&(this.slow_=new di(e,i.getEstimate(),i.getTotalWeight())),n.halfLife!==t&&(this.fast_=new di(t,n.getEstimate(),n.getTotalWeight())),r.halfLife!==e&&(this.ttfb_=new di(e,r.getEstimate(),r.getTotalWeight()))}
sample(e,t){
e=Math.max(e,this.minDelayMs_);
const i=8*t,n=e/1e3,r=i/n;
this.fast_.sample(n,r),this.slow_.sample(n,r)}
sampleTTFB(e){
const t=e/1e3,i=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);
this.ttfb_.sample(i,Math.max(e,5))}
canEstimate(){
return this.fast_.getTotalWeight()>=this.minWeight_}
getEstimate(){
return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}
getEstimateTTFB(){
return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}
get defaultEstimate(){
return this.defaultEstimate_}
destroy(){
}
}
function lx(s,e,t){
return(e=cx(e))in s?Object.defineProperty(s,e,{
value:t,enumerable:!0,configurable:!0,writable:!0}
):s[e]=t,s}
function ue(){
return ue=Object.assign?Object.assign.bind():function(s){
for(var e=1;
e<arguments.length;
e++){
var t=arguments[e];
for(var i in t)({
}
).hasOwnProperty.call(t,i)&&(s[i]=t[i])}
return s}
,ue.apply(null,arguments)}
function eh(s,e){
var t=Object.keys(s);
if(Object.getOwnPropertySymbols){
var i=Object.getOwnPropertySymbols(s);
e&&(i=i.filter(function(n){
return Object.getOwnPropertyDescriptor(s,n).enumerable}
)),t.push.apply(t,i)}
return t}
function ae(s){
for(var e=1;
e<arguments.length;
e++){
var t=arguments[e]!=null?arguments[e]:{
}
;
e%2?eh(Object(t),!0).forEach(function(i){
lx(s,i,t[i])}
):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):eh(Object(t)).forEach(function(i){
Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))}
)}
return s}
function ux(s,e){
if(typeof s!="object"||!s)return s;
var t=s[Symbol.toPrimitive];
if(t!==void 0){
var i=t.call(s,e);
if(typeof i!="object")return i;
throw new TypeError("@@toPrimitive must return a primitive value.")}
return(e==="string"?String:Number)(s)}
function cx(s){
var e=ux(s,"string");
return typeof e=="symbol"?e:e+""}
class _t{
constructor(e,t){
this.trace=void 0,this.debug=void 0,this.log=void 0,this.warn=void 0,this.info=void 0,this.error=void 0;
const i=`[${
e}
]:`;
this.trace=vs,this.debug=t.debug.bind(null,i),this.log=t.log.bind(null,i),this.warn=t.warn.bind(null,i),this.info=t.info.bind(null,i),this.error=t.error.bind(null,i)}
}
const vs=function(){
}
,dx={
trace:vs,debug:vs,log:vs,warn:vs,info:vs,error:vs}
;
function tu(){
return ue({
}
,dx)}
function hx(s,e){
const t=self.console[s];
return t?t.bind(self.console,`${
e?"["+e+"] ":""}
[${
s}
] >`):vs}
function th(s,e,t){
return e[s]?e[s].bind(e):hx(s,t)}
const su=tu();
function fx(s,e,t){
const i=tu();
if(typeof console=="object"&&s===!0||typeof s=="object"){
const n=["debug","log","info","warn","error"];
n.forEach(r=>{
i[r]=th(r,s,t)}
);
try{
i.log(`Debug logs enabled for "${
e}
" in hls.js version 1.6.15`)}
catch{
return tu()}
n.forEach(r=>{
su[r]=th(r,s)}
)}
else ue(su,i);
return i}
const oe=su;
function Os(s=!0){
return typeof self>"u"?void 0:(s||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}
function mx(s){
return typeof self<"u"&&s===self.ManagedMediaSource}
function Mm(s,e){
const t=Object.keys(s),i=Object.keys(e),n=t.length,r=i.length;
return!n||!r||n===r&&!t.some(a=>i.indexOf(a)===-1)}
function mt(s,e=!1){
if(typeof TextDecoder<"u"){
const l=new TextDecoder("utf-8").decode(s);
if(e){
const c=l.indexOf("\0");
return c!==-1?l.substring(0,c):l}
return l.replace(/\0/g,"")}
const t=s.length;
let i,n,r,a="",o=0;
for(;
o<t;
){
if(i=s[o++],i===0&&e)return a;
if(i===0||i===3)continue;
switch(i>>4){
case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(i);
break;
case 12:case 13:n=s[o++],a+=String.fromCharCode((i&31)<<6|n&63);
break;
case 14:n=s[o++],r=s[o++],a+=String.fromCharCode((i&15)<<12|(n&63)<<6|(r&63)<<0);
break}
}
return a}
function Be(s){
let e="";
for(let t=0;
t<s.length;
t++){
let i=s[t].toString(16);
i.length<2&&(i="0"+i),e+=i}
return e}
function Fm(s){
return Uint8Array.from(s.replace(/^0x/,"").replace(/([\da-fA-F]{
2}
) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}
function gx(s){
return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}
var Fo={
exports:{
}
}
,sh;
function px(){
return sh||(sh=1,function(s,e){
(function(t){
var i=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;
?#\/]*)?))\3((?:;
[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,n=/^(?=([^\/?#]*))\1([^]*)$/,r=/(?:\/|^)\.(?=\/)/g,a=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={
buildAbsoluteURL:function(u,l,c){
if(c=c||{
}
,u=u.trim(),l=l.trim(),!l){
if(!c.alwaysNormalize)return u;
var d=o.parseURL(u);
if(!d)throw new Error("Error trying to parse base URL.");
return d.path=o.normalizePath(d.path),o.buildURLFromParts(d)}
var h=o.parseURL(l);
if(!h)throw new Error("Error trying to parse relative URL.");
if(h.scheme)return c.alwaysNormalize?(h.path=o.normalizePath(h.path),o.buildURLFromParts(h)):l;
var f=o.parseURL(u);
if(!f)throw new Error("Error trying to parse base URL.");
if(!f.netLoc&&f.path&&f.path[0]!=="/"){
var m=n.exec(f.path);
f.netLoc=m[1],f.path=m[2]}
f.netLoc&&!f.path&&(f.path="/");
var p={
scheme:f.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment}
;
if(!h.netLoc&&(p.netLoc=f.netLoc,h.path[0]!=="/"))if(!h.path)p.path=f.path,h.params||(p.params=f.params,h.query||(p.query=f.query));
else{
var E=f.path,v=E.substring(0,E.lastIndexOf("/")+1)+h.path;
p.path=o.normalizePath(v)}
return p.path===null&&(p.path=c.alwaysNormalize?o.normalizePath(h.path):h.path),o.buildURLFromParts(p)}
,parseURL:function(u){
var l=i.exec(u);
return l?{
scheme:l[1]||"",netLoc:l[2]||"",path:l[3]||"",params:l[4]||"",query:l[5]||"",fragment:l[6]||""}
:null}
,normalizePath:function(u){
for(u=u.split("").reverse().join("").replace(r,"");
u.length!==(u=u.replace(a,"")).length;
);
return u.split("").reverse().join("")}
,buildURLFromParts:function(u){
return u.scheme+u.netLoc+u.path+u.params+u.query+u.fragment}
}
;
s.exports=o}
)()}
(Fo)),Fo.exports}
var gc=px();
class pc{
constructor(){
this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={
start:0,first:0,end:0}
,this.parsing={
start:0,end:0}
,this.buffering={
start:0,first:0,end:0}
}
}
var ce={
AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"}
;
class Um{
constructor(e){
this._byteRange=null,this._url=null,this._stats=null,this._streams=null,this.base=void 0,this.relurl=void 0,typeof e=="string"&&(e={
url:e}
),this.base=e,vx(this,"stats")}
setByteRange(e,t){
const i=e.split("@",2);
let n;
i.length===1?n=(t==null?void 0:t.byteRangeEndOffset)||0:n=parseInt(i[1]),this._byteRange=[n,parseInt(i[0])+n]}
get baseurl(){
return this.base.url}
get byteRange(){
return this._byteRange===null?[]:this._byteRange}
get byteRangeStartOffset(){
return this.byteRange[0]}
get byteRangeEndOffset(){
return this.byteRange[1]}
get elementaryStreams(){
return this._streams===null&&(this._streams={
[ce.AUDIO]:null,[ce.VIDEO]:null,[ce.AUDIOVIDEO]:null}
),this._streams}
set elementaryStreams(e){
this._streams=e}
get hasStats(){
return this._stats!==null}
get hasStreams(){
return this._streams!==null}
get stats(){
return this._stats===null&&(this._stats=new pc),this._stats}
set stats(e){
this._stats=e}
get url(){
return!this._url&&this.baseurl&&this.relurl&&(this._url=gc.buildAbsoluteURL(this.baseurl,this.relurl,{
alwaysNormalize:!0}
)),this._url||""}
set url(e){
this._url=e}
clearElementaryStreamInfo(){
const{
elementaryStreams:e}
=this;
e[ce.AUDIO]=null,e[ce.VIDEO]=null,e[ce.AUDIOVIDEO]=null}
}
function Ae(s){
return s.sn!=="initSegment"}
class Uo extends Um{
constructor(e,t){
super(t),this._decryptdata=null,this._programDateTime=null,this._ref=null,this._bitrate=void 0,this.rawProgramDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.playlistOffset=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}
get byteLength(){
if(this.hasStats){
const e=this.stats.total;
if(e)return e}
if(this.byteRange.length){
const e=this.byteRange[0],t=this.byteRange[1];
if(j(e)&&j(t))return t-e}
return null}
get bitrate(){
return this.byteLength?this.byteLength*8/this.duration:this._bitrate?this._bitrate:null}
set bitrate(e){
this._bitrate=e}
get decryptdata(){
var e;
const{
levelkeys:t}
=this;
if(!t||t.NONE)return null;
if(t.identity)this._decryptdata||(this._decryptdata=t.identity.getDecryptData(this.sn));
else if(!((e=this._decryptdata)!=null&&e.keyId)){
const i=Object.keys(t);
if(i.length===1){
const n=this._decryptdata=t[i[0]]||null;
n&&(this._decryptdata=n.getDecryptData(this.sn,t))}
}
return this._decryptdata}
get end(){
return this.start+this.duration}
get endProgramDateTime(){
if(this.programDateTime===null)return null;
const e=j(this.duration)?this.duration:0;
return this.programDateTime+e*1e3}
get encrypted(){
var e;
if((e=this._decryptdata)!=null&&e.encrypted)return!0;
if(this.levelkeys){
var t;
const i=Object.keys(this.levelkeys),n=i.length;
if(n>1||n===1&&(t=this.levelkeys[i[0]])!=null&&t.encrypted)return!0}
return!1}
get programDateTime(){
return this._programDateTime===null&&this.rawProgramDateTime&&(this.programDateTime=Date.parse(this.rawProgramDateTime)),this._programDateTime}
set programDateTime(e){
if(!j(e)){
this._programDateTime=this.rawProgramDateTime=null;
return}
this._programDateTime=e}
get ref(){
return Ae(this)?(this._ref||(this._ref={
base:this.base,start:this.start,duration:this.duration,sn:this.sn,programDateTime:this.programDateTime}
),this._ref):null}
addStart(e){
this.setStart(this.start+e)}
setStart(e){
this.start=e,this._ref&&(this._ref.start=e)}
setDuration(e){
this.duration=e,this._ref&&(this._ref.duration=e)}
setKeyFormat(e){
const t=this.levelkeys;
if(t){
var i;
const n=t[e];
n&&!((i=this._decryptdata)!=null&&i.keyId)&&(this._decryptdata=n.getDecryptData(this.sn,t))}
}
abortRequests(){
var e,t;
(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}
setElementaryStreamInfo(e,t,i,n,r,a=!1){
const{
elementaryStreams:o}
=this,u=o[e];
if(!u){
o[e]={
startPTS:t,endPTS:i,startDTS:n,endDTS:r,partial:a}
;
return}
u.startPTS=Math.min(u.startPTS,t),u.endPTS=Math.max(u.endPTS,i),u.startDTS=Math.min(u.startDTS,n),u.endDTS=Math.max(u.endDTS,r)}
}
class yx extends Um{
constructor(e,t,i,n,r){
super(i),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=n;
const a=e.enumeratedString("BYTERANGE");
a&&this.setByteRange(a,r),r&&(this.fragOffset=r.fragOffset+r.duration)}
get start(){
return this.fragment.start+this.fragOffset}
get end(){
return this.start+this.duration}
get loaded(){
const{
elementaryStreams:e}
=this;
return!!(e.audio||e.video||e.audiovideo)}
}
function Bm(s,e){
const t=Object.getPrototypeOf(s);
if(t){
const i=Object.getOwnPropertyDescriptor(t,e);
return i||Bm(t,e)}
}
function vx(s,e){
const t=Bm(s,e);
t&&(t.enumerable=!0,Object.defineProperty(s,e,t))}
const ih=Math.pow(2,32)-1,xx=[].push,$m={
video:1,audio:2,id3:3,text:4}
;
function we(s){
return String.fromCharCode.apply(null,s)}
function jm(s,e){
const t=s[e]<<8|s[e+1];
return t<0?65536+t:t}
function q(s,e){
const t=Gm(s,e);
return t<0?4294967296+t:t}
function nh(s,e){
let t=q(s,e);
return t*=Math.pow(2,32),t+=q(s,e+4),t}
function Gm(s,e){
return s[e]<<24|s[e+1]<<16|s[e+2]<<8|s[e+3]}
function Ex(s){
const e=s.byteLength;
for(let t=0;
t<e;
){
const i=q(s,t);
if(i>8&&s[t+4]===109&&s[t+5]===111&&s[t+6]===111&&s[t+7]===102)return!0;
t=i>1?t+i:e}
return!1}
function ee(s,e){
const t=[];
if(!e.length)return t;
const i=s.byteLength;
for(let n=0;
n<i;
){
const r=q(s,n),a=we(s.subarray(n+4,n+8)),o=r>1?n+r:i;
if(a===e[0])if(e.length===1)t.push(s.subarray(n+8,o));
else{
const u=ee(s.subarray(n+8,o),e.slice(1));
u.length&&xx.apply(t,u)}
n=o}
return t}
function Sx(s){
const e=[],t=s[0];
let i=8;
const n=q(s,i);
i+=4;
let r=0,a=0;
t===0?(r=q(s,i),a=q(s,i+4),i+=8):(r=nh(s,i),a=nh(s,i+8),i+=16),i+=2;
let o=s.length+a;
const u=jm(s,i);
i+=2;
for(let l=0;
l<u;
l++){
let c=i;
const d=q(s,c);
c+=4;
const h=d&2147483647;
if((d&2147483648)>>>31===1)return oe.warn("SIDX has hierarchical references (not supported)"),null;
const m=q(s,c);
c+=4,e.push({
referenceSize:h,subsegmentDuration:m,info:{
duration:m/n,start:o,end:o+h-1}
}
),o+=h,c+=4,i=c}
return{
earliestPresentationTime:r,timescale:n,version:t,referencesCount:u,references:e}
}
function Vm(s){
const e=[],t=ee(s,["moov","trak"]);
for(let n=0;
n<t.length;
n++){
const r=t[n],a=ee(r,["tkhd"])[0];
if(a){
let o=a[0];
const u=q(a,o===0?12:20),l=ee(r,["mdia","mdhd"])[0];
if(l){
o=l[0];
const c=q(l,o===0?12:20),d=ee(r,["mdia","hdlr"])[0];
if(d){
const h=we(d.subarray(8,12)),f={
soun:ce.AUDIO,vide:ce.VIDEO}
[h],m=ee(r,["mdia","minf","stbl","stsd"])[0],p=Tx(m);
f?(e[u]={
timescale:c,type:f,stsd:p}
,e[f]=ae({
timescale:c,id:u}
,p)):e[u]={
timescale:c,type:h,stsd:p}
}
}
}
}
return ee(s,["moov","mvex","trex"]).forEach(n=>{
const r=q(n,4),a=e[r];
a&&(a.default={
duration:q(n,12),flags:q(n,20)}
)}
),e}
function Tx(s){
const e=s.subarray(8),t=e.subarray(86),i=we(e.subarray(4,8));
let n=i,r;
const a=i==="enca"||i==="encv";
if(a){
const l=ee(e,[i])[0].subarray(i==="enca"?28:78);
ee(l,["sinf"]).forEach(d=>{
const h=ee(d,["schm"])[0];
if(h){
const f=we(h.subarray(4,8));
if(f==="cbcs"||f==="cenc"){
const m=ee(d,["frma"])[0];
m&&(n=we(m))}
}
}
)}
const o=n;
switch(n){
case"avc1":case"avc2":case"avc3":case"avc4":{
const u=ee(t,["avcC"])[0];
u&&u.length>3&&(n+="."+Lr(u[1])+Lr(u[2])+Lr(u[3]),r=Ir(o==="avc1"?"dva1":"dvav",t));
break}
case"mp4a":{
const u=ee(e,[i])[0],l=ee(u.subarray(28),["esds"])[0];
if(l&&l.length>7){
let c=4;
if(l[c++]!==3)break;
c=Bo(l,c),c+=2;
const d=l[c++];
if(d&128&&(c+=2),d&64&&(c+=l[c++]),l[c++]!==4)break;
c=Bo(l,c);
const h=l[c++];
if(h===64)n+="."+Lr(h);
else break;
if(c+=12,l[c++]!==5)break;
c=Bo(l,c);
const f=l[c++];
let m=(f&248)>>3;
m===31&&(m+=1+((f&7)<<3)+((l[c]&224)>>5)),n+="."+m}
break}
case"hvc1":case"hev1":{
const u=ee(t,["hvcC"])[0];
if(u&&u.length>12){
const l=u[1],c=["","A","B","C"][l>>6],d=l&31,h=q(u,2),f=(l&32)>>5?"H":"L",m=u[12],p=u.subarray(6,12);
n+="."+c+d,n+="."+Ix(h).toString(16).toUpperCase(),n+="."+f+m;
let E="";
for(let v=p.length;
v--;
){
const y=p[v];
(y||E)&&(E="."+y.toString(16).toUpperCase()+E)}
n+=E}
r=Ir(o=="hev1"?"dvhe":"dvh1",t);
break}
case"dvh1":case"dvhe":case"dvav":case"dva1":case"dav1":{
n=Ir(n,t)||n;
break}
case"vp09":{
const u=ee(t,["vpcC"])[0];
if(u&&u.length>6){
const l=u[4],c=u[5],d=u[6]>>4&15;
n+="."+Vt(l)+"."+Vt(c)+"."+Vt(d)}
break}
case"av01":{
const u=ee(t,["av1C"])[0];
if(u&&u.length>2){
const l=u[1]>>>5,c=u[1]&31,d=u[2]>>>7?"H":"M",h=(u[2]&64)>>6,f=(u[2]&32)>>5,m=l===2&&h?f?12:10:h?10:8,p=(u[2]&16)>>4,E=(u[2]&8)>>3,v=(u[2]&4)>>2,y=u[2]&3;
n+="."+l+"."+Vt(c)+d+"."+Vt(m)+"."+p+"."+E+v+y+"."+Vt(1)+"."+Vt(1)+"."+Vt(1)+"."+0,r=Ir("dav1",t)}
break}
}
return{
codec:n,encrypted:a,supplemental:r}
}
function Ir(s,e){
const t=ee(e,["dvvC"]),i=t.length?t[0]:ee(e,["dvcC"])[0];
if(i){
const n=i[2]>>1&127,r=i[2]<<5&32|i[3]>>3&31;
return s+"."+Vt(n)+"."+Vt(r)}
}
function Ix(s){
let e=0;
for(let t=0;
t<32;
t++)e|=(s>>t&1)<<31-t;
return e>>>0}
function Bo(s,e){
const t=e+5;
for(;
s[e++]&128&&e<t;
);
return e}
function Lr(s){
return("0"+s.toString(16).toUpperCase()).slice(-2)}
function Vt(s){
return(s<10?"0":"")+s}
function Lx(s,e){
if(!s||!e)return;
const t=e.keyId;
t&&e.isCommonEncryption&&Km(s,(i,n)=>{
const r=i.subarray(8,24);
r.some(a=>a!==0)||(oe.log(`[eme] Patching keyId in 'enc${
n?"a":"v"}
>sinf>>tenc' box: ${
Be(r)}
 -> ${
Be(t)}
`),i.set(t,8))}
)}
function Ax(s){
const e=[];
return Km(s,t=>e.push(t.subarray(8,24))),e}
function Km(s,e){
ee(s,["moov","trak"]).forEach(i=>{
const n=ee(i,["mdia","minf","stbl","stsd"])[0];
if(!n)return;
const r=n.subarray(8);
let a=ee(r,["enca"]);
const o=a.length>0;
o||(a=ee(r,["encv"])),a.forEach(u=>{
const l=o?u.subarray(28):u.subarray(78);
ee(l,["sinf"]).forEach(d=>{
const h=Hm(d);
h&&e(h,o)}
)}
)}
)}
function Hm(s){
const e=ee(s,["schm"])[0];
if(e){
const t=we(e.subarray(4,8));
if(t==="cbcs"||t==="cenc"){
const i=ee(s,["schi","tenc"])[0];
if(i)return i}
}
}
function Rx(s,e,t){
const i={
}
,n=ee(s,["moof","traf"]);
for(let r=0;
r<n.length;
r++){
const a=n[r],o=ee(a,["tfhd"])[0],u=q(o,4),l=e[u];
if(!l)continue;
i[u]||(i[u]={
start:NaN,duration:0,sampleCount:0,timescale:l.timescale,type:l.type}
);
const c=i[u],d=ee(a,["tfdt"])[0];
if(d){
const S=d[0];
let T=q(d,4);
S===1&&(T===ih?t.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"):(T*=ih+1,T+=q(d,8))),j(T)&&(!j(c.start)||T<c.start)&&(c.start=T)}
const h=l.default,f=q(o,0)|(h==null?void 0:h.flags);
let m=(h==null?void 0:h.duration)||0;
f&8&&(f&2?m=q(o,12):m=q(o,8));
const p=ee(a,["trun"]);
let E=c.start||0,v=0,y=m;
for(let S=0;
S<p.length;
S++){
const T=p[S],I=q(T,4),_=c.sampleCount;
c.sampleCount+=I;
const L=T[3]&1,R=T[3]&4,w=T[2]&1,A=T[2]&2,D=T[2]&4,$=T[2]&8;
let G=8,W=I;
for(L&&(G+=4),R&&I&&(!(T[G+1]&1)&&c.keyFrameIndex===void 0&&(c.keyFrameIndex=_),G+=4,w?(y=q(T,G),G+=4):y=m,A&&(G+=4),$&&(G+=4),E+=y,v+=y,W--);
W--;
)w?(y=q(T,G),G+=4):y=m,A&&(G+=4),D&&(T[G+1]&1||c.keyFrameIndex===void 0&&(c.keyFrameIndex=c.sampleCount-(W+1),c.keyFrameStart=E),G+=4),$&&(G+=4),E+=y,v+=y;
!v&&m&&(v+=m*I)}
c.duration+=v}
if(!Object.keys(i).some(r=>i[r].duration)){
let r=1/0,a=0;
const o=ee(s,["sidx"]);
for(let u=0;
u<o.length;
u++){
const l=Sx(o[u]);
if(l!=null&&l.references){
r=Math.min(r,l.earliestPresentationTime/l.timescale);
const c=l.references.reduce((d,h)=>d+h.info.duration||0,0);
a=Math.max(a,c+l.earliestPresentationTime/l.timescale)}
}
a&&j(a)&&Object.keys(i).forEach(u=>{
i[u].duration||(i[u].duration=a*i[u].timescale-i[u].start)}
)}
return i}
function _x(s){
const e={
valid:null,remainder:null}
,t=ee(s,["moof"]);
if(t.length<2)return e.remainder=s,e;
const i=t[t.length-1];
return e.valid=s.slice(0,i.byteOffset-8),e.remainder=s.slice(i.byteOffset-8),e}
function Rt(s,e){
const t=new Uint8Array(s.length+e.length);
return t.set(s),t.set(e,s.length),t}
function rh(s,e){
const t=[],i=e.samples,n=e.timescale,r=e.id;
let a=!1;
return ee(i,["moof"]).map(u=>{
const l=u.byteOffset-8;
ee(u,["traf"]).map(d=>{
const h=ee(d,["tfdt"]).map(f=>{
const m=f[0];
let p=q(f,4);
return m===1&&(p*=Math.pow(2,32),p+=q(f,8)),p/n}
)[0];
return h!==void 0&&(s=h),ee(d,["tfhd"]).map(f=>{
const m=q(f,4),p=q(f,0)&16777215,E=(p&1)!==0,v=(p&2)!==0,y=(p&8)!==0;
let S=0;
const T=(p&16)!==0;
let I=0;
const _=(p&32)!==0;
let L=8;
m===r&&(E&&(L+=8),v&&(L+=4),y&&(S=q(f,L),L+=4),T&&(I=q(f,L),L+=4),_&&(L+=4),e.type==="video"&&(a=io(e.codec)),ee(d,["trun"]).map(R=>{
const w=R[0],A=q(R,0)&16777215,D=(A&1)!==0;
let $=0;
const G=(A&4)!==0,W=(A&256)!==0;
let V=0;
const U=(A&512)!==0;
let K=0;
const C=(A&1024)!==0,N=(A&2048)!==0;
let B=0;
const O=q(R,4);
let M=8;
D&&($=q(R,M),M+=4),G&&(M+=4);
let Q=$+l;
for(let te=0;
te<O;
te++){
if(W?(V=q(R,M),M+=4):V=S,U?(K=q(R,M),M+=4):K=I,C&&(M+=4),N&&(w===0?B=q(R,M):B=Gm(R,M),M+=4),e.type===ce.VIDEO){
let Z=0;
for(;
Z<K;
){
const J=q(i,Q);
if(Q+=4,wx(a,i[Q])){
const Ie=i.subarray(Q,Q+J);
yc(Ie,a?2:1,s+B/n,t)}
Q+=J,Z+=J+4}
}
s+=V/n}
}
))}
)}
)}
),t}
function io(s){
if(!s)return!1;
const e=s.substring(0,4);
return e==="hvc1"||e==="hev1"||e==="dvh1"||e==="dvhe"}
function wx(s,e){
if(s){
const t=e>>1&63;
return t===39||t===40}
else return(e&31)===6}
function yc(s,e,t,i){
const n=zm(s);
let r=0;
r+=e;
let a=0,o=0,u=0;
for(;
r<n.length;
){
a=0;
do{
if(r>=n.length)break;
u=n[r++],a+=u}
while(u===255);
o=0;
do{
if(r>=n.length)break;
u=n[r++],o+=u}
while(u===255);
const l=n.length-r;
let c=r;
if(o<l)r+=o;
else if(o>l){
oe.error(`Malformed SEI payload. ${
o}
 is too small, only ${
l}
 bytes left to parse.`);
break}
if(a===4){
if(n[c++]===181){
const h=jm(n,c);
if(c+=2,h===49){
const f=q(n,c);
if(c+=4,f===1195456820){
const m=n[c++];
if(m===3){
const p=n[c++],E=31&p,v=64&p,y=v?2+E*3:0,S=new Uint8Array(y);
if(v){
S[0]=p;
for(let T=1;
T<y;
T++)S[T]=n[c++]}
i.push({
type:m,payloadType:a,pts:t,bytes:S}
)}
}
}
}
}
else if(a===5&&o>16){
const d=[];
for(let m=0;
m<16;
m++){
const p=n[c++].toString(16);
d.push(p.length==1?"0"+p:p),(m===3||m===5||m===7||m===9)&&d.push("-")}
const h=o-16,f=new Uint8Array(h);
for(let m=0;
m<h;
m++)f[m]=n[c++];
i.push({
payloadType:a,pts:t,uuid:d.join(""),userData:mt(f),userDataBytes:f}
)}
}
}
function zm(s){
const e=s.byteLength,t=[];
let i=1;
for(;
i<e-2;
)s[i]===0&&s[i+1]===0&&s[i+2]===3?(t.push(i+2),i+=2):i++;
if(t.length===0)return s;
const n=e-t.length,r=new Uint8Array(n);
let a=0;
for(i=0;
i<n;
a++,i++)a===t[0]&&(a++,t.shift()),r[i]=s[a];
return r}
function kx(s){
const e=s[0];
let t="",i="",n=0,r=0,a=0,o=0,u=0,l=0;
if(e===0){
for(;
we(s.subarray(l,l+1))!=="\0";
)t+=we(s.subarray(l,l+1)),l+=1;
for(t+=we(s.subarray(l,l+1)),l+=1;
we(s.subarray(l,l+1))!=="\0";
)i+=we(s.subarray(l,l+1)),l+=1;
i+=we(s.subarray(l,l+1)),l+=1,n=q(s,12),r=q(s,16),o=q(s,20),u=q(s,24),l=28}
else if(e===1){
l+=4,n=q(s,l),l+=4;
const d=q(s,l);
l+=4;
const h=q(s,l);
for(l+=4,a=2**32*d+h,rx(a)||(a=Number.MAX_SAFE_INTEGER,oe.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),o=q(s,l),l+=4,u=q(s,l),l+=4;
we(s.subarray(l,l+1))!=="\0";
)t+=we(s.subarray(l,l+1)),l+=1;
for(t+=we(s.subarray(l,l+1)),l+=1;
we(s.subarray(l,l+1))!=="\0";
)i+=we(s.subarray(l,l+1)),l+=1;
i+=we(s.subarray(l,l+1)),l+=1}
const c=s.subarray(l,s.byteLength);
return{
schemeIdUri:t,value:i,timeScale:n,presentationTime:a,presentationTimeDelta:r,eventDuration:o,id:u,payload:c}
}
function bx(s,...e){
const t=e.length;
let i=8,n=t;
for(;
n--;
)i+=e[n].byteLength;
const r=new Uint8Array(i);
for(r[0]=i>>24&255,r[1]=i>>16&255,r[2]=i>>8&255,r[3]=i&255,r.set(s,4),n=0,i=8;
n<t;
n++)r.set(e[n],i),i+=e[n].byteLength;
return r}
function Cx(s,e,t){
if(s.byteLength!==16)throw new RangeError("Invalid system id");
let i,n;
i=0,n=new Uint8Array;
let r;
i>0?(r=new Uint8Array(4),e.length>0&&new DataView(r.buffer).setUint32(0,e.length,!1)):r=new Uint8Array;
const a=new Uint8Array(4);
return t.byteLength>0&&new DataView(a.buffer).setUint32(0,t.byteLength,!1),bx([112,115,115,104],new Uint8Array([i,0,0,0]),s,r,n,a,t)}
function Dx(s){
const e=[];
if(s instanceof ArrayBuffer){
const t=s.byteLength;
let i=0;
for(;
i+32<t;
){
const n=new DataView(s,i),r=Px(n);
e.push(r),i+=r.size}
}
return e}
function Px(s){
const e=s.getUint32(0),t=s.byteOffset,i=s.byteLength;
if(i<e)return{
offset:t,size:i}
;
if(s.getUint32(4)!==1886614376)return{
offset:t,size:e}
;
const r=s.getUint32(8)>>>24;
if(r!==0&&r!==1)return{
offset:t,size:e}
;
const a=s.buffer,o=Be(new Uint8Array(a,t+12,16));
let u=null,l=null,c=0;
if(r===0)c=28;
else{
const h=s.getUint32(28);
if(!h||i<32+h*16)return{
offset:t,size:e}
;
u=[];
for(let f=0;
f<h;
f++)u.push(new Uint8Array(a,t+32+f*16,16));
c=32+h*16}
if(!c)return{
offset:t,size:e}
;
const d=s.getUint32(c);
return e-32<d?{
offset:t,size:e}
:(l=new Uint8Array(a,t+c+4,d),{
version:r,systemId:o,kids:u,data:l,offset:t,size:e}
)}
const Wm=()=>/\(Windows.+Firefox\//i.test(navigator.userAgent),Wi={
audio:{
a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1}
,video:{
avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,dav1:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9}
,text:{
stpp:1,wvtt:1}
}
;
function vc(s,e){
const t=Wi[e];
return!!t&&!!t[s.slice(0,4)]}
function Hn(s,e,t=!0){
return!s.split(",").some(i=>!xc(i,e,t))}
function xc(s,e,t=!0){
var i;
const n=Os(t);
return(i=n==null?void 0:n.isTypeSupported(zn(s,e)))!=null?i:!1}
function zn(s,e){
return`${
e}
/mp4;
codecs=${
s}
`}
function ah(s){
if(s){
const e=s.substring(0,4);
return Wi.video[e]}
return 2}
function ba(s){
const e=Wm();
return s.split(",").reduce((t,i)=>{
const r=e&&io(i)?9:Wi.video[i];
return r?(r*2+t)/(t?3:2):(Wi.audio[i]+t)/(t?2:1)}
,0)}
const $o={
}
;
function Nx(s,e=!0){
if($o[s])return $o[s];
const t={
flac:["flac","fLaC","FLAC"],opus:["opus","Opus"],"mp4a.40.34":["mp3"]}
[s];
for(let n=0;
n<t.length;
n++){
var i;
if(xc(t[n],"audio",e))return $o[s]=t[n],t[n];
if(t[n]==="mp3"&&(i=Os(e))!=null&&i.isTypeSupported("audio/mpeg"))return""}
return s}
const Ox=/flac|opus|mp4a\.40\.34/i;
function Ca(s,e=!0){
return s.replace(Ox,t=>Nx(t.toLowerCase(),e))}
function Mx(s,e){
const t=[];
if(s){
const i=s.split(",");
for(let n=0;
n<i.length;
n++)vc(i[n],"video")||t.push(i[n])}
return e&&t.push(e),t.join(",")}
function Xr(s,e){
if(s&&(s.length>4||["ac-3","ec-3","alac","fLaC","Opus"].indexOf(s)!==-1)&&(oh(s,"audio")||oh(s,"video")))return s;
if(e){
const t=e.split(",");
if(t.length>1){
if(s){
for(let i=t.length;
i--;
)if(t[i].substring(0,4)===s.substring(0,4))return t[i]}
return t[0]}
}
return e||s}
function oh(s,e){
return vc(s,e)&&xc(s,e)}
function Fx(s){
const e=s.split(",");
for(let t=0;
t<e.length;
t++){
const i=e[t].split(".");
i.length>2&&i[0]==="avc1"&&(e[t]=`avc1.${
parseInt(i[1]).toString(16)}
${
("000"+parseInt(i[2]).toString(16)).slice(-4)}
`)}
return e.join(",")}
function Ux(s){
if(s.startsWith("av01.")){
const e=s.split("."),t=["0","111","01","01","01","0"];
for(let i=e.length;
i>4&&i<10;
i++)e[i]=t[i-4];
return e.join(".")}
return s}
function lh(s){
const e=Os(s)||{
isTypeSupported:()=>!1}
;
return{
mpeg:e.isTypeSupported("audio/mpeg"),mp3:e.isTypeSupported('audio/mp4;
 codecs="mp3"'),ac3:e.isTypeSupported('audio/mp4;
 codecs="ac-3"')}
}
function iu(s){
return s.replace(/^.+codecs=["']?([^"']+).*$/,"$1")}
const Bx={
supported:!0,powerEfficient:!0,smooth:!0}
,$x={
supported:!1,smooth:!1,powerEfficient:!1}
,Ym={
supported:!0,configurations:[],decodingInfoResults:[Bx]}
;
function qm(s,e){
return{
supported:!1,configurations:e,decodingInfoResults:[$x],error:s}
}
function jx(s,e,t,i,n,r){
const a=s.videoCodec,o=s.audioCodec?s.audioGroups:null,u=r==null?void 0:r.audioCodec,l=r==null?void 0:r.channels,c=l?parseInt(l):u?1/0:2;
let d=null;
if(o!=null&&o.length)try{
o.length===1&&o[0]?d=e.groups[o[0]].channels:d=o.reduce((h,f)=>{
if(f){
const m=e.groups[f];
if(!m)throw new Error(`Audio track group ${
f}
 not found`);
Object.keys(m.channels).forEach(p=>{
h[p]=(h[p]||0)+m.channels[p]}
)}
return h}
,{
2:0}
)}
catch{
return!0}
return a!==void 0&&(a.split(",").some(h=>io(h))||s.width>1920&&s.height>1088||s.height>1920&&s.width>1088||s.frameRate>Math.max(i,30)||s.videoRange!=="SDR"&&s.videoRange!==t||s.bitrate>Math.max(n,8e6))||!!d&&j(c)&&Object.keys(d).some(h=>parseInt(h)>c)}
function Qm(s,e,t,i={
}
){
const n=s.videoCodec;
if(!n&&!s.audioCodec||!t)return Promise.resolve(Ym);
const r=[],a=Gx(s),o=a.length,u=Vx(s,e,o>0),l=u.length;
for(let c=o||1*l||1;
c--;
){
const d={
type:"media-source"}
;
if(o&&(d.video=a[c%o]),l){
d.audio=u[c%l];
const h=d.audio.bitrate;
d.video&&h&&(d.video.bitrate-=h)}
r.push(d)}
if(n){
const c=navigator.userAgent;
if(n.split(",").some(d=>io(d))&&Wm())return Promise.resolve(qm(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${
c}
)`),r))}
return Promise.all(r.map(c=>{
const d=Hx(c);
return i[d]||(i[d]=t.decodingInfo(c))}
)).then(c=>({
supported:!c.some(d=>!d.supported),configurations:r,decodingInfoResults:c}
)).catch(c=>({
supported:!1,configurations:r,decodingInfoResults:[],error:c}
))}
function Gx(s){
var e;
const t=(e=s.videoCodec)==null?void 0:e.split(","),i=Xm(s),n=s.width||640,r=s.height||480,a=s.frameRate||30,o=s.videoRange.toLowerCase();
return t?t.map(u=>{
const l={
contentType:zn(Ux(u),"video"),width:n,height:r,bitrate:i,framerate:a}
;
return o!=="sdr"&&(l.transferFunction=o),l}
):[]}
function Vx(s,e,t){
var i;
const n=(i=s.audioCodec)==null?void 0:i.split(","),r=Xm(s);
return n&&s.audioGroups?s.audioGroups.reduce((a,o)=>{
var u;
const l=o?(u=e.groups[o])==null?void 0:u.tracks:null;
return l?l.reduce((c,d)=>{
if(d.groupId===o){
const h=parseFloat(d.channels||"");
n.forEach(f=>{
const m={
contentType:zn(f,"audio"),bitrate:t?Kx(f,r):r}
;
h&&(m.channels=""+h),c.push(m)}
)}
return c}
,a):a}
,[]):[]}
function Kx(s,e){
if(e<=1)return 1;
let t=128e3;
return s==="ec-3"?t=768e3:s==="ac-3"&&(t=64e4),Math.min(e/2,t)}
function Xm(s){
return Math.ceil(Math.max(s.bitrate*.9,s.averageBitrate)/1e3)*1e3||1}
function Hx(s){
let e="";
const{
audio:t,video:i}
=s;
if(i){
const n=iu(i.contentType);
e+=`${
n}
_r${
i.height}
x${
i.width}
f${
Math.ceil(i.framerate)}
${
i.transferFunction||"sd"}
_${
Math.ceil(i.bitrate/1e5)}
`}
if(t){
const n=iu(t.contentType);
e+=`${
i?"_":""}
${
n}
_c${
t.channels}
`}
return e}
const nu=["NONE","TYPE-0","TYPE-1",null];
function zx(s){
return nu.indexOf(s)>-1}
const Da=["SDR","PQ","HLG"];
function Wx(s){
return!!s&&Da.indexOf(s)>-1}
var Zr={
No:"",Yes:"YES",v2:"v2"}
;
function uh(s){
const{
canSkipUntil:e,canSkipDateRanges:t,age:i}
=s,n=i<e/2;
return e&&n?t?Zr.v2:Zr.Yes:Zr.No}
class ch{
constructor(e,t,i){
this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=i}
addDirectives(e){
const t=new self.URL(e);
return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}
}
class Wn{
constructor(e){
if(this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.supplemental=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(i=>!!i).map(i=>i.substring(0,4)).join(","),"supplemental"in e){
var t;
this.supplemental=e.supplemental;
const i=(t=e.supplemental)==null?void 0:t.videoCodec;
i&&i!==e.videoCodec&&(this.codecSet+=`,${
i.substring(0,4)}
`)}
this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}
get maxBitrate(){
return Math.max(this.realBitrate,this.bitrate)}
get averageBitrate(){
return this._avgBitrate||this.realBitrate||this.bitrate}
get attrs(){
return this._attrs[0]}
get codecs(){
return this.attrs.CODECS||""}
get pathwayId(){
return this.attrs["PATHWAY-ID"]||"."}
get videoRange(){
return this.attrs["VIDEO-RANGE"]||"SDR"}
get score(){
return this.attrs.optionalFloat("SCORE",0)}
get uri(){
return this.url[0]||""}
hasAudioGroup(e){
return dh(this._audioGroups,e)}
hasSubtitleGroup(e){
return dh(this._subtitleGroups,e)}
get audioGroups(){
return this._audioGroups}
get subtitleGroups(){
return this._subtitleGroups}
addGroupId(e,t){
if(t){
if(e==="audio"){
let i=this._audioGroups;
i||(i=this._audioGroups=[]),i.indexOf(t)===-1&&i.push(t)}
else if(e==="text"){
let i=this._subtitleGroups;
i||(i=this._subtitleGroups=[]),i.indexOf(t)===-1&&i.push(t)}
}
}
get urlId(){
return 0}
set urlId(e){
}
get audioGroupIds(){
return this.audioGroups?[this.audioGroupId]:void 0}
get textGroupIds(){
return this.subtitleGroups?[this.textGroupId]:void 0}
get audioGroupId(){
var e;
return(e=this.audioGroups)==null?void 0:e[0]}
get textGroupId(){
var e;
return(e=this.subtitleGroups)==null?void 0:e[0]}
addFallback(){
}
}
function dh(s,e){
return!e||!s?!1:s.indexOf(e)!==-1}
function Yx(){
if(typeof matchMedia=="function"){
const s=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");
if(s.media!==e.media)return s.matches===!0}
return!1}
function qx(s,e){
let t=!1,i=[];
if(s&&(t=s!=="SDR",i=[s]),e){
i=e.allowedVideoRanges||Da.slice(0);
const n=i.join("")!=="SDR"&&!e.videoCodec;
t=e.preferHDR!==void 0?e.preferHDR:n&&Yx(),t||(i=["SDR"])}
return{
preferHDR:t,allowedVideoRanges:i}
}
const Qx=s=>{
const e=new WeakSet;
return(t,i)=>{
if(s&&(i=s(t,i)),typeof i=="object"&&i!==null){
if(e.has(i))return;
e.add(i)}
return i}
}
,de=(s,e)=>JSON.stringify(s,Qx(e));
function Xx(s,e,t,i,n){
const r=Object.keys(s),a=i==null?void 0:i.channels,o=i==null?void 0:i.audioCodec,u=n==null?void 0:n.videoCodec,l=a&&parseInt(a)===2;
let c=!1,d=!1,h=1/0,f=1/0,m=1/0,p=1/0,E=0,v=[];
const{
preferHDR:y,allowedVideoRanges:S}
=qx(e,n);
for(let R=r.length;
R--;
){
const w=s[r[R]];
c||(c=w.channels[2]>0),h=Math.min(h,w.minHeight),f=Math.min(f,w.minFramerate),m=Math.min(m,w.minBitrate),S.filter(D=>w.videoRanges[D]>0).length>0&&(d=!0)}
h=j(h)?h:0,f=j(f)?f:0;
const T=Math.max(1080,h),I=Math.max(30,f);
m=j(m)?m:t,t=Math.max(m,t),d||(e=void 0);
const _=r.length>1;
return{
codecSet:r.reduce((R,w)=>{
const A=s[w];
if(w===R)return R;
if(v=d?S.filter(D=>A.videoRanges[D]>0):[],_){
if(A.minBitrate>t)return $t(w,`min bitrate of ${
A.minBitrate}
 > current estimate of ${
t}
`),R;
if(!A.hasDefaultAudio)return $t(w,"no renditions with default or auto-select sound found"),R;
if(o&&w.indexOf(o.substring(0,4))%5!==0)return $t(w,`audio codec preference "${
o}
" not found`),R;
if(a&&!l){
if(!A.channels[a])return $t(w,`no renditions with ${
a}
 channel sound found (channels options: ${
Object.keys(A.channels)}
)`),R}
else if((!o||l)&&c&&A.channels[2]===0)return $t(w,"no renditions with stereo sound found"),R;
if(A.minHeight>T)return $t(w,`min resolution of ${
A.minHeight}
 > maximum of ${
T}
`),R;
if(A.minFramerate>I)return $t(w,`min framerate of ${
A.minFramerate}
 > maximum of ${
I}
`),R;
if(!v.some(D=>A.videoRanges[D]>0))return $t(w,`no variants with VIDEO-RANGE of ${
de(v)}
 found`),R;
if(u&&w.indexOf(u.substring(0,4))%5!==0)return $t(w,`video codec preference "${
u}
" not found`),R;
if(A.maxScore<E)return $t(w,`max score of ${
A.maxScore}
 < selected max of ${
E}
`),R}
return R&&(ba(w)>=ba(R)||A.fragmentError>s[R].fragmentError)?R:(p=A.minIndex,E=A.maxScore,w)}
,void 0),videoRanges:v,preferHDR:y,minFramerate:f,minBitrate:m,minIndex:p}
}
function $t(s,e){
oe.log(`[abr] start candidates with "${
s}
" ignored because ${
e}
`)}
function Zm(s){
return s.reduce((e,t)=>{
let i=e.groups[t.groupId];
i||(i=e.groups[t.groupId]={
tracks:[],channels:{
2:0}
,hasDefault:!1,hasAutoSelect:!1}
),i.tracks.push(t);
const n=t.channels||"2";
return i.channels[n]=(i.channels[n]||0)+1,i.hasDefault=i.hasDefault||t.default,i.hasAutoSelect=i.hasAutoSelect||t.autoselect,i.hasDefault&&(e.hasDefaultAudio=!0),i.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e}
,{
hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{
}
}
)}
function Zx(s,e,t,i){
return s.slice(t,i+1).reduce((n,r,a)=>{
if(!r.codecSet)return n;
const o=r.audioGroups;
let u=n[r.codecSet];
u||(n[r.codecSet]=u={
minBitrate:1/0,minHeight:1/0,minFramerate:1/0,minIndex:a,maxScore:0,videoRanges:{
SDR:0}
,channels:{
2:0}
,hasDefaultAudio:!o,fragmentError:0}
),u.minBitrate=Math.min(u.minBitrate,r.bitrate);
const l=Math.min(r.height,r.width);
return u.minHeight=Math.min(u.minHeight,l),u.minFramerate=Math.min(u.minFramerate,r.frameRate),u.minIndex=Math.min(u.minIndex,a),u.maxScore=Math.max(u.maxScore,r.score),u.fragmentError+=r.fragmentError,u.videoRanges[r.videoRange]=(u.videoRanges[r.videoRange]||0)+1,o&&o.forEach(c=>{
if(!c)return;
const d=e.groups[c];
d&&(u.hasDefaultAudio=u.hasDefaultAudio||e.hasDefaultAudio?d.hasDefault:d.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(d.channels).forEach(h=>{
u.channels[h]=(u.channels[h]||0)+d.channels[h]}
))}
),n}
,{
}
)}
function hh(s){
if(!s)return s;
const{
lang:e,assocLang:t,characteristics:i,channels:n,audioCodec:r}
=s;
return{
lang:e,assocLang:t,characteristics:i,channels:n,audioCodec:r}
}
function zt(s,e,t){
if("attrs"in s){
const i=e.indexOf(s);
if(i!==-1)return i}
for(let i=0;
i<e.length;
i++){
const n=e[i];
if(ei(s,n,t))return i}
return-1}
function ei(s,e,t){
const{
groupId:i,name:n,lang:r,assocLang:a,default:o}
=s,u=s.forced;
return(i===void 0||e.groupId===i)&&(n===void 0||e.name===n)&&(r===void 0||Jx(r,e.lang))&&(r===void 0||e.assocLang===a)&&(o===void 0||e.default===o)&&(u===void 0||e.forced===u)&&(!("characteristics"in s)||eE(s.characteristics||"",e.characteristics))&&(t===void 0||t(s,e))}
function Jx(s,e="--"){
return s.length===e.length?s===e:s.startsWith(e)||e.startsWith(s)}
function eE(s,e=""){
const t=s.split(","),i=e.split(",");
return t.length===i.length&&!t.some(n=>i.indexOf(n)===-1)}
function Ws(s,e){
const{
audioCodec:t,channels:i}
=s;
return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(i===void 0||i===(e.channels||"2"))}
function tE(s,e,t,i,n){
const r=e[i],o=e.reduce((h,f,m)=>{
const p=f.uri;
return(h[p]||(h[p]=[])).push(m),h}
,{
}
)[r.uri];
o.length>1&&(i=Math.max.apply(Math,o));
const u=r.videoRange,l=r.frameRate,c=r.codecSet.substring(0,4),d=fh(e,i,h=>{
if(h.videoRange!==u||h.frameRate!==l||h.codecSet.substring(0,4)!==c)return!1;
const f=h.audioGroups,m=t.filter(p=>!f||f.indexOf(p.groupId)!==-1);
return zt(s,m,n)>-1}
);
return d>-1?d:fh(e,i,h=>{
const f=h.audioGroups,m=t.filter(p=>!f||f.indexOf(p.groupId)!==-1);
return zt(s,m,n)>-1}
)}
function fh(s,e,t){
for(let i=e;
i>-1;
i--)if(t(s[i]))return i;
for(let i=e+1;
i<s.length;
i++)if(t(s[i]))return i;
return-1}
function Pa(s,e){
var t;
return!!s&&s!==((t=e.loadLevelObj)==null?void 0:t.uri)}
class sE extends _t{
constructor(e){
super("abr",e.logger),this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.rebufferNotice=-1,this.supportedCache={
}
,this.bwEstimator=void 0,this._abandonRulesCheck=t=>{
var i;
const{
fragCurrent:n,partCurrent:r,hls:a}
=this,{
autoLevelEnabled:o,media:u}
=a;
if(!n||!u)return;
const l=performance.now(),c=r?r.stats:n.stats,d=r?r.duration:n.duration,h=l-c.loading.start,f=a.minAutoLevel,m=n.level,p=this._nextAutoLevel;
if(c.aborted||c.loaded&&c.loaded===c.total||m<=f){
this.clearTimer(),this._nextAutoLevel=-1;
return}
if(!o)return;
const E=p>-1&&p!==m,v=!!t||E;
if(!v&&(u.paused||!u.playbackRate||!u.readyState))return;
const y=a.mainForwardBufferInfo;
if(!v&&y===null)return;
const S=this.bwEstimator.getEstimateTTFB(),T=Math.abs(u.playbackRate);
if(h<=Math.max(S,1e3*(d/(T*2))))return;
const I=y?y.len/T:0,_=c.loading.first?c.loading.first-c.loading.start:-1,L=c.loaded&&_>-1,R=this.getBwEstimate(),w=a.levels,A=w[m],D=Math.max(c.loaded,Math.round(d*(n.bitrate||A.averageBitrate)/8));
let $=L?h-_:h;
$<1&&L&&($=Math.min(h,c.loaded*8/R));
const G=L?c.loaded*1e3/$:0,W=S/1e3,V=G?(D-c.loaded)/G:D*8/R+W;
if(V<=I)return;
const U=G?G*8:R,K=((i=(t==null?void 0:t.details)||this.hls.latestLevelDetails)==null?void 0:i.live)===!0,C=this.hls.config.abrBandWidthUpFactor;
let N=Number.POSITIVE_INFINITY,B;
for(B=m-1;
B>f;
B--){
const te=w[B].maxBitrate,Z=!w[B].details||K;
if(N=this.getTimeToLoadFrag(W,U,d*te,Z),N<Math.min(I,d+W))break}
if(N>=V||N>d*10)return;
L?this.bwEstimator.sample(h-Math.min(S,_),c.loaded):this.bwEstimator.sampleTTFB(h);
const O=w[B].maxBitrate;
this.getBwEstimate()*C>O&&this.resetEstimator(O);
const M=this.findBestLevel(O,f,B,0,I,1,1);
M>-1&&(B=M),this.warn(`Fragment ${
n.sn}
${
r?" part "+r.index:""}
 of level ${
m}
 is loading too slowly;

      Fragment duration: ${
n.duration.toFixed(3)}

      Time to underbuffer: ${
I.toFixed(3)}
 s
      Estimated load time for current fragment: ${
V.toFixed(3)}
 s
      Estimated load time for down switch fragment: ${
N.toFixed(3)}
 s
      TTFB estimate: ${
_|0}
 ms
      Current BW estimate: ${
j(R)?R|0:"Unknown"}
 bps
      New BW estimate: ${
this.getBwEstimate()|0}
 bps
      Switching to level ${
B}
 @ ${
O|0}
 bps`),a.nextLoadLevel=a.nextAutoLevel=B,this.clearTimer();
const Q=()=>{
if(this.clearTimer(),this.fragCurrent===n&&this.hls.loadLevel===B&&B>0){
const te=this.getStarvationDelay();
if(this.warn(`Aborting inflight request ${
B>0?"and switching down":""}

      Fragment duration: ${
n.duration.toFixed(3)}
 s
      Time to underbuffer: ${
te.toFixed(3)}
 s`),n.abortRequests(),this.fragCurrent=this.partCurrent=null,B>f){
let Z=this.findBestLevel(this.hls.levels[f].bitrate,f,B,0,te,1,1);
Z===-1&&(Z=f),this.hls.nextLoadLevel=this.hls.nextAutoLevel=Z,this.resetEstimator(this.hls.levels[Z].bitrate)}
}
}
;
E||V>N*2?Q():this.timer=self.setInterval(Q,N*1e3),a.trigger(x.FRAG_LOAD_EMERGENCY_ABORTED,{
frag:n,part:r,stats:c}
)}
,this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}
resetEstimator(e){
e&&(this.log(`setting initial bwe to ${
e}
`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}
initEstimator(){
const e=this.hls.config;
return new ox(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}
registerListeners(){
const{
hls:e}
=this;
e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.FRAG_LOADING,this.onFragLoading,this),e.on(x.FRAG_LOADED,this.onFragLoaded,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this),e.on(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(x.ERROR,this.onError,this)}
unregisterListeners(){
const{
hls:e}
=this;
e&&(e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.FRAG_LOADING,this.onFragLoading,this),e.off(x.FRAG_LOADED,this.onFragLoaded,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this),e.off(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(x.ERROR,this.onError,this))}
destroy(){
this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=this.supportedCache=null,this.fragCurrent=this.partCurrent=null}
onManifestLoading(e,t){
this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.supportedCache={
}
,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}
onLevelsUpdated(){
this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}
onMaxAutoLevelUpdated(){
this.firstSelection=-1,this.nextAutoLevelKey=""}
onFragLoading(e,t){
const i=t.frag;
if(!this.ignoreFragment(i)){
if(!i.bitrateTest){
var n;
this.fragCurrent=i,this.partCurrent=(n=t.part)!=null?n:null}
this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}
}
onLevelSwitching(e,t){
this.clearTimer()}
onError(e,t){
if(!t.fatal)switch(t.details){
case b.BUFFER_ADD_CODEC_ERROR:case b.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;
break;
case b.FRAG_LOAD_TIMEOUT:{
const i=t.frag,{
fragCurrent:n,partCurrent:r}
=this;
if(i&&n&&i.sn===n.sn&&i.level===n.level){
const a=performance.now(),o=r?r.stats:i.stats,u=a-o.loading.start,l=o.loading.first?o.loading.first-o.loading.start:-1;
if(o.loaded&&l>-1){
const d=this.bwEstimator.getEstimateTTFB();
this.bwEstimator.sample(u-Math.min(d,l),o.loaded)}
else this.bwEstimator.sampleTTFB(u)}
break}
}
}
getTimeToLoadFrag(e,t,i,n){
const r=e+i/t,a=n?e+this.lastLevelLoadSec:0;
return r+a}
onLevelLoaded(e,t){
const i=this.hls.config,{
loading:n}
=t.stats,r=n.end-n.first;
j(r)&&(this.lastLevelLoadSec=r/1e3),t.details.live?this.bwEstimator.update(i.abrEwmaSlowLive,i.abrEwmaFastLive):this.bwEstimator.update(i.abrEwmaSlowVoD,i.abrEwmaFastVoD),this.timer>-1&&this._abandonRulesCheck(t.levelInfo)}
onFragLoaded(e,{
frag:t,part:i}
){
const n=i?i.stats:t.stats;
if(t.type===H.MAIN&&this.bwEstimator.sampleTTFB(n.loading.first-n.loading.start),!this.ignoreFragment(t)){
if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){
const r=i?i.duration:t.duration,a=this.hls.levels[t.level],o=(a.loaded?a.loaded.bytes:0)+n.loaded,u=(a.loaded?a.loaded.duration:0)+r;
a.loaded={
bytes:o,duration:u}
,a.realBitrate=Math.round(8*o/u)}
if(t.bitrateTest){
const r={
stats:n,frag:t,part:i,id:t.type}
;
this.onFragBuffered(x.FRAG_BUFFERED,r),t.bitrateTest=!1}
else this.lastLoadedFragLevel=t.level}
}
onFragBuffered(e,t){
const{
frag:i,part:n}
=t,r=n!=null&&n.stats.loaded?n.stats:i.stats;
if(r.aborted||this.ignoreFragment(i))return;
const a=r.parsing.end-r.loading.start-Math.min(r.loading.first-r.loading.start,this.bwEstimator.getEstimateTTFB());
this.bwEstimator.sample(a,r.loaded),r.bwEstimate=this.getBwEstimate(),i.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}
ignoreFragment(e){
return e.type!==H.MAIN||e.sn==="initSegment"}
clearTimer(){
this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}
get firstAutoLevel(){
const{
maxAutoLevel:e,minAutoLevel:t}
=this.hls,i=this.getBwEstimate(),n=this.hls.config.maxStarvationDelay,r=this.findBestLevel(i,t,e,0,n,1,1);
if(r>-1)return r;
const a=this.hls.firstLevel,o=Math.min(Math.max(a,t),e);
return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${
a}
 clamped to ${
o}
`),o}
get forcedAutoLevel(){
return this.nextAutoLevelKey?-1:this._nextAutoLevel}
get nextAutoLevel(){
const e=this.forcedAutoLevel,i=this.bwEstimator.canEstimate(),n=this.lastLoadedFragLevel>-1;
if(e!==-1&&(!i||!n||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;
const r=i&&n?this.getNextABRAutoLevel():this.firstAutoLevel;
if(e!==-1){
const a=this.hls.levels;
if(a.length>Math.max(e,r)&&a[e].loadError<=a[r].loadError)return e}
return this._nextAutoLevel=r,this.nextAutoLevelKey=this.getAutoLevelKey(),r}
getAutoLevelKey(){
return`${
this.getBwEstimate()}
_${
this.getStarvationDelay().toFixed(2)}
`}
getNextABRAutoLevel(){
const{
fragCurrent:e,partCurrent:t,hls:i}
=this;
if(i.levels.length<=1)return i.loadLevel;
const{
maxAutoLevel:n,config:r,minAutoLevel:a}
=i,o=t?t.duration:e?e.duration:0,u=this.getBwEstimate(),l=this.getStarvationDelay();
let c=r.abrBandWidthFactor,d=r.abrBandWidthUpFactor;
if(l){
const E=this.findBestLevel(u,a,n,l,0,c,d);
if(E>=0)return this.rebufferNotice=-1,E}
let h=o?Math.min(o,r.maxStarvationDelay):r.maxStarvationDelay;
if(!l){
const E=this.bitrateTestDelay;
E&&(h=(o?Math.min(o,r.maxLoadingDelay):r.maxLoadingDelay)-E,this.info(`bitrate test took ${
Math.round(1e3*E)}
ms, set first fragment max fetchDuration to ${
Math.round(1e3*h)}
 ms`),c=d=1)}
const f=this.findBestLevel(u,a,n,l,h,c,d);
if(this.rebufferNotice!==f&&(this.rebufferNotice=f,this.info(`${
l?"rebuffering expected":"buffer is empty"}
, optimal quality level ${
f}
`)),f>-1)return f;
const m=i.levels[a],p=i.loadLevelObj;
return p&&(m==null?void 0:m.bitrate)<p.bitrate?a:i.loadLevel}
getStarvationDelay(){
const e=this.hls,t=e.media;
if(!t)return 1/0;
const i=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,n=e.mainForwardBufferInfo;
return(n?n.len:0)/i}
getBwEstimate(){
return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}
findBestLevel(e,t,i,n,r,a,o){
var u;
const l=n+r,c=this.lastLoadedFragLevel,d=c===-1?this.hls.firstLevel:c,{
fragCurrent:h,partCurrent:f}
=this,{
levels:m,allAudioTracks:p,loadLevel:E,config:v}
=this.hls;
if(m.length===1)return 0;
const y=m[d],S=!!((u=this.hls.latestLevelDetails)!=null&&u.live),T=E===-1||c===-1;
let I,_="SDR",L=(y==null?void 0:y.frameRate)||0;
const{
audioPreference:R,videoPreference:w}
=v,A=this.audioTracksByGroup||(this.audioTracksByGroup=Zm(p));
let D=-1;
if(T){
if(this.firstSelection!==-1)return this.firstSelection;
const U=this.codecTiers||(this.codecTiers=Zx(m,A,t,i)),K=Xx(U,_,e,R,w),{
codecSet:C,videoRanges:N,minFramerate:B,minBitrate:O,minIndex:M,preferHDR:Q}
=K;
D=M,I=C,_=Q?N[N.length-1]:N[0],L=B,e=Math.max(e,O),this.log(`picked start tier ${
de(K)}
`)}
else I=y==null?void 0:y.codecSet,_=y==null?void 0:y.videoRange;
const $=f?f.duration:h?h.duration:0,G=this.bwEstimator.getEstimateTTFB()/1e3,W=[];
for(let U=i;
U>=t;
U--){
var V;
const K=m[U],C=U>d;
if(!K)continue;
if(v.useMediaCapabilities&&!K.supportedResult&&!K.supportedPromise){
const Z=navigator.mediaCapabilities;
typeof(Z==null?void 0:Z.decodingInfo)=="function"&&jx(K,A,_,L,e,R)?(K.supportedPromise=Qm(K,A,Z,this.supportedCache),K.supportedPromise.then(J=>{
if(!this.hls)return;
K.supportedResult=J;
const Ie=this.hls.levels,Me=Ie.indexOf(K);
J.error?this.warn(`MediaCapabilities decodingInfo error: "${
J.error}
" for level ${
Me}
 ${
de(J)}
`):J.supported?J.decodingInfoResults.some(vt=>vt.smooth===!1||vt.powerEfficient===!1)&&this.log(`MediaCapabilities decodingInfo for level ${
Me}
 not smooth or powerEfficient: ${
de(J)}
`):(this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${
Me}
 ${
de(J)}
`),Me>-1&&Ie.length>1&&(this.log(`Removing unsupported level ${
Me}
`),this.hls.removeLevel(Me),this.hls.loadLevel===-1&&(this.hls.nextLoadLevel=0)))}
).catch(J=>{
this.warn(`Error handling MediaCapabilities decodingInfo: ${
J}
`)}
)):K.supportedResult=Ym}
if((I&&K.codecSet!==I||_&&K.videoRange!==_||C&&L>K.frameRate||!C&&L>0&&L<K.frameRate||(V=K.supportedResult)!=null&&(V=V.decodingInfoResults)!=null&&V.some(Z=>Z.smooth===!1))&&(!T||U!==D)){
W.push(U);
continue}
const N=K.details,B=(f?N==null?void 0:N.partTarget:N==null?void 0:N.averagetargetduration)||$;
let O;
C?O=o*e:O=a*e;
const M=$&&n>=$*2&&r===0?K.averageBitrate:K.maxBitrate,Q=this.getTimeToLoadFrag(G,O,M*B,N===void 0);
if(O>=M&&(U===c||K.loadError===0&&K.fragmentError===0)&&(Q<=G||!j(Q)||S&&!this.bitrateTestDelay||Q<l)){
const Z=this.forcedAutoLevel;
return U!==E&&(Z===-1||Z!==E)&&(W.length&&this.trace(`Skipped level(s) ${
W.join(",")}
 of ${
i}
 max with CODECS and VIDEO-RANGE:"${
m[W[0]].codecs}
" ${
m[W[0]].videoRange}
;
 not compatible with "${
I}
" ${
_}
`),this.info(`switch candidate:${
d}
->${
U}
 adjustedbw(${
Math.round(O)}
)-bitrate=${
Math.round(O-M)}
 ttfb:${
G.toFixed(1)}
 avgDuration:${
B.toFixed(1)}
 maxFetchDuration:${
l.toFixed(1)}
 fetchDuration:${
Q.toFixed(1)}
 firstSelection:${
T}
 codecSet:${
K.codecSet}
 videoRange:${
K.videoRange}
 hls.loadLevel:${
E}
`)),T&&(this.firstSelection=U),U}
}
return-1}
set nextAutoLevel(e){
const t=this.deriveNextAutoLevel(e);
this._nextAutoLevel!==t&&(this.nextAutoLevelKey="",this._nextAutoLevel=t)}
deriveNextAutoLevel(e){
const{
maxAutoLevel:t,minAutoLevel:i}
=this.hls;
return Math.min(Math.max(e,i),t)}
}
const Jm={
search:function(s,e){
let t=0,i=s.length-1,n=null,r=null;
for(;
t<=i;
){
n=(t+i)/2|0,r=s[n];
const a=e(r);
if(a>0)t=n+1;
else if(a<0)i=n-1;
else return r}
return null}
}
;
function iE(s,e,t){
if(e===null||!Array.isArray(s)||!s.length||!j(e))return null;
const i=s[0].programDateTime;
if(e<(i||0))return null;
const n=s[s.length-1].endProgramDateTime;
if(e>=(n||0))return null;
for(let r=0;
r<s.length;
++r){
const a=s[r];
if(rE(e,t,a))return a}
return null}
function ai(s,e,t=0,i=0,n=.005){
let r=null;
if(s){
r=e[1+s.sn-e[0].sn]||null;
const o=s.endDTS-t;
o>0&&o<15e-7&&(t+=15e-7),r&&s.level!==r.level&&r.end<=s.end&&(r=e[2+s.sn-e[0].sn]||null)}
else t===0&&e[0].start===0&&(r=e[0]);
if(r&&((!s||s.level===r.level)&&mh(t,i,r)===0||nE(r,s,Math.min(n,i))))return r;
const a=Jm.search(e,mh.bind(null,t,i));
return a&&(a!==s||!r)?a:r}
function nE(s,e,t){
if(e&&e.start===0&&e.level<s.level&&(e.endPTS||0)>0){
const i=e.tagList.reduce((n,r)=>(r[0]==="INF"&&(n+=parseFloat(r[1])),n),t);
return s.start<=i}
return!1}
function mh(s=0,e=0,t){
if(t.start<=s&&t.start+t.duration>s)return 0;
const i=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));
return t.start+t.duration-i<=s?1:t.start-i>s&&t.start?-1:0}
function rE(s,e,t){
const i=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;
return(t.endProgramDateTime||0)-i>s}
function eg(s,e,t){
if(s&&s.startCC<=e&&s.endCC>=e){
let i=s.fragments;
const{
fragmentHint:n}
=s;
n&&(i=i.concat(n));
let r;
return Jm.search(i,a=>a.cc<e?1:a.cc>e?-1:(r=a,a.end<=t?1:a.start>t?-1:0)),r||null}
return null}
function Na(s){
switch(s.details){
case b.FRAG_LOAD_TIMEOUT:case b.KEY_LOAD_TIMEOUT:case b.LEVEL_LOAD_TIMEOUT:case b.MANIFEST_LOAD_TIMEOUT:return!0}
return!1}
function tg(s){
return s.details.startsWith("key")}
function sg(s){
return tg(s)&&!!s.frag&&!s.frag.decryptdata}
function gh(s,e){
const t=Na(e);
return s.default[`${
t?"timeout":"error"}
Retry`]}
function Ec(s,e){
const t=s.backoff==="linear"?1:Math.pow(2,e);
return Math.min(t*s.retryDelayMs,s.maxRetryDelayMs)}
function ph(s){
return ae(ae({
}
,s),{
errorRetry:null,timeoutRetry:null}
)}
function Oa(s,e,t,i){
if(!s)return!1;
const n=i==null?void 0:i.code,r=e<s.maxNumRetry&&(aE(n)||!!t);
return s.shouldRetry?s.shouldRetry(s,e,t,i,r):r}
function aE(s){
return ru(s)||!!s&&(s<400||s>499)}
function ru(s){
return s===0&&navigator.onLine===!1}
var Ue={
DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5}
,ot={
None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,MoveAllAlternatesMatchingKey:4,SwitchToSDR:8}
;
class oE extends _t{
constructor(e){
super("error-controller",e.logger),this.hls=void 0,this.playlistError=0,this.hls=e,this.registerListeners()}
registerListeners(){
const e=this.hls;
e.on(x.ERROR,this.onError,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this)}
unregisterListeners(){
const e=this.hls;
e&&(e.off(x.ERROR,this.onError,this),e.off(x.ERROR,this.onErrorOut,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this))}
destroy(){
this.unregisterListeners(),this.hls=null}
startLoad(e){
}
stopLoad(){
this.playlistError=0}
getVariantLevelIndex(e){
return(e==null?void 0:e.type)===H.MAIN?e.level:this.getVariantIndex()}
getVariantIndex(){
var e;
const t=this.hls,i=t.currentLevel;
return(e=t.loadLevelObj)!=null&&e.details||i===-1?t.loadLevel:i}
variantHasKey(e,t){
if(e){
var i;
if((i=e.details)!=null&&i.hasKey(t))return!0;
const n=e.audioGroups;
if(n)return this.hls.allAudioTracks.filter(a=>n.indexOf(a.groupId)>=0).some(a=>{
var o;
return(o=a.details)==null?void 0:o.hasKey(t)}
)}
return!1}
onManifestLoading(){
this.playlistError=0}
onLevelUpdated(){
this.playlistError=0}
onError(e,t){
var i;
if(t.fatal)return;
const n=this.hls,r=t.context;
switch(t.details){
case b.FRAG_LOAD_ERROR:case b.FRAG_LOAD_TIMEOUT:case b.KEY_LOAD_ERROR:case b.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);
return;
case b.FRAG_PARSING_ERROR:if((i=t.frag)!=null&&i.gap){
t.errorAction=Mi();
return}
case b.FRAG_GAP:case b.FRAG_DECRYPT_ERROR:{
t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=Ue.SendAlternateToPenaltyBox;
return}
case b.LEVEL_EMPTY_ERROR:case b.LEVEL_PARSING_ERROR:{
var a;
const u=t.parent===H.MAIN?t.level:n.loadLevel;
t.details===b.LEVEL_EMPTY_ERROR&&((a=t.context)!=null&&(a=a.levelDetails)!=null&&a.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,u):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,u))}
return;
case b.LEVEL_LOAD_ERROR:case b.LEVEL_LOAD_TIMEOUT:typeof(r==null?void 0:r.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,r.level));
return;
case b.AUDIO_TRACK_LOAD_ERROR:case b.AUDIO_TRACK_LOAD_TIMEOUT:case b.SUBTITLE_LOAD_ERROR:case b.SUBTITLE_TRACK_LOAD_TIMEOUT:if(r){
const u=n.loadLevelObj;
if(u&&(r.type===se.AUDIO_TRACK&&u.hasAudioGroup(r.groupId)||r.type===se.SUBTITLE_TRACK&&u.hasSubtitleGroup(r.groupId))){
t.errorAction=this.getPlaylistRetryOrSwitchAction(t,n.loadLevel),t.errorAction.action=Ue.SendAlternateToPenaltyBox,t.errorAction.flags=ot.MoveAllAlternatesMatchingHost;
return}
}
return;
case b.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:t.errorAction={
action:Ue.SendAlternateToPenaltyBox,flags:ot.MoveAllAlternatesMatchingHDCP}
;
return;
case b.KEY_SYSTEM_SESSION_UPDATE_FAILED:case b.KEY_SYSTEM_STATUS_INTERNAL_ERROR:case b.KEY_SYSTEM_NO_SESSION:t.errorAction={
action:Ue.SendAlternateToPenaltyBox,flags:ot.MoveAllAlternatesMatchingKey}
;
return;
case b.BUFFER_ADD_CODEC_ERROR:case b.REMUX_ALLOC_ERROR:case b.BUFFER_APPEND_ERROR:if(!t.errorAction){
var o;
t.errorAction=this.getLevelSwitchAction(t,(o=t.level)!=null?o:n.loadLevel)}
return;
case b.INTERNAL_EXCEPTION:case b.BUFFER_APPENDING_ERROR:case b.BUFFER_FULL_ERROR:case b.LEVEL_SWITCH_ERROR:case b.BUFFER_STALLED_ERROR:case b.BUFFER_SEEK_OVER_HOLE:case b.BUFFER_NUDGE_ON_STALL:t.errorAction=Mi();
return}
t.type===Y.KEY_SYSTEM_ERROR&&(t.levelRetry=!1,t.errorAction=Mi())}
getPlaylistRetryOrSwitchAction(e,t){
const i=this.hls,n=gh(i.config.playlistLoadPolicy,e),r=this.playlistError++;
if(Oa(n,r,Na(e),e.response))return{
action:Ue.RetryRequest,flags:ot.None,retryConfig:n,retryCount:r}
;
const o=this.getLevelSwitchAction(e,t);
return n&&(o.retryConfig=n,o.retryCount=r),o}
getFragRetryOrSwitchAction(e){
const t=this.hls,i=this.getVariantLevelIndex(e.frag),n=t.levels[i],{
fragLoadPolicy:r,keyLoadPolicy:a}
=t.config,o=gh(tg(e)?a:r,e),u=t.levels.reduce((c,d)=>c+d.fragmentError,0);
if(n&&(e.details!==b.FRAG_GAP&&n.fragmentError++,!sg(e)&&Oa(o,u,Na(e),e.response)))return{
action:Ue.RetryRequest,flags:ot.None,retryConfig:o,retryCount:u}
;
const l=this.getLevelSwitchAction(e,i);
return o&&(l.retryConfig=o,l.retryCount=u),l}
getLevelSwitchAction(e,t){
const i=this.hls;
t==null&&(t=i.loadLevel);
const n=this.hls.levels[t];
if(n){
var r,a;
const l=e.details;
n.loadError++,l===b.BUFFER_APPEND_ERROR&&n.fragmentError++;
let c=-1;
const{
levels:d,loadLevel:h,minAutoLevel:f,maxAutoLevel:m}
=i;
!i.autoLevelEnabled&&!i.config.preserveManualLevelOnError&&(i.loadLevel=-1);
const p=(r=e.frag)==null?void 0:r.type,v=(p===H.AUDIO&&l===b.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(l===b.BUFFER_ADD_CODEC_ERROR||l===b.BUFFER_APPEND_ERROR))&&d.some(({
audioCodec:_}
)=>n.audioCodec!==_),S=e.sourceBufferName==="video"&&(l===b.BUFFER_ADD_CODEC_ERROR||l===b.BUFFER_APPEND_ERROR)&&d.some(({
codecSet:_,audioCodec:L}
)=>n.codecSet!==_&&n.audioCodec===L),{
type:T,groupId:I}
=(a=e.context)!=null?a:{
}
;
for(let _=d.length;
_--;
){
const L=(_+h)%d.length;
if(L!==h&&L>=f&&L<=m&&d[L].loadError===0){
var o,u;
const R=d[L];
if(l===b.FRAG_GAP&&p===H.MAIN&&e.frag){
const w=d[L].details;
if(w){
const A=ai(e.frag,w.fragments,e.frag.start);
if(A!=null&&A.gap)continue}
}
else{
if(T===se.AUDIO_TRACK&&R.hasAudioGroup(I)||T===se.SUBTITLE_TRACK&&R.hasSubtitleGroup(I))continue;
if(p===H.AUDIO&&(o=n.audioGroups)!=null&&o.some(w=>R.hasAudioGroup(w))||p===H.SUBTITLE&&(u=n.subtitleGroups)!=null&&u.some(w=>R.hasSubtitleGroup(w))||v&&n.audioCodec===R.audioCodec||S&&n.codecSet===R.codecSet||!v&&n.codecSet!==R.codecSet)continue}
c=L;
break}
}
if(c>-1&&i.loadLevel!==c)return e.levelRetry=!0,this.playlistError=0,{
action:Ue.SendAlternateToPenaltyBox,flags:ot.None,nextAutoLevel:c}
}
return{
action:Ue.SendAlternateToPenaltyBox,flags:ot.MoveAllAlternatesMatchingHost}
}
onErrorOut(e,t){
var i;
switch((i=t.errorAction)==null?void 0:i.action){
case Ue.DoNothing:break;
case Ue.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==b.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${
t.sourceBufferName}
" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());
break}
if(t.fatal){
this.hls.stopLoad();
return}
}
sendAlternateToPenaltyBox(e){
const t=this.hls,i=e.errorAction;
if(!i)return;
const{
flags:n}
=i,r=i.nextAutoLevel;
switch(n){
case ot.None:this.switchLevel(e,r);
break;
case ot.MoveAllAlternatesMatchingHDCP:{
const u=this.getVariantLevelIndex(e.frag),l=t.levels[u],c=l==null?void 0:l.attrs["HDCP-LEVEL"];
if(i.hdcpLevel=c,c==="NONE")this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
else if(c){
t.maxHdcpLevel=nu[nu.indexOf(c)-1],i.resolved=!0,this.warn(`Restricting playback to HDCP-LEVEL of "${
t.maxHdcpLevel}
" or lower`);
break}
}
case ot.MoveAllAlternatesMatchingKey:{
const u=e.decryptdata;
if(u){
const l=this.hls.levels,c=l.length;
for(let h=c;
h--;
)if(this.variantHasKey(l[h],u)){
var a,o;
this.log(`Banned key found in level ${
h}
 (${
l[h].bitrate}
bps) or audio group "${
(a=l[h].audioGroups)==null?void 0:a.join(",")}
" (${
(o=e.frag)==null?void 0:o.type}
 fragment) ${
Be(u.keyId||[])}
`),l[h].fragmentError++,l[h].loadError++,this.log(`Removing level ${
h}
 with key error (${
e.error}
)`),this.hls.removeLevel(h)}
const d=e.frag;
if(this.hls.levels.length<c)i.resolved=!0;
else if(d&&d.type!==H.MAIN){
const h=d.decryptdata;
h&&!u.matches(h)&&(i.resolved=!0)}
}
break}
}
i.resolved||this.switchLevel(e,r)}
switchLevel(e,t){
if(t!==void 0&&e.errorAction&&(this.warn(`switching to level ${
t}
 after ${
e.details}
`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel,e.details===b.BUFFER_ADD_CODEC_ERROR&&e.mimeType&&e.sourceBufferName!=="audiovideo")){
const i=iu(e.mimeType),n=this.hls.levels;
for(let r=n.length;
r--;
)n[r][`${
e.sourceBufferName}
Codec`]===i&&(this.log(`Removing level ${
r}
 for ${
e.details}
 ("${
i}
" not supported)`),this.hls.removeLevel(r))}
}
}
function Mi(s){
const e={
action:Ue.DoNothing,flags:ot.None}
;
return s&&(e.resolved=!0),e}
var be={
NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"}
;
class lE{
constructor(e){
this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}
_registerListeners(){
const{
hls:e}
=this;
e&&(e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.BUFFER_APPENDED,this.onBufferAppended,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this),e.on(x.FRAG_LOADED,this.onFragLoaded,this))}
_unregisterListeners(){
const{
hls:e}
=this;
e&&(e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.BUFFER_APPENDED,this.onBufferAppended,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this),e.off(x.FRAG_LOADED,this.onFragLoaded,this))}
destroy(){
this._unregisterListeners(),this.hls=this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}
getAppendedFrag(e,t){
const i=this.activePartLists[t];
if(i)for(let n=i.length;
n--;
){
const r=i[n];
if(!r)break;
if(r.start<=e&&e<=r.end&&r.loaded)return r}
return this.getBufferedFrag(e,t)}
getBufferedFrag(e,t){
return this.getFragAtPos(e,t,!0)}
getFragAtPos(e,t,i){
const{
fragments:n}
=this,r=Object.keys(n);
for(let a=r.length;
a--;
){
const o=n[r[a]];
if((o==null?void 0:o.body.type)===t&&(!i||o.buffered)){
const u=o.body;
if(u.start<=e&&e<=u.end)return u}
}
return null}
detectEvictedFragments(e,t,i,n,r){
this.timeRanges&&(this.timeRanges[e]=t);
const a=(n==null?void 0:n.fragment.sn)||-1;
Object.keys(this.fragments).forEach(o=>{
const u=this.fragments[o];
if(!u||a>=u.body.sn)return;
if(!u.buffered&&(!u.loaded||r)){
u.body.type===i&&this.removeFragment(u.body);
return}
const l=u.range[e];
if(l){
if(l.time.length===0){
this.removeFragment(u.body);
return}
l.time.some(c=>{
const d=!this.isTimeBuffered(c.startPTS,c.endPTS,t);
return d&&this.removeFragment(u.body),d}
)}
}
)}
detectPartialFragments(e){
const t=this.timeRanges;
if(!t||e.frag.sn==="initSegment")return;
const i=e.frag,n=hi(i),r=this.fragments[n];
if(!r||r.buffered&&i.gap)return;
const a=!i.relurl;
Object.keys(t).forEach(o=>{
const u=i.elementaryStreams[o];
if(!u)return;
const l=t[o],c=a||u.partial===!0;
r.range[o]=this.getBufferedTimes(i,e.part,c,l)}
),r.loaded=null,Object.keys(r.range).length?(this.bufferedEnd(r,i),Ar(r)||this.removeParts(i.sn-1,i.type)):this.removeFragment(r.body)}
bufferedEnd(e,t){
e.buffered=!0,(e.body.endList=t.endList||e.body.endList)&&(this.endListFragments[e.body.type]=e)}
removeParts(e,t){
const i=this.activePartLists[t];
i&&(this.activePartLists[t]=yh(i,n=>n.fragment.sn>=e))}
fragBuffered(e,t){
const i=hi(e);
let n=this.fragments[i];
!n&&t&&(n=this.fragments[i]={
body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)}
,e.gap&&(this.hasGaps=!0)),n&&(n.loaded=null,this.bufferedEnd(n,e))}
getBufferedTimes(e,t,i,n){
const r={
time:[],partial:i}
,a=e.start,o=e.end,u=e.minEndPTS||o,l=e.maxStartPTS||a;
for(let c=0;
c<n.length;
c++){
const d=n.start(c)-this.bufferPadding,h=n.end(c)+this.bufferPadding;
if(l>=d&&u<=h){
r.time.push({
startPTS:Math.max(a,n.start(c)),endPTS:Math.min(o,n.end(c))}
);
break}
else if(a<h&&o>d){
const f=Math.max(a,n.start(c)),m=Math.min(o,n.end(c));
m>f&&(r.partial=!0,r.time.push({
startPTS:f,endPTS:m}
))}
else if(o<=d)break}
return r}
getPartialFragment(e){
let t=null,i,n,r,a=0;
const{
bufferPadding:o,fragments:u}
=this;
return Object.keys(u).forEach(l=>{
const c=u[l];
c&&Ar(c)&&(n=c.body.start-o,r=c.body.end+o,e>=n&&e<=r&&(i=Math.min(e-n,r-e),a<=i&&(t=c.body,a=i)))}
),t}
isEndListAppended(e){
const t=this.endListFragments[e];
return t!==void 0&&(t.buffered||Ar(t))}
getState(e){
const t=hi(e),i=this.fragments[t];
return i?i.buffered?Ar(i)?be.PARTIAL:be.OK:be.APPENDING:be.NOT_LOADED}
isTimeBuffered(e,t,i){
let n,r;
for(let a=0;
a<i.length;
a++){
if(n=i.start(a)-this.bufferPadding,r=i.end(a)+this.bufferPadding,e>=n&&t<=r)return!0;
if(t<=n)return!1}
return!1}
onManifestLoading(){
this.removeAllFragments()}
onFragLoaded(e,t){
if(t.frag.sn==="initSegment"||t.frag.bitrateTest)return;
const i=t.frag,n=t.part?null:t,r=hi(i);
this.fragments[r]={
body:i,appendedPTS:null,loaded:n,buffered:!1,range:Object.create(null)}
}
onBufferAppended(e,t){
const{
frag:i,part:n,timeRanges:r,type:a}
=t;
if(i.sn==="initSegment")return;
const o=i.type;
if(n){
let l=this.activePartLists[o];
l||(this.activePartLists[o]=l=[]),l.push(n)}
this.timeRanges=r;
const u=r[a];
this.detectEvictedFragments(a,u,o,n)}
onFragBuffered(e,t){
this.detectPartialFragments(t)}
hasFragment(e){
const t=hi(e);
return!!this.fragments[t]}
hasFragments(e){
const{
fragments:t}
=this,i=Object.keys(t);
if(!e)return i.length>0;
for(let n=i.length;
n--;
){
const r=t[i[n]];
if((r==null?void 0:r.body.type)===e)return!0}
return!1}
hasParts(e){
var t;
return!!((t=this.activePartLists[e])!=null&&t.length)}
removeFragmentsInRange(e,t,i,n,r){
n&&!this.hasGaps||Object.keys(this.fragments).forEach(a=>{
const o=this.fragments[a];
if(!o)return;
const u=o.body;
u.type!==i||n&&!u.gap||u.start<t&&u.end>e&&(o.buffered||r)&&this.removeFragment(u)}
)}
removeFragment(e){
const t=hi(e);
e.clearElementaryStreamInfo();
const i=this.activePartLists[e.type];
if(i){
const n=e.sn;
this.activePartLists[e.type]=yh(i,r=>r.fragment.sn!==n)}
delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}
removeAllFragments(){
var e;
this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1;
const t=(e=this.hls)==null||(e=e.latestLevelDetails)==null?void 0:e.partList;
t&&t.forEach(i=>i.clearElementaryStreamInfo())}
}
function Ar(s){
var e,t,i;
return s.buffered&&!!(s.body.gap||(e=s.range.video)!=null&&e.partial||(t=s.range.audio)!=null&&t.partial||(i=s.range.audiovideo)!=null&&i.partial)}
function hi(s){
return`${
s.type}
_${
s.level}
_${
s.sn}
`}
function yh(s,e){
return s.filter(t=>{
const i=e(t);
return i||t.clearElementaryStreamInfo(),i}
)}
var Ms={
cbc:0,ctr:1}
;
class uE{
constructor(e,t,i){
this.subtle=void 0,this.aesIV=void 0,this.aesMode=void 0,this.subtle=e,this.aesIV=t,this.aesMode=i}
decrypt(e,t){
switch(this.aesMode){
case Ms.cbc:return this.subtle.decrypt({
name:"AES-CBC",iv:this.aesIV}
,t,e);
case Ms.ctr:return this.subtle.decrypt({
name:"AES-CTR",counter:this.aesIV,length:64}
,t,e);
default:throw new Error(`[AESCrypto] invalid aes mode ${
this.aesMode}
`)}
}
}
function cE(s){
const e=s.byteLength,t=e&&new DataView(s.buffer).getUint8(e-1);
return t?s.slice(0,e-t):s}
class dE{
constructor(){
this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}
uint8ArrayToUint32Array_(e){
const t=new DataView(e),i=new Uint32Array(4);
for(let n=0;
n<4;
n++)i[n]=t.getUint32(n*4);
return i}
initTable(){
const e=this.sBox,t=this.invSBox,i=this.subMix,n=i[0],r=i[1],a=i[2],o=i[3],u=this.invSubMix,l=u[0],c=u[1],d=u[2],h=u[3],f=new Uint32Array(256);
let m=0,p=0,E=0;
for(E=0;
E<256;
E++)E<128?f[E]=E<<1:f[E]=E<<1^283;
for(E=0;
E<256;
E++){
let v=p^p<<1^p<<2^p<<3^p<<4;
v=v>>>8^v&255^99,e[m]=v,t[v]=m;
const y=f[m],S=f[y],T=f[S];
let I=f[v]*257^v*16843008;
n[m]=I<<24|I>>>8,r[m]=I<<16|I>>>16,a[m]=I<<8|I>>>24,o[m]=I,I=T*16843009^S*65537^y*257^m*16843008,l[v]=I<<24|I>>>8,c[v]=I<<16|I>>>16,d[v]=I<<8|I>>>24,h[v]=I,m?(m=y^f[f[f[T^y]]],p^=f[f[p]]):m=p=1}
}
expandKey(e){
const t=this.uint8ArrayToUint32Array_(e);
let i=!0,n=0;
for(;
n<t.length&&i;
)i=t[n]===this.key[n],n++;
if(i)return;
this.key=t;
const r=this.keySize=t.length;
if(r!==4&&r!==6&&r!==8)throw new Error("Invalid aes key size="+r);
const a=this.ksRows=(r+6+1)*4;
let o,u;
const l=this.keySchedule=new Uint32Array(a),c=this.invKeySchedule=new Uint32Array(a),d=this.sBox,h=this.rcon,f=this.invSubMix,m=f[0],p=f[1],E=f[2],v=f[3];
let y,S;
for(o=0;
o<a;
o++){
if(o<r){
y=l[o]=t[o];
continue}
S=y,o%r===0?(S=S<<8|S>>>24,S=d[S>>>24]<<24|d[S>>>16&255]<<16|d[S>>>8&255]<<8|d[S&255],S^=h[o/r|0]<<24):r>6&&o%r===4&&(S=d[S>>>24]<<24|d[S>>>16&255]<<16|d[S>>>8&255]<<8|d[S&255]),l[o]=y=(l[o-r]^S)>>>0}
for(u=0;
u<a;
u++)o=a-u,u&3?S=l[o]:S=l[o-4],u<4||o<=4?c[u]=S:c[u]=m[d[S>>>24]]^p[d[S>>>16&255]]^E[d[S>>>8&255]]^v[d[S&255]],c[u]=c[u]>>>0}
networkToHostOrderSwap(e){
return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}
decrypt(e,t,i){
const n=this.keySize+6,r=this.invKeySchedule,a=this.invSBox,o=this.invSubMix,u=o[0],l=o[1],c=o[2],d=o[3],h=this.uint8ArrayToUint32Array_(i);
let f=h[0],m=h[1],p=h[2],E=h[3];
const v=new Int32Array(e),y=new Int32Array(v.length);
let S,T,I,_,L,R,w,A,D,$,G,W,V,U;
const K=this.networkToHostOrderSwap;
for(;
t<v.length;
){
for(D=K(v[t]),$=K(v[t+1]),G=K(v[t+2]),W=K(v[t+3]),L=D^r[0],R=W^r[1],w=G^r[2],A=$^r[3],V=4,U=1;
U<n;
U++)S=u[L>>>24]^l[R>>16&255]^c[w>>8&255]^d[A&255]^r[V],T=u[R>>>24]^l[w>>16&255]^c[A>>8&255]^d[L&255]^r[V+1],I=u[w>>>24]^l[A>>16&255]^c[L>>8&255]^d[R&255]^r[V+2],_=u[A>>>24]^l[L>>16&255]^c[R>>8&255]^d[w&255]^r[V+3],L=S,R=T,w=I,A=_,V=V+4;
S=a[L>>>24]<<24^a[R>>16&255]<<16^a[w>>8&255]<<8^a[A&255]^r[V],T=a[R>>>24]<<24^a[w>>16&255]<<16^a[A>>8&255]<<8^a[L&255]^r[V+1],I=a[w>>>24]<<24^a[A>>16&255]<<16^a[L>>8&255]<<8^a[R&255]^r[V+2],_=a[A>>>24]<<24^a[L>>16&255]<<16^a[R>>8&255]<<8^a[w&255]^r[V+3],y[t]=K(S^f),y[t+1]=K(_^m),y[t+2]=K(I^p),y[t+3]=K(T^E),f=D,m=$,p=G,E=W,t=t+4}
return y.buffer}
}
class hE{
constructor(e,t,i){
this.subtle=void 0,this.key=void 0,this.aesMode=void 0,this.subtle=e,this.key=t,this.aesMode=i}
expandKey(){
const e=fE(this.aesMode);
return this.subtle.importKey("raw",this.key,{
name:e}
,!1,["encrypt","decrypt"])}
}
function fE(s){
switch(s){
case Ms.cbc:return"AES-CBC";
case Ms.ctr:return"AES-CTR";
default:throw new Error(`[FastAESKey] invalid aes mode ${
s}
`)}
}
const mE=16;
class Sc{
constructor(e,{
removePKCS7Padding:t=!0}
={
}
){
if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.enableSoftwareAES=void 0,this.enableSoftwareAES=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{
const i=self.crypto;
i&&(this.subtle=i.subtle||i.webkitSubtle)}
catch{
}
this.useSoftware=!this.subtle}
destroy(){
this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}
isSync(){
return this.useSoftware}
flush(){
const{
currentResult:e,remainderData:t}
=this;
if(!e||t)return this.reset(),null;
const i=new Uint8Array(e);
return this.reset(),this.removePKCS7Padding?cE(i):i}
reset(){
this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}
decrypt(e,t,i,n){
return this.useSoftware?new Promise((r,a)=>{
const o=ArrayBuffer.isView(e)?e:new Uint8Array(e);
this.softwareDecrypt(o,t,i,n);
const u=this.flush();
u?r(u.buffer):a(new Error("[softwareDecrypt] Failed to decrypt data"))}
):this.webCryptoDecrypt(new Uint8Array(e),t,i,n)}
softwareDecrypt(e,t,i,n){
const{
currentIV:r,currentResult:a,remainderData:o}
=this;
if(n!==Ms.cbc||t.byteLength!==16)return oe.warn("SoftwareDecrypt: can only handle AES-128-CBC"),null;
this.logOnce("JS AES decrypt"),o&&(e=Rt(o,e),this.remainderData=null);
const u=this.getValidChunk(e);
if(!u.length)return null;
r&&(i=r);
let l=this.softwareDecrypter;
l||(l=this.softwareDecrypter=new dE),l.expandKey(t);
const c=a;
return this.currentResult=l.decrypt(u.buffer,0,i),this.currentIV=u.slice(-16).buffer,c||null}
webCryptoDecrypt(e,t,i,n){
if(this.key!==t||!this.fastAesKey){
if(!this.subtle)return Promise.resolve(this.onWebCryptoError(e,t,i,n));
this.key=t,this.fastAesKey=new hE(this.subtle,t,n)}
return this.fastAesKey.expandKey().then(r=>this.subtle?(this.logOnce("WebCrypto AES decrypt"),new uE(this.subtle,new Uint8Array(i),n).decrypt(e.buffer,r)):Promise.reject(new Error("web crypto not initialized"))).catch(r=>(oe.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${
r.name}
: ${
r.message}
`),this.onWebCryptoError(e,t,i,n)))}
onWebCryptoError(e,t,i,n){
const r=this.enableSoftwareAES;
if(r){
this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,i,n);
const a=this.flush();
if(a)return a.buffer}
throw new Error("WebCrypto"+(r?" and softwareDecrypt":"")+": failed to decrypt data")}
getValidChunk(e){
let t=e;
const i=e.length-e.length%mE;
return i!==e.length&&(t=e.slice(0,i),this.remainderData=e.slice(i)),t}
logOnce(e){
this.logEnabled&&(oe.log(`[decrypter]: ${
e}
`),this.logEnabled=!1)}
}
const vh=Math.pow(2,17);
class gE{
constructor(e){
this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}
destroy(){
this.loader&&(this.loader.destroy(),this.loader=null)}
abort(){
this.loader&&this.loader.abort()}
load(e,t){
const i=e.url;
if(!i)return Promise.reject(new ts({
type:Y.NETWORK_ERROR,details:b.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${
i?"part list":"url"}
`),networkDetails:null}
));
this.abort();
const n=this.config,r=n.fLoader,a=n.loader;
return new Promise((o,u)=>{
if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(m=>m[0]==="GAP")){
u(Eh(e));
return}
else e.gap=!1;
const l=this.loader=r?new r(n):new a(n),c=xh(e);
e.loader=l;
const d=ph(n.fragLoadPolicy.default),h={
loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:vh}
;
e.stats=l.stats;
const f={
onSuccess:(m,p,E,v)=>{
this.resetLoader(e,l);
let y=m.data;
E.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(y.slice(0,16)),y=y.slice(16)),o({
frag:e,part:null,payload:y,networkDetails:v}
)}
,onError:(m,p,E,v)=>{
this.resetLoader(e,l),u(new ts({
type:Y.NETWORK_ERROR,details:b.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:ae({
url:i,data:void 0}
,m),error:new Error(`HTTP Error ${
m.code}
 ${
m.text}
`),networkDetails:E,stats:v}
))}
,onAbort:(m,p,E)=>{
this.resetLoader(e,l),u(new ts({
type:Y.NETWORK_ERROR,details:b.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:E,stats:m}
))}
,onTimeout:(m,p,E)=>{
this.resetLoader(e,l),u(new ts({
type:Y.NETWORK_ERROR,details:b.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${
h.timeout}
ms`),networkDetails:E,stats:m}
))}
}
;
t&&(f.onProgress=(m,p,E,v)=>t({
frag:e,part:null,payload:E,networkDetails:v}
)),l.load(c,h,f)}
)}
loadPart(e,t,i){
this.abort();
const n=this.config,r=n.fLoader,a=n.loader;
return new Promise((o,u)=>{
if(this.loader&&this.loader.destroy(),e.gap||t.gap){
u(Eh(e,t));
return}
const l=this.loader=r?new r(n):new a(n),c=xh(e,t);
e.loader=l;
const d=ph(n.fragLoadPolicy.default),h={
loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:vh}
;
t.stats=l.stats,l.load(c,h,{
onSuccess:(f,m,p,E)=>{
this.resetLoader(e,l),this.updateStatsFromPart(e,t);
const v={
frag:e,part:t,payload:f.data,networkDetails:E}
;
i(v),o(v)}
,onError:(f,m,p,E)=>{
this.resetLoader(e,l),u(new ts({
type:Y.NETWORK_ERROR,details:b.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:ae({
url:c.url,data:void 0}
,f),error:new Error(`HTTP Error ${
f.code}
 ${
f.text}
`),networkDetails:p,stats:E}
))}
,onAbort:(f,m,p)=>{
e.stats.aborted=t.stats.aborted,this.resetLoader(e,l),u(new ts({
type:Y.NETWORK_ERROR,details:b.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:p,stats:f}
))}
,onTimeout:(f,m,p)=>{
this.resetLoader(e,l),u(new ts({
type:Y.NETWORK_ERROR,details:b.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${
h.timeout}
ms`),networkDetails:p,stats:f}
))}
}
)}
)}
updateStatsFromPart(e,t){
const i=e.stats,n=t.stats,r=n.total;
if(i.loaded+=n.loaded,r){
const u=Math.round(e.duration/t.duration),l=Math.min(Math.round(i.loaded/r),u),d=(u-l)*Math.round(i.loaded/l);
i.total=i.loaded+d}
else i.total=Math.max(i.loaded,i.total);
const a=i.loading,o=n.loading;
a.start?a.first+=o.first-o.start:(a.start=o.start,a.first=o.first),a.end=o.end}
resetLoader(e,t){
e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}
}
function xh(s,e=null){
const t=e||s,i={
frag:s,part:e,responseType:"arraybuffer",url:t.url,headers:{
}
,rangeStart:0,rangeEnd:0}
,n=t.byteRangeStartOffset,r=t.byteRangeEndOffset;
if(j(n)&&j(r)){
var a;
let o=n,u=r;
if(s.sn==="initSegment"&&pE((a=s.decryptdata)==null?void 0:a.method)){
const l=r-n;
l%16&&(u=r+(16-l%16)),n!==0&&(i.resetIV=!0,o=n-16)}
i.rangeStart=o,i.rangeEnd=u}
return i}
function Eh(s,e){
const t=new Error(`GAP ${
s.gap?"tag":"attribute"}
 found`),i={
type:Y.MEDIA_ERROR,details:b.FRAG_GAP,fatal:!1,frag:s,error:t,networkDetails:null}
;
return e&&(i.part=e),(e||s).stats.aborted=!0,new ts(i)}
function pE(s){
return s==="AES-128"||s==="AES-256"}
class ts extends Error{
constructor(e){
super(e.error.message),this.data=void 0,this.data=e}
}
class ig extends _t{
constructor(e,t){
super(e,t),this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}
destroy(){
this.onHandlerDestroying(),this.onHandlerDestroyed()}
onHandlerDestroying(){
this.clearNextTick(),this.clearInterval()}
onHandlerDestroyed(){
}
hasInterval(){
return!!this._tickInterval}
hasNextTick(){
return!!this._tickTimer}
setInterval(e){
return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}
clearInterval(){
return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}
clearNextTick(){
return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}
tick(){
this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}
tickImmediate(){
this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}
doTick(){
}
}
class Tc{
constructor(e,t,i,n=0,r=-1,a=!1){
this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=Rr(),this.buffering={
audio:Rr(),video:Rr(),audiovideo:Rr()}
,this.level=e,this.sn=t,this.id=i,this.size=n,this.part=r,this.partial=a}
}
function Rr(){
return{
start:0,executeStart:0,executeEnd:0,end:0}
}
const Sh={
length:0,start:()=>0,end:()=>0}
;
class X{
static isBuffered(e,t){
if(e){
const i=X.getBuffered(e);
for(let n=i.length;
n--;
)if(t>=i.start(n)&&t<=i.end(n))return!0}
return!1}
static bufferedRanges(e){
if(e){
const t=X.getBuffered(e);
return X.timeRangesToArray(t)}
return[]}
static timeRangesToArray(e){
const t=[];
for(let i=0;
i<e.length;
i++)t.push({
start:e.start(i),end:e.end(i)}
);
return t}
static bufferInfo(e,t,i){
if(e){
const n=X.bufferedRanges(e);
if(n.length)return X.bufferedInfo(n,t,i)}
return{
len:0,start:t,end:t,bufferedIndex:-1}
}
static bufferedInfo(e,t,i){
t=Math.max(0,t),e.length>1&&e.sort((c,d)=>c.start-d.start||d.end-c.end);
let n=-1,r=[];
if(i)for(let c=0;
c<e.length;
c++){
t>=e[c].start&&t<=e[c].end&&(n=c);
const d=r.length;
if(d){
const h=r[d-1].end;
e[c].start-h<i?e[c].end>h&&(r[d-1].end=e[c].end):r.push(e[c])}
else r.push(e[c])}
else r=e;
let a=0,o,u=t,l=t;
for(let c=0;
c<r.length;
c++){
const d=r[c].start,h=r[c].end;
if(n===-1&&t>=d&&t<=h&&(n=c),t+i>=d&&t<h)u=d,l=h,a=l-t;
else if(t+i<d){
o=d;
break}
}
return{
len:a,start:u||0,end:l||0,nextStart:o,buffered:e,bufferedIndex:n}
}
static getBuffered(e){
try{
return e.buffered||Sh}
catch(t){
return oe.log("failed to get media.buffered",t),Sh}
}
}
const ng=/\{
\$([a-zA-Z0-9-_]+)\}
/g;
function Th(s){
return ng.test(s)}
function au(s,e){
if(s.variableList!==null||s.hasVariableRefs){
const t=s.variableList;
return e.replace(ng,i=>{
const n=i.substring(2,i.length-1),r=t==null?void 0:t[n];
return r===void 0?(s.playlistParsingError||(s.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${
n}
"`)),i):r}
)}
return e}
function Ih(s,e,t){
let i=s.variableList;
i||(s.variableList=i={
}
);
let n,r;
if("QUERYPARAM"in e){
n=e.QUERYPARAM;
try{
const a=new self.URL(t).searchParams;
if(a.has(n))r=a.get(n);
else throw new Error(`"${
n}
" does not match any query parameter in URI: "${
t}
"`)}
catch(a){
s.playlistParsingError||(s.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${
a.message}
`))}
}
else n=e.NAME,r=e.VALUE;
n in i?s.playlistParsingError||(s.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${
n}
"`)):i[n]=r||""}
function yE(s,e,t){
const i=e.IMPORT;
if(t&&i in t){
let n=s.variableList;
n||(s.variableList=n={
}
),n[i]=t[i]}
else s.playlistParsingError||(s.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${
i}
"`))}
const vE=/^(\d+)x(\d+)$/,Lh=/(.+?)=(".*?"|.*?)(?:,|$)/g;
class pe{
constructor(e,t){
typeof e=="string"&&(e=pe.parseAttrList(e,t)),ue(this,e)}
get clientAttrs(){
return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}
decimalInteger(e){
const t=parseInt(this[e],10);
return t>Number.MAX_SAFE_INTEGER?1/0:t}
hexadecimalInteger(e){
if(this[e]){
let t=(this[e]||"0x").slice(2);
t=(t.length&1?"0":"")+t;
const i=new Uint8Array(t.length/2);
for(let n=0;
n<t.length/2;
n++)i[n]=parseInt(t.slice(n*2,n*2+2),16);
return i}
return null}
hexadecimalIntegerAsNumber(e){
const t=parseInt(this[e],16);
return t>Number.MAX_SAFE_INTEGER?1/0:t}
decimalFloatingPoint(e){
return parseFloat(this[e])}
optionalFloat(e,t){
const i=this[e];
return i?parseFloat(i):t}
enumeratedString(e){
return this[e]}
enumeratedStringList(e,t){
const i=this[e];
return(i?i.split(/[ ,]+/):[]).reduce((n,r)=>(n[r.toLowerCase()]=!0,n),t)}
bool(e){
return this[e]==="YES"}
decimalResolution(e){
const t=vE.exec(this[e]);
if(t!==null)return{
width:parseInt(t[1],10),height:parseInt(t[2],10)}
}
static parseAttrList(e,t){
let i;
const n={
}
,r='"';
for(Lh.lastIndex=0;
(i=Lh.exec(e))!==null;
){
const a=i[1].trim();
let o=i[2];
const u=o.indexOf(r)===0&&o.lastIndexOf(r)===o.length-1;
let l=!1;
if(u)o=o.slice(1,-1);
else switch(a){
case"IV":case"SCTE35-CMD":case"SCTE35-IN":case"SCTE35-OUT":l=!0}
if(t&&(u||l))o=au(t,o);
else if(!l&&!u)switch(a){
case"CLOSED-CAPTIONS":if(o==="NONE")break;
case"ALLOWED-CPC":case"CLASS":case"ASSOC-LANGUAGE":case"AUDIO":case"BYTERANGE":case"CHANNELS":case"CHARACTERISTICS":case"CODECS":case"DATA-ID":case"END-DATE":case"GROUP-ID":case"ID":case"IMPORT":case"INSTREAM-ID":case"KEYFORMAT":case"KEYFORMATVERSIONS":case"LANGUAGE":case"NAME":case"PATHWAY-ID":case"QUERYPARAM":case"RECENTLY-REMOVED-DATERANGES":case"SERVER-URI":case"STABLE-RENDITION-ID":case"STABLE-VARIANT-ID":case"START-DATE":case"SUBTITLES":case"SUPPLEMENTAL-CODECS":case"URI":case"VALUE":case"VIDEO":case"X-ASSET-LIST":case"X-ASSET-URI":oe.warn(`${
e}
: attribute ${
a}
 is missing quotes`)}
n[a]=o}
return n}
}
const xE="com.apple.hls.interstitial";
function EE(s){
return s!=="ID"&&s!=="CLASS"&&s!=="CUE"&&s!=="START-DATE"&&s!=="DURATION"&&s!=="END-DATE"&&s!=="END-ON-NEXT"}
function SE(s){
return s==="SCTE35-OUT"||s==="SCTE35-IN"||s==="SCTE35-CMD"}
class rg{
constructor(e,t,i=0){
var n;
if(this.attr=void 0,this.tagAnchor=void 0,this.tagOrder=void 0,this._startDate=void 0,this._endDate=void 0,this._dateAtEnd=void 0,this._cue=void 0,this._badValueForSameId=void 0,this.tagAnchor=(t==null?void 0:t.tagAnchor)||null,this.tagOrder=(n=t==null?void 0:t.tagOrder)!=null?n:i,t){
const r=t.attr;
for(const a in r)if(Object.prototype.hasOwnProperty.call(e,a)&&e[a]!==r[a]){
oe.warn(`DATERANGE tag attribute: "${
a}
" does not match for tags with ID: "${
e.ID}
"`),this._badValueForSameId=a;
break}
e=ue(new pe({
}
),r,e)}
if(this.attr=e,t?(this._startDate=t._startDate,this._cue=t._cue,this._endDate=t._endDate,this._dateAtEnd=t._dateAtEnd):this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){
const r=(t==null?void 0:t.endDate)||new Date(this.attr["END-DATE"]);
j(r.getTime())&&(this._endDate=r)}
}
get id(){
return this.attr.ID}
get class(){
return this.attr.CLASS}
get cue(){
const e=this._cue;
return e===void 0?this._cue=this.attr.enumeratedStringList(this.attr.CUE?"CUE":"X-CUE",{
pre:!1,post:!1,once:!1}
):e}
get startTime(){
const{
tagAnchor:e}
=this;
return e===null||e.programDateTime===null?(oe.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${
this.id}
": ${
e}
`),NaN):e.start+(this.startDate.getTime()-e.programDateTime)/1e3}
get startDate(){
return this._startDate}
get endDate(){
const e=this._endDate||this._dateAtEnd;
if(e)return e;
const t=this.duration;
return t!==null?this._dateAtEnd=new Date(this._startDate.getTime()+t*1e3):null}
get duration(){
if("DURATION"in this.attr){
const e=this.attr.decimalFloatingPoint("DURATION");
if(j(e))return e}
else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;
return null}
get plannedDuration(){
return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}
get endOnNext(){
return this.attr.bool("END-ON-NEXT")}
get isInterstitial(){
return this.class===xE}
get isValid(){
return!!this.id&&!this._badValueForSameId&&j(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)&&(!this.attr.CUE||!this.cue.pre&&!this.cue.post||this.cue.pre!==this.cue.post)&&(!this.isInterstitial||"X-ASSET-URI"in this.attr||"X-ASSET-LIST"in this.attr)}
}
const TE=10;
class IE{
constructor(e){
this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.dateRangeTagCount=0,this.live=!0,this.requestScheduled=-1,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.appliedTimelineOffset=void 0,this.fragments=[],this.encryptedFragments=[],this.dateRanges={
}
,this.url=e}
reloaded(e){
if(!e){
this.advanced=!0,this.updated=!0;
return}
const t=this.lastPartSn-e.lastPartSn,i=this.lastPartIndex-e.lastPartIndex;
this.updated=this.endSN!==e.endSN||!!i||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&i>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1}
hasKey(e){
return this.encryptedFragments.some(t=>{
let i=t.decryptdata;
return i||(t.setKeyFormat(e.keyFormat),i=t.decryptdata),!!i&&e.matches(i)}
)}
get hasProgramDateTime(){
return this.fragments.length?j(this.fragments[this.fragments.length-1].programDateTime):!1}
get levelTargetDuration(){
return this.averagetargetduration||this.targetduration||TE}
get drift(){
const e=this.driftEndTime-this.driftStartTime;
return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}
get edge(){
return this.partEnd||this.fragmentEnd}
get partEnd(){
var e;
return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}
get fragmentEnd(){
return this.fragments.length?this.fragments[this.fragments.length-1].end:0}
get fragmentStart(){
return this.fragments.length?this.fragments[0].start:0}
get age(){
return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}
get lastPartIndex(){
var e;
return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}
get maxPartIndex(){
const e=this.partList;
if(e){
const t=this.lastPartIndex;
if(t!==-1){
for(let i=e.length;
i--;
)if(e[i].index>t)return e[i].index;
return t}
}
return 0}
get lastPartSn(){
var e;
return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}
get expired(){
if(this.live&&this.age&&this.misses<3){
const e=this.partEnd-this.fragmentStart;
return this.age>Math.max(e,this.totalduration)+this.levelTargetDuration}
return!1}
}
function Ma(s,e){
return s.length===e.length?!s.some((t,i)=>t!==e[i]):!1}
function Ah(s,e){
return!s&&!e?!0:!s||!e?!1:Ma(s,e)}
function Fi(s){
return s==="AES-128"||s==="AES-256"||s==="AES-256-CTR"}
function Ic(s){
switch(s){
case"AES-128":case"AES-256":return Ms.cbc;
case"AES-256-CTR":return Ms.ctr;
default:throw new Error(`invalid full segment method ${
s}
`)}
}
function Lc(s){
return Uint8Array.from(atob(s),e=>e.charCodeAt(0))}
function ou(s){
return Uint8Array.from(unescape(encodeURIComponent(s)),e=>e.charCodeAt(0))}
function LE(s){
const e=ou(s).subarray(0,16),t=new Uint8Array(16);
return t.set(e,16-e.length),t}
function ag(s){
const e=function(i,n,r){
const a=i[n];
i[n]=i[r],i[r]=a}
;
e(s,0,3),e(s,1,2),e(s,4,5),e(s,6,7)}
function og(s){
const e=s.split(":");
let t=null;
if(e[0]==="data"&&e.length===2){
const i=e[1].split(";
"),n=i[i.length-1].split(",");
if(n.length===2){
const r=n[0]==="base64",a=n[1];
r?(i.splice(-1,1),t=Lc(a)):t=LE(a)}
}
return t}
const Fa=typeof self<"u"?self:void 0;
var ve={
CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"}
,$e={
CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"}
;
function Jr(s){
switch(s){
case $e.FAIRPLAY:return ve.FAIRPLAY;
case $e.PLAYREADY:return ve.PLAYREADY;
case $e.WIDEVINE:return ve.WIDEVINE;
case $e.CLEARKEY:return ve.CLEARKEY}
}
function jo(s){
switch(s){
case ve.FAIRPLAY:return $e.FAIRPLAY;
case ve.PLAYREADY:return $e.PLAYREADY;
case ve.WIDEVINE:return $e.WIDEVINE;
case ve.CLEARKEY:return $e.CLEARKEY}
}
function mn(s){
const{
drmSystems:e,widevineLicenseUrl:t}
=s,i=e?[ve.FAIRPLAY,ve.WIDEVINE,ve.PLAYREADY,ve.CLEARKEY].filter(n=>!!e[n]):[];
return!i[ve.WIDEVINE]&&t&&i.push(ve.WIDEVINE),i}
const lg=function(s){
return Fa!=null&&(s=Fa.navigator)!=null&&s.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}
();
function AE(s,e,t,i){
let n;
switch(s){
case ve.FAIRPLAY:n=["cenc","sinf"];
break;
case ve.WIDEVINE:case ve.PLAYREADY:n=["cenc"];
break;
case ve.CLEARKEY:n=["cenc","keyids"];
break;
default:throw new Error(`Unknown key-system: ${
s}
`)}
return RE(n,e,t,i)}
function RE(s,e,t,i){
return[{
initDataTypes:s,persistentState:i.persistentState||"optional",distinctiveIdentifier:i.distinctiveIdentifier||"optional",sessionTypes:i.sessionTypes||[i.sessionType||"temporary"],audioCapabilities:e.map(r=>({
contentType:`audio/mp4;
 codecs=${
r}
`,robustness:i.audioRobustness||"",encryptionScheme:i.audioEncryptionScheme||null}
)),videoCapabilities:t.map(r=>({
contentType:`video/mp4;
 codecs=${
r}
`,robustness:i.videoRobustness||"",encryptionScheme:i.videoEncryptionScheme||null}
))}
]}
function _E(s){
var e;
return!!s&&(s.sessionType==="persistent-license"||!!((e=s.sessionTypes)!=null&&e.some(t=>t==="persistent-license")))}
function ug(s){
const e=new Uint16Array(s.buffer,s.byteOffset,s.byteLength/2),t=String.fromCharCode.apply(null,Array.from(e)),i=t.substring(t.indexOf("<"),t.length),a=new DOMParser().parseFromString(i,"text/xml").getElementsByTagName("KID")[0];
if(a){
const o=a.childNodes[0]?a.childNodes[0].nodeValue:a.getAttribute("VALUE");
if(o){
const u=Lc(o).subarray(0,16);
return ag(u),u}
}
return null}
let fi={
}
;
class Ds{
static clearKeyUriToKeyIdMap(){
fi={
}
}
static setKeyIdForUri(e,t){
fi[e]=t}
static addKeyIdForUri(e){
const t=Object.keys(fi).length%Number.MAX_SAFE_INTEGER,i=new Uint8Array(16);
return new DataView(i.buffer,12,4).setUint32(0,t),fi[e]=i,i}
constructor(e,t,i,n=[1],r=null,a){
this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=i,this.keyFormatVersions=n,this.iv=r,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&!Fi(e),a!=null&&a.startsWith("0x")&&(this.keyId=new Uint8Array(Fm(a)))}
matches(e){
return e.uri===this.uri&&e.method===this.method&&e.encrypted===this.encrypted&&e.keyFormat===this.keyFormat&&Ma(e.keyFormatVersions,this.keyFormatVersions)&&Ah(e.iv,this.iv)&&Ah(e.keyId,this.keyId)}
isSupported(){
if(this.method){
if(Fi(this.method)||this.method==="NONE")return!0;
if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";
switch(this.keyFormat){
case $e.FAIRPLAY:case $e.WIDEVINE:case $e.PLAYREADY:case $e.CLEARKEY:return["SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}
}
return!1}
getDecryptData(e,t){
if(!this.encrypted||!this.uri)return null;
if(Fi(this.method)){
let r=this.iv;
return r||(typeof e!="number"&&(oe.warn(`missing IV for initialization segment with method="${
this.method}
" - compliance issue`),e=0),r=kE(e)),new Ds(this.method,this.uri,"identity",this.keyFormatVersions,r)}
if(this.keyId){
const r=fi[this.uri];
if(r&&!Ma(this.keyId,r)&&Ds.setKeyIdForUri(this.uri,this.keyId),this.pssh)return this}
const i=og(this.uri);
if(i)switch(this.keyFormat){
case $e.WIDEVINE:if(this.pssh=i,!this.keyId){
const r=Dx(i.buffer);
if(r.length){
var n;
const a=r[0];
this.keyId=(n=a.kids)!=null&&n.length?a.kids[0]:null}
}
this.keyId||(this.keyId=Rh(t));
break;
case $e.PLAYREADY:{
const r=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);
this.pssh=Cx(r,null,i),this.keyId=ug(i);
break}
default:{
let r=i.subarray(0,16);
if(r.length!==16){
const a=new Uint8Array(16);
a.set(r,16-r.length),r=a}
this.keyId=r;
break}
}
if(!this.keyId||this.keyId.byteLength!==16){
let r;
r=wE(t),r||(r=Rh(t),r||(r=fi[this.uri])),r&&(this.keyId=r,Ds.setKeyIdForUri(this.uri,r))}
return this}
}
function wE(s){
const e=s==null?void 0:s[$e.WIDEVINE];
return e?e.keyId:null}
function Rh(s){
const e=s==null?void 0:s[$e.PLAYREADY];
if(e){
const t=og(e.uri);
if(t)return ug(t)}
return null}
function kE(s){
const e=new Uint8Array(16);
for(let t=12;
t<16;
t++)e[t]=s>>8*(15-t)&255;
return e}
const _h=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,wh=/#EXT-X-MEDIA:(.*)/g,bE=/^#EXT(?:INF|-X-TARGETDURATION):/m,Go=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[^\r\n]*)/.source,/#.*/.source].join("|"),"g"),CE=new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class Wt{
static findGroup(e,t){
for(let i=0;
i<e.length;
i++){
const n=e[i];
if(n.id===t)return n}
}
static resolve(e,t){
return gc.buildAbsoluteURL(t,e,{
alwaysNormalize:!0}
)}
static isMediaPlaylist(e){
return bE.test(e)}
static parseMasterPlaylist(e,t){
const i=Th(e),n={
contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:i}
,r=[];
if(_h.lastIndex=0,!e.startsWith("#EXTM3U"))return n.playlistParsingError=new Error("no EXTM3U delimiter"),n;
let a;
for(;
(a=_h.exec(e))!=null;
)if(a[1]){
var o;
const l=new pe(a[1],n),c=au(n,a[2]),d={
attrs:l,bitrate:l.decimalInteger("BANDWIDTH")||l.decimalInteger("AVERAGE-BANDWIDTH"),name:l.NAME,url:Wt.resolve(c,t)}
,h=l.decimalResolution("RESOLUTION");
h&&(d.width=h.width,d.height=h.height),Ch(l.CODECS,d);
const f=l["SUPPLEMENTAL-CODECS"];
f&&(d.supplemental={
}
,Ch(f,d.supplemental)),(o=d.unknownCodecs)!=null&&o.length||r.push(d),n.levels.push(d)}
else if(a[3]){
const l=a[3],c=a[4];
switch(l){
case"SESSION-DATA":{
const d=new pe(c,n),h=d["DATA-ID"];
h&&(n.sessionData===null&&(n.sessionData={
}
),n.sessionData[h]=d);
break}
case"SESSION-KEY":{
const d=kh(c,t,n);
d.encrypted&&d.isSupported()?(n.sessionKeys===null&&(n.sessionKeys=[]),n.sessionKeys.push(d)):oe.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${
c}
"`);
break}
case"DEFINE":{
{
const d=new pe(c,n);
Ih(n,d,t)}
break}
case"CONTENT-STEERING":{
const d=new pe(c,n);
n.contentSteering={
uri:Wt.resolve(d["SERVER-URI"],t),pathwayId:d["PATHWAY-ID"]||"."}
;
break}
case"START":{
n.startTimeOffset=bh(c);
break}
}
}
const u=r.length>0&&r.length<n.levels.length;
return n.levels=u?r:n.levels,n.levels.length===0&&(n.playlistParsingError=new Error("no levels found in manifest")),n}
static parseMasterPlaylistMedia(e,t,i){
let n;
const r={
}
,a=i.levels,o={
AUDIO:a.map(l=>({
id:l.attrs.AUDIO,audioCodec:l.audioCodec}
)),SUBTITLES:a.map(l=>({
id:l.attrs.SUBTITLES,textCodec:l.textCodec}
)),"CLOSED-CAPTIONS":[]}
;
let u=0;
for(wh.lastIndex=0;
(n=wh.exec(e))!==null;
){
const l=new pe(n[1],i),c=l.TYPE;
if(c){
const d=o[c],h=r[c]||[];
r[c]=h;
const f=l.LANGUAGE,m=l["ASSOC-LANGUAGE"],p=l.CHANNELS,E=l.CHARACTERISTICS,v=l["INSTREAM-ID"],y={
attrs:l,bitrate:0,id:u++,groupId:l["GROUP-ID"]||"",name:l.NAME||f||"",type:c,default:l.bool("DEFAULT"),autoselect:l.bool("AUTOSELECT"),forced:l.bool("FORCED"),lang:f,url:l.URI?Wt.resolve(l.URI,t):""}
;
if(m&&(y.assocLang=m),p&&(y.channels=p),E&&(y.characteristics=E),v&&(y.instreamId=v),d!=null&&d.length){
const S=Wt.findGroup(d,y.groupId)||d[0];
Dh(y,S,"audioCodec"),Dh(y,S,"textCodec")}
h.push(y)}
}
return r}
static parseLevelPlaylist(e,t,i,n,r,a){
var o;
const u={
url:t}
,l=new IE(t),c=l.fragments,d=[];
let h=null,f=0,m=0,p=0,E=0,v=0,y=null,S=new Uo(n,u),T,I,_,L=-1,R=!1,w=null,A;
if(Go.lastIndex=0,l.m3u8=e,l.hasVariableRefs=Th(e),((o=Go.exec(e))==null?void 0:o[0])!=="#EXTM3U")return l.playlistParsingError=new Error("Missing format identifier #EXTM3U"),l;
for(;
(T=Go.exec(e))!==null;
){
R&&(R=!1,S=new Uo(n,u),S.playlistOffset=p,S.setStart(p),S.sn=f,S.cc=E,v&&(S.bitrate=v),S.level=i,h&&(S.initSegment=h,h.rawProgramDateTime&&(S.rawProgramDateTime=h.rawProgramDateTime,h.rawProgramDateTime=null),w&&(S.setByteRange(w),w=null)));
const W=T[1];
if(W){
S.duration=parseFloat(W);
const V=(" "+T[2]).slice(1);
S.title=V||null,S.tagList.push(V?["INF",W,V]:["INF",W])}
else if(T[3]){
if(j(S.duration)){
S.playlistOffset=p,S.setStart(p),_&&Nh(S,_,l),S.sn=f,S.level=i,S.cc=E,c.push(S);
const V=(" "+T[3]).slice(1);
S.relurl=au(l,V),lu(S,y,d),y=S,p+=S.duration,f++,m=0,R=!0}
}
else{
if(T=T[0].match(CE),!T){
oe.warn("No matches on slow regex match for level playlist!");
continue}
for(I=1;
I<T.length&&T[I]===void 0;
I++);
const V=(" "+T[I]).slice(1),U=(" "+T[I+1]).slice(1),K=T[I+2]?(" "+T[I+2]).slice(1):null;
switch(V){
case"BYTERANGE":y?S.setByteRange(U,y):S.setByteRange(U);
break;
case"PROGRAM-DATE-TIME":S.rawProgramDateTime=U,S.tagList.push(["PROGRAM-DATE-TIME",U]),L===-1&&(L=c.length);
break;
case"PLAYLIST-TYPE":l.type&&Zt(l,V,T),l.type=U.toUpperCase();
break;
case"MEDIA-SEQUENCE":l.startSN!==0?Zt(l,V,T):c.length>0&&Oh(l,V,T),f=l.startSN=parseInt(U);
break;
case"SKIP":{
l.skippedSegments&&Zt(l,V,T);
const C=new pe(U,l),N=C.decimalInteger("SKIPPED-SEGMENTS");
if(j(N)){
l.skippedSegments+=N;
for(let O=N;
O--;
)c.push(null);
f+=N}
const B=C.enumeratedString("RECENTLY-REMOVED-DATERANGES");
B&&(l.recentlyRemovedDateranges=(l.recentlyRemovedDateranges||[]).concat(B.split("	")));
break}
case"TARGETDURATION":l.targetduration!==0&&Zt(l,V,T),l.targetduration=Math.max(parseInt(U),1);
break;
case"VERSION":l.version!==null&&Zt(l,V,T),l.version=parseInt(U);
break;
case"INDEPENDENT-SEGMENTS":break;
case"ENDLIST":l.live||Zt(l,V,T),l.live=!1;
break;
case"#":(U||K)&&S.tagList.push(K?[U,K]:[U]);
break;
case"DISCONTINUITY":E++,S.tagList.push(["DIS"]);
break;
case"GAP":S.gap=!0,S.tagList.push([V]);
break;
case"BITRATE":S.tagList.push([V,U]),v=parseInt(U)*1e3,j(v)?S.bitrate=v:v=0;
break;
case"DATERANGE":{
const C=new pe(U,l),N=new rg(C,l.dateRanges[C.ID],l.dateRangeTagCount);
l.dateRangeTagCount++,N.isValid||l.skippedSegments?l.dateRanges[N.id]=N:oe.warn(`Ignoring invalid DATERANGE tag: "${
U}
"`),S.tagList.push(["EXT-X-DATERANGE",U]);
break}
case"DEFINE":{
{
const C=new pe(U,l);
"IMPORT"in C?yE(l,C,a):Ih(l,C,t)}
break}
case"DISCONTINUITY-SEQUENCE":l.startCC!==0?Zt(l,V,T):c.length>0&&Oh(l,V,T),l.startCC=E=parseInt(U);
break;
case"KEY":{
const C=kh(U,t,l);
if(C.isSupported()){
if(C.method==="NONE"){
_=void 0;
break}
_||(_={
}
);
const N=_[C.keyFormat];
N!=null&&N.matches(C)||(N&&(_=ue({
}
,_)),_[C.keyFormat]=C)}
else oe.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${
U}
"`);
break}
case"START":l.startTimeOffset=bh(U);
break;
case"MAP":{
const C=new pe(U,l);
if(S.duration){
const N=new Uo(n,u);
Ph(N,C,i,_),h=N,S.initSegment=h,h.rawProgramDateTime&&!S.rawProgramDateTime&&(S.rawProgramDateTime=h.rawProgramDateTime)}
else{
const N=S.byteRangeEndOffset;
if(N){
const B=S.byteRangeStartOffset;
w=`${
N-B}
@${
B}
`}
else w=null;
Ph(S,C,i,_),h=S,R=!0}
h.cc=E;
break}
case"SERVER-CONTROL":{
A&&Zt(l,V,T),A=new pe(U),l.canBlockReload=A.bool("CAN-BLOCK-RELOAD"),l.canSkipUntil=A.optionalFloat("CAN-SKIP-UNTIL",0),l.canSkipDateRanges=l.canSkipUntil>0&&A.bool("CAN-SKIP-DATERANGES"),l.partHoldBack=A.optionalFloat("PART-HOLD-BACK",0),l.holdBack=A.optionalFloat("HOLD-BACK",0);
break}
case"PART-INF":{
l.partTarget&&Zt(l,V,T);
const C=new pe(U);
l.partTarget=C.decimalFloatingPoint("PART-TARGET");
break}
case"PART":{
let C=l.partList;
C||(C=l.partList=[]);
const N=m>0?C[C.length-1]:void 0,B=m++,O=new pe(U,l),M=new yx(O,S,u,B,N);
C.push(M),S.duration+=M.duration;
break}
case"PRELOAD-HINT":{
const C=new pe(U,l);
l.preloadHint=C;
break}
case"RENDITION-REPORT":{
const C=new pe(U,l);
l.renditionReports=l.renditionReports||[],l.renditionReports.push(C);
break}
default:oe.warn(`line parsed but not handled: ${
T}
`);
break}
}
}
y&&!y.relurl?(c.pop(),p-=y.duration,l.partList&&(l.fragmentHint=y)):l.partList&&(lu(S,y,d),S.cc=E,l.fragmentHint=S,_&&Nh(S,_,l)),l.targetduration||(l.playlistParsingError=new Error("Missing Target Duration"));
const D=c.length,$=c[0],G=c[D-1];
if(p+=l.skippedSegments*l.targetduration,p>0&&D&&G){
l.averagetargetduration=p/D;
const W=G.sn;
l.endSN=W!=="initSegment"?W:0,l.live||(G.endList=!0),L>0&&(PE(c,L),$&&d.unshift($))}
return l.fragmentHint&&(p+=l.fragmentHint.duration),l.totalduration=p,d.length&&l.dateRangeTagCount&&$&&cg(d,l),l.endCC=E,l}
}
function cg(s,e){
let t=s.length;
if(!t)if(e.hasProgramDateTime){
const o=e.fragments[e.fragments.length-1];
s.push(o),t++}
else return;
const i=s[t-1],n=e.live?1/0:e.totalduration,r=Object.keys(e.dateRanges);
for(let o=r.length;
o--;
){
const u=e.dateRanges[r[o]],l=u.startDate.getTime();
u.tagAnchor=i.ref;
for(let c=t;
c--;
){
var a;
if(((a=s[c])==null?void 0:a.sn)<e.startSN)break;
const d=DE(e,l,s,c,n);
if(d!==-1){
u.tagAnchor=e.fragments[d].ref;
break}
}
}
}
function DE(s,e,t,i,n){
const r=t[i];
if(r){
const o=r.programDateTime;
if(e>=o||i===0){
var a;
const u=(((a=t[i+1])==null?void 0:a.start)||n)-r.start;
if(e<=o+u*1e3){
const l=t[i].sn-s.startSN;
if(l<0)return-1;
const c=s.fragments;
if(c.length>t.length){
const h=(t[i+1]||c[c.length-1]).sn-s.startSN;
for(let f=h;
f>l;
f--){
const m=c[f].programDateTime;
if(e>=m&&e<m+c[f].duration*1e3)return f}
}
return l}
}
}
return-1}
function kh(s,e,t){
var i,n;
const r=new pe(s,t),a=(i=r.METHOD)!=null?i:"",o=r.URI,u=r.hexadecimalInteger("IV"),l=r.KEYFORMATVERSIONS,c=(n=r.KEYFORMAT)!=null?n:"identity";
o&&r.IV&&!u&&oe.error(`Invalid IV: ${
r.IV}
`);
const d=o?Wt.resolve(o,e):"",h=(l||"1").split("/").map(Number).filter(Number.isFinite);
return new Ds(a,d,c,h,u,r.KEYID)}
function bh(s){
const t=new pe(s).decimalFloatingPoint("TIME-OFFSET");
return j(t)?t:null}
function Ch(s,e){
let t=(s||"").split(/[ ,]+/).filter(i=>i);
["video","audio","text"].forEach(i=>{
const n=t.filter(r=>vc(r,i));
n.length&&(e[`${
i}
Codec`]=n.map(r=>r.split("/")[0]).join(","),t=t.filter(r=>n.indexOf(r)===-1))}
),e.unknownCodecs=t}
function Dh(s,e,t){
const i=e[t];
i&&(s[t]=i)}
function PE(s,e){
let t=s[e];
for(let i=e;
i--;
){
const n=s[i];
if(!n)return;
n.programDateTime=t.programDateTime-n.duration*1e3,t=n}
}
function lu(s,e,t){
s.rawProgramDateTime?t.push(s):e!=null&&e.programDateTime&&(s.programDateTime=e.endProgramDateTime)}
function Ph(s,e,t,i){
s.relurl=e.URI,e.BYTERANGE&&s.setByteRange(e.BYTERANGE),s.level=t,s.sn="initSegment",i&&(s.levelkeys=i),s.initSegment=null}
function Nh(s,e,t){
s.levelkeys=e;
const{
encryptedFragments:i}
=t;
(!i.length||i[i.length-1].levelkeys!==e)&&Object.keys(e).some(n=>e[n].isCommonEncryption)&&i.push(s)}
function Zt(s,e,t){
s.playlistParsingError=new Error(`#EXT-X-${
e}
 must not appear more than once (${
t[0]}
)`)}
function Oh(s,e,t){
s.playlistParsingError=new Error(`#EXT-X-${
e}
 must appear before the first Media Segment (${
t[0]}
)`)}
function Vo(s,e){
const t=e.startPTS;
if(j(t)){
let i=0,n;
e.sn>s.sn?(i=t-s.start,n=s):(i=s.start-t,n=e),n.duration!==i&&n.setDuration(i)}
else e.sn>s.sn?s.cc===e.cc&&s.minEndPTS?e.setStart(s.start+(s.minEndPTS-s.start)):e.setStart(s.start+s.duration):e.setStart(Math.max(s.start-e.duration,0))}
function dg(s,e,t,i,n,r,a){
i-t<=0&&(a.warn("Fragment should have a positive duration",e),i=t+e.duration,r=n+e.duration);
let u=t,l=i;
const c=e.startPTS,d=e.endPTS;
if(j(c)){
const v=Math.abs(c-t);
s&&v>s.totalduration?a.warn(`media timestamps and playlist times differ by ${
v}
s for level ${
e.level}
 ${
s.url}
`):j(e.deltaPTS)?e.deltaPTS=Math.max(v,e.deltaPTS):e.deltaPTS=v,u=Math.max(t,c),t=Math.min(t,c),n=e.startDTS!==void 0?Math.min(n,e.startDTS):n,l=Math.min(i,d),i=Math.max(i,d),r=e.endDTS!==void 0?Math.max(r,e.endDTS):r}
const h=t-e.start;
e.start!==0&&e.setStart(t),e.setDuration(i-e.start),e.startPTS=t,e.maxStartPTS=u,e.startDTS=n,e.endPTS=i,e.minEndPTS=l,e.endDTS=r;
const f=e.sn;
if(!s||f<s.startSN||f>s.endSN)return 0;
let m;
const p=f-s.startSN,E=s.fragments;
for(E[p]=e,m=p;
m>0;
m--)Vo(E[m],E[m-1]);
for(m=p;
m<E.length-1;
m++)Vo(E[m],E[m+1]);
return s.fragmentHint&&Vo(E[E.length-1],s.fragmentHint),s.PTSKnown=s.alignedSliding=!0,h}
function NE(s,e,t){
if(s===e)return;
let i=null;
const n=s.fragments;
for(let c=n.length-1;
c>=0;
c--){
const d=n[c].initSegment;
if(d){
i=d;
break}
}
s.fragmentHint&&delete s.fragmentHint.endPTS;
let r;
FE(s,e,(c,d,h,f)=>{
if((!e.startCC||e.skippedSegments)&&d.cc!==c.cc){
const m=c.cc-d.cc;
for(let p=h;
p<f.length;
p++)f[p].cc+=m;
e.endCC=f[f.length-1].cc}
j(c.startPTS)&&j(c.endPTS)&&(d.setStart(d.startPTS=c.startPTS),d.startDTS=c.startDTS,d.maxStartPTS=c.maxStartPTS,d.endPTS=c.endPTS,d.endDTS=c.endDTS,d.minEndPTS=c.minEndPTS,d.setDuration(c.endPTS-c.startPTS),d.duration&&(r=d),e.PTSKnown=e.alignedSliding=!0),c.hasStreams&&(d.elementaryStreams=c.elementaryStreams),d.loader=c.loader,c.hasStats&&(d.stats=c.stats),c.initSegment&&(d.initSegment=c.initSegment,i=c.initSegment)}
);
const a=e.fragments,o=e.fragmentHint?a.concat(e.fragmentHint):a;
if(i&&o.forEach(c=>{
var d;
c&&(!c.initSegment||c.initSegment.relurl===((d=i)==null?void 0:d.relurl))&&(c.initSegment=i)}
),e.skippedSegments){
if(e.deltaUpdateFailed=a.some(c=>!c),e.deltaUpdateFailed){
t.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
for(let c=e.skippedSegments;
c--;
)a.shift();
e.startSN=a[0].sn}
else{
e.canSkipDateRanges&&(e.dateRanges=OE(s.dateRanges,e,t));
const c=s.fragments.filter(d=>d.rawProgramDateTime);
if(s.hasProgramDateTime&&!e.hasProgramDateTime)for(let d=1;
d<o.length;
d++)o[d].programDateTime===null&&lu(o[d],o[d-1],c);
cg(c,e)}
e.endCC=a[a.length-1].cc}
if(!e.startCC){
var u;
const c=mg(s,e.startSN-1);
e.startCC=(u=c==null?void 0:c.cc)!=null?u:a[0].cc}
ME(s.partList,e.partList,(c,d)=>{
d.elementaryStreams=c.elementaryStreams,d.stats=c.stats}
),r?dg(e,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS,t):hg(s,e),a.length&&(e.totalduration=e.edge-a[0].start),e.driftStartTime=s.driftStartTime,e.driftStart=s.driftStart;
const l=e.advancedDateTime;
if(e.advanced&&l){
const c=e.edge;
e.driftStart||(e.driftStartTime=l,e.driftStart=c),e.driftEndTime=l,e.driftEnd=c}
else e.driftEndTime=s.driftEndTime,e.driftEnd=s.driftEnd,e.advancedDateTime=s.advancedDateTime;
e.requestScheduled===-1&&(e.requestScheduled=s.requestScheduled)}
function OE(s,e,t){
const{
dateRanges:i,recentlyRemovedDateranges:n}
=e,r=ue({
}
,s);
n&&n.forEach(u=>{
delete r[u]}
);
const o=Object.keys(r).length;
return o?(Object.keys(i).forEach(u=>{
const l=r[u],c=new rg(i[u].attr,l);
c.isValid?(r[u]=c,l||(c.tagOrder+=o)):t.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${
de(i[u].attr)}
"`)}
),r):i}
function ME(s,e,t){
if(s&&e){
let i=0;
for(let n=0,r=s.length;
n<=r;
n++){
const a=s[n],o=e[n+i];
a&&o&&a.index===o.index&&a.fragment.sn===o.fragment.sn?t(a,o):i--}
}
}
function FE(s,e,t){
const i=e.skippedSegments,n=Math.max(s.startSN,e.startSN)-e.startSN,r=(s.fragmentHint?1:0)+(i?e.endSN:Math.min(s.endSN,e.endSN))-e.startSN,a=e.startSN-s.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,u=s.fragmentHint?s.fragments.concat(s.fragmentHint):s.fragments;
for(let l=n;
l<=r;
l++){
const c=u[a+l];
let d=o[l];
if(i&&!d&&c&&(d=e.fragments[l]=c),c&&d){
t(c,d,l,o);
const h=c.relurl,f=d.relurl;
if(h&&UE(h,f)){
e.playlistParsingError=Mh(`media sequence mismatch ${
d.sn}
:`,s,e,c,d);
return}
else if(c.cc!==d.cc){
e.playlistParsingError=Mh(`discontinuity sequence mismatch (${
c.cc}
!=${
d.cc}
)`,s,e,c,d);
return}
}
}
}
function Mh(s,e,t,i,n){
return new Error(`${
s}
 ${
n.url}

Playlist starting @${
e.startSN}

${
e.m3u8}


Playlist starting @${
t.startSN}

${
t.m3u8}
`)}
function hg(s,e,t=!0){
const i=e.startSN+e.skippedSegments-s.startSN,n=s.fragments,r=i>=0;
let a=0;
if(r&&i<n.length)a=n[i].start;
else if(r&&e.startSN===s.endSN+1)a=s.fragmentEnd;
else if(r&&t)a=s.fragmentStart+i*e.levelTargetDuration;
else if(!e.skippedSegments&&e.fragmentStart===0)a=s.fragmentStart;
else return;
uu(e,a)}
function uu(s,e){
if(e){
const t=s.fragments;
for(let i=s.skippedSegments;
i<t.length;
i++)t[i].addStart(e);
s.fragmentHint&&s.fragmentHint.addStart(e)}
}
function fg(s,e=1/0){
let t=1e3*s.targetduration;
if(s.updated){
const i=s.fragments;
if(i.length&&t*4>e){
const r=i[i.length-1].duration*1e3;
r<t&&(t=r)}
}
else t/=2;
return Math.round(t)}
function mg(s,e,t){
if(!s)return null;
let i=s.fragments[e-s.startSN];
return i||(i=s.fragmentHint,i&&i.sn===e)?i:e<s.startSN&&t&&t.sn===e?t:null}
function Fh(s,e,t){
return s?gg(s.partList,e,t):null}
function gg(s,e,t){
if(s)for(let i=s.length;
i--;
){
const n=s[i];
if(n.index===t&&n.fragment.sn===e)return n}
return null}
function pg(s){
s.forEach((e,t)=>{
var i;
(i=e.details)==null||i.fragments.forEach(n=>{
n.level=t,n.initSegment&&(n.initSegment.level=t)}
)}
)}
function UE(s,e){
return s!==e&&e?Uh(s)!==Uh(e):!1}
function Uh(s){
return s.replace(/\?[^?]*$/,"")}
function An(s,e){
for(let i=0,n=s.length;
i<n;
i++){
var t;
if(((t=s[i])==null?void 0:t.cc)===e)return s[i]}
return null}
function BE(s,e){
return!!(s&&e.startCC<s.endCC&&e.endCC>s.startCC)}
function Bh(s,e){
const t=s.start+e;
s.startPTS=t,s.setStart(t),s.endPTS=t+s.duration}
function yg(s,e){
const t=e.fragments;
for(let i=0,n=t.length;
i<n;
i++)Bh(t[i],s);
e.fragmentHint&&Bh(e.fragmentHint,s),e.alignedSliding=!0}
function $E(s,e){
s&&(vg(e,s),e.alignedSliding||Ua(e,s),!e.alignedSliding&&!e.skippedSegments&&hg(s,e,!1))}
function vg(s,e){
if(!BE(e,s))return;
const t=Math.min(e.endCC,s.endCC),i=An(e.fragments,t),n=An(s.fragments,t);
if(!i||!n)return;
oe.log(`Aligning playlist at start of dicontinuity sequence ${
t}
`);
const r=i.start-n.start;
yg(r,s)}
function Ua(s,e){
if(!s.hasProgramDateTime||!e.hasProgramDateTime)return;
const t=s.fragments,i=e.fragments;
if(!t.length||!i.length)return;
let n,r;
const a=Math.min(e.endCC,s.endCC);
e.startCC<a&&s.startCC<a&&(n=An(i,a),r=An(t,a)),(!n||!r)&&(n=i[Math.floor(i.length/2)],r=An(t,n.cc)||t[Math.floor(t.length/2)]);
const o=n.programDateTime,u=r.programDateTime;
if(!o||!u)return;
const l=(u-o)/1e3-(r.start-n.start);
yg(l,s)}
function qe(s,e,t){
st(s,e,t),s.addEventListener(e,t)}
function st(s,e,t){
s.removeEventListener(e,t)}
const jE={
toString:function(s){
let e="";
const t=s.length;
for(let i=0;
i<t;
i++)e+=`[${
s.start(i).toFixed(3)}
-${
s.end(i).toFixed(3)}
]`;
return e}
}
,P={
STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"}
;
class Ac extends ig{
constructor(e,t,i,n,r){
super(n,e.logger),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=P.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.buffering=!0,this.loadingParts=!1,this.loopSn=void 0,this.onMediaSeeking=()=>{
const{
config:a,fragCurrent:o,media:u,mediaBuffer:l,state:c}
=this,d=u?u.currentTime:0,h=X.bufferInfo(l||u,d,a.maxBufferHole),f=!h.len;
if(this.log(`Media seeking to ${
j(d)?d.toFixed(3):d}
, state: ${
c}
, ${
f?"out of":"in"}
 buffer`),this.state===P.ENDED)this.resetLoadingState();
else if(o){
const m=a.maxFragLookUpTolerance,p=o.start-m,E=o.start+o.duration+m;
if(f||E<h.start||p>h.end){
const v=d>E;
(d<p||v)&&(v&&o.loader&&(this.log(`Cancelling fragment load for seek (sn: ${
o.sn}
)`),o.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}
}
if(u){
this.fragmentTracker.removeFragmentsInRange(d,1/0,this.playlistType,!0);
const m=this.lastCurrentTime;
if(d>m&&(this.lastCurrentTime=d),!this.loadingParts){
const p=Math.max(h.end,d),E=this.shouldLoadParts(this.getLevelDetails(),p);
E&&(this.log(`LL-Part loading ON after seeking to ${
d.toFixed(2)}
 with buffer @${
p.toFixed(2)}
`),this.loadingParts=E)}
}
this.hls.hasEnoughToStart||(this.log(`Setting ${
f?"startPosition":"nextLoadPosition"}
 to ${
d}
 for seek without enough to start`),this.nextLoadPosition=d,f&&(this.startPosition=d)),f&&this.state===P.IDLE&&this.tickImmediate()}
,this.onMediaEnded=()=>{
this.log("setting startPosition to 0 because media ended"),this.startPosition=this.lastCurrentTime=0}
,this.playlistType=r,this.hls=e,this.fragmentLoader=new gE(e.config),this.keyLoader=i,this.fragmentTracker=t,this.config=e.config,this.decrypter=new Sc(e.config)}
registerListeners(){
const{
hls:e}
=this;
e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.ERROR,this.onError,this)}
unregisterListeners(){
const{
hls:e}
=this;
e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.ERROR,this.onError,this)}
doTick(){
this.onTickEnd()}
onTickEnd(){
}
startLoad(e){
}
stopLoad(){
if(this.state===P.STOPPED)return;
this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);
const e=this.fragCurrent;
e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=P.STOPPED}
get startPositionValue(){
const{
nextLoadPosition:e,startPosition:t}
=this;
return t===-1&&e?e:t}
get bufferingEnabled(){
return this.buffering}
pauseBuffering(){
this.buffering=!1}
resumeBuffering(){
this.buffering=!0}
get inFlightFrag(){
return{
frag:this.fragCurrent,state:this.state}
}
_streamEnded(e,t){
if(t.live||!this.media)return!1;
const i=e.end||0,n=this.config.timelineOffset||0;
if(i<=n)return!1;
const r=e.buffered;
this.config.maxBufferHole&&r&&r.length>1&&(e=X.bufferedInfo(r,e.start,0));
const a=e.nextStart;
if(a&&a>n&&a<t.edge||this.media.currentTime<e.start)return!1;
const u=t.partList;
if(u!=null&&u.length){
const c=u[u.length-1];
return X.isBuffered(this.media,c.start+c.duration/2)}
const l=t.fragments[t.fragments.length-1].type;
return this.fragmentTracker.isEndListAppended(l)}
getLevelDetails(){
if(this.levels&&this.levelLastLoaded!==null)return this.levelLastLoaded.details}
get timelineOffset(){
const e=this.config.timelineOffset;
if(e){
var t;
return((t=this.getLevelDetails())==null?void 0:t.appliedTimelineOffset)||e}
return 0}
onMediaAttached(e,t){
const i=this.media=this.mediaBuffer=t.media;
qe(i,"seeking",this.onMediaSeeking),qe(i,"ended",this.onMediaEnded);
const n=this.config;
this.levels&&n.autoStartLoad&&this.state===P.STOPPED&&this.startLoad(n.startPosition)}
onMediaDetaching(e,t){
const i=!!t.transferMedia,n=this.media;
if(n!==null){
if(n.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),st(n,"seeking",this.onMediaSeeking),st(n,"ended",this.onMediaEnded),this.keyLoader&&!i&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loopSn=void 0,i){
this.resetLoadingState(),this.resetTransmuxer();
return}
this.loadingParts=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}
}
onManifestLoading(){
this.initPTS=[],this.levels=this.levelLastLoaded=this.fragCurrent=null,this.lastCurrentTime=this.startPosition=0,this.startFragRequested=!1}
onError(e,t){
}
onManifestLoaded(e,t){
this.startTimeOffset=t.startTimeOffset}
onHandlerDestroying(){
this.stopLoad(),this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null),super.onHandlerDestroying(),this.hls=this.onMediaSeeking=this.onMediaEnded=null}
onHandlerDestroyed(){
this.state=P.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}
loadFragment(e,t,i){
this.startFragRequested=!0,this._loadFragForPlayback(e,t,i)}
_loadFragForPlayback(e,t,i){
const n=r=>{
const a=r.frag;
if(this.fragContextChanged(a)){
this.warn(`${
a.type}
 sn: ${
a.sn}
${
r.part?" part: "+r.part.index:""}
 of ${
this.fragInfo(a,!1,r.part)}
) was dropped during download.`),this.fragmentTracker.removeFragment(a);
return}
a.stats.chunkCount++,this._handleFragmentLoadProgress(r)}
;
this._doFragLoad(e,t,i,n).then(r=>{
if(!r)return;
const a=this.state,o=r.frag;
if(this.fragContextChanged(o)){
(a===P.FRAG_LOADING||!this.fragCurrent&&a===P.PARSING)&&(this.fragmentTracker.removeFragment(o),this.state=P.IDLE);
return}
"payload"in r&&(this.log(`Loaded ${
o.type}
 sn: ${
o.sn}
 of ${
this.playlistLabel()}
 ${
o.level}
`),this.hls.trigger(x.FRAG_LOADED,r)),this._handleFragmentLoadComplete(r)}
).catch(r=>{
this.state===P.STOPPED||this.state===P.ERROR||(this.warn(`Frag error: ${
(r==null?void 0:r.message)||r}
`),this.resetFragmentLoading(e))}
)}
clearTrackerIfNeeded(e){
var t;
const{
fragmentTracker:i}
=this;
if(i.getState(e)===be.APPENDING){
const r=e.type,a=this.getFwdBufferInfo(this.mediaBuffer,r),o=Math.max(e.duration,a?a.len:this.config.maxBufferLength),u=this.backtrackFragment;
((u?e.sn-u.sn:0)===1||this.reduceMaxBufferLength(o,e.duration))&&i.removeFragment(e)}
else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?i.removeAllFragments():i.hasParts(e.type)&&(i.detectPartialFragments({
frag:e,part:null,stats:e.stats,id:e.type}
),i.getState(e)===be.PARTIAL&&i.removeFragment(e))}
checkLiveUpdate(e){
if(e.updated&&!e.live){
const t=e.fragments[e.fragments.length-1];
this.fragmentTracker.detectPartialFragments({
frag:t,part:null,stats:t.stats,id:t.type}
)}
e.fragments[0]||(e.deltaUpdateFailed=!0)}
waitForLive(e){
const t=e.details;
return(t==null?void 0:t.live)&&t.type!=="EVENT"&&(this.levelLastLoaded!==e||t.expired)}
flushMainBuffer(e,t,i=null){
if(!(e-t))return;
const n={
startOffset:e,endOffset:t,type:i}
;
this.hls.trigger(x.BUFFER_FLUSHING,n)}
_loadInitSegment(e,t){
this._doFragLoad(e,t).then(i=>{
const n=i==null?void 0:i.frag;
if(!n||this.fragContextChanged(n)||!this.levels)throw new Error("init load aborted");
return i}
).then(i=>{
const{
hls:n}
=this,{
frag:r,payload:a}
=i,o=r.decryptdata;
if(a&&a.byteLength>0&&o!=null&&o.key&&o.iv&&Fi(o.method)){
const u=self.performance.now();
return this.decrypter.decrypt(new Uint8Array(a),o.key.buffer,o.iv.buffer,Ic(o.method)).catch(l=>{
throw n.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:r}
),l}
).then(l=>{
const c=self.performance.now();
return n.trigger(x.FRAG_DECRYPTED,{
frag:r,payload:l,stats:{
tstart:u,tdecrypt:c}
}
),i.payload=l,this.completeInitSegmentLoad(i)}
)}
return this.completeInitSegmentLoad(i)}
).catch(i=>{
this.state===P.STOPPED||this.state===P.ERROR||(this.warn(i),this.resetFragmentLoading(e))}
)}
completeInitSegmentLoad(e){
const{
levels:t}
=this;
if(!t)throw new Error("init load aborted, missing levels");
const i=e.frag.stats;
this.state!==P.STOPPED&&(this.state=P.IDLE),e.frag.data=new Uint8Array(e.payload),i.parsing.start=i.buffering.start=self.performance.now(),i.parsing.end=i.buffering.end=self.performance.now(),this.tick()}
unhandledEncryptionError(e,t){
var i,n;
const r=e.tracks;
if(r&&!t.encrypted&&((i=r.audio)!=null&&i.encrypted||(n=r.video)!=null&&n.encrypted)&&(!this.config.emeEnabled||!this.keyLoader.emeController)){
const a=this.media,o=new Error(`Encrypted track with no key in ${
this.fragInfo(t)}
 (media ${
a?"attached mediaKeys: "+a.mediaKeys:"detached"}
)`);
return this.warn(o.message),!a||a.mediaKeys?!1:(this.hls.trigger(x.ERROR,{
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_NO_KEYS,fatal:!1,error:o,frag:t}
),this.resetTransmuxer(),!0)}
return!1}
fragContextChanged(e){
const{
fragCurrent:t}
=this;
return!e||!t||e.sn!==t.sn||e.level!==t.level}
fragBufferedComplete(e,t){
const i=this.mediaBuffer?this.mediaBuffer:this.media;
if(this.log(`Buffered ${
e.type}
 sn: ${
e.sn}
${
t?" part: "+t.index:""}
 of ${
this.fragInfo(e,!1,t)}
 > buffer:${
i?jE.toString(X.getBuffered(i)):"(detached)"}
)`),Ae(e)){
var n;
if(e.type!==H.SUBTITLE){
const a=e.elementaryStreams;
if(!Object.keys(a).some(o=>!!a[o])){
this.state=P.IDLE;
return}
}
const r=(n=this.levels)==null?void 0:n[e.level];
r!=null&&r.fragmentError&&(this.log(`Resetting level fragment error count of ${
r.fragmentError}
 on frag buffered`),r.fragmentError=0)}
this.state=P.IDLE}
_handleFragmentLoadComplete(e){
const{
transmuxer:t}
=this;
if(!t)return;
const{
frag:i,part:n,partsLoaded:r}
=e,a=!r||r.length===0||r.some(u=>!u),o=new Tc(i.level,i.sn,i.stats.chunkCount+1,0,n?n.index:-1,!a);
t.flush(o)}
_handleFragmentLoadProgress(e){
}
_doFragLoad(e,t,i=null,n){
var r;
this.fragCurrent=e;
const a=t.details;
if(!this.levels||!a)throw new Error(`frag load aborted, missing level${
a?"":" detail"}
s`);
let o=null;
if(e.encrypted&&!((r=e.decryptdata)!=null&&r.key)){
if(this.log(`Loading key for ${
e.sn}
 of [${
a.startSN}
-${
a.endSN}
], ${
this.playlistLabel()}
 ${
e.level}
`),this.state=P.KEY_LOADING,this.fragCurrent=e,o=this.keyLoader.load(e).then(h=>{
if(!this.fragContextChanged(h.frag))return this.hls.trigger(x.KEY_LOADED,h),this.state===P.KEY_LOADING&&(this.state=P.IDLE),h}
),this.hls.trigger(x.KEY_LOADING,{
frag:e}
),this.fragCurrent===null)return this.log("context changed in KEY_LOADING"),Promise.resolve(null)}
else e.encrypted||(o=this.keyLoader.loadClear(e,a.encryptedFragments,this.startFragRequested),o&&this.log("[eme] blocking frag load until media-keys acquired"));
const u=this.fragPrevious;
if(Ae(e)&&(!u||e.sn!==u.sn)){
const h=this.shouldLoadParts(t.details,e.end);
h!==this.loadingParts&&(this.log(`LL-Part loading ${
h?"ON":"OFF"}
 loading sn ${
u==null?void 0:u.sn}
->${
e.sn}
`),this.loadingParts=h)}
if(i=Math.max(e.start,i||0),this.loadingParts&&Ae(e)){
const h=a.partList;
if(h&&n){
i>a.fragmentEnd&&a.fragmentHint&&(e=a.fragmentHint);
const f=this.getNextPart(h,e,i);
if(f>-1){
const m=h[f];
e=this.fragCurrent=m.fragment,this.log(`Loading ${
e.type}
 sn: ${
e.sn}
 part: ${
m.index}
 (${
f}
/${
h.length-1}
) of ${
this.fragInfo(e,!1,m)}
) cc: ${
e.cc}
 [${
a.startSN}
-${
a.endSN}
], target: ${
parseFloat(i.toFixed(3))}
`),this.nextLoadPosition=m.start+m.duration,this.state=P.FRAG_LOADING;
let p;
return o?p=o.then(E=>!E||this.fragContextChanged(E.frag)?null:this.doFragPartsLoad(e,m,t,n)).catch(E=>this.handleFragLoadError(E)):p=this.doFragPartsLoad(e,m,t,n).catch(E=>this.handleFragLoadError(E)),this.hls.trigger(x.FRAG_LOADING,{
frag:e,part:m,targetBufferTime:i}
),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):p}
else if(!e.url||this.loadedEndOfParts(h,i))return Promise.resolve(null)}
}
if(Ae(e)&&this.loadingParts){
var l;
this.log(`LL-Part loading OFF after next part miss @${
i.toFixed(2)}
 Check buffer at sn: ${
e.sn}
 loaded parts: ${
(l=a.partList)==null?void 0:l.filter(h=>h.loaded).map(h=>`[${
h.start}
-${
h.end}
]`)}
`),this.loadingParts=!1}
else if(!e.url)return Promise.resolve(null);
this.log(`Loading ${
e.type}
 sn: ${
e.sn}
 of ${
this.fragInfo(e,!1)}
) cc: ${
e.cc}
 ${
"["+a.startSN+"-"+a.endSN+"]"}
, target: ${
parseFloat(i.toFixed(3))}
`),j(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=P.FRAG_LOADING;
const c=this.config.progressive&&e.type!==H.SUBTITLE;
let d;
return c&&o?d=o.then(h=>!h||this.fragContextChanged(h.frag)?null:this.fragmentLoader.load(e,n)).catch(h=>this.handleFragLoadError(h)):d=Promise.all([this.fragmentLoader.load(e,c?n:void 0),o]).then(([h])=>(!c&&n&&n(h),h)).catch(h=>this.handleFragLoadError(h)),this.hls.trigger(x.FRAG_LOADING,{
frag:e,targetBufferTime:i}
),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):d}
doFragPartsLoad(e,t,i,n){
return new Promise((r,a)=>{
var o;
const u=[],l=(o=i.details)==null?void 0:o.partList,c=d=>{
this.fragmentLoader.loadPart(e,d,n).then(h=>{
u[d.index]=h;
const f=h.part;
this.hls.trigger(x.FRAG_LOADED,h);
const m=Fh(i.details,e.sn,d.index+1)||gg(l,e.sn,d.index+1);
if(m)c(m);
else return r({
frag:e,part:f,partsLoaded:u}
)}
).catch(a)}
;
c(t)}
)}
handleFragLoadError(e){
if("data"in e){
const t=e.data;
t.frag&&t.details===b.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):t.frag&&t.type===Y.KEY_SYSTEM_ERROR?(t.frag.abortRequests(),this.resetStartWhenNotLoaded(),this.resetFragmentLoading(t.frag)):this.hls.trigger(x.ERROR,t)}
else this.hls.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0}
);
return null}
_handleTransmuxerFlush(e){
const t=this.getCurrentContext(e);
if(!t||this.state!==P.PARSING){
!this.fragCurrent&&this.state!==P.STOPPED&&this.state!==P.ERROR&&(this.state=P.IDLE);
return}
const{
frag:i,part:n,level:r}
=t,a=self.performance.now();
i.stats.parsing.end=a,n&&(n.stats.parsing.end=a);
const o=this.getLevelDetails(),l=o&&i.sn>o.endSN||this.shouldLoadParts(o,i.end);
l!==this.loadingParts&&(this.log(`LL-Part loading ${
l?"ON":"OFF"}
 after parsing segment ending @${
i.end.toFixed(2)}
`),this.loadingParts=l),this.updateLevelTiming(i,n,r,e.partial)}
shouldLoadParts(e,t){
if(this.config.lowLatencyMode){
if(!e)return this.loadingParts;
if(e.partList){
var i;
const r=e.partList[0];
if(r.fragment.type===H.SUBTITLE)return!1;
const a=r.end+(((i=e.fragmentHint)==null?void 0:i.duration)||0);
if(t>=a){
var n;
if((this.hls.hasEnoughToStart?((n=this.media)==null?void 0:n.currentTime)||this.lastCurrentTime:this.getLoadPosition())>r.start-r.fragment.duration)return!0}
}
}
return!1}
getCurrentContext(e){
const{
levels:t,fragCurrent:i}
=this,{
level:n,sn:r,part:a}
=e;
if(!(t!=null&&t[n]))return this.warn(`Levels object was unset while buffering fragment ${
r}
 of ${
this.playlistLabel()}
 ${
n}
. The current chunk will not be buffered.`),null;
const o=t[n],u=o.details,l=a>-1?Fh(u,r,a):null,c=l?l.fragment:mg(u,r,i);
return c?(i&&i!==c&&(c.stats=i.stats),{
frag:c,part:l,level:o}
):null}
bufferFragmentData(e,t,i,n,r){
if(this.state!==P.PARSING)return;
const{
data1:a,data2:o}
=e;
let u=a;
if(o&&(u=Rt(a,o)),!u.length)return;
const l=this.initPTS[t.cc],c=l?-l.baseTime/l.timescale:void 0,d={
type:e.type,frag:t,part:i,chunkMeta:n,offset:c,parent:t.type,data:u}
;
if(this.hls.trigger(x.BUFFER_APPENDING,d),e.dropped&&e.independent&&!i){
if(r)return;
this.flushBufferGap(t)}
}
flushBufferGap(e){
const t=this.media;
if(!t)return;
if(!X.isBuffered(t,t.currentTime)){
this.flushMainBuffer(0,e.start);
return}
const i=t.currentTime,n=X.bufferInfo(t,i,0),r=e.duration,a=Math.min(this.config.maxFragLookUpTolerance*2,r*.25),o=Math.max(Math.min(e.start-a,n.end-a),i+a);
e.start-o>a&&this.flushMainBuffer(o,e.start)}
getFwdBufferInfo(e,t){
var i;
const n=this.getLoadPosition();
if(!j(n))return null;
const a=this.lastCurrentTime>n||(i=this.media)!=null&&i.paused?0:this.config.maxBufferHole;
return this.getFwdBufferInfoAtPos(e,n,t,a)}
getFwdBufferInfoAtPos(e,t,i,n){
const r=X.bufferInfo(e,t,n);
if(r.len===0&&r.nextStart!==void 0){
const a=this.fragmentTracker.getBufferedFrag(t,i);
if(a&&(r.nextStart<=a.end||a.gap)){
const o=Math.max(Math.min(r.nextStart,a.end)-t,n);
return X.bufferInfo(e,t,o)}
}
return r}
getMaxBufferLength(e){
const{
config:t}
=this;
let i;
return e?i=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):i=t.maxBufferLength,Math.min(i,t.maxMaxBufferLength)}
reduceMaxBufferLength(e,t){
const i=this.config,n=Math.max(Math.min(e-t,i.maxBufferLength),t),r=Math.max(e-t*3,i.maxMaxBufferLength/2,n);
return r>=n?(i.maxMaxBufferLength=r,this.warn(`Reduce max buffer length to ${
r}
s`),!0):!1}
getAppendedFrag(e,t=H.MAIN){
const i=this.fragmentTracker?this.fragmentTracker.getAppendedFrag(e,t):null;
return i&&"fragment"in i?i.fragment:i}
getNextFragment(e,t){
const i=t.fragments,n=i.length;
if(!n)return null;
const{
config:r}
=this,a=i[0].start,o=r.lowLatencyMode&&!!t.partList;
let u=null;
if(t.live){
const d=r.initialLiveManifestSize;
if(n<d)return this.warn(`Not enough fragments to start playback (have: ${
n}
, need: ${
d}
)`),null;
if(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<a){
var l;
o&&!this.loadingParts&&(this.log("LL-Part loading ON for initial live fragment"),this.loadingParts=!0),u=this.getInitialLiveFragment(t);
const h=this.hls.startPosition,f=this.hls.liveSyncPosition,m=u?(h!==-1&&h>=a?h:f)||u.start:e;
this.log(`Setting startPosition to ${
m}
 to match start frag at live edge. mainStart: ${
h}
 liveSyncPosition: ${
f}
 frag.start: ${
(l=u)==null?void 0:l.start}
`),this.startPosition=this.nextLoadPosition=m}
}
else e<=a&&(u=i[0]);
if(!u){
const d=this.loadingParts?t.partEnd:t.fragmentEnd;
u=this.getFragmentAtPosition(e,d,t)}
let c=this.filterReplacedPrimary(u,t);
if(!c&&u){
const d=u.sn-t.startSN;
c=this.filterReplacedPrimary(i[d+1]||null,t)}
return this.mapToInitFragWhenRequired(c)}
isLoopLoading(e,t){
const i=this.fragmentTracker.getState(e);
return(i===be.OK||i===be.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}
getNextFragmentLoopLoading(e,t,i,n,r){
let a=null;
if(e.gap&&(a=this.getNextFragment(this.nextLoadPosition,t),a&&!a.gap&&i.nextStart)){
const o=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,i.nextStart,n,0);
if(o!==null&&i.len+o.len>=r){
const u=a.sn;
return this.loopSn!==u&&(this.log(`buffer full after gaps in "${
n}
" playlist starting at sn: ${
u}
`),this.loopSn=u),null}
}
return this.loopSn=void 0,a}
get primaryPrefetch(){
if($h(this.config)){
var e;
if((e=this.hls.interstitialsManager)==null||(e=e.playingItem)==null?void 0:e.event)return!0}
return!1}
filterReplacedPrimary(e,t){
if(!e)return e;
if($h(this.config)&&e.type!==H.SUBTITLE){
const i=this.hls.interstitialsManager,n=i==null?void 0:i.bufferingItem;
if(n){
const a=n.event;
if(a){
if(a.appendInPlace||Math.abs(e.start-n.start)>1||n.start===0)return null}
else if(e.end<=n.start&&(t==null?void 0:t.live)===!1||e.start>n.end&&n.nextEvent&&(n.nextEvent.appendInPlace||e.start-n.end>1))return null}
const r=i==null?void 0:i.playerQueue;
if(r)for(let a=r.length;
a--;
){
const o=r[a].interstitial;
if(o.appendInPlace&&e.start>=o.startTime&&e.end<=o.resumeTime)return null}
}
return e}
mapToInitFragWhenRequired(e){
return e!=null&&e.initSegment&&!e.initSegment.data&&!this.bitrateTest?e.initSegment:e}
getNextPart(e,t,i){
let n=-1,r=!1,a=!0;
for(let o=0,u=e.length;
o<u;
o++){
const l=e[o];
if(a=a&&!l.independent,n>-1&&i<l.start)break;
const c=l.loaded;
c?n=-1:(r||(l.independent||a)&&l.fragment===t)&&(l.fragment!==t&&this.warn(`Need buffer at ${
i}
 but next unloaded part starts at ${
l.start}
`),n=o),r=c}
return n}
loadedEndOfParts(e,t){
let i;
for(let n=e.length;
n--;
){
if(i=e[n],!i.loaded)return!1;
if(t>i.start)return!0}
return!1}
getInitialLiveFragment(e){
const t=e.fragments,i=this.fragPrevious;
let n=null;
if(i){
if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${
i.programDateTime}
`),n=iE(t,i.endProgramDateTime,this.config.maxFragLookUpTolerance)),!n){
const r=i.sn+1;
if(r>=e.startSN&&r<=e.endSN){
const a=t[r-e.startSN];
i.cc===a.cc&&(n=a,this.log(`Live playlist, switching playlist, load frag with next SN: ${
n.sn}
`))}
n||(n=eg(e,i.cc,i.end),n&&this.log(`Live playlist, switching playlist, load frag with same CC: ${
n.sn}
`))}
}
else{
const r=this.hls.liveSyncPosition;
r!==null&&(n=this.getFragmentAtPosition(r,this.bitrateTest?e.fragmentEnd:e.edge,e))}
return n}
getFragmentAtPosition(e,t,i){
const{
config:n}
=this;
let{
fragPrevious:r}
=this,{
fragments:a,endSN:o}
=i;
const{
fragmentHint:u}
=i,{
maxFragLookUpTolerance:l}
=n,c=i.partList,d=!!(this.loadingParts&&c!=null&&c.length&&u);
d&&!this.bitrateTest&&c[c.length-1].fragment.sn===u.sn&&(a=a.concat(u),o=u.sn);
let h;
if(e<t){
var f;
const p=e<this.lastCurrentTime||e>t-l||(f=this.media)!=null&&f.paused||!this.startFragRequested?0:l;
h=ai(r,a,e,p)}
else h=a[a.length-1];
if(h){
const m=h.sn-i.startSN,p=this.fragmentTracker.getState(h);
if((p===be.OK||p===be.PARTIAL&&h.gap)&&(r=h),r&&h.sn===r.sn&&(!d||c[0].fragment.sn>h.sn||!i.live)&&h.level===r.level){
const v=a[m+1];
h.sn<o&&this.fragmentTracker.getState(v)!==be.OK?h=v:h=null}
}
return h}
alignPlaylists(e,t,i){
const n=e.fragments.length;
if(!n)return this.warn("No fragments in live playlist"),0;
const r=e.fragmentStart,a=!t,o=e.alignedSliding&&j(r);
if(a||!o&&!r){
$E(i,e);
const u=e.fragmentStart;
return this.log(`Live playlist sliding: ${
u.toFixed(2)}
 start-sn: ${
t?t.startSN:"na"}
->${
e.startSN}
 fragments: ${
n}
`),u}
return r}
waitForCdnTuneIn(e){
return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}
setStartPosition(e,t){
let i=this.startPosition;
i<t&&(i=-1);
const n=this.timelineOffset;
if(i===-1){
const r=this.startTimeOffset!==null,a=r?this.startTimeOffset:e.startTimeOffset;
a!==null&&j(a)?(i=t+a,a<0&&(i+=e.edge),i=Math.min(Math.max(t,i),t+e.totalduration),this.log(`Setting startPosition to ${
i}
 for start time offset ${
a}
 found in ${
r?"multivariant":"media"}
 playlist`),this.startPosition=i):e.live?(i=this.hls.liveSyncPosition||t,this.log(`Setting startPosition to -1 to start at live edge ${
i}
`),this.startPosition=-1):(this.log("setting startPosition to 0 by default"),this.startPosition=i=0),this.lastCurrentTime=i+n}
this.nextLoadPosition=i+n}
getLoadPosition(){
var e;
const{
media:t}
=this;
let i=0;
return(e=this.hls)!=null&&e.hasEnoughToStart&&t?i=t.currentTime:this.nextLoadPosition>=0&&(i=this.nextLoadPosition),i}
handleFragLoadAborted(e,t){
this.transmuxer&&e.type===this.playlistType&&Ae(e)&&e.stats.aborted&&(this.log(`Fragment ${
e.sn}
${
t?" part "+t.index:""}
 of ${
this.playlistLabel()}
 ${
e.level}
 was aborted`),this.resetFragmentLoading(e))}
resetFragmentLoading(e){
(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==P.FRAG_LOADING_WAITING_RETRY)&&(this.state=P.IDLE)}
onFragmentOrKeyLoadError(e,t){
var i;
if(t.chunkMeta&&!t.frag){
const v=this.getCurrentContext(t.chunkMeta);
v&&(t.frag=v.frag)}
const n=t.frag;
if(!n||n.type!==e||!this.levels)return;
if(this.fragContextChanged(n)){
var r;
this.warn(`Frag load error must match current frag to retry ${
n.url}
 > ${
(r=this.fragCurrent)==null?void 0:r.url}
`);
return}
const a=t.details===b.FRAG_GAP;
a&&this.fragmentTracker.fragBuffered(n,!0);
const o=t.errorAction;
if(!o){
this.state=P.ERROR;
return}
const{
action:u,flags:l,retryCount:c=0,retryConfig:d}
=o,h=!!d,f=h&&u===Ue.RetryRequest,m=h&&!o.resolved&&l===ot.MoveAllAlternatesMatchingHost,p=(i=this.hls.latestLevelDetails)==null?void 0:i.live;
if(!f&&m&&Ae(n)&&!n.endList&&p&&!sg(t))this.resetFragmentErrors(e),this.treatAsGap(n),o.resolved=!0;
else if((f||m)&&c<d.maxNumRetry){
var E;
const v=ru((E=t.response)==null?void 0:E.code),y=Ec(d,c);
if(this.resetStartWhenNotLoaded(),this.retryDate=self.performance.now()+y,this.state=P.FRAG_LOADING_WAITING_RETRY,o.resolved=!0,v){
this.log("Waiting for connection (offline)"),this.retryDate=1/0,t.reason="offline";
return}
this.warn(`Fragment ${
n.sn}
 of ${
e}
 ${
n.level}
 errored with ${
t.details}
, retrying loading ${
c+1}
/${
d.maxNumRetry}
 in ${
y}
ms`)}
else if(d)if(this.resetFragmentErrors(e),c<d.maxNumRetry)!a&&u!==Ue.RemoveAlternatePermanently&&(o.resolved=!0);
else{
this.warn(`${
t.details}
 reached or exceeded max retry (${
c}
)`);
return}
else u===Ue.SendAlternateToPenaltyBox?this.state=P.WAITING_LEVEL:this.state=P.ERROR;
this.tickImmediate()}
checkRetryDate(){
const e=self.performance.now(),t=this.retryDate,i=t===1/0;
(!t||e>=t||i&&!ru(0))&&(i&&this.log("Connection restored (online)"),this.resetStartWhenNotLoaded(),this.state=P.IDLE)}
reduceLengthAndFlushBuffer(e){
if(this.state===P.PARSING||this.state===P.PARSED){
const t=e.frag,i=e.parent,n=this.getFwdBufferInfo(this.mediaBuffer,i),r=n&&n.len>.5;
r&&this.reduceMaxBufferLength(n.len,(t==null?void 0:t.duration)||10);
const a=!r;
return a&&this.warn(`Buffer full error while media.currentTime (${
this.getLoadPosition()}
) is not buffered, flush ${
i}
 buffer`),t&&(this.fragmentTracker.removeFragment(t),this.nextLoadPosition=t.start),this.resetLoadingState(),a}
return!1}
resetFragmentErrors(e){
e===H.AUDIO&&(this.fragCurrent=null),this.hls.hasEnoughToStart||(this.startFragRequested=!1),this.state!==P.STOPPED&&(this.state=P.IDLE)}
afterBufferFlushed(e,t,i){
if(!e)return;
const n=X.getBuffered(e);
this.fragmentTracker.detectEvictedFragments(t,n,i),this.state===P.ENDED&&this.resetLoadingState()}
resetLoadingState(){
this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state!==P.STOPPED&&(this.state=P.IDLE)}
resetStartWhenNotLoaded(){
if(!this.hls.hasEnoughToStart){
this.startFragRequested=!1;
const e=this.levelLastLoaded,t=e?e.details:null;
t!=null&&t.live?(this.log("resetting startPosition for live start"),this.startPosition=-1,this.setStartPosition(t,t.fragmentStart),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}
}
resetWhenMissingContext(e){
this.log(`Loading context changed while buffering sn ${
e.sn}
 of ${
this.playlistLabel()}
 ${
e.level===-1?"<removed>":e.level}
. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(),this.resetLoadingState()}
removeUnbufferedFrags(e=0){
this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}
updateLevelTiming(e,t,i,n){
const r=i.details;
if(!r){
this.warn("level.details undefined");
return}
if(!Object.keys(e.elementaryStreams).reduce((u,l)=>{
const c=e.elementaryStreams[l];
if(c){
const d=c.endPTS-c.startPTS;
if(d<=0)return this.warn(`Could not parse fragment ${
e.sn}
 ${
l}
 duration reliably (${
d}
)`),u||!1;
const h=n?0:dg(r,e,c.startPTS,c.endPTS,c.startDTS,c.endDTS,this);
return this.hls.trigger(x.LEVEL_PTS_UPDATED,{
details:r,level:i,drift:h,type:l,frag:e,start:c.startPTS,end:c.endPTS}
),!0}
return u}
,!1)){
var o;
const u=((o=this.transmuxer)==null?void 0:o.error)===null;
if((i.fragmentError===0||u&&(i.fragmentError<2||e.endList))&&this.treatAsGap(e,i),u){
const l=new Error(`Found no media in fragment ${
e.sn}
 of ${
this.playlistLabel()}
 ${
e.level}
 resetting transmuxer to fallback to playlist timing`);
if(this.warn(l.message),this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${
e.sn}
 of ${
this.playlistLabel()}
 "${
i.url}
"`}
),!this.hls)return;
this.resetTransmuxer()}
}
this.state=P.PARSED,this.log(`Parsed ${
e.type}
 sn: ${
e.sn}
${
t?" part: "+t.index:""}
 of ${
this.fragInfo(e,!1,t)}
)`),this.hls.trigger(x.FRAG_PARSED,{
frag:e,part:t}
)}
playlistLabel(){
return this.playlistType===H.MAIN?"level":"track"}
fragInfo(e,t=!0,i){
var n,r;
return`${
this.playlistLabel()}
 ${
e.level}
 (${
i?"part":"frag"}
:[${
((n=t&&!i?e.startPTS:(i||e).start)!=null?n:NaN).toFixed(3)}
-${
((r=t&&!i?e.endPTS:(i||e).end)!=null?r:NaN).toFixed(3)}
]${
i&&e.type==="main"?"INDEPENDENT="+(i.independent?"YES":"NO"):""}
`}
treatAsGap(e,t){
t&&t.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)}
resetTransmuxer(){
var e;
(e=this.transmuxer)==null||e.reset()}
recoverWorkerError(e){
e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null),this.resetStartWhenNotLoaded(),this.resetLoadingState())}
set state(e){
const t=this._state;
t!==e&&(this._state=e,this.log(`${
t}
->${
e}
`))}
get state(){
return this._state}
}
function $h(s){
return!!s.interstitialsController&&s.enableInterstitialPlayback!==!1}
class xg{
constructor(){
this.chunks=[],this.dataLength=0}
push(e){
this.chunks.push(e),this.dataLength+=e.length}
flush(){
const{
chunks:e,dataLength:t}
=this;
let i;
if(e.length)e.length===1?i=e[0]:i=GE(e,t);
else return new Uint8Array(0);
return this.reset(),i}
reset(){
this.chunks.length=0,this.dataLength=0}
}
function GE(s,e){
const t=new Uint8Array(e);
let i=0;
for(let n=0;
n<s.length;
n++){
const r=s[n];
t.set(r,i),i+=r.length}
return t}
var Ko={
exports:{
}
}
,jh;
function VE(){
return jh||(jh=1,function(s){
var e=Object.prototype.hasOwnProperty,t="~";
function i(){
}
Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));
function n(u,l,c){
this.fn=u,this.context=l,this.once=c||!1}
function r(u,l,c,d,h){
if(typeof c!="function")throw new TypeError("The listener must be a function");
var f=new n(c,d||u,h),m=t?t+l:l;
return u._events[m]?u._events[m].fn?u._events[m]=[u._events[m],f]:u._events[m].push(f):(u._events[m]=f,u._eventsCount++),u}
function a(u,l){
--u._eventsCount===0?u._events=new i:delete u._events[l]}
function o(){
this._events=new i,this._eventsCount=0}
o.prototype.eventNames=function(){
var l=[],c,d;
if(this._eventsCount===0)return l;
for(d in c=this._events)e.call(c,d)&&l.push(t?d.slice(1):d);
return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l}
,o.prototype.listeners=function(l){
var c=t?t+l:l,d=this._events[c];
if(!d)return[];
if(d.fn)return[d.fn];
for(var h=0,f=d.length,m=new Array(f);
h<f;
h++)m[h]=d[h].fn;
return m}
,o.prototype.listenerCount=function(l){
var c=t?t+l:l,d=this._events[c];
return d?d.fn?1:d.length:0}
,o.prototype.emit=function(l,c,d,h,f,m){
var p=t?t+l:l;
if(!this._events[p])return!1;
var E=this._events[p],v=arguments.length,y,S;
if(E.fn){
switch(E.once&&this.removeListener(l,E.fn,void 0,!0),v){
case 1:return E.fn.call(E.context),!0;
case 2:return E.fn.call(E.context,c),!0;
case 3:return E.fn.call(E.context,c,d),!0;
case 4:return E.fn.call(E.context,c,d,h),!0;
case 5:return E.fn.call(E.context,c,d,h,f),!0;
case 6:return E.fn.call(E.context,c,d,h,f,m),!0}
for(S=1,y=new Array(v-1);
S<v;
S++)y[S-1]=arguments[S];
E.fn.apply(E.context,y)}
else{
var T=E.length,I;
for(S=0;
S<T;
S++)switch(E[S].once&&this.removeListener(l,E[S].fn,void 0,!0),v){
case 1:E[S].fn.call(E[S].context);
break;
case 2:E[S].fn.call(E[S].context,c);
break;
case 3:E[S].fn.call(E[S].context,c,d);
break;
case 4:E[S].fn.call(E[S].context,c,d,h);
break;
default:if(!y)for(I=1,y=new Array(v-1);
I<v;
I++)y[I-1]=arguments[I];
E[S].fn.apply(E[S].context,y)}
}
return!0}
,o.prototype.on=function(l,c,d){
return r(this,l,c,d,!1)}
,o.prototype.once=function(l,c,d){
return r(this,l,c,d,!0)}
,o.prototype.removeListener=function(l,c,d,h){
var f=t?t+l:l;
if(!this._events[f])return this;
if(!c)return a(this,f),this;
var m=this._events[f];
if(m.fn)m.fn===c&&(!h||m.once)&&(!d||m.context===d)&&a(this,f);
else{
for(var p=0,E=[],v=m.length;
p<v;
p++)(m[p].fn!==c||h&&!m[p].once||d&&m[p].context!==d)&&E.push(m[p]);
E.length?this._events[f]=E.length===1?E[0]:E:a(this,f)}
return this}
,o.prototype.removeAllListeners=function(l){
var c;
return l?(c=t?t+l:l,this._events[c]&&a(this,c)):(this._events=new i,this._eventsCount=0),this}
,o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,s.exports=o}
(Ko)),Ko.exports}
var KE=VE(),Rc=gx(KE);
const Yn="1.6.15",Yi={
}
;
function HE(){
return typeof __HLS_WORKER_BUNDLE__=="function"}
function zE(){
const s=Yi[Yn];
if(s)return s.clientCount++,s;
const e=new self.Blob([`var exports={
}
;
var module={
exports:exports}
;
function define(f){
f()}
;
define.amd=true;
(${
__HLS_WORKER_BUNDLE__.toString()}
)(true);
`],{
type:"text/javascript"}
),t=self.URL.createObjectURL(e),n={
worker:new self.Worker(t),objectURL:t,clientCount:1}
;
return Yi[Yn]=n,n}
function WE(s){
const e=Yi[s];
if(e)return e.clientCount++,e;
const t=new self.URL(s,self.location.href).href,n={
worker:new self.Worker(t),scriptURL:t,clientCount:1}
;
return Yi[s]=n,n}
function YE(s){
const e=Yi[s||Yn];
if(e&&e.clientCount--===1){
const{
worker:i,objectURL:n}
=e;
delete Yi[s||Yn],n&&self.URL.revokeObjectURL(n),i.terminate()}
}
function Eg(s,e){
return e+10<=s.length&&s[e]===51&&s[e+1]===68&&s[e+2]===73&&s[e+3]<255&&s[e+4]<255&&s[e+6]<128&&s[e+7]<128&&s[e+8]<128&&s[e+9]<128}
function _c(s,e){
return e+10<=s.length&&s[e]===73&&s[e+1]===68&&s[e+2]===51&&s[e+3]<255&&s[e+4]<255&&s[e+6]<128&&s[e+7]<128&&s[e+8]<128&&s[e+9]<128}
function no(s,e){
let t=0;
return t=(s[e]&127)<<21,t|=(s[e+1]&127)<<14,t|=(s[e+2]&127)<<7,t|=s[e+3]&127,t}
function qn(s,e){
const t=e;
let i=0;
for(;
_c(s,e);
){
i+=10;
const n=no(s,e+6);
i+=n,Eg(s,e+10)&&(i+=10),e+=i}
if(i>0)return s.subarray(t,t+i)}
function qE(s,e,t,i){
const n=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],r=e[t+2],a=r>>2&15;
if(a>12){
const f=new Error(`invalid ADTS sampling index:${
a}
`);
s.emit(x.ERROR,x.ERROR,{
type:Y.MEDIA_ERROR,details:b.FRAG_PARSING_ERROR,fatal:!0,error:f,reason:f.message}
);
return}
const o=(r>>6&3)+1,u=e[t+3]>>6&3|(r&1)<<2,l="mp4a.40."+o,c=n[a];
let d=a;
(o===5||o===29)&&(d-=3);
const h=[o<<3|(d&14)>>1,(d&1)<<7|u<<3];
return oe.log(`manifest codec:${
i}
, parsed codec:${
l}
, channels:${
u}
, rate:${
c}
 (ADTS object type:${
o}
 sampling index:${
a}
)`),{
config:h,samplerate:c,channelCount:u,codec:l,parsedCodec:l,manifestCodec:i}
}
function Sg(s,e){
return s[e]===255&&(s[e+1]&246)===240}
function Tg(s,e){
return s[e+1]&1?7:9}
function wc(s,e){
return(s[e+3]&3)<<11|s[e+4]<<3|(s[e+5]&224)>>>5}
function QE(s,e){
return e+5<s.length}
function Ba(s,e){
return e+1<s.length&&Sg(s,e)}
function XE(s,e){
return QE(s,e)&&Sg(s,e)&&wc(s,e)<=s.length-e}
function ZE(s,e){
if(Ba(s,e)){
const t=Tg(s,e);
if(e+t>=s.length)return!1;
const i=wc(s,e);
if(i<=t)return!1;
const n=e+i;
return n===s.length||Ba(s,n)}
return!1}
function Ig(s,e,t,i,n){
if(!s.samplerate){
const r=qE(e,t,i,n);
if(!r)return;
ue(s,r)}
}
function Lg(s){
return 1024*9e4/s}
function JE(s,e){
const t=Tg(s,e);
if(e+t<=s.length){
const i=wc(s,e)-t;
if(i>0)return{
headerLength:t,frameLength:i}
}
}
function Ag(s,e,t,i,n){
const r=Lg(s.samplerate),a=i+n*r,o=JE(e,t);
let u;
if(o){
const{
frameLength:d,headerLength:h}
=o,f=h+d,m=Math.max(0,t+f-e.length);
m?(u=new Uint8Array(f-h),u.set(e.subarray(t+h,e.length),0)):u=e.subarray(t+h,t+f);
const p={
unit:u,pts:a}
;
return m||s.samples.push(p),{
sample:p,length:f,missing:m}
}
const l=e.length-t;
return u=new Uint8Array(l),u.set(e.subarray(t,e.length),0),{
sample:{
unit:u,pts:a}
,length:l,missing:-1}
}
function eS(s,e){
return _c(s,e)&&no(s,e+6)+10<=s.length-e}
function tS(s){
return s instanceof ArrayBuffer?s:s.byteOffset==0&&s.byteLength==s.buffer.byteLength?s.buffer:new Uint8Array(s).buffer}
function Ho(s,e=0,t=1/0){
return sS(s,e,t,Uint8Array)}
function sS(s,e,t,i){
const n=iS(s);
let r=1;
"BYTES_PER_ELEMENT"in i&&(r=i.BYTES_PER_ELEMENT);
const a=nS(s)?s.byteOffset:0,o=(a+s.byteLength)/r,u=(a+e)/r,l=Math.floor(Math.max(0,Math.min(u,o))),c=Math.floor(Math.min(l+Math.max(t,0),o));
return new i(n,l,c-l)}
function iS(s){
return s instanceof ArrayBuffer?s:s.buffer}
function nS(s){
return s&&s.buffer instanceof ArrayBuffer&&s.byteLength!==void 0&&s.byteOffset!==void 0}
function rS(s){
const e={
key:s.type,description:"",data:"",mimeType:null,pictureType:null}
,t=3;
if(s.size<2)return;
if(s.data[0]!==t){
console.log("Ignore frame with unrecognized character encoding");
return}
const i=s.data.subarray(1).indexOf(0);
if(i===-1)return;
const n=mt(Ho(s.data,1,i)),r=s.data[2+i],a=s.data.subarray(3+i).indexOf(0);
if(a===-1)return;
const o=mt(Ho(s.data,3+i,a));
let u;
return n==="-->"?u=mt(Ho(s.data,4+i+a)):u=tS(s.data.subarray(4+i+a)),e.mimeType=n,e.pictureType=r,e.description=o,e.data=u,e}
function aS(s){
if(s.size<2)return;
const e=mt(s.data,!0),t=new Uint8Array(s.data.subarray(e.length+1));
return{
key:s.type,info:e,data:t.buffer}
}
function oS(s){
if(s.size<2)return;
if(s.type==="TXXX"){
let t=1;
const i=mt(s.data.subarray(t),!0);
t+=i.length+1;
const n=mt(s.data.subarray(t));
return{
key:s.type,info:i,data:n}
}
const e=mt(s.data.subarray(1));
return{
key:s.type,info:"",data:e}
}
function lS(s){
if(s.type==="WXXX"){
if(s.size<2)return;
let t=1;
const i=mt(s.data.subarray(t),!0);
t+=i.length+1;
const n=mt(s.data.subarray(t));
return{
key:s.type,info:i,data:n}
}
const e=mt(s.data);
return{
key:s.type,info:"",data:e}
}
function uS(s){
return s.type==="PRIV"?aS(s):s.type[0]==="W"?lS(s):s.type==="APIC"?rS(s):oS(s)}
function cS(s){
const e=String.fromCharCode(s[0],s[1],s[2],s[3]),t=no(s,4),i=10;
return{
type:e,size:t,data:s.subarray(i,i+t)}
}
const _r=10,dS=10;
function Rg(s){
let e=0;
const t=[];
for(;
_c(s,e);
){
const i=no(s,e+6);
s[e+5]>>6&1&&(e+=_r),e+=_r;
const n=e+i;
for(;
e+dS<n;
){
const r=cS(s.subarray(e)),a=uS(r);
a&&t.push(a),e+=r.size+_r}
Eg(s,e)&&(e+=_r)}
return t}
function _g(s){
return s&&s.key==="PRIV"&&s.info==="com.apple.streaming.transportStreamTimestamp"}
function hS(s){
if(s.data.byteLength===8){
const e=new Uint8Array(s.data),t=e[3]&1;
let i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];
return i/=45,t&&(i+=4772185884e-2),Math.round(i)}
}
function kc(s){
const e=Rg(s);
for(let t=0;
t<e.length;
t++){
const i=e[t];
if(_g(i))return hS(i)}
}
let ct=function(s){
return s.audioId3="org.id3",s.dateRange="com.apple.quicktime.HLS",s.emsg="https://aomedia.org/emsg/ID3",s.misbklv="urn:misb:KLV:bin:1910.1",s}
({
}
);
function Kt(s="",e=9e4){
return{
type:s,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}
}
class bc{
constructor(){
this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}
resetInitSegment(e,t,i,n){
this._id3Track={
type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}
}
resetTimeStamp(e){
this.initPTS=e,this.resetContiguity()}
resetContiguity(){
this.basePTS=null,this.lastPTS=null,this.frameIndex=0}
canParse(e,t){
return!1}
appendFrame(e,t,i){
}
demux(e,t){
this.cachedData&&(e=Rt(this.cachedData,e),this.cachedData=null);
let i=qn(e,0),n=i?i.length:0,r;
const a=this._audioTrack,o=this._id3Track,u=i?kc(i):void 0,l=e.length;
for((this.basePTS===null||this.frameIndex===0&&j(u))&&(this.basePTS=fS(u,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),i&&i.length>0&&o.samples.push({
pts:this.lastPTS,dts:this.lastPTS,data:i,type:ct.audioId3,duration:Number.POSITIVE_INFINITY}
);
n<l;
){
if(this.canParse(e,n)){
const c=this.appendFrame(a,e,n);
c?(this.frameIndex++,this.lastPTS=c.sample.pts,n+=c.length,r=n):n=l}
else eS(e,n)?(i=qn(e,n),o.samples.push({
pts:this.lastPTS,dts:this.lastPTS,data:i,type:ct.audioId3,duration:Number.POSITIVE_INFINITY}
),n+=i.length,r=n):n++;
if(n===l&&r!==l){
const c=e.slice(r);
this.cachedData?this.cachedData=Rt(this.cachedData,c):this.cachedData=c}
}
return{
audioTrack:a,videoTrack:Kt(),id3Track:o,textTrack:Kt()}
}
demuxSampleAes(e,t,i){
return Promise.reject(new Error(`[${
this}
] This demuxer does not support Sample-AES decryption`))}
flush(e){
const t=this.cachedData;
return t&&(this.cachedData=null,this.demux(t,0)),{
audioTrack:this._audioTrack,videoTrack:Kt(),id3Track:this._id3Track,textTrack:Kt()}
}
destroy(){
this.cachedData=null,this._audioTrack=this._id3Track=void 0}
}
const fS=(s,e,t)=>{
if(j(s))return s*90;
const i=t?t.baseTime*9e4/t.timescale:0;
return e*9e4+i}
;
let wr=null;
const mS=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],gS=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],pS=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],yS=[0,1,1,4];
function wg(s,e,t,i,n){
if(t+24>e.length)return;
const r=kg(e,t);
if(r&&t+r.frameLength<=e.length){
const a=r.samplesPerFrame*9e4/r.sampleRate,o=i+n*a,u={
unit:e.subarray(t,t+r.frameLength),pts:o,dts:o}
;
return s.config=[],s.channelCount=r.channelCount,s.samplerate=r.sampleRate,s.samples.push(u),{
sample:u,length:r.frameLength,missing:0}
}
}
function kg(s,e){
const t=s[e+1]>>3&3,i=s[e+1]>>1&3,n=s[e+2]>>4&15,r=s[e+2]>>2&3;
if(t!==1&&n!==0&&n!==15&&r!==3){
const a=s[e+2]>>1&1,o=s[e+3]>>6,u=t===3?3-i:i===3?3:4,l=mS[u*14+n-1]*1e3,d=gS[(t===3?0:t===2?1:2)*3+r],h=o===3?1:2,f=pS[t][i],m=yS[i],p=f*8*m,E=Math.floor(f*l/d+a)*m;
if(wr===null){
const S=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);
wr=S?parseInt(S[1]):0}
return!!wr&&wr<=87&&i===2&&l>=224e3&&o===0&&(s[e+3]=s[e+3]|128),{
sampleRate:d,channelCount:h,frameLength:E,samplesPerFrame:p}
}
}
function Cc(s,e){
return s[e]===255&&(s[e+1]&224)===224&&(s[e+1]&6)!==0}
function bg(s,e){
return e+1<s.length&&Cc(s,e)}
function vS(s,e){
return Cc(s,e)&&4<=s.length-e}
function Cg(s,e){
if(e+1<s.length&&Cc(s,e)){
const i=kg(s,e);
let n=4;
i!=null&&i.frameLength&&(n=i.frameLength);
const r=e+n;
return r===s.length||bg(s,r)}
return!1}
class xS extends bc{
constructor(e,t){
super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}
resetInitSegment(e,t,i,n){
super.resetInitSegment(e,t,i,n),this._audioTrack={
container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:n,inputTimeScale:9e4,dropped:0}
}
static probe(e,t){
if(!e)return!1;
const i=qn(e,0);
let n=(i==null?void 0:i.length)||0;
if(Cg(e,n))return!1;
for(let r=e.length;
n<r;
n++)if(ZE(e,n))return t.log("ADTS sync word found !"),!0;
return!1}
canParse(e,t){
return XE(e,t)}
appendFrame(e,t,i){
Ig(e,this.observer,t,i,e.manifestCodec);
const n=Ag(e,t,i,this.basePTS,this.frameIndex);
if(n&&n.missing===0)return n}
}
const Dg=(s,e)=>{
let t=0,i=5;
e+=i;
const n=new Uint32Array(1),r=new Uint32Array(1),a=new Uint8Array(1);
for(;
i>0;
){
a[0]=s[e];
const o=Math.min(i,8),u=8-o;
r[0]=4278190080>>>24+u<<u,n[0]=(a[0]&r[0])>>u,t=t?t<<o|n[0]:n[0],e+=1,i-=o}
return t}
;
class ES extends bc{
constructor(e){
super(),this.observer=void 0,this.observer=e}
resetInitSegment(e,t,i,n){
super.resetInitSegment(e,t,i,n),this._audioTrack={
container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:n,inputTimeScale:9e4,dropped:0}
}
canParse(e,t){
return t+64<e.length}
appendFrame(e,t,i){
const n=Pg(e,t,i,this.basePTS,this.frameIndex);
if(n!==-1)return{
sample:e.samples[e.samples.length-1],length:n,missing:0}
}
static probe(e){
if(!e)return!1;
const t=qn(e,0);
if(!t)return!1;
const i=t.length;
return e[i]===11&&e[i+1]===119&&kc(t)!==void 0&&Dg(e,i)<16}
}
function Pg(s,e,t,i,n){
if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;
const r=e[t+4]>>6;
if(r>=3)return-1;
const o=[48e3,44100,32e3][r],u=e[t+4]&63,c=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][u*3+r]*2;
if(t+c>e.length)return-1;
const d=e[t+6]>>5;
let h=0;
d===2?h+=2:(d&1&&d!==1&&(h+=2),d&4&&(h+=2));
const f=(e[t+6]<<8|e[t+7])>>12-h&1,p=[2,1,2,3,3,4,4,5][d]+f,E=e[t+5]>>3,v=e[t+5]&7,y=new Uint8Array([r<<6|E<<1|v>>2,(v&3)<<6|d<<3|f<<2|u>>4,u<<4&224]),S=1536/o*9e4,T=i+n*S,I=e.subarray(t,t+c);
return s.config=y,s.channelCount=p,s.samplerate=o,s.samples.push({
unit:I,pts:T}
),c}
class SS extends bc{
resetInitSegment(e,t,i,n){
super.resetInitSegment(e,t,i,n),this._audioTrack={
container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:n,inputTimeScale:9e4,dropped:0}
}
static probe(e){
if(!e)return!1;
const t=qn(e,0);
let i=(t==null?void 0:t.length)||0;
if(t&&e[i]===11&&e[i+1]===119&&kc(t)!==void 0&&Dg(e,i)<=16)return!1;
for(let n=e.length;
i<n;
i++)if(Cg(e,i))return oe.log("MPEG Audio sync word found !"),!0;
return!1}
canParse(e,t){
return vS(e,t)}
appendFrame(e,t,i){
if(this.basePTS!==null)return wg(e,t,i,this.basePTS,this.frameIndex)}
}
const TS=/\/emsg[-/]ID3/i;
class IS{
constructor(e,t){
this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}
resetTimeStamp(){
}
resetInitSegment(e,t,i,n){
const r=this.videoTrack=Kt("video",1),a=this.audioTrack=Kt("audio",1),o=this.txtTrack=Kt("text",1);
if(this.id3Track=Kt("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;
const u=Vm(e);
if(u.video){
const{
id:l,timescale:c,codec:d,supplemental:h}
=u.video;
r.id=l,r.timescale=o.timescale=c,r.codec=d,r.supplemental=h}
if(u.audio){
const{
id:l,timescale:c,codec:d}
=u.audio;
a.id=l,a.timescale=c,a.codec=d}
o.id=$m.text,r.sampleDuration=0,r.duration=a.duration=n}
resetContiguity(){
this.remainderData=null}
static probe(e){
return Ex(e)}
demux(e,t){
this.timeOffset=t;
let i=e;
const n=this.videoTrack,r=this.txtTrack;
if(this.config.progressive){
this.remainderData&&(i=Rt(this.remainderData,e));
const o=_x(i);
this.remainderData=o.remainder,n.samples=o.valid||new Uint8Array}
else n.samples=i;
const a=this.extractID3Track(n,t);
return r.samples=rh(t,n),{
videoTrack:n,audioTrack:this.audioTrack,id3Track:a,textTrack:this.txtTrack}
}
flush(){
const e=this.timeOffset,t=this.videoTrack,i=this.txtTrack;
t.samples=this.remainderData||new Uint8Array,this.remainderData=null;
const n=this.extractID3Track(t,this.timeOffset);
return i.samples=rh(e,t),{
videoTrack:t,audioTrack:Kt(),id3Track:n,textTrack:Kt()}
}
extractID3Track(e,t){
const i=this.id3Track;
if(e.samples.length){
const n=ee(e.samples,["emsg"]);
n&&n.forEach(r=>{
const a=kx(r);
if(TS.test(a.schemeIdUri)){
const o=Gh(a,t);
let u=a.eventDuration===4294967295?Number.POSITIVE_INFINITY:a.eventDuration/a.timeScale;
u<=.001&&(u=Number.POSITIVE_INFINITY);
const l=a.payload;
i.samples.push({
data:l,len:l.byteLength,dts:o,pts:o,type:ct.emsg,duration:u}
)}
else if(this.config.enableEmsgKLVMetadata&&a.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")){
const o=Gh(a,t);
i.samples.push({
data:a.payload,len:a.payload.byteLength,dts:o,pts:o,type:ct.misbklv,duration:Number.POSITIVE_INFINITY}
)}
}
)}
return i}
demuxSampleAes(e,t,i){
return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}
destroy(){
this.config=null,this.remainderData=null,this.videoTrack=this.audioTrack=this.id3Track=this.txtTrack=void 0}
}
function Gh(s,e){
return j(s.presentationTime)?s.presentationTime/s.timeScale:e+s.presentationTimeDelta/s.timeScale}
class LS{
constructor(e,t,i){
this.keyData=void 0,this.decrypter=void 0,this.keyData=i,this.decrypter=new Sc(t,{
removePKCS7Padding:!1}
)}
decryptBuffer(e){
return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer,Ms.cbc)}
decryptAacSample(e,t,i){
const n=e[t].unit;
if(n.length<=16)return;
const r=n.subarray(16,n.length-n.length%16),a=r.buffer.slice(r.byteOffset,r.byteOffset+r.length);
this.decryptBuffer(a).then(o=>{
const u=new Uint8Array(o);
n.set(u,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,i)}
).catch(i)}
decryptAacSamples(e,t,i){
for(;
;
t++){
if(t>=e.length){
i();
return}
if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,i),!this.decrypter.isSync()))return}
}
getAvcEncryptedData(e){
const t=Math.floor((e.length-48)/160)*16+16,i=new Int8Array(t);
let n=0;
for(let r=32;
r<e.length-16;
r+=160,n+=16)i.set(e.subarray(r,r+16),n);
return i}
getAvcDecryptedUnit(e,t){
const i=new Uint8Array(t);
let n=0;
for(let r=32;
r<e.length-16;
r+=160,n+=16)e.set(i.subarray(n,n+16),r);
return e}
decryptAvcSample(e,t,i,n,r){
const a=zm(r.data),o=this.getAvcEncryptedData(a);
this.decryptBuffer(o.buffer).then(u=>{
r.data=this.getAvcDecryptedUnit(a,u),this.decrypter.isSync()||this.decryptAvcSamples(e,t,i+1,n)}
).catch(n)}
decryptAvcSamples(e,t,i,n){
if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");
for(;
;
t++,i=0){
if(t>=e.length){
n();
return}
const r=e[t].units;
for(;
!(i>=r.length);
i++){
const a=r[i];
if(!(a.data.length<=48||a.type!==1&&a.type!==5)&&(this.decryptAvcSample(e,t,i,n,a),!this.decrypter.isSync()))return}
}
}
}
class Ng{
constructor(){
this.VideoSample=null}
createVideoSample(e,t,i){
return{
key:e,frame:!1,pts:t,dts:i,units:[],length:0}
}
getLastNalUnit(e){
var t;
let i=this.VideoSample,n;
if((!i||i.units.length===0)&&(i=e[e.length-1]),(t=i)!=null&&t.units){
const r=i.units;
n=r[r.length-1]}
return n}
pushAccessUnit(e,t){
if(e.units.length&&e.frame){
if(e.pts===void 0){
const i=t.samples,n=i.length;
if(n){
const r=i[n-1];
e.pts=r.pts,e.dts=r.dts}
else{
t.dropped++;
return}
}
t.samples.push(e)}
}
parseNALu(e,t,i){
const n=t.byteLength;
let r=e.naluState||0;
const a=r,o=[];
let u=0,l,c,d,h=-1,f=0;
for(r===-1&&(h=0,f=this.getNALuType(t,0),r=0,u=1);
u<n;
){
if(l=t[u++],!r){
r=l?0:1;
continue}
if(r===1){
r=l?0:2;
continue}
if(!l)r=3;
else if(l===1){
if(c=u-r-1,h>=0){
const m={
data:t.subarray(h,c),type:f}
;
o.push(m)}
else{
const m=this.getLastNalUnit(e.samples);
m&&(a&&u<=4-a&&m.state&&(m.data=m.data.subarray(0,m.data.byteLength-a)),c>0&&(m.data=Rt(m.data,t.subarray(0,c)),m.state=0))}
u<n?(d=this.getNALuType(t,u),h=u,f=d,r=0):r=-1}
else r=0}
if(h>=0&&r>=0){
const m={
data:t.subarray(h,n),type:f,state:r}
;
o.push(m)}
if(o.length===0){
const m=this.getLastNalUnit(e.samples);
m&&(m.data=Rt(m.data,t))}
return e.naluState=r,o}
}
class Rn{
constructor(e){
this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}
loadWord(){
const e=this.data,t=this.bytesAvailable,i=e.byteLength-t,n=new Uint8Array(4),r=Math.min(4,t);
if(r===0)throw new Error("no bytes available");
n.set(e.subarray(i,i+r)),this.word=new DataView(n.buffer).getUint32(0),this.bitsAvailable=r*8,this.bytesAvailable-=r}
skipBits(e){
let t;
e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}
readBits(e){
let t=Math.min(this.bitsAvailable,e);
const i=this.word>>>32-t;
if(e>32&&oe.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;
else if(this.bytesAvailable>0)this.loadWord();
else throw new Error("no bits available");
return t=e-t,t>0&&this.bitsAvailable?i<<t|this.readBits(t):i}
skipLZ(){
let e;
for(e=0;
e<this.bitsAvailable;
++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;
return this.loadWord(),e+this.skipLZ()}
skipUEG(){
this.skipBits(1+this.skipLZ())}
skipEG(){
this.skipBits(1+this.skipLZ())}
readUEG(){
const e=this.skipLZ();
return this.readBits(e+1)-1}
readEG(){
const e=this.readUEG();
return 1&e?1+e>>>1:-1*(e>>>1)}
readBoolean(){
return this.readBits(1)===1}
readUByte(){
return this.readBits(8)}
readUShort(){
return this.readBits(16)}
readUInt(){
return this.readBits(32)}
}
class AS extends Ng{
parsePES(e,t,i,n){
const r=this.parseNALu(e,i.data,n);
let a=this.VideoSample,o,u=!1;
i.data=null,a&&r.length&&!e.audFound&&(this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,i.pts,i.dts)),r.forEach(l=>{
var c,d;
switch(l.type){
case 1:{
let p=!1;
o=!0;
const E=l.data;
if(u&&E.length>4){
const v=this.readSliceType(E);
(v===2||v===4||v===7||v===9)&&(p=!0)}
if(p){
var h;
(h=a)!=null&&h.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null)}
a||(a=this.VideoSample=this.createVideoSample(!0,i.pts,i.dts)),a.frame=!0,a.key=p;
break}
case 5:o=!0,(c=a)!=null&&c.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null),a||(a=this.VideoSample=this.createVideoSample(!0,i.pts,i.dts)),a.key=!0,a.frame=!0;
break;
case 6:{
o=!0,yc(l.data,1,i.pts,t.samples);
break}
case 7:{
var f,m;
o=!0,u=!0;
const p=l.data,E=this.readSPS(p);
if(!e.sps||e.width!==E.width||e.height!==E.height||((f=e.pixelRatio)==null?void 0:f[0])!==E.pixelRatio[0]||((m=e.pixelRatio)==null?void 0:m[1])!==E.pixelRatio[1]){
e.width=E.width,e.height=E.height,e.pixelRatio=E.pixelRatio,e.sps=[p];
const v=p.subarray(1,4);
let y="avc1.";
for(let S=0;
S<3;
S++){
let T=v[S].toString(16);
T.length<2&&(T="0"+T),y+=T}
e.codec=y}
break}
case 8:o=!0,e.pps=[l.data];
break;
case 9:o=!0,e.audFound=!0,(d=a)!=null&&d.frame&&(this.pushAccessUnit(a,e),a=null),a||(a=this.VideoSample=this.createVideoSample(!1,i.pts,i.dts));
break;
case 12:o=!0;
break;
default:o=!1;
break}
a&&o&&a.units.push(l)}
),n&&a&&(this.pushAccessUnit(a,e),this.VideoSample=null)}
getNALuType(e,t){
return e[t]&31}
readSliceType(e){
const t=new Rn(e);
return t.readUByte(),t.readUEG(),t.readUEG()}
skipScalingList(e,t){
let i=8,n=8,r;
for(let a=0;
a<e;
a++)n!==0&&(r=t.readEG(),n=(i+r+256)%256),i=n===0?i:n}
readSPS(e){
const t=new Rn(e);
let i=0,n=0,r=0,a=0,o,u,l;
const c=t.readUByte.bind(t),d=t.readBits.bind(t),h=t.readUEG.bind(t),f=t.readBoolean.bind(t),m=t.skipBits.bind(t),p=t.skipEG.bind(t),E=t.skipUEG.bind(t),v=this.skipScalingList.bind(this);
c();
const y=c();
if(d(5),m(3),c(),E(),y===100||y===110||y===122||y===244||y===44||y===83||y===86||y===118||y===128){
const R=h();
if(R===3&&m(1),E(),E(),m(1),f())for(u=R!==3?8:12,l=0;
l<u;
l++)f()&&(l<6?v(16,t):v(64,t))}
E();
const S=h();
if(S===0)h();
else if(S===1)for(m(1),p(),p(),o=h(),l=0;
l<o;
l++)p();
E(),m(1);
const T=h(),I=h(),_=d(1);
_===0&&m(1),m(1),f()&&(i=h(),n=h(),r=h(),a=h());
let L=[1,1];
if(f()&&f())switch(c()){
case 1:L=[1,1];
break;
case 2:L=[12,11];
break;
case 3:L=[10,11];
break;
case 4:L=[16,11];
break;
case 5:L=[40,33];
break;
case 6:L=[24,11];
break;
case 7:L=[20,11];
break;
case 8:L=[32,11];
break;
case 9:L=[80,33];
break;
case 10:L=[18,11];
break;
case 11:L=[15,11];
break;
case 12:L=[64,33];
break;
case 13:L=[160,99];
break;
case 14:L=[4,3];
break;
case 15:L=[3,2];
break;
case 16:L=[2,1];
break;
case 255:{
L=[c()<<8|c(),c()<<8|c()];
break}
}
return{
width:Math.ceil((T+1)*16-i*2-n*2),height:(2-_)*(I+1)*16-(_?2:4)*(r+a),pixelRatio:L}
}
}
class RS extends Ng{
constructor(...e){
super(...e),this.initVPS=null}
parsePES(e,t,i,n){
const r=this.parseNALu(e,i.data,n);
let a=this.VideoSample,o,u=!1;
i.data=null,a&&r.length&&!e.audFound&&(this.pushAccessUnit(a,e),a=this.VideoSample=this.createVideoSample(!1,i.pts,i.dts)),r.forEach(l=>{
var c,d;
switch(l.type){
case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:a||(a=this.VideoSample=this.createVideoSample(!1,i.pts,i.dts)),a.frame=!0,o=!0;
break;
case 16:case 17:case 18:case 21:if(o=!0,u){
var h;
(h=a)!=null&&h.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null)}
a||(a=this.VideoSample=this.createVideoSample(!0,i.pts,i.dts)),a.key=!0,a.frame=!0;
break;
case 19:case 20:o=!0,(c=a)!=null&&c.frame&&!a.key&&(this.pushAccessUnit(a,e),a=this.VideoSample=null),a||(a=this.VideoSample=this.createVideoSample(!0,i.pts,i.dts)),a.key=!0,a.frame=!0;
break;
case 39:o=!0,yc(l.data,2,i.pts,t.samples);
break;
case 32:o=!0,e.vps||(typeof e.params!="object"&&(e.params={
}
),e.params=ue(e.params,this.readVPS(l.data)),this.initVPS=l.data),e.vps=[l.data];
break;
case 33:if(o=!0,u=!0,e.vps!==void 0&&e.vps[0]!==this.initVPS&&e.sps!==void 0&&!this.matchSPS(e.sps[0],l.data)&&(this.initVPS=e.vps[0],e.sps=e.pps=void 0),!e.sps){
const f=this.readSPS(l.data);
e.width=f.width,e.height=f.height,e.pixelRatio=f.pixelRatio,e.codec=f.codecString,e.sps=[],typeof e.params!="object"&&(e.params={
}
);
for(const m in f.params)e.params[m]=f.params[m]}
this.pushParameterSet(e.sps,l.data,e.vps),a||(a=this.VideoSample=this.createVideoSample(!0,i.pts,i.dts)),a.key=!0;
break;
case 34:if(o=!0,typeof e.params=="object"){
if(!e.pps){
e.pps=[];
const f=this.readPPS(l.data);
for(const m in f)e.params[m]=f[m]}
this.pushParameterSet(e.pps,l.data,e.vps)}
break;
case 35:o=!0,e.audFound=!0,(d=a)!=null&&d.frame&&(this.pushAccessUnit(a,e),a=null),a||(a=this.VideoSample=this.createVideoSample(!1,i.pts,i.dts));
break;
default:o=!1;
break}
a&&o&&a.units.push(l)}
),n&&a&&(this.pushAccessUnit(a,e),this.VideoSample=null)}
pushParameterSet(e,t,i){
(i&&i[0]===this.initVPS||!i&&!e.length)&&e.push(t)}
getNALuType(e,t){
return(e[t]&126)>>>1}
ebsp2rbsp(e){
const t=new Uint8Array(e.byteLength);
let i=0;
for(let n=0;
n<e.byteLength;
n++)n>=2&&e[n]===3&&e[n-1]===0&&e[n-2]===0||(t[i]=e[n],i++);
return new Uint8Array(t.buffer,0,i)}
pushAccessUnit(e,t){
super.pushAccessUnit(e,t),this.initVPS&&(this.initVPS=null)}
readVPS(e){
const t=new Rn(e);
t.readUByte(),t.readUByte(),t.readBits(4),t.skipBits(2),t.readBits(6);
const i=t.readBits(3),n=t.readBoolean();
return{
numTemporalLayers:i+1,temporalIdNested:n}
}
readSPS(e){
const t=new Rn(this.ebsp2rbsp(e));
t.readUByte(),t.readUByte(),t.readBits(4);
const i=t.readBits(3);
t.readBoolean();
const n=t.readBits(2),r=t.readBoolean(),a=t.readBits(5),o=t.readUByte(),u=t.readUByte(),l=t.readUByte(),c=t.readUByte(),d=t.readUByte(),h=t.readUByte(),f=t.readUByte(),m=t.readUByte(),p=t.readUByte(),E=t.readUByte(),v=t.readUByte(),y=[],S=[];
for(let re=0;
re<i;
re++)y.push(t.readBoolean()),S.push(t.readBoolean());
if(i>0)for(let re=i;
re<8;
re++)t.readBits(2);
for(let re=0;
re<i;
re++)y[re]&&(t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte()),S[re]&&t.readUByte();
t.readUEG();
const T=t.readUEG();
T==3&&t.skipBits(1);
const I=t.readUEG(),_=t.readUEG(),L=t.readBoolean();
let R=0,w=0,A=0,D=0;
L&&(R+=t.readUEG(),w+=t.readUEG(),A+=t.readUEG(),D+=t.readUEG());
const $=t.readUEG(),G=t.readUEG(),W=t.readUEG(),V=t.readBoolean();
for(let re=V?0:i;
re<=i;
re++)t.skipUEG(),t.skipUEG(),t.skipUEG();
if(t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.readBoolean()&&t.readBoolean())for(let Ve=0;
Ve<4;
Ve++)for(let xt=0;
xt<(Ve===3?2:6);
xt++)if(!t.readBoolean())t.readUEG();
else{
const wt=Math.min(64,1<<4+(Ve<<1));
Ve>1&&t.readEG();
for(let ui=0;
ui<wt;
ui++)t.readEG()}
t.readBoolean(),t.readBoolean(),t.readBoolean()&&(t.readUByte(),t.skipUEG(),t.skipUEG(),t.readBoolean());
const C=t.readUEG();
let N=0;
for(let re=0;
re<C;
re++){
let Ve=!1;
if(re!==0&&(Ve=t.readBoolean()),Ve){
re===C&&t.readUEG(),t.readBoolean(),t.readUEG();
let xt=0;
for(let js=0;
js<=N;
js++){
const wt=t.readBoolean();
let ui=!1;
wt||(ui=t.readBoolean()),(wt||ui)&&xt++}
N=xt}
else{
const xt=t.readUEG(),js=t.readUEG();
N=xt+js;
for(let wt=0;
wt<xt;
wt++)t.readUEG(),t.readBoolean();
for(let wt=0;
wt<js;
wt++)t.readUEG(),t.readBoolean()}
}
if(t.readBoolean()){
const re=t.readUEG();
for(let Ve=0;
Ve<re;
Ve++){
for(let xt=0;
xt<W+4;
xt++)t.readBits(1);
t.readBits(1)}
}
let O=0,M=1,Q=1,te=!0,Z=1,J=0;
t.readBoolean(),t.readBoolean();
let Ie=!1;
if(t.readBoolean()){
if(t.readBoolean()){
const Gs=t.readUByte(),Bc=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2],nr=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1];
Gs>0&&Gs<16?(M=Bc[Gs-1],Q=nr[Gs-1]):Gs===255&&(M=t.readBits(16),Q=t.readBits(16))}
if(t.readBoolean()&&t.readBoolean(),t.readBoolean()&&(t.readBits(3),t.readBoolean(),t.readBoolean()&&(t.readUByte(),t.readUByte(),t.readUByte())),t.readBoolean()&&(t.readUEG(),t.readUEG()),t.readBoolean(),t.readBoolean(),t.readBoolean(),Ie=t.readBoolean(),Ie&&(t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG()),t.readBoolean()&&(Z=t.readBits(32),J=t.readBits(32),t.readBoolean()&&t.readUEG(),t.readBoolean())){
const nr=t.readBoolean(),$c=t.readBoolean();
let Zi=!1;
(nr||$c)&&(Zi=t.readBoolean(),Zi&&(t.readUByte(),t.readBits(5),t.readBoolean(),t.readBits(5)),t.readBits(4),t.readBits(4),Zi&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));
for(let jc=0;
jc<=i;
jc++){
te=t.readBoolean();
const mp=te||t.readBoolean();
let Gc=!1;
mp?t.readEG():Gc=t.readBoolean();
const Vc=Gc?1:t.readUEG()+1;
if(nr)for(let Ji=0;
Ji<Vc;
Ji++)t.readUEG(),t.readUEG(),Zi&&(t.readUEG(),t.readUEG()),t.skipBits(1);
if($c)for(let Ji=0;
Ji<Vc;
Ji++)t.readUEG(),t.readUEG(),Zi&&(t.readUEG(),t.readUEG()),t.skipBits(1)}
}
t.readBoolean()&&(t.readBoolean(),t.readBoolean(),t.readBoolean(),O=t.readUEG())}
let vt=I,Ut=_;
if(L){
let re=1,Ve=1;
T===1?re=Ve=2:T==2&&(re=2),vt=I-re*w-re*R,Ut=_-Ve*D-Ve*A}
const $s=n?["A","B","C"][n]:"",fp=o<<24|u<<16|l<<8|c;
let ao=0;
for(let re=0;
re<32;
re++)ao=(ao|(fp>>re&1)<<31-re)>>>0;
let oo=ao.toString(16);
return a===1&&oo==="2"&&(oo="6"),{
codecString:`hvc1.${
$s}
${
a}
.${
oo}
.${
r?"H":"L"}
${
v}
.B0`,params:{
general_tier_flag:r,general_profile_idc:a,general_profile_space:n,general_profile_compatibility_flags:[o,u,l,c],general_constraint_indicator_flags:[d,h,f,m,p,E],general_level_idc:v,bit_depth:$+8,bit_depth_luma_minus8:$,bit_depth_chroma_minus8:G,min_spatial_segmentation_idc:O,chroma_format_idc:T,frame_rate:{
fixed:te,fps:J/Z}
}
,width:vt,height:Ut,pixelRatio:[M,Q]}
}
readPPS(e){
const t=new Rn(this.ebsp2rbsp(e));
t.readUByte(),t.readUByte(),t.skipUEG(),t.skipUEG(),t.skipBits(2),t.skipBits(3),t.skipBits(2),t.skipUEG(),t.skipUEG(),t.skipEG(),t.skipBits(2),t.readBoolean()&&t.skipUEG(),t.skipEG(),t.skipEG(),t.skipBits(4);
const n=t.readBoolean(),r=t.readBoolean();
let a=1;
return r&&n?a=0:r?a=3:n&&(a=2),{
parallelismType:a}
}
matchSPS(e,t){
return String.fromCharCode.apply(null,e).substr(3)===String.fromCharCode.apply(null,t).substr(3)}
}
const Pe=188;
class xs{
constructor(e,t,i,n){
this.logger=void 0,this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=i,this.logger=n,this.videoParser=null}
static probe(e,t){
const i=xs.syncOffset(e);
return i>0&&t.warn(`MPEG2-TS detected but first sync word found @ offset ${
i}
`),i!==-1}
static syncOffset(e){
const t=e.length;
let i=Math.min(Pe*5,t-Pe)+1,n=0;
for(;
n<i;
){
let r=!1,a=-1,o=0;
for(let u=n;
u<t;
u+=Pe)if(e[u]===71&&(t-u===Pe||e[u+Pe]===71)){
if(o++,a===-1&&(a=u,a!==0&&(i=Math.min(a+Pe*99,e.length-Pe)+1)),r||(r=cu(e,u)===0),r&&o>1&&(a===0&&o>2||u+Pe>i))return a}
else{
if(o)return-1;
break}
n++}
return-1}
static createTrack(e,t){
return{
container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:$m[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}
}
resetInitSegment(e,t,i,n){
this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=xs.createTrack("video"),this._videoTrack.duration=n,this._audioTrack=xs.createTrack("audio",n),this._id3Track=xs.createTrack("id3"),this._txtTrack=xs.createTrack("text"),this._audioTrack.segmentCodec="aac",this.videoParser=null,this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=i}
resetTimeStamp(){
}
resetContiguity(){
const{
_audioTrack:e,_videoTrack:t,_id3Track:i}
=this;
e&&(e.pesData=null),t&&(t.pesData=null),i&&(i.pesData=null),this.aacOverFlow=null,this.remainderData=null}
demux(e,t,i=!1,n=!1){
i||(this.sampleAes=null);
let r;
const a=this._videoTrack,o=this._audioTrack,u=this._id3Track,l=this._txtTrack;
let c=a.pid,d=a.pesData,h=o.pid,f=u.pid,m=o.pesData,p=u.pesData,E=null,v=this.pmtParsed,y=this._pmtId,S=e.length;
if(this.remainderData&&(e=Rt(this.remainderData,e),S=e.length,this.remainderData=null),S<Pe&&!n)return this.remainderData=e,{
audioTrack:o,videoTrack:a,id3Track:u,textTrack:l}
;
const T=Math.max(0,xs.syncOffset(e));
S-=(S-T)%Pe,S<e.byteLength&&!n&&(this.remainderData=new Uint8Array(e.buffer,S,e.buffer.byteLength-S));
let I=0;
for(let L=T;
L<S;
L+=Pe)if(e[L]===71){
const R=!!(e[L+1]&64),w=cu(e,L),A=(e[L+3]&48)>>4;
let D;
if(A>1){
if(D=L+5+e[L+4],D===L+Pe)continue}
else D=L+4;
switch(w){
case c:R&&(d&&(r=mi(d,this.logger))&&(this.readyVideoParser(a.segmentCodec),this.videoParser!==null&&this.videoParser.parsePES(a,l,r,!1)),d={
data:[],size:0}
),d&&(d.data.push(e.subarray(D,L+Pe)),d.size+=L+Pe-D);
break;
case h:if(R){
if(m&&(r=mi(m,this.logger)))switch(o.segmentCodec){
case"aac":this.parseAACPES(o,r);
break;
case"mp3":this.parseMPEGPES(o,r);
break;
case"ac3":this.parseAC3PES(o,r);
break}
m={
data:[],size:0}
}
m&&(m.data.push(e.subarray(D,L+Pe)),m.size+=L+Pe-D);
break;
case f:R&&(p&&(r=mi(p,this.logger))&&this.parseID3PES(u,r),p={
data:[],size:0}
),p&&(p.data.push(e.subarray(D,L+Pe)),p.size+=L+Pe-D);
break;
case 0:R&&(D+=e[D]+1),y=this._pmtId=_S(e,D);
break;
case y:{
R&&(D+=e[D]+1);
const $=wS(e,D,this.typeSupported,i,this.observer,this.logger);
c=$.videoPid,c>0&&(a.pid=c,a.segmentCodec=$.segmentVideoCodec),h=$.audioPid,h>0&&(o.pid=h,o.segmentCodec=$.segmentAudioCodec),f=$.id3Pid,f>0&&(u.pid=f),E!==null&&!v&&(this.logger.warn(`MPEG-TS PMT found at ${
L}
 after unknown PID '${
E}
'. Backtracking to sync byte @${
T}
 to parse all TS packets.`),E=null,L=T-188),v=this.pmtParsed=!0;
break}
case 17:case 8191:break;
default:E=w;
break}
}
else I++;
I>0&&du(this.observer,new Error(`Found ${
I}
 TS packet/s that do not start with 0x47`),void 0,this.logger),a.pesData=d,o.pesData=m,u.pesData=p;
const _={
audioTrack:o,videoTrack:a,id3Track:u,textTrack:l}
;
return n&&this.extractRemainingSamples(_),_}
flush(){
const{
remainderData:e}
=this;
this.remainderData=null;
let t;
return e?t=this.demux(e,-1,!1,!0):t={
videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack}
,this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}
extractRemainingSamples(e){
const{
audioTrack:t,videoTrack:i,id3Track:n,textTrack:r}
=e,a=i.pesData,o=t.pesData,u=n.pesData;
let l;
if(a&&(l=mi(a,this.logger))?(this.readyVideoParser(i.segmentCodec),this.videoParser!==null&&(this.videoParser.parsePES(i,r,l,!0),i.pesData=null)):i.pesData=a,o&&(l=mi(o,this.logger))){
switch(t.segmentCodec){
case"aac":this.parseAACPES(t,l);
break;
case"mp3":this.parseMPEGPES(t,l);
break;
case"ac3":this.parseAC3PES(t,l);
break}
t.pesData=null}
else o!=null&&o.size&&this.logger.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=o;
u&&(l=mi(u,this.logger))?(this.parseID3PES(n,l),n.pesData=null):n.pesData=u}
demuxSampleAes(e,t,i){
const n=this.demux(e,i,!0,!this.config.progressive),r=this.sampleAes=new LS(this.observer,this.config,t);
return this.decrypt(n,r)}
readyVideoParser(e){
this.videoParser===null&&(e==="avc"?this.videoParser=new AS:e==="hevc"&&(this.videoParser=new RS))}
decrypt(e,t){
return new Promise(i=>{
const{
audioTrack:n,videoTrack:r}
=e;
n.samples&&n.segmentCodec==="aac"?t.decryptAacSamples(n.samples,0,()=>{
r.samples?t.decryptAvcSamples(r.samples,0,0,()=>{
i(e)}
):i(e)}
):r.samples&&t.decryptAvcSamples(r.samples,0,0,()=>{
i(e)}
)}
)}
destroy(){
this.observer&&this.observer.removeAllListeners(),this.config=this.logger=this.observer=null,this.aacOverFlow=this.videoParser=this.remainderData=this.sampleAes=null,this._videoTrack=this._audioTrack=this._id3Track=this._txtTrack=void 0}
parseAACPES(e,t){
let i=0;
const n=this.aacOverFlow;
let r=t.data;
if(n){
this.aacOverFlow=null;
const d=n.missing,h=n.sample.unit.byteLength;
if(d===-1)r=Rt(n.sample.unit,r);
else{
const f=h-d;
n.sample.unit.set(r.subarray(0,d),f),e.samples.push(n.sample),i=n.missing}
}
let a,o;
for(a=i,o=r.length;
a<o-1&&!Ba(r,a);
a++);
if(a!==i){
let d;
const h=a<o-1;
if(h?d=`AAC PES did not start with ADTS header,offset:${
a}
`:d="No ADTS header found in AAC PES",du(this.observer,new Error(d),h,this.logger),!h)return}
Ig(e,this.observer,r,a,this.audioCodec);
let u;
if(t.pts!==void 0)u=t.pts;
else if(n){
const d=Lg(e.samplerate);
u=n.sample.pts+d}
else{
this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
return}
let l=0,c;
for(;
a<o;
)if(c=Ag(e,r,a,u,l),a+=c.length,c.missing){
this.aacOverFlow=c;
break}
else for(l++;
a<o-1&&!Ba(r,a);
a++);
}
parseMPEGPES(e,t){
const i=t.data,n=i.length;
let r=0,a=0;
const o=t.pts;
if(o===void 0){
this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
return}
for(;
a<n;
)if(bg(i,a)){
const u=wg(e,i,a,o,r);
if(u)a+=u.length,r++;
else break}
else a++}
parseAC3PES(e,t){
{
const i=t.data,n=t.pts;
if(n===void 0){
this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
return}
const r=i.length;
let a=0,o=0,u;
for(;
o<r&&(u=Pg(e,i,o,n,a++))>0;
)o+=u}
}
parseID3PES(e,t){
if(t.pts===void 0){
this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
return}
const i=ue({
}
,t,{
type:this._videoTrack?ct.emsg:ct.audioId3,duration:Number.POSITIVE_INFINITY}
);
e.samples.push(i)}
}
function cu(s,e){
return((s[e+1]&31)<<8)+s[e+2]}
function _S(s,e){
return(s[e+10]&31)<<8|s[e+11]}
function wS(s,e,t,i,n,r){
const a={
audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"}
,o=(s[e+1]&15)<<8|s[e+2],u=e+3+o-4,l=(s[e+10]&15)<<8|s[e+11];
for(e+=12+l;
e<u;
){
const c=cu(s,e),d=(s[e+3]&15)<<8|s[e+4];
switch(s[e]){
case 207:if(!i){
zo("ADTS AAC",r);
break}
case 15:a.audioPid===-1&&(a.audioPid=c);
break;
case 21:a.id3Pid===-1&&(a.id3Pid=c);
break;
case 219:if(!i){
zo("H.264",r);
break}
case 27:a.videoPid===-1&&(a.videoPid=c);
break;
case 3:case 4:!t.mpeg&&!t.mp3?r.log("MPEG audio found, not supported in this browser"):a.audioPid===-1&&(a.audioPid=c,a.segmentAudioCodec="mp3");
break;
case 193:if(!i){
zo("AC-3",r);
break}
case 129:t.ac3?a.audioPid===-1&&(a.audioPid=c,a.segmentAudioCodec="ac3"):r.log("AC-3 audio found, not supported in this browser");
break;
case 6:if(a.audioPid===-1&&d>0){
let h=e+5,f=d;
for(;
f>2;
){
switch(s[h]){
case 106:t.ac3!==!0?r.log("AC-3 audio found, not supported in this browser for now"):(a.audioPid=c,a.segmentAudioCodec="ac3");
break}
const p=s[h+1]+2;
h+=p,f-=p}
}
break;
case 194:case 135:return du(n,new Error("Unsupported EC-3 in M2TS found"),void 0,r),a;
case 36:a.videoPid===-1&&(a.videoPid=c,a.segmentVideoCodec="hevc",r.log("HEVC in M2TS found"));
break}
e+=d+5}
return a}
function du(s,e,t,i){
i.warn(`parsing error: ${
e.message}
`),s.emit(x.ERROR,x.ERROR,{
type:Y.MEDIA_ERROR,details:b.FRAG_PARSING_ERROR,fatal:!1,levelRetry:t,error:e,reason:e.message}
)}
function zo(s,e){
e.log(`${
s}
 with AES-128-CBC encryption found in unencrypted stream`)}
function mi(s,e){
let t=0,i,n,r,a,o;
const u=s.data;
if(!s||s.size===0)return null;
for(;
u[0].length<19&&u.length>1;
)u[0]=Rt(u[0],u[1]),u.splice(1,1);
if(i=u[0],(i[0]<<16)+(i[1]<<8)+i[2]===1){
if(n=(i[4]<<8)+i[5],n&&n>s.size-6)return null;
const c=i[7];
c&192&&(a=(i[9]&14)*536870912+(i[10]&255)*4194304+(i[11]&254)*16384+(i[12]&255)*128+(i[13]&254)/2,c&64?(o=(i[14]&14)*536870912+(i[15]&255)*4194304+(i[16]&254)*16384+(i[17]&255)*128+(i[18]&254)/2,a-o>60*9e4&&(e.warn(`${
Math.round((a-o)/9e4)}
s delta between PTS and DTS, align them`),a=o)):o=a),r=i[8];
let d=r+9;
if(s.size<=d)return null;
s.size-=d;
const h=new Uint8Array(s.size);
for(let f=0,m=u.length;
f<m;
f++){
i=u[f];
let p=i.byteLength;
if(d)if(d>p){
d-=p;
continue}
else i=i.subarray(d),p-=d,d=0;
h.set(i,t),t+=p}
return n&&(n-=r+3),{
data:h,pts:a,dts:o,len:n}
}
return null}
class kS{
static getSilentFrame(e,t){
switch(e){
case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);
if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);
if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);
if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);
if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);
if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);
break;
default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);
if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);
if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);
break}
}
}
const ms=Math.pow(2,32)-1;
class k{
static init(){
k.types={
avc1:[],avcC:[],hvc1:[],hvcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]}
;
let e;
for(e in k.types)k.types.hasOwnProperty(e)&&(k.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);
const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);
k.HDLR_TYPES={
video:t,audio:i}
;
const n=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),r=new Uint8Array([0,0,0,0,0,0,0,0]);
k.STTS=k.STSC=k.STCO=r,k.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),k.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),k.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),k.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);
const a=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),u=new Uint8Array([0,0,0,1]);
k.FTYP=k.box(k.types.ftyp,a,u,a,o),k.DINF=k.box(k.types.dinf,k.box(k.types.dref,n))}
static box(e,...t){
let i=8,n=t.length;
const r=n;
for(;
n--;
)i+=t[n].byteLength;
const a=new Uint8Array(i);
for(a[0]=i>>24&255,a[1]=i>>16&255,a[2]=i>>8&255,a[3]=i&255,a.set(e,4),n=0,i=8;
n<r;
n++)a.set(t[n],i),i+=t[n].byteLength;
return a}
static hdlr(e){
return k.box(k.types.hdlr,k.HDLR_TYPES[e])}
static mdat(e){
return k.box(k.types.mdat,e)}
static mdhd(e,t){
t*=e;
const i=Math.floor(t/(ms+1)),n=Math.floor(t%(ms+1));
return k.box(k.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,i>>24,i>>16&255,i>>8&255,i&255,n>>24,n>>16&255,n>>8&255,n&255,85,196,0,0]))}
static mdia(e){
return k.box(k.types.mdia,k.mdhd(e.timescale||0,e.duration||0),k.hdlr(e.type),k.minf(e))}
static mfhd(e){
return k.box(k.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}
static minf(e){
return e.type==="audio"?k.box(k.types.minf,k.box(k.types.smhd,k.SMHD),k.DINF,k.stbl(e)):k.box(k.types.minf,k.box(k.types.vmhd,k.VMHD),k.DINF,k.stbl(e))}
static moof(e,t,i){
return k.box(k.types.moof,k.mfhd(e),k.traf(i,t))}
static moov(e){
let t=e.length;
const i=[];
for(;
t--;
)i[t]=k.trak(e[t]);
return k.box.apply(null,[k.types.moov,k.mvhd(e[0].timescale||0,e[0].duration||0)].concat(i).concat(k.mvex(e)))}
static mvex(e){
let t=e.length;
const i=[];
for(;
t--;
)i[t]=k.trex(e[t]);
return k.box.apply(null,[k.types.mvex,...i])}
static mvhd(e,t){
t*=e;
const i=Math.floor(t/(ms+1)),n=Math.floor(t%(ms+1)),r=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,i>>24,i>>16&255,i>>8&255,i&255,n>>24,n>>16&255,n>>8&255,n&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);
return k.box(k.types.mvhd,r)}
static sdtp(e){
const t=e.samples||[],i=new Uint8Array(4+t.length);
let n,r;
for(n=0;
n<t.length;
n++)r=t[n].flags,i[n+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;
return k.box(k.types.sdtp,i)}
static stbl(e){
return k.box(k.types.stbl,k.stsd(e),k.box(k.types.stts,k.STTS),k.box(k.types.stsc,k.STSC),k.box(k.types.stsz,k.STSZ),k.box(k.types.stco,k.STCO))}
static avc1(e){
let t=[],i=[],n,r,a;
for(n=0;
n<e.sps.length;
n++)r=e.sps[n],a=r.byteLength,t.push(a>>>8&255),t.push(a&255),t=t.concat(Array.prototype.slice.call(r));
for(n=0;
n<e.pps.length;
n++)r=e.pps[n],a=r.byteLength,i.push(a>>>8&255),i.push(a&255),i=i.concat(Array.prototype.slice.call(r));
const o=k.box(k.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(i))),u=e.width,l=e.height,c=e.pixelRatio[0],d=e.pixelRatio[1];
return k.box(k.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,u>>8&255,u&255,l>>8&255,l&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,k.box(k.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),k.box(k.types.pasp,new Uint8Array([c>>24,c>>16&255,c>>8&255,c&255,d>>24,d>>16&255,d>>8&255,d&255])))}
static esds(e){
const t=e.config;
return new Uint8Array([0,0,0,0,3,25,0,1,0,4,17,64,21,0,0,0,0,0,0,0,0,0,0,0,5,2,...t,6,1,2])}
static audioStsd(e){
const t=e.samplerate||0;
return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount||0,0,16,0,0,0,0,t>>8&255,t&255,0,0])}
static mp4a(e){
return k.box(k.types.mp4a,k.audioStsd(e),k.box(k.types.esds,k.esds(e)))}
static mp3(e){
return k.box(k.types[".mp3"],k.audioStsd(e))}
static ac3(e){
return k.box(k.types["ac-3"],k.audioStsd(e),k.box(k.types.dac3,e.config))}
static stsd(e){
const{
segmentCodec:t}
=e;
if(e.type==="audio"){
if(t==="aac")return k.box(k.types.stsd,k.STSD,k.mp4a(e));
if(t==="ac3"&&e.config)return k.box(k.types.stsd,k.STSD,k.ac3(e));
if(t==="mp3"&&e.codec==="mp3")return k.box(k.types.stsd,k.STSD,k.mp3(e))}
else if(e.pps&&e.sps){
if(t==="avc")return k.box(k.types.stsd,k.STSD,k.avc1(e));
if(t==="hevc"&&e.vps)return k.box(k.types.stsd,k.STSD,k.hvc1(e))}
else throw new Error("video track missing pps or sps");
throw new Error(`unsupported ${
e.type}
 segment codec (${
t}
/${
e.codec}
)`)}
static tkhd(e){
const t=e.id,i=(e.duration||0)*(e.timescale||0),n=e.width||0,r=e.height||0,a=Math.floor(i/(ms+1)),o=Math.floor(i%(ms+1));
return k.box(k.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,a>>24,a>>16&255,a>>8&255,a&255,o>>24,o>>16&255,o>>8&255,o&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,n&255,0,0,r>>8&255,r&255,0,0]))}
static traf(e,t){
const i=k.sdtp(e),n=e.id,r=Math.floor(t/(ms+1)),a=Math.floor(t%(ms+1));
return k.box(k.types.traf,k.box(k.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,n&255])),k.box(k.types.tfdt,new Uint8Array([1,0,0,0,r>>24,r>>16&255,r>>8&255,r&255,a>>24,a>>16&255,a>>8&255,a&255])),k.trun(e,i.length+16+20+8+16+8+8),i)}
static trak(e){
return e.duration=e.duration||4294967295,k.box(k.types.trak,k.tkhd(e),k.mdia(e))}
static trex(e){
const t=e.id;
return k.box(k.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}
static trun(e,t){
const i=e.samples||[],n=i.length,r=12+16*n,a=new Uint8Array(r);
let o,u,l,c,d,h;
for(t+=8+r,a.set([e.type==="video"?1:0,0,15,1,n>>>24&255,n>>>16&255,n>>>8&255,n&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),o=0;
o<n;
o++)u=i[o],l=u.duration,c=u.size,d=u.flags,h=u.cts,a.set([l>>>24&255,l>>>16&255,l>>>8&255,l&255,c>>>24&255,c>>>16&255,c>>>8&255,c&255,d.isLeading<<2|d.dependsOn,d.isDependedOn<<6|d.hasRedundancy<<4|d.paddingValue<<1|d.isNonSync,d.degradPrio&61440,d.degradPrio&15,h>>>24&255,h>>>16&255,h>>>8&255,h&255],12+16*o);
return k.box(k.types.trun,a)}
static initSegment(e){
k.types||k.init();
const t=k.moov(e);
return Rt(k.FTYP,t)}
static hvc1(e){
const t=e.params,i=[e.vps,e.sps,e.pps],n=4,r=new Uint8Array([1,t.general_profile_space<<6|(t.general_tier_flag?32:0)|t.general_profile_idc,t.general_profile_compatibility_flags[0],t.general_profile_compatibility_flags[1],t.general_profile_compatibility_flags[2],t.general_profile_compatibility_flags[3],t.general_constraint_indicator_flags[0],t.general_constraint_indicator_flags[1],t.general_constraint_indicator_flags[2],t.general_constraint_indicator_flags[3],t.general_constraint_indicator_flags[4],t.general_constraint_indicator_flags[5],t.general_level_idc,240|t.min_spatial_segmentation_idc>>8,255&t.min_spatial_segmentation_idc,252|t.parallelismType,252|t.chroma_format_idc,248|t.bit_depth_luma_minus8,248|t.bit_depth_chroma_minus8,0,parseInt(t.frame_rate.fps),n-1|t.temporal_id_nested<<2|t.num_temporal_layers<<3|(t.frame_rate.fixed?64:0),i.length]);
let a=r.length;
for(let m=0;
m<i.length;
m+=1){
a+=3;
for(let p=0;
p<i[m].length;
p+=1)a+=2+i[m][p].length}
const o=new Uint8Array(a);
o.set(r,0),a=r.length;
const u=i.length-1;
for(let m=0;
m<i.length;
m+=1){
o.set(new Uint8Array([32+m|(m===u?128:0),0,i[m].length]),a),a+=3;
for(let p=0;
p<i[m].length;
p+=1)o.set(new Uint8Array([i[m][p].length>>8,i[m][p].length&255]),a),a+=2,o.set(i[m][p],a),a+=i[m][p].length}
const l=k.box(k.types.hvcC,o),c=e.width,d=e.height,h=e.pixelRatio[0],f=e.pixelRatio[1];
return k.box(k.types.hvc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,c>>8&255,c&255,d>>8&255,d&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),l,k.box(k.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),k.box(k.types.pasp,new Uint8Array([h>>24,h>>16&255,h>>8&255,h&255,f>>24,f>>16&255,f>>8&255,f&255])))}
}
k.types=void 0;
k.HDLR_TYPES=void 0;
k.STTS=void 0;
k.STSC=void 0;
k.STCO=void 0;
k.STSZ=void 0;
k.VMHD=void 0;
k.SMHD=void 0;
k.STSD=void 0;
k.FTYP=void 0;
k.DINF=void 0;
const Og=9e4;
function Dc(s,e,t=1,i=!1){
const n=s*e*t;
return i?Math.round(n):n}
function bS(s,e,t=1,i=!1){
return Dc(s,e,1/t,i)}
function un(s,e=!1){
return Dc(s,1e3,1/Og,e)}
function CS(s,e=1){
return Dc(s,Og,1/e)}
function Vh(s){
const{
baseTime:e,timescale:t,trackId:i}
=s;
return`${
e/t}
 (${
e}
/${
t}
) trackId: ${
i}
`}
const DS=10*1e3,PS=1024,NS=1152,OS=1536;
let gi=null,Wo=null;
function Kh(s,e,t,i){
return{
duration:e,size:t,cts:i,flags:{
isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:s?2:1,isNonSync:s?0:1}
}
}
class ea extends _t{
constructor(e,t,i,n){
if(super("mp4-remuxer",n),this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextVideoTs=null,this.nextAudioTs=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=i,this.ISGenerated=!1,gi===null){
const a=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);
gi=a?parseInt(a[1]):0}
if(Wo===null){
const r=navigator.userAgent.match(/Safari\/(\d+)/i);
Wo=r?parseInt(r[1]):0}
}
destroy(){
this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}
resetTimeStamp(e){
const t=this._initPTS;
(!t||!e||e.trackId!==t.trackId||e.baseTime!==t.baseTime||e.timescale!==t.timescale)&&this.log(`Reset initPTS: ${
t&&Vh(t)}
 > ${
e&&Vh(e)}
`),this._initPTS=this._initDTS=e}
resetNextTimestamp(){
this.log("reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}
resetInitSegment(){
this.log("ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}
getVideoStartPts(e){
let t=!1;
const i=e[0].pts,n=e.reduce((r,a)=>{
let o=a.pts,u=o-r;
return u<-4294967296&&(t=!0,o=lt(o,i),u=o-r),u>0?r:o}
,i);
return t&&this.debug("PTS rollover detected"),n}
remux(e,t,i,n,r,a,o,u){
let l,c,d,h,f,m,p=r,E=r;
const v=e.pid>-1,y=t.pid>-1,S=t.samples.length,T=e.samples.length>0,I=o&&S>0||S>1;
if((!v||T)&&(!y||I)||this.ISGenerated||o){
if(this.ISGenerated){
var L,R,w,A;
const W=this.videoTrackConfig;
(W&&(t.width!==W.width||t.height!==W.height||((L=t.pixelRatio)==null?void 0:L[0])!==((R=W.pixelRatio)==null?void 0:R[0])||((w=t.pixelRatio)==null?void 0:w[1])!==((A=W.pixelRatio)==null?void 0:A[1]))||!W&&I||this.nextAudioTs===null&&T)&&this.resetInitSegment()}
this.ISGenerated||(d=this.generateIS(e,t,r,a));
const D=this.isVideoContiguous;
let $=-1,G;
if(I&&($=MS(t.samples),!D&&this.config.forceKeyFrameOnDiscontinuity))if(m=!0,$>0){
this.warn(`Dropped ${
$}
 out of ${
S}
 video samples due to a missing keyframe`);
const W=this.getVideoStartPts(t.samples);
t.samples=t.samples.slice($),t.dropped+=$,E+=(t.samples[0].pts-W)/t.inputTimeScale,G=E}
else $===-1&&(this.warn(`No keyframe found out of ${
S}
 video samples`),m=!1);
if(this.ISGenerated){
if(T&&I){
const W=this.getVideoStartPts(t.samples),U=(lt(e.samples[0].pts,W)-W)/t.inputTimeScale;
p+=Math.max(0,U),E+=Math.max(0,-U)}
if(T){
if(e.samplerate||(this.warn("regenerate InitSegment as audio detected"),d=this.generateIS(e,t,r,a)),c=this.remuxAudio(e,p,this.isAudioContiguous,a,y||I||u===H.AUDIO?E:void 0),I){
const W=c?c.endPTS-c.startPTS:0;
t.inputTimeScale||(this.warn("regenerate InitSegment as video detected"),d=this.generateIS(e,t,r,a)),l=this.remuxVideo(t,E,D,W)}
}
else I&&(l=this.remuxVideo(t,E,D,0));
l&&(l.firstKeyFrame=$,l.independent=$!==-1,l.firstKeyFramePTS=G)}
}
return this.ISGenerated&&this._initPTS&&this._initDTS&&(i.samples.length&&(f=Mg(i,r,this._initPTS,this._initDTS)),n.samples.length&&(h=Fg(n,r,this._initPTS))),{
audio:c,video:l,initSegment:d,independent:m,text:h,id3:f}
}
computeInitPts(e,t,i,n){
const r=Math.round(i*t);
let a=lt(e,r);
if(a<r+t)for(this.log(`Adjusting PTS for rollover in timeline near ${
(r-a)/t}
 ${
n}
`);
a<r+t;
)a+=8589934592;
return a-r}
generateIS(e,t,i,n){
const r=e.samples,a=t.samples,o=this.typeSupported,u={
}
,l=this._initPTS;
let c=!l||n,d="audio/mp4",h,f,m,p=-1;
if(c&&(h=f=1/0),e.config&&r.length){
switch(e.timescale=e.samplerate,e.segmentCodec){
case"mp3":o.mpeg?(d="audio/mpeg",e.codec=""):o.mp3&&(e.codec="mp3");
break;
case"ac3":e.codec="ac-3";
break}
u.audio={
id:"audio",container:d,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&o.mpeg?new Uint8Array(0):k.initSegment([e]),metadata:{
channelCount:e.channelCount}
}
,c&&(p=e.id,m=e.inputTimeScale,!l||m!==l.timescale?h=f=this.computeInitPts(r[0].pts,m,i,"audio"):c=!1)}
if(t.sps&&t.pps&&a.length){
if(t.timescale=t.inputTimeScale,u.video={
id:"main",container:"video/mp4",codec:t.codec,initSegment:k.initSegment([t]),metadata:{
width:t.width,height:t.height}
}
,c)if(p=t.id,m=t.inputTimeScale,!l||m!==l.timescale){
const E=this.getVideoStartPts(a),v=lt(a[0].dts,E),y=this.computeInitPts(v,m,i,"video"),S=this.computeInitPts(E,m,i,"video");
f=Math.min(f,y),h=Math.min(h,S)}
else c=!1;
this.videoTrackConfig={
width:t.width,height:t.height,pixelRatio:t.pixelRatio}
}
if(Object.keys(u).length)return this.ISGenerated=!0,c?(l&&this.warn(`Timestamps at playlist time: ${
n?"":"~"}
${
i}
 ${
h/m}
 != initPTS: ${
l.baseTime/l.timescale}
 (${
l.baseTime}
/${
l.timescale}
) trackId: ${
l.trackId}
`),this.log(`Found initPTS at playlist time: ${
i}
 offset: ${
h/m}
 (${
h}
/${
m}
) trackId: ${
p}
`),this._initPTS={
baseTime:h,timescale:m,trackId:p}
,this._initDTS={
baseTime:f,timescale:m,trackId:p}
):h=m=void 0,{
tracks:u,initPTS:h,timescale:m,trackId:p}
}
remuxVideo(e,t,i,n){
const r=e.inputTimeScale,a=e.samples,o=[],u=a.length,l=this._initPTS,c=l.baseTime*r/l.timescale;
let d=this.nextVideoTs,h=8,f=this.videoSampleDuration,m,p,E=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY,y=!1;
if(!i||d===null){
const O=c+t*r,M=a[0].pts-lt(a[0].dts,a[0].pts);
gi&&d!==null&&Math.abs(O-M-(d+c))<15e3?i=!0:d=O-M-c}
const S=d+c;
for(let O=0;
O<u;
O++){
const M=a[O];
M.pts=lt(M.pts,S),M.dts=lt(M.dts,S),M.dts<a[O>0?O-1:O].dts&&(y=!0)}
y&&a.sort(function(O,M){
const Q=O.dts-M.dts,te=O.pts-M.pts;
return Q||te}
),m=a[0].dts,p=a[a.length-1].dts;
const T=p-m,I=T?Math.round(T/(u-1)):f||e.inputTimeScale/30;
if(i){
const O=m-S,M=O>I,Q=O<-1;
if((M||Q)&&(M?this.warn(`${
(e.segmentCodec||"").toUpperCase()}
: ${
un(O,!0)}
 ms (${
O}
dts) hole between fragments detected at ${
t.toFixed(3)}
`):this.warn(`${
(e.segmentCodec||"").toUpperCase()}
: ${
un(-O,!0)}
 ms (${
O}
dts) overlapping between fragments detected at ${
t.toFixed(3)}
`),!Q||S>=a[0].pts||gi)){
m=S;
const te=a[0].pts-O;
if(M)a[0].dts=m,a[0].pts=te;
else{
let Z=!0;
for(let J=0;
J<a.length&&!(a[J].dts>te&&Z);
J++){
const Ie=a[J].pts;
if(a[J].dts-=O,a[J].pts-=O,J<a.length-1){
const Me=a[J+1].pts,vt=a[J].pts,Ut=Me<=vt,$s=Me<=Ie;
Z=Ut==$s}
}
}
this.log(`Video: Initial PTS/DTS adjusted: ${
un(te,!0)}
/${
un(m,!0)}
, delta: ${
un(O,!0)}
 ms`)}
}
m=Math.max(0,m);
let _=0,L=0,R=m;
for(let O=0;
O<u;
O++){
const M=a[O],Q=M.units,te=Q.length;
let Z=0;
for(let J=0;
J<te;
J++)Z+=Q[J].data.length;
L+=Z,_+=te,M.length=Z,M.dts<R?(M.dts=R,R+=I/4|0||1):R=M.dts,E=Math.min(M.pts,E),v=Math.max(M.pts,v)}
p=a[u-1].dts;
const w=L+4*_+8;
let A;
try{
A=new Uint8Array(w)}
catch(O){
this.observer.emit(x.ERROR,x.ERROR,{
type:Y.MUX_ERROR,details:b.REMUX_ALLOC_ERROR,fatal:!1,error:O,bytes:w,reason:`fail allocating video mdat ${
w}
`}
);
return}
const D=new DataView(A.buffer);
D.setUint32(0,w),A.set(k.types.mdat,4);
let $=!1,G=Number.POSITIVE_INFINITY,W=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY,U=Number.NEGATIVE_INFINITY;
for(let O=0;
O<u;
O++){
const M=a[O],Q=M.units;
let te=0;
for(let Ie=0,Me=Q.length;
Ie<Me;
Ie++){
const vt=Q[Ie],Ut=vt.data,$s=vt.data.byteLength;
D.setUint32(h,$s),h+=4,A.set(Ut,h),h+=$s,te+=4+$s}
let Z;
if(O<u-1)f=a[O+1].dts-M.dts,Z=a[O+1].pts-M.pts;
else{
const Ie=this.config,Me=O>0?M.dts-a[O-1].dts:I;
if(Z=O>0?M.pts-a[O-1].pts:I,Ie.stretchShortVideoTrack&&this.nextAudioTs!==null){
const vt=Math.floor(Ie.maxBufferHole*r),Ut=(n?E+n*r:this.nextAudioTs+c)-M.pts;
Ut>vt?(f=Ut-Me,f<0?f=Me:$=!0,this.log(`It is approximately ${
Ut/90}
 ms to the next segment;
 using duration ${
f/90}
 ms for the last video frame.`)):f=Me}
else f=Me}
const J=Math.round(M.pts-M.dts);
G=Math.min(G,f),V=Math.max(V,f),W=Math.min(W,Z),U=Math.max(U,Z),o.push(Kh(M.key,f,te,J))}
if(o.length){
if(gi){
if(gi<70){
const O=o[0].flags;
O.dependsOn=2,O.isNonSync=0}
}
else if(Wo&&U-W<V-G&&I/V<.025&&o[0].cts===0){
this.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
let O=m;
for(let M=0,Q=o.length;
M<Q;
M++){
const te=O+o[M].duration,Z=O+o[M].cts;
if(M<Q-1){
const J=te+o[M+1].cts;
o[M].duration=J-Z}
else o[M].duration=M?o[M-1].duration:I;
o[M].cts=0,O=te}
}
}
f=$||!f?I:f;
const K=p+f;
this.nextVideoTs=d=K-c,this.videoSampleDuration=f,this.isVideoContiguous=!0;
const B={
data1:k.moof(e.sequenceNumber++,m,ue(e,{
samples:o}
)),data2:A,startPTS:(E-c)/r,endPTS:(v+f-c)/r,startDTS:(m-c)/r,endDTS:d/r,type:"video",hasAudio:!1,hasVideo:!0,nb:o.length,dropped:e.dropped}
;
return e.samples=[],e.dropped=0,B}
getSamplesPerFrame(e){
switch(e.segmentCodec){
case"mp3":return NS;
case"ac3":return OS;
default:return PS}
}
remuxAudio(e,t,i,n,r){
const a=e.inputTimeScale,o=e.samplerate?e.samplerate:a,u=a/o,l=this.getSamplesPerFrame(e),c=l*u,d=this._initPTS,h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,f=[],m=r!==void 0;
let p=e.samples,E=h?0:8,v=this.nextAudioTs||-1;
const y=d.baseTime*a/d.timescale,S=y+t*a;
if(this.isAudioContiguous=i=i||p.length&&v>0&&(n&&Math.abs(S-(v+y))<9e3||Math.abs(lt(p[0].pts,S)-(v+y))<20*c),p.forEach(function(U){
U.pts=lt(U.pts,S)}
),!i||v<0){
const U=p.length;
if(p=p.filter(K=>K.pts>=0),U!==p.length&&this.warn(`Removed ${
p.length-U}
 of ${
U}
 samples (initPTS ${
y}
 / ${
a}
)`),!p.length)return;
r===0?v=0:n&&!m?v=Math.max(0,S-y):v=p[0].pts-y}
if(e.segmentCodec==="aac"){
const U=this.config.maxAudioFramesDrift;
for(let K=0,C=v+y;
K<p.length;
K++){
const N=p[K],B=N.pts,O=B-C,M=Math.abs(1e3*O/a);
if(O<=-U*c&&m)K===0&&(this.warn(`Audio frame @ ${
(B/a).toFixed(3)}
s overlaps marker by ${
Math.round(1e3*O/a)}
 ms.`),this.nextAudioTs=v=B-y,C=B);
else if(O>=U*c&&M<DS&&m){
let Q=Math.round(O/c);
for(C=B-Q*c;
C<0&&Q&&c;
)Q--,C+=c;
K===0&&(this.nextAudioTs=v=C-y),this.warn(`Injecting ${
Q}
 audio frames @ ${
((C-y)/a).toFixed(3)}
s due to ${
Math.round(1e3*O/a)}
 ms gap.`);
for(let te=0;
te<Q;
te++){
let Z=kS.getSilentFrame(e.parsedCodec||e.manifestCodec||e.codec,e.channelCount);
Z||(this.log("Unable to get silent frame for given audio codec;
 duplicating last frame instead."),Z=N.unit.subarray()),p.splice(K,0,{
unit:Z,pts:C}
),C+=c,K++}
}
N.pts=C,C+=c}
}
let T=null,I=null,_,L=0,R=p.length;
for(;
R--;
)L+=p[R].unit.byteLength;
for(let U=0,K=p.length;
U<K;
U++){
const C=p[U],N=C.unit;
let B=C.pts;
if(I!==null){
const M=f[U-1];
M.duration=Math.round((B-I)/u)}
else if(i&&e.segmentCodec==="aac"&&(B=v+y),T=B,L>0){
L+=E;
try{
_=new Uint8Array(L)}
catch(M){
this.observer.emit(x.ERROR,x.ERROR,{
type:Y.MUX_ERROR,details:b.REMUX_ALLOC_ERROR,fatal:!1,error:M,bytes:L,reason:`fail allocating audio mdat ${
L}
`}
);
return}
h||(new DataView(_.buffer).setUint32(0,L),_.set(k.types.mdat,4))}
else return;
_.set(N,E);
const O=N.byteLength;
E+=O,f.push(Kh(!0,l,O,0)),I=B}
const w=f.length;
if(!w)return;
const A=f[f.length-1];
v=I-y,this.nextAudioTs=v+u*A.duration;
const D=h?new Uint8Array(0):k.moof(e.sequenceNumber++,T/u,ue({
}
,e,{
samples:f}
));
e.samples=[];
const $=(T-y)/a,G=this.nextAudioTs/a,V={
data1:D,data2:_,startPTS:$,endPTS:G,startDTS:$,endDTS:G,type:"audio",hasAudio:!0,hasVideo:!1,nb:w}
;
return this.isAudioContiguous=!0,V}
}
function lt(s,e){
let t;
if(e===null)return s;
for(e<s?t=-8589934592:t=8589934592;
Math.abs(s-e)>4294967296;
)s+=t;
return s}
function MS(s){
for(let e=0;
e<s.length;
e++)if(s[e].key)return e;
return-1}
function Mg(s,e,t,i){
const n=s.samples.length;
if(!n)return;
const r=s.inputTimeScale;
for(let o=0;
o<n;
o++){
const u=s.samples[o];
u.pts=lt(u.pts-t.baseTime*r/t.timescale,e*r)/r,u.dts=lt(u.dts-i.baseTime*r/i.timescale,e*r)/r}
const a=s.samples;
return s.samples=[],{
samples:a}
}
function Fg(s,e,t){
const i=s.samples.length;
if(!i)return;
const n=s.inputTimeScale;
for(let a=0;
a<i;
a++){
const o=s.samples[a];
o.pts=lt(o.pts-t.baseTime*n/t.timescale,e*n)/n}
s.samples.sort((a,o)=>a.pts-o.pts);
const r=s.samples;
return s.samples=[],{
samples:r}
}
class FS extends _t{
constructor(e,t,i,n){
super("passthrough-remuxer",n),this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null,this.isVideoContiguous=!1}
destroy(){
}
resetTimeStamp(e){
this.lastEndTime=null;
const t=this.initPTS;
t&&e&&t.baseTime===e.baseTime&&t.timescale===e.timescale||(this.initPTS=e)}
resetNextTimestamp(){
this.isVideoContiguous=!1,this.lastEndTime=null}
resetInitSegment(e,t,i,n){
this.audioCodec=t,this.videoCodec=i,this.generateInitSegment(e,n),this.emitInitSegment=!0}
generateInitSegment(e,t){
let{
audioCodec:i,videoCodec:n}
=this;
if(!(e!=null&&e.byteLength)){
this.initTracks=void 0,this.initData=void 0;
return}
const{
audio:r,video:a}
=this.initData=Vm(e);
if(t)Lx(e,t);
else{
const u=r||a;
u!=null&&u.encrypted&&this.warn(`Init segment with encrypted track with has no key ("${
u.codec}
")!`)}
r&&(i=Hh(r,ce.AUDIO,this)),a&&(n=Hh(a,ce.VIDEO,this));
const o={
}
;
r&&a?o.audiovideo={
container:"video/mp4",codec:i+","+n,supplemental:a.supplemental,encrypted:a.encrypted,initSegment:e,id:"main"}
:r?o.audio={
container:"audio/mp4",codec:i,encrypted:r.encrypted,initSegment:e,id:"audio"}
:a?o.video={
container:"video/mp4",codec:n,supplemental:a.supplemental,encrypted:a.encrypted,initSegment:e,id:"main"}
:this.warn("initSegment does not contain moov or trak boxes."),this.initTracks=o}
remux(e,t,i,n,r,a){
var o,u;
let{
initPTS:l,lastEndTime:c}
=this;
const d={
audio:void 0,video:void 0,text:n,id3:i,initSegment:void 0}
;
j(c)||(c=this.lastEndTime=r||0);
const h=t.samples;
if(!h.length)return d;
const f={
initPTS:void 0,timescale:void 0,trackId:void 0}
;
let m=this.initData;
if((o=m)!=null&&o.length||(this.generateInitSegment(h),m=this.initData),!((u=m)!=null&&u.length))return this.warn("Failed to generate initSegment."),d;
this.emitInitSegment&&(f.tracks=this.initTracks,this.emitInitSegment=!1);
const p=Rx(h,m,this),E=m.audio?p[m.audio.id]:null,v=m.video?p[m.video.id]:null,y=kr(v,1/0),S=kr(E,1/0),T=kr(v,0,!0),I=kr(E,0,!0);
let _=r,L=0;
const R=E&&(!v||!l&&S<y||l&&l.trackId===m.audio.id),w=R?E:v;
if(w){
const C=w.timescale,N=w.start-r*C,B=R?m.audio.id:m.video.id;
_=w.start/C,L=R?I-S:T-y,(a||!l)&&(US(l,_,r,L)||C!==l.timescale)&&(l&&this.warn(`Timestamps at playlist time: ${
a?"":"~"}
${
r}
 ${
N/C}
 != initPTS: ${
l.baseTime/l.timescale}
 (${
l.baseTime}
/${
l.timescale}
) trackId: ${
l.trackId}
`),this.log(`Found initPTS at playlist time: ${
r}
 offset: ${
_-r}
 (${
N}
/${
C}
) trackId: ${
B}
`),l=null,f.initPTS=N,f.timescale=C,f.trackId=B)}
else this.warn(`No audio or video samples found for initPTS at playlist time: ${
r}
`);
l?(f.initPTS=l.baseTime,f.timescale=l.timescale,f.trackId=l.trackId):((!f.timescale||f.trackId===void 0||f.initPTS===void 0)&&(this.warn("Could not set initPTS"),f.initPTS=_,f.timescale=1,f.trackId=-1),this.initPTS=l={
baseTime:f.initPTS,timescale:f.timescale,trackId:f.trackId}
);
const A=_-l.baseTime/l.timescale,D=A+L;
L>0?this.lastEndTime=D:(this.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());
const $=!!m.audio,G=!!m.video;
let W="";
$&&(W+="audio"),G&&(W+="video");
const V=(m.audio?m.audio.encrypted:!1)||(m.video?m.video.encrypted:!1),U={
data1:h,startPTS:A,startDTS:A,endPTS:D,endDTS:D,type:W,hasAudio:$,hasVideo:G,nb:1,dropped:0,encrypted:V}
;
d.audio=$&&!G?U:void 0,d.video=G?U:void 0;
const K=v==null?void 0:v.sampleCount;
if(K){
const C=v.keyFrameIndex,N=C!==-1;
U.nb=K,U.dropped=C===0||this.isVideoContiguous?0:N?C:K,U.independent=N,U.firstKeyFrame=C,N&&v.keyFrameStart&&(U.firstKeyFramePTS=(v.keyFrameStart-l.baseTime)/l.timescale),this.isVideoContiguous||(d.independent=N),this.isVideoContiguous||(this.isVideoContiguous=N),U.dropped&&this.warn(`fmp4 does not start with IDR: firstIDR ${
C}
/${
K}
 dropped: ${
U.dropped}
 start: ${
U.firstKeyFramePTS||"NA"}
`)}
return d.initSegment=f,d.id3=Mg(i,r,l,l),n.samples.length&&(d.text=Fg(n,r,l)),d}
}
function kr(s,e,t=!1){
return(s==null?void 0:s.start)!==void 0?(s.start+(t?s.duration:0))/s.timescale:e}
function US(s,e,t,i){
if(s===null)return!0;
const n=Math.max(i,1),r=e-s.baseTime/s.timescale;
return Math.abs(r-t)>n}
function Hh(s,e,t){
const i=s.codec;
return i&&i.length>4?i:e===ce.AUDIO?i==="ec-3"||i==="ac-3"||i==="alac"?i:i==="fLaC"||i==="Opus"?Ca(i,!1):(t.warn(`Unhandled audio codec "${
i}
" in mp4 MAP`),i||"mp4a"):(t.warn(`Unhandled video codec "${
i}
" in mp4 MAP`),i||"avc1")}
let ss;
try{
ss=self.performance.now.bind(self.performance)}
catch{
ss=Date.now}
const ta=[{
demux:IS,remux:FS}
,{
demux:xs,remux:ea}
,{
demux:xS,remux:ea}
,{
demux:SS,remux:ea}
];
ta.splice(2,0,{
demux:ES,remux:ea}
);
class zh{
constructor(e,t,i,n,r,a){
this.asyncResult=!1,this.logger=void 0,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=i,this.id=r,this.logger=a}
configure(e){
this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}
push(e,t,i,n){
const r=i.transmuxing;
r.executeStart=ss();
let a=new Uint8Array(e);
const{
currentTransmuxState:o,transmuxConfig:u}
=this;
n&&(this.currentTransmuxState=n);
const{
contiguous:l,discontinuity:c,trackSwitch:d,accurateTimeOffset:h,timeOffset:f,initSegmentChange:m}
=n||o,{
audioCodec:p,videoCodec:E,defaultInitPts:v,duration:y,initSegmentData:S}
=u,T=BS(a,t);
if(T&&Fi(T.method)){
const R=this.getDecrypter(),w=Ic(T.method);
if(R.isSync()){
let A=R.softwareDecrypt(a,T.key.buffer,T.iv.buffer,w);
if(i.part>-1){
const $=R.flush();
A=$&&$.buffer}
if(!A)return r.executeEnd=ss(),Yo(i);
a=new Uint8Array(A)}
else return this.asyncResult=!0,this.decryptionPromise=R.webCryptoDecrypt(a,T.key.buffer,T.iv.buffer,w).then(A=>{
const D=this.push(A,null,i);
return this.decryptionPromise=null,D}
),this.decryptionPromise}
const I=this.needsProbing(c,d);
if(I){
const R=this.configureTransmuxer(a);
if(R)return this.logger.warn(`[transmuxer] ${
R.message}
`),this.observer.emit(x.ERROR,x.ERROR,{
type:Y.MEDIA_ERROR,details:b.FRAG_PARSING_ERROR,fatal:!1,error:R,reason:R.message}
),r.executeEnd=ss(),Yo(i)}
(c||d||m||I)&&this.resetInitSegment(S,p,E,y,t),(c||m||I)&&this.resetInitialTimestamp(v),l||this.resetContiguity();
const _=this.transmux(a,T,f,h,i);
this.asyncResult=Qn(_);
const L=this.currentTransmuxState;
return L.contiguous=!0,L.discontinuity=!1,L.trackSwitch=!1,r.executeEnd=ss(),_}
flush(e){
const t=e.transmuxing;
t.executeStart=ss();
const{
decrypter:i,currentTransmuxState:n,decryptionPromise:r}
=this;
if(r)return this.asyncResult=!0,r.then(()=>this.flush(e));
const a=[],{
timeOffset:o}
=n;
if(i){
const d=i.flush();
d&&a.push(this.push(d.buffer,null,e))}
const{
demuxer:u,remuxer:l}
=this;
if(!u||!l){
t.executeEnd=ss();
const d=[Yo(e)];
return this.asyncResult?Promise.resolve(d):d}
const c=u.flush(o);
return Qn(c)?(this.asyncResult=!0,c.then(d=>(this.flushRemux(a,d,e),a))):(this.flushRemux(a,c,e),this.asyncResult?Promise.resolve(a):a)}
flushRemux(e,t,i){
const{
audioTrack:n,videoTrack:r,id3Track:a,textTrack:o}
=t,{
accurateTimeOffset:u,timeOffset:l}
=this.currentTransmuxState;
this.logger.log(`[transmuxer.ts]: Flushed ${
this.id}
 sn: ${
i.sn}
${
i.part>-1?" part: "+i.part:""}
 of ${
this.id===H.MAIN?"level":"track"}
 ${
i.level}
`);
const c=this.remuxer.remux(n,r,a,o,l,u,!0,this.id);
e.push({
remuxResult:c,chunkMeta:i}
),i.transmuxing.executeEnd=ss()}
resetInitialTimestamp(e){
const{
demuxer:t,remuxer:i}
=this;
!t||!i||(t.resetTimeStamp(e),i.resetTimeStamp(e))}
resetContiguity(){
const{
demuxer:e,remuxer:t}
=this;
!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}
resetInitSegment(e,t,i,n,r){
const{
demuxer:a,remuxer:o}
=this;
!a||!o||(a.resetInitSegment(e,t,i,n),o.resetInitSegment(e,t,i,r))}
destroy(){
this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}
transmux(e,t,i,n,r){
let a;
return t&&t.method==="SAMPLE-AES"?a=this.transmuxSampleAes(e,t,i,n,r):a=this.transmuxUnencrypted(e,i,n,r),a}
transmuxUnencrypted(e,t,i,n){
const{
audioTrack:r,videoTrack:a,id3Track:o,textTrack:u}
=this.demuxer.demux(e,t,!1,!this.config.progressive);
return{
remuxResult:this.remuxer.remux(r,a,o,u,t,i,!1,this.id),chunkMeta:n}
}
transmuxSampleAes(e,t,i,n,r){
return this.demuxer.demuxSampleAes(e,t,i).then(a=>({
remuxResult:this.remuxer.remux(a.audioTrack,a.videoTrack,a.id3Track,a.textTrack,i,n,!1,this.id),chunkMeta:r}
))}
configureTransmuxer(e){
const{
config:t,observer:i,typeSupported:n}
=this;
let r;
for(let d=0,h=ta.length;
d<h;
d++){
var a;
if((a=ta[d].demux)!=null&&a.probe(e,this.logger)){
r=ta[d];
break}
}
if(!r)return new Error("Failed to find demuxer by probing fragment data");
const o=this.demuxer,u=this.remuxer,l=r.remux,c=r.demux;
(!u||!(u instanceof l))&&(this.remuxer=new l(i,t,n,this.logger)),(!o||!(o instanceof c))&&(this.demuxer=new c(i,t,n,this.logger),this.probe=c.probe)}
needsProbing(e,t){
return!this.demuxer||!this.remuxer||e||t}
getDecrypter(){
let e=this.decrypter;
return e||(e=this.decrypter=new Sc(this.config)),e}
}
function BS(s,e){
let t=null;
return s.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}
const Yo=s=>({
remuxResult:{
}
,chunkMeta:s}
);
function Qn(s){
return"then"in s&&s.then instanceof Function}
class $S{
constructor(e,t,i,n,r){
this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=i,this.duration=n,this.defaultInitPts=r||null}
}
class jS{
constructor(e,t,i,n,r,a){
this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=i,this.trackSwitch=n,this.timeOffset=r,this.initSegmentChange=a}
}
let Wh=0;
class Ug{
constructor(e,t,i,n){
this.error=null,this.hls=void 0,this.id=void 0,this.instanceNo=Wh++,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.onWorkerMessage=u=>{
const l=u.data,c=this.hls;
if(!(!c||!(l!=null&&l.event)||l.instanceNo!==this.instanceNo))switch(l.event){
case"init":{
var d;
const h=(d=this.workerContext)==null?void 0:d.objectURL;
h&&self.URL.revokeObjectURL(h);
break}
case"transmuxComplete":{
this.handleTransmuxComplete(l.data);
break}
case"flush":{
this.onFlush(l.data);
break}
case"workerLog":{
c.logger[l.data.logType]&&c.logger[l.data.logType](l.data.message);
break}
default:{
l.data=l.data||{
}
,l.data.frag=this.frag,l.data.part=this.part,l.data.id=this.id,c.trigger(l.event,l.data);
break}
}
}
,this.onWorkerError=u=>{
if(!this.hls)return;
const l=new Error(`${
u.message}
  (${
u.filename}
:${
u.lineno}
)`);
this.hls.config.enableWorker=!1,this.hls.logger.warn(`Error in "${
this.id}
" Web Worker, fallback to inline`),this.hls.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:l}
)}
;
const r=e.config;
this.hls=e,this.id=t,this.useWorker=!!r.enableWorker,this.onTransmuxComplete=i,this.onFlush=n;
const a=(u,l)=>{
l=l||{
}
,l.frag=this.frag||void 0,u===x.ERROR&&(l=l,l.parent=this.id,l.part=this.part,this.error=l.error),this.hls.trigger(u,l)}
;
this.observer=new Rc,this.observer.on(x.FRAG_DECRYPTED,a),this.observer.on(x.ERROR,a);
const o=lh(r.preferManagedMediaSource);
if(this.useWorker&&typeof Worker<"u"){
const u=this.hls.logger;
if(r.workerPath||HE()){
try{
r.workerPath?(u.log(`loading Web Worker ${
r.workerPath}
 for "${
t}
"`),this.workerContext=WE(r.workerPath)):(u.log(`injecting Web Worker for "${
t}
"`),this.workerContext=zE());
const{
worker:c}
=this.workerContext;
c.addEventListener("message",this.onWorkerMessage),c.addEventListener("error",this.onWorkerError),c.postMessage({
instanceNo:this.instanceNo,cmd:"init",typeSupported:o,id:t,config:de(r)}
)}
catch(c){
u.warn(`Error setting up "${
t}
" Web Worker, fallback to inline`,c),this.terminateWorker(),this.error=null,this.transmuxer=new zh(this.observer,o,r,"",t,e.logger)}
return}
}
this.transmuxer=new zh(this.observer,o,r,"",t,e.logger)}
reset(){
if(this.frag=null,this.part=null,this.workerContext){
const e=this.instanceNo;
this.instanceNo=Wh++;
const t=this.hls.config,i=lh(t.preferManagedMediaSource);
this.workerContext.worker.postMessage({
instanceNo:this.instanceNo,cmd:"reset",resetNo:e,typeSupported:i,id:this.id,config:de(t)}
)}
}
terminateWorker(){
if(this.workerContext){
const{
worker:e}
=this.workerContext;
this.workerContext=null,e.removeEventListener("message",this.onWorkerMessage),e.removeEventListener("error",this.onWorkerError),YE(this.hls.config.workerPath)}
}
destroy(){
if(this.workerContext)this.terminateWorker(),this.onWorkerMessage=this.onWorkerError=null;
else{
const t=this.transmuxer;
t&&(t.destroy(),this.transmuxer=null)}
const e=this.observer;
e&&e.removeAllListeners(),this.frag=null,this.part=null,this.observer=null,this.hls=null}
push(e,t,i,n,r,a,o,u,l,c){
var d,h;
l.transmuxing.start=self.performance.now();
const{
instanceNo:f,transmuxer:m}
=this,p=a?a.start:r.start,E=r.decryptdata,v=this.frag,y=!(v&&r.cc===v.cc),S=!(v&&l.level===v.level),T=v?l.sn-v.sn:-1,I=this.part?l.part-this.part.index:-1,_=T===0&&l.id>1&&l.id===(v==null?void 0:v.stats.chunkCount),L=!S&&(T===1||T===0&&(I===1||_&&I<=0)),R=self.performance.now();
(S||T||r.stats.parsing.start===0)&&(r.stats.parsing.start=R),a&&(I||!L)&&(a.stats.parsing.start=R);
const w=!(v&&((d=r.initSegment)==null?void 0:d.url)===((h=v.initSegment)==null?void 0:h.url)),A=new jS(y,L,u,S,p,w);
if(!L||y||w){
this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${
r.type}
 sn: ${
l.sn}
${
l.part>-1?" part: "+l.part:""}
 ${
this.id===H.MAIN?"level":"track"}
: ${
l.level}
 id: ${
l.id}

        discontinuity: ${
y}

        trackSwitch: ${
S}

        contiguous: ${
L}

        accurateTimeOffset: ${
u}

        timeOffset: ${
p}

        initSegmentChange: ${
w}
`);
const D=new $S(i,n,t,o,c);
this.configureTransmuxer(D)}
if(this.frag=r,this.part=a,this.workerContext)this.workerContext.worker.postMessage({
instanceNo:f,cmd:"demux",data:e,decryptdata:E,chunkMeta:l,state:A}
,e instanceof ArrayBuffer?[e]:[]);
else if(m){
const D=m.push(e,E,l,A);
Qn(D)?D.then($=>{
this.handleTransmuxComplete($)}
).catch($=>{
this.transmuxerError($,l,"transmuxer-interface push error")}
):this.handleTransmuxComplete(D)}
}
flush(e){
e.transmuxing.start=self.performance.now();
const{
instanceNo:t,transmuxer:i}
=this;
if(this.workerContext)this.workerContext.worker.postMessage({
instanceNo:t,cmd:"flush",chunkMeta:e}
);
else if(i){
const n=i.flush(e);
Qn(n)?n.then(r=>{
this.handleFlushResult(r,e)}
).catch(r=>{
this.transmuxerError(r,e,"transmuxer-interface flush error")}
):this.handleFlushResult(n,e)}
}
transmuxerError(e,t,i){
this.hls&&(this.error=e,this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.FRAG_PARSING_ERROR,chunkMeta:t,frag:this.frag||void 0,part:this.part||void 0,fatal:!1,error:e,err:e,reason:i}
))}
handleFlushResult(e,t){
e.forEach(i=>{
this.handleTransmuxComplete(i)}
),this.onFlush(t)}
configureTransmuxer(e){
const{
instanceNo:t,transmuxer:i}
=this;
this.workerContext?this.workerContext.worker.postMessage({
instanceNo:t,cmd:"configure",config:e}
):i&&i.configure(e)}
handleTransmuxComplete(e){
e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}
}
const Yh=100;
class GS extends Ac{
constructor(e,t,i){
super(e,t,i,"audio-stream-controller",H.AUDIO),this.mainAnchor=null,this.mainFragLoading=null,this.audioOnly=!1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this.registerListeners()}
onHandlerDestroying(){
this.unregisterListeners(),super.onHandlerDestroying(),this.resetItem()}
resetItem(){
this.mainDetails=this.mainAnchor=this.mainFragLoading=this.bufferedTrack=this.switchingTrack=this.waitingData=this.cachedTrackLoadedData=null}
registerListeners(){
super.registerListeners();
const{
hls:e}
=this;
e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(x.BUFFER_RESET,this.onBufferReset,this),e.on(x.BUFFER_CREATED,this.onBufferCreated,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(x.FRAG_LOADING,this.onFragLoading,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this)}
unregisterListeners(){
const{
hls:e}
=this;
e&&(super.unregisterListeners(),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(x.BUFFER_RESET,this.onBufferReset,this),e.off(x.BUFFER_CREATED,this.onBufferCreated,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(x.FRAG_LOADING,this.onFragLoading,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this))}
onInitPtsFound(e,{
frag:t,id:i,initPTS:n,timescale:r,trackId:a}
){
if(i===H.MAIN){
const o=t.cc,u=this.fragCurrent;
if(this.initPTS[o]={
baseTime:n,timescale:r,trackId:a}
,this.log(`InitPTS for cc: ${
o}
 found from main: ${
n/r}
 (${
n}
/${
r}
) trackId: ${
a}
`),this.mainAnchor=t,this.state===P.WAITING_INIT_PTS){
const l=this.waitingData;
(!l&&!this.loadingParts||l&&l.frag.cc!==o)&&this.syncWithAnchor(t,l==null?void 0:l.frag)}
else!this.hls.hasEnoughToStart&&u&&u.cc!==o?(u.abortRequests(),this.syncWithAnchor(t,u)):this.state===P.IDLE&&this.tick()}
}
getLoadPosition(){
return!this.startFragRequested&&this.nextLoadPosition>=0?this.nextLoadPosition:super.getLoadPosition()}
syncWithAnchor(e,t){
var i;
const n=((i=this.mainFragLoading)==null?void 0:i.frag)||null;
if(t&&(n==null?void 0:n.cc)===t.cc)return;
const r=(n||e).cc,a=this.getLevelDetails(),o=this.getLoadPosition(),u=eg(a,r,o);
u&&(this.log(`Syncing with main frag at ${
u.start}
 cc ${
u.cc}
`),this.startFragRequested=!1,this.nextLoadPosition=u.start,this.resetLoadingState(),this.state===P.IDLE&&this.doTickIdle())}
startLoad(e,t){
if(!this.levels){
this.startPosition=e,this.state=P.STOPPED;
return}
const i=this.lastCurrentTime;
this.stopLoad(),this.setInterval(Yh),i>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${
i.toFixed(3)}
`),e=i,this.state=P.IDLE):this.state=P.WAITING_TRACK,this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}
doTick(){
switch(this.state){
case P.IDLE:this.doTickIdle();
break;
case P.WAITING_TRACK:{
const{
levels:e,trackId:t}
=this,i=e==null?void 0:e[t],n=i==null?void 0:i.details;
if(n&&!this.waitForLive(i)){
if(this.waitForCdnTuneIn(n))break;
this.state=P.WAITING_INIT_PTS}
break}
case P.FRAG_LOADING_WAITING_RETRY:{
this.checkRetryDate();
break}
case P.WAITING_INIT_PTS:{
const e=this.waitingData;
if(e){
const{
frag:t,part:i,cache:n,complete:r}
=e,a=this.mainAnchor;
if(this.initPTS[t.cc]!==void 0){
this.waitingData=null,this.state=P.FRAG_LOADING;
const o=n.flush().buffer,u={
frag:t,part:i,payload:o,networkDetails:null}
;
this._handleFragmentLoadProgress(u),r&&super._handleFragmentLoadComplete(u)}
else a&&a.cc!==e.frag.cc&&this.syncWithAnchor(a,e.frag)}
else this.state=P.IDLE}
}
this.onTickEnd()}
resetLoadingState(){
const e=this.waitingData;
e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null),super.resetLoadingState()}
onTickEnd(){
const{
media:e}
=this;
e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}
doTickIdle(){
var e;
const{
hls:t,levels:i,media:n,trackId:r}
=this,a=t.config;
if(!this.buffering||!n&&!this.primaryPrefetch&&(this.startFragRequested||!a.startFragPrefetch)||!(i!=null&&i[r]))return;
const o=i[r],u=o.details;
if(!u||this.waitForLive(o)||this.waitForCdnTuneIn(u)){
this.state=P.WAITING_TRACK,this.startFragRequested=!1;
return}
const l=this.mediaBuffer?this.mediaBuffer:this.media;
this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,ce.AUDIO,H.AUDIO));
const c=this.getFwdBufferInfo(l,H.AUDIO);
if(c===null)return;
if(!this.switchingTrack&&this._streamEnded(c,u)){
t.trigger(x.BUFFER_EOS,{
type:"audio"}
),this.state=P.ENDED;
return}
const d=c.len,h=t.maxBufferLength,f=u.fragments,m=f[0].start,p=this.getLoadPosition(),E=this.flushing?p:c.end;
if(this.switchingTrack&&n){
const S=p;
u.PTSKnown&&S<m&&(c.end>m||c.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),n.currentTime=m+.05)}
if(d>=h&&!this.switchingTrack&&E<f[f.length-1].start)return;
let v=this.getNextFragment(E,u);
if(v&&this.isLoopLoading(v,E)&&(v=this.getNextFragmentLoopLoading(v,u,c,H.MAIN,h)),!v){
this.bufferFlushed=!0;
return}
let y=((e=this.mainFragLoading)==null?void 0:e.frag)||null;
if(!this.audioOnly&&this.startFragRequested&&y&&Ae(v)&&!v.endList&&(!u.live||!this.loadingParts&&E<this.hls.liveSyncPosition)&&(this.fragmentTracker.getState(y)===be.OK&&(this.mainFragLoading=y=null),y&&Ae(y))){
if(v.start>y.end){
const T=this.fragmentTracker.getFragAtPos(E,H.MAIN);
T&&T.end>y.end&&(y=T,this.mainFragLoading={
frag:T,targetBufferTime:null}
)}
if(v.start>y.end)return}
this.loadFragment(v,o,E)}
onMediaDetaching(e,t){
this.bufferFlushed=this.flushing=!1,super.onMediaDetaching(e,t)}
onAudioTracksUpdated(e,{
audioTracks:t}
){
this.resetTransmuxer(),this.levels=t.map(i=>new Wn(i))}
onAudioTrackSwitching(e,t){
const i=!!t.url;
this.trackId=t.id;
const{
fragCurrent:n}
=this;
n&&(n.abortRequests(),this.removeUnbufferedFrags(n.start)),this.resetLoadingState(),i?(this.switchingTrack=t,this.flushAudioIfNeeded(t),this.state!==P.STOPPED&&(this.setInterval(Yh),this.state=P.IDLE,this.tick())):(this.resetTransmuxer(),this.switchingTrack=null,this.bufferedTrack=t,this.clearInterval())}
onManifestLoading(){
super.onManifestLoading(),this.bufferFlushed=this.flushing=this.audioOnly=!1,this.resetItem(),this.trackId=-1}
onLevelLoaded(e,t){
this.mainDetails=t.details;
const i=this.cachedTrackLoadedData;
i&&(this.cachedTrackLoadedData=null,this.onAudioTrackLoaded(x.AUDIO_TRACK_LOADED,i))}
onAudioTrackLoaded(e,t){
var i;
const{
levels:n}
=this,{
details:r,id:a,groupId:o,track:u}
=t;
if(!n){
this.warn(`Audio tracks reset while loading track ${
a}
 "${
u.name}
" of "${
o}
"`);
return}
const l=this.mainDetails;
if(!l||r.endCC>l.endCC||l.expired){
this.cachedTrackLoadedData=t,this.state!==P.STOPPED&&(this.state=P.WAITING_TRACK);
return}
this.cachedTrackLoadedData=null,this.log(`Audio track ${
a}
 "${
u.name}
" of "${
o}
" loaded [${
r.startSN}
,${
r.endSN}
]${
r.lastPartSn?`[part-${
r.lastPartSn}
-${
r.lastPartIndex}
]`:""}
,duration:${
r.totalduration}
`);
const c=n[a];
let d=0;
if(r.live||(i=c.details)!=null&&i.live){
if(this.checkLiveUpdate(r),r.deltaUpdateFailed)return;
if(c.details){
var h;
d=this.alignPlaylists(r,c.details,(h=this.levelLastLoaded)==null?void 0:h.details)}
r.alignedSliding||(vg(r,l),r.alignedSliding||Ua(r,l),d=r.fragmentStart)}
c.details=r,this.levelLastLoaded=c,this.startFragRequested||this.setStartPosition(l,d),this.hls.trigger(x.AUDIO_TRACK_UPDATED,{
details:r,id:a,groupId:t.groupId}
),this.state===P.WAITING_TRACK&&!this.waitForCdnTuneIn(r)&&(this.state=P.IDLE),this.tick()}
_handleFragmentLoadProgress(e){
var t;
const i=e.frag,{
part:n,payload:r}
=e,{
config:a,trackId:o,levels:u}
=this;
if(!u){
this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${
i.sn}
 of level ${
i.level}
 will not be buffered`);
return}
const l=u[o];
if(!l){
this.warn("Audio track is undefined on fragment load progress");
return}
const c=l.details;
if(!c){
this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(i.start);
return}
const d=a.defaultAudioCodec||l.audioCodec||"mp4a.40.2";
let h=this.transmuxer;
h||(h=this.transmuxer=new Ug(this.hls,H.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));
const f=this.initPTS[i.cc],m=(t=i.initSegment)==null?void 0:t.data;
if(f!==void 0){
const E=n?n.index:-1,v=E!==-1,y=new Tc(i.level,i.sn,i.stats.chunkCount,r.byteLength,E,v);
h.push(r,m,d,"",i,n,c.totalduration,!1,y,f)}
else{
this.log(`Unknown video PTS for cc ${
i.cc}
, waiting for video PTS before demuxing audio frag ${
i.sn}
 of [${
c.startSN}
 ,${
c.endSN}
],track ${
o}
`);
const{
cache:p}
=this.waitingData=this.waitingData||{
frag:i,part:n,cache:new xg,complete:!1}
;
p.push(new Uint8Array(r)),this.state!==P.STOPPED&&(this.state=P.WAITING_INIT_PTS)}
}
_handleFragmentLoadComplete(e){
if(this.waitingData){
this.waitingData.complete=!0;
return}
super._handleFragmentLoadComplete(e)}
onBufferReset(){
this.mediaBuffer=null}
onBufferCreated(e,t){
this.bufferFlushed=this.flushing=!1;
const i=t.tracks.audio;
i&&(this.mediaBuffer=i.buffer||null)}
onFragLoading(e,t){
!this.audioOnly&&t.frag.type===H.MAIN&&Ae(t.frag)&&(this.mainFragLoading=t,this.state===P.IDLE&&this.tick())}
onFragBuffered(e,t){
const{
frag:i,part:n}
=t;
if(i.type!==H.AUDIO){
!this.audioOnly&&i.type===H.MAIN&&!i.elementaryStreams.video&&!i.elementaryStreams.audiovideo&&(this.audioOnly=!0,this.mainFragLoading=null);
return}
if(this.fragContextChanged(i)){
this.warn(`Fragment ${
i.sn}
${
n?" p: "+n.index:""}
 of level ${
i.level}
 finished buffering, but was aborted. state: ${
this.state}
, audioSwitch: ${
this.switchingTrack?this.switchingTrack.name:"false"}
`);
return}
if(Ae(i)){
this.fragPrevious=i;
const r=this.switchingTrack;
r&&(this.bufferedTrack=r,this.switchingTrack=null,this.hls.trigger(x.AUDIO_TRACK_SWITCHED,ae({
}
,r)))}
this.fragBufferedComplete(i,n),this.media&&this.tick()}
onError(e,t){
var i;
if(t.fatal){
this.state=P.ERROR;
return}
switch(t.details){
case b.FRAG_GAP:case b.FRAG_PARSING_ERROR:case b.FRAG_DECRYPT_ERROR:case b.FRAG_LOAD_ERROR:case b.FRAG_LOAD_TIMEOUT:case b.KEY_LOAD_ERROR:case b.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(H.AUDIO,t);
break;
case b.AUDIO_TRACK_LOAD_ERROR:case b.AUDIO_TRACK_LOAD_TIMEOUT:case b.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===P.WAITING_TRACK&&((i=t.context)==null?void 0:i.type)===se.AUDIO_TRACK&&(this.state=P.IDLE);
break;
case b.BUFFER_ADD_CODEC_ERROR:case b.BUFFER_APPEND_ERROR:if(t.parent!=="audio")return;
this.reduceLengthAndFlushBuffer(t)||this.resetLoadingState();
break;
case b.BUFFER_FULL_ERROR:if(t.parent!=="audio")return;
this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));
break;
case b.INTERNAL_EXCEPTION:this.recoverWorkerError(t);
break}
}
onBufferFlushing(e,{
type:t}
){
t!==ce.VIDEO&&(this.flushing=!0)}
onBufferFlushed(e,{
type:t}
){
if(t!==ce.VIDEO){
this.flushing=!1,this.bufferFlushed=!0,this.state===P.ENDED&&(this.state=P.IDLE);
const i=this.mediaBuffer||this.media;
i&&(this.afterBufferFlushed(i,t,H.AUDIO),this.tick())}
}
_handleTransmuxComplete(e){
var t;
const i="audio",{
hls:n}
=this,{
remuxResult:r,chunkMeta:a}
=e,o=this.getCurrentContext(a);
if(!o){
this.resetWhenMissingContext(a);
return}
const{
frag:u,part:l,level:c}
=o,{
details:d}
=c,{
audio:h,text:f,id3:m,initSegment:p}
=r;
if(this.fragContextChanged(u)||!d){
this.fragmentTracker.removeFragment(u);
return}
if(this.state=P.PARSING,this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack),p!=null&&p.tracks){
const E=u.initSegment||u;
if(this.unhandledEncryptionError(p,u))return;
this._bufferInitSegment(c,p.tracks,E,a),n.trigger(x.FRAG_PARSING_INIT_SEGMENT,{
frag:E,id:i,tracks:p.tracks}
)}
if(h){
const{
startPTS:E,endPTS:v,startDTS:y,endDTS:S}
=h;
l&&(l.elementaryStreams[ce.AUDIO]={
startPTS:E,endPTS:v,startDTS:y,endDTS:S}
),u.setElementaryStreamInfo(ce.AUDIO,E,v,y,S),this.bufferFragmentData(h,u,l,a)}
if(m!=null&&(t=m.samples)!=null&&t.length){
const E=ue({
id:i,frag:u,details:d}
,m);
n.trigger(x.FRAG_PARSING_METADATA,E)}
if(f){
const E=ue({
id:i,frag:u,details:d}
,f);
n.trigger(x.FRAG_PARSING_USERDATA,E)}
}
_bufferInitSegment(e,t,i,n){
if(this.state!==P.PARSING||(t.video&&delete t.video,t.audiovideo&&delete t.audiovideo,!t.audio))return;
const r=t.audio;
r.id=H.AUDIO;
const a=e.audioCodec;
this.log(`Init audio buffer, container:${
r.container}
, codecs[level/parsed]=[${
a}
/${
r.codec}
]`),a&&a.split(",").length===1&&(r.levelCodec=a),this.hls.trigger(x.BUFFER_CODECS,t);
const o=r.initSegment;
if(o!=null&&o.byteLength){
const u={
type:"audio",frag:i,part:null,chunkMeta:n,parent:i.type,data:o}
;
this.hls.trigger(x.BUFFER_APPENDING,u)}
this.tickImmediate()}
loadFragment(e,t,i){
const n=this.fragmentTracker.getState(e);
if(this.switchingTrack||n===be.NOT_LOADED||n===be.PARTIAL){
var r;
if(!Ae(e))this._loadInitSegment(e,t);
else if((r=t.details)!=null&&r.live&&!this.initPTS[e.cc]){
this.log(`Waiting for video PTS in continuity counter ${
e.cc}
 of live stream before loading audio fragment ${
e.sn}
 of level ${
this.trackId}
`),this.state=P.WAITING_INIT_PTS;
const a=this.mainDetails;
a&&a.fragmentStart!==t.details.fragmentStart&&Ua(t.details,a)}
else super.loadFragment(e,t,i)}
else this.clearTrackerIfNeeded(e)}
flushAudioIfNeeded(e){
if(this.media&&this.bufferedTrack){
const{
name:t,lang:i,assocLang:n,characteristics:r,audioCodec:a,channels:o}
=this.bufferedTrack;
ei({
name:t,lang:i,assocLang:n,characteristics:r,audioCodec:a,channels:o}
,e,Ws)||(Pa(e.url,this.hls)?(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null):this.bufferedTrack=e)}
}
completeAudioSwitch(e){
const{
hls:t}
=this;
this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(x.AUDIO_TRACK_SWITCHED,ae({
}
,e))}
}
class Pc extends _t{
constructor(e,t){
super(t,e.logger),this.hls=void 0,this.canLoad=!1,this.timer=-1,this.hls=e}
destroy(){
this.clearTimer(),this.hls=this.log=this.warn=null}
clearTimer(){
this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}
startLoad(){
this.canLoad=!0,this.loadPlaylist()}
stopLoad(){
this.canLoad=!1,this.clearTimer()}
switchParams(e,t,i){
const n=t==null?void 0:t.renditionReports;
if(n){
let r=-1;
for(let a=0;
a<n.length;
a++){
const o=n[a];
let u;
try{
u=new self.URL(o.URI,t.url).href}
catch(l){
this.warn(`Could not construct new URL for Rendition Report: ${
l}
`),u=o.URI||""}
if(u===e){
r=a;
break}
else u===e.substring(0,u.length)&&(r=a)}
if(r!==-1){
const a=n[r],o=parseInt(a["LAST-MSN"])||t.lastPartSn;
let u=parseInt(a["LAST-PART"])||t.lastPartIndex;
if(this.hls.config.lowLatencyMode){
const c=Math.min(t.age-t.partTarget,t.targetduration);
u>=0&&c>t.partTarget&&(u+=1)}
const l=i&&uh(i);
return new ch(o,u>=0?u:void 0,l)}
}
}
loadPlaylist(e){
this.clearTimer()}
loadingPlaylist(e,t){
this.clearTimer()}
shouldLoadPlaylist(e){
return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}
getUrlWithDirectives(e,t){
if(t)try{
return t.addDirectives(e)}
catch(i){
this.warn(`Could not construct new URL with HLS Delivery Directives: ${
i}
`)}
return e}
playlistLoaded(e,t,i){
const{
details:n,stats:r}
=t,a=self.performance.now(),o=r.loading.first?Math.max(0,a-r.loading.first):0;
n.advancedDateTime=Date.now()-o;
const u=this.hls.config.timelineOffset;
if(u!==n.appliedTimelineOffset){
const c=Math.max(u||0,0);
n.appliedTimelineOffset=c,n.fragments.forEach(d=>{
d.setStart(d.playlistOffset+c)}
)}
if(n.live||i!=null&&i.live){
const c="levelInfo"in t?t.levelInfo:t.track;
if(n.reloaded(i),i&&n.fragments.length>0){
NE(i,n,this);
const y=n.playlistParsingError;
if(y){
this.warn(y);
const S=this.hls;
if(!S.config.ignorePlaylistParsingErrors){
var l;
const{
networkDetails:T}
=t;
S.trigger(x.ERROR,{
type:Y.NETWORK_ERROR,details:b.LEVEL_PARSING_ERROR,fatal:!1,url:n.url,error:y,reason:y.message,level:t.level||void 0,parent:(l=n.fragments[0])==null?void 0:l.type,networkDetails:T,stats:r}
);
return}
n.playlistParsingError=null}
}
n.requestScheduled===-1&&(n.requestScheduled=r.loading.start);
const d=this.hls.mainForwardBufferInfo,h=d?d.end-d.len:0,f=(n.edge-h)*1e3,m=fg(n,f);
if(n.requestScheduled+m<a?n.requestScheduled=a:n.requestScheduled+=m,this.log(`live playlist ${
e}
 ${
n.advanced?"REFRESHED "+n.lastPartSn+"-"+n.lastPartIndex:n.updated?"UPDATED":"MISSED"}
`),!this.canLoad||!n.live)return;
let p,E,v;
if(n.canBlockReload&&n.endSN&&n.advanced){
const y=this.hls.config.lowLatencyMode,S=n.lastPartSn,T=n.endSN,I=n.lastPartIndex,_=I!==-1,L=S===T;
_?L?(E=T+1,v=y?0:I):(E=S,v=y?I+1:n.maxPartIndex):E=T+1;
const R=n.age,w=R+n.ageHeader;
let A=Math.min(w-n.partTarget,n.targetduration*1.5);
if(A>0){
if(w>n.targetduration*3)this.log(`Playlist last advanced ${
R.toFixed(2)}
s ago. Omitting segment and part directives.`),E=void 0,v=void 0;
else if(i!=null&&i.tuneInGoal&&w-n.partTarget>i.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${
i.tuneInGoal}
 to: ${
A}
 with playlist age: ${
n.age}
`),A=0;
else{
const D=Math.floor(A/n.targetduration);
if(E+=D,v!==void 0){
const $=Math.round(A%n.targetduration/n.partTarget);
v+=$}
this.log(`CDN Tune-in age: ${
n.ageHeader}
s last advanced ${
R.toFixed(2)}
s goal: ${
A}
 skip sn ${
D}
 to part ${
v}
`)}
n.tuneInGoal=A}
if(p=this.getDeliveryDirectives(n,t.deliveryDirectives,E,v),y||!L){
n.requestScheduled=a,this.loadingPlaylist(c,p);
return}
}
else(n.canBlockReload||n.canSkipUntil)&&(p=this.getDeliveryDirectives(n,t.deliveryDirectives,E,v));
p&&E!==void 0&&n.canBlockReload&&(n.requestScheduled=r.loading.first+Math.max(m-o*2,m/2)),this.scheduleLoading(c,p,n)}
else this.clearTimer()}
scheduleLoading(e,t,i){
const n=i||e.details;
if(!n){
this.loadingPlaylist(e,t);
return}
const r=self.performance.now(),a=n.requestScheduled;
if(r>=a){
this.loadingPlaylist(e,t);
return}
const o=a-r;
this.log(`reload live playlist ${
e.name||e.bitrate+"bps"}
 in ${
Math.round(o)}
 ms`),this.clearTimer(),this.timer=self.setTimeout(()=>this.loadingPlaylist(e,t),o)}
getDeliveryDirectives(e,t,i,n){
let r=uh(e);
return t!=null&&t.skip&&e.deltaUpdateFailed&&(i=t.msn,n=t.part,r=Zr.No),new ch(i,n,r)}
checkRetry(e){
const t=e.details,i=Na(e),n=e.errorAction,{
action:r,retryCount:a=0,retryConfig:o}
=n||{
}
,u=!!n&&!!o&&(r===Ue.RetryRequest||!n.resolved&&r===Ue.SendAlternateToPenaltyBox);
if(u){
var l;
if(a>=o.maxNumRetry)return!1;
if(i&&(l=e.context)!=null&&l.deliveryDirectives)this.warn(`Retrying playlist loading ${
a+1}
/${
o.maxNumRetry}
 after "${
t}
" without delivery-directives`),this.loadPlaylist();
else{
const c=Ec(o,a);
this.clearTimer(),this.timer=self.setTimeout(()=>this.loadPlaylist(),c),this.warn(`Retrying playlist loading ${
a+1}
/${
o.maxNumRetry}
 after "${
t}
" in ${
c}
ms`)}
e.levelRetry=!0,n.resolved=!0}
return u}
}
function Bg(s,e){
if(s.length!==e.length)return!1;
for(let t=0;
t<s.length;
t++)if(!Xn(s[t].attrs,e[t].attrs))return!1;
return!0}
function Xn(s,e,t){
const i=s["STABLE-RENDITION-ID"];
return i&&!t?i===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(n=>s[n]!==e[n])}
function hu(s,e){
return e.label.toLowerCase()===s.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(s.lang||"").toLowerCase())}
class VS extends Pc{
constructor(e){
super(e,"audio-track-controller"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}
registerListeners(){
const{
hls:e}
=this;
e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(x.ERROR,this.onError,this)}
unregisterListeners(){
const{
hls:e}
=this;
e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVEL_LOADING,this.onLevelLoading,this),e.off(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(x.ERROR,this.onError,this)}
destroy(){
this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}
onManifestLoading(){
this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}
onManifestParsed(e,t){
this.tracks=t.audioTracks||[]}
onAudioTrackLoaded(e,t){
const{
id:i,groupId:n,details:r}
=t,a=this.tracksInGroup[i];
if(!a||a.groupId!==n){
this.warn(`Audio track with id:${
i}
 and group:${
n}
 not found in active group ${
a==null?void 0:a.groupId}
`);
return}
const o=a.details;
a.details=t.details,this.log(`Audio track ${
i}
 "${
a.name}
" lang:${
a.lang}
 group:${
n}
 loaded [${
r.startSN}
-${
r.endSN}
]`),i===this.trackId&&this.playlistLoaded(i,t,o)}
onLevelLoading(e,t){
this.switchLevel(t.level)}
onLevelSwitching(e,t){
this.switchLevel(t.level)}
switchLevel(e){
const t=this.hls.levels[e];
if(!t)return;
const i=t.audioGroups||null,n=this.groupIds;
let r=this.currentTrack;
if(!i||(n==null?void 0:n.length)!==(i==null?void 0:i.length)||i!=null&&i.some(o=>(n==null?void 0:n.indexOf(o))===-1)){
this.groupIds=i,this.trackId=-1,this.currentTrack=null;
const o=this.tracks.filter(h=>!i||i.indexOf(h.groupId)!==-1);
if(o.length)this.selectDefaultTrack&&!o.some(h=>h.default)&&(this.selectDefaultTrack=!1),o.forEach((h,f)=>{
h.id=f}
);
else if(!r&&!this.tracksInGroup.length)return;
this.tracksInGroup=o;
const u=this.hls.config.audioPreference;
if(!r&&u){
const h=zt(u,o,Ws);
if(h>-1)r=o[h];
else{
const f=zt(u,this.tracks);
r=this.tracks[f]}
}
let l=this.findTrackId(r);
l===-1&&r&&(l=this.findTrackId(null));
const c={
audioTracks:o}
;
this.log(`Updating audio tracks, ${
o.length}
 track(s) found in group(s): ${
i==null?void 0:i.join(",")}
`),this.hls.trigger(x.AUDIO_TRACKS_UPDATED,c);
const d=this.trackId;
if(l!==-1&&d===-1)this.setAudioTrack(l);
else if(o.length&&d===-1){
var a;
const h=new Error(`No audio track selected for current audio group-ID(s): ${
(a=this.groupIds)==null?void 0:a.join(",")}
 track count: ${
o.length}
`);
this.warn(h.message),this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:h}
)}
}
}
onError(e,t){
t.fatal||!t.context||t.context.type===se.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}
get allAudioTracks(){
return this.tracks}
get audioTracks(){
return this.tracksInGroup}
get audioTrack(){
return this.trackId}
set audioTrack(e){
this.selectDefaultTrack=!1,this.setAudioTrack(e)}
setAudioOption(e){
const t=this.hls;
if(t.config.audioPreference=e,e){
const i=this.allAudioTracks;
if(this.selectDefaultTrack=!1,i.length){
const n=this.currentTrack;
if(n&&ei(e,n,Ws))return n;
const r=zt(e,this.tracksInGroup,Ws);
if(r>-1){
const a=this.tracksInGroup[r];
return this.setAudioTrack(r),a}
else if(n){
let a=t.loadLevel;
a===-1&&(a=t.firstAutoLevel);
const o=tE(e,t.levels,i,a,Ws);
if(o===-1)return null;
t.nextLoadLevel=o}
if(e.channels||e.audioCodec){
const a=zt(e,i);
if(a>-1)return i[a]}
}
}
return null}
setAudioTrack(e){
const t=this.tracksInGroup;
if(e<0||e>=t.length){
this.warn(`Invalid audio track id: ${
e}
`);
return}
this.selectDefaultTrack=!1;
const i=this.currentTrack,n=t[e],r=n.details&&!n.details.live;
if(e===this.trackId&&n===i&&r||(this.log(`Switching to audio-track ${
e}
 "${
n.name}
" lang:${
n.lang}
 group:${
n.groupId}
 channels:${
n.channels}
`),this.trackId=e,this.currentTrack=n,this.hls.trigger(x.AUDIO_TRACK_SWITCHING,ae({
}
,n)),r))return;
const a=this.switchParams(n.url,i==null?void 0:i.details,n.details);
this.loadPlaylist(a)}
findTrackId(e){
const t=this.tracksInGroup;
for(let i=0;
i<t.length;
i++){
const n=t[i];
if(!(this.selectDefaultTrack&&!n.default)&&(!e||ei(e,n,Ws)))return i}
if(e){
const{
name:i,lang:n,assocLang:r,characteristics:a,audioCodec:o,channels:u}
=e;
for(let l=0;
l<t.length;
l++){
const c=t[l];
if(ei({
name:i,lang:n,assocLang:r,characteristics:a,audioCodec:o,channels:u}
,c,Ws))return l}
for(let l=0;
l<t.length;
l++){
const c=t[l];
if(Xn(e.attrs,c.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return l}
for(let l=0;
l<t.length;
l++){
const c=t[l];
if(Xn(e.attrs,c.attrs,["LANGUAGE"]))return l}
}
return-1}
loadPlaylist(e){
super.loadPlaylist();
const t=this.currentTrack;
this.shouldLoadPlaylist(t)&&Pa(t.url,this.hls)&&this.scheduleLoading(t,e)}
loadingPlaylist(e,t){
super.loadingPlaylist(e,t);
const i=e.id,n=e.groupId,r=this.getUrlWithDirectives(e.url,t),a=e.details,o=a==null?void 0:a.age;
this.log(`Loading audio-track ${
i}
 "${
e.name}
" lang:${
e.lang}
 group:${
n}
${
(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}
${
o&&a.live?" age "+o.toFixed(1)+(a.type&&" "+a.type||""):""}
 ${
r}
`),this.hls.trigger(x.AUDIO_TRACK_LOADING,{
url:r,id:i,groupId:n,deliveryDirectives:t||null,track:e}
)}
}
class KS{
constructor(e){
this.tracks=void 0,this.queues={
video:[],audio:[],audiovideo:[]}
,this.tracks=e}
destroy(){
this.tracks=this.queues=null}
append(e,t,i){
if(this.queues===null||this.tracks===null)return;
const n=this.queues[t];
n.push(e),n.length===1&&!i&&this.executeNext(t)}
appendBlocker(e){
return new Promise(t=>{
const i={
label:"async-blocker",execute:t,onStart:()=>{
}
,onComplete:()=>{
}
,onError:()=>{
}
}
;
this.append(i,e)}
)}
prependBlocker(e){
return new Promise(t=>{
if(this.queues){
const i={
label:"async-blocker-prepend",execute:t,onStart:()=>{
}
,onComplete:()=>{
}
,onError:()=>{
}
}
;
this.queues[e].unshift(i)}
}
)}
removeBlockers(){
this.queues!==null&&[this.queues.video,this.queues.audio,this.queues.audiovideo].forEach(e=>{
var t;
const i=(t=e[0])==null?void 0:t.label;
(i==="async-blocker"||i==="async-blocker-prepend")&&(e[0].execute(),e.splice(0,1))}
)}
unblockAudio(e){
if(this.queues===null)return;
this.queues.audio[0]===e&&this.shiftAndExecuteNext("audio")}
executeNext(e){
if(this.queues===null||this.tracks===null)return;
const t=this.queues[e];
if(t.length){
const n=t[0];
try{
n.execute()}
catch(r){
var i;
if(n.onError(r),this.queues===null||this.tracks===null)return;
const a=(i=this.tracks[e])==null?void 0:i.buffer;
a!=null&&a.updating||this.shiftAndExecuteNext(e)}
}
}
shiftAndExecuteNext(e){
this.queues!==null&&(this.queues[e].shift(),this.executeNext(e))}
current(e){
var t;
return((t=this.queues)==null?void 0:t[e][0])||null}
toString(){
const{
queues:e,tracks:t}
=this;
return e===null||t===null?"<destroyed>":`
${
this.list("video")}

${
this.list("audio")}

${
this.list("audiovideo")}
}
`}
list(e){
var t,i;
return(t=this.queues)!=null&&t[e]||(i=this.tracks)!=null&&i[e]?`${
e}
: (${
this.listSbInfo(e)}
) ${
this.listOps(e)}
`:""}
listSbInfo(e){
var t;
const i=(t=this.tracks)==null?void 0:t[e],n=i==null?void 0:i.buffer;
return n?`SourceBuffer${
n.updating?" updating":""}
${
i.ended?" ended":""}
${
i.ending?" ending":""}
`:"none"}
listOps(e){
var t;
return((t=this.queues)==null?void 0:t[e].map(i=>i.label).join(", "))||""}
}
const qh=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,$g="HlsJsTrackRemovedError";
class HS extends Error{
constructor(e){
super(e),this.name=$g}
}
class zS extends _t{
constructor(e,t){
super("buffer-controller",e.logger),this.hls=void 0,this.fragmentTracker=void 0,this.details=null,this._objectUrl=null,this.operationQueue=null,this.bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.blockedAudioAppend=null,this.lastVideoAppendEnd=0,this.appendSource=void 0,this.transferData=void 0,this.overrides=void 0,this.appendErrors={
audio:0,video:0,audiovideo:0}
,this.tracks={
}
,this.sourceBuffers=[[null,null],[null,null]],this._onEndStreaming=i=>{
var n;
this.hls&&((n=this.mediaSource)==null?void 0:n.readyState)==="open"&&this.hls.pauseBuffering()}
,this._onStartStreaming=i=>{
this.hls&&this.hls.resumeBuffering()}
,this._onMediaSourceOpen=i=>{
const{
media:n,mediaSource:r}
=this;
i&&this.log("Media source opened"),!(!n||!r)&&(r.removeEventListener("sourceopen",this._onMediaSourceOpen),n.removeEventListener("emptied",this._onMediaEmptied),this.updateDuration(),this.hls.trigger(x.MEDIA_ATTACHED,{
media:n,mediaSource:r}
),this.mediaSource!==null&&this.checkPendingTracks())}
,this._onMediaSourceClose=()=>{
this.log("Media source closed")}
,this._onMediaSourceEnded=()=>{
this.log("Media source ended")}
,this._onMediaEmptied=()=>{
const{
mediaSrc:i,_objectUrl:n}
=this;
i!==n&&this.error(`Media element src was set while attaching MediaSource (${
n}
 > ${
i}
)`)}
,this.hls=e,this.fragmentTracker=t,this.appendSource=mx(Os(e.config.preferManagedMediaSource)),this.initTracks(),this.registerListeners()}
hasSourceTypes(){
return Object.keys(this.tracks).length>0}
destroy(){
this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=this.blockedAudioAppend=null,this.transferData=this.overrides=void 0,this.operationQueue&&(this.operationQueue.destroy(),this.operationQueue=null),this.hls=this.fragmentTracker=null,this._onMediaSourceOpen=this._onMediaSourceClose=null,this._onMediaSourceEnded=null,this._onStartStreaming=this._onEndStreaming=null}
registerListeners(){
const{
hls:e}
=this;
e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.BUFFER_RESET,this.onBufferReset,this),e.on(x.BUFFER_APPENDING,this.onBufferAppending,this),e.on(x.BUFFER_CODECS,this.onBufferCodecs,this),e.on(x.BUFFER_EOS,this.onBufferEos,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.FRAG_PARSED,this.onFragParsed,this),e.on(x.FRAG_CHANGED,this.onFragChanged,this),e.on(x.ERROR,this.onError,this)}
unregisterListeners(){
const{
hls:e}
=this;
e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.BUFFER_RESET,this.onBufferReset,this),e.off(x.BUFFER_APPENDING,this.onBufferAppending,this),e.off(x.BUFFER_CODECS,this.onBufferCodecs,this),e.off(x.BUFFER_EOS,this.onBufferEos,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.FRAG_PARSED,this.onFragParsed,this),e.off(x.FRAG_CHANGED,this.onFragChanged,this),e.off(x.ERROR,this.onError,this)}
transferMedia(){
const{
media:e,mediaSource:t}
=this;
if(!e)return null;
const i={
}
;
if(this.operationQueue){
const r=this.isUpdating();
r||this.operationQueue.removeBlockers();
const a=this.isQueued();
(r||a)&&this.warn(`Transfering MediaSource with${
a?" operations in queue":""}
${
r?" updating SourceBuffer(s)":""}
 ${
this.operationQueue}
`),this.operationQueue.destroy()}
const n=this.transferData;
return!this.sourceBufferCount&&n&&n.mediaSource===t?ue(i,n.tracks):this.sourceBuffers.forEach(r=>{
const[a]=r;
a&&(i[a]=ue({
}
,this.tracks[a]),this.removeBuffer(a)),r[0]=r[1]=null}
),{
media:e,mediaSource:t,tracks:i}
}
initTracks(){
const e={
}
;
this.sourceBuffers=[[null,null],[null,null]],this.tracks=e,this.resetQueue(),this.resetAppendErrors(),this.lastMpegAudioChunk=this.blockedAudioAppend=null,this.lastVideoAppendEnd=0}
onManifestLoading(){
this.bufferCodecEventsTotal=0,this.details=null}
onManifestParsed(e,t){
var i;
let n=2;
(t.audio&&!t.video||!t.altAudio)&&(n=1),this.bufferCodecEventsTotal=n,this.log(`${
n}
 bufferCodec event(s) expected.`),(i=this.transferData)!=null&&i.mediaSource&&this.sourceBufferCount&&n&&this.bufferCreated()}
onMediaAttaching(e,t){
const i=this.media=t.media;
this.transferData=this.overrides=void 0;
const n=Os(this.appendSource);
if(n){
const r=!!t.mediaSource;
(r||t.overrides)&&(this.transferData=t,this.overrides=t.overrides);
const a=this.mediaSource=t.mediaSource||new n;
if(this.assignMediaSource(a),r)this._objectUrl=i.src,this.attachTransferred();
else{
const o=this._objectUrl=self.URL.createObjectURL(a);
if(this.appendSource)try{
i.removeAttribute("src");
const u=self.ManagedMediaSource;
i.disableRemotePlayback=i.disableRemotePlayback||u&&a instanceof u,Qh(i),WS(i,o),i.load()}
catch{
i.src=o}
else i.src=o}
i.addEventListener("emptied",this._onMediaEmptied)}
}
assignMediaSource(e){
var t,i;
this.log(`${
((t=this.transferData)==null?void 0:t.mediaSource)===e?"transferred":"created"}
 media source: ${
(i=e.constructor)==null?void 0:i.name}
`),e.addEventListener("sourceopen",this._onMediaSourceOpen),e.addEventListener("sourceended",this._onMediaSourceEnded),e.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(e.addEventListener("startstreaming",this._onStartStreaming),e.addEventListener("endstreaming",this._onEndStreaming))}
attachTransferred(){
const e=this.media,t=this.transferData;
if(!t||!e)return;
const i=this.tracks,n=t.tracks,r=n?Object.keys(n):null,a=r?r.length:0,o=()=>{
Promise.resolve().then(()=>{
this.media&&this.mediaSourceOpenOrEnded&&this._onMediaSourceOpen()}
)}
;
if(n&&r&&a){
if(!this.tracksReady){
this.hls.config.startFragPrefetch=!0,this.log("attachTransferred: waiting for SourceBuffer track info");
return}
if(this.log(`attachTransferred: (bufferCodecEventsTotal ${
this.bufferCodecEventsTotal}
)
required tracks: ${
de(i,(u,l)=>u==="initSegment"?void 0:l)}
;

transfer tracks: ${
de(n,(u,l)=>u==="initSegment"?void 0:l)}
}
`),!Mm(n,i)){
t.mediaSource=null,t.tracks=void 0;
const u=e.currentTime,l=this.details,c=Math.max(u,(l==null?void 0:l.fragments[0].start)||0);
if(c-u>1){
this.log(`attachTransferred: waiting for playback to reach new tracks start time ${
u}
 -> ${
c}
`);
return}
this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${
Object.keys(n)}
"->"${
Object.keys(i)}
") start time: ${
c}
 currentTime: ${
u}
`),this.onMediaDetaching(x.MEDIA_DETACHING,{
}
),this.onMediaAttaching(x.MEDIA_ATTACHING,t),e.currentTime=c;
return}
this.transferData=void 0,r.forEach(u=>{
const l=u,c=n[l];
if(c){
const d=c.buffer;
if(d){
const h=this.fragmentTracker,f=c.id;
if(h.hasFragments(f)||h.hasParts(f)){
const E=X.getBuffered(d);
h.detectEvictedFragments(l,E,f,null,!0)}
const m=qo(l),p=[l,d];
this.sourceBuffers[m]=p,d.updating&&this.operationQueue&&this.operationQueue.prependBlocker(l),this.trackSourceBuffer(l,c)}
}
}
),o(),this.bufferCreated()}
else this.log("attachTransferred: MediaSource w/o SourceBuffers"),o()}
get mediaSourceOpenOrEnded(){
var e;
const t=(e=this.mediaSource)==null?void 0:e.readyState;
return t==="open"||t==="ended"}
onMediaDetaching(e,t){
const i=!!t.transferMedia;
this.transferData=this.overrides=void 0;
const{
media:n,mediaSource:r,_objectUrl:a}
=this;
if(r){
if(this.log(`media source ${
i?"transferring":"detaching"}
`),i)this.sourceBuffers.forEach(([o])=>{
o&&this.removeBuffer(o)}
),this.resetQueue();
else{
if(this.mediaSourceOpenOrEnded){
const o=r.readyState==="open";
try{
const u=r.sourceBuffers;
for(let l=u.length;
l--;
)o&&u[l].abort(),r.removeSourceBuffer(u[l]);
o&&r.endOfStream()}
catch(u){
this.warn(`onMediaDetaching: ${
u.message}
 while calling endOfStream`)}
}
this.sourceBufferCount&&this.onBufferReset()}
r.removeEventListener("sourceopen",this._onMediaSourceOpen),r.removeEventListener("sourceended",this._onMediaSourceEnded),r.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(r.removeEventListener("startstreaming",this._onStartStreaming),r.removeEventListener("endstreaming",this._onEndStreaming)),this.mediaSource=null,this._objectUrl=null}
n&&(n.removeEventListener("emptied",this._onMediaEmptied),i||(a&&self.URL.revokeObjectURL(a),this.mediaSrc===a?(n.removeAttribute("src"),this.appendSource&&Qh(n),n.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.media=null),this.hls.trigger(x.MEDIA_DETACHED,t)}
onBufferReset(){
this.sourceBuffers.forEach(([e])=>{
e&&this.resetBuffer(e)}
),this.initTracks()}
resetBuffer(e){
var t;
const i=(t=this.tracks[e])==null?void 0:t.buffer;
if(this.removeBuffer(e),i)try{
var n;
(n=this.mediaSource)!=null&&n.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(i)}
catch(r){
this.warn(`onBufferReset ${
e}
`,r)}
delete this.tracks[e]}
removeBuffer(e){
this.removeBufferListeners(e),this.sourceBuffers[qo(e)]=[null,null];
const t=this.tracks[e];
t&&(t.buffer=void 0)}
resetQueue(){
this.operationQueue&&this.operationQueue.destroy(),this.operationQueue=new KS(this.tracks)}
onBufferCodecs(e,t){
var i;
const n=this.tracks,r=Object.keys(t);
this.log(`BUFFER_CODECS: "${
r}
" (current SB count ${
this.sourceBufferCount}
)`);
const a="audiovideo"in t&&(n.audio||n.video)||n.audiovideo&&("audio"in t||"video"in t),o=!a&&this.sourceBufferCount&&this.media&&r.some(u=>!n[u]);
if(a||o){
this.warn(`Unsupported transition between "${
Object.keys(n)}
" and "${
r}
" SourceBuffers`);
return}
r.forEach(u=>{
var l,c;
const d=t[u],{
id:h,codec:f,levelCodec:m,container:p,metadata:E,supplemental:v}
=d;
let y=n[u];
const S=(l=this.transferData)==null||(l=l.tracks)==null?void 0:l[u],T=S!=null&&S.buffer?S:y,I=(T==null?void 0:T.pendingCodec)||(T==null?void 0:T.codec),_=T==null?void 0:T.levelCodec;
y||(y=n[u]={
buffer:void 0,listeners:[],codec:f,supplemental:v,container:p,levelCodec:m,metadata:E,id:h}
);
const L=Xr(I,_),R=L==null?void 0:L.replace(qh,"$1");
let w=Xr(f,m);
const A=(c=w)==null?void 0:c.replace(qh,"$1");
w&&L&&R!==A&&(u.slice(0,5)==="audio"&&(w=Ca(w,this.appendSource)),this.log(`switching codec ${
I}
 to ${
w}
`),w!==(y.pendingCodec||y.codec)&&(y.pendingCodec=w),y.container=p,this.appendChangeType(u,p,w))}
),(this.tracksReady||this.sourceBufferCount)&&(t.tracks=this.sourceBufferTracks),!this.sourceBufferCount&&(this.bufferCodecEventsTotal>1&&!this.tracks.video&&!t.video&&((i=t.audio)==null?void 0:i.id)==="main"&&(this.log("Main audio-only"),this.bufferCodecEventsTotal=1),this.mediaSourceOpenOrEnded&&this.checkPendingTracks())}
get sourceBufferTracks(){
return Object.keys(this.tracks).reduce((e,t)=>{
const i=this.tracks[t];
return e[t]={
id:i.id,container:i.container,codec:i.codec,levelCodec:i.levelCodec}
,e}
,{
}
)}
appendChangeType(e,t,i){
const n=`${
t}
;
codecs=${
i}
`,r={
label:`change-type=${
n}
`,execute:()=>{
const a=this.tracks[e];
if(a){
const o=a.buffer;
o!=null&&o.changeType&&(this.log(`changing ${
e}
 sourceBuffer type to ${
n}
`),o.changeType(n),a.codec=i,a.container=t)}
this.shiftAndExecuteNext(e)}
,onStart:()=>{
}
,onComplete:()=>{
}
,onError:a=>{
this.warn(`Failed to change ${
e}
 SourceBuffer type`,a)}
}
;
this.append(r,e,this.isPending(this.tracks[e]))}
blockAudio(e){
var t;
const i=e.start,n=i+e.duration*.05;
if(((t=this.fragmentTracker.getAppendedFrag(i,H.MAIN))==null?void 0:t.gap)===!0)return;
const a={
label:"block-audio",execute:()=>{
var o;
const u=this.tracks.video;
(this.lastVideoAppendEnd>n||u!=null&&u.buffer&&X.isBuffered(u.buffer,n)||((o=this.fragmentTracker.getAppendedFrag(n,H.MAIN))==null?void 0:o.gap)===!0)&&(this.blockedAudioAppend=null,this.shiftAndExecuteNext("audio"))}
,onStart:()=>{
}
,onComplete:()=>{
}
,onError:o=>{
this.warn("Error executing block-audio operation",o)}
}
;
this.blockedAudioAppend={
op:a,frag:e}
,this.append(a,"audio",!0)}
unblockAudio(){
const{
blockedAudioAppend:e,operationQueue:t}
=this;
e&&t&&(this.blockedAudioAppend=null,t.unblockAudio(e.op))}
onBufferAppending(e,t){
const{
tracks:i}
=this,{
data:n,type:r,parent:a,frag:o,part:u,chunkMeta:l,offset:c}
=t,d=l.buffering[r],{
sn:h,cc:f}
=o,m=self.performance.now();
d.start=m;
const p=o.stats.buffering,E=u?u.stats.buffering:null;
p.start===0&&(p.start=m),E&&E.start===0&&(E.start=m);
const v=i.audio;
let y=!1;
r==="audio"&&(v==null?void 0:v.container)==="audio/mpeg"&&(y=!this.lastMpegAudioChunk||l.id===1||this.lastMpegAudioChunk.sn!==l.sn,this.lastMpegAudioChunk=l);
const S=i.video,T=S==null?void 0:S.buffer;
if(T&&h!=="initSegment"){
const L=u||o,R=this.blockedAudioAppend;
if(r==="audio"&&a!=="main"&&!this.blockedAudioAppend&&!(S.ending||S.ended)){
const A=L.start+L.duration*.05,D=T.buffered,$=this.currentOp("video");
!D.length&&!$?this.blockAudio(L):!$&&!X.isBuffered(T,A)&&this.lastVideoAppendEnd<A&&this.blockAudio(L)}
else if(r==="video"){
const w=L.end;
if(R){
const A=R.frag.start;
(w>A||w<this.lastVideoAppendEnd||X.isBuffered(T,A))&&this.unblockAudio()}
this.lastVideoAppendEnd=w}
}
const I=(u||o).start,_={
label:`append-${
r}
`,execute:()=>{
var L;
d.executeStart=self.performance.now();
const R=(L=this.tracks[r])==null?void 0:L.buffer;
R&&(y?this.updateTimestampOffset(R,I,.1,r,h,f):c!==void 0&&j(c)&&this.updateTimestampOffset(R,c,1e-6,r,h,f)),this.appendExecutor(n,r)}
,onStart:()=>{
}
,onComplete:()=>{
const L=self.performance.now();
d.executeEnd=d.end=L,p.first===0&&(p.first=L),E&&E.first===0&&(E.first=L);
const R={
}
;
this.sourceBuffers.forEach(([w,A])=>{
w&&(R[w]=X.getBuffered(A))}
),this.appendErrors[r]=0,r==="audio"||r==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(x.BUFFER_APPENDED,{
type:r,frag:o,part:u,chunkMeta:l,parent:o.type,timeRanges:R}
)}
,onError:L=>{
var R;
const w={
type:Y.MEDIA_ERROR,parent:o.type,details:b.BUFFER_APPEND_ERROR,sourceBufferName:r,frag:o,part:u,chunkMeta:l,error:L,err:L,fatal:!1}
,A=(R=this.media)==null?void 0:R.error;
if(L.code===DOMException.QUOTA_EXCEEDED_ERR||L.name=="QuotaExceededError"||"quota"in L)w.details=b.BUFFER_FULL_ERROR;
else if(L.code===DOMException.INVALID_STATE_ERR&&this.mediaSourceOpenOrEnded&&!A)w.errorAction=Mi(!0);
else if(L.name===$g&&this.sourceBufferCount===0)w.errorAction=Mi(!0);
else{
const D=++this.appendErrors[r];
this.warn(`Failed ${
D}
/${
this.hls.config.appendErrorMaxRetry}
 times to append segment in "${
r}
" sourceBuffer (${
A||"no media error"}
)`),(D>=this.hls.config.appendErrorMaxRetry||A)&&(w.fatal=!0)}
this.hls.trigger(x.ERROR,w)}
}
;
this.log(`queuing "${
r}
" append sn: ${
h}
${
u?" p: "+u.index:""}
 of ${
o.type===H.MAIN?"level":"track"}
 ${
o.level}
 cc: ${
f}
`),this.append(_,r,this.isPending(this.tracks[r]))}
getFlushOp(e,t,i){
return this.log(`queuing "${
e}
" remove ${
t}
-${
i}
`),{
label:"remove",execute:()=>{
this.removeExecutor(e,t,i)}
,onStart:()=>{
}
,onComplete:()=>{
this.hls.trigger(x.BUFFER_FLUSHED,{
type:e}
)}
,onError:n=>{
this.warn(`Failed to remove ${
t}
-${
i}
 from "${
e}
" SourceBuffer`,n)}
}
}
onBufferFlushing(e,t){
const{
type:i,startOffset:n,endOffset:r}
=t;
i?this.append(this.getFlushOp(i,n,r),i):this.sourceBuffers.forEach(([a])=>{
a&&this.append(this.getFlushOp(a,n,r),a)}
)}
onFragParsed(e,t){
const{
frag:i,part:n}
=t,r=[],a=n?n.elementaryStreams:i.elementaryStreams;
a[ce.AUDIOVIDEO]?r.push("audiovideo"):(a[ce.AUDIO]&&r.push("audio"),a[ce.VIDEO]&&r.push("video"));
const o=()=>{
const u=self.performance.now();
i.stats.buffering.end=u,n&&(n.stats.buffering.end=u);
const l=n?n.stats:i.stats;
this.hls.trigger(x.FRAG_BUFFERED,{
frag:i,part:n,stats:l,id:i.type}
)}
;
r.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${
i.type}
 level: ${
i.level}
 sn: ${
i.sn}
`),this.blockBuffers(o,r).catch(u=>{
this.warn(`Fragment buffered callback ${
u}
`),this.stepOperationQueue(this.sourceBufferTypes)}
)}
onFragChanged(e,t){
this.trimBuffers()}
get bufferedToEnd(){
return this.sourceBufferCount>0&&!this.sourceBuffers.some(([e])=>{
if(e){
const t=this.tracks[e];
if(t)return!t.ended||t.ending}
return!1}
)}
onBufferEos(e,t){
var i;
this.sourceBuffers.forEach(([a])=>{
if(a){
const o=this.tracks[a];
(!t.type||t.type===a)&&(o.ending=!0,o.ended||(o.ended=!0,this.log(`${
a}
 buffer reached EOS`)))}
}
);
const n=((i=this.overrides)==null?void 0:i.endOfStream)!==!1;
this.sourceBufferCount>0&&!this.sourceBuffers.some(([a])=>{
var o;
return a&&!((o=this.tracks[a])!=null&&o.ended)}
)?n?(this.log("Queueing EOS"),this.blockUntilOpen(()=>{
this.tracksEnded();
const{
mediaSource:a}
=this;
if(!a||a.readyState!=="open"){
a&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${
a.readyState}
`);
return}
this.log("Calling mediaSource.endOfStream()"),a.endOfStream(),this.hls.trigger(x.BUFFERED_TO_END,void 0)}
)):(this.tracksEnded(),this.hls.trigger(x.BUFFERED_TO_END,void 0)):t.type==="video"&&this.unblockAudio()}
tracksEnded(){
this.sourceBuffers.forEach(([e])=>{
if(e!==null){
const t=this.tracks[e];
t&&(t.ending=!1)}
}
)}
onLevelUpdated(e,{
details:t}
){
t.fragments.length&&(this.details=t,this.updateDuration())}
updateDuration(){
this.blockUntilOpen(()=>{
const e=this.getDurationAndRange();
e&&this.updateMediaSource(e)}
)}
onError(e,t){
if(t.details===b.BUFFER_APPEND_ERROR&&t.frag){
var i;
const n=(i=t.errorAction)==null?void 0:i.nextAutoLevel;
j(n)&&n!==t.frag.level&&this.resetAppendErrors()}
}
resetAppendErrors(){
this.appendErrors={
audio:0,video:0,audiovideo:0}
}
trimBuffers(){
const{
hls:e,details:t,media:i}
=this;
if(!i||t===null||!this.sourceBufferCount)return;
const n=e.config,r=i.currentTime,a=t.levelTargetDuration,o=t.live&&n.liveBackBufferLength!==null?n.liveBackBufferLength:n.backBufferLength;
if(j(o)&&o>=0){
const l=Math.max(o,a),c=Math.floor(r/a)*a-l;
this.flushBackBuffer(r,a,c)}
const u=n.frontBufferFlushThreshold;
if(j(u)&&u>0){
const l=Math.max(n.maxBufferLength,u),c=Math.max(l,a),d=Math.floor(r/a)*a+c;
this.flushFrontBuffer(r,a,d)}
}
flushBackBuffer(e,t,i){
this.sourceBuffers.forEach(([n,r])=>{
if(r){
const o=X.getBuffered(r);
if(o.length>0&&i>o.start(0)){
var a;
this.hls.trigger(x.BACK_BUFFER_REACHED,{
bufferEnd:i}
);
const u=this.tracks[n];
if((a=this.details)!=null&&a.live)this.hls.trigger(x.LIVE_BACK_BUFFER_REACHED,{
bufferEnd:i}
);
else if(u!=null&&u.ended){
this.log(`Cannot flush ${
n}
 back buffer while SourceBuffer is in ended state`);
return}
this.hls.trigger(x.BUFFER_FLUSHING,{
startOffset:0,endOffset:i,type:n}
)}
}
}
)}
flushFrontBuffer(e,t,i){
this.sourceBuffers.forEach(([n,r])=>{
if(r){
const a=X.getBuffered(r),o=a.length;
if(o<2)return;
const u=a.start(o-1),l=a.end(o-1);
if(i>u||e>=u&&e<=l)return;
this.hls.trigger(x.BUFFER_FLUSHING,{
startOffset:u,endOffset:1/0,type:n}
)}
}
)}
getDurationAndRange(){
var e;
const{
details:t,mediaSource:i}
=this;
if(!t||!this.media||(i==null?void 0:i.readyState)!=="open")return null;
const n=t.edge;
if(t.live&&this.hls.config.liveDurationInfinity){
if(t.fragments.length&&i.setLiveSeekableRange){
const l=Math.max(0,t.fragmentStart),c=Math.max(l,n);
return{
duration:1/0,start:l,end:c}
}
return{
duration:1/0}
}
const r=(e=this.overrides)==null?void 0:e.duration;
if(r)return j(r)?{
duration:r}
:null;
const a=this.media.duration,o=j(i.duration)?i.duration:0;
return n>o&&n>a||!j(a)?{
duration:n}
:null}
updateMediaSource({
duration:e,start:t,end:i}
){
const n=this.mediaSource;
!this.media||!n||n.readyState!=="open"||(n.duration!==e&&(j(e)&&this.log(`Updating MediaSource duration to ${
e.toFixed(3)}
`),n.duration=e),t!==void 0&&i!==void 0&&(this.log(`MediaSource duration is set to ${
n.duration}
. Setting seekable range to ${
t}
-${
i}
.`),n.setLiveSeekableRange(t,i)))}
get tracksReady(){
const e=this.pendingTrackCount;
return e>0&&(e>=this.bufferCodecEventsTotal||this.isPending(this.tracks.audiovideo))}
checkPendingTracks(){
const{
bufferCodecEventsTotal:e,pendingTrackCount:t,tracks:i}
=this;
if(this.log(`checkPendingTracks (pending: ${
t}
 codec events expected: ${
e}
) ${
de(i)}
`),this.tracksReady){
var n;
const r=(n=this.transferData)==null?void 0:n.tracks;
r&&Object.keys(r).length?this.attachTransferred():this.createSourceBuffers()}
}
bufferCreated(){
if(this.sourceBufferCount){
const e={
}
;
this.sourceBuffers.forEach(([t,i])=>{
if(t){
const n=this.tracks[t];
e[t]={
buffer:i,container:n.container,codec:n.codec,supplemental:n.supplemental,levelCodec:n.levelCodec,id:n.id,metadata:n.metadata}
}
}
),this.hls.trigger(x.BUFFER_CREATED,{
tracks:e}
),this.log(`SourceBuffers created. Running queue: ${
this.operationQueue}
`),this.sourceBuffers.forEach(([t])=>{
this.executeNext(t)}
)}
else{
const e=new Error("could not create source buffer for media codec(s)");
this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:e,reason:e.message}
)}
}
createSourceBuffers(){
const{
tracks:e,sourceBuffers:t,mediaSource:i}
=this;
if(!i)throw new Error("createSourceBuffers called when mediaSource was null");
for(const r in e){
const a=r,o=e[a];
if(this.isPending(o)){
const u=this.getTrackCodec(o,a),l=`${
o.container}
;
codecs=${
u}
`;
o.codec=u,this.log(`creating sourceBuffer(${
l}
)${
this.currentOp(a)?" Queued":""}
 ${
de(o)}
`);
try{
const c=i.addSourceBuffer(l),d=qo(a),h=[a,c];
t[d]=h,o.buffer=c}
catch(c){
var n;
this.error(`error while trying to add sourceBuffer: ${
c.message}
`),this.shiftAndExecuteNext(a),(n=this.operationQueue)==null||n.removeBlockers(),delete this.tracks[a],this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:c,sourceBufferName:a,mimeType:l,parent:o.id}
);
return}
this.trackSourceBuffer(a,o)}
}
this.bufferCreated()}
getTrackCodec(e,t){
const i=e.supplemental;
let n=e.codec;
i&&(t==="video"||t==="audiovideo")&&Hn(i,"video")&&(n=Mx(n,i));
const r=Xr(n,e.levelCodec);
return r?t.slice(0,5)==="audio"?Ca(r,this.appendSource):r:""}
trackSourceBuffer(e,t){
const i=t.buffer;
if(!i)return;
const n=this.getTrackCodec(t,e);
this.tracks[e]={
buffer:i,codec:n,container:t.container,levelCodec:t.levelCodec,supplemental:t.supplemental,metadata:t.metadata,id:t.id,listeners:[]}
,this.removeBufferListeners(e),this.addBufferListener(e,"updatestart",this.onSBUpdateStart),this.addBufferListener(e,"updateend",this.onSBUpdateEnd),this.addBufferListener(e,"error",this.onSBUpdateError),this.appendSource&&this.addBufferListener(e,"bufferedchange",(r,a)=>{
const o=a.removedRanges;
o!=null&&o.length&&this.hls.trigger(x.BUFFER_FLUSHED,{
type:r}
)}
)}
get mediaSrc(){
var e,t;
const i=((e=this.media)==null||(t=e.querySelector)==null?void 0:t.call(e,"source"))||this.media;
return i==null?void 0:i.src}
onSBUpdateStart(e){
const t=this.currentOp(e);
t&&t.onStart()}
onSBUpdateEnd(e){
var t;
if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){
this.resetBuffer(e);
return}
const i=this.currentOp(e);
i&&(i.onComplete(),this.shiftAndExecuteNext(e))}
onSBUpdateError(e,t){
var i;
const n=new Error(`${
e}
 SourceBuffer error. MediaSource readyState: ${
(i=this.mediaSource)==null?void 0:i.readyState}
`);
this.error(`${
n}
`,t),this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:n,fatal:!1}
);
const r=this.currentOp(e);
r&&r.onError(n)}
updateTimestampOffset(e,t,i,n,r,a){
const o=t-e.timestampOffset;
Math.abs(o)>=i&&(this.log(`Updating ${
n}
 SourceBuffer timestampOffset to ${
t}
 (sn: ${
r}
 cc: ${
a}
)`),e.timestampOffset=t)}
removeExecutor(e,t,i){
const{
media:n,mediaSource:r}
=this,a=this.tracks[e],o=a==null?void 0:a.buffer;
if(!n||!r||!o){
this.warn(`Attempting to remove from the ${
e}
 SourceBuffer, but it does not exist`),this.shiftAndExecuteNext(e);
return}
const u=j(n.duration)?n.duration:1/0,l=j(r.duration)?r.duration:1/0,c=Math.max(0,t),d=Math.min(i,u,l);
d>c&&(!a.ending||a.ended)?(a.ended=!1,this.log(`Removing [${
c}
,${
d}
] from the ${
e}
 SourceBuffer`),o.remove(c,d)):this.shiftAndExecuteNext(e)}
appendExecutor(e,t){
const i=this.tracks[t],n=i==null?void 0:i.buffer;
if(!n)throw new HS(`Attempting to append to the ${
t}
 SourceBuffer, but it does not exist`);
i.ending=!1,i.ended=!1,n.appendBuffer(e)}
blockUntilOpen(e){
if(this.isUpdating()||this.isQueued())this.blockBuffers(e).catch(t=>{
this.warn(`SourceBuffer blocked callback ${
t}
`),this.stepOperationQueue(this.sourceBufferTypes)}
);
else try{
e()}
catch(t){
this.warn(`Callback run without blocking ${
this.operationQueue}
 ${
t}
`)}
}
isUpdating(){
return this.sourceBuffers.some(([e,t])=>e&&t.updating)}
isQueued(){
return this.sourceBuffers.some(([e])=>e&&!!this.currentOp(e))}
isPending(e){
return!!e&&!e.buffer}
blockBuffers(e,t=this.sourceBufferTypes){
if(!t.length)return this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);
const{
operationQueue:i}
=this,n=t.map(a=>this.appendBlocker(a));
return t.length>1&&!!this.blockedAudioAppend&&this.unblockAudio(),Promise.all(n).then(a=>{
i===this.operationQueue&&(e(),this.stepOperationQueue(this.sourceBufferTypes))}
)}
stepOperationQueue(e){
e.forEach(t=>{
var i;
const n=(i=this.tracks[t])==null?void 0:i.buffer;
!n||n.updating||this.shiftAndExecuteNext(t)}
)}
append(e,t,i){
this.operationQueue&&this.operationQueue.append(e,t,i)}
appendBlocker(e){
if(this.operationQueue)return this.operationQueue.appendBlocker(e)}
currentOp(e){
return this.operationQueue?this.operationQueue.current(e):null}
executeNext(e){
e&&this.operationQueue&&this.operationQueue.executeNext(e)}
shiftAndExecuteNext(e){
this.operationQueue&&this.operationQueue.shiftAndExecuteNext(e)}
get pendingTrackCount(){
return Object.keys(this.tracks).reduce((e,t)=>e+(this.isPending(this.tracks[t])?1:0),0)}
get sourceBufferCount(){
return this.sourceBuffers.reduce((e,[t])=>e+(t?1:0),0)}
get sourceBufferTypes(){
return this.sourceBuffers.map(([e])=>e).filter(e=>!!e)}
addBufferListener(e,t,i){
const n=this.tracks[e];
if(!n)return;
const r=n.buffer;
if(!r)return;
const a=i.bind(this,e);
n.listeners.push({
event:t,listener:a}
),r.addEventListener(t,a)}
removeBufferListeners(e){
const t=this.tracks[e];
if(!t)return;
const i=t.buffer;
i&&(t.listeners.forEach(n=>{
i.removeEventListener(n.event,n.listener)}
),t.listeners.length=0)}
}
function Qh(s){
const e=s.querySelectorAll("source");
[].slice.call(e).forEach(t=>{
s.removeChild(t)}
)}
function WS(s,e){
const t=self.document.createElement("source");
t.type="video/mp4",t.src=e,s.appendChild(t)}
function qo(s){
return s==="audio"?1:0}
class Nc{
constructor(e){
this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}
setStreamController(e){
this.streamController=e}
destroy(){
this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}
registerListeners(){
const{
hls:e}
=this;
e.on(x.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.BUFFER_CODECS,this.onBufferCodecs,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this)}
unregisterListener(){
const{
hls:e}
=this;
e.off(x.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.BUFFER_CODECS,this.onBufferCodecs,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this)}
onFpsDropLevelCapping(e,t){
const i=this.hls.levels[t.droppedLevel];
this.isLevelAllowed(i)&&this.restrictedLevels.push({
bitrate:i.bitrate,height:i.height,width:i.width}
)}
onMediaAttaching(e,t){
this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}
onManifestParsed(e,t){
const i=this.hls;
this.restrictedLevels=[],this.firstLevel=t.firstLevel,i.config.capLevelToPlayerSize&&t.video&&this.startCapping()}
onLevelsUpdated(e,t){
this.timer&&j(this.autoLevelCapping)&&this.detectPlayerSize()}
onBufferCodecs(e,t){
this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}
onMediaDetaching(){
this.stopCapping(),this.media=null}
detectPlayerSize(){
if(this.media){
if(this.mediaHeight<=0||this.mediaWidth<=0){
this.clientRect=null;
return}
const e=this.hls.levels;
if(e.length){
const t=this.hls,i=this.getMaxLevel(e.length-1);
i!==this.autoLevelCapping&&t.logger.log(`Setting autoLevelCapping to ${
i}
: ${
e[i].height}
p@${
e[i].bitrate}
 for media ${
this.mediaWidth}
x${
this.mediaHeight}
`),t.autoLevelCapping=i,t.autoLevelEnabled&&t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}
}
}
getMaxLevel(e){
const t=this.hls.levels;
if(!t.length)return-1;
const i=t.filter((n,r)=>this.isLevelAllowed(n)&&r<=e);
return this.clientRect=null,Nc.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)}
startCapping(){
this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}
stopCapping(){
this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}
getDimensions(){
if(this.clientRect)return this.clientRect;
const e=this.media,t={
width:0,height:0}
;
if(e){
const i=e.getBoundingClientRect();
t.width=i.width,t.height=i.height,!t.width&&!t.height&&(t.width=i.right-i.left||e.width||0,t.height=i.bottom-i.top||e.height||0)}
return this.clientRect=t,t}
get mediaWidth(){
return this.getDimensions().width*this.contentScaleFactor}
get mediaHeight(){
return this.getDimensions().height*this.contentScaleFactor}
get contentScaleFactor(){
let e=1;
if(!this.hls.config.ignoreDevicePixelRatio)try{
e=self.devicePixelRatio}
catch{
}
return Math.min(e,this.hls.config.maxDevicePixelRatio)}
isLevelAllowed(e){
return!this.restrictedLevels.some(i=>e.bitrate===i.bitrate&&e.width===i.width&&e.height===i.height)}
static getMaxLevelByMediaSize(e,t,i){
if(!(e!=null&&e.length))return-1;
const n=(o,u)=>u?o.width!==u.width||o.height!==u.height:!0;
let r=e.length-1;
const a=Math.max(t,i);
for(let o=0;
o<e.length;
o+=1){
const u=e[o];
if((u.width>=a||u.height>=a)&&n(u,e[o+1])){
r=o;
break}
}
return r}
}
const YS={
MANIFEST:"m",AUDIO:"a",VIDEO:"v",MUXED:"av",INIT:"i",CAPTION:"c",TIMED_TEXT:"tt",KEY:"k",OTHER:"o"}
,Je=YS,qS={
HLS:"h"}
,QS=qS;
class Qt{
constructor(e,t){
Array.isArray(e)&&(e=e.map(i=>i instanceof Qt?i:new Qt(i))),this.value=e,this.params=t}
}
const XS="Dict";
function ZS(s){
return Array.isArray(s)?JSON.stringify(s):s instanceof Map?"Map{
}
":s instanceof Set?"Set{
}
":typeof s=="object"?JSON.stringify(s):String(s)}
function JS(s,e,t,i){
return new Error(`failed to ${
s}
 "${
ZS(e)}
" as ${
t}
`,{
cause:i}
)}
function Xt(s,e,t){
return JS("serialize",s,e,t)}
class jg{
constructor(e){
this.description=e}
}
const Xh="Bare Item",eT="Boolean";
function tT(s){
if(typeof s!="boolean")throw Xt(s,eT);
return s?"?1":"?0"}
function sT(s){
return btoa(String.fromCharCode(...s))}
const iT="Byte Sequence";
function nT(s){
if(ArrayBuffer.isView(s)===!1)throw Xt(s,iT);
return`:${
sT(s)}
:`}
const rT="Integer";
function aT(s){
return s<-999999999999999||999999999999999<s}
function Gg(s){
if(aT(s))throw Xt(s,rT);
return s.toString()}
function oT(s){
return`@${
Gg(s.getTime()/1e3)}
`}
function Vg(s,e){
if(s<0)return-Vg(-s,e);
const t=Math.pow(10,e);
if(Math.abs(s*t%1-.5)<Number.EPSILON){
const n=Math.floor(s*t);
return(n%2===0?n:n+1)/t}
else return Math.round(s*t)/t}
const lT="Decimal";
function uT(s){
const e=Vg(s,3);
if(Math.floor(Math.abs(e)).toString().length>12)throw Xt(s,lT);
const t=e.toString();
return t.includes(".")?t:`${
t}
.0`}
const cT="String",dT=/[\x00-\x1f\x7f]+/;
function hT(s){
if(dT.test(s))throw Xt(s,cT);
return`"${
s.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}
"`}
function fT(s){
return s.description||s.toString().slice(7,-1)}
const mT="Token";
function Zh(s){
const e=fT(s);
if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw Xt(e,mT);
return e}
function fu(s){
switch(typeof s){
case"number":if(!j(s))throw Xt(s,Xh);
return Number.isInteger(s)?Gg(s):uT(s);
case"string":return hT(s);
case"symbol":return Zh(s);
case"boolean":return tT(s);
case"object":if(s instanceof Date)return oT(s);
if(s instanceof Uint8Array)return nT(s);
if(s instanceof jg)return Zh(s);
default:throw Xt(s,Xh)}
}
const gT="Key";
function mu(s){
if(/^[a-z*][a-z0-9\-_.*]*$/.test(s)===!1)throw Xt(s,gT);
return s}
function Oc(s){
return s==null?"":Object.entries(s).map(([e,t])=>t===!0?`;
${
mu(e)}
`:`;
${
mu(e)}
=${
fu(t)}
`).join("")}
function Kg(s){
return s instanceof Qt?`${
fu(s.value)}
${
Oc(s.params)}
`:fu(s)}
function pT(s){
return`(${
s.value.map(Kg).join(" ")}
)${
Oc(s.params)}
`}
function yT(s,e={
whitespace:!0}
){
if(typeof s!="object"||s==null)throw Xt(s,XS);
const t=s instanceof Map?s.entries():Object.entries(s),i=e!=null&&e.whitespace?" ":"";
return Array.from(t).map(([n,r])=>{
r instanceof Qt||(r=new Qt(r));
let a=mu(n);
return r.value===!0?a+=Oc(r.params):(a+="=",Array.isArray(r.value)?a+=pT(r):a+=Kg(r)),a}
).join(`,${
i}
`)}
function Hg(s,e){
return yT(s,e)}
const jt="CMCD-Object",Se="CMCD-Request",Vs="CMCD-Session",gs="CMCD-Status",vT={
br:jt,ab:jt,d:jt,ot:jt,tb:jt,tpb:jt,lb:jt,tab:jt,lab:jt,url:jt,pb:Se,bl:Se,tbl:Se,dl:Se,ltc:Se,mtp:Se,nor:Se,nrr:Se,rc:Se,sn:Se,sta:Se,su:Se,ttfb:Se,ttfbb:Se,ttlb:Se,cmsdd:Se,cmsds:Se,smrt:Se,df:Se,cs:Se,ts:Se,cid:Vs,pr:Vs,sf:Vs,sid:Vs,st:Vs,v:Vs,msd:Vs,bs:gs,bsd:gs,cdn:gs,rtp:gs,bg:gs,pt:gs,ec:gs,e:gs}
,xT={
REQUEST:Se}
;
function ET(s){
return Object.keys(s).reduce((e,t)=>{
var i;
return(i=s[t])===null||i===void 0||i.forEach(n=>e[n]=t),e}
,{
}
)}
function ST(s,e){
const t={
}
;
if(!s)return t;
const i=Object.keys(s),n=e?ET(e):{
}
;
return i.reduce((r,a)=>{
var o;
const u=vT[a]||n[a]||xT.REQUEST,l=(o=r[u])!==null&&o!==void 0?o:r[u]={
}
;
return l[a]=s[a],r}
,t)}
function TT(s){
return["ot","sf","st","e","sta"].includes(s)}
function IT(s){
return typeof s=="number"?j(s):s!=null&&s!==""&&s!==!1}
const zg="event";
function LT(s,e){
const t=new URL(s),i=new URL(e);
if(t.origin!==i.origin)return s;
const n=t.pathname.split("/").slice(1),r=i.pathname.split("/").slice(1,-1);
for(;
n[0]===r[0];
)n.shift(),r.shift();
for(;
r.length;
)r.shift(),n.unshift("..");
return n.join("/")+t.search+t.hash}
const sa=s=>Math.round(s),gu=(s,e)=>Array.isArray(s)?s.map(t=>gu(t,e)):s instanceof Qt&&typeof s.value=="string"?new Qt(gu(s.value,e),s.params):(e.baseUrl&&(s=LT(s,e.baseUrl)),e.version===1?encodeURIComponent(s):s),br=s=>sa(s/100)*100,AT=(s,e)=>{
let t=s;
return e.version>=2&&(s instanceof Qt&&typeof s.value=="string"?t=new Qt([s]):typeof s=="string"&&(t=[s])),gu(t,e)}
,RT={
br:sa,d:sa,bl:br,dl:br,mtp:br,nor:AT,rtp:br,tb:sa}
,Wg="request",Yg="response",Mc=["ab","bg","bl","br","bs","bsd","cdn","cid","cs","df","ec","lab","lb","ltc","msd","mtp","pb","pr","pt","sf","sid","sn","st","sta","tab","tb","tbl","tpb","ts","v"],_T=["e"],wT=/^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function ro(s){
return wT.test(s)}
function kT(s){
return Mc.includes(s)||_T.includes(s)||ro(s)}
const qg=["d","dl","nor","ot","rtp","su"];
function bT(s){
return Mc.includes(s)||qg.includes(s)||ro(s)}
const CT=["cmsdd","cmsds","rc","smrt","ttfb","ttfbb","ttlb","url"];
function DT(s){
return Mc.includes(s)||qg.includes(s)||CT.includes(s)||ro(s)}
const PT=["bl","br","bs","cid","d","dl","mtp","nor","nrr","ot","pr","rtp","sf","sid","st","su","tb","v"];
function NT(s){
return PT.includes(s)||ro(s)}
const OT={
[Yg]:DT,[zg]:kT,[Wg]:bT}
;
function Qg(s,e={
}
){
const t={
}
;
if(s==null||typeof s!="object")return t;
const i=e.version||s.v||1,n=e.reportingMode||Wg,r=i===1?NT:OT[n];
let a=Object.keys(s).filter(r);
const o=e.filter;
typeof o=="function"&&(a=a.filter(o));
const u=n===Yg||n===zg;
u&&!a.includes("ts")&&a.push("ts"),i>1&&!a.includes("v")&&a.push("v");
const l=ue({
}
,RT,e.formatters),c={
version:i,reportingMode:n,baseUrl:e.baseUrl}
;
return a.sort().forEach(d=>{
let h=s[d];
const f=l[d];
if(typeof f=="function"&&(h=f(h,c)),d==="v"){
if(i===1)return;
h=i}
d=="pr"&&h===1||(u&&d==="ts"&&!j(h)&&(h=Date.now()),IT(h)&&(TT(d)&&typeof h=="string"&&(h=new jg(h)),t[d]=h))}
),t}
function MT(s,e={
}
){
const t={
}
;
if(!s)return t;
const i=Qg(s,e),n=ST(i,e==null?void 0:e.customHeaderMap);
return Object.entries(n).reduce((r,[a,o])=>{
const u=Hg(o,{
whitespace:!1}
);
return u&&(r[a]=u),r}
,t)}
function FT(s,e,t){
return ue(s,MT(e,t))}
const UT="CMCD";
function BT(s,e={
}
){
return s?Hg(Qg(s,e),{
whitespace:!1}
):""}
function $T(s,e={
}
){
if(!s)return"";
const t=BT(s,e);
return encodeURIComponent(t)}
function jT(s,e={
}
){
if(!s)return"";
const t=$T(s,e);
return`${
UT}
=${
t}
`}
const Jh=/CMCD=[^&#]+/;
function GT(s,e,t){
const i=jT(e,t);
if(!i)return s;
if(Jh.test(s))return s.replace(Jh,i);
const n=s.includes("?")?"&":"?";
return`${
s}
${
n}
${
i}
`}
class VT{
constructor(e){
this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{
this.initialized&&(this.starved=!0),this.buffering=!0}
,this.onPlaying=()=>{
this.initialized||(this.initialized=!0),this.buffering=!1}
,this.applyPlaylistData=n=>{
try{
this.apply(n,{
ot:Je.MANIFEST,su:!this.initialized}
)}
catch(r){
this.hls.logger.warn("Could not generate manifest CMCD data.",r)}
}
,this.applyFragmentData=n=>{
try{
const{
frag:r,part:a}
=n,o=this.hls.levels[r.level],u=this.getObjectType(r),l={
d:(a||r).duration*1e3,ot:u}
;
(u===Je.VIDEO||u===Je.AUDIO||u==Je.MUXED)&&(l.br=o.bitrate/1e3,l.tb=this.getTopBandwidth(u)/1e3,l.bl=this.getBufferLength(u));
const c=a?this.getNextPart(a):this.getNextFrag(r);
c!=null&&c.url&&c.url!==r.url&&(l.nor=c.url),this.apply(n,l)}
catch(r){
this.hls.logger.warn("Could not generate segment CMCD data.",r)}
}
,this.hls=e;
const t=this.config=e.config,{
cmcd:i}
=t;
i!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=i.sessionId||e.sessionId,this.cid=i.contentId,this.useHeaders=i.useHeaders===!0,this.includeKeys=i.includeKeys,this.registerListeners())}
registerListeners(){
const e=this.hls;
e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHED,this.onMediaDetached,this),e.on(x.BUFFER_CREATED,this.onBufferCreated,this)}
unregisterListeners(){
const e=this.hls;
e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHED,this.onMediaDetached,this),e.off(x.BUFFER_CREATED,this.onBufferCreated,this)}
destroy(){
this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=this.media=null}
onMediaAttached(e,t){
this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}
onMediaDetached(){
this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}
onBufferCreated(e,t){
var i,n;
this.audioBuffer=(i=t.tracks.audio)==null?void 0:i.buffer,this.videoBuffer=(n=t.tracks.video)==null?void 0:n.buffer}
createData(){
var e;
return{
v:1,sf:QS.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}
}
apply(e,t={
}
){
ue(t,this.createData());
const i=t.ot===Je.INIT||t.ot===Je.VIDEO||t.ot===Je.MUXED;
this.starved&&i&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);
const{
includeKeys:n}
=this;
n&&(t=Object.keys(t).reduce((a,o)=>(n.includes(o)&&(a[o]=t[o]),a),{
}
));
const r={
baseUrl:e.url}
;
this.useHeaders?(e.headers||(e.headers={
}
),FT(e.headers,t,r)):e.url=GT(e.url,t,r)}
getNextFrag(e){
var t;
const i=(t=this.hls.levels[e.level])==null?void 0:t.details;
if(i){
const n=e.sn-i.startSN;
return i.fragments[n+1]}
}
getNextPart(e){
var t;
const{
index:i,fragment:n}
=e,r=(t=this.hls.levels[n.level])==null||(t=t.details)==null?void 0:t.partList;
if(r){
const{
sn:a}
=n;
for(let o=r.length-1;
o>=0;
o--){
const u=r[o];
if(u.index===i&&u.fragment.sn===a)return r[o+1]}
}
}
getObjectType(e){
const{
type:t}
=e;
if(t==="subtitle")return Je.TIMED_TEXT;
if(e.sn==="initSegment")return Je.INIT;
if(t==="audio")return Je.AUDIO;
if(t==="main")return this.hls.audioTracks.length?Je.VIDEO:Je.MUXED}
getTopBandwidth(e){
let t=0,i;
const n=this.hls;
if(e===Je.AUDIO)i=n.audioTracks;
else{
const r=n.maxAutoLevel,a=r>-1?r+1:n.levels.length;
i=n.levels.slice(0,a)}
return i.forEach(r=>{
r.bitrate>t&&(t=r.bitrate)}
),t>0?t:NaN}
getBufferLength(e){
const t=this.media,i=e===Je.AUDIO?this.audioBuffer:this.videoBuffer;
return!i||!t?NaN:X.bufferInfo(i,t.currentTime,this.config.maxBufferHole).len*1e3}
createPlaylistLoader(){
const{
pLoader:e}
=this.config,t=this.applyPlaylistData,i=e||this.config.loader;
return class{
constructor(r){
this.loader=void 0,this.loader=new i(r)}
get stats(){
return this.loader.stats}
get context(){
return this.loader.context}
destroy(){
this.loader.destroy()}
abort(){
this.loader.abort()}
load(r,a,o){
t(r),this.loader.load(r,a,o)}
}
}
createFragmentLoader(){
const{
fLoader:e}
=this.config,t=this.applyFragmentData,i=e||this.config.loader;
return class{
constructor(r){
this.loader=void 0,this.loader=new i(r)}
get stats(){
return this.loader.stats}
get context(){
return this.loader.context}
destroy(){
this.loader.destroy()}
abort(){
this.loader.abort()}
load(r,a,o){
t(r),this.loader.load(r,a,o)}
}
}
}
const KT=3e5;
class HT extends _t{
constructor(e){
super("content-steering",e.logger),this.hls=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this._pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={
}
,this.hls=e,this.registerListeners()}
registerListeners(){
const e=this.hls;
e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.ERROR,this.onError,this)}
unregisterListeners(){
const e=this.hls;
e&&(e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.ERROR,this.onError,this))}
pathways(){
return(this.levels||[]).reduce((e,t)=>(e.indexOf(t.pathwayId)===-1&&e.push(t.pathwayId),e),[])}
get pathwayPriority(){
return this._pathwayPriority}
set pathwayPriority(e){
this.updatePathwayPriority(e)}
startLoad(){
if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){
if(this.updated){
const e=this.timeToLoad*1e3-(performance.now()-this.updated);
if(e>0){
this.scheduleRefresh(this.uri,e);
return}
}
this.loadSteeringManifest(this.uri)}
}
stopLoad(){
this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}
clearTimeout(){
this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}
destroy(){
this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}
removeLevel(e){
const t=this.levels;
t&&(this.levels=t.filter(i=>i!==e))}
onManifestLoading(){
this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}
onManifestLoaded(e,t){
const{
contentSteering:i}
=t;
i!==null&&(this.pathwayId=i.pathwayId,this.uri=i.uri,this.started&&this.startLoad())}
onManifestParsed(e,t){
this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}
onError(e,t){
const{
errorAction:i}
=t;
if((i==null?void 0:i.action)===Ue.SendAlternateToPenaltyBox&&i.flags===ot.MoveAllAlternatesMatchingHost){
const n=this.levels;
let r=this._pathwayPriority,a=this.pathwayId;
if(t.context){
const{
groupId:o,pathwayId:u,type:l}
=t.context;
o&&n?a=this.getPathwayForGroupId(o,l,a):u&&(a=u)}
a in this.penalizedPathways||(this.penalizedPathways[a]=performance.now()),!r&&n&&(r=this.pathways()),r&&r.length>1&&(this.updatePathwayPriority(r),i.resolved=this.pathwayId!==a),t.details===b.BUFFER_APPEND_ERROR&&!t.fatal?i.resolved=!0:i.resolved||this.warn(`Could not resolve ${
t.details}
 ("${
t.error.message}
") with content-steering for Pathway: ${
a}
 levels: ${
n&&n.length}
 priorities: ${
de(r)}
 penalized: ${
de(this.penalizedPathways)}
`)}
}
filterParsedLevels(e){
this.levels=e;
let t=this.getLevelsForPathway(this.pathwayId);
if(t.length===0){
const i=e[0].pathwayId;
this.log(`No levels found in Pathway ${
this.pathwayId}
. Setting initial Pathway to "${
i}
"`),t=this.getLevelsForPathway(i),this.pathwayId=i}
return t.length!==e.length&&this.log(`Found ${
t.length}
/${
e.length}
 levels in Pathway "${
this.pathwayId}
"`),t}
getLevelsForPathway(e){
return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}
updatePathwayPriority(e){
this._pathwayPriority=e;
let t;
const i=this.penalizedPathways,n=performance.now();
Object.keys(i).forEach(r=>{
n-i[r]>KT&&delete i[r]}
);
for(let r=0;
r<e.length;
r++){
const a=e[r];
if(a in i)continue;
if(a===this.pathwayId)return;
const o=this.hls.nextLoadLevel,u=this.hls.levels[o];
if(t=this.getLevelsForPathway(a),t.length>0){
this.log(`Setting Pathway to "${
a}
"`),this.pathwayId=a,pg(t),this.hls.trigger(x.LEVELS_UPDATED,{
levels:t}
);
const l=this.hls.levels[o];
u&&l&&this.levels&&(l.attrs["STABLE-VARIANT-ID"]!==u.attrs["STABLE-VARIANT-ID"]&&l.bitrate!==u.bitrate&&this.log(`Unstable Pathways change from bitrate ${
u.bitrate}
 to ${
l.bitrate}
`),this.hls.nextLoadLevel=o);
break}
}
}
getPathwayForGroupId(e,t,i){
const n=this.getLevelsForPathway(i).concat(this.levels||[]);
for(let r=0;
r<n.length;
r++)if(t===se.AUDIO_TRACK&&n[r].hasAudioGroup(e)||t===se.SUBTITLE_TRACK&&n[r].hasSubtitleGroup(e))return n[r].pathwayId;
return i}
clonePathways(e){
const t=this.levels;
if(!t)return;
const i={
}
,n={
}
;
e.forEach(r=>{
const{
ID:a,"BASE-ID":o,"URI-REPLACEMENT":u}
=r;
if(t.some(c=>c.pathwayId===a))return;
const l=this.getLevelsForPathway(o).map(c=>{
const d=new pe(c.attrs);
d["PATHWAY-ID"]=a;
const h=d.AUDIO&&`${
d.AUDIO}
_clone_${
a}
`,f=d.SUBTITLES&&`${
d.SUBTITLES}
_clone_${
a}
`;
h&&(i[d.AUDIO]=h,d.AUDIO=h),f&&(n[d.SUBTITLES]=f,d.SUBTITLES=f);
const m=Xg(c.uri,d["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",u),p=new Wn({
attrs:d,audioCodec:c.audioCodec,bitrate:c.bitrate,height:c.height,name:c.name,url:m,videoCodec:c.videoCodec,width:c.width}
);
if(c.audioGroups)for(let E=1;
E<c.audioGroups.length;
E++)p.addGroupId("audio",`${
c.audioGroups[E]}
_clone_${
a}
`);
if(c.subtitleGroups)for(let E=1;
E<c.subtitleGroups.length;
E++)p.addGroupId("text",`${
c.subtitleGroups[E]}
_clone_${
a}
`);
return p}
);
t.push(...l),ef(this.audioTracks,i,u,a),ef(this.subtitleTracks,n,u,a)}
)}
loadSteeringManifest(e){
const t=this.hls.config,i=t.loader;
this.loader&&this.loader.destroy(),this.loader=new i(t);
let n;
try{
n=new self.URL(e)}
catch{
this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${
e}
`);
return}
if(n.protocol!=="data:"){
const c=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;
n.searchParams.set("_HLS_pathway",this.pathwayId),n.searchParams.set("_HLS_throughput",""+c)}
const r={
responseType:"json",url:n.href}
,a=t.steeringManifestLoadPolicy.default,o=a.errorRetry||a.timeoutRetry||{
}
,u={
loadPolicy:a,timeout:a.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0}
,l={
onSuccess:(c,d,h,f)=>{
this.log(`Loaded steering manifest: "${
n}
"`);
const m=c.data;
if((m==null?void 0:m.VERSION)!==1){
this.log(`Steering VERSION ${
m.VERSION}
 not supported!`);
return}
this.updated=performance.now(),this.timeToLoad=m.TTL;
const{
"RELOAD-URI":p,"PATHWAY-CLONES":E,"PATHWAY-PRIORITY":v}
=m;
if(p)try{
this.uri=new self.URL(p,n).href}
catch{
this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${
p}
`);
return}
this.scheduleRefresh(this.uri||h.url),E&&this.clonePathways(E);
const y={
steeringManifest:m,url:n.toString()}
;
this.hls.trigger(x.STEERING_MANIFEST_LOADED,y),v&&this.updatePathwayPriority(v)}
,onError:(c,d,h,f)=>{
if(this.log(`Error loading steering manifest: ${
c.code}
 ${
c.text}
 (${
d.url}
)`),this.stopLoad(),c.code===410){
this.enabled=!1,this.log(`Steering manifest ${
d.url}
 no longer available`);
return}
let m=this.timeToLoad*1e3;
if(c.code===429){
const p=this.loader;
if(typeof(p==null?void 0:p.getResponseHeader)=="function"){
const E=p.getResponseHeader("Retry-After");
E&&(m=parseFloat(E)*1e3)}
this.log(`Steering manifest ${
d.url}
 rate limited`);
return}
this.scheduleRefresh(this.uri||d.url,m)}
,onTimeout:(c,d,h)=>{
this.log(`Timeout loading steering manifest (${
d.url}
)`),this.scheduleRefresh(this.uri||d.url)}
}
;
this.log(`Requesting steering manifest: ${
n}
`),this.loader.load(r,u,l)}
scheduleRefresh(e,t=this.timeToLoad*1e3){
this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{
var i;
const n=(i=this.hls)==null?void 0:i.media;
if(n&&!n.ended){
this.loadSteeringManifest(e);
return}
this.scheduleRefresh(e,this.timeToLoad*1e3)}
,t)}
}
function ef(s,e,t,i){
s&&Object.keys(e).forEach(n=>{
const r=s.filter(a=>a.groupId===n).map(a=>{
const o=ue({
}
,a);
return o.details=void 0,o.attrs=new pe(o.attrs),o.url=o.attrs.URI=Xg(a.url,a.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),o.groupId=o.attrs["GROUP-ID"]=e[n],o.attrs["PATHWAY-ID"]=i,o}
);
s.push(...r)}
)}
function Xg(s,e,t,i){
const{
HOST:n,PARAMS:r,[t]:a}
=i;
let o;
e&&(o=a==null?void 0:a[e],o&&(s=o));
const u=new self.URL(s);
return n&&!o&&(u.host=n),r&&Object.keys(r).sort().forEach(l=>{
l&&u.searchParams.set(l,r[l])}
),u.href}
class Ui extends _t{
constructor(e){
super("eme",e.logger),this.hls=void 0,this.config=void 0,this.media=null,this.mediaResolved=void 0,this.keyFormatPromise=null,this.keySystemAccessPromises={
}
,this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={
}
,this.mediaKeys=null,this.setMediaKeysQueue=Ui.CDMCleanupPromise?[Ui.CDMCleanupPromise]:[],this.bannedKeyIds={
}
,this.onMediaEncrypted=t=>{
const{
initDataType:i,initData:n}
=t,r=`"${
t.type}
" event: init data type: "${
i}
"`;
if(this.debug(r),n!==null){
if(!this.keyFormatPromise){
let a=Object.keys(this.keySystemAccessPromises);
a.length||(a=mn(this.config));
const o=a.map(jo).filter(u=>!!u);
this.keyFormatPromise=this.getKeyFormatPromise(o)}
this.keyFormatPromise.then(a=>{
const o=Jr(a);
if(i!=="sinf"||o!==ve.FAIRPLAY){
this.log(`Ignoring "${
t.type}
" event with init data type: "${
i}
" for selected key-system ${
o}
`);
return}
let u;
try{
const f=we(new Uint8Array(n)),m=Lc(JSON.parse(f).sinf),p=Hm(m);
if(!p)throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
u=new Uint8Array(p.subarray(8,24))}
catch(f){
this.warn(`${
r}
 Failed to parse sinf: ${
f}
`);
return}
const l=Be(u),{
keyIdToKeySessionPromise:c,mediaKeySessions:d}
=this;
let h=c[l];
for(let f=0;
f<d.length;
f++){
const m=d[f],p=m.decryptdata;
if(!p.keyId)continue;
const E=Be(p.keyId);
if(Ma(u,p.keyId)||p.uri.replace(/-/g,"").indexOf(l)!==-1){
if(h=c[E],!h)continue;
if(p.pssh)break;
delete c[E],p.pssh=new Uint8Array(n),p.keyId=u,h=c[l]=h.then(()=>this.generateRequestWithPreferredKeySession(m,i,n,"encrypted-event-key-match")),h.catch(v=>this.handleError(v));
break}
}
h||this.handleError(new Error(`Key ID ${
l}
 not encountered in playlist. Key-system sessions ${
d.length}
.`))}
).catch(a=>this.handleError(a))}
}
,this.onWaitingForKey=t=>{
this.log(`"${
t.type}
" event`)}
,this.hls=e,this.config=e.config,this.registerListeners()}
destroy(){
this.onDestroying(),this.onMediaDetached();
const e=this.config;
e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={
}
,this.hls=this.config=this.keyIdToKeySessionPromise=null,this.onMediaEncrypted=this.onWaitingForKey=null}
registerListeners(){
this.hls.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(x.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(x.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),this.hls.on(x.DESTROYING,this.onDestroying,this)}
unregisterListeners(){
this.hls.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(x.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(x.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),this.hls.off(x.DESTROYING,this.onDestroying,this)}
getLicenseServerUrl(e){
const{
drmSystems:t,widevineLicenseUrl:i}
=this.config,n=t==null?void 0:t[e];
if(n)return n.licenseUrl;
if(e===ve.WIDEVINE&&i)return i}
getLicenseServerUrlOrThrow(e){
const t=this.getLicenseServerUrl(e);
if(t===void 0)throw new Error(`no license server URL configured for key-system "${
e}
"`);
return t}
getServerCertificateUrl(e){
const{
drmSystems:t}
=this.config,i=t==null?void 0:t[e];
if(i)return i.serverCertificateUrl;
this.log(`No Server Certificate in config.drmSystems["${
e}
"]`)}
attemptKeySystemAccess(e){
const t=this.hls.levels,i=(a,o,u)=>!!a&&u.indexOf(a)===o,n=t.map(a=>a.audioCodec).filter(i),r=t.map(a=>a.videoCodec).filter(i);
return n.length+r.length===0&&r.push("avc1.42e01e"),new Promise((a,o)=>{
const u=l=>{
const c=l.shift();
this.getMediaKeysPromise(c,n,r).then(d=>a({
keySystem:c,mediaKeys:d}
)).catch(d=>{
l.length?u(l):d instanceof at?o(d):o(new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_NO_ACCESS,error:d,fatal:!0}
,d.message))}
)}
;
u(e)}
)}
requestMediaKeySystemAccess(e,t){
const{
requestMediaKeySystemAccessFunc:i}
=this.config;
if(typeof i!="function"){
let n=`Configured requestMediaKeySystemAccess is not a function ${
i}
`;
return lg===null&&self.location.protocol==="http:"&&(n=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${
location.protocol}
`),Promise.reject(new Error(n))}
return i(e,t)}
getMediaKeysPromise(e,t,i){
var n;
const r=AE(e,t,i,this.config.drmSystemOptions||{
}
);
let a=this.keySystemAccessPromises[e],o=(n=a)==null?void 0:n.keySystemAccess;
if(!o){
this.log(`Requesting encrypted media "${
e}
" key-system access with config: ${
de(r)}
`),o=this.requestMediaKeySystemAccess(e,r);
const u=a=this.keySystemAccessPromises[e]={
keySystemAccess:o}
;
return o.catch(l=>{
this.log(`Failed to obtain access to key-system "${
e}
": ${
l}
`)}
),o.then(l=>{
this.log(`Access for key-system "${
l.keySystem}
" obtained`);
const c=this.fetchServerCertificate(e);
this.log(`Create media-keys for "${
e}
"`);
const d=u.mediaKeys=l.createMediaKeys().then(h=>(this.log(`Media-keys created for "${
e}
"`),u.hasMediaKeys=!0,c.then(f=>f?this.setMediaKeysServerCertificate(h,e,f):h)));
return d.catch(h=>{
this.error(`Failed to create media-keys for "${
e}
"}
: ${
h}
`)}
),d}
)}
return o.then(()=>a.mediaKeys)}
createMediaKeySessionContext({
decryptdata:e,keySystem:t,mediaKeys:i}
){
this.log(`Creating key-system session "${
t}
" keyId: ${
Be(e.keyId||[])}
 keyUri: ${
e.uri}
`);
const n=i.createSession(),r={
decryptdata:e,keySystem:t,mediaKeys:i,mediaKeysSession:n,keyStatus:"status-pending"}
;
return this.mediaKeySessions.push(r),r}
renewKeySession(e){
const t=e.decryptdata;
if(t.pssh){
const i=this.createMediaKeySessionContext(e),n=Cr(t),r="cenc";
this.keyIdToKeySessionPromise[n]=this.generateRequestWithPreferredKeySession(i,r,t.pssh.buffer,"expired")}
else this.warn("Could not renew expired session. Missing pssh initData.");
this.removeSession(e)}
updateKeySession(e,t){
const i=e.mediaKeysSession;
return this.log(`Updating key-session "${
i.sessionId}
" for keyId ${
Be(e.decryptdata.keyId||[])}

      }
 (data length: ${
t.byteLength}
)`),i.update(t)}
getSelectedKeySystemFormats(){
return Object.keys(this.keySystemAccessPromises).map(e=>({
keySystem:e,hasMediaKeys:this.keySystemAccessPromises[e].hasMediaKeys}
)).filter(({
hasMediaKeys:e}
)=>!!e).map(({
keySystem:e}
)=>jo(e)).filter(e=>!!e)}
getKeySystemAccess(e){
return this.getKeySystemSelectionPromise(e).then(({
keySystem:t,mediaKeys:i}
)=>this.attemptSetMediaKeys(t,i))}
selectKeySystem(e){
return new Promise((t,i)=>{
this.getKeySystemSelectionPromise(e).then(({
keySystem:n}
)=>{
const r=jo(n);
r?t(r):i(new Error(`Unable to find format for key-system "${
n}
"`))}
).catch(i)}
)}
selectKeySystemFormat(e){
const t=Object.keys(e.levelkeys||{
}
);
return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${
e.sn}
 ${
e.type}
: ${
e.level}
) key formats ${
t.join(", ")}
`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}
getKeyFormatPromise(e){
const t=mn(this.config),i=e.map(Jr).filter(n=>!!n&&t.indexOf(n)!==-1);
return this.selectKeySystem(i)}
getKeyStatus(e){
const{
mediaKeySessions:t}
=this;
for(let i=0;
i<t.length;
i++){
const n=zT(e,t[i]);
if(n)return n}
}
loadKey(e){
const t=e.keyInfo.decryptdata,i=Cr(t),n=this.bannedKeyIds[i];
if(n||this.getKeyStatus(t)==="internal-error"){
const o=tf(n||"internal-error",t);
return this.handleError(o,e.frag),Promise.reject(o)}
const r=`(keyId: ${
i}
 format: "${
t.keyFormat}
" method: ${
t.method}
 uri: ${
t.uri}
)`;
this.log(`Starting session for key ${
r}
`);
const a=this.keyIdToKeySessionPromise[i];
if(!a){
const o=this.getKeySystemForKeyPromise(t).then(({
keySystem:u,mediaKeys:l}
)=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${
e.frag.sn}
 ${
e.frag.type}
: ${
e.frag.level}
 using key ${
r}
`),this.attemptSetMediaKeys(u,l).then(()=>(this.throwIfDestroyed(),this.createMediaKeySessionContext({
keySystem:u,mediaKeys:l,decryptdata:t}
))))).then(u=>{
const l="cenc",c=t.pssh?t.pssh.buffer:null;
return this.generateRequestWithPreferredKeySession(u,l,c,"playlist-key")}
);
return o.catch(u=>this.handleError(u,e.frag)),this.keyIdToKeySessionPromise[i]=o,o}
return a.catch(o=>{
if(o instanceof at){
const u=ae({
}
,o.data);
this.getKeyStatus(t)==="internal-error"&&(u.decryptdata=t);
const l=new at(u,o.message);
this.handleError(l,e.frag)}
}
),a}
throwIfDestroyed(e="Invalid state"){
if(!this.hls)throw new Error("invalid state")}
handleError(e,t){
if(this.hls)if(e instanceof at){
t&&(e.data.frag=t);
const i=e.data.decryptdata;
this.error(`${
e.message}
${
i?` (${
Be(i.keyId||[])}
)`:""}
`),this.hls.trigger(x.ERROR,e.data)}
else this.error(e.message),this.hls.trigger(x.ERROR,{
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}
)}
getKeySystemForKeyPromise(e){
const t=Cr(e),i=this.keyIdToKeySessionPromise[t];
if(!i){
const n=Jr(e.keyFormat),r=n?[n]:mn(this.config);
return this.attemptKeySystemAccess(r)}
return i}
getKeySystemSelectionPromise(e){
if(e.length||(e=mn(this.config)),e.length===0)throw new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0}
,`Missing key-system license configuration options ${
de({
drmSystems:this.config.drmSystems}
)}
`);
return this.attemptKeySystemAccess(e)}
attemptSetMediaKeys(e,t){
if(this.mediaResolved=void 0,this.mediaKeys===t)return Promise.resolve();
const i=this.setMediaKeysQueue.slice();
this.log(`Setting media-keys for "${
e}
"`);
const n=Promise.all(i).then(()=>this.media?this.media.setMediaKeys(t):new Promise((r,a)=>{
this.mediaResolved=()=>{
if(this.mediaResolved=void 0,!this.media)return a(new Error("Attempted to set mediaKeys without media element attached"));
this.mediaKeys=t,this.media.setMediaKeys(t).then(r).catch(a)}
}
));
return this.mediaKeys=t,this.setMediaKeysQueue.push(n),n.then(()=>{
this.log(`Media-keys set for "${
e}
"`),i.push(n),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(r=>i.indexOf(r)===-1)}
)}
generateRequestWithPreferredKeySession(e,t,i,n){
var r;
const a=(r=this.config.drmSystems)==null||(r=r[e.keySystem])==null?void 0:r.generateRequest;
if(a)try{
const m=a.call(this.hls,t,i,e);
if(!m)throw new Error("Invalid response from configured generateRequest filter");
t=m.initDataType,i=m.initData?m.initData:null,e.decryptdata.pssh=i?new Uint8Array(i):null}
catch(m){
if(this.warn(m.message),this.hls&&this.hls.config.debug)throw m}
if(i===null)return this.log(`Skipping key-session request for "${
n}
" (no initData)`),Promise.resolve(e);
const o=Cr(e.decryptdata),u=e.decryptdata.uri;
this.log(`Generating key-session request for "${
n}
" keyId: ${
o}
 URI: ${
u}
 (init data type: ${
t}
 length: ${
i.byteLength}
)`);
const l=new Rc,c=e._onmessage=m=>{
const p=e.mediaKeysSession;
if(!p){
l.emit("error",new Error("invalid state"));
return}
const{
messageType:E,message:v}
=m;
this.log(`"${
E}
" message event for session "${
p.sessionId}
" message size: ${
v.byteLength}
`),E==="license-request"||E==="license-renewal"?this.renewLicense(e,v).catch(y=>{
l.eventNames().length?l.emit("error",y):this.handleError(y)}
):E==="license-release"?e.keySystem===ve.FAIRPLAY&&this.updateKeySession(e,ou("acknowledged")).then(()=>this.removeSession(e)).catch(y=>this.handleError(y)):this.warn(`unhandled media key message type "${
E}
"`)}
,d=(m,p)=>{
p.keyStatus=m;
let E;
m.startsWith("usable")?l.emit("resolved"):m==="internal-error"||m==="output-restricted"||m==="output-downscaled"?E=tf(m,p.decryptdata):m==="expired"?E=new Error(`key expired (keyId: ${
o}
)`):m==="released"?E=new Error("key released"):m==="status-pending"||this.warn(`unhandled key status change "${
m}
" (keyId: ${
o}
)`),E&&(l.eventNames().length?l.emit("error",E):this.handleError(E))}
,h=e._onkeystatuseschange=m=>{
if(!e.mediaKeysSession){
l.emit("error",new Error("invalid state"));
return}
const E=this.getKeyStatuses(e);
if(!Object.keys(E).some(T=>E[T]!=="status-pending"))return;
if(E[o]==="expired"){
this.log(`Expired key ${
de(E)}
 in key-session "${
e.mediaKeysSession.sessionId}
"`),this.renewKeySession(e);
return}
let y=E[o];
if(y)d(y,e);
else{
var S;
e.keyStatusTimeouts||(e.keyStatusTimeouts={
}
),(S=e.keyStatusTimeouts)[o]||(S[o]=self.setTimeout(()=>{
if(!e.mediaKeysSession||!this.mediaKeys)return;
const I=this.getKeyStatus(e.decryptdata);
if(I&&I!=="status-pending")return this.log(`No status for keyId ${
o}
 in key-session "${
e.mediaKeysSession.sessionId}
". Using session key-status ${
I}
 from other session.`),d(I,e);
this.log(`key status for ${
o}
 in key-session "${
e.mediaKeysSession.sessionId}
" timed out after 1000ms`),y="internal-error",d(y,e)}
,1e3)),this.log(`No status for keyId ${
o}
 (${
de(E)}
).`)}
}
;
qe(e.mediaKeysSession,"message",c),qe(e.mediaKeysSession,"keystatuseschange",h);
const f=new Promise((m,p)=>{
l.on("error",p),l.on("resolved",m)}
);
return e.mediaKeysSession.generateRequest(t,i).then(()=>{
this.log(`Request generated for key-session "${
e.mediaKeysSession.sessionId}
" keyId: ${
o}
 URI: ${
u}
`)}
).catch(m=>{
throw new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_NO_SESSION,error:m,decryptdata:e.decryptdata,fatal:!1}
,`Error generating key-session request: ${
m}
`)}
).then(()=>f).catch(m=>(l.removeAllListeners(),this.removeSession(e).then(()=>{
throw m}
))).then(()=>(l.removeAllListeners(),e))}
getKeyStatuses(e){
const t={
}
;
return e.mediaKeysSession.keyStatuses.forEach((i,n)=>{
if(typeof n=="string"&&typeof i=="object"){
const o=n;
n=i,i=o}
const r="buffer"in n?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n);
if(e.keySystem===ve.PLAYREADY&&r.length===16){
const o=Be(r);
t[o]=i,ag(r)}
const a=Be(r);
i==="internal-error"&&(this.bannedKeyIds[a]=i),this.log(`key status change "${
i}
" for keyStatuses keyId: ${
a}
 key-session "${
e.mediaKeysSession.sessionId}
"`),t[a]=i}
),t}
fetchServerCertificate(e){
const t=this.config,i=t.loader,n=new i(t),r=this.getServerCertificateUrl(e);
return r?(this.log(`Fetching server certificate for "${
e}
"`),new Promise((a,o)=>{
const u={
responseType:"arraybuffer",url:r}
,l=t.certLoadPolicy.default,c={
loadPolicy:l,timeout:l.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0}
,d={
onSuccess:(h,f,m,p)=>{
a(h.data)}
,onError:(h,f,m,p)=>{
o(new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:m,response:ae({
url:u.url,data:void 0}
,h)}
,`"${
e}
" certificate request failed (${
r}
). Status: ${
h.code}
 (${
h.text}
)`))}
,onTimeout:(h,f,m)=>{
o(new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:m,response:{
url:u.url,data:void 0}
}
,`"${
e}
" certificate request timed out (${
r}
)`))}
,onAbort:(h,f,m)=>{
o(new Error("aborted"))}
}
;
n.load(u,c,d)}
)):Promise.resolve()}
setMediaKeysServerCertificate(e,t,i){
return new Promise((n,r)=>{
e.setServerCertificate(i).then(a=>{
this.log(`setServerCertificate ${
a?"success":"not supported by CDM"}
 (${
i.byteLength}
) on "${
t}
"`),n(e)}
).catch(a=>{
r(new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:a,fatal:!0}
,a.message))}
)}
)}
renewLicense(e,t){
return this.requestLicense(e,new Uint8Array(t)).then(i=>this.updateKeySession(e,new Uint8Array(i)).catch(n=>{
throw new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_SESSION_UPDATE_FAILED,decryptdata:e.decryptdata,error:n,fatal:!1}
,n.message)}
))}
unpackPlayReadyKeyMessage(e,t){
const i=String.fromCharCode.apply(null,new Uint16Array(t.buffer));
if(!i.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml;
 charset=utf-8"),t;
const n=new DOMParser().parseFromString(i,"application/xml"),r=n.querySelectorAll("HttpHeader");
if(r.length>0){
let c;
for(let d=0,h=r.length;
d<h;
d++){
var a,o;
c=r[d];
const f=(a=c.querySelector("name"))==null?void 0:a.textContent,m=(o=c.querySelector("value"))==null?void 0:o.textContent;
f&&m&&e.setRequestHeader(f,m)}
}
const u=n.querySelector("Challenge"),l=u==null?void 0:u.textContent;
if(!l)throw new Error("Cannot find <Challenge> in key message");
return ou(atob(l))}
setupLicenseXHR(e,t,i,n){
const r=this.config.licenseXhrSetup;
return r?Promise.resolve().then(()=>{
if(!i.decryptdata)throw new Error("Key removed");
return r.call(this.hls,e,t,i,n)}
).catch(a=>{
if(!i.decryptdata)throw a;
return e.open("POST",t,!0),r.call(this.hls,e,t,i,n)}
).then(a=>(e.readyState||e.open("POST",t,!0),{
xhr:e,licenseChallenge:a||n}
)):(e.open("POST",t,!0),Promise.resolve({
xhr:e,licenseChallenge:n}
))}
requestLicense(e,t){
const i=this.config.keyLoadPolicy.default;
return new Promise((n,r)=>{
const a=this.getLicenseServerUrlOrThrow(e.keySystem);
this.log(`Sending license request to URL: ${
a}
`);
const o=new XMLHttpRequest;
o.responseType="arraybuffer",o.onreadystatechange=()=>{
if(!this.hls||!e.mediaKeysSession)return r(new Error("invalid state"));
if(o.readyState===4)if(o.status===200){
this._requestLicenseFailureCount=0;
let u=o.response;
this.log(`License received ${
u instanceof ArrayBuffer?u.byteLength:u}
`);
const l=this.config.licenseResponseCallback;
if(l)try{
u=l.call(this.hls,o,a,e)}
catch(c){
this.error(c)}
n(u)}
else{
const u=i.errorRetry,l=u?u.maxNumRetry:0;
if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>l||o.status>=400&&o.status<500)r(new at({
type:Y.KEY_SYSTEM_ERROR,details:b.KEY_SYSTEM_LICENSE_REQUEST_FAILED,decryptdata:e.decryptdata,fatal:!0,networkDetails:o,response:{
url:a,data:void 0,code:o.status,text:o.statusText}
}
,`License Request XHR failed (${
a}
). Status: ${
o.status}
 (${
o.statusText}
)`));
else{
const c=l-this._requestLicenseFailureCount+1;
this.warn(`Retrying license request, ${
c}
 attempts left`),this.requestLicense(e,t).then(n,r)}
}
}
,e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=o,this.setupLicenseXHR(o,a,e,t).then(({
xhr:u,licenseChallenge:l}
)=>{
e.keySystem==ve.PLAYREADY&&(l=this.unpackPlayReadyKeyMessage(u,l)),u.send(l)}
).catch(r)}
)}
onDestroying(){
this.unregisterListeners(),this._clear()}
onMediaAttached(e,t){
if(!this.config.emeEnabled)return;
const i=t.media;
this.media=i,qe(i,"encrypted",this.onMediaEncrypted),qe(i,"waitingforkey",this.onWaitingForKey);
const n=this.mediaResolved;
n?n():this.mediaKeys=i.mediaKeys}
onMediaDetached(){
const e=this.media;
e&&(st(e,"encrypted",this.onMediaEncrypted),st(e,"waitingforkey",this.onWaitingForKey),this.media=null,this.mediaKeys=null)}
_clear(){
var e;
this._requestLicenseFailureCount=0,this.keyIdToKeySessionPromise={
}
,this.bannedKeyIds={
}
;
const t=this.mediaResolved;
if(t&&t(),!this.mediaKeys&&!this.mediaKeySessions.length)return;
const i=this.media,n=this.mediaKeySessions.slice();
this.mediaKeySessions=[],this.mediaKeys=null,Ds.clearKeyUriToKeyIdMap();
const r=n.length;
Ui.CDMCleanupPromise=Promise.all(n.map(a=>this.removeSession(a)).concat((i==null||(e=i.setMediaKeys(null))==null?void 0:e.catch(a=>{
this.log(`Could not clear media keys: ${
a}
`),this.hls&&this.hls.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,fatal:!1,error:new Error(`Could not clear media keys: ${
a}
`)}
)}
))||Promise.resolve())).catch(a=>{
this.log(`Could not close sessions and clear media keys: ${
a}
`),this.hls&&this.hls.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,fatal:!1,error:new Error(`Could not close sessions and clear media keys: ${
a}
`)}
)}
).then(()=>{
r&&this.log("finished closing key sessions and clearing media keys")}
)}
onManifestLoading(){
this._clear()}
onManifestLoaded(e,{
sessionKeys:t}
){
if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){
const i=t.reduce((n,r)=>(n.indexOf(r.keyFormat)===-1&&n.push(r.keyFormat),n),[]);
this.log(`Selecting key-system from session-keys ${
i.join(", ")}
`),this.keyFormatPromise=this.getKeyFormatPromise(i)}
}
removeSession(e){
const{
mediaKeysSession:t,licenseXhr:i,decryptdata:n}
=e;
if(t){
this.log(`Remove licenses and keys and close session "${
t.sessionId}
" keyId: ${
Be((n==null?void 0:n.keyId)||[])}
`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),i&&i.readyState!==XMLHttpRequest.DONE&&i.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;
const r=this.mediaKeySessions.indexOf(e);
r>-1&&this.mediaKeySessions.splice(r,1);
const{
keyStatusTimeouts:a}
=e;
a&&Object.keys(a).forEach(l=>self.clearTimeout(a[l]));
const{
drmSystemOptions:o}
=this.config;
return(_E(o)?new Promise((l,c)=>{
self.setTimeout(()=>c(new Error("MediaKeySession.remove() timeout")),8e3),t.remove().then(l).catch(c)}
):Promise.resolve()).catch(l=>{
this.log(`Could not remove session: ${
l}
`),this.hls&&this.hls.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,fatal:!1,error:new Error(`Could not remove session: ${
l}
`)}
)}
).then(()=>t.close()).catch(l=>{
this.log(`Could not close session: ${
l}
`),this.hls&&this.hls.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,fatal:!1,error:new Error(`Could not close session: ${
l}
`)}
)}
)}
return Promise.resolve()}
}
Ui.CDMCleanupPromise=void 0;
function Cr(s){
if(!s)throw new Error("Could not read keyId of undefined decryptdata");
if(s.keyId===null)throw new Error("keyId is null");
return Be(s.keyId)}
function zT(s,e){
if(s.keyId&&e.mediaKeysSession.keyStatuses.has(s.keyId))return e.mediaKeysSession.keyStatuses.get(s.keyId);
if(s.matches(e.decryptdata))return e.keyStatus}
class at extends Error{
constructor(e,t){
super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}
}
function tf(s,e){
const t=s==="output-restricted",i=t?b.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:b.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
return new at({
type:Y.KEY_SYSTEM_ERROR,details:i,fatal:!1,decryptdata:e}
,t?"HDCP level output restricted":`key status changed to "${
s}
"`)}
class WT{
constructor(e){
this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}
setStreamController(e){
this.streamController=e}
registerListeners(){
this.hls.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),this.hls.on(x.MEDIA_DETACHING,this.onMediaDetaching,this)}
unregisterListeners(){
this.hls.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),this.hls.off(x.MEDIA_DETACHING,this.onMediaDetaching,this)}
destroy(){
this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}
onMediaAttaching(e,t){
const i=this.hls.config;
if(i.capLevelOnFPSDrop){
const n=t.media instanceof self.HTMLVideoElement?t.media:null;
this.media=n,n&&typeof n.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),i.fpsDroppedMonitoringPeriod)}
}
onMediaDetaching(){
this.media=null}
checkFPS(e,t,i){
const n=performance.now();
if(t){
if(this.lastTime){
const r=n-this.lastTime,a=i-this.lastDroppedFrames,o=t-this.lastDecodedFrames,u=1e3*a/r,l=this.hls;
if(l.trigger(x.FPS_DROP,{
currentDropped:a,currentDecoded:o,totalDroppedFrames:i}
),u>0&&a>l.config.fpsDroppedMonitoringThreshold*o){
let c=l.currentLevel;
l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(l.autoLevelCapping===-1||l.autoLevelCapping>=c)&&(c=c-1,l.trigger(x.FPS_DROP_LEVEL_CAPPING,{
level:c,droppedLevel:l.currentLevel}
),l.autoLevelCapping=c,this.streamController.nextLevelSwitch())}
}
this.lastTime=n,this.lastDroppedFrames=i,this.lastDecodedFrames=t}
}
checkFPSInterval(){
const e=this.media;
if(e)if(this.isVideoPlaybackQualityAvailable){
const t=e.getVideoPlaybackQuality();
this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}
else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}
}
function Zg(s,e){
let t;
try{
t=new Event("addtrack")}
catch{
t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}
t.track=s,e.dispatchEvent(t)}
function Jg(s,e){
const t=s.mode;
if(t==="disabled"&&(s.mode="hidden"),s.cues&&!s.cues.getCueById(e.id))try{
if(s.addCue(e),!s.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${
e}
`)}
catch(i){
oe.debug(`[texttrack-utils]: ${
i}
`);
try{
const n=new self.TextTrackCue(e.startTime,e.endTime,e.text);
n.id=e.id,s.addCue(n)}
catch(n){
oe.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${
n}
`)}
}
t==="disabled"&&(s.mode=t)}
function ki(s,e){
const t=s.mode;
if(t==="disabled"&&(s.mode="hidden"),s.cues)for(let i=s.cues.length;
i--;
)e&&s.cues[i].removeEventListener("enter",e),s.removeCue(s.cues[i]);
t==="disabled"&&(s.mode=t)}
function pu(s,e,t,i){
const n=s.mode;
if(n==="disabled"&&(s.mode="hidden"),s.cues&&s.cues.length>0){
const r=qT(s.cues,e,t);
for(let a=0;
a<r.length;
a++)(!i||i(r[a]))&&s.removeCue(r[a])}
n==="disabled"&&(s.mode=n)}
function YT(s,e){
if(e<=s[0].startTime)return 0;
const t=s.length-1;
if(e>s[t].endTime)return-1;
let i=0,n=t,r;
for(;
i<=n;
)if(r=Math.floor((n+i)/2),e<s[r].startTime)n=r-1;
else if(e>s[r].startTime&&i<t)i=r+1;
else return r;
return s[i].startTime-e<e-s[n].startTime?i:n}
function qT(s,e,t){
const i=[],n=YT(s,e);
if(n>-1)for(let r=n,a=s.length;
r<a;
r++){
const o=s[r];
if(o.startTime>=e&&o.endTime<=t)i.push(o);
else if(o.startTime>t)return i}
return i}
function ia(s){
const e=[];
for(let t=0;
t<s.length;
t++){
const i=s[t];
(i.kind==="subtitles"||i.kind==="captions")&&i.label&&e.push(s[t])}
return e}
class QT extends Pc{
constructor(e){
super(e,"subtitle-track-controller"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.onTextTracksChanged=()=>{
if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;
let t=null;
const i=ia(this.media.textTracks);
for(let r=0;
r<i.length;
r++)if(i[r].mode==="hidden")t=i[r];
else if(i[r].mode==="showing"){
t=i[r];
break}
const n=this.findTrackForTextTrack(t);
this.subtitleTrack!==n&&this.setSubtitleTrack(n)}
,this.registerListeners()}
destroy(){
this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}
get subtitleDisplay(){
return this._subtitleDisplay}
set subtitleDisplay(e){
this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}
registerListeners(){
const{
hls:e}
=this;
e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(x.ERROR,this.onError,this)}
unregisterListeners(){
const{
hls:e}
=this;
e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVEL_LOADING,this.onLevelLoading,this),e.off(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(x.ERROR,this.onError,this)}
onMediaAttached(e,t){
this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}
pollTrackChange(e){
self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}
onMediaDetaching(e,t){
const i=this.media;
if(!i)return;
const n=!!t.transferMedia;
if(self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||i.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),this.subtitleTrack=-1,this.media=null,n)return;
ia(i.textTracks).forEach(a=>{
ki(a)}
)}
onManifestLoading(){
this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}
onManifestParsed(e,t){
this.tracks=t.subtitleTracks}
onSubtitleTrackLoaded(e,t){
const{
id:i,groupId:n,details:r}
=t,a=this.tracksInGroup[i];
if(!a||a.groupId!==n){
this.warn(`Subtitle track with id:${
i}
 and group:${
n}
 not found in active group ${
a==null?void 0:a.groupId}
`);
return}
const o=a.details;
a.details=t.details,this.log(`Subtitle track ${
i}
 "${
a.name}
" lang:${
a.lang}
 group:${
n}
 loaded [${
r.startSN}
-${
r.endSN}
]`),i===this.trackId&&this.playlistLoaded(i,t,o)}
onLevelLoading(e,t){
this.switchLevel(t.level)}
onLevelSwitching(e,t){
this.switchLevel(t.level)}
switchLevel(e){
const t=this.hls.levels[e];
if(!t)return;
const i=t.subtitleGroups||null,n=this.groupIds;
let r=this.currentTrack;
if(!i||(n==null?void 0:n.length)!==(i==null?void 0:i.length)||i!=null&&i.some(a=>(n==null?void 0:n.indexOf(a))===-1)){
this.groupIds=i,this.trackId=-1,this.currentTrack=null;
const a=this.tracks.filter(c=>!i||i.indexOf(c.groupId)!==-1);
if(a.length)this.selectDefaultTrack&&!a.some(c=>c.default)&&(this.selectDefaultTrack=!1),a.forEach((c,d)=>{
c.id=d}
);
else if(!r&&!this.tracksInGroup.length)return;
this.tracksInGroup=a;
const o=this.hls.config.subtitlePreference;
if(!r&&o){
this.selectDefaultTrack=!1;
const c=zt(o,a);
if(c>-1)r=a[c];
else{
const d=zt(o,this.tracks);
r=this.tracks[d]}
}
let u=this.findTrackId(r);
u===-1&&r&&(u=this.findTrackId(null));
const l={
subtitleTracks:a}
;
this.log(`Updating subtitle tracks, ${
a.length}
 track(s) found in "${
i==null?void 0:i.join(",")}
" group-id`),this.hls.trigger(x.SUBTITLE_TRACKS_UPDATED,l),u!==-1&&this.trackId===-1&&this.setSubtitleTrack(u)}
}
findTrackId(e){
const t=this.tracksInGroup,i=this.selectDefaultTrack;
for(let n=0;
n<t.length;
n++){
const r=t[n];
if(!(i&&!r.default||!i&&!e)&&(!e||ei(r,e)))return n}
if(e){
for(let n=0;
n<t.length;
n++){
const r=t[n];
if(Xn(e.attrs,r.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return n}
for(let n=0;
n<t.length;
n++){
const r=t[n];
if(Xn(e.attrs,r.attrs,["LANGUAGE"]))return n}
}
return-1}
findTrackForTextTrack(e){
if(e){
const t=this.tracksInGroup;
for(let i=0;
i<t.length;
i++){
const n=t[i];
if(hu(n,e))return i}
}
return-1}
onError(e,t){
t.fatal||!t.context||t.context.type===se.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}
get allSubtitleTracks(){
return this.tracks}
get subtitleTracks(){
return this.tracksInGroup}
get subtitleTrack(){
return this.trackId}
set subtitleTrack(e){
this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}
setSubtitleOption(e){
if(this.hls.config.subtitlePreference=e,e){
if(e.id===-1)return this.setSubtitleTrack(-1),null;
const t=this.allSubtitleTracks;
if(this.selectDefaultTrack=!1,t.length){
const i=this.currentTrack;
if(i&&ei(e,i))return i;
const n=zt(e,this.tracksInGroup);
if(n>-1){
const r=this.tracksInGroup[n];
return this.setSubtitleTrack(n),r}
else{
if(i)return null;
{
const r=zt(e,t);
if(r>-1)return t[r]}
}
}
}
return null}
loadPlaylist(e){
super.loadPlaylist(),this.shouldLoadPlaylist(this.currentTrack)&&this.scheduleLoading(this.currentTrack,e)}
loadingPlaylist(e,t){
super.loadingPlaylist(e,t);
const i=e.id,n=e.groupId,r=this.getUrlWithDirectives(e.url,t),a=e.details,o=a==null?void 0:a.age;
this.log(`Loading subtitle ${
i}
 "${
e.name}
" lang:${
e.lang}
 group:${
n}
${
(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}
${
o&&a.live?" age "+o.toFixed(1)+(a.type&&" "+a.type||""):""}
 ${
r}
`),this.hls.trigger(x.SUBTITLE_TRACK_LOADING,{
url:r,id:i,groupId:n,deliveryDirectives:t||null,track:e}
)}
toggleTrackModes(){
const{
media:e}
=this;
if(!e)return;
const t=ia(e.textTracks),i=this.currentTrack;
let n;
if(i&&(n=t.filter(r=>hu(i,r))[0],n||this.warn(`Unable to find subtitle TextTrack with name "${
i.name}
" and language "${
i.lang}
"`)),[].slice.call(t).forEach(r=>{
r.mode!=="disabled"&&r!==n&&(r.mode="disabled")}
),n){
const r=this.subtitleDisplay?"showing":"hidden";
n.mode!==r&&(n.mode=r)}
}
setSubtitleTrack(e){
const t=this.tracksInGroup;
if(!this.media){
this.queuedDefaultTrack=e;
return}
if(e<-1||e>=t.length||!j(e)){
this.warn(`Invalid subtitle track id: ${
e}
`);
return}
this.selectDefaultTrack=!1;
const i=this.currentTrack,n=t[e]||null;
if(this.trackId=e,this.currentTrack=n,this.toggleTrackModes(),!n){
this.hls.trigger(x.SUBTITLE_TRACK_SWITCH,{
id:e}
);
return}
const r=!!n.details&&!n.details.live;
if(e===this.trackId&&n===i&&r)return;
this.log(`Switching to subtitle-track ${
e}
`+(n?` "${
n.name}
" lang:${
n.lang}
 group:${
n.groupId}
`:""));
const{
id:a,groupId:o="",name:u,type:l,url:c}
=n;
this.hls.trigger(x.SUBTITLE_TRACK_SWITCH,{
id:a,groupId:o,name:u,type:l,url:c}
);
const d=this.switchParams(n.url,i==null?void 0:i.details,n.details);
this.loadPlaylist(d)}
}
function XT(){
try{
return crypto.randomUUID()}
catch{
try{
const e=URL.createObjectURL(new Blob),t=e.toString();
return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}
catch{
let t=new Date().getTime();
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{
const r=(t+Math.random()*16)%16|0;
return t=Math.floor(t/16),(n=="x"?r:r&3|8).toString(16)}
)}
}
}
function _n(s){
let e=5381,t=s.length;
for(;
t;
)e=e*33^s.charCodeAt(--t);
return(e>>>0).toString()}
const Bi=.025;
let $a=function(s){
return s[s.Point=0]="Point",s[s.Range=1]="Range",s}
({
}
);
function ZT(s,e,t){
return`${
s.identifier}
-${
t+1}
-${
_n(e)}
`}
class JT{
constructor(e,t){
this.base=void 0,this._duration=null,this._timelineStart=null,this.appendInPlaceDisabled=void 0,this.appendInPlaceStarted=void 0,this.dateRange=void 0,this.hasPlayed=!1,this.cumulativeDuration=0,this.resumeOffset=NaN,this.playoutLimit=NaN,this.restrictions={
skip:!1,jump:!1}
,this.snapOptions={
out:!1,in:!1}
,this.assetList=[],this.assetListLoader=void 0,this.assetListResponse=null,this.resumeAnchor=void 0,this.error=void 0,this.resetOnResume=void 0,this.base=t,this.dateRange=e,this.setDateRange(e)}
setDateRange(e){
this.dateRange=e,this.resumeOffset=e.attr.optionalFloat("X-RESUME-OFFSET",this.resumeOffset),this.playoutLimit=e.attr.optionalFloat("X-PLAYOUT-LIMIT",this.playoutLimit),this.restrictions=e.attr.enumeratedStringList("X-RESTRICT",this.restrictions),this.snapOptions=e.attr.enumeratedStringList("X-SNAP",this.snapOptions)}
reset(){
var e;
this.appendInPlaceStarted=!1,(e=this.assetListLoader)==null||e.destroy(),this.assetListLoader=void 0,this.supplementsPrimary||(this.assetListResponse=null,this.assetList=[],this._duration=null)}
isAssetPastPlayoutLimit(e){
var t;
if(e>0&&e>=this.assetList.length)return!0;
const i=this.playoutLimit;
return e<=0||isNaN(i)?!1:i===0?!0:(((t=this.assetList[e])==null?void 0:t.startOffset)||0)>i}
findAssetIndex(e){
return this.assetList.indexOf(e)}
get identifier(){
return this.dateRange.id}
get startDate(){
return this.dateRange.startDate}
get startTime(){
const e=this.dateRange.startTime;
if(this.snapOptions.out){
const t=this.dateRange.tagAnchor;
if(t)return Qo(e,t)}
return e}
get startOffset(){
return this.cue.pre?0:this.startTime}
get startIsAligned(){
if(this.startTime===0||this.snapOptions.out)return!0;
const e=this.dateRange.tagAnchor;
if(e){
const t=this.dateRange.startTime,i=Qo(t,e);
return t-i<.1}
return!1}
get resumptionOffset(){
const e=this.resumeOffset,t=j(e)?e:this.duration;
return this.cumulativeDuration+t}
get resumeTime(){
const e=this.startOffset+this.resumptionOffset;
if(this.snapOptions.in){
const t=this.resumeAnchor;
if(t)return Qo(e,t)}
return e}
get appendInPlace(){
return this.appendInPlaceStarted?!0:this.appendInPlaceDisabled?!1:!!(!this.cue.once&&!this.cue.pre&&this.startIsAligned&&(isNaN(this.playoutLimit)&&isNaN(this.resumeOffset)||this.resumeOffset&&this.duration&&Math.abs(this.resumeOffset-this.duration)<Bi))}
set appendInPlace(e){
if(this.appendInPlaceStarted){
this.resetOnResume=!e;
return}
this.appendInPlaceDisabled=!e}
get timelineStart(){
return this._timelineStart!==null?this._timelineStart:this.startTime}
set timelineStart(e){
this._timelineStart=e}
get duration(){
const e=this.playoutLimit;
let t;
return this._duration!==null?t=this._duration:this.dateRange.duration?t=this.dateRange.duration:t=this.dateRange.plannedDuration||0,!isNaN(e)&&e<t&&(t=e),t}
set duration(e){
this._duration=e}
get cue(){
return this.dateRange.cue}
get timelineOccupancy(){
return this.dateRange.attr["X-TIMELINE-OCCUPIES"]==="RANGE"?$a.Range:$a.Point}
get supplementsPrimary(){
return this.dateRange.attr["X-TIMELINE-STYLE"]==="PRIMARY"}
get contentMayVary(){
return this.dateRange.attr["X-CONTENT-MAY-VARY"]!=="NO"}
get assetUrl(){
return this.dateRange.attr["X-ASSET-URI"]}
get assetListUrl(){
return this.dateRange.attr["X-ASSET-LIST"]}
get baseUrl(){
return this.base.url}
get assetListLoaded(){
return this.assetList.length>0||this.assetListResponse!==null}
toString(){
return e1(this)}
}
function Qo(s,e){
return s-e.start<e.duration/2&&!(Math.abs(s-(e.start+e.duration))<Bi)?e.start:e.start+e.duration}
function ep(s,e,t){
const i=new self.URL(s,t);
return i.protocol!=="data:"&&i.searchParams.set("_HLS_primary_id",e),i}
function Xo(s,e){
for(;
(t=s.assetList[++e])!=null&&t.error;
)var t;
return e}
function e1(s){
return`["${
s.identifier}
" ${
s.cue.pre?"<pre>":s.cue.post?"<post>":""}
${
s.timelineStart.toFixed(2)}
-${
s.resumeTime.toFixed(2)}
]`}
function pi(s){
const e=s.timelineStart,t=s.duration||0;
return`["${
s.identifier}
" ${
e.toFixed(2)}
-${
(e+t).toFixed(2)}
]`}
class t1{
constructor(e,t,i,n){
this.hls=void 0,this.interstitial=void 0,this.assetItem=void 0,this.tracks=null,this.hasDetails=!1,this.mediaAttached=null,this._currentTime=void 0,this._bufferedEosTime=void 0,this.checkPlayout=()=>{
this.reachedPlayout(this.currentTime)&&this.hls&&this.hls.trigger(x.PLAYOUT_LIMIT_REACHED,{
}
)}
;
const r=this.hls=new e(t);
this.interstitial=i,this.assetItem=n;
const a=()=>{
this.hasDetails=!0}
;
r.once(x.LEVEL_LOADED,a),r.once(x.AUDIO_TRACK_LOADED,a),r.once(x.SUBTITLE_TRACK_LOADED,a),r.on(x.MEDIA_ATTACHING,(o,{
media:u}
)=>{
this.removeMediaListeners(),this.mediaAttached=u,this.interstitial.playoutLimit&&(u.addEventListener("timeupdate",this.checkPlayout),this.appendInPlace&&r.on(x.BUFFER_APPENDED,()=>{
const c=this.bufferedEnd;
this.reachedPlayout(c)&&(this._bufferedEosTime=c,r.trigger(x.BUFFERED_TO_END,void 0))}
))}
)}
get appendInPlace(){
return this.interstitial.appendInPlace}
loadSource(){
const e=this.hls;
if(e)if(e.url)e.levels.length&&!e.started&&e.startLoad(-1,!0);
else{
let t=this.assetItem.uri;
try{
t=ep(t,e.config.primarySessionId||"").href}
catch{
}
e.loadSource(t)}
}
bufferedInPlaceToEnd(e){
var t;
if(!this.appendInPlace)return!1;
if((t=this.hls)!=null&&t.bufferedToEnd)return!0;
if(!e)return!1;
const i=Math.min(this._bufferedEosTime||1/0,this.duration),n=this.timelineOffset,r=X.bufferInfo(e,n,0);
return this.getAssetTime(r.end)>=i-.02}
reachedPlayout(e){
const i=this.interstitial.playoutLimit;
return this.startOffset+e>=i}
get destroyed(){
var e;
return!((e=this.hls)!=null&&e.userConfig)}
get assetId(){
return this.assetItem.identifier}
get interstitialId(){
return this.assetItem.parentIdentifier}
get media(){
var e;
return((e=this.hls)==null?void 0:e.media)||null}
get bufferedEnd(){
const e=this.media||this.mediaAttached;
if(!e)return this._bufferedEosTime?this._bufferedEosTime:this.currentTime;
const t=X.bufferInfo(e,e.currentTime,.001);
return this.getAssetTime(t.end)}
get currentTime(){
const e=this.media||this.mediaAttached;
return e?this.getAssetTime(e.currentTime):this._currentTime||0}
get duration(){
const e=this.assetItem.duration;
if(!e)return 0;
const t=this.interstitial.playoutLimit;
if(t){
const i=t-this.startOffset;
if(i>0&&i<e)return i}
return e}
get remaining(){
const e=this.duration;
return e?Math.max(0,e-this.currentTime):0}
get startOffset(){
return this.assetItem.startOffset}
get timelineOffset(){
var e;
return((e=this.hls)==null?void 0:e.config.timelineOffset)||0}
set timelineOffset(e){
const t=this.timelineOffset;
if(e!==t){
const i=e-t;
if(Math.abs(i)>1/9e4&&this.hls){
if(this.hasDetails)throw new Error("Cannot set timelineOffset after playlists are loaded");
this.hls.config.timelineOffset=e}
}
}
getAssetTime(e){
const t=this.timelineOffset,i=this.duration;
return Math.min(Math.max(0,e-t),i)}
removeMediaListeners(){
const e=this.mediaAttached;
e&&(this._currentTime=e.currentTime,this.bufferSnapShot(),e.removeEventListener("timeupdate",this.checkPlayout))}
bufferSnapShot(){
if(this.mediaAttached){
var e;
(e=this.hls)!=null&&e.bufferedToEnd&&(this._bufferedEosTime=this.bufferedEnd)}
}
destroy(){
this.removeMediaListeners(),this.hls&&this.hls.destroy(),this.hls=null,this.tracks=this.mediaAttached=this.checkPlayout=null}
attachMedia(e){
var t;
this.loadSource(),(t=this.hls)==null||t.attachMedia(e)}
detachMedia(){
var e;
this.removeMediaListeners(),this.mediaAttached=null,(e=this.hls)==null||e.detachMedia()}
resumeBuffering(){
var e;
(e=this.hls)==null||e.resumeBuffering()}
pauseBuffering(){
var e;
(e=this.hls)==null||e.pauseBuffering()}
transferMedia(){
var e;
return this.bufferSnapShot(),((e=this.hls)==null?void 0:e.transferMedia())||null}
resetDetails(){
const e=this.hls;
if(e&&this.hasDetails){
e.stopLoad();
const t=i=>delete i.details;
e.levels.forEach(t),e.allAudioTracks.forEach(t),e.allSubtitleTracks.forEach(t),this.hasDetails=!1}
}
on(e,t,i){
var n;
(n=this.hls)==null||n.on(e,t)}
once(e,t,i){
var n;
(n=this.hls)==null||n.once(e,t)}
off(e,t,i){
var n;
(n=this.hls)==null||n.off(e,t)}
toString(){
var e;
return`HlsAssetPlayer: ${
pi(this.assetItem)}
 ${
(e=this.hls)==null?void 0:e.sessionId}
 ${
this.appendInPlace?"append-in-place":""}
`}
}
const sf=.033;
class s1 extends _t{
constructor(e,t){
super("interstitials-sched",t),this.onScheduleUpdate=void 0,this.eventMap={
}
,this.events=null,this.items=null,this.durations={
primary:0,playout:0,integrated:0}
,this.onScheduleUpdate=e}
destroy(){
this.reset(),this.onScheduleUpdate=null}
reset(){
this.eventMap={
}
,this.setDurations(0,0,0),this.events&&this.events.forEach(e=>e.reset()),this.events=this.items=null}
resetErrorsInRange(e,t){
return this.events?this.events.reduce((i,n)=>e<=n.startOffset&&t>n.startOffset?(delete n.error,i+1):i,0):0}
get duration(){
const e=this.items;
return e?e[e.length-1].end:0}
get length(){
return this.items?this.items.length:0}
getEvent(e){
return e&&this.eventMap[e]||null}
hasEvent(e){
return e in this.eventMap}
findItemIndex(e,t){
if(e.event)return this.findEventIndex(e.event.identifier);
let i=-1;
e.nextEvent?i=this.findEventIndex(e.nextEvent.identifier)-1:e.previousEvent&&(i=this.findEventIndex(e.previousEvent.identifier)+1);
const n=this.items;
if(n)for(n[i]||(t===void 0&&(t=e.start),i=this.findItemIndexAtTime(t));
i>=0&&(r=n[i])!=null&&r.event;
){
var r;
i--}
return i}
findItemIndexAtTime(e,t){
const i=this.items;
if(i)for(let n=0;
n<i.length;
n++){
let r=i[n];
if(t&&t!=="primary"&&(r=r[t]),e===r.start||e>r.start&&e<r.end)return n}
return-1}
findJumpRestrictedIndex(e,t){
const i=this.items;
if(i)for(let n=e;
n<=t&&i[n];
n++){
const r=i[n].event;
if(r!=null&&r.restrictions.jump&&!r.appendInPlace)return n}
return-1}
findEventIndex(e){
const t=this.items;
if(t)for(let n=t.length;
n--;
){
var i;
if(((i=t[n].event)==null?void 0:i.identifier)===e)return n}
return-1}
findAssetIndex(e,t){
const i=e.assetList,n=i.length;
if(n>1)for(let r=0;
r<n;
r++){
const a=i[r];
if(!a.error){
const o=a.timelineStart;
if(t===o||t>o&&(t<o+(a.duration||0)||r===n-1))return r}
}
return 0}
get assetIdAtEnd(){
var e;
const t=(e=this.items)==null||(e=e[this.length-1])==null?void 0:e.event;
if(t){
const i=t.assetList,n=i[i.length-1];
if(n)return n.identifier}
return null}
parseInterstitialDateRanges(e,t){
const i=e.main.details,{
dateRanges:n}
=i,r=this.events,a=this.parseDateRanges(n,{
url:i.url}
,t),o=Object.keys(n),u=r?r.filter(l=>!o.includes(l.identifier)):[];
a.length&&a.sort((l,c)=>{
const d=l.cue.pre,h=l.cue.post,f=c.cue.pre,m=c.cue.post;
if(d&&!f)return-1;
if(f&&!d||h&&!m)return 1;
if(m&&!h)return-1;
if(!d&&!f&&!h&&!m){
const p=l.startTime,E=c.startTime;
if(p!==E)return p-E}
return l.dateRange.tagOrder-c.dateRange.tagOrder}
),this.events=a,u.forEach(l=>{
this.removeEvent(l)}
),this.updateSchedule(e,u)}
updateSchedule(e,t=[],i=!1){
const n=this.events||[];
if(n.length||t.length||this.length<2){
const r=this.items,a=this.parseSchedule(n,e);
(i||t.length||(r==null?void 0:r.length)!==a.length||a.some((u,l)=>Math.abs(u.playout.start-r[l].playout.start)>.005||Math.abs(u.playout.end-r[l].playout.end)>.005))&&(this.items=a,this.onScheduleUpdate(t,r))}
}
parseDateRanges(e,t,i){
const n=[],r=Object.keys(e);
for(let a=0;
a<r.length;
a++){
const o=r[a],u=e[o];
if(u.isInterstitial){
let l=this.eventMap[o];
l?l.setDateRange(u):(l=new JT(u,t),this.eventMap[o]=l,i===!1&&(l.appendInPlace=i)),n.push(l)}
}
return n}
parseSchedule(e,t){
const i=[],n=t.main.details,r=n.live?1/0:n.edge;
let a=0;
if(e=e.filter(u=>!u.error&&!(u.cue.once&&u.hasPlayed)),e.length){
this.resolveOffsets(e,t);
let u=0,l=0;
if(e.forEach((c,d)=>{
const h=c.cue.pre,f=c.cue.post,m=e[d-1]||null,p=c.appendInPlace,E=f?r:c.startOffset,v=c.duration,y=c.timelineOccupancy===$a.Range?v:0,S=c.resumptionOffset,T=(m==null?void 0:m.startTime)===E,I=E+c.cumulativeDuration;
let _=p?I+v:E+S;
if(h||!f&&E<=0){
const R=l;
l+=y,c.timelineStart=I;
const w=a;
a+=v,i.push({
event:c,start:I,end:_,playout:{
start:w,end:a}
,integrated:{
start:R,end:l}
}
)}
else if(E<=r){
if(!T){
const A=E-u;
if(A>sf){
const D=u,$=l;
l+=A;
const G=a;
a+=A;
const W={
previousEvent:e[d-1]||null,nextEvent:c,start:D,end:D+A,playout:{
start:G,end:a}
,integrated:{
start:$,end:l}
}
;
i.push(W)}
else A>0&&m&&(m.cumulativeDuration+=A,i[i.length-1].end=E)}
f&&(_=I),c.timelineStart=I;
const R=l;
l+=y;
const w=a;
a+=v,i.push({
event:c,start:I,end:_,playout:{
start:w,end:a}
,integrated:{
start:R,end:l}
}
)}
else return;
const L=c.resumeTime;
f||L>r?u=r:u=L}
),u<r){
var o;
const c=u,d=l,h=r-u;
l+=h;
const f=a;
a+=h,i.push({
previousEvent:((o=i[i.length-1])==null?void 0:o.event)||null,nextEvent:null,start:u,end:c+h,playout:{
start:f,end:a}
,integrated:{
start:d,end:l}
}
)}
this.setDurations(r,a,l)}
else i.push({
previousEvent:null,nextEvent:null,start:0,end:r,playout:{
start:0,end:r}
,integrated:{
start:0,end:r}
}
),this.setDurations(r,r,r);
return i}
setDurations(e,t,i){
this.durations={
primary:e,playout:t,integrated:i}
}
resolveOffsets(e,t){
const i=t.main.details,n=i.live?1/0:i.edge;
let r=0,a=-1;
e.forEach((o,u)=>{
const l=o.cue.pre,c=o.cue.post,d=l?0:c?n:o.startTime;
this.updateAssetDurations(o),a===d?o.cumulativeDuration=r:(r=0,a=d),!c&&o.snapOptions.in&&(o.resumeAnchor=ai(null,i.fragments,o.startOffset+o.resumptionOffset,0,0)||void 0),o.appendInPlace&&!o.appendInPlaceStarted&&(this.primaryCanResumeInPlaceAt(o,t)||(o.appendInPlace=!1)),!o.appendInPlace&&u+1<e.length&&e[u+1].startTime-e[u].resumeTime<sf&&(e[u+1].appendInPlace=!1,e[u+1].appendInPlace&&this.warn(`Could not change append strategy for abutting event ${
o}
`));
const f=j(o.resumeOffset)?o.resumeOffset:o.duration;
r+=f}
)}
primaryCanResumeInPlaceAt(e,t){
const i=e.resumeTime,n=e.startTime+e.resumptionOffset;
return Math.abs(i-n)>Bi?(this.log(`"${
e.identifier}
" resumption ${
i}
 not aligned with estimated timeline end ${
n}
`),!1):!Object.keys(t).some(a=>{
const o=t[a].details,u=o.edge;
if(i>=u)return this.log(`"${
e.identifier}
" resumption ${
i}
 past ${
a}
 playlist end ${
u}
`),!1;
const l=ai(null,o.fragments,i);
if(!l)return this.log(`"${
e.identifier}
" resumption ${
i}
 does not align with any fragments in ${
a}
 playlist (${
o.fragStart}
-${
o.fragmentEnd}
)`),!0;
const c=a==="audio"?.175:0;
return Math.abs(l.start-i)<Bi+c||Math.abs(l.end-i)<Bi+c?!1:(this.log(`"${
e.identifier}
" resumption ${
i}
 not aligned with ${
a}
 fragment bounds (${
l.start}
-${
l.end}
 sn: ${
l.sn}
 cc: ${
l.cc}
)`),!0)}
)}
updateAssetDurations(e){
if(!e.assetListLoaded)return;
const t=e.timelineStart;
let i=0,n=!1,r=!1;
for(let a=0;
a<e.assetList.length;
a++){
const o=e.assetList[a],u=t+i;
o.startOffset=i,o.timelineStart=u,n||(n=o.duration===null),r||(r=!!o.error);
const l=o.error?0:o.duration||0;
i+=l}
n&&!r?e.duration=Math.max(i,e.duration):e.duration=i}
removeEvent(e){
e.reset(),delete this.eventMap[e.identifier]}
}
function bt(s){
return`[${
s.event?'"'+s.event.identifier+'"':"primary"}
: ${
s.start.toFixed(2)}
-${
s.end.toFixed(2)}
]`}
class i1{
constructor(e){
this.hls=void 0,this.hls=e}
destroy(){
this.hls=null}
loadAssetList(e,t){
const i=e.assetListUrl;
let n;
try{
n=ep(i,this.hls.sessionId,e.baseUrl)}
catch(h){
const f=this.assignAssetListError(e,b.ASSET_LIST_LOAD_ERROR,h,i);
this.hls.trigger(x.ERROR,f);
return}
t&&n.protocol!=="data:"&&n.searchParams.set("_HLS_start_offset",""+t);
const r=this.hls.config,a=r.loader,o=new a(r),u={
responseType:"json",url:n.href}
,l=r.interstitialAssetListLoadPolicy.default,c={
loadPolicy:l,timeout:l.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0}
,d={
onSuccess:(h,f,m,p)=>{
const E=h.data,v=E==null?void 0:E.ASSETS;
if(!Array.isArray(v)){
const y=this.assignAssetListError(e,b.ASSET_LIST_PARSING_ERROR,new Error("Invalid interstitial asset list"),m.url,f,p);
this.hls.trigger(x.ERROR,y);
return}
e.assetListResponse=E,this.hls.trigger(x.ASSET_LIST_LOADED,{
event:e,assetListResponse:E,networkDetails:p}
)}
,onError:(h,f,m,p)=>{
const E=this.assignAssetListError(e,b.ASSET_LIST_LOAD_ERROR,new Error(`Error loading X-ASSET-LIST: HTTP status ${
h.code}
 ${
h.text}
 (${
f.url}
)`),f.url,p,m);
this.hls.trigger(x.ERROR,E)}
,onTimeout:(h,f,m)=>{
const p=this.assignAssetListError(e,b.ASSET_LIST_LOAD_TIMEOUT,new Error(`Timeout loading X-ASSET-LIST (${
f.url}
)`),f.url,h,m);
this.hls.trigger(x.ERROR,p)}
}
;
return o.load(u,c,d),this.hls.trigger(x.ASSET_LIST_LOADING,{
event:e}
),o}
assignAssetListError(e,t,i,n,r,a){
return e.error=i,{
type:Y.NETWORK_ERROR,details:t,fatal:!1,interstitial:e,url:n,error:i,networkDetails:a,stats:r}
}
}
function nf(s){
var e;
s==null||(e=s.play())==null||e.catch(()=>{
}
)}
function Dr(s,e){
return`[${
s}
] Advancing timeline position to ${
e}
`}
class n1 extends _t{
constructor(e,t){
super("interstitials",e.logger),this.HlsPlayerClass=void 0,this.hls=void 0,this.assetListLoader=void 0,this.mediaSelection=null,this.altSelection=null,this.media=null,this.detachedData=null,this.requiredTracks=null,this.manager=null,this.playerQueue=[],this.bufferedPos=-1,this.timelinePos=-1,this.schedule=void 0,this.playingItem=null,this.bufferingItem=null,this.waitingItem=null,this.endedItem=null,this.playingAsset=null,this.endedAsset=null,this.bufferingAsset=null,this.shouldPlay=!1,this.onPlay=()=>{
this.shouldPlay=!0}
,this.onPause=()=>{
this.shouldPlay=!1}
,this.onSeeking=()=>{
const i=this.currentTime;
if(i===void 0||this.playbackDisabled||!this.schedule)return;
const n=i-this.timelinePos;
if(Math.abs(n)<1/7056e5)return;
const a=n<=-.01;
this.timelinePos=i,this.bufferedPos=i;
const o=this.playingItem;
if(!o){
this.checkBuffer();
return}
if(a&&this.schedule.resetErrorsInRange(i,i-n)&&this.updateSchedule(!0),this.checkBuffer(),a&&i<o.start||i>=o.end){
var u;
const f=this.findItemIndex(o);
let m=this.schedule.findItemIndexAtTime(i);
if(m===-1&&(m=f+(a?-1:1),this.log(`seeked ${
a?"back ":""}
to position not covered by schedule ${
i}
 (resolving from ${
f}
 to ${
m}
)`)),!this.isInterstitial(o)&&(u=this.media)!=null&&u.paused&&(this.shouldPlay=!1),!a&&m>f){
const p=this.schedule.findJumpRestrictedIndex(f+1,m);
if(p>f){
this.setSchedulePosition(p);
return}
}
this.setSchedulePosition(m);
return}
const l=this.playingAsset;
if(!l){
if(this.playingLastItem&&this.isInterstitial(o)){
const f=o.event.assetList[0];
f&&(this.endedItem=this.playingItem,this.playingItem=null,this.setScheduleToAssetAtTime(i,f))}
return}
const c=l.timelineStart,d=l.duration||0;
if(a&&i<c||i>=c+d){
var h;
(h=o.event)!=null&&h.appendInPlace&&(this.clearAssetPlayers(o.event,o),this.flushFrontBuffer(i)),this.setScheduleToAssetAtTime(i,l)}
}
,this.onTimeupdate=()=>{
const i=this.currentTime;
if(i===void 0||this.playbackDisabled)return;
if(i>this.timelinePos)this.timelinePos=i,i>this.bufferedPos&&this.checkBuffer();
else return;
const n=this.playingItem;
if(!n||this.playingLastItem)return;
if(i>=n.end){
this.timelinePos=n.end;
const o=this.findItemIndex(n);
this.setSchedulePosition(o+1)}
const r=this.playingAsset;
if(!r)return;
const a=r.timelineStart+(r.duration||0);
i>=a&&this.setScheduleToAssetAtTime(i,r)}
,this.onScheduleUpdate=(i,n)=>{
const r=this.schedule;
if(!r)return;
const a=this.playingItem,o=r.events||[],u=r.items||[],l=r.durations,c=i.map(p=>p.identifier),d=!!(o.length||c.length);
(d||n)&&this.log(`INTERSTITIALS_UPDATED (${
o.length}
): ${
o}

Schedule: ${
u.map(p=>bt(p))}
 pos: ${
this.timelinePos}
`),c.length&&this.log(`Removed events ${
c}
`);
let h=null,f=null;
a&&(h=this.updateItem(a,this.timelinePos),this.itemsMatch(a,h)?this.playingItem=h:this.waitingItem=this.endedItem=null),this.waitingItem=this.updateItem(this.waitingItem),this.endedItem=this.updateItem(this.endedItem);
const m=this.bufferingItem;
if(m&&(f=this.updateItem(m,this.bufferedPos),this.itemsMatch(m,f)?this.bufferingItem=f:m.event&&(this.bufferingItem=this.playingItem,this.clearInterstitial(m.event,null))),i.forEach(p=>{
p.assetList.forEach(E=>{
this.clearAssetPlayer(E.identifier,null)}
)}
),this.playerQueue.forEach(p=>{
if(p.interstitial.appendInPlace){
const E=p.assetItem.timelineStart,v=p.timelineOffset-E;
if(v)try{
p.timelineOffset=E}
catch(y){
Math.abs(v)>Bi&&this.warn(`${
y}
 ("${
p.assetId}
" ${
p.timelineOffset}
->${
E}
)`)}
}
}
),d||n){
if(this.hls.trigger(x.INTERSTITIALS_UPDATED,{
events:o.slice(0),schedule:u.slice(0),durations:l,removedIds:c}
),this.isInterstitial(a)&&c.includes(a.event.identifier)){
this.warn(`Interstitial "${
a.event.identifier}
" removed while playing`),this.primaryFallback(a.event);
return}
a&&this.trimInPlace(h,a),m&&f!==h&&this.trimInPlace(f,m),this.checkBuffer()}
}
,this.hls=e,this.HlsPlayerClass=t,this.assetListLoader=new i1(e),this.schedule=new s1(this.onScheduleUpdate,e.logger),this.registerListeners()}
registerListeners(){
const e=this.hls;
e&&(e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(x.AUDIO_TRACK_UPDATED,this.onAudioTrackUpdated,this),e.on(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(x.SUBTITLE_TRACK_UPDATED,this.onSubtitleTrackUpdated,this),e.on(x.EVENT_CUE_ENTER,this.onInterstitialCueEnter,this),e.on(x.ASSET_LIST_LOADED,this.onAssetListLoaded,this),e.on(x.BUFFER_APPENDED,this.onBufferAppended,this),e.on(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(x.BUFFERED_TO_END,this.onBufferedToEnd,this),e.on(x.MEDIA_ENDED,this.onMediaEnded,this),e.on(x.ERROR,this.onError,this),e.on(x.DESTROYING,this.onDestroying,this))}
unregisterListeners(){
const e=this.hls;
e&&(e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(x.AUDIO_TRACK_UPDATED,this.onAudioTrackUpdated,this),e.off(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(x.SUBTITLE_TRACK_UPDATED,this.onSubtitleTrackUpdated,this),e.off(x.EVENT_CUE_ENTER,this.onInterstitialCueEnter,this),e.off(x.ASSET_LIST_LOADED,this.onAssetListLoaded,this),e.off(x.BUFFER_CODECS,this.onBufferCodecs,this),e.off(x.BUFFER_APPENDED,this.onBufferAppended,this),e.off(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(x.BUFFERED_TO_END,this.onBufferedToEnd,this),e.off(x.MEDIA_ENDED,this.onMediaEnded,this),e.off(x.ERROR,this.onError,this),e.off(x.DESTROYING,this.onDestroying,this))}
startLoad(){
this.resumeBuffering()}
stopLoad(){
this.pauseBuffering()}
resumeBuffering(){
var e;
(e=this.getBufferingPlayer())==null||e.resumeBuffering()}
pauseBuffering(){
var e;
(e=this.getBufferingPlayer())==null||e.pauseBuffering()}
destroy(){
this.unregisterListeners(),this.stopLoad(),this.assetListLoader&&this.assetListLoader.destroy(),this.emptyPlayerQueue(),this.clearScheduleState(),this.schedule&&this.schedule.destroy(),this.media=this.detachedData=this.mediaSelection=this.requiredTracks=this.altSelection=this.schedule=this.manager=null,this.hls=this.HlsPlayerClass=this.log=null,this.assetListLoader=null,this.onPlay=this.onPause=this.onSeeking=this.onTimeupdate=null,this.onScheduleUpdate=null}
onDestroying(){
const e=this.primaryMedia||this.media;
e&&this.removeMediaListeners(e)}
removeMediaListeners(e){
st(e,"play",this.onPlay),st(e,"pause",this.onPause),st(e,"seeking",this.onSeeking),st(e,"timeupdate",this.onTimeupdate)}
onMediaAttaching(e,t){
const i=this.media=t.media;
qe(i,"seeking",this.onSeeking),qe(i,"timeupdate",this.onTimeupdate),qe(i,"play",this.onPlay),qe(i,"pause",this.onPause)}
onMediaAttached(e,t){
const i=this.effectivePlayingItem,n=this.detachedData;
if(this.detachedData=null,i===null)this.checkStart();
else if(!n){
this.clearScheduleState();
const r=this.findItemIndex(i);
this.setSchedulePosition(r)}
}
clearScheduleState(){
this.log("clear schedule state"),this.playingItem=this.bufferingItem=this.waitingItem=this.endedItem=this.playingAsset=this.endedAsset=this.bufferingAsset=null}
onMediaDetaching(e,t){
const i=!!t.transferMedia,n=this.media;
if(this.media=null,!i&&(n&&this.removeMediaListeners(n),this.detachedData)){
const r=this.getBufferingPlayer();
r&&(this.log(`Removing schedule state for detachedData and ${
r}
`),this.playingAsset=this.endedAsset=this.bufferingAsset=this.bufferingItem=this.waitingItem=this.detachedData=null,r.detachMedia()),this.shouldPlay=!1}
}
get interstitialsManager(){
if(!this.hls)return null;
if(this.manager)return this.manager;
const e=this,t=()=>e.bufferingItem||e.waitingItem,i=d=>d&&e.getAssetPlayer(d.identifier),n=(d,h,f,m,p)=>{
if(d){
let E=d[h].start;
const v=d.event;
if(v){
if(h==="playout"||v.timelineOccupancy!==$a.Point){
const y=i(f);
(y==null?void 0:y.interstitial)===v&&(E+=y.assetItem.startOffset+y[p])}
}
else{
const y=m==="bufferedPos"?a():e[m];
E+=y-d.start}
return E}
return 0}
,r=(d,h)=>{
var f;
if(d!==0&&h!=="primary"&&(f=e.schedule)!=null&&f.length){
var m;
const p=e.schedule.findItemIndexAtTime(d),E=(m=e.schedule.items)==null?void 0:m[p];
if(E){
const v=E[h].start-E.start;
return d+v}
}
return d}
,a=()=>{
const d=e.bufferedPos;
return d===Number.MAX_VALUE?o("primary"):Math.max(d,0)}
,o=d=>{
var h,f;
return(h=e.primaryDetails)!=null&&h.live?e.primaryDetails.edge:((f=e.schedule)==null?void 0:f.durations[d])||0}
,u=(d,h)=>{
var f,m;
const p=e.effectivePlayingItem;
if(p!=null&&(f=p.event)!=null&&f.restrictions.skip||!e.schedule)return;
e.log(`seek to ${
d}
 "${
h}
"`);
const E=e.effectivePlayingItem,v=e.schedule.findItemIndexAtTime(d,h),y=(m=e.schedule.items)==null?void 0:m[v],S=e.getBufferingPlayer(),T=S==null?void 0:S.interstitial,I=T==null?void 0:T.appendInPlace,_=E&&e.itemsMatch(E,y);
if(E&&(I||_)){
const L=i(e.playingAsset),R=(L==null?void 0:L.media)||e.primaryMedia;
if(R){
const w=h==="primary"?R.currentTime:n(E,h,e.playingAsset,"timelinePos","currentTime"),A=d-w,D=(I?w:R.currentTime)+A;
if(D>=0&&(!L||I||D<=L.duration)){
R.currentTime=D;
return}
}
}
if(y){
let L=d;
if(h!=="primary"){
const w=y[h].start,A=d-w;
L=y.start+A}
const R=!e.isInterstitial(y);
if((!e.isInterstitial(E)||E.event.appendInPlace)&&(R||y.event.appendInPlace)){
const w=e.media||(I?S==null?void 0:S.media:null);
w&&(w.currentTime=L)}
else if(E){
const w=e.findItemIndex(E);
if(v>w){
const D=e.schedule.findJumpRestrictedIndex(w+1,v);
if(D>w){
e.setSchedulePosition(D);
return}
}
let A=0;
if(R)e.timelinePos=L,e.checkBuffer();
else{
const D=y.event.assetList,$=d-(y[h]||y).start;
for(let G=D.length;
G--;
){
const W=D[G];
if(W.duration&&$>=W.startOffset&&$<W.startOffset+W.duration){
A=G;
break}
}
}
e.setSchedulePosition(v,A)}
}
}
,l=()=>{
const d=e.effectivePlayingItem;
if(e.isInterstitial(d))return d;
const h=t();
return e.isInterstitial(h)?h:null}
,c={
get bufferedEnd(){
const d=t(),h=e.bufferingItem;
if(h&&h===d){
var f;
return n(h,"playout",e.bufferingAsset,"bufferedPos","bufferedEnd")-h.playout.start||((f=e.bufferingAsset)==null?void 0:f.startOffset)||0}
return 0}
,get currentTime(){
const d=l(),h=e.effectivePlayingItem;
return h&&h===d?n(h,"playout",e.effectivePlayingAsset,"timelinePos","currentTime")-h.playout.start:0}
,set currentTime(d){
const h=l(),f=e.effectivePlayingItem;
f&&f===h&&u(d+f.playout.start,"playout")}
,get duration(){
const d=l();
return d?d.playout.end-d.playout.start:0}
,get assetPlayers(){
var d;
const h=(d=l())==null?void 0:d.event.assetList;
return h?h.map(f=>e.getAssetPlayer(f.identifier)):[]}
,get playingIndex(){
var d;
const h=(d=l())==null?void 0:d.event;
return h&&e.effectivePlayingAsset?h.findAssetIndex(e.effectivePlayingAsset):-1}
,get scheduleItem(){
return l()}
}
;
return this.manager={
get events(){
var d;
return((d=e.schedule)==null||(d=d.events)==null?void 0:d.slice(0))||[]}
,get schedule(){
var d;
return((d=e.schedule)==null||(d=d.items)==null?void 0:d.slice(0))||[]}
,get interstitialPlayer(){
return l()?c:null}
,get playerQueue(){
return e.playerQueue.slice(0)}
,get bufferingAsset(){
return e.bufferingAsset}
,get bufferingItem(){
return t()}
,get bufferingIndex(){
const d=t();
return e.findItemIndex(d)}
,get playingAsset(){
return e.effectivePlayingAsset}
,get playingItem(){
return e.effectivePlayingItem}
,get playingIndex(){
const d=e.effectivePlayingItem;
return e.findItemIndex(d)}
,primary:{
get bufferedEnd(){
return a()}
,get currentTime(){
const d=e.timelinePos;
return d>0?d:0}
,set currentTime(d){
u(d,"primary")}
,get duration(){
return o("primary")}
,get seekableStart(){
var d;
return((d=e.primaryDetails)==null?void 0:d.fragmentStart)||0}
}
,integrated:{
get bufferedEnd(){
return n(t(),"integrated",e.bufferingAsset,"bufferedPos","bufferedEnd")}
,get currentTime(){
return n(e.effectivePlayingItem,"integrated",e.effectivePlayingAsset,"timelinePos","currentTime")}
,set currentTime(d){
u(d,"integrated")}
,get duration(){
return o("integrated")}
,get seekableStart(){
var d;
return r(((d=e.primaryDetails)==null?void 0:d.fragmentStart)||0,"integrated")}
}
,skip:()=>{
const d=e.effectivePlayingItem,h=d==null?void 0:d.event;
if(h&&!h.restrictions.skip){
const f=e.findItemIndex(d);
if(h.appendInPlace){
const m=d.playout.start+d.event.duration;
u(m+.001,"playout")}
else e.advanceAfterAssetEnded(h,f,1/0)}
}
}
}
get effectivePlayingItem(){
return this.waitingItem||this.playingItem||this.endedItem}
get effectivePlayingAsset(){
return this.playingAsset||this.endedAsset}
get playingLastItem(){
var e;
const t=this.playingItem,i=(e=this.schedule)==null?void 0:e.items;
return!this.playbackStarted||!t||!i?!1:this.findItemIndex(t)===i.length-1}
get playbackStarted(){
return this.effectivePlayingItem!==null}
get currentTime(){
var e,t;
if(this.mediaSelection===null)return;
const i=this.waitingItem||this.playingItem;
if(this.isInterstitial(i)&&!i.event.appendInPlace)return;
let n=this.media;
!n&&(e=this.bufferingItem)!=null&&(e=e.event)!=null&&e.appendInPlace&&(n=this.primaryMedia);
const r=(t=n)==null?void 0:t.currentTime;
if(!(r===void 0||!j(r)))return r}
get primaryMedia(){
var e;
return this.media||((e=this.detachedData)==null?void 0:e.media)||null}
isInterstitial(e){
return!!(e!=null&&e.event)}
retreiveMediaSource(e,t){
const i=this.getAssetPlayer(e);
i&&this.transferMediaFromPlayer(i,t)}
transferMediaFromPlayer(e,t){
const i=e.interstitial.appendInPlace,n=e.media;
if(i&&n===this.primaryMedia){
if(this.bufferingAsset=null,(!t||this.isInterstitial(t)&&!t.event.appendInPlace)&&t&&n){
this.detachedData={
media:n}
;
return}
const r=e.transferMedia();
this.log(`transfer MediaSource from ${
e}
 ${
de(r)}
`),this.detachedData=r}
else t&&n&&(this.shouldPlay||(this.shouldPlay=!n.paused))}
transferMediaTo(e,t){
var i,n;
if(e.media===t)return;
let r=null;
const a=this.hls,o=e!==a,u=o&&e.interstitial.appendInPlace,l=(i=this.detachedData)==null?void 0:i.mediaSource;
let c;
if(a.media)u&&(r=a.transferMedia(),this.detachedData=r),c="Primary";
else if(l){
const m=this.getBufferingPlayer();
m?(r=m.transferMedia(),c=`${
m}
`):c="detached MediaSource"}
else c="detached media";
if(!r){
if(l)r=this.detachedData,this.log(`using detachedData: MediaSource ${
de(r)}
`);
else if(!this.detachedData||a.media===t){
const m=this.playerQueue;
m.length>1&&m.forEach(p=>{
if(o&&p.interstitial.appendInPlace!==u){
const E=p.interstitial;
this.clearInterstitial(p.interstitial,null),E.appendInPlace=!1,E.appendInPlace&&this.warn(`Could not change append strategy for queued assets ${
E}
`)}
}
),this.hls.detachMedia(),this.detachedData={
media:t}
}
}
const d=r&&"mediaSource"in r&&((n=r.mediaSource)==null?void 0:n.readyState)!=="closed",h=d&&r?r:t;
this.log(`${
d?"transfering MediaSource":"attaching media"}
 to ${
o?e:"Primary"}
 from ${
c}
 (media.currentTime: ${
t.currentTime}
)`);
const f=this.schedule;
if(h===r&&f){
const m=o&&e.assetId===f.assetIdAtEnd;
h.overrides={
duration:f.duration,endOfStream:!o||m,cueRemoval:!o}
}
e.attachMedia(h)}
onInterstitialCueEnter(){
this.onTimeupdate()}
checkStart(){
const e=this.schedule,t=e==null?void 0:e.events;
if(!t||this.playbackDisabled||!this.media)return;
this.bufferedPos===-1&&(this.bufferedPos=0);
const i=this.timelinePos,n=this.effectivePlayingItem;
if(i===-1){
const r=this.hls.startPosition;
if(this.log(Dr("checkStart",r)),this.timelinePos=r,t.length&&t[0].cue.pre){
const a=e.findEventIndex(t[0].identifier);
this.setSchedulePosition(a)}
else if(r>=0||!this.primaryLive){
const a=this.timelinePos=r>0?r:0,o=e.findItemIndexAtTime(a);
this.setSchedulePosition(o)}
}
else if(n&&!this.playingItem){
const r=e.findItemIndex(n);
this.setSchedulePosition(r)}
}
advanceAssetBuffering(e,t){
const i=e.event,n=i.findAssetIndex(t),r=Xo(i,n);
if(!i.isAssetPastPlayoutLimit(r))this.bufferedToEvent(e,r);
else if(this.schedule){
var a;
const o=(a=this.schedule.items)==null?void 0:a[this.findItemIndex(e)+1];
o&&this.bufferedToItem(o)}
}
advanceAfterAssetEnded(e,t,i){
const n=Xo(e,i);
if(e.isAssetPastPlayoutLimit(n)){
if(this.schedule){
const r=this.schedule.items;
if(r){
const a=t+1,o=r.length;
if(a>=o){
this.setSchedulePosition(-1);
return}
const u=e.resumeTime;
this.timelinePos<u&&(this.log(Dr("advanceAfterAssetEnded",u)),this.timelinePos=u,e.appendInPlace&&this.advanceInPlace(u),this.checkBuffer(this.bufferedPos<u)),this.setSchedulePosition(a)}
}
}
else{
if(e.appendInPlace){
const r=e.assetList[n];
r&&this.advanceInPlace(r.timelineStart)}
this.setSchedulePosition(t,n)}
}
setScheduleToAssetAtTime(e,t){
const i=this.schedule;
if(!i)return;
const n=t.parentIdentifier,r=i.getEvent(n);
if(r){
const a=i.findEventIndex(n),o=i.findAssetIndex(r,e);
this.advanceAfterAssetEnded(r,a,o-1)}
}
setSchedulePosition(e,t){
var i;
const n=(i=this.schedule)==null?void 0:i.items;
if(!n||this.playbackDisabled)return;
const r=e>=0?n[e]:null;
this.log(`setSchedulePosition ${
e}
, ${
t}
 (${
r&&bt(r)}
) pos: ${
this.timelinePos}
`);
const a=this.waitingItem||this.playingItem,o=this.playingLastItem;
if(this.isInterstitial(a)){
const c=a.event,d=this.playingAsset,h=d==null?void 0:d.identifier,f=h?this.getAssetPlayer(h):null;
if(f&&h&&(!this.eventItemsMatch(a,r)||t!==void 0&&h!==c.assetList[t].identifier)){
var u;
const m=c.findAssetIndex(d);
if(this.log(`INTERSTITIAL_ASSET_ENDED ${
m+1}
/${
c.assetList.length}
 ${
pi(d)}
`),this.endedAsset=d,this.playingAsset=null,this.hls.trigger(x.INTERSTITIAL_ASSET_ENDED,{
asset:d,assetListIndex:m,event:c,schedule:n.slice(0),scheduleIndex:e,player:f}
),a!==this.playingItem){
this.itemsMatch(a,this.playingItem)&&!this.playingAsset&&this.advanceAfterAssetEnded(c,this.findItemIndex(this.playingItem),m);
return}
this.retreiveMediaSource(h,r),f.media&&!((u=this.detachedData)!=null&&u.mediaSource)&&f.detachMedia()}
if(!this.eventItemsMatch(a,r)&&(this.endedItem=a,this.playingItem=null,this.log(`INTERSTITIAL_ENDED ${
c}
 ${
bt(a)}
`),c.hasPlayed=!0,this.hls.trigger(x.INTERSTITIAL_ENDED,{
event:c,schedule:n.slice(0),scheduleIndex:e}
),c.cue.once)){
var l;
this.updateSchedule();
const m=(l=this.schedule)==null?void 0:l.items;
if(r&&m){
const p=this.findItemIndex(r);
this.advanceSchedule(p,m,t,a,o)}
return}
}
this.advanceSchedule(e,n,t,a,o)}
advanceSchedule(e,t,i,n,r){
const a=this.schedule;
if(!a)return;
const o=t[e]||null,u=this.primaryMedia,l=this.playerQueue;
if(l.length&&l.forEach(c=>{
const d=c.interstitial,h=a.findEventIndex(d.identifier);
(h<e||h>e+1)&&this.clearInterstitial(d,o)}
),this.isInterstitial(o)){
this.timelinePos=Math.min(Math.max(this.timelinePos,o.start),o.end);
const c=o.event;
if(i===void 0){
i=a.findAssetIndex(c,this.timelinePos);
const m=Xo(c,i-1);
if(c.isAssetPastPlayoutLimit(m)||c.appendInPlace&&this.timelinePos===o.end){
this.advanceAfterAssetEnded(c,e,i);
return}
i=m}
const d=this.waitingItem;
this.assetsBuffered(o,u)||this.setBufferingItem(o);
let h=this.preloadAssets(c,i);
if(this.eventItemsMatch(o,d||n)||(this.waitingItem=o,this.log(`INTERSTITIAL_STARTED ${
bt(o)}
 ${
c.appendInPlace?"append in place":""}
`),this.hls.trigger(x.INTERSTITIAL_STARTED,{
event:c,schedule:t.slice(0),scheduleIndex:e}
)),!c.assetListLoaded){
this.log(`Waiting for ASSET-LIST to complete loading ${
c}
`);
return}
if(c.assetListLoader&&(c.assetListLoader.destroy(),c.assetListLoader=void 0),!u){
this.log(`Waiting for attachMedia to start Interstitial ${
c}
`);
return}
this.waitingItem=this.endedItem=null,this.playingItem=o;
const f=c.assetList[i];
if(!f){
this.advanceAfterAssetEnded(c,e,i||0);
return}
if(h||(h=this.getAssetPlayer(f.identifier)),h===null||h.destroyed){
const m=c.assetList.length;
this.warn(`asset ${
i+1}
/${
m}
 player destroyed ${
c}
`),h=this.createAssetPlayer(c,f,i),h.loadSource()}
if(!this.eventItemsMatch(o,this.bufferingItem)&&c.appendInPlace&&this.isAssetBuffered(f))return;
this.startAssetPlayer(h,i,t,e,u),this.shouldPlay&&nf(h.media)}
else o?(this.resumePrimary(o,e,n),this.shouldPlay&&nf(this.hls.media)):r&&this.isInterstitial(n)&&(this.endedItem=null,this.playingItem=n,n.event.appendInPlace||this.attachPrimary(a.durations.primary,null))}
get playbackDisabled(){
return this.hls.config.enableInterstitialPlayback===!1}
get primaryDetails(){
var e;
return(e=this.mediaSelection)==null?void 0:e.main.details}
get primaryLive(){
var e;
return!!((e=this.primaryDetails)!=null&&e.live)}
resumePrimary(e,t,i){
var n,r;
if(this.playingItem=e,this.playingAsset=this.endedAsset=null,this.waitingItem=this.endedItem=null,this.bufferedToItem(e),this.log(`resuming ${
bt(e)}
`),!((n=this.detachedData)!=null&&n.mediaSource)){
let o=this.timelinePos;
(o<e.start||o>=e.end)&&(o=this.getPrimaryResumption(e,t),this.log(Dr("resumePrimary",o)),this.timelinePos=o),this.attachPrimary(o,e)}
if(!i)return;
const a=(r=this.schedule)==null?void 0:r.items;
a&&(this.log(`INTERSTITIALS_PRIMARY_RESUMED ${
bt(e)}
`),this.hls.trigger(x.INTERSTITIALS_PRIMARY_RESUMED,{
schedule:a.slice(0),scheduleIndex:t}
),this.checkBuffer())}
getPrimaryResumption(e,t){
const i=e.start;
if(this.primaryLive){
const n=this.primaryDetails;
if(t===0)return this.hls.startPosition;
if(n&&(i<n.fragmentStart||i>n.edge))return this.hls.liveSyncPosition||-1}
return i}
isAssetBuffered(e){
const t=this.getAssetPlayer(e.identifier);
return t!=null&&t.hls?t.hls.bufferedToEnd:X.bufferInfo(this.primaryMedia,this.timelinePos,0).end+1>=e.timelineStart+(e.duration||0)}
attachPrimary(e,t,i){
t?this.setBufferingItem(t):this.bufferingItem=this.playingItem,this.bufferingAsset=null;
const n=this.primaryMedia;
if(!n)return;
const r=this.hls;
r.media?this.checkBuffer():(this.transferMediaTo(r,n),i&&this.startLoadingPrimaryAt(e,i)),i||(this.log(Dr("attachPrimary",e)),this.timelinePos=e,this.startLoadingPrimaryAt(e,i))}
startLoadingPrimaryAt(e,t){
var i;
const n=this.hls;
!n.loadingEnabled||!n.media||Math.abs((((i=n.mainForwardBufferInfo)==null?void 0:i.start)||n.media.currentTime)-e)>.5?n.startLoad(e,t):n.bufferingEnabled||n.resumeBuffering()}
onManifestLoading(){
var e;
this.stopLoad(),(e=this.schedule)==null||e.reset(),this.emptyPlayerQueue(),this.clearScheduleState(),this.shouldPlay=!1,this.bufferedPos=this.timelinePos=-1,this.mediaSelection=this.altSelection=this.manager=this.requiredTracks=null,this.hls.off(x.BUFFER_CODECS,this.onBufferCodecs,this),this.hls.on(x.BUFFER_CODECS,this.onBufferCodecs,this)}
onLevelUpdated(e,t){
if(t.level===-1||!this.schedule)return;
const i=this.hls.levels[t.level];
if(!i.details)return;
const n=ae(ae({
}
,this.mediaSelection||this.altSelection),{
}
,{
main:i}
);
this.mediaSelection=n,this.schedule.parseInterstitialDateRanges(n,this.hls.config.interstitialAppendInPlace),!this.effectivePlayingItem&&this.schedule.items&&this.checkStart()}
onAudioTrackUpdated(e,t){
const i=this.hls.audioTracks[t.id],n=this.mediaSelection;
if(!n){
this.altSelection=ae(ae({
}
,this.altSelection),{
}
,{
audio:i}
);
return}
const r=ae(ae({
}
,n),{
}
,{
audio:i}
);
this.mediaSelection=r}
onSubtitleTrackUpdated(e,t){
const i=this.hls.subtitleTracks[t.id],n=this.mediaSelection;
if(!n){
this.altSelection=ae(ae({
}
,this.altSelection),{
}
,{
subtitles:i}
);
return}
const r=ae(ae({
}
,n),{
}
,{
subtitles:i}
);
this.mediaSelection=r}
onAudioTrackSwitching(e,t){
const i=hh(t);
this.playerQueue.forEach(({
hls:n}
)=>n&&(n.setAudioOption(t)||n.setAudioOption(i)))}
onSubtitleTrackSwitch(e,t){
const i=hh(t);
this.playerQueue.forEach(({
hls:n}
)=>n&&(n.setSubtitleOption(t)||t.id!==-1&&n.setSubtitleOption(i)))}
onBufferCodecs(e,t){
const i=t.tracks;
i&&(this.requiredTracks=i)}
onBufferAppended(e,t){
this.checkBuffer()}
onBufferFlushed(e,t){
const i=this.playingItem;
if(i&&!this.itemsMatch(i,this.bufferingItem)&&!this.isInterstitial(i)){
const n=this.timelinePos;
this.bufferedPos=n,this.checkBuffer()}
}
onBufferedToEnd(e){
if(!this.schedule)return;
const t=this.schedule.events;
if(this.bufferedPos<Number.MAX_VALUE&&t){
for(let n=0;
n<t.length;
n++){
const r=t[n];
if(r.cue.post){
var i;
const a=this.schedule.findEventIndex(r.identifier),o=(i=this.schedule.items)==null?void 0:i[a];
this.isInterstitial(o)&&this.eventItemsMatch(o,this.bufferingItem)&&this.bufferedToItem(o,0);
break}
}
this.bufferedPos=Number.MAX_VALUE}
}
onMediaEnded(e){
const t=this.playingItem;
if(!this.playingLastItem&&t){
const i=this.findItemIndex(t);
this.setSchedulePosition(i+1)}
else this.shouldPlay=!1}
updateItem(e,t){
var i;
const n=(i=this.schedule)==null?void 0:i.items;
if(e&&n){
const r=this.findItemIndex(e,t);
return n[r]||null}
return null}
trimInPlace(e,t){
if(this.isInterstitial(e)&&e.event.appendInPlace&&t.end-e.end>.25){
e.event.assetList.forEach((r,a)=>{
e.event.isAssetPastPlayoutLimit(a)&&this.clearAssetPlayer(r.identifier,null)}
);
const i=e.end+.25,n=X.bufferInfo(this.primaryMedia,i,0);
(n.end>i||(n.nextStart||0)>i)&&(this.log(`trim buffered interstitial ${
bt(e)}
 (was ${
bt(t)}
)`),this.attachPrimary(i,null,!0),this.flushFrontBuffer(i))}
}
itemsMatch(e,t){
return!!t&&(e===t||e.event&&t.event&&this.eventItemsMatch(e,t)||!e.event&&!t.event&&this.findItemIndex(e)===this.findItemIndex(t))}
eventItemsMatch(e,t){
var i;
return!!t&&(e===t||e.event.identifier===((i=t.event)==null?void 0:i.identifier))}
findItemIndex(e,t){
return e&&this.schedule?this.schedule.findItemIndex(e,t):-1}
updateSchedule(e=!1){
var t;
const i=this.mediaSelection;
i&&((t=this.schedule)==null||t.updateSchedule(i,[],e))}
checkBuffer(e){
var t;
const i=(t=this.schedule)==null?void 0:t.items;
if(!i)return;
const n=X.bufferInfo(this.primaryMedia,this.timelinePos,0);
e&&(this.bufferedPos=this.timelinePos),e||(e=n.len<1),this.updateBufferedPos(n.end,i,e)}
updateBufferedPos(e,t,i){
const n=this.schedule,r=this.bufferingItem;
if(this.bufferedPos>e||!n)return;
if(t.length===1&&this.itemsMatch(t[0],r)){
this.bufferedPos=e;
return}
const a=this.playingItem,o=this.findItemIndex(a);
let u=n.findItemIndexAtTime(e);
if(this.bufferedPos<e){
var l;
const c=this.findItemIndex(r),d=Math.min(c+1,t.length-1),h=t[d];
if((u===-1&&r&&e>=r.end||(l=h.event)!=null&&l.appendInPlace&&e+.01>=h.start)&&(u=d),this.isInterstitial(r)){
const f=r.event;
if(d-o>1&&f.appendInPlace===!1||f.assetList.length===0&&f.assetListLoader)return}
if(this.bufferedPos=e,u>c&&u>o)this.bufferedToItem(h);
else{
const f=this.primaryDetails;
this.primaryLive&&f&&e>f.edge-f.targetduration&&h.start<f.edge+this.hls.config.interstitialLiveLookAhead&&this.isInterstitial(h)&&this.preloadAssets(h.event,0)}
}
else i&&a&&!this.itemsMatch(a,r)&&(u===o?this.bufferedToItem(a):u===o+1&&this.bufferedToItem(t[u]))}
assetsBuffered(e,t){
return e.event.assetList.length===0?!1:!e.event.assetList.some(n=>{
const r=this.getAssetPlayer(n.identifier);
return!(r!=null&&r.bufferedInPlaceToEnd(t))}
)}
setBufferingItem(e){
const t=this.bufferingItem,i=this.schedule;
if(!this.itemsMatch(e,t)&&i){
const{
items:n,events:r}
=i;
if(!n||!r)return t;
const a=this.isInterstitial(e),o=this.getBufferingPlayer();
this.bufferingItem=e,this.bufferedPos=Math.max(e.start,Math.min(e.end,this.timelinePos));
const u=o?o.remaining:t?t.end-this.timelinePos:0;
if(this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${
bt(e)}
`+(t?` (${
u.toFixed(2)}
 remaining)`:"")),!this.playbackDisabled)if(a){
const l=i.findAssetIndex(e.event,this.bufferedPos);
e.event.assetList.forEach((c,d)=>{
const h=this.getAssetPlayer(c.identifier);
h&&(d===l&&h.loadSource(),h.resumeBuffering())}
)}
else this.hls.resumeBuffering(),this.playerQueue.forEach(l=>l.pauseBuffering());
this.hls.trigger(x.INTERSTITIALS_BUFFERED_TO_BOUNDARY,{
events:r.slice(0),schedule:n.slice(0),bufferingIndex:this.findItemIndex(e),playingIndex:this.findItemIndex(this.playingItem)}
)}
else this.bufferingItem!==e&&(this.bufferingItem=e);
return t}
bufferedToItem(e,t=0){
const i=this.setBufferingItem(e);
if(!this.playbackDisabled){
if(this.isInterstitial(e))this.bufferedToEvent(e,t);
else if(i!==null){
this.bufferingAsset=null;
const n=this.detachedData;
n?n.mediaSource?this.attachPrimary(e.start,e,!0):this.preloadPrimary(e):this.preloadPrimary(e)}
}
}
preloadPrimary(e){
const t=this.findItemIndex(e),i=this.getPrimaryResumption(e,t);
this.startLoadingPrimaryAt(i)}
bufferedToEvent(e,t){
const i=e.event,n=i.assetList.length===0&&!i.assetListLoader,r=i.cue.once;
if(n||!r){
const a=this.preloadAssets(i,t);
if(a!=null&&a.interstitial.appendInPlace){
const o=this.primaryMedia;
o&&this.bufferAssetPlayer(a,o)}
}
}
preloadAssets(e,t){
const i=e.assetUrl,n=e.assetList.length,r=n===0&&!e.assetListLoader,a=e.cue.once;
if(r){
const u=e.timelineStart;
if(e.appendInPlace){
var o;
const h=this.playingItem;
!this.isInterstitial(h)&&(h==null||(o=h.nextEvent)==null?void 0:o.identifier)===e.identifier&&this.flushFrontBuffer(u+.25)}
let l,c=0;
if(!this.playingItem&&this.primaryLive&&(c=this.hls.startPosition,c===-1&&(c=this.hls.liveSyncPosition||0)),c&&!(e.cue.pre||e.cue.post)){
const h=c-u;
h>0&&(l=Math.round(h*1e3)/1e3)}
if(this.log(`Load interstitial asset ${
t+1}
/${
i?1:n}
 ${
e}
${
l?` live-start: ${
c}
 start-offset: ${
l}
`:""}
`),i)return this.createAsset(e,0,0,u,e.duration,i);
const d=this.assetListLoader.loadAssetList(e,l);
d&&(e.assetListLoader=d)}
else if(!a&&n){
for(let l=t;
l<n;
l++){
const c=e.assetList[l],d=this.getAssetPlayerQueueIndex(c.identifier);
(d===-1||this.playerQueue[d].destroyed)&&!c.error&&this.createAssetPlayer(e,c,l)}
const u=e.assetList[t];
if(u){
const l=this.getAssetPlayer(u.identifier);
return l&&l.loadSource(),l}
}
return null}
flushFrontBuffer(e){
const t=this.requiredTracks;
if(!t)return;
this.log(`Removing front buffer starting at ${
e}
`),Object.keys(t).forEach(n=>{
this.hls.trigger(x.BUFFER_FLUSHING,{
startOffset:e,endOffset:1/0,type:n}
)}
)}
getAssetPlayerQueueIndex(e){
const t=this.playerQueue;
for(let i=0;
i<t.length;
i++)if(e===t[i].assetId)return i;
return-1}
getAssetPlayer(e){
const t=this.getAssetPlayerQueueIndex(e);
return this.playerQueue[t]||null}
getBufferingPlayer(){
const{
playerQueue:e,primaryMedia:t}
=this;
if(t){
for(let i=0;
i<e.length;
i++)if(e[i].media===t)return e[i]}
return null}
createAsset(e,t,i,n,r,a){
const o={
parentIdentifier:e.identifier,identifier:ZT(e,a,t),duration:r,startOffset:i,timelineStart:n,uri:a}
;
return this.createAssetPlayer(e,o,t)}
createAssetPlayer(e,t,i){
const n=this.hls,r=n.userConfig;
let a=r.videoPreference;
const o=n.loadLevelObj||n.levels[n.currentLevel];
(a||o)&&(a=ue({
}
,a),o.videoCodec&&(a.videoCodec=o.videoCodec),o.videoRange&&(a.allowedVideoRanges=[o.videoRange]));
const u=n.audioTracks[n.audioTrack],l=n.subtitleTracks[n.subtitleTrack];
let c=0;
if(this.primaryLive||e.appendInPlace){
const T=this.timelinePos-t.timelineStart;
if(T>1){
const I=t.duration;
I&&T<I&&(c=T)}
}
const d=t.identifier,h=ae(ae({
}
,r),{
}
,{
maxMaxBufferLength:Math.min(180,n.config.maxMaxBufferLength),autoStartLoad:!0,startFragPrefetch:!0,primarySessionId:n.sessionId,assetPlayerId:d,abrEwmaDefaultEstimate:n.bandwidthEstimate,interstitialsController:void 0,startPosition:c,liveDurationInfinity:!1,testBandwidth:!1,videoPreference:a,audioPreference:u||r.audioPreference,subtitlePreference:l||r.subtitlePreference}
);
e.appendInPlace&&(e.appendInPlaceStarted=!0,t.timelineStart&&(h.timelineOffset=t.timelineStart));
const f=h.cmcd;
f!=null&&f.sessionId&&f.contentId&&(h.cmcd=ue({
}
,f,{
contentId:_n(t.uri)}
)),this.getAssetPlayer(d)&&this.warn(`Duplicate date range identifier ${
e}
 and asset ${
d}
`);
const m=new t1(this.HlsPlayerClass,h,e,t);
this.playerQueue.push(m),e.assetList[i]=t;
let p=!0;
const E=T=>{
if(T.live){
var I;
const R=new Error(`Interstitials MUST be VOD assets ${
e}
`),w={
fatal:!0,type:Y.OTHER_ERROR,details:b.INTERSTITIAL_ASSET_ITEM_ERROR,error:R}
,A=((I=this.schedule)==null?void 0:I.findEventIndex(e.identifier))||-1;
this.handleAssetItemError(w,e,A,i,R.message);
return}
const _=T.edge-T.fragmentStart,L=t.duration;
(p||L===null||_>L)&&(p=!1,this.log(`Interstitial asset "${
d}
" duration change ${
L}
 > ${
_}
`),t.duration=_,this.updateSchedule())}
;
m.on(x.LEVEL_UPDATED,(T,{
details:I}
)=>E(I)),m.on(x.LEVEL_PTS_UPDATED,(T,{
details:I}
)=>E(I)),m.on(x.EVENT_CUE_ENTER,()=>this.onInterstitialCueEnter());
const v=(T,I)=>{
const _=this.getAssetPlayer(d);
if(_&&I.tracks){
_.off(x.BUFFER_CODECS,v),_.tracks=I.tracks;
const L=this.primaryMedia;
this.bufferingAsset===_.assetItem&&L&&!_.media&&this.bufferAssetPlayer(_,L)}
}
;
m.on(x.BUFFER_CODECS,v);
const y=()=>{
var T;
const I=this.getAssetPlayer(d);
if(this.log(`buffered to end of asset ${
I}
`),!I||!this.schedule)return;
const _=this.schedule.findEventIndex(e.identifier),L=(T=this.schedule.items)==null?void 0:T[_];
this.isInterstitial(L)&&this.advanceAssetBuffering(L,t)}
;
m.on(x.BUFFERED_TO_END,y);
const S=T=>()=>{
if(!this.getAssetPlayer(d)||!this.schedule)return;
this.shouldPlay=!0;
const _=this.schedule.findEventIndex(e.identifier);
this.advanceAfterAssetEnded(e,_,T)}
;
return m.once(x.MEDIA_ENDED,S(i)),m.once(x.PLAYOUT_LIMIT_REACHED,S(1/0)),m.on(x.ERROR,(T,I)=>{
if(!this.schedule)return;
const _=this.getAssetPlayer(d);
if(I.details===b.BUFFER_STALLED_ERROR){
if(_!=null&&_.appendInPlace){
this.handleInPlaceStall(e);
return}
this.onTimeupdate(),this.checkBuffer(!0);
return}
this.handleAssetItemError(I,e,this.schedule.findEventIndex(e.identifier),i,`Asset player error ${
I.error}
 ${
e}
`)}
),m.on(x.DESTROYING,()=>{
if(!this.getAssetPlayer(d)||!this.schedule)return;
const I=new Error(`Asset player destroyed unexpectedly ${
d}
`),_={
fatal:!0,type:Y.OTHER_ERROR,details:b.INTERSTITIAL_ASSET_ITEM_ERROR,error:I}
;
this.handleAssetItemError(_,e,this.schedule.findEventIndex(e.identifier),i,I.message)}
),this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${
pi(t)}
`),this.hls.trigger(x.INTERSTITIAL_ASSET_PLAYER_CREATED,{
asset:t,assetListIndex:i,event:e,player:m}
),m}
clearInterstitial(e,t){
this.clearAssetPlayers(e,t),e.reset()}
clearAssetPlayers(e,t){
e.assetList.forEach(i=>{
this.clearAssetPlayer(i.identifier,t)}
)}
resetAssetPlayer(e){
const t=this.getAssetPlayerQueueIndex(e);
if(t!==-1){
this.log(`reset asset player "${
e}
" after error`);
const i=this.playerQueue[t];
this.transferMediaFromPlayer(i,null),i.resetDetails()}
}
clearAssetPlayer(e,t){
const i=this.getAssetPlayerQueueIndex(e);
if(i!==-1){
const n=this.playerQueue[i];
this.log(`clear ${
n}
 toSegment: ${
t&&bt(t)}
`),this.transferMediaFromPlayer(n,t),this.playerQueue.splice(i,1),n.destroy()}
}
emptyPlayerQueue(){
let e;
for(;
e=this.playerQueue.pop();
)e.destroy();
this.playerQueue=[]}
startAssetPlayer(e,t,i,n,r){
const{
interstitial:a,assetItem:o,assetId:u}
=e,l=a.assetList.length,c=this.playingAsset;
this.endedAsset=null,this.playingAsset=o,(!c||c.identifier!==u)&&(c&&(this.clearAssetPlayer(c.identifier,i[n]),delete c.error),this.log(`INTERSTITIAL_ASSET_STARTED ${
t+1}
/${
l}
 ${
pi(o)}
`),this.hls.trigger(x.INTERSTITIAL_ASSET_STARTED,{
asset:o,assetListIndex:t,event:a,schedule:i.slice(0),scheduleIndex:n,player:e}
)),this.bufferAssetPlayer(e,r)}
bufferAssetPlayer(e,t){
var i,n;
if(!this.schedule)return;
const{
interstitial:r,assetItem:a}
=e,o=this.schedule.findEventIndex(r.identifier),u=(i=this.schedule.items)==null?void 0:i[o];
if(!u)return;
e.loadSource(),this.setBufferingItem(u),this.bufferingAsset=a;
const l=this.getBufferingPlayer();
if(l===e)return;
const c=r.appendInPlace;
if(c&&(l==null?void 0:l.interstitial.appendInPlace)===!1)return;
const d=(l==null?void 0:l.tracks)||((n=this.detachedData)==null?void 0:n.tracks)||this.requiredTracks;
if(c&&a!==this.playingAsset){
if(!e.tracks){
this.log(`Waiting for track info before buffering ${
e}
`);
return}
if(d&&!Mm(d,e.tracks)){
const h=new Error(`Asset ${
pi(a)}
 SourceBuffer tracks ('${
Object.keys(e.tracks)}
') are not compatible with primary content tracks ('${
Object.keys(d)}
')`),f={
fatal:!0,type:Y.OTHER_ERROR,details:b.INTERSTITIAL_ASSET_ITEM_ERROR,error:h}
,m=r.findAssetIndex(a);
this.handleAssetItemError(f,r,o,m,h.message);
return}
}
this.transferMediaTo(e,t)}
handleInPlaceStall(e){
const t=this.schedule,i=this.primaryMedia;
if(!t||!i)return;
const n=i.currentTime,r=t.findAssetIndex(e,n),a=e.assetList[r];
if(a){
const o=this.getAssetPlayer(a.identifier);
if(o){
const u=o.currentTime||n-a.timelineStart,l=o.duration-u;
if(this.warn(`Stalled at ${
u}
 of ${
u+l}
 in ${
o}
 ${
e}
 (media.currentTime: ${
n}
)`),u&&(l/i.playbackRate<.5||o.bufferedInPlaceToEnd(i))&&o.hls){
const c=t.findEventIndex(e.identifier);
this.advanceAfterAssetEnded(e,c,r)}
}
}
}
advanceInPlace(e){
const t=this.primaryMedia;
t&&t.currentTime<e&&(t.currentTime=e)}
handleAssetItemError(e,t,i,n,r){
if(e.details===b.BUFFER_STALLED_ERROR)return;
const a=t.assetList[n]||null;
if(this.warn(`INTERSTITIAL_ASSET_ERROR ${
a&&pi(a)}
 ${
e.error}
`),!this.schedule)return;
const o=(a==null?void 0:a.identifier)||"",u=this.getAssetPlayerQueueIndex(o),l=this.playerQueue[u]||null,c=this.schedule.items,d=ue({
}
,e,{
fatal:!1,errorAction:Mi(!0),asset:a,assetListIndex:n,event:t,schedule:c,scheduleIndex:i,player:l}
);
if(this.hls.trigger(x.INTERSTITIAL_ASSET_ERROR,d),!e.fatal)return;
const h=this.playingAsset,f=this.bufferingAsset,m=new Error(r);
if(a&&(this.clearAssetPlayer(o,null),a.error=m),!t.assetList.some(p=>!p.error))t.error=m;
else for(let p=n;
p<t.assetList.length;
p++)this.resetAssetPlayer(t.assetList[p].identifier);
this.updateSchedule(!0),t.error?this.primaryFallback(t):h&&h.identifier===o?this.advanceAfterAssetEnded(t,i,n):f&&f.identifier===o&&this.isInterstitial(this.bufferingItem)&&this.advanceAssetBuffering(this.bufferingItem,f)}
primaryFallback(e){
const t=e.timelineStart,i=this.effectivePlayingItem;
let n=this.timelinePos;
if(i){
this.log(`Fallback to primary from event "${
e.identifier}
" start: ${
t}
 pos: ${
n}
 playing: ${
bt(i)}
 error: ${
e.error}
`),n===-1&&(n=this.hls.startPosition);
const a=this.updateItem(i,n);
this.itemsMatch(i,a)&&this.clearInterstitial(e,null),e.appendInPlace&&(this.attachPrimary(t,null),this.flushFrontBuffer(t))}
else if(n===-1){
this.checkStart();
return}
if(!this.schedule)return;
const r=this.schedule.findItemIndexAtTime(n);
this.setSchedulePosition(r)}
onAssetListLoaded(e,t){
var i,n;
const r=t.event,a=r.identifier,o=t.assetListResponse.ASSETS;
if(!((i=this.schedule)!=null&&i.hasEvent(a)))return;
const u=r.timelineStart,l=r.duration;
let c=0;
o.forEach((p,E)=>{
const v=parseFloat(p.DURATION);
this.createAsset(r,E,c,u+c,v,p.URI),c+=v}
),r.duration=c,this.log(`Loaded asset-list with duration: ${
c}
 (was: ${
l}
) ${
r}
`);
const d=this.waitingItem,h=(d==null?void 0:d.event.identifier)===a;
this.updateSchedule();
const f=(n=this.bufferingItem)==null?void 0:n.event;
if(h){
var m;
const p=this.schedule.findEventIndex(a),E=(m=this.schedule.items)==null?void 0:m[p];
if(E){
if(!this.playingItem&&this.timelinePos>E.end&&this.schedule.findItemIndexAtTime(this.timelinePos)!==p){
r.error=new Error(`Interstitial ${
o.length?"no longer within playback range":"asset-list is empty"}
 ${
this.timelinePos}
 ${
r}
`),this.log(r.error.message),this.updateSchedule(!0),this.primaryFallback(r);
return}
this.setBufferingItem(E)}
this.setSchedulePosition(p)}
else if((f==null?void 0:f.identifier)===a){
const p=r.assetList[0];
if(p){
const E=this.getAssetPlayer(p.identifier);
if(f.appendInPlace){
const v=this.primaryMedia;
E&&v&&this.bufferAssetPlayer(E,v)}
else E&&E.loadSource()}
}
}
onError(e,t){
if(this.schedule)switch(t.details){
case b.ASSET_LIST_PARSING_ERROR:case b.ASSET_LIST_LOAD_ERROR:case b.ASSET_LIST_LOAD_TIMEOUT:{
const i=t.interstitial;
i&&(this.updateSchedule(!0),this.primaryFallback(i));
break}
case b.BUFFER_STALLED_ERROR:{
const i=this.endedItem||this.waitingItem||this.playingItem;
if(this.isInterstitial(i)&&i.event.appendInPlace){
this.handleInPlaceStall(i.event);
return}
this.log(`Primary player stall @${
this.timelinePos}
 bufferedPos: ${
this.bufferedPos}
`),this.onTimeupdate(),this.checkBuffer(!0);
break}
}
}
}
const rf=500;
class r1 extends Ac{
constructor(e,t,i){
super(e,t,i,"subtitle-stream-controller",H.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this.registerListeners()}
onHandlerDestroying(){
this.unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}
registerListeners(){
super.registerListeners();
const{
hls:e}
=this;
e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(x.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this)}
unregisterListeners(){
super.unregisterListeners();
const{
hls:e}
=this;
e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(x.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this)}
startLoad(e,t){
this.stopLoad(),this.state=P.IDLE,this.setInterval(rf),this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}
onManifestLoading(){
super.onManifestLoading(),this.mainDetails=null}
onMediaDetaching(e,t){
this.tracksBuffered=[],super.onMediaDetaching(e,t)}
onLevelLoaded(e,t){
this.mainDetails=t.details}
onSubtitleFragProcessed(e,t){
const{
frag:i,success:n}
=t;
if(this.fragContextChanged(i)||(Ae(i)&&(this.fragPrevious=i),this.state=P.IDLE),!n)return;
const r=this.tracksBuffered[this.currentTrackId];
if(!r)return;
let a;
const o=i.start;
for(let l=0;
l<r.length;
l++)if(o>=r[l].start&&o<=r[l].end){
a=r[l];
break}
const u=i.start+i.duration;
a?a.end=u:(a={
start:o,end:u}
,r.push(a)),this.fragmentTracker.fragBuffered(i),this.fragBufferedComplete(i,null),this.media&&this.tick()}
onBufferFlushing(e,t){
const{
startOffset:i,endOffset:n}
=t;
if(i===0&&n!==Number.POSITIVE_INFINITY){
const r=n-1;
if(r<=0)return;
t.endOffsetSubtitles=Math.max(0,r),this.tracksBuffered.forEach(a=>{
for(let o=0;
o<a.length;
){
if(a[o].end<=r){
a.shift();
continue}
else if(a[o].start<r)a[o].start=r;
else break;
o++}
}
),this.fragmentTracker.removeFragmentsInRange(i,r,H.SUBTITLE)}
}
onError(e,t){
const i=t.frag;
(i==null?void 0:i.type)===H.SUBTITLE&&(t.details===b.FRAG_GAP&&this.fragmentTracker.fragBuffered(i,!0),this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==P.STOPPED&&(this.state=P.IDLE))}
onSubtitleTracksUpdated(e,{
subtitleTracks:t}
){
if(this.levels&&Bg(this.levels,t)){
this.levels=t.map(i=>new Wn(i));
return}
this.tracksBuffered=[],this.levels=t.map(i=>{
const n=new Wn(i);
return this.tracksBuffered[n.id]=[],n}
),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,H.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}
onSubtitleTrackSwitch(e,t){
var i;
if(this.currentTrackId=t.id,!((i=this.levels)!=null&&i.length)||this.currentTrackId===-1){
this.clearInterval();
return}
const n=this.levels[this.currentTrackId];
n!=null&&n.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,n&&this.state!==P.STOPPED&&this.setInterval(rf)}
onSubtitleTrackLoaded(e,t){
var i;
const{
currentTrackId:n,levels:r}
=this,{
details:a,id:o}
=t;
if(!r){
this.warn(`Subtitle tracks were reset while loading level ${
o}
`);
return}
const u=r[o];
if(o>=r.length||!u)return;
this.log(`Subtitle track ${
o}
 loaded [${
a.startSN}
,${
a.endSN}
]${
a.lastPartSn?`[part-${
a.lastPartSn}
-${
a.lastPartIndex}
]`:""}
,duration:${
a.totalduration}
`),this.mediaBuffer=this.mediaBufferTimeRanges;
let l=0;
if(a.live||(i=u.details)!=null&&i.live){
if(a.deltaUpdateFailed)return;
const d=this.mainDetails;
if(!d){
this.startFragRequested=!1;
return}
const h=d.fragments[0];
if(!u.details)a.hasProgramDateTime&&d.hasProgramDateTime?(Ua(a,d),l=a.fragmentStart):h&&(l=h.start,uu(a,l));
else{
var c;
l=this.alignPlaylists(a,u.details,(c=this.levelLastLoaded)==null?void 0:c.details),l===0&&h&&(l=h.start,uu(a,l))}
d&&!this.startFragRequested&&this.setStartPosition(d,l)}
u.details=a,this.levelLastLoaded=u,o===n&&(this.hls.trigger(x.SUBTITLE_TRACK_UPDATED,{
details:a,id:o,groupId:t.groupId}
),this.tick(),a.live&&!this.fragCurrent&&this.media&&this.state===P.IDLE&&(ai(null,a.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),u.details=void 0)))}
_handleFragmentLoadComplete(e){
const{
frag:t,payload:i}
=e,n=t.decryptdata,r=this.hls;
if(!this.fragContextChanged(t)&&i&&i.byteLength>0&&n!=null&&n.key&&n.iv&&Fi(n.method)){
const a=performance.now();
this.decrypter.decrypt(new Uint8Array(i),n.key.buffer,n.iv.buffer,Ic(n.method)).catch(o=>{
throw r.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.FRAG_DECRYPT_ERROR,fatal:!1,error:o,reason:o.message,frag:t}
),o}
).then(o=>{
const u=performance.now();
r.trigger(x.FRAG_DECRYPTED,{
frag:t,payload:o,stats:{
tstart:a,tdecrypt:u}
}
)}
).catch(o=>{
this.warn(`${
o.name}
: ${
o.message}
`),this.state=P.IDLE}
)}
}
doTick(){
if(!this.media){
this.state=P.IDLE;
return}
if(this.state===P.IDLE){
const{
currentTrackId:e,levels:t}
=this,i=t==null?void 0:t[e];
if(!i||!t.length||!i.details||this.waitForLive(i))return;
const{
config:n}
=this,r=this.getLoadPosition(),a=X.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],r,n.maxBufferHole),{
end:o,len:u}
=a,l=i.details,c=this.hls.maxBufferLength+l.levelTargetDuration;
if(u>c)return;
const d=l.fragments,h=d.length,f=l.edge;
let m=null;
const p=this.fragPrevious;
if(o<f){
const y=n.maxFragLookUpTolerance,S=o>f-y?0:y;
m=ai(p,d,Math.max(d[0].start,o),S),!m&&p&&p.start<d[0].start&&(m=d[0])}
else m=d[h-1];
if(m=this.filterReplacedPrimary(m,i.details),!m)return;
const E=m.sn-l.startSN,v=d[E-1];
if(v&&v.cc===m.cc&&this.fragmentTracker.getState(v)===be.NOT_LOADED&&(m=v),this.fragmentTracker.getState(m)===be.NOT_LOADED){
const y=this.mapToInitFragWhenRequired(m);
y&&this.loadFragment(y,i,o)}
}
}
loadFragment(e,t,i){
Ae(e)?super.loadFragment(e,t,i):this._loadInitSegment(e,t)}
get mediaBufferTimeRanges(){
return new a1(this.tracksBuffered[this.currentTrackId]||[])}
}
class a1{
constructor(e){
this.buffered=void 0;
const t=(i,n,r)=>{
if(n=n>>>0,n>r-1)throw new DOMException(`Failed to execute '${
i}
' on 'TimeRanges': The index provided (${
n}
) is greater than the maximum bound (${
r}
)`);
return e[n][i]}
;
this.buffered={
get length(){
return e.length}
,end(i){
return t("end",i,e.length)}
,start(i){
return t("start",i,e.length)}
}
}
}
const o1={
42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499}
,tp=s=>String.fromCharCode(o1[s]||s),Ct=15,Jt=100,l1={
17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14}
,u1={
17:2,18:4,21:6,22:8,23:10,19:13,20:15}
,c1={
25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14}
,d1={
25:2,26:4,29:6,30:8,31:10,27:13,28:15}
,h1=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];
class f1{
constructor(){
this.time=null,this.verboseLevel=0}
log(e,t){
if(this.verboseLevel>=e){
const i=typeof t=="function"?t():t;
oe.log(`${
this.time}
 [${
e}
] ${
i}
`)}
}
}
const Ks=function(e){
const t=[];
for(let i=0;
i<e.length;
i++)t.push(e[i].toString(16));
return t}
;
class sp{
constructor(){
this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}
reset(){
this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}
setStyles(e){
const t=["foreground","underline","italics","background","flash"];
for(let i=0;
i<t.length;
i++){
const n=t[i];
e.hasOwnProperty(n)&&(this[n]=e[n])}
}
isDefault(){
return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}
equals(e){
return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}
copy(e){
this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}
toString(){
return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}
}
class m1{
constructor(){
this.uchar=" ",this.penState=new sp}
reset(){
this.uchar=" ",this.penState.reset()}
setChar(e,t){
this.uchar=e,this.penState.copy(t)}
setPenState(e){
this.penState.copy(e)}
equals(e){
return this.uchar===e.uchar&&this.penState.equals(e.penState)}
copy(e){
this.uchar=e.uchar,this.penState.copy(e.penState)}
isEmpty(){
return this.uchar===" "&&this.penState.isDefault()}
}
class g1{
constructor(e){
this.chars=[],this.pos=0,this.currPenState=new sp,this.cueStartTime=null,this.logger=void 0;
for(let t=0;
t<Jt;
t++)this.chars.push(new m1);
this.logger=e}
equals(e){
for(let t=0;
t<Jt;
t++)if(!this.chars[t].equals(e.chars[t]))return!1;
return!0}
copy(e){
for(let t=0;
t<Jt;
t++)this.chars[t].copy(e.chars[t])}
isEmpty(){
let e=!0;
for(let t=0;
t<Jt;
t++)if(!this.chars[t].isEmpty()){
e=!1;
break}
return e}
setCursor(e){
this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>Jt&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=Jt)}
moveCursor(e){
const t=this.pos+e;
if(e>1)for(let i=this.pos+1;
i<t+1;
i++)this.chars[i].setPenState(this.currPenState);
this.setCursor(t)}
backSpace(){
this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}
insertChar(e){
e>=144&&this.backSpace();
const t=tp(e);
if(this.pos>=Jt){
this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");
return}
this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}
clearFromPos(e){
let t;
for(t=e;
t<Jt;
t++)this.chars[t].reset()}
clear(){
this.clearFromPos(0),this.pos=0,this.currPenState.reset()}
clearToEndOfRow(){
this.clearFromPos(this.pos)}
getTextString(){
const e=[];
let t=!0;
for(let i=0;
i<Jt;
i++){
const n=this.chars[i].uchar;
n!==" "&&(t=!1),e.push(n)}
return t?"":e.join("")}
setPenStyles(e){
this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}
}
class Zo{
constructor(e){
this.rows=[],this.currRow=Ct-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;
for(let t=0;
t<Ct;
t++)this.rows.push(new g1(e));
this.logger=e}
reset(){
for(let e=0;
e<Ct;
e++)this.rows[e].clear();
this.currRow=Ct-1}
equals(e){
let t=!0;
for(let i=0;
i<Ct;
i++)if(!this.rows[i].equals(e.rows[i])){
t=!1;
break}
return t}
copy(e){
for(let t=0;
t<Ct;
t++)this.rows[t].copy(e.rows[t])}
isEmpty(){
let e=!0;
for(let t=0;
t<Ct;
t++)if(!this.rows[t].isEmpty()){
e=!1;
break}
return e}
backSpace(){
this.rows[this.currRow].backSpace()}
clearToEndOfRow(){
this.rows[this.currRow].clearToEndOfRow()}
insertChar(e){
this.rows[this.currRow].insertChar(e)}
setPen(e){
this.rows[this.currRow].setPenStyles(e)}
moveCursor(e){
this.rows[this.currRow].moveCursor(e)}
setCursor(e){
this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}
setPAC(e){
this.logger.log(2,()=>"pacData = "+de(e));
let t=e.row-1;
if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){
for(let o=0;
o<Ct;
o++)this.rows[o].clear();
const r=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;
if(a){
const o=a.rows[r].cueStartTime,u=this.logger.time;
if(o!==null&&u!==null&&o<u)for(let l=0;
l<this.nrRollUpRows;
l++)this.rows[t-this.nrRollUpRows+l+1].copy(a.rows[r+l])}
}
this.currRow=t;
const i=this.rows[this.currRow];
if(e.indent!==null){
const r=e.indent,a=Math.max(r-1,0);
i.setCursor(e.indent),e.color=i.chars[a].penState.foreground}
const n={
foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1}
;
this.setPen(n)}
setBkgData(e){
this.logger.log(2,()=>"bkgData = "+de(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}
setRollUpRows(e){
this.nrRollUpRows=e}
rollUp(){
if(this.nrRollUpRows===null){
this.logger.log(3,"roll_up but nrRollUpRows not set yet");
return}
this.logger.log(1,()=>this.getDisplayText());
const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];
t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}
getDisplayText(e){
e=e||!1;
const t=[];
let i="",n=-1;
for(let r=0;
r<Ct;
r++){
const a=this.rows[r].getTextString();
a&&(n=r+1,e?t.push("Row "+n+": '"+a+"'"):t.push(a.trim()))}
return t.length>0&&(e?i="["+t.join(" | ")+"]":i=t.join(`
`)),i}
getTextAndFormat(){
return this.rows}
}
class af{
constructor(e,t,i){
this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new Zo(i),this.nonDisplayedMemory=new Zo(i),this.lastOutputScreen=new Zo(i),this.currRollUpRow=this.displayedMemory.rows[Ct-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=i}
reset(){
this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[Ct-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}
getHandler(){
return this.outputFilter}
setHandler(e){
this.outputFilter=e}
setPAC(e){
this.writeScreen.setPAC(e)}
setBkgData(e){
this.writeScreen.setBkgData(e)}
setMode(e){
e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}
insertChars(e){
for(let i=0;
i<e.length;
i++)this.writeScreen.insertChar(e[i]);
const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";
this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}
ccRCL(){
this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}
ccBS(){
this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}
ccAOF(){
}
ccAON(){
}
ccDER(){
this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}
ccRU(e){
this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}
ccFON(){
this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({
flash:!0}
)}
ccRDC(){
this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}
ccTR(){
this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}
ccRTD(){
this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}
ccEDM(){
this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}
ccCR(){
this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}
ccENM(){
this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}
ccEOC(){
if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){
const e=this.displayedMemory;
this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}
this.outputDataUpdate(!0)}
ccTO(e){
this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}
ccMIDROW(e){
const t={
flash:!1}
;
if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";
else{
const i=Math.floor(e/2)-16,n=["white","green","blue","cyan","red","yellow","magenta"];
t.foreground=n[i]}
this.logger.log(2,"MIDROW: "+de(t)),this.writeScreen.setPen(t)}
outputDataUpdate(e=!1){
const t=this.logger.time;
t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}
cueSplitAtTime(e){
this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}
}
class of{
constructor(e,t,i){
this.channels=void 0,this.currentChannel=0,this.cmdHistory=y1(),this.logger=void 0;
const n=this.logger=new f1;
this.channels=[null,new af(e,t,n),new af(e+1,i,n)]}
getHandler(e){
return this.channels[e].getHandler()}
setHandler(e,t){
this.channels[e].setHandler(t)}
addData(e,t){
this.logger.time=e;
for(let i=0;
i<t.length;
i+=2){
const n=t[i]&127,r=t[i+1]&127;
let a=!1,o=null;
if(n===0&&r===0)continue;
this.logger.log(3,()=>"["+Ks([t[i],t[i+1]])+"] -> ("+Ks([n,r])+")");
const u=this.cmdHistory;
if(n>=16&&n<=31){
if(p1(n,r,u)){
Pr(null,null,u),this.logger.log(3,()=>"Repeated command ("+Ks([n,r])+") is dropped");
continue}
Pr(n,r,this.cmdHistory),a=this.parseCmd(n,r),a||(a=this.parseMidrow(n,r)),a||(a=this.parsePAC(n,r)),a||(a=this.parseBackgroundAttributes(n,r))}
else Pr(null,null,u);
if(!a&&(o=this.parseChars(n,r),o)){
const c=this.currentChannel;
c&&c>0?this.channels[c].insertChars(o):this.logger.log(2,"No channel found yet. TEXT-MODE?")}
!a&&!o&&this.logger.log(2,()=>"Couldn't parse cleaned data "+Ks([n,r])+" orig: "+Ks([t[i],t[i+1]]))}
}
parseCmd(e,t){
const i=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,n=(e===23||e===31)&&t>=33&&t<=35;
if(!(i||n))return!1;
const r=e===20||e===21||e===23?1:2,a=this.channels[r];
return e===20||e===21||e===28||e===29?t===32?a.ccRCL():t===33?a.ccBS():t===34?a.ccAOF():t===35?a.ccAON():t===36?a.ccDER():t===37?a.ccRU(2):t===38?a.ccRU(3):t===39?a.ccRU(4):t===40?a.ccFON():t===41?a.ccRDC():t===42?a.ccTR():t===43?a.ccRTD():t===44?a.ccEDM():t===45?a.ccCR():t===46?a.ccENM():t===47&&a.ccEOC():a.ccTO(t-32),this.currentChannel=r,!0}
parseMidrow(e,t){
let i=0;
if((e===17||e===25)&&t>=32&&t<=47){
if(e===17?i=1:i=2,i!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;
const n=this.channels[i];
return n?(n.ccMIDROW(t),this.logger.log(3,()=>"MIDROW ("+Ks([e,t])+")"),!0):!1}
return!1}
parsePAC(e,t){
let i;
const n=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,r=(e===16||e===24)&&t>=64&&t<=95;
if(!(n||r))return!1;
const a=e<=23?1:2;
t>=64&&t<=95?i=a===1?l1[e]:c1[e]:i=a===1?u1[e]:d1[e];
const o=this.channels[a];
return o?(o.setPAC(this.interpretPAC(i,t)),this.currentChannel=a,!0):!1}
interpretPAC(e,t){
let i;
const n={
color:null,italics:!1,indent:null,underline:!1,row:e}
;
return t>95?i=t-96:i=t-64,n.underline=(i&1)===1,i<=13?n.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(i/2)]:i<=15?(n.italics=!0,n.color="white"):n.indent=Math.floor((i-16)/2)*4,n}
parseChars(e,t){
let i,n=null,r=null;
if(e>=25?(i=2,r=e-8):(i=1,r=e),r>=17&&r<=19){
let a;
r===17?a=t+80:r===18?a=t+112:a=t+144,this.logger.log(2,()=>"Special char '"+tp(a)+"' in channel "+i),n=[a]}
else e>=32&&e<=127&&(n=t===0?[e]:[e,t]);
return n&&this.logger.log(3,()=>"Char codes =  "+Ks(n).join(",")),n}
parseBackgroundAttributes(e,t){
const i=(e===16||e===24)&&t>=32&&t<=47,n=(e===23||e===31)&&t>=45&&t<=47;
if(!(i||n))return!1;
let r;
const a={
}
;
e===16||e===24?(r=Math.floor((t-32)/2),a.background=h1[r],t%2===1&&(a.background=a.background+"_semi")):t===45?a.background="transparent":(a.foreground="black",t===47&&(a.underline=!0));
const o=e<=23?1:2;
return this.channels[o].setBkgData(a),!0}
reset(){
for(let e=0;
e<Object.keys(this.channels).length;
e++){
const t=this.channels[e];
t&&t.reset()}
Pr(null,null,this.cmdHistory)}
cueSplitAtTime(e){
for(let t=0;
t<this.channels.length;
t++){
const i=this.channels[t];
i&&i.cueSplitAtTime(e)}
}
}
function Pr(s,e,t){
t.a=s,t.b=e}
function p1(s,e,t){
return t.a===s&&t.b===e}
function y1(){
return{
a:null,b:null}
}
var Fc=function(){
if(Fa!=null&&Fa.VTTCue)return self.VTTCue;
const s=["","lr","rl"],e=["start","middle","end","left","right"];
function t(o,u){
if(typeof u!="string"||!Array.isArray(o))return!1;
const l=u.toLowerCase();
return~o.indexOf(l)?l:!1}
function i(o){
return t(s,o)}
function n(o){
return t(e,o)}
function r(o,...u){
let l=1;
for(;
l<arguments.length;
l++){
const c=arguments[l];
for(const d in c)o[d]=c[d]}
return o}
function a(o,u,l){
const c=this,d={
enumerable:!0}
;
c.hasBeenReset=!1;
let h="",f=!1,m=o,p=u,E=l,v=null,y="",S=!0,T="auto",I="start",_=50,L="middle",R=50,w="middle";
Object.defineProperty(c,"id",r({
}
,d,{
get:function(){
return h}
,set:function(A){
h=""+A}
}
)),Object.defineProperty(c,"pauseOnExit",r({
}
,d,{
get:function(){
return f}
,set:function(A){
f=!!A}
}
)),Object.defineProperty(c,"startTime",r({
}
,d,{
get:function(){
return m}
,set:function(A){
if(typeof A!="number")throw new TypeError("Start time must be set to a number.");
m=A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"endTime",r({
}
,d,{
get:function(){
return p}
,set:function(A){
if(typeof A!="number")throw new TypeError("End time must be set to a number.");
p=A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"text",r({
}
,d,{
get:function(){
return E}
,set:function(A){
E=""+A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"region",r({
}
,d,{
get:function(){
return v}
,set:function(A){
v=A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"vertical",r({
}
,d,{
get:function(){
return y}
,set:function(A){
const D=i(A);
if(D===!1)throw new SyntaxError("An invalid or illegal string was specified.");
y=D,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"snapToLines",r({
}
,d,{
get:function(){
return S}
,set:function(A){
S=!!A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"line",r({
}
,d,{
get:function(){
return T}
,set:function(A){
if(typeof A!="number"&&A!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");
T=A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"lineAlign",r({
}
,d,{
get:function(){
return I}
,set:function(A){
const D=n(A);
if(!D)throw new SyntaxError("An invalid or illegal string was specified.");
I=D,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"position",r({
}
,d,{
get:function(){
return _}
,set:function(A){
if(A<0||A>100)throw new Error("Position must be between 0 and 100.");
_=A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"positionAlign",r({
}
,d,{
get:function(){
return L}
,set:function(A){
const D=n(A);
if(!D)throw new SyntaxError("An invalid or illegal string was specified.");
L=D,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"size",r({
}
,d,{
get:function(){
return R}
,set:function(A){
if(A<0||A>100)throw new Error("Size must be between 0 and 100.");
R=A,this.hasBeenReset=!0}
}
)),Object.defineProperty(c,"align",r({
}
,d,{
get:function(){
return w}
,set:function(A){
const D=n(A);
if(!D)throw new SyntaxError("An invalid or illegal string was specified.");
w=D,this.hasBeenReset=!0}
}
)),c.displayState=void 0}
return a.prototype.getCueAsHTML=function(){
return self.WebVTT.convertCueToDOMTree(self,this.text)}
,a}
();
class v1{
decode(e,t){
if(!e)return"";
if(typeof e!="string")throw new Error("Error - expected string data.");
return decodeURIComponent(encodeURIComponent(e))}
}
function ip(s){
function e(i,n,r,a){
return(i|0)*3600+(n|0)*60+(r|0)+parseFloat(a||0)}
const t=s.match(/^(?:(\d+):)?(\d{
2}
):(\d{
2}
)(\.\d+)?/);
return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}
class x1{
constructor(){
this.values=Object.create(null)}
set(e,t){
!this.get(e)&&t!==""&&(this.values[e]=t)}
get(e,t,i){
return i?this.has(e)?this.values[e]:t[i]:this.has(e)?this.values[e]:t}
has(e){
return e in this.values}
alt(e,t,i){
for(let n=0;
n<i.length;
++n)if(t===i[n]){
this.set(e,t);
break}
}
integer(e,t){
/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}
percent(e,t){
if(/^([\d]{
1,3}
)(\.[\d]*)?%$/.test(t)){
const i=parseFloat(t);
if(i>=0&&i<=100)return this.set(e,i),!0}
return!1}
}
function np(s,e,t,i){
const n=i?s.split(i):[s];
for(const r in n){
if(typeof n[r]!="string")continue;
const a=n[r].split(t);
if(a.length!==2)continue;
const o=a[0],u=a[1];
e(o,u)}
}
const yu=new Fc(0,0,""),Nr=yu.align==="middle"?"middle":"center";
function E1(s,e,t){
const i=s;
function n(){
const o=ip(s);
if(o===null)throw new Error("Malformed timestamp: "+i);
return s=s.replace(/^[^\sa-zA-Z-]+/,""),o}
function r(o,u){
const l=new x1;
np(o,function(h,f){
let m;
switch(h){
case"region":for(let p=t.length-1;
p>=0;
p--)if(t[p].id===f){
l.set(h,t[p].region);
break}
break;
case"vertical":l.alt(h,f,["rl","lr"]);
break;
case"line":m=f.split(","),l.integer(h,m[0]),l.percent(h,m[0])&&l.set("snapToLines",!1),l.alt(h,m[0],["auto"]),m.length===2&&l.alt("lineAlign",m[1],["start",Nr,"end"]);
break;
case"position":m=f.split(","),l.percent(h,m[0]),m.length===2&&l.alt("positionAlign",m[1],["start",Nr,"end","line-left","line-right","auto"]);
break;
case"size":l.percent(h,f);
break;
case"align":l.alt(h,f,["start",Nr,"end","left","right"]);
break}
}
,/:/,/\s/),u.region=l.get("region",null),u.vertical=l.get("vertical","");
let c=l.get("line","auto");
c==="auto"&&yu.line===-1&&(c=-1),u.line=c,u.lineAlign=l.get("lineAlign","start"),u.snapToLines=l.get("snapToLines",!0),u.size=l.get("size",100),u.align=l.get("align",Nr);
let d=l.get("position","auto");
d==="auto"&&yu.position===50&&(d=u.align==="start"||u.align==="left"?0:u.align==="end"||u.align==="right"?100:50),u.position=d}
function a(){
s=s.replace(/^\s+/,"")}
if(a(),e.startTime=n(),a(),s.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+i);
s=s.slice(3),a(),e.endTime=n(),a(),r(s,e)}
function rp(s){
return s.replace(/<br(?: \/)?>/gi,`
`)}
class S1{
constructor(){
this.state="INITIAL",this.buffer="",this.decoder=new v1,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}
parse(e){
const t=this;
e&&(t.buffer+=t.decoder.decode(e,{
stream:!0}
));
function i(){
let r=t.buffer,a=0;
for(r=rp(r);
a<r.length&&r[a]!=="\r"&&r[a]!==`
`;
)++a;
const o=r.slice(0,a);
return r[a]==="\r"&&++a,r[a]===`
`&&++a,t.buffer=r.slice(a),o}
function n(r){
np(r,function(a,o){
}
,/:/)}
try{
let r="";
if(t.state==="INITIAL"){
if(!/\r\n|\n/.test(t.buffer))return this;
r=i();
const o=r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
if(!(o!=null&&o[0]))throw new Error("Malformed WebVTT signature.");
t.state="HEADER"}
let a=!1;
for(;
t.buffer;
){
if(!/\r\n|\n/.test(t.buffer))return this;
switch(a?a=!1:r=i(),t.state){
case"HEADER":/:/.test(r)?n(r):r||(t.state="ID");
continue;
case"NOTE":r||(t.state="ID");
continue;
case"ID":if(/^NOTE($|[ \t])/.test(r)){
t.state="NOTE";
break}
if(!r)continue;
if(t.cue=new Fc(0,0,""),t.state="CUE",r.indexOf("-->")===-1){
t.cue.id=r;
continue}
case"CUE":if(!t.cue){
t.state="BADCUE";
continue}
try{
E1(r,t.cue,t.regionList)}
catch{
t.cue=null,t.state="BADCUE";
continue}
t.state="CUETEXT";
continue;
case"CUETEXT":{
const o=r.indexOf("-->")!==-1;
if(!r||o&&(a=!0)){
t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";
continue}
if(t.cue===null)continue;
t.cue.text&&(t.cue.text+=`
`),t.cue.text+=r}
continue;
case"BADCUE":r||(t.state="ID")}
}
}
catch{
t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}
return this}
flush(){
const e=this;
try{
if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}
catch(t){
e.onparsingerror&&e.onparsingerror(t)}
return e.onflush&&e.onflush(),this}
}
const T1=/\r\n|\n\r|\n|\r/g,Jo=function(e,t,i=0){
return e.slice(i,i+t.length)===t}
,I1=function(e){
let t=parseInt(e.slice(-3));
const i=parseInt(e.slice(-6,-4)),n=parseInt(e.slice(-9,-7)),r=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;
if(!j(t)||!j(i)||!j(n)||!j(r))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${
e}
`);
return t+=1e3*i,t+=60*1e3*n,t+=60*60*1e3*r,t}
;
function Uc(s,e,t){
return _n(s.toString())+_n(e.toString())+_n(t)}
const L1=function(e,t,i){
let n=e[t],r=e[n.prevCC];
if(!r||!r.new&&n.new){
e.ccOffset=e.presentationOffset=n.start,n.new=!1;
return}
for(;
(a=r)!=null&&a.new;
){
var a;
e.ccOffset+=n.start-r.start,n.new=!1,n=r,r=e[n.prevCC]}
e.presentationOffset=i}
;
function A1(s,e,t,i,n,r,a){
const o=new S1,u=mt(new Uint8Array(s)).trim().replace(T1,`
`).split(`
`),l=[],c=e?CS(e.baseTime,e.timescale):0;
let d="00:00.000",h=0,f=0,m,p=!0;
o.oncue=function(E){
const v=t[i];
let y=t.ccOffset;
const S=(h-c)/9e4;
if(v!=null&&v.new&&(f!==void 0?y=t.ccOffset=v.start:L1(t,i,S)),S){
if(!e){
m=new Error("Missing initPTS for VTT MPEGTS");
return}
y=S-t.presentationOffset}
const T=E.endTime-E.startTime,I=lt((E.startTime+y-f)*9e4,n*9e4)/9e4;
E.startTime=Math.max(I,0),E.endTime=Math.max(I+T,0);
const _=E.text.trim();
E.text=decodeURIComponent(encodeURIComponent(_)),E.id||(E.id=Uc(E.startTime,E.endTime,_)),E.endTime>0&&l.push(E)}
,o.onparsingerror=function(E){
m=E}
,o.onflush=function(){
if(m){
a(m);
return}
r(l)}
,u.forEach(E=>{
if(p)if(Jo(E,"X-TIMESTAMP-MAP=")){
p=!1,E.slice(16).split(",").forEach(v=>{
Jo(v,"LOCAL:")?d=v.slice(6):Jo(v,"MPEGTS:")&&(h=parseInt(v.slice(7)))}
);
try{
f=I1(d)/1e3}
catch(v){
m=v}
return}
else E===""&&(p=!1);
o.parse(E+`
`)}
),o.flush()}
const el="stpp.ttml.im1t",ap=/^(\d{
2,}
):(\d{
2}
):(\d{
2}
):(\d{
2}
)\.?(\d+)?$/,op=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,R1={
left:"start",center:"center",right:"end",start:"start",end:"end"}
;
function lf(s,e,t,i){
const n=ee(new Uint8Array(s),["mdat"]);
if(n.length===0){
i(new Error("Could not parse IMSC1 mdat"));
return}
const r=n.map(o=>mt(o)),a=bS(e.baseTime,1,e.timescale);
try{
r.forEach(o=>t(_1(o,a)))}
catch(o){
i(o)}
}
function _1(s,e){
const n=new DOMParser().parseFromString(s,"text/xml").getElementsByTagName("tt")[0];
if(!n)throw new Error("Invalid ttml");
const r={
frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0}
,a=Object.keys(r).reduce((d,h)=>(d[h]=n.getAttribute(`ttp:${
h}
`)||r[h],d),{
}
),o=n.getAttribute("xml:space")!=="preserve",u=uf(tl(n,"styling","style")),l=uf(tl(n,"layout","region")),c=tl(n,"body","[begin]");
return[].map.call(c,d=>{
const h=lp(d,o);
if(!h||!d.hasAttribute("begin"))return null;
const f=il(d.getAttribute("begin"),a),m=il(d.getAttribute("dur"),a);
let p=il(d.getAttribute("end"),a);
if(f===null)throw cf(d);
if(p===null){
if(m===null)throw cf(d);
p=f+m}
const E=new Fc(f-e,p-e,h);
E.id=Uc(E.startTime,E.endTime,E.text);
const v=l[d.getAttribute("region")],y=u[d.getAttribute("style")],S=w1(v,y,u),{
textAlign:T}
=S;
if(T){
const I=R1[T];
I&&(E.lineAlign=I),E.align=T}
return ue(E,S),E}
).filter(d=>d!==null)}
function tl(s,e,t){
const i=s.getElementsByTagName(e)[0];
return i?[].slice.call(i.querySelectorAll(t)):[]}
function uf(s){
return s.reduce((e,t)=>{
const i=t.getAttribute("xml:id");
return i&&(e[i]=t),e}
,{
}
)}
function lp(s,e){
return[].slice.call(s.childNodes).reduce((t,i,n)=>{
var r;
return i.nodeName==="br"&&n?t+`
`:(r=i.childNodes)!=null&&r.length?lp(i,e):e?t+i.textContent.trim().replace(/\s+/g," "):t+i.textContent}
,"")}
function w1(s,e,t){
const i="http://www.w3.org/ns/ttml#styling";
let n=null;
const r=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],a=s!=null&&s.hasAttribute("style")?s.getAttribute("style"):null;
return a&&t.hasOwnProperty(a)&&(n=t[a]),r.reduce((o,u)=>{
const l=sl(e,i,u)||sl(s,i,u)||sl(n,i,u);
return l&&(o[u]=l),o}
,{
}
)}
function sl(s,e,t){
return s&&s.hasAttributeNS(e,t)?s.getAttributeNS(e,t):null}
function cf(s){
return new Error(`Could not parse ttml timestamp ${
s}
`)}
function il(s,e){
if(!s)return null;
let t=ip(s);
return t===null&&(ap.test(s)?t=k1(s,e):op.test(s)&&(t=b1(s,e))),t}
function k1(s,e){
const t=ap.exec(s),i=(t[4]|0)+(t[5]|0)/e.subFrameRate;
return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+i/e.frameRate}
function b1(s,e){
const t=op.exec(s),i=Number(t[1]);
switch(t[2]){
case"h":return i*3600;
case"m":return i*60;
case"ms":return i*1e3;
case"f":return i/e.frameRate;
case"t":return i/e.tickRate}
return i}
class Or{
constructor(e,t){
this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}
dispatchCue(){
this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}
newCue(e,t,i){
(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=i,this.timelineController.createCaptionsTrack(this.trackName)}
reset(){
this.cueRanges=[],this.startTime=null}
}
class C1{
constructor(e){
this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={
}
,this.nonNativeCaptionsTracks={
}
,this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=hf(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={
textTrack1:{
label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode}
,textTrack2:{
label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode}
,textTrack3:{
label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode}
,textTrack4:{
label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}
}
,e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(x.FRAG_LOADING,this.onFragLoading,this),e.on(x.FRAG_LOADED,this.onFragLoaded,this),e.on(x.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(x.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(x.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this)}
destroy(){
const{
hls:e}
=this;
e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(x.FRAG_LOADING,this.onFragLoading,this),e.off(x.FRAG_LOADED,this.onFragLoaded,this),e.off(x.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(x.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(x.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.media=null,this.cea608Parser1=this.cea608Parser2=void 0}
initCea608Parsers(){
const e=new Or(this,"textTrack1"),t=new Or(this,"textTrack2"),i=new Or(this,"textTrack3"),n=new Or(this,"textTrack4");
this.cea608Parser1=new of(1,e,t),this.cea608Parser2=new of(3,i,n)}
addCues(e,t,i,n,r){
let a=!1;
for(let o=r.length;
o--;
){
const u=r[o],l=D1(u[0],u[1],t,i);
if(l>=0&&(u[0]=Math.min(u[0],t),u[1]=Math.max(u[1],i),a=!0,l/(i-t)>.5))return}
if(a||r.push([t,i]),this.config.renderTextTracksNatively){
const o=this.captionsTracks[e];
this.Cues.newCue(o,t,i,n)}
else{
const o=this.Cues.newCue(null,t,i,n);
this.hls.trigger(x.CUES_PARSED,{
type:"captions",cues:o,track:e}
)}
}
onInitPtsFound(e,{
frag:t,id:i,initPTS:n,timescale:r,trackId:a}
){
const{
unparsedVttFrags:o}
=this;
i===H.MAIN&&(this.initPTS[t.cc]={
baseTime:n,timescale:r,trackId:a}
),o.length&&(this.unparsedVttFrags=[],o.forEach(u=>{
this.initPTS[u.frag.cc]?this.onFragLoaded(x.FRAG_LOADED,u):this.hls.trigger(x.SUBTITLE_FRAG_PROCESSED,{
success:!1,frag:u.frag,error:new Error("Subtitle discontinuity domain does not match main")}
)}
))}
getExistingTrack(e,t){
const{
media:i}
=this;
if(i)for(let n=0;
n<i.textTracks.length;
n++){
const r=i.textTracks[n];
if(df(r,{
name:e,lang:t,characteristics:"transcribes-spoken-dialog,describes-music-and-sound"}
))return r}
return null}
createCaptionsTrack(e){
this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}
createNativeTrack(e){
if(this.captionsTracks[e])return;
const{
captionsProperties:t,captionsTracks:i,media:n}
=this,{
label:r,languageCode:a}
=t[e],o=this.getExistingTrack(r,a);
if(o)i[e]=o,ki(i[e]),Zg(i[e],n);
else{
const u=this.createTextTrack("captions",r,a);
u&&(u[e]=!0,i[e]=u)}
}
createNonNativeTrack(e){
if(this.nonNativeCaptionsTracks[e])return;
const t=this.captionsProperties[e];
if(!t)return;
const i=t.label,n={
_id:e,label:i,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media}
;
this.nonNativeCaptionsTracks[e]=n,this.hls.trigger(x.NON_NATIVE_TEXT_TRACKS_FOUND,{
tracks:[n]}
)}
createTextTrack(e,t,i){
const n=this.media;
if(n)return n.addTextTrack(e,t,i)}
onMediaAttaching(e,t){
this.media=t.media,t.mediaSource||this._cleanTracks()}
onMediaDetaching(e,t){
const i=!!t.transferMedia;
if(this.media=null,i)return;
const{
captionsTracks:n}
=this;
Object.keys(n).forEach(r=>{
ki(n[r]),delete n[r]}
),this.nonNativeCaptionsTracks={
}
}
onManifestLoading(){
this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=hf(),this._cleanTracks(),this.tracks=[],this.captionsTracks={
}
,this.nonNativeCaptionsTracks={
}
,this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}
_cleanTracks(){
const{
media:e}
=this;
if(!e)return;
const t=e.textTracks;
if(t)for(let i=0;
i<t.length;
i++)ki(t[i])}
onSubtitleTracksUpdated(e,t){
const i=t.subtitleTracks||[],n=i.some(r=>r.textCodec===el);
if(this.config.enableWebVTT||n&&this.config.enableIMSC1){
if(Bg(this.tracks,i)){
this.tracks=i;
return}
if(this.textTracks=[],this.tracks=i,this.config.renderTextTracksNatively){
const a=this.media,o=a?ia(a.textTracks):null;
if(this.tracks.forEach((u,l)=>{
let c;
if(o){
let d=null;
for(let h=0;
h<o.length;
h++)if(o[h]&&df(o[h],u)){
d=o[h],o[h]=null;
break}
d&&(c=d)}
if(c)ki(c);
else{
const d=up(u);
c=this.createTextTrack(d,u.name,u.lang),c&&(c.mode="disabled")}
c&&this.textTracks.push(c)}
),o!=null&&o.length){
const u=o.filter(l=>l!==null).map(l=>l.label);
u.length&&this.hls.logger.warn(`Media element contains unused subtitle tracks: ${
u.join(", ")}
. Replace media element for each source to clear TextTracks and captions menu.`)}
}
else if(this.tracks.length){
const a=this.tracks.map(o=>({
label:o.name,kind:o.type.toLowerCase(),default:o.default,subtitleTrack:o}
));
this.hls.trigger(x.NON_NATIVE_TEXT_TRACKS_FOUND,{
tracks:a}
)}
}
}
onManifestLoaded(e,t){
this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(i=>{
const n=/(?:CC|SERVICE)([1-4])/.exec(i.instreamId);
if(!n)return;
const r=`textTrack${
n[1]}
`,a=this.captionsProperties[r];
a&&(a.label=i.name,i.lang&&(a.languageCode=i.lang),a.media=i)}
)}
closedCaptionsForLevel(e){
const t=this.hls.levels[e.level];
return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}
onFragLoading(e,t){
if(this.enabled&&t.frag.type===H.MAIN){
var i,n;
const{
cea608Parser1:r,cea608Parser2:a,lastSn:o}
=this,{
cc:u,sn:l}
=t.frag,c=(i=(n=t.part)==null?void 0:n.index)!=null?i:-1;
r&&a&&(l!==o+1||l===o&&c!==this.lastPartIndex+1||u!==this.lastCc)&&(r.reset(),a.reset()),this.lastCc=u,this.lastSn=l,this.lastPartIndex=c}
}
onFragLoaded(e,t){
const{
frag:i,payload:n}
=t;
if(i.type===H.SUBTITLE)if(n.byteLength){
const r=i.decryptdata,a="stats"in t;
if(r==null||!r.encrypted||a){
const o=this.tracks[i.level],u=this.vttCCs;
u[i.cc]||(u[i.cc]={
start:i.start,prevCC:this.prevCC,new:!0}
,this.prevCC=i.cc),o&&o.textCodec===el?this._parseIMSC1(i,n):this._parseVTTs(t)}
}
else this.hls.trigger(x.SUBTITLE_FRAG_PROCESSED,{
success:!1,frag:i,error:new Error("Empty subtitle payload")}
)}
_parseIMSC1(e,t){
const i=this.hls;
lf(t,this.initPTS[e.cc],n=>{
this._appendCues(n,e.level),i.trigger(x.SUBTITLE_FRAG_PROCESSED,{
success:!0,frag:e}
)}
,n=>{
i.logger.log(`Failed to parse IMSC1: ${
n}
`),i.trigger(x.SUBTITLE_FRAG_PROCESSED,{
success:!1,frag:e,error:n}
)}
)}
_parseVTTs(e){
var t;
const{
frag:i,payload:n}
=e,{
initPTS:r,unparsedVttFrags:a}
=this,o=r.length-1;
if(!r[i.cc]&&o===-1){
a.push(e);
return}
const u=this.hls,l=(t=i.initSegment)!=null&&t.data?Rt(i.initSegment.data,new Uint8Array(n)).buffer:n;
A1(l,this.initPTS[i.cc],this.vttCCs,i.cc,i.start,c=>{
this._appendCues(c,i.level),u.trigger(x.SUBTITLE_FRAG_PROCESSED,{
success:!0,frag:i}
)}
,c=>{
const d=c.message==="Missing initPTS for VTT MPEGTS";
d?a.push(e):this._fallbackToIMSC1(i,n),u.logger.log(`Failed to parse VTT cue: ${
c}
`),!(d&&o>i.cc)&&u.trigger(x.SUBTITLE_FRAG_PROCESSED,{
success:!1,frag:i,error:c}
)}
)}
_fallbackToIMSC1(e,t){
const i=this.tracks[e.level];
i.textCodec||lf(t,this.initPTS[e.cc],()=>{
i.textCodec=el,this._parseIMSC1(e,t)}
,()=>{
i.textCodec="wvtt"}
)}
_appendCues(e,t){
const i=this.hls;
if(this.config.renderTextTracksNatively){
const n=this.textTracks[t];
if(!n||n.mode==="disabled")return;
e.forEach(r=>Jg(n,r))}
else{
const n=this.tracks[t];
if(!n)return;
const r=n.default?"default":"subtitles"+t;
i.trigger(x.CUES_PARSED,{
type:"subtitles",cues:e,track:r}
)}
}
onFragDecrypted(e,t){
const{
frag:i}
=t;
i.type===H.SUBTITLE&&this.onFragLoaded(x.FRAG_LOADED,t)}
onSubtitleTracksCleared(){
this.tracks=[],this.captionsTracks={
}
}
onFragParsingUserdata(e,t){
if(!this.enabled||!this.config.enableCEA708Captions)return;
const{
frag:i,samples:n}
=t;
if(!(i.type===H.MAIN&&this.closedCaptionsForLevel(i)==="NONE"))for(let r=0;
r<n.length;
r++){
const a=n[r].bytes;
if(a){
this.cea608Parser1||this.initCea608Parsers();
const o=this.extractCea608Data(a);
this.cea608Parser1.addData(n[r].pts,o[0]),this.cea608Parser2.addData(n[r].pts,o[1])}
}
}
onBufferFlushing(e,{
startOffset:t,endOffset:i,endOffsetSubtitles:n,type:r}
){
const{
media:a}
=this;
if(!(!a||a.currentTime<i)){
if(!r||r==="video"){
const{
captionsTracks:o}
=this;
Object.keys(o).forEach(u=>pu(o[u],t,i))}
if(this.config.renderTextTracksNatively&&t===0&&n!==void 0){
const{
textTracks:o}
=this;
Object.keys(o).forEach(u=>pu(o[u],t,n))}
}
}
extractCea608Data(e){
const t=[[],[]],i=e[0]&31;
let n=2;
for(let r=0;
r<i;
r++){
const a=e[n++],o=127&e[n++],u=127&e[n++];
if(o===0&&u===0)continue;
if((4&a)!==0){
const c=3&a;
(c===0||c===1)&&(t[c].push(o),t[c].push(u))}
}
return t}
}
function up(s){
return s.characteristics&&/transcribes-spoken-dialog/gi.test(s.characteristics)&&/describes-music-and-sound/gi.test(s.characteristics)?"captions":"subtitles"}
function df(s,e){
return!!s&&s.kind===up(e)&&hu(e,s)}
function D1(s,e,t,i){
return Math.min(e,i)-Math.max(s,t)}
function hf(){
return{
ccOffset:0,presentationOffset:0,0:{
start:0,prevCC:-1,new:!0}
}
}
const P1=/\s/,N1={
newCue(s,e,t,i){
const n=[];
let r,a,o,u,l;
const c=self.VTTCue||self.TextTrackCue;
for(let h=0;
h<i.rows.length;
h++)if(r=i.rows[h],o=!0,u=0,l="",!r.isEmpty()){
var d;
for(let p=0;
p<r.chars.length;
p++)P1.test(r.chars[p].uchar)&&o?u++:(l+=r.chars[p].uchar,o=!1);
r.cueStartTime=e,e===t&&(t+=1e-4),u>=16?u--:u++;
const f=rp(l.trim()),m=Uc(e,t,f);
s!=null&&(d=s.cues)!=null&&d.getCueById(m)||(a=new c(e,t,f),a.id=m,a.line=h+1,a.align="left",a.position=10+Math.min(80,Math.floor(u*8/32)*10),n.push(a))}
return s&&n.length&&(n.sort((h,f)=>h.line==="auto"||f.line==="auto"?0:h.line>8&&f.line>8?f.line-h.line:h.line-f.line),n.forEach(h=>Jg(s,h))),n}
}
;
function O1(){
if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{
return new self.ReadableStream({
}
),!0}
catch{
}
return!1}
const M1=/(\d+)-(\d+)\/(\d+)/;
class ff{
constructor(e){
this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=null,this.response=null,this.controller=void 0,this.context=null,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||$1,this.controller=new self.AbortController,this.stats=new pc}
destroy(){
this.loader=this.callbacks=this.context=this.config=this.request=null,this.abortInternal(),this.response=null,this.fetchSetup=this.controller=this.stats=null}
abortInternal(){
this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0,this.controller.abort())}
abort(){
var e;
this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}
load(e,t,i){
const n=this.stats;
if(n.loading.start)throw new Error("Loader can only be used once.");
n.loading.start=self.performance.now();
const r=F1(e,this.controller.signal),a=e.responseType==="arraybuffer",o=a?"byteLength":"length",{
maxTimeToFirstByteMs:u,maxLoadTimeMs:l}
=t.loadPolicy;
this.context=e,this.config=t,this.callbacks=i,this.request=this.fetchSetup(e,r),self.clearTimeout(this.requestTimeout),t.timeout=u&&j(u)?u:l,this.requestTimeout=self.setTimeout(()=>{
this.callbacks&&(this.abortInternal(),this.callbacks.onTimeout(n,e,this.response))}
,t.timeout),(Qn(this.request)?this.request.then(self.fetch):self.fetch(this.request)).then(d=>{
var h;
this.response=this.loader=d;
const f=Math.max(self.performance.now(),n.loading.start);
if(self.clearTimeout(this.requestTimeout),t.timeout=l,this.requestTimeout=self.setTimeout(()=>{
this.callbacks&&(this.abortInternal(),this.callbacks.onTimeout(n,e,this.response))}
,l-(f-n.loading.start)),!d.ok){
const{
status:p,statusText:E}
=d;
throw new j1(E||"fetch, bad network response",p,d)}
n.loading.first=f,n.total=B1(d.headers)||n.total;
const m=(h=this.callbacks)==null?void 0:h.onProgress;
return m&&j(t.highWaterMark)?this.loadProgressively(d,n,e,t.highWaterMark,m):a?d.arrayBuffer():e.responseType==="json"?d.json():d.text()}
).then(d=>{
var h,f;
const m=this.response;
if(!m)throw new Error("loader destroyed");
self.clearTimeout(this.requestTimeout),n.loading.end=Math.max(self.performance.now(),n.loading.first);
const p=d[o];
p&&(n.loaded=n.total=p);
const E={
url:m.url,data:d,code:m.status}
,v=(h=this.callbacks)==null?void 0:h.onProgress;
v&&!j(t.highWaterMark)&&v(n,e,d,m),(f=this.callbacks)==null||f.onSuccess(E,n,e,m)}
).catch(d=>{
var h;
if(self.clearTimeout(this.requestTimeout),n.aborted)return;
const f=d&&d.code||0,m=d?d.message:null;
(h=this.callbacks)==null||h.onError({
code:f,text:m}
,e,d?d.details:null,n)}
)}
getCacheAge(){
let e=null;
if(this.response){
const t=this.response.headers.get("age");
e=t?parseFloat(t):null}
return e}
getResponseHeader(e){
return this.response?this.response.headers.get(e):null}
loadProgressively(e,t,i,n=0,r){
const a=new xg,o=e.body.getReader(),u=()=>o.read().then(l=>{
if(l.done)return a.dataLength&&r(t,i,a.flush().buffer,e),Promise.resolve(new ArrayBuffer(0));
const c=l.value,d=c.length;
return t.loaded+=d,d<n||a.dataLength?(a.push(c),a.dataLength>=n&&r(t,i,a.flush().buffer,e)):r(t,i,c.buffer,e),u()}
).catch(()=>Promise.reject());
return u()}
}
function F1(s,e){
const t={
method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(ue({
}
,s.headers))}
;
return s.rangeEnd&&t.headers.set("Range","bytes="+s.rangeStart+"-"+String(s.rangeEnd-1)),t}
function U1(s){
const e=M1.exec(s);
if(e)return parseInt(e[2])-parseInt(e[1])+1}
function B1(s){
const e=s.get("Content-Range");
if(e){
const i=U1(e);
if(j(i))return i}
const t=s.get("Content-Length");
if(t)return parseInt(t)}
function $1(s,e){
return new self.Request(s.url,e)}
class j1 extends Error{
constructor(e,t,i){
super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=i}
}
const G1=/^age:\s*[\d.]+\s*$/im;
class cp{
constructor(e){
this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new pc,this.retryDelay=0}
destroy(){
this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null}
abortInternal(){
const e=this.loader;
self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}
abort(){
var e;
this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}
load(e,t,i){
if(this.stats.loading.start)throw new Error("Loader can only be used once.");
this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=i,this.loadInternal()}
loadInternal(){
const{
config:e,context:t}
=this;
if(!e||!t)return;
const i=this.loader=new self.XMLHttpRequest,n=this.stats;
n.loading.first=0,n.loaded=0,n.aborted=!1;
const r=this.xhrSetup;
r?Promise.resolve().then(()=>{
if(!(this.loader!==i||this.stats.aborted))return r(i,t.url)}
).catch(a=>{
if(!(this.loader!==i||this.stats.aborted))return i.open("GET",t.url,!0),r(i,t.url)}
).then(()=>{
this.loader!==i||this.stats.aborted||this.openAndSendXhr(i,t,e)}
).catch(a=>{
var o;
(o=this.callbacks)==null||o.onError({
code:i.status,text:a.message}
,t,i,n)}
):this.openAndSendXhr(i,t,e)}
openAndSendXhr(e,t,i){
e.readyState||e.open("GET",t.url,!0);
const n=t.headers,{
maxTimeToFirstByteMs:r,maxLoadTimeMs:a}
=i.loadPolicy;
if(n)for(const o in n)e.setRequestHeader(o,n[o]);
t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),i.timeout=r&&j(r)?r:a,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),i.timeout),e.send()}
readystatechange(){
const{
context:e,loader:t,stats:i}
=this;
if(!e||!t)return;
const n=t.readyState,r=this.config;
if(!i.aborted&&n>=2&&(i.loading.first===0&&(i.loading.first=Math.max(self.performance.now(),i.loading.start),r.timeout!==r.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),r.timeout=r.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.loadPolicy.maxLoadTimeMs-(i.loading.first-i.loading.start)))),n===4)){
self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;
const l=t.status,c=t.responseType==="text"?t.responseText:null;
if(l>=200&&l<300){
const m=c??t.response;
if(m!=null){
var a,o;
i.loading.end=Math.max(self.performance.now(),i.loading.first);
const p=t.responseType==="arraybuffer"?m.byteLength:m.length;
i.loaded=i.total=p,i.bwEstimate=i.total*8e3/(i.loading.end-i.loading.first);
const E=(a=this.callbacks)==null?void 0:a.onProgress;
E&&E(i,e,m,t);
const v={
url:t.responseURL,data:m,code:l}
;
(o=this.callbacks)==null||o.onSuccess(v,i,e,t);
return}
}
const d=r.loadPolicy.errorRetry,h=i.retry,f={
url:e.url,data:void 0,code:l}
;
if(Oa(d,h,!1,f))this.retry(d);
else{
var u;
oe.error(`${
l}
 while loading ${
e.url}
`),(u=this.callbacks)==null||u.onError({
code:l,text:t.statusText}
,e,t,i)}
}
}
loadtimeout(){
if(!this.config)return;
const e=this.config.loadPolicy.timeoutRetry,t=this.stats.retry;
if(Oa(e,t,!0))this.retry(e);
else{
var i;
oe.warn(`timeout while loading ${
(i=this.context)==null?void 0:i.url}
`);
const n=this.callbacks;
n&&(this.abortInternal(),n.onTimeout(this.stats,this.context,this.loader))}
}
retry(e){
const{
context:t,stats:i}
=this;
this.retryDelay=Ec(e,i.retry),i.retry++,oe.warn(`${
status?"HTTP Status "+status:"Timeout"}
 while loading ${
t==null?void 0:t.url}
, retrying ${
i.retry}
/${
e.maxNumRetry}
 in ${
this.retryDelay}
ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}
loadprogress(e){
const t=this.stats;
t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}
getCacheAge(){
let e=null;
if(this.loader&&G1.test(this.loader.getAllResponseHeaders())){
const t=this.loader.getResponseHeader("age");
e=t?parseFloat(t):null}
return e}
getResponseHeader(e){
return this.loader&&new RegExp(`^${
e}
:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}
}
const V1={
maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null}
,K1=ae(ae({
autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,maxDevicePixelRatio:Number.POSITIVE_INFINITY,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,startOnSegmentBoundary:!1,maxBufferSize:60*1e3*1e3,maxFragLookUpTolerance:.25,maxBufferHole:.1,detectStallWithCurrentTimeMs:1250,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,nudgeOnVideoHole:!0,liveSyncMode:"edge",liveSyncDurationCount:3,liveSyncOnStallIncrease:1,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,ignorePlaylistParsingErrors:!1,loader:cp,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:sE,bufferController:zS,capLevelController:Nc,errorController:oE,fpsController:WT,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{
}
,drmSystemOptions:{
}
,requestMediaKeySystemAccessFunc:lg,requireKeySystemAccessOnStart:!1,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableEmsgKLVMetadata:!1,enableID3MetadataCues:!0,enableInterstitialPlayback:!0,interstitialAppendInPlace:!0,interstitialLiveLookAhead:10,useMediaCapabilities:!0,preserveManualLevelOnError:!1,certLoadPolicy:{
default:V1}
,keyLoadPolicy:{
default:{
maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{
maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}
,errorRetry:{
maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}
}
}
,manifestLoadPolicy:{
default:{
maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{
maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0}
,errorRetry:{
maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}
}
}
,playlistLoadPolicy:{
default:{
maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{
maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0}
,errorRetry:{
maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}
}
}
,fragLoadPolicy:{
default:{
maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{
maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0}
,errorRetry:{
maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}
}
}
,steeringManifestLoadPolicy:{
default:{
maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{
maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0}
,errorRetry:{
maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}
}
}
,interstitialAssetListLoadPolicy:{
default:{
maxTimeToFirstByteMs:1e4,maxLoadTimeMs:3e4,timeoutRetry:{
maxNumRetry:0,retryDelayMs:0,maxRetryDelayMs:0}
,errorRetry:{
maxNumRetry:0,retryDelayMs:1e3,maxRetryDelayMs:8e3}
}
}
,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3}
,H1()),{
}
,{
subtitleStreamController:r1,subtitleTrackController:QT,timelineController:C1,audioStreamController:GS,audioTrackController:VS,emeController:Ui,cmcdController:VT,contentSteeringController:HT,interstitialsController:n1}
);
function H1(){
return{
cueHandler:N1,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}
}
function z1(s,e,t){
if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
const i=vu(s),n=["manifest","level","frag"],r=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];
return n.forEach(a=>{
const o=`${
a==="level"?"playlist":a}
LoadPolicy`,u=e[o]===void 0,l=[];
r.forEach(c=>{
const d=`${
a}
Loading${
c}
`,h=e[d];
if(h!==void 0&&u){
l.push(d);
const f=i[o].default;
switch(e[o]={
default:f}
,c){
case"TimeOut":f.maxLoadTimeMs=h,f.maxTimeToFirstByteMs=h;
break;
case"MaxRetry":f.errorRetry.maxNumRetry=h,f.timeoutRetry.maxNumRetry=h;
break;
case"RetryDelay":f.errorRetry.retryDelayMs=h,f.timeoutRetry.retryDelayMs=h;
break;
case"MaxRetryTimeout":f.errorRetry.maxRetryDelayMs=h,f.timeoutRetry.maxRetryDelayMs=h;
break}
}
}
),l.length&&t.warn(`hls.js config: "${
l.join('", "')}
" setting(s) are deprecated, use "${
o}
": ${
de(e[o])}
`)}
),ae(ae({
}
,i),e)}
function vu(s){
return s&&typeof s=="object"?Array.isArray(s)?s.map(vu):Object.keys(s).reduce((e,t)=>(e[t]=vu(s[t]),e),{
}
):s}
function W1(s,e){
const t=s.loader;
t!==ff&&t!==cp?(e.log("[config]: Custom loader detected, cannot enable progressive streaming"),s.progressive=!1):O1()&&(s.loader=ff,s.progressive=!0,s.enableSoftwareAES=!0,e.log("[config]: Progressive streaming enabled, using FetchLoader"))}
const na=2,Y1=.1,q1=.05,Q1=100;
class X1 extends ig{
constructor(e,t){
super("gap-controller",e.logger),this.hls=void 0,this.fragmentTracker=void 0,this.media=null,this.mediaSource=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.buffered={
}
,this.lastCurrentTime=0,this.ended=0,this.waiting=0,this.onMediaPlaying=()=>{
this.ended=0,this.waiting=0}
,this.onMediaWaiting=()=>{
var i;
(i=this.media)!=null&&i.seeking||(this.waiting=self.performance.now(),this.tick())}
,this.onMediaEnded=()=>{
if(this.hls){
var i;
this.ended=((i=this.media)==null?void 0:i.currentTime)||1,this.hls.trigger(x.MEDIA_ENDED,{
stalled:!1}
)}
}
,this.hls=e,this.fragmentTracker=t,this.registerListeners()}
registerListeners(){
const{
hls:e}
=this;
e&&(e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.BUFFER_APPENDED,this.onBufferAppended,this))}
unregisterListeners(){
const{
hls:e}
=this;
e&&(e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.BUFFER_APPENDED,this.onBufferAppended,this))}
destroy(){
super.destroy(),this.unregisterListeners(),this.media=this.hls=this.fragmentTracker=null,this.mediaSource=void 0}
onMediaAttached(e,t){
this.setInterval(Q1),this.mediaSource=t.mediaSource;
const i=this.media=t.media;
qe(i,"playing",this.onMediaPlaying),qe(i,"waiting",this.onMediaWaiting),qe(i,"ended",this.onMediaEnded)}
onMediaDetaching(e,t){
this.clearInterval();
const{
media:i}
=this;
i&&(st(i,"playing",this.onMediaPlaying),st(i,"waiting",this.onMediaWaiting),st(i,"ended",this.onMediaEnded),this.media=null),this.mediaSource=void 0}
onBufferAppended(e,t){
this.buffered=t.timeRanges}
get hasBuffered(){
return Object.keys(this.buffered).length>0}
tick(){
var e;
if(!((e=this.media)!=null&&e.readyState)||!this.hasBuffered)return;
const t=this.media.currentTime;
this.poll(t,this.lastCurrentTime),this.lastCurrentTime=t}
poll(e,t){
var i,n;
const r=(i=this.hls)==null?void 0:i.config;
if(!r)return;
const a=this.media;
if(!a)return;
const{
seeking:o}
=a,u=this.seeking&&!o,l=!this.seeking&&o,c=a.paused&&!o||a.ended||a.playbackRate===0;
if(this.seeking=o,e!==t){
t&&(this.ended=0),this.moved=!0,o||(this.nudgeRetry=0,r.nudgeOnVideoHole&&!c&&e>t&&this.nudgeOnVideoHole(e,t)),this.waiting===0&&this.stallResolved(e);
return}
if(l||u){
u&&this.stallResolved(e);
return}
if(c){
this.nudgeRetry=0,this.stallResolved(e),!this.ended&&a.ended&&this.hls&&(this.ended=e||1,this.hls.trigger(x.MEDIA_ENDED,{
stalled:!1}
));
return}
if(!X.getBuffered(a).length){
this.nudgeRetry=0;
return}
const d=X.bufferInfo(a,e,0),h=d.nextStart||0,f=this.fragmentTracker;
if(o&&f&&this.hls){
const _=mf(this.hls.inFlightFragments,e),L=d.len>na,R=!h||_||h-e>na&&!f.getPartialFragment(e);
if(L||R)return;
this.moved=!1}
const m=(n=this.hls)==null?void 0:n.latestLevelDetails;
if(!this.moved&&this.stalled!==null&&f){
if(!(d.len>0)&&!h)return;
const L=Math.max(h,d.start||0)-e,w=!!(m!=null&&m.live)?m.targetduration*2:na,A=Mr(e,f);
if(L>0&&(L<=w||A)){
a.paused||this._trySkipBufferHole(A);
return}
}
const p=r.detectStallWithCurrentTimeMs,E=self.performance.now(),v=this.waiting;
let y=this.stalled;
if(y===null)if(v>0&&E-v<p)y=this.stalled=v;
else{
this.stalled=E;
return}
const S=E-y;
if(!o&&(S>=p||v)&&this.hls){
var T;
if(((T=this.mediaSource)==null?void 0:T.readyState)==="ended"&&!(m!=null&&m.live)&&Math.abs(e-((m==null?void 0:m.edge)||0))<1){
if(this.ended)return;
this.ended=e||1,this.hls.trigger(x.MEDIA_ENDED,{
stalled:!0}
);
return}
if(this._reportStall(d),!this.media||!this.hls)return}
const I=X.bufferInfo(a,e,r.maxBufferHole);
this._tryFixBufferStall(I,S,e)}
stallResolved(e){
const t=this.stalled;
if(t&&this.hls&&(this.stalled=null,this.stallReported)){
const i=self.performance.now()-t;
this.log(`playback not stuck anymore @${
e}
, after ${
Math.round(i)}
ms`),this.stallReported=!1,this.waiting=0,this.hls.trigger(x.STALL_RESOLVED,{
}
)}
}
nudgeOnVideoHole(e,t){
var i;
const n=this.buffered.video;
if(this.hls&&this.media&&this.fragmentTracker&&(i=this.buffered.audio)!=null&&i.length&&n&&n.length>1&&e>n.end(0)){
const r=X.bufferedInfo(X.timeRangesToArray(this.buffered.audio),e,0);
if(r.len>1&&t>=r.start){
const a=X.timeRangesToArray(n),o=X.bufferedInfo(a,t,0).bufferedIndex;
if(o>-1&&o<a.length-1){
const u=X.bufferedInfo(a,e,0).bufferedIndex,l=a[o].end,c=a[o+1].start;
if((u===-1||u>o)&&c-l<1&&e-l<2){
const d=new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${
e}
 hole: ${
l}
 -> ${
c}
 buffered index: ${
u}
`);
this.warn(d.message),this.media.currentTime+=1e-6;
let h=Mr(e,this.fragmentTracker);
h&&"fragment"in h?h=h.fragment:h||(h=void 0);
const f=X.bufferInfo(this.media,e,0);
this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:d,reason:d.message,frag:h,buffer:f.len,bufferInfo:f}
)}
}
}
}
}
_tryFixBufferStall(e,t,i){
var n,r;
const{
fragmentTracker:a,media:o}
=this,u=(n=this.hls)==null?void 0:n.config;
if(!o||!a||!u)return;
const l=(r=this.hls)==null?void 0:r.latestLevelDetails,c=Mr(i,a);
if((c||l!=null&&l.live&&i<l.fragmentStart)&&(this._trySkipBufferHole(c)||!this.media))return;
const d=e.buffered,h=this.adjacentTraversal(e,i);
(d&&d.length>1&&e.len>u.maxBufferHole||e.nextStart&&(e.nextStart-i<u.maxBufferHole||h))&&(t>u.highBufferWatchdogPeriod*1e3||this.waiting)&&(this.warn("Trying to nudge playhead over buffer-hole"),this._tryNudgeBuffer(e))}
adjacentTraversal(e,t){
const i=this.fragmentTracker,n=e.nextStart;
if(i&&n){
const r=i.getFragAtPos(t,H.MAIN),a=i.getFragAtPos(n,H.MAIN);
if(r&&a)return a.sn-r.sn<2}
return!1}
_reportStall(e){
const{
hls:t,media:i,stallReported:n,stalled:r}
=this;
if(!n&&r!==null&&i&&t){
this.stallReported=!0;
const a=new Error(`Playback stalling at @${
i.currentTime}
 due to low buffer (${
de(e)}
)`);
this.warn(a.message),t.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.BUFFER_STALLED_ERROR,fatal:!1,error:a,buffer:e.len,bufferInfo:e,stalled:{
start:r}
}
)}
}
_trySkipBufferHole(e){
var t;
const{
fragmentTracker:i,media:n}
=this,r=(t=this.hls)==null?void 0:t.config;
if(!n||!i||!r)return 0;
const a=n.currentTime,o=X.bufferInfo(n,a,0),u=a<o.start?o.start:o.nextStart;
if(u&&this.hls){
const c=o.len<=r.maxBufferHole,d=o.len>0&&o.len<1&&n.readyState<3,h=u-a;
if(h>0&&(c||d)){
if(h>r.maxBufferHole){
let m=!1;
if(a===0){
const p=i.getAppendedFrag(0,H.MAIN);
p&&u<p.end&&(m=!0)}
if(!m&&e){
var l;
if(!((l=this.hls.loadLevelObj)!=null&&l.details)||mf(this.hls.inFlightFragments,u))return 0;
let E=!1,v=e.end;
for(;
v<u;
){
const y=Mr(v,i);
if(y)v+=y.duration;
else{
E=!0;
break}
}
if(E)return 0}
}
const f=Math.max(u+q1,a+Y1);
if(this.warn(`skipping hole, adjusting currentTime from ${
a}
 to ${
f}
`),this.moved=!0,n.currentTime=f,!(e!=null&&e.gap)){
const m=new Error(`fragment loaded with buffer holes, seeking from ${
a}
 to ${
f}
`),p={
type:Y.MEDIA_ERROR,details:b.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:m,reason:m.message,buffer:o.len,bufferInfo:o}
;
e&&("fragment"in e?p.part=e:p.frag=e),this.hls.trigger(x.ERROR,p)}
return f}
}
return 0}
_tryNudgeBuffer(e){
const{
hls:t,media:i,nudgeRetry:n}
=this,r=t==null?void 0:t.config;
if(!i||!r)return 0;
const a=i.currentTime;
if(this.nudgeRetry++,n<r.nudgeMaxRetry){
const o=a+(n+1)*r.nudgeOffset,u=new Error(`Nudging 'currentTime' from ${
a}
 to ${
o}
`);
this.warn(u.message),i.currentTime=o,t.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.BUFFER_NUDGE_ON_STALL,error:u,fatal:!1,buffer:e.len,bufferInfo:e}
)}
else{
const o=new Error(`Playhead still not moving while enough data buffered @${
a}
 after ${
r.nudgeMaxRetry}
 nudges`);
this.error(o.message),t.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.BUFFER_STALLED_ERROR,error:o,fatal:!0,buffer:e.len,bufferInfo:e}
)}
}
}
function mf(s,e){
const t=gf(s.main);
if(t&&t.start<=e)return t;
const i=gf(s.audio);
return i&&i.start<=e?i:null}
function gf(s){
if(!s)return null;
switch(s.state){
case P.IDLE:case P.STOPPED:case P.ENDED:case P.ERROR:return null}
return s.frag}
function Mr(s,e){
return e.getAppendedFrag(s,H.MAIN)||e.getPartialFragment(s)}
const Z1=.25;
function xu(){
if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}
function nl(s,e,t,i,n){
let r=new s(e,t,"");
try{
r.value=i,n&&(r.type=n)}
catch{
r=new s(e,t,de(n?ae({
type:n}
,i):i))}
return r}
const Fr=(()=>{
const s=xu();
try{
s&&new s(0,Number.POSITIVE_INFINITY,"")}
catch{
return Number.MAX_VALUE}
return Number.POSITIVE_INFINITY}
)();
class J1{
constructor(e){
this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={
}
,this.removeCues=!0,this.assetCue=void 0,this.onEventCueEnter=()=>{
this.hls&&this.hls.trigger(x.EVENT_CUE_ENTER,{
}
)}
,this.hls=e,this._registerListeners()}
destroy(){
this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={
}
,this.hls=this.onEventCueEnter=null}
_registerListeners(){
const{
hls:e}
=this;
e&&(e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.LEVEL_PTS_UPDATED,this.onLevelPtsUpdated,this))}
_unregisterListeners(){
const{
hls:e}
=this;
e&&(e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.LEVEL_PTS_UPDATED,this.onLevelPtsUpdated,this))}
onMediaAttaching(e,t){
var i;
this.media=t.media,((i=t.overrides)==null?void 0:i.cueRemoval)===!1&&(this.removeCues=!1)}
onMediaAttached(){
var e;
const t=(e=this.hls)==null?void 0:e.latestLevelDetails;
t&&this.updateDateRangeCues(t)}
onMediaDetaching(e,t){
this.media=null,!t.transferMedia&&(this.id3Track&&(this.removeCues&&ki(this.id3Track,this.onEventCueEnter),this.id3Track=null),this.dateRangeCuesAppended={
}
)}
onManifestLoading(){
this.dateRangeCuesAppended={
}
}
createTrack(e){
const t=this.getID3Track(e.textTracks);
return t.mode="hidden",t}
getID3Track(e){
if(this.media){
for(let t=0;
t<e.length;
t++){
const i=e[t];
if(i.kind==="metadata"&&i.label==="id3")return Zg(i,this.media),i}
return this.media.addTextTrack("metadata","id3")}
}
onFragParsingMetadata(e,t){
if(!this.media||!this.hls)return;
const{
enableEmsgMetadataCues:i,enableID3MetadataCues:n}
=this.hls.config;
if(!i&&!n)return;
const{
samples:r}
=t;
this.id3Track||(this.id3Track=this.createTrack(this.media));
const a=xu();
if(a)for(let o=0;
o<r.length;
o++){
const u=r[o].type;
if(u===ct.emsg&&!i||!n)continue;
const l=Rg(r[o].data),c=r[o].pts;
let d=c+r[o].duration;
d>Fr&&(d=Fr),d-c<=0&&(d=c+Z1);
for(let f=0;
f<l.length;
f++){
const m=l[f];
if(!_g(m)){
this.updateId3CueEnds(c,u);
const p=nl(a,c,d,m,u);
p&&this.id3Track.addCue(p)}
}
}
}
updateId3CueEnds(e,t){
var i;
const n=(i=this.id3Track)==null?void 0:i.cues;
if(n)for(let r=n.length;
r--;
){
const a=n[r];
a.type===t&&a.startTime<e&&a.endTime===Fr&&(a.endTime=e)}
}
onBufferFlushing(e,{
startOffset:t,endOffset:i,type:n}
){
const{
id3Track:r,hls:a}
=this;
if(!a)return;
const{
config:{
enableEmsgMetadataCues:o,enableID3MetadataCues:u}
}
=a;
if(r&&(o||u)){
let l;
n==="audio"?l=c=>c.type===ct.audioId3&&u:n==="video"?l=c=>c.type===ct.emsg&&o:l=c=>c.type===ct.audioId3&&u||c.type===ct.emsg&&o,pu(r,t,i,l)}
}
onLevelUpdated(e,{
details:t}
){
this.updateDateRangeCues(t,!0)}
onLevelPtsUpdated(e,t){
Math.abs(t.drift)>.01&&this.updateDateRangeCues(t.details)}
updateDateRangeCues(e,t){
if(!this.hls||!this.media)return;
const{
assetPlayerId:i,timelineOffset:n,enableDateRangeMetadataCues:r,interstitialsController:a}
=this.hls.config;
if(!r)return;
const o=xu();
if(i&&n&&!a){
const{
fragmentStart:p,fragmentEnd:E}
=e;
let v=this.assetCue;
v?(v.startTime=p,v.endTime=E):o&&(v=this.assetCue=nl(o,p,E,{
assetPlayerId:this.hls.config.assetPlayerId}
,"hlsjs.interstitial.asset"),v&&(v.id=i,this.id3Track||(this.id3Track=this.createTrack(this.media)),this.id3Track.addCue(v),v.addEventListener("enter",this.onEventCueEnter)))}
if(!e.hasProgramDateTime)return;
const{
id3Track:u}
=this,{
dateRanges:l}
=e,c=Object.keys(l);
let d=this.dateRangeCuesAppended;
if(u&&t){
var h;
if((h=u.cues)!=null&&h.length){
const p=Object.keys(d).filter(E=>!c.includes(E));
for(let E=p.length;
E--;
){
var f;
const v=p[E],y=(f=d[v])==null?void 0:f.cues;
delete d[v],y&&Object.keys(y).forEach(S=>{
const T=y[S];
if(T){
T.removeEventListener("enter",this.onEventCueEnter);
try{
u.removeCue(T)}
catch{
}
}
}
)}
}
else d=this.dateRangeCuesAppended={
}
}
const m=e.fragments[e.fragments.length-1];
if(!(c.length===0||!j(m==null?void 0:m.programDateTime))){
this.id3Track||(this.id3Track=this.createTrack(this.media));
for(let p=0;
p<c.length;
p++){
const E=c[p],v=l[E],y=v.startTime,S=d[E],T=(S==null?void 0:S.cues)||{
}
;
let I=(S==null?void 0:S.durationKnown)||!1,_=Fr;
const{
duration:L,endDate:R}
=v;
if(R&&L!==null)_=y+L,I=!0;
else if(v.endOnNext&&!I){
const A=c.reduce((D,$)=>{
if($!==v.id){
const G=l[$];
if(G.class===v.class&&G.startDate>v.startDate&&(!D||v.startDate<D.startDate))return G}
return D}
,null);
A&&(_=A.startTime,I=!0)}
const w=Object.keys(v.attr);
for(let A=0;
A<w.length;
A++){
const D=w[A];
if(!EE(D))continue;
const $=T[D];
if($)I&&!(S!=null&&S.durationKnown)?$.endTime=_:Math.abs($.startTime-y)>.01&&($.startTime=y,$.endTime=_);
else if(o){
let G=v.attr[D];
SE(D)&&(G=Fm(G));
const V=nl(o,y,_,{
key:D,data:G}
,ct.dateRange);
V&&(V.id=E,this.id3Track.addCue(V),T[D]=V,a&&(D==="X-ASSET-LIST"||D==="X-ASSET-URL")&&V.addEventListener("enter",this.onEventCueEnter))}
}
d[E]={
cues:T,dateRange:v,durationKnown:I}
}
}
}
}
class eI{
constructor(e){
this.hls=void 0,this.config=void 0,this.media=null,this.currentTime=0,this.stallCount=0,this._latency=null,this._targetLatencyUpdated=!1,this.onTimeupdate=()=>{
const{
media:t}
=this,i=this.levelDetails;
if(!t||!i)return;
this.currentTime=t.currentTime;
const n=this.computeLatency();
if(n===null)return;
this._latency=n;
const{
lowLatencyMode:r,maxLiveSyncPlaybackRate:a}
=this.config;
if(!r||a===1||!i.live)return;
const o=this.targetLatency;
if(o===null)return;
const u=n-o,l=Math.min(this.maxLatency,o+i.targetduration);
if(u<l&&u>.05&&this.forwardBufferLength>1){
const d=Math.min(2,Math.max(1,a)),h=Math.round(2/(1+Math.exp(-.75*u-this.edgeStalled))*20)/20,f=Math.min(d,Math.max(1,h));
this.changeMediaPlaybackRate(t,f)}
else t.playbackRate!==1&&t.playbackRate!==0&&this.changeMediaPlaybackRate(t,1)}
,this.hls=e,this.config=e.config,this.registerListeners()}
get levelDetails(){
var e;
return((e=this.hls)==null?void 0:e.latestLevelDetails)||null}
get latency(){
return this._latency||0}
get maxLatency(){
const{
config:e}
=this;
if(e.liveMaxLatencyDuration!==void 0)return e.liveMaxLatencyDuration;
const t=this.levelDetails;
return t?e.liveMaxLatencyDurationCount*t.targetduration:0}
get targetLatency(){
const e=this.levelDetails;
if(e===null||this.hls===null)return null;
const{
holdBack:t,partHoldBack:i,targetduration:n}
=e,{
liveSyncDuration:r,liveSyncDurationCount:a,lowLatencyMode:o}
=this.config,u=this.hls.userConfig;
let l=o&&i||t;
(this._targetLatencyUpdated||u.liveSyncDuration||u.liveSyncDurationCount||l===0)&&(l=r!==void 0?r:a*n);
const c=n;
return l+Math.min(this.stallCount*this.config.liveSyncOnStallIncrease,c)}
set targetLatency(e){
this.stallCount=0,this.config.liveSyncDuration=e,this._targetLatencyUpdated=!0}
get liveSyncPosition(){
const e=this.estimateLiveEdge(),t=this.targetLatency;
if(e===null||t===null)return null;
const i=this.levelDetails;
if(i===null)return null;
const n=i.edge,r=e-t-this.edgeStalled,a=n-i.totalduration,o=n-(this.config.lowLatencyMode&&i.partTarget||i.targetduration);
return Math.min(Math.max(a,r),o)}
get drift(){
const e=this.levelDetails;
return e===null?1:e.drift}
get edgeStalled(){
const e=this.levelDetails;
if(e===null)return 0;
const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;
return Math.max(e.age-t,0)}
get forwardBufferLength(){
const{
media:e}
=this,t=this.levelDetails;
if(!e||!t)return 0;
const i=e.buffered.length;
return(i?e.buffered.end(i-1):t.edge)-this.currentTime}
destroy(){
this.unregisterListeners(),this.onMediaDetaching(),this.hls=null}
registerListeners(){
const{
hls:e}
=this;
e&&(e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.ERROR,this.onError,this))}
unregisterListeners(){
const{
hls:e}
=this;
e&&(e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.ERROR,this.onError,this))}
onMediaAttached(e,t){
this.media=t.media,this.media.addEventListener("timeupdate",this.onTimeupdate)}
onMediaDetaching(){
this.media&&(this.media.removeEventListener("timeupdate",this.onTimeupdate),this.media=null)}
onManifestLoading(){
this._latency=null,this.stallCount=0}
onLevelUpdated(e,{
details:t}
){
t.advanced&&this.onTimeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.onTimeupdate)}
onError(e,t){
var i;
t.details===b.BUFFER_STALLED_ERROR&&(this.stallCount++,this.hls&&(i=this.levelDetails)!=null&&i.live&&this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"))}
changeMediaPlaybackRate(e,t){
var i,n;
e.playbackRate!==t&&((i=this.hls)==null||i.logger.debug(`[latency-controller]: latency=${
this.latency.toFixed(3)}
, targetLatency=${
(n=this.targetLatency)==null?void 0:n.toFixed(3)}
, forwardBufferLength=${
this.forwardBufferLength.toFixed(3)}
: adjusting playback rate from ${
e.playbackRate}
 to ${
t}
`),e.playbackRate=t)}
estimateLiveEdge(){
const e=this.levelDetails;
return e===null?null:e.edge+e.age}
computeLatency(){
const e=this.estimateLiveEdge();
return e===null?null:e-this.currentTime}
}
class tI extends Pc{
constructor(e,t){
super(e,"level-controller"),this._levels=[],this._firstLevel=-1,this._maxAutoLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}
_registerListeners(){
const{
hls:e}
=this;
e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this),e.on(x.ERROR,this.onError,this)}
_unregisterListeners(){
const{
hls:e}
=this;
e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this),e.off(x.ERROR,this.onError,this)}
destroy(){
this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}
stopLoad(){
this._levels.forEach(t=>{
t.loadError=0,t.fragmentError=0}
),super.stopLoad()}
resetLevels(){
this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[],this._maxAutoLevel=-1}
onManifestLoading(e,t){
this.resetLevels()}
onManifestLoaded(e,t){
const i=this.hls.config.preferManagedMediaSource,n=[],r={
}
,a={
}
;
let o=!1,u=!1,l=!1;
t.levels.forEach(c=>{
const d=c.attrs;
let{
audioCodec:h,videoCodec:f}
=c;
h&&(c.audioCodec=h=Ca(h,i)||void 0),f&&(f=c.videoCodec=Fx(f));
const{
width:m,height:p,unknownCodecs:E}
=c,v=(E==null?void 0:E.length)||0;
if(o||(o=!!(m&&p)),u||(u=!!f),l||(l=!!h),v||h&&!this.isAudioSupported(h)||f&&!this.isVideoSupported(f)){
this.log(`Some or all CODECS not supported "${
d.CODECS}
"`);
return}
const{
CODECS:y,"FRAME-RATE":S,"HDCP-LEVEL":T,"PATHWAY-ID":I,RESOLUTION:_,"VIDEO-RANGE":L}
=d,w=`${
`${
I||"."}
-`}
${
c.bitrate}
-${
_}
-${
S}
-${
y}
-${
L}
-${
T}
`;
if(r[w])if(r[w].uri!==c.url&&!c.attrs["PATHWAY-ID"]){
const A=a[w]+=1;
c.attrs["PATHWAY-ID"]=new Array(A+1).join(".");
const D=this.createLevel(c);
r[w]=D,n.push(D)}
else r[w].addGroupId("audio",d.AUDIO),r[w].addGroupId("text",d.SUBTITLES);
else{
const A=this.createLevel(c);
r[w]=A,a[w]=1,n.push(A)}
}
),this.filterAndSortMediaOptions(n,t,o,u,l)}
createLevel(e){
const t=new Wn(e),i=e.supplemental;
if(i!=null&&i.videoCodec&&!this.isVideoSupported(i.videoCodec)){
const n=new Error(`SUPPLEMENTAL-CODECS not supported "${
i.videoCodec}
"`);
this.log(n.message),t.supportedResult=qm(n,[])}
return t}
isAudioSupported(e){
return Hn(e,"audio",this.hls.config.preferManagedMediaSource)}
isVideoSupported(e){
return Hn(e,"video",this.hls.config.preferManagedMediaSource)}
filterAndSortMediaOptions(e,t,i,n,r){
var a;
let o=[],u=[],l=e;
const c=((a=t.stats)==null?void 0:a.parsing)||{
}
;
if((i||n)&&r&&(l=l.filter(({
videoCodec:y,videoRange:S,width:T,height:I}
)=>(!!y||!!(T&&I))&&Wx(S))),l.length===0){
Promise.resolve().then(()=>{
if(this.hls){
let y="no level with compatible codecs found in manifest",S=y;
t.levels.length&&(S=`one or more CODECS in variant not supported: ${
de(t.levels.map(I=>I.attrs.CODECS).filter((I,_,L)=>L.indexOf(I)===_))}
`,this.warn(S),y+=` (${
S}
)`);
const T=new Error(y);
this.hls.trigger(x.ERROR,{
type:Y.MEDIA_ERROR,details:b.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:T,reason:S}
)}
}
),c.end=performance.now();
return}
t.audioTracks&&(o=t.audioTracks.filter(y=>!y.audioCodec||this.isAudioSupported(y.audioCodec)),pf(o)),t.subtitles&&(u=t.subtitles,pf(u));
const d=l.slice(0);
l.sort((y,S)=>{
if(y.attrs["HDCP-LEVEL"]!==S.attrs["HDCP-LEVEL"])return(y.attrs["HDCP-LEVEL"]||"")>(S.attrs["HDCP-LEVEL"]||"")?1:-1;
if(i&&y.height!==S.height)return y.height-S.height;
if(y.frameRate!==S.frameRate)return y.frameRate-S.frameRate;
if(y.videoRange!==S.videoRange)return Da.indexOf(y.videoRange)-Da.indexOf(S.videoRange);
if(y.videoCodec!==S.videoCodec){
const T=ah(y.videoCodec),I=ah(S.videoCodec);
if(T!==I)return I-T}
if(y.uri===S.uri&&y.codecSet!==S.codecSet){
const T=ba(y.codecSet),I=ba(S.codecSet);
if(T!==I)return I-T}
return y.averageBitrate!==S.averageBitrate?y.averageBitrate-S.averageBitrate:0}
);
let h=d[0];
if(this.steering&&(l=this.steering.filterParsedLevels(l),l.length!==d.length)){
for(let y=0;
y<d.length;
y++)if(d[y].pathwayId===l[0].pathwayId){
h=d[y];
break}
}
this._levels=l;
for(let y=0;
y<l.length;
y++)if(l[y]===h){
var f;
this._firstLevel=y;
const S=h.bitrate,T=this.hls.bandwidthEstimate;
if(this.log(`manifest loaded, ${
l.length}
 level(s) found, first bitrate: ${
S}
`),((f=this.hls.userConfig)==null?void 0:f.abrEwmaDefaultEstimate)===void 0){
const I=Math.min(S,this.hls.config.abrEwmaDefaultEstimateMax);
I>T&&T===this.hls.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=I)}
break}
const m=r&&!n,p=this.hls.config,E=!!(p.audioStreamController&&p.audioTrackController),v={
levels:l,audioTracks:o,subtitleTracks:u,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:r,video:n,altAudio:E&&!m&&o.some(y=>!!y.url)}
;
c.end=performance.now(),this.hls.trigger(x.MANIFEST_PARSED,v)}
get levels(){
return this._levels.length===0?null:this._levels}
get loadLevelObj(){
return this.currentLevel}
get level(){
return this.currentLevelIndex}
set level(e){
const t=this._levels;
if(t.length===0)return;
if(e<0||e>=t.length){
const c=new Error("invalid level idx"),d=e<0;
if(this.hls.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.LEVEL_SWITCH_ERROR,level:e,fatal:d,error:c,reason:c.message}
),d)return;
e=Math.min(e,t.length-1)}
const i=this.currentLevelIndex,n=this.currentLevel,r=n?n.attrs["PATHWAY-ID"]:void 0,a=t[e],o=a.attrs["PATHWAY-ID"];
if(this.currentLevelIndex=e,this.currentLevel=a,i===e&&n&&r===o)return;
this.log(`Switching to level ${
e}
 (${
a.height?a.height+"p ":""}
${
a.videoRange?a.videoRange+" ":""}
${
a.codecSet?a.codecSet+" ":""}
@${
a.bitrate}
)${
o?" with Pathway "+o:""}
 from level ${
i}
${
r?" with Pathway "+r:""}
`);
const u={
level:e,attrs:a.attrs,details:a.details,bitrate:a.bitrate,averageBitrate:a.averageBitrate,maxBitrate:a.maxBitrate,realBitrate:a.realBitrate,width:a.width,height:a.height,codecSet:a.codecSet,audioCodec:a.audioCodec,videoCodec:a.videoCodec,audioGroups:a.audioGroups,subtitleGroups:a.subtitleGroups,loaded:a.loaded,loadError:a.loadError,fragmentError:a.fragmentError,name:a.name,id:a.id,uri:a.uri,url:a.url,urlId:0,audioGroupIds:a.audioGroupIds,textGroupIds:a.textGroupIds}
;
this.hls.trigger(x.LEVEL_SWITCHING,u);
const l=a.details;
if(!l||l.live){
const c=this.switchParams(a.uri,n==null?void 0:n.details,l);
this.loadPlaylist(c)}
}
get manualLevel(){
return this.manualLevelIndex}
set manualLevel(e){
this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}
get firstLevel(){
return this._firstLevel}
set firstLevel(e){
this._firstLevel=e}
get startLevel(){
if(this._startLevel===void 0){
const e=this.hls.config.startLevel;
return e!==void 0?e:this.hls.firstAutoLevel}
return this._startLevel}
set startLevel(e){
this._startLevel=e}
get pathways(){
return this.steering?this.steering.pathways():[]}
get pathwayPriority(){
return this.steering?this.steering.pathwayPriority:null}
set pathwayPriority(e){
if(this.steering){
const t=this.steering.pathways(),i=e.filter(n=>t.indexOf(n)!==-1);
if(e.length<1){
this.warn(`pathwayPriority ${
e}
 should contain at least one pathway from list: ${
t}
`);
return}
this.steering.pathwayPriority=i}
}
onError(e,t){
t.fatal||!t.context||t.context.type===se.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}
onFragBuffered(e,{
frag:t}
){
if(t!==void 0&&t.type===H.MAIN){
const i=t.elementaryStreams;
if(!Object.keys(i).some(r=>!!i[r]))return;
const n=this._levels[t.level];
n!=null&&n.loadError&&(this.log(`Resetting level error count of ${
n.loadError}
 on frag buffered`),n.loadError=0)}
}
onLevelLoaded(e,t){
var i;
const{
level:n,details:r}
=t,a=t.levelInfo;
if(!a){
var o;
this.warn(`Invalid level index ${
n}
`),(o=t.deliveryDirectives)!=null&&o.skip&&(r.deltaUpdateFailed=!0);
return}
if(a===this.currentLevel||t.withoutMultiVariant){
a.fragmentError===0&&(a.loadError=0);
let u=a.details;
u===t.details&&u.advanced&&(u=void 0),this.playlistLoaded(n,t,u)}
else(i=t.deliveryDirectives)!=null&&i.skip&&(r.deltaUpdateFailed=!0)}
loadPlaylist(e){
super.loadPlaylist(),this.shouldLoadPlaylist(this.currentLevel)&&this.scheduleLoading(this.currentLevel,e)}
loadingPlaylist(e,t){
super.loadingPlaylist(e,t);
const i=this.getUrlWithDirectives(e.uri,t),n=this.currentLevelIndex,r=e.attrs["PATHWAY-ID"],a=e.details,o=a==null?void 0:a.age;
this.log(`Loading level index ${
n}
${
(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}
${
r?" Pathway "+r:""}
${
o&&a.live?" age "+o.toFixed(1)+(a.type&&" "+a.type||""):""}
 ${
i}
`),this.hls.trigger(x.LEVEL_LOADING,{
url:i,level:n,levelInfo:e,pathwayId:e.attrs["PATHWAY-ID"],id:0,deliveryDirectives:t||null}
)}
get nextLoadLevel(){
return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}
set nextLoadLevel(e){
this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}
removeLevel(e){
var t;
if(this._levels.length===1)return;
const i=this._levels.filter((r,a)=>a!==e?!0:(this.steering&&this.steering.removeLevel(r),r===this.currentLevel&&(this.currentLevel=null,this.currentLevelIndex=-1,r.details&&r.details.fragments.forEach(o=>o.level=-1)),!1));
pg(i),this._levels=i,this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),this.manualLevelIndex>-1&&(this.manualLevelIndex=this.currentLevelIndex);
const n=i.length-1;
this._firstLevel=Math.min(this._firstLevel,n),this._startLevel&&(this._startLevel=Math.min(this._startLevel,n)),this.hls.trigger(x.LEVELS_UPDATED,{
levels:i}
)}
onLevelsUpdated(e,{
levels:t}
){
this._levels=t}
checkMaxAutoUpdated(){
const{
autoLevelCapping:e,maxAutoLevel:t,maxHdcpLevel:i}
=this.hls;
this._maxAutoLevel!==t&&(this._maxAutoLevel=t,this.hls.trigger(x.MAX_AUTO_LEVEL_UPDATED,{
autoLevelCapping:e,levels:this.levels,maxAutoLevel:t,minAutoLevel:this.hls.minAutoLevel,maxHdcpLevel:i}
))}
}
function pf(s){
const e={
}
;
s.forEach(t=>{
const i=t.groupId||"";
t.id=e[i]=e[i]||0,e[i]++}
)}
function dp(){
return self.SourceBuffer||self.WebKitSourceBuffer}
function hp(){
if(!Os())return!1;
const e=dp();
return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"}
function sI(){
if(!hp())return!1;
const s=Os();
return typeof(s==null?void 0:s.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some(e=>s.isTypeSupported(zn(e,"video")))||["mp4a.40.2","fLaC"].some(e=>s.isTypeSupported(zn(e,"audio"))))}
function iI(){
var s;
const e=dp();
return typeof(e==null||(s=e.prototype)==null?void 0:s.changeType)=="function"}
const nI=100;
class rI extends Ac{
constructor(e,t,i){
super(e,t,i,"stream-controller",H.MAIN),this.audioCodecSwap=!1,this.level=-1,this._forceStartLoad=!1,this._hasEnoughToStart=!1,this.altAudio=0,this.audioOnly=!1,this.fragPlaying=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this.onMediaPlaying=()=>{
this.tick()}
,this.onMediaSeeked=()=>{
const n=this.media,r=n?n.currentTime:null;
if(r===null||!j(r)||(this.log(`Media seeked to ${
r.toFixed(3)}
`),!this.getBufferedFrag(r)))return;
const a=this.getFwdBufferInfoAtPos(n,r,H.MAIN,0);
if(a===null||a.len===0){
this.warn(`Main forward buffer length at ${
r}
 on "seeked" event ${
a?a.len:"empty"}
)`);
return}
this.tick()}
,this.registerListeners()}
registerListeners(){
super.registerListeners();
const{
hls:e}
=this;
e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(x.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(x.BUFFER_CREATED,this.onBufferCreated,this),e.on(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this)}
unregisterListeners(){
super.unregisterListeners();
const{
hls:e}
=this;
e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(x.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(x.BUFFER_CREATED,this.onBufferCreated,this),e.off(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this)}
onHandlerDestroying(){
this.onMediaPlaying=this.onMediaSeeked=null,this.unregisterListeners(),super.onHandlerDestroying()}
startLoad(e,t){
if(this.levels){
const{
lastCurrentTime:i,hls:n}
=this;
if(this.stopLoad(),this.setInterval(nI),this.level=-1,!this.startFragRequested){
let r=n.startLevel;
r===-1&&(n.config.testBandwidth&&this.levels.length>1?(r=0,this.bitrateTest=!0):r=n.firstAutoLevel),n.nextLoadLevel=r,this.level=n.loadLevel,this._hasEnoughToStart=!!t}
i>0&&e===-1&&!t&&(this.log(`Override startPosition with lastCurrentTime @${
i.toFixed(3)}
`),e=i),this.state=P.IDLE,this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}
else this._forceStartLoad=!0,this.state=P.STOPPED}
stopLoad(){
this._forceStartLoad=!1,super.stopLoad()}
doTick(){
switch(this.state){
case P.WAITING_LEVEL:{
const{
levels:e,level:t}
=this,i=e==null?void 0:e[t],n=i==null?void 0:i.details;
if(n&&(!n.live||this.levelLastLoaded===i&&!this.waitForLive(i))){
if(this.waitForCdnTuneIn(n))break;
this.state=P.IDLE;
break}
else if(this.hls.nextLoadLevel!==this.level){
this.state=P.IDLE;
break}
break}
case P.FRAG_LOADING_WAITING_RETRY:this.checkRetryDate();
break}
this.state===P.IDLE&&this.doTickIdle(),this.onTickEnd()}
onTickEnd(){
var e;
super.onTickEnd(),(e=this.media)!=null&&e.readyState&&this.media.seeking===!1&&(this.lastCurrentTime=this.media.currentTime),this.checkFragmentChanged()}
doTickIdle(){
const{
hls:e,levelLastLoaded:t,levels:i,media:n}
=this;
if(t===null||!n&&!this.primaryPrefetch&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;
const r=this.buffering?e.nextLoadLevel:e.loadLevel;
if(!(i!=null&&i[r]))return;
const a=i[r],o=this.getMainFwdBufferInfo();
if(o===null)return;
const u=this.getLevelDetails();
if(u&&this._streamEnded(o,u)){
const p={
}
;
this.altAudio===2&&(p.type="video"),this.hls.trigger(x.BUFFER_EOS,p),this.state=P.ENDED;
return}
if(!this.buffering)return;
e.loadLevel!==r&&e.manualLevel===-1&&this.log(`Adapting to level ${
r}
 from level ${
this.level}
`),this.level=e.nextLoadLevel=r;
const l=a.details;
if(!l||this.state===P.WAITING_LEVEL||this.waitForLive(a)){
this.level=r,this.state=P.WAITING_LEVEL,this.startFragRequested=!1;
return}
const c=o.len,d=this.getMaxBufferLength(a.maxBitrate);
if(c>=d)return;
this.backtrackFragment&&this.backtrackFragment.start>o.end&&(this.backtrackFragment=null);
const h=this.backtrackFragment?this.backtrackFragment.start:o.end;
let f=this.getNextFragment(h,l);
if(this.couldBacktrack&&!this.fragPrevious&&f&&Ae(f)&&this.fragmentTracker.getState(f)!==be.OK){
var m;
const E=((m=this.backtrackFragment)!=null?m:f).sn-l.startSN,v=l.fragments[E-1];
v&&f.cc===v.cc&&(f=v,this.fragmentTracker.removeFragment(v))}
else this.backtrackFragment&&o.len&&(this.backtrackFragment=null);
if(f&&this.isLoopLoading(f,h)){
if(!f.gap){
const E=this.audioOnly&&!this.altAudio?ce.AUDIO:ce.VIDEO,v=(E===ce.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;
v&&this.afterBufferFlushed(v,E,H.MAIN)}
f=this.getNextFragmentLoopLoading(f,l,o,H.MAIN,d)}
f&&(f.initSegment&&!f.initSegment.data&&!this.bitrateTest&&(f=f.initSegment),this.loadFragment(f,a,h))}
loadFragment(e,t,i){
const n=this.fragmentTracker.getState(e);
n===be.NOT_LOADED||n===be.PARTIAL?Ae(e)?this.bitrateTest?(this.log(`Fragment ${
e.sn}
 of level ${
e.level}
 is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):super.loadFragment(e,t,i):this._loadInitSegment(e,t):this.clearTrackerIfNeeded(e)}
getBufferedFrag(e){
return this.fragmentTracker.getBufferedFrag(e,H.MAIN)}
followingBufferedFrag(e){
return e?this.getBufferedFrag(e.end+.5):null}
immediateLevelSwitch(){
this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}
nextLevelSwitch(){
const{
levels:e,media:t}
=this;
if(t!=null&&t.readyState){
let i;
const n=this.getAppendedFrag(t.currentTime);
n&&n.start>1&&this.flushMainBuffer(0,n.start-1);
const r=this.getLevelDetails();
if(r!=null&&r.live){
const o=this.getMainFwdBufferInfo();
if(!o||o.len<r.targetduration*2)return}
if(!t.paused&&e){
const o=this.hls.nextLoadLevel,u=e[o],l=this.fragLastKbps;
l&&this.fragCurrent?i=this.fragCurrent.duration*u.maxBitrate/(1e3*l)+1:i=0}
else i=0;
const a=this.getBufferedFrag(t.currentTime+i);
if(a){
const o=this.followingBufferedFrag(a);
if(o){
this.abortCurrentFrag();
const u=o.maxStartPTS?o.maxStartPTS:o.start,l=o.duration,c=Math.max(a.end,u+Math.min(Math.max(l-this.config.maxFragLookUpTolerance,l*(this.couldBacktrack?.5:.125)),l*(this.couldBacktrack?.75:.25)));
this.flushMainBuffer(c,Number.POSITIVE_INFINITY)}
}
}
}
abortCurrentFrag(){
const e=this.fragCurrent;
switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){
case P.KEY_LOADING:case P.FRAG_LOADING:case P.FRAG_LOADING_WAITING_RETRY:case P.PARSING:case P.PARSED:this.state=P.IDLE;
break}
this.nextLoadPosition=this.getLoadPosition()}
flushMainBuffer(e,t){
super.flushMainBuffer(e,t,this.altAudio===2?"video":null)}
onMediaAttached(e,t){
super.onMediaAttached(e,t);
const i=t.media;
qe(i,"playing",this.onMediaPlaying),qe(i,"seeked",this.onMediaSeeked)}
onMediaDetaching(e,t){
const{
media:i}
=this;
i&&(st(i,"playing",this.onMediaPlaying),st(i,"seeked",this.onMediaSeeked)),this.videoBuffer=null,this.fragPlaying=null,super.onMediaDetaching(e,t),!t.transferMedia&&(this._hasEnoughToStart=!1)}
onManifestLoading(){
super.onManifestLoading(),this.log("Trigger BUFFER_RESET"),this.hls.trigger(x.BUFFER_RESET,void 0),this.couldBacktrack=!1,this.fragLastKbps=0,this.fragPlaying=this.backtrackFragment=null,this.altAudio=0,this.audioOnly=!1}
onManifestParsed(e,t){
let i=!1,n=!1;
for(let r=0;
r<t.levels.length;
r++){
const a=t.levels[r].audioCodec;
a&&(i=i||a.indexOf("mp4a.40.2")!==-1,n=n||a.indexOf("mp4a.40.5")!==-1)}
this.audioCodecSwitch=i&&n&&!iI(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels;
 declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}
onLevelLoading(e,t){
const{
levels:i}
=this;
if(!i||this.state!==P.IDLE)return;
const n=t.levelInfo;
(!n.details||n.details.live&&(this.levelLastLoaded!==n||n.details.expired)||this.waitForCdnTuneIn(n.details))&&(this.state=P.WAITING_LEVEL)}
onLevelLoaded(e,t){
var i;
const{
levels:n,startFragRequested:r}
=this,a=t.level,o=t.details,u=o.totalduration;
if(!n){
this.warn(`Levels were reset while loading level ${
a}
`);
return}
this.log(`Level ${
a}
 loaded [${
o.startSN}
,${
o.endSN}
]${
o.lastPartSn?`[part-${
o.lastPartSn}
-${
o.lastPartIndex}
]`:""}
, cc [${
o.startCC}
, ${
o.endCC}
] duration:${
u}
`);
const l=t.levelInfo,c=this.fragCurrent;
c&&(this.state===P.FRAG_LOADING||this.state===P.FRAG_LOADING_WAITING_RETRY)&&c.level!==t.level&&c.loader&&this.abortCurrentFrag();
let d=0;
if(o.live||(i=l.details)!=null&&i.live){
var h;
if(this.checkLiveUpdate(o),o.deltaUpdateFailed)return;
d=this.alignPlaylists(o,l.details,(h=this.levelLastLoaded)==null?void 0:h.details)}
if(l.details=o,this.levelLastLoaded=l,r||this.setStartPosition(o,d),this.hls.trigger(x.LEVEL_UPDATED,{
details:o,level:a}
),this.state===P.WAITING_LEVEL){
if(this.waitForCdnTuneIn(o))return;
this.state=P.IDLE}
r&&o.live&&this.synchronizeToLiveEdge(o),this.tick()}
synchronizeToLiveEdge(e){
const{
config:t,media:i}
=this;
if(!i)return;
const n=this.hls.liveSyncPosition,r=this.getLoadPosition(),a=e.fragmentStart,o=e.edge,u=r>=a-t.maxFragLookUpTolerance&&r<=o;
if(n!==null&&i.duration>n&&(r<n||!u)){
const c=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;
if((!u&&i.readyState<4||r<o-c)&&(this._hasEnoughToStart||(this.nextLoadPosition=n),i.readyState))if(this.warn(`Playback: ${
r.toFixed(3)}
 is located too far from the end of live sliding playlist: ${
o}
, reset currentTime to : ${
n.toFixed(3)}
`),this.config.liveSyncMode==="buffered"){
var l;
const d=X.bufferInfo(i,n,0);
if(!((l=d.buffered)!=null&&l.length)){
i.currentTime=n;
return}
if(d.start<=r){
i.currentTime=n;
return}
const{
nextStart:f}
=X.bufferedInfo(d.buffered,r,0);
f&&(i.currentTime=f)}
else i.currentTime=n}
}
_handleFragmentLoadProgress(e){
var t;
const i=e.frag,{
part:n,payload:r}
=e,{
levels:a}
=this;
if(!a){
this.warn(`Levels were reset while fragment load was in progress. Fragment ${
i.sn}
 of level ${
i.level}
 will not be buffered`);
return}
const o=a[i.level];
if(!o){
this.warn(`Level ${
i.level}
 not found on progress`);
return}
const u=o.details;
if(!u){
this.warn(`Dropping fragment ${
i.sn}
 of level ${
i.level}
 after level details were reset`),this.fragmentTracker.removeFragment(i);
return}
const l=o.videoCodec,c=u.PTSKnown||!u.live,d=(t=i.initSegment)==null?void 0:t.data,h=this._getAudioCodec(o),f=this.transmuxer=this.transmuxer||new Ug(this.hls,H.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),m=n?n.index:-1,p=m!==-1,E=new Tc(i.level,i.sn,i.stats.chunkCount,r.byteLength,m,p),v=this.initPTS[i.cc];
f.push(r,d,h,l,i,n,u.totalduration,c,E,v)}
onAudioTrackSwitching(e,t){
const i=this.hls,n=this.altAudio!==0;
if(Pa(t.url,i))this.altAudio=1;
else{
if(this.mediaBuffer!==this.media){
this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;
const a=this.fragCurrent;
a&&(this.log("Switching to main audio track, cancel main fragment load"),a.abortRequests(),this.fragmentTracker.removeFragment(a)),this.resetTransmuxer(),this.resetLoadingState()}
else this.audioOnly&&this.resetTransmuxer();
if(n){
this.altAudio=0,this.fragmentTracker.removeAllFragments(),i.once(x.BUFFER_FLUSHED,()=>{
this.hls&&this.hls.trigger(x.AUDIO_TRACK_SWITCHED,t)}
),i.trigger(x.BUFFER_FLUSHING,{
startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}
);
return}
i.trigger(x.AUDIO_TRACK_SWITCHED,t)}
}
onAudioTrackSwitched(e,t){
const i=Pa(t.url,this.hls);
if(i){
const n=this.videoBuffer;
n&&this.mediaBuffer!==n&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=n)}
this.altAudio=i?2:0,this.tick()}
onBufferCreated(e,t){
const i=t.tracks;
let n,r,a=!1;
for(const o in i){
const u=i[o];
if(u.id==="main"){
if(r=o,n=u,o==="video"){
const l=i[o];
l&&(this.videoBuffer=l.buffer)}
}
else a=!0}
a&&n?(this.log(`Alternate track found, use ${
r}
.buffered to schedule main fragment loading`),this.mediaBuffer=n.buffer):this.mediaBuffer=this.media}
onFragBuffered(e,t){
const{
frag:i,part:n}
=t,r=i.type===H.MAIN;
if(r){
if(this.fragContextChanged(i)){
this.warn(`Fragment ${
i.sn}
${
n?" p: "+n.index:""}
 of level ${
i.level}
 finished buffering, but was aborted. state: ${
this.state}
`),this.state===P.PARSED&&(this.state=P.IDLE);
return}
const o=n?n.stats:i.stats;
this.fragLastKbps=Math.round(8*o.total/(o.buffering.end-o.loading.first)),Ae(i)&&(this.fragPrevious=i),this.fragBufferedComplete(i,n)}
const a=this.media;
a&&(!this._hasEnoughToStart&&X.getBuffered(a).length&&(this._hasEnoughToStart=!0,this.seekToStartPos()),r&&this.tick())}
get hasEnoughToStart(){
return this._hasEnoughToStart}
onError(e,t){
var i;
if(t.fatal){
this.state=P.ERROR;
return}
switch(t.details){
case b.FRAG_GAP:case b.FRAG_PARSING_ERROR:case b.FRAG_DECRYPT_ERROR:case b.FRAG_LOAD_ERROR:case b.FRAG_LOAD_TIMEOUT:case b.KEY_LOAD_ERROR:case b.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(H.MAIN,t);
break;
case b.LEVEL_LOAD_ERROR:case b.LEVEL_LOAD_TIMEOUT:case b.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===P.WAITING_LEVEL&&((i=t.context)==null?void 0:i.type)===se.LEVEL&&(this.state=P.IDLE);
break;
case b.BUFFER_ADD_CODEC_ERROR:case b.BUFFER_APPEND_ERROR:if(t.parent!=="main")return;
this.reduceLengthAndFlushBuffer(t)&&this.resetLoadingState();
break;
case b.BUFFER_FULL_ERROR:if(t.parent!=="main")return;
this.reduceLengthAndFlushBuffer(t)&&(!this.config.interstitialsController&&this.config.assetPlayerId?this._hasEnoughToStart=!0:this.flushMainBuffer(0,Number.POSITIVE_INFINITY));
break;
case b.INTERNAL_EXCEPTION:this.recoverWorkerError(t);
break}
}
onFragLoadEmergencyAborted(){
this.state=P.IDLE,this._hasEnoughToStart||(this.startFragRequested=!1,this.nextLoadPosition=this.lastCurrentTime),this.tickImmediate()}
onBufferFlushed(e,{
type:t}
){
if(t!==ce.AUDIO||!this.altAudio){
const i=(t===ce.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;
i&&(this.afterBufferFlushed(i,t,H.MAIN),this.tick())}
}
onLevelsUpdated(e,t){
this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level,this.level===-1&&this.resetWhenMissingContext(this.fragCurrent)),this.levels=t.levels}
swapAudioCodec(){
this.audioCodecSwap=!this.audioCodecSwap}
seekToStartPos(){
const{
media:e}
=this;
if(!e)return;
const t=e.currentTime;
let i=this.startPosition;
if(i>=0&&t<i){
if(e.seeking){
this.log(`could not seek to ${
i}
, already seeking at ${
t}
`);
return}
const n=this.timelineOffset;
n&&i&&(i+=n);
const r=this.getLevelDetails(),a=X.getBuffered(e),o=a.length?a.start(0):0,u=o-i,l=Math.max(this.config.maxBufferHole,this.config.maxFragLookUpTolerance);
(this.config.startOnSegmentBoundary||u>0&&(u<l||this.loadingParts&&u<2*((r==null?void 0:r.partTarget)||0)))&&(this.log(`adjusting start position by ${
u}
 to match buffer start`),i+=u,this.startPosition=i),t<i&&(this.log(`seek to target start position ${
i}
 from current time ${
t}
 buffer start ${
o}
`),e.currentTime=i)}
}
_getAudioCodec(e){
let t=this.config.defaultAudioCodec||e.audioCodec;
return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}
_loadBitrateTestFrag(e,t){
e.bitrateTest=!0,this._doFragLoad(e,t).then(i=>{
const{
hls:n}
=this,r=i==null?void 0:i.frag;
if(!r||this.fragContextChanged(r))return;
t.fragmentError=0,this.state=P.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;
const a=r.stats;
a.parsing.start=a.parsing.end=a.buffering.start=a.buffering.end=self.performance.now(),n.trigger(x.FRAG_LOADED,i),r.bitrateTest=!1}
).catch(i=>{
this.state===P.STOPPED||this.state===P.ERROR||(this.warn(i),this.resetFragmentLoading(e))}
)}
_handleTransmuxComplete(e){
const t=this.playlistType,{
hls:i}
=this,{
remuxResult:n,chunkMeta:r}
=e,a=this.getCurrentContext(r);
if(!a){
this.resetWhenMissingContext(r);
return}
const{
frag:o,part:u,level:l}
=a,{
video:c,text:d,id3:h,initSegment:f}
=n,{
details:m}
=l,p=this.altAudio?void 0:n.audio;
if(this.fragContextChanged(o)){
this.fragmentTracker.removeFragment(o);
return}
if(this.state=P.PARSING,f){
const E=f.tracks;
if(E){
const T=o.initSegment||o;
if(this.unhandledEncryptionError(f,o))return;
this._bufferInitSegment(l,E,T,r),i.trigger(x.FRAG_PARSING_INIT_SEGMENT,{
frag:T,id:t,tracks:E}
)}
const v=f.initPTS,y=f.timescale,S=this.initPTS[o.cc];
if(j(v)&&(!S||S.baseTime!==v||S.timescale!==y)){
const T=f.trackId;
this.initPTS[o.cc]={
baseTime:v,timescale:y,trackId:T}
,i.trigger(x.INIT_PTS_FOUND,{
frag:o,id:t,initPTS:v,timescale:y,trackId:T}
)}
}
if(c&&m){
p&&c.type==="audiovideo"&&this.logMuxedErr(o);
const E=m.fragments[o.sn-1-m.startSN],v=o.sn===m.startSN,y=!E||o.cc>E.cc;
if(n.independent!==!1){
const{
startPTS:S,endPTS:T,startDTS:I,endDTS:_}
=c;
if(u)u.elementaryStreams[c.type]={
startPTS:S,endPTS:T,startDTS:I,endDTS:_}
;
else if(c.firstKeyFrame&&c.independent&&r.id===1&&!y&&(this.couldBacktrack=!0),c.dropped&&c.independent){
const L=this.getMainFwdBufferInfo(),R=(L?L.end:this.getLoadPosition())+this.config.maxBufferHole,w=c.firstKeyFramePTS?c.firstKeyFramePTS:S;
if(!v&&R<w-this.config.maxBufferHole&&!y){
this.backtrack(o);
return}
else y&&(o.gap=!0);
o.setElementaryStreamInfo(c.type,o.start,T,o.start,_,!0)}
else v&&S-(m.appliedTimelineOffset||0)>na&&(o.gap=!0);
o.setElementaryStreamInfo(c.type,S,T,I,_),this.backtrackFragment&&(this.backtrackFragment=o),this.bufferFragmentData(c,o,u,r,v||y)}
else if(v||y)o.gap=!0;
else{
this.backtrack(o);
return}
}
if(p){
const{
startPTS:E,endPTS:v,startDTS:y,endDTS:S}
=p;
u&&(u.elementaryStreams[ce.AUDIO]={
startPTS:E,endPTS:v,startDTS:y,endDTS:S}
),o.setElementaryStreamInfo(ce.AUDIO,E,v,y,S),this.bufferFragmentData(p,o,u,r)}
if(m&&h!=null&&h.samples.length){
const E={
id:t,frag:o,details:m,samples:h.samples}
;
i.trigger(x.FRAG_PARSING_METADATA,E)}
if(m&&d){
const E={
id:t,frag:o,details:m,samples:d.samples}
;
i.trigger(x.FRAG_PARSING_USERDATA,E)}
}
logMuxedErr(e){
this.warn(`${
Ae(e)?"Media":"Init"}
 segment with muxed audiovideo where only video expected: ${
e.url}
`)}
_bufferInitSegment(e,t,i,n){
if(this.state!==P.PARSING)return;
this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&(delete t.audio,t.audiovideo&&this.logMuxedErr(i));
const{
audio:r,video:a,audiovideo:o}
=t;
if(r){
const l=e.audioCodec;
let c=Xr(r.codec,l);
c==="mp4a"&&(c="mp4a.40.5");
const d=navigator.userAgent.toLowerCase();
if(this.audioCodecSwitch){
c&&(c.indexOf("mp4a.40.5")!==-1?c="mp4a.40.2":c="mp4a.40.5");
const h=r.metadata;
h&&"channelCount"in h&&(h.channelCount||1)!==1&&d.indexOf("firefox")===-1&&(c="mp4a.40.5")}
c&&c.indexOf("mp4a.40.5")!==-1&&d.indexOf("android")!==-1&&r.container!=="audio/mpeg"&&(c="mp4a.40.2",this.log(`Android: force audio codec to ${
c}
`)),l&&l!==c&&this.log(`Swapping manifest audio codec "${
l}
" for "${
c}
"`),r.levelCodec=c,r.id=H.MAIN,this.log(`Init audio buffer, container:${
r.container}
, codecs[selected/level/parsed]=[${
c||""}
/${
l||""}
/${
r.codec}
]`),delete t.audiovideo}
if(a){
a.levelCodec=e.videoCodec,a.id=H.MAIN;
const l=a.codec;
if((l==null?void 0:l.length)===4)switch(l){
case"hvc1":case"hev1":a.codec="hvc1.1.6.L120.90";
break;
case"av01":a.codec="av01.0.04M.08";
break;
case"avc1":a.codec="avc1.42e01e";
break}
this.log(`Init video buffer, container:${
a.container}
, codecs[level/parsed]=[${
e.videoCodec||""}
/${
l}
]${
a.codec!==l?" parsed-corrected="+a.codec:""}
${
a.supplemental?" supplemental="+a.supplemental:""}
`),delete t.audiovideo}
o&&(this.log(`Init audiovideo buffer, container:${
o.container}
, codecs[level/parsed]=[${
e.codecs}
/${
o.codec}
]`),delete t.video,delete t.audio);
const u=Object.keys(t);
if(u.length){
if(this.hls.trigger(x.BUFFER_CODECS,t),!this.hls)return;
u.forEach(l=>{
const d=t[l].initSegment;
d!=null&&d.byteLength&&this.hls.trigger(x.BUFFER_APPENDING,{
type:l,data:d,frag:i,part:null,chunkMeta:n,parent:i.type}
)}
)}
this.tickImmediate()}
getMainFwdBufferInfo(){
const e=this.mediaBuffer&&this.altAudio===2?this.mediaBuffer:this.media;
return this.getFwdBufferInfo(e,H.MAIN)}
get maxBufferLength(){
const{
levels:e,level:t}
=this,i=e==null?void 0:e[t];
return i?this.getMaxBufferLength(i.maxBitrate):this.config.maxBufferLength}
backtrack(e){
this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=P.IDLE}
checkFragmentChanged(){
const e=this.media;
let t=null;
if(e&&e.readyState>1&&e.seeking===!1){
const i=e.currentTime;
if(X.isBuffered(e,i)?t=this.getAppendedFrag(i):X.isBuffered(e,i+.1)&&(t=this.getAppendedFrag(i+.1)),t){
this.backtrackFragment=null;
const n=this.fragPlaying,r=t.level;
(!n||t.sn!==n.sn||n.level!==r)&&(this.fragPlaying=t,this.hls.trigger(x.FRAG_CHANGED,{
frag:t}
),(!n||n.level!==r)&&this.hls.trigger(x.LEVEL_SWITCHED,{
level:r}
))}
}
}
get nextLevel(){
const e=this.nextBufferedFrag;
return e?e.level:-1}
get currentFrag(){
var e;
if(this.fragPlaying)return this.fragPlaying;
const t=((e=this.media)==null?void 0:e.currentTime)||this.lastCurrentTime;
return j(t)?this.getAppendedFrag(t):null}
get currentProgramDateTime(){
var e;
const t=((e=this.media)==null?void 0:e.currentTime)||this.lastCurrentTime;
if(j(t)){
const i=this.getLevelDetails(),n=this.currentFrag||(i?ai(null,i.fragments,t):null);
if(n){
const r=n.programDateTime;
if(r!==null){
const a=r+(t-n.start)*1e3;
return new Date(a)}
}
}
return null}
get currentLevel(){
const e=this.currentFrag;
return e?e.level:-1}
get nextBufferedFrag(){
const e=this.currentFrag;
return e?this.followingBufferedFrag(e):null}
get forceStartLoad(){
return this._forceStartLoad}
}
class aI extends _t{
constructor(e,t){
super("key-loader",t),this.config=void 0,this.keyIdToKeyInfo={
}
,this.emeController=null,this.config=e}
abort(e){
for(const i in this.keyIdToKeyInfo){
const n=this.keyIdToKeyInfo[i].loader;
if(n){
var t;
if(e&&e!==((t=n.context)==null?void 0:t.frag.type))return;
n.abort()}
}
}
detach(){
for(const e in this.keyIdToKeyInfo){
const t=this.keyIdToKeyInfo[e];
(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyIdToKeyInfo[e]}
}
destroy(){
this.detach();
for(const e in this.keyIdToKeyInfo){
const t=this.keyIdToKeyInfo[e].loader;
t&&t.destroy()}
this.keyIdToKeyInfo={
}
}
createKeyLoadError(e,t=b.KEY_LOAD_ERROR,i,n,r){
return new ts({
type:Y.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:r,error:i,networkDetails:n}
)}
loadClear(e,t,i){
if(this.emeController&&this.config.emeEnabled&&!this.emeController.getSelectedKeySystemFormats().length){
if(t.length)for(let n=0,r=t.length;
n<r;
n++){
const a=t[n];
if(e.cc<=a.cc&&(!Ae(e)||!Ae(a)||e.sn<a.sn)||!i&&n==r-1)return this.emeController.selectKeySystemFormat(a).then(o=>{
if(!this.emeController)return;
a.setKeyFormat(o);
const u=Jr(o);
if(u)return this.emeController.getKeySystemAccess([u])}
)}
if(this.config.requireKeySystemAccessOnStart){
const n=mn(this.config);
if(n.length)return this.emeController.getKeySystemAccess(n)}
}
return null}
load(e){
return!e.decryptdata&&e.encrypted&&this.emeController&&this.config.emeEnabled?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}
loadInternal(e,t){
var i,n;
t&&e.setKeyFormat(t);
const r=e.decryptdata;
if(!r){
const l=new Error(t?`Expected frag.decryptdata to be defined after setting format ${
t}
`:`Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${
this.emeController&&this.config.emeEnabled}
)`);
return Promise.reject(this.createKeyLoadError(e,b.KEY_LOAD_ERROR,l))}
const a=r.uri;
if(!a)return Promise.reject(this.createKeyLoadError(e,b.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${
a}
"`)));
const o=rl(r);
let u=this.keyIdToKeyInfo[o];
if((i=u)!=null&&i.decryptdata.key)return r.key=u.decryptdata.key,Promise.resolve({
frag:e,keyInfo:u}
);
if(this.emeController&&(n=u)!=null&&n.keyLoadPromise)switch(this.emeController.getKeyStatus(u.decryptdata)){
case"usable":case"usable-in-future":return u.keyLoadPromise.then(c=>{
const{
keyInfo:d}
=c;
return r.key=d.decryptdata.key,{
frag:e,keyInfo:d}
}
)}
switch(this.log(`${
this.keyIdToKeyInfo[o]?"Rel":"L"}
oading${
r.keyId?" keyId: "+Be(r.keyId):""}
 URI: ${
r.uri}
 from ${
e.type}
 ${
e.level}
`),u=this.keyIdToKeyInfo[o]={
decryptdata:r,keyLoadPromise:null,loader:null,mediaKeySessionContext:null}
,r.method){
case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return r.keyFormat==="identity"?this.loadKeyHTTP(u,e):this.loadKeyEME(u,e);
case"AES-128":case"AES-256":case"AES-256-CTR":return this.loadKeyHTTP(u,e);
default:return Promise.reject(this.createKeyLoadError(e,b.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${
r.method}
"`)))}
}
loadKeyEME(e,t){
const i={
frag:t,keyInfo:e}
;
if(this.emeController&&this.config.emeEnabled){
var n;
if(!e.decryptdata.keyId&&(n=t.initSegment)!=null&&n.data){
const a=Ax(t.initSegment.data);
if(a.length){
let o=a[0];
o.some(u=>u!==0)?(this.log(`Using keyId found in init segment ${
Be(o)}
`),Ds.setKeyIdForUri(e.decryptdata.uri,o)):(o=Ds.addKeyIdForUri(e.decryptdata.uri),this.log(`Generating keyId to patch media ${
Be(o)}
`)),e.decryptdata.keyId=o}
}
if(!e.decryptdata.keyId&&!Ae(t))return Promise.resolve(i);
const r=this.emeController.loadKey(i);
return(e.keyLoadPromise=r.then(a=>(e.mediaKeySessionContext=a,i))).catch(a=>{
throw e.keyLoadPromise=null,"data"in a&&(a.data.frag=t),a}
)}
return Promise.resolve(i)}
loadKeyHTTP(e,t){
const i=this.config,n=i.loader,r=new n(i);
return t.keyLoader=e.loader=r,e.keyLoadPromise=new Promise((a,o)=>{
const u={
keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri}
,l=i.keyLoadPolicy.default,c={
loadPolicy:l,timeout:l.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0}
,d={
onSuccess:(h,f,m,p)=>{
const{
frag:E,keyInfo:v}
=m,y=rl(v.decryptdata);
if(!E.decryptdata||v!==this.keyIdToKeyInfo[y])return o(this.createKeyLoadError(E,b.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),p));
v.decryptdata.key=E.decryptdata.key=new Uint8Array(h.data),E.keyLoader=null,v.loader=null,a({
frag:E,keyInfo:v}
)}
,onError:(h,f,m,p)=>{
this.resetLoader(f),o(this.createKeyLoadError(t,b.KEY_LOAD_ERROR,new Error(`HTTP Error ${
h.code}
 loading key ${
h.text}
`),m,ae({
url:u.url,data:void 0}
,h)))}
,onTimeout:(h,f,m)=>{
this.resetLoader(f),o(this.createKeyLoadError(t,b.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),m))}
,onAbort:(h,f,m)=>{
this.resetLoader(f),o(this.createKeyLoadError(t,b.INTERNAL_ABORTED,new Error("key loading aborted"),m))}
}
;
r.load(u,c,d)}
)}
resetLoader(e){
const{
frag:t,keyInfo:i,url:n}
=e,r=i.loader;
t.keyLoader===r&&(t.keyLoader=null,i.loader=null);
const a=rl(i.decryptdata)||n;
delete this.keyIdToKeyInfo[a],r&&r.destroy()}
}
function rl(s){
if(s.keyFormat!==$e.FAIRPLAY){
const e=s.keyId;
if(e)return Be(e)}
return s.uri}
function yf(s){
const{
type:e}
=s;
switch(e){
case se.AUDIO_TRACK:return H.AUDIO;
case se.SUBTITLE_TRACK:return H.SUBTITLE;
default:return H.MAIN}
}
function al(s,e){
let t=s.url;
return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}
class oI{
constructor(e){
this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.onManifestLoaded=this.checkAutostartLoad,this.hls=e,this.registerListeners()}
startLoad(e){
}
stopLoad(){
this.destroyInternalLoaders()}
registerListeners(){
const{
hls:e}
=this;
e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(x.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this)}
unregisterListeners(){
const{
hls:e}
=this;
e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_LOADING,this.onLevelLoading,this),e.off(x.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(x.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this)}
createInternalLoader(e){
const t=this.hls.config,i=t.pLoader,n=t.loader,r=i||n,a=new r(t);
return this.loaders[e.type]=a,a}
getInternalLoader(e){
return this.loaders[e.type]}
resetInternalLoader(e){
this.loaders[e]&&delete this.loaders[e]}
destroyInternalLoaders(){
for(const e in this.loaders){
const t=this.loaders[e];
t&&t.destroy(),this.resetInternalLoader(e)}
}
destroy(){
this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}
onManifestLoading(e,t){
const{
url:i}
=t;
this.variableList=null,this.load({
id:null,level:0,responseType:"text",type:se.MANIFEST,url:i,deliveryDirectives:null,levelOrTrack:null}
)}
onLevelLoading(e,t){
const{
id:i,level:n,pathwayId:r,url:a,deliveryDirectives:o,levelInfo:u}
=t;
this.load({
id:i,level:n,pathwayId:r,responseType:"text",type:se.LEVEL,url:a,deliveryDirectives:o,levelOrTrack:u}
)}
onAudioTrackLoading(e,t){
const{
id:i,groupId:n,url:r,deliveryDirectives:a,track:o}
=t;
this.load({
id:i,groupId:n,level:null,responseType:"text",type:se.AUDIO_TRACK,url:r,deliveryDirectives:a,levelOrTrack:o}
)}
onSubtitleTrackLoading(e,t){
const{
id:i,groupId:n,url:r,deliveryDirectives:a,track:o}
=t;
this.load({
id:i,groupId:n,level:null,responseType:"text",type:se.SUBTITLE_TRACK,url:r,deliveryDirectives:a,levelOrTrack:o}
)}
onLevelsUpdated(e,t){
const i=this.loaders[se.LEVEL];
if(i){
const n=i.context;
n&&!t.levels.some(r=>r===n.levelOrTrack)&&(i.abort(),delete this.loaders[se.LEVEL])}
}
load(e){
var t;
const i=this.hls.config;
let n=this.getInternalLoader(e);
if(n){
const l=this.hls.logger,c=n.context;
if(c&&c.levelOrTrack===e.levelOrTrack&&(c.url===e.url||c.deliveryDirectives&&!e.deliveryDirectives)){
c.url===e.url?l.log(`[playlist-loader]: ignore ${
e.url}
 ongoing request`):l.log(`[playlist-loader]: ignore ${
e.url}
 in favor of ${
c.url}
`);
return}
l.log(`[playlist-loader]: aborting previous loader for type: ${
e.type}
`),n.abort()}
let r;
if(e.type===se.MANIFEST?r=i.manifestLoadPolicy.default:r=ue({
}
,i.playlistLoadPolicy.default,{
timeoutRetry:null,errorRetry:null}
),n=this.createInternalLoader(e),j((t=e.deliveryDirectives)==null?void 0:t.part)){
let l;
if(e.type===se.LEVEL&&e.level!==null?l=this.hls.levels[e.level].details:e.type===se.AUDIO_TRACK&&e.id!==null?l=this.hls.audioTracks[e.id].details:e.type===se.SUBTITLE_TRACK&&e.id!==null&&(l=this.hls.subtitleTracks[e.id].details),l){
const c=l.partTarget,d=l.targetduration;
if(c&&d){
const h=Math.max(c*3,d*.8)*1e3;
r=ue({
}
,r,{
maxTimeToFirstByteMs:Math.min(h,r.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(h,r.maxTimeToFirstByteMs)}
)}
}
}
const a=r.errorRetry||r.timeoutRetry||{
}
,o={
loadPolicy:r,timeout:r.maxLoadTimeMs,maxRetry:a.maxNumRetry||0,retryDelay:a.retryDelayMs||0,maxRetryDelay:a.maxRetryDelayMs||0}
,u={
onSuccess:(l,c,d,h)=>{
const f=this.getInternalLoader(d);
this.resetInternalLoader(d.type);
const m=l.data;
c.parsing.start=performance.now(),Wt.isMediaPlaylist(m)||d.type!==se.MANIFEST?this.handleTrackOrLevelPlaylist(l,c,d,h||null,f):this.handleMasterPlaylist(l,c,d,h)}
,onError:(l,c,d,h)=>{
this.handleNetworkError(c,d,!1,l,h)}
,onTimeout:(l,c,d)=>{
this.handleNetworkError(c,d,!0,void 0,l)}
}
;
n.load(e,o,u)}
checkAutostartLoad(){
if(!this.hls)return;
const{
config:{
autoStartLoad:e,startPosition:t}
,forceStartLoad:i}
=this.hls;
(e||i)&&(this.hls.logger.log(`${
e?"auto":"force"}
 startLoad with configured startPosition ${
t}
`),this.hls.startLoad(t))}
handleMasterPlaylist(e,t,i,n){
const r=this.hls,a=e.data,o=al(e,i),u=Wt.parseMasterPlaylist(a,o);
if(u.playlistParsingError){
t.parsing.end=performance.now(),this.handleManifestParsingError(e,i,u.playlistParsingError,n,t);
return}
const{
contentSteering:l,levels:c,sessionData:d,sessionKeys:h,startTimeOffset:f,variableList:m}
=u;
this.variableList=m,c.forEach(y=>{
const{
unknownCodecs:S}
=y;
if(S){
const{
preferManagedMediaSource:T}
=this.hls.config;
let{
audioCodec:I,videoCodec:_}
=y;
for(let L=S.length;
L--;
){
const R=S[L];
Hn(R,"audio",T)?(y.audioCodec=I=I?`${
I}
,${
R}
`:R,Wi.audio[I.substring(0,4)]=2,S.splice(L,1)):Hn(R,"video",T)&&(y.videoCodec=_=_?`${
_}
,${
R}
`:R,Wi.video[_.substring(0,4)]=2,S.splice(L,1))}
}
}
);
const{
AUDIO:p=[],SUBTITLES:E,"CLOSED-CAPTIONS":v}
=Wt.parseMasterPlaylistMedia(a,o,u);
p.length&&!p.some(S=>!S.url)&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),p.unshift({
type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new pe({
}
),bitrate:0,url:""}
)),r.trigger(x.MANIFEST_LOADED,{
levels:c,audioTracks:p,subtitles:E,captions:v,contentSteering:l,url:o,stats:t,networkDetails:n,sessionData:d,sessionKeys:h,startTimeOffset:f,variableList:m}
)}
handleTrackOrLevelPlaylist(e,t,i,n,r){
const a=this.hls,{
id:o,level:u,type:l}
=i,c=al(e,i),d=j(u)?u:j(o)?o:0,h=yf(i),f=Wt.parseLevelPlaylist(e.data,c,d,h,0,this.variableList);
if(l===se.MANIFEST){
const m={
attrs:new pe({
}
),bitrate:0,details:f,name:"",url:c}
;
f.requestScheduled=t.loading.start+fg(f,0),a.trigger(x.MANIFEST_LOADED,{
levels:[m],audioTracks:[],url:c,stats:t,networkDetails:n,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null}
)}
t.parsing.end=performance.now(),i.levelDetails=f,this.handlePlaylistLoaded(f,e,t,i,n,r)}
handleManifestParsingError(e,t,i,n,r){
this.hls.trigger(x.ERROR,{
type:Y.NETWORK_ERROR,details:b.MANIFEST_PARSING_ERROR,fatal:t.type===se.MANIFEST,url:e.url,err:i,error:i,reason:i.message,response:e,context:t,networkDetails:n,stats:r}
)}
handleNetworkError(e,t,i=!1,n,r){
let a=`A network ${
i?"timeout":"error"+(n?" (status "+n.code+")":"")}
 occurred while loading ${
e.type}
`;
e.type===se.LEVEL?a+=`: ${
e.level}
 id: ${
e.id}
`:(e.type===se.AUDIO_TRACK||e.type===se.SUBTITLE_TRACK)&&(a+=` id: ${
e.id}
 group-id: "${
e.groupId}
"`);
const o=new Error(a);
this.hls.logger.warn(`[playlist-loader]: ${
a}
`);
let u=b.UNKNOWN,l=!1;
const c=this.getInternalLoader(e);
switch(e.type){
case se.MANIFEST:u=i?b.MANIFEST_LOAD_TIMEOUT:b.MANIFEST_LOAD_ERROR,l=!0;
break;
case se.LEVEL:u=i?b.LEVEL_LOAD_TIMEOUT:b.LEVEL_LOAD_ERROR,l=!1;
break;
case se.AUDIO_TRACK:u=i?b.AUDIO_TRACK_LOAD_TIMEOUT:b.AUDIO_TRACK_LOAD_ERROR,l=!1;
break;
case se.SUBTITLE_TRACK:u=i?b.SUBTITLE_TRACK_LOAD_TIMEOUT:b.SUBTITLE_LOAD_ERROR,l=!1;
break}
c&&this.resetInternalLoader(e.type);
const d={
type:Y.NETWORK_ERROR,details:u,fatal:l,url:e.url,loader:c,context:e,error:o,networkDetails:t,stats:r}
;
if(n){
const h=(t==null?void 0:t.url)||e.url;
d.response=ae({
url:h,data:void 0}
,n)}
this.hls.trigger(x.ERROR,d)}
handlePlaylistLoaded(e,t,i,n,r,a){
const o=this.hls,{
type:u,level:l,levelOrTrack:c,id:d,groupId:h,deliveryDirectives:f}
=n,m=al(t,n),p=yf(n);
let E=typeof n.level=="number"&&p===H.MAIN?l:void 0;
const v=e.playlistParsingError;
if(v){
if(this.hls.logger.warn(`${
v}
 ${
e.url}
`),!o.config.ignorePlaylistParsingErrors){
o.trigger(x.ERROR,{
type:Y.NETWORK_ERROR,details:b.LEVEL_PARSING_ERROR,fatal:!1,url:m,error:v,reason:v.message,response:t,context:n,level:E,parent:p,networkDetails:r,stats:i}
);
return}
e.playlistParsingError=null}
if(!e.fragments.length){
const y=e.playlistParsingError=new Error("No Segments found in Playlist");
o.trigger(x.ERROR,{
type:Y.NETWORK_ERROR,details:b.LEVEL_EMPTY_ERROR,fatal:!1,url:m,error:y,reason:y.message,response:t,context:n,level:E,parent:p,networkDetails:r,stats:i}
);
return}
switch(e.live&&a&&(a.getCacheAge&&(e.ageHeader=a.getCacheAge()||0),(!a.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),u){
case se.MANIFEST:case se.LEVEL:if(E){
if(!c)E=0;
else if(c!==o.levels[E]){
const y=o.levels.indexOf(c);
y>-1&&(E=y)}
}
o.trigger(x.LEVEL_LOADED,{
details:e,levelInfo:c||o.levels[0],level:E||0,id:d||0,stats:i,networkDetails:r,deliveryDirectives:f,withoutMultiVariant:u===se.MANIFEST}
);
break;
case se.AUDIO_TRACK:o.trigger(x.AUDIO_TRACK_LOADED,{
details:e,track:c,id:d||0,groupId:h||"",stats:i,networkDetails:r,deliveryDirectives:f}
);
break;
case se.SUBTITLE_TRACK:o.trigger(x.SUBTITLE_TRACK_LOADED,{
details:e,track:c,id:d||0,groupId:h||"",stats:i,networkDetails:r,deliveryDirectives:f}
);
break}
}
}
class dt{
static get version(){
return Yn}
static isMSESupported(){
return hp()}
static isSupported(){
return sI()}
static getMediaSource(){
return Os()}
static get Events(){
return x}
static get MetadataSchema(){
return ct}
static get ErrorTypes(){
return Y}
static get ErrorDetails(){
return b}
static get DefaultConfig(){
return dt.defaultConfig?dt.defaultConfig:K1}
static set DefaultConfig(e){
dt.defaultConfig=e}
constructor(e={
}
){
this.config=void 0,this.userConfig=void 0,this.logger=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new Rc,this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioStreamController=void 0,this.subtititleStreamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.interstitialsController=void 0,this.gapController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this._url=null,this._sessionId=void 0,this.triggeringException=void 0,this.started=!1;
const t=this.logger=fx(e.debug||!1,"Hls instance",e.assetPlayerId),i=this.config=z1(dt.DefaultConfig,e,t);
this.userConfig=e,i.progressive&&W1(i,t);
const{
abrController:n,bufferController:r,capLevelController:a,errorController:o,fpsController:u}
=i,l=new o(this),c=this.abrController=new n(this),d=new lE(this),h=i.interstitialsController,f=h?this.interstitialsController=new h(this,dt):null,m=this.bufferController=new r(this,d),p=this.capLevelController=new a(this),E=new u(this),v=new oI(this),y=i.contentSteeringController,S=y?new y(this):null,T=this.levelController=new tI(this,S),I=new J1(this),_=new aI(this.config,this.logger),L=this.streamController=new rI(this,d,_),R=this.gapController=new X1(this,d);
p.setStreamController(L),E.setStreamController(L);
const w=[v,T,L];
f&&w.splice(1,0,f),S&&w.splice(1,0,S),this.networkControllers=w;
const A=[c,m,R,p,E,I,d];
this.audioTrackController=this.createController(i.audioTrackController,w);
const D=i.audioStreamController;
D&&w.push(this.audioStreamController=new D(this,d,_)),this.subtitleTrackController=this.createController(i.subtitleTrackController,w);
const $=i.subtitleStreamController;
$&&w.push(this.subtititleStreamController=new $(this,d,_)),this.createController(i.timelineController,A),_.emeController=this.emeController=this.createController(i.emeController,A),this.cmcdController=this.createController(i.cmcdController,A),this.latencyController=this.createController(eI,A),this.coreComponents=A,w.push(l);
const G=l.onErrorOut;
typeof G=="function"&&this.on(x.ERROR,G,l),this.on(x.MANIFEST_LOADED,v.onManifestLoaded,v)}
createController(e,t){
if(e){
const i=new e(this);
return t&&t.push(i),i}
return null}
on(e,t,i=this){
this._emitter.on(e,t,i)}
once(e,t,i=this){
this._emitter.once(e,t,i)}
removeAllListeners(e){
this._emitter.removeAllListeners(e)}
off(e,t,i=this,n){
this._emitter.off(e,t,i,n)}
listeners(e){
return this._emitter.listeners(e)}
emit(e,t,i){
return this._emitter.emit(e,t,i)}
trigger(e,t){
if(this.config.debug)return this.emit(e,e,t);
try{
return this.emit(e,e,t)}
catch(i){
if(this.logger.error("An internal error happened while handling event "+e+'. Error message: "'+i.message+'". Here is a stacktrace:',i),!this.triggeringException){
this.triggeringException=!0;
const n=e===x.ERROR;
this.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.INTERNAL_EXCEPTION,fatal:n,event:e,error:i}
),this.triggeringException=!1}
}
return!1}
listenerCount(e){
return this._emitter.listenerCount(e)}
destroy(){
this.logger.log("destroy"),this.trigger(x.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this._url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;
const e=this.config;
e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}
attachMedia(e){
if(!e||"media"in e&&!e.media){
const r=new Error(`attachMedia failed: invalid argument (${
e}
)`);
this.trigger(x.ERROR,{
type:Y.OTHER_ERROR,details:b.ATTACH_MEDIA_ERROR,fatal:!0,error:r}
);
return}
this.logger.log("attachMedia"),this._media&&(this.logger.warn("media must be detached before attaching"),this.detachMedia());
const t="media"in e,i=t?e.media:e,n=t?e:{
media:i}
;
this._media=i,this.trigger(x.MEDIA_ATTACHING,n)}
detachMedia(){
this.logger.log("detachMedia"),this.trigger(x.MEDIA_DETACHING,{
}
),this._media=null}
transferMedia(){
this._media=null;
const e=this.bufferController.transferMedia();
return this.trigger(x.MEDIA_DETACHING,{
transferMedia:e}
),e}
loadSource(e){
this.stopLoad();
const t=this.media,i=this._url,n=this._url=gc.buildAbsoluteURL(self.location.href,e,{
alwaysNormalize:!0}
);
this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.logger.log(`loadSource:${
n}
`),t&&i&&(i!==n||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(t)),this.trigger(x.MANIFEST_LOADING,{
url:e}
)}
get url(){
return this._url}
get hasEnoughToStart(){
return this.streamController.hasEnoughToStart}
get startPosition(){
return this.streamController.startPositionValue}
startLoad(e=-1,t){
this.logger.log(`startLoad(${
e+(t?", <skip seek to start>":"")}
)`),this.started=!0,this.resumeBuffering();
for(let i=0;
i<this.networkControllers.length&&(this.networkControllers[i].startLoad(e,t),!(!this.started||!this.networkControllers));
i++);
}
stopLoad(){
this.logger.log("stopLoad"),this.started=!1;
for(let e=0;
e<this.networkControllers.length&&(this.networkControllers[e].stopLoad(),!(this.started||!this.networkControllers));
e++);
}
get loadingEnabled(){
return this.started}
get bufferingEnabled(){
return this.streamController.bufferingEnabled}
resumeBuffering(){
this.bufferingEnabled||(this.logger.log("resume buffering"),this.networkControllers.forEach(e=>{
e.resumeBuffering&&e.resumeBuffering()}
))}
pauseBuffering(){
this.bufferingEnabled&&(this.logger.log("pause buffering"),this.networkControllers.forEach(e=>{
e.pauseBuffering&&e.pauseBuffering()}
))}
get inFlightFragments(){
const e={
[H.MAIN]:this.streamController.inFlightFrag}
;
return this.audioStreamController&&(e[H.AUDIO]=this.audioStreamController.inFlightFrag),this.subtititleStreamController&&(e[H.SUBTITLE]=this.subtititleStreamController.inFlightFrag),e}
swapAudioCodec(){
this.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}
recoverMediaError(){
this.logger.log("recoverMediaError");
const e=this._media,t=e==null?void 0:e.currentTime;
this.detachMedia(),e&&(this.attachMedia(e),t&&this.startLoad(t))}
removeLevel(e){
this.levelController.removeLevel(e)}
get sessionId(){
let e=this._sessionId;
return e||(e=this._sessionId=XT()),e}
get levels(){
const e=this.levelController.levels;
return e||[]}
get latestLevelDetails(){
return this.streamController.getLevelDetails()||null}
get loadLevelObj(){
return this.levelController.loadLevelObj}
get currentLevel(){
return this.streamController.currentLevel}
set currentLevel(e){
this.logger.log(`set currentLevel:${
e}
`),this.levelController.manualLevel=e,this.streamController.immediateLevelSwitch()}
get nextLevel(){
return this.streamController.nextLevel}
set nextLevel(e){
this.logger.log(`set nextLevel:${
e}
`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}
get loadLevel(){
return this.levelController.level}
set loadLevel(e){
this.logger.log(`set loadLevel:${
e}
`),this.levelController.manualLevel=e}
get nextLoadLevel(){
return this.levelController.nextLoadLevel}
set nextLoadLevel(e){
this.levelController.nextLoadLevel=e}
get firstLevel(){
return Math.max(this.levelController.firstLevel,this.minAutoLevel)}
set firstLevel(e){
this.logger.log(`set firstLevel:${
e}
`),this.levelController.firstLevel=e}
get startLevel(){
const e=this.levelController.startLevel;
return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e}
set startLevel(e){
this.logger.log(`set startLevel:${
e}
`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}
get capLevelToPlayerSize(){
return this.config.capLevelToPlayerSize}
set capLevelToPlayerSize(e){
const t=!!e;
t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}
get autoLevelCapping(){
return this._autoLevelCapping}
get bandwidthEstimate(){
const{
bwEstimator:e}
=this.abrController;
return e?e.getEstimate():NaN}
set bandwidthEstimate(e){
this.abrController.resetEstimator(e)}
get abrEwmaDefaultEstimate(){
const{
bwEstimator:e}
=this.abrController;
return e?e.defaultEstimate:NaN}
get ttfbEstimate(){
const{
bwEstimator:e}
=this.abrController;
return e?e.getEstimateTTFB():NaN}
set autoLevelCapping(e){
this._autoLevelCapping!==e&&(this.logger.log(`set autoLevelCapping:${
e}
`),this._autoLevelCapping=e,this.levelController.checkMaxAutoUpdated())}
get maxHdcpLevel(){
return this._maxHdcpLevel}
set maxHdcpLevel(e){
zx(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e,this.levelController.checkMaxAutoUpdated())}
get autoLevelEnabled(){
return this.levelController.manualLevel===-1}
get manualLevel(){
return this.levelController.manualLevel}
get minAutoLevel(){
const{
levels:e,config:{
minAutoBitrate:t}
}
=this;
if(!e)return 0;
const i=e.length;
for(let n=0;
n<i;
n++)if(e[n].maxBitrate>=t)return n;
return 0}
get maxAutoLevel(){
const{
levels:e,autoLevelCapping:t,maxHdcpLevel:i}
=this;
let n;
if(t===-1&&e!=null&&e.length?n=e.length-1:n=t,i)for(let r=n;
r--;
){
const a=e[r].attrs["HDCP-LEVEL"];
if(a&&a<=i)return r}
return n}
get firstAutoLevel(){
return this.abrController.firstAutoLevel}
get nextAutoLevel(){
return this.abrController.nextAutoLevel}
set nextAutoLevel(e){
this.abrController.nextAutoLevel=e}
get playingDate(){
return this.streamController.currentProgramDateTime}
get mainForwardBufferInfo(){
return this.streamController.getMainFwdBufferInfo()}
get maxBufferLength(){
return this.streamController.maxBufferLength}
setAudioOption(e){
var t;
return((t=this.audioTrackController)==null?void 0:t.setAudioOption(e))||null}
setSubtitleOption(e){
var t;
return((t=this.subtitleTrackController)==null?void 0:t.setSubtitleOption(e))||null}
get allAudioTracks(){
const e=this.audioTrackController;
return e?e.allAudioTracks:[]}
get audioTracks(){
const e=this.audioTrackController;
return e?e.audioTracks:[]}
get audioTrack(){
const e=this.audioTrackController;
return e?e.audioTrack:-1}
set audioTrack(e){
const t=this.audioTrackController;
t&&(t.audioTrack=e)}
get allSubtitleTracks(){
const e=this.subtitleTrackController;
return e?e.allSubtitleTracks:[]}
get subtitleTracks(){
const e=this.subtitleTrackController;
return e?e.subtitleTracks:[]}
get subtitleTrack(){
const e=this.subtitleTrackController;
return e?e.subtitleTrack:-1}
get media(){
return this._media}
set subtitleTrack(e){
const t=this.subtitleTrackController;
t&&(t.subtitleTrack=e)}
get subtitleDisplay(){
const e=this.subtitleTrackController;
return e?e.subtitleDisplay:!1}
set subtitleDisplay(e){
const t=this.subtitleTrackController;
t&&(t.subtitleDisplay=e)}
get lowLatencyMode(){
return this.config.lowLatencyMode}
set lowLatencyMode(e){
this.config.lowLatencyMode=e}
get liveSyncPosition(){
return this.latencyController.liveSyncPosition}
get latency(){
return this.latencyController.latency}
get maxLatency(){
return this.latencyController.maxLatency}
get targetLatency(){
return this.latencyController.targetLatency}
set targetLatency(e){
this.latencyController.targetLatency=e}
get drift(){
return this.latencyController.drift}
get forceStartLoad(){
return this.streamController.forceStartLoad}
get pathways(){
return this.levelController.pathways}
get pathwayPriority(){
return this.levelController.pathwayPriority}
set pathwayPriority(e){
this.levelController.pathwayPriority=e}
get bufferedToEnd(){
var e;
return!!((e=this.bufferController)!=null&&e.bufferedToEnd)}
get interstitialsManager(){
var e;
return((e=this.interstitialsController)==null?void 0:e.interstitialsManager)||null}
getMediaDecodingInfo(e,t=this.allAudioTracks){
const i=Zm(t);
return Qm(e,i,navigator.mediaCapabilities)}
}
dt.defaultConfig=void 0;
function lI({
videoId:s,onVideoClick:e,onBack:t}
){
const i=Re.useRef(null),n=Re.useRef(null),[r,a]=Re.useState(!0),[o,u]=Re.useState(null),l=mc,c=l.find(h=>h.id===s),d=c&&c.relatedIds.length>0?c.relatedIds.map(h=>l.find(f=>f.id===h)).filter(h=>h!==void 0).slice(0,6):[];
return Re.useEffect(()=>{
if(!c||!i.current)return;
const h=i.current,f=c.m3u8Url;
if(dt.isSupported()){
const m=new dt({
enableWorker:!0,lowLatencyMode:!0}
);
return m.loadSource(f),m.attachMedia(h),m.on(dt.Events.MANIFEST_PARSED,()=>{
a(!1)}
),m.on(dt.Events.ERROR,(p,E)=>{
if(E.fatal)switch(E.type){
case dt.ErrorTypes.NETWORK_ERROR:u("网络错误，请检查网络连接"),m.startLoad();
break;
case dt.ErrorTypes.MEDIA_ERROR:u("媒体错误，尝试恢复中..."),m.recoverMediaError();
break;
default:u("无法加载视频");
break}
}
),n.current=m,()=>{
m.destroy()}
}
else h.canPlayType("application/vnd.apple.mpegurl")?(h.src=f,h.addEventListener("loadedmetadata",()=>{
a(!1)}
)):u("您的浏览器不支持HLS视频播放")}
,[c]),c?g.jsxs("div",{
className:"min-h-screen bg-gradient-ruins",children:[g.jsx("div",{
className:"bg-stone-900 text-white py-4",children:g.jsx("div",{
className:"container-custom",children:g.jsxs("button",{
onClick:t,className:"flex items-center space-x-2 text-stone-300 hover:text-white transition-colors",children:[g.jsx(ir,{
className:"w-5 h-5"}
),g.jsx("span",{
children:"返回"}
)]}
)}
)}
),g.jsxs("div",{
className:"container-custom py-8",children:[g.jsxs("div",{
className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[g.jsxs("div",{
className:"lg:col-span-2 space-y-6",children:[g.jsx("div",{
className:"card overflow-hidden bg-black",children:g.jsxs("div",{
className:"relative aspect-video",children:[r&&g.jsx("div",{
className:"absolute inset-0 flex items-center justify-center bg-stone-900",children:g.jsx("div",{
className:"text-white",children:"加载中..."}
)}
),o&&g.jsx("div",{
className:"absolute inset-0 flex items-center justify-center bg-stone-900",children:g.jsxs("div",{
className:"text-center",children:[g.jsx("p",{
className:"text-red-500 mb-4",children:o}
),g.jsx("button",{
onClick:()=>window.location.reload(),className:"btn-primary",children:"重新加载"}
)]}
)}
),g.jsx("video",{
ref:i,controls:!0,className:"w-full h-full",poster:Xs(c.cover)}
)]}
)}
),g.jsxs("div",{
className:"card",children:[g.jsx("h1",{
className:"text-3xl font-bold text-stone-800 mb-4",children:c.title}
),g.jsxs("div",{
className:"flex flex-wrap items-center gap-4 text-sm text-stone-600 mb-6",children:[g.jsxs("div",{
className:"flex items-center space-x-2",children:[g.jsx(os,{
className:"w-4 h-4"}
),g.jsx("span",{
children:c.region}
)]}
),g.jsxs("div",{
className:"flex items-center space-x-2",children:[g.jsx(ka,{
className:"w-4 h-4"}
),g.jsx("span",{
children:c.year}
)]}
),g.jsxs("div",{
className:"flex items-center space-x-2",children:[g.jsx(Yv,{
className:"w-4 h-4"}
),g.jsx("span",{
children:c.type}
)]}
)]}
),g.jsxs("div",{
className:"mb-6",children:[g.jsx("h2",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"剧情简介"}
),g.jsx("p",{
className:"text-stone-600 leading-relaxed mb-4",children:c.oneLine}
),g.jsx("p",{
className:"text-stone-600 leading-relaxed",children:c.summary}
)]}
),g.jsxs("div",{
className:"mb-6",children:[g.jsxs("h2",{
className:"text-xl font-semibold text-stone-800 mb-3 flex items-center space-x-2",children:[g.jsx(Qr,{
className:"w-5 h-5 text-amber-600"}
),g.jsx("span",{
children:"影评"}
)]}
),g.jsx("p",{
className:"text-stone-600 leading-relaxed",children:c.review}
)]}
),g.jsxs("div",{
children:[g.jsx("h2",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"类型标签"}
),g.jsx("div",{
className:"flex flex-wrap gap-2",children:c.tags.map((h,f)=>g.jsx("span",{
className:"bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm",children:h}
,f))}
)]}
)]}
)]}
),g.jsx("div",{
className:"lg:col-span-1",children:g.jsxs("div",{
className:"card sticky top-20",children:[g.jsx("img",{
src:Xs(c.cover),alt:c.title,className:"w-full rounded-lg mb-4"}
),g.jsxs("div",{
className:"space-y-3 text-sm",children:[g.jsxs("div",{
className:"flex justify-between",children:[g.jsx("span",{
className:"text-stone-600",children:"类型"}
),g.jsx("span",{
className:"font-medium text-stone-800",children:c.genreRaw}
)]}
),g.jsxs("div",{
className:"flex justify-between",children:[g.jsx("span",{
className:"text-stone-600",children:"地区"}
),g.jsx("span",{
className:"font-medium text-stone-800",children:c.region}
)]}
),g.jsxs("div",{
className:"flex justify-between",children:[g.jsx("span",{
className:"text-stone-600",children:"年份"}
),g.jsx("span",{
className:"font-medium text-stone-800",children:c.year}
)]}
)]}
)]}
)}
)]}
),d.length>0&&g.jsxs("div",{
className:"mt-16",children:[g.jsx("h2",{
className:"section-title mb-8",children:"相关推荐"}
),g.jsx("div",{
className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map(h=>g.jsx(Ln,{
video:h,onClick:()=>e(h.id)}
,h.id))}
)]}
)]}
)]}
):g.jsx("div",{
className:"min-h-screen bg-gradient-ruins flex items-center justify-center",children:g.jsxs("div",{
className:"text-center",children:[g.jsx("h2",{
className:"text-2xl font-bold text-stone-800 mb-4",children:"视频未找到"}
),g.jsx("button",{
onClick:t,className:"btn-primary",children:"返回首页"}
)]}
)}
)}
function uI({
onBack:s}
){
return g.jsxs("div",{
className:"min-h-screen bg-gradient-ruins",children:[g.jsx("div",{
className:"bg-stone-900 text-white py-4",children:g.jsx("div",{
className:"container-custom",children:g.jsxs("button",{
onClick:s,className:"flex items-center space-x-2 hover:text-amber-400 transition-colors",children:[g.jsx(ir,{
className:"w-5 h-5"}
),g.jsx("span",{
children:"返回"}
)]}
)}
)}
),g.jsx("div",{
className:"container-custom py-12",children:g.jsxs("div",{
className:"max-w-4xl mx-auto",children:[g.jsx("h1",{
className:"text-4xl font-bold text-stone-800 mb-8",children:"服务支持"}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Pm,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"联系我们"}
)]}
),g.jsxs("div",{
className:"space-y-4 text-stone-700",children:[g.jsx("p",{
className:"leading-relaxed",children:"如果您在使用日韩热播剧平台时遇到任何问题，或者有任何建议和反馈，欢迎与我们联系。"}
),g.jsxs("div",{
className:"flex items-start space-x-2",children:[g.jsx(Kv,{
className:"w-5 h-5 text-amber-600 mt-1"}
),g.jsxs("div",{
children:[g.jsx("p",{
className:"font-semibold",children:"响应时间"}
),g.jsx("p",{
className:"text-stone-600",children:"我们会尽快处理您的问题和建议。"}
)]}
)]}
),g.jsx("p",{
className:"text-stone-600 text-sm",children:"为了更好地解决您的问题，请详细描述您遇到的情况，包括设备型号、浏览器版本、问题出现的时间等信息。"}
)]}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(zv,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"常见问题"}
)]}
),g.jsxs("div",{
className:"space-y-6",children:[g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"1. 视频无法播放怎么办？"}
),g.jsxs("div",{
className:"text-stone-700 space-y-2 pl-4",children:[g.jsx("p",{
children:g.jsx("strong",{
children:"问题原因："}
)}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"网络连接不稳定或速度过慢"}
),g.jsx("li",{
children:"浏览器不支持HLS视频格式"}
),g.jsx("li",{
children:"浏览器缓存问题"}
)]}
),g.jsx("p",{
className:"mt-3",children:g.jsx("strong",{
children:"解决方案："}
)}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"检查网络连接，确保网速稳定"}
),g.jsx("li",{
children:"尝试刷新页面或清除浏览器缓存"}
),g.jsx("li",{
children:"使用Chrome、Firefox、Safari等现代浏览器"}
),g.jsx("li",{
children:"如果问题持续，请尝试切换网络环境"}
)]}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"2. 视频加载缓慢或卡顿？"}
),g.jsxs("div",{
className:"text-stone-700 space-y-2 pl-4",children:[g.jsx("p",{
children:g.jsx("strong",{
children:"可能原因："}
)}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"网络带宽不足"}
),g.jsx("li",{
children:"同时打开的标签页过多"}
),g.jsx("li",{
children:"设备性能限制"}
)]}
),g.jsx("p",{
className:"mt-3",children:g.jsx("strong",{
children:"优化建议："}
)}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"关闭其他占用网络的应用程序"}
),g.jsx("li",{
children:"减少浏览器标签页数量"}
),g.jsx("li",{
children:"等待视频预加载一段时间后再播放"}
),g.jsx("li",{
children:"在网络高峰期以外的时间观看"}
)]}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"3. 移动端使用说明"}
),g.jsxs("div",{
className:"text-stone-700 space-y-2 pl-4",children:[g.jsx("p",{
children:"日韩热播剧完全支持移动设备访问，为您提供最佳的移动体验："}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"响应式设计自动适配手机和平板屏幕"}
),g.jsx("li",{
children:"触控友好的界面，方便单手操作"}
),g.jsx("li",{
children:"建议在WiFi环境下观看视频以节省流量"}
),g.jsx("li",{
children:"支持全屏播放，获得更沉浸的观看体验"}
),g.jsx("li",{
children:"横屏观看可以获得更好的视觉效果"}
)]}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"4. 如何查找感兴趣的内容？"}
),g.jsxs("div",{
className:"text-stone-700 space-y-2 pl-4",children:[g.jsx("p",{
children:"您可以通过多种方式浏览和发现内容："}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"首页精选：编辑精心挑选的优质内容"}
),g.jsx("li",{
children:"按分类浏览：日剧、韩剧、日韩电影、人气推荐"}
),g.jsx("li",{
children:"热门推荐：最受欢迎的人气作品"}
),g.jsx("li",{
children:"最新收录：最近添加的新内容"}
)]}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"5. 内容更新频率"}
),g.jsx("div",{
className:"text-stone-700 space-y-2 pl-4",children:g.jsx("p",{
children:'我们持续更新优质的日韩影视内容，定期添加新的剧集和电影。 您可以在首页的"最新收录"板块查看最近添加的内容。'}
)}
)]}
)]}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Vv,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"使用指南"}
)]}
),g.jsxs("div",{
className:"space-y-6 text-stone-700",children:[g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-lg font-semibold text-stone-800 mb-2",children:"第一步：浏览内容"}
),g.jsx("p",{
className:"pl-4",children:"在首页，您可以看到多个内容板块，包括今日精选、热门推荐、日剧专区、韩剧专区等。 滚动页面浏览不同的板块，点击任何吸引您的作品封面即可进入详情页。"}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-lg font-semibold text-stone-800 mb-2",children:"第二步：观看视频"}
),g.jsx("p",{
className:"pl-4",children:"进入视频详情页后，视频播放器会自动加载。点击播放按钮开始观看。 播放器支持全屏、音量调节、进度控制等标准功能。"}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-lg font-semibold text-stone-800 mb-2",children:"第三步：阅读详细信息"}
),g.jsx("p",{
className:"pl-4",children:"视频下方提供了详细的剧情简介和影评，帮助您更深入地了解作品内容。"}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-lg font-semibold text-stone-800 mb-2",children:"第四步：探索相关内容"}
),g.jsx("p",{
className:"pl-4",children:"在详情页底部，我们会推荐与当前作品相关的其他内容， 您可以继续探索感兴趣的剧集和电影。"}
)]}
)]}
)]}
),g.jsxs("div",{
className:"mt-8 bg-amber-50 border-l-4 border-amber-600 p-6 rounded",children:[g.jsx("h3",{
className:"text-lg font-semibold text-amber-900 mb-2",children:"需要帮助？"}
),g.jsx("p",{
className:"text-amber-800",children:"如果以上内容没有解决您的问题，欢迎通过网站提供的联系方式与我们联系。"}
)]}
)]}
)}
)]}
)}
function cI({
onBack:s}
){
return g.jsxs("div",{
className:"min-h-screen bg-gradient-ruins",children:[g.jsx("div",{
className:"bg-stone-900 text-white py-4",children:g.jsx("div",{
className:"container-custom",children:g.jsxs("button",{
onClick:s,className:"flex items-center space-x-2 hover:text-amber-400 transition-colors",children:[g.jsx(ir,{
className:"w-5 h-5"}
),g.jsx("span",{
children:"返回"}
)]}
)}
)}
),g.jsx("div",{
className:"container-custom py-12",children:g.jsxs("div",{
className:"max-w-4xl mx-auto",children:[g.jsx("h1",{
className:"text-4xl font-bold text-stone-800 mb-8",children:"版权声明"}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Jd,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"网站定位"}
)]}
),g.jsxs("div",{
className:"space-y-4 text-stone-700 leading-relaxed",children:[g.jsx("p",{
children:'日韩热播剧（以下简称"本网站"）是一个专注于日韩影视内容的在线观看平台。 我们致力于为用户提供优质的日韩电视剧和电影内容，促进影视文化的传播和交流。'}
),g.jsx("p",{
children:"本网站定位为："}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-2",children:[g.jsx("li",{
children:"日韩影视内容的在线展示平台"}
),g.jsx("li",{
children:"影视文化学习与交流的社区"}
),g.jsx("li",{
children:"个人学习与娱乐的信息服务平台"}
)]}
),g.jsx("p",{
children:"本网站所有内容仅供个人学习和欣赏使用，不用于商业用途。"}
)]}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Hv,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"版权信息"}
)]}
),g.jsxs("div",{
className:"space-y-6 text-stone-700",children:[g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"1. 内容版权归属"}
),g.jsxs("div",{
className:"pl-4 space-y-2",children:[g.jsx("p",{
children:"本网站展示的影视作品、图片、文字等内容，其版权归原创作者或版权方所有。 本网站作为内容展示平台，尊重并保护知识产权。"}
),g.jsx("p",{
children:g.jsx("strong",{
children:"具体版权归属："}
)}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"影视作品：版权归原制作方或版权持有方所有"}
),g.jsx("li",{
children:"海报图片：版权归原设计方或版权持有方所有"}
),g.jsx("li",{
children:"简介文字：部分由本网站编辑整理"}
),g.jsx("li",{
children:"网站设计：本网站的整体设计、布局和程序代码版权归本网站所有"}
)]}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"2. 使用目的说明"}
),g.jsx("div",{
className:"pl-4 space-y-2",children:g.jsx("p",{
children:"本网站提供的所有内容仅供个人学习、研究和欣赏使用，不得用于商业用途。 用户在使用本网站服务时，应遵守相关法律法规，尊重知识产权。"}
)}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"3. 侵权处理机制"}
),g.jsxs("div",{
className:"pl-4 space-y-2",children:[g.jsx("p",{
children:"如果您认为本网站展示的某些内容侵犯了您的版权或其他合法权益， 请通过网站提供的联系方式与我们联系。"}
),g.jsx("p",{
className:"mt-3",children:"我们承诺在收到有效的侵权通知后，将及时进行核实， 并根据核实结果采取删除、屏蔽或断开链接等必要措施。"}
)]}
)]}
)]}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Jd,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"免责声明"}
)]}
),g.jsxs("div",{
className:"space-y-6 text-stone-700",children:[g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"1. 内容准确性声明"}
),g.jsx("div",{
className:"pl-4 space-y-2",children:g.jsx("p",{
children:"本网站力求展示内容的准确性，但不对内容的绝对准确性、完整性和时效性作出保证。 用户应理性看待网站内容，自行判断内容的价值和可靠性。"}
)}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"2. 使用风险声明"}
),g.jsxs("div",{
className:"pl-4 space-y-2",children:[g.jsx("p",{
children:"用户使用本网站服务的行为视为接受本声明的全部内容。 用户使用本网站服务所存在的风险将完全由用户自行承担。"}
),g.jsx("p",{
children:g.jsx("strong",{
children:"特别提示："}
)}
),g.jsxs("ul",{
className:"list-disc pl-6 space-y-1",children:[g.jsx("li",{
children:"本网站不保证服务不会中断或没有错误"}
),g.jsx("li",{
children:"本网站不对用户因使用服务而产生的任何直接或间接损失负责"}
),g.jsx("li",{
children:"本网站不对第三方内容的准确性、合法性负责"}
)]}
)]}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"3. 法律管辖声明"}
),g.jsx("div",{
className:"pl-4 space-y-2",children:g.jsx("p",{
children:"本声明的解释、效力和争议的解决均适用中华人民共和国法律。"}
)}
)]}
)]}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Nm,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"用户行为规范"}
)]}
),g.jsxs("div",{
className:"space-y-4 text-stone-700",children:[g.jsx("p",{
children:"为维护良好的社区环境和保护所有用户的合法权益， 使用本网站服务的用户应遵守以下基本行为规范："}
),g.jsxs("div",{
className:"space-y-3",children:[g.jsxs("div",{
children:[g.jsx("h4",{
className:"font-semibold text-stone-800 mb-2",children:"1. 遵守法律法规"}
),g.jsx("p",{
className:"pl-4",children:"用户应遵守中华人民共和国相关法律法规，不得利用本网站从事违法活动。"}
)]}
),g.jsxs("div",{
children:[g.jsx("h4",{
className:"font-semibold text-stone-800 mb-2",children:"2. 尊重知识产权"}
),g.jsx("p",{
className:"pl-4",children:"用户不得擅自复制、转载、传播本网站内容用于商业目的。"}
)]}
),g.jsxs("div",{
children:[g.jsx("h4",{
className:"font-semibold text-stone-800 mb-2",children:"3. 文明使用服务"}
),g.jsx("p",{
className:"pl-4",children:"用户应文明使用本网站服务，不得恶意攻击网站系统。"}
)]}
)]}
)]}
)]}
),g.jsxs("div",{
className:"mt-8 bg-stone-100 p-6 rounded-lg",children:[g.jsxs("p",{
className:"text-stone-700 text-sm",children:[g.jsx("strong",{
children:"声明更新："}
),"本声明可能会根据法律法规的变化或业务发展需要进行更新。 更新后的声明一经发布即生效。"]}
),g.jsx("p",{
className:"text-stone-600 text-sm mt-3",children:"最后更新日期：2024年12月"}
)]}
)]}
)}
)]}
)}
function dI({
onBack:s}
){
return g.jsxs("div",{
className:"min-h-screen bg-gradient-ruins",children:[g.jsx("div",{
className:"bg-stone-900 text-white py-4",children:g.jsx("div",{
className:"container-custom",children:g.jsxs("button",{
onClick:s,className:"flex items-center space-x-2 hover:text-amber-400 transition-colors",children:[g.jsx(ir,{
className:"w-5 h-5"}
),g.jsx("span",{
children:"返回"}
)]}
)}
)}
),g.jsx("div",{
className:"container-custom py-12",children:g.jsxs("div",{
className:"max-w-4xl mx-auto",children:[g.jsx("h1",{
className:"text-4xl font-bold text-stone-800 mb-8",children:"关于我们"}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(os,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"平台介绍"}
)]}
),g.jsxs("div",{
className:"space-y-4 text-stone-700 leading-relaxed",children:[g.jsx("p",{
children:"日韩热播剧是一个专注于日本和韩国影视内容的在线观看平台。 我们通过精选优质的日韩电视剧和电影，为用户提供超清画质的免费在线点播服务。"}
),g.jsx("p",{
children:"从浪漫的爱情剧到紧张刺激的悬疑片，从温馨的家庭剧到震撼人心的动作片， 我们涵盖了各种类型的日韩影视作品。无论您喜欢日本的细腻情感表达， 还是韩国的精彩剧情设计，都能在这里找到心仪的作品。"}
),g.jsx("p",{
children:"日韩热播剧不仅是一个内容观看平台，更是一个影视文化交流和分享的社区。 我们希望通过这个平台，让更多人了解和欣赏日韩影视文化的魅力， 促进不同文化之间的理解和交流。"}
)]}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(qv,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"平台特色"}
)]}
),g.jsx("div",{
className:"space-y-4 text-stone-700 leading-relaxed",children:g.jsxs("ul",{
className:"list-disc pl-6 space-y-2",children:[g.jsxs("li",{
children:[g.jsx("strong",{
children:"超清画质："}
),"提供高清、超清多种画质选择，让您享受影院级的观看体验。"]}
),g.jsxs("li",{
children:[g.jsx("strong",{
children:"更新及时："}
),"紧跟最新日韩影视动态，第一时间为您带来热门新剧。"]}
),g.jsxs("li",{
children:[g.jsx("strong",{
children:"分类清晰："}
),"按照日剧、韩剧、日韩电影等分类整理，方便您快速找到想看的内容。"]}
),g.jsxs("li",{
children:[g.jsx("strong",{
children:"免费观看："}
),"所有内容完全免费，无需注册会员，即可畅享精彩影视。"]}
),g.jsxs("li",{
children:[g.jsx("strong",{
children:"精选推荐："}
),"编辑团队精心挑选优质作品，为您推荐值得一看的爆款剧集。"]}
)]}
)}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Jl,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"服务理念"}
)]}
),g.jsxs("div",{
className:"space-y-6 text-stone-700",children:[g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"我们的使命"}
),g.jsx("p",{
className:"pl-4 leading-relaxed",children:"为广大日韩影视爱好者提供便捷、优质、免费的在线观看服务， 让更多人能够轻松享受日韩影视文化的魅力，丰富精神文化生活。"}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"我们的愿景"}
),g.jsx("p",{
className:"pl-4 leading-relaxed",children:"成为用户信赖的日韩影视内容平台，为影视爱好者打造一个温馨、便捷的观看体验， 促进中日韩文化交流，让优秀的影视作品被更多人看到和喜爱。"}
)]}
),g.jsxs("div",{
children:[g.jsx("h3",{
className:"text-xl font-semibold text-stone-800 mb-3",children:"我们的价值观"}
),g.jsxs("div",{
className:"pl-4 space-y-3",children:[g.jsxs("div",{
children:[g.jsx("p",{
className:"font-semibold text-amber-700 mb-1",children:"用户至上"}
),g.jsx("p",{
className:"text-sm",children:"始终将用户体验放在首位，不断优化平台功能，提供更好的服务。"}
)]}
),g.jsxs("div",{
children:[g.jsx("p",{
className:"font-semibold text-amber-700 mb-1",children:"内容为王"}
),g.jsx("p",{
className:"text-sm",children:"精选优质影视内容，确保每一部作品都值得观看。"}
)]}
),g.jsxs("div",{
children:[g.jsx("p",{
className:"font-semibold text-amber-700 mb-1",children:"合法合规"}
),g.jsx("p",{
className:"text-sm",children:"严格遵守相关法律法规，尊重版权，规范运营。"}
)]}
)]}
)]}
)]}
)]}
),g.jsxs("div",{
className:"bg-white rounded-lg shadow-lg p-8 mb-8",children:[g.jsxs("div",{
className:"flex items-center space-x-3 mb-6",children:[g.jsx(Nm,{
className:"w-8 h-8 text-amber-600"}
),g.jsx("h2",{
className:"text-2xl font-bold text-stone-800",children:"联系我们"}
)]}
),g.jsxs("div",{
className:"space-y-4 text-stone-700 leading-relaxed",children:[g.jsx("p",{
children:"我们非常欢迎您的意见和建议！无论是内容反馈、功能建议， 还是合作咨询，都欢迎与我们联系。"}
),g.jsx("p",{
className:"text-sm text-stone-600",children:"您的反馈是我们不断改进和完善平台的动力。感谢您对日韩热播剧的支持！"}
)]}
)]}
),g.jsxs("div",{
className:"mt-8 bg-gradient-to-r from-amber-600 to-amber-800 text-white p-8 rounded-lg text-center",children:[g.jsx(Jl,{
className:"w-12 h-12 mx-auto mb-4"}
),g.jsx("h3",{
className:"text-2xl font-bold mb-3",children:"与我们一起享受精彩影视"}
),g.jsx("p",{
className:"text-amber-100 mb-6",children:"每一部作品都有故事，每一个角色都有灵魂。 让我们一起走进日韩影视的世界，感受不同文化的魅力。"}
),g.jsx("p",{
className:"text-amber-50 text-sm",children:"日韩热播剧 - 您的专属影视观看平台"}
)]}
)]}
)}
)]}
)}
function hI(){
const[s,e]=Re.useState("home"),[t,i]=Re.useState(null),[n,r]=Re.useState(null),a=(l,c,d)=>{
e(l),c!==void 0&&i(c),d!==void 0&&r(d),Tr()}
,o=l=>{
i(l),e("video"),Tr()}
,u=()=>{
e("home"),i(null),r(null),Tr()}
;
return Re.useEffect(()=>{
Tr()}
,[s]),g.jsxs("div",{
className:"min-h-screen flex flex-col",children:[g.jsx(Zv,{
onNavigate:a,currentPage:s}
),g.jsxs("main",{
className:"flex-1",children:[s==="home"&&g.jsx(ix,{
onVideoClick:o,onNavigate:a}
),s==="category"&&n&&g.jsx(nx,{
category:n,onVideoClick:o,onBack:u}
),s==="video"&&t&&g.jsx(lI,{
videoId:t,onVideoClick:o,onBack:u}
),s==="support"&&g.jsx(uI,{
onBack:u}
),s==="copyright"&&g.jsx(cI,{
onBack:u}
),s==="about"&&g.jsx(dI,{
onBack:u}
)]}
),g.jsx(Jv,{
onNavigate:a}
)]}
)}
bm(document.getElementById("root")).render(g.jsx(Re.StrictMode,{
children:g.jsx(hI,{
}
)}
));

