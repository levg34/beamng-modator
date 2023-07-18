
//eur_lightbar
singleton Material(eur_lightbar_fr)
{
    mapTo = "eur_lightbar_fr";
    diffuseMap[0] = "vehicles/common/lightbars_fr/eur_lightbar_d_fr.dds";
    specularMap[0] = "vehicles/common/lightbars_fr/eur_lightbar_s_fr.dds";
    normalMap[0] = "vehicles/common/lightbars/eur_lightbar_n.dds";
    specularPower[0] = "128";
    pixelSpecular[0] = "1";
    diffuseColor[0] = "1 1 1 1";
    diffuseColor[1] = "1 1 1 1";
    useAnisotropic[0] = "1";
    castShadows = "1";
    translucent = "1";
    translucentBlendOp = "None";
    alphaTest = "0";
    alphaRef = "0";
    dynamicCubemap = true; //cubemap = "BNG_Sky_02_cubemap";
    materialTag0 = "beamng"; materialTag1 = "vehicle";
};


//eur_lightbar sign
singleton Material(eur_lightbar_sign_fr)
{
    mapTo = "eur_lightbar_sign_fr";
    diffuseMap[1] = "vehicles/common/lightbars_fr/eur_lightbar_d_fr.dds";
    specularMap[1] = "vehicles/common/lightbars_fr/eur_lightbar_s_fr.dds";
    normalMap[1] = "vehicles/common/lightbars/eur_lightbar_n.dds";
    diffuseMap[0] = "vehicles/common/null.dds";
    specularMap[0] = "vehicles/common/null.dds";
    normalMap[0] = "vehicles/common/lightbars/eur_lightbar_n.dds";
    specularPower[0] = "128";
    pixelSpecular[0] = "1";
    specularPower[1] = "32";
    pixelSpecular[1] = "1";
    diffuseColor[0] = "1 1 1 1";
    diffuseColor[1] = "1.5 1.5 1.5 1";
    useAnisotropic[0] = "1";
    useAnisotropic[1] = "1";
    castShadows = "1";
    translucentBlendOp = "None";
    alphaTest = "0";
    alphaRef = "0";
    dynamicCubemap = true; //cubemap = "BNG_Sky_02_cubemap";
    materialTag0 = "beamng"; materialTag1 = "vehicle";
    glow[0] = ".";
    glow[1] = "0";
    emissive[0] = "1";
    emissive[1] = "1";
};

singleton Material(eur_lightbar_sign_on_fr)
{
    mapTo = "eur_lightbar_sign_on_fr";
    diffuseMap[1] = "vehicles/common/lightbars_fr/eur_lightbar_g_fr.dds";
    specularMap[1] = "vehicles/common/lightbars_fr/eur_lightbar_s_fr.dds";
    normalMap[1] = "vehicles/common/lightbars/eur_lightbar_n.dds";
    diffuseMap[0] = "vehicles/common/null.dds";
    specularMap[0] = "vehicles/common/null.dds";
    normalMap[0] = "vehicles/common/lightbars/eur_lightbar_n.dds";
    specularPower[0] = "128";
    pixelSpecular[0] = "1";
    specularPower[1] = "32";
    pixelSpecular[1] = "1";
    diffuseColor[0] = "1 1 1 1";
    diffuseColor[1] = "1.5 1.5 1.5 1";
    useAnisotropic[0] = "1";
    useAnisotropic[1] = "1";
    castShadows = "1";
    translucentBlendOp = "None";
    alphaTest = "0";
    alphaRef = "0";
    dynamicCubemap = true; //cubemap = "BNG_Sky_02_cubemap";
    materialTag0 = "beamng"; materialTag1 = "vehicle";
    glow[0] = "0";
    glow[1] = "0";
    emissive[0] = "1";
    emissive[1] = "1";
   waveAmp[1] = "0.098";
   animFlags[1] = "0x00000005";
   scrollDir[1] = "-1 0";
   waveType[1] = "Square";
   waveFreq[1] = "0.5";
};
singleton Material(old_lightbar_cn)
{
    mapTo = "old_lightbar_cn";
    diffuseMap[0] = "vehicles/common/lightbars_fr/old_lightbar_d_cn.dds";
    specularMap[0] = "vehicles/common/lightbars/old_lightbar_s.dds";
    normalMap[0] = "vehicles/common/lightbars/old_lightbar_n.dds";
    specularPower[0] = "128";
    pixelSpecular[0] = "1";
    diffuseColor[0] = "1 1 1 1";
    diffuseColor[1] = "1 1 1 1";
    useAnisotropic[0] = "1";
    castShadows = "1";
    translucent = "1";
    translucentBlendOp = "None";
    alphaTest = "0";
    alphaRef = "0";
    dynamicCubemap = true; //cubemap = "BNG_Sky_02_cubemap";
    materialTag0 = "beamng"; materialTag1 = "vehicle";
    doubleSided = "1";
};
singleton Material(old_lightbar_dmg_cn)
{
    mapTo = "old_lightbar_dmg_cn";
    diffuseMap[0] = "vehicles/common/null.dds";
    opacityMap[0] = "vehicles/common/lightbars/old_lightbar_o_dmg.dds";
    specularMap[0] = "vehicles/common/null.dds";
    normalMap[0] = "vehicles/common/glass_dmg_n.dds";
    diffuseMap[1] = "vehicles/common/lightbars_fr/old_lightbar_d_dmg_cn.dds";
    opacityMap[1] = "vehicles/common/lightbars/old_lightbar_o_dmg.dds";
    specularMap[1] = "vehicles/common/lightbars/old_lightbar_s.dds";
    normalMap[1] = "vehicles/common/lightbars/old_lightbar_n.dds";
    specularPower[0] = "128";
    specularPower[1] = "128";
    diffuseColor[0] = "1 1 1 1";
    diffuseColor[1] = "1.5 1.5 1.5 1";
    useAnisotropic[0] = "1";
    castShadows = "0";
    translucent = "1";
    alphaTest = "0";
    alphaRef = "0";
    dynamicCubemap = true;
    materialTag0 = "beamng"; materialTag1 = "vehicle";
};
