import Image from 'next/image';

interface PlayerInfoProps {
  title: string;
  imageSrc: string;
  player: {
    userId: string;
    username: string;
    alias?: string;
    email: string;
    dob: string;
    age: number;
    gender: string;
    attachments: number;
    registeredAt: string;
    lastLogin: string;
    status: string;
    selfExclusion: string;
  };
}

const PlayerInfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <div className="flex justify-between items-center border-b border-[#262626] py-2">
    <span className="text-sm text-gray-400">{label}</span>
    <span className="text-sm text-white">{value}</span>
  </div>
);

const StatusBadge: React.FC<{
  status: string;
  type: 'active' | 'excluded' | 'expired';
}> = ({ status, type }) => (
  <span
    className={`px-2 py-0.5 text-xs font-semibold rounded-xl ${
      type === 'active'
        ? ' text-[#4ADE80] border border-[#4ADE80]'
        : type === 'expired'
        ? 'text-[#FB923C] border border-[#FB923C]'
        : ' text-white border border-[#404040]'
    }
    `}
  >
    {status}
  </span>
);

const PlayerInfo: React.FC<PlayerInfoProps> = ({ title, imageSrc, player }) => {
  return (
    <div className="bg-secondary text-white p-4 rounded-lg shadow-md w-96">
      <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
        <Image src={imageSrc} alt={title} width={20} height={20} />
        <h2 className="text-md font-semibold">{title}</h2>
      </div>

      <div className="">
        <PlayerInfoRow
          label="Status"
          value={<StatusBadge status={player.status} type="active" />}
        />
        <PlayerInfoRow
          label="Self-exclusion status"
          value={<StatusBadge status={player.selfExclusion} type="excluded" />}
        />
        <PlayerInfoRow label="User ID" value={player.userId} />
        <PlayerInfoRow label="Username" value={player.username} />
        <PlayerInfoRow label="Alias" value={player.alias || 'No'} />
        <PlayerInfoRow label="Email" value={player.email} />
        <PlayerInfoRow
          label="Date of birth"
          value={`${player.dob} (${player.age} years)`}
        />
        <PlayerInfoRow label="Gender" value={player.gender} />
        <PlayerInfoRow label="Attachments" value={player.attachments} />
        <PlayerInfoRow label="Registered at" value={player.registeredAt} />
        <PlayerInfoRow label="Last login" value={player.lastLogin} />
      </div>
    </div>
  );
};

export default PlayerInfo;
