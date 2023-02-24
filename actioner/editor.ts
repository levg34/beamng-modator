import { Info } from '../types/info-types'
import configs from '../config.json'
import { PC } from '../types/pc-types'

export type ConfigType = 'Gendarmerie' // | 'SAMU' | 'Pompier' | 'Police' | 'GenericPolice' | 'GenericPoliceFR'

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