import { unzip } from "../actioner/zipper"
import { createTestZip, deleteTestZip, listTestContent, testZip } from "./test-utils"

describe.skip('Test zipper utility', () => {
    beforeAll(async () => {
        await deleteTestZip()
        // create test zip with jszip
        await createTestZip()
    })
    it('shoud unzip a zip file correctly', async () => {
        // Check the name
        // await unzip(testZip)
        const resFolder = await listTestContent()
        expect(resFolder).toEqual([
            'test',
            'test.zip'
        ])
    })
    it('shoud contain the content under the root folder', async () => {
        // Check the content
        const resFolder = await listTestContent('test')
        expect(resFolder).toEqual(["folder","test.txt"])
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