# BeamNG Program Creator

[![Node.js CI](https://github.com/levg34/beamng-modator/actions/workflows/node.js.yml/badge.svg)](https://github.com/levg34/beamng-modator/actions/workflows/node.js.yml)

This project is a script that creates a program in JSON from a BeamNG mod. The program contains instructions on how to modify the mod files, such as changing textures, sounds, or parameters. You can edit the JSON file if you want to change the automatically generated program, and then relaunch the script to apply the program to the mod.

## Requirements

- Node.js
- TypeScript
- BeamNG.drive

## Installation

To install the project for first use, follow these steps:

1. Clone or download the zip of this project from the GitHub repository.
2. Install Node.js. This project has been tested with Node.js versions 14, 16, and 18.
3. Run npm install in the root directory of the project to install the required dependencies.

After completing these steps, you should be ready to use the project.

## Usage

To use this script, you need to have a BeamNG mod installed in your `mods` folder. You can list the available mods by running:

```bash
npm start -- --list
```

Alternatively, you can install `ts-node` globally by running `npm install -g ts-node` and then use the following command to list the available mods:

```bash
ts-node index.ts --list
```

Or, you can use `npx` to run `ts-node` without installing it globally:

```bash
npx ts-node index.ts --list
```

To create a program from a mod, run:

```bash
npm start -- --modName <modName> --action create
```

Or, using `ts-node`:

```bash
ts-node index.ts --modName <modName> --action create
```

Or, using `npx`:

```bash
npx ts-node index.ts --modName <modName> --action create
```

This will unzip the mod, scan its files, and generate a JSON file with the program instructions in the `program` folder. The JSON file will have the same name as the mod.

To apply a program to a mod, run:

```bash
npm start -- --modName <modName> --action apply
```

Or, using `ts-node`:

```bash
ts-node index.ts --modName <modName> --action apply
```

Or, using `npx`:

```bash
npx ts-node index.ts --modName <modName> --action apply
```

This will read the JSON file from the `program` folder and modify the mod files accordingly. Then it will zip the mod and overwrite the original one.

You can also specify a different JSON file with the `--programFile` option:

```bash
npm start -- --modName <modName> --programFile <programFile> --action apply
```

Or, using `ts-node`:

```bash
ts-node index.ts --modName <modName> --programFile <programFile> --action apply
```

Or, using `npx`:

```bash
npx ts-node index.ts --modName <modName> --programFile <programFile> --action apply
```

## Example

Let's say you have a mod called `example` that adds a new car to BeamNG. You want to change its color and engine sound. You can do this by following these steps:

1. Run `npm start -- --modName example --action create` to create a program from the mod. Alternatively, you can use `ts-node index.ts --modName example --action create` or `npx ts-node index.ts --modName example --action create`.
2. Open the `program/example.json` file and edit it as you wish. For example, you can change the `color` property of the car or the `sound` property of the engine.
3. Run `npm start -- --modName example --action apply` to apply the program to the mod. Alternatively, you can use `ts-node index.ts --modName example --action apply` or `npx ts-node index.ts --modName example --action apply`.
4. Launch BeamNG and enjoy your modified car!

## Contributing

Contributions are welcome and appreciated! If you would like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them to your branch.
5. Push your changes to your forked repository on GitHub.
6. Open a pull request from your forked repository to the original repository.

Please make sure to follow the code style and conventions used in this project. If you have any questions or need help, feel free to open an issue or contact the maintainers.

Before submitting your pull request, please make sure to run `npm test` and check that all tests are passing. If you have added new features or made changes that require new tests, please add them to the test suite.

## Developing

If you would like to set up this project for development, follow these steps:

1. Clone the repository from GitHub.
2. Install Node.js. This project has been tested with Node.js versions 14, 16, and 18.
3. Run `npm install` in the root directory of the project to install the required dependencies.

After completing these steps, you should be able to run the script using `npm start -- [options]`. You can also run `npm test` to run the unit tests and ensure that everything is working correctly.

## License

This project is licensed under the GNUv3 License - see the [LICENSE](LICENSE) file for details.

## Credits

This project uses the [French Gendarmerie Nationale Skin Pack](https://www.beamng.com/resources/french-gendarmerie-nationale-skin-pack.24553/) mod by [dj pancho](https://www.beamng.com/resources/authors/dj-pancho.493644/) for unit testing. The mod is included in this repository with his permission, as long as he is mentioned. Thanks to dj pancho for his awesome work!
