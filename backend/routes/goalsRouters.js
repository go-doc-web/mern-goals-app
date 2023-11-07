const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalsController");

// method chain refactoring

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", updateGoals);

// router.delete("/:id", deleteGoals);

module.exports = router;
