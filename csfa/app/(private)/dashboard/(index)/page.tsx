import React from 'react';
import { Bell, Calendar, ChevronLeft, ChevronRight, HelpCircle, Book, Box, Plus, Library, BookOpenText, GraduationCap, Bot, CalendarRange, FolderSearch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface QuickProps {
  icon: React.ReactNode;
  title: string;
  isAdd?: boolean;
}

const QuickLink: React.FC<QuickProps> = ({ icon, title, isAdd = false }) => {
  return (
    <div className={`p-4 rounded-lg border ${isAdd ? 'border-dashed' : 'border-solid'} flex flex-col items-center justify-center space-y-2`}>
      <div className={`${isAdd ? 'text-gray-400' : 'text-blue-600'}`}>
        {icon}
      </div>
      <span className="text-sm text-center text-gray-600">{title}</span>
    </div>
  );
};



const Dashboard = () => {
  return (
    <div>


      {/* Main Content */}
      <main className="w-full h-auto p-6 pt-16">
        <div className="p-6 grid grid-cols-6 gap-4">
          {/* Content Left */}
          <div className="h-full col-span-4 flex flex-col">
            {/* Wrap top */}
            <div className="w-full flex flex-row gap-2 p-4">
              {/* Profile Section */}
              <div className="w-2/6">
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

          </div>

          {/* Content Right*/}
          <div id="calendarSection" className="col-span-2 p-4 h-full">
            <Card className="relative">
              <CardContent className="h-auto max-h-[615px]">

                {/* Content Top - CalendarHeader */}
                <div className="absolute left-0 top-0 bg-white w-full h-16 p-6">

                  {/* CalendarHeaderTop */}
                  <div className="flex justify-between items-center mb-4">

                    <h2 className="text-lg font-semibold">Calendário</h2>

                    <div className="flex items-center space-x-2">

                      <button className="p-1">
                        <ChevronLeft className="w-4 h-4" />
                        <span className='hidden'>ChevronLeft</span>
                      </button>

                      <span className="text-sm">2 Fev. - 8 Fev.</span>

                      <button className="p-1">
                        <ChevronRight className="w-4 h-4" />
                        <span className='hidden'>ChevronRight</span>
                      </button>

                    </div>

                  </div>
                  {/* CalendarHeaderBotton */}
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

                </div>
                
                {/* CalendarMainContent */}
                <div className="w-full h-96 overflow-hidden overflow-y-auto mt-40">
                    
                    <div className="space-y-2 pt-2">

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                          <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                            <p>Sab</p>
                            <p>01 Fev</p>
                          </div>
                          <div id="contentLembrete" className="w-4/5">
                            <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                              <h3 className="text-sm font-medium">Lembrete</h3>
                              <p className="text-sm">Teste lembrete</p>
                              <small className="text-xs text-gray-500">17h00 às 18h00</small>
                            </div>
                          </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Seg</p>
                          <p>03 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Ter</p>
                          <p>04 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex border border-slate-200">
                        <div id="contentData" className="flex flex-col items-start justify-center w-1/5">
                          <p>Dom</p>
                          <p>02 Fev</p>
                        </div>
                        <div id="contentLembrete" className="w-4/5">
                          <div id="lembrete" className="w-full bg-blue-50 rounded-md p-4">
                            <h3 className="text-sm font-medium">Lembrete</h3>
                            <p className="text-sm">Teste lembrete</p>
                            <small className="text-xs text-gray-500">17h00 às 18h00</small>
                          </div>
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



export default Dashboard;