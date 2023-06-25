import { Info } from '../types/info-types'
import { PC } from '../types/pc-types'
import { Mod } from './mod'

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
    info: Info
    pc?: PC
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
        let vehicles = await this.mod.getVehicles()

        for (let vehicle of vehicles) {

            let vehicleObj: Vehicle = {
                vehicle: vehicle.vehicle,
                configs: []
            }

            let configLoaders = await vehicle.getConfigLoaders()

            for (let configLoader of configLoaders) {
                let config = await configLoader.load()

                let configObj: Config = {
                    configName: config.configName,
                    info: config.info,
                    pc: config.pc
                }

                vehicleObj.configs.push(configObj)
            }

            this.program.vehicles.push(vehicleObj)
        }

        return this.program
    }

    getJSON(): string {
        let json = JSON.stringify(this.program)

        return json
    }
}
