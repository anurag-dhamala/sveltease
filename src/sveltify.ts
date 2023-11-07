import { ComponentType } from "svelte";
import { NonExistentComponentError, NonExistentIdError } from "./errors";
import { SveltifyComponent } from "./SveltifyComponent";
import { SveltifyComponentOpts } from "./types";
import { renderAfter } from "./utils";

export const sveltify =(Component: ComponentType<any>, id: string, options?: SveltifyComponentOpts): Promise<SveltifyComponent>=> {
     return new Promise<SveltifyComponent>((resolve, reject) => {
        renderAfter(()=> {
        if(!Component) reject(new NonExistentComponentError());
        if(!id) reject(new NonExistentIdError());
        const sveltifier = new SveltifyComponent(Component, id, options);
        resolve(sveltifier.ignite());
        })
    })
}