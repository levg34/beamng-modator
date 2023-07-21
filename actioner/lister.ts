import fs from 'fs/promises'
import { getVehiclesPath, getVehiclePath, MODS_BASEPATH, PROGRAM_PATH } from '../utils/path-utils'

export interface ConfigData {
    infoFile: string,
    name: string
    pcFile?: string,
}

export async function listMods(): Promise<string[]> {
    const mods = await fs.readdir(MODS_BASEPATH)
    return mods.filter(modName => modName !== '.gitkeep')
}

export async function listVehicles(modName: string): Promise<string[]> {
    const vehicles = await fs.readdir(getVehiclesPath(modName))
    return vehicles.filter(vehicle => vehicle !== 'common')
}

const infoFileToConfigName = (infoFile: string): string => infoFile.replace('info_', '').replace('.json', '')

export async function listConfigs(modName: string, vehicle: string, configFiles?: boolean): Promise<string[] | ConfigData[]> {
    const vehicleContent = await fs.readdir(getVehiclePath(modName, vehicle))
    const infoFiles = vehicleContent.filter(file => file.startsWith('info_') && file.endsWith('.json'))
    const configs = infoFiles.map(infoFileToConfigName)
    if (configFiles) {
        const cf: ConfigData[] = infoFiles.map(file => {
            const confName = infoFileToConfigName(file)
            const res: ConfigData = {
                name: confName,
                infoFile: file
            }
            const pcFileName = confName + '.pc'
            if (vehicleContent.includes(pcFileName)) {
                res.pcFile = pcFileName
            }
            return res
        })
        return cf
    }
    return configs
}

export async function listPrograms(): Promise<string[]> {
    const programs = await fs.readdir(PROGRAM_PATH)
    return programs.filter(p => p  !== '.gitkeep').map(p => p.replace('.json', ''))
}

export type ZippedOrNot = {
    zipped: string[]
    unzipped: string[]
}

export async function listZippedMods(): Promise<ZippedOrNot> {
    const mods = await listMods()
    return mods.reduce((previous: ZippedOrNot, current: string) => current.endsWith('.zip') ? {
        ...previous,
        zipped: [...previous.zipped, current.replace('.zip', '')]
    } : {
        ...previous,
        unzipped: [...previous.unzipped, current]
    }, {
        zipped: [],
        unzipped: []
    })
}

export type AvailableActionMods = {
    create: string[]
    apply: string[]
}

export async function listModsAvailableActions(): Promise<AvailableActionMods> {
    const mods = await listZippedMods()
    const programs = await listPrograms()
    return {
        apply: programs.filter(p => mods.unzipped.includes(p)),
        create: mods.zipped
    }
}