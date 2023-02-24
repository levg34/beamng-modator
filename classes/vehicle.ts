import { listConfigs } from "../actioner/lister"
import { ConfigLoader } from "./config"

export class Vehicle {
    modName: string
    vehicle: string

    constructor(modName: string, vehicle: string) {
        this.modName = modName
        this.vehicle = vehicle
    }

    async listConfigs(): Promise<string[]> {
        const configs = await listConfigs(this.modName,this.vehicle) as string[]
        return configs
    }

    async getConfigLoaders(): Promise<ConfigLoader[]> {
        const configs = await this.listConfigs()
        return configs.map(c => new ConfigLoader(this.modName, this.vehicle, c))
    }
}