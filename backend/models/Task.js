const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: String, enum: ['urgent', 'important', 'normal'], default: 'normal' },
    status: { type: String, enum: ['todo', 'inprogress', 'done'], default: 'todo' },
    tags: [String],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', TaskSchema);
