import { ComponentType } from "svelte";
import { SvelteComponent } from "./SvelteComponent";
import { SveltifyComponentOpts } from "./types";
export declare const sveltify: (Component: ComponentType<any>, id: string, options: SveltifyComponentOpts) => SvelteComponent;
