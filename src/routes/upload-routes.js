const express = require("express");

const uploadFile = require("../controllers/upload-controller");

const router = express.Router();

router.post("/upload", uploadFile);

module.exports = router;
