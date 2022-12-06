

 const router = require("express").Router();
 const roomCtrl = require("../controllers/room");
 const {
    verifyAdmin,
    verifyToken,
    verifyUser,
  } = require("../utils/verifyToken");

 //CREATE
router.post("/", verifyAdmin, roomCtrl.createRoom);

//UPDATE
router.put("/:id", verifyAdmin, roomCtrl.updateRoom);
//DELETE
router.delete("/:id", verifyAdmin, roomCtrl.deleteRoom);
//GET

router.get("/find/:id", roomCtrl.getRoom);
//GET ALL

router.get("/", roomCtrl.getRooms);
router.get("/countByCity", roomCtrl.countByCity);
router.get("/countByType", roomCtrl.countByType);
 
 module.exports = router;
 