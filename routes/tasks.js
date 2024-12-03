const express = require("express")
const TaskController = require("../controllers/TaskController")
const router = express.Router()

router.get("/",TaskController.getAll)
router.get("/getById/:_id",TaskController.getById)
router.get("/getByTitle/:title",TaskController.getByTitle)
router.post("/create", TaskController.create)
router.delete("/id/:_id", TaskController.delete)
router.put("/id/:_id", TaskController.update)

module.exports = router