import AdmZip = require('adm-zip')

export async function unzip(zipName: string, destFolder: string): Promise<void> {
    const zip = new AdmZip(zipName)
    zip.extractAllTo(destFolder, true)
}

export async function zip(folderName: string, zipName: string): Promise<void> {
    const zip = new AdmZip()
    zip.addLocalFolder(folderName)
    zip.writeZip(zipName)
}
