const express = require("express")
const router = express.Router()
import { addUser } from "../data/perparedStatements";


router.post("/userSignUp",async(req,res)=>{
  const signUp = await addUser()
  console.log(signUp)
})



module.exports = router