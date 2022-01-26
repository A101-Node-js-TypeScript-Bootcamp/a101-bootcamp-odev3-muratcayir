const { listAllProduct,createProduct,singleProduct,discountProduct}= require("../services/Products")
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


module.exports={getAllProduct,addProduct,getProduct,getDiscountProduct}