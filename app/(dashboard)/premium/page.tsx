"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PremiumDashboard } from "@/components/premium-dashboard";
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
  Gift,
  HelpCircle,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function PremiumPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dados de exemplo para o usuário premium
  const userData = {
    name: "Bruno Silva",
    level: 18,
    xp: 2450,
    nextLevelXp: 3000,
    premiumSince: "10/01/2025",
    nextPayment: "10/04/2025",
    streakDays: 42,
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Mobile header e sidebar */}
      

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 inset-x-0 h-16 border-t bg-white dark:bg-gray-900 z-10">
        <div className="grid grid-cols-5 h-full">
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            asChild
          >
            <Link href="/dashboard">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Início</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            asChild
          >
            <Link href="/jogar">
              <Play className="h-5 w-5" />
              <span className="text-xs mt-1">Jogar</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            asChild
          >
            <Link href="/ranking">
              <Trophy className="h-5 w-5" />
              <span className="text-xs mt-1">Ranking</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center rounded-none h-full"
            asChild
          >
            <Link href="/estatisticas">
              <BarChart3 className="h-5 w-5" />
              <span className="text-xs mt-1">Stats</span>
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="flex flex-col items-center justify-center rounded-none h-full"
          >
            <Crown className="h-5 w-5 text-yellow-500" />
            <span className="text-xs mt-1">Premium</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:pt-0 pt-16 pb-16 md:pb-0">
        <div className="container p-4 md:p-6 max-w-6xl">
          <PremiumDashboard userData={userData} />
        </div>
      </main>
    </div>
  );
}
