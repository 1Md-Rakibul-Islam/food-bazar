import express from 'express'
import { createProduct, getProduct, getProducts } from '../Controllers/ProductController.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/:id', getProduct)
router.get('/', getProducts)

export default router;