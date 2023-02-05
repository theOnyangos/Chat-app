const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat } = require("../controllers/chatController");

const router = express.Router();

router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChat);
// router.route("/group").get(protect, createGroupChat);
// router.route("/rename").put(protect, renameGroupChat);
// router.route("/groupRemove").put(protect, removeFromGroupChat);
// router.route("/groupAdd").put(protect, addToGroupChat);

module.exports = router;
