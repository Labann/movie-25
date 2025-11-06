import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
console.log("Cloudinary ENV:", {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
//upload a single buffer
export const uploadToCloudinary = (fileBuffer, options) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({
            resource_type: "image", // ✅ REQUIRED for buffer uploads
            folder: options?.folder || "uploads",
            filename_override: `img_${Date.now()}`,
            use_filename: true,
        }, (err, result) => {
            if (err)
                return reject(err);
            resolve(result);
        });
        stream.end(fileBuffer);
    });
};
export default cloudinary;
//# sourceMappingURL=cloudinary.js.map