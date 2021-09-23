import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({
    songs_baseurl: '/songs/',
    assets_baseurl: '/assets/',
    email: null,
    accounts: true,
    custom_js: '',
    _version: '1.0',
  })
})

export default router
