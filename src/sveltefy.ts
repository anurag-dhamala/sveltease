import { ComponentType } from "svelte";
import { NonExistentComponentError, NonExistentIdError } from "./errors";
import { SveltefyComponent } from "./SveltefyComponent";
import { SveltefyComponentOpts } from "./types";
import { renderAfter } from "./utils";

export const sveltefy =(Component: ComponentType<any>, id: string, options?: SveltefyComponentOpts): Promise<SveltefyComponent>=> {
     return new Promise<SveltefyComponent>((resolve, reject) => {
        renderAfter(()=> {
        if(!Component) reject(new NonExistentComponentError());
        if(!id) reject(new NonExistentIdError());
        const sveltifier = new SveltefyComponent(Component, id, options);
        resolve(sveltifier.ignite());
        })
    })
}