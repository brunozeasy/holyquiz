"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Crown, Globe, Mic, Pill, ClubIcon as Football, Paintbrush, CupSodaIcon as Cup } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = {
  id: number
  name: string
  color: string
  icon: React.ReactNode
}

type Player = {
  username: string
  avatar: string
  score: number
}

const categories: Category[] = [
  { id: 1, name: "Realeza", color: "bg-purple-500", icon: <Crown className="h-8 w-8 text-yellow-300" /> },
  { id: 2, name: "Geografia", color: "bg-blue-500", icon: <Globe className="h-8 w-8 text-white" /> },
  { id: 3, name: "Medicina", color: "bg-green-500", icon: <Pill className="h-8 w-8 text-white" /> },
  { id: 4, name: "Esportes", color: "bg-orange-500", icon: <Football className="h-8 w-8 text-white" /> },
  { id: 5, name: "Arte", color: "bg-yellow-500", icon: <Paintbrush className="h-8 w-8 text-white" /> },
  { id: 6, name: "Comida", color: "bg-red-500", icon: <Cup className="h-8 w-8 text-white" /> },
  { id: 7, name: "Música", color: "bg-pink-500", icon: <Mic className="h-8 w-8 text-white" /> },
]

interface SpinningWheelProps {
  player1: Player
  player2: Player
  currentRound: number
  totalRounds: number
  onCategorySelected: (category: Category) => void
}

export default function SpinningWheel({
  player1,
  player2,
  currentRound,
  totalRounds,
  onCategorySelected,
}: SpinningWheelProps) {
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const wheelRef = useRef<HTMLDivElement>(null)

  const spinWheel = () => {
    if (spinning) return

    setSpinning(true)
    setSelectedCategory(null)

    // Random rotation between 2 and 5 full rotations plus a random segment
    const spinDegrees = 720 + Math.floor(Math.random() * 1080) + Math.floor(Math.random() * (360 / categories.length))
    const newRotation = rotation + spinDegrees
    setRotation(newRotation)

    // Calculate which category was selected based on final rotation
    setTimeout(() => {
      const normalizedRotation = newRotation % 360
      const segmentSize = 360 / categories.length
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentSize) % categories.length
      setSelectedCategory(categories[selectedIndex])
      onCategorySelected(categories[selectedIndex])
      setSpinning(false)
    }, 3000) // Match this with the CSS transition duration
  }

  return (
    <div className="flex flex-col items-center justify-between  h-screen w-full bg-gradient-to-b from-sky-300 to-sky-500 overflow-hidden">
      {/* Header */}
      <div className="w-full pt-4 md:pt-6 pb-2 px-2 md:px-4">
        <div className="relative">
        

          {/* Round indicator */}
          <div className="relative text-center mb-4">
            <h2 className="text-xl md:text-3xl font-bold text-white drop-shadow-md">
              ROUND {currentRound}/{totalRounds}
            </h2>
          </div>

          {/* Players */}
          <div className="relative flex items-center justify-between mt-4 md:mt-8 bg-white rounded-full p-1 shadow-lg">
            {/* Player 1 */}
            <div className="flex items-center">
              <span className="text-sky-500 font-bold text-xs md:text-base ml-1 md:ml-2 truncate max-w-[80px] md:max-w-[120px]">
                @{player1.username}
              </span>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-green-400 flex items-center justify-center ml-1 md:ml-2 border-4 border-white">
                <span className="text-xl md:text-3xl">😊</span>
              </div>
            </div>

            {/* VS indicator */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-2xl md:text-3xl font-bold">
              ⚡
            </div>

            {/* Player 2 */}
            <div className="flex items-center flex-row-reverse">
              <span className="text-sky-500 font-bold text-xs md:text-base mr-1 md:mr-2 truncate max-w-[80px] md:max-w-[120px]">
                @{player2.username}
              </span>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-red-400 flex items-center justify-center mr-1 md:mr-2 border-4 border-white overflow-hidden">
                <img
                  src={player2.avatar || "/placeholder.svg?height=56&width=56"}
                  alt={player2.username}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wheel */}
      <div className="relative flex-1 flex items-center justify-center w-full px-4 my-4 md:my-8">
        <div
          ref={wheelRef}
          className="w-full max-w-[280px] md:max-w-[320px] aspect-square rounded-full relative transition-transform duration-3000 ease-out mx-auto"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {categories.map((category, index) => {
            const angle = (index * 360) / categories.length
            return (
              <div
                key={category.id}
                className={`absolute w-full h-full ${category.color} origin-center`}
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(((angle + 360 / categories.length) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((angle + 360 / categories.length) * Math.PI) / 180)}%, ${50 + 50 * Math.cos((angle * Math.PI) / 180)}% ${50 + 50 * Math.sin((angle * Math.PI) / 180)}%)`,
                }}
              >
                <div
                  className="absolute"
                  style={{
                    top: "25%",
                    left: "50%",
                    transform: `rotate(${angle + 360 / (categories.length * 2)}deg) translateX(calc(25% + 2vw))`,
                  }}
                >
                  <div className="w-5 h-5 md:w-8 md:h-8">{category.icon}</div>
                </div>
              </div>
            )
          })}
          <div className="absolute inset-0 rounded-full border-8 border-gray-400"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={spinWheel}
              disabled={spinning}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-sky-800 font-bold text-base md:text-xl flex items-center justify-center shadow-md hover:bg-gray-100 disabled:opacity-70 transition-colors"
            >
              SPIN
            </button>
          </div>
        </div>

        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-12">
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-sky-600 py-2 md:py-4 px-3 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 md:space-x-2">
            <div className="bg-sky-700 rounded-full p-1">
              <div className="bg-sky-500 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-white font-bold text-xs md:text-base">
                3
              </div>
            </div>
            <div className="bg-gray-800 rounded-full py-1 px-2 md:px-3 flex items-center">
              <span className="text-white font-bold text-xs md:text-base">0/1</span>
              <Crown className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 ml-1 md:ml-2" />
            </div>
          </div>

          <div className="bg-gray-800 rounded-full p-1 md:p-2 flex items-center justify-center">
            <Crown className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>

          <Button className="bg-teal-400 hover:bg-teal-500 text-white rounded-full px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm">
            <span className="mr-1 md:mr-2">swap</span>
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-pink-500 flex items-center justify-center">
              <span className="text-xs">🔄</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

