const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroupChat,
  addToGroupChat,
  removeFromGroupChat,
} = require("../controllers/chatController");

const router = express.Router();

// All the endpoints required for chat crud
router.route("/").post(protect, accessChat); // /api/chat
router.route("/").get(protect, fetchChats); // /api/chat
router.route("/group").post(protect, createGroupChat); // /api/chat/group
router.route("/rename").put(protect, renameGroupChat); // /api/chat/rename
router.route("/groupRemove").put(protect, removeFromGroupChat); // /api/chat/groupremove
router.route("/groupAdd").put(protect, addToGroupChat); // /api/chat/groupadd

module.exports = router;
