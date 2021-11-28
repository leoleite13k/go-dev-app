import { TSelectOption } from '../../components/Select/interface';
import { ICustomOptions } from './interface';

const accessories: TSelectOption[] = [
  {
    value: 'none',
    label: 'Nenhum',
  },
  {
    value: 'roundGlasses',
    label: 'Óculos redondos',
  },
  {
    value: 'tinyGlasses',
    label: 'Óculos pequeno',
  },
  {
    value: 'shades',
    label: 'Óculos de sol',
  },
];

const body: TSelectOption[] = [
  {
    value: 'chest',
    label: 'Peitoral',
  },
  {
    value: 'breasts',
    label: 'Seios',
  },
];

const clothing: TSelectOption[] = [
  {
    value: 'naked',
    label: 'Nenhum',
  },
  {
    value: 'shirt',
    label: 'Camisa',
  },
  {
    value: 'dressShirt',
    label: 'Camisa social',
  },
  {
    value: 'vneck',
    label: 'Gola V',
  },
  {
    value: 'tankTop',
    label: 'Regata',
  },
  {
    value: 'dress',
    label: 'Vestido',
  },
];

const clothingColor: TSelectOption[] = [
  {
    value: 'white',
    label: 'Branco',
  },
  {
    value: 'blue',
    label: 'Azul',
  },
  {
    value: 'black',
    label: 'Preto',
  },
  {
    value: 'green',
    label: 'Verde',
  },
  {
    value: 'red',
    label: 'Vermelho',
  },
];

const eyes: TSelectOption[] = [
  {
    value: 'normal',
    label: 'Normais',
  },
  {
    value: 'leftTwitch',
    label: 'Esquerdo contraída',
  },
  {
    value: 'happy',
    label: 'Felizes',
  },
  {
    value: 'content',
    label: 'Contentes',
  },
  {
    value: 'squint',
    label: 'Cansados',
  },
  {
    value: 'simple',
    label: 'Pequenos',
  },
  {
    value: 'dizzy',
    label: 'Mortos',
  },
  {
    value: 'wink',
    label: 'Piscando',
  },
  {
    value: 'heart',
    label: 'Corações',
  },
];

const eyebrows: TSelectOption[] = [
  {
    value: 'raised',
    label: 'Levantado',
  },
  {
    value: 'leftLowered',
    label: 'Esquerda abaixada',
  },
  {
    value: 'serious',
    label: 'Sério',
  },
  {
    value: 'angry',
    label: 'Bravo',
  },
  {
    value: 'concerned',
    label: 'Preocupado',
  },
];

const facialHair: TSelectOption[] = [
  {
    value: 'none',
    label: 'Nenhum',
  },
  {
    value: 'stubble',
    label: 'Barba por fazer',
  },
  {
    value: 'mediumBeard',
    label: 'Barbudo',
  },
];

const graphics: TSelectOption[] = [
  {
    value: 'none',
    label: 'Nenhum',
  },
  {
    value: 'redwood',
    label: 'Redwood',
  },
  {
    value: 'gatsby',
    label: 'Gatsby',
  },
  {
    value: 'vue',
    label: 'Vue',
  },
  {
    value: 'react',
    label: 'React',
  },
  {
    value: 'graphQL',
    label: 'GraphQL',
  },
];

const hair: TSelectOption[] = [
  {
    value: 'none',
    label: 'Careca',
  },
  {
    value: 'long',
    label: 'Longo',
  },
  {
    value: 'bun',
    label: 'Coque',
  },
  {
    value: 'short',
    label: 'Curto',
  },
  {
    value: 'pixie',
    label: 'Tijela',
  },
  {
    value: 'balding',
    label: 'Careca emcima',
  },
  {
    value: 'buzz',
    label: 'Curto',
  },
  {
    value: 'afro',
    label: 'Afro',
  },
  {
    value: 'bob',
    label: 'No ombro',
  },
];

const hairColor: TSelectOption[] = [
  {
    value: 'blonde',
    label: 'Loiro',
  },
  {
    value: 'orange',
    label: 'Ruivo',
  },
  {
    value: 'black',
    label: 'Preto',
  },
  {
    value: 'white',
    label: 'Branco',
  },
  {
    value: 'brown',
    label: 'Marrom',
  },
  {
    value: 'blue',
    label: 'Azul',
  },
  {
    value: 'pink',
    label: 'Rosa',
  },
];

const hat: TSelectOption[] = [
  {
    value: 'none',
    label: 'Nenhum',
  },
  {
    value: 'beanie',
    label: 'Gorro',
  },
  {
    value: 'turban',
    label: 'Turbante',
  },
];

const lipColor: TSelectOption[] = [
  {
    value: 'red',
    label: 'Vermelho',
  },
  {
    value: 'purple',
    label: 'Roxo',
  },
  {
    value: 'pink',
    label: 'Rosa pink',
  },
  {
    value: 'turqoise',
    label: 'Azul Turquesa',
  },
  {
    value: 'green',
    label: 'Verde',
  },
];

const mouths: TSelectOption[] = [
  {
    value: 'grin',
    label: 'Sorrindo',
  },
  {
    value: 'sad',
    label: 'Triste',
  },
  {
    value: 'openSmile',
    label: 'Sorindo aberto',
  },
  {
    value: 'lips',
    label: 'Lábios',
  },
  {
    value: 'open',
    label: 'Aberta',
  },
  {
    value: 'serious',
    label: 'Sério',
  },
  {
    value: 'tongue',
    label: 'Mostrando a língua',
  },
];

const skinTone: TSelectOption[] = [
  {
    value: 'light',
    label: 'Branco',
  },
  {
    value: 'yellow',
    label: 'Amarelo',
  },
  {
    value: 'brown',
    label: 'Pardo',
  },
  {
    value: 'dark',
    label: 'Moreno',
  },
  {
    value: 'red',
    label: 'Bronzeado',
  },
  {
    value: 'black',
    label: 'Negro',
  },
];

const circleColor: TSelectOption[] = [
  {
    value: 'none',
    label: 'Preto',
  },
  {
    value: 'blue',
    label: 'Azul',
  },
];

export const optionsAvatar: ICustomOptions[] = [
  {
    field: 'hair',
    type: 'select',
    title: 'Cabelo',
    data: hair,
  },
  {
    field: 'hairColor',
    type: 'select',
    title: 'Cor do cabelo',
    data: hairColor,
  },
  {
    field: 'hat',
    type: 'select',
    title: 'Chapéu',
    data: hat,
  },
  {
    field: 'hatColor',
    type: 'select',
    title: 'Cor do chapéu',
    data: clothingColor,
  },
  {
    field: 'eyebrows',
    type: 'select',
    title: 'Sombrancelhas',
    data: eyebrows,
  },
  {
    field: 'eyes',
    type: 'select',
    title: 'Olhos',
    data: eyes,
  },
  {
    field: 'lashes',
    type: 'switch',
    title: 'Cílios',
  },
  {
    field: 'mouth',
    type: 'select',
    title: 'Boca',
    data: mouths,
  },
  {
    field: 'lipColor',
    type: 'select',
    title: 'Cor dos lábios',
    data: lipColor,
  },
  {
    field: 'facialHair',
    type: 'select',
    title: 'Barba',
    data: facialHair,
  },
  {
    field: 'faceMask',
    type: 'switch',
    title: 'Máscara',
  },
  {
    field: 'faceMaskColor',
    type: 'select',
    title: 'Cor da máscara',
    data: clothingColor,
  },
  {
    field: 'body',
    type: 'select',
    title: 'Corpo',
    data: body,
  },
  {
    field: 'skinTone',
    type: 'select',
    title: 'Cor da pele',
    data: skinTone,
  },
  {
    field: 'mask',
    type: 'switch',
    title: 'Fundo',
  },
  {
    field: 'circleColor',
    type: 'select',
    title: 'Cor do fundo',
    data: circleColor,
  },
  {
    field: 'clothing',
    type: 'select',
    title: 'Roupa',
    data: clothing,
  },
  {
    field: 'clothingColor',
    type: 'select',
    title: 'Cor da roupa',
    data: clothingColor,
  },
  {
    field: 'graphic',
    type: 'select',
    title: 'Estampa da roupa',
    data: graphics,
  },
  {
    field: 'accessory',
    type: 'select',
    title: 'Óculos',
    data: accessories,
  },
];
