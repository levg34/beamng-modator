export interface Info {
    Configuration:        string;
    Transmission?:        Transmission;
    Description?:         string;
    Drivetrain?:          Drivetrain;
    "Performance Class"?: string;
    default_color?:       DefaultColor;
    "Config Type"?:       ConfigType;
    "Body Style"?:        BodyStyle;
    TorquePeakRPM?:       string;
    Weight?:              number;
    "0-120 mph"?:         number;
    "Braking G"?:         number;
    "100-200 km/h"?:      number;
    "0-100 mph"?:         number;
    Propulsion?:          Propulsion;
    Value?:               number | string;
    Power?:               number;
    "Off-Road Score"?:    number;
    "Fuel Type"?:         FuelType;
    PowerPeakRPM?:        PowerPeakRPMEnum | number;
    "Induction Type"?:    InductionType;
    "60-100 mph"?:        number;
    "0-60 mph"?:          number;
    Population?:          number;
    "100-0 km/h"?:        number;
    "Top Speed"?:         number;
    Torque?:              number;
    "0-200 km/h"?:        number;
    "Weight/Power"?:      number;
    "60-0 mph"?:          number;
    "60-120 mph"?:        number;
    "0-100 km/h"?:        number;
    Country?:             string;
    Author?:              string;
    Type?:                string;
    colors?:              Colors;
    Name?:                string;
    "Derby Class"?:       string;
    Brand?:               string;
    Years?:               Years;
}

export type BodyStyle = "Wagon" | "Van" | "Hatchback";

export type ConfigType = "Police" | "Service" | "Factory" | "Custom";

export type Drivetrain = "RWD" | "FWD" | "AWD" | "4WD";

export type FuelType = "Gasoline";

export type InductionType = "Turbo" | "NA";

export type PowerPeakRPMEnum = "5550 - 6300" | "3450 - 4700" | "5200 - 6350" | "4300 - 5750" | "5400 - 6200" | "4300 - 5400" | "5850 - 7750";

export type Propulsion = "ICE";

export type Transmission = "Manual" | "Automatic" | "DCT";

export interface Years {
    min: number;
    max: number;
}

export interface Colors {
    "Pearl White": string;
}

export type DefaultColor = "Pearl White" | "Blanc Lunaire" | "Peal White" | "Rallysport";
