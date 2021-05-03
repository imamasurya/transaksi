import "./index.css";
import React from 'react';
import TransactionList from './components/TransactionList';
import TransactionDetail from './components/TransactionDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AppContextProvider} from './contexts/transaction';

export default function App() {
  return (
    <div className="container">
      <AppContextProvider>
        <Router>
          <Switch>
            <Route path="/list">
              <TransactionList />
            </Route>
            <Route path="/detail">
              <TransactionDetail />
            </Route>
            <Route path="/">
              <TransactionList />
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}

