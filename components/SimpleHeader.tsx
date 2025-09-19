"use client";

export default function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  🔍
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search candidates, jobs..."
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <span className="text-xl">🔔</span>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
            </button>
            <div className="ml-3 relative">
              <button className="max-w-xs bg-white flex items-center text-sm rounded-full">
                <div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  JD
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}