import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  ComposedChart,
  Scatter,
  Line,
  Cell,
} from "recharts";

const MetricsDashboard = ({ data, growthData, financeData, impactData }) => {
  return (
    <div className="w-full space-y-8 bg-gradient-to-br from-gray-900 to-gray-800 sm:p-8 rounded-lg">
      {/* Growth Impact Correlation */}

      {growthData && (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 sm:p-6 shadow-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">
              Growth Impact Correlation
            </h2>
            <p className="text-gray-300">
              Each point represents the relationship between market penetration,
              ROI, and prevention efficiency
            </p>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{
                  top: 20,
                  right: 50,
                  left: 50,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="marketPenetration"
                  label={{
                    value: "Market Penetration %",
                    position: "insideBottom",
                    offset: -40,
                    fill: "white",
                  }}
                  stroke="white"
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  yAxisId="left"
                  label={{
                    value: "ROI %",
                    angle: -90,
                    position: "insideLeft",
                    offset: -35,
                    fill: "white",
                  }}
                  stroke="#2563eb"
                  padding={{ top: 20, bottom: 20 }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#16a34a"
                  label={{
                    value: "Prevention Efficiency",
                    angle: 90,
                    position: "insideRight",
                    offset: -35,
                    fill: "white",
                  }}
                  padding={{ top: 20, bottom: 20 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "white" }}
                />
                <Legend wrapperStyle={{ marginTop: "10px" }} />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="roi"
                  name="ROI"
                  fill="url(#roiGradient)"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
                <Scatter
                  yAxisId="right"
                  dataKey="impact"
                  name="Prevention Efficiency"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Scatter>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Financial Efficiency Matrix */}

      {financeData && (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 sm:p-6 shadow-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">
              Financial Efficiency Matrix
            </h2>
            <p className="text-gray-300">
              3D visualization of financial metrics scaling with user growth
            </p>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{
                  top: 20,
                  right: 50,
                  left: 50,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="users"
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  stroke="white"
                  label={{
                    value: "Users (Millions)",
                    position: "insideBottom",
                    offset: -40,
                    fill: "white",
                  }}
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  yAxisId="left"
                  label={{
                    value: "Net Savings (Cr)",
                    angle: -90,
                    position: "insideLeft",
                    offset: -45,
                    fill: "white",
                  }}
                  stroke="white"
                  padding={{ top: 20, bottom: 20 }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{
                    value: "Efficiency Score",
                    angle: 90,
                    position: "insideRight",
                    offset: -35,
                    fill: "white",
                  }}
                  stroke="white"
                  padding={{ top: 20, bottom: 20 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "white" }}
                />
                <Legend wrapperStyle={{ marginTop: "10px" }} />
                <Bar
                  yAxisId="left"
                  dataKey="netSavings"
                  name="Net Savings"
                  fill="url(#barGradient)"
                  radius={[8, 8, 0, 0]}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="efficiency"
                  name="Efficiency Score"
                  stroke="#dc2626"
                  strokeWidth={3}
                  dot={{ r: 8, strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Impact Scalability Analysis */}

      {impactData && (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-2 sm:p-6 shadow-xl">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white">
              Impact Scalability Analysis
            </h2>
            <p className="text-gray-300">
              3D visualization of crime prevention scaling with market
              penetration
            </p>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 20,
                  right: 50,
                  left: 50,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="marketPenetration"
                  label={{
                    value: "Market Penetration %",
                    position: "insideBottom",
                    offset: -40,
                    fill: "white",
                  }}
                  stroke="white"
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  label={{
                    value: "Crimes Prevented",
                    angle: -90,
                    position: "insideLeft",
                    offset: -35,
                    fill: "white",
                  }}
                  stroke="white"
                  padding={{ top: 20, bottom: 20 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "white" }}
                />
                <Legend wrapperStyle={{ marginTop: "10px" }} />
                <Area
                  type="monotone"
                  dataKey="crimeReduction"
                  name="Crimes Prevented"
                  fill="url(#colorGradient)"
                  stroke="#16a34a"
                  fillOpacity={0.6}
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricsDashboard;
