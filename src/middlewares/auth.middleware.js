import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {

    if (req.headers.authorization == null || !req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({message: "No autorizado"});
    }
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) return res.status(401).json({message: "Token vacio"});


    jwt.verify(token, secret_key, (err, user) => {
        if (err) return res.status(403).json({message: "Token invalido o expirado"});
        req.user = user;
        next();
    });
  }