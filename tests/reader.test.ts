import { readInfoFile, readPCFile } from "../actioner/reader"
import { EXPECTED_CONFIG, EXPECTED_INFO, TESTED_MOD, TESTED_VEHICLE, EXPECTED_PC } from "./test-constants"

jest.mock('../utils/path-utils')

describe('Test reader functions', () => {
    it('should read the info file', async () => {
        expect(await readInfoFile(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)).toEqual(EXPECTED_INFO)
    })
    it('should read the PC file', async () => {
        expect(await readPCFile(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)).toEqual(EXPECTED_PC)
    })
})