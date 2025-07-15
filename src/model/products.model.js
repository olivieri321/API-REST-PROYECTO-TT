import {db} from "./data.js"
import {collection, doc, getDocs, getDoc, addDoc, deleteDoc, setDoc, query, where} from "firebase/firestore" 

const productsCollection = collection(db,"products")


// Devolver todos los productos
export const getAllProducts = async () => {
    try{
        const productsSnapshot = await getDocs(productsCollection);
        return productsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    }catch(error){
        console.error(error);
        throw error;
    }
}

// Devolver productos segun categorias, categories sera un array de strings
export const searchProductByCategory = async (categories) => {
    try {
        const q = query(
            productsCollection,
            where("category", "array-contains-any", categories)
        );
        const productsSnapshot = await getDocs(q);
        const products = productsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return products;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
// devuelve producto encontrado por id, id sera un string
export const searchProductById = async (id) =>{
    try{
        const productDoc = await getDoc(doc(productsCollection, id));
        if (productDoc.exists()){
            return productDoc.data();  
        }else{ 
            return null                 
        }
    }
    catch(error){
        console.error(error);
        throw error;
    }
}
// actualiza producto por id, id sera un string y productData un json con lo que se quiera cambiar del producto
export async function updateProduct(id, productData){
    try{
        const productRef = doc(productsCollection, id)
        const productSnapshot = await getDoc(productRef);
        if (!productSnapshot.exists()) {
            console.warn("Producto no encontrado con el id " + id);
            return false; 
        }
        await setDoc(productRef,productData);
        return {id, ...productData};
    }
    catch(error){
        console.error(error)
        throw error;
    }
}
// añade un producto, data sera un json
export const addProduct = async (data) => {
    try{
        const docRef = await addDoc(productsCollection, data)
        return {id: docRef.id, ...data}
    }catch(error){
        console.error(error)
        throw error;
    }
}
// borra un producto, id sera un string
export const deleteProduct = async (id) =>{
    try{
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        if (!snapshot.exists()){
            return 0;
        }
        await deleteDoc(productRef);
        return 1;
    }
    catch(error){
        console.error(error)
        throw error;
    }
}