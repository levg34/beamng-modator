import fs from 'fs/promises'
import { getModPath, getProgramPath } from '../utils/path-utils'

export function getBackupFileName(fileName: string): string {
    const path = fileName.split('/')
    const file = path.pop() ?? ''
    const [name, ext] = file.split('.')
    path.push(`${name}.bak${ext ? `.${ext}`: ''}`)
    return path.join('/')
}

async function backupFile(filePath: string) {
    await fs.copyFile(filePath, getBackupFileName(filePath))
}

export async function backupUnzippedMod(modName: string): Promise<void> {
    throw new Error('Not implemented')
}

export async function backupZippedMod(modName: string): Promise<void> {
    const modPath = getModPath(modName) + '.zip'
    await backupFile(modPath)
}

export async function backupProgram(modName: string): Promise<void> {
    const programPath = getProgramPath(modName)
    await backupFile(programPath)
}
