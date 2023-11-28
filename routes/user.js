var express = require("express");
var router = express.Router();
const {createUser, deleteUser, updateUser, findAllUser, findUser, } = require("../controller/userController")
/* GET users listing. */
router.post("/createUser", createUser);
router.get("/findAllUser", findAllUser);
router.put("/updateUser", updateUser);
router.get("/findUser/:id", findUser);
router.delete("/deleteUser/:id", deleteUser);


module.exports = router;
