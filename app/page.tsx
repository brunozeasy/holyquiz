import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  ChevronRight,
  Users,
  Trophy,
  CheckCircle,
  Church,
  Award,
  Zap,
  Layers,
  Globe,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full  py-4 px-4 md:px-6 backdrop-blur-3xl bg-sky-500/90">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white">HolyQuiz</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/login?tab=register">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-400 to-sky-500 flex justify-center">
          <div className="w-full max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 text-white text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Teste seu conhecimento bíblico de forma divertida
                </h1>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desafie seus amigos, participe de competições entre igrejas e
                  aprofunde seu conhecimento das escrituras com nosso Quiz
                  Bíblico interativo.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button size="lg" asChild>
                    <Link href="/login">
                      Começar agora
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#como-funciona">Saiba mais</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
                  <div className="relative bg-white dark:bg-gray-900 border rounded-xl shadow-lg p-6 h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <BookOpen className="mx-auto h-16 w-16 text-sky-500" />
                      <h3 className="text-2xl font-bold text-sky-500">
                        Quiz Bíblico
                      </h3>
                      <p className="text-sky-500">
                        Mais de 5.000 perguntas sobre o Antigo e Novo Testamento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visão Geral do Modelo de Negócio */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950 border-t border-b border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Quiz Bíblico Multiplayer
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Uma plataforma de jogos interativos voltada para o público
                cristão, oferecendo diferentes modos de jogo, gamificação e um
                ambiente seguro para aprendizado e diversão.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Plataforma Completa</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Quiz bíblico multiplayer para igrejas, grupos de estudo e
                  jogadores individuais com sistema de ranking e premiações.
                </p>
              </div>

              <div className="flex flex-col p-6 bg-green-50 dark:bg-green-950/30 rounded-xl">
                <div className="rounded-full bg-green-100 dark:bg-green-900 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Múltiplos Modos</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Jogue solo, em duelos 1x1, em times ou participe de torneios
                  organizados por igrejas e grupos.
                </p>
              </div>

              <div className="flex flex-col p-6 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900 w-12 h-12 flex items-center justify-center mb-4">
                  <Church className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Para Igrejas</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Igrejas podem criar quizzes personalizados, usar para ensino
                  bíblico e obter relatórios de desempenho.
                </p>
              </div>

              <div className="flex flex-col p-6 bg-amber-50 dark:bg-amber-950/30 rounded-xl">
                <div className="rounded-full bg-amber-100 dark:bg-amber-900 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multiplataforma</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Acesse pelo navegador web e em breve nos aplicativos para
                  Android e iOS para jogar em qualquer lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="como-funciona"
          className="w-full py-12 md:py-24 lg:py-32 bg-sky-200"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-primary font-bold tracking-tighter md:text-4xl/tight">
                  Aprenda e divirta-se ao mesmo tempo
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nossa plataforma oferece diferentes modos de jogo para todos
                  os níveis de conhecimento bíblico
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              {[
                {
                  icon: <BookOpen className="h-10 w-10 text-primary" />,
                  title: "Modo Solo",
                  description:
                    "Teste seu conhecimento individual com perguntas de diferentes níveis de dificuldade.",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Modo Multiplayer",
                  description:
                    "Desafie seus amigos em duelos de conhecimento bíblico em tempo real.",
                },
                {
                  icon: <Trophy className="h-10 w-10 text-primary" />,
                  title: "Torneios",
                  description:
                    "Participe de competições entre igrejas e grupos de estudo bíblico.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-prtext-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-primary font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sistema de Recompensas */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
             
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Gamificação e Engajamento
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Mantenha-se motivado com nosso sistema de recompensas e
                conquistas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ranking Global</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Compete com jogadores de todo o mundo e veja sua posição no
                  ranking global e por igreja.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Medalhas e Conquistas
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Desbloqueie medalhas e conquistas especiais à medida que
                  progride e domina diferentes categorias bíblicas.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Moeda Virtual</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ganhe moedas virtuais ao jogar e use-as para desbloquear modos
                  especiais, avatares e outros recursos exclusivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planos de Monetização */}
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
             
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Escolha o plano ideal para você
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Oferecemos diferentes opções para jogadores individuais e
                igrejas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plano Free */}
              <div className="bg-white dark:bg-gray-950 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
                <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold">Plano Freemium</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">Grátis</span>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Acesso a categorias básicas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Modo solo e duelos limitados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Ranking global</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Anúncios durante o jogo</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/login">Começar Grátis</Link>
                  </Button>
                </div>
              </div>

              {/* Plano Premium */}
              <div className="bg-white dark:bg-gray-950 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col relative">
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                  Popular
                </div>
                <div className="p-6 bg-primary/10 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold">Plano Premium</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">R$9,90</span>
                    <span className="ml-1 text-gray-500">/mês</span>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Acesso a todas as categorias</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Modos de jogo ilimitados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Ranking VIP e estatísticas detalhadas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Sem anúncios</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Personalização de avatar</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <Button className="w-full" asChild>
                    <Link href="/login">Assinar Agora</Link>
                  </Button>
                </div>
              </div>

              {/* Plano Igrejas */}
              <div className="bg-white dark:bg-gray-950 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
                <div className="p-6 bg-purple-50 dark:bg-purple-950/30 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold">Plano para Igrejas</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">R$49,90</span>
                    <span className="ml-1 text-gray-500">/mês</span>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Quizzes personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Relatórios de desempenho dos membros</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Modo torneio para engajamento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Até 100 membros incluídos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Suporte prioritário</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contato">Fale Conosco</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eventos e Torneios */}
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-4">
               
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Participe de competições emocionantes
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Nossos torneios oferecem uma oportunidade única para testar
                  seu conhecimento bíblico, competir com outros crentes e ganhar
                  prêmios exclusivos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Campeonatos bíblicos com prêmios reais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Torneios entre igrejas e denominações</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Eventos temáticos sazonais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Competições para todas as idades</span>
                  </li>
                </ul>
                <Button className="mt-4" asChild>
                  <Link href="/eventos">
                    Ver Próximos Eventos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-bold text-lg">Torneio Nacional</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Inscrições até 30/04
                      </p>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Em breve
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-bold text-lg">Copa das Igrejas</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        16 igrejas participantes
                      </p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      Ativo
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-bold text-lg">
                        Desafio Novo Testamento
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Prêmio: R$ 1.000
                      </p>
                    </div>
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      Últimas vagas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  O que nossos usuários dizem
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Veja como o Quiz Bíblico tem ajudado pessoas a aprofundar seu
                  conhecimento das escrituras
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              {[
                {
                  quote:
                    "O Quiz Bíblico revolucionou nossos estudos bíblicos. Agora nossos jovens estão muito mais engajados e aprendendo de forma divertida.",
                  author: "Pastor Carlos Silva",
                  church: "Igreja Batista Central",
                },
                {
                  quote:
                    "Uso o Quiz Bíblico com meus alunos da escola dominical. É incrível como eles absorvem o conhecimento quando apresentado de forma interativa.",
                  author: "Maria Oliveira",
                  church: "Igreja Presbiteriana",
                },
                {
                  quote:
                    "Os torneios entre igrejas criaram uma competição saudável que incentiva o estudo bíblico. Nossos membros estão cada vez mais interessados em aprofundar seu conhecimento.",
                  author: "João Pereira",
                  church: "Assembleia de Deus",
                },
                {
                  quote:
                    "Como líder de jovens, encontrei no Quiz Bíblico uma ferramenta perfeita para engajar a nova geração com as escrituras de forma relevante e tecnológica.",
                  author: "Ana Costa",
                  church: "Igreja Metodista",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950 dark:border-gray-800"
                >
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.church}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32  bg-sky-800 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Pronto para começar sua jornada?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de cristãos que estão aprofundando seu
                  conhecimento bíblico de forma divertida e interativa.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/login">
                    Criar conta gratuita
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold text-primary">
                HolyQuiz
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                Contato
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 HolyQuiz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
