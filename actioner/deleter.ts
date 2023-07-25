import fs from 'fs/promises'
import { getModPath } from '../utils/path-utils'

export async function deleteUnzippedMod(modName: string): Promise<void> {
    await fs.rm(getModPath(modName), { recursive: true })
}

export async function deleteZippedMod(modName: string): Promise<void> {
    await fs.rm(getModPath(modName) + '.zip')
}
