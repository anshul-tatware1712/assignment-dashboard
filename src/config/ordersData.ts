import type { Order, OrderStats } from '../types/orders';

export const mockOrdersData: Order[] = [
  {
    id: '#123245',
    orderedDate: '14-12-2020',
    productName: 'Decorative box',
    productPrice: '125 USD',
    status: 'delivered'
  },
  {
    id: '#578467',
    orderedDate: '13-12-2020',
    productName: 'Plantation box',
    productPrice: '120 USD',
    status: 'cancelled'
  },
  {
    id: '#123245',
    orderedDate: '12-12-2020',
    productName: 'Camera film',
    productPrice: '156 USD',
    status: 'delivered'
  },
  {
    id: '#123245',
    orderedDate: '12-12-2020',
    productName: 'Camera film',
    productPrice: '156 USD',
    status: 'delivered'
  },
  {
    id: '#87245',
    orderedDate: '10-12-2020',
    productName: 'Visual logo',
    productPrice: '125 USD',
    status: 'delivered'
  },
  {
    id: '#273345',
    orderedDate: '11-11-2020',
    productName: 'Decorative box',
    productPrice: '180 USD',
    status: 'pending'
  },
  {
    id: '#789245',
    orderedDate: '10-11-2020',
    productName: 'Decorative box',
    productPrice: '180 USD',
    status: 'delivered'
  },
  // Additional monthly data
  {
    id: '#456789',
    orderedDate: '15-11-2020',
    productName: 'Premium camera lens',
    productPrice: '299 USD',
    status: 'delivered'
  },
  {
    id: '#234567',
    orderedDate: '18-11-2020',
    productName: 'Professional tripod',
    productPrice: '89 USD',
    status: 'pending'
  },
  {
    id: '#345678',
    orderedDate: '20-11-2020',
    productName: 'Studio lighting kit',
    productPrice: '450 USD',
    status: 'booked'
  },
  {
    id: '#567890',
    orderedDate: '22-11-2020',
    productName: 'Memory card 64GB',
    productPrice: '45 USD',
    status: 'cancelled'
  },
  {
    id: '#678901',
    orderedDate: '25-11-2020',
    productName: 'Camera bag',
    productPrice: '75 USD',
    status: 'delivered'
  }
];

export const orderStats: OrderStats = {
  newOrders: {
    count: 245,
    impression: 20
  },
  pendingOrders: {
    count: 123,
    impression: 11
  },
  deliveredOrders: {
    count: 150,
    impression: 18
  }
};

export const getFilteredOrders = (orders: Order[], filter: string): Order[] => {
  if (filter === 'all') return orders;
  return orders.filter(order => order.status === filter);
};

export const getTodayDate = (): string => {
  const today = new Date();
  return today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '-');
};

export const getCurrentMonth = (): string => {
  const today = new Date();
  return today.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
};
