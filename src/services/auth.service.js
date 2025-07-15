import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

const default_user = {
    id: '12345',
    email: 'admin@test.com',
    password: 'admin123',
    rol: 'admin' 
};

export const generateToken = (userData) => {
  const user = {id: userData.id, email: userData.email};
  const expiration = { expiresIn: '1h' };
  return jwt.sign(user, secret_key, expiration);
}

export async function login(email, password) {
  try{
    if (email === default_user.email
      && password === default_user.password) {
      const token = generateToken(default_user);
      return token;
    } else {
      return null;
    }
  }catch(error){
    console.log("Error en el login del usuario " + error )
    throw error;
  }
  
}
