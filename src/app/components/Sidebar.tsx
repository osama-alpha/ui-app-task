'use client';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

interface SubMenuItem {
  name: string;
  path: string;
}

interface MenuItem {
  name: string;
  icon: string;
  path?: string;
  subMenu?: SubMenuItem[];
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const MENU_ITEMS: MenuItem[] = [
  { name: 'Community', icon: '/CommunityIcon.svg', path: '/' },
  {
    name: 'Players',
    icon: '/PlayersIcon.svg',
    subMenu: [
      { name: 'Registered Players', path: '/' },
      { name: 'Roles', path: '/' },
      { name: 'Blocked History', path: '/' },
      { name: 'Manage Consent', path: '/' },
    ],
  },
  { name: 'Transactions', icon: '/transactionsIcon.svg', subMenu: [] },
  { name: 'GMWI', icon: '/transactionsIcon.svg', subMenu: [] },
  { name: 'Banking', icon: '/Banking.svg', subMenu: [] },
  { name: 'Misc', icon: '/Misc.svg', subMenu: [] },
  { name: 'Tutorials', icon: '/Tutorials.svg', subMenu: [] },
  { name: 'PAM', icon: '/PAM.svg', subMenu: [] },
];

const MenuItemComponent: React.FC<{
  item: MenuItem;
  openMenus: { [key: string]: boolean };
  toggleMenu: (name: string) => void;
  selectedMenu: string | null;
  setSelectedMenu: (name: string) => void;
}> = ({ item, openMenus, toggleMenu, selectedMenu, setSelectedMenu }) => {
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;
  return (
    <div key={item.name}>
      <button
        aria-label={`Navigate to ${item.name}`}
        className={`flex items-center justify-between w-full px-3 py-3 text-left rounded-lg hover:text-white ${
          selectedMenu === item.name ? 'text-white' : 'text-[#A3A3A3]'
        }`}
        onClick={() => toggleMenu(item.name)}
      >
        <div className="flex items-center gap-3">
          <Image src={item.icon} alt={item.name} width={20} height={20} />
          <span className="font-inter text-sm">{item.name}</span>
        </div>
        {item.name !== 'Community' && (
          <Image
            src="/expand.svg"
            alt="Expand"
            width={16}
            height={16}
            className={`transition-transform ${
              openMenus[item.name] ? 'rotate-180' : ''
            }`}
          />
        )}
      </button>

      {hasSubMenu && openMenus[item.name] && (
        <div className="ml-2 pl-3 space-y-1">
          {item.subMenu!.map((sub) => (
            <a
              key={sub.name}
              href={sub.path}
              className={`block font-sans text-sm py-2 px-4 rounded-lg ${
                selectedMenu === sub.name
                  ? 'text-white bg-[#262626]'
                  : 'text-[#A3A3A3]'
              } hover:text-white hover:bg-[#262626]`}
              onClick={() => setSelectedMenu(sub.name)}
            >
              {sub.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarFooter: React.FC = () => (
  <div className="mt-2 lg:mt-auto mb-4 space-y-2">
    <button
      aria-label="Settings"
      className="flex items-center gap-3 text-gray-400 hover:text-white w-full px-3 py-2 text-left"
    >
      <Image src="/Settings.svg" alt="Settings" width={20} height={20} />
      <span className="font-inter text-sm">Settings</span>
    </button>
    <button
      aria-label="Logout"
      className="flex items-center gap-3 text-red-500 hover:text-red-400 w-full px-3 py-2 text-left"
    >
      <Image src="/logout.svg" alt="Logout" width={20} height={20} />
      <span className="font-inter text-sm">Logout Account</span>
    </button>
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
    setSelectedMenu(name);
  };

  return (
    <div className="relative">
      <aside
        className={`bg-secondary text-white h-full p-4 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'w-60' : 'w-0 overflow-hidden'
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          className="absolute top-6 -right-2 w-6 h-6 bg-secondary rounded-md
         flex items-center justify-center transition-transform
         hover:bg-opacity-90 focus:outline-none focus:ring-1
         focus:ring-offset-1 focus:ring-offset-primary focus:ring-secondary;"
        >
          <Image
            src={isSidebarOpen ? '/chevronleft.svg' : '/chevron_right.svg'}
            alt="Toggle Sidebar"
            width={20}
            height={20}
          />
        </button>

        {isSidebarOpen && (
          <>
            <div className="flex justify-center py-2">
              <Image src="/monkey.svg" alt="Logo" width={120} height={50} />
            </div>
            <div className="h-[1px] bg-[#262626]"></div>

            <nav className="lg:flex-1 py-4">
              {MENU_ITEMS.map((item) => (
                <MenuItemComponent
                  key={item.name}
                  item={item}
                  openMenus={openMenus}
                  toggleMenu={toggleMenu}
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                />
              ))}
            </nav>

            <SidebarFooter />
          </>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
