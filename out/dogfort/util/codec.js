// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.util.codec');
goog.require('cljs.core');
goog.require('dogfort.util.data');
goog.require('clojure.string');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
dogfort.util.codec.double_escape = (function dogfort$util$codec$double_escape(x){
return x.replace("\\","\\\\").replace("$","\\$");
});
dogfort.util.codec.number__GT_hex = (function dogfort$util$codec$number__GT_hex(num){
return num.toString((16)).toUpperCase();
});
/**
 * Percent-encode every character in the given string using either the specified
 * encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_encode = (function dogfort$util$codec$percent_encode(){
var args__1276__auto__ = [];
var len__1269__auto___2232 = arguments.length;
var i__1270__auto___2233 = (0);
while(true){
if((i__1270__auto___2233 < len__1269__auto___2232)){
args__1276__auto__.push((arguments[i__1270__auto___2233]));

var G__2234 = (i__1270__auto___2233 + (1));
i__1270__auto___2233 = G__2234;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__2230){
var vec__2231 = p__2230;
var encoding = cljs.core.nth.call(null,vec__2231,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__2231,encoding){
return (function (p1__2227_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__2227_SHARP_])))].join('');
});})(buf,vec__2231,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq2228){
var G__2229 = cljs.core.first.call(null,seq2228);
var seq2228__$1 = cljs.core.next.call(null,seq2228);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__2229,seq2228__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__2236_SHARP_){
return parseInt(p1__2236_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__2235_SHARP_){
return cljs.core.subs.call(null,p1__2235_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 * specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(){
var args__1276__auto__ = [];
var len__1269__auto___2241 = arguments.length;
var i__1270__auto___2242 = (0);
while(true){
if((i__1270__auto___2242 < len__1269__auto___2241)){
args__1276__auto__.push((arguments[i__1270__auto___2242]));

var G__2243 = (i__1270__auto___2242 + (1));
i__1270__auto___2242 = G__2243;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2239){
var vec__2240 = p__2239;
var encoding = cljs.core.nth.call(null,vec__2240,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__2240,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__2240,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq2237){
var G__2238 = cljs.core.first.call(null,seq2237);
var seq2237__$1 = cljs.core.next.call(null,seq2237);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__2238,seq2237__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 * encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(){
var args__1276__auto__ = [];
var len__1269__auto___2249 = arguments.length;
var i__1270__auto___2250 = (0);
while(true){
if((i__1270__auto___2250 < len__1269__auto___2249)){
args__1276__auto__.push((arguments[i__1270__auto___2250]));

var G__2251 = (i__1270__auto___2250 + (1));
i__1270__auto___2250 = G__2251;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__2247){
var vec__2248 = p__2247;
var encoding = cljs.core.nth.call(null,vec__2248,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__2248,encoding){
return (function (p1__2244_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__2244_SHARP_,encoding));
});})(vec__2248,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq2245){
var G__2246 = cljs.core.first.call(null,seq2245);
var seq2245__$1 = cljs.core.next.call(null,seq2245);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__2246,seq2245__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 * encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(){
var args__1276__auto__ = [];
var len__1269__auto___2256 = arguments.length;
var i__1270__auto___2257 = (0);
while(true){
if((i__1270__auto___2257 < len__1269__auto___2256)){
args__1276__auto__.push((arguments[i__1270__auto___2257]));

var G__2258 = (i__1270__auto___2257 + (1));
i__1270__auto___2257 = G__2258;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2254){
var vec__2255 = p__2254;
var encoding = cljs.core.nth.call(null,vec__2255,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq2252){
var G__2253 = cljs.core.first.call(null,seq2252);
var seq2252__$1 = cljs.core.next.call(null,seq2252);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__2253,seq2252__$1);
});
/**
 * Encode a Buffer into a base64 encoded string.
 */
dogfort.util.codec.base64_encode = (function dogfort$util$codec$base64_encode(unencoded){
return unencoded.toString("base64");
});
/**
 * Decode a base64 encoded string into a Buffer.
 */
dogfort.util.codec.base64_decode = (function dogfort$util$codec$base64_decode(encoded){
return (new Buffer(encoded,"base64"));
});
dogfort.util.codec.form_encode_STAR_ = (function dogfort$util$codec$form_encode_STAR_(params,encoding){
if(cljs.core.map_QMARK_.call(null,params)){
var encode = (function dogfort$util$codec$form_encode_STAR__$_encode(x){
return dogfort$util$codec$form_encode_STAR_.call(null,x,encoding);
});
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__2272){
var vec__2274 = p__2272;
var k = cljs.core.nth.call(null,vec__2274,(0),null);
var v = cljs.core.nth.call(null,vec__2274,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__2275){
var vec__2276 = p__2275;
var k = cljs.core.nth.call(null,vec__2276,(0),null);
var v = cljs.core.nth.call(null,vec__2276,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__2276,k,v){
return (function (p1__2260_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__2260_SHARP_], null));
});})(vec__2276,k,v))
,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null);
}
}),params));
} else {
return dogfort.util.codec.url_encode.call(null,[cljs.core.str(params)].join(''),encoding);
}
});
/**
 * Encode the supplied value into www-form-urlencoded format, often used in
 * URL query strings and POST request bodies, using the specified encoding.
 * If the encoding is not specified, it defaults to UTF-8
 */
dogfort.util.codec.form_encode = (function dogfort$util$codec$form_encode(){
var args__1276__auto__ = [];
var len__1269__auto___2281 = arguments.length;
var i__1270__auto___2282 = (0);
while(true){
if((i__1270__auto___2282 < len__1269__auto___2281)){
args__1276__auto__.push((arguments[i__1270__auto___2282]));

var G__2283 = (i__1270__auto___2282 + (1));
i__1270__auto___2282 = G__2283;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__2279){
var vec__2280 = p__2279;
var encoding = cljs.core.nth.call(null,vec__2280,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq2277){
var G__2278 = cljs.core.first.call(null,seq2277);
var seq2277__$1 = cljs.core.next.call(null,seq2277);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__2278,seq2277__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 * or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(){
var args__1276__auto__ = [];
var len__1269__auto___2288 = arguments.length;
var i__1270__auto___2289 = (0);
while(true){
if((i__1270__auto___2289 < len__1269__auto___2288)){
args__1276__auto__.push((arguments[i__1270__auto___2289]));

var G__2290 = (i__1270__auto___2289 + (1));
i__1270__auto___2289 = G__2290;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2286){
var vec__2287 = p__2286;
var encoding = cljs.core.nth.call(null,vec__2287,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__230__auto__ = encoding;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq2284){
var G__2285 = cljs.core.first.call(null,seq2284);
var seq2284__$1 = cljs.core.next.call(null,seq2284);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__2285,seq2284__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 * or UTF-8 by default. If the encoded value is a string, a string is returned.
 * If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(){
var args__1276__auto__ = [];
var len__1269__auto___2296 = arguments.length;
var i__1270__auto___2297 = (0);
while(true){
if((i__1270__auto___2297 < len__1269__auto___2296)){
args__1276__auto__.push((arguments[i__1270__auto___2297]));

var G__2298 = (i__1270__auto___2297 + (1));
i__1270__auto___2297 = G__2298;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((1) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1277__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__2293){
var vec__2294 = p__2293;
var encoding = cljs.core.nth.call(null,vec__2294,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__2294,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__2295 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__2295,(0),null);
var v = cljs.core.nth.call(null,vec__2295,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__2294,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq2291){
var G__2292 = cljs.core.first.call(null,seq2291);
var seq2291__$1 = cljs.core.next.call(null,seq2291);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__2292,seq2291__$1);
});

//# sourceMappingURL=codec.js.map