"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Plus, Trash2, Save, Eye, BookOpen, CheckCircle, XCircle, MoveUp, MoveDown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CreateQuizPage() {
  const [activeTab, setActiveTab] = useState("info")
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "Quem construiu a arca, conforme relatado no livro de Gênesis?",
      options: ["Abraão", "Moisés", "Noé", "Davi"],
      correctAnswer: 2,
      difficulty: "medium",
      category: "antigo-testamento",
    },
    {
      id: 2,
      text: "Qual foi o primeiro milagre de Jesus, segundo o Evangelho de João?",
      options: ["Multiplicação dos pães", "Transformar água em vinho", "Cura de um leproso", "Ressurreição de Lázaro"],
      correctAnswer: 1,
      difficulty: "easy",
      category: "novo-testamento",
    },
  ])
  const [quizInfo, setQuizInfo] = useState({
    title: "Estudo Bíblico Semanal",
    description: "Quiz para o grupo de jovens sobre os principais eventos bíblicos",
    timePerQuestion: 30,
    isPublic: true,
    category: "geral",
    difficulty: "mixed",
  })
  const { toast } = useToast()

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      text: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
      difficulty: "medium",
      category: "geral",
    }
    setQuestions([...questions, newQuestion])
  }

  const handleRemoveQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const handleQuestionChange = (id: number, field: string, value: any) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          return { ...q, [field]: value }
        }
        return q
      }),
    )
  }

  const handleOptionChange = (questionId: number, optionIndex: number, value: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOptions = [...q.options]
          newOptions[optionIndex] = value
          return { ...q, options: newOptions }
        }
        return q
      }),
    )
  }

  const handleMoveQuestion = (id: number, direction: "up" | "down") => {
    const index = questions.findIndex((q) => q.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === questions.length - 1)) {
      return
    }

    const newQuestions = [...questions]
    const newIndex = direction === "up" ? index - 1 : index + 1
    const temp = newQuestions[index]
    newQuestions[index] = newQuestions[newIndex]
    newQuestions[newIndex] = temp
    setQuestions(newQuestions)
  }

  const handleSaveQuiz = () => {
    // Aqui você implementaria a lógica para salvar o quiz
    toast({
      title: "Quiz salvo com sucesso!",
      description: "Seu quiz foi salvo e está pronto para ser compartilhado.",
    })
  }

  const handlePreviewQuiz = () => {
    // Aqui você implementaria a lógica para visualizar o quiz
    toast({
      title: "Modo de visualização",
      description: "Esta funcionalidade estará disponível em breve.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="/igreja">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Criar Novo Quiz</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePreviewQuiz}>
              <Eye className="mr-2 h-4 w-4" />
              Visualizar
            </Button>
            <Button onClick={handleSaveQuiz}>
              <Save className="mr-2 h-4 w-4" />
              Salvar Quiz
            </Button>
          </div>
        </div>

        <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="questions">Perguntas ({questions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Quiz</CardTitle>
                <CardDescription>Defina as configurações básicas do seu quiz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Título do Quiz</Label>
                  <Input
                    id="title"
                    value={quizInfo.title}
                    onChange={(e) => setQuizInfo({ ...quizInfo, title: e.target.value })}
                    placeholder="Ex: Quiz sobre os Profetas"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    value={quizInfo.description}
                    onChange={(e) => setQuizInfo({ ...quizInfo, description: e.target.value })}
                    placeholder="Descreva o propósito deste quiz"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select
                      value={quizInfo.category}
                      onValueChange={(value) => setQuizInfo({ ...quizInfo, category: value })}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="geral">Geral</SelectItem>
                        <SelectItem value="antigo-testamento">Antigo Testamento</SelectItem>
                        <SelectItem value="novo-testamento">Novo Testamento</SelectItem>
                        <SelectItem value="evangelhos">Evangelhos</SelectItem>
                        <SelectItem value="epistolas">Epístolas</SelectItem>
                        <SelectItem value="profetas">Profetas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Dificuldade</Label>
                    <Select
                      value={quizInfo.difficulty}
                      onValueChange={(value) => setQuizInfo({ ...quizInfo, difficulty: value })}
                    >
                      <SelectTrigger id="difficulty">
                        <SelectValue placeholder="Selecione a dificuldade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Fácil</SelectItem>
                        <SelectItem value="medium">Médio</SelectItem>
                        <SelectItem value="hard">Difícil</SelectItem>
                        <SelectItem value="mixed">Misto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timePerQuestion">Tempo por pergunta (segundos)</Label>
                    <Select
                      value={quizInfo.timePerQuestion.toString()}
                      onValueChange={(value) => setQuizInfo({ ...quizInfo, timePerQuestion: Number.parseInt(value) })}
                    >
                      <SelectTrigger id="timePerQuestion">
                        <SelectValue placeholder="Selecione o tempo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 segundos</SelectItem>
                        <SelectItem value="30">30 segundos</SelectItem>
                        <SelectItem value="45">45 segundos</SelectItem>
                        <SelectItem value="60">60 segundos</SelectItem>
                        <SelectItem value="90">90 segundos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="public">Tornar público</Label>
                      <p className="text-sm text-muted-foreground">
                        Permitir que outros membros vejam e joguem este quiz
                      </p>
                    </div>
                    <Switch
                      id="public"
                      checked={quizInfo.isPublic}
                      onCheckedChange={(checked) => setQuizInfo({ ...quizInfo, isPublic: checked })}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/igreja">Cancelar</Link>
                </Button>
                <Button onClick={() => setActiveTab("questions")}>Continuar para Perguntas</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="questions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Perguntas do Quiz</h2>
              <Button onClick={handleAddQuestion}>
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Pergunta
              </Button>
            </div>

            {questions.map((question, index) => (
              <Card key={question.id} className="relative">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Pergunta {index + 1}</CardTitle>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleMoveQuestion(question.id, "up")}
                        disabled={index === 0}
                      >
                        <MoveUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleMoveQuestion(question.id, "down")}
                        disabled={index === questions.length - 1}
                      >
                        <MoveDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveQuestion(question.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`question-${question.id}`}>Texto da pergunta</Label>
                    <Textarea
                      id={`question-${question.id}`}
                      value={question.text}
                      onChange={(e) => handleQuestionChange(question.id, "text", e.target.value)}
                      placeholder="Digite a pergunta aqui"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Opções de resposta</Label>
                    <div className="space-y-2">
                      {question.options.map((option, optIndex) => (
                        <div key={optIndex} className="flex gap-2 items-center">
                          <div className="flex-1">
                            <Input
                              value={option}
                              onChange={(e) => handleOptionChange(question.id, optIndex, e.target.value)}
                              placeholder={`Opção ${optIndex + 1}`}
                              className={question.correctAnswer === optIndex ? "border-green-500" : ""}
                            />
                          </div>
                          <Button
                            variant={question.correctAnswer === optIndex ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleQuestionChange(question.id, "correctAnswer", optIndex)}
                          >
                            {question.correctAnswer === optIndex ? (
                              <CheckCircle className="h-4 w-4" />
                            ) : (
                              <XCircle className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`category-${question.id}`}>Categoria</Label>
                      <Select
                        value={question.category}
                        onValueChange={(value) => handleQuestionChange(question.id, "category", value)}
                      >
                        <SelectTrigger id={`category-${question.id}`}>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="geral">Geral</SelectItem>
                          <SelectItem value="antigo-testamento">Antigo Testamento</SelectItem>
                          <SelectItem value="novo-testamento">Novo Testamento</SelectItem>
                          <SelectItem value="evangelhos">Evangelhos</SelectItem>
                          <SelectItem value="epistolas">Epístolas</SelectItem>
                          <SelectItem value="profetas">Profetas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`difficulty-${question.id}`}>Dificuldade</Label>
                      <Select
                        value={question.difficulty}
                        onValueChange={(value) => handleQuestionChange(question.id, "difficulty", value)}
                      >
                        <SelectTrigger id={`difficulty-${question.id}`}>
                          <SelectValue placeholder="Selecione a dificuldade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Fácil</SelectItem>
                          <SelectItem value="medium">Médio</SelectItem>
                          <SelectItem value="hard">Difícil</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <Separator />
              </Card>
            ))}

            {questions.length === 0 && (
              <Card className="p-8 text-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">Nenhuma pergunta adicionada</h3>
                    <p className="text-muted-foreground">Adicione perguntas para criar seu quiz personalizado</p>
                  </div>
                  <Button onClick={handleAddQuestion}>
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar Pergunta
                  </Button>
                </div>
              </Card>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setActiveTab("info")}>
                Voltar para Informações
              </Button>
              <Button onClick={handleSaveQuiz} disabled={questions.length === 0}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Quiz
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

