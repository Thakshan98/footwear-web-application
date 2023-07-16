const Category = require("../models/categoryModel.js");

const getCategory = async (req, res) => {
  const pageSize = 6
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
  const sort = { length: -1 , createdAt: -1};
  const categories = await Category.find({ ...keyword }).sort(sort)
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ categories, page, pages: Math.ceil(count / pageSize) })
};


const getCategoryById = async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    res.json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
};


const deleteCategory = async (req, res) => {
  const category = await Footwear.findById(req.params.id)

  if (category) {
    await category.remove()
    res.json({ message: 'Category removed' })
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
};


const createCategory = async (req, res) => {
  const category = new Category({
    name: 'Sample name',
  })

  const createdCategory = await category.save()
  res.status(201).json(createdCategory)
};


const updateCategory = async (req, res) => {
  const {
    name,
  } = req.body

  const category = await Category.findById(req.params.id)

  if (category) {
    category.name = name

    const updatedCategory = await category.save()
    res.json(updatedcategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
};


module.exports = {
  getCategory,
  getCategoryById,
  deleteCategory,
  createCategory,
  updateCategory,
}
