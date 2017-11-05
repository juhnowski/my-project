// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.node');
goog.require('cljs.core');
cljs.node.log = (function cljs$node$log(){
var args__1276__auto__ = [];
var len__1269__auto___2336 = arguments.length;
var i__1270__auto___2337 = (0);
while(true){
if((i__1270__auto___2337 < len__1269__auto___2336)){
args__1276__auto__.push((arguments[i__1270__auto___2337]));

var G__2338 = (i__1270__auto___2337 + (1));
i__1270__auto___2337 = G__2338;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((0) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((0)),(0))):null);
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(argseq__1277__auto__);
});

cljs.node.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,cljs.core.map.call(null,cljs.core.str,args));
});

cljs.node.log.cljs$lang$maxFixedArity = (0);

cljs.node.log.cljs$lang$applyTo = (function (seq2335){
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2335));
});
cljs.node.on_node_QMARK_ = (function cljs$node$on_node_QMARK_(){
try{return typeof process.versions.node === 'string';
}catch (e2340){if((e2340 instanceof Error)){
var e = e2340;
return false;
} else {
throw e2340;

}
}});

//# sourceMappingURL=node.js.map