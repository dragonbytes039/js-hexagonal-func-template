
import type { exampleDbRepository } from "../../ports/repositories/example.db.js"
import type { DeleteExampleServiceDto } from "../../ports/services/example.dtos.js"
import type { DeleteExampleService } from "../../ports/services/example.types.js"


export function deleteExampleFactory ( exampleDbRepository: exampleDbRepository):DeleteExampleService{

    return async (data: DeleteExampleServiceDto) => {
        return false
    }

}