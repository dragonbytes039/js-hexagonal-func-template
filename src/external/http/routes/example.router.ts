import { Router } from "express";
import { createExampleControllerBuild } from "../../../adapters/http/controllers/example/entryPoint.js";

const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,createExampleControllerBuild)

export default ExampleRouter