import * as auth from "../services/auth.service.js"
import * as model from "../model/products.model.js"

// devolver todos los productos
export const getAllProdtucts = async (req, res) => {
  try {
    const products = await model.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error al obtener los productos." });
  }
};
// devolver los productos filtrados
export const searchProductByCategory = async (req, res) => {
    try{
        const categoryQuery = req.query.categories;
        if (!categoryQuery){
            return res.status(400).json({message: "Se requiere almenos una categoria"})
        }
        const categoryArray = categoryQuery
        .split(",").map(cat => cat.trim()).filter(cat => cat.length > 0)
            
        if (categoryArray.length === 0) {
            return res.status(400).json({message: "Error al procesar las categorias"})
        }
        const results = await model.searchProductByCategory(categoryArray);
        if(results.length > 0){
            res.status(200).json(results);
        }else{
            res.status(404).json({message: "No se encontraron productos en esa categoria"});
        }
    }catch(error){
        console.error("Error al buscar productos por categorias:", error);
        res.status(500).json({message: "Error interno del servidor al buscar productos"})
    }
    
    
};
// devolver los productos filtrados por ID
export const searchProductByID = async (req, res) => {
    try{
        const productId = res;
        if(!productId){
            return res.status(400).json({message: "ID de producto no valido"})
        }
        const search = await model.searchProductById(req.params.id);
        if(search){
            res.status(200).json(search);
        }else{
            res.status(404).json({message: "Producto no encontrado"});
        }
    }catch(error){
        console.error("Error al buscar producto por id:", error);
        res.status(500).json({message: "Error interno del servidor al buscar el producto"})
    };
}
// agregar un producto
export const postProduct = async (req, res) => {
    try{
        const productData = req.body;
        if (!productData || Object.keys(productData).length === 0) {
        return res.status(400).json({ message: "Datos del producto requeridos" });
        }
        const newProduct = await model.addProduct(productData);
        res.status(201).json(newProduct);  
    }catch(error){
        console.error("Error al postear producto:", error);
        res.status(500).json({message: "Error interno del servidor"})
    }  
};
// editar un producto
export const putProduct = async (req, res) => {
    try{
        const productId = req.params.id;
        const updatedProductData = req.body;

        if(!productId){
            return res.status(400).json({message: "Id de producto requerido"})
        }
        if (!updatedProductData || Object.keys(updatedProductData).length === 0) {
            return res.status(400).json({ message: "Datos de actualizacion requeridos" });
        }

        const updatedProduct = await model.updateProduct(productId,updatedProductData);

        if (updatedProduct == false){
            res.status(404).send();
        }else{
            res.status(200).json(updatedProduct);
        }
    }catch(error){
        console.error("Error al editar producto:", error);
        res.status(500).json({message: "Error interno del servidor"})
    }

    
};
// borrar un producto,
export const deleteProduct = async (req, res) => {
    try{
        const productId = req.params.id
        if(!productId){
            return res.status(400).json({ message: "Id de producto es requerido para eliminar" });
        }
        const deletedCount = await model.deleteProduct(productId);
        if(deletedCount > 0){
            res.status(204).send();
        }else{
            res.status(404).json({message: "Producto no encontrado"})
        }
    }catch(error){
        console.error("Error al borrar producto:", error);
        res.status(500).json({message: "Error interno del servidor"})
    }
};
// login de usuario
export const userLogin = async (req, res)=>{
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Credenciales incompletas"})
        }
        const token = await auth.login(email, password);
        if(token){
            res.status(200).header("Authorization", "Bearer "+token).json({token})
        }else{
            res.status(401).json({message: "Credenciales invalidas"})
        }
    }catch(error){
        console.error("Error al iniciar sesion", error);
        res.status(500).json({message: "Error interno del servidor"})
    }
}
