import fs from 'fs/promises'

export const MODS_BASEPATH = './data/'

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
    const vehicles = await fs.readdir(MODS_BASEPATH+modName+'/vehicles')
    return vehicles.filter(vehicle => vehicle !== 'common')
}

const infoFileToConfigName = (infoFile: string): string => infoFile.replace('info_', '').replace('.json', '')

export async function listConfigs(modName:string, vehicle: string, configFiles?: boolean): Promise<string[] | ConfigData[]> {
    const vehicleContent = await fs.readdir(MODS_BASEPATH+modName+'/vehicles/'+vehicle)
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