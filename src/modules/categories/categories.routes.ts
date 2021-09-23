import { Request, Response, Router } from 'express'
import categories from './categories.json'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json(categories)
})

export default router
