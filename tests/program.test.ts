// Importez la classe que vous voulez tester
import { Mod } from '../classes/mod';
import { ProgramCreator } from '../classes/program';

// Créez un objet Mod fictif pour simuler les données du mod
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
};

// Décrivez le groupe de tests pour la classe ProgramCreator
describe('ProgramCreator', () => {
  // Décrivez le test pour le constructeur de la classe
  describe('constructor', () => {
    // Testez que le constructeur initialise correctement les propriétés program et mod
    test('should initialize program and mod properties', () => {
      // Créez une instance de ProgramCreator avec le mockMod
      const programCreator = new ProgramCreator(mockMod as unknown as Mod);

      // Vérifiez que la propriété program a le bon format
      expect(programCreator.program).toEqual({
        modName: mockMod.modName,
        vehicles: [],
      });

      // Vérifiez que la propriété mod est égale au mockMod
      expect(programCreator.mod).toBe(mockMod);
    });
  });

  // Décrivez le test pour la méthode createProgram de la classe
  describe('createProgram', () => {
    // Testez que la méthode createProgram remplit correctement la propriété program avec les véhicules et les configurations du mod
    test('should populate program with vehicles and configs from mod', async () => {
      // Créez une instance de ProgramCreator avec le mockMod
      const programCreator = new ProgramCreator(mockMod as unknown as Mod);

      // Appelez la méthode createProgram et attendez qu'elle se termine
      await programCreator.createProgram();

      // Vérifiez que la propriété program contient les bons véhicules et configurations
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
      });
    });
  });

  // Décrivez le test pour la méthode getJSON de la classe
  describe('getJSON', () => {
    // Testez que la méthode getJSON renvoie une chaîne JSON correspondant au programme
    test('should return a JSON string matching the program', async () => {
      // Créez une instance de ProgramCreator avec le mockMod
      const programCreator = new ProgramCreator(mockMod as unknown as Mod);

      // Appelez la méthode createProgram et attendez qu'elle se termine
      await programCreator.createProgram();

      // Appelez la méthode getJSON et stockez le résultat dans une variable
      const json = programCreator.getJSON();

      // Vérifiez que le résultat est une chaîne JSON valide
      expect(() => JSON.parse(json)).not.toThrow();

      // Vérifiez que le résultat correspond à l'objet program
      expect(JSON.parse(json)).toEqual(programCreator.program);
    });
  });
});
