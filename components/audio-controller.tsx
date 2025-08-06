"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)

  useEffect(() => {
    let audioContext: AudioContext | null = null
    let intervalId: NodeJS.Timeout | null = null

    const initAudio = async () => {
      try {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

        const createAmbientSound = () => {
          if (!audioContext || audioContext.state === "closed") return

          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)

          oscillator.frequency.setValueAtTime(220 + Math.random() * 100, audioContext.currentTime)
          oscillator.type = "sine"

          gainNode.gain.setValueAtTime(0, audioContext.currentTime)
          gainNode.gain.linearRampToValueAtTime(volume * 0.05, audioContext.currentTime + 0.5)

          oscillator.start()

          setTimeout(() => {
            if (audioContext && audioContext.state !== "closed") {
              gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5)
              setTimeout(() => {
                try {
                  oscillator.stop()
                } catch (e) {
                  // Oscillator already stopped
                }
              }, 500)
            }
          }, 2000)
        }

        if (isPlaying && !isMuted && audioContext.state === "suspended") {
          await audioContext.resume()
        }

        if (isPlaying && !isMuted) {
          createAmbientSound()
          intervalId = setInterval(createAmbientSound, 4000)
        }
      } catch (error) {
        console.log("Audio context not supported")
      }
    }

    if (isPlaying && !isMuted) {
      initAudio()
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
      if (audioContext && audioContext.state !== "closed") {
        audioContext.close()
      }
    }
  }, [isPlaying, isMuted, volume])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-8 right-8 z-40 flex items-center space-x-2 bg-black/50 backdrop-blur-md rounded-full p-3 border border-white/10"
    >
      <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white/80 hover:text-white w-8 h-8">
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </Button>

      <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white/80 hover:text-white w-8 h-8">
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </Button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
        className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`,
        }}
      />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #8b5cf6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </motion.div>
  )
}
