import { USER_PATH } from "./constants/user.path.js";
import { INGREDIENTES_PATH } from "./constants/ingredientes.path.js";
import { PRODUCT_PATH } from "./constants/product.path.js";
import { MENU_PATH } from "./constants/menu.path.js";
import { COMPRAS_PATH } from "./constants/compra.path.js";
import { DELIVERY_PATH } from "./constants/deliverys.path.js";

import {
  createProduct,
  getProducts,
  deleteProduct,
  getProductById,
} from "./controllers/product.controller.js";
import {
  createUser,
  getUsers,
  getUserByEmail,
} from "./controllers/user.controller.js";
import {
  createIngredientes,
  getIngredientes,
  deleteIngredientes,
  getIngredientesById,
} from "./controllers/ingredientes.controller.js";
import {
  createMenuItem,
  getMenuItems,
  deleteMenuItem,
  getMenuItemByName,
  updateMenu,
} from "./controllers/menu.controller.js";
import {
  createPurchaseItem,
  getPurchaseItems,
  getPurchaseItemByName,
  deletePurchaseItem,
  updatePurchase,
} from "./controllers/compra.controller.js";

import { createDelivery, getDeliverys,getDeliveryByCedula } from "./controllers/deliverys.controller.js";

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

//seccion de usuarios
app.get(USER_PATH.main, getUsers);
app.post(USER_PATH.main, createUser);
//seccion de usuarios
app.get(`${USER_PATH.main}/email/:email`, getUserByEmail);

//seccion de productos
app.get(`${PRODUCT_PATH.main}/:id`, getProductById);
app.get(PRODUCT_PATH.main, getProducts);
app.post(PRODUCT_PATH.main, createProduct);
app.delete(`${PRODUCT_PATH.main}/:id`, deleteProduct);

//seccion de ingredientes
app.get(INGREDIENTES_PATH.main, getIngredientes);
app.post(INGREDIENTES_PATH.main, createIngredientes);
app.delete(`${INGREDIENTES_PATH.main}/:id`, deleteIngredientes);
app.get(`${INGREDIENTES_PATH.main}/:id`, getIngredientesById);

//seccion de menu
app.get(MENU_PATH.main, getMenuItems);
app.post(MENU_PATH.main, createMenuItem);
app.delete(`${MENU_PATH.main}/:id`, deleteMenuItem);
app.get(`${MENU_PATH.main}/:id`, getMenuItemByName);
app.put(`${MENU_PATH.main}/:id`, updateMenu);

//seccion de compras
app.get(COMPRAS_PATH.main, getPurchaseItems);
app.post(COMPRAS_PATH.main, createPurchaseItem);
app.delete(`${COMPRAS_PATH.main}/:id`, deletePurchaseItem);
app.get(`${COMPRAS_PATH.main}/:id`, getPurchaseItemByName);
app.put(`${COMPRAS_PATH.main}/:id`, updatePurchase);

//seccion de deliverys
app.get(DELIVERY_PATH.main, getDeliverys);
app.post(DELIVERY_PATH.main, createDelivery);
app.get(`${DELIVERY_PATH.main}/email/:email`, getDeliveryByCedula);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
