"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Users, Palette, TestTube, BarChart, Lightbulb } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Research & Discovery",
    description:
      "User interviews, surveys, competitive analysis, and stakeholder alignment to understand the problem space.",
    tools: ["Miro", "Notion", "Google Forms", "Calendly"],
    deliverables: ["User Personas", "Journey Maps", "Research Insights", "Problem Statements"],
  },
  {
    icon: Users,
    title: "User Research",
    description: "Deep dive into user needs through ethnographic studies, usability testing, and behavioral analysis.",
    tools: ["UserTesting", "Maze", "Hotjar", "Lookback"],
    deliverables: ["User Interviews", "Usability Reports", "Behavioral Analytics", "Pain Point Analysis"],
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "From low-fidelity wireframes to high-fidelity prototypes, iterating based on user feedback.",
    tools: ["Figma", "Sketch", "Principle", "Framer"],
    deliverables: ["Wireframes", "Prototypes", "Design Systems", "Interaction Specs"],
  },
  {
    icon: TestTube,
    title: "Testing & Validation",
    description: "Continuous testing with real users to validate design decisions and iterate improvements.",
    tools: ["Maze", "UserTesting", "Optimal Workshop", "UsabilityHub"],
    deliverables: ["Test Plans", "Usability Reports", "A/B Test Results", "Recommendations"],
  },
  {
    icon: BarChart,
    title: "Metrics & Outcomes",
    description: "Measuring success through KPIs, user satisfaction, and business impact metrics.",
    tools: ["Google Analytics", "Mixpanel", "Hotjar", "Amplitude"],
    deliverables: ["Success Metrics", "Impact Reports", "ROI Analysis", "Performance Dashboards"],
  },
  {
    icon: Lightbulb,
    title: "Iteration & Optimization",
    description: "Continuous improvement based on user feedback, analytics, and changing business needs.",
    tools: ["Figma", "Jira", "Slack", "Linear"],
    deliverables: ["Design Updates", "Feature Enhancements", "Optimization Reports", "Roadmap Planning"],
  },
]

export default function DesignProcess() {
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
              Design Process
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My human-centered design approach combines research, creativity, and data-driven insights to solve complex
            user problems
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

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">My Design Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Human-Centered</h4>
                <p className="text-white/70">
                  Every design decision is rooted in user needs and validated through research
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Data-Driven</h4>
                <p className="text-white/70">
                  Combining qualitative insights with quantitative metrics for informed decisions
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Iterative</h4>
                <p className="text-white/70">Continuous testing and refinement to achieve optimal user experiences</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
