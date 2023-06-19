import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const list = async () => {
  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const filesPath = path.join(__dirname, 'files')

  try {
    const files = await fs.readdir(filesPath)
    console.log(files)
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await list()
