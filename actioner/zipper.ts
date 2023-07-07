import AdmZip = require('adm-zip')

export async function unzip(zipName: string, destFolder: string): Promise<void> {
    const zip = new AdmZip(zipName)
    zip.extractAllTo(destFolder, true)
}

export async function zip_old(folderName: string, zipName: string): Promise<void> {
    const zip = new AdmZip()
    zip.addLocalFolder(folderName)
    zip.writeZip(zipName)
}

const archiver = require('archiver')
import fs = require('fs')

export async function zip(folderName: string, zipName: string): Promise<void> {
    const output = fs.createWriteStream(zipName)
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    })
    archive.on('error', function(err: any) {
        throw err
    })
    archive.pipe(output)
    archive.directory(folderName, false)
    await archive.finalize()
}
