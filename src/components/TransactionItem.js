import React from 'react';
import {formatBankName, formatCurrency, formatDate} from '../helpers';
import {StatusPending, StatusSuccess} from './Status';

export default function TransactionItem({ item, className, onClick, ...props}) {
  const { amount, status, sender_bank, beneficiary_name, beneficiary_bank, created_at} = item;

  const isSuccess = status === 'SUCCESS' ? 'success' : 'pending';
  
  return (
    <div className={`transaction-item transaction-item-${isSuccess}`} onClick={onClick}>
      <div className="transaction-item-content">
        <p className="text-bold">{formatBankName(sender_bank)} -> {formatBankName(beneficiary_bank)}</p>
        <p>{beneficiary_name.toUpperCase()}</p>
        <p>{formatCurrency(amount)} &bull; {formatDate(created_at)}</p>
      </div>
      <div className="transaction-item-status">
        {status === 'SUCCESS' ? <StatusSuccess /> : <StatusPending /> }
      </div>
    </div>
  )
}