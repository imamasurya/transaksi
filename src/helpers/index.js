export function formatBankName(bankName) {
  return (typeof bankName === 'string' && bankName.length < 4) ? bankName.toUpperCase() : bankName.charAt(0).toUpperCase() + bankName.slice(1, bankName.length)
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 1 }).format(amount)
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
} 

export function sortAscByField(field) {
  return (a, b) => {
    if (a[field] < b[field]){
      return -1;
    }
    if (a[field] > b[field]){
      return 1;
    }
    return 0;
  }
}

export function sortDescByField(field) {
  return (a, b) => {
    if (a[field] < b[field]) {
      return 1;
    }
    if (a[field] > b[field]) {
      return -1;
    }
    return 0;
  }
}