"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  { icon: Mail, text: "jeanstaicy21@gmail.com", href: "mailto:jeanstaicy21@gmail.com" },
  { icon: Phone, text: "+1 7472920712", href: "tel:+17472920712" },
  { icon: MapPin, text: "Los Angeles, California", href: "#" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
                  />
                </motion.div>

                {/* Message */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 rounded-2xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : isSubmitted ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center">
                        <span className="mr-2">✓</span>
                        Message Sent!
                      </motion.div>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center p-4 bg-gradient-to-r from-white/10 to-white/5 
                               backdrop-blur-sm border border-white/10 rounded-2xl 
                               hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl 
                                    flex items-center justify-center mr-4 group-hover:scale-110 
                                    transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {info.text}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
