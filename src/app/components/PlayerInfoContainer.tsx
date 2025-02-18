'use client';

import PlayerInfo from './PlayerInfoCard';

const PlayerInfoContainer: React.FC = () => {
  const PLAYER_DATA = {
    userId: '6297036',
    username: 'yev_42',
    alias: '',
    email: 'yevgeniy+test42@monkeytilt.co',
    dob: '05/05/2000',
    age: 23,
    gender: '-',
    attachments: 0,
    registeredAt: '24/04/2024 14:25:25',
    lastLogin: '24/04/2024 14:25:25',
    status: 'Active',
    selfExclusion: 'Not self-excluded',
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center min-h-20 justify-between w-full px-4 py-3">
        <h2 className="text-xl font-semibold">Player Info</h2>

        <button className="bg-lime-500 text-black px-6 py-2 text-sm font-medium rounded-md hover:bg-opacity-80">
          + Actions
        </button>
      </div>
      <div className="px-4">
        <div className="flex flex-row gap-4 flex-wrap w-full py-4 border-t-[1px] border-t-[#262626]">
          <PlayerInfo
            title="Player Info"
            imageSrc="/user.svg"
            player={PLAYER_DATA}
          />
          <PlayerInfo
            title="Player Info"
            imageSrc="/user.svg"
            player={PLAYER_DATA}
          />
          <PlayerInfo
            title="Player Info"
            imageSrc="/user.svg"
            player={PLAYER_DATA}
          />
          
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoContainer;
