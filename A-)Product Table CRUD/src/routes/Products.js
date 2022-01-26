const express=require("express")
const {getAllProduct,getProduct}=require("../controllers/Products")
const router=express.Router()

router.route("/").get(getAllProduct)
router.route('/:productId').get(getProduct)



module.exports=router;