"use client"

import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

export default function ThreeBackground() {
  const ref = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()

  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3)

    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.075

      // Mouse interaction
      ref.current.rotation.x += mouse.y * viewport.width * 0.00005
      ref.current.rotation.y += mouse.x * viewport.height * 0.00005
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#8b5cf6" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
