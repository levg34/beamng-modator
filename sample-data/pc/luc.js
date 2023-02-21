const fs = require('fs/promises');

(async () => {
    const luc = await fs.readFile('concat-pc.json','utf8')
    const lac = JSON.parse(luc)
    const simple = lac.map(e => ({
        ...e,
        parts: {
            soundscape_horn: e.parts.soundscape_horn,
            soundscape_siren: e.parts.soundscape_siren
        }
    }))
    fs.writeFile('simplified-pc-concat.json',JSON.stringify(simple, null, 2))
})()