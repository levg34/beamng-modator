import fs from 'fs/promises'

const main = async () => {
    const infoJsons = await fs.readdir('test')
    console.log('[')
    for (let file of infoJsons) {
        const content = await fs.readFile('test/'+file, 'utf8')
        console.log(content+',')
    }
    console.log(']')
}

main()
