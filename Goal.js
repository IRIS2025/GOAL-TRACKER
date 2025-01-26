const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);
1const Goal = require('../models/Goal');

router.post('/', async (req, res) => {
    const newGoal = new Goal({
        title: req.body.title
    });

    const savedGoal = await newGoal.save();
    res.status(201).json(savedGoal);
});
