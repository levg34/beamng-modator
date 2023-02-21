export interface Info {
    "0-120 mph"?:        number;
    "Performance Class": string;
    Drivetrain:          Drivetrain;
    "Braking G":         number;
    "100-200 km/h"?:     number;
    Weight:              number;
    Configuration:       string;
    "0-100 mph"?:        number;
    Propulsion:          Propulsion;
    "Config Type":       ConfigType;
    Value:               number;
    Power:               number;
    TorquePeakRPM:       TorquePeakRPM;
    Transmission:        Transmission;
    "Off-Road Score":    number;
    "Fuel Type":         FuelType;
    PowerPeakRPM:        PowerPeakRPM;
    "Induction Type":    InductionType;
    "60-100 mph"?:       number;
    "0-60 mph":          number;
    Population:          number;
    "100-0 km/h":        number;
    "Top Speed":         number;
    default_color?:      DefaultColor;
    Torque:              number;
    Description:         string;
    "0-200 km/h"?:       number;
    "Weight/Power":      number;
    "60-0 mph":          number;
    "60-120 mph"?:       number;
    "0-100 km/h":        number;
    "Body Style"?:       string;
    Years?:              Years;
}

export type ConfigType = "Service" | "Police" | "Factory";

export type Drivetrain = "FWD";

export type FuelType = "Gasoline";

export type InductionType = "Turbo" | "NA";

export type PowerPeakRPM = "5550 - 6300";

export type Propulsion = "ICE";

export type TorquePeakRPM = "2200 - 5500";

export type Transmission = "DCT";

export interface Years {
    max: number;
    min: number;
}

export type DefaultColor = "Blanc Lunaire";
