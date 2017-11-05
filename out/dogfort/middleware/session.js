// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.middleware.session');
goog.require('cljs.core');
goog.require('dogfort.middleware.cookies');
goog.require('dogfort.middleware.session.store');
goog.require('dogfort.middleware.session.memory');
goog.require('redlobster.promise');
dogfort.middleware.session.session_options = (function dogfort$middleware$session$session_options(options){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$2(options,dogfort.middleware.session.memory.memory_store.call(null)),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745).cljs$core$IFn$_invoke$arity$2(options,"ring-session"),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"http-only","http-only",-825379555),true], null),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946).cljs$core$IFn$_invoke$arity$1(options),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4423__auto__)){
var root = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),root], null);
} else {
return null;
}
})())], null);
});
dogfort.middleware.session.bare_session_request = (function dogfort$middleware$session$bare_session_request(){
var args__1276__auto__ = [];
var len__1269__auto___2150 = arguments.length;
var i__1270__auto___2151 = (0);
while(true){
if((i__1270__auto___2151 < len__1269__auto___2150)){
args__1276__auto__.push((arguments[i__1270__auto___2151]));

var G__2152 = (i__1270__auto___2151 + (1));
i__1270__auto___2151 = G__2152;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__2146){
var vec__2147 = p__2146;
var map__2148 = cljs.core.nth.call(null,vec__2147,(0),null);
var map__2148__$1 = ((((!((map__2148 == null)))?((((map__2148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2148):map__2148);
var store = cljs.core.get.call(null,map__2148__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__2148__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var req_key = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookies","cookies",1839416329),cookie_name,new cljs.core.Keyword(null,"value","value",305978217)], null));
var session = dogfort.middleware.session.store.read_session.call(null,store,req_key);
var session_key = (cljs.core.truth_(session)?req_key:null);
return cljs.core.merge.call(null,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session","session",1008279103),(function (){var or__230__auto__ = session;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("session","key","session/key",756123603),session_key], null));
});

dogfort.middleware.session.bare_session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.bare_session_request.cljs$lang$applyTo = (function (seq2144){
var G__2145 = cljs.core.first.call(null,seq2144);
var seq2144__$1 = cljs.core.next.call(null,seq2144);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic(G__2145,seq2144__$1);
});
/**
 * Reads current HTTP session map and adds it to :session key of the request.
 * See: wrap-session.
 */
dogfort.middleware.session.session_request = (function dogfort$middleware$session$session_request(){
var args__1276__auto__ = [];
var len__1269__auto___2157 = arguments.length;
var i__1270__auto___2158 = (0);
while(true){
if((i__1270__auto___2158 < len__1269__auto___2157)){
args__1276__auto__.push((arguments[i__1270__auto___2158]));

var G__2159 = (i__1270__auto___2158 + (1));
i__1270__auto___2158 = G__2159;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__2155){
var vec__2156 = p__2155;
var options = cljs.core.nth.call(null,vec__2156,(0),null);
return dogfort.middleware.session.bare_session_request.call(null,dogfort.middleware.cookies.cookies_request.call(null,request),options);
});

dogfort.middleware.session.session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.session_request.cljs$lang$applyTo = (function (seq2153){
var G__2154 = cljs.core.first.call(null,seq2153);
var seq2153__$1 = cljs.core.next.call(null,seq2153);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic(G__2154,seq2153__$1);
});
dogfort.middleware.session.bare_session_response = (function dogfort$middleware$session$bare_session_response(){
var args__1276__auto__ = [];
var len__1269__auto___2170 = arguments.length;
var i__1270__auto___2171 = (0);
while(true){
if((i__1270__auto___2171 < len__1269__auto___2170)){
args__1276__auto__.push((arguments[i__1270__auto___2171]));

var G__2172 = (i__1270__auto___2171 + (1));
i__1270__auto___2171 = G__2172;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((2) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1277__auto__);
});

dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__2163,p__2164){
var map__2165 = p__2163;
var map__2165__$1 = ((((!((map__2165 == null)))?((((map__2165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2165):map__2165);
var session_key = cljs.core.get.call(null,map__2165__$1,new cljs.core.Keyword("session","key","session/key",756123603));
var vec__2166 = p__2164;
var map__2167 = cljs.core.nth.call(null,vec__2166,(0),null);
var map__2167__$1 = ((((!((map__2167 == null)))?((((map__2167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2167):map__2167);
var store = cljs.core.get.call(null,map__2167__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__2167__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var cookie_attrs = cljs.core.get.call(null,map__2167__$1,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946));
var new_session_key = ((cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103)))?(function (){var temp__4423__auto__ = response.call(null,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(temp__4423__auto__)){
var session = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"recreate","recreate",706397197).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,session)))){
dogfort.middleware.session.store.delete_session.call(null,store,session_key);

return dogfort.middleware.session.store.write_session.call(null,store,null,session);
} else {
return dogfort.middleware.session.store.write_session.call(null,store,session_key,session);
}
} else {
if(cljs.core.truth_(session_key)){
return dogfort.middleware.session.store.delete_session.call(null,store,session_key);
} else {
return null;
}
}
})():null);
var session_attrs = new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706).cljs$core$IFn$_invoke$arity$1(response);
var cookie = new cljs.core.PersistentArrayMap.fromArray([cookie_name,cljs.core.merge.call(null,cookie_attrs,session_attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__230__auto__ = new_session_key;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return session_key;
}
})()], null))], true, false);
var response__$1 = cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706));
if(cljs.core.truth_((function (){var or__230__auto__ = (function (){var and__218__auto__ = new_session_key;
if(cljs.core.truth_(and__218__auto__)){
return cljs.core.not_EQ_.call(null,session_key,new_session_key);
} else {
return and__218__auto__;
}
})();
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
var and__218__auto__ = session_attrs;
if(cljs.core.truth_(and__218__auto__)){
var or__230__auto____$1 = new_session_key;
if(cljs.core.truth_(or__230__auto____$1)){
return or__230__auto____$1;
} else {
return session_key;
}
} else {
return and__218__auto__;
}
}
})())){
return cljs.core.assoc.call(null,response__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329),cljs.core.merge.call(null,response__$1.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)),cookie));
} else {
return response__$1;
}
});

dogfort.middleware.session.bare_session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.bare_session_response.cljs$lang$applyTo = (function (seq2160){
var G__2161 = cljs.core.first.call(null,seq2160);
var seq2160__$1 = cljs.core.next.call(null,seq2160);
var G__2162 = cljs.core.first.call(null,seq2160__$1);
var seq2160__$2 = cljs.core.next.call(null,seq2160__$1);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic(G__2161,G__2162,seq2160__$2);
});
/**
 * Updates session based on :session key in response. See: wrap-session.
 */
dogfort.middleware.session.session_response = (function dogfort$middleware$session$session_response(){
var args__1276__auto__ = [];
var len__1269__auto___2178 = arguments.length;
var i__1270__auto___2179 = (0);
while(true){
if((i__1270__auto___2179 < len__1269__auto___2178)){
args__1276__auto__.push((arguments[i__1270__auto___2179]));

var G__2180 = (i__1270__auto___2179 + (1));
i__1270__auto___2179 = G__2180;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((2) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__1277__auto__);
});

dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,request,p__2176){
var vec__2177 = p__2176;
var options = cljs.core.nth.call(null,vec__2177,(0),null);
var response__$1 = response;
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response__$1], null),((function (response__$1,vec__2177,options){
return (function (){
return dogfort.middleware.session.bare_session_response.call(null,cljs.core.deref.call(null,response__$1),request,options);
});})(response__$1,vec__2177,options))
);
});

dogfort.middleware.session.session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.session_response.cljs$lang$applyTo = (function (seq2173){
var G__2174 = cljs.core.first.call(null,seq2173);
var seq2173__$1 = cljs.core.next.call(null,seq2173);
var G__2175 = cljs.core.first.call(null,seq2173__$1);
var seq2173__$2 = cljs.core.next.call(null,seq2173__$1);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic(G__2174,G__2175,seq2173__$2);
});
/**
 * Reads in the current HTTP session map, and adds it to the :session key on
 * the request. If a :session key is added to the response by the handler, the
 * session is updated with the new value. If the value is nil, the session is
 * deleted.
 * 
 * Accepts the following options:
 * 
 * :store        - An implementation of the SessionStore protocol in the
 * dogfort.middleware.session.store namespace. This determines how
 * the session is stored. Defaults to in-memory storage using
 * dogfort.middleware.session.store/memory-store.
 * 
 * :root         - The root path of the session. Any path above this will not be
 * able to see this session. Equivalent to setting the cookie's
 * path attribute. Defaults to "/".
 * 
 * :cookie-name  - The name of the cookie that holds the session key. Defaults to
 * "ring-session"
 * 
 * :cookie-attrs - A map of attributes to associate with the session cookie.
 * Defaults to {:http-only true}.
 */
dogfort.middleware.session.wrap_session = (function dogfort$middleware$session$wrap_session(){
var args2181 = [];
var len__1269__auto___2184 = arguments.length;
var i__1270__auto___2185 = (0);
while(true){
if((i__1270__auto___2185 < len__1269__auto___2184)){
args2181.push((arguments[i__1270__auto___2185]));

var G__2186 = (i__1270__auto___2185 + (1));
i__1270__auto___2185 = G__2186;
continue;
} else {
}
break;
}

var G__2183 = args2181.length;
switch (G__2183) {
case 1:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args2181.length)].join('')));

}
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return dogfort.middleware.session.wrap_session.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
var options__$1 = dogfort.middleware.session.session_options.call(null,options);
return ((function (options__$1){
return (function (request){
var new_request = dogfort.middleware.session.session_request.call(null,request,options__$1);
return dogfort.middleware.session.session_response.call(null,handler.call(null,new_request),new_request,options__$1);
});
;})(options__$1))
});

dogfort.middleware.session.wrap_session.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=session.js.map