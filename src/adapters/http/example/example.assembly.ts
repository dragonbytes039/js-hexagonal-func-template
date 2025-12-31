import {type Request, type Response, NextFunction} from 'express'
import { createExampleControllerFactory } from '../../../adapters/http/example/create.js'
import { examplePostgresRepositoryFactory } from '../../../internal/repositories/example/postgres.js'
import { createExampleFactory } from '../../../internal/services/example/create.js'

const examplePostgressRepository = examplePostgresRepositoryFactory()

const createExampleService = createExampleFactory(examplePostgressRepository)

const createExample = createExampleControllerFactory(createExampleService)

export default {
    createExample,
}