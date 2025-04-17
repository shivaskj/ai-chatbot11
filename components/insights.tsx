import { BarChart3, FolderClosed, Target, User, RefreshCw, LayoutGrid } from "lucide-react"
import CircleProgress from "@/components/circle-progress-bar"

export default function InsightsDashboard() {
  return (
    <div className=" bg-gray-100 p-2 md:p-4">
      <div className="h-full w-full flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2 md:mb-4">Insights</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 flex-grow">
          {/* Lack of Management Buy-in */}
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Lack of Management Buy-in</h2>
            <div className="flex flex-col items-center justify-center flex-grow">
              <div className="w-16 h-16 bg-white shadow-md rounded-md flex items-center justify-center mb-2">
                <BarChart3 className="w-8 h-8 text-blue-800" />
              </div>
              <div className="relative w-24 h-24 mb-2">
                <CircleProgress percentage={90} color="#1e3a8a" />
              </div>
              <p className="text-center text-xs md:text-sm text-gray-700 max-w-md">
                Consumer Insights initiatives are initiated or monitored at the very top level
              </p>
            </div>
          </div>

          {/* Lack of Robust Processes */}
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Lack of Robust Processes</h2>
            <div className="flex flex-row items-center justify-around gap-2 flex-grow">
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                  <CircleProgress percentage={20} color="#1e3a8a" />
                </div>
                <p className="text-center text-xs text-gray-700 mt-1 max-w-[150px]">
                  Have taken little actions to reduce time taken from insight generation to business action
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                  <CircleProgress percentage={30} color="#1e3a8a" />
                </div>
                <p className="text-center text-xs text-gray-700 mt-1 max-w-[150px]">
                  Have not been able to link KPIs/Performance measurement of departments to insights
                </p>
              </div>
            </div>
          </div>

          {/* Inadequate Data and Associated skills */}
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Inadequate Data and Associated skills</h2>
            <div className="space-y-2 flex-grow flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <FolderClosed className="w-6 h-6 text-blue-800" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-600">45%</span>
                  <p className="text-xs md:text-sm text-gray-700">Do Not Have adequate Consumer Data</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-800" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-600">40%</span>
                  <p className="text-xs md:text-sm text-gray-700">
                    Lack the skills necessary for generating actionable insights
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-blue-800" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-600">40%</span>
                  <p className="text-xs md:text-sm text-gray-700">
                    Have not updated their talent development practices related to generating consumer insights
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Absence of Defined Roles */}
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Absence of Defined Roles</h2>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-800" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-600">46%</span>
                  <p className="text-xs md:text-sm text-gray-700">
                    Report lack of clearly-defined roles for consumer insights professionals as a major challenge
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <LayoutGrid className="w-6 h-6 text-blue-800" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-600">38%</span>
                  <p className="text-xs md:text-sm text-gray-700">
                    Cite lack of clarity in the reporting structure and/or objectives of the consumer insights function
                    as a major challenge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
