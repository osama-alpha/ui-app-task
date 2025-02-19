import { useState } from 'react';
import Image from 'next/image';

interface InfoRowProps {
  ip_key: string;
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({
  ip_key,
  label,
  value,
  highlight,
}) => {
  return (
    <div className="flex justify-between items-center border-b border-[#262626] py-2 hover:opacity-80 hover:cursor-pointer">
      <span
        className={`text-sm ${
          ip_key.startsWith('ip') ? 'text-white' : 'text-[#A3A3A3]'
        } `}
      >
        {label}
      </span>
      <span
        className={`text-sm ${highlight ? 'text-[#A3E635]' : 'text-white'} `}
      >
        {value}
      </span>
    </div>
  );
};

interface CollapsibleCardProps {
  title: string;
  imageSrc: string;
  data: { label: string; key: string; highlight?: boolean }[];
  values: Record<string, any>;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  imageSrc,
  data,
  values,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-[#181818] text-white p-4 rounded-lg shadow-md w-96 border-[1px] border-[#404040] ${
        isOpen ? 'h-full' : 'h-16'
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 ">
          <Image src={imageSrc} alt={title} width={20} height={20} />
          <h2 className="text-md font-semibold">{title}</h2>
        </div>
        {isOpen ? (
          <Image
            src={'/unexpand.svg'}
            alt={title}
            width={20}
            height={20}
            className="hover:opacity-50 hover:cursor-pointer"
          />
        ) : (
          <Image
            src={'/expand.svg'}
            alt={title}
            width={20}
            height={20}
            className="hover:opacity-50 hover:cursor-pointer"
          />
        )}
      </div>

      {isOpen && (
        <div className="mt-2">
          {data.map(({ label, key, highlight }) => (
            <InfoRow
              key={key}
              ip_key={key}
              label={label}
              value={values[key] || ''}
              highlight={highlight}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
