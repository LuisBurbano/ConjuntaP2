import {insertProduct, obtainAllProducts} from  '../repositories/product.repository.js';

export const getProducts = async (req, res) => {
    let products= await obtainAllProducts();
    res.send(products);
};

export const createProduct = async (req, res) => {

    // const product = {
    //     id: 2,
    //     name: "Jamon"
    //   };
    // console.log(user);
    await insertProduct(req.body);
    
    res.send(req.body);

};