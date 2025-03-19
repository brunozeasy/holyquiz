"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Church, Users, BookOpen, BarChart3, Trophy, Settings, PlusCircle, Calendar, FileText, UserPlus, Bell, ChevronRight, CheckCircle, XCircle, Clock, Download, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

interface ChurchDashboardProps {
  churchData: {
    name: string
    logo?: string
    memberCount: number
    activeMembers: number
    quizCount: number
    averageScore: number
    plan: string
    nextPayment?: string
  }
}

export function ChurchDashboard({ churchData }: ChurchDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Dados de exemplo para membros da igreja
  const members = [
    { id: 1, name: "João Silva", role: "Administrador", lastActive: "Hoje", score: 8750, quizzes: 42, accuracy: 87 },
    { id: 2, name: "Maria Oliveira", role: "Líder de Jovens", lastActive: "Ontem", score: 7650, quizzes: 38, accuracy: 82 },
    { id: 3, name: "Pedro Santos", role: "Membro", lastActive: "3 dias atrás", score: 6950, quizzes: 35, accuracy: 79 },
    { id: 4, name: "Ana Costa", role: "Membro", lastActive: "Hoje", score: 6450, quizzes: 32, accuracy: 81 },
    { id: 5, name: "Lucas Ferreira", role: "Membro", lastActive: "1 semana atrás", score: 5850, quizzes: 28, accuracy: 75 },
  ]

  // Dados de exemplo para quizzes personalizados
  const customQuizzes = [
    { id: 1, title: "Estudo sobre Gênesis", questions: 25, plays: 145, createdAt: "15/03/2025", status: "Ativo" },
    { id: 2, title: "Parábolas de Jesus", questions: 20, plays: 98, createdAt: "10/03/2025", status: "Ativo" },
    { id: 3, title: "Profetas Menores", questions: 15, plays: 56, createdAt: "05/03/2025", status: "Ativo" },
    { id: 4, title: "Livro de Apocalipse", questions: 30, plays: 0, createdAt: "Hoje", status: "Rascunho" },
  ]

  // Dados de exemplo para torneios
  const tournaments = [
    { id: 1, title: "Campeonato de Jovens", participants: 24, startDate: "25/03/2025", status: "Agendado" },
    { id: 2, title: "Desafio Bíblico Mensal", participants: 18, startDate: "10/03/2025", status: "Em andamento" },
    { id: 3, title: "Copa Escola Dominical", participants: 32, startDate: "01/03/2025", status: "Concluído" },
  ]

  // Dados de exemplo para relatórios
  const reports = [
    { id: 1, title: "Engajamento Mensal", description: "Relatório de atividade dos membros", date: "01/03/2025" },
    { id: 2, title: "Desempenho por Categoria", description: "Análise de pontuações por tema bíblico", date: "01/03/2025" },
    { id: 3, title: "Progresso de Aprendizado", description: "Evolução do conhecimento bíblico", date: "01/03/2025" },
  ]

  return (
    <div className="flex flex-col space-y-6">
      {/* Header com informações da igreja */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            {churchData.logo ? (
              <AvatarImage src={churchData.logo} alt={churchData.name} />
            ) : (
              <AvatarFallback>
                <Church className="h-8 w-8" />
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{churchData.name}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="bg-primary/10">
                {churchData.plan}
              </Badge>
              {churchData.nextPayment && (
                <span>Próximo pagamento: {churchData.nextPayment}</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/igreja/configuracoes">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Link>
          </Button>
          <Button size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Notificações
          </Button>
        </div>
      </div>

      {/* Tabs de navegação */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 md:w-fit">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="members">Membros</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="tournaments">Torneios</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>

        {/* Tab: Visão Geral */}
        <TabsContent value="overview" className="space-y-6">
          {/* Cards de estatísticas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Total de Membros</p>
                <h3 className="text-2xl font-bold">{churchData.memberCount}</h3>
                <p className="text-xs text-muted-foreground">{churchData.activeMembers} ativos nos últimos 30 dias</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Quizzes Criados</p>
                <h3 className="text-2xl font-bold">{churchData.quizCount}</h3>
                <p className="text-xs text-muted-foreground">{customQuizzes.filter(q => q.status === "Ativo").length} ativos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Trophy className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Torneios</p>
                <h3 className="text-2xl font-bold">{tournaments.length}</h3>
                <p className="text-xs text-muted-foreground">{tournaments.filter(t => t.status === "Em andamento").length} em andamento</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-500 dark:text-gray-400">Pontuação Média</p>
                <h3 className="text-2xl font-bold">{churchData.averageScore}</h3>
                <div className="w-full mt-2">
                  <Progress value={churchData.averageScore} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Membros em destaque */}
          <Card>
            <CardHeader>
              <CardTitle>Membros em Destaque</CardTitle>
              <CardDescription>Membros com melhor desempenho nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.slice(0, 3).map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{member.score} pts</div>
                      <div className="text-sm text-muted-foreground">Precisão: {member.accuracy}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => setActiveTab("members")}>
                Ver todos os membros
              </Button>
            </CardFooter>
          </Card>

          {/* Quizzes recentes e Próximos torneios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quizzes Recentes</CardTitle>
                <CardDescription>Quizzes personalizados criados pela sua igreja</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customQuizzes.slice(0, 3).map((quiz) => (
                    <div key={quiz.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">{quiz.title}</div>
                        <div className="text-sm text-muted-foreground">{quiz.questions} perguntas</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{quiz.plays} jogadas</div>
                        <Badge variant={quiz.status === "Ativo" ? "default" : "secondary"}>
                          {quiz.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("quizzes")}>
                  Ver todos os quizzes
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Próximos Torneios</CardTitle>
                <CardDescription>Torneios organizados pela sua igreja</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tournaments.slice(0, 3).map((tournament) => (
                    <div key={tournament.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">{tournament.title}</div>
                        <div className="text-sm text-muted-foreground">{tournament.startDate}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{tournament.participants} participantes</div>
                        <Badge 
                          variant={
                            tournament.status === "Agendado" 
                              ? "outline" 
                              : tournament.status === "Em andamento" 
                                ? "default" 
                                : "secondary"
                          }
                        >
                          {tournament.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setActiveTab("tournaments")}>
                  Ver todos os torneios
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Tab: Membros */}
        <TabsContent value="members" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Gerenciamento de Membros</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar membros..."
                  className="pl-8 w-full md:w-[250px]"
                />
              </div>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar Membro
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 p-4 font-medium bg-muted">
                  <div className="col-span-5 md:col-span-3">Membro</div>
                  <div className="col-span-3 md:col-span-2">Função</div>
                  <div className="col-span-4 md:col-span-2">Último Acesso</div>
                  <div className="col-span-2 hidden md:block text-right">Pontuação</div>
                  <div className="col-span-2 hidden md:block text-right">Quizzes</div>
                  <div className="col-span-1 hidden md:block text-right">Precisão</div>
                </div>

                {members.map((member) => (
                  <div
                    key={member.id}
                    className="grid grid-cols-12 gap-2 p-4 border-b last:border-b-0 items-center hover:bg-muted/50"
                  >
                    <div className="col-span-5 md:col-span-3 flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium truncate">{member.name}</span>
                    </div>
                    <div className="col-span-3 md:col-span-2">
                      <Badge variant="outline">{member.role}</Badge>
                    </div>
                    <div className="col-span-4 md:col-span-2 text-sm text-muted-foreground">
                      {member.lastActive}
                    </div>
                    <div className="col-span-2 hidden md:block text-right font-medium">
                      {member.score}
                    </div>
                    <div className="col-span-2 hidden md:block text-right">
                      {member.quizzes}
                    </div>
                    <div className="col-span-1 hidden md:block text-right">
                      {member.accuracy}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Quizzes */}
        <TabsContent value="quizzes" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Quizzes Personalizados</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar quizzes..."
                  className="pl-8 w-full md:w-[250px]"
                />
              </div>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Criar Quiz
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 p-4 font-medium bg-muted">
                  <div className="col-span-5 md:col-span-4">Título</div>
                  <div className="col-span-2 text-center">Perguntas</div>
                  <div className="col-span-3 md:col-span-2 text-center">Jogadas</div>
                  <div className="col-span-2 hidden md:block">Criado em</div>
                  <div className="col-span-2 text-right">Status</div>
                </div>

                {customQuizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className="grid grid-cols-12 gap-2 p-4 border-b last:border-b-0 items-center hover:bg-muted/50"
                  >
                    <div className="col-span-5 md:col-span-4 font-medium truncate">
                      {quiz.title}
                    </div>
                    <div className="col-span-2 text-center">
                      {quiz.questions}
                    </div>
                    <div className="col-span-3 md:col-span-2 text-center">
                      {quiz.plays}
                    </div>
                    <div className="col-span-2 hidden md:block text-sm text-muted-foreground">
                      {quiz.createdAt}
                    </div>
                    <div className="col-span-2 text-right">
                      <Badge variant={quiz.status === "Ativo" ? "default" : "secondary"}>
                        {quiz.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Torneios */}
        <TabsContent value="tournaments" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Torneios</h2>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Criar Torneio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <Card key={tournament.id}>
                <CardHeader>
                  <CardTitle>{tournament.title}</CardTitle>
                  <CardDescription>
                    {tournament.participants} participantes • {tournament.startDate}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <Badge 
                        variant={
                          tournament.status === "Agendado" 
                            ? "outline" 
                            : tournament.status === "Em andamento" 
                              ? "default" 
                              : "secondary"
                        }
                      >
                        {tournament.status}
                      </Badge>
                    </div>
                    {tournament.status === "Em andamento" && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Progresso:</span>
                        <div className="flex items-center gap-2">
                          <Progress value={45} className="w-24 h-2" />
                          <span className="text-sm">45%</span>
                        </div>
                      </div>
                    )}
                    {tournament.status === "Concluído" && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Vencedor:</span>
                        <span className="font-medium">João Silva</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    {tournament.status === "Concluído" ? "Ver Resultados" : "Gerenciar"}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tab: Relatórios */}
        <TabsContent value="reports" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Relatórios</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Programar Relatório
              </Button>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Gerar Relatório
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Estatísticas de Engajamento */}
            <Card>
              <CardHeader>
                <CardTitle>Engajamento</CardTitle>
                <CardDescription>Atividade dos membros nos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Membros ativos</span>
                    <span className="font-medium">{churchData.activeMembers} de {churchData.memberCount}</span>
                  </div>
                  <Progress value={(churchData.activeMembers / churchData.memberCount) * 100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Quizzes completados</span>
                    <span className="font-medium">287</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tempo médio de estudo</span>
                    <span className="font-medium">45 min/semana</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Relatório Completo
                </Button>
              </CardFooter>
            </Card>

            {/* Desempenho por Categoria */}
            <Card>
              <CardHeader>
                <CardTitle>Desempenho por Categoria</CardTitle>
                <CardDescription>Pontuação média por tema bíblico</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Novo Testamento</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Antigo Testamento</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Profetas</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Evangelhos</span>
                    <span className="font-medium">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar Relatório Completo
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Relatórios disponíveis */}
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Disponíveis</CardTitle>
              <CardDescription>Relatórios gerados anteriormente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div>
                      <div className="font-medium">{report.title}</div>
                      <div className="text-sm text-muted-foreground">{report.description}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{report.date}</span>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
