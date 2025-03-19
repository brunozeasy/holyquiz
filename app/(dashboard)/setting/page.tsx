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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  BookOpen,
  Menu,
  Home,
  Trophy,
  BarChart3,
  Calendar,
  Settings,
  LogOut,
  Bell,
  Crown,
  Play,
  CreditCard,
  Church,
  Lock,
  Globe,
  Smartphone,
  Moon,
  Upload,
  AlertTriangle,
  ChevronRight,
  Trash2,
  Eye,
  EyeOff,
  X,
  Download,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

export default function ConfiguracoesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("perfil");
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const { toast } = useToast();

  // Dados de exemplo para o usuário
  const userData = {
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 98765-4321",
    avatar: "/placeholder.svg?height=128&width=128",
    church: "Igreja Batista Central",
    role: "Membro",
    plan: "Premium",
    nextPayment: "10/04/2025",
    cardLastFour: "4242",
    darkMode: true,
    language: "pt-BR",
    notifications: {
      email: true,
      push: true,
      challenges: true,
      events: true,
      updates: false,
      marketing: false,
    },
  };

  const handleSaveProfile = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas informações pessoais foram atualizadas com sucesso.",
    });
  };

  const handleSavePassword = () => {
    toast({
      title: "Senha atualizada",
      description: "Sua senha foi alterada com sucesso.",
    });
  };

  const handleSaveChurch = () => {
    toast({
      title: "Informações da igreja atualizadas",
      description: "Os dados da sua igreja foram atualizados com sucesso.",
    });
  };

  const handleSavePayment = () => {
    toast({
      title: "Método de pagamento atualizado",
      description:
        "Suas informações de pagamento foram atualizadas com sucesso.",
    });
  };

  const handleSavePreferences = () => {
    toast({
      title: "Preferências salvas",
      description:
        "Suas preferências de aplicativo foram atualizadas com sucesso.",
    });
  };

  const handleCancelSubscription = () => {
    toast({
      title: "Assinatura cancelada",
      description:
        "Sua assinatura premium será cancelada ao final do período atual.",
      variant: "destructive",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Conta excluída",
      description:
        "Sua conta foi marcada para exclusão. Você receberá um email de confirmação.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-50 dark:bg-gray-950">
      {/* Main Content */}
      <main className="flex-1 md:pt-0 pt-16 pb-16 md:pb-0">
        <div className="container p-4 md:p-6 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">Configurações</h1>
              <p className="text-muted-foreground">
                Gerencie sua conta e preferências
              </p>
            </div>
            {userData.plan === "Premium" && (
              <Badge className="bg-amber-500 text-white">
                <Crown className="mr-1 h-3.5 w-3.5" />
                Conta Premium
              </Badge>
            )}
          </div>

          <Tabs
            defaultValue="perfil"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-6">
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="igreja">Igreja</TabsTrigger>
              <TabsTrigger value="pagamento">Pagamento</TabsTrigger>
              <TabsTrigger value="preferencias">Preferências</TabsTrigger>
              <TabsTrigger value="seguranca">Segurança</TabsTrigger>
              <TabsTrigger value="conta">Conta</TabsTrigger>
            </TabsList>

            {/* Tab: Perfil */}
            <TabsContent value="perfil" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>
                    Atualize seus dados pessoais e foto de perfil
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage
                          src={userData.avatar}
                          alt={userData.name}
                        />
                        <AvatarFallback>
                          {userData.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Alterar foto
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome completo</Label>
                          <Input id="name" defaultValue={userData.name} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue={userData.email}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input id="phone" defaultValue={userData.phone} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthdate">Data de nascimento</Label>
                          <Input id="birthdate" type="date" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Sobre mim</Label>
                        <Textarea
                          id="bio"
                          placeholder="Conte um pouco sobre você..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancelar</Button>
                  <Button onClick={handleSaveProfile}>Salvar alterações</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alterar Senha</CardTitle>
                  <CardDescription>
                    Atualize sua senha para manter sua conta segura
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha atual</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="••••••••"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova senha</Label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Confirmar nova senha
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto" onClick={handleSavePassword}>
                    Alterar senha
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Tab: Igreja */}
            <TabsContent value="igreja" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações da Igreja</CardTitle>
                  <CardDescription>
                    Atualize os dados da sua igreja ou congregação
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="church-name">Nome da igreja</Label>
                      <Input id="church-name" defaultValue={userData.church} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="church-role">Sua função na igreja</Label>
                      <Select defaultValue={userData.role}>
                        <SelectTrigger id="church-role">
                          <SelectValue placeholder="Selecione sua função" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pastor">Pastor</SelectItem>
                          <SelectItem value="Líder">Líder</SelectItem>
                          <SelectItem value="Professor">Professor</SelectItem>
                          <SelectItem value="Membro">Membro</SelectItem>
                          <SelectItem value="Visitante">Visitante</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="church-denomination">Denominação</Label>
                      <Select>
                        <SelectTrigger id="church-denomination">
                          <SelectValue placeholder="Selecione a denominação" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="batista">Batista</SelectItem>
                          <SelectItem value="catolica">Católica</SelectItem>
                          <SelectItem value="presbiteriana">
                            Presbiteriana
                          </SelectItem>
                          <SelectItem value="metodista">Metodista</SelectItem>
                          <SelectItem value="assembleia">
                            Assembleia de Deus
                          </SelectItem>
                          <SelectItem value="adventista">Adventista</SelectItem>
                          <SelectItem value="luterana">Luterana</SelectItem>
                          <SelectItem value="outra">Outra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="church-department">
                        Departamento (opcional)
                      </Label>
                      <Select>
                        <SelectTrigger id="church-department">
                          <SelectValue placeholder="Selecione o departamento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jovens">Jovens</SelectItem>
                          <SelectItem value="adultos">Adultos</SelectItem>
                          <SelectItem value="criancas">Crianças</SelectItem>
                          <SelectItem value="louvor">Louvor</SelectItem>
                          <SelectItem value="missoes">Missões</SelectItem>
                          <SelectItem value="escola-dominical">
                            Escola Dominical
                          </SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="church-address">
                      Endereço da igreja (opcional)
                    </Label>
                    <Textarea
                      id="church-address"
                      placeholder="Endereço completo da igreja"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="church-public" defaultChecked />
                    <Label htmlFor="church-public">
                      Tornar minha igreja visível para outros membros
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancelar</Button>
                  <Button onClick={handleSaveChurch}>Salvar alterações</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Plano para Igreja</CardTitle>
                  <CardDescription>
                    Gerencie o plano da sua igreja
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Church className="h-5 w-5 text-primary" />
                        <span className="font-medium">
                          Plano Atual: Individual
                        </span>
                      </div>
                      <Badge variant="outline">Pessoal</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Atualize para o Plano Igreja para gerenciar membros, criar
                    quizzes personalizados e organizar torneios para sua
                    congregação.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/planos">
                      <Church className="mr-2 h-4 w-4" />
                      Conhecer Plano Igreja
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Tab: Pagamento */}
            <TabsContent value="pagamento" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Pagamento</CardTitle>
                  <CardDescription>
                    Gerencie seus métodos de pagamento e assinatura
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Método de pagamento atual
                    </h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <span>
                            Cartão de crédito terminando em{" "}
                            {userData.cardLastFour}
                          </span>
                        </div>
                        <Badge variant="outline">Padrão</Badge>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <p>Expira em 12/2026</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Adicionar novo método de pagamento
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Número do cartão</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Nome no cartão</Label>
                        <Input
                          id="card-name"
                          placeholder="Nome como aparece no cartão"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-expiry">Data de expiração</Label>
                        <Input id="card-expiry" placeholder="MM/AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-cvc">CVC</Label>
                        <Input id="card-cvc" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancelar</Button>
                  <Button onClick={handleSavePayment}>
                    Salvar método de pagamento
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detalhes da Assinatura</CardTitle>
                  <CardDescription>
                    Informações sobre seu plano atual
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Crown className="h-5 w-5 text-yellow-500" />
                        <span className="font-medium">Plano Premium</span>
                      </div>
                      <Badge className="bg-green-500">Ativo</Badge>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>Próxima cobrança: {userData.nextPayment}</p>
                      <p>Valor: R$ 9,90/mês</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">
                      Histórico de pagamentos
                    </h3>
                    <div className="rounded-md border">
                      <div className="flex items-center justify-between p-3 border-b">
                        <div>
                          <p className="font-medium">10/03/2025</p>
                          <p className="text-sm text-muted-foreground">
                            Plano Premium - Mensal
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">R$ 9,90</p>
                          <p className="text-xs text-green-500">Pago</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border-b">
                        <div>
                          <p className="font-medium">10/02/2025</p>
                          <p className="text-sm text-muted-foreground">
                            Plano Premium - Mensal
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">R$ 9,90</p>
                          <p className="text-xs text-green-500">Pago</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3">
                        <div>
                          <p className="font-medium">10/01/2025</p>
                          <p className="text-sm text-muted-foreground">
                            Plano Premium - Mensal
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">R$ 9,90</p>
                          <p className="text-xs text-green-500">Pago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/planos">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      Alterar plano
                    </Link>
                  </Button>
                  <Button
                    className="w-full"
                    variant="destructive"
                    onClick={handleCancelSubscription}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Cancelar assinatura
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Tab: Preferências */}
            <TabsContent value="preferencias" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Aparência</CardTitle>
                  <CardDescription>
                    Personalize a aparência do aplicativo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Moon className="h-5 w-5" />
                      <div>
                        <Label htmlFor="dark-mode">Modo escuro</Label>
                        <p className="text-sm text-muted-foreground">
                          Ativar tema escuro para o aplicativo
                        </p>
                      </div>
                    </div>
                    <Switch id="dark-mode" defaultChecked={userData.darkMode} />
                  </div>

                  <div className="space-y-2">
                    <Label>Tema de cores</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-blue-500"></div>
                        <span className="text-xs">Azul</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-purple-500"></div>
                        <span className="text-xs">Roxo</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-green-500"></div>
                        <span className="text-xs">Verde</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-amber-500"></div>
                        <span className="text-xs">Âmbar</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-red-500"></div>
                        <span className="text-xs">Vermelho</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-10 w-10 rounded-full bg-gray-500"></div>
                        <span className="text-xs">Cinza</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="font-size">Tamanho da fonte</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="font-size">
                        <SelectValue placeholder="Selecione o tamanho da fonte" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Pequeno</SelectItem>
                        <SelectItem value="medium">Médio</SelectItem>
                        <SelectItem value="large">Grande</SelectItem>
                        <SelectItem value="x-large">Extra grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto" onClick={handleSavePreferences}>
                    Salvar preferências
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notificações</CardTitle>
                  <CardDescription>
                    Configure como deseja receber notificações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">
                        Notificações por email
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receber atualizações por email
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      defaultChecked={userData.notifications.email}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">
                        Notificações push
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações no dispositivo
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      defaultChecked={userData.notifications.push}
                    />
                  </div>

                  <Separator />

                  <h3 className="text-sm font-medium">Tipos de notificações</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="challenge-notifications">
                        Desafios e conquistas
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Novos desafios e conquistas desbloqueadas
                      </p>
                    </div>
                    <Switch
                      id="challenge-notifications"
                      defaultChecked={userData.notifications.challenges}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="event-notifications">
                        Eventos e torneios
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Lembretes de eventos e torneios
                      </p>
                    </div>
                    <Switch
                      id="event-notifications"
                      defaultChecked={userData.notifications.events}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="update-notifications">
                        Atualizações do aplicativo
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Novos recursos e melhorias
                      </p>
                    </div>
                    <Switch
                      id="update-notifications"
                      defaultChecked={userData.notifications.updates}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-notifications">
                        Marketing e promoções
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Ofertas especiais e novidades
                      </p>
                    </div>
                    <Switch
                      id="marketing-notifications"
                      defaultChecked={userData.notifications.marketing}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto" onClick={handleSavePreferences}>
                    Salvar preferências
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Idioma e Região</CardTitle>
                  <CardDescription>
                    Configure o idioma e as preferências regionais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Select defaultValue={userData.language}>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Selecione o idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-BR">
                          Português (Brasil)
                        </SelectItem>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bible-version">Versão da Bíblia</Label>
                    <Select defaultValue="nvi">
                      <SelectTrigger id="bible-version">
                        <SelectValue placeholder="Selecione a versão da Bíblia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nvi">
                          Nova Versão Internacional
                        </SelectItem>
                        <SelectItem value="ara">
                          Almeida Revista e Atualizada
                        </SelectItem>
                        <SelectItem value="acf">
                          Almeida Corrigida Fiel
                        </SelectItem>
                        <SelectItem value="ntlh">
                          Nova Tradução na Linguagem de Hoje
                        </SelectItem>
                        <SelectItem value="kjv">King James Version</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto" onClick={handleSavePreferences}>
                    Salvar preferências
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Tab: Segurança */}
            <TabsContent value="seguranca" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacidade</CardTitle>
                  <CardDescription>
                    Gerencie suas configurações de privacidade
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="profile-visibility">
                        Visibilidade do perfil
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Quem pode ver seu perfil e estatísticas
                      </p>
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger
                        id="profile-visibility"
                        className="w-[180px]"
                      >
                        <SelectValue placeholder="Selecione a visibilidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="friends">Apenas amigos</SelectItem>
                        <SelectItem value="church">
                          Apenas membros da igreja
                        </SelectItem>
                        <SelectItem value="private">Privado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="ranking-visibility">
                        Visibilidade no ranking
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar seu nome nos rankings públicos
                      </p>
                    </div>
                    <Switch id="ranking-visibility" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="activity-visibility">
                        Status de atividade
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Mostrar quando você está online
                      </p>
                    </div>
                    <Switch id="activity-visibility" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="data-collection">
                        Coleta de dados de uso
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Permitir coleta de dados para melhorar o aplicativo
                      </p>
                    </div>
                    <Switch id="data-collection" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto" onClick={handleSavePreferences}>
                    Salvar preferências
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Segurança da Conta</CardTitle>
                  <CardDescription>
                    Configure opções adicionais de segurança
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="two-factor">
                        Autenticação de dois fatores
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Adicione uma camada extra de segurança
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configurar
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Sessões ativas</h3>
                    <div className="rounded-md border">
                      <div className="flex items-center justify-between p-3 border-b">
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">iPhone 13 Pro</p>
                            <p className="text-xs text-muted-foreground">
                              São Paulo, Brasil • Agora
                            </p>
                          </div>
                        </div>
                        <Badge>Atual</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3">
                        <div className="flex items-center gap-2">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Chrome • Windows</p>
                            <p className="text-xs text-muted-foreground">
                              São Paulo, Brasil • 2 dias atrás
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Encerrar
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Encerrar todas as outras sessões
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab: Conta */}
            <TabsContent value="conta" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exportar Dados</CardTitle>
                  <CardDescription>
                    Baixe uma cópia dos seus dados
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Você pode solicitar uma cópia de todos os seus dados
                    pessoais que temos armazenados, incluindo seu perfil,
                    estatísticas e histórico de atividades.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Exportar perfil e configurações
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Exportar estatísticas e histórico
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Excluir Conta</CardTitle>
                  <CardDescription>
                    Exclua permanentemente sua conta e todos os dados associados
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Esta ação é irreversível. Todos os seus dados serão
                      permanentemente excluídos.
                    </AlertDescription>
                  </Alert>
                  <p className="text-sm text-muted-foreground">
                    Ao excluir sua conta, você perderá acesso a:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Seu perfil e informações pessoais</li>
                    <li>Histórico de jogos e estatísticas</li>
                    <li>Conquistas e recompensas</li>
                    <li>Assinatura premium (se aplicável)</li>
                  </ul>
                  <div className="flex items-center space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="confirm-delete"
                      className="rounded border-gray-300"
                    />
                    <Label
                      htmlFor="confirm-delete"
                      className="text-sm font-normal"
                    >
                      Eu entendo que esta ação é irreversível e desejo excluir
                      minha conta
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="destructive"
                    className="ml-auto"
                    onClick={handleDeleteAccount}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Excluir minha conta
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
