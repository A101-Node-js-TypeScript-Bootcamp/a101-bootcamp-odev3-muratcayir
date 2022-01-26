const express=require("express")
const {getAllProduct,getProduct,getDiscountProduct}=require("../controllers/Products")
const router=express.Router()

router.route("/").get(getAllProduct)
router.route('/:productId').get(getProduct)
router.route('/discount/product').get(getDiscountProduct)



module.exports=router;