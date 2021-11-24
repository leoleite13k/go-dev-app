import {
  theme,
  eyesMap,
  eyebrowsMap,
  mouthsMap,
  hairMap,
  facialHairMap,
  clothingMap,
  accessoryMap,
  graphicsMap,
  hatMap,
  bodyMap,
  AvatarProps,
} from '@bigheads/core';

const rng = Math.random;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectRandomKey = (object: any) => {
  return Object.keys(object)[Math.floor(rng() * Object.keys(object).length)];
};

export const getRandomOptions = (): AvatarProps => {
  const skinTone = selectRandomKey(
    theme.colors.skin,
  ) as keyof typeof theme.colors.skin;
  const eyes = selectRandomKey(eyesMap) as keyof typeof eyesMap;
  const eyebrows = selectRandomKey(eyebrowsMap) as keyof typeof eyebrowsMap;
  const mouth = selectRandomKey(mouthsMap) as keyof typeof mouthsMap;
  const hair = selectRandomKey(hairMap) as keyof typeof hairMap;
  const facialHair = selectRandomKey(
    facialHairMap,
  ) as keyof typeof facialHairMap;
  const clothing = selectRandomKey(clothingMap) as keyof typeof clothingMap;
  const accessory = selectRandomKey(accessoryMap) as keyof typeof accessoryMap;
  const graphic = selectRandomKey(graphicsMap) as keyof typeof graphicsMap;
  const hat = selectRandomKey(hatMap) as keyof typeof hatMap;
  const body = selectRandomKey(bodyMap) as keyof typeof bodyMap;
  const hairColor = selectRandomKey(
    theme.colors.hair,
  ) as keyof typeof theme.colors.hair;
  const clothingColor = selectRandomKey(
    theme.colors.clothing,
  ) as keyof typeof theme.colors.clothing;
  const circleColor = selectRandomKey(
    theme.colors.bgColors,
  ) as keyof typeof theme.colors.bgColors;
  const lipColor = selectRandomKey(
    theme.colors.lipColors,
  ) as keyof typeof theme.colors.lipColors;
  const hatColor = selectRandomKey(
    theme.colors.clothing,
  ) as keyof typeof theme.colors.clothing;
  const faceMaskColor = selectRandomKey(
    theme.colors.clothing,
  ) as keyof typeof theme.colors.clothing;

  const mask = true;
  const faceMask = false;
  const lashes = rng() > 0.5;

  return {
    skinTone,
    eyes,
    eyebrows,
    mouth,
    hair,
    facialHair,
    clothing,
    accessory,
    graphic,
    hat,
    body,
    hairColor,
    clothingColor,
    circleColor,
    lipColor,
    hatColor,
    faceMaskColor,
    mask,
    faceMask,
    lashes,
  };
};
