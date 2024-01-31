import {insertUser, obtainAllUsers} from  '../repositories/user.repository.js';

export const getUsers = async (req, res) => {
    let users= await obtainAllUsers();
    res.send(users);
};

export const createUser = async (req, res) => {

    // const user = {
    //     id: 2,
    //     name: "Mero",
    //     // Add more fields as needed
    //   };
    // console.log(user);
    await insertUser(req.body);
    
    res.send(req.body);

};