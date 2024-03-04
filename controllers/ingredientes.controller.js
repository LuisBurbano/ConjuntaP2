import {
  insertIngredientes,
  obtainAllIngredientes,
  deleteIngredientesById,
  obtainIngredientesById,
} from "../repositories/ingrediente.repository.js";

export const getIngredientes = async (req, res) => {
  let ingredientes = await obtainAllIngredientes();
  res.send(ingredientes);
};

export const createIngredientes = async (req, res) => {
  try {
    await insertIngredientes(req.body);
    res.send(req.body);
  } catch (error) {
    console.error("Error creating Ingredientes:", error);
    res.status(500).send("Error creating Ingredientes");
  }
};

export const deleteIngredientes = async (req, res) => {
  const IngredientesId = req.params.id;
  try {
    const result = await deleteIngredientesById(IngredientesId);
    if (result) {
      res.send(`Ingredientes with ID ${IngredientesId} deleted successfully`);
    } else {
      res.status(404).send(`Ingredientes with ID ${IngredientesId} not found`);
    }
  } catch (error) {
    console.error("Error deleting Ingredientes:", error);
    res.status(500).send("Error deleting Ingredientes");
  }
};

export const getIngredientesById = async (req, res) => {
  const { id } = req.params;
  const Ingredientes = await obtainIngredientesById(id);

  res.send(Ingredientes);
};
