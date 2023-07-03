import { ConfigType } from '../actioner/editor'
import { ConfigLoader } from './config'
import { Mod } from './mod'
import { Vehicle as VehicleClass } from './vehicle'

interface Program {
    modName: string
    vehicles: Vehicle[]
}

interface Vehicle {
    vehicle: string
    configs: Config[]
}

interface Config {
    configName: string
    newConfig: ConfigType
}

export class ProgramCreator {
    program: Program
    mod: Mod

    constructor(mod: Mod) {
        this.mod = mod
        this.program = {
            modName: mod.modName,
            vehicles: []
        }
    }

    async createProgram(): Promise<Program> {
        const vehicles = await this.mod.getVehicles()
        for (const vehicle of vehicles) {
            const programVehicle: Vehicle = {
                vehicle: vehicle.vehicle,
                configs: []
            }
            const configLoaders = await vehicle.getConfigLoaders()
            for (const configLoader of configLoaders) {
                const config = await configLoader.load()
                const programConfig: Config = {
                    configName: config.configName,
                    newConfig: '2TonesPolice'
                }
                programVehicle.configs.push(programConfig)
            }
            this.program.vehicles.push(programVehicle)
        }
        return this.program
    }
    
    async applyProgram(program: Program): Promise<void> {
        if (program.modName !== this.mod.modName) {
            throw new Error(`Le nom du mod du programme ($ {program.modName}) ne correspond pas au nom du mod de l'instance ($ {this.mod.modName}).`)
        }
        for (const programVehicle of program.vehicles) {
            for (const programConfig of programVehicle.configs) {
                const configLoader = new ConfigLoader(this.mod.modName, programVehicle.vehicle, programConfig.configName)
                const config = await configLoader.load()
                const configInfo = config.edit(programConfig.newConfig)
                await config.save()
            }
        }
    }    
}
