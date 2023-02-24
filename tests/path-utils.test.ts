import { getInfoFilePath, getModPath, getPCFilePath, getVehiclePath, getVehiclesPath } from "../utils/path-utils"
import { EXPECTED_CONFIG, TESTED_MOD, TESTED_VEHICLE } from "./test-constants"

describe('Test path utils', () => {
    test('getModPath method', () => {
        expect(getModPath(TESTED_MOD)).toBe('./data/GendarmerieNationaleSkinPack')
    })
    test('getVehiclesPath method', () => {
        expect(getVehiclesPath(TESTED_MOD)).toBe('./data/GendarmerieNationaleSkinPack/vehicles/')
    })
    test('getVehiclePath method', () => {
        expect(getVehiclePath(TESTED_MOD, TESTED_VEHICLE)).toBe('./data/GendarmerieNationaleSkinPack/vehicles/etk800')
    })
    test('getInfoFilePath method', () => {
        expect(getInfoFilePath(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)).toBe('./data/GendarmerieNationaleSkinPack/vehicles/etk800/'+EXPECTED_CONFIG.infoFile)
    })
    test('getPCFilePath method', () => {
        expect(getPCFilePath(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)).toBe('./data/GendarmerieNationaleSkinPack/vehicles/etk800/'+EXPECTED_CONFIG.pcFile)
    })
})