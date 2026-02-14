/// <reference types="astro/client" />

// Types

export type Rarity = 'R' | 'SR' | 'SSR';

export interface Contributor {
    name: string;
    profile: string;
    roles: string[];
    blurb: string;
    rarity: Rarity | 'Random';
}

// Data

export const RARITIES: Rarity[] = ['R', 'SR', 'SSR'];

export const RARITY_COLORS: Record<Rarity, string> = {
    'R': 'border-gray-400 text-gray-400',
    'SR': 'border-blue-400 text-blue-400',
    'SSR': 'border-cream-can text-cream-can',
};

const url = `${import.meta.env.BASE_URL}`;

export const contributors: Contributor[] = [
    {
    name: 'PhrogPollen',
    profile: `${url}phrog.png`,
    roles: ['Director', 'Artistic Director', 'Artist'],
    blurb: 'Christian YouTuber and artist.',
    rarity: 'SSR',
  },
  {
    name: 'Ms. Artist',
    profile: `${url}placeholder.png`,
    roles: ['Artistic Director', 'Artist'],
    blurb: 'Loves to make gacha character splash art.',
    rarity: 'Random',
  },
  {
    name: 'Mr. Coder',
    profile: `${url}placeholder.png`,
    roles: ['Coder'],
    blurb: 'Knows many languages, but is most fluent in GDScript and C#.',
    rarity: 'Random',
  },
  {
    name: 'Ms. Writer',
    profile: `${url}placeholder.png`,
    roles: ['Writer', 'Researcher'],
    blurb: 'Writes stories and reads scripture.',
    rarity: 'Random',
  },
  {
    name: 'Mr. Business',
    profile: `${url}placeholder.png`,
    roles: ['Business', 'Marketing'],
    blurb: 'Give him five talents and he\'ll come back with ten.',
    rarity: 'Random',
  },
  {
    name: 'Ms. Voice Actor',
    profile: `${url}placeholder.png`,
    roles: ['Voice Actor', 'Musician', 'Social Media'],
    blurb: 'Her favorite Bible verse is Psalm 33:3.',
    rarity: 'Random',
  },
];