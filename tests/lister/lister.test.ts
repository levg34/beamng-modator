import { listConfigs, listMods, listVehicles } from "../../lister"

export const TESTED_MOD = 'GendarmerieNationaleSkinPack'
export const TESTED_VEHICLE = 'etk800'
export const EXPECTED_CONFIG = {
    pcFile: 'gendarmerie_new.pc',
    infoFile: 'info_gendarmerie_new.json',
    name: 'gendarmerie_new'
}

describe('Test mod lister', () => {
    it('should list correctly the mods', async () => {
        expect(await listMods()).toEqual([TESTED_MOD])
    })

    it('should list correctly the vehicles', async () => {
        expect(await listVehicles(TESTED_MOD)).toEqual(['etk800', 'fullsize', 'hopper', 'scintilla', 'test_vehicle', 'vivace'])
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
})
