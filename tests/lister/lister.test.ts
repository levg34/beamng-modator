import { listConfigs, listMods, listVehicles } from "../../lister"

const TESTED_MOD = 'GendarmerieNationaleSkinPack'
const TESTED_VEHICLE = 'etk800'
const EXPECTED_CONFIG = {
    pcFile: 'gendarmerie_new.pc',
    infoFile: 'info_gendarmerie_new.json',
    name: 'gendarmerie_new'
}

describe('Test mod lister', () => {
    it('should list correctly the mods', async () => {
        expect(await listMods()).toEqual([TESTED_MOD])
    })

    it('should list correctly the vehicles', async () => {
        expect(await listVehicles(TESTED_MOD)).toEqual(['etk800', 'fullsize', 'hopper', 'scintilla', 'vivace'])
    })

    it('should list correctly the configurations', async () => {
        expect(await listConfigs(TESTED_MOD, TESTED_VEHICLE)).toEqual([EXPECTED_CONFIG.name])
    })
})
