// controllers/carController.js
import Car from "../../models/car.models.js";
import { createResponse } from "../../helpers/responseUtils.js";

export const updateCarFavorite = async (req, res) => {
  try {
    const { carID } = req.body;

    const car = await Car.findOne({ carID });

    if (!car) {
      return res.status(404).json(createResponse([], "Car not found", false));
    }

    car.favorite = !car.favorite;

    await car.save();

    res.status(200).json(createResponse(car, "Favorite status updated", true));
  } catch (error) {
    res.status(500).json(createResponse([], error.message, false));
  }
};

export const getAllCars = async (req, res) => {
  try {
    const allCars = await Car.find();
    res.status(200).json(createResponse(allCars, "All cars fetched", true));
  } catch (error) {
    res.status(500).json(createResponse([], error.message, false));
  }
};

export const addNewCar = async (req, res) => {
  try {
    const {
      name,
      type,
      price,
      fuel,
      transmission,
      capacity,
      car_pic,
      originalPrice,
    } = req.body;

    if (!name || !type || !price || !fuel || !transmission || !capacity) {
      return res
        .status(400)
        .json(createResponse([], "Missing required fields", false));
    }

    const newCar = await Car.create({
      name,
      type,
      price,
      fuel,
      transmission,
      capacity,
      car_pic,
      originalPrice,
    });
    await newCar.save();

    const allCars = await Car.find();
    res
      .status(201)
      .json(createResponse(allCars, "Car added successfully", true));
  } catch (error) {
    res.status(500).json(createResponse([], `Error: ${error.message}`, false));
  }
};
