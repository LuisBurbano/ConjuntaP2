import {insertDelivery, obtainAllDeliveries} from  '../repositories/delivery.repository.js';

export const getDeliveries = async (req, res) => {
    let deliveries= await obtainAllDeliveries();
    res.send(deliveries);
};

export const createDelivery = async (req, res) => {

    // const delivery = {
    //     id: 2,
    //     name: "Mero"
    //   };
    // console.log(user);
    await insertDelivery(req.body);
    
    res.send(req.body);

};