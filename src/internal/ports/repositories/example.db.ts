import type { Example } from "../../domain/entities/Example.js";



export type exampleDbRepository = {
    
    create:(example:Example)=>Promise<Example>, 
    deleteById:(example:Example['id'])=>Promise<boolean>,

}