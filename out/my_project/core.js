// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('my_project.core');
goog.require('cljs.core');
goog.require('dogfort.http');
goog.require('cljs.nodejs');
goog.require('hiccups.runtime');
goog.require('dogfort.middleware.defaults');
goog.require('dogfort.middleware.routes');
cljs.nodejs.enable_util_print_BANG_.call(null);
my_project.core.handler = dogfort.middleware.routes.routes.call(null,(function (request__1482__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__1482__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),(function (request__1482__auto____$1){
var req = request__1482__auto____$1;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,req),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hi","hi",-1821422114),"there"], null)], null);
}));
}),(function (request__1482__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__1482__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello",":name"], null),(function (request__1482__auto____$1){
var name = cljs.core.get_in.call(null,request__1482__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.get_in.call(null,request__1482__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"name"], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h1>Hello ",name,"!</h1>"], null);
}));
}));
my_project.core.main = (function my_project$core$main(){
var args__1276__auto__ = [];
var len__1269__auto___1981 = arguments.length;
var i__1270__auto___1982 = (0);
while(true){
if((i__1270__auto___1982 < len__1269__auto___1981)){
args__1276__auto__.push((arguments[i__1270__auto___1982]));

var G__1983 = (i__1270__auto___1982 + (1));
i__1270__auto___1982 = G__1983;
continue;
} else {
}
break;
}

var argseq__1277__auto__ = ((((0) < args__1276__auto__.length))?(new cljs.core.IndexedSeq(args__1276__auto__.slice((0)),(0))):null);
return my_project.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__1277__auto__);
});

my_project.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"starting");

return dogfort.http.run_http.call(null,dogfort.middleware.defaults.wrap_defaults.call(null,my_project.core.handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-file","wrap-file",-1438240540),"static"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(function (){var or__230__auto__ = process.env.PORT;
if(cljs.core.truth_(or__230__auto__)){
return or__230__auto__;
} else {
return (5001);
}
})()], null));
});

my_project.core.main.cljs$lang$maxFixedArity = (0);

my_project.core.main.cljs$lang$applyTo = (function (seq1980){
return my_project.core.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1980));
});
cljs.core._STAR_main_cli_fn_STAR_ = my_project.core.main;

//# sourceMappingURL=core.js.map