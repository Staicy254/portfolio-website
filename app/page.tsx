"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"
import AudioController from "@/components/audio-controller"
import ThreeBackground from "@/components/three-background"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <AudioController />

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <motion.div
        className="fixed inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/40"
        style={{ y: backgroundY }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-20">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
