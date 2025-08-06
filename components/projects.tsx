"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Zendawa WebApp",
    category: "Web Application",
    description:
      "Designed and developed the Zendawa web application from the ground up, focusing on intuitive user experience and seamless interface interactions.",
    image: "/mobile-banking-app.png",
    video: "/placeholder-video.mp4",
    technologies: ["Figma", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Staicy254/Zendawa_Africa",
    live: "https://zendawa-africa.vercel.app/",
    featured: true,
    designProcess: {
      problem:
        "Users found it difficult to navigate the existing informational site and were hesitant to complete purchases due to a lack of trust in the digital transaction process. This led to a 40% task abandonment rate during checkout.",
      research:
        "Conducted 15 in-depth user interviews with target customers (including caregivers and chronic illness patients), analyzed 200+ survey responses, and created 3 user personas based on medication shopping behavior, digital confidence, and urgency levels.",
      solution:
        "Redesigned the platform into a user-friendly shopping web app with a clear, simplified navigation flow. Applied progressive disclosure to avoid overwhelming users, integrated trust-building elements like secure payment badges and real-time order tracking, and added micro-interactions to provide feedback during key steps in the checkout process.",
      outcomes:
        "Achieved a 65% increase in task completion (successful checkouts), reduced support ticket volume by 30%, and boosted overall user satisfaction score from 3.2 to 4.6 out of 5.",
    },
    wireframes: "/mobile-app-wireframes.png",
    prototype: "https://www.figma.com/proto/yr5irKecgBMS2AQ46madkm/Zendawa-Africa-Design?node-id=1-77&p=f&t=Ag3hhiC0XoIXTrUT-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A77",
    userTesting: "Conducted 3 rounds of usability testing with 24 participants, A/B tested key flows with 1000+ users.",
    accessibility:
      "WCAG 2.1 AA compliant, 4.5:1 color contrast ratio, screen reader optimized, keyboard navigation support.",
    designSystem:
      "Created comprehensive design system with 50+ components, 8-point grid system, and semantic color tokens.",
  },
  {
    id: 2,
    title: "Crypto Website Redesign",
    category: "UX Research",
    description:
      "Research-driven redesign of an crypto platform to improve interaction engagement.",
    image: "/e-learning-dashboard.png",
    video: "/placeholder-video.mp4",
    technologies: ["Figma", "Miro", "UserTesting", "Google Analytics"],
    github: "https://github.com/Staicy254/neon-crypto_launch",
    live: "https://neon-crypto-launch.vercel.app/",
    featured: true,
    designProcess: {
      problem: "Neon Crypto Launch suffered from weak engagement metrics, revealing critical usability and motivational issues within the learning experience.",
      research:
        "Adopted a mixed-methods UX research approach: conducted heatmap analysis to identify drop-off points, mapped end-to-end user journeys, performed card sorting exercises with 50 learners to clarify content hierarchy, and gathered insights through stakeholder interviews.",
      solution: "Revamped the learning experience by introducing intuitive progress tracking, gamified learning paths (e.g., badges, levels, crypto rewards), and collaborative features like peer discussions and leaderboard challenges to foster community-driven motivation.",
      outcomes:
        "Course completion rate surged to 67%, average time-on-platform rose by 45%, and student satisfaction ratings improved significantly from 2.8 to 4.3 out of 5.",
    },
    wireframes: "/e-learning-wireframes-user-flow.png",
    prototype: "https://www.figma.com/proto/sm1Vm7XB2wSabFQBoaYAbT/Neon-Crypto?node-id=1-2&p=f&t=PYsdsMWbJQFlHItQ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    userTesting:
      "Conducted 3 iterative testing cycles, including moderated usability sessions with 18 students and unmoderated remote testing with over 200 participants, to gather both qualitative and quantitative insights for continuous design refinement.",
    accessibility:
      "Prioritized cognitive accessibility by establishing a clear content hierarchy, minimizing distractions, and using progressive disclosure to reduce cognitive load — ensuring the platform remained inclusive for diverse learning styles and attention spans.",
    designSystem:
      "Developed a scalable, education-centered design system with modular components tailored for learning workflows. Emphasized consistency in iconography, typography, and spacing — all built with an accessibility-first mindset to ensure usability across devices and abilities.",
  },
  {
    id: 3,
    title: "Brilish Toothcare",
    category: "Data Visualization",
    description:
      "Interactive dental data dashboard tailored for oral health professionals to monitor patient trends, treatment outcomes, and clinic efficiency at a glance.",
    image: "/healthcare-dashboard-visualization.png",
    video: "/placeholder-video.mp4",
    technologies: ["Figma", "Adobe Creative Suite"],
    github: "https://github.com",
    live: "https://www.figma.com/design/MT9MKYZDaA5jnG1T2he78S/Brillish?node-id=0-1&t=kcbQ2blcG54uicAV-1",
    featured: false,
    designProcess: {
      problem:
        "Dental practitioners struggled with fragmented records and time-consuming data systems, slowing diagnosis and treatment planning.",
      research:
        "Interviewed 10 dentists and hygienists, mapped clinical workflows, and analyzed appointment data flow and bottlenecks.",
      solution:
        "Designed a smart dashboard with real-time treatment metrics, visual health histories, and simplified clinic performance tracking.",
      outcomes: "Cut chart review time by 50%, accelerated treatment planning by 40%, and achieved 92% satisfaction from early testers.",
    },
    wireframes: "/medical-dashboard-wireframes.png",
    prototype: "https://www.figma.com/proto/MT9MKYZDaA5jnG1T2he78S/Brillish?node-id=3-12&p=f&t=2v5ApwZowaD4midn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    userTesting: "Contextual inquiries with dental professionals and usability testing during live clinic hours to validate dashboard flow.",
    accessibility:
      "Optimized for diverse lighting conditions with high contrast mode, full keyboard navigation, and screen reader support.",
    designSystem: "Dental-specific design system with intuitive iconography, clinical color cues, and standardized charting components.",
  },
  {
    id: 4,
    title: "SaaS Onboarding Experience",
    category: "User Experience",
    description:
      "Complete onboarding flow redesign for a B2B SaaS platform to reduce time-to-value and improve user activation rates.",
    image: "/saas-onboarding-ui.png",
    video: "/placeholder-video.mp4",
    technologies: ["Figma", "Framer", "Mixpanel", "Fullstory"],
    github: "https://github.com",
    live: "https://saas-onboarding-demo.com",
    featured: false,
    designProcess: {
      problem:
        "Only 12% of new users completed onboarding, with high drop-off rates at account setup and feature discovery stages.",
      research:
        "Funnel analysis, exit surveys, user session recordings, and competitive benchmarking across 15 SaaS platforms.",
      solution:
        "Progressive onboarding with contextual guidance, personalized setup flows, and interactive product tours.",
      outcomes:
        "Onboarding completion increased to 78%, time-to-first-value reduced by 50%, trial-to-paid conversion up 34%.",
    },
    wireframes: "/onboarding-flow-wireframes.png",
    prototype: "https://figma.com/proto/saas-onboarding",
    userTesting:
      "Longitudinal study tracking 100 new users through onboarding, A/B tested 5 different flow variations.",
    accessibility:
      "Keyboard navigation support, clear progress indicators, alternative text for all interactive elements.",
    designSystem: "Onboarding-specific component library with consistent messaging patterns and visual cues.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [filter, setFilter] = useState("All")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const categories = [
    "All",
    "Web Application",
    "Data Visualization",
    "Web Design",
    "UI/UX Design",
    "UX Research",
    "User Experience",
  ]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" ref={containerRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of my latest projects, each crafted with passion and attention to detail
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "border-white/30 text-white/80 hover:bg-white/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isInView,
  onClick,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group cursor-pointer ${project.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Play Button */}
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-purple-400 font-medium">{project.category}</span>
            {project.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                FEATURED
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white p-0"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.github, "_blank")
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white p-0"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.live, "_blank")
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0]
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="aspect-video relative overflow-hidden rounded-t-3xl">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 bg-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold rounded-full">
                  FEATURED PROJECT
                </span>
              )}
            </div>

            <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/10 text-white rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => window.open(project.live, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Project
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-white/30 text-white hover:bg-white/10 bg-transparent"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
