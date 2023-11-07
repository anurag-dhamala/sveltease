import { NonExistentComponentError, NonExistentIdError } from "./errors";
import { SvelteComponent } from "./SvelteComponent";
export var sveltify = function (Component, id, options) {
    if (!Component)
        throw new NonExistentComponentError();
    if (!id)
        throw new NonExistentIdError();
    var sveltifier = new SvelteComponent(Component, id, options);
    return sveltifier.ignite();
};
//# sourceMappingURL=sveltify.js.map