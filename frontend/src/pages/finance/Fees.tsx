import React, { useState } from 'react';
import { CreditCard, Plus, Receipt, AlertCircle } from 'lucide-react';

const Fees = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, invoiceNo: 'INV-A1B2C3D4', student: 'Aarav Patel (CS20-001)', total: 50000, paid: 50000, status: 'PAID', due: '2024-01-15' },
    { id: 2, invoiceNo: 'INV-X9Y8Z7W6', student: 'Priya Sharma (CS20-002)', total: 50000, paid: 25000, status: 'PARTIAL', due: '2024-01-15' },
    { id: 3, invoiceNo: 'INV-P4Q5R6S7', student: 'Rahul Kumar (CS20-003)', total: 50000, paid: 0, status: 'OVERDUE', due: '2023-12-01' },
    { id: 4, invoiceNo: 'INV-K9L8M7N6', student: 'Ananya Singh (CS20-004)', total: 50000, paid: 50000, status: 'PAID', due: '2024-01-15' },
    { id: 5, invoiceNo: 'INV-Z1X2C3V4', student: 'Rohan Gupta (CS20-005)', total: 50000, paid: 10000, status: 'PARTIAL', due: '2024-01-15' },
  ]);

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'PAID': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'PARTIAL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'OVERDUE': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
          <CreditCard className="mr-2" /> Fee Management
        </h3>
        <div className="flex space-x-3">
          <button className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center">
            <Receipt size={18} className="mr-1" /> View Payments
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <Plus size={18} className="mr-1" /> Generate Invoice
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Invoice No</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{inv.invoiceNo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{inv.student}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  ₹{inv.paid} / ₹{inv.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{inv.due}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(inv.status)}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  {inv.status !== 'PAID' && (
                    <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300" title="Record Payment">
                      <CreditCard size={18} />
                    </button>
                  )}
                  {inv.status === 'OVERDUE' && (
                    <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300" title="Send Reminder">
                      <AlertCircle size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fees;
