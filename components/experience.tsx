"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  
  {
    id: 1,
    title: "Product Designer",
    company: "ProsperMinds Ltd.",
    location: "Hybrid - Nairobi",
    period: "Mar 2024 - Mar 2025",
    description:
      "Led the design and development of an Online LMS",
    achievements: [
      "Designed high-performing promotional banners and social media visuals using Figma, Canva & Adobe Suite",
      "Did various posters and banners for marketing the programs for ProsperMinds",
      "Working in a hybrid work setup, my role revolved around various administrative tasks and the design and management of the project.",
    ],
    technologies: ["Figma", "Canva", "WordPress", "JavaScript", "React", "Adobe Creative Suite"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Zendawa Africa",
    location: "Remote",
    period: "Apr 2024 - July 2024",
    description:
      "Led the design and implementation of an e-commerce site for Zendawa Africa",
    achievements: [
      "Worked in a fast-paced, agile environment, contributing to both development and optimization tasks.",
      "Applied WCAG guidelines to ensure accessibility and inclusive design across all devices",
      "Delivered branded visual assets tailored to campaign needs and platform guidelines",
      "Ensured visual consistency across platforms through reusable UI patterns and documentation",
    ],
    technologies: ["React", "HTMl5", "Sass", "Figma", "Adobe Creative Suite"],
    color: "from-green-500 to-teal-500",
  },
  
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Oasis Infobyte",
    location: "Remote - Nairobi",
    period: "June 2023 - Dec 2023",
    description:
      "Built SEO-optimized, mobile-responsive websites with a focus on semantic HTML, CSS3, and JavaScript, and Figma",
    achievements: [
      "Applied accessibility best practices and designed responsive layouts that ensured seamless user experiences across devices.",
      "Specialized in mobile-first UI design with performance in mind",
      "Designed intuitive mobile and web UIs for consumer-facing platforms with a focus on clean visual hierarchy and responsive layouts",
    ],
    technologies: ["React", "HTMl5", "Sass", "Figma", "Adobe Creative Suite"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Pivot Networks",
    location: "Remote - Nairobi",
    period: "Jan 2022 - Dec 2022",
    description:
      "Developed various sites for clients and Graphic Designs",
    achievements: [
      "Created engaging, emotionally resonant design experiences aligned with brand tone and user expectations",
      "Built and maintained scalable component libraries in Figma using auto-layout and variants",
      "Familiar with motion design principles and used tools like Framer or Figma prototypes to communicate animated states",
    ],
    technologies: ["React", "HTMl5", "Sass", "Figma", "Adobe Creative Suite"],
    color: "from-orange-500 to-yellow-500",
  },
  
]

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length)
  }

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My professional journey through the world of web development
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pl-16" : "pr-16"}`}>
                <ExperienceCard experience={exp} />
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black z-10" />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <ExperienceCard experience={experiences[currentIndex]} />

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevExperience}
                className="border-white/30 text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextExperience}
                className="border-white/30 text-white hover:bg-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: (typeof experiences)[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={`p-8 bg-gradient-to-br ${experience.color}/20 backdrop-blur-sm border border-white/10 rounded-3xl`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
          <div className="flex items-center text-lg font-semibold mb-2">
            <span className={`bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
              {experience.company}
            </span>
          </div>
          <div className="flex items-center text-white/60 text-sm space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {experience.period}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {experience.location}
            </div>
          </div>
        </div>
      </div>

      <p className="text-white/80 mb-6 leading-relaxed">{experience.description}</p>

      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start text-white/70">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-3">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
