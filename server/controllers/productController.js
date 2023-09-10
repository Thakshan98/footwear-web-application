const Footwear = require('../models/footwearModel.js')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Footwear.countDocuments({ ...keyword })
  const sort = { length: -1, createdAt: -1 }
  const products = await Footwear.find({ ...keyword })
    .sort(sort)
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

const getProductById = async (req, res) => {
  const product = await Footwear.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

const deleteProduct = async (req, res) => {
  const product = await Footwear.findById(req.params.id)

  if (product) {
    await product.deleteOne()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

const createProduct = async (req, res) => {
  const {
    name,
    cat,
    size,
    gender,
    price,
    image,

    description,
  } = req.body

  try {
    const product = new Footwear({
      name,
      cat,
      size,
      gender,
      price,
      user: req.user._id, // Assuming user authentication is set up
      image,

      numReviews: 0,
      description,
    })

    const createdProduct = await product.save()

    res.status(201).json(createdProduct)
  } catch (error) {
    // Handle any errors that occurred during product creation
    res
      .status(500)
      .json({ error: 'An error occurred while creating the product.' })
  }
}

const updateProduct = async (req, res) => {
  const { name, cat, size, gender, price, description, image, countInStock } =
    req.body

  const product = await Footwear.findById(req.params.id)

  if (product) {
    product.name = name
    product.cat = cat
    product.size = size
    product.gender = gender
    product.price = price
    product.description = description
    product.image = image
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

const createProductReview = async (req, res) => {
  const { rating, comment } = req.body

  const product = await Footwear.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

const getTopProducts = async (req, res) => {
  const products = await Footwear.find({}).sort({ rating: -1 }).limit(5)
  res.json(products)
}

const getTopNewArivals = async (req, res) => {
  const productsArrival = await Footwear.find({}).sort({ price: -1 }).limit(5);
  res.json(productsArrival)
}

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getTopNewArivals,
}
