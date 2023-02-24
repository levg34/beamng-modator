const sirens = [
    "soundscape_siren_25",
    "soundscape_siren_pasdurgencefr",
    "soundscape_siren_gendarmerie",
    "soundscape_siren_pompierfr",
    "soundscape_siren_policefr",
    "soundscape_siren_10",
    "soundscape_siren_samufr",
    "soundscape_siren_3",
    "soundscape_siren_8",
    "soundscape_siren_15"
]

const config = sirens.map(siren => ({
    "pc.parts": {
        "soundscape_siren": siren
    },
    "info": {
        "Config Type": "Police"
    }
}))

console.log(JSON.stringify(Object.assign({}, config), null, 4))
