import { Mod } from '../classes/mod'
import { ProgramCreator } from '../classes/program'

const mockMod = {
    modName: 'test-mod',
    listVehicles: async () => ['test-vehicle-1', 'test-vehicle-2'],
    getVehicles: async () => [
        {
            vehicle: 'test-vehicle-1',
            listConfigs: async () => ['test-config-1', 'test-config-2'],
            getConfigLoaders: async () => [
                {
                    load: async () => ({
                        configName: 'test-config-1',
                        info: { name: 'Test Config 1' },
                        pc: { parts: { engine: 'test-engine-1' } },
                    }),
                },
                {
                    load: async () => ({
                        configName: 'test-config-2',
                        info: { name: 'Test Config 2' },
                        pc: { parts: { engine: 'test-engine-2' } },
                    }),
                },
            ],
        },
        {
            vehicle: 'test-vehicle-2',
            listConfigs: async () => ['test-config-3', 'test-config-4'],
            getConfigLoaders: async () => [
                {
                    load: async () => ({
                        configName: 'test-config-3',
                        info: { name: 'Test Config 3' },
                        pc: { parts: { engine: 'test-engine-3' } },
                    }),
                },
                {
                    load: async () => ({
                        configName: 'test-config-4',
                        info: { name: 'Test Config 4' },
                        pc: { parts: { engine: 'test-engine-4' } },
                    }),
                },
            ],
        },
    ],
}

describe('ProgramCreator', () => {
    describe('constructor', () => {
        test('should initialize program and mod properties', () => {
            const programCreator = new ProgramCreator(mockMod as unknown as Mod)

            expect(programCreator.program).toEqual({
                modName: mockMod.modName,
                vehicles: [],
            })

            expect(programCreator.mod).toBe(mockMod)
        })
    })


    describe('createProgram', () => {
        test('should populate program with vehicles and configs from mod', async () => {
            const programCreator = new ProgramCreator(mockMod as unknown as Mod)

            await programCreator.createProgram()

            expect(programCreator.program).toEqual({
                modName: mockMod.modName,
                vehicles: [
                    {
                        vehicle: 'test-vehicle-1',
                        configs: [
                            {
                                configName: 'test-config-1',
                                info: { name: 'Test Config 1' },
                                pc: { parts: { engine: 'test-engine-1' } },
                            },
                            {
                                configName: 'test-config-2',
                                info: { name: 'Test Config 2' },
                                pc: { parts: { engine: 'test-engine-2' } },
                            },
                        ],
                    },
                    {
                        vehicle: 'test-vehicle-2',
                        configs: [
                            {
                                configName: 'test-config-3',
                                info: { name: 'Test Config 3' },
                                pc: { parts: { engine: 'test-engine-3' } },
                            },
                            {
                                configName: 'test-config-4',
                                info: { name: 'Test Config 4' },
                                pc: { parts: { engine: 'test-engine-4' } },
                            },
                        ],
                    },
                ],
            })
        })
    })

    describe('getJSON', () => {
        test('should return a JSON string matching the program', async () => {
            const programCreator = new ProgramCreator(mockMod as unknown as Mod)

            await programCreator.createProgram()

            const json = programCreator.getJSON()

            expect(() => JSON.parse(json)).not.toThrow()

            expect(JSON.parse(json)).toEqual(programCreator.program)
        })
    })
})
