'use client';
import { useState } from 'react';
import Navbar from './components/Nav';
import Sidebar from './components/Sidebar';
import PlayerMenu from './components/PlayerMenu';
import PlayerInfoContainer from './components/PlayerInfoContainer';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main
      className={`bg-primary flex min-h-screen w-[100vw] flex-row text-white transition-all duration-300  `}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        className={`flex flex-col  bg-primary ${
          isSidebarOpen
            ? 'blur lg:blur-0 pointer-events-none lg:pointer-events-auto '
            : ''
        }`}
        // onClick={() => isSidebarOpen ? setIsSidebarOpen(false) : null}
      >
        <Navbar />
        {/* <div className="flex"> */}
        <div className="flex w-full h-full  ">
          <div className="hidden  lg:block lg:border-r-[1px] border-r-[#262626]">
            <PlayerMenu />
          </div>
          <PlayerInfoContainer />
        </div>
        {/* </div> */}
      </div>
    </main>
  );
}
