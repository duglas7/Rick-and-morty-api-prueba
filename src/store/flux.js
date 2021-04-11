const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
        character: null,
    },
    actions: {
      getCharacters: (url, options = {}) => {
        fetch(url, options)
          .then(resp => resp.json())
          .then(data => setStore({ character : data}))
          .catch(error => console.warn(error))
      },
    },
  };
};
export default getState;
