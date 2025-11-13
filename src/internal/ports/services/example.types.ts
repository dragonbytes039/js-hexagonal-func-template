
import type { Example } from "../../domain/entities/Example.js"
import type { CreateExampleServiceDto, DeleteExampleServiceDto } from "./example.dtos.js"



export type CreateExampleService = (data: CreateExampleServiceDto)=>Promise<Example>

export type DeleteExampleService = (data: DeleteExampleServiceDto)=>Promise<boolean>