/*
 *  mysql server:
 *    address/host = localhost
 *    port =?
 *    username = san
 *    password = cr
 *
 *  create tables in phpmyadmin
 *  connect to the mysql database in nodejs
 *  test the connection (CRUD operations)
 */


function connectDB(){
}


export const users = [
    
     {
         username: "san",
         orders: [
             {
                 name: "cupcake",
                 orderDate: "2024-06-17"
             },
             {
                 name: "cooldrink",
                 orderDate: "2024-06-19"
             }
         ]
     },
     {
         username: "sank",
         orders: [
             {
                 name: "samosa",
                 orderDate: "2024-06-16"
             }
         ]
     }
 ];

 export function userDatabase(username) {
    if (!username) {
        return {
            error: "Username cannot be empty."
        };
    }

    let userIndex = users.findIndex((data) => data.username === username);
    if (userIndex === -1) {
        return {
            error: "User not found."
        };
    } else {
        return users[userIndex];
    }
}

export function getOrdersByDate(date) {

    if (!date) {
        return {
            error: "Date cannot be empty."
        };
    }

    let results = users
        .map(user => {
            let matchingOrders = user.orders.filter(order => order.orderDate === date);
            if (matchingOrders.length > 0) {
                return {
                    username: user.username,
                    orders: matchingOrders
                };
            }
            return null;
        })
        .filter(result => result !== null);

    if (results.length === 0) {
        return {
            message: "No orders found for the given date."
        };
    }

    return results;
}
export default {
    users,
    userDatabase,
    getOrdersByDate
};






//  function userDatabase(username){
    //  let userIndex = users.findIndex((data) => data.username == username);
    //  if (userIndex == -1){
        //  return {
            //  error: "user not found."
        //  }
    //  } else {
        //  return users[userIndex];
    //  }
// 
//  }
// 
// function orders(date)
// {
    // let orders = [];
    // orders.push({username: username, orderDate:orderDate});
    // orderlist = users.filter(order => order.orderDate == date);
    // return(orders)
// }

// function userDatabase(username) {
    // if (!username) {
        // return {
            // error: "Username cannot be empty."
        // };
    // }
// 
    // let userIndex = users.findIndex((data) => data.username === username);
    // if (userIndex === -1) {
        // return {
            // error: "User not found."
        // };
    // } else {
        // return users[userIndex];
    // }
// }

//  export { "userDatabase", "getOrdersByDate" }








