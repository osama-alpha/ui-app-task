'use client';
import { useState } from 'react';
import Navbar from './components/Nav';
import Sidebar from './components/Sidebar';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main
        className={`bg-primary text-white transition-all duration-300 ${
          isSidebarOpen ? 'w-[calc(100%-15rem)]' : 'w-full'
        }`}
      >
        <Navbar />
      </main>
    </div>
  );
}
