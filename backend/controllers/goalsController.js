const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals New controller' });
});

// @desc Set Goals
// @route POST /api/goals
// @Private
const setGoals = asyncHandler(async (req, res) => {
  // console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw Error('Please add a text field');
  }
  res.status(200).json(req.body);
});

// @desc Update Goals
// @route PUT /api/goals/:id
// @Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete Goals
// @route Delete /api/goals/:id
// @Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
