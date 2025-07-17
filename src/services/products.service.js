import * as model from "../models/products.model.js"

export const getAllProducts = async () =>{
    try{
        return await model.getAllProducts();
    }
    catch(error){
        throw error;
    }
}

export const getProductById = async (id)=>{
    try{
      return model.getProductById(id);
    }
    catch(error){
        throw error;
    }
}