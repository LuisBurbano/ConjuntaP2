import {insertProduct, obtainAllProducts, deleteProductById} from  '../repositories/product.repository.js';

export const getProducts = async (req, res) => {
    let products= await obtainAllProducts();
    res.send(products);
};

export const createProduct = async (req, res) => {
    try {
        await insertProduct(req.body);
        res.send(req.body);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).send("Error creating product");
    }
};

export const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await deleteProductById(productId);
        if (result) {
            res.send(`Product with ID ${productId} deleted successfully`);
        } else {
            res.status(404).send(`Product with ID ${productId} not found`);
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send("Error deleting product");
    }
};
