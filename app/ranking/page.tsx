"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award } from "lucide-react";

// Tipo para os jogadores no ranking
type Player = {
  id: number;
  name: string;
  score: number;
  matches: number;
  winRate: number;
  church?: string;
};

// Dados de exemplo para o ranking
const rankingData: Player[] = [
  {
    id: 1,
    name: "João Silva",
    score: 9850,
    matches: 42,
    winRate: 92,
    church: "Igreja Batista Central",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    score: 9720,
    matches: 38,
    winRate: 89,
    church: "Igreja Presbiteriana",
  },
  {
    id: 3,
    name: "Pedro Santos",
    score: 9650,
    matches: 45,
    winRate: 87,
    church: "Assembleia de Deus",
  },
  {
    id: 4,
    name: "Ana Costa",
    score: 9580,
    matches: 36,
    winRate: 91,
    church: "Igreja Metodista",
  },
  {
    id: 5,
    name: "Lucas Ferreira",
    score: 9450,
    matches: 40,
    winRate: 85,
    church: "Igreja Batista",
  },
  {
    id: 6,
    name: "Juliana Martins",
    score: 9320,
    matches: 35,
    winRate: 88,
    church: "Igreja Católica",
  },
  {
    id: 7,
    name: "Gabriel Alves",
    score: 9180,
    matches: 39,
    winRate: 83,
    church: "Igreja Adventista",
  },
  {
    id: 8,
    name: "Carla Souza",
    score: 9050,
    matches: 37,
    winRate: 86,
    church: "Igreja Luterana",
  },
  {
    id: 9,
    name: "Rafael Lima",
    score: 8920,
    matches: 34,
    winRate: 84,
    church: "Igreja Batista",
  },
  {
    id: 10,
    name: "Fernanda Gomes",
    score: 8800,
    matches: 32,
    winRate: 82,
    church: "Igreja Presbiteriana",
  },
];

// Dados de exemplo para o ranking semanal
const weeklyRankingData: Player[] = [
  {
    id: 3,
    name: "Pedro Santos",
    score: 2450,
    matches: 12,
    winRate: 92,
    church: "Assembleia de Deus",
  },
  {
    id: 1,
    name: "João Silva",
    score: 2380,
    matches: 10,
    winRate: 90,
    church: "Igreja Batista Central",
  },
  {
    id: 5,
    name: "Lucas Ferreira",
    score: 2320,
    matches: 11,
    winRate: 89,
    church: "Igreja Batista",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    score: 2280,
    matches: 9,
    winRate: 88,
    church: "Igreja Presbiteriana",
  },
  {
    id: 8,
    name: "Carla Souza",
    score: 2150,
    matches: 10,
    winRate: 85,
    church: "Igreja Luterana",
  },
  {
    id: 4,
    name: "Ana Costa",
    score: 2080,
    matches: 8,
    winRate: 87,
    church: "Igreja Metodista",
  },
  {
    id: 7,
    name: "Gabriel Alves",
    score: 1950,
    matches: 9,
    winRate: 83,
    church: "Igreja Adventista",
  },
  {
    id: 6,
    name: "Juliana Martins",
    score: 1880,
    matches: 7,
    winRate: 86,
    church: "Igreja Católica",
  },
  {
    id: 10,
    name: "Fernanda Gomes",
    score: 1750,
    matches: 8,
    winRate: 82,
    church: "Igreja Presbiteriana",
  },
  {
    id: 9,
    name: "Rafael Lima",
    score: 1680,
    matches: 7,
    winRate: 80,
    church: "Igreja Batista",
  },
];

// Dados de exemplo para o ranking por categoria (Novo Testamento)
const categoryRankingData: Player[] = [
  {
    id: 2,
    name: "Maria Oliveira",
    score: 4850,
    matches: 20,
    winRate: 94,
    church: "Igreja Presbiteriana",
  },
  {
    id: 4,
    name: "Ana Costa",
    score: 4720,
    matches: 19,
    winRate: 92,
    church: "Igreja Metodista",
  },
  {
    id: 1,
    name: "João Silva",
    score: 4650,
    matches: 21,
    winRate: 90,
    church: "Igreja Batista Central",
  },
  {
    id: 6,
    name: "Juliana Martins",
    score: 4580,
    matches: 18,
    winRate: 91,
    church: "Igreja Católica",
  },
  {
    id: 3,
    name: "Pedro Santos",
    score: 4450,
    matches: 22,
    winRate: 88,
    church: "Assembleia de Deus",
  },
  {
    id: 8,
    name: "Carla Souza",
    score: 4320,
    matches: 17,
    winRate: 89,
    church: "Igreja Luterana",
  },
  {
    id: 5,
    name: "Lucas Ferreira",
    score: 4180,
    matches: 20,
    winRate: 86,
    church: "Igreja Batista",
  },
  {
    id: 7,
    name: "Gabriel Alves",
    score: 4050,
    matches: 19,
    winRate: 85,
    church: "Igreja Adventista",
  },
  {
    id: 10,
    name: "Fernanda Gomes",
    score: 3920,
    matches: 16,
    winRate: 87,
    church: "Igreja Presbiteriana",
  },
  {
    id: 9,
    name: "Rafael Lima",
    score: 3800,
    matches: 18,
    winRate: 83,
    church: "Igreja Batista",
  },
];

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("geral");

  // Função para renderizar o ícone de posição
  const renderPositionIcon = (position: number) => {
    if (position === 1) {
      return <Trophy className="h-6 w-6 text-yellow-500" />;
    } else if (position === 2) {
      return <Medal className="h-6 w-6 text-gray-400" />;
    } else if (position === 3) {
      return <Award className="h-6 w-6 text-amber-700" />;
    } else {
      return <span className="font-bold text-gray-500">{position}</span>;
    }
  };

  // Função para obter os dados do ranking com base na aba ativa
  const getRankingData = () => {
    switch (activeTab) {
      case "semanal":
        return weeklyRankingData;
      case "categoria":
        return categoryRankingData;
      default:
        return rankingData;
    }
  };

  return (
    <div className="flex min-h-screen flex-col  bg-gradient-to-b from-sky-300 to-sky-500">
      <div className="container mx-auto max-w-4xl py-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl md:text-3xl text-center">
              Ranking de Jogadores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="geral"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="geral">Geral</TabsTrigger>
                <TabsTrigger value="semanal">Semanal</TabsTrigger>
                <TabsTrigger value="categoria">Novo Testamento</TabsTrigger>
              </TabsList>

              {["geral", "semanal", "categoria"].map((tab) => (
                <TabsContent key={tab} value={tab} className="space-y-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-2 p-4 font-medium bg-muted">
                      <div className="col-span-1 text-center">#</div>
                      <div className="col-span-4 md:col-span-3">Jogador</div>
                      <div className="col-span-3 md:col-span-2 text-right">
                        Pontuação
                      </div>
                      <div className="col-span-2 text-right hidden md:block">
                        Partidas
                      </div>
                      <div className="col-span-2 text-right">Taxa</div>
                      <div className="col-span-2 hidden md:block">Igreja</div>
                    </div>

                    {getRankingData().map((player, index) => (
                      <div
                        key={player.id}
                        className="grid grid-cols-12 gap-2 p-4 border-b last:border-b-0 items-center hover:bg-muted/50"
                      >
                        <div className="col-span-1 flex justify-center items-center">
                          {renderPositionIcon(index + 1)}
                        </div>
                        <div className="col-span-4 md:col-span-3 font-medium">
                          {player.name}
                        </div>
                        <div className="col-span-3 md:col-span-2 text-right">
                          {player.score}
                        </div>
                        <div className="col-span-2 text-right hidden md:block">
                          {player.matches}
                        </div>
                        <div className="col-span-2 text-right">
                          {player.winRate}%
                        </div>
                        <div className="col-span-2 hidden md:block text-gray-500 truncate">
                          {player.church || "-"}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
