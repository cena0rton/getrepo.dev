"use client";
import React from "react";

export default function BeginnersGuide() {
  return (
    <section id="guide" className="w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="md:max-w-4xl w-full mx-auto p-6 space-y-8 pt-16">
        {/* Header */}
        <div className="text-left space-y-4">
          <h1 className="text-4xl font-medium text-left tracking-tight text-neutral-900 dark:text-neutral-100">
            Beginner&apos;s Guide to Open Source
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400  mx-auto text-left">
            Your complete roadmap to making your first open source contribution and becoming part of the global developer community.
          </p>
          <div className="flex items-center justify-start gap-2 text-sm text-neutral-500 dark:text-neutral-500 text-left">
            <span> Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>⏱ 15 min read</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-linear-to-br from-blue-500/50 to-neutral-100/70 dark:bg-conic-90 dark:from-blue-500/50 dark:to-neutral-100/70 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-medium mb-4 text-neutral-900 dark:text-neutral-100">Table of Contents</h2>
          <ul className="space-y-2 text-neutral-700 tracking-tight dark:text-neutral-300">
            <li><a href="#what-is-open-source" className="hover:text-blue-600 dark:hover:text-blue-400">1. What is Open Source?</a></li>
            <li><a href="#why-contribute" className="hover:text-blue-600 dark:hover:text-blue-400">2. Why Contribute to Open Source?</a></li>
            <li><a href="#getting-started" className="hover:text-blue-600 dark:hover:text-blue-400">3. Getting Started</a></li>
            <li><a href="#finding-projects" className="hover:text-blue-600 dark:hover:text-blue-400">4. Finding Your First Project</a></li>
            <li><a href="#making-contribution" className="hover:text-blue-600 dark:hover:text-blue-400">5. Making Your First Contribution</a></li>
            <li><a href="#best-practices" className="hover:text-blue-600 dark:hover:text-blue-400">6. Best Practices</a></li>
            <li><a href="#resources" className="hover:text-blue-600 dark:hover:text-blue-400">7. Additional Resources</a></li>
          </ul>
        </div>

        {/* What is Open Source */}
        <section id="what-is-open-source" className="space-y-4">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">1. What is Open Source?</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Open source software is software with source code that anyone can inspect, modify, and enhance. 
              Unlike proprietary software, open source projects are developed in a collaborative, public manner.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                 <strong>Key Point:</strong> Open source isn&apos;t just about code - it&apos;s about community, collaboration, and shared knowledge.
              </p>
            </div>
            <h3 className="text-xl font-medium mt-6 mb-3">Popular Open Source Projects:</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li><strong>React</strong> - JavaScript library for building user interfaces</li>
              <li><strong>VS Code</strong> - Popular code editor</li>
              <li><strong>Linux</strong> - Operating system kernel</li>
              <li><strong>TensorFlow</strong> - Machine learning framework</li>
              <li><strong>Docker</strong> - Containerization platform</li>
            </ul>
          </div>
        </section>

        {/* Why Contribute */}
        <section id="why-contribute" className="space-y-4">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">2. Why Contribute to Open Source?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-green-800 dark:text-green-400">Professional Benefits</h3>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Build a strong portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Learn from experienced developers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Gain real-world experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Network with industry professionals</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">Personal Growth</h3>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Improve coding skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Learn new technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Contribute to causes you care about</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Build confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" className="space-y-4">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">3. Getting Started </h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-medium mb-4 text-neutral-900 dark:text-neutral-100">Step 1: Set Up Your Development Environment</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Install Git</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-2">Git is essential for version control and collaboration.</p>
                  <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                    <code># Download from git-scm.com or use package manager</code><br/>
                    <code>git --version  # Verify installation</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Create a GitHub Account</h4>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-2">GitHub is the largest platform for open source projects.</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 rounded hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                   
                    <span>Sign up on GitHub</span>
                  </a>
                </div>

                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Configure Git</h4>
                  <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                    <code>git config --global user.name &quot;Your Name&quot;</code><br/>
                    <code>git config --global user.email &quot;your.email@example.com&quot;</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-medium mb-4 text-neutral-900 dark:text-neutral-100">Step 2: Learn the Basics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Essential Git Commands</h4>
                  <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                    <li><code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">git clone</code> - Download a repository</li>
                    <li><code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">git branch</code> - Create/switch branches</li>
                    <li><code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">git add</code> - Stage changes</li>
                    <li><code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">git commit</code> - Save changes</li>
                    <li><code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">git push</code> - Upload changes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">GitHub Workflow</h4>
                  <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                    <li>Fork the repository</li>
                    <li>Clone your fork locally</li>
                    <li>Create a feature branch</li>
                    <li>Make your changes</li>
                    <li>Submit a Pull Request</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Finding Projects */}
        <section id="finding-projects" className="space-y-4">
          <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100">4. Finding Your First Project </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                <strong>Pro Tip:</strong> Start with projects you already use or are interested in. This makes the contribution more meaningful and enjoyable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Where to Look</h3>
                <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl"> &middot; </span>
                    <div>
                      <p className="font-medium">Good First Issue</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Issues specifically labeled for beginners</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">&middot;</span>
                    <div>
                      <p className="font-medium">Hacktoberfest</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Annual event encouraging contributions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">&middot;</span>
                    <div>
                      <p className="font-medium">Documentation</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Improve docs, fix typos, add examples</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">&middot;</span>
                    <div>
                      <p className="font-medium">Bug Fixes</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Small, well-defined problems to solve</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">What to Look For</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-neutral-700 dark:text-neutral-300">Active community (recent commits)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-neutral-700 dark:text-neutral-300">Clear contribution guidelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-neutral-700 dark:text-neutral-300">Responsive maintainers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-neutral-700 dark:text-neutral-300">Good documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-neutral-700 dark:text-neutral-300">Issues labeled for beginners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Making Contribution */}
        <section id="making-contribution" className="space-y-4">
          <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100">5. Making Your First Contribution </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
              <h3 className="text-xl font-medium mb-4 text-neutral-900 dark:text-neutral-100">Complete Step-by-Step Process</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">Fork the Repository</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">Click the &quot;Fork&quot; button on the project&apos;s GitHub page to create your own copy.</p>
                    <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                      <code># This creates a copy in your GitHub account</code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Clone Your Fork</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">Download the repository to your local machine.</p>
                    <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                      <code>git clone https://github.com/YOUR_USERNAME/REPO_NAME.git</code><br/>
                      <code>cd REPO_NAME</code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Create a Branch</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">Create a new branch for your changes.</p>
                    <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                      <code>git checkout -b fix-typo-in-readme</code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Make Your Changes</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">Edit files, fix bugs, add features, or improve documentation.</p>
                    <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                      <code># Edit files using your preferred editor</code><br/>
                      <code># Test your changes</code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Commit Your Changes</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">Save your changes with a descriptive commit message.</p>
                    <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                      <code>git add .</code><br/>
                      <code>git commit -m &quot;Fix typo in README.md&quot;</code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Push to Your Fork</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">Upload your changes to your GitHub fork.</p>
                    <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                      <code>git push origin fix-typo-in-readme</code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Create a Pull Request</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-2">Submit your changes for review by the project maintainers.</p>
                    <div className="bg-neutral-800 text-green-400 p-3 rounded font-mono text-sm">
                      <code># Click &quot;New Pull Request&quot; on GitHub</code><br/>
                      <code># Write a clear description of your changes</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="space-y-4">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">6. Best Practices </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-green-600 dark:text-green-400">Do&apos;s </h3>
              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Read the project&apos;s CONTRIBUTING.md file</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Follow the project&apos;s coding style</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Write clear commit messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Test your changes thoroughly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Be patient and respectful</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Ask questions if you&apos;re unsure</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-red-600 dark:text-red-400">Don&apos;ts </h3>
              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Submit large changes without discussion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Ignore the project&apos;s guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Be discouraged by feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Submit duplicate issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Make assumptions about requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>Give up after one rejection</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-6">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">💬 Writing Good Pull Requests</h4>
            <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
              <li>• Use a clear, descriptive title</li>
              <li>• Explain what your changes do and why</li>
              <li>• Reference any related issues</li>
              <li>• Include screenshots for UI changes</li>
              <li>• Keep changes focused and small</li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="space-y-4">
          <h2 className="text-3xl font-medium text-neutral-900 dark:text-neutral-100">7. Additional Resources </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Learning Resources</h3>
              <div className="space-y-3">
                <a href="https://opensource.guide/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Open Source Guide</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Comprehensive guide by GitHub</p>
                </a>
                
                <a href="https://www.firsttimersonly.com/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">First Timers Only</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Resources for first-time contributors</p>
                </a>
                
                <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Hacktoberfest</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Annual open source celebration</p>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Tools & Platforms</h3>
              <div className="space-y-3">
                <a href="https://github.com/topics/good-first-issue" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Good First Issues</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Find beginner-friendly issues</p>
                </a>
                
                <a href="https://up-for-grabs.net/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">Up For Grabs</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Curated list of projects</p>
                </a>
                
                <a href="https://www.codetriage.com/" target="_blank" rel="noopener noreferrer" 
                   className="block p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">CodeTriage</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Get daily emails with issues</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 text-center border border-green-200/20 dark:border-green-700/20">
          <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">Ready to Make Your First Contribution? 🚀</h3>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 tracking-tight">
            Start your open source journey today! Remember, every expert was once a beginner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/topics/good-first-issue" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <span></span>
              <span>Find Your First Issue</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              <span></span>
              <span>Explore GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-neutral-500 dark:text-neutral-500 text-sm pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <p>Happy contributing! 🌟</p>
          <p className="mt-2">Remember: The open source community is welcoming and supportive. Don&apos;t hesitate to ask questions and learn from others.</p>
        </div>
      </div>
    </section>
  );
}
