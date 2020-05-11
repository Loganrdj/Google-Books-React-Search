const router = require('express').Router();
const saved_books_controller = require('../controllers/saved_books_controller')

router.route('/saved')
    .get(saved_books_controller.findAll)
    .post(saved_books_controller.create)
    .delete(saved_books_controller.remove)
router.route('/search')
    .get(saved_books_controller.findAll)

module.exports = router;
