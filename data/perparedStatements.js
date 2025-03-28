import db from "./database";
import bcrypt from "bcryptjs"
const Hash = 6

const addUser = async(email,password,address,state,zipCode,phoneNumber)=>{
   bcrypt.hash(password,Hash,async(err,hash)=>{
       try{
         const sql = "INSERT INTO Users(email,password,address,state,zipCode,phoneNumber)" + 
          "VALUES (?,?,?,?,?,?)"
         const [results] = await db.query(sql,[email,hash,address,state,zipCode,phoneNumber])
         return results
       }catch(error){
         return err 
       }
   })

}

const getUser = async(email,password)=>{
   
}

const getCars = async(userID)=>{

}

const getUSerOrders = async(userID)=>{

}

module.exports = {
    addUser,
    getUser,
    getCars,
    getUSerOrders
}