export const items = [
    { name: "cupcake", price: 20 },
    { name: "cooldrink", price: 50 },
    { name: "samosa", price: 15 }
];

export const users = [
    {
        username: "san",
        orders: [
            { name: "cupcake", orderDate: "2024-06-17", quantity: 3 },
            { name: "cooldrink", orderDate: "2024-06-18", quantity: 2 }
        ]
    },
    {
        username: "sank",
        orders: [
            { name: "samosa", orderDate: "2024-06-19", quantity: 5 },
            { name: "cupcake", orderDate: "2024-06-19", quantity: 1 }
        ]
    }
];

export function getItemTotalCost(itemName) {
    const item = items.find(i => i.name === itemName);
    if (!item) {
        return { error: "Item not found." };
    }

    let totalCost = 0;

    users.forEach(user => {
        user.orders.forEach(order => {
            if (order.name === itemName) {
                totalCost += order.quantity * item.price;
            }
        });
    });

    return { itemName, totalCost };
}