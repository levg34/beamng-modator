import { getInfoFilePath, getModPath, getPCFilePath, getProgramPath, getVehiclePath, getVehiclesPath } from "../utils/path-utils"
import { EXPECTED_CONFIG, TESTED_MOD, TESTED_VEHICLE } from "./test-constants"

describe('Test path utils', () => {
    test('getModPath method', () => {
        expect(getModPath(TESTED_MOD)).toBe('./mods/GendarmerieNationaleSkinPackTest')
    })
    test('getVehiclesPath method', () => {
        expect(getVehiclesPath(TESTED_MOD)).toBe('./mods/GendarmerieNationaleSkinPackTest/vehicles/')
    })
    test('getVehiclePath method', () => {
        expect(getVehiclePath(TESTED_MOD, TESTED_VEHICLE)).toBe('./mods/GendarmerieNationaleSkinPackTest/vehicles/etk800')
    })
    test('getInfoFilePath method', () => {
        expect(getInfoFilePath(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)).toBe('./mods/GendarmerieNationaleSkinPackTest/vehicles/etk800/'+EXPECTED_CONFIG.infoFile)
    })
    test('getPCFilePath method', () => {
        expect(getPCFilePath(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)).toBe('./mods/GendarmerieNationaleSkinPackTest/vehicles/etk800/'+EXPECTED_CONFIG.pcFile)
    })
    test('getProgramPath method', () => {
        expect(getProgramPath(TESTED_MOD)).toBe('./program/GendarmerieNationaleSkinPackTest.json')
    })
})