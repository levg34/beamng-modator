import { Mod } from './classes/mod'
import yargs from 'yargs'
import fs from 'fs/promises'
import { ProgramCreator } from './classes/program'

const options = yargs
    .usage('Usage: --modName <modName> --programFile <programFile> --action <action>')
    .option('m', { alias: 'modName', describe: 'The name of the mod to process', type: 'string', demandOption: true })
    .option('p', { alias: 'programFile', describe: 'The JSON file with the program instructions', type: 'string', demandOption: true })
    .option('a', { alias: 'action', describe: 'The action to perform: apply or create', type: 'string', choices: ['apply', 'create'], demandOption: true })
    .argv

const main = async () => {
    try {
        const { m: modName, p: programFile, a: action } = await options

        const mod = new Mod(modName)
        const programCreator = new ProgramCreator(mod)

        if (action === 'apply') {
            console.info(`Applying program from ${programFile} to ${modName}`)
            const program = JSON.parse(await fs.readFile(programFile, 'utf8'))
            programCreator.applyProgram(program)
            console.info(`Zipping ${modName}`)
            await mod.zip()
            console.info(`Done!`)
        } else if (action === 'create') {
            console.info(`Unzipping ${modName}`)
            await mod.unzip()
            console.info(`Creating program from ${modName}`)
            const program = await programCreator.createProgram()
            const json = JSON.stringify(program)
            console.info(`Writing program to ${programFile}`)
            await fs.writeFile(programFile, json)
            console.info(`Done!`)
        }
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

main()
