export interface PC {
    format:      number;
    licenseName: LicenseName;
    model:       string;
    paints?:     Paint[];
    parts:       { [key: string]: string } | Parts;
    vars?:       { [key: string]: number };
    colors?:     Array<number[]>;
}

export type LicenseName = "Deltatroopers" | "eg-C" | "ZS.968MU" | "BeamNG" | "28476-pickup";

export interface Paint {
    baseColor:          number[];
    clearcoat:          number | string;
    clearcoatRoughness: number | string;
    metallic:           number | string;
    roughness:          number | string;
}

export interface Parts {
    soundscape_horn?:  SoundscapeHorn;
    soundscape_siren?: SoundscapeSiren;
}

export type SoundscapeHorn = "soundscape_horn_7" | "soundscape_horn_3" | "soundscape_horn_10" | "soundscape_horn_6" | "soundscape_horn_2" | "soundscape_horn_12" | "soundscape_siren_gendarmerie" | "soundscape_horn_4" | "soundscape_horn_8" | "soundscape_uk_hilo" | "soundscape_siren_pasdurgencefr";

export type SoundscapeSiren = "soundscape_siren_25" | "soundscape_siren_pasdurgencefr" | "soundscape_siren_gendarmerie" | "soundscape_siren_pompierfr" | "soundscape_siren_10" | "soundscape_siren_samufr" | "" | "soundscape_siren_3" | "soundscape_siren_8" | "soundscape_siren_15";
