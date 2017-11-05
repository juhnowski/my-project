goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2426__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2427__i = 0, G__2427__a = new Array(arguments.length -  0);
while (G__2427__i < G__2427__a.length) {G__2427__a[G__2427__i] = arguments[G__2427__i + 0]; ++G__2427__i;}
  args = new cljs.core.IndexedSeq(G__2427__a,0);
} 
return G__2426__delegate.call(this,args);};
G__2426.cljs$lang$maxFixedArity = 0;
G__2426.cljs$lang$applyTo = (function (arglist__2428){
var args = cljs.core.seq(arglist__2428);
return G__2426__delegate(args);
});
G__2426.cljs$core$IFn$_invoke$arity$variadic = G__2426__delegate;
return G__2426;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2429__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2430__i = 0, G__2430__a = new Array(arguments.length -  0);
while (G__2430__i < G__2430__a.length) {G__2430__a[G__2430__i] = arguments[G__2430__i + 0]; ++G__2430__i;}
  args = new cljs.core.IndexedSeq(G__2430__a,0);
} 
return G__2429__delegate.call(this,args);};
G__2429.cljs$lang$maxFixedArity = 0;
G__2429.cljs$lang$applyTo = (function (arglist__2431){
var args = cljs.core.seq(arglist__2431);
return G__2429__delegate(args);
});
G__2429.cljs$core$IFn$_invoke$arity$variadic = G__2429__delegate;
return G__2429;
})()
;

return null;
});
