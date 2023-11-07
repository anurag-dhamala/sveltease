import { ComponentType } from "svelte";
import { SCOptions } from "./types";
export declare class SvelteComponent {
    private Component;
    private elementId;
    private options;
    constructor(Component: ComponentType<any>, elementId: string, options?: SCOptions);
    ignite(): void;
    private validateId;
}
