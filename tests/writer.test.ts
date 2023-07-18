import fs from 'fs/promises'
import { readInfoFile, readPCFile } from '../actioner/reader'
import { writeInfoFile, writePCFile } from "../actioner/writer"
import { Info } from '../types/info-types'
import { PC } from '../types/pc-types'
import { getInfoFilePath, getPCFilePath, getVehiclesPath } from '../utils/path-utils'
import { EXPECTED_CONFIG, TESTED_MOD, TESTED_VEHICLE } from './test-constants'

jest.mock('../utils/path-utils')

describe('Test writer functions', () => {
    const localTestedVehicle = 'wtest_vehicle'
    const localTestedConfiguration = 'gendarmerie_new'
    const vehiclePath = getVehiclesPath(TESTED_MOD) + localTestedVehicle
    const initialInfoPath = getInfoFilePath(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)
    const initialPcPath = getPCFilePath(TESTED_MOD, TESTED_VEHICLE, EXPECTED_CONFIG.name)

    beforeAll(async () => {
        await fs.rm(vehiclePath, {
            force: true,
            recursive: true
        })
        await fs.mkdir(vehiclePath)
        await fs.copyFile(initialInfoPath, getInfoFilePath(TESTED_MOD,localTestedVehicle,localTestedConfiguration))
        await fs.copyFile(initialPcPath, getPCFilePath(TESTED_MOD,localTestedVehicle,localTestedConfiguration))
    })

    it('should write the info file', async () => {
        const fakeConfig = {
            test: true,
            infoFile: true
        }
        await writeInfoFile(TESTED_MOD, localTestedVehicle, localTestedConfiguration, fakeConfig as unknown as Info)
        expect(await readInfoFile(TESTED_MOD, localTestedVehicle, localTestedConfiguration)).toEqual(fakeConfig)
    })
    
    it('should write the PC file', async () => {
        const fakePC = {
            test: true,
            pcFile: true
        }
        await writePCFile(TESTED_MOD, localTestedVehicle, localTestedConfiguration, fakePC as unknown as PC)
        expect(await readPCFile(TESTED_MOD, localTestedVehicle, localTestedConfiguration)).toEqual(fakePC)
    })
    
    afterAll(async () => {
        await fs.rm(vehiclePath, {
            force: true,
            recursive: true
        })
    })
})