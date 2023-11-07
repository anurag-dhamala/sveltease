export class ComponentNotFoundError extends Error {
    constructor() {
        super("Svelte component not provided.");
    }
}


export class NonExistentElementError extends Error {
    constructor() {
        super("Provided element doesn't exist")
    } 
}


export class NonExistentIdError extends Error {
    constructor(){
        super("Please provided the wrapper element id");
    }
}