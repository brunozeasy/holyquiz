"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

// Tipo para as perguntas do quiz
type Question = {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}

// Dados de exemplo para o quiz
const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Quem construiu a arca, conforme relatado no livro de Gênesis?",
    options: ["Abraão", "Moisés", "Noé", "Davi"],
    correctAnswer: 2,
  },
  {
    id: 2,
    text: "Qual foi o primeiro milagre de Jesus, segundo o Evangelho de João?",
    options: ["Multiplicação dos pães", "Transformar água em vinho", "Cura de um leproso", "Ressurreição de Lázaro"],
    correctAnswer: 1,
  },
  {
    id: 3,
    text: "Quem foi jogado na cova dos leões?",
    options: ["Davi", "Daniel", "Jonas", "Paulo"],
    correctAnswer: 1,
  },
  {
    id: 4,
    text: "Quantos livros compõem o Novo Testamento?",
    options: ["27", "39", "66", "12"],
    correctAnswer: 0,
  },
  {
    id: 5,
    text: "Qual destes não é um dos 12 apóstolos de Jesus?",
    options: ["Pedro", "Tiago", "Lucas", "João"],
    correctAnswer: 2,
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [quizFinished, setQuizFinished] = useState(false)

  // Timer para cada pergunta
  useEffect(() => {
    if (showFeedback || quizFinished) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleAnswer(-1) // Tempo esgotado
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestion, showFeedback, quizFinished])

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return

    setSelectedOption(optionIndex)
    setShowFeedback(true)

    // Verificar se a resposta está correta
    if (optionIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1)
    }

    // Preparar para a próxima pergunta após 2 segundos
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedOption(null)
        setShowFeedback(false)
        setTimeLeft(30)
      } else {
        setQuizFinished(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowFeedback(false)
    setTimeLeft(30)
    setQuizFinished(false)
  }

  // Renderizar tela de resultado final
  if (quizFinished) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-primary">Quiz Concluído!</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Você acertou {score} de {quizQuestions.length} perguntas
              </p>
              <div className="py-4">
                <Progress value={(score / quizQuestions.length) * 100} className="h-3" />
              </div>
            </div>

            <div className="space-y-4">
              <Button onClick={resetQuiz} className="w-full">
                Jogar Novamente
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="/">Voltar ao Início</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 p-4">
      <header className="container mx-auto max-w-4xl mb-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium">
              {timeLeft} segundo{timeLeft !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="text-center">
            <span className="font-medium">
              Pergunta {currentQuestion + 1} de {quizQuestions.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Pontuação: {score}</span>
          </div>
        </div>
        <Progress value={(timeLeft / 30) * 100} className="h-2" />
      </header>

      <main className="container mx-auto max-w-4xl flex-1 flex flex-col">
        <Card className="w-full mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">{question.text}</h2>
            <div className="grid gap-4">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showFeedback
                      ? index === question.correctAnswer
                        ? "default"
                        : index === selectedOption
                          ? "destructive"
                          : "outline"
                      : selectedOption === index
                        ? "default"
                        : "outline"
                  }
                  className={cn("justify-start text-left h-auto py-4 px-6", showFeedback && "pointer-events-none")}
                  onClick={() => handleAnswer(index)}
                >
                  <div className="flex items-center w-full">
                    <span className="flex-1">{option}</span>
                    {showFeedback && index === question.correctAnswer && (
                      <CheckCircle className="h-5 w-5 ml-2 text-green-500" />
                    )}
                    {showFeedback && index === selectedOption && index !== question.correctAnswer && (
                      <AlertCircle className="h-5 w-5 ml-2 text-red-500" />
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {showFeedback && (
          <div className="text-center mb-4">
            <p className="text-lg font-medium">
              {selectedOption === question.correctAnswer ? "Resposta correta! 👏" : "Resposta incorreta. 😔"}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              A resposta correta é: {question.options[question.correctAnswer]}
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

