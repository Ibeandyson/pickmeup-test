import React from "react";

const Store = (initial_state, reducer ) => {
  
  const storeCtx = React.createContext(initial_state);
  const dispatchCtx = React.createContext(() => null);

  const Provider = ( { children }) => {
    const [store, dispatch] = React.useReducer(reducer, initial_state);

    return (
      <dispatchCtx.Provider value={dispatch}>
        <storeCtx.Provider value={store}>{children}</storeCtx.Provider>
      </dispatchCtx.Provider>
    );
  };

  const useStore = () => React.useContext(storeCtx);
  const useDispatch = () => React.useContext(dispatchCtx);

  if (!useStore || !useDispatch) {
    throw new Error("can not call context outside the provider");
  }

  return { useDispatch, useStore, Provider, Consumer: storeCtx.Consumer };
};

export default Store;
