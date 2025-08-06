"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Evans Mulera",
    role: "Founder of ProsperMinds LTD",
    company: "ProsperMinds LTD",
    rating: 5,
    text: "Working with this Jean transformed our product completely. Her research-driven approach and attention to accessibility resulted in a 85% increase in user satisfaction. She is exceptionally talented",
    project: "ProsperMinds LMS",
    metric: "80% increase in user satisfaction",
  },
  {
    id: 2,
    name: "Wilfred Chege",
    role: "Engineering Lead",
    company: "Zendawa Africa",
    rating: 5,
    text: "The collaboration was seamless. They provided detailed specs, interactive prototypes, and worked closely with our dev team. The handoff process was the smoothest I've experienced, and the final product exceeded expectations.",
    project: "Zendawa WebApp",
    metric: "67% course completion rate",
  },
  {
    id: 3,
    name: "Frankline Kelvin",
    role: "Lead Software Engineer",
    company: "Pivot Networks",
    rating: 5,
    text: "The user research phase was thorough, and the final designs were well done all clients were pleased. Exceptional work.",
    project: "Various clients",
    metric: "60% reduction in data lookup time",
  },
  
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            What clients and collaborators say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-white/90 text-center leading-relaxed mb-8 font-light">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Metric Highlight */}
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full border border-amber-400/30">
                  <span className="text-amber-300 font-semibold text-lg">{currentTestimonial.metric}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400/50">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-amber-300 font-medium">{currentTestimonial.role}</div>
                  <div className="text-white/60">{currentTestimonial.company}</div>
                  <div className="text-white/40 text-sm mt-1">{currentTestimonial.project}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white/30 text-white hover:bg-white/10 w-12 h-12 bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white/30 text-white hover:bg-white/10 w-12 h-12 bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Industries Served" },
            { number: "3x", label: "Average ROI Improvement" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
