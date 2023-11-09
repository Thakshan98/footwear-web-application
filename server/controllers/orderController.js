const Order = require('../models/orderModel.js')
const Product = require('../models/footwearModel.js')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (!orderItems || orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' })
    return
  }

  let session // Declare the session variable here

  try {
    // Start a database transaction to ensure data consistency
    session = await mongoose.startSession()
    session.startTransaction()

    // Update product quantities and create the order
    for (const item of orderItems) {
      const product = await Product.findById(item.product)
      if (!product) {
        throw new Error(`Product not found: ${item.product}`)
      }

      const selectedSize = product.size.find((size) => size.size === item.size)
      if (!selectedSize && item.size < 30) {
        throw new Error(`Size not found for product: ${product.name}`)
      }

      // Check if there's enough quantity
      if (item.size < 30 && selectedSize.count < item.count) {
        throw new Error(`Not enough quantity for product: ${product.name}`)
      }

      // Decrease product size count
      if (item.size < 30) {
        selectedSize.count -= item.count
        await product.save()
      }
    }

    // Create the order
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()

    // Commit the transaction
    await session.commitTransaction()
    session.endSession()

    res.status(201).json(createdOrder)
  } catch (error) {
    console.error('Error creating order:', error)

    // Rollback the transaction if an error occurs
    if (session) {
      await session.abortTransaction()
      session.endSession()
    }

    res.status(500).json({ message: 'out of stock' })
  }
})

const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
}

const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
}

const updateOrderToPaidCash = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
}

const updateShow = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.show = false

    const updatedShow = await order.save()

    res.json(updatedShow)
  } else {
    res.status(404)
    throw new Error('Show not found')
  }
}

const updateOrderToDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
}

const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })

  if (orders) {
    res.json(orders)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}

const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    await order.deleteOne()
    res.json({ message: 'Order removed' })
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
}

const getOrders = async (req, res) => {
  const sort = { length: -1, createdAt: -1 }
  const orders = await Order.find({}).populate('user', 'id name').sort(sort)
  res.json(orders)
}

module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToPaidCash,
  updateOrderToDelivered,
  updateShow,
  getMyOrders,
  getOrders,
  deleteOrder,
}
