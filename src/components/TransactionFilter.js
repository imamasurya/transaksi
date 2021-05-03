import React from 'react';

export default function TransactionFilter({ onSearch, onSort }) {
  return (
    <div className="transaction-filter">
      <div className="transaction-filter-search">
        <div className="transaction-filter-search-icon">
          <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g className="search-path" fill="none" stroke="#848F91"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
        </div>
        <input onChange={onSearch} className="transaction-filter-search-input" type="search" placeholder="Cari nama atau bank" />
      </div>
      <select onChange={onSort} className="transaction-filter-sort">
        <option value="">URUTKAN</option>
        <option value="sortByNameAsc">NAMA A-Z</option>
        <option value="sortByNameDesc">NAMA Z-A</option>
      </select>
    </div>
  )
}