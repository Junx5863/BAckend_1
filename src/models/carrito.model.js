import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
  code_carrito: {
    type: String,
    required: true,
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VideoGame",
      },
      cantidad: {
        type: Number,
      },
    },
  ],
});

const Carrito = mongoose.model("Carrito", carritoSchema);
export default Carrito;
