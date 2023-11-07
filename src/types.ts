import { ComponentProps, ComponentType } from "svelte";

export type SveltefyComponentType = ComponentType<any>;

export type SveltefyComponentOpts =  {
    props: ComponentProps<any>
}

export type SveltefyComponentKvType = Record<string, SveltefyComponentType>