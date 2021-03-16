import {handleAsync, uploadImageToS3} from '../utils';

export const uploadImage = handleAsync(async (req, res) => {
    if(!req.file) throw new Error('Image upload not found');
    const {Location} = await uploadImageToS3(req.file);
    res.json({
        url: Location
    });
});