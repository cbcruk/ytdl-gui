import type { Handler } from 'vite-plugin-mix'
import express from 'express'
import ytdl from 'youtube-dl-exec'

const defaultArgs = {
  noWarnings: true,
  noCallHome: true,
  noCheckCertificate: true,
  youtubeSkipDashManifest: true,
}

const app = express()

app.use(express.json())

app.get('/api/ids/:rawUrl', async (req, res) => {
  try {
    const { rawUrl } = req.params
    const url = decodeURIComponent(rawUrl)

    const data = await ytdl(url, {
      ...defaultArgs,
      getId: true,
    })

    res.json({
      data,
    })
  } catch (error) {
    console.log(error)
  }
})

app.get('/api/info/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await ytdl(`https://www.youtube.com/watch?v=${id}`, {
      ...defaultArgs,
      dumpSingleJson: true,
    })

    res.json({
      data,
    })
  } catch (error) {
    console.log(error)
  }
})

app.post('/api/download', async (req, res) => {
  try {
    const { id, ...args } = req.body
    const data = await ytdl(id, {
      ...defaultArgs,
      ...args,
    })

    res.json({
      data,
    })
  } catch (error) {
    console.log(error)
  }
})

export const handler: Handler = app
