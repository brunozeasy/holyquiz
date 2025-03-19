"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function CreateQuizDialog() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("info")
  const [quizInfo, setQuizInfo] = useState({
    title: "",
    description: "",
    timePerQuestion: "30",
    isPublic: true,
    category: "geral",
    difficulty: "medium",
  })
  const { toast } = useToast()

  const handleSaveQuiz = () => {
    // Aqui você implementaria a lógica para salvar o quiz
    toast({
      title: "Quiz criado com sucesso!",
      description: "Seu quiz foi salvo. Agora você pode adicionar perguntas a ele.",
    })
    setOpen(false)
    // Redefinir o estado após salvar
    setQuizInfo({
      title: "",
      description: "",
      timePerQuestion: "30",
      isPublic: true,
      category: "geral",
      difficulty: "medium",
    })
    setActiveTab("info")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Criar Quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Criar Novo Quiz</DialogTitle>
          <DialogDescription>
            Preencha as informações básicas para criar um novo quiz. Você poderá adicionar perguntas depois.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="info">Informações</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="timePerQuestion">Tempo por pergunta (segundos)</Label>
              <Select
                value={quizInfo.timePerQuestion}
                onValueChange={(value) => setQuizInfo({ ...quizInfo, timePerQuestion: value })}
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
                <p className="text-sm text-muted-foreground">Permitir que outros membros vejam e joguem este quiz</p>
              </div>
              <Switch
                id="public"
                checked={quizInfo.isPublic}
                onCheckedChange={(checked) => setQuizInfo({ ...quizInfo, isPublic: checked })}
              />
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSaveQuiz} disabled={!quizInfo.title}>
            <Save className="mr-2 h-4 w-4" />
            Criar Quiz
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

