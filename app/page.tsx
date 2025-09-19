export default function Dashboard() {
  const stats = [
    { name: "Total Jobs", value: "24", change: "+12%", changeType: "positive" },
    { name: "Total Candidates", value: "1,429", change: "+54%", changeType: "positive" },
    { name: "Interviews Scheduled", value: "89", change: "+18%", changeType: "positive" },
    { name: "Positions Filled", value: "12", change: "+3%", changeType: "positive" },
  ];

  const recentActivities = [
    { id: 1, type: "application", message: "New application from Sarah Johnson for Senior Developer", time: "2 hours ago" },
    { id: 2, type: "interview", message: "Interview scheduled with Mike Chen for Product Manager", time: "4 hours ago" },
    { id: 3, type: "offer", message: "Offer accepted by Emily Davis for UX Designer position", time: "6 hours ago" },
    { id: 4, type: "application", message: "5 new applications for Marketing Specialist", time: "1 day ago" },
  ];

  const activeJobs = [
    { id: 1, title: "Senior Full Stack Developer", department: "Engineering", applicants: 45, status: "active", daysOpen: 12 },
    { id: 2, title: "Product Manager", department: "Product", applicants: 32, status: "active", daysOpen: 8 },
    { id: 3, title: "UX Designer", department: "Design", applicants: 28, status: "filled", daysOpen: 0 },
    { id: 4, title: "Marketing Specialist", department: "Marketing", applicants: 67, status: "active", daysOpen: 5 },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-64">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">Welcome back! Here's an overview of your recruitment pipeline.</p>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <span className="ml-1">{stat.change}</span>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Active Job Postings</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {activeJobs.map((job) => (
                  <li key={job.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{job.title}</p>
                        <p className="text-sm text-gray-500 truncate">{job.department}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {job.applicants} applicants
                        </span>
                        {job.status === 'active' ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Filled
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a href="/jobs" className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View all jobs
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivities.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivities.length - 1 ? (
                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center ring-8 ring-white">
                            <span className="text-white text-xs font-bold">
                              {activity.type === 'application' && 'A'}
                              {activity.type === 'interview' && 'I'}
                              {activity.type === 'offer' && 'O'}
                            </span>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">{activity.message}</p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recruitment Pipeline Analytics</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <div className="text-center">
              <p className="mt-2 text-sm text-gray-500">Interactive charts will be displayed here</p>
              <p className="text-xs text-gray-400 mt-1">Application flow, conversion rates, and time-to-hire metrics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}