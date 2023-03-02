import { execFileSync } from 'child_process'

export async function unzip(zipFile: string): Promise<void> {
    execFileSync('unzip', [zipFile, '-d', zipFile.replace('.zip', '')])
}

export async function zip(folder: string): Promise<void> {
    //
}
