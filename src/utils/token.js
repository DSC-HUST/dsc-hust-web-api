import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../configs';

const getToken = async (username, type) => new Promise((resolve, reject) => {
    const expiresIn = (type === 'access') ? '15m' : '1w';
    jwt.sign({
        username, 
        type
    }, JWT_SECRET, {expiresIn}, (error, token) => {
        if(error) {
            reject(error);
        }
        else {
            resolve(token);
        }
    })
});

export const getAccessToken = async(username) => getToken(username, 'access');
export const getRefreshToken = async(username) => getToken(username, 'refresh');

export const decodedToken = async (token) => new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if(error) {
            reject(error);
        }
        else {
            resolve(decoded);
        }
    });
});

