import React, { useEffect, useState } from "react";
import { allProjects } from "./Projects";
const HomePage = () => {
  // --- CONFIGURATION (from config.js) ---
  const CATEGORIES = [
    "All",
    "Mobile Development",
    "Web Development",
    "Design",
    "Backend Development",
    "Writing",
    "Data Science",
  ];
  // --- THEME STATE ---
  const [theme, setTheme] = useState("light");

  // --- FILTER + SEARCH STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // --- DATE HELPER ---
  const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffDays = Math.ceil(Math.abs(now - past) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return "Posted Today";
    if (diffDays < 30) return `${diffDays} days ago`;
    return past.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // --- FILTERED PROJECTS ---
  const filteredProjects = allProjects.filter((p) => {
    const searchMatch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch =
      filterCategory === "All" || p.category === filterCategory;
    return searchMatch && categoryMatch;
  });

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500`}
        //  ${
        // theme === "light"
        //   ? " text-white "
        //   : ''
      // }
     
    >
      {/* --- NAVBAR --- */}
      {/* <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-extrabold flex items-center text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            TaskNova
          </a>
          <ul className="flex space-x-6 items-center text-sm font-medium">
            <li>
              <a href="#" className="text-blue-400 font-bold">
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-700 transition"
              >
                {theme === "dark" ? (
                  <span>🌞</span>
                ) : (
                  <span>🌙</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="hero-section flex items-center  justify-center p-8 text-center mt-0"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/1600/900?blur=5') center/cover no-repeat",
        }}
      >
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-4">
            Your Success Starts Here.
          </h1>
          <p className="text-xl sm:text-2xl mb-8 font-light">
            Find the perfect project or the right talent, focusing on simplicity
            and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-bold text-lg bg-blue-500 text-white hover:opacity-90 transition shadow-xl"
            >
              Browse Projects
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-lg font-bold text-lg bg-white text-gray-900 hover:bg-gray-100 transition shadow-xl"
            >
              Become a Freelancer
            </a>
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHTS SECTION --- */}
      <section className="p-8 sm:p-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TaskNova?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 max-w-6xl mx-auto">
          {[
            {
              title: "Streamlined Workflow",
              desc: "Our intuitive dashboards simplify project management and proposal tracking.",
              icon: "📈",
            },
            {
              title: "No Overwhelm",
              desc: "Designed to avoid the complexity of existing platforms, focusing on an engaging UI/UX.",
              icon: "⚡",
            },
            {
              title: "Role-Based Experience",
              desc: "Dedicated dashboards for Clients and Freelancers ensure relevant tools for each role.",
              icon: "🎯",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-center hover:scale-[1.03] transition-transform"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MARKETPLACE SECTION --- */}
      <section id="projects" className="p-8 sm:p-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore Projects
        </h2>

        <div className="flex justify-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            className="border p-2 rounded-lg w-1/3 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 rounded-lg text-black"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-3xl  font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {p.description}
                </p>
                <p className="text-sm mb-1">Client: {p.client}</p>
                <p className="text-sm text-blue-400 font-semibold mb-3">
                  ₹{p.budget}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.skills.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-purple-700 text-purple-600 dark:text-white rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {timeAgo(p.posted)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No projects found.
            </p>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="p-8 sm:p-16 text-center text-gray-100 bg-gray-200 dark:bg-gray-900 border-t border-gray-400 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Join the TaskNova community today and move closer to your goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-bold text-lg bg-blue-500 text-white hover:opacity-90 transition shadow-xl"
          >
            Find Work Now
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-lg font-bold text-lg border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Register Client Account
          </a>
        </div>
        <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          © 2025 TaskNova. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
