goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1773__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1774__i = 0, G__1774__a = new Array(arguments.length -  0);
while (G__1774__i < G__1774__a.length) {G__1774__a[G__1774__i] = arguments[G__1774__i + 0]; ++G__1774__i;}
  args = new cljs.core.IndexedSeq(G__1774__a,0);
} 
return G__1773__delegate.call(this,args);};
G__1773.cljs$lang$maxFixedArity = 0;
G__1773.cljs$lang$applyTo = (function (arglist__1775){
var args = cljs.core.seq(arglist__1775);
return G__1773__delegate(args);
});
G__1773.cljs$core$IFn$_invoke$arity$variadic = G__1773__delegate;
return G__1773;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1776__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1777__i = 0, G__1777__a = new Array(arguments.length -  0);
while (G__1777__i < G__1777__a.length) {G__1777__a[G__1777__i] = arguments[G__1777__i + 0]; ++G__1777__i;}
  args = new cljs.core.IndexedSeq(G__1777__a,0);
} 
return G__1776__delegate.call(this,args);};
G__1776.cljs$lang$maxFixedArity = 0;
G__1776.cljs$lang$applyTo = (function (arglist__1778){
var args = cljs.core.seq(arglist__1778);
return G__1776__delegate(args);
});
G__1776.cljs$core$IFn$_invoke$arity$variadic = G__1776__delegate;
return G__1776;
})()
;

return null;
});
