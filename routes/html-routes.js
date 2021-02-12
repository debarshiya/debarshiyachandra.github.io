// Import Express router
const router = require("express").Router();

//Import path
const path = require("path");

// GET Request : Women Health and Wellness Home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/workout", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/workout.html"));
});
// GET Request : Exercise Page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET Request : Stats Page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// GET Request : Health Parameters Page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/parameters.html"));
});

// GET Request : Wellness Planner Page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/planner.html"));
});

// Export HTML routes
module.exports = router;
