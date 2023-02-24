import { ConfigType, editInfo, editPC } from "../actioner/editor";
import { readInfoFile, readPCFile } from "../actioner/reader";
import { writeInfoFile, writePCFile } from "../actioner/writer";
import { Info } from "../types/info-types";
import { PC } from "../types/pc-types";

type ConfigInfo = {
    info?: Info;
    pc?: PC;
};

export class Config {
    modName: string;
    vehicle: string;
    configName: string;
    loaded: boolean = false
    pc?: PC
    info?: Info

    constructor(modName: string, vehicle: string, configName: string) {
        this.modName = modName
        this.vehicle = vehicle
        this.configName = configName
    }

    async load(): Promise<ConfigInfo> {
        this.info = await readInfoFile(this.modName, this.vehicle, this.configName)
        this.pc = await readPCFile(this.modName, this.vehicle, this.configName)
        this.loaded = true
        return {
            pc: this.pc,
            info: this.info
        }
    }

    edit(newConfigType: ConfigType): ConfigInfo {
        if (!this.loaded) throw Error('PC and Info not loaded!')
        if (!this.info) throw Error('No info loaded')
        this.info = editInfo(this.info, newConfigType)
        if (!this.pc) {
            console.info('No pc loaded')
        } else {
            this.pc = editPC(this.pc, newConfigType)
        }
        return {
            pc: this.pc,
            info: this.info
        }
    }

    async save(): Promise<void> {
        if (!this.loaded) throw Error('PC and Info not loaded!')
        if (!this.info) throw Error('No info loaded')
        writeInfoFile(this.modName, this.vehicle, this.configName, this.info)
        if (!this.pc) {
            console.info('No pc loaded')
        } else {
            writePCFile(this.modName, this.vehicle, this.configName, this.pc)
        }
    }
}