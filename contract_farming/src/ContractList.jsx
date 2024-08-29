import React from 'react';
import './ContractList.css';

const contracts = [
  { id: '#1234', crop: 'Wheat', buyer: 'Buyer A', status: 'Active', amount: '$1,200' },
  { id: '#5678', crop: 'Corn', buyer: 'Buyer B', status: 'Pending', amount: '$900' },
  { id: '#9101', crop: 'Rice', buyer: 'Buyer C', status: 'Completed', amount: '$1,500' },
  // Add more contract objects here
];

const ContractList = () => (
  <div className="contract-list">
    <h3>Your Contracts</h3>
    <table>
      <thead>
        <tr>
          <th>Contract ID</th>
          <th>Crop</th>
          <th>Buyer</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract, index) => (
          <tr key={index}>
            <td>{contract.id}</td>
            <td>{contract.crop}</td>
            <td>{contract.buyer}</td>
            <td>{contract.status}</td>
            <td>{contract.amount}</td>
            <td>
              <button>View</button>
              <button>Negotiate</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ContractList;
