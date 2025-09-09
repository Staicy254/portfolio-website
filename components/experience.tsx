"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    id: 1,
    title: "UI/UX Consultant",
    company: "AI Products",
    location: "Remote",
    period: "Jan 2024 - CURRENT",
    description:
      "Leading the development of AI systems and automating processes",
    achievements: [
      "Designed AI-based dashboards and messaging applications for user needs resulted in a 35% improvement in operational effectiveness",
      "Performed user research and usability testing with different users to obtain essential information, which led to immediate feature selection. ",
      "•	Worked with engineers to transform artificial intelligence workflows and logic into user-friendly interface paths. ",
    ],
    technologies: ["React", "Figma", "WordPress", "ChatGPT", "n8n", "v0", "Canva", "Adobe Creative Suite"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "xAI",
    location: "Palo Alto, California",
    period: "Jan 2022 - Dec 2023",
    description:
      "Joined as a trainer for AI tool interfaces. Worked in a fast-paced startup environment with rapid iteration cycles.",
    achievements: [
      "Worked with ML researchers to design user-centered UI elements, which helped users interpret complex AI output results. ",
      "Performed complete UX research for conversational products, which resulted in 28% better user engagement and task completion rates",
      "•	Established AI-specific design specifications for data labeling and model feedback, and reinforcement learning user interface flows",
    ],
    technologies: ["Figma", "AI", "ML", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Frontend Developer (UI/UX Integration)",
    company: "Hugging Face ",
    location: "Remote - USA",
    period: "Aug 2021 - Dec 2021",
    description:
      "Developed and maintained full-stack applications, working closely with design and product teams to deliver exceptional user experiences.",
    achievements: [
      "Worked with UX designers to transform prototypes into fully functional React components for production use",
      "•	Enabled the quick development of AI demo user interfaces, which served more than 1000 opensource community developers. ",
    ],
    technologies: ["React", "HTMl5", "Sass", "Figma", "Adobe Creative Suite"],
    color: "from-green-500 to-teal-500",
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
