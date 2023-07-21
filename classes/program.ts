import { ConfigType } from '../actioner/editor'
import { listPrograms } from '../actioner/lister'
import { ConfigLoader } from './config'
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
    newConfig: ConfigType | null
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

    private guessConfig(configName: string): ConfigType | null {
        function configSimilarTo(text: string): boolean {
            return configName.toLowerCase().includes(text)
        }
        if (configSimilarTo('gendarme') || configSimilarTo('gign') || configSimilarTo('garde')) {
            return 'Gendarmerie'
        }
        if (configSimilarTo('fpd') || configSimilarTo('police') || configSimilarTo('crs') || configSimilarTo('bri') || configSimilarTo('douane') || configSimilarTo('asvp') || configSimilarTo('municipale') || configSimilarTo('bac') || configSimilarTo('paf')  || configSimilarTo('raid') || configSimilarTo('pn')) {
            return 'PoliceFR'
        }
        if (configSimilarTo('pompier') || configSimilarTo('vsav') || configSimilarTo('sdis')) {
            return 'Pompiers'
        }
        if (configSimilarTo('samu') || configSimilarTo('croix') || configSimilarTo('sosmed') || configSimilarTo('civile')) {
            return 'SAMU'
        }
        if (configSimilarTo('ambu')) {
            return 'Ambulance3Tons'
        }
        return null
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
                    newConfig: this.guessConfig(config.configName)
                }
                programVehicle.configs.push(programConfig)
            }
            this.program.vehicles.push(programVehicle)
        }
        return this.program
    }

    async applyProgram(program: Program): Promise<void> {
        if (program.modName !== this.mod.modName) {
            throw new Error(`Program name ($ {program.modName}) does not correspond with instance name ($ {this.mod.modName}).`)
        }
        for (const programVehicle of program.vehicles) {
            for (const programConfig of programVehicle.configs) {
                if (programConfig.newConfig !== null) {
                    const configLoader = new ConfigLoader(this.mod.modName, programVehicle.vehicle, programConfig.configName)
                    const config = await configLoader.load()
                    const configInfo = config.edit(programConfig.newConfig)
                    await config.save()
                }
            }
        }
    }

    static async listPrograms(): Promise<string[]> {
        return await listPrograms()
    }
}
