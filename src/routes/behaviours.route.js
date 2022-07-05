const express = require("express");
const router = express.Router();

const { getBehaviours } = require('../controllers/behaviours.controller');

router.route('/behaviours').get(getBehaviours);

module.exports = router;