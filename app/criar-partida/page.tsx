"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Copy, Users, User, UsersRound, Clock, BookOpen } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CreateGamePage() {
  const [gameMode, setGameMode] = useState("duo")
  const [gameCode, setGameCode] = useState("QUIZ7842")
  const [waitingPlayers, setWaitingPlayers] = useState([
    { id: 1, name: "Você (Anfitrião)", ready: true },
    { id: 2, name: "Maria Oliveira", ready: true },
  ])
  const { toast } = useToast()

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://quizbiblico.com/jogar?code=${gameCode}`)
    toast({
      title: "Link copiado!",
      description: "Compartilhe com seus amigos para jogar juntos.",
    })
  }

  const handleStartGame = () => {
    // Lógica para iniciar o jogo
    toast({
      title: "Iniciando partida!",
      description: "Preparando o jogo para todos os participantes.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">Criar Nova Partida</CardTitle>
            <CardDescription className="text-center">Convide amigos ou forme equipes para jogar juntos</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="modo" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="modo">Modo de Jogo</TabsTrigger>
                <TabsTrigger value="sala">Sala de Espera</TabsTrigger>
              </TabsList>

              <TabsContent value="modo" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Escolha o modo de jogo</h3>
                    <RadioGroup
                      defaultValue="duo"
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      onValueChange={setGameMode}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="duo" id="duo" className="peer sr-only" />
                        <Label
                          htmlFor="duo"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <User className="mb-3 h-6 w-6" />
                          <div className="space-y-1 text-center">
                            <p className="text-sm font-medium leading-none">Modo Duo</p>
                            <p className="text-sm text-muted-foreground">
                              Jogue contra um amigo em um duelo de conhecimento bíblico
                            </p>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="equipe" id="equipe" className="peer sr-only" />
                        <Label
                          htmlFor="equipe"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <UsersRound className="mb-3 h-6 w-6" />
                          <div className="space-y-1 text-center">
                            <p className="text-sm font-medium leading-none">Modo Equipe</p>
                            <p className="text-sm text-muted-foreground">
                              Forme equipes e compita em grupo com até 10 jogadores
                            </p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium mb-2">Configurações da partida</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Categoria</Label>
                        <div className="flex items-center space-x-2 rounded-md border px-3 py-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <select id="category" className="flex-1 bg-transparent outline-none" defaultValue="all">
                            <option value="all">Toda a Bíblia</option>
                            <option value="at">Antigo Testamento</option>
                            <option value="nt">Novo Testamento</option>
                            <option value="evangelhos">Evangelhos</option>
                            <option value="epistolas">Epístolas</option>
                            <option value="profetas">Profetas</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Tempo por pergunta</Label>
                        <div className="flex items-center space-x-2 rounded-md border px-3 py-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <select id="time" className="flex-1 bg-transparent outline-none" defaultValue="30">
                            <option value="15">15 segundos</option>
                            <option value="30">30 segundos</option>
                            <option value="45">45 segundos</option>
                            <option value="60">60 segundos</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="questions">Número de perguntas</Label>
                        <div className="flex items-center space-x-2 rounded-md border px-3 py-2">
                          <select id="questions" className="flex-1 bg-transparent outline-none" defaultValue="10">
                            <option value="5">5 perguntas</option>
                            <option value="10">10 perguntas</option>
                            <option value="15">15 perguntas</option>
                            <option value="20">20 perguntas</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="difficulty">Dificuldade</Label>
                        <div className="flex items-center space-x-2 rounded-md border px-3 py-2">
                          <select id="difficulty" className="flex-1 bg-transparent outline-none" defaultValue="medium">
                            <option value="easy">Fácil</option>
                            <option value="medium">Médio</option>
                            <option value="hard">Difícil</option>
                            <option value="mixed">Misto</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sala" className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-medium">Código da sala</h3>
                      <p className="text-sm text-muted-foreground">
                        Compartilhe este código com seus amigos para que eles possam entrar na partida
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input value={gameCode} readOnly className="w-32 text-center font-bold" />
                      <Button variant="outline" size="icon" onClick={handleCopyLink}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Jogadores na sala ({waitingPlayers.length})</h3>
                    <div className="space-y-2">
                      {waitingPlayers.map((player) => (
                        <div key={player.id} className="flex items-center justify-between p-3 rounded-md bg-muted">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                              <User className="h-4 w-4" />
                            </div>
                            <span>{player.name}</span>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              player.ready
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }`}
                          >
                            {player.ready ? "Pronto" : "Aguardando"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href="/">Cancelar</a>
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleStartGame} disabled={waitingPlayers.length < 2}>
              <Users className="mr-2 h-4 w-4" />
              Iniciar Partida
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

