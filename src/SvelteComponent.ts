import { ComponentType } from "svelte";
import { NonExistentComponentError, NonExistentElementError, NonExistentIdError } from "./errors";
import { SCOptions } from "./types";


export class SvelteComponent {

    private Component: ComponentType<any> | null = null;
    private elementId: string = "";
    private options: SCOptions | null = null;


    constructor(Component: ComponentType<any>, elementId: string, options?: SCOptions) {
        this.Component = Component;
        this.validateId(elementId);
        if(options) {
            this.options = options;
        }
    }

    ignite() {
        const self = this;
        if(!this.Component) {
            throw new NonExistentComponentError();
        }
        const component = new this.Component({
            target: document.getElementById(self.elementId) as Element,
            props: self.options?.props
        })
       
        console.log("the component : ", component)
        return self;
    }

    cleanup() {
        if(!this.Component) throw new NonExistentComponentError();
        this.Component.$destroy();
    }

    private validateId(id: string) {
        if(!id) throw new NonExistentIdError();
        const elementRef = document.getElementById(id);
        if(!elementRef) throw new NonExistentElementError();
        this.elementId = id;
    }

}