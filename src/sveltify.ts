import { ComponentType } from "svelte";
import { NonExistentComponentError, NonExistentIdError } from "./errors";
import { SvelteComponent } from "./SvelteComponent";
import { SveltifyComponentOpts } from "./types";

export const sveltify =(Component: ComponentType<any>, id: string, options: SveltifyComponentOpts)=> {
        if(!Component) throw new NonExistentComponentError()
        if(!id) throw new NonExistentIdError();
        const sveltifier = new SvelteComponent(Component, id, options);
        return sveltifier.ignite();
}