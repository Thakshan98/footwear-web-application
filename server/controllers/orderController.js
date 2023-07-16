const Order = require("../models/orderModel.js");


const addOrderItems =async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
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

    res.status(201).json(createdOrder)
  }
};


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
};


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
};
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
};

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
};


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
};


const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
};

const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    await order.remove()
    res.json({ message: 'Order removed' })
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
};

const getOrders = async (req, res) => {
  const sort = { length: -1 , createdAt: -1};
  const orders = await Order.find({}).populate('user', 'id name').sort(sort)
  res.json(orders)
};


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
