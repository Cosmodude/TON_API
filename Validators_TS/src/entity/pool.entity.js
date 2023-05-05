"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = void 0;
var typeorm_1 = require("typeorm");
var Pool = exports.Pool = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _address_decorators;
    var _address_initializers = [];
    var _profitShare_decorators;
    var _profitShare_initializers = [];
    var _totalStake_decorators;
    var _totalStake_initializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var Pool = _classThis = /** @class */ (function () {
        function Pool_1() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.address = __runInitializers(this, _address_initializers, void 0);
            this.profitShare = __runInitializers(this, _profitShare_initializers, void 0);
            this.totalStake = __runInitializers(this, _totalStake_initializers, void 0);
            this.type = __runInitializers(this, _type_initializers, void 0);
        }
        return Pool_1;
    }());
    __setFunctionName(_classThis, "Pool");
    (function () {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _address_decorators = [(0, typeorm_1.Column)()];
        _profitShare_decorators = [(0, typeorm_1.Column)()];
        _totalStake_decorators = [(0, typeorm_1.Column)()];
        _type_decorators = [(0, typeorm_1.Column)({ default: "custodial" })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: function (obj) { return "address" in obj; }, get: function (obj) { return obj.address; }, set: function (obj, value) { obj.address = value; } } }, _address_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _profitShare_decorators, { kind: "field", name: "profitShare", static: false, private: false, access: { has: function (obj) { return "profitShare" in obj; }, get: function (obj) { return obj.profitShare; }, set: function (obj, value) { obj.profitShare = value; } } }, _profitShare_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _totalStake_decorators, { kind: "field", name: "totalStake", static: false, private: false, access: { has: function (obj) { return "totalStake" in obj; }, get: function (obj) { return obj.totalStake; }, set: function (obj, value) { obj.totalStake = value; } } }, _totalStake_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } } }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Pool = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Pool = _classThis;
}();
