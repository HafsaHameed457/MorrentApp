// import mongoose from "mongoose";
// const carSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   type: { type: String, required: true },
//   price: { type: String, required: true },
//   fuel: { type: String, required: true },
//   transmission: { type: String, required: true },
//   capacity: { type: String, required: true },
//   car_pic: { type: String, required: true },
//   originalPrice: { type: String, required: false },
//   carID: { type: String, unique: true },
//   favorite: { type: Boolean, default: false },
// });
// carSchema.pre("save", async function (next) {
//   if (!this.carID) {
//     this.carID = `carID-${this._id}`;
//   }
//   next();
// });

// export default mongoose.model("Car", carSchema);
