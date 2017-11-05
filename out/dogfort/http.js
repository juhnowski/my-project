// Compiled by ClojureScript 1.7.48 {:target :nodejs}
goog.provide('dogfort.http');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('dogfort.util.response');
goog.require('redlobster.stream');
goog.require('redlobster.events');
dogfort.http.http = require("http");
dogfort.http.url = require("url");
dogfort.http.Stream = require("stream");
dogfort.http.ws = require("ws");

dogfort.http.IHTTPResponseWriter = {};

/**
 * Write data to a http.ServerResponse
 */
dogfort.http._write_response = (function dogfort$http$_write_response(data,res){
if((!((data == null))) && (!((data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 == null)))){
return data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2(data,res);
} else {
var x__866__auto__ = (((data == null))?null:data);
var m__867__auto__ = (dogfort.http._write_response[goog.typeOf(x__866__auto__)]);
if(!((m__867__auto__ == null))){
return m__867__auto__.call(null,data,res);
} else {
var m__867__auto____$1 = (dogfort.http._write_response["_"]);
if(!((m__867__auto____$1 == null))){
return m__867__auto____$1.call(null,data,res);
} else {
throw cljs.core.missing_protocol.call(null,"IHTTPResponseWriter.-write-response",data);
}
}
}
});

dogfort.http.send_result = (function dogfort$http$send_result(res,ring_result){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"keep-alive","keep-alive",-47515827).cljs$core$IFn$_invoke$arity$1(ring_result))){
if(cljs.core.truth_(ring_result)){
var map__2440 = ring_result;
var map__2440__$1 = ((((!((map__2440 == null)))?((((map__2440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__2440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2440):map__2440);
var status = cljs.core.get.call(null,map__2440__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var headers = cljs.core.get.call(null,map__2440__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__2440__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var end_stream_QMARK_ = cljs.core.get.call(null,map__2440__$1,new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884));
res.statusCode = status;

var seq__2442_2448 = cljs.core.seq.call(null,headers);
var chunk__2443_2449 = null;
var count__2444_2450 = (0);
var i__2445_2451 = (0);
while(true){
if((i__2445_2451 < count__2444_2450)){
var vec__2446_2452 = cljs.core._nth.call(null,chunk__2443_2449,i__2445_2451);
var header_2453 = cljs.core.nth.call(null,vec__2446_2452,(0),null);
var value_2454 = cljs.core.nth.call(null,vec__2446_2452,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_2453),cljs.core.clj__GT_js.call(null,value_2454));

var G__2455 = seq__2442_2448;
var G__2456 = chunk__2443_2449;
var G__2457 = count__2444_2450;
var G__2458 = (i__2445_2451 + (1));
seq__2442_2448 = G__2455;
chunk__2443_2449 = G__2456;
count__2444_2450 = G__2457;
i__2445_2451 = G__2458;
continue;
} else {
var temp__4425__auto___2459 = cljs.core.seq.call(null,seq__2442_2448);
if(temp__4425__auto___2459){
var seq__2442_2460__$1 = temp__4425__auto___2459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2442_2460__$1)){
var c__1014__auto___2461 = cljs.core.chunk_first.call(null,seq__2442_2460__$1);
var G__2462 = cljs.core.chunk_rest.call(null,seq__2442_2460__$1);
var G__2463 = c__1014__auto___2461;
var G__2464 = cljs.core.count.call(null,c__1014__auto___2461);
var G__2465 = (0);
seq__2442_2448 = G__2462;
chunk__2443_2449 = G__2463;
count__2444_2450 = G__2464;
i__2445_2451 = G__2465;
continue;
} else {
var vec__2447_2466 = cljs.core.first.call(null,seq__2442_2460__$1);
var header_2467 = cljs.core.nth.call(null,vec__2447_2466,(0),null);
var value_2468 = cljs.core.nth.call(null,vec__2447_2466,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_2467),cljs.core.clj__GT_js.call(null,value_2468));

var G__2469 = cljs.core.next.call(null,seq__2442_2460__$1);
var G__2470 = null;
var G__2471 = (0);
var G__2472 = (0);
seq__2442_2448 = G__2469;
chunk__2443_2449 = G__2470;
count__2444_2450 = G__2471;
i__2445_2451 = G__2472;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dogfort.http._write_response.call(null,body,res))){
res.end();
} else {
}

if(cljs.core.truth_((function (){var and__218__auto__ = redlobster.stream.stream_QMARK_.call(null,body);
if(cljs.core.truth_(and__218__auto__)){
return end_stream_QMARK_;
} else {
return and__218__auto__;
}
})())){
return body.end();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
dogfort.http.send_error_page = (function dogfort$http$send_error_page(res,status,err){
return dogfort.http.send_result.call(null,res,dogfort.util.response.default_response.call(null,(500)));
});
(dogfort.http.IHTTPResponseWriter["null"] = true);

(dogfort.http._write_response["null"] = (function (data,res){
return true;
}));

(dogfort.http.IHTTPResponseWriter["string"] = true);

(dogfort.http._write_response["string"] = (function (data,res){
res.write(data);

return true;
}));

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__2474_2486 = cljs.core.seq.call(null,data__$1);
var chunk__2475_2487 = null;
var count__2476_2488 = (0);
var i__2477_2489 = (0);
while(true){
if((i__2477_2489 < count__2476_2488)){
var i_2490 = cljs.core._nth.call(null,chunk__2475_2487,i__2477_2489);
dogfort.http._write_response.call(null,i_2490,res);

var G__2491 = seq__2474_2486;
var G__2492 = chunk__2475_2487;
var G__2493 = count__2476_2488;
var G__2494 = (i__2477_2489 + (1));
seq__2474_2486 = G__2491;
chunk__2475_2487 = G__2492;
count__2476_2488 = G__2493;
i__2477_2489 = G__2494;
continue;
} else {
var temp__4425__auto___2495 = cljs.core.seq.call(null,seq__2474_2486);
if(temp__4425__auto___2495){
var seq__2474_2496__$1 = temp__4425__auto___2495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2474_2496__$1)){
var c__1014__auto___2497 = cljs.core.chunk_first.call(null,seq__2474_2496__$1);
var G__2498 = cljs.core.chunk_rest.call(null,seq__2474_2496__$1);
var G__2499 = c__1014__auto___2497;
var G__2500 = cljs.core.count.call(null,c__1014__auto___2497);
var G__2501 = (0);
seq__2474_2486 = G__2498;
chunk__2475_2487 = G__2499;
count__2476_2488 = G__2500;
i__2477_2489 = G__2501;
continue;
} else {
var i_2502 = cljs.core.first.call(null,seq__2474_2496__$1);
dogfort.http._write_response.call(null,i_2502,res);

var G__2503 = cljs.core.next.call(null,seq__2474_2496__$1);
var G__2504 = null;
var G__2505 = (0);
var G__2506 = (0);
seq__2474_2486 = G__2503;
chunk__2475_2487 = G__2504;
count__2476_2488 = G__2505;
i__2477_2489 = G__2506;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__2478_2507 = cljs.core.seq.call(null,data__$1);
var chunk__2479_2508 = null;
var count__2480_2509 = (0);
var i__2481_2510 = (0);
while(true){
if((i__2481_2510 < count__2480_2509)){
var i_2511 = cljs.core._nth.call(null,chunk__2479_2508,i__2481_2510);
dogfort.http._write_response.call(null,i_2511,res);

var G__2512 = seq__2478_2507;
var G__2513 = chunk__2479_2508;
var G__2514 = count__2480_2509;
var G__2515 = (i__2481_2510 + (1));
seq__2478_2507 = G__2512;
chunk__2479_2508 = G__2513;
count__2480_2509 = G__2514;
i__2481_2510 = G__2515;
continue;
} else {
var temp__4425__auto___2516 = cljs.core.seq.call(null,seq__2478_2507);
if(temp__4425__auto___2516){
var seq__2478_2517__$1 = temp__4425__auto___2516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2478_2517__$1)){
var c__1014__auto___2518 = cljs.core.chunk_first.call(null,seq__2478_2517__$1);
var G__2519 = cljs.core.chunk_rest.call(null,seq__2478_2517__$1);
var G__2520 = c__1014__auto___2518;
var G__2521 = cljs.core.count.call(null,c__1014__auto___2518);
var G__2522 = (0);
seq__2478_2507 = G__2519;
chunk__2479_2508 = G__2520;
count__2480_2509 = G__2521;
i__2481_2510 = G__2522;
continue;
} else {
var i_2523 = cljs.core.first.call(null,seq__2478_2517__$1);
dogfort.http._write_response.call(null,i_2523,res);

var G__2524 = cljs.core.next.call(null,seq__2478_2517__$1);
var G__2525 = null;
var G__2526 = (0);
var G__2527 = (0);
seq__2478_2507 = G__2524;
chunk__2479_2508 = G__2525;
count__2480_2509 = G__2526;
i__2481_2510 = G__2527;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__2482_2528 = cljs.core.seq.call(null,data__$1);
var chunk__2483_2529 = null;
var count__2484_2530 = (0);
var i__2485_2531 = (0);
while(true){
if((i__2485_2531 < count__2484_2530)){
var i_2532 = cljs.core._nth.call(null,chunk__2483_2529,i__2485_2531);
dogfort.http._write_response.call(null,i_2532,res);

var G__2533 = seq__2482_2528;
var G__2534 = chunk__2483_2529;
var G__2535 = count__2484_2530;
var G__2536 = (i__2485_2531 + (1));
seq__2482_2528 = G__2533;
chunk__2483_2529 = G__2534;
count__2484_2530 = G__2535;
i__2485_2531 = G__2536;
continue;
} else {
var temp__4425__auto___2537 = cljs.core.seq.call(null,seq__2482_2528);
if(temp__4425__auto___2537){
var seq__2482_2538__$1 = temp__4425__auto___2537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2482_2538__$1)){
var c__1014__auto___2539 = cljs.core.chunk_first.call(null,seq__2482_2538__$1);
var G__2540 = cljs.core.chunk_rest.call(null,seq__2482_2538__$1);
var G__2541 = c__1014__auto___2539;
var G__2542 = cljs.core.count.call(null,c__1014__auto___2539);
var G__2543 = (0);
seq__2482_2528 = G__2540;
chunk__2483_2529 = G__2541;
count__2484_2530 = G__2542;
i__2485_2531 = G__2543;
continue;
} else {
var i_2544 = cljs.core.first.call(null,seq__2482_2538__$1);
dogfort.http._write_response.call(null,i_2544,res);

var G__2545 = cljs.core.next.call(null,seq__2482_2538__$1);
var G__2546 = null;
var G__2547 = (0);
var G__2548 = (0);
seq__2482_2528 = G__2545;
chunk__2483_2529 = G__2546;
count__2484_2530 = G__2547;
i__2485_2531 = G__2548;
continue;
}
} else {
}
}
break;
}

return true;
});

Buffer.prototype.dogfort$http$IHTTPResponseWriter$ = true;

Buffer.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
res.write(data__$1);

return true;
});

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$ = true;

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
redlobster.events.on.call(null,data__$1,new cljs.core.Keyword(null,"error","error",-978969032),((function (data__$1){
return (function (p1__2473_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__2473_SHARP_);
});})(data__$1))
);

data__$1.pipe(res);

return false;
});
dogfort.http.build_listener = (function dogfort$http$build_listener(handler,options){
return (function (req,res){
var url = dogfort.http.url.parse(req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,req.headers);
var conn = req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
var peer_cert_fn = conn.getPeerCertificate;
var ring_req = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"ssl-client-cert","ssl-client-cert",661784516),new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"content-length","content-length",441319507),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"request-method","request-method",1764796830)],[res,(cljs.core.truth_(peer_cert_fn)?peer_cert_fn.call(null):null),conn.remoteAddress,headers,address.call(null,"port"),headers.call(null,"content-length"),headers.call(null,"content-type"),null,uri,address.call(null,"address"),query__$1,req,"http",cljs.core.keyword.call(null,req.method.toLowerCase())]);
var result = handler.call(null,ring_req);
return redlobster.promise.on_realised.call(null,result,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__2549_SHARP_){
return dogfort.http.send_result.call(null,res,p1__2549_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__2550_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__2550_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
);
});
});
dogfort.http.ws_handler = (function dogfort$http$ws_handler(handler,websocket){
var upgrade_req = websocket.upgradeReq;
var url = dogfort.http.url.parse(upgrade_req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,upgrade_req.headers);
var conn = upgrade_req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
return handler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"server-port","server-port",663745648),address.call(null,"port"),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),address.call(null,"address"),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket,new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true,new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null));
});
dogfort.http.run_http = (function dogfort$http$run_http(handler,options){
var server = dogfort.http.http.createServer(dogfort.http.build_listener.call(null,handler,options));
var wss = (new dogfort.http.ws.Server({"server": server}));
wss.on("connection",((function (server,wss){
return (function (p1__2551_SHARP_){
return dogfort.http.ws_handler.call(null,handler,p1__2551_SHARP_);
});})(server,wss))
);

return server.listen(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(options));
});

//# sourceMappingURL=http.js.map