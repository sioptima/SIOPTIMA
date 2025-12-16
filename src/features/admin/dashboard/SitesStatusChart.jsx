'use client'

import React, { useEffect, useState } from 'react'
import { fetchSummaryData } from './fetchApi';
import { calculatePath } from './helper';

function SitesStatusChart({setActiveMenu}) {
  const [hoveredSitePie, setHoveredSitePie] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchSummaryData();
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

  const {
    totalSites: totalSitesApi,
    activeSite: activeSitesApi,
    maintenanceSite: maintenanceSitesApi,
    inactiveSite: inactiveSiteApi,
  } = data || {};

  const totalSites = totalSitesApi || 0
  const activeSites = activeSitesApi || 0
  const maintenanceSites= maintenanceSitesApi || 0
  const inactiveSite = inactiveSiteApi || 0

  const sitesStatusData = [
    { status: "Active", value: activeSites, color: "#10B981" },
    { status: "Maintenance", value: maintenanceSites, color: "#F59E0B" },
    {
      status: "Inactive",
      value: inactiveSite,
      color: "#9CA3AF",
    },
  ];

  const totalSitesCount = totalSites;
  const sitesPieChartData = sitesStatusData.map((item) => ({
    ...item,
    percentage:
      totalSitesCount > 0
        ? Math.round((item.value / totalSitesCount) * 100)
        : 0,
  }));

  // Hitung path untuk pie chart sites
  let currentSiteAngle = 0;
  const sitesPieChartPaths = !isUnavailable
  ? sitesPieChartData
      .map((item) => {
        if (item.percentage === 100) {
          return {
            ...item,
            isFullCircle: true,
          };
        }

        const angle = (item.percentage / 100) * 360;
        const path = calculatePath(
          50,
          50,
          50,
          currentSiteAngle,
          currentSiteAngle + angle
        );

        currentSiteAngle += angle;

        return path ? { ...item, path } : null;
      })
      .filter(Boolean)
  : [];

  const activePercentage =
    totalSites > 0 ? Math.round((activeSites / totalSites) * 100) : 0;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
        <div className="flex justify-between items-center mb-4 sm:mb-5">
          <h3 className="font-semibold text-base sm:text-lg text-gray-800">
            Sites Status
          </h3>
          <button
            onClick={() => setActiveMenu("sites")}
            className="text-teal-600 text-sm font-medium hover:underline"
          >
            View All →
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
          <div className="relative flex flex-col items-center">
            {/* Container untuk pie chart dengan overflow visible dan ukuran yang cukup */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "140px",
                height: "140px",
                overflow: "visible",
              }}
            >
              <svg
                width="120"
                height="120"
                className="absolute cursor-pointer transition-all duration-300"
                style={{
                  transform:
                    hoveredSitePie !== null ? "scale(1.1)" : "scale(1)",
                }}
                viewBox="0 0 100 100"
              >
                {sitesPieChartPaths.map((item, index) => {
                  // Fungsi untuk membuat warna lebih gelap saat hover
                  const darkenColor = (color) => {
                    // Jika warna dalam format hex (#RRGGBB)
                    if (color.startsWith("#")) {
                      const hex = color.replace("#", "");
                      const r = parseInt(hex.substr(0, 2), 16);
                      const g = parseInt(hex.substr(2, 2), 16);
                      const b = parseInt(hex.substr(4, 2), 16);

                      // Gelapkan 20%
                      const darkerR = Math.floor(r * 0.8);
                      const darkerG = Math.floor(g * 0.8);
                      const darkerB = Math.floor(b * 0.8);

                      return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
                    }
                    return color; // Kembalikan warna asli jika bukan hex
                  };

                  return (
                    item.isFullCircle ? (
                        <circle
                          key={item.status}
                          cx="50"
                          cy="50"
                          r="45"
                          fill={item.color}
                        />
                      ) : (
                        <path
                          key={item.status}
                          d={item.path}
                          fill={item.color}
                          stroke="white"
                          strokeWidth="2"
                        />
                      )
                  );
                })}
              </svg>
            </div>

            <div className="text-center mt-2 sm:mt-4">
              <div className="text-xl sm:text-2xl font-bold text-gray-800">
                {!isUnavailable ? `${activePercentage}%` : "-"}
              </div>
              <div className="text-sm text-gray-600">{!isUnavailable ? "Active" : "Loading..."}</div>
            </div>

            {hoveredSitePie !== null && !loading && !error  && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm z-10 shadow-lg">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded"
                    style={{
                      backgroundColor:
                        sitesPieChartPaths[hoveredSitePie].color,
                    }}
                  ></div>
                  <span>
                    {sitesPieChartPaths[hoveredSitePie].status}:{" "}
                    {sitesPieChartPaths[hoveredSitePie].value} (
                    {sitesPieChartPaths[hoveredSitePie].percentage}%)
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 w-full">
            {sitesPieChartData.map((item, index) => (
              <div
                key={item.status}
                className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                  hoveredSitePie === index
                    ? "bg-gray-50 transform scale-105"
                    : ""
                }`}
                onMouseEnter={() => setHoveredSitePie(index)}
                onMouseLeave={() => setHoveredSitePie(null)}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="w-3 h-3 sm:w-4 sm:h-4 rounded transition-transform duration-200"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-700 font-medium">
                    {item.status}
                  </span>
                </div>
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            {isUnavailable ? "Loading...": `Total Sites: ${totalSites} | Active: ${activePercentage}%`}
          </p>
        </div>
    </div>
  )
}

export default SitesStatusChart