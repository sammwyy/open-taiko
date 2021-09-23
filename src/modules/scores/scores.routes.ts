import { Request, Response, Router } from 'express'
import scores from './scores.json'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json(scores)
})

export default router
