import React from 'react';

export interface Item {
  type: 'network';
  props: { title: string; url: string; enabled: boolean };
}

export interface Theme {
  name: string;
  src: string;
}

export interface State {
  appearance: {
    profile: {
      avatar: string | undefined;
      username: string;
      description: string;
    };
    themes: {
      selected: Theme | null;
      list: Theme[];
    };
  };
  config: {
    social: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
  };
  items: Item[];
}

export interface ContextValue {
  state: State;
  dispatch: React.Dispatch<ActionTypes>;
}

export type ActionTypes =
  | {
      type: 'update:profile';
      payload: Partial<State['appearance']['profile']>;
    }
  | {
      type: 'update:theme';
      payload: Theme;
    }
  | {
      type: 'delete:theme';
      payload: {
        name: string;
      };
    }
  | {
      type: 'update:social-networks';
      payload: Partial<State['config']['social']>;
    }
  | {
      type: 'add:item';
      payload: { type: Item['type'] };
    }
  | {
      type: 'delete:item';
      payload: {
        index: number;
      };
    }
  | {
      type: 'update:item';
      payload: {
        index: number;
        data: Partial<Item['props']>;
      };
    };
