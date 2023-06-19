import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const remove = async () => {
  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const removeFilePath = path.join(__dirname, 'files', 'fileToRemove.txt')

   try {
     await fs.rm(removeFilePath)
   } catch (err) {
     throw new Error('FS operation failed')
   }
}

await remove()
