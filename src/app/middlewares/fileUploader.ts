

import multer from 'multer';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dtp5fwvg9',
  api_key: process.env.CLOUDINARY_API_KEY || '592791113848874',
  api_secret: process.env.CLOUDINARY_API_SECRET || '61C-JnIo59kLnXhJXHtd6G3cjmU',
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadToCloudinary = async (file:Express.Multer.File): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto',
        public_id: file.originalname,
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary Upload Error:', error);
          return reject(error);
        }
        if(!result) {
            return reject(new Error('Cloudinary result is undefined'));
        }
        resolve(result);
      }
    );

    //  Correct stream piping
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};

export const fileUploader = { upload, uploadToCloudinary };
