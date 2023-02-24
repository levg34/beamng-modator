import { listVehicles } from "../actioner/lister"
import { Vehicle } from "./vehicle"

export class Mod {
    modName: string

    constructor(modName: string) {
        this.modName = modName
    }

    async listVehicles(): Promise<string[]> {
        const vehicleList = await listVehicles(this.modName)
        return vehicleList
    }

    async getVehicles(): Promise<Vehicle[]> {
        const vehicleList = await this.listVehicles()
        return vehicleList.map(v => new Vehicle(this.modName, v))
    }
}