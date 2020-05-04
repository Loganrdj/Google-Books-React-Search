const router = require('express').Router();
const saved_books_controller = require('../controllers/saved_books_controller')

router.route('/saved').get(saved_books_controller.findAll)

module.exports = router;
