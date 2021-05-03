import React, { useContext } from 'react';
import {StatusPending, StatusSuccess} from './Status';
import {formatBankName, formatCurrency, formatDate} from '../helpers';
import { AppContext } from '../contexts/transaction';
import { useHistory } from 'react-router-dom';

export default function TransactionDetail() {
  const {activeTransaction} = useContext(AppContext);
  const history = useHistory();

  return (
    <div className="transaction-detail">
      <h1 className="text-thin text-center">Detail Transaksi</h1>
      <div className="card transaction-detail-status">
        <p className="text-bold">ID TRANSAKSI #{activeTransaction.id}</p>
        {activeTransaction.status === 'SUCCESS' ? <StatusSuccess /> : <StatusPending /> }
      </div>
      <div className="card transaction-detail-contents">
        <div className="transaction-detail-content-group">
          <p className="text-bold">PENGIRIM</p>
          <p>{formatBankName(activeTransaction.sender_bank)}</p>
        </div>
        
        <div className="transaction-detail-content-group">
          <p className="text-bold">PENERIMA</p>
          <p>{formatBankName(activeTransaction.beneficiary_bank)}</p>
          <p>{activeTransaction.account_number}</p>
          <p>{activeTransaction.beneficiary_name}</p>
        </div>
        
        <div className="transaction-detail-content-group">
          <p className="text-bold">NOMINAL</p>
          <p>{formatCurrency(activeTransaction.amount)}</p>
          <p><span className="text-bold">Kode Unik:</span> {activeTransaction.unique_code}</p>
        </div>

        <div className="transaction-detail-content-group">
          <p className="text-bold">CATATAN</p>
          <p>{activeTransaction.remark}</p>
        </div>

        <div className="transaction-detail-content-group">
          <p className="text-bold">WAKTU DIBUAT</p>
          <p>{formatDate(activeTransaction.created_at)}</p>
        </div>
      </div>
      <button className="button button-secondary" onClick={() => history.goBack()}>Kembali</button>
    </div>
  );
}