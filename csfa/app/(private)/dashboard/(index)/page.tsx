import React from 'react';
import { Bell, Calendar, ChevronLeft, ChevronRight, HelpCircle, Book, Box, Plus, Library, BookOpenText, GraduationCap, Bot, CalendarRange, FolderSearch  } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-blue-600 font-bold text-xl">SAS</div>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-600 font-medium">Início</a>
            <a href="#" className="text-gray-600">Sala de aula</a>
            <a href="#" className="text-gray-600">Atividades</a>
            <a href="#" className="text-gray-600">Relatórios</a>
            <a href="#" className="text-gray-600">Recursos</a>
            <a href="#" className="text-gray-600">Gestão</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-600" />
          <HelpCircle className="w-5 h-5 text-gray-600" />
          <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
            <span className="text-blue-800">C</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full h-auto bg-red-600">
        <div className="p-6 grid grid-cols-12 grid-rows-1 gap-6">
            {/* Content Left */}
            <div className="col-span-8 flex flex-col bg-yellow-200 row-span-1">
                {/* Wrap top */}
                <div className="w-full bg-purple-500 flex flex-row p-2 gap-2">
                    {/* Profile Section */}
                    <div>
                      <div className="bg-blue-800 rounded-xl p-12 text-center text-white">
                        <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-blue-800 text-2xl">C</span>
                        </div>
                        <h2 className="text-xl font-bold mb-1">CLOVES</h2>
                        <p className="text-sm mb-2">Coordenador</p>
                        <p className="text-sm">Colegio São Francisco De Assis</p>
                      </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
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
                {/* Wrap Bottom */}
                <div className="flex flex-row">
                    {/* Profile Section */}
                    <div>
                      <div className="bg-blue-800 rounded-lg p-6 text-center text-white">
                        <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-blue-800 text-2xl">C</span>
                        </div>
                        <h2 className="text-xl font-bold mb-1">CLOVES</h2>
                        <p className="text-sm mb-2">Coordenador</p>
                        <p className="text-sm">Colegio São Francisco De Assis</p>
                      </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Atalhos rápidos</h2>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
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
            </div>

            {/* Content Right*/}
            <div id="calendarSection" className="col-span-4 bg-green-400 h-full">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Agenda</h2>
                    <div className="flex items-center space-x-2">
                      <button className="p-1"><ChevronLeft className="w-4 h-4" /></button>
                      <span className="text-sm">2 Fev. - 8 Fev.</span>
                      <button className="p-1"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center mb-4">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                      <div key={day} className="text-sm font-medium">{day}</div>
                    ))}
                    {[2, 3, 4, 5, 6, 7, 8].map((date) => (
                      <div key={date} className={`text-sm p-1 ${date === 6 ? 'bg-blue-100 rounded-full' : ''}`}>
                        {date}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                            <p>Dom</p>
                            <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div  id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                              <h3 className="text-sm font-medium">Lembrete</h3>
                              <p className="text-sm">Teste lembrete</p>
                              <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </main>
    </div>
  );
};

const QuickLink = ({ icon, title, isAdd = false }) => {
  return (
    <div className={`p-4 rounded-lg border ${isAdd ? 'border-dashed' : 'border-solid'} flex flex-col items-center justify-center space-y-2`}>
      <div className={`${isAdd ? 'text-gray-400' : 'text-blue-600'}`}>
        {icon}
      </div>
      <span className="text-sm text-center text-gray-600">{title}</span>
    </div>
  );
};

export default Dashboard;