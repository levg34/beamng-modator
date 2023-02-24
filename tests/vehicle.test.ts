import { Vehicle } from "../classes/vehicle"
import { EXPECTED_CONFIG, TESTED_MOD, TESTED_VEHICLE } from "./test-constants"

describe('Test vehicle class', () => {
    it('should not change the names', () => {
        const vehicle = new Vehicle(TESTED_MOD, TESTED_VEHICLE)
        expect(vehicle.modName).toBe(TESTED_MOD)
        expect(vehicle.vehicle).toBe(TESTED_VEHICLE)
    })
    it('should return the correct config list', async () => {
        const vehicle = new Vehicle(TESTED_MOD, TESTED_VEHICLE)
        expect(await vehicle.listConfigs()).toEqual([EXPECTED_CONFIG.name])
    })
    it('should return the correct ConfigLoader object list', async () => {
        const vehicle = new Vehicle(TESTED_MOD, TESTED_VEHICLE)
        expect(await vehicle.getConfigLoaders()).toEqual([{
            "configName": EXPECTED_CONFIG.name,
            "modName": TESTED_MOD,
            "vehicle": TESTED_VEHICLE,
        }])
    })
})