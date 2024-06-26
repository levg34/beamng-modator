import fs from 'fs/promises'
import { AvailableActionMods, ZippedOrNot, listConfigs, listMods, listModsAvailableActions, listPrograms, listVehicles, listZippedMods } from "../actioner/lister"
import { EXPECTED_CONFIG, TESTED_MOD, TESTED_VEHICLE } from "./test-constants"

jest.mock('../utils/path-utils')

describe('Test mod lister', () => {
    it('should list correctly the mods', async () => {
        expect(await listMods()).toEqual([TESTED_MOD, 'test_mod.zip'])
    })

    it('should list correctly the vehicles', async () => {
        expect(await listVehicles(TESTED_MOD)).toEqual(['etk800', 'hopper', 'scintilla', 'test_vehicle', 'vivace'])
    })

    it('should list correctly the configurations', async () => {
        expect(await listConfigs(TESTED_MOD, TESTED_VEHICLE)).toEqual([EXPECTED_CONFIG.name])
    })

    it('should list correctly the configuration files', async () => {
        expect(await listConfigs(TESTED_MOD, TESTED_VEHICLE, true)).toEqual([EXPECTED_CONFIG])
    })

    it('should list correctly the configuration files with no PC file', async () => {
        expect(await listConfigs(TESTED_MOD, 'test_vehicle', true)).toEqual([{
            name: 'testv',
            infoFile: 'info_testv.json'
        }])
    })

    it('should list correctly the programs', async () => {
        expect(await listPrograms()).toEqual(['French_Emergency_Skin_Pack_Part1', 'French_Emergency_Skin_Pack_Part2', 'GendarmerieNationaleSkinPack'])
    })

    it('should list correctly the zipped mods', async () => {
        const expected: ZippedOrNot = {
            zipped: ['test_mod'],
            unzipped: ['GendarmerieNationaleSkinPackTest']
        }

        expect(await listZippedMods()).toEqual(expected)
    })

    it('should list correctly the available action mods', async () => {
        const expected: AvailableActionMods = {
            apply: [],
            create: ['test_mod']
        }
        expect(await listModsAvailableActions()).toEqual(expected)
    })

    it('should list correctly the available action mods 2', async () => {
        await fs.copyFile('program/GendarmerieNationaleSkinPack.json', 'program/GendarmerieNationaleSkinPackTest.json')
        const expected: AvailableActionMods = {
            apply: ['GendarmerieNationaleSkinPackTest'],
            create: ['test_mod']
        }
        expect(await listModsAvailableActions()).toEqual(expected)
        await fs.rm('program/GendarmerieNationaleSkinPackTest.json')
    })
})
