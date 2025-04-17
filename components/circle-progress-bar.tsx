"use client"

import { useEffect, useState } from "react"

interface CircleProgressProps {
  percentage: number
  color: string
}

export function CircleProgress({ percentage, color }: CircleProgressProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const progressOffset = circumference - (percentage / 100) * circumference
    setOffset(progressOffset)
  }, [percentage])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray="282.7"
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold" style={{ color }}>
          {percentage}%
        </span>
      </div>
    </div>
  )
}

export default CircleProgress
