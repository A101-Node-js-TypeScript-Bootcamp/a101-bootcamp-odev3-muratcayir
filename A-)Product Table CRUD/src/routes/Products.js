const express=require("express")
const {getAllProduct,getProduct,addProduct,getDiscountProduct}=require("../controllers/Products")
const router=express.Router()

router.route("/").get(getAllProduct)
router.route('/:productId').get(getProduct)
router.route('/discount/product').get(getDiscountProduct)
router.route("/").post(addProduct)



module.exports=router;