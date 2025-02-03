'use client';

import { Icon } from '@iconify/react';

export default function DesignerDashboard() {


  return (
    <div className='flex'>
      <aside className='w-24 bg-slate-200 flex items-start justify-center p-6 h-full'>
          <a href="./banner" className='text-gray-900 flex p-4 gap-2'>
            <Icon icon={"ph:flag-banner-fill"} />
            Banners
          </a>
      </aside>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Designer</h1>
        <p>Bem-vindo!</p>
        <p>Email: </p>
        <p>Setor: </p>
      </div>
    </div>
  );
}
