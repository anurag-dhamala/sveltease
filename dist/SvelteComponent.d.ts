import { ComponentType } from "svelte";
import { SveltifyComponentOpts } from "./types";
export declare class SvelteComponent {
    private Component;
    private elementId;
    private options;
    constructor(Component: ComponentType<any>, elementId: string, options?: SveltifyComponentOpts);
    ignite(): this;
    cleanup(): void;
    private checkIfAlreadyExists;
    private createNew;
    private update;
    private validateId;
}
