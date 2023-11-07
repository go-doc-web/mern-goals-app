// @desc Get Goals
// @route GET /api/goals
// @Private

const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals New controller" });
};

// @desc Set Goals
// @route POST /api/goals
// @Private
const setGoals = (req, res) => {
  res.status(200).json({ message: " SET Goals" });
};

// @desc Update Goals
// @route PUT /api/goals/:id
// @Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc Delete Goals
// @route Delete /api/goals/:id
// @Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
