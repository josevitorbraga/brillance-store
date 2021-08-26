import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const secretAccessKey = process.env.AWSSECRET_KEY;
const accessKeyId = process.env.AWSACCESS_KEY;
const region = process.env.AWSREGION;
const bucketName = process.env.AWSBUCKET;

const fileHash = crypto.randomBytes(10).toString("hex");

const s3 = new aws.S3({
  bucketName: bucketName,
  region: region,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: bucketName,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,

    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${fileHash}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
});

export default upload;
