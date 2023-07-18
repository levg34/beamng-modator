# BeamNG Program Creator

This project is a script that creates a program in JSON from a BeamNG mod. The program contains instructions on how to modify the mod files, such as changing textures, sounds, or parameters. You can edit the JSON file if you want to change the automatically generated program, and then relaunch the script to apply the program to the mod.

## Requirements

- Node.js
- TypeScript
- BeamNG.drive

## Usage

To use this script, you need to have a BeamNG mod installed in your `mods` folder. You can list the available mods by running:

```bash
node main.js --list
```

To create a program from a mod, run:

```bash
node main.js --modName <modName> --action create
```

This will unzip the mod, scan its files, and generate a JSON file with the program instructions in the `program` folder. The JSON file will have the same name as the mod.

To apply a program to a mod, run:

```bash
node main.js --modName <modName> --action apply
```

This will read the JSON file from the `program` folder and modify the mod files accordingly. Then it will zip the mod and overwrite the original one.

You can also specify a different JSON file with the `--programFile` option:

```bash
node main.js --modName <modName> --programFile <programFile> --action apply
```

## Example

Let's say you have a mod called `example` that adds a new car to BeamNG. You want to change its color and engine sound. You can do this by following these steps:

1. Run `node main.js --modName example --action create` to create a program from the mod.
2. Open the `program/example.json` file and edit it as you wish. For example, you can change the `color` property of the car or the `sound` property of the engine.
3. Run `node main.js --modName example --action apply` to apply the program to the mod.
4. Launch BeamNG and enjoy your modified car!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.