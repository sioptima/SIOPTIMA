// ==================== WATER PARAMETERS CHART DATA ====================

import { useEffect, useState } from "react";
import { fetchDailyReportData } from "../fetchApi";

  // Data untuk grafik parameter air
  const getWaterParametersData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const loadData = async () => {
        try {
          const result = await fetchDailyReportData();
          if (!result) throw new Error("No data returned");
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      loadData();
    }, []);

    const isUnavailable = loading || error;
    const defaultValue = loading ? "Loading..." : "-"

    
    // Ambil data dari reportsData untuk parameter air
    const parametersData = data.map(report => ({
      date: `${report.date} ${report.time}`,
      pH: report.pH,
      flowRate: report.flowRate || 0,
      volt: report.volt || 0,
      ampere: report.ampere || 0,
      tds: report.tds || 0,
      ec: report.ec || 0,
      site: report.site,
      status: report.status
    }));

    return parametersData.slice(0, 10); // Ambil 10 data terbaru
  };

  const waterParametersData = getWaterParametersData();

  // State untuk hover pada bar chart
  const [hoveredBar, setHoveredBar] = useState(null);

  // Fungsi untuk membuat grafik parameter air - DIUBAH MENJADI BAR CHART SEPERTI CONTOH
  export const renderWaterParametersChart = () => {
    const data = waterParametersData;
    if (data.length === 0) return null;

    // Buat array untuk labels (tanggal dan waktu)
    const labels = data.map(item => {
      const time = item.date.split(' ')[1];
      const hour = time.split(':')[0];
      return `${hour}:00`;
    });

    // Data untuk setiap parameter
    const pHData = data.map(item => item.pH);
    const flowRateData = data.map(item => item.flowRate);
    const tdsData = data.map(item => item.tds);
    const ecData = data.map(item => item.ec);
    
    // Tentukan nilai maksimum untuk skala
    const maxPHValue = Math.max(...pHData, 9.0);
    const maxFlowRateValue = Math.max(...flowRateData, 800);
    const maxTDSValue = Math.max(...tdsData, 1000);
    const maxECValue = Math.max(...ecData, 1000);

    // Tentukan batas normal untuk visualisasi
    const pHMin = 6.5;
    const pHMax = 8.5;
    const flowRateMin = 300;
    const flowRateMax = 600;
    const tdsMax = 500;
    const ecMax = 750;

    return (
      <div className="space-y-8">
        {/* Today's Latest Readings */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Today's Latest Readings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "pH Level",
                value: `${data[0]?.pH || 7.0}`,
                type: 'pHLevel',
              },
              {
                label: "Flow Rate",
                value: `${data[0]?.flowRate || 450} L/h`,
                type: 'flowRate',
              },
              {
                label: "TDS",
                value: `${data[0]?.tds || 480} ppm`,
                type: 'tds',
              },
              {
                label: "EC",
                value: `${data[0]?.ec || 720} μS/cm`,
                type: 'ec',
              },
            ].map((item, index) => {
              // Fungsi untuk mendapatkan kategori parameter
              const getParameterCategory = (type, value) => {
                const numValue = parseFloat(value);
                if (isNaN(numValue)) return "no data";
                
                switch(type) {
                  case 'pHLevel':
                    if (numValue >= 6.5 && numValue <= 8.5) return "normal";
                    if (numValue < 6.5) return "low";
                    return "high";
                  case 'flowRate':
                    if (numValue >= 300 && numValue <= 600) return "normal";
                    if (numValue < 300) return "low";
                    return "high";
                  case 'tds':
                    if (numValue <= 500) return "normal";
                    return "high";
                  case 'ec':
                    if (numValue <= 750) return "normal";
                    return "high";
                  default:
                    return "no data";
                }
              };

              const category = getParameterCategory(item.type, item.value.replace(/[^\d.-]/g, ''));
              
              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">
                        {item.label}
                      </p>
                      <p className="text-xl font-bold text-gray-900 mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        category === "normal"
                          ? "bg-green-500"
                          : category === "no data"
                          ? "bg-gray-400"
                          : category === "low"
                          ? "bg-yellow-500"
                          : category === "high"
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span
                      className={`text-xs font-medium ${
                        category === "normal"
                          ? "text-green-600"
                          : category === "no data"
                          ? "text-gray-600"
                          : category === "low"
                          ? "text-yellow-600"
                          : category === "high"
                          ? "text-orange-600"
                          : "text-red-600"
                      }`}
                    >
                      {category === "no data" ? "No Data" : category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* pH Level Chart - DIUBAH SEPERTI CONTOH */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* pH Level Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg text-gray-800">
                pH Level Trends
              </h3>
              <span className="text-sm text-gray-500">
                Latest: {data[0]?.pH} (Normal: {pHMin}-{pHMax})
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>{maxPHValue.toFixed(1)}</span>
                <span>{(maxPHValue * 0.75).toFixed(1)}</span>
                <span>{(maxPHValue * 0.5).toFixed(1)}</span>
                <span>{(maxPHValue * 0.25).toFixed(1)}</span>
                <span>0.0</span>
              </div>
              <div className="ml-8">
                {pHData.length === 0 ? (
                  <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
                    <p className="text-gray-500 text-center">
                      No data available
                      <br />
                      <span className="text-sm">
                        Submit daily reports to see trends
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
                    {pHData.map((value, index) => {
                      const normalizedHeight = Math.min(
                        (value / maxPHValue) * 120,
                        120
                      );
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className={`w-6 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer relative group ${
                              value < pHMin
                                ? "bg-gradient-to-t from-yellow-400 to-yellow-600"
                                : value > pHMax
                                ? "bg-gradient-to-t from-orange-400 to-orange-600"
                                : "bg-gradient-to-t from-blue-400 to-blue-600"
                            }`}
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`ph-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `ph-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {value}
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {labels[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-4">
              <span>Low ({pHMin})</span>
              <span className="text-green-600 font-medium">Optimal ({pHMin}-{pHMax})</span>
              <span>High ({pHMax})</span>
            </div>
          </div>

          {/* Flow Rate Chart - DIUBAH SEPERTI CONTOH */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg text-gray-800">
                Flow Rate Trends
              </h3>
              <span className="text-sm text-gray-500">
                Latest: {data[0]?.flowRate} L/h (Target: {flowRateMin}-{flowRateMax} L/h)
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>{maxFlowRateValue} L/h</span>
                <span>{Math.round(maxFlowRateValue * 0.75)} L/h</span>
                <span>{Math.round(maxFlowRateValue * 0.5)} L/h</span>
                <span>{Math.round(maxFlowRateValue * 0.25)} L/h</span>
                <span>0 L/h</span>
              </div>
              <div className="ml-8">
                {flowRateData.length === 0 ? (
                  <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
                    <p className="text-gray-500 text-center">
                      No data available
                      <br />
                      <span className="text-sm">
                        Submit daily reports to see trends
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
                    {flowRateData.map((value, index) => {
                      const normalizedHeight = Math.min(
                        (value / maxFlowRateValue) * 120,
                        120
                      );
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className={`w-6 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer relative group ${
                              value < flowRateMin
                                ? "bg-gradient-to-t from-yellow-400 to-yellow-600"
                                : value > flowRateMax
                                ? "bg-gradient-to-t from-orange-400 to-orange-600"
                                : "bg-gradient-to-t from-green-400 to-green-600"
                            }`}
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`flow-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `flow-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {value} L/h
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {labels[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-4">
              <span>Low: {Math.min(...flowRateData)} L/h</span>
              <span className="font-medium">Target: {flowRateMin}-{flowRateMax} L/h</span>
              <span>High: {Math.max(...flowRateData)} L/h</span>
            </div>
          </div>
        </div>

        {/* TDS and EC Charts */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* TDS Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg text-gray-800">
                TDS Trends
              </h3>
              <span className="text-sm text-gray-500">
                Latest: {data[0]?.tds} ppm (Max: {tdsMax} ppm)
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>{maxTDSValue} ppm</span>
                <span>{Math.round(maxTDSValue * 0.75)} ppm</span>
                <span>{Math.round(maxTDSValue * 0.5)} ppm</span>
                <span>{Math.round(maxTDSValue * 0.25)} ppm</span>
                <span>0 ppm</span>
              </div>
              <div className="ml-8">
                {tdsData.length === 0 ? (
                  <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
                    <p className="text-gray-500 text-center">
                      No data available
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
                    {tdsData.map((value, index) => {
                      const normalizedHeight = Math.min(
                        (value / maxTDSValue) * 120,
                        120
                      );
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className={`w-6 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer relative group ${
                              value > tdsMax
                                ? "bg-gradient-to-t from-red-400 to-red-600"
                                : "bg-gradient-to-t from-purple-400 to-purple-600"
                            }`}
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`tds-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `tds-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {value} ppm
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {labels[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* EC Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg text-gray-800">
                EC Trends
              </h3>
              <span className="text-sm text-gray-500">
                Latest: {data[0]?.ec} μS/cm (Max: {ecMax} μS/cm)
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>{maxECValue} μS/cm</span>
                <span>{Math.round(maxECValue * 0.75)} μS/cm</span>
                <span>{Math.round(maxECValue * 0.5)} μS/cm</span>
                <span>{Math.round(maxECValue * 0.25)} μS/cm</span>
                <span>0 μS/cm</span>
              </div>
              <div className="ml-8">
                {ecData.length === 0 ? (
                  <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
                    <p className="text-gray-500 text-center">
                      No data available
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
                    {ecData.map((value, index) => {
                      const normalizedHeight = Math.min(
                        (value / maxECValue) * 120,
                        120
                      );
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className={`w-6 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer relative group ${
                              value > ecMax
                                ? "bg-gradient-to-t from-red-400 to-red-600"
                                : "bg-gradient-to-t from-indigo-400 to-indigo-600"
                            }`}
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`ec-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `ec-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {value} μS/cm
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {labels[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Voltage and Ampere Charts */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Voltage Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-gray-800 mb-6">
              Voltage Trends
            </h3>
            <div className="relative">
              <div className="ml-8">
                {data.length === 0 ? (
                  <div className="w-full h-32 flex items-center justify-center">
                    <p className="text-gray-500">No voltage data available</p>
                  </div>
                ) : (
                  <div className="w-full h-32 flex items-end justify-between gap-2 px-2">
                    {data.map((item, index) => {
                      const normalizedHeight = Math.min((item.volt / 250) * 100, 100);
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className="w-6 bg-gradient-to-t from-orange-400 to-orange-600 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer relative group"
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`volt-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `volt-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {item.volt} V
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {labels[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-4">
              Target: 220V | Current: {data[0]?.volt || 0}V
            </div>
          </div>

          {/* Ampere Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-gray-800 mb-6">
              Ampere Trends
            </h3>
            <div className="relative">
              <div className="ml-8">
                {data.length === 0 ? (
                  <div className="w-full h-32 flex items-center justify-center">
                    <p className="text-gray-500">No ampere data available</p>
                  </div>
                ) : (
                  <div className="w-full h-32 flex items-end justify-between gap-2 px-2">
                    {data.map((item, index) => {
                      const normalizedHeight = Math.min((item.ampere / 20) * 100, 100);
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer relative group"
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`amp-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `amp-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {item.ampere} A
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {labels[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-4">
              Max: 20A | Current: {data[0]?.ampere || 0}A
            </div>
          </div>
        </div>
      </div>
    );
  };