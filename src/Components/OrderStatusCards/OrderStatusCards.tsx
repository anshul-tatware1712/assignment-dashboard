import React from "react";
import type { OrderStats } from "../../types/orders";
interface OrderStatusCardsProps {
  stats: OrderStats;
}
const OrderStatusCards: React.FC<OrderStatusCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {" "}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
        {" "}
        <div className="flex items-center justify-between">
          {" "}
          <div>
            {" "}
            <h3 className="text-sm font-medium text-gray-600 mb-1">
              {" "}
              New Orders{" "}
            </h3>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <span className="text-2xl font-bold text-blue-600">
                {" "}
                {stats.newOrders.count}{" "}
              </span>{" "}
              <span className="text-sm text-gray-500">|</span>{" "}
              <span className="text-sm text-gray-600">
                {" "}
                Impression {stats.newOrders.impression}%{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bg-purple-50 border border-purple-100 rounded-lg p-6">
        {" "}
        <div className="flex items-center justify-between">
          {" "}
          <div>
            {" "}
            <h3 className="text-sm font-medium text-gray-600 mb-1">
              {" "}
              Pending Orders{" "}
            </h3>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <span className="text-2xl font-bold text-purple-600">
                {" "}
                {stats.pendingOrders.count}{" "}
              </span>{" "}
              <span className="text-sm text-gray-500">|</span>{" "}
              <span className="text-sm text-gray-600">
                {" "}
                Impression {stats.pendingOrders.impression}%{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-6">
        {" "}
        <div className="flex items-center justify-between">
          {" "}
          <div>
            {" "}
            <h3 className="text-sm font-medium text-gray-600 mb-1">
              {" "}
              Delivered Orders{" "}
            </h3>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <span className="text-2xl font-bold text-orange-600">
                {" "}
                {stats.deliveredOrders.count}{" "}
              </span>{" "}
              <span className="text-sm text-gray-500">|</span>{" "}
              <span className="text-sm text-gray-600">
                {" "}
                Impression {stats.deliveredOrders.impression}%{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default OrderStatusCards;
