import express from 'express'
import { Mod } from './classes/mod'
import fs from 'fs/promises'
import { ProgramCreator } from './classes/program'

const app = express()

// Middleware to parse JSON body
app.use(express.json())

// Route to list the available mods
app.get('/mods', async (req, res) => {
    try {
        const mods = await Mod.listMods()
        res.json(mods)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// Route to apply a program for a mod
app.post('/mods/:modName/apply', async (req, res) => {
    try {
        const { modName } = req.params // Get the mod name from the URL
        const { programFile } = req.body // Get the program file from the JSON body
        if (!programFile) throw new Error('ERROR: programFile required.')

        const mod = new Mod(modName)
        const programCreator = new ProgramCreator(mod)

        const program = JSON.parse(await fs.readFile(programFile, 'utf8'))
        await programCreator.applyProgram(program)
        await mod.zip()
        res.send({ message: `Done! Applied program from ${programFile} to ${modName}` })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// Route to create a program for a mod
app.post('/mods/:modName/create', async (req, res) => {
    try {
        const { modName } = req.params // Get the mod name from the URL
        const { programFile } = req.body // Get the program file from the JSON body
        if (!programFile) throw new Error('ERROR: programFile required.')

        const mod = new Mod(modName)
        const programCreator = new ProgramCreator(mod)

        await mod.unzip()
        const program = await programCreator.createProgram()
        const json = JSON.stringify(program)
        await fs.writeFile(programFile, json)
        res.send(`Done! Created program from ${modName} and wrote it to ${programFile}`)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// Start the server on port 3000
app.listen(3000, () => {
    console.info('Server listening on port 3000')
})
