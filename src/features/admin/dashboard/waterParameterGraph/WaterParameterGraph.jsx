'use client'

import { getTodayDate } from '../helper'
import ReportData from './ReportData'

function WaterParameterGraph({setActiveMenu}) {
  
  return (
            <div className="mb-6 lg:mb-8">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Water Parameters Monitoring - Live Today ({getTodayDate()})
                  </h3>
                  <button
                    onClick={() => setActiveMenu("reports")}
                    className="text-teal-600 text-sm font-medium hover:underline"
                  >
                    View All Reports →
                  </button>
                </div>
                
                {/* Render Water Parameters Chart */}
                <ReportData/>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Data updated based on latest reports. Click "View All Reports" for detailed analysis.
                  </p>
                </div>
              </div>
            </div>
  )
}

export default WaterParameterGraph