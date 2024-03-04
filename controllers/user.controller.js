import {
  insertUser,
  obtainAllUsers,
  obtainUserByEmail,
} from "../repositories/user.repository.js";

export const getUsers = async (req, res) => {
  let users = await obtainAllUsers();
  res.send(users);
};

export const createUser = async (req, res) => {
  await insertUser(req.body);
  res.send(req.body);
};

export const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const user = await obtainUserByEmail(email);

  res.send(user);
};
