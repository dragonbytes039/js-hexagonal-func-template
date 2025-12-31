import { Router } from "express";
import exampleController from "../../../adapters/http/example/example.assembly.js";

const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,exampleController.createExample)

export default ExampleRouter