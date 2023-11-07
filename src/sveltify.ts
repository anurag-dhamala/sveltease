import { ComponentType } from "svelte";
import { renderAfter } from "./utils";
import { ComponentNotFoundError, NonExistentIdError } from "./errors";
import { Sveltifier } from "./Sveltifer";
import { SveltifyOptions } from "./types";

export const sveltify =(Component: ComponentType<any>, id: string, options: SveltifyOptions)=> {
    renderAfter(()=> {
        if(!Component) throw new ComponentNotFoundError()
        if(!id) throw new NonExistentIdError();
        const sveltifier = new Sveltifier(Component, id, options);
        sveltifier.ignite();
    })
}