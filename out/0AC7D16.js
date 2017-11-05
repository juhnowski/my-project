goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2990__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2991__i = 0, G__2991__a = new Array(arguments.length -  0);
while (G__2991__i < G__2991__a.length) {G__2991__a[G__2991__i] = arguments[G__2991__i + 0]; ++G__2991__i;}
  args = new cljs.core.IndexedSeq(G__2991__a,0);
} 
return G__2990__delegate.call(this,args);};
G__2990.cljs$lang$maxFixedArity = 0;
G__2990.cljs$lang$applyTo = (function (arglist__2992){
var args = cljs.core.seq(arglist__2992);
return G__2990__delegate(args);
});
G__2990.cljs$core$IFn$_invoke$arity$variadic = G__2990__delegate;
return G__2990;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2993__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2994__i = 0, G__2994__a = new Array(arguments.length -  0);
while (G__2994__i < G__2994__a.length) {G__2994__a[G__2994__i] = arguments[G__2994__i + 0]; ++G__2994__i;}
  args = new cljs.core.IndexedSeq(G__2994__a,0);
} 
return G__2993__delegate.call(this,args);};
G__2993.cljs$lang$maxFixedArity = 0;
G__2993.cljs$lang$applyTo = (function (arglist__2995){
var args = cljs.core.seq(arglist__2995);
return G__2993__delegate(args);
});
G__2993.cljs$core$IFn$_invoke$arity$variadic = G__2993__delegate;
return G__2993;
})()
;

return null;
});
