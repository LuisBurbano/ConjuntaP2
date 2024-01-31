import  {USER_PATH}  from  './constants/user.path.js';
import  {DELIVERY_PATH}  from  './constants/delivery.path.js';
import  {PRODUCT_PATH}  from  './constants/product.path.js';
import {createDelivery, getDeliveries} from  './controllers/delivery.controller.js';
import {createProduct, getProducts} from  './controllers/product.controller.js';
import  {createUser, getUsers,getUserByEmail} from  './controllers/user.controller.js';
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

//seccion de deliveries
app.get(DELIVERY_PATH.main, getDeliveries);
app.post(DELIVERY_PATH.main, createDelivery);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})