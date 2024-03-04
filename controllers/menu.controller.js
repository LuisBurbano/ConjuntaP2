import { insertMenuItem, obtainAllMenuItems, deleteMenuItemById, obtainMenuItemByName, updateMenuItem } from '../repositories/menu.repository.js';

export const getMenuItems = async (req, res) => {
    let menuItems = await obtainAllMenuItems();
    res.send(menuItems);
};

export const createMenuItem = async (req, res) => {
    try {
        await insertMenuItem(req.body);
        res.send(req.body);
    } catch (error) {
        console.error("Error creating menu item:", error);
        res.status(500).send("Error creating menu item");
    }
};

export const deleteMenuItem = async (req, res) => {
    const menuItemId = req.params.id;
    try {
        const result = await deleteMenuItemById(menuItemId);
        if (result) {
            res.send(`Menu item with ID ${menuItemId} deleted successfully`);
        } else {
            res.status(404).send(`Menu item with ID ${menuItemId} not found`);
        }
    } catch (error) {
        console.error(`Error deleting menu item: ${menuItemId}`, error);
        res.status(500).send("Error deleting menu item");
    }
};

export const getMenuItemByName = async (req, res) => {
    const { id } = req.params;
    const menuItem = await obtainMenuItemByName(id);

    res.send(menuItem);
};

export const updateMenu = async (req, res) => {
    const { id } = req.params;
    const updatedMenuItem = req.body;
    const menuItem = await updateMenuItem(id, updatedMenuItem);

    res.send(menuItem);
}
