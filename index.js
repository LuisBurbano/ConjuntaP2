import  {USER_PATH}  from  './constants/user.path.js';

import  {PRODUCT_PATH}  from  './constants/product.path.js';

import {createProduct, getProducts, deleteProduct} from  './controllers/product.controller.js';
import  {createUser, getUsers,getUserByEmail} from  './controllers/user.controller.js';
import {authRouthes} from './repositories/auth.repository.js';

import express from 'express';
import cors from 'cors';
const app = express()
app.use(express.json()) 
app.use(cors());
const port = 3000

//seccion de usuarios
app.get(USER_PATH.main, getUsers);
app.post(USER_PATH.main, createUser);
//seccion de usuarios
app.get(`${USER_PATH.main}/email/:email`, getUserByEmail);


//seccion de productos
app.get(PRODUCT_PATH.main, getProducts);
app.post(PRODUCT_PATH.main, createProduct);
app.delete(`${PRODUCT_PATH.main}/:id`, deleteProduct);

app.use(authRouthes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})