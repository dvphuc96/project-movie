export const storage = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  save: (name: string, data: any) => {
    localStorage.setItem(name, data);
  },

  get: (name: string) => {
    return localStorage.getItem(name);
  },

  remove: (name: string) => {
    localStorage.removeItem(name);
  },
};
