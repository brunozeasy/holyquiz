"use client"

import { useState } from "react"
import SpinningWheel from "@/components/spinning-wheel"

export default function SpinningWheelPage() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)

  const player1 = {
    username: "leigoprogramador",
    avatar: "/placeholder.svg?height=56&width=56",
    score: 0,
  }

  const player2 = {
    username: "papapaty2009",
    avatar: "/placeholder.svg?height=56&width=56",
    score: 0,
  }

  const handleCategorySelected = (category: any) => {
    setSelectedCategory(category)
    // Aqui você poderia carregar perguntas baseadas na categoria selecionada
  }

  return (
   
      <div className="w-full  h-full">
        <SpinningWheel
          player1={player1}
          player2={player2}
          currentRound={1}
          totalRounds={25}
          onCategorySelected={handleCategorySelected}
        />
      </div>
  
  )
}

