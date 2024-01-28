import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const read = async () => {
    const __filename = url.fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

    try {
        const content = await fs.readFile(filePath, {encoding: 'utf8'})
        console.log(content)
    } catch {
        throw new Error('FS operation failed')
    }
}

await read()
