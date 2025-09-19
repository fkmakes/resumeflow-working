"use client";

import { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-64">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-700">Manage your account and application preferences</p>
      </div>

      <div className="flex space-x-8">
        <div className="w-64">
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("general")}
              className={`${
                activeTab === "general"
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"
              } group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab("account")}
              className={`${
                activeTab === "account"
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"
              } group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full`}
            >
              Account
            </button>
            <button
              onClick={() => setActiveTab("integrations")}
              className={`${
                activeTab === "integrations"
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"
              } group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full`}
            >
              Integrations
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`${
                activeTab === "ai"
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"
              } group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full`}
            >
              AI Configuration
            </button>
            <button
              onClick={() => setActiveTab("billing")}
              className={`${
                activeTab === "billing"
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"
              } group border-l-4 px-3 py-2 flex items-center text-sm font-medium w-full`}
            >
              Billing
            </button>
          </nav>
        </div>

        <div className="flex-1">
          {activeTab === "general" && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">General Settings</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                      <option>Pacific Time (PT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>Central Time (CT)</option>
                      <option>Mountain Time (MT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date Format</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Language</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === "account" && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Account Settings</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john.doe@techcorp.com"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <input
                      type="text"
                      defaultValue="HR Manager"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                    />
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Change Password</h4>
                    <div className="space-y-3">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                      Update Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Integrations</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">LinkedIn</h4>
                        <p className="text-sm text-gray-500">Import candidates from LinkedIn</p>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-green-700 bg-green-100">
                        Connected
                      </button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Google Calendar</h4>
                        <p className="text-sm text-gray-500">Sync interview schedules</p>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Slack</h4>
                        <p className="text-sm text-gray-500">Send notifications to Slack</p>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Zoom</h4>
                        <p className="text-sm text-gray-500">Create meeting links automatically</p>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full text-green-700 bg-green-100">
                        Connected
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ai" && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">AI Configuration</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Resume Parsing Accuracy</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                      <option>High (Slower)</option>
                      <option>Medium (Balanced)</option>
                      <option>Fast (Lower accuracy)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">AI Screening Threshold</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="75"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Lenient</span>
                      <span>Balanced</span>
                      <span>Strict</span>
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Enable AI-powered candidate matching</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Auto-schedule AI voice interviews</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                      <span className="ml-2 text-sm text-gray-700">Use AI for initial candidate screening</span>
                    </label>
                  </div>
                  <div className="pt-4">
                    <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                      Save AI Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Billing & Subscription</h3>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Current Plan</h4>
                    <div className="mt-2 border rounded-lg p-4 bg-indigo-50 border-indigo-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-lg font-semibold text-gray-900">Enterprise</p>
                          <p className="text-sm text-gray-600">Unlimited users, AI features, and priority support</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">$499/mo</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Usage This Month</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">AI Voice Interviews</span>
                        <span className="font-medium">45 / Unlimited</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Resume Parsing</span>
                        <span className="font-medium">234 / Unlimited</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Active Job Postings</span>
                        <span className="font-medium">12 / Unlimited</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Payment Method</h4>
                    <div className="border rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">💳</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                          <p className="text-xs text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="text-sm text-indigo-600 hover:text-indigo-500">Update</button>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                      Change Plan
                    </button>
                    <button className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}