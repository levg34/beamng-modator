import fs from 'fs/promises'
import { Info } from "./classes/info-types"
import { PC } from "./classes/pc-types"
import { getInfoFilePath, getPCFilePath } from './path-utils'

export async function writeInfoFile(modName: string, vehicle: string, configName: string, info: Info): Promise<void> {
    await fs.writeFile(getInfoFilePath(modName, vehicle, configName), JSON.stringify(info, null, 2))
}

export async function readPCFile(modName: string, vehicle: string, configName: string, pc: PC): Promise<void> {
    await fs.writeFile(getPCFilePath(modName, vehicle, configName), JSON.stringify(pc, null, 2))
}