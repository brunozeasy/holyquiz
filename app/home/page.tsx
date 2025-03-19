import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Play, Settings } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gradient-to-b h-screen from-sky-300 to-sky-500">
      <main className="flex-1 h-screen">
        <section className="w-full   py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  Quiz Bíblico
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Teste seus conhecimentos bíblicos e desafie seus amigos em
                  diferentes modos de jogo.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                <Button asChild size="lg" className="w-full">
                  <Link href="/questions">
                    <Play className="mr-2 h-4 w-4" />
                    Jogar Agora
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/criar-partida">
                    <Users className="mr-2 h-4 w-4" />
                    Criar Partida
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full"
                >
                  <Link href="/ranking">
                    <Trophy className="mr-2 h-4 w-4" />
                    Ranking
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="w-full">
                  <Link href="/setting">
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="container px-4 md:px-6 max-sm:mb-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 ">
              
              
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {[
                  {
                    title: "Torneio Semanal",
                    description:
                      "Compita com jogadores de todo o país e ganhe prêmios especiais.",
                    date: "Termina em 3 dias",
                  },
                  {
                    title: "Desafio Novo Testamento",
                    description:
                      "100 perguntas sobre os evangelhos e epístolas.",
                    date: "Novo desafio",
                  },
                  {
                    title: "Quiz em Equipe",
                    description:
                      "Forme sua equipe e participe do campeonato entre igrejas.",
                    date: "Inscrições abertas",
                  },
                ].map((challenge, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 flex-1">
                      {challenge.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {challenge.date}
                      </span>
                      <Button variant="link" size="sm" asChild>
                        <Link
                          className="text-sky-500"
                          href={`/desafio/${index}`}
                        >
                          Participar
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        
      </main>
  
    </div>
  );
}
