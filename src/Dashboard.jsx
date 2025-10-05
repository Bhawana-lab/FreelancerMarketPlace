import React from "react";
import "./style.css";
import { ArrowRight } from "lucide-react";

const Dashboard = ( {onBack}) => {
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto min-h-screen font-sans transition-colors duration-500">
      {/* Header */}
      <header
        className="mb-8 border-b pb-4 transition-colors duration-500"
        id="main-header"
      >
        <button onClick={onBack} className='flex items-center text-blue-900 hover:text-blue-700 mb-6 group'>
                        <ArrowRight className='w-5 h-5 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform'/>Back to Home
                    </button>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center text-[var(--color-text-primary)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 text-[var(--color-accent)]"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 5.74" />
            </svg>
            Freelancer Dashboard
          </h1>
          <button
            id="theme-toggle-btn"
            className="p-2 rounded-full transition-colors duration-300 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]"
          ></button>
        </div>
        <p className="mt-1 text-[var(--color-text-subtle)]">
          Welcome back, <strong>Freelancer User</strong>. Manage your projects and view
          your performance.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-2 space-y-8">
          {/* Stats Cards */}
          <div className="  grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-200 to-pink-200 p-5 rounded-xl border border-[var(--color-border)] shadow-md">
              <p className="text-sm text-[var(--color-text-subtle)] mb-1">
                Total Earnings
              </p>
              <p className="text-3xl font-bold text-[var(--color-text-primary)]">
                ₹12,450
              </p>
              <span className="text-xs text-green-500 flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                +8% last month
              </span>
            </div>

            <div className="bg-gradient-to-r from-blue-200 to-pink-200 p-5 rounded-xl border border-[var(--color-border)] shadow-md">
              <p className="text-sm text-[var(--color-text-subtle)] mb-1">
                Active Projects
              </p>
              <p className="text-3xl font-bold text-[var(--color-accent)]">3</p>
              <p className="text-xs text-[var(--color-text-subtle)] mt-2">
                2 awaiting feedback
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-200 to-pink-200 p-5 rounded-xl border border-[var(--color-border)] shadow-md">
              <p className="text-sm text-[var(--color-text-subtle)] mb-1">
                Average Rating
              </p>
              <p className="text-3xl font-bold text-yellow-500 flex items-center">
                4.9
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </p>
              <p className="text-xs text-[var(--color-text-subtle)] mt-2">
                Based on 15 reviews
              </p>
            </div>
          </div>

          {/* Active Projects Section */}
          <section className="bg-gradient-to-r from-blue-200 to-pink-200 p-6 rounded-xl border border-[var(--color-border)] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[var(--color-text-primary)] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-[var(--color-accent)]"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              Your Active Projects
            </h2>

            <ul className="space-y-4">
              <li className="p-4 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-hover)] transition-colors duration-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg text-[var(--color-text-primary)]">
                      E-commerce API Integration
                    </p>
                    <p className="text-sm text-[var(--color-text-subtle)]">
                      Client: Retail Giant Corp.
                    </p>
                  </div>
                  <span className="px-3 py-1 text-sm font-bold rounded-full bg-blue-600 text-[var(--color-accent-text)]">
                    In Progress
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-[var(--color-text-subtle)]">
                  <span>₹5,500 Budget</span>
                  <span>Due: 15 Oct 2025</span>
                </div>
              </li>

              <li className="p-4 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-hover)] transition-colors duration-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg text-[var(--color-text-primary)]">
                      Brand Identity Redesign
                    </p>
                    <p className="text-sm text-[var(--color-text-subtle)]">
                      Client: Coffee Roasters Inc.
                    </p>
                  </div>
                  <span className="px-3 py-1 text-sm font-bold rounded-full bg-yellow-600 text-[var(--color-accent-text)]">
                    Awaiting Review
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm text-[var(--color-text-subtle)]">
                  <span>₹800 Budget</span>
                  <span>Submitted: 29 Sep 2025</span>
                </div>
              </li>
            </ul>

            <button className="w-full mt-4bg-gradient-to-r from-blue-200 to-pink-200 text-[var(--color-accent-text)] px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-colors duration-200 shadow-md">
              View All Projects
            </button>
          </section>

          {/* Recent Proposals Section */}
          <section className="bg-gradient-to-r from-blue-200 to-pink-200 p-6 rounded-xl border border-[var(--color-border)] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[var(--color-text-primary)] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-[var(--color-accent)]"
              >
                <path d="M14.5 18a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H19a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-4.5zM12 21H3.5a2.5 2.5 0 0 1 0-5H20M3.5 11h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zM22 17h-2.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5H22"/>
              </svg>
              Recent Proposals
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border-b border-[var(--color-border)] last:border-b-0">
                <span className="text-[var(--color-text-primary)] font-medium">
                  UX Audit for Mobile App
                </span>
                <span className="text-xs text-[var(--color-text-subtle)]">
                  Submitted 1 day ago
                </span>
              </div>
              <div className="flex justify-between items-center p-3 border-b border-[var(--color-border)] last:border-b-0">
                <span className="text-[var(--color-text-primary)] font-medium">
                  Python Script Automation
                </span>
                <span className="text-xs text-green-500 font-medium">
                  Client Viewed
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Profile Status */}
          <section className="bg-gradient-to-r from-blue-200 to-pink-200 p-6 rounded-xl border border-[var(--color-border)] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[var(--color-text-primary)]">
              Profile Status
            </h2>
            <p className="text-sm text-[var(--color-text-subtle)] mb-2">
              Completion:{" "}
              <span className="font-bold text-[var(--color-accent)]">85%</span>
            </p>

            <div className="w-full bg-[var(--color-slider-track)] rounded-full h-2.5 mb-4">
              <div
                className="h-2.5 rounded-full bg-[var(--color-accent)]"
                style={{ width: "85%" }}
              ></div>
            </div>

            <p className="text-sm text-[var(--color-text-subtle)] mb-4">
              You're close! Adding a portfolio link will reach 100%.
            </p>

            <button className="w-full px-4 py-2 rounded-lg font-medium transition-colors duration-300 border border-[var(--color-input-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]">
              Update Profile
            </button>
          </section>

          {/* Your Top Skills */}
          <section className="bg-gradient-to-r from-blue-200 to-pink-200 p-6 rounded-xl border border-[var(--color-border)] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[var(--color-text-primary)]">
              Your Top Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "Node.js", "UX Design", "MongoDB"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] rounded-full font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          {/* Alerts */}
          <section className="bg-gradient-to-r from-blue-200 to-pink-200 p-6 rounded-xl border border-[var(--color-border)] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[var(--color-text-primary)]">
              Alerts
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-red-800/20 border border-red-800/50 rounded-lg text-red-400 text-sm">
                <span className="font-bold">Urgent:</span> Payment due for project
                #105 is delayed.
              </div>
              <div className="p-3 bg-blue-800/20 border border-blue-800/50 rounded-lg text-blue-400 text-sm">
                New message from Client: Retail Giant Corp.
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
