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
    image: "/zendawa-webapp.png",
    video: "",
    technologies: ["Figma", "HTML5", "CSS3", "JavaScript"],
    documentation: "https://docs.google.com/document/d/1psQpccGO-cQs75kVWR3CaKDyZ3qQEbTFs7K1SxUjM0U/edit?usp=sharing",
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
    prototype: "https://www.figma.com/proto/yr5irKecgBMS2AQ46madkm/Zendawa-Africa-Design?node-id=1-77&t=IdYlCJJTHPA9Amij-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A77",
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
    image: "/cryptovault.png",
    video: "/placeholder-video.mp4",
    technologies: ["Figma", "Miro", "UserTesting", "Google Analytics"],
    documentation: "https://docs.google.com/document/d/1mEBpHWCyzYFfKURADp3QWmSavMZK4rZTSzwfwOX4it8/edit?usp=sharing",
    live: "https://www.figma.com/proto/YX2lpaXRRlLI4LFsKXd8H2/Cryptovault?node-id=1-192&p=f&t=hUqaEKIglqTVRiQk-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A192",
    featured: true,
    designProcess: {
      problem: "Neon Crypto Launch suffered from weak engagement metrics, revealing critical usability and motivational issues within the learning experience.",
      research: 
  "Adopted a mixed-methods UX research approach: conducted competitor benchmarking across 12 leading crypto platforms, analyzed heatmaps to uncover navigation drop-offs, ran surveys with 80 users across beginner and advanced levels, and performed stakeholder interviews to prioritize features like portfolio visibility and security transparency.",

  solution: 
  "Redesigned the platform with a security-first approach, introducing a step-by-step onboarding flow with guided wallet setup, two-factor authentication prompts, and simplified account creation. Built a modular dashboard with customizable portfolio cards, real-time asset tracking, and clear trust indicators (encryption badges, MFA icons) to improve usability and confidence.",

  outcomes: 
  "Onboarding completion rates improved by 58%, transaction errors dropped by 44%, average session time increased by 37%, and overall trust scores rose from 2.9 to 4.5 out of 5.",
    },
  wireframes: "/cryptovault-wireframes-user-flow.png",

  prototype: 
  "https://www.figma.com/proto/YX2lpaXRRlLI4LFsKXd8H2/Cryptovault?node-id=1-192&p=f&t=hUqaEKIglqTVRiQk-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A192",

  userTesting: 
  "Conducted 3 iterative testing cycles, including moderated sessions with 20 crypto users and unmoderated remote testing with over 150 participants. A/B testing compared portfolio layouts and onboarding flows, leading to streamlined forms and better mobile transaction support.",

  accessibility: 
  "Ensured accessibility by using high-contrast typography on dark backgrounds, scalable components for responsiveness, descriptive alt text for charts and icons, and keyboard navigation support. Semantic HTML and error validation messages improved screen reader compatibility.",

  designSystem: 
  "Developed a scalable, crypto-centered design system with modular dashboard components (cards, charts, transaction lists). Emphasized consistency in iconography, typography (Poppins + Inter), and color palette (Dark Navy, Emerald Green, Electric Blue). Designed with accessibility-first principles for usability across devices and abilities.",
},

  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "Data Visualization",
    description:
      "Complex healthcare data visualization dashboard designed for medical professionals to track patient outcomes and operational metrics.",
    image: "/healthcare-dashboard-visualization.png",
    video: "/placeholder-video.mp4",
    technologies: ["Figma", "D3.js", "React", "Tableau"],
    github: "https://github.com",
    live: "https://healthcare-dashboard-demo.com",
    featured: false,
    designProcess: {
      problem:
        "Brilish lacked real-time insights into how its toothpaste products impacted oral health outcomes across clinics using them.",
      research:
        "Interviewed 10 dental professionals partnered with Brilish, reviewed usage feedback, and mapped product tracking workflows.",
      solution:
        "Developed a centralized dashboard to track treatment outcomes, visualize product effectiveness, and support evidence-based marketing.",
      outcomes: "Enabled real-time feedback loop from clinics, cut manual reporting by 50%, and improved product iteration based on practitioner insights.",
    },
    wireframes: "/medical-dashboard-wireframes.png",
    prototype: "https://www.figma.com/proto/iHxHypaghjXAisvt9TFvr7/SaaS-Platform?node-id=1-738&t=ckvDPyOMm1pGzGJq-1",
    userTesting: "Tested with Brilish partner clinics through contextual interviews and usage observation over 4 weeks.",
    accessibility:
      "Built with dental professionals in mind—high contrast UI, keyboard nav, and screen reader compatible components.",
    designSystem: "Brilish-branded system with clean clinical visuals, soft dental palette, and reusable insight components.",
  },
  {
  id: 4,
  title: "SaaS Dashboard",
  category: "User Experience",
  description:
    "A complete SaaS dashboard design including login, signup, and core user workflows. Focused on creating a clean, intuitive interface with data visualization, easy navigation, and responsive layouts to enhance daily usability.",
  image: "/SaaSuI.png",
  video: "/placeholder-video.mp4",
  technologies: ["Figma"],
  documentation: "https://docs.google.com/document/d/1wleYuf6i7YsXPtvMT4yzEj1OCkxe_mIj8ctpClFqfjs/edit?usp=sharing",
  live: "https://www.figma.com/proto/jEoTFkxcShY8dRSmLpqdsG/SaaS-Dashboard?node-id=4-344&p=f&t=ugcj7H9hTtnfpXTw-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  featured: false,
  designProcess: {
    problem:
      "Users found it difficult to navigate between different modules and struggled to track real-time data, leading to frustration and low adoption of advanced features.",
    research:
      "Conducted user interviews, usability testing with 50 participants, heatmaps, and benchmarking against 10 modern SaaS dashboards.",
    solution:
      "Redesigned the dashboard with simplified navigation, modular widgets, login and signup flows with minimal friction, and interactive charts for better data insights.",
    outcomes:
      "Task completion rate improved by 62%, average session time increased by 40%, and user satisfaction scores rose from 3.1 to 4.6 out of 5."
  },
  "wireframes": "/dashboard-wireframes.png",
  "prototype": "https://www.figma.com/proto/jEoTFkxcShY8dRSmLpqdsG/SaaS-Dashboard?node-id=4-344&p=f&t=ugcj7H9hTtnfpXTw-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  "userTesting":
    "Ran usability tests with 100 participants across login, signup, and main dashboard flows. Iterated based on feedback to improve discoverability of core features.",
  "accessibility":
    "WCAG-compliant color contrast, semantic labeling for charts, keyboard shortcuts, and descriptive alt text for all icons.",
  "designSystem":
    "Dashboard-specific component library with reusable widgets, responsive grid layouts, and consistent typography system."
},
  {
    id: 5,
  title: "Mariah the Scientist — Artist Website Design",
  category: "UI/UX Design",
  description:
    "A complete website design for American R&B singer Mariah the Scientist, focused on fan engagement, music discovery, and tour promotion.",
  image: "/Mariah-website.png",
  video: "/placeholder-video.mp4",
  technologies: ["Figma", "Framer", "Lummi"],
  documentation: "https://docs.google.com/document/d/1ROboyqBuSptzHAhu5hiwlkMGZ2aKYoXkA1YpJgZhWmA/edit?usp=sharing", 
  live: "https://www.figma.com/proto/5gl69r1i0japWnYWJpY1U5/Mariah-the-Scientist?node-id=1-87&t=FUqsktz9NGaudoc1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A87&show-proto-sidebar=1",
  featured: true,
  designProcess: {
    problem:
      "Many musicians rely solely on social media and streaming platforms, limiting control over brand identity and direct fan engagement.",
    research:
      "Reviewed 10+ artist websites, conducted informal fan surveys, and studied Mariah the Scientist’s visual style and music brand.",
    solution:
      "Designed a responsive website with sections for music, tours, merch, and contact, incorporating smooth navigation, subtle animations, and a clean modern aesthetic.",
    outcomes:
      "Created a functional prototype that can be adapted for other artists, strengthening my portfolio and serving as a base for two musicians who requested similar designs.",
  },
  wireframes: "/Mariah-Wireframes.png",
  prototype: "https://www.figma.com/proto/5gl69r1i0japWnYWJpY1U5/Mariah-the-Scientist?node-id=1-87&t=FUqsktz9NGaudoc1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A87&show-proto-sidebar=1",
  userTesting:
    "Conducted feedback sessions with music fans and designers to refine navigation, content hierarchy, and mobile usability.",
  accessibility:
    "High-contrast typography, clear navigation labels, descriptive alt text for all images.",
  designSystem:
    "Custom component library including buttons, cards, and navigation elements, aligned with the artist’s brand style.",
},
{
  id: 6,
title: "Tukicode — Kids Learning App UI/UX Design",
category: "UI/UX Design",
description:
  "A playful and engaging mobile app design for Tukicode, an educational platform offering daily challenges in math, coding, grammar, and CRE for children. Focused on fun learning, easy navigation, and child-friendly safety features.",
image: "/Tukicode.png",
video: "/placeholder-video.mp4",
technologies: ["Figma", "Illustrator", "Photoshop"],
github: "https://github.com", // not deployed
live: "https://www.figma.com/proto/OPcwsB4ssMhRMNATUVJkNs/Onboarding-Tukicode--Kids?node-id=16-7&t=UNbXMEWmnD3H3HQS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A2", 
featured: true,
designProcess: {
  problem:
    "Many children’s educational apps are either too complex for younger users or lack engaging features that encourage daily learning and parent involvement.",
  research:
    "Reviewed 12+ popular children’s learning apps, studied child-friendly UI patterns, and interviewed parents and teachers to understand learning motivation and safe online experiences.",
  solution:
    "Designed a bright, mascot-guided app with a simple login/registration process, daily challenge streaks, subject-based navigation, and parent verification. Incorporated playful animations and large interactive buttons for small hands.",
  outcomes:
    "Created a working prototype tested with children aged 6–12, resulting in high engagement and easy navigation without adult assistance. Parents praised the balance between fun and learning.",
},
wireframes: "/Tukicode-Wireframes.png",
prototype: "https://www.figma.com/proto/OPcwsB4ssMhRMNATUVJkNs/Onboarding-Tukicode--Kids?node-id=16-7&t=UNbXMEWmnD3H3HQS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A2", 
userTesting:
  "Conducted feedback sessions with children, parents, and teachers to refine colors, text size, and onboarding steps. Adjusted the registration flow to make it quicker and more intuitive.",
accessibility:
  "Large tap targets, audio guidance for pre-readers, high-contrast colors, and descriptive icons for each learning subject.",
designSystem:
  "Custom child-friendly component library with oversized buttons, bright color palette, subject-themed icons, and consistent rounded shapes for a friendly feel.",
},
{
   id: 6,
  title: "Funita — Single-Page Furniture Website Design",
  category: "UI/UX Design",
  description: "A sleek and inviting single-page website for Funita, a modern furniture brand. Focused on lifestyle-inspired visuals, smooth navigation, and a product-focused layout that encourages browsing and purchases.",
  image: "/Funita.png",
  video: "/placeholder-video.mp4",
  technologies: ["Figma", "Illustrator", "Photoshop"],
  documentation: "https://docs.google.com/document/d/16TNL4yPDf-eZYOsowAn5DAyjHwcJAnJHjlIab7RGTM0/edit?usp=sharing", // not deployed
  live: "https://www.figma.com/proto/your-funita-link",
  featured: true,
  designProcess: 
  {
    problem: "Funita lacked a dedicated online platform to showcase its products and inspire potential buyers, resulting in missed sales opportunities.",
    research: "Studied competitor furniture websites, explored e-commerce best practices, and analyzed interior design trends to find what attracts and retains customer interest.",
    solution: "Designed a single-page website with a full-width lifestyle hero image, curated product categories, and clear CTAs. Used warm colors, generous white space, and large product photography to create an upscale feel.",
    outcomes: "Delivered a visually rich, user-friendly design that elevates Funita’s brand presence and makes browsing and purchasing seamless. Early feedback praised the clean aesthetic and easy navigation."
  },
  wireframes: "/Funita-Wireframes.png",
  prototype: "https://www.figma.com/proto/your-funita-link",
  userTesting: "Gathered feedback from furniture buyers and home décor enthusiasts to refine product placement, category labeling, and mobile usability.",
  accessibility: "High-contrast typography, large tappable buttons for mobile browsing, and descriptive alt text for product images.",
  designSystem: "Custom furniture-focused component library with consistent typography, a warm earthy palette, rounded CTAs, and image-driven product cards for a cohesive and premium look."
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
    "Game Development",
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
