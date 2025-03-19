"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChurchDashboard } from "@/components/church-dashboard"
import { CreateQuizDialog } from "@/components/create-quiz-dialog"
import { AddMemberDialog } from "@/components/add-member-dialog"
import { ImportMembersDialog } from "@/components/import-members-dialog"
import {
  Church,
  Menu,
  Users,
  BookOpen,
  Trophy,
  FileText,
  Settings,
  LogOut,
  Bell,
  HelpCircle,
  PlusCircle,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent } from "@/components/ui/tabs"

export default function ChurchPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  // Dados de exemplo para a igreja
  const churchData = {
    name: "Igreja Batista Central",
    memberCount: 85,
    activeMembers: 62,
    quizCount: 12,
    averageScore: 78,
    plan: "Plano Igreja Premium",
    nextPayment: "15/04/2025",
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      

    

      {/* Mobile Tabs */}
      <div className="md:hidden fixed bottom-0 inset-x-0 h-16 border-t bg-white dark:bg-gray-900 z-10">
        <div className="h-full grid grid-cols-5">
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            onClick={() => setActiveTab("dashboard")}
            data-active={activeTab === "dashboard"}
          >
            <Church className="h-5 w-5" />
            <span className="text-xs mt-1">Dashboard</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            onClick={() => setActiveTab("members")}
            data-active={activeTab === "members"}
          >
            <Users className="h-5 w-5" />
            <span className="text-xs mt-1">Membros</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            onClick={() => setActiveTab("quizzes")}
            data-active={activeTab === "quizzes"}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs mt-1">Quizzes</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            onClick={() => setActiveTab("tournaments")}
            data-active={activeTab === "tournaments"}
          >
            <Trophy className="h-5 w-5" />
            <span className="text-xs mt-1">Torneios</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            onClick={() => setActiveTab("reports")}
            data-active={activeTab === "reports"}
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs mt-1">Relatórios</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:pt-0 pt-16 pb-16 md:pb-0">
        <div className="container p-4 md:p-6 max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value="dashboard" className="mt-0">
              <ChurchDashboard churchData={churchData} />
            </TabsContent>

            <TabsContent value="members" className="mt-0">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold">Gerenciamento de Membros</h2>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <AddMemberDialog />
                    <ImportMembersDialog />
                  </div>
                </div>

                {/* Aqui você pode incluir a lista de membros ou reutilizar a aba de membros do ChurchDashboard */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                  <p className="text-center text-muted-foreground py-8">
                    Selecione "Adicionar Membro" para cadastrar novos participantes ou "Importar Membros" para adicionar
                    vários de uma vez.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quizzes" className="mt-0">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold">Quizzes Personalizados</h2>
                  <div className="flex gap-2">
                    <CreateQuizDialog />
                    <Button variant="outline" asChild>
                      <Link href="/igreja/criar-quiz">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Editor Avançado
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Aqui você pode incluir a lista de quizzes ou reutilizar a aba de quizzes do ChurchDashboard */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                  <p className="text-center text-muted-foreground py-8">
                    Crie um novo quiz usando o assistente rápido ou o editor avançado para mais opções.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tournaments" className="mt-0">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold">Torneios</h2>
                  <Button>
                    <Trophy className="mr-2 h-4 w-4" />
                    Criar Torneio
                  </Button>
                </div>

                {/* Aqui você pode incluir a lista de torneios ou reutilizar a aba de torneios do ChurchDashboard */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                  <p className="text-center text-muted-foreground py-8">
                    Organize torneios para engajar os membros da sua igreja em competições bíblicas.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-0">
              <div className="flex flex-col space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-2xl font-bold">Relatórios</h2>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Gerar Relatório
                  </Button>
                </div>

                {/* Aqui você pode incluir os relatórios ou reutilizar a aba de relatórios do ChurchDashboard */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                  <p className="text-center text-muted-foreground py-8">
                    Acompanhe o progresso e engajamento dos membros da sua igreja com relatórios detalhados.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

