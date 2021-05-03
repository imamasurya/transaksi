import React from 'react';

export const AppContext = React.createContext();

export const AppContextProvider = props => {
  const [transactions, setTransactions] = React.useState([]);
  const [activeTransaction, setActiveTransaction] = React.useState({});

  return (
    <AppContext.Provider value={{transactions, setTransactions, activeTransaction, setActiveTransaction}}>
      {props.children}
    </AppContext.Provider>
  );
}