// import { orders } from "../modules/Database.js"
// export default function Todays_orders(req, res) {
  // let orderlist = orders(req.body.Date)
  // if (orderlist.length != 0) {
    // res.json(
// 
      // "orderlist"
    // )
  // }
// 
  // else {
    // res.json(

      // "orders not found"
  //  )
// 
  // }
import { users,userDatabase, getOrdersByDate } from "../modules/Database.js";


export default function handleOrdersPost(req, res) {

    const { date } = req.body;
    
    if (!date) {
        return res.status(400).json({ error: "Date is required." });
    }

    const orders = getOrdersByDate(date);
    res.json(orders);
}


