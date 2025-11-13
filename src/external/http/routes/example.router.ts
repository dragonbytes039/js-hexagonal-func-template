import { Router } from "express";
import { createExampleControllerBuild } from "../assembly/example.assembly.js";

const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,createExampleControllerBuild)

export default ExampleRouter