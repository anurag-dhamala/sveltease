import { __assign } from "tslib";
import { NonExistentComponentError, NonExistentElementError, NonExistentIdError } from "./errors";
import { SvelteComponentKV } from "./store";
var SvelteComponent = /** @class */ (function () {
    function SvelteComponent(Component, elementId, options) {
        this.Component = null;
        this.elementId = "";
        this.options = null;
        this.Component = Component;
        this.validateId(elementId);
        if (options) {
            this.options = options;
        }
    }
    SvelteComponent.prototype.ignite = function () {
        var self = this;
        if (!this.Component) {
            throw new NonExistentComponentError();
        }
        if (!this.checkIfAlreadyExists(self.elementId)) {
            this.createNew();
        }
        else {
            this.update();
        }
        return self;
    };
    SvelteComponent.prototype.cleanup = function () {
        if (!this.Component)
            throw new NonExistentComponentError();
        delete SvelteComponentKV[this.elementId];
        //@ts-ignore
        this.Component.$destroy();
    };
    SvelteComponent.prototype.checkIfAlreadyExists = function (id) {
        if (!SvelteComponentKV[id])
            return false;
        return true;
    };
    SvelteComponent.prototype.createNew = function () {
        var _a;
        var self = this;
        if (!self.Component) {
            throw new NonExistentComponentError();
        }
        var component = new self.Component({
            target: document.getElementById(self.elementId),
            props: (_a = self.options) === null || _a === void 0 ? void 0 : _a.props
        });
        self.Component = component;
        SvelteComponentKV[self.elementId] = component;
    };
    SvelteComponent.prototype.update = function () {
        var _a;
        var self = this;
        var component = SvelteComponentKV[self.elementId];
        //@ts-ignore
        component.$set(__assign({}, (_a = self.options) === null || _a === void 0 ? void 0 : _a.props));
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