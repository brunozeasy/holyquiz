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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function AddMemberDialog() {
  const [open, setOpen] = useState(false)
  const [memberInfo, setMemberInfo] = useState({
    name: "",
    email: "",
    role: "membro",
    department: "",
    sendInvite: true,
  })
  const { toast } = useToast()

  const handleSaveMember = () => {
    // Aqui você implementaria a lógica para adicionar o membro
    toast({
      title: "Membro adicionado com sucesso!",
      description: memberInfo.sendInvite
        ? `Um convite foi enviado para ${memberInfo.email}.`
        : "O membro foi adicionado à sua igreja.",
    })
    setOpen(false)
    // Redefinir o estado após salvar
    setMemberInfo({
      name: "",
      email: "",
      role: "membro",
      department: "",
      sendInvite: true,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Adicionar Membro
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Membro</DialogTitle>
          <DialogDescription>
            Adicione um novo membro à sua igreja. Um convite será enviado para o email informado.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              value={memberInfo.name}
              onChange={(e) => setMemberInfo({ ...memberInfo, name: e.target.value })}
              placeholder="Nome do membro"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={memberInfo.email}
              onChange={(e) => setMemberInfo({ ...memberInfo, email: e.target.value })}
              placeholder="email@exemplo.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Função</Label>
              <Select value={memberInfo.role} onValueChange={(value) => setMemberInfo({ ...memberInfo, role: value })}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Selecione a função" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="administrador">Administrador</SelectItem>
                  <SelectItem value="lider">Líder</SelectItem>
                  <SelectItem value="professor">Professor</SelectItem>
                  <SelectItem value="membro">Membro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Departamento (opcional)</Label>
              <Select
                value={memberInfo.department}
                onValueChange={(value) => setMemberInfo({ ...memberInfo, department: value })}
              >
                <SelectTrigger id="department">
                  <SelectValue placeholder="Selecione o departamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jovens">Jovens</SelectItem>
                  <SelectItem value="adultos">Adultos</SelectItem>
                  <SelectItem value="criancas">Crianças</SelectItem>
                  <SelectItem value="louvor">Louvor</SelectItem>
                  <SelectItem value="missoes">Missões</SelectItem>
                  <SelectItem value="escola-dominical">Escola Dominical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              id="sendInvite"
              checked={memberInfo.sendInvite}
              onChange={(e) => setMemberInfo({ ...memberInfo, sendInvite: e.target.checked })}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <Label htmlFor="sendInvite" className="text-sm font-normal">
              Enviar convite por email
            </Label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSaveMember} disabled={!memberInfo.name || !memberInfo.email}>
            <Save className="mr-2 h-4 w-4" />
            Adicionar Membro
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

