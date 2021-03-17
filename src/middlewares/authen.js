import { decodedToken, handleAsync } from "../utils";

export const authenticate = handleAsync(async(req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    if(!authorizationHeader) throw new Error("Required access token");
    const token = authorizationHeader.split(' ')[1];
    const {type} = await decodedToken(token);
    if(type !== 'access') throw new Error('Token invalid');
    next();
})