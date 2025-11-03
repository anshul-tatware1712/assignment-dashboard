export interface Order {
  id: string;
  orderedDate: string;
  productName: string;
  productPrice: string;
  status: 'delivered' | 'pending' | 'cancelled' | 'booked';
  impression?: string;
}

export interface OrderStats {
  newOrders: {
    count: number;
    impression: number;
  };
  pendingOrders: {
    count: number;
    impression: number;
  };
  deliveredOrders: {
    count: number;
    impression: number;
  };
}

export type OrderFilterType = 'all' | 'pending' | 'delivered' | 'booked' | 'cancelled';
export type TimePeriod = 'daily' | 'monthly';
