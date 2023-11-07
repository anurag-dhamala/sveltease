import { ComponentType } from "svelte";
import { renderAfter } from "./utils";
import { ComponentNotFoundError, NonExistentIdError } from "./errors";
import { SvelteComponent } from "./SvelteComponent";
import { SCOptions } from "./types";

export const sveltify =(Component: ComponentType<any>, id: string, options: SCOptions)=> {
    renderAfter(()=> {
        if(!Component) throw new ComponentNotFoundError()
        if(!id) throw new NonExistentIdError();
        const sveltifier = new SvelteComponent(Component, id, options);
        sveltifier.ignite();
    })
}