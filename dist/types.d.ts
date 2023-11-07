import { ComponentProps, ComponentType } from "svelte";
export type SveltifyComponentType = ComponentType<any>;
export type SveltifyComponentOpts = {
    props: ComponentProps<any>;
};
export type SveltifyComponentKvType = Record<string, SveltifyComponentType>;
