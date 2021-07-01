import { State } from './types';
import mockThemes from '@mocks/themes';

const initialState: State = {
  appearance: {
    profile: {
      avatar:
        'https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg_400x400.png',
      username: 'usuario',
      description: 'descripcion',
    },
    themes: {
      selected: null,
      list: mockThemes,
    },
  },
  config: {
    social: {
      facebook: '',
      instagram: '',
      twitter: '',
    },
  },
  items: [],
};

export default initialState;
