'use client';
import { useState } from 'react';
import Navbar from './components/Nav';
import Sidebar from './components/Sidebar';
import PlayerMenu from './components/PlayerMenu';
import PlayerInfoContainer from './components/PlayerInfoContainer';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main
      className={`bg-primary flex  flex-row text-white transition-all duration-300  w-full`}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex flex-col w-full bg-primary">
        <Navbar />
        <div className="flex flex-1">
          <PlayerMenu />
          <div className="flex w-full">
            <PlayerInfoContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
