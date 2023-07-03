import { listMods, listVehicles } from "../actioner/lister"
import { unzip, zip } from "../actioner/zipper"
import { getModPath } from "../utils/path-utils"
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

    async unzip(): Promise<void> {
        await unzip(getModPath(this.modName) + '.zip', getModPath(this.modName))
    }

    async zip(): Promise<void> {
        await zip(getModPath(this.modName), getModPath(this.modName) + '.zip')
    }

    static async listMods(): Promise<string[]> {
        return await listMods()
    }
}
