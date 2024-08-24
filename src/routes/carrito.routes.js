import { Router } from "express";
import { carritoController } from "../controllers/carrito.controller.js";
import {
  validateCarrito,
  validateGetById,
} from ".././middlewares/carrito.middleware.js";

const router = Router();

router.post(
  "/create_carrito",
  validateCarrito,
  carritoController.createCarritoPost
);

router.delete("/:id", carritoController.deleteProductFromCarrito);
router.put("/update/:id", carritoController.updateProductQuantity);
router.delete("/empty/:id", carritoController.emptyProductFromCarrito);



router.get("/:id", validateGetById, carritoController.getCarById);

router.post("/:id", carritoController.addProductToCarrito);

export default router;
