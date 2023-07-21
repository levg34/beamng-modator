import { Mod } from './classes/mod'
import yargs from 'yargs'
import fs from 'fs/promises'
import { ProgramCreator } from './classes/program'
import { PROGRAM_PATH } from './utils/path-utils'
import { display } from './utils/display-utils'

const options = yargs
    .usage('Usage: --modName <modName> --programFile <programFile> --action <action> --list')
    .option('m', { alias: 'modName', describe: 'The name of the mod to process', type: 'string' })
    .option('p', { alias: 'programFile', describe: 'The JSON file with the program instructions', type: 'string' })
    .option('a', { alias: 'action', describe: 'The action to perform: apply or create', type: 'string', choices: ['apply', 'create'] })
    .option('l', { alias: 'list', describe: 'List the available mods', type: 'boolean' })
    .implies('m', ['a'])
    .argv

const main = async () => {
    try {
        const { m: modName, p, a: action, l: list } = await options
        
        if (list) {
            const mods = await Mod.listMods()
            display('mod', mods)
            const programs = await ProgramCreator.listPrograms()
            display('program', programs)
            return
        }
        
        if (!(modName && action)) throw new Error('ERROR: modName and action required when --list is not used.')
        
        let programFile = p

        if (!programFile) programFile = PROGRAM_PATH + modName + '.json'

        const mod = new Mod(modName)
        const programCreator = new ProgramCreator(mod)

        if (action === 'apply') {
            console.info(`Applying program from ${programFile} to ${modName}`)
            const program = JSON.parse(await fs.readFile(programFile, 'utf8'))
            await programCreator.applyProgram(program)
            console.info(`Zipping ${modName}`)
            await mod.zip()
            console.info(`Done!`)
        } else if (action === 'create') {
            console.info(`Unzipping ${modName}`)
            await mod.unzip()
            console.info(`Creating program from ${modName}`)
            const program = await programCreator.createProgram()
            const json = JSON.stringify(program, null, 4)
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
