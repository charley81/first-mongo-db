const express = require('express')
const router = express.Router()
const {
  getBlogs,
  updateBlog,
  createBlog,
  deleteBlog,
} = require('../controllers/blog-controller')

router.route('/').get(getBlogs).post(createBlog)
router.route('/:id').put(updateBlog).delete(deleteBlog)

module.exports = router
