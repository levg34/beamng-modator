import { Mod } from "./classes/mod";
import { ProgramCreator } from "./classes/program";
import { unzip } from './actioner/zipper';

const mod = new Mod('GendarmerieNationaleSkinPack')

const main = async () => {
    await unzip('data/GendarmerieNationaleSkinPack.zip')
    const programCreator = new ProgramCreator(mod)
    
    // const program = await programCreator.createProgram();
    // const json = JSON.stringify(program)
    // fs.writeFile('new-program.json', json)

    programCreator.applyProgram({
        "modName": "GendarmerieNationaleSkinPack",
        "vehicles": [
            {
                "vehicle": "etk800",
                "configs": [
                    {
                        "configName": "gendarmerie_new",
                        "newConfig": "Gendarmerie"
                    }
                ]
            },
            {
                "vehicle": "hopper",
                "configs": [
                    {
                        "configName": "Gendarmerie",
                        "newConfig": "Gendarmerie"
                    }
                ]
            },
            {
                "vehicle": "scintilla",
                "configs": [
                    {
                        "configName": "ERI",
                        "newConfig": "Gendarmerie"
                    }
                ]
            },
            {
                "vehicle": "vivace",
                "configs": [
                    {
                        "configName": "vivace_skin_ERI",
                        "newConfig": "Gendarmerie"
                    }
                ]
            }
        ]
    })
}

main()
