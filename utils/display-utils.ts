export function display(name: string, array: string[]) {
    console.info(`List of available ${name}s:`)
    if (!array.length) console.info(` No ${name} found.`)
    array.forEach(e => console.info(' - ' + e))
}
