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
    casestudy: "https://docs.google.com/document/d/1psQpccGO-cQs75kVWR3CaKDyZ3qQEbTFs7K1SxUjM0U/edit?usp=sharing",
    live: "https://zendawa-africa.vercel.app/",
    featured: true,
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
    casestudy: "https://docs.google.com/document/d/1mEBpHWCyzYFfKURADp3QWmSavMZK4rZTSzwfwOX4it8/edit?usp=sharing",
    live: "https://www.figma.com/proto/YX2lpaXRRlLI4LFsKXd8H2/Cryptovault?node-id=1-192&p=f&t=hUqaEKIglqTVRiQk-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A192",
    featured: true,
  },
  {
  id: 3,
  title: "Healthcare Dashboard",
  category: "Data Visualization",
  description:
    "A modern healthcare dashboard designed for doctors to manage patient information, daily schedules, medical supplies, and insurance data with clarity and efficiency.",
  image: "/health-dashboard.png",
  video: "/placeholder-video.mp4",
  technologies: ["Figma", "React", "Chart.js", "TailwindCSS"],
  casestudy: "https://docs.google.com/document/d/1juMNSACAM1wW6-iPaGjDo-PzGWdJvHzAAwE14VW4Gqg/edit?usp=sharing",
  live: "https://www.figma.com/proto/s3nbF92RGE1ySEsTJVkjt8/Healthcare-dashboard?node-id=1-2&t=EqNFISVpurlCdvz9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  featured: true,
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
  casestudy: "https://docs.google.com/document/d/1wleYuf6i7YsXPtvMT4yzEj1OCkxe_mIj8ctpClFqfjs/edit?usp=sharing",
  live: "https://www.figma.com/proto/jEoTFkxcShY8dRSmLpqdsG/SaaS-Dashboard?node-id=4-344&p=f&t=ugcj7H9hTtnfpXTw-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  featured: false,
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
  casestudy: "https://docs.google.com/document/d/1ROboyqBuSptzHAhu5hiwlkMGZ2aKYoXkA1YpJgZhWmA/edit?usp=sharing", 
  live: "https://www.figma.com/proto/5gl69r1i0japWnYWJpY1U5/Mariah-the-Scientist?node-id=1-87&t=FUqsktz9NGaudoc1-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A87&show-proto-sidebar=1",
  featured: true,
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
                window.open(project.casestudy, "_blank")
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              Case Study
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
                onClick={() => window.open(project.casestudy, "_blank")}
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
