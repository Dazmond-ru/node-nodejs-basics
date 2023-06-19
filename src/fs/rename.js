import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const rename = async () => {
  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const oldFilePath = path.join(__dirname, 'files', 'wrongFilename.txt')
  const newFilePath = path.join(__dirname, 'files', 'properFilename.md')

  try {
    await fs.access(oldFilePath, fs.constants.F_OK)
    await fs.rename(oldFilePath, newFilePath)
  } catch (err) {
    throw new Error('FS operation failed')
  }
}

await rename()
