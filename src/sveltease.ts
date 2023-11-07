import { ComponentType } from "svelte";
import { NonExistentComponentError, NonExistentIdError } from "./errors";
import { SvelteaseComponent } from "./SvelteaseComponent";
import { SvelteaseComponentOpts } from "./types";
import { renderAfter } from "./utils";

export const sveltease =(Component: ComponentType<any>, id: string, options?: SvelteaseComponentOpts): Promise<SvelteaseComponent>=> {
     return new Promise<SvelteaseComponent>((resolve, reject) => {
        renderAfter(()=> {
        if(!Component) reject(new NonExistentComponentError());
        if(!id) reject(new NonExistentIdError());
        const sveltifier = new SvelteaseComponent(Component, id, options);
        resolve(sveltifier.ignite());
        })
    })
}