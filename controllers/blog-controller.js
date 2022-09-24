const asyncHandler = require('express-async-handler')

// @desc getBlogs
// @route GET api/blogs
// @access public
const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'get blogs' })
})

// @desc createBlog
// @route POST api/blogs
// @access public
const createBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'create blog' })
})

// @desc updateBlog
// @route PUT api/blogs/:id
// @access public
const updateBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `update goal ${req.params.id}` })
})

// @desc deleteBlog
// @route DELETE api/blogs/:id
// @access public
const deleteBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `deleted blog ${req.params.id}` })
})

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
}
