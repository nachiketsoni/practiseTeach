var express = require("express");
var router = express.Router();
const { createPost, findAllPost, updatePost, findPost, deletePost, likePost } = require("../controller/postController")
/* GET Posts listing. */
router.post("/createPost", createPost);
router.get("/findAllPost", findAllPost);
router.put("/updatePost", updatePost);
router.get("/findPost/:id", findPost);
router.delete("/deletePost/:id", deletePost);
router.patch("/likePost/:userid/:postid", likePost);

module.exports = router;
