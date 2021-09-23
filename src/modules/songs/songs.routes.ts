import { Request, Response, Router } from 'express'
import fs from 'fs'
import path from 'path'

const songs = []
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json(songs)
})

const directories = fs
  .readdirSync('./public/songs', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

for (let directory of directories) {
  const songPath = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'public',
    'songs',
    directory,
    'song.json',
  )
  const songData = require(songPath)
  songData.id = directory
  songData.order = songs.length + 1
  songs.push(songData)
}

console.log('Loaded ' + songs.length + ' song(s).')

export default router
