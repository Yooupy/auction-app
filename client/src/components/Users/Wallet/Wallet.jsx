import React from "react";

const wallet = {
  totalBalance: 1000,
  availableBalance: 750,
  pendingTransactions: [
    { id: 1, amount: 50, description: "Transaction 1" },
    { id: 2, amount: 100, description: "Transaction 2" },
  ],
};

const Wallet = () => {
  return (
    <div>
      <h2>Wallet</h2>
      <p>Total Balance: {wallet.totalBalance}</p>
      <p>Available Balance: {wallet.availableBalance}</p>
      <ul>
        {wallet.pendingTransactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Description: {transaction.description}</p>
            <p>Amount: {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wallet;
