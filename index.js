const express = require('express')
const { Server } = require('http')
const ytdl = require('./src/lib/ytdl')

const app = express()
const server = new Server(app)
const defaultArgs = {
  noWarnings: true,
  noCallHome: true,
  noCheckCertificate: true,
  youtubeSkipDashManifest: true,
}

server.listen(8080)

app.use('/', express.static(__dirname + '/dist'))

app.get('/', function (_req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

app.get('/api/ids/:url', async (req, res) => {
  try {
    const { url } = req.params
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
    const data = await ytdl(id, {
      ...defaultArgs,
    })

    res.json({
      data,
    })
  } catch (error) {
    console.log(error)
  }
})
