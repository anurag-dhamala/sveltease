import { renderAfter } from "./utils";
import { ComponentNotFoundError, NonExistentIdError } from "./errors";
import { SvelteComponent } from "./SvelteComponent";
export var sveltify = function (Component, id, options) {
    renderAfter(function () {
        if (!Component)
            throw new ComponentNotFoundError();
        if (!id)
            throw new NonExistentIdError();
        var sveltifier = new SvelteComponent(Component, id, options);
        sveltifier.ignite();
    });
};
//# sourceMappingURL=sveltify.js.map