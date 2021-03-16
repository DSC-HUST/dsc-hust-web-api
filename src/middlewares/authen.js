import { decodedToken, handleAsync } from "../utils";

export const authenticate = handleAsync(async(req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    const {type} = await decodedToken(token);
    if(type !== 'access') throw new Error('Token invalid');
    next();
})