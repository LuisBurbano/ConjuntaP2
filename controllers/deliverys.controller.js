import {
    insertUser,
    obtainAllDeliverys,
    obtainUserByCedula,
  } from "../repositories/deliverys.repository.js";
  
  export const getDeliverys = async (req, res) => {
    let users = await obtainAllDeliverys();
    res.send(users);
  };
  
  export const createDelivery = async (req, res) => {
    await insertUser(req.body);
    res.send(req.body);
  };
  
  export const getDeliveryByCedula = async (req, res) => {
    const { email } = req.params;
    const user = await obtainUserByCedula(email);
  
    res.send(user);
  };
  