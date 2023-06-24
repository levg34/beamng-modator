import fs from 'fs/promises'
import { Mod } from "./classes/mod";
import { ProgramCreator } from "./classes/program";

const mod = new Mod('GendarmerieNationaleSkinPack')

const main = async () => {
    // const vehicles = await mod.getVehicles()
    // vehicles.forEach(async v => {
    //     const cl = await v.getConfigLoaders();
    //     cl.forEach(c => c.)
    // })

    const programCreator = new ProgramCreator(mod)
    await programCreator.createProgram()
    const json = programCreator.getJSON()
    fs.writeFile('program.json', json)
}

main()
