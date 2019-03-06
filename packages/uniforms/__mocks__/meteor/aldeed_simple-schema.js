// @flow

export const SimpleSchema = {
  extendOptions: jest.fn<[], void>(),
  _makeGeneric: jest.fn<[mixed], string | null>((name: mixed) => {
    if (typeof name !== 'string') {
      return null;
    }

    return name.replace(/\.[0-9]+(?=\.|$)/g, '.$');
  })
};
