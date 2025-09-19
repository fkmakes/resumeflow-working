"use client";

export default function Analytics() {
  const metrics = [
    { label: "Average Time to Hire", value: "23 days", change: "-5 days", positive: true },
    { label: "Interview to Offer Ratio", value: "3:1", change: "Improved", positive: true },
    { label: "Candidate Satisfaction", value: "4.8/5", change: "+0.3", positive: true },
    { label: "Cost per Hire", value: "$4,200", change: "-$800", positive: true }
  ];

  const departmentStats = [
    { department: "Engineering", openings: 8, filled: 5, pipeline: 124, avgTime: "21 days" },
    { department: "Product", openings: 3, filled: 2, pipeline: 45, avgTime: "18 days" },
    { department: "Design", openings: 2, filled: 1, pipeline: 32, avgTime: "25 days" },
    { department: "Marketing", openings: 4, filled: 3, pipeline: 67, avgTime: "15 days" },
    { department: "Sales", openings: 6, filled: 4, pipeline: 89, avgTime: "12 days" }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-64">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Recruitment Analytics</h1>
        <p className="mt-2 text-sm text-gray-700">Track your hiring performance and optimize your recruitment process</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{metric.label}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{metric.value}</dd>
              <dd className={`mt-2 text-sm ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </dd>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Hiring Funnel</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Applications Received</span>
                  <span className="text-sm text-gray-500">2,847</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8">
                  <div className="bg-indigo-600 h-8 rounded-full flex items-center justify-center text-white text-xs" style={{width: '100%'}}>
                    100%
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Screening Passed</span>
                  <span className="text-sm text-gray-500">1,423</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8">
                  <div className="bg-indigo-500 h-8 rounded-full flex items-center justify-center text-white text-xs" style={{width: '50%'}}>
                    50%
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Interviews Scheduled</span>
                  <span className="text-sm text-gray-500">427</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8">
                  <div className="bg-indigo-400 h-8 rounded-full flex items-center justify-center text-white text-xs" style={{width: '15%'}}>
                    15%
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Offers Made</span>
                  <span className="text-sm text-gray-500">85</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8">
                  <div className="bg-indigo-300 h-8 rounded-full flex items-center justify-center text-white text-xs" style={{width: '3%'}}>
                    3%
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Hired</span>
                  <span className="text-sm text-gray-500">71</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8">
                  <div className="bg-green-500 h-8 rounded-full flex items-center justify-center text-white text-xs" style={{width: '2.5%'}}>
                    2.5%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Source Performance</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <div className="text-center">
                <p className="text-4xl mb-2">📊</p>
                <p className="text-sm text-gray-500">Source performance chart</p>
                <div className="mt-4 space-y-2 text-left">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">LinkedIn: 45%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Company Website: 25%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Referrals: 20%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Job Boards: 10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Department Performance</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open Positions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Filled</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate Pipeline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Time to Fill</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {departmentStats.map((dept, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dept.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.openings}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.filled}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.pipeline}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dept.avgTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          📥 Export Report
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          🔄 Refresh Data
        </button>
      </div>
    </div>
  );
}