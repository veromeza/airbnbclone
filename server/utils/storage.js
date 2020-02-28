const cloudinary = require('cloudinary');

const storage = ({ stream }) => {

    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD,
        api_key:process.env.CLOUDINARY_KEY,
        api_secret:process.env.CLOUDINARY_SECRET
    });

    return new Promise ((resolve, reject) => {
        const buffer = cloudinary.v2.uploader.upload_stream((err, result) => {
            console.log(err);
            if(err) reject(err)
            resolve(result);
        });
        stream.pipe(buffer);
    });

};

module.exports = storage;