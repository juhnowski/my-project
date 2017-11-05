goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2174__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2174 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2175__i = 0, G__2175__a = new Array(arguments.length -  0);
while (G__2175__i < G__2175__a.length) {G__2175__a[G__2175__i] = arguments[G__2175__i + 0]; ++G__2175__i;}
  args = new cljs.core.IndexedSeq(G__2175__a,0);
} 
return G__2174__delegate.call(this,args);};
G__2174.cljs$lang$maxFixedArity = 0;
G__2174.cljs$lang$applyTo = (function (arglist__2176){
var args = cljs.core.seq(arglist__2176);
return G__2174__delegate(args);
});
G__2174.cljs$core$IFn$_invoke$arity$variadic = G__2174__delegate;
return G__2174;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2177__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2178__i = 0, G__2178__a = new Array(arguments.length -  0);
while (G__2178__i < G__2178__a.length) {G__2178__a[G__2178__i] = arguments[G__2178__i + 0]; ++G__2178__i;}
  args = new cljs.core.IndexedSeq(G__2178__a,0);
} 
return G__2177__delegate.call(this,args);};
G__2177.cljs$lang$maxFixedArity = 0;
G__2177.cljs$lang$applyTo = (function (arglist__2179){
var args = cljs.core.seq(arglist__2179);
return G__2177__delegate(args);
});
G__2177.cljs$core$IFn$_invoke$arity$variadic = G__2177__delegate;
return G__2177;
})()
;

return null;
});
