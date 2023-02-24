import fs from 'fs/promises'
import { Info } from "../types/info-types"
import { PC } from "../types/pc-types"
import { getInfoFilePath, getPCFilePath } from '../utils/path-utils'

export async function writeInfoFile(modName: string, vehicle: string, configName: string, info: Info): Promise<void> {
    await fs.writeFile(getInfoFilePath(modName, vehicle, configName), JSON.stringify(info, null, 4))
}

export async function writePCFile(modName: string, vehicle: string, configName: string, pc: PC): Promise<void> {
    await fs.writeFile(getPCFilePath(modName, vehicle, configName), JSON.stringify(pc, null, 4))
}