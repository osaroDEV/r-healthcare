"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade"
  delay?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-down": "-translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0",
    "fade-right": "-translate-x-8 opacity-0",
    scale: "scale-95 opacity-0",
    fade: "opacity-0",
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
