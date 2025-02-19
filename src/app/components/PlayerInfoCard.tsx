import Image from 'next/image';

interface PlayerInfoProps {
  title: string;
  imageSrc: string;
  data: Record<string, any>;
  fields: {
    label: string;
    key: string;
    type?: 'active' | 'excluded' | 'expired';
  }[];
}

const PlayerInfoRow: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <div className="flex justify-between items-center border-b border-[#262626] py-2 hover:opacity-80 hover:cursor-pointer">
    <span className="text-sm text-[#A3A3A3]">{label}</span>
    <span className="text-sm text-white">{value}</span>
  </div>
);

const StatusBadge: React.FC<{
  status: string;
  type?: 'active' | 'excluded' | 'expired';
}> = ({ status, type }) => (
  <span
    className={`px-2 py-0.5 text-xs font-semibold rounded-xl ${
      type === 'active'
        ? 'text-[#4ADE80] border border-[#4ADE80]'
        : type === 'expired'
        ? 'text-[#FB923C] border border-[#FB923C]'
        : type === 'excluded'
        ? 'text-white border border-[#404040]'
        : ''
    }`}
  >
    {status}
  </span>
);

const PlayerInfo: React.FC<PlayerInfoProps> = ({
  title,
  imageSrc,
  data,
  fields,
}) => {
  return (
    <div className="bg-secondary text-white p-4 rounded-lg shadow-md w-96 border-[1px] border-[#404040]">
      <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
        <Image src={imageSrc} alt={title} width={20} height={20} />
        <h2 className="text-md font-semibold">{title}</h2>
      </div>

      <div>
        {fields.map(({ label, key, type }) => (
          <PlayerInfoRow
            key={key}
            label={label}
            value={
              type ? (
                <StatusBadge status={data[key]} type={type} />
              ) : (
                data[key] || '-'
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerInfo;
