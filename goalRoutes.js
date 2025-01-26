const express = require('express');
const router = express.Router();

// Sample goals array
let goals = [
    { id: 1, title: 'Lose 5kg', completed: false },
    { id: 2, title: 'Read 10 books', completed: true },
];

// GET all goals
router.get('/', (req, res) => {
    res.json(goals);
});

// POST a new goal
router.post('/', (req, res) => {
    const newGoal = {
        id: goals.length + 1,
        title: req.body.title,
        completed: false
    };
    goals.push(newGoal);
    res.status(201).json(newGoal);
});

// Update goal
router.put('/:id', (req, res) => {
    const goal = goals.find(g => g.id === parseInt(req.params.id));
    if (!goal) return res.status(404).json({ message: 'Goal not found' });

    goal.completed = req.body.completed;
    res.json(goal);
});

// Delete goal
router.delete('/:id', (req, res) => {
    goals = goals.filter(g => g.id !== parseInt(req.params.id));
    res.json({ message: 'Goal deleted' });
});

module.exports = router;
