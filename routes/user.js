var express = require("express");
var router = express.Router();
const {createUser, deleteUser, updateUser, findAllUser, findUser, followUser, } = require("../controller/userController")
/* GET users listing. */
router.post("/createUser", createUser);
router.get("/findAllUser", findAllUser);
router.put("/updateUser", updateUser);
router.get("/findUser/:id", findUser);
router.delete("/deleteUser/:id", deleteUser);
router.patch("/follow", followUser);


module.exports = router;
// 6568d02cb2352945a48b066b


// 658b1ee9541a12ec1c2af0eb