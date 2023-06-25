import { ConfigType, editInfo, editPC, getConfigTypes } from '../actioner/editor'
import { readInfoFile, readPCFile } from '../actioner/reader'
import { writeInfoFile, writePCFile } from '../actioner/writer'
import { Info } from '../types/info-types'
import { PC } from '../types/pc-types'

interface ConfigInfo {
    info: Info
    pc?: PC
}

export class ConfigLoader {
    modName: string
    vehicle: string
    configName: string

    constructor(modName: string, vehicle: string, configName: string) {
        this.modName = modName
        this.vehicle = vehicle
        this.configName = configName
    }

    async load(): Promise<Config> {
        const info = await readInfoFile(this.modName, this.vehicle, this.configName)
        let pc
        try {
            pc = await readPCFile(this.modName, this.vehicle, this.configName)
        } catch (e) {
            console.info(`No PC file found for mod ${this.modName}, vehicle ${this.vehicle}, config ${this.configName}.`)
        }

        return new Config({
            configName: this.configName,
            modName: this.modName,
            vehicle: this.vehicle
        }, {
            pc,
            info
        })
    }
}

export interface Basic {
    modName: string
    vehicle: string
    configName: string
}

export class Config implements ConfigInfo {
    modName: string
    vehicle: string
    configName: string
    info: Info
    pc?: PC

    constructor(basic: Basic, configInfo: ConfigInfo) {
        this.modName = basic.modName
        this.vehicle = basic.vehicle
        this.configName = basic.configName
        this.info = configInfo.info
        this.pc = configInfo.pc
    }

    edit(newConfigType: ConfigType): ConfigInfo {
        this.info = editInfo(this.info, newConfigType)
        if (this.pc) {
            this.pc = editPC(this.pc, newConfigType)
        }
        return {
            pc: this.pc,
            info: this.info
        }
    }

    async save(): Promise<void> {
        await writeInfoFile(this.modName, this.vehicle, this.configName, this.info)
        if (this.pc) {
            await writePCFile(this.modName, this.vehicle, this.configName, this.pc)
        }
    }

    static getConfigTypes(): string[] {
        return getConfigTypes()
    }
}