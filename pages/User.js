import  {userDatabase} from "../modules/Database.js";

export default function User(req, res){
    if (req.body.user != undefined){
        let userData = userDatabase(req.body.user)
        if(userData.error){
            res.json(
                userData
            )
        } else {
            res.json(
                {
                    "ordersList": userData.orders
                }
            )
        }
    } else{
        res.json({
            "error": "user is not given"
        })
    }
    res.send();
}
