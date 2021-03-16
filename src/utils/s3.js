import AWS from 'aws-sdk';
import uuid from 'uuid';
import path from 'path';

import {ACCESS_KEY_ID, SERCRET_ACCESS_KEY} from '../configs';

const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SERCRET_ACCESS_KEY
});

export const uploadImageToS3 = async (image) => {
    return await s3.upload({
        Bucket: 'dschustwebapi',
        Key: `${uuid.v4()}${path.extname(image.originalname)}`,
        Body: image.buffer,
        ACL: 'public-read',
        ContentType: image.mimetype
    }).promise();
}