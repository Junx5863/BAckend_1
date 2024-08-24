import carritoSchema from "../models/carrito.model.js";
import productSchema from "../models/user.model.js";

const addProductToCarrito = async (req, res) => {
  try {
    const params = req.params;
    const { product_id, quantity } = req.body;
    console.log(req.body);

    // Buscar el carrito por el id
    let carrito = await carritoSchema.findById(params.id).populate("productos");
    if (!carrito) {
      return res.status(404).send({ message: "Carrito no encontrado" });
    }

    if (!quantity) {
      return res.status(400).json({ error: "Debe ingresar una cantidad" });
    }

    // Agregar el producto al array de productos del carrito
    const producto = await productSchema.findOne({ _id: product_id });
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Verificar si el producto ya fue agregado al carrito
    const productoEncontrado = carrito.productos.some((producto) =>
      producto._id.equals(product_id)
    );

    if (!productoEncontrado) {
      carrito.productos.push({
        cantidad: quantity,
        producto: producto._id,
      });
      await carrito.save();
    }

    carrito = await carrito.populate({
      path: "productos.producto",
      select: "-__v",
    });

    res.status(200).json({
      message: "Producto agregado correctamente",
      carrito,
    });
  } catch (error) {
    res
      .status(500)
      .send({ error: `Error agregando producto al carrito: ${error.message}` });
  }
};

// Eliminar el producto del carrito

const deleteProductFromCarrito = async (req, res) => {
  try {
    const params = req.params;
    const { product_id } = req.body; // ID de carrito_code

    // Buscar el carrito por el id
    let carrito = await carritoSchema
      .findById(params.id)
      .populate("productos.producto");
    if (!carrito) {
      return res.status(404).send({ message: "Carrito no encontrado" });
    }

    // Encontrar y eliminar el producto cuyo 'carrito_code._id' coincide con 'product_id'
    const productosFiltrados = carrito.productos.filter(
      (producto) => !producto.carrito_code._id.equals(product_id)
    );

    // Verificar si algún producto fue eliminado
    if (productosFiltrados.length === carrito.productos.length) {
      return res
        .status(404)
        .json({ error: "Producto no encontrado en el carrito" });
    }

    // Actualizar el carrito con la lista de productos filtrados
    carrito.productos = productosFiltrados;
    await carrito.save();

    res.status(200).json({
      message: "Producto eliminado correctamente",
      carrito,
    });
  } catch (error) {
    res.status(500).send({
      error: `Error eliminando producto del carrito: ${error.message}`,
    });
  }
};

//actualiza la cantidad de un producto en el carrito

const updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_id, quantity } = req.body;

    let carrito = await carritoSchema
      .findById(id)
      .populate("productos.producto");

    if (!carrito) {
      return res.status(404).send({ message: "Carrito no encontrado" });
    }

    if (!quantity) {
      return res.status(400).json({ error: "Debe ingresar una cantidad" });
    }

    const producto = carrito.productos.find((producto) =>
      producto.producto._id.equals(product_id)
    );

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    producto.cantidad = quantity;
    await carrito.save();

    carrito = await carrito.populate({
      path: "productos.producto",
      select: "-__v",
    });

    res.status(200).json({
      message: "Cantidad actualizada correctamente",
      carrito,
    });
  } catch (error) {
    res.status(500).send({
      error: `Error actualizando cantidad del producto: ${error.message}`,
    });
  }
};

const createCarritoPost = async (req, res) => {
  try {
    const { id } = req.body;

    //* Creacion del carrito en la DB

    const newCarrito = new carritoSchema({
      code_carrito: id,
    });

    await newCarrito.save();

    res.status(201).send({
      message: "Carrito creado correctamente",
      carrito: newCarrito,
    });
  } catch (error) {
    res.status(400).send({
      error: `Error creating carrito ${error}`,
    });
  }
};

const emptyProductFromCarrito = async (req, res) => {
  try {
    const { id } = req.params;

    const carrito = await carritoSchema.findById(id).populate("productos");

    if (!carrito) {
      return res.status(404).send({
        error: "Carrito no encontrado",
      });
    }

    carrito.productos = [];
    await carrito.save();

    res.status(200).send({
      message: "Carrito vaciado correctamente",
      carrito,
    });
  } catch (error) {
    return res.status(400).send({
      error: `Error al vaciar carrito ${error}`,
    });
  }
};


const getCarById = async (req, res) => {
  try {
    const { id } = req.params;

    const carrito = await carritoSchema.findById(id).populate("productos");

    if (!carrito) {
      return res.status(404).send({
        error: "Carrito no encontrado",
      });
    }

    res.status(200).send({
      message: "Carrito encontrado",
      carrito,
    });
  } catch (error) {
    return res.status(400).send({
      error: `Error getting car ${error}`,
    });
  }
};



export const carritoController = {
  addProductToCarrito,
  updateProductQuantity,
  emptyProductFromCarrito,
  deleteProductFromCarrito,

  createCarritoPost,
  getCarById,
};
