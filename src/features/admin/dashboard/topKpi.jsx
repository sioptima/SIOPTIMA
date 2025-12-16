'use client'

import React, { useEffect, useState } from 'react'
import { fetchSummaryData } from './fetchApi';
import { ChatBubbleLeftRightIcon, DocumentChartBarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

function TopKpi({ setActiveMenu }) {
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
    totalSites,
    activeSite: activeSites,
    activeOperator,
    totalOperators,
    dailyReports,
    complianceRate,
    totalTickets,
    resolvedTickets,
  } = data || {};
  return (
    <div className="mb-6 lg:mb-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {[
        {
          label: "Total Sites",
          value: isUnavailable ? defaultValue : totalSites || "-",
          percent: 
            isUnavailable 
            ? 
            defaultValue
            :
            (totalSites && activeSites ? `${Math.round((activeSites / totalSites) * 100)}% Active` : "-"),
          icon: MapPinIcon,
          color: "bg-teal-100 text-teal-600",
          menu: "sites",
        },
        {
          label: "Active Operators",
          value: isUnavailable ? defaultValue : totalOperators || "-",
          percent: isUnavailable ? defaultValue : (activeOperator ? `${activeOperator} Active Users` : "-"),
          icon: UsersIcon,
          color: "bg-blue-100 text-blue-600",
          menu: "users",
        },
        {
          label: "Daily Reports",
          value: isUnavailable ? defaultValue :  dailyReports || "-",
          percent: isUnavailable ? defaultValue : (complianceRate ? `${complianceRate}% Approved` : "-"),
          icon: DocumentChartBarIcon,
          color: "bg-purple-100 text-purple-600",
          menu: "reports",
        },
        {
          label: "Help Tickets",
          value: isUnavailable ? defaultValue :  totalTickets || "-",
          percent: isUnavailable ? defaultValue :  (totalTickets && resolvedTickets ? `${Math.round((resolvedTickets / totalTickets) * 100)}% Resolved` : "-"),
          icon: ChatBubbleLeftRightIcon,
          color: "bg-orange-100 text-orange-600",
          menu: "help",
        },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setActiveMenu(item.menu)}
          >
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                {item.label}
              </p>
              <div className={`p-1 sm:p-2 rounded-lg ${item.color}`}>
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
              {item.value}
            </p>
            <p className="text-xs text-gray-600 font-medium">
              {item.percent}
            </p>
          </div>
        );
      })}
    </div>
  )
}

export default TopKpi;