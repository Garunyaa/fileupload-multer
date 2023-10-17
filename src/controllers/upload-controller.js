const multer = require("multer");

const Image = require("../models/image-model");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("testImage");

const uploadFile = async (req, res) => {
  upload(req, res, (error) => {
    if (error) {
      console.log(error);
    } else {
      const newImage = new Image({
        image: {
          data: req.file.filename,
          content_type: "image/jpg",
        },
      });
      newImage
        .save()
        .then(() => {
          res.send("Image uploaded successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

module.exports = uploadFile;
