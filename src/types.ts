import { ComponentProps, ComponentType } from "svelte";

export type SvelteComponentType = ComponentType<any>;

export type SveltifyOptions =  {
    props: ComponentProps<any>
}