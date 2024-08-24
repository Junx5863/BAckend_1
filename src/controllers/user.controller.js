
import  productSchema  from "../models/user.model.js";



const addVideoGame = async (req, res) => {
  try {
    

    // Crear un nuevo videojuego con un ID único
    const newVideoGame = new productSchema({
      ...req.body,
    })
    const saveProduct = await newVideoGame.save();

    res.status(201).send({
      message: "Video game create",
      videoGame: saveProduct,
    });

    
  } catch (error) {
    res.status(400).send({
      error: `Error adding video game ${error.message}`,
    });
  }
};



const getUsers = async (req, res) => {
  try {
    const platform = req.query || {};
    console.log(platform);

    const limit = req.query.limit || 5;
    const page = req.query.page || 1;

    const products = await productSchema.paginate(platform, { limit, page, });
    res.status(200).send({
      message: "All Products",
      products,
    });
    
  } catch (error) {
    res.status(400).send({
      error: "Error getting Products",
    });
  }
};



const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productSchema.findById(id);
    res.status(200).send({
      message: "Product by id",
      product,
    });
    
  } catch (error) {
    res.status(400).send({
      error: "Error getting user by user id",
    });
  }
};

const updateVideoGame = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      platform,
      status,
      stock,
      price,
      release_date,
      genre,
    } = req.body;

    const product = await productSchema.findByIdAndUpdate(
      id,
      {
        title,
        description,
        platform,
        status,
        stock,
        price,
        release_date,
        genre,
      },
      { new: true }
    );

    res.status(200).send({
      message: "Video game updated",
      product,
    });

    
  } catch (error) {
    res.status(400).send({
      error: "Error updating video game",
    });
  }
};

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    // Encontrar el índice del videojuego a eliminar

    const product = await productSchema.findByIdAndDelete(id);

    res.status(200).send({
      message: "Video game deleted",
      product,
    });
    
  } catch (error) {
    res.status(400).send({
      error: "Error deleting user",
    });
  }
};

export const userController = {
  addVideoGame,
  getUsers,
  getById,
  updateVideoGame,
  deleteGame,
};
