import React from "react";
import type { TimePeriod } from "../../types/orders";

interface TimePeriodToggleProps {
  activePeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}

const TimePeriodToggle: React.FC<TimePeriodToggleProps> = ({
  activePeriod,
  onPeriodChange,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => onPeriodChange("daily")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
            activePeriod === "daily"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Daily
        </button>
        <button
          onClick={() => onPeriodChange("monthly")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
            activePeriod === "monthly"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default TimePeriodToggle;
