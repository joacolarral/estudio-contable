import React, { useState } from "react";

export const Store = React.createContext();

export function Provider(props) {
  const [modal, setModal] = useState({
    status: false,
    show: false,
  });

  return (
    <Store.Provider value={{ modal, setModal }}>
      {props.children}
    </Store.Provider>
  );
}
