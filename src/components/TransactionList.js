import React, { useContext } from 'react';
import TransactionFilter from './TransactionFilter';
import TransactionItem from './TransactionItem';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/transaction';
import {getTransaction} from '../api/transactions';
import {sortAscByField, sortDescByField} from '../helpers';

export default function TransactionList() {
  const history = useHistory();
  const {transactions, setTransactions, setActiveTransaction} = useContext(AppContext);

  React.useEffect(() => {  
    requestFromServer();
  }, [])
  
  async function requestFromServer() {
    const data = await getTransaction();
    const formatedData = Object.values(data);
    
    setTransactions(formatedData); 
    setActiveTransaction(formatedData[0]);
  }

  function handleItemClick(e) {
    setActiveTransaction(e);
    history.push('/detail');
  }

  function handleSearch(e) {
    const searchTerm = e.target.value;
    
    if (searchTerm === '') {
      requestFromServer();
      return;
    }

    const filteredTransaction = transactions.filter(
      transaction => 
        transaction.beneficiary_bank.toLowerCase().indexOf(searchTerm) > -1 || 
        transaction.beneficiary_name.toLowerCase().indexOf(searchTerm) > -1 || 
        transaction.sender_bank.toLowerCase().indexOf(searchTerm) > -1
    );
    setTransactions([...filteredTransaction]);
  }

  function handleSort(e) {
    const sortBy = e.target.value;
    
    if (sortBy === '') return;
    
    if (sortBy === 'sortByNameAsc') {
      transactions.sort(sortAscByField('beneficiary_name'));
    } else {
      transactions.sort(sortDescByField('beneficiary_name'));
    }

    setTransactions([...transactions]);
  }

  return (
    <div className="transaction-list">
      <h1 className="text-center text-thin">Daftar Transaksi</h1>
      <div className="">
        <p className="text-bold text-lg">Halo kak!</p>
        <p>Kamu telah melakukan transaksi sebesar <span className="text-highlight">Rp5.000.000</span> sejak menggunakan Flip.</p>
      </div>
      <TransactionFilter onSearch={handleSearch} onSort={handleSort} />
      {transactions.map(transaction => <TransactionItem key={transaction.id} onClick={() => handleItemClick(transaction)} item={transaction} />)}
    </div>
  )
}