"use client"

import type React from "react"

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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UsersRound, Upload, FileSpreadsheet, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ImportMembersDialog() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("upload")
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleImport = () => {
    if (!file) return

    setIsUploading(true)

    // Simulando upload
    setTimeout(() => {
      setIsUploading(false)
      toast({
        title: "Membros importados com sucesso!",
        description: `${Math.floor(Math.random() * 20) + 5} membros foram adicionados à sua igreja.`,
      })
      setOpen(false)
      setFile(null)
    }, 1500)
  }

  const handleDownloadTemplate = () => {
    toast({
      title: "Template baixado",
      description: "O modelo de planilha foi baixado para o seu computador.",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <UsersRound className="mr-2 h-4 w-4" />
          Importar Membros
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Importar Membros</DialogTitle>
          <DialogDescription>Importe vários membros de uma só vez usando uma planilha CSV ou Excel.</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="instructions">Instruções</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <FileSpreadsheet className="h-10 w-10 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Arraste e solte seu arquivo CSV ou Excel aqui, ou</p>
                  <Label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-primary hover:text-primary/80"
                  >
                    <span>Selecione um arquivo</span>
                    <Input
                      id="file-upload"
                      type="file"
                      accept=".csv,.xlsx,.xls"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </Label>
                </div>
              </div>
              {file && (
                <div className="mt-4 text-sm">
                  <p className="font-medium">Arquivo selecionado:</p>
                  <p className="text-muted-foreground">{file.name}</p>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" size="sm" onClick={handleDownloadTemplate}>
                <Download className="mr-2 h-4 w-4" />
                Baixar Modelo
              </Button>
              <Button onClick={() => setActiveTab("instructions")} variant="ghost" size="sm">
                Ver Instruções
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="instructions" className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Formato do Arquivo</h3>
                <p className="text-sm text-muted-foreground">
                  O arquivo deve estar no formato CSV ou Excel (XLSX) com as seguintes colunas:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Nome (obrigatório)</li>
                  <li>Email (obrigatório)</li>
                  <li>Função (opcional: administrador, lider, professor, membro)</li>
                  <li>Departamento (opcional)</li>
                  <li>Telefone (opcional)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Dicas</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Certifique-se de que os emails são únicos</li>
                  <li>Limite de 100 membros por importação</li>
                  <li>Convites serão enviados automaticamente para os emails</li>
                </ul>
              </div>

              <Button onClick={() => setActiveTab("upload")} variant="outline" size="sm" className="w-full">
                Voltar para Upload
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleImport} disabled={!file || isUploading}>
            {isUploading ? (
              <>Importando...</>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Importar Membros
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

