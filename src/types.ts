import { ComponentProps, ComponentType } from "svelte";

export type SvelteComponentType = ComponentType<any>;

export type SCOptions =  {
    props: ComponentProps<any>
}