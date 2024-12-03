const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: boolean,
}, { timestamps: true });

TaskSchema.index({
    name: "text",
    likes: [{ type: ObjectId }],
  });
  
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;