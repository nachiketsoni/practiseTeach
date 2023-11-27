var express = require("express");
var router = express.Router();
const {createUser, FindAllUser, updateUser, deleteUser} = require("../controller/indexController")
/* GET users listing. */
router.post("/createUser", createUser);
router.get("/findAllUser", FindAllUser);
router.get("/updateUser", updateUser);
router.get("/deleteUser", deleteUser);

module.exports = router;
