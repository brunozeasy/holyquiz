"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Brain, CheckCircle, Clock, Target, Trophy, XCircle } from "lucide-react"

export default function StatisticsPage() {
  // Dados de exemplo para as estatísticas do jogador
  const playerStats = {
    totalGames: 87,
    victories: 64,
    defeats: 23,
    correctAnswers: 782,
    wrongAnswers: 305,
    averageTime: 12.4, // segundos por pergunta
    badges: [
      { id: 1, name: "Mestre Bíblico", description: "Acertou 500 perguntas", icon: <BookOpen className="h-5 w-5" /> },
      {
        id: 2,
        name: "Velocista",
        description: "Respondeu 100 perguntas em menos de 5 segundos",
        icon: <Clock className="h-5 w-5" />,
      },
      {
        id: 3,
        name: "Campeão Semanal",
        description: "Ficou em 1º lugar no ranking semanal",
        icon: <Trophy className="h-5 w-5" />,
      },
      {
        id: 4,
        name: "Especialista em Novo Testamento",
        description: "Acertou 90% das perguntas sobre o Novo Testamento",
        icon: <Award className="h-5 w-5" />,
      },
    ],
    categories: [
      { name: "Antigo Testamento", correct: 320, total: 400, percentage: 80 },
      { name: "Novo Testamento", correct: 280, total: 310, percentage: 90 },
      { name: "Profetas", correct: 85, total: 120, percentage: 71 },
      { name: "Evangelhos", correct: 97, total: 110, percentage: 88 },
      { name: "Epístolas", correct: 110, total: 147, percentage: 75 },
    ],
  }

  // Calcular a taxa de acerto geral
  const overallAccuracy = Math.round(
    (playerStats.correctAnswers / (playerStats.correctAnswers + playerStats.wrongAnswers)) * 100,
  )

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Minhas Estatísticas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Resumo</CardTitle>
              <CardDescription>Seu desempenho geral</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <span className="text-2xl font-bold">{overallAccuracy}%</span>
                  <span className="text-sm text-muted-foreground">Taxa de Acerto</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <span className="text-2xl font-bold">{playerStats.totalGames}</span>
                  <span className="text-sm text-muted-foreground">Partidas Jogadas</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-2xl font-bold">{playerStats.victories}</span>
                  <span className="text-sm text-muted-foreground">Vitórias</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-2xl font-bold">{playerStats.defeats}</span>
                  <span className="text-sm text-muted-foreground">Derrotas</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Conquistas</CardTitle>
              <CardDescription>Badges desbloqueados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {playerStats.badges.map((badge) => (
                  <div key={badge.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      {badge.icon}
                    </div>
                    <div>
                      <div className="font-medium">{badge.name}</div>
                      <div className="text-xs text-muted-foreground">{badge.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Desempenho por Categoria</CardTitle>
            <CardDescription>Seu conhecimento em diferentes áreas da Bíblia</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="categories" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="categories">Categorias</TabsTrigger>
                <TabsTrigger value="details">Detalhes</TabsTrigger>
              </TabsList>

              <TabsContent value="categories" className="space-y-6">
                {playerStats.categories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm">
                        {category.correct} / {category.total} ({category.percentage}%)
                      </span>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="details">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="font-medium">Respostas Corretas</div>
                      <div className="text-3xl font-bold text-green-500">{playerStats.correctAnswers}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Respostas Incorretas</div>
                      <div className="text-3xl font-bold text-red-500">{playerStats.wrongAnswers}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Tempo Médio por Resposta</div>
                      <div className="text-3xl font-bold">{playerStats.averageTime}s</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Total de Perguntas</div>
                      <div className="text-3xl font-bold">{playerStats.correctAnswers + playerStats.wrongAnswers}</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

