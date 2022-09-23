const express = require("express");

const {
  body,
  check,
  validationResult
} = require('express-validator');
const postController = require("../controllers/post");


const router = express.Router();

router.get("/", postController.getHomePage);

router.get("/register", postController.getRegisterPage);
router.post("/register", [
  check('company', 'Please provide company name to register')
  .not()
  .isEmpty(),
  check('location', 'Please provide location name to register')
  .not()
  .isEmpty(),
  check('bio', 'Please provide your bio to register')
  .not()
  .isEmpty(),
], postController.renderFinalPage)

router.get("/login", postController.getLoginPage);
router.post("/login", postController.FinalPage);

module.exports = router;
