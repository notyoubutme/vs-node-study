const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    task: String,
    type: String,
    description: String,
    datePerf: Date,
    regularity: String,
    priority: String,
    _id_User: mongoose.Types.ObjectId, 
    tags: Array
});

module.exports = mongoose.model('RegularTasks', taskSchema);