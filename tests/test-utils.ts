import JSZip from 'jszip'
import fs from 'fs/promises'
import { EXPECTED_INFO } from './test-constants'

const testFolder = 'test'
export const testZip = testFolder + '/test.zip'

export async function createTestZip() {
    fs.mkdir(testFolder)
    const zip = new JSZip()

    zip.file('test.txt', 'Test file content')
    zip.file('folder/nested.json', JSON.stringify(EXPECTED_INFO))

    const content = await zip.generateAsync({ type: 'nodebuffer' })
    await fs.writeFile(testZip, content)
}

export async function deleteTestZip() {
    await fs.rm(testFolder, { force: true, recursive: true })
}

export async function listTestContent(relativePath?: string): Promise<string[]> {
    const folderContent = await fs.readdir(testFolder+(relativePath? '/'+relativePath : ''))
    return folderContent
}
