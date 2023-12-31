import { ComponentType } from "svelte";
import { NonExistentComponentError, NonExistentElementError, NonExistentIdError } from "./errors";
import { SvelteaseComponentOpts } from "./types";
import { SvelteComponentKV } from "./store";


export class SvelteaseComponent {

    private Component: ComponentType<any> | null = null;
    private elementId: string = "";
    private options: SvelteaseComponentOpts | null = null;


    constructor(Component: ComponentType<any>, elementId: string, options?: SvelteaseComponentOpts) {
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
        if(!this.checkIfAlreadyExists(self.elementId)) {
            this.createNew();
        } else {
            this.update();
        }
        
        return self;
    }

    cleanup() {
        if(!this.Component) throw new NonExistentComponentError();
        delete SvelteComponentKV[this.elementId];

        //@ts-ignore
        // svelte component type doesn't have $destroy method, but it exists.
        if(this.Component &&  this.Component.$destroy) {
            //@ts-ignore
            this.Component.$destroy();
        }
    }

    private checkIfAlreadyExists(id: string) {
        if(!SvelteComponentKV[id]) return false;
        return true;
    }

    private createNew() {
        const self = this;
        if(!self.Component) {
            throw new NonExistentComponentError();
        }
        try {
            const component = new self.Component({
                target: document.getElementById(self.elementId) as Element,
                props: self.options?.props
            })
            self.Component = component;
            SvelteComponentKV[self.elementId] = component;
        } catch (e: any) {
            console.warn("Warning(sveltease): ", e.message, ". You may be using sveltease in server components");
        }
        
    }

    private update() { 
        const self = this;
        const component = SvelteComponentKV[self.elementId];
        //@ts-ignore
        component.$set({
            ...self.options?.props
        })
    }

    private validateId(id: string) {
        if(!id) throw new NonExistentIdError();
        try {
            const elementRef = document.getElementById(id);
            if(!elementRef) throw new NonExistentElementError();
            this.elementId = id;
        } catch(e: any) {
            console.warn("Warning(sveltease): ", e.message, "You may be using svelte component in server components");
        }
        
    }

}