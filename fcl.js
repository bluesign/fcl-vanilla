(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.fcl = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeHttpTransport = void 0;
var http = require("http");
var https = require("https");
var url = require("url");
var grpc_web_1 = require("@improbable-eng/grpc-web");
function NodeHttpTransport() {
    return function (opts) {
        return new NodeHttp(opts);
    };
}
exports.NodeHttpTransport = NodeHttpTransport;
var NodeHttp = (function () {
    function NodeHttp(transportOptions) {
        this.options = transportOptions;
    }
    NodeHttp.prototype.sendMessage = function (msgBytes) {
        if (!this.options.methodDefinition.requestStream && !this.options.methodDefinition.responseStream) {
            this.request.setHeader("Content-Length", msgBytes.byteLength);
        }
        this.request.write(toBuffer(msgBytes));
        this.request.end();
    };
    NodeHttp.prototype.finishSend = function () {
    };
    NodeHttp.prototype.responseCallback = function (response) {
        var _this = this;
        this.options.debug && console.log("NodeHttp.response", response.statusCode);
        var headers = filterHeadersForUndefined(response.headers);
        this.options.onHeaders(new grpc_web_1.grpc.Metadata(headers), response.statusCode);
        response.on("data", function (chunk) {
            _this.options.debug && console.log("NodeHttp.data", chunk);
            _this.options.onChunk(toArrayBuffer(chunk));
        });
        response.on("end", function () {
            _this.options.debug && console.log("NodeHttp.end");
            _this.options.onEnd();
        });
    };
    ;
    NodeHttp.prototype.start = function (metadata) {
        var _this = this;
        var headers = {};
        metadata.forEach(function (key, values) {
            headers[key] = values.join(", ");
        });
        var parsedUrl = url.parse(this.options.url);
        var httpOptions = {
            host: parsedUrl.hostname,
            port: parsedUrl.port ? parseInt(parsedUrl.port) : undefined,
            path: parsedUrl.path,
            headers: headers,
            method: "POST"
        };
        if (parsedUrl.protocol === "https:") {
            this.request = https.request(httpOptions, this.responseCallback.bind(this));
        }
        else {
            this.request = http.request(httpOptions, this.responseCallback.bind(this));
        }
        this.request.on("error", function (err) {
            _this.options.debug && console.log("NodeHttp.error", err);
            _this.options.onEnd(err);
        });
    };
    NodeHttp.prototype.cancel = function () {
        this.options.debug && console.log("NodeHttp.abort");
        this.request.abort();
    };
    return NodeHttp;
}());
function filterHeadersForUndefined(headers) {
    var filteredHeaders = {};
    for (var key in headers) {
        var value = headers[key];
        if (headers.hasOwnProperty(key)) {
            if (value !== undefined) {
                filteredHeaders[key] = value;
            }
        }
    }
    return filteredHeaders;
}
function toArrayBuffer(buf) {
    var view = new Uint8Array(buf.length);
    for (var i = 0; i < buf.length; i++) {
        view[i] = buf[i];
    }
    return view;
}
function toBuffer(ab) {
    var buf = Buffer.alloc(ab.byteLength);
    for (var i = 0; i < buf.length; i++) {
        buf[i] = ab[i];
    }
    return buf;
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"@improbable-eng/grpc-web":2,"buffer":15,"http":27,"https":18,"url":47}],2:[function(require,module,exports){
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,(function(){return e={418:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={splitValues:!1});var r,o=this;this.headersMap={},e&&("undefined"!=typeof Headers&&e instanceof Headers?n.getHeaderKeys(e).forEach((function(r){n.getHeaderValues(e,r).forEach((function(e){t.splitValues?o.append(r,n.splitHeaderValue(e)):o.append(r,e)}))})):"object"==typeof(r=e)&&"object"==typeof r.headersMap&&"function"==typeof r.forEach?e.forEach((function(e,t){o.append(e,t)})):"undefined"!=typeof Map&&e instanceof Map?e.forEach((function(e,t){o.append(t,e)})):"string"==typeof e?this.appendFromString(e):"object"==typeof e&&Object.getOwnPropertyNames(e).forEach((function(t){var r=e[t];Array.isArray(r)?r.forEach((function(e){o.append(t,e)})):o.append(t,r)})))}return e.prototype.appendFromString=function(e){for(var t=e.split("\r\n"),r=0;r<t.length;r++){var n=t[r],o=n.indexOf(":");if(o>0){var s=n.substring(0,o).trim(),i=n.substring(o+1).trim();this.append(s,i)}}},e.prototype.delete=function(e,t){var r=n.normalizeName(e);if(void 0===t)delete this.headersMap[r];else{var o=this.headersMap[r];if(o){var s=o.indexOf(t);s>=0&&o.splice(s,1),0===o.length&&delete this.headersMap[r]}}},e.prototype.append=function(e,t){var r=this,o=n.normalizeName(e);Array.isArray(this.headersMap[o])||(this.headersMap[o]=[]),Array.isArray(t)?t.forEach((function(e){r.headersMap[o].push(n.normalizeValue(e))})):this.headersMap[o].push(n.normalizeValue(t))},e.prototype.set=function(e,t){var r=n.normalizeName(e);if(Array.isArray(t)){var o=[];t.forEach((function(e){o.push(n.normalizeValue(e))})),this.headersMap[r]=o}else this.headersMap[r]=[n.normalizeValue(t)]},e.prototype.has=function(e,t){var r=this.headersMap[n.normalizeName(e)];if(!Array.isArray(r))return!1;if(void 0!==t){var o=n.normalizeValue(t);return r.indexOf(o)>=0}return!0},e.prototype.get=function(e){var t=this.headersMap[n.normalizeName(e)];return void 0!==t?t.concat():[]},e.prototype.forEach=function(e){var t=this;Object.getOwnPropertyNames(this.headersMap).forEach((function(r){e(r,t.headersMap[r])}),this)},e.prototype.toHeaders=function(){if("undefined"!=typeof Headers){var e=new Headers;return this.forEach((function(t,r){r.forEach((function(r){e.append(t,r)}))})),e}throw new Error("Headers class is not defined")},e}();t.BrowserHeaders=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.BrowserHeaders=n.BrowserHeaders},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iterateHeaders=function(e,t){for(var r=e[Symbol.iterator](),n=r.next();!n.done;)t(n.value[0]),n=r.next()},t.iterateHeadersKeys=function(e,t){for(var r=e.keys(),n=r.next();!n.done;)t(n.value),n=r.next()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.normalizeName=function(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()},t.normalizeValue=function(e){return"string"!=typeof e&&(e=String(e)),e},t.getHeaderValues=function(e,t){var r=e;if(r instanceof Headers&&r.getAll)return r.getAll(t);var n=r.get(t);return n&&"string"==typeof n?[n]:n},t.getHeaderKeys=function(e){var t=e,r={},o=[];return t.keys?n.iterateHeadersKeys(t,(function(e){r[e]||(r[e]=!0,o.push(e))})):t.forEach?t.forEach((function(e,t){r[t]||(r[t]=!0,o.push(t))})):n.iterateHeaders(t,(function(e){var t=e[0];r[t]||(r[t]=!0,o.push(t))})),o},t.splitHeaderValue=function(e){var t=[];return e.split(", ").forEach((function(e){e.split(",").forEach((function(e){t.push(e)}))})),t}}]))},617:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkParser=t.ChunkType=t.encodeASCII=t.decodeASCII=void 0;var n,o=r(65);function s(e){return 9===(t=e)||10===t||13===t||e>=32&&e<=126;var t}function i(e){for(var t=0;t!==e.length;++t)if(!s(e[t]))throw new Error("Metadata is not valid (printable) ASCII");return String.fromCharCode.apply(String,Array.prototype.slice.call(e))}function a(e){return 128==(128&e.getUint8(0))}function u(e){return e.getUint32(1,!1)}function d(e,t,r){return e.byteLength-t>=r}function c(e,t,r){if(e.slice)return e.slice(t,r);var n=e.length;void 0!==r&&(n=r);for(var o=new Uint8Array(n-t),s=0,i=t;i<n;i++)o[s++]=e[i];return o}t.decodeASCII=i,t.encodeASCII=function(e){for(var t=new Uint8Array(e.length),r=0;r!==e.length;++r){var n=e.charCodeAt(r);if(!s(n))throw new Error("Metadata contains invalid ASCII");t[r]=n}return t},function(e){e[e.MESSAGE=1]="MESSAGE",e[e.TRAILERS=2]="TRAILERS"}(n=t.ChunkType||(t.ChunkType={}));var p=function(){function e(){this.buffer=null,this.position=0}return e.prototype.parse=function(e,t){if(0===e.length&&t)return[];var r,s=[];if(null==this.buffer)this.buffer=e,this.position=0;else if(this.position===this.buffer.byteLength)this.buffer=e,this.position=0;else{var p=this.buffer.byteLength-this.position,h=new Uint8Array(p+e.byteLength),f=c(this.buffer,this.position);h.set(f,0);var l=new Uint8Array(e);h.set(l,p),this.buffer=h,this.position=0}for(;;){if(!d(this.buffer,this.position,5))return s;var g=c(this.buffer,this.position,this.position+5),b=new DataView(g.buffer,g.byteOffset,g.byteLength),y=u(b);if(!d(this.buffer,this.position,5+y))return s;var v=c(this.buffer,this.position+5,this.position+5+y);if(this.position+=5+y,a(b))return s.push({chunkType:n.TRAILERS,trailers:(r=v,new o.Metadata(i(r)))}),s;s.push({chunkType:n.MESSAGE,data:v})}},e}();t.ChunkParser=p},8:function(e,t){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.httpStatusToCode=t.Code=void 0,function(e){e[e.OK=0]="OK",e[e.Canceled=1]="Canceled",e[e.Unknown=2]="Unknown",e[e.InvalidArgument=3]="InvalidArgument",e[e.DeadlineExceeded=4]="DeadlineExceeded",e[e.NotFound=5]="NotFound",e[e.AlreadyExists=6]="AlreadyExists",e[e.PermissionDenied=7]="PermissionDenied",e[e.ResourceExhausted=8]="ResourceExhausted",e[e.FailedPrecondition=9]="FailedPrecondition",e[e.Aborted=10]="Aborted",e[e.OutOfRange=11]="OutOfRange",e[e.Unimplemented=12]="Unimplemented",e[e.Internal=13]="Internal",e[e.Unavailable=14]="Unavailable",e[e.DataLoss=15]="DataLoss",e[e.Unauthenticated=16]="Unauthenticated"}(r=t.Code||(t.Code={})),t.httpStatusToCode=function(e){switch(e){case 0:return r.Internal;case 200:return r.OK;case 400:return r.InvalidArgument;case 401:return r.Unauthenticated;case 403:return r.PermissionDenied;case 404:return r.NotFound;case 409:return r.Aborted;case 412:return r.FailedPrecondition;case 429:return r.ResourceExhausted;case 499:return r.Canceled;case 500:return r.Unknown;case 501:return r.Unimplemented;case 503:return r.Unavailable;case 504:return r.DeadlineExceeded;default:return r.Unknown}}},934:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.client=void 0;var n=r(65),o=r(617),s=r(8),i=r(346),a=r(57),u=r(882);t.client=function(e,t){return new d(e,t)};var d=function(){function e(e,t){this.started=!1,this.sentFirstMessage=!1,this.completed=!1,this.closed=!1,this.finishedSending=!1,this.onHeadersCallbacks=[],this.onMessageCallbacks=[],this.onEndCallbacks=[],this.parser=new o.ChunkParser,this.methodDefinition=e,this.props=t,this.createTransport()}return e.prototype.createTransport=function(){var e=this.props.host+"/"+this.methodDefinition.service.serviceName+"/"+this.methodDefinition.methodName,t={methodDefinition:this.methodDefinition,debug:this.props.debug||!1,url:e,onHeaders:this.onTransportHeaders.bind(this),onChunk:this.onTransportChunk.bind(this),onEnd:this.onTransportEnd.bind(this)};this.props.transport?this.transport=this.props.transport(t):this.transport=a.makeDefaultTransport(t)},e.prototype.onTransportHeaders=function(e,t){if(this.props.debug&&i.debug("onHeaders",e,t),this.closed)this.props.debug&&i.debug("grpc.onHeaders received after request was closed - ignoring");else if(0===t);else{this.responseHeaders=e,this.props.debug&&i.debug("onHeaders.responseHeaders",JSON.stringify(this.responseHeaders,null,2));var r=c(e);this.props.debug&&i.debug("onHeaders.gRPCStatus",r);var n=r&&r>=0?r:s.httpStatusToCode(t);this.props.debug&&i.debug("onHeaders.code",n);var o=e.get("grpc-message")||[];if(this.props.debug&&i.debug("onHeaders.gRPCMessage",o),this.rawOnHeaders(e),n!==s.Code.OK){var a=this.decodeGRPCStatus(o[0]);this.rawOnError(n,a,e)}}},e.prototype.onTransportChunk=function(e){var t=this;if(this.closed)this.props.debug&&i.debug("grpc.onChunk received after request was closed - ignoring");else{var r=[];try{r=this.parser.parse(e)}catch(e){return this.props.debug&&i.debug("onChunk.parsing error",e,e.message),void this.rawOnError(s.Code.Internal,"parsing error: "+e.message)}r.forEach((function(e){if(e.chunkType===o.ChunkType.MESSAGE){var r=t.methodDefinition.responseType.deserializeBinary(e.data);t.rawOnMessage(r)}else e.chunkType===o.ChunkType.TRAILERS&&(t.responseHeaders?(t.responseTrailers=new n.Metadata(e.trailers),t.props.debug&&i.debug("onChunk.trailers",t.responseTrailers)):(t.responseHeaders=new n.Metadata(e.trailers),t.rawOnHeaders(t.responseHeaders)))}))}},e.prototype.onTransportEnd=function(){if(this.props.debug&&i.debug("grpc.onEnd"),this.closed)this.props.debug&&i.debug("grpc.onEnd received after request was closed - ignoring");else if(void 0!==this.responseTrailers){var e=c(this.responseTrailers);if(null!==e){var t=this.responseTrailers.get("grpc-message"),r=this.decodeGRPCStatus(t[0]);this.rawOnEnd(e,r,this.responseTrailers)}else this.rawOnError(s.Code.Internal,"Response closed without grpc-status (Trailers provided)")}else{if(void 0===this.responseHeaders)return void this.rawOnError(s.Code.Unknown,"Response closed without headers");var n=c(this.responseHeaders),o=this.responseHeaders.get("grpc-message");if(this.props.debug&&i.debug("grpc.headers only response ",n,o),null===n)return void this.rawOnEnd(s.Code.Unknown,"Response closed without grpc-status (Headers only)",this.responseHeaders);var a=this.decodeGRPCStatus(o[0]);this.rawOnEnd(n,a,this.responseHeaders)}},e.prototype.decodeGRPCStatus=function(e){if(!e)return"";try{return decodeURIComponent(e)}catch(t){return e}},e.prototype.rawOnEnd=function(e,t,r){var n=this;this.props.debug&&i.debug("rawOnEnd",e,t,r),this.completed||(this.completed=!0,this.onEndCallbacks.forEach((function(o){if(!n.closed)try{o(e,t,r)}catch(e){setTimeout((function(){throw e}),0)}})))},e.prototype.rawOnHeaders=function(e){this.props.debug&&i.debug("rawOnHeaders",e),this.completed||this.onHeadersCallbacks.forEach((function(t){try{t(e)}catch(e){setTimeout((function(){throw e}),0)}}))},e.prototype.rawOnError=function(e,t,r){var o=this;void 0===r&&(r=new n.Metadata),this.props.debug&&i.debug("rawOnError",e,t),this.completed||(this.completed=!0,this.onEndCallbacks.forEach((function(n){if(!o.closed)try{n(e,t,r)}catch(e){setTimeout((function(){throw e}),0)}})))},e.prototype.rawOnMessage=function(e){var t=this;this.props.debug&&i.debug("rawOnMessage",e.toObject()),this.completed||this.closed||this.onMessageCallbacks.forEach((function(r){if(!t.closed)try{r(e)}catch(e){setTimeout((function(){throw e}),0)}}))},e.prototype.onHeaders=function(e){this.onHeadersCallbacks.push(e)},e.prototype.onMessage=function(e){this.onMessageCallbacks.push(e)},e.prototype.onEnd=function(e){this.onEndCallbacks.push(e)},e.prototype.start=function(e){if(this.started)throw new Error("Client already started - cannot .start()");this.started=!0;var t=new n.Metadata(e||{});t.set("content-type","application/grpc-web+proto"),t.set("x-grpc-web","1"),this.transport.start(t)},e.prototype.send=function(e){if(!this.started)throw new Error("Client not started - .start() must be called before .send()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .send()");if(!this.methodDefinition.requestStream&&this.sentFirstMessage)throw new Error("Message already sent for non-client-streaming method - cannot .send()");this.sentFirstMessage=!0;var t=u.frameRequest(e);this.transport.sendMessage(t)},e.prototype.finishSend=function(){if(!this.started)throw new Error("Client not started - .finishSend() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .finishSend()");this.finishedSending=!0,this.transport.finishSend()},e.prototype.close=function(){if(!this.started)throw new Error("Client not started - .start() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .close()");this.closed=!0,this.props.debug&&i.debug("request.abort aborting request"),this.transport.cancel()},e}();function c(e){var t=e.get("grpc-status")||[];if(t.length>0)try{var r=t[0];return parseInt(r,10)}catch(e){return null}return null}},346:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debug=void 0,t.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.debug?console.debug.apply(null,e):console.log.apply(null,e)}},607:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.grpc=void 0;var n,o=r(418),s=r(57),i=r(229),a=r(540),u=r(210),d=r(859),c=r(8),p=r(938),h=r(35),f=r(934);(n=t.grpc||(t.grpc={})).setDefaultTransport=s.setDefaultTransportFactory,n.CrossBrowserHttpTransport=d.CrossBrowserHttpTransport,n.FetchReadableStreamTransport=i.FetchReadableStreamTransport,n.XhrTransport=u.XhrTransport,n.WebsocketTransport=a.WebsocketTransport,n.Code=c.Code,n.Metadata=o.BrowserHeaders,n.client=function(e,t){return f.client(e,t)},n.invoke=p.invoke,n.unary=h.unary},938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.invoke=void 0;var n=r(934);t.invoke=function(e,t){if(e.requestStream)throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");var r=n.client(e,{host:t.host,transport:t.transport,debug:t.debug});return t.onHeaders&&r.onHeaders(t.onHeaders),t.onMessage&&r.onMessage(t.onMessage),t.onEnd&&r.onEnd(t.onEnd),r.start(t.metadata),r.send(t.request),r.finishSend(),{close:function(){r.close()}}}},65:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0;var n=r(418);Object.defineProperty(t,"Metadata",{enumerable:!0,get:function(){return n.BrowserHeaders}})},57:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeDefaultTransport=t.setDefaultTransportFactory=void 0;var n=r(859),o=function(e){return n.CrossBrowserHttpTransport({withCredentials:!1})(e)};t.setDefaultTransportFactory=function(e){o=e},t.makeDefaultTransport=function(e){return o(e)}},229:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.detectFetchSupport=t.FetchReadableStreamTransport=void 0;var o=r(65),s=r(346);t.FetchReadableStreamTransport=function(e){return function(t){return function(e,t){return e.debug&&s.debug("fetchRequest",e),new i(e,t)}(t,e)}};var i=function(){function e(e,t){this.cancelled=!1,this.controller=self.AbortController&&new AbortController,this.options=e,this.init=t}return e.prototype.pump=function(e,t){var r=this;if(this.reader=e,this.cancelled)return this.options.debug&&s.debug("Fetch.pump.cancel at first pump"),void this.reader.cancel().catch((function(e){r.options.debug&&s.debug("Fetch.pump.reader.cancel exception",e)}));this.reader.read().then((function(e){if(e.done)return r.options.onEnd(),t;r.options.onChunk(e.value),r.pump(r.reader,t)})).catch((function(e){r.cancelled?r.options.debug&&s.debug("Fetch.catch - request cancelled"):(r.cancelled=!0,r.options.debug&&s.debug("Fetch.catch",e.message),r.options.onEnd(e))}))},e.prototype.send=function(e){var t=this;fetch(this.options.url,n(n({},this.init),{headers:this.metadata.toHeaders(),method:"POST",body:e,signal:this.controller&&this.controller.signal})).then((function(e){if(t.options.debug&&s.debug("Fetch.response",e),t.options.onHeaders(new o.Metadata(e.headers),e.status),!e.body)return e;t.pump(e.body.getReader(),e)})).catch((function(e){t.cancelled?t.options.debug&&s.debug("Fetch.catch - request cancelled"):(t.cancelled=!0,t.options.debug&&s.debug("Fetch.catch",e.message),t.options.onEnd(e))}))},e.prototype.sendMessage=function(e){this.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){this.metadata=e},e.prototype.cancel=function(){var e=this;this.cancelled?this.options.debug&&s.debug("Fetch.cancel already cancelled"):(this.cancelled=!0,this.controller?(this.options.debug&&s.debug("Fetch.cancel.controller.abort"),this.controller.abort()):this.options.debug&&s.debug("Fetch.cancel.missing abort controller"),this.reader?(this.options.debug&&s.debug("Fetch.cancel.reader.cancel"),this.reader.cancel().catch((function(t){e.options.debug&&s.debug("Fetch.cancel.reader.cancel exception",t)}))):this.options.debug&&s.debug("Fetch.cancel before reader"))},e}();t.detectFetchSupport=function(){return"undefined"!=typeof Response&&Response.prototype.hasOwnProperty("body")&&"function"==typeof Headers}},859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CrossBrowserHttpTransport=void 0;var n=r(229),o=r(210);t.CrossBrowserHttpTransport=function(e){if(n.detectFetchSupport()){var t={credentials:e.withCredentials?"include":"same-origin"};return n.FetchReadableStreamTransport(t)}return o.XhrTransport({withCredentials:e.withCredentials})}},210:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.stringToArrayBuffer=t.MozChunkedArrayBufferXHR=t.XHR=t.XhrTransport=void 0;var s=r(65),i=r(346),a=r(849);t.XhrTransport=function(e){return function(t){if(a.detectMozXHRSupport())return new d(t,e);if(a.detectXHROverrideMimeTypeSupport())return new u(t,e);throw new Error("This environment's XHR implementation cannot support binary transfer.")}};var u=function(){function e(e,t){this.options=e,this.init=t}return e.prototype.onProgressEvent=function(){this.options.debug&&i.debug("XHR.onProgressEvent.length: ",this.xhr.response.length);var e=this.xhr.response.substr(this.index);this.index=this.xhr.response.length;var t=p(e);this.options.onChunk(t)},e.prototype.onLoadEvent=function(){this.options.debug&&i.debug("XHR.onLoadEvent"),this.options.onEnd()},e.prototype.onStateChange=function(){this.options.debug&&i.debug("XHR.onStateChange",this.xhr.readyState),this.xhr.readyState===XMLHttpRequest.HEADERS_RECEIVED&&this.options.onHeaders(new s.Metadata(this.xhr.getAllResponseHeaders()),this.xhr.status)},e.prototype.sendMessage=function(e){this.xhr.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){var t=this;this.metadata=e;var r=new XMLHttpRequest;this.xhr=r,r.open("POST",this.options.url),this.configureXhr(),this.metadata.forEach((function(e,t){r.setRequestHeader(e,t.join(", "))})),r.withCredentials=Boolean(this.init.withCredentials),r.addEventListener("readystatechange",this.onStateChange.bind(this)),r.addEventListener("progress",this.onProgressEvent.bind(this)),r.addEventListener("loadend",this.onLoadEvent.bind(this)),r.addEventListener("error",(function(e){t.options.debug&&i.debug("XHR.error",e),t.options.onEnd(e.error)}))},e.prototype.configureXhr=function(){this.xhr.responseType="text",this.xhr.overrideMimeType("text/plain; charset=x-user-defined")},e.prototype.cancel=function(){this.options.debug&&i.debug("XHR.abort"),this.xhr.abort()},e}();t.XHR=u;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.configureXhr=function(){this.options.debug&&i.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"),this.xhr.responseType="moz-chunked-arraybuffer"},t.prototype.onProgressEvent=function(){var e=this.xhr.response;this.options.debug&&i.debug("MozXHR.onProgressEvent: ",new Uint8Array(e)),this.options.onChunk(new Uint8Array(e))},t}(u);function c(e,t){var r=e.charCodeAt(t);if(r>=55296&&r<=56319){var n=e.charCodeAt(t+1);n>=56320&&n<=57343&&(r=65536+(r-55296<<10)+(n-56320))}return r}function p(e){for(var t=new Uint8Array(e.length),r=0,n=0;n<e.length;n++){var o=String.prototype.codePointAt?e.codePointAt(n):c(e,n);t[r++]=255&o}return t}t.MozChunkedArrayBufferXHR=d,t.stringToArrayBuffer=p},849:function(e,t){"use strict";var r;function n(){if(void 0!==r)return r;if(XMLHttpRequest){r=new XMLHttpRequest;try{r.open("GET","https://localhost")}catch(e){}}return r}function o(e){var t=n();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.detectXHROverrideMimeTypeSupport=t.detectMozXHRSupport=t.xhrSupportsResponseType=void 0,t.xhrSupportsResponseType=o,t.detectMozXHRSupport=function(){return"undefined"!=typeof XMLHttpRequest&&o("moz-chunked-arraybuffer")},t.detectXHROverrideMimeTypeSupport=function(){return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType")}},540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebsocketTransport=void 0;var n,o=r(346),s=r(617);!function(e){e[e.FINISH_SEND=1]="FINISH_SEND"}(n||(n={}));var i=new Uint8Array([1]);t.WebsocketTransport=function(){return function(e){return function(e){e.debug&&o.debug("websocketRequest",e);var t,r=function(e){if("https://"===e.substr(0,8))return"wss://"+e.substr(8);if("http://"===e.substr(0,7))return"ws://"+e.substr(7);throw new Error("Websocket transport constructed with non-https:// or http:// host.")}(e.url),a=[];function u(e){if(e===n.FINISH_SEND)t.send(i);else{var r=e,o=new Int8Array(r.byteLength+1);o.set(new Uint8Array([0])),o.set(r,1),t.send(o)}}return{sendMessage:function(e){t&&t.readyState!==t.CONNECTING?u(e):a.push(e)},finishSend:function(){t&&t.readyState!==t.CONNECTING?u(n.FINISH_SEND):a.push(n.FINISH_SEND)},start:function(n){(t=new WebSocket(r,["grpc-websockets"])).binaryType="arraybuffer",t.onopen=function(){var r;e.debug&&o.debug("websocketRequest.onopen"),t.send((r="",n.forEach((function(e,t){r+=e+": "+t.join(", ")+"\r\n"})),s.encodeASCII(r))),a.forEach((function(e){u(e)}))},t.onclose=function(t){e.debug&&o.debug("websocketRequest.onclose",t),e.onEnd()},t.onerror=function(t){e.debug&&o.debug("websocketRequest.onerror",t)},t.onmessage=function(t){e.onChunk(new Uint8Array(t.data))}},cancel:function(){e.debug&&o.debug("websocket.abort"),t.close()}}}(e)}}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unary=void 0;var n=r(65),o=r(934);t.unary=function(e,t){if(e.responseStream)throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");if(e.requestStream)throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");var r=null,s=null,i=o.client(e,{host:t.host,transport:t.transport,debug:t.debug});return i.onHeaders((function(e){r=e})),i.onMessage((function(e){s=e})),i.onEnd((function(e,o,i){t.onEnd({status:e,statusMessage:o,headers:r||new n.Metadata,message:s,trailers:i})})),i.start(t.metadata),i.send(t.request),i.finishSend(),{close:function(){i.close()}}}},882:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.frameRequest=void 0,t.frameRequest=function(e){var t=e.serializeBinary(),r=new ArrayBuffer(t.byteLength+5);return new DataView(r,1,4).setUint32(0,t.length,!1),new Uint8Array(r,5).set(t),new Uint8Array(r)}}},t={},function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(607);var e,t}));
},{}],3:[function(require,module,exports){
(function (global,Buffer){(function (){
module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=21)}([function(module,exports){var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.findInternal=function(e,t,o){e instanceof String&&(e=String(e));for(var r=e.length,s=0;s<r;s++){var n=e[s];if(t.call(o,n,s,e))return{i:s,v:n}}return{i:-1,v:void 0}},$jscomp.ASSUME_ES5=!1,$jscomp.ASSUME_NO_NATIVE_MAP=!1,$jscomp.ASSUME_NO_NATIVE_SET=!1,$jscomp.SIMPLE_FROUND_POLYFILL=!1,$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,o){e!=Array.prototype&&e!=Object.prototype&&(e[t]=o.value)},$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(e,t,o,r){if(t){for(o=$jscomp.global,e=e.split("."),r=0;r<e.length-1;r++){var s=e[r];s in o||(o[s]={}),o=o[s]}(t=t(r=o[e=e[e.length-1]]))!=r&&null!=t&&$jscomp.defineProperty(o,e,{configurable:!0,writable:!0,value:t})}},$jscomp.polyfill("Array.prototype.findIndex",(function(e){return e||function(e,t){return $jscomp.findInternal(this,e,t).i}}),"es6","es3"),$jscomp.checkStringArgs=function(e,t,o){if(null==e)throw new TypeError("The 'this' value for String.prototype."+o+" must not be null or undefined");if(t instanceof RegExp)throw new TypeError("First argument to String.prototype."+o+" must not be a regular expression");return e+""},$jscomp.polyfill("String.prototype.endsWith",(function(e){return e||function(e,t){var o=$jscomp.checkStringArgs(this,e,"endsWith");e+="",void 0===t&&(t=o.length),t=Math.max(0,Math.min(0|t,o.length));for(var r=e.length;0<r&&0<t;)if(o[--t]!=e[--r])return!1;return 0>=r}}),"es6","es3"),$jscomp.polyfill("Array.prototype.find",(function(e){return e||function(e,t){return $jscomp.findInternal(this,e,t).v}}),"es6","es3"),$jscomp.polyfill("String.prototype.startsWith",(function(e){return e||function(e,t){var o=$jscomp.checkStringArgs(this,e,"startsWith");e+="";var r=o.length,s=e.length;t=Math.max(0,Math.min(0|t,o.length));for(var n=0;n<s&&t<r;)if(o[t++]!=e[n++])return!1;return n>=s}}),"es6","es3"),$jscomp.polyfill("String.prototype.repeat",(function(e){return e||function(e){var t=$jscomp.checkStringArgs(this,null,"repeat");if(0>e||1342177279<e)throw new RangeError("Invalid count value");e|=0;for(var o="";e;)1&e&&(o+=t),(e>>>=1)&&(t+=t);return o}}),"es6","es3");var COMPILED=!0,goog=goog||{};goog.global=this||self,goog.isDef=function(e){return void 0!==e},goog.isString=function(e){return"string"==typeof e},goog.isBoolean=function(e){return"boolean"==typeof e},goog.isNumber=function(e){return"number"==typeof e},goog.exportPath_=function(e,t,o){e=e.split("."),o=o||goog.global,e[0]in o||void 0===o.execScript||o.execScript("var "+e[0]);for(var r;e.length&&(r=e.shift());)!e.length&&goog.isDef(t)?o[r]=t:o=o[r]&&o[r]!==Object.prototype[r]?o[r]:o[r]={}},goog.define=function(e,t){if(!COMPILED){var o=goog.global.CLOSURE_UNCOMPILED_DEFINES,r=goog.global.CLOSURE_DEFINES;o&&void 0===o.nodeType&&Object.prototype.hasOwnProperty.call(o,e)?t=o[e]:r&&void 0===r.nodeType&&Object.prototype.hasOwnProperty.call(r,e)&&(t=r[e])}return t},goog.FEATURESET_YEAR=2012,goog.DEBUG=!0,goog.LOCALE="en",goog.TRUSTED_SITE=!0,goog.STRICT_MODE_COMPATIBLE=!1,goog.DISALLOW_TEST_ONLY_CODE=COMPILED&&!goog.DEBUG,goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1,goog.provide=function(e){if(goog.isInModuleLoader_())throw Error("goog.provide cannot be used within a module.");if(!COMPILED&&goog.isProvided_(e))throw Error('Namespace "'+e+'" already declared.');goog.constructNamespace_(e)},goog.constructNamespace_=function(e,t){if(!COMPILED){delete goog.implicitNamespaces_[e];for(var o=e;(o=o.substring(0,o.lastIndexOf(".")))&&!goog.getObjectByName(o);)goog.implicitNamespaces_[o]=!0}goog.exportPath_(e,t)},goog.getScriptNonce=function(e){return e&&e!=goog.global?goog.getScriptNonce_(e.document):(null===goog.cspNonce_&&(goog.cspNonce_=goog.getScriptNonce_(goog.global.document)),goog.cspNonce_)},goog.NONCE_PATTERN_=/^[\w+/_-]+[=]{0,2}$/,goog.cspNonce_=null,goog.getScriptNonce_=function(e){return(e=e.querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&goog.NONCE_PATTERN_.test(e)?e:""},goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/,goog.module=function(e){if(!goog.isString(e)||!e||-1==e.search(goog.VALID_MODULE_RE_))throw Error("Invalid module identifier");if(!goog.isInGoogModuleLoader_())throw Error("Module "+e+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");if(goog.moduleLoaderState_.moduleName=e,!COMPILED){if(goog.isProvided_(e))throw Error('Namespace "'+e+'" already declared.');delete goog.implicitNamespaces_[e]}},goog.module.get=function(e){return goog.module.getInternal_(e)},goog.module.getInternal_=function(e){if(!COMPILED){if(e in goog.loadedModules_)return goog.loadedModules_[e].exports;if(!goog.implicitNamespaces_[e])return null!=(e=goog.getObjectByName(e))?e:null}return null},goog.ModuleType={ES6:"es6",GOOG:"goog"},goog.moduleLoaderState_=null,goog.isInModuleLoader_=function(){return goog.isInGoogModuleLoader_()||goog.isInEs6ModuleLoader_()},goog.isInGoogModuleLoader_=function(){return!!goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.GOOG},goog.isInEs6ModuleLoader_=function(){if(goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.ES6)return!0;var e=goog.global.$jscomp;return!!e&&("function"==typeof e.getCurrentModulePath&&!!e.getCurrentModulePath())},goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInGoogModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0},goog.declareModuleId=function(e){if(!COMPILED){if(!goog.isInEs6ModuleLoader_())throw Error("goog.declareModuleId may only be called from within an ES6 module");if(goog.moduleLoaderState_&&goog.moduleLoaderState_.moduleName)throw Error("goog.declareModuleId may only be called once per module.");if(e in goog.loadedModules_)throw Error('Module with namespace "'+e+'" already exists.')}if(goog.moduleLoaderState_)goog.moduleLoaderState_.moduleName=e;else{var t=goog.global.$jscomp;if(!t||"function"!=typeof t.getCurrentModulePath)throw Error('Module with namespace "'+e+'" has been loaded incorrectly.');t=t.require(t.getCurrentModulePath()),goog.loadedModules_[e]={exports:t,type:goog.ModuleType.ES6,moduleId:e}}},goog.setTestOnly=function(e){if(goog.DISALLOW_TEST_ONLY_CODE)throw e=e||"",Error("Importing test-only code into non-debug environment"+(e?": "+e:"."))},goog.forwardDeclare=function(e){},COMPILED||(goog.isProvided_=function(e){return e in goog.loadedModules_||!goog.implicitNamespaces_[e]&&goog.isDefAndNotNull(goog.getObjectByName(e))},goog.implicitNamespaces_={"goog.module":!0}),goog.getObjectByName=function(e,t){e=e.split("."),t=t||goog.global;for(var o=0;o<e.length;o++)if(t=t[e[o]],!goog.isDefAndNotNull(t))return null;return t},goog.globalize=function(e,t){for(var o in t=t||goog.global,e)t[o]=e[o]},goog.addDependency=function(e,t,o,r){!COMPILED&&goog.DEPENDENCIES_ENABLED&&goog.debugLoader_.addDependency(e,t,o,r)},goog.ENABLE_DEBUG_LOADER=!0,goog.logToConsole_=function(e){goog.global.console&&goog.global.console.error(e)},goog.require=function(e){if(!COMPILED){if(goog.ENABLE_DEBUG_LOADER&&goog.debugLoader_.requested(e),goog.isProvided_(e)){if(goog.isInModuleLoader_())return goog.module.getInternal_(e)}else if(goog.ENABLE_DEBUG_LOADER){var t=goog.moduleLoaderState_;goog.moduleLoaderState_=null;try{goog.debugLoader_.load_(e)}finally{goog.moduleLoaderState_=t}}return null}},goog.requireType=function(e){return{}},goog.basePath="",goog.nullFunction=function(){},goog.abstractMethod=function(){throw Error("unimplemented abstract method")},goog.addSingletonGetter=function(e){e.instance_=void 0,e.getInstance=function(){return e.instance_?e.instance_:(goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=e),e.instance_=new e)}},goog.instantiatedSingletons_=[],goog.LOAD_MODULE_USING_EVAL=!0,goog.SEAL_MODULE_EXPORTS=goog.DEBUG,goog.loadedModules_={},goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER,goog.TRANSPILE="detect",goog.ASSUME_ES_MODULES_TRANSPILED=!1,goog.TRANSPILE_TO_LANGUAGE="",goog.TRANSPILER="transpile.js",goog.hasBadLetScoping=null,goog.useSafari10Workaround=function(){if(null==goog.hasBadLetScoping){try{var a=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(e){a=!1}goog.hasBadLetScoping=a}return goog.hasBadLetScoping},goog.workaroundSafari10EvalBug=function(e){return"(function(){"+e+"\n;})();\n"},goog.loadModule=function(e){var t=goog.moduleLoaderState_;try{if(goog.moduleLoaderState_={moduleName:"",declareLegacyNamespace:!1,type:goog.ModuleType.GOOG},goog.isFunction(e))var o=e.call(void 0,{});else{if(!goog.isString(e))throw Error("Invalid module definition");goog.useSafari10Workaround()&&(e=goog.workaroundSafari10EvalBug(e)),o=goog.loadModuleFromSource_.call(void 0,e)}var r=goog.moduleLoaderState_.moduleName;if(!goog.isString(r)||!r)throw Error('Invalid module name "'+r+'"');goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(r,o):goog.SEAL_MODULE_EXPORTS&&Object.seal&&"object"==typeof o&&null!=o&&Object.seal(o),goog.loadedModules_[r]={exports:o,type:goog.ModuleType.GOOG,moduleId:goog.moduleLoaderState_.moduleName}}finally{goog.moduleLoaderState_=t}},goog.loadModuleFromSource_=function(a){return eval(a),{}},goog.normalizePath_=function(e){e=e.split("/");for(var t=0;t<e.length;)"."==e[t]?e.splice(t,1):t&&".."==e[t]&&e[t-1]&&".."!=e[t-1]?e.splice(--t,2):t++;return e.join("/")},goog.loadFileSync_=function(e){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(e);try{var t=new goog.global.XMLHttpRequest;return t.open("get",e,!1),t.send(),0==t.status||200==t.status?t.responseText:null}catch(e){return null}},goog.transpile_=function(e,t,o){var r=goog.global.$jscomp;r||(goog.global.$jscomp=r={});var s=r.transpile;if(!s){var n=goog.basePath+goog.TRANSPILER,i=goog.loadFileSync_(n);if(i){if(function(){(0,eval)(i+"\n//# sourceURL="+n)}.call(goog.global),goog.global.$gwtExport&&goog.global.$gwtExport.$jscomp&&!goog.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(goog.global.$gwtExport));goog.global.$jscomp.transpile=goog.global.$gwtExport.$jscomp.transpile,s=(r=goog.global.$jscomp).transpile}}return s||(s=r.transpile=function(e,t){return goog.logToConsole_(t+" requires transpilation but no transpiler was found."),e}),s(e,t,o)},goog.typeOf=function(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var o=Object.prototype.toString.call(e);if("[object Window]"==o)return"object";if("[object Array]"==o||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==o||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t},goog.isNull=function(e){return null===e},goog.isDefAndNotNull=function(e){return null!=e},goog.isArray=function(e){return"array"==goog.typeOf(e)},goog.isArrayLike=function(e){var t=goog.typeOf(e);return"array"==t||"object"==t&&"number"==typeof e.length},goog.isDateLike=function(e){return goog.isObject(e)&&"function"==typeof e.getFullYear},goog.isFunction=function(e){return"function"==goog.typeOf(e)},goog.isObject=function(e){var t=typeof e;return"object"==t&&null!=e||"function"==t},goog.getUid=function(e){return e[goog.UID_PROPERTY_]||(e[goog.UID_PROPERTY_]=++goog.uidCounter_)},goog.hasUid=function(e){return!!e[goog.UID_PROPERTY_]},goog.removeUid=function(e){null!==e&&"removeAttribute"in e&&e.removeAttribute(goog.UID_PROPERTY_);try{delete e[goog.UID_PROPERTY_]}catch(e){}},goog.UID_PROPERTY_="closure_uid_"+(1e9*Math.random()>>>0),goog.uidCounter_=0,goog.getHashCode=goog.getUid,goog.removeHashCode=goog.removeUid,goog.cloneObject=function(e){var t=goog.typeOf(e);if("object"==t||"array"==t){if("function"==typeof e.clone)return e.clone();for(var o in t="array"==t?[]:{},e)t[o]=goog.cloneObject(e[o]);return t}return e},goog.bindNative_=function(e,t,o){return e.call.apply(e.bind,arguments)},goog.bindJs_=function(e,t,o){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,r),e.apply(t,o)}}return function(){return e.apply(t,arguments)}},goog.bind=function(e,t,o){return Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_,goog.bind.apply(null,arguments)},goog.partial=function(e,t){var o=Array.prototype.slice.call(arguments,1);return function(){var t=o.slice();return t.push.apply(t,arguments),e.apply(this,t)}},goog.mixin=function(e,t){for(var o in t)e[o]=t[o]},goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date},goog.globalEval=function(e){if(goog.global.execScript)goog.global.execScript(e,"JavaScript");else{if(!goog.global.eval)throw Error("goog.globalEval not available");if(null==goog.evalWorksForGlobals_){try{goog.global.eval("var _evalTest_ = 1;")}catch(e){}if(void 0!==goog.global._evalTest_){try{delete goog.global._evalTest_}catch(e){}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1}if(goog.evalWorksForGlobals_)goog.global.eval(e);else{var t=goog.global.document,o=t.createElement("SCRIPT");o.type="text/javascript",o.defer=!1,o.appendChild(t.createTextNode(e)),t.head.appendChild(o),t.head.removeChild(o)}}},goog.evalWorksForGlobals_=null,goog.getCssName=function(e,t){if("."==String(e).charAt(0))throw Error('className passed in goog.getCssName must not start with ".". You passed: '+e);var o=function(e){return goog.cssNameMapping_[e]||e},r=function(e){e=e.split("-");for(var t=[],r=0;r<e.length;r++)t.push(o(e[r]));return t.join("-")};return r=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?o:r:function(e){return e},e=t?e+"-"+r(t):r(e),goog.global.CLOSURE_CSS_NAME_MAP_FN?goog.global.CLOSURE_CSS_NAME_MAP_FN(e):e},goog.setCssNameMapping=function(e,t){goog.cssNameMapping_=e,goog.cssNameMappingStyle_=t},!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING),goog.getMsg=function(e,t,o){return o&&o.html&&(e=e.replace(/</g,"&lt;")),t&&(e=e.replace(/\{\$([^}]+)}/g,(function(e,o){return null!=t&&o in t?t[o]:e}))),e},goog.getMsgWithFallback=function(e,t){return e},goog.exportSymbol=function(e,t,o){goog.exportPath_(e,t,o)},goog.exportProperty=function(e,t,o){e[t]=o},goog.inherits=function(e,t){function o(){}o.prototype=t.prototype,e.superClass_=t.prototype,e.prototype=new o,e.prototype.constructor=e,e.base=function(e,o,r){for(var s=Array(arguments.length-2),n=2;n<arguments.length;n++)s[n-2]=arguments[n];return t.prototype[o].apply(e,s)}},goog.base=function(e,t,o){var r=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!r)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(void 0!==r.superClass_){for(var s=Array(arguments.length-1),n=1;n<arguments.length;n++)s[n-1]=arguments[n];return r.superClass_.constructor.apply(e,s)}if("string"!=typeof t&&"symbol"!=typeof t)throw Error("method names provided to goog.base must be a string or a symbol");for(s=Array(arguments.length-2),n=2;n<arguments.length;n++)s[n-2]=arguments[n];n=!1;for(var i=e.constructor.prototype;i;i=Object.getPrototypeOf(i))if(i[t]===r)n=!0;else if(n)return i[t].apply(e,s);if(e[t]===r)return e.constructor.prototype[t].apply(e,s);throw Error("goog.base called from a method of one name to a method of a different name")},goog.scope=function(e){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a module.");e.call(goog.global)},COMPILED||(goog.global.COMPILED=COMPILED),goog.defineClass=function(e,t){var o=t.constructor,r=t.statics;return o&&o!=Object.prototype.constructor||(o=function(){throw Error("cannot instantiate an interface (no constructor defined).")}),o=goog.defineClass.createSealingConstructor_(o,e),e&&goog.inherits(o,e),delete t.constructor,delete t.statics,goog.defineClass.applyProperties_(o.prototype,t),null!=r&&(r instanceof Function?r(o):goog.defineClass.applyProperties_(o,r)),o},goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG,goog.defineClass.createSealingConstructor_=function(e,t){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return e;var o=!goog.defineClass.isUnsealable_(t),r=function(){var t=e.apply(this,arguments)||this;return t[goog.UID_PROPERTY_]=t[goog.UID_PROPERTY_],this.constructor===r&&o&&Object.seal instanceof Function&&Object.seal(t),t};return r},goog.defineClass.isUnsealable_=function(e){return e&&e.prototype&&e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]},goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.defineClass.applyProperties_=function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);for(var r=0;r<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;r++)o=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r],Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},goog.tagUnsealableClass=function(e){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)},goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable",!COMPILED&&goog.DEPENDENCIES_ENABLED&&(goog.inHtmlDocument_=function(){var e=goog.global.document;return null!=e&&"write"in e},goog.isDocumentLoading_=function(){var e=goog.global.document;return e.attachEvent?"complete"!=e.readyState:"loading"==e.readyState},goog.findBasePath_=function(){if(goog.isDef(goog.global.CLOSURE_BASE_PATH)&&goog.isString(goog.global.CLOSURE_BASE_PATH))goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_()){var e=goog.global.document,t=e.currentScript;for(t=(e=t?[t]:e.getElementsByTagName("SCRIPT")).length-1;0<=t;--t){var o=e[t].src,r=o.lastIndexOf("?");if(r=-1==r?o.length:r,"base.js"==o.substr(r-7,7)){goog.basePath=o.substr(0,r-7);break}}}},goog.findBasePath_(),goog.Transpiler=function(){this.requiresTranspilation_=null,this.transpilationTarget_=goog.TRANSPILE_TO_LANGUAGE},goog.Transpiler.prototype.createRequiresTranspilation_=function(){function a(t,o){e?d[t]=!0:o()?(c=t,d[t]=!1):e=d[t]=!0}function b(a){try{return!!eval(a)}catch(e){return!1}}var c="es3",d={es3:!1},e=!1,f=goog.global.navigator&&goog.global.navigator.userAgent?goog.global.navigator.userAgent:"";return a("es5",(function(){return b("[1,].length==1")})),a("es6",(function(){return!f.match(/Edge\/(\d+)(\.\d)*/i)&&b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')})),a("es7",(function(){return b("2 ** 2 == 4")})),a("es8",(function(){return b("async () => 1, true")})),a("es9",(function(){return b("({...rest} = {}), true")})),a("es_next",(function(){return!1})),{target:c,map:d}},goog.Transpiler.prototype.needsTranspile=function(e,t){if("always"==goog.TRANSPILE)return!0;if("never"==goog.TRANSPILE)return!1;if(!this.requiresTranspilation_){var o=this.createRequiresTranspilation_();this.requiresTranspilation_=o.map,this.transpilationTarget_=this.transpilationTarget_||o.target}if(e in this.requiresTranspilation_)return!!this.requiresTranspilation_[e]||!(!goog.inHtmlDocument_()||"es6"!=t||"noModule"in goog.global.document.createElement("script"));throw Error("Unknown language mode: "+e)},goog.Transpiler.prototype.transpile=function(e,t){return goog.transpile_(e,t,this.transpilationTarget_)},goog.transpiler_=new goog.Transpiler,goog.protectScriptTag_=function(e){return e.replace(/<\/(SCRIPT)/gi,"\\x3c/$1")},goog.DebugLoader_=function(){this.dependencies_={},this.idToPath_={},this.written_={},this.loadingDeps_=[],this.depsToLoad_=[],this.paused_=!1,this.factory_=new goog.DependencyFactory(goog.transpiler_),this.deferredCallbacks_={},this.deferredQueue_=[]},goog.DebugLoader_.prototype.bootstrap=function(e,t){function o(){r&&(goog.global.setTimeout(r,0),r=null)}var r=t;if(e.length){t=[];for(var s=0;s<e.length;s++){var n=this.getPathFromDeps_(e[s]);if(!n)throw Error("Unregonized namespace: "+e[s]);t.push(this.dependencies_[n])}n=goog.require;var i=0;for(s=0;s<e.length;s++)n(e[s]),t[s].onLoad((function(){++i==e.length&&o()}))}else o()},goog.DebugLoader_.prototype.loadClosureDeps=function(){this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath+"deps.js"),"deps.js",[],[],{},!1)),this.loadDeps_()},goog.DebugLoader_.prototype.requested=function(e,t){(e=this.getPathFromDeps_(e))&&(t||this.areDepsLoaded_(this.dependencies_[e].requires))&&(t=this.deferredCallbacks_[e])&&(delete this.deferredCallbacks_[e],t())},goog.DebugLoader_.prototype.setDependencyFactory=function(e){this.factory_=e},goog.DebugLoader_.prototype.load_=function(e){if(!this.getPathFromDeps_(e))throw e="goog.require could not find: "+e,goog.logToConsole_(e),Error(e);var t=this,o=[],r=function(e){var s=t.getPathFromDeps_(e);if(!s)throw Error("Bad dependency path or symbol: "+e);if(!t.written_[s]){for(t.written_[s]=!0,e=t.dependencies_[s],s=0;s<e.requires.length;s++)goog.isProvided_(e.requires[s])||r(e.requires[s]);o.push(e)}};r(e),e=!!this.depsToLoad_.length,this.depsToLoad_=this.depsToLoad_.concat(o),this.paused_||e||this.loadDeps_()},goog.DebugLoader_.prototype.loadDeps_=function(){for(var e=this,t=this.paused_;this.depsToLoad_.length&&!t;)!function(){var o=!1,r=e.depsToLoad_.shift(),s=!1;e.loading_(r);var n={pause:function(){if(o)throw Error("Cannot call pause after the call to load.");t=!0},resume:function(){o?e.resume_():t=!1},loaded:function(){if(s)throw Error("Double call to loaded.");s=!0,e.loaded_(r)},pending:function(){for(var t=[],o=0;o<e.loadingDeps_.length;o++)t.push(e.loadingDeps_[o]);return t},setModuleState:function(e){goog.moduleLoaderState_={type:e,moduleName:"",declareLegacyNamespace:!1}},registerEs6ModuleExports:function(e,t,o){o&&(goog.loadedModules_[o]={exports:t,type:goog.ModuleType.ES6,moduleId:o||""})},registerGoogModuleExports:function(e,t){goog.loadedModules_[e]={exports:t,type:goog.ModuleType.GOOG,moduleId:e}},clearModuleState:function(){goog.moduleLoaderState_=null},defer:function(t){if(o)throw Error("Cannot register with defer after the call to load.");e.defer_(r,t)},areDepsLoaded:function(){return e.areDepsLoaded_(r.requires)}};try{r.load(n)}finally{o=!0}}();t&&this.pause_()},goog.DebugLoader_.prototype.pause_=function(){this.paused_=!0},goog.DebugLoader_.prototype.resume_=function(){this.paused_&&(this.paused_=!1,this.loadDeps_())},goog.DebugLoader_.prototype.loading_=function(e){this.loadingDeps_.push(e)},goog.DebugLoader_.prototype.loaded_=function(e){for(var t=0;t<this.loadingDeps_.length;t++)if(this.loadingDeps_[t]==e){this.loadingDeps_.splice(t,1);break}for(t=0;t<this.deferredQueue_.length;t++)if(this.deferredQueue_[t]==e.path){this.deferredQueue_.splice(t,1);break}if(this.loadingDeps_.length==this.deferredQueue_.length&&!this.depsToLoad_.length)for(;this.deferredQueue_.length;)this.requested(this.deferredQueue_.shift(),!0);e.loaded()},goog.DebugLoader_.prototype.areDepsLoaded_=function(e){for(var t=0;t<e.length;t++){var o=this.getPathFromDeps_(e[t]);if(!o||!(o in this.deferredCallbacks_)&&!goog.isProvided_(e[t]))return!1}return!0},goog.DebugLoader_.prototype.getPathFromDeps_=function(e){return e in this.idToPath_?this.idToPath_[e]:e in this.dependencies_?e:null},goog.DebugLoader_.prototype.defer_=function(e,t){this.deferredCallbacks_[e.path]=t,this.deferredQueue_.push(e.path)},goog.LoadController=function(){},goog.LoadController.prototype.pause=function(){},goog.LoadController.prototype.resume=function(){},goog.LoadController.prototype.loaded=function(){},goog.LoadController.prototype.pending=function(){},goog.LoadController.prototype.registerEs6ModuleExports=function(e,t,o){},goog.LoadController.prototype.setModuleState=function(e){},goog.LoadController.prototype.clearModuleState=function(){},goog.LoadController.prototype.defer=function(e){},goog.LoadController.prototype.areDepsLoaded=function(){},goog.Dependency=function(e,t,o,r,s){this.path=e,this.relativePath=t,this.provides=o,this.requires=r,this.loadFlags=s,this.loaded_=!1,this.loadCallbacks_=[]},goog.Dependency.prototype.getPathName=function(){var e=this.path,t=e.indexOf("://");return 0<=t&&(0<=(t=(e=e.substring(t+3)).indexOf("/"))&&(e=e.substring(t+1))),e},goog.Dependency.prototype.onLoad=function(e){this.loaded_?e():this.loadCallbacks_.push(e)},goog.Dependency.prototype.loaded=function(){this.loaded_=!0;var e=this.loadCallbacks_;this.loadCallbacks_=[];for(var t=0;t<e.length;t++)e[t]()},goog.Dependency.defer_=!1,goog.Dependency.callbackMap_={},goog.Dependency.registerCallback_=function(e){var t=Math.random().toString(32);return goog.Dependency.callbackMap_[t]=e,t},goog.Dependency.unregisterCallback_=function(e){delete goog.Dependency.callbackMap_[e]},goog.Dependency.callback_=function(e,t){if(!(e in goog.Dependency.callbackMap_))throw Error("Callback key "+e+" does not exist (was base.js loaded more than once?).");for(var o=goog.Dependency.callbackMap_[e],r=[],s=1;s<arguments.length;s++)r.push(arguments[s]);o.apply(void 0,r)},goog.Dependency.prototype.load=function(e){if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?e.loaded():e.pause();else if(goog.inHtmlDocument_()){var t=goog.global.document;if("complete"==t.readyState&&!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING){if(/\bdeps.js$/.test(this.path))return void e.loaded();throw Error('Cannot write "'+this.path+'" after document load')}if(!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING&&goog.isDocumentLoading_()){var o=goog.Dependency.registerCallback_((function(t){goog.DebugLoader_.IS_OLD_IE_&&"complete"!=t.readyState||(goog.Dependency.unregisterCallback_(o),e.loaded())})),r=!goog.DebugLoader_.IS_OLD_IE_&&goog.getScriptNonce()?' nonce="'+goog.getScriptNonce()+'"':"";r='<script src="'+this.path+'" '+(goog.DebugLoader_.IS_OLD_IE_?"onreadystatechange":"onload")+"=\"goog.Dependency.callback_('"+o+'\', this)" type="text/javascript" '+(goog.Dependency.defer_?"defer":"")+r+"><\/script>",t.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(r):r)}else{var s=t.createElement("script");s.defer=goog.Dependency.defer_,s.async=!1,s.type="text/javascript",(r=goog.getScriptNonce())&&s.setAttribute("nonce",r),goog.DebugLoader_.IS_OLD_IE_?(e.pause(),s.onreadystatechange=function(){"loaded"!=s.readyState&&"complete"!=s.readyState||(e.loaded(),e.resume())}):s.onload=function(){s.onload=null,e.loaded()},s.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path):this.path,t.head.appendChild(s)}}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),"deps.js"==this.relativePath?(goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."),e.loaded()):e.pause()},goog.Es6ModuleDependency=function(e,t,o,r,s){goog.Dependency.call(this,e,t,o,r,s)},goog.inherits(goog.Es6ModuleDependency,goog.Dependency),goog.Es6ModuleDependency.prototype.load=function(e){if(goog.global.CLOSURE_IMPORT_SCRIPT)goog.global.CLOSURE_IMPORT_SCRIPT(this.path)?e.loaded():e.pause();else if(goog.inHtmlDocument_()){var t=goog.global.document,o=this;if(goog.isDocumentLoading_()){var r=function(e,o){e=o?'<script type="module" crossorigin>'+o+"<\/script>":'<script type="module" crossorigin src="'+e+'"><\/script>',t.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(e):e)};goog.Dependency.defer_=!0}else r=function(e,o){var r=t.createElement("script");r.defer=!0,r.async=!1,r.type="module",r.setAttribute("crossorigin",!0);var s=goog.getScriptNonce();s&&r.setAttribute("nonce",s),o?r.textContent=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScript(o):o:r.src=goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createScriptURL(e):e,t.head.appendChild(r)};var s=goog.Dependency.registerCallback_((function(){goog.Dependency.unregisterCallback_(s),e.setModuleState(goog.ModuleType.ES6)}));r(void 0,'goog.Dependency.callback_("'+s+'")'),r(this.path,void 0);var n=goog.Dependency.registerCallback_((function(t){goog.Dependency.unregisterCallback_(n),e.registerEs6ModuleExports(o.path,t,goog.moduleLoaderState_.moduleName)}));r(void 0,'import * as m from "'+this.path+'"; goog.Dependency.callback_("'+n+'", m)');var i=goog.Dependency.registerCallback_((function(){goog.Dependency.unregisterCallback_(i),e.clearModuleState(),e.loaded()}));r(void 0,'goog.Dependency.callback_("'+i+'")')}else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."),e.pause()},goog.TransformedDependency=function(e,t,o,r,s){goog.Dependency.call(this,e,t,o,r,s),this.contents_=null,this.lazyFetch_=!goog.inHtmlDocument_()||!("noModule"in goog.global.document.createElement("script"))},goog.inherits(goog.TransformedDependency,goog.Dependency),goog.TransformedDependency.prototype.load=function(e){function t(){r.contents_=goog.loadFileSync_(r.path),r.contents_&&(r.contents_=r.transform(r.contents_),r.contents_&&(r.contents_+="\n//# sourceURL="+r.path))}function o(){if(r.lazyFetch_&&t(),r.contents_){s&&e.setModuleState(goog.ModuleType.ES6);try{var o=r.contents_;if(r.contents_=null,goog.globalEval(o),s)var n=goog.moduleLoaderState_.moduleName}finally{s&&e.clearModuleState()}s&&goog.global.$jscomp.require.ensure([r.getPathName()],(function(){e.registerEs6ModuleExports(r.path,goog.global.$jscomp.require(r.getPathName()),n)})),e.loaded()}}var r=this;if(goog.global.CLOSURE_IMPORT_SCRIPT)t(),this.contents_&&goog.global.CLOSURE_IMPORT_SCRIPT("",this.contents_)?(this.contents_=null,e.loaded()):e.pause();else{var s=this.loadFlags.module==goog.ModuleType.ES6;this.lazyFetch_||t();var n=1<e.pending().length,i=n&&goog.DebugLoader_.IS_OLD_IE_;if(n=goog.Dependency.defer_&&(n||goog.isDocumentLoading_()),i||n)e.defer((function(){o()}));else{var a=goog.global.document;if(i=goog.inHtmlDocument_()&&"ActiveXObject"in goog.global,s&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()&&!i){goog.Dependency.defer_=!0,e.pause();var g=a.onreadystatechange;a.onreadystatechange=function(){"interactive"==a.readyState&&(a.onreadystatechange=g,o(),e.resume()),goog.isFunction(g)&&g.apply(void 0,arguments)}}else!goog.DebugLoader_.IS_OLD_IE_&&goog.inHtmlDocument_()&&goog.isDocumentLoading_()?function(){var e=goog.global.document,t=goog.Dependency.registerCallback_((function(){goog.Dependency.unregisterCallback_(t),o()})),r='<script type="text/javascript">'+goog.protectScriptTag_('goog.Dependency.callback_("'+t+'");')+"<\/script>";e.write(goog.TRUSTED_TYPES_POLICY_?goog.TRUSTED_TYPES_POLICY_.createHTML(r):r)}():o()}}},goog.TransformedDependency.prototype.transform=function(e){},goog.TranspiledDependency=function(e,t,o,r,s,n){goog.TransformedDependency.call(this,e,t,o,r,s),this.transpiler=n},goog.inherits(goog.TranspiledDependency,goog.TransformedDependency),goog.TranspiledDependency.prototype.transform=function(e){return this.transpiler.transpile(e,this.getPathName())},goog.PreTranspiledEs6ModuleDependency=function(e,t,o,r,s){goog.TransformedDependency.call(this,e,t,o,r,s)},goog.inherits(goog.PreTranspiledEs6ModuleDependency,goog.TransformedDependency),goog.PreTranspiledEs6ModuleDependency.prototype.transform=function(e){return e},goog.GoogModuleDependency=function(e,t,o,r,s,n,i){goog.TransformedDependency.call(this,e,t,o,r,s),this.needsTranspile_=n,this.transpiler_=i},goog.inherits(goog.GoogModuleDependency,goog.TransformedDependency),goog.GoogModuleDependency.prototype.transform=function(e){return this.needsTranspile_&&(e=this.transpiler_.transpile(e,this.getPathName())),goog.LOAD_MODULE_USING_EVAL&&goog.isDef(goog.global.JSON)?"goog.loadModule("+goog.global.JSON.stringify(e+"\n//# sourceURL="+this.path+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+e+"\n;return exports});\n//# sourceURL="+this.path+"\n"},goog.DebugLoader_.IS_OLD_IE_=!(goog.global.atob||!goog.global.document||!goog.global.document.all),goog.DebugLoader_.prototype.addDependency=function(e,t,o,r){t=t||[],e=e.replace(/\\/g,"/");var s=goog.normalizePath_(goog.basePath+e);for(r&&"boolean"!=typeof r||(r=r?{module:goog.ModuleType.GOOG}:{}),o=this.factory_.createDependency(s,e,t,o,r,goog.transpiler_.needsTranspile(r.lang||"es3",r.module)),this.dependencies_[s]=o,o=0;o<t.length;o++)this.idToPath_[t[o]]=s;this.idToPath_[e]=s},goog.DependencyFactory=function(e){this.transpiler=e},goog.DependencyFactory.prototype.createDependency=function(e,t,o,r,s,n){return s.module==goog.ModuleType.GOOG?new goog.GoogModuleDependency(e,t,o,r,s,n,this.transpiler):n?new goog.TranspiledDependency(e,t,o,r,s,this.transpiler):s.module==goog.ModuleType.ES6?"never"==goog.TRANSPILE&&goog.ASSUME_ES_MODULES_TRANSPILED?new goog.PreTranspiledEs6ModuleDependency(e,t,o,r,s):new goog.Es6ModuleDependency(e,t,o,r,s):new goog.Dependency(e,t,o,r,s)},goog.debugLoader_=new goog.DebugLoader_,goog.loadClosureDeps=function(){goog.debugLoader_.loadClosureDeps()},goog.setDependencyFactory=function(e){goog.debugLoader_.setDependencyFactory(e)},goog.global.CLOSURE_NO_DEPS||goog.debugLoader_.loadClosureDeps(),goog.bootstrap=function(e,t){goog.debugLoader_.bootstrap(e,t)}),goog.TRUSTED_TYPES_POLICY_NAME="",goog.identity_=function(e){return e},goog.createTrustedTypesPolicy=function(e){var t=null;if("undefined"==typeof TrustedTypes||!TrustedTypes.createPolicy)return t;try{t=TrustedTypes.createPolicy(e,{createHTML:goog.identity_,createScript:goog.identity_,createScriptURL:goog.identity_,createURL:goog.identity_})}catch(e){goog.logToConsole_(e.message)}return t},goog.TRUSTED_TYPES_POLICY_=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#base"):null;var jspb={BinaryConstants:{},ConstBinaryMessage:function(){},BinaryMessage:function(){}};jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31},jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5},jspb.BinaryConstants.FieldTypeToWireType=function(e){var t=jspb.BinaryConstants.FieldType,o=jspb.BinaryConstants.WireType;switch(e){case t.INT32:case t.INT64:case t.UINT32:case t.UINT64:case t.SINT32:case t.SINT64:case t.BOOL:case t.ENUM:case t.VHASH64:return o.VARINT;case t.DOUBLE:case t.FIXED64:case t.SFIXED64:case t.FHASH64:return o.FIXED64;case t.STRING:case t.MESSAGE:case t.BYTES:return o.DELIMITED;case t.FLOAT:case t.FIXED32:case t.SFIXED32:return o.FIXED32;default:return o.INVALID}},jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1,jspb.BinaryConstants.FLOAT32_EPS=1401298464324817e-60,jspb.BinaryConstants.FLOAT32_MIN=11754943508222875e-54,jspb.BinaryConstants.FLOAT32_MAX=34028234663852886e22,jspb.BinaryConstants.FLOAT64_EPS=5e-324,jspb.BinaryConstants.FLOAT64_MIN=22250738585072014e-324,jspb.BinaryConstants.FLOAT64_MAX=17976931348623157e292,jspb.BinaryConstants.TWO_TO_20=1048576,jspb.BinaryConstants.TWO_TO_23=8388608,jspb.BinaryConstants.TWO_TO_31=2147483648,jspb.BinaryConstants.TWO_TO_32=4294967296,jspb.BinaryConstants.TWO_TO_52=4503599627370496,jspb.BinaryConstants.TWO_TO_63=0x8000000000000000,jspb.BinaryConstants.TWO_TO_64=0x10000000000000000,jspb.BinaryConstants.ZERO_HASH="\0\0\0\0\0\0\0\0",goog.dom={},goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12},goog.debug={},goog.debug.Error=function(e){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e)),this.reportErrorToServer=!0},goog.inherits(goog.debug.Error,Error),goog.debug.Error.prototype.name="CustomError",goog.asserts={},goog.asserts.ENABLE_ASSERTS=goog.DEBUG,goog.asserts.AssertionError=function(e,t){goog.debug.Error.call(this,goog.asserts.subs_(e,t)),this.messagePattern=e},goog.inherits(goog.asserts.AssertionError,goog.debug.Error),goog.asserts.AssertionError.prototype.name="AssertionError",goog.asserts.DEFAULT_ERROR_HANDLER=function(e){throw e},goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER,goog.asserts.subs_=function(e,t){for(var o="",r=(e=e.split("%s")).length-1,s=0;s<r;s++)o+=e[s]+(s<t.length?t[s]:"%s");return o+e[r]},goog.asserts.doAssertFailure_=function(e,t,o,r){var s="Assertion failed";if(o){s+=": "+o;var n=r}else e&&(s+=": "+e,n=t);e=new goog.asserts.AssertionError(""+s,n||[]),goog.asserts.errorHandler_(e)},goog.asserts.setErrorHandler=function(e){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=e)},goog.asserts.assert=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&!e&&goog.asserts.doAssertFailure_("",null,t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertExists=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&null==e&&goog.asserts.doAssertFailure_("Expected to exist: %s.",[e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.fail=function(e,t){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1)))},goog.asserts.assertNumber=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(e)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertString=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&!goog.isString(e)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertFunction=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(e)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertObject=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&!goog.isObject(e)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertArray=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&!goog.isArray(e)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertBoolean=function(e,t,o){return goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(e)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertElement=function(e,t,o){return!goog.asserts.ENABLE_ASSERTS||goog.isObject(e)&&e.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(e),e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertInstanceof=function(e,t,o,r){return!goog.asserts.ENABLE_ASSERTS||e instanceof t||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(t),goog.asserts.getType_(e)],o,Array.prototype.slice.call(arguments,3)),e},goog.asserts.assertFinite=function(e,t,o){return!goog.asserts.ENABLE_ASSERTS||"number"==typeof e&&isFinite(e)||goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.",[e],t,Array.prototype.slice.call(arguments,2)),e},goog.asserts.assertObjectPrototypeIsIntact=function(){for(var e in Object.prototype)goog.asserts.fail(e+" should not be enumerable in Object.prototype.")},goog.asserts.getType_=function(e){return e instanceof Function?e.displayName||e.name||"unknown type name":e instanceof Object?e.constructor.displayName||e.constructor.name||Object.prototype.toString.call(e):null===e?"null":typeof e},goog.array={},goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE,goog.array.ASSUME_NATIVE_FUNCTIONS=2012<goog.FEATURESET_YEAR,goog.array.peek=function(e){return e[e.length-1]},goog.array.last=goog.array.peek,goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(e,t,o){return goog.asserts.assert(null!=e.length),Array.prototype.indexOf.call(e,t,o)}:function(e,t,o){if(o=null==o?0:0>o?Math.max(0,e.length+o):o,goog.isString(e))return goog.isString(t)&&1==t.length?e.indexOf(t,o):-1;for(;o<e.length;o++)if(o in e&&e[o]===t)return o;return-1},goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(e,t,o){return goog.asserts.assert(null!=e.length),Array.prototype.lastIndexOf.call(e,t,null==o?e.length-1:o)}:function(e,t,o){if(0>(o=null==o?e.length-1:o)&&(o=Math.max(0,e.length+o)),goog.isString(e))return goog.isString(t)&&1==t.length?e.lastIndexOf(t,o):-1;for(;0<=o;o--)if(o in e&&e[o]===t)return o;return-1},goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(e,t,o){goog.asserts.assert(null!=e.length),Array.prototype.forEach.call(e,t,o)}:function(e,t,o){for(var r=e.length,s=goog.isString(e)?e.split(""):e,n=0;n<r;n++)n in s&&t.call(o,s[n],n,e)},goog.array.forEachRight=function(e,t,o){var r=e.length,s=goog.isString(e)?e.split(""):e;for(--r;0<=r;--r)r in s&&t.call(o,s[r],r,e)},goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(e,t,o){return goog.asserts.assert(null!=e.length),Array.prototype.filter.call(e,t,o)}:function(e,t,o){for(var r=e.length,s=[],n=0,i=goog.isString(e)?e.split(""):e,a=0;a<r;a++)if(a in i){var g=i[a];t.call(o,g,a,e)&&(s[n++]=g)}return s},goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(e,t,o){return goog.asserts.assert(null!=e.length),Array.prototype.map.call(e,t,o)}:function(e,t,o){for(var r=e.length,s=Array(r),n=goog.isString(e)?e.split(""):e,i=0;i<r;i++)i in n&&(s[i]=t.call(o,n[i],i,e));return s},goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(e,t,o,r){return goog.asserts.assert(null!=e.length),r&&(t=goog.bind(t,r)),Array.prototype.reduce.call(e,t,o)}:function(e,t,o,r){var s=o;return goog.array.forEach(e,(function(o,n){s=t.call(r,s,o,n,e)})),s},goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(e,t,o,r){return goog.asserts.assert(null!=e.length),goog.asserts.assert(null!=t),r&&(t=goog.bind(t,r)),Array.prototype.reduceRight.call(e,t,o)}:function(e,t,o,r){var s=o;return goog.array.forEachRight(e,(function(o,n){s=t.call(r,s,o,n,e)})),s},goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(e,t,o){return goog.asserts.assert(null!=e.length),Array.prototype.some.call(e,t,o)}:function(e,t,o){for(var r=e.length,s=goog.isString(e)?e.split(""):e,n=0;n<r;n++)if(n in s&&t.call(o,s[n],n,e))return!0;return!1},goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(e,t,o){return goog.asserts.assert(null!=e.length),Array.prototype.every.call(e,t,o)}:function(e,t,o){for(var r=e.length,s=goog.isString(e)?e.split(""):e,n=0;n<r;n++)if(n in s&&!t.call(o,s[n],n,e))return!1;return!0},goog.array.count=function(e,t,o){var r=0;return goog.array.forEach(e,(function(e,s,n){t.call(o,e,s,n)&&++r}),o),r},goog.array.find=function(e,t,o){return 0>(t=goog.array.findIndex(e,t,o))?null:goog.isString(e)?e.charAt(t):e[t]},goog.array.findIndex=function(e,t,o){for(var r=e.length,s=goog.isString(e)?e.split(""):e,n=0;n<r;n++)if(n in s&&t.call(o,s[n],n,e))return n;return-1},goog.array.findRight=function(e,t,o){return 0>(t=goog.array.findIndexRight(e,t,o))?null:goog.isString(e)?e.charAt(t):e[t]},goog.array.findIndexRight=function(e,t,o){var r=e.length,s=goog.isString(e)?e.split(""):e;for(--r;0<=r;r--)if(r in s&&t.call(o,s[r],r,e))return r;return-1},goog.array.contains=function(e,t){return 0<=goog.array.indexOf(e,t)},goog.array.isEmpty=function(e){return 0==e.length},goog.array.clear=function(e){if(!goog.isArray(e))for(var t=e.length-1;0<=t;t--)delete e[t];e.length=0},goog.array.insert=function(e,t){goog.array.contains(e,t)||e.push(t)},goog.array.insertAt=function(e,t,o){goog.array.splice(e,o,0,t)},goog.array.insertArrayAt=function(e,t,o){goog.partial(goog.array.splice,e,o,0).apply(null,t)},goog.array.insertBefore=function(e,t,o){var r;2==arguments.length||0>(r=goog.array.indexOf(e,o))?e.push(t):goog.array.insertAt(e,t,r)},goog.array.remove=function(e,t){var o;return(o=0<=(t=goog.array.indexOf(e,t)))&&goog.array.removeAt(e,t),o},goog.array.removeLast=function(e,t){return 0<=(t=goog.array.lastIndexOf(e,t))&&(goog.array.removeAt(e,t),!0)},goog.array.removeAt=function(e,t){return goog.asserts.assert(null!=e.length),1==Array.prototype.splice.call(e,t,1).length},goog.array.removeIf=function(e,t,o){return 0<=(t=goog.array.findIndex(e,t,o))&&(goog.array.removeAt(e,t),!0)},goog.array.removeAllIf=function(e,t,o){var r=0;return goog.array.forEachRight(e,(function(s,n){t.call(o,s,n,e)&&goog.array.removeAt(e,n)&&r++})),r},goog.array.concat=function(e){return Array.prototype.concat.apply([],arguments)},goog.array.join=function(e){return Array.prototype.concat.apply([],arguments)},goog.array.toArray=function(e){var t=e.length;if(0<t){for(var o=Array(t),r=0;r<t;r++)o[r]=e[r];return o}return[]},goog.array.clone=goog.array.toArray,goog.array.extend=function(e,t){for(var o=1;o<arguments.length;o++){var r=arguments[o];if(goog.isArrayLike(r)){var s=e.length||0,n=r.length||0;e.length=s+n;for(var i=0;i<n;i++)e[s+i]=r[i]}else e.push(r)}},goog.array.splice=function(e,t,o,r){return goog.asserts.assert(null!=e.length),Array.prototype.splice.apply(e,goog.array.slice(arguments,1))},goog.array.slice=function(e,t,o){return goog.asserts.assert(null!=e.length),2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,o)},goog.array.removeDuplicates=function(e,t,o){t=t||e;var r=function(e){return goog.isObject(e)?"o"+goog.getUid(e):(typeof e).charAt(0)+e};o=o||r,r={};for(var s=0,n=0;n<e.length;){var i=e[n++],a=o(i);Object.prototype.hasOwnProperty.call(r,a)||(r[a]=!0,t[s++]=i)}t.length=s},goog.array.binarySearch=function(e,t,o){return goog.array.binarySearch_(e,o||goog.array.defaultCompare,!1,t)},goog.array.binarySelect=function(e,t,o){return goog.array.binarySearch_(e,t,!0,void 0,o)},goog.array.binarySearch_=function(e,t,o,r,s){for(var n,i=0,a=e.length;i<a;){var g=i+a>>1,l=o?t.call(s,e[g],g,e):t(r,e[g]);0<l?i=g+1:(a=g,n=!l)}return n?i:~i},goog.array.sort=function(e,t){e.sort(t||goog.array.defaultCompare)},goog.array.stableSort=function(e,t){for(var o=Array(e.length),r=0;r<e.length;r++)o[r]={index:r,value:e[r]};var s=t||goog.array.defaultCompare;for(goog.array.sort(o,(function(e,t){return s(e.value,t.value)||e.index-t.index})),r=0;r<e.length;r++)e[r]=o[r].value},goog.array.sortByKey=function(e,t,o){var r=o||goog.array.defaultCompare;goog.array.sort(e,(function(e,o){return r(t(e),t(o))}))},goog.array.sortObjectsByKey=function(e,t,o){goog.array.sortByKey(e,(function(e){return e[t]}),o)},goog.array.isSorted=function(e,t,o){t=t||goog.array.defaultCompare;for(var r=1;r<e.length;r++){var s=t(e[r-1],e[r]);if(0<s||0==s&&o)return!1}return!0},goog.array.equals=function(e,t,o){if(!goog.isArrayLike(e)||!goog.isArrayLike(t)||e.length!=t.length)return!1;var r=e.length;o=o||goog.array.defaultCompareEquality;for(var s=0;s<r;s++)if(!o(e[s],t[s]))return!1;return!0},goog.array.compare3=function(e,t,o){o=o||goog.array.defaultCompare;for(var r=Math.min(e.length,t.length),s=0;s<r;s++){var n=o(e[s],t[s]);if(0!=n)return n}return goog.array.defaultCompare(e.length,t.length)},goog.array.defaultCompare=function(e,t){return e>t?1:e<t?-1:0},goog.array.inverseDefaultCompare=function(e,t){return-goog.array.defaultCompare(e,t)},goog.array.defaultCompareEquality=function(e,t){return e===t},goog.array.binaryInsert=function(e,t,o){return 0>(o=goog.array.binarySearch(e,t,o))&&(goog.array.insertAt(e,t,-(o+1)),!0)},goog.array.binaryRemove=function(e,t,o){return 0<=(t=goog.array.binarySearch(e,t,o))&&goog.array.removeAt(e,t)},goog.array.bucket=function(e,t,o){for(var r={},s=0;s<e.length;s++){var n=e[s],i=t.call(o,n,s,e);goog.isDef(i)&&(r[i]||(r[i]=[])).push(n)}return r},goog.array.toObject=function(e,t,o){var r={};return goog.array.forEach(e,(function(s,n){r[t.call(o,s,n,e)]=s})),r},goog.array.range=function(e,t,o){var r=[],s=0,n=e;if(void 0!==t&&(s=e,n=t),0>(o=o||1)*(n-s))return[];if(0<o)for(e=s;e<n;e+=o)r.push(e);else for(e=s;e>n;e+=o)r.push(e);return r},goog.array.repeat=function(e,t){for(var o=[],r=0;r<t;r++)o[r]=e;return o},goog.array.flatten=function(e){for(var t=[],o=0;o<arguments.length;o++){var r=arguments[o];if(goog.isArray(r))for(var s=0;s<r.length;s+=8192){var n=goog.array.slice(r,s,s+8192);n=goog.array.flatten.apply(null,n);for(var i=0;i<n.length;i++)t.push(n[i])}else t.push(r)}return t},goog.array.rotate=function(e,t){return goog.asserts.assert(null!=e.length),e.length&&(0<(t%=e.length)?Array.prototype.unshift.apply(e,e.splice(-t,t)):0>t&&Array.prototype.push.apply(e,e.splice(0,-t))),e},goog.array.moveItem=function(e,t,o){goog.asserts.assert(0<=t&&t<e.length),goog.asserts.assert(0<=o&&o<e.length),t=Array.prototype.splice.call(e,t,1),Array.prototype.splice.call(e,o,0,t[0])},goog.array.zip=function(e){if(!arguments.length)return[];for(var t=[],o=arguments[0].length,r=1;r<arguments.length;r++)arguments[r].length<o&&(o=arguments[r].length);for(r=0;r<o;r++){for(var s=[],n=0;n<arguments.length;n++)s.push(arguments[n][r]);t.push(s)}return t},goog.array.shuffle=function(e,t){t=t||Math.random;for(var o=e.length-1;0<o;o--){var r=Math.floor(t()*(o+1)),s=e[o];e[o]=e[r],e[r]=s}},goog.array.copyByIndex=function(e,t){var o=[];return goog.array.forEach(t,(function(t){o.push(e[t])})),o},goog.array.concatMap=function(e,t,o){return goog.array.concat.apply([],goog.array.map(e,t,o))},goog.crypt={},goog.crypt.stringToByteArray=function(e){for(var t=[],o=0,r=0;r<e.length;r++){var s=e.charCodeAt(r);255<s&&(t[o++]=255&s,s>>=8),t[o++]=s}return t},goog.crypt.byteArrayToString=function(e){if(8192>=e.length)return String.fromCharCode.apply(null,e);for(var t="",o=0;o<e.length;o+=8192){var r=goog.array.slice(e,o,o+8192);t+=String.fromCharCode.apply(null,r)}return t},goog.crypt.byteArrayToHex=function(e,t){return goog.array.map(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join(t||"")},goog.crypt.hexToByteArray=function(e){goog.asserts.assert(0==e.length%2,"Key string length must be multiple of 2");for(var t=[],o=0;o<e.length;o+=2)t.push(parseInt(e.substring(o,o+2),16));return t},goog.crypt.stringToUtf8ByteArray=function(e){for(var t=[],o=0,r=0;r<e.length;r++){var s=e.charCodeAt(r);128>s?t[o++]=s:(2048>s?t[o++]=s>>6|192:(55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[o++]=s>>18|240,t[o++]=s>>12&63|128):t[o++]=s>>12|224,t[o++]=s>>6&63|128),t[o++]=63&s|128)}return t},goog.crypt.utf8ByteArrayToString=function(e){for(var t=[],o=0,r=0;o<e.length;){var s=e[o++];if(128>s)t[r++]=String.fromCharCode(s);else if(191<s&&224>s){var n=e[o++];t[r++]=String.fromCharCode((31&s)<<6|63&n)}else if(239<s&&365>s){n=e[o++];var i=e[o++];s=((7&s)<<18|(63&n)<<12|(63&i)<<6|63&e[o++])-65536,t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else n=e[o++],i=e[o++],t[r++]=String.fromCharCode((15&s)<<12|(63&n)<<6|63&i)}return t.join("")},goog.crypt.xorByteArray=function(e,t){goog.asserts.assert(e.length==t.length,"XOR array lengths must match");for(var o=[],r=0;r<e.length;r++)o.push(e[r]^t[r]);return o},goog.string={},goog.string.internal={},goog.string.internal.startsWith=function(e,t){return 0==e.lastIndexOf(t,0)},goog.string.internal.endsWith=function(e,t){var o=e.length-t.length;return 0<=o&&e.indexOf(t,o)==o},goog.string.internal.caseInsensitiveStartsWith=function(e,t){return 0==goog.string.internal.caseInsensitiveCompare(t,e.substr(0,t.length))},goog.string.internal.caseInsensitiveEndsWith=function(e,t){return 0==goog.string.internal.caseInsensitiveCompare(t,e.substr(e.length-t.length,t.length))},goog.string.internal.caseInsensitiveEquals=function(e,t){return e.toLowerCase()==t.toLowerCase()},goog.string.internal.isEmptyOrWhitespace=function(e){return/^[\s\xa0]*$/.test(e)},goog.string.internal.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},goog.string.internal.caseInsensitiveCompare=function(e,t){return(e=String(e).toLowerCase())<(t=String(t).toLowerCase())?-1:e==t?0:1},goog.string.internal.newLineToBr=function(e,t){return e.replace(/(\r\n|\r|\n)/g,t?"<br />":"<br>")},goog.string.internal.htmlEscape=function(e,t){if(t)e=e.replace(goog.string.internal.AMP_RE_,"&amp;").replace(goog.string.internal.LT_RE_,"&lt;").replace(goog.string.internal.GT_RE_,"&gt;").replace(goog.string.internal.QUOT_RE_,"&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.internal.NULL_RE_,"&#0;");else{if(!goog.string.internal.ALL_RE_.test(e))return e;-1!=e.indexOf("&")&&(e=e.replace(goog.string.internal.AMP_RE_,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(goog.string.internal.LT_RE_,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(goog.string.internal.GT_RE_,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(goog.string.internal.QUOT_RE_,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(goog.string.internal.NULL_RE_,"&#0;"))}return e},goog.string.internal.AMP_RE_=/&/g,goog.string.internal.LT_RE_=/</g,goog.string.internal.GT_RE_=/>/g,goog.string.internal.QUOT_RE_=/"/g,goog.string.internal.SINGLE_QUOTE_RE_=/'/g,goog.string.internal.NULL_RE_=/\x00/g,goog.string.internal.ALL_RE_=/[\x00&<>"']/,goog.string.internal.whitespaceEscape=function(e,t){return goog.string.internal.newLineToBr(e.replace(/  /g," &#160;"),t)},goog.string.internal.contains=function(e,t){return-1!=e.indexOf(t)},goog.string.internal.caseInsensitiveContains=function(e,t){return goog.string.internal.contains(e.toLowerCase(),t.toLowerCase())},goog.string.internal.compareVersions=function(e,t){var o=0;e=goog.string.internal.trim(String(e)).split("."),t=goog.string.internal.trim(String(t)).split(".");for(var r=Math.max(e.length,t.length),s=0;0==o&&s<r;s++){var n=e[s]||"",i=t[s]||"";do{if(n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==n[0].length&&0==i[0].length)break;o=0==n[1].length?0:parseInt(n[1],10);var a=0==i[1].length?0:parseInt(i[1],10);o=goog.string.internal.compareElements_(o,a)||goog.string.internal.compareElements_(0==n[2].length,0==i[2].length)||goog.string.internal.compareElements_(n[2],i[2]),n=n[3],i=i[3]}while(0==o)}return o},goog.string.internal.compareElements_=function(e,t){return e<t?-1:e>t?1:0},goog.string.TypedString=function(){},goog.string.Const=function(e,t){this.stringConstValueWithSecurityContract__googStringSecurityPrivate_=e===goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_&&t||"",this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_=goog.string.Const.TYPE_MARKER_},goog.string.Const.prototype.implementsGoogStringTypedString=!0,goog.string.Const.prototype.getTypedStringValue=function(){return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_},goog.string.Const.prototype.toString=function(){return"Const{"+this.stringConstValueWithSecurityContract__googStringSecurityPrivate_+"}"},goog.string.Const.unwrap=function(e){return e instanceof goog.string.Const&&e.constructor===goog.string.Const&&e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_===goog.string.Const.TYPE_MARKER_?e.stringConstValueWithSecurityContract__googStringSecurityPrivate_:(goog.asserts.fail("expected object of type Const, got '"+e+"'"),"type_error:Const")},goog.string.Const.from=function(e){return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,e)},goog.string.Const.TYPE_MARKER_={},goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_={},goog.string.Const.EMPTY=goog.string.Const.from(""),goog.fs={},goog.fs.url={},goog.fs.url.createObjectUrl=function(e){return goog.fs.url.getUrlObject_().createObjectURL(e)},goog.fs.url.revokeObjectUrl=function(e){goog.fs.url.getUrlObject_().revokeObjectURL(e)},goog.fs.url.getUrlObject_=function(){var e=goog.fs.url.findUrlObject_();if(null!=e)return e;throw Error("This browser doesn't seem to support blob URLs")},goog.fs.url.findUrlObject_=function(){return goog.isDef(goog.global.URL)&&goog.isDef(goog.global.URL.createObjectURL)?goog.global.URL:goog.isDef(goog.global.webkitURL)&&goog.isDef(goog.global.webkitURL.createObjectURL)?goog.global.webkitURL:goog.isDef(goog.global.createObjectURL)?goog.global:null},goog.fs.url.browserSupportsObjectUrls=function(){return null!=goog.fs.url.findUrlObject_()},goog.html={},goog.html.trustedtypes={},goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#html"):null,goog.i18n={},goog.i18n.bidi={},goog.i18n.bidi.FORCE_RTL=!1,goog.i18n.bidi.IS_RTL=goog.i18n.bidi.FORCE_RTL||("ar"==goog.LOCALE.substring(0,2).toLowerCase()||"fa"==goog.LOCALE.substring(0,2).toLowerCase()||"he"==goog.LOCALE.substring(0,2).toLowerCase()||"iw"==goog.LOCALE.substring(0,2).toLowerCase()||"ps"==goog.LOCALE.substring(0,2).toLowerCase()||"sd"==goog.LOCALE.substring(0,2).toLowerCase()||"ug"==goog.LOCALE.substring(0,2).toLowerCase()||"ur"==goog.LOCALE.substring(0,2).toLowerCase()||"yi"==goog.LOCALE.substring(0,2).toLowerCase())&&(2==goog.LOCALE.length||"-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))||3<=goog.LOCALE.length&&"ckb"==goog.LOCALE.substring(0,3).toLowerCase()&&(3==goog.LOCALE.length||"-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))||7<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(2,3)||"_"==goog.LOCALE.substring(2,3))&&("adlm"==goog.LOCALE.substring(3,7).toLowerCase()||"arab"==goog.LOCALE.substring(3,7).toLowerCase()||"hebr"==goog.LOCALE.substring(3,7).toLowerCase()||"nkoo"==goog.LOCALE.substring(3,7).toLowerCase()||"rohg"==goog.LOCALE.substring(3,7).toLowerCase()||"thaa"==goog.LOCALE.substring(3,7).toLowerCase())||8<=goog.LOCALE.length&&("-"==goog.LOCALE.substring(3,4)||"_"==goog.LOCALE.substring(3,4))&&("adlm"==goog.LOCALE.substring(4,8).toLowerCase()||"arab"==goog.LOCALE.substring(4,8).toLowerCase()||"hebr"==goog.LOCALE.substring(4,8).toLowerCase()||"nkoo"==goog.LOCALE.substring(4,8).toLowerCase()||"rohg"==goog.LOCALE.substring(4,8).toLowerCase()||"thaa"==goog.LOCALE.substring(4,8).toLowerCase()),goog.i18n.bidi.Format={LRE:"‪",RLE:"‫",PDF:"‬",LRM:"‎",RLM:"‏"},goog.i18n.bidi.Dir={LTR:1,RTL:-1,NEUTRAL:0},goog.i18n.bidi.RIGHT="right",goog.i18n.bidi.LEFT="left",goog.i18n.bidi.I18N_RIGHT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT,goog.i18n.bidi.I18N_LEFT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,goog.i18n.bidi.toDir=function(e,t){return"number"==typeof e?0<e?goog.i18n.bidi.Dir.LTR:0>e?goog.i18n.bidi.Dir.RTL:t?null:goog.i18n.bidi.Dir.NEUTRAL:null==e?null:e?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR},goog.i18n.bidi.ltrChars_="A-Za-z",goog.i18n.bidi.rtlChars_="֑",goog.i18n.bidi.htmlSkipReg_=/<[^>]*>|&[^;]+;/g,goog.i18n.bidi.stripHtmlIfNeeded_=function(e,t){return t?e.replace(goog.i18n.bidi.htmlSkipReg_,""):e},goog.i18n.bidi.rtlCharReg_=new RegExp("["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.ltrCharReg_=new RegExp("["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.hasAnyRtl=function(e,t){return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e,t))},goog.i18n.bidi.hasRtlChar=goog.i18n.bidi.hasAnyRtl,goog.i18n.bidi.hasAnyLtr=function(e,t){return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e,t))},goog.i18n.bidi.ltrRe_=new RegExp("^["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.rtlRe_=new RegExp("^["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.isRtlChar=function(e){return goog.i18n.bidi.rtlRe_.test(e)},goog.i18n.bidi.isLtrChar=function(e){return goog.i18n.bidi.ltrRe_.test(e)},goog.i18n.bidi.isNeutralChar=function(e){return!goog.i18n.bidi.isLtrChar(e)&&!goog.i18n.bidi.isRtlChar(e)},goog.i18n.bidi.ltrDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.rtlChars_+"]*["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.rtlDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.ltrChars_+"]*["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.startsWithRtl=function(e,t){return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e,t))},goog.i18n.bidi.isRtlText=goog.i18n.bidi.startsWithRtl,goog.i18n.bidi.startsWithLtr=function(e,t){return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e,t))},goog.i18n.bidi.isLtrText=goog.i18n.bidi.startsWithLtr,goog.i18n.bidi.isRequiredLtrRe_=/^http:\/\/.*/,goog.i18n.bidi.isNeutralText=function(e,t){return e=goog.i18n.bidi.stripHtmlIfNeeded_(e,t),goog.i18n.bidi.isRequiredLtrRe_.test(e)||!goog.i18n.bidi.hasAnyLtr(e)&&!goog.i18n.bidi.hasAnyRtl(e)},goog.i18n.bidi.ltrExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.ltrChars_+"][^"+goog.i18n.bidi.rtlChars_+"]*$"),goog.i18n.bidi.rtlExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.rtlChars_+"][^"+goog.i18n.bidi.ltrChars_+"]*$"),goog.i18n.bidi.endsWithLtr=function(e,t){return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e,t))},goog.i18n.bidi.isLtrExitText=goog.i18n.bidi.endsWithLtr,goog.i18n.bidi.endsWithRtl=function(e,t){return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e,t))},goog.i18n.bidi.isRtlExitText=goog.i18n.bidi.endsWithRtl,goog.i18n.bidi.rtlLocalesRe_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,goog.i18n.bidi.isRtlLanguage=function(e){return goog.i18n.bidi.rtlLocalesRe_.test(e)},goog.i18n.bidi.bracketGuardTextRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,goog.i18n.bidi.guardBracketInText=function(e,t){return t=(void 0===t?goog.i18n.bidi.hasAnyRtl(e):t)?goog.i18n.bidi.Format.RLM:goog.i18n.bidi.Format.LRM,e.replace(goog.i18n.bidi.bracketGuardTextRe_,t+"$&"+t)},goog.i18n.bidi.enforceRtlInHtml=function(e){return"<"==e.charAt(0)?e.replace(/<\w+/,"$& dir=rtl"):"\n<span dir=rtl>"+e+"</span>"},goog.i18n.bidi.enforceRtlInText=function(e){return goog.i18n.bidi.Format.RLE+e+goog.i18n.bidi.Format.PDF},goog.i18n.bidi.enforceLtrInHtml=function(e){return"<"==e.charAt(0)?e.replace(/<\w+/,"$& dir=ltr"):"\n<span dir=ltr>"+e+"</span>"},goog.i18n.bidi.enforceLtrInText=function(e){return goog.i18n.bidi.Format.LRE+e+goog.i18n.bidi.Format.PDF},goog.i18n.bidi.dimensionsRe_=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g,goog.i18n.bidi.leftRe_=/left/gi,goog.i18n.bidi.rightRe_=/right/gi,goog.i18n.bidi.tempRe_=/%%%%/g,goog.i18n.bidi.mirrorCSS=function(e){return e.replace(goog.i18n.bidi.dimensionsRe_,":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_,"%%%%").replace(goog.i18n.bidi.rightRe_,goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_,goog.i18n.bidi.RIGHT)},goog.i18n.bidi.doubleQuoteSubstituteRe_=/([\u0591-\u05f2])"/g,goog.i18n.bidi.singleQuoteSubstituteRe_=/([\u0591-\u05f2])'/g,goog.i18n.bidi.normalizeHebrewQuote=function(e){return e.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_,"$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_,"$1׳")},goog.i18n.bidi.wordSeparatorRe_=/\s+/,goog.i18n.bidi.hasNumeralsRe_=/[\d\u06f0-\u06f9]/,goog.i18n.bidi.rtlDetectionThreshold_=.4,goog.i18n.bidi.estimateDirection=function(e,t){var o=0,r=0,s=!1;for(e=goog.i18n.bidi.stripHtmlIfNeeded_(e,t).split(goog.i18n.bidi.wordSeparatorRe_),t=0;t<e.length;t++){var n=e[t];goog.i18n.bidi.startsWithRtl(n)?(o++,r++):goog.i18n.bidi.isRequiredLtrRe_.test(n)?s=!0:goog.i18n.bidi.hasAnyLtr(n)?r++:goog.i18n.bidi.hasNumeralsRe_.test(n)&&(s=!0)}return 0==r?s?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.NEUTRAL:o/r>goog.i18n.bidi.rtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR},goog.i18n.bidi.detectRtlDirectionality=function(e,t){return goog.i18n.bidi.estimateDirection(e,t)==goog.i18n.bidi.Dir.RTL},goog.i18n.bidi.setElementDirAndAlign=function(e,t){e&&(t=goog.i18n.bidi.toDir(t))&&(e.style.textAlign=t==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,e.dir=t==goog.i18n.bidi.Dir.RTL?"rtl":"ltr")},goog.i18n.bidi.setElementDirByTextDirectionality=function(e,t){switch(goog.i18n.bidi.estimateDirection(t)){case goog.i18n.bidi.Dir.LTR:e.dir="ltr";break;case goog.i18n.bidi.Dir.RTL:e.dir="rtl";break;default:e.removeAttribute("dir")}},goog.i18n.bidi.DirectionalString=function(){},goog.html.TrustedResourceUrl=function(){this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_="",this.trustedURL_=null,this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString=!0,goog.html.TrustedResourceUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()},goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.TrustedResourceUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR},goog.html.TrustedResourceUrl.prototype.cloneWithParams=function(e,t){var o=goog.html.TrustedResourceUrl.unwrap(this),r=(o=goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(o))[3]||"";return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(o[1]+goog.html.TrustedResourceUrl.stringifyParams_("?",o[2]||"",e)+goog.html.TrustedResourceUrl.stringifyParams_("#",r,t))},goog.DEBUG&&(goog.html.TrustedResourceUrl.prototype.toString=function(){return"TrustedResourceUrl{"+this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_+"}"}),goog.html.TrustedResourceUrl.unwrap=function(e){return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e).toString()},goog.html.TrustedResourceUrl.unwrapTrustedScriptURL=function(e){return e instanceof goog.html.TrustedResourceUrl&&e.constructor===goog.html.TrustedResourceUrl&&e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_:(goog.asserts.fail("expected object of type TrustedResourceUrl, got '"+e+"' of type "+goog.typeOf(e)),"type_error:TrustedResourceUrl")},goog.html.TrustedResourceUrl.unwrapTrustedURL=function(e){return e.trustedURL_?e.trustedURL_:goog.html.TrustedResourceUrl.unwrap(e)},goog.html.TrustedResourceUrl.format=function(e,t){var o=goog.string.Const.unwrap(e);if(!goog.html.TrustedResourceUrl.BASE_URL_.test(o))throw Error("Invalid TrustedResourceUrl format: "+o);return e=o.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_,(function(e,r){if(!Object.prototype.hasOwnProperty.call(t,r))throw Error('Found marker, "'+r+'", in format string, "'+o+'", but no valid label mapping found in args: '+JSON.stringify(t));return(e=t[r])instanceof goog.string.Const?goog.string.Const.unwrap(e):encodeURIComponent(String(e))})),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.TrustedResourceUrl.FORMAT_MARKER_=/%{(\w+)}/g,goog.html.TrustedResourceUrl.BASE_URL_=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,goog.html.TrustedResourceUrl.URL_PARAM_PARSER_=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,goog.html.TrustedResourceUrl.formatWithParams=function(e,t,o,r){return goog.html.TrustedResourceUrl.format(e,t).cloneWithParams(o,r)},goog.html.TrustedResourceUrl.fromConstant=function(e){return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))},goog.html.TrustedResourceUrl.fromConstants=function(e){for(var t="",o=0;o<e.length;o++)t+=goog.string.Const.unwrap(e[o]);return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse=function(e){var t=new goog.html.TrustedResourceUrl;return t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(e):e,goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY&&(t.trustedURL_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e)),t},goog.html.TrustedResourceUrl.stringifyParams_=function(e,t,o){if(null==o)return t;if(goog.isString(o))return o?e+encodeURIComponent(o):"";for(var r in o){var s=o[r];s=goog.isArray(s)?s:[s];for(var n=0;n<s.length;n++){var i=s[n];null!=i&&(t||(t=e),t+=(t.length>e.length?"&":"")+encodeURIComponent(r)+"="+encodeURIComponent(String(i)))}}return t},goog.html.SafeUrl=function(){this.privateDoNotAccessOrElseSafeUrlWrappedValue_="",this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeUrl.INNOCUOUS_STRING="about:invalid#zClosurez",goog.html.SafeUrl.prototype.implementsGoogStringTypedString=!0,goog.html.SafeUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()},goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.SafeUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR},goog.DEBUG&&(goog.html.SafeUrl.prototype.toString=function(){return"SafeUrl{"+this.privateDoNotAccessOrElseSafeUrlWrappedValue_+"}"}),goog.html.SafeUrl.unwrap=function(e){return goog.html.SafeUrl.unwrapTrustedURL(e).toString()},goog.html.SafeUrl.unwrapTrustedURL=function(e){return e instanceof goog.html.SafeUrl&&e.constructor===goog.html.SafeUrl&&e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?e.privateDoNotAccessOrElseSafeUrlWrappedValue_:(goog.asserts.fail("expected object of type SafeUrl, got '"+e+"' of type "+goog.typeOf(e)),"type_error:SafeUrl")},goog.html.SafeUrl.fromConstant=function(e){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))},goog.html.SAFE_MIME_TYPE_PATTERN_=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,goog.html.SafeUrl.isSafeMimeType=function(e){return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e)},goog.html.SafeUrl.fromBlob=function(e){return e=goog.html.SAFE_MIME_TYPE_PATTERN_.test(e.type)?goog.fs.url.createObjectUrl(e):goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.DATA_URL_PATTERN_=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,goog.html.SafeUrl.fromDataUrl=function(e){var t=(e=e.replace(/(%0A|%0D)/g,"")).match(goog.html.DATA_URL_PATTERN_);return t=t&&goog.html.SAFE_MIME_TYPE_PATTERN_.test(t[1]),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t?e:goog.html.SafeUrl.INNOCUOUS_STRING)},goog.html.SafeUrl.fromTelUrl=function(e){return goog.string.internal.caseInsensitiveStartsWith(e,"tel:")||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SIP_URL_PATTERN_=/^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i,goog.html.SafeUrl.fromSipUrl=function(e){return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e))||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeUrl.fromFacebookMessengerUrl=function(e){return goog.string.internal.caseInsensitiveStartsWith(e,"fb-messenger://share")||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeUrl.fromWhatsAppUrl=function(e){return goog.string.internal.caseInsensitiveStartsWith(e,"whatsapp://send")||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeUrl.fromSmsUrl=function(e){return goog.string.internal.caseInsensitiveStartsWith(e,"sms:")&&goog.html.SafeUrl.isSmsUrlBodyValid_(e)||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeUrl.isSmsUrlBodyValid_=function(e){var t=e.indexOf("#");if(0<t&&(e=e.substring(0,t)),!(t=e.match(/[?&]body=/gi)))return!0;if(1<t.length)return!1;if(!(e=e.match(/[?&]body=([^&]*)/)[1]))return!0;try{decodeURIComponent(e)}catch(e){return!1}return/^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e)},goog.html.SafeUrl.fromSshUrl=function(e){return goog.string.internal.caseInsensitiveStartsWith(e,"ssh://")||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeUrl.sanitizeChromeExtensionUrl=function(e,t){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//,e,t)},goog.html.SafeUrl.sanitizeFirefoxExtensionUrl=function(e,t){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//,e,t)},goog.html.SafeUrl.sanitizeEdgeExtensionUrl=function(e,t){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//,e,t)},goog.html.SafeUrl.sanitizeExtensionUrl_=function(e,t,o){return(e=e.exec(t))?(e=e[1],-1==(o instanceof goog.string.Const?[goog.string.Const.unwrap(o)]:o.map((function(e){return goog.string.Const.unwrap(e)}))).indexOf(e)&&(t=goog.html.SafeUrl.INNOCUOUS_STRING)):t=goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeUrl.fromTrustedResourceUrl=function(e){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(e))},goog.html.SAFE_URL_PATTERN_=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,goog.html.SafeUrl.SAFE_URL_PATTERN=goog.html.SAFE_URL_PATTERN_,goog.html.SafeUrl.sanitize=function(e){return e instanceof goog.html.SafeUrl?e:(e="object"==typeof e&&e.implementsGoogStringTypedString?e.getTypedStringValue():String(e),goog.html.SAFE_URL_PATTERN_.test(e)||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e))},goog.html.SafeUrl.sanitizeAssertUnchanged=function(e,t){return e instanceof goog.html.SafeUrl?e:(e="object"==typeof e&&e.implementsGoogStringTypedString?e.getTypedStringValue():String(e),t&&/^data:/i.test(e)&&(t=goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue()==e?t:(goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(e),"%s does not match the safe URL pattern",e)||(e=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)))},goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse=function(e){var t=new goog.html.SafeUrl;return t.privateDoNotAccessOrElseSafeUrlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e):e,t},goog.html.SafeUrl.ABOUT_BLANK=goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"),goog.html.SafeStyle=function(){this.privateDoNotAccessOrElseSafeStyleWrappedValue_="",this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeStyle.prototype.implementsGoogStringTypedString=!0,goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeStyle.fromConstant=function(e){return 0===(e=goog.string.Const.unwrap(e)).length?goog.html.SafeStyle.EMPTY:(goog.asserts.assert(goog.string.internal.endsWith(e,";"),"Last character of style string is not ';': "+e),goog.asserts.assert(goog.string.internal.contains(e,":"),"Style string must contain at least one ':', to specify a \"name: value\" pair: "+e),goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e))},goog.html.SafeStyle.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_},goog.DEBUG&&(goog.html.SafeStyle.prototype.toString=function(){return"SafeStyle{"+this.privateDoNotAccessOrElseSafeStyleWrappedValue_+"}"}),goog.html.SafeStyle.unwrap=function(e){return e instanceof goog.html.SafeStyle&&e.constructor===goog.html.SafeStyle&&e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?e.privateDoNotAccessOrElseSafeStyleWrappedValue_:(goog.asserts.fail("expected object of type SafeStyle, got '"+e+"' of type "+goog.typeOf(e)),"type_error:SafeStyle")},goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse=function(e){return(new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(e)},goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_=function(e){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_=e,this},goog.html.SafeStyle.EMPTY=goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""),goog.html.SafeStyle.INNOCUOUS_STRING="zClosurez",goog.html.SafeStyle.create=function(e){var t,o="";for(t in e){if(!/^[-_a-zA-Z0-9]+$/.test(t))throw Error("Name allows only [-_a-zA-Z0-9], got: "+t);var r=e[t];null!=r&&(o+=t+":"+(r=goog.isArray(r)?goog.array.map(r,goog.html.SafeStyle.sanitizePropertyValue_).join(" "):goog.html.SafeStyle.sanitizePropertyValue_(r))+";")}return o?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o):goog.html.SafeStyle.EMPTY},goog.html.SafeStyle.sanitizePropertyValue_=function(e){if(e instanceof goog.html.SafeUrl)return'url("'+goog.html.SafeUrl.unwrap(e).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(e=e instanceof goog.string.Const?goog.string.Const.unwrap(e):goog.html.SafeStyle.sanitizePropertyValueString_(String(e)),/[{;}]/.test(e))throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.",[e]);return e},goog.html.SafeStyle.sanitizePropertyValueString_=function(e){var t=e.replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.URL_RE_,"url");return goog.html.SafeStyle.VALUE_RE_.test(t)?goog.html.SafeStyle.COMMENT_RE_.test(e)?(goog.asserts.fail("String value disallows comments, got: "+e),goog.html.SafeStyle.INNOCUOUS_STRING):goog.html.SafeStyle.hasBalancedQuotes_(e)?goog.html.SafeStyle.hasBalancedSquareBrackets_(e)?goog.html.SafeStyle.sanitizeUrl_(e):(goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: "+e),goog.html.SafeStyle.INNOCUOUS_STRING):(goog.asserts.fail("String value requires balanced quotes, got: "+e),goog.html.SafeStyle.INNOCUOUS_STRING):(goog.asserts.fail("String value allows only "+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+" and simple functions, got: "+e),goog.html.SafeStyle.INNOCUOUS_STRING)},goog.html.SafeStyle.hasBalancedQuotes_=function(e){for(var t=!0,o=!0,r=0;r<e.length;r++){var s=e.charAt(r);"'"==s&&o?t=!t:'"'==s&&t&&(o=!o)}return t&&o},goog.html.SafeStyle.hasBalancedSquareBrackets_=function(e){for(var t=!0,o=/^[-_a-zA-Z0-9]$/,r=0;r<e.length;r++){var s=e.charAt(r);if("]"==s){if(t)return!1;t=!0}else if("["==s){if(!t)return!1;t=!1}else if(!t&&!o.test(s))return!1}return t},goog.html.SafeStyle.VALUE_ALLOWED_CHARS_="[-,.\"'%_!# a-zA-Z0-9\\[\\]]",goog.html.SafeStyle.VALUE_RE_=new RegExp("^"+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+"+$"),goog.html.SafeStyle.URL_RE_=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,goog.html.SafeStyle.FUNCTIONS_RE_=/\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,goog.html.SafeStyle.COMMENT_RE_=/\/\*/,goog.html.SafeStyle.sanitizeUrl_=function(e){return e.replace(goog.html.SafeStyle.URL_RE_,(function(e,t,o,r){var s="";return o=o.replace(/^(['"])(.*)\1$/,(function(e,t,o){return s=t,o})),e=goog.html.SafeUrl.sanitize(o).getTypedStringValue(),t+s+e+s+r}))},goog.html.SafeStyle.concat=function(e){var t="",o=function(e){goog.isArray(e)?goog.array.forEach(e,o):t+=goog.html.SafeStyle.unwrap(e)};return goog.array.forEach(arguments,o),t?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t):goog.html.SafeStyle.EMPTY},goog.html.SafeScript=function(){this.privateDoNotAccessOrElseSafeScriptWrappedValue_="",this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeScript.prototype.implementsGoogStringTypedString=!0,goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeScript.fromConstant=function(e){return 0===(e=goog.string.Const.unwrap(e)).length?goog.html.SafeScript.EMPTY:goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeScript.fromConstantAndArgs=function(e,t){for(var o=[],r=1;r<arguments.length;r++)o.push(goog.html.SafeScript.stringify_(arguments[r]));return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("("+goog.string.Const.unwrap(e)+")("+o.join(", ")+");")},goog.html.SafeScript.fromJson=function(e){return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(e))},goog.html.SafeScript.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()},goog.DEBUG&&(goog.html.SafeScript.prototype.toString=function(){return"SafeScript{"+this.privateDoNotAccessOrElseSafeScriptWrappedValue_+"}"}),goog.html.SafeScript.unwrap=function(e){return goog.html.SafeScript.unwrapTrustedScript(e).toString()},goog.html.SafeScript.unwrapTrustedScript=function(e){return e instanceof goog.html.SafeScript&&e.constructor===goog.html.SafeScript&&e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?e.privateDoNotAccessOrElseSafeScriptWrappedValue_:(goog.asserts.fail("expected object of type SafeScript, got '"+e+"' of type "+goog.typeOf(e)),"type_error:SafeScript")},goog.html.SafeScript.stringify_=function(e){return JSON.stringify(e).replace(/</g,"\\x3c")},goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse=function(e){return(new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(e)},goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_=function(e){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(e):e,this},goog.html.SafeScript.EMPTY=goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""),goog.object={},goog.object.is=function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},goog.object.forEach=function(e,t,o){for(var r in e)t.call(o,e[r],r,e)},goog.object.filter=function(e,t,o){var r,s={};for(r in e)t.call(o,e[r],r,e)&&(s[r]=e[r]);return s},goog.object.map=function(e,t,o){var r,s={};for(r in e)s[r]=t.call(o,e[r],r,e);return s},goog.object.some=function(e,t,o){for(var r in e)if(t.call(o,e[r],r,e))return!0;return!1},goog.object.every=function(e,t,o){for(var r in e)if(!t.call(o,e[r],r,e))return!1;return!0},goog.object.getCount=function(e){var t,o=0;for(t in e)o++;return o},goog.object.getAnyKey=function(e){for(var t in e)return t},goog.object.getAnyValue=function(e){for(var t in e)return e[t]},goog.object.contains=function(e,t){return goog.object.containsValue(e,t)},goog.object.getValues=function(e){var t,o=[],r=0;for(t in e)o[r++]=e[t];return o},goog.object.getKeys=function(e){var t,o=[],r=0;for(t in e)o[r++]=t;return o},goog.object.getValueByKeys=function(e,t){var o=goog.isArrayLike(t),r=o?t:arguments;for(o=o?0:1;o<r.length;o++){if(null==e)return;e=e[r[o]]}return e},goog.object.containsKey=function(e,t){return null!==e&&t in e},goog.object.containsValue=function(e,t){for(var o in e)if(e[o]==t)return!0;return!1},goog.object.findKey=function(e,t,o){for(var r in e)if(t.call(o,e[r],r,e))return r},goog.object.findValue=function(e,t,o){return(t=goog.object.findKey(e,t,o))&&e[t]},goog.object.isEmpty=function(e){for(var t in e)return!1;return!0},goog.object.clear=function(e){for(var t in e)delete e[t]},goog.object.remove=function(e,t){var o;return(o=t in e)&&delete e[t],o},goog.object.add=function(e,t,o){if(null!==e&&t in e)throw Error('The object already contains the key "'+t+'"');goog.object.set(e,t,o)},goog.object.get=function(e,t,o){return null!==e&&t in e?e[t]:o},goog.object.set=function(e,t,o){e[t]=o},goog.object.setIfUndefined=function(e,t,o){return t in e?e[t]:e[t]=o},goog.object.setWithReturnValueIfNotSet=function(e,t,o){return t in e?e[t]:(o=o(),e[t]=o)},goog.object.equals=function(e,t){for(var o in e)if(!(o in t)||e[o]!==t[o])return!1;for(var r in t)if(!(r in e))return!1;return!0},goog.object.clone=function(e){var t,o={};for(t in e)o[t]=e[t];return o},goog.object.unsafeClone=function(e){var t=goog.typeOf(e);if("object"==t||"array"==t){if(goog.isFunction(e.clone))return e.clone();for(var o in t="array"==t?[]:{},e)t[o]=goog.object.unsafeClone(e[o]);return t}return e},goog.object.transpose=function(e){var t,o={};for(t in e)o[e[t]]=t;return o},goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.object.extend=function(e,t){for(var o,r,s=1;s<arguments.length;s++){for(o in r=arguments[s])e[o]=r[o];for(var n=0;n<goog.object.PROTOTYPE_FIELDS_.length;n++)o=goog.object.PROTOTYPE_FIELDS_[n],Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}},goog.object.create=function(e){var t=arguments.length;if(1==t&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(t%2)throw Error("Uneven number of arguments");for(var o={},r=0;r<t;r+=2)o[arguments[r]]=arguments[r+1];return o},goog.object.createSet=function(e){var t=arguments.length;if(1==t&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var o={},r=0;r<t;r++)o[arguments[r]]=!0;return o},goog.object.createImmutableView=function(e){var t=e;return Object.isFrozen&&!Object.isFrozen(e)&&(t=Object.create(e),Object.freeze(t)),t},goog.object.isImmutableView=function(e){return!!Object.isFrozen&&Object.isFrozen(e)},goog.object.getAllPropertyNames=function(e,t,o){if(!e)return[];if(!Object.getOwnPropertyNames||!Object.getPrototypeOf)return goog.object.getKeys(e);for(var r={};e&&(e!==Object.prototype||t)&&(e!==Function.prototype||o);){for(var s=Object.getOwnPropertyNames(e),n=0;n<s.length;n++)r[s[n]]=!0;e=Object.getPrototypeOf(e)}return goog.object.getKeys(r)},goog.object.getSuperClass=function(e){return(e=Object.getPrototypeOf(e.prototype))&&e.constructor},goog.html.SafeStyleSheet=function(){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_="",this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString=!0,goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeStyleSheet.createRule=function(e,t){if(goog.string.internal.contains(e,"<"))throw Error("Selector does not allow '<', got: "+e);var o=e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+e);if(!goog.html.SafeStyleSheet.hasBalancedBrackets_(o))throw Error("() and [] in selector must be balanced, got: "+e);return t instanceof goog.html.SafeStyle||(t=goog.html.SafeStyle.create(t)),e=e+"{"+goog.html.SafeStyle.unwrap(t).replace(/</g,"\\3C ")+"}",goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeStyleSheet.hasBalancedBrackets_=function(e){for(var t={"(":")","[":"]"},o=[],r=0;r<e.length;r++){var s=e[r];if(t[s])o.push(t[s]);else if(goog.object.contains(t,s)&&o.pop()!=s)return!1}return 0==o.length},goog.html.SafeStyleSheet.concat=function(e){var t="",o=function(e){goog.isArray(e)?goog.array.forEach(e,o):t+=goog.html.SafeStyleSheet.unwrap(e)};return goog.array.forEach(arguments,o),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)},goog.html.SafeStyleSheet.fromConstant=function(e){return 0===(e=goog.string.Const.unwrap(e)).length?goog.html.SafeStyleSheet.EMPTY:(goog.asserts.assert(!goog.string.internal.contains(e,"<"),"Forbidden '<' character in style sheet string: "+e),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e))},goog.html.SafeStyleSheet.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_},goog.DEBUG&&(goog.html.SafeStyleSheet.prototype.toString=function(){return"SafeStyleSheet{"+this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_+"}"}),goog.html.SafeStyleSheet.unwrap=function(e){return e instanceof goog.html.SafeStyleSheet&&e.constructor===goog.html.SafeStyleSheet&&e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_:(goog.asserts.fail("expected object of type SafeStyleSheet, got '"+e+"' of type "+goog.typeOf(e)),"type_error:SafeStyleSheet")},goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse=function(e){return(new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(e)},goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_=function(e){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_=e,this},goog.html.SafeStyleSheet.EMPTY=goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""),goog.dom.tags={},goog.dom.tags.VOID_TAGS_={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},goog.dom.tags.isVoidTag=function(e){return!0===goog.dom.tags.VOID_TAGS_[e]},goog.dom.HtmlElement=function(){},goog.dom.TagName=function(e){this.tagName_=e},goog.dom.TagName.prototype.toString=function(){return this.tagName_},goog.dom.TagName.A=new goog.dom.TagName("A"),goog.dom.TagName.ABBR=new goog.dom.TagName("ABBR"),goog.dom.TagName.ACRONYM=new goog.dom.TagName("ACRONYM"),goog.dom.TagName.ADDRESS=new goog.dom.TagName("ADDRESS"),goog.dom.TagName.APPLET=new goog.dom.TagName("APPLET"),goog.dom.TagName.AREA=new goog.dom.TagName("AREA"),goog.dom.TagName.ARTICLE=new goog.dom.TagName("ARTICLE"),goog.dom.TagName.ASIDE=new goog.dom.TagName("ASIDE"),goog.dom.TagName.AUDIO=new goog.dom.TagName("AUDIO"),goog.dom.TagName.B=new goog.dom.TagName("B"),goog.dom.TagName.BASE=new goog.dom.TagName("BASE"),goog.dom.TagName.BASEFONT=new goog.dom.TagName("BASEFONT"),goog.dom.TagName.BDI=new goog.dom.TagName("BDI"),goog.dom.TagName.BDO=new goog.dom.TagName("BDO"),goog.dom.TagName.BIG=new goog.dom.TagName("BIG"),goog.dom.TagName.BLOCKQUOTE=new goog.dom.TagName("BLOCKQUOTE"),goog.dom.TagName.BODY=new goog.dom.TagName("BODY"),goog.dom.TagName.BR=new goog.dom.TagName("BR"),goog.dom.TagName.BUTTON=new goog.dom.TagName("BUTTON"),goog.dom.TagName.CANVAS=new goog.dom.TagName("CANVAS"),goog.dom.TagName.CAPTION=new goog.dom.TagName("CAPTION"),goog.dom.TagName.CENTER=new goog.dom.TagName("CENTER"),goog.dom.TagName.CITE=new goog.dom.TagName("CITE"),goog.dom.TagName.CODE=new goog.dom.TagName("CODE"),goog.dom.TagName.COL=new goog.dom.TagName("COL"),goog.dom.TagName.COLGROUP=new goog.dom.TagName("COLGROUP"),goog.dom.TagName.COMMAND=new goog.dom.TagName("COMMAND"),goog.dom.TagName.DATA=new goog.dom.TagName("DATA"),goog.dom.TagName.DATALIST=new goog.dom.TagName("DATALIST"),goog.dom.TagName.DD=new goog.dom.TagName("DD"),goog.dom.TagName.DEL=new goog.dom.TagName("DEL"),goog.dom.TagName.DETAILS=new goog.dom.TagName("DETAILS"),goog.dom.TagName.DFN=new goog.dom.TagName("DFN"),goog.dom.TagName.DIALOG=new goog.dom.TagName("DIALOG"),goog.dom.TagName.DIR=new goog.dom.TagName("DIR"),goog.dom.TagName.DIV=new goog.dom.TagName("DIV"),goog.dom.TagName.DL=new goog.dom.TagName("DL"),goog.dom.TagName.DT=new goog.dom.TagName("DT"),goog.dom.TagName.EM=new goog.dom.TagName("EM"),goog.dom.TagName.EMBED=new goog.dom.TagName("EMBED"),goog.dom.TagName.FIELDSET=new goog.dom.TagName("FIELDSET"),goog.dom.TagName.FIGCAPTION=new goog.dom.TagName("FIGCAPTION"),goog.dom.TagName.FIGURE=new goog.dom.TagName("FIGURE"),goog.dom.TagName.FONT=new goog.dom.TagName("FONT"),goog.dom.TagName.FOOTER=new goog.dom.TagName("FOOTER"),goog.dom.TagName.FORM=new goog.dom.TagName("FORM"),goog.dom.TagName.FRAME=new goog.dom.TagName("FRAME"),goog.dom.TagName.FRAMESET=new goog.dom.TagName("FRAMESET"),goog.dom.TagName.H1=new goog.dom.TagName("H1"),goog.dom.TagName.H2=new goog.dom.TagName("H2"),goog.dom.TagName.H3=new goog.dom.TagName("H3"),goog.dom.TagName.H4=new goog.dom.TagName("H4"),goog.dom.TagName.H5=new goog.dom.TagName("H5"),goog.dom.TagName.H6=new goog.dom.TagName("H6"),goog.dom.TagName.HEAD=new goog.dom.TagName("HEAD"),goog.dom.TagName.HEADER=new goog.dom.TagName("HEADER"),goog.dom.TagName.HGROUP=new goog.dom.TagName("HGROUP"),goog.dom.TagName.HR=new goog.dom.TagName("HR"),goog.dom.TagName.HTML=new goog.dom.TagName("HTML"),goog.dom.TagName.I=new goog.dom.TagName("I"),goog.dom.TagName.IFRAME=new goog.dom.TagName("IFRAME"),goog.dom.TagName.IMG=new goog.dom.TagName("IMG"),goog.dom.TagName.INPUT=new goog.dom.TagName("INPUT"),goog.dom.TagName.INS=new goog.dom.TagName("INS"),goog.dom.TagName.ISINDEX=new goog.dom.TagName("ISINDEX"),goog.dom.TagName.KBD=new goog.dom.TagName("KBD"),goog.dom.TagName.KEYGEN=new goog.dom.TagName("KEYGEN"),goog.dom.TagName.LABEL=new goog.dom.TagName("LABEL"),goog.dom.TagName.LEGEND=new goog.dom.TagName("LEGEND"),goog.dom.TagName.LI=new goog.dom.TagName("LI"),goog.dom.TagName.LINK=new goog.dom.TagName("LINK"),goog.dom.TagName.MAIN=new goog.dom.TagName("MAIN"),goog.dom.TagName.MAP=new goog.dom.TagName("MAP"),goog.dom.TagName.MARK=new goog.dom.TagName("MARK"),goog.dom.TagName.MATH=new goog.dom.TagName("MATH"),goog.dom.TagName.MENU=new goog.dom.TagName("MENU"),goog.dom.TagName.MENUITEM=new goog.dom.TagName("MENUITEM"),goog.dom.TagName.META=new goog.dom.TagName("META"),goog.dom.TagName.METER=new goog.dom.TagName("METER"),goog.dom.TagName.NAV=new goog.dom.TagName("NAV"),goog.dom.TagName.NOFRAMES=new goog.dom.TagName("NOFRAMES"),goog.dom.TagName.NOSCRIPT=new goog.dom.TagName("NOSCRIPT"),goog.dom.TagName.OBJECT=new goog.dom.TagName("OBJECT"),goog.dom.TagName.OL=new goog.dom.TagName("OL"),goog.dom.TagName.OPTGROUP=new goog.dom.TagName("OPTGROUP"),goog.dom.TagName.OPTION=new goog.dom.TagName("OPTION"),goog.dom.TagName.OUTPUT=new goog.dom.TagName("OUTPUT"),goog.dom.TagName.P=new goog.dom.TagName("P"),goog.dom.TagName.PARAM=new goog.dom.TagName("PARAM"),goog.dom.TagName.PICTURE=new goog.dom.TagName("PICTURE"),goog.dom.TagName.PRE=new goog.dom.TagName("PRE"),goog.dom.TagName.PROGRESS=new goog.dom.TagName("PROGRESS"),goog.dom.TagName.Q=new goog.dom.TagName("Q"),goog.dom.TagName.RP=new goog.dom.TagName("RP"),goog.dom.TagName.RT=new goog.dom.TagName("RT"),goog.dom.TagName.RTC=new goog.dom.TagName("RTC"),goog.dom.TagName.RUBY=new goog.dom.TagName("RUBY"),goog.dom.TagName.S=new goog.dom.TagName("S"),goog.dom.TagName.SAMP=new goog.dom.TagName("SAMP"),goog.dom.TagName.SCRIPT=new goog.dom.TagName("SCRIPT"),goog.dom.TagName.SECTION=new goog.dom.TagName("SECTION"),goog.dom.TagName.SELECT=new goog.dom.TagName("SELECT"),goog.dom.TagName.SMALL=new goog.dom.TagName("SMALL"),goog.dom.TagName.SOURCE=new goog.dom.TagName("SOURCE"),goog.dom.TagName.SPAN=new goog.dom.TagName("SPAN"),goog.dom.TagName.STRIKE=new goog.dom.TagName("STRIKE"),goog.dom.TagName.STRONG=new goog.dom.TagName("STRONG"),goog.dom.TagName.STYLE=new goog.dom.TagName("STYLE"),goog.dom.TagName.SUB=new goog.dom.TagName("SUB"),goog.dom.TagName.SUMMARY=new goog.dom.TagName("SUMMARY"),goog.dom.TagName.SUP=new goog.dom.TagName("SUP"),goog.dom.TagName.SVG=new goog.dom.TagName("SVG"),goog.dom.TagName.TABLE=new goog.dom.TagName("TABLE"),goog.dom.TagName.TBODY=new goog.dom.TagName("TBODY"),goog.dom.TagName.TD=new goog.dom.TagName("TD"),goog.dom.TagName.TEMPLATE=new goog.dom.TagName("TEMPLATE"),goog.dom.TagName.TEXTAREA=new goog.dom.TagName("TEXTAREA"),goog.dom.TagName.TFOOT=new goog.dom.TagName("TFOOT"),goog.dom.TagName.TH=new goog.dom.TagName("TH"),goog.dom.TagName.THEAD=new goog.dom.TagName("THEAD"),goog.dom.TagName.TIME=new goog.dom.TagName("TIME"),goog.dom.TagName.TITLE=new goog.dom.TagName("TITLE"),goog.dom.TagName.TR=new goog.dom.TagName("TR"),goog.dom.TagName.TRACK=new goog.dom.TagName("TRACK"),goog.dom.TagName.TT=new goog.dom.TagName("TT"),goog.dom.TagName.U=new goog.dom.TagName("U"),goog.dom.TagName.UL=new goog.dom.TagName("UL"),goog.dom.TagName.VAR=new goog.dom.TagName("VAR"),goog.dom.TagName.VIDEO=new goog.dom.TagName("VIDEO"),goog.dom.TagName.WBR=new goog.dom.TagName("WBR"),goog.labs={},goog.labs.userAgent={},goog.labs.userAgent.util={},goog.labs.userAgent.util.getNativeUserAgentString_=function(){var e=goog.labs.userAgent.util.getNavigator_();return e&&(e=e.userAgent)?e:""},goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator},goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_(),goog.labs.userAgent.util.setUserAgent=function(e){goog.labs.userAgent.util.userAgent_=e||goog.labs.userAgent.util.getNativeUserAgentString_()},goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_},goog.labs.userAgent.util.matchUserAgent=function(e){var t=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.contains(t,e)},goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(e){var t=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.caseInsensitiveContains(t,e)},goog.labs.userAgent.util.extractVersionTuples=function(e){for(var t,o=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,r=[];t=o.exec(e);)r.push([t[1],t[2],t[3]||void 0]);return r},goog.labs.userAgent.browser={},goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")},goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")},goog.labs.userAgent.browser.matchEdgeHtml_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")},goog.labs.userAgent.browser.matchEdgeChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("Edg/")},goog.labs.userAgent.browser.matchOperaChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("OPR")},goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")||goog.labs.userAgent.util.matchUserAgent("FxiOS")},goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdgeHtml_()||goog.labs.userAgent.browser.matchEdgeChromium_()||goog.labs.userAgent.browser.matchOperaChromium_()||goog.labs.userAgent.browser.matchFirefox_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))},goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")},goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&!goog.labs.userAgent.browser.matchFirefox_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")},goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchEdgeHtml_()},goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())},goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_,goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_,goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdgeHtml_,goog.labs.userAgent.browser.isEdgeChromium=goog.labs.userAgent.browser.matchEdgeChromium_,goog.labs.userAgent.browser.isOperaChromium=goog.labs.userAgent.browser.matchOperaChromium_,goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_,goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_,goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_,goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_,goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_,goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_,goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")},goog.labs.userAgent.browser.getVersion=function(){function e(e){return e=goog.array.find(e,r),o[e]||""}var t=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(t);t=goog.labs.userAgent.util.extractVersionTuples(t);var o={};goog.array.forEach(t,(function(e){o[e[0]]=e[1]}));var r=goog.partial(goog.object.containsKey,o);return goog.labs.userAgent.browser.isOpera()?e(["Version","Opera"]):goog.labs.userAgent.browser.isEdge()?e(["Edge"]):goog.labs.userAgent.browser.isEdgeChromium()?e(["Edg"]):goog.labs.userAgent.browser.isChrome()?e(["Chrome","CriOS"]):(t=t[2])&&t[1]||""},goog.labs.userAgent.browser.isVersionOrHigher=function(e){return 0<=goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(),e)},goog.labs.userAgent.browser.getIEVersion_=function(e){var t=/rv: *([\d\.]*)/.exec(e);if(t&&t[1])return t[1];t="";var o=/MSIE +([\d\.]+)/.exec(e);if(o&&o[1])if(e=/Trident\/(\d.\d)/.exec(e),"7.0"==o[1])if(e&&e[1])switch(e[1]){case"4.0":t="8.0";break;case"5.0":t="9.0";break;case"6.0":t="10.0";break;case"7.0":t="11.0"}else t="7.0";else t=o[1];return t},goog.html.SafeHtml=function(){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_="",this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_,this.dir_=null},goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.SafeHtml.prototype.getDirection=function(){return this.dir_},goog.html.SafeHtml.prototype.implementsGoogStringTypedString=!0,goog.html.SafeHtml.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()},goog.DEBUG&&(goog.html.SafeHtml.prototype.toString=function(){return"SafeHtml{"+this.privateDoNotAccessOrElseSafeHtmlWrappedValue_+"}"}),goog.html.SafeHtml.unwrap=function(e){return goog.html.SafeHtml.unwrapTrustedHTML(e).toString()},goog.html.SafeHtml.unwrapTrustedHTML=function(e){return e instanceof goog.html.SafeHtml&&e.constructor===goog.html.SafeHtml&&e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?e.privateDoNotAccessOrElseSafeHtmlWrappedValue_:(goog.asserts.fail("expected object of type SafeHtml, got '"+e+"' of type "+goog.typeOf(e)),"type_error:SafeHtml")},goog.html.SafeHtml.htmlEscape=function(e){if(e instanceof goog.html.SafeHtml)return e;var t="object"==typeof e,o=null;return t&&e.implementsGoogI18nBidiDirectionalString&&(o=e.getDirection()),e=t&&e.implementsGoogStringTypedString?e.getTypedStringValue():String(e),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(e),o)},goog.html.SafeHtml.htmlEscapePreservingNewlines=function(e){return e instanceof goog.html.SafeHtml?e:(e=goog.html.SafeHtml.htmlEscape(e),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(e)),e.getDirection()))},goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces=function(e){return e instanceof goog.html.SafeHtml?e:(e=goog.html.SafeHtml.htmlEscape(e),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(e)),e.getDirection()))},goog.html.SafeHtml.from=goog.html.SafeHtml.htmlEscape,goog.html.SafeHtml.VALID_NAMES_IN_TAG_=/^[a-zA-Z0-9-]+$/,goog.html.SafeHtml.URL_ATTRIBUTES_={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},goog.html.SafeHtml.create=function(e,t,o){return goog.html.SafeHtml.verifyTagName(String(e)),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(e),t,o)},goog.html.SafeHtml.verifyTagName=function(e){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e))throw Error("Invalid tag name <"+e+">.");if(e.toUpperCase()in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)throw Error("Tag name <"+e+"> is not allowed for SafeHtml.")},goog.html.SafeHtml.createIframe=function(e,t,o,r){e&&goog.html.TrustedResourceUrl.unwrap(e);var s={};return s.src=e||null,s.srcdoc=t&&goog.html.SafeHtml.unwrap(t),e=goog.html.SafeHtml.combineAttributes(s,{sandbox:""},o),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",e,r)},goog.html.SafeHtml.createSandboxIframe=function(e,t,o,r){if(!goog.html.SafeHtml.canUseSandboxIframe())throw Error("The browser does not support sandboxed iframes.");var s={};return s.src=e?goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)):null,s.srcdoc=t||null,s.sandbox="",e=goog.html.SafeHtml.combineAttributes(s,{},o),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",e,r)},goog.html.SafeHtml.canUseSandboxIframe=function(){return goog.global.HTMLIFrameElement&&"sandbox"in goog.global.HTMLIFrameElement.prototype},goog.html.SafeHtml.createScriptSrc=function(e,t){return goog.html.TrustedResourceUrl.unwrap(e),e=goog.html.SafeHtml.combineAttributes({src:e},{},t),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",e)},goog.html.SafeHtml.createScript=function(e,t){for(var o in t){var r=o.toLowerCase();if("language"==r||"src"==r||"text"==r||"type"==r)throw Error('Cannot set "'+r+'" attribute')}for(o="",e=goog.array.concat(e),r=0;r<e.length;r++)o+=goog.html.SafeScript.unwrap(e[r]);return e=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o,goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",t,e)},goog.html.SafeHtml.createStyle=function(e,t){t=goog.html.SafeHtml.combineAttributes({type:"text/css"},{},t);var o="";e=goog.array.concat(e);for(var r=0;r<e.length;r++)o+=goog.html.SafeStyleSheet.unwrap(e[r]);return e=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o,goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style",t,e)},goog.html.SafeHtml.createMetaRefresh=function(e,t){return e=goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)),(goog.labs.userAgent.browser.isIE()||goog.labs.userAgent.browser.isEdge())&&goog.string.internal.contains(e,";")&&(e="'"+e.replace(/'/g,"%27")+"'"),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta",{"http-equiv":"refresh",content:(t||0)+"; url="+e})},goog.html.SafeHtml.getAttrNameAndValue_=function(e,t,o){if(o instanceof goog.string.Const)o=goog.string.Const.unwrap(o);else if("style"==t.toLowerCase())o=goog.html.SafeHtml.getStyleValue_(o);else{if(/^on/i.test(t))throw Error('Attribute "'+t+'" requires goog.string.Const value, "'+o+'" given.');if(t.toLowerCase()in goog.html.SafeHtml.URL_ATTRIBUTES_)if(o instanceof goog.html.TrustedResourceUrl)o=goog.html.TrustedResourceUrl.unwrap(o);else if(o instanceof goog.html.SafeUrl)o=goog.html.SafeUrl.unwrap(o);else{if(!goog.isString(o))throw Error('Attribute "'+t+'" on tag "'+e+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+o+'" given.');o=goog.html.SafeUrl.sanitize(o).getTypedStringValue()}}return o.implementsGoogStringTypedString&&(o=o.getTypedStringValue()),goog.asserts.assert(goog.isString(o)||goog.isNumber(o),"String or number value expected, got "+typeof o+" with value: "+o),t+'="'+goog.string.internal.htmlEscape(String(o))+'"'},goog.html.SafeHtml.getStyleValue_=function(e){if(!goog.isObject(e))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof e+" given: "+e);return e instanceof goog.html.SafeStyle||(e=goog.html.SafeStyle.create(e)),goog.html.SafeStyle.unwrap(e)},goog.html.SafeHtml.createWithDir=function(e,t,o,r){return(t=goog.html.SafeHtml.create(t,o,r)).dir_=e,t},goog.html.SafeHtml.join=function(e,t){var o=(e=goog.html.SafeHtml.htmlEscape(e)).getDirection(),r=[],s=function(e){goog.isArray(e)?goog.array.forEach(e,s):(e=goog.html.SafeHtml.htmlEscape(e),r.push(goog.html.SafeHtml.unwrap(e)),e=e.getDirection(),o==goog.i18n.bidi.Dir.NEUTRAL?o=e:e!=goog.i18n.bidi.Dir.NEUTRAL&&o!=e&&(o=null))};return goog.array.forEach(t,s),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r.join(goog.html.SafeHtml.unwrap(e)),o)},goog.html.SafeHtml.concat=function(e){return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY,Array.prototype.slice.call(arguments))},goog.html.SafeHtml.concatWithDir=function(e,t){var o=goog.html.SafeHtml.concat(goog.array.slice(arguments,1));return o.dir_=e,o},goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse=function(e,t){return(new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(e,t)},goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_=function(e,t){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(e):e,this.dir_=t,this},goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse=function(e,t,o){var r=null,s="<"+e+goog.html.SafeHtml.stringifyAttributes(e,t);return goog.isDefAndNotNull(o)?goog.isArray(o)||(o=[o]):o=[],goog.dom.tags.isVoidTag(e.toLowerCase())?(goog.asserts.assert(!o.length,"Void tag <"+e+"> does not allow content."),s+=">"):(r=goog.html.SafeHtml.concat(o),s+=">"+goog.html.SafeHtml.unwrap(r)+"</"+e+">",r=r.getDirection()),(e=t&&t.dir)&&(r=/^(ltr|rtl|auto)$/i.test(e)?goog.i18n.bidi.Dir.NEUTRAL:null),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(s,r)},goog.html.SafeHtml.stringifyAttributes=function(e,t){var o="";if(t)for(var r in t){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r))throw Error('Invalid attribute name "'+r+'".');var s=t[r];goog.isDefAndNotNull(s)&&(o+=" "+goog.html.SafeHtml.getAttrNameAndValue_(e,r,s))}return o},goog.html.SafeHtml.combineAttributes=function(e,t,o){var r,s={};for(r in e)goog.asserts.assert(r.toLowerCase()==r,"Must be lower case"),s[r]=e[r];for(r in t)goog.asserts.assert(r.toLowerCase()==r,"Must be lower case"),s[r]=t[r];for(r in o){var n=r.toLowerCase();if(n in e)throw Error('Cannot override "'+n+'" attribute, got "'+r+'" with value "'+o[r]+'"');n in t&&delete s[n],s[r]=o[r]}return s},goog.html.SafeHtml.DOCTYPE_HTML=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>",goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.EMPTY=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("",goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.BR=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>",goog.i18n.bidi.Dir.NEUTRAL),goog.html.uncheckedconversions={},goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract=function(e,t,o){return goog.asserts.assertString(goog.string.Const.unwrap(e),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),"must provide non-empty justification"),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t,o||null)},goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract=function(e,t){return goog.asserts.assertString(goog.string.Const.unwrap(e),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),"must provide non-empty justification"),goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)},goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract=function(e,t){return goog.asserts.assertString(goog.string.Const.unwrap(e),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),"must provide non-empty justification"),goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t)},goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract=function(e,t){return goog.asserts.assertString(goog.string.Const.unwrap(e),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),"must provide non-empty justification"),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)},goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract=function(e,t){return goog.asserts.assertString(goog.string.Const.unwrap(e),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),"must provide non-empty justification"),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)},goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract=function(e,t){return goog.asserts.assertString(goog.string.Const.unwrap(e),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)),"must provide non-empty justification"),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)},goog.dom.asserts={},goog.dom.asserts.assertIsLocation=function(e){if(goog.asserts.ENABLE_ASSERTS){var t=goog.dom.asserts.getWindow_(e);t&&(!e||!(e instanceof t.Location)&&e instanceof t.Element)&&goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s",goog.dom.asserts.debugStringForType_(e))}return e},goog.dom.asserts.assertIsElementType_=function(e,t){if(goog.asserts.ENABLE_ASSERTS){var o=goog.dom.asserts.getWindow_(e);o&&void 0!==o[t]&&(e&&(e instanceof o[t]||!(e instanceof o.Location||e instanceof o.Element))||goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s",t,goog.dom.asserts.debugStringForType_(e)))}return e},goog.dom.asserts.assertIsHTMLAnchorElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLAnchorElement")},goog.dom.asserts.assertIsHTMLButtonElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLButtonElement")},goog.dom.asserts.assertIsHTMLLinkElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLLinkElement")},goog.dom.asserts.assertIsHTMLImageElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLImageElement")},goog.dom.asserts.assertIsHTMLAudioElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLAudioElement")},goog.dom.asserts.assertIsHTMLVideoElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLVideoElement")},goog.dom.asserts.assertIsHTMLInputElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLInputElement")},goog.dom.asserts.assertIsHTMLTextAreaElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLTextAreaElement")},goog.dom.asserts.assertIsHTMLCanvasElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLCanvasElement")},goog.dom.asserts.assertIsHTMLEmbedElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLEmbedElement")},goog.dom.asserts.assertIsHTMLFormElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLFormElement")},goog.dom.asserts.assertIsHTMLFrameElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLFrameElement")},goog.dom.asserts.assertIsHTMLIFrameElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLIFrameElement")},goog.dom.asserts.assertIsHTMLObjectElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLObjectElement")},goog.dom.asserts.assertIsHTMLScriptElement=function(e){return goog.dom.asserts.assertIsElementType_(e,"HTMLScriptElement")},goog.dom.asserts.debugStringForType_=function(e){if(!goog.isObject(e))return void 0===e?"undefined":null===e?"null":typeof e;try{return e.constructor.displayName||e.constructor.name||Object.prototype.toString.call(e)}catch(e){return"<object could not be stringified>"}},goog.dom.asserts.getWindow_=function(e){try{var t=e&&e.ownerDocument,o=t&&(t.defaultView||t.parentWindow);if((o=o||goog.global).Element&&o.Location)return o}catch(e){}return null},goog.functions={},goog.functions.constant=function(e){return function(){return e}},goog.functions.FALSE=function(){return!1},goog.functions.TRUE=function(){return!0},goog.functions.NULL=function(){return null},goog.functions.identity=function(e,t){return e},goog.functions.error=function(e){return function(){throw Error(e)}},goog.functions.fail=function(e){return function(){throw e}},goog.functions.lock=function(e,t){return t=t||0,function(){return e.apply(this,Array.prototype.slice.call(arguments,0,t))}},goog.functions.nth=function(e){return function(){return arguments[e]}},goog.functions.partialRight=function(e,t){var o=Array.prototype.slice.call(arguments,1);return function(){var t=Array.prototype.slice.call(arguments);return t.push.apply(t,o),e.apply(this,t)}},goog.functions.withReturnValue=function(e,t){return goog.functions.sequence(e,goog.functions.constant(t))},goog.functions.equalTo=function(e,t){return function(o){return t?e==o:e===o}},goog.functions.compose=function(e,t){var o=arguments,r=o.length;return function(){var e;r&&(e=o[r-1].apply(this,arguments));for(var t=r-2;0<=t;t--)e=o[t].call(this,e);return e}},goog.functions.sequence=function(e){var t=arguments,o=t.length;return function(){for(var e,r=0;r<o;r++)e=t[r].apply(this,arguments);return e}},goog.functions.and=function(e){var t=arguments,o=t.length;return function(){for(var e=0;e<o;e++)if(!t[e].apply(this,arguments))return!1;return!0}},goog.functions.or=function(e){var t=arguments,o=t.length;return function(){for(var e=0;e<o;e++)if(t[e].apply(this,arguments))return!0;return!1}},goog.functions.not=function(e){return function(){return!e.apply(this,arguments)}},goog.functions.create=function(e,t){var o=function(){};return o.prototype=e.prototype,o=new o,e.apply(o,Array.prototype.slice.call(arguments,1)),o},goog.functions.CACHE_RETURN_VALUE=!0,goog.functions.cacheReturnValue=function(e){var t,o=!1;return function(){return goog.functions.CACHE_RETURN_VALUE?(o||(t=e(),o=!0),t):e()}},goog.functions.once=function(e){var t=e;return function(){if(t){var e=t;t=null,e()}}},goog.functions.debounce=function(e,t,o){var r=0;return function(s){goog.global.clearTimeout(r);var n=arguments;r=goog.global.setTimeout((function(){e.apply(o,n)}),t)}},goog.functions.throttle=function(e,t,o){var r=0,s=!1,n=[],i=function(){r=0,s&&(s=!1,a())},a=function(){r=goog.global.setTimeout(i,t),e.apply(o,n)};return function(e){n=arguments,r?s=!0:a()}},goog.functions.rateLimit=function(e,t,o){var r=0,s=function(){r=0};return function(n){r||(r=goog.global.setTimeout(s,t),e.apply(o,arguments))}},goog.dom.safe={},goog.dom.safe.InsertAdjacentHtmlPosition={AFTERBEGIN:"afterbegin",AFTEREND:"afterend",BEFOREBEGIN:"beforebegin",BEFOREEND:"beforeend"},goog.dom.safe.insertAdjacentHtml=function(e,t,o){e.insertAdjacentHTML(t,goog.html.SafeHtml.unwrapTrustedHTML(o))},goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},goog.dom.safe.isInnerHtmlCleanupRecursive_=goog.functions.cacheReturnValue((function(){if(goog.DEBUG&&"undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!(goog.DEBUG&&!e.firstChild)&&(t=e.firstChild.firstChild,e.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY),!t.parentElement)})),goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse=function(e,t){if(goog.dom.safe.isInnerHtmlCleanupRecursive_())for(;e.lastChild;)e.removeChild(e.lastChild);e.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(t)},goog.dom.safe.setInnerHtml=function(e,t){if(goog.asserts.ENABLE_ASSERTS){var o=e.tagName.toUpperCase();if(goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+e.tagName+".")}goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e,t)},goog.dom.safe.setOuterHtml=function(e,t){e.outerHTML=goog.html.SafeHtml.unwrapTrustedHTML(t)},goog.dom.safe.setFormElementAction=function(e,t){t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),goog.dom.asserts.assertIsHTMLFormElement(e).action=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.setButtonFormAction=function(e,t){t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),goog.dom.asserts.assertIsHTMLButtonElement(e).formAction=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.setInputFormAction=function(e,t){t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),goog.dom.asserts.assertIsHTMLInputElement(e).formAction=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.setStyle=function(e,t){e.style.cssText=goog.html.SafeStyle.unwrap(t)},goog.dom.safe.documentWrite=function(e,t){e.write(goog.html.SafeHtml.unwrapTrustedHTML(t))},goog.dom.safe.setAnchorHref=function(e,t){goog.dom.asserts.assertIsHTMLAnchorElement(e),t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),e.href=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.setImageSrc=function(e,t){if(goog.dom.asserts.assertIsHTMLImageElement(e),!(t instanceof goog.html.SafeUrl)){var o=/^data:image\//i.test(t);t=goog.html.SafeUrl.sanitizeAssertUnchanged(t,o)}e.src=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.setAudioSrc=function(e,t){if(goog.dom.asserts.assertIsHTMLAudioElement(e),!(t instanceof goog.html.SafeUrl)){var o=/^data:audio\//i.test(t);t=goog.html.SafeUrl.sanitizeAssertUnchanged(t,o)}e.src=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.setVideoSrc=function(e,t){if(goog.dom.asserts.assertIsHTMLVideoElement(e),!(t instanceof goog.html.SafeUrl)){var o=/^data:video\//i.test(t);t=goog.html.SafeUrl.sanitizeAssertUnchanged(t,o)}e.src=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.setEmbedSrc=function(e,t){goog.dom.asserts.assertIsHTMLEmbedElement(e),e.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)},goog.dom.safe.setFrameSrc=function(e,t){goog.dom.asserts.assertIsHTMLFrameElement(e),e.src=goog.html.TrustedResourceUrl.unwrapTrustedURL(t)},goog.dom.safe.setIframeSrc=function(e,t){goog.dom.asserts.assertIsHTMLIFrameElement(e),e.src=goog.html.TrustedResourceUrl.unwrapTrustedURL(t)},goog.dom.safe.setIframeSrcdoc=function(e,t){goog.dom.asserts.assertIsHTMLIFrameElement(e),e.srcdoc=goog.html.SafeHtml.unwrapTrustedHTML(t)},goog.dom.safe.setLinkHrefAndRel=function(e,t,o){goog.dom.asserts.assertIsHTMLLinkElement(e),e.rel=o,goog.string.internal.caseInsensitiveContains(o,"stylesheet")?(goog.asserts.assert(t instanceof goog.html.TrustedResourceUrl,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),e.href=goog.html.TrustedResourceUrl.unwrapTrustedURL(t)):e.href=t instanceof goog.html.TrustedResourceUrl?goog.html.TrustedResourceUrl.unwrapTrustedURL(t):t instanceof goog.html.SafeUrl?goog.html.SafeUrl.unwrapTrustedURL(t):goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(t))},goog.dom.safe.setObjectData=function(e,t){goog.dom.asserts.assertIsHTMLObjectElement(e),e.data=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)},goog.dom.safe.setScriptSrc=function(e,t){goog.dom.asserts.assertIsHTMLScriptElement(e),e.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t),(t=goog.getScriptNonce())&&e.setAttribute("nonce",t)},goog.dom.safe.setScriptContent=function(e,t){goog.dom.asserts.assertIsHTMLScriptElement(e),e.text=goog.html.SafeScript.unwrapTrustedScript(t),(t=goog.getScriptNonce())&&e.setAttribute("nonce",t)},goog.dom.safe.setLocationHref=function(e,t){goog.dom.asserts.assertIsLocation(e),t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),e.href=goog.html.SafeUrl.unwrapTrustedURL(t)},goog.dom.safe.assignLocation=function(e,t){goog.dom.asserts.assertIsLocation(e),t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),e.assign(goog.html.SafeUrl.unwrapTrustedURL(t))},goog.dom.safe.replaceLocation=function(e,t){goog.dom.asserts.assertIsLocation(e),t=t instanceof goog.html.SafeUrl?t:goog.html.SafeUrl.sanitizeAssertUnchanged(t),e.replace(goog.html.SafeUrl.unwrapTrustedURL(t))},goog.dom.safe.openInWindow=function(e,t,o,r,s){return e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),(t||goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(e),o?goog.string.Const.unwrap(o):"",r,s)},goog.dom.safe.parseFromStringHtml=function(e,t){return goog.dom.safe.parseFromString(e,t,"text/html")},goog.dom.safe.parseFromString=function(e,t,o){return e.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(t),o)},goog.dom.safe.createImageFromBlob=function(e){if(!/^image\/.*/g.test(e.type))throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");var t=goog.global.URL.createObjectURL(e);return(e=new goog.global.Image).onload=function(){goog.global.URL.revokeObjectURL(t)},goog.dom.safe.setImageSrc(e,goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."),t)),e},goog.string.DETECT_DOUBLE_ESCAPING=!1,goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1,goog.string.Unicode={NBSP:" "},goog.string.startsWith=goog.string.internal.startsWith,goog.string.endsWith=goog.string.internal.endsWith,goog.string.caseInsensitiveStartsWith=goog.string.internal.caseInsensitiveStartsWith,goog.string.caseInsensitiveEndsWith=goog.string.internal.caseInsensitiveEndsWith,goog.string.caseInsensitiveEquals=goog.string.internal.caseInsensitiveEquals,goog.string.subs=function(e,t){for(var o=e.split("%s"),r="",s=Array.prototype.slice.call(arguments,1);s.length&&1<o.length;)r+=o.shift()+s.shift();return r+o.join("%s")},goog.string.collapseWhitespace=function(e){return e.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},goog.string.isEmptyOrWhitespace=goog.string.internal.isEmptyOrWhitespace,goog.string.isEmptyString=function(e){return 0==e.length},goog.string.isEmpty=goog.string.isEmptyOrWhitespace,goog.string.isEmptyOrWhitespaceSafe=function(e){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))},goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe,goog.string.isBreakingWhitespace=function(e){return!/[^\t\n\r ]/.test(e)},goog.string.isAlpha=function(e){return!/[^a-zA-Z]/.test(e)},goog.string.isNumeric=function(e){return!/[^0-9]/.test(e)},goog.string.isAlphaNumeric=function(e){return!/[^a-zA-Z0-9]/.test(e)},goog.string.isSpace=function(e){return" "==e},goog.string.isUnicodeChar=function(e){return 1==e.length&&" "<=e&&"~">=e||""<=e&&"�">=e},goog.string.stripNewlines=function(e){return e.replace(/(\r\n|\r|\n)+/g," ")},goog.string.canonicalizeNewlines=function(e){return e.replace(/(\r\n|\r|\n)/g,"\n")},goog.string.normalizeWhitespace=function(e){return e.replace(/\xa0|\s/g," ")},goog.string.normalizeSpaces=function(e){return e.replace(/\xa0|[ \t]+/g," ")},goog.string.collapseBreakingSpaces=function(e){return e.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")},goog.string.trim=goog.string.internal.trim,goog.string.trimLeft=function(e){return e.replace(/^[\s\xa0]+/,"")},goog.string.trimRight=function(e){return e.replace(/[\s\xa0]+$/,"")},goog.string.caseInsensitiveCompare=goog.string.internal.caseInsensitiveCompare,goog.string.numberAwareCompare_=function(e,t,o){if(e==t)return 0;if(!e)return-1;if(!t)return 1;for(var r=e.toLowerCase().match(o),s=t.toLowerCase().match(o),n=Math.min(r.length,s.length),i=0;i<n;i++){o=r[i];var a=s[i];if(o!=a)return e=parseInt(o,10),!isNaN(e)&&(t=parseInt(a,10),!isNaN(t)&&e-t)?e-t:o<a?-1:1}return r.length!=s.length?r.length-s.length:e<t?-1:1},goog.string.intAwareCompare=function(e,t){return goog.string.numberAwareCompare_(e,t,/\d+|\D+/g)},goog.string.floatAwareCompare=function(e,t){return goog.string.numberAwareCompare_(e,t,/\d+|\.\d+|\D+/g)},goog.string.numerateCompare=goog.string.floatAwareCompare,goog.string.urlEncode=function(e){return encodeURIComponent(String(e))},goog.string.urlDecode=function(e){return decodeURIComponent(e.replace(/\+/g," "))},goog.string.newLineToBr=goog.string.internal.newLineToBr,goog.string.htmlEscape=function(e,t){return e=goog.string.internal.htmlEscape(e,t),goog.string.DETECT_DOUBLE_ESCAPING&&(e=e.replace(goog.string.E_RE_,"&#101;")),e},goog.string.E_RE_=/e/g,goog.string.unescapeEntities=function(e){return goog.string.contains(e,"&")?!goog.string.FORCE_NON_DOM_HTML_UNESCAPING&&"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(e):goog.string.unescapePureXmlEntities_(e):e},goog.string.unescapeEntitiesWithDocument=function(e,t){return goog.string.contains(e,"&")?goog.string.unescapeEntitiesUsingDom_(e,t):e},goog.string.unescapeEntitiesUsingDom_=function(e,t){var o={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},r=t?t.createElement("div"):goog.global.document.createElement("div");return e.replace(goog.string.HTML_ENTITY_PATTERN_,(function(e,t){var s=o[e];return s||("#"==t.charAt(0)&&(t=Number("0"+t.substr(1)),isNaN(t)||(s=String.fromCharCode(t))),s||(goog.dom.safe.setInnerHtml(r,goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."),e+" ")),s=r.firstChild.nodeValue.slice(0,-1)),o[e]=s)}))},goog.string.unescapePureXmlEntities_=function(e){return e.replace(/&([^;]+);/g,(function(e,t){switch(t){case"amp":return"&";case"lt":return"<";case"gt":return">";case"quot":return'"';default:return"#"!=t.charAt(0)||(t=Number("0"+t.substr(1)),isNaN(t))?e:String.fromCharCode(t)}}))},goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g,goog.string.whitespaceEscape=function(e,t){return goog.string.newLineToBr(e.replace(/  /g," &#160;"),t)},goog.string.preserveSpaces=function(e){return e.replace(/(^|[\n ]) /g,"$1"+goog.string.Unicode.NBSP)},goog.string.stripQuotes=function(e,t){for(var o=t.length,r=0;r<o;r++){var s=1==o?t:t.charAt(r);if(e.charAt(0)==s&&e.charAt(e.length-1)==s)return e.substring(1,e.length-1)}return e},goog.string.truncate=function(e,t,o){return o&&(e=goog.string.unescapeEntities(e)),e.length>t&&(e=e.substring(0,t-3)+"..."),o&&(e=goog.string.htmlEscape(e)),e},goog.string.truncateMiddle=function(e,t,o,r){if(o&&(e=goog.string.unescapeEntities(e)),r&&e.length>t){r>t&&(r=t);var s=e.length-r;e=e.substring(0,t-r)+"..."+e.substring(s)}else e.length>t&&(r=Math.floor(t/2),s=e.length-r,e=e.substring(0,r+t%2)+"..."+e.substring(s));return o&&(e=goog.string.htmlEscape(e)),e},goog.string.specialEscapeChars_={"\0":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},goog.string.jsEscapeCache_={"'":"\\'"},goog.string.quote=function(e){e=String(e);for(var t=['"'],o=0;o<e.length;o++){var r=e.charAt(o),s=r.charCodeAt(0);t[o+1]=goog.string.specialEscapeChars_[r]||(31<s&&127>s?r:goog.string.escapeChar(r))}return t.push('"'),t.join("")},goog.string.escapeString=function(e){for(var t=[],o=0;o<e.length;o++)t[o]=goog.string.escapeChar(e.charAt(o));return t.join("")},goog.string.escapeChar=function(e){if(e in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[e];if(e in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[e]=goog.string.specialEscapeChars_[e];var t=e.charCodeAt(0);if(31<t&&127>t)var o=e;else 256>t?(o="\\x",(16>t||256<t)&&(o+="0")):(o="\\u",4096>t&&(o+="0")),o+=t.toString(16).toUpperCase();return goog.string.jsEscapeCache_[e]=o},goog.string.contains=goog.string.internal.contains,goog.string.caseInsensitiveContains=goog.string.internal.caseInsensitiveContains,goog.string.countOf=function(e,t){return e&&t?e.split(t).length-1:0},goog.string.removeAt=function(e,t,o){var r=e;return 0<=t&&t<e.length&&0<o&&(r=e.substr(0,t)+e.substr(t+o,e.length-t-o)),r},goog.string.remove=function(e,t){return e.replace(t,"")},goog.string.removeAll=function(e,t){return t=new RegExp(goog.string.regExpEscape(t),"g"),e.replace(t,"")},goog.string.replaceAll=function(e,t,o){return t=new RegExp(goog.string.regExpEscape(t),"g"),e.replace(t,o.replace(/\$/g,"$$$$"))},goog.string.regExpEscape=function(e){return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},goog.string.repeat=String.prototype.repeat?function(e,t){return e.repeat(t)}:function(e,t){return Array(t+1).join(e)},goog.string.padNumber=function(e,t,o){return-1==(o=(e=goog.isDef(o)?e.toFixed(o):String(e)).indexOf("."))&&(o=e.length),goog.string.repeat("0",Math.max(0,t-o))+e},goog.string.makeSafe=function(e){return null==e?"":String(e)},goog.string.buildString=function(e){return Array.prototype.join.call(arguments,"")},goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)},goog.string.compareVersions=goog.string.internal.compareVersions,goog.string.hashCode=function(e){for(var t=0,o=0;o<e.length;++o)t=31*t+e.charCodeAt(o)>>>0;return t},goog.string.uniqueStringCounter_=2147483648*Math.random()|0,goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++},goog.string.toNumber=function(e){var t=Number(e);return 0==t&&goog.string.isEmptyOrWhitespace(e)?NaN:t},goog.string.isLowerCamelCase=function(e){return/^[a-z]+([A-Z][a-z]*)*$/.test(e)},goog.string.isUpperCamelCase=function(e){return/^([A-Z][a-z]*)+$/.test(e)},goog.string.toCamelCase=function(e){return String(e).replace(/\-([a-z])/g,(function(e,t){return t.toUpperCase()}))},goog.string.toSelectorCase=function(e){return String(e).replace(/([A-Z])/g,"-$1").toLowerCase()},goog.string.toTitleCase=function(e,t){return t=goog.isString(t)?goog.string.regExpEscape(t):"\\s",e.replace(new RegExp("(^"+(t?"|["+t+"]+":"")+")([a-z])","g"),(function(e,t,o){return t+o.toUpperCase()}))},goog.string.capitalize=function(e){return String(e.charAt(0)).toUpperCase()+String(e.substr(1)).toLowerCase()},goog.string.parseInt=function(e){return isFinite(e)&&(e=String(e)),goog.isString(e)?/^\s*-?0x/i.test(e)?parseInt(e,16):parseInt(e,10):NaN},goog.string.splitLimit=function(e,t,o){e=e.split(t);for(var r=[];0<o&&e.length;)r.push(e.shift()),o--;return e.length&&r.push(e.join(t)),r},goog.string.lastComponent=function(e,t){if(!t)return e;"string"==typeof t&&(t=[t]);for(var o=-1,r=0;r<t.length;r++)if(""!=t[r]){var s=e.lastIndexOf(t[r]);s>o&&(o=s)}return-1==o?e:e.slice(o+1)},goog.string.editDistance=function(e,t){var o=[],r=[];if(e==t)return 0;if(!e.length||!t.length)return Math.max(e.length,t.length);for(var s=0;s<t.length+1;s++)o[s]=s;for(s=0;s<e.length;s++){r[0]=s+1;for(var n=0;n<t.length;n++)r[n+1]=Math.min(r[n]+1,o[n+1]+1,o[n]+Number(e[s]!=t[n]));for(n=0;n<o.length;n++)o[n]=r[n]}return r[t.length]},goog.labs.userAgent.platform={},goog.labs.userAgent.platform.isAndroid=function(){return goog.labs.userAgent.util.matchUserAgent("Android")},goog.labs.userAgent.platform.isIpod=function(){return goog.labs.userAgent.util.matchUserAgent("iPod")},goog.labs.userAgent.platform.isIphone=function(){return goog.labs.userAgent.util.matchUserAgent("iPhone")&&!goog.labs.userAgent.util.matchUserAgent("iPod")&&!goog.labs.userAgent.util.matchUserAgent("iPad")},goog.labs.userAgent.platform.isIpad=function(){return goog.labs.userAgent.util.matchUserAgent("iPad")},goog.labs.userAgent.platform.isIos=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpad()||goog.labs.userAgent.platform.isIpod()},goog.labs.userAgent.platform.isMacintosh=function(){return goog.labs.userAgent.util.matchUserAgent("Macintosh")},goog.labs.userAgent.platform.isLinux=function(){return goog.labs.userAgent.util.matchUserAgent("Linux")},goog.labs.userAgent.platform.isWindows=function(){return goog.labs.userAgent.util.matchUserAgent("Windows")},goog.labs.userAgent.platform.isChromeOS=function(){return goog.labs.userAgent.util.matchUserAgent("CrOS")},goog.labs.userAgent.platform.isChromecast=function(){return goog.labs.userAgent.util.matchUserAgent("CrKey")},goog.labs.userAgent.platform.isKaiOS=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")},goog.labs.userAgent.platform.isGo2Phone=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP")},goog.labs.userAgent.platform.getVersion=function(){var e=goog.labs.userAgent.util.getUserAgent(),t="";return goog.labs.userAgent.platform.isWindows()?t=(e=(t=/Windows (?:NT|Phone) ([0-9.]+)/).exec(e))?e[1]:"0.0":goog.labs.userAgent.platform.isIos()?t=(e=(t=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e))&&e[1].replace(/_/g,"."):goog.labs.userAgent.platform.isMacintosh()?t=(e=(t=/Mac OS X ([0-9_.]+)/).exec(e))?e[1].replace(/_/g,"."):"10":goog.labs.userAgent.platform.isKaiOS()?t=(e=(t=/(?:KaiOS)\/(\S+)/i).exec(e))&&e[1]:goog.labs.userAgent.platform.isAndroid()?t=(e=(t=/Android\s+([^\);]+)(\)|;)/).exec(e))&&e[1]:goog.labs.userAgent.platform.isChromeOS()&&(t=(e=(t=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e))&&e[1]),t||""},goog.labs.userAgent.platform.isVersionOrHigher=function(e){return 0<=goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(),e)},goog.reflect={},goog.reflect.object=function(e,t){return t},goog.reflect.objectProperty=function(e,t){return e},goog.reflect.sinkValue=function(e){return goog.reflect.sinkValue[" "](e),e},goog.reflect.sinkValue[" "]=goog.nullFunction,goog.reflect.canAccessProperty=function(e,t){try{return goog.reflect.sinkValue(e[t]),!0}catch(e){}return!1},goog.reflect.cache=function(e,t,o,r){return r=r?r(t):t,Object.prototype.hasOwnProperty.call(e,r)?e[r]:e[r]=o(t)},goog.labs.userAgent.engine={},goog.labs.userAgent.engine.isPresto=function(){return goog.labs.userAgent.util.matchUserAgent("Presto")},goog.labs.userAgent.engine.isTrident=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")},goog.labs.userAgent.engine.isEdge=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")},goog.labs.userAgent.engine.isWebKit=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")&&!goog.labs.userAgent.engine.isEdge()},goog.labs.userAgent.engine.isGecko=function(){return goog.labs.userAgent.util.matchUserAgent("Gecko")&&!goog.labs.userAgent.engine.isWebKit()&&!goog.labs.userAgent.engine.isTrident()&&!goog.labs.userAgent.engine.isEdge()},goog.labs.userAgent.engine.getVersion=function(){var e=goog.labs.userAgent.util.getUserAgent();if(e){e=goog.labs.userAgent.util.extractVersionTuples(e);var t,o=goog.labs.userAgent.engine.getEngineTuple_(e);if(o)return"Gecko"==o[0]?goog.labs.userAgent.engine.getVersionForKey_(e,"Firefox"):o[1];if((e=e[0])&&(t=e[2])&&(t=/Trident\/([^\s;]+)/.exec(t)))return t[1]}return""},goog.labs.userAgent.engine.getEngineTuple_=function(e){if(!goog.labs.userAgent.engine.isEdge())return e[1];for(var t=0;t<e.length;t++){var o=e[t];if("Edge"==o[0])return o}},goog.labs.userAgent.engine.isVersionOrHigher=function(e){return 0<=goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(),e)},goog.labs.userAgent.engine.getVersionForKey_=function(e,t){return(e=goog.array.find(e,(function(e){return t==e[0]})))&&e[1]||""},goog.userAgent={},goog.userAgent.ASSUME_IE=!1,goog.userAgent.ASSUME_EDGE=!1,goog.userAgent.ASSUME_GECKO=!1,goog.userAgent.ASSUME_WEBKIT=!1,goog.userAgent.ASSUME_MOBILE_WEBKIT=!1,goog.userAgent.ASSUME_OPERA=!1,goog.userAgent.ASSUME_ANY_VERSION=!1,goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA,goog.userAgent.getUserAgentString=function(){return goog.labs.userAgent.util.getUserAgent()},goog.userAgent.getNavigatorTyped=function(){return goog.global.navigator||null},goog.userAgent.getNavigator=function(){return goog.userAgent.getNavigatorTyped()},goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.labs.userAgent.browser.isOpera(),goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.labs.userAgent.browser.isIE(),goog.userAgent.EDGE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_EDGE:goog.labs.userAgent.engine.isEdge(),goog.userAgent.EDGE_OR_IE=goog.userAgent.EDGE||goog.userAgent.IE,goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.labs.userAgent.engine.isGecko();goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.labs.userAgent.engine.isWebKit(),goog.userAgent.isMobile_=function(){return goog.userAgent.WEBKIT&&goog.labs.userAgent.util.matchUserAgent("Mobile")},goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.isMobile_(),goog.userAgent.SAFARI=goog.userAgent.WEBKIT,goog.userAgent.determinePlatform_=function(){var e=goog.userAgent.getNavigatorTyped();return e&&e.platform||""},goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_(),goog.userAgent.ASSUME_MAC=!1,goog.userAgent.ASSUME_WINDOWS=!1,goog.userAgent.ASSUME_LINUX=!1,goog.userAgent.ASSUME_X11=!1,goog.userAgent.ASSUME_ANDROID=!1,goog.userAgent.ASSUME_IPHONE=!1,goog.userAgent.ASSUME_IPAD=!1,goog.userAgent.ASSUME_IPOD=!1,goog.userAgent.ASSUME_KAIOS=!1,goog.userAgent.ASSUME_GO2PHONE=!1,goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD,goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.labs.userAgent.platform.isMacintosh(),goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.labs.userAgent.platform.isWindows(),goog.userAgent.isLegacyLinux_=function(){return goog.labs.userAgent.platform.isLinux()||goog.labs.userAgent.platform.isChromeOS()},goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.isLegacyLinux_(),goog.userAgent.isX11_=function(){var e=goog.userAgent.getNavigatorTyped();return!!e&&goog.string.contains(e.appVersion||"","X11")},goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.isX11_(),goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.labs.userAgent.platform.isAndroid(),goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.labs.userAgent.platform.isIphone(),goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad(),goog.userAgent.IPOD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIpod(),goog.userAgent.IOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD||goog.userAgent.ASSUME_IPOD:goog.labs.userAgent.platform.isIos(),goog.userAgent.KAIOS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_KAIOS:goog.labs.userAgent.platform.isKaiOS(),goog.userAgent.GO2PHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_GO2PHONE:goog.labs.userAgent.platform.isGo2Phone(),goog.userAgent.determineVersion_=function(){var e="",t=goog.userAgent.getVersionRegexResult_();return t&&(e=t?t[1]:""),goog.userAgent.IE&&(null!=(t=goog.userAgent.getDocumentMode_())&&t>parseFloat(e))?String(t):e},goog.userAgent.getVersionRegexResult_=function(){var e=goog.userAgent.getUserAgentString();return goog.userAgent.GECKO?/rv:([^\);]+)(\)|;)/.exec(e):goog.userAgent.EDGE?/Edge\/([\d\.]+)/.exec(e):goog.userAgent.IE?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):goog.userAgent.WEBKIT?/WebKit\/(\S+)/.exec(e):goog.userAgent.OPERA?/(?:Version)[ \/]?(\S+)/.exec(e):void 0},goog.userAgent.getDocumentMode_=function(){var e=goog.global.document;return e?e.documentMode:void 0},goog.userAgent.VERSION=goog.userAgent.determineVersion_(),goog.userAgent.compare=function(e,t){return goog.string.compareVersions(e,t)},goog.userAgent.isVersionOrHigherCache_={},goog.userAgent.isVersionOrHigher=function(e){return goog.userAgent.ASSUME_ANY_VERSION||goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_,e,(function(){return 0<=goog.string.compareVersions(goog.userAgent.VERSION,e)}))},goog.userAgent.isVersion=goog.userAgent.isVersionOrHigher,goog.userAgent.isDocumentModeOrHigher=function(e){return Number(goog.userAgent.DOCUMENT_MODE)>=e},goog.userAgent.isDocumentMode=goog.userAgent.isDocumentModeOrHigher,goog.userAgent.DOCUMENT_MODE=function(){if(goog.global.document&&goog.userAgent.IE)return goog.userAgent.getDocumentMode_()}(),goog.userAgent.product={},goog.userAgent.product.ASSUME_FIREFOX=!1,goog.userAgent.product.ASSUME_IPHONE=!1,goog.userAgent.product.ASSUME_IPAD=!1,goog.userAgent.product.ASSUME_ANDROID=!1,goog.userAgent.product.ASSUME_CHROME=!1,goog.userAgent.product.ASSUME_SAFARI=!1,goog.userAgent.product.PRODUCT_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_EDGE||goog.userAgent.ASSUME_OPERA||goog.userAgent.product.ASSUME_FIREFOX||goog.userAgent.product.ASSUME_IPHONE||goog.userAgent.product.ASSUME_IPAD||goog.userAgent.product.ASSUME_ANDROID||goog.userAgent.product.ASSUME_CHROME||goog.userAgent.product.ASSUME_SAFARI,goog.userAgent.product.OPERA=goog.userAgent.OPERA,goog.userAgent.product.IE=goog.userAgent.IE,goog.userAgent.product.EDGE=goog.userAgent.EDGE,goog.userAgent.product.FIREFOX=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_FIREFOX:goog.labs.userAgent.browser.isFirefox(),goog.userAgent.product.isIphoneOrIpod_=function(){return goog.labs.userAgent.platform.isIphone()||goog.labs.userAgent.platform.isIpod()},goog.userAgent.product.IPHONE=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPHONE:goog.userAgent.product.isIphoneOrIpod_(),goog.userAgent.product.IPAD=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_IPAD:goog.labs.userAgent.platform.isIpad(),goog.userAgent.product.ANDROID=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_ANDROID:goog.labs.userAgent.browser.isAndroidBrowser(),goog.userAgent.product.CHROME=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_CHROME:goog.labs.userAgent.browser.isChrome(),goog.userAgent.product.isSafariDesktop_=function(){return goog.labs.userAgent.browser.isSafari()&&!goog.labs.userAgent.platform.isIos()},goog.userAgent.product.SAFARI=goog.userAgent.product.PRODUCT_KNOWN_?goog.userAgent.product.ASSUME_SAFARI:goog.userAgent.product.isSafariDesktop_(),goog.crypt.base64={},goog.crypt.base64.DEFAULT_ALPHABET_COMMON_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",goog.crypt.base64.ENCODED_VALS=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"+/=",goog.crypt.base64.ENCODED_VALS_WEBSAFE=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_+"-_.",goog.crypt.base64.Alphabet={DEFAULT:0,NO_PADDING:1,WEBSAFE:2,WEBSAFE_DOT_PADDING:3,WEBSAFE_NO_PADDING:4},goog.crypt.base64.paddingChars_="=.",goog.crypt.base64.isPadding_=function(e){return goog.string.contains(goog.crypt.base64.paddingChars_,e)},goog.crypt.base64.byteToCharMaps_={},goog.crypt.base64.charToByteMap_=null,goog.crypt.base64.ASSUME_NATIVE_SUPPORT_=goog.userAgent.GECKO||goog.userAgent.WEBKIT&&!goog.userAgent.product.SAFARI||goog.userAgent.OPERA,goog.crypt.base64.HAS_NATIVE_ENCODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||"function"==typeof goog.global.btoa,goog.crypt.base64.HAS_NATIVE_DECODE_=goog.crypt.base64.ASSUME_NATIVE_SUPPORT_||!goog.userAgent.product.SAFARI&&!goog.userAgent.IE&&"function"==typeof goog.global.atob,goog.crypt.base64.encodeByteArray=function(e,t){goog.asserts.assert(goog.isArrayLike(e),"encodeByteArray takes an array as a parameter"),void 0===t&&(t=goog.crypt.base64.Alphabet.DEFAULT),goog.crypt.base64.init_(),t=goog.crypt.base64.byteToCharMaps_[t];for(var o=[],r=0;r<e.length;r+=3){var s=e[r],n=r+1<e.length,i=n?e[r+1]:0,a=r+2<e.length,g=a?e[r+2]:0,l=s>>2;s=(3&s)<<4|i>>4,i=(15&i)<<2|g>>6,g&=63,a||(g=64,n||(i=64)),o.push(t[l],t[s],t[i]||"",t[g]||"")}return o.join("")},goog.crypt.base64.encodeString=function(e,t){return goog.crypt.base64.HAS_NATIVE_ENCODE_&&!t?goog.global.btoa(e):goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e),t)},goog.crypt.base64.decodeString=function(e,t){if(goog.crypt.base64.HAS_NATIVE_DECODE_&&!t)return goog.global.atob(e);var o="";return goog.crypt.base64.decodeStringInternal_(e,(function(e){o+=String.fromCharCode(e)})),o},goog.crypt.base64.decodeStringToByteArray=function(e,t){var o=[];return goog.crypt.base64.decodeStringInternal_(e,(function(e){o.push(e)})),o},goog.crypt.base64.decodeStringToUint8Array=function(e){goog.asserts.assert(!goog.userAgent.IE||goog.userAgent.isVersionOrHigher("10"),"Browser does not support typed arrays");var t=e.length,o=3*t/4;o%3?o=Math.floor(o):goog.crypt.base64.isPadding_(e[t-1])&&(o=goog.crypt.base64.isPadding_(e[t-2])?o-2:o-1);var r=new Uint8Array(o),s=0;return goog.crypt.base64.decodeStringInternal_(e,(function(e){r[s++]=e})),r.subarray(0,s)},goog.crypt.base64.decodeStringInternal_=function(e,t){function o(t){for(;r<e.length;){var o=e.charAt(r++),s=goog.crypt.base64.charToByteMap_[o];if(null!=s)return s;if(!goog.string.isEmptyOrWhitespace(o))throw Error("Unknown base64 encoding at char: "+o)}return t}goog.crypt.base64.init_();for(var r=0;;){var s=o(-1),n=o(0),i=o(64),a=o(64);if(64===a&&-1===s)break;t(s<<2|n>>4),64!=i&&(t(n<<4&240|i>>2),64!=a&&t(i<<6&192|a))}},goog.crypt.base64.init_=function(){if(!goog.crypt.base64.charToByteMap_){goog.crypt.base64.charToByteMap_={};for(var e=goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""),t=["+/=","+/","-_=","-_.","-_"],o=0;5>o;o++){var r=e.concat(t[o].split(""));goog.crypt.base64.byteToCharMaps_[o]=r;for(var s=0;s<r.length;s++){var n=r[s],i=goog.crypt.base64.charToByteMap_[n];void 0===i?goog.crypt.base64.charToByteMap_[n]=s:goog.asserts.assert(i===s)}}}},jspb.utils={},jspb.utils.split64Low=0,jspb.utils.split64High=0,jspb.utils.splitUint64=function(e){var t=e>>>0;e=Math.floor((e-t)/jspb.BinaryConstants.TWO_TO_32)>>>0,jspb.utils.split64Low=t,jspb.utils.split64High=e},jspb.utils.splitInt64=function(e){var t=0>e,o=(e=Math.abs(e))>>>0;e=Math.floor((e-o)/jspb.BinaryConstants.TWO_TO_32),e>>>=0,t&&(e=~e>>>0,4294967295<(o=1+(~o>>>0))&&(o=0,4294967295<++e&&(e=0))),jspb.utils.split64Low=o,jspb.utils.split64High=e},jspb.utils.splitZigzag64=function(e){var t=0>e;e=2*Math.abs(e),jspb.utils.splitUint64(e),e=jspb.utils.split64Low;var o=jspb.utils.split64High;t&&(0==e?0==o?o=e=4294967295:(o--,e=4294967295):e--),jspb.utils.split64Low=e,jspb.utils.split64High=o},jspb.utils.splitFloat32=function(e){var t=0>e?1:0;if(0===(e=t?-e:e))0<1/e?(jspb.utils.split64High=0,jspb.utils.split64Low=0):(jspb.utils.split64High=0,jspb.utils.split64Low=2147483648);else if(isNaN(e))jspb.utils.split64High=0,jspb.utils.split64Low=2147483647;else if(e>jspb.BinaryConstants.FLOAT32_MAX)jspb.utils.split64High=0,jspb.utils.split64Low=(t<<31|2139095040)>>>0;else if(e<jspb.BinaryConstants.FLOAT32_MIN)e=Math.round(e/Math.pow(2,-149)),jspb.utils.split64High=0,jspb.utils.split64Low=(t<<31|e)>>>0;else{var o=Math.floor(Math.log(e)/Math.LN2);e*=Math.pow(2,-o),e=8388607&Math.round(e*jspb.BinaryConstants.TWO_TO_23),jspb.utils.split64High=0,jspb.utils.split64Low=(t<<31|o+127<<23|e)>>>0}},jspb.utils.splitFloat64=function(e){var t=0>e?1:0;if(0===(e=t?-e:e))jspb.utils.split64High=0<1/e?0:2147483648,jspb.utils.split64Low=0;else if(isNaN(e))jspb.utils.split64High=2147483647,jspb.utils.split64Low=4294967295;else if(e>jspb.BinaryConstants.FLOAT64_MAX)jspb.utils.split64High=(t<<31|2146435072)>>>0,jspb.utils.split64Low=0;else if(e<jspb.BinaryConstants.FLOAT64_MIN){var o=e/Math.pow(2,-1074);e=o/jspb.BinaryConstants.TWO_TO_32,jspb.utils.split64High=(t<<31|e)>>>0,jspb.utils.split64Low=o>>>0}else{var r=0;if(2<=(o=e))for(;2<=o&&1023>r;)r++,o/=2;else for(;1>o&&-1022<r;)o*=2,r--;e=(o=e*Math.pow(2,-r))*jspb.BinaryConstants.TWO_TO_20&1048575,o=o*jspb.BinaryConstants.TWO_TO_52>>>0,jspb.utils.split64High=(t<<31|r+1023<<20|e)>>>0,jspb.utils.split64Low=o}},jspb.utils.splitHash64=function(e){var t=e.charCodeAt(0),o=e.charCodeAt(1),r=e.charCodeAt(2),s=e.charCodeAt(3),n=e.charCodeAt(4),i=e.charCodeAt(5),a=e.charCodeAt(6);e=e.charCodeAt(7),jspb.utils.split64Low=t+(o<<8)+(r<<16)+(s<<24)>>>0,jspb.utils.split64High=n+(i<<8)+(a<<16)+(e<<24)>>>0},jspb.utils.joinUint64=function(e,t){return t*jspb.BinaryConstants.TWO_TO_32+(e>>>0)},jspb.utils.joinInt64=function(e,t){var o=2147483648&t;return o&&(t=~t>>>0,0==(e=1+~e>>>0)&&(t=t+1>>>0)),e=jspb.utils.joinUint64(e,t),o?-e:e},jspb.utils.toZigzag64=function(e,t,o){var r=t>>31;return o(e<<1^r,(t<<1|e>>>31)^r)},jspb.utils.joinZigzag64=function(e,t){return jspb.utils.fromZigzag64(e,t,jspb.utils.joinInt64)},jspb.utils.fromZigzag64=function(e,t,o){var r=-(1&e);return o((e>>>1|t<<31)^r,t>>>1^r)},jspb.utils.joinFloat32=function(e,t){t=2*(e>>31)+1;var o=e>>>23&255;return e&=8388607,255==o?e?NaN:1/0*t:0==o?t*Math.pow(2,-149)*e:t*Math.pow(2,o-150)*(e+Math.pow(2,23))},jspb.utils.joinFloat64=function(e,t){var o=2*(t>>31)+1,r=t>>>20&2047;return e=jspb.BinaryConstants.TWO_TO_32*(1048575&t)+e,2047==r?e?NaN:1/0*o:0==r?o*Math.pow(2,-1074)*e:o*Math.pow(2,r-1075)*(e+jspb.BinaryConstants.TWO_TO_52)},jspb.utils.joinHash64=function(e,t){return String.fromCharCode(e>>>0&255,e>>>8&255,e>>>16&255,e>>>24&255,t>>>0&255,t>>>8&255,t>>>16&255,t>>>24&255)},jspb.utils.DIGITS="0123456789abcdef".split(""),jspb.utils.ZERO_CHAR_CODE_=48,jspb.utils.A_CHAR_CODE_=97,jspb.utils.joinUnsignedDecimalString=function(e,t){function o(e,t){return e=e?String(e):"",t?"0000000".slice(e.length)+e:e}if(2097151>=t)return""+(jspb.BinaryConstants.TWO_TO_32*t+e);var r=(e>>>24|t<<8)>>>0&16777215;return e=(16777215&e)+6777216*r+6710656*(t=t>>16&65535),r+=8147497*t,t*=2,1e7<=e&&(r+=Math.floor(e/1e7),e%=1e7),1e7<=r&&(t+=Math.floor(r/1e7),r%=1e7),o(t,0)+o(r,t)+o(e,1)},jspb.utils.joinSignedDecimalString=function(e,t){var o=2147483648&t;return o&&(t=~t+(0==(e=1+~e>>>0)?1:0)>>>0),e=jspb.utils.joinUnsignedDecimalString(e,t),o?"-"+e:e},jspb.utils.hash64ToDecimalString=function(e,t){jspb.utils.splitHash64(e),e=jspb.utils.split64Low;var o=jspb.utils.split64High;return t?jspb.utils.joinSignedDecimalString(e,o):jspb.utils.joinUnsignedDecimalString(e,o)},jspb.utils.hash64ArrayToDecimalStrings=function(e,t){for(var o=Array(e.length),r=0;r<e.length;r++)o[r]=jspb.utils.hash64ToDecimalString(e[r],t);return o},jspb.utils.decimalStringToHash64=function(e){function t(e,t){for(var o=0;8>o&&(1!==e||0<t);o++)t=e*r[o]+t,r[o]=255&t,t>>>=8}goog.asserts.assert(0<e.length);var o=!1;"-"===e[0]&&(o=!0,e=e.slice(1));for(var r=[0,0,0,0,0,0,0,0],s=0;s<e.length;s++)t(10,e.charCodeAt(s)-jspb.utils.ZERO_CHAR_CODE_);return o&&(function(){for(var e=0;8>e;e++)r[e]=255&~r[e]}(),t(1,1)),goog.crypt.byteArrayToString(r)},jspb.utils.splitDecimalString=function(e){jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))},jspb.utils.toHexDigit_=function(e){return String.fromCharCode(10>e?jspb.utils.ZERO_CHAR_CODE_+e:jspb.utils.A_CHAR_CODE_-10+e)},jspb.utils.fromHexCharCode_=function(e){return e>=jspb.utils.A_CHAR_CODE_?e-jspb.utils.A_CHAR_CODE_+10:e-jspb.utils.ZERO_CHAR_CODE_},jspb.utils.hash64ToHexString=function(e){var t=Array(18);t[0]="0",t[1]="x";for(var o=0;8>o;o++){var r=e.charCodeAt(7-o);t[2*o+2]=jspb.utils.toHexDigit_(r>>4),t[2*o+3]=jspb.utils.toHexDigit_(15&r)}return t.join("")},jspb.utils.hexStringToHash64=function(e){e=e.toLowerCase(),goog.asserts.assert(18==e.length),goog.asserts.assert("0"==e[0]),goog.asserts.assert("x"==e[1]);for(var t="",o=0;8>o;o++){var r=jspb.utils.fromHexCharCode_(e.charCodeAt(2*o+2)),s=jspb.utils.fromHexCharCode_(e.charCodeAt(2*o+3));t=String.fromCharCode(16*r+s)+t}return t},jspb.utils.hash64ToNumber=function(e,t){jspb.utils.splitHash64(e),e=jspb.utils.split64Low;var o=jspb.utils.split64High;return t?jspb.utils.joinInt64(e,o):jspb.utils.joinUint64(e,o)},jspb.utils.numberToHash64=function(e){return jspb.utils.splitInt64(e),jspb.utils.joinHash64(jspb.utils.split64Low,jspb.utils.split64High)},jspb.utils.countVarints=function(e,t,o){for(var r=0,s=t;s<o;s++)r+=e[s]>>7;return o-t-r},jspb.utils.countVarintFields=function(e,t,o,r){var s=0;if(128>(r=8*r+jspb.BinaryConstants.WireType.VARINT))for(;t<o&&e[t++]==r;)for(s++;;){var n=e[t++];if(0==(128&n))break}else for(;t<o;){for(n=r;128<n;){if(e[t]!=(127&n|128))return s;t++,n>>=7}if(e[t++]!=n)break;for(s++;0!=(128&(n=e[t++])););}return s},jspb.utils.countFixedFields_=function(e,t,o,r,s){var n=0;if(128>r)for(;t<o&&e[t++]==r;)n++,t+=s;else for(;t<o;){for(var i=r;128<i;){if(e[t++]!=(127&i|128))return n;i>>=7}if(e[t++]!=i)break;n++,t+=s}return n},jspb.utils.countFixed32Fields=function(e,t,o,r){return jspb.utils.countFixedFields_(e,t,o,8*r+jspb.BinaryConstants.WireType.FIXED32,4)},jspb.utils.countFixed64Fields=function(e,t,o,r){return jspb.utils.countFixedFields_(e,t,o,8*r+jspb.BinaryConstants.WireType.FIXED64,8)},jspb.utils.countDelimitedFields=function(e,t,o,r){var s=0;for(r=8*r+jspb.BinaryConstants.WireType.DELIMITED;t<o;){for(var n=r;128<n;){if(e[t++]!=(127&n|128))return s;n>>=7}if(e[t++]!=n)break;s++;for(var i=0,a=1;i+=(127&(n=e[t++]))*a,a*=128,0!=(128&n););t+=i}return s},jspb.utils.debugBytesToTextFormat=function(e){var t='"';if(e){e=jspb.utils.byteSourceToUint8Array(e);for(var o=0;o<e.length;o++)t+="\\x",16>e[o]&&(t+="0"),t+=e[o].toString(16)}return t+'"'},jspb.utils.debugScalarToTextFormat=function(e){return"string"==typeof e?goog.string.quote(e):e.toString()},jspb.utils.stringToByteArray=function(e){for(var t=new Uint8Array(e.length),o=0;o<e.length;o++){var r=e.charCodeAt(o);if(255<r)throw Error("Conversion error: string contains codepoint outside of byte range");t[o]=r}return t},jspb.utils.byteSourceToUint8Array=function(e){return e.constructor===Uint8Array?e:e.constructor===ArrayBuffer||"undefined"!=typeof Buffer&&e.constructor===Buffer||e.constructor===Array?new Uint8Array(e):e.constructor===String?goog.crypt.base64.decodeStringToUint8Array(e):(goog.asserts.fail("Type not convertible to Uint8Array."),new Uint8Array(0))},jspb.BinaryDecoder=function(e,t,o){this.bytes_=null,this.cursor_=this.end_=this.start_=0,this.error_=!1,e&&this.setBlock(e,t,o)},jspb.BinaryDecoder.instanceCache_=[],jspb.BinaryDecoder.alloc=function(e,t,o){if(jspb.BinaryDecoder.instanceCache_.length){var r=jspb.BinaryDecoder.instanceCache_.pop();return e&&r.setBlock(e,t,o),r}return new jspb.BinaryDecoder(e,t,o)},jspb.BinaryDecoder.prototype.free=function(){this.clear(),100>jspb.BinaryDecoder.instanceCache_.length&&jspb.BinaryDecoder.instanceCache_.push(this)},jspb.BinaryDecoder.prototype.clone=function(){return jspb.BinaryDecoder.alloc(this.bytes_,this.start_,this.end_-this.start_)},jspb.BinaryDecoder.prototype.clear=function(){this.bytes_=null,this.cursor_=this.end_=this.start_=0,this.error_=!1},jspb.BinaryDecoder.prototype.getBuffer=function(){return this.bytes_},jspb.BinaryDecoder.prototype.setBlock=function(e,t,o){this.bytes_=jspb.utils.byteSourceToUint8Array(e),this.start_=void 0!==t?t:0,this.end_=void 0!==o?this.start_+o:this.bytes_.length,this.cursor_=this.start_},jspb.BinaryDecoder.prototype.getEnd=function(){return this.end_},jspb.BinaryDecoder.prototype.setEnd=function(e){this.end_=e},jspb.BinaryDecoder.prototype.reset=function(){this.cursor_=this.start_},jspb.BinaryDecoder.prototype.getCursor=function(){return this.cursor_},jspb.BinaryDecoder.prototype.setCursor=function(e){this.cursor_=e},jspb.BinaryDecoder.prototype.advance=function(e){this.cursor_+=e,goog.asserts.assert(this.cursor_<=this.end_)},jspb.BinaryDecoder.prototype.atEnd=function(){return this.cursor_==this.end_},jspb.BinaryDecoder.prototype.pastEnd=function(){return this.cursor_>this.end_},jspb.BinaryDecoder.prototype.getError=function(){return this.error_||0>this.cursor_||this.cursor_>this.end_},jspb.BinaryDecoder.prototype.readSplitVarint64=function(e){for(var t=128,o=0,r=0,s=0;4>s&&128<=t;s++)o|=(127&(t=this.bytes_[this.cursor_++]))<<7*s;if(128<=t&&(o|=(127&(t=this.bytes_[this.cursor_++]))<<28,r|=(127&t)>>4),128<=t)for(s=0;5>s&&128<=t;s++)r|=(127&(t=this.bytes_[this.cursor_++]))<<7*s+3;if(128>t)return e(o>>>0,r>>>0);goog.asserts.fail("Failed to read varint, encoding is invalid."),this.error_=!0},jspb.BinaryDecoder.prototype.readSplitZigzagVarint64=function(e){return this.readSplitVarint64((function(t,o){return jspb.utils.fromZigzag64(t,o,e)}))},jspb.BinaryDecoder.prototype.readSplitFixed64=function(e){var t=this.bytes_,o=this.cursor_;this.cursor_+=8;for(var r=0,s=0,n=o+7;n>=o;n--)r=r<<8|t[n],s=s<<8|t[n+4];return e(r,s)},jspb.BinaryDecoder.prototype.skipVarint=function(){for(;128&this.bytes_[this.cursor_];)this.cursor_++;this.cursor_++},jspb.BinaryDecoder.prototype.unskipVarint=function(e){for(;128<e;)this.cursor_--,e>>>=7;this.cursor_--},jspb.BinaryDecoder.prototype.readUnsignedVarint32=function(){var e=this.bytes_,t=e[this.cursor_+0],o=127&t;return 128>t?(this.cursor_+=1,goog.asserts.assert(this.cursor_<=this.end_),o):(o|=(127&(t=e[this.cursor_+1]))<<7,128>t?(this.cursor_+=2,goog.asserts.assert(this.cursor_<=this.end_),o):(o|=(127&(t=e[this.cursor_+2]))<<14,128>t?(this.cursor_+=3,goog.asserts.assert(this.cursor_<=this.end_),o):(o|=(127&(t=e[this.cursor_+3]))<<21,128>t?(this.cursor_+=4,goog.asserts.assert(this.cursor_<=this.end_),o):(o|=(15&(t=e[this.cursor_+4]))<<28,128>t?(this.cursor_+=5,goog.asserts.assert(this.cursor_<=this.end_),o>>>0):(this.cursor_+=5,128<=e[this.cursor_++]&&128<=e[this.cursor_++]&&128<=e[this.cursor_++]&&128<=e[this.cursor_++]&&128<=e[this.cursor_++]&&goog.asserts.assert(!1),goog.asserts.assert(this.cursor_<=this.end_),o)))))},jspb.BinaryDecoder.prototype.readSignedVarint32=jspb.BinaryDecoder.prototype.readUnsignedVarint32,jspb.BinaryDecoder.prototype.readUnsignedVarint32String=function(){return this.readUnsignedVarint32().toString()},jspb.BinaryDecoder.prototype.readSignedVarint32String=function(){return this.readSignedVarint32().toString()},jspb.BinaryDecoder.prototype.readZigzagVarint32=function(){var e=this.readUnsignedVarint32();return e>>>1^-(1&e)},jspb.BinaryDecoder.prototype.readUnsignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinUint64)},jspb.BinaryDecoder.prototype.readUnsignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)},jspb.BinaryDecoder.prototype.readSignedVarint64=function(){return this.readSplitVarint64(jspb.utils.joinInt64)},jspb.BinaryDecoder.prototype.readSignedVarint64String=function(){return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)},jspb.BinaryDecoder.prototype.readZigzagVarint64=function(){return this.readSplitVarint64(jspb.utils.joinZigzag64)},jspb.BinaryDecoder.prototype.readZigzagVarintHash64=function(){return this.readSplitZigzagVarint64(jspb.utils.joinHash64)},jspb.BinaryDecoder.prototype.readZigzagVarint64String=function(){return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)},jspb.BinaryDecoder.prototype.readUint8=function(){var e=this.bytes_[this.cursor_+0];return this.cursor_+=1,goog.asserts.assert(this.cursor_<=this.end_),e},jspb.BinaryDecoder.prototype.readUint16=function(){var e=this.bytes_[this.cursor_+0],t=this.bytes_[this.cursor_+1];return this.cursor_+=2,goog.asserts.assert(this.cursor_<=this.end_),e<<0|t<<8},jspb.BinaryDecoder.prototype.readUint32=function(){var e=this.bytes_[this.cursor_+0],t=this.bytes_[this.cursor_+1],o=this.bytes_[this.cursor_+2],r=this.bytes_[this.cursor_+3];return this.cursor_+=4,goog.asserts.assert(this.cursor_<=this.end_),(e<<0|t<<8|o<<16|r<<24)>>>0},jspb.BinaryDecoder.prototype.readUint64=function(){var e=this.readUint32(),t=this.readUint32();return jspb.utils.joinUint64(e,t)},jspb.BinaryDecoder.prototype.readUint64String=function(){var e=this.readUint32(),t=this.readUint32();return jspb.utils.joinUnsignedDecimalString(e,t)},jspb.BinaryDecoder.prototype.readInt8=function(){var e=this.bytes_[this.cursor_+0];return this.cursor_+=1,goog.asserts.assert(this.cursor_<=this.end_),e<<24>>24},jspb.BinaryDecoder.prototype.readInt16=function(){var e=this.bytes_[this.cursor_+0],t=this.bytes_[this.cursor_+1];return this.cursor_+=2,goog.asserts.assert(this.cursor_<=this.end_),(e<<0|t<<8)<<16>>16},jspb.BinaryDecoder.prototype.readInt32=function(){var e=this.bytes_[this.cursor_+0],t=this.bytes_[this.cursor_+1],o=this.bytes_[this.cursor_+2],r=this.bytes_[this.cursor_+3];return this.cursor_+=4,goog.asserts.assert(this.cursor_<=this.end_),e<<0|t<<8|o<<16|r<<24},jspb.BinaryDecoder.prototype.readInt64=function(){var e=this.readUint32(),t=this.readUint32();return jspb.utils.joinInt64(e,t)},jspb.BinaryDecoder.prototype.readInt64String=function(){var e=this.readUint32(),t=this.readUint32();return jspb.utils.joinSignedDecimalString(e,t)},jspb.BinaryDecoder.prototype.readFloat=function(){var e=this.readUint32();return jspb.utils.joinFloat32(e,0)},jspb.BinaryDecoder.prototype.readDouble=function(){var e=this.readUint32(),t=this.readUint32();return jspb.utils.joinFloat64(e,t)},jspb.BinaryDecoder.prototype.readBool=function(){return!!this.bytes_[this.cursor_++]},jspb.BinaryDecoder.prototype.readEnum=function(){return this.readSignedVarint32()},jspb.BinaryDecoder.prototype.readString=function(e){var t=this.bytes_,o=this.cursor_;e=o+e;for(var r=[],s="";o<e;){var n=t[o++];if(128>n)r.push(n);else{if(192>n)continue;if(224>n){var i=t[o++];r.push((31&n)<<6|63&i)}else if(240>n){i=t[o++];var a=t[o++];r.push((15&n)<<12|(63&i)<<6|63&a)}else if(248>n){n=(7&n)<<18|(63&(i=t[o++]))<<12|(63&(a=t[o++]))<<6|63&t[o++],n-=65536,r.push(55296+(n>>10&1023),56320+(1023&n))}}8192<=r.length&&(s+=String.fromCharCode.apply(null,r),r.length=0)}return s+=goog.crypt.byteArrayToString(r),this.cursor_=o,s},jspb.BinaryDecoder.prototype.readStringWithLength=function(){var e=this.readUnsignedVarint32();return this.readString(e)},jspb.BinaryDecoder.prototype.readBytes=function(e){if(0>e||this.cursor_+e>this.bytes_.length)return this.error_=!0,goog.asserts.fail("Invalid byte length!"),new Uint8Array(0);var t=this.bytes_.subarray(this.cursor_,this.cursor_+e);return this.cursor_+=e,goog.asserts.assert(this.cursor_<=this.end_),t},jspb.BinaryDecoder.prototype.readVarintHash64=function(){return this.readSplitVarint64(jspb.utils.joinHash64)},jspb.BinaryDecoder.prototype.readFixedHash64=function(){var e=this.bytes_,t=this.cursor_,o=e[t+0],r=e[t+1],s=e[t+2],n=e[t+3],i=e[t+4],a=e[t+5],g=e[t+6];return e=e[t+7],this.cursor_+=8,String.fromCharCode(o,r,s,n,i,a,g,e)},jspb.BinaryReader=function(e,t,o){this.decoder_=jspb.BinaryDecoder.alloc(e,t,o),this.fieldCursor_=this.decoder_.getCursor(),this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER,this.nextWireType_=jspb.BinaryConstants.WireType.INVALID,this.error_=!1,this.readCallbacks_=null},jspb.BinaryReader.instanceCache_=[],jspb.BinaryReader.alloc=function(e,t,o){if(jspb.BinaryReader.instanceCache_.length){var r=jspb.BinaryReader.instanceCache_.pop();return e&&r.decoder_.setBlock(e,t,o),r}return new jspb.BinaryReader(e,t,o)},jspb.BinaryReader.prototype.alloc=jspb.BinaryReader.alloc,jspb.BinaryReader.prototype.free=function(){this.decoder_.clear(),this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER,this.nextWireType_=jspb.BinaryConstants.WireType.INVALID,this.error_=!1,this.readCallbacks_=null,100>jspb.BinaryReader.instanceCache_.length&&jspb.BinaryReader.instanceCache_.push(this)},jspb.BinaryReader.prototype.getFieldCursor=function(){return this.fieldCursor_},jspb.BinaryReader.prototype.getCursor=function(){return this.decoder_.getCursor()},jspb.BinaryReader.prototype.getBuffer=function(){return this.decoder_.getBuffer()},jspb.BinaryReader.prototype.getFieldNumber=function(){return this.nextField_},jspb.BinaryReader.prototype.getWireType=function(){return this.nextWireType_},jspb.BinaryReader.prototype.isEndGroup=function(){return this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP},jspb.BinaryReader.prototype.getError=function(){return this.error_||this.decoder_.getError()},jspb.BinaryReader.prototype.setBlock=function(e,t,o){this.decoder_.setBlock(e,t,o),this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER,this.nextWireType_=jspb.BinaryConstants.WireType.INVALID},jspb.BinaryReader.prototype.reset=function(){this.decoder_.reset(),this.nextField_=jspb.BinaryConstants.INVALID_FIELD_NUMBER,this.nextWireType_=jspb.BinaryConstants.WireType.INVALID},jspb.BinaryReader.prototype.advance=function(e){this.decoder_.advance(e)},jspb.BinaryReader.prototype.nextField=function(){if(this.decoder_.atEnd())return!1;if(this.getError())return goog.asserts.fail("Decoder hit an error"),!1;this.fieldCursor_=this.decoder_.getCursor();var e=this.decoder_.readUnsignedVarint32(),t=e>>>3;return(e&=7)!=jspb.BinaryConstants.WireType.VARINT&&e!=jspb.BinaryConstants.WireType.FIXED32&&e!=jspb.BinaryConstants.WireType.FIXED64&&e!=jspb.BinaryConstants.WireType.DELIMITED&&e!=jspb.BinaryConstants.WireType.START_GROUP&&e!=jspb.BinaryConstants.WireType.END_GROUP?(goog.asserts.fail("Invalid wire type: %s (at position %s)",e,this.fieldCursor_),this.error_=!0,!1):(this.nextField_=t,this.nextWireType_=e,!0)},jspb.BinaryReader.prototype.unskipHeader=function(){this.decoder_.unskipVarint(this.nextField_<<3|this.nextWireType_)},jspb.BinaryReader.prototype.skipMatchingFields=function(){var e=this.nextField_;for(this.unskipHeader();this.nextField()&&this.getFieldNumber()==e;)this.skipField();this.decoder_.atEnd()||this.unskipHeader()},jspb.BinaryReader.prototype.skipVarintField=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.VARINT?(goog.asserts.fail("Invalid wire type for skipVarintField"),this.skipField()):this.decoder_.skipVarint()},jspb.BinaryReader.prototype.skipDelimitedField=function(){if(this.nextWireType_!=jspb.BinaryConstants.WireType.DELIMITED)goog.asserts.fail("Invalid wire type for skipDelimitedField"),this.skipField();else{var e=this.decoder_.readUnsignedVarint32();this.decoder_.advance(e)}},jspb.BinaryReader.prototype.skipFixed32Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED32?(goog.asserts.fail("Invalid wire type for skipFixed32Field"),this.skipField()):this.decoder_.advance(4)},jspb.BinaryReader.prototype.skipFixed64Field=function(){this.nextWireType_!=jspb.BinaryConstants.WireType.FIXED64?(goog.asserts.fail("Invalid wire type for skipFixed64Field"),this.skipField()):this.decoder_.advance(8)},jspb.BinaryReader.prototype.skipGroup=function(){for(var e=this.nextField_;;){if(!this.nextField()){goog.asserts.fail("Unmatched start-group tag: stream EOF"),this.error_=!0;break}if(this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP){this.nextField_!=e&&(goog.asserts.fail("Unmatched end-group tag"),this.error_=!0);break}this.skipField()}},jspb.BinaryReader.prototype.skipField=function(){switch(this.nextWireType_){case jspb.BinaryConstants.WireType.VARINT:this.skipVarintField();break;case jspb.BinaryConstants.WireType.FIXED64:this.skipFixed64Field();break;case jspb.BinaryConstants.WireType.DELIMITED:this.skipDelimitedField();break;case jspb.BinaryConstants.WireType.FIXED32:this.skipFixed32Field();break;case jspb.BinaryConstants.WireType.START_GROUP:this.skipGroup();break;default:goog.asserts.fail("Invalid wire encoding for field.")}},jspb.BinaryReader.prototype.registerReadCallback=function(e,t){null===this.readCallbacks_&&(this.readCallbacks_={}),goog.asserts.assert(!this.readCallbacks_[e]),this.readCallbacks_[e]=t},jspb.BinaryReader.prototype.runReadCallback=function(e){return goog.asserts.assert(null!==this.readCallbacks_),e=this.readCallbacks_[e],goog.asserts.assert(e),e(this)},jspb.BinaryReader.prototype.readAny=function(e){this.nextWireType_=jspb.BinaryConstants.FieldTypeToWireType(e);var t=jspb.BinaryConstants.FieldType;switch(e){case t.DOUBLE:return this.readDouble();case t.FLOAT:return this.readFloat();case t.INT64:return this.readInt64();case t.UINT64:return this.readUint64();case t.INT32:return this.readInt32();case t.FIXED64:return this.readFixed64();case t.FIXED32:return this.readFixed32();case t.BOOL:return this.readBool();case t.STRING:return this.readString();case t.GROUP:goog.asserts.fail("Group field type not supported in readAny()");case t.MESSAGE:goog.asserts.fail("Message field type not supported in readAny()");case t.BYTES:return this.readBytes();case t.UINT32:return this.readUint32();case t.ENUM:return this.readEnum();case t.SFIXED32:return this.readSfixed32();case t.SFIXED64:return this.readSfixed64();case t.SINT32:return this.readSint32();case t.SINT64:return this.readSint64();case t.FHASH64:return this.readFixedHash64();case t.VHASH64:return this.readVarintHash64();default:goog.asserts.fail("Invalid field type in readAny()")}return 0},jspb.BinaryReader.prototype.readMessage=function(e,t){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var o=this.decoder_.getEnd(),r=this.decoder_.readUnsignedVarint32();r=this.decoder_.getCursor()+r,this.decoder_.setEnd(r),t(e,this),this.decoder_.setCursor(r),this.decoder_.setEnd(o)},jspb.BinaryReader.prototype.readGroup=function(e,t,o){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.START_GROUP),goog.asserts.assert(this.nextField_==e),o(t,this),this.error_||this.nextWireType_==jspb.BinaryConstants.WireType.END_GROUP||(goog.asserts.fail("Group submessage did not end with an END_GROUP tag"),this.error_=!0)},jspb.BinaryReader.prototype.getFieldDecoder=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var e=this.decoder_.readUnsignedVarint32(),t=this.decoder_.getCursor(),o=t+e;return e=jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(),t,e),this.decoder_.setCursor(o),e},jspb.BinaryReader.prototype.readInt32=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readSignedVarint32()},jspb.BinaryReader.prototype.readInt32String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readSignedVarint32String()},jspb.BinaryReader.prototype.readInt64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readSignedVarint64()},jspb.BinaryReader.prototype.readInt64String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readSignedVarint64String()},jspb.BinaryReader.prototype.readUint32=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readUnsignedVarint32()},jspb.BinaryReader.prototype.readUint32String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readUnsignedVarint32String()},jspb.BinaryReader.prototype.readUint64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readUnsignedVarint64()},jspb.BinaryReader.prototype.readUint64String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readUnsignedVarint64String()},jspb.BinaryReader.prototype.readSint32=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readZigzagVarint32()},jspb.BinaryReader.prototype.readSint64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readZigzagVarint64()},jspb.BinaryReader.prototype.readSint64String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readZigzagVarint64String()},jspb.BinaryReader.prototype.readFixed32=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32),this.decoder_.readUint32()},jspb.BinaryReader.prototype.readFixed64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64),this.decoder_.readUint64()},jspb.BinaryReader.prototype.readFixed64String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64),this.decoder_.readUint64String()},jspb.BinaryReader.prototype.readSfixed32=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32),this.decoder_.readInt32()},jspb.BinaryReader.prototype.readSfixed32String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32),this.decoder_.readInt32().toString()},jspb.BinaryReader.prototype.readSfixed64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64),this.decoder_.readInt64()},jspb.BinaryReader.prototype.readSfixed64String=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64),this.decoder_.readInt64String()},jspb.BinaryReader.prototype.readFloat=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED32),this.decoder_.readFloat()},jspb.BinaryReader.prototype.readDouble=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64),this.decoder_.readDouble()},jspb.BinaryReader.prototype.readBool=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),!!this.decoder_.readUnsignedVarint32()},jspb.BinaryReader.prototype.readEnum=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readSignedVarint64()},jspb.BinaryReader.prototype.readString=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var e=this.decoder_.readUnsignedVarint32();return this.decoder_.readString(e)},jspb.BinaryReader.prototype.readBytes=function(){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var e=this.decoder_.readUnsignedVarint32();return this.decoder_.readBytes(e)},jspb.BinaryReader.prototype.readVarintHash64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readVarintHash64()},jspb.BinaryReader.prototype.readSintHash64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readZigzagVarintHash64()},jspb.BinaryReader.prototype.readSplitVarint64=function(e){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readSplitVarint64(e)},jspb.BinaryReader.prototype.readSplitZigzagVarint64=function(e){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.VARINT),this.decoder_.readSplitVarint64((function(t,o){return jspb.utils.fromZigzag64(t,o,e)}))},jspb.BinaryReader.prototype.readFixedHash64=function(){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64),this.decoder_.readFixedHash64()},jspb.BinaryReader.prototype.readSplitFixed64=function(e){return goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.FIXED64),this.decoder_.readSplitFixed64(e)},jspb.BinaryReader.prototype.readPackedField_=function(e){goog.asserts.assert(this.nextWireType_==jspb.BinaryConstants.WireType.DELIMITED);var t=this.decoder_.readUnsignedVarint32();t=this.decoder_.getCursor()+t;for(var o=[];this.decoder_.getCursor()<t;)o.push(e.call(this.decoder_));return o},jspb.BinaryReader.prototype.readPackedInt32=function(){return this.readPackedField_(this.decoder_.readSignedVarint32)},jspb.BinaryReader.prototype.readPackedInt32String=function(){return this.readPackedField_(this.decoder_.readSignedVarint32String)},jspb.BinaryReader.prototype.readPackedInt64=function(){return this.readPackedField_(this.decoder_.readSignedVarint64)},jspb.BinaryReader.prototype.readPackedInt64String=function(){return this.readPackedField_(this.decoder_.readSignedVarint64String)},jspb.BinaryReader.prototype.readPackedUint32=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32)},jspb.BinaryReader.prototype.readPackedUint32String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint32String)},jspb.BinaryReader.prototype.readPackedUint64=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64)},jspb.BinaryReader.prototype.readPackedUint64String=function(){return this.readPackedField_(this.decoder_.readUnsignedVarint64String)},jspb.BinaryReader.prototype.readPackedSint32=function(){return this.readPackedField_(this.decoder_.readZigzagVarint32)},jspb.BinaryReader.prototype.readPackedSint64=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64)},jspb.BinaryReader.prototype.readPackedSint64String=function(){return this.readPackedField_(this.decoder_.readZigzagVarint64String)},jspb.BinaryReader.prototype.readPackedFixed32=function(){return this.readPackedField_(this.decoder_.readUint32)},jspb.BinaryReader.prototype.readPackedFixed64=function(){return this.readPackedField_(this.decoder_.readUint64)},jspb.BinaryReader.prototype.readPackedFixed64String=function(){return this.readPackedField_(this.decoder_.readUint64String)},jspb.BinaryReader.prototype.readPackedSfixed32=function(){return this.readPackedField_(this.decoder_.readInt32)},jspb.BinaryReader.prototype.readPackedSfixed64=function(){return this.readPackedField_(this.decoder_.readInt64)},jspb.BinaryReader.prototype.readPackedSfixed64String=function(){return this.readPackedField_(this.decoder_.readInt64String)},jspb.BinaryReader.prototype.readPackedFloat=function(){return this.readPackedField_(this.decoder_.readFloat)},jspb.BinaryReader.prototype.readPackedDouble=function(){return this.readPackedField_(this.decoder_.readDouble)},jspb.BinaryReader.prototype.readPackedBool=function(){return this.readPackedField_(this.decoder_.readBool)},jspb.BinaryReader.prototype.readPackedEnum=function(){return this.readPackedField_(this.decoder_.readEnum)},jspb.BinaryReader.prototype.readPackedVarintHash64=function(){return this.readPackedField_(this.decoder_.readVarintHash64)},jspb.BinaryReader.prototype.readPackedFixedHash64=function(){return this.readPackedField_(this.decoder_.readFixedHash64)},jspb.Map=function(e,t){this.arr_=e,this.valueCtor_=t,this.map_={},this.arrClean=!0,0<this.arr_.length&&this.loadFromArray_()},jspb.Map.prototype.loadFromArray_=function(){for(var e=0;e<this.arr_.length;e++){var t=this.arr_[e],o=t[0];this.map_[o.toString()]=new jspb.Map.Entry_(o,t[1])}this.arrClean=!0},jspb.Map.prototype.toArray=function(){if(this.arrClean){if(this.valueCtor_){var e,t=this.map_;for(e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var o=t[e].valueWrapper;o&&o.toArray()}}}else{for(this.arr_.length=0,(t=this.stringKeys_()).sort(),e=0;e<t.length;e++){var r=this.map_[t[e]];(o=r.valueWrapper)&&o.toArray(),this.arr_.push([r.key,r.value])}this.arrClean=!0}return this.arr_},jspb.Map.prototype.toObject=function(e,t){for(var o=this.toArray(),r=[],s=0;s<o.length;s++){var n=this.map_[o[s][0].toString()];this.wrapEntry_(n);var i=n.valueWrapper;i?(goog.asserts.assert(t),r.push([n.key,t(e,i)])):r.push([n.key,n.value])}return r},jspb.Map.fromObject=function(e,t,o){t=new jspb.Map([],t);for(var r=0;r<e.length;r++){var s=e[r][0],n=o(e[r][1]);t.set(s,n)}return t},jspb.Map.ArrayIteratorIterable_=function(e){this.idx_=0,this.arr_=e},jspb.Map.ArrayIteratorIterable_.prototype.next=function(){return this.idx_<this.arr_.length?{done:!1,value:this.arr_[this.idx_++]}:{done:!0,value:void 0}},"undefined"!=typeof Symbol&&(jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator]=function(){return this}),jspb.Map.prototype.getLength=function(){return this.stringKeys_().length},jspb.Map.prototype.clear=function(){this.map_={},this.arrClean=!1},jspb.Map.prototype.del=function(e){e=e.toString();var t=this.map_.hasOwnProperty(e);return delete this.map_[e],this.arrClean=!1,t},jspb.Map.prototype.getEntryList=function(){var e=[],t=this.stringKeys_();t.sort();for(var o=0;o<t.length;o++){var r=this.map_[t[o]];e.push([r.key,r.value])}return e},jspb.Map.prototype.entries=function(){var e=[],t=this.stringKeys_();t.sort();for(var o=0;o<t.length;o++){var r=this.map_[t[o]];e.push([r.key,this.wrapEntry_(r)])}return new jspb.Map.ArrayIteratorIterable_(e)},jspb.Map.prototype.keys=function(){var e=[],t=this.stringKeys_();t.sort();for(var o=0;o<t.length;o++)e.push(this.map_[t[o]].key);return new jspb.Map.ArrayIteratorIterable_(e)},jspb.Map.prototype.values=function(){var e=[],t=this.stringKeys_();t.sort();for(var o=0;o<t.length;o++)e.push(this.wrapEntry_(this.map_[t[o]]));return new jspb.Map.ArrayIteratorIterable_(e)},jspb.Map.prototype.forEach=function(e,t){var o=this.stringKeys_();o.sort();for(var r=0;r<o.length;r++){var s=this.map_[o[r]];e.call(t,this.wrapEntry_(s),s.key,this)}},jspb.Map.prototype.set=function(e,t){var o=new jspb.Map.Entry_(e);return this.valueCtor_?(o.valueWrapper=t,o.value=t.toArray()):o.value=t,this.map_[e.toString()]=o,this.arrClean=!1,this},jspb.Map.prototype.wrapEntry_=function(e){return this.valueCtor_?(e.valueWrapper||(e.valueWrapper=new this.valueCtor_(e.value)),e.valueWrapper):e.value},jspb.Map.prototype.get=function(e){if(e=this.map_[e.toString()])return this.wrapEntry_(e)},jspb.Map.prototype.has=function(e){return e.toString()in this.map_},jspb.Map.prototype.serializeBinary=function(e,t,o,r,s){var n=this.stringKeys_();n.sort();for(var i=0;i<n.length;i++){var a=this.map_[n[i]];t.beginSubMessage(e),o.call(t,1,a.key),this.valueCtor_?r.call(t,2,this.wrapEntry_(a),s):r.call(t,2,a.value),t.endSubMessage()}},jspb.Map.deserializeBinary=function(e,t,o,r,s,n,i){for(;t.nextField()&&!t.isEndGroup();){var a=t.getFieldNumber();1==a?n=o.call(t):2==a&&(e.valueCtor_?(goog.asserts.assert(s),i||(i=new e.valueCtor_),r.call(t,i,s)):i=r.call(t))}goog.asserts.assert(null!=n),goog.asserts.assert(null!=i),e.set(n,i)},jspb.Map.prototype.stringKeys_=function(){var e,t=this.map_,o=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.push(e);return o},jspb.Map.Entry_=function(e,t){this.key=e,this.value=t,this.valueWrapper=void 0},jspb.ExtensionFieldInfo=function(e,t,o,r,s){this.fieldIndex=e,this.fieldName=t,this.ctor=o,this.toObjectFn=r,this.isRepeated=s},jspb.ExtensionFieldBinaryInfo=function(e,t,o,r,s,n){this.fieldInfo=e,this.binaryReaderFn=t,this.binaryWriterFn=o,this.binaryMessageSerializeFn=r,this.binaryMessageDeserializeFn=s,this.isPacked=n},jspb.ExtensionFieldInfo.prototype.isMessageType=function(){return!!this.ctor},jspb.Message=function(){},jspb.Message.GENERATE_TO_OBJECT=!0,jspb.Message.GENERATE_FROM_OBJECT=!goog.DISALLOW_TEST_ONLY_CODE,jspb.Message.GENERATE_TO_STRING=!0,jspb.Message.ASSUME_LOCAL_ARRAYS=!1,jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS=!0,jspb.Message.SUPPORTS_UINT8ARRAY_="function"==typeof Uint8Array,jspb.Message.prototype.getJsPbMessageId=function(){return this.messageId_},jspb.Message.getIndex_=function(e,t){return t+e.arrayIndexOffset_},jspb.Message.hiddenES6Property_=function(){},jspb.Message.getFieldNumber_=function(e,t){return t-e.arrayIndexOffset_},jspb.Message.initialize=function(e,t,o,r,s,n){if(e.wrappers_=null,t||(t=o?[o]:[]),e.messageId_=o?String(o):void 0,e.arrayIndexOffset_=0===o?-1:0,e.array=t,jspb.Message.initPivotAndExtensionObject_(e,r),e.convertedPrimitiveFields_={},jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS||(e.repeatedFields=s),s)for(t=0;t<s.length;t++)(o=s[t])<e.pivot_?(o=jspb.Message.getIndex_(e,o),e.array[o]=e.array[o]||jspb.Message.EMPTY_LIST_SENTINEL_):(jspb.Message.maybeInitEmptyExtensionObject_(e),e.extensionObject_[o]=e.extensionObject_[o]||jspb.Message.EMPTY_LIST_SENTINEL_);if(n&&n.length)for(t=0;t<n.length;t++)jspb.Message.computeOneofCase(e,n[t])},jspb.Message.EMPTY_LIST_SENTINEL_=goog.DEBUG&&Object.freeze?Object.freeze([]):[],jspb.Message.isArray_=function(e){return jspb.Message.ASSUME_LOCAL_ARRAYS?e instanceof Array:goog.isArray(e)},jspb.Message.isExtensionObject_=function(e){return!(null===e||"object"!=typeof e||jspb.Message.isArray_(e)||jspb.Message.SUPPORTS_UINT8ARRAY_&&e instanceof Uint8Array)},jspb.Message.initPivotAndExtensionObject_=function(e,t){var o=e.array.length,r=-1;if(o&&(r=o-1,o=e.array[r],jspb.Message.isExtensionObject_(o)))return e.pivot_=jspb.Message.getFieldNumber_(e,r),void(e.extensionObject_=o);-1<t?(e.pivot_=Math.max(t,jspb.Message.getFieldNumber_(e,r+1)),e.extensionObject_=null):e.pivot_=Number.MAX_VALUE},jspb.Message.maybeInitEmptyExtensionObject_=function(e){var t=jspb.Message.getIndex_(e,e.pivot_);e.array[t]||(e.extensionObject_=e.array[t]={})},jspb.Message.toObjectList=function(e,t,o){for(var r=[],s=0;s<e.length;s++)r[s]=t.call(e[s],o,e[s]);return r},jspb.Message.toObjectExtension=function(e,t,o,r,s){for(var n in o){var i=o[n],a=r.call(e,i);if(null!=a){for(var g in i.fieldName)if(i.fieldName.hasOwnProperty(g))break;t[g]=i.toObjectFn?i.isRepeated?jspb.Message.toObjectList(a,i.toObjectFn,s):i.toObjectFn(s,a):a}}},jspb.Message.serializeBinaryExtensions=function(e,t,o,r){for(var s in o){var n=o[s],i=n.fieldInfo;if(!n.binaryWriterFn)throw Error("Message extension present that was generated without binary serialization support");var a=r.call(e,i);if(null!=a)if(i.isMessageType()){if(!n.binaryMessageSerializeFn)throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");n.binaryWriterFn.call(t,i.fieldIndex,a,n.binaryMessageSerializeFn)}else n.binaryWriterFn.call(t,i.fieldIndex,a)}},jspb.Message.readBinaryExtension=function(e,t,o,r,s){var n=o[t.getFieldNumber()];if(n){if(o=n.fieldInfo,!n.binaryReaderFn)throw Error("Deserializing extension whose generated code does not support binary format");if(o.isMessageType()){var i=new o.ctor;n.binaryReaderFn.call(t,i,n.binaryMessageDeserializeFn)}else i=n.binaryReaderFn.call(t);o.isRepeated&&!n.isPacked?(t=r.call(e,o))?t.push(i):s.call(e,o,[i]):s.call(e,o,i)}else t.skipField()},jspb.Message.getField=function(e,t){if(t<e.pivot_){t=jspb.Message.getIndex_(e,t);var o=e.array[t];return o===jspb.Message.EMPTY_LIST_SENTINEL_?e.array[t]=[]:o}if(e.extensionObject_)return(o=e.extensionObject_[t])===jspb.Message.EMPTY_LIST_SENTINEL_?e.extensionObject_[t]=[]:o},jspb.Message.getRepeatedField=function(e,t){return jspb.Message.getField(e,t)},jspb.Message.getOptionalFloatingPointField=function(e,t){return null==(e=jspb.Message.getField(e,t))?e:+e},jspb.Message.getBooleanField=function(e,t){return null==(e=jspb.Message.getField(e,t))?e:!!e},jspb.Message.getRepeatedFloatingPointField=function(e,t){var o=jspb.Message.getRepeatedField(e,t);if(e.convertedPrimitiveFields_||(e.convertedPrimitiveFields_={}),!e.convertedPrimitiveFields_[t]){for(var r=0;r<o.length;r++)o[r]=+o[r];e.convertedPrimitiveFields_[t]=!0}return o},jspb.Message.getRepeatedBooleanField=function(e,t){var o=jspb.Message.getRepeatedField(e,t);if(e.convertedPrimitiveFields_||(e.convertedPrimitiveFields_={}),!e.convertedPrimitiveFields_[t]){for(var r=0;r<o.length;r++)o[r]=!!o[r];e.convertedPrimitiveFields_[t]=!0}return o},jspb.Message.bytesAsB64=function(e){return null==e||"string"==typeof e?e:jspb.Message.SUPPORTS_UINT8ARRAY_&&e instanceof Uint8Array?goog.crypt.base64.encodeByteArray(e):(goog.asserts.fail("Cannot coerce to b64 string: "+goog.typeOf(e)),null)},jspb.Message.bytesAsU8=function(e){return null==e||e instanceof Uint8Array?e:"string"==typeof e?goog.crypt.base64.decodeStringToUint8Array(e):(goog.asserts.fail("Cannot coerce to Uint8Array: "+goog.typeOf(e)),null)},jspb.Message.bytesListAsB64=function(e){return jspb.Message.assertConsistentTypes_(e),e.length&&"string"!=typeof e[0]?goog.array.map(e,jspb.Message.bytesAsB64):e},jspb.Message.bytesListAsU8=function(e){return jspb.Message.assertConsistentTypes_(e),!e.length||e[0]instanceof Uint8Array?e:goog.array.map(e,jspb.Message.bytesAsU8)},jspb.Message.assertConsistentTypes_=function(e){if(goog.DEBUG&&e&&1<e.length){var t=goog.typeOf(e[0]);goog.array.forEach(e,(function(e){goog.typeOf(e)!=t&&goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got "+goog.typeOf(e)+" expected "+t)}))}},jspb.Message.getFieldWithDefault=function(e,t,o){return null==(e=jspb.Message.getField(e,t))?o:e},jspb.Message.getBooleanFieldWithDefault=function(e,t,o){return null==(e=jspb.Message.getBooleanField(e,t))?o:e},jspb.Message.getFloatingPointFieldWithDefault=function(e,t,o){return null==(e=jspb.Message.getOptionalFloatingPointField(e,t))?o:e},jspb.Message.getFieldProto3=jspb.Message.getFieldWithDefault,jspb.Message.getMapField=function(e,t,o,r){if(e.wrappers_||(e.wrappers_={}),t in e.wrappers_)return e.wrappers_[t];var s=jspb.Message.getField(e,t);if(!s){if(o)return;s=[],jspb.Message.setField(e,t,s)}return e.wrappers_[t]=new jspb.Map(s,r)},jspb.Message.setField=function(e,t,o){return goog.asserts.assertInstanceof(e,jspb.Message),t<e.pivot_?e.array[jspb.Message.getIndex_(e,t)]=o:(jspb.Message.maybeInitEmptyExtensionObject_(e),e.extensionObject_[t]=o),e},jspb.Message.setProto3IntField=function(e,t,o){return jspb.Message.setFieldIgnoringDefault_(e,t,o,0)},jspb.Message.setProto3FloatField=function(e,t,o){return jspb.Message.setFieldIgnoringDefault_(e,t,o,0)},jspb.Message.setProto3BooleanField=function(e,t,o){return jspb.Message.setFieldIgnoringDefault_(e,t,o,!1)},jspb.Message.setProto3StringField=function(e,t,o){return jspb.Message.setFieldIgnoringDefault_(e,t,o,"")},jspb.Message.setProto3BytesField=function(e,t,o){return jspb.Message.setFieldIgnoringDefault_(e,t,o,"")},jspb.Message.setProto3EnumField=function(e,t,o){return jspb.Message.setFieldIgnoringDefault_(e,t,o,0)},jspb.Message.setProto3StringIntField=function(e,t,o){return jspb.Message.setFieldIgnoringDefault_(e,t,o,"0")},jspb.Message.setFieldIgnoringDefault_=function(e,t,o,r){return goog.asserts.assertInstanceof(e,jspb.Message),o!==r?jspb.Message.setField(e,t,o):e.array[jspb.Message.getIndex_(e,t)]=null,e},jspb.Message.addToRepeatedField=function(e,t,o,r){return goog.asserts.assertInstanceof(e,jspb.Message),t=jspb.Message.getRepeatedField(e,t),null!=r?t.splice(r,0,o):t.push(o),e},jspb.Message.setOneofField=function(e,t,o,r){return goog.asserts.assertInstanceof(e,jspb.Message),(o=jspb.Message.computeOneofCase(e,o))&&o!==t&&void 0!==r&&(e.wrappers_&&o in e.wrappers_&&(e.wrappers_[o]=void 0),jspb.Message.setField(e,o,void 0)),jspb.Message.setField(e,t,r)},jspb.Message.computeOneofCase=function(e,t){for(var o,r,s=0;s<t.length;s++){var n=t[s],i=jspb.Message.getField(e,n);null!=i&&(o=n,r=i,jspb.Message.setField(e,n,void 0))}return o?(jspb.Message.setField(e,o,r),o):0},jspb.Message.getWrapperField=function(e,t,o,r){if(e.wrappers_||(e.wrappers_={}),!e.wrappers_[o]){var s=jspb.Message.getField(e,o);(r||s)&&(e.wrappers_[o]=new t(s))}return e.wrappers_[o]},jspb.Message.getRepeatedWrapperField=function(e,t,o){return jspb.Message.wrapRepeatedField_(e,t,o),(t=e.wrappers_[o])==jspb.Message.EMPTY_LIST_SENTINEL_&&(t=e.wrappers_[o]=[]),t},jspb.Message.wrapRepeatedField_=function(e,t,o){if(e.wrappers_||(e.wrappers_={}),!e.wrappers_[o]){for(var r=jspb.Message.getRepeatedField(e,o),s=[],n=0;n<r.length;n++)s[n]=new t(r[n]);e.wrappers_[o]=s}},jspb.Message.setWrapperField=function(e,t,o){goog.asserts.assertInstanceof(e,jspb.Message),e.wrappers_||(e.wrappers_={});var r=o?o.toArray():o;return e.wrappers_[t]=o,jspb.Message.setField(e,t,r)},jspb.Message.setOneofWrapperField=function(e,t,o,r){goog.asserts.assertInstanceof(e,jspb.Message),e.wrappers_||(e.wrappers_={});var s=r?r.toArray():r;return e.wrappers_[t]=r,jspb.Message.setOneofField(e,t,o,s)},jspb.Message.setRepeatedWrapperField=function(e,t,o){goog.asserts.assertInstanceof(e,jspb.Message),e.wrappers_||(e.wrappers_={}),o=o||[];for(var r=[],s=0;s<o.length;s++)r[s]=o[s].toArray();return e.wrappers_[t]=o,jspb.Message.setField(e,t,r)},jspb.Message.addToRepeatedWrapperField=function(e,t,o,r,s){jspb.Message.wrapRepeatedField_(e,r,t);var n=e.wrappers_[t];return n||(n=e.wrappers_[t]=[]),o=o||new r,e=jspb.Message.getRepeatedField(e,t),null!=s?(n.splice(s,0,o),e.splice(s,0,o.toArray())):(n.push(o),e.push(o.toArray())),o},jspb.Message.toMap=function(e,t,o,r){for(var s={},n=0;n<e.length;n++)s[t.call(e[n])]=o?o.call(e[n],r,e[n]):e[n];return s},jspb.Message.prototype.syncMapFields_=function(){if(this.wrappers_)for(var e in this.wrappers_){var t=this.wrappers_[e];if(goog.isArray(t))for(var o=0;o<t.length;o++)t[o]&&t[o].toArray();else t&&t.toArray()}},jspb.Message.prototype.toArray=function(){return this.syncMapFields_(),this.array},jspb.Message.GENERATE_TO_STRING&&(jspb.Message.prototype.toString=function(){return this.syncMapFields_(),this.array.toString()}),jspb.Message.prototype.getExtension=function(e){if(this.extensionObject_){this.wrappers_||(this.wrappers_={});var t=e.fieldIndex;if(e.isRepeated){if(e.isMessageType())return this.wrappers_[t]||(this.wrappers_[t]=goog.array.map(this.extensionObject_[t]||[],(function(t){return new e.ctor(t)}))),this.wrappers_[t]}else if(e.isMessageType())return!this.wrappers_[t]&&this.extensionObject_[t]&&(this.wrappers_[t]=new e.ctor(this.extensionObject_[t])),this.wrappers_[t];return this.extensionObject_[t]}},jspb.Message.prototype.setExtension=function(e,t){this.wrappers_||(this.wrappers_={}),jspb.Message.maybeInitEmptyExtensionObject_(this);var o=e.fieldIndex;return e.isRepeated?(t=t||[],e.isMessageType()?(this.wrappers_[o]=t,this.extensionObject_[o]=goog.array.map(t,(function(e){return e.toArray()}))):this.extensionObject_[o]=t):e.isMessageType()?(this.wrappers_[o]=t,this.extensionObject_[o]=t?t.toArray():t):this.extensionObject_[o]=t,this},jspb.Message.difference=function(e,t){if(!(e instanceof t.constructor))throw Error("Messages have different types.");var o=e.toArray();t=t.toArray();var r=[],s=0,n=o.length>t.length?o.length:t.length;for(e.getJsPbMessageId()&&(r[0]=e.getJsPbMessageId(),s=1);s<n;s++)jspb.Message.compareFields(o[s],t[s])||(r[s]=t[s]);return new e.constructor(r)},jspb.Message.equals=function(e,t){return e==t||!(!e||!t)&&e instanceof t.constructor&&jspb.Message.compareFields(e.toArray(),t.toArray())},jspb.Message.compareExtensions=function(e,t){e=e||{},t=t||{};var o,r={};for(o in e)r[o]=0;for(o in t)r[o]=0;for(o in r)if(!jspb.Message.compareFields(e[o],t[o]))return!1;return!0},jspb.Message.compareFields=function(e,t){if(e==t)return!0;if(!goog.isObject(e)||!goog.isObject(t))return!!("number"==typeof e&&isNaN(e)||"number"==typeof t&&isNaN(t))&&String(e)==String(t);if(e.constructor!=t.constructor)return!1;if(jspb.Message.SUPPORTS_UINT8ARRAY_&&e.constructor===Uint8Array){if(e.length!=t.length)return!1;for(var o=0;o<e.length;o++)if(e[o]!=t[o])return!1;return!0}if(e.constructor===Array){var r=void 0,s=void 0,n=Math.max(e.length,t.length);for(o=0;o<n;o++){var i=e[o],a=t[o];if(i&&i.constructor==Object&&(goog.asserts.assert(void 0===r),goog.asserts.assert(o===e.length-1),r=i,i=void 0),a&&a.constructor==Object&&(goog.asserts.assert(void 0===s),goog.asserts.assert(o===t.length-1),s=a,a=void 0),!jspb.Message.compareFields(i,a))return!1}return!r&&!s||(r=r||{},s=s||{},jspb.Message.compareExtensions(r,s))}if(e.constructor===Object)return jspb.Message.compareExtensions(e,t);throw Error("Invalid type in JSPB array")},jspb.Message.prototype.cloneMessage=function(){return jspb.Message.cloneMessage(this)},jspb.Message.prototype.clone=function(){return jspb.Message.cloneMessage(this)},jspb.Message.clone=function(e){return jspb.Message.cloneMessage(e)},jspb.Message.cloneMessage=function(e){return new e.constructor(jspb.Message.clone_(e.toArray()))},jspb.Message.copyInto=function(e,t){goog.asserts.assertInstanceof(e,jspb.Message),goog.asserts.assertInstanceof(t,jspb.Message),goog.asserts.assert(e.constructor==t.constructor,"Copy source and target message should have the same type."),e=jspb.Message.clone(e);for(var o=t.toArray(),r=e.toArray(),s=o.length=0;s<r.length;s++)o[s]=r[s];t.wrappers_=e.wrappers_,t.extensionObject_=e.extensionObject_},jspb.Message.clone_=function(e){if(goog.isArray(e)){for(var t=Array(e.length),o=0;o<e.length;o++){var r=e[o];null!=r&&(t[o]="object"==typeof r?jspb.Message.clone_(goog.asserts.assert(r)):r)}return t}if(jspb.Message.SUPPORTS_UINT8ARRAY_&&e instanceof Uint8Array)return new Uint8Array(e);for(o in t={},e)null!=(r=e[o])&&(t[o]="object"==typeof r?jspb.Message.clone_(goog.asserts.assert(r)):r);return t},jspb.Message.registerMessageType=function(e,t){t.messageId=e},jspb.Message.messageSetExtensions={},jspb.Message.messageSetExtensionsBinary={},jspb.arith={},jspb.arith.UInt64=function(e,t){this.lo=e,this.hi=t},jspb.arith.UInt64.prototype.cmp=function(e){return this.hi<e.hi||this.hi==e.hi&&this.lo<e.lo?-1:this.hi==e.hi&&this.lo==e.lo?0:1},jspb.arith.UInt64.prototype.rightShift=function(){return new jspb.arith.UInt64((this.lo>>>1|(1&this.hi)<<31)>>>0,this.hi>>>1>>>0)},jspb.arith.UInt64.prototype.leftShift=function(){return new jspb.arith.UInt64(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)},jspb.arith.UInt64.prototype.msb=function(){return!!(2147483648&this.hi)},jspb.arith.UInt64.prototype.lsb=function(){return!!(1&this.lo)},jspb.arith.UInt64.prototype.zero=function(){return 0==this.lo&&0==this.hi},jspb.arith.UInt64.prototype.add=function(e){return new jspb.arith.UInt64((this.lo+e.lo&4294967295)>>>0>>>0,((this.hi+e.hi&4294967295)>>>0)+(4294967296<=this.lo+e.lo?1:0)>>>0)},jspb.arith.UInt64.prototype.sub=function(e){return new jspb.arith.UInt64((this.lo-e.lo&4294967295)>>>0>>>0,((this.hi-e.hi&4294967295)>>>0)-(0>this.lo-e.lo?1:0)>>>0)},jspb.arith.UInt64.mul32x32=function(e,t){var o=65535&e,r=65535&t,s=t>>>16;for(t=o*r+65536*(o*s&65535)+65536*((e>>>=16)*r&65535),o=e*s+(o*s>>>16)+(e*r>>>16);4294967296<=t;)t-=4294967296,o+=1;return new jspb.arith.UInt64(t>>>0,o>>>0)},jspb.arith.UInt64.prototype.mul=function(e){var t=jspb.arith.UInt64.mul32x32(this.lo,e);return(e=jspb.arith.UInt64.mul32x32(this.hi,e)).hi=e.lo,e.lo=0,t.add(e)},jspb.arith.UInt64.prototype.div=function(e){if(0==e)return[];var t=new jspb.arith.UInt64(0,0),o=new jspb.arith.UInt64(this.lo,this.hi);e=new jspb.arith.UInt64(e,0);for(var r=new jspb.arith.UInt64(1,0);!e.msb();)e=e.leftShift(),r=r.leftShift();for(;!r.zero();)0>=e.cmp(o)&&(t=t.add(r),o=o.sub(e)),e=e.rightShift(),r=r.rightShift();return[t,o]},jspb.arith.UInt64.prototype.toString=function(){for(var e="",t=this;!t.zero();){var o=(t=t.div(10))[0];e=t[1].lo+e,t=o}return""==e&&(e="0"),e},jspb.arith.UInt64.fromString=function(e){for(var t=new jspb.arith.UInt64(0,0),o=new jspb.arith.UInt64(0,0),r=0;r<e.length;r++){if("0">e[r]||"9"<e[r])return null;var s=parseInt(e[r],10);o.lo=s,t=t.mul(10).add(o)}return t},jspb.arith.UInt64.prototype.clone=function(){return new jspb.arith.UInt64(this.lo,this.hi)},jspb.arith.Int64=function(e,t){this.lo=e,this.hi=t},jspb.arith.Int64.prototype.add=function(e){return new jspb.arith.Int64((this.lo+e.lo&4294967295)>>>0>>>0,((this.hi+e.hi&4294967295)>>>0)+(4294967296<=this.lo+e.lo?1:0)>>>0)},jspb.arith.Int64.prototype.sub=function(e){return new jspb.arith.Int64((this.lo-e.lo&4294967295)>>>0>>>0,((this.hi-e.hi&4294967295)>>>0)-(0>this.lo-e.lo?1:0)>>>0)},jspb.arith.Int64.prototype.clone=function(){return new jspb.arith.Int64(this.lo,this.hi)},jspb.arith.Int64.prototype.toString=function(){var e=0!=(2147483648&this.hi),t=new jspb.arith.UInt64(this.lo,this.hi);return e&&(t=new jspb.arith.UInt64(0,0).sub(t)),(e?"-":"")+t.toString()},jspb.arith.Int64.fromString=function(e){var t=0<e.length&&"-"==e[0];return t&&(e=e.substring(1)),null===(e=jspb.arith.UInt64.fromString(e))?null:(t&&(e=new jspb.arith.UInt64(0,0).sub(e)),new jspb.arith.Int64(e.lo,e.hi))},jspb.BinaryEncoder=function(){this.buffer_=[]},jspb.BinaryEncoder.prototype.length=function(){return this.buffer_.length},jspb.BinaryEncoder.prototype.end=function(){var e=this.buffer_;return this.buffer_=[],e},jspb.BinaryEncoder.prototype.writeSplitVarint64=function(e,t){for(goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(t==Math.floor(t)),goog.asserts.assert(0<=e&&e<jspb.BinaryConstants.TWO_TO_32),goog.asserts.assert(0<=t&&t<jspb.BinaryConstants.TWO_TO_32);0<t||127<e;)this.buffer_.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;this.buffer_.push(e)},jspb.BinaryEncoder.prototype.writeSplitFixed64=function(e,t){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(t==Math.floor(t)),goog.asserts.assert(0<=e&&e<jspb.BinaryConstants.TWO_TO_32),goog.asserts.assert(0<=t&&t<jspb.BinaryConstants.TWO_TO_32),this.writeUint32(e),this.writeUint32(t)},jspb.BinaryEncoder.prototype.writeUnsignedVarint32=function(e){for(goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(0<=e&&e<jspb.BinaryConstants.TWO_TO_32);127<e;)this.buffer_.push(127&e|128),e>>>=7;this.buffer_.push(e)},jspb.BinaryEncoder.prototype.writeSignedVarint32=function(e){if(goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(e>=-jspb.BinaryConstants.TWO_TO_31&&e<jspb.BinaryConstants.TWO_TO_31),0<=e)this.writeUnsignedVarint32(e);else{for(var t=0;9>t;t++)this.buffer_.push(127&e|128),e>>=7;this.buffer_.push(1)}},jspb.BinaryEncoder.prototype.writeUnsignedVarint64=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(0<=e&&e<jspb.BinaryConstants.TWO_TO_64),jspb.utils.splitInt64(e),this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeSignedVarint64=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(e>=-jspb.BinaryConstants.TWO_TO_63&&e<jspb.BinaryConstants.TWO_TO_63),jspb.utils.splitInt64(e),this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeZigzagVarint32=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(e>=-jspb.BinaryConstants.TWO_TO_31&&e<jspb.BinaryConstants.TWO_TO_31),this.writeUnsignedVarint32((e<<1^e>>31)>>>0)},jspb.BinaryEncoder.prototype.writeZigzagVarint64=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(e>=-jspb.BinaryConstants.TWO_TO_63&&e<jspb.BinaryConstants.TWO_TO_63),jspb.utils.splitZigzag64(e),this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeZigzagVarint64String=function(e){this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e))},jspb.BinaryEncoder.prototype.writeZigzagVarintHash64=function(e){var t=this;jspb.utils.splitHash64(e),jspb.utils.toZigzag64(jspb.utils.split64Low,jspb.utils.split64High,(function(e,o){t.writeSplitVarint64(e>>>0,o>>>0)}))},jspb.BinaryEncoder.prototype.writeUint8=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(0<=e&&256>e),this.buffer_.push(e>>>0&255)},jspb.BinaryEncoder.prototype.writeUint16=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(0<=e&&65536>e),this.buffer_.push(e>>>0&255),this.buffer_.push(e>>>8&255)},jspb.BinaryEncoder.prototype.writeUint32=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(0<=e&&e<jspb.BinaryConstants.TWO_TO_32),this.buffer_.push(e>>>0&255),this.buffer_.push(e>>>8&255),this.buffer_.push(e>>>16&255),this.buffer_.push(e>>>24&255)},jspb.BinaryEncoder.prototype.writeUint64=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(0<=e&&e<jspb.BinaryConstants.TWO_TO_64),jspb.utils.splitUint64(e),this.writeUint32(jspb.utils.split64Low),this.writeUint32(jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeInt8=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(-128<=e&&128>e),this.buffer_.push(e>>>0&255)},jspb.BinaryEncoder.prototype.writeInt16=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(-32768<=e&&32768>e),this.buffer_.push(e>>>0&255),this.buffer_.push(e>>>8&255)},jspb.BinaryEncoder.prototype.writeInt32=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(e>=-jspb.BinaryConstants.TWO_TO_31&&e<jspb.BinaryConstants.TWO_TO_31),this.buffer_.push(e>>>0&255),this.buffer_.push(e>>>8&255),this.buffer_.push(e>>>16&255),this.buffer_.push(e>>>24&255)},jspb.BinaryEncoder.prototype.writeInt64=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(e>=-jspb.BinaryConstants.TWO_TO_63&&e<jspb.BinaryConstants.TWO_TO_63),jspb.utils.splitInt64(e),this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeInt64String=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(+e>=-jspb.BinaryConstants.TWO_TO_63&&+e<jspb.BinaryConstants.TWO_TO_63),jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),this.writeSplitFixed64(jspb.utils.split64Low,jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeFloat=function(e){goog.asserts.assert(1/0===e||-1/0===e||isNaN(e)||e>=-jspb.BinaryConstants.FLOAT32_MAX&&e<=jspb.BinaryConstants.FLOAT32_MAX),jspb.utils.splitFloat32(e),this.writeUint32(jspb.utils.split64Low)},jspb.BinaryEncoder.prototype.writeDouble=function(e){goog.asserts.assert(1/0===e||-1/0===e||isNaN(e)||e>=-jspb.BinaryConstants.FLOAT64_MAX&&e<=jspb.BinaryConstants.FLOAT64_MAX),jspb.utils.splitFloat64(e),this.writeUint32(jspb.utils.split64Low),this.writeUint32(jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeBool=function(e){goog.asserts.assert("boolean"==typeof e||"number"==typeof e),this.buffer_.push(e?1:0)},jspb.BinaryEncoder.prototype.writeEnum=function(e){goog.asserts.assert(e==Math.floor(e)),goog.asserts.assert(e>=-jspb.BinaryConstants.TWO_TO_31&&e<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32(e)},jspb.BinaryEncoder.prototype.writeBytes=function(e){this.buffer_.push.apply(this.buffer_,e)},jspb.BinaryEncoder.prototype.writeVarintHash64=function(e){jspb.utils.splitHash64(e),this.writeSplitVarint64(jspb.utils.split64Low,jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeFixedHash64=function(e){jspb.utils.splitHash64(e),this.writeUint32(jspb.utils.split64Low),this.writeUint32(jspb.utils.split64High)},jspb.BinaryEncoder.prototype.writeString=function(e){for(var t=this.buffer_.length,o=0;o<e.length;o++){var r=e.charCodeAt(o);if(128>r)this.buffer_.push(r);else if(2048>r)this.buffer_.push(r>>6|192),this.buffer_.push(63&r|128);else if(65536>r)if(55296<=r&&56319>=r&&o+1<e.length){var s=e.charCodeAt(o+1);56320<=s&&57343>=s&&(r=1024*(r-55296)+s-56320+65536,this.buffer_.push(r>>18|240),this.buffer_.push(r>>12&63|128),this.buffer_.push(r>>6&63|128),this.buffer_.push(63&r|128),o++)}else this.buffer_.push(r>>12|224),this.buffer_.push(r>>6&63|128),this.buffer_.push(63&r|128)}return this.buffer_.length-t},jspb.BinaryWriter=function(){this.blocks_=[],this.totalLength_=0,this.encoder_=new jspb.BinaryEncoder,this.bookmarks_=[]},jspb.BinaryWriter.prototype.appendUint8Array_=function(e){var t=this.encoder_.end();this.blocks_.push(t),this.blocks_.push(e),this.totalLength_+=t.length+e.length},jspb.BinaryWriter.prototype.beginDelimited_=function(e){return this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),e=this.encoder_.end(),this.blocks_.push(e),this.totalLength_+=e.length,e.push(this.totalLength_),e},jspb.BinaryWriter.prototype.endDelimited_=function(e){var t=e.pop();for(t=this.totalLength_+this.encoder_.length()-t,goog.asserts.assert(0<=t);127<t;)e.push(127&t|128),t>>>=7,this.totalLength_++;e.push(t),this.totalLength_++},jspb.BinaryWriter.prototype.writeSerializedMessage=function(e,t,o){this.appendUint8Array_(e.subarray(t,o))},jspb.BinaryWriter.prototype.maybeWriteSerializedMessage=function(e,t,o){null!=e&&null!=t&&null!=o&&this.writeSerializedMessage(e,t,o)},jspb.BinaryWriter.prototype.reset=function(){this.blocks_=[],this.encoder_.end(),this.totalLength_=0,this.bookmarks_=[]},jspb.BinaryWriter.prototype.getResultBuffer=function(){goog.asserts.assert(0==this.bookmarks_.length);for(var e=new Uint8Array(this.totalLength_+this.encoder_.length()),t=this.blocks_,o=t.length,r=0,s=0;s<o;s++){var n=t[s];e.set(n,r),r+=n.length}return t=this.encoder_.end(),e.set(t,r),r+=t.length,goog.asserts.assert(r==e.length),this.blocks_=[e],e},jspb.BinaryWriter.prototype.getResultBase64String=function(e){return goog.crypt.base64.encodeByteArray(this.getResultBuffer(),e)},jspb.BinaryWriter.prototype.beginSubMessage=function(e){this.bookmarks_.push(this.beginDelimited_(e))},jspb.BinaryWriter.prototype.endSubMessage=function(){goog.asserts.assert(0<=this.bookmarks_.length),this.endDelimited_(this.bookmarks_.pop())},jspb.BinaryWriter.prototype.writeFieldHeader_=function(e,t){goog.asserts.assert(1<=e&&e==Math.floor(e)),this.encoder_.writeUnsignedVarint32(8*e+t)},jspb.BinaryWriter.prototype.writeAny=function(e,t,o){var r=jspb.BinaryConstants.FieldType;switch(e){case r.DOUBLE:this.writeDouble(t,o);break;case r.FLOAT:this.writeFloat(t,o);break;case r.INT64:this.writeInt64(t,o);break;case r.UINT64:this.writeUint64(t,o);break;case r.INT32:this.writeInt32(t,o);break;case r.FIXED64:this.writeFixed64(t,o);break;case r.FIXED32:this.writeFixed32(t,o);break;case r.BOOL:this.writeBool(t,o);break;case r.STRING:this.writeString(t,o);break;case r.GROUP:goog.asserts.fail("Group field type not supported in writeAny()");break;case r.MESSAGE:goog.asserts.fail("Message field type not supported in writeAny()");break;case r.BYTES:this.writeBytes(t,o);break;case r.UINT32:this.writeUint32(t,o);break;case r.ENUM:this.writeEnum(t,o);break;case r.SFIXED32:this.writeSfixed32(t,o);break;case r.SFIXED64:this.writeSfixed64(t,o);break;case r.SINT32:this.writeSint32(t,o);break;case r.SINT64:this.writeSint64(t,o);break;case r.FHASH64:this.writeFixedHash64(t,o);break;case r.VHASH64:this.writeVarintHash64(t,o);break;default:goog.asserts.fail("Invalid field type in writeAny()")}},jspb.BinaryWriter.prototype.writeUnsignedVarint32_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint32(t))},jspb.BinaryWriter.prototype.writeSignedVarint32_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(t))},jspb.BinaryWriter.prototype.writeUnsignedVarint64_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeUnsignedVarint64(t))},jspb.BinaryWriter.prototype.writeSignedVarint64_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint64(t))},jspb.BinaryWriter.prototype.writeZigzagVarint32_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint32(t))},jspb.BinaryWriter.prototype.writeZigzagVarint64_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64(t))},jspb.BinaryWriter.prototype.writeZigzagVarint64String_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarint64String(t))},jspb.BinaryWriter.prototype.writeZigzagVarintHash64_=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeZigzagVarintHash64(t))},jspb.BinaryWriter.prototype.writeInt32=function(e,t){null!=t&&(goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_31&&t<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(e,t))},jspb.BinaryWriter.prototype.writeInt32String=function(e,t){null!=t&&(t=parseInt(t,10),goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_31&&t<jspb.BinaryConstants.TWO_TO_31),this.writeSignedVarint32_(e,t))},jspb.BinaryWriter.prototype.writeInt64=function(e,t){null!=t&&(goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_63&&t<jspb.BinaryConstants.TWO_TO_63),this.writeSignedVarint64_(e,t))},jspb.BinaryWriter.prototype.writeInt64String=function(e,t){null!=t&&(t=jspb.arith.Int64.fromString(t),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(t.lo,t.hi))},jspb.BinaryWriter.prototype.writeUint32=function(e,t){null!=t&&(goog.asserts.assert(0<=t&&t<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(e,t))},jspb.BinaryWriter.prototype.writeUint32String=function(e,t){null!=t&&(t=parseInt(t,10),goog.asserts.assert(0<=t&&t<jspb.BinaryConstants.TWO_TO_32),this.writeUnsignedVarint32_(e,t))},jspb.BinaryWriter.prototype.writeUint64=function(e,t){null!=t&&(goog.asserts.assert(0<=t&&t<jspb.BinaryConstants.TWO_TO_64),this.writeUnsignedVarint64_(e,t))},jspb.BinaryWriter.prototype.writeUint64String=function(e,t){null!=t&&(t=jspb.arith.UInt64.fromString(t),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(t.lo,t.hi))},jspb.BinaryWriter.prototype.writeSint32=function(e,t){null!=t&&(goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_31&&t<jspb.BinaryConstants.TWO_TO_31),this.writeZigzagVarint32_(e,t))},jspb.BinaryWriter.prototype.writeSint64=function(e,t){null!=t&&(goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_63&&t<jspb.BinaryConstants.TWO_TO_63),this.writeZigzagVarint64_(e,t))},jspb.BinaryWriter.prototype.writeSintHash64=function(e,t){null!=t&&this.writeZigzagVarintHash64_(e,t)},jspb.BinaryWriter.prototype.writeSint64String=function(e,t){null!=t&&this.writeZigzagVarint64String_(e,t)},jspb.BinaryWriter.prototype.writeFixed32=function(e,t){null!=t&&(goog.asserts.assert(0<=t&&t<jspb.BinaryConstants.TWO_TO_32),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeUint32(t))},jspb.BinaryWriter.prototype.writeFixed64=function(e,t){null!=t&&(goog.asserts.assert(0<=t&&t<jspb.BinaryConstants.TWO_TO_64),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeUint64(t))},jspb.BinaryWriter.prototype.writeFixed64String=function(e,t){null!=t&&(t=jspb.arith.UInt64.fromString(t),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(t.lo,t.hi))},jspb.BinaryWriter.prototype.writeSfixed32=function(e,t){null!=t&&(goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_31&&t<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeInt32(t))},jspb.BinaryWriter.prototype.writeSfixed64=function(e,t){null!=t&&(goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_63&&t<jspb.BinaryConstants.TWO_TO_63),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeInt64(t))},jspb.BinaryWriter.prototype.writeSfixed64String=function(e,t){null!=t&&(t=jspb.arith.Int64.fromString(t),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(t.lo,t.hi))},jspb.BinaryWriter.prototype.writeFloat=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED32),this.encoder_.writeFloat(t))},jspb.BinaryWriter.prototype.writeDouble=function(e,t){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeDouble(t))},jspb.BinaryWriter.prototype.writeBool=function(e,t){null!=t&&(goog.asserts.assert("boolean"==typeof t||"number"==typeof t),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeBool(t))},jspb.BinaryWriter.prototype.writeEnum=function(e,t){null!=t&&(goog.asserts.assert(t>=-jspb.BinaryConstants.TWO_TO_31&&t<jspb.BinaryConstants.TWO_TO_31),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(t))},jspb.BinaryWriter.prototype.writeString=function(e,t){null!=t&&(e=this.beginDelimited_(e),this.encoder_.writeString(t),this.endDelimited_(e))},jspb.BinaryWriter.prototype.writeBytes=function(e,t){null!=t&&(t=jspb.utils.byteSourceToUint8Array(t),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(t.length),this.appendUint8Array_(t))},jspb.BinaryWriter.prototype.writeMessage=function(e,t,o){null!=t&&(e=this.beginDelimited_(e),o(t,this),this.endDelimited_(e))},jspb.BinaryWriter.prototype.writeMessageSet=function(e,t,o){null!=t&&(this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.START_GROUP),this.writeFieldHeader_(2,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSignedVarint32(e),e=this.beginDelimited_(3),o(t,this),this.endDelimited_(e),this.writeFieldHeader_(1,jspb.BinaryConstants.WireType.END_GROUP))},jspb.BinaryWriter.prototype.writeGroup=function(e,t,o){null!=t&&(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.START_GROUP),o(t,this),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.END_GROUP))},jspb.BinaryWriter.prototype.writeFixedHash64=function(e,t){null!=t&&(goog.asserts.assert(8==t.length),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeFixedHash64(t))},jspb.BinaryWriter.prototype.writeVarintHash64=function(e,t){null!=t&&(goog.asserts.assert(8==t.length),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeVarintHash64(t))},jspb.BinaryWriter.prototype.writeSplitFixed64=function(e,t,o){this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.FIXED64),this.encoder_.writeSplitFixed64(t,o)},jspb.BinaryWriter.prototype.writeSplitVarint64=function(e,t,o){this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT),this.encoder_.writeSplitVarint64(t,o)},jspb.BinaryWriter.prototype.writeSplitZigzagVarint64=function(e,t,o){this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.VARINT);var r=this.encoder_;jspb.utils.toZigzag64(t,o,(function(e,t){r.writeSplitVarint64(e>>>0,t>>>0)}))},jspb.BinaryWriter.prototype.writeRepeatedInt32=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeSignedVarint32_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedInt32String=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeInt32String(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedInt64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeSignedVarint64_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64=function(e,t,o,r){if(null!=t)for(var s=0;s<t.length;s++)this.writeSplitFixed64(e,o(t[s]),r(t[s]))},jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64=function(e,t,o,r){if(null!=t)for(var s=0;s<t.length;s++)this.writeSplitVarint64(e,o(t[s]),r(t[s]))},jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64=function(e,t,o,r){if(null!=t)for(var s=0;s<t.length;s++)this.writeSplitZigzagVarint64(e,o(t[s]),r(t[s]))},jspb.BinaryWriter.prototype.writeRepeatedInt64String=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeInt64String(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedUint32=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeUnsignedVarint32_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedUint32String=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeUint32String(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedUint64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeUnsignedVarint64_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedUint64String=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeUint64String(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSint32=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeZigzagVarint32_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSint64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeZigzagVarint64_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSint64String=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeZigzagVarint64String_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSintHash64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeZigzagVarintHash64_(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedFixed32=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeFixed32(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedFixed64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeFixed64(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedFixed64String=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeFixed64String(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSfixed32=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeSfixed32(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSfixed64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeSfixed64(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedSfixed64String=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeSfixed64String(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedFloat=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeFloat(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedDouble=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeDouble(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedBool=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeBool(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedEnum=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeEnum(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedString=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeString(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedBytes=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeBytes(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedMessage=function(e,t,o){if(null!=t)for(var r=0;r<t.length;r++){var s=this.beginDelimited_(e);o(t[r],this),this.endDelimited_(s)}},jspb.BinaryWriter.prototype.writeRepeatedGroup=function(e,t,o){if(null!=t)for(var r=0;r<t.length;r++)this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.START_GROUP),o(t[r],this),this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.END_GROUP)},jspb.BinaryWriter.prototype.writeRepeatedFixedHash64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeFixedHash64(e,t[o])},jspb.BinaryWriter.prototype.writeRepeatedVarintHash64=function(e,t){if(null!=t)for(var o=0;o<t.length;o++)this.writeVarintHash64(e,t[o])},jspb.BinaryWriter.prototype.writePackedInt32=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeSignedVarint32(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedInt32String=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeSignedVarint32(parseInt(t[o],10));this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedInt64=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeSignedVarint64(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedSplitFixed64=function(e,t,o,r){if(null!=t){e=this.beginDelimited_(e);for(var s=0;s<t.length;s++)this.encoder_.writeSplitFixed64(o(t[s]),r(t[s]));this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedSplitVarint64=function(e,t,o,r){if(null!=t){e=this.beginDelimited_(e);for(var s=0;s<t.length;s++)this.encoder_.writeSplitVarint64(o(t[s]),r(t[s]));this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64=function(e,t,o,r){if(null!=t){e=this.beginDelimited_(e);for(var s=this.encoder_,n=0;n<t.length;n++)jspb.utils.toZigzag64(o(t[n]),r(t[n]),(function(e,t){s.writeSplitVarint64(e>>>0,t>>>0)}));this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedInt64String=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++){var r=jspb.arith.Int64.fromString(t[o]);this.encoder_.writeSplitVarint64(r.lo,r.hi)}this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedUint32=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeUnsignedVarint32(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedUint32String=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeUnsignedVarint32(parseInt(t[o],10));this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedUint64=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeUnsignedVarint64(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedUint64String=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++){var r=jspb.arith.UInt64.fromString(t[o]);this.encoder_.writeSplitVarint64(r.lo,r.hi)}this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedSint32=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeZigzagVarint32(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedSint64=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeZigzagVarint64(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedSint64String=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t[o]));this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedSintHash64=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeZigzagVarintHash64(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedFixed32=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*t.length),e=0;e<t.length;e++)this.encoder_.writeUint32(t[e])},jspb.BinaryWriter.prototype.writePackedFixed64=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*t.length),e=0;e<t.length;e++)this.encoder_.writeUint64(t[e])},jspb.BinaryWriter.prototype.writePackedFixed64String=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*t.length),e=0;e<t.length;e++){var o=jspb.arith.UInt64.fromString(t[e]);this.encoder_.writeSplitFixed64(o.lo,o.hi)}},jspb.BinaryWriter.prototype.writePackedSfixed32=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*t.length),e=0;e<t.length;e++)this.encoder_.writeInt32(t[e])},jspb.BinaryWriter.prototype.writePackedSfixed64=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*t.length),e=0;e<t.length;e++)this.encoder_.writeInt64(t[e])},jspb.BinaryWriter.prototype.writePackedSfixed64String=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*t.length),e=0;e<t.length;e++)this.encoder_.writeInt64String(t[e])},jspb.BinaryWriter.prototype.writePackedFloat=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(4*t.length),e=0;e<t.length;e++)this.encoder_.writeFloat(t[e])},jspb.BinaryWriter.prototype.writePackedDouble=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*t.length),e=0;e<t.length;e++)this.encoder_.writeDouble(t[e])},jspb.BinaryWriter.prototype.writePackedBool=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(t.length),e=0;e<t.length;e++)this.encoder_.writeBool(t[e])},jspb.BinaryWriter.prototype.writePackedEnum=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeEnum(t[o]);this.endDelimited_(e)}},jspb.BinaryWriter.prototype.writePackedFixedHash64=function(e,t){if(null!=t&&t.length)for(this.writeFieldHeader_(e,jspb.BinaryConstants.WireType.DELIMITED),this.encoder_.writeUnsignedVarint32(8*t.length),e=0;e<t.length;e++)this.encoder_.writeFixedHash64(t[e])},jspb.BinaryWriter.prototype.writePackedVarintHash64=function(e,t){if(null!=t&&t.length){e=this.beginDelimited_(e);for(var o=0;o<t.length;o++)this.encoder_.writeVarintHash64(t[o]);this.endDelimited_(e)}},jspb.Export={},exports.Map=jspb.Map,exports.Message=jspb.Message,exports.BinaryReader=jspb.BinaryReader,exports.BinaryWriter=jspb.BinaryWriter,exports.ExtensionFieldInfo=jspb.ExtensionFieldInfo,exports.ExtensionFieldBinaryInfo=jspb.ExtensionFieldBinaryInfo,exports.exportSymbol=goog.exportSymbol,exports.inherits=goog.inherits,exports.object={extend:goog.object.extend},exports.typeOf=goog.typeOf},function(e,t,o){var r=o(0),s=r,n=Function("return this")();s.exportSymbol("proto.flow.entities.Account",null,n),s.exportSymbol("proto.flow.entities.AccountKey",null,n),proto.flow.entities.Account=function(e){r.Message.initialize(this,e,0,-1,proto.flow.entities.Account.repeatedFields_,null)},s.inherits(proto.flow.entities.Account,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.Account.displayName="proto.flow.entities.Account"),proto.flow.entities.AccountKey=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.entities.AccountKey,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.AccountKey.displayName="proto.flow.entities.AccountKey"),proto.flow.entities.Account.repeatedFields_=[4],r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.Account.prototype.toObject=function(e){return proto.flow.entities.Account.toObject(e,this)},proto.flow.entities.Account.toObject=function(e,t){var o,s={address:t.getAddress_asB64(),balance:r.Message.getFieldWithDefault(t,2,0),code:t.getCode_asB64(),keysList:r.Message.toObjectList(t.getKeysList(),proto.flow.entities.AccountKey.toObject,e),contractsMap:(o=t.getContractsMap())?o.toObject(e,void 0):[]};return e&&(s.$jspbMessageInstance=t),s}),proto.flow.entities.Account.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.Account;return proto.flow.entities.Account.deserializeBinaryFromReader(o,t)},proto.flow.entities.Account.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setAddress(o);break;case 2:o=t.readUint64();e.setBalance(o);break;case 3:o=t.readBytes();e.setCode(o);break;case 4:o=new proto.flow.entities.AccountKey;t.readMessage(o,proto.flow.entities.AccountKey.deserializeBinaryFromReader),e.addKeys(o);break;case 5:o=e.getContractsMap();t.readMessage(o,(function(e,t){r.Map.deserializeBinary(e,t,r.BinaryReader.prototype.readString,r.BinaryReader.prototype.readBytes,null,"","")}));break;default:t.skipField()}}return e},proto.flow.entities.Account.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.Account.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.Account.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getAddress_asU8()).length>0&&t.writeBytes(1,o),0!==(o=e.getBalance())&&t.writeUint64(2,o),(o=e.getCode_asU8()).length>0&&t.writeBytes(3,o),(o=e.getKeysList()).length>0&&t.writeRepeatedMessage(4,o,proto.flow.entities.AccountKey.serializeBinaryToWriter),(o=e.getContractsMap(!0))&&o.getLength()>0&&o.serializeBinary(5,t,r.BinaryWriter.prototype.writeString,r.BinaryWriter.prototype.writeBytes)},proto.flow.entities.Account.prototype.getAddress=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.Account.prototype.getAddress_asB64=function(){return r.Message.bytesAsB64(this.getAddress())},proto.flow.entities.Account.prototype.getAddress_asU8=function(){return r.Message.bytesAsU8(this.getAddress())},proto.flow.entities.Account.prototype.setAddress=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.Account.prototype.getBalance=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.entities.Account.prototype.setBalance=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.entities.Account.prototype.getCode=function(){return r.Message.getFieldWithDefault(this,3,"")},proto.flow.entities.Account.prototype.getCode_asB64=function(){return r.Message.bytesAsB64(this.getCode())},proto.flow.entities.Account.prototype.getCode_asU8=function(){return r.Message.bytesAsU8(this.getCode())},proto.flow.entities.Account.prototype.setCode=function(e){return r.Message.setProto3BytesField(this,3,e)},proto.flow.entities.Account.prototype.getKeysList=function(){return r.Message.getRepeatedWrapperField(this,proto.flow.entities.AccountKey,4)},proto.flow.entities.Account.prototype.setKeysList=function(e){return r.Message.setRepeatedWrapperField(this,4,e)},proto.flow.entities.Account.prototype.addKeys=function(e,t){return r.Message.addToRepeatedWrapperField(this,4,e,proto.flow.entities.AccountKey,t)},proto.flow.entities.Account.prototype.clearKeysList=function(){return this.setKeysList([])},proto.flow.entities.Account.prototype.getContractsMap=function(e){return r.Message.getMapField(this,5,e,null)},proto.flow.entities.Account.prototype.clearContractsMap=function(){return this.getContractsMap().clear(),this},r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.AccountKey.prototype.toObject=function(e){return proto.flow.entities.AccountKey.toObject(e,this)},proto.flow.entities.AccountKey.toObject=function(e,t){var o={index:r.Message.getFieldWithDefault(t,1,0),publicKey:t.getPublicKey_asB64(),signAlgo:r.Message.getFieldWithDefault(t,3,0),hashAlgo:r.Message.getFieldWithDefault(t,4,0),weight:r.Message.getFieldWithDefault(t,5,0),sequenceNumber:r.Message.getFieldWithDefault(t,6,0),revoked:r.Message.getBooleanFieldWithDefault(t,7,!1)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.entities.AccountKey.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.AccountKey;return proto.flow.entities.AccountKey.deserializeBinaryFromReader(o,t)},proto.flow.entities.AccountKey.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readUint32();e.setIndex(o);break;case 2:o=t.readBytes();e.setPublicKey(o);break;case 3:o=t.readUint32();e.setSignAlgo(o);break;case 4:o=t.readUint32();e.setHashAlgo(o);break;case 5:o=t.readUint32();e.setWeight(o);break;case 6:o=t.readUint32();e.setSequenceNumber(o);break;case 7:o=t.readBool();e.setRevoked(o);break;default:t.skipField()}}return e},proto.flow.entities.AccountKey.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.AccountKey.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.AccountKey.serializeBinaryToWriter=function(e,t){var o=void 0;0!==(o=e.getIndex())&&t.writeUint32(1,o),(o=e.getPublicKey_asU8()).length>0&&t.writeBytes(2,o),0!==(o=e.getSignAlgo())&&t.writeUint32(3,o),0!==(o=e.getHashAlgo())&&t.writeUint32(4,o),0!==(o=e.getWeight())&&t.writeUint32(5,o),0!==(o=e.getSequenceNumber())&&t.writeUint32(6,o),(o=e.getRevoked())&&t.writeBool(7,o)},proto.flow.entities.AccountKey.prototype.getIndex=function(){return r.Message.getFieldWithDefault(this,1,0)},proto.flow.entities.AccountKey.prototype.setIndex=function(e){return r.Message.setProto3IntField(this,1,e)},proto.flow.entities.AccountKey.prototype.getPublicKey=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.entities.AccountKey.prototype.getPublicKey_asB64=function(){return r.Message.bytesAsB64(this.getPublicKey())},proto.flow.entities.AccountKey.prototype.getPublicKey_asU8=function(){return r.Message.bytesAsU8(this.getPublicKey())},proto.flow.entities.AccountKey.prototype.setPublicKey=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.entities.AccountKey.prototype.getSignAlgo=function(){return r.Message.getFieldWithDefault(this,3,0)},proto.flow.entities.AccountKey.prototype.setSignAlgo=function(e){return r.Message.setProto3IntField(this,3,e)},proto.flow.entities.AccountKey.prototype.getHashAlgo=function(){return r.Message.getFieldWithDefault(this,4,0)},proto.flow.entities.AccountKey.prototype.setHashAlgo=function(e){return r.Message.setProto3IntField(this,4,e)},proto.flow.entities.AccountKey.prototype.getWeight=function(){return r.Message.getFieldWithDefault(this,5,0)},proto.flow.entities.AccountKey.prototype.setWeight=function(e){return r.Message.setProto3IntField(this,5,e)},proto.flow.entities.AccountKey.prototype.getSequenceNumber=function(){return r.Message.getFieldWithDefault(this,6,0)},proto.flow.entities.AccountKey.prototype.setSequenceNumber=function(e){return r.Message.setProto3IntField(this,6,e)},proto.flow.entities.AccountKey.prototype.getRevoked=function(){return r.Message.getBooleanFieldWithDefault(this,7,!1)},proto.flow.entities.AccountKey.prototype.setRevoked=function(e){return r.Message.setProto3BooleanField(this,7,e)},s.object.extend(t,proto.flow.entities)},function(e,t,o){var r=o(0),s=r,n=Function("return this")();s.exportSymbol("proto.flow.entities.Collection",null,n),s.exportSymbol("proto.flow.entities.CollectionGuarantee",null,n),proto.flow.entities.Collection=function(e){r.Message.initialize(this,e,0,-1,proto.flow.entities.Collection.repeatedFields_,null)},s.inherits(proto.flow.entities.Collection,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.Collection.displayName="proto.flow.entities.Collection"),proto.flow.entities.CollectionGuarantee=function(e){r.Message.initialize(this,e,0,-1,proto.flow.entities.CollectionGuarantee.repeatedFields_,null)},s.inherits(proto.flow.entities.CollectionGuarantee,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.CollectionGuarantee.displayName="proto.flow.entities.CollectionGuarantee"),proto.flow.entities.Collection.repeatedFields_=[2],r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.Collection.prototype.toObject=function(e){return proto.flow.entities.Collection.toObject(e,this)},proto.flow.entities.Collection.toObject=function(e,t){var o={id:t.getId_asB64(),transactionIdsList:t.getTransactionIdsList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.entities.Collection.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.Collection;return proto.flow.entities.Collection.deserializeBinaryFromReader(o,t)},proto.flow.entities.Collection.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;case 2:o=t.readBytes();e.addTransactionIds(o);break;default:t.skipField()}}return e},proto.flow.entities.Collection.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.Collection.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.Collection.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getTransactionIdsList_asU8()).length>0&&t.writeRepeatedBytes(2,o)},proto.flow.entities.Collection.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.Collection.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.entities.Collection.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.entities.Collection.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.Collection.prototype.getTransactionIdsList=function(){return r.Message.getRepeatedField(this,2)},proto.flow.entities.Collection.prototype.getTransactionIdsList_asB64=function(){return r.Message.bytesListAsB64(this.getTransactionIdsList())},proto.flow.entities.Collection.prototype.getTransactionIdsList_asU8=function(){return r.Message.bytesListAsU8(this.getTransactionIdsList())},proto.flow.entities.Collection.prototype.setTransactionIdsList=function(e){return r.Message.setField(this,2,e||[])},proto.flow.entities.Collection.prototype.addTransactionIds=function(e,t){return r.Message.addToRepeatedField(this,2,e,t)},proto.flow.entities.Collection.prototype.clearTransactionIdsList=function(){return this.setTransactionIdsList([])},proto.flow.entities.CollectionGuarantee.repeatedFields_=[2],r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.CollectionGuarantee.prototype.toObject=function(e){return proto.flow.entities.CollectionGuarantee.toObject(e,this)},proto.flow.entities.CollectionGuarantee.toObject=function(e,t){var o={collectionId:t.getCollectionId_asB64(),signaturesList:t.getSignaturesList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.entities.CollectionGuarantee.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.CollectionGuarantee;return proto.flow.entities.CollectionGuarantee.deserializeBinaryFromReader(o,t)},proto.flow.entities.CollectionGuarantee.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setCollectionId(o);break;case 2:o=t.readBytes();e.addSignatures(o);break;default:t.skipField()}}return e},proto.flow.entities.CollectionGuarantee.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.CollectionGuarantee.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.CollectionGuarantee.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getCollectionId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getSignaturesList_asU8()).length>0&&t.writeRepeatedBytes(2,o)},proto.flow.entities.CollectionGuarantee.prototype.getCollectionId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.CollectionGuarantee.prototype.getCollectionId_asB64=function(){return r.Message.bytesAsB64(this.getCollectionId())},proto.flow.entities.CollectionGuarantee.prototype.getCollectionId_asU8=function(){return r.Message.bytesAsU8(this.getCollectionId())},proto.flow.entities.CollectionGuarantee.prototype.setCollectionId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.CollectionGuarantee.prototype.getSignaturesList=function(){return r.Message.getRepeatedField(this,2)},proto.flow.entities.CollectionGuarantee.prototype.getSignaturesList_asB64=function(){return r.Message.bytesListAsB64(this.getSignaturesList())},proto.flow.entities.CollectionGuarantee.prototype.getSignaturesList_asU8=function(){return r.Message.bytesListAsU8(this.getSignaturesList())},proto.flow.entities.CollectionGuarantee.prototype.setSignaturesList=function(e){return r.Message.setField(this,2,e||[])},proto.flow.entities.CollectionGuarantee.prototype.addSignatures=function(e,t){return r.Message.addToRepeatedField(this,2,e,t)},proto.flow.entities.CollectionGuarantee.prototype.clearSignaturesList=function(){return this.setSignaturesList([])},s.object.extend(t,proto.flow.entities)},function(e,t,o){var r=o(0),s=r,n=Function("return this")();s.exportSymbol("proto.flow.entities.Event",null,n),proto.flow.entities.Event=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.entities.Event,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.Event.displayName="proto.flow.entities.Event"),r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.Event.prototype.toObject=function(e){return proto.flow.entities.Event.toObject(e,this)},proto.flow.entities.Event.toObject=function(e,t){var o={type:r.Message.getFieldWithDefault(t,1,""),transactionId:t.getTransactionId_asB64(),transactionIndex:r.Message.getFieldWithDefault(t,3,0),eventIndex:r.Message.getFieldWithDefault(t,4,0),payload:t.getPayload_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.entities.Event.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.Event;return proto.flow.entities.Event.deserializeBinaryFromReader(o,t)},proto.flow.entities.Event.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readString();e.setType(o);break;case 2:o=t.readBytes();e.setTransactionId(o);break;case 3:o=t.readUint32();e.setTransactionIndex(o);break;case 4:o=t.readUint32();e.setEventIndex(o);break;case 5:o=t.readBytes();e.setPayload(o);break;default:t.skipField()}}return e},proto.flow.entities.Event.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.Event.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.Event.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getType()).length>0&&t.writeString(1,o),(o=e.getTransactionId_asU8()).length>0&&t.writeBytes(2,o),0!==(o=e.getTransactionIndex())&&t.writeUint32(3,o),0!==(o=e.getEventIndex())&&t.writeUint32(4,o),(o=e.getPayload_asU8()).length>0&&t.writeBytes(5,o)},proto.flow.entities.Event.prototype.getType=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.Event.prototype.setType=function(e){return r.Message.setProto3StringField(this,1,e)},proto.flow.entities.Event.prototype.getTransactionId=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.entities.Event.prototype.getTransactionId_asB64=function(){return r.Message.bytesAsB64(this.getTransactionId())},proto.flow.entities.Event.prototype.getTransactionId_asU8=function(){return r.Message.bytesAsU8(this.getTransactionId())},proto.flow.entities.Event.prototype.setTransactionId=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.entities.Event.prototype.getTransactionIndex=function(){return r.Message.getFieldWithDefault(this,3,0)},proto.flow.entities.Event.prototype.setTransactionIndex=function(e){return r.Message.setProto3IntField(this,3,e)},proto.flow.entities.Event.prototype.getEventIndex=function(){return r.Message.getFieldWithDefault(this,4,0)},proto.flow.entities.Event.prototype.setEventIndex=function(e){return r.Message.setProto3IntField(this,4,e)},proto.flow.entities.Event.prototype.getPayload=function(){return r.Message.getFieldWithDefault(this,5,"")},proto.flow.entities.Event.prototype.getPayload_asB64=function(){return r.Message.bytesAsB64(this.getPayload())},proto.flow.entities.Event.prototype.getPayload_asU8=function(){return r.Message.bytesAsU8(this.getPayload())},proto.flow.entities.Event.prototype.setPayload=function(e){return r.Message.setProto3BytesField(this,5,e)},s.object.extend(t,proto.flow.entities)},function(e,t,o){var r=o(0),s=r,n=Function("return this")(),i=o(1);s.object.extend(proto,i);var a=o(5);s.object.extend(proto,a);var g=o(7);s.object.extend(proto,g);var l=o(2);s.object.extend(proto,l);var c=o(3);s.object.extend(proto,c);var u=o(9);s.object.extend(proto,u);var p=o(6);s.object.extend(proto,p),s.exportSymbol("proto.flow.access.AccountResponse",null,n),s.exportSymbol("proto.flow.access.BlockHeaderResponse",null,n),s.exportSymbol("proto.flow.access.BlockResponse",null,n),s.exportSymbol("proto.flow.access.CollectionResponse",null,n),s.exportSymbol("proto.flow.access.EventsResponse",null,n),s.exportSymbol("proto.flow.access.EventsResponse.Result",null,n),s.exportSymbol("proto.flow.access.ExecuteScriptAtBlockHeightRequest",null,n),s.exportSymbol("proto.flow.access.ExecuteScriptAtBlockIDRequest",null,n),s.exportSymbol("proto.flow.access.ExecuteScriptAtLatestBlockRequest",null,n),s.exportSymbol("proto.flow.access.ExecuteScriptResponse",null,n),s.exportSymbol("proto.flow.access.GetAccountAtBlockHeightRequest",null,n),s.exportSymbol("proto.flow.access.GetAccountAtLatestBlockRequest",null,n),s.exportSymbol("proto.flow.access.GetAccountRequest",null,n),s.exportSymbol("proto.flow.access.GetAccountResponse",null,n),s.exportSymbol("proto.flow.access.GetBlockByHeightRequest",null,n),s.exportSymbol("proto.flow.access.GetBlockByIDRequest",null,n),s.exportSymbol("proto.flow.access.GetBlockHeaderByHeightRequest",null,n),s.exportSymbol("proto.flow.access.GetBlockHeaderByIDRequest",null,n),s.exportSymbol("proto.flow.access.GetCollectionByIDRequest",null,n),s.exportSymbol("proto.flow.access.GetEventsForBlockIDsRequest",null,n),s.exportSymbol("proto.flow.access.GetEventsForHeightRangeRequest",null,n),s.exportSymbol("proto.flow.access.GetLatestBlockHeaderRequest",null,n),s.exportSymbol("proto.flow.access.GetLatestBlockRequest",null,n),s.exportSymbol("proto.flow.access.GetNetworkParametersRequest",null,n),s.exportSymbol("proto.flow.access.GetNetworkParametersResponse",null,n),s.exportSymbol("proto.flow.access.GetTransactionRequest",null,n),s.exportSymbol("proto.flow.access.PingRequest",null,n),s.exportSymbol("proto.flow.access.PingResponse",null,n),s.exportSymbol("proto.flow.access.SendTransactionRequest",null,n),s.exportSymbol("proto.flow.access.SendTransactionResponse",null,n),s.exportSymbol("proto.flow.access.TransactionResponse",null,n),s.exportSymbol("proto.flow.access.TransactionResultResponse",null,n),proto.flow.access.PingRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.PingRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.PingRequest.displayName="proto.flow.access.PingRequest"),proto.flow.access.PingResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.PingResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.PingResponse.displayName="proto.flow.access.PingResponse"),proto.flow.access.GetLatestBlockHeaderRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetLatestBlockHeaderRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetLatestBlockHeaderRequest.displayName="proto.flow.access.GetLatestBlockHeaderRequest"),proto.flow.access.GetBlockHeaderByIDRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetBlockHeaderByIDRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetBlockHeaderByIDRequest.displayName="proto.flow.access.GetBlockHeaderByIDRequest"),proto.flow.access.GetBlockHeaderByHeightRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetBlockHeaderByHeightRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetBlockHeaderByHeightRequest.displayName="proto.flow.access.GetBlockHeaderByHeightRequest"),proto.flow.access.BlockHeaderResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.BlockHeaderResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.BlockHeaderResponse.displayName="proto.flow.access.BlockHeaderResponse"),proto.flow.access.GetLatestBlockRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetLatestBlockRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetLatestBlockRequest.displayName="proto.flow.access.GetLatestBlockRequest"),proto.flow.access.GetBlockByIDRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetBlockByIDRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetBlockByIDRequest.displayName="proto.flow.access.GetBlockByIDRequest"),proto.flow.access.GetBlockByHeightRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetBlockByHeightRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetBlockByHeightRequest.displayName="proto.flow.access.GetBlockByHeightRequest"),proto.flow.access.BlockResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.BlockResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.BlockResponse.displayName="proto.flow.access.BlockResponse"),proto.flow.access.GetCollectionByIDRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetCollectionByIDRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetCollectionByIDRequest.displayName="proto.flow.access.GetCollectionByIDRequest"),proto.flow.access.CollectionResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.CollectionResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.CollectionResponse.displayName="proto.flow.access.CollectionResponse"),proto.flow.access.SendTransactionRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.SendTransactionRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.SendTransactionRequest.displayName="proto.flow.access.SendTransactionRequest"),proto.flow.access.SendTransactionResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.SendTransactionResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.SendTransactionResponse.displayName="proto.flow.access.SendTransactionResponse"),proto.flow.access.GetTransactionRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetTransactionRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetTransactionRequest.displayName="proto.flow.access.GetTransactionRequest"),proto.flow.access.TransactionResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.TransactionResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.TransactionResponse.displayName="proto.flow.access.TransactionResponse"),proto.flow.access.TransactionResultResponse=function(e){r.Message.initialize(this,e,0,-1,proto.flow.access.TransactionResultResponse.repeatedFields_,null)},s.inherits(proto.flow.access.TransactionResultResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.TransactionResultResponse.displayName="proto.flow.access.TransactionResultResponse"),proto.flow.access.GetAccountRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetAccountRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetAccountRequest.displayName="proto.flow.access.GetAccountRequest"),proto.flow.access.GetAccountResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetAccountResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetAccountResponse.displayName="proto.flow.access.GetAccountResponse"),proto.flow.access.GetAccountAtLatestBlockRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetAccountAtLatestBlockRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetAccountAtLatestBlockRequest.displayName="proto.flow.access.GetAccountAtLatestBlockRequest"),proto.flow.access.AccountResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.AccountResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.AccountResponse.displayName="proto.flow.access.AccountResponse"),proto.flow.access.GetAccountAtBlockHeightRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetAccountAtBlockHeightRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetAccountAtBlockHeightRequest.displayName="proto.flow.access.GetAccountAtBlockHeightRequest"),proto.flow.access.ExecuteScriptAtLatestBlockRequest=function(e){r.Message.initialize(this,e,0,-1,proto.flow.access.ExecuteScriptAtLatestBlockRequest.repeatedFields_,null)},s.inherits(proto.flow.access.ExecuteScriptAtLatestBlockRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.ExecuteScriptAtLatestBlockRequest.displayName="proto.flow.access.ExecuteScriptAtLatestBlockRequest"),proto.flow.access.ExecuteScriptAtBlockIDRequest=function(e){r.Message.initialize(this,e,0,-1,proto.flow.access.ExecuteScriptAtBlockIDRequest.repeatedFields_,null)},s.inherits(proto.flow.access.ExecuteScriptAtBlockIDRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.ExecuteScriptAtBlockIDRequest.displayName="proto.flow.access.ExecuteScriptAtBlockIDRequest"),proto.flow.access.ExecuteScriptAtBlockHeightRequest=function(e){r.Message.initialize(this,e,0,-1,proto.flow.access.ExecuteScriptAtBlockHeightRequest.repeatedFields_,null)},s.inherits(proto.flow.access.ExecuteScriptAtBlockHeightRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.ExecuteScriptAtBlockHeightRequest.displayName="proto.flow.access.ExecuteScriptAtBlockHeightRequest"),proto.flow.access.ExecuteScriptResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.ExecuteScriptResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.ExecuteScriptResponse.displayName="proto.flow.access.ExecuteScriptResponse"),proto.flow.access.GetEventsForHeightRangeRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetEventsForHeightRangeRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetEventsForHeightRangeRequest.displayName="proto.flow.access.GetEventsForHeightRangeRequest"),proto.flow.access.GetEventsForBlockIDsRequest=function(e){r.Message.initialize(this,e,0,-1,proto.flow.access.GetEventsForBlockIDsRequest.repeatedFields_,null)},s.inherits(proto.flow.access.GetEventsForBlockIDsRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetEventsForBlockIDsRequest.displayName="proto.flow.access.GetEventsForBlockIDsRequest"),proto.flow.access.EventsResponse=function(e){r.Message.initialize(this,e,0,-1,proto.flow.access.EventsResponse.repeatedFields_,null)},s.inherits(proto.flow.access.EventsResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.EventsResponse.displayName="proto.flow.access.EventsResponse"),proto.flow.access.EventsResponse.Result=function(e){r.Message.initialize(this,e,0,-1,proto.flow.access.EventsResponse.Result.repeatedFields_,null)},s.inherits(proto.flow.access.EventsResponse.Result,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.EventsResponse.Result.displayName="proto.flow.access.EventsResponse.Result"),proto.flow.access.GetNetworkParametersRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetNetworkParametersRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetNetworkParametersRequest.displayName="proto.flow.access.GetNetworkParametersRequest"),proto.flow.access.GetNetworkParametersResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.access.GetNetworkParametersResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.access.GetNetworkParametersResponse.displayName="proto.flow.access.GetNetworkParametersResponse"),r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.PingRequest.prototype.toObject=function(e){return proto.flow.access.PingRequest.toObject(e,this)},proto.flow.access.PingRequest.toObject=function(e,t){var o={};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.PingRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.PingRequest;return proto.flow.access.PingRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.PingRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){t.getFieldNumber();t.skipField()}return e},proto.flow.access.PingRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.PingRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.PingRequest.serializeBinaryToWriter=function(e,t){},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.PingResponse.prototype.toObject=function(e){return proto.flow.access.PingResponse.toObject(e,this)},proto.flow.access.PingResponse.toObject=function(e,t){var o={};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.PingResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.PingResponse;return proto.flow.access.PingResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.PingResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){t.getFieldNumber();t.skipField()}return e},proto.flow.access.PingResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.PingResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.PingResponse.serializeBinaryToWriter=function(e,t){},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetLatestBlockHeaderRequest.prototype.toObject=function(e){return proto.flow.access.GetLatestBlockHeaderRequest.toObject(e,this)},proto.flow.access.GetLatestBlockHeaderRequest.toObject=function(e,t){var o={isSealed:r.Message.getBooleanFieldWithDefault(t,1,!1)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetLatestBlockHeaderRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetLatestBlockHeaderRequest;return proto.flow.access.GetLatestBlockHeaderRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetLatestBlockHeaderRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBool();e.setIsSealed(o);break;default:t.skipField()}}return e},proto.flow.access.GetLatestBlockHeaderRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetLatestBlockHeaderRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetLatestBlockHeaderRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getIsSealed())&&t.writeBool(1,o)},proto.flow.access.GetLatestBlockHeaderRequest.prototype.getIsSealed=function(){return r.Message.getBooleanFieldWithDefault(this,1,!1)},proto.flow.access.GetLatestBlockHeaderRequest.prototype.setIsSealed=function(e){return r.Message.setProto3BooleanField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetBlockHeaderByIDRequest.prototype.toObject=function(e){return proto.flow.access.GetBlockHeaderByIDRequest.toObject(e,this)},proto.flow.access.GetBlockHeaderByIDRequest.toObject=function(e,t){var o={id:t.getId_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetBlockHeaderByIDRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetBlockHeaderByIDRequest;return proto.flow.access.GetBlockHeaderByIDRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetBlockHeaderByIDRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;default:t.skipField()}}return e},proto.flow.access.GetBlockHeaderByIDRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetBlockHeaderByIDRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetBlockHeaderByIDRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.GetBlockHeaderByIDRequest.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetBlockHeaderByIDRequest.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.access.GetBlockHeaderByIDRequest.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.access.GetBlockHeaderByIDRequest.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetBlockHeaderByHeightRequest.prototype.toObject=function(e){return proto.flow.access.GetBlockHeaderByHeightRequest.toObject(e,this)},proto.flow.access.GetBlockHeaderByHeightRequest.toObject=function(e,t){var o={height:r.Message.getFieldWithDefault(t,1,0)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetBlockHeaderByHeightRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetBlockHeaderByHeightRequest;return proto.flow.access.GetBlockHeaderByHeightRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetBlockHeaderByHeightRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readUint64();e.setHeight(o);break;default:t.skipField()}}return e},proto.flow.access.GetBlockHeaderByHeightRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetBlockHeaderByHeightRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetBlockHeaderByHeightRequest.serializeBinaryToWriter=function(e,t){var o;0!==(o=e.getHeight())&&t.writeUint64(1,o)},proto.flow.access.GetBlockHeaderByHeightRequest.prototype.getHeight=function(){return r.Message.getFieldWithDefault(this,1,0)},proto.flow.access.GetBlockHeaderByHeightRequest.prototype.setHeight=function(e){return r.Message.setProto3IntField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.BlockHeaderResponse.prototype.toObject=function(e){return proto.flow.access.BlockHeaderResponse.toObject(e,this)},proto.flow.access.BlockHeaderResponse.toObject=function(e,t){var o,r={block:(o=t.getBlock())&&a.BlockHeader.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.access.BlockHeaderResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.BlockHeaderResponse;return proto.flow.access.BlockHeaderResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.BlockHeaderResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new a.BlockHeader;t.readMessage(o,a.BlockHeader.deserializeBinaryFromReader),e.setBlock(o);break;default:t.skipField()}}return e},proto.flow.access.BlockHeaderResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.BlockHeaderResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.BlockHeaderResponse.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getBlock())&&t.writeMessage(1,o,a.BlockHeader.serializeBinaryToWriter)},proto.flow.access.BlockHeaderResponse.prototype.getBlock=function(){return r.Message.getWrapperField(this,a.BlockHeader,1)},proto.flow.access.BlockHeaderResponse.prototype.setBlock=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.access.BlockHeaderResponse.prototype.clearBlock=function(){return this.setBlock(void 0)},proto.flow.access.BlockHeaderResponse.prototype.hasBlock=function(){return null!=r.Message.getField(this,1)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetLatestBlockRequest.prototype.toObject=function(e){return proto.flow.access.GetLatestBlockRequest.toObject(e,this)},proto.flow.access.GetLatestBlockRequest.toObject=function(e,t){var o={isSealed:r.Message.getBooleanFieldWithDefault(t,1,!1)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetLatestBlockRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetLatestBlockRequest;return proto.flow.access.GetLatestBlockRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetLatestBlockRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBool();e.setIsSealed(o);break;default:t.skipField()}}return e},proto.flow.access.GetLatestBlockRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetLatestBlockRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetLatestBlockRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getIsSealed())&&t.writeBool(1,o)},proto.flow.access.GetLatestBlockRequest.prototype.getIsSealed=function(){return r.Message.getBooleanFieldWithDefault(this,1,!1)},proto.flow.access.GetLatestBlockRequest.prototype.setIsSealed=function(e){return r.Message.setProto3BooleanField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetBlockByIDRequest.prototype.toObject=function(e){return proto.flow.access.GetBlockByIDRequest.toObject(e,this)},proto.flow.access.GetBlockByIDRequest.toObject=function(e,t){var o={id:t.getId_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetBlockByIDRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetBlockByIDRequest;return proto.flow.access.GetBlockByIDRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetBlockByIDRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;default:t.skipField()}}return e},proto.flow.access.GetBlockByIDRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetBlockByIDRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetBlockByIDRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.GetBlockByIDRequest.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetBlockByIDRequest.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.access.GetBlockByIDRequest.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.access.GetBlockByIDRequest.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetBlockByHeightRequest.prototype.toObject=function(e){return proto.flow.access.GetBlockByHeightRequest.toObject(e,this)},proto.flow.access.GetBlockByHeightRequest.toObject=function(e,t){var o={height:r.Message.getFieldWithDefault(t,1,0)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetBlockByHeightRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetBlockByHeightRequest;return proto.flow.access.GetBlockByHeightRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetBlockByHeightRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readUint64();e.setHeight(o);break;default:t.skipField()}}return e},proto.flow.access.GetBlockByHeightRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetBlockByHeightRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetBlockByHeightRequest.serializeBinaryToWriter=function(e,t){var o;0!==(o=e.getHeight())&&t.writeUint64(1,o)},proto.flow.access.GetBlockByHeightRequest.prototype.getHeight=function(){return r.Message.getFieldWithDefault(this,1,0)},proto.flow.access.GetBlockByHeightRequest.prototype.setHeight=function(e){return r.Message.setProto3IntField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.BlockResponse.prototype.toObject=function(e){return proto.flow.access.BlockResponse.toObject(e,this)},proto.flow.access.BlockResponse.toObject=function(e,t){var o,r={block:(o=t.getBlock())&&g.Block.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.access.BlockResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.BlockResponse;return proto.flow.access.BlockResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.BlockResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new g.Block;t.readMessage(o,g.Block.deserializeBinaryFromReader),e.setBlock(o);break;default:t.skipField()}}return e},proto.flow.access.BlockResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.BlockResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.BlockResponse.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getBlock())&&t.writeMessage(1,o,g.Block.serializeBinaryToWriter)},proto.flow.access.BlockResponse.prototype.getBlock=function(){return r.Message.getWrapperField(this,g.Block,1)},proto.flow.access.BlockResponse.prototype.setBlock=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.access.BlockResponse.prototype.clearBlock=function(){return this.setBlock(void 0)},proto.flow.access.BlockResponse.prototype.hasBlock=function(){return null!=r.Message.getField(this,1)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetCollectionByIDRequest.prototype.toObject=function(e){return proto.flow.access.GetCollectionByIDRequest.toObject(e,this)},proto.flow.access.GetCollectionByIDRequest.toObject=function(e,t){var o={id:t.getId_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetCollectionByIDRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetCollectionByIDRequest;return proto.flow.access.GetCollectionByIDRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetCollectionByIDRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;default:t.skipField()}}return e},proto.flow.access.GetCollectionByIDRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetCollectionByIDRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetCollectionByIDRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.GetCollectionByIDRequest.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetCollectionByIDRequest.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.access.GetCollectionByIDRequest.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.access.GetCollectionByIDRequest.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.CollectionResponse.prototype.toObject=function(e){return proto.flow.access.CollectionResponse.toObject(e,this)},proto.flow.access.CollectionResponse.toObject=function(e,t){var o,r={collection:(o=t.getCollection())&&l.Collection.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.access.CollectionResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.CollectionResponse;return proto.flow.access.CollectionResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.CollectionResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new l.Collection;t.readMessage(o,l.Collection.deserializeBinaryFromReader),e.setCollection(o);break;default:t.skipField()}}return e},proto.flow.access.CollectionResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.CollectionResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.CollectionResponse.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getCollection())&&t.writeMessage(1,o,l.Collection.serializeBinaryToWriter)},proto.flow.access.CollectionResponse.prototype.getCollection=function(){return r.Message.getWrapperField(this,l.Collection,1)},proto.flow.access.CollectionResponse.prototype.setCollection=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.access.CollectionResponse.prototype.clearCollection=function(){return this.setCollection(void 0)},proto.flow.access.CollectionResponse.prototype.hasCollection=function(){return null!=r.Message.getField(this,1)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.SendTransactionRequest.prototype.toObject=function(e){return proto.flow.access.SendTransactionRequest.toObject(e,this)},proto.flow.access.SendTransactionRequest.toObject=function(e,t){var o,r={transaction:(o=t.getTransaction())&&u.Transaction.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.access.SendTransactionRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.SendTransactionRequest;return proto.flow.access.SendTransactionRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.SendTransactionRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new u.Transaction;t.readMessage(o,u.Transaction.deserializeBinaryFromReader),e.setTransaction(o);break;default:t.skipField()}}return e},proto.flow.access.SendTransactionRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.SendTransactionRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.SendTransactionRequest.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getTransaction())&&t.writeMessage(1,o,u.Transaction.serializeBinaryToWriter)},proto.flow.access.SendTransactionRequest.prototype.getTransaction=function(){return r.Message.getWrapperField(this,u.Transaction,1)},proto.flow.access.SendTransactionRequest.prototype.setTransaction=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.access.SendTransactionRequest.prototype.clearTransaction=function(){return this.setTransaction(void 0)},proto.flow.access.SendTransactionRequest.prototype.hasTransaction=function(){return null!=r.Message.getField(this,1)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.SendTransactionResponse.prototype.toObject=function(e){return proto.flow.access.SendTransactionResponse.toObject(e,this)},proto.flow.access.SendTransactionResponse.toObject=function(e,t){var o={id:t.getId_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.SendTransactionResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.SendTransactionResponse;return proto.flow.access.SendTransactionResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.SendTransactionResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;default:t.skipField()}}return e},proto.flow.access.SendTransactionResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.SendTransactionResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.SendTransactionResponse.serializeBinaryToWriter=function(e,t){var o;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.SendTransactionResponse.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.SendTransactionResponse.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.access.SendTransactionResponse.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.access.SendTransactionResponse.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetTransactionRequest.prototype.toObject=function(e){return proto.flow.access.GetTransactionRequest.toObject(e,this)},proto.flow.access.GetTransactionRequest.toObject=function(e,t){var o={id:t.getId_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetTransactionRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetTransactionRequest;return proto.flow.access.GetTransactionRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetTransactionRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;default:t.skipField()}}return e},proto.flow.access.GetTransactionRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetTransactionRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetTransactionRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.GetTransactionRequest.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetTransactionRequest.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.access.GetTransactionRequest.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.access.GetTransactionRequest.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.TransactionResponse.prototype.toObject=function(e){return proto.flow.access.TransactionResponse.toObject(e,this)},proto.flow.access.TransactionResponse.toObject=function(e,t){var o,r={transaction:(o=t.getTransaction())&&u.Transaction.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.access.TransactionResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.TransactionResponse;return proto.flow.access.TransactionResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.TransactionResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new u.Transaction;t.readMessage(o,u.Transaction.deserializeBinaryFromReader),e.setTransaction(o);break;default:t.skipField()}}return e},proto.flow.access.TransactionResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.TransactionResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.TransactionResponse.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getTransaction())&&t.writeMessage(1,o,u.Transaction.serializeBinaryToWriter)},proto.flow.access.TransactionResponse.prototype.getTransaction=function(){return r.Message.getWrapperField(this,u.Transaction,1)},proto.flow.access.TransactionResponse.prototype.setTransaction=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.access.TransactionResponse.prototype.clearTransaction=function(){return this.setTransaction(void 0)},proto.flow.access.TransactionResponse.prototype.hasTransaction=function(){return null!=r.Message.getField(this,1)},proto.flow.access.TransactionResultResponse.repeatedFields_=[4],r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.TransactionResultResponse.prototype.toObject=function(e){return proto.flow.access.TransactionResultResponse.toObject(e,this)},proto.flow.access.TransactionResultResponse.toObject=function(e,t){var o={status:r.Message.getFieldWithDefault(t,1,0),statusCode:r.Message.getFieldWithDefault(t,2,0),errorMessage:r.Message.getFieldWithDefault(t,3,""),eventsList:r.Message.toObjectList(t.getEventsList(),c.Event.toObject,e)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.TransactionResultResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.TransactionResultResponse;return proto.flow.access.TransactionResultResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.TransactionResultResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readEnum();e.setStatus(o);break;case 2:o=t.readUint32();e.setStatusCode(o);break;case 3:o=t.readString();e.setErrorMessage(o);break;case 4:o=new c.Event;t.readMessage(o,c.Event.deserializeBinaryFromReader),e.addEvents(o);break;default:t.skipField()}}return e},proto.flow.access.TransactionResultResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.TransactionResultResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.TransactionResultResponse.serializeBinaryToWriter=function(e,t){var o=void 0;0!==(o=e.getStatus())&&t.writeEnum(1,o),0!==(o=e.getStatusCode())&&t.writeUint32(2,o),(o=e.getErrorMessage()).length>0&&t.writeString(3,o),(o=e.getEventsList()).length>0&&t.writeRepeatedMessage(4,o,c.Event.serializeBinaryToWriter)},proto.flow.access.TransactionResultResponse.prototype.getStatus=function(){return r.Message.getFieldWithDefault(this,1,0)},proto.flow.access.TransactionResultResponse.prototype.setStatus=function(e){return r.Message.setProto3EnumField(this,1,e)},proto.flow.access.TransactionResultResponse.prototype.getStatusCode=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.access.TransactionResultResponse.prototype.setStatusCode=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.access.TransactionResultResponse.prototype.getErrorMessage=function(){return r.Message.getFieldWithDefault(this,3,"")},proto.flow.access.TransactionResultResponse.prototype.setErrorMessage=function(e){return r.Message.setProto3StringField(this,3,e)},proto.flow.access.TransactionResultResponse.prototype.getEventsList=function(){return r.Message.getRepeatedWrapperField(this,c.Event,4)},proto.flow.access.TransactionResultResponse.prototype.setEventsList=function(e){return r.Message.setRepeatedWrapperField(this,4,e)},proto.flow.access.TransactionResultResponse.prototype.addEvents=function(e,t){return r.Message.addToRepeatedWrapperField(this,4,e,proto.flow.entities.Event,t)},proto.flow.access.TransactionResultResponse.prototype.clearEventsList=function(){return this.setEventsList([])},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetAccountRequest.prototype.toObject=function(e){return proto.flow.access.GetAccountRequest.toObject(e,this)},proto.flow.access.GetAccountRequest.toObject=function(e,t){var o={address:t.getAddress_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetAccountRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetAccountRequest;return proto.flow.access.GetAccountRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetAccountRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setAddress(o);break;default:t.skipField()}}return e},proto.flow.access.GetAccountRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetAccountRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetAccountRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getAddress_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.GetAccountRequest.prototype.getAddress=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetAccountRequest.prototype.getAddress_asB64=function(){return r.Message.bytesAsB64(this.getAddress())},proto.flow.access.GetAccountRequest.prototype.getAddress_asU8=function(){return r.Message.bytesAsU8(this.getAddress())},proto.flow.access.GetAccountRequest.prototype.setAddress=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetAccountResponse.prototype.toObject=function(e){return proto.flow.access.GetAccountResponse.toObject(e,this)},proto.flow.access.GetAccountResponse.toObject=function(e,t){var o,r={account:(o=t.getAccount())&&i.Account.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.access.GetAccountResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetAccountResponse;return proto.flow.access.GetAccountResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.GetAccountResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new i.Account;t.readMessage(o,i.Account.deserializeBinaryFromReader),e.setAccount(o);break;default:t.skipField()}}return e},proto.flow.access.GetAccountResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetAccountResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetAccountResponse.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getAccount())&&t.writeMessage(1,o,i.Account.serializeBinaryToWriter)},proto.flow.access.GetAccountResponse.prototype.getAccount=function(){return r.Message.getWrapperField(this,i.Account,1)},proto.flow.access.GetAccountResponse.prototype.setAccount=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.access.GetAccountResponse.prototype.clearAccount=function(){return this.setAccount(void 0)},proto.flow.access.GetAccountResponse.prototype.hasAccount=function(){return null!=r.Message.getField(this,1)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetAccountAtLatestBlockRequest.prototype.toObject=function(e){return proto.flow.access.GetAccountAtLatestBlockRequest.toObject(e,this)},proto.flow.access.GetAccountAtLatestBlockRequest.toObject=function(e,t){var o={address:t.getAddress_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetAccountAtLatestBlockRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetAccountAtLatestBlockRequest;return proto.flow.access.GetAccountAtLatestBlockRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetAccountAtLatestBlockRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setAddress(o);break;default:t.skipField()}}return e},proto.flow.access.GetAccountAtLatestBlockRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetAccountAtLatestBlockRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetAccountAtLatestBlockRequest.serializeBinaryToWriter=function(e,t){var o;(o=e.getAddress_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.GetAccountAtLatestBlockRequest.prototype.getAddress=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetAccountAtLatestBlockRequest.prototype.getAddress_asB64=function(){return r.Message.bytesAsB64(this.getAddress())},proto.flow.access.GetAccountAtLatestBlockRequest.prototype.getAddress_asU8=function(){return r.Message.bytesAsU8(this.getAddress())},proto.flow.access.GetAccountAtLatestBlockRequest.prototype.setAddress=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.AccountResponse.prototype.toObject=function(e){return proto.flow.access.AccountResponse.toObject(e,this)},proto.flow.access.AccountResponse.toObject=function(e,t){var o,r={account:(o=t.getAccount())&&i.Account.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.access.AccountResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.AccountResponse;return proto.flow.access.AccountResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.AccountResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new i.Account;t.readMessage(o,i.Account.deserializeBinaryFromReader),e.setAccount(o);break;default:t.skipField()}}return e},proto.flow.access.AccountResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.AccountResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.AccountResponse.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getAccount())&&t.writeMessage(1,o,i.Account.serializeBinaryToWriter)},proto.flow.access.AccountResponse.prototype.getAccount=function(){return r.Message.getWrapperField(this,i.Account,1)},proto.flow.access.AccountResponse.prototype.setAccount=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.access.AccountResponse.prototype.clearAccount=function(){return this.setAccount(void 0)},proto.flow.access.AccountResponse.prototype.hasAccount=function(){return null!=r.Message.getField(this,1)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetAccountAtBlockHeightRequest.prototype.toObject=function(e){return proto.flow.access.GetAccountAtBlockHeightRequest.toObject(e,this)},proto.flow.access.GetAccountAtBlockHeightRequest.toObject=function(e,t){var o={address:t.getAddress_asB64(),blockHeight:r.Message.getFieldWithDefault(t,2,0)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetAccountAtBlockHeightRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetAccountAtBlockHeightRequest;return proto.flow.access.GetAccountAtBlockHeightRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetAccountAtBlockHeightRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setAddress(o);break;case 2:o=t.readUint64();e.setBlockHeight(o);break;default:t.skipField()}}return e},proto.flow.access.GetAccountAtBlockHeightRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetAccountAtBlockHeightRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetAccountAtBlockHeightRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getAddress_asU8()).length>0&&t.writeBytes(1,o),0!==(o=e.getBlockHeight())&&t.writeUint64(2,o)},proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getAddress=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getAddress_asB64=function(){return r.Message.bytesAsB64(this.getAddress())},proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getAddress_asU8=function(){return r.Message.bytesAsU8(this.getAddress())},proto.flow.access.GetAccountAtBlockHeightRequest.prototype.setAddress=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getBlockHeight=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.access.GetAccountAtBlockHeightRequest.prototype.setBlockHeight=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.access.ExecuteScriptAtLatestBlockRequest.repeatedFields_=[2],r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.toObject=function(e){return proto.flow.access.ExecuteScriptAtLatestBlockRequest.toObject(e,this)},proto.flow.access.ExecuteScriptAtLatestBlockRequest.toObject=function(e,t){var o={script:t.getScript_asB64(),argumentsList:t.getArgumentsList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.ExecuteScriptAtLatestBlockRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.ExecuteScriptAtLatestBlockRequest;return proto.flow.access.ExecuteScriptAtLatestBlockRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.ExecuteScriptAtLatestBlockRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setScript(o);break;case 2:o=t.readBytes();e.addArguments(o);break;default:t.skipField()}}return e},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.ExecuteScriptAtLatestBlockRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.ExecuteScriptAtLatestBlockRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getScript_asU8()).length>0&&t.writeBytes(1,o),(o=e.getArgumentsList_asU8()).length>0&&t.writeRepeatedBytes(2,o)},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getScript=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getScript_asB64=function(){return r.Message.bytesAsB64(this.getScript())},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getScript_asU8=function(){return r.Message.bytesAsU8(this.getScript())},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.setScript=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getArgumentsList=function(){return r.Message.getRepeatedField(this,2)},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getArgumentsList_asB64=function(){return r.Message.bytesListAsB64(this.getArgumentsList())},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getArgumentsList_asU8=function(){return r.Message.bytesListAsU8(this.getArgumentsList())},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.setArgumentsList=function(e){return r.Message.setField(this,2,e||[])},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.addArguments=function(e,t){return r.Message.addToRepeatedField(this,2,e,t)},proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.clearArgumentsList=function(){return this.setArgumentsList([])},proto.flow.access.ExecuteScriptAtBlockIDRequest.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.toObject=function(e){return proto.flow.access.ExecuteScriptAtBlockIDRequest.toObject(e,this)},proto.flow.access.ExecuteScriptAtBlockIDRequest.toObject=function(e,t){var o={blockId:t.getBlockId_asB64(),script:t.getScript_asB64(),argumentsList:t.getArgumentsList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.ExecuteScriptAtBlockIDRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.ExecuteScriptAtBlockIDRequest;return proto.flow.access.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setBlockId(o);break;case 2:o=t.readBytes();e.setScript(o);break;case 3:o=t.readBytes();e.addArguments(o);break;default:t.skipField()}}return e},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getBlockId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getScript_asU8()).length>0&&t.writeBytes(2,o),(o=e.getArgumentsList_asU8()).length>0&&t.writeRepeatedBytes(3,o)},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getBlockId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asB64=function(){return r.Message.bytesAsB64(this.getBlockId())},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asU8=function(){return r.Message.bytesAsU8(this.getBlockId())},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.setBlockId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getScript=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getScript_asB64=function(){return r.Message.bytesAsB64(this.getScript())},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getScript_asU8=function(){return r.Message.bytesAsU8(this.getScript())},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.setScript=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList=function(){return r.Message.getRepeatedField(this,3)},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asB64=function(){return r.Message.bytesListAsB64(this.getArgumentsList())},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asU8=function(){return r.Message.bytesListAsU8(this.getArgumentsList())},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.setArgumentsList=function(e){return r.Message.setField(this,3,e||[])},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.addArguments=function(e,t){return r.Message.addToRepeatedField(this,3,e,t)},proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.clearArgumentsList=function(){return this.setArgumentsList([])},proto.flow.access.ExecuteScriptAtBlockHeightRequest.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.toObject=function(e){return proto.flow.access.ExecuteScriptAtBlockHeightRequest.toObject(e,this)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.toObject=function(e,t){var o={blockHeight:r.Message.getFieldWithDefault(t,1,0),script:t.getScript_asB64(),argumentsList:t.getArgumentsList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.ExecuteScriptAtBlockHeightRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.ExecuteScriptAtBlockHeightRequest;return proto.flow.access.ExecuteScriptAtBlockHeightRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readUint64();e.setBlockHeight(o);break;case 2:o=t.readBytes();e.setScript(o);break;case 3:o=t.readBytes();e.addArguments(o);break;default:t.skipField()}}return e},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.ExecuteScriptAtBlockHeightRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.ExecuteScriptAtBlockHeightRequest.serializeBinaryToWriter=function(e,t){var o=void 0;0!==(o=e.getBlockHeight())&&t.writeUint64(1,o),(o=e.getScript_asU8()).length>0&&t.writeBytes(2,o),(o=e.getArgumentsList_asU8()).length>0&&t.writeRepeatedBytes(3,o)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getBlockHeight=function(){return r.Message.getFieldWithDefault(this,1,0)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.setBlockHeight=function(e){return r.Message.setProto3IntField(this,1,e)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getScript=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getScript_asB64=function(){return r.Message.bytesAsB64(this.getScript())},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getScript_asU8=function(){return r.Message.bytesAsU8(this.getScript())},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.setScript=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getArgumentsList=function(){return r.Message.getRepeatedField(this,3)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getArgumentsList_asB64=function(){return r.Message.bytesListAsB64(this.getArgumentsList())},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getArgumentsList_asU8=function(){return r.Message.bytesListAsU8(this.getArgumentsList())},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.setArgumentsList=function(e){return r.Message.setField(this,3,e||[])},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.addArguments=function(e,t){return r.Message.addToRepeatedField(this,3,e,t)},proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.clearArgumentsList=function(){return this.setArgumentsList([])},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.ExecuteScriptResponse.prototype.toObject=function(e){return proto.flow.access.ExecuteScriptResponse.toObject(e,this)},proto.flow.access.ExecuteScriptResponse.toObject=function(e,t){var o={value:t.getValue_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.ExecuteScriptResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.ExecuteScriptResponse;return proto.flow.access.ExecuteScriptResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.ExecuteScriptResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setValue(o);break;default:t.skipField()}}return e},proto.flow.access.ExecuteScriptResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.ExecuteScriptResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.ExecuteScriptResponse.serializeBinaryToWriter=function(e,t){var o;(o=e.getValue_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.access.ExecuteScriptResponse.prototype.getValue=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.ExecuteScriptResponse.prototype.getValue_asB64=function(){return r.Message.bytesAsB64(this.getValue())},proto.flow.access.ExecuteScriptResponse.prototype.getValue_asU8=function(){return r.Message.bytesAsU8(this.getValue())},proto.flow.access.ExecuteScriptResponse.prototype.setValue=function(e){return r.Message.setProto3BytesField(this,1,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetEventsForHeightRangeRequest.prototype.toObject=function(e){return proto.flow.access.GetEventsForHeightRangeRequest.toObject(e,this)},proto.flow.access.GetEventsForHeightRangeRequest.toObject=function(e,t){var o={type:r.Message.getFieldWithDefault(t,1,""),startHeight:r.Message.getFieldWithDefault(t,2,0),endHeight:r.Message.getFieldWithDefault(t,3,0)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetEventsForHeightRangeRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetEventsForHeightRangeRequest;return proto.flow.access.GetEventsForHeightRangeRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetEventsForHeightRangeRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readString();e.setType(o);break;case 2:o=t.readUint64();e.setStartHeight(o);break;case 3:o=t.readUint64();e.setEndHeight(o);break;default:t.skipField()}}return e},proto.flow.access.GetEventsForHeightRangeRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetEventsForHeightRangeRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetEventsForHeightRangeRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getType()).length>0&&t.writeString(1,o),0!==(o=e.getStartHeight())&&t.writeUint64(2,o),0!==(o=e.getEndHeight())&&t.writeUint64(3,o)},proto.flow.access.GetEventsForHeightRangeRequest.prototype.getType=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetEventsForHeightRangeRequest.prototype.setType=function(e){return r.Message.setProto3StringField(this,1,e)},proto.flow.access.GetEventsForHeightRangeRequest.prototype.getStartHeight=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.access.GetEventsForHeightRangeRequest.prototype.setStartHeight=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.access.GetEventsForHeightRangeRequest.prototype.getEndHeight=function(){return r.Message.getFieldWithDefault(this,3,0)},proto.flow.access.GetEventsForHeightRangeRequest.prototype.setEndHeight=function(e){return r.Message.setProto3IntField(this,3,e)},proto.flow.access.GetEventsForBlockIDsRequest.repeatedFields_=[2],r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetEventsForBlockIDsRequest.prototype.toObject=function(e){return proto.flow.access.GetEventsForBlockIDsRequest.toObject(e,this)},proto.flow.access.GetEventsForBlockIDsRequest.toObject=function(e,t){var o={type:r.Message.getFieldWithDefault(t,1,""),blockIdsList:t.getBlockIdsList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetEventsForBlockIDsRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetEventsForBlockIDsRequest;return proto.flow.access.GetEventsForBlockIDsRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetEventsForBlockIDsRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readString();e.setType(o);break;case 2:o=t.readBytes();e.addBlockIds(o);break;default:t.skipField()}}return e},proto.flow.access.GetEventsForBlockIDsRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetEventsForBlockIDsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetEventsForBlockIDsRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getType()).length>0&&t.writeString(1,o),(o=e.getBlockIdsList_asU8()).length>0&&t.writeRepeatedBytes(2,o)},proto.flow.access.GetEventsForBlockIDsRequest.prototype.getType=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetEventsForBlockIDsRequest.prototype.setType=function(e){return r.Message.setProto3StringField(this,1,e)},proto.flow.access.GetEventsForBlockIDsRequest.prototype.getBlockIdsList=function(){return r.Message.getRepeatedField(this,2)},proto.flow.access.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asB64=function(){return r.Message.bytesListAsB64(this.getBlockIdsList())},proto.flow.access.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asU8=function(){return r.Message.bytesListAsU8(this.getBlockIdsList())},proto.flow.access.GetEventsForBlockIDsRequest.prototype.setBlockIdsList=function(e){return r.Message.setField(this,2,e||[])},proto.flow.access.GetEventsForBlockIDsRequest.prototype.addBlockIds=function(e,t){return r.Message.addToRepeatedField(this,2,e,t)},proto.flow.access.GetEventsForBlockIDsRequest.prototype.clearBlockIdsList=function(){return this.setBlockIdsList([])},proto.flow.access.EventsResponse.repeatedFields_=[1],r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.EventsResponse.prototype.toObject=function(e){return proto.flow.access.EventsResponse.toObject(e,this)},proto.flow.access.EventsResponse.toObject=function(e,t){var o={resultsList:r.Message.toObjectList(t.getResultsList(),proto.flow.access.EventsResponse.Result.toObject,e)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.EventsResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.EventsResponse;return proto.flow.access.EventsResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.EventsResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new proto.flow.access.EventsResponse.Result;t.readMessage(o,proto.flow.access.EventsResponse.Result.deserializeBinaryFromReader),e.addResults(o);break;default:t.skipField()}}return e},proto.flow.access.EventsResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.EventsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.EventsResponse.serializeBinaryToWriter=function(e,t){var o;(o=e.getResultsList()).length>0&&t.writeRepeatedMessage(1,o,proto.flow.access.EventsResponse.Result.serializeBinaryToWriter)},proto.flow.access.EventsResponse.Result.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.EventsResponse.Result.prototype.toObject=function(e){return proto.flow.access.EventsResponse.Result.toObject(e,this)},proto.flow.access.EventsResponse.Result.toObject=function(e,t){var o,s={blockId:t.getBlockId_asB64(),blockHeight:r.Message.getFieldWithDefault(t,2,0),eventsList:r.Message.toObjectList(t.getEventsList(),c.Event.toObject,e),blockTimestamp:(o=t.getBlockTimestamp())&&p.Timestamp.toObject(e,o)};return e&&(s.$jspbMessageInstance=t),s}),proto.flow.access.EventsResponse.Result.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.EventsResponse.Result;return proto.flow.access.EventsResponse.Result.deserializeBinaryFromReader(o,t)},proto.flow.access.EventsResponse.Result.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setBlockId(o);break;case 2:o=t.readUint64();e.setBlockHeight(o);break;case 3:o=new c.Event;t.readMessage(o,c.Event.deserializeBinaryFromReader),e.addEvents(o);break;case 4:o=new p.Timestamp;t.readMessage(o,p.Timestamp.deserializeBinaryFromReader),e.setBlockTimestamp(o);break;default:t.skipField()}}return e},proto.flow.access.EventsResponse.Result.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.EventsResponse.Result.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.EventsResponse.Result.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getBlockId_asU8()).length>0&&t.writeBytes(1,o),0!==(o=e.getBlockHeight())&&t.writeUint64(2,o),(o=e.getEventsList()).length>0&&t.writeRepeatedMessage(3,o,c.Event.serializeBinaryToWriter),null!=(o=e.getBlockTimestamp())&&t.writeMessage(4,o,p.Timestamp.serializeBinaryToWriter)},proto.flow.access.EventsResponse.Result.prototype.getBlockId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.EventsResponse.Result.prototype.getBlockId_asB64=function(){return r.Message.bytesAsB64(this.getBlockId())},proto.flow.access.EventsResponse.Result.prototype.getBlockId_asU8=function(){return r.Message.bytesAsU8(this.getBlockId())},proto.flow.access.EventsResponse.Result.prototype.setBlockId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.access.EventsResponse.Result.prototype.getBlockHeight=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.access.EventsResponse.Result.prototype.setBlockHeight=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.access.EventsResponse.Result.prototype.getEventsList=function(){return r.Message.getRepeatedWrapperField(this,c.Event,3)},proto.flow.access.EventsResponse.Result.prototype.setEventsList=function(e){return r.Message.setRepeatedWrapperField(this,3,e)},proto.flow.access.EventsResponse.Result.prototype.addEvents=function(e,t){return r.Message.addToRepeatedWrapperField(this,3,e,proto.flow.entities.Event,t)},proto.flow.access.EventsResponse.Result.prototype.clearEventsList=function(){return this.setEventsList([])},proto.flow.access.EventsResponse.Result.prototype.getBlockTimestamp=function(){return r.Message.getWrapperField(this,p.Timestamp,4)},proto.flow.access.EventsResponse.Result.prototype.setBlockTimestamp=function(e){return r.Message.setWrapperField(this,4,e)},proto.flow.access.EventsResponse.Result.prototype.clearBlockTimestamp=function(){return this.setBlockTimestamp(void 0)},proto.flow.access.EventsResponse.Result.prototype.hasBlockTimestamp=function(){return null!=r.Message.getField(this,4)},proto.flow.access.EventsResponse.prototype.getResultsList=function(){return r.Message.getRepeatedWrapperField(this,proto.flow.access.EventsResponse.Result,1)},proto.flow.access.EventsResponse.prototype.setResultsList=function(e){return r.Message.setRepeatedWrapperField(this,1,e)},proto.flow.access.EventsResponse.prototype.addResults=function(e,t){return r.Message.addToRepeatedWrapperField(this,1,e,proto.flow.access.EventsResponse.Result,t)},proto.flow.access.EventsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetNetworkParametersRequest.prototype.toObject=function(e){return proto.flow.access.GetNetworkParametersRequest.toObject(e,this)},proto.flow.access.GetNetworkParametersRequest.toObject=function(e,t){var o={};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetNetworkParametersRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetNetworkParametersRequest;return proto.flow.access.GetNetworkParametersRequest.deserializeBinaryFromReader(o,t)},proto.flow.access.GetNetworkParametersRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){t.getFieldNumber();t.skipField()}return e},proto.flow.access.GetNetworkParametersRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetNetworkParametersRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetNetworkParametersRequest.serializeBinaryToWriter=function(e,t){},r.Message.GENERATE_TO_OBJECT&&(proto.flow.access.GetNetworkParametersResponse.prototype.toObject=function(e){return proto.flow.access.GetNetworkParametersResponse.toObject(e,this)},proto.flow.access.GetNetworkParametersResponse.toObject=function(e,t){var o={chainId:r.Message.getFieldWithDefault(t,1,"")};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.access.GetNetworkParametersResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.access.GetNetworkParametersResponse;return proto.flow.access.GetNetworkParametersResponse.deserializeBinaryFromReader(o,t)},proto.flow.access.GetNetworkParametersResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readString();e.setChainId(o);break;default:t.skipField()}}return e},proto.flow.access.GetNetworkParametersResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.access.GetNetworkParametersResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.access.GetNetworkParametersResponse.serializeBinaryToWriter=function(e,t){var o;(o=e.getChainId()).length>0&&t.writeString(1,o)},proto.flow.access.GetNetworkParametersResponse.prototype.getChainId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.access.GetNetworkParametersResponse.prototype.setChainId=function(e){return r.Message.setProto3StringField(this,1,e)},s.object.extend(t,proto.flow.access)},function(e,t,o){var r=o(0),s=r,n=Function("return this")(),i=o(6);s.object.extend(proto,i),s.exportSymbol("proto.flow.entities.BlockHeader",null,n),proto.flow.entities.BlockHeader=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.entities.BlockHeader,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.BlockHeader.displayName="proto.flow.entities.BlockHeader"),r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.BlockHeader.prototype.toObject=function(e){return proto.flow.entities.BlockHeader.toObject(e,this)},proto.flow.entities.BlockHeader.toObject=function(e,t){var o,s={id:t.getId_asB64(),parentId:t.getParentId_asB64(),height:r.Message.getFieldWithDefault(t,3,0),timestamp:(o=t.getTimestamp())&&i.Timestamp.toObject(e,o)};return e&&(s.$jspbMessageInstance=t),s}),proto.flow.entities.BlockHeader.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.BlockHeader;return proto.flow.entities.BlockHeader.deserializeBinaryFromReader(o,t)},proto.flow.entities.BlockHeader.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;case 2:o=t.readBytes();e.setParentId(o);break;case 3:o=t.readUint64();e.setHeight(o);break;case 4:o=new i.Timestamp;t.readMessage(o,i.Timestamp.deserializeBinaryFromReader),e.setTimestamp(o);break;default:t.skipField()}}return e},proto.flow.entities.BlockHeader.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.BlockHeader.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.BlockHeader.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getParentId_asU8()).length>0&&t.writeBytes(2,o),0!==(o=e.getHeight())&&t.writeUint64(3,o),null!=(o=e.getTimestamp())&&t.writeMessage(4,o,i.Timestamp.serializeBinaryToWriter)},proto.flow.entities.BlockHeader.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.BlockHeader.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.entities.BlockHeader.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.entities.BlockHeader.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.BlockHeader.prototype.getParentId=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.entities.BlockHeader.prototype.getParentId_asB64=function(){return r.Message.bytesAsB64(this.getParentId())},proto.flow.entities.BlockHeader.prototype.getParentId_asU8=function(){return r.Message.bytesAsU8(this.getParentId())},proto.flow.entities.BlockHeader.prototype.setParentId=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.entities.BlockHeader.prototype.getHeight=function(){return r.Message.getFieldWithDefault(this,3,0)},proto.flow.entities.BlockHeader.prototype.setHeight=function(e){return r.Message.setProto3IntField(this,3,e)},proto.flow.entities.BlockHeader.prototype.getTimestamp=function(){return r.Message.getWrapperField(this,i.Timestamp,4)},proto.flow.entities.BlockHeader.prototype.setTimestamp=function(e){return r.Message.setWrapperField(this,4,e)},proto.flow.entities.BlockHeader.prototype.clearTimestamp=function(){return this.setTimestamp(void 0)},proto.flow.entities.BlockHeader.prototype.hasTimestamp=function(){return null!=r.Message.getField(this,4)},s.object.extend(t,proto.flow.entities)},function(e,t,o){var r=o(0),s=r,n=Function("return this")();s.exportSymbol("proto.google.protobuf.Timestamp",null,n),proto.google.protobuf.Timestamp=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.google.protobuf.Timestamp,r.Message),s.DEBUG&&!COMPILED&&(proto.google.protobuf.Timestamp.displayName="proto.google.protobuf.Timestamp"),r.Message.GENERATE_TO_OBJECT&&(proto.google.protobuf.Timestamp.prototype.toObject=function(e){return proto.google.protobuf.Timestamp.toObject(e,this)},proto.google.protobuf.Timestamp.toObject=function(e,t){var o={seconds:r.Message.getFieldWithDefault(t,1,0),nanos:r.Message.getFieldWithDefault(t,2,0)};return e&&(o.$jspbMessageInstance=t),o}),proto.google.protobuf.Timestamp.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.google.protobuf.Timestamp;return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(o,t)},proto.google.protobuf.Timestamp.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readInt64();e.setSeconds(o);break;case 2:o=t.readInt32();e.setNanos(o);break;default:t.skipField()}}return e},proto.google.protobuf.Timestamp.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.google.protobuf.Timestamp.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.google.protobuf.Timestamp.serializeBinaryToWriter=function(e,t){var o=void 0;0!==(o=e.getSeconds())&&t.writeInt64(1,o),0!==(o=e.getNanos())&&t.writeInt32(2,o)},proto.google.protobuf.Timestamp.prototype.getSeconds=function(){return r.Message.getFieldWithDefault(this,1,0)},proto.google.protobuf.Timestamp.prototype.setSeconds=function(e){return r.Message.setProto3IntField(this,1,e)},proto.google.protobuf.Timestamp.prototype.getNanos=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.google.protobuf.Timestamp.prototype.setNanos=function(e){return r.Message.setProto3IntField(this,2,e)},s.object.extend(t,proto.google.protobuf),proto.google.protobuf.Timestamp.prototype.toDate=function(){var e=this.getSeconds(),t=this.getNanos();return new Date(1e3*e+t/1e6)},proto.google.protobuf.Timestamp.prototype.fromDate=function(e){this.setSeconds(Math.floor(e.getTime()/1e3)),this.setNanos(1e6*e.getMilliseconds())},proto.google.protobuf.Timestamp.fromDate=function(e){var t=new proto.google.protobuf.Timestamp;return t.fromDate(e),t}},function(e,t,o){var r=o(0),s=r,n=Function("return this")(),i=o(6);s.object.extend(proto,i);var a=o(2);s.object.extend(proto,a);var g=o(8);s.object.extend(proto,g),s.exportSymbol("proto.flow.entities.Block",null,n),proto.flow.entities.Block=function(e){r.Message.initialize(this,e,0,-1,proto.flow.entities.Block.repeatedFields_,null)},s.inherits(proto.flow.entities.Block,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.Block.displayName="proto.flow.entities.Block"),proto.flow.entities.Block.repeatedFields_=[5,6,7],r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.Block.prototype.toObject=function(e){return proto.flow.entities.Block.toObject(e,this)},proto.flow.entities.Block.toObject=function(e,t){var o,s={id:t.getId_asB64(),parentId:t.getParentId_asB64(),height:r.Message.getFieldWithDefault(t,3,0),timestamp:(o=t.getTimestamp())&&i.Timestamp.toObject(e,o),collectionGuaranteesList:r.Message.toObjectList(t.getCollectionGuaranteesList(),a.CollectionGuarantee.toObject,e),blockSealsList:r.Message.toObjectList(t.getBlockSealsList(),g.BlockSeal.toObject,e),signaturesList:t.getSignaturesList_asB64()};return e&&(s.$jspbMessageInstance=t),s}),proto.flow.entities.Block.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.Block;return proto.flow.entities.Block.deserializeBinaryFromReader(o,t)},proto.flow.entities.Block.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setId(o);break;case 2:o=t.readBytes();e.setParentId(o);break;case 3:o=t.readUint64();e.setHeight(o);break;case 4:o=new i.Timestamp;t.readMessage(o,i.Timestamp.deserializeBinaryFromReader),e.setTimestamp(o);break;case 5:o=new a.CollectionGuarantee;t.readMessage(o,a.CollectionGuarantee.deserializeBinaryFromReader),e.addCollectionGuarantees(o);break;case 6:o=new g.BlockSeal;t.readMessage(o,g.BlockSeal.deserializeBinaryFromReader),e.addBlockSeals(o);break;case 7:o=t.readBytes();e.addSignatures(o);break;default:t.skipField()}}return e},proto.flow.entities.Block.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.Block.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.Block.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getParentId_asU8()).length>0&&t.writeBytes(2,o),0!==(o=e.getHeight())&&t.writeUint64(3,o),null!=(o=e.getTimestamp())&&t.writeMessage(4,o,i.Timestamp.serializeBinaryToWriter),(o=e.getCollectionGuaranteesList()).length>0&&t.writeRepeatedMessage(5,o,a.CollectionGuarantee.serializeBinaryToWriter),(o=e.getBlockSealsList()).length>0&&t.writeRepeatedMessage(6,o,g.BlockSeal.serializeBinaryToWriter),(o=e.getSignaturesList_asU8()).length>0&&t.writeRepeatedBytes(7,o)},proto.flow.entities.Block.prototype.getId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.Block.prototype.getId_asB64=function(){return r.Message.bytesAsB64(this.getId())},proto.flow.entities.Block.prototype.getId_asU8=function(){return r.Message.bytesAsU8(this.getId())},proto.flow.entities.Block.prototype.setId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.Block.prototype.getParentId=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.entities.Block.prototype.getParentId_asB64=function(){return r.Message.bytesAsB64(this.getParentId())},proto.flow.entities.Block.prototype.getParentId_asU8=function(){return r.Message.bytesAsU8(this.getParentId())},proto.flow.entities.Block.prototype.setParentId=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.entities.Block.prototype.getHeight=function(){return r.Message.getFieldWithDefault(this,3,0)},proto.flow.entities.Block.prototype.setHeight=function(e){return r.Message.setProto3IntField(this,3,e)},proto.flow.entities.Block.prototype.getTimestamp=function(){return r.Message.getWrapperField(this,i.Timestamp,4)},proto.flow.entities.Block.prototype.setTimestamp=function(e){return r.Message.setWrapperField(this,4,e)},proto.flow.entities.Block.prototype.clearTimestamp=function(){return this.setTimestamp(void 0)},proto.flow.entities.Block.prototype.hasTimestamp=function(){return null!=r.Message.getField(this,4)},proto.flow.entities.Block.prototype.getCollectionGuaranteesList=function(){return r.Message.getRepeatedWrapperField(this,a.CollectionGuarantee,5)},proto.flow.entities.Block.prototype.setCollectionGuaranteesList=function(e){return r.Message.setRepeatedWrapperField(this,5,e)},proto.flow.entities.Block.prototype.addCollectionGuarantees=function(e,t){return r.Message.addToRepeatedWrapperField(this,5,e,proto.flow.entities.CollectionGuarantee,t)},proto.flow.entities.Block.prototype.clearCollectionGuaranteesList=function(){return this.setCollectionGuaranteesList([])},proto.flow.entities.Block.prototype.getBlockSealsList=function(){return r.Message.getRepeatedWrapperField(this,g.BlockSeal,6)},proto.flow.entities.Block.prototype.setBlockSealsList=function(e){return r.Message.setRepeatedWrapperField(this,6,e)},proto.flow.entities.Block.prototype.addBlockSeals=function(e,t){return r.Message.addToRepeatedWrapperField(this,6,e,proto.flow.entities.BlockSeal,t)},proto.flow.entities.Block.prototype.clearBlockSealsList=function(){return this.setBlockSealsList([])},proto.flow.entities.Block.prototype.getSignaturesList=function(){return r.Message.getRepeatedField(this,7)},proto.flow.entities.Block.prototype.getSignaturesList_asB64=function(){return r.Message.bytesListAsB64(this.getSignaturesList())},proto.flow.entities.Block.prototype.getSignaturesList_asU8=function(){return r.Message.bytesListAsU8(this.getSignaturesList())},proto.flow.entities.Block.prototype.setSignaturesList=function(e){return r.Message.setField(this,7,e||[])},proto.flow.entities.Block.prototype.addSignatures=function(e,t){return r.Message.addToRepeatedField(this,7,e,t)},proto.flow.entities.Block.prototype.clearSignaturesList=function(){return this.setSignaturesList([])},s.object.extend(t,proto.flow.entities)},function(e,t,o){var r=o(0),s=r,n=Function("return this")();s.exportSymbol("proto.flow.entities.BlockSeal",null,n),proto.flow.entities.BlockSeal=function(e){r.Message.initialize(this,e,0,-1,proto.flow.entities.BlockSeal.repeatedFields_,null)},s.inherits(proto.flow.entities.BlockSeal,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.BlockSeal.displayName="proto.flow.entities.BlockSeal"),proto.flow.entities.BlockSeal.repeatedFields_=[3,4],r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.BlockSeal.prototype.toObject=function(e){return proto.flow.entities.BlockSeal.toObject(e,this)},proto.flow.entities.BlockSeal.toObject=function(e,t){var o={blockId:t.getBlockId_asB64(),executionReceiptId:t.getExecutionReceiptId_asB64(),executionReceiptSignaturesList:t.getExecutionReceiptSignaturesList_asB64(),resultApprovalSignaturesList:t.getResultApprovalSignaturesList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.entities.BlockSeal.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.BlockSeal;return proto.flow.entities.BlockSeal.deserializeBinaryFromReader(o,t)},proto.flow.entities.BlockSeal.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setBlockId(o);break;case 2:o=t.readBytes();e.setExecutionReceiptId(o);break;case 3:o=t.readBytes();e.addExecutionReceiptSignatures(o);break;case 4:o=t.readBytes();e.addResultApprovalSignatures(o);break;default:t.skipField()}}return e},proto.flow.entities.BlockSeal.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.BlockSeal.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.BlockSeal.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getBlockId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getExecutionReceiptId_asU8()).length>0&&t.writeBytes(2,o),(o=e.getExecutionReceiptSignaturesList_asU8()).length>0&&t.writeRepeatedBytes(3,o),(o=e.getResultApprovalSignaturesList_asU8()).length>0&&t.writeRepeatedBytes(4,o)},proto.flow.entities.BlockSeal.prototype.getBlockId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.BlockSeal.prototype.getBlockId_asB64=function(){return r.Message.bytesAsB64(this.getBlockId())},proto.flow.entities.BlockSeal.prototype.getBlockId_asU8=function(){return r.Message.bytesAsU8(this.getBlockId())},proto.flow.entities.BlockSeal.prototype.setBlockId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId_asB64=function(){return r.Message.bytesAsB64(this.getExecutionReceiptId())},proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId_asU8=function(){return r.Message.bytesAsU8(this.getExecutionReceiptId())},proto.flow.entities.BlockSeal.prototype.setExecutionReceiptId=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList=function(){return r.Message.getRepeatedField(this,3)},proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList_asB64=function(){return r.Message.bytesListAsB64(this.getExecutionReceiptSignaturesList())},proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList_asU8=function(){return r.Message.bytesListAsU8(this.getExecutionReceiptSignaturesList())},proto.flow.entities.BlockSeal.prototype.setExecutionReceiptSignaturesList=function(e){return r.Message.setField(this,3,e||[])},proto.flow.entities.BlockSeal.prototype.addExecutionReceiptSignatures=function(e,t){return r.Message.addToRepeatedField(this,3,e,t)},proto.flow.entities.BlockSeal.prototype.clearExecutionReceiptSignaturesList=function(){return this.setExecutionReceiptSignaturesList([])},proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList=function(){return r.Message.getRepeatedField(this,4)},proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList_asB64=function(){return r.Message.bytesListAsB64(this.getResultApprovalSignaturesList())},proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList_asU8=function(){return r.Message.bytesListAsU8(this.getResultApprovalSignaturesList())},proto.flow.entities.BlockSeal.prototype.setResultApprovalSignaturesList=function(e){return r.Message.setField(this,4,e||[])},proto.flow.entities.BlockSeal.prototype.addResultApprovalSignatures=function(e,t){return r.Message.addToRepeatedField(this,4,e,t)},proto.flow.entities.BlockSeal.prototype.clearResultApprovalSignaturesList=function(){return this.setResultApprovalSignaturesList([])},s.object.extend(t,proto.flow.entities)},function(e,t,o){var r=o(0),s=r,n=Function("return this")();s.exportSymbol("proto.flow.entities.Transaction",null,n),s.exportSymbol("proto.flow.entities.Transaction.ProposalKey",null,n),s.exportSymbol("proto.flow.entities.Transaction.Signature",null,n),s.exportSymbol("proto.flow.entities.TransactionStatus",null,n),proto.flow.entities.Transaction=function(e){r.Message.initialize(this,e,0,-1,proto.flow.entities.Transaction.repeatedFields_,null)},s.inherits(proto.flow.entities.Transaction,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.Transaction.displayName="proto.flow.entities.Transaction"),proto.flow.entities.Transaction.ProposalKey=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.entities.Transaction.ProposalKey,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.Transaction.ProposalKey.displayName="proto.flow.entities.Transaction.ProposalKey"),proto.flow.entities.Transaction.Signature=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.entities.Transaction.Signature,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.entities.Transaction.Signature.displayName="proto.flow.entities.Transaction.Signature"),proto.flow.entities.Transaction.repeatedFields_=[2,7,8,9],r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.Transaction.prototype.toObject=function(e){return proto.flow.entities.Transaction.toObject(e,this)},proto.flow.entities.Transaction.toObject=function(e,t){var o,s={script:t.getScript_asB64(),argumentsList:t.getArgumentsList_asB64(),referenceBlockId:t.getReferenceBlockId_asB64(),gasLimit:r.Message.getFieldWithDefault(t,4,0),proposalKey:(o=t.getProposalKey())&&proto.flow.entities.Transaction.ProposalKey.toObject(e,o),payer:t.getPayer_asB64(),authorizersList:t.getAuthorizersList_asB64(),payloadSignaturesList:r.Message.toObjectList(t.getPayloadSignaturesList(),proto.flow.entities.Transaction.Signature.toObject,e),envelopeSignaturesList:r.Message.toObjectList(t.getEnvelopeSignaturesList(),proto.flow.entities.Transaction.Signature.toObject,e)};return e&&(s.$jspbMessageInstance=t),s}),proto.flow.entities.Transaction.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.Transaction;return proto.flow.entities.Transaction.deserializeBinaryFromReader(o,t)},proto.flow.entities.Transaction.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setScript(o);break;case 2:o=t.readBytes();e.addArguments(o);break;case 3:o=t.readBytes();e.setReferenceBlockId(o);break;case 4:o=t.readUint64();e.setGasLimit(o);break;case 5:o=new proto.flow.entities.Transaction.ProposalKey;t.readMessage(o,proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader),e.setProposalKey(o);break;case 6:o=t.readBytes();e.setPayer(o);break;case 7:o=t.readBytes();e.addAuthorizers(o);break;case 8:o=new proto.flow.entities.Transaction.Signature;t.readMessage(o,proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader),e.addPayloadSignatures(o);break;case 9:o=new proto.flow.entities.Transaction.Signature;t.readMessage(o,proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader),e.addEnvelopeSignatures(o);break;default:t.skipField()}}return e},proto.flow.entities.Transaction.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.Transaction.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.Transaction.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getScript_asU8()).length>0&&t.writeBytes(1,o),(o=e.getArgumentsList_asU8()).length>0&&t.writeRepeatedBytes(2,o),(o=e.getReferenceBlockId_asU8()).length>0&&t.writeBytes(3,o),0!==(o=e.getGasLimit())&&t.writeUint64(4,o),null!=(o=e.getProposalKey())&&t.writeMessage(5,o,proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter),(o=e.getPayer_asU8()).length>0&&t.writeBytes(6,o),(o=e.getAuthorizersList_asU8()).length>0&&t.writeRepeatedBytes(7,o),(o=e.getPayloadSignaturesList()).length>0&&t.writeRepeatedMessage(8,o,proto.flow.entities.Transaction.Signature.serializeBinaryToWriter),(o=e.getEnvelopeSignaturesList()).length>0&&t.writeRepeatedMessage(9,o,proto.flow.entities.Transaction.Signature.serializeBinaryToWriter)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.Transaction.ProposalKey.prototype.toObject=function(e){return proto.flow.entities.Transaction.ProposalKey.toObject(e,this)},proto.flow.entities.Transaction.ProposalKey.toObject=function(e,t){var o={address:t.getAddress_asB64(),keyId:r.Message.getFieldWithDefault(t,2,0),sequenceNumber:r.Message.getFieldWithDefault(t,3,0)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.entities.Transaction.ProposalKey.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.Transaction.ProposalKey;return proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader(o,t)},proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setAddress(o);break;case 2:o=t.readUint32();e.setKeyId(o);break;case 3:o=t.readUint64();e.setSequenceNumber(o);break;default:t.skipField()}}return e},proto.flow.entities.Transaction.ProposalKey.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getAddress_asU8()).length>0&&t.writeBytes(1,o),0!==(o=e.getKeyId())&&t.writeUint32(2,o),0!==(o=e.getSequenceNumber())&&t.writeUint64(3,o)},proto.flow.entities.Transaction.ProposalKey.prototype.getAddress=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.Transaction.ProposalKey.prototype.getAddress_asB64=function(){return r.Message.bytesAsB64(this.getAddress())},proto.flow.entities.Transaction.ProposalKey.prototype.getAddress_asU8=function(){return r.Message.bytesAsU8(this.getAddress())},proto.flow.entities.Transaction.ProposalKey.prototype.setAddress=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.Transaction.ProposalKey.prototype.getKeyId=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.entities.Transaction.ProposalKey.prototype.setKeyId=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.entities.Transaction.ProposalKey.prototype.getSequenceNumber=function(){return r.Message.getFieldWithDefault(this,3,0)},proto.flow.entities.Transaction.ProposalKey.prototype.setSequenceNumber=function(e){return r.Message.setProto3IntField(this,3,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.entities.Transaction.Signature.prototype.toObject=function(e){return proto.flow.entities.Transaction.Signature.toObject(e,this)},proto.flow.entities.Transaction.Signature.toObject=function(e,t){var o={address:t.getAddress_asB64(),keyId:r.Message.getFieldWithDefault(t,2,0),signature:t.getSignature_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.entities.Transaction.Signature.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.entities.Transaction.Signature;return proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader(o,t)},proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setAddress(o);break;case 2:o=t.readUint32();e.setKeyId(o);break;case 3:o=t.readBytes();e.setSignature(o);break;default:t.skipField()}}return e},proto.flow.entities.Transaction.Signature.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.entities.Transaction.Signature.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.entities.Transaction.Signature.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getAddress_asU8()).length>0&&t.writeBytes(1,o),0!==(o=e.getKeyId())&&t.writeUint32(2,o),(o=e.getSignature_asU8()).length>0&&t.writeBytes(3,o)},proto.flow.entities.Transaction.Signature.prototype.getAddress=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.Transaction.Signature.prototype.getAddress_asB64=function(){return r.Message.bytesAsB64(this.getAddress())},proto.flow.entities.Transaction.Signature.prototype.getAddress_asU8=function(){return r.Message.bytesAsU8(this.getAddress())},proto.flow.entities.Transaction.Signature.prototype.setAddress=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.Transaction.Signature.prototype.getKeyId=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.entities.Transaction.Signature.prototype.setKeyId=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.entities.Transaction.Signature.prototype.getSignature=function(){return r.Message.getFieldWithDefault(this,3,"")},proto.flow.entities.Transaction.Signature.prototype.getSignature_asB64=function(){return r.Message.bytesAsB64(this.getSignature())},proto.flow.entities.Transaction.Signature.prototype.getSignature_asU8=function(){return r.Message.bytesAsU8(this.getSignature())},proto.flow.entities.Transaction.Signature.prototype.setSignature=function(e){return r.Message.setProto3BytesField(this,3,e)},proto.flow.entities.Transaction.prototype.getScript=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.entities.Transaction.prototype.getScript_asB64=function(){return r.Message.bytesAsB64(this.getScript())},proto.flow.entities.Transaction.prototype.getScript_asU8=function(){return r.Message.bytesAsU8(this.getScript())},proto.flow.entities.Transaction.prototype.setScript=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.entities.Transaction.prototype.getArgumentsList=function(){return r.Message.getRepeatedField(this,2)},proto.flow.entities.Transaction.prototype.getArgumentsList_asB64=function(){return r.Message.bytesListAsB64(this.getArgumentsList())},proto.flow.entities.Transaction.prototype.getArgumentsList_asU8=function(){return r.Message.bytesListAsU8(this.getArgumentsList())},proto.flow.entities.Transaction.prototype.setArgumentsList=function(e){return r.Message.setField(this,2,e||[])},proto.flow.entities.Transaction.prototype.addArguments=function(e,t){return r.Message.addToRepeatedField(this,2,e,t)},proto.flow.entities.Transaction.prototype.clearArgumentsList=function(){return this.setArgumentsList([])},proto.flow.entities.Transaction.prototype.getReferenceBlockId=function(){return r.Message.getFieldWithDefault(this,3,"")},proto.flow.entities.Transaction.prototype.getReferenceBlockId_asB64=function(){return r.Message.bytesAsB64(this.getReferenceBlockId())},proto.flow.entities.Transaction.prototype.getReferenceBlockId_asU8=function(){return r.Message.bytesAsU8(this.getReferenceBlockId())},proto.flow.entities.Transaction.prototype.setReferenceBlockId=function(e){return r.Message.setProto3BytesField(this,3,e)},proto.flow.entities.Transaction.prototype.getGasLimit=function(){return r.Message.getFieldWithDefault(this,4,0)},proto.flow.entities.Transaction.prototype.setGasLimit=function(e){return r.Message.setProto3IntField(this,4,e)},proto.flow.entities.Transaction.prototype.getProposalKey=function(){return r.Message.getWrapperField(this,proto.flow.entities.Transaction.ProposalKey,5)},proto.flow.entities.Transaction.prototype.setProposalKey=function(e){return r.Message.setWrapperField(this,5,e)},proto.flow.entities.Transaction.prototype.clearProposalKey=function(){return this.setProposalKey(void 0)},proto.flow.entities.Transaction.prototype.hasProposalKey=function(){return null!=r.Message.getField(this,5)},proto.flow.entities.Transaction.prototype.getPayer=function(){return r.Message.getFieldWithDefault(this,6,"")},proto.flow.entities.Transaction.prototype.getPayer_asB64=function(){return r.Message.bytesAsB64(this.getPayer())},proto.flow.entities.Transaction.prototype.getPayer_asU8=function(){return r.Message.bytesAsU8(this.getPayer())},proto.flow.entities.Transaction.prototype.setPayer=function(e){return r.Message.setProto3BytesField(this,6,e)},proto.flow.entities.Transaction.prototype.getAuthorizersList=function(){return r.Message.getRepeatedField(this,7)},proto.flow.entities.Transaction.prototype.getAuthorizersList_asB64=function(){return r.Message.bytesListAsB64(this.getAuthorizersList())},proto.flow.entities.Transaction.prototype.getAuthorizersList_asU8=function(){return r.Message.bytesListAsU8(this.getAuthorizersList())},proto.flow.entities.Transaction.prototype.setAuthorizersList=function(e){return r.Message.setField(this,7,e||[])},proto.flow.entities.Transaction.prototype.addAuthorizers=function(e,t){return r.Message.addToRepeatedField(this,7,e,t)},proto.flow.entities.Transaction.prototype.clearAuthorizersList=function(){return this.setAuthorizersList([])},proto.flow.entities.Transaction.prototype.getPayloadSignaturesList=function(){return r.Message.getRepeatedWrapperField(this,proto.flow.entities.Transaction.Signature,8)},proto.flow.entities.Transaction.prototype.setPayloadSignaturesList=function(e){return r.Message.setRepeatedWrapperField(this,8,e)},proto.flow.entities.Transaction.prototype.addPayloadSignatures=function(e,t){return r.Message.addToRepeatedWrapperField(this,8,e,proto.flow.entities.Transaction.Signature,t)},proto.flow.entities.Transaction.prototype.clearPayloadSignaturesList=function(){return this.setPayloadSignaturesList([])},proto.flow.entities.Transaction.prototype.getEnvelopeSignaturesList=function(){return r.Message.getRepeatedWrapperField(this,proto.flow.entities.Transaction.Signature,9)},proto.flow.entities.Transaction.prototype.setEnvelopeSignaturesList=function(e){return r.Message.setRepeatedWrapperField(this,9,e)},proto.flow.entities.Transaction.prototype.addEnvelopeSignatures=function(e,t){return r.Message.addToRepeatedWrapperField(this,9,e,proto.flow.entities.Transaction.Signature,t)},proto.flow.entities.Transaction.prototype.clearEnvelopeSignaturesList=function(){return this.setEnvelopeSignaturesList([])},proto.flow.entities.TransactionStatus={UNKNOWN:0,PENDING:1,FINALIZED:2,EXECUTED:3,SEALED:4,EXPIRED:5},s.object.extend(t,proto.flow.entities)},function(e,t,o){var r=o(0),s=r,n=Function("return this")(),i=o(1);s.object.extend(proto,i);var a=o(3);s.object.extend(proto,a),s.exportSymbol("proto.flow.execution.ExecuteScriptAtBlockIDRequest",null,n),s.exportSymbol("proto.flow.execution.ExecuteScriptAtBlockIDResponse",null,n),s.exportSymbol("proto.flow.execution.GetAccountAtBlockIDRequest",null,n),s.exportSymbol("proto.flow.execution.GetAccountAtBlockIDResponse",null,n),s.exportSymbol("proto.flow.execution.GetEventsForBlockIDsRequest",null,n),s.exportSymbol("proto.flow.execution.GetEventsForBlockIDsResponse",null,n),s.exportSymbol("proto.flow.execution.GetEventsForBlockIDsResponse.Result",null,n),s.exportSymbol("proto.flow.execution.GetTransactionResultRequest",null,n),s.exportSymbol("proto.flow.execution.GetTransactionResultResponse",null,n),s.exportSymbol("proto.flow.execution.PingRequest",null,n),s.exportSymbol("proto.flow.execution.PingResponse",null,n),proto.flow.execution.PingRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.execution.PingRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.PingRequest.displayName="proto.flow.execution.PingRequest"),proto.flow.execution.PingResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.execution.PingResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.PingResponse.displayName="proto.flow.execution.PingResponse"),proto.flow.execution.GetAccountAtBlockIDRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.execution.GetAccountAtBlockIDRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.GetAccountAtBlockIDRequest.displayName="proto.flow.execution.GetAccountAtBlockIDRequest"),proto.flow.execution.GetAccountAtBlockIDResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.execution.GetAccountAtBlockIDResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.GetAccountAtBlockIDResponse.displayName="proto.flow.execution.GetAccountAtBlockIDResponse"),proto.flow.execution.ExecuteScriptAtBlockIDRequest=function(e){r.Message.initialize(this,e,0,-1,proto.flow.execution.ExecuteScriptAtBlockIDRequest.repeatedFields_,null)},s.inherits(proto.flow.execution.ExecuteScriptAtBlockIDRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.ExecuteScriptAtBlockIDRequest.displayName="proto.flow.execution.ExecuteScriptAtBlockIDRequest"),proto.flow.execution.ExecuteScriptAtBlockIDResponse=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.execution.ExecuteScriptAtBlockIDResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.ExecuteScriptAtBlockIDResponse.displayName="proto.flow.execution.ExecuteScriptAtBlockIDResponse"),proto.flow.execution.GetEventsForBlockIDsResponse=function(e){r.Message.initialize(this,e,0,-1,proto.flow.execution.GetEventsForBlockIDsResponse.repeatedFields_,null)},s.inherits(proto.flow.execution.GetEventsForBlockIDsResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.GetEventsForBlockIDsResponse.displayName="proto.flow.execution.GetEventsForBlockIDsResponse"),proto.flow.execution.GetEventsForBlockIDsResponse.Result=function(e){r.Message.initialize(this,e,0,-1,proto.flow.execution.GetEventsForBlockIDsResponse.Result.repeatedFields_,null)},s.inherits(proto.flow.execution.GetEventsForBlockIDsResponse.Result,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.GetEventsForBlockIDsResponse.Result.displayName="proto.flow.execution.GetEventsForBlockIDsResponse.Result"),proto.flow.execution.GetEventsForBlockIDsRequest=function(e){r.Message.initialize(this,e,0,-1,proto.flow.execution.GetEventsForBlockIDsRequest.repeatedFields_,null)},s.inherits(proto.flow.execution.GetEventsForBlockIDsRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.GetEventsForBlockIDsRequest.displayName="proto.flow.execution.GetEventsForBlockIDsRequest"),proto.flow.execution.GetTransactionResultRequest=function(e){r.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.flow.execution.GetTransactionResultRequest,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.GetTransactionResultRequest.displayName="proto.flow.execution.GetTransactionResultRequest"),proto.flow.execution.GetTransactionResultResponse=function(e){r.Message.initialize(this,e,0,-1,proto.flow.execution.GetTransactionResultResponse.repeatedFields_,null)},s.inherits(proto.flow.execution.GetTransactionResultResponse,r.Message),s.DEBUG&&!COMPILED&&(proto.flow.execution.GetTransactionResultResponse.displayName="proto.flow.execution.GetTransactionResultResponse"),r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.PingRequest.prototype.toObject=function(e){return proto.flow.execution.PingRequest.toObject(e,this)},proto.flow.execution.PingRequest.toObject=function(e,t){var o={};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.PingRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.PingRequest;return proto.flow.execution.PingRequest.deserializeBinaryFromReader(o,t)},proto.flow.execution.PingRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){t.getFieldNumber();t.skipField()}return e},proto.flow.execution.PingRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.PingRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.PingRequest.serializeBinaryToWriter=function(e,t){},r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.PingResponse.prototype.toObject=function(e){return proto.flow.execution.PingResponse.toObject(e,this)},proto.flow.execution.PingResponse.toObject=function(e,t){var o={};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.PingResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.PingResponse;return proto.flow.execution.PingResponse.deserializeBinaryFromReader(o,t)},proto.flow.execution.PingResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){t.getFieldNumber();t.skipField()}return e},proto.flow.execution.PingResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.PingResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.PingResponse.serializeBinaryToWriter=function(e,t){},r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.GetAccountAtBlockIDRequest.prototype.toObject=function(e){return proto.flow.execution.GetAccountAtBlockIDRequest.toObject(e,this)},proto.flow.execution.GetAccountAtBlockIDRequest.toObject=function(e,t){var o={blockId:t.getBlockId_asB64(),address:t.getAddress_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.GetAccountAtBlockIDRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.GetAccountAtBlockIDRequest;return proto.flow.execution.GetAccountAtBlockIDRequest.deserializeBinaryFromReader(o,t)},proto.flow.execution.GetAccountAtBlockIDRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setBlockId(o);break;case 2:o=t.readBytes();e.setAddress(o);break;default:t.skipField()}}return e},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.GetAccountAtBlockIDRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.GetAccountAtBlockIDRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getBlockId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getAddress_asU8()).length>0&&t.writeBytes(2,o)},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getBlockId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getBlockId_asB64=function(){return r.Message.bytesAsB64(this.getBlockId())},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getBlockId_asU8=function(){return r.Message.bytesAsU8(this.getBlockId())},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.setBlockId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getAddress=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getAddress_asB64=function(){return r.Message.bytesAsB64(this.getAddress())},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getAddress_asU8=function(){return r.Message.bytesAsU8(this.getAddress())},proto.flow.execution.GetAccountAtBlockIDRequest.prototype.setAddress=function(e){return r.Message.setProto3BytesField(this,2,e)},r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.GetAccountAtBlockIDResponse.prototype.toObject=function(e){return proto.flow.execution.GetAccountAtBlockIDResponse.toObject(e,this)},proto.flow.execution.GetAccountAtBlockIDResponse.toObject=function(e,t){var o,r={account:(o=t.getAccount())&&i.Account.toObject(e,o)};return e&&(r.$jspbMessageInstance=t),r}),proto.flow.execution.GetAccountAtBlockIDResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.GetAccountAtBlockIDResponse;return proto.flow.execution.GetAccountAtBlockIDResponse.deserializeBinaryFromReader(o,t)},proto.flow.execution.GetAccountAtBlockIDResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new i.Account;t.readMessage(o,i.Account.deserializeBinaryFromReader),e.setAccount(o);break;default:t.skipField()}}return e},proto.flow.execution.GetAccountAtBlockIDResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.GetAccountAtBlockIDResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.GetAccountAtBlockIDResponse.serializeBinaryToWriter=function(e,t){var o;null!=(o=e.getAccount())&&t.writeMessage(1,o,i.Account.serializeBinaryToWriter)},proto.flow.execution.GetAccountAtBlockIDResponse.prototype.getAccount=function(){return r.Message.getWrapperField(this,i.Account,1)},proto.flow.execution.GetAccountAtBlockIDResponse.prototype.setAccount=function(e){return r.Message.setWrapperField(this,1,e)},proto.flow.execution.GetAccountAtBlockIDResponse.prototype.clearAccount=function(){return this.setAccount(void 0)},proto.flow.execution.GetAccountAtBlockIDResponse.prototype.hasAccount=function(){return null!=r.Message.getField(this,1)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.toObject=function(e){return proto.flow.execution.ExecuteScriptAtBlockIDRequest.toObject(e,this)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.toObject=function(e,t){var o={blockId:t.getBlockId_asB64(),script:t.getScript_asB64(),argumentsList:t.getArgumentsList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.ExecuteScriptAtBlockIDRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.ExecuteScriptAtBlockIDRequest;return proto.flow.execution.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader(o,t)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setBlockId(o);break;case 2:o=t.readBytes();e.setScript(o);break;case 3:o=t.readBytes();e.addArguments(o);break;default:t.skipField()}}return e},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getBlockId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getScript_asU8()).length>0&&t.writeBytes(2,o),(o=e.getArgumentsList_asU8()).length>0&&t.writeRepeatedBytes(3,o)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getBlockId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asB64=function(){return r.Message.bytesAsB64(this.getBlockId())},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asU8=function(){return r.Message.bytesAsU8(this.getBlockId())},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.setBlockId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getScript=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getScript_asB64=function(){return r.Message.bytesAsB64(this.getScript())},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getScript_asU8=function(){return r.Message.bytesAsU8(this.getScript())},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.setScript=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList=function(){return r.Message.getRepeatedField(this,3)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asB64=function(){return r.Message.bytesListAsB64(this.getArgumentsList())},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asU8=function(){return r.Message.bytesListAsU8(this.getArgumentsList())},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.setArgumentsList=function(e){return r.Message.setField(this,3,e||[])},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.addArguments=function(e,t){return r.Message.addToRepeatedField(this,3,e,t)},proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.clearArgumentsList=function(){return this.setArgumentsList([])},r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.toObject=function(e){return proto.flow.execution.ExecuteScriptAtBlockIDResponse.toObject(e,this)},proto.flow.execution.ExecuteScriptAtBlockIDResponse.toObject=function(e,t){var o={value:t.getValue_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.ExecuteScriptAtBlockIDResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.ExecuteScriptAtBlockIDResponse;return proto.flow.execution.ExecuteScriptAtBlockIDResponse.deserializeBinaryFromReader(o,t)},proto.flow.execution.ExecuteScriptAtBlockIDResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setValue(o);break;default:t.skipField()}}return e},proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.ExecuteScriptAtBlockIDResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.ExecuteScriptAtBlockIDResponse.serializeBinaryToWriter=function(e,t){var o;(o=e.getValue_asU8()).length>0&&t.writeBytes(1,o)},proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.getValue=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.getValue_asB64=function(){return r.Message.bytesAsB64(this.getValue())},proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.getValue_asU8=function(){return r.Message.bytesAsU8(this.getValue())},proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.setValue=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.execution.GetEventsForBlockIDsResponse.repeatedFields_=[1],r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.GetEventsForBlockIDsResponse.prototype.toObject=function(e){return proto.flow.execution.GetEventsForBlockIDsResponse.toObject(e,this)},proto.flow.execution.GetEventsForBlockIDsResponse.toObject=function(e,t){var o={resultsList:r.Message.toObjectList(t.getResultsList(),proto.flow.execution.GetEventsForBlockIDsResponse.Result.toObject,e)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.GetEventsForBlockIDsResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.GetEventsForBlockIDsResponse;return proto.flow.execution.GetEventsForBlockIDsResponse.deserializeBinaryFromReader(o,t)},proto.flow.execution.GetEventsForBlockIDsResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=new proto.flow.execution.GetEventsForBlockIDsResponse.Result;t.readMessage(o,proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinaryFromReader),e.addResults(o);break;default:t.skipField()}}return e},proto.flow.execution.GetEventsForBlockIDsResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.GetEventsForBlockIDsResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.GetEventsForBlockIDsResponse.serializeBinaryToWriter=function(e,t){var o;(o=e.getResultsList()).length>0&&t.writeRepeatedMessage(1,o,proto.flow.execution.GetEventsForBlockIDsResponse.Result.serializeBinaryToWriter)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.toObject=function(e){return proto.flow.execution.GetEventsForBlockIDsResponse.Result.toObject(e,this)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.toObject=function(e,t){var o={blockId:t.getBlockId_asB64(),blockHeight:r.Message.getFieldWithDefault(t,2,0),eventsList:r.Message.toObjectList(t.getEventsList(),a.Event.toObject,e)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.GetEventsForBlockIDsResponse.Result;return proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinaryFromReader(o,t)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setBlockId(o);break;case 2:o=t.readUint64();e.setBlockHeight(o);break;case 3:o=new a.Event;t.readMessage(o,a.Event.deserializeBinaryFromReader),e.addEvents(o);break;default:t.skipField()}}return e},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.GetEventsForBlockIDsResponse.Result.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.GetEventsForBlockIDsResponse.Result.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getBlockId_asU8()).length>0&&t.writeBytes(1,o),0!==(o=e.getBlockHeight())&&t.writeUint64(2,o),(o=e.getEventsList()).length>0&&t.writeRepeatedMessage(3,o,a.Event.serializeBinaryToWriter)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockId_asB64=function(){return r.Message.bytesAsB64(this.getBlockId())},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockId_asU8=function(){return r.Message.bytesAsU8(this.getBlockId())},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.setBlockId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockHeight=function(){return r.Message.getFieldWithDefault(this,2,0)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.setBlockHeight=function(e){return r.Message.setProto3IntField(this,2,e)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getEventsList=function(){return r.Message.getRepeatedWrapperField(this,a.Event,3)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.setEventsList=function(e){return r.Message.setRepeatedWrapperField(this,3,e)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.addEvents=function(e,t){return r.Message.addToRepeatedWrapperField(this,3,e,proto.flow.entities.Event,t)},proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.clearEventsList=function(){return this.setEventsList([])},proto.flow.execution.GetEventsForBlockIDsResponse.prototype.getResultsList=function(){return r.Message.getRepeatedWrapperField(this,proto.flow.execution.GetEventsForBlockIDsResponse.Result,1)},proto.flow.execution.GetEventsForBlockIDsResponse.prototype.setResultsList=function(e){return r.Message.setRepeatedWrapperField(this,1,e)},proto.flow.execution.GetEventsForBlockIDsResponse.prototype.addResults=function(e,t){return r.Message.addToRepeatedWrapperField(this,1,e,proto.flow.execution.GetEventsForBlockIDsResponse.Result,t)},proto.flow.execution.GetEventsForBlockIDsResponse.prototype.clearResultsList=function(){return this.setResultsList([])},proto.flow.execution.GetEventsForBlockIDsRequest.repeatedFields_=[2],r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.GetEventsForBlockIDsRequest.prototype.toObject=function(e){return proto.flow.execution.GetEventsForBlockIDsRequest.toObject(e,this)},proto.flow.execution.GetEventsForBlockIDsRequest.toObject=function(e,t){var o={type:r.Message.getFieldWithDefault(t,1,""),blockIdsList:t.getBlockIdsList_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.GetEventsForBlockIDsRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.GetEventsForBlockIDsRequest;return proto.flow.execution.GetEventsForBlockIDsRequest.deserializeBinaryFromReader(o,t)},proto.flow.execution.GetEventsForBlockIDsRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readString();e.setType(o);break;case 2:o=t.readBytes();e.addBlockIds(o);break;default:t.skipField()}}return e},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.GetEventsForBlockIDsRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.GetEventsForBlockIDsRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getType()).length>0&&t.writeString(1,o),(o=e.getBlockIdsList_asU8()).length>0&&t.writeRepeatedBytes(2,o)},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getType=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.setType=function(e){return r.Message.setProto3StringField(this,1,e)},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getBlockIdsList=function(){return r.Message.getRepeatedField(this,2)},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asB64=function(){return r.Message.bytesListAsB64(this.getBlockIdsList())},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asU8=function(){return r.Message.bytesListAsU8(this.getBlockIdsList())},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.setBlockIdsList=function(e){return r.Message.setField(this,2,e||[])},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.addBlockIds=function(e,t){return r.Message.addToRepeatedField(this,2,e,t)},proto.flow.execution.GetEventsForBlockIDsRequest.prototype.clearBlockIdsList=function(){return this.setBlockIdsList([])},r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.GetTransactionResultRequest.prototype.toObject=function(e){return proto.flow.execution.GetTransactionResultRequest.toObject(e,this)},proto.flow.execution.GetTransactionResultRequest.toObject=function(e,t){var o={blockId:t.getBlockId_asB64(),transactionId:t.getTransactionId_asB64()};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.GetTransactionResultRequest.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.GetTransactionResultRequest;return proto.flow.execution.GetTransactionResultRequest.deserializeBinaryFromReader(o,t)},proto.flow.execution.GetTransactionResultRequest.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readBytes();e.setBlockId(o);break;case 2:o=t.readBytes();e.setTransactionId(o);break;default:t.skipField()}}return e},proto.flow.execution.GetTransactionResultRequest.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.GetTransactionResultRequest.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.GetTransactionResultRequest.serializeBinaryToWriter=function(e,t){var o=void 0;(o=e.getBlockId_asU8()).length>0&&t.writeBytes(1,o),(o=e.getTransactionId_asU8()).length>0&&t.writeBytes(2,o)},proto.flow.execution.GetTransactionResultRequest.prototype.getBlockId=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.flow.execution.GetTransactionResultRequest.prototype.getBlockId_asB64=function(){return r.Message.bytesAsB64(this.getBlockId())},proto.flow.execution.GetTransactionResultRequest.prototype.getBlockId_asU8=function(){return r.Message.bytesAsU8(this.getBlockId())},proto.flow.execution.GetTransactionResultRequest.prototype.setBlockId=function(e){return r.Message.setProto3BytesField(this,1,e)},proto.flow.execution.GetTransactionResultRequest.prototype.getTransactionId=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.execution.GetTransactionResultRequest.prototype.getTransactionId_asB64=function(){return r.Message.bytesAsB64(this.getTransactionId())},proto.flow.execution.GetTransactionResultRequest.prototype.getTransactionId_asU8=function(){return r.Message.bytesAsU8(this.getTransactionId())},proto.flow.execution.GetTransactionResultRequest.prototype.setTransactionId=function(e){return r.Message.setProto3BytesField(this,2,e)},proto.flow.execution.GetTransactionResultResponse.repeatedFields_=[3],r.Message.GENERATE_TO_OBJECT&&(proto.flow.execution.GetTransactionResultResponse.prototype.toObject=function(e){return proto.flow.execution.GetTransactionResultResponse.toObject(e,this)},proto.flow.execution.GetTransactionResultResponse.toObject=function(e,t){var o={statusCode:r.Message.getFieldWithDefault(t,1,0),errorMessage:r.Message.getFieldWithDefault(t,2,""),eventsList:r.Message.toObjectList(t.getEventsList(),a.Event.toObject,e)};return e&&(o.$jspbMessageInstance=t),o}),proto.flow.execution.GetTransactionResultResponse.deserializeBinary=function(e){var t=new r.BinaryReader(e),o=new proto.flow.execution.GetTransactionResultResponse;return proto.flow.execution.GetTransactionResultResponse.deserializeBinaryFromReader(o,t)},proto.flow.execution.GetTransactionResultResponse.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var o=t.readUint32();e.setStatusCode(o);break;case 2:o=t.readString();e.setErrorMessage(o);break;case 3:o=new a.Event;t.readMessage(o,a.Event.deserializeBinaryFromReader),e.addEvents(o);break;default:t.skipField()}}return e},proto.flow.execution.GetTransactionResultResponse.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.flow.execution.GetTransactionResultResponse.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.flow.execution.GetTransactionResultResponse.serializeBinaryToWriter=function(e,t){var o=void 0;0!==(o=e.getStatusCode())&&t.writeUint32(1,o),(o=e.getErrorMessage()).length>0&&t.writeString(2,o),(o=e.getEventsList()).length>0&&t.writeRepeatedMessage(3,o,a.Event.serializeBinaryToWriter)},proto.flow.execution.GetTransactionResultResponse.prototype.getStatusCode=function(){return r.Message.getFieldWithDefault(this,1,0)},proto.flow.execution.GetTransactionResultResponse.prototype.setStatusCode=function(e){return r.Message.setProto3IntField(this,1,e)},proto.flow.execution.GetTransactionResultResponse.prototype.getErrorMessage=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.flow.execution.GetTransactionResultResponse.prototype.setErrorMessage=function(e){return r.Message.setProto3StringField(this,2,e)},proto.flow.execution.GetTransactionResultResponse.prototype.getEventsList=function(){return r.Message.getRepeatedWrapperField(this,a.Event,3)},proto.flow.execution.GetTransactionResultResponse.prototype.setEventsList=function(e){return r.Message.setRepeatedWrapperField(this,3,e)},proto.flow.execution.GetTransactionResultResponse.prototype.addEvents=function(e,t){return r.Message.addToRepeatedWrapperField(this,3,e,proto.flow.entities.Event,t)},proto.flow.execution.GetTransactionResultResponse.prototype.clearEventsList=function(){return this.setEventsList([])},s.object.extend(t,proto.flow.execution)},function(e,t,o){var r=o(4),s=o(12).grpc,n=function(){function e(){}return e.serviceName="flow.access.AccessAPI",e}();function i(e,t){this.serviceHost=e,this.options=t||{}}n.Ping={methodName:"Ping",service:n,requestStream:!1,responseStream:!1,requestType:r.PingRequest,responseType:r.PingResponse},n.GetLatestBlockHeader={methodName:"GetLatestBlockHeader",service:n,requestStream:!1,responseStream:!1,requestType:r.GetLatestBlockHeaderRequest,responseType:r.BlockHeaderResponse},n.GetBlockHeaderByID={methodName:"GetBlockHeaderByID",service:n,requestStream:!1,responseStream:!1,requestType:r.GetBlockHeaderByIDRequest,responseType:r.BlockHeaderResponse},n.GetBlockHeaderByHeight={methodName:"GetBlockHeaderByHeight",service:n,requestStream:!1,responseStream:!1,requestType:r.GetBlockHeaderByHeightRequest,responseType:r.BlockHeaderResponse},n.GetLatestBlock={methodName:"GetLatestBlock",service:n,requestStream:!1,responseStream:!1,requestType:r.GetLatestBlockRequest,responseType:r.BlockResponse},n.GetBlockByID={methodName:"GetBlockByID",service:n,requestStream:!1,responseStream:!1,requestType:r.GetBlockByIDRequest,responseType:r.BlockResponse},n.GetBlockByHeight={methodName:"GetBlockByHeight",service:n,requestStream:!1,responseStream:!1,requestType:r.GetBlockByHeightRequest,responseType:r.BlockResponse},n.GetCollectionByID={methodName:"GetCollectionByID",service:n,requestStream:!1,responseStream:!1,requestType:r.GetCollectionByIDRequest,responseType:r.CollectionResponse},n.SendTransaction={methodName:"SendTransaction",service:n,requestStream:!1,responseStream:!1,requestType:r.SendTransactionRequest,responseType:r.SendTransactionResponse},n.GetTransaction={methodName:"GetTransaction",service:n,requestStream:!1,responseStream:!1,requestType:r.GetTransactionRequest,responseType:r.TransactionResponse},n.GetTransactionResult={methodName:"GetTransactionResult",service:n,requestStream:!1,responseStream:!1,requestType:r.GetTransactionRequest,responseType:r.TransactionResultResponse},n.GetAccount={methodName:"GetAccount",service:n,requestStream:!1,responseStream:!1,requestType:r.GetAccountRequest,responseType:r.GetAccountResponse},n.GetAccountAtLatestBlock={methodName:"GetAccountAtLatestBlock",service:n,requestStream:!1,responseStream:!1,requestType:r.GetAccountAtLatestBlockRequest,responseType:r.AccountResponse},n.GetAccountAtBlockHeight={methodName:"GetAccountAtBlockHeight",service:n,requestStream:!1,responseStream:!1,requestType:r.GetAccountAtBlockHeightRequest,responseType:r.AccountResponse},n.ExecuteScriptAtLatestBlock={methodName:"ExecuteScriptAtLatestBlock",service:n,requestStream:!1,responseStream:!1,requestType:r.ExecuteScriptAtLatestBlockRequest,responseType:r.ExecuteScriptResponse},n.ExecuteScriptAtBlockID={methodName:"ExecuteScriptAtBlockID",service:n,requestStream:!1,responseStream:!1,requestType:r.ExecuteScriptAtBlockIDRequest,responseType:r.ExecuteScriptResponse},n.ExecuteScriptAtBlockHeight={methodName:"ExecuteScriptAtBlockHeight",service:n,requestStream:!1,responseStream:!1,requestType:r.ExecuteScriptAtBlockHeightRequest,responseType:r.ExecuteScriptResponse},n.GetEventsForHeightRange={methodName:"GetEventsForHeightRange",service:n,requestStream:!1,responseStream:!1,requestType:r.GetEventsForHeightRangeRequest,responseType:r.EventsResponse},n.GetEventsForBlockIDs={methodName:"GetEventsForBlockIDs",service:n,requestStream:!1,responseStream:!1,requestType:r.GetEventsForBlockIDsRequest,responseType:r.EventsResponse},n.GetNetworkParameters={methodName:"GetNetworkParameters",service:n,requestStream:!1,responseStream:!1,requestType:r.GetNetworkParametersRequest,responseType:r.GetNetworkParametersResponse},t.AccessAPI=n,i.prototype.ping=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.Ping,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getLatestBlockHeader=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetLatestBlockHeader,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getBlockHeaderByID=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetBlockHeaderByID,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getBlockHeaderByHeight=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetBlockHeaderByHeight,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getLatestBlock=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetLatestBlock,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getBlockByID=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetBlockByID,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getBlockByHeight=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetBlockByHeight,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getCollectionByID=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetCollectionByID,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.sendTransaction=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.SendTransaction,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getTransaction=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetTransaction,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getTransactionResult=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetTransactionResult,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getAccount=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetAccount,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getAccountAtLatestBlock=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetAccountAtLatestBlock,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getAccountAtBlockHeight=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetAccountAtBlockHeight,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.executeScriptAtLatestBlock=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.ExecuteScriptAtLatestBlock,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.executeScriptAtBlockID=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.ExecuteScriptAtBlockID,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.executeScriptAtBlockHeight=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.ExecuteScriptAtBlockHeight,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getEventsForHeightRange=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetEventsForHeightRange,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getEventsForBlockIDs=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetEventsForBlockIDs,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getNetworkParameters=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetNetworkParameters,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},t.AccessAPIClient=i},function(e,t){!function(e,t){for(var o in t)e[o]=t[o]}(t,function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(4);t.Metadata=r.BrowserHeaders},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.debug?console.debug.apply(null,e):console.log.apply(null,e)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=null;t.default=function(e){null===r?(r=[e],setTimeout((function(){!function e(){if(r){var t=r;r=null;for(var o=0;o<t.length;o++)try{t[o]()}catch(n){null===r&&(r=[],setTimeout((function(){e()}),0));for(var s=t.length-1;s>o;s--)r.unshift(t[s]);throw n}}}()}),0)):r.push(e)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),s=o(9),n=o(10),i=o(1),a=o(2),g=o(5),l=o(15);t.client=function(e,t){return new c(e,t)};var c=function(){function e(e,t){this.started=!1,this.sentFirstMessage=!1,this.completed=!1,this.closed=!1,this.finishedSending=!1,this.onHeadersCallbacks=[],this.onMessageCallbacks=[],this.onEndCallbacks=[],this.parser=new s.ChunkParser,this.methodDefinition=e,this.props=t,this.createTransport()}return e.prototype.createTransport=function(){var e=this.props.host+"/"+this.methodDefinition.service.serviceName+"/"+this.methodDefinition.methodName,t={methodDefinition:this.methodDefinition,debug:this.props.debug||!1,url:e,onHeaders:this.onTransportHeaders.bind(this),onChunk:this.onTransportChunk.bind(this),onEnd:this.onTransportEnd.bind(this)};this.props.transport?this.transport=this.props.transport(t):this.transport=g.makeDefaultTransport(t)},e.prototype.onTransportHeaders=function(e,t){if(this.props.debug&&i.debug("onHeaders",e,t),this.closed)this.props.debug&&i.debug("grpc.onHeaders received after request was closed - ignoring");else if(0===t);else{this.responseHeaders=e,this.props.debug&&i.debug("onHeaders.responseHeaders",JSON.stringify(this.responseHeaders,null,2));var o=u(e);this.props.debug&&i.debug("onHeaders.gRPCStatus",o);var r=o&&o>=0?o:n.httpStatusToCode(t);this.props.debug&&i.debug("onHeaders.code",r);var s=e.get("grpc-message")||[];if(this.props.debug&&i.debug("onHeaders.gRPCMessage",s),this.rawOnHeaders(e),r!==n.Code.OK){var a=this.decodeGRPCStatus(s[0]);this.rawOnError(r,a,e)}}},e.prototype.onTransportChunk=function(e){var t=this;if(this.closed)this.props.debug&&i.debug("grpc.onChunk received after request was closed - ignoring");else{var o=[];try{o=this.parser.parse(e)}catch(e){return this.props.debug&&i.debug("onChunk.parsing error",e,e.message),void this.rawOnError(n.Code.Internal,"parsing error: "+e.message)}o.forEach((function(e){if(e.chunkType===s.ChunkType.MESSAGE){var o=t.methodDefinition.responseType.deserializeBinary(e.data);t.rawOnMessage(o)}else e.chunkType===s.ChunkType.TRAILERS&&(t.responseHeaders?(t.responseTrailers=new r.Metadata(e.trailers),t.props.debug&&i.debug("onChunk.trailers",t.responseTrailers)):(t.responseHeaders=new r.Metadata(e.trailers),t.rawOnHeaders(t.responseHeaders)))}))}},e.prototype.onTransportEnd=function(){if(this.props.debug&&i.debug("grpc.onEnd"),this.closed)this.props.debug&&i.debug("grpc.onEnd received after request was closed - ignoring");else if(void 0!==this.responseTrailers){var e=u(this.responseTrailers);if(null!==e){var t=this.responseTrailers.get("grpc-message"),o=this.decodeGRPCStatus(t[0]);this.rawOnEnd(e,o,this.responseTrailers)}else this.rawOnError(n.Code.Internal,"Response closed without grpc-status (Trailers provided)")}else{if(void 0===this.responseHeaders)return void this.rawOnError(n.Code.Unknown,"Response closed without headers");var r=u(this.responseHeaders),s=this.responseHeaders.get("grpc-message");if(this.props.debug&&i.debug("grpc.headers only response ",r,s),null===r)return void this.rawOnEnd(n.Code.Unknown,"Response closed without grpc-status (Headers only)",this.responseHeaders);var a=this.decodeGRPCStatus(s[0]);this.rawOnEnd(r,a,this.responseHeaders)}},e.prototype.decodeGRPCStatus=function(e){if(!e)return"";try{return decodeURIComponent(e)}catch(t){return e}},e.prototype.rawOnEnd=function(e,t,o){var r=this;this.props.debug&&i.debug("rawOnEnd",e,t,o),this.completed||(this.completed=!0,this.onEndCallbacks.forEach((function(s){a.default((function(){r.closed||s(e,t,o)}))})))},e.prototype.rawOnHeaders=function(e){this.props.debug&&i.debug("rawOnHeaders",e),this.completed||this.onHeadersCallbacks.forEach((function(t){a.default((function(){t(e)}))}))},e.prototype.rawOnError=function(e,t,o){var s=this;void 0===o&&(o=new r.Metadata),this.props.debug&&i.debug("rawOnError",e,t),this.completed||(this.completed=!0,this.onEndCallbacks.forEach((function(r){a.default((function(){s.closed||r(e,t,o)}))})))},e.prototype.rawOnMessage=function(e){var t=this;this.props.debug&&i.debug("rawOnMessage",e.toObject()),this.completed||this.closed||this.onMessageCallbacks.forEach((function(o){a.default((function(){t.closed||o(e)}))}))},e.prototype.onHeaders=function(e){this.onHeadersCallbacks.push(e)},e.prototype.onMessage=function(e){this.onMessageCallbacks.push(e)},e.prototype.onEnd=function(e){this.onEndCallbacks.push(e)},e.prototype.start=function(e){if(this.started)throw new Error("Client already started - cannot .start()");this.started=!0;var t=new r.Metadata(e||{});t.set("content-type","application/grpc-web+proto"),t.set("x-grpc-web","1"),this.transport.start(t)},e.prototype.send=function(e){if(!this.started)throw new Error("Client not started - .start() must be called before .send()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .send()");if(!this.methodDefinition.requestStream&&this.sentFirstMessage)throw new Error("Message already sent for non-client-streaming method - cannot .send()");this.sentFirstMessage=!0;var t=l.frameRequest(e);this.transport.sendMessage(t)},e.prototype.finishSend=function(){if(!this.started)throw new Error("Client not started - .finishSend() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .finishSend()");this.finishedSending=!0,this.transport.finishSend()},e.prototype.close=function(){if(!this.started)throw new Error("Client not started - .start() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .close()");this.closed=!0,this.props.debug&&i.debug("request.abort aborting request"),this.transport.cancel()},e}();function u(e){var t=e.get("grpc-status")||[];if(t.length>0)try{var o=t[0];return parseInt(o,10)}catch(e){return null}return null}},function(e,t,o){var r;r=function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(3),s=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={splitValues:!1});var o,s=this;this.headersMap={},e&&("undefined"!=typeof Headers&&e instanceof Headers?r.getHeaderKeys(e).forEach((function(o){r.getHeaderValues(e,o).forEach((function(e){t.splitValues?s.append(o,r.splitHeaderValue(e)):s.append(o,e)}))})):"object"==typeof(o=e)&&"object"==typeof o.headersMap&&"function"==typeof o.forEach?e.forEach((function(e,t){s.append(e,t)})):"undefined"!=typeof Map&&e instanceof Map?e.forEach((function(e,t){s.append(t,e)})):"string"==typeof e?this.appendFromString(e):"object"==typeof e&&Object.getOwnPropertyNames(e).forEach((function(t){var o=e[t];Array.isArray(o)?o.forEach((function(e){s.append(t,e)})):s.append(t,o)})))}return e.prototype.appendFromString=function(e){for(var t=e.split("\r\n"),o=0;o<t.length;o++){var r=t[o],s=r.indexOf(":");if(s>0){var n=r.substring(0,s).trim(),i=r.substring(s+1).trim();this.append(n,i)}}},e.prototype.delete=function(e,t){var o=r.normalizeName(e);if(void 0===t)delete this.headersMap[o];else{var s=this.headersMap[o];if(s){var n=s.indexOf(t);n>=0&&s.splice(n,1),0===s.length&&delete this.headersMap[o]}}},e.prototype.append=function(e,t){var o=this,s=r.normalizeName(e);Array.isArray(this.headersMap[s])||(this.headersMap[s]=[]),Array.isArray(t)?t.forEach((function(e){o.headersMap[s].push(r.normalizeValue(e))})):this.headersMap[s].push(r.normalizeValue(t))},e.prototype.set=function(e,t){var o=r.normalizeName(e);if(Array.isArray(t)){var s=[];t.forEach((function(e){s.push(r.normalizeValue(e))})),this.headersMap[o]=s}else this.headersMap[o]=[r.normalizeValue(t)]},e.prototype.has=function(e,t){var o=this.headersMap[r.normalizeName(e)];if(!Array.isArray(o))return!1;if(void 0!==t){var s=r.normalizeValue(t);return o.indexOf(s)>=0}return!0},e.prototype.get=function(e){var t=this.headersMap[r.normalizeName(e)];return void 0!==t?t.concat():[]},e.prototype.forEach=function(e){var t=this;Object.getOwnPropertyNames(this.headersMap).forEach((function(o){e(o,t.headersMap[o])}),this)},e.prototype.toHeaders=function(){if("undefined"!=typeof Headers){var e=new Headers;return this.forEach((function(t,o){o.forEach((function(o){e.append(t,o)}))})),e}throw new Error("Headers class is not defined")},e}();t.BrowserHeaders=s},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0);t.BrowserHeaders=r.BrowserHeaders},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iterateHeaders=function(e,t){for(var o=e[Symbol.iterator](),r=o.next();!r.done;)t(r.value[0]),r=o.next()},t.iterateHeadersKeys=function(e,t){for(var o=e.keys(),r=o.next();!r.done;)t(r.value),r=o.next()}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(2);t.normalizeName=function(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()},t.normalizeValue=function(e){return"string"!=typeof e&&(e=String(e)),e},t.getHeaderValues=function(e,t){var o=e;if(o instanceof Headers&&o.getAll)return o.getAll(t);var r=o.get(t);return r&&"string"==typeof r?[r]:r},t.getHeaderKeys=function(e){var t=e,o={},s=[];return t.keys?r.iterateHeadersKeys(t,(function(e){o[e]||(o[e]=!0,s.push(e))})):t.forEach?t.forEach((function(e,t){o[t]||(o[t]=!0,s.push(t))})):r.iterateHeaders(t,(function(e){var t=e[0];o[t]||(o[t]=!0,s.push(t))})),s},t.splitHeaderValue=function(e){var t=[];return e.split(", ").forEach((function(e){e.split(",").forEach((function(e){t.push(e)}))})),t}}])},e.exports=r()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(6),s=function(e){return r.CrossBrowserHttpTransport({withCredentials:!1})(e)};t.setDefaultTransportFactory=function(e){s=e},t.makeDefaultTransport=function(e){return s(e)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(7),s=o(8);t.CrossBrowserHttpTransport=function(e){if(r.detectFetchSupport()){var t={credentials:e.withCredentials?"include":"same-origin"};return r.FetchReadableStreamTransport(t)}return s.XhrTransport({withCredentials:e.withCredentials})}},function(e,t,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),n=o(1),i=o(2);t.FetchReadableStreamTransport=function(e){return function(t){return function(e,t){return e.debug&&n.debug("fetchRequest",e),new a(e,t)}(t,e)}};var a=function(){function e(e,t){this.cancelled=!1,this.controller=self.AbortController&&new AbortController,this.options=e,this.init=t}return e.prototype.pump=function(e,t){var o=this;if(this.reader=e,this.cancelled)return this.options.debug&&n.debug("Fetch.pump.cancel at first pump"),void this.reader.cancel();this.reader.read().then((function(e){if(e.done)return i.default((function(){o.options.onEnd()})),t;i.default((function(){o.options.onChunk(e.value)})),o.pump(o.reader,t)})).catch((function(e){o.cancelled?o.options.debug&&n.debug("Fetch.catch - request cancelled"):(o.cancelled=!0,o.options.debug&&n.debug("Fetch.catch",e.message),i.default((function(){o.options.onEnd(e)})))}))},e.prototype.send=function(e){var t=this;fetch(this.options.url,r({},this.init,{headers:this.metadata.toHeaders(),method:"POST",body:e,signal:this.controller&&this.controller.signal})).then((function(e){if(t.options.debug&&n.debug("Fetch.response",e),i.default((function(){t.options.onHeaders(new s.Metadata(e.headers),e.status)})),!e.body)return e;t.pump(e.body.getReader(),e)})).catch((function(e){t.cancelled?t.options.debug&&n.debug("Fetch.catch - request cancelled"):(t.cancelled=!0,t.options.debug&&n.debug("Fetch.catch",e.message),i.default((function(){t.options.onEnd(e)})))}))},e.prototype.sendMessage=function(e){this.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){this.metadata=e},e.prototype.cancel=function(){this.cancelled?this.options.debug&&n.debug("Fetch.abort.cancel already cancelled"):(this.cancelled=!0,this.reader?(this.options.debug&&n.debug("Fetch.abort.cancel"),this.reader.cancel()):this.options.debug&&n.debug("Fetch.abort.cancel before reader"),this.controller&&this.controller.abort())},e}();t.detectFetchSupport=function(){return"undefined"!=typeof Response&&Response.prototype.hasOwnProperty("body")&&"function"==typeof Headers}},function(e,t,o){"use strict";var r,s=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=o(1),a=o(2),g=o(12);t.XhrTransport=function(e){return function(t){if(g.detectMozXHRSupport())return new c(t,e);if(g.detectXHROverrideMimeTypeSupport())return new l(t,e);throw new Error("This environment's XHR implementation cannot support binary transfer.")}};var l=function(){function e(e,t){this.options=e,this.init=t}return e.prototype.onProgressEvent=function(){var e=this;this.options.debug&&i.debug("XHR.onProgressEvent.length: ",this.xhr.response.length);var t=this.xhr.response.substr(this.index);this.index=this.xhr.response.length;var o=p(t);a.default((function(){e.options.onChunk(o)}))},e.prototype.onLoadEvent=function(){var e=this;this.options.debug&&i.debug("XHR.onLoadEvent"),a.default((function(){e.options.onEnd()}))},e.prototype.onStateChange=function(){var e=this;this.options.debug&&i.debug("XHR.onStateChange",this.xhr.readyState),this.xhr.readyState===XMLHttpRequest.HEADERS_RECEIVED&&a.default((function(){e.options.onHeaders(new n.Metadata(e.xhr.getAllResponseHeaders()),e.xhr.status)}))},e.prototype.sendMessage=function(e){this.xhr.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){var t=this;this.metadata=e;var o=new XMLHttpRequest;this.xhr=o,o.open("POST",this.options.url),this.configureXhr(),this.metadata.forEach((function(e,t){o.setRequestHeader(e,t.join(", "))})),o.withCredentials=Boolean(this.init.withCredentials),o.addEventListener("readystatechange",this.onStateChange.bind(this)),o.addEventListener("progress",this.onProgressEvent.bind(this)),o.addEventListener("loadend",this.onLoadEvent.bind(this)),o.addEventListener("error",(function(e){t.options.debug&&i.debug("XHR.error",e),a.default((function(){t.options.onEnd(e.error)}))}))},e.prototype.configureXhr=function(){this.xhr.responseType="text",this.xhr.overrideMimeType("text/plain; charset=x-user-defined")},e.prototype.cancel=function(){this.options.debug&&i.debug("XHR.abort"),this.xhr.abort()},e}();t.XHR=l;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.configureXhr=function(){this.options.debug&&i.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"),this.xhr.responseType="moz-chunked-arraybuffer"},t.prototype.onProgressEvent=function(){var e=this,t=this.xhr.response;this.options.debug&&i.debug("MozXHR.onProgressEvent: ",new Uint8Array(t)),a.default((function(){e.options.onChunk(new Uint8Array(t))}))},t}(l);function u(e,t){var o=e.charCodeAt(t);if(o>=55296&&o<=56319){var r=e.charCodeAt(t+1);r>=56320&&r<=57343&&(o=65536+(o-55296<<10)+(r-56320))}return o}function p(e){for(var t=new Uint8Array(e.length),o=0,r=0;r<e.length;r++){var s=String.prototype.codePointAt?e.codePointAt(r):u(e,r);t[o++]=255&s}return t}t.MozChunkedArrayBufferXHR=c,t.stringToArrayBuffer=p},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=o(0);function n(e){return function(e){return 9===e||10===e||13===e}(e)||e>=32&&e<=126}function i(e){for(var t=0;t!==e.length;++t)if(!n(e[t]))throw new Error("Metadata is not valid (printable) ASCII");return String.fromCharCode.apply(String,Array.prototype.slice.call(e))}function a(e){return 128==(128&e.getUint8(0))}function g(e){return e.getUint32(1,!1)}function l(e,t,o){return e.byteLength-t>=o}function c(e,t,o){if(e.slice)return e.slice(t,o);var r=e.length;void 0!==o&&(r=o);for(var s=new Uint8Array(r-t),n=0,i=t;i<r;i++)s[n++]=e[i];return s}t.decodeASCII=i,t.encodeASCII=function(e){for(var t=new Uint8Array(e.length),o=0;o!==e.length;++o){var r=e.charCodeAt(o);if(!n(r))throw new Error("Metadata contains invalid ASCII");t[o]=r}return t},function(e){e[e.MESSAGE=1]="MESSAGE",e[e.TRAILERS=2]="TRAILERS"}(r=t.ChunkType||(t.ChunkType={}));var u=function(){function e(){this.buffer=null,this.position=0}return e.prototype.parse=function(e,t){if(0===e.length&&t)return[];var o,n=[];if(null==this.buffer)this.buffer=e,this.position=0;else if(this.position===this.buffer.byteLength)this.buffer=e,this.position=0;else{var u=this.buffer.byteLength-this.position,p=new Uint8Array(u+e.byteLength),d=c(this.buffer,this.position);p.set(d,0);var f=new Uint8Array(e);p.set(f,u),this.buffer=p,this.position=0}for(;;){if(!l(this.buffer,this.position,5))return n;var h=c(this.buffer,this.position,this.position+5),y=new DataView(h.buffer,h.byteOffset,h.byteLength),b=g(y);if(!l(this.buffer,this.position,5+b))return n;var m=c(this.buffer,this.position+5,this.position+5+b);if(this.position+=5+b,a(y))return n.push({chunkType:r.TRAILERS,trailers:(o=m,new s.Metadata(i(o)))}),n;n.push({chunkType:r.MESSAGE,data:m})}},e}();t.ChunkParser=u},function(e,t,o){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.Canceled=1]="Canceled",e[e.Unknown=2]="Unknown",e[e.InvalidArgument=3]="InvalidArgument",e[e.DeadlineExceeded=4]="DeadlineExceeded",e[e.NotFound=5]="NotFound",e[e.AlreadyExists=6]="AlreadyExists",e[e.PermissionDenied=7]="PermissionDenied",e[e.ResourceExhausted=8]="ResourceExhausted",e[e.FailedPrecondition=9]="FailedPrecondition",e[e.Aborted=10]="Aborted",e[e.OutOfRange=11]="OutOfRange",e[e.Unimplemented=12]="Unimplemented",e[e.Internal=13]="Internal",e[e.Unavailable=14]="Unavailable",e[e.DataLoss=15]="DataLoss",e[e.Unauthenticated=16]="Unauthenticated"}(r=t.Code||(t.Code={})),t.httpStatusToCode=function(e){switch(e){case 0:return r.Internal;case 200:return r.OK;case 400:return r.InvalidArgument;case 401:return r.Unauthenticated;case 403:return r.PermissionDenied;case 404:return r.NotFound;case 409:return r.Aborted;case 412:return r.FailedPrecondition;case 429:return r.ResourceExhausted;case 499:return r.Canceled;case 500:return r.Unknown;case 501:return r.Unimplemented;case 503:return r.Unavailable;case 504:return r.DeadlineExceeded;default:return r.Unknown}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(4),s=o(5),n=o(7),i=o(13),a=o(8),g=o(6),l=o(10),c=o(14),u=o(16),p=o(3);!function(e){e.setDefaultTransport=s.setDefaultTransportFactory,e.CrossBrowserHttpTransport=g.CrossBrowserHttpTransport,e.FetchReadableStreamTransport=n.FetchReadableStreamTransport,e.XhrTransport=a.XhrTransport,e.WebsocketTransport=i.WebsocketTransport,e.Code=l.Code,e.Metadata=r.BrowserHeaders,e.client=function(e,t){return p.client(e,t)},e.invoke=c.invoke,e.unary=u.unary}(t.grpc||(t.grpc={}))},function(e,t,o){"use strict";var r;function s(e){var t=function(){if(void 0!==r)return r;if(XMLHttpRequest){r=new XMLHttpRequest;try{r.open("GET","https://localhost")}catch(e){}}return r}();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.xhrSupportsResponseType=s,t.detectMozXHRSupport=function(){return"undefined"!=typeof XMLHttpRequest&&s("moz-chunked-arraybuffer")},t.detectXHROverrideMimeTypeSupport=function(){return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType")}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=o(1),n=o(2),i=o(9);!function(e){e[e.FINISH_SEND=1]="FINISH_SEND"}(r||(r={}));var a=new Uint8Array([1]);t.WebsocketTransport=function(){return function(e){return function(e){e.debug&&s.debug("websocketRequest",e);var t,o=function(e){if("https://"===e.substr(0,8))return"wss://"+e.substr(8);if("http://"===e.substr(0,7))return"ws://"+e.substr(7);throw new Error("Websocket transport constructed with non-https:// or http:// host.")}(e.url),g=[];function l(e){if(e===r.FINISH_SEND)t.send(a);else{var o=e,s=new Int8Array(o.byteLength+1);s.set(new Uint8Array([0])),s.set(o,1),t.send(s)}}return{sendMessage:function(e){t&&t.readyState!==t.CONNECTING?l(e):g.push(e)},finishSend:function(){t&&t.readyState!==t.CONNECTING?l(r.FINISH_SEND):g.push(r.FINISH_SEND)},start:function(r){(t=new WebSocket(o,["grpc-websockets"])).binaryType="arraybuffer",t.onopen=function(){var o;e.debug&&s.debug("websocketRequest.onopen"),t.send((o="",r.forEach((function(e,t){o+=e+": "+t.join(", ")+"\r\n"})),i.encodeASCII(o))),g.forEach((function(e){l(e)}))},t.onclose=function(t){e.debug&&s.debug("websocketRequest.onclose",t),n.default((function(){e.onEnd()}))},t.onerror=function(t){e.debug&&s.debug("websocketRequest.onerror",t)},t.onmessage=function(t){n.default((function(){e.onChunk(new Uint8Array(t.data))}))}},cancel:function(){e.debug&&s.debug("websocket.abort"),n.default((function(){t.close()}))}}}(e)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(3);t.invoke=function(e,t){if(e.requestStream)throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");var o=r.client(e,{host:t.host,transport:t.transport,debug:t.debug});return t.onHeaders&&o.onHeaders(t.onHeaders),t.onMessage&&o.onMessage(t.onMessage),t.onEnd&&o.onEnd(t.onEnd),o.start(t.metadata),o.send(t.request),o.finishSend(),{close:function(){o.close()}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.frameRequest=function(e){var t=e.serializeBinary(),o=new ArrayBuffer(t.byteLength+5);return new DataView(o,1,4).setUint32(0,t.length,!1),new Uint8Array(o,5).set(t),new Uint8Array(o)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),s=o(3);t.unary=function(e,t){if(e.responseStream)throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");if(e.requestStream)throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");var o=null,n=null,i=s.client(e,{host:t.host,transport:t.transport,debug:t.debug});return i.onHeaders((function(e){o=e})),i.onMessage((function(e){n=e})),i.onEnd((function(e,s,i){t.onEnd({status:e,statusMessage:s,headers:o||new r.Metadata,message:n,trailers:i})})),i.start(t.metadata),i.send(t.request),i.finishSend(),{close:function(){i.close()}}}}]))},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,o){var r=o(10),s=o(12).grpc,n=function(){function e(){}return e.serviceName="flow.execution.ExecutionAPI",e}();function i(e,t){this.serviceHost=e,this.options=t||{}}n.Ping={methodName:"Ping",service:n,requestStream:!1,responseStream:!1,requestType:r.PingRequest,responseType:r.PingResponse},n.GetAccountAtBlockID={methodName:"GetAccountAtBlockID",service:n,requestStream:!1,responseStream:!1,requestType:r.GetAccountAtBlockIDRequest,responseType:r.GetAccountAtBlockIDResponse},n.ExecuteScriptAtBlockID={methodName:"ExecuteScriptAtBlockID",service:n,requestStream:!1,responseStream:!1,requestType:r.ExecuteScriptAtBlockIDRequest,responseType:r.ExecuteScriptAtBlockIDResponse},n.GetEventsForBlockIDs={methodName:"GetEventsForBlockIDs",service:n,requestStream:!1,responseStream:!1,requestType:r.GetEventsForBlockIDsRequest,responseType:r.GetEventsForBlockIDsResponse},n.GetTransactionResult={methodName:"GetTransactionResult",service:n,requestStream:!1,responseStream:!1,requestType:r.GetTransactionResultRequest,responseType:r.GetTransactionResultResponse},t.ExecutionAPI=n,i.prototype.ping=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.Ping,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getAccountAtBlockID=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetAccountAtBlockID,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.executeScriptAtBlockID=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.ExecuteScriptAtBlockID,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getEventsForBlockIDs=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetEventsForBlockIDs,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},i.prototype.getTransactionResult=function(e,t,o){2===arguments.length&&(o=arguments[1]);var r=s.unary(n.GetTransactionResult,{request:e,host:this.serviceHost,metadata:t,transport:this.options.transport,debug:this.options.debug,onEnd:function(e){if(o)if(e.status!==s.Code.OK){var t=new Error(e.statusMessage);t.code=e.status,t.metadata=e.trailers,o(t,null)}else o(null,e.message)}});return{cancel:function(){o=null,r.close()}}},t.ExecutionAPIClient=i},function(e,t,o){"use strict";o.r(t);var r=o(11);for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);var n=o(4);for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);var i=o(13);for(var s in i)"default"!==s&&function(e){o.d(t,e,(function(){return i[e]}))}(s);var a=o(1);for(var s in a)"default"!==s&&function(e){o.d(t,e,(function(){return a[e]}))}(s);var g=o(14);for(var s in g)"default"!==s&&function(e){o.d(t,e,(function(){return g[e]}))}(s);var l=o(5);for(var s in l)"default"!==s&&function(e){o.d(t,e,(function(){return l[e]}))}(s);var c=o(15);for(var s in c)"default"!==s&&function(e){o.d(t,e,(function(){return c[e]}))}(s);var u=o(7);for(var s in u)"default"!==s&&function(e){o.d(t,e,(function(){return u[e]}))}(s);var p=o(16);for(var s in p)"default"!==s&&function(e){o.d(t,e,(function(){return p[e]}))}(s);var d=o(8);for(var s in d)"default"!==s&&function(e){o.d(t,e,(function(){return d[e]}))}(s);var f=o(17);for(var s in f)"default"!==s&&function(e){o.d(t,e,(function(){return f[e]}))}(s);var h=o(2);for(var s in h)"default"!==s&&function(e){o.d(t,e,(function(){return h[e]}))}(s);var y=o(18);for(var s in y)"default"!==s&&function(e){o.d(t,e,(function(){return y[e]}))}(s);var b=o(3);for(var s in b)"default"!==s&&function(e){o.d(t,e,(function(){return b[e]}))}(s);var m=o(19);for(var s in m)"default"!==s&&function(e){o.d(t,e,(function(){return m[e]}))}(s);var _=o(9);for(var s in _)"default"!==s&&function(e){o.d(t,e,(function(){return _[e]}))}(s);var E=o(20);for(var s in E)"default"!==s&&function(e){o.d(t,e,(function(){return E[e]}))}(s);var S=o(10);for(var s in S)"default"!==s&&function(e){o.d(t,e,(function(){return S[e]}))}(s)}]);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"buffer":15}],4:[function(require,module,exports){
(function (Buffer){(function (){
function r(r,e){if(r<56)return Buffer.from([r+e]);var f=n(r),t=n(e+55+f.length/2);return Buffer.from(t+f,"hex")}function e(r){return"0x"===r.slice(0,2)}function n(r){if(r<0)throw new Error("Invalid integer as argument, must be unsigned!");var e=r.toString(16);return e.length%2?"0"+e:e}function f(r){if(!Buffer.isBuffer(r)){if("string"==typeof r)return e(r)?Buffer.from((t="string"!=typeof(u=r)?u:e(u)?u.slice(2):u).length%2?"0"+t:t,"hex"):Buffer.from(r);if("number"==typeof r)return r?(f=n(r),Buffer.from(f,"hex")):Buffer.from([]);if(null==r)return Buffer.from([]);if(r instanceof Uint8Array)return Buffer.from(r);throw new Error("invalid type")}var f,t,u;return r}exports.encode=function e(n){if(Array.isArray(n)){for(var t=[],u=0;u<n.length;u++)t.push(e(n[u]));var i=Buffer.concat(t);return Buffer.concat([r(i.length,192),i])}var o=f(n);return 1===o.length&&o[0]<128?o:Buffer.concat([r(o.length,128),o])},exports.getLength=function(r){if(!r||0===r.length)return Buffer.from([]);var e=f(r),n=e[0];if(n<=127)return e.length;if(n<=183)return n-127;if(n<=191)return n-182;if(n<=247)return n-191;var t=n-246;return t+function(r,e){if("00"===r.slice(0,2))throw new Error("invalid RLP: extra zeros");return parseInt(r,16)}(e.slice(1,t).toString("hex"))},exports.toBuffer=f;


}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":15}],5:[function(require,module,exports){
(function (Buffer){(function (){
var e=require("@onflow/util-invariant"),t=require("@onflow/util-actor"),n=require("@onflow/protobuf"),r=require("@onflow/util-address"),o=require("@improbable-eng/grpc-web"),i=require("@improbable-eng/grpc-web-node-http-transport"),s=require("@onflow/rlp"),u=require("@onflow/util-template");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function d(e,t,n){return(d=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function m(e){var t="function"==typeof Map?new Map:void 0;return(m=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return d(e,arguments,a(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),l(n,e)})(e)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g,h='{\n  "tag":"UNKNOWN",\n  "assigns":{},\n  "status":"OK",\n  "reason":null,\n  "accounts":{},\n  "params":{},\n  "arguments":{},\n  "message": {\n    "cadence":null,\n    "refBlock":null,\n    "computeLimit":null,\n    "proposer":null,\n    "payer":null,\n    "authorizations":[],\n    "params":[],\n    "arguments":[]\n  },\n  "proposer":null,\n  "authorizations":[],\n  "payer":null,\n  "events": {\n    "eventType":null,\n    "start":null,\n    "end":null,\n    "blockIds":[]\n  },\n  "transaction": {\n    "id":null\n  },\n  "block": {\n    "id":null,\n    "height":null,\n    "isSealed":null\n  },\n  "account": {\n    "addr":null\n  },\n  "collection": {\n    "id":null\n  }\n}',v=new Set(Object.keys(JSON.parse(h))),y=function(){return JSON.parse(h)},k="abcdefghijklmnopqrstuvwxyz0123456789".split(""),I=function(){return k[~~(Math.random()*k.length)]},P=function(){return Array.from({length:10},I).join("")},b=function(e){return Array.isArray(e)},S=function(e){return null==e},x=function(e){return e.status="OK",e},B=function(e,t){return e.status="BAD",e.reason=t,e},A=function(e){return function(t){return t.tag=e,x(t)}},w=function(t,n){return void 0===n&&(n={}),function(r){var o;e.invariant("function"==typeof t||"object"==typeof t,"prepAccount must be passed an authorization function or an account object"),e.invariant(null!=n.role,"Account must have a role");var i=JSON.parse('{\n  "kind":"ACCOUNT",\n  "tempId":null,\n  "addr":null,\n  "keyId":null,\n  "sequenceNum":null,\n  "signature":null,\n  "signingFunction":null,\n  "resolve":null,\n  "role": {\n    "proposer":false,\n    "authorizer":false,\n    "payer":false,\n    "param":false\n  }\n}'),s=n.role,u=P();return r.accounts[u]=c({},i,{tempId:u},t="function"==typeof t?{resolve:t}:t,{role:c({},i.role,"object"==typeof t.role?t.role:{},(o={},o[s]=!0,o))}),"authorizer"===s?r.authorizations.push(u):r[s]=u,r}},E=function(e){return function(t){var n=P();return t.message.arguments.push(n),t.arguments[n]=JSON.parse('{\n  "kind":"ARGUMENT",\n  "tempId":null,\n  "value":null,\n  "asArgument":null,\n  "xform":null,\n  "resolve": null\n}'),t.arguments[n].tempId=n,t.arguments[n].value=e.value,t.arguments[n].asArgument=e.asArgument,t.arguments[n].xform=e.xform,t.arguments[n].resolve=e.resolve,x(t)}},T=A("SCRIPT"),N=A("TRANSACTION"),j=A("GET_TRANSACTION_STATUS"),G=A("GET_TRANSACTION"),O=A("GET_ACCOUNT"),L=A("GET_EVENTS"),_=A("GET_LATEST_BLOCK"),R=A("GET_BLOCK_BY_ID"),C=A("GET_BLOCK_BY_HEIGHT"),U=A("PING"),D=A("GET_BLOCK"),H=A("GET_BLOCK_HEADER"),F=A("GET_COLLECTION"),K=function(e){return function(t){return t.tag===e}},q=K("UNKNOWN"),z=K("SCRIPT"),M=K("TRANSACTION"),J=K("GET_TRANSACTION_STATUS"),W=K("GET_TRANSACTION"),V=K("GET_ACCOUNT"),Y=K("GET_EVENTS"),$=K("GET_LATEST_BLOCK"),X=K("GET_BLOCK_BY_ID"),Z=K("GET_BLOCK_BY_HEIGHT"),Q=K("PING"),ee=K("GET_BLOCK"),te=K("GET_BLOCK_HEADER"),ne=K("GET_COLLECTION"),re=function(e){return"BAD"===e.status},oe=function e(t,n){void 0===n&&(n=[]);try{return Promise.resolve(function(r,o){try{var i=Promise.resolve(t).then(function(r){if(t=function(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];if(!v.has(r))throw new Error('"'+r+'" is an invalid root level Interaction property.')}return e}(r),re(t))throw new Error("Interaction Error: "+t.reason);if(!n.length)return t;var o=n[0],i=n.slice(1);return Promise.resolve(o).then(function(n){if("function"==typeof n)return e(n(t),i);if(S(n)||!n)return e(t,i);if(function(e){if(null===(t=e)||"object"!=typeof t||S(e)||function(e){return"number"==typeof e}(e))return!1;for(var t,n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e))){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(v);!(n=r()).done;)if(!e.hasOwnProperty(n.value))return!1;return!0}(n))return e(n,i);throw new Error("Invalid Interaction Composition")})})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},ie=function e(){var t=[].slice.call(arguments),n=t[0],r=t[1];return b(n)&&null==r?function(t){return e(t,n)}:oe(n,r)},se=function(e){return e},ue=function(e,t,n){return null==e.assigns[t]?n:e.assigns[t]},ce=function(e,t){return function(n){return n.assigns[e]=t,x(n)}},ae=function(e,t){return void 0===t&&(t=se),function(n){return n.assigns[e]=t(n.assigns[e],n),x(n)}};function le(e){return void 0===e&&(e=[]),ie(y(),e)}var fe=function e(t,n){void 0===t&&(t=[]);try{if(!t.length)return Promise.resolve(n);var r=t[0],o=t.slice(1);return Promise.resolve(ke(r)).then(function(t){return null==t?e(o,n):t})}catch(e){return Promise.reject(e)}},de="config",me="PUT_CONFIG",pe="GET_CONFIG",ge="CONFIG/UPDATED",he=function(e){return e},ve=((g={})[me]=function(e,t,n){var r=n.key,o=n.value;if(null==r)throw new Error("Missing 'key' for config/put.");e.put(r,o),e.broadcast(ge,c({},e.all()))},g[pe]=function(e,t,n){var r=n.key,o=n.fallback;if(null==r)throw new Error("Missing 'key' for config/get");t.reply(e.get(r,o))},g.GET_ALL_CONFIG=function(e,t){t.reply(c({},e.all()))},g.UPDATE_CONFIG=function(e,t,n){var r=n.key,o=n.fn;if(null==r)throw new Error("Missing 'key' for config/update");e.update(r,o||he),e.broadcast(ge,c({},e.all()))},g.DELETE_CONFIG=function(e,t,n){var r=n.key;if(null==r)throw new Error("Missing 'key' for config/delete");e.delete(r),e.broadcast(ge,c({},e.all()))},g.CLEAR_CONFIG=function(e,t){for(var n=0,r=Object.keys(e.all());n<r.length;n++)e.delete(r[n]);e.broadcast(ge,c({},e.all()))},g.WHERE_CONFIG=function(e,t,n){var r=n.pattern;if(null==r)throw new Error("Missing 'pattern' for config/where");t.reply(e.where(r))},g[t.SUBSCRIBE]=function(e,t){e.subscribe(t.from),e.send(t.from,ge,c({},e.all()))},g[t.UNSUBSCRIBE]=function(e,t){e.unsubscribe(t.from)},g);function ye(e,n){return t.send(de,me,{key:e,value:n}),Ae()}function ke(e,n){return t.send(de,pe,{key:e,fallback:n},{expectReply:!0,timeout:10})}function Ie(){return t.send(de,"GET_ALL_CONFIG",null,{expectReply:!0,timeout:10})}function Pe(e,n){return void 0===n&&(n=he),t.send(de,"UPDATE_CONFIG",{key:e,fn:n}),Ae()}function be(e){return t.send(de,"DELETE_CONFIG",{key:e}),Ae()}function Se(e){return t.send(de,"WHERE_CONFIG",{pattern:e},{expectReply:!0,timeout:10})}function xe(e){return t.subscriber(de,function(){return t.spawn(ve,de)},e)}function Be(){return t.send(de,"CLEAR_CONFIG")}function Ae(e){return null!=e&&"object"==typeof e&&Object.keys(e).map(function(t){return ye(t,e[t])}),{put:ye,get:ke,all:Ie,first:fe,update:Pe,delete:be,where:Se,subscribe:xe,overload:Ee}}t.spawn(ve,de),Ae.put=ye,Ae.get=ke,Ae.all=Ie,Ae.first=fe,Ae.update=Pe,Ae.delete=be,Ae.where=Se,Ae.subscribe=xe,Ae.overload=Ee;var we=function(e){return e};function Ee(e,t){return void 0===e&&(e={}),void 0===t&&(t=we),new Promise(function(n,r){try{return Promise.resolve(Ie()).then(function(o){var i=function(r,i){try{var s=function(){Ae(e);var r=t;return Promise.resolve(Ie()).then(function(e){return Promise.resolve(r(e)).then(function(e){return Promise.resolve(Be()).then(function(){return Promise.resolve(Ae(o)).then(function(){n(e)})})})})}()}catch(e){return i(e)}return s&&s.then?s.then(void 0,i):s}(0,function(e){return Promise.resolve(Be()).then(function(){return Promise.resolve(Ae(o)).then(function(){r(e)})})});if(i&&i.then)return i.then(function(){})})}catch(e){return Promise.reject(e)}})}var Te=function(){return JSON.parse('{\n    "tag":null,\n    "transaction":null,\n    "transactionStatus":null,\n    "transactionId":null,\n    "encodedData":null,\n    "events":null,\n    "account":null,\n    "block":null,\n    "blockHeader":null,\n    "latestBlock":null,\n    "collection":null\n}')},Ne=function(e,t,n){try{return Promise.resolve(Ae().get("grpc.metadata",{})).then(function(r){return new Promise(function(i,s){o.grpc.unary(t,{request:n,host:e,metadata:new o.grpc.Metadata(r),onEnd:function(e){var t=e.statusMessage;e.status===o.grpc.Code.OK?i(e.message):s(new Error(t))}})})})}catch(e){return Promise.reject(e)}};o.grpc.setDefaultTransport(i.NodeHttpTransport());var je=function(e){return Buffer.from(e,"hex")},Ge=function(e){return Buffer.from(e.padStart(16,0),"hex")},Oe=function(e){return Buffer.from(e).toString("hex")},Le=function(e){return Buffer.from(JSON.stringify(e),"utf8")};function _e(e,t){var n=Te();return n.tag=e.tag,n.encodedData=JSON.parse(Buffer.from(t.getValue_asU8()).toString("utf8")),n}var Re=function(e){return Buffer.from(e).toString("hex")},Ce=function(e){return Buffer.from(e.padStart(16,0),"hex")};function Ue(e,t){var n=Te();n.tag=e.tag;var o,i=t.getAccount(),s=(o=i.getContractsMap())?o.getEntryList().reduce(function(e,t){var n;return c({},e,((n={})[t[0]]=Buffer.from(t[1]||new UInt8Array).toString("utf8"),n))},{}):{};return n.account={address:r.withPrefix(Re(i.getAddress_asU8())),balance:i.getBalance(),code:Buffer.from(i.getCode_asU8()||new UInt8Array).toString("utf8"),contracts:s,keys:i.getKeysList().map(function(e){return{index:e.getIndex(),publicKey:Re(e.getPublicKey_asU8()),signAlgo:e.getSignAlgo(),hashAlgo:e.getHashAlgo(),weight:e.getWeight(),sequenceNumber:e.getSequenceNumber(),revoked:e.getRevoked()}})},n}var De=function(e){return Buffer.from(e).toString("hex")};function He(e,t){var n=Te();n.tag=e.tag;var r=t.getResultsList();return n.events=r.reduce(function(e,t){var n=De(t.getBlockId_asU8()),r=t.getBlockHeight(),o=t.getBlockTimestamp().toDate().toISOString();return t.getEventsList().forEach(function(t){e.push({blockId:n,blockHeight:r,blockTimestamp:o,type:t.getType(),transactionId:De(t.getTransactionId_asU8()),transactionIndex:t.getTransactionIndex(),eventIndex:t.getEventIndex(),payload:JSON.parse(Buffer.from(t.getPayload_asU8()).toString("utf8"))})}),e},[]),n}var Fe=function(e){return Buffer.from(e).toString("hex")};function Ke(e,t){var n=t.getBlock(),r=n.getCollectionGuaranteesList(),o=n.getBlockSealsList(),i=n.getSignaturesList().map(Fe),s=Te();return s.tag=e.tag,s.block={id:Fe(n.getId_asU8()),parentId:Fe(n.getParentId_asU8()),height:n.getHeight(),timestamp:n.getTimestamp().toDate().toISOString(),collectionGuarantees:r.map(function(e){return{collectionId:Fe(e.getCollectionId_asU8()),signatures:e.getSignaturesList().map(Fe)}}),blockSeals:o.map(function(e){return{blockId:Fe(e.getBlockId_asU8()),executionReceiptId:Fe(e.getExecutionReceiptId_asU8()),executionReceiptSignatures:e.getExecutionReceiptSignaturesList().map(Fe),resultApprovalSignatures:e.getResultApprovalSignaturesList().map(Fe)}}),signatures:i},s}var qe=function(e){return Buffer.from(e).toString("hex")};function ze(e,t){var n=t.getBlock(),r=Te();return r.tag=e.tag,r.blockHeader={id:qe(n.getId_asU8()),parentId:qe(n.getParentId_asU8()),height:n.getHeight(),timestamp:n.getTimestamp().toDate().toISOString()},r}var Me=function(e){return Buffer.from(e).toString("hex")},Je=function(e){return Buffer.from(e).toString("hex")},We=function(e){return Buffer.from(e).toString("hex")},Ve=function(e){return Buffer.from(e).toString("hex")},Ye=function(t,o){void 0===o&&(o={});try{var i=function(i){return o.node=i,Promise.resolve(t).then(function(i){switch(t=i,!0){case M(t):return o.sendTransaction?o.sendTransaction(t,o):function(e,t){void 0===t&&(t={});try{var o=t.unary||Ne;return Promise.resolve(e).then(function(i){e=i;var s=new n.Transaction;s.setScript(Buffer.from(e.message.cadence,"utf8")),s.setGasLimit(e.message.computeLimit),s.setReferenceBlockId(e.message.refBlock?je(e.message.refBlock):null),s.setPayer(Ge(r.sansPrefix(e.accounts[e.payer].addr))),e.message.arguments.forEach(function(t){return s.addArguments(function(e){return Buffer.from(JSON.stringify(e),"utf8")}(e.arguments[t].asArgument))}),e.authorizations.map(function(t){return e.accounts[t].addr}).reduce(function(e,t){return e.find(function(e){return e===t})?e:[].concat(e,[t])},[]).forEach(function(e){return s.addAuthorizers(Ge(r.sansPrefix(e)))});var u=new n.Transaction.ProposalKey;u.setAddress(Ge(r.sansPrefix(e.accounts[e.proposer].addr))),u.setKeyId(e.accounts[e.proposer].keyId),u.setSequenceNumber(e.accounts[e.proposer].sequenceNum),s.setProposalKey(u);for(var c=0,a=Object.values(e.accounts);c<a.length;c++){var l=a[c];try{if(!l.role.payer&&null!=l.signature){var f=new n.Transaction.Signature;f.setAddress(Ge(r.sansPrefix(l.addr))),f.setKeyId(l.keyId),f.setSignature(je(l.signature)),s.addPayloadSignatures(f)}}catch(t){throw console.error("Trouble applying payload signature",{acct:l,ix:e}),t}}for(var d=0,m=Object.values(e.accounts);d<m.length;d++){var p=m[d];try{if(p.role.payer&&null!=p.signature){var g=new n.Transaction.Signature;g.setAddress(Ge(r.sansPrefix(p.addr))),g.setKeyId(p.keyId),g.setSignature(je(p.signature)),s.addEnvelopeSignatures(g)}}catch(t){throw console.error("Trouble applying envelope signature",{acct:p,ix:e}),t}}var h=new n.SendTransactionRequest;h.setTransaction(s);var v=Date.now();return Promise.resolve(o(t.node,n.AccessAPI.SendTransaction,h)).then(function(t){var n,r=Date.now(),o=Te();return o.tag=e.tag,o.transactionId=(n=t.getId_asU8(),Buffer.from(n).toString("hex")),"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("FLOW::TX",{detail:{txId:o.transactionId,delta:r-v}})),o})})}catch(e){return Promise.reject(e)}}(t,o);case J(t):return o.sendGetTransactionStatus?o.sendGetTransactionStatus(t,o):function(e,t){void 0===t&&(t={});try{var r=t.unary||Ne;return Promise.resolve(e).then(function(o){e=o;var i=new n.GetTransactionRequest;return i.setId(Buffer.from(e.transaction.id,"hex")),Promise.resolve(r(t.node,n.AccessAPI.GetTransactionResult,i)).then(function(t){var n=t.getEventsList(),r=Te();return r.tag=e.tag,r.transactionStatus={status:t.getStatus(),statusCode:t.getStatusCode(),errorMessage:t.getErrorMessage(),events:n.map(function(e){return{type:e.getType(),transactionId:(t=e.getTransactionId_asU8(),Buffer.from(t).toString("hex")),transactionIndex:e.getTransactionIndex(),eventIndex:e.getEventIndex(),payload:JSON.parse(Buffer.from(e.getPayload_asU8()).toString("utf8"))};var t})},r})})}catch(e){return Promise.reject(e)}}(t,o);case W(t):return o.sendGetTransaction?o.sendGetTransaction(t,o):function(e,t){void 0===t&&(t={});try{var r=t.unary||Ne;return Promise.resolve(e).then(function(o){e=o;var i=new n.GetTransactionRequest;return i.setId(Buffer.from(e.transaction.id,"hex")),Promise.resolve(r(t.node,n.AccessAPI.GetTransaction,i)).then(function(t){var n=Te();n.tag=e.tag;var r,o=function(e){return{address:Oe(e.getAddress_asU8()),keyId:e.getKeyId(),signature:Oe(e.getSignature_asU8())}},i=t.getTransaction();return n.transaction={script:Buffer.from(i.getScript_asU8()).toString("utf8"),args:i.getArgumentsList().map(function(e){return JSON.parse(Buffer.from(e).toString("utf8"))}),referenceBlockId:Oe(i.getReferenceBlockId_asU8()),gasLimit:i.getGasLimit(),proposalKey:(r=i.getProposalKey(),{address:Oe(r.getAddress_asU8()),keyId:r.getKeyId(),sequenceNumber:r.getSequenceNumber()}),payer:Oe(i.getPayer_asU8()),authorizers:i.getAuthorizersList().map(Oe),payloadSignatures:i.getPayloadSignaturesList().map(o),envelopeSignatures:i.getEnvelopeSignaturesList().map(o)},n})})}catch(e){return Promise.reject(e)}}(t,o);case z(t):return o.sendExecuteScript?o.sendExecuteScript(t,o):function(e,t){void 0===t&&(t={});try{return Promise.resolve(e).then(function(r){return e=r,Promise.resolve(e.block.id?function(e,t){try{var r=t.unary||Ne,o=new n.ExecuteScriptAtBlockIDRequest;o.setBlockId(Buffer.from(e.block.id,"hex"));var i=Buffer.from(e.message.cadence,"utf8");return e.message.arguments.forEach(function(t){return o.addArguments(Le(e.arguments[t].asArgument))}),o.setScript(i),Promise.resolve(r(t.node,n.AccessAPI.ExecuteScriptAtBlockID,o)).then(function(t){return _e(e,t)})}catch(e){return Promise.reject(e)}}(e,t):e.block.height?function(e,t){try{var r=t.unary||Ne,o=new n.ExecuteScriptAtBlockHeightRequest;o.setBlockHeight(Number(e.block.height));var i=Buffer.from(e.message.cadence,"utf8");return e.message.arguments.forEach(function(t){return o.addArguments(Le(e.arguments[t].asArgument))}),o.setScript(i),Promise.resolve(r(t.node,n.AccessAPI.ExecuteScriptAtBlockHeight,o)).then(function(t){return _e(e,t)})}catch(e){return Promise.reject(e)}}(e,t):function(e,t){try{var r=t.unary||Ne,o=new n.ExecuteScriptAtLatestBlockRequest,i=Buffer.from(e.message.cadence,"utf8");return e.message.arguments.forEach(function(t){return o.addArguments(Le(e.arguments[t].asArgument))}),o.setScript(i),Promise.resolve(r(t.node,n.AccessAPI.ExecuteScriptAtLatestBlock,o)).then(function(t){return _e(e,t)})}catch(e){return Promise.reject(e)}}(e,t))})}catch(e){return Promise.reject(e)}}(t,o);case V(t):return o.sendGetAccount?o.sendGetAccount(t,o):function(e,t){void 0===t&&(t={});try{return Promise.resolve(e).then(function(o){return e=o,Promise.resolve(null!==e.block.height?function(e,t){try{var o=t.unary||Ne,i=new n.GetAccountAtBlockHeightRequest;return i.setBlockHeight(Number(e.block.height)),i.setAddress(Ce(r.sansPrefix(e.account.addr))),Promise.resolve(o(t.node,n.AccessAPI.GetAccountAtBlockHeight,i)).then(function(t){return Ue(e,t)})}catch(e){return Promise.reject(e)}}(e,t):function(e,t){try{var o=t.unary||Ne,i=new n.GetAccountAtLatestBlockRequest;return i.setAddress(Ce(r.sansPrefix(e.account.addr))),Promise.resolve(o(t.node,n.AccessAPI.GetAccountAtLatestBlock,i)).then(function(t){return Ue(e,t)})}catch(e){return Promise.reject(e)}}(e,t))})}catch(e){return Promise.reject(e)}}(t,o);case Y(t):return o.sendGetEvents?o.sendGetEvents(t,o):function(t,r){void 0===r&&(r={});try{return Promise.resolve(t).then(function(o){var i=null!==(t=o).events.start,s=Array.isArray(t.events.blockIds)&&t.events.blockIds.length>0;return e.invariant(i||s,"SendGetEventsError: Unable to determine which get events request to send. Either a block height range, or block IDs must be specified."),Promise.resolve(i?function(e,t){try{var r=t.unary||Ne,o=new n.GetEventsForHeightRangeRequest;return o.setType(e.events.eventType),o.setStartHeight(Number(e.events.start)),o.setEndHeight(Number(e.events.end)),Promise.resolve(r(t.node,n.AccessAPI.GetEventsForHeightRange,o)).then(function(t){return He(e,t)})}catch(e){return Promise.reject(e)}}(t,r):function(e,t){try{var r=t.unary||Ne,o=new n.GetEventsForBlockIDsRequest;return o.setType(e.events.eventType),e.events.blockIds.forEach(function(e){return o.addBlockIds(Buffer.from(e,"hex"))}),Promise.resolve(r(t.node,n.AccessAPI.GetEventsForBlockIDs,o)).then(function(t){return He(e,t)})}catch(e){return Promise.reject(e)}}(t,r))})}catch(e){return Promise.reject(e)}}(t,o);case $(t):return o.sendGetLatestBlock?o.sendGetLatestBlock(t,o):function(e,t){void 0===t&&(t={});try{return Promise.resolve(e).then(function(r){e=r;var o=new n.GetLatestBlockRequest;return e.latestBlock&&e.latestBlock.isSealed&&(o.setIsSealed(e.latestBlock.isSealed),console.error("\n          %c@onflow/send Deprecation Notice\n          ========================\n\n          Operating upon data of the latestBlock field of the interaction object is deprecated and will no longer be recognized in future releases of @onflow/send.\n          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/send/WARNINGS.md#0001-Deprecating-latestBlock-field\n\n          =======================\n        ".replace(/\n\s+/g,"\n").trim(),"font-weight:bold;font-family:monospace;")),e.block&&e.block.isSealed&&o.setIsSealed(e.block.isSealed),Promise.resolve(Ne(t.node,n.AccessAPI.GetLatestBlock,o)).then(function(t){var n=t.getBlock(),r=n.getCollectionGuaranteesList(),o=n.getBlockSealsList(),i=n.getSignaturesList(),s=Te();return s.tag=e.tag,s.block={id:Me(n.getId_asU8()),parentId:Me(n.getParentId_asU8()),height:n.getHeight(),timestamp:n.getTimestamp(),collectionGuarantees:r.map(function(e){return{collectionId:Me(e.getCollectionId_asU8()),signatures:e.getSignaturesList()}}),blockSeals:o.map(function(e){return{blockId:Me(e.getBlockId_asU8()),executionReceiptId:Me(e.getExecutionReceiptId_asU8()),executionReceiptSignatures:e.getExecutionReceiptSignaturesList(),resultApprovalSignatures:e.getResultApprovalSignaturesList()}}),signatures:i},s})})}catch(e){return Promise.reject(e)}}(t,o);case ee(t):return o.sendGetBlock?o.sendGetBlock(t,o):function(e,t){void 0===t&&(t={});try{return Promise.resolve(e).then(function(r){var o=null!==(e=r).block.height;return Promise.resolve(null!==e.block.id?function(e,t){try{var r=t.unary||Ne,o=new n.GetBlockByIDRequest;return o.setId(Buffer.from(e.block.id,"hex")),Promise.resolve(r(t.node,n.AccessAPI.GetBlockByID,o)).then(function(t){return Ke(e,t)})}catch(e){return Promise.reject(e)}}(e,t):o?function(e,t){try{var r=t.unary||Ne,o=new n.GetBlockByHeightRequest;return o.setHeight(Number(e.block.height)),Promise.resolve(r(t.node,n.AccessAPI.GetBlockByHeight,o)).then(function(t){return Ke(e,t)})}catch(e){return Promise.reject(e)}}(e,t):function(e,t){try{var r,o=t.unary||Ne,i=new n.GetLatestBlockRequest;return null!=(r=e.block)&&r.isSealed&&i.setIsSealed(e.block.isSealed),Promise.resolve(o(t.node,n.AccessAPI.GetLatestBlock,i)).then(function(t){return Ke(e,t)})}catch(e){return Promise.reject(e)}}(e,t))})}catch(e){return Promise.reject(e)}}(t,o);case te(t):return o.sendGetBlockHeader?o.sendGetBlockHeader(t,o):function(e,t){void 0===t&&(t={});try{return Promise.resolve(e).then(function(r){var o=null!==(e=r).block.height;return Promise.resolve(null!==e.block.id?function(e,t){try{var r=t.unary||Ne,o=new n.GetBlockHeaderByIDRequest;return o.setId(Buffer.from(e.block.id,"hex")),Promise.resolve(r(t.node,n.AccessAPI.GetBlockHeaderByID,o)).then(function(t){return ze(e,t)})}catch(e){return Promise.reject(e)}}(e,t):o?function(e,t){try{var r=t.unary||Ne,o=new n.GetBlockHeaderByHeightRequest;return o.setHeight(Number(e.block.height)),Promise.resolve(r(t.node,n.AccessAPI.GetBlockHeaderByHeight,o)).then(function(t){return ze(e,t)})}catch(e){return Promise.reject(e)}}(e,t):function(e,t){try{var r,o=t.unary||Ne,i=new n.GetLatestBlockHeaderRequest;return null!=(r=e.block)&&r.isSealed&&i.setIsSealed(e.block.isSealed),Promise.resolve(o(t.node,n.AccessAPI.GetLatestBlockHeader,i)).then(function(t){return ze(e,t)})}catch(e){return Promise.reject(e)}}(e,t))})}catch(e){return Promise.reject(e)}}(t,o);case X(t):return o.sendGetBlockById?o.sendGetBlockById(t,o):function(e,t){void 0===t&&(t={});try{return Promise.resolve(e).then(function(r){e=r;var o=new n.GetBlockByIDRequest;return o.setId(Buffer.from(e.block.id,"hex")),Promise.resolve(Ne(t.node,n.AccessAPI.GetBlockByID,o)).then(function(t){var n=t.getBlock(),r=n.getCollectionGuaranteesList(),o=n.getBlockSealsList(),i=n.getSignaturesList(),s=Te();return s.tag=e.tag,s.block={id:Je(n.getId_asU8()),parentId:Je(n.getParentId_asU8()),height:n.getHeight(),timestamp:n.getTimestamp(),collectionGuarantees:r.map(function(e){return{collectionId:Je(e.getCollectionId_asU8()),signatures:e.getSignaturesList()}}),blockSeals:o.map(function(e){return{blockId:Je(e.getBlockId_asU8()),executionReceiptId:Je(e.getExecutionReceiptId_asU8()),executionReceiptSignatures:e.getExecutionReceiptSignaturesList(),resultApprovalSignatures:e.getResultApprovalSignaturesList()}}),signatures:i},s})})}catch(e){return Promise.reject(e)}}(t,o);case Z(t):return o.sendGetBlockByHeight?o.sendGetBlockByHeight(t,o):function(e,t){void 0===t&&(t={});try{return Promise.resolve(e).then(function(r){e=r;var o=new n.GetBlockByHeightRequest;return o.setHeight(Number(e.block.height)),Promise.resolve(Ne(t.node,n.AccessAPI.GetBlockByHeight,o)).then(function(t){var n=t.getBlock(),r=n.getCollectionGuaranteesList(),o=n.getBlockSealsList(),i=n.getSignaturesList(),s=Te();return s.tag=e.tag,s.block={id:We(n.getId_asU8()),parentId:We(n.getParentId_asU8()),height:n.getHeight(),timestamp:n.getTimestamp(),collectionGuarantees:r.map(function(e){return{collectionId:We(e.getCollectionId_asU8()),signatures:e.getSignaturesList()}}),blockSeals:o.map(function(e){return{blockId:We(e.getBlockId_asU8()),executionReceiptId:We(e.getExecutionReceiptId_asU8()),executionReceiptSignatures:e.getExecutionReceiptSignaturesList(),resultApprovalSignatures:e.getResultApprovalSignaturesList()}}),signatures:i},s})})}catch(e){return Promise.reject(e)}}(t,o);case ne(t):return o.sendGetCollection?o.sendGetCollection(t,o):function(e,t){void 0===t&&(t={});try{var r=t.unary||Ne;return Promise.resolve(e).then(function(o){e=o;var i=new n.GetCollectionByIDRequest;return i.setId(Buffer.from(e.collection.id,"hex")),Promise.resolve(r(t.node,n.AccessAPI.GetCollectionByID,i)).then(function(t){var n=t.getCollection(),r=Te();return r.tag=e.tag,r.collection={id:Ve(n.getId_asU8()),transactionIds:n.getTransactionIdsList().map(Ve)},r})})}catch(e){return Promise.reject(e)}}(t,o);case Q(t):return o.sendPing?o.sendPing(t,o):function(e,t){void 0===t&&(t={});try{var r=t.unary||Ne;return Promise.resolve(e).then(function(o){e=o;var i=new n.PingRequest;return Promise.resolve(r(t.node,n.AccessAPI.Ping,i)).then(function(t){var n=Te();return n.tag=e.tag,n})})}catch(e){return Promise.reject(e)}}(t,o);default:return t}})},s=o.node;return Promise.resolve(s?i(s):Promise.resolve(Ae().get("accessNode.api")).then(i))}catch(e){return Promise.reject(e)}};function $e(e){return void 0===e&&(e=null),ie([D,function(t){return t.block.isSealed=e,x(t)}])}function Xe(e){return ie([O,function(t){return t.account.addr=r.sansPrefix(e),x(t)}])}var Ze,Qe=function(e,t,n){try{try{return Promise.resolve(Number(e))}catch(e){throw new Error("Decode Number Error : "+n.join("."))}}catch(e){return Promise.reject(e)}},et=function(e){return Promise.resolve(e)},tt=function(e,t,n){try{return Promise.resolve(e.fields.reduce(function(e,r){try{return Promise.resolve(e).then(function(o){return e=o,Promise.resolve(ot(r.value,t,[].concat(n,[r.name]))).then(function(t){return e[r.name]=t,e})})}catch(e){return Promise.reject(e)}},Promise.resolve({}))).then(function(n){var r=e.id&&rt(t,e.id);return r?Promise.resolve(r(n)):n})}catch(e){return Promise.reject(e)}},nt={UInt:Qe,Int:Qe,UInt8:Qe,Int8:Qe,UInt16:Qe,Int16:Qe,UInt32:Qe,Int32:Qe,UInt64:Qe,Int64:Qe,UInt128:Qe,Int128:Qe,UInt256:Qe,Int256:Qe,Word8:Qe,Word16:Qe,Word32:Qe,Word64:Qe,UFix64:et,Fix64:et,String:et,Character:et,Bool:et,Address:et,Void:function(){return Promise.resolve(null)},Optional:function(e,t,n){return Promise.resolve(e?ot(e,t,n):null)},Reference:function(e){try{return Promise.resolve({address:e.address,type:e.type})}catch(e){return Promise.reject(e)}},Array:function(e,t,n){try{return Promise.resolve(Promise.all(e.map(function(e){return new Promise(function(r){try{return Promise.resolve(ot(e,t,[].concat(n,[e.type]))).then(r)}catch(e){return Promise.reject(e)}})})))}catch(e){return Promise.reject(e)}},Dictionary:function(e,t,n){try{return Promise.resolve(e.reduce(function(e,r){try{return Promise.resolve(e).then(function(o){return e=o,Promise.resolve(ot(r.key,t,[].concat(n,[r.key]))).then(function(o){return Promise.resolve(ot(r.value,t,[].concat(n,[r.key]))).then(function(t){return e[o]=t,e})})})}catch(e){return Promise.reject(e)}},Promise.resolve({})))}catch(e){return Promise.reject(e)}},Event:tt,Resource:tt,Struct:tt,Enum:tt,Type:function(e){try{return Promise.resolve(e.staticType)}catch(e){return Promise.reject(e)}},Path:function(e){try{return Promise.resolve({domain:e.domain,identifier:e.identifier})}catch(e){return Promise.reject(e)}},Capability:function(e){try{return Promise.resolve({path:e.path,address:e.address,borrowType:e.borrowType})}catch(e){return Promise.reject(e)}}},rt=function(e,t){var n=Object.keys(e).find(function(e){return/^\/.*\/$/.test(e)?new RegExp(e.substring(1,e.length-1)).test(t):e===t});return t&&n&&e[n]},ot=function(e,t,n){try{var r=rt(t,e.type);if(!r)throw new Error("Undefined Decoder Error: "+e.type+"@"+n.join("."));return Promise.resolve(r(e.value,t,n))}catch(e){return Promise.reject(e)}},it=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n=[]);var r=c({},nt,t);return Promise.resolve(ot(e,r,n))},st=function(e,t){void 0===t&&(t={});try{var n,r=c({},nt,t),o=e.encodedData?(n=1,Promise.resolve(it(e.encodedData,r))):e.transactionStatus?(n=1,Promise.resolve(Promise.all(e.transactionStatus.events.map(function(e){try{var t=e.eventIndex,n=e.transactionIndex,o=e.transactionId,i=e.type;return Promise.resolve(it(e.payload,r)).then(function(e){return{type:i,transactionId:o,transactionIndex:n,eventIndex:t,data:e}})}catch(e){return Promise.reject(e)}}))).then(function(t){return c({},e.transactionStatus,{events:t})})):e.transaction?(n=1,e.transaction):e.events?(n=1,Promise.resolve(Promise.all(e.events.map(function(e){try{var t=e.eventIndex,n=e.transactionIndex,o=e.transactionId,i=e.type,s=e.blockTimestamp,u=e.blockHeight,c=e.blockId;return Promise.resolve(it(e.payload,r)).then(function(e){return{blockId:c,blockHeight:u,blockTimestamp:s,type:i,transactionId:o,transactionIndex:n,eventIndex:t,data:e}})}catch(e){return Promise.reject(e)}})))):e.account?(n=1,e.account):e.block?(n=1,e.block):e.blockHeader?(n=1,e.blockHeader):e.latestBlock?(console.error("\n          %c@onflow/decode Deprecation Notice\n          ========================\n\n          Operating upon data of the latestBlock field of the response object is deprecated and will no longer be recognized in future releases of @onflow/decode.\n          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/decode/WARNINGS.md#0001-Deprecating-latestBlock-field\n\n          =======================\n        ".replace(/\n\s+/g,"\n").trim(),"font-weight:bold;font-family:monospace;"),n=1,e.latestBlock):e.transactionId?(n=1,e.transactionId):e.collection?(n=1,e.collection):void 0;return Promise.resolve(o&&o.then?o.then(function(e){return n?e:null}):n?o:null)}catch(e){return Promise.reject(e)}},ut=function(t){try{var n=function(){if(M(t)||z(t)){var n=function(){return e.invariant(at(r),"Cadence needs to be a string at this point."),Promise.resolve(Ae().where(/^0x/).then(function(e){return Object.entries(e).reduce(function(e,t){return e.replace(t[0],t[1])},r)})).then(function(e){t.message.cadence=e})},r=ue(t,"ix.cadence");e.invariant(ct(r)||at(r),"Cadence needs to be a function or a string.");var o=function(){if(ct(r))return Promise.resolve(r({})).then(function(e){r=e})}();return o&&o.then?o.then(n):n()}}();return Promise.resolve(n&&n.then?n.then(function(){return t}):t)}catch(e){return Promise.reject(e)}},ct=function(e){return"function"==typeof e},at=function(e){return"string"==typeof e},lt=function(t){try{if(M(t)||z(t))for(var n=0,r=Object.entries(t.arguments);n<r.length;n++){var o=r[n];t.arguments[o[0]].asArgument=(e.invariant(null!=typeof(i=o[1]).xform,"No type specified for argument: "+i.value),ft(i.xform)?i.xform(i.value):ft(i.xform.asArgument)?i.xform.asArgument(i.value):void e.invariant(!1,"Invalid Argument",i))}return Promise.resolve(t)}catch(e){return Promise.reject(e)}var i},ft=function(e){return"function"==typeof e},dt=function(e){return ht(kt(It(e)))},mt=function(e){return ht(kt(Pt(e)))},pt=function(e,t){return Buffer.from(e.padStart(2*t,0),"hex")},gt=(Ze=Buffer.from("FLOW-V0.0-transaction").toString("hex"),Buffer.from(Ze.padEnd(64,0),"hex")).toString("hex"),ht=function(e){return gt+e},vt=function(e){return pt(e,8)},yt=function(e){return Buffer.from(JSON.stringify(e),"utf8")},kt=function(e){return s.encode(e).toString("hex")},It=function(e){return xt(e),[(t=e.cadence,Buffer.from(t,"utf8")),e.arguments.map(yt),(n=e.refBlock,pt(n,32)),e.computeLimit,vt(e.proposalKey.address),e.proposalKey.keyId,e.proposalKey.sequenceNum,vt(e.payer),e.authorizers.map(vt)];var t,n},Pt=function(e){return Bt(e),[It(e),bt(e)]},bt=function(e){var t=St(e);return e.payloadSigs.map(function(e){return{signerIndex:t.get(e.address),keyId:e.keyId,sig:e.sig}}).sort(function(e,t){return e.signerIndex>t.signerIndex?1:e.signerIndex<t.signerIndex?-1:e.keyId>t.keyId?1:e.keyId<t.keyId?-1:void 0}).map(function(e){return[e.signerIndex,e.keyId,(t=e.sig,Buffer.from(t,"hex"))];var t})},St=function(e){var t=new Map,n=0,r=function(e){t.has(e)||(t.set(e,n),n++)};return r(e.proposalKey.address),r(e.payer),e.authorizers.forEach(r),t},xt=function(e){Nt.forEach(function(t){return Lt(e,t)}),jt.forEach(function(t){return Lt(e.proposalKey,t,"proposalKey")})},Bt=function(e){Gt.forEach(function(t){return Lt(e,t)}),e.payloadSigs.forEach(function(e,t){Ot.forEach(function(n){return Lt(e,n,"payloadSigs",t)})})},At=function(e){return"number"==typeof e},wt=function(e){return"string"==typeof e},Et=function(e){return null!==e&&"object"==typeof e},Tt=function(e){return Et(e)&&e instanceof Array},Nt=[{name:"cadence",check:wt},{name:"arguments",check:Tt},{name:"refBlock",check:wt,defaultVal:"0"},{name:"computeLimit",check:At},{name:"proposalKey",check:Et},{name:"payer",check:wt},{name:"authorizers",check:Tt}],jt=[{name:"address",check:wt},{name:"keyId",check:At},{name:"sequenceNum",check:At}],Gt=[{name:"payloadSigs",check:Tt}],Ot=[{name:"address",check:wt},{name:"keyId",check:At},{name:"sig",check:wt}],Lt=function(e,t,n,r){var o=t.name,i=t.check,s=t.defaultVal;if(null==e[o]&&null!=s&&(e[o]=s),null==e[o])throw Rt(o,n,r);if(!i(e[o]))throw Ct(o,n,r)},_t=function(e,t,n){return t?null==n?t+"."+e:t+"."+n+"."+e:e},Rt=function(e,t,n){return new Error("Missing field "+_t(e,t,n))},Ct=function(e,t,n){return new Error("Invalid field "+_t(e,t,n))},Ut=function(e){try{var t=function(){if(M(e))return function(t,n){try{var r=(o=Dt(e),i=dt(qt(e)),Promise.resolve(Promise.all(o.map(Ft(e,i)))).then(function(){var t=Ht(e),n=mt(c({},qt(e),{payloadSigs:o.map(function(t){return{address:e.accounts[t].addr,keyId:e.accounts[t].keyId,sig:e.accounts[t].signature}})}));return Promise.resolve(Promise.all(t.map(Ft(e,n)))).then(function(){})}))}catch(e){return n(e)}var o,i;return r&&r.then?r.then(void 0,n):r}(0,function(t){throw console.error("Signatures",t,{ix:e}),t})}();return Promise.resolve(t&&t.then?t.then(function(t){return e}):e)}catch(e){return Promise.reject(e)}};function Dt(e){var t=new Set(e.authorizations);return t.add(e.proposer),t.delete(e.payer),Array.from(t)}function Ht(e){var t=new Set([e.payer]);return Array.from(t)}function Ft(e,t){return function(n){try{var o=e.accounts[n];return null!=o.signature?Promise.resolve():Promise.resolve(o.signingFunction(function(e,t,n){try{return{f_type:"Signable",f_vsn:"1.0.1",message:t,addr:r.sansPrefix(e.addr),keyId:e.keyId,roles:e.role,cadence:n.message.cadence,args:n.message.arguments.map(function(e){return n.arguments[e].asArgument}),data:{},interaction:n,voucher:Kt(n)}}catch(e){throw console.error("buildSignable",e),e}}(o,t,e))).then(function(t){e.accounts[n].signature=t.signature})}catch(e){return Promise.reject(e)}}}var Kt=function(e){return{cadence:e.message.cadence,refBlock:e.message.refBlock||null,computeLimit:e.message.computeLimit,arguments:e.message.arguments.map(function(t){return e.arguments[t].asArgument}),proposalKey:{address:r.withPrefix(e.accounts[e.proposer].addr),keyId:e.accounts[e.proposer].keyId,sequenceNum:e.accounts[e.proposer].sequenceNum},payer:r.withPrefix(e.accounts[e.payer].addr),authorizers:e.authorizations.map(function(t){return r.withPrefix(e.accounts[t].addr)}).reduce(function(e,t){return e.find(function(e){return e===t})?e:[].concat(e,[t])},[]),payloadSigs:Dt(e).map(function(t){return{address:r.withPrefix(e.accounts[t].addr),keyId:e.accounts[t].keyId,sig:e.accounts[t].signature}}),envelopeSigs:Ht(e).map(function(t){return{address:r.withPrefix(e.accounts[t].addr),keyId:e.accounts[t].keyId,sig:e.accounts[t].signature}})}};function qt(e){return{cadence:e.message.cadence,refBlock:e.message.refBlock||null,computeLimit:e.message.computeLimit,arguments:e.message.arguments.map(function(t){return e.arguments[t].asArgument}),proposalKey:{address:r.sansPrefix(e.accounts[e.proposer].addr),keyId:e.accounts[e.proposer].keyId,sequenceNum:e.accounts[e.proposer].sequenceNum},payer:r.sansPrefix(e.accounts[e.payer].addr),authorizers:e.authorizations.map(function(t){return r.sansPrefix(e.accounts[t].addr)}).reduce(function(e,t){return e.find(function(e){return e===t})?e:[].concat(e,[t])},[])}}var zt="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function Mt(e,t,n){if(!e.s){if(n instanceof Jt){if(!n.s)return void(n.o=Mt.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Mt.bind(null,e,t),Mt.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var Jt=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{Mt(r,1,i(this.v))}catch(e){Mt(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?Mt(r,1,t?t(o):o):n?Mt(r,1,n(o)):Mt(r,2,o)}catch(e){Mt(r,2,e)}},r},e}();function Wt(e){return e instanceof Jt&&1&e.s}var Vt=function(e){try{var t=function(){if(M(e))return function(t,n){try{var r=Promise.resolve(Yt(e,Object.values(e.accounts))).then(function(){return Promise.resolve(Yt(e,Object.values(e.accounts))).then(function(){})})}catch(e){return n(e)}return r&&r.then?r.then(void 0,n):r}(0,function(e){throw console.error("=== SAD PANDA ===\n\n",e,"\n\n=== SAD PANDA ==="),e})}();return Promise.resolve(t&&t.then?t.then(function(t){return e}):e)}catch(e){return Promise.reject(e)}},Yt=function t(n,r,o,i){void 0===i&&(i=3);try{var s=function(){o&&(n.authorizations=n.authorizations.map(function(e){return e===o.tempId?u:e}).reduce(function(e,t){return Array.isArray(t)?[].concat(e,t):[].concat(e,[t])},[]))};e.invariant(i,"Account Resolve Recursion Limit Exceeded",{ix:n,accounts:r});var u=[],c=function(e,t,n){if("function"==typeof e[zt]){var r,o,i,s=e[zt]();if(function e(n){try{for(;!(r=s.next()).done;)if((n=t(r.value))&&n.then){if(!Wt(n))return void n.then(e,i||(i=Mt.bind(null,o=new Jt,2)));n=n.v}o?Mt(o,1,n):o=n}catch(e){Mt(o||(o=new Jt),2,e)}}(),s.return){var u=function(e){try{r.done||s.return()}catch(e){}return e};if(o&&o.then)return o.then(u,function(e){throw u(e)});u()}return o}if(!("length"in e))throw new TypeError("Object is not iterable");for(var c=[],a=0;a<e.length;a++)c.push(e[a]);return function(e,t,n){var r,o,i=-1;return function n(s){try{for(;++i<e.length;)if((s=t(i))&&s.then){if(!Wt(s))return void s.then(n,o||(o=Mt.bind(null,r=new Jt,2)));s=s.v}r?Mt(r,1,s):r=s}catch(e){Mt(r||(r=new Jt),2,e)}}(),r}(c,function(e){return t(c[e])})}(r,function(e){function r(){function r(){s.tempId!=e.tempId&&delete n.accounts[s.tempId]}var c=function(){if(Array.isArray(e))return Promise.resolve(t(n,e,s,i-1)).then(function(){});null!=e.addr&&null!=e.keyId&&(e.tempId=e.addr+"-"+e.keyId),n.accounts[e.tempId]=n.accounts[e.tempId]||e,n.accounts[e.tempId].role.proposer=n.accounts[e.tempId].role.proposer||e.role.proposer,n.accounts[e.tempId].role.payer=n.accounts[e.tempId].role.payer||e.role.payer,n.accounts[e.tempId].role.authorizer=n.accounts[e.tempId].role.authorizer||e.role.authorizer,n.accounts[e.tempId].role.proposer&&n.proposer===s.tempId&&(n.proposer=e.tempId),n.accounts[e.tempId].role.payer&&n.payer===s.tempId&&(n.payer=e.tempId),n.accounts[e.tempId].role.authorizer&&(o?u=Array.from(new Set([].concat(u,[e.tempId]))):n.authorizations=n.authorizations.map(function(t){return t===s.tempId?e.tempId:t}))}();return c&&c.then?c.then(r):r()}var s=o||e,c=function(){if($t(e.resolve))return Promise.resolve(e.resolve(e,function(e,t){try{return{f_type:"PreSignable",f_vsn:"1.0.1",roles:e.role,cadence:t.message.cadence,args:t.message.arguments.map(function(e){return t.arguments[e].asArgument}),data:{},interaction:t,voucher:Kt(t)}}catch(e){throw console.error("buildPreSignable",e),e}}(e,n))).then(function(t){e=t})}();return c&&c.then?c.then(r):r()});return Promise.resolve(c&&c.then?c.then(s):s())}catch(e){return Promise.reject(e)}},$t=function(e){return"function"==typeof e},Xt=function(e){try{var t=ue(e,"ix.validators",[]);return Promise.resolve(ie(e,t.map(function(e){return function(t){return e(t,{Ok:x,Bad:B})}})))}catch(e){return Promise.reject(e)}},Zt=function(e){try{for(var t=0,n=Object.keys(e.accounts);t<n.length;t++){var o=n[t];e.accounts[o].addr=r.sansPrefix(e.accounts[o].addr)}return Promise.resolve(e)}catch(e){return Promise.reject(e)}},Qt=function(e){return e},en=function(e,t){return void 0===t&&(t=Qt),function(n){try{var r=function(e){return["\nAccounts:",{proposer:e.proposer,authorizations:e.authorizations,payer:e.payer},"\n\nDetails:",e.accounts].filter(Boolean)},o=function(){var t;(t=console).log.apply(t,["debug["+e+"] ---\n"].concat([].slice.call(arguments),["\n\n\n---"]))};return Promise.resolve(Ae.get("debug."+e)).then(function(e){var i=function(){if(e)return Promise.resolve(t(n,o,r)).then(function(){})}();return i&&i.then?i.then(function(){return n}):n})}catch(e){return Promise.reject(e)}}},tn=ie([ut,en("cadence",function(e,t){return t(e.message.cadence)}),lt,en("arguments",function(e,t){return t(e.message.arguments,e.message)}),Vt,en("accounts",function(e,t,n){return t.apply(void 0,n(e))}),function(e){try{var t=function(){if(M(e)&&null==e.message.refBlock)return Promise.resolve(Ae.first(["sdk.transport","sdk.send"],Ye)).then(function(t){return Promise.resolve(t(le([$e()])).then(st)).then(function(t){e.message.refBlock=t.id})})}();return Promise.resolve(t&&t.then?t.then(function(){return e}):e)}catch(e){return Promise.reject(e)}},function(t){try{var n=function(){if(M(t))return Promise.resolve(Ae.first(["sdk.transport","sdk.send"],Ye)).then(function(n){var r=Object.values(t.accounts).find(function(e){return e.role.proposer});e.invariant(r,"Transactions require a proposer");var o=function(){if(null==r.sequenceNum)return Promise.resolve(le([Xe(r.addr)])).then(function(e){return Promise.resolve(n(e).then(st).then(function(e){return e.keys}).then(function(e){return e.find(function(e){return e.index===r.keyId})}).then(function(e){return e.sequenceNumber})).then(function(e){t.accounts[r.tempId].sequenceNum=e})})}();if(o&&o.then)return o.then(function(){})})}();return Promise.resolve(n&&n.then?n.then(function(){return t}):t)}catch(e){return Promise.reject(e)}},Ut,en("signatures",function(e,t,n){return t.apply(void 0,n(e))}),Zt,Xt,en("resolved",function(e,t){return t(e)})]),nn=function(e,t){void 0===e&&(e=[]),void 0===t&&(t={});try{return Promise.resolve(Ae.first(["sdk.transport","sdk.send"],t.send||Ye)).then(function(n){return Promise.resolve(Ae.first(["sdk.resolve"],t.resolve||tn)).then(function(r){return Array.isArray(e)&&(e=ie(y(),e)),Promise.resolve(r(e)).then(function(e){return n(e,t)})})})}catch(e){return Promise.reject(e)}},rn=function(e){var t,n;function r(t){var n,r=("\n        Encode Message From Signable Error: Unable to determine message encoding for signer addresss: "+t+". \n        Please ensure the address: "+t+" is intended to sign the given transaction as specified by the transaction signable.\n      ").trim();return(n=e.call(this,r)||this).name="Unable To Determine Message Encoding For Signer Addresss",n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n),r}(m(Error));function on(e){return ae("ix.validators",function(t){return Array.isArray(t)?t.push(e):[e]})}function sn(e){return ie([function(t){return t.message.refBlock=e,x(t)}])}var un=[],cn=function(e){return e},an=["tempId"];function ln(e){return["SIGNATURE",e.addr,e.keyId].join(".")}function fn(e){return void 0===e&&(e={}),function(t){var n=c({},t,e,{signingFunction:e.signingFunction||t.signingFunction||function(e){return{addr:n.addr,keyId:n.keyId,signature:ln(n)}}});return n}}var dn={proposer:!1,authorizer:!1,payer:!1},mn={__proto__:null,mockSend:function(t){return void 0===t&&(t=cn),function(n){try{return Promise.resolve(n).then(function(r){switch(n=r,!0){case V(n):return function(t,n){return void 0===n&&(n=5),e.invariant(t.account,"mockAccountResponse(ix) -- ix.account is missing",t),e.invariant(t.account.addr,"mockAccountResponse(ix) -- ix.account.addr is missing",t),{account:{addr:t.account.addr,keys:Array.from({length:n},function(e,t){return{index:t,sequenceNumber:42}})}}}(n);case ee(n):return{tag:"GET_BLOCK",block:{id:"32"}};default:return t(n)}})}catch(e){return Promise.reject(e)}}},authzFn:fn,authzResolve:function(e){return void 0===e&&(e={}),function(t){return c({},t,{tempId:e.tempId||"WITH_RESOLVE",resolve:fn(function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,an))})}},authzResolveMany:function(e){return void 0===e&&(e={}),function(t){return c({},t,{tempId:e.tempId||"AUTHZ_RESOLVE_MANY",resolve:function(){return[e.proposer&&fn(e.proposer)({role:c({},dn,{proposer:!0})})].concat(e.authorizations.map(fn).map(function(e){return e({role:c({},dn,{authorizer:!0})})}),[e.payer&&fn(e.payer)({role:c({},dn,{payer:!0})})]).filter(Boolean)}})}},sig:ln,idof:function(e){return e.addr+"-"+e.keyId},run:function(e){return void 0===e&&(e=[]),le([sn("123")].concat(e)).then(tn)}};Object.defineProperty(exports,"cadence",{enumerable:!0,get:function(){return u.template}}),Object.defineProperty(exports,"cdc",{enumerable:!0,get:function(){return u.template}}),exports.TestUtils=mn,exports.VERSION="0.0.54",exports.account=function(e,t){return nn([Xe(e)],t).then(st)},exports.arg=function(e,t){return{value:e,xform:t}},exports.args=function(e){return void 0===e&&(e=[]),ie(e.map(E))},exports.atBlockHeight=function(e){return ie([function(t){return t.block.height=e,t},on(function(e){if("boolean"==typeof e.block.isSealed)throw new Error("Unable to specify both block height and isSealed.");if(e.block.id)throw new Error("Unable to specify both block height and block id.");return e})])},exports.atBlockId=function(e){return ie([function(t){return t.block.id=e,x(t)},on(function(e,t){var n=t.Ok,r=t.Bad;return V(e)?r(e,"Unable to specify a block id with a Get Account interaction."):"boolean"==typeof e.block.isSealed?r(e,"Unable to specify both block id and isSealed."):e.block.height?r(e,"Unable to specify both block id and block height."):n(e)})])},exports.authorization=function(e,t,n,r){return{addr:e,signingFunction:t,keyId:n,sequenceNum:r}},exports.authorizations=function(e){return void 0===e&&(e=[]),ie(e.map(function(e){return w(e,{role:"authorizer"})}))},exports.build=le,exports.config=Ae,exports.createSignableVoucher=Kt,exports.decode=function(e){try{return Promise.resolve(Ae().where(/^decoder\./)).then(function(t){var n=Object.entries(t).map(function(e){var t=e[0],n=e[1];return[t="/"+t.replace(/^decoder\./,"")+"$/",n]});return st(e,Object.fromEntries(n))})}catch(e){return Promise.reject(e)}},exports.destroy=function(e){return function(t){return delete t.assigns[e],x(t)}},exports.encodeMessageFromSignable=function(e,t){var n,o,i=(n=e.voucher,(o=new Set(n.authorizers)).add(n.proposalKey.address),o.delete(n.payer),Array.from(o).map(r.withPrefix)),s=function(e){var t=new Set([e.payer]);return Array.from(t).map(r.withPrefix)}(e.voucher),u=i.includes(r.withPrefix(t)),a=s.includes(r.withPrefix(t));if(!u&&!a)throw new rn(t);var l={cadence:e.voucher.cadence,refBlock:e.voucher.refBlock,computeLimit:e.voucher.computeLimit,arguments:e.voucher.arguments,proposalKey:c({},e.voucher.proposalKey,{address:r.sansPrefix(e.voucher.proposalKey.address)}),payer:r.sansPrefix(e.voucher.payer),authorizers:e.voucher.authorizers.map(r.sansPrefix),payloadSigs:e.voucher.payloadSigs.map(function(e){return c({},e,{address:r.sansPrefix(e.address)})})};return u?dt(l):mt(l)},exports.get=ue,exports.getAccount=Xe,exports.getBlock=$e,exports.getBlockByHeight=function(e){return console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n\n    The getBlockByHeight builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0003-deprecate-get-block-by-height-builder\n\n    ============================\n  ","font-weight:bold;font-family:monospace;"),ie([C,function(t){return t.block.height=e,x(t)}])},exports.getBlockById=function(e){return console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n\n    The getBlockById builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0004-deprecate-get-block-by-id-builder\n\n    ============================\n  ","font-weight:bold;font-family:monospace;"),ie([R,function(t){return t.block.ids=[e],x(t)}])},exports.getBlockHeader=function(e){return void 0===e&&(e=null),ie([H,function(t){return t.block.isSealed=e,x(t)}])},exports.getCollection=function(e){return void 0===e&&(e=null),ie([F,function(t){return t.collection.id=e,t}])},exports.getEvents=function(e,t,n){return void 0===t&&void 0===n||console.warn("\n      %cFCL/SDK Deprecation Notice\n      ============================\n  \n      Passing a start and end into getEnvents has been deprecated and will not be supported in future versions of the Flow JS-SDK/FCL.\n      You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0005-deprecate-start-end-get-events-builder\n  \n      ============================\n    ","font-weight:bold;font-family:monospace;"),ie([L,function(r){return r.events.eventType=e,r.events.start=t,r.events.end=n,x(r)}])},exports.getEventsAtBlockHeightRange=function(e,t,n){return ie([L,function(r){return r.events.eventType=e,r.events.start=t,r.events.end=n,x(r)}])},exports.getEventsAtBlockIds=function(e,t){return void 0===t&&(t=[]),ie([L,function(n){return n.events.eventType=e,n.events.blockIds=t,x(n)}])},exports.getLatestBlock=function(e){return void 0===e&&(e=!1),console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n\n    The getLatestBlock builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0006-deprecate-get-latest-block-builder\n\n    ============================\n  ","font-weight:bold;font-family:monospace;"),ie([_,function(t){return t.block.isSealed=e,x(t)}])},exports.getTransaction=function(e){return ie([G,function(t){return t.transaction.id=e,x(t)}])},exports.getTransactionStatus=function(e){return ie([j,function(t){return t.transaction.id=e,x(t)}])},exports.interaction=y,exports.invariant=function e(){var t=[].slice.call(arguments);if(t.length>1){var n=t,r=n[0],o=n[1];return e(function(e,t){var n=t.Bad;return r?(0,t.Ok)(e):n(e,o)})}var i=t[0];return function(e){return i(e,{Ok:x,Bad:B})}},exports.isBad=re,exports.isGetAccount=V,exports.isGetBlock=ee,exports.isGetBlockByHeight=Z,exports.isGetBlockById=X,exports.isGetBlockHeader=te,exports.isGetCollection=ne,exports.isGetEvents=Y,exports.isGetLatestBlock=$,exports.isGetTransaction=W,exports.isGetTransactionStatus=J,exports.isOk=function(e){return"OK"===e.status},exports.isPing=Q,exports.isScript=z,exports.isTransaction=M,exports.isUnknown=q,exports.latestBlock=function(){var e=[].slice.call(arguments),t=e[1]||("object"==typeof e[0]?e[0]:void 0),n="boolean"==typeof e[0]?e[0]:void 0;return"object"==typeof e[0]&&console.warn("\n      %cFCL/SDK Deprecation Notice\n      ============================\n  \n      Passing options as the first arguement to the latestBlock function has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n      You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0007-deprecate-opts-first-arg-latest-block\n  \n      ============================\n    ","font-weight:bold;font-family:monospace;"),nn([$e(n)],t).then(st)},exports.limit=function(e){return function(t){return t.message.computeLimit=e,t}},exports.param=function(e){return t={name:"param",transitionsPath:"https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params"},void console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n    The "+t.name+" builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: "+t.transitionsPath+"\n    ============================\n  ","font-weight:bold;font-family:monospace;");var t},exports.params=function(e){return t={name:"params",transitionsPath:"https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params"},void console.error("\n    %cFCL/SDK Deprecation Notice\n    ============================\n    The "+t.name+" builder has been removed from the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: "+t.transitionsPath+"\n    ============================\n  ","font-weight:bold;font-family:monospace;");var t},exports.payer=function(e){try{return Promise.resolve(w(e,{role:"payer"}))}catch(e){return Promise.reject(e)}},exports.ping=function(){return U},exports.pipe=ie,exports.proposer=function(e){try{return Promise.resolve(w(e,{role:"proposer"}))}catch(e){return Promise.reject(e)}},exports.put=ce,exports.ref=sn,exports.resolve=tn,exports.resolveAccounts=Vt,exports.resolveArguments=lt,exports.resolveCadence=ut,exports.resolveFinalNormalization=Zt,exports.resolveProposerSequenceNumber=function(e){var t=e.node;return function(e){try{return M(e)?e.accounts[e.proposer].sequenceNum?Promise.resolve(x(e)):Promise.resolve(le([Xe(e.accounts[e.proposer].addr)])).then(function(n){return Promise.resolve(Ye(n,{node:t})).then(function(t){return Promise.resolve(st(t)).then(function(t){return e.accounts[e.proposer].sequenceNum=t.keys[e.accounts[e.proposer].keyId].sequenceNumber,x(e)})})}):Promise.resolve(x(e))}catch(e){return Promise.reject(e)}}},exports.resolveRefBlockId=function(e){return function(t){try{return M(t)?t.message.refBlock?Promise.resolve(x(t)):Promise.resolve(function(e){try{var t;return Promise.resolve(ie(y(),[$e()])).then(function(n){return t=n,Promise.resolve(Ye(t,e)).then(function(e){return t=e,Promise.resolve(st(t)).then(function(e){return(t=e).id})})})}catch(e){return Promise.reject(e)}}(e)).then(function(e){return t.message.refBlock=e,x(t)}):Promise.resolve(x(t))}catch(e){return Promise.reject(e)}}},exports.resolveSignatures=Ut,exports.resolveValidators=Xt,exports.script=function(){return ie([T,ce("ix.cadence",u.template.apply(void 0,[].slice.call(arguments)))])},exports.send=nn,exports.transaction=function(){return ie([N,ce("ix.cadence",u.template.apply(void 0,[].slice.call(arguments))),function(e){return e.message.computeLimit=e.message.computeLimit||10,e.message.refBlock=e.message.refBlock||null,e.authorizations=e.authorizations||un,x(e)}])},exports.update=ae,exports.validator=on,exports.why=function(e){return e.reason};


}).call(this)}).call(this,require("buffer").Buffer)
},{"@improbable-eng/grpc-web":2,"@improbable-eng/grpc-web-node-http-transport":1,"@onflow/protobuf":3,"@onflow/rlp":4,"@onflow/util-actor":7,"@onflow/util-address":8,"@onflow/util-invariant":9,"@onflow/util-template":10,"buffer":15}],6:[function(require,module,exports){
var t=function(t,e,n){return{label:t,asArgument:e,asInjection:n}},e=function(t){return Array.isArray(t)},n=function(t){return"object"==typeof t},r=function(t){return null==t},u=function(t){return"number"==typeof t},o=function(t){return Number.isInteger(t)},i=function(t){return"string"==typeof t},f=function(t){throw new Error("Type Error: "+t)},c=t("Identity",function(t){return t},function(t){return t}),p=t("UInt",function(t){if(u(t)&&o(t))return{type:"UInt",value:t.toString()};f("Expected Positive Integer for type Unsigned Int")},function(t){return t}),a=t("Int",function(t){if(u(t)&&o(t))return{type:"Int",value:t.toString()};f("Expected Integer for type Int")},function(t){return t}),s=t("UInt8",function(t){if(u(t)&&o(t))return{type:"UInt8",value:t.toString()};f("Expected integer for UInt8")},function(t){return t}),l=t("Int8",function(t){if(u(t)&&o(t))return{type:"Int8",value:t.toString()};f("Expected positive integer for Int8")},function(t){return t}),d=t("UInt16",function(t){if(u(t)&&o(t))return{type:"UInt16",value:t.toString()};f("Expected integer for UInt16")},function(t){return t}),v=t("Int16",function(t){if(u(t)&&o(t))return{type:"Int16",value:t.toString()};f("Expected positive integer for Int16")},function(t){return t}),x=t("UInt32",function(t){if(u(t)&&o(t))return{type:"UInt32",value:t.toString()};f("Expected integer for UInt32")},function(t){return t}),y=t("Int32",function(t){if(u(t)&&o(t))return{type:"Int32",value:t.toString()};f("Expected positive integer for Int32")},function(t){return t}),g=t("UInt64",function(t){if(u(t)&&o(t))return{type:"UInt64",value:t.toString()};f("Expected integer for UInt64")},function(t){return t}),I=t("Int64",function(t){if(u(t)&&o(t))return{type:"Int64",value:t.toString()};f("Expected positive integer for Int64")},function(t){return t}),m=t("UInt128",function(t){if(u(t)&&o(t))return{type:"UInt128",value:t.toString()};f("Expected integer for UInt128")},function(t){return t}),E=t("Int128",function(t){if(u(t)&&o(t))return{type:"Int128",value:t.toString()};f("Expected positive integer for Int128")},function(t){return t}),U=t("UInt256",function(t){if(u(t)&&o(t))return{type:"UInt256",value:t.toString()};f("Expected integer for UInt256")},function(t){return t}),S=t("Int256",function(t){if(u(t)&&o(t))return{type:"Int256",value:t.toString()};f("Expected integer for Int256")},function(t){return t}),A=t("Word8",function(t){if(u(t)&&o(t))return{type:"Word8",value:t.toString()};f("Expected positive number for Word8")},function(t){return t}),b=t("Word16",function(t){if(u(t)&&o(t))return{type:"Word16",value:t.toString()};f("Expected positive number for Word16")},function(t){return t}),W=t("Word32",function(t){if(u(t)&&o(t))return{type:"Word32",value:t.toString()};f("Expected positive number for Word32")},function(t){return t}),F=t("Word64",function(t){if(u(t)&&o(t))return{type:"Word64",value:t.toString()};f("Expected positive number for Word64")},function(t){return t}),k=function(){console.error("\n          %c@onflow/types Deprecation Notice\n          ========================\n\n          Passing in Numbers as values for Fix64 and UFix64 types is deprecated and will cease to work in future releases of @onflow/types.\n          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0001-[U]Fix64-as-Number\n\n          =======================\n        ".replace(/\n\s+/g,"\n").trim(),"font-weight:bold;font-family:monospace;")},h=t("UFix64",function(t){return i(t)?{type:"UFix64",value:t}:u(t)?(k(),{type:"UFix64",value:t.toString()}):void f("Expected String for UFix64")},function(t){return t}),w=t("Fix64",function(t){return i(t)?{type:"Fix64",value:t}:u(t)?(k(),{type:"Fix64",value:t.toString()}):void f("Expected String for Fix64")},function(t){return t}),R=t("String",function(t){if(i(t))return{type:"String",value:t};f("Expected String for type String")},function(t){return t}),j=t("Character",function(t){if(i(t))return{type:"Character",value:t};f("Expected Character for type Character")},function(t){return t}),O=t("Bool",function(t){if("boolean"==typeof t)return{type:"Bool",value:t};f("Expected Boolean for type Bool")},function(t){return t}),N=t("Address",function(t){if(i(t))return{type:"Address",value:t};f("Expected Address for type Address")},function(t){return t}),B=t("Void",function(t){if(!t||r(t))return{type:"Void"};f("Expected Void for type Void")},function(t){return t}),C=t("Reference",function(t){if(n(t))return{type:"Reference",value:t};f("Expected Object for type Reference")},function(t){return t}),D=function(n){return void 0===n&&(n=[]),t("Array",function(t){return{type:"Array",value:e(n)?n.map(function(e,n){return e.asArgument(t[n])}):t.map(function(t){return n.asArgument(t)})}},function(t){return t})};exports.Address=N,exports.Array=D,exports.Bool=O,exports.Character=j,exports.Dictionary=function(r){return void 0===r&&(r=[]),t("Dictionary",function(t){if(n(t))return{type:"Dictionary",value:e(r)?r.map(function(e,n){return{key:e.key.asArgument(t[n].key),value:e.value.asArgument(t[n].value)}}):e(t)?t.map(function(t){return{key:r.key.asArgument(t.key),value:r.value.asArgument(t.value)}}):[{key:r.key.asArgument(t.key),value:r.value.asArgument(t.value)}]};f("Expected Object for type Dictionary")},function(t){return t})},exports.Event=function(r,u){return void 0===u&&(u=[]),t("Event",function(t){if(n(t))return{type:"Event",value:{id:r,fields:e(u)?u.map(function(e,n){return{name:t.fields[n].name,value:e.value.asArgument(t.fields[n].value)}}):t.fields.map(function(t){return{name:t.name,value:u.value.asArgument(t.value)}})}};f("Expected Object for type Event")},function(t){return t})},exports.Fix64=w,exports.Identity=c,exports.Int=a,exports.Int128=E,exports.Int16=v,exports.Int256=S,exports.Int32=y,exports.Int64=I,exports.Int8=l,exports.Optional=function(e){return t("Optional",function(t){return{type:"Optional",value:r(t)?null:e.asArgument(t)}},function(t){return t})},exports.Reference=C,exports.Resource=function(r,u){return void 0===u&&(u=[]),t("Resource",function(t){if(n(t))return{type:"Resource",value:{id:r,fields:e(u)?u.map(function(e,n){return{name:t.fields[n].name,value:e.value.asArgument(t.fields[n].value)}}):t.fields.map(function(t){return{name:t.name,value:u.value.asArgument(t.value)}})}};f("Expected Object for type Resource")},function(t){return t})},exports.String=R,exports.Struct=function(r,u){return void 0===u&&(u=[]),t("Struct",function(t){if(n(t))return{type:"Struct",value:{id:r,fields:e(u)?u.map(function(e,n){return{name:t.fields[n].name,value:e.value.asArgument(t.fields[n].value)}}):t.fields.map(function(t){return{name:t.name,value:u.value.asArgument(t.value)}})}};f("Expected Object for type Struct")},function(t){return t})},exports.UFix64=h,exports.UInt=p,exports.UInt128=m,exports.UInt16=d,exports.UInt256=U,exports.UInt32=x,exports.UInt64=g,exports.UInt8=s,exports.Void=B,exports.Word16=b,exports.Word32=W,exports.Word64=F,exports.Word8=A,exports._Array=D;


},{}],7:[function(require,module,exports){
(function (global){(function (){
var n,e=(n=require("queue-microtask"))&&"object"==typeof n&&"default"in n?n.default:n;function t(){return(t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e,t){if(!n.s){if(t instanceof i){if(!t.s)return void(t.o=o.bind(null,n,e));1&e&&(e=t.s),t=t.v}if(t&&t.then)return void t.then(o.bind(null,n,e),o.bind(null,n,2));n.s=e,n.v=t;var r=n.o;r&&r(n)}}var i=function(){function n(){}return n.prototype.then=function(e,t){var r=new n,i=this.s;if(i){var u=1&i?e:t;if(u){try{o(r,1,u(this.v))}catch(n){o(r,2,n)}return r}return this}return this.o=function(n){try{var i=n.v;1&n.s?o(r,1,e?e(i):i):t?o(r,1,t(i)):o(r,2,i)}catch(n){o(r,2,n)}},r},n}();function u(n){return n instanceof i&&1&n.s}function c(n,e,t){for(var r;;){var c=n();if(u(c)&&(c=c.v),!c)return f;if(c.then){r=0;break}var f=t();if(f&&f.then){if(!u(f)){r=1;break}f=f.s}if(e){var s=e();if(s&&s.then&&!u(s)){r=2;break}}}var a=new i,l=o.bind(null,a,2);return(0===r?c.then(h):1===r?f.then(v):s.then(d)).then(void 0,l),a;function v(r){f=r;do{if(e&&(s=e())&&s.then&&!u(s))return void s.then(d).then(void 0,l);if(!(c=n())||u(c)&&!c.v)return void o(a,1,f);if(c.then)return void c.then(h).then(void 0,l);u(f=t())&&(f=f.v)}while(!f||!f.then);f.then(v).then(void 0,l)}function h(n){n?(f=t())&&f.then?f.then(v).then(void 0,l):v(f):o(a,1,f)}function d(){(c=n())?c.then?c.then(h).then(void 0,l):h(c):o(a,1,f)}}var f="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||"object"==typeof window&&window.window===window&&window;f.FCL_REGISTRY=null==f.FCL_REGISTRY?{}:f.FCL_REGISTRY;var s=0,a=function(n,e,t,r){return void 0===r&&(r={}),new Promise(function(o,i){var u=r.expectReply||!1,c=null!=r.timeout?r.timeout:5e3;u&&c&&setTimeout(function(){return i(new Error("Timeout: "+c+"ms passed without a response."))},c);var s={to:n,from:r.from,tag:e,data:t,timeout:c,reply:o,reject:i};try{f.FCL_REGISTRY[n].mailbox.deliver(s),u||o(!0)}catch(n){console.error("FCL.Actor -- Could Not Deliver Message",s,n)}})},l=function(n){delete f.FCL_REGISTRY[n]},v=function(n,o){if(void 0===o&&(o=null),null==o&&(o=++s),null!=f.FCL_REGISTRY[o])return o;var i,u;f.FCL_REGISTRY[o]={addr:o,mailbox:(u=[],{deliver:function(n){try{return u.push(n),i&&(i(u.shift()),i=void 0),Promise.resolve()}catch(n){return Promise.reject(n)}},receive:function(){return new Promise(function(n){var e=u.shift();if(e)return n(e);i=n})}}),subs:new Set,kvs:{}};var v,h={self:function(){return o},receive:function(){return f.FCL_REGISTRY[o].mailbox.receive()},send:function(n,e,t,r){return void 0===r&&(r={}),r.from=o,a(n,e,t,r)},sendSelf:function(n,e,t){f.FCL_REGISTRY[o]&&a(o,n,e,t)},broadcast:function(n,e,t){void 0===t&&(t={}),t.from=o;for(var i,u=function(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return r(n,void 0);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,void 0):void 0}}(n))){t&&(n=t);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}(f.FCL_REGISTRY[o].subs);!(i=u()).done;)a(i.value,n,e,t)},subscribe:function(n){return null!=n&&f.FCL_REGISTRY[o].subs.add(n)},unsubscribe:function(n){return null!=n&&f.FCL_REGISTRY[o].subs.delete(n)},subscriberCount:function(){return f.FCL_REGISTRY[o].subs.size},hasSubs:function(){return!!f.FCL_REGISTRY[o].subs.size},put:function(n,e){null!=n&&(f.FCL_REGISTRY[o].kvs[n]=e)},get:function(n,e){var t=f.FCL_REGISTRY[o].kvs[n];return null==t?e:t},delete:function(n){delete f.FCL_REGISTRY[o].kvs[n]},update:function(n,e){null!=n&&(f.FCL_REGISTRY[o].kvs[n]=e(f.FCL_REGISTRY[o].kvs[n]))},keys:function(){return Object.keys(f.FCL_REGISTRY[o].kvs)},all:function(){return f.FCL_REGISTRY[o].kvs},where:function(n){return Object.keys(f.FCL_REGISTRY[o].kvs).reduce(function(e,r){var i;return n.test(r)?t({},e,((i={})[r]=f.FCL_REGISTRY[o].kvs[r],i)):e},{})},merge:function(n){void 0===n&&(n={}),Object.keys(n).forEach(function(e){return f.FCL_REGISTRY[o].kvs[e]=n[e]})}};return"object"==typeof n&&(void 0===(v=n)&&(v={}),n=function(n){try{var e=function(){var e=c(function(){return 1},void 0,function(){return Promise.resolve(n.receive()).then(function(e){var t=function(t,r){try{var o=function(t,r){try{var o=function(){function t(){return Promise.resolve(v[e.tag](n,e,e.data||{})).then(function(){})}var r=function(){if("EXIT"===e.tag){var t=function(){if("function"==typeof v.TERMINATE)return Promise.resolve(v.TERMINATE(n,e,e.data||{})).then(function(){})}();if(t&&t.then)return t.then(function(){})}}();return r&&r.then?r.then(t):t()}()}catch(n){return r(n)}return o&&o.then?o.then(void 0,r):o}(0,function(t){console.error(n.self()+" Error",e,t)})}catch(n){return}return o&&o.then?o.then(r.bind(null,!1),r.bind(null,!0)):void 0}(0,function(n,e){});if(t&&t.then)return t.then(function(){})})});return e&&e.then?e.then(function(){}):void 0},t=function(){if("function"==typeof v.INIT)return Promise.resolve(v.INIT(n)).then(function(){})}();return Promise.resolve(t&&t.then?t.then(e):e())}catch(n){return Promise.reject(n)}}),e(function(){try{return Promise.resolve(n(h)).then(function(){l(o)})}catch(n){return Promise.reject(n)}}),o};exports.EXIT="EXIT",exports.INIT="INIT",exports.SNAPSHOT="SNAPSHOT",exports.SUBSCRIBE="SUBSCRIBE",exports.TERMINATE="TERMINATE",exports.UNSUBSCRIBE="UNSUBSCRIBE",exports.UPDATED="UPDATED",exports.kill=l,exports.send=a,exports.snapshoter=function(n,e){return e(n),a(n,"SNAPSHOT",null,{expectReply:!0,timeout:0})},exports.spawn=v,exports.subscriber=function(n,e,t){e(n);var r=v(function(e){try{var r;return e.send(n,"SUBSCRIBE"),Promise.resolve(c(function(){return!r&&1},void 0,function(){return Promise.resolve(e.receive()).then(function(o){if("@EXIT"===o.tag)return e.send(n,"UNSUBSCRIBE"),void(r=1);t(o.data)})}))}catch(n){return Promise.reject(n)}});return function(){return a(r,"@EXIT")}};


}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"queue-microtask":12}],8:[function(require,module,exports){
function n(n){return null==n?null:n.replace(/^0x/,"").replace(/^Fx/,"")}function r(r){return null==r?null:"0x"+n(r)}exports.display=function(n){return r(n)},exports.sansPrefix=n,exports.withPrefix=r;


},{}],9:[function(require,module,exports){
exports.invariant=function(n,t){if(!n){var r,a=new Error("INVARIANT "+t);throw a.stack=a.stack.split("\n").filter(function(n){return!/at invariant/.test(n)}).join("\n"),(r=console).error.apply(r,["\n\n---\n\n",a,"\n\n"].concat([].slice.call(arguments,2),["\n\n---\n\n"])),a}};


},{}],10:[function(require,module,exports){
function n(t,e,o){if(void 0===t&&(t=[]),void 0===e&&(e=[]),void 0===o&&(o=[]),!t.length&&!e.length)return o;if(!t.length)return o;if(!e.length)return[].concat(o,[t[0]]);var r=t[0],i=t.slice(1),a=e[0],u=e.slice(1);return void 0!==r&&o.push(r),void 0!==a&&o.push(a),n(i,u,o)}function t(n){return function(e){return"function"==typeof e?(console.warn("\n        %cFCL/SDK Deprecation Notice\n        ============================\n\n        Interopolation of functions into template literals will not be a thing in future versions of the Flow-JS-SDK or FCL.\n        You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params\n\n        ============================\n      ","font-weight:bold;font-family:monospace;"),t(n)(e(n))):String(e)}}exports.interleave=n,exports.template=function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];return"string"==typeof e?function(){return e}:Array.isArray(e)?function(o){return n(e,r.map(t(o))).join("").trim()}:e};


},{}],11:[function(require,module,exports){
var r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=r.length;exports.uid=function(){for(var t="",a=32;a--;)t+=r[Math.random()*n|0];return t};


},{}],12:[function(require,module,exports){
let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))

},{}],13:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],14:[function(require,module,exports){

},{}],15:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":13,"buffer":15,"ieee754":19}],16:[function(require,module,exports){
module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}

},{}],17:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],18:[function(require,module,exports){
var http = require('http')
var url = require('url')

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}

},{"http":27,"url":47}],19:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],20:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],21:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],22:[function(require,module,exports){
(function (global){(function (){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],23:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],24:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],25:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":23,"./encode":24}],26:[function(require,module,exports){
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":15}],27:[function(require,module,exports){
(function (global){(function (){
var ClientRequest = require('./lib/request')
var response = require('./lib/response')
var extend = require('xtend')
var statusCodes = require('builtin-status-codes')
var url = require('url')

var http = exports

http.request = function (opts, cb) {
	if (typeof opts === 'string')
		opts = url.parse(opts)
	else
		opts = extend(opts)

	// Normally, the page is loaded from http or https, so not specifying a protocol
	// will result in a (valid) protocol-relative url. However, this won't work if
	// the protocol is something else, like 'file:'
	var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''

	var protocol = opts.protocol || defaultProtocol
	var host = opts.hostname || opts.host
	var port = opts.port
	var path = opts.path || '/'

	// Necessary for IPv6 addresses
	if (host && host.indexOf(':') !== -1)
		host = '[' + host + ']'

	// This may be a relative url. The browser should always be able to interpret it correctly.
	opts.url = (host ? (protocol + '//' + host) : '') + (port ? ':' + port : '') + path
	opts.method = (opts.method || 'GET').toUpperCase()
	opts.headers = opts.headers || {}

	// Also valid opts.auth, opts.mode

	var req = new ClientRequest(opts)
	if (cb)
		req.on('response', cb)
	return req
}

http.get = function get (opts, cb) {
	var req = http.request(opts, cb)
	req.end()
	return req
}

http.ClientRequest = ClientRequest
http.IncomingMessage = response.IncomingMessage

http.Agent = function () {}
http.Agent.defaultMaxSockets = 4

http.globalAgent = new http.Agent()

http.STATUS_CODES = statusCodes

http.METHODS = [
	'CHECKOUT',
	'CONNECT',
	'COPY',
	'DELETE',
	'GET',
	'HEAD',
	'LOCK',
	'M-SEARCH',
	'MERGE',
	'MKACTIVITY',
	'MKCOL',
	'MOVE',
	'NOTIFY',
	'OPTIONS',
	'PATCH',
	'POST',
	'PROPFIND',
	'PROPPATCH',
	'PURGE',
	'PUT',
	'REPORT',
	'SEARCH',
	'SUBSCRIBE',
	'TRACE',
	'UNLOCK',
	'UNSUBSCRIBE'
]
}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/request":29,"./lib/response":30,"builtin-status-codes":16,"url":47,"xtend":50}],28:[function(require,module,exports){
(function (global){(function (){
exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream)

exports.writableStream = isFunction(global.WritableStream)

exports.abortController = isFunction(global.AbortController)

// The xhr request to example.com may violate some restrictive CSP configurations,
// so if we're running in a browser that supports `fetch`, avoid calling getXHR()
// and assume support for certain features below.
var xhr
function getXHR () {
	// Cache the xhr value
	if (xhr !== undefined) return xhr

	if (global.XMLHttpRequest) {
		xhr = new global.XMLHttpRequest()
		// If XDomainRequest is available (ie only, where xhr might not work
		// cross domain), use the page location. Otherwise use example.com
		// Note: this doesn't actually make an http request.
		try {
			xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com')
		} catch(e) {
			xhr = null
		}
	} else {
		// Service workers don't have XHR
		xhr = null
	}
	return xhr
}

function checkTypeSupport (type) {
	var xhr = getXHR()
	if (!xhr) return false
	try {
		xhr.responseType = type
		return xhr.responseType === type
	} catch (e) {}
	return false
}

// If fetch is supported, then arraybuffer will be supported too. Skip calling
// checkTypeSupport(), since that calls getXHR().
exports.arraybuffer = exports.fetch || checkTypeSupport('arraybuffer')

// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && checkTypeSupport('ms-stream')
exports.mozchunkedarraybuffer = !exports.fetch && checkTypeSupport('moz-chunked-arraybuffer')

// If fetch is supported, then overrideMimeType will be supported too. Skip calling
// getXHR().
exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false)

function isFunction (value) {
	return typeof value === 'function'
}

xhr = null // Help gc

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],29:[function(require,module,exports){
(function (process,global,Buffer){(function (){
var capability = require('./capability')
var inherits = require('inherits')
var response = require('./response')
var stream = require('readable-stream')

var IncomingMessage = response.IncomingMessage
var rStates = response.readyStates

function decideMode (preferBinary, useFetch) {
	if (capability.fetch && useFetch) {
		return 'fetch'
	} else if (capability.mozchunkedarraybuffer) {
		return 'moz-chunked-arraybuffer'
	} else if (capability.msstream) {
		return 'ms-stream'
	} else if (capability.arraybuffer && preferBinary) {
		return 'arraybuffer'
	} else {
		return 'text'
	}
}

var ClientRequest = module.exports = function (opts) {
	var self = this
	stream.Writable.call(self)

	self._opts = opts
	self._body = []
	self._headers = {}
	if (opts.auth)
		self.setHeader('Authorization', 'Basic ' + Buffer.from(opts.auth).toString('base64'))
	Object.keys(opts.headers).forEach(function (name) {
		self.setHeader(name, opts.headers[name])
	})

	var preferBinary
	var useFetch = true
	if (opts.mode === 'disable-fetch' || ('requestTimeout' in opts && !capability.abortController)) {
		// If the use of XHR should be preferred. Not typically needed.
		useFetch = false
		preferBinary = true
	} else if (opts.mode === 'prefer-streaming') {
		// If streaming is a high priority but binary compatibility and
		// the accuracy of the 'content-type' header aren't
		preferBinary = false
	} else if (opts.mode === 'allow-wrong-content-type') {
		// If streaming is more important than preserving the 'content-type' header
		preferBinary = !capability.overrideMimeType
	} else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
		// Use binary if text streaming may corrupt data or the content-type header, or for speed
		preferBinary = true
	} else {
		throw new Error('Invalid value for opts.mode')
	}
	self._mode = decideMode(preferBinary, useFetch)
	self._fetchTimer = null
	self._socketTimeout = null
	self._socketTimer = null

	self.on('finish', function () {
		self._onFinish()
	})
}

inherits(ClientRequest, stream.Writable)

ClientRequest.prototype.setHeader = function (name, value) {
	var self = this
	var lowerName = name.toLowerCase()
	// This check is not necessary, but it prevents warnings from browsers about setting unsafe
	// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
	// http-browserify did it, so I will too.
	if (unsafeHeaders.indexOf(lowerName) !== -1)
		return

	self._headers[lowerName] = {
		name: name,
		value: value
	}
}

ClientRequest.prototype.getHeader = function (name) {
	var header = this._headers[name.toLowerCase()]
	if (header)
		return header.value
	return null
}

ClientRequest.prototype.removeHeader = function (name) {
	var self = this
	delete self._headers[name.toLowerCase()]
}

ClientRequest.prototype._onFinish = function () {
	var self = this

	if (self._destroyed)
		return
	var opts = self._opts

	if ('timeout' in opts && opts.timeout !== 0) {
		self.setTimeout(opts.timeout)
	}

	var headersObj = self._headers
	var body = null
	if (opts.method !== 'GET' && opts.method !== 'HEAD') {
        body = new Blob(self._body, {
            type: (headersObj['content-type'] || {}).value || ''
        });
    }

	// create flattened list of headers
	var headersList = []
	Object.keys(headersObj).forEach(function (keyName) {
		var name = headersObj[keyName].name
		var value = headersObj[keyName].value
		if (Array.isArray(value)) {
			value.forEach(function (v) {
				headersList.push([name, v])
			})
		} else {
			headersList.push([name, value])
		}
	})

	if (self._mode === 'fetch') {
		var signal = null
		if (capability.abortController) {
			var controller = new AbortController()
			signal = controller.signal
			self._fetchAbortController = controller

			if ('requestTimeout' in opts && opts.requestTimeout !== 0) {
				self._fetchTimer = global.setTimeout(function () {
					self.emit('requestTimeout')
					if (self._fetchAbortController)
						self._fetchAbortController.abort()
				}, opts.requestTimeout)
			}
		}

		global.fetch(self._opts.url, {
			method: self._opts.method,
			headers: headersList,
			body: body || undefined,
			mode: 'cors',
			credentials: opts.withCredentials ? 'include' : 'same-origin',
			signal: signal
		}).then(function (response) {
			self._fetchResponse = response
			self._resetTimers(false)
			self._connect()
		}, function (reason) {
			self._resetTimers(true)
			if (!self._destroyed)
				self.emit('error', reason)
		})
	} else {
		var xhr = self._xhr = new global.XMLHttpRequest()
		try {
			xhr.open(self._opts.method, self._opts.url, true)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}

		// Can't set responseType on really old browsers
		if ('responseType' in xhr)
			xhr.responseType = self._mode

		if ('withCredentials' in xhr)
			xhr.withCredentials = !!opts.withCredentials

		if (self._mode === 'text' && 'overrideMimeType' in xhr)
			xhr.overrideMimeType('text/plain; charset=x-user-defined')

		if ('requestTimeout' in opts) {
			xhr.timeout = opts.requestTimeout
			xhr.ontimeout = function () {
				self.emit('requestTimeout')
			}
		}

		headersList.forEach(function (header) {
			xhr.setRequestHeader(header[0], header[1])
		})

		self._response = null
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case rStates.LOADING:
				case rStates.DONE:
					self._onXHRProgress()
					break
			}
		}
		// Necessary for streaming in Firefox, since xhr.response is ONLY defined
		// in onprogress, not in onreadystatechange with xhr.readyState = 3
		if (self._mode === 'moz-chunked-arraybuffer') {
			xhr.onprogress = function () {
				self._onXHRProgress()
			}
		}

		xhr.onerror = function () {
			if (self._destroyed)
				return
			self._resetTimers(true)
			self.emit('error', new Error('XHR error'))
		}

		try {
			xhr.send(body)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}
	}
}

/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */
function statusValid (xhr) {
	try {
		var status = xhr.status
		return (status !== null && status !== 0)
	} catch (e) {
		return false
	}
}

ClientRequest.prototype._onXHRProgress = function () {
	var self = this

	self._resetTimers(false)

	if (!statusValid(self._xhr) || self._destroyed)
		return

	if (!self._response)
		self._connect()

	self._response._onXHRProgress(self._resetTimers.bind(self))
}

ClientRequest.prototype._connect = function () {
	var self = this

	if (self._destroyed)
		return

	self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode, self._resetTimers.bind(self))
	self._response.on('error', function(err) {
		self.emit('error', err)
	})

	self.emit('response', self._response)
}

ClientRequest.prototype._write = function (chunk, encoding, cb) {
	var self = this

	self._body.push(chunk)
	cb()
}

ClientRequest.prototype._resetTimers = function (done) {
	var self = this

	global.clearTimeout(self._socketTimer)
	self._socketTimer = null

	if (done) {
		global.clearTimeout(self._fetchTimer)
		self._fetchTimer = null
	} else if (self._socketTimeout) {
		self._socketTimer = global.setTimeout(function () {
			self.emit('timeout')
		}, self._socketTimeout)
	}
}

ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function (err) {
	var self = this
	self._destroyed = true
	self._resetTimers(true)
	if (self._response)
		self._response._destroyed = true
	if (self._xhr)
		self._xhr.abort()
	else if (self._fetchAbortController)
		self._fetchAbortController.abort()

	if (err)
		self.emit('error', err)
}

ClientRequest.prototype.end = function (data, encoding, cb) {
	var self = this
	if (typeof data === 'function') {
		cb = data
		data = undefined
	}

	stream.Writable.prototype.end.call(self, data, encoding, cb)
}

ClientRequest.prototype.setTimeout = function (timeout, cb) {
	var self = this

	if (cb)
		self.once('timeout', cb)

	self._socketTimeout = timeout
	self._resetTimers(false)
}

ClientRequest.prototype.flushHeaders = function () {}
ClientRequest.prototype.setNoDelay = function () {}
ClientRequest.prototype.setSocketKeepAlive = function () {}

// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = [
	'accept-charset',
	'accept-encoding',
	'access-control-request-headers',
	'access-control-request-method',
	'connection',
	'content-length',
	'cookie',
	'cookie2',
	'date',
	'dnt',
	'expect',
	'host',
	'keep-alive',
	'origin',
	'referer',
	'te',
	'trailer',
	'transfer-encoding',
	'upgrade',
	'via'
]

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"./capability":28,"./response":30,"_process":21,"buffer":15,"inherits":20,"readable-stream":45}],30:[function(require,module,exports){
(function (process,global,Buffer){(function (){
var capability = require('./capability')
var inherits = require('inherits')
var stream = require('readable-stream')

var rStates = exports.readyStates = {
	UNSENT: 0,
	OPENED: 1,
	HEADERS_RECEIVED: 2,
	LOADING: 3,
	DONE: 4
}

var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode, resetTimers) {
	var self = this
	stream.Readable.call(self)

	self._mode = mode
	self.headers = {}
	self.rawHeaders = []
	self.trailers = {}
	self.rawTrailers = []

	// Fake the 'close' event, but only once 'end' fires
	self.on('end', function () {
		// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
		process.nextTick(function () {
			self.emit('close')
		})
	})

	if (mode === 'fetch') {
		self._fetchResponse = response

		self.url = response.url
		self.statusCode = response.status
		self.statusMessage = response.statusText
		
		response.headers.forEach(function (header, key){
			self.headers[key.toLowerCase()] = header
			self.rawHeaders.push(key, header)
		})

		if (capability.writableStream) {
			var writable = new WritableStream({
				write: function (chunk) {
					resetTimers(false)
					return new Promise(function (resolve, reject) {
						if (self._destroyed) {
							reject()
						} else if(self.push(Buffer.from(chunk))) {
							resolve()
						} else {
							self._resumeFetch = resolve
						}
					})
				},
				close: function () {
					resetTimers(true)
					if (!self._destroyed)
						self.push(null)
				},
				abort: function (err) {
					resetTimers(true)
					if (!self._destroyed)
						self.emit('error', err)
				}
			})

			try {
				response.body.pipeTo(writable).catch(function (err) {
					resetTimers(true)
					if (!self._destroyed)
						self.emit('error', err)
				})
				return
			} catch (e) {} // pipeTo method isn't defined. Can't find a better way to feature test this
		}
		// fallback for when writableStream or pipeTo aren't available
		var reader = response.body.getReader()
		function read () {
			reader.read().then(function (result) {
				if (self._destroyed)
					return
				resetTimers(result.done)
				if (result.done) {
					self.push(null)
					return
				}
				self.push(Buffer.from(result.value))
				read()
			}).catch(function (err) {
				resetTimers(true)
				if (!self._destroyed)
					self.emit('error', err)
			})
		}
		read()
	} else {
		self._xhr = xhr
		self._pos = 0

		self.url = xhr.responseURL
		self.statusCode = xhr.status
		self.statusMessage = xhr.statusText
		var headers = xhr.getAllResponseHeaders().split(/\r?\n/)
		headers.forEach(function (header) {
			var matches = header.match(/^([^:]+):\s*(.*)/)
			if (matches) {
				var key = matches[1].toLowerCase()
				if (key === 'set-cookie') {
					if (self.headers[key] === undefined) {
						self.headers[key] = []
					}
					self.headers[key].push(matches[2])
				} else if (self.headers[key] !== undefined) {
					self.headers[key] += ', ' + matches[2]
				} else {
					self.headers[key] = matches[2]
				}
				self.rawHeaders.push(matches[1], matches[2])
			}
		})

		self._charset = 'x-user-defined'
		if (!capability.overrideMimeType) {
			var mimeType = self.rawHeaders['mime-type']
			if (mimeType) {
				var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/)
				if (charsetMatch) {
					self._charset = charsetMatch[1].toLowerCase()
				}
			}
			if (!self._charset)
				self._charset = 'utf-8' // best guess
		}
	}
}

inherits(IncomingMessage, stream.Readable)

IncomingMessage.prototype._read = function () {
	var self = this

	var resolve = self._resumeFetch
	if (resolve) {
		self._resumeFetch = null
		resolve()
	}
}

IncomingMessage.prototype._onXHRProgress = function (resetTimers) {
	var self = this

	var xhr = self._xhr

	var response = null
	switch (self._mode) {
		case 'text':
			response = xhr.responseText
			if (response.length > self._pos) {
				var newData = response.substr(self._pos)
				if (self._charset === 'x-user-defined') {
					var buffer = Buffer.alloc(newData.length)
					for (var i = 0; i < newData.length; i++)
						buffer[i] = newData.charCodeAt(i) & 0xff

					self.push(buffer)
				} else {
					self.push(newData, self._charset)
				}
				self._pos = response.length
			}
			break
		case 'arraybuffer':
			if (xhr.readyState !== rStates.DONE || !xhr.response)
				break
			response = xhr.response
			self.push(Buffer.from(new Uint8Array(response)))
			break
		case 'moz-chunked-arraybuffer': // take whole
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING || !response)
				break
			self.push(Buffer.from(new Uint8Array(response)))
			break
		case 'ms-stream':
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING)
				break
			var reader = new global.MSStreamReader()
			reader.onprogress = function () {
				if (reader.result.byteLength > self._pos) {
					self.push(Buffer.from(new Uint8Array(reader.result.slice(self._pos))))
					self._pos = reader.result.byteLength
				}
			}
			reader.onload = function () {
				resetTimers(true)
				self.push(null)
			}
			// reader.onerror = ??? // TODO: this
			reader.readAsArrayBuffer(response)
			break
	}

	// The ms-stream case handles end separately in reader.onload()
	if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
		resetTimers(true)
		self.push(null)
	}
}

}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"./capability":28,"_process":21,"buffer":15,"inherits":20,"readable-stream":45}],31:[function(require,module,exports){
'use strict';

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;

},{}],32:[function(require,module,exports){
(function (process){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = require('./_stream_readable');

var Writable = require('./_stream_writable');

require('inherits')(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
}).call(this)}).call(this,require('_process'))
},{"./_stream_readable":34,"./_stream_writable":36,"_process":21,"inherits":20}],33:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

require('inherits')(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":35,"inherits":20}],34:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';

module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = require('events').EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = require('./internal/streams/stream');
/*</replacement>*/


var Buffer = require('buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = require('util');

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = require('./internal/streams/buffer_list');

var destroyImpl = require('./internal/streams/destroy');

var _require = require('./internal/streams/state'),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = require('../errors').codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

require('inherits')(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = require('./internal/streams/async_iterator');
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = require('./internal/streams/from');
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../errors":31,"./_stream_duplex":32,"./internal/streams/async_iterator":37,"./internal/streams/buffer_list":38,"./internal/streams/destroy":39,"./internal/streams/from":41,"./internal/streams/state":43,"./internal/streams/stream":44,"_process":21,"buffer":15,"events":17,"inherits":20,"string_decoder/":46,"util":14}],35:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';

module.exports = Transform;

var _require$codes = require('../errors').codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = require('./_stream_duplex');

require('inherits')(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}
},{"../errors":31,"./_stream_duplex":32,"inherits":20}],36:[function(require,module,exports){
(function (process,global){(function (){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';

module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/

var Stream = require('./internal/streams/stream');
/*</replacement>*/


var Buffer = require('buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = require('./internal/streams/destroy');

var _require = require('./internal/streams/state'),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = require('../errors').codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

require('inherits')(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
}).call(this)}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../errors":31,"./_stream_duplex":32,"./internal/streams/destroy":39,"./internal/streams/state":43,"./internal/streams/stream":44,"_process":21,"buffer":15,"inherits":20,"util-deprecate":49}],37:[function(require,module,exports){
(function (process){(function (){
'use strict';

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = require('./end-of-stream');

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
}).call(this)}).call(this,require('_process'))
},{"./end-of-stream":40,"_process":21}],38:[function(require,module,exports){
'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('buffer'),
    Buffer = _require.Buffer;

var _require2 = require('util'),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();
},{"buffer":15,"util":14}],39:[function(require,module,exports){
(function (process){(function (){
'use strict'; // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
}).call(this)}).call(this,require('_process'))
},{"_process":21}],40:[function(require,module,exports){
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var ERR_STREAM_PREMATURE_CLOSE = require('../../../errors').codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;
},{"../../../errors":31}],41:[function(require,module,exports){
module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};

},{}],42:[function(require,module,exports){
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = require('../../../errors').codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = require('./end-of-stream');
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;
},{"../../../errors":31,"./end-of-stream":40}],43:[function(require,module,exports){
'use strict';

var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};
},{"../../../errors":31}],44:[function(require,module,exports){
module.exports = require('events').EventEmitter;

},{"events":17}],45:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
exports.finished = require('./lib/internal/streams/end-of-stream.js');
exports.pipeline = require('./lib/internal/streams/pipeline.js');

},{"./lib/_stream_duplex.js":32,"./lib/_stream_passthrough.js":33,"./lib/_stream_readable.js":34,"./lib/_stream_transform.js":35,"./lib/_stream_writable.js":36,"./lib/internal/streams/end-of-stream.js":40,"./lib/internal/streams/pipeline.js":42}],46:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":26}],47:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = require('punycode');
var util = require('./util');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

},{"./util":48,"punycode":22,"querystring":25}],48:[function(require,module,exports){
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

},{}],49:[function(require,module,exports){
(function (global){(function (){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],50:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"@onflow/fcl":[function(require,module,exports){
var e=require("@onflow/sdk"),t=require("@onflow/util-invariant"),r=require("@onflow/types"),n=require("@onflow/util-actor"),o=require("@onflow/util-address"),i=require("@onflow/rlp"),a=require("@onflow/util-uid"),s=require("@onflow/util-template");function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,t}var c=u(e),d=u(r),l=u(i),f=function(t){try{return Promise.resolve(e.config().where(t)).then(function(e){return Object.fromEntries(Object.entries(e).map(function(e){var r=e[1];return[e[0].replace(t,""),r]}))})}catch(e){return Promise.reject(e)}};e.config({"discovery.wallet.method.default":"IFRAME/RPC","fcl.storage.default":{can:!0,get:function(e){try{return Promise.resolve(JSON.parse(sessionStorage.getItem(e)))}catch(e){return Promise.reject(e)}},put:function(e,t){try{return Promise.resolve(sessionStorage.setItem(e,JSON.stringify(t)))}catch(e){return Promise.reject(e)}}}});var p=function(e){return function(t){return typeof t===e}},h=function(e){return null!=e},v=p("object"),m=p("string"),y=p("function"),g=p("number");function E(e){return y(e)?e(c.arg,d):[]}var P=function(e){void 0===e&&(e={});try{return Promise.resolve(function(e){try{return t.invariant(h(e.cadence),"query({ cadence }) -- cadence is required"),t.invariant(m(e.cadence),"query({ cadence }) -- cadence must be a string"),Promise.resolve(c.config.get("accessNode.api")).then(function(e){t.invariant(e,'Required value for "accessNode.api" not defined in config. See: https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration')})}catch(e){return Promise.reject(e)}}(e)).then(function(){return c.send([c.script(e.cadence),c.args(E(e.args||[])),e.limit&&"number"==typeof e.limit&&c.limit(e.limit)]).then(c.decode)})}catch(e){return Promise.reject(e)}};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var R={f_type:"Service",f_vsn:"1.0.0"},w={f_type:"Identity",f_vsn:"1.0.0"},O={f_type:"USER",f_vsn:"1.0.0"},L={f_type:"PollingResponse",f_vsn:"1.0.0"},I={f_type:"CompositeSignature",f_vsn:"1.0.0"};function A(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({old:e},R,{type:"frame",endpoint:e.endpoint,params:e.params||{},data:e.data||{}})}}function j(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},R,{type:"back-channel-rpc",endpoint:e.endpoint,method:e.method,params:e.params||{},data:e.data||{}})}}function x(e){if(null==e)return null;switch(null==e.method&&(e=b({},e,{type:"local-view",method:"VIEW/IFRAME"})),e.f_vsn){case"1.0.0":return e;default:return b({},R,{type:e.type||"local-view",method:e.method,endpoint:e.endpoint,data:e.data||{},params:e.params||{}})}}var N={"back-channel-rpc":j,"pre-authz":function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},R,{type:e.type,uid:e.id,endpoint:e.endpoint,method:e.method,identity:b({},w,{address:o.withPrefix(e.addr),keyId:e.keyId}),params:e.params,data:e.data})}},authz:function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},R,{type:e.type,uid:e.id,endpoint:e.endpoint,method:e.method,identity:b({},w,{address:o.withPrefix(e.addr),keyId:e.keyId}),params:e.params,data:e.data})}},authn:function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},R,{type:e.type,uid:e.id,endpoint:e.authn,id:e.pid,provider:{address:o.withPrefix(e.addr),name:e.name,icon:e.icon}})}},frame:A,"open-id":function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return null}},"user-signature":function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:throw new Error("Invalid user-signature service")}},"local-view":x};function F(e){return l.encode([e.provider.address||e.provider.name||"UNSPECIFIED",e.id]).toString("hex")}function D(e,t){return void 0===e&&(e=[]),e.find(function(e){return e.type===t})}function k(e){var t=new URL(e.endpoint);if(t.searchParams.append("l6n",window.location.origin),null!=e.params)for(var r=0,n=Object.entries(e.params||{});r<n.length;r++){var o=n[r];t.searchParams.append(o[0],o[1])}return t}function T(e,t){void 0===t&&(t={});var r=t.method||"POST",n="GET"===r?void 0:JSON.stringify(t.data||e.data||{});return fetch(k(e),{method:r,headers:b({},e.headers||{},t.headers||{},{"Content-Type":"application/json"}),body:n}).then(function(e){return e.json()})}function U(e){var t;if(null==e)return null;switch((e.addr||e.services)&&(e={status:"APPROVED",data:b({},e)}),e.f_vsn){case"1.0.0":return e;default:return b({},L,{status:e.status,reason:null!=(t=e.reason)?t:null,data:e.compositeSignature||e.data||{},updates:j(e.authorizationUpdates),local:A((e.local||[])[0])})}}var _=function e(r,n){void 0===n&&(n=function(){return!0});try{if(t.invariant(r,"Missing Polling Service",{service:r}),!n())throw new Error("Externally Halted");return Promise.resolve(T(r,{method:B(r)}).then(U)).then(function(t){switch(t.status){case"APPROVED":return t.data;case"DECLINED":throw new Error("Declined: "+(t.reason||"No reason supplied."));default:return Promise.resolve(new Promise(function(e){return setTimeout(e,500)})).then(function(){return e(t.updates,n)})}})}catch(e){return Promise.reject(e)}},V={"HTTP/GET":"GET","HTTP/POST":"POST"},B=function(e){return t.invariant(V[e.method],"Invalid Service Method for type back-channel-rpc",{service:e}),V[e.method]},M="FCL_IFRAME";function z(e){t.invariant(!document.getElementById(M),"Attempt at triggering multiple Frames",{src:e});var r=document.createElement("iframe");return r.src=e,r.id=M,r.allow="usb *; hid *",r.frameBorder="0",r.style.cssText="\n  position:fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 100vw;\n  display:block;\n  background:rgba(0,0,0,0.25);\n  z-index: 2147483647;\n  box-sizing: border-box;\n",document.body.append(r),[r.contentWindow,function(){document.getElementById(M)&&document.getElementById(M).remove()}]}var W=null,H=null;function Y(e,t,r,n,o){return r.open(e,t,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+n+", height="+o+", top="+(r.top.outerHeight/2+r.top.screenY-o/2)+", left="+(r.top.outerWidth/2+r.top.screenX-n/2))}function q(e){var t;null==W||null!=(t=W)&&t.closed?W=Y(e,"FCL_POP",window,640,600):H!==e?(W=Y(e,"FCL_POP",window,640,600)).focus():W.focus(),H=e;var r=setInterval(function(){W&&W.closed&&(clearInterval(r),W=null)},1e3);return[W,function(){W&&!W.closed&&(W.close(),W=null)}]}var J=null,K=null;function G(e){var t;null==J||null!=(t=J)&&t.closed?J=window.open(e,"_blank"):K!==e?(J=window.open(e,"_blank")).focus():J.focus(),K=e;var r=setInterval(function(){J&&J.closed&&(clearInterval(r),J=null)},1e3);return[J,function(){J&&!J.closed&&(J.close(),J=null)}]}var Z,$={"VIEW/IFRAME":z,"VIEW/POP":q,"VIEW/TAB":G},X=function(e,t,r){try{return t.data=e.data,Promise.resolve(T(e,{data:t}).then(U)).then(function(t){if("APPROVED"===t.status)return t.data;if("DECLINED"===t.status)throw new Error("Declined: "+(t.reason||"No reason supplied."));if("PENDING"===t.status){var r=!0;return Promise.resolve(function(e,t){void 0===t&&(t={});try{try{return Promise.resolve($[e.method](k(e),t))}catch(r){throw console.error("execLocal({service, opts = {}})",r,{service:e,opts:t}),r}}catch(e){return Promise.reject(e)}}(x(t.local))).then(function(e){var n=e[1],o=function(){try{n(),r=!1}catch(e){console.error("Frame Close Error",e)}};return _(t.updates,function(){return r}).then(function(e){return o(),e}).catch(function(e){throw console.error(e),o(),e})})}throw console.error("Auto Decline: Invalid Response",{service:e,resp:t}),new Error("Auto Decline: Invalid Response")})}catch(e){return Promise.reject(e)}},Q=function(){},ee=function(e){return"string"==typeof e&&e.toLowerCase()},te=function(e,t){return console.warn("DEPRECATION NOTICE","Received "+e+", please use "+t+" for this and future versions of FCL")},re=new Set(["monetizationstart","monetizationpending","monetizationprogress","monetizationstop"]),ne=function(){},oe=function(e){return"string"==typeof e&&e.toLowerCase()},ie=function(e,t){return console.warn("DEPRECATION NOTICE","Received "+e+", please use "+t+" for this and future versions of FCL")},ae=new Set(["monetizationstart","monetizationpending","monetizationprogress","monetizationstop"]),se=function(){},ue=function(e){return"string"==typeof e&&e.toLowerCase()},ce=function(e,t){return console.warn("DEPRECATION NOTICE","Received "+e+", please use "+t+" for this and future versions of FCL")},de=new Set(["monetizationstart","monetizationpending","monetizationprogress","monetizationstop"]),le=function(e){var t=e.service,r=e.msg,n=void 0===r?{}:r,o=e.opts,i=void 0===o?{}:o;try{try{return Promise.resolve(fe[t.method](t,n,i))}catch(e){throw console.error("execService({service, msg = {}, opts = {}})",e,{service:t,msg:n,opts:i}),e}}catch(e){return Promise.reject(e)}},fe={"HTTP/RPC":X,"HTTP/POST":X,"IFRAME/RPC":function(e,t,r){return new Promise(function(n,o){var i=a.uid(),s=r.includeOlderJsonRpcCall;t.data=e.data,function(e,t){if(void 0===t&&(t={}),null==e)return{send:Q,close:Q};var r=t.onClose||Q,n=t.onMessage||Q,o=t.onReady||Q,i=t.onResponse||Q;window.addEventListener("message",c);var a=z(k(e)),s=a[0],u=a[1];return{send:l,close:d};function c(e){try{if("object"!=typeof e.data)return;if(re.has(e.data.type))return;ee(e.data.type)===ee("FCL:VIEW:CLOSE")&&d(),ee(e.data.type)===ee("FCL:VIEW:READY")&&o(e,{send:l,close:d}),ee(e.data.type)===ee("FCL:VIEW:RESPONSE")&&i(e,{send:l,close:d}),n(e,{send:l,close:d}),ee(e.data.type)===ee("FCL:FRAME:READY")&&(te(e.data.type,"FCL:VIEW:READY"),o(e,{send:l,close:d})),ee(e.data.type)===ee("FCL:FRAME:RESPONSE")&&(te(e.data.type,"FCL:VIEW:RESPONSE"),i(e,{send:l,close:d})),ee(e.data.type)===ee("FCL:FRAME:CLOSE")&&(te(e.data.type,"FCL:VIEW:CLOSE"),d()),ee(e.data.type)===ee("FCL::CHALLENGE::RESPONSE")&&(te(e.data.type,"FCL:VIEW:RESPONSE"),i(e,{send:l,close:d})),ee(e.data.type)===ee("FCL::AUTHZ_READY")&&(te(e.data.type,"FCL:VIEW:READY"),o(e,{send:l,close:d})),ee(e.data.type)===ee("FCL::CHALLENGE::CANCEL")&&(te(e.data.type,"FCL:VIEW:CLOSE"),d()),ee(e.data.type)===ee("FCL::CANCEL")&&(te(e.data.type,"FCL:VIEW:CLOSE"),d())}catch(e){console.error("Frame Callback Error",e),d()}}function d(){try{window.removeEventListener("message",c),u(),r()}catch(e){console.error("Frame Close Error",e)}}function l(e){try{s.postMessage(JSON.parse(JSON.stringify(e||{})),"*")}catch(t){console.error("Frame Send Error",e,t)}}}(e,{onReady:function(r,n){var o=n.send;try{return Promise.resolve(function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(function(){var r={params:e.params,data:e.data};return Promise.resolve(f(/^service\./)).then(function(n){return Promise.resolve(f(/^app\.detail\./)).then(function(a){o({type:"FCL:VIEW:READY:RESPONSE",body:t,service:r,config:{services:n,app:a}});var u={params:e.params,data:e.data};return Promise.resolve(f(/^service\./)).then(function(r){return Promise.resolve(f(/^app\.detail\./)).then(function(n){o({type:"FCL:FRAME:READY:RESPONSE",body:t,service:u,config:{services:r,app:n},deprecated:{message:"FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"}}),s&&o({jsonrpc:"2.0",id:i,method:"fcl:sign",params:[t,e.params],deprecated:{message:"jsonrpc is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"}})})})})})},function(e){throw e}))}catch(e){return Promise.reject(e)}},onResponse:function(e,t){var r=t.close;try{if("object"!=typeof e.data)return;var i=U(e.data);switch(i.status){case"APPROVED":n(i.data),r();break;case"DECLINED":o("Declined: "+(i.reason||"No reason supplied")),r();break;default:o("Declined: No reason supplied"),r()}}catch(e){throw console.error("execIframeRPC onResponse error",e),e}},onMessage:function(e,t){var r=t.close;try{if("object"!=typeof e.data)return;if("2.0"!==e.data.jsonrpc)return;if(e.data.id!==i)return;var a=U(e.data.result);switch(a.status){case"APPROVED":n(a.data),r();break;case"DECLINED":o("Declined: "+(a.reason||"No reason supplied")),r();break;default:o("Declined: No reason supplied"),r()}}catch(e){throw console.error("execIframeRPC onMessage error",e),e}},onClose:function(){o("Declined: Externally Halted")}})})},"POP/RPC":function(e,t,r){return new Promise(function(n,o){var i=a.uid(),s=r.includeOlderJsonRpcCall;t.data=e.data,function(e,t){if(void 0===t&&(t={}),null==e)return{send:ne,close:ne};var r=t.onClose||ne,n=t.onMessage||ne,o=t.onReady||ne,i=t.onResponse||ne;window.addEventListener("message",c);var a=q(k(e)),s=a[0],u=a[1];return{send:l,close:d};function c(e){try{if("object"!=typeof e.data)return;if(ae.has(e.data.type))return;oe(e.data.type)===oe("FCL:VIEW:CLOSE")&&d(),oe(e.data.type)===oe("FCL:VIEW:READY")&&o(e,{send:l,close:d}),oe(e.data.type)===oe("FCL:VIEW:RESPONSE")&&i(e,{send:l,close:d}),n(e,{send:l,close:d}),oe(e.data.type)===oe("FCL:FRAME:READY")&&(ie(e.data.type,"FCL:VIEW:READY"),o(e,{send:l,close:d})),oe(e.data.type)===oe("FCL:FRAME:RESPONSE")&&(ie(e.data.type,"FCL:VIEW:RESPONSE"),i(e,{send:l,close:d})),oe(e.data.type)===oe("FCL:FRAME:CLOSE")&&(ie(e.data.type,"FCL:VIEW:CLOSE"),d()),oe(e.data.type)===oe("FCL::CHALLENGE::RESPONSE")&&(ie(e.data.type,"FCL:VIEW:RESPONSE"),i(e,{send:l,close:d})),oe(e.data.type)===oe("FCL::AUTHZ_READY")&&(ie(e.data.type,"FCL:VIEW:READY"),o(e,{send:l,close:d})),oe(e.data.type)===oe("FCL::CHALLENGE::CANCEL")&&(ie(e.data.type,"FCL:VIEW:CLOSE"),d()),oe(e.data.type)===oe("FCL::CANCEL")&&(ie(e.data.type,"FCL:VIEW:CLOSE"),d())}catch(e){console.error("Popup Callback Error",e),d()}}function d(){try{window.removeEventListener("message",c),u(),r()}catch(e){console.error("Popup Close Error",e)}}function l(e){try{s.postMessage(JSON.parse(JSON.stringify(e||{})),"*")}catch(t){console.error("Popup Send Error",e,t)}}}(e,{onReady:function(r,n){var o=n.send;try{return Promise.resolve(function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(function(){var r={params:e.params,data:e.data};return Promise.resolve(f(/^service\./)).then(function(n){return Promise.resolve(f(/^app\.detail\./)).then(function(a){o({type:"FCL:VIEW:READY:RESPONSE",body:t,service:r,config:{services:n,app:a}});var u={params:e.params,data:e.data};return Promise.resolve(f(/^service\./)).then(function(r){return Promise.resolve(f(/^app\.detail\./)).then(function(n){o({type:"FCL:FRAME:READY:RESPONSE",body:t,service:u,config:{services:r,app:n},deprecated:{message:"FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"}}),s&&o({jsonrpc:"2.0",id:i,method:"fcl:sign",params:[t,e.params]})})})})})},function(e){throw e}))}catch(e){return Promise.reject(e)}},onResponse:function(e,t){var r=t.close;try{if("object"!=typeof e.data)return;var i=U(e.data);switch(i.status){case"APPROVED":n(i.data),r();break;case"DECLINED":o("Declined: "+(i.reason||"No reason supplied")),r();break;default:o("Declined: No reason supplied"),r()}}catch(e){throw console.error("execPopRPC onResponse error",e),e}},onMessage:function(e,t){var r=t.close;try{if("object"!=typeof e.data)return;if("2.0"!==e.data.jsonrpc)return;if(e.data.id!==i)return;var a=U(e.data.result);switch(a.status){case"APPROVED":n(a.data),r();break;case"DECLINED":o("Declined: "+(a.reason||"No reason supplied")),r();break;default:o("Declined: No reason supplied"),r()}}catch(e){throw console.error("execPopRPC onMessage error",e),e}},onClose:function(){o("Declined: Externally Halted")}})})},"TAB/RPC":function(e,t,r){return new Promise(function(n,o){var i=a.uid(),s=r.includeOlderJsonRpcCall;t.data=e.data,function(e,t){if(void 0===t&&(t={}),null==e)return{send:se,close:se};var r=t.onClose||se,n=t.onMessage||se,o=t.onReady||se,i=t.onResponse||se;window.addEventListener("message",c);var a=G(k(e)),s=a[0],u=a[1];return{send:l,close:d};function c(e){try{if("object"!=typeof e.data)return;if(de.has(e.data.type))return;ue(e.data.type)===ue("FCL:VIEW:CLOSE")&&d(),ue(e.data.type)===ue("FCL:VIEW:READY")&&o(e,{send:l,close:d}),ue(e.data.type)===ue("FCL:VIEW:RESPONSE")&&i(e,{send:l,close:d}),n(e,{send:l,close:d}),ue(e.data.type)===ue("FCL:FRAME:READY")&&(ce(e.data.type,"FCL:VIEW:READY"),o(e,{send:l,close:d})),ue(e.data.type)===ue("FCL:FRAME:RESPONSE")&&(ce(e.data.type,"FCL:VIEW:RESPONSE"),i(e,{send:l,close:d})),ue(e.data.type)===ue("FCL:FRAME:CLOSE")&&(ce(e.data.type,"FCL:VIEW:CLOSE"),d()),ue(e.data.type)===ue("FCL::CHALLENGE::RESPONSE")&&(ce(e.data.type,"FCL:VIEW:RESPONSE"),i(e,{send:l,close:d})),ue(e.data.type)===ue("FCL::AUTHZ_READY")&&(ce(e.data.type,"FCL:VIEW:READY"),o(e,{send:l,close:d})),ue(e.data.type)===ue("FCL::CHALLENGE::CANCEL")&&(ce(e.data.type,"FCL:VIEW:CLOSE"),d()),ue(e.data.type)===ue("FCL::CANCEL")&&(ce(e.data.type,"FCL:VIEW:CLOSE"),d())}catch(e){console.error("Tab Callback Error",e),d()}}function d(){try{window.removeEventListener("message",c),u(),r()}catch(e){console.error("Tab Close Error",e)}}function l(e){try{s.postMessage(JSON.parse(JSON.stringify(e||{})),"*")}catch(t){console.error("Tab Send Error",e,t)}}}(e,{onReady:function(r,n){var o=n.send;try{return Promise.resolve(function(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}(function(){var r={params:e.params,data:e.data};return Promise.resolve(f(/^service\./)).then(function(n){return Promise.resolve(f(/^app\.detail\./)).then(function(a){o({type:"FCL:VIEW:READY:RESPONSE",body:t,service:r,config:{services:n,app:a}});var u={params:e.params,data:e.data};return Promise.resolve(f(/^service\./)).then(function(r){return Promise.resolve(f(/^app\.detail\./)).then(function(n){o({type:"FCL:FRAME:READY:RESPONSE",body:t,service:u,config:{services:r,app:n},deprecated:{message:"FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"}}),s&&o({jsonrpc:"2.0",id:i,method:"fcl:sign",params:[t,e.params]})})})})})},function(e){throw e}))}catch(e){return Promise.reject(e)}},onResponse:function(e,t){var r=t.close;try{if("object"!=typeof e.data)return;var i=U(e.data);switch(i.status){case"APPROVED":n(i.data),r();break;case"DECLINED":o("Declined: "+(i.reason||"No reason supplied")),r();break;default:o("Declined: No reason supplied"),r()}}catch(e){throw console.error("execPopRPC onResponse error",e),e}},onMessage:function(e,t){var r=t.close;try{if("object"!=typeof e.data)return;if("2.0"!==e.data.jsonrpc)return;if(e.data.id!==i)return;var a=U(e.data.result);switch(a.status){case"APPROVED":n(a.data),r();break;case"DECLINED":o("Declined: "+(a.reason||"No reason supplied")),r();break;default:o("Declined: No reason supplied"),r()}}catch(e){throw console.error("execPopRPC onMessage error",e),e}},onClose:function(){o("Declined: Externally Halted")}})})}},pe=function(r,n){try{t.invariant(/^[0-9a-f]+$/i.test(r),"Message must be a hex string"),t.invariant(Array.isArray(n),"Must include an Array of composite signatures");var o=[],i=[],a=[];return Promise.resolve(Promise.all(n.map(function(r){try{return t.invariant("string"==typeof r.addr,"addr must be a string"),t.invariant("number"==typeof r.keyId,"keyId must be a number"),t.invariant("string"==typeof r.signature,"signature must be a string"),Promise.resolve(function(t,n){try{var s=Promise.resolve(e.account(r.addr)).then(function(e){return o.push(e.keys[r.keyId].weight.toFixed(1)),i.push(e.keys[r.keyId].signAlgo),a.push(r.signature),e.keys[r.keyId].publicKey})}catch(e){return n(e)}return s&&s.then?s.then(void 0,n):s}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}}))).then(function(e){return Promise.resolve(P({cadence:""+he,args:function(t,n){return[t(r,n.String),t(e,n.Array([n.String])),t(o,n.Array(n.UFix64)),t(i,n.Array([n.UInt])),t(a,n.Array([n.String]))]}}))})}catch(e){return Promise.reject(e)}},he="\nimport Crypto\n    \npub fun main(\n  message: String,\n  rawPublicKeys: [String],\n  weights: [UFix64],\n  signAlgos: [UInt],\n  signatures: [String],\n): Bool {\n\n  let keyList = Crypto.KeyList()\n  \n  var i = 0\n  for rawPublicKey in rawPublicKeys {\n    keyList.add(\n      PublicKey(\n        publicKey: rawPublicKey.decodeHex(),\n        signatureAlgorithm: signAlgos[i] == 2 ? SignatureAlgorithm.ECDSA_P256 : SignatureAlgorithm.ECDSA_secp256k1 \n      ),\n      hashAlgorithm: HashAlgorithm.SHA3_256,\n      weight: weights[i],\n    )\n    i = i + 1\n  }\n\n  let signatureSet: [Crypto.KeyListSignature] = []\n\n  var j = 0\n  for signature in signatures {\n    signatureSet.append(\n      Crypto.KeyListSignature(\n        keyIndex: j,\n        signature: signature.decodeHex()\n      )\n    )\n    j = j + 1\n  }\n    \n  let signedData = message.decodeHex()\n  \n  return keyList.verify(\n    signatureSet: signatureSet,\n    signedData: signedData\n  )\n}\n";function ve(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},I,{addr:o.sansPrefix(e.addr||e.address),signature:e.signature||e.sig,keyId:e.keyId})}}function me(e,t,r){if(!e.s){if(r instanceof Pe){if(!r.s)return void(r.o=me.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(me.bind(null,e,t),me.bind(null,e,2));e.s=t,e.v=r;var n=e.o;n&&n(e)}}var ye=function(e,t){try{return console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n    verifyUserSignatures is no longer exported as fcl.currentUser().verifyUserSignatures\n    and is now available as fcl.verifyUserSignatures\n    ============================\n    ","font-weight:bold;font-family:monospace;"),Promise.resolve(pe(e,t))}catch(e){return Promise.reject(e)}},ge=function(e){try{return Ae(),Promise.resolve(Se()).then(function(r){var n=D(r.services,"user-signature");return t.invariant(n,"Current user must have authorized a signing service."),Ce(function(){return Promise.resolve(le({service:n,msg:Te(e)})).then(function(e){return Array.isArray(e)?e.map(function(e){return ve(e)}):[ve(e)]})},function(e){return e})})}catch(e){return Promise.reject(e)}},Ee=function(e){try{return Ae(),Promise.resolve(Se()).then(function(t){var r=D(t.services,"authz"),n=D(t.services,"pre-authz");return b({},e,n?{tempId:"CURRENT_USER",resolve:function(e,t){try{return Promise.resolve(le({service:n,msg:t})).then(Ne)}catch(e){return Promise.reject(e)}}}:{tempId:"CURRENT_USER",resolve:null,addr:o.sansPrefix(r.identity.address),keyId:r.identity.keyId,sequenceNum:null,signature:null,signingFunction:function(e){try{return Promise.resolve(le({service:r,msg:e,opts:{includeOlderJsonRpcCall:!0}})).then(ve)}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}},Pe=function(){function e(){}return e.prototype.then=function(t,r){var n=new e,o=this.s;if(o){var i=1&o?t:r;if(i){try{me(n,1,i(this.v))}catch(e){me(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?me(n,1,t?t(o):o):r?me(n,1,r(o)):me(n,2,o)}catch(e){me(n,2,e)}},n},e}();function be(e){return e instanceof Pe&&1&e.s}var Se=function(){try{return Promise.resolve(new Promise(function(t,r){try{return Ae(),Promise.resolve(De()).then(function(r){return r.loggedIn&&je(r)?t(r):Promise.resolve(e.config.first(["discovery.wallet","challenge.handshake"])).then(function(r){try{if(null==r)throw console.warn('Required value for "discovery.wallet" not defined in config. See: https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration'),new Error('Required config value "discovery.wallet" is not defined')}catch(e){console.error(e)}return Promise.resolve(e.config.first(["discovery.wallet.method","discovery.wallet.method.default"],"IFRAME/RPC")).then(function(e){var i=function(t,i){try{var a=Ce(function(){return Promise.resolve(le({service:{endpoint:r,method:e}})).then(function(e){return Promise.resolve(function(e){try{var t=(e=function(e){return e.addr=e.addr?o.withPrefix(e.addr):null,e.paddr=e.paddr?o.withPrefix(e.paddr):null,e}(e)).services||[];return Promise.resolve(function(e,t){try{if(null==e||null==t)return Promise.resolve([]);var r=new URL(e);return r.searchParams.append("code",t),Promise.resolve(fetch(r,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})).then(function(e){if(Array.isArray(e))return e;var t=[];if(Array.isArray(e.authorizations))for(var r,n=C(e.authorizations);!(r=n()).done;)t.push(b({type:"authz",keyId:e.keyId},r.value));return null!=e.provider&&t.push(b({type:"authn",id:"wallet-provider#authn"},e.provider)),t})}catch(e){return Promise.reject(e)}}(e.hks,e.code)).then(function(r){var n,i,a=(n=t,i=r,void 0===n&&(n=[]),void 0===i&&(i=[]),[].concat(n,i)).map(function(t){return function(e,t){try{return N[e.type](e,t)}catch(t){return console.error("Unrecognized FCL Service Type ["+e.type+"]",e,t),e}}(t,e)}),s=function(e,t){return t.find(function(e){return"authn"===e.type})}(0,a);return b({},O,{addr:o.withPrefix(e.addr),cid:F(s),loggedIn:!0,services:a,expiresAt:e.exp})})}catch(e){return Promise.reject(e)}}(e)).then(function(e){n.send(Re,Oe,e)})})},function(e){console.error("Error while authenticating",e)})}catch(e){return i(!0,e)}return a&&a.then?a.then(i.bind(null,!1),i.bind(null,!0)):i(!1,a)}(0,function(e,r){return Promise.resolve(De()).then(function(n){if(t(n),e)throw r;return r})});if(i&&i.then)return i.then(function(){})})})})}catch(e){return Promise.reject(e)}}))}catch(e){return Promise.reject(e)}};function Ce(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var Re="CURRENT_USER",we="CURRENT_USER/UPDATED",Oe="SET_CURRENT_USER",Le='{\n  "f_type": "User",\n  "f_vsn": "1.0.0",\n  "addr":null,\n  "cid":null,\n  "loggedIn":null,\n  "expiresAt":null,\n  "services":[]\n}',Ie=((Z={})[n.INIT]=function(t){try{return t.merge(JSON.parse(Le)),Promise.resolve(e.config.first(["fcl.storage","fcl.storage.default"])).then(function(e){var r=function(){if(e.can)return Promise.resolve(function(e){try{var t=JSON.parse(Le);return Promise.resolve(e.get(Re)).then(function(r){return null!=r&&t.f_vsn!==r.f_vsn?(e.removeItem(Re),t):r||t})}catch(e){return Promise.reject(e)}}(e)).then(function(e){je(e)&&t.merge(e)})}();if(r&&r.then)return r.then(function(){})})}catch(e){return Promise.reject(e)}},Z[n.SUBSCRIBE]=function(e,t){e.subscribe(t.from),e.send(t.from,we,b({},e.all()))},Z[n.UNSUBSCRIBE]=function(e,t){e.unsubscribe(t.from)},Z.SNAPSHOT=function(e,t){try{return t.reply(b({},e.all())),Promise.resolve()}catch(e){return Promise.reject(e)}},Z[Oe]=function(t,r,n){try{return t.merge(n),Promise.resolve(e.config.first(["fcl.storage","fcl.storage.default"])).then(function(e){e.can&&e.put(Re,t.all()),t.broadcast(we,b({},t.all()))})}catch(e){return Promise.reject(e)}},Z.DEL_CURRENT_USER=function(t,r){try{return t.merge(JSON.parse(Le)),Promise.resolve(e.config.first(["fcl.storage","fcl.storage.default"])).then(function(e){e.can&&e.put(Re,t.all()),t.broadcast(we,b({},t.all()))})}catch(e){return Promise.reject(e)}},Z),Ae=function(){return n.spawn(Ie,Re)};function je(e){return null==e.expiresAt||0===e.expiresAt||e.expiresAt>Date.now()}function xe(){Ae(),n.send(Re,"DEL_CURRENT_USER")}function Ne(e){var t=function(e){return{f_type:"PreAuthzResponse",f_vsn:"1.0.0",proposer:(e||{}).proposer,payer:(e||{}).payer||[],authorization:(e||{}).authorization||[]}}(e),r=[];null!=t.proposer&&r.push(["PROPOSER",t.proposer]);for(var n,o=C(t.payer||[]);!(n=o()).done;)r.push(["PAYER",n.value]);for(var i,a=C(t.authorization||[]);!(i=a()).done;)r.push(["AUTHORIZER",i.value]);return r.map(function(e){var t=e[0],r=e[1];return{tempId:[r.identity.address,r.identity.keyId].join("|"),addr:r.identity.address,keyId:r.identity.keyId,signingFunction:function(e){return le({service:r,msg:e})},role:{proposer:"PROPOSER"===t,payer:"PAYER"===t,authorizer:"AUTHORIZER"===t}}})}function Fe(e){Ae();var t="@EXIT",r=n.spawn(function(r){try{var o;return r.send(Re,n.SUBSCRIBE),Promise.resolve(function(e,t,r){for(var n;;){var o=e();if(be(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=r();if(i&&i.then){if(!be(i)){n=1;break}i=i.s}}var a=new Pe,s=me.bind(null,a,2);return(0===n?o.then(c):1===n?i.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,s):c(o):me(a,1,i)})).then(void 0,s),a;function u(t){i=t;do{if(!(o=e())||be(o)&&!o.v)return void me(a,1,i);if(o.then)return void o.then(c).then(void 0,s);be(i=r())&&(i=i.v)}while(!i||!i.then);i.then(u).then(void 0,s)}function c(e){e?(i=r())&&i.then?i.then(u).then(void 0,s):u(i):me(a,1,i)}}(function(){return!o&&1},0,function(){return Promise.resolve(r.receive()).then(function(i){if(i.tag===t)return r.send(Re,n.UNSUBSCRIBE),void(o=1);e(i.data)})}))}catch(e){return Promise.reject(e)}});return function(){return n.send(r,t)}}function De(){return Ae(),n.send(Re,"SNAPSHOT",null,{expectReply:!0,timeout:0})}var ke,Te=function(e){return t.invariant(/^[0-9a-f]+$/i.test(e),"Message must be a hex string"),{message:e}},Ue=function(){return{authenticate:Se,unauthenticate:xe,authorization:Ee,signUserMessage:ge,verifyUserSignatures:ye,subscribe:Fe,snapshot:De}};Ue.authenticate=Se,Ue.unauthenticate=xe,Ue.authorization=Ee,Ue.signUserMessage=ge,Ue.verifyUserSignatures=ye,Ue.subscribe=Fe,Ue.snapshot=De;var _e=function(t){try{return Promise.resolve(e.send([e.getTransactionStatus(t)]).then(e.decode))}catch(e){return Promise.reject(e)}},Ve=function(e){return e.status>=4},Be=function(e){return e.status>=3},Me=function(e){return e.status>=2},ze=((ke={})[n.INIT]=function(e){try{return Promise.resolve(_e(e.self())).then(function(t){Ve(t)||setTimeout(function(){return e.sendSelf("POLL")},2500),e.merge(t)})}catch(e){return Promise.reject(e)}},ke[n.SUBSCRIBE]=function(e,t){e.subscribe(t.from),e.send(t.from,n.UPDATED,e.all())},ke[n.UNSUBSCRIBE]=function(e,t){e.unsubscribe(t.from)},ke[n.SNAPSHOT]=function(e,t){try{return t.reply(e.all()),Promise.resolve()}catch(e){return Promise.reject(e)}},ke.POLL=function(e){try{return Promise.resolve(_e(e.self())).then(function(t){var r,o;Ve(t)||setTimeout(function(){return e.sendSelf("POLL")},2500),r=e.all(),o=t,JSON.stringify(r)!==JSON.stringify(o)&&e.broadcast(n.UPDATED,t),e.merge(t)})}catch(e){return Promise.reject(e)}},ke),We=function(e){if("object"==typeof e&&(e=e.transactionId),null==e)throw new Error("transactionId required");return e},He=function(e){return n.spawn(ze,We(e))};function Ye(e){function t(t){return n.subscriber(We(e),He,t)}function r(e){return function(r){void 0===r&&(r={});var n=r.suppress||!1;return new Promise(function(r,o){var i=t(function(t){t.statusCode&&!n?(o(t.errorMessage),i()):e(t)&&(r(t),i())})})}}return{snapshot:function(){return n.snapshoter(e,He)},subscribe:t,onceFinalized:r(Me),onceExecuted:r(Be),onceSealed:r(Ve)}}Ye.isUnknown=function(e){return e.status>=0},Ye.isPending=function(e){return e.status>=1},Ye.isFinalized=Me,Ye.isExecuted=Be,Ye.isSealed=Ve,Ye.isExpired=function(e){return 5===e.status};var qe,Je=function(t){try{var r=setTimeout;return Promise.resolve(e.config().get("fcl.eventPollRate",1e4)).then(function(e){return r(function(){return t.sendSelf("TICK")},e)})}catch(e){return Promise.reject(e)}},Ke=((qe={}).TICK=function(t){try{if(!t.hasSubs())return Promise.resolve();var r=t.get("hwm"),n=function(){if(null==r){var n=t.put;return Promise.resolve(e.latestBlock()).then(function(e){n.call(t,"hwm",e);var r=t.put;return Promise.resolve(Je(t)).then(function(e){r.call(t,"tick",e)})})}return Promise.resolve(e.latestBlock()).then(function(n){return t.put("hwm",n),Promise.resolve(e.send([getEvents(t.self(),r.height,n.height-1)]).then(e.decode)).then(function(e){for(var r,n=C(e);!(r=n()).done;)t.broadcast("UPDATED",r.value.data);var o=t.put;return Promise.resolve(Je(t)).then(function(e){o.call(t,"tick",e)})})})}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},qe[n.SUBSCRIBE]=function(e,t){try{var r=function(){e.subscribe(t.from)},n=function(){if(!e.hasSubs()){var t=e.put;return Promise.resolve(Je(e)).then(function(r){t.call(e,"tick",r)})}}();return Promise.resolve(n&&n.then?n.then(r):r())}catch(e){return Promise.reject(e)}},qe[n.UNSUBSCRIBE]=function(e,t){e.unsubscribe(t.from),e.hasSubs()||(clearTimeout(e.get("tick")),e.delete("tick"),e.delete("hwm"))},qe),Ge=function(e){return n.spawn(Ke,e)},Ze=function(e,t){void 0===t&&(t={}),window.location!==window.parent.location?window.parent.postMessage(b({},t,{type:e}),"*"):window.opener.postMessage(b({},t,{type:e}),"*")},$e={__proto__:null,sendMsgToFCL:Ze,close:function(){Ze("FCL:VIEW:CLOSE")},approve:function(e){Ze("FCL:VIEW:RESPONSE",{f_type:"PollingResponse",f_vsn:"1.0.0",status:"APPROVED",reason:null,data:e})},decline:function(e){Ze("FCL:VIEW:RESPONSE",{f_type:"PollingResponse",f_vsn:"1.0.0",status:"DECLINED",reason:e,data:null})},onMessageFromFCL:function(e,t){void 0===t&&(t=function(){});var r=function(r){var n=r.data;"object"==typeof n&&null!=typeof n&&n.type===e&&t(function(e){var t;return e.deprecated&&console.warn("DEPRECATION NOTICE",e.deprecated.message),null==e||null==(t=e.body)||delete t.interaction,e}(n))};return window.addEventListener("message",r),function(){return window.removeEventListener("message",r)}},encodeMessageFromSignable:e.encodeMessageFromSignable,CompositeSignature:function(e,t,r){this.f_type=I.f_type,this.f_vsn=I.f_vsn,this.addr=o.withPrefix(e),this.keyId=Number(t),this.signature=r}},Xe=Ue().authorization,Qe=d;Object.defineProperty(exports,"TestUtils",{enumerable:!0,get:function(){return e.TestUtils}}),Object.defineProperty(exports,"account",{enumerable:!0,get:function(){return e.account}}),Object.defineProperty(exports,"arg",{enumerable:!0,get:function(){return e.arg}}),Object.defineProperty(exports,"args",{enumerable:!0,get:function(){return e.args}}),Object.defineProperty(exports,"atBlockHeight",{enumerable:!0,get:function(){return e.atBlockHeight}}),Object.defineProperty(exports,"atBlockId",{enumerable:!0,get:function(){return e.atBlockId}}),Object.defineProperty(exports,"authorization",{enumerable:!0,get:function(){return e.authorization}}),Object.defineProperty(exports,"authorizations",{enumerable:!0,get:function(){return e.authorizations}}),Object.defineProperty(exports,"build",{enumerable:!0,get:function(){return e.build}}),Object.defineProperty(exports,"config",{enumerable:!0,get:function(){return e.config}}),Object.defineProperty(exports,"createSignableVoucher",{enumerable:!0,get:function(){return e.createSignableVoucher}}),Object.defineProperty(exports,"decode",{enumerable:!0,get:function(){return e.decode}}),Object.defineProperty(exports,"getAccount",{enumerable:!0,get:function(){return e.getAccount}}),Object.defineProperty(exports,"getBlock",{enumerable:!0,get:function(){return e.getBlock}}),Object.defineProperty(exports,"getBlockByHeight",{enumerable:!0,get:function(){return e.getBlockByHeight}}),Object.defineProperty(exports,"getBlockById",{enumerable:!0,get:function(){return e.getBlockById}}),Object.defineProperty(exports,"getBlockHeader",{enumerable:!0,get:function(){return e.getBlockHeader}}),Object.defineProperty(exports,"getCollection",{enumerable:!0,get:function(){return e.getCollection}}),Object.defineProperty(exports,"getEvents",{enumerable:!0,get:function(){return e.getEvents}}),Object.defineProperty(exports,"getEventsAtBlockHeightRange",{enumerable:!0,get:function(){return e.getEventsAtBlockHeightRange}}),Object.defineProperty(exports,"getEventsAtBlockIds",{enumerable:!0,get:function(){return e.getEventsAtBlockIds}}),Object.defineProperty(exports,"getLatestBlock",{enumerable:!0,get:function(){return e.getLatestBlock}}),Object.defineProperty(exports,"getTransaction",{enumerable:!0,get:function(){return e.getTransaction}}),Object.defineProperty(exports,"getTransactionStatus",{enumerable:!0,get:function(){return e.getTransactionStatus}}),Object.defineProperty(exports,"invariant",{enumerable:!0,get:function(){return e.invariant}}),Object.defineProperty(exports,"isBad",{enumerable:!0,get:function(){return e.isBad}}),Object.defineProperty(exports,"isOk",{enumerable:!0,get:function(){return e.isOk}}),Object.defineProperty(exports,"latestBlock",{enumerable:!0,get:function(){return e.latestBlock}}),Object.defineProperty(exports,"limit",{enumerable:!0,get:function(){return e.limit}}),Object.defineProperty(exports,"param",{enumerable:!0,get:function(){return e.param}}),Object.defineProperty(exports,"params",{enumerable:!0,get:function(){return e.params}}),Object.defineProperty(exports,"payer",{enumerable:!0,get:function(){return e.payer}}),Object.defineProperty(exports,"ping",{enumerable:!0,get:function(){return e.ping}}),Object.defineProperty(exports,"pipe",{enumerable:!0,get:function(){return e.pipe}}),Object.defineProperty(exports,"proposer",{enumerable:!0,get:function(){return e.proposer}}),Object.defineProperty(exports,"ref",{enumerable:!0,get:function(){return e.ref}}),Object.defineProperty(exports,"script",{enumerable:!0,get:function(){return e.script}}),Object.defineProperty(exports,"send",{enumerable:!0,get:function(){return e.send}}),Object.defineProperty(exports,"transaction",{enumerable:!0,get:function(){return e.transaction}}),Object.defineProperty(exports,"validator",{enumerable:!0,get:function(){return e.validator}}),Object.defineProperty(exports,"why",{enumerable:!0,get:function(){return e.why}}),Object.defineProperty(exports,"display",{enumerable:!0,get:function(){return o.display}}),Object.defineProperty(exports,"sansPrefix",{enumerable:!0,get:function(){return o.sansPrefix}}),Object.defineProperty(exports,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(exports,"cadence",{enumerable:!0,get:function(){return s.template}}),Object.defineProperty(exports,"cdc",{enumerable:!0,get:function(){return s.template}}),exports.VERSION="0.0.77",exports.WalletUtils=$e,exports.authenticate=function(){return Ue().authenticate()},exports.authz=Xe,exports.currentUser=Ue,exports.events=function(e){return{subscribe:function(t){return n.subscriber(e,Ge,t)}}},exports.logIn=function(){return Ue().authenticate()},exports.mutate=function(e){void 0===e&&(e={});try{return Promise.resolve(function(r,n){try{var o=Promise.resolve(function(e){try{return t.invariant(h(e),"mutate(opts) -- opts is required"),t.invariant(v(e),"mutate(opts) -- opts must be an object"),t.invariant(h(e.cadence),"mutate({ cadence }) -- cadence is required"),t.invariant(m(e.cadence),"mutate({ cadence }) -- cadence must be a string"),Promise.resolve(c.config.get("accessNode.api")).then(function(e){t.invariant(e,'Required value for "accessNode.api" not defined in config. See: https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration')})}catch(e){return Promise.reject(e)}}(e)).then(function(){return Promise.resolve(c.config().get("fcl.authz",Ue().authorization)).then(function(t){return c.send([c.transaction(e.cadence),c.args(E(e.args||[])),e.limit&&g(e.limit)&&c.limit(e.limit),c.proposer(e.proposer||e.authz||t),c.payer(e.payer||e.authz||t),c.authorizations(e.authorizations||[e.authz||t])]).then(c.decode)})})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},exports.query=P,exports.reauthenticate=function(){return Ue().unauthenticate(),Ue().authenticate()},exports.serialize=function(t,r){void 0===t&&(t=[]),void 0===r&&(r={});try{return Promise.resolve(e.config.first(["sdk.resolve"],r.resolve||e.resolve)).then(function(r){function n(){return Promise.resolve(r(t)).then(function(t){return JSON.stringify(e.createSignableVoucher(t),null,2)})}var o=function(){if(Array.isArray(t))return Promise.resolve(e.pipe(e.interaction(),t)).then(function(e){t=e})}();return o&&o.then?o.then(n):n()})}catch(e){return Promise.reject(e)}},exports.signUp=function(){return Ue().authenticate()},exports.t=Qe,exports.tx=Ye,exports.unauthenticate=function(){return Ue().unauthenticate()},exports.verifyUserSignatures=pe;


},{"@onflow/rlp":4,"@onflow/sdk":5,"@onflow/types":6,"@onflow/util-actor":7,"@onflow/util-address":8,"@onflow/util-invariant":9,"@onflow/util-template":10,"@onflow/util-uid":11}]},{},[])("@onflow/fcl")
});
