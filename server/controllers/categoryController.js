const Category = require('../models/categoryModel.js')
const asyncHandler = require('express-async-handler')

const getCategory = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Category.countDocuments({ ...keyword })
  const sort = { length: -1, createdAt: -1 }
  const category = await Category.find({ ...keyword })
    .sort(sort)
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ category, page, pages: Math.ceil(count / pageSize) })
})

const getCategories = async (req, res) => {
  const sort = { length: -1, createdAt: -1 }
  const category = await Category.find({}).sort(sort)
  res.json(category)
}

const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    res.json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)

    if (category) {
      await category.deleteOne()
      res.status(200).json({ message: 'Category removed' })
    } else {
      res.status(404).json({ message: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' }) // Handle server/database error
  }
}

const createCategory = async (req, res) => {
  try {
    const { name } = req.body

    // Input validation
    if (!name) {
      return res.status(400).json({ message: 'Category name is required.' })
    }

    // Create a new category
    const cat = new Category({
      name: name, // Assuming 'name' is the field in the Category schema
    })

    // Save the category
    const createdCategory = await cat.save()

    // Respond with the created category
    res.status(201).json(createdCategory)
  } catch (error) {
    // Handle errors
    console.error(error)
    res.status(500).json({ message: 'Category creation failed.' })
  }
}

const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body

  const category = await Category.findById(req.params.id)

  if (category) {
    category.name = name

    const updatedCategory = await category.save()
    res.json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

module.exports = {
  getCategory,
  getCategoryById,
  deleteCategory,
  createCategory,
  updateCategory,
  getCategories,
}
