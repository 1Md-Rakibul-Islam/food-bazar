import express from 'express'

import { createOrder, getOrders, getPendingOrders, updateOrderStatus } from '../Controllers/OrderControllers.js'

const router = express.Router()

router.post('/', createOrder)
router.get('/', getOrders)
router.get('/pending', getPendingOrders)
router.patch('/:id', updateOrderStatus)

export default router;