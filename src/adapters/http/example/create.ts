import type { Request, Response, NextFunction } from "express";
import type { CreateExampleService } from "../../../internal/ports/services/example.types.js";

export function createExampleControllerFactory(createExampleService:CreateExampleService){

    return async (req:Request, res:Response, next:NextFunction)=>{

        const data = {
            id:req.body.id,
            name:req.body.name,
            description:req.body.description
        }

        try {
            const result =  await createExampleService(data)

            res.status(200).json(result)

        } catch (error) {
            res.status(500).send("error")
        }

    }
    
}