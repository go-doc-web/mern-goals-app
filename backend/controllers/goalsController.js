// @desc Get Goals
// @route GET /api/goals
// @Private

const getGoals = async (req, res) => {
  res.status(200).json({ message: 'Get Goals New controller' });
};

// @desc Set Goals
// @route POST /api/goals
// @Private
const setGoals = async (req, res) => {
  // console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw Error('Please add a text field');
  }
  res.status(200).json(req.body);
};

// @desc Update Goals
// @route PUT /api/goals/:id
// @Private
const updateGoals = async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc Delete Goals
// @route Delete /api/goals/:id
// @Private
const deleteGoals = async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
