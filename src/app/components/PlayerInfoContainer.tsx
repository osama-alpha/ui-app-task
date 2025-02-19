'use client';

import PlayerInfo from './PlayerInfoCard';

const PlayerInfoContainer: React.FC = () => {
  const PLAYER_INFO_DATA = {
    userId: '6297036',
    username: 'yev_42',
    alias: '',
    email: 'yevgeniy+test42@monkeytilt.co',
    dob: '05/05/2000',
    age: 23,
    gender: 'Unknown',
    attachments: 0,
    registeredAt: '24/04/2024 14:25:25',
    lastLogin: '24/04/2024 14:25:25',
    status: 'Active',
    selfExclusion: 'Not self-excluded',
  };
  const PLAYER_INFO_FIELDS: {
    label: string;
    key: keyof typeof PLAYER_INFO_DATA;
    type?: 'active' | 'excluded' | 'expired';
  }[] = [
    { label: 'Status', key: 'status', type: 'active' },
    { label: 'Self-exclusion status', key: 'selfExclusion', type: 'excluded' },
    { label: 'User ID', key: 'userId' },
    { label: 'Username', key: 'username' },
    { label: 'Alias', key: 'alias' },
    { label: 'Email', key: 'email' },
    { label: 'Date of birth', key: 'dob' },
    { label: 'Age', key: 'age' },
    { label: 'Gender', key: 'gender' },
    { label: 'Attachments', key: 'attachments' },
    { label: 'Registered at', key: 'registeredAt' },
    { label: 'Last login', key: 'lastLogin' },
  ];
  const PLAYER_CONTACT_DATA = {
    address1: 'Rio de Janerio',
    address2: '-',
    city_town: 'Rio de Janerio',
    post_code: '12345',
    country: 'United States',
    nationality: 'Brazilian',
    birthplace: 'Rio de Janerio/NA',
    birthname: '-',
    mothers_maiden_name: '-',
    mobile: '(123) 456-7890',
    
  };

  const PLAYER_CONTACT_FIELDS: {
    label: string;
    key: keyof typeof PLAYER_CONTACT_DATA;
    type?: 'active' | 'excluded' | 'expired';
  }[] = [
    { label: 'Address 1', key: 'address1' },
    { label: 'Address 2', key: 'address2' },
    { label: 'City/Town', key: 'city_town' },
    { label: 'Post Code', key: 'post_code' },
    { label: 'Country', key: 'country' },
    { label: 'Nationality', key: 'nationality' },
    { label: 'Birth Place', key: 'birthplace' },
    { label: 'Birth Name', key: 'birthname' },
    { label: 'Mothers Maiden Name', key: 'mothers_maiden_name' },
    { label: 'Mobile', key: 'mobile' },
  ];
  const PLAYER_MISC_INFO_DATA = {
    language: 'Portuge',
    email_m_consent: 'Expired',
    sms_m_consent: 'Active',
    intended_gambling: '-',
    registered_by: '^GAmMatrixServer proxy',
    registration_channel: 'None',
    first_deposit: '-',
    affiliate_code: '-',
    tax_code: '-',
    tc_update:  'No',
    tc_accepted:  'Active',
    registration_channel2:  '0',

    
  };

  const PLAYER_MISC_INFO_FIELDS: {
    label: string;
    key: keyof typeof PLAYER_MISC_INFO_DATA;
    type?: 'active' | 'excluded' | 'expired';
  }[] = [
    { label: 'Language', key: 'language' },
    { label: 'E-mail marketing consent', key: 'email_m_consent', type: 'expired' },
    { label: 'SMS Marketing Consent', key: 'sms_m_consent', type: 'active' },
    { label: 'Intended extent of gambling', key: 'intended_gambling' },
    { label: 'Registered by', key: 'registered_by' },
    { label: 'Reistration Channel', key: 'registration_channel' },
    { label: 'First Deposit at', key: 'first_deposit' },
    { label: 'Affiliate Code', key: 'affiliate_code' },
    { label: 'Tax Code', key: 'tax_code' },
    { label: 'Last T&C update type', key: 'tc_update' },
    { label: 'General T&C accepted', key: 'tc_accepted', type:'active' },
    { label: 'Registartion Channel', key: 'registration_channel2' },

  ];

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
            data={PLAYER_INFO_DATA}
            fields={PLAYER_INFO_FIELDS}
          />
          <PlayerInfo
            title="Contact Info"
            imageSrc="/phone.svg"
            data={PLAYER_CONTACT_DATA}
            fields={PLAYER_CONTACT_FIELDS}
          />
          <PlayerInfo
            title="Additional Misc Info "
            imageSrc="/Misc.svg"
            data={PLAYER_MISC_INFO_DATA}
            fields={PLAYER_MISC_INFO_FIELDS}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoContainer;
