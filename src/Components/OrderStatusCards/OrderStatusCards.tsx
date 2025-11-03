import React from "react";
import type { OrderStats } from "../../types/orders";

interface OrderStatusCardsProps {
  stats: OrderStats;
}

const CARD_CONFIG = [
  {
    key: "newOrders",
    title: "New Orders",
    color: "blue",
  },
  {
    key: "pendingOrders",
    title: "Pending Orders",
    color: "purple",
  },
  {
    key: "deliveredOrders",
    title: "Delivered Orders",
    color: "orange",
  },
] as const;

const OrderStatusCards: React.FC<OrderStatusCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {CARD_CONFIG.map((card) => {
        const data = stats[card.key];
        const color = card.color;

        return (
          <div
            key={card.key}
            className={`bg-${color}-50 border border-${color}-100 rounded-lg p-6`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">
                  {card.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold text-${color}-600`}>
                    {data.count}
                  </span>
                  <span className="text-sm text-gray-500">|</span>
                  <span className="text-sm text-gray-600">
                    Impression {data.impression}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderStatusCards;
