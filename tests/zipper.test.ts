import { unzip } from "../actioner/zipper"
import { createTestZip, deleteTestZip, testZip } from "./test-utils"

describe('Test zipper utility', () => {
    beforeAll(async () => {
        await deleteTestZip()
        // create test zip with jszip
        await createTestZip()
    })
    it('shoud unzip a zip file correctly', async () => {
        // Check the name
        await unzip(testZip)
        // Check the content
        
    })
    it('shoud zip a folder correctly', async () => {
        // Check the name
        // Check the content
    })
    afterAll(async () => {
        // Clean all that
        await deleteTestZip()
    })
})