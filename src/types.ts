import { ComponentProps, ComponentType } from "svelte";

export type SvelteaseComponentType = ComponentType<any>;

export type SvelteaseComponentOpts =  {
    props: ComponentProps<any>
}

export type SvelteaseComponentKvType = Record<string, SvelteaseComponentType>