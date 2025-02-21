"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Bell, ChevronLeft, ChevronRight, Bot, Box, CalendarRange, FolderSearch, Library, BookOpenText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Component QuickLink
interface QuickProps {
  icon: React.ReactNode;
  title: string;
  isAdd?: boolean;
}
const QuickLink: React.FC<QuickProps> = ({ icon, title, isAdd = false }) => (
  <div className={`p-4 rounded-lg border ${isAdd ? "border-dashed" : "border-solid"} flex flex-col items-center justify-center space-y-2`}>
    <div className={`${isAdd ? "text-gray-400" : "text-blue-600"}`}>{icon}</div>
    <span className="text-sm text-center text-gray-600">{title}</span>
  </div>
);

const Dashboard: React.FC = () => {
  const { data: session } = useSession();

  const calendarDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const calendarDates = [2, 3, 4, 5, 6, 7, 8];

  const reminders = [
    { day: "Sáb", date: "01 Fev", title: "Lembrete", description: "Teste lembrete", time: "17h00 às 18h00" },
    { day: "Dom", date: "02 Fev", title: "Lembrete", description: "Teste lembrete", time: "17h00 às 18h00" },
    { day: "Seg", date: "03 Fev", title: "Lembrete", description: "Teste lembrete", time: "17h00 às 18h00" },
    { day: "Ter", date: "04 Fev", title: "Lembrete", description: "Teste lembrete", time: "17h00 às 18h00" },
  ];

  return (
    <div>
      <main className="w-full h-auto p-6 pt-16">
        <div className="p-6 grid grid-cols-6 gap-4">
          {/* Content Left */}
          <section className="col-span-4 flex flex-col">
            <div className="flex gap-2 p-4">
              {/* Profile Section */}
              <div className="w-2/6">
                <div className="bg-blue-800 rounded-xl p-12 text-center text-white">
                  <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 overflow-hidden">
                    {session?.user.image ? (
                      <Image className="rounded-full" src={session.user.image} width={80} height={80} alt="Foto do usuário" />
                    ) : (
                      <Image className="rounded-full" src="/default-profile.webp" width={80} height={80} alt="Foto do usuário" />
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-1">{session?.user.name}</h2>
                  <p className="text-sm mb-2">{session?.user.setor ?? "Setor não informado"}</p> 
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="w-4/6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold">Atalhos rápidos</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <QuickLink icon={<Bot />} title="Assistente do Professor" />
                      <QuickLink icon={<Box />} title="Provas Escolares" />
                      <QuickLink icon={<CalendarRange />} title="Adicionar atalho" isAdd />
                      <QuickLink icon={<BookOpenText />} title="Adicionar atalho" isAdd />
                      <QuickLink icon={<Library />} title="Adicionar atalho" isAdd />
                      <QuickLink icon={<FolderSearch />} title="Adicionar atalho" isAdd />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Content Right - Calendar */}
          <aside id="calendarSection" className="col-span-2 p-4">
            <Card className="relative">
              <CardContent className="h-auto max-h-[615px]">
                {/* Calendar Header */}
                <div className="absolute left-0 top-0 bg-white w-full h-16 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Calendário</h2>
                    <div className="flex items-center space-x-2">
                      <button className="p-1">
                        <span className="hidden">Button ChevronLeft</span>
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-sm">2 Fev. - 8 Fev.</span>
                      <button className="p-1">
                        <span className="hidden">Button ChevronRight</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center mb-4">
                    {calendarDays.map((day) => (
                      <div key={day} className="text-sm font-medium">
                        {day}
                      </div>
                    ))}
                    {calendarDates.map((date) => (
                      <div key={date} className={`text-sm p-1 ${date === 6 ? "bg-blue-100 rounded-full" : ""}`}>
                        {date}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar Main Content */}
                <div className="w-full h-96 overflow-y-auto mt-40">
                  <div className="space-y-2 pt-2">
                    {reminders.map((reminder, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div className="flex flex-col items-start justify-center w-1/5">
                          <p>{reminder.day}</p>
                          <p>{reminder.date}</p>
                        </div>
                        <div className="w-4/5">
                          <div className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">{reminder.title}</h3>
                            <p className="text-sm">{reminder.description}</p>
                            <small className="text-xs text-gray-500">{reminder.time}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
