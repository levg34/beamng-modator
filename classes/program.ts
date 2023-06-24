import { Info } from "../types/info-types";
import { PC } from "../types/pc-types";
import { Mod } from "./mod";

interface Program {
    modName: string;
    vehicles: Vehicle[];
}

interface Vehicle {
    vehicle: string;
    configs: Config[];
}

interface Config {
    configName: string;
    info: Info;
    pc: PC;
}

export class ProgramCreator {
    program: Program;
    mod: Mod;

    constructor(mod: Mod) {
        this.mod = mod
        this.program = {
            modName: mod.modName,
            vehicles: []
        };
    }

    async createProgram(): Promise<Program> {
        // Obtenir la liste des véhicules du mod
        let vehicles = await this.mod.getVehicles();

        // Parcourir chaque véhicule
        for (let vehicle of vehicles) {
            // Créer un objet Vehicle à ajouter au programme
            let vehicleObj: Vehicle = {
                vehicle: vehicle.vehicle,
                configs: []
            };

            // Obtenir la liste des chargeurs de configuration du véhicule
            let configLoaders = await vehicle.getConfigLoaders();

            // Parcourir chaque chargeur de configuration
            for (let configLoader of configLoaders) {
                // Charger la configuration à partir du chargeur
                let config = await configLoader.load();

                // Créer un objet Config à ajouter au véhicule
                let configObj: Config = {
                    configName: config.configName,
                    info: config.info,
                    pc: config.pc
                };

                // Ajouter l'objet Config au tableau des configurations du véhicule
                vehicleObj.configs.push(configObj);
            }

            // Ajouter l'objet Vehicle au tableau des véhicules du programme
            this.program.vehicles.push(vehicleObj);
        }

        return this.program
    }

    getJSON(): string {
        // Convertir l'objet program en une chaîne JSON
        let json = JSON.stringify(this.program);
    
        // Renvoyer la chaîne JSON
        return json;
      }
}
