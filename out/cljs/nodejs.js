// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1994__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1995__i = 0, G__1995__a = new Array(arguments.length -  0);
while (G__1995__i < G__1995__a.length) {G__1995__a[G__1995__i] = arguments[G__1995__i + 0]; ++G__1995__i;}
  args = new cljs.core.IndexedSeq(G__1995__a,0);
} 
return G__1994__delegate.call(this,args);};
G__1994.cljs$lang$maxFixedArity = 0;
G__1994.cljs$lang$applyTo = (function (arglist__1996){
var args = cljs.core.seq(arglist__1996);
return G__1994__delegate(args);
});
G__1994.cljs$core$IFn$_invoke$arity$variadic = G__1994__delegate;
return G__1994;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1997__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1998__i = 0, G__1998__a = new Array(arguments.length -  0);
while (G__1998__i < G__1998__a.length) {G__1998__a[G__1998__i] = arguments[G__1998__i + 0]; ++G__1998__i;}
  args = new cljs.core.IndexedSeq(G__1998__a,0);
} 
return G__1997__delegate.call(this,args);};
G__1997.cljs$lang$maxFixedArity = 0;
G__1997.cljs$lang$applyTo = (function (arglist__1999){
var args = cljs.core.seq(arglist__1999);
return G__1997__delegate(args);
});
G__1997.cljs$core$IFn$_invoke$arity$variadic = G__1997__delegate;
return G__1997;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map