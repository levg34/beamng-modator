export const MODS_BASEPATH = './test_mods/'

export function getModPath(modName: string): string {
    return MODS_BASEPATH + modName
}

export function getVehiclesPath(modName: string): string {
    return getModPath(modName) + '/vehicles/'
}

export function getVehiclePath(modName: string, vehicle: string): string {
    return getVehiclesPath(modName) + vehicle
}

export function getInfoFilePath(modName: string, vehicle: string, configName: string): string {
    return getVehiclePath(modName, vehicle)+`/info_${configName}.json`
}

export function getPCFilePath(modName: string, vehicle: string, configName: string): string {
    return getVehiclePath(modName, vehicle)+`/${configName}.pc`
}