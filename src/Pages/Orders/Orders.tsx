import { useState, useMemo } from "react";
import OrderStatusCards from "../../Components/OrderStatusCards/OrderStatusCards";
import TimePeriodToggle from "../../Components/TimePeriodToggle/TimePeriodToggle";
import SearchBar from "../../Components/SearchBar/SearchBar";
import OrderTabs from "../../Components/OrderTabs/OrderTabs";
import OrdersTable from "../../Components/OrdersTable/OrdersTable";
import {
  mockOrdersData,
  getFilteredOrders,
  getTodayDate,
  getCurrentMonth,
} from "../../config/ordersData";
import type { OrderFilterType, TimePeriod } from "../../types/orders";
import { Calendar, Bell } from "lucide-react";

const Orders = () => {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("daily");
  const [activeTab, setActiveTab] = useState<OrderFilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredByTime = useMemo(() => {
    if (timePeriod === "daily") {
      return mockOrdersData.slice(0, 7);
    } else {
      return mockOrdersData;
    }
  }, [timePeriod]);

  const filteredByStatus = useMemo(() => {
    return getFilteredOrders(filteredByTime, activeTab);
  }, [filteredByTime, activeTab]);
  const searchFilteredOrders = useMemo(() => {
    if (!searchQuery.trim()) return filteredByStatus;

    return filteredByStatus.filter(
      (order) =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.productPrice.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [filteredByStatus, searchQuery]);

  const currentDate =
    timePeriod === "daily" ? getTodayDate() : getCurrentMonth();

  const dynamicStats = useMemo(() => {
    const totalOrders = filteredByTime.length;
    const newOrders = filteredByTime.length;
    const pendingOrders = filteredByTime.filter(
      (order) => order.status === "pending"
    ).length;
    const deliveredOrders = filteredByTime.filter(
      (order) => order.status === "delivered"
    ).length;

    return {
      newOrders: {
        count: newOrders,
        impression:
          totalOrders > 0 ? Math.round((newOrders / totalOrders) * 100) : 0,
      },
      pendingOrders: {
        count: pendingOrders,
        impression:
          totalOrders > 0 ? Math.round((pendingOrders / totalOrders) * 100) : 0,
      },
      deliveredOrders: {
        count: deliveredOrders,
        impression:
          totalOrders > 0
            ? Math.round((deliveredOrders / totalOrders) * 100)
            : 0,
      },
    };
  }, [filteredByTime]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center md:justify-between mb-8">
        <div className="flex items-center gap-3 mb-4 lg:mb-0 justify-between">
          <div className="flex items-center gap-2 ">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500">{currentDate}</span>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Bell className="w-5 h-5 text-gray-400" />
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-80 order-2 sm:order-1">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search orders, products..."
            />
          </div>
          <div className="items-center gap-4 order-1 sm:order-2 hidden md:flex">
            <Bell className="w-5 h-5 text-gray-400" />
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-10 mb-6">
        <div className="flex items-center gap-2 mb-4 lg:mb-0">
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <span className="text-2xl">😍</span>
        </div>

        <TimePeriodToggle
          activePeriod={timePeriod}
          onPeriodChange={setTimePeriod}
        />
      </div>

      <OrderStatusCards stats={dynamicStats} />

      <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <OrdersTable orders={searchFilteredOrders} />
    </div>
  );
};

export default Orders;
