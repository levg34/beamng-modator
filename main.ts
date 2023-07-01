import { Mod } from "./classes/mod";

// const mod = new Mod('GendarmerieNationaleSkinPack')
const mod = new Mod('unmarkedbeaconkemro')

const main = async () => {
    // const programCreator = new ProgramCreator(mod)
    
    // const program = await programCreator.createProgram();
    // const json = JSON.stringify(program)
    // fs.writeFile('new-program.json', json)

    // programCreator.applyProgram({
    //     "modName": "GendarmerieNationaleSkinPack",
    //     "vehicles": [
    //         {
    //             "vehicle": "etk800",
    //             "configs": [
    //                 {
    //                     "configName": "gendarmerie_new",
    //                     "newConfig": "Gendarmerie"
    //                 }
    //             ]
    //         },
    //         {
    //             "vehicle": "hopper",
    //             "configs": [
    //                 {
    //                     "configName": "Gendarmerie",
    //                     "newConfig": "Gendarmerie"
    //                 }
    //             ]
    //         },
    //         {
    //             "vehicle": "scintilla",
    //             "configs": [
    //                 {
    //                     "configName": "ERI",
    //                     "newConfig": "Gendarmerie"
    //                 }
    //             ]
    //         },
    //         {
    //             "vehicle": "vivace",
    //             "configs": [
    //                 {
    //                     "configName": "vivace_skin_ERI",
    //                     "newConfig": "Gendarmerie"
    //                 }
    //             ]
    //         }
    //     ]
    // })

    // -------------------------------------------------------------------------------------

    // await mod.unzip()
    await mod.zip()
}

main()
