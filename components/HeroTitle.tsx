"use client"

import { useEffect, useRef } from "react"
import { animate, stagger, splitText } from "animejs"

export default function HeroTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const { chars } = splitText(titleRef.current, {
      words: false,
      chars: true,
    })

    animate(chars, {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      rotate: { from: "-1turn" },
      delay: stagger(50),
      easing: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    })
  }, [])

  return (
    <h1 ref={titleRef} className="text-center">
      Data Engineer & Builder
    </h1>
  )
}
