import React, { useMemo, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BloodPressureChart = ({ history = [] }) => {
  const DATA_LIMIT = 6;

  const [chartHeight, setChartHeight] = useState(260);

  // Responsive pixel-perfect height for different breakpoints
  useEffect(() => {
    const updateSize = () => {
      if (typeof window === "undefined") return;

      const width = window.innerWidth;

      if (width < 640) {
        // mobile
        setChartHeight(220);
      } else if (width < 1024) {
        // tablet
        setChartHeight(260);
      } else if (width < 1440) {
        // laptop / small desktop
        setChartHeight(300);
      } else {
        // large desktop / big screens
        setChartHeight(340);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const chartData = useMemo(() => {
    if (!Array.isArray(history) || history.length === 0) return [];

    const sorted = [...history].sort((a, b) => {
      const dateA = new Date(`${a.year}-${a.month}-01`).getTime();
      const dateB = new Date(`${b.year}-${b.month}-01`).getTime();
      return dateA - dateB;
    });

    return sorted.slice(-DATA_LIMIT).map((item) => ({
      name: `${item.month.slice(0, 3)}. ${item.year}`,
      systolic: item.blood_pressure.systolic.value,
      diastolic: item.blood_pressure.diastolic.value,
    }));
  }, [history]);

  if (!chartData || chartData.length === 0) {
    return (
      <div className="w-full min-h-[160px] flex items-center justify-center text-xs sm:text-sm text-secondary-gray">
        No chart data
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F3E8FF] rounded-xl p-3 sm:p-4 md:p-2">
      {/* Fixed pixel-perfect height that changes per breakpoint */}
      <div style={{ width: "100%", height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 16,
              left: 0,
              bottom: 8,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(220,220,235,0.5)"
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#6B7280", fontSize: 11 }}
              tickMargin={8}
            />
            <YAxis
              domain={[60, 180]}
              ticks={[60, 80, 100, 120, 140, 160, 180]}
              tick={{ fill: "#6B7280", fontSize: 11 }}
              width={32}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                border: "none",
                borderRadius: "6px",
                padding: "10px",
              }}
              labelStyle={{ fontSize: 12, color: "#E5E7EB" }}
              itemStyle={{ fontSize: 12, color: "#F9FAFB" }}
            />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#EC4899"
              strokeWidth={2}
              dot={{ r: 5, stroke: "#fff", strokeWidth: 3 }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ r: 5, stroke: "#fff", strokeWidth: 3 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BloodPressureChart;
