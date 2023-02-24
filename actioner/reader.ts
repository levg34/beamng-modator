import { jsonrepair } from 'jsonrepair'
import fs from 'fs/promises'
import { Info } from "../types/info-types";
import { PC } from "../types/pc-types";
import { getInfoFilePath, getPCFilePath } from '../utils/path-utils';

export async function readInfoFile(modName: string, vehicle: string, configName: string): Promise<Info> {
    const infoString = await fs.readFile(getInfoFilePath(modName, vehicle, configName), 'utf8')
    return JSON.parse(jsonrepair(infoString))
}

export async function readPCFile(modName: string, vehicle: string, configName: string): Promise<PC> {
    const pcString = await fs.readFile(getPCFilePath(modName, vehicle, configName), 'utf8')
    return JSON.parse(jsonrepair(pcString))
}