"use client";

import { useState } from "react";

export default function Interviews() {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const interviews = {
    scheduled: [
      {
        id: 1,
        candidate: "Sarah Johnson",
        position: "Senior Full Stack Developer",
        date: "2024-01-22",
        time: "10:00 AM",
        type: "video",
        interviewer: "John Smith",
        round: "Technical Round 1"
      },
      {
        id: 2,
        candidate: "Mike Chen",
        position: "Product Manager",
        date: "2024-01-22",
        time: "2:00 PM",
        type: "ai-voice",
        interviewer: "AI Assistant",
        round: "Initial Screening"
      },
      {
        id: 3,
        candidate: "Emily Davis",
        position: "UX Designer",
        date: "2024-01-23",
        time: "11:00 AM",
        type: "in-person",
        interviewer: "Design Team",
        round: "Portfolio Review"
      }
    ],
    completed: [
      {
        id: 4,
        candidate: "Alex Thompson",
        position: "Data Scientist",
        date: "2024-01-19",
        time: "3:00 PM",
        type: "video",
        interviewer: "Data Team",
        round: "Technical Assessment",
        score: 88,
        feedback: "Strong technical skills, good problem-solving approach"
      },
      {
        id: 5,
        candidate: "Jessica Williams",
        position: "Marketing Specialist",
        date: "2024-01-18",
        time: "1:00 PM",
        type: "ai-voice",
        interviewer: "AI Assistant",
        round: "Initial Screening",
        score: 72,
        feedback: "Good communication, needs more experience in digital marketing"
      }
    ]
  };

  const aiQuestions = [
    "Tell me about yourself and your experience",
    "Why are you interested in this position?",
    "Describe a challenging project you worked on",
    "What are your key strengths?",
    "Where do you see yourself in 5 years?",
    "How do you handle tight deadlines?",
    "Describe your ideal work environment",
    "What motivates you professionally?"
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-64">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Interview Management</h1>
          <p className="mt-2 text-sm text-gray-700">Schedule and manage interviews with AI-powered voice calling</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-3">
          <button
            onClick={() => setShowScheduleModal(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            📅 Schedule Interview
          </button>
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            🤖 AI Settings
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("scheduled")}
              className={`${
                activeTab === "scheduled"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Scheduled ({interviews.scheduled.length})
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`${
                activeTab === "completed"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Completed ({interviews.completed.length})
            </button>
            <button
              onClick={() => setActiveTab("ai-voice")}
              className={`${
                activeTab === "ai-voice"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              AI Voice Settings
            </button>
          </nav>
        </div>

        {activeTab === "scheduled" && (
          <div className="mt-6 grid grid-cols-1 gap-4">
            {interviews.scheduled.map((interview) => (
              <div key={interview.id} className="bg-white shadow rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900">{interview.candidate}</h3>
                      {interview.type === "video" && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          📹 Video
                        </span>
                      )}
                      {interview.type === "ai-voice" && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          🤖 AI Voice
                        </span>
                      )}
                      {interview.type === "in-person" && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          👤 In-Person
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{interview.position} • {interview.round}</p>
                    <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {interview.date}</span>
                      <span>⏰ {interview.time}</span>
                      <span>👤 {interview.interviewer}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Join</button>
                    <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">Reschedule</button>
                    <button className="text-red-600 hover:text-red-900 text-sm font-medium">Cancel</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "completed" && (
          <div className="mt-6 grid grid-cols-1 gap-4">
            {interviews.completed.map((interview) => (
              <div key={interview.id} className="bg-white shadow rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900">{interview.candidate}</h3>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        ✓ Completed
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{interview.position} • {interview.round}</p>
                    <div className="mt-3 flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {interview.date}</span>
                      <span>⏰ {interview.time}</span>
                      <span>👤 {interview.interviewer}</span>
                    </div>
                    <div className="mt-3 p-3 bg-gray-50 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Interview Score:</span>
                        <span className={`text-sm font-bold ${interview.score >= 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                          {interview.score}/100
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{interview.feedback}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">View Recording</button>
                    <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">Download Report</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "ai-voice" && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">AI Voice Configuration</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Voice Type</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                    <option>Professional Female</option>
                    <option>Professional Male</option>
                    <option>Friendly Female</option>
                    <option>Friendly Male</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Interview Duration</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Language</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>Mandarin</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    <span className="ml-2 text-sm text-gray-700">Enable real-time transcription</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    <span className="ml-2 text-sm text-gray-700">Send automatic follow-up emails</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">AI Question Bank</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {aiQuestions.map((question, idx) => (
                  <div key={idx} className="flex items-start p-3 hover:bg-gray-50 rounded">
                    <input type="checkbox" className="mt-1 rounded border-gray-300 text-indigo-600" defaultChecked />
                    <label className="ml-3 text-sm text-gray-700">{question}</label>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  + Add Custom Question
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showScheduleModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg px-6 py-4 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Schedule Interview</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Candidate</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                  <option>Sarah Johnson - Senior Developer</option>
                  <option>Mike Chen - Product Manager</option>
                  <option>Alex Thompson - Data Scientist</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interview Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2">
                  <option>AI Voice Call</option>
                  <option>Video Interview</option>
                  <option>In-Person</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border px-3 py-2" />
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}