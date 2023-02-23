import fs from 'fs/promises'

export const MODS_BASEPATH = './data/'

export async function listMods(): Promise<string[]> {
    const mods = await fs.readdir(MODS_BASEPATH)
    return mods.filter(modName => modName !== '.gitkeep')
}

export async function listVehicles(modName: string): Promise<string[]> {
    const vehicles = await fs.readdir(MODS_BASEPATH+modName+'/vehicles')
    return vehicles.filter(vehicle => vehicle !== 'common')
}

export async function listConfigs(modName:string, vehicle: string): Promise<string[]> {
    const vehicleContent = await fs.readdir(MODS_BASEPATH+modName+'/vehicles/'+vehicle)
    const infoFiles = vehicleContent.filter(file => file.startsWith('info_') && file.endsWith('.json'))
    return infoFiles.map(infoFile => infoFile.replace('info_','').replace('.json',''))
}