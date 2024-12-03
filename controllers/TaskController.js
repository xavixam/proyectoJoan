const Task = require("../models/Task")

const TaskController = {
    async create(req, res) {
        try {
            const task = await Task.create(req.body)

            res.status(201).send({ message: "New task successfully created", task })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getAll(req, res) {
        try {
            const products = await Task.find()
            res.send(products)
        } catch (error) {
            console.error(error);
        }
    },
    async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id)
            res.send(task)
        } catch (error) {
            console.error(error);
        }
    },
    async getByTitle(req, res) {
        try {
            const tasks = await Task.find({
                $text: {
                    $search: req.params.title,
                },
            });
            res.send(tasks);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res) {
        try {
            const task = await Task.findByIdAndDelete(req.params._id)
            res.send({ message: 'Task deleted', task })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the task' })
        }
    },
    async update(req, res) {
        try {
            const task = await Task.findByIdAndUpdate(
                req.params._id, //id del producto que quiero actualizar
                req.body,// el objeto con los datos a actualizar 
                { new: true }// para que el task de la respuesta sea el actualizado
            )
            res.send({ message: "task successfully updated", task });
        } catch (error) {
            console.error(error);
        }
    },

}

module.exports = TaskController