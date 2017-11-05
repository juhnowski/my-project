// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('redlobster.http');
goog.require('cljs.core');
goog.require('redlobster.events');
goog.require('redlobster.promise');
goog.require('redlobster.stream');
goog.require('cljs.node');
redlobster.http.http = require("http");
redlobster.http.request = (function redlobster$http$request(){
var args2628 = [];
var len__1269__auto___2631 = arguments.length;
var i__1270__auto___2632 = (0);
while(true){
if((i__1270__auto___2632 < len__1269__auto___2631)){
args2628.push((arguments[i__1270__auto___2632]));

var G__2633 = (i__1270__auto___2632 + (1));
i__1270__auto___2632 = G__2633;
continue;
} else {
}
break;
}

var G__2630 = args2628.length;
switch (G__2630) {
case 2:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2628.length)].join('')));

}
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$2 = (function (options,body){
var promise__1461__auto__ = redlobster.promise.promise.call(null);
var realise__1462__auto__ = ((function (promise__1461__auto__){
return (function (promise__1461__auto____$1,value__1463__auto__){
return redlobster.promise.realise.call(null,promise__1461__auto____$1,value__1463__auto__);
});})(promise__1461__auto__))
;
var realise_error__1464__auto__ = ((function (promise__1461__auto__,realise__1462__auto__){
return (function (promise__1461__auto____$1,value__1463__auto__){
return redlobster.promise.realise_error.call(null,promise__1461__auto____$1,value__1463__auto__);
});})(promise__1461__auto__,realise__1462__auto__))
;
var realise = cljs.core.partial.call(null,realise__1462__auto__,promise__1461__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__1464__auto__,promise__1461__auto__);
var req_2635 = redlobster.http.http.request(cljs.core.clj__GT_js.call(null,options),((function (promise__1461__auto__,realise__1462__auto__,realise_error__1464__auto__,realise,realise_error){
return (function (p1__2626_SHARP_){
return realise.call(null,p1__2626_SHARP_);
});})(promise__1461__auto__,realise__1462__auto__,realise_error__1464__auto__,realise,realise_error))
);
redlobster.events.on.call(null,req_2635,"error",((function (req_2635,promise__1461__auto__,realise__1462__auto__,realise_error__1464__auto__,realise,realise_error){
return (function (p1__2627_SHARP_){
return realise_error.call(null,p1__2627_SHARP_);
});})(req_2635,promise__1461__auto__,realise__1462__auto__,realise_error__1464__auto__,realise,realise_error))
);

if(cljs.core.truth_(body)){
redlobster.stream.write_stream.call(null,req_2635,body);
} else {
req_2635.end();
}

return promise__1461__auto__;
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$1 = (function (options){
return redlobster.http.request.call(null,options,null);
});

redlobster.http.request.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=http.js.map