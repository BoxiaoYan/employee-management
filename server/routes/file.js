const express = require("express");
const multer = require("multer");
const router = express.Router();
const { getFile, saveFile, getUserVisaStatus } = require("../handlers/file");

const storage = multer.memoryStorage(); // Store the file in memory as a buffer
const upload = multer({ storage: storage });

router.post("/save_file", upload.single("file"), saveFile);
router.get("/get_file/:filename/:userID", getFile);
router.get("/user_visa_status/:userID", getUserVisaStatus);

module.exports = router;
