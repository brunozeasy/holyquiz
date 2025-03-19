"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
  Star,
  Sparkles,
  Gift,
  Calendar,
  BookOpen,
  Trophy,
  BarChart3,
  Palette,
  Zap,
  Clock,
  Lock,
  CheckCircle,
  Download,
  Gamepad2,
  Medal,
  Flame,
} from "lucide-react";

interface PremiumDashboardProps {
  userData: {
    name: string;
    avatar?: string;
    level: number;
    xp: number;
    nextLevelXp: number;
    premiumSince: string;
    nextPayment?: string;
    streakDays: number;
  };
}

export function PremiumDashboard({ userData }: PremiumDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Calcular progresso para o próximo nível
  const levelProgress = Math.round((userData.xp / userData.nextLevelXp) * 100);

  // Dados de exemplo para os benefícios premium
  const premiumBenefits = [
    {
      id: 1,
      name: "Sem anúncios",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      description: "Experiência de jogo sem interrupções",
    },
    {
      id: 2,
      name: "Temas exclusivos",
      icon: <Palette className="h-5 w-5 text-purple-500" />,
      description: "Personalize a aparência do seu app",
    },
    {
      id: 3,
      name: "Estatísticas avançadas",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      description: "Análises detalhadas do seu desempenho",
    },
    {
      id: 4,
      name: "Desafios diários",
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      description: "Desafios exclusivos com recompensas especiais",
    },
    {
      id: 5,
      name: "Modo offline",
      icon: <Download className="h-5 w-5 text-teal-500" />,
      description: "Jogue sem conexão com a internet",
    },
    {
      id: 6,
      name: "Categorias premium",
      icon: <BookOpen className="h-5 w-5 text-red-500" />,
      description: "Acesso a categorias especiais de perguntas",
    },
  ];

  // Dados de exemplo para os desafios exclusivos
  const exclusiveChallenges = [
    {
      id: 1,
      name: "Maratona Bíblica",
      description: "100 perguntas em sequência",
      reward: "500 XP",
      deadline: "3 dias restantes",
      progress: 35,
    },
    {
      id: 2,
      name: "Especialista em Profetas",
      description: "Acerte 50 perguntas sobre profetas",
      reward: "Badge exclusivo",
      deadline: "5 dias restantes",
      progress: 68,
    },
    {
      id: 3,
      name: "Desafio Relâmpago",
      description: "Responda 20 perguntas em menos de 2 minutos",
      reward: "200 moedas",
      deadline: "24 horas restantes",
      progress: 0,
    },
  ];

  // Dados de exemplo para os temas exclusivos
  const premiumThemes = [
    {
      id: 1,
      name: "Pergaminho Antigo",
      color: "from-amber-700 to-yellow-600",
      active: true,
    },
    {
      id: 2,
      name: "Céu Estrelado",
      color: "from-indigo-900 to-purple-800",
      active: false,
    },
    {
      id: 3,
      name: "Jardim do Éden",
      color: "from-green-700 to-emerald-500",
      active: false,
    },
    {
      id: 4,
      name: "Mar Vermelho",
      color: "from-red-700 to-rose-500",
      active: false,
    },
  ];

  // Dados de exemplo para os eventos exclusivos
  const premiumEvents = [
    {
      id: 1,
      name: "Torneio Premium Mensal",
      date: "25/03/2025",
      participants: 64,
      prize: "1000 moedas + Badge exclusivo",
    },
    {
      id: 2,
      name: "Desafio dos Campeões",
      date: "10/04/2025",
      participants: 32,
      prize: "Tema exclusivo + 500 moedas",
    },
  ];

  return (
    <div className="flex flex-col space-y-6">
      {/* Header com informações do usuário premium */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-white">
        <div className="absolute top-0 right-0 p-2">
          <Badge className="bg-white text-amber-600 hover:bg-white/90">
            <Crown className="mr-1 h-3.5 w-3.5 text-yellow-600" />
            Premium
          </Badge>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-white">
            {userData.avatar ? (
              <AvatarImage src={userData.avatar} alt={userData.name} />
            ) : (
              <AvatarFallback className="bg-amber-700 text-white">
                {userData.name.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            <div className="flex items-center gap-2 text-sm">
              <span>Nível {userData.level}</span>
              <span>•</span>
              <span>
                {userData.xp}/{userData.nextLevelXp} XP
              </span>
            </div>
            <div className="w-full mt-1 bg-white/30 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full"
                style={{ width: `${levelProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4" />
              <span>Premium desde {userData.premiumSince}</span>
            </div>
            {userData.nextPayment && (
              <div className="flex items-center gap-1 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Próximo pagamento: {userData.nextPayment}</span>
              </div>
            )}
            <div className="flex items-center gap-1 mt-1">
              <Flame className="h-4 w-4 text-red-300" />
              <span className="font-medium">
                {userData.streakDays} dias de sequência
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-12 -right-12 opacity-10">
          <Crown className="h-40 w-40" />
        </div>
      </div>

      {/* Tabs de navegação */}
      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-4 md:w-fit">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="challenges">Desafios</TabsTrigger>
          <TabsTrigger value="themes">Temas</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
        </TabsList>

        {/* Tab: Visão Geral */}
        <TabsContent value="overview" className="space-y-6">
          {/* Benefícios Premium */}
          <div>
            <h2 className="text-xl font-bold mb-4">Seus Benefícios Premium</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {premiumBenefits.map((benefit) => (
                <Card key={benefit.id} className="overflow-hidden">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="font-medium">{benefit.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Estatísticas Premium */}
          <div>
            <h2 className="text-xl font-bold mb-4">Estatísticas Avançadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Desempenho por Categoria
                  </CardTitle>
                  <CardDescription>Suas melhores categorias</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Novo Testamento</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Evangelhos</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Antigo Testamento</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Profetas</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/estatisticas">Ver estatísticas completas</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Conquistas Desbloqueadas
                  </CardTitle>
                  <CardDescription>
                    Suas conquistas mais recentes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Medal className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Mestre dos Evangelhos</div>
                        <div className="text-xs text-muted-foreground">
                          Acertou 100 perguntas sobre os evangelhos
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Flame className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Sequência de Fogo</div>
                        <div className="text-xs text-muted-foreground">
                          Manteve uma sequência de 30 dias
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">Velocista</div>
                        <div className="text-xs text-muted-foreground">
                          Respondeu 50 perguntas em menos de 10 segundos cada
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver todas as conquistas
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Próximos Eventos Premium */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Eventos Premium</h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/eventos">Ver todos</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {premiumEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{event.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10">
                        Exclusivo
                      </Badge>
                    </div>
                    <CardDescription>
                      {event.date} • {event.participants} participantes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5 text-primary" />
                      <span className="text-sm">Prêmio: {event.prize}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Participar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab: Desafios */}
        <TabsContent value="challenges" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Desafios Exclusivos</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10">
                <Star className="mr-1 h-3.5 w-3.5 text-yellow-500" />
                Exclusivo para Premium
              </Badge>
              <Button size="sm">
                <Gamepad2 className="mr-2 h-4 w-4" />
                Iniciar Desafio
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exclusiveChallenges.map((challenge) => (
              <Card key={challenge.id} className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-primary-foreground"></div>
                <CardHeader>
                  <CardTitle>{challenge.name}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Progresso
                    </span>
                    <span className="text-sm font-medium">
                      {challenge.progress}%
                    </span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1">
                      <Gift className="h-4 w-4 text-primary" />
                      <span>{challenge.reward}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <span>{challenge.deadline}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" disabled={challenge.progress > 0}>
                    {challenge.progress > 0 ? "Continuar" : "Iniciar"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Histórico de Desafios</CardTitle>
              <CardDescription>
                Desafios que você completou recentemente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Conhecedor dos Salmos</div>
                      <div className="text-sm text-muted-foreground">
                        Completado em 18/03/2025
                      </div>
                    </div>
                  </div>
                  <Badge>300 XP</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">
                        Maratona do Novo Testamento
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Completado em 10/03/2025
                      </div>
                    </div>
                  </div>
                  <Badge>500 XP</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Desafio dos Profetas</div>
                      <div className="text-sm text-muted-foreground">
                        Completado em 05/03/2025
                      </div>
                    </div>
                  </div>
                  <Badge>400 XP</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Temas */}
        <TabsContent value="themes" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Temas Exclusivos</h2>
            <Badge variant="outline" className="bg-primary/10">
              <Sparkles className="mr-1 h-3.5 w-3.5 text-yellow-500" />
              Exclusivo para Premium
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {premiumThemes.map((theme) => (
              <Card key={theme.id} className="overflow-hidden">
                <div
                  className={`h-32 bg-gradient-to-b ${theme.color} flex items-center justify-center`}
                >
                  <BookOpen className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{theme.name}</h3>
                    {theme.active ? (
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      >
                        Ativo
                      </Badge>
                    ) : (
                      <Button size="sm" variant="outline">
                        Aplicar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="overflow-hidden border-dashed">
              <div className="h-32 bg-muted flex items-center justify-center">
                <Lock className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Mais temas em breve</h3>
                  <Button size="sm" variant="ghost" disabled>
                    Bloqueado
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Personalize seu Avatar</CardTitle>
              <CardDescription>
                Avatares exclusivos para membros premium
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Avatar
                    key={index}
                    className="h-16 w-16 cursor-pointer hover:ring-2 hover:ring-primary"
                  >
                    <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                    <AvatarFallback>
                      {index === 0 ? (
                        <CheckCircle className="h-6 w-6 text-primary" />
                      ) : (
                        <span>{String.fromCharCode(65 + index)}</span>
                      )}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver mais avatares
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Tab: Eventos */}
        <TabsContent value="events" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold">Eventos Premium</h2>
            <Badge variant="outline" className="bg-primary/10">
              <Crown className="mr-1 h-3.5 w-3.5 text-yellow-500" />
              Acesso Prioritário
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Torneio Premium Mensal</CardTitle>
                  <Badge className="bg-yellow-500">Destaque</Badge>
                </div>
                <CardDescription>25/03/2025 • 64 participantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Participe do torneio exclusivo para membros premium e concorra
                  a prêmios especiais. Este mês o tema é "Livros Históricos do
                  Antigo Testamento".
                </p>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">
                    Prêmio: 1000 moedas + Badge exclusivo
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm">Inscrições até 24/03/2025</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Inscrever-se</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Desafio dos Campeões</CardTitle>
                  <Badge variant="outline">Em breve</Badge>
                </div>
                <CardDescription>10/04/2025 • 32 participantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Um desafio especial para os melhores jogadores premium. Teste
                  seus conhecimentos em uma competição de alto nível.
                </p>
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">
                    Prêmio: Tema exclusivo + 500 moedas
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Requer nível 20 ou superior</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Lembrar-me
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Eventos Anteriores</CardTitle>
              <CardDescription>
                Eventos premium que você participou
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">
                      Torneio Premium de Fevereiro
                    </div>
                    <div className="text-sm text-muted-foreground">
                      15/02/2025 • 48 participantes
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">3º Lugar</div>
                    <div className="text-sm text-muted-foreground">
                      300 moedas
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">
                      Desafio Especial de Ano Novo
                    </div>
                    <div className="text-sm text-muted-foreground">
                      01/01/2025 • 72 participantes
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">Participante</div>
                    <div className="text-sm text-muted-foreground">
                      100 moedas
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
