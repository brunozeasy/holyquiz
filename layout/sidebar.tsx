import { Button } from "@/components/ui/button";
import {
  BarChart3,
  BookOpen,
  Church,
  Home,
  LogOut,
  Play,
  Settings,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 z-9999 flex h-screen w-70 flex-col">
      <aside className="hidden md:flex flex-col w-64 border-r h-screen bg-sky-500 dark:bg-gray-900">
        <div className="p-6 w-full items-center flex justify-center">
          <Link href="/premium" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white">HolyQuiz</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <div className="mb-10">
            <Button
              variant="ghost"
              className="w-full rounded-2xl  bg-yellow-500 hover:text-white hover:bg-yellow-500"
              asChild
            >
              <Link href="/home">
                <Play className="h-5 w-5" />
                Jogar
              </Link>
            </Button>
          </div>

          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/premium">
              <Home className="mr-2 h-4 w-4" />
              Início
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/igreja">
              <Church className="mr-2 h-4 w-4" />
              Igreja
            </Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/ranking">
              <Trophy className="mr-2 h-4 w-4" />
              Ranking
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/estatisticas">
              <BarChart3 className="mr-2 h-4 w-4" />
              Estatísticas
            </Link>
          </Button>
        </nav>
        <div className="p-4 border-t mt-auto">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/setting">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            asChild
          >
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Link>
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
