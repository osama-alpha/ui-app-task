import Image from 'next/image';

interface MenuItem {
  name: string;
  icon: string;
  path: string;
}

const MENU_ITEMS: MenuItem[] = [
  { name: 'Player Info', icon: '/user.svg', path: '/' },
  { name: 'Transactions', icon: '/transactionsIcon.svg', path: '/' },
  { name: 'GMWI Payment Transactions', icon: '/transactionsIcon.svg', path: '/' },
  { name: 'GMWI Gaming Transactions', icon: '/transactionsIcon.svg', path: '/' },
  { name: 'Bonuses', icon: '/coins.svg', path: '/' },
  { name: 'Roles', icon: '/user-check.svg', path: '/' },
  { name: 'Responsible Gambling', icon: '/dices.svg', path: '/' },
  { name: 'Logins', icon: '/log-in.svg', path: '/' },
  { name: 'Audit', icon: '/file-search.svg', path: '/' },
  { name: 'License Audit', icon: '/scroll-text.svg', path: '/' },
  { name: 'Devices', icon: '/monitor-smartphone.svg', path: '/' },
  { name: 'Consents', icon: '/receipt-text.svg', path: '/' },
];

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => (
  <a
    key={item.name}
    href={item.path}
    className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-[#2a2a2a] transition"
  >
    <Image src={item.icon} alt={item.name} width={20} height={20} />
    <span className={`text-sm ${item.name === 'Player Info' ? 'text-white' : 'text-[#A3A3A3]'}`}>
      {item.name}
    </span>
  </a>
);

const AssignedRoles: React.FC<{ roles: string[] }> = ({ roles }) => (
  <div className="mt-auto mb-3 bg-secondary p-3 rounded-lg border-[1px] border-[#262626]">
    <p className="text-sm font-semibold">Assigned roles</p>
    <ul className="text-xs list-disc list-inside text-gray-400 mt-2 space-y-2">
      {roles.map((role) => (
        <li key={role}>{role}</li>
      ))}
    </ul>
  </div>
);

const PlayerMenu = () => {
  return (
    <aside className=" bg-primary w-72 border-r-[1px] border-r-[#262626] text-white p-4 flex flex-col transition-all duration-300">
      <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary">
        <Image src="/Avatar2.svg" alt="Profile" width={40} height={40} className="rounded-full" />
        <div>
          <p className="text-sm font-semibold">Miss testing account</p>
          <p className="text-xs text-gray-400">Umiiumi BV</p>
        </div>
      </div>

      <nav className="flex-1 mt-6">
        {MENU_ITEMS.map((item) => (
          <MenuItemComponent key={item.name} item={item} />
        ))}
      </nav>

      <AssignedRoles roles={['Admin', 'Banana Biter', 'SupportL1']} />
    </aside>
  );
};

export default PlayerMenu;
