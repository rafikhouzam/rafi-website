"use client"
import { usePathname } from "next/navigation"
import Lottie from "react-lottie-player"
import stickmanRun from "@/public/animations/stickman-run.json"

export default function RunningStickman() {
  const pathname = usePathname()

  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog"

  return (
    <div
      className={`absolute top-2 left-0 w-12 h-12 animate-stickman ${
        isBlogPost ? "animate-paused" : ""
      }`}
    >
      <Lottie
        loop
        play={!isBlogPost} // pause Lottie run cycle
        animationData={stickmanRun}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
