
// Anemic domain example for simple microservices
//type or interfaces
export type Example = {
    id:string,
    name:string,
    description:string
}


/* thick domain with business logic... you don't need domainServices
export class Example {
    private id: string = generate()
    private name:string
    private description:string

    constructor(name:string, description:string){
        this.name = name
        this.description = description
    }

    public calculatePrice(){
        // business logic
    }
}
*/