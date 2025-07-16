"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Code, Palette, Zap, Heart } from "lucide-react"

const skills = [
  { name: "Frontend Development", level: 95, icon: Code },
  { name: "UI/UX Design", level: 88, icon: Palette },
  { name: "Performance Optimization", level: 92, icon: Zap },
  { name: "User Experience", level: 90, icon: Heart },
]

const funFacts = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Passion for Code" },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"])

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who believes in the power of code to create extraordinary experiences. With a
            keen eye for design and a love for cutting-edge technology, I craft digital solutions that inspire and
            engage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills Section */}
          <motion.div style={{ y }} className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Skills & Expertise</h3>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="flex items-center mb-3">
                    <Icon className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="ml-auto text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-8"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                >
                  {fact.number}
                </motion.div>
                <div className="text-white/80 font-medium">{fact.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl backdrop-blur-sm border border-white/10">
            <p className="text-lg text-white/90 leading-relaxed">
              "I believe that great design is not just about how something looks, but how it makes people feel. Every
              line of code I write is an opportunity to create something meaningful, something that connects with users
              on a deeper level."
            </p>
            <div className="mt-6 text-purple-400 font-semibold">- Otambo Library</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
