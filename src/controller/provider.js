require("dotenv").config();
const Provider=require('../models/provider')


async function providers (req,res){
    try{
        const users=await Provider.find({})
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
}


module.exports= {providers}