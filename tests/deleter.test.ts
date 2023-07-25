import fs from 'fs'
import { deleteUnzippedMod, deleteZippedMod } from '../actioner/deleter'
import { getModPath } from '../utils/path-utils'

const TEST_MOD_NAME = 'TestMod'
const TEST_MOD_PATH = getModPath(TEST_MOD_NAME)
const TEST_MOD_ZIP_PATH = `${TEST_MOD_PATH}.zip`

describe('Delete mod tests', () => {
    beforeEach(async () => {
        // Create test mod
        if (!fs.existsSync(TEST_MOD_PATH)) fs.mkdirSync(TEST_MOD_PATH, { recursive: true })
        if (!fs.existsSync(TEST_MOD_ZIP_PATH)) fs.writeFileSync(TEST_MOD_ZIP_PATH, '')
    })
    test('deleteUnzippedMod', async () => {
        await deleteUnzippedMod(TEST_MOD_NAME)
        expect(fs.existsSync(TEST_MOD_PATH)).toBeFalsy()
    })
    test('deleteZippedMod', async () => {
        await deleteZippedMod(TEST_MOD_NAME)
        expect(fs.existsSync(TEST_MOD_ZIP_PATH)).toBeFalsy()
    })
})
