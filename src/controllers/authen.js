import { handleAsync, getAccessToken, getRefreshToken, decodedToken } from "../utils";
import {DisabledToken} from '../models';

export const login = handleAsync(async (req, res) => {
    const {username, password} = req.body;
    if(username == 'admin' && password == 'admin') {
        res.json({
            accessToken: await getAccessToken(username, '15m'),
            refreshToken: await getRefreshToken(username, '1w')
        });
    }
    else {
        res.status(401);
        throw new Error('Username or password is not correct');
    }
});

export const logout = handleAsync(async (req, res) => {
    const token = req.body.refreshToken;
    const {type} = await decodedToken(token);
    if(type !== 'refresh') throw new Error('Token refresh invalid');
    
    const disabledToken = new DisabledToken({
        token
    });
    await disabledToken.save();
    res.json({
        message: 'Logout success'
    });
});

export const refreshToken = handleAsync(async (req, res) => {
    const refreshToken = req.body.refreshToken;
    const {username, type} = await decodedToken(refreshToken);

    if(await DisabledToken.findOne({token: refreshToken}) || type !== 'refresh') {
        throw new Error('Token refresh invalid');
    }

    res.json({
        accessToken: await getAccessToken(username, '15m'),
        refreshToken: await getRefreshToken(username, '1w')
    }); 
});
