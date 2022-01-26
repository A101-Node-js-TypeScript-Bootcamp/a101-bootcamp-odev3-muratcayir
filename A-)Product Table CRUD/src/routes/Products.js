const express=require("express")
const {getAllProduct}=require("../controllers/Products")
const router=express.Router()

router.route("/").get(getAllProduct)



module.exports=router;