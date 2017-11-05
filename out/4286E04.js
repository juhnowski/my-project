goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1986__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1987__i = 0, G__1987__a = new Array(arguments.length -  0);
while (G__1987__i < G__1987__a.length) {G__1987__a[G__1987__i] = arguments[G__1987__i + 0]; ++G__1987__i;}
  args = new cljs.core.IndexedSeq(G__1987__a,0);
} 
return G__1986__delegate.call(this,args);};
G__1986.cljs$lang$maxFixedArity = 0;
G__1986.cljs$lang$applyTo = (function (arglist__1988){
var args = cljs.core.seq(arglist__1988);
return G__1986__delegate(args);
});
G__1986.cljs$core$IFn$_invoke$arity$variadic = G__1986__delegate;
return G__1986;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1989__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1990__i = 0, G__1990__a = new Array(arguments.length -  0);
while (G__1990__i < G__1990__a.length) {G__1990__a[G__1990__i] = arguments[G__1990__i + 0]; ++G__1990__i;}
  args = new cljs.core.IndexedSeq(G__1990__a,0);
} 
return G__1989__delegate.call(this,args);};
G__1989.cljs$lang$maxFixedArity = 0;
G__1989.cljs$lang$applyTo = (function (arglist__1991){
var args = cljs.core.seq(arglist__1991);
return G__1989__delegate(args);
});
G__1989.cljs$core$IFn$_invoke$arity$variadic = G__1989__delegate;
return G__1989;
})()
;

return null;
});
