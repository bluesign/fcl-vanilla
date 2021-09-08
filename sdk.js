     window.global = window

! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var o = t();
        for (var r in o)("object" == typeof exports ? exports : e)[r] = o[r]
    }
}(global, (function() {
    return function(e) {
        var t = {};

        function o(r) {
            if (t[r]) return t[r].exports;
            var s = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(s.exports, s, s.exports, o), s.l = !0, s.exports
        }
        return o.m = e, o.c = t, o.d = function(e, t, r) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (o.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var s in e) o.d(r, s, function(t) {
                    return e[t]
                }.bind(null, s));
            return r
        }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 21)
    }([function(module, exports) {
        var $jscomp = $jscomp || {};
        $jscomp.scope = {}, $jscomp.findInternal = function(e, t, o) {
            e instanceof String && (e = String(e));
            for (var r = e.length, s = 0; s < r; s++) {
                var n = e[s];
                if (t.call(o, n, s, e)) return {
                    i: s,
                    v: n
                }
            }
            return {
                i: -1,
                v: void 0
            }
        }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, o) {
            e != Array.prototype && e != Object.prototype && (e[t] = o.value)
        }, $jscomp.getGlobal = function(e) {
            return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e
        }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(e, t, o, r) {
            if (t) {
                for (o = $jscomp.global, e = e.split("."), r = 0; r < e.length - 1; r++) {
                    var s = e[r];
                    s in o || (o[s] = {}), o = o[s]
                }(t = t(r = o[e = e[e.length - 1]])) != r && null != t && $jscomp.defineProperty(o, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        }, $jscomp.polyfill("Array.prototype.findIndex", (function(e) {
            return e || function(e, t) {
                return $jscomp.findInternal(this, e, t).i
            }
        }), "es6", "es3"), $jscomp.checkStringArgs = function(e, t, o) {
            if (null == e) throw new TypeError("The 'this' value for String.prototype." + o + " must not be null or undefined");
            if (t instanceof RegExp) throw new TypeError("First argument to String.prototype." + o + " must not be a regular expression");
            return e + ""
        }, $jscomp.polyfill("String.prototype.endsWith", (function(e) {
            return e || function(e, t) {
                var o = $jscomp.checkStringArgs(this, e, "endsWith");
                e += "", void 0 === t && (t = o.length), t = Math.max(0, Math.min(0 | t, o.length));
                for (var r = e.length; 0 < r && 0 < t;)
                    if (o[--t] != e[--r]) return !1;
                return 0 >= r
            }
        }), "es6", "es3"), $jscomp.polyfill("Array.prototype.find", (function(e) {
            return e || function(e, t) {
                return $jscomp.findInternal(this, e, t).v
            }
        }), "es6", "es3"), $jscomp.polyfill("String.prototype.startsWith", (function(e) {
            return e || function(e, t) {
                var o = $jscomp.checkStringArgs(this, e, "startsWith");
                e += "";
                var r = o.length,
                    s = e.length;
                t = Math.max(0, Math.min(0 | t, o.length));
                for (var n = 0; n < s && t < r;)
                    if (o[t++] != e[n++]) return !1;
                return n >= s
            }
        }), "es6", "es3"), $jscomp.polyfill("String.prototype.repeat", (function(e) {
            return e || function(e) {
                var t = $jscomp.checkStringArgs(this, null, "repeat");
                if (0 > e || 1342177279 < e) throw new RangeError("Invalid count value");
                e |= 0;
                for (var o = ""; e;) 1 & e && (o += t), (e >>>= 1) && (t += t);
                return o
            }
        }), "es6", "es3");
        var COMPILED = !0,
            goog = goog || {};
        goog.global = this || self, goog.isDef = function(e) {
            return void 0 !== e
        }, goog.isString = function(e) {
            return "string" == typeof e
        }, goog.isBoolean = function(e) {
            return "boolean" == typeof e
        }, goog.isNumber = function(e) {
            return "number" == typeof e
        }, goog.exportPath_ = function(e, t, o) {
            e = e.split("."), o = o || goog.global, e[0] in o || void 0 === o.execScript || o.execScript("var " + e[0]);
            for (var r; e.length && (r = e.shift());) !e.length && goog.isDef(t) ? o[r] = t : o = o[r] && o[r] !== Object.prototype[r] ? o[r] : o[r] = {}
        }, goog.define = function(e, t) {
            if (!COMPILED) {
                var o = goog.global.CLOSURE_UNCOMPILED_DEFINES,
                    r = goog.global.CLOSURE_DEFINES;
                o && void 0 === o.nodeType && Object.prototype.hasOwnProperty.call(o, e) ? t = o[e] : r && void 0 === r.nodeType && Object.prototype.hasOwnProperty.call(r, e) && (t = r[e])
            }
            return t
        }, goog.FEATURESET_YEAR = 2012, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, goog.provide = function(e) {
            if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
            if (!COMPILED && goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
            goog.constructNamespace_(e)
        }, goog.constructNamespace_ = function(e, t) {
            if (!COMPILED) {
                delete goog.implicitNamespaces_[e];
                for (var o = e;
                    (o = o.substring(0, o.lastIndexOf("."))) && !goog.getObjectByName(o);) goog.implicitNamespaces_[o] = !0
            }
            goog.exportPath_(e, t)
        }, goog.getScriptNonce = function(e) {
            return e && e != goog.global ? goog.getScriptNonce_(e.document) : (null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)), goog.cspNonce_)
        }, goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/, goog.cspNonce_ = null, goog.getScriptNonce_ = function(e) {
            return (e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(e) ? e : ""
        }, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function(e) {
            if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
            if (!goog.isInGoogModuleLoader_()) throw Error("Module " + e + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
            if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
            if (goog.moduleLoaderState_.moduleName = e, !COMPILED) {
                if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                delete goog.implicitNamespaces_[e]
            }
        }, goog.module.get = function(e) {
            return goog.module.getInternal_(e)
        }, goog.module.getInternal_ = function(e) {
            if (!COMPILED) {
                if (e in goog.loadedModules_) return goog.loadedModules_[e].exports;
                if (!goog.implicitNamespaces_[e]) return null != (e = goog.getObjectByName(e)) ? e : null
            }
            return null
        }, goog.ModuleType = {
            ES6: "es6",
            GOOG: "goog"
        }, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function() {
            return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
        }, goog.isInGoogModuleLoader_ = function() {
            return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
        }, goog.isInEs6ModuleLoader_ = function() {
            if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return !0;
            var e = goog.global.$jscomp;
            return !!e && ("function" == typeof e.getCurrentModulePath && !!e.getCurrentModulePath())
        }, goog.module.declareLegacyNamespace = function() {
            if (!COMPILED && !goog.isInGoogModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
            if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
            goog.moduleLoaderState_.declareLegacyNamespace = !0
        }, goog.declareModuleId = function(e) {
            if (!COMPILED) {
                if (!goog.isInEs6ModuleLoader_()) throw Error("goog.declareModuleId may only be called from within an ES6 module");
                if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) throw Error("goog.declareModuleId may only be called once per module.");
                if (e in goog.loadedModules_) throw Error('Module with namespace "' + e + '" already exists.')
            }
            if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = e;
            else {
                var t = goog.global.$jscomp;
                if (!t || "function" != typeof t.getCurrentModulePath) throw Error('Module with namespace "' + e + '" has been loaded incorrectly.');
                t = t.require(t.getCurrentModulePath()), goog.loadedModules_[e] = {
                    exports: t,
                    type: goog.ModuleType.ES6,
                    moduleId: e
                }
            }
        }, goog.setTestOnly = function(e) {
            if (goog.DISALLOW_TEST_ONLY_CODE) throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
        }, goog.forwardDeclare = function(e) {}, COMPILED || (goog.isProvided_ = function(e) {
            return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
        }, goog.implicitNamespaces_ = {
            "goog.module": !0
        }), goog.getObjectByName = function(e, t) {
            e = e.split("."), t = t || goog.global;
            for (var o = 0; o < e.length; o++)
                if (t = t[e[o]], !goog.isDefAndNotNull(t)) return null;
            return t
        }, goog.globalize = function(e, t) {
            for (var o in t = t || goog.global, e) t[o] = e[o]
        }, goog.addDependency = function(e, t, o, r) {
            !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(e, t, o, r)
        }, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function(e) {
            goog.global.console && goog.global.console.error(e)
        }, goog.require = function(e) {
            if (!COMPILED) {
                if (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(e), goog.isProvided_(e)) {
                    if (goog.isInModuleLoader_()) return goog.module.getInternal_(e)
                } else if (goog.ENABLE_DEBUG_LOADER) {
                    var t = goog.moduleLoaderState_;
                    goog.moduleLoaderState_ = null;
                    try {
                        goog.debugLoader_.load_(e)
                    } finally {
                        goog.moduleLoaderState_ = t
                    }
                }
                return null
            }
        }, goog.requireType = function(e) {
            return {}
        }, goog.basePath = "", goog.nullFunction = function() {}, goog.abstractMethod = function() {
            throw Error("unimplemented abstract method")
        }, goog.addSingletonGetter = function(e) {
            e.instance_ = void 0, e.getInstance = function() {
                return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
            }
        }, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.TRANSPILE = "detect", goog.ASSUME_ES_MODULES_TRANSPILED = !1, goog.TRANSPILE_TO_LANGUAGE = "", goog.TRANSPILER = "transpile.js", goog.hasBadLetScoping = null, goog.useSafari10Workaround = function() {
            if (null == goog.hasBadLetScoping) {
                try {
                    var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
                } catch (e) {
                    a = !1
                }
                goog.hasBadLetScoping = a
            }
            return goog.hasBadLetScoping
        }, goog.workaroundSafari10EvalBug = function(e) {
            return "(function(){" + e + "\n;})();\n"
        }, goog.loadModule = function(e) {
            var t = goog.moduleLoaderState_;
            try {
                if (goog.moduleLoaderState_ = {
                        moduleName: "",
                        declareLegacyNamespace: !1,
                        type: goog.ModuleType.GOOG
                    }, goog.isFunction(e)) var o = e.call(void 0, {});
                else {
                    if (!goog.isString(e)) throw Error("Invalid module definition");
                    goog.useSafari10Workaround() && (e = goog.workaroundSafari10EvalBug(e)), o = goog.loadModuleFromSource_.call(void 0, e)
                }
                var r = goog.moduleLoaderState_.moduleName;
                if (!goog.isString(r) || !r) throw Error('Invalid module name "' + r + '"');
                goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(r, o) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof o && null != o && Object.seal(o), goog.loadedModules_[r] = {
                    exports: o,
                    type: goog.ModuleType.GOOG,
                    moduleId: goog.moduleLoaderState_.moduleName
                }
            } finally {
                goog.moduleLoaderState_ = t
            }
        }, goog.loadModuleFromSource_ = function(a) {
            return eval(a), {}
        }, goog.normalizePath_ = function(e) {
            e = e.split("/");
            for (var t = 0; t < e.length;) "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
            return e.join("/")
        }, goog.loadFileSync_ = function(e) {
            if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
            try {
                var t = new goog.global.XMLHttpRequest;
                return t.open("get", e, !1), t.send(), 0 == t.status || 200 == t.status ? t.responseText : null
            } catch (e) {
                return null
            }
        }, goog.transpile_ = function(e, t, o) {
            var r = goog.global.$jscomp;
            r || (goog.global.$jscomp = r = {});
            var s = r.transpile;
            if (!s) {
                var n = goog.basePath + goog.TRANSPILER,
                    i = goog.loadFileSync_(n);
                if (i) {
                    if (function() {
                            (0, eval)(i + "\n//# sourceURL=" + n)
                        }.call(goog.global), goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
                    goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile, s = (r = goog.global.$jscomp).transpile
                }
            }
            return s || (s = r.transpile = function(e, t) {
                return goog.logToConsole_(t + " requires transpilation but no transpiler was found."), e
            }), s(e, t, o)
        }, goog.typeOf = function(e) {
            var t = typeof e;
            if ("object" == t) {
                if (!e) return "null";
                if (e instanceof Array) return "array";
                if (e instanceof Object) return t;
                var o = Object.prototype.toString.call(e);
                if ("[object Window]" == o) return "object";
                if ("[object Array]" == o || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == o || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
            } else if ("function" == t && void 0 === e.call) return "object";
            return t
        }, goog.isNull = function(e) {
            return null === e
        }, goog.isDefAndNotNull = function(e) {
            return null != e
        }, goog.isArray = function(e) {
            return "array" == goog.typeOf(e)
        }, goog.isArrayLike = function(e) {
            var t = goog.typeOf(e);
            return "array" == t || "object" == t && "number" == typeof e.length
        }, goog.isDateLike = function(e) {
            return goog.isObject(e) && "function" == typeof e.getFullYear
        }, goog.isFunction = function(e) {
            return "function" == goog.typeOf(e)
        }, goog.isObject = function(e) {
            var t = typeof e;
            return "object" == t && null != e || "function" == t
        }, goog.getUid = function(e) {
            return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
        }, goog.hasUid = function(e) {
            return !!e[goog.UID_PROPERTY_]
        }, goog.removeUid = function(e) {
            null !== e && "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
            try {
                delete e[goog.UID_PROPERTY_]
            } catch (e) {}
        }, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(e) {
            var t = goog.typeOf(e);
            if ("object" == t || "array" == t) {
                if ("function" == typeof e.clone) return e.clone();
                for (var o in t = "array" == t ? [] : {}, e) t[o] = goog.cloneObject(e[o]);
                return t
            }
            return e
        }, goog.bindNative_ = function(e, t, o) {
            return e.call.apply(e.bind, arguments)
        }, goog.bindJs_ = function(e, t, o) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var o = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(o, r), e.apply(t, o)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }, goog.bind = function(e, t, o) {
            return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, goog.bind.apply(null, arguments)
        }, goog.partial = function(e, t) {
            var o = Array.prototype.slice.call(arguments, 1);
            return function() {
                var t = o.slice();
                return t.push.apply(t, arguments), e.apply(this, t)
            }
        }, goog.mixin = function(e, t) {
            for (var o in t) e[o] = t[o]
        }, goog.now = goog.TRUSTED_SITE && Date.now || function() {
            return +new Date
        }, goog.globalEval = function(e) {
            if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
            else {
                if (!goog.global.eval) throw Error("goog.globalEval not available");
                if (null == goog.evalWorksForGlobals_) {
                    try {
                        goog.global.eval("var _evalTest_ = 1;")
                    } catch (e) {}
                    if (void 0 !== goog.global._evalTest_) {
                        try {
                            delete goog.global._evalTest_
                        } catch (e) {}
                        goog.evalWorksForGlobals_ = !0
                    } else goog.evalWorksForGlobals_ = !1
                }
                if (goog.evalWorksForGlobals_) goog.global.eval(e);
                else {
                    var t = goog.global.document,
                        o = t.createElement("SCRIPT");
                    o.type = "text/javascript", o.defer = !1, o.appendChild(t.createTextNode(e)), t.head.appendChild(o), t.head.removeChild(o)
                }
            }
        }, goog.evalWorksForGlobals_ = null, goog.getCssName = function(e, t) {
            if ("." == String(e).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e);
            var o = function(e) {
                    return goog.cssNameMapping_[e] || e
                },
                r = function(e) {
                    e = e.split("-");
                    for (var t = [], r = 0; r < e.length; r++) t.push(o(e[r]));
                    return t.join("-")
                };
            return r = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? o : r : function(e) {
                return e
            }, e = t ? e + "-" + r(t) : r(e), goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(e) : e
        }, goog.setCssNameMapping = function(e, t) {
            goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t
        }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function(e, t, o) {
            return o && o.html && (e = e.replace(/</g, "&lt;")), t && (e = e.replace(/\{\$([^}]+)}/g, (function(e, o) {
                return null != t && o in t ? t[o] : e
            }))), e
        }, goog.getMsgWithFallback = function(e, t) {
            return e
        }, goog.exportSymbol = function(e, t, o) {
            goog.exportPath_(e, t, o)
        }, goog.exportProperty = function(e, t, o) {
            e[t] = o
        }, goog.inherits = function(e, t) {
            function o() {}
            o.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new o, e.prototype.constructor = e, e.base = function(e, o, r) {
                for (var s = Array(arguments.length - 2), n = 2; n < arguments.length; n++) s[n - 2] = arguments[n];
                return t.prototype[o].apply(e, s)
            }
        }, goog.base = function(e, t, o) {
            var r = arguments.callee.caller;
            if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !r) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
            if (void 0 !== r.superClass_) {
                for (var s = Array(arguments.length - 1), n = 1; n < arguments.length; n++) s[n - 1] = arguments[n];
                return r.superClass_.constructor.apply(e, s)
            }
            if ("string" != typeof t && "symbol" != typeof t) throw Error("method names provided to goog.base must be a string or a symbol");
            for (s = Array(arguments.length - 2), n = 2; n < arguments.length; n++) s[n - 2] = arguments[n];
            n = !1;
            for (var i = e.constructor.prototype; i; i = Object.getPrototypeOf(i))
                if (i[t] === r) n = !0;
                else if (n) return i[t].apply(e, s);
            if (e[t] === r) return e.constructor.prototype[t].apply(e, s);
            throw Error("goog.base called from a method of one name to a method of a different name")
        }, goog.scope = function(e) {
            if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
            e.call(goog.global)
        }, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(e, t) {
            var o = t.constructor,
                r = t.statics;
            return o && o != Object.prototype.constructor || (o = function() {
                throw Error("cannot instantiate an interface (no constructor defined).")
            }), o = goog.defineClass.createSealingConstructor_(o, e), e && goog.inherits(o, e), delete t.constructor, delete t.statics, goog.defineClass.applyProperties_(o.prototype, t), null != r && (r instanceof Function ? r(o) : goog.defineClass.applyProperties_(o, r)), o
        }, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function(e, t) {
            if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
            var o = !goog.defineClass.isUnsealable_(t),
                r = function() {
                    var t = e.apply(this, arguments) || this;
                    return t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_], this.constructor === r && o && Object.seal instanceof Function && Object.seal(t), t
                };
            return r
        }, goog.defineClass.isUnsealable_ = function(e) {
            return e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
        }, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.defineClass.applyProperties_ = function(e, t) {
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            for (var r = 0; r < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; r++) o = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[r], Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }, goog.tagUnsealableClass = function(e) {
            !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
        }, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
            var e = goog.global.document;
            return null != e && "write" in e
        }, goog.isDocumentLoading_ = function() {
            var e = goog.global.document;
            return e.attachEvent ? "complete" != e.readyState : "loading" == e.readyState
        }, goog.findBasePath_ = function() {
            if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH;
            else if (goog.inHtmlDocument_()) {
                var e = goog.global.document,
                    t = e.currentScript;
                for (t = (e = t ? [t] : e.getElementsByTagName("SCRIPT")).length - 1; 0 <= t; --t) {
                    var o = e[t].src,
                        r = o.lastIndexOf("?");
                    if (r = -1 == r ? o.length : r, "base.js" == o.substr(r - 7, 7)) {
                        goog.basePath = o.substr(0, r - 7);
                        break
                    }
                }
            }
        }, goog.findBasePath_(), goog.Transpiler = function() {
            this.requiresTranspilation_ = null, this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE
        }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
            function a(t, o) {
                e ? d[t] = !0 : o() ? (c = t, d[t] = !1) : e = d[t] = !0
            }

            function b(a) {
                try {
                    return !!eval(a)
                } catch (e) {
                    return !1
                }
            }
            var c = "es3",
                d = {
                    es3: !1
                },
                e = !1,
                f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
            return a("es5", (function() {
                return b("[1,].length==1")
            })), a("es6", (function() {
                return !f.match(/Edge\/(\d+)(\.\d)*/i) && b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
            })), a("es7", (function() {
                return b("2 ** 2 == 4")
            })), a("es8", (function() {
                return b("async () => 1, true")
            })), a("es9", (function() {
                return b("({...rest} = {}), true")
            })), a("es_next", (function() {
                return !1
            })), {
                target: c,
                map: d
            }
        }, goog.Transpiler.prototype.needsTranspile = function(e, t) {
            if ("always" == goog.TRANSPILE) return !0;
            if ("never" == goog.TRANSPILE) return !1;
            if (!this.requiresTranspilation_) {
                var o = this.createRequiresTranspilation_();
                this.requiresTranspilation_ = o.map, this.transpilationTarget_ = this.transpilationTarget_ || o.target
            }
            if (e in this.requiresTranspilation_) return !!this.requiresTranspilation_[e] || !(!goog.inHtmlDocument_() || "es6" != t || "noModule" in goog.global.document.createElement("script"));
            throw Error("Unknown language mode: " + e)
        }, goog.Transpiler.prototype.transpile = function(e, t) {
            return goog.transpile_(e, t, this.transpilationTarget_)
        }, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function(e) {
            return e.replace(/<\/(SCRIPT)/gi, "\\x3c/$1")
        }, goog.DebugLoader_ = function() {
            this.dependencies_ = {}, this.idToPath_ = {}, this.written_ = {}, this.loadingDeps_ = [], this.depsToLoad_ = [], this.paused_ = !1, this.factory_ = new goog.DependencyFactory(goog.transpiler_), this.deferredCallbacks_ = {}, this.deferredQueue_ = []
        }, goog.DebugLoader_.prototype.bootstrap = function(e, t) {
            function o() {
                r && (goog.global.setTimeout(r, 0), r = null)
            }
            var r = t;
            if (e.length) {
                t = [];
                for (var s = 0; s < e.length; s++) {
                    var n = this.getPathFromDeps_(e[s]);
                    if (!n) throw Error("Unregonized namespace: " + e[s]);
                    t.push(this.dependencies_[n])
                }
                n = goog.require;
                var i = 0;
                for (s = 0; s < e.length; s++) n(e[s]), t[s].onLoad((function() {
                    ++i == e.length && o()
                }))
            } else o()
        }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
            this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1)), this.loadDeps_()
        }, goog.DebugLoader_.prototype.requested = function(e, t) {
            (e = this.getPathFromDeps_(e)) && (t || this.areDepsLoaded_(this.dependencies_[e].requires)) && (t = this.deferredCallbacks_[e]) && (delete this.deferredCallbacks_[e], t())
        }, goog.DebugLoader_.prototype.setDependencyFactory = function(e) {
            this.factory_ = e
        }, goog.DebugLoader_.prototype.load_ = function(e) {
            if (!this.getPathFromDeps_(e)) throw e = "goog.require could not find: " + e, goog.logToConsole_(e), Error(e);
            var t = this,
                o = [],
                r = function(e) {
                    var s = t.getPathFromDeps_(e);
                    if (!s) throw Error("Bad dependency path or symbol: " + e);
                    if (!t.written_[s]) {
                        for (t.written_[s] = !0, e = t.dependencies_[s], s = 0; s < e.requires.length; s++) goog.isProvided_(e.requires[s]) || r(e.requires[s]);
                        o.push(e)
                    }
                };
            r(e), e = !!this.depsToLoad_.length, this.depsToLoad_ = this.depsToLoad_.concat(o), this.paused_ || e || this.loadDeps_()
        }, goog.DebugLoader_.prototype.loadDeps_ = function() {
            for (var e = this, t = this.paused_; this.depsToLoad_.length && !t;) ! function() {
                var o = !1,
                    r = e.depsToLoad_.shift(),
                    s = !1;
                e.loading_(r);
                var n = {
                    pause: function() {
                        if (o) throw Error("Cannot call pause after the call to load.");
                        t = !0
                    },
                    resume: function() {
                        o ? e.resume_() : t = !1
                    },
                    loaded: function() {
                        if (s) throw Error("Double call to loaded.");
                        s = !0, e.loaded_(r)
                    },
                    pending: function() {
                        for (var t = [], o = 0; o < e.loadingDeps_.length; o++) t.push(e.loadingDeps_[o]);
                        return t
                    },
                    setModuleState: function(e) {
                        goog.moduleLoaderState_ = {
                            type: e,
                            moduleName: "",
                            declareLegacyNamespace: !1
                        }
                    },
                    registerEs6ModuleExports: function(e, t, o) {
                        o && (goog.loadedModules_[o] = {
                            exports: t,
                            type: goog.ModuleType.ES6,
                            moduleId: o || ""
                        })
                    },
                    registerGoogModuleExports: function(e, t) {
                        goog.loadedModules_[e] = {
                            exports: t,
                            type: goog.ModuleType.GOOG,
                            moduleId: e
                        }
                    },
                    clearModuleState: function() {
                        goog.moduleLoaderState_ = null
                    },
                    defer: function(t) {
                        if (o) throw Error("Cannot register with defer after the call to load.");
                        e.defer_(r, t)
                    },
                    areDepsLoaded: function() {
                        return e.areDepsLoaded_(r.requires)
                    }
                };
                try {
                    r.load(n)
                } finally {
                    o = !0
                }
            }();
            t && this.pause_()
        }, goog.DebugLoader_.prototype.pause_ = function() {
            this.paused_ = !0
        }, goog.DebugLoader_.prototype.resume_ = function() {
            this.paused_ && (this.paused_ = !1, this.loadDeps_())
        }, goog.DebugLoader_.prototype.loading_ = function(e) {
            this.loadingDeps_.push(e)
        }, goog.DebugLoader_.prototype.loaded_ = function(e) {
            for (var t = 0; t < this.loadingDeps_.length; t++)
                if (this.loadingDeps_[t] == e) {
                    this.loadingDeps_.splice(t, 1);
                    break
                }
            for (t = 0; t < this.deferredQueue_.length; t++)
                if (this.deferredQueue_[t] == e.path) {
                    this.deferredQueue_.splice(t, 1);
                    break
                }
            if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
                for (; this.deferredQueue_.length;) this.requested(this.deferredQueue_.shift(), !0);
            e.loaded()
        }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(e) {
            for (var t = 0; t < e.length; t++) {
                var o = this.getPathFromDeps_(e[t]);
                if (!o || !(o in this.deferredCallbacks_) && !goog.isProvided_(e[t])) return !1
            }
            return !0
        }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(e) {
            return e in this.idToPath_ ? this.idToPath_[e] : e in this.dependencies_ ? e : null
        }, goog.DebugLoader_.prototype.defer_ = function(e, t) {
            this.deferredCallbacks_[e.path] = t, this.deferredQueue_.push(e.path)
        }, goog.LoadController = function() {}, goog.LoadController.prototype.pause = function() {}, goog.LoadController.prototype.resume = function() {}, goog.LoadController.prototype.loaded = function() {}, goog.LoadController.prototype.pending = function() {}, goog.LoadController.prototype.registerEs6ModuleExports = function(e, t, o) {}, goog.LoadController.prototype.setModuleState = function(e) {}, goog.LoadController.prototype.clearModuleState = function() {}, goog.LoadController.prototype.defer = function(e) {}, goog.LoadController.prototype.areDepsLoaded = function() {}, goog.Dependency = function(e, t, o, r, s) {
            this.path = e, this.relativePath = t, this.provides = o, this.requires = r, this.loadFlags = s, this.loaded_ = !1, this.loadCallbacks_ = []
        }, goog.Dependency.prototype.getPathName = function() {
            var e = this.path,
                t = e.indexOf("://");
            return 0 <= t && (0 <= (t = (e = e.substring(t + 3)).indexOf("/")) && (e = e.substring(t + 1))), e
        }, goog.Dependency.prototype.onLoad = function(e) {
            this.loaded_ ? e() : this.loadCallbacks_.push(e)
        }, goog.Dependency.prototype.loaded = function() {
            this.loaded_ = !0;
            var e = this.loadCallbacks_;
            this.loadCallbacks_ = [];
            for (var t = 0; t < e.length; t++) e[t]()
        }, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(e) {
            var t = Math.random().toString(32);
            return goog.Dependency.callbackMap_[t] = e, t
        }, goog.Dependency.unregisterCallback_ = function(e) {
            delete goog.Dependency.callbackMap_[e]
        }, goog.Dependency.callback_ = function(e, t) {
            if (!(e in goog.Dependency.callbackMap_)) throw Error("Callback key " + e + " does not exist (was base.js loaded more than once?).");
            for (var o = goog.Dependency.callbackMap_[e], r = [], s = 1; s < arguments.length; s++) r.push(arguments[s]);
            o.apply(void 0, r)
        }, goog.Dependency.prototype.load = function(e) {
            if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause();
            else if (goog.inHtmlDocument_()) {
                var t = goog.global.document;
                if ("complete" == t.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
                    if (/\bdeps.js$/.test(this.path)) return void e.loaded();
                    throw Error('Cannot write "' + this.path + '" after document load')
                }
                if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
                    var o = goog.Dependency.registerCallback_((function(t) {
                            goog.DebugLoader_.IS_OLD_IE_ && "complete" != t.readyState || (goog.Dependency.unregisterCallback_(o), e.loaded())
                        })),
                        r = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
                    r = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + o + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + r + "><\/script>", t.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(r) : r)
                } else {
                    var s = t.createElement("script");
                    s.defer = goog.Dependency.defer_, s.async = !1, s.type = "text/javascript", (r = goog.getScriptNonce()) && s.setAttribute("nonce", r), goog.DebugLoader_.IS_OLD_IE_ ? (e.pause(), s.onreadystatechange = function() {
                        "loaded" != s.readyState && "complete" != s.readyState || (e.loaded(), e.resume())
                    }) : s.onload = function() {
                        s.onload = null, e.loaded()
                    }, s.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path, t.head.appendChild(s)
                }
            } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), e.loaded()) : e.pause()
        }, goog.Es6ModuleDependency = function(e, t, o, r, s) {
            goog.Dependency.call(this, e, t, o, r, s)
        }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(e) {
            if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? e.loaded() : e.pause();
            else if (goog.inHtmlDocument_()) {
                var t = goog.global.document,
                    o = this;
                if (goog.isDocumentLoading_()) {
                    var r = function(e, o) {
                        e = o ? '<script type="module" crossorigin>' + o + "<\/script>" : '<script type="module" crossorigin src="' + e + '"><\/script>', t.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(e) : e)
                    };
                    goog.Dependency.defer_ = !0
                } else r = function(e, o) {
                    var r = t.createElement("script");
                    r.defer = !0, r.async = !1, r.type = "module", r.setAttribute("crossorigin", !0);
                    var s = goog.getScriptNonce();
                    s && r.setAttribute("nonce", s), o ? r.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(o) : o : r.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(e) : e, t.head.appendChild(r)
                };
                var s = goog.Dependency.registerCallback_((function() {
                    goog.Dependency.unregisterCallback_(s), e.setModuleState(goog.ModuleType.ES6)
                }));
                r(void 0, 'goog.Dependency.callback_("' + s + '")'), r(this.path, void 0);
                var n = goog.Dependency.registerCallback_((function(t) {
                    goog.Dependency.unregisterCallback_(n), e.registerEs6ModuleExports(o.path, t, goog.moduleLoaderState_.moduleName)
                }));
                r(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + n + '", m)');
                var i = goog.Dependency.registerCallback_((function() {
                    goog.Dependency.unregisterCallback_(i), e.clearModuleState(), e.loaded()
                }));
                r(void 0, 'goog.Dependency.callback_("' + i + '")')
            } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), e.pause()
        }, goog.TransformedDependency = function(e, t, o, r, s) {
            goog.Dependency.call(this, e, t, o, r, s), this.contents_ = null, this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"))
        }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(e) {
            function t() {
                r.contents_ = goog.loadFileSync_(r.path), r.contents_ && (r.contents_ = r.transform(r.contents_), r.contents_ && (r.contents_ += "\n//# sourceURL=" + r.path))
            }

            function o() {
                if (r.lazyFetch_ && t(), r.contents_) {
                    s && e.setModuleState(goog.ModuleType.ES6);
                    try {
                        var o = r.contents_;
                        if (r.contents_ = null, goog.globalEval(o), s) var n = goog.moduleLoaderState_.moduleName
                    } finally {
                        s && e.clearModuleState()
                    }
                    s && goog.global.$jscomp.require.ensure([r.getPathName()], (function() {
                        e.registerEs6ModuleExports(r.path, goog.global.$jscomp.require(r.getPathName()), n)
                    })), e.loaded()
                }
            }
            var r = this;
            if (goog.global.CLOSURE_IMPORT_SCRIPT) t(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, e.loaded()) : e.pause();
            else {
                var s = this.loadFlags.module == goog.ModuleType.ES6;
                this.lazyFetch_ || t();
                var n = 1 < e.pending().length,
                    i = n && goog.DebugLoader_.IS_OLD_IE_;
                if (n = goog.Dependency.defer_ && (n || goog.isDocumentLoading_()), i || n) e.defer((function() {
                    o()
                }));
                else {
                    var a = goog.global.document;
                    if (i = goog.inHtmlDocument_() && "ActiveXObject" in goog.global, s && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !i) {
                        goog.Dependency.defer_ = !0, e.pause();
                        var g = a.onreadystatechange;
                        a.onreadystatechange = function() {
                            "interactive" == a.readyState && (a.onreadystatechange = g, o(), e.resume()), goog.isFunction(g) && g.apply(void 0, arguments)
                        }
                    } else !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? function() {
                        var e = goog.global.document,
                            t = goog.Dependency.registerCallback_((function() {
                                goog.Dependency.unregisterCallback_(t), o()
                            })),
                            r = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + t + '");') + "<\/script>";
                        e.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(r) : r)
                    }() : o()
                }
            }
        }, goog.TransformedDependency.prototype.transform = function(e) {}, goog.TranspiledDependency = function(e, t, o, r, s, n) {
            goog.TransformedDependency.call(this, e, t, o, r, s), this.transpiler = n
        }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(e) {
            return this.transpiler.transpile(e, this.getPathName())
        }, goog.PreTranspiledEs6ModuleDependency = function(e, t, o, r, s) {
            goog.TransformedDependency.call(this, e, t, o, r, s)
        }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(e) {
            return e
        }, goog.GoogModuleDependency = function(e, t, o, r, s, n, i) {
            goog.TransformedDependency.call(this, e, t, o, r, s), this.needsTranspile_ = n, this.transpiler_ = i
        }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(e) {
            return this.needsTranspile_ && (e = this.transpiler_.transpile(e, this.getPathName())), goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(e + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + e + "\n;return exports});\n//# sourceURL=" + this.path + "\n"
        }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(e, t, o, r) {
            t = t || [], e = e.replace(/\\/g, "/");
            var s = goog.normalizePath_(goog.basePath + e);
            for (r && "boolean" != typeof r || (r = r ? {
                    module: goog.ModuleType.GOOG
                } : {}), o = this.factory_.createDependency(s, e, t, o, r, goog.transpiler_.needsTranspile(r.lang || "es3", r.module)), this.dependencies_[s] = o, o = 0; o < t.length; o++) this.idToPath_[t[o]] = s;
            this.idToPath_[e] = s
        }, goog.DependencyFactory = function(e) {
            this.transpiler = e
        }, goog.DependencyFactory.prototype.createDependency = function(e, t, o, r, s, n) {
            return s.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(e, t, o, r, s, n, this.transpiler) : n ? new goog.TranspiledDependency(e, t, o, r, s, this.transpiler) : s.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(e, t, o, r, s) : new goog.Es6ModuleDependency(e, t, o, r, s) : new goog.Dependency(e, t, o, r, s)
        }, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function() {
            goog.debugLoader_.loadClosureDeps()
        }, goog.setDependencyFactory = function(e) {
            goog.debugLoader_.setDependencyFactory(e)
        }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(e, t) {
            goog.debugLoader_.bootstrap(e, t)
        }), goog.TRUSTED_TYPES_POLICY_NAME = "", goog.identity_ = function(e) {
            return e
        }, goog.createTrustedTypesPolicy = function(e) {
            var t = null;
            if ("undefined" == typeof TrustedTypes || !TrustedTypes.createPolicy) return t;
            try {
                t = TrustedTypes.createPolicy(e, {
                    createHTML: goog.identity_,
                    createScript: goog.identity_,
                    createScriptURL: goog.identity_,
                    createURL: goog.identity_
                })
            } catch (e) {
                goog.logToConsole_(e.message)
            }
            return t
        }, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
        var jspb = {
            BinaryConstants: {},
            ConstBinaryMessage: function() {},
            BinaryMessage: function() {}
        };
        jspb.BinaryConstants.FieldType = {
            INVALID: -1,
            DOUBLE: 1,
            FLOAT: 2,
            INT64: 3,
            UINT64: 4,
            INT32: 5,
            FIXED64: 6,
            FIXED32: 7,
            BOOL: 8,
            STRING: 9,
            GROUP: 10,
            MESSAGE: 11,
            BYTES: 12,
            UINT32: 13,
            ENUM: 14,
            SFIXED32: 15,
            SFIXED64: 16,
            SINT32: 17,
            SINT64: 18,
            FHASH64: 30,
            VHASH64: 31
        }, jspb.BinaryConstants.WireType = {
            INVALID: -1,
            VARINT: 0,
            FIXED64: 1,
            DELIMITED: 2,
            START_GROUP: 3,
            END_GROUP: 4,
            FIXED32: 5
        }, jspb.BinaryConstants.FieldTypeToWireType = function(e) {
            var t = jspb.BinaryConstants.FieldType,
                o = jspb.BinaryConstants.WireType;
            switch (e) {
                case t.INT32:
                case t.INT64:
                case t.UINT32:
                case t.UINT64:
                case t.SINT32:
                case t.SINT64:
                case t.BOOL:
                case t.ENUM:
                case t.VHASH64:
                    return o.VARINT;
                case t.DOUBLE:
                case t.FIXED64:
                case t.SFIXED64:
                case t.FHASH64:
                    return o.FIXED64;
                case t.STRING:
                case t.MESSAGE:
                case t.BYTES:
                    return o.DELIMITED;
                case t.FLOAT:
                case t.FIXED32:
                case t.SFIXED32:
                    return o.FIXED32;
                default:
                    return o.INVALID
            }
        }, jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1, jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60, jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54, jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22, jspb.BinaryConstants.FLOAT64_EPS = 5e-324, jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324, jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292, jspb.BinaryConstants.TWO_TO_20 = 1048576, jspb.BinaryConstants.TWO_TO_23 = 8388608, jspb.BinaryConstants.TWO_TO_31 = 2147483648, jspb.BinaryConstants.TWO_TO_32 = 4294967296, jspb.BinaryConstants.TWO_TO_52 = 4503599627370496, jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000, jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000, jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0", goog.dom = {}, goog.dom.NodeType = {
            ELEMENT: 1,
            ATTRIBUTE: 2,
            TEXT: 3,
            CDATA_SECTION: 4,
            ENTITY_REFERENCE: 5,
            ENTITY: 6,
            PROCESSING_INSTRUCTION: 7,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11,
            NOTATION: 12
        }, goog.debug = {}, goog.debug.Error = function(e) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error);
            else {
                var t = Error().stack;
                t && (this.stack = t)
            }
            e && (this.message = String(e)), this.reportErrorToServer = !0
        }, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", goog.asserts = {}, goog.asserts.ENABLE_ASSERTS = goog.DEBUG, goog.asserts.AssertionError = function(e, t) {
            goog.debug.Error.call(this, goog.asserts.subs_(e, t)), this.messagePattern = e
        }, goog.inherits(goog.asserts.AssertionError, goog.debug.Error), goog.asserts.AssertionError.prototype.name = "AssertionError", goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
            throw e
        }, goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER, goog.asserts.subs_ = function(e, t) {
            for (var o = "", r = (e = e.split("%s")).length - 1, s = 0; s < r; s++) o += e[s] + (s < t.length ? t[s] : "%s");
            return o + e[r]
        }, goog.asserts.doAssertFailure_ = function(e, t, o, r) {
            var s = "Assertion failed";
            if (o) {
                s += ": " + o;
                var n = r
            } else e && (s += ": " + e, n = t);
            e = new goog.asserts.AssertionError("" + s, n || []), goog.asserts.errorHandler_(e)
        }, goog.asserts.setErrorHandler = function(e) {
            goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
        }, goog.asserts.assert = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertExists = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && null == e && goog.asserts.doAssertFailure_("Expected to exist: %s.", [e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.fail = function(e, t) {
            goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
        }, goog.asserts.assertNumber = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertString = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertFunction = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertObject = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertArray = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertBoolean = function(e, t, o) {
            return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertElement = function(e, t, o) {
            return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertInstanceof = function(e, t, o, r) {
            return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(t), goog.asserts.getType_(e)], o, Array.prototype.slice.call(arguments, 3)), e
        }, goog.asserts.assertFinite = function(e, t, o) {
            return !goog.asserts.ENABLE_ASSERTS || "number" == typeof e && isFinite(e) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [e], t, Array.prototype.slice.call(arguments, 2)), e
        }, goog.asserts.assertObjectPrototypeIsIntact = function() {
            for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
        }, goog.asserts.getType_ = function(e) {
            return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
        }, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR, goog.array.peek = function(e) {
            return e[e.length - 1]
        }, goog.array.last = goog.array.peek, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, t, o)
        } : function(e, t, o) {
            if (o = null == o ? 0 : 0 > o ? Math.max(0, e.length + o) : o, goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.indexOf(t, o) : -1;
            for (; o < e.length; o++)
                if (o in e && e[o] === t) return o;
            return -1
        }, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.lastIndexOf.call(e, t, null == o ? e.length - 1 : o)
        } : function(e, t, o) {
            if (0 > (o = null == o ? e.length - 1 : o) && (o = Math.max(0, e.length + o)), goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, o) : -1;
            for (; 0 <= o; o--)
                if (o in e && e[o] === t) return o;
            return -1
        }, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(e, t, o) {
            goog.asserts.assert(null != e.length), Array.prototype.forEach.call(e, t, o)
        } : function(e, t, o) {
            for (var r = e.length, s = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++) n in s && t.call(o, s[n], n, e)
        }, goog.array.forEachRight = function(e, t, o) {
            var r = e.length,
                s = goog.isString(e) ? e.split("") : e;
            for (--r; 0 <= r; --r) r in s && t.call(o, s[r], r, e)
        }, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.filter.call(e, t, o)
        } : function(e, t, o) {
            for (var r = e.length, s = [], n = 0, i = goog.isString(e) ? e.split("") : e, a = 0; a < r; a++)
                if (a in i) {
                    var g = i[a];
                    t.call(o, g, a, e) && (s[n++] = g)
                }
            return s
        }, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.map.call(e, t, o)
        } : function(e, t, o) {
            for (var r = e.length, s = Array(r), n = goog.isString(e) ? e.split("") : e, i = 0; i < r; i++) i in n && (s[i] = t.call(o, n[i], i, e));
            return s
        }, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(e, t, o, r) {
            return goog.asserts.assert(null != e.length), r && (t = goog.bind(t, r)), Array.prototype.reduce.call(e, t, o)
        } : function(e, t, o, r) {
            var s = o;
            return goog.array.forEach(e, (function(o, n) {
                s = t.call(r, s, o, n, e)
            })), s
        }, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(e, t, o, r) {
            return goog.asserts.assert(null != e.length), goog.asserts.assert(null != t), r && (t = goog.bind(t, r)), Array.prototype.reduceRight.call(e, t, o)
        } : function(e, t, o, r) {
            var s = o;
            return goog.array.forEachRight(e, (function(o, n) {
                s = t.call(r, s, o, n, e)
            })), s
        }, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.some.call(e, t, o)
        } : function(e, t, o) {
            for (var r = e.length, s = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++)
                if (n in s && t.call(o, s[n], n, e)) return !0;
            return !1
        }, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(e, t, o) {
            return goog.asserts.assert(null != e.length), Array.prototype.every.call(e, t, o)
        } : function(e, t, o) {
            for (var r = e.length, s = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++)
                if (n in s && !t.call(o, s[n], n, e)) return !1;
            return !0
        }, goog.array.count = function(e, t, o) {
            var r = 0;
            return goog.array.forEach(e, (function(e, s, n) {
                t.call(o, e, s, n) && ++r
            }), o), r
        }, goog.array.find = function(e, t, o) {
            return 0 > (t = goog.array.findIndex(e, t, o)) ? null : goog.isString(e) ? e.charAt(t) : e[t]
        }, goog.array.findIndex = function(e, t, o) {
            for (var r = e.length, s = goog.isString(e) ? e.split("") : e, n = 0; n < r; n++)
                if (n in s && t.call(o, s[n], n, e)) return n;
            return -1
        }, goog.array.findRight = function(e, t, o) {
            return 0 > (t = goog.array.findIndexRight(e, t, o)) ? null : goog.isString(e) ? e.charAt(t) : e[t]
        }, goog.array.findIndexRight = function(e, t, o) {
            var r = e.length,
                s = goog.isString(e) ? e.split("") : e;
            for (--r; 0 <= r; r--)
                if (r in s && t.call(o, s[r], r, e)) return r;
            return -1
        }, goog.array.contains = function(e, t) {
            return 0 <= goog.array.indexOf(e, t)
        }, goog.array.isEmpty = function(e) {
            return 0 == e.length
        }, goog.array.clear = function(e) {
            if (!goog.isArray(e))
                for (var t = e.length - 1; 0 <= t; t--) delete e[t];
            e.length = 0
        }, goog.array.insert = function(e, t) {
            goog.array.contains(e, t) || e.push(t)
        }, goog.array.insertAt = function(e, t, o) {
            goog.array.splice(e, o, 0, t)
        }, goog.array.insertArrayAt = function(e, t, o) {
            goog.partial(goog.array.splice, e, o, 0).apply(null, t)
        }, goog.array.insertBefore = function(e, t, o) {
            var r;
            2 == arguments.length || 0 > (r = goog.array.indexOf(e, o)) ? e.push(t) : goog.array.insertAt(e, t, r)
        }, goog.array.remove = function(e, t) {
            var o;
            return (o = 0 <= (t = goog.array.indexOf(e, t))) && goog.array.removeAt(e, t), o
        }, goog.array.removeLast = function(e, t) {
            return 0 <= (t = goog.array.lastIndexOf(e, t)) && (goog.array.removeAt(e, t), !0)
        }, goog.array.removeAt = function(e, t) {
            return goog.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, t, 1).length
        }, goog.array.removeIf = function(e, t, o) {
            return 0 <= (t = goog.array.findIndex(e, t, o)) && (goog.array.removeAt(e, t), !0)
        }, goog.array.removeAllIf = function(e, t, o) {
            var r = 0;
            return goog.array.forEachRight(e, (function(s, n) {
                t.call(o, s, n, e) && goog.array.removeAt(e, n) && r++
            })), r
        }, goog.array.concat = function(e) {
            return Array.prototype.concat.apply([], arguments)
        }, goog.array.join = function(e) {
            return Array.prototype.concat.apply([], arguments)
        }, goog.array.toArray = function(e) {
            var t = e.length;
            if (0 < t) {
                for (var o = Array(t), r = 0; r < t; r++) o[r] = e[r];
                return o
            }
            return []
        }, goog.array.clone = goog.array.toArray, goog.array.extend = function(e, t) {
            for (var o = 1; o < arguments.length; o++) {
                var r = arguments[o];
                if (goog.isArrayLike(r)) {
                    var s = e.length || 0,
                        n = r.length || 0;
                    e.length = s + n;
                    for (var i = 0; i < n; i++) e[s + i] = r[i]
                } else e.push(r)
            }
        }, goog.array.splice = function(e, t, o, r) {
            return goog.asserts.assert(null != e.length), Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
        }, goog.array.slice = function(e, t, o) {
            return goog.asserts.assert(null != e.length), 2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, o)
        }, goog.array.removeDuplicates = function(e, t, o) {
            t = t || e;
            var r = function(e) {
                return goog.isObject(e) ? "o" + goog.getUid(e) : (typeof e).charAt(0) + e
            };
            o = o || r, r = {};
            for (var s = 0, n = 0; n < e.length;) {
                var i = e[n++],
                    a = o(i);
                Object.prototype.hasOwnProperty.call(r, a) || (r[a] = !0, t[s++] = i)
            }
            t.length = s
        }, goog.array.binarySearch = function(e, t, o) {
            return goog.array.binarySearch_(e, o || goog.array.defaultCompare, !1, t)
        }, goog.array.binarySelect = function(e, t, o) {
            return goog.array.binarySearch_(e, t, !0, void 0, o)
        }, goog.array.binarySearch_ = function(e, t, o, r, s) {
            for (var n, i = 0, a = e.length; i < a;) {
                var g = i + a >> 1,
                    l = o ? t.call(s, e[g], g, e) : t(r, e[g]);
                0 < l ? i = g + 1 : (a = g, n = !l)
            }
            return n ? i : ~i
        }, goog.array.sort = function(e, t) {
            e.sort(t || goog.array.defaultCompare)
        }, goog.array.stableSort = function(e, t) {
            for (var o = Array(e.length), r = 0; r < e.length; r++) o[r] = {
                index: r,
                value: e[r]
            };
            var s = t || goog.array.defaultCompare;
            for (goog.array.sort(o, (function(e, t) {
                    return s(e.value, t.value) || e.index - t.index
                })), r = 0; r < e.length; r++) e[r] = o[r].value
        }, goog.array.sortByKey = function(e, t, o) {
            var r = o || goog.array.defaultCompare;
            goog.array.sort(e, (function(e, o) {
                return r(t(e), t(o))
            }))
        }, goog.array.sortObjectsByKey = function(e, t, o) {
            goog.array.sortByKey(e, (function(e) {
                return e[t]
            }), o)
        }, goog.array.isSorted = function(e, t, o) {
            t = t || goog.array.defaultCompare;
            for (var r = 1; r < e.length; r++) {
                var s = t(e[r - 1], e[r]);
                if (0 < s || 0 == s && o) return !1
            }
            return !0
        }, goog.array.equals = function(e, t, o) {
            if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1;
            var r = e.length;
            o = o || goog.array.defaultCompareEquality;
            for (var s = 0; s < r; s++)
                if (!o(e[s], t[s])) return !1;
            return !0
        }, goog.array.compare3 = function(e, t, o) {
            o = o || goog.array.defaultCompare;
            for (var r = Math.min(e.length, t.length), s = 0; s < r; s++) {
                var n = o(e[s], t[s]);
                if (0 != n) return n
            }
            return goog.array.defaultCompare(e.length, t.length)
        }, goog.array.defaultCompare = function(e, t) {
            return e > t ? 1 : e < t ? -1 : 0
        }, goog.array.inverseDefaultCompare = function(e, t) {
            return -goog.array.defaultCompare(e, t)
        }, goog.array.defaultCompareEquality = function(e, t) {
            return e === t
        }, goog.array.binaryInsert = function(e, t, o) {
            return 0 > (o = goog.array.binarySearch(e, t, o)) && (goog.array.insertAt(e, t, -(o + 1)), !0)
        }, goog.array.binaryRemove = function(e, t, o) {
            return 0 <= (t = goog.array.binarySearch(e, t, o)) && goog.array.removeAt(e, t)
        }, goog.array.bucket = function(e, t, o) {
            for (var r = {}, s = 0; s < e.length; s++) {
                var n = e[s],
                    i = t.call(o, n, s, e);
                goog.isDef(i) && (r[i] || (r[i] = [])).push(n)
            }
            return r
        }, goog.array.toObject = function(e, t, o) {
            var r = {};
            return goog.array.forEach(e, (function(s, n) {
                r[t.call(o, s, n, e)] = s
            })), r
        }, goog.array.range = function(e, t, o) {
            var r = [],
                s = 0,
                n = e;
            if (void 0 !== t && (s = e, n = t), 0 > (o = o || 1) * (n - s)) return [];
            if (0 < o)
                for (e = s; e < n; e += o) r.push(e);
            else
                for (e = s; e > n; e += o) r.push(e);
            return r
        }, goog.array.repeat = function(e, t) {
            for (var o = [], r = 0; r < t; r++) o[r] = e;
            return o
        }, goog.array.flatten = function(e) {
            for (var t = [], o = 0; o < arguments.length; o++) {
                var r = arguments[o];
                if (goog.isArray(r))
                    for (var s = 0; s < r.length; s += 8192) {
                        var n = goog.array.slice(r, s, s + 8192);
                        n = goog.array.flatten.apply(null, n);
                        for (var i = 0; i < n.length; i++) t.push(n[i])
                    } else t.push(r)
            }
            return t
        }, goog.array.rotate = function(e, t) {
            return goog.asserts.assert(null != e.length), e.length && (0 < (t %= e.length) ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))), e
        }, goog.array.moveItem = function(e, t, o) {
            goog.asserts.assert(0 <= t && t < e.length), goog.asserts.assert(0 <= o && o < e.length), t = Array.prototype.splice.call(e, t, 1), Array.prototype.splice.call(e, o, 0, t[0])
        }, goog.array.zip = function(e) {
            if (!arguments.length) return [];
            for (var t = [], o = arguments[0].length, r = 1; r < arguments.length; r++) arguments[r].length < o && (o = arguments[r].length);
            for (r = 0; r < o; r++) {
                for (var s = [], n = 0; n < arguments.length; n++) s.push(arguments[n][r]);
                t.push(s)
            }
            return t
        }, goog.array.shuffle = function(e, t) {
            t = t || Math.random;
            for (var o = e.length - 1; 0 < o; o--) {
                var r = Math.floor(t() * (o + 1)),
                    s = e[o];
                e[o] = e[r], e[r] = s
            }
        }, goog.array.copyByIndex = function(e, t) {
            var o = [];
            return goog.array.forEach(t, (function(t) {
                o.push(e[t])
            })), o
        }, goog.array.concatMap = function(e, t, o) {
            return goog.array.concat.apply([], goog.array.map(e, t, o))
        }, goog.crypt = {}, goog.crypt.stringToByteArray = function(e) {
            for (var t = [], o = 0, r = 0; r < e.length; r++) {
                var s = e.charCodeAt(r);
                255 < s && (t[o++] = 255 & s, s >>= 8), t[o++] = s
            }
            return t
        }, goog.crypt.byteArrayToString = function(e) {
            if (8192 >= e.length) return String.fromCharCode.apply(null, e);
            for (var t = "", o = 0; o < e.length; o += 8192) {
                var r = goog.array.slice(e, o, o + 8192);
                t += String.fromCharCode.apply(null, r)
            }
            return t
        }, goog.crypt.byteArrayToHex = function(e, t) {
            return goog.array.map(e, (function(e) {
                return 1 < (e = e.toString(16)).length ? e : "0" + e
            })).join(t || "")
        }, goog.crypt.hexToByteArray = function(e) {
            goog.asserts.assert(0 == e.length % 2, "Key string length must be multiple of 2");
            for (var t = [], o = 0; o < e.length; o += 2) t.push(parseInt(e.substring(o, o + 2), 16));
            return t
        }, goog.crypt.stringToUtf8ByteArray = function(e) {
            for (var t = [], o = 0, r = 0; r < e.length; r++) {
                var s = e.charCodeAt(r);
                128 > s ? t[o++] = s : (2048 > s ? t[o++] = s >> 6 | 192 : (55296 == (64512 & s) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++r)), t[o++] = s >> 18 | 240, t[o++] = s >> 12 & 63 | 128) : t[o++] = s >> 12 | 224, t[o++] = s >> 6 & 63 | 128), t[o++] = 63 & s | 128)
            }
            return t
        }, goog.crypt.utf8ByteArrayToString = function(e) {
            for (var t = [], o = 0, r = 0; o < e.length;) {
                var s = e[o++];
                if (128 > s) t[r++] = String.fromCharCode(s);
                else if (191 < s && 224 > s) {
                    var n = e[o++];
                    t[r++] = String.fromCharCode((31 & s) << 6 | 63 & n)
                } else if (239 < s && 365 > s) {
                    n = e[o++];
                    var i = e[o++];
                    s = ((7 & s) << 18 | (63 & n) << 12 | (63 & i) << 6 | 63 & e[o++]) - 65536, t[r++] = String.fromCharCode(55296 + (s >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & s))
                } else n = e[o++], i = e[o++], t[r++] = String.fromCharCode((15 & s) << 12 | (63 & n) << 6 | 63 & i)
            }
            return t.join("")
        }, goog.crypt.xorByteArray = function(e, t) {
            goog.asserts.assert(e.length == t.length, "XOR array lengths must match");
            for (var o = [], r = 0; r < e.length; r++) o.push(e[r] ^ t[r]);
            return o
        }, goog.string = {}, goog.string.internal = {}, goog.string.internal.startsWith = function(e, t) {
            return 0 == e.lastIndexOf(t, 0)
        }, goog.string.internal.endsWith = function(e, t) {
            var o = e.length - t.length;
            return 0 <= o && e.indexOf(t, o) == o
        }, goog.string.internal.caseInsensitiveStartsWith = function(e, t) {
            return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(0, t.length))
        }, goog.string.internal.caseInsensitiveEndsWith = function(e, t) {
            return 0 == goog.string.internal.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
        }, goog.string.internal.caseInsensitiveEquals = function(e, t) {
            return e.toLowerCase() == t.toLowerCase()
        }, goog.string.internal.isEmptyOrWhitespace = function(e) {
            return /^[\s\xa0]*$/.test(e)
        }, goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(e) {
            return e.trim()
        } : function(e) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
        }, goog.string.internal.caseInsensitiveCompare = function(e, t) {
            return (e = String(e).toLowerCase()) < (t = String(t).toLowerCase()) ? -1 : e == t ? 0 : 1
        }, goog.string.internal.newLineToBr = function(e, t) {
            return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
        }, goog.string.internal.htmlEscape = function(e, t) {
            if (t) e = e.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
            else {
                if (!goog.string.internal.ALL_RE_.test(e)) return e; - 1 != e.indexOf("&") && (e = e.replace(goog.string.internal.AMP_RE_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(goog.string.internal.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.internal.GT_RE_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(goog.string.internal.QUOT_RE_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")), -1 != e.indexOf("\0") && (e = e.replace(goog.string.internal.NULL_RE_, "&#0;"))
            }
            return e
        }, goog.string.internal.AMP_RE_ = /&/g, goog.string.internal.LT_RE_ = /</g, goog.string.internal.GT_RE_ = />/g, goog.string.internal.QUOT_RE_ = /"/g, goog.string.internal.SINGLE_QUOTE_RE_ = /'/g, goog.string.internal.NULL_RE_ = /\x00/g, goog.string.internal.ALL_RE_ = /[\x00&<>"']/, goog.string.internal.whitespaceEscape = function(e, t) {
            return goog.string.internal.newLineToBr(e.replace(/  /g, " &#160;"), t)
        }, goog.string.internal.contains = function(e, t) {
            return -1 != e.indexOf(t)
        }, goog.string.internal.caseInsensitiveContains = function(e, t) {
            return goog.string.internal.contains(e.toLowerCase(), t.toLowerCase())
        }, goog.string.internal.compareVersions = function(e, t) {
            var o = 0;
            e = goog.string.internal.trim(String(e)).split("."), t = goog.string.internal.trim(String(t)).split(".");
            for (var r = Math.max(e.length, t.length), s = 0; 0 == o && s < r; s++) {
                var n = e[s] || "",
                    i = t[s] || "";
                do {
                    if (n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""], i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""], 0 == n[0].length && 0 == i[0].length) break;
                    o = 0 == n[1].length ? 0 : parseInt(n[1], 10);
                    var a = 0 == i[1].length ? 0 : parseInt(i[1], 10);
                    o = goog.string.internal.compareElements_(o, a) || goog.string.internal.compareElements_(0 == n[2].length, 0 == i[2].length) || goog.string.internal.compareElements_(n[2], i[2]), n = n[3], i = i[3]
                } while (0 == o)
            }
            return o
        }, goog.string.internal.compareElements_ = function(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }, goog.string.TypedString = function() {}, goog.string.Const = function(e, t) {
            this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = e === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && t || "", this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
        }, goog.string.Const.prototype.implementsGoogStringTypedString = !0, goog.string.Const.prototype.getTypedStringValue = function() {
            return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
        }, goog.string.Const.prototype.toString = function() {
            return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
        }, goog.string.Const.unwrap = function(e) {
            return e instanceof goog.string.Const && e.constructor === goog.string.Const && e.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_ ? e.stringConstValueWithSecurityContract__googStringSecurityPrivate_ : (goog.asserts.fail("expected object of type Const, got '" + e + "'"), "type_error:Const")
        }, goog.string.Const.from = function(e) {
            return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, e)
        }, goog.string.Const.TYPE_MARKER_ = {}, goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}, goog.string.Const.EMPTY = goog.string.Const.from(""), goog.fs = {}, goog.fs.url = {}, goog.fs.url.createObjectUrl = function(e) {
            return goog.fs.url.getUrlObject_().createObjectURL(e)
        }, goog.fs.url.revokeObjectUrl = function(e) {
            goog.fs.url.getUrlObject_().revokeObjectURL(e)
        }, goog.fs.url.getUrlObject_ = function() {
            var e = goog.fs.url.findUrlObject_();
            if (null != e) return e;
            throw Error("This browser doesn't seem to support blob URLs")
        }, goog.fs.url.findUrlObject_ = function() {
            return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null
        }, goog.fs.url.browserSupportsObjectUrls = function() {
            return null != goog.fs.url.findUrlObject_()
        }, goog.html = {}, goog.html.trustedtypes = {}, goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null, goog.i18n = {}, goog.i18n.bidi = {}, goog.i18n.bidi.FORCE_RTL = !1, goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()), goog.i18n.bidi.Format = {
            LRE: "",
            RLE: "",
            PDF: "",
            LRM: "‎",
            RLM: "‏"
        }, goog.i18n.bidi.Dir = {
            LTR: 1,
            RTL: -1,
            NEUTRAL: 0
        }, goog.i18n.bidi.RIGHT = "right", goog.i18n.bidi.LEFT = "left", goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT, goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, goog.i18n.bidi.toDir = function(e, t) {
            return "number" == typeof e ? 0 < e ? goog.i18n.bidi.Dir.LTR : 0 > e ? goog.i18n.bidi.Dir.RTL : t ? null : goog.i18n.bidi.Dir.NEUTRAL : null == e ? null : e ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
        }, goog.i18n.bidi.ltrChars_ = 'A-Za-z', goog.i18n.bidi.rtlChars_ = '', goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g, goog.i18n.bidi.stripHtmlIfNeeded_ = function(e, t) {
            return t ? e.replace(goog.i18n.bidi.htmlSkipReg_, "") : e
        }, goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.hasAnyRtl = function(e, t) {
            return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }, goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl, goog.i18n.bidi.hasAnyLtr = function(e, t) {
            return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }, goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.isRtlChar = function(e) {
            return goog.i18n.bidi.rtlRe_.test(e)
        }, goog.i18n.bidi.isLtrChar = function(e) {
            return goog.i18n.bidi.ltrRe_.test(e)
        }, goog.i18n.bidi.isNeutralChar = function(e) {
            return !goog.i18n.bidi.isLtrChar(e) && !goog.i18n.bidi.isRtlChar(e)
        }, goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.startsWithRtl = function(e, t) {
            return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }, goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl, goog.i18n.bidi.startsWithLtr = function(e, t) {
            return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }, goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr, goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/, goog.i18n.bidi.isNeutralText = function(e, t) {
            return e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t), goog.i18n.bidi.isRequiredLtrRe_.test(e) || !goog.i18n.bidi.hasAnyLtr(e) && !goog.i18n.bidi.hasAnyRtl(e)
        }, goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$"), goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$"), goog.i18n.bidi.endsWithLtr = function(e, t) {
            return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }, goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr, goog.i18n.bidi.endsWithRtl = function(e, t) {
            return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(e, t))
        }, goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl, goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i, goog.i18n.bidi.isRtlLanguage = function(e) {
            return goog.i18n.bidi.rtlLocalesRe_.test(e)
        }, goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g, goog.i18n.bidi.guardBracketInText = function(e, t) {
            return t = (void 0 === t ? goog.i18n.bidi.hasAnyRtl(e) : t) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM, e.replace(goog.i18n.bidi.bracketGuardTextRe_, t + "$&" + t)
        }, goog.i18n.bidi.enforceRtlInHtml = function(e) {
            return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + e + "</span>"
        }, goog.i18n.bidi.enforceRtlInText = function(e) {
            return goog.i18n.bidi.Format.RLE + e + goog.i18n.bidi.Format.PDF
        }, goog.i18n.bidi.enforceLtrInHtml = function(e) {
            return "<" == e.charAt(0) ? e.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + e + "</span>"
        }, goog.i18n.bidi.enforceLtrInText = function(e) {
            return goog.i18n.bidi.Format.LRE + e + goog.i18n.bidi.Format.PDF
        }, goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g, goog.i18n.bidi.leftRe_ = /left/gi, goog.i18n.bidi.rightRe_ = /right/gi, goog.i18n.bidi.tempRe_ = /%%%%/g, goog.i18n.bidi.mirrorCSS = function(e) {
            return e.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
        }, goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g, goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g, goog.i18n.bidi.normalizeHebrewQuote = function(e) {
            return e.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳")
        }, goog.i18n.bidi.wordSeparatorRe_ = /\s+/, goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/, goog.i18n.bidi.rtlDetectionThreshold_ = .4, goog.i18n.bidi.estimateDirection = function(e, t) {
            var o = 0,
                r = 0,
                s = !1;
            for (e = goog.i18n.bidi.stripHtmlIfNeeded_(e, t).split(goog.i18n.bidi.wordSeparatorRe_), t = 0; t < e.length; t++) {
                var n = e[t];
                goog.i18n.bidi.startsWithRtl(n) ? (o++, r++) : goog.i18n.bidi.isRequiredLtrRe_.test(n) ? s = !0 : goog.i18n.bidi.hasAnyLtr(n) ? r++ : goog.i18n.bidi.hasNumeralsRe_.test(n) && (s = !0)
            }
            return 0 == r ? s ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : o / r > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
        }, goog.i18n.bidi.detectRtlDirectionality = function(e, t) {
            return goog.i18n.bidi.estimateDirection(e, t) == goog.i18n.bidi.Dir.RTL
        }, goog.i18n.bidi.setElementDirAndAlign = function(e, t) {
            e && (t = goog.i18n.bidi.toDir(t)) && (e.style.textAlign = t == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, e.dir = t == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
        }, goog.i18n.bidi.setElementDirByTextDirectionality = function(e, t) {
            switch (goog.i18n.bidi.estimateDirection(t)) {
                case goog.i18n.bidi.Dir.LTR:
                    e.dir = "ltr";
                    break;
                case goog.i18n.bidi.Dir.RTL:
                    e.dir = "rtl";
                    break;
                default:
                    e.removeAttribute("dir")
            }
        }, goog.i18n.bidi.DirectionalString = function() {}, goog.html.TrustedResourceUrl = function() {
            this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "", this.trustedURL_ = null, this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }, goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0, goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
            return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()
        }, goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.TrustedResourceUrl.prototype.getDirection = function() {
            return goog.i18n.bidi.Dir.LTR
        }, goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(e, t) {
            var o = goog.html.TrustedResourceUrl.unwrap(this),
                r = (o = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(o))[3] || "";
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(o[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", o[2] || "", e) + goog.html.TrustedResourceUrl.stringifyParams_("#", r, t))
        }, goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
            return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
        }), goog.html.TrustedResourceUrl.unwrap = function(e) {
            return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e).toString()
        }, goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(e) {
            return e instanceof goog.html.TrustedResourceUrl && e.constructor === goog.html.TrustedResourceUrl && e.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ : (goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + e + "' of type " + goog.typeOf(e)), "type_error:TrustedResourceUrl")
        }, goog.html.TrustedResourceUrl.unwrapTrustedURL = function(e) {
            return e.trustedURL_ ? e.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(e)
        }, goog.html.TrustedResourceUrl.format = function(e, t) {
            var o = goog.string.Const.unwrap(e);
            if (!goog.html.TrustedResourceUrl.BASE_URL_.test(o)) throw Error("Invalid TrustedResourceUrl format: " + o);
            return e = o.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, (function(e, r) {
                if (!Object.prototype.hasOwnProperty.call(t, r)) throw Error('Found marker, "' + r + '", in format string, "' + o + '", but no valid label mapping found in args: ' + JSON.stringify(t));
                return (e = t[r]) instanceof goog.string.Const ? goog.string.Const.unwrap(e) : encodeURIComponent(String(e))
            })), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g, goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, goog.html.TrustedResourceUrl.formatWithParams = function(e, t, o, r) {
            return goog.html.TrustedResourceUrl.format(e, t).cloneWithParams(o, r)
        }, goog.html.TrustedResourceUrl.fromConstant = function(e) {
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
        }, goog.html.TrustedResourceUrl.fromConstants = function(e) {
            for (var t = "", o = 0; o < e.length; o++) t += goog.string.Const.unwrap(e[o]);
            return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
        }, goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(e) {
            var t = new goog.html.TrustedResourceUrl;
            return t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(e) : e, goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY && (t.trustedURL_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e)), t
        }, goog.html.TrustedResourceUrl.stringifyParams_ = function(e, t, o) {
            if (null == o) return t;
            if (goog.isString(o)) return o ? e + encodeURIComponent(o) : "";
            for (var r in o) {
                var s = o[r];
                s = goog.isArray(s) ? s : [s];
                for (var n = 0; n < s.length; n++) {
                    var i = s[n];
                    null != i && (t || (t = e), t += (t.length > e.length ? "&" : "") + encodeURIComponent(r) + "=" + encodeURIComponent(String(i)))
                }
            }
            return t
        }, goog.html.SafeUrl = function() {
            this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = "", this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }, goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez", goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0, goog.html.SafeUrl.prototype.getTypedStringValue = function() {
            return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()
        }, goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.SafeUrl.prototype.getDirection = function() {
            return goog.i18n.bidi.Dir.LTR
        }, goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
            return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}"
        }), goog.html.SafeUrl.unwrap = function(e) {
            return goog.html.SafeUrl.unwrapTrustedURL(e).toString()
        }, goog.html.SafeUrl.unwrapTrustedURL = function(e) {
            return e instanceof goog.html.SafeUrl && e.constructor === goog.html.SafeUrl && e.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeUrlWrappedValue_ : (goog.asserts.fail("expected object of type SafeUrl, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeUrl")
        }, goog.html.SafeUrl.fromConstant = function(e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(e))
        }, goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i, goog.html.SafeUrl.isSafeMimeType = function(e) {
            return goog.html.SAFE_MIME_TYPE_PATTERN_.test(e)
        }, goog.html.SafeUrl.fromBlob = function(e) {
            return e = goog.html.SAFE_MIME_TYPE_PATTERN_.test(e.type) ? goog.fs.url.createObjectUrl(e) : goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i, goog.html.SafeUrl.fromDataUrl = function(e) {
            var t = (e = e.replace(/(%0A|%0D)/g, "")).match(goog.html.DATA_URL_PATTERN_);
            return t = t && goog.html.SAFE_MIME_TYPE_PATTERN_.test(t[1]), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t ? e : goog.html.SafeUrl.INNOCUOUS_STRING)
        }, goog.html.SafeUrl.fromTelUrl = function(e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "tel:") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i, goog.html.SafeUrl.fromSipUrl = function(e) {
            return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(e)) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SafeUrl.fromFacebookMessengerUrl = function(e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "fb-messenger://share") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SafeUrl.fromWhatsAppUrl = function(e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "whatsapp://send") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SafeUrl.fromSmsUrl = function(e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SafeUrl.isSmsUrlBodyValid_ = function(e) {
            var t = e.indexOf("#");
            if (0 < t && (e = e.substring(0, t)), !(t = e.match(/[?&]body=/gi))) return !0;
            if (1 < t.length) return !1;
            if (!(e = e.match(/[?&]body=([^&]*)/)[1])) return !0;
            try {
                decodeURIComponent(e)
            } catch (e) {
                return !1
            }
            return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(e)
        }, goog.html.SafeUrl.fromSshUrl = function(e) {
            return goog.string.internal.caseInsensitiveStartsWith(e, "ssh://") || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, e, t)
        }, goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, e, t)
        }, goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(e, t) {
            return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, e, t)
        }, goog.html.SafeUrl.sanitizeExtensionUrl_ = function(e, t, o) {
            return (e = e.exec(t)) ? (e = e[1], -1 == (o instanceof goog.string.Const ? [goog.string.Const.unwrap(o)] : o.map((function(e) {
                return goog.string.Const.unwrap(e)
            }))).indexOf(e) && (t = goog.html.SafeUrl.INNOCUOUS_STRING)) : t = goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        }, goog.html.SafeUrl.fromTrustedResourceUrl = function(e) {
            return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(e))
        }, goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_, goog.html.SafeUrl.sanitize = function(e) {
            return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), goog.html.SAFE_URL_PATTERN_.test(e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e))
        }, goog.html.SafeUrl.sanitizeAssertUnchanged = function(e, t) {
            return e instanceof goog.html.SafeUrl ? e : (e = "object" == typeof e && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), t && /^data:/i.test(e) && (t = goog.html.SafeUrl.fromDataUrl(e)).getTypedStringValue() == e ? t : (goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(e), "%s does not match the safe URL pattern", e) || (e = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)))
        }, goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(e) {
            var t = new goog.html.SafeUrl;
            return t.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(e) : e, t
        }, goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"), goog.html.SafeStyle = function() {
            this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "", this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }, goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0, goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeStyle.fromConstant = function(e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyle.EMPTY : (goog.asserts.assert(goog.string.internal.endsWith(e, ";"), "Last character of style string is not ';': " + e), goog.asserts.assert(goog.string.internal.contains(e, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + e), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e))
        }, goog.html.SafeStyle.prototype.getTypedStringValue = function() {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
        }, goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
            return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
        }), goog.html.SafeStyle.unwrap = function(e) {
            return e instanceof goog.html.SafeStyle && e.constructor === goog.html.SafeStyle && e.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyle, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeStyle")
        }, goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(e) {
            return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(e)
        }, goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
            return this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = e, this
        }, goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""), goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez", goog.html.SafeStyle.create = function(e) {
            var t, o = "";
            for (t in e) {
                if (!/^[-_a-zA-Z0-9]+$/.test(t)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + t);
                var r = e[t];
                null != r && (o += t + ":" + (r = goog.isArray(r) ? goog.array.map(r, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(r)) + ";")
            }
            return o ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(o) : goog.html.SafeStyle.EMPTY
        }, goog.html.SafeStyle.sanitizePropertyValue_ = function(e) {
            if (e instanceof goog.html.SafeUrl) return 'url("' + goog.html.SafeUrl.unwrap(e).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (e = e instanceof goog.string.Const ? goog.string.Const.unwrap(e) : goog.html.SafeStyle.sanitizePropertyValueString_(String(e)), /[{;}]/.test(e)) throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [e]);
            return e
        }, goog.html.SafeStyle.sanitizePropertyValueString_ = function(e) {
            var t = e.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
            return goog.html.SafeStyle.VALUE_RE_.test(t) ? goog.html.SafeStyle.COMMENT_RE_.test(e) ? (goog.asserts.fail("String value disallows comments, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING) : goog.html.SafeStyle.hasBalancedQuotes_(e) ? goog.html.SafeStyle.hasBalancedSquareBrackets_(e) ? goog.html.SafeStyle.sanitizeUrl_(e) : (goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value requires balanced quotes, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + e), goog.html.SafeStyle.INNOCUOUS_STRING)
        }, goog.html.SafeStyle.hasBalancedQuotes_ = function(e) {
            for (var t = !0, o = !0, r = 0; r < e.length; r++) {
                var s = e.charAt(r);
                "'" == s && o ? t = !t : '"' == s && t && (o = !o)
            }
            return t && o
        }, goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(e) {
            for (var t = !0, o = /^[-_a-zA-Z0-9]$/, r = 0; r < e.length; r++) {
                var s = e.charAt(r);
                if ("]" == s) {
                    if (t) return !1;
                    t = !0
                } else if ("[" == s) {
                    if (!t) return !1;
                    t = !1
                } else if (!t && !o.test(s)) return !1
            }
            return t
        }, goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]", goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"), goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g, goog.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g, goog.html.SafeStyle.COMMENT_RE_ = /\/\*/, goog.html.SafeStyle.sanitizeUrl_ = function(e) {
            return e.replace(goog.html.SafeStyle.URL_RE_, (function(e, t, o, r) {
                var s = "";
                return o = o.replace(/^(['"])(.*)\1$/, (function(e, t, o) {
                    return s = t, o
                })), e = goog.html.SafeUrl.sanitize(o).getTypedStringValue(), t + s + e + s + r
            }))
        }, goog.html.SafeStyle.concat = function(e) {
            var t = "",
                o = function(e) {
                    goog.isArray(e) ? goog.array.forEach(e, o) : t += goog.html.SafeStyle.unwrap(e)
                };
            return goog.array.forEach(arguments, o), t ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t) : goog.html.SafeStyle.EMPTY
        }, goog.html.SafeScript = function() {
            this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "", this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }, goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0, goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeScript.fromConstant = function(e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SafeScript.fromConstantAndArgs = function(e, t) {
            for (var o = [], r = 1; r < arguments.length; r++) o.push(goog.html.SafeScript.stringify_(arguments[r]));
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(e) + ")(" + o.join(", ") + ");")
        }, goog.html.SafeScript.fromJson = function(e) {
            return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(e))
        }, goog.html.SafeScript.prototype.getTypedStringValue = function() {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()
        }, goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
            return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
        }), goog.html.SafeScript.unwrap = function(e) {
            return goog.html.SafeScript.unwrapTrustedScript(e).toString()
        }, goog.html.SafeScript.unwrapTrustedScript = function(e) {
            return e instanceof goog.html.SafeScript && e.constructor === goog.html.SafeScript && e.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeScriptWrappedValue_ : (goog.asserts.fail("expected object of type SafeScript, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeScript")
        }, goog.html.SafeScript.stringify_ = function(e) {
            return JSON.stringify(e).replace(/</g, "\\x3c")
        }, goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(e) {
            return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(e)
        }, goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
            return this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(e) : e, this
        }, goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""), goog.object = {}, goog.object.is = function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }, goog.object.forEach = function(e, t, o) {
            for (var r in e) t.call(o, e[r], r, e)
        }, goog.object.filter = function(e, t, o) {
            var r, s = {};
            for (r in e) t.call(o, e[r], r, e) && (s[r] = e[r]);
            return s
        }, goog.object.map = function(e, t, o) {
            var r, s = {};
            for (r in e) s[r] = t.call(o, e[r], r, e);
            return s
        }, goog.object.some = function(e, t, o) {
            for (var r in e)
                if (t.call(o, e[r], r, e)) return !0;
            return !1
        }, goog.object.every = function(e, t, o) {
            for (var r in e)
                if (!t.call(o, e[r], r, e)) return !1;
            return !0
        }, goog.object.getCount = function(e) {
            var t, o = 0;
            for (t in e) o++;
            return o
        }, goog.object.getAnyKey = function(e) {
            for (var t in e) return t
        }, goog.object.getAnyValue = function(e) {
            for (var t in e) return e[t]
        }, goog.object.contains = function(e, t) {
            return goog.object.containsValue(e, t)
        }, goog.object.getValues = function(e) {
            var t, o = [],
                r = 0;
            for (t in e) o[r++] = e[t];
            return o
        }, goog.object.getKeys = function(e) {
            var t, o = [],
                r = 0;
            for (t in e) o[r++] = t;
            return o
        }, goog.object.getValueByKeys = function(e, t) {
            var o = goog.isArrayLike(t),
                r = o ? t : arguments;
            for (o = o ? 0 : 1; o < r.length; o++) {
                if (null == e) return;
                e = e[r[o]]
            }
            return e
        }, goog.object.containsKey = function(e, t) {
            return null !== e && t in e
        }, goog.object.containsValue = function(e, t) {
            for (var o in e)
                if (e[o] == t) return !0;
            return !1
        }, goog.object.findKey = function(e, t, o) {
            for (var r in e)
                if (t.call(o, e[r], r, e)) return r
        }, goog.object.findValue = function(e, t, o) {
            return (t = goog.object.findKey(e, t, o)) && e[t]
        }, goog.object.isEmpty = function(e) {
            for (var t in e) return !1;
            return !0
        }, goog.object.clear = function(e) {
            for (var t in e) delete e[t]
        }, goog.object.remove = function(e, t) {
            var o;
            return (o = t in e) && delete e[t], o
        }, goog.object.add = function(e, t, o) {
            if (null !== e && t in e) throw Error('The object already contains the key "' + t + '"');
            goog.object.set(e, t, o)
        }, goog.object.get = function(e, t, o) {
            return null !== e && t in e ? e[t] : o
        }, goog.object.set = function(e, t, o) {
            e[t] = o
        }, goog.object.setIfUndefined = function(e, t, o) {
            return t in e ? e[t] : e[t] = o
        }, goog.object.setWithReturnValueIfNotSet = function(e, t, o) {
            return t in e ? e[t] : (o = o(), e[t] = o)
        }, goog.object.equals = function(e, t) {
            for (var o in e)
                if (!(o in t) || e[o] !== t[o]) return !1;
            for (var r in t)
                if (!(r in e)) return !1;
            return !0
        }, goog.object.clone = function(e) {
            var t, o = {};
            for (t in e) o[t] = e[t];
            return o
        }, goog.object.unsafeClone = function(e) {
            var t = goog.typeOf(e);
            if ("object" == t || "array" == t) {
                if (goog.isFunction(e.clone)) return e.clone();
                for (var o in t = "array" == t ? [] : {}, e) t[o] = goog.object.unsafeClone(e[o]);
                return t
            }
            return e
        }, goog.object.transpose = function(e) {
            var t, o = {};
            for (t in e) o[e[t]] = t;
            return o
        }, goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.object.extend = function(e, t) {
            for (var o, r, s = 1; s < arguments.length; s++) {
                for (o in r = arguments[s]) e[o] = r[o];
                for (var n = 0; n < goog.object.PROTOTYPE_FIELDS_.length; n++) o = goog.object.PROTOTYPE_FIELDS_[n], Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
        }, goog.object.create = function(e) {
            var t = arguments.length;
            if (1 == t && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
            if (t % 2) throw Error("Uneven number of arguments");
            for (var o = {}, r = 0; r < t; r += 2) o[arguments[r]] = arguments[r + 1];
            return o
        }, goog.object.createSet = function(e) {
            var t = arguments.length;
            if (1 == t && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
            for (var o = {}, r = 0; r < t; r++) o[arguments[r]] = !0;
            return o
        }, goog.object.createImmutableView = function(e) {
            var t = e;
            return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), t
        }, goog.object.isImmutableView = function(e) {
            return !!Object.isFrozen && Object.isFrozen(e)
        }, goog.object.getAllPropertyNames = function(e, t, o) {
            if (!e) return [];
            if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return goog.object.getKeys(e);
            for (var r = {}; e && (e !== Object.prototype || t) && (e !== Function.prototype || o);) {
                for (var s = Object.getOwnPropertyNames(e), n = 0; n < s.length; n++) r[s[n]] = !0;
                e = Object.getPrototypeOf(e)
            }
            return goog.object.getKeys(r)
        }, goog.object.getSuperClass = function(e) {
            return (e = Object.getPrototypeOf(e.prototype)) && e.constructor
        }, goog.html.SafeStyleSheet = function() {
            this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "", this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
        }, goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0, goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeStyleSheet.createRule = function(e, t) {
            if (goog.string.internal.contains(e, "<")) throw Error("Selector does not allow '<', got: " + e);
            var o = e.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(o)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + e);
            if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(o)) throw Error("() and [] in selector must be balanced, got: " + e);
            return t instanceof goog.html.SafeStyle || (t = goog.html.SafeStyle.create(t)), e = e + "{" + goog.html.SafeStyle.unwrap(t).replace(/</g, "\\3C ") + "}", goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)
        }, goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(e) {
            for (var t = {
                    "(": ")",
                    "[": "]"
                }, o = [], r = 0; r < e.length; r++) {
                var s = e[r];
                if (t[s]) o.push(t[s]);
                else if (goog.object.contains(t, s) && o.pop() != s) return !1
            }
            return 0 == o.length
        }, goog.html.SafeStyleSheet.concat = function(e) {
            var t = "",
                o = function(e) {
                    goog.isArray(e) ? goog.array.forEach(e, o) : t += goog.html.SafeStyleSheet.unwrap(e)
                };
            return goog.array.forEach(arguments, o), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
        }, goog.html.SafeStyleSheet.fromConstant = function(e) {
            return 0 === (e = goog.string.Const.unwrap(e)).length ? goog.html.SafeStyleSheet.EMPTY : (goog.asserts.assert(!goog.string.internal.contains(e, "<"), "Forbidden '<' character in style sheet string: " + e), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e))
        }, goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
            return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
        }, goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
            return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
        }), goog.html.SafeStyleSheet.unwrap = function(e) {
            return e instanceof goog.html.SafeStyleSheet && e.constructor === goog.html.SafeStyleSheet && e.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyleSheet, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeStyleSheet")
        }, goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(e) {
            return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(e)
        }, goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e) {
            return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = e, this
        }, goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""), goog.dom.tags = {}, goog.dom.tags.VOID_TAGS_ = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }, goog.dom.tags.isVoidTag = function(e) {
            return !0 === goog.dom.tags.VOID_TAGS_[e]
        }, goog.dom.HtmlElement = function() {}, goog.dom.TagName = function(e) {
            this.tagName_ = e
        }, goog.dom.TagName.prototype.toString = function() {
            return this.tagName_
        }, goog.dom.TagName.A = new goog.dom.TagName("A"), goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR"), goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM"), goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS"), goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET"), goog.dom.TagName.AREA = new goog.dom.TagName("AREA"), goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE"), goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE"), goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO"), goog.dom.TagName.B = new goog.dom.TagName("B"), goog.dom.TagName.BASE = new goog.dom.TagName("BASE"), goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT"), goog.dom.TagName.BDI = new goog.dom.TagName("BDI"), goog.dom.TagName.BDO = new goog.dom.TagName("BDO"), goog.dom.TagName.BIG = new goog.dom.TagName("BIG"), goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE"), goog.dom.TagName.BODY = new goog.dom.TagName("BODY"), goog.dom.TagName.BR = new goog.dom.TagName("BR"), goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON"), goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS"), goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION"), goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER"), goog.dom.TagName.CITE = new goog.dom.TagName("CITE"), goog.dom.TagName.CODE = new goog.dom.TagName("CODE"), goog.dom.TagName.COL = new goog.dom.TagName("COL"), goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP"), goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND"), goog.dom.TagName.DATA = new goog.dom.TagName("DATA"), goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST"), goog.dom.TagName.DD = new goog.dom.TagName("DD"), goog.dom.TagName.DEL = new goog.dom.TagName("DEL"), goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS"), goog.dom.TagName.DFN = new goog.dom.TagName("DFN"), goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG"), goog.dom.TagName.DIR = new goog.dom.TagName("DIR"), goog.dom.TagName.DIV = new goog.dom.TagName("DIV"), goog.dom.TagName.DL = new goog.dom.TagName("DL"), goog.dom.TagName.DT = new goog.dom.TagName("DT"), goog.dom.TagName.EM = new goog.dom.TagName("EM"), goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED"), goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET"), goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION"), goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE"), goog.dom.TagName.FONT = new goog.dom.TagName("FONT"), goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER"), goog.dom.TagName.FORM = new goog.dom.TagName("FORM"), goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME"), goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET"), goog.dom.TagName.H1 = new goog.dom.TagName("H1"), goog.dom.TagName.H2 = new goog.dom.TagName("H2"), goog.dom.TagName.H3 = new goog.dom.TagName("H3"), goog.dom.TagName.H4 = new goog.dom.TagName("H4"), goog.dom.TagName.H5 = new goog.dom.TagName("H5"), goog.dom.TagName.H6 = new goog.dom.TagName("H6"), goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD"), goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER"), goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP"), goog.dom.TagName.HR = new goog.dom.TagName("HR"), goog.dom.TagName.HTML = new goog.dom.TagName("HTML"), goog.dom.TagName.I = new goog.dom.TagName("I"), goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME"), goog.dom.TagName.IMG = new goog.dom.TagName("IMG"), goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT"), goog.dom.TagName.INS = new goog.dom.TagName("INS"), goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX"), goog.dom.TagName.KBD = new goog.dom.TagName("KBD"), goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN"), goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL"), goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND"), goog.dom.TagName.LI = new goog.dom.TagName("LI"), goog.dom.TagName.LINK = new goog.dom.TagName("LINK"), goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN"), goog.dom.TagName.MAP = new goog.dom.TagName("MAP"), goog.dom.TagName.MARK = new goog.dom.TagName("MARK"), goog.dom.TagName.MATH = new goog.dom.TagName("MATH"), goog.dom.TagName.MENU = new goog.dom.TagName("MENU"), goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM"), goog.dom.TagName.META = new goog.dom.TagName("META"), goog.dom.TagName.METER = new goog.dom.TagName("METER"), goog.dom.TagName.NAV = new goog.dom.TagName("NAV"), goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES"), goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT"), goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT"), goog.dom.TagName.OL = new goog.dom.TagName("OL"), goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP"), goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION"), goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT"), goog.dom.TagName.P = new goog.dom.TagName("P"), goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM"), goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE"), goog.dom.TagName.PRE = new goog.dom.TagName("PRE"), goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS"), goog.dom.TagName.Q = new goog.dom.TagName("Q"), goog.dom.TagName.RP = new goog.dom.TagName("RP"), goog.dom.TagName.RT = new goog.dom.TagName("RT"), goog.dom.TagName.RTC = new goog.dom.TagName("RTC"), goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY"), goog.dom.TagName.S = new goog.dom.TagName("S"), goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP"), goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT"), goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION"), goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT"), goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL"), goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE"), goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN"), goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE"), goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG"), goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE"), goog.dom.TagName.SUB = new goog.dom.TagName("SUB"), goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY"), goog.dom.TagName.SUP = new goog.dom.TagName("SUP"), goog.dom.TagName.SVG = new goog.dom.TagName("SVG"), goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE"), goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY"), goog.dom.TagName.TD = new goog.dom.TagName("TD"), goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE"), goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA"), goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT"), goog.dom.TagName.TH = new goog.dom.TagName("TH"), goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD"), goog.dom.TagName.TIME = new goog.dom.TagName("TIME"), goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE"), goog.dom.TagName.TR = new goog.dom.TagName("TR"), goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK"), goog.dom.TagName.TT = new goog.dom.TagName("TT"), goog.dom.TagName.U = new goog.dom.TagName("U"), goog.dom.TagName.UL = new goog.dom.TagName("UL"), goog.dom.TagName.VAR = new goog.dom.TagName("VAR"), goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO"), goog.dom.TagName.WBR = new goog.dom.TagName("WBR"), goog.labs = {}, goog.labs.userAgent = {}, goog.labs.userAgent.util = {}, goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
            var e = goog.labs.userAgent.util.getNavigator_();
            return e && (e = e.userAgent) ? e : ""
        }, goog.labs.userAgent.util.getNavigator_ = function() {
            return goog.global.navigator
        }, goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(), goog.labs.userAgent.util.setUserAgent = function(e) {
            goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_()
        }, goog.labs.userAgent.util.getUserAgent = function() {
            return goog.labs.userAgent.util.userAgent_
        }, goog.labs.userAgent.util.matchUserAgent = function(e) {
            var t = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.contains(t, e)
        }, goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(e) {
            var t = goog.labs.userAgent.util.getUserAgent();
            return goog.string.internal.caseInsensitiveContains(t, e)
        }, goog.labs.userAgent.util.extractVersionTuples = function(e) {
            for (var t, o = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = []; t = o.exec(e);) r.push([t[1], t[2], t[3] || void 0]);
            return r
        }, goog.labs.userAgent.browser = {}, goog.labs.userAgent.browser.matchOpera_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Opera")
        }, goog.labs.userAgent.browser.matchIE_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
        }, goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
        }, goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Edg/")
        }, goog.labs.userAgent.browser.matchOperaChromium_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("OPR")
        }, goog.labs.userAgent.browser.matchFirefox_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS")
        }, goog.labs.userAgent.browser.matchSafari_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
        }, goog.labs.userAgent.browser.matchCoast_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Coast")
        }, goog.labs.userAgent.browser.matchIosWebview_ = function() {
            return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
        }, goog.labs.userAgent.browser.matchChrome_ = function() {
            return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_()
        }, goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
            return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
        }, goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_, goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_, goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_, goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_, goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_, goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_, goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_, goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_, goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_, goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_, goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_, goog.labs.userAgent.browser.isSilk = function() {
            return goog.labs.userAgent.util.matchUserAgent("Silk")
        }, goog.labs.userAgent.browser.getVersion = function() {
            function e(e) {
                return e = goog.array.find(e, r), o[e] || ""
            }
            var t = goog.labs.userAgent.util.getUserAgent();
            if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(t);
            t = goog.labs.userAgent.util.extractVersionTuples(t);
            var o = {};
            goog.array.forEach(t, (function(e) {
                o[e[0]] = e[1]
            }));
            var r = goog.partial(goog.object.containsKey, o);
            return goog.labs.userAgent.browser.isOpera() ? e(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? e(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? e(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? e(["Chrome", "CriOS"]) : (t = t[2]) && t[1] || ""
        }, goog.labs.userAgent.browser.isVersionOrHigher = function(e) {
            return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
        }, goog.labs.userAgent.browser.getIEVersion_ = function(e) {
            var t = /rv: *([\d\.]*)/.exec(e);
            if (t && t[1]) return t[1];
            t = "";
            var o = /MSIE +([\d\.]+)/.exec(e);
            if (o && o[1])
                if (e = /Trident\/(\d.\d)/.exec(e), "7.0" == o[1])
                    if (e && e[1]) switch (e[1]) {
                        case "4.0":
                            t = "8.0";
                            break;
                        case "5.0":
                            t = "9.0";
                            break;
                        case "6.0":
                            t = "10.0";
                            break;
                        case "7.0":
                            t = "11.0"
                    } else t = "7.0";
                    else t = o[1];
            return t
        }, goog.html.SafeHtml = function() {
            this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "", this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_, this.dir_ = null
        }, goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.SafeHtml.prototype.getDirection = function() {
            return this.dir_
        }, goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0, goog.html.SafeHtml.prototype.getTypedStringValue = function() {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()
        }, goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
            return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
        }), goog.html.SafeHtml.unwrap = function(e) {
            return goog.html.SafeHtml.unwrapTrustedHTML(e).toString()
        }, goog.html.SafeHtml.unwrapTrustedHTML = function(e) {
            return e instanceof goog.html.SafeHtml && e.constructor === goog.html.SafeHtml && e.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? e.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (goog.asserts.fail("expected object of type SafeHtml, got '" + e + "' of type " + goog.typeOf(e)), "type_error:SafeHtml")
        }, goog.html.SafeHtml.htmlEscape = function(e) {
            if (e instanceof goog.html.SafeHtml) return e;
            var t = "object" == typeof e,
                o = null;
            return t && e.implementsGoogI18nBidiDirectionalString && (o = e.getDirection()), e = t && e.implementsGoogStringTypedString ? e.getTypedStringValue() : String(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(e), o)
        }, goog.html.SafeHtml.htmlEscapePreservingNewlines = function(e) {
            return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
        }, goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(e) {
            return e instanceof goog.html.SafeHtml ? e : (e = goog.html.SafeHtml.htmlEscape(e), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(e)), e.getDirection()))
        }, goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape, goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/, goog.html.SafeHtml.URL_ATTRIBUTES_ = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        }, goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        }, goog.html.SafeHtml.create = function(e, t, o) {
            return goog.html.SafeHtml.verifyTagName(String(e)), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(e), t, o)
        }, goog.html.SafeHtml.verifyTagName = function(e) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(e)) throw Error("Invalid tag name <" + e + ">.");
            if (e.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw Error("Tag name <" + e + "> is not allowed for SafeHtml.")
        }, goog.html.SafeHtml.createIframe = function(e, t, o, r) {
            e && goog.html.TrustedResourceUrl.unwrap(e);
            var s = {};
            return s.src = e || null, s.srcdoc = t && goog.html.SafeHtml.unwrap(t), e = goog.html.SafeHtml.combineAttributes(s, {
                sandbox: ""
            }, o), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, r)
        }, goog.html.SafeHtml.createSandboxIframe = function(e, t, o, r) {
            if (!goog.html.SafeHtml.canUseSandboxIframe()) throw Error("The browser does not support sandboxed iframes.");
            var s = {};
            return s.src = e ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)) : null, s.srcdoc = t || null, s.sandbox = "", e = goog.html.SafeHtml.combineAttributes(s, {}, o), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", e, r)
        }, goog.html.SafeHtml.canUseSandboxIframe = function() {
            return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype
        }, goog.html.SafeHtml.createScriptSrc = function(e, t) {
            return goog.html.TrustedResourceUrl.unwrap(e), e = goog.html.SafeHtml.combineAttributes({
                src: e
            }, {}, t), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", e)
        }, goog.html.SafeHtml.createScript = function(e, t) {
            for (var o in t) {
                var r = o.toLowerCase();
                if ("language" == r || "src" == r || "text" == r || "type" == r) throw Error('Cannot set "' + r + '" attribute')
            }
            for (o = "", e = goog.array.concat(e), r = 0; r < e.length; r++) o += goog.html.SafeScript.unwrap(e[r]);
            return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", t, e)
        }, goog.html.SafeHtml.createStyle = function(e, t) {
            t = goog.html.SafeHtml.combineAttributes({
                type: "text/css"
            }, {}, t);
            var o = "";
            e = goog.array.concat(e);
            for (var r = 0; r < e.length; r++) o += goog.html.SafeStyleSheet.unwrap(e[r]);
            return e = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o, goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", t, e)
        }, goog.html.SafeHtml.createMetaRefresh = function(e, t) {
            return e = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(e)), (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(e, ";") && (e = "'" + e.replace(/'/g, "%27") + "'"), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
                "http-equiv": "refresh",
                content: (t || 0) + "; url=" + e
            })
        }, goog.html.SafeHtml.getAttrNameAndValue_ = function(e, t, o) {
            if (o instanceof goog.string.Const) o = goog.string.Const.unwrap(o);
            else if ("style" == t.toLowerCase()) o = goog.html.SafeHtml.getStyleValue_(o);
            else {
                if (/^on/i.test(t)) throw Error('Attribute "' + t + '" requires goog.string.Const value, "' + o + '" given.');
                if (t.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
                    if (o instanceof goog.html.TrustedResourceUrl) o = goog.html.TrustedResourceUrl.unwrap(o);
                    else if (o instanceof goog.html.SafeUrl) o = goog.html.SafeUrl.unwrap(o);
                else {
                    if (!goog.isString(o)) throw Error('Attribute "' + t + '" on tag "' + e + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + o + '" given.');
                    o = goog.html.SafeUrl.sanitize(o).getTypedStringValue()
                }
            }
            return o.implementsGoogStringTypedString && (o = o.getTypedStringValue()), goog.asserts.assert(goog.isString(o) || goog.isNumber(o), "String or number value expected, got " + typeof o + " with value: " + o), t + '="' + goog.string.internal.htmlEscape(String(o)) + '"'
        }, goog.html.SafeHtml.getStyleValue_ = function(e) {
            if (!goog.isObject(e)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof e + " given: " + e);
            return e instanceof goog.html.SafeStyle || (e = goog.html.SafeStyle.create(e)), goog.html.SafeStyle.unwrap(e)
        }, goog.html.SafeHtml.createWithDir = function(e, t, o, r) {
            return (t = goog.html.SafeHtml.create(t, o, r)).dir_ = e, t
        }, goog.html.SafeHtml.join = function(e, t) {
            var o = (e = goog.html.SafeHtml.htmlEscape(e)).getDirection(),
                r = [],
                s = function(e) {
                    goog.isArray(e) ? goog.array.forEach(e, s) : (e = goog.html.SafeHtml.htmlEscape(e), r.push(goog.html.SafeHtml.unwrap(e)), e = e.getDirection(), o == goog.i18n.bidi.Dir.NEUTRAL ? o = e : e != goog.i18n.bidi.Dir.NEUTRAL && o != e && (o = null))
                };
            return goog.array.forEach(t, s), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r.join(goog.html.SafeHtml.unwrap(e)), o)
        }, goog.html.SafeHtml.concat = function(e) {
            return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments))
        }, goog.html.SafeHtml.concatWithDir = function(e, t) {
            var o = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
            return o.dir_ = e, o
        }, goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(e, t) {
            return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(e, t)
        }, goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(e, t) {
            return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(e) : e, this.dir_ = t, this
        }, goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(e, t, o) {
            var r = null,
                s = "<" + e + goog.html.SafeHtml.stringifyAttributes(e, t);
            return goog.isDefAndNotNull(o) ? goog.isArray(o) || (o = [o]) : o = [], goog.dom.tags.isVoidTag(e.toLowerCase()) ? (goog.asserts.assert(!o.length, "Void tag <" + e + "> does not allow content."), s += ">") : (r = goog.html.SafeHtml.concat(o), s += ">" + goog.html.SafeHtml.unwrap(r) + "</" + e + ">", r = r.getDirection()), (e = t && t.dir) && (r = /^(ltr|rtl|auto)$/i.test(e) ? goog.i18n.bidi.Dir.NEUTRAL : null), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(s, r)
        }, goog.html.SafeHtml.stringifyAttributes = function(e, t) {
            var o = "";
            if (t)
                for (var r in t) {
                    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(r)) throw Error('Invalid attribute name "' + r + '".');
                    var s = t[r];
                    goog.isDefAndNotNull(s) && (o += " " + goog.html.SafeHtml.getAttrNameAndValue_(e, r, s))
                }
            return o
        }, goog.html.SafeHtml.combineAttributes = function(e, t, o) {
            var r, s = {};
            for (r in e) goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"), s[r] = e[r];
            for (r in t) goog.asserts.assert(r.toLowerCase() == r, "Must be lower case"), s[r] = t[r];
            for (r in o) {
                var n = r.toLowerCase();
                if (n in e) throw Error('Cannot override "' + n + '" attribute, got "' + r + '" with value "' + o[r] + '"');
                n in t && delete s[n], s[r] = o[r]
            }
            return s
        }, goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL), goog.html.uncheckedconversions = {}, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(e, t, o) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t, o || null)
        }, goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)
        }, goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t)
        }, goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
        }, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        }, goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(e, t) {
            return goog.asserts.assertString(goog.string.Const.unwrap(e), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(e)), "must provide non-empty justification"), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
        }, goog.dom.asserts = {}, goog.dom.asserts.assertIsLocation = function(e) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var t = goog.dom.asserts.getWindow_(e);
                t && (!e || !(e instanceof t.Location) && e instanceof t.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(e))
            }
            return e
        }, goog.dom.asserts.assertIsElementType_ = function(e, t) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var o = goog.dom.asserts.getWindow_(e);
                o && void 0 !== o[t] && (e && (e instanceof o[t] || !(e instanceof o.Location || e instanceof o.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", t, goog.dom.asserts.debugStringForType_(e)))
            }
            return e
        }, goog.dom.asserts.assertIsHTMLAnchorElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLAnchorElement")
        }, goog.dom.asserts.assertIsHTMLButtonElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLButtonElement")
        }, goog.dom.asserts.assertIsHTMLLinkElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLLinkElement")
        }, goog.dom.asserts.assertIsHTMLImageElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLImageElement")
        }, goog.dom.asserts.assertIsHTMLAudioElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLAudioElement")
        }, goog.dom.asserts.assertIsHTMLVideoElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLVideoElement")
        }, goog.dom.asserts.assertIsHTMLInputElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLInputElement")
        }, goog.dom.asserts.assertIsHTMLTextAreaElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLTextAreaElement")
        }, goog.dom.asserts.assertIsHTMLCanvasElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLCanvasElement")
        }, goog.dom.asserts.assertIsHTMLEmbedElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLEmbedElement")
        }, goog.dom.asserts.assertIsHTMLFormElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFormElement")
        }, goog.dom.asserts.assertIsHTMLFrameElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLFrameElement")
        }, goog.dom.asserts.assertIsHTMLIFrameElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLIFrameElement")
        }, goog.dom.asserts.assertIsHTMLObjectElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLObjectElement")
        }, goog.dom.asserts.assertIsHTMLScriptElement = function(e) {
            return goog.dom.asserts.assertIsElementType_(e, "HTMLScriptElement")
        }, goog.dom.asserts.debugStringForType_ = function(e) {
            if (!goog.isObject(e)) return void 0 === e ? "undefined" : null === e ? "null" : typeof e;
            try {
                return e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e)
            } catch (e) {
                return "<object could not be stringified>"
            }
        }, goog.dom.asserts.getWindow_ = function(e) {
            try {
                var t = e && e.ownerDocument,
                    o = t && (t.defaultView || t.parentWindow);
                if ((o = o || goog.global).Element && o.Location) return o
            } catch (e) {}
            return null
        }, goog.functions = {}, goog.functions.constant = function(e) {
            return function() {
                return e
            }
        }, goog.functions.FALSE = function() {
            return !1
        }, goog.functions.TRUE = function() {
            return !0
        }, goog.functions.NULL = function() {
            return null
        }, goog.functions.identity = function(e, t) {
            return e
        }, goog.functions.error = function(e) {
            return function() {
                throw Error(e)
            }
        }, goog.functions.fail = function(e) {
            return function() {
                throw e
            }
        }, goog.functions.lock = function(e, t) {
            return t = t || 0,
                function() {
                    return e.apply(this, Array.prototype.slice.call(arguments, 0, t))
                }
        }, goog.functions.nth = function(e) {
            return function() {
                return arguments[e]
            }
        }, goog.functions.partialRight = function(e, t) {
            var o = Array.prototype.slice.call(arguments, 1);
            return function() {
                var t = Array.prototype.slice.call(arguments);
                return t.push.apply(t, o), e.apply(this, t)
            }
        }, goog.functions.withReturnValue = function(e, t) {
            return goog.functions.sequence(e, goog.functions.constant(t))
        }, goog.functions.equalTo = function(e, t) {
            return function(o) {
                return t ? e == o : e === o
            }
        }, goog.functions.compose = function(e, t) {
            var o = arguments,
                r = o.length;
            return function() {
                var e;
                r && (e = o[r - 1].apply(this, arguments));
                for (var t = r - 2; 0 <= t; t--) e = o[t].call(this, e);
                return e
            }
        }, goog.functions.sequence = function(e) {
            var t = arguments,
                o = t.length;
            return function() {
                for (var e, r = 0; r < o; r++) e = t[r].apply(this, arguments);
                return e
            }
        }, goog.functions.and = function(e) {
            var t = arguments,
                o = t.length;
            return function() {
                for (var e = 0; e < o; e++)
                    if (!t[e].apply(this, arguments)) return !1;
                return !0
            }
        }, goog.functions.or = function(e) {
            var t = arguments,
                o = t.length;
            return function() {
                for (var e = 0; e < o; e++)
                    if (t[e].apply(this, arguments)) return !0;
                return !1
            }
        }, goog.functions.not = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, goog.functions.create = function(e, t) {
            var o = function() {};
            return o.prototype = e.prototype, o = new o, e.apply(o, Array.prototype.slice.call(arguments, 1)), o
        }, goog.functions.CACHE_RETURN_VALUE = !0, goog.functions.cacheReturnValue = function(e) {
            var t, o = !1;
            return function() {
                return goog.functions.CACHE_RETURN_VALUE ? (o || (t = e(), o = !0), t) : e()
            }
        }, goog.functions.once = function(e) {
            var t = e;
            return function() {
                if (t) {
                    var e = t;
                    t = null, e()
                }
            }
        }, goog.functions.debounce = function(e, t, o) {
            var r = 0;
            return function(s) {
                goog.global.clearTimeout(r);
                var n = arguments;
                r = goog.global.setTimeout((function() {
                    e.apply(o, n)
                }), t)
            }
        }, goog.functions.throttle = function(e, t, o) {
            var r = 0,
                s = !1,
                n = [],
                i = function() {
                    r = 0, s && (s = !1, a())
                },
                a = function() {
                    r = goog.global.setTimeout(i, t), e.apply(o, n)
                };
            return function(e) {
                n = arguments, r ? s = !0 : a()
            }
        }, goog.functions.rateLimit = function(e, t, o) {
            var r = 0,
                s = function() {
                    r = 0
                };
            return function(n) {
                r || (r = goog.global.setTimeout(s, t), e.apply(o, arguments))
            }
        }, goog.dom.safe = {}, goog.dom.safe.InsertAdjacentHtmlPosition = {
            AFTERBEGIN: "afterbegin",
            AFTEREND: "afterend",
            BEFOREBEGIN: "beforebegin",
            BEFOREEND: "beforeend"
        }, goog.dom.safe.insertAdjacentHtml = function(e, t, o) {
            e.insertAdjacentHTML(t, goog.html.SafeHtml.unwrapTrustedHTML(o))
        }, goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
            MATH: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        }, goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue((function() {
            if (goog.DEBUG && "undefined" == typeof document) return !1;
            var e = document.createElement("div"),
                t = document.createElement("div");
            return t.appendChild(document.createElement("div")), e.appendChild(t), !(goog.DEBUG && !e.firstChild) && (t = e.firstChild.firstChild, e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY), !t.parentElement)
        })), goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(e, t) {
            if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
                for (; e.lastChild;) e.removeChild(e.lastChild);
            e.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
        }, goog.dom.safe.setInnerHtml = function(e, t) {
            if (goog.asserts.ENABLE_ASSERTS) {
                var o = e.tagName.toUpperCase();
                if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[o]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + e.tagName + ".")
            }
            goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(e, t)
        }, goog.dom.safe.setOuterHtml = function(e, t) {
            e.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(t)
        }, goog.dom.safe.setFormElementAction = function(e, t) {
            t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), goog.dom.asserts.assertIsHTMLFormElement(e).action = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setButtonFormAction = function(e, t) {
            t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), goog.dom.asserts.assertIsHTMLButtonElement(e).formAction = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setInputFormAction = function(e, t) {
            t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), goog.dom.asserts.assertIsHTMLInputElement(e).formAction = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setStyle = function(e, t) {
            e.style.cssText = goog.html.SafeStyle.unwrap(t)
        }, goog.dom.safe.documentWrite = function(e, t) {
            e.write(goog.html.SafeHtml.unwrapTrustedHTML(t))
        }, goog.dom.safe.setAnchorHref = function(e, t) {
            goog.dom.asserts.assertIsHTMLAnchorElement(e), t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), e.href = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setImageSrc = function(e, t) {
            if (goog.dom.asserts.assertIsHTMLImageElement(e), !(t instanceof goog.html.SafeUrl)) {
                var o = /^data:image\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
            }
            e.src = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setAudioSrc = function(e, t) {
            if (goog.dom.asserts.assertIsHTMLAudioElement(e), !(t instanceof goog.html.SafeUrl)) {
                var o = /^data:audio\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
            }
            e.src = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setVideoSrc = function(e, t) {
            if (goog.dom.asserts.assertIsHTMLVideoElement(e), !(t instanceof goog.html.SafeUrl)) {
                var o = /^data:video\//i.test(t);
                t = goog.html.SafeUrl.sanitizeAssertUnchanged(t, o)
            }
            e.src = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setEmbedSrc = function(e, t) {
            goog.dom.asserts.assertIsHTMLEmbedElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)
        }, goog.dom.safe.setFrameSrc = function(e, t) {
            goog.dom.asserts.assertIsHTMLFrameElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setIframeSrc = function(e, t) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.setIframeSrcdoc = function(e, t) {
            goog.dom.asserts.assertIsHTMLIFrameElement(e), e.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(t)
        }, goog.dom.safe.setLinkHrefAndRel = function(e, t, o) {
            goog.dom.asserts.assertIsHTMLLinkElement(e), e.rel = o, goog.string.internal.caseInsensitiveContains(o, "stylesheet") ? (goog.asserts.assert(t instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), e.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(t)) : e.href = t instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrapTrustedURL(t) : t instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrapTrustedURL(t) : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(t))
        }, goog.dom.safe.setObjectData = function(e, t) {
            goog.dom.asserts.assertIsHTMLObjectElement(e), e.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t)
        }, goog.dom.safe.setScriptSrc = function(e, t) {
            goog.dom.asserts.assertIsHTMLScriptElement(e), e.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t), (t = goog.getScriptNonce()) && e.setAttribute("nonce", t)
        }, goog.dom.safe.setScriptContent = function(e, t) {
            goog.dom.asserts.assertIsHTMLScriptElement(e), e.text = goog.html.SafeScript.unwrapTrustedScript(t), (t = goog.getScriptNonce()) && e.setAttribute("nonce", t)
        }, goog.dom.safe.setLocationHref = function(e, t) {
            goog.dom.asserts.assertIsLocation(e), t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), e.href = goog.html.SafeUrl.unwrapTrustedURL(t)
        }, goog.dom.safe.assignLocation = function(e, t) {
            goog.dom.asserts.assertIsLocation(e), t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), e.assign(goog.html.SafeUrl.unwrapTrustedURL(t))
        }, goog.dom.safe.replaceLocation = function(e, t) {
            goog.dom.asserts.assertIsLocation(e), t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), e.replace(goog.html.SafeUrl.unwrapTrustedURL(t))
        }, goog.dom.safe.openInWindow = function(e, t, o, r, s) {
            return e = e instanceof goog.html.SafeUrl ? e : goog.html.SafeUrl.sanitizeAssertUnchanged(e), (t || goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(e), o ? goog.string.Const.unwrap(o) : "", r, s)
        }, goog.dom.safe.parseFromStringHtml = function(e, t) {
            return goog.dom.safe.parseFromString(e, t, "text/html")
        }, goog.dom.safe.parseFromString = function(e, t, o) {
            return e.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(t), o)
        }, goog.dom.safe.createImageFromBlob = function(e) {
            if (!/^image\/.*/g.test(e.type)) throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
            var t = goog.global.URL.createObjectURL(e);
            return (e = new goog.global.Image).onload = function() {
                goog.global.URL.revokeObjectURL(t)
            }, goog.dom.safe.setImageSrc(e, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), t)), e
        }, goog.string.DETECT_DOUBLE_ESCAPING = !1, goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1, goog.string.Unicode = {
            NBSP: " "
        }, goog.string.startsWith = goog.string.internal.startsWith, goog.string.endsWith = goog.string.internal.endsWith, goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith, goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith, goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals, goog.string.subs = function(e, t) {
            for (var o = e.split("%s"), r = "", s = Array.prototype.slice.call(arguments, 1); s.length && 1 < o.length;) r += o.shift() + s.shift();
            return r + o.join("%s")
        }, goog.string.collapseWhitespace = function(e) {
            return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        }, goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace, goog.string.isEmptyString = function(e) {
            return 0 == e.length
        }, goog.string.isEmpty = goog.string.isEmptyOrWhitespace, goog.string.isEmptyOrWhitespaceSafe = function(e) {
            return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
        }, goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe, goog.string.isBreakingWhitespace = function(e) {
            return !/[^\t\n\r ]/.test(e)
        }, goog.string.isAlpha = function(e) {
            return !/[^a-zA-Z]/.test(e)
        }, goog.string.isNumeric = function(e) {
            return !/[^0-9]/.test(e)
        }, goog.string.isAlphaNumeric = function(e) {
            return !/[^a-zA-Z0-9]/.test(e)
        }, goog.string.isSpace = function(e) {
            return " " == e
        }, goog.string.isUnicodeChar = function(e) {
            return 1 == e.length && " " <= e && "~" >= e || "" <= e && "�" >= e
        }, goog.string.stripNewlines = function(e) {
            return e.replace(/(\r\n|\r|\n)+/g, " ")
        }, goog.string.canonicalizeNewlines = function(e) {
            return e.replace(/(\r\n|\r|\n)/g, "\n")
        }, goog.string.normalizeWhitespace = function(e) {
            return e.replace(/\xa0|\s/g, " ")
        }, goog.string.normalizeSpaces = function(e) {
            return e.replace(/\xa0|[ \t]+/g, " ")
        }, goog.string.collapseBreakingSpaces = function(e) {
            return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        }, goog.string.trim = goog.string.internal.trim, goog.string.trimLeft = function(e) {
            return e.replace(/^[\s\xa0]+/, "")
        }, goog.string.trimRight = function(e) {
            return e.replace(/[\s\xa0]+$/, "")
        }, goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare, goog.string.numberAwareCompare_ = function(e, t, o) {
            if (e == t) return 0;
            if (!e) return -1;
            if (!t) return 1;
            for (var r = e.toLowerCase().match(o), s = t.toLowerCase().match(o), n = Math.min(r.length, s.length), i = 0; i < n; i++) {
                o = r[i];
                var a = s[i];
                if (o != a) return e = parseInt(o, 10), !isNaN(e) && (t = parseInt(a, 10), !isNaN(t) && e - t) ? e - t : o < a ? -1 : 1
            }
            return r.length != s.length ? r.length - s.length : e < t ? -1 : 1
        }, goog.string.intAwareCompare = function(e, t) {
            return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g)
        }, goog.string.floatAwareCompare = function(e, t) {
            return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
        }, goog.string.numerateCompare = goog.string.floatAwareCompare, goog.string.urlEncode = function(e) {
            return encodeURIComponent(String(e))
        }, goog.string.urlDecode = function(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }, goog.string.newLineToBr = goog.string.internal.newLineToBr, goog.string.htmlEscape = function(e, t) {
            return e = goog.string.internal.htmlEscape(e, t), goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;")), e
        }, goog.string.E_RE_ = /e/g, goog.string.unescapeEntities = function(e) {
            return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
        }, goog.string.unescapeEntitiesWithDocument = function(e, t) {
            return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
        }, goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
            var o = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                r = t ? t.createElement("div") : goog.global.document.createElement("div");
            return e.replace(goog.string.HTML_ENTITY_PATTERN_, (function(e, t) {
                var s = o[e];
                return s || ("#" == t.charAt(0) && (t = Number("0" + t.substr(1)), isNaN(t) || (s = String.fromCharCode(t))), s || (goog.dom.safe.setInnerHtml(r, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), e + " ")), s = r.firstChild.nodeValue.slice(0, -1)), o[e] = s)
            }))
        }, goog.string.unescapePureXmlEntities_ = function(e) {
            return e.replace(/&([^;]+);/g, (function(e, t) {
                switch (t) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != t.charAt(0) || (t = Number("0" + t.substr(1)), isNaN(t)) ? e : String.fromCharCode(t)
                }
            }))
        }, goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g, goog.string.whitespaceEscape = function(e, t) {
            return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
        }, goog.string.preserveSpaces = function(e) {
            return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
        }, goog.string.stripQuotes = function(e, t) {
            for (var o = t.length, r = 0; r < o; r++) {
                var s = 1 == o ? t : t.charAt(r);
                if (e.charAt(0) == s && e.charAt(e.length - 1) == s) return e.substring(1, e.length - 1)
            }
            return e
        }, goog.string.truncate = function(e, t, o) {
            return o && (e = goog.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), o && (e = goog.string.htmlEscape(e)), e
        }, goog.string.truncateMiddle = function(e, t, o, r) {
            if (o && (e = goog.string.unescapeEntities(e)), r && e.length > t) {
                r > t && (r = t);
                var s = e.length - r;
                e = e.substring(0, t - r) + "..." + e.substring(s)
            } else e.length > t && (r = Math.floor(t / 2), s = e.length - r, e = e.substring(0, r + t % 2) + "..." + e.substring(s));
            return o && (e = goog.string.htmlEscape(e)), e
        }, goog.string.specialEscapeChars_ = {
            "\0": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        }, goog.string.jsEscapeCache_ = {
            "'": "\\'"
        }, goog.string.quote = function(e) {
            e = String(e);
            for (var t = ['"'], o = 0; o < e.length; o++) {
                var r = e.charAt(o),
                    s = r.charCodeAt(0);
                t[o + 1] = goog.string.specialEscapeChars_[r] || (31 < s && 127 > s ? r : goog.string.escapeChar(r))
            }
            return t.push('"'), t.join("")
        }, goog.string.escapeString = function(e) {
            for (var t = [], o = 0; o < e.length; o++) t[o] = goog.string.escapeChar(e.charAt(o));
            return t.join("")
        }, goog.string.escapeChar = function(e) {
            if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
            if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
            var t = e.charCodeAt(0);
            if (31 < t && 127 > t) var o = e;
            else 256 > t ? (o = "\\x", (16 > t || 256 < t) && (o += "0")) : (o = "\\u", 4096 > t && (o += "0")), o += t.toString(16).toUpperCase();
            return goog.string.jsEscapeCache_[e] = o
        }, goog.string.contains = goog.string.internal.contains, goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains, goog.string.countOf = function(e, t) {
            return e && t ? e.split(t).length - 1 : 0
        }, goog.string.removeAt = function(e, t, o) {
            var r = e;
            return 0 <= t && t < e.length && 0 < o && (r = e.substr(0, t) + e.substr(t + o, e.length - t - o)), r
        }, goog.string.remove = function(e, t) {
            return e.replace(t, "")
        }, goog.string.removeAll = function(e, t) {
            return t = new RegExp(goog.string.regExpEscape(t), "g"), e.replace(t, "")
        }, goog.string.replaceAll = function(e, t, o) {
            return t = new RegExp(goog.string.regExpEscape(t), "g"), e.replace(t, o.replace(/\$/g, "$$$$"))
        }, goog.string.regExpEscape = function(e) {
            return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, goog.string.repeat = String.prototype.repeat ? function(e, t) {
            return e.repeat(t)
        } : function(e, t) {
            return Array(t + 1).join(e)
        }, goog.string.padNumber = function(e, t, o) {
            return -1 == (o = (e = goog.isDef(o) ? e.toFixed(o) : String(e)).indexOf(".")) && (o = e.length), goog.string.repeat("0", Math.max(0, t - o)) + e
        }, goog.string.makeSafe = function(e) {
            return null == e ? "" : String(e)
        }, goog.string.buildString = function(e) {
            return Array.prototype.join.call(arguments, "")
        }, goog.string.getRandomString = function() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
        }, goog.string.compareVersions = goog.string.internal.compareVersions, goog.string.hashCode = function(e) {
            for (var t = 0, o = 0; o < e.length; ++o) t = 31 * t + e.charCodeAt(o) >>> 0;
            return t
        }, goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0, goog.string.createUniqueString = function() {
            return "goog_" + goog.string.uniqueStringCounter_++
        }, goog.string.toNumber = function(e) {
            var t = Number(e);
            return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t
        }, goog.string.isLowerCamelCase = function(e) {
            return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
        }, goog.string.isUpperCamelCase = function(e) {
            return /^([A-Z][a-z]*)+$/.test(e)
        }, goog.string.toCamelCase = function(e) {
            return String(e).replace(/\-([a-z])/g, (function(e, t) {
                return t.toUpperCase()
            }))
        }, goog.string.toSelectorCase = function(e) {
            return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
        }, goog.string.toTitleCase = function(e, t) {
            return t = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s", e.replace(new RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"), (function(e, t, o) {
                return t + o.toUpperCase()
            }))
        }, goog.string.capitalize = function(e) {
            return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
        }, goog.string.parseInt = function(e) {
            return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
        }, goog.string.splitLimit = function(e, t, o) {
            e = e.split(t);
            for (var r = []; 0 < o && e.length;) r.push(e.shift()), o--;
            return e.length && r.push(e.join(t)), r
        }, goog.string.lastComponent = function(e, t) {
            if (!t) return e;
            "string" == typeof t && (t = [t]);
            for (var o = -1, r = 0; r < t.length; r++)
                if ("" != t[r]) {
                    var s = e.lastIndexOf(t[r]);
                    s > o && (o = s)
                }
            return -1 == o ? e : e.slice(o + 1)
        }, goog.string.editDistance = function(e, t) {
            var o = [],
                r = [];
            if (e == t) return 0;
            if (!e.length || !t.length) return Math.max(e.length, t.length);
            for (var s = 0; s < t.length + 1; s++) o[s] = s;
            for (s = 0; s < e.length; s++) {
                r[0] = s + 1;
                for (var n = 0; n < t.length; n++) r[n + 1] = Math.min(r[n] + 1, o[n + 1] + 1, o[n] + Number(e[s] != t[n]));
                for (n = 0; n < o.length; n++) o[n] = r[n]
            }
            return r[t.length]
        }, goog.labs.userAgent.platform = {}, goog.labs.userAgent.platform.isAndroid = function() {
            return goog.labs.userAgent.util.matchUserAgent("Android")
        }, goog.labs.userAgent.platform.isIpod = function() {
            return goog.labs.userAgent.util.matchUserAgent("iPod")
        }, goog.labs.userAgent.platform.isIphone = function() {
            return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
        }, goog.labs.userAgent.platform.isIpad = function() {
            return goog.labs.userAgent.util.matchUserAgent("iPad")
        }, goog.labs.userAgent.platform.isIos = function() {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
        }, goog.labs.userAgent.platform.isMacintosh = function() {
            return goog.labs.userAgent.util.matchUserAgent("Macintosh")
        }, goog.labs.userAgent.platform.isLinux = function() {
            return goog.labs.userAgent.util.matchUserAgent("Linux")
        }, goog.labs.userAgent.platform.isWindows = function() {
            return goog.labs.userAgent.util.matchUserAgent("Windows")
        }, goog.labs.userAgent.platform.isChromeOS = function() {
            return goog.labs.userAgent.util.matchUserAgent("CrOS")
        }, goog.labs.userAgent.platform.isChromecast = function() {
            return goog.labs.userAgent.util.matchUserAgent("CrKey")
        }, goog.labs.userAgent.platform.isKaiOS = function() {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")
        }, goog.labs.userAgent.platform.isGo2Phone = function() {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP")
        }, goog.labs.userAgent.platform.getVersion = function() {
            var e = goog.labs.userAgent.util.getUserAgent(),
                t = "";
            return goog.labs.userAgent.platform.isWindows() ? t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? t = (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) && e[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isKaiOS() ? t = (e = (t = /(?:KaiOS)\/(\S+)/i).exec(e)) && e[1] : goog.labs.userAgent.platform.isAndroid() ? t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1] : goog.labs.userAgent.platform.isChromeOS() && (t = (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]), t || ""
        }, goog.labs.userAgent.platform.isVersionOrHigher = function(e) {
            return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
        }, goog.reflect = {}, goog.reflect.object = function(e, t) {
            return t
        }, goog.reflect.objectProperty = function(e, t) {
            return e
        }, goog.reflect.sinkValue = function(e) {
            return goog.reflect.sinkValue[" "](e), e
        }, goog.reflect.sinkValue[" "] = goog.nullFunction, goog.reflect.canAccessProperty = function(e, t) {
            try {
                return goog.reflect.sinkValue(e[t]), !0
            } catch (e) {}
            return !1
        }, goog.reflect.cache = function(e, t, o, r) {
            return r = r ? r(t) : t, Object.prototype.hasOwnProperty.call(e, r) ? e[r] : e[r] = o(t)
        }, goog.labs.userAgent.engine = {}, goog.labs.userAgent.engine.isPresto = function() {
            return goog.labs.userAgent.util.matchUserAgent("Presto")
        }, goog.labs.userAgent.engine.isTrident = function() {
            return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
        }, goog.labs.userAgent.engine.isEdge = function() {
            return goog.labs.userAgent.util.matchUserAgent("Edge")
        }, goog.labs.userAgent.engine.isWebKit = function() {
            return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
        }, goog.labs.userAgent.engine.isGecko = function() {
            return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
        }, goog.labs.userAgent.engine.getVersion = function() {
            var e = goog.labs.userAgent.util.getUserAgent();
            if (e) {
                e = goog.labs.userAgent.util.extractVersionTuples(e);
                var t, o = goog.labs.userAgent.engine.getEngineTuple_(e);
                if (o) return "Gecko" == o[0] ? goog.labs.userAgent.engine.getVersionForKey_(e, "Firefox") : o[1];
                if ((e = e[0]) && (t = e[2]) && (t = /Trident\/([^\s;]+)/.exec(t))) return t[1]
            }
            return ""
        }, goog.labs.userAgent.engine.getEngineTuple_ = function(e) {
            if (!goog.labs.userAgent.engine.isEdge()) return e[1];
            for (var t = 0; t < e.length; t++) {
                var o = e[t];
                if ("Edge" == o[0]) return o
            }
        }, goog.labs.userAgent.engine.isVersionOrHigher = function(e) {
            return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
        }, goog.labs.userAgent.engine.getVersionForKey_ = function(e, t) {
            return (e = goog.array.find(e, (function(e) {
                return t == e[0]
            }))) && e[1] || ""
        }, goog.userAgent = {}, goog.userAgent.ASSUME_IE = !1, goog.userAgent.ASSUME_EDGE = !1, goog.userAgent.ASSUME_GECKO = !1, goog.userAgent.ASSUME_WEBKIT = !1, goog.userAgent.ASSUME_MOBILE_WEBKIT = !1, goog.userAgent.ASSUME_OPERA = !1, goog.userAgent.ASSUME_ANY_VERSION = !1, goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA, goog.userAgent.getUserAgentString = function() {
            return goog.labs.userAgent.util.getUserAgent()
        }, goog.userAgent.getNavigatorTyped = function() {
            return goog.global.navigator || null
        }, goog.userAgent.getNavigator = function() {
            return goog.userAgent.getNavigatorTyped()
        }, goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(), goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(), goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(), goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE, goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
        goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(), goog.userAgent.isMobile_ = function() {
            return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
        }, goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(), goog.userAgent.SAFARI = goog.userAgent.WEBKIT, goog.userAgent.determinePlatform_ = function() {
            var e = goog.userAgent.getNavigatorTyped();
            return e && e.platform || ""
        }, goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(), goog.userAgent.ASSUME_MAC = !1, goog.userAgent.ASSUME_WINDOWS = !1, goog.userAgent.ASSUME_LINUX = !1, goog.userAgent.ASSUME_X11 = !1, goog.userAgent.ASSUME_ANDROID = !1, goog.userAgent.ASSUME_IPHONE = !1, goog.userAgent.ASSUME_IPAD = !1, goog.userAgent.ASSUME_IPOD = !1, goog.userAgent.ASSUME_KAIOS = !1, goog.userAgent.ASSUME_GO2PHONE = !1, goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD, goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh(), goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(), goog.userAgent.isLegacyLinux_ = function() {
            return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
        }, goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(), goog.userAgent.isX11_ = function() {
            var e = goog.userAgent.getNavigatorTyped();
            return !!e && goog.string.contains(e.appVersion || "", "X11")
        }, goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(), goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(), goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(), goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod(), goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos(), goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS(), goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone(), goog.userAgent.determineVersion_ = function() {
            var e = "",
                t = goog.userAgent.getVersionRegexResult_();
            return t && (e = t ? t[1] : ""), goog.userAgent.IE && (null != (t = goog.userAgent.getDocumentMode_()) && t > parseFloat(e)) ? String(t) : e
        }, goog.userAgent.getVersionRegexResult_ = function() {
            var e = goog.userAgent.getUserAgentString();
            return goog.userAgent.GECKO ? /rv:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : goog.userAgent.OPERA ? /(?:Version)[ \/]?(\S+)/.exec(e) : void 0
        }, goog.userAgent.getDocumentMode_ = function() {
            var e = goog.global.document;
            return e ? e.documentMode : void 0
        }, goog.userAgent.VERSION = goog.userAgent.determineVersion_(), goog.userAgent.compare = function(e, t) {
            return goog.string.compareVersions(e, t)
        }, goog.userAgent.isVersionOrHigherCache_ = {}, goog.userAgent.isVersionOrHigher = function(e) {
            return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, e, (function() {
                return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e)
            }))
        }, goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher, goog.userAgent.isDocumentModeOrHigher = function(e) {
            return Number(goog.userAgent.DOCUMENT_MODE) >= e
        }, goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher, goog.userAgent.DOCUMENT_MODE = function() {
            if (goog.global.document && goog.userAgent.IE) return goog.userAgent.getDocumentMode_()
        }(), goog.userAgent.product = {}, goog.userAgent.product.ASSUME_FIREFOX = !1, goog.userAgent.product.ASSUME_IPHONE = !1, goog.userAgent.product.ASSUME_IPAD = !1, goog.userAgent.product.ASSUME_ANDROID = !1, goog.userAgent.product.ASSUME_CHROME = !1, goog.userAgent.product.ASSUME_SAFARI = !1, goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI, goog.userAgent.product.OPERA = goog.userAgent.OPERA, goog.userAgent.product.IE = goog.userAgent.IE, goog.userAgent.product.EDGE = goog.userAgent.EDGE, goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(), goog.userAgent.product.isIphoneOrIpod_ = function() {
            return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
        }, goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(), goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(), goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(), goog.userAgent.product.isSafariDesktop_ = function() {
            return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
        }, goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(), goog.crypt.base64 = {}, goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=", goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.", goog.crypt.base64.Alphabet = {
            DEFAULT: 0,
            NO_PADDING: 1,
            WEBSAFE: 2,
            WEBSAFE_DOT_PADDING: 3,
            WEBSAFE_NO_PADDING: 4
        }, goog.crypt.base64.paddingChars_ = "=.", goog.crypt.base64.isPadding_ = function(e) {
            return goog.string.contains(goog.crypt.base64.paddingChars_, e)
        }, goog.crypt.base64.byteToCharMaps_ = {}, goog.crypt.base64.charToByteMap_ = null, goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA, goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa, goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob, goog.crypt.base64.encodeByteArray = function(e, t) {
            goog.asserts.assert(goog.isArrayLike(e), "encodeByteArray takes an array as a parameter"), void 0 === t && (t = goog.crypt.base64.Alphabet.DEFAULT), goog.crypt.base64.init_(), t = goog.crypt.base64.byteToCharMaps_[t];
            for (var o = [], r = 0; r < e.length; r += 3) {
                var s = e[r],
                    n = r + 1 < e.length,
                    i = n ? e[r + 1] : 0,
                    a = r + 2 < e.length,
                    g = a ? e[r + 2] : 0,
                    l = s >> 2;
                s = (3 & s) << 4 | i >> 4, i = (15 & i) << 2 | g >> 6, g &= 63, a || (g = 64, n || (i = 64)), o.push(t[l], t[s], t[i] || "", t[g] || "")
            }
            return o.join("")
        }, goog.crypt.base64.encodeString = function(e, t) {
            return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t ? goog.global.btoa(e) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), t)
        }, goog.crypt.base64.decodeString = function(e, t) {
            if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t) return goog.global.atob(e);
            var o = "";
            return goog.crypt.base64.decodeStringInternal_(e, (function(e) {
                o += String.fromCharCode(e)
            })), o
        }, goog.crypt.base64.decodeStringToByteArray = function(e, t) {
            var o = [];
            return goog.crypt.base64.decodeStringInternal_(e, (function(e) {
                o.push(e)
            })), o
        }, goog.crypt.base64.decodeStringToUint8Array = function(e) {
            goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
            var t = e.length,
                o = 3 * t / 4;
            o % 3 ? o = Math.floor(o) : goog.crypt.base64.isPadding_(e[t - 1]) && (o = goog.crypt.base64.isPadding_(e[t - 2]) ? o - 2 : o - 1);
            var r = new Uint8Array(o),
                s = 0;
            return goog.crypt.base64.decodeStringInternal_(e, (function(e) {
                r[s++] = e
            })), r.subarray(0, s)
        }, goog.crypt.base64.decodeStringInternal_ = function(e, t) {
            function o(t) {
                for (; r < e.length;) {
                    var o = e.charAt(r++),
                        s = goog.crypt.base64.charToByteMap_[o];
                    if (null != s) return s;
                    if (!goog.string.isEmptyOrWhitespace(o)) throw Error("Unknown base64 encoding at char: " + o)
                }
                return t
            }
            goog.crypt.base64.init_();
            for (var r = 0;;) {
                var s = o(-1),
                    n = o(0),
                    i = o(64),
                    a = o(64);
                if (64 === a && -1 === s) break;
                t(s << 2 | n >> 4), 64 != i && (t(n << 4 & 240 | i >> 2), 64 != a && t(i << 6 & 192 | a))
            }
        }, goog.crypt.base64.init_ = function() {
            if (!goog.crypt.base64.charToByteMap_) {
                goog.crypt.base64.charToByteMap_ = {};
                for (var e = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"], o = 0; 5 > o; o++) {
                    var r = e.concat(t[o].split(""));
                    goog.crypt.base64.byteToCharMaps_[o] = r;
                    for (var s = 0; s < r.length; s++) {
                        var n = r[s],
                            i = goog.crypt.base64.charToByteMap_[n];
                        void 0 === i ? goog.crypt.base64.charToByteMap_[n] = s : goog.asserts.assert(i === s)
                    }
                }
            }
        }, jspb.utils = {}, jspb.utils.split64Low = 0, jspb.utils.split64High = 0, jspb.utils.splitUint64 = function(e) {
            var t = e >>> 0;
            e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0, jspb.utils.split64Low = t, jspb.utils.split64High = e
        }, jspb.utils.splitInt64 = function(e) {
            var t = 0 > e,
                o = (e = Math.abs(e)) >>> 0;
            e = Math.floor((e - o) / jspb.BinaryConstants.TWO_TO_32), e >>>= 0, t && (e = ~e >>> 0, 4294967295 < (o = 1 + (~o >>> 0)) && (o = 0, 4294967295 < ++e && (e = 0))), jspb.utils.split64Low = o, jspb.utils.split64High = e
        }, jspb.utils.splitZigzag64 = function(e) {
            var t = 0 > e;
            e = 2 * Math.abs(e), jspb.utils.splitUint64(e), e = jspb.utils.split64Low;
            var o = jspb.utils.split64High;
            t && (0 == e ? 0 == o ? o = e = 4294967295 : (o--, e = 4294967295) : e--), jspb.utils.split64Low = e, jspb.utils.split64High = o
        }, jspb.utils.splitFloat32 = function(e) {
            var t = 0 > e ? 1 : 0;
            if (0 === (e = t ? -e : e)) 0 < 1 / e ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
            else if (isNaN(e)) jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
            else if (e > jspb.BinaryConstants.FLOAT32_MAX) jspb.utils.split64High = 0, jspb.utils.split64Low = (t << 31 | 2139095040) >>> 0;
            else if (e < jspb.BinaryConstants.FLOAT32_MIN) e = Math.round(e / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (t << 31 | e) >>> 0;
            else {
                var o = Math.floor(Math.log(e) / Math.LN2);
                e *= Math.pow(2, -o), e = 8388607 & Math.round(e * jspb.BinaryConstants.TWO_TO_23), jspb.utils.split64High = 0, jspb.utils.split64Low = (t << 31 | o + 127 << 23 | e) >>> 0
            }
        }, jspb.utils.splitFloat64 = function(e) {
            var t = 0 > e ? 1 : 0;
            if (0 === (e = t ? -e : e)) jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648, jspb.utils.split64Low = 0;
            else if (isNaN(e)) jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
            else if (e > jspb.BinaryConstants.FLOAT64_MAX) jspb.utils.split64High = (t << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
            else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
                var o = e / Math.pow(2, -1074);
                e = o / jspb.BinaryConstants.TWO_TO_32, jspb.utils.split64High = (t << 31 | e) >>> 0, jspb.utils.split64Low = o >>> 0
            } else {
                var r = 0;
                if (2 <= (o = e))
                    for (; 2 <= o && 1023 > r;) r++, o /= 2;
                else
                    for (; 1 > o && -1022 < r;) o *= 2, r--;
                e = (o = e * Math.pow(2, -r)) * jspb.BinaryConstants.TWO_TO_20 & 1048575, o = o * jspb.BinaryConstants.TWO_TO_52 >>> 0, jspb.utils.split64High = (t << 31 | r + 1023 << 20 | e) >>> 0, jspb.utils.split64Low = o
            }
        }, jspb.utils.splitHash64 = function(e) {
            var t = e.charCodeAt(0),
                o = e.charCodeAt(1),
                r = e.charCodeAt(2),
                s = e.charCodeAt(3),
                n = e.charCodeAt(4),
                i = e.charCodeAt(5),
                a = e.charCodeAt(6);
            e = e.charCodeAt(7), jspb.utils.split64Low = t + (o << 8) + (r << 16) + (s << 24) >>> 0, jspb.utils.split64High = n + (i << 8) + (a << 16) + (e << 24) >>> 0
        }, jspb.utils.joinUint64 = function(e, t) {
            return t * jspb.BinaryConstants.TWO_TO_32 + (e >>> 0)
        }, jspb.utils.joinInt64 = function(e, t) {
            var o = 2147483648 & t;
            return o && (t = ~t >>> 0, 0 == (e = 1 + ~e >>> 0) && (t = t + 1 >>> 0)), e = jspb.utils.joinUint64(e, t), o ? -e : e
        }, jspb.utils.toZigzag64 = function(e, t, o) {
            var r = t >> 31;
            return o(e << 1 ^ r, (t << 1 | e >>> 31) ^ r)
        }, jspb.utils.joinZigzag64 = function(e, t) {
            return jspb.utils.fromZigzag64(e, t, jspb.utils.joinInt64)
        }, jspb.utils.fromZigzag64 = function(e, t, o) {
            var r = -(1 & e);
            return o((e >>> 1 | t << 31) ^ r, t >>> 1 ^ r)
        }, jspb.utils.joinFloat32 = function(e, t) {
            t = 2 * (e >> 31) + 1;
            var o = e >>> 23 & 255;
            return e &= 8388607, 255 == o ? e ? NaN : 1 / 0 * t : 0 == o ? t * Math.pow(2, -149) * e : t * Math.pow(2, o - 150) * (e + Math.pow(2, 23))
        }, jspb.utils.joinFloat64 = function(e, t) {
            var o = 2 * (t >> 31) + 1,
                r = t >>> 20 & 2047;
            return e = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e, 2047 == r ? e ? NaN : 1 / 0 * o : 0 == r ? o * Math.pow(2, -1074) * e : o * Math.pow(2, r - 1075) * (e + jspb.BinaryConstants.TWO_TO_52)
        }, jspb.utils.joinHash64 = function(e, t) {
            return String.fromCharCode(e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, t >>> 0 & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255)
        }, jspb.utils.DIGITS = "0123456789abcdef".split(""), jspb.utils.ZERO_CHAR_CODE_ = 48, jspb.utils.A_CHAR_CODE_ = 97, jspb.utils.joinUnsignedDecimalString = function(e, t) {
            function o(e, t) {
                return e = e ? String(e) : "", t ? "0000000".slice(e.length) + e : e
            }
            if (2097151 >= t) return "" + (jspb.BinaryConstants.TWO_TO_32 * t + e);
            var r = (e >>> 24 | t << 8) >>> 0 & 16777215;
            return e = (16777215 & e) + 6777216 * r + 6710656 * (t = t >> 16 & 65535), r += 8147497 * t, t *= 2, 1e7 <= e && (r += Math.floor(e / 1e7), e %= 1e7), 1e7 <= r && (t += Math.floor(r / 1e7), r %= 1e7), o(t, 0) + o(r, t) + o(e, 1)
        }, jspb.utils.joinSignedDecimalString = function(e, t) {
            var o = 2147483648 & t;
            return o && (t = ~t + (0 == (e = 1 + ~e >>> 0) ? 1 : 0) >>> 0), e = jspb.utils.joinUnsignedDecimalString(e, t), o ? "-" + e : e
        }, jspb.utils.hash64ToDecimalString = function(e, t) {
            jspb.utils.splitHash64(e), e = jspb.utils.split64Low;
            var o = jspb.utils.split64High;
            return t ? jspb.utils.joinSignedDecimalString(e, o) : jspb.utils.joinUnsignedDecimalString(e, o)
        }, jspb.utils.hash64ArrayToDecimalStrings = function(e, t) {
            for (var o = Array(e.length), r = 0; r < e.length; r++) o[r] = jspb.utils.hash64ToDecimalString(e[r], t);
            return o
        }, jspb.utils.decimalStringToHash64 = function(e) {
            function t(e, t) {
                for (var o = 0; 8 > o && (1 !== e || 0 < t); o++) t = e * r[o] + t, r[o] = 255 & t, t >>>= 8
            }
            goog.asserts.assert(0 < e.length);
            var o = !1;
            "-" === e[0] && (o = !0, e = e.slice(1));
            for (var r = [0, 0, 0, 0, 0, 0, 0, 0], s = 0; s < e.length; s++) t(10, e.charCodeAt(s) - jspb.utils.ZERO_CHAR_CODE_);
            return o && (function() {
                for (var e = 0; 8 > e; e++) r[e] = 255 & ~r[e]
            }(), t(1, 1)), goog.crypt.byteArrayToString(r)
        }, jspb.utils.splitDecimalString = function(e) {
            jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))
        }, jspb.utils.toHexDigit_ = function(e) {
            return String.fromCharCode(10 > e ? jspb.utils.ZERO_CHAR_CODE_ + e : jspb.utils.A_CHAR_CODE_ - 10 + e)
        }, jspb.utils.fromHexCharCode_ = function(e) {
            return e >= jspb.utils.A_CHAR_CODE_ ? e - jspb.utils.A_CHAR_CODE_ + 10 : e - jspb.utils.ZERO_CHAR_CODE_
        }, jspb.utils.hash64ToHexString = function(e) {
            var t = Array(18);
            t[0] = "0", t[1] = "x";
            for (var o = 0; 8 > o; o++) {
                var r = e.charCodeAt(7 - o);
                t[2 * o + 2] = jspb.utils.toHexDigit_(r >> 4), t[2 * o + 3] = jspb.utils.toHexDigit_(15 & r)
            }
            return t.join("")
        }, jspb.utils.hexStringToHash64 = function(e) {
            e = e.toLowerCase(), goog.asserts.assert(18 == e.length), goog.asserts.assert("0" == e[0]), goog.asserts.assert("x" == e[1]);
            for (var t = "", o = 0; 8 > o; o++) {
                var r = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 2)),
                    s = jspb.utils.fromHexCharCode_(e.charCodeAt(2 * o + 3));
                t = String.fromCharCode(16 * r + s) + t
            }
            return t
        }, jspb.utils.hash64ToNumber = function(e, t) {
            jspb.utils.splitHash64(e), e = jspb.utils.split64Low;
            var o = jspb.utils.split64High;
            return t ? jspb.utils.joinInt64(e, o) : jspb.utils.joinUint64(e, o)
        }, jspb.utils.numberToHash64 = function(e) {
            return jspb.utils.splitInt64(e), jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.utils.countVarints = function(e, t, o) {
            for (var r = 0, s = t; s < o; s++) r += e[s] >> 7;
            return o - t - r
        }, jspb.utils.countVarintFields = function(e, t, o, r) {
            var s = 0;
            if (128 > (r = 8 * r + jspb.BinaryConstants.WireType.VARINT))
                for (; t < o && e[t++] == r;)
                    for (s++;;) {
                        var n = e[t++];
                        if (0 == (128 & n)) break
                    } else
                        for (; t < o;) {
                            for (n = r; 128 < n;) {
                                if (e[t] != (127 & n | 128)) return s;
                                t++, n >>= 7
                            }
                            if (e[t++] != n) break;
                            for (s++; 0 != (128 & (n = e[t++])););
                        }
            return s
        }, jspb.utils.countFixedFields_ = function(e, t, o, r, s) {
            var n = 0;
            if (128 > r)
                for (; t < o && e[t++] == r;) n++, t += s;
            else
                for (; t < o;) {
                    for (var i = r; 128 < i;) {
                        if (e[t++] != (127 & i | 128)) return n;
                        i >>= 7
                    }
                    if (e[t++] != i) break;
                    n++, t += s
                }
            return n
        }, jspb.utils.countFixed32Fields = function(e, t, o, r) {
            return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED32, 4)
        }, jspb.utils.countFixed64Fields = function(e, t, o, r) {
            return jspb.utils.countFixedFields_(e, t, o, 8 * r + jspb.BinaryConstants.WireType.FIXED64, 8)
        }, jspb.utils.countDelimitedFields = function(e, t, o, r) {
            var s = 0;
            for (r = 8 * r + jspb.BinaryConstants.WireType.DELIMITED; t < o;) {
                for (var n = r; 128 < n;) {
                    if (e[t++] != (127 & n | 128)) return s;
                    n >>= 7
                }
                if (e[t++] != n) break;
                s++;
                for (var i = 0, a = 1; i += (127 & (n = e[t++])) * a, a *= 128, 0 != (128 & n););
                t += i
            }
            return s
        }, jspb.utils.debugBytesToTextFormat = function(e) {
            var t = '"';
            if (e) {
                e = jspb.utils.byteSourceToUint8Array(e);
                for (var o = 0; o < e.length; o++) t += "\\x", 16 > e[o] && (t += "0"), t += e[o].toString(16)
            }
            return t + '"'
        }, jspb.utils.debugScalarToTextFormat = function(e) {
            return "string" == typeof e ? goog.string.quote(e) : e.toString()
        }, jspb.utils.stringToByteArray = function(e) {
            for (var t = new Uint8Array(e.length), o = 0; o < e.length; o++) {
                var r = e.charCodeAt(o);
                if (255 < r) throw Error("Conversion error: string contains codepoint outside of byte range");
                t[o] = r
            }
            return t
        }, jspb.utils.byteSourceToUint8Array = function(e) {
            return e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer || "undefined" != typeof Buffer && e.constructor === Buffer || e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Type not convertible to Uint8Array."), new Uint8Array(0))
        }, jspb.BinaryDecoder = function(e, t, o) {
            this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1, e && this.setBlock(e, t, o)
        }, jspb.BinaryDecoder.instanceCache_ = [], jspb.BinaryDecoder.alloc = function(e, t, o) {
            if (jspb.BinaryDecoder.instanceCache_.length) {
                var r = jspb.BinaryDecoder.instanceCache_.pop();
                return e && r.setBlock(e, t, o), r
            }
            return new jspb.BinaryDecoder(e, t, o)
        }, jspb.BinaryDecoder.prototype.free = function() {
            this.clear(), 100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this)
        }, jspb.BinaryDecoder.prototype.clone = function() {
            return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
        }, jspb.BinaryDecoder.prototype.clear = function() {
            this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1
        }, jspb.BinaryDecoder.prototype.getBuffer = function() {
            return this.bytes_
        }, jspb.BinaryDecoder.prototype.setBlock = function(e, t, o) {
            this.bytes_ = jspb.utils.byteSourceToUint8Array(e), this.start_ = void 0 !== t ? t : 0, this.end_ = void 0 !== o ? this.start_ + o : this.bytes_.length, this.cursor_ = this.start_
        }, jspb.BinaryDecoder.prototype.getEnd = function() {
            return this.end_
        }, jspb.BinaryDecoder.prototype.setEnd = function(e) {
            this.end_ = e
        }, jspb.BinaryDecoder.prototype.reset = function() {
            this.cursor_ = this.start_
        }, jspb.BinaryDecoder.prototype.getCursor = function() {
            return this.cursor_
        }, jspb.BinaryDecoder.prototype.setCursor = function(e) {
            this.cursor_ = e
        }, jspb.BinaryDecoder.prototype.advance = function(e) {
            this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_)
        }, jspb.BinaryDecoder.prototype.atEnd = function() {
            return this.cursor_ == this.end_
        }, jspb.BinaryDecoder.prototype.pastEnd = function() {
            return this.cursor_ > this.end_
        }, jspb.BinaryDecoder.prototype.getError = function() {
            return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_
        }, jspb.BinaryDecoder.prototype.readSplitVarint64 = function(e) {
            for (var t = 128, o = 0, r = 0, s = 0; 4 > s && 128 <= t; s++) o |= (127 & (t = this.bytes_[this.cursor_++])) << 7 * s;
            if (128 <= t && (o |= (127 & (t = this.bytes_[this.cursor_++])) << 28, r |= (127 & t) >> 4), 128 <= t)
                for (s = 0; 5 > s && 128 <= t; s++) r |= (127 & (t = this.bytes_[this.cursor_++])) << 7 * s + 3;
            if (128 > t) return e(o >>> 0, r >>> 0);
            goog.asserts.fail("Failed to read varint, encoding is invalid."), this.error_ = !0
        }, jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(e) {
            return this.readSplitVarint64((function(t, o) {
                return jspb.utils.fromZigzag64(t, o, e)
            }))
        }, jspb.BinaryDecoder.prototype.readSplitFixed64 = function(e) {
            var t = this.bytes_,
                o = this.cursor_;
            this.cursor_ += 8;
            for (var r = 0, s = 0, n = o + 7; n >= o; n--) r = r << 8 | t[n], s = s << 8 | t[n + 4];
            return e(r, s)
        }, jspb.BinaryDecoder.prototype.skipVarint = function() {
            for (; 128 & this.bytes_[this.cursor_];) this.cursor_++;
            this.cursor_++
        }, jspb.BinaryDecoder.prototype.unskipVarint = function(e) {
            for (; 128 < e;) this.cursor_--, e >>>= 7;
            this.cursor_--
        }, jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
            var e = this.bytes_,
                t = e[this.cursor_ + 0],
                o = 127 & t;
            return 128 > t ? (this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (127 & (t = e[this.cursor_ + 1])) << 7, 128 > t ? (this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (127 & (t = e[this.cursor_ + 2])) << 14, 128 > t ? (this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (127 & (t = e[this.cursor_ + 3])) << 21, 128 > t ? (this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), o) : (o |= (15 & (t = e[this.cursor_ + 4])) << 28, 128 > t ? (this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), o >>> 0) : (this.cursor_ += 5, 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && 128 <= e[this.cursor_++] && goog.asserts.assert(!1), goog.asserts.assert(this.cursor_ <= this.end_), o)))))
        }, jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32, jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
            return this.readUnsignedVarint32().toString()
        }, jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
            return this.readSignedVarint32().toString()
        }, jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
            var e = this.readUnsignedVarint32();
            return e >>> 1 ^ -(1 & e)
        }, jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
            return this.readSplitVarint64(jspb.utils.joinUint64)
        }, jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
            return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)
        }, jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
            return this.readSplitVarint64(jspb.utils.joinInt64)
        }, jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
            return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)
        }, jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
            return this.readSplitVarint64(jspb.utils.joinZigzag64)
        }, jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
            return this.readSplitZigzagVarint64(jspb.utils.joinHash64)
        }, jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
            return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)
        }, jspb.BinaryDecoder.prototype.readUint8 = function() {
            var e = this.bytes_[this.cursor_ + 0];
            return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e
        }, jspb.BinaryDecoder.prototype.readUint16 = function() {
            var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1];
            return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8
        }, jspb.BinaryDecoder.prototype.readUint32 = function() {
            var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1],
                o = this.bytes_[this.cursor_ + 2],
                r = this.bytes_[this.cursor_ + 3];
            return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8 | o << 16 | r << 24) >>> 0
        }, jspb.BinaryDecoder.prototype.readUint64 = function() {
            var e = this.readUint32(),
                t = this.readUint32();
            return jspb.utils.joinUint64(e, t)
        }, jspb.BinaryDecoder.prototype.readUint64String = function() {
            var e = this.readUint32(),
                t = this.readUint32();
            return jspb.utils.joinUnsignedDecimalString(e, t)
        }, jspb.BinaryDecoder.prototype.readInt8 = function() {
            var e = this.bytes_[this.cursor_ + 0];
            return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e << 24 >> 24
        }, jspb.BinaryDecoder.prototype.readInt16 = function() {
            var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1];
            return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8) << 16 >> 16
        }, jspb.BinaryDecoder.prototype.readInt32 = function() {
            var e = this.bytes_[this.cursor_ + 0],
                t = this.bytes_[this.cursor_ + 1],
                o = this.bytes_[this.cursor_ + 2],
                r = this.bytes_[this.cursor_ + 3];
            return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8 | o << 16 | r << 24
        }, jspb.BinaryDecoder.prototype.readInt64 = function() {
            var e = this.readUint32(),
                t = this.readUint32();
            return jspb.utils.joinInt64(e, t)
        }, jspb.BinaryDecoder.prototype.readInt64String = function() {
            var e = this.readUint32(),
                t = this.readUint32();
            return jspb.utils.joinSignedDecimalString(e, t)
        }, jspb.BinaryDecoder.prototype.readFloat = function() {
            var e = this.readUint32();
            return jspb.utils.joinFloat32(e, 0)
        }, jspb.BinaryDecoder.prototype.readDouble = function() {
            var e = this.readUint32(),
                t = this.readUint32();
            return jspb.utils.joinFloat64(e, t)
        }, jspb.BinaryDecoder.prototype.readBool = function() {
            return !!this.bytes_[this.cursor_++]
        }, jspb.BinaryDecoder.prototype.readEnum = function() {
            return this.readSignedVarint32()
        }, jspb.BinaryDecoder.prototype.readString = function(e) {
            var t = this.bytes_,
                o = this.cursor_;
            e = o + e;
            for (var r = [], s = ""; o < e;) {
                var n = t[o++];
                if (128 > n) r.push(n);
                else {
                    if (192 > n) continue;
                    if (224 > n) {
                        var i = t[o++];
                        r.push((31 & n) << 6 | 63 & i)
                    } else if (240 > n) {
                        i = t[o++];
                        var a = t[o++];
                        r.push((15 & n) << 12 | (63 & i) << 6 | 63 & a)
                    } else if (248 > n) {
                        n = (7 & n) << 18 | (63 & (i = t[o++])) << 12 | (63 & (a = t[o++])) << 6 | 63 & t[o++], n -= 65536, r.push(55296 + (n >> 10 & 1023), 56320 + (1023 & n))
                    }
                }
                8192 <= r.length && (s += String.fromCharCode.apply(null, r), r.length = 0)
            }
            return s += goog.crypt.byteArrayToString(r), this.cursor_ = o, s
        }, jspb.BinaryDecoder.prototype.readStringWithLength = function() {
            var e = this.readUnsignedVarint32();
            return this.readString(e)
        }, jspb.BinaryDecoder.prototype.readBytes = function(e) {
            if (0 > e || this.cursor_ + e > this.bytes_.length) return this.error_ = !0, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
            var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
            return this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_), t
        }, jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
            return this.readSplitVarint64(jspb.utils.joinHash64)
        }, jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
            var e = this.bytes_,
                t = this.cursor_,
                o = e[t + 0],
                r = e[t + 1],
                s = e[t + 2],
                n = e[t + 3],
                i = e[t + 4],
                a = e[t + 5],
                g = e[t + 6];
            return e = e[t + 7], this.cursor_ += 8, String.fromCharCode(o, r, s, n, i, a, g, e)
        }, jspb.BinaryReader = function(e, t, o) {
            this.decoder_ = jspb.BinaryDecoder.alloc(e, t, o), this.fieldCursor_ = this.decoder_.getCursor(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null
        }, jspb.BinaryReader.instanceCache_ = [], jspb.BinaryReader.alloc = function(e, t, o) {
            if (jspb.BinaryReader.instanceCache_.length) {
                var r = jspb.BinaryReader.instanceCache_.pop();
                return e && r.decoder_.setBlock(e, t, o), r
            }
            return new jspb.BinaryReader(e, t, o)
        }, jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc, jspb.BinaryReader.prototype.free = function() {
            this.decoder_.clear(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null, 100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this)
        }, jspb.BinaryReader.prototype.getFieldCursor = function() {
            return this.fieldCursor_
        }, jspb.BinaryReader.prototype.getCursor = function() {
            return this.decoder_.getCursor()
        }, jspb.BinaryReader.prototype.getBuffer = function() {
            return this.decoder_.getBuffer()
        }, jspb.BinaryReader.prototype.getFieldNumber = function() {
            return this.nextField_
        }, jspb.BinaryReader.prototype.getWireType = function() {
            return this.nextWireType_
        }, jspb.BinaryReader.prototype.isEndGroup = function() {
            return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
        }, jspb.BinaryReader.prototype.getError = function() {
            return this.error_ || this.decoder_.getError()
        }, jspb.BinaryReader.prototype.setBlock = function(e, t, o) {
            this.decoder_.setBlock(e, t, o), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
        }, jspb.BinaryReader.prototype.reset = function() {
            this.decoder_.reset(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
        }, jspb.BinaryReader.prototype.advance = function(e) {
            this.decoder_.advance(e)
        }, jspb.BinaryReader.prototype.nextField = function() {
            if (this.decoder_.atEnd()) return !1;
            if (this.getError()) return goog.asserts.fail("Decoder hit an error"), !1;
            this.fieldCursor_ = this.decoder_.getCursor();
            var e = this.decoder_.readUnsignedVarint32(),
                t = e >>> 3;
            return (e &= 7) != jspb.BinaryConstants.WireType.VARINT && e != jspb.BinaryConstants.WireType.FIXED32 && e != jspb.BinaryConstants.WireType.FIXED64 && e != jspb.BinaryConstants.WireType.DELIMITED && e != jspb.BinaryConstants.WireType.START_GROUP && e != jspb.BinaryConstants.WireType.END_GROUP ? (goog.asserts.fail("Invalid wire type: %s (at position %s)", e, this.fieldCursor_), this.error_ = !0, !1) : (this.nextField_ = t, this.nextWireType_ = e, !0)
        }, jspb.BinaryReader.prototype.unskipHeader = function() {
            this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_)
        }, jspb.BinaryReader.prototype.skipMatchingFields = function() {
            var e = this.nextField_;
            for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e;) this.skipField();
            this.decoder_.atEnd() || this.unskipHeader()
        }, jspb.BinaryReader.prototype.skipVarintField = function() {
            this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint()
        }, jspb.BinaryReader.prototype.skipDelimitedField = function() {
            if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED) goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
            else {
                var e = this.decoder_.readUnsignedVarint32();
                this.decoder_.advance(e)
            }
        }, jspb.BinaryReader.prototype.skipFixed32Field = function() {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4)
        }, jspb.BinaryReader.prototype.skipFixed64Field = function() {
            this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8)
        }, jspb.BinaryReader.prototype.skipGroup = function() {
            for (var e = this.nextField_;;) {
                if (!this.nextField()) {
                    goog.asserts.fail("Unmatched start-group tag: stream EOF"), this.error_ = !0;
                    break
                }
                if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
                    this.nextField_ != e && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = !0);
                    break
                }
                this.skipField()
            }
        }, jspb.BinaryReader.prototype.skipField = function() {
            switch (this.nextWireType_) {
                case jspb.BinaryConstants.WireType.VARINT:
                    this.skipVarintField();
                    break;
                case jspb.BinaryConstants.WireType.FIXED64:
                    this.skipFixed64Field();
                    break;
                case jspb.BinaryConstants.WireType.DELIMITED:
                    this.skipDelimitedField();
                    break;
                case jspb.BinaryConstants.WireType.FIXED32:
                    this.skipFixed32Field();
                    break;
                case jspb.BinaryConstants.WireType.START_GROUP:
                    this.skipGroup();
                    break;
                default:
                    goog.asserts.fail("Invalid wire encoding for field.")
            }
        }, jspb.BinaryReader.prototype.registerReadCallback = function(e, t) {
            null === this.readCallbacks_ && (this.readCallbacks_ = {}), goog.asserts.assert(!this.readCallbacks_[e]), this.readCallbacks_[e] = t
        }, jspb.BinaryReader.prototype.runReadCallback = function(e) {
            return goog.asserts.assert(null !== this.readCallbacks_), e = this.readCallbacks_[e], goog.asserts.assert(e), e(this)
        }, jspb.BinaryReader.prototype.readAny = function(e) {
            this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
            var t = jspb.BinaryConstants.FieldType;
            switch (e) {
                case t.DOUBLE:
                    return this.readDouble();
                case t.FLOAT:
                    return this.readFloat();
                case t.INT64:
                    return this.readInt64();
                case t.UINT64:
                    return this.readUint64();
                case t.INT32:
                    return this.readInt32();
                case t.FIXED64:
                    return this.readFixed64();
                case t.FIXED32:
                    return this.readFixed32();
                case t.BOOL:
                    return this.readBool();
                case t.STRING:
                    return this.readString();
                case t.GROUP:
                    goog.asserts.fail("Group field type not supported in readAny()");
                case t.MESSAGE:
                    goog.asserts.fail("Message field type not supported in readAny()");
                case t.BYTES:
                    return this.readBytes();
                case t.UINT32:
                    return this.readUint32();
                case t.ENUM:
                    return this.readEnum();
                case t.SFIXED32:
                    return this.readSfixed32();
                case t.SFIXED64:
                    return this.readSfixed64();
                case t.SINT32:
                    return this.readSint32();
                case t.SINT64:
                    return this.readSint64();
                case t.FHASH64:
                    return this.readFixedHash64();
                case t.VHASH64:
                    return this.readVarintHash64();
                default:
                    goog.asserts.fail("Invalid field type in readAny()")
            }
            return 0
        }, jspb.BinaryReader.prototype.readMessage = function(e, t) {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var o = this.decoder_.getEnd(),
                r = this.decoder_.readUnsignedVarint32();
            r = this.decoder_.getCursor() + r, this.decoder_.setEnd(r), t(e, this), this.decoder_.setCursor(r), this.decoder_.setEnd(o)
        }, jspb.BinaryReader.prototype.readGroup = function(e, t, o) {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP), goog.asserts.assert(this.nextField_ == e), o(t, this), this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = !0)
        }, jspb.BinaryReader.prototype.getFieldDecoder = function() {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32(),
                t = this.decoder_.getCursor(),
                o = t + e;
            return e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e), this.decoder_.setCursor(o), e
        }, jspb.BinaryReader.prototype.readInt32 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32()
        }, jspb.BinaryReader.prototype.readInt32String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32String()
        }, jspb.BinaryReader.prototype.readInt64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
        }, jspb.BinaryReader.prototype.readInt64String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64String()
        }, jspb.BinaryReader.prototype.readUint32 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32()
        }, jspb.BinaryReader.prototype.readUint32String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32String()
        }, jspb.BinaryReader.prototype.readUint64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64()
        }, jspb.BinaryReader.prototype.readUint64String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64String()
        }, jspb.BinaryReader.prototype.readSint32 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint32()
        }, jspb.BinaryReader.prototype.readSint64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64()
        }, jspb.BinaryReader.prototype.readSint64String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64String()
        }, jspb.BinaryReader.prototype.readFixed32 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readUint32()
        }, jspb.BinaryReader.prototype.readFixed64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64()
        }, jspb.BinaryReader.prototype.readFixed64String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64String()
        }, jspb.BinaryReader.prototype.readSfixed32 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32()
        }, jspb.BinaryReader.prototype.readSfixed32String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32().toString()
        }, jspb.BinaryReader.prototype.readSfixed64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64()
        }, jspb.BinaryReader.prototype.readSfixed64String = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64String()
        }, jspb.BinaryReader.prototype.readFloat = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readFloat()
        }, jspb.BinaryReader.prototype.readDouble = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readDouble()
        }, jspb.BinaryReader.prototype.readBool = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), !!this.decoder_.readUnsignedVarint32()
        }, jspb.BinaryReader.prototype.readEnum = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
        }, jspb.BinaryReader.prototype.readString = function() {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32();
            return this.decoder_.readString(e)
        }, jspb.BinaryReader.prototype.readBytes = function() {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var e = this.decoder_.readUnsignedVarint32();
            return this.decoder_.readBytes(e)
        }, jspb.BinaryReader.prototype.readVarintHash64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readVarintHash64()
        }, jspb.BinaryReader.prototype.readSintHash64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarintHash64()
        }, jspb.BinaryReader.prototype.readSplitVarint64 = function(e) {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSplitVarint64(e)
        }, jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(e) {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSplitVarint64((function(t, o) {
                return jspb.utils.fromZigzag64(t, o, e)
            }))
        }, jspb.BinaryReader.prototype.readFixedHash64 = function() {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readFixedHash64()
        }, jspb.BinaryReader.prototype.readSplitFixed64 = function(e) {
            return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readSplitFixed64(e)
        }, jspb.BinaryReader.prototype.readPackedField_ = function(e) {
            goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
            var t = this.decoder_.readUnsignedVarint32();
            t = this.decoder_.getCursor() + t;
            for (var o = []; this.decoder_.getCursor() < t;) o.push(e.call(this.decoder_));
            return o
        }, jspb.BinaryReader.prototype.readPackedInt32 = function() {
            return this.readPackedField_(this.decoder_.readSignedVarint32)
        }, jspb.BinaryReader.prototype.readPackedInt32String = function() {
            return this.readPackedField_(this.decoder_.readSignedVarint32String)
        }, jspb.BinaryReader.prototype.readPackedInt64 = function() {
            return this.readPackedField_(this.decoder_.readSignedVarint64)
        }, jspb.BinaryReader.prototype.readPackedInt64String = function() {
            return this.readPackedField_(this.decoder_.readSignedVarint64String)
        }, jspb.BinaryReader.prototype.readPackedUint32 = function() {
            return this.readPackedField_(this.decoder_.readUnsignedVarint32)
        }, jspb.BinaryReader.prototype.readPackedUint32String = function() {
            return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
        }, jspb.BinaryReader.prototype.readPackedUint64 = function() {
            return this.readPackedField_(this.decoder_.readUnsignedVarint64)
        }, jspb.BinaryReader.prototype.readPackedUint64String = function() {
            return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
        }, jspb.BinaryReader.prototype.readPackedSint32 = function() {
            return this.readPackedField_(this.decoder_.readZigzagVarint32)
        }, jspb.BinaryReader.prototype.readPackedSint64 = function() {
            return this.readPackedField_(this.decoder_.readZigzagVarint64)
        }, jspb.BinaryReader.prototype.readPackedSint64String = function() {
            return this.readPackedField_(this.decoder_.readZigzagVarint64String)
        }, jspb.BinaryReader.prototype.readPackedFixed32 = function() {
            return this.readPackedField_(this.decoder_.readUint32)
        }, jspb.BinaryReader.prototype.readPackedFixed64 = function() {
            return this.readPackedField_(this.decoder_.readUint64)
        }, jspb.BinaryReader.prototype.readPackedFixed64String = function() {
            return this.readPackedField_(this.decoder_.readUint64String)
        }, jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
            return this.readPackedField_(this.decoder_.readInt32)
        }, jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
            return this.readPackedField_(this.decoder_.readInt64)
        }, jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
            return this.readPackedField_(this.decoder_.readInt64String)
        }, jspb.BinaryReader.prototype.readPackedFloat = function() {
            return this.readPackedField_(this.decoder_.readFloat)
        }, jspb.BinaryReader.prototype.readPackedDouble = function() {
            return this.readPackedField_(this.decoder_.readDouble)
        }, jspb.BinaryReader.prototype.readPackedBool = function() {
            return this.readPackedField_(this.decoder_.readBool)
        }, jspb.BinaryReader.prototype.readPackedEnum = function() {
            return this.readPackedField_(this.decoder_.readEnum)
        }, jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
            return this.readPackedField_(this.decoder_.readVarintHash64)
        }, jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
            return this.readPackedField_(this.decoder_.readFixedHash64)
        }, jspb.Map = function(e, t) {
            this.arr_ = e, this.valueCtor_ = t, this.map_ = {}, this.arrClean = !0, 0 < this.arr_.length && this.loadFromArray_()
        }, jspb.Map.prototype.loadFromArray_ = function() {
            for (var e = 0; e < this.arr_.length; e++) {
                var t = this.arr_[e],
                    o = t[0];
                this.map_[o.toString()] = new jspb.Map.Entry_(o, t[1])
            }
            this.arrClean = !0
        }, jspb.Map.prototype.toArray = function() {
            if (this.arrClean) {
                if (this.valueCtor_) {
                    var e, t = this.map_;
                    for (e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e)) {
                            var o = t[e].valueWrapper;
                            o && o.toArray()
                        }
                }
            } else {
                for (this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0; e < t.length; e++) {
                    var r = this.map_[t[e]];
                    (o = r.valueWrapper) && o.toArray(), this.arr_.push([r.key, r.value])
                }
                this.arrClean = !0
            }
            return this.arr_
        }, jspb.Map.prototype.toObject = function(e, t) {
            for (var o = this.toArray(), r = [], s = 0; s < o.length; s++) {
                var n = this.map_[o[s][0].toString()];
                this.wrapEntry_(n);
                var i = n.valueWrapper;
                i ? (goog.asserts.assert(t), r.push([n.key, t(e, i)])) : r.push([n.key, n.value])
            }
            return r
        }, jspb.Map.fromObject = function(e, t, o) {
            t = new jspb.Map([], t);
            for (var r = 0; r < e.length; r++) {
                var s = e[r][0],
                    n = o(e[r][1]);
                t.set(s, n)
            }
            return t
        }, jspb.Map.ArrayIteratorIterable_ = function(e) {
            this.idx_ = 0, this.arr_ = e
        }, jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
            return this.idx_ < this.arr_.length ? {
                done: !1,
                value: this.arr_[this.idx_++]
            } : {
                done: !0,
                value: void 0
            }
        }, "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
            return this
        }), jspb.Map.prototype.getLength = function() {
            return this.stringKeys_().length
        }, jspb.Map.prototype.clear = function() {
            this.map_ = {}, this.arrClean = !1
        }, jspb.Map.prototype.del = function(e) {
            e = e.toString();
            var t = this.map_.hasOwnProperty(e);
            return delete this.map_[e], this.arrClean = !1, t
        }, jspb.Map.prototype.getEntryList = function() {
            var e = [],
                t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++) {
                var r = this.map_[t[o]];
                e.push([r.key, r.value])
            }
            return e
        }, jspb.Map.prototype.entries = function() {
            var e = [],
                t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++) {
                var r = this.map_[t[o]];
                e.push([r.key, this.wrapEntry_(r)])
            }
            return new jspb.Map.ArrayIteratorIterable_(e)
        }, jspb.Map.prototype.keys = function() {
            var e = [],
                t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++) e.push(this.map_[t[o]].key);
            return new jspb.Map.ArrayIteratorIterable_(e)
        }, jspb.Map.prototype.values = function() {
            var e = [],
                t = this.stringKeys_();
            t.sort();
            for (var o = 0; o < t.length; o++) e.push(this.wrapEntry_(this.map_[t[o]]));
            return new jspb.Map.ArrayIteratorIterable_(e)
        }, jspb.Map.prototype.forEach = function(e, t) {
            var o = this.stringKeys_();
            o.sort();
            for (var r = 0; r < o.length; r++) {
                var s = this.map_[o[r]];
                e.call(t, this.wrapEntry_(s), s.key, this)
            }
        }, jspb.Map.prototype.set = function(e, t) {
            var o = new jspb.Map.Entry_(e);
            return this.valueCtor_ ? (o.valueWrapper = t, o.value = t.toArray()) : o.value = t, this.map_[e.toString()] = o, this.arrClean = !1, this
        }, jspb.Map.prototype.wrapEntry_ = function(e) {
            return this.valueCtor_ ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)), e.valueWrapper) : e.value
        }, jspb.Map.prototype.get = function(e) {
            if (e = this.map_[e.toString()]) return this.wrapEntry_(e)
        }, jspb.Map.prototype.has = function(e) {
            return e.toString() in this.map_
        }, jspb.Map.prototype.serializeBinary = function(e, t, o, r, s) {
            var n = this.stringKeys_();
            n.sort();
            for (var i = 0; i < n.length; i++) {
                var a = this.map_[n[i]];
                t.beginSubMessage(e), o.call(t, 1, a.key), this.valueCtor_ ? r.call(t, 2, this.wrapEntry_(a), s) : r.call(t, 2, a.value), t.endSubMessage()
            }
        }, jspb.Map.deserializeBinary = function(e, t, o, r, s, n, i) {
            for (; t.nextField() && !t.isEndGroup();) {
                var a = t.getFieldNumber();
                1 == a ? n = o.call(t) : 2 == a && (e.valueCtor_ ? (goog.asserts.assert(s), i || (i = new e.valueCtor_), r.call(t, i, s)) : i = r.call(t))
            }
            goog.asserts.assert(null != n), goog.asserts.assert(null != i), e.set(n, i)
        }, jspb.Map.prototype.stringKeys_ = function() {
            var e, t = this.map_,
                o = [];
            for (e in t) Object.prototype.hasOwnProperty.call(t, e) && o.push(e);
            return o
        }, jspb.Map.Entry_ = function(e, t) {
            this.key = e, this.value = t, this.valueWrapper = void 0
        }, jspb.ExtensionFieldInfo = function(e, t, o, r, s) {
            this.fieldIndex = e, this.fieldName = t, this.ctor = o, this.toObjectFn = r, this.isRepeated = s
        }, jspb.ExtensionFieldBinaryInfo = function(e, t, o, r, s, n) {
            this.fieldInfo = e, this.binaryReaderFn = t, this.binaryWriterFn = o, this.binaryMessageSerializeFn = r, this.binaryMessageDeserializeFn = s, this.isPacked = n
        }, jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
            return !!this.ctor
        }, jspb.Message = function() {}, jspb.Message.GENERATE_TO_OBJECT = !0, jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE, jspb.Message.GENERATE_TO_STRING = !0, jspb.Message.ASSUME_LOCAL_ARRAYS = !1, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0, jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array, jspb.Message.prototype.getJsPbMessageId = function() {
            return this.messageId_
        }, jspb.Message.getIndex_ = function(e, t) {
            return t + e.arrayIndexOffset_
        }, jspb.Message.hiddenES6Property_ = function() {}, jspb.Message.getFieldNumber_ = function(e, t) {
            return t - e.arrayIndexOffset_
        }, jspb.Message.initialize = function(e, t, o, r, s, n) {
            if (e.wrappers_ = null, t || (t = o ? [o] : []), e.messageId_ = o ? String(o) : void 0, e.arrayIndexOffset_ = 0 === o ? -1 : 0, e.array = t, jspb.Message.initPivotAndExtensionObject_(e, r), e.convertedPrimitiveFields_ = {}, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = s), s)
                for (t = 0; t < s.length; t++)(o = s[t]) < e.pivot_ ? (o = jspb.Message.getIndex_(e, o), e.array[o] = e.array[o] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[o] = e.extensionObject_[o] || jspb.Message.EMPTY_LIST_SENTINEL_);
            if (n && n.length)
                for (t = 0; t < n.length; t++) jspb.Message.computeOneofCase(e, n[t])
        }, jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [], jspb.Message.isArray_ = function(e) {
            return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : goog.isArray(e)
        }, jspb.Message.isExtensionObject_ = function(e) {
            return !(null === e || "object" != typeof e || jspb.Message.isArray_(e) || jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
        }, jspb.Message.initPivotAndExtensionObject_ = function(e, t) {
            var o = e.array.length,
                r = -1;
            if (o && (r = o - 1, o = e.array[r], jspb.Message.isExtensionObject_(o))) return e.pivot_ = jspb.Message.getFieldNumber_(e, r), void(e.extensionObject_ = o); - 1 < t ? (e.pivot_ = Math.max(t, jspb.Message.getFieldNumber_(e, r + 1)), e.extensionObject_ = null) : e.pivot_ = Number.MAX_VALUE
        }, jspb.Message.maybeInitEmptyExtensionObject_ = function(e) {
            var t = jspb.Message.getIndex_(e, e.pivot_);
            e.array[t] || (e.extensionObject_ = e.array[t] = {})
        }, jspb.Message.toObjectList = function(e, t, o) {
            for (var r = [], s = 0; s < e.length; s++) r[s] = t.call(e[s], o, e[s]);
            return r
        }, jspb.Message.toObjectExtension = function(e, t, o, r, s) {
            for (var n in o) {
                var i = o[n],
                    a = r.call(e, i);
                if (null != a) {
                    for (var g in i.fieldName)
                        if (i.fieldName.hasOwnProperty(g)) break;
                    t[g] = i.toObjectFn ? i.isRepeated ? jspb.Message.toObjectList(a, i.toObjectFn, s) : i.toObjectFn(s, a) : a
                }
            }
        }, jspb.Message.serializeBinaryExtensions = function(e, t, o, r) {
            for (var s in o) {
                var n = o[s],
                    i = n.fieldInfo;
                if (!n.binaryWriterFn) throw Error("Message extension present that was generated without binary serialization support");
                var a = r.call(e, i);
                if (null != a)
                    if (i.isMessageType()) {
                        if (!n.binaryMessageSerializeFn) throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
                        n.binaryWriterFn.call(t, i.fieldIndex, a, n.binaryMessageSerializeFn)
                    } else n.binaryWriterFn.call(t, i.fieldIndex, a)
            }
        }, jspb.Message.readBinaryExtension = function(e, t, o, r, s) {
            var n = o[t.getFieldNumber()];
            if (n) {
                if (o = n.fieldInfo, !n.binaryReaderFn) throw Error("Deserializing extension whose generated code does not support binary format");
                if (o.isMessageType()) {
                    var i = new o.ctor;
                    n.binaryReaderFn.call(t, i, n.binaryMessageDeserializeFn)
                } else i = n.binaryReaderFn.call(t);
                o.isRepeated && !n.isPacked ? (t = r.call(e, o)) ? t.push(i) : s.call(e, o, [i]) : s.call(e, o, i)
            } else t.skipField()
        }, jspb.Message.getField = function(e, t) {
            if (t < e.pivot_) {
                t = jspb.Message.getIndex_(e, t);
                var o = e.array[t];
                return o === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[t] = [] : o
            }
            if (e.extensionObject_) return (o = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : o
        }, jspb.Message.getRepeatedField = function(e, t) {
            return jspb.Message.getField(e, t)
        }, jspb.Message.getOptionalFloatingPointField = function(e, t) {
            return null == (e = jspb.Message.getField(e, t)) ? e : +e
        }, jspb.Message.getBooleanField = function(e, t) {
            return null == (e = jspb.Message.getField(e, t)) ? e : !!e
        }, jspb.Message.getRepeatedFloatingPointField = function(e, t) {
            var o = jspb.Message.getRepeatedField(e, t);
            if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}), !e.convertedPrimitiveFields_[t]) {
                for (var r = 0; r < o.length; r++) o[r] = +o[r];
                e.convertedPrimitiveFields_[t] = !0
            }
            return o
        }, jspb.Message.getRepeatedBooleanField = function(e, t) {
            var o = jspb.Message.getRepeatedField(e, t);
            if (e.convertedPrimitiveFields_ || (e.convertedPrimitiveFields_ = {}), !e.convertedPrimitiveFields_[t]) {
                for (var r = 0; r < o.length; r++) o[r] = !!o[r];
                e.convertedPrimitiveFields_[t] = !0
            }
            return o
        }, jspb.Message.bytesAsB64 = function(e) {
            return null == e || "string" == typeof e ? e : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(e) : (goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(e)), null)
        }, jspb.Message.bytesAsU8 = function(e) {
            return null == e || e instanceof Uint8Array ? e : "string" == typeof e ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(e)), null)
        }, jspb.Message.bytesListAsB64 = function(e) {
            return jspb.Message.assertConsistentTypes_(e), e.length && "string" != typeof e[0] ? goog.array.map(e, jspb.Message.bytesAsB64) : e
        }, jspb.Message.bytesListAsU8 = function(e) {
            return jspb.Message.assertConsistentTypes_(e), !e.length || e[0] instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8)
        }, jspb.Message.assertConsistentTypes_ = function(e) {
            if (goog.DEBUG && e && 1 < e.length) {
                var t = goog.typeOf(e[0]);
                goog.array.forEach(e, (function(e) {
                    goog.typeOf(e) != t && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(e) + " expected " + t)
                }))
            }
        }, jspb.Message.getFieldWithDefault = function(e, t, o) {
            return null == (e = jspb.Message.getField(e, t)) ? o : e
        }, jspb.Message.getBooleanFieldWithDefault = function(e, t, o) {
            return null == (e = jspb.Message.getBooleanField(e, t)) ? o : e
        }, jspb.Message.getFloatingPointFieldWithDefault = function(e, t, o) {
            return null == (e = jspb.Message.getOptionalFloatingPointField(e, t)) ? o : e
        }, jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault, jspb.Message.getMapField = function(e, t, o, r) {
            if (e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_) return e.wrappers_[t];
            var s = jspb.Message.getField(e, t);
            if (!s) {
                if (o) return;
                s = [], jspb.Message.setField(e, t, s)
            }
            return e.wrappers_[t] = new jspb.Map(s, r)
        }, jspb.Message.setField = function(e, t, o) {
            return goog.asserts.assertInstanceof(e, jspb.Message), t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = o : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[t] = o), e
        }, jspb.Message.setProto3IntField = function(e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
        }, jspb.Message.setProto3FloatField = function(e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
        }, jspb.Message.setProto3BooleanField = function(e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, !1)
        }, jspb.Message.setProto3StringField = function(e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, "")
        }, jspb.Message.setProto3BytesField = function(e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, "")
        }, jspb.Message.setProto3EnumField = function(e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, 0)
        }, jspb.Message.setProto3StringIntField = function(e, t, o) {
            return jspb.Message.setFieldIgnoringDefault_(e, t, o, "0")
        }, jspb.Message.setFieldIgnoringDefault_ = function(e, t, o, r) {
            return goog.asserts.assertInstanceof(e, jspb.Message), o !== r ? jspb.Message.setField(e, t, o) : e.array[jspb.Message.getIndex_(e, t)] = null, e
        }, jspb.Message.addToRepeatedField = function(e, t, o, r) {
            return goog.asserts.assertInstanceof(e, jspb.Message), t = jspb.Message.getRepeatedField(e, t), null != r ? t.splice(r, 0, o) : t.push(o), e
        }, jspb.Message.setOneofField = function(e, t, o, r) {
            return goog.asserts.assertInstanceof(e, jspb.Message), (o = jspb.Message.computeOneofCase(e, o)) && o !== t && void 0 !== r && (e.wrappers_ && o in e.wrappers_ && (e.wrappers_[o] = void 0), jspb.Message.setField(e, o, void 0)), jspb.Message.setField(e, t, r)
        }, jspb.Message.computeOneofCase = function(e, t) {
            for (var o, r, s = 0; s < t.length; s++) {
                var n = t[s],
                    i = jspb.Message.getField(e, n);
                null != i && (o = n, r = i, jspb.Message.setField(e, n, void 0))
            }
            return o ? (jspb.Message.setField(e, o, r), o) : 0
        }, jspb.Message.getWrapperField = function(e, t, o, r) {
            if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o]) {
                var s = jspb.Message.getField(e, o);
                (r || s) && (e.wrappers_[o] = new t(s))
            }
            return e.wrappers_[o]
        }, jspb.Message.getRepeatedWrapperField = function(e, t, o) {
            return jspb.Message.wrapRepeatedField_(e, t, o), (t = e.wrappers_[o]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (t = e.wrappers_[o] = []), t
        }, jspb.Message.wrapRepeatedField_ = function(e, t, o) {
            if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[o]) {
                for (var r = jspb.Message.getRepeatedField(e, o), s = [], n = 0; n < r.length; n++) s[n] = new t(r[n]);
                e.wrappers_[o] = s
            }
        }, jspb.Message.setWrapperField = function(e, t, o) {
            goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {});
            var r = o ? o.toArray() : o;
            return e.wrappers_[t] = o, jspb.Message.setField(e, t, r)
        }, jspb.Message.setOneofWrapperField = function(e, t, o, r) {
            goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {});
            var s = r ? r.toArray() : r;
            return e.wrappers_[t] = r, jspb.Message.setOneofField(e, t, o, s)
        }, jspb.Message.setRepeatedWrapperField = function(e, t, o) {
            goog.asserts.assertInstanceof(e, jspb.Message), e.wrappers_ || (e.wrappers_ = {}), o = o || [];
            for (var r = [], s = 0; s < o.length; s++) r[s] = o[s].toArray();
            return e.wrappers_[t] = o, jspb.Message.setField(e, t, r)
        }, jspb.Message.addToRepeatedWrapperField = function(e, t, o, r, s) {
            jspb.Message.wrapRepeatedField_(e, r, t);
            var n = e.wrappers_[t];
            return n || (n = e.wrappers_[t] = []), o = o || new r, e = jspb.Message.getRepeatedField(e, t), null != s ? (n.splice(s, 0, o), e.splice(s, 0, o.toArray())) : (n.push(o), e.push(o.toArray())), o
        }, jspb.Message.toMap = function(e, t, o, r) {
            for (var s = {}, n = 0; n < e.length; n++) s[t.call(e[n])] = o ? o.call(e[n], r, e[n]) : e[n];
            return s
        }, jspb.Message.prototype.syncMapFields_ = function() {
            if (this.wrappers_)
                for (var e in this.wrappers_) {
                    var t = this.wrappers_[e];
                    if (goog.isArray(t))
                        for (var o = 0; o < t.length; o++) t[o] && t[o].toArray();
                    else t && t.toArray()
                }
        }, jspb.Message.prototype.toArray = function() {
            return this.syncMapFields_(), this.array
        }, jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
            return this.syncMapFields_(), this.array.toString()
        }), jspb.Message.prototype.getExtension = function(e) {
            if (this.extensionObject_) {
                this.wrappers_ || (this.wrappers_ = {});
                var t = e.fieldIndex;
                if (e.isRepeated) {
                    if (e.isMessageType()) return this.wrappers_[t] || (this.wrappers_[t] = goog.array.map(this.extensionObject_[t] || [], (function(t) {
                        return new e.ctor(t)
                    }))), this.wrappers_[t]
                } else if (e.isMessageType()) return !this.wrappers_[t] && this.extensionObject_[t] && (this.wrappers_[t] = new e.ctor(this.extensionObject_[t])), this.wrappers_[t];
                return this.extensionObject_[t]
            }
        }, jspb.Message.prototype.setExtension = function(e, t) {
            this.wrappers_ || (this.wrappers_ = {}), jspb.Message.maybeInitEmptyExtensionObject_(this);
            var o = e.fieldIndex;
            return e.isRepeated ? (t = t || [], e.isMessageType() ? (this.wrappers_[o] = t, this.extensionObject_[o] = goog.array.map(t, (function(e) {
                return e.toArray()
            }))) : this.extensionObject_[o] = t) : e.isMessageType() ? (this.wrappers_[o] = t, this.extensionObject_[o] = t ? t.toArray() : t) : this.extensionObject_[o] = t, this
        }, jspb.Message.difference = function(e, t) {
            if (!(e instanceof t.constructor)) throw Error("Messages have different types.");
            var o = e.toArray();
            t = t.toArray();
            var r = [],
                s = 0,
                n = o.length > t.length ? o.length : t.length;
            for (e.getJsPbMessageId() && (r[0] = e.getJsPbMessageId(), s = 1); s < n; s++) jspb.Message.compareFields(o[s], t[s]) || (r[s] = t[s]);
            return new e.constructor(r)
        }, jspb.Message.equals = function(e, t) {
            return e == t || !(!e || !t) && e instanceof t.constructor && jspb.Message.compareFields(e.toArray(), t.toArray())
        }, jspb.Message.compareExtensions = function(e, t) {
            e = e || {}, t = t || {};
            var o, r = {};
            for (o in e) r[o] = 0;
            for (o in t) r[o] = 0;
            for (o in r)
                if (!jspb.Message.compareFields(e[o], t[o])) return !1;
            return !0
        }, jspb.Message.compareFields = function(e, t) {
            if (e == t) return !0;
            if (!goog.isObject(e) || !goog.isObject(t)) return !!("number" == typeof e && isNaN(e) || "number" == typeof t && isNaN(t)) && String(e) == String(t);
            if (e.constructor != t.constructor) return !1;
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
                if (e.length != t.length) return !1;
                for (var o = 0; o < e.length; o++)
                    if (e[o] != t[o]) return !1;
                return !0
            }
            if (e.constructor === Array) {
                var r = void 0,
                    s = void 0,
                    n = Math.max(e.length, t.length);
                for (o = 0; o < n; o++) {
                    var i = e[o],
                        a = t[o];
                    if (i && i.constructor == Object && (goog.asserts.assert(void 0 === r), goog.asserts.assert(o === e.length - 1), r = i, i = void 0), a && a.constructor == Object && (goog.asserts.assert(void 0 === s), goog.asserts.assert(o === t.length - 1), s = a, a = void 0), !jspb.Message.compareFields(i, a)) return !1
                }
                return !r && !s || (r = r || {}, s = s || {}, jspb.Message.compareExtensions(r, s))
            }
            if (e.constructor === Object) return jspb.Message.compareExtensions(e, t);
            throw Error("Invalid type in JSPB array")
        }, jspb.Message.prototype.cloneMessage = function() {
            return jspb.Message.cloneMessage(this)
        }, jspb.Message.prototype.clone = function() {
            return jspb.Message.cloneMessage(this)
        }, jspb.Message.clone = function(e) {
            return jspb.Message.cloneMessage(e)
        }, jspb.Message.cloneMessage = function(e) {
            return new e.constructor(jspb.Message.clone_(e.toArray()))
        }, jspb.Message.copyInto = function(e, t) {
            goog.asserts.assertInstanceof(e, jspb.Message), goog.asserts.assertInstanceof(t, jspb.Message), goog.asserts.assert(e.constructor == t.constructor, "Copy source and target message should have the same type."), e = jspb.Message.clone(e);
            for (var o = t.toArray(), r = e.toArray(), s = o.length = 0; s < r.length; s++) o[s] = r[s];
            t.wrappers_ = e.wrappers_, t.extensionObject_ = e.extensionObject_
        }, jspb.Message.clone_ = function(e) {
            if (goog.isArray(e)) {
                for (var t = Array(e.length), o = 0; o < e.length; o++) {
                    var r = e[o];
                    null != r && (t[o] = "object" == typeof r ? jspb.Message.clone_(goog.asserts.assert(r)) : r)
                }
                return t
            }
            if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array) return new Uint8Array(e);
            for (o in t = {}, e) null != (r = e[o]) && (t[o] = "object" == typeof r ? jspb.Message.clone_(goog.asserts.assert(r)) : r);
            return t
        }, jspb.Message.registerMessageType = function(e, t) {
            t.messageId = e
        }, jspb.Message.messageSetExtensions = {}, jspb.Message.messageSetExtensionsBinary = {}, jspb.arith = {}, jspb.arith.UInt64 = function(e, t) {
            this.lo = e, this.hi = t
        }, jspb.arith.UInt64.prototype.cmp = function(e) {
            return this.hi < e.hi || this.hi == e.hi && this.lo < e.lo ? -1 : this.hi == e.hi && this.lo == e.lo ? 0 : 1
        }, jspb.arith.UInt64.prototype.rightShift = function() {
            return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0, this.hi >>> 1 >>> 0)
        }, jspb.arith.UInt64.prototype.leftShift = function() {
            return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0)
        }, jspb.arith.UInt64.prototype.msb = function() {
            return !!(2147483648 & this.hi)
        }, jspb.arith.UInt64.prototype.lsb = function() {
            return !!(1 & this.lo)
        }, jspb.arith.UInt64.prototype.zero = function() {
            return 0 == this.lo && 0 == this.hi
        }, jspb.arith.UInt64.prototype.add = function(e) {
            return new jspb.arith.UInt64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
        }, jspb.arith.UInt64.prototype.sub = function(e) {
            return new jspb.arith.UInt64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
        }, jspb.arith.UInt64.mul32x32 = function(e, t) {
            var o = 65535 & e,
                r = 65535 & t,
                s = t >>> 16;
            for (t = o * r + 65536 * (o * s & 65535) + 65536 * ((e >>>= 16) * r & 65535), o = e * s + (o * s >>> 16) + (e * r >>> 16); 4294967296 <= t;) t -= 4294967296, o += 1;
            return new jspb.arith.UInt64(t >>> 0, o >>> 0)
        }, jspb.arith.UInt64.prototype.mul = function(e) {
            var t = jspb.arith.UInt64.mul32x32(this.lo, e);
            return (e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo, e.lo = 0, t.add(e)
        }, jspb.arith.UInt64.prototype.div = function(e) {
            if (0 == e) return [];
            var t = new jspb.arith.UInt64(0, 0),
                o = new jspb.arith.UInt64(this.lo, this.hi);
            e = new jspb.arith.UInt64(e, 0);
            for (var r = new jspb.arith.UInt64(1, 0); !e.msb();) e = e.leftShift(), r = r.leftShift();
            for (; !r.zero();) 0 >= e.cmp(o) && (t = t.add(r), o = o.sub(e)), e = e.rightShift(), r = r.rightShift();
            return [t, o]
        }, jspb.arith.UInt64.prototype.toString = function() {
            for (var e = "", t = this; !t.zero();) {
                var o = (t = t.div(10))[0];
                e = t[1].lo + e, t = o
            }
            return "" == e && (e = "0"), e
        }, jspb.arith.UInt64.fromString = function(e) {
            for (var t = new jspb.arith.UInt64(0, 0), o = new jspb.arith.UInt64(0, 0), r = 0; r < e.length; r++) {
                if ("0" > e[r] || "9" < e[r]) return null;
                var s = parseInt(e[r], 10);
                o.lo = s, t = t.mul(10).add(o)
            }
            return t
        }, jspb.arith.UInt64.prototype.clone = function() {
            return new jspb.arith.UInt64(this.lo, this.hi)
        }, jspb.arith.Int64 = function(e, t) {
            this.lo = e, this.hi = t
        }, jspb.arith.Int64.prototype.add = function(e) {
            return new jspb.arith.Int64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
        }, jspb.arith.Int64.prototype.sub = function(e) {
            return new jspb.arith.Int64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (0 > this.lo - e.lo ? 1 : 0) >>> 0)
        }, jspb.arith.Int64.prototype.clone = function() {
            return new jspb.arith.Int64(this.lo, this.hi)
        }, jspb.arith.Int64.prototype.toString = function() {
            var e = 0 != (2147483648 & this.hi),
                t = new jspb.arith.UInt64(this.lo, this.hi);
            return e && (t = new jspb.arith.UInt64(0, 0).sub(t)), (e ? "-" : "") + t.toString()
        }, jspb.arith.Int64.fromString = function(e) {
            var t = 0 < e.length && "-" == e[0];
            return t && (e = e.substring(1)), null === (e = jspb.arith.UInt64.fromString(e)) ? null : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)), new jspb.arith.Int64(e.lo, e.hi))
        }, jspb.BinaryEncoder = function() {
            this.buffer_ = []
        }, jspb.BinaryEncoder.prototype.length = function() {
            return this.buffer_.length
        }, jspb.BinaryEncoder.prototype.end = function() {
            var e = this.buffer_;
            return this.buffer_ = [], e
        }, jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(e, t) {
            for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32); 0 < t || 127 < e;) this.buffer_.push(127 & e | 128), e = (e >>> 7 | t << 25) >>> 0, t >>>= 7;
            this.buffer_.push(e)
        }, jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(e, t) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUint32(e), this.writeUint32(t)
        }, jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(e) {
            for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32); 127 < e;) this.buffer_.push(127 & e | 128), e >>>= 7;
            this.buffer_.push(e)
        }, jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(e) {
            if (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 0 <= e) this.writeUnsignedVarint32(e);
            else {
                for (var t = 0; 9 > t; t++) this.buffer_.push(127 & e | 128), e >>= 7;
                this.buffer_.push(1)
            }
        }, jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeUnsignedVarint32((e << 1 ^ e >> 31) >>> 0)
        }, jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitZigzag64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(e) {
            this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(e))
        }, jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(e) {
            var t = this;
            jspb.utils.splitHash64(e), jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, (function(e, o) {
                t.writeSplitVarint64(e >>> 0, o >>> 0)
            }))
        }, jspb.BinaryEncoder.prototype.writeUint8 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && 256 > e), this.buffer_.push(e >>> 0 & 255)
        }, jspb.BinaryEncoder.prototype.writeUint16 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && 65536 > e), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
        }, jspb.BinaryEncoder.prototype.writeUint32 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
        }, jspb.BinaryEncoder.prototype.writeUint64 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitUint64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeInt8 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-128 <= e && 128 > e), this.buffer_.push(e >>> 0 & 255)
        }, jspb.BinaryEncoder.prototype.writeInt16 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-32768 <= e && 32768 > e), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
        }, jspb.BinaryEncoder.prototype.writeInt32 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
        }, jspb.BinaryEncoder.prototype.writeInt64 = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeInt64String = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(+e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeFloat = function(e) {
            goog.asserts.assert(1 / 0 === e || -1 / 0 === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX), jspb.utils.splitFloat32(e), this.writeUint32(jspb.utils.split64Low)
        }, jspb.BinaryEncoder.prototype.writeDouble = function(e) {
            goog.asserts.assert(1 / 0 === e || -1 / 0 === e || isNaN(e) || e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX), jspb.utils.splitFloat64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeBool = function(e) {
            goog.asserts.assert("boolean" == typeof e || "number" == typeof e), this.buffer_.push(e ? 1 : 0)
        }, jspb.BinaryEncoder.prototype.writeEnum = function(e) {
            goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32(e)
        }, jspb.BinaryEncoder.prototype.writeBytes = function(e) {
            this.buffer_.push.apply(this.buffer_, e)
        }, jspb.BinaryEncoder.prototype.writeVarintHash64 = function(e) {
            jspb.utils.splitHash64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeFixedHash64 = function(e) {
            jspb.utils.splitHash64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
        }, jspb.BinaryEncoder.prototype.writeString = function(e) {
            for (var t = this.buffer_.length, o = 0; o < e.length; o++) {
                var r = e.charCodeAt(o);
                if (128 > r) this.buffer_.push(r);
                else if (2048 > r) this.buffer_.push(r >> 6 | 192), this.buffer_.push(63 & r | 128);
                else if (65536 > r)
                    if (55296 <= r && 56319 >= r && o + 1 < e.length) {
                        var s = e.charCodeAt(o + 1);
                        56320 <= s && 57343 >= s && (r = 1024 * (r - 55296) + s - 56320 + 65536, this.buffer_.push(r >> 18 | 240), this.buffer_.push(r >> 12 & 63 | 128), this.buffer_.push(r >> 6 & 63 | 128), this.buffer_.push(63 & r | 128), o++)
                    } else this.buffer_.push(r >> 12 | 224), this.buffer_.push(r >> 6 & 63 | 128), this.buffer_.push(63 & r | 128)
            }
            return this.buffer_.length - t
        }, jspb.BinaryWriter = function() {
            this.blocks_ = [], this.totalLength_ = 0, this.encoder_ = new jspb.BinaryEncoder, this.bookmarks_ = []
        }, jspb.BinaryWriter.prototype.appendUint8Array_ = function(e) {
            var t = this.encoder_.end();
            this.blocks_.push(t), this.blocks_.push(e), this.totalLength_ += t.length + e.length
        }, jspb.BinaryWriter.prototype.beginDelimited_ = function(e) {
            return this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), e = this.encoder_.end(), this.blocks_.push(e), this.totalLength_ += e.length, e.push(this.totalLength_), e
        }, jspb.BinaryWriter.prototype.endDelimited_ = function(e) {
            var t = e.pop();
            for (t = this.totalLength_ + this.encoder_.length() - t, goog.asserts.assert(0 <= t); 127 < t;) e.push(127 & t | 128), t >>>= 7, this.totalLength_++;
            e.push(t), this.totalLength_++
        }, jspb.BinaryWriter.prototype.writeSerializedMessage = function(e, t, o) {
            this.appendUint8Array_(e.subarray(t, o))
        }, jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(e, t, o) {
            null != e && null != t && null != o && this.writeSerializedMessage(e, t, o)
        }, jspb.BinaryWriter.prototype.reset = function() {
            this.blocks_ = [], this.encoder_.end(), this.totalLength_ = 0, this.bookmarks_ = []
        }, jspb.BinaryWriter.prototype.getResultBuffer = function() {
            goog.asserts.assert(0 == this.bookmarks_.length);
            for (var e = new Uint8Array(this.totalLength_ + this.encoder_.length()), t = this.blocks_, o = t.length, r = 0, s = 0; s < o; s++) {
                var n = t[s];
                e.set(n, r), r += n.length
            }
            return t = this.encoder_.end(), e.set(t, r), r += t.length, goog.asserts.assert(r == e.length), this.blocks_ = [e], e
        }, jspb.BinaryWriter.prototype.getResultBase64String = function(e) {
            return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e)
        }, jspb.BinaryWriter.prototype.beginSubMessage = function(e) {
            this.bookmarks_.push(this.beginDelimited_(e))
        }, jspb.BinaryWriter.prototype.endSubMessage = function() {
            goog.asserts.assert(0 <= this.bookmarks_.length), this.endDelimited_(this.bookmarks_.pop())
        }, jspb.BinaryWriter.prototype.writeFieldHeader_ = function(e, t) {
            goog.asserts.assert(1 <= e && e == Math.floor(e)), this.encoder_.writeUnsignedVarint32(8 * e + t)
        }, jspb.BinaryWriter.prototype.writeAny = function(e, t, o) {
            var r = jspb.BinaryConstants.FieldType;
            switch (e) {
                case r.DOUBLE:
                    this.writeDouble(t, o);
                    break;
                case r.FLOAT:
                    this.writeFloat(t, o);
                    break;
                case r.INT64:
                    this.writeInt64(t, o);
                    break;
                case r.UINT64:
                    this.writeUint64(t, o);
                    break;
                case r.INT32:
                    this.writeInt32(t, o);
                    break;
                case r.FIXED64:
                    this.writeFixed64(t, o);
                    break;
                case r.FIXED32:
                    this.writeFixed32(t, o);
                    break;
                case r.BOOL:
                    this.writeBool(t, o);
                    break;
                case r.STRING:
                    this.writeString(t, o);
                    break;
                case r.GROUP:
                    goog.asserts.fail("Group field type not supported in writeAny()");
                    break;
                case r.MESSAGE:
                    goog.asserts.fail("Message field type not supported in writeAny()");
                    break;
                case r.BYTES:
                    this.writeBytes(t, o);
                    break;
                case r.UINT32:
                    this.writeUint32(t, o);
                    break;
                case r.ENUM:
                    this.writeEnum(t, o);
                    break;
                case r.SFIXED32:
                    this.writeSfixed32(t, o);
                    break;
                case r.SFIXED64:
                    this.writeSfixed64(t, o);
                    break;
                case r.SINT32:
                    this.writeSint32(t, o);
                    break;
                case r.SINT64:
                    this.writeSint64(t, o);
                    break;
                case r.FHASH64:
                    this.writeFixedHash64(t, o);
                    break;
                case r.VHASH64:
                    this.writeVarintHash64(t, o);
                    break;
                default:
                    goog.asserts.fail("Invalid field type in writeAny()")
            }
        }, jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(t))
        }, jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t))
        }, jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(t))
        }, jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(t))
        }, jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(t))
        }, jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(t))
        }, jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(t))
        }, jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(t))
        }, jspb.BinaryWriter.prototype.writeInt32 = function(e, t) {
            null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, t))
        }, jspb.BinaryWriter.prototype.writeInt32String = function(e, t) {
            null != t && (t = parseInt(t, 10), goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, t))
        }, jspb.BinaryWriter.prototype.writeInt64 = function(e, t) {
            null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(e, t))
        }, jspb.BinaryWriter.prototype.writeInt64String = function(e, t) {
            null != t && (t = jspb.arith.Int64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(t.lo, t.hi))
        }, jspb.BinaryWriter.prototype.writeUint32 = function(e, t) {
            null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, t))
        }, jspb.BinaryWriter.prototype.writeUint32String = function(e, t) {
            null != t && (t = parseInt(t, 10), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, t))
        }, jspb.BinaryWriter.prototype.writeUint64 = function(e, t) {
            null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(e, t))
        }, jspb.BinaryWriter.prototype.writeUint64String = function(e, t) {
            null != t && (t = jspb.arith.UInt64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(t.lo, t.hi))
        }, jspb.BinaryWriter.prototype.writeSint32 = function(e, t) {
            null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(e, t))
        }, jspb.BinaryWriter.prototype.writeSint64 = function(e, t) {
            null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(e, t))
        }, jspb.BinaryWriter.prototype.writeSintHash64 = function(e, t) {
            null != t && this.writeZigzagVarintHash64_(e, t)
        }, jspb.BinaryWriter.prototype.writeSint64String = function(e, t) {
            null != t && this.writeZigzagVarint64String_(e, t)
        }, jspb.BinaryWriter.prototype.writeFixed32 = function(e, t) {
            null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(t))
        }, jspb.BinaryWriter.prototype.writeFixed64 = function(e, t) {
            null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(t))
        }, jspb.BinaryWriter.prototype.writeFixed64String = function(e, t) {
            null != t && (t = jspb.arith.UInt64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(t.lo, t.hi))
        }, jspb.BinaryWriter.prototype.writeSfixed32 = function(e, t) {
            null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(t))
        }, jspb.BinaryWriter.prototype.writeSfixed64 = function(e, t) {
            null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(t))
        }, jspb.BinaryWriter.prototype.writeSfixed64String = function(e, t) {
            null != t && (t = jspb.arith.Int64.fromString(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(t.lo, t.hi))
        }, jspb.BinaryWriter.prototype.writeFloat = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(t))
        }, jspb.BinaryWriter.prototype.writeDouble = function(e, t) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(t))
        }, jspb.BinaryWriter.prototype.writeBool = function(e, t) {
            null != t && (goog.asserts.assert("boolean" == typeof t || "number" == typeof t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(t))
        }, jspb.BinaryWriter.prototype.writeEnum = function(e, t) {
            null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t))
        }, jspb.BinaryWriter.prototype.writeString = function(e, t) {
            null != t && (e = this.beginDelimited_(e), this.encoder_.writeString(t), this.endDelimited_(e))
        }, jspb.BinaryWriter.prototype.writeBytes = function(e, t) {
            null != t && (t = jspb.utils.byteSourceToUint8Array(t), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(t.length), this.appendUint8Array_(t))
        }, jspb.BinaryWriter.prototype.writeMessage = function(e, t, o) {
            null != t && (e = this.beginDelimited_(e), o(t, this), this.endDelimited_(e))
        }, jspb.BinaryWriter.prototype.writeMessageSet = function(e, t, o) {
            null != t && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(e), e = this.beginDelimited_(3), o(t, this), this.endDelimited_(e), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP))
        }, jspb.BinaryWriter.prototype.writeGroup = function(e, t, o) {
            null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), o(t, this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP))
        }, jspb.BinaryWriter.prototype.writeFixedHash64 = function(e, t) {
            null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(t))
        }, jspb.BinaryWriter.prototype.writeVarintHash64 = function(e, t) {
            null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(t))
        }, jspb.BinaryWriter.prototype.writeSplitFixed64 = function(e, t, o) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(t, o)
        }, jspb.BinaryWriter.prototype.writeSplitVarint64 = function(e, t, o) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(t, o)
        }, jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(e, t, o) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT);
            var r = this.encoder_;
            jspb.utils.toZigzag64(t, o, (function(e, t) {
                r.writeSplitVarint64(e >>> 0, t >>> 0)
            }))
        }, jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeSignedVarint32_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeInt32String(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeSignedVarint64_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(e, t, o, r) {
            if (null != t)
                for (var s = 0; s < t.length; s++) this.writeSplitFixed64(e, o(t[s]), r(t[s]))
        }, jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(e, t, o, r) {
            if (null != t)
                for (var s = 0; s < t.length; s++) this.writeSplitVarint64(e, o(t[s]), r(t[s]))
        }, jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(e, t, o, r) {
            if (null != t)
                for (var s = 0; s < t.length; s++) this.writeSplitZigzagVarint64(e, o(t[s]), r(t[s]))
        }, jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeInt64String(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeUnsignedVarint32_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeUint32String(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeUnsignedVarint64_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeUint64String(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeZigzagVarint32_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeZigzagVarint64_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeZigzagVarint64String_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeZigzagVarintHash64_(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFixed32(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFixed64(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFixed64String(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeSfixed32(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeSfixed64(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeSfixed64String(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedFloat = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFloat(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedDouble = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeDouble(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedBool = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeBool(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedEnum = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeEnum(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedString = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeString(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedBytes = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeBytes(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedMessage = function(e, t, o) {
            if (null != t)
                for (var r = 0; r < t.length; r++) {
                    var s = this.beginDelimited_(e);
                    o(t[r], this), this.endDelimited_(s)
                }
        }, jspb.BinaryWriter.prototype.writeRepeatedGroup = function(e, t, o) {
            if (null != t)
                for (var r = 0; r < t.length; r++) this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), o(t[r], this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP)
        }, jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeFixedHash64(e, t[o])
        }, jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(e, t) {
            if (null != t)
                for (var o = 0; o < t.length; o++) this.writeVarintHash64(e, t[o])
        }, jspb.BinaryWriter.prototype.writePackedInt32 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedInt32String = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(parseInt(t[o], 10));
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedInt64 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeSignedVarint64(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(e, t, o, r) {
            if (null != t) {
                e = this.beginDelimited_(e);
                for (var s = 0; s < t.length; s++) this.encoder_.writeSplitFixed64(o(t[s]), r(t[s]));
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(e, t, o, r) {
            if (null != t) {
                e = this.beginDelimited_(e);
                for (var s = 0; s < t.length; s++) this.encoder_.writeSplitVarint64(o(t[s]), r(t[s]));
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(e, t, o, r) {
            if (null != t) {
                e = this.beginDelimited_(e);
                for (var s = this.encoder_, n = 0; n < t.length; n++) jspb.utils.toZigzag64(o(t[n]), r(t[n]), (function(e, t) {
                    s.writeSplitVarint64(e >>> 0, t >>> 0)
                }));
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedInt64String = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) {
                    var r = jspb.arith.Int64.fromString(t[o]);
                    this.encoder_.writeSplitVarint64(r.lo, r.hi)
                }
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedUint32 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedUint32String = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10));
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedUint64 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint64(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedUint64String = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) {
                    var r = jspb.arith.UInt64.fromString(t[o]);
                    this.encoder_.writeSplitVarint64(r.lo, r.hi)
                }
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedSint32 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint32(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedSint64 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint64(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedSint64String = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t[o]));
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedSintHash64 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeZigzagVarintHash64(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedFixed32 = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length), e = 0; e < t.length; e++) this.encoder_.writeUint32(t[e])
        }, jspb.BinaryWriter.prototype.writePackedFixed64 = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeUint64(t[e])
        }, jspb.BinaryWriter.prototype.writePackedFixed64String = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) {
                    var o = jspb.arith.UInt64.fromString(t[e]);
                    this.encoder_.writeSplitFixed64(o.lo, o.hi)
                }
        }, jspb.BinaryWriter.prototype.writePackedSfixed32 = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length), e = 0; e < t.length; e++) this.encoder_.writeInt32(t[e])
        }, jspb.BinaryWriter.prototype.writePackedSfixed64 = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeInt64(t[e])
        }, jspb.BinaryWriter.prototype.writePackedSfixed64String = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeInt64String(t[e])
        }, jspb.BinaryWriter.prototype.writePackedFloat = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length), e = 0; e < t.length; e++) this.encoder_.writeFloat(t[e])
        }, jspb.BinaryWriter.prototype.writePackedDouble = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeDouble(t[e])
        }, jspb.BinaryWriter.prototype.writePackedBool = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(t.length), e = 0; e < t.length; e++) this.encoder_.writeBool(t[e])
        }, jspb.BinaryWriter.prototype.writePackedEnum = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeEnum(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(e, t) {
            if (null != t && t.length)
                for (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length), e = 0; e < t.length; e++) this.encoder_.writeFixedHash64(t[e])
        }, jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(e, t) {
            if (null != t && t.length) {
                e = this.beginDelimited_(e);
                for (var o = 0; o < t.length; o++) this.encoder_.writeVarintHash64(t[o]);
                this.endDelimited_(e)
            }
        }, jspb.Export = {}, exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = {
            extend: goog.object.extend
        }, exports.typeOf = goog.typeOf
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")();
        s.exportSymbol("proto.flow.entities.Account", null, n), s.exportSymbol("proto.flow.entities.AccountKey", null, n), proto.flow.entities.Account = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.entities.Account.repeatedFields_, null)
        }, s.inherits(proto.flow.entities.Account, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.Account.displayName = "proto.flow.entities.Account"), proto.flow.entities.AccountKey = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.entities.AccountKey, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.AccountKey.displayName = "proto.flow.entities.AccountKey"), proto.flow.entities.Account.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.Account.prototype.toObject = function(e) {
            return proto.flow.entities.Account.toObject(e, this)
        }, proto.flow.entities.Account.toObject = function(e, t) {
            var o, s = {
                address: t.getAddress_asB64(),
                balance: r.Message.getFieldWithDefault(t, 2, 0),
                code: t.getCode_asB64(),
                keysList: r.Message.toObjectList(t.getKeysList(), proto.flow.entities.AccountKey.toObject, e),
                contractsMap: (o = t.getContractsMap()) ? o.toObject(e, void 0) : []
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.flow.entities.Account.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.Account;
            return proto.flow.entities.Account.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.Account.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setAddress(o);
                        break;
                    case 2:
                        o = t.readUint64();
                        e.setBalance(o);
                        break;
                    case 3:
                        o = t.readBytes();
                        e.setCode(o);
                        break;
                    case 4:
                        o = new proto.flow.entities.AccountKey;
                        t.readMessage(o, proto.flow.entities.AccountKey.deserializeBinaryFromReader), e.addKeys(o);
                        break;
                    case 5:
                        o = e.getContractsMap();
                        t.readMessage(o, (function(e, t) {
                            r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readBytes, null, "", "")
                        }));
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.Account.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.Account.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.Account.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getAddress_asU8()).length > 0 && t.writeBytes(1, o), 0 !== (o = e.getBalance()) && t.writeUint64(2, o), (o = e.getCode_asU8()).length > 0 && t.writeBytes(3, o), (o = e.getKeysList()).length > 0 && t.writeRepeatedMessage(4, o, proto.flow.entities.AccountKey.serializeBinaryToWriter), (o = e.getContractsMap(!0)) && o.getLength() > 0 && o.serializeBinary(5, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeBytes)
        }, proto.flow.entities.Account.prototype.getAddress = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.Account.prototype.getAddress_asB64 = function() {
            return r.Message.bytesAsB64(this.getAddress())
        }, proto.flow.entities.Account.prototype.getAddress_asU8 = function() {
            return r.Message.bytesAsU8(this.getAddress())
        }, proto.flow.entities.Account.prototype.setAddress = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.Account.prototype.getBalance = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.entities.Account.prototype.setBalance = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.entities.Account.prototype.getCode = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.flow.entities.Account.prototype.getCode_asB64 = function() {
            return r.Message.bytesAsB64(this.getCode())
        }, proto.flow.entities.Account.prototype.getCode_asU8 = function() {
            return r.Message.bytesAsU8(this.getCode())
        }, proto.flow.entities.Account.prototype.setCode = function(e) {
            return r.Message.setProto3BytesField(this, 3, e)
        }, proto.flow.entities.Account.prototype.getKeysList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.flow.entities.AccountKey, 4)
        }, proto.flow.entities.Account.prototype.setKeysList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.flow.entities.Account.prototype.addKeys = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.flow.entities.AccountKey, t)
        }, proto.flow.entities.Account.prototype.clearKeysList = function() {
            return this.setKeysList([])
        }, proto.flow.entities.Account.prototype.getContractsMap = function(e) {
            return r.Message.getMapField(this, 5, e, null)
        }, proto.flow.entities.Account.prototype.clearContractsMap = function() {
            return this.getContractsMap().clear(), this
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.AccountKey.prototype.toObject = function(e) {
            return proto.flow.entities.AccountKey.toObject(e, this)
        }, proto.flow.entities.AccountKey.toObject = function(e, t) {
            var o = {
                index: r.Message.getFieldWithDefault(t, 1, 0),
                publicKey: t.getPublicKey_asB64(),
                signAlgo: r.Message.getFieldWithDefault(t, 3, 0),
                hashAlgo: r.Message.getFieldWithDefault(t, 4, 0),
                weight: r.Message.getFieldWithDefault(t, 5, 0),
                sequenceNumber: r.Message.getFieldWithDefault(t, 6, 0),
                revoked: r.Message.getBooleanFieldWithDefault(t, 7, !1)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.entities.AccountKey.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.AccountKey;
            return proto.flow.entities.AccountKey.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.AccountKey.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readUint32();
                        e.setIndex(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setPublicKey(o);
                        break;
                    case 3:
                        o = t.readUint32();
                        e.setSignAlgo(o);
                        break;
                    case 4:
                        o = t.readUint32();
                        e.setHashAlgo(o);
                        break;
                    case 5:
                        o = t.readUint32();
                        e.setWeight(o);
                        break;
                    case 6:
                        o = t.readUint32();
                        e.setSequenceNumber(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setRevoked(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.AccountKey.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.AccountKey.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.AccountKey.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            0 !== (o = e.getIndex()) && t.writeUint32(1, o), (o = e.getPublicKey_asU8()).length > 0 && t.writeBytes(2, o), 0 !== (o = e.getSignAlgo()) && t.writeUint32(3, o), 0 !== (o = e.getHashAlgo()) && t.writeUint32(4, o), 0 !== (o = e.getWeight()) && t.writeUint32(5, o), 0 !== (o = e.getSequenceNumber()) && t.writeUint32(6, o), (o = e.getRevoked()) && t.writeBool(7, o)
        }, proto.flow.entities.AccountKey.prototype.getIndex = function() {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.flow.entities.AccountKey.prototype.setIndex = function(e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.flow.entities.AccountKey.prototype.getPublicKey = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.entities.AccountKey.prototype.getPublicKey_asB64 = function() {
            return r.Message.bytesAsB64(this.getPublicKey())
        }, proto.flow.entities.AccountKey.prototype.getPublicKey_asU8 = function() {
            return r.Message.bytesAsU8(this.getPublicKey())
        }, proto.flow.entities.AccountKey.prototype.setPublicKey = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.entities.AccountKey.prototype.getSignAlgo = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.flow.entities.AccountKey.prototype.setSignAlgo = function(e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.flow.entities.AccountKey.prototype.getHashAlgo = function() {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.flow.entities.AccountKey.prototype.setHashAlgo = function(e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.flow.entities.AccountKey.prototype.getWeight = function() {
            return r.Message.getFieldWithDefault(this, 5, 0)
        }, proto.flow.entities.AccountKey.prototype.setWeight = function(e) {
            return r.Message.setProto3IntField(this, 5, e)
        }, proto.flow.entities.AccountKey.prototype.getSequenceNumber = function() {
            return r.Message.getFieldWithDefault(this, 6, 0)
        }, proto.flow.entities.AccountKey.prototype.setSequenceNumber = function(e) {
            return r.Message.setProto3IntField(this, 6, e)
        }, proto.flow.entities.AccountKey.prototype.getRevoked = function() {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1)
        }, proto.flow.entities.AccountKey.prototype.setRevoked = function(e) {
            return r.Message.setProto3BooleanField(this, 7, e)
        }, s.object.extend(t, proto.flow.entities)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")();
        s.exportSymbol("proto.flow.entities.Collection", null, n), s.exportSymbol("proto.flow.entities.CollectionGuarantee", null, n), proto.flow.entities.Collection = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.entities.Collection.repeatedFields_, null)
        }, s.inherits(proto.flow.entities.Collection, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.Collection.displayName = "proto.flow.entities.Collection"), proto.flow.entities.CollectionGuarantee = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.entities.CollectionGuarantee.repeatedFields_, null)
        }, s.inherits(proto.flow.entities.CollectionGuarantee, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.CollectionGuarantee.displayName = "proto.flow.entities.CollectionGuarantee"), proto.flow.entities.Collection.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.Collection.prototype.toObject = function(e) {
            return proto.flow.entities.Collection.toObject(e, this)
        }, proto.flow.entities.Collection.toObject = function(e, t) {
            var o = {
                id: t.getId_asB64(),
                transactionIdsList: t.getTransactionIdsList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.entities.Collection.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.Collection;
            return proto.flow.entities.Collection.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.Collection.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.addTransactionIds(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.Collection.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.Collection.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.Collection.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getTransactionIdsList_asU8()).length > 0 && t.writeRepeatedBytes(2, o)
        }, proto.flow.entities.Collection.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.Collection.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.entities.Collection.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.entities.Collection.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.Collection.prototype.getTransactionIdsList = function() {
            return r.Message.getRepeatedField(this, 2)
        }, proto.flow.entities.Collection.prototype.getTransactionIdsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getTransactionIdsList())
        }, proto.flow.entities.Collection.prototype.getTransactionIdsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getTransactionIdsList())
        }, proto.flow.entities.Collection.prototype.setTransactionIdsList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.flow.entities.Collection.prototype.addTransactionIds = function(e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.flow.entities.Collection.prototype.clearTransactionIdsList = function() {
            return this.setTransactionIdsList([])
        }, proto.flow.entities.CollectionGuarantee.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.CollectionGuarantee.prototype.toObject = function(e) {
            return proto.flow.entities.CollectionGuarantee.toObject(e, this)
        }, proto.flow.entities.CollectionGuarantee.toObject = function(e, t) {
            var o = {
                collectionId: t.getCollectionId_asB64(),
                signaturesList: t.getSignaturesList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.entities.CollectionGuarantee.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.CollectionGuarantee;
            return proto.flow.entities.CollectionGuarantee.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.CollectionGuarantee.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setCollectionId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.addSignatures(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.CollectionGuarantee.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.CollectionGuarantee.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.CollectionGuarantee.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getCollectionId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getSignaturesList_asU8()).length > 0 && t.writeRepeatedBytes(2, o)
        }, proto.flow.entities.CollectionGuarantee.prototype.getCollectionId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.CollectionGuarantee.prototype.getCollectionId_asB64 = function() {
            return r.Message.bytesAsB64(this.getCollectionId())
        }, proto.flow.entities.CollectionGuarantee.prototype.getCollectionId_asU8 = function() {
            return r.Message.bytesAsU8(this.getCollectionId())
        }, proto.flow.entities.CollectionGuarantee.prototype.setCollectionId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.CollectionGuarantee.prototype.getSignaturesList = function() {
            return r.Message.getRepeatedField(this, 2)
        }, proto.flow.entities.CollectionGuarantee.prototype.getSignaturesList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getSignaturesList())
        }, proto.flow.entities.CollectionGuarantee.prototype.getSignaturesList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getSignaturesList())
        }, proto.flow.entities.CollectionGuarantee.prototype.setSignaturesList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.flow.entities.CollectionGuarantee.prototype.addSignatures = function(e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.flow.entities.CollectionGuarantee.prototype.clearSignaturesList = function() {
            return this.setSignaturesList([])
        }, s.object.extend(t, proto.flow.entities)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")();
        s.exportSymbol("proto.flow.entities.Event", null, n), proto.flow.entities.Event = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.entities.Event, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.Event.displayName = "proto.flow.entities.Event"), r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.Event.prototype.toObject = function(e) {
            return proto.flow.entities.Event.toObject(e, this)
        }, proto.flow.entities.Event.toObject = function(e, t) {
            var o = {
                type: r.Message.getFieldWithDefault(t, 1, ""),
                transactionId: t.getTransactionId_asB64(),
                transactionIndex: r.Message.getFieldWithDefault(t, 3, 0),
                eventIndex: r.Message.getFieldWithDefault(t, 4, 0),
                payload: t.getPayload_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.entities.Event.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.Event;
            return proto.flow.entities.Event.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.Event.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setType(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setTransactionId(o);
                        break;
                    case 3:
                        o = t.readUint32();
                        e.setTransactionIndex(o);
                        break;
                    case 4:
                        o = t.readUint32();
                        e.setEventIndex(o);
                        break;
                    case 5:
                        o = t.readBytes();
                        e.setPayload(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.Event.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.Event.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.Event.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getType()).length > 0 && t.writeString(1, o), (o = e.getTransactionId_asU8()).length > 0 && t.writeBytes(2, o), 0 !== (o = e.getTransactionIndex()) && t.writeUint32(3, o), 0 !== (o = e.getEventIndex()) && t.writeUint32(4, o), (o = e.getPayload_asU8()).length > 0 && t.writeBytes(5, o)
        }, proto.flow.entities.Event.prototype.getType = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.Event.prototype.setType = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.flow.entities.Event.prototype.getTransactionId = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.entities.Event.prototype.getTransactionId_asB64 = function() {
            return r.Message.bytesAsB64(this.getTransactionId())
        }, proto.flow.entities.Event.prototype.getTransactionId_asU8 = function() {
            return r.Message.bytesAsU8(this.getTransactionId())
        }, proto.flow.entities.Event.prototype.setTransactionId = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.entities.Event.prototype.getTransactionIndex = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.flow.entities.Event.prototype.setTransactionIndex = function(e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.flow.entities.Event.prototype.getEventIndex = function() {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.flow.entities.Event.prototype.setEventIndex = function(e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.flow.entities.Event.prototype.getPayload = function() {
            return r.Message.getFieldWithDefault(this, 5, "")
        }, proto.flow.entities.Event.prototype.getPayload_asB64 = function() {
            return r.Message.bytesAsB64(this.getPayload())
        }, proto.flow.entities.Event.prototype.getPayload_asU8 = function() {
            return r.Message.bytesAsU8(this.getPayload())
        }, proto.flow.entities.Event.prototype.setPayload = function(e) {
            return r.Message.setProto3BytesField(this, 5, e)
        }, s.object.extend(t, proto.flow.entities)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")(),
            i = o(1);
        s.object.extend(proto, i);
        var a = o(5);
        s.object.extend(proto, a);
        var g = o(7);
        s.object.extend(proto, g);
        var l = o(2);
        s.object.extend(proto, l);
        var c = o(3);
        s.object.extend(proto, c);
        var u = o(9);
        s.object.extend(proto, u);
        var p = o(6);
        s.object.extend(proto, p), s.exportSymbol("proto.flow.access.AccountResponse", null, n), s.exportSymbol("proto.flow.access.BlockHeaderResponse", null, n), s.exportSymbol("proto.flow.access.BlockResponse", null, n), s.exportSymbol("proto.flow.access.CollectionResponse", null, n), s.exportSymbol("proto.flow.access.EventsResponse", null, n), s.exportSymbol("proto.flow.access.EventsResponse.Result", null, n), s.exportSymbol("proto.flow.access.ExecuteScriptAtBlockHeightRequest", null, n), s.exportSymbol("proto.flow.access.ExecuteScriptAtBlockIDRequest", null, n), s.exportSymbol("proto.flow.access.ExecuteScriptAtLatestBlockRequest", null, n), s.exportSymbol("proto.flow.access.ExecuteScriptResponse", null, n), s.exportSymbol("proto.flow.access.GetAccountAtBlockHeightRequest", null, n), s.exportSymbol("proto.flow.access.GetAccountAtLatestBlockRequest", null, n), s.exportSymbol("proto.flow.access.GetAccountRequest", null, n), s.exportSymbol("proto.flow.access.GetAccountResponse", null, n), s.exportSymbol("proto.flow.access.GetBlockByHeightRequest", null, n), s.exportSymbol("proto.flow.access.GetBlockByIDRequest", null, n), s.exportSymbol("proto.flow.access.GetBlockHeaderByHeightRequest", null, n), s.exportSymbol("proto.flow.access.GetBlockHeaderByIDRequest", null, n), s.exportSymbol("proto.flow.access.GetCollectionByIDRequest", null, n), s.exportSymbol("proto.flow.access.GetEventsForBlockIDsRequest", null, n), s.exportSymbol("proto.flow.access.GetEventsForHeightRangeRequest", null, n), s.exportSymbol("proto.flow.access.GetLatestBlockHeaderRequest", null, n), s.exportSymbol("proto.flow.access.GetLatestBlockRequest", null, n), s.exportSymbol("proto.flow.access.GetNetworkParametersRequest", null, n), s.exportSymbol("proto.flow.access.GetNetworkParametersResponse", null, n), s.exportSymbol("proto.flow.access.GetTransactionRequest", null, n), s.exportSymbol("proto.flow.access.PingRequest", null, n), s.exportSymbol("proto.flow.access.PingResponse", null, n), s.exportSymbol("proto.flow.access.SendTransactionRequest", null, n), s.exportSymbol("proto.flow.access.SendTransactionResponse", null, n), s.exportSymbol("proto.flow.access.TransactionResponse", null, n), s.exportSymbol("proto.flow.access.TransactionResultResponse", null, n), proto.flow.access.PingRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.PingRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.PingRequest.displayName = "proto.flow.access.PingRequest"), proto.flow.access.PingResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.PingResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.PingResponse.displayName = "proto.flow.access.PingResponse"), proto.flow.access.GetLatestBlockHeaderRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetLatestBlockHeaderRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetLatestBlockHeaderRequest.displayName = "proto.flow.access.GetLatestBlockHeaderRequest"), proto.flow.access.GetBlockHeaderByIDRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetBlockHeaderByIDRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetBlockHeaderByIDRequest.displayName = "proto.flow.access.GetBlockHeaderByIDRequest"), proto.flow.access.GetBlockHeaderByHeightRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetBlockHeaderByHeightRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetBlockHeaderByHeightRequest.displayName = "proto.flow.access.GetBlockHeaderByHeightRequest"), proto.flow.access.BlockHeaderResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.BlockHeaderResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.BlockHeaderResponse.displayName = "proto.flow.access.BlockHeaderResponse"), proto.flow.access.GetLatestBlockRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetLatestBlockRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetLatestBlockRequest.displayName = "proto.flow.access.GetLatestBlockRequest"), proto.flow.access.GetBlockByIDRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetBlockByIDRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetBlockByIDRequest.displayName = "proto.flow.access.GetBlockByIDRequest"), proto.flow.access.GetBlockByHeightRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetBlockByHeightRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetBlockByHeightRequest.displayName = "proto.flow.access.GetBlockByHeightRequest"), proto.flow.access.BlockResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.BlockResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.BlockResponse.displayName = "proto.flow.access.BlockResponse"), proto.flow.access.GetCollectionByIDRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetCollectionByIDRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetCollectionByIDRequest.displayName = "proto.flow.access.GetCollectionByIDRequest"), proto.flow.access.CollectionResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.CollectionResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.CollectionResponse.displayName = "proto.flow.access.CollectionResponse"), proto.flow.access.SendTransactionRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.SendTransactionRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.SendTransactionRequest.displayName = "proto.flow.access.SendTransactionRequest"), proto.flow.access.SendTransactionResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.SendTransactionResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.SendTransactionResponse.displayName = "proto.flow.access.SendTransactionResponse"), proto.flow.access.GetTransactionRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetTransactionRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetTransactionRequest.displayName = "proto.flow.access.GetTransactionRequest"), proto.flow.access.TransactionResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.TransactionResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.TransactionResponse.displayName = "proto.flow.access.TransactionResponse"), proto.flow.access.TransactionResultResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.access.TransactionResultResponse.repeatedFields_, null)
        }, s.inherits(proto.flow.access.TransactionResultResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.TransactionResultResponse.displayName = "proto.flow.access.TransactionResultResponse"), proto.flow.access.GetAccountRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetAccountRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetAccountRequest.displayName = "proto.flow.access.GetAccountRequest"), proto.flow.access.GetAccountResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetAccountResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetAccountResponse.displayName = "proto.flow.access.GetAccountResponse"), proto.flow.access.GetAccountAtLatestBlockRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetAccountAtLatestBlockRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetAccountAtLatestBlockRequest.displayName = "proto.flow.access.GetAccountAtLatestBlockRequest"), proto.flow.access.AccountResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.AccountResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.AccountResponse.displayName = "proto.flow.access.AccountResponse"), proto.flow.access.GetAccountAtBlockHeightRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetAccountAtBlockHeightRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetAccountAtBlockHeightRequest.displayName = "proto.flow.access.GetAccountAtBlockHeightRequest"), proto.flow.access.ExecuteScriptAtLatestBlockRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.access.ExecuteScriptAtLatestBlockRequest.repeatedFields_, null)
        }, s.inherits(proto.flow.access.ExecuteScriptAtLatestBlockRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.ExecuteScriptAtLatestBlockRequest.displayName = "proto.flow.access.ExecuteScriptAtLatestBlockRequest"), proto.flow.access.ExecuteScriptAtBlockIDRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.access.ExecuteScriptAtBlockIDRequest.repeatedFields_, null)
        }, s.inherits(proto.flow.access.ExecuteScriptAtBlockIDRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.ExecuteScriptAtBlockIDRequest.displayName = "proto.flow.access.ExecuteScriptAtBlockIDRequest"), proto.flow.access.ExecuteScriptAtBlockHeightRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.access.ExecuteScriptAtBlockHeightRequest.repeatedFields_, null)
        }, s.inherits(proto.flow.access.ExecuteScriptAtBlockHeightRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.ExecuteScriptAtBlockHeightRequest.displayName = "proto.flow.access.ExecuteScriptAtBlockHeightRequest"), proto.flow.access.ExecuteScriptResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.ExecuteScriptResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.ExecuteScriptResponse.displayName = "proto.flow.access.ExecuteScriptResponse"), proto.flow.access.GetEventsForHeightRangeRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetEventsForHeightRangeRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetEventsForHeightRangeRequest.displayName = "proto.flow.access.GetEventsForHeightRangeRequest"), proto.flow.access.GetEventsForBlockIDsRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.access.GetEventsForBlockIDsRequest.repeatedFields_, null)
        }, s.inherits(proto.flow.access.GetEventsForBlockIDsRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetEventsForBlockIDsRequest.displayName = "proto.flow.access.GetEventsForBlockIDsRequest"), proto.flow.access.EventsResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.access.EventsResponse.repeatedFields_, null)
        }, s.inherits(proto.flow.access.EventsResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.EventsResponse.displayName = "proto.flow.access.EventsResponse"), proto.flow.access.EventsResponse.Result = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.access.EventsResponse.Result.repeatedFields_, null)
        }, s.inherits(proto.flow.access.EventsResponse.Result, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.EventsResponse.Result.displayName = "proto.flow.access.EventsResponse.Result"), proto.flow.access.GetNetworkParametersRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetNetworkParametersRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetNetworkParametersRequest.displayName = "proto.flow.access.GetNetworkParametersRequest"), proto.flow.access.GetNetworkParametersResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.access.GetNetworkParametersResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.access.GetNetworkParametersResponse.displayName = "proto.flow.access.GetNetworkParametersResponse"), r.Message.GENERATE_TO_OBJECT && (proto.flow.access.PingRequest.prototype.toObject = function(e) {
            return proto.flow.access.PingRequest.toObject(e, this)
        }, proto.flow.access.PingRequest.toObject = function(e, t) {
            var o = {};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.PingRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.PingRequest;
            return proto.flow.access.PingRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.PingRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        }, proto.flow.access.PingRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.PingRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.PingRequest.serializeBinaryToWriter = function(e, t) {}, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.PingResponse.prototype.toObject = function(e) {
            return proto.flow.access.PingResponse.toObject(e, this)
        }, proto.flow.access.PingResponse.toObject = function(e, t) {
            var o = {};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.PingResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.PingResponse;
            return proto.flow.access.PingResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.PingResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        }, proto.flow.access.PingResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.PingResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.PingResponse.serializeBinaryToWriter = function(e, t) {}, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetLatestBlockHeaderRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetLatestBlockHeaderRequest.toObject(e, this)
        }, proto.flow.access.GetLatestBlockHeaderRequest.toObject = function(e, t) {
            var o = {
                isSealed: r.Message.getBooleanFieldWithDefault(t, 1, !1)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetLatestBlockHeaderRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetLatestBlockHeaderRequest;
            return proto.flow.access.GetLatestBlockHeaderRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetLatestBlockHeaderRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBool();
                        e.setIsSealed(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetLatestBlockHeaderRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetLatestBlockHeaderRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetLatestBlockHeaderRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getIsSealed()) && t.writeBool(1, o)
        }, proto.flow.access.GetLatestBlockHeaderRequest.prototype.getIsSealed = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.flow.access.GetLatestBlockHeaderRequest.prototype.setIsSealed = function(e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetBlockHeaderByIDRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetBlockHeaderByIDRequest.toObject(e, this)
        }, proto.flow.access.GetBlockHeaderByIDRequest.toObject = function(e, t) {
            var o = {
                id: t.getId_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetBlockHeaderByIDRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetBlockHeaderByIDRequest;
            return proto.flow.access.GetBlockHeaderByIDRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetBlockHeaderByIDRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetBlockHeaderByIDRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetBlockHeaderByIDRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetBlockHeaderByIDRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.GetBlockHeaderByIDRequest.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetBlockHeaderByIDRequest.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.access.GetBlockHeaderByIDRequest.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.access.GetBlockHeaderByIDRequest.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetBlockHeaderByHeightRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetBlockHeaderByHeightRequest.toObject(e, this)
        }, proto.flow.access.GetBlockHeaderByHeightRequest.toObject = function(e, t) {
            var o = {
                height: r.Message.getFieldWithDefault(t, 1, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetBlockHeaderByHeightRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetBlockHeaderByHeightRequest;
            return proto.flow.access.GetBlockHeaderByHeightRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetBlockHeaderByHeightRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readUint64();
                        e.setHeight(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetBlockHeaderByHeightRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetBlockHeaderByHeightRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetBlockHeaderByHeightRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            0 !== (o = e.getHeight()) && t.writeUint64(1, o)
        }, proto.flow.access.GetBlockHeaderByHeightRequest.prototype.getHeight = function() {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.flow.access.GetBlockHeaderByHeightRequest.prototype.setHeight = function(e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.BlockHeaderResponse.prototype.toObject = function(e) {
            return proto.flow.access.BlockHeaderResponse.toObject(e, this)
        }, proto.flow.access.BlockHeaderResponse.toObject = function(e, t) {
            var o, r = {
                block: (o = t.getBlock()) && a.BlockHeader.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.access.BlockHeaderResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.BlockHeaderResponse;
            return proto.flow.access.BlockHeaderResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.BlockHeaderResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new a.BlockHeader;
                        t.readMessage(o, a.BlockHeader.deserializeBinaryFromReader), e.setBlock(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.BlockHeaderResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.BlockHeaderResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.BlockHeaderResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getBlock()) && t.writeMessage(1, o, a.BlockHeader.serializeBinaryToWriter)
        }, proto.flow.access.BlockHeaderResponse.prototype.getBlock = function() {
            return r.Message.getWrapperField(this, a.BlockHeader, 1)
        }, proto.flow.access.BlockHeaderResponse.prototype.setBlock = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.access.BlockHeaderResponse.prototype.clearBlock = function() {
            return this.setBlock(void 0)
        }, proto.flow.access.BlockHeaderResponse.prototype.hasBlock = function() {
            return null != r.Message.getField(this, 1)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetLatestBlockRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetLatestBlockRequest.toObject(e, this)
        }, proto.flow.access.GetLatestBlockRequest.toObject = function(e, t) {
            var o = {
                isSealed: r.Message.getBooleanFieldWithDefault(t, 1, !1)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetLatestBlockRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetLatestBlockRequest;
            return proto.flow.access.GetLatestBlockRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetLatestBlockRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBool();
                        e.setIsSealed(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetLatestBlockRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetLatestBlockRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetLatestBlockRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getIsSealed()) && t.writeBool(1, o)
        }, proto.flow.access.GetLatestBlockRequest.prototype.getIsSealed = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }, proto.flow.access.GetLatestBlockRequest.prototype.setIsSealed = function(e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetBlockByIDRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetBlockByIDRequest.toObject(e, this)
        }, proto.flow.access.GetBlockByIDRequest.toObject = function(e, t) {
            var o = {
                id: t.getId_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetBlockByIDRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetBlockByIDRequest;
            return proto.flow.access.GetBlockByIDRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetBlockByIDRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetBlockByIDRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetBlockByIDRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetBlockByIDRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.GetBlockByIDRequest.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetBlockByIDRequest.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.access.GetBlockByIDRequest.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.access.GetBlockByIDRequest.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetBlockByHeightRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetBlockByHeightRequest.toObject(e, this)
        }, proto.flow.access.GetBlockByHeightRequest.toObject = function(e, t) {
            var o = {
                height: r.Message.getFieldWithDefault(t, 1, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetBlockByHeightRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetBlockByHeightRequest;
            return proto.flow.access.GetBlockByHeightRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetBlockByHeightRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readUint64();
                        e.setHeight(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetBlockByHeightRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetBlockByHeightRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetBlockByHeightRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            0 !== (o = e.getHeight()) && t.writeUint64(1, o)
        }, proto.flow.access.GetBlockByHeightRequest.prototype.getHeight = function() {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.flow.access.GetBlockByHeightRequest.prototype.setHeight = function(e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.BlockResponse.prototype.toObject = function(e) {
            return proto.flow.access.BlockResponse.toObject(e, this)
        }, proto.flow.access.BlockResponse.toObject = function(e, t) {
            var o, r = {
                block: (o = t.getBlock()) && g.Block.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.access.BlockResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.BlockResponse;
            return proto.flow.access.BlockResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.BlockResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new g.Block;
                        t.readMessage(o, g.Block.deserializeBinaryFromReader), e.setBlock(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.BlockResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.BlockResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.BlockResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getBlock()) && t.writeMessage(1, o, g.Block.serializeBinaryToWriter)
        }, proto.flow.access.BlockResponse.prototype.getBlock = function() {
            return r.Message.getWrapperField(this, g.Block, 1)
        }, proto.flow.access.BlockResponse.prototype.setBlock = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.access.BlockResponse.prototype.clearBlock = function() {
            return this.setBlock(void 0)
        }, proto.flow.access.BlockResponse.prototype.hasBlock = function() {
            return null != r.Message.getField(this, 1)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetCollectionByIDRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetCollectionByIDRequest.toObject(e, this)
        }, proto.flow.access.GetCollectionByIDRequest.toObject = function(e, t) {
            var o = {
                id: t.getId_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetCollectionByIDRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetCollectionByIDRequest;
            return proto.flow.access.GetCollectionByIDRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetCollectionByIDRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetCollectionByIDRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetCollectionByIDRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetCollectionByIDRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.GetCollectionByIDRequest.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetCollectionByIDRequest.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.access.GetCollectionByIDRequest.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.access.GetCollectionByIDRequest.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.CollectionResponse.prototype.toObject = function(e) {
            return proto.flow.access.CollectionResponse.toObject(e, this)
        }, proto.flow.access.CollectionResponse.toObject = function(e, t) {
            var o, r = {
                collection: (o = t.getCollection()) && l.Collection.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.access.CollectionResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.CollectionResponse;
            return proto.flow.access.CollectionResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.CollectionResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new l.Collection;
                        t.readMessage(o, l.Collection.deserializeBinaryFromReader), e.setCollection(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.CollectionResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.CollectionResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.CollectionResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getCollection()) && t.writeMessage(1, o, l.Collection.serializeBinaryToWriter)
        }, proto.flow.access.CollectionResponse.prototype.getCollection = function() {
            return r.Message.getWrapperField(this, l.Collection, 1)
        }, proto.flow.access.CollectionResponse.prototype.setCollection = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.access.CollectionResponse.prototype.clearCollection = function() {
            return this.setCollection(void 0)
        }, proto.flow.access.CollectionResponse.prototype.hasCollection = function() {
            return null != r.Message.getField(this, 1)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.SendTransactionRequest.prototype.toObject = function(e) {
            return proto.flow.access.SendTransactionRequest.toObject(e, this)
        }, proto.flow.access.SendTransactionRequest.toObject = function(e, t) {
            var o, r = {
                transaction: (o = t.getTransaction()) && u.Transaction.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.access.SendTransactionRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.SendTransactionRequest;
            return proto.flow.access.SendTransactionRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.SendTransactionRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new u.Transaction;
                        t.readMessage(o, u.Transaction.deserializeBinaryFromReader), e.setTransaction(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.SendTransactionRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.SendTransactionRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.SendTransactionRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getTransaction()) && t.writeMessage(1, o, u.Transaction.serializeBinaryToWriter)
        }, proto.flow.access.SendTransactionRequest.prototype.getTransaction = function() {
            return r.Message.getWrapperField(this, u.Transaction, 1)
        }, proto.flow.access.SendTransactionRequest.prototype.setTransaction = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.access.SendTransactionRequest.prototype.clearTransaction = function() {
            return this.setTransaction(void 0)
        }, proto.flow.access.SendTransactionRequest.prototype.hasTransaction = function() {
            return null != r.Message.getField(this, 1)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.SendTransactionResponse.prototype.toObject = function(e) {
            return proto.flow.access.SendTransactionResponse.toObject(e, this)
        }, proto.flow.access.SendTransactionResponse.toObject = function(e, t) {
            var o = {
                id: t.getId_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.SendTransactionResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.SendTransactionResponse;
            return proto.flow.access.SendTransactionResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.SendTransactionResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.SendTransactionResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.SendTransactionResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.SendTransactionResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.SendTransactionResponse.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.SendTransactionResponse.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.access.SendTransactionResponse.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.access.SendTransactionResponse.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetTransactionRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetTransactionRequest.toObject(e, this)
        }, proto.flow.access.GetTransactionRequest.toObject = function(e, t) {
            var o = {
                id: t.getId_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetTransactionRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetTransactionRequest;
            return proto.flow.access.GetTransactionRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetTransactionRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetTransactionRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetTransactionRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetTransactionRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.GetTransactionRequest.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetTransactionRequest.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.access.GetTransactionRequest.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.access.GetTransactionRequest.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.TransactionResponse.prototype.toObject = function(e) {
            return proto.flow.access.TransactionResponse.toObject(e, this)
        }, proto.flow.access.TransactionResponse.toObject = function(e, t) {
            var o, r = {
                transaction: (o = t.getTransaction()) && u.Transaction.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.access.TransactionResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.TransactionResponse;
            return proto.flow.access.TransactionResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.TransactionResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new u.Transaction;
                        t.readMessage(o, u.Transaction.deserializeBinaryFromReader), e.setTransaction(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.TransactionResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.TransactionResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.TransactionResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getTransaction()) && t.writeMessage(1, o, u.Transaction.serializeBinaryToWriter)
        }, proto.flow.access.TransactionResponse.prototype.getTransaction = function() {
            return r.Message.getWrapperField(this, u.Transaction, 1)
        }, proto.flow.access.TransactionResponse.prototype.setTransaction = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.access.TransactionResponse.prototype.clearTransaction = function() {
            return this.setTransaction(void 0)
        }, proto.flow.access.TransactionResponse.prototype.hasTransaction = function() {
            return null != r.Message.getField(this, 1)
        }, proto.flow.access.TransactionResultResponse.repeatedFields_ = [4], r.Message.GENERATE_TO_OBJECT && (proto.flow.access.TransactionResultResponse.prototype.toObject = function(e) {
            return proto.flow.access.TransactionResultResponse.toObject(e, this)
        }, proto.flow.access.TransactionResultResponse.toObject = function(e, t) {
            var o = {
                status: r.Message.getFieldWithDefault(t, 1, 0),
                statusCode: r.Message.getFieldWithDefault(t, 2, 0),
                errorMessage: r.Message.getFieldWithDefault(t, 3, ""),
                eventsList: r.Message.toObjectList(t.getEventsList(), c.Event.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.TransactionResultResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.TransactionResultResponse;
            return proto.flow.access.TransactionResultResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.TransactionResultResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readEnum();
                        e.setStatus(o);
                        break;
                    case 2:
                        o = t.readUint32();
                        e.setStatusCode(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setErrorMessage(o);
                        break;
                    case 4:
                        o = new c.Event;
                        t.readMessage(o, c.Event.deserializeBinaryFromReader), e.addEvents(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.TransactionResultResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.TransactionResultResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.TransactionResultResponse.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            0 !== (o = e.getStatus()) && t.writeEnum(1, o), 0 !== (o = e.getStatusCode()) && t.writeUint32(2, o), (o = e.getErrorMessage()).length > 0 && t.writeString(3, o), (o = e.getEventsList()).length > 0 && t.writeRepeatedMessage(4, o, c.Event.serializeBinaryToWriter)
        }, proto.flow.access.TransactionResultResponse.prototype.getStatus = function() {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.flow.access.TransactionResultResponse.prototype.setStatus = function(e) {
            return r.Message.setProto3EnumField(this, 1, e)
        }, proto.flow.access.TransactionResultResponse.prototype.getStatusCode = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.access.TransactionResultResponse.prototype.setStatusCode = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.access.TransactionResultResponse.prototype.getErrorMessage = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.flow.access.TransactionResultResponse.prototype.setErrorMessage = function(e) {
            return r.Message.setProto3StringField(this, 3, e)
        }, proto.flow.access.TransactionResultResponse.prototype.getEventsList = function() {
            return r.Message.getRepeatedWrapperField(this, c.Event, 4)
        }, proto.flow.access.TransactionResultResponse.prototype.setEventsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }, proto.flow.access.TransactionResultResponse.prototype.addEvents = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.flow.entities.Event, t)
        }, proto.flow.access.TransactionResultResponse.prototype.clearEventsList = function() {
            return this.setEventsList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetAccountRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetAccountRequest.toObject(e, this)
        }, proto.flow.access.GetAccountRequest.toObject = function(e, t) {
            var o = {
                address: t.getAddress_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetAccountRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetAccountRequest;
            return proto.flow.access.GetAccountRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetAccountRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setAddress(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetAccountRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetAccountRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetAccountRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getAddress_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.GetAccountRequest.prototype.getAddress = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetAccountRequest.prototype.getAddress_asB64 = function() {
            return r.Message.bytesAsB64(this.getAddress())
        }, proto.flow.access.GetAccountRequest.prototype.getAddress_asU8 = function() {
            return r.Message.bytesAsU8(this.getAddress())
        }, proto.flow.access.GetAccountRequest.prototype.setAddress = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetAccountResponse.prototype.toObject = function(e) {
            return proto.flow.access.GetAccountResponse.toObject(e, this)
        }, proto.flow.access.GetAccountResponse.toObject = function(e, t) {
            var o, r = {
                account: (o = t.getAccount()) && i.Account.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.access.GetAccountResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetAccountResponse;
            return proto.flow.access.GetAccountResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetAccountResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Account;
                        t.readMessage(o, i.Account.deserializeBinaryFromReader), e.setAccount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetAccountResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetAccountResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetAccountResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getAccount()) && t.writeMessage(1, o, i.Account.serializeBinaryToWriter)
        }, proto.flow.access.GetAccountResponse.prototype.getAccount = function() {
            return r.Message.getWrapperField(this, i.Account, 1)
        }, proto.flow.access.GetAccountResponse.prototype.setAccount = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.access.GetAccountResponse.prototype.clearAccount = function() {
            return this.setAccount(void 0)
        }, proto.flow.access.GetAccountResponse.prototype.hasAccount = function() {
            return null != r.Message.getField(this, 1)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetAccountAtLatestBlockRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetAccountAtLatestBlockRequest.toObject(e, this)
        }, proto.flow.access.GetAccountAtLatestBlockRequest.toObject = function(e, t) {
            var o = {
                address: t.getAddress_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetAccountAtLatestBlockRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetAccountAtLatestBlockRequest;
            return proto.flow.access.GetAccountAtLatestBlockRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetAccountAtLatestBlockRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setAddress(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetAccountAtLatestBlockRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetAccountAtLatestBlockRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetAccountAtLatestBlockRequest.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getAddress_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.GetAccountAtLatestBlockRequest.prototype.getAddress = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetAccountAtLatestBlockRequest.prototype.getAddress_asB64 = function() {
            return r.Message.bytesAsB64(this.getAddress())
        }, proto.flow.access.GetAccountAtLatestBlockRequest.prototype.getAddress_asU8 = function() {
            return r.Message.bytesAsU8(this.getAddress())
        }, proto.flow.access.GetAccountAtLatestBlockRequest.prototype.setAddress = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.AccountResponse.prototype.toObject = function(e) {
            return proto.flow.access.AccountResponse.toObject(e, this)
        }, proto.flow.access.AccountResponse.toObject = function(e, t) {
            var o, r = {
                account: (o = t.getAccount()) && i.Account.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.access.AccountResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.AccountResponse;
            return proto.flow.access.AccountResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.AccountResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Account;
                        t.readMessage(o, i.Account.deserializeBinaryFromReader), e.setAccount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.AccountResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.AccountResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.AccountResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getAccount()) && t.writeMessage(1, o, i.Account.serializeBinaryToWriter)
        }, proto.flow.access.AccountResponse.prototype.getAccount = function() {
            return r.Message.getWrapperField(this, i.Account, 1)
        }, proto.flow.access.AccountResponse.prototype.setAccount = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.access.AccountResponse.prototype.clearAccount = function() {
            return this.setAccount(void 0)
        }, proto.flow.access.AccountResponse.prototype.hasAccount = function() {
            return null != r.Message.getField(this, 1)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetAccountAtBlockHeightRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetAccountAtBlockHeightRequest.toObject(e, this)
        }, proto.flow.access.GetAccountAtBlockHeightRequest.toObject = function(e, t) {
            var o = {
                address: t.getAddress_asB64(),
                blockHeight: r.Message.getFieldWithDefault(t, 2, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetAccountAtBlockHeightRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetAccountAtBlockHeightRequest;
            return proto.flow.access.GetAccountAtBlockHeightRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetAccountAtBlockHeightRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setAddress(o);
                        break;
                    case 2:
                        o = t.readUint64();
                        e.setBlockHeight(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetAccountAtBlockHeightRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetAccountAtBlockHeightRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetAccountAtBlockHeightRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getAddress_asU8()).length > 0 && t.writeBytes(1, o), 0 !== (o = e.getBlockHeight()) && t.writeUint64(2, o)
        }, proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getAddress = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getAddress_asB64 = function() {
            return r.Message.bytesAsB64(this.getAddress())
        }, proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getAddress_asU8 = function() {
            return r.Message.bytesAsU8(this.getAddress())
        }, proto.flow.access.GetAccountAtBlockHeightRequest.prototype.setAddress = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.access.GetAccountAtBlockHeightRequest.prototype.getBlockHeight = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.access.GetAccountAtBlockHeightRequest.prototype.setBlockHeight = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.toObject = function(e) {
            return proto.flow.access.ExecuteScriptAtLatestBlockRequest.toObject(e, this)
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.toObject = function(e, t) {
            var o = {
                script: t.getScript_asB64(),
                argumentsList: t.getArgumentsList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.ExecuteScriptAtLatestBlockRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.ExecuteScriptAtLatestBlockRequest;
            return proto.flow.access.ExecuteScriptAtLatestBlockRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setScript(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.addArguments(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.ExecuteScriptAtLatestBlockRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getScript_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getArgumentsList_asU8()).length > 0 && t.writeRepeatedBytes(2, o)
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getScript = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getScript_asB64 = function() {
            return r.Message.bytesAsB64(this.getScript())
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getScript_asU8 = function() {
            return r.Message.bytesAsU8(this.getScript())
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.setScript = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getArgumentsList = function() {
            return r.Message.getRepeatedField(this, 2)
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getArgumentsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getArgumentsList())
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.getArgumentsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getArgumentsList())
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.setArgumentsList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.addArguments = function(e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.flow.access.ExecuteScriptAtLatestBlockRequest.prototype.clearArgumentsList = function() {
            return this.setArgumentsList([])
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.toObject = function(e) {
            return proto.flow.access.ExecuteScriptAtBlockIDRequest.toObject(e, this)
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.toObject = function(e, t) {
            var o = {
                blockId: t.getBlockId_asB64(),
                script: t.getScript_asB64(),
                argumentsList: t.getArgumentsList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.ExecuteScriptAtBlockIDRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.ExecuteScriptAtBlockIDRequest;
            return proto.flow.access.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setBlockId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setScript(o);
                        break;
                    case 3:
                        o = t.readBytes();
                        e.addArguments(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getBlockId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getScript_asU8()).length > 0 && t.writeBytes(2, o), (o = e.getArgumentsList_asU8()).length > 0 && t.writeRepeatedBytes(3, o)
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getBlockId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getBlockId())
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getBlockId())
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.setBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getScript = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getScript_asB64 = function() {
            return r.Message.bytesAsB64(this.getScript())
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getScript_asU8 = function() {
            return r.Message.bytesAsU8(this.getScript())
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.setScript = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList = function() {
            return r.Message.getRepeatedField(this, 3)
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getArgumentsList())
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getArgumentsList())
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.setArgumentsList = function(e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.addArguments = function(e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.flow.access.ExecuteScriptAtBlockIDRequest.prototype.clearArgumentsList = function() {
            return this.setArgumentsList([])
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.toObject = function(e) {
            return proto.flow.access.ExecuteScriptAtBlockHeightRequest.toObject(e, this)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.toObject = function(e, t) {
            var o = {
                blockHeight: r.Message.getFieldWithDefault(t, 1, 0),
                script: t.getScript_asB64(),
                argumentsList: t.getArgumentsList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.ExecuteScriptAtBlockHeightRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.ExecuteScriptAtBlockHeightRequest;
            return proto.flow.access.ExecuteScriptAtBlockHeightRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readUint64();
                        e.setBlockHeight(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setScript(o);
                        break;
                    case 3:
                        o = t.readBytes();
                        e.addArguments(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.ExecuteScriptAtBlockHeightRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            0 !== (o = e.getBlockHeight()) && t.writeUint64(1, o), (o = e.getScript_asU8()).length > 0 && t.writeBytes(2, o), (o = e.getArgumentsList_asU8()).length > 0 && t.writeRepeatedBytes(3, o)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getBlockHeight = function() {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.setBlockHeight = function(e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getScript = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getScript_asB64 = function() {
            return r.Message.bytesAsB64(this.getScript())
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getScript_asU8 = function() {
            return r.Message.bytesAsU8(this.getScript())
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.setScript = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getArgumentsList = function() {
            return r.Message.getRepeatedField(this, 3)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getArgumentsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getArgumentsList())
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.getArgumentsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getArgumentsList())
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.setArgumentsList = function(e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.addArguments = function(e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.flow.access.ExecuteScriptAtBlockHeightRequest.prototype.clearArgumentsList = function() {
            return this.setArgumentsList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.ExecuteScriptResponse.prototype.toObject = function(e) {
            return proto.flow.access.ExecuteScriptResponse.toObject(e, this)
        }, proto.flow.access.ExecuteScriptResponse.toObject = function(e, t) {
            var o = {
                value: t.getValue_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.ExecuteScriptResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.ExecuteScriptResponse;
            return proto.flow.access.ExecuteScriptResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.ExecuteScriptResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setValue(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.ExecuteScriptResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.ExecuteScriptResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.ExecuteScriptResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getValue_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.access.ExecuteScriptResponse.prototype.getValue = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.ExecuteScriptResponse.prototype.getValue_asB64 = function() {
            return r.Message.bytesAsB64(this.getValue())
        }, proto.flow.access.ExecuteScriptResponse.prototype.getValue_asU8 = function() {
            return r.Message.bytesAsU8(this.getValue())
        }, proto.flow.access.ExecuteScriptResponse.prototype.setValue = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetEventsForHeightRangeRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetEventsForHeightRangeRequest.toObject(e, this)
        }, proto.flow.access.GetEventsForHeightRangeRequest.toObject = function(e, t) {
            var o = {
                type: r.Message.getFieldWithDefault(t, 1, ""),
                startHeight: r.Message.getFieldWithDefault(t, 2, 0),
                endHeight: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetEventsForHeightRangeRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetEventsForHeightRangeRequest;
            return proto.flow.access.GetEventsForHeightRangeRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetEventsForHeightRangeRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setType(o);
                        break;
                    case 2:
                        o = t.readUint64();
                        e.setStartHeight(o);
                        break;
                    case 3:
                        o = t.readUint64();
                        e.setEndHeight(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetEventsForHeightRangeRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetEventsForHeightRangeRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetEventsForHeightRangeRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getType()).length > 0 && t.writeString(1, o), 0 !== (o = e.getStartHeight()) && t.writeUint64(2, o), 0 !== (o = e.getEndHeight()) && t.writeUint64(3, o)
        }, proto.flow.access.GetEventsForHeightRangeRequest.prototype.getType = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetEventsForHeightRangeRequest.prototype.setType = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.flow.access.GetEventsForHeightRangeRequest.prototype.getStartHeight = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.access.GetEventsForHeightRangeRequest.prototype.setStartHeight = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.access.GetEventsForHeightRangeRequest.prototype.getEndHeight = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.flow.access.GetEventsForHeightRangeRequest.prototype.setEndHeight = function(e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.flow.access.GetEventsForBlockIDsRequest.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetEventsForBlockIDsRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetEventsForBlockIDsRequest.toObject(e, this)
        }, proto.flow.access.GetEventsForBlockIDsRequest.toObject = function(e, t) {
            var o = {
                type: r.Message.getFieldWithDefault(t, 1, ""),
                blockIdsList: t.getBlockIdsList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetEventsForBlockIDsRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetEventsForBlockIDsRequest;
            return proto.flow.access.GetEventsForBlockIDsRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetEventsForBlockIDsRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setType(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.addBlockIds(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetEventsForBlockIDsRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetEventsForBlockIDsRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getType()).length > 0 && t.writeString(1, o), (o = e.getBlockIdsList_asU8()).length > 0 && t.writeRepeatedBytes(2, o)
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.getType = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.setType = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.getBlockIdsList = function() {
            return r.Message.getRepeatedField(this, 2)
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getBlockIdsList())
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getBlockIdsList())
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.setBlockIdsList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.addBlockIds = function(e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.flow.access.GetEventsForBlockIDsRequest.prototype.clearBlockIdsList = function() {
            return this.setBlockIdsList([])
        }, proto.flow.access.EventsResponse.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.flow.access.EventsResponse.prototype.toObject = function(e) {
            return proto.flow.access.EventsResponse.toObject(e, this)
        }, proto.flow.access.EventsResponse.toObject = function(e, t) {
            var o = {
                resultsList: r.Message.toObjectList(t.getResultsList(), proto.flow.access.EventsResponse.Result.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.EventsResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.EventsResponse;
            return proto.flow.access.EventsResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.EventsResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new proto.flow.access.EventsResponse.Result;
                        t.readMessage(o, proto.flow.access.EventsResponse.Result.deserializeBinaryFromReader), e.addResults(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.EventsResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.EventsResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.EventsResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getResultsList()).length > 0 && t.writeRepeatedMessage(1, o, proto.flow.access.EventsResponse.Result.serializeBinaryToWriter)
        }, proto.flow.access.EventsResponse.Result.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.flow.access.EventsResponse.Result.prototype.toObject = function(e) {
            return proto.flow.access.EventsResponse.Result.toObject(e, this)
        }, proto.flow.access.EventsResponse.Result.toObject = function(e, t) {
            var o, s = {
                blockId: t.getBlockId_asB64(),
                blockHeight: r.Message.getFieldWithDefault(t, 2, 0),
                eventsList: r.Message.toObjectList(t.getEventsList(), c.Event.toObject, e),
                blockTimestamp: (o = t.getBlockTimestamp()) && p.Timestamp.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.flow.access.EventsResponse.Result.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.EventsResponse.Result;
            return proto.flow.access.EventsResponse.Result.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.EventsResponse.Result.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setBlockId(o);
                        break;
                    case 2:
                        o = t.readUint64();
                        e.setBlockHeight(o);
                        break;
                    case 3:
                        o = new c.Event;
                        t.readMessage(o, c.Event.deserializeBinaryFromReader), e.addEvents(o);
                        break;
                    case 4:
                        o = new p.Timestamp;
                        t.readMessage(o, p.Timestamp.deserializeBinaryFromReader), e.setBlockTimestamp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.EventsResponse.Result.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.EventsResponse.Result.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.EventsResponse.Result.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getBlockId_asU8()).length > 0 && t.writeBytes(1, o), 0 !== (o = e.getBlockHeight()) && t.writeUint64(2, o), (o = e.getEventsList()).length > 0 && t.writeRepeatedMessage(3, o, c.Event.serializeBinaryToWriter), null != (o = e.getBlockTimestamp()) && t.writeMessage(4, o, p.Timestamp.serializeBinaryToWriter)
        }, proto.flow.access.EventsResponse.Result.prototype.getBlockId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.EventsResponse.Result.prototype.getBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getBlockId())
        }, proto.flow.access.EventsResponse.Result.prototype.getBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getBlockId())
        }, proto.flow.access.EventsResponse.Result.prototype.setBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.access.EventsResponse.Result.prototype.getBlockHeight = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.access.EventsResponse.Result.prototype.setBlockHeight = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.access.EventsResponse.Result.prototype.getEventsList = function() {
            return r.Message.getRepeatedWrapperField(this, c.Event, 3)
        }, proto.flow.access.EventsResponse.Result.prototype.setEventsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        }, proto.flow.access.EventsResponse.Result.prototype.addEvents = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.flow.entities.Event, t)
        }, proto.flow.access.EventsResponse.Result.prototype.clearEventsList = function() {
            return this.setEventsList([])
        }, proto.flow.access.EventsResponse.Result.prototype.getBlockTimestamp = function() {
            return r.Message.getWrapperField(this, p.Timestamp, 4)
        }, proto.flow.access.EventsResponse.Result.prototype.setBlockTimestamp = function(e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.flow.access.EventsResponse.Result.prototype.clearBlockTimestamp = function() {
            return this.setBlockTimestamp(void 0)
        }, proto.flow.access.EventsResponse.Result.prototype.hasBlockTimestamp = function() {
            return null != r.Message.getField(this, 4)
        }, proto.flow.access.EventsResponse.prototype.getResultsList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.flow.access.EventsResponse.Result, 1)
        }, proto.flow.access.EventsResponse.prototype.setResultsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        }, proto.flow.access.EventsResponse.prototype.addResults = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.flow.access.EventsResponse.Result, t)
        }, proto.flow.access.EventsResponse.prototype.clearResultsList = function() {
            return this.setResultsList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetNetworkParametersRequest.prototype.toObject = function(e) {
            return proto.flow.access.GetNetworkParametersRequest.toObject(e, this)
        }, proto.flow.access.GetNetworkParametersRequest.toObject = function(e, t) {
            var o = {};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetNetworkParametersRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetNetworkParametersRequest;
            return proto.flow.access.GetNetworkParametersRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetNetworkParametersRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        }, proto.flow.access.GetNetworkParametersRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetNetworkParametersRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetNetworkParametersRequest.serializeBinaryToWriter = function(e, t) {}, r.Message.GENERATE_TO_OBJECT && (proto.flow.access.GetNetworkParametersResponse.prototype.toObject = function(e) {
            return proto.flow.access.GetNetworkParametersResponse.toObject(e, this)
        }, proto.flow.access.GetNetworkParametersResponse.toObject = function(e, t) {
            var o = {
                chainId: r.Message.getFieldWithDefault(t, 1, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.access.GetNetworkParametersResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.access.GetNetworkParametersResponse;
            return proto.flow.access.GetNetworkParametersResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.access.GetNetworkParametersResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setChainId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.access.GetNetworkParametersResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.access.GetNetworkParametersResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.access.GetNetworkParametersResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getChainId()).length > 0 && t.writeString(1, o)
        }, proto.flow.access.GetNetworkParametersResponse.prototype.getChainId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.access.GetNetworkParametersResponse.prototype.setChainId = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, s.object.extend(t, proto.flow.access)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")(),
            i = o(6);
        s.object.extend(proto, i), s.exportSymbol("proto.flow.entities.BlockHeader", null, n), proto.flow.entities.BlockHeader = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.entities.BlockHeader, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.BlockHeader.displayName = "proto.flow.entities.BlockHeader"), r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.BlockHeader.prototype.toObject = function(e) {
            return proto.flow.entities.BlockHeader.toObject(e, this)
        }, proto.flow.entities.BlockHeader.toObject = function(e, t) {
            var o, s = {
                id: t.getId_asB64(),
                parentId: t.getParentId_asB64(),
                height: r.Message.getFieldWithDefault(t, 3, 0),
                timestamp: (o = t.getTimestamp()) && i.Timestamp.toObject(e, o)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.flow.entities.BlockHeader.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.BlockHeader;
            return proto.flow.entities.BlockHeader.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.BlockHeader.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setParentId(o);
                        break;
                    case 3:
                        o = t.readUint64();
                        e.setHeight(o);
                        break;
                    case 4:
                        o = new i.Timestamp;
                        t.readMessage(o, i.Timestamp.deserializeBinaryFromReader), e.setTimestamp(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.BlockHeader.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.BlockHeader.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.BlockHeader.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getParentId_asU8()).length > 0 && t.writeBytes(2, o), 0 !== (o = e.getHeight()) && t.writeUint64(3, o), null != (o = e.getTimestamp()) && t.writeMessage(4, o, i.Timestamp.serializeBinaryToWriter)
        }, proto.flow.entities.BlockHeader.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.BlockHeader.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.entities.BlockHeader.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.entities.BlockHeader.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.BlockHeader.prototype.getParentId = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.entities.BlockHeader.prototype.getParentId_asB64 = function() {
            return r.Message.bytesAsB64(this.getParentId())
        }, proto.flow.entities.BlockHeader.prototype.getParentId_asU8 = function() {
            return r.Message.bytesAsU8(this.getParentId())
        }, proto.flow.entities.BlockHeader.prototype.setParentId = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.entities.BlockHeader.prototype.getHeight = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.flow.entities.BlockHeader.prototype.setHeight = function(e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.flow.entities.BlockHeader.prototype.getTimestamp = function() {
            return r.Message.getWrapperField(this, i.Timestamp, 4)
        }, proto.flow.entities.BlockHeader.prototype.setTimestamp = function(e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.flow.entities.BlockHeader.prototype.clearTimestamp = function() {
            return this.setTimestamp(void 0)
        }, proto.flow.entities.BlockHeader.prototype.hasTimestamp = function() {
            return null != r.Message.getField(this, 4)
        }, s.object.extend(t, proto.flow.entities)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")();
        s.exportSymbol("proto.google.protobuf.Timestamp", null, n), proto.google.protobuf.Timestamp = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.google.protobuf.Timestamp, r.Message), s.DEBUG && !COMPILED && (proto.google.protobuf.Timestamp.displayName = "proto.google.protobuf.Timestamp"), r.Message.GENERATE_TO_OBJECT && (proto.google.protobuf.Timestamp.prototype.toObject = function(e) {
            return proto.google.protobuf.Timestamp.toObject(e, this)
        }, proto.google.protobuf.Timestamp.toObject = function(e, t) {
            var o = {
                seconds: r.Message.getFieldWithDefault(t, 1, 0),
                nanos: r.Message.getFieldWithDefault(t, 2, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.google.protobuf.Timestamp.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.google.protobuf.Timestamp;
            return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(o, t)
        }, proto.google.protobuf.Timestamp.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readInt64();
                        e.setSeconds(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setNanos(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.google.protobuf.Timestamp.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.google.protobuf.Timestamp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.google.protobuf.Timestamp.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            0 !== (o = e.getSeconds()) && t.writeInt64(1, o), 0 !== (o = e.getNanos()) && t.writeInt32(2, o)
        }, proto.google.protobuf.Timestamp.prototype.getSeconds = function() {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.google.protobuf.Timestamp.prototype.setSeconds = function(e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.google.protobuf.Timestamp.prototype.getNanos = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.google.protobuf.Timestamp.prototype.setNanos = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, s.object.extend(t, proto.google.protobuf), proto.google.protobuf.Timestamp.prototype.toDate = function() {
            var e = this.getSeconds(),
                t = this.getNanos();
            return new Date(1e3 * e + t / 1e6)
        }, proto.google.protobuf.Timestamp.prototype.fromDate = function(e) {
            this.setSeconds(Math.floor(e.getTime() / 1e3)), this.setNanos(1e6 * e.getMilliseconds())
        }, proto.google.protobuf.Timestamp.fromDate = function(e) {
            var t = new proto.google.protobuf.Timestamp;
            return t.fromDate(e), t
        }
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")(),
            i = o(6);
        s.object.extend(proto, i);
        var a = o(2);
        s.object.extend(proto, a);
        var g = o(8);
        s.object.extend(proto, g), s.exportSymbol("proto.flow.entities.Block", null, n), proto.flow.entities.Block = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.entities.Block.repeatedFields_, null)
        }, s.inherits(proto.flow.entities.Block, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.Block.displayName = "proto.flow.entities.Block"), proto.flow.entities.Block.repeatedFields_ = [5, 6, 7], r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.Block.prototype.toObject = function(e) {
            return proto.flow.entities.Block.toObject(e, this)
        }, proto.flow.entities.Block.toObject = function(e, t) {
            var o, s = {
                id: t.getId_asB64(),
                parentId: t.getParentId_asB64(),
                height: r.Message.getFieldWithDefault(t, 3, 0),
                timestamp: (o = t.getTimestamp()) && i.Timestamp.toObject(e, o),
                collectionGuaranteesList: r.Message.toObjectList(t.getCollectionGuaranteesList(), a.CollectionGuarantee.toObject, e),
                blockSealsList: r.Message.toObjectList(t.getBlockSealsList(), g.BlockSeal.toObject, e),
                signaturesList: t.getSignaturesList_asB64()
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.flow.entities.Block.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.Block;
            return proto.flow.entities.Block.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.Block.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setParentId(o);
                        break;
                    case 3:
                        o = t.readUint64();
                        e.setHeight(o);
                        break;
                    case 4:
                        o = new i.Timestamp;
                        t.readMessage(o, i.Timestamp.deserializeBinaryFromReader), e.setTimestamp(o);
                        break;
                    case 5:
                        o = new a.CollectionGuarantee;
                        t.readMessage(o, a.CollectionGuarantee.deserializeBinaryFromReader), e.addCollectionGuarantees(o);
                        break;
                    case 6:
                        o = new g.BlockSeal;
                        t.readMessage(o, g.BlockSeal.deserializeBinaryFromReader), e.addBlockSeals(o);
                        break;
                    case 7:
                        o = t.readBytes();
                        e.addSignatures(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.Block.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.Block.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.Block.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getParentId_asU8()).length > 0 && t.writeBytes(2, o), 0 !== (o = e.getHeight()) && t.writeUint64(3, o), null != (o = e.getTimestamp()) && t.writeMessage(4, o, i.Timestamp.serializeBinaryToWriter), (o = e.getCollectionGuaranteesList()).length > 0 && t.writeRepeatedMessage(5, o, a.CollectionGuarantee.serializeBinaryToWriter), (o = e.getBlockSealsList()).length > 0 && t.writeRepeatedMessage(6, o, g.BlockSeal.serializeBinaryToWriter), (o = e.getSignaturesList_asU8()).length > 0 && t.writeRepeatedBytes(7, o)
        }, proto.flow.entities.Block.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.Block.prototype.getId_asB64 = function() {
            return r.Message.bytesAsB64(this.getId())
        }, proto.flow.entities.Block.prototype.getId_asU8 = function() {
            return r.Message.bytesAsU8(this.getId())
        }, proto.flow.entities.Block.prototype.setId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.Block.prototype.getParentId = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.entities.Block.prototype.getParentId_asB64 = function() {
            return r.Message.bytesAsB64(this.getParentId())
        }, proto.flow.entities.Block.prototype.getParentId_asU8 = function() {
            return r.Message.bytesAsU8(this.getParentId())
        }, proto.flow.entities.Block.prototype.setParentId = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.entities.Block.prototype.getHeight = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.flow.entities.Block.prototype.setHeight = function(e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, proto.flow.entities.Block.prototype.getTimestamp = function() {
            return r.Message.getWrapperField(this, i.Timestamp, 4)
        }, proto.flow.entities.Block.prototype.setTimestamp = function(e) {
            return r.Message.setWrapperField(this, 4, e)
        }, proto.flow.entities.Block.prototype.clearTimestamp = function() {
            return this.setTimestamp(void 0)
        }, proto.flow.entities.Block.prototype.hasTimestamp = function() {
            return null != r.Message.getField(this, 4)
        }, proto.flow.entities.Block.prototype.getCollectionGuaranteesList = function() {
            return r.Message.getRepeatedWrapperField(this, a.CollectionGuarantee, 5)
        }, proto.flow.entities.Block.prototype.setCollectionGuaranteesList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 5, e)
        }, proto.flow.entities.Block.prototype.addCollectionGuarantees = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 5, e, proto.flow.entities.CollectionGuarantee, t)
        }, proto.flow.entities.Block.prototype.clearCollectionGuaranteesList = function() {
            return this.setCollectionGuaranteesList([])
        }, proto.flow.entities.Block.prototype.getBlockSealsList = function() {
            return r.Message.getRepeatedWrapperField(this, g.BlockSeal, 6)
        }, proto.flow.entities.Block.prototype.setBlockSealsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 6, e)
        }, proto.flow.entities.Block.prototype.addBlockSeals = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 6, e, proto.flow.entities.BlockSeal, t)
        }, proto.flow.entities.Block.prototype.clearBlockSealsList = function() {
            return this.setBlockSealsList([])
        }, proto.flow.entities.Block.prototype.getSignaturesList = function() {
            return r.Message.getRepeatedField(this, 7)
        }, proto.flow.entities.Block.prototype.getSignaturesList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getSignaturesList())
        }, proto.flow.entities.Block.prototype.getSignaturesList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getSignaturesList())
        }, proto.flow.entities.Block.prototype.setSignaturesList = function(e) {
            return r.Message.setField(this, 7, e || [])
        }, proto.flow.entities.Block.prototype.addSignatures = function(e, t) {
            return r.Message.addToRepeatedField(this, 7, e, t)
        }, proto.flow.entities.Block.prototype.clearSignaturesList = function() {
            return this.setSignaturesList([])
        }, s.object.extend(t, proto.flow.entities)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")();
        s.exportSymbol("proto.flow.entities.BlockSeal", null, n), proto.flow.entities.BlockSeal = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.entities.BlockSeal.repeatedFields_, null)
        }, s.inherits(proto.flow.entities.BlockSeal, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.BlockSeal.displayName = "proto.flow.entities.BlockSeal"), proto.flow.entities.BlockSeal.repeatedFields_ = [3, 4], r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.BlockSeal.prototype.toObject = function(e) {
            return proto.flow.entities.BlockSeal.toObject(e, this)
        }, proto.flow.entities.BlockSeal.toObject = function(e, t) {
            var o = {
                blockId: t.getBlockId_asB64(),
                executionReceiptId: t.getExecutionReceiptId_asB64(),
                executionReceiptSignaturesList: t.getExecutionReceiptSignaturesList_asB64(),
                resultApprovalSignaturesList: t.getResultApprovalSignaturesList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.entities.BlockSeal.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.BlockSeal;
            return proto.flow.entities.BlockSeal.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.BlockSeal.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setBlockId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setExecutionReceiptId(o);
                        break;
                    case 3:
                        o = t.readBytes();
                        e.addExecutionReceiptSignatures(o);
                        break;
                    case 4:
                        o = t.readBytes();
                        e.addResultApprovalSignatures(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.BlockSeal.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.BlockSeal.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.BlockSeal.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getBlockId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getExecutionReceiptId_asU8()).length > 0 && t.writeBytes(2, o), (o = e.getExecutionReceiptSignaturesList_asU8()).length > 0 && t.writeRepeatedBytes(3, o), (o = e.getResultApprovalSignaturesList_asU8()).length > 0 && t.writeRepeatedBytes(4, o)
        }, proto.flow.entities.BlockSeal.prototype.getBlockId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.BlockSeal.prototype.getBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getBlockId())
        }, proto.flow.entities.BlockSeal.prototype.getBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getBlockId())
        }, proto.flow.entities.BlockSeal.prototype.setBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId_asB64 = function() {
            return r.Message.bytesAsB64(this.getExecutionReceiptId())
        }, proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId_asU8 = function() {
            return r.Message.bytesAsU8(this.getExecutionReceiptId())
        }, proto.flow.entities.BlockSeal.prototype.setExecutionReceiptId = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList = function() {
            return r.Message.getRepeatedField(this, 3)
        }, proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getExecutionReceiptSignaturesList())
        }, proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getExecutionReceiptSignaturesList())
        }, proto.flow.entities.BlockSeal.prototype.setExecutionReceiptSignaturesList = function(e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.flow.entities.BlockSeal.prototype.addExecutionReceiptSignatures = function(e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.flow.entities.BlockSeal.prototype.clearExecutionReceiptSignaturesList = function() {
            return this.setExecutionReceiptSignaturesList([])
        }, proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList = function() {
            return r.Message.getRepeatedField(this, 4)
        }, proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getResultApprovalSignaturesList())
        }, proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getResultApprovalSignaturesList())
        }, proto.flow.entities.BlockSeal.prototype.setResultApprovalSignaturesList = function(e) {
            return r.Message.setField(this, 4, e || [])
        }, proto.flow.entities.BlockSeal.prototype.addResultApprovalSignatures = function(e, t) {
            return r.Message.addToRepeatedField(this, 4, e, t)
        }, proto.flow.entities.BlockSeal.prototype.clearResultApprovalSignaturesList = function() {
            return this.setResultApprovalSignaturesList([])
        }, s.object.extend(t, proto.flow.entities)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")();
        s.exportSymbol("proto.flow.entities.Transaction", null, n), s.exportSymbol("proto.flow.entities.Transaction.ProposalKey", null, n), s.exportSymbol("proto.flow.entities.Transaction.Signature", null, n), s.exportSymbol("proto.flow.entities.TransactionStatus", null, n), proto.flow.entities.Transaction = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.entities.Transaction.repeatedFields_, null)
        }, s.inherits(proto.flow.entities.Transaction, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.Transaction.displayName = "proto.flow.entities.Transaction"), proto.flow.entities.Transaction.ProposalKey = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.entities.Transaction.ProposalKey, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.Transaction.ProposalKey.displayName = "proto.flow.entities.Transaction.ProposalKey"), proto.flow.entities.Transaction.Signature = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.entities.Transaction.Signature, r.Message), s.DEBUG && !COMPILED && (proto.flow.entities.Transaction.Signature.displayName = "proto.flow.entities.Transaction.Signature"), proto.flow.entities.Transaction.repeatedFields_ = [2, 7, 8, 9], r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.Transaction.prototype.toObject = function(e) {
            return proto.flow.entities.Transaction.toObject(e, this)
        }, proto.flow.entities.Transaction.toObject = function(e, t) {
            var o, s = {
                script: t.getScript_asB64(),
                argumentsList: t.getArgumentsList_asB64(),
                referenceBlockId: t.getReferenceBlockId_asB64(),
                gasLimit: r.Message.getFieldWithDefault(t, 4, 0),
                proposalKey: (o = t.getProposalKey()) && proto.flow.entities.Transaction.ProposalKey.toObject(e, o),
                payer: t.getPayer_asB64(),
                authorizersList: t.getAuthorizersList_asB64(),
                payloadSignaturesList: r.Message.toObjectList(t.getPayloadSignaturesList(), proto.flow.entities.Transaction.Signature.toObject, e),
                envelopeSignaturesList: r.Message.toObjectList(t.getEnvelopeSignaturesList(), proto.flow.entities.Transaction.Signature.toObject, e)
            };
            return e && (s.$jspbMessageInstance = t), s
        }), proto.flow.entities.Transaction.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.Transaction;
            return proto.flow.entities.Transaction.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.Transaction.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setScript(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.addArguments(o);
                        break;
                    case 3:
                        o = t.readBytes();
                        e.setReferenceBlockId(o);
                        break;
                    case 4:
                        o = t.readUint64();
                        e.setGasLimit(o);
                        break;
                    case 5:
                        o = new proto.flow.entities.Transaction.ProposalKey;
                        t.readMessage(o, proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader), e.setProposalKey(o);
                        break;
                    case 6:
                        o = t.readBytes();
                        e.setPayer(o);
                        break;
                    case 7:
                        o = t.readBytes();
                        e.addAuthorizers(o);
                        break;
                    case 8:
                        o = new proto.flow.entities.Transaction.Signature;
                        t.readMessage(o, proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader), e.addPayloadSignatures(o);
                        break;
                    case 9:
                        o = new proto.flow.entities.Transaction.Signature;
                        t.readMessage(o, proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader), e.addEnvelopeSignatures(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.Transaction.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.Transaction.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.Transaction.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getScript_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getArgumentsList_asU8()).length > 0 && t.writeRepeatedBytes(2, o), (o = e.getReferenceBlockId_asU8()).length > 0 && t.writeBytes(3, o), 0 !== (o = e.getGasLimit()) && t.writeUint64(4, o), null != (o = e.getProposalKey()) && t.writeMessage(5, o, proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter), (o = e.getPayer_asU8()).length > 0 && t.writeBytes(6, o), (o = e.getAuthorizersList_asU8()).length > 0 && t.writeRepeatedBytes(7, o), (o = e.getPayloadSignaturesList()).length > 0 && t.writeRepeatedMessage(8, o, proto.flow.entities.Transaction.Signature.serializeBinaryToWriter), (o = e.getEnvelopeSignaturesList()).length > 0 && t.writeRepeatedMessage(9, o, proto.flow.entities.Transaction.Signature.serializeBinaryToWriter)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.Transaction.ProposalKey.prototype.toObject = function(e) {
            return proto.flow.entities.Transaction.ProposalKey.toObject(e, this)
        }, proto.flow.entities.Transaction.ProposalKey.toObject = function(e, t) {
            var o = {
                address: t.getAddress_asB64(),
                keyId: r.Message.getFieldWithDefault(t, 2, 0),
                sequenceNumber: r.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.entities.Transaction.ProposalKey.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.Transaction.ProposalKey;
            return proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.Transaction.ProposalKey.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setAddress(o);
                        break;
                    case 2:
                        o = t.readUint32();
                        e.setKeyId(o);
                        break;
                    case 3:
                        o = t.readUint64();
                        e.setSequenceNumber(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.Transaction.ProposalKey.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.Transaction.ProposalKey.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getAddress_asU8()).length > 0 && t.writeBytes(1, o), 0 !== (o = e.getKeyId()) && t.writeUint32(2, o), 0 !== (o = e.getSequenceNumber()) && t.writeUint64(3, o)
        }, proto.flow.entities.Transaction.ProposalKey.prototype.getAddress = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.Transaction.ProposalKey.prototype.getAddress_asB64 = function() {
            return r.Message.bytesAsB64(this.getAddress())
        }, proto.flow.entities.Transaction.ProposalKey.prototype.getAddress_asU8 = function() {
            return r.Message.bytesAsU8(this.getAddress())
        }, proto.flow.entities.Transaction.ProposalKey.prototype.setAddress = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.Transaction.ProposalKey.prototype.getKeyId = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.entities.Transaction.ProposalKey.prototype.setKeyId = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.entities.Transaction.ProposalKey.prototype.getSequenceNumber = function() {
            return r.Message.getFieldWithDefault(this, 3, 0)
        }, proto.flow.entities.Transaction.ProposalKey.prototype.setSequenceNumber = function(e) {
            return r.Message.setProto3IntField(this, 3, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.entities.Transaction.Signature.prototype.toObject = function(e) {
            return proto.flow.entities.Transaction.Signature.toObject(e, this)
        }, proto.flow.entities.Transaction.Signature.toObject = function(e, t) {
            var o = {
                address: t.getAddress_asB64(),
                keyId: r.Message.getFieldWithDefault(t, 2, 0),
                signature: t.getSignature_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.entities.Transaction.Signature.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.entities.Transaction.Signature;
            return proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader(o, t)
        }, proto.flow.entities.Transaction.Signature.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setAddress(o);
                        break;
                    case 2:
                        o = t.readUint32();
                        e.setKeyId(o);
                        break;
                    case 3:
                        o = t.readBytes();
                        e.setSignature(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.entities.Transaction.Signature.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.entities.Transaction.Signature.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.entities.Transaction.Signature.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getAddress_asU8()).length > 0 && t.writeBytes(1, o), 0 !== (o = e.getKeyId()) && t.writeUint32(2, o), (o = e.getSignature_asU8()).length > 0 && t.writeBytes(3, o)
        }, proto.flow.entities.Transaction.Signature.prototype.getAddress = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.Transaction.Signature.prototype.getAddress_asB64 = function() {
            return r.Message.bytesAsB64(this.getAddress())
        }, proto.flow.entities.Transaction.Signature.prototype.getAddress_asU8 = function() {
            return r.Message.bytesAsU8(this.getAddress())
        }, proto.flow.entities.Transaction.Signature.prototype.setAddress = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.Transaction.Signature.prototype.getKeyId = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.entities.Transaction.Signature.prototype.setKeyId = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.entities.Transaction.Signature.prototype.getSignature = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.flow.entities.Transaction.Signature.prototype.getSignature_asB64 = function() {
            return r.Message.bytesAsB64(this.getSignature())
        }, proto.flow.entities.Transaction.Signature.prototype.getSignature_asU8 = function() {
            return r.Message.bytesAsU8(this.getSignature())
        }, proto.flow.entities.Transaction.Signature.prototype.setSignature = function(e) {
            return r.Message.setProto3BytesField(this, 3, e)
        }, proto.flow.entities.Transaction.prototype.getScript = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.entities.Transaction.prototype.getScript_asB64 = function() {
            return r.Message.bytesAsB64(this.getScript())
        }, proto.flow.entities.Transaction.prototype.getScript_asU8 = function() {
            return r.Message.bytesAsU8(this.getScript())
        }, proto.flow.entities.Transaction.prototype.setScript = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.entities.Transaction.prototype.getArgumentsList = function() {
            return r.Message.getRepeatedField(this, 2)
        }, proto.flow.entities.Transaction.prototype.getArgumentsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getArgumentsList())
        }, proto.flow.entities.Transaction.prototype.getArgumentsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getArgumentsList())
        }, proto.flow.entities.Transaction.prototype.setArgumentsList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.flow.entities.Transaction.prototype.addArguments = function(e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.flow.entities.Transaction.prototype.clearArgumentsList = function() {
            return this.setArgumentsList([])
        }, proto.flow.entities.Transaction.prototype.getReferenceBlockId = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }, proto.flow.entities.Transaction.prototype.getReferenceBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getReferenceBlockId())
        }, proto.flow.entities.Transaction.prototype.getReferenceBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getReferenceBlockId())
        }, proto.flow.entities.Transaction.prototype.setReferenceBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 3, e)
        }, proto.flow.entities.Transaction.prototype.getGasLimit = function() {
            return r.Message.getFieldWithDefault(this, 4, 0)
        }, proto.flow.entities.Transaction.prototype.setGasLimit = function(e) {
            return r.Message.setProto3IntField(this, 4, e)
        }, proto.flow.entities.Transaction.prototype.getProposalKey = function() {
            return r.Message.getWrapperField(this, proto.flow.entities.Transaction.ProposalKey, 5)
        }, proto.flow.entities.Transaction.prototype.setProposalKey = function(e) {
            return r.Message.setWrapperField(this, 5, e)
        }, proto.flow.entities.Transaction.prototype.clearProposalKey = function() {
            return this.setProposalKey(void 0)
        }, proto.flow.entities.Transaction.prototype.hasProposalKey = function() {
            return null != r.Message.getField(this, 5)
        }, proto.flow.entities.Transaction.prototype.getPayer = function() {
            return r.Message.getFieldWithDefault(this, 6, "")
        }, proto.flow.entities.Transaction.prototype.getPayer_asB64 = function() {
            return r.Message.bytesAsB64(this.getPayer())
        }, proto.flow.entities.Transaction.prototype.getPayer_asU8 = function() {
            return r.Message.bytesAsU8(this.getPayer())
        }, proto.flow.entities.Transaction.prototype.setPayer = function(e) {
            return r.Message.setProto3BytesField(this, 6, e)
        }, proto.flow.entities.Transaction.prototype.getAuthorizersList = function() {
            return r.Message.getRepeatedField(this, 7)
        }, proto.flow.entities.Transaction.prototype.getAuthorizersList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getAuthorizersList())
        }, proto.flow.entities.Transaction.prototype.getAuthorizersList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getAuthorizersList())
        }, proto.flow.entities.Transaction.prototype.setAuthorizersList = function(e) {
            return r.Message.setField(this, 7, e || [])
        }, proto.flow.entities.Transaction.prototype.addAuthorizers = function(e, t) {
            return r.Message.addToRepeatedField(this, 7, e, t)
        }, proto.flow.entities.Transaction.prototype.clearAuthorizersList = function() {
            return this.setAuthorizersList([])
        }, proto.flow.entities.Transaction.prototype.getPayloadSignaturesList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.flow.entities.Transaction.Signature, 8)
        }, proto.flow.entities.Transaction.prototype.setPayloadSignaturesList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 8, e)
        }, proto.flow.entities.Transaction.prototype.addPayloadSignatures = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 8, e, proto.flow.entities.Transaction.Signature, t)
        }, proto.flow.entities.Transaction.prototype.clearPayloadSignaturesList = function() {
            return this.setPayloadSignaturesList([])
        }, proto.flow.entities.Transaction.prototype.getEnvelopeSignaturesList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.flow.entities.Transaction.Signature, 9)
        }, proto.flow.entities.Transaction.prototype.setEnvelopeSignaturesList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 9, e)
        }, proto.flow.entities.Transaction.prototype.addEnvelopeSignatures = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 9, e, proto.flow.entities.Transaction.Signature, t)
        }, proto.flow.entities.Transaction.prototype.clearEnvelopeSignaturesList = function() {
            return this.setEnvelopeSignaturesList([])
        }, proto.flow.entities.TransactionStatus = {
            UNKNOWN: 0,
            PENDING: 1,
            FINALIZED: 2,
            EXECUTED: 3,
            SEALED: 4,
            EXPIRED: 5
        }, s.object.extend(t, proto.flow.entities)
    }, function(e, t, o) {
        var r = o(0),
            s = r,
            n = Function("return this")(),
            i = o(1);
        s.object.extend(proto, i);
        var a = o(3);
        s.object.extend(proto, a), s.exportSymbol("proto.flow.execution.ExecuteScriptAtBlockIDRequest", null, n), s.exportSymbol("proto.flow.execution.ExecuteScriptAtBlockIDResponse", null, n), s.exportSymbol("proto.flow.execution.GetAccountAtBlockIDRequest", null, n), s.exportSymbol("proto.flow.execution.GetAccountAtBlockIDResponse", null, n), s.exportSymbol("proto.flow.execution.GetEventsForBlockIDsRequest", null, n), s.exportSymbol("proto.flow.execution.GetEventsForBlockIDsResponse", null, n), s.exportSymbol("proto.flow.execution.GetEventsForBlockIDsResponse.Result", null, n), s.exportSymbol("proto.flow.execution.GetTransactionResultRequest", null, n), s.exportSymbol("proto.flow.execution.GetTransactionResultResponse", null, n), s.exportSymbol("proto.flow.execution.PingRequest", null, n), s.exportSymbol("proto.flow.execution.PingResponse", null, n), proto.flow.execution.PingRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.execution.PingRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.PingRequest.displayName = "proto.flow.execution.PingRequest"), proto.flow.execution.PingResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.execution.PingResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.PingResponse.displayName = "proto.flow.execution.PingResponse"), proto.flow.execution.GetAccountAtBlockIDRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.execution.GetAccountAtBlockIDRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.GetAccountAtBlockIDRequest.displayName = "proto.flow.execution.GetAccountAtBlockIDRequest"), proto.flow.execution.GetAccountAtBlockIDResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.execution.GetAccountAtBlockIDResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.GetAccountAtBlockIDResponse.displayName = "proto.flow.execution.GetAccountAtBlockIDResponse"), proto.flow.execution.ExecuteScriptAtBlockIDRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.execution.ExecuteScriptAtBlockIDRequest.repeatedFields_, null)
        }, s.inherits(proto.flow.execution.ExecuteScriptAtBlockIDRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.ExecuteScriptAtBlockIDRequest.displayName = "proto.flow.execution.ExecuteScriptAtBlockIDRequest"), proto.flow.execution.ExecuteScriptAtBlockIDResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.execution.ExecuteScriptAtBlockIDResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.ExecuteScriptAtBlockIDResponse.displayName = "proto.flow.execution.ExecuteScriptAtBlockIDResponse"), proto.flow.execution.GetEventsForBlockIDsResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.execution.GetEventsForBlockIDsResponse.repeatedFields_, null)
        }, s.inherits(proto.flow.execution.GetEventsForBlockIDsResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.GetEventsForBlockIDsResponse.displayName = "proto.flow.execution.GetEventsForBlockIDsResponse"), proto.flow.execution.GetEventsForBlockIDsResponse.Result = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.execution.GetEventsForBlockIDsResponse.Result.repeatedFields_, null)
        }, s.inherits(proto.flow.execution.GetEventsForBlockIDsResponse.Result, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.GetEventsForBlockIDsResponse.Result.displayName = "proto.flow.execution.GetEventsForBlockIDsResponse.Result"), proto.flow.execution.GetEventsForBlockIDsRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.execution.GetEventsForBlockIDsRequest.repeatedFields_, null)
        }, s.inherits(proto.flow.execution.GetEventsForBlockIDsRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.GetEventsForBlockIDsRequest.displayName = "proto.flow.execution.GetEventsForBlockIDsRequest"), proto.flow.execution.GetTransactionResultRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }, s.inherits(proto.flow.execution.GetTransactionResultRequest, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.GetTransactionResultRequest.displayName = "proto.flow.execution.GetTransactionResultRequest"), proto.flow.execution.GetTransactionResultResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.flow.execution.GetTransactionResultResponse.repeatedFields_, null)
        }, s.inherits(proto.flow.execution.GetTransactionResultResponse, r.Message), s.DEBUG && !COMPILED && (proto.flow.execution.GetTransactionResultResponse.displayName = "proto.flow.execution.GetTransactionResultResponse"), r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.PingRequest.prototype.toObject = function(e) {
            return proto.flow.execution.PingRequest.toObject(e, this)
        }, proto.flow.execution.PingRequest.toObject = function(e, t) {
            var o = {};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.PingRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.PingRequest;
            return proto.flow.execution.PingRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.PingRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        }, proto.flow.execution.PingRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.PingRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.PingRequest.serializeBinaryToWriter = function(e, t) {}, r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.PingResponse.prototype.toObject = function(e) {
            return proto.flow.execution.PingResponse.toObject(e, this)
        }, proto.flow.execution.PingResponse.toObject = function(e, t) {
            var o = {};
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.PingResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.PingResponse;
            return proto.flow.execution.PingResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.PingResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                t.getFieldNumber();
                t.skipField()
            }
            return e
        }, proto.flow.execution.PingResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.PingResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.PingResponse.serializeBinaryToWriter = function(e, t) {}, r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.GetAccountAtBlockIDRequest.prototype.toObject = function(e) {
            return proto.flow.execution.GetAccountAtBlockIDRequest.toObject(e, this)
        }, proto.flow.execution.GetAccountAtBlockIDRequest.toObject = function(e, t) {
            var o = {
                blockId: t.getBlockId_asB64(),
                address: t.getAddress_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.GetAccountAtBlockIDRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.GetAccountAtBlockIDRequest;
            return proto.flow.execution.GetAccountAtBlockIDRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.GetAccountAtBlockIDRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setBlockId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setAddress(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.GetAccountAtBlockIDRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.GetAccountAtBlockIDRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getBlockId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getAddress_asU8()).length > 0 && t.writeBytes(2, o)
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getBlockId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getBlockId())
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getBlockId())
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.setBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getAddress = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getAddress_asB64 = function() {
            return r.Message.bytesAsB64(this.getAddress())
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.getAddress_asU8 = function() {
            return r.Message.bytesAsU8(this.getAddress())
        }, proto.flow.execution.GetAccountAtBlockIDRequest.prototype.setAddress = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.GetAccountAtBlockIDResponse.prototype.toObject = function(e) {
            return proto.flow.execution.GetAccountAtBlockIDResponse.toObject(e, this)
        }, proto.flow.execution.GetAccountAtBlockIDResponse.toObject = function(e, t) {
            var o, r = {
                account: (o = t.getAccount()) && i.Account.toObject(e, o)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.flow.execution.GetAccountAtBlockIDResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.GetAccountAtBlockIDResponse;
            return proto.flow.execution.GetAccountAtBlockIDResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.GetAccountAtBlockIDResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new i.Account;
                        t.readMessage(o, i.Account.deserializeBinaryFromReader), e.setAccount(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.GetAccountAtBlockIDResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.GetAccountAtBlockIDResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.GetAccountAtBlockIDResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            null != (o = e.getAccount()) && t.writeMessage(1, o, i.Account.serializeBinaryToWriter)
        }, proto.flow.execution.GetAccountAtBlockIDResponse.prototype.getAccount = function() {
            return r.Message.getWrapperField(this, i.Account, 1)
        }, proto.flow.execution.GetAccountAtBlockIDResponse.prototype.setAccount = function(e) {
            return r.Message.setWrapperField(this, 1, e)
        }, proto.flow.execution.GetAccountAtBlockIDResponse.prototype.clearAccount = function() {
            return this.setAccount(void 0)
        }, proto.flow.execution.GetAccountAtBlockIDResponse.prototype.hasAccount = function() {
            return null != r.Message.getField(this, 1)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.toObject = function(e) {
            return proto.flow.execution.ExecuteScriptAtBlockIDRequest.toObject(e, this)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.toObject = function(e, t) {
            var o = {
                blockId: t.getBlockId_asB64(),
                script: t.getScript_asB64(),
                argumentsList: t.getArgumentsList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.ExecuteScriptAtBlockIDRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.ExecuteScriptAtBlockIDRequest;
            return proto.flow.execution.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setBlockId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setScript(o);
                        break;
                    case 3:
                        o = t.readBytes();
                        e.addArguments(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getBlockId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getScript_asU8()).length > 0 && t.writeBytes(2, o), (o = e.getArgumentsList_asU8()).length > 0 && t.writeRepeatedBytes(3, o)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getBlockId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getBlockId())
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getBlockId())
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.setBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getScript = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getScript_asB64 = function() {
            return r.Message.bytesAsB64(this.getScript())
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getScript_asU8 = function() {
            return r.Message.bytesAsU8(this.getScript())
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.setScript = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList = function() {
            return r.Message.getRepeatedField(this, 3)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getArgumentsList())
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.getArgumentsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getArgumentsList())
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.setArgumentsList = function(e) {
            return r.Message.setField(this, 3, e || [])
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.addArguments = function(e, t) {
            return r.Message.addToRepeatedField(this, 3, e, t)
        }, proto.flow.execution.ExecuteScriptAtBlockIDRequest.prototype.clearArgumentsList = function() {
            return this.setArgumentsList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.toObject = function(e) {
            return proto.flow.execution.ExecuteScriptAtBlockIDResponse.toObject(e, this)
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.toObject = function(e, t) {
            var o = {
                value: t.getValue_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.ExecuteScriptAtBlockIDResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.ExecuteScriptAtBlockIDResponse;
            return proto.flow.execution.ExecuteScriptAtBlockIDResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setValue(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.ExecuteScriptAtBlockIDResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getValue_asU8()).length > 0 && t.writeBytes(1, o)
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.getValue = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.getValue_asB64 = function() {
            return r.Message.bytesAsB64(this.getValue())
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.getValue_asU8 = function() {
            return r.Message.bytesAsU8(this.getValue())
        }, proto.flow.execution.ExecuteScriptAtBlockIDResponse.prototype.setValue = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.repeatedFields_ = [1], r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.GetEventsForBlockIDsResponse.prototype.toObject = function(e) {
            return proto.flow.execution.GetEventsForBlockIDsResponse.toObject(e, this)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.toObject = function(e, t) {
            var o = {
                resultsList: r.Message.toObjectList(t.getResultsList(), proto.flow.execution.GetEventsForBlockIDsResponse.Result.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.GetEventsForBlockIDsResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.GetEventsForBlockIDsResponse;
            return proto.flow.execution.GetEventsForBlockIDsResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = new proto.flow.execution.GetEventsForBlockIDsResponse.Result;
                        t.readMessage(o, proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinaryFromReader), e.addResults(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.GetEventsForBlockIDsResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.GetEventsForBlockIDsResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.GetEventsForBlockIDsResponse.serializeBinaryToWriter = function(e, t) {
            var o;
            (o = e.getResultsList()).length > 0 && t.writeRepeatedMessage(1, o, proto.flow.execution.GetEventsForBlockIDsResponse.Result.serializeBinaryToWriter)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.toObject = function(e) {
            return proto.flow.execution.GetEventsForBlockIDsResponse.Result.toObject(e, this)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.toObject = function(e, t) {
            var o = {
                blockId: t.getBlockId_asB64(),
                blockHeight: r.Message.getFieldWithDefault(t, 2, 0),
                eventsList: r.Message.toObjectList(t.getEventsList(), a.Event.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.GetEventsForBlockIDsResponse.Result;
            return proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setBlockId(o);
                        break;
                    case 2:
                        o = t.readUint64();
                        e.setBlockHeight(o);
                        break;
                    case 3:
                        o = new a.Event;
                        t.readMessage(o, a.Event.deserializeBinaryFromReader), e.addEvents(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.GetEventsForBlockIDsResponse.Result.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getBlockId_asU8()).length > 0 && t.writeBytes(1, o), 0 !== (o = e.getBlockHeight()) && t.writeUint64(2, o), (o = e.getEventsList()).length > 0 && t.writeRepeatedMessage(3, o, a.Event.serializeBinaryToWriter)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getBlockId())
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getBlockId())
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.setBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getBlockHeight = function() {
            return r.Message.getFieldWithDefault(this, 2, 0)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.setBlockHeight = function(e) {
            return r.Message.setProto3IntField(this, 2, e)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.getEventsList = function() {
            return r.Message.getRepeatedWrapperField(this, a.Event, 3)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.setEventsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.addEvents = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.flow.entities.Event, t)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.Result.prototype.clearEventsList = function() {
            return this.setEventsList([])
        }, proto.flow.execution.GetEventsForBlockIDsResponse.prototype.getResultsList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.flow.execution.GetEventsForBlockIDsResponse.Result, 1)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.prototype.setResultsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 1, e)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.prototype.addResults = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 1, e, proto.flow.execution.GetEventsForBlockIDsResponse.Result, t)
        }, proto.flow.execution.GetEventsForBlockIDsResponse.prototype.clearResultsList = function() {
            return this.setResultsList([])
        }, proto.flow.execution.GetEventsForBlockIDsRequest.repeatedFields_ = [2], r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.GetEventsForBlockIDsRequest.prototype.toObject = function(e) {
            return proto.flow.execution.GetEventsForBlockIDsRequest.toObject(e, this)
        }, proto.flow.execution.GetEventsForBlockIDsRequest.toObject = function(e, t) {
            var o = {
                type: r.Message.getFieldWithDefault(t, 1, ""),
                blockIdsList: t.getBlockIdsList_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.GetEventsForBlockIDsRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.GetEventsForBlockIDsRequest;
            return proto.flow.execution.GetEventsForBlockIDsRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.GetEventsForBlockIDsRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readString();
                        e.setType(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.addBlockIds(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.GetEventsForBlockIDsRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.GetEventsForBlockIDsRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getType()).length > 0 && t.writeString(1, o), (o = e.getBlockIdsList_asU8()).length > 0 && t.writeRepeatedBytes(2, o)
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getType = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.setType = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getBlockIdsList = function() {
            return r.Message.getRepeatedField(this, 2)
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asB64 = function() {
            return r.Message.bytesListAsB64(this.getBlockIdsList())
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.getBlockIdsList_asU8 = function() {
            return r.Message.bytesListAsU8(this.getBlockIdsList())
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.setBlockIdsList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.addBlockIds = function(e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t)
        }, proto.flow.execution.GetEventsForBlockIDsRequest.prototype.clearBlockIdsList = function() {
            return this.setBlockIdsList([])
        }, r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.GetTransactionResultRequest.prototype.toObject = function(e) {
            return proto.flow.execution.GetTransactionResultRequest.toObject(e, this)
        }, proto.flow.execution.GetTransactionResultRequest.toObject = function(e, t) {
            var o = {
                blockId: t.getBlockId_asB64(),
                transactionId: t.getTransactionId_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.GetTransactionResultRequest.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.GetTransactionResultRequest;
            return proto.flow.execution.GetTransactionResultRequest.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.GetTransactionResultRequest.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readBytes();
                        e.setBlockId(o);
                        break;
                    case 2:
                        o = t.readBytes();
                        e.setTransactionId(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.GetTransactionResultRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.GetTransactionResultRequest.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.GetTransactionResultRequest.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            (o = e.getBlockId_asU8()).length > 0 && t.writeBytes(1, o), (o = e.getTransactionId_asU8()).length > 0 && t.writeBytes(2, o)
        }, proto.flow.execution.GetTransactionResultRequest.prototype.getBlockId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }, proto.flow.execution.GetTransactionResultRequest.prototype.getBlockId_asB64 = function() {
            return r.Message.bytesAsB64(this.getBlockId())
        }, proto.flow.execution.GetTransactionResultRequest.prototype.getBlockId_asU8 = function() {
            return r.Message.bytesAsU8(this.getBlockId())
        }, proto.flow.execution.GetTransactionResultRequest.prototype.setBlockId = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }, proto.flow.execution.GetTransactionResultRequest.prototype.getTransactionId = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.execution.GetTransactionResultRequest.prototype.getTransactionId_asB64 = function() {
            return r.Message.bytesAsB64(this.getTransactionId())
        }, proto.flow.execution.GetTransactionResultRequest.prototype.getTransactionId_asU8 = function() {
            return r.Message.bytesAsU8(this.getTransactionId())
        }, proto.flow.execution.GetTransactionResultRequest.prototype.setTransactionId = function(e) {
            return r.Message.setProto3BytesField(this, 2, e)
        }, proto.flow.execution.GetTransactionResultResponse.repeatedFields_ = [3], r.Message.GENERATE_TO_OBJECT && (proto.flow.execution.GetTransactionResultResponse.prototype.toObject = function(e) {
            return proto.flow.execution.GetTransactionResultResponse.toObject(e, this)
        }, proto.flow.execution.GetTransactionResultResponse.toObject = function(e, t) {
            var o = {
                statusCode: r.Message.getFieldWithDefault(t, 1, 0),
                errorMessage: r.Message.getFieldWithDefault(t, 2, ""),
                eventsList: r.Message.toObjectList(t.getEventsList(), a.Event.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.flow.execution.GetTransactionResultResponse.deserializeBinary = function(e) {
            var t = new r.BinaryReader(e),
                o = new proto.flow.execution.GetTransactionResultResponse;
            return proto.flow.execution.GetTransactionResultResponse.deserializeBinaryFromReader(o, t)
        }, proto.flow.execution.GetTransactionResultResponse.deserializeBinaryFromReader = function(e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var o = t.readUint32();
                        e.setStatusCode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrorMessage(o);
                        break;
                    case 3:
                        o = new a.Event;
                        t.readMessage(o, a.Event.deserializeBinaryFromReader), e.addEvents(o);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.flow.execution.GetTransactionResultResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.flow.execution.GetTransactionResultResponse.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.flow.execution.GetTransactionResultResponse.serializeBinaryToWriter = function(e, t) {
            var o = void 0;
            0 !== (o = e.getStatusCode()) && t.writeUint32(1, o), (o = e.getErrorMessage()).length > 0 && t.writeString(2, o), (o = e.getEventsList()).length > 0 && t.writeRepeatedMessage(3, o, a.Event.serializeBinaryToWriter)
        }, proto.flow.execution.GetTransactionResultResponse.prototype.getStatusCode = function() {
            return r.Message.getFieldWithDefault(this, 1, 0)
        }, proto.flow.execution.GetTransactionResultResponse.prototype.setStatusCode = function(e) {
            return r.Message.setProto3IntField(this, 1, e)
        }, proto.flow.execution.GetTransactionResultResponse.prototype.getErrorMessage = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }, proto.flow.execution.GetTransactionResultResponse.prototype.setErrorMessage = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }, proto.flow.execution.GetTransactionResultResponse.prototype.getEventsList = function() {
            return r.Message.getRepeatedWrapperField(this, a.Event, 3)
        }, proto.flow.execution.GetTransactionResultResponse.prototype.setEventsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 3, e)
        }, proto.flow.execution.GetTransactionResultResponse.prototype.addEvents = function(e, t) {
            return r.Message.addToRepeatedWrapperField(this, 3, e, proto.flow.entities.Event, t)
        }, proto.flow.execution.GetTransactionResultResponse.prototype.clearEventsList = function() {
            return this.setEventsList([])
        }, s.object.extend(t, proto.flow.execution)
    }, function(e, t, o) {
        var r = o(4),
            s = o(12).grpc,
            n = function() {
                function e() {}
                return e.serviceName = "flow.access.AccessAPI", e
            }();

        function i(e, t) {
            this.serviceHost = e, this.options = t || {}
        }
        n.Ping = {
            methodName: "Ping",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.PingRequest,
            responseType: r.PingResponse
        }, n.GetLatestBlockHeader = {
            methodName: "GetLatestBlockHeader",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetLatestBlockHeaderRequest,
            responseType: r.BlockHeaderResponse
        }, n.GetBlockHeaderByID = {
            methodName: "GetBlockHeaderByID",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetBlockHeaderByIDRequest,
            responseType: r.BlockHeaderResponse
        }, n.GetBlockHeaderByHeight = {
            methodName: "GetBlockHeaderByHeight",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetBlockHeaderByHeightRequest,
            responseType: r.BlockHeaderResponse
        }, n.GetLatestBlock = {
            methodName: "GetLatestBlock",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetLatestBlockRequest,
            responseType: r.BlockResponse
        }, n.GetBlockByID = {
            methodName: "GetBlockByID",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetBlockByIDRequest,
            responseType: r.BlockResponse
        }, n.GetBlockByHeight = {
            methodName: "GetBlockByHeight",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetBlockByHeightRequest,
            responseType: r.BlockResponse
        }, n.GetCollectionByID = {
            methodName: "GetCollectionByID",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetCollectionByIDRequest,
            responseType: r.CollectionResponse
        }, n.SendTransaction = {
            methodName: "SendTransaction",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.SendTransactionRequest,
            responseType: r.SendTransactionResponse
        }, n.GetTransaction = {
            methodName: "GetTransaction",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetTransactionRequest,
            responseType: r.TransactionResponse
        }, n.GetTransactionResult = {
            methodName: "GetTransactionResult",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetTransactionRequest,
            responseType: r.TransactionResultResponse
        }, n.GetAccount = {
            methodName: "GetAccount",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetAccountRequest,
            responseType: r.GetAccountResponse
        }, n.GetAccountAtLatestBlock = {
            methodName: "GetAccountAtLatestBlock",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetAccountAtLatestBlockRequest,
            responseType: r.AccountResponse
        }, n.GetAccountAtBlockHeight = {
            methodName: "GetAccountAtBlockHeight",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetAccountAtBlockHeightRequest,
            responseType: r.AccountResponse
        }, n.ExecuteScriptAtLatestBlock = {
            methodName: "ExecuteScriptAtLatestBlock",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.ExecuteScriptAtLatestBlockRequest,
            responseType: r.ExecuteScriptResponse
        }, n.ExecuteScriptAtBlockID = {
            methodName: "ExecuteScriptAtBlockID",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.ExecuteScriptAtBlockIDRequest,
            responseType: r.ExecuteScriptResponse
        }, n.ExecuteScriptAtBlockHeight = {
            methodName: "ExecuteScriptAtBlockHeight",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.ExecuteScriptAtBlockHeightRequest,
            responseType: r.ExecuteScriptResponse
        }, n.GetEventsForHeightRange = {
            methodName: "GetEventsForHeightRange",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetEventsForHeightRangeRequest,
            responseType: r.EventsResponse
        }, n.GetEventsForBlockIDs = {
            methodName: "GetEventsForBlockIDs",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetEventsForBlockIDsRequest,
            responseType: r.EventsResponse
        }, n.GetNetworkParameters = {
            methodName: "GetNetworkParameters",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetNetworkParametersRequest,
            responseType: r.GetNetworkParametersResponse
        }, t.AccessAPI = n, i.prototype.ping = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.Ping, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getLatestBlockHeader = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetLatestBlockHeader, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getBlockHeaderByID = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetBlockHeaderByID, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getBlockHeaderByHeight = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetBlockHeaderByHeight, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getLatestBlock = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetLatestBlock, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getBlockByID = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetBlockByID, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getBlockByHeight = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetBlockByHeight, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getCollectionByID = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetCollectionByID, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.sendTransaction = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.SendTransaction, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getTransaction = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetTransaction, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getTransactionResult = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetTransactionResult, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getAccount = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetAccount, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getAccountAtLatestBlock = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetAccountAtLatestBlock, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getAccountAtBlockHeight = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetAccountAtBlockHeight, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.executeScriptAtLatestBlock = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.ExecuteScriptAtLatestBlock, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.executeScriptAtBlockID = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.ExecuteScriptAtBlockID, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.executeScriptAtBlockHeight = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.ExecuteScriptAtBlockHeight, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getEventsForHeightRange = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetEventsForHeightRange, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getEventsForBlockIDs = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetEventsForBlockIDs, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getNetworkParameters = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetNetworkParameters, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, t.AccessAPIClient = i
    }, function(e, t) {
        ! function(e, t) {
            for (var o in t) e[o] = t[o]
        }(t, function(e) {
            var t = {};

            function o(r) {
                if (t[r]) return t[r].exports;
                var s = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(s.exports, s, s.exports, o), s.l = !0, s.exports
            }
            return o.m = e, o.c = t, o.d = function(e, t, r) {
                o.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }, o.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, o.t = function(e, t) {
                if (1 & t && (e = o(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (o.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var s in e) o.d(r, s, function(t) {
                        return e[t]
                    }.bind(null, s));
                return r
            }, o.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return o.d(t, "a", t), t
            }, o.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, o.p = "", o(o.s = 11)
        }([function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(4);
            t.Metadata = r.BrowserHeaders
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.debug = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.debug ? console.debug.apply(null, e) : console.log.apply(null, e)
            }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = null;
            t.default = function(e) {
                null === r ? (r = [e], setTimeout((function() {
                    ! function e() {
                        if (r) {
                            var t = r;
                            r = null;
                            for (var o = 0; o < t.length; o++) try {
                                t[o]()
                            } catch (n) {
                                null === r && (r = [], setTimeout((function() {
                                    e()
                                }), 0));
                                for (var s = t.length - 1; s > o; s--) r.unshift(t[s]);
                                throw n
                            }
                        }
                    }()
                }), 0)) : r.push(e)
            }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(0),
                s = o(9),
                n = o(10),
                i = o(1),
                a = o(2),
                g = o(5),
                l = o(15);
            t.client = function(e, t) {
                return new c(e, t)
            };
            var c = function() {
                function e(e, t) {
                    this.started = !1, this.sentFirstMessage = !1, this.completed = !1, this.closed = !1, this.finishedSending = !1, this.onHeadersCallbacks = [], this.onMessageCallbacks = [], this.onEndCallbacks = [], this.parser = new s.ChunkParser, this.methodDefinition = e, this.props = t, this.createTransport()
                }
                return e.prototype.createTransport = function() {
                    var e = this.props.host + "/" + this.methodDefinition.service.serviceName + "/" + this.methodDefinition.methodName,
                        t = {
                            methodDefinition: this.methodDefinition,
                            debug: this.props.debug || !1,
                            url: e,
                            onHeaders: this.onTransportHeaders.bind(this),
                            onChunk: this.onTransportChunk.bind(this),
                            onEnd: this.onTransportEnd.bind(this)
                        };
                    this.props.transport ? this.transport = this.props.transport(t) : this.transport = g.makeDefaultTransport(t)
                }, e.prototype.onTransportHeaders = function(e, t) {
                    if (this.props.debug && i.debug("onHeaders", e, t), this.closed) this.props.debug && i.debug("grpc.onHeaders received after request was closed - ignoring");
                    else if (0 === t);
                    else {
                        this.responseHeaders = e, this.props.debug && i.debug("onHeaders.responseHeaders", JSON.stringify(this.responseHeaders, null, 2));
                        var o = u(e);
                        this.props.debug && i.debug("onHeaders.gRPCStatus", o);
                        var r = o && o >= 0 ? o : n.httpStatusToCode(t);
                        this.props.debug && i.debug("onHeaders.code", r);
                        var s = e.get("grpc-message") || [];
                        if (this.props.debug && i.debug("onHeaders.gRPCMessage", s), this.rawOnHeaders(e), r !== n.Code.OK) {
                            var a = this.decodeGRPCStatus(s[0]);
                            this.rawOnError(r, a, e)
                        }
                    }
                }, e.prototype.onTransportChunk = function(e) {
                    var t = this;
                    if (this.closed) this.props.debug && i.debug("grpc.onChunk received after request was closed - ignoring");
                    else {
                        var o = [];
                        try {
                            o = this.parser.parse(e)
                        } catch (e) {
                            return this.props.debug && i.debug("onChunk.parsing error", e, e.message), void this.rawOnError(n.Code.Internal, "parsing error: " + e.message)
                        }
                        o.forEach((function(e) {
                            if (e.chunkType === s.ChunkType.MESSAGE) {
                                var o = t.methodDefinition.responseType.deserializeBinary(e.data);
                                t.rawOnMessage(o)
                            } else e.chunkType === s.ChunkType.TRAILERS && (t.responseHeaders ? (t.responseTrailers = new r.Metadata(e.trailers), t.props.debug && i.debug("onChunk.trailers", t.responseTrailers)) : (t.responseHeaders = new r.Metadata(e.trailers), t.rawOnHeaders(t.responseHeaders)))
                        }))
                    }
                }, e.prototype.onTransportEnd = function() {
                    if (this.props.debug && i.debug("grpc.onEnd"), this.closed) this.props.debug && i.debug("grpc.onEnd received after request was closed - ignoring");
                    else if (void 0 !== this.responseTrailers) {
                        var e = u(this.responseTrailers);
                        if (null !== e) {
                            var t = this.responseTrailers.get("grpc-message"),
                                o = this.decodeGRPCStatus(t[0]);
                            this.rawOnEnd(e, o, this.responseTrailers)
                        } else this.rawOnError(n.Code.Internal, "Response closed without grpc-status (Trailers provided)")
                    } else {
                        if (void 0 === this.responseHeaders) return void this.rawOnError(n.Code.Unknown, "Response closed without headers");
                        var r = u(this.responseHeaders),
                            s = this.responseHeaders.get("grpc-message");
                        if (this.props.debug && i.debug("grpc.headers only response ", r, s), null === r) return void this.rawOnEnd(n.Code.Unknown, "Response closed without grpc-status (Headers only)", this.responseHeaders);
                        var a = this.decodeGRPCStatus(s[0]);
                        this.rawOnEnd(r, a, this.responseHeaders)
                    }
                }, e.prototype.decodeGRPCStatus = function(e) {
                    if (!e) return "";
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        return e
                    }
                }, e.prototype.rawOnEnd = function(e, t, o) {
                    var r = this;
                    this.props.debug && i.debug("rawOnEnd", e, t, o), this.completed || (this.completed = !0, this.onEndCallbacks.forEach((function(s) {
                        a.default((function() {
                            r.closed || s(e, t, o)
                        }))
                    })))
                }, e.prototype.rawOnHeaders = function(e) {
                    this.props.debug && i.debug("rawOnHeaders", e), this.completed || this.onHeadersCallbacks.forEach((function(t) {
                        a.default((function() {
                            t(e)
                        }))
                    }))
                }, e.prototype.rawOnError = function(e, t, o) {
                    var s = this;
                    void 0 === o && (o = new r.Metadata), this.props.debug && i.debug("rawOnError", e, t), this.completed || (this.completed = !0, this.onEndCallbacks.forEach((function(r) {
                        a.default((function() {
                            s.closed || r(e, t, o)
                        }))
                    })))
                }, e.prototype.rawOnMessage = function(e) {
                    var t = this;
                    this.props.debug && i.debug("rawOnMessage", e.toObject()), this.completed || this.closed || this.onMessageCallbacks.forEach((function(o) {
                        a.default((function() {
                            t.closed || o(e)
                        }))
                    }))
                }, e.prototype.onHeaders = function(e) {
                    this.onHeadersCallbacks.push(e)
                }, e.prototype.onMessage = function(e) {
                    this.onMessageCallbacks.push(e)
                }, e.prototype.onEnd = function(e) {
                    this.onEndCallbacks.push(e)
                }, e.prototype.start = function(e) {
                    if (this.started) throw new Error("Client already started - cannot .start()");
                    this.started = !0;
                    var t = new r.Metadata(e || {});
                    t.set("content-type", "application/grpc-web+proto"), t.set("x-grpc-web", "1"), this.transport.start(t)
                }, e.prototype.send = function(e) {
                    if (!this.started) throw new Error("Client not started - .start() must be called before .send()");
                    if (this.closed) throw new Error("Client already closed - cannot .send()");
                    if (this.finishedSending) throw new Error("Client already finished sending - cannot .send()");
                    if (!this.methodDefinition.requestStream && this.sentFirstMessage) throw new Error("Message already sent for non-client-streaming method - cannot .send()");
                    this.sentFirstMessage = !0;
                    var t = l.frameRequest(e);
                    this.transport.sendMessage(t)
                }, e.prototype.finishSend = function() {
                    if (!this.started) throw new Error("Client not started - .finishSend() must be called before .close()");
                    if (this.closed) throw new Error("Client already closed - cannot .send()");
                    if (this.finishedSending) throw new Error("Client already finished sending - cannot .finishSend()");
                    this.finishedSending = !0, this.transport.finishSend()
                }, e.prototype.close = function() {
                    if (!this.started) throw new Error("Client not started - .start() must be called before .close()");
                    if (this.closed) throw new Error("Client already closed - cannot .close()");
                    this.closed = !0, this.props.debug && i.debug("request.abort aborting request"), this.transport.cancel()
                }, e
            }();

            function u(e) {
                var t = e.get("grpc-status") || [];
                if (t.length > 0) try {
                    var o = t[0];
                    return parseInt(o, 10)
                } catch (e) {
                    return null
                }
                return null
            }
        }, function(e, t, o) {
            var r;
            r = function() {
                return function(e) {
                    var t = {};

                    function o(r) {
                        if (t[r]) return t[r].exports;
                        var s = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(s.exports, s, s.exports, o), s.l = !0, s.exports
                    }
                    return o.m = e, o.c = t, o.i = function(e) {
                        return e
                    }, o.d = function(e, t, r) {
                        o.o(e, t) || Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, o.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return o.d(t, "a", t), t
                    }, o.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, o.p = "", o(o.s = 1)
                }([function(e, t, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = o(3),
                        s = function() {
                            function e(e, t) {
                                void 0 === e && (e = {}), void 0 === t && (t = {
                                    splitValues: !1
                                });
                                var o, s = this;
                                this.headersMap = {}, e && ("undefined" != typeof Headers && e instanceof Headers ? r.getHeaderKeys(e).forEach((function(o) {
                                    r.getHeaderValues(e, o).forEach((function(e) {
                                        t.splitValues ? s.append(o, r.splitHeaderValue(e)) : s.append(o, e)
                                    }))
                                })) : "object" == typeof(o = e) && "object" == typeof o.headersMap && "function" == typeof o.forEach ? e.forEach((function(e, t) {
                                    s.append(e, t)
                                })) : "undefined" != typeof Map && e instanceof Map ? e.forEach((function(e, t) {
                                    s.append(t, e)
                                })) : "string" == typeof e ? this.appendFromString(e) : "object" == typeof e && Object.getOwnPropertyNames(e).forEach((function(t) {
                                    var o = e[t];
                                    Array.isArray(o) ? o.forEach((function(e) {
                                        s.append(t, e)
                                    })) : s.append(t, o)
                                })))
                            }
                            return e.prototype.appendFromString = function(e) {
                                for (var t = e.split("\r\n"), o = 0; o < t.length; o++) {
                                    var r = t[o],
                                        s = r.indexOf(":");
                                    if (s > 0) {
                                        var n = r.substring(0, s).trim(),
                                            i = r.substring(s + 1).trim();
                                        this.append(n, i)
                                    }
                                }
                            }, e.prototype.delete = function(e, t) {
                                var o = r.normalizeName(e);
                                if (void 0 === t) delete this.headersMap[o];
                                else {
                                    var s = this.headersMap[o];
                                    if (s) {
                                        var n = s.indexOf(t);
                                        n >= 0 && s.splice(n, 1), 0 === s.length && delete this.headersMap[o]
                                    }
                                }
                            }, e.prototype.append = function(e, t) {
                                var o = this,
                                    s = r.normalizeName(e);
                                Array.isArray(this.headersMap[s]) || (this.headersMap[s] = []), Array.isArray(t) ? t.forEach((function(e) {
                                    o.headersMap[s].push(r.normalizeValue(e))
                                })) : this.headersMap[s].push(r.normalizeValue(t))
                            }, e.prototype.set = function(e, t) {
                                var o = r.normalizeName(e);
                                if (Array.isArray(t)) {
                                    var s = [];
                                    t.forEach((function(e) {
                                        s.push(r.normalizeValue(e))
                                    })), this.headersMap[o] = s
                                } else this.headersMap[o] = [r.normalizeValue(t)]
                            }, e.prototype.has = function(e, t) {
                                var o = this.headersMap[r.normalizeName(e)];
                                if (!Array.isArray(o)) return !1;
                                if (void 0 !== t) {
                                    var s = r.normalizeValue(t);
                                    return o.indexOf(s) >= 0
                                }
                                return !0
                            }, e.prototype.get = function(e) {
                                var t = this.headersMap[r.normalizeName(e)];
                                return void 0 !== t ? t.concat() : []
                            }, e.prototype.forEach = function(e) {
                                var t = this;
                                Object.getOwnPropertyNames(this.headersMap).forEach((function(o) {
                                    e(o, t.headersMap[o])
                                }), this)
                            }, e.prototype.toHeaders = function() {
                                if ("undefined" != typeof Headers) {
                                    var e = new Headers;
                                    return this.forEach((function(t, o) {
                                        o.forEach((function(o) {
                                            e.append(t, o)
                                        }))
                                    })), e
                                }
                                throw new Error("Headers class is not defined")
                            }, e
                        }();
                    t.BrowserHeaders = s
                }, function(e, t, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = o(0);
                    t.BrowserHeaders = r.BrowserHeaders
                }, function(e, t, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.iterateHeaders = function(e, t) {
                        for (var o = e[Symbol.iterator](), r = o.next(); !r.done;) t(r.value[0]), r = o.next()
                    }, t.iterateHeadersKeys = function(e, t) {
                        for (var o = e.keys(), r = o.next(); !r.done;) t(r.value), r = o.next()
                    }
                }, function(e, t, o) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = o(2);
                    t.normalizeName = function(e) {
                        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                        return e.toLowerCase()
                    }, t.normalizeValue = function(e) {
                        return "string" != typeof e && (e = String(e)), e
                    }, t.getHeaderValues = function(e, t) {
                        var o = e;
                        if (o instanceof Headers && o.getAll) return o.getAll(t);
                        var r = o.get(t);
                        return r && "string" == typeof r ? [r] : r
                    }, t.getHeaderKeys = function(e) {
                        var t = e,
                            o = {},
                            s = [];
                        return t.keys ? r.iterateHeadersKeys(t, (function(e) {
                            o[e] || (o[e] = !0, s.push(e))
                        })) : t.forEach ? t.forEach((function(e, t) {
                            o[t] || (o[t] = !0, s.push(t))
                        })) : r.iterateHeaders(t, (function(e) {
                            var t = e[0];
                            o[t] || (o[t] = !0, s.push(t))
                        })), s
                    }, t.splitHeaderValue = function(e) {
                        var t = [];
                        return e.split(", ").forEach((function(e) {
                            e.split(",").forEach((function(e) {
                                t.push(e)
                            }))
                        })), t
                    }
                }])
            }, e.exports = r()
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(6),
                s = function(e) {
                    return r.CrossBrowserHttpTransport({
                        withCredentials: !1
                    })(e)
                };
            t.setDefaultTransportFactory = function(e) {
                s = e
            }, t.makeDefaultTransport = function(e) {
                return s(e)
            }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(7),
                s = o(8);
            t.CrossBrowserHttpTransport = function(e) {
                if (r.detectFetchSupport()) {
                    var t = {
                        credentials: e.withCredentials ? "include" : "same-origin"
                    };
                    return r.FetchReadableStreamTransport(t)
                }
                return s.XhrTransport({
                    withCredentials: e.withCredentials
                })
            }
        }, function(e, t, o) {
            "use strict";
            var r = this && this.__assign || function() {
                return (r = Object.assign || function(e) {
                    for (var t, o = 1, r = arguments.length; o < r; o++)
                        for (var s in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = o(0),
                n = o(1),
                i = o(2);
            t.FetchReadableStreamTransport = function(e) {
                return function(t) {
                    return function(e, t) {
                        return e.debug && n.debug("fetchRequest", e), new a(e, t)
                    }(t, e)
                }
            };
            var a = function() {
                function e(e, t) {
                    this.cancelled = !1, this.controller = self.AbortController && new AbortController, this.options = e, this.init = t
                }
                return e.prototype.pump = function(e, t) {
                    var o = this;
                    if (this.reader = e, this.cancelled) return this.options.debug && n.debug("Fetch.pump.cancel at first pump"), void this.reader.cancel();
                    this.reader.read().then((function(e) {
                        if (e.done) return i.default((function() {
                            o.options.onEnd()
                        })), t;
                        i.default((function() {
                            o.options.onChunk(e.value)
                        })), o.pump(o.reader, t)
                    })).catch((function(e) {
                        o.cancelled ? o.options.debug && n.debug("Fetch.catch - request cancelled") : (o.cancelled = !0, o.options.debug && n.debug("Fetch.catch", e.message), i.default((function() {
                            o.options.onEnd(e)
                        })))
                    }))
                }, e.prototype.send = function(e) {
                    var t = this;
                    fetch(this.options.url, r({}, this.init, {
                        headers: this.metadata.toHeaders(),
                        method: "POST",
                        body: e,
                        signal: this.controller && this.controller.signal
                    })).then((function(e) {
                        if (t.options.debug && n.debug("Fetch.response", e), i.default((function() {
                                t.options.onHeaders(new s.Metadata(e.headers), e.status)
                            })), !e.body) return e;
                        t.pump(e.body.getReader(), e)
                    })).catch((function(e) {
                        t.cancelled ? t.options.debug && n.debug("Fetch.catch - request cancelled") : (t.cancelled = !0, t.options.debug && n.debug("Fetch.catch", e.message), i.default((function() {
                            t.options.onEnd(e)
                        })))
                    }))
                }, e.prototype.sendMessage = function(e) {
                    this.send(e)
                }, e.prototype.finishSend = function() {}, e.prototype.start = function(e) {
                    this.metadata = e
                }, e.prototype.cancel = function() {
                    this.cancelled ? this.options.debug && n.debug("Fetch.abort.cancel already cancelled") : (this.cancelled = !0, this.reader ? (this.options.debug && n.debug("Fetch.abort.cancel"), this.reader.cancel()) : this.options.debug && n.debug("Fetch.abort.cancel before reader"), this.controller && this.controller.abort())
                }, e
            }();
            t.detectFetchSupport = function() {
                return "undefined" != typeof Response && Response.prototype.hasOwnProperty("body") && "function" == typeof Headers
            }
        }, function(e, t, o) {
            "use strict";
            var r, s = this && this.__extends || (r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            });
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = o(0),
                i = o(1),
                a = o(2),
                g = o(12);
            t.XhrTransport = function(e) {
                return function(t) {
                    if (g.detectMozXHRSupport()) return new c(t, e);
                    if (g.detectXHROverrideMimeTypeSupport()) return new l(t, e);
                    throw new Error("This environment's XHR implementation cannot support binary transfer.")
                }
            };
            var l = function() {
                function e(e, t) {
                    this.options = e, this.init = t
                }
                return e.prototype.onProgressEvent = function() {
                    var e = this;
                    this.options.debug && i.debug("XHR.onProgressEvent.length: ", this.xhr.response.length);
                    var t = this.xhr.response.substr(this.index);
                    this.index = this.xhr.response.length;
                    var o = p(t);
                    a.default((function() {
                        e.options.onChunk(o)
                    }))
                }, e.prototype.onLoadEvent = function() {
                    var e = this;
                    this.options.debug && i.debug("XHR.onLoadEvent"), a.default((function() {
                        e.options.onEnd()
                    }))
                }, e.prototype.onStateChange = function() {
                    var e = this;
                    this.options.debug && i.debug("XHR.onStateChange", this.xhr.readyState), this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED && a.default((function() {
                        e.options.onHeaders(new n.Metadata(e.xhr.getAllResponseHeaders()), e.xhr.status)
                    }))
                }, e.prototype.sendMessage = function(e) {
                    this.xhr.send(e)
                }, e.prototype.finishSend = function() {}, e.prototype.start = function(e) {
                    var t = this;
                    this.metadata = e;
                    var o = new XMLHttpRequest;
                    this.xhr = o, o.open("POST", this.options.url), this.configureXhr(), this.metadata.forEach((function(e, t) {
                        o.setRequestHeader(e, t.join(", "))
                    })), o.withCredentials = Boolean(this.init.withCredentials), o.addEventListener("readystatechange", this.onStateChange.bind(this)), o.addEventListener("progress", this.onProgressEvent.bind(this)), o.addEventListener("loadend", this.onLoadEvent.bind(this)), o.addEventListener("error", (function(e) {
                        t.options.debug && i.debug("XHR.error", e), a.default((function() {
                            t.options.onEnd(e.error)
                        }))
                    }))
                }, e.prototype.configureXhr = function() {
                    this.xhr.responseType = "text", this.xhr.overrideMimeType("text/plain; charset=x-user-defined")
                }, e.prototype.cancel = function() {
                    this.options.debug && i.debug("XHR.abort"), this.xhr.abort()
                }, e
            }();
            t.XHR = l;
            var c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s(t, e), t.prototype.configureXhr = function() {
                    this.options.debug && i.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"), this.xhr.responseType = "moz-chunked-arraybuffer"
                }, t.prototype.onProgressEvent = function() {
                    var e = this,
                        t = this.xhr.response;
                    this.options.debug && i.debug("MozXHR.onProgressEvent: ", new Uint8Array(t)), a.default((function() {
                        e.options.onChunk(new Uint8Array(t))
                    }))
                }, t
            }(l);

            function u(e, t) {
                var o = e.charCodeAt(t);
                if (o >= 55296 && o <= 56319) {
                    var r = e.charCodeAt(t + 1);
                    r >= 56320 && r <= 57343 && (o = 65536 + (o - 55296 << 10) + (r - 56320))
                }
                return o
            }

            function p(e) {
                for (var t = new Uint8Array(e.length), o = 0, r = 0; r < e.length; r++) {
                    var s = String.prototype.codePointAt ? e.codePointAt(r) : u(e, r);
                    t[o++] = 255 & s
                }
                return t
            }
            t.MozChunkedArrayBufferXHR = c, t.stringToArrayBuffer = p
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, s = o(0);

            function n(e) {
                return function(e) {
                    return 9 === e || 10 === e || 13 === e
                }(e) || e >= 32 && e <= 126
            }

            function i(e) {
                for (var t = 0; t !== e.length; ++t)
                    if (!n(e[t])) throw new Error("Metadata is not valid (printable) ASCII");
                return String.fromCharCode.apply(String, Array.prototype.slice.call(e))
            }

            function a(e) {
                return 128 == (128 & e.getUint8(0))
            }

            function g(e) {
                return e.getUint32(1, !1)
            }

            function l(e, t, o) {
                return e.byteLength - t >= o
            }

            function c(e, t, o) {
                if (e.slice) return e.slice(t, o);
                var r = e.length;
                void 0 !== o && (r = o);
                for (var s = new Uint8Array(r - t), n = 0, i = t; i < r; i++) s[n++] = e[i];
                return s
            }
            t.decodeASCII = i, t.encodeASCII = function(e) {
                    for (var t = new Uint8Array(e.length), o = 0; o !== e.length; ++o) {
                        var r = e.charCodeAt(o);
                        if (!n(r)) throw new Error("Metadata contains invalid ASCII");
                        t[o] = r
                    }
                    return t
                },
                function(e) {
                    e[e.MESSAGE = 1] = "MESSAGE", e[e.TRAILERS = 2] = "TRAILERS"
                }(r = t.ChunkType || (t.ChunkType = {}));
            var u = function() {
                function e() {
                    this.buffer = null, this.position = 0
                }
                return e.prototype.parse = function(e, t) {
                    if (0 === e.length && t) return [];
                    var o, n = [];
                    if (null == this.buffer) this.buffer = e, this.position = 0;
                    else if (this.position === this.buffer.byteLength) this.buffer = e, this.position = 0;
                    else {
                        var u = this.buffer.byteLength - this.position,
                            p = new Uint8Array(u + e.byteLength),
                            d = c(this.buffer, this.position);
                        p.set(d, 0);
                        var f = new Uint8Array(e);
                        p.set(f, u), this.buffer = p, this.position = 0
                    }
                    for (;;) {
                        if (!l(this.buffer, this.position, 5)) return n;
                        var h = c(this.buffer, this.position, this.position + 5),
                            y = new DataView(h.buffer, h.byteOffset, h.byteLength),
                            b = g(y);
                        if (!l(this.buffer, this.position, 5 + b)) return n;
                        var m = c(this.buffer, this.position + 5, this.position + 5 + b);
                        if (this.position += 5 + b, a(y)) return n.push({
                            chunkType: r.TRAILERS,
                            trailers: (o = m, new s.Metadata(i(o)))
                        }), n;
                        n.push({
                            chunkType: r.MESSAGE,
                            data: m
                        })
                    }
                }, e
            }();
            t.ChunkParser = u
        }, function(e, t, o) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e) {
                    e[e.OK = 0] = "OK", e[e.Canceled = 1] = "Canceled", e[e.Unknown = 2] = "Unknown", e[e.InvalidArgument = 3] = "InvalidArgument", e[e.DeadlineExceeded = 4] = "DeadlineExceeded", e[e.NotFound = 5] = "NotFound", e[e.AlreadyExists = 6] = "AlreadyExists", e[e.PermissionDenied = 7] = "PermissionDenied", e[e.ResourceExhausted = 8] = "ResourceExhausted", e[e.FailedPrecondition = 9] = "FailedPrecondition", e[e.Aborted = 10] = "Aborted", e[e.OutOfRange = 11] = "OutOfRange", e[e.Unimplemented = 12] = "Unimplemented", e[e.Internal = 13] = "Internal", e[e.Unavailable = 14] = "Unavailable", e[e.DataLoss = 15] = "DataLoss", e[e.Unauthenticated = 16] = "Unauthenticated"
                }(r = t.Code || (t.Code = {})), t.httpStatusToCode = function(e) {
                    switch (e) {
                        case 0:
                            return r.Internal;
                        case 200:
                            return r.OK;
                        case 400:
                            return r.InvalidArgument;
                        case 401:
                            return r.Unauthenticated;
                        case 403:
                            return r.PermissionDenied;
                        case 404:
                            return r.NotFound;
                        case 409:
                            return r.Aborted;
                        case 412:
                            return r.FailedPrecondition;
                        case 429:
                            return r.ResourceExhausted;
                        case 499:
                            return r.Canceled;
                        case 500:
                            return r.Unknown;
                        case 501:
                            return r.Unimplemented;
                        case 503:
                            return r.Unavailable;
                        case 504:
                            return r.DeadlineExceeded;
                        default:
                            return r.Unknown
                    }
                }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(4),
                s = o(5),
                n = o(7),
                i = o(13),
                a = o(8),
                g = o(6),
                l = o(10),
                c = o(14),
                u = o(16),
                p = o(3);
            ! function(e) {
                e.setDefaultTransport = s.setDefaultTransportFactory, e.CrossBrowserHttpTransport = g.CrossBrowserHttpTransport, e.FetchReadableStreamTransport = n.FetchReadableStreamTransport, e.XhrTransport = a.XhrTransport, e.WebsocketTransport = i.WebsocketTransport, e.Code = l.Code, e.Metadata = r.BrowserHeaders, e.client = function(e, t) {
                    return p.client(e, t)
                }, e.invoke = c.invoke, e.unary = u.unary
            }(t.grpc || (t.grpc = {}))
        }, function(e, t, o) {
            "use strict";
            var r;

            function s(e) {
                var t = function() {
                    if (void 0 !== r) return r;
                    if (XMLHttpRequest) {
                        r = new XMLHttpRequest;
                        try {
                            r.open("GET", "https://localhost")
                        } catch (e) {}
                    }
                    return r
                }();
                if (!t) return !1;
                try {
                    return t.responseType = e, t.responseType === e
                } catch (e) {}
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.xhrSupportsResponseType = s, t.detectMozXHRSupport = function() {
                return "undefined" != typeof XMLHttpRequest && s("moz-chunked-arraybuffer")
            }, t.detectXHROverrideMimeTypeSupport = function() {
                return "undefined" != typeof XMLHttpRequest && XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType")
            }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, s = o(1),
                n = o(2),
                i = o(9);
            ! function(e) {
                e[e.FINISH_SEND = 1] = "FINISH_SEND"
            }(r || (r = {}));
            var a = new Uint8Array([1]);
            t.WebsocketTransport = function() {
                return function(e) {
                    return function(e) {
                        e.debug && s.debug("websocketRequest", e);
                        var t, o = function(e) {
                                if ("https://" === e.substr(0, 8)) return "wss://" + e.substr(8);
                                if ("http://" === e.substr(0, 7)) return "ws://" + e.substr(7);
                                throw new Error("Websocket transport constructed with non-https:// or http:// host.")
                            }(e.url),
                            g = [];

                        function l(e) {
                            if (e === r.FINISH_SEND) t.send(a);
                            else {
                                var o = e,
                                    s = new Int8Array(o.byteLength + 1);
                                s.set(new Uint8Array([0])), s.set(o, 1), t.send(s)
                            }
                        }
                        return {
                            sendMessage: function(e) {
                                t && t.readyState !== t.CONNECTING ? l(e) : g.push(e)
                            },
                            finishSend: function() {
                                t && t.readyState !== t.CONNECTING ? l(r.FINISH_SEND) : g.push(r.FINISH_SEND)
                            },
                            start: function(r) {
                                (t = new WebSocket(o, ["grpc-websockets"])).binaryType = "arraybuffer", t.onopen = function() {
                                    var o;
                                    e.debug && s.debug("websocketRequest.onopen"), t.send((o = "", r.forEach((function(e, t) {
                                        o += e + ": " + t.join(", ") + "\r\n"
                                    })), i.encodeASCII(o))), g.forEach((function(e) {
                                        l(e)
                                    }))
                                }, t.onclose = function(t) {
                                    e.debug && s.debug("websocketRequest.onclose", t), n.default((function() {
                                        e.onEnd()
                                    }))
                                }, t.onerror = function(t) {
                                    e.debug && s.debug("websocketRequest.onerror", t)
                                }, t.onmessage = function(t) {
                                    n.default((function() {
                                        e.onChunk(new Uint8Array(t.data))
                                    }))
                                }
                            },
                            cancel: function() {
                                e.debug && s.debug("websocket.abort"), n.default((function() {
                                    t.close()
                                }))
                            }
                        }
                    }(e)
                }
            }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(3);
            t.invoke = function(e, t) {
                if (e.requestStream) throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");
                var o = r.client(e, {
                    host: t.host,
                    transport: t.transport,
                    debug: t.debug
                });
                return t.onHeaders && o.onHeaders(t.onHeaders), t.onMessage && o.onMessage(t.onMessage), t.onEnd && o.onEnd(t.onEnd), o.start(t.metadata), o.send(t.request), o.finishSend(), {
                    close: function() {
                        o.close()
                    }
                }
            }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.frameRequest = function(e) {
                var t = e.serializeBinary(),
                    o = new ArrayBuffer(t.byteLength + 5);
                return new DataView(o, 1, 4).setUint32(0, t.length, !1), new Uint8Array(o, 5).set(t), new Uint8Array(o)
            }
        }, function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(0),
                s = o(3);
            t.unary = function(e, t) {
                if (e.responseStream) throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");
                if (e.requestStream) throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");
                var o = null,
                    n = null,
                    i = s.client(e, {
                        host: t.host,
                        transport: t.transport,
                        debug: t.debug
                    });
                return i.onHeaders((function(e) {
                    o = e
                })), i.onMessage((function(e) {
                    n = e
                })), i.onEnd((function(e, s, i) {
                    t.onEnd({
                        status: e,
                        statusMessage: s,
                        headers: o || new r.Metadata,
                        message: n,
                        trailers: i
                    })
                })), i.start(t.metadata), i.send(t.request), i.finishSend(), {
                    close: function() {
                        i.close()
                    }
                }
            }
        }]))
    }, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t, o) {
        var r = o(10),
            s = o(12).grpc,
            n = function() {
                function e() {}
                return e.serviceName = "flow.execution.ExecutionAPI", e
            }();

        function i(e, t) {
            this.serviceHost = e, this.options = t || {}
        }
        n.Ping = {
            methodName: "Ping",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.PingRequest,
            responseType: r.PingResponse
        }, n.GetAccountAtBlockID = {
            methodName: "GetAccountAtBlockID",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetAccountAtBlockIDRequest,
            responseType: r.GetAccountAtBlockIDResponse
        }, n.ExecuteScriptAtBlockID = {
            methodName: "ExecuteScriptAtBlockID",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.ExecuteScriptAtBlockIDRequest,
            responseType: r.ExecuteScriptAtBlockIDResponse
        }, n.GetEventsForBlockIDs = {
            methodName: "GetEventsForBlockIDs",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetEventsForBlockIDsRequest,
            responseType: r.GetEventsForBlockIDsResponse
        }, n.GetTransactionResult = {
            methodName: "GetTransactionResult",
            service: n,
            requestStream: !1,
            responseStream: !1,
            requestType: r.GetTransactionResultRequest,
            responseType: r.GetTransactionResultResponse
        }, t.ExecutionAPI = n, i.prototype.ping = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.Ping, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getAccountAtBlockID = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetAccountAtBlockID, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.executeScriptAtBlockID = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.ExecuteScriptAtBlockID, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getEventsForBlockIDs = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetEventsForBlockIDs, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, i.prototype.getTransactionResult = function(e, t, o) {
            2 === arguments.length && (o = arguments[1]);
            var r = s.unary(n.GetTransactionResult, {
                request: e,
                host: this.serviceHost,
                metadata: t,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function(e) {
                    if (o)
                        if (e.status !== s.Code.OK) {
                            var t = new Error(e.statusMessage);
                            t.code = e.status, t.metadata = e.trailers, o(t, null)
                        } else o(null, e.message)
                }
            });
            return {
                cancel: function() {
                    o = null, r.close()
                }
            }
        }, t.ExecutionAPIClient = i
    }, function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o(11);
        for (var s in r) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return r[e]
            }))
        }(s);
        var n = o(4);
        for (var s in n) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return n[e]
            }))
        }(s);
        var i = o(13);
        for (var s in i) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return i[e]
            }))
        }(s);
        var a = o(1);
        for (var s in a) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return a[e]
            }))
        }(s);
        var g = o(14);
        for (var s in g) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return g[e]
            }))
        }(s);
        var l = o(5);
        for (var s in l) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return l[e]
            }))
        }(s);
        var c = o(15);
        for (var s in c) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return c[e]
            }))
        }(s);
        var u = o(7);
        for (var s in u) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return u[e]
            }))
        }(s);
        var p = o(16);
        for (var s in p) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return p[e]
            }))
        }(s);
        var d = o(8);
        for (var s in d) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return d[e]
            }))
        }(s);
        var f = o(17);
        for (var s in f) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return f[e]
            }))
        }(s);
        var h = o(2);
        for (var s in h) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return h[e]
            }))
        }(s);
        var y = o(18);
        for (var s in y) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return y[e]
            }))
        }(s);
        var b = o(3);
        for (var s in b) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return b[e]
            }))
        }(s);
        var m = o(19);
        for (var s in m) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return m[e]
            }))
        }(s);
        var _ = o(9);
        for (var s in _) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return _[e]
            }))
        }(s);
        var E = o(20);
        for (var s in E) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return E[e]
            }))
        }(s);
        var S = o(10);
        for (var s in S) "default" !== s && function(e) {
            o.d(t, e, (function() {
                return S[e]
            }))
        }(s)
    }])
}));

    window.protobuf={};
    window.protobuf = proto;
    window.protobuf.AccessAPI = AccessAPI;
    window.protobuf.Transaction = Transaction;


!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).buffer=t()}}(function(){return function(){return function t(r,e,n){function i(f,u){if(!e[f]){if(!r[f]){var s="function"==typeof require&&require;if(!u&&s)return s(f,!0);if(o)return o(f,!0);var h=new Error("Cannot find module '"+f+"'");throw h.code="MODULE_NOT_FOUND",h}var a=e[f]={exports:{}};r[f][0].call(a.exports,function(t){return i(r[f][1][t]||t)},a,a.exports,t,r,e,n)}return e[f].exports}for(var o="function"==typeof require&&require,f=0;f<n.length;f++)i(n[f]);return i}}()({1:[function(t,r,e){"use strict";e.byteLength=function(t){var r=h(t),e=r[0],n=r[1];return 3*(e+n)/4-n},e.toByteArray=function(t){var r,e,n=h(t),f=n[0],u=n[1],s=new o(function(t,r,e){return 3*(r+e)/4-e}(0,f,u)),a=0,c=u>0?f-4:f;for(e=0;e<c;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],s[a++]=r>>16&255,s[a++]=r>>8&255,s[a++]=255&r;2===u&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,s[a++]=255&r);1===u&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,s[a++]=r>>8&255,s[a++]=255&r);return s},e.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],f=0,u=e-i;f<u;f+=16383)o.push(a(t,f,f+16383>u?u:f+16383));1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=f.length;u<s;++u)n[u]=f[u],i[f.charCodeAt(u)]=u;function h(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function a(t,r,e){for(var i,o,f=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return f.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},{}],2:[function(t,r,e){(function(r){"use strict";var n=t("base64-js"),i=t("ieee754");e.Buffer=r,e.SlowBuffer=function(t){+t!=t&&(t=0);return r.alloc(+t)},e.INSPECT_MAX_BYTES=50;var o=2147483647;function f(t){if(t>o)throw new RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return e.__proto__=r.prototype,e}function r(t,r,e){if("number"==typeof t){if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return h(t)}return u(t,r,e)}function u(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!r.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var n=0|p(t,e),i=f(n),o=i.write(t,e);o!==n&&(i=i.slice(0,o));return i}(t,e);if(ArrayBuffer.isView(t))return a(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(j(t,ArrayBuffer)||t&&j(t.buffer,ArrayBuffer))return function(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');var i;i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n);return i.__proto__=r.prototype,i}(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return r.from(i,e,n);var o=function(t){if(r.isBuffer(t)){var e=0|c(t.length),n=f(e);return 0===n.length?n:(t.copy(n,0,0,e),n)}if(void 0!==t.length)return"number"!=typeof t.length||F(t.length)?f(0):a(t);if("Buffer"===t.type&&Array.isArray(t.data))return a(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return r.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function s(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return s(t),f(t<0?0:0|c(t))}function a(t){for(var r=t.length<0?0:0|c(t.length),e=f(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function c(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function p(t,e){if(r.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||j(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return P(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return k(t).length;default:if(o)return i?-1:P(t).length;e=(""+e).toLowerCase(),o=!0}}function l(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function y(t,e,n,i,o){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),F(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=r.from(e,i)),r.isBuffer(e))return 0===e.length?-1:g(t,e,n,i,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,i,o);throw new TypeError("val must be string, number or Buffer")}function g(t,r,e,n,i){var o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function h(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var a=-1;for(o=e;o<u;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*f}else-1!==a&&(o-=o-a),a=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){for(var c=!0,p=0;p<s;p++)if(h(t,o+p)!==h(r,p)){c=!1;break}if(c)return o}return-1}function w(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(F(u))return f;t[e+f]=u}return f}function d(t,r,e,n){return $(P(r,t.length-e),t,e,n)}function b(t,r,e,n){return $(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function m(t,r,e,n){return b(t,r,e,n)}function E(t,r,e,n){return $(k(r),t,e,n)}function v(t,r,e,n){return $(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function B(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function A(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,h=t[i],a=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=e)switch(c){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&(s=(15&h)<<12|(63&o)<<6|63&f)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&(s=(15&h)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(a=s)}null===a?(a=65533,c=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=c}return function(t){var r=t.length;if(r<=I)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=I));return e}(n)}e.kMaxLength=o,r.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}(),r.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&r[Symbol.species]===r&&Object.defineProperty(r,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),r.poolSize=8192,r.from=function(t,r,e){return u(t,r,e)},r.prototype.__proto__=Uint8Array.prototype,r.__proto__=Uint8Array,r.alloc=function(t,r,e){return function(t,r,e){return s(t),t<=0?f(t):void 0!==r?"string"==typeof e?f(t).fill(r,e):f(t).fill(r):f(t)}(t,r,e)},r.allocUnsafe=function(t){return h(t)},r.allocUnsafeSlow=function(t){return h(t)},r.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==r.prototype},r.compare=function(t,e){if(j(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),j(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(t)||!r.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var n=t.length,i=e.length,o=0,f=Math.min(n,i);o<f;++o)if(t[o]!==e[o]){n=t[o],i=e[o];break}return n<i?-1:i<n?1:0},r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return r.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var i=r.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var f=t[n];if(j(f,Uint8Array)&&(f=r.from(f)),!r.isBuffer(f))throw new TypeError('"list" argument must be an Array of Buffers');f.copy(i,o),o+=f.length}return i},r.byteLength=p,r.prototype._isBuffer=!0,r.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)l(this,r,r+1);return this},r.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)l(this,r,r+3),l(this,r+1,r+2);return this},r.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)l(this,r,r+7),l(this,r+1,r+6),l(this,r+2,r+5),l(this,r+3,r+4);return this},r.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?A(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,r,e);case"utf8":case"utf-8":return A(this,r,e);case"ascii":return U(this,r,e);case"latin1":case"binary":return R(this,r,e);case"base64":return B(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(t){if(!r.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===r.compare(this,t)},r.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},r.prototype.compare=function(t,e,n,i,o){if(j(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return-1;if(e>=n)return 1;if(this===t)return 0;for(var f=(o>>>=0)-(i>>>=0),u=(n>>>=0)-(e>>>=0),s=Math.min(f,u),h=this.slice(i,o),a=t.slice(e,n),c=0;c<s;++c)if(h[c]!==a[c]){f=h[c],u=a[c];break}return f<u?-1:u<f?1:0},r.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},r.prototype.indexOf=function(t,r,e){return y(this,t,r,e,!0)},r.prototype.lastIndexOf=function(t,r,e){return y(this,t,r,e,!1)},r.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return w(this,t,r,e);case"utf8":case"utf-8":return d(this,t,r,e);case"ascii":return b(this,t,r,e);case"latin1":case"binary":return m(this,t,r,e);case"base64":return E(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return v(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var I=4096;function U(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function R(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function T(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=N(t[o]);return i}function _(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function L(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function S(t,e,n,i,o,f){if(!r.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<f)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function C(t,r,e,n,o){return r=+r,e>>>=0,o||O(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function x(t,r,e,n,o){return r=+r,e>>>=0,o||O(t,0,e,8),i.write(t,r,e,n,52,8),e+8}r.prototype.slice=function(t,e){var n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var i=this.subarray(t,e);return i.__proto__=r.prototype,i},r.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||L(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},r.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||L(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},r.prototype.readUInt8=function(t,r){return t>>>=0,r||L(t,1,this.length),this[t]},r.prototype.readUInt16LE=function(t,r){return t>>>=0,r||L(t,2,this.length),this[t]|this[t+1]<<8},r.prototype.readUInt16BE=function(t,r){return t>>>=0,r||L(t,2,this.length),this[t]<<8|this[t+1]},r.prototype.readUInt32LE=function(t,r){return t>>>=0,r||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},r.prototype.readUInt32BE=function(t,r){return t>>>=0,r||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},r.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||L(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},r.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||L(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},r.prototype.readInt8=function(t,r){return t>>>=0,r||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},r.prototype.readInt16LE=function(t,r){t>>>=0,r||L(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt16BE=function(t,r){t>>>=0,r||L(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt32LE=function(t,r){return t>>>=0,r||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},r.prototype.readInt32BE=function(t,r){return t>>>=0,r||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},r.prototype.readFloatLE=function(t,r){return t>>>=0,r||L(t,4,this.length),i.read(this,t,!0,23,4)},r.prototype.readFloatBE=function(t,r){return t>>>=0,r||L(t,4,this.length),i.read(this,t,!1,23,4)},r.prototype.readDoubleLE=function(t,r){return t>>>=0,r||L(t,8,this.length),i.read(this,t,!0,52,8)},r.prototype.readDoubleBE=function(t,r){return t>>>=0,r||L(t,8,this.length),i.read(this,t,!1,52,8)},r.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||S(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},r.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r>>>=0,e>>>=0,n)||S(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},r.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,1,255,0),this[r]=255&t,r+1},r.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},r.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);S(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);S(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},r.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},r.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},r.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||S(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeFloatLE=function(t,r,e){return C(this,t,r,!0,e)},r.prototype.writeFloatBE=function(t,r,e){return C(this,t,r,!1,e)},r.prototype.writeDoubleLE=function(t,r,e){return x(this,t,r,!0,e)},r.prototype.writeDoubleBE=function(t,r,e){return x(this,t,r,!1,e)},r.prototype.copy=function(t,e,n,i){if(!r.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);var o=i-n;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,n,i);else if(this===t&&n<e&&e<i)for(var f=o-1;f>=0;--f)t[f+e]=this[f+n];else Uint8Array.prototype.set.call(t,this.subarray(n,i),e);return o},r.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!r.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){var o=t.charCodeAt(0);("utf8"===i&&o<128||"latin1"===i)&&(t=o)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var f;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(f=e;f<n;++f)this[f]=t;else{var u=r.isBuffer(t)?t:r.from(t,i),s=u.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(f=0;f<n-e;++f)this[f+e]=u[f%s]}return this};var M=/[^+\/0-9A-Za-z-_]/g;function N(t){return t<16?"0"+t.toString(16):t.toString(16)}function P(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function k(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(M,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function $(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function j(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function F(t){return t!=t}}).call(this,t("buffer").Buffer)},{"base64-js":1,buffer:2,ieee754:3}],3:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,h=s>>1,a=-7,c=e?i-1:0,p=e?-1:1,l=t[r+c];for(c+=p,o=l&(1<<-a)-1,l>>=-a,a+=u;a>0;o=256*o+t[r+c],c+=p,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;a>0;f=256*f+t[r+c],c+=p,a-=8);if(0===o)o=1-h;else{if(o===s)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),o-=h}return(l?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,s,h=8*o-i-1,a=(1<<h)-1,c=a>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=a):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),(r+=f+c>=1?p/s:p*Math.pow(2,1-c))*s>=2&&(f++,s/=2),f+c>=a?(u=0,f=a):f+c>=1?(u=(r*s-1)*Math.pow(2,i),f+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[e+l]=255&u,l+=y,u/=256,i-=8);for(f=f<<i|u,h+=i;h>0;t[e+l]=255&f,l+=y,f/=256,h-=8);t[e+l-y]|=128*g}},{}],4:[function(t,r,e){(function(r){"use strict";const n=t("base64-js"),i=t("ieee754"),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=r,e.SlowBuffer=function(t){+t!=t&&(t=0);return r.alloc(+t)},e.INSPECT_MAX_BYTES=50;const f=2147483647;function u(t){if(t>f)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,r.prototype),e}function r(t,r,e){if("number"==typeof t){if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return a(t)}return s(t,r,e)}function s(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!r.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|y(t,e);let i=u(n);const o=i.write(t,e);o!==n&&(i=i.slice(0,o));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(W(t,Uint8Array)){const r=new Uint8Array(t);return p(r.buffer,r.byteOffset,r.byteLength)}return c(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(W(t,ArrayBuffer)||t&&W(t.buffer,ArrayBuffer))return p(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(W(t,SharedArrayBuffer)||t&&W(t.buffer,SharedArrayBuffer)))return p(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return r.from(i,e,n);const o=function(t){if(r.isBuffer(t)){const r=0|l(t.length),e=u(r);return 0===e.length?e:(t.copy(e,0,0,r),e)}if(void 0!==t.length)return"number"!=typeof t.length||X(t.length)?u(0):c(t);if("Buffer"===t.type&&Array.isArray(t.data))return c(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return r.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function a(t){return h(t),u(t<0?0:0|l(t))}function c(t){const r=t.length<0?0:0|l(t.length),e=u(r);for(let n=0;n<r;n+=1)e[n]=255&t[n];return e}function p(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,r.prototype),i}function l(t){if(t>=f)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+f.toString(16)+" bytes");return 0|t}function y(t,e){if(r.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||W(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return G(t).length;default:if(o)return i?-1:q(t).length;e=(""+e).toLowerCase(),o=!0}}function g(t,r,e){const n=t[r];t[r]=t[e],t[e]=n}function w(t,e,n,i,o){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),X(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=r.from(e,i)),r.isBuffer(e))return 0===e.length?-1:d(t,e,n,i,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):d(t,[e],n,i,o);throw new TypeError("val must be string, number or Buffer")}function d(t,r,e,n,i){let o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function h(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){let n=-1;for(o=e;o<u;o++)if(h(t,o)===h(r,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===s)return n*f}else-1!==n&&(o-=o-n),n=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){let e=!0;for(let n=0;n<s;n++)if(h(t,o+n)!==h(r,n)){e=!1;break}if(e)return o}return-1}function b(t,r,e,n){e=Number(e)||0;const i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;const o=r.length;let f;for(n>o/2&&(n=o/2),f=0;f<n;++f){const n=parseInt(r.substr(2*f,2),16);if(X(n))return f;t[e+f]=n}return f}function m(t,r,e,n){return V(q(r,t.length-e),t,e,n)}function E(t,r,e,n){return V(function(t){const r=[];for(let e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function v(t,r,e,n){return V(G(r),t,e,n)}function B(t,r,e,n){return V(function(t,r){let e,n,i;const o=[];for(let f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function A(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function I(t,r,e){e=Math.min(t.length,e);const n=[];let i=r;for(;i<e;){const r=t[i];let o=null,f=r>239?4:r>223?3:r>191?2:1;if(i+f<=e){let e,n,u,s;switch(f){case 1:r<128&&(o=r);break;case 2:128==(192&(e=t[i+1]))&&(s=(31&r)<<6|63&e)>127&&(o=s);break;case 3:e=t[i+1],n=t[i+2],128==(192&e)&&128==(192&n)&&(s=(15&r)<<12|(63&e)<<6|63&n)>2047&&(s<55296||s>57343)&&(o=s);break;case 4:e=t[i+1],n=t[i+2],u=t[i+3],128==(192&e)&&128==(192&n)&&128==(192&u)&&(s=(15&r)<<18|(63&e)<<12|(63&n)<<6|63&u)>65535&&s<1114112&&(o=s)}}null===o?(o=65533,f=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=f}return function(t){const r=t.length;if(r<=U)return String.fromCharCode.apply(String,t);let e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=U));return e}(n)}e.kMaxLength=f,r.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return!1}}(),r.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(r.prototype,"parent",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.buffer}}),Object.defineProperty(r.prototype,"offset",{enumerable:!0,get:function(){if(r.isBuffer(this))return this.byteOffset}}),r.poolSize=8192,r.from=function(t,r,e){return s(t,r,e)},Object.setPrototypeOf(r.prototype,Uint8Array.prototype),Object.setPrototypeOf(r,Uint8Array),r.alloc=function(t,r,e){return function(t,r,e){return h(t),t<=0?u(t):void 0!==r?"string"==typeof e?u(t).fill(r,e):u(t).fill(r):u(t)}(t,r,e)},r.allocUnsafe=function(t){return a(t)},r.allocUnsafeSlow=function(t){return a(t)},r.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==r.prototype},r.compare=function(t,e){if(W(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),W(e,Uint8Array)&&(e=r.from(e,e.offset,e.byteLength)),!r.isBuffer(t)||!r.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},r.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return r.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=r.allocUnsafe(e);let o=0;for(n=0;n<t.length;++n){let e=t[n];if(W(e,Uint8Array))o+e.length>i.length?(r.isBuffer(e)||(e=r.from(e)),e.copy(i,o)):Uint8Array.prototype.set.call(i,e,o);else{if(!r.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,o)}o+=e.length}return i},r.byteLength=y,r.prototype._isBuffer=!0,r.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let r=0;r<t;r+=2)g(this,r,r+1);return this},r.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<t;r+=4)g(this,r,r+3),g(this,r+1,r+2);return this},r.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<t;r+=8)g(this,r,r+7),g(this,r+1,r+6),g(this,r+2,r+5),g(this,r+3,r+4);return this},r.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?I(this,0,t):function(t,r,e){let n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return _(this,r,e);case"utf8":case"utf-8":return I(this,r,e);case"ascii":return R(this,r,e);case"latin1":case"binary":return T(this,r,e);case"base64":return A(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},r.prototype.toLocaleString=r.prototype.toString,r.prototype.equals=function(t){if(!r.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===r.compare(this,t)},r.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},o&&(r.prototype[o]=r.prototype.inspect),r.prototype.compare=function(t,e,n,i,o){if(W(t,Uint8Array)&&(t=r.from(t,t.offset,t.byteLength)),!r.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||n>t.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=n)return 0;if(i>=o)return-1;if(e>=n)return 1;if(this===t)return 0;let f=(o>>>=0)-(i>>>=0),u=(n>>>=0)-(e>>>=0);const s=Math.min(f,u),h=this.slice(i,o),a=t.slice(e,n);for(let t=0;t<s;++t)if(h[t]!==a[t]){f=h[t],u=a[t];break}return f<u?-1:u<f?1:0},r.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},r.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},r.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},r.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}const i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":case"latin1":case"binary":return E(this,t,r,e);case"base64":return v(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const U=4096;function R(t,r,e){let n="";e=Math.min(t.length,e);for(let i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function T(t,r,e){let n="";e=Math.min(t.length,e);for(let i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function _(t,r,e){const n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);let i="";for(let n=r;n<e;++n)i+=J[t[n]];return i}function L(t,r,e){const n=t.slice(r,e);let i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}function S(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function O(t,e,n,i,o,f){if(!r.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<f)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function C(t,r,e,n,i){F(r,n,i,t,e,7);let o=Number(r&BigInt(4294967295));t[e++]=o,o>>=8,t[e++]=o,o>>=8,t[e++]=o,o>>=8,t[e++]=o;let f=Number(r>>BigInt(32)&BigInt(4294967295));return t[e++]=f,f>>=8,t[e++]=f,f>>=8,t[e++]=f,f>>=8,t[e++]=f,e}function x(t,r,e,n,i){F(r,n,i,t,e,7);let o=Number(r&BigInt(4294967295));t[e+7]=o,o>>=8,t[e+6]=o,o>>=8,t[e+5]=o,o>>=8,t[e+4]=o;let f=Number(r>>BigInt(32)&BigInt(4294967295));return t[e+3]=f,f>>=8,t[e+2]=f,f>>=8,t[e+1]=f,f>>=8,t[e]=f,e+8}function M(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,o){return r=+r,e>>>=0,o||M(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function P(t,r,e,n,o){return r=+r,e>>>=0,o||M(t,0,e,8),i.write(t,r,e,n,52,8),e+8}r.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,r.prototype),i},r.prototype.readUintLE=r.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||S(t,r,this.length);let n=this[t],i=1,o=0;for(;++o<r&&(i*=256);)n+=this[t+o]*i;return n},r.prototype.readUintBE=r.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||S(t,r,this.length);let n=this[t+--r],i=1;for(;r>0&&(i*=256);)n+=this[t+--r]*i;return n},r.prototype.readUint8=r.prototype.readUInt8=function(t,r){return t>>>=0,r||S(t,1,this.length),this[t]},r.prototype.readUint16LE=r.prototype.readUInt16LE=function(t,r){return t>>>=0,r||S(t,2,this.length),this[t]|this[t+1]<<8},r.prototype.readUint16BE=r.prototype.readUInt16BE=function(t,r){return t>>>=0,r||S(t,2,this.length),this[t]<<8|this[t+1]},r.prototype.readUint32LE=r.prototype.readUInt32LE=function(t,r){return t>>>=0,r||S(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},r.prototype.readUint32BE=r.prototype.readUInt32BE=function(t,r){return t>>>=0,r||S(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},r.prototype.readBigUInt64LE=Z(function(t){z(t>>>=0,"offset");const r=this[t],e=this[t+7];void 0!==r&&void 0!==e||D(t,this.length-8);const n=r+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+e*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))}),r.prototype.readBigUInt64BE=Z(function(t){z(t>>>=0,"offset");const r=this[t],e=this[t+7];void 0!==r&&void 0!==e||D(t,this.length-8);const n=r*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+e;return(BigInt(n)<<BigInt(32))+BigInt(i)}),r.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||S(t,r,this.length);let n=this[t],i=1,o=0;for(;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},r.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||S(t,r,this.length);let n=r,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},r.prototype.readInt8=function(t,r){return t>>>=0,r||S(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},r.prototype.readInt16LE=function(t,r){t>>>=0,r||S(t,2,this.length);const e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt16BE=function(t,r){t>>>=0,r||S(t,2,this.length);const e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},r.prototype.readInt32LE=function(t,r){return t>>>=0,r||S(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},r.prototype.readInt32BE=function(t,r){return t>>>=0,r||S(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},r.prototype.readBigInt64LE=Z(function(t){z(t>>>=0,"offset");const r=this[t],e=this[t+7];void 0!==r&&void 0!==e||D(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(e<<24);return(BigInt(n)<<BigInt(32))+BigInt(r+256*this[++t]+65536*this[++t]+this[++t]*2**24)}),r.prototype.readBigInt64BE=Z(function(t){z(t>>>=0,"offset");const r=this[t],e=this[t+7];void 0!==r&&void 0!==e||D(t,this.length-8);const n=(r<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+e)}),r.prototype.readFloatLE=function(t,r){return t>>>=0,r||S(t,4,this.length),i.read(this,t,!0,23,4)},r.prototype.readFloatBE=function(t,r){return t>>>=0,r||S(t,4,this.length),i.read(this,t,!1,23,4)},r.prototype.readDoubleLE=function(t,r){return t>>>=0,r||S(t,8,this.length),i.read(this,t,!0,52,8)},r.prototype.readDoubleBE=function(t,r){return t>>>=0,r||S(t,8,this.length),i.read(this,t,!1,52,8)},r.prototype.writeUintLE=r.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r>>>=0,e>>>=0,!n){O(this,t,r,e,Math.pow(2,8*e)-1,0)}let i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},r.prototype.writeUintBE=r.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r>>>=0,e>>>=0,!n){O(this,t,r,e,Math.pow(2,8*e)-1,0)}let i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},r.prototype.writeUint8=r.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,1,255,0),this[r]=255&t,r+1},r.prototype.writeUint16LE=r.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeUint16BE=r.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeUint32LE=r.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},r.prototype.writeUint32BE=r.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeBigUInt64LE=Z(function(t,r=0){return C(this,t,r,BigInt(0),BigInt("0xffffffffffffffff"))}),r.prototype.writeBigUInt64BE=Z(function(t,r=0){return x(this,t,r,BigInt(0),BigInt("0xffffffffffffffff"))}),r.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){const n=Math.pow(2,8*e-1);O(this,t,r,e,n-1,-n)}let i=0,o=1,f=0;for(this[r]=255&t;++i<e&&(o*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/o>>0)-f&255;return r+e},r.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){const n=Math.pow(2,8*e-1);O(this,t,r,e,n-1,-n)}let i=e-1,o=1,f=0;for(this[r+i]=255&t;--i>=0&&(o*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/o>>0)-f&255;return r+e},r.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},r.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},r.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},r.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},r.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||O(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},r.prototype.writeBigInt64LE=Z(function(t,r=0){return C(this,t,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),r.prototype.writeBigInt64BE=Z(function(t,r=0){return x(this,t,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),r.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},r.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},r.prototype.writeDoubleLE=function(t,r,e){return P(this,t,r,!0,e)},r.prototype.writeDoubleBE=function(t,r,e){return P(this,t,r,!1,e)},r.prototype.copy=function(t,e,n,i){if(!r.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const o=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),o},r.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!r.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const r=t.charCodeAt(0);("utf8"===i&&r<128||"latin1"===i)&&(t=r)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{const f=r.isBuffer(t)?t:r.from(t,i),u=f.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-e;++o)this[o+e]=f[o%u]}return this};const k={};function $(t,r,e){k[t]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:r.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function j(t){let r="",e=t.length;const n="-"===t[0]?1:0;for(;e>=n+4;e-=3)r=`_${t.slice(e-3,e)}${r}`;return`${t.slice(0,e)}${r}`}function F(t,r,e,n,i,o){if(t>e||t<r){const n="bigint"==typeof r?"n":"";let i;throw i=o>3?0===r||r===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** `+`${8*(o+1)-1}${n}`:`>= ${r}${n} and <= ${e}${n}`,new k.ERR_OUT_OF_RANGE("value",i,t)}!function(t,r,e){z(r,"offset"),void 0!==t[r]&&void 0!==t[r+e]||D(r,t.length-(e+1))}(n,i,o)}function z(t,r){if("number"!=typeof t)throw new k.ERR_INVALID_ARG_TYPE(r,"number",t)}function D(t,r,e){if(Math.floor(t)!==t)throw z(t,e),new k.ERR_OUT_OF_RANGE(e||"offset","an integer",t);if(r<0)throw new k.ERR_BUFFER_OUT_OF_BOUNDS;throw new k.ERR_OUT_OF_RANGE(e||"offset",`>= ${e?1:0} and <= ${r}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),$("ERR_INVALID_ARG_TYPE",function(t,r){return`The "${t}" argument must be of type number. Received type ${typeof r}`},TypeError),$("ERR_OUT_OF_RANGE",function(t,r,e){let n=`The value of "${t}" is out of range.`,i=e;return Number.isInteger(e)&&Math.abs(e)>2**32?i=j(String(e)):"bigint"==typeof e&&(i=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(i=j(i)),i+="n"),n+=` It must be ${r}. Received ${i}`},RangeError);const Y=/[^+\/0-9A-Za-z-_]/g;function q(t,r){let e;r=r||1/0;const n=t.length;let i=null;const o=[];for(let f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function G(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(Y,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function V(t,r,e,n){let i;for(i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function W(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function X(t){return t!=t}const J=function(){const t=new Array(256);for(let r=0;r<16;++r){const e=16*r;for(let n=0;n<16;++n)t[e+n]="0123456789abcdef"[r]+"0123456789abcdef"[n]}return t}();function Z(t){return"undefined"==typeof BigInt?H:t}function H(){throw new Error("BigInt not supported")}}).call(this,t("buffer").Buffer)},{"base64-js":5,buffer:2,ieee754:6}],5:[function(t,r,e){"use strict";e.byteLength=function(t){var r=h(t),e=r[0],n=r[1];return 3*(e+n)/4-n},e.toByteArray=function(t){var r,e,n=h(t),f=n[0],u=n[1],s=new o(function(t,r,e){return 3*(r+e)/4-e}(0,f,u)),a=0,c=u>0?f-4:f;for(e=0;e<c;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],s[a++]=r>>16&255,s[a++]=r>>8&255,s[a++]=255&r;2===u&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,s[a++]=255&r);1===u&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,s[a++]=r>>8&255,s[a++]=255&r);return s},e.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],f=0,u=e-i;f<u;f+=16383)o.push(a(t,f,f+16383>u?u:f+16383));1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=f.length;u<s;++u)n[u]=f[u],i[f.charCodeAt(u)]=u;function h(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function a(t,r,e){for(var i,o,f=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),f.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return f.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},{}],6:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,h=s>>1,a=-7,c=e?i-1:0,p=e?-1:1,l=t[r+c];for(c+=p,o=l&(1<<-a)-1,l>>=-a,a+=u;a>0;o=256*o+t[r+c],c+=p,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;a>0;f=256*f+t[r+c],c+=p,a-=8);if(0===o)o=1-h;else{if(o===s)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),o-=h}return(l?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,s,h=8*o-i-1,a=(1<<h)-1,c=a>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=a):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),(r+=f+c>=1?p/s:p*Math.pow(2,1-c))*s>=2&&(f++,s/=2),f+c>=a?(u=0,f=a):f+c>=1?(u=(r*s-1)*Math.pow(2,i),f+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[e+l]=255&u,l+=y,u/=256,i-=8);for(f=f<<i|u,h+=i;h>0;t[e+l]=255&f,l+=y,f/=256,h-=8);t[e+l-y]|=128*g}},{}]},{},[4])(4)});


    window.Buffer = buffer.Buffer


!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("queue-microtask")):"function"==typeof define&&define.amd?define(["exports","queue-microtask"],e):e((n=n||self).utilActor={},n.queueMicrotask)}(this,function(n,e){function t(){return(t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e,t){if(!n.s){if(t instanceof i){if(!t.s)return void(t.o=o.bind(null,n,e));1&e&&(e=t.s),t=t.v}if(t&&t.then)return void t.then(o.bind(null,n,e),o.bind(null,n,2));n.s=e,n.v=t;var r=n.o;r&&r(n)}}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var i=function(){function n(){}return n.prototype.then=function(e,t){var r=new n,i=this.s;if(i){var u=1&i?e:t;if(u){try{o(r,1,u(this.v))}catch(n){o(r,2,n)}return r}return this}return this.o=function(n){try{var i=n.v;1&n.s?o(r,1,e?e(i):i):t?o(r,1,t(i)):o(r,2,i)}catch(n){o(r,2,n)}},r},n}();function u(n){return n instanceof i&&1&n.s}function c(n,e,t){for(var r;;){var c=n();if(u(c)&&(c=c.v),!c)return f;if(c.then){r=0;break}var f=t();if(f&&f.then){if(!u(f)){r=1;break}f=f.s}if(e){var s=e();if(s&&s.then&&!u(s)){r=2;break}}}var a=new i,l=o.bind(null,a,2);return(0===r?c.then(d):1===r?f.then(v):s.then(h)).then(void 0,l),a;function v(r){f=r;do{if(e&&(s=e())&&s.then&&!u(s))return void s.then(h).then(void 0,l);if(!(c=n())||u(c)&&!c.v)return void o(a,1,f);if(c.then)return void c.then(d).then(void 0,l);u(f=t())&&(f=f.v)}while(!f||!f.then);f.then(v).then(void 0,l)}function d(n){n?(f=t())&&f.then?f.then(v).then(void 0,l):v(f):o(a,1,f)}function h(){(c=n())?c.then?c.then(d).then(void 0,l):d(c):o(a,1,f)}}var f="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||"object"==typeof window&&window.window===window&&window;f.FCL_REGISTRY=null==f.FCL_REGISTRY?{}:f.FCL_REGISTRY;var s=0,a=function(n,e,t,r){return void 0===r&&(r={}),new Promise(function(o,i){var u=r.expectReply||!1,c=null!=r.timeout?r.timeout:5e3;u&&c&&setTimeout(function(){return i(new Error("Timeout: "+c+"ms passed without a response."))},c);var s={to:n,from:r.from,tag:e,data:t,timeout:c,reply:o,reject:i};try{f.FCL_REGISTRY[n].mailbox.deliver(s),u||o(!0)}catch(n){console.error("FCL.Actor -- Could Not Deliver Message",s,n)}})},l=function(n){delete f.FCL_REGISTRY[n]},v=function(n,o){if(void 0===o&&(o=null),null==o&&(o=++s),null!=f.FCL_REGISTRY[o])return o;var i,u;f.FCL_REGISTRY[o]={addr:o,mailbox:(u=[],{deliver:function(n){try{return u.push(n),i&&(i(u.shift()),i=void 0),Promise.resolve()}catch(n){return Promise.reject(n)}},receive:function(){return new Promise(function(n){var e=u.shift();if(e)return n(e);i=n})}}),subs:new Set,kvs:{}};var v,d={self:function(){return o},receive:function(){return f.FCL_REGISTRY[o].mailbox.receive()},send:function(n,e,t,r){return void 0===r&&(r={}),r.from=o,a(n,e,t,r)},sendSelf:function(n,e,t){f.FCL_REGISTRY[o]&&a(o,n,e,t)},broadcast:function(n,e,t){void 0===t&&(t={}),t.from=o;for(var i,u=function(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return r(n,void 0);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,void 0):void 0}}(n))){t&&(n=t);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}(f.FCL_REGISTRY[o].subs);!(i=u()).done;)a(i.value,n,e,t)},subscribe:function(n){return null!=n&&f.FCL_REGISTRY[o].subs.add(n)},unsubscribe:function(n){return null!=n&&f.FCL_REGISTRY[o].subs.delete(n)},subscriberCount:function(){return f.FCL_REGISTRY[o].subs.size},hasSubs:function(){return!!f.FCL_REGISTRY[o].subs.size},put:function(n,e){null!=n&&(f.FCL_REGISTRY[o].kvs[n]=e)},get:function(n,e){var t=f.FCL_REGISTRY[o].kvs[n];return null==t?e:t},delete:function(n){delete f.FCL_REGISTRY[o].kvs[n]},update:function(n,e){null!=n&&(f.FCL_REGISTRY[o].kvs[n]=e(f.FCL_REGISTRY[o].kvs[n]))},keys:function(){return Object.keys(f.FCL_REGISTRY[o].kvs)},all:function(){return f.FCL_REGISTRY[o].kvs},where:function(n){return Object.keys(f.FCL_REGISTRY[o].kvs).reduce(function(e,r){var i;return n.test(r)?t({},e,((i={})[r]=f.FCL_REGISTRY[o].kvs[r],i)):e},{})},merge:function(n){void 0===n&&(n={}),Object.keys(n).forEach(function(e){return f.FCL_REGISTRY[o].kvs[e]=n[e]})}};return"object"==typeof n&&(void 0===(v=n)&&(v={}),n=function(n){try{var e=function(){var e=c(function(){return 1},void 0,function(){return Promise.resolve(n.receive()).then(function(e){var t=function(t,r){try{var o=function(t,r){try{var o=function(){function t(){return Promise.resolve(v[e.tag](n,e,e.data||{})).then(function(){})}var r=function(){if("EXIT"===e.tag){var t=function(){if("function"==typeof v.TERMINATE)return Promise.resolve(v.TERMINATE(n,e,e.data||{})).then(function(){})}();if(t&&t.then)return t.then(function(){})}}();return r&&r.then?r.then(t):t()}()}catch(n){return r(n)}return o&&o.then?o.then(void 0,r):o}(0,function(t){console.error(n.self()+" Error",e,t)})}catch(n){return}return o&&o.then?o.then(r.bind(null,!1),r.bind(null,!0)):void 0}(0,function(n,e){});if(t&&t.then)return t.then(function(){})})});return e&&e.then?e.then(function(){}):void 0},t=function(){if("function"==typeof v.INIT)return Promise.resolve(v.INIT(n)).then(function(){})}();return Promise.resolve(t&&t.then?t.then(e):e())}catch(n){return Promise.reject(n)}}),e(function(){try{return Promise.resolve(n(d)).then(function(){l(o)})}catch(n){return Promise.reject(n)}}),o};n.EXIT="EXIT",n.INIT="INIT",n.SNAPSHOT="SNAPSHOT",n.SUBSCRIBE="SUBSCRIBE",n.TERMINATE="TERMINATE",n.UNSUBSCRIBE="UNSUBSCRIBE",n.UPDATED="UPDATED",n.kill=l,n.send=a,n.snapshoter=function(n,e){return e(n),a(n,"SNAPSHOT",null,{expectReply:!0,timeout:0})},n.spawn=v,n.subscriber=function(n,e,t){e(n);var r=v(function(e){try{var r;return e.send(n,"SUBSCRIBE"),Promise.resolve(c(function(){return!r&&1},void 0,function(){return Promise.resolve(e.receive()).then(function(o){if("@EXIT"===o.tag)return e.send(n,"UNSUBSCRIBE"),void(r=1);t(o.data)})}))}catch(n){return Promise.reject(n)}});return function(){return a(r,"@EXIT")}}});

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).utilAddress={})}(this,function(e){function n(e){return null==e?null:e.replace(/^0x/,"").replace(/^Fx/,"")}function t(e){return null==e?null:"0x"+n(e)}e.display=function(e){return t(e)},e.sansPrefix=n,e.withPrefix=t});
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@onflow/util-actor")):"function"==typeof define&&define.amd?define(["exports","@onflow/util-actor"],n):n((e=e||self).config={},e.utilActor)}(this,function(e,n){var r,t="config",o="PUT_CONFIG",i="GET_CONFIG",f="CONFIG/UPDATED",u=function(e){return e},c=((r={})[o]=function(e,n,r){var t=r.key,o=r.value;if(null==t)throw new Error("Missing 'key' for config/put.");e.put(t,o),e.broadcast(f,e.all())},r[i]=function(e,n,r){var t=r.key,o=r.fallback;if(null==t)throw new Error("Missing 'key' for config/get");n.reply(e.get(t,o))},r.UPDATE_CONFIG=function(e,n,r){var t=r.key,o=r.fn;if(null==t)throw new Error("Missing 'key' for config/update");e.update(t,o||u),e.broadcast(f,e.all())},r.DELETE_CONFIG=function(e,n,r){var t=r.key;if(null==t)throw new Error("Missing 'key' for config/delete");e.delete(t),e.broadcast(f,e.all())},r.WHERE_CONFIG=function(e,n,r){var t=r.pattern;if(null==t)throw new Error("Missing 'pattern' for config/where");n.reply(e.where(t))},r[n.SUBSCRIBE]=function(e,n){e.subscribe(n.from),e.send(n.from,f,e.all())},r[n.UNSUBSCRIBE]=function(e,n){e.unsubscribe(n.from)},r);function l(e,r){return n.send(t,o,{key:e,value:r}),y()}function s(e,r){return n.send(t,i,{key:e,fallback:r},{expectReply:!0,timeout:10})}function a(e,r){return void 0===r&&(r=u),n.send(t,"UPDATE_CONFIG",{key:e,fn:r}),y()}function d(e){return n.send(t,"DELETE_CONFIG",{key:e}),y()}function p(e){return n.send(t,"WHERE_CONFIG",{pattern:e},{expectReply:!0,timeout:10})}function E(e){return n.subscriber(t,function(){return n.spawn(c,t)},e)}function y(){return{put:l,get:s,update:a,delete:d,where:p,subscribe:E}}n.spawn(c,t),e.config=y});

!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).utilInvariant={})}(this,function(n){n.invariant=function(n,t){if(!n){var e,i=new Error("INVARIANT "+t);throw i.stack=i.stack.split("\n").filter(function(n){return!/at invariant/.test(n)}).join("\n"),(e=console).error.apply(e,["\n\n---\n\n",i,"\n\n"].concat([].slice.call(arguments,2),["\n\n---\n\n"])),i}}});

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).utilUid={})}(this,function(e){var n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=n.length;e.uid=function(){for(var e="",o=32;o--;)e+=n[Math.random()*t|0];return e}});

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n=n||self).utilTemplate={})}(this,function(n){function e(n,t,o){if(void 0===n&&(n=[]),void 0===t&&(t=[]),void 0===o&&(o=[]),!n.length&&!t.length)return o;if(!n.length)return o;if(!t.length)return[].concat(o,[n[0]]);var i=n[0],r=n.slice(1),f=t[0],u=t.slice(1);return void 0!==i&&o.push(i),void 0!==f&&o.push(f),e(r,u,o)}function t(n){return function(e){return"function"==typeof e?(console.warn("\n        %cFCL/SDK Deprecation Notice\n        ============================\n\n        Interopolation of functions into template literals will not be a thing in future versions of the Flow-JS-SDK or FCL.\n        You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params\n\n        ============================\n      ","font-weight:bold;font-family:monospace;"),t(n)(e(n))):String(e)}}n.interleave=e,n.template=function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];return"string"==typeof n?function(){return n}:Array.isArray(n)?function(o){return e(n,i.map(t(o))).join("").trim()}:n}});


!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r=r||self).rlp={})}(this,function(r){function e(r,e){if(r<56)return Buffer.from([r+e]);var n=f(r),t=f(e+55+n.length/2);return Buffer.from(t+n,"hex")}function n(r){return"0x"===r.slice(0,2)}function f(r){if(r<0)throw new Error("Invalid integer as argument, must be unsigned!");var e=r.toString(16);return e.length%2?"0"+e:e}function t(r){if(!Buffer.isBuffer(r)){if("string"==typeof r)return n(r)?Buffer.from((t="string"!=typeof(u=r)?u:n(u)?u.slice(2):u).length%2?"0"+t:t,"hex"):Buffer.from(r);if("number"==typeof r)return r?(e=f(r),Buffer.from(e,"hex")):Buffer.from([]);if(null==r)return Buffer.from([]);if(r instanceof Uint8Array)return Buffer.from(r);throw new Error("invalid type")}var e,t,u;return r}r.encode=function r(n){if(Array.isArray(n)){for(var f=[],u=0;u<n.length;u++)f.push(r(n[u]));var i=Buffer.concat(f);return Buffer.concat([e(i.length,192),i])}var o=t(n);return 1===o.length&&o[0]<128?o:Buffer.concat([e(o.length,128),o])},r.getLength=function(r){if(!r||0===r.length)return Buffer.from([]);var e=t(r),n=e[0];if(n<=127)return e.length;if(n<=183)return n-127;if(n<=191)return n-182;if(n<=247)return n-191;var f=n-246;return f+function(r,e){if("00"===r.slice(0,2))throw new Error("invalid RLP: extra zeros");return parseInt(r,16)}(e.slice(1,f).toString("hex"))},r.toBuffer=t});


!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,(function(){return e={418:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={splitValues:!1});var r,o=this;this.headersMap={},e&&("undefined"!=typeof Headers&&e instanceof Headers?n.getHeaderKeys(e).forEach((function(r){n.getHeaderValues(e,r).forEach((function(e){t.splitValues?o.append(r,n.splitHeaderValue(e)):o.append(r,e)}))})):"object"==typeof(r=e)&&"object"==typeof r.headersMap&&"function"==typeof r.forEach?e.forEach((function(e,t){o.append(e,t)})):"undefined"!=typeof Map&&e instanceof Map?e.forEach((function(e,t){o.append(t,e)})):"string"==typeof e?this.appendFromString(e):"object"==typeof e&&Object.getOwnPropertyNames(e).forEach((function(t){var r=e[t];Array.isArray(r)?r.forEach((function(e){o.append(t,e)})):o.append(t,r)})))}return e.prototype.appendFromString=function(e){for(var t=e.split("\r\n"),r=0;r<t.length;r++){var n=t[r],o=n.indexOf(":");if(o>0){var s=n.substring(0,o).trim(),i=n.substring(o+1).trim();this.append(s,i)}}},e.prototype.delete=function(e,t){var r=n.normalizeName(e);if(void 0===t)delete this.headersMap[r];else{var o=this.headersMap[r];if(o){var s=o.indexOf(t);s>=0&&o.splice(s,1),0===o.length&&delete this.headersMap[r]}}},e.prototype.append=function(e,t){var r=this,o=n.normalizeName(e);Array.isArray(this.headersMap[o])||(this.headersMap[o]=[]),Array.isArray(t)?t.forEach((function(e){r.headersMap[o].push(n.normalizeValue(e))})):this.headersMap[o].push(n.normalizeValue(t))},e.prototype.set=function(e,t){var r=n.normalizeName(e);if(Array.isArray(t)){var o=[];t.forEach((function(e){o.push(n.normalizeValue(e))})),this.headersMap[r]=o}else this.headersMap[r]=[n.normalizeValue(t)]},e.prototype.has=function(e,t){var r=this.headersMap[n.normalizeName(e)];if(!Array.isArray(r))return!1;if(void 0!==t){var o=n.normalizeValue(t);return r.indexOf(o)>=0}return!0},e.prototype.get=function(e){var t=this.headersMap[n.normalizeName(e)];return void 0!==t?t.concat():[]},e.prototype.forEach=function(e){var t=this;Object.getOwnPropertyNames(this.headersMap).forEach((function(r){e(r,t.headersMap[r])}),this)},e.prototype.toHeaders=function(){if("undefined"!=typeof Headers){var e=new Headers;return this.forEach((function(t,r){r.forEach((function(r){e.append(t,r)}))})),e}throw new Error("Headers class is not defined")},e}();t.BrowserHeaders=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.BrowserHeaders=n.BrowserHeaders},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iterateHeaders=function(e,t){for(var r=e[Symbol.iterator](),n=r.next();!n.done;)t(n.value[0]),n=r.next()},t.iterateHeadersKeys=function(e,t){for(var r=e.keys(),n=r.next();!n.done;)t(n.value),n=r.next()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.normalizeName=function(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()},t.normalizeValue=function(e){return"string"!=typeof e&&(e=String(e)),e},t.getHeaderValues=function(e,t){var r=e;if(r instanceof Headers&&r.getAll)return r.getAll(t);var n=r.get(t);return n&&"string"==typeof n?[n]:n},t.getHeaderKeys=function(e){var t=e,r={},o=[];return t.keys?n.iterateHeadersKeys(t,(function(e){r[e]||(r[e]=!0,o.push(e))})):t.forEach?t.forEach((function(e,t){r[t]||(r[t]=!0,o.push(t))})):n.iterateHeaders(t,(function(e){var t=e[0];r[t]||(r[t]=!0,o.push(t))})),o},t.splitHeaderValue=function(e){var t=[];return e.split(", ").forEach((function(e){e.split(",").forEach((function(e){t.push(e)}))})),t}}]))},617:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChunkParser=t.ChunkType=t.encodeASCII=t.decodeASCII=void 0;var n,o=r(65);function s(e){return 9===(t=e)||10===t||13===t||e>=32&&e<=126;var t}function i(e){for(var t=0;t!==e.length;++t)if(!s(e[t]))throw new Error("Metadata is not valid (printable) ASCII");return String.fromCharCode.apply(String,Array.prototype.slice.call(e))}function a(e){return 128==(128&e.getUint8(0))}function u(e){return e.getUint32(1,!1)}function d(e,t,r){return e.byteLength-t>=r}function c(e,t,r){if(e.slice)return e.slice(t,r);var n=e.length;void 0!==r&&(n=r);for(var o=new Uint8Array(n-t),s=0,i=t;i<n;i++)o[s++]=e[i];return o}t.decodeASCII=i,t.encodeASCII=function(e){for(var t=new Uint8Array(e.length),r=0;r!==e.length;++r){var n=e.charCodeAt(r);if(!s(n))throw new Error("Metadata contains invalid ASCII");t[r]=n}return t},function(e){e[e.MESSAGE=1]="MESSAGE",e[e.TRAILERS=2]="TRAILERS"}(n=t.ChunkType||(t.ChunkType={}));var p=function(){function e(){this.buffer=null,this.position=0}return e.prototype.parse=function(e,t){if(0===e.length&&t)return[];var r,s=[];if(null==this.buffer)this.buffer=e,this.position=0;else if(this.position===this.buffer.byteLength)this.buffer=e,this.position=0;else{var p=this.buffer.byteLength-this.position,h=new Uint8Array(p+e.byteLength),f=c(this.buffer,this.position);h.set(f,0);var l=new Uint8Array(e);h.set(l,p),this.buffer=h,this.position=0}for(;;){if(!d(this.buffer,this.position,5))return s;var g=c(this.buffer,this.position,this.position+5),b=new DataView(g.buffer,g.byteOffset,g.byteLength),y=u(b);if(!d(this.buffer,this.position,5+y))return s;var v=c(this.buffer,this.position+5,this.position+5+y);if(this.position+=5+y,a(b))return s.push({chunkType:n.TRAILERS,trailers:(r=v,new o.Metadata(i(r)))}),s;s.push({chunkType:n.MESSAGE,data:v})}},e}();t.ChunkParser=p},8:function(e,t){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.httpStatusToCode=t.Code=void 0,function(e){e[e.OK=0]="OK",e[e.Canceled=1]="Canceled",e[e.Unknown=2]="Unknown",e[e.InvalidArgument=3]="InvalidArgument",e[e.DeadlineExceeded=4]="DeadlineExceeded",e[e.NotFound=5]="NotFound",e[e.AlreadyExists=6]="AlreadyExists",e[e.PermissionDenied=7]="PermissionDenied",e[e.ResourceExhausted=8]="ResourceExhausted",e[e.FailedPrecondition=9]="FailedPrecondition",e[e.Aborted=10]="Aborted",e[e.OutOfRange=11]="OutOfRange",e[e.Unimplemented=12]="Unimplemented",e[e.Internal=13]="Internal",e[e.Unavailable=14]="Unavailable",e[e.DataLoss=15]="DataLoss",e[e.Unauthenticated=16]="Unauthenticated"}(r=t.Code||(t.Code={})),t.httpStatusToCode=function(e){switch(e){case 0:return r.Internal;case 200:return r.OK;case 400:return r.InvalidArgument;case 401:return r.Unauthenticated;case 403:return r.PermissionDenied;case 404:return r.NotFound;case 409:return r.Aborted;case 412:return r.FailedPrecondition;case 429:return r.ResourceExhausted;case 499:return r.Canceled;case 500:return r.Unknown;case 501:return r.Unimplemented;case 503:return r.Unavailable;case 504:return r.DeadlineExceeded;default:return r.Unknown}}},934:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.client=void 0;var n=r(65),o=r(617),s=r(8),i=r(346),a=r(57),u=r(882);t.client=function(e,t){return new d(e,t)};var d=function(){function e(e,t){this.started=!1,this.sentFirstMessage=!1,this.completed=!1,this.closed=!1,this.finishedSending=!1,this.onHeadersCallbacks=[],this.onMessageCallbacks=[],this.onEndCallbacks=[],this.parser=new o.ChunkParser,this.methodDefinition=e,this.props=t,this.createTransport()}return e.prototype.createTransport=function(){var e=this.props.host+"/"+this.methodDefinition.service.serviceName+"/"+this.methodDefinition.methodName,t={methodDefinition:this.methodDefinition,debug:this.props.debug||!1,url:e,onHeaders:this.onTransportHeaders.bind(this),onChunk:this.onTransportChunk.bind(this),onEnd:this.onTransportEnd.bind(this)};this.props.transport?this.transport=this.props.transport(t):this.transport=a.makeDefaultTransport(t)},e.prototype.onTransportHeaders=function(e,t){if(this.props.debug&&i.debug("onHeaders",e,t),this.closed)this.props.debug&&i.debug("grpc.onHeaders received after request was closed - ignoring");else if(0===t);else{this.responseHeaders=e,this.props.debug&&i.debug("onHeaders.responseHeaders",JSON.stringify(this.responseHeaders,null,2));var r=c(e);this.props.debug&&i.debug("onHeaders.gRPCStatus",r);var n=r&&r>=0?r:s.httpStatusToCode(t);this.props.debug&&i.debug("onHeaders.code",n);var o=e.get("grpc-message")||[];if(this.props.debug&&i.debug("onHeaders.gRPCMessage",o),this.rawOnHeaders(e),n!==s.Code.OK){var a=this.decodeGRPCStatus(o[0]);this.rawOnError(n,a,e)}}},e.prototype.onTransportChunk=function(e){var t=this;if(this.closed)this.props.debug&&i.debug("grpc.onChunk received after request was closed - ignoring");else{var r=[];try{r=this.parser.parse(e)}catch(e){return this.props.debug&&i.debug("onChunk.parsing error",e,e.message),void this.rawOnError(s.Code.Internal,"parsing error: "+e.message)}r.forEach((function(e){if(e.chunkType===o.ChunkType.MESSAGE){var r=t.methodDefinition.responseType.deserializeBinary(e.data);t.rawOnMessage(r)}else e.chunkType===o.ChunkType.TRAILERS&&(t.responseHeaders?(t.responseTrailers=new n.Metadata(e.trailers),t.props.debug&&i.debug("onChunk.trailers",t.responseTrailers)):(t.responseHeaders=new n.Metadata(e.trailers),t.rawOnHeaders(t.responseHeaders)))}))}},e.prototype.onTransportEnd=function(){if(this.props.debug&&i.debug("grpc.onEnd"),this.closed)this.props.debug&&i.debug("grpc.onEnd received after request was closed - ignoring");else if(void 0!==this.responseTrailers){var e=c(this.responseTrailers);if(null!==e){var t=this.responseTrailers.get("grpc-message"),r=this.decodeGRPCStatus(t[0]);this.rawOnEnd(e,r,this.responseTrailers)}else this.rawOnError(s.Code.Internal,"Response closed without grpc-status (Trailers provided)")}else{if(void 0===this.responseHeaders)return void this.rawOnError(s.Code.Unknown,"Response closed without headers");var n=c(this.responseHeaders),o=this.responseHeaders.get("grpc-message");if(this.props.debug&&i.debug("grpc.headers only response ",n,o),null===n)return void this.rawOnEnd(s.Code.Unknown,"Response closed without grpc-status (Headers only)",this.responseHeaders);var a=this.decodeGRPCStatus(o[0]);this.rawOnEnd(n,a,this.responseHeaders)}},e.prototype.decodeGRPCStatus=function(e){if(!e)return"";try{return decodeURIComponent(e)}catch(t){return e}},e.prototype.rawOnEnd=function(e,t,r){var n=this;this.props.debug&&i.debug("rawOnEnd",e,t,r),this.completed||(this.completed=!0,this.onEndCallbacks.forEach((function(o){if(!n.closed)try{o(e,t,r)}catch(e){setTimeout((function(){throw e}),0)}})))},e.prototype.rawOnHeaders=function(e){this.props.debug&&i.debug("rawOnHeaders",e),this.completed||this.onHeadersCallbacks.forEach((function(t){try{t(e)}catch(e){setTimeout((function(){throw e}),0)}}))},e.prototype.rawOnError=function(e,t,r){var o=this;void 0===r&&(r=new n.Metadata),this.props.debug&&i.debug("rawOnError",e,t),this.completed||(this.completed=!0,this.onEndCallbacks.forEach((function(n){if(!o.closed)try{n(e,t,r)}catch(e){setTimeout((function(){throw e}),0)}})))},e.prototype.rawOnMessage=function(e){var t=this;this.props.debug&&i.debug("rawOnMessage",e.toObject()),this.completed||this.closed||this.onMessageCallbacks.forEach((function(r){if(!t.closed)try{r(e)}catch(e){setTimeout((function(){throw e}),0)}}))},e.prototype.onHeaders=function(e){this.onHeadersCallbacks.push(e)},e.prototype.onMessage=function(e){this.onMessageCallbacks.push(e)},e.prototype.onEnd=function(e){this.onEndCallbacks.push(e)},e.prototype.start=function(e){if(this.started)throw new Error("Client already started - cannot .start()");this.started=!0;var t=new n.Metadata(e||{});t.set("content-type","application/grpc-web+proto"),t.set("x-grpc-web","1"),this.transport.start(t)},e.prototype.send=function(e){if(!this.started)throw new Error("Client not started - .start() must be called before .send()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .send()");if(!this.methodDefinition.requestStream&&this.sentFirstMessage)throw new Error("Message already sent for non-client-streaming method - cannot .send()");this.sentFirstMessage=!0;var t=u.frameRequest(e);this.transport.sendMessage(t)},e.prototype.finishSend=function(){if(!this.started)throw new Error("Client not started - .finishSend() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .send()");if(this.finishedSending)throw new Error("Client already finished sending - cannot .finishSend()");this.finishedSending=!0,this.transport.finishSend()},e.prototype.close=function(){if(!this.started)throw new Error("Client not started - .start() must be called before .close()");if(this.closed)throw new Error("Client already closed - cannot .close()");this.closed=!0,this.props.debug&&i.debug("request.abort aborting request"),this.transport.cancel()},e}();function c(e){var t=e.get("grpc-status")||[];if(t.length>0)try{var r=t[0];return parseInt(r,10)}catch(e){return null}return null}},346:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debug=void 0,t.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.debug?console.debug.apply(null,e):console.log.apply(null,e)}},607:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.grpc=void 0;var n,o=r(418),s=r(57),i=r(229),a=r(540),u=r(210),d=r(859),c=r(8),p=r(938),h=r(35),f=r(934);(n=t.grpc||(t.grpc={})).setDefaultTransport=s.setDefaultTransportFactory,n.CrossBrowserHttpTransport=d.CrossBrowserHttpTransport,n.FetchReadableStreamTransport=i.FetchReadableStreamTransport,n.XhrTransport=u.XhrTransport,n.WebsocketTransport=a.WebsocketTransport,n.Code=c.Code,n.Metadata=o.BrowserHeaders,n.client=function(e,t){return f.client(e,t)},n.invoke=p.invoke,n.unary=h.unary},938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.invoke=void 0;var n=r(934);t.invoke=function(e,t){if(e.requestStream)throw new Error(".invoke cannot be used with client-streaming methods. Use .client instead.");var r=n.client(e,{host:t.host,transport:t.transport,debug:t.debug});return t.onHeaders&&r.onHeaders(t.onHeaders),t.onMessage&&r.onMessage(t.onMessage),t.onEnd&&r.onEnd(t.onEnd),r.start(t.metadata),r.send(t.request),r.finishSend(),{close:function(){r.close()}}}},65:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0;var n=r(418);Object.defineProperty(t,"Metadata",{enumerable:!0,get:function(){return n.BrowserHeaders}})},57:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeDefaultTransport=t.setDefaultTransportFactory=void 0;var n=r(859),o=function(e){return n.CrossBrowserHttpTransport({withCredentials:!1})(e)};t.setDefaultTransportFactory=function(e){o=e},t.makeDefaultTransport=function(e){return o(e)}},229:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.detectFetchSupport=t.FetchReadableStreamTransport=void 0;var o=r(65),s=r(346);t.FetchReadableStreamTransport=function(e){return function(t){return function(e,t){return e.debug&&s.debug("fetchRequest",e),new i(e,t)}(t,e)}};var i=function(){function e(e,t){this.cancelled=!1,this.controller=self.AbortController&&new AbortController,this.options=e,this.init=t}return e.prototype.pump=function(e,t){var r=this;if(this.reader=e,this.cancelled)return this.options.debug&&s.debug("Fetch.pump.cancel at first pump"),void this.reader.cancel().catch((function(e){r.options.debug&&s.debug("Fetch.pump.reader.cancel exception",e)}));this.reader.read().then((function(e){if(e.done)return r.options.onEnd(),t;r.options.onChunk(e.value),r.pump(r.reader,t)})).catch((function(e){r.cancelled?r.options.debug&&s.debug("Fetch.catch - request cancelled"):(r.cancelled=!0,r.options.debug&&s.debug("Fetch.catch",e.message),r.options.onEnd(e))}))},e.prototype.send=function(e){var t=this;fetch(this.options.url,n(n({},this.init),{headers:this.metadata.toHeaders(),method:"POST",body:e,signal:this.controller&&this.controller.signal})).then((function(e){if(t.options.debug&&s.debug("Fetch.response",e),t.options.onHeaders(new o.Metadata(e.headers),e.status),!e.body)return e;t.pump(e.body.getReader(),e)})).catch((function(e){t.cancelled?t.options.debug&&s.debug("Fetch.catch - request cancelled"):(t.cancelled=!0,t.options.debug&&s.debug("Fetch.catch",e.message),t.options.onEnd(e))}))},e.prototype.sendMessage=function(e){this.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){this.metadata=e},e.prototype.cancel=function(){var e=this;this.cancelled?this.options.debug&&s.debug("Fetch.cancel already cancelled"):(this.cancelled=!0,this.controller?(this.options.debug&&s.debug("Fetch.cancel.controller.abort"),this.controller.abort()):this.options.debug&&s.debug("Fetch.cancel.missing abort controller"),this.reader?(this.options.debug&&s.debug("Fetch.cancel.reader.cancel"),this.reader.cancel().catch((function(t){e.options.debug&&s.debug("Fetch.cancel.reader.cancel exception",t)}))):this.options.debug&&s.debug("Fetch.cancel before reader"))},e}();t.detectFetchSupport=function(){return"undefined"!=typeof Response&&Response.prototype.hasOwnProperty("body")&&"function"==typeof Headers}},859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CrossBrowserHttpTransport=void 0;var n=r(229),o=r(210);t.CrossBrowserHttpTransport=function(e){if(n.detectFetchSupport()){var t={credentials:e.withCredentials?"include":"same-origin"};return n.FetchReadableStreamTransport(t)}return o.XhrTransport({withCredentials:e.withCredentials})}},210:function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.stringToArrayBuffer=t.MozChunkedArrayBufferXHR=t.XHR=t.XhrTransport=void 0;var s=r(65),i=r(346),a=r(849);t.XhrTransport=function(e){return function(t){if(a.detectMozXHRSupport())return new d(t,e);if(a.detectXHROverrideMimeTypeSupport())return new u(t,e);throw new Error("This environment's XHR implementation cannot support binary transfer.")}};var u=function(){function e(e,t){this.options=e,this.init=t}return e.prototype.onProgressEvent=function(){this.options.debug&&i.debug("XHR.onProgressEvent.length: ",this.xhr.response.length);var e=this.xhr.response.substr(this.index);this.index=this.xhr.response.length;var t=p(e);this.options.onChunk(t)},e.prototype.onLoadEvent=function(){this.options.debug&&i.debug("XHR.onLoadEvent"),this.options.onEnd()},e.prototype.onStateChange=function(){this.options.debug&&i.debug("XHR.onStateChange",this.xhr.readyState),this.xhr.readyState===XMLHttpRequest.HEADERS_RECEIVED&&this.options.onHeaders(new s.Metadata(this.xhr.getAllResponseHeaders()),this.xhr.status)},e.prototype.sendMessage=function(e){this.xhr.send(e)},e.prototype.finishSend=function(){},e.prototype.start=function(e){var t=this;this.metadata=e;var r=new XMLHttpRequest;this.xhr=r,r.open("POST",this.options.url),this.configureXhr(),this.metadata.forEach((function(e,t){r.setRequestHeader(e,t.join(", "))})),r.withCredentials=Boolean(this.init.withCredentials),r.addEventListener("readystatechange",this.onStateChange.bind(this)),r.addEventListener("progress",this.onProgressEvent.bind(this)),r.addEventListener("loadend",this.onLoadEvent.bind(this)),r.addEventListener("error",(function(e){t.options.debug&&i.debug("XHR.error",e),t.options.onEnd(e.error)}))},e.prototype.configureXhr=function(){this.xhr.responseType="text",this.xhr.overrideMimeType("text/plain; charset=x-user-defined")},e.prototype.cancel=function(){this.options.debug&&i.debug("XHR.abort"),this.xhr.abort()},e}();t.XHR=u;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.configureXhr=function(){this.options.debug&&i.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'"),this.xhr.responseType="moz-chunked-arraybuffer"},t.prototype.onProgressEvent=function(){var e=this.xhr.response;this.options.debug&&i.debug("MozXHR.onProgressEvent: ",new Uint8Array(e)),this.options.onChunk(new Uint8Array(e))},t}(u);function c(e,t){var r=e.charCodeAt(t);if(r>=55296&&r<=56319){var n=e.charCodeAt(t+1);n>=56320&&n<=57343&&(r=65536+(r-55296<<10)+(n-56320))}return r}function p(e){for(var t=new Uint8Array(e.length),r=0,n=0;n<e.length;n++){var o=String.prototype.codePointAt?e.codePointAt(n):c(e,n);t[r++]=255&o}return t}t.MozChunkedArrayBufferXHR=d,t.stringToArrayBuffer=p},849:function(e,t){"use strict";var r;function n(){if(void 0!==r)return r;if(XMLHttpRequest){r=new XMLHttpRequest;try{r.open("GET","https://localhost")}catch(e){}}return r}function o(e){var t=n();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.detectXHROverrideMimeTypeSupport=t.detectMozXHRSupport=t.xhrSupportsResponseType=void 0,t.xhrSupportsResponseType=o,t.detectMozXHRSupport=function(){return"undefined"!=typeof XMLHttpRequest&&o("moz-chunked-arraybuffer")},t.detectXHROverrideMimeTypeSupport=function(){return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest.prototype.hasOwnProperty("overrideMimeType")}},540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebsocketTransport=void 0;var n,o=r(346),s=r(617);!function(e){e[e.FINISH_SEND=1]="FINISH_SEND"}(n||(n={}));var i=new Uint8Array([1]);t.WebsocketTransport=function(){return function(e){return function(e){e.debug&&o.debug("websocketRequest",e);var t,r=function(e){if("https://"===e.substr(0,8))return"wss://"+e.substr(8);if("http://"===e.substr(0,7))return"ws://"+e.substr(7);throw new Error("Websocket transport constructed with non-https:// or http:// host.")}(e.url),a=[];function u(e){if(e===n.FINISH_SEND)t.send(i);else{var r=e,o=new Int8Array(r.byteLength+1);o.set(new Uint8Array([0])),o.set(r,1),t.send(o)}}return{sendMessage:function(e){t&&t.readyState!==t.CONNECTING?u(e):a.push(e)},finishSend:function(){t&&t.readyState!==t.CONNECTING?u(n.FINISH_SEND):a.push(n.FINISH_SEND)},start:function(n){(t=new WebSocket(r,["grpc-websockets"])).binaryType="arraybuffer",t.onopen=function(){var r;e.debug&&o.debug("websocketRequest.onopen"),t.send((r="",n.forEach((function(e,t){r+=e+": "+t.join(", ")+"\r\n"})),s.encodeASCII(r))),a.forEach((function(e){u(e)}))},t.onclose=function(t){e.debug&&o.debug("websocketRequest.onclose",t),e.onEnd()},t.onerror=function(t){e.debug&&o.debug("websocketRequest.onerror",t)},t.onmessage=function(t){e.onChunk(new Uint8Array(t.data))}},cancel:function(){e.debug&&o.debug("websocket.abort"),t.close()}}}(e)}}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unary=void 0;var n=r(65),o=r(934);t.unary=function(e,t){if(e.responseStream)throw new Error(".unary cannot be used with server-streaming methods. Use .invoke or .client instead.");if(e.requestStream)throw new Error(".unary cannot be used with client-streaming methods. Use .client instead.");var r=null,s=null,i=o.client(e,{host:t.host,transport:t.transport,debug:t.debug});return i.onHeaders((function(e){r=e})),i.onMessage((function(e){s=e})),i.onEnd((function(e,o,i){t.onEnd({status:e,statusMessage:o,headers:r||new n.Metadata,message:s,trailers:i})})),i.start(t.metadata),i.send(t.request),i.finishSend(),{close:function(){i.close()}}}},882:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.frameRequest=void 0,t.frameRequest=function(e){var t=e.serializeBinary(),r=new ArrayBuffer(t.byteLength+5);return new DataView(r,1,4).setUint32(0,t.length,!1),new Uint8Array(r,5).set(t),new Uint8Array(r)}}},t={},function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(607);var e,t}));


        function XTransport(){
            return grpc.CrossBrowserHttpTransport({});
        }
        window.grpcWebNodeHttpTransport = {};
        window.grpcWebNodeHttpTransport.NodeHttpTransport = XTransport;
        window.grpcWeb = {};
        window.grpcWeb.grpc = grpc;





! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@onflow/util-invariant"), require("@onflow/util-actor"), require("@onflow/protobuf"), require("@onflow/util-address"), require("@improbable-eng/grpc-web"), require("@improbable-eng/grpc-web-node-http-transport"), require("@onflow/rlp"), require("@onflow/util-template")) : "function" == typeof define && define.amd ? define(["exports", "@onflow/util-invariant", "@onflow/util-actor", "@onflow/protobuf", "@onflow/util-address", "@improbable-eng/grpc-web", "@improbable-eng/grpc-web-node-http-transport", "@onflow/rlp", "@onflow/util-template"], t) : t((e || self).sdk = {}, e.utilInvariant, e.utilActor, e.protobuf, e.utilAddress, e.grpcWeb, e.grpcWebNodeHttpTransport, e.rlp, e.utilTemplate)
}(this, function(e, t, n, r, o, i, u, c, a) {
    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (e) {
            return !1
        }
    }

    function m(e, t, n) {
        return (m = d() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && f(o, n.prototype), o
        }).apply(null, arguments)
    }

    function g(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (g = function(e) {
            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n)
            }

            function n() {
                return m(e, arguments, l(this).constructor)
            }
            return n.prototype = Object.create(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), f(n, e)
        })(e)
    }

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var h, v = "SCRIPT",
        y = "TRANSACTION",
        k = "GET_TRANSACTION_STATUS",
        b = "GET_ACCOUNT",
        P = "GET_EVENTS",
        I = "GET_LATEST_BLOCK",
        S = "PING",
        B = "GET_TRANSACTION",
        w = "GET_BLOCK_BY_ID",
        A = "GET_BLOCK_BY_HEIGHT",
        x = "GET_BLOCK",
        E = "GET_BLOCK_HEADER",
        T = "GET_COLLECTION",
        j = "authorizer",
        N = '{\n  "tag":"UNKNOWN",\n  "assigns":{},\n  "status":"OK",\n  "reason":null,\n  "accounts":{},\n  "params":{},\n  "arguments":{},\n  "message": {\n    "cadence":null,\n    "refBlock":null,\n    "computeLimit":null,\n    "proposer":null,\n    "payer":null,\n    "authorizations":[],\n    "params":[],\n    "arguments":[]\n  },\n  "proposer":null,\n  "authorizations":[],\n  "payer":null,\n  "events": {\n    "eventType":null,\n    "start":null,\n    "end":null,\n    "blockIds":[]\n  },\n  "transaction": {\n    "id":null\n  },\n  "block": {\n    "id":null,\n    "height":null,\n    "isSealed":null\n  },\n  "account": {\n    "addr":null\n  },\n  "collection": {\n    "id":null\n  }\n}',
        G = new Set(Object.keys(JSON.parse(N))),
        O = function() {
            return JSON.parse(N)
        },
        L = "abcdefghijklmnopqrstuvwxyz0123456789".split(""),
        R = function() {
            return L[~~(Math.random() * L.length)]
        },
        _ = function() {
            return Array.from({
                length: 10
            }, R).join("")
        },
        U = function(e) {
            return Array.isArray(e)
        },
        C = function(e) {
            return null == e
        },
        D = function(e) {
            return e.status = "OK", e
        },
        H = function(e, t) {
            return e.status = "BAD", e.reason = t, e
        },
        q = function(e) {
            return function(t) {
                return t.tag = e, D(t)
            }
        },
        F = function(e, n) {
            return void 0 === n && (n = {}),
                function(r) {
                    var o;
                    t.invariant("function" == typeof e || "object" == typeof e, "prepAccount must be passed an authorization function or an account object"), t.invariant(null != n.role, "Account must have a role");
                    var i = JSON.parse('{\n  "kind":"ACCOUNT",\n  "tempId":null,\n  "addr":null,\n  "keyId":null,\n  "sequenceNum":null,\n  "signature":null,\n  "signingFunction":null,\n  "resolve":null,\n  "role": {\n    "proposer":false,\n    "authorizer":false,\n    "payer":false,\n    "param":false\n  }\n}'),
                        u = n.role,
                        c = _();
                    return r.accounts[c] = s({}, i, {
                        tempId: c
                    }, e = "function" == typeof e ? {
                        resolve: e
                    } : e, {
                        role: s({}, i.role, "object" == typeof e.role ? e.role : {}, (o = {}, o[u] = !0, o))
                    }), u === j ? r.authorizations.push(c) : r[u] = c, r
                }
        },
        K = function(e) {
            return function(t) {
                var n = _();
                return t.message.arguments.push(n), t.arguments[n] = JSON.parse('{\n  "kind":"ARGUMENT",\n  "tempId":null,\n  "value":null,\n  "asArgument":null,\n  "xform":null,\n  "resolve": null\n}'), t.arguments[n].tempId = n, t.arguments[n].value = e.value, t.arguments[n].asArgument = e.asArgument, t.arguments[n].xform = e.xform, t.arguments[n].resolve = e.resolve, D(t)
            }
        },
        z = q(v),
        M = q(y),
        J = q(k),
        W = q(B),
        V = q(b),
        Y = q(P),
        $ = q(I),
        X = q(w),
        Z = q(A),
        Q = q(S),
        ee = q(x),
        te = q(E),
        ne = q(T),
        re = function(e) {
            return function(t) {
                return t.tag === e
            }
        },
        oe = re("UNKNOWN"),
        ie = re(v),
        ue = re(y),
        ce = re(k),
        ae = re(B),
        se = re(b),
        le = re(P),
        fe = re(I),
        de = re(w),
        me = re(A),
        ge = re(S),
        pe = re(x),
        he = re(E),
        ve = re(T),
        ye = function(e) {
            return "BAD" === e.status
        },
        ke = function e(t, n) {
            void 0 === n && (n = []);
            try {
                return Promise.resolve(function(r, o) {
                    try {
                        var i = Promise.resolve(t).then(function(r) {
                            if (t = function(e) {
                                    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                                        var r = n[t];
                                        if (!G.has(r)) throw new Error('"' + r + '" is an invalid root level Interaction property.')
                                    }
                                    return e
                                }(r), ye(t)) throw new Error("Interaction Error: " + t.reason);
                            if (!n.length) return t;
                            var o = n[0],
                                i = n.slice(1);
                            return Promise.resolve(o).then(function(n) {
                                if ("function" == typeof n) return e(n(t), i);
                                if (C(n) || !n) return e(t, i);
                                if (function(e) {
                                        if (null === (t = e) || "object" != typeof t || C(e) || function(e) {
                                                return "number" == typeof e
                                            }(e)) return !1;
                                        for (var t, n, r = function(e, t) {
                                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                if (n) return (n = n.call(e)).next.bind(n);
                                                if (Array.isArray(e) || (n = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return p(e, t);
                                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                                                        }
                                                    }(e))) {
                                                    n && (e = n);
                                                    var r = 0;
                                                    return function() {
                                                        return r >= e.length ? {
                                                            done: !0
                                                        } : {
                                                            done: !1,
                                                            value: e[r++]
                                                        }
                                                    }
                                                }
                                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }(G); !(n = r()).done;)
                                            if (!e.hasOwnProperty(n.value)) return !1;
                                        return !0
                                    }(n)) return e(n, i);
                                throw new Error("Invalid Interaction Composition")
                            })
                        })
                    } catch (e) {
                        return o(e)
                    }
                    return i && i.then ? i.then(void 0, o) : i
                }(0, function(e) {
                    throw e
                }))
            } catch (e) {
                return Promise.reject(e)
            }
        },
        be = function e() {
            var t = [].slice.call(arguments),
                n = t[0],
                r = t[1];
            return U(n) && null == r ? function(t) {
                return e(t, n)
            } : ke(n, r)
        },
        Pe = function(e) {
            return e
        },
        Ie = function(e, t, n) {
            return null == e.assigns[t] ? n : e.assigns[t]
        },
        Se = function(e, t) {
            return function(n) {
                return n.assigns[e] = t, D(n)
            }
        },
        Be = function(e, t) {
            return void 0 === t && (t = Pe),
                function(n) {
                    return n.assigns[e] = t(n.assigns[e], n), D(n)
                }
        };

    function we(e) {
        return void 0 === e && (e = []), be(O(), e)
    }
    var Ae = function e(t, n) {
            void 0 === t && (t = []);
            try {
                if (!t.length) return Promise.resolve(n);
                var r = t[0],
                    o = t.slice(1);
                return Promise.resolve(De(r)).then(function(t) {
                    return null == t ? e(o, n) : t
                })
            } catch (e) {
                return Promise.reject(e)
            }
        },
        xe = "config",
        Ee = "PUT_CONFIG",
        Te = "GET_CONFIG",
        je = "GET_ALL_CONFIG",
        Ne = "UPDATE_CONFIG",
        Ge = "DELETE_CONFIG",
        Oe = "CLEAR_CONFIG",
        Le = "WHERE_CONFIG",
        Re = "CONFIG/UPDATED",
        _e = function(e) {
            return e
        },
        Ue = ((h = {})[Ee] = function(e, t, n) {
            var r = n.key,
                o = n.value;
            if (null == r) throw new Error("Missing 'key' for config/put.");
            e.put(r, o), e.broadcast(Re, s({}, e.all()))
        }, h[Te] = function(e, t, n) {
            var r = n.key,
                o = n.fallback;
            if (null == r) throw new Error("Missing 'key' for config/get");
            t.reply(e.get(r, o))
        }, h[je] = function(e, t) {
            t.reply(s({}, e.all()))
        }, h[Ne] = function(e, t, n) {
            var r = n.key,
                o = n.fn;
            if (null == r) throw new Error("Missing 'key' for config/update");
            e.update(r, o || _e), e.broadcast(Re, s({}, e.all()))
        }, h[Ge] = function(e, t, n) {
            var r = n.key;
            if (null == r) throw new Error("Missing 'key' for config/delete");
            e.delete(r), e.broadcast(Re, s({}, e.all()))
        }, h[Oe] = function(e, t) {
            for (var n = 0, r = Object.keys(e.all()); n < r.length; n++) e.delete(r[n]);
            e.broadcast(Re, s({}, e.all()))
        }, h[Le] = function(e, t, n) {
            var r = n.pattern;
            if (null == r) throw new Error("Missing 'pattern' for config/where");
            t.reply(e.where(r))
        }, h[n.SUBSCRIBE] = function(e, t) {
            e.subscribe(t.from), e.send(t.from, Re, s({}, e.all()))
        }, h[n.UNSUBSCRIBE] = function(e, t) {
            e.unsubscribe(t.from)
        }, h);

    function Ce(e, t) {
        return n.send(xe, Ee, {
            key: e,
            value: t
        }), Je()
    }

    function De(e, t) {
        return n.send(xe, Te, {
            key: e,
            fallback: t
        }, {
            expectReply: !0,
            timeout: 10
        })
    }

    function He() {
        return n.send(xe, je, null, {
            expectReply: !0,
            timeout: 10
        })
    }

    function qe(e, t) {
        return void 0 === t && (t = _e), n.send(xe, Ne, {
            key: e,
            fn: t
        }), Je()
    }

    function Fe(e) {
        return n.send(xe, Ge, {
            key: e
        }), Je()
    }

    function Ke(e) {
        return n.send(xe, Le, {
            pattern: e
        }, {
            expectReply: !0,
            timeout: 10
        })
    }

    function ze(e) {
        return n.subscriber(xe, function() {
            return n.spawn(Ue, xe)
        }, e)
    }

    function Me() {
        return n.send(xe, Oe)
    }

    function Je(e) {
        return null != e && "object" == typeof e && Object.keys(e).map(function(t) {
            return Ce(t, e[t])
        }), {
            put: Ce,
            get: De,
            all: He,
            first: Ae,
            update: qe,
            delete: Fe,
            where: Ke,
            subscribe: ze,
            overload: Ve
        }
    }
    n.spawn(Ue, xe), Je.put = Ce, Je.get = De, Je.all = He, Je.first = Ae, Je.update = qe, Je.delete = Fe, Je.where = Ke, Je.subscribe = ze, Je.overload = Ve;
    var We = function(e) {
        return e
    };

    function Ve(e, t) {
        return void 0 === e && (e = {}), void 0 === t && (t = We), new Promise(function(n, r) {
            try {
                return Promise.resolve(He()).then(function(o) {
                    var i = function(r, i) {
                        try {
                            var u = function() {
                                Je(e);
                                var r = t;
                                return Promise.resolve(He()).then(function(e) {
                                    return Promise.resolve(r(e)).then(function(e) {
                                        return Promise.resolve(Me()).then(function() {
                                            return Promise.resolve(Je(o)).then(function() {
                                                n(e)
                                            })
                                        })
                                    })
                                })
                            }()
                        } catch (e) {
                            return i(e)
                        }
                        return u && u.then ? u.then(void 0, i) : u
                    }(0, function(e) {
                        return Promise.resolve(Me()).then(function() {
                            return Promise.resolve(Je(o)).then(function() {
                                r(e)
                            })
                        })
                    });
                    if (i && i.then) return i.then(function() {})
                })
            } catch (e) {
                return Promise.reject(e)
            }
        })
    }
    var Ye = function() {
            return JSON.parse('{\n    "tag":null,\n    "transaction":null,\n    "transactionStatus":null,\n    "transactionId":null,\n    "encodedData":null,\n    "events":null,\n    "account":null,\n    "block":null,\n    "blockHeader":null,\n    "latestBlock":null,\n    "collection":null\n}')
        },
        $e = function(e, t, n) {
            try {
                return Promise.resolve(Je().get("grpc.metadata", {})).then(function(r) {
                    return new Promise(function(o, u) {
                        i.grpc.unary(t, {
                            request: n,
                            host: e,
                            metadata: new i.grpc.Metadata(r),
                            onEnd: function(e) {
                                var t = e.statusMessage;
                                e.status === i.grpc.Code.OK ? o(e.message) : u(new Error(t))
                            }
                        })
                    })
                })
            } catch (e) {
                return Promise.reject(e)
            }
        };
    var Xe = function(e) {
            return Buffer.from(e, "hex")
        },
        Ze = function(e) {
            return Buffer.from(e.padStart(16, 0), "hex")
        },
        Qe = function(e) {
            return Buffer.from(e).toString("hex")
        },
        et = function(e) {
            return Buffer.from(JSON.stringify(e), "utf8")
        };

    function tt(e, t) {
        var n = Ye();
        return n.tag = e.tag, n.encodedData = JSON.parse(Buffer.from(t.getValue_asU8()).toString("utf8")), n
    }
    var nt = function(e) {
            return Buffer.from(e).toString("hex")
        },
        rt = function(e) {
            return Buffer.from(e.padStart(16, 0), "hex")
        };

    function ot(e, t) {
        var n = Ye();
        n.tag = e.tag;
        var r, i = t.getAccount(),
            u = (r = i.getContractsMap()) ? r.getEntryList().reduce(function(e, t) {
                var n;
                return s({}, e, ((n = {})[t[0]] = Buffer.from(t[1] || new UInt8Array).toString("utf8"), n))
            }, {}) : {};
        return n.account = {
            address: o.withPrefix(nt(i.getAddress_asU8())),
            balance: i.getBalance(),
            code: Buffer.from(i.getCode_asU8() || new UInt8Array).toString("utf8"),
            contracts: u,
            keys: i.getKeysList().map(function(e) {
                return {
                    index: e.getIndex(),
                    publicKey: nt(e.getPublicKey_asU8()),
                    signAlgo: e.getSignAlgo(),
                    hashAlgo: e.getHashAlgo(),
                    weight: e.getWeight(),
                    sequenceNumber: e.getSequenceNumber(),
                    revoked: e.getRevoked()
                }
            })
        }, n
    }
    var it = function(e) {
        return Buffer.from(e).toString("hex")
    };

    function ut(e, t) {
        var n = Ye();
        n.tag = e.tag;
        var r = t.getResultsList();
        return n.events = r.reduce(function(e, t) {
            var n = it(t.getBlockId_asU8()),
                r = t.getBlockHeight(),
                o = t.getBlockTimestamp().toDate().toISOString();
            return t.getEventsList().forEach(function(t) {
                e.push({
                    blockId: n,
                    blockHeight: r,
                    blockTimestamp: o,
                    type: t.getType(),
                    transactionId: it(t.getTransactionId_asU8()),
                    transactionIndex: t.getTransactionIndex(),
                    eventIndex: t.getEventIndex(),
                    payload: JSON.parse(Buffer.from(t.getPayload_asU8()).toString("utf8"))
                })
            }), e
        }, []), n
    }
    var ct = function(e) {
        return Buffer.from(e).toString("hex")
    };

    function at(e, t) {
        var n = t.getBlock(),
            r = n.getCollectionGuaranteesList(),
            o = n.getBlockSealsList(),
            i = n.getSignaturesList().map(ct),
            u = Ye();
        return u.tag = e.tag, u.block = {
            id: ct(n.getId_asU8()),
            parentId: ct(n.getParentId_asU8()),
            height: n.getHeight(),
            timestamp: n.getTimestamp().toDate().toISOString(),
            collectionGuarantees: r.map(function(e) {
                return {
                    collectionId: ct(e.getCollectionId_asU8()),
                    signatures: e.getSignaturesList().map(ct)
                }
            }),
            blockSeals: o.map(function(e) {
                return {
                    blockId: ct(e.getBlockId_asU8()),
                    executionReceiptId: ct(e.getExecutionReceiptId_asU8()),
                    executionReceiptSignatures: e.getExecutionReceiptSignaturesList().map(ct),
                    resultApprovalSignatures: e.getResultApprovalSignaturesList().map(ct)
                }
            }),
            signatures: i
        }, u
    }
    var st = function(e) {
        return Buffer.from(e).toString("hex")
    };

    function lt(e, t) {
        var n = t.getBlock(),
            r = Ye();
        return r.tag = e.tag, r.blockHeader = {
            id: st(n.getId_asU8()),
            parentId: st(n.getParentId_asU8()),
            height: n.getHeight(),
            timestamp: n.getTimestamp().toDate().toISOString()
        }, r
    }
    var ft = function(e) {
            return Buffer.from(e).toString("hex")
        },
        dt = function(e) {
            return Buffer.from(e).toString("hex")
        },
        mt = function(e) {
            return Buffer.from(e).toString("hex")
        },
        gt = function(e) {
            return Buffer.from(e).toString("hex")
        },
        pt = function(e, n) {
            void 0 === n && (n = {});
            try {
                var i = function(i) {
                        return n.node = i, Promise.resolve(e).then(function(i) {
                            switch (e = i, !0) {
                                case ue(e):
                                    return n.sendTransaction ? n.sendTransaction(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            var n = t.unary || $e;
                                            return Promise.resolve(e).then(function(i) {
                                                e = i;
                                                var u = new r.Transaction;
                                                u.setScript(Buffer.from(e.message.cadence, "utf8")), u.setGasLimit(e.message.computeLimit), u.setReferenceBlockId(e.message.refBlock ? Xe(e.message.refBlock) : null), u.setPayer(Ze(o.sansPrefix(e.accounts[e.payer].addr))), e.message.arguments.forEach(function(t) {
                                                    return u.addArguments(function(e) {
                                                        return Buffer.from(JSON.stringify(e), "utf8")
                                                    }(e.arguments[t].asArgument))
                                                }), e.authorizations.map(function(t) {
                                                    return e.accounts[t].addr
                                                }).reduce(function(e, t) {
                                                    return e.find(function(e) {
                                                        return e === t
                                                    }) ? e : [].concat(e, [t])
                                                }, []).forEach(function(e) {
                                                    return u.addAuthorizers(Ze(o.sansPrefix(e)))
                                                });
                                                var c = new r.Transaction.ProposalKey;
                                                c.setAddress(Ze(o.sansPrefix(e.accounts[e.proposer].addr))), c.setKeyId(e.accounts[e.proposer].keyId), c.setSequenceNumber(e.accounts[e.proposer].sequenceNum), u.setProposalKey(c);
                                                for (var a = 0, s = Object.values(e.accounts); a < s.length; a++) {
                                                    var l = s[a];
                                                    try {
                                                        if (!l.role.payer && null != l.signature) {
                                                            var f = new r.Transaction.Signature;
                                                            f.setAddress(Ze(o.sansPrefix(l.addr))), f.setKeyId(l.keyId), f.setSignature(Xe(l.signature)), u.addPayloadSignatures(f)
                                                        }
                                                    } catch (t) {
                                                        throw console.error("Trouble applying payload signature", {
                                                            acct: l,
                                                            ix: e
                                                        }), t
                                                    }
                                                }
                                                for (var d = 0, m = Object.values(e.accounts); d < m.length; d++) {
                                                    var g = m[d];
                                                    try {
                                                        if (g.role.payer && null != g.signature) {
                                                            var p = new r.Transaction.Signature;
                                                            p.setAddress(Ze(o.sansPrefix(g.addr))), p.setKeyId(g.keyId), p.setSignature(Xe(g.signature)), u.addEnvelopeSignatures(p)
                                                        }
                                                    } catch (t) {
                                                        throw console.error("Trouble applying envelope signature", {
                                                            acct: g,
                                                            ix: e
                                                        }), t
                                                    }
                                                }
                                                var h = new r.SendTransactionRequest;
                                                h.setTransaction(u);
                                                var v = Date.now();
                                                return Promise.resolve(n(t.node, r.AccessAPI.SendTransaction, h)).then(function(t) {
                                                    var n, r = Date.now(),
                                                        o = Ye();
                                                    return o.tag = e.tag, o.transactionId = (n = t.getId_asU8(), Buffer.from(n).toString("hex")), "undefined" != typeof window && window.dispatchEvent(new CustomEvent("FLOW::TX", {
                                                        detail: {
                                                            txId: o.transactionId,
                                                            delta: r - v
                                                        }
                                                    })), o
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case ce(e):
                                    return n.sendGetTransactionStatus ? n.sendGetTransactionStatus(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            var n = t.unary || $e;
                                            return Promise.resolve(e).then(function(o) {
                                                e = o;
                                                var i = new r.GetTransactionRequest;
                                                return i.setId(Buffer.from(e.transaction.id, "hex")), Promise.resolve(n(t.node, r.AccessAPI.GetTransactionResult, i)).then(function(t) {
                                                    var n = t.getEventsList(),
                                                        r = Ye();
                                                    return r.tag = e.tag, r.transactionStatus = {
                                                        status: t.getStatus(),
                                                        statusCode: t.getStatusCode(),
                                                        errorMessage: t.getErrorMessage(),
                                                        events: n.map(function(e) {
                                                            return {
                                                                type: e.getType(),
                                                                transactionId: (t = e.getTransactionId_asU8(), Buffer.from(t).toString("hex")),
                                                                transactionIndex: e.getTransactionIndex(),
                                                                eventIndex: e.getEventIndex(),
                                                                payload: JSON.parse(Buffer.from(e.getPayload_asU8()).toString("utf8"))
                                                            };
                                                            var t
                                                        })
                                                    }, r
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case ae(e):
                                    return n.sendGetTransaction ? n.sendGetTransaction(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            var n = t.unary || $e;
                                            return Promise.resolve(e).then(function(o) {
                                                e = o;
                                                var i = new r.GetTransactionRequest;
                                                return i.setId(Buffer.from(e.transaction.id, "hex")), Promise.resolve(n(t.node, r.AccessAPI.GetTransaction, i)).then(function(t) {
                                                    var n = Ye();
                                                    n.tag = e.tag;
                                                    var r, o = function(e) {
                                                            return {
                                                                address: Qe(e.getAddress_asU8()),
                                                                keyId: e.getKeyId(),
                                                                signature: Qe(e.getSignature_asU8())
                                                            }
                                                        },
                                                        i = t.getTransaction();
                                                    return n.transaction = {
                                                        script: Buffer.from(i.getScript_asU8()).toString("utf8"),
                                                        args: i.getArgumentsList().map(function(e) {
                                                            return JSON.parse(Buffer.from(e).toString("utf8"))
                                                        }),
                                                        referenceBlockId: Qe(i.getReferenceBlockId_asU8()),
                                                        gasLimit: i.getGasLimit(),
                                                        proposalKey: (r = i.getProposalKey(), {
                                                            address: Qe(r.getAddress_asU8()),
                                                            keyId: r.getKeyId(),
                                                            sequenceNumber: r.getSequenceNumber()
                                                        }),
                                                        payer: Qe(i.getPayer_asU8()),
                                                        authorizers: i.getAuthorizersList().map(Qe),
                                                        payloadSignatures: i.getPayloadSignaturesList().map(o),
                                                        envelopeSignatures: i.getEnvelopeSignaturesList().map(o)
                                                    }, n
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case ie(e):
                                    return n.sendExecuteScript ? n.sendExecuteScript(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            return Promise.resolve(e).then(function(n) {
                                                return e = n, Promise.resolve(e.block.id ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.ExecuteScriptAtBlockIDRequest;
                                                        o.setBlockId(Buffer.from(e.block.id, "hex"));
                                                        var i = Buffer.from(e.message.cadence, "utf8");
                                                        return e.message.arguments.forEach(function(t) {
                                                            return o.addArguments(et(e.arguments[t].asArgument))
                                                        }), o.setScript(i), Promise.resolve(n(t.node, r.AccessAPI.ExecuteScriptAtBlockID, o)).then(function(t) {
                                                            return tt(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t) : e.block.height ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.ExecuteScriptAtBlockHeightRequest;
                                                        o.setBlockHeight(Number(e.block.height));
                                                        var i = Buffer.from(e.message.cadence, "utf8");
                                                        return e.message.arguments.forEach(function(t) {
                                                            return o.addArguments(et(e.arguments[t].asArgument))
                                                        }), o.setScript(i), Promise.resolve(n(t.node, r.AccessAPI.ExecuteScriptAtBlockHeight, o)).then(function(t) {
                                                            return tt(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t) : function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.ExecuteScriptAtLatestBlockRequest,
                                                            i = Buffer.from(e.message.cadence, "utf8");
                                                        return e.message.arguments.forEach(function(t) {
                                                            return o.addArguments(et(e.arguments[t].asArgument))
                                                        }), o.setScript(i), Promise.resolve(n(t.node, r.AccessAPI.ExecuteScriptAtLatestBlock, o)).then(function(t) {
                                                            return tt(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t))
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case se(e):
                                    return n.sendGetAccount ? n.sendGetAccount(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            return Promise.resolve(e).then(function(n) {
                                                return e = n, Promise.resolve(null !== e.block.height ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            i = new r.GetAccountAtBlockHeightRequest;
                                                        return i.setBlockHeight(Number(e.block.height)), i.setAddress(rt(o.sansPrefix(e.account.addr))), Promise.resolve(n(t.node, r.AccessAPI.GetAccountAtBlockHeight, i)).then(function(t) {
                                                            return ot(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t) : function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            i = new r.GetAccountAtLatestBlockRequest;
                                                        return i.setAddress(rt(o.sansPrefix(e.account.addr))), Promise.resolve(n(t.node, r.AccessAPI.GetAccountAtLatestBlock, i)).then(function(t) {
                                                            return ot(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t))
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case le(e):
                                    return n.sendGetEvents ? n.sendGetEvents(e, n) : function(e, n) {
                                        void 0 === n && (n = {});
                                        try {
                                            return Promise.resolve(e).then(function(o) {
                                                var i = null !== (e = o).events.start,
                                                    u = Array.isArray(e.events.blockIds) && e.events.blockIds.length > 0;
                                                return t.invariant(i || u, "SendGetEventsError: Unable to determine which get events request to send. Either a block height range, or block IDs must be specified."), Promise.resolve(i ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.GetEventsForHeightRangeRequest;
                                                        return o.setType(e.events.eventType), o.setStartHeight(Number(e.events.start)), o.setEndHeight(Number(e.events.end)), Promise.resolve(n(t.node, r.AccessAPI.GetEventsForHeightRange, o)).then(function(t) {
                                                            return ut(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, n) : function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.GetEventsForBlockIDsRequest;
                                                        return o.setType(e.events.eventType), e.events.blockIds.forEach(function(e) {
                                                            return o.addBlockIds(Buffer.from(e, "hex"))
                                                        }), Promise.resolve(n(t.node, r.AccessAPI.GetEventsForBlockIDs, o)).then(function(t) {
                                                            return ut(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, n))
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case fe(e):
                                    return n.sendGetLatestBlock ? n.sendGetLatestBlock(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            return Promise.resolve(e).then(function(n) {
                                                e = n;
                                                var o = new r.GetLatestBlockRequest;
                                                return e.latestBlock && e.latestBlock.isSealed && (o.setIsSealed(e.latestBlock.isSealed), console.error("\n          %c@onflow/send Deprecation Notice\n          ========================\n\n          Operating upon data of the latestBlock field of the interaction object is deprecated and will no longer be recognized in future releases of @onflow/send.\n          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/send/WARNINGS.md#0001-Deprecating-latestBlock-field\n\n          =======================\n        ".replace(/\n\s+/g, "\n").trim(), "font-weight:bold;font-family:monospace;")), e.block && e.block.isSealed && o.setIsSealed(e.block.isSealed), Promise.resolve($e(t.node, r.AccessAPI.GetLatestBlock, o)).then(function(t) {
                                                    var n = t.getBlock(),
                                                        r = n.getCollectionGuaranteesList(),
                                                        o = n.getBlockSealsList(),
                                                        i = n.getSignaturesList(),
                                                        u = Ye();
                                                    return u.tag = e.tag, u.block = {
                                                        id: ft(n.getId_asU8()),
                                                        parentId: ft(n.getParentId_asU8()),
                                                        height: n.getHeight(),
                                                        timestamp: n.getTimestamp(),
                                                        collectionGuarantees: r.map(function(e) {
                                                            return {
                                                                collectionId: ft(e.getCollectionId_asU8()),
                                                                signatures: e.getSignaturesList()
                                                            }
                                                        }),
                                                        blockSeals: o.map(function(e) {
                                                            return {
                                                                blockId: ft(e.getBlockId_asU8()),
                                                                executionReceiptId: ft(e.getExecutionReceiptId_asU8()),
                                                                executionReceiptSignatures: e.getExecutionReceiptSignaturesList(),
                                                                resultApprovalSignatures: e.getResultApprovalSignaturesList()
                                                            }
                                                        }),
                                                        signatures: i
                                                    }, u
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case pe(e):
                                    return n.sendGetBlock ? n.sendGetBlock(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            return Promise.resolve(e).then(function(n) {
                                                var o = null !== (e = n).block.height;
                                                return Promise.resolve(null !== e.block.id ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.GetBlockByIDRequest;
                                                        return o.setId(Buffer.from(e.block.id, "hex")), Promise.resolve(n(t.node, r.AccessAPI.GetBlockByID, o)).then(function(t) {
                                                            return at(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t) : o ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.GetBlockByHeightRequest;
                                                        return o.setHeight(Number(e.block.height)), Promise.resolve(n(t.node, r.AccessAPI.GetBlockByHeight, o)).then(function(t) {
                                                            return at(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t) : function(e, t) {
                                                    try {
                                                        var n, o = t.unary || $e,
                                                            i = new r.GetLatestBlockRequest;
                                                        return null != (n = e.block) && n.isSealed && i.setIsSealed(e.block.isSealed), Promise.resolve(o(t.node, r.AccessAPI.GetLatestBlock, i)).then(function(t) {
                                                            return at(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t))
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case he(e):
                                    return n.sendGetBlockHeader ? n.sendGetBlockHeader(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            return Promise.resolve(e).then(function(n) {
                                                var o = null !== (e = n).block.height;
                                                return Promise.resolve(null !== e.block.id ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.GetBlockHeaderByIDRequest;
                                                        return o.setId(Buffer.from(e.block.id, "hex")), Promise.resolve(n(t.node, r.AccessAPI.GetBlockHeaderByID, o)).then(function(t) {
                                                            return lt(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t) : o ? function(e, t) {
                                                    try {
                                                        var n = t.unary || $e,
                                                            o = new r.GetBlockHeaderByHeightRequest;
                                                        return o.setHeight(Number(e.block.height)), Promise.resolve(n(t.node, r.AccessAPI.GetBlockHeaderByHeight, o)).then(function(t) {
                                                            return lt(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t) : function(e, t) {
                                                    try {
                                                        var n, o = t.unary || $e,
                                                            i = new r.GetLatestBlockHeaderRequest;
                                                        return null != (n = e.block) && n.isSealed && i.setIsSealed(e.block.isSealed), Promise.resolve(o(t.node, r.AccessAPI.GetLatestBlockHeader, i)).then(function(t) {
                                                            return lt(e, t)
                                                        })
                                                    } catch (e) {
                                                        return Promise.reject(e)
                                                    }
                                                }(e, t))
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case de(e):
                                    return n.sendGetBlockById ? n.sendGetBlockById(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            return Promise.resolve(e).then(function(n) {
                                                e = n;
                                                var o = new r.GetBlockByIDRequest;
                                                return o.setId(Buffer.from(e.block.id, "hex")), Promise.resolve($e(t.node, r.AccessAPI.GetBlockByID, o)).then(function(t) {
                                                    var n = t.getBlock(),
                                                        r = n.getCollectionGuaranteesList(),
                                                        o = n.getBlockSealsList(),
                                                        i = n.getSignaturesList(),
                                                        u = Ye();
                                                    return u.tag = e.tag, u.block = {
                                                        id: dt(n.getId_asU8()),
                                                        parentId: dt(n.getParentId_asU8()),
                                                        height: n.getHeight(),
                                                        timestamp: n.getTimestamp(),
                                                        collectionGuarantees: r.map(function(e) {
                                                            return {
                                                                collectionId: dt(e.getCollectionId_asU8()),
                                                                signatures: e.getSignaturesList()
                                                            }
                                                        }),
                                                        blockSeals: o.map(function(e) {
                                                            return {
                                                                blockId: dt(e.getBlockId_asU8()),
                                                                executionReceiptId: dt(e.getExecutionReceiptId_asU8()),
                                                                executionReceiptSignatures: e.getExecutionReceiptSignaturesList(),
                                                                resultApprovalSignatures: e.getResultApprovalSignaturesList()
                                                            }
                                                        }),
                                                        signatures: i
                                                    }, u
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case me(e):
                                    return n.sendGetBlockByHeight ? n.sendGetBlockByHeight(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            return Promise.resolve(e).then(function(n) {
                                                e = n;
                                                var o = new r.GetBlockByHeightRequest;
                                                return o.setHeight(Number(e.block.height)), Promise.resolve($e(t.node, r.AccessAPI.GetBlockByHeight, o)).then(function(t) {
                                                    var n = t.getBlock(),
                                                        r = n.getCollectionGuaranteesList(),
                                                        o = n.getBlockSealsList(),
                                                        i = n.getSignaturesList(),
                                                        u = Ye();
                                                    return u.tag = e.tag, u.block = {
                                                        id: mt(n.getId_asU8()),
                                                        parentId: mt(n.getParentId_asU8()),
                                                        height: n.getHeight(),
                                                        timestamp: n.getTimestamp(),
                                                        collectionGuarantees: r.map(function(e) {
                                                            return {
                                                                collectionId: mt(e.getCollectionId_asU8()),
                                                                signatures: e.getSignaturesList()
                                                            }
                                                        }),
                                                        blockSeals: o.map(function(e) {
                                                            return {
                                                                blockId: mt(e.getBlockId_asU8()),
                                                                executionReceiptId: mt(e.getExecutionReceiptId_asU8()),
                                                                executionReceiptSignatures: e.getExecutionReceiptSignaturesList(),
                                                                resultApprovalSignatures: e.getResultApprovalSignaturesList()
                                                            }
                                                        }),
                                                        signatures: i
                                                    }, u
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case ve(e):
                                    return n.sendGetCollection ? n.sendGetCollection(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            var n = t.unary || $e;
                                            return Promise.resolve(e).then(function(o) {
                                                e = o;
                                                var i = new r.GetCollectionByIDRequest;
                                                return i.setId(Buffer.from(e.collection.id, "hex")), Promise.resolve(n(t.node, r.AccessAPI.GetCollectionByID, i)).then(function(t) {
                                                    var n = t.getCollection(),
                                                        r = Ye();
                                                    return r.tag = e.tag, r.collection = {
                                                        id: gt(n.getId_asU8()),
                                                        transactionIds: n.getTransactionIdsList().map(gt)
                                                    }, r
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                case ge(e):
                                    return n.sendPing ? n.sendPing(e, n) : function(e, t) {
                                        void 0 === t && (t = {});
                                        try {
                                            var n = t.unary || $e;
                                            return Promise.resolve(e).then(function(o) {
                                                e = o;
                                                var i = new r.PingRequest;
                                                return Promise.resolve(n(t.node, r.AccessAPI.Ping, i)).then(function(t) {
                                                    var n = Ye();
                                                    return n.tag = e.tag, n
                                                })
                                            })
                                        } catch (e) {
                                            return Promise.reject(e)
                                        }
                                    }(e, n);
                                default:
                                    return e
                            }
                        })
                    },
                    u = n.node;
                return Promise.resolve(u ? i(u) : Promise.resolve(Je().get("accessNode.api")).then(i))
            } catch (e) {
                return Promise.reject(e)
            }
        };

    function ht(e) {
        return void 0 === e && (e = null), be([ee, function(t) {
            return t.block.isSealed = e, D(t)
        }])
    }

    function vt(e) {
        return be([V, function(t) {
            return t.account.addr = o.sansPrefix(e), D(t)
        }])
    }
    var yt, kt = function(e, t, n) {
            try {
                try {
                    return Promise.resolve(Number(e))
                } catch (e) {
                    throw new Error("Decode Number Error : " + n.join("."))
                }
            } catch (e) {
                return Promise.reject(e)
            }
        },
        bt = function(e) {
            return Promise.resolve(e)
        },
        Pt = function(e, t, n) {
            try {
                return Promise.resolve(e.fields.reduce(function(e, r) {
                    try {
                        return Promise.resolve(e).then(function(o) {
                            return e = o, Promise.resolve(Bt(r.value, t, [].concat(n, [r.name]))).then(function(t) {
                                return e[r.name] = t, e
                            })
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }, Promise.resolve({}))).then(function(n) {
                    var r = e.id && St(t, e.id);
                    return r ? Promise.resolve(r(n)) : n
                })
            } catch (e) {
                return Promise.reject(e)
            }
        },
        It = {
            UInt: kt,
            Int: kt,
            UInt8: kt,
            Int8: kt,
            UInt16: kt,
            Int16: kt,
            UInt32: kt,
            Int32: kt,
            UInt64: kt,
            Int64: kt,
            UInt128: kt,
            Int128: kt,
            UInt256: kt,
            Int256: kt,
            Word8: kt,
            Word16: kt,
            Word32: kt,
            Word64: kt,
            UFix64: bt,
            Fix64: bt,
            String: bt,
            Character: bt,
            Bool: bt,
            Address: bt,
            Void: function() {
                return Promise.resolve(null)
            },
            Optional: function(e, t, n) {
                return Promise.resolve(e ? Bt(e, t, n) : null)
            },
            Reference: function(e) {
                try {
                    return Promise.resolve({
                        address: e.address,
                        type: e.type
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
            },
            Array: function(e, t, n) {
                try {
                    return Promise.resolve(Promise.all(e.map(function(e) {
                        return new Promise(function(r) {
                            try {
                                return Promise.resolve(Bt(e, t, [].concat(n, [e.type]))).then(r)
                            } catch (e) {
                                return Promise.reject(e)
                            }
                        })
                    })))
                } catch (e) {
                    return Promise.reject(e)
                }
            },
            Dictionary: function(e, t, n) {
                try {
                    return Promise.resolve(e.reduce(function(e, r) {
                        try {
                            return Promise.resolve(e).then(function(o) {
                                return e = o, Promise.resolve(Bt(r.key, t, [].concat(n, [r.key]))).then(function(o) {
                                    return Promise.resolve(Bt(r.value, t, [].concat(n, [r.key]))).then(function(t) {
                                        return e[o] = t, e
                                    })
                                })
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, Promise.resolve({})))
                } catch (e) {
                    return Promise.reject(e)
                }
            },
            Event: Pt,
            Resource: Pt,
            Struct: Pt,
            Enum: Pt,
            Type: function(e) {
                try {
                    return Promise.resolve(e.staticType)
                } catch (e) {
                    return Promise.reject(e)
                }
            },
            Path: function(e) {
                try {
                    return Promise.resolve({
                        domain: e.domain,
                        identifier: e.identifier
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
            },
            Capability: function(e) {
                try {
                    return Promise.resolve({
                        path: e.path,
                        address: e.address,
                        borrowType: e.borrowType
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
            }
        },
        St = function(e, t) {
            var n = Object.keys(e).find(function(e) {
                return /^\/.*\/$/.test(e) ? new RegExp(e.substring(1, e.length - 1)).test(t) : e === t
            });
            return t && n && e[n]
        },
        Bt = function(e, t, n) {
            try {
                var r = St(t, e.type);
                if (!r) throw new Error("Undefined Decoder Error: " + e.type + "@" + n.join("."));
                return Promise.resolve(r(e.value, t, n))
            } catch (e) {
                return Promise.reject(e)
            }
        },
        wt = function(e, t, n) {
            void 0 === t && (t = {}), void 0 === n && (n = []);
            var r = s({}, It, t);
            return Promise.resolve(Bt(e, r, n))
        },
        At = function(e, t) {
            void 0 === t && (t = {});
            try {
                var n, r = s({}, It, t),
                    o = e.encodedData ? (n = 1, Promise.resolve(wt(e.encodedData, r))) : e.transactionStatus ? (n = 1, Promise.resolve(Promise.all(e.transactionStatus.events.map(function(e) {
                        try {
                            var t = e.eventIndex,
                                n = e.transactionIndex,
                                o = e.transactionId,
                                i = e.type;
                            return Promise.resolve(wt(e.payload, r)).then(function(e) {
                                return {
                                    type: i,
                                    transactionId: o,
                                    transactionIndex: n,
                                    eventIndex: t,
                                    data: e
                                }
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }))).then(function(t) {
                        return s({}, e.transactionStatus, {
                            events: t
                        })
                    })) : e.transaction ? (n = 1, e.transaction) : e.events ? (n = 1, Promise.resolve(Promise.all(e.events.map(function(e) {
                        try {
                            var t = e.eventIndex,
                                n = e.transactionIndex,
                                o = e.transactionId,
                                i = e.type,
                                u = e.blockTimestamp,
                                c = e.blockHeight,
                                a = e.blockId;
                            return Promise.resolve(wt(e.payload, r)).then(function(e) {
                                return {
                                    blockId: a,
                                    blockHeight: c,
                                    blockTimestamp: u,
                                    type: i,
                                    transactionId: o,
                                    transactionIndex: n,
                                    eventIndex: t,
                                    data: e
                                }
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    })))) : e.account ? (n = 1, e.account) : e.block ? (n = 1, e.block) : e.blockHeader ? (n = 1, e.blockHeader) : e.latestBlock ? (console.error("\n          %c@onflow/decode Deprecation Notice\n          ========================\n\n          Operating upon data of the latestBlock field of the response object is deprecated and will no longer be recognized in future releases of @onflow/decode.\n          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/decode/WARNINGS.md#0001-Deprecating-latestBlock-field\n\n          =======================\n        ".replace(/\n\s+/g, "\n").trim(), "font-weight:bold;font-family:monospace;"), n = 1, e.latestBlock) : e.transactionId ? (n = 1, e.transactionId) : e.collection ? (n = 1, e.collection) : void 0;
                return Promise.resolve(o && o.then ? o.then(function(e) {
                    return n ? e : null
                }) : n ? o : null)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        xt = function(e) {
            try {
                var n = function() {
                    if (ue(e) || ie(e)) {
                        var n = function() {
                                return t.invariant(Tt(r), "Cadence needs to be a string at this point."), Promise.resolve(Je().where(/^0x/).then(function(e) {
                                    return Object.entries(e).reduce(function(e, t) {
                                        return e.replace(t[0], t[1])
                                    }, r)
                                })).then(function(t) {
                                    e.message.cadence = t
                                })
                            },
                            r = Ie(e, "ix.cadence");
                        t.invariant(Et(r) || Tt(r), "Cadence needs to be a function or a string.");
                        var o = function() {
                            if (Et(r)) return Promise.resolve(r({})).then(function(e) {
                                r = e
                            })
                        }();
                        return o && o.then ? o.then(n) : n()
                    }
                }();
                return Promise.resolve(n && n.then ? n.then(function() {
                    return e
                }) : e)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        Et = function(e) {
            return "function" == typeof e
        },
        Tt = function(e) {
            return "string" == typeof e
        },
        jt = function(e) {
            try {
                if (ue(e) || ie(e))
                    for (var n = 0, r = Object.entries(e.arguments); n < r.length; n++) {
                        var o = r[n];
                        e.arguments[o[0]].asArgument = (t.invariant(null != typeof(i = o[1]).xform, "No type specified for argument: " + i.value), Nt(i.xform) ? i.xform(i.value) : Nt(i.xform.asArgument) ? i.xform.asArgument(i.value) : void t.invariant(!1, "Invalid Argument", i))
                    }
                return Promise.resolve(e)
            } catch (e) {
                return Promise.reject(e)
            }
            var i
        },
        Nt = function(e) {
            return "function" == typeof e
        },
        Gt = function(e) {
            return _t(Dt(Ht(e)))
        },
        Ot = function(e) {
            return _t(Dt(qt(e)))
        },
        Lt = function(e, t) {
            return Buffer.from(e.padStart(2 * t, 0), "hex")
        },
        Rt = (yt = Buffer.from("FLOW-V0.0-transaction").toString("hex"), Buffer.from(yt.padEnd(64, 0), "hex")).toString("hex"),
        _t = function(e) {
            return Rt + e
        },
        Ut = function(e) {
            return Lt(e, 8)
        },
        Ct = function(e) {
            return Buffer.from(JSON.stringify(e), "utf8")
        },
        Dt = function(e) {
            return c.encode(e).toString("hex")
        },
        Ht = function(e) {
            return zt(e), [(t = e.cadence, Buffer.from(t, "utf8")), e.arguments.map(Ct), (n = e.refBlock, Lt(n, 32)), e.computeLimit, Ut(e.proposalKey.address), e.proposalKey.keyId, e.proposalKey.sequenceNum, Ut(e.payer), e.authorizers.map(Ut)];
            var t, n
        },
        qt = function(e) {
            return Mt(e), [Ht(e), Ft(e)]
        },
        Ft = function(e) {
            var t = Kt(e);
            return e.payloadSigs.map(function(e) {
                return {
                    signerIndex: t.get(e.address),
                    keyId: e.keyId,
                    sig: e.sig
                }
            }).sort(function(e, t) {
                return e.signerIndex > t.signerIndex ? 1 : e.signerIndex < t.signerIndex ? -1 : e.keyId > t.keyId ? 1 : e.keyId < t.keyId ? -1 : void 0
            }).map(function(e) {
                return [e.signerIndex, e.keyId, (t = e.sig, Buffer.from(t, "hex"))];
                var t
            })
        },
        Kt = function(e) {
            var t = new Map,
                n = 0,
                r = function(e) {
                    t.has(e) || (t.set(e, n), n++)
                };
            return r(e.proposalKey.address), r(e.payer), e.authorizers.forEach(r), t
        },
        zt = function(e) {
            $t.forEach(function(t) {
                return en(e, t)
            }), Xt.forEach(function(t) {
                return en(e.proposalKey, t, "proposalKey")
            })
        },
        Mt = function(e) {
            Zt.forEach(function(t) {
                return en(e, t)
            }), e.payloadSigs.forEach(function(e, t) {
                Qt.forEach(function(n) {
                    return en(e, n, "payloadSigs", t)
                })
            })
        },
        Jt = function(e) {
            return "number" == typeof e
        },
        Wt = function(e) {
            return "string" == typeof e
        },
        Vt = function(e) {
            return null !== e && "object" == typeof e
        },
        Yt = function(e) {
            return Vt(e) && e instanceof Array
        },
        $t = [{
            name: "cadence",
            check: Wt
        }, {
            name: "arguments",
            check: Yt
        }, {
            name: "refBlock",
            check: Wt,
            defaultVal: "0"
        }, {
            name: "computeLimit",
            check: Jt
        }, {
            name: "proposalKey",
            check: Vt
        }, {
            name: "payer",
            check: Wt
        }, {
            name: "authorizers",
            check: Yt
        }],
        Xt = [{
            name: "address",
            check: Wt
        }, {
            name: "keyId",
            check: Jt
        }, {
            name: "sequenceNum",
            check: Jt
        }],
        Zt = [{
            name: "payloadSigs",
            check: Yt
        }],
        Qt = [{
            name: "address",
            check: Wt
        }, {
            name: "keyId",
            check: Jt
        }, {
            name: "sig",
            check: Wt
        }],
        en = function(e, t, n, r) {
            var o = t.name,
                i = t.check,
                u = t.defaultVal;
            if (null == e[o] && null != u && (e[o] = u), null == e[o]) throw nn(o, n, r);
            if (!i(e[o])) throw rn(o, n, r)
        },
        tn = function(e, t, n) {
            return t ? null == n ? t + "." + e : t + "." + n + "." + e : e
        },
        nn = function(e, t, n) {
            return new Error("Missing field " + tn(e, t, n))
        },
        rn = function(e, t, n) {
            return new Error("Invalid field " + tn(e, t, n))
        },
        on = function(e) {
            try {
                var t = function() {
                    if (ue(e)) return function(t, n) {
                        try {
                            var r = (o = un(e), i = Gt(ln(e)), Promise.resolve(Promise.all(o.map(an(e, i)))).then(function() {
                                var t = cn(e),
                                    n = Ot(s({}, ln(e), {
                                        payloadSigs: o.map(function(t) {
                                            return {
                                                address: e.accounts[t].addr,
                                                keyId: e.accounts[t].keyId,
                                                sig: e.accounts[t].signature
                                            }
                                        })
                                    }));
                                return Promise.resolve(Promise.all(t.map(an(e, n)))).then(function() {})
                            }))
                        } catch (e) {
                            return n(e)
                        }
                        var o, i;
                        return r && r.then ? r.then(void 0, n) : r
                    }(0, function(t) {
                        throw console.error("Signatures", t, {
                            ix: e
                        }), t
                    })
                }();
                return Promise.resolve(t && t.then ? t.then(function(t) {
                    return e
                }) : e)
            } catch (e) {
                return Promise.reject(e)
            }
        };

    function un(e) {
        var t = new Set(e.authorizations);
        return t.add(e.proposer), t.delete(e.payer), Array.from(t)
    }

    function cn(e) {
        var t = new Set([e.payer]);
        return Array.from(t)
    }

    function an(e, t) {
        return function(n) {
            try {
                var r = e.accounts[n];
                return null != r.signature ? Promise.resolve() : Promise.resolve(r.signingFunction(function(e, t, n) {
                    try {
                        return {
                            f_type: "Signable",
                            f_vsn: "1.0.1",
                            message: t,
                            addr: o.sansPrefix(e.addr),
                            keyId: e.keyId,
                            roles: e.role,
                            cadence: n.message.cadence,
                            args: n.message.arguments.map(function(e) {
                                return n.arguments[e].asArgument
                            }),
                            data: {},
                            interaction: n,
                            voucher: sn(n)
                        }
                    } catch (e) {
                        throw console.error("buildSignable", e), e
                    }
                }(r, t, e))).then(function(t) {
                    e.accounts[n].signature = t.signature
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }
    var sn = function(e) {
        return {
            cadence: e.message.cadence,
            refBlock: e.message.refBlock || null,
            computeLimit: e.message.computeLimit,
            arguments: e.message.arguments.map(function(t) {
                return e.arguments[t].asArgument
            }),
            proposalKey: {
                address: o.withPrefix(e.accounts[e.proposer].addr),
                keyId: e.accounts[e.proposer].keyId,
                sequenceNum: e.accounts[e.proposer].sequenceNum
            },
            payer: o.withPrefix(e.accounts[e.payer].addr),
            authorizers: e.authorizations.map(function(t) {
                return o.withPrefix(e.accounts[t].addr)
            }).reduce(function(e, t) {
                return e.find(function(e) {
                    return e === t
                }) ? e : [].concat(e, [t])
            }, []),
            payloadSigs: un(e).map(function(t) {
                return {
                    address: o.withPrefix(e.accounts[t].addr),
                    keyId: e.accounts[t].keyId,
                    sig: e.accounts[t].signature
                }
            }),
            envelopeSigs: cn(e).map(function(t) {
                return {
                    address: o.withPrefix(e.accounts[t].addr),
                    keyId: e.accounts[t].keyId,
                    sig: e.accounts[t].signature
                }
            })
        }
    };

    function ln(e) {
        return {
            cadence: e.message.cadence,
            refBlock: e.message.refBlock || null,
            computeLimit: e.message.computeLimit,
            arguments: e.message.arguments.map(function(t) {
                return e.arguments[t].asArgument
            }),
            proposalKey: {
                address: o.sansPrefix(e.accounts[e.proposer].addr),
                keyId: e.accounts[e.proposer].keyId,
                sequenceNum: e.accounts[e.proposer].sequenceNum
            },
            payer: o.sansPrefix(e.accounts[e.payer].addr),
            authorizers: e.authorizations.map(function(t) {
                return o.sansPrefix(e.accounts[t].addr)
            }).reduce(function(e, t) {
                return e.find(function(e) {
                    return e === t
                }) ? e : [].concat(e, [t])
            }, [])
        }
    }
    var fn = "undefined" != typeof Symbol ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";

    function dn(e, t, n) {
        if (!e.s) {
            if (n instanceof mn) {
                if (!n.s) return void(n.o = dn.bind(null, e, t));
                1 & t && (t = n.s), n = n.v
            }
            if (n && n.then) return void n.then(dn.bind(null, e, t), dn.bind(null, e, 2));
            e.s = t, e.v = n;
            var r = e.o;
            r && r(e)
        }
    }
    var mn = function() {
        function e() {}
        return e.prototype.then = function(t, n) {
            var r = new e,
                o = this.s;
            if (o) {
                var i = 1 & o ? t : n;
                if (i) {
                    try {
                        dn(r, 1, i(this.v))
                    } catch (e) {
                        dn(r, 2, e)
                    }
                    return r
                }
                return this
            }
            return this.o = function(e) {
                try {
                    var o = e.v;
                    1 & e.s ? dn(r, 1, t ? t(o) : o) : n ? dn(r, 1, n(o)) : dn(r, 2, o)
                } catch (e) {
                    dn(r, 2, e)
                }
            }, r
        }, e
    }();

    function gn(e) {
        return e instanceof mn && 1 & e.s
    }
    var pn = function(e) {
            try {
                var t = function() {
                    if (ue(e)) return function(t, n) {
                        try {
                            var r = Promise.resolve(hn(e, Object.values(e.accounts))).then(function() {
                                return Promise.resolve(hn(e, Object.values(e.accounts))).then(function() {})
                            })
                        } catch (e) {
                            return n(e)
                        }
                        return r && r.then ? r.then(void 0, n) : r
                    }(0, function(e) {
                        throw console.error("=== SAD PANDA ===\n\n", e, "\n\n=== SAD PANDA ==="), e
                    })
                }();
                return Promise.resolve(t && t.then ? t.then(function(t) {
                    return e
                }) : e)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        hn = function e(n, r, o, i) {
            void 0 === i && (i = 3);
            try {
                var u = function() {
                    o && (n.authorizations = n.authorizations.map(function(e) {
                        return e === o.tempId ? c : e
                    }).reduce(function(e, t) {
                        return Array.isArray(t) ? [].concat(e, t) : [].concat(e, [t])
                    }, []))
                };
                t.invariant(i, "Account Resolve Recursion Limit Exceeded", {
                    ix: n,
                    accounts: r
                });
                var c = [],
                    a = function(e, t, n) {
                        if ("function" == typeof e[fn]) {
                            var r, o, i, u = e[fn]();
                            if (function e(n) {
                                    try {
                                        for (; !(r = u.next()).done;)
                                            if ((n = t(r.value)) && n.then) {
                                                if (!gn(n)) return void n.then(e, i || (i = dn.bind(null, o = new mn, 2)));
                                                n = n.v
                                            }
                                        o ? dn(o, 1, n) : o = n
                                    } catch (e) {
                                        dn(o || (o = new mn), 2, e)
                                    }
                                }(), u.return) {
                                var c = function(e) {
                                    try {
                                        r.done || u.return()
                                    } catch (e) {}
                                    return e
                                };
                                if (o && o.then) return o.then(c, function(e) {
                                    throw c(e)
                                });
                                c()
                            }
                            return o
                        }
                        if (!("length" in e)) throw new TypeError("Object is not iterable");
                        for (var a = [], s = 0; s < e.length; s++) a.push(e[s]);
                        return function(e, t, n) {
                            var r, o, i = -1;
                            return function n(u) {
                                try {
                                    for (; ++i < e.length;)
                                        if ((u = t(i)) && u.then) {
                                            if (!gn(u)) return void u.then(n, o || (o = dn.bind(null, r = new mn, 2)));
                                            u = u.v
                                        }
                                    r ? dn(r, 1, u) : r = u
                                } catch (e) {
                                    dn(r || (r = new mn), 2, e)
                                }
                            }(), r
                        }(a, function(e) {
                            return t(a[e])
                        })
                    }(r, function(t) {
                        function r() {
                            function r() {
                                u.tempId != t.tempId && delete n.accounts[u.tempId]
                            }
                            var a = function() {
                                if (Array.isArray(t)) return Promise.resolve(e(n, t, u, i - 1)).then(function() {});
                                null != t.addr && null != t.keyId && (t.tempId = t.addr + "-" + t.keyId), n.accounts[t.tempId] = n.accounts[t.tempId] || t, n.accounts[t.tempId].role.proposer = n.accounts[t.tempId].role.proposer || t.role.proposer, n.accounts[t.tempId].role.payer = n.accounts[t.tempId].role.payer || t.role.payer, n.accounts[t.tempId].role.authorizer = n.accounts[t.tempId].role.authorizer || t.role.authorizer, n.accounts[t.tempId].role.proposer && n.proposer === u.tempId && (n.proposer = t.tempId), n.accounts[t.tempId].role.payer && n.payer === u.tempId && (n.payer = t.tempId), n.accounts[t.tempId].role.authorizer && (o ? c = Array.from(new Set([].concat(c, [t.tempId]))) : n.authorizations = n.authorizations.map(function(e) {
                                    return e === u.tempId ? t.tempId : e
                                }))
                            }();
                            return a && a.then ? a.then(r) : r()
                        }
                        var u = o || t,
                            a = function() {
                                if (vn(t.resolve)) return Promise.resolve(t.resolve(t, function(e, t) {
                                    try {
                                        return {
                                            f_type: "PreSignable",
                                            f_vsn: "1.0.1",
                                            roles: e.role,
                                            cadence: t.message.cadence,
                                            args: t.message.arguments.map(function(e) {
                                                return t.arguments[e].asArgument
                                            }),
                                            data: {},
                                            interaction: t,
                                            voucher: sn(t)
                                        }
                                    } catch (e) {
                                        throw console.error("buildPreSignable", e), e
                                    }
                                }(t, n))).then(function(e) {
                                    t = e
                                })
                            }();
                        return a && a.then ? a.then(r) : r()
                    });
                return Promise.resolve(a && a.then ? a.then(u) : u())
            } catch (e) {
                return Promise.reject(e)
            }
        },
        vn = function(e) {
            return "function" == typeof e
        },
        yn = function(e) {
            try {
                var t = Ie(e, "ix.validators", []);
                return Promise.resolve(be(e, t.map(function(e) {
                    return function(t) {
                        return e(t, {
                            Ok: D,
                            Bad: H
                        })
                    }
                })))
            } catch (e) {
                return Promise.reject(e)
            }
        },
        kn = function(e) {
            try {
                for (var t = 0, n = Object.keys(e.accounts); t < n.length; t++) {
                    var r = n[t];
                    e.accounts[r].addr = o.sansPrefix(e.accounts[r].addr)
                }
                return Promise.resolve(e)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        bn = function(e) {
            return e
        },
        Pn = function(e, t) {
            return void 0 === t && (t = bn),
                function(n) {
                    try {
                        var r = function(e) {
                                return ["\nAccounts:", {
                                    proposer: e.proposer,
                                    authorizations: e.authorizations,
                                    payer: e.payer
                                }, "\n\nDetails:", e.accounts].filter(Boolean)
                            },
                            o = function() {
                                var t;
                                (t = console).log.apply(t, ["debug[" + e + "] ---\n"].concat([].slice.call(arguments), ["\n\n\n---"]))
                            };
                        return Promise.resolve(Je.get("debug." + e)).then(function(e) {
                            var i = function() {
                                if (e) return Promise.resolve(t(n, o, r)).then(function() {})
                            }();
                            return i && i.then ? i.then(function() {
                                return n
                            }) : n
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
        },
        In = be([xt, Pn("cadence", function(e, t) {
            return t(e.message.cadence)
        }), jt, Pn("arguments", function(e, t) {
            return t(e.message.arguments, e.message)
        }), pn, Pn("accounts", function(e, t, n) {
            return t.apply(void 0, n(e))
        }), function(e) {
            try {
                var t = function() {
                    if (ue(e) && null == e.message.refBlock) return Promise.resolve(Je.first(["sdk.transport", "sdk.send"], pt)).then(function(t) {
                        return Promise.resolve(t(we([ht()])).then(At)).then(function(t) {
                            e.message.refBlock = t.id
                        })
                    })
                }();
                return Promise.resolve(t && t.then ? t.then(function() {
                    return e
                }) : e)
            } catch (e) {
                return Promise.reject(e)
            }
        }, function(e) {
            try {
                var n = function() {
                    if (ue(e)) return Promise.resolve(Je.first(["sdk.transport", "sdk.send"], pt)).then(function(n) {
                        var r = Object.values(e.accounts).find(function(e) {
                            return e.role.proposer
                        });
                        t.invariant(r, "Transactions require a proposer");
                        var o = function() {
                            if (null == r.sequenceNum) return Promise.resolve(we([vt(r.addr)])).then(function(t) {
                                return Promise.resolve(n(t).then(At).then(function(e) {
                                    return e.keys
                                }).then(function(e) {
                                    return e.find(function(e) {
                                        return e.index === r.keyId
                                    })
                                }).then(function(e) {
                                    return e.sequenceNumber
                                })).then(function(t) {
                                    e.accounts[r.tempId].sequenceNum = t
                                })
                            })
                        }();
                        if (o && o.then) return o.then(function() {})
                    })
                }();
                return Promise.resolve(n && n.then ? n.then(function() {
                    return e
                }) : e)
            } catch (e) {
                return Promise.reject(e)
            }
        }, on, Pn("signatures", function(e, t, n) {
            return t.apply(void 0, n(e))
        }), kn, yn, Pn("resolved", function(e, t) {
            return t(e)
        })]),
        Sn = function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = {});
            try {
                return Promise.resolve(Je.first(["sdk.transport", "sdk.send"], t.send || pt)).then(function(n) {
                    return Promise.resolve(Je.first(["sdk.resolve"], t.resolve || In)).then(function(r) {
                        return Array.isArray(e) && (e = be(O(), e)), Promise.resolve(r(e)).then(function(e) {
                            return n(e, t)
                        })
                    })
                })
            } catch (e) {
                return Promise.reject(e)
            }
        },
        Bn = function(e) {
            var t, n;

            function r(t) {
                var n, r = ("\n        Encode Message From Signable Error: Unable to determine message encoding for signer addresss: " + t + ". \n        Please ensure the address: " + t + " is intended to sign the given transaction as specified by the transaction signable.\n      ").trim();
                return (n = e.call(this, r) || this).name = "Unable To Determine Message Encoding For Signer Addresss", n
            }
            return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, f(t, n), r
        }(g(Error));

    function wn(e) {
        return Be("ix.validators", function(t) {
            return Array.isArray(t) ? t.push(e) : [e]
        })
    }

    function An(e) {
        return be([function(t) {
            return t.message.refBlock = e, D(t)
        }])
    }
    var xn = [],
        En = function(e) {
            return e
        },
        Tn = ["tempId"];

    function jn(e) {
        return ["SIGNATURE", e.addr, e.keyId].join(".")
    }

    function Nn(e) {
        return void 0 === e && (e = {}),
            function(t) {
                var n = s({}, t, e, {
                    signingFunction: e.signingFunction || t.signingFunction || function(e) {
                        return {
                            addr: n.addr,
                            keyId: n.keyId,
                            signature: jn(n)
                        }
                    }
                });
                return n
            }
    }
    var Gn = {
            proposer: !1,
            authorizer: !1,
            payer: !1
        },
        On = {
            __proto__: null,
            mockSend: function(e) {
                return void 0 === e && (e = En),
                    function(n) {
                        try {
                            return Promise.resolve(n).then(function(r) {
                                switch (n = r, !0) {
                                    case se(n):
                                        return function(e, n) {
                                            return void 0 === n && (n = 5), t.invariant(e.account, "mockAccountResponse(ix) -- ix.account is missing", e), t.invariant(e.account.addr, "mockAccountResponse(ix) -- ix.account.addr is missing", e), {
                                                account: {
                                                    addr: e.account.addr,
                                                    keys: Array.from({
                                                        length: n
                                                    }, function(e, t) {
                                                        return {
                                                            index: t,
                                                            sequenceNumber: 42
                                                        }
                                                    })
                                                }
                                            }
                                        }(n);
                                    case pe(n):
                                        return {
                                            tag: "GET_BLOCK",
                                            block: {
                                                id: "32"
                                            }
                                        };
                                    default:
                                        return e(n)
                                }
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }
            },
            authzFn: Nn,
            authzResolve: function(e) {
                return void 0 === e && (e = {}),
                    function(t) {
                        return s({}, t, {
                            tempId: e.tempId || "WITH_RESOLVE",
                            resolve: Nn(function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, Tn))
                        })
                    }
            },
            authzResolveMany: function(e) {
                return void 0 === e && (e = {}),
                    function(t) {
                        return s({}, t, {
                            tempId: e.tempId || "AUTHZ_RESOLVE_MANY",
                            resolve: function() {
                                return [e.proposer && Nn(e.proposer)({
                                    role: s({}, Gn, {
                                        proposer: !0
                                    })
                                })].concat(e.authorizations.map(Nn).map(function(e) {
                                    return e({
                                        role: s({}, Gn, {
                                            authorizer: !0
                                        })
                                    })
                                }), [e.payer && Nn(e.payer)({
                                    role: s({}, Gn, {
                                        payer: !0
                                    })
                                })]).filter(Boolean)
                            }
                        })
                    }
            },
            sig: jn,
            idof: function(e) {
                return e.addr + "-" + e.keyId
            },
            run: function(e) {
                return void 0 === e && (e = []), we([An("123")].concat(e)).then(In)
            }
        };
    Object.defineProperty(e, "cadence", {
        enumerable: !0,
        get: function() {
            return a.template
        }
    }), Object.defineProperty(e, "cdc", {
        enumerable: !0,
        get: function() {
            return a.template
        }
    }), e.TestUtils = On, e.VERSION = "0.0.54", e.account = function(e, t) {
        return Sn([vt(e)], t).then(At)
    }, e.arg = function(e, t) {
        return {
            value: e,
            xform: t
        }
    }, e.args = function(e) {
        return void 0 === e && (e = []), be(e.map(K))
    }, e.atBlockHeight = function(e) {
        return be([function(t) {
            return t.block.height = e, t
        }, wn(function(e) {
            if ("boolean" == typeof e.block.isSealed) throw new Error("Unable to specify both block height and isSealed.");
            if (e.block.id) throw new Error("Unable to specify both block height and block id.");
            return e
        })])
    }, e.atBlockId = function(e) {
        return be([function(t) {
            return t.block.id = e, D(t)
        }, wn(function(e, t) {
            var n = t.Ok,
                r = t.Bad;
            return se(e) ? r(e, "Unable to specify a block id with a Get Account interaction.") : "boolean" == typeof e.block.isSealed ? r(e, "Unable to specify both block id and isSealed.") : e.block.height ? r(e, "Unable to specify both block id and block height.") : n(e)
        })])
    }, e.authorization = function(e, t, n, r) {
        return {
            addr: e,
            signingFunction: t,
            keyId: n,
            sequenceNum: r
        }
    }, e.authorizations = function(e) {
        return void 0 === e && (e = []), be(e.map(function(e) {
            return F(e, {
                role: j
            })
        }))
    }, e.build = we, e.config = Je, e.createSignableVoucher = sn, e.decode = function(e) {
        try {
            return Promise.resolve(Je().where(/^decoder\./)).then(function(t) {
                var n = Object.entries(t).map(function(e) {
                    var t = e[0],
                        n = e[1];
                    return [t = "/" + t.replace(/^decoder\./, "") + "$/", n]
                });
                return At(e, Object.fromEntries(n))
            })
        } catch (e) {
            return Promise.reject(e)
        }
    }, e.destroy = function(e) {
        return function(t) {
            return delete t.assigns[e], D(t)
        }
    }, e.encodeMessageFromSignable = function(e, t) {
        var n, r, i = (n = e.voucher, (r = new Set(n.authorizers)).add(n.proposalKey.address), r.delete(n.payer), Array.from(r).map(o.withPrefix)),
            u = function(e) {
                var t = new Set([e.payer]);
                return Array.from(t).map(o.withPrefix)
            }(e.voucher),
            c = i.includes(o.withPrefix(t)),
            a = u.includes(o.withPrefix(t));
        if (!c && !a) throw new Bn(t);
        var l = {
            cadence: e.voucher.cadence,
            refBlock: e.voucher.refBlock,
            computeLimit: e.voucher.computeLimit,
            arguments: e.voucher.arguments,
            proposalKey: s({}, e.voucher.proposalKey, {
                address: o.sansPrefix(e.voucher.proposalKey.address)
            }),
            payer: o.sansPrefix(e.voucher.payer),
            authorizers: e.voucher.authorizers.map(o.sansPrefix),
            payloadSigs: e.voucher.payloadSigs.map(function(e) {
                return s({}, e, {
                    address: o.sansPrefix(e.address)
                })
            })
        };
        return c ? Gt(l) : Ot(l)
    }, e.get = Ie, e.getAccount = vt, e.getBlock = ht, e.getBlockByHeight = function(e) {
        return console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n\n    The getBlockByHeight builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0003-deprecate-get-block-by-height-builder\n\n    ============================\n  ", "font-weight:bold;font-family:monospace;"), be([Z, function(t) {
            return t.block.height = e, D(t)
        }])
    }, e.getBlockById = function(e) {
        return console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n\n    The getBlockById builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0004-deprecate-get-block-by-id-builder\n\n    ============================\n  ", "font-weight:bold;font-family:monospace;"), be([X, function(t) {
            return t.block.ids = [e], D(t)
        }])
    }, e.getBlockHeader = function(e) {
        return void 0 === e && (e = null), be([te, function(t) {
            return t.block.isSealed = e, D(t)
        }])
    }, e.getCollection = function(e) {
        return void 0 === e && (e = null), be([ne, function(t) {
            return t.collection.id = e, t
        }])
    }, e.getEvents = function(e, t, n) {
        return void 0 === t && void 0 === n || console.warn("\n      %cFCL/SDK Deprecation Notice\n      ============================\n  \n      Passing a start and end into getEnvents has been deprecated and will not be supported in future versions of the Flow JS-SDK/FCL.\n      You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0005-deprecate-start-end-get-events-builder\n  \n      ============================\n    ", "font-weight:bold;font-family:monospace;"), be([Y, function(r) {
            return r.events.eventType = e, r.events.start = t, r.events.end = n, D(r)
        }])
    }, e.getEventsAtBlockHeightRange = function(e, t, n) {
        return be([Y, function(r) {
            return r.events.eventType = e, r.events.start = t, r.events.end = n, D(r)
        }])
    }, e.getEventsAtBlockIds = function(e, t) {
        return void 0 === t && (t = []), be([Y, function(n) {
            return n.events.eventType = e, n.events.blockIds = t, D(n)
        }])
    }, e.getLatestBlock = function(e) {
        return void 0 === e && (e = !1), console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n\n    The getLatestBlock builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0006-deprecate-get-latest-block-builder\n\n    ============================\n  ", "font-weight:bold;font-family:monospace;"), be([$, function(t) {
            return t.block.isSealed = e, D(t)
        }])
    }, e.getTransaction = function(e) {
        return be([W, function(t) {
            return t.transaction.id = e, D(t)
        }])
    }, e.getTransactionStatus = function(e) {
        return be([J, function(t) {
            return t.transaction.id = e, D(t)
        }])
    }, e.interaction = O, e.invariant = function e() {
        var t = [].slice.call(arguments);
        if (t.length > 1) {
            var n = t,
                r = n[0],
                o = n[1];
            return e(function(e, t) {
                var n = t.Bad;
                return r ? (0, t.Ok)(e) : n(e, o)
            })
        }
        var i = t[0];
        return function(e) {
            return i(e, {
                Ok: D,
                Bad: H
            })
        }
    }, e.isBad = ye, e.isGetAccount = se, e.isGetBlock = pe, e.isGetBlockByHeight = me, e.isGetBlockById = de, e.isGetBlockHeader = he, e.isGetCollection = ve, e.isGetEvents = le, e.isGetLatestBlock = fe, e.isGetTransaction = ae, e.isGetTransactionStatus = ce, e.isOk = function(e) {
        return "OK" === e.status
    }, e.isPing = ge, e.isScript = ie, e.isTransaction = ue, e.isUnknown = oe, e.latestBlock = function() {
        var e = [].slice.call(arguments),
            t = e[1] || ("object" == typeof e[0] ? e[0] : void 0),
            n = "boolean" == typeof e[0] ? e[0] : void 0;
        return "object" == typeof e[0] && console.warn("\n      %cFCL/SDK Deprecation Notice\n      ============================\n  \n      Passing options as the first arguement to the latestBlock function has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n      You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0007-deprecate-opts-first-arg-latest-block\n  \n      ============================\n    ", "font-weight:bold;font-family:monospace;"), Sn([ht(n)], t).then(At)
    }, e.limit = function(e) {
        return function(t) {
            return t.message.computeLimit = e, t
        }
    }, e.param = function(e) {
        return t = {
            name: "param",
            transitionsPath: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params"
        }, void console.warn("\n    %cFCL/SDK Deprecation Notice\n    ============================\n    The " + t.name + " builder has been deprecated and will be removed in future versions of the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: " + t.transitionsPath + "\n    ============================\n  ", "font-weight:bold;font-family:monospace;");
        var t
    }, e.params = function(e) {
        return t = {
            name: "params",
            transitionsPath: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params"
        }, void console.error("\n    %cFCL/SDK Deprecation Notice\n    ============================\n    The " + t.name + " builder has been removed from the Flow JS-SDK/FCL.\n    You can learn more (including a guide on common transition paths) here: " + t.transitionsPath + "\n    ============================\n  ", "font-weight:bold;font-family:monospace;");
        var t
    }, e.payer = function(e) {
        try {
            return Promise.resolve(F(e, {
                role: "payer"
            }))
        } catch (e) {
            return Promise.reject(e)
        }
    }, e.ping = function() {
        return Q
    }, e.pipe = be, e.proposer = function(e) {
        try {
            return Promise.resolve(F(e, {
                role: "proposer"
            }))
        } catch (e) {
            return Promise.reject(e)
        }
    }, e.put = Se, e.ref = An, e.resolve = In, e.resolveAccounts = pn, e.resolveArguments = jt, e.resolveCadence = xt, e.resolveFinalNormalization = kn, e.resolveProposerSequenceNumber = function(e) {
        var t = e.node;
        return function(e) {
            try {
                return ue(e) ? e.accounts[e.proposer].sequenceNum ? Promise.resolve(D(e)) : Promise.resolve(we([vt(e.accounts[e.proposer].addr)])).then(function(n) {
                    return Promise.resolve(pt(n, {
                        node: t
                    })).then(function(t) {
                        return Promise.resolve(At(t)).then(function(t) {
                            return e.accounts[e.proposer].sequenceNum = t.keys[e.accounts[e.proposer].keyId].sequenceNumber, D(e)
                        })
                    })
                }) : Promise.resolve(D(e))
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }, e.resolveRefBlockId = function(e) {
        return function(t) {
            try {
                return ue(t) ? t.message.refBlock ? Promise.resolve(D(t)) : Promise.resolve(function(e) {
                    try {
                        var t;
                        return Promise.resolve(be(O(), [ht()])).then(function(n) {
                            return t = n, Promise.resolve(pt(t, e)).then(function(e) {
                                return t = e, Promise.resolve(At(t)).then(function(e) {
                                    return (t = e).id
                                })
                            })
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }(e)).then(function(e) {
                    return t.message.refBlock = e, D(t)
                }) : Promise.resolve(D(t))
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }, e.resolveSignatures = on, e.resolveValidators = yn, e.script = function() {
        return be([z, Se("ix.cadence", a.template.apply(void 0, [].slice.call(arguments)))])
    }, e.send = Sn, e.transaction = function() {
        return be([M, Se("ix.cadence", a.template.apply(void 0, [].slice.call(arguments))), function(e) {
            return e.message.computeLimit = e.message.computeLimit || 10, e.message.refBlock = e.message.refBlock || null, e.authorizations = e.authorizations || xn, D(e)
        }])
    }, e.update = Be, e.validator = wn, e.why = function(e) {
        return e.reason
    }
});


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).types={})}(this,function(e){var t=function(e,t,n){return{label:e,asArgument:t,asInjection:n}},n=function(e){return Array.isArray(e)},r=function(e){return"object"==typeof e},u=function(e){return null==e},i=function(e){return"number"==typeof e},o=function(e){return Number.isInteger(e)},f=function(e){return"string"==typeof e},c=function(e){throw new Error("Type Error: "+e)},a=t("Identity",function(e){return e},function(e){return e}),p=t("UInt",function(e){if(i(e)&&o(e))return{type:"UInt",value:e.toString()};c("Expected Positive Integer for type Unsigned Int")},function(e){return e}),d=t("Int",function(e){if(i(e)&&o(e))return{type:"Int",value:e.toString()};c("Expected Integer for type Int")},function(e){return e}),l=t("UInt8",function(e){if(i(e)&&o(e))return{type:"UInt8",value:e.toString()};c("Expected integer for UInt8")},function(e){return e}),s=t("Int8",function(e){if(i(e)&&o(e))return{type:"Int8",value:e.toString()};c("Expected positive integer for Int8")},function(e){return e}),g=t("UInt16",function(e){if(i(e)&&o(e))return{type:"UInt16",value:e.toString()};c("Expected integer for UInt16")},function(e){return e}),v=t("Int16",function(e){if(i(e)&&o(e))return{type:"Int16",value:e.toString()};c("Expected positive integer for Int16")},function(e){return e}),y=t("UInt32",function(e){if(i(e)&&o(e))return{type:"UInt32",value:e.toString()};c("Expected integer for UInt32")},function(e){return e}),m=t("Int32",function(e){if(i(e)&&o(e))return{type:"Int32",value:e.toString()};c("Expected positive integer for Int32")},function(e){return e}),I=t("UInt64",function(e){if(i(e)&&o(e))return{type:"UInt64",value:e.toString()};c("Expected integer for UInt64")},function(e){return e}),x=t("Int64",function(e){if(i(e)&&o(e))return{type:"Int64",value:e.toString()};c("Expected positive integer for Int64")},function(e){return e}),U=t("UInt128",function(e){if(i(e)&&o(e))return{type:"UInt128",value:e.toString()};c("Expected integer for UInt128")},function(e){return e}),E=t("Int128",function(e){if(i(e)&&o(e))return{type:"Int128",value:e.toString()};c("Expected positive integer for Int128")},function(e){return e}),h=t("UInt256",function(e){if(i(e)&&o(e))return{type:"UInt256",value:e.toString()};c("Expected integer for UInt256")},function(e){return e}),b=t("Int256",function(e){if(i(e)&&o(e))return{type:"Int256",value:e.toString()};c("Expected integer for Int256")},function(e){return e}),S=t("Word8",function(e){if(i(e)&&o(e))return{type:"Word8",value:e.toString()};c("Expected positive number for Word8")},function(e){return e}),A=t("Word16",function(e){if(i(e)&&o(e))return{type:"Word16",value:e.toString()};c("Expected positive number for Word16")},function(e){return e}),F=t("Word32",function(e){if(i(e)&&o(e))return{type:"Word32",value:e.toString()};c("Expected positive number for Word32")},function(e){return e}),W=t("Word64",function(e){if(i(e)&&o(e))return{type:"Word64",value:e.toString()};c("Expected positive number for Word64")},function(e){return e}),w=function(){console.error("\n          %c@onflow/types Deprecation Notice\n          ========================\n\n          Passing in Numbers as values for Fix64 and UFix64 types is deprecated and will cease to work in future releases of @onflow/types.\n          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0001-[U]Fix64-as-Number\n\n          =======================\n        ".replace(/\n\s+/g,"\n").trim(),"font-weight:bold;font-family:monospace;")},j=t("UFix64",function(e){if(f(e)){var t=e.split(".");return 2!==t.length&&c("Expected one decimal but found "+t.length+" in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),(0==t[1].length||t[1].length>8)&&c("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found "+t[1].length+" digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),{type:"UFix64",value:e}}if(i(e))return w(),{type:"UFix64",value:e.toString()};c("Expected String for UFix64")},function(e){return e}),k=t("Fix64",function(e){if(f(e)){var t=e.split(".");return 2!==t.length&&c("Expected one decimal but found "+t.length+" in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),(0==t[1].length||t[1].length>8)&&c("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found "+t[1].length+" digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),{type:"Fix64",value:e}}if(i(e))return w(),{type:"Fix64",value:e.toString()};c("Expected String for Fix64")},function(e){return e}),R=t("String",function(e){if(f(e))return{type:"String",value:e};c("Expected String for type String")},function(e){return e}),O=t("Character",function(e){if(f(e))return{type:"Character",value:e};c("Expected Character for type Character")},function(e){return e}),N=t("Bool",function(e){if("boolean"==typeof e)return{type:"Bool",value:e};c("Expected Boolean for type Bool")},function(e){return e}),B=t("Address",function(e){if(f(e))return{type:"Address",value:e};c("Expected Address for type Address")},function(e){return e}),C=t("Void",function(e){if(!e||u(e))return{type:"Void"};c("Expected Void for type Void")},function(e){return e}),D=t("Reference",function(e){if(r(e))return{type:"Reference",value:e};c("Expected Object for type Reference")},function(e){return e}),V=function(e){return void 0===e&&(e=[]),t("Array",function(t){return{type:"Array",value:n(e)?e.map(function(e,n){return e.asArgument(t[n])}):t.map(function(t){return e.asArgument(t)})}},function(e){return e})};e.Address=B,e.Array=V,e.Bool=N,e.Character=O,e.Dictionary=function(e){return void 0===e&&(e=[]),t("Dictionary",function(t){if(r(t))return{type:"Dictionary",value:n(e)?e.map(function(e,n){return{key:e.key.asArgument(t[n].key),value:e.value.asArgument(t[n].value)}}):n(t)?t.map(function(t){return{key:e.key.asArgument(t.key),value:e.value.asArgument(t.value)}}):[{key:e.key.asArgument(t.key),value:e.value.asArgument(t.value)}]};c("Expected Object for type Dictionary")},function(e){return e})},e.Event=function(e,u){return void 0===u&&(u=[]),t("Event",function(t){if(r(t))return{type:"Event",value:{id:e,fields:n(u)?u.map(function(e,n){return{name:t.fields[n].name,value:e.value.asArgument(t.fields[n].value)}}):t.fields.map(function(e){return{name:e.name,value:u.value.asArgument(e.value)}})}};c("Expected Object for type Event")},function(e){return e})},e.Fix64=k,e.Identity=a,e.Int=d,e.Int128=E,e.Int16=v,e.Int256=b,e.Int32=m,e.Int64=x,e.Int8=s,e.Optional=function(e){return t("Optional",function(t){return{type:"Optional",value:u(t)?null:e.asArgument(t)}},function(e){return e})},e.Reference=D,e.Resource=function(e,u){return void 0===u&&(u=[]),t("Resource",function(t){if(r(t))return{type:"Resource",value:{id:e,fields:n(u)?u.map(function(e,n){return{name:t.fields[n].name,value:e.value.asArgument(t.fields[n].value)}}):t.fields.map(function(e){return{name:e.name,value:u.value.asArgument(e.value)}})}};c("Expected Object for type Resource")},function(e){return e})},e.String=R,e.Struct=function(e,u){return void 0===u&&(u=[]),t("Struct",function(t){if(r(t))return{type:"Struct",value:{id:e,fields:n(u)?u.map(function(e,n){return{name:t.fields[n].name,value:e.value.asArgument(t.fields[n].value)}}):t.fields.map(function(e){return{name:e.name,value:u.value.asArgument(e.value)}})}};c("Expected Object for type Struct")},function(e){return e})},e.UFix64=j,e.UInt=p,e.UInt128=U,e.UInt16=g,e.UInt256=h,e.UInt32=y,e.UInt64=I,e.UInt8=l,e.Void=C,e.Word16=A,e.Word32=F,e.Word64=W,e.Word8=S,e._Array=V});


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@onflow/sdk"),require("@onflow/util-invariant"),require("@onflow/types"),require("@onflow/util-actor"),require("@onflow/util-address"),require("@onflow/rlp"),require("@onflow/util-uid"),require("@onflow/util-template")):"function"==typeof define&&define.amd?define(["exports","@onflow/sdk","@onflow/util-invariant","@onflow/types","@onflow/util-actor","@onflow/util-address","@onflow/rlp","@onflow/util-uid","@onflow/util-template"],t):t((e||self).fcl={},e.sdk,e.utilInvariant,e.t$1,e.utilActor,e.utilAddress,e.rlp,e.utilUid,e.utilTemplate)}(this,function(e,t,n,r,i,o,u,a,s){function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var l=c(t),f=c(r),d=c(u);t.config().put("accessNode.api","http://localhost:8080").put("challenge.handshake","http://localhost:8700/authenticate");var p=function(e){return function(t){return typeof t===e}},h=function(e){return null!=e},m=p("object"),v=p("string"),y=p("function"),g=p("number");function P(e){return y(e)?e(l.arg,f):[]}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var S={f_type:"Service",f_vsn:"1.0.0"},w={f_type:"Identity",f_vsn:"1.0.0"},O={f_type:"USER",f_vsn:"1.0.0"},I={f_type:"PollingResponse",f_vsn:"1.0.0"},R={f_type:"CompositeSignature",f_vsn:"1.0.0"};function A(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({old:e},S,{type:"frame",endpoint:e.endpoint,params:e.params||{},data:e.data||{}})}}function k(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},S,{type:"back-channel-rpc",endpoint:e.endpoint,method:e.method,params:e.params||{},data:e.data||{}})}}var C={"back-channel-rpc":k,"pre-authz":function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},S,{type:e.type,uid:e.id,endpoint:e.endpoint,method:e.method,identity:b({},w,{address:o.withPrefix(e.addr),keyId:e.keyId}),params:e.params,data:e.data})}},authz:function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},S,{type:e.type,uid:e.id,endpoint:e.endpoint,method:e.method,identity:b({},w,{address:o.withPrefix(e.addr),keyId:e.keyId}),params:e.params,data:e.data})}},authn:function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},S,{type:e.type,uid:e.id,endpoint:e.authn,id:e.pid,provider:{address:o.withPrefix(e.addr),name:e.name,icon:e.icon}})}},frame:A,"open-id":function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return null}},"user-signature":function(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:throw new Error("Invalid user-signature service")}}};function T(e){return d.encode([e.provider.address||e.provider.name||"UNSPECIFIED",e.id]).toString("hex")}function U(e,t){return void 0===e&&(e=[]),e.find(function(e){return e.type===t})}function N(e){var t=new URL(e.endpoint);if(t.searchParams.append("l6n",window.location.origin),null!=e.params)for(var n=0,r=Object.entries(e.params||{});n<r.length;n++){var i=r[n];t.searchParams.append(i[0],i[1])}return t}function x(e,t){void 0===t&&(t={});var n=t.method||"POST",r="GET"===n?void 0:JSON.stringify(t.data||e.data||{});return fetch(N(e),{method:n,headers:b({},e.headers||{},t.headers||{},{"Content-Type":"application/json"}),body:r}).then(function(e){return e.json()})}function B(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},I,{status:e.status,reason:e.reason,data:e.compositeSignature||e.data||{},updates:k(e.authorizationUpdates),local:A((e.local||[])[0])})}}var D="FCL_IFRAME",_=function(){},L=new Set(["monetizationstart","monetizationpending","monetizationprogress","monetizationstop"]);function z(e,t){if(void 0===t&&(t={}),null==e)return{send:_,close:_};var r=t.onClose||_,i=t.onMessage||_,o=t.onReady||_,u=t.onResponse||_;window.addEventListener("message",l);var a=function(e){n.invariant(!document.getElementById(D),"Attempt at triggering multiple Frames",{src:e});var t=document.createElement("iframe");return t.src=e,t.id=D,t.allow="usb *; hid *",t.frameBorder="0",t.style.cssText="\n  position:fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 100vw;\n  display:block;\n  background:rgba(0,0,0,0.25);\n  z-index: 2147483647;\n  box-sizing: border-box;\n",document.body.append(t),[t,function(){document.getElementById(D)&&document.getElementById(D).remove()}]}(N(e)),s=a[0],c=a[1];return{send:d,close:f};function l(e){try{if("object"!=typeof e.data)return;if(L.has(e.data.type))return;"FCL:FRAME:CLOSE"===e.data.type&&f(),"FCL:FRAME:READY"===e.data.type&&o(e,{send:d,close:f}),"FCL:FRAME:RESPONSE"===e.data.type&&u(e,{send:d,close:f}),i(e,{send:d,close:f}),"FCL::CHALLENGE::RESPONSE"===e.data.type&&u(e,{send:d,close:f}),"FCL::AUTHZ_READY"===e.data.type&&o(e,{send:d,close:f}),"FCL::CHALLENGE::CANCEL"===e.data.type&&f(),"FCL::CANCEL"===e.data.type&&f()}catch(e){console.error("Frame Callback Error",e),f()}}function f(){try{window.removeEventListener("message",l),c(),r()}catch(e){console.error("Frame Close Error",e)}}function d(e){try{s.contentWindow.postMessage(JSON.parse(JSON.stringify(e||{})),"*")}catch(t){console.error("Frame Send Error",e,t)}}}var F,H=function e(t,r){void 0===r&&(r=function(){return!0});try{if(n.invariant(t,"Missing Polling Service",{service:t}),!r())throw new Error("Externally Halted");return Promise.resolve(x(t,{method:q(t)}).then(B)).then(function(t){switch(t.status){case"APPROVED":return t.data;case"DECLINED":throw new Error("Declined: "+(t.reason||"No reason supplied."));default:return Promise.resolve(new Promise(function(e){return setTimeout(e,500)})).then(function(){return e(t.updates,r)})}})}catch(e){return Promise.reject(e)}},M={"HTTP/GET":"GET","HTTP/POST":"POST"},q=function(e){return n.invariant(M[e.method],"Invalid Service Method for type back-channel-rpc",{service:e}),M[e.method]},J=function(e,t,n){try{return t.data=e.data,Promise.resolve(x(e,{data:t}).then(B)).then(function(t){if("APPROVED"===t.status)return t.data;if("DECLINED"===t.status)throw new Error("Declined: "+(t.reason||"No reason supplied."));if("PENDING"===t.status){var n=!0,r=z(t.local,{onClose:function(){n=!1}}).close;return H(t.updates,function(){return n}).then(function(e){return r(),e}).catch(function(e){throw console.error(e),r(),e})}throw console.error("Auto Decline: Invalid Response",{service:e,resp:t}),new Error("Auto Decline: Invalid Response")})}catch(e){return Promise.reject(e)}},K=function(e,t,n){void 0===n&&(n={});try{try{return Promise.resolve(G[e.method](e,t,n))}catch(r){throw console.error("execService(service, msg)",r,{service:e,msg:t,opts:n}),r}}catch(e){return Promise.reject(e)}},G={"HTTP/RPC":J,"HTTP/POST":J,"IFRAME/RPC":function(e,t,n){return new Promise(function(r,i){var o=a.uid(),u=n.includeOlderJsonRpcCall;t.data=e.data,z(e,{onReady:function(n,r){var i=r.send;try{i({type:"FCL:FRAME:READY:RESPONSE",body:t,service:{params:e.params,data:e.data}}),u&&i({jsonrpc:"2.0",id:o,method:"fcl:sign",params:[t,e.params]})}catch(e){throw e}},onResponse:function(e,t){var n=t.close;try{if("object"!=typeof e.data)return;var o=B(e.data);switch(o.status){case"APPROVED":r(o.data),n();break;case"DECLINED":i("Declined: "+(o.reason||"No reason supplied")),n();break;default:i("Declined: No reason supplied"),n()}}catch(e){throw console.error("execIframeRPC onResponse error",e),e}},onMessage:function(e,t){var n=t.close;try{if("object"!=typeof e.data)return;if("2.0"!==e.data.jsonrpc)return;if(e.data.id!==o)return;var u=B(e.data.result);switch(u.status){case"APPROVED":r(u.data),n();break;case"DECLINED":i("Declined: "+(u.reason||"No reason supplied")),n();break;default:i("Declined: No reason supplied"),n()}}catch(e){throw console.error("execIframeRPC onMessage error",e),e}},onClose:function(){i("Declined: Externally Halted")}})})}};function V(e){if(null==e)return null;switch(e.f_vsn){case"1.0.0":return e;default:return b({},R,{addr:o.sansPrefix(e.addr||e.address),signature:e.signature||e.sig,keyId:e.keyId})}}function Y(e,t,n){if(!e.s){if(n instanceof Q){if(!n.s)return void(n.o=Y.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Y.bind(null,e,t),Y.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}function $(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var Z=function(e,r){try{n.invariant(/^[0-9a-f]+$/i.test(e),"Message must be a hex string"),n.invariant(Array.isArray(r),"Must include an Array of composite signatures");var i=[],o=[],u=[];return Promise.resolve(Promise.all(r.map(function(e){try{return n.invariant("string"==typeof e.addr,"addr must be a string"),n.invariant("number"==typeof e.keyId,"keyId must be a number"),n.invariant("string"==typeof e.signature,"signature must be a string"),Promise.resolve($(function(){return Promise.resolve(t.account(e.addr)).then(function(t){return i.push(t.keys[e.keyId].weight.toFixed(1)),o.push(t.keys[e.keyId].signAlgo),u.push(e.signature),t.keys[e.keyId].publicKey})},function(e){throw e}))}catch(e){return Promise.reject(e)}}))).then(function(t){return Promise.resolve(fcl.query({cadence:""+ge,args:function(n,r){return[n(e,r.String),n(t,r.Array([r.String])),n(i,r.Array(r.UFix64)),n(o,r.Array([r.UInt])),n(u,r.Array([r.String]))]}}))})}catch(e){return Promise.reject(e)}},W=function(e,t){void 0===t&&(t={});try{return le(),Promise.resolve(te(t)).then(function(t){var r=U(t.services,"user-signature");return n.invariant(r,"Current user must have authorized a signing service."),$(function(){return Promise.resolve(K(r,ye(e))).then(function(e){return Array.isArray(e)?e.map(function(e){return V(e)}):[V(e)]})},function(e){return e})})}catch(e){return Promise.reject(e)}},X=function(e){try{return le(),Promise.resolve(te()).then(function(t){var n=U(t.services,"authz"),r=U(t.services,"pre-authz");return b({},e,r?{tempId:"CURRENT_USER",resolve:function(e,t){try{return Promise.resolve(K(r,t)).then(pe)}catch(e){return Promise.reject(e)}}}:{tempId:"CURRENT_USER",resolve:null,addr:o.sansPrefix(n.identity.address),keyId:n.identity.keyId,sequenceNum:null,signature:null,signingFunction:function(e){try{return Promise.resolve(K(n,e,{includeOlderJsonRpcCall:!0})).then(V)}catch(e){return Promise.reject(e)}}})})}catch(e){return Promise.reject(e)}},Q=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var o=1&i?t:n;if(o){try{Y(r,1,o(this.v))}catch(e){Y(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?Y(r,1,t?t(i):i):n?Y(r,1,n(i)):Y(r,2,i)}catch(e){Y(r,2,e)}},r},e}();function ee(e){return e instanceof Q&&1&e.s}var te=function(e){void 0===e&&(e={});try{return Promise.resolve(new Promise(function(n,r){try{return le(),Promise.resolve(me()).then(function(r){if(r.loggedIn&&fe(r))return n(r);var u=e.serviceStrategy||z;return Promise.resolve(t.config.first(["discovery.wallet","challenge.handshake"])).then(function(e){u({endpoint:e},{onReady:function(e,t){var n=t.send;try{return Promise.resolve(ne(/^service\./)).then(function(e){return Promise.resolve(ne(/^app\.detail\./)).then(function(t){n({type:"FCL:AUTHN:CONFIG",services:e,app:t})})})}catch(e){return Promise.reject(e)}},onClose:function(){try{return Promise.resolve(me()).then(function(e){n(e)})}catch(e){return Promise.reject(e)}},onResponse:function(e,t){var r=t.close;try{return Promise.resolve(function(e){try{var t=(e=function(e){return e.addr=e.addr?o.withPrefix(e.addr):null,e.paddr=e.paddr?o.withPrefix(e.paddr):null,e}(e)).services||[];return Promise.resolve(function(e,t){try{if(null==e||null==t)return Promise.resolve([]);var n=new URL(e);return n.searchParams.append("code",t),Promise.resolve(fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})).then(function(e){if(Array.isArray(e))return e;var t=[];if(Array.isArray(e.authorizations))for(var n,r=E(e.authorizations);!(n=r()).done;)t.push(b({type:"authz",keyId:e.keyId},n.value));return null!=e.provider&&t.push(b({type:"authn",id:"wallet-provider#authn"},e.provider)),t})}catch(e){return Promise.reject(e)}}(e.hks,e.code)).then(function(n){var r,i,u=(r=t,i=n,void 0===r&&(r=[]),void 0===i&&(i=[]),[].concat(r,i)).map(function(t){return function(e,t){try{return C[e.type](e,t)}catch(t){return console.error("Unrecognized FCL Service Type ["+e.type+"]",e,t),e}}(t,e)}),a=function(e,t){return t.find(function(e){return"authn"===e.type})}(0,u);return b({},O,{addr:o.withPrefix(e.addr),cid:T(a),loggedIn:!0,services:u,expiresAt:e.exp})})}catch(e){return Promise.reject(e)}}(e.data)).then(function(e){return i.send(re,oe,e),Promise.resolve(me()).then(function(e){n(e),r()})})}catch(e){return Promise.reject(e)}}})})})}catch(e){return Promise.reject(e)}}))}catch(e){return Promise.reject(e)}},ne=function(e){try{return Promise.resolve(t.config().where(e)).then(function(t){return Object.fromEntries(Object.entries(t).map(function(t){var n=t[1];return[t[0].replace(e,""),n]}))})}catch(e){return Promise.reject(e)}},re="CURRENT_USER",ie="CURRENT_USER/UPDATED",oe="SET_CURRENT_USER",ue='{\n  "f_type": "User",\n  "f_vsn": "1.0.0",\n  "addr":null,\n  "cid":null,\n  "loggedIn":null,\n  "expiresAt":null,\n  "services":[]\n}',ae=function(e){try{return sessionStorage.setItem(re,JSON.stringify(e)),Promise.resolve(e)}catch(e){return Promise.reject(e)}},se=function(){return t.config().get("persistSession",!0)},ce=((F={})[i.INIT]=function(e){try{return e.merge(JSON.parse(ue)),Promise.resolve(se()).then(function(t){var n=function(){if(t)return Promise.resolve(function(){try{var e=JSON.parse(ue),t=JSON.parse(sessionStorage.getItem(re));return null!=t&&e.f_vsn!==t.f_vsn?(sessionStorage.removeItem(re),Promise.resolve(e)):Promise.resolve(t||e)}catch(e){return Promise.reject(e)}}()).then(function(t){fe(t)&&e.merge(t)})}();if(n&&n.then)return n.then(function(){})})}catch(e){return Promise.reject(e)}},F[i.SUBSCRIBE]=function(e,t){e.subscribe(t.from),e.send(t.from,ie,b({},e.all()))},F[i.UNSUBSCRIBE]=function(e,t){e.unsubscribe(t.from)},F.SNAPSHOT=function(e,t){try{return t.reply(b({},e.all())),Promise.resolve()}catch(e){return Promise.reject(e)}},F[oe]=function(e,t,n){try{return e.merge(n),Promise.resolve(se()).then(function(t){t&&ae(e.all()),e.broadcast(ie,b({},e.all()))})}catch(e){return Promise.reject(e)}},F.DEL_CURRENT_USER=function(e,t){try{return e.merge(JSON.parse(ue)),Promise.resolve(se()).then(function(t){t&&ae(e.all()),e.broadcast(ie,b({},e.all()))})}catch(e){return Promise.reject(e)}},F),le=function(){return i.spawn(ce,re)};function fe(e){return null==e.expiresAt||0===e.expiresAt||e.expiresAt>Date.now()}function de(){le(),i.send(re,"DEL_CURRENT_USER")}function pe(e){var t=function(e){return{f_type:"PreAuthzResponse",f_vsn:"1.0.0",proposer:(e||{}).proposer,payer:(e||{}).payer||[],authorization:(e||{}).authorization||[]}}(e),n=[];null!=t.proposer&&n.push(["PROPOSER",t.proposer]);for(var r,i=E(t.payer||[]);!(r=i()).done;)n.push(["PAYER",r.value]);for(var o,u=E(t.authorization||[]);!(o=u()).done;)n.push(["AUTHORIZER",o.value]);return n.map(function(e){var t=e[0],n=e[1];return{tempId:[n.identity.address,n.identity.keyId].join("|"),addr:n.identity.address,keyId:n.identity.keyId,signingFunction:function(e){return K(n,e)},role:{proposer:"PROPOSER"===t,payer:"PAYER"===t,authorizer:"AUTHORIZER"===t}}})}function he(e){le();var t="@EXIT",n=i.spawn(function(n){try{var r;return n.send(re,i.SUBSCRIBE),Promise.resolve(function(e,t,n){for(var r;;){var i=e();if(ee(i)&&(i=i.v),!i)return o;if(i.then){r=0;break}var o=n();if(o&&o.then){if(!ee(o)){r=1;break}o=o.s}}var u=new Q,a=Y.bind(null,u,2);return(0===r?i.then(c):1===r?o.then(s):(void 0).then(function(){(i=e())?i.then?i.then(c).then(void 0,a):c(i):Y(u,1,o)})).then(void 0,a),u;function s(t){o=t;do{if(!(i=e())||ee(i)&&!i.v)return void Y(u,1,o);if(i.then)return void i.then(c).then(void 0,a);ee(o=n())&&(o=o.v)}while(!o||!o.then);o.then(s).then(void 0,a)}function c(e){e?(o=n())&&o.then?o.then(s).then(void 0,a):s(o):Y(u,1,o)}}(function(){return!r&&1},0,function(){return Promise.resolve(n.receive()).then(function(o){if(o.tag===t)return n.send(re,i.UNSUBSCRIBE),void(r=1);e(o.data)})}))}catch(e){return Promise.reject(e)}});return function(){return i.send(n,t)}}function me(){return le(),i.send(re,"SNAPSHOT",null,{expectReply:!0,timeout:0})}var ve,ye=function(e){return n.invariant(/^[0-9a-f]+$/i.test(e),"Message must be a hex string"),{message:e}},ge="\nimport Crypto\n    \npub fun main(\n  message: String,\n  rawPublicKeys: [String],\n  weights: [UFix64],\n  signAlgos: [UInt],\n  signatures: [String],\n): Bool {\n\n  let keyList = Crypto.KeyList()\n  \n  var i = 0\n  for rawPublicKey in rawPublicKeys {\n    keyList.add(\n      PublicKey(\n        publicKey: rawPublicKey.decodeHex(),\n        signatureAlgorithm: signAlgos[i] == 2 ? SignatureAlgorithm.ECDSA_P256 : SignatureAlgorithm.ECDSA_secp256k1 \n      ),\n      hashAlgorithm: HashAlgorithm.SHA3_256,\n      weight: weights[i],\n    )\n    i = i + 1\n  }\n\n  let signatureSet: [Crypto.KeyListSignature] = []\n\n  var j = 0\n  for signature in signatures {\n    signatureSet.append(\n      Crypto.KeyListSignature(\n        keyIndex: j,\n        signature: signature.decodeHex()\n      )\n    )\n    j = j + 1\n  }\n    \n  let signedData = message.decodeHex()\n  \n  return keyList.verify(\n    signatureSet: signatureSet,\n    signedData: signedData\n  )\n}\n",Pe=function(){return{authenticate:te,unauthenticate:de,authorization:X,signUserMessage:W,verifyUserSignatures:Z,subscribe:he,snapshot:me}},be="POLL",je=function(e){try{return Promise.resolve(t.send([t.getTransactionStatus(e)]).then(t.decode))}catch(e){return Promise.reject(e)}},Ee=function(e){return e.status>=4},Se=function(e){return e.status>=3},we=function(e){return e.status>=2},Oe=((ve={})[i.INIT]=function(e){try{return Promise.resolve(je(e.self())).then(function(t){Ee(t)||setTimeout(function(){return e.sendSelf(be)},2500),e.merge(t)})}catch(e){return Promise.reject(e)}},ve[i.SUBSCRIBE]=function(e,t){e.subscribe(t.from),e.send(t.from,i.UPDATED,e.all())},ve[i.UNSUBSCRIBE]=function(e,t){e.unsubscribe(t.from)},ve[i.SNAPSHOT]=function(e,t){try{return t.reply(e.all()),Promise.resolve()}catch(e){return Promise.reject(e)}},ve.POLL=function(e){try{return Promise.resolve(je(e.self())).then(function(t){var n,r;Ee(t)||setTimeout(function(){return e.sendSelf(be)},2500),n=e.all(),r=t,JSON.stringify(n)!==JSON.stringify(r)&&e.broadcast(i.UPDATED,t),e.merge(t)})}catch(e){return Promise.reject(e)}},ve),Ie=function(e){if("object"==typeof e&&(e=e.transactionId),null==e)throw new Error("transactionId required");return e},Re=function(e){return i.spawn(Oe,Ie(e))};function Ae(e){function t(t){return i.subscriber(Ie(e),Re,t)}function n(e){return function(n){void 0===n&&(n={});var r=n.suppress||!1;return new Promise(function(n,i){var o=t(function(t){t.statusCode&&!r?(i(t.errorMessage),o()):e(t)&&(n(t),o())})})}}return{snapshot:function(){return i.snapshoter(e,Re)},subscribe:t,onceFinalized:n(we),onceExecuted:n(Se),onceSealed:n(Ee)}}Ae.isUnknown=function(e){return e.status>=0},Ae.isPending=function(e){return e.status>=1},Ae.isFinalized=we,Ae.isExecuted=Se,Ae.isSealed=Ee,Ae.isExpired=function(e){return 5===e.status};var ke,Ce=function(e){try{var n=setTimeout;return Promise.resolve(t.config().get("fcl.eventPollRate",1e4)).then(function(t){return n(function(){return e.sendSelf("TICK")},t)})}catch(e){return Promise.reject(e)}},Te=((ke={}).TICK=function(e){try{if(!e.hasSubs())return Promise.resolve();var n=e.get("hwm"),r=function(){if(null==n){var r=e.put;return Promise.resolve(t.latestBlock()).then(function(t){r.call(e,"hwm",t);var n=e.put;return Promise.resolve(Ce(e)).then(function(t){n.call(e,"tick",t)})})}return Promise.resolve(t.latestBlock()).then(function(r){return e.put("hwm",r),Promise.resolve(t.send([getEvents(e.self(),n.height,r.height-1)]).then(t.decode)).then(function(t){for(var n,r=E(t);!(n=r()).done;)e.broadcast("UPDATED",n.value.data);var i=e.put;return Promise.resolve(Ce(e)).then(function(t){i.call(e,"tick",t)})})})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},ke[i.SUBSCRIBE]=function(e,t){try{var n=function(){e.subscribe(t.from)},r=function(){if(!e.hasSubs()){var t=e.put;return Promise.resolve(Ce(e)).then(function(n){t.call(e,"tick",n)})}}();return Promise.resolve(r&&r.then?r.then(n):n())}catch(e){return Promise.reject(e)}},ke[i.UNSUBSCRIBE]=function(e,t){e.unsubscribe(t.from),e.hasSubs()||(clearTimeout(e.get("tick")),e.delete("tick"),e.delete("hwm"))},ke),Ue=function(e){return i.spawn(Te,e)},Ne=Pe().authorization,xe=f;Object.defineProperty(e,"TestUtils",{enumerable:!0,get:function(){return t.TestUtils}}),Object.defineProperty(e,"account",{enumerable:!0,get:function(){return t.account}}),Object.defineProperty(e,"arg",{enumerable:!0,get:function(){return t.arg}}),Object.defineProperty(e,"args",{enumerable:!0,get:function(){return t.args}}),Object.defineProperty(e,"atBlockHeight",{enumerable:!0,get:function(){return t.atBlockHeight}}),Object.defineProperty(e,"atBlockId",{enumerable:!0,get:function(){return t.atBlockId}}),Object.defineProperty(e,"authorization",{enumerable:!0,get:function(){return t.authorization}}),Object.defineProperty(e,"authorizations",{enumerable:!0,get:function(){return t.authorizations}}),Object.defineProperty(e,"build",{enumerable:!0,get:function(){return t.build}}),Object.defineProperty(e,"config",{enumerable:!0,get:function(){return t.config}}),Object.defineProperty(e,"createSignableVoucher",{enumerable:!0,get:function(){return t.createSignableVoucher}}),Object.defineProperty(e,"decode",{enumerable:!0,get:function(){return t.decode}}),Object.defineProperty(e,"getAccount",{enumerable:!0,get:function(){return t.getAccount}}),Object.defineProperty(e,"getBlock",{enumerable:!0,get:function(){return t.getBlock}}),Object.defineProperty(e,"getBlockByHeight",{enumerable:!0,get:function(){return t.getBlockByHeight}}),Object.defineProperty(e,"getBlockById",{enumerable:!0,get:function(){return t.getBlockById}}),Object.defineProperty(e,"getBlockHeader",{enumerable:!0,get:function(){return t.getBlockHeader}}),Object.defineProperty(e,"getCollection",{enumerable:!0,get:function(){return t.getCollection}}),Object.defineProperty(e,"getEvents",{enumerable:!0,get:function(){return t.getEvents}}),Object.defineProperty(e,"getEventsAtBlockHeightRange",{enumerable:!0,get:function(){return t.getEventsAtBlockHeightRange}}),Object.defineProperty(e,"getEventsAtBlockIds",{enumerable:!0,get:function(){return t.getEventsAtBlockIds}}),Object.defineProperty(e,"getLatestBlock",{enumerable:!0,get:function(){return t.getLatestBlock}}),Object.defineProperty(e,"getTransaction",{enumerable:!0,get:function(){return t.getTransaction}}),Object.defineProperty(e,"getTransactionStatus",{enumerable:!0,get:function(){return t.getTransactionStatus}}),Object.defineProperty(e,"invariant",{enumerable:!0,get:function(){return t.invariant}}),Object.defineProperty(e,"isBad",{enumerable:!0,get:function(){return t.isBad}}),Object.defineProperty(e,"isOk",{enumerable:!0,get:function(){return t.isOk}}),Object.defineProperty(e,"latestBlock",{enumerable:!0,get:function(){return t.latestBlock}}),Object.defineProperty(e,"limit",{enumerable:!0,get:function(){return t.limit}}),Object.defineProperty(e,"param",{enumerable:!0,get:function(){return t.param}}),Object.defineProperty(e,"params",{enumerable:!0,get:function(){return t.params}}),Object.defineProperty(e,"payer",{enumerable:!0,get:function(){return t.payer}}),Object.defineProperty(e,"ping",{enumerable:!0,get:function(){return t.ping}}),Object.defineProperty(e,"pipe",{enumerable:!0,get:function(){return t.pipe}}),Object.defineProperty(e,"proposer",{enumerable:!0,get:function(){return t.proposer}}),Object.defineProperty(e,"ref",{enumerable:!0,get:function(){return t.ref}}),Object.defineProperty(e,"script",{enumerable:!0,get:function(){return t.script}}),Object.defineProperty(e,"send",{enumerable:!0,get:function(){return t.send}}),Object.defineProperty(e,"transaction",{enumerable:!0,get:function(){return t.transaction}}),Object.defineProperty(e,"validator",{enumerable:!0,get:function(){return t.validator}}),Object.defineProperty(e,"why",{enumerable:!0,get:function(){return t.why}}),Object.defineProperty(e,"display",{enumerable:!0,get:function(){return o.display}}),Object.defineProperty(e,"sansPrefix",{enumerable:!0,get:function(){return o.sansPrefix}}),Object.defineProperty(e,"withPrefix",{enumerable:!0,get:function(){return o.withPrefix}}),Object.defineProperty(e,"cadence",{enumerable:!0,get:function(){return s.template}}),Object.defineProperty(e,"cdc",{enumerable:!0,get:function(){return s.template}}),e.VERSION="0.0.76",e.authenticate=function(e){return Pe().authenticate(e)},e.authz=Ne,e.currentUser=Pe,e.events=function(e){return{subscribe:function(t){return i.subscriber(e,Ue,t)}}},e.logIn=function(e){return Pe().authenticate()},e.mutate=function(e){void 0===e&&(e={});try{return Promise.resolve(function(t,r){try{var i=Promise.resolve(function(e){try{return n.invariant(h(e),"mutate(opts) -- opts is required"),n.invariant(m(e),"mutate(opts) -- opts must be an object"),n.invariant(h(e.cadence),"mutate({ cadence }) -- cadence is required"),n.invariant(v(e.cadence),"mutate({ cadence }) -- cadence must be a string"),Promise.resolve()}catch(e){return Promise.reject(e)}}(e)).then(function(){return Promise.resolve(l.config().get("fcl.authz",Pe().authorization)).then(function(t){return l.send([l.transaction(e.cadence),l.args(P(e.args||[])),e.limit&&g(e.limit)&&l.limit(e.limit),l.proposer(e.proposer||e.authz||t),l.payer(e.payer||e.authz||t),l.authorizations(e.authorizations||[e.authz||t])]).then(l.decode)})})}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(e){throw e}))}catch(e){return Promise.reject(e)}},e.query=function(e){void 0===e&&(e={});try{return Promise.resolve(function(e){try{return n.invariant(h(e.cadence),"query({ cadence }) -- cadence is required"),n.invariant(v(e.cadence),"query({ cadence }) -- cadence must be a string"),Promise.resolve()}catch(e){return Promise.reject(e)}}(e)).then(function(){return l.send([l.script(e.cadence),l.args(P(e.args||[])),e.limit&&"number"==typeof e.limit&&l.limit(e.limit)]).then(l.decode)})}catch(e){return Promise.reject(e)}},e.reauthenticate=function(){return Pe().unauthenticate(),Pe().authenticate()},e.serialize=function(e,n){void 0===e&&(e=[]),void 0===n&&(n={});try{return Promise.resolve(t.config.first(["sdk.resolve"],n.resolve||t.resolve)).then(function(n){function r(){return Promise.resolve(n(e)).then(function(e){return JSON.stringify(t.createSignableVoucher(e),null,2)})}var i=function(){if(Array.isArray(e))return Promise.resolve(t.pipe(t.interaction(),e)).then(function(t){e=t})}();return i&&i.then?i.then(r):r()})}catch(e){return Promise.reject(e)}},e.signUp=function(e){return Pe().authenticate()},e.t=xe,e.tx=Ae,e.unauthenticate=function(){return Pe().unauthenticate()}});
