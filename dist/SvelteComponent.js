import { ComponentNotFoundError, NonExistentElementError, NonExistentIdError } from "./errors";
var SvelteComponent = /** @class */ (function () {
    function SvelteComponent(Component, elementId, options) {
        this.Component = null;
        this.elementId = "";
        this.options = null;
        this.Component = Component;
        this.validateId(elementId);
        this.elementId = elementId;
        if (options) {
            this.options = options;
        }
    }
    SvelteComponent.prototype.ignite = function () {
        var _a;
        var self = this;
        if (!this.Component) {
            throw new ComponentNotFoundError();
        }
        new this.Component({
            target: document.getElementById(self.elementId),
            props: (_a = self.options) === null || _a === void 0 ? void 0 : _a.props
        });
    };
    SvelteComponent.prototype.validateId = function (id) {
        if (!id)
            throw new NonExistentIdError();
        var elementRef = document.getElementById(id);
        if (!elementRef)
            throw new NonExistentElementError();
        this.elementId = id;
    };
    return SvelteComponent;
}());
export { SvelteComponent };
//# sourceMappingURL=SvelteComponent.js.map