import { __extends } from "tslib";
var ComponentNotFoundError = /** @class */ (function (_super) {
    __extends(ComponentNotFoundError, _super);
    function ComponentNotFoundError() {
        return _super.call(this, "Svelte component not provided.") || this;
    }
    return ComponentNotFoundError;
}(Error));
export { ComponentNotFoundError };
var NonExistentElementError = /** @class */ (function (_super) {
    __extends(NonExistentElementError, _super);
    function NonExistentElementError() {
        return _super.call(this, "Provided element doesn't exist") || this;
    }
    return NonExistentElementError;
}(Error));
export { NonExistentElementError };
var NonExistentIdError = /** @class */ (function (_super) {
    __extends(NonExistentIdError, _super);
    function NonExistentIdError() {
        return _super.call(this, "Please provided the wrapper element id") || this;
    }
    return NonExistentIdError;
}(Error));
export { NonExistentIdError };
//# sourceMappingURL=errors.js.map