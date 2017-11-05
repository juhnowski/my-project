// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.routes');
goog.require('cljs.core');
goog.require('cljs.node');
goog.require('redlobster.promise');
goog.require('dogfort.util.response');
goog.require('dogfort.util.codec');
/**
 * Matches the URL to the matcher and (if they coincide) returns a set of
 * route bindings.
 */
dogfort.middleware.routes.route_match = (function dogfort$middleware$routes$route_match(url,matcher){
var url__$1 = cljs.core.rest.call(null,url.split("/"));
var G__2192 = matcher;
var vec__2194 = G__2192;
var m = cljs.core.nth.call(null,vec__2194,(0),null);
var matcher__$1 = cljs.core.nthnext.call(null,vec__2194,(1));
var G__2193 = url__$1;
var vec__2195 = G__2193;
var u = cljs.core.nth.call(null,vec__2195,(0),null);
var url__$2 = cljs.core.nthnext.call(null,vec__2195,(1));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__2192__$1 = G__2192;
var G__2193__$1 = G__2193;
var res__$1 = res;
while(true){
var vec__2196 = G__2192__$1;
var m__$1 = cljs.core.nth.call(null,vec__2196,(0),null);
var matcher__$2 = cljs.core.nthnext.call(null,vec__2196,(1));
var vec__2197 = G__2193__$1;
var u__$1 = cljs.core.nth.call(null,vec__2197,(0),null);
var url__$3 = cljs.core.nthnext.call(null,vec__2197,(1));
var res__$2 = res__$1;
if(cljs.core.not.call(null,(function (){var or__230__auto__ = m__$1;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return u__$1;
}
})())){
return res__$2;
} else {
if(cljs.core.not.call(null,(function (){var and__218__auto__ = m__$1;
if(cljs.core.truth_(and__218__auto__)){
return u__$1;
} else {
return and__218__auto__;
}
})())){
return null;
} else {
if(cljs.core._EQ_.call(null,"*",m__$1)){
return cljs.core.assoc.call(null,res__$2,new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"/",cljs.core.list_STAR_.call(null,u__$1,url__$3))));
} else {
if(cljs.core.truth_(m__$1.startsWith(":"))){
var G__2198 = matcher__$2;
var G__2199 = url__$3;
var G__2200 = cljs.core.assoc.call(null,res__$2,cljs.core.keyword.call(null,m__$1.substring((1))),dogfort.util.codec.url_decode.call(null,u__$1));
G__2192__$1 = G__2198;
G__2193__$1 = G__2199;
res__$1 = G__2200;
continue;
} else {
if(cljs.core._EQ_.call(null,m__$1,u__$1)){
var G__2201 = matcher__$2;
var G__2202 = url__$3;
var G__2203 = res__$2;
G__2192__$1 = G__2201;
G__2193__$1 = G__2202;
res__$1 = G__2203;
continue;
} else {
return null;
}
}
}
}
}
break;
}
});
dogfort.middleware.routes.merge_params = (function dogfort$middleware$routes$merge_params(request,params){
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(request,cljs.core.PersistentArrayMap.EMPTY),params));
});
dogfort.middleware.routes.eval_route = (function dogfort$middleware$routes$eval_route(request,method,matcher,handler){
if((cljs.core.not.call(null,method)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request),method))){
var temp__4425__auto__ = dogfort.middleware.routes.route_match.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),matcher);
if(cljs.core.truth_(temp__4425__auto__)){
var matches = temp__4425__auto__;
return handler.call(null,dogfort.middleware.routes.merge_params.call(null,request,matches));
} else {
return null;
}
} else {
return null;
}
});
dogfort.middleware.routes.routing = (function dogfort$middleware$routes$routing(){
var args__1276__auto__ = [];
var len__1269__auto___2207 = arguments.length;
var i__1270__auto___2208 = (0);
while(true){
if((i__1270__auto___2208 < len__1269__auto___2207)){
args__1276__auto__.push((arguments[i__1270__auto___2208]));

var G__2209 = (i__1270__auto___2208 + (1));
i__1270__auto___2208 = G__2209;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic = (function (request,handlers){
var response = cljs.core.some.call(null,(function (p1__2204_SHARP_){
return p1__2204_SHARP_.call(null,request);
}),handlers);
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,response))){
return response;
} else {
if(cljs.core.map_QMARK_.call(null,response)){
return redlobster.promise.promise.call(null,response);
} else {
if(cljs.core.truth_(response)){
return redlobster.promise.promise.call(null,dogfort.util.response.response.call(null,(200),response));
} else {
return null;
}
}
}
});

dogfort.middleware.routes.routing.cljs$lang$maxFixedArity = (1);

dogfort.middleware.routes.routing.cljs$lang$applyTo = (function (seq2205){
var G__2206 = cljs.core.first.call(null,seq2205);
var seq2205__$1 = cljs.core.next.call(null,seq2205);
return dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic(G__2206,seq2205__$1);
});
dogfort.middleware.routes.routes = (function dogfort$middleware$routes$routes(){
var args__1276__auto__ = [];
var len__1269__auto___2212 = arguments.length;
var i__1270__auto___2213 = (0);
while(true){
if((i__1270__auto___2213 < len__1269__auto___2212)){
args__1276__auto__.push((arguments[i__1270__auto___2213]));

var G__2214 = (i__1270__auto___2213 + (1));
i__1270__auto___2213 = G__2214;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((0) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((0)),(0))):null);
return dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic(argseq__1277__auto__);
});

dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return (function (p1__2210_SHARP_){
return cljs.core.apply.call(null,dogfort.middleware.routes.routing,p1__2210_SHARP_,handlers);
});
});

dogfort.middleware.routes.routes.cljs$lang$maxFixedArity = (0);

dogfort.middleware.routes.routes.cljs$lang$applyTo = (function (seq2211){
return dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2211));
});
dogfort.middleware.routes.not_found = (function dogfort$middleware$routes$not_found(request__1828__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__1828__auto__,null,"*",(function (request__1828__auto____$1){
return dogfort.util.response.default_response.call(null,(404));
}));
});

//# sourceMappingURL=routes.js.map