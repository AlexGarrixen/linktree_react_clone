import shortid from 'shortid';

const mockThemes = [
  {
    id: shortid.generate(),
    name: 'Summer',
    src: 'https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Summer_r4bq2g.svg',
  },
  {
    id: shortid.generate(),
    name: 'Pink',
    src: 'https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Pink_xnhz7r.svg',
  },
  {
    id: shortid.generate(),
    name: 'Ocean',
    src: 'https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Ocean_di3ett.svg',
  },
  {
    id: shortid.generate(),
    name: 'Purple',
    src: 'https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Purple_ug8jf7.svg',
  },
];

export default mockThemes;
