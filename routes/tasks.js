const express = require("express")
const TaskController = require("../controllers/TaskController")
const router = express.Router()

router.get("/",TaskController.getAll)
router.post("/create", TaskController.create)
router.delete("/id/:_id", TaskController.delete)
router.put("/id/:_id", TaskController.update)

module.exports = router