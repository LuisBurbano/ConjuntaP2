import {
  insertPurchaseItem,
  obtainAllPurchaseItems,
  deletePurchaseItemById,
  obtainPurchaseItemByName,
  updatePurchaseItem,
} from "../repositories/compra.repository.js";

export const getPurchaseItems = async (req, res) => {
  let purchaseItems = await obtainAllPurchaseItems();
  res.send(purchaseItems);
};

export const createPurchaseItem = async (req, res) => {
  try {
    await insertPurchaseItem(req.body);
    res.send(req.body);
  } catch (error) {
    console.error("Error creating purchase item:", error);
    res.status(500).send("Error creating purchase item");
  }
};

export const deletePurchaseItem = async (req, res) => {
  const purchaseItemId = req.params.id;
  try {
    const result = await deletePurchaseItemById(purchaseItemId);
    if (result) {
      res.send(`Purchase item with ID ${purchaseItemId} deleted successfully`);
    } else {
      res.status(404).send(`Purchase item with ID ${purchaseItemId} not found`);
    }
  } catch (error) {
    console.error(`Error deleting purchase item: ${purchaseItemId}`, error);
    res.status(500).send("Error deleting purchase item");
  }
};

export const getPurchaseItemByName = async (req, res) => {
  const { id } = req.params;
  const purchaseItem = await obtainPurchaseItemByName(id);

  res.send(purchaseItem);
};

export const updatePurchase = async (req, res) => {
  const { id } = req.params;
  const updatedPurchaseItem = req.body;
  const purchaseItem = await updatePurchaseItem(id, updatedPurchaseItem);

  res.send(purchaseItem);
};
