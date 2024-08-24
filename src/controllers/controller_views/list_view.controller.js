import productSchema from "../../models/user.model.js";

const getListGames = async (req, res) => {
  try {
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;
    const videoGamesData = await productSchema.paginate(
      {},
      { limit, page }
    );

    const ProductosFinal = videoGamesData.docs.map((producto) => {
      const { ...rest } = producto.toObject();
      return rest;
    });
    res.render("index", {
      title: "Home page",
      videoGamesPath: ProductosFinal,
      currentPage: videoGamesData.page,
      totalPages: videoGamesData.totalPages,
      prevPage: videoGamesData.prevPage,
      nextPage: videoGamesData.nextPage,
      hasPrevPage: videoGamesData.hasPrevPage,
      hasNextPage: videoGamesData.hasNextPage,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error: "Error getting users",
    });
  }
};

export const gamesController = {
  getListGames,
};
