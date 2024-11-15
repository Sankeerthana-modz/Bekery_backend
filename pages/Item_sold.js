import { getItemTotalCost } from  "../modules/Database_1.js";

export default function handleItemCostGet(req, res) {
    const { itemName } = req.query;

    if (!itemName) {
        return res.status(400).json({ error: "Item name is required." });
    }

    const result = getItemTotalCost(itemName);
    res.json(result);
}