import { State, ActionTypes } from './types';

const reducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case 'update:profile': {
      const values = action.payload;
      const clonedState = { ...state };

      for (const prop of Object.keys(values)) {
        const value = values[prop];
        clonedState.appearance.profile[prop] = value;
      }

      return clonedState;
    }
    case 'update:theme': {
      const theme = action.payload;
      const clonedState = { ...state };

      clonedState.appearance.themes.selected = theme;
      return clonedState;
    }
    case 'delete:theme': {
      const themeName = action.payload.name;
      const clonedState = { ...state };
      const themes = clonedState.appearance.themes.list;

      clonedState.appearance.themes.list = themes.filter(
        (theme) => theme.name !== themeName
      );

      return clonedState;
    }
    case 'update:social-networks': {
      const values = action.payload;
      const clonedState = { ...state };

      for (const prop of Object.keys(values)) {
        const value = values[prop];
        clonedState.config.social[prop] = value;
      }

      return clonedState;
    }
    case 'add:item': {
      const typeItem = action.payload.type;
      const clonedState = { ...state };
      const item = {
        type: typeItem,
        props: { enabled: true, title: 'Title', url: '' },
      };

      clonedState.items.push(item);
      return clonedState;
    }
    case 'delete:item': {
      const indexItem = action.payload.index;
      const clonedState = { ...state };
      clonedState.items.splice(indexItem, 1);

      return clonedState;
    }
    case 'update:item': {
      const { index: indexItem, data: values } = action.payload;
      const clonedState = { ...state };

      for (const prop of Object.keys(values)) {
        const value = values[prop];
        clonedState.items[indexItem].props = {
          ...clonedState.items[indexItem].props,
          [prop]: value,
        };
      }

      return clonedState;
    }
    default:
      return state;
  }
};

export default reducer;
