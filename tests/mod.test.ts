import { Mod } from "../classes/mod"
import { TESTED_MOD } from "./test-constants"

describe('Test mod class', () => {
    it('should retrieve the same name', () => {
        const mod = new Mod(TESTED_MOD)
        expect(mod.modName).toBe(TESTED_MOD)
    })
    it('should retrieve the correct vehicle list', async () => {
        const mod = new Mod(TESTED_MOD)
        expect(await mod.listVehicles()).toEqual(['etk800', 'fullsize', 'hopper', 'scintilla', 'test_vehicle', 'vivace'])
    })
    it('should retrieve the correct vehicle object list', async () => {
        const mod = new Mod(TESTED_MOD)
        expect(await mod.getVehicles()).toEqual(['etk800', 'fullsize', 'hopper', 'scintilla', 'test_vehicle', 'vivace'].map(v => ({
            modName: TESTED_MOD,
            vehicle: v
        })))
    })
})