import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between bg-primary border-b-[1px] border-b-[#262626] text-white px-6 py-5"
      onClick={() => dropdownOpen ? setDropdownOpen(!dropdownOpen) : null}
    >
      <div className="relative flex items-center w-40 sm:w-64 md:w-72 lg:w-80">
        <Image
          src="/searchbar.svg"
          width={12}
          height={12}
          alt="search"
          className="absolute left-3"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-black text-sm font-inter placeholder-gray-400 pl-7 pr-4 py-2 rounded-lg w-full outline-none border border-gray-700 focus:border-gray-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4">
          <Image src="/mail.svg" alt="mail icon" width={24} height={24} />
          <div className="w-[1px] h-6 bg-[#262626]"></div>
          <Image
            src="/notificationsicon.svg"
            alt="notifications icon"
            width={24}
            height={24}
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 focus:outline-none"
          >
            <Image
              src="/avatar.svg"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden md:flex flex-col text-left">
              <p className="text-sm font-inter text-gray-400">Role of User</p>
              <p className="text-base font-inter font-medium">Andrew Smith</p>
            </div>
          </button>

          {dropdownOpen && (
            <div className="md:hidden absolute  right-0 mt-2 w-48 bg-secondary text-white shadow-lg rounded-lg overflow-hidden z-50">
              <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-blue-950">
                <Image src="/mail.svg" alt="mail icon" width={20} height={20} />
                <span>Inbox</span>
              </button>
              <button className="w-full px-4 py-2 flex items-center gap-3 hover:bg-blue-950">
                <Image
                  src="/notificationsicon.svg"
                  alt="notifications icon"
                  width={20}
                  height={20}
                />
                <span>Notifications</span>
              </button>
              <div className="border-t-[1px] border-[#262626]"></div>
              <div className="px-4 py-2">
                <p className="text-sm font-inter text-gray-400">Role of User</p>
                <p className="text-base font-inter font-medium">Andrew Smith</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
