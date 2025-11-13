
import type { exampleDbRepository } from "../../ports/repositories/example.db.js"
import type { CreateExampleServiceDto } from "../../ports/services/example.dtos.js"
import type { CreateExampleService } from "../../ports/services/example.types.js"


export function createExampleFactory ( exampleDbRepository: exampleDbRepository):CreateExampleService{

    return async (data: CreateExampleServiceDto) => {
        return await exampleDbRepository.create(data)
    }

}