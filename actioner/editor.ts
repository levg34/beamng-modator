import { Info } from '../types/info-types'
import configs from '../config/config.json'
import { PC } from '../types/pc-types'

export type ConfigType = 'Gendarmerie' | 'PoliceFR' | '2TonesPolice' | 'TreeTonesFR' | 'Ambulance3Tons' | 'Pompiers' | 'GenericPoliceDE' | 'SAMU' | 'GenericPoliceWithSiren' | 'GenericPoliceWithoutSiren' | 'GenericPoliceWithSiren2' | 'Alternative2TonesPolice' | 'Service'

type ConfigElement = {
    'pc.parts': Record<string, any>
    info: Record<string, any>
}

export type IConfig = Record<ConfigType, ConfigElement>

export function editInfo(info: Info, configType: ConfigType): Info {
    const config: ConfigElement = configs[configType]
    if (!config) {
        console.info('No config found for config type ' + configType)
        return info
    }
    return {
        ...info,
        ...config.info
    }
}

export function editPC(pc: PC, configType: ConfigType): PC {
    const config: ConfigElement = configs[configType]
    if (!config) {
        console.info('No config found for config type ' + configType)
        return pc
    }
    return {
        ...pc,
        parts: {
            ...pc.parts,
            ...config['pc.parts']
        }
    }
}