"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Code2, GitBranch, TestTube, Gauge, RefreshCw } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Understand the Problem",
    description:
      "Before writing a single line of code, I dig into the requirements — talking to stakeholders, reviewing specs, and mapping out edge cases to ensure I'm solving the right problem.",
    tools: ["Notion", "Miro", "Google Docs", "Slack"],
    deliverables: ["Requirements Brief", "Scope Definition", "Edge Case Map", "Technical Feasibility"],
  },
  {
    icon: Code2,
    title: "Architect & Plan",
    description:
      "I plan the component structure, data flow, and tech stack before building. Clean architecture upfront saves hours of refactoring later.",
    tools: ["Figma", "draw.io", "TypeScript", "Git"],
    deliverables: ["Component Tree", "Data Flow Diagram", "Tech Stack Decision", "Folder Structure"],
  },
  {
    icon: GitBranch,
    title: "Build & Iterate",
    description:
      "I develop in focused sprints — building reusable components, integrating APIs, and committing often with clear messages. Mobile-first, always.",
    tools: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    deliverables: ["Responsive UI", "API Integration", "Reusable Components", "Clean Commits"],
  },
  {
    icon: TestTube,
    title: "Test & Debug",
    description:
      "I test across devices and browsers, hunt down bugs methodically, and validate functionality against the original requirements before shipping.",
    tools: ["Chrome DevTools", "Postman", "Lighthouse", "Jest"],
    deliverables: ["Cross-Browser Testing", "Bug Reports", "Performance Checks", "Accessibility Audit"],
  },
  {
    icon: Gauge,
    title: "Optimize for Performance",
    description:
      "I implement lazy loading, code splitting, caching, and asset minification to ensure fast load times and high Lighthouse scores.",
    tools: ["Lighthouse", "Webpack", "Vercel Analytics", "Google Analytics"],
    deliverables: ["Load Time Reduction", "SEO Improvements", "Core Web Vitals", "Performance Report"],
  },
  {
    icon: RefreshCw,
    title: "Ship & Improve",
    description:
      "After deployment I monitor user behavior, gather feedback, and continuously refine the product — because great software is never truly finished.",
    tools: ["Vercel", "Google Analytics", "GitHub", "Hotjar"],
    deliverables: ["Live Deployment", "Analytics Setup", "Feedback Loop", "Iteration Plan"],
  },
]

export default function DevProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              How I Build
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A look at how I think, plan, and build, from understanding the problem to deploying a
            performing, scalable product
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">{step.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Deliverables</h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">My Development Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Clean Code</h4>
                <p className="text-white/70">
                  Readable, maintainable, and scalable code that teammates can build on confidently
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Performance First</h4>
                <p className="text-white/70">
                  Every millisecond counts — I optimize for speed, accessibility, and Core Web Vitals
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Always Iterating</h4>
                <p className="text-white/70">
                  Shipping is the start, not the end — I treat every deployment as a learning opportunity
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}