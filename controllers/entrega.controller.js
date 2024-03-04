import {
    insertUser,
    obtainAllDeliverys,
    obtainUserByCedula,
    updateEntregaItem
  } from "../repositories/entrega.repository.js";
  
  export const getEntregas = async (req, res) => {
    let users = await obtainAllDeliverys();
    res.send(users);
  };
  
  export const createEntrega = async (req, res) => {
    await insertUser(req.body);
    res.send(req.body);
  };
  
  export const getEntregaByEmail = async (req, res) => {
    const { email } = req.params;
    const user = await obtainUserByCedula(email);
  
    res.send(user);
  };
  
  export const updateEntega = async (req, res) => {
    const { id } = req.params;
    const updatedMenuItem = req.body;
    const menuItem = await updateEntregaItem(id, updatedMenuItem);

    res.send(menuItem);
}