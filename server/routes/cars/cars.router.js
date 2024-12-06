import express from "express";
import { addNewCar, getAllCars, updateCarFavorite } from "./cars.controller.js";
const carsRouter = express.Router();
carsRouter.get("/", () => {});
carsRouter.post("/", () => {});

carsRouter.post("/favorite", updateCarFavorite);

export default carsRouter;
