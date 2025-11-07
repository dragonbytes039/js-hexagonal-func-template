import {type Request, type Response, NextFunction} from 'express'
import { createExampleControllerFactory } from './create.js'
import { examplePostgresRepositoryFactory } from '../../../../internal/repositories/example/postgres.js'
import { createExampleFactory } from '../../../../internal/services/example/create.js'


const examplePostgressRepository = examplePostgresRepositoryFactory()


export function createExampleControllerBuild (req:Request, res:Response, next:NextFunction){

    const Service = createExampleFactory(examplePostgressRepository)
    const controller = createExampleControllerFactory(Service)

    return controller(req,res,next)
} 
