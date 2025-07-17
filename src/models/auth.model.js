import { query, where, getDocs, collection, addDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { db } from "./firebase.js";

const accountsCollection = collection(db, "accounts");

export const validateUser = async (email, password) => {
    try {
        const q = query(
            accountsCollection,
            where("email", "==", email)
        );
        const accountsSnapshot = await getDocs(q);
        
        if (accountsSnapshot.empty) return null;

        const doc = accountsSnapshot.docs[0];
        const userData = doc.data();

        const passwordMatch = await bcrypt.compare(password, userData.password);
        if (!passwordMatch) return null;
        return { id: doc.id, ...userData };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createUser = async (email, password) => {
    try {
        const q = query(accountsCollection, where("email", "==", email));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            return null;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            email,
            password: hashedPassword,
            createdAt: new Date()
        };
        const docRef = await addDoc(accountsCollection, newUser);
        return { id: docRef.id, ...newUser };
    } catch (error) {
        console.error(error);
        throw error;
    }
};
