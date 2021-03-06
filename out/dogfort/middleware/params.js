// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.params');
goog.require('cljs.core');
goog.require('dogfort.util.codec');
goog.require('dogfort.util.request');
goog.require('redlobster.stream');
goog.require('redlobster.promise');
dogfort.middleware.params.parse_params = (function dogfort$middleware$params$parse_params(params,encoding){
var params__$1 = dogfort.util.codec.form_decode.call(null,params,encoding);
if(cljs.core.map_QMARK_.call(null,params__$1)){
return params__$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Parse and assoc parameters from the query string with the request.
 */
dogfort.middleware.params.assoc_query_params = (function dogfort$middleware$params$assoc_query_params(request,encoding){
return cljs.core.merge_with.call(null,cljs.core.merge,request,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var query_string = temp__4423__auto__;
var params = dogfort.middleware.params.parse_params.call(null,query_string,encoding);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),params,new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null);
}
})());
});
/**
 * Adds parameters from the query string and the request body to the request
 * map. See: wrap-params.
 */
dogfort.middleware.params.params_request = (function dogfort$middleware$params$params_request(){
var args__1276__auto__ = [];
var len__1269__auto___2025 = arguments.length;
var i__1270__auto___2026 = (0);
while(true){
if((i__1270__auto___2026 < len__1269__auto___2025)){
args__1276__auto__.push((arguments[i__1270__auto___2026]));

var G__2027 = (i__1270__auto___2026 + (1));
i__1270__auto___2026 = G__2027;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((2) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((2)),(0))):null);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1277__auto__);
});

dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic = (function (handler,request,p__2023){
var vec__2024 = p__2023;
var opts = cljs.core.nth.call(null,vec__2024,(0),null);
var encoding = (function (){var or__230__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
var or__230__auto____$1 = dogfort.util.request.character_encoding.call(null,request);
if(cljs.core.truth_(or__230__auto____$1)){
return or__230__auto____$1;
} else {
return "UTF-8";
}
}
})();
var request__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(request))?request:dogfort.middleware.params.assoc_query_params.call(null,request,encoding));
return handler.call(null,request__$1);
});

dogfort.middleware.params.params_request.cljs$lang$maxFixedArity = (2);

dogfort.middleware.params.params_request.cljs$lang$applyTo = (function (seq2020){
var G__2021 = cljs.core.first.call(null,seq2020);
var seq2020__$1 = cljs.core.next.call(null,seq2020);
var G__2022 = cljs.core.first.call(null,seq2020__$1);
var seq2020__$2 = cljs.core.next.call(null,seq2020__$1);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic(G__2021,G__2022,seq2020__$2);
});
/**
 * Middleware to parse urlencoded parameters from the query string and form
 * body (if the request is a url-encoded form). Adds the following keys to
 * the request map:
 * 
 * :query-params - a map of parameters from the query string
 * :form-params  - a map of parameters from the body
 * :params       - a merged map of all types of parameter
 * 
 * Accepts the following options:
 * 
 * :encoding - encoding to use for url-decoding. If not specified, uses
 * the request character encoding, or "UTF-8" if no request
 * character encoding is set.
 */
dogfort.middleware.params.wrap_params = (function dogfort$middleware$params$wrap_params(){
var args__1276__auto__ = [];
var len__1269__auto___2032 = arguments.length;
var i__1270__auto___2033 = (0);
while(true){
if((i__1270__auto___2033 < len__1269__auto___2032)){
args__1276__auto__.push((arguments[i__1270__auto___2033]));

var G__2034 = (i__1270__auto___2033 + (1));
i__1270__auto___2033 = G__2034;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__2030){
var vec__2031 = p__2030;
var options = cljs.core.nth.call(null,vec__2031,(0),null);
return ((function (vec__2031,options){
return (function (request){
return dogfort.middleware.params.params_request.call(null,handler,request,options);
});
;})(vec__2031,options))
});

dogfort.middleware.params.wrap_params.cljs$lang$maxFixedArity = (1);

dogfort.middleware.params.wrap_params.cljs$lang$applyTo = (function (seq2028){
var G__2029 = cljs.core.first.call(null,seq2028);
var seq2028__$1 = cljs.core.next.call(null,seq2028);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic(G__2029,seq2028__$1);
});

//# sourceMappingURL=params.js.map