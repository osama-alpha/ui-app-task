import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-primary border-b-[1px] border-b-[#262626] text-white px-6 py-5">
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

        <div className="flex items-center gap-3">
          <Image
            src="/avatar.svg"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="hidden sm:flex flex-col text-left">
            <p className="text-sm font-inter text-gray-400">Role of User</p>
            <p className="text-base font-inter font-medium">Andrew Smith</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
