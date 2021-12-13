const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct
} = require('./product.service')

async function getAllProductsHandler(req, res) {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error : error.message})
  }
}

async function createProductHandler(req, res) {
  try {
    const product = await createProduct(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getProductByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({ message: `product not found with id: ${id}` });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateProductHandler(req, res) {
  const { id } = req.params;
  try {
    const product = await updateProduct(id, req.body);

    if (!product) {
      return res.status(404).json({ message: `product not found with id: ${id}` });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteProductHandler(req, res) {
  const { id } = req.params;
  try {
    const product = await deleteProduct(id);

    if (!product) {
      return res.status(404).json({ message: `product not found with id: ${id}` });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllProductsHandler,
  createProductHandler,
  getProductByIdHandler,
  updateProductHandler,
  deleteProductHandler,
}
