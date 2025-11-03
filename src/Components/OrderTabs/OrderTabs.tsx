import React from 'react';
import type { OrderFilterType } from '../../types/orders';

interface OrderTabsProps {
  activeTab: OrderFilterType;
  onTabChange: (tab: OrderFilterType) => void;
}

const OrderTabs: React.FC<OrderTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: { key: OrderFilterType; label: string }[] = [
    { key: 'all', label: 'All Orders' },
    { key: 'pending', label: 'Pending Orders' },
    { key: 'delivered', label: 'Delivered Orders' },
    { key: 'booked', label: 'Booked Orders' },
    { key: 'cancelled', label: 'Cancelled Orders' }
  ];

  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === tab.key
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default OrderTabs;
