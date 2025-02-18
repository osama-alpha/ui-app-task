'use client';
import { useState } from 'react';
import Navbar from './components/Nav';
import Sidebar from './components/Sidebar';
import PlayerMenu from './components/PlayerMenu';
import PlayerInfoContainer from './components/PlayerInfoContainer';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main
        className={`bg-primary flex  flex-col text-white transition-all duration-300 ${
          isSidebarOpen ? 'w-[calc(100%-15rem)]' : 'w-full'
        }`}
      >
        <Navbar />
        <div className='flex flex-1'>
          <PlayerMenu />
          <div className="flex w-full">
            <PlayerInfoContainer />
          </div>
        </div>
      </main>
    </div>
  );
}
