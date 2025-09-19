"use client";

import { useState } from "react";

export default function Candidates() {
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      position: "Senior Full Stack Developer",
      status: "screening",
      experience: "8 years",
      skills: ["React", "Node.js", "Python", "AWS"],
      resumeScore: 92,
      appliedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+1 (555) 234-5678",
      position: "Product Manager",
      status: "interview",
      experience: "6 years",
      skills: ["Product Strategy", "Agile", "Data Analysis", "User Research"],
      resumeScore: 88,
      appliedDate: "2024-01-14"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 345-6789",
      position: "UX Designer",
      status: "offer",
      experience: "5 years",
      skills: ["Figma", "Adobe Creative Suite", "User Testing", "Prototyping"],
      resumeScore: 85,
      appliedDate: "2024-01-12"
    },
    {
      id: 4,
      name: "Alex Thompson",
      email: "alex.thompson@email.com",
      phone: "+1 (555) 456-7890",
      position: "Data Scientist",
      status: "new",
      experience: "7 years",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      resumeScore: 94,
      appliedDate: "2024-01-18"
    },
    {
      id: 5,
      name: "Jessica Williams",
      email: "jessica.w@email.com",
      phone: "+1 (555) 567-8901",
      position: "Marketing Specialist",
      status: "rejected",
      experience: "4 years",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
      resumeScore: 75,
      appliedDate: "2024-01-10"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'screening': return 'bg-yellow-100 text-yellow-800';
      case 'interview': return 'bg-purple-100 text-purple-800';
      case 'offer': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-yellow-600 bg-yellow-50';
    if (score >= 70) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-64">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Candidates</h1>
          <p className="mt-2 text-sm text-gray-700">AI-powered candidate management and resume parsing</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-3">
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            📤 Upload Resume
          </button>
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            📥 Export Data
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex space-x-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by name, email, skills..."
                  className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border"
                />
                <select className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border">
                  <option>All Status</option>
                  <option>New</option>
                  <option>Screening</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </div>

              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {candidates.map((candidate) => (
                      <tr key={candidate.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedCandidate(candidate)}>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                            <div className="text-sm text-gray-500">{candidate.email}</div>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{candidate.position}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getScoreColor(candidate.resumeScore)}`}>
                            {candidate.resumeScore}%
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(candidate.status)}`}>
                            {candidate.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-2">View</button>
                          <button className="text-green-600 hover:text-green-900">Schedule</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {selectedCandidate && (
          <div className="bg-white shadow-sm rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Candidate Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Name</h4>
                  <p className="mt-1 text-sm text-gray-900">{selectedCandidate.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Contact</h4>
                  <p className="mt-1 text-sm text-gray-900">{selectedCandidate.email}</p>
                  <p className="text-sm text-gray-900">{selectedCandidate.phone}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Experience</h4>
                  <p className="mt-1 text-sm text-gray-900">{selectedCandidate.experience}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Skills</h4>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {selectedCandidate.skills.map((skill, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">AI Match Score</h4>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{width: `${selectedCandidate.resumeScore}%`}}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-900">{selectedCandidate.resumeScore}%</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <button className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                    📅 Schedule Interview
                  </button>
                  <button className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    📄 View Full Resume
                  </button>
                  <button className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                    🤖 AI Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showUploadModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg px-6 py-4 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <p className="text-4xl mb-2">📄</p>
                <p className="text-sm text-gray-600 mb-2">Drag and drop resume files here, or click to browse</p>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                <button className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                  Select Files
                </button>
                <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowUploadModal(false)}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Upload & Parse
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}