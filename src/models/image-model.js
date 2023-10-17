const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  image: {
    data: Buffer,
    content_type: String,
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
