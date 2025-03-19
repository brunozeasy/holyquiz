"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Clock, RefreshCw, Bomb, SkipForward, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface HistoryQuizProps {
  onAnswerSelected: (isCorrect: boolean) => void;
  onPowerupUsed: (powerup: string) => void;
}

// Tipo para as perguntas do quiz
type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
};

// Dados do quiz
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
    options: [
      "Multiplicação dos pães",
      "Transformar água em vinho",
      "Cura de um leproso",
      "Ressurreição de Lázaro",
    ],
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
];

export default function HistoryQuiz({
  onAnswerSelected = () => {},
  onPowerupUsed = () => {},
}: HistoryQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [powerups, setPowerups] = useState({
    doubleChance: 150,
    bomb: 150,
    skip: 100,
    magicAnswer: 3,
  });

  const currentQuestion = quizQuestions[currentQuestionIndex];

  useEffect(() => {
    if (!currentQuestion) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAnswer(-1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);
    onAnswerSelected(isCorrect);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setTimeLeft(30);
      }
    }, 2000);
  };

  return (
    <div className="flex w-full h-screen bg-sky-600 flex-col">
      <header className="container mx-auto max-w-4xl mb-8">
        <div className="flex justify-between text-white items-center py-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-white" />
            <span className="font-medium">
              {timeLeft} {timeLeft !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="text-center">
            <span className="font-medium">
              {currentQuestionIndex + 1} de {quizQuestions.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Score: {score}</span>
          </div>
        </div>
        <Progress value={(timeLeft / 30) * 100} className="h-2" />
      </header>
      <div className="flex-1 bg-sky-300 flex flex-col items-center p-4">
        <div className="w-full max-w-md  overflow-hidden mt-10">
          <div className="p-6 pb-4 bg-white rounded-t-3xl rounded-b-md">
            <h2 className="text-xl text-center font-medium text-gray-700 mb-4">
              {currentQuestion.text}
            </h2>
          </div>
          <div className="p-4 space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={cn(
                  "w-full p-4 rounded-full border-2 hover:bg-orange-400/90 hover:text-white border-gray-300 bg-gray-50 text-gray-700 font-medium text-lg transition-colors",
                  selectedAnswer !== null &&
                    (index === currentQuestion.correctAnswer
                      ? "bg-green-100 border-green-500"
                      : index === selectedAnswer
                      ? "bg-red-100 border-red-500"
                      : "")
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
