"use client";

export default function Profile() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-64">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Company Profile</h1>
        <p className="mt-2 text-sm text-gray-700">Manage your company information and branding</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Company Information</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    defaultValue="TechCorp Solutions"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Industry</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education</option>
                    <option>Retail</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company Size</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                      <option>1-10</option>
                      <option>11-50</option>
                      <option selected>51-200</option>
                      <option>201-500</option>
                      <option>500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Founded Year</label>
                    <input
                      type="text"
                      defaultValue="2015"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Website</label>
                  <input
                    type="url"
                    defaultValue="https://techcorpsolutions.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Description</label>
                  <textarea
                    rows={4}
                    defaultValue="TechCorp Solutions is a leading technology company specializing in innovative software solutions for enterprises. We're committed to building cutting-edge products that transform how businesses operate."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Culture & Values</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mission Statement</label>
                  <textarea
                    rows={3}
                    defaultValue="To empower businesses through innovative technology solutions that drive growth and efficiency."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Core Values</label>
                  <textarea
                    rows={3}
                    defaultValue="Innovation, Integrity, Collaboration, Excellence, Customer Success"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Benefits & Perks</label>
                  <textarea
                    rows={3}
                    defaultValue="Competitive salary, Health insurance, Remote work options, Professional development, Stock options, Unlimited PTO"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Company Logo</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="flex justify-center mb-4">
                <div className="h-32 w-32 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <span className="text-4xl">🏢</span>
                </div>
              </div>
              <button className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                Upload New Logo
              </button>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Office Locations</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-3">
                <div className="border-l-4 border-indigo-500 pl-3">
                  <p className="text-sm font-medium text-gray-900">Headquarters</p>
                  <p className="text-sm text-gray-600">San Francisco, CA</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-3">
                  <p className="text-sm font-medium text-gray-900">Engineering Hub</p>
                  <p className="text-sm text-gray-600">Austin, TX</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-3">
                  <p className="text-sm font-medium text-gray-900">Sales Office</p>
                  <p className="text-sm text-gray-600">New York, NY</p>
                </div>
              </div>
              <button className="mt-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                + Add Location
              </button>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Social Media</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                  <input
                    type="text"
                    placeholder="linkedin.com/company/..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Twitter</label>
                  <input
                    type="text"
                    placeholder="@company"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          Cancel
        </button>
        <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}