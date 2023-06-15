import express from 'express'

import { createOrder, getOrders, updateOrderStatus } from '../Controllers/OrderModel.js'

const router = express.Router()

router.post('/', createOrder)
router.get('/', getOrders)
router.patch('/:id', updateOrderStatus)

export default router;