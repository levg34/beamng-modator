import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import AdmZip from 'adm-zip'
import { getModPath, getProgramPath } from '../utils/path-utils'

const TEST_MOD_NAME = 'TestMod'
const TEST_MOD_PATH = getModPath(TEST_MOD_NAME)
const TEST_MOD_ZIP_PATH = `${TEST_MOD_PATH}.zip`
const TEST_PROGRAM_PATH = getProgramPath(TEST_MOD_NAME)

describe('End to end tests', () => {
    beforeAll(() => {
        // Create test mod
        if (fs.existsSync(TEST_MOD_ZIP_PATH)) fs.unlinkSync(TEST_MOD_ZIP_PATH)
        if (fs.existsSync(TEST_MOD_PATH)) fs.rmdirSync(TEST_MOD_PATH, { recursive: true })
        fs.mkdirSync(TEST_MOD_PATH)
        fs.mkdirSync(path.join(TEST_MOD_PATH, 'mod_info'))
        fs.mkdirSync(path.join(TEST_MOD_PATH, 'mod_info', 'MGVNYR1UA'))
        fs.writeFileSync(path.join(TEST_MOD_PATH, 'mod_info', 'MGVNYR1UA', 'info.json'), '{}')
        fs.mkdirSync(path.join(TEST_MOD_PATH, 'vehicles'))
        fs.mkdirSync(path.join(TEST_MOD_PATH, 'vehicles', 'test_vehicle'))
        fs.writeFileSync(path.join(TEST_MOD_PATH, 'vehicles', 'test_vehicle', 'info_testv.json'), '{}')
        const zip = new AdmZip()
        zip.addLocalFolder(TEST_MOD_PATH)
        zip.writeZip(TEST_MOD_ZIP_PATH)
    })
    test('Call script with --list', () => {
        const output = execSync(`npm start -- --list`).toString()
        expect(output).toContain(TEST_MOD_NAME)
    })
    test('Call script with --action create', () => {
        execSync(`npm start -- --modName ${TEST_MOD_NAME} --action create`)
        expect(fs.existsSync(TEST_PROGRAM_PATH)).toBeTruthy()
        expect(fs.readFileSync(TEST_PROGRAM_PATH, 'utf-8')).toEqual(JSON.stringify({
            "modName": "TestMod",
            "vehicles": [
                {
                    "vehicle": "test_vehicle",
                    "configs": [
                        {
                            "configName": "testv",
                            "newConfig": null
                        }
                    ]
                }
            ]
        }, null, 4))
    })
    test('Call script with --action apply', () => {
        execSync(`npm start -- --modName ${TEST_MOD_NAME} --action apply`)
        expect(fs.existsSync(TEST_MOD_PATH))
    })
    afterAll(async () => {
        // Cleanup
        if (fs.existsSync(TEST_PROGRAM_PATH)) fs.unlinkSync(TEST_PROGRAM_PATH)
        if (fs.existsSync(TEST_MOD_ZIP_PATH)) fs.unlinkSync(TEST_MOD_ZIP_PATH)
        if (fs.existsSync(TEST_MOD_PATH)) fs.rmdirSync(TEST_MOD_PATH, { recursive: true })
    })
})
