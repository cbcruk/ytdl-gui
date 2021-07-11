const { ipcRenderer } = window.require('electron')

const download = `--newline -o "${
  process.env.REACT_APP_USERPROFILE.trim() || '~'
}/Downloads/%(title)s-%(id)s.%(ext)s"`

export const options = {
  ids: '--get-id',
  json: `-o "${process.env.REACT_APP_INIT_CWD}/log/%(id)s.%(ext)s" --skip-download --write-info-json --print-json`,
  audio: `${download} -x --audio-format mp3`,
  video: `${download}`,
}

async function ytdl({ url, options }) {
  const stdout = await ipcRenderer.invoke(
    'ytdl',
    `--no-warnings ${options} ${url.replace(/&t=.+/, '')}`
  )

  return stdout
}

export default ytdl
