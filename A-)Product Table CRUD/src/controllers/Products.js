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

const addProduct=(req,res)=>{
    createProduct(req.body)
    .then(response=>{
        res.status(httpStatus.CREATED).send(Object.assign({ status: true, message:"The product has been successfully added."}, response))
    }).catch(err=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    }) 
}

const getProduct=(req,res)=>{
    singleProduct(req.params) 
    .then(response=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true}, response))
    }).catch(err=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    }) 
}

const getDiscountProduct=(req,res)=>{
    discountProduct()
    .then(response=>{
        res.status(httpStatus.OK).send(Object.assign({ status: true}, response))
    }).catch(err=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: err })
    }) 
}

const updateProduct=(req,res)=>{
    if (!req.params?.productId) {
        return res.status(httpStatus.BAD_REQUEST).send({
          message: "ID  error",
        });}    
    updateProductStock(req.params.productId,req.body.stock)
    .then(response=>{
        res.status(httpStatus.OK).send(Object.assign({message:"The product has been successfully updated"}, response))
    }).catch(e=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
    }) 
}

const removeProduct=(req,res)=>{
    if (!req.params?.productId) {
        return res.status(httpStatus.BAD_REQUEST).send({
          message: "ID error.",
        });
      }
    deleteProduct(req.params.productId)
    .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(httpStatus.NOT_FOUND).send({
            message: "Product is not found.",
          });
        }
        return res.status(httpStatus.OK).send({
          message: "The product has been successfully deleted",
        });
      })
      .catch((e) => {
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send({ error: "An error occurred while deleting the product." });
      });
}
module.exports={getAllProduct,addProduct,getProduct,updateProduct,removeProduct,getDiscountProduct}