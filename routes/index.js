var express = require("express");
var router = express.Router();
const { createUser , FindAllUser} = require("../controller/indexController");
/* GET home page. */
router.post("/createUser", createUser);
router.get("/findAllUser", FindAllUser );

module.exports = router;
