import type { Example } from "../../domain/entities/Example.js"
import type { exampleDbRepository } from "../../ports/repositories/example.db.js"

export function examplePostgresRepositoryFactory():exampleDbRepository{

    async function create(example:Example){

        return example
    }
    async function deleteById(example:Example['id']){

        return false
    }

    return {
        create,
        deleteById
    }
} 