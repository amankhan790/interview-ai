import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 3 * 2024 * 2024,
  },
});


export default  upload