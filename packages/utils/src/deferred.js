"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
    }
    Object.defineProperty(Deferred.prototype, "promise", {
        get: function () {
            return this._promise;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Deferred.prototype, "resolve", {
        get: function () {
            return this._resolve;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Deferred.prototype, "reject", {
        get: function () {
            return this._reject;
        },
        enumerable: false,
        configurable: true
    });
    return Deferred;
}());
exports.default = Deferred;
