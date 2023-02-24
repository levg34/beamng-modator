import { Config, ConfigLoader } from "../classes/config"
import { EXPECTED_CONFIG, EXPECTED_CONFIG_OBJECT, EXPECTED_INFO_POMPIERS, EXPECTED_PC_POMPIERS, TESTED_MOD, TESTED_VEHICLE } from "./test-constants"

describe('config component test', () => {
    const confLoader = new ConfigLoader(TESTED_MOD,TESTED_VEHICLE,EXPECTED_CONFIG.name)
    let config: Config
    test('load config', async () => {
        config = await confLoader.load()
        expect(config).toEqual(EXPECTED_CONFIG_OBJECT)
    })
    test('edit config', () => {
        config.edit('Pompiers')
        expect(config.info).toEqual(EXPECTED_INFO_POMPIERS)
        expect(config.pc).toEqual(EXPECTED_PC_POMPIERS)
    })
    xtest('save config', async () => {
        await config.save()
        config.edit('Gendarmerie')
        await config.save()
    })
})