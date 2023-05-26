import { atom } from 'jotai';

export const countAtom = atom(0);
export const objAtom = atom([
  {
    title : 'first obj',
    date  : '26/05/23',
  },
  {
    title : 'second obj',
    date  : '27/05/23',
  },
]);

export const objTitles = atom((get) => get(objAtom).map((a) => a.title));
