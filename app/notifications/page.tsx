"use client";

import { useState } from "react";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = {
    all: [
      { id: 1, type: "application", title: "New Application", message: "Sarah Johnson applied for Senior Developer position", time: "5 minutes ago", read: false },
      { id: 2, type: "interview", title: "Interview Reminder", message: "Interview with Mike Chen scheduled for tomorrow at 2:00 PM", time: "1 hour ago", read: false },
      { id: 3, type: "system", title: "AI Analysis Complete", message: "Resume parsing completed for 15 new candidates", time: "2 hours ago", read: true },
      { id: 4, type: "offer", title: "Offer Accepted", message: "Emily Davis accepted the offer for UX Designer position", time: "3 hours ago", read: true },
      { id: 5, type: "application", title: "Multiple Applications", message: "12 new applications for Marketing Specialist position", time: "5 hours ago", read: true }
    ]
  };

  const settings = {
    email: {
      newApplications: true,
      interviewReminders: true,
      offerUpdates: true,
      weeklyReports: true
    },
    push: {
      newApplications: false,
      interviewReminders: true,
      offerUpdates: true,
      weeklyReports: false
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-64">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
        <p className="mt-2 text-sm text-gray-700">Manage your notification preferences and view recent alerts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Notifications</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-500">Mark all as read</button>
              </div>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-4">
                {notifications.all.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${
                      notification.read ? 'bg-white border-gray-200' : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {notification.type === 'application' && <span className="text-2xl">📄</span>}
                        {notification.type === 'interview' && <span className="text-2xl">📅</span>}
                        {notification.type === 'offer' && <span className="text-2xl">✉️</span>}
                        {notification.type === 'system' && <span className="text-2xl">🔔</span>}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                        <div className="mt-2">
                          <button className="text-sm text-indigo-600 hover:text-indigo-500 mr-3">View</button>
                          <button className="text-sm text-gray-600 hover:text-gray-500">Dismiss</button>
                        </div>
                      </div>
                      {!notification.read && (
                        <div className="ml-3 flex-shrink-0">
                          <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Email Notifications</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">New applications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Interview reminders</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Offer updates</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Weekly reports</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Push Notifications</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                  <span className="ml-2 text-sm text-gray-700">New applications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Interview reminders</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Offer updates</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                  <span className="ml-2 text-sm text-gray-700">Weekly reports</span>
                </label>
              </div>
            </div>
          </div>

          <button className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}