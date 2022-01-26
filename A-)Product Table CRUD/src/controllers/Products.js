const { listAllProduct,createProduct,singleProduct,deleteProduct,updateProductStock,discountProduct}= require("../services/Products")
const httpStatus = require("http-status");


const getAllProduct=(req,res)=>{
    listAllProduct()
    .then(response=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true}, response))
    }).catch(err=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    }) 
}

module.exports={getAllProduct}