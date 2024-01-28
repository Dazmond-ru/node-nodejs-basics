import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

const copy = async () => {
    const __filename = url.fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const sourceDir = path.join(__dirname, 'files')
    const targetDir = path.join(__dirname, 'files_copy')

    try {
        await fs.mkdir(targetDir, {recursive: false})
        await fs.access(sourceDir, fs.constants.F_OK)
    } catch {
        throw new Error('FS operation failed')
    }

    const files = await fs.readdir(sourceDir)

    for (const file of files) {
        const sourcePath = path.join(sourceDir, file)
        const targetPath = path.join(targetDir, file)

        await fs.copyFile(sourcePath, targetPath)
    }
}

await copy()
