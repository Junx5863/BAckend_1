

const validateCarrito = (req, res, next) => {
    const { id, products } = req.body;
  
    // Validación del id
    if (!id || typeof id !== 'string') {
      return res
        .status(400)
        .json({ error: 'El id es obligatorio y debe ser una cadena de texto' });
    }
  
    next();
  };

const validateGetById = (req, res, next) => {
    const { id } = req.params;
  
    if (!id || typeof id !== 'string') {
      return res
        .status(400)
        .json({ error: 'El id es obligatorio y debe ser una cadena de texto' });
    }
  
    next();
  };

export { validateCarrito, validateGetById };